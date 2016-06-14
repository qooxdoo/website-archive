(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"inspector.Application","qx.theme":"inspector.theme.Theme","qx.version":"1.0.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"./script"},"inspector":{"resourceUri":"./resource","sourceUri":"./script","version":"trunk"},"qx":{"resourceUri":"./resource","sourceUri":"./script","version":"1.0.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":{},"en":{}};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["inspector:inspector.js"]],
  urisBefore : [],
  packageHashes : {"0":"f091fdf02cda"},
  boot : "boot",
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
}

qx.$$loader.signalStartup = function () {
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['f091fdf02cda']={"resources":{"inspector/css/consoleview.css":"inspector","inspector/css/domview.css":"inspector","inspector/css/propertylisthtml.css":"inspector","inspector/css/sourceview.css":"inspector","inspector/html/index.html":"inspector","inspector/images/autocomplete/method_private18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/method_protected18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/method_public18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_private18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_protected18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_public18.gif":[18,18,"gif","inspector"],"inspector/images/close.gif":[17,13,"gif","inspector"],"inspector/images/close.png":[17,13,"png","inspector"],"inspector/images/components/atom.png":[16,16,"png","inspector"],"inspector/images/components/button.png":[16,16,"png","inspector"],"inspector/images/components/checkbox.png":[16,16,"png","inspector"],"inspector/images/components/combobox.png":[16,16,"png","inspector"],"inspector/images/components/document.png":[16,16,"png","inspector"],"inspector/images/components/groupbox.png":[16,16,"png","inspector"],"inspector/images/components/horizontallayout.png":[16,16,"png","inspector"],"inspector/images/components/image.png":[16,16,"png","inspector"],"inspector/images/components/label.png":[16,16,"png","inspector"],"inspector/images/components/layout.png":[16,16,"png","inspector"],"inspector/images/components/listview.png":[16,16,"png","inspector"],"inspector/images/components/menu.png":[16,16,"png","inspector"],"inspector/images/components/radiobutton.png":[16,16,"png","inspector"],"inspector/images/components/spinner.png":[16,16,"png","inspector"],"inspector/images/components/splitpane.png":[16,16,"png","inspector"],"inspector/images/components/table.png":[16,16,"png","inspector"],"inspector/images/components/textarea.png":[16,16,"png","inspector"],"inspector/images/components/textfield.png":[16,16,"png","inspector"],"inspector/images/components/toolbar.png":[16,16,"png","inspector"],"inspector/images/components/tree.png":[16,16,"png","inspector"],"inspector/images/components/verticallayout.png":[16,16,"png","inspector"],"inspector/images/components/window.png":[16,16,"png","inspector"],"inspector/images/icons/api.png":[22,22,"png","inspector"],"inspector/images/icons/goto.png":[22,22,"png","inspector"],"inspector/images/icons/highlight.png":[22,22,"png","inspector"],"inspector/images/icons/setinit.png":[22,22,"png","inspector"],"inspector/images/icons/setnull.png":[22,22,"png","inspector"],"inspector/images/null.png":[15,15,"png","inspector"],"inspector/images/open.gif":[17,13,"gif","inspector"],"inspector/images/open.png":[17,13,"png","inspector"],"inspector/images/shell/errorIcon.png":[14,14,"png","inspector"],"inspector/images/shell/infoIcon.png":[14,14,"png","inspector"],"inspector/images/shell/warningIcon.png":[14,14,"png","inspector"],"inspector/images/spacer.gif":[17,13,"gif","inspector"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/document-properties.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-find.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/view-refresh.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]}};
(function(){var p="toString",o=".",n="default",m="Object",k='"',j="Array",h="()",g="String",f="Function",e=".prototype",N="function",M="Boolean",L="Error",K="RegExp",J="warn",I="hasOwnProperty",H="string",G="toLocaleString",F='\", "',E="info",w="BROKEN_IE",x="isPrototypeOf",u="Date",v="",s="qx.Bootstrap",t="]",q="Class",r="error",y="[Class ",z="valueOf",B="Number",A="count",D="debug",C="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return y+this.classname+t;
},createNamespace:function(name,bf){var bh=name.split(o);
var parent=window;
var bg=bh[0];

for(var i=0,bi=bh.length-1;i<bi;i++,bg=bh[i]){if(!parent[bg]){parent=parent[bg]={};
}else{parent=parent[bg];
}}parent[bg]=bf;
return bg;
},setDisplayName:function(Q,R,name){Q.displayName=R+o+name+h;
},setDisplayNames:function(ba,bb){for(var name in ba){var bc=ba[name];

if(bc instanceof Function){bc.displayName=bb+o+name+h;
}}},define:function(name,bp){if(!bp){var bp={statics:{}};
}var bu;
var bs=null;
qx.Bootstrap.setDisplayNames(bp.statics,name);

if(bp.members){qx.Bootstrap.setDisplayNames(bp.members,name+e);
bu=bp.construct||new Function;
var bq=bp.statics;

for(var br in bq){bu[br]=bq[br];
}bs=bu.prototype;
var bv=bp.members;

for(var br in bv){bs[br]=bv[br];
}}else{bu=bp.statics||{};
}var bt=this.createNamespace(name,bu);
bu.name=bu.classname=name;
bu.basename=bt;
bu.$$type=q;
if(!bu.hasOwnProperty(p)){bu.toString=this.genericToString;
}if(bp.defer){bp.defer(bu,bs);
}qx.Bootstrap.$$registry[name]=bp.statics;
return bu;
}};
qx.Bootstrap.define(s,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bC){return bC.__count__;
},"default":function(V){var length=0;

for(var W in V){length++;
}return length;
}})[(({}).__count__==0)?A:n],objectMergeWith:function(bJ,bK,bL){if(bL===undefined){bL=true;
}
for(var bM in bK){if(bL||bJ[bM]===undefined){bJ[bM]=bK[bM];
}}return bJ;
},__a:[x,I,G,p,z],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bw){var bx=[];

for(var bA in bw){bx.push(bA);
}var by=qx.Bootstrap.__a;
var bz=Object.prototype.hasOwnProperty;

for(var i=0,a=by,l=a.length;i<l;i++){if(bz.call(bw,a[i])){bx.push(a[i]);
}}return bx;
},"default":function(bj){var bk=[];

for(var bl in bj){bk.push(bl);
}return bk;
}})[typeof (Object.keys)==
N?C:
(function(){for(var bd in {toString:1}){return bd;
}})()!==p?w:n],getKeysAsString:function(X){var Y=qx.Bootstrap.getKeys(X);

if(Y.length==0){return v;
}return k+Y.join(F)+k;
},__b:{"[object String]":g,"[object Array]":j,"[object Object]":m,"[object RegExp]":K,"[object Number]":B,"[object Boolean]":M,"[object Date]":u,"[object Function]":f,"[object Error]":L},firstUp:function(S){return S.charAt(0).toUpperCase()+S.substr(1);
},firstLow:function(bE){return bE.charAt(0).toLowerCase()+bE.substr(1);
},getClass:function(bn){var bo=Object.prototype.toString.call(bn);
return (qx.Bootstrap.__b[bo]||bo.slice(8,-1));
},isString:function(be){return (be!==null&&(typeof be===H||qx.Bootstrap.getClass(be)==g||be instanceof String||(!!be&&!!be.$$isString)));
},isArray:function(bB){return (bB!==null&&(bB instanceof Array||(bB&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bB.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bB)==j||(!!bB&&!!bB.$$isArray)));
},isObject:function(bm){return (bm!==undefined&&bm!==null&&qx.Bootstrap.getClass(bm)==m);
},isFunction:function(P){return qx.Bootstrap.getClass(P)==f;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bT,name){while(bT){if(bT.$$properties&&bT.$$properties[name]){return bT.$$properties[name];
}bT=bT.superclass;
}return null;
},hasProperty:function(bP,name){return !!qx.Bootstrap.getPropertyDefinition(bP,name);
},getEventType:function(O,name){var O=O.constructor;

while(O.superclass){if(O.$$events&&O.$$events[name]!==undefined){return O.$$events[name];
}O=O.superclass;
}return null;
},supportsEvent:function(bD,name){return !!qx.Bootstrap.getEventType(bD,name);
},getByInterface:function(bQ,bR){var bS,i,l;

while(bQ){if(bQ.$$implements){bS=bQ.$$flatImplements;

for(i=0,l=bS.length;i<l;i++){if(bS[i]===bR){return bQ;
}}}bQ=bQ.superclass;
}return null;
},hasInterface:function(bN,bO){return !!qx.Bootstrap.getByInterface(bN,bO);
},getMixins:function(bH){var bI=[];

while(bH){if(bH.$$includes){bI.push.apply(bI,bH.$$flatIncludes);
}bH=bH.superclass;
}return bI;
},$$logs:[],debug:function(bF,bG){qx.Bootstrap.$$logs.push([D,arguments]);
},info:function(b,c){qx.Bootstrap.$$logs.push([E,arguments]);
},warn:function(bU,bV){qx.Bootstrap.$$logs.push([J,arguments]);
},error:function(T,U){qx.Bootstrap.$$logs.push([r,arguments]);
},trace:function(d){}}});
})();
(function(){var p="qx.allowUrlSettings",o="&",n="qx.core.Setting",m="qx.allowUrlVariants",l="qx.propertyDebugLevel",k="qxsetting",j=":",h=".";
qx.Bootstrap.define(n,{statics:{__c:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__c[a]){this.__c[a]={};
}else if(this.__c[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__c[a].defaultValue=b;
},get:function(s){var t=this.__c[s];

if(t===undefined){throw new Error('Setting "'+s+'" is not defined.');
}
if(t.value!==undefined){return t.value;
}return t.defaultValue;
},set:function(c,d){if((c.split(h)).length<2){throw new Error('Malformed settings key "'+c+'". Must be following the schema "namespace.key".');
}
if(!this.__c[c]){this.__c[c]={};
}this.__c[c].value=d;
},__d:function(){if(window.qxsettings){for(var e in window.qxsettings){this.set(e,window.qxsettings[e]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(q){}this.__e();
}},__e:function(){if(this.get(p)!=true){return;
}var g=document.location.search.slice(1).split(o);

for(var i=0;i<g.length;i++){var f=g[i].split(j);

if(f.length!=3||f[0]!=k){continue;
}this.set(f[1],decodeURIComponent(f[2]));
}}},defer:function(r){r.define(p,false);
r.define(m,false);
r.define(l,0);
r.__d();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__f:function(){var u=d;
var y=e;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==p){u=b;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+q+RegExp.$2;

if(RegExp.$3!=l){y+=q+RegExp.$3;
}}else{w=true;
y=i;
}}else if(window.navigator.userAgent.indexOf(j)!=-1){u=f;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(n).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=m;
}}else if(window.controllers&&window.navigator.product===c){u=s;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=r;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=k;
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
window.alert("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(t){t.__f();
}});
})();
(function(){var A="on",z="off",y="|",x="default",w="object",u="&",t="qx.aspects",s="$",r="qx.allowUrlVariants",q="qx.debug",j="qx.client",p="qx.dynlocale",n="webkit",h="qxvariant",g="opera",m=":",k="qx.core.Variant",o="mshtml",f="gecko";
qx.Bootstrap.define(k,{statics:{__g:{},__h:{},compilerIsSet:function(){return true;
},define:function(B,C,D){{};

if(!this.__g[B]){this.__g[B]={};
}else{}this.__g[B].allowedValues=C;
this.__g[B].defaultValue=D;
},get:function(a){var b=this.__g[a];
{};

if(b.value!==undefined){return b.value;
}return b.defaultValue;
},__i:function(){if(window.qxvariants){for(var Q in qxvariants){{};

if(!this.__g[Q]){this.__g[Q]={};
}this.__g[Q].value=qxvariants[Q];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(P){}this.__j(this.__g);
}},__j:function(){if(qx.core.Setting.get(r)!=true){return;
}var E=document.location.search.slice(1).split(u);

for(var i=0;i<E.length;i++){var F=E[i].split(m);

if(F.length!=3||F[0]!=h){continue;
}var G=F[1];

if(!this.__g[G]){this.__g[G]={};
}this.__g[G].value=decodeURIComponent(F[2]);
}},select:function(c,d){{};

for(var e in d){if(this.isSet(c,e)){return d[e];
}}
if(d[x]!==undefined){return d[x];
}{};
},isSet:function(H,I){var J=H+s+I;

if(this.__h[J]!==undefined){return this.__h[J];
}var L=false;
if(I.indexOf(y)<0){L=this.get(H)===I;
}else{var K=I.split(y);

for(var i=0,l=K.length;i<l;i++){if(this.get(H)===K[i]){L=true;
break;
}}}this.__h[J]=L;
return L;
},__k:function(v){return typeof v===w&&v!==null&&v instanceof Array;
},__l:function(v){return typeof v===w&&v!==null&&!(v instanceof Array);
},__m:function(N,O){for(var i=0,l=N.length;i<l;i++){if(N[i]==O){return true;
}}return false;
}},defer:function(M){M.define(j,[f,o,g,n],qx.bom.client.Engine.NAME);
M.define(q,[A,z],A);
M.define(t,[A,z],z);
M.define(p,[A,z],A);
M.__i();
}});
})();
(function(){var x="other",w="widgets",v="fonts",u="appearances",t="qx.Theme",s="]",r="[Theme ",q="colors",p="decorations",o="Theme",k="meta",n="borders",m="icons";
qx.Bootstrap.define(t,{statics:{define:function(name,L){if(!L){var L={};
}L.include=this.__n(L.include);
L.patch=this.__n(L.patch);
{};
var M={$$type:o,name:name,title:L.title,toString:this.genericToString};
if(L.extend){M.supertheme=L.extend;
}M.basename=qx.Bootstrap.createNamespace(name,M);
this.__q(M,L);
this.__o(M,L);
this.$$registry[name]=M;
for(var i=0,a=L.include,l=a.length;i<l;i++){this.include(M,a[i]);
}
for(var i=0,a=L.patch,l=a.length;i<l;i++){this.patch(M,a[i]);
}},__n:function(N){if(!N){return [];
}
if(qx.Bootstrap.isArray(N)){return N;
}else{return [N];
}},__o:function(O,P){var Q=P.aliases||{};

if(P.extend&&P.extend.aliases){qx.Bootstrap.objectMergeWith(Q,P.extend.aliases,false);
}O.aliases=Q;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return r+this.name+s;
},__p:function(h){for(var i=0,j=this.__r,l=j.length;i<l;i++){if(h[j[i]]){return j[i];
}}},__q:function(E,F){var I=this.__p(F);
if(F.extend&&!I){I=F.extend.type;
}E.type=I||x;
if(!I){return;
}var K=function(){};
if(F.extend){K.prototype=new F.extend.$$clazz;
}var J=K.prototype;
var H=F[I];
for(var G in H){J[G]=H[G];
if(J[G].base){{};
J[G].base=F.extend;
}}E.$$clazz=K;
E[I]=new K;
},$$registry:{},__r:[q,n,p,v,m,w,u,k],__s:null,__t:null,__u:function(){},patch:function(b,c){var e=this.__p(c);

if(e!==this.__p(b)){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b.$$clazz.prototype;

for(var g in d){f[g]=d[g];
}},include:function(y,z){var B=z.type;

if(B!==y.type){throw new Error("The mixins '"+y.name+"' are not compatible '"+z.name+"'!");
}var A=z[B];
var C=y.$$clazz.prototype;

for(var D in A){if(C[D]!==undefined){continue;
}C[D]=A[D];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="inspector.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var p="function",o="Boolean",n="qx.Interface",m="]",k="toggle",j="Interface",h="is",g="[Interface ";
qx.Bootstrap.define(n,{statics:{define:function(name,u){if(u){if(u.extend&&!(u.extend instanceof Array)){u.extend=[u.extend];
}{};
var v=u.statics?u.statics:{};
if(u.extend){v.$$extends=u.extend;
}
if(u.properties){v.$$properties=u.properties;
}
if(u.members){v.$$members=u.members;
}
if(u.events){v.$$events=u.events;
}}else{var v={};
}v.$$type=j;
v.name=name;
v.toString=this.genericToString;
v.basename=qx.Bootstrap.createNamespace(name,v);
qx.Interface.$$registry[name]=v;
return v;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(a){if(!a){return [];
}var b=a.concat();

for(var i=0,l=a.length;i<l;i++){if(a[i].$$extends){b.push.apply(b,this.flatten(a[i].$$extends));
}}return b;
},__v:function(w,x,y,z){var D=y.$$members;

if(D){for(var C in D){if(qx.Bootstrap.isFunction(D[C])){var B=this.__w(x,C);
var A=B||qx.Bootstrap.isFunction(w[C]);

if(!A){throw new Error('Implementation of method "'+C+'" is missing in class "'+x.classname+'" required by interface "'+y.name+'"');
}var E=z===true&&!B&&!qx.Bootstrap.hasInterface(x,y);

if(E){w[C]=this.__z(y,w[C],C,D[C]);
}}else{if(typeof w[C]===undefined){if(typeof w[C]!==p){throw new Error('Implementation of member "'+C+'" is missing in class "'+x.classname+'" required by interface "'+y.name+'"');
}}}}}},__w:function(L,M){var Q=M.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!Q){return false;
}var N=qx.Bootstrap.firstLow(Q[2]);
var O=qx.Bootstrap.getPropertyDefinition(L,N);

if(!O){return false;
}var P=Q[0]==h||Q[0]==k;

if(P){return qx.Bootstrap.getPropertyDefinition(L,N).check==o;
}return true;
},__x:function(I,J){if(J.$$properties){for(var K in J.$$properties){if(!qx.Bootstrap.getPropertyDefinition(I,K)){throw new Error('The property "'+K+'" is not supported by Class "'+I.classname+'"!');
}}}},__y:function(F,G){if(G.$$events){for(var H in G.$$events){if(!qx.Bootstrap.supportsEvent(F,H)){throw new Error('The event "'+H+'" is not supported by Class "'+F.classname+'"!');
}}}},assertObject:function(c,d){var f=c.constructor;
this.__v(c,f,d,false);
this.__x(f,d);
this.__y(f,d);
var e=d.$$extends;

if(e){for(var i=0,l=e.length;i<l;i++){this.assertObject(c,e[i]);
}}},assert:function(q,r,s){this.__v(q.prototype,q,r,s);
this.__x(q,r);
this.__y(q,r);
var t=r.$$extends;

if(t){for(var i=0,l=t.length;i<l;i++){this.assert(q,t[i],s);
}}},genericToString:function(){return g+this.name+m;
},$$registry:{},__z:function(){},__A:null,__B:function(){}}});
})();
(function(){var j="qx.Mixin",h=".prototype",g="constructor",f="[Mixin ",e="]",d="destruct",c="Mixin";
qx.Bootstrap.define(j,{statics:{define:function(name,o){if(o){if(o.include&&!(o.include instanceof Array)){o.include=[o.include];
}{};
var q=o.statics?o.statics:{};
qx.Bootstrap.setDisplayNames(q,name);

for(var p in q){if(q[p] instanceof Function){q[p].$$mixin=q;
}}if(o.construct){q.$$constructor=o.construct;
qx.Bootstrap.setDisplayName(o.construct,name,g);
}
if(o.include){q.$$includes=o.include;
}
if(o.properties){q.$$properties=o.properties;
}
if(o.members){q.$$members=o.members;
qx.Bootstrap.setDisplayNames(o.members,name+h);
}
for(var p in q.$$members){if(q.$$members[p] instanceof Function){q.$$members[p].$$mixin=q;
}}
if(o.events){q.$$events=o.events;
}
if(o.destruct){q.$$destructor=o.destruct;
qx.Bootstrap.setDisplayName(o.destruct,name,d);
}}else{var q={};
}q.$$type=c;
q.name=name;
q.toString=this.genericToString;
q.basename=qx.Bootstrap.createNamespace(name,q);
this.$$registry[name]=q;
return q;
},checkCompatibility:function(r){var u=this.flatten(r);
var v=u.length;

if(v<2){return true;
}var y={};
var x={};
var w={};
var t;

for(var i=0;i<v;i++){t=u[i];

for(var s in t.events){if(w[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+w[s]+'" in member "'+s+'"!');
}w[s]=t.name;
}
for(var s in t.properties){if(y[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+y[s]+'" in property "'+s+'"!');
}y[s]=t.name;
}
for(var s in t.members){if(x[s]){throw new Error('Conflict between mixin "'+t.name+'" and "'+x[s]+'" in member "'+s+'"!');
}x[s]=t.name;
}}return true;
},isCompatible:function(k,m){var n=qx.Bootstrap.getMixins(m);
n.push(k);
return qx.Mixin.checkCompatibility(n);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(a){if(!a){return [];
}var b=a.concat();

for(var i=0,l=a.length;i<l;i++){if(a[i].$$includes){b.push.apply(b,this.flatten(a[i].$$includes));
}}return b;
},genericToString:function(){return f+this.name+e;
},$$registry:{},__C:null,__D:function(){}}});
})();
(function(){var X=';',W='return this.',V="boolean",U="string",T='!==undefined)',S='else if(this.',R='if(this.',Q='else ',P=' of an instance of ',O=' is not (yet) ready!");',bs="init",br="': ",bq=" of class ",bp='return value;',bo='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bn='return init;',bm='var init=this.',bl="Error in property ",bk='if(init==qx.core.Property.$$inherit)init=null;',bj="set",bf=" in method ",bg='throw new Error("Property ',bd='var inherit=prop.$$inherit;',be='return null;',bb="setRuntime",bc="setThemed",Y="inherit",ba=" with incoming value '",bh="object",bi="qx.core.Property";
qx.Bootstrap.define(bi,{statics:{__E:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__F:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:Y,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:U,dispose:V,inheritable:V,nullable:V,themeable:V,refine:V,init:null,apply:U,event:U,check:null,transform:U,deferredInit:V,validate:null},$$allowedGroupKeys:{name:U,group:bh,mode:U,themeable:V},$$inheritable:{},refresh:function(bt){var parent=bt.getLayoutParent();

if(parent){var bw=bt.constructor;
var by=this.$$store.inherit;
var bx=this.$$store.init;
var bv=this.$$method.refresh;
var bz;
var bu;
{};

while(bw){bz=bw.$$properties;

if(bz){for(var name in this.$$inheritable){if(bz[name]&&bt[bv[name]]){bu=parent[by[name]];

if(bu===undefined){bu=parent[bx[name]];
}{};
bt[bv[name]](bu);
}}}bw=bw.superclass;
}}},attach:function(bD){var bE=bD.$$properties;

if(bE){for(var name in bE){this.attachMethods(bD,name,bE[name]);
}}bD.$$propertiesAttached=true;
},attachMethods:function(bI,name,bJ){bJ.group?this.__G(bI,bJ,name):this.__H(bI,bJ,name);
},__G:function(bT,bU,name){var cc=qx.Bootstrap.firstUp(name);
var cb=bT.prototype;
var cd=bU.themeable===true;
{};
var ce=[];
var bX=[];

if(cd){var bV=[];
var ca=[];
}var bY="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
ce.push(bY);

if(cd){bV.push(bY);
}
if(bU.mode=="shorthand"){var bW="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
ce.push(bW);

if(cd){bV.push(bW);
}}
for(var i=0,a=bU.group,l=a.length;i<l;i++){{};
ce.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bX.push("this.",this.$$method.reset[a[i]],"();");

if(cd){{};
bV.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
ca.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+cc;
cb[this.$$method.set[name]]=new Function(ce.join(""));
this.$$method.reset[name]="reset"+cc;
cb[this.$$method.reset[name]]=new Function(bX.join(""));

if(cd){this.$$method.setThemed[name]="setThemed"+cc;
cb[this.$$method.setThemed[name]]=new Function(bV.join(""));
this.$$method.resetThemed[name]="resetThemed"+cc;
cb[this.$$method.resetThemed[name]]=new Function(ca.join(""));
}},__H:function(bN,bO,name){var bQ=qx.Bootstrap.firstUp(name);
var bS=bN.prototype;
{};
if(bO.dispose===undefined&&typeof bO.check==="string"){bO.dispose=this.__F[bO.check]||qx.Bootstrap.classIsDefined(bO.check)||(qx.Interface&&qx.Interface.isDefined(bO.check));
}var bR=this.$$method;
var bP=this.$$store;
bP.runtime[name]="$$runtime_"+name;
bP.user[name]="$$user_"+name;
bP.theme[name]="$$theme_"+name;
bP.init[name]="$$init_"+name;
bP.inherit[name]="$$inherit_"+name;
bP.useinit[name]="$$useinit_"+name;
bR.get[name]="get"+bQ;
bS[bR.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bN,name,"get");
};
bR.set[name]="set"+bQ;
bS[bR.set[name]]=function(N){return qx.core.Property.executeOptimizedSetter(this,bN,name,"set",arguments);
};
bR.reset[name]="reset"+bQ;
bS[bR.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bN,name,"reset");
};

if(bO.inheritable||bO.apply||bO.event||bO.deferredInit){bR.init[name]="init"+bQ;
bS[bR.init[name]]=function(bK){return qx.core.Property.executeOptimizedSetter(this,bN,name,"init",arguments);
};
}
if(bO.inheritable){bR.refresh[name]="refresh"+bQ;
bS[bR.refresh[name]]=function(F){return qx.core.Property.executeOptimizedSetter(this,bN,name,"refresh",arguments);
};
}bR.setRuntime[name]="setRuntime"+bQ;
bS[bR.setRuntime[name]]=function(cs){return qx.core.Property.executeOptimizedSetter(this,bN,name,"setRuntime",arguments);
};
bR.resetRuntime[name]="resetRuntime"+bQ;
bS[bR.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bN,name,"resetRuntime");
};

if(bO.themeable){bR.setThemed[name]="setThemed"+bQ;
bS[bR.setThemed[name]]=function(u){return qx.core.Property.executeOptimizedSetter(this,bN,name,"setThemed",arguments);
};
bR.resetThemed[name]="resetThemed"+bQ;
bS[bR.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bN,name,"resetThemed");
};
}
if(bO.check==="Boolean"){bS["toggle"+bQ]=new Function("return this."+bR.set[name]+"(!this."+bR.get[name]+"())");
bS["is"+bQ]=new Function("return this."+bR.get[name]+"()");
}},__I:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(n,o,p,q,r){var s=n.constructor.classname;
var t=bl+p+bq+s+bf+this.$$method[q][p]+ba+r+br;
throw new Error(t+(this.__I[o]||"Unknown reason: "+o));
},__J:function(cj,ck,name,cl,cm,cn){var co=this.$$method[cl][name];
{ck[co]=new Function("value",cm.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){ck[co]=qx.core.Aspect.wrap(cj.classname+"."+co,ck[co],"property");
}qx.Bootstrap.setDisplayName(ck[co],cj.classname+".prototype",co);
if(cn===undefined){return cj[co]();
}else{return cj[co](cn[0]);
}},executeOptimizedGetter:function(e,f,name,g){var j=f.$$properties[name];
var m=f.prototype;
var h=[];
var k=this.$$store;
h.push(R,k.runtime[name],T);
h.push(W,k.runtime[name],X);

if(j.inheritable){h.push(S,k.inherit[name],T);
h.push(W,k.inherit[name],X);
h.push(Q);
}h.push(R,k.user[name],T);
h.push(W,k.user[name],X);

if(j.themeable){h.push(S,k.theme[name],T);
h.push(W,k.theme[name],X);
}
if(j.deferredInit&&j.init===undefined){h.push(S,k.init[name],T);
h.push(W,k.init[name],X);
}h.push(Q);

if(j.init!==undefined){if(j.inheritable){h.push(bm,k.init[name],X);

if(j.nullable){h.push(bk);
}else if(j.init!==undefined){h.push(W,k.init[name],X);
}else{h.push(bo,name,P,f.classname,O);
}h.push(bn);
}else{h.push(W,k.init[name],X);
}}else if(j.inheritable||j.nullable){h.push(be);
}else{h.push(bg,name,P,f.classname,O);
}return this.__J(e,m,name,g,h);
},executeOptimizedSetter:function(v,w,name,x,y){var D=w.$$properties[name];
var C=w.prototype;
var A=[];
var z=x===bj||x===bc||x===bb||(x===bs&&D.init===undefined);
var B=D.apply||D.event||D.inheritable;
var E=this.__K(x,name);
this.__L(A,D,name,x,z);

if(z){this.__M(A,w,D,name);
}
if(B){this.__N(A,z,E,x);
}
if(D.inheritable){A.push(bd);
}{};

if(!B){this.__P(A,name,x,z);
}else{this.__Q(A,D,name,x,z);
}
if(D.inheritable){this.__R(A,D,name,x);
}else if(B){this.__S(A,D,name,x);
}
if(B){this.__T(A,D,name);
if(D.inheritable&&C._getChildren){this.__U(A,name);
}}if(z){A.push(bp);
}return this.__J(v,C,name,x,A,y);
},__K:function(bL,name){if(bL==="setRuntime"||bL==="resetRuntime"){var bM=this.$$store.runtime[name];
}else if(bL==="setThemed"||bL==="resetThemed"){bM=this.$$store.theme[name];
}else if(bL==="init"){bM=this.$$store.init[name];
}else{bM=this.$$store.user[name];
}return bM;
},__L:function(J,K,name,L,M){{if(!K.nullable||K.check||K.inheritable){J.push('var prop=qx.core.Property;');
}if(L==="set"){J.push('if(value===undefined)prop.error(this,2,"',name,'","',L,'",value);');
}};
},__M:function(bA,bB,bC,name){if(bC.transform){bA.push('value=this.',bC.transform,'(value);');
}if(bC.validate){if(typeof bC.validate==="string"){bA.push('this.',bC.validate,'(value);');
}else if(bC.validate instanceof Function){bA.push(bB.classname,'.$$properties.',name);
bA.push('.validate.call(this, value);');
}}},__N:function(ct,cu,cv,cw){var cx=(cw==="reset"||cw==="resetThemed"||cw==="resetRuntime");

if(cu){ct.push('if(this.',cv,'===value)return value;');
}else if(cx){ct.push('if(this.',cv,'===undefined)return;');
}},__O:undefined,__P:function(cp,name,cq,cr){if(cq==="setRuntime"){cp.push('this.',this.$$store.runtime[name],'=value;');
}else if(cq==="resetRuntime"){cp.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cp.push('delete this.',this.$$store.runtime[name],';');
}else if(cq==="set"){cp.push('this.',this.$$store.user[name],'=value;');
}else if(cq==="reset"){cp.push('if(this.',this.$$store.user[name],'!==undefined)');
cp.push('delete this.',this.$$store.user[name],';');
}else if(cq==="setThemed"){cp.push('this.',this.$$store.theme[name],'=value;');
}else if(cq==="resetThemed"){cp.push('if(this.',this.$$store.theme[name],'!==undefined)');
cp.push('delete this.',this.$$store.theme[name],';');
}else if(cq==="init"&&cr){cp.push('this.',this.$$store.init[name],'=value;');
}},__Q:function(cf,cg,name,ch,ci){if(cg.inheritable){cf.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cf.push('var computed, old;');
}cf.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(ch==="setRuntime"){cf.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ch==="resetRuntime"){cf.push('delete this.',this.$$store.runtime[name],';');
cf.push('if(this.',this.$$store.user[name],'!==undefined)');
cf.push('computed=this.',this.$$store.user[name],';');
cf.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cf.push('computed=this.',this.$$store.theme[name],';');
cf.push('else if(this.',this.$$store.init[name],'!==undefined){');
cf.push('computed=this.',this.$$store.init[name],';');
cf.push('this.',this.$$store.useinit[name],'=true;');
cf.push('}');
}else{cf.push('old=computed=this.',this.$$store.runtime[name],';');
if(ch==="set"){cf.push('this.',this.$$store.user[name],'=value;');
}else if(ch==="reset"){cf.push('delete this.',this.$$store.user[name],';');
}else if(ch==="setThemed"){cf.push('this.',this.$$store.theme[name],'=value;');
}else if(ch==="resetThemed"){cf.push('delete this.',this.$$store.theme[name],';');
}else if(ch==="init"&&ci){cf.push('this.',this.$$store.init[name],'=value;');
}}cf.push('}');
cf.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(ch==="set"){if(!cg.inheritable){cf.push('old=this.',this.$$store.user[name],';');
}cf.push('computed=this.',this.$$store.user[name],'=value;');
}else if(ch==="reset"){if(!cg.inheritable){cf.push('old=this.',this.$$store.user[name],';');
}cf.push('delete this.',this.$$store.user[name],';');
cf.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cf.push('computed=this.',this.$$store.runtime[name],';');
cf.push('if(this.',this.$$store.theme[name],'!==undefined)');
cf.push('computed=this.',this.$$store.theme[name],';');
cf.push('else if(this.',this.$$store.init[name],'!==undefined){');
cf.push('computed=this.',this.$$store.init[name],';');
cf.push('this.',this.$$store.useinit[name],'=true;');
cf.push('}');
}else{if(ch==="setRuntime"){cf.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cg.inheritable){cf.push('computed=this.',this.$$store.user[name],';');
}else{cf.push('old=computed=this.',this.$$store.user[name],';');
}if(ch==="setThemed"){cf.push('this.',this.$$store.theme[name],'=value;');
}else if(ch==="resetThemed"){cf.push('delete this.',this.$$store.theme[name],';');
}else if(ch==="init"&&ci){cf.push('this.',this.$$store.init[name],'=value;');
}}cf.push('}');
if(cg.themeable){cf.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cg.inheritable){cf.push('old=this.',this.$$store.theme[name],';');
}
if(ch==="setRuntime"){cf.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ch==="set"){cf.push('computed=this.',this.$$store.user[name],'=value;');
}else if(ch==="setThemed"){cf.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(ch==="resetThemed"){cf.push('delete this.',this.$$store.theme[name],';');
cf.push('if(this.',this.$$store.init[name],'!==undefined){');
cf.push('computed=this.',this.$$store.init[name],';');
cf.push('this.',this.$$store.useinit[name],'=true;');
cf.push('}');
}else if(ch==="init"){if(ci){cf.push('this.',this.$$store.init[name],'=value;');
}cf.push('computed=this.',this.$$store.theme[name],';');
}else if(ch==="refresh"){cf.push('computed=this.',this.$$store.theme[name],';');
}cf.push('}');
}cf.push('else if(this.',this.$$store.useinit[name],'){');

if(!cg.inheritable){cf.push('old=this.',this.$$store.init[name],';');
}
if(ch==="init"){if(ci){cf.push('computed=this.',this.$$store.init[name],'=value;');
}else{cf.push('computed=this.',this.$$store.init[name],';');
}}else if(ch==="set"||ch==="setRuntime"||ch==="setThemed"||ch==="refresh"){cf.push('delete this.',this.$$store.useinit[name],';');

if(ch==="setRuntime"){cf.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ch==="set"){cf.push('computed=this.',this.$$store.user[name],'=value;');
}else if(ch==="setThemed"){cf.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(ch==="refresh"){cf.push('computed=this.',this.$$store.init[name],';');
}}cf.push('}');
if(ch==="set"||ch==="setRuntime"||ch==="setThemed"||ch==="init"){cf.push('else{');

if(ch==="setRuntime"){cf.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ch==="set"){cf.push('computed=this.',this.$$store.user[name],'=value;');
}else if(ch==="setThemed"){cf.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(ch==="init"){if(ci){cf.push('computed=this.',this.$$store.init[name],'=value;');
}else{cf.push('computed=this.',this.$$store.init[name],';');
}cf.push('this.',this.$$store.useinit[name],'=true;');
}cf.push('}');
}},__R:function(b,c,name,d){b.push('if(computed===undefined||computed===inherit){');

if(d==="refresh"){b.push('computed=value;');
}else{b.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}b.push('if((computed===undefined||computed===inherit)&&');
b.push('this.',this.$$store.init[name],'!==undefined&&');
b.push('this.',this.$$store.init[name],'!==inherit){');
b.push('computed=this.',this.$$store.init[name],';');
b.push('this.',this.$$store.useinit[name],'=true;');
b.push('}else{');
b.push('delete this.',this.$$store.useinit[name],';}');
b.push('}');
b.push('if(old===computed)return value;');
b.push('if(computed===inherit){');
b.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
b.push('}');
b.push('else if(computed===undefined)');
b.push('delete this.',this.$$store.inherit[name],';');
b.push('else this.',this.$$store.inherit[name],'=computed;');
b.push('var backup=computed;');
if(c.init!==undefined&&d!=="init"){b.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{b.push('if(old===undefined)old=null;');
}b.push('if(computed===undefined||computed==inherit)computed=null;');
},__S:function(bF,bG,name,bH){if(bH!=="set"&&bH!=="setRuntime"&&bH!=="setThemed"){bF.push('if(computed===undefined)computed=null;');
}bF.push('if(old===computed)return value;');
if(bG.init!==undefined&&bH!=="init"){bF.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{bF.push('if(old===undefined)old=null;');
}},__T:function(G,H,name){if(H.apply){G.push('this.',H.apply,'(computed, old, "',name,'");');
}if(H.event){G.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",H.event,"')){","reg.fireEvent(this, '",H.event,"', qx.event.type.Data, [computed, old]",")}");
}},__U:function(I,name){I.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
I.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
I.push('}');
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__V:[],wrap:function(h,j,k){var p=[];
var l=[];
var o=this.__V;
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
},addAdvice:function(e,f,g,name){this.__V.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var x="qx.aspects",w="on",v=".",u="static",t="constructor",s="[Class ",r="]",q="toString",p="member",o="$$init_",g=".prototype",n="destructor",k="extend",f="destruct",e="Class",j="off",h="qx.Class",m="singleton",d="qx.event.type.Data";
qx.Bootstrap.define(h,{statics:{define:function(name,bK){if(!bK){var bK={};
}if(bK.include&&!(bK.include instanceof Array)){bK.include=[bK.include];
}if(bK.implement&&!(bK.implement instanceof Array)){bK.implement=[bK.implement];
}if(!bK.hasOwnProperty(k)&&!bK.type){bK.type=u;
}{};
var bM=this.__bb(name,bK.type,bK.extend,bK.statics,bK.construct,bK.destruct);
if(bK.extend){if(bK.properties){this.__bd(bM,bK.properties,true);
}if(bK.members){this.__bf(bM,bK.members,true,true,false);
}if(bK.events){this.__bc(bM,bK.events,true);
}if(bK.include){for(var i=0,l=bK.include.length;i<l;i++){this.__bi(bM,bK.include[i],false);
}}}if(bK.settings){for(var bL in bK.settings){qx.core.Setting.define(bL,bK.settings[bL]);
}}if(bK.variants){for(var bL in bK.variants){qx.core.Variant.define(bL,bK.variants[bL].allowedValues,bK.variants[bL].defaultValue);
}}if(bK.implement){for(var i=0,l=bK.implement.length;i<l;i++){this.__bh(bM,bK.implement[i]);
}}{};
if(bK.defer){bK.defer.self=bM;
bK.defer(bM,bM.prototype,{add:function(name,b){var c={};
c[name]=b;
qx.Class.__bd(bM,c,true);
}});
}return bM;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bv,bw){{};
qx.Class.__bi(bv,bw,false);
},patch:function(I,J){{};
qx.Class.__bi(I,J,true);
},isSubClassOf:function(br,bs){if(!br){return false;
}
if(br==bs){return true;
}
if(br.prototype instanceof bs){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(y){var z=[];

while(y){if(y.$$properties){z.push.apply(z,qx.Bootstrap.getKeys(y.$$properties));
}y=y.superclass;
}return z;
},getByProperty:function(E,name){while(E){if(E.$$properties&&E.$$properties[name]){return E;
}E=E.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(O,P){return O.$$includes&&O.$$includes.indexOf(P)!==-1;
},getByMixin:function(F,G){var H,i,l;

while(F){if(F.$$includes){H=F.$$flatIncludes;

for(i=0,l=H.length;i<l;i++){if(H[i]===G){return F;
}}}F=F.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bN,bO){return !!this.getByMixin(bN,bO);
},hasOwnInterface:function(bt,bu){return bt.$$implements&&bt.$$implements.indexOf(bu)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bI){var bJ=[];

while(bI){if(bI.$$implements){bJ.push.apply(bJ,bI.$$flatImplements);
}bI=bI.superclass;
}return bJ;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bA,bB){var bC=bA.constructor;

if(this.hasInterface(bC,bB)){return true;
}
try{qx.Interface.assertObject(bA,bB);
return true;
}catch(C){}
try{qx.Interface.assert(bC,bB,false);
return true;
}catch(D){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return s+this.classname+r;
},$$registry:qx.Bootstrap.$$registry,__W:null,__X:null,__Y:function(){},__ba:function(){},__bb:function(name,bf,bg,bh,bi,bj){var bo;

if(!bg&&qx.core.Variant.isSet(x,j)){bo=bh||{};
qx.Bootstrap.setDisplayNames(bo,name);
}else{bo={};

if(bg){if(!bi){bi=this.__bj();
}bo=this.__bl(bi,name,bf);
qx.Bootstrap.setDisplayName(bi,name,t);
}if(bh){qx.Bootstrap.setDisplayNames(bh,name);
var bp;

for(var i=0,a=qx.Bootstrap.getKeys(bh),l=a.length;i<l;i++){bp=a[i];
var bl=bh[bp];

if(qx.core.Variant.isSet(x,w)){if(bl instanceof Function){bl=qx.core.Aspect.wrap(name+v+bp,bl,u);
}bo[bp]=bl;
}else{bo[bp]=bl;
}}}}var bn=qx.Bootstrap.createNamespace(name,bo,false);
bo.name=bo.classname=name;
bo.basename=bn;
bo.$$type=e;

if(bf){bo.$$classtype=bf;
}if(!bo.hasOwnProperty(q)){bo.toString=this.genericToString;
}
if(bg){var bq=bg.prototype;
var bk=this.__bk();
bk.prototype=bq;
var bm=new bk;
bo.prototype=bm;
bm.name=bm.classname=name;
bm.basename=bn;
bi.base=bo.superclass=bg;
bi.self=bo.constructor=bm.constructor=bo;
if(bj){if(qx.core.Variant.isSet(x,w)){bj=qx.core.Aspect.wrap(name,bj,n);
}bo.$$destructor=bj;
qx.Bootstrap.setDisplayName(bj,name,f);
}}this.$$registry[name]=bo;
return bo;
},__bc:function(K,L,M){var N,N;
{};

if(K.$$events){for(var N in L){K.$$events[N]=L[N];
}}else{K.$$events=L;
}},__bd:function(Q,R,S){var U;

if(S===undefined){S=false;
}var T=!!Q.$$propertiesAttached;

for(var name in R){U=R[name];
{};
U.name=name;
if(!U.refine){if(Q.$$properties===undefined){Q.$$properties={};
}Q.$$properties[name]=U;
}if(U.init!==undefined){Q.prototype[o+name]=U.init;
}if(U.event!==undefined){var event={};
event[U.event]=d;
this.__bc(Q,event,S);
}if(U.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(T){qx.core.Property.attachMethods(Q,name,U);
}}},__be:null,__bf:function(bT,bU,bV,bW,bX){var bY=bT.prototype;
var cb,ca;
qx.Bootstrap.setDisplayNames(bU,bT.classname+g);

for(var i=0,a=qx.Bootstrap.getKeys(bU),l=a.length;i<l;i++){cb=a[i];
ca=bU[cb];
{};
if(bW!==false&&ca instanceof Function&&ca.$$type==null){if(bX==true){ca=this.__bg(ca,bY[cb]);
}else{if(bY[cb]){ca.base=bY[cb];
}ca.self=bT;
}
if(qx.core.Variant.isSet(x,w)){ca=qx.core.Aspect.wrap(bT.classname+v+cb,ca,p);
}}bY[cb]=ca;
}},__bg:function(bD,bE){if(bE){return function(){var B=bD.base;
bD.base=bE;
var A=bD.apply(this,arguments);
bD.base=B;
return A;
};
}else{return bD;
}},__bh:function(bF,bG){{};
var bH=qx.Interface.flatten([bG]);

if(bF.$$implements){bF.$$implements.push(bG);
bF.$$flatImplements.push.apply(bF.$$flatImplements,bH);
}else{bF.$$implements=[bG];
bF.$$flatImplements=bH;
}},__bi:function(V,W,X){{};

if(this.hasMixin(V,W)){return;
}var ba=qx.Mixin.flatten([W]);
var Y;

for(var i=0,l=ba.length;i<l;i++){Y=ba[i];
if(Y.$$events){this.__bc(V,Y.$$events,X);
}if(Y.$$properties){this.__bd(V,Y.$$properties,X);
}if(Y.$$members){this.__bf(V,Y.$$members,X,X,X);
}}if(V.$$includes){V.$$includes.push(W);
V.$$flatIncludes.push.apply(V.$$flatIncludes,ba);
}else{V.$$includes=[W];
V.$$flatIncludes=ba;
}},__bj:function(){function bb(){arguments.callee.base.apply(this,arguments);
}return bb;
},__bk:function(){return function(){};
},__bl:function(bP,name,bQ){var bS=function(){var bz=arguments.callee.constructor;
{};
if(!bz.$$propertiesAttached){qx.core.Property.attach(bz);
}var by=bz.$$original.apply(this,arguments);
if(bz.$$includes){var bx=bz.$$flatIncludes;

for(var i=0,l=bx.length;i<l;i++){if(bx[i].$$constructor){bx[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return by;
};

if(qx.core.Variant.isSet(x,w)){var bR=qx.core.Aspect.wrap(name,bS,t);
bS.$$original=bP;
bS.constructor=bR;
bS=bR;
}if(bQ===m){bS.getInstance=this.getInstance;
}bS.$$original=bP;
bP.wrapper=bS;
return bS;
}},defer:function(){if(qx.core.Variant.isSet(x,w)){for(var bc in qx.Bootstrap.$$registry){var bd=qx.Bootstrap.$$registry[bc];

for(var be in bd){if(bd[be] instanceof Function){bd[be]=qx.core.Aspect.wrap(bc+v+be,bd[be],u);
}}}}}});
})();
(function(){var q="$$hash",p="qx.core.ObjectRegistry";
qx.Class.define(p,{statics:{inShutDown:false,__bm:{},__bn:0,__bo:[],register:function(w){var z=this.__bm;

if(!z){return;
}var y=w.$$hash;

if(y==null){var x=this.__bo;

if(x.length>0){y=x.pop();
}else{y=(this.__bn++).toString(36);
}w.$$hash=y;
}{};
z[y]=w;
},unregister:function(t){var u=t.$$hash;

if(u==null){return;
}var v=this.__bm;

if(v&&v[u]){delete v[u];
this.__bo.push(u);
}try{delete t.$$hash;
}catch(e){if(t.removeAttribute){t.removeAttribute(q);
}}},toHashCode:function(m){{};
var o=m.$$hash;

if(o!=null){return o;
}var n=this.__bo;

if(n.length>0){o=n.pop();
}else{o=(this.__bn++).toString(36);
}return m.$$hash=o;
},clearHashCode:function(c){{};
var d=c.$$hash;

if(d!=null){this.__bo.push(d);
try{delete c.$$hash;
}catch(f){if(c.removeAttribute){c.removeAttribute(q);
}}}},fromHashCode:function(r){return this.__bm[r]||null;
},shutdown:function(){this.inShutDown=true;
var h=this.__bm;
var k=[];

for(var j in h){k.push(j);
}k.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var g,i=0,l=k.length;

while(true){try{for(;i<l;i++){j=k[i];
g=h[j];

if(g&&g.dispose){g.dispose();
}}}catch(s){qx.Bootstrap.error(this,"Could not dispose object "+g.toString()+": "+s);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bm;
},getRegistry:function(){return this.__bm;
}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var o="qx.client",n="on",m="function",l="mousedown",k="qx.bom.Event",j="return;",i="mouseover",h="HTMLEvents";
qx.Class.define(k,{statics:{addNativeListener:qx.core.Variant.select(o,{"mshtml":function(z,A,B){z.attachEvent(n+A,B);
},"default":function(d,f,g){d.addEventListener(f,g,false);
}}),removeNativeListener:qx.core.Variant.select(o,{"mshtml":function(D,E,F){try{D.detachEvent(n+E,F);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(p,q,r){p.removeEventListener(q,r,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(o,{"mshtml":function(e){if(e.type===i){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(o,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==l&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(a){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(C){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(w,x){if(document.createEventObject){var y=document.createEventObject();
return w.fireEvent(n+x,y);
}else{var y=document.createEvent(h);
y.initEvent(x,true,true);
return !w.dispatchEvent(y);
}},supportsEvent:qx.core.Variant.select(o,{"webkit":function(b,c){return b.hasOwnProperty(n+c);
},"default":function(s,t){var u=n+t;
var v=(u in s);

if(!v){v=typeof s[u]==m;

if(!v&&s.setAttribute){s.setAttribute(u,j);
v=typeof s[u]==m;
s.removeAttribute(u);
}}return v;
}})}});
})();
(function(){var cu="|bubble",ct="|capture",cs="|",cr="_",cq="unload",cp="UNKNOWN_",co="DOM_",cn="__bu",cm="c",cl="__bt",ci="WIN_",ck="capture",cj="qx.event.Manager",ch="QX_";
qx.Class.define(cj,{extend:Object,construct:function(R,S){this.__bp=R;
this.__bq=qx.core.ObjectRegistry.toHashCode(R);
this.__br=S;
if(R.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(R,cq,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(R,cq,arguments.callee);
self.dispose();
}));
}this.__bs={};
this.__bt={};
this.__bu={};
this.__bv={};
},statics:{__bw:0,getNextUniqueId:function(){return (this.__bw++).toString(36);
}},members:{__br:null,__bs:null,__bu:null,__bx:null,__bt:null,__bv:null,__bp:null,__bq:null,getWindow:function(){return this.__bp;
},getWindowId:function(){return this.__bq;
},getHandler:function(n){var o=this.__bt[n.classname];

if(o){return o;
}return this.__bt[n.classname]=new n(this);
},getDispatcher:function(br){var bs=this.__bu[br.classname];

if(bs){return bs;
}return this.__bu[br.classname]=new br(this,this.__br);
},getListeners:function(p,q,r){var s=p.$$hash||qx.core.ObjectRegistry.toHashCode(p);
var u=this.__bs[s];

if(!u){return null;
}var v=q+(r?ct:cu);
var t=u[v];
return t?t.concat():null;
},serializeListeners:function(bL){var bS=bL.$$hash||qx.core.ObjectRegistry.toHashCode(bL);
var bU=this.__bs[bS];
var bQ=[];

if(bU){var bO,bT,bM,bP,bR;

for(var bN in bU){bO=bN.indexOf(cs);
bT=bN.substring(0,bO);
bM=bN.charAt(bO+1)==cm;
bP=bU[bN];

for(var i=0,l=bP.length;i<l;i++){bR=bP[i];
bQ.push({self:bR.context,handler:bR.handler,type:bT,capture:bM});
}}}return bQ;
},toggleAttachedEvents:function(I,J){var O=I.$$hash||qx.core.ObjectRegistry.toHashCode(I);
var Q=this.__bs[O];

if(Q){var L,P,K,M;

for(var N in Q){L=N.indexOf(cs);
P=N.substring(0,L);
K=N.charCodeAt(L+1)===99;
M=Q[N];

if(J){this.__by(I,P,K);
}else{this.__bz(I,P,K);
}}}},hasListener:function(e,f,g){{};
var h=e.$$hash||qx.core.ObjectRegistry.toHashCode(e);
var k=this.__bs[h];

if(!k){return false;
}var m=f+(g?ct:cu);
var j=k[m];
return j&&j.length>0;
},importListeners:function(cv,cw){{};
var cC=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cD=this.__bs[cC]={};
var cz=qx.event.Manager;

for(var cx in cw){var cA=cw[cx];
var cB=cA.type+(cA.capture?ct:cu);
var cy=cD[cB];

if(!cy){cy=cD[cB]=[];
this.__by(cv,cA.type,cA.capture);
}cy.push({handler:cA.listener,context:cA.self,unique:cA.unique||(cz.__bw++).toString(36)});
}},addListener:function(bV,bW,bX,self,bY){var cd;
{};
var ce=bV.$$hash||qx.core.ObjectRegistry.toHashCode(bV);
var cg=this.__bs[ce];

if(!cg){cg=this.__bs[ce]={};
}var cc=bW+(bY?ct:cu);
var cb=cg[cc];

if(!cb){cb=cg[cc]=[];
}if(cb.length===0){this.__by(bV,bW,bY);
}var cf=(qx.event.Manager.__bw++).toString(36);
var ca={handler:bX,context:self,unique:cf};
cb.push(ca);
return cc+cs+cf;
},findHandler:function(T,U){var bf=false,X=false,bg=false;
var be;

if(T.nodeType===1){bf=true;
be=co+T.tagName.toLowerCase()+cr+U;
}else if(T==this.__bp){X=true;
be=ci+U;
}else if(T.classname){bg=true;
be=ch+T.classname+cr+U;
}else{be=cp+T+cr+U;
}var ba=this.__bv;

if(ba[be]){return ba[be];
}var bd=this.__br.getHandlers();
var Y=qx.event.IEventHandler;
var bb,bc,W,V;

for(var i=0,l=bd.length;i<l;i++){bb=bd[i];
W=bb.SUPPORTED_TYPES;

if(W&&!W[U]){continue;
}V=bb.TARGET_CHECK;

if(V){if(!bf&&V===Y.TARGET_DOMNODE){continue;
}else if(!X&&V===Y.TARGET_WINDOW){continue;
}else if(!bg&&V===Y.TARGET_OBJECT){continue;
}}bc=this.getHandler(bd[i]);

if(bb.IGNORE_CAN_HANDLE||bc.canHandleEvent(T,U)){ba[be]=bc;
return bc;
}}return null;
},__by:function(bA,bB,bC){var bD=this.findHandler(bA,bB);

if(bD){bD.registerEvent(bA,bB,bC);
return;
}{};
},removeListener:function(bh,bi,bj,self,bk){var bo;
{};
var bp=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var bq=this.__bs[bp];

if(!bq){return false;
}var bl=bi+(bk?ct:cu);
var bm=bq[bl];

if(!bm){return false;
}var bn;

for(var i=0,l=bm.length;i<l;i++){bn=bm[i];

if(bn.handler===bj&&bn.context===self){qx.lang.Array.removeAt(bm,i);

if(bm.length==0){this.__bz(bh,bi,bk);
}return true;
}}return false;
},removeListenerById:function(w,x){var D;
{};
var B=x.split(cs);
var G=B[0];
var y=B[1].charCodeAt(0)==99;
var F=B[2];
var E=w.$$hash||qx.core.ObjectRegistry.toHashCode(w);
var H=this.__bs[E];

if(!H){return false;
}var C=G+(y?ct:cu);
var A=H[C];

if(!A){return false;
}var z;

for(var i=0,l=A.length;i<l;i++){z=A[i];

if(z.unique===F){qx.lang.Array.removeAt(A,i);

if(A.length==0){this.__bz(w,G,y);
}return true;
}}return false;
},removeAllListeners:function(bt){var bx=bt.$$hash||qx.core.ObjectRegistry.toHashCode(bt);
var bz=this.__bs[bx];

if(!bz){return false;
}var bv,by,bu;

for(var bw in bz){if(bz[bw].length>0){bv=bw.split(cs);
by=bv[0];
bu=bv[1]===ck;
this.__bz(bt,by,bu);
}}delete this.__bs[bx];
return true;
},__bz:function(a,b,c){var d=this.findHandler(a,b);

if(d){d.unregisterEvent(a,b,c);
return;
}{};
},dispatchEvent:function(bE,event){var bJ;
{};
var bK=event.getType();

if(!event.getBubbles()&&!this.hasListener(bE,bK)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bE);
}var bI=this.__br.getDispatchers();
var bH;
var bG=false;

for(var i=0,l=bI.length;i<l;i++){bH=this.getDispatcher(bI[i]);
if(bH.canDispatchEvent(bE,event,bK)){bH.dispatchEvent(bE,event,bK);
bG=true;
break;
}}
if(!bG){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bK+" on "+bE);
return true;
}var bF=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bF;
},dispose:function(){this.__br.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cl);
qx.util.DisposeUtil.disposeMap(this,cn);
this.__bs=this.__bp=this.__bx=null;
this.__br=this.__bv=null;
}}});
})();
(function(){var l="qx.dom.Node",k="qx.client",j="";
qx.Class.define(l,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(f){return f.nodeType===
this.DOCUMENT?f:
f.ownerDocument||f.document;
},getWindow:qx.core.Variant.select(k,{"mshtml":function(m){if(m.nodeType==null){return m;
}if(m.nodeType!==this.DOCUMENT){m=m.ownerDocument;
}return m.parentWindow;
},"default":function(d){if(d.nodeType==null){return d;
}if(d.nodeType!==this.DOCUMENT){d=d.ownerDocument;
}return d.defaultView;
}}),getDocumentElement:function(g){return this.getDocument(g).documentElement;
},getBodyElement:function(h){return this.getDocument(h).body;
},isNode:function(s){return !!(s&&s.nodeType!=null);
},isElement:function(n){return !!(n&&n.nodeType===this.ELEMENT);
},isDocument:function(o){return !!(o&&o.nodeType===this.DOCUMENT);
},isText:function(e){return !!(e&&e.nodeType===this.TEXT);
},isWindow:function(p){return !!(p&&p.history&&p.location&&p.document);
},isNodeName:function(b,c){if(!c||!b||!b.nodeName){return false;
}return c.toLowerCase()==qx.dom.Node.getName(b);
},getName:function(t){if(!t||!t.nodeName){return null;
}return t.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(j);
case 2:return q.nodeValue;
break;
case 3:return q.nodeValue;
break;
}return null;
}}});
})();
(function(){var bi="mshtml",bh="qx.client",bg="[object Array]",bf="qx.lang.Array",be="qx",bd="number",bc="string";
qx.Class.define(bf,{statics:{toArray:function(X,Y){return this.cast(X,Array,Y);
},cast:function(T,U,V){if(T.constructor===U){return T;
}
if(qx.Class.hasInterface(T,qx.data.IListData)){var T=T.toArray();
}var W=new U;
if(qx.core.Variant.isSet(bh,bi)){if(T.item){for(var i=V||0,l=T.length;i<l;i++){W.push(T[i]);
}return W;
}}if(Object.prototype.toString.call(T)===bg&&V==null){W.push.apply(W,T);
}else{W.push.apply(W,Array.prototype.slice.call(T,V||0));
}return W;
},fromArguments:function(f,g){return Array.prototype.slice.call(f,g||0);
},fromCollection:function(bj){if(qx.core.Variant.isSet(bh,bi)){if(bj.item){var bk=[];

for(var i=0,l=bj.length;i<l;i++){bk[i]=bj[i];
}return bk;
}}return Array.prototype.slice.call(bj,0);
},fromShortHand:function(bn){var bp=bn.length;
var bo=qx.lang.Array.clone(bn);
switch(bp){case 1:bo[1]=bo[2]=bo[3]=bo[0];
break;
case 2:bo[2]=bo[0];
case 3:bo[3]=bo[1];
}return bo;
},clone:function(a){return a.concat();
},insertAt:function(bl,bm,i){bl.splice(i,0,bm);
return bl;
},insertBefore:function(L,M,N){var i=L.indexOf(N);

if(i==-1){L.push(M);
}else{L.splice(i,0,M);
}return L;
},insertAfter:function(b,c,d){var i=b.indexOf(d);

if(i==-1||i==(b.length-1)){b.push(c);
}else{b.splice(i+1,0,c);
}return b;
},removeAt:function(bq,i){return bq.splice(i,1)[0];
},removeAll:function(e){e.length=0;
return this;
},append:function(D,E){{};
Array.prototype.push.apply(D,E);
return D;
},exclude:function(h,j){{};

for(var i=0,m=j.length,k;i<m;i++){k=h.indexOf(j[i]);

if(k!=-1){h.splice(k,1);
}}return h;
},remove:function(A,B){var i=A.indexOf(B);

if(i!=-1){A.splice(i,1);
return B;
}},contains:function(F,G){return F.indexOf(G)!==-1;
},equals:function(ba,bb){var length=ba.length;

if(length!==bb.length){return false;
}
for(var i=0;i<length;i++){if(ba[i]!==bb[i]){return false;
}}return true;
},sum:function(R){var S=0;

for(var i=0,l=R.length;i<l;i++){S+=R[i];
}return S;
},max:function(O){{};
var i,Q=O.length,P=O[0];

for(i=1;i<Q;i++){if(O[i]>P){P=O[i];
}}return P===undefined?null:P;
},min:function(I){{};
var i,K=I.length,J=I[0];

for(i=1;i<K;i++){if(I[i]<J){J=I[i];
}}return J===undefined?null:J;
},unique:function(n){var x=[],p={},s={},u={};
var t,o=0;
var y=be+qx.lang.Date.now();
var q=false,w=false,z=false;
for(var i=0,v=n.length;i<v;i++){t=n[i];
if(t===null){if(!q){q=true;
x.push(t);
}}else if(t===undefined){}else if(t===false){if(!w){w=true;
x.push(t);
}}else if(t===true){if(!z){z=true;
x.push(t);
}}else if(typeof t===bc){if(!p[t]){p[t]=1;
x.push(t);
}}else if(typeof t===bd){if(!s[t]){s[t]=1;
x.push(t);
}}else{r=t[y];

if(r==null){r=t[y]=o++;
}
if(!u[r]){u[r]=t;
x.push(t);
}}}for(var r in u){try{delete u[r][y];
}catch(C){try{u[r][y]=null;
}catch(H){throw new Error("Cannot clean-up map entry doneObjects["+r+"]["+y+"]");
}}}return x;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(j){if(j.displayName){return j.displayName;
}
if(j.$$original||j.wrapper||j.classname){return j.classname+a;
}
if(j.$$mixin){for(var l in j.$$mixin.$$members){if(j.$$mixin.$$members[l]==j){return j.$$mixin.name+d+l+f;
}}for(var l in j.$$mixin){if(j.$$mixin[l]==j){return j.$$mixin.name+e+l+f;
}}}
if(j.self){var m=j.self.constructor;

if(m){for(var l in m.prototype){if(m.prototype[l]==j){return m.classname+d+l+f;
}}for(var l in m){if(m[l]==j){return m.classname+e+l+f;
}}}}var k=j.toString().match(/function\s*(\w*)\s*\(.*/);

if(k&&k.length>=1&&k[1]){return k[1]+f;
}return c;
},globalEval:function(z){if(window.execScript){return window.execScript(z);
}else{return eval.call(window,z);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(G,H){{};
if(!H){return G;
}if(!(H.self||H.args||H.delay!=null||H.periodical!=null||H.attempt)){return G;
}return function(event){{};
var x=qx.lang.Array.fromArguments(arguments);
if(H.args){x=H.args.concat(x);
}
if(H.delay||H.periodical){var w=qx.event.GlobalError.observeMethod(function(){return G.apply(H.self||this,x);
});

if(H.delay){return window.setTimeout(w,H.delay);
}
if(H.periodical){return window.setInterval(w,H.periodical);
}}else if(H.attempt){var y=false;

try{y=G.apply(H.self||this,x);
}catch(q){}return y;
}else{return G.apply(H.self||this,x);
}};
},bind:function(n,self,o){return this.create(n,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(A,self,B){if(arguments.length<3){return function(event){return A.call(self||this,event||window.event);
};
}else{var C=qx.lang.Array.fromArguments(arguments,2);
return function(event){var p=[event||window.event];
p.push.apply(p,C);
A.apply(self||this,p);
};
}},attempt:function(h,self,i){return this.create(h,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(D,E,self,F){return this.create(D,{delay:E,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(r,s,self,t){return this.create(r,{periodical:s,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var k="qx.event.Registration";
qx.Class.define(k,{statics:{__bA:{},getManager:function(g){if(g==null){{};
g=window;
}else if(g.nodeType){g=qx.dom.Node.getWindow(g);
}else if(!qx.dom.Node.isWindow(g)){g=window;
}var i=g.$$hash||qx.core.ObjectRegistry.toHashCode(g);
var h=this.__bA[i];

if(!h){h=new qx.event.Manager(g,this);
this.__bA[i]=h;
}return h;
},removeManager:function(J){var K=J.getWindowId();
delete this.__bA[K];
},addListener:function(c,d,e,self,f){return this.getManager(c).addListener(c,d,e,self,f);
},removeListener:function(r,s,t,self,u){return this.getManager(r).removeListener(r,s,t,self,u);
},removeListenerById:function(y,z){return this.getManager(y).removeListenerById(y,z);
},removeAllListeners:function(I){return this.getManager(I).removeAllListeners(I);
},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(C){return this.getManager(C).serializeListeners(C);
},createEvent:function(E,F,G){{};
if(F==null){F=qx.event.type.Event;
}var H=qx.event.Pool.getInstance().getObject(F);

if(!H){return;
}G?H.init.apply(H,G):H.init();
if(E){H.setType(E);
}return H;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(l,m,n,o){var p;
{};
var q=this.createEvent(m,n||null,o);
return this.getManager(l).dispatchEvent(l,q);
},fireNonBubblingEvent:function(L,M,N,O){{};
var P=this.getManager(L);

if(!P.hasListener(L,M,false)){return true;
}var Q=this.createEvent(M,N||null,O);
return P.dispatchEvent(L,Q);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bB:[],addHandler:function(j){{};
this.__bB.push(j);
this.__bB.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bB;
},__bC:[],addDispatcher:function(A,B){{};
this.__bC.push(A);
this.__bC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bC;
}}});
})();
(function(){var e="qx.log.appender.RingBuffer";
qx.Class.define(e,{extend:Object,construct:function(f){this.__bD=[];
this.setMaxMessages(f||50);
},members:{__bE:0,__bD:null,__bF:50,setMaxMessages:function(i){this.__bF=i;
this.clearHistory();
},getMaxMessages:function(){return this.__bF;
},process:function(g){var h=this.getMaxMessages();

if(this.__bD.length<h){this.__bD.push(g);
}else{this.__bD[this.__bE++]=g;

if(this.__bE>=h){this.__bE=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(a){if(a>this.__bD.length){a=this.__bD.length;
}
if(this.__bD.length==this.getMaxMessages()){var c=this.__bE-1;
}else{c=this.__bD.length-1;
}var b=c-a+1;

if(b<0){b+=this.__bD.length;
}var d;

if(b<=c){d=this.__bD.slice(b,c+1);
}else{d=this.__bD.slice(b,this.__bD.length).concat(this.__bD.slice(0,c+1));
}return d;
},clearHistory:function(){this.__bD=[];
this.__bE=0;
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",G="number",F="stringify",E="]",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",x="qx.log.Logger",s=")}",t="#",q="warn",r="document",o="{...(",p="[",m="text[",n="[...(",u="\n",v=")]",w="object";
qx.Class.define(x,{statics:{__bG:A,setLevel:function(be){this.__bG=be;
},getLevel:function(){return this.__bG;
},setTreshold:function(bd){this.__bJ.setMaxMessages(bd);
},getTreshold:function(){return this.__bJ.getMaxMessages();
},__bH:{},__bI:0,register:function(ba){if(ba.$$id){return;
}var bb=this.__bI++;
this.__bH[bb]=ba;
ba.$$id=bb;
var bc=this.__bJ.getAllLogEvents();

for(var i=0,l=bc.length;i<l;i++){ba.process(bc[i]);
}},unregister:function(bp){var bq=bp.$$id;

if(bq==null){return;
}delete this.__bH[bq];
delete bp.$$id;
},debug:function(L,M){qx.log.Logger.__bL(A,arguments);
},info:function(bJ,bK){qx.log.Logger.__bL(e,arguments);
},warn:function(bt,bu){qx.log.Logger.__bL(q,arguments);
},error:function(bz,bA){qx.log.Logger.__bL(j,arguments);
},trace:function(by){qx.log.Logger.__bL(e,[by,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(N,O){var P;
{};
},deprecatedClassWarning:function(bB,bC){var bD;
{};
},deprecatedEventWarning:function(bE,event,bF){var bG;
{};
},deprecatedMixinWarning:function(bv,bw){var bx;
{};
},deprecatedConstantWarning:function(H,I,J){var self,K;
{};
},clear:function(){this.__bJ.clearHistory();
},__bJ:new qx.log.appender.RingBuffer(50),__bK:{debug:0,info:1,warn:2,error:3},__bL:function(bf,bg){var bl=this.__bK;

if(bl[bf]<bl[this.__bG]){return;
}var bi=bg.length<2?null:bg[0];
var bk=bi?1:0;
var bh=[];

for(var i=bk,l=bg.length;i<l;i++){bh.push(this.__bN(bg[i],true));
}var bm=new Date;
var bn={time:bm,offset:bm-qx.Bootstrap.LOADSTART,level:bf,items:bh,win:window};
if(bi){if(bi instanceof qx.core.Object){bn.object=bi.$$hash;
}else if(bi.$$type){bn.clazz=bi;
}}this.__bJ.process(bn);
var bo=this.__bH;

for(var bj in bo){bo[bj].process(bn);
}},__bM:function(br){if(br===undefined){return y;
}else if(br===null){return b;
}
if(br.$$type){return a;
}var bs=typeof br;

if(bs===C||bs==c||bs===G||bs===B){return bs;
}else if(bs===w){if(br.nodeType){return k;
}else if(br.classname){return d;
}else if(br instanceof Array){return g;
}else if(br instanceof Error){return j;
}else{return z;
}}
if(br.toString){return F;
}return D;
},__bN:function(Q,R){var Y=this.__bM(Q);
var U=D;
var T=[];

switch(Y){case b:case y:U=Y;
break;
case c:case G:case B:U=Q;
break;
case k:if(Q.nodeType===9){U=r;
}else if(Q.nodeType===3){U=m+Q.nodeValue+E;
}else if(Q.nodeType===1){U=Q.nodeName.toLowerCase();

if(Q.id){U+=t+Q.id;
}}else{U=k;
}break;
case C:U=qx.lang.Function.getName(Q)||Y;
break;
case d:U=Q.basename+p+Q.$$hash+E;
break;
case a:case F:U=Q.toString();
break;
case j:T=qx.dev.StackTrace.getStackTraceFromError(Q);
U=Q.toString();
break;
case g:if(R){U=[];

for(var i=0,l=Q.length;i<l;i++){if(U.length>20){U.push(h+(l-i)+f);
break;
}U.push(this.__bN(Q[i],false));
}}else{U=n+Q.length+v;
}break;
case z:if(R){var S;
var X=[];

for(var W in Q){X.push(W);
}X.sort();
U=[];

for(var i=0,l=X.length;i<l;i++){if(U.length>20){U.push(h+(l-i)+f);
break;
}W=X[i];
S=this.__bN(Q[W],false);
S.key=W;
U.push(S);
}}else{var V=0;

for(var W in Q){V++;
}U=o+V+s;
}break;
}return {type:Y,text:U,trace:T};
}},defer:function(bH){var bI=qx.Bootstrap.$$logs;

for(var i=0;i<bI.length;i++){this.__bL(bI[i][0],bI[i][1]);
}qx.Bootstrap.debug=bH.debug;
qx.Bootstrap.info=bH.info;
qx.Bootstrap.warn=bH.warn;
qx.Bootstrap.error=bH.error;
qx.Bootstrap.trace=bH.trace;
}});
})();
(function(){var y="set",x="get",w="reset",v="qx.core.Object",u="]",t="[",s="$$user_",r="Object";
qx.Class.define(v,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:r},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+t+this.$$hash+u;
},base:function(B,C){{};

if(arguments.length===1){return B.callee.base.call(this);
}else{return B.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(W){return W.callee.self;
},clone:function(){var Q=this.constructor;
var P=new Q;
var S=qx.Class.getProperties(Q);
var R=qx.core.Property.$$store.user;
var T=qx.core.Property.$$method.set;
var name;
for(var i=0,l=S.length;i<l;i++){name=S[i];

if(this.hasOwnProperty(R[name])){P[T[name]](this[R[name]]);
}}return P;
},set:function(X,Y){var bb=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(X)){if(!this[bb[X]]){if(this[y+qx.Bootstrap.firstUp(X)]!=undefined){this[y+qx.Bootstrap.firstUp(X)](Y);
return;
}{};
}return this[bb[X]](Y);
}else{for(var ba in X){if(!this[bb[ba]]){if(this[y+qx.Bootstrap.firstUp(ba)]!=undefined){this[y+qx.Bootstrap.firstUp(ba)](X[ba]);
continue;
}{};
}this[bb[ba]](X[ba]);
}return this;
}},get:function(bf){var bg=qx.core.Property.$$method.get;

if(!this[bg[bf]]){if(this[x+qx.Bootstrap.firstUp(bf)]!=undefined){return this[x+qx.Bootstrap.firstUp(bf)]();
}{};
}return this[bg[bf]]();
},reset:function(bs){var bt=qx.core.Property.$$method.reset;

if(!this[bt[bs]]){if(this[w+qx.Bootstrap.firstUp(bs)]!=undefined){this[w+qx.Bootstrap.firstUp(bs)]();
return;
}{};
}this[bt[bs]]();
},__bO:qx.event.Registration,addListener:function(bv,bw,self,bx){if(!this.$$disposed){return this.__bO.addListener(this,bv,bw,self,bx);
}return null;
},addListenerOnce:function(D,E,self,F){var G=function(e){E.call(self||this,e);
this.removeListener(D,G,this,F);
};
return this.addListener(D,G,this,F);
},removeListener:function(d,f,self,g){if(!this.$$disposed){return this.__bO.removeListener(this,d,f,self,g);
}return false;
},removeListenerById:function(V){if(!this.$$disposed){return this.__bO.removeListenerById(this,V);
}return false;
},hasListener:function(L,M){return this.__bO.hasListener(this,L,M);
},dispatchEvent:function(a){if(!this.$$disposed){return this.__bO.dispatchEvent(this,a);
}return true;
},fireEvent:function(I,J,K){if(!this.$$disposed){return this.__bO.fireEvent(this,I,J,K);
}return true;
},fireNonBubblingEvent:function(bc,bd,be){if(!this.$$disposed){return this.__bO.fireNonBubblingEvent(this,bc,bd,be);
}return true;
},fireDataEvent:function(bi,bj,bk,bl){if(!this.$$disposed){if(bk===undefined){bk=null;
}return this.__bO.fireNonBubblingEvent(this,bi,qx.event.type.Data,[bj,bk,!!bl]);
}return true;
},__bP:null,setUserData:function(by,bz){if(!this.__bP){this.__bP={};
}this.__bP[by]=bz;
},getUserData:function(b){if(!this.__bP){return null;
}var c=this.__bP[b];
return c===undefined?null:c;
},__bQ:qx.log.Logger,debug:function(z){this.__bQ.debug(this,z);
},info:function(U){this.__bQ.info(this,U);
},warn:function(br){this.__bQ.warn(this,br);
},error:function(H){this.__bQ.error(this,H);
},trace:function(){this.__bQ.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bp,bn;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var bo=this.constructor;
var bm;

while(bo.superclass){if(bo.$$destructor){bo.$$destructor.call(this);
}if(bo.$$includes){bm=bo.$$flatIncludes;

for(var i=0,l=bm.length;i<l;i++){if(bm[i].$$destructor){bm[i].$$destructor.call(this);
}}}bo=bo.superclass;
}var bq=qx.Class.getProperties(this.constructor);

for(var i=0,l=bq.length;i<l;i++){delete this[s+bq[i]];
}{};
},_disposeFields:function(bh){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bu){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(O){qx.util.DisposeUtil.disposeArray(this,O);
},_disposeMap:function(N){qx.util.DisposeUtil.disposeMap(this,N);
}},settings:{"qx.disposerDebugLevel":0},defer:function(A){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bP=null;
var k=this.constructor;
var p;
var q=qx.core.Property.$$store;
var n=q.user;
var o=q.theme;
var h=q.inherit;
var m=q.useinit;
var j=q.init;

while(k){p=k.$$properties;

if(p){for(var name in p){if(p[name].dispose){this[n[name]]=this[o[name]]=this[h[name]]=this[m[name]]=this[j[name]]=undefined;
}}}k=k.superclass;
}}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__bR:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__bR=null;
},getInsets:function(){if(this.__bR){return this.__bR;
}var a=this._getDefaultInsets();
return this.__bR={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__bR=null;
}},destruct:function(){this.__bR=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var o="_applyStyle",n="Color",m="px",l="solid",k="dotted",j="double",i="dashed",h="",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(z,A,B){arguments.callee.base.call(this);
if(z!=null){this.setWidth(z);
}
if(A!=null){this.setStyle(A);
}
if(B!=null){this.setColor(B);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[l,k,i,j],init:l,apply:o},color:{nullable:true,check:n,apply:o},backgroundColor:{check:n,nullable:true,apply:o}},members:{__bS:null,_getDefaultInsets:function(){var p=this.getWidth();
return {top:p,right:p,bottom:p,left:p};
},_isInitialized:function(){return !!this.__bS;
},getMarkup:function(){if(this.__bS){return this.__bS;
}var q={position:a,top:0,left:0};
var r=this.getWidth();
{};
var t=qx.theme.manager.Color.getInstance();
q.border=r+c+this.getStyle()+e+t.resolve(this.getColor());
var s=this._generateBackgroundMarkup(q);
return this.__bS=s;
},resize:function(u,v,w){var y=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(y||qx.bom.client.Feature.CONTENT_BOX){var x=this.getWidth()*2;
v-=x;
w-=x;
if(v<0){v=0;
}
if(w<0){w=0;
}}u.style.width=v+m;
u.style.height=w+m;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||h;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__bS=null;
}});
})();
(function(){var i="px",h="qx.ui.decoration.Background",g="",f="_applyStyle",e="Color",d="absolute";
qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){arguments.callee.base.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:e,nullable:true,apply:f}},members:{__bT:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bT;
},getMarkup:function(){if(this.__bT){return this.__bT;
}var m={position:d,top:0,left:0};
var n=this._generateBackgroundMarkup(m);
return this.__bT=n;
},resize:function(j,k,l){j.style.width=k+i;
j.style.height=l+i;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||g;
},_applyStyle:function(){{};
}},destruct:function(){this.__bT=null;
}});
})();
(function(){var p="_applyStyle",o="solid",n="Color",m="double",l="px ",k="dotted",j="_applyWidth",i="dashed",h="Number",g=" ",L="shorthand",K="px",J="widthTop",I="styleRight",H="styleLeft",G="widthLeft",F="widthBottom",E="styleTop",D="colorBottom",C="styleBottom",w="widthRight",x="colorLeft",u="colorRight",v="colorTop",s="scale",t="border-top",q="border-left",r="border-right",y="qx.ui.decoration.Single",z="",B="border-bottom",A="absolute";
qx.Class.define(y,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(d,e,f){arguments.callee.base.call(this);
if(d!=null){this.setWidth(d);
}
if(e!=null){this.setStyle(e);
}
if(f!=null){this.setColor(f);
}},properties:{widthTop:{check:h,init:0,apply:j},widthRight:{check:h,init:0,apply:j},widthBottom:{check:h,init:0,apply:j},widthLeft:{check:h,init:0,apply:j},styleTop:{nullable:true,check:[o,k,i,m],init:o,apply:p},styleRight:{nullable:true,check:[o,k,i,m],init:o,apply:p},styleBottom:{nullable:true,check:[o,k,i,m],init:o,apply:p},styleLeft:{nullable:true,check:[o,k,i,m],init:o,apply:p},colorTop:{nullable:true,check:n,apply:p},colorRight:{nullable:true,check:n,apply:p},colorBottom:{nullable:true,check:n,apply:p},colorLeft:{nullable:true,check:n,apply:p},backgroundColor:{check:n,nullable:true,apply:p},left:{group:[G,H,x]},right:{group:[w,I,u]},top:{group:[J,E,v]},bottom:{group:[F,C,D]},width:{group:[J,w,F,G],mode:L},style:{group:[E,I,C,H],mode:L},color:{group:[v,u,D,x],mode:L}},members:{__bU:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__bU;
},getMarkup:function(M){if(this.__bU){return this.__bU;
}var N=qx.theme.manager.Color.getInstance();
var O={};
var Q=this.getWidthTop();

if(Q>0){O[t]=Q+l+this.getStyleTop()+g+N.resolve(this.getColorTop());
}var Q=this.getWidthRight();

if(Q>0){O[r]=Q+l+this.getStyleRight()+g+N.resolve(this.getColorRight());
}var Q=this.getWidthBottom();

if(Q>0){O[B]=Q+l+this.getStyleBottom()+g+N.resolve(this.getColorBottom());
}var Q=this.getWidthLeft();

if(Q>0){O[q]=Q+l+this.getStyleLeft()+g+N.resolve(this.getColorLeft());
}{};
O.position=A;
O.top=0;
O.left=0;
var P=this._generateBackgroundMarkup(O);
return this.__bU=P;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==s;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+K;
R.style.height=T+K;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||z;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__bU=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",x="qx.client",w="-br",v="-t",u="-tl",t="-r",s='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',r="_applyBaseImage",q="-b",p="String",o="",m="-bl",n="-c",k="mshtml",l="qx.ui.decoration.Grid";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,construct:function(H,I){arguments.callee.base.call(this);
if(H!=null){this.setBaseImage(H);
}
if(I!=null){this.setInsets(I);
}},properties:{baseImage:{check:p,nullable:true,apply:r}},members:{__bV:null,__bW:null,__bX:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bV;
},getMarkup:function(){if(this.__bV){return this.__bV;
}var L=qx.bom.element.Decoration;
var M=this.__bW;
var N=this.__bX;
var O=[];
O.push(s);
O.push(L.create(M.tl,g,{top:0,left:0}));
O.push(L.create(M.t,f,{top:0,left:N.left+j}));
O.push(L.create(M.tr,g,{top:0,right:0}));
O.push(L.create(M.bl,g,{bottom:0,left:0}));
O.push(L.create(M.b,f,{bottom:0,left:N.left+j}));
O.push(L.create(M.br,g,{bottom:0,right:0}));
O.push(L.create(M.l,e,{top:N.top+j,left:0}));
O.push(L.create(M.c,a,{top:N.top+j,left:N.left+j}));
O.push(L.create(M.r,e,{top:N.top+j,right:0}));
O.push(b);
return this.__bV=O.join(o);
},resize:function(P,Q,R){var S=this.__bX;
var innerWidth=Q-S.left-S.right;
var innerHeight=R-S.top-S.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}P.style.width=Q+j;
P.style.height=R+j;
P.childNodes[1].style.width=innerWidth+j;
P.childNodes[4].style.width=innerWidth+j;
P.childNodes[7].style.width=innerWidth+j;
P.childNodes[6].style.height=innerHeight+j;
P.childNodes[7].style.height=innerHeight+j;
P.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(x,k)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(Q%2==1){P.childNodes[2].style.marginRight=h;
P.childNodes[5].style.marginRight=h;
P.childNodes[8].style.marginRight=h;
}else{P.childNodes[2].style.marginRight=i;
P.childNodes[5].style.marginRight=i;
P.childNodes[8].style.marginRight=i;
}
if(R%2==1){P.childNodes[3].style.marginBottom=h;
P.childNodes[4].style.marginBottom=h;
P.childNodes[5].style.marginBottom=h;
}else{P.childNodes[3].style.marginBottom=i;
P.childNodes[4].style.marginBottom=i;
P.childNodes[5].style.marginBottom=i;
}}}},tint:function(J,K){},_applyBaseImage:function(A,B){{};

if(A){var F=this._resolveImageUrl(A);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var E=G[1];
var D=G[2];
var C=this.__bW={tl:E+u+D,t:E+v+D,tr:E+d+D,bl:E+m+D,b:E+q+D,br:E+w+D,l:E+c+D,c:E+n+D,r:E+t+D};
this.__bX=this._computeEdgeSizes(C);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(y){var z=qx.util.ResourceManager.getInstance();
return {top:z.getImageHeight(y.t),bottom:z.getImageHeight(y.b),left:z.getImageWidth(y.l),right:z.getImageWidth(y.r)};
}},destruct:function(){this.__bV=this.__bW=this.__bX=null;
}});
})();
(function(){var m="_applyStyle",l='"></div>',k="Color",j="1px",i='<div style="',h='border:',g="1px solid ",f="",e=";",d="px",y='</div>',x="qx.ui.decoration.Beveled",w='<div style="position:absolute;top:1px;left:1px;',v='border-bottom:',u='border-right:',t='border-left:',s='border-top:',r="Number",q='<div style="position:absolute;top:1px;left:0px;',p='position:absolute;top:0px;left:1px;',n='<div style="overflow:hidden;font-size:0;line-height:0;">',o="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){arguments.callee.base.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:k,nullable:true,apply:m},innerOpacity:{check:r,init:1,apply:m},outerColor:{check:k,nullable:true,apply:m},backgroundColor:{check:k,nullable:true,apply:m}},members:{__bY:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__bY;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__bY){return this.__bY;
}var z=qx.theme.manager.Color.getInstance();
var A=[];
var D=g+z.resolve(this.getOuterColor())+e;
var C=g+z.resolve(this.getInnerColor())+e;
A.push(n);
A.push(i);
A.push(h,D);
A.push(qx.bom.element.Opacity.compile(0.35));
A.push(l);
A.push(q);
A.push(t,D);
A.push(u,D);
A.push(l);
A.push(i);
A.push(p);
A.push(s,D);
A.push(v,D);
A.push(l);
var B={position:o,top:j,left:j};
A.push(this._generateBackgroundMarkup(B));
A.push(w);
A.push(h,C);
A.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
A.push(l);
A.push(y);
return this.__bY=A.join(f);
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
}},destruct:function(){this.__bY=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var d="decoration/toolbar/toolbar-gradient.png",c="border-main",b="inspector.theme.Decoration",a="scale";
qx.Theme.define(b,{extend:qx.theme.modern.Decoration,decorations:{"myToolbar":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:c,backgroundImage:d,backgroundRepeat:a}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ca:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__ca();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cb:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cc:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__cb){J.push(I);
}var L=new RegExp(l+J.join(C).replace(/\./g,r)+H,u);

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
}else{this.NAME=this.__cb[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__cc();
}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var a="inspector.theme.Font";
qx.Theme.define(a,{extend:qx.theme.modern.Font,fonts:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var fo="button-frame",fn="atom",fm="widget",fl="main",fk="button",fj="text-selected",fi="image",fh="bold",fg="middle",ff="background-light",dR="text-disabled",dQ="groupbox",dP="decoration/arrows/down.png",dO="cell",dN="selected",dM="border-invalid",dL="input",dK="input-disabled",dJ="menu-button",dI="input-focused-invalid",fv="toolbar-button",fw="spinner",ft="input-focused",fu="popup",fr="tooltip",fs="list",fp="tree-item",fq="treevirtual-contract",fx="scrollbar",fy="datechooser/nav-button",eN="text-hovered",eM="center",eP="treevirtual-expand",eO="textfield",eR="label",eQ="decoration/arrows/right.png",eT="background-application",eS="radiobutton",eL="white",eK="invalid",bM="combobox",bN="right-top",bO="checkbox",bP="text-title",bQ="qx/static/blank.gif",bR="scrollbar/button",bS="right",bT="combobox/button",bU="icon/16/places/folder.png",bV="text-label",fM="decoration/tree/closed.png",fL="scrollbar-slider-horizontal",fK="decoration/arrows/left.png",fJ="button-focused",fQ="text-light",fP="menu-slidebar-button",fO="text-input",fN="slidebar/button-forward",fS="background-splitpane",fR=".png",cO="decoration/tree/open.png",cP="default",cM="decoration/arrows/down-small.png",cN="datechooser",cS="slidebar/button-backward",cT="selectbox",cQ="treevirtual-folder",cR="shadow-popup",cK="icon/16/mimetypes/office-document.png",cL="background-medium",cq="table",cp="decoration/arrows/up.png",cs="decoration/form/",cr="",cm="-invalid",cl="icon/16/places/folder-open.png",co="button-checked",cn="decoration/window/maximize-active-hovered.png",ck="radiobutton-hovered",cj="decoration/cursors/",da="slidebar",db="tooltip-error-arrow",dc="table-scroller-focus-indicator",dd="move-frame",cV="nodrop",cW="decoration/table/boolean-true.png",cX="table-header-cell",cY="menu",de="app-header",df="row-layer",cD="text-inactive",cC="move",cB="radiobutton-checked-focused",cA="decoration/window/restore-active-hovered.png",cz="shadow-window",cy="table-column-button",cx="right.png",cw="tabview-page-button-bottom-inactive",cH="tooltip-error",cG="window-statusbar",dg="button-hovered",dh="decoration/scrollbar/scrollbar-",di="background-tip",dj="scrollbar-slider-horizontal-disabled",dk="table-scroller-header",dl="radiobutton-disabled",dm="button-pressed",dn="table-pane",dp="decoration/window/close-active.png",dq="native",ea="checkbox-hovered",dY="button-invalid-shadow",dX="checkbox-checked",dW="decoration/window/minimize-active-hovered.png",ee="menubar",ed="icon/16/actions/dialog-cancel.png",ec="tabview-page-button-top-inactive",eb="tabview-page-button-left-inactive",ei="menu-slidebar",eh="toolbar-button-checked",eF="decoration/tree/open-selected.png",eG="radiobutton-checked",eD="decoration/window/minimize-inactive.png",eE="icon/16/apps/office-calendar.png",eB="group",eC="tabview-page-button-right-inactive",ez="decoration/window/minimize-active.png",eA="decoration/window/restore-inactive.png",eH="checkbox-checked-focused",eI="splitpane",eX="combobox/textfield",eW="button-preselected-focused",fa="decoration/window/close-active-hovered.png",eY="qx/icon/Tango/16/actions/window-close.png",fc="checkbox-pressed",fb="button-disabled",fe="selected-dragover",fd="border-separator",eV="decoration/window/maximize-inactive.png",eU="dragover",fF="scrollarea",fG="scrollbar-vertical",fH="decoration/menu/checkbox-invert.gif",fI="decoration/toolbar/toolbar-handle-knob.gif",fB="icon/22/mimetypes/office-document.png",fC="button-preselected",fD="button-checked-focused",fE="up.png",fz="best-fit",fA="decoration/tree/closed-selected.png",bL="qx.theme.modern.Appearance",bK="text-active",bJ="checkbox-disabled",bI="toolbar-button-hovered",bH="progressive-table-header",bG="decoration/table/select-column-order.png",bF="decoration/menu/radiobutton.gif",bE="decoration/arrows/forward.png",bD="decoration/table/descending.png",bC="window-captionbar-active",bY="checkbox-checked-hovered",ca="scrollbar-slider-vertical",bW="toolbar",bX="alias",cd="decoration/window/restore-active.png",ce="decoration/table/boolean-false.png",cb="checkbox-checked-disabled",cc="icon/32/mimetypes/office-document.png",cg="radiobutton-checked-disabled",ch="tabview-pane",em="decoration/arrows/rewind.png",eg="checkbox-focused",et="top",ep="#EEE",dU="icon/16/actions/dialog-ok.png",dS="radiobutton-checked-hovered",cu="table-header-cell-hovered",dV="window",cF="text-gray",cE="decoration/menu/radiobutton-invert.gif",dA="text-placeholder",dB="slider",dC="keep-align",dD="down.png",dE="tabview-page-button-top-active",dF="icon/32/places/folder-open.png",dG="icon/22/places/folder.png",dH="decoration/window/maximize-active.png",dx="checkbox-checked-pressed",dy="decoration/window/close-inactive.png",dT="tabview-page-button-left-active",es="toolbar-part",er="decoration/splitpane/knob-vertical.png",eq=".gif",ex="icon/22/places/folder-open.png",ew="radiobutton-checked-pressed",ev="table-statusbar",eu="radiobutton-pressed",eo="window-captionbar-inactive",en="copy",cf="radiobutton-focused",cJ="decoration/arrows/down-invert.png",cI="decoration/menu/checkbox.gif",ef="decoration/splitpane/knob-horizontal.png",cU="icon/32/places/folder.png",el="toolbar-separator",ek="tabview-page-button-bottom-active",ej="decoration/arrows/up-small.png",ct="decoration/table/ascending.png",ey="decoration/arrows/up-invert.png",ci="small",cv="tabview-page-button-right-active",dr="-disabled",ds="scrollbar-horizontal",dt="progressive-table-header-cell",du="menu-separator",dv="pane",dw="decoration/arrows/right-invert.png",eJ="left.png",dz="icon/16/actions/view-refresh.png";
qx.Theme.define(bL,{appearances:{"widget":{},"root":{style:function(gl){return {backgroundColor:eT,textColor:bV,font:cP};
}},"label":{style:function(hC){return {textColor:hC.disabled?dR:undefined};
}},"move-frame":{style:function(fU){return {decorator:fl};
}},"resize-frame":dd,"dragdrop-cursor":{style:function(fY){var ga=cV;

if(fY.copy){ga=en;
}else if(fY.move){ga=cC;
}else if(fY.alias){ga=bX;
}return {source:cj+ga+eq,position:bN,offset:[2,16,2,6]};
}},"image":{style:function(gv){return {opacity:!gv.replacement&&gv.disabled?0.3:1};
}},"atom":{},"atom/label":eR,"atom/icon":fi,"popup":{style:function(bp){return {decorator:fl,backgroundColor:ff,shadow:cR};
}},"button-frame":{alias:fn,style:function(gz){var gB,gA;

if(gz.checked&&gz.focused&&!gz.inner){gB=fD;
gA=undefined;
}else if(gz.disabled){gB=fb;
gA=undefined;
}else if(gz.pressed){gB=dm;
gA=eN;
}else if(gz.checked){gB=co;
gA=undefined;
}else if(gz.hovered){gB=dg;
gA=eN;
}else if(gz.preselected&&gz.focused&&!gz.inner){gB=eW;
gA=eN;
}else if(gz.preselected){gB=fC;
gA=eN;
}else if(gz.focused&&!gz.inner){gB=fJ;
gA=undefined;
}else{gB=fk;
gA=undefined;
}return {decorator:gB,textColor:gA,shadow:gz.invalid&&!gz.disabled?dY:undefined};
}},"button-frame/image":{style:function(gx){return {opacity:!gx.replacement&&gx.disabled?0.5:1};
}},"button":{alias:fo,include:fo,style:function(go){return {padding:[2,8],center:true};
}},"hover-button":{alias:fn,include:fn,style:function(fT){return {decorator:fT.hovered?dN:undefined,textColor:fT.hovered?fj:undefined};
}},"splitbutton":{},"splitbutton/button":fk,"splitbutton/arrow":{alias:fk,include:fk,style:function(p){return {icon:dP,padding:2,marginLeft:1};
}},"checkbox":{alias:fn,style:function(c){var e;

if(c.checked&&c.focused){e=eH;
}else if(c.checked&&c.disabled){e=cb;
}else if(c.checked&&c.pressed){e=dx;
}else if(c.checked&&c.hovered){e=bY;
}else if(c.checked){e=dX;
}else if(c.disabled){e=bJ;
}else if(c.focused){e=eg;
}else if(c.pressed){e=fc;
}else if(c.hovered){e=ea;
}else{e=bO;
}var d=c.invalid&&!c.disabled?cm:cr;
return {icon:cs+e+d+fR,gap:6};
}},"radiobutton":{alias:fn,style:function(hc){var he;

if(hc.checked&&hc.focused){he=cB;
}else if(hc.checked&&hc.disabled){he=cg;
}else if(hc.checked&&hc.pressed){he=ew;
}else if(hc.checked&&hc.hovered){he=dS;
}else if(hc.checked){he=eG;
}else if(hc.disabled){he=dl;
}else if(hc.focused){he=cf;
}else if(hc.pressed){he=eu;
}else if(hc.hovered){he=ck;
}else{he=eS;
}var hd=hc.invalid&&!hc.disabled?cm:cr;
return {icon:cs+he+hd+fR,gap:6};
}},"textfield":{style:function(gV){var hb;
var gY=!!gV.focused;
var ha=!!gV.invalid;
var gW=!!gV.disabled;

if(gY&&ha&&!gW){hb=dI;
}else if(gY&&!ha&&!gW){hb=ft;
}else if(gW){hb=dK;
}else if(!gY&&ha&&!gW){hb=dM;
}else{hb=dL;
}var gX;

if(gV.disabled){gX=dR;
}else if(gV.showingPlaceholder){gX=dA;
}else{gX=fO;
}return {decorator:hb,padding:[2,4,1],textColor:gX};
}},"textarea":{include:eO,style:function(fW){return {padding:4};
}},"spinner":{style:function(hM){var hQ;
var hO=!!hM.focused;
var hP=!!hM.invalid;
var hN=!!hM.disabled;

if(hO&&hP&&!hN){hQ=dI;
}else if(hO&&!hP&&!hN){hQ=ft;
}else if(hN){hQ=dK;
}else if(!hO&&hP&&!hN){hQ=dM;
}else{hQ=dL;
}return {decorator:hQ};
}},"spinner/textfield":{style:function(Y){return {marginRight:2,padding:[2,4,1],textColor:Y.disabled?dR:fO};
}},"spinner/upbutton":{alias:fo,include:fo,style:function(bn){return {icon:ej,padding:bn.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:fo,include:fo,style:function(T){return {icon:cM,padding:T.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":bM,"datefield/button":{alias:bT,include:bT,style:function(S){return {icon:eE,padding:[0,3],decorator:undefined};
}},"datefield/textfield":eX,"datefield/list":{alias:cN,include:cN,style:function(V){return {decorator:undefined};
}},"groupbox":{style:function(gT){return {legendPosition:et};
}},"groupbox/legend":{alias:fn,style:function(P){return {padding:[1,0,1,4],textColor:P.invalid?eK:bP,font:fh};
}},"groupbox/frame":{style:function(a){return {padding:12,decorator:eB};
}},"check-groupbox":dQ,"check-groupbox/legend":{alias:bO,include:bO,style:function(bk){return {padding:[1,0,1,4],textColor:bk.invalid?eK:bP,font:fh};
}},"radio-groupbox":dQ,"radio-groupbox/legend":{alias:eS,include:eS,style:function(v){return {padding:[1,0,1,4],textColor:v.invalid?eK:bP,font:fh};
}},"scrollarea":{style:function(gc){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bA){return {backgroundColor:eT};
}},"scrollarea/pane":fm,"scrollarea/scrollbar-x":fx,"scrollarea/scrollbar-y":fx,"scrollbar":{style:function(hG){if(hG[dq]){return {};
}return {width:hG.horizontal?undefined:16,height:hG.horizontal?16:undefined,decorator:hG.horizontal?ds:fG,padding:1};
}},"scrollbar/slider":{alias:dB,style:function(hI){return {padding:hI.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:fo,style:function(id){var ie=id.horizontal?fL:ca;

if(id.disabled){ie+=dr;
}return {decorator:ie,minHeight:id.horizontal?undefined:9,minWidth:id.horizontal?9:undefined};
}},"scrollbar/button":{alias:fo,include:fo,style:function(hD){var hE=dh;

if(hD.left){hE+=eJ;
}else if(hD.right){hE+=cx;
}else if(hD.up){hE+=fE;
}else{hE+=dD;
}
if(hD.left||hD.right){return {padding:[0,0,0,hD.left?3:4],icon:hE,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:hE,width:14,height:15};
}}},"scrollbar/button-begin":bR,"scrollbar/button-end":bR,"slider":{style:function(hR){var hV;
var hT=!!hR.focused;
var hU=!!hR.invalid;
var hS=!!hR.disabled;

if(hT&&hU&&!hS){hV=dI;
}else if(hT&&!hU&&!hS){hV=ft;
}else if(hS){hV=dK;
}else if(!hT&&hU&&!hS){hV=dM;
}else{hV=dL;
}return {decorator:hV};
}},"slider/knob":{include:fo,style:function(K){return {decorator:K.disabled?dj:fL,shadow:undefined,height:14,width:14};
}},"list":{alias:fF,style:function(hh){var hl;
var hj=!!hh.focused;
var hk=!!hh.invalid;
var hi=!!hh.disabled;

if(hj&&hk&&!hi){hl=dI;
}else if(hj&&!hk&&!hi){hl=ft;
}else if(hi){hl=dK;
}else if(!hj&&hk&&!hi){hl=dM;
}else{hl=dL;
}return {backgroundColor:ff,decorator:hl};
}},"list/pane":fm,"listitem":{alias:fn,style:function(C){var D;

if(C.dragover){D=C.selected?fe:eU;
}else{D=C.selected?dN:undefined;
}return {padding:C.dragover?[4,4,2,4]:4,textColor:C.selected?fj:undefined,decorator:D};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fo,include:fo,style:function(bv){return {padding:5,center:true,icon:bv.vertical?dP:eQ};
}},"slidebar/button-backward":{alias:fo,include:fo,style:function(gR){return {padding:5,center:true,icon:gR.vertical?cp:fK};
}},"tabview":{style:function(bB){return {contentPadding:16};
}},"tabview/bar":{alias:da,style:function(x){var y={marginBottom:x.barTop?-1:0,marginTop:x.barBottom?-4:0,marginLeft:x.barRight?-3:0,marginRight:x.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(x.barTop||x.barBottom){y.paddingLeft=5;
y.paddingRight=7;
}else{y.paddingTop=5;
y.paddingBottom=7;
}return y;
}},"tabview/bar/button-forward":{include:fN,alias:fN,style:function(gd){if(gd.barTop||gd.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cS,alias:cS,style:function(hs){if(hs.barTop||hs.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(A){return {decorator:ch,minHeight:100,marginBottom:A.barBottom?-1:0,marginTop:A.barTop?-1:0,marginLeft:A.barLeft?-1:0,marginRight:A.barRight?-1:0};
}},"tabview-page":fm,"tabview-page/button":{alias:fn,style:function(gJ){var gP,gL=0;
var gO=0,gK=0,gM=0,gN=0;

if(gJ.checked){if(gJ.barTop){gP=dE;
gL=[6,14];
gM=gJ.firstTab?0:-5;
gN=gJ.lastTab?0:-5;
}else if(gJ.barBottom){gP=ek;
gL=[6,14];
gM=gJ.firstTab?0:-5;
gN=gJ.lastTab?0:-5;
}else if(gJ.barRight){gP=cv;
gL=[6,13];
gO=gJ.firstTab?0:-5;
gK=gJ.lastTab?0:-5;
}else{gP=dT;
gL=[6,13];
gO=gJ.firstTab?0:-5;
gK=gJ.lastTab?0:-5;
}}else{if(gJ.barTop){gP=ec;
gL=[4,10];
gO=4;
gM=gJ.firstTab?5:1;
gN=1;
}else if(gJ.barBottom){gP=cw;
gL=[4,10];
gK=4;
gM=gJ.firstTab?5:1;
gN=1;
}else if(gJ.barRight){gP=eC;
gL=[4,10];
gN=5;
gO=gJ.firstTab?5:1;
gK=1;
gM=1;
}else{gP=eb;
gL=[4,10];
gM=5;
gO=gJ.firstTab?5:1;
gK=1;
gN=1;
}}return {zIndex:gJ.checked?10:5,decorator:gP,padding:gL,marginTop:gO,marginBottom:gK,marginLeft:gM,marginRight:gN,textColor:gJ.checked?bK:cD};
}},"tabview-page/button/close-button":{alias:fn,style:function(bc){return {icon:eY};
}},"toolbar":{style:function(bs){return {decorator:bW,spacing:2};
}},"toolbar/part":{style:function(hf){return {decorator:es,spacing:2};
}},"toolbar/part/container":{style:function(gF){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(F){return {source:fI,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:fn,style:function(B){return {marginTop:2,marginBottom:2,padding:(B.pressed||B.checked||B.hovered)&&!B.disabled||(B.disabled&&B.checked)?3:5,decorator:B.pressed||(B.checked&&!B.hovered)||(B.checked&&B.disabled)?eh:B.hovered&&!B.disabled?bI:undefined};
}},"toolbar-menubutton":{alias:fv,include:fv,style:function(gh){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:fi,include:fi,style:function(hz){return {source:cM};
}},"toolbar-splitbutton":{style:function(gU){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:fv,include:fv,style:function(gj){return {icon:dP,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:fv,include:fv,style:function(u){return {padding:u.pressed||u.checked?1:u.hovered?1:3,icon:dP,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(G){return {decorator:el,margin:7};
}},"tree":fs,"tree-item":{style:function(hA){return {padding:[2,6],textColor:hA.selected?fj:undefined,decorator:hA.selected?dN:undefined};
}},"tree-item/icon":{include:fi,style:function(R){return {paddingRight:5};
}},"tree-item/label":eR,"tree-item/open":{include:fi,style:function(gm){var gn;

if(gm.selected&&gm.opened){gn=eF;
}else if(gm.selected&&!gm.opened){gn=fA;
}else if(gm.opened){gn=cO;
}else{gn=fM;
}return {padding:[0,5,0,2],source:gn};
}},"tree-folder":{include:fp,alias:fp,style:function(m){var n;

if(m.small){n=m.opened?cl:bU;
}else if(m.large){n=m.opened?dF:cU;
}else{n=m.opened?ex:dG;
}return {icon:n};
}},"tree-file":{include:fp,alias:fp,style:function(Q){return {icon:Q.small?cK:Q.large?cc:fB};
}},"treevirtual":cq,"treevirtual-folder":{style:function(gS){return {icon:gS.opened?cl:bU};
}},"treevirtual-file":{include:cQ,alias:cQ,style:function(bl){return {icon:cK};
}},"treevirtual-line":{style:function(gp){return {icon:bQ};
}},"treevirtual-contract":{style:function(bb){return {icon:cO,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(gs){return {icon:fM,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":fq,"treevirtual-only-expand":eP,"treevirtual-start-contract":fq,"treevirtual-start-expand":eP,"treevirtual-end-contract":fq,"treevirtual-end-expand":eP,"treevirtual-cross-contract":fq,"treevirtual-cross-expand":eP,"treevirtual-end":{style:function(bd){return {icon:bQ};
}},"treevirtual-cross":{style:function(gQ){return {icon:bQ};
}},"tooltip":{include:fu,style:function(hJ){return {backgroundColor:di,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":fn,"tooltip-error":{include:fr,style:function(hp){return {textColor:fj,placeMethod:fm,offset:[0,0,0,14],marginTop:-2,position:bN,showTimeout:100,hideTimeout:10000,decorator:cH,shadow:db,font:fh};
}},"tooltip-error/atom":fn,"window":{style:function(bt){return {shadow:cz,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bx){return {decorator:dV};
}},"window/captionbar":{style:function(q){return {decorator:q.active?bC:eo,textColor:q.active?eL:cF,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hq){return {margin:[5,0,3,6]};
}},"window/title":{style:function(w){return {alignY:fg,font:fh,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:fn,style:function(gI){return {icon:gI.active?gI.hovered?dW:ez:eD,margin:[4,8,2,0]};
}},"window/restore-button":{alias:fn,style:function(hY){return {icon:hY.active?hY.hovered?cA:cd:eA,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:fn,style:function(gw){return {icon:gw.active?gw.hovered?cn:dH:eV,margin:[4,8,2,0]};
}},"window/close-button":{alias:fn,style:function(fV){return {icon:fV.active?fV.hovered?fa:dp:dy,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(s){return {padding:[2,6],decorator:cG,minHeight:18};
}},"window/statusbar-text":{style:function(gD){return {font:ci};
}},"iframe":{style:function(hL){return {decorator:fl};
}},"resizer":{style:function(k){return {decorator:dv};
}},"splitpane":{style:function(O){return {decorator:eI};
}},"splitpane/splitter":{style:function(bj){return {width:bj.horizontal?3:undefined,height:bj.vertical?3:undefined,backgroundColor:fS};
}},"splitpane/splitter/knob":{style:function(bm){return {source:bm.horizontal?ef:er};
}},"splitpane/slider":{style:function(L){return {width:L.horizontal?3:undefined,height:L.vertical?3:undefined,backgroundColor:fS};
}},"selectbox":{alias:fo,include:fo,style:function(U){return {padding:[2,8]};
}},"selectbox/atom":fn,"selectbox/popup":fu,"selectbox/list":{alias:fs},"selectbox/arrow":{include:fi,style:function(hB){return {source:dP,paddingLeft:5};
}},"datechooser":{style:function(be){var bi;
var bg=!!be.focused;
var bh=!!be.invalid;
var bf=!!be.disabled;

if(bg&&bh&&!bf){bi=dI;
}else if(bg&&!bh&&!bf){bi=ft;
}else if(bf){bi=dK;
}else if(!bg&&bh&&!bf){bi=dM;
}else{bi=dL;
}return {padding:2,decorator:bi,backgroundColor:ff};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:fo,alias:fo,style:function(hn){var ho={padding:[2,4],shadow:undefined};

if(hn.lastYear){ho.icon=em;
ho.marginRight=1;
}else if(hn.lastMonth){ho.icon=fK;
}else if(hn.nextYear){ho.icon=bE;
ho.marginLeft=1;
}else if(hn.nextMonth){ho.icon=eQ;
}return ho;
}},"datechooser/last-year-button-tooltip":fr,"datechooser/last-month-button-tooltip":fr,"datechooser/next-year-button-tooltip":fr,"datechooser/next-month-button-tooltip":fr,"datechooser/last-year-button":fy,"datechooser/last-month-button":fy,"datechooser/next-month-button":fy,"datechooser/next-year-button":fy,"datechooser/month-year-label":{style:function(ba){return {font:fh,textAlign:eM,textColor:ba.disabled?dR:undefined};
}},"datechooser/date-pane":{style:function(ht){return {textColor:ht.disabled?dR:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(gC){return {textColor:gC.disabled?dR:gC.weekend?fQ:undefined,textAlign:eM,paddingTop:2,backgroundColor:cL};
}},"datechooser/week":{style:function(br){return {textAlign:eM,padding:[2,4],backgroundColor:cL};
}},"datechooser/day":{style:function(I){return {textAlign:eM,decorator:I.disabled?undefined:I.selected?dN:undefined,textColor:I.disabled?dR:I.selected?fj:I.otherMonth?fQ:undefined,font:I.today?fh:undefined,padding:[2,4]};
}},"combobox":{style:function(hu){var hy;
var hw=!!hu.focused;
var hx=!!hu.invalid;
var hv=!!hu.disabled;

if(hw&&hx&&!hv){hy=dI;
}else if(hw&&!hx&&!hv){hy=ft;
}else if(hv){hy=dK;
}else if(!hw&&hx&&!hv){hy=dM;
}else{hy=dL;
}return {decorator:hy};
}},"combobox/popup":fu,"combobox/list":{alias:fs},"combobox/button":{include:fo,alias:fo,style:function(ib){var ic={icon:dP,padding:2};

if(ib.selected){ic.decorator=fJ;
}return ic;
}},"combobox/textfield":{include:eO,style:function(gq){return {decorator:undefined};
}},"menu":{style:function(i){var j={decorator:cY,shadow:cR,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:i.submenu||i.contextmenu?fz:dC};

if(i.submenu){j.position=bN;
j.offset=[-2,-3];
}return j;
}},"menu/slidebar":ei,"menu-slidebar":fm,"menu-slidebar-button":{style:function(X){return {decorator:X.hovered?dN:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:fP,style:function(gt){return {icon:gt.hovered?ey:cp};
}},"menu-slidebar/button-forward":{include:fP,style:function(hX){return {icon:hX.hovered?cJ:dP};
}},"menu-separator":{style:function(hW){return {height:0,decorator:du,margin:[4,2]};
}},"menu-button":{alias:fn,style:function(W){return {decorator:W.selected?dN:undefined,textColor:W.selected?fj:undefined,padding:[4,6]};
}},"menu-button/icon":{include:fi,style:function(gy){return {alignY:fg};
}},"menu-button/label":{include:eR,style:function(ig){return {alignY:fg,padding:1};
}},"menu-button/shortcut":{include:eR,style:function(ge){return {alignY:fg,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:fi,style:function(f){return {source:f.selected?dw:eQ,alignY:fg};
}},"menu-checkbox":{alias:dJ,include:dJ,style:function(z){return {icon:!z.checked?undefined:z.selected?fH:cI};
}},"menu-radiobutton":{alias:dJ,include:dJ,style:function(ia){return {icon:!ia.checked?undefined:ia.selected?cE:bF};
}},"menubar":{style:function(r){return {decorator:ee};
}},"menubar-button":{alias:fn,style:function(gr){return {decorator:gr.pressed||gr.hovered?dN:undefined,textColor:gr.pressed||gr.hovered?fj:undefined,padding:[3,8]};
}},"colorselector":fm,"colorselector/control-bar":fm,"colorselector/control-pane":fm,"colorselector/visual-pane":dQ,"colorselector/preset-grid":fm,"colorselector/colorbucket":{style:function(hK){return {decorator:fl,width:16,height:16};
}},"colorselector/preset-field-set":dQ,"colorselector/input-field-set":dQ,"colorselector/preview-field-set":dQ,"colorselector/hex-field-composite":fm,"colorselector/hex-field":eO,"colorselector/rgb-spinner-composite":fm,"colorselector/rgb-spinner-red":fw,"colorselector/rgb-spinner-green":fw,"colorselector/rgb-spinner-blue":fw,"colorselector/hsb-spinner-composite":fm,"colorselector/hsb-spinner-hue":fw,"colorselector/hsb-spinner-saturation":fw,"colorselector/hsb-spinner-brightness":fw,"colorselector/preview-content-old":{style:function(gH){return {decorator:fl,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bw){return {decorator:fl,backgroundColor:ff,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gf){return {decorator:fl,margin:5};
}},"colorselector/brightness-field":{style:function(by){return {decorator:fl,margin:[5,7]};
}},"colorselector/hue-saturation-pane":fm,"colorselector/hue-saturation-handle":fm,"colorselector/brightness-pane":fm,"colorselector/brightness-handle":fm,"colorpopup":{alias:fu,include:fu,style:function(N){return {padding:5,backgroundColor:eT};
}},"colorpopup/field":{style:function(gG){return {decorator:fl,margin:2,width:14,height:14,backgroundColor:ff};
}},"colorpopup/selector-button":fk,"colorpopup/auto-button":fk,"colorpopup/preview-pane":dQ,"colorpopup/current-preview":{style:function(hH){return {height:20,padding:4,marginLeft:4,decorator:fl,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(t){return {height:20,padding:4,marginRight:4,decorator:fl,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:fk,include:fk,style:function(bz){return {icon:dU};
}},"colorpopup/colorselector-cancelbutton":{alias:fk,include:fk,style:function(gi){return {icon:ed};
}},"table":{alias:fm,style:function(hF){return {decorator:cq};
}},"table-header":{},"table/statusbar":{style:function(g){return {decorator:ev,padding:[0,2]};
}},"table/column-button":{alias:fo,style:function(hm){return {decorator:cy,padding:3,icon:bG};
}},"table-column-reset-button":{include:dJ,alias:dJ,style:function(){return {icon:dz};
}},"table-scroller":fm,"table-scroller/scrollbar-x":fx,"table-scroller/scrollbar-y":fx,"table-scroller/header":{style:function(gg){return {decorator:dk};
}},"table-scroller/pane":{style:function(E){return {backgroundColor:dn};
}},"table-scroller/focus-indicator":{style:function(M){return {decorator:dc};
}},"table-scroller/resize-line":{style:function(gk){return {backgroundColor:fd,width:2};
}},"table-header-cell":{alias:fn,style:function(hg){return {minWidth:13,minHeight:20,padding:hg.hovered?[3,4,2,4]:[3,4],decorator:hg.hovered?cu:cX,sortIcon:hg.sorted?(hg.sortedAscending?ct:bD):undefined};
}},"table-header-cell/label":{style:function(b){return {minWidth:0,alignY:fg,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(fX){return {alignY:fg,alignX:bS};
}},"table-header-cell/icon":{style:function(h){return {minWidth:0,alignY:fg,paddingRight:5};
}},"table-editor-textfield":{include:eO,style:function(bo){return {decorator:undefined,padding:[2,2],backgroundColor:ff};
}},"table-editor-selectbox":{include:cT,alias:cT,style:function(J){return {padding:[0,2],backgroundColor:ff};
}},"table-editor-combobox":{include:bM,alias:bM,style:function(gE){return {decorator:undefined,backgroundColor:ff};
}},"progressive-table-header":{alias:fm,style:function(o){return {decorator:bH};
}},"progressive-table-header-cell":{alias:fn,style:function(bq){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:dt};
}},"app-header":{style:function(gb){return {font:fh,textColor:fj,padding:[8,12],decorator:de};
}},"virtual-list":fs,"virtual-list/row-layer":df,"row-layer":{style:function(H){return {colorEven:eL,colorOdd:ep};
}},"column-layer":fm,"cell":{style:function(l){return {textColor:l.selected?fj:bV,padding:[3,6],font:cP};
}},"cell-string":dO,"cell-number":{include:dO,style:function(gu){return {textAlign:bS};
}},"cell-image":dO,"cell-boolean":{include:dO,style:function(bu){return {iconTrue:cW,iconFalse:ce};
}},"cell-atom":dO,"cell-date":dO,"cell-html":dO,"htmlarea":{"include":fm,style:function(hr){return {backgroundColor:eL};
}}}});
})();
(function(){var d="toolbar-button",c="inspector.theme.Appearance",b="green",a="bold";
qx.Theme.define(c,{extend:qx.theme.modern.Appearance,appearances:{"toolbar-button-bold":{alias:d,include:d,style:function(e){return {textColor:b,font:a};
}}}});
})();
(function(){var a="inspector.theme.Theme";
qx.Theme.define(a,{meta:{color:inspector.theme.Color,decoration:inspector.theme.Decoration,font:inspector.theme.Font,icon:qx.theme.icon.Tango,appearance:inspector.theme.Appearance}});
})();
(function(){var c="CSS1Compat",b="qx.bom.client.Feature";
qx.Class.define(b,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__cd:function(){this.QUIRKS_MODE=this.__ce();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__ce:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==c;
}}},defer:function(a){a.__cd();
}});
})();
(function(){var e="qx.lang.Object";
qx.Class.define(e,{statics:{empty:function(j){{};

for(var k in j){if(j.hasOwnProperty(k)){delete j[k];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(x){{};
return x.__count__===0;
}:
function(c){{};

for(var d in c){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(v,w){{};
return v.__count__>=w;
}:
function(H,I){{};

if(I<=0){return true;
}var length=0;

for(var J in H){if((++length)>=I){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(E){{};
var G=[];
var F=this.getKeys(E);

for(var i=0,l=F.length;i<l;i++){G.push(E[F[i]]);
}return G;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(A,B){{};
return qx.lang.Object.mergeWith(A,B,false);
},merge:function(m,n){{};
var o=arguments.length;

for(var i=1;i<o;i++){qx.lang.Object.mergeWith(m,arguments[i]);
}return m;
},clone:function(s){{};
var t={};

for(var u in s){t[u]=s[u];
}return t;
},invert:function(p){{};
var q={};

for(var r in p){q[p[r].toString()]=r;
}return q;
},getKeyFromValue:function(f,g){{};

for(var h in f){if(f.hasOwnProperty(h)&&f[h]===g){return h;
}}return null;
},contains:function(y,z){{};
return this.getKeyFromValue(y,z)!==null;
},select:function(a,b){{};
return b[a];
},fromArray:function(C){{};
var D={};

for(var i=0,l=C.length;i<l;i++){{};
D[C[i].toString()]=true;
}return D;
}}});
})();
(function(){var m="emulated",k="native",j='"',h="qx.lang.Core",g="\\\\",f="\\\"",e="[object Error]";
qx.Class.define(h,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==e)?m:k,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?k:m,{"native":Array.prototype.indexOf,"emulated":function(x,y){if(y==null){y=0;
}else if(y<0){y=Math.max(0,this.length+y);
}
for(var i=y;i<this.length;i++){if(this[i]===x){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?k:m,{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?k:m,{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?k:m,{"native":Array.prototype.filter,"emulated":function(a,b){var c=[];
var l=this.length;

for(var i=0;i<l;i++){var d=this[i];

if(d!==undefined){if(a.call(b||window,d,i,this)){c.push(this[i]);
}}}return c;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?k:m,{"native":Array.prototype.map,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){s[i]=q.call(r||window,t,i,this);
}}return s;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?k:m,{"native":Array.prototype.some,"emulated":function(z,A){var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){if(z.call(A||window,B,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?k:m,{"native":Array.prototype.every,"emulated":function(u,v){var l=this.length;

for(var i=0;i<l;i++){var w=this[i];

if(w!==undefined){if(!u.call(v||window,w,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?k:m,{"native":String.prototype.quote,"emulated":function(){return j+this.replace(/\\/g,g).replace(/\"/g,f)+j;
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
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(d,e){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!d;
this._cancelable=!!e;
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
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(m){this._type=m;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(b){this._eventPhase=b;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(c){this._target=c;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(l){this._currentTarget=l;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(f){this._relatedTarget=f;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(j){this._originalTarget=j;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(k){this._bubbles=k;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(g){this._cancelable=g;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cf:null,__cg:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__cf=d;
this.__cg=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__cf=this.__cf;
c.__cg=this.__cg;
return c;
},getData:function(){return this.__cf;
},getOldData:function(){return this.__cg;
}},destruct:function(){this.__cf=this.__cg=null;
}});
})();
(function(){var bS="get",bR="",bQ="[",bP="last",bO="change",bN="]",bM=".",bL="Number",bK="String",bJ="set",ci="deepBinding",ch="item",cg="reset",cf="' (",ce="Boolean",cd=").",cc=") to the object '",cb="Integer",ca="qx.data.SingleValueBinding",bY="No event could be found for the property",bW="PositiveNumber",bX="Binding from '",bU="PositiveInteger",bV="Binding does not exist!",bT="Date";
qx.Class.define(ca,{statics:{DEBUG_ON:false,__ch:{},bind:function(cx,cy,cz,cA,cB){var cL=this.__cj(cx,cy,cz,cA,cB);
var cG=cy.split(bM);
var cD=this.__cq(cG);
var cK=[];
var cH=[];
var cI=[];
var cE=[];
var cF=cx;
for(var i=0;i<cG.length;i++){if(cD[i]!==bR){cE.push(bO);
}else{cE.push(this.__cl(cF,cG[i]));
}cK[i]=cF;
if(i==cG.length-1){if(cD[i]!==bR){var cO=cD[i]===bP?cF.length-1:cD[i];
var cC=cF.getItem(cO);
this.__cp(cC,cz,cA,cB,cx);
cI[i]=this.__cr(cF,cE[i],cz,cA,cB,cD[i]);
}else{if(cG[i]!=null&&cF[bS+qx.lang.String.firstUp(cG[i])]!=null){var cC=cF[bS+qx.lang.String.firstUp(cG[i])]();
this.__cp(cC,cz,cA,cB,cx);
}cI[i]=this.__cr(cF,cE[i],cz,cA,cB);
}}else{var cM={index:i,propertyNames:cG,sources:cK,listenerIds:cI,arrayIndexValues:cD,targetObject:cz,targetPropertyChain:cA,options:cB,listeners:cH};
var cJ=qx.lang.Function.bind(this.__ci,this,cM);
cH.push(cJ);
cI[i]=cF.addListener(cE[i],cJ);
}if(cF[bS+qx.lang.String.firstUp(cG[i])]==null){cF=null;
}else if(cD[i]!==bR){cF=cF[bS+qx.lang.String.firstUp(cG[i])](cD[i]);
}else{cF=cF[bS+qx.lang.String.firstUp(cG[i])]();
}
if(!cF){break;
}}var cN={type:ci,listenerIds:cI,sources:cK,targetListenerIds:cL.listenerIds,targets:cL.targets};
this.__cs(cN,cx,cy,cz,cA);
return cN;
},__ci:function(L){if(L.options&&L.options.onUpdate){L.options.onUpdate(L.sources[L.index],L.targetObject);
}for(var j=L.index+1;j<L.propertyNames.length;j++){var P=L.sources[j];
L.sources[j]=null;

if(!P){continue;
}P.removeListenerById(L.listenerIds[j]);
}var P=L.sources[L.index];
for(var j=L.index+1;j<L.propertyNames.length;j++){if(L.arrayIndexValues[j-1]!==bR){P=P[bS+qx.lang.String.firstUp(L.propertyNames[j-1])](L.arrayIndexValues[j-1]);
}else{P=P[bS+qx.lang.String.firstUp(L.propertyNames[j-1])]();
}L.sources[j]=P;
if(!P){this.__cm(L.targetObject,L.targetPropertyChain);
break;
}if(j==L.propertyNames.length-1){if(qx.Class.implementsInterface(P,qx.data.IListData)){var Q=L.arrayIndexValues[j]===bP?P.length-1:L.arrayIndexValues[j];
var N=P.getItem(Q);
this.__cp(N,L.targetObject,L.targetPropertyChain,L.options,L.sources[L.index]);
L.listenerIds[j]=this.__cr(P,bO,L.targetObject,L.targetPropertyChain,L.options,L.arrayIndexValues[j]);
}else{if(L.propertyNames[j]!=null&&P[bS+qx.lang.String.firstUp(L.propertyNames[j])]!=null){var N=P[bS+qx.lang.String.firstUp(L.propertyNames[j])]();
this.__cp(N,L.targetObject,L.targetPropertyChain,L.options,L.sources[L.index]);
}var O=this.__cl(P,L.propertyNames[j]);
L.listenerIds[j]=this.__cr(P,O,L.targetObject,L.targetPropertyChain,L.options);
}}else{if(L.listeners[j]==null){var M=qx.lang.Function.bind(this.__ci,this,L);
L.listeners.push(M);
}if(qx.Class.implementsInterface(P,qx.data.IListData)){var O=bO;
}else{var O=this.__cl(P,L.propertyNames[j]);
}L.listenerIds[j]=P.addListener(O,L.listeners[j]);
}}},__cj:function(r,s,t,u,v){var z=u.split(bM);
var x=this.__cq(z);
var E=[];
var D=[];
var B=[];
var A=[];
var y=t;
for(var i=0;i<z.length-1;i++){if(x[i]!==bR){A.push(bO);
}else{try{A.push(this.__cl(y,z[i]));
}catch(e){break;
}}E[i]=y;
var C=function(){for(var j=i+1;j<z.length-1;j++){var dc=E[j];
E[j]=null;

if(!dc){continue;
}dc.removeListenerById(B[j]);
}var dc=E[i];
for(var j=i+1;j<z.length-1;j++){var da=qx.lang.String.firstUp(z[j-1]);
if(x[j-1]!==bR){var dd=x[j-1]===bP?dc.getLength()-1:x[j-1];
dc=dc[bS+da](dd);
}else{dc=dc[bS+da]();
}E[j]=dc;
if(D[j]==null){D.push(C);
}if(qx.Class.implementsInterface(dc,qx.data.IListData)){var db=bO;
}else{try{var db=qx.data.SingleValueBinding.__cl(dc,z[j]);
}catch(e){break;
}}B[j]=dc.addListener(db,D[j]);
}qx.data.SingleValueBinding.__ck(r,s,t,u);
};
D.push(C);
B[i]=y.addListener(A[i],C);
var w=qx.lang.String.firstUp(z[i]);
if(y[bS+w]==null){y=null;
}else if(x[i]!==bR){y=y[bS+w](x[i]);
}else{y=y[bS+w]();
}
if(!y){break;
}}return {listenerIds:B,targets:E};
},__ck:function(be,bf,bg,bh){var bl=this.__co(be,bf);

if(bl!=null){var bn=bf.substring(bf.lastIndexOf(bM)+1,bf.length);
if(bn.charAt(bn.length-1)==bN){var bi=bn.substring(bn.lastIndexOf(bQ)+1,bn.length-1);
var bk=bn.substring(0,bn.lastIndexOf(bQ));
var bm=bl[bS+qx.lang.String.firstUp(bk)]();

if(bi==bP){bi=bm.length-1;
}
if(bm!=null){var bj=bm.getItem(bi);
}}else{var bj=bl[bS+qx.lang.String.firstUp(bn)]();
}}this.__cn(bg,bh,bj);
},__cl:function(F,G){var H=this.__cu(F,G);
if(H==null){if(qx.Class.supportsEvent(F.constructor,G)){H=G;
}else if(qx.Class.supportsEvent(F.constructor,bO+qx.lang.String.firstUp(G))){H=bO+qx.lang.String.firstUp(G);
}else{throw new qx.core.AssertionError(bY,G);
}}return H;
},__cm:function(cP,cQ){var cR=this.__co(cP,cQ);

if(cR!=null){var cS=cQ.substring(cQ.lastIndexOf(bM)+1,cQ.length);
if(cS.charAt(cS.length-1)==bN){this.__cn(cP,cQ,null);
return;
}if(cR[cg+qx.lang.String.firstUp(cS)]!=undefined){cR[cg+qx.lang.String.firstUp(cS)]();
}else{cR[bJ+qx.lang.String.firstUp(cS)](null);
}}},__cn:function(bo,bp,bq){var bu=this.__co(bo,bp);

if(bu!=null){var bv=bp.substring(bp.lastIndexOf(bM)+1,bp.length);
if(bv.charAt(bv.length-1)==bN){var br=bv.substring(bv.lastIndexOf(bQ)+1,bv.length-1);
var bt=bv.substring(0,bv.lastIndexOf(bQ));
var bs=bu[bS+qx.lang.String.firstUp(bt)]();

if(br==bP){br=bs.length-1;
}
if(bs!=null){bs.setItem(br,bq);
}}else{bu[bJ+qx.lang.String.firstUp(bv)](bq);
}}},__co:function(cT,cU){var cX=cU.split(bM);
var cY=cT;
for(var i=0;i<cX.length-1;i++){try{var cW=cX[i];
if(cW.indexOf(bN)==cW.length-1){var cV=cW.substring(cW.indexOf(bQ)+1,cW.length-1);
cW=cW.substring(0,cW.indexOf(bQ));
}cY=cY[bS+qx.lang.String.firstUp(cW)]();

if(cV!=null){if(cV==bP){cV=cY.length-1;
}cY=cY.getItem(cV);
cV=null;
}}catch(cu){return null;
}}return cY;
},__cp:function(g,h,k,l,m){g=this.__ct(g,h,k,l);
if(g==null){this.__cm(h,k);
}if(g!=undefined){try{this.__cn(h,k,g);
if(l&&l.onUpdate){l.onUpdate(m,h,g);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(l&&l.onSetFail){l.onSetFail(e);
}else{this.warn("Failed so set value "+g+" on "+h+". Error message: "+e);
}}}},__cq:function(R){var S=[];
for(var i=0;i<R.length;i++){var name=R[i];
if(qx.lang.String.endsWith(name,bN)){var T=name.substring(name.indexOf(bQ)+1,name.indexOf(bN));
if(name.indexOf(bN)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(T!==bP){if(T==bR||isNaN(parseInt(T))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bQ)!=0){R[i]=name.substring(0,name.indexOf(bQ));
S[i]=bR;
S[i+1]=T;
R.splice(i+1,0,ch);
i++;
}else{S[i]=T;
R.splice(i,1,ch);
}}else{S[i]=bR;
}}return S;
},__cr:function(U,V,W,X,Y,ba){var bb;
{};
var bd=function(n,e){if(n!==bR){if(n===bP){n=U.length-1;
}var q=U.getItem(n);
if(q==undefined){qx.data.SingleValueBinding.__cm(W,X);
}var o=e.getData().start;
var p=e.getData().end;

if(n<o||n>p){return;
}}else{var q=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+U+" by "+V+" to "+W+" ("+X+")");
qx.log.Logger.debug("Data before conversion: "+q);
}q=qx.data.SingleValueBinding.__ct(q,W,X,Y);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+q);
}try{if(q!=undefined){qx.data.SingleValueBinding.__cn(W,X,q);
}else{qx.data.SingleValueBinding.__cm(W,X);
}if(Y&&Y.onUpdate){Y.onUpdate(U,W,q);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(Y&&Y.onSetFail){Y.onSetFail(e);
}else{this.warn("Failed so set value "+q+" on "+W+". Error message: "+e);
}}};
if(!ba){ba=bR;
}bd=qx.lang.Function.bind(bd,U,ba);
var bc=U.addListener(V,bd);
return bc;
},__cs:function(ck,cl,cm,cn,co){if(this.__ch[cl.toHashCode()]===undefined){this.__ch[cl.toHashCode()]=[];
}this.__ch[cl.toHashCode()].push([ck,cl,cm,cn,co]);
},__ct:function(bw,bx,by,bz){if(bz&&bz.converter){var bB;

if(bx.getModel){bB=bx.getModel();
}return bz.converter(bw,bB);
}else{var bD=this.__co(bx,by);
var bE=by.substring(by.lastIndexOf(bM)+1,by.length);
if(bD==null){return bw;
}var bC=qx.Class.getPropertyDefinition(bD.constructor,bE);
var bA=bC==null?bR:bC.check;
return this.__cv(bw,bA);
}},__cu:function(cp,cq){var cr=qx.Class.getPropertyDefinition(cp.constructor,cq);

if(cr==null){return null;
}return cr.event;
},__cv:function(c,d){var f=qx.lang.Type.getClass(c);
if((f==bL||f==bK)&&(d==cb||d==bU)){c=parseInt(c);
}if((f==ce||f==bL||f==bT)&&d==bK){c=c+bR;
}if((f==bL||f==bK)&&(d==bL||d==bW)){c=parseFloat(c);
}return c;
},removeBindingFromObject:function(I,J){if(J.type==ci){for(var i=0;i<J.sources.length;i++){if(J.sources[i]){J.sources[i].removeListenerById(J.listenerIds[i]);
}}for(var i=0;i<J.targets.length;i++){if(J.targets[i]){J.targets[i].removeListenerById(J.targetListenerIds[i]);
}}}else{I.removeListenerById(J);
}var K=this.__ch[I.toHashCode()];
if(K!=undefined){for(var i=0;i<K.length;i++){if(K[i][0]==J){qx.lang.Array.remove(K,K[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cs){{};
var ct=this.__ch[cs.toHashCode()];

if(ct!=undefined){for(var i=ct.length-1;i>=0;i--){this.removeBindingFromObject(cs,ct[i][0]);
}}},getAllBindingsForObject:function(cj){if(this.__ch[cj.toHashCode()]===undefined){this.__ch[cj.toHashCode()]=[];
}return this.__ch[cj.toHashCode()];
},removeAllBindings:function(){for(var cw in this.__ch){var cv=qx.core.ObjectRegistry.fromHashCode(cw);
if(cv==null){delete this.__ch[cw];
continue;
}this.removeAllBindingsForObject(cv);
}this.__ch={};
},getAllBindings:function(){return this.__ch;
},showBindingInLog:function(bF,bG){var bI;
for(var i=0;i<this.__ch[bF.toHashCode()].length;i++){if(this.__ch[bF.toHashCode()][i][0]==bG){bI=this.__ch[bF.toHashCode()][i];
break;
}}
if(bI===undefined){var bH=bV;
}else{var bH=bX+bI[1]+cf+bI[2]+cc+bI[3]+cf+bI[4]+cd;
}qx.log.Logger.debug(bH);
},showAllBindingsInLog:function(){for(var b in this.__ch){var a=qx.core.ObjectRegistry.fromHashCode(b);

for(var i=0;i<this.__ch[b].length;i++){this.showBindingInLog(a,this.__ch[b][i][0]);
}}}}});
})();
(function(){var s="",r="g",q="0",p='\\$1',o="%",n='-',m="qx.lang.String",l=' ',k='\n',j="undefined";
qx.Class.define(m,{statics:{camelCase:function(z){return z.replace(/\-([a-z])/g,function(A,B){return B.toUpperCase();
});
},hyphenate:function(e){return e.replace(/[A-Z]/g,function(E){return (n+E.charAt(0).toLowerCase());
});
},capitalize:function(L){return L.replace(/\b[a-z]/g,function(v){return v.toUpperCase();
});
},clean:function(M){return this.trim(M.replace(/\s+/g,l));
},trimLeft:function(Q){return Q.replace(/^\s+/,s);
},trimRight:function(h){return h.replace(/\s+$/,s);
},trim:function(y){return y.replace(/^\s+|\s+$/g,s);
},startsWith:function(t,u){return t.indexOf(u)===0;
},endsWith:function(C,D){return C.substring(C.length-D.length,C.length)===D;
},repeat:function(f,g){return f.length>=0?new Array(g+1).join(f):s;
},pad:function(G,length,H){var I=length-G.length;

if(I>0){if(typeof H===j){H=q;
}return this.repeat(H,I)+G;
}else{return G;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(w,x){return w.indexOf(x)!=-1;
},format:function(N,O){var P=N;

for(var i=0;i<O.length;i++){P=P.replace(new RegExp(o+(i+1),r),O[i]);
}return P;
},escapeRegexpChars:function(J){return J.replace(/([.*+?^${}()|[\]\/\\])/g,p);
},toArray:function(K){return K.split(/\B|\b/g);
},stripTags:function(F){return F.replace(/<\/?[^>]+>/gi,s);
},stripScripts:function(a,b){var d=s;
var c=a.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){d+=arguments[1]+k;
return s;
});

if(b===true){qx.lang.Function.globalEval(d);
}return c;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.event.type.Event",b="qx.data.IListData";
qx.Interface.define(b,{events:{"change":d,"changeLength":c},members:{getItem:function(a){},setItem:function(f,g){},splice:function(h,i,j){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var h="qx.globalErrorHandling",g="on",f="qx.event.GlobalError";
qx.Class.define(f,{statics:{setErrorHandler:function(a,b){this.__cw=a||null;
this.__cx=b||window;

if(qx.core.Setting.get(h)===g){if(a&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__cy,this);
}
if(!a&&window.onerror){window.onerror=null;
}}},__cy:function(c,d,e){if(this.__cw){this.handleError(new qx.core.WindowError(c,d,e));
return true;
}},observeMethod:function(l){if(qx.core.Setting.get(h)===g){var self=this;
return function(){if(!self.__cw){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(k){self.handleError(new qx.core.GlobalError(k,arguments));
}};
}else{return l;
}},handleError:function(i){if(this.__cw){this.__cw.call(this.__cx,i);
}}},defer:function(j){qx.core.Setting.define(h,g);
j.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cz=c;
this.__cA=d||b;
this.__cB=e===undefined?-1:e;
},members:{__cz:null,__cA:null,__cB:null,toString:function(){return this.__cz;
},getUri:function(){return this.__cA;
},getLineNumber:function(){return this.__cB;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__cC=b+(c&&c.message?c.message:c);
Error.call(this,this.__cC);
this.__cD=d;
this.__cE=c;
},members:{__cE:null,__cD:null,__cC:null,toString:function(){return this.__cC;
},getArguments:function(){return this.__cD;
},getSourceException:function(){return this.__cE;
}},destruct:function(){this.__cE=null;
this.__cD=null;
this.__cC=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cF=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cF:null,message:null,getComment:function(){return this.__cF;
},toString:function(){return this.__cF+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cG=qx.dev.StackTrace.getStackTrace();
},members:{__cG:null,getStackTrace:function(){return this.__cG;
}}});
})();
(function(){var A=":",z="qx.client",y="anonymous",x="...",w="qx.dev.StackTrace",v="",u="\n",t="/source/class/",s=".";
qx.Class.define(w,{statics:{getStackTrace:qx.core.Variant.select(z,{"gecko":function(){try{throw new Error();
}catch(B){var m=this.getStackTraceFromError(B);
qx.lang.Array.removeAt(m,0);
var k=this.getStackTraceFromCaller(arguments);
var h=k.length>m.length?k:m;

for(var i=0;i<Math.min(k.length,m.length);i++){var j=k[i];

if(j.indexOf(y)>=0){continue;
}var q=j.split(A);

if(q.length!=2){continue;
}var o=q[0];
var g=q[1];
var f=m[i];
var r=f.split(A);
var n=r[0];
var e=r[1];

if(qx.Class.getByName(n)){var l=n;
}else{l=o;
}var p=l+A;

if(g){p+=g+A;
}p+=e;
h[i]=p;
}return h;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var c;

try{c.bar();
}catch(bc){var d=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(d,0);
return d;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(z,{"opera":function(b){return [];
},"default":function(J){var O=[];
var N=qx.lang.Function.getCaller(J);
var K={};

while(N){var L=qx.lang.Function.getName(N);
O.push(L);

try{N=N.caller;
}catch(bb){break;
}
if(!N){break;
}var M=qx.core.ObjectRegistry.toHashCode(N);

if(K[M]){O.push(x);
break;
}K[M]=N;
}return O;
}}),getStackTraceFromError:qx.core.Variant.select(z,{"gecko":function(P){if(!P.stack){return [];
}var V=/@(.+):(\d+)$/gm;
var Q;
var R=[];

while((Q=V.exec(P.stack))!=null){var S=Q[1];
var U=Q[2];
var T=this.__cH(S);
R.push(T+A+U);
}return R;
},"webkit":function(a){if(a.sourceURL&&a.line){return [this.__cH(a.sourceURL)+A+a.line];
}else{return [];
}},"opera":function(C){if(C.message.indexOf("Backtrace:")<0){return [];
}var E=[];
var F=qx.lang.String.trim(C.message.split("Backtrace:")[1]);
var G=F.split(u);

for(var i=0;i<G.length;i++){var D=G[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(D&&D.length>=2){var I=D[1];
var H=this.__cH(D[2]);
E.push(H+A+I);
}}return E;
},"default":function(){return [];
}}),__cH:function(W){var ba=t;
var X=W.indexOf(ba);
var Y=(X==-1)?W:W.substring(X+ba.length).replace(/\//g,s).replace(/\.js$/,v);
return Y;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(g){return (g!==null&&(this.getClass(g)==a||g instanceof Boolean));
},isDate:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==e||j instanceof Error));
}}});
})();
(function(){var c="qx.event.IEventHandler";
qx.Interface.define(c,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var e="qx.util.ObjectPool",d="Integer";
qx.Class.define(e,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
this.__cI={};

if(n!=null){this.setSize(n);
}},properties:{size:{check:d,init:Infinity}},members:{__cI:null,getObject:function(j){if(this.$$disposed){return;
}
if(!j){throw new Error("Class needs to be defined!");
}var k=null;
var m=this.__cI[j.classname];

if(m){k=m.pop();
}
if(k){k.$$pooled=false;
}else{k=new j;
}return k;
},poolObject:function(a){if(!this.__cI){return;
}var b=a.classname;
var c=this.__cI[b];

if(a.$$pooled){throw new Error("Object is already pooled: "+a);
}
if(!c){this.__cI[b]=c=[];
}if(c.length>this.getSize()){if(a.destroy){a.destroy();
}else{a.dispose();
}return;
}a.$$pooled=true;
c.push(a);
}},destruct:function(){var h=this.__cI;
var f,g,i,l;

for(f in h){g=h[f];

for(i=0,l=g.length;i<l;i++){g[i].dispose();
}}delete this.__cI;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var g="qx.util.DisposeUtil";
qx.Class.define(g,{statics:{disposeFields:function(s,t){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=t.length;i<l;i++){var name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}s[name]=null;
}},disposeObjects:function(e,f){var name;

for(var i=0,l=f.length;i<l;i++){name=f[i];

if(e[name]==null||!e.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(e[name].dispose){e[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}e[name]=null;
}},disposeArray:function(h,j){var m=h[j];

if(!m){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{var k;

for(var i=m.length-1;i>=0;i--){k=m[i];

if(k){k.dispose();
}}}catch(n){throw new Error("The array field: "+j+" of object: "+h+" has non disposable entries: "+n);
}m.length=0;
h[j]=null;
},disposeMap:function(o,p){var q=o[p];

if(!q){return;
}if(qx.core.ObjectRegistry.inShutDown){o[p]=null;
return;
}try{for(var r in q){if(q.hasOwnProperty(r)){q[r].dispose();
}}}catch(a){throw new Error("The map field: "+p+" of object: "+o+" has non disposable entries: "+a);
}o[p]=null;
},disposeTriggeredBy:function(b,c){var d=c.dispose;
c.dispose=function(){d.call(c);
b.dispose();
};
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var g="qx.event.dispatch.Direct";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(j){this._manager=j;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(a,event,b){var e,c;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(a,b,false);

if(f){for(var i=0,l=f.length;i<l;i++){var d=f[i].context||a;
f[i].handler.call(d,event);
}}}},defer:function(h){qx.event.Registration.addDispatcher(h);
}});
})();
(function(){var e="qx.event.handler.Object";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){return qx.Class.supportsEvent(f.constructor,g);
},registerEvent:function(a,b,c){},unregisterEvent:function(h,i,j){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__cJ:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cK:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cL:function(){var L=qx.lang.Generics.__cJ;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__cK(N,O);
}}}}},defer:function(Q){Q.__cL();
}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(c){return !!this._dynamic[c];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(d){this._dynamic=d;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var k="/",j="0",i="qx/static",h="http://",g="https://",f="file://",e="qx.util.AliasManager",d="singleton",c=".",b="static";
qx.Class.define(e,{type:d,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cM={};
this.add(b,i);
},members:{__cM:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===k||r.charAt(0)===c||r.indexOf(h)===0||r.indexOf(g)===j||r.indexOf(f)===0){u[r]=false;
return r;
}
if(this.__cM[r]){return this.__cM[r];
}var t=r.substring(0,r.indexOf(k));
var s=this.__cM[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(n,o){this.__cM[n]=o;
var q=this._getDynamic();
for(var p in q){if(p.substring(0,p.indexOf(k))===n){q[p]=o+p.substring(n.length);
}}},remove:function(a){delete this.__cM[a];
},resolve:function(l){var m=this._getDynamic();

if(l!==null){l=this._preprocess(l);
}return m[l]||l;
}},destruct:function(){this.__cM=null;
}});
})();
(function(){var C="px",B="qx.client",A="div",z="img",y="",x="no-repeat",w="scale-x",v="mshtml",u="scale",t="scale-y",X="qx/icon",W="repeat",V=".png",U="crop",T="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",S='<div style="',R="repeat-y",Q='<img src="',P="qx.bom.element.Decoration",O="', sizingMethod='",J="png",K="')",H='"></div>',I='"/>',F='" style="',G="none",D="webkit",E=" ",L="repeat-x",M="DXImageTransform.Microsoft.AlphaImageLoader",N="absolute";
qx.Class.define(P,{statics:{DEBUG:false,__cN:{},__cO:qx.core.Variant.isSet(B,v),__cP:qx.core.Variant.select(B,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__cQ:{"scale-x":z,"scale-y":z,"scale":z,"repeat":A,"no-repeat":A,"repeat-x":A,"repeat-y":A},update:function(bi,bj,bk,bl){var bn=this.getTagName(bk,bj);

if(bn!=bi.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bo=this.getAttributes(bj,bk,bl);

if(bn===z){bi.src=bo.src;
}if(bi.style.backgroundPosition!=y&&bo.style.backgroundPosition===undefined){bo.style.backgroundPosition=null;
}if(bi.style.clip!=y&&bo.style.clip===undefined){bo.style.clip=null;
}var bm=qx.bom.element.Style;
bm.setStyles(bi,bo.style);
if(this.__cO){try{bi.filters[M].apply();
}catch(e){}}},create:function(Y,ba,bb){var bc=this.getTagName(ba,Y);
var be=this.getAttributes(Y,ba,bb);
var bd=qx.bom.element.Style.compile(be.style);

if(bc===z){return Q+be.src+F+bd+I;
}else{return S+bd+H;
}},getTagName:function(bf,bh){if(qx.core.Variant.isSet(B,v)){if(bh&&this.__cO&&this.__cP[bf]&&qx.lang.String.endsWith(bh,V)){return A;
}}return this.__cQ[bf];
},getAttributes:function(bJ,bK,bL){if(!bL){bL={};
}
if(!bL.position){bL.position=N;
}
if(qx.core.Variant.isSet(B,v)){bL.fontSize=0;
bL.lineHeight=0;
}else if(qx.core.Variant.isSet(B,D)){bL.WebkitUserDrag=G;
}var bN=qx.util.ResourceManager.getInstance().getImageFormat(bJ)||qx.io.ImageLoader.getFormat(bJ);
{};
var bM;
if(this.__cO&&this.__cP[bK]&&bN===J){bM=this.__cT(bL,bK,bJ);
}else{if(bK===u){bM=this.__cU(bL,bK,bJ);
}else if(bK===w||bK===t){bM=this.__cV(bL,bK,bJ);
}else{bM=this.__cY(bL,bK,bJ);
}}return bM;
},__cR:function(bW,bX,bY){if(bW.width==null&&bX!=null){bW.width=bX+C;
}
if(bW.height==null&&bY!=null){bW.height=bY+C;
}return bW;
},__cS:function(bu){var bv=qx.util.ResourceManager.getInstance().getImageWidth(bu)||qx.io.ImageLoader.getWidth(bu);
var bw=qx.util.ResourceManager.getInstance().getImageHeight(bu)||qx.io.ImageLoader.getHeight(bu);
return {width:bv,height:bw};
},__cT:function(b,c,d){var h=this.__cS(d);
b=this.__cR(b,h.width,h.height);
var g=c==x?U:u;
var f=T+qx.util.ResourceManager.getInstance().toUri(d)+O+g+K;
b.filter=f;
b.backgroundImage=b.backgroundRepeat=y;
return {style:b};
},__cU:function(bp,bq,br){var bs=qx.util.ResourceManager.getInstance().toUri(br);
var bt=this.__cS(br);
bp=this.__cR(bp,bt.width,bt.height);
return {src:bs,style:bp};
},__cV:function(bO,bP,bQ){var bU=qx.util.ResourceManager.getInstance();
var bT=bU.isClippedImage(bQ);
var bV=this.__cS(bQ);

if(bT){var bS=bU.getData(bQ);
var bR=bU.toUri(bS[4]);

if(bP===w){bO=this.__cW(bO,bS,bV.height);
}else{bO=this.__cX(bO,bS,bV.width);
}return {src:bR,style:bO};
}else{{};

if(bP==w){bO.height=bV.height==null?null:bV.height+C;
}else if(bP==t){bO.width=bV.width==null?null:bV.width+C;
}var bR=bU.toUri(bQ);
return {src:bR,style:bO};
}},__cW:function(i,j,k){var l=qx.util.ResourceManager.getInstance().getImageHeight(j[4]);
i.clip={top:-j[6],height:k};
i.height=l+C;
if(i.top!=null){i.top=(parseInt(i.top,10)+j[6])+C;
}else if(i.bottom!=null){i.bottom=(parseInt(i.bottom,10)+k-l-j[6])+C;
}return i;
},__cX:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageWidth(bG[4]);
bF.clip={left:-bG[5],width:bH};
bF.width=bI+C;
if(bF.left!=null){bF.left=(parseInt(bF.left,10)+bG[5])+C;
}else if(bF.right!=null){bF.right=(parseInt(bF.right,10)+bH-bI-bG[5])+C;
}return bF;
},__cY:function(bx,by,bz){var bE=qx.util.ResourceManager.getInstance().isClippedImage(bz);
var bD=this.__cS(bz);
if(bE&&by!==W){var bC=qx.util.ResourceManager.getInstance().getData(bz);
var bB=qx.bom.element.Background.getStyles(bC[4],by,bC[5],bC[6]);

for(var bA in bB){bx[bA]=bB[bA];
}
if(bD.width!=null&&bx.width==null&&(by==R||by===x)){bx.width=bD.width+C;
}
if(bD.height!=null&&bx.height==null&&(by==L||by===x)){bx.height=bD.height+C;
}return {style:bx};
}else{{};
bx=this.__cR(bx,bD.width,bD.height);
bx=this.__da(bx,bz,by);
return {style:bx};
}},__da:function(m,n,o){var top=null;
var s=null;

if(m.backgroundPosition){var p=m.backgroundPosition.split(E);
s=parseInt(p[0]);

if(isNaN(s)){s=p[0];
}top=parseInt(p[1]);

if(isNaN(top)){top=p[1];
}}var r=qx.bom.element.Background.getStyles(n,o,s,top);

for(var q in r){m[q]=r[q];
}if(m.filter){m.filter=y;
}return m;
},__db:function(a){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(a)&&a.indexOf(X)==-1){if(!this.__cN[a]){qx.log.Logger.debug("Potential clipped image candidate: "+a);
this.__cN[a]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(B,{"mshtml":function(){return qx.bom.element.Decoration.__cO;
},"default":function(){return false;
}})}});
})();
(function(){var w="auto",v="px",u=",",t="clip:auto;",s="rect(",r=");",q="",p=")",o="qx.bom.element.Clip",n="string",k="rect(auto)",m="clip:rect(",l="clip",j="rect(auto,auto,auto,auto)";
qx.Class.define(o,{statics:{compile:function(y){if(!y){return t;
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
}return m+top+u+z+u+A+u+D+r;
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
},set:function(E,F){if(!F){E.style.clip=j;
return;
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
}E.style.clip=s+top+u+G+u+H+u+K+p;
},reset:function(x){x.style.clip=qx.bom.client.Engine.MSHTML?k:w;
}}});
})();
(function(){var m="n-resize",l="e-resize",k="nw-resize",j="ne-resize",i="",h="cursor:",g="qx.client",f=";",e="qx.bom.element.Cursor",d="cursor",c="hand";
qx.Class.define(e,{statics:{__dc:qx.core.Variant.select(g,{"mshtml":{"cursor":c,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"opera":{"col-resize":l,"row-resize":m,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"default":{}}),compile:function(o){return h+(this.__dc[o]||o)+f;
},get:function(p,q){return qx.bom.element.Style.get(p,d,q,false);
},set:function(a,b){a.style.cursor=this.__dc[b]||b;
},reset:function(n){n.style.cursor=i;
}}});
})();
(function(){var q="",p="qx.client",o=";",n="filter",m="opacity:",l="opacity",k="MozOpacity",j=");",i=")",h="zoom:1;filter:alpha(opacity=",e="qx.bom.element.Opacity",g="alpha(opacity=",f="-moz-opacity:";
qx.Class.define(e,{statics:{compile:qx.core.Variant.select(p,{"mshtml":function(C){if(C>=1){return q;
}
if(C<0.00001){C=0;
}return h+(C*100)+j;
},"gecko":function(d){if(d==1){d=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return f+d+o;
}else{return m+d+o;
}},"default":function(u){if(u==1){return q;
}return m+u+o;
}}),set:qx.core.Variant.select(p,{"mshtml":function(z,A){var B=qx.bom.element.Style.get(z,n,qx.bom.element.Style.COMPUTED_MODE,false);
if(A>=1){z.style.filter=B.replace(/alpha\([^\)]*\)/gi,q);
return;
}
if(A<0.00001){A=0;
}if(!z.currentStyle||!z.currentStyle.hasLayout){z.style.zoom=1;
}z.style.filter=B.replace(/alpha\([^\)]*\)/gi,q)+g+A*100+i;
},"gecko":function(E,F){if(F==1){F=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=F;
}else{E.style.opacity=F;
}},"default":function(r,s){if(s==1){s=q;
}r.style.opacity=s;
}}),reset:qx.core.Variant.select(p,{"mshtml":function(G){var H=qx.bom.element.Style.get(G,n,qx.bom.element.Style.COMPUTED_MODE,false);
G.style.filter=H.replace(/alpha\([^\)]*\)/gi,q);
},"gecko":function(D){if(qx.bom.client.Engine.VERSION<1.7){D.style.MozOpacity=q;
}else{D.style.opacity=q;
}},"default":function(t){t.style.opacity=q;
}}),get:qx.core.Variant.select(p,{"mshtml":function(v,w){var x=qx.bom.element.Style.get(v,n,w,false);

if(x){var y=x.match(/alpha\(opacity=(.*)\)/);

if(y&&y[1]){return parseFloat(y[1])/100;
}}return 1.0;
},"gecko":function(a,b){var c=qx.bom.element.Style.get(a,qx.bom.client.Engine.VERSION<1.7?k:l,b,false);

if(c==0.999999){c=1.0;
}
if(c!=null){return parseFloat(c);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,l,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})}});
})();
(function(){var x="qx.client",w="",v="boxSizing",u="box-sizing",t=":",s="border-box",r="qx.bom.element.BoxSizing",q="KhtmlBoxSizing",p="-moz-box-sizing",o="WebkitBoxSizing",k=";",n="-khtml-box-sizing",m="content-box",j="-webkit-box-sizing",h="MozBoxSizing";
qx.Class.define(r,{statics:{__dd:qx.core.Variant.select(x,{"mshtml":null,"webkit":[v,q,o],"gecko":[h],"opera":[v]}),__de:qx.core.Variant.select(x,{"mshtml":null,"webkit":[u,n,j],"gecko":[p],"opera":[u]}),__df:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dg:function(e){var f=this.__df;
return f.tags[e.tagName.toLowerCase()]||f.types[e.type];
},compile:qx.core.Variant.select(x,{"mshtml":function(a){{};
},"default":function(D){var F=this.__de;
var E=w;

if(F){for(var i=0,l=F.length;i<l;i++){E+=F[i]+t+D+k;
}}return E;
}}),get:qx.core.Variant.select(x,{"mshtml":function(G){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(G))){if(!this.__dg(G)){return m;
}}return s;
},"default":function(y){var A=this.__dd;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==w){return z;
}}}return w;
}}),set:qx.core.Variant.select(x,{"mshtml":function(B,C){{};
},"default":function(b,c){var d=this.__dd;

if(d){for(var i=0,l=d.length;i<l;i++){b.style[d[i]]=c;
}}}}),reset:function(g){this.set(g,w);
}}});
})();
(function(){var bq="",bp="qx.client",bo="hidden",bn="-moz-scrollbars-none",bm="overflow",bl=";",bk="overflowY",bj=":",bi="overflowX",bh="overflow:",bC="none",bB="scroll",bA="borderLeftStyle",bz="borderRightStyle",by="div",bx="borderRightWidth",bw="overflow-y",bv="borderLeftWidth",bu="-moz-scrollbars-vertical",bt="100px",br="qx.bom.element.Overflow",bs="overflow-x";
qx.Class.define(br,{statics:{__dh:null,getScrollbarWidth:function(){if(this.__dh!==null){return this.__dh;
}var bG=qx.bom.element.Style;
var bI=function(X,Y){return parseInt(bG.get(X,Y))||0;
};
var bJ=function(C){return (bG.get(C,bz)==bC?0:bI(C,bx));
};
var bH=function(bF){return (bG.get(bF,bA)==bC?0:bI(bF,bv));
};
var bL=qx.core.Variant.select(bp,{"mshtml":function(N){if(bG.get(N,bk)==bo||N.clientWidth==0){return bJ(N);
}return Math.max(0,N.offsetWidth-N.clientLeft-N.clientWidth);
},"default":function(bS){if(bS.clientWidth==0){var bT=bG.get(bS,bm);
var bU=(bT==bB||bT==bu?16:0);
return Math.max(0,bJ(bS)+bU);
}return Math.max(0,(bS.offsetWidth-bS.clientWidth-bH(bS)));
}});
var bK=function(o){return bL(o)-bJ(o);
};
var t=document.createElement(by);
var s=t.style;
s.height=s.width=bt;
s.overflow=bB;
document.body.appendChild(t);
var c=bK(t);
this.__dh=c?c:16;
document.body.removeChild(t);
return this.__dh;
},_compile:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(V,W){if(W==bo){W=bn;
}return bh+W+bl;
}:
function(H,I){return H+bj+I+bl;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){return bh+bd+bl;
}:
function(f,g){return f+bj+g+bl;
},"default":function(A,B){return A+bj+B+bl;
}}),compileX:function(ca){return this._compile(bs,ca);
},compileY:function(e){return this._compile(bw,e);
},getX:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(l,m){var n=qx.bom.element.Style.get(l,bm,m,false);

if(n===bn){n=bo;
}return n;
}:
function(cc,cd){return qx.bom.element.Style.get(cc,bi,cd,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bM,bN){return qx.bom.element.Style.get(bM,bm,bN,false);
}:
function(J,K){return qx.bom.element.Style.get(J,bi,K,false);
},"default":function(T,U){return qx.bom.element.Style.get(T,bi,U,false);
}}),setX:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(p,q){if(q==bo){q=bn;
}p.style.overflow=q;
}:
function(h,i){h.style.overflowX=i;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bD,bE){bD.style.overflow=bE;
}:
function(j,k){j.style.overflowX=k;
},"default":function(ba,bb){ba.style.overflowX=bb;
}}),resetX:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(w){w.style.overflow=bq;
}:
function(bg){bg.style.overflowX=bq;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(R,S){R.style.overflow=bq;
}:
function(D,E){D.style.overflowX=bq;
},"default":function(z){z.style.overflowX=bq;
}}),getY:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(a,b){var d=qx.bom.element.Style.get(a,bm,b,false);

if(d===bn){d=bo;
}return d;
}:
function(be,bf){return qx.bom.element.Style.get(be,bk,bf,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bV,bW){return qx.bom.element.Style.get(bV,bm,bW,false);
}:
function(ce,cf){return qx.bom.element.Style.get(ce,bk,cf,false);
},"default":function(bQ,bR){return qx.bom.element.Style.get(bQ,bk,bR,false);
}}),setY:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bO,bP){if(bP===bo){bP=bn;
}bO.style.overflow=bP;
}:
function(P,Q){P.style.overflowY=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(r,u){r.style.overflow=u;
}:
function(L,M){L.style.overflowY=M;
},"default":function(x,y){x.style.overflowY=y;
}}),resetY:qx.core.Variant.select(bp,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb){cb.style.overflow=bq;
}:
function(v){v.style.overflowY=bq;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(F,G){F.style.overflow=bq;
}:
function(bX,bY){bX.style.overflowY=bq;
},"default":function(O){O.style.overflowY=bq;
}})}});
})();
(function(){var y="",x="qx.client",w="user-select",v="userSelect",u="appearance",t="style",s="MozUserModify",r="px",q="-webkit-appearance",p="styleFloat",U="-webkit-user-select",T="-moz-appearance",S="pixelHeight",R="MozAppearance",Q=":",P="pixelTop",O="pixelLeft",N="text-overflow",M="-moz-user-select",L="MozUserSelect",F="qx.bom.element.Style",G="-moz-user-modify",D="-webkit-user-modify",E="WebkitUserSelect",B="-o-text-overflow",C="pixelRight",z="cssFloat",A="pixelWidth",H="pixelBottom",I=";",K="WebkitUserModify",J="WebkitAppearance";
qx.Class.define(F,{statics:{__di:{styleNames:{"float":qx.core.Variant.select(x,{"mshtml":p,"default":z}),"appearance":qx.core.Variant.select(x,{"gecko":R,"webkit":J,"default":u}),"userSelect":qx.core.Variant.select(x,{"gecko":L,"webkit":E,"default":v}),"userModify":qx.core.Variant.select(x,{"gecko":s,"webkit":K,"default":v})},cssNames:{"appearance":qx.core.Variant.select(x,{"gecko":T,"webkit":q,"default":u}),"userSelect":qx.core.Variant.select(x,{"gecko":M,"webkit":U,"default":w}),"userModify":qx.core.Variant.select(x,{"gecko":G,"webkit":D,"default":w}),"textOverflow":qx.core.Variant.select(x,{"opera":B,"default":N})},mshtmlPixel:{width:A,height:S,left:O,right:C,top:P,bottom:H},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__dj:{},compile:function(br){var bv=[];
var bz=this.__di;
var by=bz.special;
var bw=bz.cssNames;
var bu=this.__dj;
var bx=qx.lang.String;
var name,bt,bs;

for(name in br){bs=br[name];

if(bs==null){continue;
}name=bw[name]||name;
if(by[name]){bv.push(by[name].compile(bs));
}else{bt=bu[name];

if(!bt){bt=bu[name]=bx.hyphenate(name);
}bv.push(bt,Q,bs,I);
}}return bv.join(y);
},setCss:qx.core.Variant.select(x,{"mshtml":function(Y,ba){Y.style.cssText=ba;
},"default":function(V,W){V.setAttribute(t,W);
}}),getCss:qx.core.Variant.select(x,{"mshtml":function(a){return a.style.cssText.toLowerCase();
},"default":function(X){return X.getAttribute(t);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bk,name,bl,bm){{};
var bn=this.__di;
name=bn.styleNames[name]||name;
if(bm!==false&&bn.special[name]){return bn.special[name].set(bk,bl);
}else{bk.style[name]=bl!==null?bl:y;
}},setStyles:function(bb,bc,bd){{};
var bj=this.__di;
var bg=bj.styleNames;
var bi=bj.special;
var be=bb.style;

for(var bh in bc){var bf=bc[bh];
var name=bg[bh]||bh;

if(bf===undefined){if(bd!==false&&bi[name]){bi[name].reset(bb);
}else{be[name]=y;
}}else{if(bd!==false&&bi[name]){bi[name].set(bb,bf);
}else{be[name]=bf!==null?bf:y;
}}}},reset:function(bo,name,bp){var bq=this.__di;
name=bq.styleNames[name]||name;
if(bp!==false&&bq.special[name]){return bq.special[name].reset(bo);
}else{bo.style[name]=y;
}},get:qx.core.Variant.select(x,{"mshtml":function(b,name,c,d){var i=this.__di;
name=i.styleNames[name]||name;
if(d!==false&&i.special[name]){return i.special[name].get(b,c);
}if(!b.currentStyle){return b.style[name]||y;
}switch(c){case this.LOCAL_MODE:return b.style[name]||y;
case this.CASCADED_MODE:return b.currentStyle[name]||y;
default:var h=b.currentStyle[name]||y;
if(/^-?[\.\d]+(px)?$/i.test(h)){return h;
}var g=i.mshtmlPixel[name];

if(g){var e=b.style[name];
b.style[name]=h||0;
var f=b.style[g]+r;
b.style[name]=e;
return f;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(h)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return h;
}},"default":function(j,name,k,l){var o=this.__di;
name=o.styleNames[name]||name;
if(l!==false&&o.special[name]){return o.special[name].get(j,k);
}switch(k){case this.LOCAL_MODE:return j.style[name]||y;
case this.CASCADED_MODE:if(j.currentStyle){return j.currentStyle[name]||y;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var m=qx.dom.Node.getDocument(j);
var n=m.defaultView.getComputedStyle(j,null);
return n?n[name]:y;
}}})}});
})();
(function(){var m="CSS1Compat",l="position:absolute;width:0;height:0;width:1",k="qx.bom.Document",j="1px",i="qx.client",h="div";
qx.Class.define(k,{statics:{isQuirksMode:qx.core.Variant.select(i,{"mshtml":function(d){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (d||window).document.compatMode!==m;
}},"webkit":function(n){if(document.compatMode===undefined){var o=(n||window).document.createElement(h);
o.style.cssText=l;
return o.style.width===j?true:false;
}else{return (n||window).document.compatMode!==m;
}},"default":function(q){return (q||window).document.compatMode!==m;
}}),isStandardMode:function(p){return !this.isQuirksMode(p);
},getWidth:function(e){var f=(e||window).document;
var g=qx.bom.Viewport.getWidth(e);
var scroll=this.isStandardMode(e)?f.documentElement.scrollWidth:f.body.scrollWidth;
return Math.max(scroll,g);
},getHeight:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getHeight(a);
var scroll=this.isStandardMode(a)?b.documentElement.scrollHeight:b.body.scrollHeight;
return Math.max(scroll,c);
}}});
})();
(function(){var e="qx.client",d="qx.bom.Viewport";
qx.Class.define(d,{statics:{getWidth:qx.core.Variant.select(e,{"opera":function(q){if(qx.bom.client.Engine.VERSION<9.5){return (q||window).document.body.clientWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"webkit":function(h){if(qx.bom.client.Engine.VERSION<523.15){return (h||window).innerWidth;
}else{var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}},"default":function(a){var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}}),getHeight:qx.core.Variant.select(e,{"opera":function(o){if(qx.bom.client.Engine.VERSION<9.5){return (o||window).document.body.clientHeight;
}else{var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}},"webkit":function(f){if(qx.bom.client.Engine.VERSION<523.15){return (f||window).innerHeight;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientHeight:g.body.clientHeight;
}},"default":function(m){var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(e,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollLeft||t.body.scrollLeft;
},"default":function(c){return (c||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(e,{"mshtml":function(j){var k=(j||window).document;
return k.documentElement.scrollTop||k.body.scrollTop;
},"default":function(l){return (l||window).pageYOffset;
}})}});
})();
(function(){var r="/",q="mshtml",p="",o="qx.client",n="?",m="string",l="qx.util.ResourceManager",k="singleton";
qx.Class.define(l,{extend:qx.core.Object,type:k,statics:{__dk:qx.$$resources||{},__dl:{}},members:{has:function(z){return !!arguments.callee.self.__dk[z];
},getData:function(s){return arguments.callee.self.__dk[s]||null;
},getImageWidth:function(t){var u=arguments.callee.self.__dk[t];
return u?u[0]:null;
},getImageHeight:function(A){var B=arguments.callee.self.__dk[A];
return B?B[1]:null;
},getImageFormat:function(v){var w=arguments.callee.self.__dk[v];
return w?w[2]:null;
},isClippedImage:function(x){var y=arguments.callee.self.__dk[x];
return y&&y.length>4;
},toUri:function(a){if(a==null){return a;
}var b=arguments.callee.self.__dk[a];

if(!b){return a;
}
if(typeof b===m){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=p;

if(qx.core.Variant.isSet(o,q)&&qx.bom.client.Feature.SSL){c=arguments.callee.self.__dl[d];
}return c+qx.$$libraries[d].resourceUri+r+a;
}},defer:function(e){if(qx.core.Variant.isSet(o,q)){if(qx.bom.client.Feature.SSL){for(var i in qx.$$libraries){var g;

if(qx.$$libraries[i].resourceUri){g=qx.$$libraries[i].resourceUri;
}else{e.__dl[i]=p;
continue;
}if(g.match(/^\/\//)!=null){e.__dl[i]=window.location.protocol;
}else if(g.match(/^\.\//)!=null){var f=document.URL;
e.__dl[i]=f.substring(0,f.lastIndexOf(r)+1);
}else if(g.match(/^http/)!=null){}else{var j=window.location.href.indexOf(n);
var h;

if(j==-1){h=window.location.href;
}else{h=window.location.href.substring(0,j);
}e.__dl[i]=h.substring(0,h.lastIndexOf(r)+1);
}}}}}});
})();
(function(){var p="qx.client",o="load",n="qx.io.ImageLoader";
qx.Bootstrap.define(n,{statics:{__dm:{},__dn:{width:null,height:null},__do:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(u){var v=this.__dm[u];
return !!(v&&v.loaded);
},isFailed:function(x){var y=this.__dm[x];
return !!(y&&y.failed);
},isLoading:function(k){var m=this.__dm[k];
return !!(m&&m.loading);
},getFormat:function(s){var t=this.__dm[s];
return t?t.format:null;
},getSize:function(F){var G=this.__dm[F];
return G?
{width:G.width,height:G.height}:this.__dn;
},getWidth:function(q){var r=this.__dm[q];
return r?r.width:null;
},getHeight:function(b){var c=this.__dm[b];
return c?c.height:null;
},load:function(d,e,f){var g=this.__dm[d];

if(!g){g=this.__dm[d]={};
}if(e&&!f){f=window;
}if(g.loaded||g.loading||g.failed){if(e){if(g.loading){g.callbacks.push(e,f);
}else{e.call(f,d,g);
}}}else{g.loading=true;
g.callbacks=[];

if(e){g.callbacks.push(e,f);
}var j=new Image();
var h=qx.lang.Function.listener(this.__dp,this,j,d);
j.onload=h;
j.onerror=h;
j.src=d;
}},__dp:qx.event.GlobalError.observeMethod(function(event,A,B){var C=this.__dm[B];
if(event.type===o){C.loaded=true;
C.width=this.__dq(A);
C.height=this.__dr(A);
var D=this.__do.exec(B);

if(D!=null){C.format=D[1];
}}else{C.failed=true;
}A.onload=A.onerror=null;
var E=C.callbacks;
delete C.loading;
delete C.callbacks;
for(var i=0,l=E.length;i<l;i+=2){E[i].call(E[i+1],B,C);
}}),__dq:qx.core.Variant.select(p,{"gecko":function(H){return H.naturalWidth;
},"default":function(w){return w.width;
}}),__dr:qx.core.Variant.select(p,{"gecko":function(z){return z.naturalHeight;
},"default":function(a){return a.height;
}})}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__ds:[o,null,n,h,null,p,k,null,p],__dt:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__du:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==s){top+=0.01;
}
if(z){var B=(typeof z==s)?z+q:z;
}else{B=r;
}
if(top){var C=(typeof top==s)?top+q:top;
}else{C=r;
}return B+j+C;
},compile:function(D,E,F,top){var G=this.__du(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__ds;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(m);
},getStyles:function(t,u,v,top){if(!t){return this.__dt;
}var w=this.__du(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:i+x+l};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(a,b,c,d,top){var e=this.getStyles(b,c,d,top);

for(var f in e){a.style[f]=e[f];
}}}});
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
(function(){var bh=",",bg="rgb(",bf=")",be="qx.theme.manager.Color",bd="qx.util.ColorUtil";
qx.Class.define(bd,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(I){return this.NAMED[I]!==undefined;
},isSystemColor:function(bc){return this.SYSTEM[bc]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(be);
},isThemedColor:function(H){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(H);
},stringToRgb:function(X){if(this.supportsThemes()&&this.isThemedColor(X)){var X=qx.theme.manager.Color.getInstance().resolveDynamic(X);
}
if(this.isNamedColor(X)){return this.NAMED[X];
}else if(this.isSystemColor(X)){throw new Error("Could not convert system colors to RGB: "+X);
}else if(this.isRgbString(X)){return this.__dv();
}else if(this.isHex3String(X)){return this.__dx();
}else if(this.isHex6String(X)){return this.__dy();
}throw new Error("Could not parse color: "+X);
},cssStringToRgb:function(Y){if(this.isNamedColor(Y)){return this.NAMED[Y];
}else if(this.isSystemColor(Y)){throw new Error("Could not convert system colors to RGB: "+Y);
}else if(this.isRgbString(Y)){return this.__dv();
}else if(this.isRgbaString(Y)){return this.__dw();
}else if(this.isHex3String(Y)){return this.__dx();
}else if(this.isHex6String(Y)){return this.__dy();
}throw new Error("Could not parse color: "+Y);
},stringToRgbString:function(G){return this.rgbToRgbString(this.stringToRgb(G));
},rgbToRgbString:function(u){return bg+u[0]+bh+u[1]+bh+u[2]+bf;
},rgbToHexString:function(J){return (qx.lang.String.pad(J[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(J[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(J[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(a){return this.isThemedColor(a)||this.isNamedColor(a)||this.isHex3String(a)||this.isHex6String(a)||this.isRgbString(a);
},isCssString:function(bi){return this.isSystemColor(bi)||this.isNamedColor(bi)||this.isHex3String(bi)||this.isHex6String(bi)||this.isRgbString(bi);
},isHex3String:function(h){return this.REGEXP.hex3.test(h);
},isHex6String:function(v){return this.REGEXP.hex6.test(v);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(bb){return this.REGEXP.rgba.test(bb);
},__dv:function(){var y=parseInt(RegExp.$1,10);
var x=parseInt(RegExp.$2,10);
var w=parseInt(RegExp.$3,10);
return [y,x,w];
},__dw:function(){var m=parseInt(RegExp.$1,10);
var l=parseInt(RegExp.$2,10);
var k=parseInt(RegExp.$3,10);
return [m,l,k];
},__dx:function(){var s=parseInt(RegExp.$1,16)*17;
var o=parseInt(RegExp.$2,16)*17;
var n=parseInt(RegExp.$3,16)*17;
return [s,o,n];
},__dy:function(){var e=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var d=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var c=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [e,d,c];
},hex3StringToRgb:function(K){if(this.isHex3String(K)){return this.__dx(K);
}throw new Error("Invalid hex3 value: "+K);
},hex6StringToRgb:function(ba){if(this.isHex6String(ba)){return this.__dy(ba);
}throw new Error("Invalid hex6 value: "+ba);
},hexStringToRgb:function(j){if(this.isHex3String(j)){return this.__dx(j);
}
if(this.isHex6String(j)){return this.__dy(j);
}throw new Error("Invalid hex value: "+j);
},rgbToHsb:function(L){var N,O,Q;
var W=L[0];
var T=L[1];
var M=L[2];
var V=(W>T)?W:T;

if(M>V){V=M;
}var P=(W<T)?W:T;

if(M<P){P=M;
}Q=V/255.0;

if(V!=0){O=(V-P)/V;
}else{O=0;
}
if(O==0){N=0;
}else{var S=(V-W)/(V-P);
var U=(V-T)/(V-P);
var R=(V-M)/(V-P);

if(W==V){N=R-U;
}else if(T==V){N=2.0+S-R;
}else{N=4.0+U-S;
}N=N/6.0;

if(N<0){N=N+1.0;
}}return [Math.round(N*360),Math.round(O*100),Math.round(Q*100)];
},hsbToRgb:function(A){var i,f,p,q,t;
var B=A[0]/360;
var C=A[1]/100;
var D=A[2]/100;

if(B>=1.0){B%=1.0;
}
if(C>1.0){C=1.0;
}
if(D>1.0){D=1.0;
}var E=Math.floor(255*D);
var F={};

if(C==0.0){F.red=F.green=F.blue=E;
}else{B*=6.0;
i=Math.floor(B);
f=B-i;
p=Math.floor(E*(1.0-C));
q=Math.floor(E*(1.0-(C*f)));
t=Math.floor(E*(1.0-(C*(1.0-f))));

switch(i){case 0:F.red=E;
F.green=t;
F.blue=p;
break;
case 1:F.red=q;
F.green=E;
F.blue=p;
break;
case 2:F.red=p;
F.green=E;
F.blue=t;
break;
case 3:F.red=p;
F.green=q;
F.blue=E;
break;
case 4:F.red=t;
F.green=p;
F.blue=E;
break;
case 5:F.red=E;
F.green=p;
F.blue=q;
break;
}}return [F.red,F.green,F.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var o="ready",n="qx.client",m="mshtml",l="load",k="unload",j="qx.event.handler.Application",i="complete",h="gecko|opera|webkit",g="left",f="DOMContentLoaded",d="shutdown";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){arguments.callee.base.call(this);
this._window=y.getWindow();
this.__dz=false;
this.__dA=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__dB:false,onScriptLoaded:function(){this.__dB=true;
var b=qx.event.handler.Application.$$instance;

if(b){b.__dE();
}}},members:{canHandleEvent:function(t,u){},registerEvent:function(p,q,r){},unregisterEvent:function(v,w,x){},__dC:null,__dz:null,__dA:null,__dD:null,__dE:function(){var s=qx.event.handler.Application;
if(!this.__dC&&this.__dz&&s.__dB){if(qx.core.Variant.isSet(n,m)){if(qx.event.Registration.hasListener(this._window,o)){this.__dC=true;
qx.event.Registration.fireEvent(this._window,o);
}}else{this.__dC=true;
qx.event.Registration.fireEvent(this._window,o);
}}},isApplicationReady:function(){return this.__dC;
},_initObserver:function(){if(qx.$$domReady||document.readyState==i){this.__dz=true;
this.__dE();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(n,h)){qx.bom.Event.addNativeListener(this._window,f,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(n,m)){var self=this;
var z=function(){try{document.documentElement.doScroll(g);

if(document.body){self._onNativeLoadWrapped();
}}catch(a){window.setTimeout(z,100);
}};
z();
}qx.bom.Event.addNativeListener(this._window,l,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,k,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,l,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,k,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__dz=true;
this.__dE();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__dD){this.__dD=true;

try{qx.event.Registration.fireEvent(this._window,d);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var o="qx.event.handler.Window";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this._manager=k;
this._window=k.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(l,m,n){},unregisterEvent:function(p,q,r){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var h=qx.event.handler.Window.SUPPORTED_TYPES;

for(var g in h){qx.bom.Event.addNativeListener(this._window,g,this._onNativeWrapper);
}},_stopWindowObserver:function(){var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var b=this._window;

try{var f=b.document;
}catch(e){return ;
}var c=f.documentElement;
var a=e.target||e.srcElement;

if(a==null||a===b||a===f||a===c){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,b]);
qx.event.Registration.dispatchEvent(b,event);
var d=event.getReturnValue();

if(d!=null){e.returnValue=d;
return d;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var g="ready",f="qx.application",d="beforeunload",c="qx.core.Init",b="shutdown";
qx.Class.define(c,{statics:{getApplication:function(){return this.__dG||null;
},__dF:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var j=qx.core.Setting.get(f);
var k=qx.Class.getByName(j);

if(k){this.__dG=new k;
var i=new Date;
this.__dG.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-i)+"ms");
var i=new Date;
this.__dG.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-i)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+j);
}},__dH:function(e){var a=this.__dG;

if(a){e.setReturnValue(a.close());
}},__dI:function(){var h=this.__dG;

if(h){h.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,g,l.__dF,l);
qx.event.Registration.addListener(window,b,l.__dI,l);
qx.event.Registration.addListener(window,d,l.__dH,l);
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
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dJ:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__dJ;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__dJ=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__dJ=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var l="_objectsWindow",k="changeValue",j="console",i="_propertyWindow",h="_consoleWindow",g="_widgetsWindow",f="_consoleButton",d="execute",c="_objectsButton",b="Height",bi="property",bh="widgets",bg="url",bf="Open",be="Top",bd="_widgetsButton",bc="objects",bb="Width",ba="_propertyButton",Y="Left",s="resize",t="_reloadButton",q="_urlTextField",r="true",o="Inspect widget",p="_inspectButton",m="index.html",n="myToolbar",w="<tt>",x="</tt>",F=" Can not access the javascript in the iframe!",D="Properties",N="load",I="_selector",U="changeSelection",S="_container",z="middle",X="..",W="",V="qooxdoo Inspector",y="Lucida Grande",B="close",C="inspector.Application",E="Widgets",G="_selectedWidgetLabel",J="_toolbar",P="_iFrame",T="icon/22/actions/edit-find.png",u="toolbar-button-bold",v="Console",A="inspector/css/propertylisthtml.css",M="move",L="inspector/css/domview.css",K="inspector/css/consoleview.css",R="hidden",Q="inspector/css/sourceview.css",H="Objects",O="icon/16/actions/view-refresh.png",a="minimized";
qx.Class.define(C,{extend:qx.application.Standalone,construct:function(){arguments.callee.base.call(this);
qx.bom.Stylesheet.includeFile(L);
qx.bom.Stylesheet.includeFile(K);
qx.bom.Stylesheet.includeFile(Q);
qx.bom.Stylesheet.includeFile(A);
},members:{__dK:null,_toolbar:null,_objectsButton:null,_widgetsButton:null,_consoleButton:null,_propertyButton:null,_inspectButton:null,_selectedWidgetLabel:null,_urlTextField:null,_reloadButton:null,_objectsWindow:null,_widgetsWindow:null,_consoleWindow:null,_propertyWindow:null,_container:null,_iFrame:null,_loading:null,_selector:null,_loadedWindow:null,main:function(){arguments.callee.base.call(this);
{};
this._container=new qx.ui.container.Composite(new qx.ui.layout.VBox());
this.getRoot().add(this._container,{edge:0});
this.__dR();
this.__dU(false);
var bA=X;
var bz=qx.bom.Cookie.get(bg);

if(bz==undefined||bz==W){bz=bA;
}
if(window.qxinspector!=undefined&&qxinspector.local){this._urlTextField.setVisibility(R);
bA=m;
}else{bA=bz;
}this._loading=true;
this._iFrame=new qx.ui.embed.Iframe(bA);
this._iFrame.setDecorator(null);
this._container.add(this._iFrame,{flex:1});
this._iFrame.addListener(N,this.__dL,this);
this._urlTextField.setValue(bA);
},__dL:function(){this.__dK=0;
this.__dM();
var bP=this._iFrame.getSource();

try{bP=this._iFrame.getWindow().location.pathname;
}catch(bl){}
if(window.qxinspector==undefined){this._urlTextField.setValue(bP);
}qx.bom.Cookie.set(bg,bP,7);
},__dM:function(){this._loadedWindow=this._iFrame.getContentElement().getWindow();
this.__dU(false);
if(!this.__dQ()){return;
}this.__dU(true);
if(!this._selector){this._selector=new inspector.components.Selector(this._loadedWindow);
}else{this._selector.setJSWindow(this._loadedWindow);
}this._selector.addListener(U,this._changeSelection,this);
this._selector.setSelection(this._loadedWindow.qx.core.Init.getApplication());
this._loading=false;
this.__dN();
this.select(this._loadedWindow.qx.core.Init.getApplication().getRoot());
this.__dP();
},__dN:function(){if(this._objectsWindow!=null&&this._objectsWindow.isVisible()){this._objectsWindow.load(this._loadedWindow);
}if(this._widgetsWindow!=null&&this._widgetsWindow.isVisible()){this._widgetsWindow.load(this._loadedWindow);
}},__dO:function(bs,bt,name){var bw=qx.bom.Cookie.get(name+bf);

if(bw==r||bw===null){bt.setValue(true);
var top=parseInt(qx.bom.Cookie.get(name+be));
var bx=parseInt(qx.bom.Cookie.get(name+Y));

if(!isNaN(top)&&!isNaN(bx)){this[bs].moveTo(bx,top);
}var bu=parseInt(qx.bom.Cookie.get(name+bb));
var bv=parseInt(qx.bom.Cookie.get(name+b));

if(!isNaN(bv)){this[bs].setHeight(bv);
}
if(!isNaN(bu)){this[bs].setWidth(bu);
}}},__dP:function(){this.__dO(l,this._objectsButton,bc);
this.__dO(g,this._widgetsButton,bh);
this.__dO(h,this._consoleButton,j);
this.__dO(i,this._propertyButton,bi);
},__dQ:function(){try{this.__dK++;
if(this.__dK>20){throw new Error("qooxdoo not found!");
}
try{this._loadedWindow.qx.core.Init.getApplication().getRoot();
return true;
}catch(bI){qx.event.Timer.once(this.__dM,this,500);
throw new Error("qooxdoo isn't ready at the moment!");
}}catch(bD){this._selectedWidgetLabel.setValue(F);
return false;
}},__dR:function(){this._toolbar=new qx.ui.toolbar.ToolBar();
this._toolbar.setDecorator(n);
this._toolbar._getLayout().setAlignY(z);
this._container.add(this._toolbar);
var bq=new qx.ui.basic.Label(V);
bq.setPaddingLeft(10);
bq.setPaddingRight(5);
var bp=new qx.bom.Font(12,[y]);
bp.setBold(true);
bp.setItalic(true);
bq.setFont(bp);
this._toolbar.add(bq);
this._toolbar.add(new qx.ui.toolbar.Separator());
this.__dS(c,H,l,inspector.objects.ObjectsWindow,bc,function(){if(this._loadedWindow!=null){this._objectsWindow.load(this._loadedWindow);
}});
this.__dS(bd,E,g,inspector.widgets.WidgetsWindow,bh,function(){this._widgetsWindow.load();
});
this.__dS(ba,D,i,inspector.property.PropertyWindow,bi,function(){this._propertyWindow.select(this._selector.getSelection());
});
this.__dS(f,v,h,inspector.console.ConsoleWindow,j,function(){});
this._toolbar.add(new qx.ui.toolbar.Separator());
this._inspectButton=new qx.ui.toolbar.CheckBox(o,T);
this._inspectButton.setAppearance(u);
this._toolbar.add(this._inspectButton);
this._inspectButton.addListener(k,function(e){if(e.getData()){this._selector.start();
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
this._urlTextField.addListener(k,this._reloadIframe,this);
this._reloadButton=new qx.ui.toolbar.Button(null,O);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(d,this._reloadIframe,this);
},_reloadIframe:function(e){this._loading=true;
var by=this._iFrame.getSource();

try{by=this._iFrame.getWindow().location.pathname;
}catch(bj){}
if(by!=this._urlTextField.getValue()){this._iFrame.setSource(this._urlTextField.getValue());
}else{if(e.getType()==d){if(this._iFrame.getSource!=by){this._iFrame.setSource(by);
}else{this._iFrame.reload();
}}}},__dS:function(bJ,bK,bL,bM,name,bN){this[bJ]=new qx.ui.toolbar.CheckBox(bK);
this._toolbar.add(this[bJ]);
var bO=false;
this[bJ].addListener(k,function(e){if(!bO){this[bL]=new bM();
this.getRoot().add(this[bL]);
this[bL].setInitSizeAndPosition();
this.__dT(this[bL],this[bJ],name);
}e.getData()?this[bL].open():this[bL].close();
bN.call(this);
bO=true;
qx.bom.Cookie.set(name+bf,e.getData(),7);
},this);
},__dT:function(bB,bC,name){bB.addListener(B,function(){bC.setValue(false);
},this);
bB.addListener(M,function(e){qx.bom.Cookie.set(name+Y,e.getData().left,7);
qx.bom.Cookie.set(name+be,e.getData().top,7);
},this);
bB.addListener(s,function(e){qx.bom.Cookie.set(name+bb,e.getData().width,7);
qx.bom.Cookie.set(name+b,e.getData().height,7);
},this);
},__dU:function(br){this._objectsButton.setEnabled(br);
this._widgetsButton.setEnabled(br);
this._consoleButton.setEnabled(br);
this._propertyButton.setEnabled(br);
this._inspectButton.setEnabled(br);
this._selectedWidgetLabel.setEnabled(br);
},_changeSelection:function(e){this._inspectButton.setValue(false);
this.select(e.getData(),this._selector);
},getSelectedObject:function(){return this._selector.getSelection();
},setWidgetByHash:function(bm,bn){if(bn==j){bn=this._consoleWindow;
this._consoleWindow.goToDefaultView();
}var bo=this._loadedWindow.qx.core.ObjectRegistry.fromHashCode(bm);
this.select(bo,bn);
},inspectObjectByDomSelecet:function(bG,bH){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByDomSelecet(bG,bH);
}},inspectObjectByInternalId:function(bk){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByInternalId(bk);
}},select:function(bE,bF){if(this._loading||!bE){return;
}this._selectedWidgetLabel.setValue(w+bE.toString()+x);

if(bF!=this._selector){if(bE!==this._selector.getSelection()){this._selector.setSelection(bE);
}}
if(this._objectsWindow!=null&&bF!=this._objectsWindow){if(bE!=this._objectsWindow.getSelection()){this._objectsWindow.select(bE,true);
}}
if(this._widgetsWindow!=null&&bF!=this._widgetsWindow){if(bE!=this._widgetsWindow.getSelection()){this._widgetsWindow.select(bE,true);
}}
if(this._propertyWindow!=null&&bF!=this._propertyWindow){if(bE!=this._propertyWindow.getSelection()&&this._propertyWindow.getMode()!=a){this._propertyWindow.select(bE,true);
}}this._selector.highlightFor(bE,1000);
},getIframeWindowObject:function(){return this._loadedWindow;
},getExcludes:function(){return this._selector.getAddedWidgets();
}},destruct:function(){this._loadedWindow=null;
this._disposeObjects(S,J,c,bd,ba,f,p,G,q,t,P,I,l,g,h,i);
}});
})();
(function(){var k="qx.event.type.Native";
qx.Class.define(k,{extend:qx.event.type.Event,members:{init:function(f,g,h,i,j){arguments.callee.base.call(this,i,j);
this._target=g||qx.bom.Event.getTarget(f);
this._relatedTarget=h||qx.bom.Event.getRelatedTarget(f);

if(f.timeStamp){this._timeStamp=f.timeStamp;
}this._native=f;
this._returnValue=null;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
var c={};
b._native=this._cloneNativeEvent(this._native,c);
b._returnValue=this._returnValue;
return b;
},_cloneNativeEvent:function(d,e){e.preventDefault=qx.lang.Function.empty;
return e;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
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
(function(){var k="object",j="_applyTheme",i="__dV",h="qx.theme.manager.Decoration",g="Theme",f="string",e="singleton";
qx.Class.define(h,{type:e,extend:qx.core.Object,properties:{theme:{check:g,nullable:true,apply:j}},members:{__dV:null,resolve:function(p){if(!p){return null;
}
if(typeof p===k){return p;
}var s=this.getTheme();

if(!s){return null;
}var s=this.getTheme();

if(!s){return null;
}var t=this.__dV;

if(!t){t=this.__dV={};
}var q=t[p];

if(q){return q;
}var r=s.decorations[p];

if(!r){return null;
}var u=r.decorator;

if(u==null){throw new Error("Missing definition of which decorator to use in entry: "+p+"!");
}return t[p]=(new u).set(r.style);
},isValidPropertyValue:function(a){if(typeof a===f){return this.isDynamic(a);
}else if(typeof a===k){var b=a.constructor;
return qx.Class.hasInterface(b,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(c){if(!c){return false;
}var d=this.getTheme();

if(!d){return false;
}return !!d.decorations[c];
},_applyTheme:function(l,m){var o=qx.util.AliasManager.getInstance();

if(m){for(var n in m.aliases){o.remove(n);
}}
if(l){for(var n in l.aliases){o.add(n,l.aliases[n]);
}}
if(!l){this.__dV={};
}}},destruct:function(){this._disposeMap(i);
}});
})();
(function(){var i="qx.theme.manager.Font",h="Theme",g="changeTheme",f="_applyTheme",e="singleton";
qx.Class.define(i,{type:e,extend:qx.util.ValueManager,properties:{theme:{check:h,nullable:true,apply:f,event:g}},members:{resolveDynamic:function(r){var s=this._dynamic;
return r instanceof qx.bom.Font?r:s[r];
},resolve:function(a){var d=this._dynamic;
var b=d[a];

if(b){return b;
}var c=this.getTheme();

if(c!==null&&c.fonts[a]){return d[a]=(new qx.bom.Font).set(c.fonts[a]);
}return a;
},isDynamic:function(j){var l=this._dynamic;

if(j&&(j instanceof qx.bom.Font||l[j]!==undefined)){return true;
}var k=this.getTheme();

if(k!==null&&j&&k.fonts[j]){l[j]=(new qx.bom.Font).set(k.fonts[j]);
return true;
}return false;
},_applyTheme:function(m){var n=this._getDynamic();

for(var q in n){if(n[q].themed){n[q].dispose();
delete n[q];
}}
if(m){var o=m.fonts;
var p=qx.bom.Font;

for(var q in o){n[q]=(new p).set(o[q]);
n[q].themed=true;
}}this._setDynamic(n);
}}});
})();
(function(){var p="",o="underline",n="Boolean",m="px",k='"',j="italic",h="normal",g="bold",f="_applyItalic",e="_applyBold",B="Integer",A="_applyFamily",z="_applyLineHeight",y="Array",x="overline",w="line-through",v="qx.bom.Font",u="Number",t="_applyDecoration",s=" ",q="_applySize",r=",";
qx.Class.define(v,{extend:qx.core.Object,construct:function(c,d){arguments.callee.base.call(this);

if(c!==undefined){this.setSize(c);
}
if(d!==undefined){this.setFamily(d);
}},statics:{fromString:function(C){var G=new qx.bom.Font();
var E=C.split(/\s+/);
var name=[];
var F;

for(var i=0;i<E.length;i++){switch(F=E[i]){case g:G.setBold(true);
break;
case j:G.setItalic(true);
break;
case o:G.setDecoration(o);
break;
default:var D=parseInt(F,10);

if(D==F||qx.lang.String.contains(F,m)){G.setSize(D);
}else{name.push(F);
}break;
}}
if(name.length>0){G.setFamily(name);
}return G;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__dW:{fontFamily:p,fontSize:p,fontWeight:p,fontStyle:p,textDecoration:p,lineHeight:1.2},getDefaultStyles:function(){return this.__dW;
}},properties:{size:{check:B,nullable:true,apply:q},lineHeight:{check:u,nullable:true,apply:z},family:{check:y,nullable:true,apply:A},bold:{check:n,nullable:true,apply:e},italic:{check:n,nullable:true,apply:f},decoration:{check:[o,w,x],nullable:true,apply:t}},members:{__dX:null,__dY:null,__ea:null,__eb:null,__ec:null,__ed:null,_applySize:function(Q,R){this.__dX=Q===null?null:Q+m;
},_applyLineHeight:function(S,T){this.__ed=S===null?null:S;
},_applyFamily:function(L,M){var N=p;

for(var i=0,l=L.length;i<l;i++){if(L[i].indexOf(s)>0){N+=k+L[i]+k;
}else{N+=L[i];
}
if(i!==l-1){N+=r;
}}this.__dY=N;
},_applyBold:function(J,K){this.__ea=J===null?null:J?g:h;
},_applyItalic:function(O,P){this.__eb=O===null?null:O?j:h;
},_applyDecoration:function(a,b){this.__ec=a===null?null:a;
},getStyles:function(){return {fontFamily:this.__dY,fontSize:this.__dX,fontWeight:this.__ea,fontStyle:this.__eb,textDecoration:this.__ec,lineHeight:this.__ed};
}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var A="string",z="_applyTheme",y="qx.theme.manager.Appearance",x=":",w="Theme",v="changeTheme",u="/",t="singleton";
qx.Class.define(y,{type:t,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ee={};
this.__ef={};
},properties:{theme:{check:w,nullable:true,event:v,apply:z}},members:{__eg:{},__ee:null,__ef:null,_applyTheme:function(r,s){this.__ef={};
this.__ee={};
},__eh:function(B,C,D){var H=C.appearances;
var K=H[B];

if(!K){var L=u;
var E=[];
var J=B.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===A){var G=I+L+E.join(L);
return this.__eh(G,C,D);
}}}if(D!=null){return this.__eh(D,C);
}return null;
}else if(typeof K===A){return this.__eh(K,C,D);
}else if(K.include&&!K.style){return this.__eh(K.include,C,D);
}return B;
},styleFrom:function(a,b,c,d){if(!c){c=this.getTheme();
}var j=this.__ef;
var e=j[a];

if(!e){e=j[a]=this.__eh(a,c,d);
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
}if(h>0){p+=x+h;
}}var i=this.__ee;

if(i[p]!==undefined){return i[p];
}if(!b){b=this.__eg;
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
}},destruct:function(){this.__ee=this.__ef=null;
}});
})();
(function(){var v="focusout",u="interval",t="mouseover",s="mouseout",r="mousemove",q="widget",p="__ei",o="qx.ui.tooltip.ToolTip",n="Boolean",m="__ej",j="_applyCurrent",l="__el",k="qx.ui.tooltip.Manager",i="tooltip-error",h="singleton";
qx.Class.define(k,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,t,this.__es,this,true);
this.__ei=new qx.event.Timer();
this.__ei.addListener(u,this.__ep,this);
this.__ej=new qx.event.Timer();
this.__ej.addListener(u,this.__eq,this);
this.__ek={left:0,top:0};
},properties:{current:{check:o,nullable:true,apply:j},showInvalidTooltips:{check:n,init:true}},members:{__ek:null,__ej:null,__ei:null,__el:null,__em:null,__en:function(){if(!this.__el){this.__el=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__el;
},__eo:function(){if(!this.__em){this.__em=new qx.ui.tooltip.ToolTip().set({appearance:i});
this.__em.syncAppearance();
}return this.__em;
},_applyCurrent:function(A,B){if(B&&qx.ui.core.Widget.contains(B,A)){return;
}if(B){if(!B.isDisposed()){B.exclude();
}this.__ei.stop();
this.__ej.stop();
}var D=qx.event.Registration;
var C=document.body;
if(A){this.__ei.startWith(A.getShowTimeout());
D.addListener(C,s,this.__et,this,true);
D.addListener(C,v,this.__eu,this,true);
D.addListener(C,r,this.__er,this,true);
}else{D.removeListener(C,s,this.__et,this,true);
D.removeListener(C,v,this.__eu,this,true);
D.removeListener(C,r,this.__er,this,true);
}},__ep:function(e){var g=this.getCurrent();

if(g&&!g.isDisposed()){this.__ej.startWith(g.getHideTimeout());

if(g.getPlaceMethod()==q){g.placeToWidget(g.getOpener());
}else{g.placeToPoint(this.__ek);
}g.show();
}this.__ei.stop();
},__eq:function(e){var w=this.getCurrent();

if(w&&!w.isDisposed()){w.exclude();
}this.__ej.stop();
this.resetCurrent();
},__er:function(e){var z=this.__ek;
z.left=e.getDocumentLeft();
z.top=e.getDocumentTop();
},__es:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
}
if(c.isBlockToolTip()){return;
}if(a&&c.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var d=this.__eo().set({label:a});
}else if(!d){var d=this.__en().set({label:f,icon:b});
}this.setCurrent(d);
d.setOpener(c);
},__et:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&(F==G||qx.ui.core.Widget.contains(G,F))){return;
}if(F&&E&&qx.ui.core.Widget.contains(E,F)){return;
}if(G&&!F){this.setCurrent(null);
}else{this.resetCurrent();
}},__eu:function(e){var x=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!x){return;
}var y=this.getCurrent();
if(y&&y==x.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,t,this.__es,this,true);
this._disposeObjects(p,m,l);
this.__ek=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(q){arguments.callee.base.call(this);
this.setEnabled(false);

if(q!=null){this.setInterval(q);
}var self=this;
this.__ev=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.addListener(i,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__ew:null,__ev:null,_applyInterval:function(o,p){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(r,s){if(s){window.clearInterval(this.__ew);
this.__ew=null;
}else if(r){this.__ew=window.setInterval(this.__ev,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(a){this.setInterval(a);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(n){this.stop();
this.startWith(n);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__ew){window.clearInterval(this.__ew);
}this.__ew=this.__ev=null;
}});
})();
(function(){var e="qx.ui.core.MChildrenHandling";
qx.Mixin.define(e,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(p){return this._indexOf(p);
},add:function(f,g){this._add(f,g);
},addAt:function(l,m,n){this._addAt(l,m,n);
},addBefore:function(i,j,k){this._addBefore(i,j,k);
},addAfter:function(a,b,c){this._addAfter(a,b,c);
},remove:function(h){this._remove(h);
},removeAt:function(d){return this._removeAt(d);
},removeAll:function(){this._removeAll();
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
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var x="Integer",w="_applyDimension",v="Boolean",u="_applyStretching",t="_applyMargin",s="shorthand",r="_applyAlign",q="allowShrinkY",p="bottom",o="baseline",L="marginBottom",K="qx.ui.core.LayoutItem",J="center",I="marginTop",H="allowGrowX",G="middle",F="marginLeft",E="allowShrinkX",D="top",C="right",A="marginRight",B="abstract",y="allowGrowY",z="left";
qx.Class.define(K,{type:B,extend:qx.core.Object,properties:{minWidth:{check:x,nullable:true,apply:w,init:null,themeable:true},width:{check:x,nullable:true,apply:w,init:null,themeable:true},maxWidth:{check:x,nullable:true,apply:w,init:null,themeable:true},minHeight:{check:x,nullable:true,apply:w,init:null,themeable:true},height:{check:x,nullable:true,apply:w,init:null,themeable:true},maxHeight:{check:x,nullable:true,apply:w,init:null,themeable:true},allowGrowX:{check:v,apply:u,init:true,themeable:true},allowShrinkX:{check:v,apply:u,init:true,themeable:true},allowGrowY:{check:v,apply:u,init:true,themeable:true},allowShrinkY:{check:v,apply:u,init:true,themeable:true},allowStretchX:{group:[H,E],mode:s,themeable:true},allowStretchY:{group:[y,q],mode:s,themeable:true},marginTop:{check:x,init:0,apply:t,themeable:true},marginRight:{check:x,init:0,apply:t,themeable:true},marginBottom:{check:x,init:0,apply:t,themeable:true},marginLeft:{check:x,init:0,apply:t,themeable:true},margin:{group:[I,A,L,F],mode:s,themeable:true},alignX:{check:[z,J,C],nullable:true,apply:r,themeable:true},alignY:{check:[D,G,p,o],nullable:true,apply:r,themeable:true}},members:{__ex:null,__ey:null,__ez:null,__eA:null,__eB:null,__eC:null,__eD:null,getBounds:function(){return this.__eC||this.__ey||null;
},clearSeparators:function(){},renderSeparator:function(Q,R){},renderLayout:function(S,top,T,U){var V;
{};
var W=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var W=this._getHeightForWidth(T);
}
if(W!=null&&W!==this.__ex){this.__ex=W;
qx.ui.core.queue.Layout.add(this);
return null;
}var Y=this.__ey;

if(!Y){Y=this.__ey={};
}var X={};

if(S!==Y.left||top!==Y.top){X.position=true;
Y.left=S;
Y.top=top;
}
if(T!==Y.width||U!==Y.height){X.size=true;
Y.width=T;
Y.height=U;
}if(this.__ez){X.local=true;
delete this.__ez;
}
if(this.__eB){X.margin=true;
delete this.__eB;
}return X;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__ez;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__ez=true;
this.__eA=null;
},getSizeHint:function(m){var n=this.__eA;

if(n){return n;
}
if(m===false){return null;
}n=this.__eA=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__ex&&this.getHeight()==null){n.height=this.__ex;
}if(n.minWidth>n.width){n.width=n.minWidth;
}
if(n.maxWidth<n.width){n.width=n.maxWidth;
}
if(!this.getAllowGrowX()){n.maxWidth=n.width;
}
if(!this.getAllowShrinkX()){n.minWidth=n.width;
}if(n.minHeight>n.height){n.height=n.minHeight;
}
if(n.maxHeight<n.height){n.height=n.maxHeight;
}
if(!this.getAllowGrowY()){n.maxHeight=n.height;
}
if(!this.getAllowShrinkY()){n.minHeight=n.height;
}return n;
},_computeSizeHint:function(){var e=this.getMinWidth()||0;
var b=this.getMinHeight()||0;
var f=this.getWidth()||e;
var d=this.getHeight()||b;
var a=this.getMaxWidth()||Infinity;
var c=this.getMaxHeight()||Infinity;
return {minWidth:e,width:f,maxWidth:a,minHeight:b,height:d,maxHeight:c};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(bc){var bd=this._getLayout();

if(bd&&bd.hasHeightForWidth()){return bd.getHeightForWidth(bc);
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
},setUserBounds:function(M,top,N,O){this.__eC={left:M,top:top,width:N,height:O};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eC;
qx.ui.core.queue.Layout.add(this);
},__eE:{},setLayoutProperties:function(g){if(g==null){return;
}var h=this.__eD;

if(!h){h=this.__eD={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(g);
}for(var i in g){if(g[i]==null){delete h[i];
}else{h[i]=g[i];
}}},getLayoutProperties:function(){return this.__eD||this.__eE;
},clearLayoutProperties:function(){delete this.__eD;
},updateLayoutProperties:function(j){var k=this._getLayout();

if(k){var l;
{};
k.invalidateChildrenCache();
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
},clone:function(){var ba=arguments.callee.base.call(this);
var bb=this.__eD;

if(bb){ba.__eD=qx.lang.Object.clone(bb);
}return ba;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eD=this.__ey=this.__eC=this.__eA=null;
}});
})();
(function(){var f="qx.ui.core.DecoratorFactory",e="$$nopool$$";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__eF={};
},statics:{MAX_SIZE:15,__eG:e},members:{__eF:null,getDecoratorElement:function(j){var o=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(j)){var m=j;
var l=qx.theme.manager.Decoration.getInstance().resolve(j);
}else{var m=o.__eG;
l=j;
}var n=this.__eF;

if(n[m]&&n[m].length>0){var k=n[m].pop();
}else{var k=this._createDecoratorElement(l,m);
}k.$$pooled=false;
return k;
},poolDecorator:function(a){if(!a||a.$$pooled){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__eG){a.dispose();
return;
}var c=this.__eF;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(g,h){var i=new qx.html.Decorator(g,h);
{};
return i;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__eF;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__eF=null;
}});
})();
(function(){var dN="px",dM="Boolean",dL="qx.event.type.Mouse",dK="qx.event.type.Drag",dJ="visible",dI="qx.event.type.Focus",dH="on",dG="Integer",dF="excluded",dE="qx.event.type.Data",dq="_applyPadding",dp="qx.event.type.Event",dn="hidden",dm="contextmenu",dl="String",dk="tabIndex",dj="backgroundColor",di="focused",dh="changeVisibility",dg="mshtml",dU="hovered",dV="qx.event.type.KeySequence",dS="qx.client",dT="absolute",dQ="drag",dR="div",dO="disabled",dP="move",dW="dragstart",dX="qx.dynlocale",dx="dragchange",dw="dragend",dz="resize",dy="Decorator",dB="zIndex",dA="$$widget",dD="opacity",dC="default",dv="Color",du="changeToolTipText",bW="beforeContextmenuOpen",bX="_applyNativeContextMenu",bY="_applyBackgroundColor",ca="_applyFocusable",cb="changeShadow",cc="qx.event.type.KeyInput",cd="createChildControl",ce="__eS",cf="Font",cg="__eQ",ec="_applyShadow",eb="_applyEnabled",ea="_applySelectable",dY="Number",eg="_applyKeepActive",ef="_applyVisibility",ee="__eI",ed="repeat",ei="qxDraggable",eh="syncAppearance",cF="paddingLeft",cG="_applyDroppable",cD="#",cE="qx.event.type.MouseWheel",cJ="_applyCursor",cK="_applyDraggable",cH="__eH",cI="changeTextColor",cB="changeContextMenu",cC="paddingTop",co="changeSelectable",cn="hideFocus",cq="none",cp="outline",ck="_applyAppearance",cj="_applyOpacity",cm="url(",cl=")",ci="qx.ui.core.Widget",ch="_applyFont",cP="cursor",cQ="qxDroppable",cR="changeZIndex",cS="changeEnabled",cL="__eN",cM="changeFont",cN="_applyDecorator",cO="_applyZIndex",cT="_applyTextColor",cU="qx.ui.menu.Menu",cy="_applyToolTipText",cx="true",cw="widget",cv="changeDecorator",cu="__eM",ct="_applyTabIndex",cs="changeAppearance",cr="shorthand",cA="/",cz="",cV="_applyContextMenu",cW="__eL",cX="paddingBottom",cY="__eU",da="changeNativeContextMenu",db="qx.ui.tooltip.ToolTip",dc="qxKeepActive",dd="_applyKeepFocus",de="paddingRight",df="changeBackgroundColor",dt="changeLocale",ds="qxKeepFocus",dr="qx/static/blank.gif";
qx.Class.define(ci,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__eH=this._createContainerElement();
this.__eI=this.__eT();
this.__eH.add(this.__eI);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dp,disappear:dp,createChildControl:dE,resize:dE,move:dE,syncAppearance:dE,mousemove:dL,mouseover:dL,mouseout:dL,mousedown:dL,mouseup:dL,click:dL,dblclick:dL,contextmenu:dL,beforeContextmenuOpen:dL,mousewheel:cE,keyup:dV,keydown:dV,keypress:dV,keyinput:cc,focus:dI,blur:dI,focusin:dI,focusout:dI,activate:dI,deactivate:dI,capture:dp,losecapture:dp,drop:dK,dragleave:dK,dragover:dK,drag:dK,dragstart:dK,dragend:dK,dragchange:dK,droprequest:dK},properties:{paddingTop:{check:dG,init:0,apply:dq,themeable:true},paddingRight:{check:dG,init:0,apply:dq,themeable:true},paddingBottom:{check:dG,init:0,apply:dq,themeable:true},paddingLeft:{check:dG,init:0,apply:dq,themeable:true},padding:{group:[cC,de,cX,cF],mode:cr,themeable:true},zIndex:{nullable:true,init:null,apply:cO,event:cR,check:dG,themeable:true},decorator:{nullable:true,init:null,apply:cN,event:cv,check:dy,themeable:true},shadow:{nullable:true,init:null,apply:ec,event:cb,check:dy,themeable:true},backgroundColor:{nullable:true,check:dv,apply:bY,event:df,themeable:true},textColor:{nullable:true,check:dv,apply:cT,event:cI,themeable:true,inheritable:true},font:{nullable:true,apply:ch,check:cf,event:cM,themeable:true,inheritable:true,dispose:true},opacity:{check:dY,apply:cj,themeable:true,nullable:true,init:null},cursor:{check:dl,apply:cJ,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:db,nullable:true},toolTipText:{check:dl,nullable:true,event:du,apply:cy},toolTipIcon:{check:dl,nullable:true,event:du},blockToolTip:{check:dM,init:false},visibility:{check:[dJ,dn,dF],init:dJ,apply:ef,event:dh},enabled:{init:true,check:dM,inheritable:true,apply:eb,event:cS},anonymous:{init:false,check:dM},tabIndex:{check:dG,nullable:true,apply:ct},focusable:{check:dM,init:false,apply:ca},keepFocus:{check:dM,init:false,apply:dd},keepActive:{check:dM,init:false,apply:eg},draggable:{check:dM,init:false,apply:cK},droppable:{check:dM,init:false,apply:cG},selectable:{check:dM,init:false,event:co,apply:ea},contextMenu:{check:cU,apply:cV,nullable:true,event:cB},nativeContextMenu:{check:dM,init:false,themeable:true,event:da,apply:bX},appearance:{check:dl,init:cw,apply:ck,event:cs}},statics:{DEBUG:false,getWidgetByElement:function(fj){while(fj){var fk=fj.$$widget;
if(fk!=null){return qx.core.ObjectRegistry.fromHashCode(fk);
}fj=fj.parentNode;
}return null;
},contains:function(parent,V){while(V){if(parent==V){return true;
}V=V.getLayoutParent();
}return false;
},__eJ:new qx.ui.core.DecoratorFactory(),__eK:new qx.ui.core.DecoratorFactory()},members:{__eH:null,__eI:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,_getLayout:function(){return this.__eQ;
},_setLayout:function(bc){{};

if(this.__eQ){this.__eQ.connectToWidget(null);
}
if(bc){bc.connectToWidget(this);
}this.__eQ=bc;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var J=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(J);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(J);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eR:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var fY=qx.theme.manager.Decoration.getInstance();
var gb=fY.resolve(a).getInsets();
var ga=fY.resolve(b).getInsets();

if(gb.top!=ga.top||gb.right!=ga.right||gb.bottom!=ga.bottom||gb.left!=ga.left){return true;
}return false;
},renderLayout:function(bD,top,bE,bF){var bO=arguments.callee.base.call(this,bD,top,bE,bF);
if(!bO){return;
}var bH=this.getContainerElement();
var content=this.getContentElement();
var bL=bO.size||this._updateInsets;
var bP=dN;
var bM={};
if(bO.position){bM.left=bD+bP;
bM.top=top+bP;
}if(bO.size){bM.width=bE+bP;
bM.height=bF+bP;
}
if(bO.position||bO.size){bH.setStyles(bM);
}
if(bL||bO.local||bO.margin){var bG=this.getInsets();
var innerWidth=bE-bG.left-bG.right;
var innerHeight=bF-bG.top-bG.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bJ={};

if(this._updateInsets){bJ.left=bG.left+bP;
bJ.top=bG.top+bP;
}
if(bL){bJ.width=innerWidth+bP;
bJ.height=innerHeight+bP;
}
if(bL||this._updateInsets){content.setStyles(bJ);
}
if(bO.size){var bN=this.__eN;

if(bN){bN.setStyles({width:bE+dN,height:bF+dN});
}}
if(bO.size||this._updateInsets){if(this.__eL){this.__eL.resize(bE,bF);
}}
if(bO.size){if(this.__eM){var bG=this.__eM.getInsets();
var bK=bE+bG.left+bG.right;
var bI=bF+bG.top+bG.bottom;
this.__eM.resize(bK,bI);
}}
if(bL||bO.local||bO.margin){if(this.__eQ&&this.hasLayoutChildren()){this.__eQ.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(bO.position&&this.hasListener(dP)){this.fireDataEvent(dP,this.getBounds());
}
if(bO.size&&this.hasListener(dz)){this.fireDataEvent(dz,this.getBounds());
}delete this._updateInsets;
return bO;
},__eS:null,clearSeparators:function(){var w=this.__eS;

if(!w){return;
}var x=qx.ui.core.Widget.__eJ;
var content=this.getContentElement();
var v;

for(var i=0,l=w.length;i<l;i++){v=w[i];
x.poolDecorator(v);
content.remove(v);
}w.length=0;
},renderSeparator:function(fn,fo){var fp=qx.ui.core.Widget.__eJ.getDecoratorElement(fn);
this.getContentElement().add(fp);
fp.resize(fo.width,fo.height);
fp.setStyles({left:fo.left+dN,top:fo.top+dN});
if(!this.__eS){this.__eS=[fp];
}else{this.__eS.push(fp);
}},_computeSizeHint:function(){var ff=this.getWidth();
var fe=this.getMinWidth();
var fa=this.getMaxWidth();
var fd=this.getHeight();
var fb=this.getMinHeight();
var fc=this.getMaxHeight();
{};
var fg=this._getContentHint();
var eY=this.getInsets();
var fi=eY.left+eY.right;
var fh=eY.top+eY.bottom;

if(ff==null){ff=fg.width+fi;
}
if(fd==null){fd=fg.height+fh;
}
if(fe==null){fe=fi;

if(fg.minWidth!=null){fe+=fg.minWidth;
}}
if(fb==null){fb=fh;

if(fg.minHeight!=null){fb+=fg.minHeight;
}}
if(fa==null){if(fg.maxWidth==null){fa=Infinity;
}else{fa=fg.maxWidth+fi;
}}
if(fc==null){if(fg.maxHeight==null){fc=Infinity;
}else{fc=fg.maxHeight+fh;
}}return {width:ff,minWidth:fe,maxWidth:fa,height:fd,minHeight:fb,maxHeight:fc};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__eQ){this.__eQ.invalidateLayoutCache();
}},_getContentHint:function(){var fT=this.__eQ;

if(fT){if(this.hasLayoutChildren()){var fS;
var fU=fT.getSizeHint();
{};
return fU;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(ej){var eo=this.getInsets();
var er=eo.left+eo.right;
var eq=eo.top+eo.bottom;
var ep=ej-er;
var em=this._getLayout();

if(em&&em.hasHeightForWidth()){var ek=em.getHeightForWidth(ej);
}else{ek=this._getContentHeightForWidth(ep);
}var en=ek+eq;
return en;
},_getContentHeightForWidth:function(gh){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var fA=this.getPaddingRight();
var fC=this.getPaddingBottom();
var fB=this.getPaddingLeft();

if(this.__eL){var fz=this.__eL.getInsets();
{};
top+=fz.top;
fA+=fz.right;
fC+=fz.bottom;
fB+=fz.left;
}return {"top":top,"right":fA,"bottom":fC,"left":fB};
},getInnerSize:function(){var bt=this.getBounds();

if(!bt){return null;
}var bs=this.getInsets();
return {width:bt.width-bs.left-bs.right,height:bt.height-bs.top-bs.bottom};
},show:function(){this.setVisibility(dJ);
},hide:function(){this.setVisibility(dn);
},exclude:function(){this.setVisibility(dF);
},isVisible:function(){return this.getVisibility()===dJ;
},isHidden:function(){return this.getVisibility()!==dJ;
},isExcluded:function(){return this.getVisibility()===dF;
},isSeeable:function(){var gW=this.getContainerElement().getDomElement();

if(gW){return gW.offsetWidth>0;
}var gV=this;

do{if(!gV.isVisible()){return false;
}
if(gV.isRootWidget()){return true;
}gV=gV.getLayoutParent();
}while(gV);
return false;
},_createContainerElement:function(){var I=new qx.html.Element(dR);
{};
I.setStyles({"position":dT,"zIndex":0});
I.setAttribute(dA,this.toHashCode());
{};
return I;
},__eT:function(){var fN=this._createContentElement();
{};
fN.setStyles({"position":dT,"zIndex":10});
return fN;
},_createContentElement:function(){var es=new qx.html.Element(dR);
es.setStyles({"overflowX":dn,"overflowY":dn});
return es;
},getContainerElement:function(){return this.__eH;
},getContentElement:function(){return this.__eI;
},getDecoratorElement:function(){return this.__eL||null;
},getShadowElement:function(){return this.__eM||null;
},__eU:null,getLayoutChildren:function(){var fF=this.__eU;

if(!fF){return this.__eV;
}var fG;

for(var i=0,l=fF.length;i<l;i++){var fE=fF[i];

if(fE.hasUserBounds()||fE.isExcluded()){if(fG==null){fG=fF.concat();
}qx.lang.Array.remove(fG,fE);
}}return fG||fF;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var f=this.__eQ;

if(f){f.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bq=this.__eU;

if(!bq){return false;
}var br;

for(var i=0,l=bq.length;i<l;i++){br=bq[i];

if(!br.hasUserBounds()&&!br.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eV:[],_getChildren:function(){return this.__eU||this.__eV;
},_indexOf:function(bu){var bv=this.__eU;

if(!bv){return -1;
}return bv.indexOf(bu);
},_hasChildren:function(){var et=this.__eU;
return et!=null&&(!!et[0]);
},addChildrenToQueue:function(ge){var gf=this.__eU;

if(!gf){return;
}var gg;

for(var i=0,l=gf.length;i<l;i++){gg=gf[i];
ge[gg.$$hash]=gg;
gg.addChildrenToQueue(ge);
}},_add:function(gK,gL){if(gK.getLayoutParent()==this){qx.lang.Array.remove(this.__eU,gK);
}
if(this.__eU){this.__eU.push(gK);
}else{this.__eU=[gK];
}this.__eW(gK,gL);
},_addAt:function(gs,gt,gu){if(!this.__eU){this.__eU=[];
}if(gs.getLayoutParent()==this){qx.lang.Array.remove(this.__eU,gs);
}var gv=this.__eU[gt];

if(gv===gs){return gs.setLayoutProperties(gu);
}
if(gv){qx.lang.Array.insertBefore(this.__eU,gs,gv);
}else{this.__eU.push(gs);
}this.__eW(gs,gu);
},_addBefore:function(gx,gy,gz){{};

if(gx==gy){return;
}
if(!this.__eU){this.__eU=[];
}if(gx.getLayoutParent()==this){qx.lang.Array.remove(this.__eU,gx);
}qx.lang.Array.insertBefore(this.__eU,gx,gy);
this.__eW(gx,gz);
},_addAfter:function(bR,bS,bT){{};

if(bR==bS){return;
}
if(!this.__eU){this.__eU=[];
}if(bR.getLayoutParent()==this){qx.lang.Array.remove(this.__eU,bR);
}qx.lang.Array.insertAfter(this.__eU,bR,bS);
this.__eW(bR,bT);
},_remove:function(fX){if(!this.__eU){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__eU,fX);
this.__eX(fX);
},_removeAt:function(ba){if(!this.__eU){throw new Error("This widget has no children!");
}var bb=this.__eU[ba];
qx.lang.Array.removeAt(this.__eU,ba);
this.__eX(bb);
return bb;
},_removeAll:function(){if(!this.__eU){return;
}var gw=this.__eU.concat();
this.__eU.length=0;

for(var i=gw.length-1;i>=0;i--){this.__eX(gw[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eW:function(K,L){{};
var parent=K.getLayoutParent();

if(parent&&parent!=this){parent._remove(K);
}K.setLayoutParent(this);
if(L){K.setLayoutProperties(L);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(K);
}},__eX:function(bQ){{};

if(bQ.getLayoutParent()!==this){throw new Error("Remove Error: "+bQ+" is not a child of this widget!");
}bQ.setLayoutParent(null);
if(this.__eQ){this.__eQ.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bQ);
}},capture:function(gX){this.getContainerElement().capture(gX);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eD,eE,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__eN){return;
}var fH=this.__eN=new qx.html.Element;
{};
fH.setStyles({position:dT,top:0,left:0,zIndex:7});
var fI=this.getBounds();

if(fI){this.__eN.setStyles({width:fI.width+dN,height:fI.height+dN});
}if(qx.core.Variant.isSet(dS,dg)){fH.setStyles({backgroundImage:cm+qx.util.ResourceManager.getInstance().toUri(dr)+cl,backgroundRepeat:ed});
}this.getContainerElement().add(fH);
},_applyDecorator:function(gl,gm){{};
var gq=qx.ui.core.Widget.__eJ;
var go=this.getContainerElement();
if(!this.__eN&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(gm){go.remove(this.__eL);
gq.poolDecorator(this.__eL);
}if(gl){var gp=this.__eL=gq.getDecoratorElement(gl);
gp.setStyle(dB,5);
var gn=this.getBackgroundColor();
gp.tint(gn);
go.add(gp);
}else{delete this.__eL;
this._applyBackgroundColor(this.getBackgroundColor());
}if(gl&&!gm&&gn){this.getContainerElement().setStyle(dj,null);
}if(this.__eR(gm,gl)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(gl){var gr=this.getBounds();

if(gr){gp.resize(gr.width,gr.height);
this.__eN&&
this.__eN.setStyles({width:gr.width+dN,height:gr.height+dN});
}}},_applyShadow:function(fq,fr){var fy=qx.ui.core.Widget.__eK;
var ft=this.getContainerElement();
if(fr){ft.remove(this.__eM);
fy.poolDecorator(this.__eM);
}if(fq){var fv=this.__eM=fy.getDecoratorElement(fq);
ft.add(fv);
var fx=fv.getInsets();
fv.setStyles({left:(-fx.left)+dN,top:(-fx.top)+dN});
var fw=this.getBounds();

if(fw){var fu=fw.width+fx.left+fx.right;
var fs=fw.height+fx.top+fx.bottom;
fv.resize(fu,fs);
}fv.tint(null);
}else{delete this.__eM;
}},_applyToolTipText:function(gD,gE){if(qx.core.Variant.isSet(dX,dH)){if(this.__eP){return;
}var gF=qx.locale.Manager.getInstance();
this.__eP=gF.addListener(dt,function(){if(gD&&gD.translate){this.setToolTipText(gD.translate());
}},this);
}},_applyTextColor:function(s,t){},_applyZIndex:function(fJ,fK){this.getContainerElement().setStyle(dB,fJ==null?0:fJ);
},_applyVisibility:function(F,G){var H=this.getContainerElement();

if(F===dJ){H.show();
}else{H.hide();
}var parent=this.$$parent;

if(parent&&(G==null||F==null||G===dF||F===dF)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(W,X){this.getContainerElement().setStyle(dD,W==1?null:W);
if(qx.core.Variant.isSet(dS,dg)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var Y=(W==1||W==null)?null:0.99;
this.getContentElement().setStyle(dD,Y);
}}},_applyCursor:function(bf,bg){if(bf==null&&!this.isSelectable()){bf=dC;
}this.getContainerElement().setStyle(cP,bf,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(eu,ev){var ew=this.getBackgroundColor();
var ey=this.getContainerElement();

if(this.__eL){this.__eL.tint(ew);
ey.setStyle(dj,null);
}else{var ex=qx.theme.manager.Color.getInstance().resolve(ew);
ey.setStyle(dj,ex);
}},_applyFont:function(q,r){},__eY:null,$$stateChanges:null,_forwardStates:null,hasState:function(y){var z=this.__eY;
return z&&z[y];
},addState:function(bl){var bm=this.__eY;

if(!bm){bm=this.__eY={};
}
if(bm[bl]){return;
}this.__eY[bl]=true;
if(bl===dU){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bp=this.__fc;

if(forward&&forward[bl]&&bp){var bn;

for(var bo in bp){bn=bp[bo];

if(bn instanceof qx.ui.core.Widget){bp[bo].addState(bl);
}}}},removeState:function(eF){var eG=this.__eY;

if(!eG||!eG[eF]){return;
}delete this.__eY[eF];
if(eF===dU){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var eJ=this.__fc;

if(forward&&forward[eF]&&eJ){for(var eI in eJ){var eH=eJ[eI];

if(eH instanceof qx.ui.core.Widget){eH.removeState(eF);
}}}},replaceState:function(g,h){var j=this.__eY;

if(!j){j=this.__eY={};
}
if(!j[h]){j[h]=true;
}
if(j[g]){delete j[g];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var n=this.__fc;

if(forward&&forward[h]&&n){for(var m in n){var k=n[m];

if(k instanceof qx.ui.core.Widget){k.replaceState(g,h);
}}}},__fa:null,__fb:null,syncAppearance:function(){var eQ=this.__eY;
var eP=this.__fa;
var eR=qx.theme.manager.Appearance.getInstance();
var eN=qx.core.Property.$$method.setThemed;
var eV=qx.core.Property.$$method.resetThemed;
if(this.__fb){delete this.__fb;
if(eP){var eM=eR.styleFrom(eP,eQ,null,this.getAppearance());
if(eM){eP=null;
}}}if(!eP){var eO=this;
var eU=[];

do{eU.push(eO.$$subcontrol||eO.getAppearance());
}while(eO=eO.$$subparent);
eP=this.__fa=eU.reverse().join(cA).replace(/#[0-9]+/g,cz);
}var eS=eR.styleFrom(eP,eQ,null,this.getAppearance());

if(eS){var eT;

if(eM){for(var eT in eM){if(eS[eT]===undefined){this[eV[eT]]();
}}}{};
for(var eT in eS){eS[eT]===undefined?this[eV[eT]]():this[eN[eT]](eS[eT]);
}}else if(eM){for(var eT in eM){this[eV[eT]]();
}}this.fireDataEvent(eh,this.__eY);
},_applyAppearance:function(gc,gd){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__eO){qx.ui.core.queue.Appearance.add(this);
this.__eO=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__fb=true;
qx.ui.core.queue.Appearance.add(this);
var C=this.__fc;

if(C){var A;

for(var B in C){A=C[B];

if(A instanceof qx.ui.core.Widget){A.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var eA=this;

while(eA.getAnonymous()){eA=eA.getLayoutParent();

if(!eA){return null;
}}return eA;
},getFocusTarget:function(){var gC=this;

if(!gC.getEnabled()){return null;
}
while(gC.getAnonymous()||!gC.getFocusable()){gC=gC.getLayoutParent();

if(!gC||!gC.getEnabled()){return null;
}}return gC;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(bh,bi){var bj=this.getFocusElement();
if(bh){var bk=this.getTabIndex();

if(bk==null){bk=1;
}bj.setAttribute(dk,bk);
if(qx.core.Variant.isSet(dS,dg)){bj.setAttribute(cn,cx);
}else{bj.setStyle(cp,cq);
}}else{if(bj.isNativelyFocusable()){bj.setAttribute(dk,-1);
}else if(bi){bj.setAttribute(dk,null);
}}},_applyKeepFocus:function(c){var d=this.getFocusElement();
d.setAttribute(ds,c?dH:null);
},_applyKeepActive:function(eW){var eX=this.getContainerElement();
eX.setAttribute(dc,eW?dH:null);
},_applyTabIndex:function(U){if(U==null){U=1;
}else if(U<1||U>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&U!=null){this.getFocusElement().setAttribute(dk,U);
}},_applySelectable:function(fD){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(fD);
this.getContentElement().setSelectable(fD);
},_applyEnabled:function(bw,bx){if(bw===false){this.addState(dO);
this.removeState(dU);
if(this.isFocusable()){this.removeState(di);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(dO);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gM,gN,name){},_applyContextMenu:function(gI,gJ){if(gJ){gJ.removeState(dm);

if(gJ.getOpener()==this){gJ.resetOpener();
}
if(!gI){this.removeListener(dm,this._onContextMenuOpen);
gJ.removeListener(dh,this._onBeforeContextMenuOpen,this);
}}
if(gI){gI.setOpener(this);
gI.addState(dm);

if(!gJ){this.addListener(dm,this._onContextMenuOpen);
gI.addListener(dh,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==dJ&&this.hasListener(bW)){this.fireDataEvent(bW,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(D,E){if(!this.isEnabled()&&D===true){D=false;
}qx.ui.core.DragDropCursor.getInstance();
if(D){this.addListener(dW,this._onDragStart);
this.addListener(dQ,this._onDrag);
this.addListener(dw,this._onDragEnd);
this.addListener(dx,this._onDragChange);
}else{this.removeListener(dW,this._onDragStart);
this.removeListener(dQ,this._onDrag);
this.removeListener(dw,this._onDragEnd);
this.removeListener(dx,this._onDragChange);
}this.getContainerElement().setAttribute(ei,D?dH:null);
},_applyDroppable:function(gA,gB){if(!this.isEnabled()&&gA===true){gA=false;
}this.getContainerElement().setAttribute(cQ,gA?dH:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(dC);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var eB=qx.ui.core.DragDropCursor.getInstance();
var eC=e.getCurrentAction();
eC?eB.setAction(eC):eB.resetAction();
},visualizeFocus:function(){this.addState(di);
},visualizeBlur:function(){this.removeState(di);
},scrollChildIntoView:function(gR,gS,gT,gU){this.scrollChildIntoViewX(gR,gS,gU);
this.scrollChildIntoViewY(gR,gT,gU);
},scrollChildIntoViewX:function(gO,gP,gQ){this.getContentElement().scrollChildIntoViewX(gO.getContainerElement(),gP,gQ);
},scrollChildIntoViewY:function(bA,bB,bC){this.getContentElement().scrollChildIntoViewY(bA.getContainerElement(),bB,bC);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(ez){if(!this.__fc){return false;
}return !!this.__fc[ez];
},__fc:null,_getCreatedChildControls:function(){return this.__fc;
},getChildControl:function(gi,gj){if(!this.__fc){if(gj){return null;
}this.__fc={};
}var gk=this.__fc[gi];

if(gk){return gk;
}
if(gj===true){return null;
}return this._createChildControl(gi);
},_showChildControl:function(fV){var fW=this.getChildControl(fV);
fW.show();
return fW;
},_excludeChildControl:function(bd){var be=this.getChildControl(bd,true);

if(be){be.exclude();
}},_isChildControlVisible:function(fL){var fM=this.getChildControl(fL,true);

if(fM){return fM.isVisible();
}return false;
},_createChildControl:function(M){if(!this.__fc){this.__fc={};
}else if(this.__fc[M]){throw new Error("Child control '"+M+"' already created!");
}var Q=M.indexOf(cD);

if(Q==-1){var N=this._createChildControlImpl(M);
}else{var N=this._createChildControlImpl(M.substring(0,Q));
}
if(!N){throw new Error("Unsupported control: "+M);
}N.$$subcontrol=M;
N.$$subparent=this;
var O=this.__eY;
var forward=this._forwardStates;

if(O&&forward&&N instanceof qx.ui.core.Widget){for(var P in O){if(forward[P]){N.addState(P);
}}}this.fireDataEvent(cd,N);
return this.__fc[M]=N;
},_createChildControlImpl:function(u){return null;
},_disposeChildControls:function(){var fR=this.__fc;

if(!fR){return;
}var fP=qx.ui.core.Widget;

for(var fQ in fR){var fO=fR[fQ];

if(!fP.contains(this,fO)){fO.destroy();
}else{fO.dispose();
}}delete this.__fc;
},_findTopControl:function(){var T=this;

while(T){if(!T.$$subparent){return T;
}T=T.$$subparent;
}return null;
},getContainerLocation:function(eK){var eL=this.getContainerElement().getDomElement();
return eL?qx.bom.element.Location.get(eL,eK):null;
},getContentLocation:function(R){var S=this.getContentElement().getDomElement();
return S?qx.bom.element.Location.get(S,R):null;
},setDomLeft:function(gG){var gH=this.getContainerElement().getDomElement();

if(gH){gH.style.left=gG+dN;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(o){var p=this.getContainerElement().getDomElement();

if(p){p.style.top=o+dN;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(by,top){var bz=this.getContainerElement().getDomElement();

if(bz){bz.style.left=by+dN;
bz.style.top=top+dN;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var bU=arguments.callee.base.call(this);

if(this.getChildren){var bV=this.getChildren();

for(var i=0,l=bV.length;i<l;i++){bU.add(bV[i].clone());
}}return bU;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(dX,dH)){if(this.__eP){qx.locale.Manager.getInstance().removeListenerById(this.__eP);
}}this.getContainerElement().setAttribute(dA,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var fm=qx.ui.core.Widget;
var fl=this.getContainerElement();

if(this.__eL){fl.remove(this.__eL);
fm.__eJ.poolDecorator(this.__eL);
}
if(this.__eM){fl.remove(this.__eM);
fm.__eK.poolDecorator(this.__eM);
}this.clearSeparators();
this.__eL=this.__eM=this.__eS=null;
}else{this._disposeArray(ce);
this._disposeObjects(cW,cu);
}this._disposeArray(cY);
this.__eY=this.__fc=null;
this._disposeObjects(cg,cH,ee,cL);
}});
})();
(function(){var e="qx.event.type.Data",d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this._setLayout(a);
}},events:{addChildWidget:e,removeChildWidget:e},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(c,qx.event.type.Data,[h]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(b,qx.event.type.Data,[i]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var x="keep-align",w="interval",v="Integer",u="direct",t="best-fit",s="mouse",r="bottom-left",q="disappear",p="Boolean",o="bottom-right",L="widget",K="qx.ui.core.MPlacement",J="left-top",I="offsetRight",H="shorthand",G="offsetLeft",F="top-left",E="appear",D="offsetBottom",C="top-right",A="offsetTop",B="right-bottom",y="right-top",z="left-bottom";
qx.Mixin.define(K,{properties:{position:{check:[F,C,r,o,J,z,y,B],init:r,themeable:true},placeMethod:{check:[L,s],init:s,themeable:true},domMove:{check:p,init:false},placementModeX:{check:[u,x,t],init:x,themeable:true},placementModeY:{check:[u,x,t],init:x,themeable:true},offsetLeft:{check:v,init:0,themeable:true},offsetTop:{check:v,init:0,themeable:true},offsetRight:{check:v,init:0,themeable:true},offsetBottom:{check:v,init:0,themeable:true},offset:{group:[A,I,D,G],mode:H,themeable:true}},members:{__fd:null,getLayoutLocation:function(h){var k,j,l,top;
j=h.getBounds();
l=j.left;
top=j.top;
var m=j;
h=h.getLayoutParent();

while(h&&!h.isRootWidget()){j=h.getBounds();
l+=j.left;
top+=j.top;
k=h.getInsets();
l+=k.left;
top+=k.top;
h=h.getLayoutParent();
}if(h.isRootWidget()){var i=h.getContainerLocation();

if(i){l+=i.left;
top+=i.top;
}}return {left:l,top:top,right:l+m.width,bottom:top+m.height};
},moveTo:function(n,top){if(this.getDomMove()){this.setDomPosition(n,top);
}else{this.setLayoutProperties({left:n,top:top});
}},placeToWidget:function(M,N){if(N){this.__fd=qx.lang.Function.bind(this.placeToWidget,this,M,false);
qx.event.Idle.getInstance().addListener(w,this.__fd);
this.addListener(q,function(){if(this.__fd){qx.event.Idle.getInstance().removeListener(w,this.__fd);
this.__fd=null;
}},this);
}var O=M.getContainerLocation()||this.getLayoutLocation(M);
this.__ff(O);
},placeToMouse:function(event){var U=event.getDocumentLeft();
var top=event.getDocumentTop();
var T={left:U,top:top,right:U,bottom:top};
this.__ff(T);
},placeToElement:function(a,b){var location=qx.bom.element.Location.get(a);
var c={left:location.left,top:location.top,right:location.left+a.offsetWidth,bottom:location.top+a.offsetHeight};
if(b){this.__fd=qx.lang.Function.bind(this.placeToElement,this,a,false);
qx.event.Idle.getInstance().addListener(w,this.__fd);
this.addListener(q,function(){if(this.__fd){qx.event.Idle.getInstance().removeListener(w,this.__fd);
this.__fd=null;
}},this);
}this.__ff(c);
},placeToPoint:function(R){var S={left:R.left,top:R.top,right:R.left,bottom:R.top};
this.__ff(S);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__fe:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(E,function(){this.__fe(V);
},this);
}else{V.call(this,W);
}},__ff:function(X){this.__fe(function(f){var g=qx.util.placement.Placement.compute(f,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(g.left,g.top);
});
},setSmart:function(P){{};
var Q=P?x:u;
this.set({placementModeX:Q,placementModeY:Q});
},getSmart:function(){{};
var d=this.getPlacementModeX()==x?true:false;
var e=this.getPlacementModeY()==x?true:false;
return d&&e;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__fd){qx.event.Idle.getInstance().removeListener(w,this.__fd);
}}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){arguments.callee.base.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var n="atom",m="Integer",l="String",k="_applyRich",j="qx.ui.tooltip.ToolTip",i="_applyIcon",h="tooltip",g="qx.ui.core.Widget",f="mouseover",d="Boolean",c="_applyLabel";
qx.Class.define(j,{extend:qx.ui.popup.Popup,construct:function(a,b){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(n);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}this.addListener(f,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:h},showTimeout:{check:m,init:700,themeable:true},hideTimeout:{check:m,init:4000,themeable:true},label:{check:l,nullable:true,apply:c},icon:{check:l,nullable:true,apply:i,themeable:true},rich:{check:d,init:false,apply:k},opener:{check:g,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case n:y=new qx.ui.basic.Atom;
this._add(y);
break;
}return y||arguments.callee.base.call(this,x);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(n);
u==null?w.resetIcon:w.setIcon(u);
},_applyLabel:function(r,s){var t=this.getChildControl(n);
r==null?t.resetLabel():t.setLabel(r);
},_applyRich:function(o,p){var q=this.getChildControl(n);
q.setRich(o);
}}});
})();
(function(){var j="qx.ui.core.queue.Layout",h="layout";
qx.Class.define(j,{statics:{__fg:{},remove:function(k){delete this.__fg[k.$$hash];
},add:function(a){this.__fg[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(h);
},flush:function(){var p=this.__fj();
for(var i=p.length-1;i>=0;i--){var q=p[i];
if(q.hasValidLayout()){continue;
}if(q.isRootWidget()&&!q.hasUserBounds()){var s=q.getSizeHint();
q.renderLayout(0,0,s.width,s.height);
}else{var r=q.getBounds();
q.renderLayout(r.left,r.top,r.width,r.height);
}}},getNestingLevel:function(l){var m=this.__fi;
var o=0;
var parent=l;
while(true){if(m[parent.$$hash]!=null){o+=m[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
o+=1;
}var n=o;

while(l&&l!==parent){m[l.$$hash]=n--;
l=l.$$parent;
}return o;
},__fh:function(){var g=qx.ui.core.queue.Visibility;
this.__fi={};
var f=[];
var e=this.__fg;
var b,d;

for(var c in e){b=e[c];

if(g.isVisible(b)){d=this.getNestingLevel(b);
if(!f[d]){f[d]={};
}f[d][c]=b;
delete e[c];
}}return f;
},__fj:function(){var w=[];
var y=this.__fh();

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
(function(){var b="qx.event.handler.UserAction";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__fk=a;
this.__fl=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fk:null,__fl:null,canHandleEvent:function(g,h){},registerEvent:function(c,d,e){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__fk=this.__fl=null;
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var d="qx.util.DeferredCallManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){this.__fm={};
this.__fn=qx.lang.Function.bind(this.__fr,this);
this.__fo=false;
},members:{__fp:null,__fq:null,__fm:null,__fo:null,__fn:null,schedule:function(a){if(this.__fp==null){this.__fp=window.setTimeout(this.__fn,0);
}var b=a.toHashCode();
if(this.__fq&&this.__fq[b]){return;
}this.__fm[b]=a;
this.__fo=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__fq&&this.__fq[f]){this.__fq[f]=null;
return;
}delete this.__fm[f];
if(qx.lang.Object.isEmpty(this.__fm)&&this.__fp!=null){window.clearTimeout(this.__fp);
this.__fp=null;
}},__fr:qx.event.GlobalError.observeMethod(function(){this.__fp=null;
while(this.__fo){this.__fq=qx.lang.Object.clone(this.__fm);
this.__fm={};
this.__fo=false;

for(var h in this.__fq){var g=this.__fq[h];

if(g){this.__fq[h]=null;
g.call();
}}}this.__fq=null;
})},destruct:function(){if(this.__fp!=null){window.clearTimeout(this.__fp);
}this.__fn=this.__fm=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a,b){arguments.callee.base.call(this);
this.__fs=a;
this.__ft=b||null;
this.__fu=qx.util.DeferredCallManager.getInstance();
},members:{__fs:null,__ft:null,__fu:null,cancel:function(){this.__fu.cancel(this);
},schedule:function(){this.__fu.schedule(this);
},call:function(){this.__ft?this.__fs.apply(this.__ft):this.__fs();
}},destruct:function(d,e){this.cancel();
this.__ft=this.__fs=this.__fu=null;
}});
})();
(function(){var dz="element",dy="qx.client",dx="div",dw="",dv="mshtml",du="none",dt="scroll",ds="text",dr="qx.html.Element",dq="|capture|",dT="focus",dS="gecko",dR="blur",dQ="deactivate",dP="capture",dO="userSelect",dN="-moz-none",dM="visible",dL="releaseCapture",dK="|bubble|",dG="qxSelectable",dH="tabIndex",dE="off",dF="__fR",dC="activate",dD="MozUserSelect",dA="normal",dB="webkit",dI="hidden",dJ="on";
qx.Class.define(dr,{extend:qx.core.Object,construct:function(cI){arguments.callee.base.call(this);
this.__fv=cI||dx;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__fw:{},_scheduleFlush:function(cb){qx.html.Element.__ge.schedule();
},flush:function(){var w;
{};
var o=this.__fx();
var n=o.getFocus();

if(n&&this.__fB(n)){o.blur(n);
}var F=o.getActive();

if(F&&this.__fB(F)){qx.bom.Element.deactivate(F);
}var r=this.__fz();

if(r&&this.__fB(r)){qx.bom.Element.releaseCapture(r);
}var z=[];
var A=this._modified;

for(var v in A){w=A[v];
if(w.__fV()){if(w.__fC&&qx.dom.Hierarchy.isRendered(w.__fC)){z.push(w);
}else{{};
w.__fU();
}delete A[v];
}}
for(var i=0,l=z.length;i<l;i++){w=z[i];
{};
w.__fU();
}var t=this._visibility;

for(var v in t){w=t[v];
{};
w.__fC.style.display=w.__fF?dw:du;
if(qx.core.Variant.isSet(dy,dv)){if(!(document.documentMode>=8)){w.__fC.style.visibility=w.__fF?dM:dI;
}}delete t[v];
}var scroll=this._scroll;

for(var v in scroll){w=scroll[v];
var G=w.__fC;

if(G&&G.offsetWidth){var q=true;
if(w.__fI!=null){w.__fC.scrollLeft=w.__fI;
delete w.__fI;
}if(w.__fJ!=null){w.__fC.scrollTop=w.__fJ;
delete w.__fJ;
}var C=w.__fG;

if(C!=null){var u=C.element.getDomElement();

if(u&&u.offsetWidth){qx.bom.element.Scroll.intoViewX(u,G,C.align);
delete w.__fG;
}else{q=false;
}}var D=w.__fH;

if(D!=null){var u=D.element.getDomElement();

if(u&&u.offsetWidth){qx.bom.element.Scroll.intoViewY(u,G,D.align);
delete w.__fH;
}else{q=false;
}}if(q){delete scroll[v];
}}}var p={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var E=this._actions[i];
var B=E.element.__fC;

if(!B||!p[E.type]&&!E.element.__fV()){continue;
}var s=E.args;
s.unshift(B);
qx.bom.Element[E.type].apply(qx.bom.Element,s);
}this._actions=[];
for(var v in this.__fw){var m=this.__fw[v];
var G=m.element.__fC;

if(G){qx.bom.Selection.set(G,m.start,m.end);
delete this.__fw[v];
}}qx.event.handler.Appear.refresh();
},__fx:function(){if(!this.__fy){var P=qx.event.Registration.getManager(window);
this.__fy=P.getHandler(qx.event.handler.Focus);
}return this.__fy;
},__fz:function(){if(!this.__fA){var cB=qx.event.Registration.getManager(window);
this.__fA=cB.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__fA.getCaptureElement();
},__fB:function(g){var h=qx.core.ObjectRegistry.fromHashCode(g.$$element);
return h&&!h.__fV();
}},members:{__fv:null,__fC:null,__fD:false,__fE:true,__fF:true,__fG:null,__fH:null,__fI:null,__fJ:null,__fK:null,__fL:null,__fM:null,__fN:null,__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fT:null,_scheduleChildrenUpdate:function(){if(this.__fS){return;
}this.__fS=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
},_createDomElement:function(){return qx.bom.Element.create(this.__fv);
},__fU:function(){{};
var cy=this.__fR;

if(cy){var length=cy.length;
var cz;

for(var i=0;i<length;i++){cz=cy[i];

if(cz.__fF&&cz.__fE&&!cz.__fC){cz.__fU();
}}}
if(!this.__fC){this.__fC=this._createDomElement();
this.__fC.$$element=this.$$hash;
this._copyData(false);

if(cy&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fS){this._syncChildren();
}}delete this.__fS;
},_insertChildren:function(){var co=this.__fR;
var length=co.length;
var cq;

if(length>2){var cp=document.createDocumentFragment();

for(var i=0;i<length;i++){cq=co[i];

if(cq.__fC&&cq.__fE){cp.appendChild(cq.__fC);
}}this.__fC.appendChild(cp);
}else{var cp=this.__fC;

for(var i=0;i<length;i++){cq=co[i];

if(cq.__fC&&cq.__fE){cp.appendChild(cq.__fC);
}}}},_syncChildren:function(){var bO;
var bT=qx.core.ObjectRegistry;
var bK=this.__fR;
var bR=bK.length;
var bL;
var bP;
var bN=this.__fC;
var bQ=bN.childNodes;
var bM=0;
var bS;
{};
for(var i=bQ.length-1;i>=0;i--){bS=bQ[i];
bP=bT.fromHashCode(bS.$$element);

if(!bP||!bP.__fE||bP.__fT!==this){bN.removeChild(bS);
{};
}}for(var i=0;i<bR;i++){bL=bK[i];
if(bL.__fE){bP=bL.__fC;
bS=bQ[bM];

if(!bP){continue;
}if(bP!=bS){if(bS){bN.insertBefore(bP,bS);
}else{bN.appendChild(bP);
}{};
}bM++;
}}{};
},_copyData:function(bz){var bD=this.__fC;
var bC=this.__fO;

if(bC){var bA=qx.bom.element.Attribute;

for(var bE in bC){bA.set(bD,bE,bC[bE]);
}}var bC=this.__fN;

if(bC){var bB=qx.bom.element.Style;

if(bz){bB.setStyles(bD,bC);
}else{bB.setCss(bD,bB.compile(bC));
}}var bC=this.__fP;

if(bC){for(var bE in bC){this._applyProperty(bE,bC[bE]);
}}var bC=this.__fQ;

if(bC){qx.event.Registration.getManager(bD).importListeners(bD,bC);
delete this.__fQ;
}},_syncData:function(){var di=this.__fC;
var dh=qx.bom.element.Attribute;
var df=qx.bom.element.Style;
var dg=this.__fL;

if(dg){var dl=this.__fO;

if(dl){var dj;

for(var dk in dg){dj=dl[dk];

if(dj!==undefined){dh.set(di,dk,dj);
}else{dh.reset(di,dk);
}}}this.__fL=null;
}var dg=this.__fK;

if(dg){var dl=this.__fN;

if(dl){var de={};

for(var dk in dg){de[dk]=dl[dk];
}df.setStyles(di,de);
}this.__fK=null;
}var dg=this.__fM;

if(dg){var dl=this.__fP;

if(dl){var dj;

for(var dk in dg){this._applyProperty(dk,dl[dk]);
}}this.__fM=null;
}},__fV:function(){var ck=this;
while(ck){if(ck.__fD){return true;
}
if(!ck.__fE||!ck.__fF){return false;
}ck=ck.__fT;
}return false;
},__fW:function(cw){if(cw.__fT===this){throw new Error("Child is already in: "+cw);
}
if(cw.__fD){throw new Error("Root elements could not be inserted into other ones.");
}if(cw.__fT){cw.__fT.remove(cw);
}cw.__fT=this;
if(!this.__fR){this.__fR=[];
}if(this.__fC){this._scheduleChildrenUpdate();
}},__fX:function(W){if(W.__fT!==this){throw new Error("Has no child: "+W);
}if(this.__fC){this._scheduleChildrenUpdate();
}delete W.__fT;
},__fY:function(bH){if(bH.__fT!==this){throw new Error("Has no child: "+bH);
}if(this.__fC){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fR||null;
},getChild:function(cJ){var cK=this.__fR;
return cK&&cK[cJ]||null;
},hasChildren:function(){var k=this.__fR;
return k&&k[0]!==undefined;
},indexOf:function(K){var L=this.__fR;
return L?L.indexOf(K):-1;
},hasChild:function(Y){var ba=this.__fR;
return ba&&ba.indexOf(Y)!==-1;
},add:function(dX){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fW(arguments[i]);
}this.__fR.push.apply(this.__fR,arguments);
}else{this.__fW(dX);
this.__fR.push(dX);
}return this;
},addAt:function(cF,cG){this.__fW(cF);
qx.lang.Array.insertAt(this.__fR,cF,cG);
return this;
},remove:function(M){var N=this.__fR;

if(!N){return;
}
if(arguments[1]){var O;

for(var i=0,l=arguments.length;i<l;i++){O=arguments[i];
this.__fX(O);
qx.lang.Array.remove(N,O);
}}else{this.__fX(M);
qx.lang.Array.remove(N,M);
}return this;
},removeAt:function(cl){var cm=this.__fR;

if(!cm){throw new Error("Has no children!");
}var cn=cm[cl];

if(!cn){throw new Error("Has no child at this position!");
}this.__fX(cn);
qx.lang.Array.removeAt(this.__fR,cl);
return this;
},removeAll:function(){var dW=this.__fR;

if(dW){for(var i=0,l=dW.length;i<l;i++){this.__fX(dW[i]);
}dW.length=0;
}return this;
},getParent:function(){return this.__fT||null;
},insertInto:function(parent,J){parent.__fW(this);

if(J==null){parent.__fR.push(this);
}else{qx.lang.Array.insertAt(this.__fR,this,J);
}return this;
},insertBefore:function(cx){var parent=cx.__fT;
parent.__fW(this);
qx.lang.Array.insertBefore(parent.__fR,this,cx);
return this;
},insertAfter:function(bX){var parent=bX.__fT;
parent.__fW(this);
qx.lang.Array.insertAfter(parent.__fR,this,bX);
return this;
},moveTo:function(bY){var parent=this.__fT;
parent.__fY(this);
var ca=parent.__fR.indexOf(this);

if(ca===bY){throw new Error("Could not move to same index!");
}else if(ca<bY){bY--;
}qx.lang.Array.removeAt(parent.__fR,ca);
qx.lang.Array.insertAt(parent.__fR,this,bY);
return this;
},moveBefore:function(dY){var parent=this.__fT;
return this.moveTo(parent.__fR.indexOf(dY));
},moveAfter:function(dV){var parent=this.__fT;
return this.moveTo(parent.__fR.indexOf(dV)+1);
},free:function(){var parent=this.__fT;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fR){return;
}parent.__fX(this);
qx.lang.Array.remove(parent.__fR,this);
return this;
},getDomElement:function(){return this.__fC||null;
},getNodeName:function(){return this.__fv;
},setNodeName:function(name){this.__fv=name;
},setRoot:function(bm){this.__fD=bm;
},useMarkup:function(dm){if(this.__fC){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(dy,dv)){var dn=document.createElement(dx);
}else{var dn=qx.html.Element.__ga;

if(!dn){dn=qx.html.Element.__ga=document.createElement(dx);
}}dn.innerHTML=dm;
this.__fC=dn.firstChild;
this.__fC.$$element=this.$$hash;
this._copyData(true);
return this.__fC;
},useElement:function(bg){if(this.__fC){throw new Error("Could not overwrite existing element!");
}this.__fC=bg;
this.__fC.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var I=this.getAttribute(dH);

if(I>=1){return true;
}var H=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(I>=0&&H[this.__fv]){return true;
}return false;
},setSelectable:function(dp){this.setAttribute(dG,dp?dJ:dE);
if(qx.core.Variant.isSet(dy,dB)){this.setStyle(dO,dp?dA:du);
}else if(qx.core.Variant.isSet(dy,dS)){this.setStyle(dD,dp?ds:dN);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__fv];
},include:function(){if(this.__fE){return;
}delete this.__fE;

if(this.__fT){this.__fT._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__fE){return;
}this.__fE=false;

if(this.__fT){this.__fT._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__fE===true;
},show:function(){if(this.__fF){return;
}
if(this.__fC){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}if(this.__fT){this.__fT._scheduleChildrenUpdate();
}delete this.__fF;
},hide:function(){if(!this.__fF){return;
}
if(this.__fC){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}this.__fF=false;
},isVisible:function(){return this.__fF===true;
},scrollChildIntoViewX:function(cr,cs,ct){var cu=this.__fC;
var cv=cr.getDomElement();

if(ct!==false&&cu&&cu.offsetWidth&&cv&&cv.offsetWidth){qx.bom.element.Scroll.intoViewX(cv,cu,cs);
}else{this.__fG={element:cr,align:cs};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}delete this.__fI;
},scrollChildIntoViewY:function(cf,cg,ch){var ci=this.__fC;
var cj=cf.getDomElement();

if(ch!==false&&ci&&ci.offsetWidth&&cj&&cj.offsetWidth){qx.bom.element.Scroll.intoViewY(cj,ci,cg);
}else{this.__fH={element:cf,align:cg};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}delete this.__fJ;
},scrollToX:function(x,bI){var bJ=this.__fC;

if(bI!==true&&bJ&&bJ.offsetWidth){bJ.scrollLeft=x;
}else{this.__fI=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}delete this.__fG;
},getScrollX:function(){var dU=this.__fC;

if(dU){return dU.scrollLeft;
}return this.__fI||0;
},scrollToY:function(y,U){var V=this.__fC;

if(U!==true&&V&&V.offsetWidth){V.scrollTop=y;
}else{this.__fJ=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}delete this.__fH;
},getScrollY:function(){var be=this.__fC;

if(be){return be.scrollTop;
}return this.__fJ||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(dt,this.__gc,this);
},enableScrolling:function(){this.removeListener(dt,this.__gc,this);
},__gb:null,__gc:function(e){if(!this.__gb){this.__gb=true;
this.__fC.scrollTop=0;
this.__fC.scrollLeft=0;
delete this.__gb;
}},getTextSelection:function(){var cL=this.__fC;

if(cL){return qx.bom.Selection.get(cL);
}return null;
},getTextSelectionLength:function(){var bF=this.__fC;

if(bF){return qx.bom.Selection.getLength(bF);
}return null;
},getTextSelectionStart:function(){var cc=this.__fC;

if(cc){return qx.bom.Selection.getStart(cc);
}return null;
},getTextSelectionEnd:function(){var bf=this.__fC;

if(bf){return qx.bom.Selection.getEnd(bf);
}return null;
},setTextSelection:function(bU,bV){var bW=this.__fC;

if(bW){qx.bom.Selection.set(bW,bU,bV);
return;
}qx.html.Element.__fw[this.toHashCode()]={element:this,start:bU,end:bV};
qx.html.Element._scheduleFlush(dz);
},clearTextSelection:function(){var X=this.__fC;

if(X){qx.bom.Selection.clear(X);
}delete qx.html.Element.__fw[this.toHashCode()];
},__gd:function(bu,bv){var bw=qx.html.Element._actions;
bw.push({type:bu,element:this,args:bv||[]});
qx.html.Element._scheduleFlush(dz);
},focus:function(){this.__gd(dT);
},blur:function(){this.__gd(dR);
},activate:function(){this.__gd(dC);
},deactivate:function(){this.__gd(dQ);
},capture:function(j){this.__gd(dP,[j!==false]);
},releaseCapture:function(){this.__gd(dL);
},setStyle:function(cY,da,dc){if(!this.__fN){this.__fN={};
}
if(this.__fN[cY]==da){return;
}
if(da==null){delete this.__fN[cY];
}else{this.__fN[cY]=da;
}if(this.__fC){if(dc){qx.bom.element.Style.set(this.__fC,cY,da);
return this;
}if(!this.__fK){this.__fK={};
}this.__fK[cY]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}return this;
},setStyles:function(bh,bi){var bj=qx.bom.element.Style;

if(!this.__fN){this.__fN={};
}
if(this.__fC){if(!this.__fK){this.__fK={};
}
for(var bl in bh){var bk=bh[bl];

if(this.__fN[bl]==bk){continue;
}
if(bk==null){delete this.__fN[bl];
}else{this.__fN[bl]=bk;
}if(bi){bj.set(this.__fC,bl,bk);
continue;
}this.__fK[bl]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}else{for(var bl in bh){var bk=bh[bl];

if(this.__fN[bl]==bk){continue;
}
if(bk==null){delete this.__fN[bl];
}else{this.__fN[bl]=bk;
}}}return this;
},removeStyle:function(cC,cD){this.setStyle(cC,null,cD);
},getStyle:function(cH){return this.__fN?this.__fN[cH]:null;
},getAllStyles:function(){return this.__fN||null;
},setAttribute:function(cV,cW,cX){if(!this.__fO){this.__fO={};
}
if(this.__fO[cV]==cW){return;
}
if(cW==null){delete this.__fO[cV];
}else{this.__fO[cV]=cW;
}if(this.__fC){if(cX){qx.bom.element.Attribute.set(this.__fC,cV,cW);
return this;
}if(!this.__fL){this.__fL={};
}this.__fL[cV]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}return this;
},setAttributes:function(bb,bc){for(var bd in bb){this.setAttribute(bd,bb[bd],bc);
}return this;
},removeAttribute:function(bx,by){this.setAttribute(bx,null,by);
},getAttribute:function(cA){return this.__fO?this.__fO[cA]:null;
},_applyProperty:function(name,bG){},_setProperty:function(cM,cN,cO){if(!this.__fP){this.__fP={};
}
if(this.__fP[cM]==cN){return;
}
if(cN==null){delete this.__fP[cM];
}else{this.__fP[cM]=cN;
}if(this.__fC){if(cO){this._applyProperty(cM,cN);
return this;
}if(!this.__fM){this.__fM={};
}this.__fM[cM]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dz);
}return this;
},_removeProperty:function(cd,ce){this._setProperty(cd,null,ce);
},_getProperty:function(R){var S=this.__fP;

if(!S){return null;
}var T=S[R];
return T==null?null:T;
},addListener:function(cP,cQ,self,cR){var cS;

if(this.$$disposed){return null;
}{};

if(this.__fC){return qx.event.Registration.addListener(this.__fC,cP,cQ,self,cR);
}
if(!this.__fQ){this.__fQ={};
}
if(cR==null){cR=false;
}var cT=qx.event.Manager.getNextUniqueId();
var cU=cP+(cR?dq:dK)+cT;
this.__fQ[cU]={type:cP,listener:cQ,self:self,capture:cR,unique:cT};
return cU;
},removeListener:function(bn,bo,self,bp){var bq;

if(this.$$disposed){return null;
}{};

if(this.__fC){qx.event.Registration.removeListener(this.__fC,bn,bo,self,bp);
}else{var bs=this.__fQ;
var br;

if(bp==null){bp=false;
}
for(var bt in bs){br=bs[bt];
if(br.listener===bo&&br.self===self&&br.capture===bp&&br.type===bn){delete bs[bt];
break;
}}}return this;
},removeListenerById:function(Q){if(this.$$disposed){return null;
}
if(this.__fC){qx.event.Registration.removeListenerById(this.__fC,Q);
}else{delete this.__fQ[Q];
}return this;
},hasListener:function(a,b){if(this.$$disposed){return false;
}
if(this.__fC){return qx.event.Registration.hasListener(this.__fC,a,b);
}var d=this.__fQ;
var c;

if(b==null){b=false;
}
for(var f in d){c=d[f];
if(c.capture===b&&c.type===a){return true;
}}return false;
}},defer:function(cE){cE.__ge=new qx.util.DeferredCall(cE.flush,cE);
},destruct:function(){var dd=this.__fC;

if(dd){qx.event.Registration.getManager(dd).removeAllListeners(dd);
dd.$$element=dw;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fT;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(dF);
this.__fO=this.__fN=this.__fQ=this.__fP=this.__fL=this.__fK=this.__fM=this.__fC=this.__fT=this.__fG=this.__fH=null;
}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__gf:false,__gg:{},__gh:0,MAX_RETRIES:10,scheduleFlush:function(d){var self=qx.ui.core.queue.Manager;
self.__gg[d]=true;

if(!self.__gf){self.__gk.schedule();
self.__gf=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__gi){return;
}self.__gi=true;
self.__gk.cancel();
var a=self.__gg;
self.__gj(function(){while(a.visibility||a.widget||a.appearance||a.layout||a.element){if(a.widget){delete a.widget;
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
}}},function(){self.__gf=false;
});
self.__gj(function(){if(a.dispose){delete a.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__gi=false;
});
self.__gh=0;
},__gj:function(f,g){var self=qx.ui.core.queue.Manager;

try{f();
}catch(e){{};
self.__gf=false;
self.__gi=false;
self.__gh+=1;

if(self.__gh<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__gh-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{g();
}}},defer:function(h){h.__gk=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,b,h.flush);
}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(v){this._manager=v;
},members:{_getParent:function(a){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(d,event,e){var parent=d;
var p=this._manager;
var m,t;
var k;
var o,r;
var q;
var s=[];
m=p.getListeners(d,e,true);
t=p.getListeners(d,e,false);

if(m){s.push(m);
}
if(t){s.push(t);
}var parent=this._getParent(d);
var g=[];
var f=[];
var h=[];
var n=[];
while(parent!=null){m=p.getListeners(parent,e,true);

if(m){h.push(m);
n.push(parent);
}t=p.getListeners(parent,e,false);

if(t){g.push(t);
f.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=h.length-1;i>=0;i--){q=n[i];
event.setCurrentTarget(q);
k=h[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(d);

for(var i=0,u=s.length;i<u;i++){k=s[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||d;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,u=g.length;i<u;i++){q=f[i];
event.setCurrentTarget(q);
k=g[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var b="qx.event.dispatch.DomBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(a){return a.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var bA="keydown",bz="qx.client",by="keypress",bx="NumLock",bw="keyup",bv="Enter",bu="0",bt="9",bs="-",br="PageUp",cH="+",cG="PrintScreen",cF="gecko",cE="A",cD="Z",cC="Left",cB="F5",cA="Down",cz="Up",cy="F11",bH="F6",bI="useraction",bF="F3",bG="keyinput",bD="Insert",bE="F8",bB="End",bC="/",bP="Delete",bQ="*",cd="F1",bY="F4",cl="Home",cg="F2",cu="F12",cq="PageDown",bU="F7",cx="F9",cw="F10",cv="Right",bT="text",bW="Escape",bX="webkit",cb="5",ce="3",ch="Meta",cn="7",cs="CapsLock",bJ="input",bK="Control",bV="Space",ck="Tab",cj="Shift",ci="Pause",cp="Unidentified",co="qx.event.handler.Keyboard",cf="mshtml",cm="mshtml|webkit",bo="6",cr="off",bL="Apps",bM="4",ca="Alt",bp="2",bq="Scroll",bS="1",bN="8",bO="Win",bR="autoComplete",cc=",",ct="Backspace";
qx.Class.define(co,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){arguments.callee.base.call(this);
this.__gl=u;
this.__gm=u.getWindow();
if(qx.core.Variant.isSet(bz,cF)){this.__gn=this.__gm;
}else{this.__gn=this.__gm.document.documentElement;
}this.__go={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(m){if(this._identifierToKeyCodeMap[m]){return true;
}
if(m.length!=1){return false;
}
if(m>=bu&&m<=bt){return true;
}
if(m>=cE&&m<=cD){return true;
}
switch(m){case cH:case bs:case bQ:case bC:return true;
default:return false;
}}},members:{__gp:null,__gl:null,__gm:null,__gn:null,__go:null,__gq:null,__gr:null,__gs:null,canHandleEvent:function(bm,bn){},registerEvent:function(I,J,K){},unregisterEvent:function(f,g,h){},_fireInputEvent:function(O,P){var Q=this.__gt();
if(Q&&Q.offsetWidth!=0){var event=qx.event.Registration.createEvent(bG,qx.event.type.KeyInput,[O,Q,P]);
this.__gl.dispatchEvent(Q,event);
}if(this.__gm){qx.event.Registration.fireEvent(this.__gm,bI,qx.event.type.Data,[bG]);
}},_fireSequenceEvent:function(v,w,x){var y=this.__gt();
var z=v.keyCode;
var event=qx.event.Registration.createEvent(w,qx.event.type.KeySequence,[v,y,x]);
this.__gl.dispatchEvent(y,event);
if(qx.core.Variant.isSet(bz,cm)){if(w==bA&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(z)&&!this._emulateKeyPress[z]){this._fireSequenceEvent(v,by,x);
}}}if(this.__gm){qx.event.Registration.fireEvent(this.__gm,bI,qx.event.type.Data,[w]);
}},__gt:function(){var r=this.__gl.getHandler(qx.event.handler.Focus);
var s=r.getActive();
if(!s||s.offsetWidth==0){s=r.getFocus();
}if(!s||s.offsetWidth==0){s=this.__gl.getWindow().document.body;
}return s;
},_initKeyObserver:function(){this.__gp=qx.lang.Function.listener(this.__gu,this);
this.__gs=qx.lang.Function.listener(this.__gw,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gn,bw,this.__gp);
Event.addNativeListener(this.__gn,bA,this.__gp);
Event.addNativeListener(this.__gn,by,this.__gs);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gn,bw,this.__gp);
Event.removeNativeListener(this.__gn,bA,this.__gp);
Event.removeNativeListener(this.__gn,by,this.__gs);

for(var M in (this.__gr||{})){var L=this.__gr[M];
Event.removeNativeListener(L.target,by,L.callback);
}delete (this.__gr);
},__gu:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bz,{"mshtml":function(n){n=window.event||n;
var q=n.keyCode;
var o=0;
var p=n.type;
if(!(this.__go[q]==bA&&p==bA)){this._idealKeyHandler(q,o,p,n);
}if(p==bA){if(this._isNonPrintableKeyCode(q)||this._emulateKeyPress[q]){this._idealKeyHandler(q,o,by,n);
}}this.__go[q]=p;
},"gecko":function(a){var e=this._keyCodeFix[a.keyCode]||a.keyCode;
var c=0;
var d=a.type;
if(qx.bom.client.Platform.WIN){var b=e?this._keyCodeToIdentifier(e):this._charCodeToIdentifier(c);

if(!(this.__go[b]==bA&&d==bA)){this._idealKeyHandler(e,c,d,a);
}this.__go[b]=d;
}else{this._idealKeyHandler(e,c,d,a);
}this.__gv(a.target,d,e);
},"webkit":function(cI){var cL=0;
var cJ=0;
var cK=cI.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cK==bw||cK==bA){cL=this._charCode2KeyCode[cI.charCode]||cI.keyCode;
}else{if(this._charCode2KeyCode[cI.charCode]){cL=this._charCode2KeyCode[cI.charCode];
}else{cJ=cI.charCode;
}}this._idealKeyHandler(cL,cJ,cK,cI);
}else{cL=cI.keyCode;
if(!(this.__go[cL]==bA&&cK==bA)){this._idealKeyHandler(cL,cJ,cK,cI);
}if(cK==bA){if(this._isNonPrintableKeyCode(cL)||this._emulateKeyPress[cL]){this._idealKeyHandler(cL,cJ,by,cI);
}}this.__go[cL]=cK;
}},"opera":function(be){this.__gq=be.keyCode;
this._idealKeyHandler(be.keyCode,0,be.type,be);
}})),__gv:qx.core.Variant.select(bz,{"gecko":function(bh,bi,bj){if(bi===bA&&(bj==33||bj==34||bj==38||bj==40)&&bh.type==bT&&bh.tagName.toLowerCase()===bJ&&bh.getAttribute(bR)!==cr){if(!this.__gr){this.__gr={};
}var bl=qx.core.ObjectRegistry.toHashCode(bh);

if(this.__gr[bl]){return;
}var self=this;
this.__gr[bl]={target:bh,callback:function(N){qx.bom.Event.stopPropagation(N);
self.__gw(N);
}};
var bk=qx.event.GlobalError.observeMethod(this.__gr[bl].callback);
qx.bom.Event.addNativeListener(bh,by,bk);
}},"default":null}),__gw:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bz,{"mshtml":function(R){R=window.event||R;

if(this._charCode2KeyCode[R.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[R.keyCode],0,R.type,R);
}else{this._idealKeyHandler(0,R.keyCode,R.type,R);
}},"gecko":function(S){var V=this._keyCodeFix[S.keyCode]||S.keyCode;
var T=S.charCode;
var U=S.type;
this._idealKeyHandler(V,T,U,S);
},"webkit":function(ba){if(qx.bom.client.Engine.VERSION<525.13){var bd=0;
var bb=0;
var bc=ba.type;

if(bc==bw||bc==bA){bd=this._charCode2KeyCode[ba.charCode]||ba.keyCode;
}else{if(this._charCode2KeyCode[ba.charCode]){bd=this._charCode2KeyCode[ba.charCode];
}else{bb=ba.charCode;
}}this._idealKeyHandler(bd,bb,bc,ba);
}else{if(this._charCode2KeyCode[ba.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[ba.keyCode],0,ba.type,ba);
}else{this._idealKeyHandler(0,ba.keyCode,ba.type,ba);
}}},"opera":function(W){var Y=W.keyCode;
var X=W.type;
if(Y!=this.__gq){this._idealKeyHandler(0,this.__gq,X,W);
}else{if(this._keyCodeToIdentifierMap[W.keyCode]){this._idealKeyHandler(W.keyCode,0,W.type,W);
}else{this._idealKeyHandler(0,W.keyCode,W.type,W);
}}}})),_idealKeyHandler:function(A,B,C,D){var E;
if(A||(!A&&!B)){E=this._keyCodeToIdentifier(A);
this._fireSequenceEvent(D,C,E);
}else{E=this._charCodeToIdentifier(B);
this._fireSequenceEvent(D,by,E);
this._fireInputEvent(D,B);
}},_specialCharCodeMap:{8:ct,9:ck,13:bv,27:bW,32:bV},_emulateKeyPress:qx.core.Variant.select(bz,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:cj,17:bK,18:ca,20:cs,224:ch,37:cC,38:cz,39:cv,40:cA,33:br,34:cq,35:bB,36:cl,45:bD,46:bP,112:cd,113:cg,114:bF,115:bY,116:cB,117:bH,118:bU,119:bE,120:cx,121:cw,122:cy,123:cu,144:bx,44:cG,145:bq,19:ci,91:bO,93:bL},_numpadToCharCode:{96:bu.charCodeAt(0),97:bS.charCodeAt(0),98:bp.charCodeAt(0),99:ce.charCodeAt(0),100:bM.charCodeAt(0),101:cb.charCodeAt(0),102:bo.charCodeAt(0),103:cn.charCodeAt(0),104:bN.charCodeAt(0),105:bt.charCodeAt(0),106:bQ.charCodeAt(0),107:cH.charCodeAt(0),109:bs.charCodeAt(0),110:cc.charCodeAt(0),111:bC.charCodeAt(0)},_charCodeA:cE.charCodeAt(0),_charCodeZ:cD.charCodeAt(0),_charCode0:bu.charCodeAt(0),_charCode9:bt.charCodeAt(0),_isNonPrintableKeyCode:function(H){return this._keyCodeToIdentifierMap[H]?true:false;
},_isIdentifiableKeyCode:function(t){if(t>=this._charCodeA&&t<=this._charCodeZ){return true;
}if(t>=this._charCode0&&t<=this._charCode9){return true;
}if(this._specialCharCodeMap[t]){return true;
}if(this._numpadToCharCode[t]){return true;
}if(this._isNonPrintableKeyCode(t)){return true;
}return false;
},_keyCodeToIdentifier:function(bf){if(this._isIdentifiableKeyCode(bf)){var bg=this._numpadToCharCode[bf];

if(bg){return String.fromCharCode(bg);
}return (this._keyCodeToIdentifierMap[bf]||this._specialCharCodeMap[bf]||String.fromCharCode(bf));
}else{return cp;
}},_charCodeToIdentifier:function(F){return this._specialCharCodeMap[F]||String.fromCharCode(F).toUpperCase();
},_identifierToKeyCode:function(G){return qx.event.handler.Keyboard._identifierToKeyCodeMap[G]||G.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gq=this.__gl=this.__gm=this.__gn=this.__go=null;
},defer:function(i,j,k){qx.event.Registration.addHandler(i);
if(!i._identifierToKeyCodeMap){i._identifierToKeyCodeMap={};

for(var l in j._keyCodeToIdentifierMap){i._identifierToKeyCodeMap[j._keyCodeToIdentifierMap[l]]=parseInt(l,10);
}
for(var l in j._specialCharCodeMap){i._identifierToKeyCodeMap[j._specialCharCodeMap[l]]=parseInt(l,10);
}}
if(qx.core.Variant.isSet(bz,cf)){j._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bz,cF)){j._keyCodeFix={12:j._identifierToKeyCode(bx)};
}else if(qx.core.Variant.isSet(bz,bX)){if(qx.bom.client.Engine.VERSION<525.13){j._charCode2KeyCode={63289:j._identifierToKeyCode(bx),63276:j._identifierToKeyCode(br),63277:j._identifierToKeyCode(cq),63275:j._identifierToKeyCode(bB),63273:j._identifierToKeyCode(cl),63234:j._identifierToKeyCode(cC),63232:j._identifierToKeyCode(cz),63235:j._identifierToKeyCode(cv),63233:j._identifierToKeyCode(cA),63272:j._identifierToKeyCode(bP),63302:j._identifierToKeyCode(bD),63236:j._identifierToKeyCode(cd),63237:j._identifierToKeyCode(cg),63238:j._identifierToKeyCode(bF),63239:j._identifierToKeyCode(bY),63240:j._identifierToKeyCode(cB),63241:j._identifierToKeyCode(bH),63242:j._identifierToKeyCode(bU),63243:j._identifierToKeyCode(bE),63244:j._identifierToKeyCode(cx),63245:j._identifierToKeyCode(cw),63246:j._identifierToKeyCode(cy),63247:j._identifierToKeyCode(cu),63248:j._identifierToKeyCode(cG),3:j._identifierToKeyCode(bv),12:j._identifierToKeyCode(bx),13:j._identifierToKeyCode(bv)};
}else{j._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var y="qx.client",x="mouseup",w="click",v="mousedown",u="contextmenu",t="mousewheel",s="dblclick",r="mshtml",q="mouseover",p="mouseout",k="DOMMouseScroll",o="mousemove",n="on",j="mshtml|webkit|opera",i="useraction",m="gecko|webkit",l="qx.event.handler.Mouse";
qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){arguments.callee.base.call(this);
this.__gx=e;
this.__gy=e.getWindow();
this.__gz=this.__gy.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__gA:null,__gB:null,__gC:null,__gD:null,__gE:null,__gx:null,__gy:null,__gz:null,canHandleEvent:function(C,D){},registerEvent:qx.bom.client.System.IPHONE?
function(U,V,W){U[n+V]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(a,b,c){a[n+b]=undefined;
}:qx.lang.Function.returnNull,__gF:function(H,I,J){if(!J){J=H.target||H.srcElement;
}if(J&&J.nodeType){qx.event.Registration.fireEvent(J,I||H.type,I==t?qx.event.type.MouseWheel:qx.event.type.Mouse,[H,J,null,true,true]);
}qx.event.Registration.fireEvent(this.__gy,i,qx.event.type.Data,[I||H.type]);
},_initButtonObserver:function(){this.__gA=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gz,v,this.__gA);
Event.addNativeListener(this.__gz,x,this.__gA);
Event.addNativeListener(this.__gz,w,this.__gA);
Event.addNativeListener(this.__gz,s,this.__gA);
Event.addNativeListener(this.__gz,u,this.__gA);
},_initMoveObserver:function(){this.__gB=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gz,o,this.__gB);
Event.addNativeListener(this.__gz,q,this.__gB);
Event.addNativeListener(this.__gz,p,this.__gB);
},_initWheelObserver:function(){this.__gC=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var K=qx.core.Variant.isSet(y,j)?t:k;
var L=qx.core.Variant.isSet(y,r)?this.__gz:this.__gy;
Event.addNativeListener(L,K,this.__gC);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gz,v,this.__gA);
Event.removeNativeListener(this.__gz,x,this.__gA);
Event.removeNativeListener(this.__gz,w,this.__gA);
Event.removeNativeListener(this.__gz,s,this.__gA);
Event.removeNativeListener(this.__gz,u,this.__gA);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gz,o,this.__gB);
Event.removeNativeListener(this.__gz,q,this.__gB);
Event.removeNativeListener(this.__gz,p,this.__gB);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var X=qx.core.Variant.isSet(y,j)?t:k;
var Y=qx.core.Variant.isSet(y,r)?this.__gz:this.__gy;
Event.removeNativeListener(Y,X,this.__gC);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(d){this.__gF(d);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(f){var g=f.type;
var h=f.target||f.srcElement;
if(qx.core.Variant.isSet(y,m)){if(h&&h.nodeType==3){h=h.parentNode;
}}
if(this.__gG){this.__gG(f,g,h);
}
if(this.__gI){this.__gI(f,g,h);
}this.__gF(f,g,h);

if(this.__gH){this.__gH(f,g,h);
}
if(this.__gJ){this.__gJ(f,g,h);
}this.__gD=g;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(ba){this.__gF(ba,t);
}),__gG:qx.core.Variant.select(y,{"webkit":function(z,A,B){if(qx.bom.client.Engine.VERSION<530){if(A==u){this.__gF(z,x,B);
}}},"default":null}),__gH:qx.core.Variant.select(y,{"opera":function(R,S,T){if(S==x&&R.button==2){this.__gF(R,u,T);
}},"default":null}),__gI:qx.core.Variant.select(y,{"mshtml":function(E,F,G){if(F==x&&this.__gD==w){this.__gF(E,v,G);
}else if(F==s){this.__gF(E,w,G);
}},"default":null}),__gJ:qx.core.Variant.select(y,{"mshtml":null,"default":function(N,O,P){switch(O){case v:this.__gE=P;
break;
case x:if(P!==this.__gE){var Q=qx.dom.Hierarchy.getCommonParent(P,this.__gE);
this.__gF(N,w,Q);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__gx=this.__gy=this.__gz=this.__gE=null;
},defer:function(M){qx.event.Registration.addHandler(M);
}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var C="alias",B="copy",A="blur",z="mouseout",y="keydown",x="Ctrl",w="Shift",v="mousemove",u="move",t="mouseover",S="Alt",R="keyup",Q="mouseup",P="dragend",O="on",N="mousedown",M="qxDraggable",L="drag",K="drop",J="qxDroppable",H="qx.event.handler.DragDrop",I="droprequest",F="dragstart",G="dragchange",D="dragleave",E="dragover";
qx.Class.define(H,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bl){arguments.callee.base.call(this);
this.__gK=bl;
this.__gL=bl.getWindow().document.documentElement;
this.__gK.addListener(this.__gL,N,this._onMouseDown,this);
this.__gX();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gK:null,__gL:null,__gM:null,__gN:null,__gO:null,__gP:null,__gQ:null,__gR:null,__gS:null,__gT:null,__gU:false,__gV:0,__gW:0,canHandleEvent:function(p,q){},registerEvent:function(W,X,Y){},unregisterEvent:function(bd,be,bf){},addType:function(f){this.__gO[f]=true;
},addAction:function(a){this.__gP[a]=true;
},supportsType:function(bg){return !!this.__gO[bg];
},supportsAction:function(T){return !!this.__gP[T];
},getData:function(b){if(!this.__hf||!this.__gM){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gO[b]){throw new Error("Unsupported data type: "+b+"!");
}
if(!this.__gR[b]){this.__gS=b;
this.__ha(I,this.__gN,this.__gM,false);
}
if(!this.__gR[b]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gR[b]||null;
},getCurrentAction:function(){return this.__gT;
},addData:function(c,d){this.__gR[c]=d;
},getCurrentType:function(){return this.__gS;
},__gX:function(){this.__gO={};
this.__gP={};
this.__gQ={};
this.__gR={};
},__gY:function(){var bc=this.__gP;
var ba=this.__gQ;
var bb=null;

if(this.__hf){if(ba.Shift&&ba.Ctrl&&bc.alias){bb=C;
}else if(ba.Shift&&ba.Alt&&bc.copy){bb=B;
}else if(ba.Shift&&bc.move){bb=u;
}else if(ba.Alt&&bc.alias){bb=C;
}else if(ba.Ctrl&&bc.copy){bb=B;
}else if(bc.move){bb=u;
}else if(bc.copy){bb=B;
}else if(bc.alias){bb=C;
}}
if(bb!=this.__gT){this.__gT=bb;
this.__ha(G,this.__gN,this.__gM,false);
}},__ha:function(g,h,i,j,k){var m=qx.event.Registration;
var l=m.createEvent(g,qx.event.type.Drag,[j,k]);

if(h!==i){l.setRelatedTarget(i);
}return m.dispatchEvent(h,l);
},__hb:function(bi){while(bi&&bi.nodeType==1){if(bi.getAttribute(M)==O){return bi;
}bi=bi.parentNode;
}return null;
},__hc:function(bh){while(bh&&bh.nodeType==1){if(bh.getAttribute(J)==O){return bh;
}bh=bh.parentNode;
}return null;
},__hd:function(){this.__gN=null;
this.__gK.removeListener(this.__gL,v,this._onMouseMove,this,true);
this.__gK.removeListener(this.__gL,Q,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,A,this._onWindowBlur,this);
this.__gX();
},__he:function(){if(this.__gU){this.__gK.removeListener(this.__gL,t,this._onMouseOver,this,true);
this.__gK.removeListener(this.__gL,z,this._onMouseOut,this,true);
this.__gK.removeListener(this.__gL,y,this._onKeyDown,this,true);
this.__gK.removeListener(this.__gL,R,this._onKeyUp,this,true);
this.__ha(P,this.__gN,this.__gM,false);
this.__gU=false;
}this.__hf=false;
this.__gM=null;
this.__hd();
},__hf:false,_onWindowBlur:function(e){this.__he();
},_onKeyDown:function(e){var bk=e.getKeyIdentifier();

switch(bk){case S:case x:case w:if(!this.__gQ[bk]){this.__gQ[bk]=true;
this.__gY();
}}},_onKeyUp:function(e){var bm=e.getKeyIdentifier();

switch(bm){case S:case x:case w:if(this.__gQ[bm]){this.__gQ[bm]=false;
this.__gY();
}}},_onMouseDown:function(e){if(this.__gU){return;
}var bj=this.__hb(e.getTarget());

if(bj){this.__gV=e.getDocumentLeft();
this.__gW=e.getDocumentTop();
this.__gN=bj;
this.__gK.addListener(this.__gL,v,this._onMouseMove,this,true);
this.__gK.addListener(this.__gL,Q,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,A,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hf){this.__ha(K,this.__gM,this.__gN,false,e);
}if(this.__gU){e.stopPropagation();
}this.__he();
},_onMouseMove:function(e){if(this.__gU){if(!this.__ha(L,this.__gN,this.__gM,true,e)){this.__he();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gV)>3||Math.abs(e.getDocumentTop()-this.__gW)>3){if(this.__ha(F,this.__gN,this.__gM,true,e)){this.__gU=true;
this.__gK.addListener(this.__gL,t,this._onMouseOver,this,true);
this.__gK.addListener(this.__gL,z,this._onMouseOut,this,true);
this.__gK.addListener(this.__gL,y,this._onKeyDown,this,true);
this.__gK.addListener(this.__gL,R,this._onKeyUp,this,true);
var n=this.__gQ;
n.Ctrl=e.isCtrlPressed();
n.Shift=e.isShiftPressed();
n.Alt=e.isAltPressed();
this.__gY();
}else{this.__ha(P,this.__gN,this.__gM,false);
this.__hd();
}}}},_onMouseOver:function(e){var U=e.getTarget();
var V=this.__hc(U);

if(V&&V!=this.__gM){this.__hf=this.__ha(E,V,this.__gN,true,e);
this.__gM=V;
this.__gY();
}},_onMouseOut:function(e){var s=this.__hc(e.getTarget());
var r=this.__hc(e.getRelatedTarget());

if(s&&s!==r&&s==this.__gM){this.__ha(D,this.__gM,r,false,e);
this.__gM=null;
this.__hf=false;
qx.event.Timer.once(this.__gY,this,0);
}}},destruct:function(){this.__gN=this.__gM=this.__gK=this.__gL=this.__gO=this.__gP=this.__gQ=this.__gR=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var f="-",e="qx.event.handler.Element";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(y,z){},registerEvent:function(n,o,p){var s=qx.core.ObjectRegistry.toHashCode(n);
var q=s+f+o;
var r=qx.lang.Function.listener(this._onNative,this,q);
qx.bom.Event.addNativeListener(n,o,r);
this._registeredEvents[q]={element:n,type:o,listener:r};
},unregisterEvent:function(g,h,i){var l=this._registeredEvents;

if(!l){return;
}var m=qx.core.ObjectRegistry.toHashCode(g);
var j=m+f+h;
var k=this._registeredEvents[j];
qx.bom.Event.removeNativeListener(g,h,k.listener);
delete this._registeredEvents[j];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u]);
})},destruct:function(){var b;
var c=this._registeredEvents;

for(var d in c){b=c[d];
qx.bom.Event.removeNativeListener(b.element,b.type,b.listener);
}this._manager=this._registeredEvents=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var i="qx.event.handler.Appear",h="disappear",g="appear";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){arguments.callee.base.call(this);
this.__hg=q;
this.__hh={};
qx.event.handler.Appear.__hi[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__hi:{},refresh:function(){var w=this.__hi;

for(var x in w){w[x].refresh();
}}},members:{__hg:null,__hh:null,canHandleEvent:function(j,k){},registerEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__hh;

if(v&&!v[u]){v[u]=r;
r.$$displayed=r.offsetWidth>0;
}},unregisterEvent:function(l,m,n){var o=qx.core.ObjectRegistry.toHashCode(l)+m;
var p=this.__hh;

if(!p){return;
}
if(p[o]){delete p[o];
}},refresh:function(){var d=this.__hh;
var e;

for(var c in d){e=d[c];
var a=e.offsetWidth>0;

if((!!e.$$displayed)!==a){e.$$displayed=a;
var b=qx.event.Registration.createEvent(a?g:h);
this.__hg.dispatchEvent(e,b);
}}}},destruct:function(){this.__hg=this.__hh=null;
delete qx.event.handler.Appear.__hi[this.$$hash];
},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var L="mshtml",K="",J="qx.client",I=">",H="<",G=" ",F="='",E="qx.bom.Element",D="div",C="' ",B="></";
qx.Class.define(E,{statics:{__hj:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,S,T){if(!T){T=window;
}
if(!name){throw new Error("The tag name is missing!");
}var V=this.__hj;
var U=K;

for(var X in S){if(V[X]){U+=X+F+S[X]+C;
}}var Y;
if(U!=K){if(qx.bom.client.Engine.MSHTML){Y=T.document.createElement(H+name+G+U+I);
}else{var W=T.document.createElement(D);
W.innerHTML=H+name+G+U+B+name+I;
Y=W.firstChild;
}}else{Y=T.document.createElement(name);
}
for(var X in S){if(!V[X]){qx.bom.element.Attribute.set(Y,X,S[X]);
}}return Y;
},empty:function(R){return R.innerHTML=K;
},addListener:function(x,y,z,self,A){return qx.event.Registration.addListener(x,y,z,self,A);
},removeListener:function(q,r,s,self,t){return qx.event.Registration.removeListener(q,r,s,self,t);
},removeListenerById:function(v,w){return qx.event.Registration.removeListenerById(v,w);
},hasListener:function(ba,bb,bc){return qx.event.Registration.hasListener(ba,bb,bc);
},focus:function(p){qx.event.Registration.getManager(p).getHandler(qx.event.handler.Focus).focus(p);
},blur:function(Q){qx.event.Registration.getManager(Q).getHandler(qx.event.handler.Focus).blur(Q);
},activate:function(P){qx.event.Registration.getManager(P).getHandler(qx.event.handler.Focus).activate(P);
},deactivate:function(u){qx.event.Registration.getManager(u).getHandler(qx.event.handler.Focus).deactivate(u);
},capture:function(N,O){qx.event.Registration.getManager(N).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(N,O);
},releaseCapture:function(M){qx.event.Registration.getManager(M).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(M);
},clone:function(a,b){var e;

if(b||(qx.core.Variant.isSet(J,L)&&!qx.xml.Document.isXmlDocument(a))){var k=qx.event.Registration.getManager(a);
var c=qx.dom.Hierarchy.getDescendants(a);
c.push(a);
}if(qx.core.Variant.isSet(J,L)){for(var i=0,l=c.length;i<l;i++){k.toggleAttachedEvents(c[i],false);
}}var e=a.cloneNode(true);
if(qx.core.Variant.isSet(J,L)){for(var i=0,l=c.length;i<l;i++){k.toggleAttachedEvents(c[i],true);
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
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=arguments.callee.base.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var b=0;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var O="qx.client",N="blur",M="focus",L="mousedown",K="on",J="mouseup",I="DOMFocusOut",H="DOMFocusIn",G="selectstart",F="onmousedown",bi="onfocusout",bh="onfocusin",bg="onmouseup",bf="onselectstart",be="draggesture",bd="qx.event.handler.Focus",bc="_applyFocus",bb="deactivate",ba="textarea",Y="_applyActive",V="input",W="focusin",T="qxSelectable",U="tabIndex",R="off",S="activate",P="focusout",Q="qxKeepFocus",X="qxKeepActive";
qx.Class.define(bd,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._manager=r;
this._window=r.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:Y,nullable:true},focus:{apply:bc,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hk:null,__hl:null,__hm:null,__hn:null,__ho:null,__hp:null,__hq:null,__hr:null,__hs:null,__ht:null,canHandleEvent:function(p,q){},registerEvent:function(g,h,i){},unregisterEvent:function(c,d,f){},focus:function(bI){try{bI.focus();
}catch(y){}this.setFocus(bI);
this.setActive(bI);
},activate:function(br){this.setActive(br);
},blur:function(by){try{by.blur();
}catch(bs){}
if(this.getActive()===by){this.resetActive();
}
if(this.getFocus()===by){this.resetFocus();
}},deactivate:function(B){if(this.getActive()===B){this.resetActive();
}},tryActivate:function(D){var E=this.__hI(D);

if(E){this.setActive(E);
}},__hu:function(j,k,l,m){var o=qx.event.Registration;
var n=o.createEvent(l,qx.event.type.Focus,[j,k,m]);
o.dispatchEvent(j,n);
},_windowFocused:true,__hv:function(){if(this._windowFocused){this._windowFocused=false;
this.__hu(this._window,null,N,false);
}},__hw:function(){if(!this._windowFocused){this._windowFocused=true;
this.__hu(this._window,null,M,false);
}},_initObserver:qx.core.Variant.select(O,{"gecko":function(){this.__hk=qx.lang.Function.listener(this.__hC,this);
this.__hl=qx.lang.Function.listener(this.__hD,this);
this.__hm=qx.lang.Function.listener(this.__hB,this);
this.__hn=qx.lang.Function.listener(this.__hA,this);
this.__ho=qx.lang.Function.listener(this.__hx,this);
this._document.addEventListener(L,this.__hk,true);
this._document.addEventListener(J,this.__hl,true);
this._window.addEventListener(M,this.__hm,true);
this._window.addEventListener(N,this.__hn,true);
this._window.addEventListener(be,this.__ho,true);
},"mshtml":function(){this.__hk=qx.lang.Function.listener(this.__hC,this);
this.__hl=qx.lang.Function.listener(this.__hD,this);
this.__hq=qx.lang.Function.listener(this.__hy,this);
this.__hr=qx.lang.Function.listener(this.__hz,this);
this.__hp=qx.lang.Function.listener(this.__hF,this);
this._document.attachEvent(F,this.__hk);
this._document.attachEvent(bg,this.__hl);
this._document.attachEvent(bh,this.__hq);
this._document.attachEvent(bi,this.__hr);
this._document.attachEvent(bf,this.__hp);
},"webkit":function(){this.__hk=qx.lang.Function.listener(this.__hC,this);
this.__hl=qx.lang.Function.listener(this.__hD,this);
this.__hr=qx.lang.Function.listener(this.__hz,this);
this.__hm=qx.lang.Function.listener(this.__hB,this);
this.__hn=qx.lang.Function.listener(this.__hA,this);
this.__hp=qx.lang.Function.listener(this.__hF,this);
this._document.addEventListener(L,this.__hk,true);
this._document.addEventListener(J,this.__hl,true);
this._document.addEventListener(G,this.__hp,false);
this._window.addEventListener(I,this.__hr,true);
this._window.addEventListener(M,this.__hm,true);
this._window.addEventListener(N,this.__hn,true);
},"opera":function(){this.__hk=qx.lang.Function.listener(this.__hC,this);
this.__hl=qx.lang.Function.listener(this.__hD,this);
this.__hq=qx.lang.Function.listener(this.__hy,this);
this.__hr=qx.lang.Function.listener(this.__hz,this);
this._document.addEventListener(L,this.__hk,true);
this._document.addEventListener(J,this.__hl,true);
this._window.addEventListener(H,this.__hq,true);
this._window.addEventListener(I,this.__hr,true);
}}),_stopObserver:qx.core.Variant.select(O,{"gecko":function(){this._document.removeEventListener(L,this.__hk,true);
this._document.removeEventListener(J,this.__hl,true);
this._window.removeEventListener(M,this.__hm,true);
this._window.removeEventListener(N,this.__hn,true);
this._window.removeEventListener(be,this.__ho,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,F,this.__hk);
qx.bom.Event.removeNativeListener(this._document,bg,this.__hl);
qx.bom.Event.removeNativeListener(this._document,bh,this.__hq);
qx.bom.Event.removeNativeListener(this._document,bi,this.__hr);
qx.bom.Event.removeNativeListener(this._document,bf,this.__hp);
},"webkit":function(){this._document.removeEventListener(L,this.__hk,true);
this._document.removeEventListener(G,this.__hp,false);
this._window.removeEventListener(H,this.__hq,true);
this._window.removeEventListener(I,this.__hr,true);
this._window.removeEventListener(M,this.__hm,true);
this._window.removeEventListener(N,this.__hn,true);
},"opera":function(){this._document.removeEventListener(L,this.__hk,true);
this._window.removeEventListener(H,this.__hq,true);
this._window.removeEventListener(I,this.__hr,true);
this._window.removeEventListener(M,this.__hm,true);
this._window.removeEventListener(N,this.__hn,true);
}}),__hx:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"gecko":function(e){if(!this.__hJ(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__hy:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"mshtml":function(e){this.__hw();
var bL=e.srcElement;
var bK=this.__hH(bL);

if(bK){this.setFocus(bK);
}this.tryActivate(bL);
},"opera":function(e){var bj=e.target;

if(bj==this._document||bj==this._window){this.__hw();

if(this.__hs){this.setFocus(this.__hs);
delete this.__hs;
}
if(this.__ht){this.setActive(this.__ht);
delete this.__ht;
}}else{this.setFocus(bj);
this.tryActivate(bj);
if(!this.__hJ(bj)){bj.selectionStart=0;
bj.selectionEnd=0;
}}},"default":null})),__hz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"mshtml":function(e){if(!e.toElement){this.__hv();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var C=e.target;

if(C===this.getFocus()){this.resetFocus();
}
if(C===this.getActive()){this.resetActive();
}},"opera":function(e){var bC=e.target;

if(bC==this._document){this.__hv();
this.__hs=this.getFocus();
this.__ht=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bC===this.getFocus()){this.resetFocus();
}
if(bC===this.getActive()){this.resetActive();
}}},"default":null})),__hA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__hv();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__hv();
this.__hs=this.getFocus();
this.__ht=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"gecko":function(e){var bn=e.target;

if(bn===this._window||bn===this._document){this.__hw();
bn=this._body;
}this.setFocus(bn);
this.tryActivate(bn);
},"webkit":function(e){var bu=e.target;

if(bu===this._window||bu===this._document){this.__hw();

if(this.__hs){this.setFocus(this.__hs);
delete this.__hs;
}
if(this.__ht){this.setActive(this.__ht);
delete this.__ht;
}}else{this.setFocus(bu);
this.tryActivate(bu);
}},"default":null})),__hC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"gecko":function(e){var bJ=this.__hH(e.target);

if(!bJ){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bA=e.srcElement;
var bz=this.__hH(bA);

if(bz){if(!this.__hJ(bA)){bA.unselectable=K;
try{document.selection.empty();
}catch(e){}try{bz.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__hJ(bA)){bA.unselectable=K;
}}},"webkit":function(e){var A=e.target;
var z=this.__hH(A);

if(z){this.setFocus(z);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var bq=e.target;
var bo=this.__hH(bq);

if(!this.__hJ(bq)){qx.bom.Event.preventDefault(e);
if(bo){var bp=this.getFocus();

if(bp&&bp.selectionEnd){bp.selectionStart=0;
bp.selectionEnd=0;
bp.blur();
}if(bo){this.setFocus(bo);
}}}else if(bo){this.setFocus(bo);
}},"default":null})),__hD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"mshtml":function(e){var bk=e.srcElement;

if(bk.unselectable){bk.unselectable=R;
}this.tryActivate(this.__hE(bk));
},"gecko":function(e){var x=e.target;

while(x&&x.offsetWidth===undefined){x=x.parentNode;
}
if(x){this.tryActivate(x);
}},"webkit|opera":function(e){this.tryActivate(this.__hE(e.target));
},"default":null})),__hE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"mshtml|webkit":function(a){var b=this.getFocus();

if(b&&a!=b&&(b.nodeName.toLowerCase()===V||b.nodeName.toLowerCase()===ba)){a=b;
}return a;
},"default":function(bt){return bt;
}})),__hF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(O,{"mshtml|webkit":function(e){var bB=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__hJ(bB)){qx.bom.Event.preventDefault(e);
}},"default":null})),__hG:function(bv){var bw=qx.bom.element.Attribute.get(bv,U);

if(bw>=1){return true;
}var bx=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bw>=0&&bx[bv.tagName]){return true;
}return false;
},__hH:function(bF){while(bF&&bF.nodeType===1){if(bF.getAttribute(Q)==K){return null;
}
if(this.__hG(bF)){return bF;
}bF=bF.parentNode;
}return this._body;
},__hI:function(v){var w=v;

while(v&&v.nodeType===1){if(v.getAttribute(X)==K){return null;
}v=v.parentNode;
}return w;
},__hJ:function(bG){while(bG&&bG.nodeType===1){var bH=bG.getAttribute(T);

if(bH!=null){return bH===K;
}bG=bG.parentNode;
}return true;
},_applyActive:function(bl,bm){if(bm){this.__hu(bm,bl,bb,true);
}
if(bl){this.__hu(bl,bm,S,true);
}},_applyFocus:function(bD,bE){if(bE){this.__hu(bE,bD,P,true);
}
if(bD){this.__hu(bD,bE,W,true);
}if(bE){this.__hu(bE,bD,N,false);
}
if(bD){this.__hu(bD,bE,M,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__hK=null;
},defer:function(s){qx.event.Registration.addHandler(s);
var t=s.FOCUSABLE_ELEMENTS;

for(var u in t){t[u.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var m="",l="qx.client",k="readOnly",j="accessKey",i="qx.bom.element.Attribute",h="rowSpan",g="vAlign",f="className",e="textContent",d="'",A="htmlFor",z="longDesc",y="cellSpacing",x="frameBorder",w="='",v="useMap",u="innerText",t="innerHTML",s="tabIndex",r="dateTime",p="maxLength",q="mshtml",n="cellPadding",o="colSpan";
qx.Class.define(i,{statics:{__hL:{names:{"class":f,"for":A,html:t,text:qx.core.Variant.isSet(l,q)?u:e,colspan:o,rowspan:h,valign:g,datetime:r,accesskey:j,tabindex:s,maxlength:p,readonly:k,longdesc:z,cellpadding:n,cellspacing:y,frameborder:x,usemap:v},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:m,maxLength:10000000,className:m,innerHTML:m,innerText:m,textContent:m,htmlFor:m,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(F){var G=[];
var I=this.__hL.runtime;

for(var H in F){if(!I[H]){G.push(H,w,F[H],d);
}}return G.join(m);
},get:qx.core.Variant.select(l,{"mshtml":function(B,name){var D=this.__hL;
var C;
name=D.names[name]||name;
if(D.original[name]){C=B.getAttribute(name,2);
}else if(D.property[name]){if(D.propertyDefault[name]&&C==D.propertyDefault[name]){return null;
}C=B[name];
}else{C=B.getAttribute(name);
}if(D.bools[name]){return !!C;
}return C;
},"default":function(a,name){var c=this.__hL;
var b;
name=c.names[name]||name;
if(c.property[name]){if(c.propertyDefault[name]&&b==c.propertyDefault[name]){return null;
}b=a[name];

if(b==null){b=a.getAttribute(name);
}}else{b=a.getAttribute(name);
}if(c.bools[name]){return !!b;
}return b;
}}),set:function(J,name,K){var L=this.__hL;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]){if(K==null){K=L.propertyDefault[name];

if(K===undefined){K=null;
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(E,name){this.set(E,name,null);
}}});
})();
(function(){var k="left",j="right",i="middle",h="qx.client",g="dblclick",f="click",e="none",d="contextmenu",c="qx.event.type.Mouse";
qx.Class.define(c,{extend:qx.event.type.Dom,members:{init:function(n,o,p,q,r){arguments.callee.base.call(this,n,o,p,q,r);

if(!p){this._relatedTarget=qx.bom.Event.getRelatedTarget(n);
}return this;
},_cloneNativeEvent:function(l,m){var m=arguments.callee.base.call(this,l,m);
m.button=l.button;
m.clientX=l.clientX;
m.clientY=l.clientY;
m.pageX=l.pageX;
m.pageY=l.pageY;
m.screenX=l.screenX;
m.screenY=l.screenY;
m.wheelDelta=l.wheelDelta;
m.detail=l.detail;
m.srcElement=l.srcElement;
return m;
},__hM:qx.core.Variant.select(h,{"mshtml":{1:k,2:j,4:i},"default":{0:k,2:j,1:i}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case f:case g:return k;
case d:return j;
default:return this.__hM[this._native.button]||e;
}},isLeftPressed:function(){return this.getButton()===k;
},isMiddlePressed:function(){return this.getButton()===i;
},isRightPressed:function(){return this.getButton()===j;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(h,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(h,{"mshtml":function(){var b=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(b);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var l="qx.client",k="ie",j="msie",i="android",h="operamini",g="mobile chrome",f=")(/| )([0-9]+\.[0-9])",e="iemobile",d="opera mobi",c="Mobile Safari",z="operamobile",y="mobile safari",x="IEMobile|Maxthon|MSIE",w="qx.bom.client.Browser",v="opera mini",u="(",t="opera",s="mshtml",r="Opera Mini|Opera Mobi|Opera",q="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",o="webkit",p="5.0",m="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",n="Mobile/";
qx.Bootstrap.define(w,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__hN:function(B){var C=navigator.userAgent;
var E=new RegExp(u+B+f);
var F=C.match(E);

if(!F){return;
}var name=F[1].toLowerCase();
var D=F[3];
if(C.match(/Version(\/| )([0-9]+\.[0-9])/)){D=RegExp.$2;
}
if(qx.core.Variant.isSet(l,o)){if(name===i){name=g;
}else if(C.indexOf(c)!==-1||C.indexOf(n)!==-1){name=y;
}}else if(qx.core.Variant.isSet(l,s)){if(name===j){name=k;
if(qx.bom.client.System.WINCE&&name===k){name=e;
D=p;
}}}else if(qx.core.Variant.isSet(l,t)){if(name===d){name=z;
}else if(name===v){name=h;
}}this.NAME=name;
this.FULLVERSION=D;
this.VERSION=parseFloat(D,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(l,{"webkit":function(G){G.__hN(q);
},"gecko":function(A){A.__hN(m);
},"mshtml":function(b){b.__hN(x);
},"opera":function(a){a.__hN(r);
}})});
})();
(function(){var A="qx.client",z="qx.dom.Hierarchy",y="previousSibling",x="*",w="nextSibling",v="parentNode";
qx.Class.define(z,{statics:{getNodeIndex:function(s){var t=0;

while(s&&(s=s.previousSibling)){t++;
}return t;
},getElementIndex:function(o){var p=0;
var q=qx.dom.Node.ELEMENT;

while(o&&(o=o.previousSibling)){if(o.nodeType==q){p++;
}}return p;
},getNextElementSibling:function(u){while(u&&(u=u.nextSibling)&&!qx.dom.Node.isElement(u)){continue;
}return u||null;
},getPreviousElementSibling:function(E){while(E&&(E=E.previousSibling)&&!qx.dom.Node.isElement(E)){continue;
}return E||null;
},contains:qx.core.Variant.select(A,{"webkit|mshtml|opera":function(B,C){if(qx.dom.Node.isDocument(B)){var D=qx.dom.Node.getDocument(C);
return B&&D==B;
}else if(qx.dom.Node.isDocument(C)){return false;
}else{return B.contains(C);
}},"gecko":function(U,V){return !!(U.compareDocumentPosition(V)&16);
},"default":function(N,O){while(O){if(N==O){return true;
}O=O.parentNode;
}return false;
}}),isRendered:function(P){if(!P.offsetParent){return false;
}var Q=P.ownerDocument||P.document;
if(Q.body.contains){return Q.body.contains(P);
}if(Q.compareDocumentPosition){return !!(Q.compareDocumentPosition(P)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(L,M){return this.contains(M,L);
},getCommonParent:qx.core.Variant.select(A,{"mshtml|opera":function(i,j){if(i===j){return i;
}
while(i&&qx.dom.Node.isElement(i)){if(i.contains(j)){return i;
}i=i.parentNode;
}return null;
},"default":function(F,G){if(F===G){return F;
}var H={};
var K=qx.core.ObjectRegistry;
var J,I;

while(F||G){if(F){J=K.toHashCode(F);

if(H[J]){return H[J];
}H[J]=F;
F=F.parentNode;
}
if(G){I=K.toHashCode(G);

if(H[I]){return H[I];
}H[I]=G;
G=G.parentNode;
}}return null;
}}),getAncestors:function(T){return this._recursivelyCollect(T,v);
},getChildElements:function(f){f=f.firstChild;

if(!f){return [];
}var g=this.getNextSiblings(f);

if(f.nodeType===1){g.unshift(f);
}return g;
},getDescendants:function(e){return qx.lang.Array.fromCollection(e.getElementsByTagName(x));
},getFirstDescendant:function(d){d=d.firstChild;

while(d&&d.nodeType!=1){d=d.nextSibling;
}return d;
},getLastDescendant:function(n){n=n.lastChild;

while(n&&n.nodeType!=1){n=n.previousSibling;
}return n;
},getPreviousSiblings:function(r){return this._recursivelyCollect(r,y);
},getNextSiblings:function(h){return this._recursivelyCollect(h,w);
},_recursivelyCollect:function(k,l){var m=[];

while(k=k[l]){if(k.nodeType==1){m.push(k);
}}return m;
},getSiblings:function(S){return this.getPreviousSiblings(S).reverse().concat(this.getNextSiblings(S));
},isEmpty:function(R){R=R.firstChild;

while(R){if(R.nodeType===qx.dom.Node.ELEMENT||R.nodeType===qx.dom.Node.TEXT){return false;
}R=R.nextSibling;
}return true;
},cleanWhitespace:function(a){var b=a.firstChild;

while(b){var c=b.nextSibling;

if(b.nodeType==3&&!/\S/.test(b.nodeValue)){a.removeChild(b);
}b=c;
}}}});
})();
(function(){var f="qx.client",e="qx.event.type.Drag";
qx.Class.define(e,{extend:qx.event.type.Event,members:{init:function(b,c){arguments.callee.base.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(m){var n=arguments.callee.base.call(this,m);
n._native=this._native;
return n;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var d=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(d);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(o){this.getManager().addAction(o);
},supportsType:function(a){return this.getManager().supportsType(a);
},supportsAction:function(j){return this.getManager().supportsAction(j);
},addData:function(k,l){this.getManager().addData(k,l);
},getData:function(i){return this.getManager().getData(i);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var l="losecapture",k="qx.client",j="blur",i="focus",h="click",g="qx.event.dispatch.MouseCapture",f="capture",e="scroll";
qx.Class.define(g,{extend:qx.event.dispatch.AbstractBubbling,construct:function(m,n){arguments.callee.base.call(this,m);
this.__hO=m.getWindow();
this.__hP=n;
m.addListener(this.__hO,j,this.releaseCapture,this);
m.addListener(this.__hO,i,this.releaseCapture,this);
m.addListener(this.__hO,e,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__hP:null,__hQ:null,__hR:true,__hO:null,_getParent:function(v){return v.parentNode;
},canDispatchEvent:function(b,event,c){return (this.__hQ&&this.__hS[c]);
},dispatchEvent:function(t,event,u){if(u==h){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hR||!qx.dom.Hierarchy.contains(this.__hQ,t)){t=this.__hQ;
}arguments.callee.base.call(this,t,event,u);
},__hS:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(o,p){var p=p!==false;

if(this.__hQ===o&&this.__hR==p){return;
}
if(this.__hQ){this.releaseCapture();
}this.nativeSetCapture(o,p);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(o,l,function(){qx.bom.Event.removeNativeListener(o,l,arguments.callee);
self.releaseCapture();
});
}this.__hR=p;
this.__hQ=o;
this.__hP.fireEvent(o,f,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hQ;
},releaseCapture:function(){var q=this.__hQ;

if(!q){return;
}this.__hQ=null;
this.__hP.fireEvent(q,l,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(q);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(k,{"mshtml":function(r,s){r.setCapture(s!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(k,{"mshtml":function(d){d.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hQ=this.__hO=this.__hP=null;
},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==f;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(u,v){var w=new ActiveXObject(this.DOMDOC);
w.setProperty(p,d);

if(v){var x=k;
x+=v;

if(u){x+=h+u+q;
}x+=n;
w.loadXML(x);
}return w;
},"default":function(D,E){return document.implementation.createDocument(D||s,E||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,g);
}})},defer:function(y){if(qx.core.Variant.isSet(t,r)){var z=[c,m];
var A=[e,j];

for(var i=0,l=z.length;i<l;i++){try{new ActiveXObject(z[i]);
new ActiveXObject(A[i]);
}catch(F){continue;
}y.DOMDOC=z[i];
y.XMLHTTP=A[i];
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
(function(){var bu="borderTopWidth",bt="borderLeftWidth",bs="marginTop",br="marginLeft",bq="scroll",bp="qx.client",bo="border-box",bn="borderBottomWidth",bm="borderRightWidth",bl="auto",bJ="padding",bI="qx.bom.element.Location",bH="paddingLeft",bG="static",bF="marginBottom",bE="visible",bD="BODY",bC="paddingBottom",bB="paddingTop",bA="marginRight",by="position",bz="margin",bw="overflow",bx="paddingRight",bv="border";
qx.Class.define(bI,{statics:{__hT:function(I,J){return qx.bom.element.Style.get(I,J,qx.bom.element.Style.COMPUTED_MODE,false);
},__hU:function(bc,bd){return parseInt(qx.bom.element.Style.get(bc,bd,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hV:function(E){var H=0,top=0;
if(E.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var G=qx.dom.Node.getWindow(E);
H-=qx.bom.Viewport.getScrollLeft(G);
top-=qx.bom.Viewport.getScrollTop(G);
}else{var F=qx.dom.Node.getDocument(E).body;
E=E.parentNode;
while(E&&E!=F){H+=E.scrollLeft;
top+=E.scrollTop;
E=E.parentNode;
}}return {left:H,top:top};
},__hW:qx.core.Variant.select(bp,{"mshtml":function(bK){var bM=qx.dom.Node.getDocument(bK);
var bL=bM.body;
var bN=0;
var top=0;
bN-=bL.clientLeft+bM.documentElement.clientLeft;
top-=bL.clientTop+bM.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bN+=this.__hU(bL,bt);
top+=this.__hU(bL,bu);
}return {left:bN,top:top};
},"webkit":function(n){var p=qx.dom.Node.getDocument(n);
var o=p.body;
var q=o.offsetLeft;
var top=o.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){q+=this.__hU(o,bt);
top+=this.__hU(o,bu);
}return {left:q,top:top};
},"gecko":function(t){var u=qx.dom.Node.getDocument(t).body;
var v=u.offsetLeft;
var top=u.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){v+=this.__hU(u,br);
top+=this.__hU(u,bs);
}if(qx.bom.element.BoxSizing.get(u)!==bo){v+=this.__hU(u,bt);
top+=this.__hU(u,bu);
}return {left:v,top:top};
},"default":function(h){var i=qx.dom.Node.getDocument(h).body;
var j=i.offsetLeft;
var top=i.offsetTop;
return {left:j,top:top};
}}),__hX:qx.core.Variant.select(bp,{"mshtml|webkit":function(be){var bg=qx.dom.Node.getDocument(be);
if(be.getBoundingClientRect){var bh=be.getBoundingClientRect();
var bi=bh.left;
var top=bh.top;
}else{var bi=be.offsetLeft;
var top=be.offsetTop;
be=be.offsetParent;
var bf=bg.body;
while(be&&be!=bf){bi+=be.offsetLeft;
top+=be.offsetTop;
bi+=this.__hU(be,bt);
top+=this.__hU(be,bu);
be=be.offsetParent;
}}return {left:bi,top:top};
},"gecko":function(T){if(T.getBoundingClientRect){var W=T.getBoundingClientRect();
var X=Math.round(W.left);
var top=Math.round(W.top);
}else{var X=0;
var top=0;
var U=qx.dom.Node.getDocument(T).body;
var V=qx.bom.element.BoxSizing;

if(V.get(T)!==bo){X-=this.__hU(T,bt);
top-=this.__hU(T,bu);
}
while(T&&T!==U){X+=T.offsetLeft;
top+=T.offsetTop;
if(V.get(T)!==bo){X+=this.__hU(T,bt);
top+=this.__hU(T,bu);
}if(T.parentNode&&this.__hT(T.parentNode,bw)!=bE){X+=this.__hU(T.parentNode,bt);
top+=this.__hU(T.parentNode,bu);
}T=T.offsetParent;
}}return {left:X,top:top};
},"default":function(a){var c=0;
var top=0;
var b=qx.dom.Node.getDocument(a).body;
while(a&&a!==b){c+=a.offsetLeft;
top+=a.offsetTop;
a=a.offsetParent;
}return {left:c,top:top};
}}),get:function(K,L){if(K.tagName==bD){var location=this.__hY(K);
var S=location.left;
var top=location.top;
}else{var M=this.__hW(K);
var R=this.__hX(K);
var scroll=this.__hV(K);
var S=R.left+M.left-scroll.left;
var top=R.top+M.top-scroll.top;
}var N=S+K.offsetWidth;
var O=top+K.offsetHeight;

if(L){if(L==bJ||L==bq){var P=qx.bom.element.Overflow.getX(K);

if(P==bq||P==bl){N+=K.scrollWidth-K.offsetWidth+this.__hU(K,bt)+this.__hU(K,bm);
}var Q=qx.bom.element.Overflow.getY(K);

if(Q==bq||Q==bl){O+=K.scrollHeight-K.offsetHeight+this.__hU(K,bu)+this.__hU(K,bn);
}}
switch(L){case bJ:S+=this.__hU(K,bH);
top+=this.__hU(K,bB);
N-=this.__hU(K,bx);
O-=this.__hU(K,bC);
case bq:S-=K.scrollLeft;
top-=K.scrollTop;
N-=K.scrollLeft;
O-=K.scrollTop;
case bv:S+=this.__hU(K,bt);
top+=this.__hU(K,bu);
N-=this.__hU(K,bm);
O-=this.__hU(K,bn);
break;
case bz:S-=this.__hU(K,br);
top-=this.__hU(K,bs);
N+=this.__hU(K,bA);
O+=this.__hU(K,bF);
break;
}}return {left:S,top:top,right:N,bottom:O};
},__hY:qx.core.Variant.select(bp,{"default":function(bj){var top=bj.offsetTop+this.__hU(bj,bs);
var bk=bj.offsetLeft+this.__hU(bj,br);
return {left:bk,top:top};
},"mshtml":function(d){var top=d.offsetTop;
var e=d.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hU(d,bs);
e+=this.__hU(d,br);
}return {left:e,top:top};
},"gecko":function(w){var top=w.offsetTop+this.__hU(w,bs)+this.__hU(w,bt);
var x=w.offsetLeft+this.__hU(w,br)+this.__hU(w,bu);
return {left:x,top:top};
}}),getLeft:function(Y,ba){return this.get(Y,ba).left;
},getTop:function(bO,bP){return this.get(bO,bP).top;
},getRight:function(f,g){return this.get(f,g).right;
},getBottom:function(r,s){return this.get(r,s).bottom;
},getRelative:function(y,z,A,B){var D=this.get(y,A);
var C=this.get(z,B);
return {left:D.left-C.left,top:D.top-C.top,right:D.right-C.right,bottom:D.bottom-C.bottom};
},getPosition:function(bb){return this.getRelative(bb,this.getOffsetParent(bb));
},getOffsetParent:function(k){var m=k.offsetParent||document.body;
var l=qx.bom.element.Style;

while(m&&(!/^body|html$/i.test(m.tagName)&&l.get(m,by)===bG)){m=m.offsetParent;
}return m;
}}});
})();
(function(){var J="qx.client",I="character",H="EndToEnd",G="input",F="textarea",E="StartToStart",D='character',C="qx.bom.Selection",B="button",A="#text",z="body";
qx.Class.define(C,{statics:{getSelectionObject:qx.core.Variant.select(J,{"mshtml":function(M){return M.selection;
},"default":function(v){return qx.dom.Node.getWindow(v).getSelection();
}}),get:qx.core.Variant.select(J,{"mshtml":function(K){var L=qx.bom.Range.get(qx.dom.Node.getDocument(K));
return L.text;
},"default":function(N){if(this.__ia(N)){return N.value.substring(N.selectionStart,N.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(N)).toString();
}}}),getLength:qx.core.Variant.select(J,{"mshtml":function(a){var c=this.get(a);
var b=qx.util.StringSplit.split(c,/\r\n/);
return c.length-(b.length-1);
},"opera":function(X){var bd,bb,Y;

if(this.__ia(X)){var bc=X.selectionStart;
var ba=X.selectionEnd;
bd=X.value.substring(bc,ba);
bb=ba-bc;
}else{bd=qx.bom.Selection.get(X);
bb=bd.length;
}Y=qx.util.StringSplit.split(bd,/\r\n/);
return bb-(Y.length-1);
},"default":function(by){if(this.__ia(by)){return by.selectionEnd-by.selectionStart;
}else{return this.get(by).length;
}}}),getStart:qx.core.Variant.select(J,{"mshtml":function(bg){if(this.__ia(bg)){var bl=qx.bom.Range.get();
if(!bg.contains(bl.parentElement())){return -1;
}var bm=qx.bom.Range.get(bg);
var bk=bg.value.length;
bm.moveToBookmark(bl.getBookmark());
bm.moveEnd(D,bk);
return bk-bm.text.length;
}else{var bm=qx.bom.Range.get(bg);
var bi=bm.parentElement();
var bn=qx.bom.Range.get();
bn.moveToElementText(bi);
var bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(bg));
bh.setEndPoint(E,bm);
bh.setEndPoint(H,bn);
if(bn.compareEndPoints(E,bh)==0){return 0;
}var bj;
var bo=0;

while(true){bj=bh.moveStart(I,-1);
if(bn.compareEndPoints(E,bh)==0){break;
}if(bj==0){break;
}else{bo++;
}}return ++bo;
}},"gecko|webkit":function(w){if(this.__ia(w)){return w.selectionStart;
}else{var y=qx.dom.Node.getDocument(w);
var x=this.getSelectionObject(y);
if(x.anchorOffset<x.focusOffset){return x.anchorOffset;
}else{return x.focusOffset;
}}},"default":function(bf){if(this.__ia(bf)){return bf.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bf)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(J,{"mshtml":function(O){if(this.__ia(O)){var T=qx.bom.Range.get();
if(!O.contains(T.parentElement())){return -1;
}var U=qx.bom.Range.get(O);
var S=O.value.length;
U.moveToBookmark(T.getBookmark());
U.moveStart(D,-S);
return U.text.length;
}else{var U=qx.bom.Range.get(O);
var Q=U.parentElement();
var V=qx.bom.Range.get();
V.moveToElementText(Q);
var S=V.text.length;
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));
P.setEndPoint(H,U);
P.setEndPoint(E,V);
if(V.compareEndPoints(H,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(I,1);
if(V.compareEndPoints(H,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(h){if(this.__ia(h)){return h.selectionEnd;
}else{var j=qx.dom.Node.getDocument(h);
var i=this.getSelectionObject(j);
if(i.focusOffset>i.anchorOffset){return i.focusOffset;
}else{return i.anchorOffset;
}}},"default":function(bx){if(this.__ia(bx)){return bx.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bx)).focusOffset;
}}}),__ia:function(bw){return qx.dom.Node.isElement(bw)&&(bw.nodeName.toLowerCase()==G||bw.nodeName.toLowerCase()==F);
},set:qx.core.Variant.select(J,{"mshtml":function(q,r,s){var t;
if(qx.dom.Node.isDocument(q)){q=q.body;
}
if(qx.dom.Node.isElement(q)||qx.dom.Node.isText(q)){switch(q.nodeName.toLowerCase()){case G:case F:case B:if(s===undefined){s=q.value.length;
}
if(r>=0&&r<=q.value.length&&s>=0&&s<=q.value.length){t=qx.bom.Range.get(q);
t.collapse(true);
t.moveStart(I,r);
t.moveEnd(I,s-r);
t.select();
return true;
}break;
case A:if(s===undefined){s=q.nodeValue.length;
}
if(r>=0&&r<=q.nodeValue.length&&s>=0&&s<=q.nodeValue.length){t=qx.bom.Range.get(qx.dom.Node.getBodyElement(q));
t.moveToElementText(q.parentNode);
t.collapse(true);
t.moveStart(I,r);
t.moveEnd(I,s-r);
t.select();
return true;
}break;
default:if(s===undefined){s=q.childNodes.length-1;
}if(q.childNodes[r]&&q.childNodes[s]){t=qx.bom.Range.get(qx.dom.Node.getBodyElement(q));
t.moveToElementText(q.childNodes[r]);
t.collapse(true);
var u=qx.bom.Range.get(qx.dom.Node.getBodyElement(q));
u.moveToElementText(q.childNodes[s]);
t.setEndPoint(H,u);
t.select();
return true;
}}}return false;
},"default":function(bp,bq,br){var bv=bp.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bp)&&(bv==G||bv==F)){if(br===undefined){br=bp.value.length;
}if(bq>=0&&bq<=bp.value.length&&br>=0&&br<=bp.value.length){bp.focus();
bp.select();
bp.setSelectionRange(bq,br);
return true;
}}else{var bt=false;
var bu=qx.dom.Node.getWindow(bp).getSelection();
var bs=qx.bom.Range.get(bp);
if(qx.dom.Node.isText(bp)){if(br===undefined){br=bp.length;
}
if(bq>=0&&bq<bp.length&&br>=0&&br<=bp.length){bt=true;
}}else if(qx.dom.Node.isElement(bp)){if(br===undefined){br=bp.childNodes.length-1;
}
if(bq>=0&&bp.childNodes[bq]&&br>=0&&bp.childNodes[br]){bt=true;
}}else if(qx.dom.Node.isDocument(bp)){bp=bp.body;

if(br===undefined){br=bp.childNodes.length-1;
}
if(bq>=0&&bp.childNodes[bq]&&br>=0&&bp.childNodes[br]){bt=true;
}}
if(bt){if(!bu.isCollapsed){bu.collapseToStart();
}bs.setStart(bp,bq);
if(qx.dom.Node.isText(bp)){bs.setEnd(bp,br);
}else{bs.setEndAfter(bp.childNodes[br]);
}if(bu.rangeCount>0){bu.removeAllRanges();
}bu.addRange(bs);
return true;
}}return false;
}}),setAll:function(be){return qx.bom.Selection.set(be,0);
},clear:qx.core.Variant.select(J,{"mshtml":function(d){var e=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(d));
var f=qx.bom.Range.get(d);
var parent=f.parentElement();
var g=qx.bom.Range.get(qx.dom.Node.getDocument(d));
if(parent==g.parentElement()&&parent==d){e.empty();
}},"default":function(k){var m=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(k));
var o=k.nodeName.toLowerCase();
if(qx.dom.Node.isElement(k)&&(o==G||o==F)){k.setSelectionRange(0,0);
qx.bom.Element.blur(k);
}else if(qx.dom.Node.isDocument(k)||o==z){m.collapse(k.body?k.body:k,0);
}else{var n=qx.bom.Range.get(k);

if(!n.collapsed){var p;
var l=n.commonAncestorContainer;
if(qx.dom.Node.isElement(k)&&qx.dom.Node.isText(l)){p=l.parentNode;
}else{p=l;
}
if(p==k){m.collapse(k,0);
}}}}})}});
})();
(function(){var m="button",l="qx.bom.Range",k="text",j="password",i="file",h="submit",g="reset",f="textarea",e="input",d="hidden",b="qx.client",c="body";
qx.Class.define(l,{statics:{get:qx.core.Variant.select(b,{"mshtml":function(a){if(qx.dom.Node.isElement(a)){switch(a.nodeName.toLowerCase()){case e:switch(a.type){case k:case j:case d:case m:case g:case i:case h:return a.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}break;
case f:case c:case m:return a.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}}else{if(a==null){a=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Class.define(c,{statics:{split:function(g,h,k){var n=f;
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
qx.Class.define(b,{statics:{__ib:{},remove:function(f){delete this.__ib[f.$$hash];
},add:function(g){var h=this.__ib;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__ib;
var e;

for(var d in c){e=c[d];
delete c[d];
e.syncWidget();
}for(var d in c){return;
}this.__ib={};
}}});
})();
(function(){var j="qx.ui.core.queue.Visibility",i="visibility";
qx.Class.define(j,{statics:{__ic:{},__id:{},remove:function(g){var h=g.$$hash;
delete this.__id[h];
delete this.__ic[h];
},isVisible:function(f){return this.__id[f.$$hash]||false;
},__ie:function(k){var m=this.__id;
var l=k.$$hash;
var n;
if(k.isExcluded()){n=false;
}else{var parent=k.$$parent;

if(parent){n=this.__ie(parent);
}else{n=k.isRootWidget();
}}return m[l]=n;
},add:function(o){var p=this.__ic;

if(p[o.$$hash]){return;
}p[o.$$hash]=o;
qx.ui.core.queue.Manager.scheduleFlush(i);
},flush:function(){var a=this.__ic;
var e=this.__id;
for(var b in a){if(e[b]!=null){a[b].addChildrenToQueue(a);
}}var d={};

for(var b in a){d[b]=e[b];
e[b]=null;
}for(var b in a){var c=a[b];
delete a[b];
if(e[b]==null){this.__ie(c);
}if(e[b]&&e[b]!=d[b]){c.checkAppearanceNeeds();
}}this.__ic={};
}}});
})();
(function(){var g="appearance",f="qx.ui.core.queue.Appearance";
qx.Class.define(f,{statics:{__if:{},remove:function(a){delete this.__if[a.$$hash];
},add:function(i){var j=this.__if;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(g);
},has:function(h){return !!this.__if[h.$$hash];
},flush:function(){var e=qx.ui.core.queue.Visibility;
var b=this.__if;
var d;

for(var c in b){d=b[c];
delete b[c];
if(e.isVisible(d)){d.syncAppearance();
}else{d.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__ig:{},add:function(c){var d=this.__ig;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__ig;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__ig={};
}}});
})();
(function(){var h="none",g="qx.html.Decorator",f="absolute";
qx.Class.define(g,{extend:qx.html.Element,construct:function(a,b){arguments.callee.base.call(this);
this.__ih=a;
this.__ii=b||a.toHashCode();
this.useMarkup(a.getMarkup());
var c={position:f,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){c.pointerEvents=h;
}this.setStyles(c);
},members:{__ii:null,__ih:null,getId:function(){return this.__ii;
},getDecorator:function(){return this.__ih;
},resize:function(d,e){this.__ih.resize(this.getDomElement(),d,e);
},tint:function(i){this.__ih.tint(this.getDomElement(),i);
},getInsets:function(){return this.__ih.getInsets();
}},destruct:function(){this.__ih=null;
}});
})();
(function(){var A="blur",z="focus",y="input",x="load",w="qx.ui.core.EventHandler",v="activate";
qx.Class.define(w,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__ij=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__ij:null,__ik:{focusin:1,focusout:1,focus:1,blur:1},__il:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(B,C){return B instanceof qx.ui.core.Widget;
},_dispatchEvent:function(a){var f=a.getTarget();
var e=qx.ui.core.Widget.getWidgetByElement(f);
var g=false;

while(e&&e.isAnonymous()){var g=true;
e=e.getLayoutParent();
}if(e&&g&&a.getType()==v){e.getContainerElement().activate();
}if(this.__ik[a.getType()]){e=e&&e.getFocusTarget();
if(!e){return;
}}if(a.getRelatedTarget){var p=a.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__ik[a.getType()]){o=o.getFocusTarget();
}if(o===e){return;
}}}var j=a.getCurrentTarget();
var m=qx.ui.core.Widget.getWidgetByElement(j);

if(!m||m.isAnonymous()){return;
}if(this.__ik[a.getType()]){m=m.getFocusTarget();
}var n=a.getType();

if(!m||!(m.isEnabled()||this.__il[n])){return;
}var b=a.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var h=this.__ij.getListeners(m,n,b);

if(!h||h.length===0){return;
}var c=qx.event.Pool.getInstance().getObject(a.constructor);
a.clone(c);
c.setTarget(e);
c.setRelatedTarget(o||null);
c.setCurrentTarget(m);
var q=a.getOriginalTarget();

if(q){var d=qx.ui.core.Widget.getWidgetByElement(q);

while(d&&d.isAnonymous()){d=d.getLayoutParent();
}c.setOriginalTarget(d);
}else{c.setOriginalTarget(f);
}for(var i=0,l=h.length;i<l;i++){var k=h[i].context||m;
h[i].handler.call(k,c);
}if(c.getPropagationStopped()){a.stopPropagation();
}
if(c.getDefaultPrevented()){a.preventDefault();
}qx.event.Pool.getInstance().poolObject(c);
},registerEvent:function(r,s,t){var u;

if(s===z||s===A){u=r.getFocusElement();
}else if(s===x||s===y){u=r.getContentElement();
}else{u=r.getContainerElement();
}
if(u){u.addListener(s,this._dispatchEvent,this,t);
}},unregisterEvent:function(D,E,F){var G;

if(E===z||E===A){G=D.getFocusElement();
}else if(E===x||E===y){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__ij=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__im:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__im();
}});
})();
(function(){var u="",t='indexOf',s='slice',r='concat',q='toLocaleLowerCase',p="qx.type.BaseString",o='match',n='toLocaleUpperCase',m='search',k='replace',d='toLowerCase',j='charCodeAt',g='split',c='substring',b='lastIndexOf',f='substr',e='toUpperCase',h='charAt';
qx.Class.define(p,{extend:Object,construct:function(a){var a=a||u;
this.__in=a;
this.length=a.length;
},members:{$$isString:true,length:0,__in:null,toString:function(){return this.__in;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){{};
var z=[h,j,r,t,b,o,k,m,s,g,f,c,d,e,q,n];
y.valueOf=y.toString;

if(new x(u).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__io=c;
this.__ip=d;
},members:{__io:null,__ip:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__io,this.__ip);
}}});
})();
(function(){var A="_",z="",y="qx.dynlocale",x="on",w="_applyLocale",v="changeLocale",u="C",t="qx.locale.Manager",s="String",r="singleton";
qx.Class.define(t,{type:r,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iq=qx.$$translations||{};
this.__ir=qx.$$locales||{};
var J=qx.bom.client.Locale;
var H=J.LOCALE;
var I=J.VARIANT;

if(I!==z){H+=A+I;
}this.setLocale(H||this.__is);
},statics:{tr:function(l,m){var n=qx.lang.Array.fromArguments(arguments);
n.splice(0,1);
return qx.locale.Manager.getInstance().translate(l,n);
},trn:function(C,D,E,F){var G=qx.lang.Array.fromArguments(arguments);
G.splice(0,3);
if(E!=1){return qx.locale.Manager.getInstance().translate(D,G);
}else{return qx.locale.Manager.getInstance().translate(C,G);
}},trc:function(W,X,Y){var ba=qx.lang.Array.fromArguments(arguments);
ba.splice(0,2);
return qx.locale.Manager.getInstance().translate(X,ba);
},marktr:function(B){return B;
}},properties:{locale:{check:s,nullable:true,apply:w,event:v}},members:{__is:u,__it:null,__iu:null,__iq:null,__ir:null,getLanguage:function(){return this.__iu;
},getTerritory:function(){return this.getLocale().split(A)[1]||z;
},getAvailableLocales:function(){var bg=[];

for(var bf in this.__ir){if(bf!=this.__is){bg.push(bf);
}}return bg;
},__iv:function(o){var q;
var p=o.indexOf(A);

if(p==-1){q=o;
}else{q=o.substring(0,p);
}return q;
},_applyLocale:function(a,b){this.__it=a;
this.__iu=this.__iv(a);
},addTranslation:function(S,T){var U=this.__iq;

if(U[S]){for(var V in T){U[S][V]=T[V];
}}else{U[S]=T;
}},addLocale:function(bb,bc){var bd=this.__ir;

if(bd[bb]){for(var be in bc){bd[bb][be]=bc[be];
}}else{bd[bb]=bc;
}},translate:function(K,L,M){var R;
var P=this.__iq;

if(!P){return K;
}
if(M){var O=this.__iv(M);
}else{M=this.__it;
O=this.__iu;
}
if(!R&&P[M]){R=P[M][K];
}
if(!R&&P[O]){R=P[O][K];
}
if(!R&&P[this.__is]){R=P[this.__is][K];
}
if(!R){R=K;
}
if(L.length>0){var N=[];

for(var i=0;i<L.length;i++){var Q=L[i];

if(Q&&Q.translate){N[i]=Q.translate();
}else{N[i]=Q;
}}R=qx.lang.String.format(R,N);
}
if(qx.core.Variant.isSet(y,x)){R=new qx.locale.LocalizedString(R,K,L);
}return R;
},localize:function(c,d,e){var k;
var h=this.__ir;

if(!h){return c;
}
if(e){var g=this.__iv(e);
}else{e=this.__it;
g=this.__iu;
}
if(!k&&h[e]){k=h[e][c];
}
if(!k&&h[g]){k=h[g][c];
}
if(!k&&h[this.__is]){k=h[this.__is][c];
}
if(!k){k=c;
}
if(d.length>0){var f=[];

for(var i=0;i<d.length;i++){var j=d[i];

if(j.translate){f[i]=j.translate();
}else{f[i]=j;
}}k=qx.lang.String.format(k,f);
}
if(qx.core.Variant.isSet(y,x)){k=new qx.locale.LocalizedString(k,c,d);
}return k;
}},destruct:function(){this.__iq=this.__ir=null;
}});
})();
(function(){var n="source",m="scale",l="no-repeat",k="mshtml",j="backgroundImage",i="qx.client",h="div",g="qx.html.Image";
qx.Class.define(g,{extend:qx.html.Element,members:{_applyProperty:function(name,a){arguments.callee.base.call(this,name,a);

if(name===n){var e=this.getDomElement();
var b=this.getAllStyles();

if(this.getNodeName()==h&&this.getStyle(j)){b.backgroundPosition=null;
b.backgroundRepeat=null;
}var c=this._getProperty(n);
var d=this._getProperty(m);
var f=d?m:l;
qx.bom.element.Decoration.update(e,c,f,b);
}},_createDomElement:function(){var r=this._getProperty(m);
var s=r?m:l;

if(qx.core.Variant.isSet(i,k)){var q=this._getProperty(n);
this.setNodeName(qx.bom.element.Decoration.getTagName(s,q));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s));
}return arguments.callee.base.call(this);
},_copyData:function(o){return arguments.callee.base.call(this,true);
},setSource:function(t){this._setProperty(n,t);
return this;
},getSource:function(){return this._getProperty(n);
},resetSource:function(){this._removeProperty(n);
return this;
},setScale:function(p){this._setProperty(m,p);
return this;
},getScale:function(){return this._getProperty(m);
}}});
})();
(function(){var E="nonScaled",D="scaled",C="alphaScaled",B=".png",A="replacement",z="hidden",y="div",x="Boolean",w="_applyScale",v="px",p="__iw",u="_applySource",s="-disabled.$1",o="img",n="changeSource",r="qx.client",q="String",t="image",m="qx.ui.basic.Image";
qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(bg){this.__iw={};
arguments.callee.base.call(this);

if(bg){this.setSource(bg);
}},properties:{source:{check:q,init:null,nullable:true,event:n,apply:u,themeable:true},scale:{check:x,init:false,themeable:true,apply:w},appearance:{refine:true,init:t},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__ix:null,__iy:null,__iz:null,__iw:null,getContentElement:function(){return this.__iD();
},_createContentElement:function(){return this.__iD();
},_getContentHint:function(){return {width:this.__ix||0,height:this.__iy||0};
},_applyEnabled:function(M,N){arguments.callee.base.call(this,M,N);

if(this.getSource()){this._styleSource();
}},_applySource:function(ba){this._styleSource();
},_applyScale:function(a){this._styleSource();
},__iA:function(h){this.__iz=h;
},__iB:function(){if(this.__iz==null){var be=this.getSource();
var bd=false;

if(be!=null){bd=qx.lang.String.endsWith(be,B);
}
if(this.getScale()&&bd&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iz=C;
}else if(this.getScale()){this.__iz=D;
}else{this.__iz=E;
}}return this.__iz;
},__iC:function(F){var G;
var H;

if(F==C){G=true;
H=y;
}else if(F==E){G=false;
H=y;
}else{G=true;
H=o;
}var I=new qx.html.Image(H);
I.setScale(G);
I.setStyles({"overflowX":z,"overflowY":z});
return I;
},__iD:function(){var bf=this.__iB();

if(this.__iw[bf]==null){this.__iw[bf]=this.__iC(bf);
}return this.__iw[bf];
},_styleSource:function(){var b=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!b){this.getContentElement().resetSource();
return;
}this.__iE(b);
if(qx.util.ResourceManager.getInstance().has(b)){this.__iG(this.getContentElement(),b);
}else if(qx.io.ImageLoader.isLoaded(b)){this.__iH(this.getContentElement(),b);
}else{this.__iI(this.getContentElement(),b);
}},__iE:qx.core.Variant.select(r,{"mshtml":function(V){var X=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var W=qx.lang.String.endsWith(V,B);

if(X&&W){if(this.getScale()&&this.__iB()!=C){this.__iA(C);
}else if(!this.getScale()&&this.__iB()!=E){this.__iA(E);
}}else{if(this.getScale()&&this.__iB()!=D){this.__iA(D);
}else if(!this.getScale()&&this.__iB()!=E){this.__iA(E);
}}this.__iF(this.__iD());
},"default":function(Y){if(this.getScale()&&this.__iB()!=D){this.__iA(D);
}else if(!this.getScale()&&this.__iB(E)){this.__iA(E);
}this.__iF(this.__iD());
}}),__iF:function(O){var R=this.getContainerElement();
var S=R.getChild(0);

if(S!=O){if(S!=null){var U=v;
var P={};
var Q=this.getInnerSize();

if(Q!=null){P.width=Q.width+U;
P.height=Q.height+U;
}var T=this.getInsets();
P.left=T.left+U;
P.top=T.top+U;
P.zIndex=10;
O.setStyles(P,true);
O.setSelectable(this.getSelectable());
}R.removeAt(0);
R.addAt(O,0);
}},__iG:function(i,j){var l=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var k=j.replace(/\.([a-z]+)$/,s);

if(l.has(k)){j=k;
this.addState(A);
}else{this.removeState(A);
}}if(i.getSource()===j){return;
}i.setSource(j);
this.__iK(l.getImageWidth(j),l.getImageHeight(j));
},__iH:function(c,d){var f=qx.io.ImageLoader;
c.setSource(d);
var e=f.getWidth(d);
var g=f.getHeight(d);
this.__iK(e,g);
},__iI:function(J,K){var self;
var L=qx.io.ImageLoader;
{};
if(!L.isFailed(K)){L.load(K,this.__iJ,this);
}else{if(J!=null){J.resetSource();
}}},__iJ:function(bh,bi){if(bh!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bi.failed){this.warn("Image could not be loaded: "+bh);
}this._styleSource();
},__iK:function(bb,bc){if(bb!==this.__ix||bc!==this.__iy){this.__ix=bb;
this.__iy=bc;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(p);
}});
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
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){arguments.callee.base.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__iL=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__iL:null,_applyTimeoutInterval:function(h){this.__iL.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__iL){this.__iL.stop();
}this.__iL=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__iM';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iM=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__iN:null,compute:function(p,q,r,s,t,u,v){this.__iN=this.__iN||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__iN.set({axisX:this.__iR(u),axisY:this.__iR(v),edge:x,align:w});
return this.__iN.compute(p,q,r,s);
},__iO:null,__iP:null,__iQ:null,__iR:function(K){switch(K){case b:this.__iO=this.__iO||new qx.util.placement.DirectAxis();
return this.__iO;
case d:this.__iP=this.__iP||new qx.util.placement.KeepAlignAxis();
return this.__iP;
case c:this.__iQ=this.__iQ||new qx.util.placement.BestFitAxis();
return this.__iQ;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__iM:null,compute:function(B,C,D,E){{};
var F=this.getAxisX()||this.__iM;
var H=F.computeStart(B.width,{start:D.left,end:D.right},{start:E.left,end:E.right},C.width,this.__iS());
var G=this.getAxisY()||this.__iM;
var top=G.computeStart(B.height,{start:D.top,end:D.bottom},{start:E.top,end:E.bottom},C.height,this.__iT());
return {left:H,top:top};
},__iS:function(){var J=this.getEdge();
var I=this.getAlign();

if(J==l){return i;
}else if(J==n){return g;
}else if(I==l){return k;
}else if(I==n){return h;
}},__iT:function(){var A=this.getEdge();
var z=this.getAlign();

if(A==o){return i;
}else if(A==m){return g;
}else if(z==o){return k;
}else if(z==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var j="edge-start",i="align-start",h="align-end",g="edge-end",f="qx.util.placement.AbstractAxis";
qx.Class.define(f,{extend:qx.core.Object,members:{computeStart:function(a,b,c,d,e){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case j:return o.start-p.end-n;
case g:return o.end+p.start;
case i:return o.start+p.start;
case h:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var k="qx.util.placement.KeepAlignAxis",j="edge-start",i="edge-end";
qx.Class.define(k,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(a,b,c,d,e){var f=this._moveToEdgeAndAlign(a,b,c,e);
var g,h;

if(this._isInRange(f,a,d)){return f;
}
if(e==j||e==i){g=b.start-c.end;
h=b.end+c.start;
}else{g=b.end-c.end;
h=b.start+c.start;
}
if(g>d-h){f=g-a;
}else{f=h;
}return f;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var f="mousedown",d="__iU",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iU={};
qx.event.Registration.addListener(document.documentElement,f,this.__iW,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__iU:null,add:function(r){{};
this.__iU[r.$$hash]=r;
this.__iV();
},remove:function(g){{};
var h=this.__iU;

if(h){delete h[g.$$hash];
this.__iV();
}},hideAll:function(){var j=this.__iU;

if(j){for(var i in j){j[i].exclude();
}}},__iV:function(){var m=1e7;
var l=this.__iU;

for(var k in l){l[k].setZIndex(m++);
}},__iW:function(e){var p=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var q=this.__iU;

for(var o in q){var n=q[o];

if(!n.getAutoHide()||p==n||qx.ui.core.Widget.contains(n,p)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__iW,this,true);
this._disposeMap(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__iX:null,_invalidChildrenCache:null,__iY:null,invalidateLayoutCache:function(){this.__iX=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__iX){return this.__iX;
}return this.__iX=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(g){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var e=this.__iY;

if(e instanceof qx.ui.core.LayoutItem){e.clearSeparators();
}},_renderSeparator:function(h,i){this.__iY.renderSeparator(h,i);
},connectToWidget:function(f){if(f&&this.__iY){throw new Error("It is not possible to manually set the connected widget.");
}this.__iY=f;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__iY;
},_applyLayoutChange:function(){if(this.__iY){this.__iY.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__iY.getLayoutChildren();
}},destruct:function(){this.__iY=this.__iX=null;
}});
})();
(function(){var k="qx.ui.layout.Grow";
qx.Class.define(k,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(m,n){var r=this._getLayoutChildren();
var q,s,p,o;
for(var i=0,l=r.length;i<l;i++){q=r[i];
s=q.getSizeHint();
p=m;

if(p<s.minWidth){p=s.minWidth;
}else if(p>s.maxWidth){p=s.maxWidth;
}o=n;

if(o<s.minHeight){o=s.minHeight;
}else if(o>s.maxHeight){o=s.maxHeight;
}q.renderLayout(0,0,p,o);
}},_computeSizeHint:function(){var g=this._getLayoutChildren();
var e,j;
var h=0,f=0;
var d=0,b=0;
var a=Infinity,c=Infinity;
for(var i=0,l=g.length;i<l;i++){e=g[i];
j=e.getSizeHint();
h=Math.max(h,j.width);
f=Math.max(f,j.height);
d=Math.max(d,j.minWidth);
b=Math.max(b,j.minHeight);
a=Math.min(a,j.maxWidth);
c=Math.min(c,j.maxHeight);
}return {width:h,height:f,minWidth:d,minHeight:b,maxWidth:a,maxHeight:c};
}}});
})();
(function(){var o="label",n="icon",m="Boolean",l="both",k="String",j="left",i="changeGap",h="changeShow",g="bottom",f="_applyCenter",B="changeIcon",A="qx.ui.basic.Atom",z="changeLabel",y="Integer",x="_applyIconPosition",w="top",v="right",u="_applyRich",t="_applyIcon",s="_applyShow",q="_applyLabel",r="_applyGap",p="atom";
qx.Class.define(A,{extend:qx.ui.core.Widget,construct:function(C,D){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(C!=null){this.setLabel(C);
}
if(D!=null){this.setIcon(D);
}},properties:{appearance:{refine:true,init:p},label:{apply:q,nullable:true,check:k,event:z},rich:{check:m,init:false,apply:u},icon:{check:k,apply:t,nullable:true,themeable:true,event:B},gap:{check:y,nullable:false,event:i,apply:r,themeable:true,init:4},show:{init:l,check:[l,o,n],themeable:true,inheritable:true,apply:s,event:h},iconPosition:{init:j,check:[w,v,g,j],themeable:true,apply:x},center:{init:false,check:m,themeable:true,apply:f}},members:{_createChildControlImpl:function(J){var K;

switch(J){case o:K=new qx.ui.basic.Label(this.getLabel());
K.setAnonymous(true);
K.setRich(this.getRich());
this._add(K);

if(this.getLabel()==null||this.getShow()===n){K.exclude();
}break;
case n:K=new qx.ui.basic.Image(this.getIcon());
K.setAnonymous(true);
this._addAt(K,0);

if(this.getIcon()==null||this.getShow()===o){K.exclude();
}break;
}return K||arguments.callee.base.call(this,J);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===n){this._excludeChildControl(o);
}else{this._showChildControl(o);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===o){this._excludeChildControl(n);
}else{this._showChildControl(n);
}},_applyLabel:function(E,F){var G=this.getChildControl(o,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(N,O){var P=this.getChildControl(o,true);

if(P){P.setRich(N);
}},_applyIcon:function(a,b){var c=this.getChildControl(n,true);

if(c){c.setSource(a);
}this._handleIcon();
},_applyGap:function(H,I){this._getLayout().setGap(H);
},_applyShow:function(d,e){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(L,M){this._getLayout().setIconPosition(L);
},_applyCenter:function(Q,R){this._getLayout().setCenter(Q);
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
(function(){var E="middle",D="qx.ui.layout.Util",C="left",B="center",A="top",z="bottom",y="right";
qx.Class.define(D,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(g,h,j){var m,q,k,r;
var n=h>j;
var s=Math.abs(h-j);
var t,o;
var p={};

for(q in g){m=g[q];
p[q]={potential:n?m.max-m.value:m.value-m.min,flex:n?m.flex:1/m.flex,offset:0};
}while(s!=0){r=Infinity;
k=0;

for(q in p){m=p[q];

if(m.potential>0){k+=m.flex;
r=Math.min(r,m.potential/m.flex);
}}if(k==0){break;
}r=Math.min(s,r*k)/k;
t=0;

for(q in p){m=p[q];

if(m.potential>0){o=Math.min(s,m.potential,Math.ceil(r*m.flex));
t+=o-r*m.flex;

if(t>=1){t-=1;
o-=1;
}m.potential-=o;

if(n){m.offset+=o;
}else{m.offset-=o;
}s-=o;
}}}return p;
},computeHorizontalAlignOffset:function(a,b,c,d,e){if(d==null){d=0;
}
if(e==null){e=0;
}var f=0;

switch(a){case C:f=d;
break;
case y:f=c-b-e;
break;
case B:f=Math.round((c-b)/2);
if(f<d){f=d;
}else if(f<e){f=Math.max(d,c-b-e);
}break;
}return f;
},computeVerticalAlignOffset:function(bg,bh,bi,bj,bk){if(bj==null){bj=0;
}
if(bk==null){bk=0;
}var bl=0;

switch(bg){case A:bl=bj;
break;
case z:bl=bi-bh-bk;
break;
case E:bl=Math.round((bi-bh)/2);
if(bl<bj){bl=bj;
}else if(bl<bk){bl=Math.max(bj,bi-bh-bk);
}break;
}return bl;
},collapseMargins:function(u){var v=0,x=0;

for(var i=0,l=arguments.length;i<l;i++){var w=arguments[i];

if(w<0){x=Math.min(x,w);
}else if(w>0){v=Math.max(v,w);
}}return v+x;
},computeHorizontalGaps:function(bc,bd,be){if(bd==null){bd=0;
}var bf=0;

if(be){bf+=bc[0].getMarginLeft();

for(var i=1,l=bc.length;i<l;i+=1){bf+=this.collapseMargins(bd,bc[i-1].getMarginRight(),bc[i].getMarginLeft());
}bf+=bc[l-1].getMarginRight();
}else{for(var i=1,l=bc.length;i<l;i+=1){bf+=bc[i].getMarginLeft()+bc[i].getMarginRight();
}bf+=(bd*(l-1));
}return bf;
},computeVerticalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginTop();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginBottom(),bm[i].getMarginTop());
}bp+=bm[l-1].getMarginBottom();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginTop()+bm[i].getMarginBottom();
}bp+=(bn*(l-1));
}return bp;
},computeHorizontalSeparatorGaps:function(F,G,H){var K=qx.theme.manager.Decoration.getInstance().resolve(H);
var J=K.getInsets();
var I=J.left+J.right;
var L=0;

for(var i=0,l=F.length;i<l;i++){var M=F[i];
L+=M.getMarginLeft()+M.getMarginRight();
}L+=(G+I+G)*(l-1);
return L;
},computeVerticalSeparatorGaps:function(N,O,P){var S=qx.theme.manager.Decoration.getInstance().resolve(P);
var R=S.getInsets();
var Q=R.top+R.bottom;
var T=0;

for(var i=0,l=N.length;i<l;i++){var U=N[i];
T+=U.getMarginTop()+U.getMarginBottom();
}T+=(O+Q+O)*(l-1);
return T;
},arrangeIdeals:function(V,W,X,Y,ba,bb){if(W<V||ba<Y){if(W<V&&ba<Y){W=V;
ba=Y;
}else if(W<V){ba-=(V-W);
W=V;
if(ba<Y){ba=Y;
}}else if(ba<Y){W-=(Y-ba);
ba=Y;
if(W<V){W=V;
}}}
if(W>X||ba>bb){if(W>X&&ba>bb){W=X;
ba=bb;
}else if(W>X){ba+=(W-X);
W=X;
if(ba>bb){ba=bb;
}}else if(ba>bb){W+=(ba-bb);
ba=bb;
if(W>X){W=X;
}}}return {begin:W,end:ba};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var q="qx.dynlocale",p="text",o="Boolean",n="qx.client",m="color",l="userSelect",k="changeLocale",j="enabled",i="none",h="on",L="_applyTextAlign",K="qx.ui.core.Widget",J="gecko",I="changeTextAlign",H="_applyWrap",G="changeValue",F="changeContent",E="qx.ui.basic.Label",D="A",C="_applyValue",x="center",y="_applyBuddy",v="String",w="textAlign",t="right",u="changeRich",r="_applyRich",s="click",z="label",A="webkit",B="left";
qx.Class.define(E,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(P){arguments.callee.base.call(this);

if(P!=null){this.setValue(P);
}
if(qx.core.Variant.isSet(q,h)){qx.locale.Manager.getInstance().addListener(k,this._onChangeLocale,this);
}},properties:{rich:{check:o,init:false,event:u,apply:r},wrap:{check:o,init:true,apply:H},value:{check:v,apply:C,event:G,nullable:true},buddy:{check:K,apply:y,nullable:true,init:null},textAlign:{check:[B,x,t],nullable:true,themeable:true,apply:L,event:I},appearance:{refine:true,init:z},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__ja:null,__jb:null,__jc:null,__jd:null,_getContentHint:function(){if(this.__jb){this.__je=this.__jf();
delete this.__jb;
}return {width:this.__je.width,height:this.__je.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(O){if(qx.core.Variant.isSet(n,J)){if(O&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,O);
if(qx.core.Variant.isSet(n,A)){this.getContainerElement().setStyle(l,O?p:i);
this.getContentElement().setStyle(l,O?p:i);
}},_getContentHeightForWidth:function(d){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jf(d).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(M,N){this.getContentElement().setStyle(w,M);
},_applyTextColor:function(b,c){if(b){this.getContentElement().setStyle(m,qx.theme.manager.Color.getInstance().resolve(b));
}else{this.getContentElement().removeStyle(m);
}},__je:{width:0,height:0},_applyFont:function(Y,ba){var bb;

if(Y){this.__ja=qx.theme.manager.Font.getInstance().resolve(Y);
bb=this.__ja.getStyles();
}else{this.__ja=null;
bb=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bb);
this.__jb=true;
qx.ui.core.queue.Layout.add(this);
},__jf:function(Q){var U=qx.bom.Label;
var S=this.getFont();
var R=S?this.__ja.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||D;
var T=this.getRich();
return T?U.getHtmlSize(content,R,Q):U.getTextSize(content,R);
},_applyBuddy:function(W,X){if(X!=null){X.removeBinding(this.__jc);
this.__jc=null;
this.removeListenerById(this.__jd);
this.__jd=null;
}
if(W!=null){this.__jc=W.bind(j,this,j);
this.__jd=this.addListener(s,W.focus,W);
}},_applyRich:function(a){this.getContentElement().setRich(a);
this.__jb=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(f,g){if(f&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(q,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(bc,bd){this.getContentElement().setValue(bc);
this.__jb=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(F,bc,bd);
}},destruct:function(){if(qx.core.Variant.isSet(q,h)){qx.locale.Manager.getInstance().removeListener(k,this._onChangeLocale,this);
}if(this.__jc!=null){var V=this.getBuddy();

if(V!=null&&!V.isDisposed()){V.removeBinding(this.__jc);
}}this.__ja=this.__jc=null;
}});
})();
(function(){var h="value",g="Please use the getValue() method instead.",f="qx.html.Label",e="Please use the setValue() method instead.";
qx.Class.define(f,{extend:qx.html.Element,members:{__jg:null,_applyProperty:function(name,l){arguments.callee.base.call(this,name,l);

if(name==h){var m=this.getDomElement();
qx.bom.Label.setValue(m,l);
}},_createDomElement:function(){var d=this.__jg;
var c=qx.bom.Label.create(this._content,d);
return c;
},_copyData:function(k){return arguments.callee.base.call(this,true);
},setRich:function(a){var b=this.getDomElement();

if(b){throw new Error("The label mode cannot be modified after initial creation");
}a=!!a;

if(this.__jg==a){return;
}this.__jg=a;
return this;
},setValue:function(i){this._setProperty(h,i);
return this;
},getValue:function(){return this._getProperty(h);
},setContent:function(j){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return this.setValue(j);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.getValue();
}}});
})();
(function(){var z="qx.client",y="gecko",x="div",w="inherit",v="text",u="value",t="",s="hidden",r="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",q="nowrap",Q="auto",P="ellipsis",O="normal",N="label",M="px",L="crop",K="end",J="100%",I="visible",H="qx.bom.Label",F="Please use the setValue() method instead.",G="opera",D="Please use the getValue() method instead.",E="block",B="none",C="-1000px",A="absolute";
qx.Class.define(H,{statics:{__jh:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__ji:function(){var R=this.__jk(false);
document.body.insertBefore(R,document.body.firstChild);
return this._textElement=R;
},__jj:function(){var bf=this.__jk(true);
document.body.insertBefore(bf,document.body.firstChild);
return this._htmlElement=bf;
},__jk:function(ba){var bb=qx.bom.Element.create(x);
var bc=bb.style;
bc.width=bc.height=Q;
bc.left=bc.top=C;
bc.visibility=s;
bc.position=A;
bc.overflow=I;

if(ba){bc.whiteSpace=O;
}else{bc.whiteSpace=q;

if(qx.core.Variant.isSet(z,y)){var bd=document.createElementNS(r,N);
for(var be in this.__jh){bd.style[be]=w;
}bb.appendChild(bd);
}}return bb;
},__jl:function(S){var T={};

if(S){T.whiteSpace=O;
}else if(qx.core.Variant.isSet(z,y)){T.display=E;
}else{T.overflow=s;
T.whiteSpace=q;
T.textOverflow=P;
T.userSelect=B;
if(qx.core.Variant.isSet(z,G)){T.OTextOverflow=P;
}}return T;
},create:function(content,i,j){if(!j){j=window;
}
if(i){var k=j.document.createElement(x);
k.useHtml=true;
}else if(qx.core.Variant.isSet(z,y)){var k=j.document.createElement(x);
var l=j.document.createElementNS(r,N);
l.style.cursor=w;
l.style.color=w;
l.style.overflow=s;
l.style.maxWidth=J;
for(var m in this.__jh){l.style[m]=w;
}l.setAttribute(L,K);
k.appendChild(l);
}else{var k=j.document.createElement(x);
qx.bom.element.Style.setStyles(k,this.__jl(i));
}
if(content){this.setValue(k,content);
}return k;
},setValue:function(U,V){V=V||t;

if(U.useHtml){U.innerHTML=V;
}else if(qx.core.Variant.isSet(z,y)){U.firstChild.setAttribute(u,V);
}else{qx.bom.element.Attribute.set(U,v,V);
}},getValue:function(bg){if(bg.useHtml){return bg.innerHTML;
}else if(qx.core.Variant.isSet(z,y)){return bg.firstChild.getAttribute(u)||t;
}else{return qx.bom.element.Attribute.get(bg,v);
}},getHtmlSize:function(content,n,o){var p=this._htmlElement||this.__jj();
p.style.width=o!==undefined?o+M:Q;
p.innerHTML=content;
return this.__jm(p,n);
},getTextSize:function(W,X){var Y=this._textElement||this.__ji();

if(qx.core.Variant.isSet(z,y)){Y.firstChild.setAttribute(u,W);
}else{qx.bom.element.Attribute.set(Y,v,W);
}return this.__jm(Y,X);
},__jm:function(d,e){var f=this.__jh;

if(!e){e={};
}
for(var g in f){d.style[g]=e[g]||t;
}var h=qx.bom.element.Dimension.getSize(d);

if(qx.core.Variant.isSet(z,y)){if(!qx.bom.client.Platform.WIN){h.width++;
}}return h;
},setContent:function(b,c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
this.setValue(b,c);
},getContent:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return this.getValue(a);
}}});
})();
(function(){var v="mshtml",u="qx.client",t="qx.bom.element.Dimension",s="paddingRight",r="paddingLeft",q="paddingTop",p="paddingBottom";
qx.Class.define(t,{statics:{getWidth:qx.core.Variant.select(u,{"gecko":function(z){if(z.getBoundingClientRect){var A=z.getBoundingClientRect();
return Math.round(A.right)-Math.round(A.left);
}else{return z.offsetWidth;
}},"default":function(B){return B.offsetWidth;
}}),getHeight:qx.core.Variant.select(u,{"gecko":function(w){if(w.getBoundingClientRect){var x=w.getBoundingClientRect();
return Math.round(x.bottom)-Math.round(x.top);
}else{return w.offsetHeight;
}},"default":function(y){return y.offsetHeight;
}}),getSize:function(h){return {width:this.getWidth(h),height:this.getHeight(h)};
},__jn:{visible:true,hidden:true},getContentWidth:function(a){var c=qx.bom.element.Style;
var d=qx.bom.element.Overflow.getX(a);
var e=parseInt(c.get(a,r),10);
var g=parseInt(c.get(a,s),10);

if(this.__jn[d]){return a.clientWidth-e-g;
}else{if(a.clientWidth>=a.scrollWidth){return Math.max(a.clientWidth,a.scrollWidth)-e-g;
}else{var f=a.scrollWidth-e;
var b=qx.bom.client.Engine;

if(b.NAME===v&&b.VERSION==6){f-=g;
}return f;
}}},getContentHeight:function(i){var k=qx.bom.element.Style;
var m=qx.bom.element.Overflow.getY(i);
var n=parseInt(k.get(i,q),10);
var l=parseInt(k.get(i,p),10);

if(this.__jn[m]){return i.clientHeight-n-l;
}else{if(i.clientHeight>=i.scrollHeight){return Math.max(i.clientHeight,i.scrollHeight)-n-l;
}else{var o=i.scrollHeight-n;
var j=qx.bom.client.Engine;

if(j.NAME===v&&j.VERSION==6){o-=l;
}return o;
}}},getContentSize:function(C){return {width:this.getContentWidth(C),height:this.getContentHeight(C)};
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.form.IForm";
qx.Interface.define(c,{events:{"changeEnabled":d,"changeValid":d,"changeInvalidMessage":d,"changeRequired":d},members:{setEnabled:function(a){return arguments.length==1;
},getEnabled:function(){},setRequired:function(b){return arguments.length==1;
},getRequired:function(){},setValid:function(f){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(e){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var j="__jo",i="Use 'getBlocker().getContentBlockerElement()' instead.",h="Use 'getBlocker().getBlockerElement()' instead.",g="_applyBlockerColor",f="Number",e="qx.ui.core.MBlocker",d="_applyBlockerOpacity",c="Color";
qx.Mixin.define(e,{construct:function(){this.__jo=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:c,init:null,nullable:true,apply:g,themeable:true},blockerOpacity:{check:f,init:1,apply:d,themeable:true}},members:{__jo:null,_applyBlockerColor:function(a,b){this.__jo.setColor(a);
},_applyBlockerOpacity:function(k,l){this.__jo.setOpacity(k);
},block:function(){this.__jo.block();
},isBlocked:function(){return this.__jo.isBlocked();
},unblock:function(){this.__jo.unblock();
},forceUnblock:function(){this.__jo.forceUnblock();
},blockContent:function(m){this.__jo.blockContent(m);
},isContentBlocked:function(){return this.__jo.isContentBlocked();
},unblockContent:function(){this.__jo.unblockContent();
},forceUnblockContent:function(){this.__jo.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__jo.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__jo.getBlockerElement();
},getBlocker:function(){return this.__jo;
}},destruct:function(){this._disposeObjects(j);
}});
})();
(function(){var l="qx.ui.window.Window",k="changeModal",j="changeVisibility",i="changeActive",h="_applyActiveWindow",g="__jp",f="qx.ui.window.MDesktop",d="__jq";
qx.Mixin.define(f,{properties:{activeWindow:{check:l,apply:h,init:null,nullable:true}},members:{__jp:null,__jq:null,getWindowManager:function(){if(!this.__jq){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__jq;
},supportsMaximize:function(){return true;
},setWindowManager:function(p){if(this.__jq){this.__jq.setDesktop(null);
}p.setDesktop(this);
this.__jq=p;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(b,c){this.getWindowManager().changeActiveWindow(b,c);

if(b){b.setActive(true);
}
if(c){c.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(n){if(qx.Class.isDefined(l)&&n instanceof qx.ui.window.Window){this._addWindow(n);
}},_addWindow:function(o){if(!qx.lang.Array.contains(this.getWindows(),o)){this.getWindows().push(o);
o.addListener(i,this._onChangeActive,this);
o.addListener(k,this._onChangeModal,this);
o.addListener(j,this._onChangeVisibility,this);
}
if(o.getActive()){this.setActiveWindow(o);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(a){if(qx.Class.isDefined(l)&&a instanceof qx.ui.window.Window){this._removeWindow(a);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(i,this._onChangeActive,this);
m.removeListener(k,this._onChangeModal,this);
m.removeListener(j,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__jp){this.__jp=[];
}return this.__jp;
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(d);
}});
})();
(function(){var r="contextmenu",q="help",p="qx.client",o="changeGlobalCursor",n="abstract",m="Boolean",l="root",k="",j=" !important",i="_applyGlobalCursor",f="_applyNativeHelp",h=";",g="qx.ui.root.Abstract",d="String",c="*";
qx.Class.define(g,{type:n,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:l},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:d,nullable:true,themeable:true,apply:i,event:o},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:m,init:false,apply:f}},members:{__jr:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(p,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__jr;

if(!z){this.__jr=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,c,qx.bom.element.Cursor.compile(w).replace(h,k)+j);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(p,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__jr=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var x="resize",w="position",v="0px",u="webkit",t="paddingLeft",s="$$widget",r="qx.ui.root.Application",q="hidden",p="qx.client",o="div",l="paddingTop",n="100%",m="absolute";
qx.Class.define(r,{extend:qx.ui.root.Abstract,construct:function(y){this.__js=qx.dom.Node.getWindow(y);
this.__jt=y;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__js,x,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__js:null,__jt:null,_createContainerElement:function(){var c=this.__jt;

if(qx.core.Variant.isSet(p,u)){if(!c.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var h=c.documentElement.style;
var d=c.body.style;
h.overflow=d.overflow=q;
h.padding=h.margin=d.padding=d.margin=v;
h.width=h.height=d.width=d.height=n;
var g=c.createElement(o);
c.body.appendChild(g);
var f=new qx.html.Root(g);
f.setStyle(w,m);
f.setAttribute(s,this.toHashCode());
return f;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var a=qx.bom.Viewport.getWidth(this.__js);
var b=qx.bom.Viewport.getHeight(this.__js);
return {minWidth:a,width:a,maxWidth:a,minHeight:b,height:b,maxHeight:b};
},_applyPadding:function(z,A,name){if(z&&(name==l||name==t)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,z,A,name);
},_applyDecorator:function(i,j){arguments.callee.base.call(this,i,j);

if(!i){return;
}var k=this.getDecoratorElement().getInsets();

if(k.left||k.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__js=this.__jt=null;
}});
})();
(function(){var y="zIndex",x="px",w="keydown",v="deactivate",u="This method is not needed anymore.",t="resize",s="keyup",r="keypress",q="backgroundColor",p="_applyOpacity",L="__jC",K="__jz",J="Use 'getBlockerElement' instead.",I="opacity",H="interval",G="Tab",F="Color",E="qx.ui.root.Page",D="Use 'getContentBlockerElement' instead.",C="Number",A="__jx",B="qx.ui.core.Blocker",z="_applyColor";
qx.Class.define(B,{extend:qx.core.Object,construct:function(m){arguments.callee.base.call(this);
this._widget=m;
this._isPageRoot=(qx.Class.isDefined(E)&&m instanceof qx.ui.root.Page);

if(this._isPageRoot){m.addListener(t,this.__jD,this);
}this.__ju=[];
this.__jv=[];
this.__jw=[];
},properties:{color:{check:F,init:null,nullable:true,apply:z,themeable:true},opacity:{check:C,init:1,apply:p,themeable:true}},members:{__jx:null,__jy:0,__jz:null,__jw:null,__ju:null,__jv:null,__jA:null,__jB:0,__jC:null,_isPageRoot:false,_widget:null,__jD:function(e){var k=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:k.width,height:k.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:k.width,height:k.height});
}},_applyColor:function(T,U){var V=qx.theme.manager.Color.getInstance().resolve(T);
this.__jE(q,V);
},_applyOpacity:function(f,g){this.__jE(I,f);
},__jE:function(N,O){var P=[];
this.__jx&&P.push(this.__jx);
this.__jz&&P.push(this.__jz);

for(var i=0;i<P.length;i++){P[i].setStyle(N,O);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.__jB+=1;

if(this.__jB==1){this.__jA=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.__jB-=1;

if(this.__jB==0){this._widget.setAnonymous(this.__jA);
}},_backupActiveWidget:function(){var S=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__ju.push(S.getActive());
this.__jv.push(S.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var d=this.__ju.length;

if(d>0){var c=this.__ju[d-1];

if(c){qx.bom.Element.activate(c);
}this.__ju.pop();
}var b=this.__jv.length;

if(b>0){var c=this.__jv[b-1];

if(c){qx.bom.Element.focus(this.__jv[b-1]);
}this.__jv.pop();
}},__jF:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__jx){this.__jx=this.__jF();
this.__jx.setStyle(y,15);
this._widget.getContainerElement().add(this.__jx);
this.__jx.exclude();
}return this.__jx;
},block:function(){this.__jy++;

if(this.__jy<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(v,this.__jK,this);
M.addListener(r,this.__jJ,this);
M.addListener(w,this.__jJ,this);
M.addListener(s,this.__jJ,this);
}},isBlocked:function(){return this.__jy>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__jy--;

if(this.__jy<1){this.__jG();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__jy=0;
this.__jG();
},__jG:function(){this._restoreActiveWidget();
var l=this.getBlockerElement();
l.removeListener(v,this.__jK,this);
l.removeListener(r,this.__jJ,this);
l.removeListener(w,this.__jJ,this);
l.removeListener(s,this.__jJ,this);
l.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__jz){this.__jz=this.__jF();
this._widget.getContentElement().add(this.__jz);
this.__jz.exclude();
}return this.__jz;
},blockContent:function(n){var o=this.getContentBlockerElement();
o.setStyle(y,n);
this.__jw.push(n);

if(this.__jw.length<2){o.include();

if(this._isPageRoot){if(!this.__jC){this.__jC=new qx.event.Timer(300);
this.__jC.addListener(H,this.__jI,this);
}this.__jC.start();
this.__jI();
}}},isContentBlocked:function(){return this.__jw.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jw.pop();
var h=this.__jw[this.__jw.length-1];
var j=this.getContentBlockerElement();
j.setStyle(y,h);

if(this.__jw.length<1){this.__jH();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jw=[];
var a=this.getContentBlockerElement();
a.setStyle(y,null);
this.__jH();
},__jH:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__jC.stop();
}},__jI:function(){var Q=this._widget.getContainerElement().getDomElement();
var R=qx.dom.Node.getDocument(Q);
this.getContentBlockerElement().setStyles({height:R.documentElement.scrollHeight+x,width:R.documentElement.scrollWidth+x});
},__jJ:function(e){if(e.getKeyIdentifier()==G){e.stop();
}},__jK:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(t,this.__jD,this);
}this._disposeObjects(K,A,L);
this.__jA=this.__ju=this.__jv=this._widget=this.__jw=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(x,y){arguments.callee.base.call(this);
var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
this.setStyles({position:d,width:u,height:u,opacity:y||0,backgroundColor:x});
this.addListener(q,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(g,this._stopPropagation,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
if(qx.core.Variant.isSet(a,s)){this.setStyles({backgroundImage:j+qx.util.ResourceManager.getInstance().toUri(k)+f,backgroundRepeat:h});
}this.addListener(o,this.__jL,this);
this.addListener(p,this.__jL,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__jL:function(){var w=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,w,true);
}}});
})();
(function(){var C="keypress",B="focusout",A="__jM",z="activate",y="Tab",x="singleton",w="deactivate",v="focusin",u="qx.ui.core.FocusHandler";
qx.Class.define(u,{extend:qx.core.Object,type:x,construct:function(){arguments.callee.base.call(this);
this.__jM={};
},members:{__jM:null,__jN:null,__jO:null,__jP:null,connectTo:function(bd){bd.addListener(C,this.__jQ,this);
bd.addListener(v,this._onFocusIn,this,true);
bd.addListener(B,this._onFocusOut,this,true);
bd.addListener(z,this._onActivate,this,true);
bd.addListener(w,this._onDeactivate,this,true);
},addRoot:function(t){this.__jM[t.$$hash]=t;
},removeRoot:function(L){delete this.__jM[L.$$hash];
},getActiveWidget:function(){return this.__jN;
},isActive:function(p){return this.__jN==p;
},getFocusedWidget:function(){return this.__jO;
},isFocused:function(f){return this.__jO==f;
},isFocusRoot:function(D){return !!this.__jM[D.$$hash];
},_onActivate:function(e){var s=e.getTarget();
this.__jN=s;
var r=this.__jR(s);

if(r!=this.__jP){this.__jP=r;
}},_onDeactivate:function(e){var bc=e.getTarget();

if(this.__jN==bc){this.__jN=null;
}},_onFocusIn:function(e){var q=e.getTarget();

if(q!=this.__jO){this.__jO=q;
q.visualizeFocus();
}},_onFocusOut:function(e){var j=e.getTarget();

if(j==this.__jO){this.__jO=null;
j.visualizeBlur();
}},__jQ:function(e){if(e.getKeyIdentifier()!=y){return;
}
if(!this.__jP){return;
}e.stopPropagation();
e.preventDefault();
var bh=this.__jO;

if(!e.isShiftPressed()){var bi=bh?this.__jV(bh):this.__jT();
}else{var bi=bh?this.__jW(bh):this.__jU();
}if(bi){bi.tabFocus();
}},__jR:function(g){var h=this.__jM;

while(g){if(h[g.$$hash]){return g;
}g=g.getLayoutParent();
}return null;
},__jS:function(Q,R){if(Q===R){return 0;
}var T=Q.getTabIndex()||0;
var S=R.getTabIndex()||0;

if(T!=S){return T-S;
}var Y=Q.getContainerElement().getDomElement();
var X=R.getContainerElement().getDomElement();
var W=qx.bom.element.Location;
var V=W.get(Y);
var U=W.get(X);
if(V.top!=U.top){return V.top-U.top;
}if(V.left!=U.left){return V.left-U.left;
}var ba=Q.getZIndex();
var bb=R.getZIndex();

if(ba!=bb){return ba-bb;
}return 0;
},__jT:function(){return this.__ka(this.__jP,null);
},__jU:function(){return this.__kb(this.__jP,null);
},__jV:function(k){var m=this.__jP;

if(m==k){return this.__jT();
}
while(k&&k.getAnonymous()){k=k.getLayoutParent();
}
if(k==null){return [];
}var n=[];
this.__jX(m,k,n);
n.sort(this.__jS);
var o=n.length;
return o>0?n[0]:this.__jT();
},__jW:function(H){var I=this.__jP;

if(I==H){return this.__jU();
}
while(H&&H.getAnonymous()){H=H.getLayoutParent();
}
if(H==null){return [];
}var J=[];
this.__jY(I,H,J);
J.sort(this.__jS);
var K=J.length;
return K>0?J[K-1]:this.__jU();
},__jX:function(parent,M,N){var O=parent.getLayoutChildren();
var P;

for(var i=0,l=O.length;i<l;i++){P=O[i];
if(!(P instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(P)&&P.isEnabled()&&P.isVisible()){if(P.isTabable()&&this.__jS(M,P)<0){N.push(P);
}this.__jX(P,M,N);
}}},__jY:function(parent,a,b){var c=parent.getLayoutChildren();
var d;

for(var i=0,l=c.length;i<l;i++){d=c[i];
if(!(d instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(d)&&d.isEnabled()&&d.isVisible()){if(d.isTabable()&&this.__jS(a,d)>0){b.push(d);
}this.__jY(d,a,b);
}}},__ka:function(parent,be){var bf=parent.getLayoutChildren();
var bg;

for(var i=0,l=bf.length;i<l;i++){bg=bf[i];
if(!(bg instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bg)&&bg.isEnabled()&&bg.isVisible()){if(bg.isTabable()){if(be==null||this.__jS(bg,be)<0){be=bg;
}}be=this.__ka(bg,be);
}}return be;
},__kb:function(parent,E){var F=parent.getLayoutChildren();
var G;

for(var i=0,l=F.length;i<l;i++){G=F[i];
if(!(G instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(G)&&G.isEnabled()&&G.isVisible()){if(G.isTabable()){if(E==null||this.__jS(G,E)>0){E=G;
}}E=this.__kb(G,E);
}}return E;
}},destruct:function(){this._disposeMap(A);
this.__jO=this.__jN=this.__jP=null;
}});
})();
(function(){var D="qx.client",C="head",B="text/css",A="stylesheet",z="}",y='@import "',x="{",w='";',v="qx.bom.Stylesheet",u="link",t="style";
qx.Class.define(v,{statics:{includeFile:function(E,F){if(!F){F=document;
}var G=F.createElement(u);
G.type=B;
G.rel=A;
G.href=qx.util.ResourceManager.getInstance().toUri(E);
var H=F.getElementsByTagName(C)[0];
H.appendChild(G);
},createElement:qx.core.Variant.select(D,{"mshtml":function(I){var J=document.createStyleSheet();

if(I){J.cssText=I;
}return J;
},"default":function(bb){var bc=document.createElement(t);
bc.type=B;

if(bb){bc.appendChild(document.createTextNode(bb));
}document.getElementsByTagName(C)[0].appendChild(bc);
return bc.sheet;
}}),addRule:qx.core.Variant.select(D,{"mshtml":function(U,V,W){U.addRule(V,W);
},"default":function(a,b,c){a.insertRule(b+x+c+z,a.cssRules.length);
}}),removeRule:qx.core.Variant.select(D,{"mshtml":function(h,j){var k=h.rules;
var l=k.length;

for(var i=l-1;i>=0;--i){if(k[i].selectorText==j){h.removeRule(i);
}}},"default":function(Q,R){var S=Q.cssRules;
var T=S.length;

for(var i=T-1;i>=0;--i){if(S[i].selectorText==R){Q.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(D,{"mshtml":function(N){var O=N.rules;
var P=O.length;

for(var i=P-1;i>=0;i--){N.removeRule(i);
}},"default":function(K){var L=K.cssRules;
var M=L.length;

for(var i=M-1;i>=0;i--){K.deleteRule(i);
}}}),addImport:qx.core.Variant.select(D,{"mshtml":function(r,s){r.addImport(s);
},"default":function(p,q){p.insertRule(y+q+w,p.cssRules.length);
}}),removeImport:qx.core.Variant.select(D,{"mshtml":function(d,e){var f=d.imports;
var g=f.length;

for(var i=g-1;i>=0;i--){if(f[i].href==e){d.removeImport(i);
}}},"default":function(bd,be){var bf=bd.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(D,{"mshtml":function(X){var Y=X.imports;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){X.removeImport(i);
}},"default":function(m){var n=m.cssRules;
var o=n.length;

for(var i=o-1;i>=0;i--){if(n[i].type==n[i].IMPORT_RULE){m.deleteRule(i);
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
qx.Class.define(b,{extend:qx.html.Element,construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.useElement(a);
}},members:{useElement:function(c){arguments.callee.base.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var L="_applyLayoutChange",K="top",J="left",I="middle",H="Decorator",G="center",F="_applyReversed",E="bottom",D="qx.ui.layout.VBox",C="Integer",A="right",B="Boolean";
qx.Class.define(D,{extend:qx.ui.layout.Abstract,construct:function(S,T,U){arguments.callee.base.call(this);

if(S){this.setSpacing(S);
}
if(T){this.setAlignY(T);
}
if(U){this.setSeparator(U);
}},properties:{alignY:{check:[K,I,E],init:K,apply:L},alignX:{check:[J,G,A],init:J,apply:L},spacing:{check:C,init:0,apply:L},separator:{check:H,nullable:true,apply:L},reversed:{check:B,init:false,apply:F}},members:{__kc:null,__kd:null,__ke:null,__kf:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kg:function(){var R=this._getLayoutChildren();
var length=R.length;
var N=false;
var M=this.__kc&&this.__kc.length!=length&&this.__kd&&this.__kc;
var P;
var O=M?this.__kc:new Array(length);
var Q=M?this.__kd:new Array(length);
if(this.getReversed()){R=R.concat().reverse();
}for(var i=0;i<length;i++){P=R[i].getLayoutProperties();

if(P.height!=null){O[i]=parseFloat(P.height)/100;
}
if(P.flex!=null){Q[i]=P.flex;
N=true;
}else{Q[i]=0;
}}if(!M){this.__kc=O;
this.__kd=Q;
}this.__ke=N;
this.__kf=R;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(a,b){if(this._invalidChildrenCache){this.__kg();
}var j=this.__kf;
var length=j.length;
var u=qx.ui.layout.Util;
var t=this.getSpacing();
var x=this.getSeparator();

if(x){var f=u.computeVerticalSeparatorGaps(j,t,x);
}else{var f=u.computeVerticalGaps(j,t,true);
}var i,d,e,o;
var p=[];
var v=f;

for(i=0;i<length;i+=1){o=this.__kc[i];
e=o!=null?Math.floor((b-f)*o):j[i].getSizeHint().height;
p.push(e);
v+=e;
}if(this.__ke&&v!=b){var m={};
var s,w;

for(i=0;i<length;i+=1){s=this.__kd[i];

if(s>0){k=j[i].getSizeHint();
m[i]={min:k.minHeight,value:p[i],max:k.maxHeight,flex:s};
}}var g=u.computeFlexOffsets(m,b,v);

for(i in g){w=g[i].offset;
p[i]+=w;
v+=w;
}}var top=j[0].getMarginTop();
if(v<b&&this.getAlignY()!=K){top=b-v;

if(this.getAlignY()===I){top=Math.round(top/2);
}}var k,z,q,e,n,r,h;
this._clearSeparators();
if(x){var y=qx.theme.manager.Decoration.getInstance().resolve(x).getInsets();
var c=y.top+y.bottom;
}for(i=0;i<length;i+=1){d=j[i];
e=p[i];
k=d.getSizeHint();
r=d.getMarginLeft();
h=d.getMarginRight();
q=Math.max(k.minWidth,Math.min(a-r-h,k.maxWidth));
z=u.computeHorizontalAlignOffset(d.getAlignX()||this.getAlignX(),q,a,r,h);
if(i>0){if(x){top+=n+t;
this._renderSeparator(x,{top:top,left:0,height:c,width:a});
top+=c+t+d.getMarginTop();
}else{top+=u.collapseMargins(t,n,d.getMarginTop());
}}d.renderLayout(z,top,q,e);
top+=e;
n=d.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kg();
}var bc=qx.ui.layout.Util;
var bk=this.__kf;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__kd[i];
var Y=this.__kc[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__kc=this.__kd=this.__kf=null;
}});
})();
(function(){var m="=",l="",k=";path=",j=";domain=",i=";expires=Thu, 01-Jan-1970 00:00:01 GMT",h="qx.bom.Cookie",g=";expires=",f=";",e=";secure";
qx.Class.define(h,{statics:{get:function(v){var w=document.cookie.indexOf(v+m);
var y=w+v.length+1;

if((!w)&&(v!=document.cookie.substring(0,v.length))){return null;
}
if(w==-1){return null;
}var x=document.cookie.indexOf(f,y);

if(x==-1){x=document.cookie.length;
}return unescape(document.cookie.substring(y,x));
},set:function(n,o,p,q,r,s){var t=[n,m,escape(o)];

if(p){var u=new Date();
u.setTime(u.getTime());
t.push(g,new Date(u.getTime()+(p*1000*60*60*24)).toGMTString());
}
if(q){t.push(k,q);
}
if(r){t.push(j,r);
}
if(s){t.push(e);
}document.cookie=t.join(l);
},del:function(a,b,c){if(!qx.bom.Cookie.get(a)){return;
}var d=[a,m];

if(b){d.push(k,b);
}
if(c){d.push(j,c);
}d.push(i);
document.cookie=d.join(l);
}}});
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
(function(){var n="qx.client",m="mousedown",l="load",k="help",j="mouseup",i="losecapture",h="contextmenu",g="none",f="display",d="repeat",E="Boolean",D="px",C="url(",B=")",A="gecko",z="div",y="DOMNodeInserted",x="_applyNativeHelp",w="/",v="__ki",t="appear",u="mshtml",r="block",s="qx.ui.embed.Iframe",p="iframe",q="absolute",o="qx/static/blank.gif";
qx.Class.define(s,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(S){if(S!=null){this.__kh=S;
}arguments.callee.base.call(this,S);
qx.event.Registration.addListener(document.body,m,this.block,this,true);
qx.event.Registration.addListener(document.body,j,this.release,this,true);
qx.event.Registration.addListener(document.body,i,this.release,this,true);
this.__ki=this._createBlockerElement();
this.getContainerElement().add(this.__ki);

if(qx.core.Variant.isSet(n,A)){this.addListenerOnce(t,function(e){var H=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(H,y,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:p},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:E,init:false,apply:x}},members:{__kh:null,__ki:null,renderLayout:function(I,top,J,K){arguments.callee.base.call(this,I,top,J,K);
var M=D;
var L=this.getInsets();
this.__ki.setStyles({"left":L.left+M,"top":L.top+M,"width":(J-L.left-L.right)+M,"height":(K-L.top-L.bottom)+M});
},_createContentElement:function(){var c=new qx.html.Iframe(this.__kh);
c.addListener(l,this._onIframeLoad,this);
return c;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var R=new qx.html.Element(z);
R.setStyles({"zIndex":20,"position":q,"display":g});
if(qx.core.Variant.isSet(n,u)){R.setStyles({backgroundImage:C+qx.util.ResourceManager.getInstance().toUri(o)+B,backgroundRepeat:d});
}return R;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(l);
},block:function(){this.__ki.setStyle(f,r);
},release:function(){this.__ki.setStyle(f,g);
},_applyNativeContextMenu:function(N,O){if(N!==false&&O!==false){return;
}var P=this.getDocument();

if(!P){return;
}
try{var Q=P.documentElement;
}catch(e){return ;
}
if(O===false){qx.event.Registration.removeListener(Q,h,this._onNativeContextMenu,this,true);
}
if(N===false){qx.event.Registration.addListener(Q,h,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(a,b){var document=this.getDocument();

if(!document){return;
}
try{if(b===false){qx.bom.Event.removeNativeListener(document,k,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,k,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var G=this.getContentElement().getDomElement();
var F=G.src;
if(F.charAt(F.length-1)==w){F=F.substring(0,F.length-1);
}
if(F!=this.getSource()){qx.bom.Iframe.getWindow(G).stop();
G.src=this.getSource();
}}},destruct:function(){this._disposeObjects(v);
qx.event.Registration.removeListener(document.body,m,this.block,this,true);
qx.event.Registration.removeListener(document.body,j,this.release,this,true);
qx.event.Registration.removeListener(document.body,i,this.release,this,true);
}});
})();
(function(){var g="source",f="name",e="qx.html.Iframe",d="qx.event.type.Event",c="iframe";
qx.Class.define(e,{extend:qx.html.Element,construct:function(n){arguments.callee.base.call(this,c);
this._setProperty(g,n);
},events:{"load":d},members:{_applyProperty:function(name,i){arguments.callee.base.call(this,name,i);

if(name==g){var j=this.getDomElement();
qx.bom.Iframe.setSource(j,i);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var h=this.getDomElement();

if(h){return qx.bom.Iframe.getWindow(h);
}else{return null;
}},getDocument:function(){var k=this.getDomElement();

if(k){return qx.bom.Iframe.getDocument(k);
}else{return null;
}},getBody:function(){var a=this.getDomElement();

if(a){return qx.bom.Iframe.getBody(a);
}else{return null;
}},setSource:function(b){this._setProperty(g,b);
return this;
},getSource:function(){return this._getProperty(g);
},setName:function(name){this.setAttribute(f,name);
return this;
},getName:function(){return this.getAttribute(f);
},reload:function(){var m=this.getDomElement();

if(m){var l=this.getSource();
this.setSource(null);
this.setSource(l);
}}}});
})();
(function(){var e="qx.event.handler.Iframe",d="load",c="iframe";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(l){qx.event.Registration.fireEvent(l,d);
})},members:{canHandleEvent:function(a,b){return a.tagName.toLowerCase()===c;
},registerEvent:function(i,j,k){},unregisterEvent:function(f,g,h){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var m="qx.client",l="webkit",k="body",j="iframe",i="qx.bom.Iframe";
qx.Class.define(i,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(y,z){var y=y?qx.lang.Object.clone(y):{};
var A=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var B in A){if(y[B]==null){y[B]=A[B];
}}return qx.bom.Element.create(j,y,z);
},getWindow:qx.core.Variant.select(m,{"mshtml|gecko":function(f){try{return f.contentWindow;
}catch(h){return null;
}},"default":function(v){try{var w=this.getDocument(v);
return w?w.defaultView:null;
}catch(n){return null;
}}}),getDocument:qx.core.Variant.select(m,{"mshtml":function(d){try{var e=this.getWindow(d);
return e?e.document:null;
}catch(o){return null;
}},"default":function(q){try{return q.contentDocument;
}catch(x){return null;
}}}),getBody:function(C){try{var D=this.getDocument(C);
return D?D.getElementsByTagName(k)[0]:null;
}catch(p){return null;
}},setSource:function(s,t){try{if(this.getWindow(s)&&qx.dom.Hierarchy.isRendered(s)){try{if(qx.core.Variant.isSet(m,l)&&qx.bom.client.Platform.MAC){var u=this.getContentWindow();

if(u){u.stop();
}}this.getWindow(s).location.replace(t);
}catch(g){s.src=t;
}}else{s.src=t;
}}catch(c){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(a){var b=this.getDocument(a);

try{if(b&&b.location){return b.location.href;
}}catch(r){}return null;
}}});
})();
(function(){var t="click",s="black",r="",q="red",p="inspector.components.Selector",o="qx.ui.root.Application",n="mousemove",m="_highlightOverlay",l="changeSelection",k="_catchClickLayer",h="solid",j="_highlightDecorator";
qx.Class.define(p,{extend:qx.core.Object,construct:function(H){arguments.callee.base.call(this);
this.setJSWindow(H);
},properties:{selection:{event:l,nullable:true}},members:{setJSWindow:function(B){this._iFrameWindow=B;
this._addedWidgets=[];
this._root=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
this._createCatchClickLayer();
this._createHighlightStuff();
this.setSelection(null);
},getAddedWidgets:function(){return this._addedWidgets;
},start:function(){this._catchClickLayer.show();
},end:function(){this._catchClickLayer.hide();
},highlightFor:function(b,c){if(b.classname==o){return;
}this._highlight(b);
if(this._highlightTimerId!=null){window.clearTimeout(this._highlightTimerId);
}var self=this;
self._highlightTimerId=window.setTimeout(function(){self._highlightOverlay.hide();
self._highlightTimerId=null;
},c);
},_createCatchClickLayer:function(){this._catchClickLayer=new this._iFrameWindow.qx.ui.core.Widget();
this._addedWidgets.push(this._catchClickLayer);
this._catchClickLayer.setBackgroundColor(s);
this._catchClickLayer.setOpacity(0.1);
this._catchClickLayer.setZIndex(1e6-1);
this._catchClickLayer.hide();
this._root.add(this._catchClickLayer,{left:0,top:0,right:0,bottom:0});
this._catchClickLayer.addListener(t,function(e){this._catchClickLayer.hide();
var d=e.getDocumentLeft();
var f=e.getDocumentTop();
var g=this._searchWidget(this._root,d,f);
this._highlightOverlay.hide();
this.setSelection(g);
},this);
this._catchClickLayer.addListener(n,function(e){var E=e.getDocumentLeft();
var F=e.getDocumentTop();
var G=this._searchWidget(this._root,E,F,r);
this._highlight(G);
},this);
},_createHighlightStuff:function(){this._highlightDecorator=new this._iFrameWindow.qx.ui.decoration.Single(2,h,q);
this._addedWidgets.push(this._highlightDecorator);
this._highlightOverlay=new this._iFrameWindow.qx.ui.core.Widget();
this._addedWidgets.push(this._highlightOverlay);
this._highlightOverlay.setDecorator(this._highlightDecorator);
this._highlightOverlay.setZIndex(1e6-2);
this._highlightOverlay.hide();
this._root.add(this._highlightOverlay);
},_searchWidget:function(u,x,y){var v=u;
for(var i=0;i<u._getChildren().length;i++){var z=u._getChildren()[i];
if(z==this._catchClickLayer||z==this._highlightOverlay){continue;
}try{if(z instanceof this._iFrameWindow.qx.ui.core.Spacer){continue;
}}catch(a){}if(z.getContainerElement){var A=z.getContainerElement().getDomElement();
}else if(z.getDomElement){var A=z.getDomElement();
}else{return z;
}var w=this._getCoordinates(A);
if(w!=null){if(w.right>=x&&w.left<=x&&w.bottom>=y&&w.top<=y){v=this._searchWidget(z,x,y);
}}}return v;
},_getCoordinates:function(C){if(C==null){return null;
}var D={};
D.left=qx.bom.element.Location.getLeft(C);
D.right=qx.bom.element.Location.getRight(C);
D.top=qx.bom.element.Location.getTop(C);
D.bottom=qx.bom.element.Location.getBottom(C);
return D;
},_highlight:function(I){var M=null;

if(I.getContainerElement&&I.getContainerElement().getDomElement){M=I.getContainerElement().getDomElement();
}else if(I.getDomElement){M=I.getDomElement();
}if(M==null){this._highlightOverlay.hide();
return;
}var L=this._getCoordinates(M);
var N=L.left-2;
var J=L.right+2;
var top=L.top-2;
var K=L.bottom+2;
this._highlightOverlay.renderLayout(N,top,J-N,K-top);
this._highlightOverlay.show();
}},destruct:function(){this._iFrameWindow=this._addedWidgets=this._root=null;
this._disposeObjects(k,j,m);
}});
})();
(function(){var r="both",q="qx.ui.menu.Menu",p="_applySpacing",o="icon",n="label",m="changeShow",k="Integer",j="qx.ui.toolbar.ToolBar",h="toolbar",g="changeOpenMenu";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:h},openMenu:{check:q,event:g,nullable:true},show:{init:r,check:[r,n,o],inheritable:true,event:m},spacing:{nullable:true,check:k,themeable:true,apply:p}},members:{__kj:false,_setAllowMenuOpenHover:function(s){this.__kj=s;
},_isAllowMenuOpenHover:function(){return this.__kj;
},_applySpacing:function(d,e){var f=this._getLayout();
d==null?f.resetSpacing():f.setSpacing(d);
},addSpacer:function(){var t=new qx.ui.core.Spacer;
this._add(t,{flex:1});
return t;
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
(function(){var w="_applyLayoutChange",v="left",u="center",t="top",s="Decorator",r="middle",q="_applyReversed",p="bottom",o="Boolean",n="right",k="Integer",m="qx.ui.layout.HBox";
qx.Class.define(m,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignX(b);
}
if(c){this.setSeparator(c);
}},properties:{alignX:{check:[v,u,n],init:v,apply:w},alignY:{check:[t,r,p],init:t,apply:w},spacing:{check:k,init:0,apply:w},separator:{check:s,nullable:true,apply:w},reversed:{check:o,init:false,apply:q}},members:{__kk:null,__kl:null,__km:null,__kn:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ko:function(){var j=this._getLayoutChildren();
var length=j.length;
var f=false;
var d=this.__kk&&this.__kk.length!=length&&this.__kl&&this.__kk;
var g;
var e=d?this.__kk:new Array(length);
var h=d?this.__kl:new Array(length);
if(this.getReversed()){j=j.concat().reverse();
}for(var i=0;i<length;i++){g=j[i].getLayoutProperties();

if(g.width!=null){e[i]=parseFloat(g.width)/100;
}
if(g.flex!=null){h[i]=g.flex;
f=true;
}else{h[i]=0;
}}if(!d){this.__kk=e;
this.__kl=h;
}this.__km=f;
this.__kn=j;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(M,N){if(this._invalidChildrenCache){this.__ko();
}var T=this.__kn;
var length=T.length;
var bd=qx.ui.layout.Util;
var bc=this.getSpacing();
var bg=this.getSeparator();

if(bg){var Q=bd.computeHorizontalSeparatorGaps(T,bc,bg);
}else{var Q=bd.computeHorizontalGaps(T,bc,true);
}var i,O,ba,Y;
var bf=[];
var U=Q;

for(i=0;i<length;i+=1){Y=this.__kk[i];
ba=Y!=null?Math.floor((M-Q)*Y):T[i].getSizeHint().width;
bf.push(ba);
U+=ba;
}if(this.__km&&U!=M){var W={};
var bb,be;

for(i=0;i<length;i+=1){bb=this.__kl[i];

if(bb>0){V=T[i].getSizeHint();
W[i]={min:V.minWidth,value:bf[i],max:V.maxWidth,flex:bb};
}}var R=bd.computeFlexOffsets(W,M,U);

for(i in R){be=R[i].offset;
bf[i]+=be;
U+=be;
}}var bk=T[0].getMarginLeft();
if(U<M&&this.getAlignX()!=v){bk=M-U;

if(this.getAlignX()===u){bk=Math.round(bk/2);
}}var V,top,P,ba,S,bi,X;
var bc=this.getSpacing();
this._clearSeparators();
if(bg){var bh=qx.theme.manager.Decoration.getInstance().resolve(bg).getInsets();
var bj=bh.left+bh.right;
}for(i=0;i<length;i+=1){O=T[i];
ba=bf[i];
V=O.getSizeHint();
bi=O.getMarginTop();
X=O.getMarginBottom();
P=Math.max(V.minHeight,Math.min(N-bi-X,V.maxHeight));
top=bd.computeVerticalAlignOffset(O.getAlignY()||this.getAlignY(),P,N,bi,X);
if(i>0){if(bg){bk+=S+bc;
this._renderSeparator(bg,{left:bk,top:0,width:bj,height:N});
bk+=bj+bc+O.getMarginLeft();
}else{bk+=bd.collapseMargins(bc,S,O.getMarginLeft());
}}O.renderLayout(bk,top,ba,P);
bk+=ba;
S=O.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ko();
}var D=qx.ui.layout.Util;
var L=this.__kn;
var x=0,E=0,B=0;
var A=0,C=0;
var I,y,K;
for(var i=0,l=L.length;i<l;i+=1){I=L[i];
y=I.getSizeHint();
E+=y.width;
var H=this.__kl[i];
var z=this.__kk[i];

if(H){x+=y.minWidth;
}else if(z){B=Math.max(B,Math.round(y.minWidth/z));
}else{x+=y.width;
}K=I.getMarginTop()+I.getMarginBottom();
if((y.height+K)>C){C=y.height+K;
}if((y.minHeight+K)>A){A=y.minHeight+K;
}}x+=B;
var G=this.getSpacing();
var J=this.getSeparator();

if(J){var F=D.computeHorizontalSeparatorGaps(L,G,J);
}else{var F=D.computeHorizontalGaps(L,G,true);
}return {minWidth:x+F,width:E+F,minHeight:A,height:C};
}},destruct:function(){this.__kk=this.__kl=this.__kn=null;
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
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kp:null,__kq:false,__kr:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var u=this.getCommand();

if(u){if(this.__kq){this.__kq=false;
}else{this.__kq=true;
u.execute(this);
}}this.fireEvent(n);
},__ks:function(e){if(this.__kq){this.__kq=false;
return;
}this.__kq=true;
this.execute();
},_applyCommand:function(o,p){if(p!=null){p.removeListenerById(this.__kr);
}
if(o!=null){this.__kr=o.addListener(n,this.__ks,this);
}var s=this.__kp;

if(s==null){this.__kp=s={};
}
for(var i=0;i<this._bindableProperties.length;i++){var r=this._bindableProperties[i];
if(p!=null&&s[r]!=null){p.removeBinding(s[r]);
s[r]=null;
}if(o!=null&&qx.Class.hasProperty(this.constructor,r)){var q=o.get(r);

if(q==null){var t=this.get(r);
}s[r]=o.bind(r,this,r);
if(t){this.set(r,t);
}}}}},destruct:function(){this.__kp=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var t="pressed",s="abandoned",r="hovered",q="Enter",p="Space",o="dblclick",n="qx.ui.form.Button",m="mouseup",l="mousedown",k="mouseover",h="mouseout",j="keydown",i="button",g="keyup";
qx.Class.define(n,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(c,d,f){arguments.callee.base.call(this,c,d);

if(f!=null){this.setCommand(f);
}this.addListener(k,this._onMouseOver);
this.addListener(h,this._onMouseOut);
this.addListener(l,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(j,this._onKeyDown);
this.addListener(g,this._onKeyUp);
this.addListener(o,this._onStopEvent);
},properties:{appearance:{refine:true,init:i},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(s)){return;
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
(function(){var o="pressed",n="hovered",m="changeVisibility",l="qx.ui.menu.Menu",k="submenu",j="Enter",i="contextmenu",h="changeMenu",g="qx.ui.form.MenuButton",f="abandoned",d="_applyMenu";
qx.Class.define(g,{extend:qx.ui.form.Button,construct:function(p,q,r){arguments.callee.base.call(this,p,q);
if(r!=null){this.setMenu(r);
}},properties:{menu:{check:l,nullable:true,apply:d,event:h}},members:{_applyMenu:function(t,u){if(u){u.removeListener(m,this._onMenuChange,this);
u.resetOpener();
}
if(t){t.addListener(m,this._onMenuChange,this);
t.setOpener(this);
t.removeState(k);
t.removeState(i);
}},open:function(a){var b=this.getMenu();

if(b){qx.ui.menu.Manager.getInstance().hideAll();
b.setOpener(this);
b.open();
if(a){var c=b.getSelectables()[0];

if(c){b.setSelectedButton(c);
}}}},_onMenuChange:function(e){var s=this.getMenu();

if(s.isVisible()){this.addState(o);
}else{this.removeState(o);
}},_onMouseDown:function(e){var v=this.getMenu();

if(v){if(!v.isVisible()){this.open();
}else{v.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(n);
},_onMouseOut:function(e){this.removeState(n);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case j:this.removeState(f);
this.addState(o);
var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var j="pressed",i="hovered",h="inherit",g="qx.ui.menubar.Button",f="keydown",d="menubar-button",c="keyup";
qx.Class.define(g,{extend:qx.ui.form.MenuButton,construct:function(l,m,n){arguments.callee.base.call(this,l,m,n);
this.removeListener(f,this._onKeyDown);
this.removeListener(c,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:h},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(k){arguments.callee.base.call(this,k);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var a=this.getMenu();
var menubar=this.getMenuBar();

if(a.isVisible()){this.addState(j);
if(menubar){menubar.setOpenMenu(a);
}}else{this.removeState(j);
if(menubar&&menubar.getOpenMenu()==a){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var b=this.getMenu();

if(b&&b.isVisible()&&!this.hasState(j)){this.addState(j);
}},_onMouseOver:function(e){this.addState(i);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var bi="keypress",bh="interval",bg="keydown",bf="mousedown",be="keyup",bd="blur",bc="Enter",bb="__kv",ba="__kt",Y="Up",S="Escape",X="__ku",V="qx.ui.menu.Manager",R="Left",Q="Down",U="Right",T="singleton",W="Space";
qx.Class.define(V,{type:T,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kt=[];
var N=document.body;
var O=qx.event.Registration;
O.addListener(window.document.documentElement,bf,this._onMouseDown,this,true);
O.addListener(N,bg,this._onKeyUpDown,this,true);
O.addListener(N,be,this._onKeyUpDown,this,true);
O.addListener(N,bi,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,bd,this.hideAll,this);
this.__ku=new qx.event.Timer;
this.__ku.addListener(bh,this._onOpenInterval,this);
this.__kv=new qx.event.Timer;
this.__kv.addListener(bh,this._onCloseInterval,this);
},members:{__kw:null,__kx:null,__ku:null,__kv:null,__kt:null,_getChild:function(r,s,t,u){var v=r.getChildren();
var length=v.length;
var w;

for(var i=s;i<length&&i>=0;i+=t){w=v[i];

if(w.isEnabled()&&!w.isAnonymous()){return w;
}}
if(u){i=i==length?0:length-1;

for(;i!=s;i+=t){w=v[i];

if(w.isEnabled()&&!w.isAnonymous()){return w;
}}}return null;
},_isInMenu:function(P){while(P){if(P instanceof qx.ui.menu.Menu){return true;
}P=P.getLayoutParent();
}return false;
},_getMenuButton:function(d){while(d){if(d instanceof qx.ui.menu.AbstractButton){return d;
}d=d.getLayoutParent();
}return null;
},add:function(L){{};
var M=this.__kt;
M.push(L);
L.setZIndex(1e6+M.length);
},remove:function(bw){{};
var bx=this.__kt;

if(bx){qx.lang.Array.remove(bx,bw);
}},hideAll:function(){var bv=this.__kt;

if(bv){for(var i=bv.length-1;i>=0;i--){bv[i].exclude();
}}},getActiveMenu:function(){var bD=this.__kt;
return bD.length>0?bD[bD.length-1]:null;
},scheduleOpen:function(E){this.cancelClose(E);
if(E.isVisible()){if(this.__kw){this.cancelOpen(this.__kw);
}}else if(this.__kw!=E){this.__kw=E;
this.__ku.restartWith(E.getOpenInterval());
}},scheduleClose:function(F){this.cancelOpen(F);
if(!F.isVisible()){if(this.__kx){this.cancelClose(this.__kx);
}}else if(this.__kx!=F){this.__kx=F;
this.__kv.restartWith(F.getCloseInterval());
}},cancelOpen:function(f){if(this.__kw==f){this.__ku.stop();
this.__kw=null;
}},cancelClose:function(a){if(this.__kx==a){this.__kv.stop();
this.__kx=null;
}},_onOpenInterval:function(e){this.__ku.stop();
this.__kw.open();
this.__kw=null;
},_onCloseInterval:function(e){this.__kv.stop();
this.__kx.exclude();
this.__kx=null;
},_onMouseDown:function(e){var K=e.getTarget();
K=qx.ui.core.Widget.getWidgetByElement(K);
if(K==null){this.hideAll();
return;
}if(K.getMenu&&K.getMenu()&&K.getMenu().isVisible()){return;
}if(this.__kt.length>0&&!this._isInMenu(K)){this.hideAll();
}},__ky:{"Enter":1,"Space":1},__kz:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var b=this.getActiveMenu();

if(!b){return;
}var c=e.getKeyIdentifier();

if(this.__kz[c]||(this.__ky[c]&&b.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var m=this.getActiveMenu();

if(!m){return;
}var n=e.getKeyIdentifier();
var p=this.__kz[n];
var o=this.__ky[n];

if(p){switch(n){case Y:this._onKeyPressUp(m);
break;
case Q:this._onKeyPressDown(m);
break;
case R:this._onKeyPressLeft(m);
break;
case U:this._onKeyPressRight(m);
break;
case S:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(o){var q=m.getSelectedButton();

if(q){switch(n){case bc:this._onKeyPressEnter(m,q,e);
break;
case W:this._onKeyPressSpace(m,q,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(by){var bz=by.getSelectedButton();
var bA=by.getChildren();
var bC=bz?by.indexOf(bz)-1:bA.length-1;
var bB=this._getChild(by,bC,-1,true);
if(bB){by.setSelectedButton(bB);
}else{by.resetSelectedButton();
}},_onKeyPressDown:function(G){var H=G.getSelectedButton();
var J=H?G.indexOf(H)+1:0;
var I=this._getChild(G,J,1,true);
if(I){G.setSelectedButton(I);
}else{G.resetSelectedButton();
}},_onKeyPressLeft:function(x){var C=x.getOpener();

if(!C){return;
}if(C instanceof qx.ui.menu.Button){var z=C.getLayoutParent();
z.resetOpenedButton();
z.setSelectedButton(C);
}else if(C instanceof qx.ui.menubar.Button){var B=C.getMenuBar().getMenuButtons();
var y=B.indexOf(C);
if(y===-1){return;
}var D=null;
var length=B.length;

for(var i=1;i<=length;i++){var A=B[(y-i+length)%length];

if(A.isEnabled()){D=A;
break;
}}
if(D&&D!=C){D.open(true);
}}},_onKeyPressRight:function(bj){var bl=bj.getSelectedButton();
if(bl){var bk=bl.getMenu();

if(bk){bj.setOpenedButton(bl);
var br=this._getChild(bk,0,1);

if(br){bk.setSelectedButton(br);
}return;
}}else if(!bj.getOpenedButton()){var br=this._getChild(bj,0,1);

if(br){bj.setSelectedButton(br);

if(br.getMenu()){bj.setOpenedButton(br);
}return;
}}var bp=bj.getOpener();
if(bp instanceof qx.ui.menu.Button&&bl){while(bp){bp=bp.getLayoutParent();

if(bp instanceof qx.ui.menu.Menu){bp=bp.getOpener();

if(bp instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bp){return;
}}if(bp instanceof qx.ui.menubar.Button){var bo=bp.getMenuBar().getMenuButtons();
var bm=bo.indexOf(bp);
if(bm===-1){return;
}var bq=null;
var length=bo.length;

for(var i=1;i<=length;i++){var bn=bo[(bm+i)%length];

if(bn.isEnabled()){bq=bn;
break;
}}
if(bq&&bq!=bp){bq.open(true);
}}},_onKeyPressEnter:function(j,k,e){if(k.hasListener(bi)){var l=e.clone();
l.setBubbles(false);
l.setTarget(k);
k.dispatchEvent(l);
}this.hideAll();
},_onKeyPressSpace:function(bs,bt,e){if(bt.hasListener(bi)){var bu=e.clone();
bu.setBubbles(false);
bu.setTarget(bt);
bt.dispatchEvent(bu);
}}},destruct:function(){var h=qx.event.Registration;
var g=document.body;
h.removeListener(window.document.documentElement,bf,this._onMouseDown,this,true);
h.removeListener(g,bg,this._onKeyUpDown,this,true);
h.removeListener(g,be,this._onKeyUpDown,this,true);
h.removeListener(g,bi,this._onKeyPress,this,true);
this._disposeObjects(X,bb);
this._disposeArray(ba);
}});
})();
(function(){var o="indexOf",n="addAfter",m="add",l="addBefore",k="_",j="addAt",i="hasChildren",h="removeAt",g="removeAll",f="getChildren",d="remove",e="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(e,{members:{__kA:function(A,B,C,D){var E=this.getChildrenContainer();

if(E===this){A=k+A;
}return (E[A])(B,C,D);
},getChildren:function(){return this.__kA(f);
},hasChildren:function(){return this.__kA(i);
},add:function(a,b){return this.__kA(m,a,b);
},remove:function(p){return this.__kA(d,p);
},removeAll:function(){return this.__kA(g);
},indexOf:function(w){return this.__kA(o,w);
},addAt:function(q,r,s){this.__kA(j,q,r,s);
},addBefore:function(x,y,z){this.__kA(l,x,y,z);
},addAfter:function(t,u,v){this.__kA(n,t,u,v);
},removeAt:function(c){this.__kA(h,c);
}}});
})();
(function(){var I="slidebar",H="Integer",G="resize",F="qx.ui.core.Widget",E="selected",D="visible",C="Boolean",B="mouseout",A="excluded",z="menu",X="_applySelectedButton",W="_applySpacingY",V="_blocker",U="_applyCloseInterval",T="_applyBlockerColor",S="_applyIconColumnWidth",R="mouseover",Q="_applyArrowColumnWidth",P="qx.ui.menu.Menu",O="Color",M="Number",N="_applyOpenInterval",K="_applySpacingX",L="_applyBlockerOpacity",J="_applyOpenedButton";
qx.Class.define(P,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var k=this.getApplicationRoot();
k.add(this);
this.addListener(R,this._onMouseOver);
this.addListener(B,this._onMouseOut);
this.addListener(G,this._onResize,this);
k.addListener(G,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(k);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:z},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:A},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:H,apply:K,init:0,themeable:true},spacingY:{check:H,apply:W,init:0,themeable:true},iconColumnWidth:{check:H,init:0,themeable:true,apply:S},arrowColumnWidth:{check:H,init:0,themeable:true,apply:Q},blockerColor:{check:O,init:null,nullable:true,apply:T,themeable:true},blockerOpacity:{check:M,init:1,apply:L,themeable:true},selectedButton:{check:F,nullable:true,apply:X},openedButton:{check:F,nullable:true,apply:J},opener:{check:F,nullable:true},openInterval:{check:H,themeable:true,init:250,apply:N},closeInterval:{check:H,themeable:true,init:250,apply:U},blockBackground:{check:C,themeable:true,init:false}},members:{__kB:null,__kC:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__kE();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__kE();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(p){this.placeToPoint(p);
this.__kE();
this.show();
this._placementTarget=p;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bh=[];
var bi=this.getChildren();

for(var i=0;i<bi.length;i++){if(bi[i].isEnabled()){bh.push(bi[i]);
}}return bh;
},_applyIconColumnWidth:function(x,y){this._getMenuLayout().setIconColumnWidth(x);
},_applyArrowColumnWidth:function(b,c){this._getMenuLayout().setArrowColumnWidth(b);
},_applySpacingX:function(h,j){this._getMenuLayout().setColumnSpacing(h);
},_applySpacingY:function(f,g){this._getMenuLayout().setSpacing(f);
},_applyVisibility:function(s,t){arguments.callee.base.call(this,s,t);
var u=qx.ui.menu.Manager.getInstance();

if(s===D){u.add(this);
var v=this.getParentMenu();

if(v){v.setOpenedButton(this.getOpener());
}}else if(t===D){u.remove(this);
var v=this.getParentMenu();

if(v&&v.getOpenedButton()==this.getOpener()){v.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__kD();
},__kD:function(){if(this.isVisible()){if(this.getBlockBackground()){var w=this.getZIndex();
this._blocker.blockContent(w-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var d=this.getOpener();

if(!d||!(d instanceof qx.ui.menu.AbstractButton)){return null;
}
while(d&&!(d instanceof qx.ui.menu.Menu)){d=d.getLayoutParent();
}return d;
},_applySelectedButton:function(bo,bp){if(bp){bp.removeState(E);
}
if(bo){bo.addState(E);
}},_applyOpenedButton:function(ba,bb){if(bb){bb.getMenu().exclude();
}
if(ba){ba.getMenu().open();
}},_applyBlockerColor:function(q,r){this._blocker.setColor(q);
},_applyBlockerOpacity:function(bq,br){this._blocker.setOpacity(bq);
},getChildrenContainer:function(){return this.getChildControl(I,true)||this;
},_createChildControlImpl:function(bj){var bk;

switch(bj){case I:var bk=new qx.ui.menu.MenuSlideBar();
var bm=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bl=bk.getLayout();
bk.setLayout(bm);
bl.dispose();
var bn=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bn.length;i++){bk.add(bn[i]);
}this.removeListener(G,this._onResize,this);
bk.getChildrenContainer().addListener(G,this._onResize,this);
this._add(bk);
break;
}return bk||arguments.callee.base.call(this,bj);
},_getMenuLayout:function(){if(this.hasChildControl(I)){return this.getChildControl(I).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(I)){return this.getChildControl(I).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__kE:function(){var bd=this._getMenuBounds();

if(!bd){this.addListenerOnce(G,this.__kE,this);
return;
}var bc=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var be=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bd.height+top);
this.moveTo(be,0);
});
}else if(top+bd.height>bc){this._assertSlideBar(function(){this.setHeight(bc-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(a){if(this.hasChildControl(I)){return a.call(this);
}this.__kC=a;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(I);

if(this.__kC){this.__kC.call(this);
delete this.__kC;
}},_onResize:function(){if(this.isVisible()){var Y=this._placementTarget;

if(!Y){return;
}else if(Y instanceof qx.ui.core.Widget){this.placeToWidget(Y);
}else if(Y.top!==undefined){this.placeToPoint(Y);
}else{throw new Error("Unknown target: "+Y);
}this.__kE();
}},_onMouseOver:function(e){var m=qx.ui.menu.Manager.getInstance();
m.cancelClose(this);
var n=e.getTarget();

if(n.isEnabled()&&n instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(n);
var l=n.getMenu&&n.getMenu();

if(l){l.setOpener(n);
m.scheduleOpen(l);
this.__kB=l;
}else{var o=this.getOpenedButton();

if(o){m.scheduleClose(o.getMenu());
}
if(this.__kB){m.cancelOpen(this.__kB);
this.__kB=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bf=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bg=this.getOpenedButton();
bg?this.setSelectedButton(bg):this.resetSelectedButton();
if(bg){bf.cancelClose(bg.getMenu());
}if(this.__kB){bf.cancelOpen(this.__kB);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(G,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(V);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__kF:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__kF=[0,0,0,0];
var m=this.getColumnSpacing();
var k=0;
var f=0;
for(var i=0,l=q.length;i<l;i++){o=q[i];

if(o.isAnonymous()){continue;
}g=o.getChildrenSizes();

for(var n=0;n<g.length;n++){if(e!=null&&n==e&&g[e+1]==0){k=Math.max(k,g[n]);
}else{h[n]=Math.max(h[n],g[n]);
}}var d=q[i].getInsets();
f=Math.max(f,d.left+d.right);
}if(e!=null&&h[e]+m+h[e+1]<k){h[e]=k-h[e+1]-m;
}if(k==0){j=m*2;
}else{j=m*3;
}if(h[0]==0){h[0]=this.getIconColumnWidth();
}if(h[3]==0){h[3]=this.getArrowColumnWidth();
}var p=arguments.callee.base.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__kF||null;
}},destruct:function(){this.__kF=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var u="icon",t="label",s="arrow",r="shortcut",q="changeLocale",p="qx.dynlocale",o="submenu",n="on",m="String",l="qx.ui.menu.Menu",f="qx.ui.menu.AbstractButton",k="keypress",i="",d="_applyIcon",c="mouseup",h="abstract",g="_applyLabel",j="_applyMenu",b="changeCommand";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:h,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(c,this._onMouseUp);
this.addListener(k,this._onKeyPress);
this.addListener(b,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:m,apply:g,nullable:true},menu:{check:l,apply:j,nullable:true},icon:{check:m,apply:d,themeable:true,nullable:true}},members:{_createChildControlImpl:function(v){var w;

switch(v){case u:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:0});
break;
case t:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:1});
break;
case r:w=new qx.ui.basic.Label;
w.setAnonymous(true);
this._add(w,{column:2});
break;
case s:w=new qx.ui.basic.Image;
w.setAnonymous(true);
this._add(w,{column:3});
break;
}return w||arguments.callee.base.call(this,v);
},_forwardStates:{selected:1},getChildrenSizes:function(){var z=0,A=0,B=0,F=0;

if(this._isChildControlVisible(u)){var G=this.getChildControl(u);
z=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();
}
if(this._isChildControlVisible(t)){var D=this.getChildControl(t);
A=D.getMarginLeft()+D.getSizeHint().width+D.getMarginRight();
}
if(this._isChildControlVisible(r)){var C=this.getChildControl(r);
B=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}
if(this._isChildControlVisible(s)){var E=this.getChildControl(s);
F=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}return [z,A,B,F];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var J=e.getData();

if(qx.core.Variant.isSet(p,n)){var H=e.getOldData();

if(!H){qx.locale.Manager.getInstance().addListener(q,this._onChangeLocale,this);
}
if(!J){qx.locale.Manager.getInstance().removeListener(q,this._onChangeLocale,this);
}}var I=J!=null?J.toString():i;
this.getChildControl(r).setValue(I);
},_onChangeLocale:qx.core.Variant.select(p,{"on":function(e){var a=this.getCommand();

if(a!=null){this.getChildControl(r).setValue(a.toString());
}},"off":null}),_applyIcon:function(x,y){if(x){this._showChildControl(u).setSource(x);
}else{this._excludeChildControl(u);
}},_applyLabel:function(M,N){if(M){this._showChildControl(t).setValue(M);
}else{this._excludeChildControl(t);
}},_applyMenu:function(K,L){if(L){L.resetOpener();
L.removeState(o);
}
if(K){this._showChildControl(s);
K.setOpener(this);
K.addState(o);
}else{this._excludeChildControl(s);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(p,n)){qx.locale.Manager.getInstance().removeListener(q,this._onChangeLocale,this);
}}});
})();
(function(){var d="middle",c="qx.ui.menu.ButtonLayout",b="left";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(j,k){var v=this._getLayoutChildren();
var u;
var n;
var o=[];

for(var i=0,l=v.length;i<l;i++){u=v[i];
n=u.getLayoutProperties().column;
o[n]=u;
}var t=this.__kG(v[0]);
var w=t.getColumnSizes();
var q=t.getSpacingX();
var p=qx.lang.Array.sum(w)+q*(w.length-1);

if(p<j){w[1]+=j-p;
}var x=0,top=0;
var r=qx.ui.layout.Util;

for(var i=0,l=w.length;i<l;i++){u=o[i];

if(u){var m=u.getSizeHint();
var top=r.computeVerticalAlignOffset(u.getAlignY()||d,m.height,k,0,0);
var s=r.computeHorizontalAlignOffset(u.getAlignX()||b,m.width,w[i],u.getMarginLeft(),u.getMarginRight());
u.renderLayout(x+s,top,m.width,m.height);
}x+=w[i]+q;
}},__kG:function(a){while(!(a instanceof qx.ui.menu.Menu)){a=a.getLayoutParent();
}return a;
},_computeSizeHint:function(){var g=this._getLayoutChildren();
var f=0;
var h=0;

for(var i=0,l=g.length;i<l;i++){var e=g[i].getSizeHint();
h+=e.width;
f=Math.max(f,e.height);
}return {width:h,height:f};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var x="horizontal",w="scrollpane",v="vertical",u="button-backward",t="button-forward",s="content",r="execute",q="qx.ui.container.SlideBar",p="scrollY",o="removeChildWidget",k="scrollX",n="_applyOrientation",m="mousewheel",j="Integer",i="slidebar",l="update";
qx.Class.define(q,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(a){arguments.callee.base.call(this);
var b=this.getChildControl(w);
this._add(b,{flex:1});

if(a!=null){this.setOrientation(a);
}else{this.initOrientation();
}this.addListener(m,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:i},orientation:{check:[x,v],init:x,apply:n},scrollStep:{check:j,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(s);
},_createChildControlImpl:function(G){var H;

switch(G){case t:H=new qx.ui.form.RepeatButton;
H.addListener(r,this._onExecuteForward,this);
H.setFocusable(false);
this._addAt(H,2);
break;
case u:H=new qx.ui.form.RepeatButton;
H.addListener(r,this._onExecuteBackward,this);
H.setFocusable(false);
this._addAt(H,0);
break;
case s:H=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){H.addListener(o,this._onRemoveChild,this);
}this.getChildControl(w).add(H);
break;
case w:H=new qx.ui.core.scroll.ScrollPane();
H.addListener(l,this._onResize,this);
H.addListener(k,this._onScroll,this);
H.addListener(p,this._onScroll,this);
break;
}return H||arguments.callee.base.call(this,G);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(c){var d=this.getChildControl(w);

if(this.getOrientation()===x){d.scrollByX(c);
}else{d.scrollByY(c);
}},scrollTo:function(I){var J=this.getChildControl(w);

if(this.getOrientation()===x){J.scrollToX(I);
}else{J.scrollToY(I);
}},_applyOrientation:function(y,z){var C=[this.getLayout(),this._getLayout()];
var B=this.getChildControl(t);
var A=this.getChildControl(u);
if(z==v){B.removeState(v);
A.removeState(v);
B.addState(x);
A.addState(x);
}else if(z==x){B.removeState(x);
A.removeState(x);
B.addState(v);
A.addState(v);
}
if(y==x){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(C[0]){C[0].dispose();
}
if(C[1]){C[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(w).getChildren()[0];

if(!content){return;
}var f=this.getInnerSize();
var h=content.getBounds();
var g=(this.getOrientation()===x)?h.width>f.width:h.height>f.height;

if(g){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(w).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var E=this.getChildControl(w);

if(this.getOrientation()===x){var D=E.getScrollX();
var F=E.getScrollMaxX();
}else{var D=E.getScrollY();
var F=E.getScrollMaxY();
}this.getChildControl(u).setEnabled(D>0);
this.getChildControl(t).setEnabled(D<F);
},_showArrows:function(){this._showChildControl(t);
this._showChildControl(u);
},_hideArrows:function(){this._excludeChildControl(t);
this._excludeChildControl(u);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){arguments.callee.base.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__kH",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(q,r){arguments.callee.base.call(this,q,r);
this.__kH=new qx.event.AcceleratingTimer();
this.__kH.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__kI:null,__kH:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__kJ();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__kI){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__kK();
},_applyEnabled:function(o,p){arguments.callee.base.call(this,o,p);

if(!o){this.removeState(n);
this.removeState(m);
this.__kK();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__kH.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__kH.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__kJ();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__kI){this.execute();
}}this.__kK();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__kI){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__kK();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__kJ();
}},_onInterval:function(e){this.__kI=true;
this.fireEvent(b);
},__kJ:function(){this.fireEvent(g);
this.__kI=false;
this.__kH.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__kK:function(){this.fireEvent(d);
this.__kH.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="qx.event.AcceleratingTimer",a="__kL";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kL=new qx.event.Timer(this.getInterval());
this.__kL.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__kL:null,__kM:null,start:function(){this.__kL.setInterval(this.getFirstInterval());
this.__kL.start();
},stop:function(){this.__kL.stop();
this.__kM=null;
},_onInterval:function(){this.__kL.stop();

if(this.__kM==null){this.__kM=this.getInterval();
}this.__kM=Math.max(this.getMinimum(),this.__kM-this.getDecrease());
this.__kL.setInterval(this.__kM);
this.__kL.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var s="resize",r="scrollY",q="update",p="scrollX",o="_applyScrollX",n="_applyScrollY",m="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",l="appear",k="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",j="qx.event.type.Event",h="qx.ui.core.scroll.ScrollPane",i="scroll";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(s,this._onUpdate);
var v=this.getContentElement();
v.addListener(i,this._onScroll,this);
v.addListener(l,this._onAppear,this);
},events:{update:j},properties:{scrollX:{check:m,apply:o,event:p,init:0},scrollY:{check:k,apply:n,event:r,init:0}},members:{add:function(t){var u=this._getChildren()[0];

if(u){this._remove(u);
u.removeListener(s,this._onUpdate,this);
}
if(t){this._add(t);
t.addListener(s,this._onUpdate,this);
}},remove:function(F){if(F){this._remove(F);
F.removeListener(s,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(q);
},_onScroll:function(e){var G=this.getContentElement();
this.setScrollX(G.getScrollX());
this.setScrollY(G.getScrollY());
},_onAppear:function(e){var K=this.getContentElement();
var H=this.getScrollX();
var I=K.getScrollX();

if(H!=I){K.scrollToX(H);
}var L=this.getScrollY();
var J=K.getScrollY();

if(L!=J){K.scrollToY(L);
}},getItemTop:function(w){var top=0;

do{top+=w.getBounds().top;
w=w.getLayoutParent();
}while(w&&w!==this);
return top;
},getItemBottom:function(z){return this.getItemTop(z)+z.getBounds().height;
},getItemLeft:function(D){var E=0;
var parent;

do{E+=D.getBounds().left;
parent=D.getLayoutParent();

if(parent){E+=parent.getInsets().left;
}D=parent;
}while(D&&D!==this);
return E;
},getItemRight:function(g){return this.getItemLeft(g)+g.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var f=this.getInnerSize();
var d=this.getScrollSize();

if(f&&d){return Math.max(0,d.width-f.width);
}return 0;
},getScrollMaxY:function(){var N=this.getInnerSize();
var M=this.getScrollSize();

if(N&&M){return Math.max(0,M.height-N.height);
}return 0;
},scrollToX:function(b){var c=this.getScrollMaxX();

if(b<0){b=0;
}else if(b>c){b=c;
}this.setScrollX(b);
},scrollToY:function(A){var B=this.getScrollMaxY();

if(A<0){A=0;
}else if(A>B){A=B;
}this.setScrollY(A);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(a){this.getContentElement().scrollToX(a);
},_applyScrollY:function(C){this.getContentElement().scrollToY(C);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__kN",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__kN=new qx.event.AcceleratingTimer();
this.__kN.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__kN:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__kN.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__kN.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__kN.stop();
}}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){arguments.callee.base.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var o="container",n="handle",m="both",k="Integer",j="middle",h="qx.ui.toolbar.Part",g="icon",f="label",e="changeShow",d="_applySpacing",c="toolbar/part";
qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(n);
},properties:{appearance:{refine:true,init:c},show:{init:m,check:[m,f,g],inheritable:true,event:e},spacing:{nullable:true,check:k,themeable:true,apply:d}},members:{_createChildControlImpl:function(a){var b;

switch(a){case n:b=new qx.ui.basic.Image();
b.setAlignY(j);
this._add(b);
break;
case o:b=new qx.ui.toolbar.PartContainer;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},getChildrenContainer:function(){return this.getChildControl(o);
},_applySpacing:function(s,t){var u=this.getChildControl(o).getLayout();
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
(function(){var n="Boolean",m="resize",l="mousedown",k="w-resize",j="sw-resize",i="n-resize",h="resizableRight",g="ne-resize",f="se-resize",d="Integer",C="e-resize",B="resizableLeft",A="mousemove",z="move",y="shorthand",x="maximized",w="nw-resize",v="mouseout",u="qx.ui.core.MResizable",t="mouseup",r="losecapture",s="resize-frame",p="resizableBottom",q="s-resize",o="resizableTop";
qx.Mixin.define(u,{construct:function(){this.addListener(l,this.__kY,this,true);
this.addListener(t,this.__la,this);
this.addListener(A,this.__lc,this);
this.addListener(v,this.__ld,this);
this.addListener(r,this.__lb,this);
},properties:{resizableTop:{check:n,init:true},resizableRight:{check:n,init:true},resizableBottom:{check:n,init:true},resizableLeft:{check:n,init:true},resizable:{group:[o,h,p,B],mode:y},resizeSensitivity:{check:d,init:5},useResizeFrame:{check:n,init:true}},members:{__kO:null,__kP:null,__kQ:null,__kR:null,__kS:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__kT:function(){var D=this.__kO;

if(!D){D=this.__kO=new qx.ui.core.Widget();
D.setAppearance(s);
D.exclude();
qx.core.Init.getApplication().getRoot().add(D);
}return D;
},__kU:function(){var b=this.__kS;
var a=this.__kT();
a.setUserBounds(b.left,b.top,b.width,b.height);
a.show();
a.setZIndex(this.getZIndex()+1);
},__kV:function(e){var G=this.__kP;
var H=this.getSizeHint();
var J=this.__kS;
var F=J.width;
var I=J.height;
var L=J.left;
var top=J.top;
var K;

if((G&this.RESIZE_TOP)||(G&this.RESIZE_BOTTOM)){K=e.getDocumentTop()-this.__kR;

if(G&this.RESIZE_TOP){I-=K;
}else{I+=K;
}
if(I<H.minHeight){I=H.minHeight;
}else if(I>H.maxHeight){I=H.maxHeight;
}
if(G&this.RESIZE_TOP){top+=J.height-I;
}}
if((G&this.RESIZE_LEFT)||(G&this.RESIZE_RIGHT)){K=e.getDocumentLeft()-this.__kQ;

if(G&this.RESIZE_LEFT){F-=K;
}else{F+=K;
}
if(F<H.minWidth){F=H.minWidth;
}else if(F>H.maxWidth){F=H.maxWidth;
}
if(G&this.RESIZE_LEFT){L+=J.width-F;
}}return {viewportLeft:L,viewportTop:top,parentLeft:J.bounds.left+L-J.left,parentTop:J.bounds.top+top-J.top,width:F,height:I};
},__kW:{1:i,2:q,4:k,8:C,5:w,6:j,9:g,10:f},__kX:function(e){var O=this.getContentLocation();
var M=this.getResizeSensitivity();
var Q=e.getDocumentLeft();
var P=e.getDocumentTop();
var N=0;

if(this.getResizableTop()&&Math.abs(O.top-P)<M){N+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(O.bottom-P)<M){N+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(O.left-Q)<M){N+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(O.right-Q)<M){N+=this.RESIZE_RIGHT;
}this.__kP=N;
},__kY:function(e){if(!this.__kP){return;
}this.addState(m);
this.__kQ=e.getDocumentLeft();
this.__kR=e.getDocumentTop();
var location=this.getContainerLocation();
var c=this.getBounds();
this.__kS={top:location.top,left:location.left,width:c.width,height:c.height,bounds:qx.lang.Object.clone(c)};
if(this.getUseResizeFrame()){this.__kU();
}this.capture();
e.stop();
},__la:function(e){if(!this.hasState(m)){return;
}if(this.getUseResizeFrame()){this.__kT().exclude();
}var E=this.__kV(e);
this.setWidth(E.width);
this.setHeight(E.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:E.parentLeft,top:E.parentTop});
}this.__kP=0;
this.removeState(m);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__lb:function(e){if(!this.__kP){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(z);
if(this.getUseResizeFrame()){this.__kT().exclude();
}},__lc:function(e){if(this.hasState(m)){var U=this.__kV(e);
if(this.getUseResizeFrame()){var S=this.__kT();
S.setUserBounds(U.viewportLeft,U.viewportTop,U.width,U.height);
}else{this.setWidth(U.width);
this.setHeight(U.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:U.parentLeft,top:U.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(x)){this.__kX(e);
var V=this.__kP;
var T=this.getApplicationRoot();

if(V){var R=this.__kW[V];
this.setCursor(R);
T.setGlobalCursor(R);
}else if(this.getCursor()){this.resetCursor();
T.resetGlobalCursor();
}}},__ld:function(e){if(this.getCursor()&&!this.hasState(m)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__kO!=null&&!qx.core.ObjectRegistry.inShutDown){this.__kO.destroy();
this.__kO=null;
}}});
})();
(function(){var s="move",r="Boolean",q="mouseup",p="mousedown",o="__lf",n="losecapture",m="qx.ui.core.MMovable",l="mousemove",k="maximized",j="__le",i="move-frame";
qx.Mixin.define(m,{properties:{movable:{check:r,init:true},useMoveFrame:{check:r,init:false}},members:{__le:null,__lf:null,__lg:null,__lh:null,__li:null,__lj:null,__lk:null,__ll:false,__lm:null,__ln:0,_activateMoveHandle:function(v){if(this.__le){throw new Error("The move handle could not be redefined!");
}this.__le=v;
v.addListener(p,this._onMoveMouseDown,this);
v.addListener(q,this._onMoveMouseUp,this);
v.addListener(l,this._onMoveMouseMove,this);
v.addListener(n,this.__lr,this);
},__lo:function(){var b=this.__lf;

if(!b){b=this.__lf=new qx.ui.core.Widget();
b.setAppearance(i);
b.exclude();
qx.core.Init.getApplication().getRoot().add(b);
}return b;
},__lp:function(){var location=this.getContainerLocation();
var u=this.getBounds();
var t=this.__lo();
t.setUserBounds(location.left,location.top,u.width,u.height);
t.show();
t.setZIndex(this.getZIndex()+1);
},__lq:function(e){var d=this.__lg;
var h=Math.max(d.left,Math.min(d.right,e.getDocumentLeft()));
var g=Math.max(d.top,Math.min(d.bottom,e.getDocumentTop()));
var c=this.__lh+h;
var f=this.__li+g;
return {viewportLeft:c,viewportTop:f,parentLeft:c-this.__lj,parentTop:f-this.__lk};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(k)){return;
}var parent=this.getLayoutParent();
var x=parent.getContentLocation();
var y=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__ll=true;
this.__lm=parent.getBlockerColor();
this.__ln=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__lg={left:x.left,top:x.top,right:x.left+y.width,bottom:x.top+y.height};
var w=this.getContainerLocation();
this.__lj=x.left;
this.__lk=x.top;
this.__lh=w.left-e.getDocumentLeft();
this.__li=w.top-e.getDocumentTop();
this.addState(s);
this.__le.capture();
if(this.getUseMoveFrame()){this.__lp();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(s)){return;
}var a=this.__lq(e);

if(this.getUseMoveFrame()){this.__lo().setDomPosition(a.viewportLeft,a.viewportTop);
}else{this.setDomPosition(a.parentLeft,a.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(s)){return;
}this.removeState(s);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__ll){parent.unblockContent();
parent.setBlockerColor(this.__lm);
parent.setBlockerOpacity(this.__ln);
this.__lm=null;
this.__ln=0;
}}this.__le.releaseCapture();
var z=this.__lq(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__lo().exclude();
}e.stopPropagation();
},__lr:function(e){if(!this.hasState(s)){return;
}this.removeState(s);
if(this.getUseMoveFrame()){this.__lo().exclude();
}}},destruct:function(){this._disposeObjects(o,j);
this.__lg=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ls:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__lt:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__lt[name];
s[t]();
}else{var u=this.__ls[name];
s[u](q);
}}}});
})();
(function(){var b="qx.ui.window.IWindowManager";
qx.Interface.define(b,{members:{setDesktop:function(a){this.assertInterface(a,qx.ui.window.IDesktop);
},changeActiveWindow:function(e,f){},updateStack:function(){},bringToFront:function(c){this.assertInstance(c,qx.ui.window.Window);
},sendToBack:function(d){this.assertInstance(d,qx.ui.window.Window);
}}});
})();
(function(){var g="__lu",f="qx.ui.window.Manager";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__lu:null,setDesktop:function(o){this.__lu=o;
this.updateStack();
},getDesktop:function(){return this.__lu;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__lu.forceUnblockContent();
var j=this.__lu.getWindows();
var n=this._minZIndex-1;
var m=false;
var k,h=null;

for(var i=0,l=j.length;i<l;i++){k=j[i];

if(!k.isVisible()){continue;
}n+=2;
k.setZIndex(n);
if(k.getModal()){this.__lu.blockContent(n-1);
}m=m||k.isActive();
h=k;
}
if(!m){this.__lu.setActiveWindow(h);
}},bringToFront:function(p){var q=this.__lu.getWindows();
var r=qx.lang.Array.remove(q,p);

if(r){q.push(p);
this.updateStack();
}},sendToBack:function(a){var b=this.__lu.getWindows();
var c=qx.lang.Array.remove(b,a);

if(c){b.unshift(a);
this.updateStack();
}}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var E="Boolean",D="qx.event.type.Event",C="captionbar",B="maximize-button",A="_applyCaptionBarChange",z="restore-button",y="minimize-button",x="close-button",w="maximized",v="execute",bm="pane",bl="title",bk="icon",bj="statusbar-text",bi="statusbar",bh="normal",bg="String",bf="active",be="beforeClose",bd="beforeMinimize",L="mousedown",M="changeStatus",J="changeIcon",K="excluded",H="_applyCaption",I="_applyActive",F="beforeRestore",G="minimize",N="dblclick",O="changeModal",U="_applyShowStatusbar",T="_applyStatus",W="qx.ui.window.Window",V="changeCaption",Y="_applyIcon",X="focusout",Q="beforeMaximize",bc="maximize",bb="restore",ba="window",P="close",R="changeActive",S="minimized";
qx.Class.define(W,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(d,f){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(C);
this._createChildControl(bm);
if(f!=null){this.setIcon(f);
}
if(d!=null){this.setCaption(d);
}this._updateCaptionBar();
this.addListener(L,this._onWindowMouseDown,this,true);
this.addListener(X,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":D,"close":D,"beforeMinimize":D,"minimize":D,"beforeMaximize":D,"maximize":D,"beforeRestore":D,"restore":D},properties:{appearance:{refine:true,init:ba},visibility:{refine:true,init:K},focusable:{refine:true,init:true},active:{check:E,init:false,apply:I,event:R},modal:{check:E,init:false,event:O},caption:{apply:H,event:V,nullable:true},icon:{check:bg,nullable:true,apply:Y,event:J,themeable:true},status:{check:bg,nullable:true,apply:T,event:M},showClose:{check:E,init:true,apply:A,themeable:true},showMaximize:{check:E,init:true,apply:A,themeable:true},showMinimize:{check:E,init:true,apply:A,themeable:true},allowClose:{check:E,init:true,apply:A},allowMaximize:{check:E,init:true,apply:A},allowMinimize:{check:E,init:true,apply:A},showStatusbar:{check:E,init:false,apply:U}},members:{__lv:null,__lw:null,getChildrenContainer:function(){return this.getChildControl(bm);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(g){var h;

switch(g){case bi:h=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(h);
h.add(this.getChildControl(bj));
break;
case bj:h=new qx.ui.basic.Label();
h.setValue(this.getStatus());
break;
case bm:h=new qx.ui.container.Composite();
this._add(h,{flex:1});
break;
case C:var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
h=new qx.ui.container.Composite(j);
this._add(h);
h.addListener(N,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(h);
break;
case bk:h=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(C).add(h,{row:0,column:0});
break;
case bl:h=new qx.ui.basic.Label(this.getCaption());
h.setWidth(0);
h.setAllowGrowX(true);
var i=this.getChildControl(C);
i.add(h,{row:0,column:1});
break;
case y:h=new qx.ui.form.Button();
h.setFocusable(false);
h.addListener(v,this._onMinimizeButtonClick,this);
this.getChildControl(C).add(h,{row:0,column:2});
break;
case z:h=new qx.ui.form.Button();
h.setFocusable(false);
h.addListener(v,this._onRestoreButtonClick,this);
this.getChildControl(C).add(h,{row:0,column:3});
break;
case B:h=new qx.ui.form.Button();
h.setFocusable(false);
h.addListener(v,this._onMaximizeButtonClick,this);
this.getChildControl(C).add(h,{row:0,column:4});
break;
case x:h=new qx.ui.form.Button();
h.setFocusable(false);
h.addListener(v,this._onCloseButtonClick,this);
this.getChildControl(C).add(h,{row:0,column:6});
break;
}return h||arguments.callee.base.call(this,g);
},_updateCaptionBar:function(){var bu;

if(this.getIcon()){this._showChildControl(bk);
}else{this._excludeChildControl(bk);
}
if(this.getCaption()){this._showChildControl(bl);
}else{this._excludeChildControl(bl);
}
if(this.getShowMinimize()){this._showChildControl(y);
bu=this.getChildControl(y);
this.getAllowMinimize()?bu.resetEnabled():bu.setEnabled(false);
}else{this._excludeChildControl(y);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(z);
this._excludeChildControl(B);
}else{this._showChildControl(B);
this._excludeChildControl(z);
}bu=this.getChildControl(B);
this.getAllowMaximize()?bu.resetEnabled():bu.setEnabled(false);
}else{this._excludeChildControl(B);
this._excludeChildControl(z);
}
if(this.getShowClose()){this._showChildControl(x);
bu=this.getChildControl(x);
this.getAllowClose()?bu.resetEnabled():bu.setEnabled(false);
}else{this._excludeChildControl(x);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(be,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(P);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bs=parent.getBounds();

if(bs){var bt=this.getSizeHint();
var br=Math.round((bs.width-bt.width)/2);
var top=Math.round((bs.height-bt.height)/2);

if(top<0){top=0;
}this.moveTo(br,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(Q,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var m=this.getLayoutProperties();
this.__lw=m.left===undefined?0:m.left;
this.__lv=m.top===undefined?0:m.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(w);
this._updateCaptionBar();
this.fireEvent(bc);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(bd,qx.event.type.Event,[false,true])){var bn=this.getLayoutProperties();
this.__lw=bn.left===undefined?0:bn.left;
this.__lv=bn.top===undefined?0:bn.top;
this.removeState(w);
this.hide();
this.fireEvent(G);
}},restore:function(){if(this.getMode()===bh){return;
}
if(this.fireNonBubblingEvent(F,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var n=this.__lw;
var top=this.__lv;
this.setLayoutProperties({edge:null,left:n,top:top});
this.removeState(w);
this._updateCaptionBar();
this.fireEvent(bb);
}},moveTo:function(bo,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bo,top:top});
},isMaximized:function(){return this.hasState(w);
},getMode:function(){if(!this.isVisible()){return S;
}else{if(this.isMaximized()){return w;
}else{return bh;
}}},_applyActive:function(bp,bq){if(bq){this.removeState(bf);
}else{this.addState(bf);
}},_getContentPaddingTarget:function(){return this.getChildControl(bm);
},_applyShowStatusbar:function(b,c){if(b){this._showChildControl(bi);
}else{this._excludeChildControl(bi);
}},_applyCaptionBarChange:function(q,r){this._updateCaptionBar();
},_applyStatus:function(s,t){var u=this.getChildControl(bj,true);

if(u){u.setValue(s);
}},_applyCaption:function(k,l){this.getChildControl(bl).setValue(k);
},_applyIcon:function(o,p){this.getChildControl(bk).setSource(o);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var a=e.getRelatedTarget();

if(a!=null&&!qx.ui.core.Widget.contains(this,a)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(y).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(z).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(B).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(x).reset();
}}});
})();
(function(){var c="middle",b="_toolbar",a="inspector.components.AbstractWindow";
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
this._toolbar._getLayout().setAlignY(c);
this.add(this._toolbar);
},members:{_toolbar:null,_iFrameWindow:null,setInitSizeAndPosition:function(){throw new Error("Abstract method call (setInitSizeAndPosition) in 'AbstractWindow'!");
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var r="",q="changeValue",p="inspector.objects.ObjectsWindow",o="_model",n="_modelRadio",m="_table",l="icon/22/actions/view-refresh.png",k="_reloadButton",j="changeSelection",h="Objects",d="_filterTextField",g="execute",f="Filter...";
qx.Class.define(p,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,h);
this._reloadButton=new qx.ui.toolbar.Button(null,l);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(g,function(){this.load(null,this._filterTextField.getValue());
},this);
this._toolbar.add(new qx.ui.toolbar.Separator());
this._toolbar.addSpacer();
this._filterTextField=new qx.ui.form.TextField();
this._filterTextField.setPlaceholder(f);
this._filterTextField.setLiveUpdate(true);
this._filterTextField.setMarginRight(5);
this._toolbar.add(this._filterTextField);
this._filterTextField.addListener(q,function(e){var u=qx.util.TimerManager.getInstance();
if(this.__lx!=null){u.stop(this.__lx);
this.__lx=null;
}this.__lx=u.start(function(){this.load(null,e.getData());
this.__lx=null;
},0,this,null,200);
},this);
this._model=new qx.ui.table.model.Simple();
this._model.setColumns([r,r]);
this._table=new qx.ui.table.Table(this._model);
this._table.setDecorator(null);
this._table.setColumnVisibilityButtonVisible(false);
this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
this.add(this._table,{flex:1});
this._table.getSelectionModel().addListener(j,this._onChangeSelection,this);
this._table.getDataRowRenderer().setHighlightFocusRow(false);
this._modelRadio=new qx.ui.form.RadioGroup();
this._currentModel=null;
this._addModel(new inspector.objects.HashModel());
this._addModel(new inspector.objects.CountModel());
},members:{__lx:null,_addModel:function(F){var G=new qx.ui.toolbar.RadioButton(F.getName());
this._toolbar.addAt(G,this._toolbar.getChildren().length-2);
this._modelRadio.add(G);
G.addListener(q,function(e){if(!e.getData()){return;
}this._currentModel=F;
this._model.setColumns(F.getColumns());
this.load();
if(F.selectionEnabled()){this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
this.select(qx.core.Init.getApplication().getSelectedObject());
}else{this._table.resetSelection();
this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.NO_SELECTION);
}this._filterTextField.setValue(r);
},this);
if(this._currentModel==null){this._currentModel=F;
this._model.setColumns(F.getColumns());
this._table.setColumnWidth(0,50);
this._table.setColumnWidth(1,230);
}},setInitSizeAndPosition:function(){var E=qx.bom.Viewport.getWidth()-this.getWidth();
var D=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(E,30);
this.setHeight(D);
},load:function(window,y){this._iFrameWindow=window||this._iFrameWindow;
var z=this._currentModel.getData(this._iFrameWindow);
if(y){z=this._filterData(z,y);
}this._table.getTableModel().setData(z);
},select:function(a){if(this._currentModel.selectionEnabled()){var c=this._table.getSelectionModel();
var b=this._table.getTableModel().getData();

for(var i=0;i<b.length;i++){if(b[i][0]==a.toHashCode()){c.resetSelection();
c.setSelectionInterval(i,i);
this._table.scrollCellVisible(0,i);
return;
}}}},_onChangeSelection:function(e){if(this._table.getSelectionModel().isSelectionEmpty()){return;
}
if(this._table.getSelectionModel().getSelectedRanges()[0]&&this._iFrameWindow){var v=this._table.getSelectionModel().getSelectedRanges()[0].minIndex;
var x=this._table.getTableModel().getData()[v];
var w=this._iFrameWindow.qx.core.ObjectRegistry.fromHashCode(x[0]);
qx.core.Init.getApplication().select(w,this);
}},_filterData:function(s,t){for(var i=s.length-1;i>=0;i--){if(s[i][0] instanceof String){if(s[i][0].search(t)==-1&&s[i][1].search(t)==-1){s.splice(i,1);
}}else{if(s[i][1].search(t)==-1){s.splice(i,1);
}}}return s;
},getSelection:function(){var C=this._table.getSelectionModel();
var A=C.getSelectedRanges().minIndex;

if(A){var B=this._table.getTableModel().getData()[A];
return qx.core.ObjectRegistry.fromHashCode(B[0]);
}return null;
}},destruct:function(){this._currentModel=this._iFrameWindow=null;
this._disposeObjects(k,d,o,m,n);
}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var cG="left",cF="top",cE="_applyLayoutChange",cD="hAlign",cC="flex",cB="vAlign",cA="Integer",cz="minWidth",cy="width",cx="minHeight",cu="qx.ui.layout.Grid",cw="height",cv="maxHeight",ct="maxWidth";
qx.Class.define(cu,{extend:qx.ui.layout.Abstract,construct:function(cJ,cK){arguments.callee.base.call(this);
this.__ly=[];
this.__lz=[];

if(cJ){this.setSpacingX(cJ);
}
if(cK){this.setSpacingY(cK);
}},properties:{spacingX:{check:cA,init:0,apply:cE},spacingY:{check:cA,init:0,apply:cE}},members:{__lA:null,__ly:null,__lz:null,__lB:null,__lC:null,__lD:null,__lE:null,__lF:null,__lG:null,verifyLayoutProperty:null,__lH:function(){var E=[];
var D=[];
var F=[];
var B=-1;
var A=-1;
var H=this._getLayoutChildren();

for(var i=0,l=H.length;i<l;i++){var C=H[i];
var G=C.getLayoutProperties();
var I=G.row;
var z=G.column;
G.colSpan=G.colSpan||1;
G.rowSpan=G.rowSpan||1;
if(I==null||z==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+C+"' must be defined!");
}
if(E[I]&&E[I][z]){throw new Error("Cannot add widget '"+C+"'!. "+"There is already a widget '"+E[I][z]+"' in this cell ("+I+", "+z+")");
}
for(var x=z;x<z+G.colSpan;x++){for(var y=I;y<I+G.rowSpan;y++){if(E[y]==undefined){E[y]=[];
}E[y][x]=C;
A=Math.max(A,x);
B=Math.max(B,y);
}}
if(G.rowSpan>1){F.push(C);
}
if(G.colSpan>1){D.push(C);
}}for(var y=0;y<=B;y++){if(E[y]==undefined){E[y]=[];
}}this.__lA=E;
this.__lB=D;
this.__lC=F;
this.__lD=B;
this.__lE=A;
this.__lF=null;
this.__lG=null;
delete this._invalidChildrenCache;
},_setRowData:function(by,bz,bA){var bB=this.__ly[by];

if(!bB){this.__ly[by]={};
this.__ly[by][bz]=bA;
}else{bB[bz]=bA;
}},_setColumnData:function(t,u,v){var w=this.__lz[t];

if(!w){this.__lz[t]={};
this.__lz[t][u]=v;
}else{w[u]=v;
}},setSpacing:function(J){this.setSpacingY(J);
this.setSpacingX(J);
return this;
},setColumnAlign:function(bP,bQ,bR){{};
this._setColumnData(bP,cD,bQ);
this._setColumnData(bP,cB,bR);
this._applyLayoutChange();
return this;
},getColumnAlign:function(V){var W=this.__lz[V]||{};
return {vAlign:W.vAlign||cF,hAlign:W.hAlign||cG};
},setRowAlign:function(bv,bw,bx){{};
this._setRowData(bv,cD,bw);
this._setRowData(bv,cB,bx);
this._applyLayoutChange();
return this;
},getRowAlign:function(cH){var cI=this.__ly[cH]||{};
return {vAlign:cI.vAlign||cF,hAlign:cI.hAlign||cG};
},getCellWidget:function(bL,bM){if(this._invalidChildrenCache){this.__lH();
}var bL=this.__lA[bL]||{};
return bL[bM]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__lH();
}return this.__lD+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__lH();
}return this.__lE+1;
},getCellAlign:function(cl,cm){var cs=cF;
var cq=cG;
var cr=this.__ly[cl];
var co=this.__lz[cm];
var cn=this.__lA[cl][cm];

if(cn){var cp={vAlign:cn.getAlignY(),hAlign:cn.getAlignX()};
}else{cp={};
}if(cp.vAlign){cs=cp.vAlign;
}else if(cr&&cr.vAlign){cs=cr.vAlign;
}else if(co&&co.vAlign){cs=co.vAlign;
}if(cp.hAlign){cq=cp.hAlign;
}else if(co&&co.hAlign){cq=co.hAlign;
}else if(cr&&cr.hAlign){cq=cr.hAlign;
}return {vAlign:cs,hAlign:cq};
},setColumnFlex:function(K,L){this._setColumnData(K,cC,L);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bp){var bq=this.__lz[bp]||{};
return bq.flex!==undefined?bq.flex:0;
},setRowFlex:function(bJ,bK){this._setRowData(bJ,cC,bK);
this._applyLayoutChange();
return this;
},getRowFlex:function(bU){var bV=this.__ly[bU]||{};
var bW=bV.flex!==undefined?bV.flex:0;
return bW;
},setColumnMaxWidth:function(a,b){this._setColumnData(a,ct,b);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(ba){var bb=this.__lz[ba]||{};
return bb.maxWidth!==undefined?bb.maxWidth:Infinity;
},setColumnWidth:function(bt,bu){this._setColumnData(bt,cy,bu);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bN){var bO=this.__lz[bN]||{};
return bO.width!==undefined?bO.width:null;
},setColumnMinWidth:function(cL,cM){this._setColumnData(cL,cz,cM);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bX){var bY=this.__lz[bX]||{};
return bY.minWidth||0;
},setRowMaxHeight:function(br,bs){this._setRowData(br,cv,bs);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bC){var bD=this.__ly[bC]||{};
return bD.maxHeight||Infinity;
},setRowHeight:function(bn,bo){this._setRowData(bn,cw,bo);
this._applyLayoutChange();
return this;
},getRowHeight:function(X){var Y=this.__ly[X]||{};
return Y.height!==undefined?Y.height:null;
},setRowMinHeight:function(bS,bT){this._setRowData(bS,cx,bT);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(T){var U=this.__ly[T]||{};
return U.minHeight||0;
},__lI:function(bE){var bI=bE.getSizeHint();
var bH=bE.getMarginLeft()+bE.getMarginRight();
var bG=bE.getMarginTop()+bE.getMarginBottom();
var bF={height:bI.height+bG,width:bI.width+bH,minHeight:bI.minHeight+bG,minWidth:bI.minWidth+bH,maxHeight:bI.maxHeight+bG,maxWidth:bI.maxWidth+bH};
return bF;
},_fixHeightsRowSpan:function(c){var q=this.getSpacingY();

for(var i=0,l=this.__lC.length;i<l;i++){var f=this.__lC[i];
var h=this.__lI(f);
var k=f.getLayoutProperties();
var e=k.row;
var o=q*(k.rowSpan-1);
var d=o;
var n={};

for(var j=0;j<k.rowSpan;j++){var s=k.row+j;
var g=c[s];
var r=this.getRowFlex(s);

if(r>0){n[s]={min:g.minHeight,value:g.height,max:g.maxHeight,flex:r};
}o+=g.height;
d+=g.minHeight;
}if(o<h.height){var p=qx.ui.layout.Util.computeFlexOffsets(n,h.height,o);

for(var j=0;j<k.rowSpan;j++){var m=p[e+j]?p[e+j].offset:0;
c[e+j].height+=m;
}}if(d<h.minHeight){var p=qx.ui.layout.Util.computeFlexOffsets(n,h.minHeight,d);

for(var j=0;j<k.rowSpan;j++){var m=p[e+j]?p[e+j].offset:0;
c[e+j].minHeight+=m;
}}}},_fixWidthsColSpan:function(cN){var cR=this.getSpacingX();

for(var i=0,l=this.__lB.length;i<l;i++){var cO=this.__lB[i];
var cQ=this.__lI(cO);
var cT=cO.getLayoutProperties();
var cP=cT.column;
var da=cR*(cT.colSpan-1);
var cS=da;
var cU={};
var cW;

for(var j=0;j<cT.colSpan;j++){var db=cT.column+j;
var cY=cN[db];
var cX=this.getColumnFlex(db);
if(cX>0){cU[db]={min:cY.minWidth,value:cY.width,max:cY.maxWidth,flex:cX};
}da+=cY.width;
cS+=cY.minWidth;
}if(da<cQ.width){var cV=qx.ui.layout.Util.computeFlexOffsets(cU,cQ.width,da);

for(var j=0;j<cT.colSpan;j++){cW=cV[cP+j]?cV[cP+j].offset:0;
cN[cP+j].width+=cW;
}}if(cS<cQ.minWidth){var cV=qx.ui.layout.Util.computeFlexOffsets(cU,cQ.minWidth,cS);

for(var j=0;j<cT.colSpan;j++){cW=cV[cP+j]?cV[cP+j].offset:0;
cN[cP+j].minWidth+=cW;
}}}},_getRowHeights:function(){if(this.__lF!=null){return this.__lF;
}var bl=[];
var be=this.__lD;
var bd=this.__lE;

for(var bm=0;bm<=be;bm++){var bf=0;
var bh=0;
var bg=0;

for(var bk=0;bk<=bd;bk++){var bc=this.__lA[bm][bk];

if(!bc){continue;
}var bi=bc.getLayoutProperties().rowSpan||0;

if(bi>1){continue;
}var bj=this.__lI(bc);

if(this.getRowFlex(bm)>0){bf=Math.max(bf,bj.minHeight);
}else{bf=Math.max(bf,bj.height);
}bh=Math.max(bh,bj.height);
}var bf=Math.max(bf,this.getRowMinHeight(bm));
var bg=this.getRowMaxHeight(bm);

if(this.getRowHeight(bm)!==null){var bh=this.getRowHeight(bm);
}else{var bh=Math.max(bf,Math.min(bh,bg));
}bl[bm]={minHeight:bf,height:bh,maxHeight:bg};
}
if(this.__lC.length>0){this._fixHeightsRowSpan(bl);
}this.__lF=bl;
return bl;
},_getColWidths:function(){if(this.__lG!=null){return this.__lG;
}var ce=[];
var cb=this.__lE;
var cd=this.__lD;

for(var cj=0;cj<=cb;cj++){var ch=0;
var cg=0;
var cc=Infinity;

for(var ck=0;ck<=cd;ck++){var ca=this.__lA[ck][cj];

if(!ca){continue;
}var cf=ca.getLayoutProperties().colSpan||0;

if(cf>1){continue;
}var ci=this.__lI(ca);

if(this.getColumnFlex(cj)>0){cg=Math.max(cg,ci.minWidth);
}else{cg=Math.max(cg,ci.width);
}ch=Math.max(ch,ci.width);
}var cg=Math.max(cg,this.getColumnMinWidth(cj));
var cc=this.getColumnMaxWidth(cj);

if(this.getColumnWidth(cj)!==null){var ch=this.getColumnWidth(cj);
}else{var ch=Math.max(cg,Math.min(ch,cc));
}ce[cj]={minWidth:cg,width:ch,maxWidth:cc};
}
if(this.__lB.length>0){this._fixWidthsColSpan(ce);
}this.__lG=ce;
return ce;
},_getColumnFlexOffsets:function(dI){var dJ=this.getSizeHint();
var dN=dI-dJ.width;

if(dN==0){return {};
}var dL=this._getColWidths();
var dK={};

for(var i=0,l=dL.length;i<l;i++){var dO=dL[i];
var dM=this.getColumnFlex(i);

if((dM<=0)||(dO.width==dO.maxWidth&&dN>0)||(dO.width==dO.minWidth&&dN<0)){continue;
}dK[i]={min:dO.minWidth,value:dO.width,max:dO.maxWidth,flex:dM};
}return qx.ui.layout.Util.computeFlexOffsets(dK,dI,dJ.width);
},_getRowFlexOffsets:function(M){var N=this.getSizeHint();
var Q=M-N.height;

if(Q==0){return {};
}var R=this._getRowHeights();
var O={};

for(var i=0,l=R.length;i<l;i++){var S=R[i];
var P=this.getRowFlex(i);

if((P<=0)||(S.height==S.maxHeight&&Q>0)||(S.height==S.minHeight&&Q<0)){continue;
}O[i]={min:S.minHeight,value:S.height,max:S.maxHeight,flex:P};
}return qx.ui.layout.Util.computeFlexOffsets(O,M,N.height);
},renderLayout:function(dc,dd){if(this._invalidChildrenCache){this.__lH();
}var ds=qx.ui.layout.Util;
var df=this.getSpacingX();
var dl=this.getSpacingY();
var dx=this._getColWidths();
var dw=this._getColumnFlexOffsets(dc);
var dg=[];
var dz=this.__lE;
var de=this.__lD;
var dy;

for(var dA=0;dA<=dz;dA++){dy=dw[dA]?dw[dA].offset:0;
dg[dA]=dx[dA].width+dy;
}var dp=this._getRowHeights();
var dr=this._getRowFlexOffsets(dd);
var dG=[];

for(var dm=0;dm<=de;dm++){dy=dr[dm]?dr[dm].offset:0;
dG[dm]=dp[dm].height+dy;
}var dH=0;

for(var dA=0;dA<=dz;dA++){var top=0;

for(var dm=0;dm<=de;dm++){var du=this.__lA[dm][dA];
if(!du){top+=dG[dm]+dl;
continue;
}var dh=du.getLayoutProperties();
if(dh.row!==dm||dh.column!==dA){top+=dG[dm]+dl;
continue;
}var dF=df*(dh.colSpan-1);

for(var i=0;i<dh.colSpan;i++){dF+=dg[dA+i];
}var dv=dl*(dh.rowSpan-1);

for(var i=0;i<dh.rowSpan;i++){dv+=dG[dm+i];
}var di=du.getSizeHint();
var dD=du.getMarginTop();
var dt=du.getMarginLeft();
var dq=du.getMarginBottom();
var dk=du.getMarginRight();
var dn=Math.max(di.minWidth,Math.min(dF-dt-dk,di.maxWidth));
var dE=Math.max(di.minHeight,Math.min(dv-dD-dq,di.maxHeight));
var dB=this.getCellAlign(dm,dA);
var dC=dH+ds.computeHorizontalAlignOffset(dB.hAlign,dn,dF,dt,dk);
var dj=top+ds.computeVerticalAlignOffset(dB.vAlign,dE,dv,dD,dq);
du.renderLayout(dC,dj,dn,dE);
top+=dG[dm]+dl;
}dH+=dg[dA]+df;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__lG=null;
this.__lF=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lH();
}var dT=this._getColWidths();
var dV=0,dW=0;

for(var i=0,l=dT.length;i<l;i++){var dX=dT[i];

if(this.getColumnFlex(i)>0){dV+=dX.minWidth;
}else{dV+=dX.width;
}dW+=dX.width;
}var dY=this._getRowHeights();
var dR=0,dU=0;

for(var i=0,l=dY.length;i<l;i++){var ea=dY[i];

if(this.getRowFlex(i)>0){dR+=ea.minHeight;
}else{dR+=ea.height;
}dU+=ea.height;
}var dQ=this.getSpacingX()*(dT.length-1);
var dP=this.getSpacingY()*(dY.length-1);
var dS={minWidth:dV+dQ,width:dW+dQ,minHeight:dR+dP,height:dU+dP};
return dS;
}},destruct:function(){this.__lA=this.__ly=this.__lz=this.__lB=this.__lC=this.__lG=this.__lF=null;
}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var k="Boolean",j="invalid",i="qx.ui.form.MForm",h="_applyValid",g="",f="changeRequired",e="changeValid",d="changeInvalidMessage",c="String";
qx.Mixin.define(i,{properties:{valid:{check:k,init:true,apply:h,event:e},required:{check:k,init:false,event:f},invalidMessage:{check:c,init:g,event:d}},members:{_applyValid:function(a,b){a?this.removeState(j):this.addState(j);
}}});
})();
(function(){var q="showingPlaceholder",p="color",o="",n="none",m="qx.client",l="Boolean",k="qx.event.type.Data",j="readonly",i="input",h="focusin",bd="visibility",bc="focusout",bb="hidden",ba="absolute",Y="readOnly",X="text",W="_applyTextAlign",V="px",U="RegExp",T=")",x="syncAppearance",y="gecko",v="A",w="change",t="textAlign",u="focused",r="center",s="visible",z="disabled",A="url(",H="String",F="resize",L="qx.ui.form.AbstractField",J="transparent",P="off",N="spellcheck",C="false",S="right",R="PositiveInteger",Q="mshtml",B="abstract",D="block",E="webkit",G="_applyReadOnly",I="_applyPlaceholder",K="left",M="changeValue",O="qx/static/blank.gif";
qx.Class.define(L,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:B,construct:function(by){arguments.callee.base.call(this);

if(by!=null){this.setValue(by);
}this.getContentElement().addListener(w,this._onChangeContent,this);
this.addListener(x,this._syncPlaceholder,this);
},events:{"input":k,"changeValue":k},properties:{textAlign:{check:[K,r,S],nullable:true,themeable:true,apply:W},readOnly:{check:l,apply:G,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:R,init:Infinity},liveUpdate:{check:l,init:false},placeholder:{check:H,nullable:true,apply:I},filter:{check:U,nullable:true,init:null}},members:{__lJ:true,__lK:null,__lL:null,__lM:null,getFocusElement:function(){var c=this.getContentElement();

if(c){return c;
}},_createInputElement:function(){return new qx.html.Input(X);
},renderLayout:function(bg,top,bh,bi){var bj=this._updateInsets;
var bn=arguments.callee.base.call(this,bg,top,bh,bi);
if(!bn){return;
}var bl=bn.size||bj;
var bo=V;

if(bl||bn.local||bn.margin){var bk=this.getInsets();
var innerWidth=bh-bk.left-bk.right;
var innerHeight=bi-bk.top-bk.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bm=this.getContentElement();

if(bj){this.__lP().setStyles({"left":bk.left+bo,"top":bk.top+bo});
}
if(bl){this.__lP().setStyles({"width":innerWidth+bo,"height":innerHeight+bo});
bm.setStyles({"width":innerWidth+bo,"height":innerHeight+bo});
}},_createContentElement:function(){var bL=this._createInputElement();
bL.setStyles({"border":n,"padding":0,"margin":0,"display":D,"background":J,"outline":n,"appearance":n,"position":ba,"autoComplete":P});
bL.setSelectable(this.getSelectable());
bL.setEnabled(this.getEnabled());
bL.addListener(i,this._onHtmlInput,this);
if(qx.core.Variant.isSet(m,y)){bL.setAttribute(N,C);
}if(qx.core.Variant.isSet(m,E)){bL.setStyle(F,n);
}if(qx.core.Variant.isSet(m,Q)){bL.setStyles({backgroundImage:A+qx.util.ResourceManager.getInstance().toUri(O)+T});
}return bL;
},_applyEnabled:function(bM,bN){arguments.callee.base.call(this,bM,bN);
this.getContentElement().setEnabled(bM);

if(bM){this._showPlaceholder();
}else{this._removePlaceholder();
}},__lN:{width:16,height:16},_getContentHint:function(){return {width:this.__lN.width*10,height:this.__lN.height||16};
},_applyFont:function(bH,bI){var bJ;

if(bH){var bK=qx.theme.manager.Font.getInstance().resolve(bH);
bJ=bK.getStyles();
}else{bJ=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bJ);
this.__lP().setStyles(bJ);
if(bH){this.__lN=qx.bom.Label.getTextSize(v,bJ);
}else{delete this.__lN;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bw,bx){if(bw){this.getContentElement().setStyle(p,qx.theme.manager.Color.getInstance().resolve(bw));
this.__lP().setStyle(p,qx.theme.manager.Color.getInstance().resolve(bw));
}else{this.getContentElement().removeStyle(p);
this.__lP().removeStyle(p);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__lN;
},_onHtmlInput:function(e){var bC=e.getData();
var bB=true;
this.__lJ=false;
if(this.getFilter()!=null){var bD=o;
var bz=bC.search(this.getFilter());
var bA=bC;

while(bz>=0){bD=bD+(bA.charAt(bz));
bA=bA.substring(bz+1,bA.length);
bz=bA.search(this.getFilter());
}
if(bD!=bC){bB=false;
bC=bD;
this.getContentElement().setValue(bC);
}}if(bC.length>this.getMaxLength()){var bB=false;
this.getContentElement().setValue(bC.substr(0,this.getMaxLength()));
}if(bB){this.fireDataEvent(i,bC,this.__lM);
this.__lM=bC;
if(this.getLiveUpdate()){this.__lO(bC);
}}},__lO:function(d){this.fireNonBubblingEvent(M,qx.event.type.Data,[d,this.__lL]);
this.__lL=d;
},setValue:function(br){if(br===null){if(this.__lJ){return br;
}br=o;
this.__lJ=true;
}else{this.__lJ=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(br)){var bt=this.getContentElement();

if(br.length>this.getMaxLength()){br=br.substr(0,this.getMaxLength());
}
if(bt.getValue()!=br){var bu=bt.getValue();
bt.setValue(br);
var bs=this.__lJ?null:br;
this.__lL=bu;
this.__lO(bs);
}this._showPlaceholder();
return br;
}throw new Error("Invalid value type: "+br);
},getValue:function(){var bv=this.getContentElement().getValue();
return this.__lJ?null:bv;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__lJ=e.getData()===null;
this.__lO(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(be,bf){this.getContentElement().setTextSelection(be,bf);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var b=this.getValue()||o;
var a=this.getPlaceholder();

if(a!=null&&b==o&&!this.hasState(u)&&!this.hasState(z)){if(this.hasState(q)){this._syncPlaceholder();
}else{this.addState(q);
}}},_removePlaceholder:function(){if(this.hasState(q)){this.__lP().setStyle(bd,bb);
this.removeState(q);
}},_syncPlaceholder:function(){if(this.hasState(q)){this.__lP().setStyle(bd,s);
}},__lP:function(){if(this.__lK==null){this.__lK=new qx.html.Label();
this.__lK.setStyles({"visibility":bb,"zIndex":6,"position":ba});
this.getContainerElement().add(this.__lK);
}return this.__lK;
},_applyPlaceholder:function(bp,bq){this.__lP().setValue(bp);

if(bp!=null){this.addListener(h,this._removePlaceholder,this);
this.addListener(bc,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(h,this._removePlaceholder,this);
this.removeListener(bc,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(f,g){this.getContentElement().setStyle(t,f);
},_applyReadOnly:function(bE,bF){var bG=this.getContentElement();
bG.setAttribute(Y,bE);

if(bE){this.addState(j);
this.setFocusable(false);
}else{this.removeState(j);
this.setFocusable(true);
}}},destruct:function(){this.__lK=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var t="none",s="wrap",r="value",q="qx.client",p="textarea",o="off",n="on",m="qxSelectable",l="",k="webkit",g="input",j="qx.html.Input",i="select",f="disabled",e="read-only",h="userSelect";
qx.Class.define(j,{extend:qx.html.Element,construct:function(b){arguments.callee.base.call(this);
this.__lQ=b;
if(b===i||b===p){this.setNodeName(b);
}else{this.setNodeName(g);
}},members:{__lQ:null,__lR:null,__lS:null,_createDomElement:function(){return qx.bom.Input.create(this.__lQ);
},_applyProperty:function(name,c){arguments.callee.base.call(this,name,c);
var d=this.getDomElement();

if(name===r){qx.bom.Input.setValue(d,c);
}else if(name===s){qx.bom.Input.setWrap(d,c);
}},setEnabled:qx.core.Variant.select(q,{"webkit":function(z){this.__lS=z;

if(!z){this.setStyles({"userModify":e,"userSelect":t});
}else{this.setStyles({"userModify":null,"userSelect":this.__lR?null:t});
}},"default":function(y){this.setAttribute(f,y===false);
}}),setSelectable:qx.core.Variant.select(q,{"webkit":function(w){this.__lR=w;
this.setAttribute(m,w?n:o);
if(qx.core.Variant.isSet(q,k)){var x=this.__lS?w?null:t:t;
this.setStyle(h,x);
}},"default":function(B){this.setAttribute(m,B?n:o);
}}),setValue:function(u){var v=this.getDomElement();

if(v){if(v.value!=u){qx.bom.Input.setValue(v,u);
}}else{this._setProperty(r,u);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(r)||l;
},setWrap:function(a){if(this.__lQ===p){this._setProperty(s,a);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__lQ===p){return this._getProperty(s);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var bb="change",ba="input",Y="qx.client",X="text",W="password",V="checkbox",U="radio",T="textarea",S="keypress",R="opera",L="propertychange",Q="blur",O="keydown",K="keyup",J="select-multiple",N="checked",M="value",P="select",I="qx.event.handler.Input";
qx.Class.define(I,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(Y,R)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__lT:false,__lU:null,__lV:null,canHandleEvent:function(u,v){var w=u.tagName.toLowerCase();

if(v===ba&&(w===ba||w===T)){return true;
}
if(v===bb&&(w===ba||w===T||w===P)){return true;
}return false;
},registerEvent:qx.core.Variant.select(Y,{"mshtml":function(D,E,F){if(!D.__lW){var G=D.tagName.toLowerCase();
var H=D.type;

if(H===X||H===W||G===T||H===V||H===U){qx.bom.Event.addNativeListener(D,L,this._onPropertyWrapper);
}
if(H!==V&&H!==U){qx.bom.Event.addNativeListener(D,bb,this._onChangeValueWrapper);
}
if(H===X||H===W){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,D);
qx.bom.Event.addNativeListener(D,S,this._onKeyPressWrapped);
}D.__lW=true;
}},"default":function(f,g,h){if(g===ba){this.__lX(f);
}else if(g===bb){if(f.type===U||f.type===V){qx.bom.Event.addNativeListener(f,bb,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(f,bb,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(Y,R)){if(f.type===X||f.type===W){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,f);
qx.bom.Event.addNativeListener(f,S,this._onKeyPressWrapped);
}}}}}),__lX:qx.core.Variant.select(Y,{"mshtml":null,"webkit":function(c){var d=c.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&d==T){qx.bom.Event.addNativeListener(c,S,this._onInputWrapper);
}qx.bom.Event.addNativeListener(c,ba,this._onInputWrapper);
},"opera":function(A){qx.bom.Event.addNativeListener(A,K,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(A,O,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(A,Q,this._onBlurWrapper);
qx.bom.Event.addNativeListener(A,ba,this._onInputWrapper);
},"default":function(j){qx.bom.Event.addNativeListener(j,ba,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(Y,{"mshtml":function(n,p){if(n.__lW){var q=n.tagName.toLowerCase();
var r=n.type;

if(r===X||r===W||q===T||r===V||r===U){qx.bom.Event.removeNativeListener(n,L,this._onPropertyWrapper);
}
if(r!==V&&r!==U){qx.bom.Event.removeNativeListener(n,bb,this._onChangeValueWrapper);
}
if(r===X||r===W){qx.bom.Event.removeNativeListener(n,S,this._onKeyPressWrapped);
}
try{delete n.__lW;
}catch(bf){n.__lW=null;
}}},"default":function(B,C){if(C===ba){this.__lX(B);
}else if(C===bb){if(B.type===U||B.type===V){qx.bom.Event.removeNativeListener(B,bb,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(B,bb,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(Y,R)){if(B.type===X||B.type===W){qx.bom.Event.removeNativeListener(B,S,this._onKeyPressWrapped);
}}}}),__lY:qx.core.Variant.select(Y,{"mshtml":null,"webkit":function(s){var t=s.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&t==T){qx.bom.Event.removeNativeListener(s,S,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(s,ba,this._onInputWrapper);
},"opera":function(bc){qx.bom.Event.removeNativeListener(bc,K,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(bc,O,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(bc,Q,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(bc,ba,this._onInputWrapper);
},"default":function(z){qx.bom.Event.removeNativeListener(z,ba,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(Y,{"mshtml|opera":function(e,m){if(e.keyCode===13){if(m.value!==this.__lV){this.__lV=m.value;
qx.event.Registration.fireEvent(m,bb,qx.event.type.Data,[m.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(Y,{"opera":function(e){if(e.keyCode===13){this.__lT=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(Y,{"opera":function(e){if(e.keyCode===13){this.__lT=false;
}},"default":null}),_onBlur:qx.core.Variant.select(Y,{"opera":function(e){if(this.__lU){window.clearTimeout(this.__lU);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var k=e.target;
if(!this.__lT){if(qx.core.Variant.isSet(Y,R)){this.__lU=window.setTimeout(function(){qx.event.Registration.fireEvent(k,ba,qx.event.type.Data,[k.value]);
},0);
}else{qx.event.Registration.fireEvent(k,ba,qx.event.type.Data,[k.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var b=e.target||e.srcElement;
var a=b.value;

if(b.type===J){var a=[];

for(var i=0,o=b.options,l=o.length;i<l;i++){if(o[i].selected){a.push(o[i].value);
}}}qx.event.Registration.fireEvent(b,bb,qx.event.type.Data,[a]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var y=e.target;

if(y.type===U){if(y.checked){qx.event.Registration.fireEvent(y,bb,qx.event.type.Data,[y.value]);
}}else{qx.event.Registration.fireEvent(y,bb,qx.event.type.Data,[y.checked]);
}}),_onProperty:qx.core.Variant.select(Y,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bd=e.target||e.srcElement;
var be=e.propertyName;

if(be===M&&(bd.type===X||bd.type===W||bd.tagName.toLowerCase()===T)){if(!bd.__inValueSet){qx.event.Registration.fireEvent(bd,ba,qx.event.type.Data,[bd.value]);
}}else if(be===N){if(bd.type===V){qx.event.Registration.fireEvent(bd,bb,qx.event.type.Data,[bd.checked]);
}else if(bd.checked){qx.event.Registration.fireEvent(bd,bb,qx.event.type.Data,[bd.value]);
}}}),"default":function(){}})},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var H="",G="select",F="soft",E="off",D="qx.client",C="wrap",B="text",A="mshtml",z="number",y="checkbox",r="select-one",x="input",u="option",q="value",p="radio",t="qx.bom.Input",s="nowrap",v="textarea",o="auto",w="normal";
qx.Class.define(t,{statics:{__ma:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(I,J,K){{};
var J=J?qx.lang.Object.clone(J):{};
var L;

if(I===v||I===G){L=I;
}else{L=x;
J.type=I;
}return qx.bom.Element.create(L,J,K);
},setValue:function(M,N){var S=M.nodeName.toLowerCase();
var P=M.type;
var Array=qx.lang.Array;
var T=qx.lang.Type;

if(typeof N===z){N+=H;
}
if((P===y||P===p)){if(T.isArray(N)){M.checked=Array.contains(N,M.value);
}else{M.checked=M.value==N;
}}else if(S===G){var O=T.isArray(N);
var U=M.options;
var Q,R;

for(var i=0,l=U.length;i<l;i++){Q=U[i];
R=Q.getAttribute(q);

if(R==null){R=Q.text;
}Q.selected=O?Array.contains(N,R):N==R;
}
if(O&&N.length==0){M.selectedIndex=-1;
}}else if(P===B&&qx.core.Variant.isSet(D,A)){M.__mb=true;
M.value=N;
M.__mb=null;
}else{M.value=N;
}},getValue:function(c){var j=c.nodeName.toLowerCase();

if(j===u){return (c.attributes.value||{}).specified?c.value:c.text;
}
if(j===G){var d=c.selectedIndex;
if(d<0){return null;
}var k=[];
var n=c.options;
var m=c.type==r;
var h=qx.bom.Input;
var g;
for(var i=m?d:0,f=m?d+1:n.length;i<f;i++){var e=n[i];

if(e.selected){g=h.getValue(e);
if(m){return g;
}k.push(g);
}}return k;
}else{return (c.value||H).replace(/\r/g,H);
}},setWrap:qx.core.Variant.select(D,{"mshtml":function(a,b){a.wrap=b?F:E;
},"gecko|webkit":function(X,Y){var bb=Y?F:E;
var ba=Y?H:o;
X.setAttribute(C,bb);
X.style.overflow=ba;
},"default":function(V,W){V.style.whiteSpace=W?w:s;
}})}});
})();
(function(){var p="interval",o="qx.util.TimerManager",n="singleton";
qx.Class.define(o,{extend:qx.core.Object,type:n,statics:{__mc:[],__md:{},__me:0},members:{start:function(g,h,j,k,l){if(!l){l=h||0;
}var m=(new Date()).getTime()+l;
arguments.callee.self.__md[++arguments.callee.self.__me]={callback:g,userData:k||null,expireAt:m,recurTime:h,context:j||this};
this.__mf(m,arguments.callee.self.__me);
return arguments.callee.self.__me;
},stop:function(q){var r=arguments.callee.self.__mc;
var length=r.length;

for(var i=0;i<length;i++){if(r[i]==q){r.splice(i,1);
break;
}}delete arguments.callee.self.__md[q];
if(r.length==0){qx.event.Idle.getInstance().removeListener(p,this.__mg);
}},__mf:function(s,t){var v=arguments.callee.self.__mc;
var u=arguments.callee.self.__md;
var length=v.length;

for(var i=0;i<length;i++){if(u[v[i]].expireAt>s){v.splice(i,0,t);
break;
}}if(v.length==length){v.push(t);
}if(v.length==1){qx.event.Idle.getInstance().addListener(p,this.__mg,this);
}},__mg:function(){var d=(new Date()).getTime();
var b=arguments.callee.self.__mc;
var c=arguments.callee.self.__md;
while(b.length>0&&c[b[0]].expireAt<=d){var f=(b.splice(0,1))[0];
var a=c[f];
a.callback.call(a.context,a.userData,f);
if(a.recurTime&&c[f]){var e=(new Date()).getTime();
a.expireAt=e+a.recurTime;
this.__mf(a.expireAt,f);
}else{delete c[f];
}}if(b.length==0){qx.event.Idle.getInstance().removeListener(p,this.__mg);
}}}});
})();
(function(){var n="qx.event.type.Data",m="EVENT_TYPE_DATA_CHANGED",l="qx.ui.table.ITableModel",k="New code should not use this. Instead, use the text string 'dataChanged' literally.",j="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",i="qx.event.type.Event",h="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(l,{events:{"dataChanged":n,"metaDataChanged":i,"sorted":n},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(g){},getColumnCount:function(){},getColumnId:function(c){},getColumnIndexById:function(r){},getColumnName:function(o){},isColumnEditable:function(w){},isColumnSortable:function(x){},sortByColumn:function(s,t){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(a,b){},getValue:function(p,q){},getValueById:function(u,v){},setValue:function(d,e,f){},setValueById:function(y,z,A){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,m,k);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,h,j);
})();
(function(){var u="metaDataChanged",t="qx.event.type.Data",s="qx.event.type.Event",r="abstract",q="qx.ui.table.model.Abstract";
qx.Class.define(q,{type:r,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":t,"metaDataChanged":s,"sorted":t},construct:function(){arguments.callee.base.call(this);
this.__mh=[];
this.__mi=[];
this.__mj={};
},members:{__mh:null,__mi:null,__mj:null,__mk:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(w){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(C){return false;
},sortByColumn:function(f,g){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(E,F){},getValue:function(x,y){throw new Error("getValue is abstract");
},getValueById:function(A,B){return this.getValue(this.getColumnIndexById(A),B);
},setValue:function(m,n,o){throw new Error("setValue is abstract");
},setValueById:function(j,k,l){this.setValue(this.getColumnIndexById(j),k,l);
},getColumnCount:function(){return this.__mh.length;
},getColumnIndexById:function(z){return this.__mj[z];
},getColumnId:function(b){return this.__mh[b];
},getColumnName:function(a){return this.__mi[a];
},setColumnIds:function(D){this.__mh=D;
this.__mj={};

for(var i=0;i<D.length;i++){this.__mj[D[i]]=i;
}this.__mi=new Array(D.length);
if(!this.__mk){this.fireEvent(u);
}},setColumnNamesByIndex:function(p){if(this.__mh.length!=p.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__mh.length+" != "+p.length);
}this.__mi=p;
this.fireEvent(u);
},setColumnNamesById:function(v){this.__mi=new Array(this.__mh.length);

for(var i=0;i<this.__mh.length;++i){this.__mi[i]=v[this.__mh[i]];
}},setColumns:function(c,d){var e=this.__mh.length==0||d;

if(d==null){if(this.__mh.length==0){d=c;
}else{d=this.__mh;
}}
if(d.length!=c.length){throw new Error("columnIdArr and columnNameArr have different length: "+d.length+" != "+c.length);
}
if(e){this.__mk=true;
this.setColumnIds(d);
this.__mk=false;
}this.setColumnNamesByIndex(c);
}},destruct:function(){this.__mh=this.__mi=this.__mj=null;
}});
})();
(function(){var Y="dataChanged",X="metaDataChanged",W="qx.ui.table.model.Simple",V="Boolean",U="sorted";
qx.Class.define(W,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__ml=[];
this.__mm=-1;
this.__mn=[];
this.__mo=null;
},properties:{caseSensitiveSorting:{check:V,init:true}},statics:{_defaultSortComparatorAscending:function(c,d){var e=c[arguments.callee.columnIndex];
var f=d[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(e)&&qx.lang.Type.isNumber(f)){var g=isNaN(e)?isNaN(f)?0:1:isNaN(f)?-1:null;

if(g!=null){return g;
}}return (e>f)?1:((e==f)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bt,bu){var bv=(bt[arguments.callee.columnIndex].toLowerCase?bt[arguments.callee.columnIndex].toLowerCase():bt[arguments.callee.columnIndex]);
var bw=(bu[arguments.callee.columnIndex].toLowerCase?bu[arguments.callee.columnIndex].toLowerCase():bu[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bv)&&qx.lang.Type.isNumber(bw)){var bx=isNaN(bv)?isNaN(bw)?0:1:isNaN(bw)?-1:null;

if(bx!=null){return bx;
}}return (bv>bw)?1:((bv==bw)?0:-1);
},_defaultSortComparatorDescending:function(m,n){var o=m[arguments.callee.columnIndex];
var p=n[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(o)&&qx.lang.Type.isNumber(p)){var q=isNaN(o)?isNaN(p)?0:1:isNaN(p)?-1:null;

if(q!=null){return q;
}}return (o<p)?1:((o==p)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(s,t){var u=(s[arguments.callee.columnIndex].toLowerCase?s[arguments.callee.columnIndex].toLowerCase():s[arguments.callee.columnIndex]);
var v=(t[arguments.callee.columnIndex].toLowerCase?t[arguments.callee.columnIndex].toLowerCase():t[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(u)&&qx.lang.Type.isNumber(v)){var w=isNaN(u)?isNaN(v)?0:1:isNaN(v)?-1:null;

if(w!=null){return w;
}}return (u<v)?1:((u==v)?0:-1);
}},members:{__ml:null,__mo:null,__mp:null,__mn:null,__mm:null,__mq:null,getRowData:function(x){var y=this.__ml[x];

if(y==null||y.originalData==null){return y;
}else{return y.originalData;
}},getRowDataAsMap:function(I){var K=this.__ml[I];
var J={};

for(var L=0;L<this.getColumnCount();L++){J[this.getColumnId(L)]=K[L];
}return J;
},getDataAsMapArray:function(){var H=this.getRowCount();
var G=[];

for(var i=0;i<H;i++){G.push(this.getRowDataAsMap(i));
}return G;
},setEditable:function(be){this.__mo=[];

for(var bf=0;bf<this.getColumnCount();bf++){this.__mo[bf]=be;
}this.fireEvent(X);
},setColumnEditable:function(a,b){if(b!=this.isColumnEditable(a)){if(this.__mo==null){this.__mo=[];
}this.__mo[a]=b;
this.fireEvent(X);
}},isColumnEditable:function(r){return this.__mo?(this.__mo[r]==true):false;
},setColumnSortable:function(br,bs){if(bs!=this.isColumnSortable(br)){if(this.__mp==null){this.__mp=[];
}this.__mp[br]=bs;
this.fireEvent(X);
}},isColumnSortable:function(z){return (this.__mp?(this.__mp[z]!==false):true);
},sortByColumn:function(bg,bh){var bk;
var bj=this.__mn[bg];

if(bj){bk=(bh?bj.ascending:bj.descending);
}else{if(this.getCaseSensitiveSorting()){bk=(bh?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bk=(bh?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bk.columnIndex=bg;
this.__ml.sort(bk);
this.__mm=bg;
this.__mq=bh;
var bi={columnIndex:bg,ascending:bh};
this.fireDataEvent(U,bi);
this.fireEvent(X);
},setSortMethods:function(bA,bB){var bC;

if(qx.lang.Type.isFunction(bB)){bC={ascending:bB,descending:function(by,bz){return bB(bz,by);
}};
}else{bC=bB;
}this.__mn[bA]=bC;
},getSortMethods:function(T){return this.__mn[T];
},clearSorting:function(){if(this.__mm!=-1){this.__mm=-1;
this.__mq=true;
this.fireEvent(X);
}},getSortColumnIndex:function(){return this.__mm;
},isSortAscending:function(){return this.__mq;
},getRowCount:function(){return this.__ml.length;
},getValue:function(A,B){if(B<0||B>=this.__ml.length){throw new Error("this.__rowArr out of bounds: "+B+" (0.."+this.__ml.length+")");
}return this.__ml[B][A];
},setValue:function(bD,bE,bF){if(this.__ml[bE][bD]!=bF){this.__ml[bE][bD]=bF;
if(this.hasListener(Y)){var bG={firstRow:bE,lastRow:bE,firstColumn:bD,lastColumn:bD};
this.fireDataEvent(Y,bG);
}
if(bD==this.__mm){this.clearSorting();
}}},setData:function(h,k){this.__ml=h;
if(this.hasListener(Y)){var l={firstRow:0,lastRow:h.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(Y,l);
}
if(k!==false){this.clearSorting();
}},getData:function(){return this.__ml;
},setDataAsMapArray:function(Q,R,S){this.setData(this._mapArray2RowArr(Q,R),S);
},addRows:function(bL,bM,bN){if(bM==null){bM=this.__ml.length;
}bL.splice(0,0,bM,0);
Array.prototype.splice.apply(this.__ml,bL);
var bO={firstRow:bM,lastRow:this.__ml.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(Y,bO);

if(bN!==false){this.clearSorting();
}},addRowsAsMapArray:function(bH,bI,bJ,bK){this.addRows(this._mapArray2RowArr(bH,bJ),bI,bK);
},setRows:function(C,D,E){if(D==null){D=0;
}C.splice(0,0,D,C.length);
Array.prototype.splice.apply(this.__ml,C);
var F={firstRow:D,lastRow:this.__ml.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(Y,F);

if(E!==false){this.clearSorting();
}},setRowsAsMapArray:function(M,N,O,P){this.setRows(this._mapArray2RowArr(M,O),N,P);
},removeRows:function(ba,bb,bc){this.__ml.splice(ba,bb);
var bd={firstRow:ba,lastRow:this.__ml.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:ba,removeCount:bb};
this.fireDataEvent(Y,bd);

if(bc!==false){this.clearSorting();
}},_mapArray2RowArr:function(bl,bm){var bq=bl.length;
var bn=this.getColumnCount();
var bp=new Array(bq);
var bo;

for(var i=0;i<bq;++i){bo=[];

if(bm){bo.originalData=bl[i];
}
for(var j=0;j<bn;++j){bo[j]=bl[i][this.getColumnId(j)];
}bp[i]=bo;
}return bp;
}},destruct:function(){this.__ml=this.__mo=this.__mn=this.__mp=null;
}});
})();
(function(){var bp="Function",bo="Boolean",bn="column-button",bm="qx.event.type.Data",bl="statusbar",bk="qx.ui.table.pane.CellEvent",bj="PageUp",bi="changeLocale",bh="changeSelection",bg="__mB",cB="qx.dynlocale",cA="Enter",cz="metaDataChanged",cy="dataChanged",cx="on",cw="_applyStatusBarVisible",cv="columnVisibilityMenuCreateStart",cu="blur",ct="qx.ui.table.Table",cs="columnVisibilityMenuCreateEnd",bw="Use 'resetSelection' instead.",bx="verticalScrollBarChanged",bu="_applyMetaColumnCounts",bv="one of one row",bs="focus",bt="changeDataRowRenderer",bq="__mz",br="changeHeaderCellHeight",bE="Escape",bF="A",bT="changeSelectionModel",bP="Left",cc="__ms",bW="Down",co="Integer",ci="_applyHeaderCellHeight",bK="visibilityChanged",cr="qx.ui.table.ITableModel",cq="orderChanged",cp="_applySelectionModel",bI="__mr",bM="menu",bO="_applyAdditionalStatusBarText",bR="_applyFocusCellOnMouseMove",bU="table",bX="_applyColumnVisibilityButtonVisible",ce="changeTableModel",ck="qx.event.type.Event",by="tableWidthChanged",bz="End",bL="Object",cb="_applyShowCellFocusIndicator",ca="resize",bY="changeScrollY",cg="_applyTableModel",cf="menu-button",bV="_applyKeepFirstVisibleRowComplete",cd="widthChanged",bd="Home",cj="_applyRowHeight",bA="F2",bB="appear",bQ="__mA",be="Up",bf="%1 rows",bH="qx.ui.table.selection.Model",bC="one row",bD="PageDown",bG="%1 of %2 rows",bS="keypress",cm="changeRowHeight",cl="Number",bN="changeVisible",cn="qx.ui.table.IRowRenderer",bJ="Right",ch="Space";
qx.Class.define(ct,{extend:qx.ui.core.Widget,construct:function(p,q){arguments.callee.base.call(this);
if(!q){q={};
}
if(q.selectionManager){this.setNewSelectionManager(q.selectionManager);
}
if(q.selectionModel){this.setNewSelectionModel(q.selectionModel);
}
if(q.tableColumnModel){this.setNewTableColumnModel(q.tableColumnModel);
}
if(q.tablePane){this.setNewTablePane(q.tablePane);
}
if(q.tablePaneHeader){this.setNewTablePaneHeader(q.tablePaneHeader);
}
if(q.tablePaneScroller){this.setNewTablePaneScroller(q.tablePaneScroller);
}
if(q.tablePaneModel){this.setNewTablePaneModel(q.tablePaneModel);
}
if(q.columnMenu){this.setNewColumnMenu(q.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__mr=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__mr,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__ms=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(p||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(bS,this._onKeyPress);
this.addListener(bs,this._onFocusChanged);
this.addListener(cu,this._onFocusChanged);
var r=new qx.ui.core.Widget().set({height:0});
this._add(r);
r.addListener(ca,this._onResize,this);
this.__mt=null;
this.__mu=null;
if(qx.core.Variant.isSet(cB,cx)){qx.locale.Manager.getInstance().addListener(bi,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":bm,"columnVisibilityMenuCreateEnd":bm,"tableWidthChanged":ck,"verticalScrollBarChanged":bm,"cellClick":bk,"cellDblclick":bk,"cellContextmenu":bk,"dataEdited":bm},statics:{__mv:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bU},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:bH,apply:cp,event:bT},tableModel:{check:cr,apply:cg,event:ce},rowHeight:{check:cl,init:20,apply:cj,event:cm},forceLineHeight:{check:bo,init:true},headerCellHeight:{check:co,init:16,apply:ci,event:br,nullable:true},statusBarVisible:{check:bo,init:true,apply:cw},additionalStatusBarText:{nullable:true,init:null,apply:bO},columnVisibilityButtonVisible:{check:bo,init:true,apply:bX},metaColumnCounts:{check:bL,apply:bu},focusCellOnMouseMove:{check:bo,init:false,apply:bR},rowFocusChangeModifiesSelection:{check:bo,init:true},showCellFocusIndicator:{check:bo,init:true,apply:cb},keepFirstVisibleRowComplete:{check:bo,init:true,apply:bV},alwaysUpdateCells:{check:bo,init:false},dataRowRenderer:{check:cn,init:null,nullable:true,event:bt},modalCellEditorPreOpenFunction:{check:bp,init:null,nullable:true},newColumnMenu:{check:bp,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:bp,init:function(ez){return new qx.ui.table.selection.Manager(ez);
}},newSelectionModel:{check:bp,init:function(h){return new qx.ui.table.selection.Model(h);
}},newTableColumnModel:{check:bp,init:function(dl){return new qx.ui.table.columnmodel.Basic(dl);
}},newTablePane:{check:bp,init:function(dE){return new qx.ui.table.pane.Pane(dE);
}},newTablePaneHeader:{check:bp,init:function(du){return new qx.ui.table.pane.Header(du);
}},newTablePaneScroller:{check:bp,init:function(dD){return new qx.ui.table.pane.Scroller(dD);
}},newTablePaneModel:{check:bp,init:function(db){return new qx.ui.table.pane.Model(db);
}}},members:{__mt:null,__mu:null,__mr:null,__ms:null,__mw:null,__mx:null,__my:null,__mz:null,__mA:null,__mB:null,_createChildControlImpl:function(z){var A;

switch(z){case bl:A=new qx.ui.basic.Label();
A.set({allowGrowX:true});
this._add(A);
break;
case bn:A=this.getNewColumnMenu()();
A.set({focusable:false});
var B=A.factory(bM,{table:this});
B.addListener(bB,this._initColumnMenu,this);
break;
}return A||arguments.callee.base.call(this,z);
},_applySelectionModel:function(de,df){this.__ms.setSelectionModel(de);

if(df!=null){df.removeListener(bh,this._onSelectionChanged,this);
}de.addListener(bh,this._onSelectionChanged,this);
},_applyRowHeight:function(C,D){var E=this._getPaneScrollerArr();

for(var i=0;i<E.length;i++){E[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(dr,ds){var dt=this._getPaneScrollerArr();

for(var i=0;i<dt.length;i++){dt[i].getHeader().setHeight(dr);
}},getEmptyTableModel:function(){if(!this.__mB){this.__mB=new qx.ui.table.model.Simple();
this.__mB.setColumns([]);
this.__mB.setData([]);
}return this.__mB;
},_applyTableModel:function(f,g){this.getTableColumnModel().init(f.getColumnCount(),this);

if(g!=null){g.removeListener(cz,this._onTableModelMetaDataChanged,this);
g.removeListener(cy,this._onTableModelDataChanged,this);
}f.addListener(cz,this._onTableModelMetaDataChanged,this);
f.addListener(cy,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,f.getRowCount(),0,f.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__mA){var bb=this.__mA=this.getNewTableColumnModel()(this);
bb.addListener(bK,this._onColVisibilityChanged,this);
bb.addListener(cd,this._onColWidthChanged,this);
bb.addListener(cq,this._onColOrderChanged,this);
var ba=this.getTableModel();
bb.init(ba.getColumnCount(),this);
var X=this._getPaneScrollerArr();

for(var i=0;i<X.length;i++){var Y=X[i];
var bc=Y.getTablePaneModel();
bc.setTableColumnModel(bb);
}}return this.__mA;
},_applyStatusBarVisible:function(j,k){if(j){this._showChildControl(bl);
}else{this._excludeChildControl(bl);
}
if(j){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(m,n){this.__mw=m;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(dh,di){if(dh){this._showChildControl(bn);
}else{this._excludeChildControl(bn);
}},_applyMetaColumnCounts:function(eh,ei){var ep=eh;
var ej=this._getPaneScrollerArr();
var en={};

if(eh>ei){var er=qx.event.Registration.getManager(ej[0]);

for(var es in qx.ui.table.Table.__mv){en[es]={};
en[es].capture=er.getListeners(ej[0],es,true);
en[es].bubble=er.getListeners(ej[0],es,false);
}}this._cleanUpMetaColumns(ep.length);
var eo=0;

for(var i=0;i<ej.length;i++){var et=ej[i];
var eq=et.getTablePaneModel();
eq.setFirstColumnX(eo);
eq.setMaxColumnCount(ep[i]);
eo+=ep[i];
}if(ep.length>ej.length){var em=this.getTableColumnModel();

for(var i=ej.length;i<ep.length;i++){var eq=this.getNewTablePaneModel()(em);
eq.setFirstColumnX(eo);
eq.setMaxColumnCount(ep[i]);
eo+=ep[i];
var et=this.getNewTablePaneScroller()(this);
et.setTablePaneModel(eq);
et.addListener(bY,this._onScrollY,this);
for(es in qx.ui.table.Table.__mv){if(!en[es]){break;
}
if(en[es].capture&&en[es].capture.length>0){var ek=en[es].capture;

for(var i=0;i<ek.length;i++){var el=ek[i].context;

if(!el){el=this;
}else if(el==ej[0]){el=et;
}et.addListener(es,ek[i].handler,el,true);
}}
if(en[es].bubble&&en[es].bubble.length>0){var ev=en[es].bubble;

for(var i=0;i<ev.length;i++){var el=ev[i].context;

if(!el){el=this;
}else if(el==ej[0]){el=et;
}et.addListener(es,ev[i].handler,el,false);
}}}var eu=(i==ep.length-1)?1:0;
this.__mr.add(et,{flex:eu});
ej=this._getPaneScrollerArr();
}}for(var i=0;i<ej.length;i++){var et=ej[i];
var ew=(i==(ej.length-1));
et.getHeader().setHeight(this.getHeaderCellHeight());
et.setTopRightWidget(ew?this.getChildControl(bn):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(bn);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(dN,dO){var dP=this._getPaneScrollerArr();

for(var i=0;i<dP.length;i++){dP[i].setFocusCellOnMouseMove(dN);
}},_applyShowCellFocusIndicator:function(dW,dX){var dY=this._getPaneScrollerArr();

for(var i=0;i<dY.length;i++){dY[i].setShowCellFocusIndicator(dW);
}},_applyKeepFirstVisibleRowComplete:function(ea,eb){var ec=this._getPaneScrollerArr();

for(var i=0;i<ec.length;i++){ec[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__ms;
},_getPaneScrollerArr:function(){return this.__mr.getChildren();
},getPaneScroller:function(a){return this._getPaneScrollerArr()[a];
},_cleanUpMetaColumns:function(ex){var ey=this._getPaneScrollerArr();

if(ey!=null){for(var i=ey.length-1;i>=ex;i--){ey[i].destroy();
}}},_onChangeLocale:function(cK){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(cU){var cV=this._getPaneScrollerArr();

for(var i=0;i<cV.length;i++){cV[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dQ){var dR=this._getPaneScrollerArr();

for(var i=0;i<dR.length;i++){dR[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dF){var dG=dF.getData();
this._updateTableData(dG.firstRow,dG.lastRow,dG.firstColumn,dG.lastColumn,dG.removeStart,dG.removeCount);
},_updateTableData:function(F,G,H,I,J,K){var L=this._getPaneScrollerArr();
if(K){this.getSelectionModel().removeSelectionInterval(J,J+K);
}
for(var i=0;i<L.length;i++){L[i].onTableModelDataChanged(F,G,H,I);
}var M=this.getTableModel().getRowCount();

if(M!=this.__mx){this.__mx=M;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(N){if(!this.__my){this.__my=true;
var O=this._getPaneScrollerArr();

for(var i=0;i<O.length;i++){O[i].setScrollY(N.getData());
}this.__my=false;
}},_onKeyPress:function(cL){if(!this.getEnabled()){return;
}var cS=this.__mu;
var cP=true;
var cT=cL.getKeyIdentifier();

if(this.isEditing()){if(cL.getModifiers()==0){switch(cT){case cA:this.stopEditing();
var cS=this.__mu;
this.moveFocusedCell(0,1);

if(this.__mu!=cS){cP=this.startEditing();
}break;
case bE:this.cancelEditing();
this.focus();
break;
default:cP=false;
break;
}}return;
}else{if(cL.isCtrlPressed()){cP=true;

switch(cT){case bF:var cQ=this.getTableModel().getRowCount();

if(cQ>0){this.getSelectionModel().setSelectionInterval(0,cQ-1);
}break;
default:cP=false;
break;
}}else{switch(cT){case ch:this.__ms.handleSelectKeyDown(this.__mu,cL);
break;
case bA:case cA:cP=this.startEditing();
break;
case bd:this.setFocusedCell(this.__mt,0,true);
break;
case bz:var cQ=this.getTableModel().getRowCount();
this.setFocusedCell(this.__mt,cQ-1,true);
break;
case bP:this.moveFocusedCell(-1,0);
break;
case bJ:this.moveFocusedCell(1,0);
break;
case be:this.moveFocusedCell(0,-1);
break;
case bW:this.moveFocusedCell(0,1);
break;
case bj:case bD:var cO=this.getPaneScroller(0);
var cR=cO.getTablePane();
var cQ=cR.getVisibleRowCount()-1;
var cN=this.getRowHeight();
var cM=(cT==bj)?-1:1;
cO.setScrollY(cO.getScrollY()+cM*cQ*cN);
this.moveFocusedCell(0,cM*cQ);
break;
default:cP=false;
}}}
if(cS!=this.__mu&&this.getRowFocusChangeModifiesSelection()){this.__ms.handleMoveKeyDown(this.__mu,cL);
}
if(cP){cL.preventDefault();
cL.stopPropagation();
}},_onFocusChanged:function(dj){var dk=this._getPaneScrollerArr();

for(var i=0;i<dk.length;i++){dk[i].onFocusChanged();
}},_onColVisibilityChanged:function(v){var w=this._getPaneScrollerArr();

for(var i=0;i<w.length;i++){w[i].onColVisibilityChanged();
}var y=v.getData();

if(this.__mz!=null&&y.col!=null&&y.visible!=null){this.__mz[y.col].setVisible(y.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dm){var dn=this._getPaneScrollerArr();

for(var i=0;i<dn.length;i++){var dp=dm.getData();
dn[i].setColumnWidth(dp.col,dp.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(eA){var eB=this._getPaneScrollerArr();

for(var i=0;i<eB.length;i++){eB[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(d){var e=this._getMetaColumnAtPageX(d);
return (e!=-1)?this.getPaneScroller(e):null;
},setFocusedCell:function(cW,cX,cY){if(!this.isEditing()&&(cW!=this.__mt||cX!=this.__mu)){if(cW===null){cW=0;
}this.__mt=cW;
this.__mu=cX;
var da=this._getPaneScrollerArr();

for(var i=0;i<da.length;i++){da[i].setFocusedCell(cW,cX);
}
if(cW!==null&&cY){this.scrollCellVisible(cW,cX);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bw);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__mt;
},getFocusedRow:function(){return this.__mu;
},highlightFocusedRow:function(o){this.getDataRowRenderer().setHighlightFocusRow(o);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var dc=this._getPaneScrollerArr();

for(var i=0;i<dc.length;i++){dc[i].onFocusChanged();
}},moveFocusedCell:function(eK,eL){var eP=this.__mt;
var eQ=this.__mu;

if(eP===null||eQ===null){return;
}
if(eK!=0){var eO=this.getTableColumnModel();
var x=eO.getVisibleX(eP);
var eN=eO.getVisibleColumnCount();
x=qx.lang.Number.limit(x+eK,0,eN-1);
eP=eO.getVisibleColumnAtX(x);
}
if(eL!=0){var eM=this.getTableModel();
eQ=qx.lang.Number.limit(eQ+eL,0,eM.getRowCount()-1);
}this.setFocusedCell(eP,eQ,true);
},scrollCellVisible:function(dS,dT){var dU=this.getTableColumnModel();
var x=dU.getVisibleX(dS);
var dV=this._getMetaColumnAtColumnX(x);

if(dV!=-1){this.getPaneScroller(dV).scrollCellVisible(dS,dT);
}},isEditing:function(){if(this.__mt!=null){var x=this.getTableColumnModel().getVisibleX(this.__mt);
var eR=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(eR).isEditing();
}return false;
},startEditing:function(){if(this.__mt!=null){var x=this.getTableColumnModel().getVisibleX(this.__mt);
var cH=this._getMetaColumnAtColumnX(x);
var cG=this.getPaneScroller(cH).startEditing();
return cG;
}return false;
},stopEditing:function(){if(this.__mt!=null){var x=this.getTableColumnModel().getVisibleX(this.__mt);
var dg=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(dg).stopEditing();
}},cancelEditing:function(){if(this.__mt!=null){var x=this.getTableColumnModel().getVisibleX(this.__mt);
var dd=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(dd).cancelEditing();
}},updateContent:function(){var eJ=this._getPaneScrollerArr();

for(var i=0;i<eJ.length;i++){eJ[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(s){var t=this._getPaneScrollerArr();

for(var i=0;i<t.length;i++){var u=t[i].getContainerLocation();

if(s>=u.left&&s<=u.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(ed){var ef=this.getMetaColumnCounts();
var eg=0;

for(var i=0;i<ef.length;i++){var ee=ef[i];
eg+=ee;

if(ee==-1||ed<eg){return i;
}}return -1;
},_updateStatusBar:function(){var dJ=this.getTableModel();

if(this.getStatusBarVisible()){var dK=this.getSelectionModel().getSelectedCount();
var dM=dJ.getRowCount();
var dL;

if(dM>=0){if(dK==0){dL=this.trn(bC,bf,dM,dM);
}else{dL=this.trn(bv,bG,dM,dK,dM);
}}
if(this.__mw){if(dL){dL+=this.__mw;
}else{dL=this.__mw;
}}
if(dL){this.getChildControl(bl).setValue(dL);
}}},_updateScrollerWidths:function(){var cC=this._getPaneScrollerArr();

for(var i=0;i<cC.length;i++){var cE=(i==(cC.length-1));
var cF=cC[i].getTablePaneModel().getTotalWidth();
cC[i].setPaneWidth(cF);
var cD=cE?1:0;
cC[i].setLayoutProperties({flex:cD});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var dy=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var dB=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var dv=this._getPaneScrollerArr();
var dx=false;
var dA=false;

for(var i=0;i<dv.length;i++){var dC=(i==(dv.length-1));
var dw=dv[i].getNeededScrollBars(dx,!dC);

if(dw&dy){dx=true;
}
if(dC&&(dw&dB)){dA=true;
}}for(var i=0;i<dv.length;i++){var dC=(i==(dv.length-1));
var dz;
dv[i].setHorizontalScrollBarVisible(dx);
if(dC){dz=dv[i].getVerticalScrollBarVisible();
}dv[i].setVerticalScrollBarVisible(dC&&dA);
if(dC&&dA!=dz){this.fireDataEvent(bx,dA);
}}},_initColumnMenu:function(){var eE=this.getTableModel();
var eF=this.getTableColumnModel();
var eG=this.getChildControl(bn);
eG.empty();
var eD=eG.getMenu();
var eH={table:this,menu:eD,columnButton:eG};
this.fireDataEvent(cv,eH);
this.__mz={};

for(var eI=0,l=eE.getColumnCount();eI<l;eI++){var eC=eG.factory(cf,{text:eE.getColumnName(eI),column:eI,bVisible:eF.isColumnVisible(eI)});
qx.core.Assert.assertInterface(eC,qx.ui.table.IColumnMenuItem);
eC.addListener(bN,this._createColumnVisibilityCheckBoxHandler(eI),this);
this.__mz[eI]=eC;
}var eH={table:this,menu:eD,columnButton:eG};
this.fireDataEvent(cs,eH);
},_createColumnVisibilityCheckBoxHandler:function(dq){return function(b){var c=this.getTableColumnModel();
c.setColumnVisible(dq,b.getData());
};
},setColumnWidth:function(dH,dI){this.getTableColumnModel().setColumnWidth(dH,dI);
},_onResize:function(){this.fireEvent(by);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(P,Q,self,R){if(arguments.callee.self.__mv[P]){for(var i=0,S=this._getPaneScrollerArr();i<S.length;i++){S[i].addListener.apply(S[i],arguments);
}}else{return arguments.callee.base.call(this,P,Q,self,R);
}},removeListener:function(T,U,self,V){if(arguments.callee.self.__mv[T]){for(var i=0,W=this._getPaneScrollerArr();i<W.length;i++){W[i].removeListener.apply(W[i],arguments);
}}else{arguments.callee.base.call(this,T,U,self,V);
}},destroy:function(){this.getChildControl(bn).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(cB,cx)){qx.locale.Manager.getInstance().removeListener(bi,this._onChangeLocale,this);
}var cJ=this.getSelectionModel();

if(cJ){cJ.dispose();
}var cI=this.getDataRowRenderer();

if(cI){cI.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(cc,bI,bg,bg,bQ);
this._disposeMap(bq);
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(e,f){},getRowHeightStyle:function(c){},createRowStyle:function(b){},getRowClass:function(d){}}});
})();
(function(){var A="",z="table-row-background-even",y="table-row-background-selected",x="table-row",w="background-color:",v="table-row-background-focused",u=';border-bottom: 1px solid ',t=';color:',s="table-row-selected",r="table-row-background-odd",k="default",q="table-row-background-focused-selected",n="qx.ui.table.rowrenderer.Default",j="table-row-line",i="'",m="height:",l=";",o="px;",h="1px solid ",p="Boolean";
qx.Class.define(n,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__mC=A;
this.__mC={};
this.__mD={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(k));
var g=qx.theme.manager.Color.getInstance();
this.__mD.bgcolFocusedSelected=g.resolve(q);
this.__mD.bgcolFocused=g.resolve(v);
this.__mD.bgcolSelected=g.resolve(y);
this.__mD.bgcolEven=g.resolve(z);
this.__mD.bgcolOdd=g.resolve(r);
this.__mD.colSelected=g.resolve(s);
this.__mD.colNormal=g.resolve(x);
this.__mD.horLine=g.resolve(j);
},properties:{highlightFocusRow:{check:p,init:true}},members:{__mD:null,__mE:null,__mC:null,_insetY:1,_renderFont:function(B){if(B){this.__mE=B.getStyles();
this.__mC=qx.bom.element.Style.compile(this.__mE);
this.__mC=this.__mC.replace(/"/g,i);
}else{this.__mC=A;
this.__mE=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(b,c){var e=this.__mE;
var d=c.style;
qx.bom.element.Style.setStyles(c,e);

if(b.focusedRow&&this.getHighlightFocusRow()){d.backgroundColor=b.selected?this.__mD.bgcolFocusedSelected:this.__mD.bgcolFocused;
}else{if(b.selected){d.backgroundColor=this.__mD.bgcolSelected;
}else{d.backgroundColor=(b.row%2==0)?this.__mD.bgcolEven:this.__mD.bgcolOdd;
}}d.color=b.selected?this.__mD.colSelected:this.__mD.colNormal;
d.borderBottom=h+this.__mD.horLine;
},getRowHeightStyle:function(a){if(qx.bom.client.Feature.CONTENT_BOX){a-=this._insetY;
}return m+a+o;
},createRowStyle:function(C){var D=[];
D.push(l);
D.push(this.__mC);
D.push(w);

if(C.focusedRow&&this.getHighlightFocusRow()){D.push(C.selected?this.__mD.bgcolFocusedSelected:this.__mD.bgcolFocused);
}else{if(C.selected){D.push(this.__mD.bgcolSelected);
}else{D.push((C.row%2==0)?this.__mD.bgcolEven:this.__mD.bgcolOdd);
}}D.push(t);
D.push(C.selected?this.__mD.colSelected:this.__mD.colNormal);
D.push(u,this.__mD.horLine);
return D.join(A);
},getRowClass:function(f){return A;
}},destruct:function(){this.__mD=this.__mE=this.__mC=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__mF:null,factory:function(j,k){switch(j){case a:var m=new qx.ui.menu.Menu();
this.setMenu(m);
return m;
case f:var o=new qx.ui.table.columnmenu.MenuItem(k.text);
o.setVisible(k.bVisible);
this.getMenu().add(o);
return o;
case c:var n=new qx.ui.menu.Button(k.text);
n.set({appearance:e});
return n;
case d:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+j);
}},empty:function(){var g=this.getMenu();
var h=g.getChildren();

for(var i=0,l=h.length;i<l;i++){h[0].destroy();
}}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var h="checked",g="menu-checkbox",f="Boolean",d="_applyValue",c="changeValue",b="qx.ui.menu.CheckBox",a="execute";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(i,j){arguments.callee.base.call(this);
if(i!=null){if(i.translate){this.setLabel(i.translate());
}else{this.setLabel(i);
}}
if(j!=null){this.setMenu(j);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:f,init:false,apply:d,event:c,nullable:true}},members:{_applyValue:function(k,l){k?this.addState(h):this.removeState(h);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
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
},members:{__mG:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var h="qx.ui.table.selection.Model",g="qx.ui.table.selection.Manager";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:h}},members:{__mH:null,handleMouseDown:function(i,j){if(j.isLeftPressed()){var k=this.getSelectionModel();

if(!k.isSelectedIndex(i)){this._handleSelectEvent(i,j);
this.__mH=true;
}else{this.__mH=false;
}}else if(j.isRightPressed()&&j.getModifiers()==0){var k=this.getSelectionModel();

if(!k.isSelectedIndex(i)){k.setSelectionInterval(i,i);
}}},handleMouseUp:function(q,r){if(r.isLeftPressed()&&!this.__mH){this._handleSelectEvent(q,r);
}},handleClick:function(e,f){},handleSelectKeyDown:function(s,t){this._handleSelectEvent(s,t);
},handleMoveKeyDown:function(a,b){var d=this.getSelectionModel();

switch(b.getModifiers()){case 0:d.setSelectionInterval(a,a);
break;
case qx.event.type.Dom.SHIFT_MASK:var c=d.getAnchorSelectionIndex();

if(c==-1){d.setSelectionInterval(a,a);
}else{d.setSelectionInterval(c,a);
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
(function(){var P="..",O="changeSelection",N="Use 'resetSelection' instead",M=" [",L="]",K="qx.event.type.Event",J="Ranges:",I="qx.ui.table.selection.Model",H="_applySelectionMode",G="Use '_resetSelection' instead.";
qx.Class.define(I,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mI=[];
this.__mJ=-1;
this.__mK=-1;
this.hasBatchModeRefCount=0;
this.__mL=false;
},events:{"changeSelection":K},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:H}},members:{__mL:null,__mJ:null,__mK:null,__mI:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__mL){this.__mL=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__mJ;
},_setAnchorSelectionIndex:function(l){this.__mJ=l;
},getLeadSelectionIndex:function(){return this.__mK;
},_setLeadSelectionIndex:function(a){this.__mK=a;
},_getSelectedRangeArr:function(){return this.__mI;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,N);
this.resetSelection();
},isSelectionEmpty:function(){return this.__mI.length==0;
},getSelectedCount:function(){var k=0;

for(var i=0;i<this.__mI.length;i++){var h=this.__mI[i];
k+=h.maxIndex-h.minIndex+1;
}return k;
},isSelectedIndex:function(T){for(var i=0;i<this.__mI.length;i++){var U=this.__mI[i];

if(T>=U.minIndex&&T<=U.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var q=[];

for(var i=0;i<this.__mI.length;i++){q.push({minIndex:this.__mI[i].minIndex,maxIndex:this.__mI[i].maxIndex});
}return q;
},iterateSelection:function(m,n){for(var i=0;i<this.__mI.length;i++){for(var j=this.__mI[i].minIndex;j<=this.__mI[i].maxIndex;j++){m.call(n,j);
}}},setSelectionInterval:function(b,c){var d=arguments.callee.self;

switch(this.getSelectionMode()){case d.NO_SELECTION:return;
case d.SINGLE_SELECTION:if(this.isSelectedIndex(c)){return;
}b=c;
break;
case d.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=b;i<=c;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(b,c);
this._fireChangeSelection();
},addSelectionInterval:function(Q,R){var S=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case S.NO_SELECTION:return;
case S.MULTIPLE_INTERVAL_SELECTION:case S.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(Q,R);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(Q,R);
break;
}},removeSelectionInterval:function(r,s){this.__mJ=r;
this.__mK=s;
var t=Math.min(r,s);
var v=Math.max(r,s);
for(var i=0;i<this.__mI.length;i++){var x=this.__mI[i];

if(x.minIndex>v){break;
}else if(x.maxIndex>=t){var y=(x.minIndex>=t)&&(x.minIndex<=v);
var w=(x.maxIndex>=t)&&(x.maxIndex<=v);

if(y&&w){this.__mI.splice(i,1);
i--;
}else if(y){x.minIndex=v+1;
}else if(w){x.maxIndex=t-1;
}else{var u={minIndex:v+1,maxIndex:x.maxIndex};
this.__mI.splice(i+1,0,u);
x.maxIndex=t-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__mI=[];
this.__mJ=-1;
this.__mK=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
this._resetSelection();
},_addSelectionInterval:function(z,A){this.__mJ=z;
this.__mK=A;
var B=Math.min(z,A);
var D=Math.max(z,A);
var C=0;

for(;C<this.__mI.length;C++){var E=this.__mI[C];

if(E.minIndex>B){break;
}}this.__mI.splice(C,0,{minIndex:B,maxIndex:D});
var F=this.__mI[0];

for(var i=1;i<this.__mI.length;i++){var E=this.__mI[i];

if(F.maxIndex+1>=E.minIndex){F.maxIndex=Math.max(F.maxIndex,E.maxIndex);
this.__mI.splice(i,1);
i--;
}else{F=E;
}}},_dumpRanges:function(){var f=J;

for(var i=0;i<this.__mI.length;i++){var g=this.__mI[i];
f+=M+g.minIndex+P+g.maxIndex+L;
}this.debug(f);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__mL=true;
}else{this.fireEvent(O);
}}},destruct:function(){this.__mI=null;
}});
})();
(function(){var c="qx.ui.table.IHeaderRenderer";
qx.Interface.define(c,{members:{createHeaderCell:function(d){return true;
},updateHeaderCell:function(a,b){return true;
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
qx.util.DisposeUtil.disposeTriggeredBy(d,b);
}else{d.setLabel(this.getToolTip());
}}a.sorted?b.addState(c.STATE_SORTED):b.removeState(c.STATE_SORTED);
a.sortedAscending?b.addState(c.STATE_SORTED_ASCENDING):b.removeState(c.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var m="",l="px;",k=".qooxdoo-table-cell {",j="qooxdoo-table-cell",i='" ',h="nowrap",g="default",f="qx.client",e="}",d="width:",J=".qooxdoo-table-cell-right { text-align:right } ",I="0px 6px",H='<div class="',G="0px",F="height:",E="1px solid ",D=".qooxdoo-table-cell-bold { font-weight:bold } ",C="table-row-line",B='>',A="mshtml",t='</div>',u="ellipsis",r="content-box",s='left:',p="qx.ui.table.cellrenderer.Abstract",q='" style="',n="abstract",o="none",v="hidden",w="} ",y='px;',x=".qooxdoo-table-cell-italic { font-style:italic} ",z="absolute";
qx.Class.define(p,{type:n,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var a=qx.ui.table.cellrenderer.Abstract;

if(!a.__mM){var c=qx.theme.manager.Color.getInstance();
a.__mM=arguments.callee.self;
var b=k+
qx.bom.element.Style.compile({position:z,top:G,overflow:v,whiteSpace:h,borderRight:E+c.resolve(C),padding:I,cursor:g,textOverflow:u,userSelect:o})+w+J+x+D;

if(!qx.core.Variant.isSet(f,A)){b+=k+qx.bom.element.BoxSizing.compile(r)+e;
}a.__mM.stylesheet=qx.bom.Stylesheet.createElement(b);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(T){return j;
},_getCellStyle:function(K){return K.style||m;
},_getCellAttributes:function(U){return m;
},_getContentHtml:function(S){return S.value||m;
},_getCellSizeStyle:function(L,M,N,O){var P=m;

if(qx.bom.client.Feature.CONTENT_BOX){L-=N;
M-=O;
}P+=d+Math.max(L,0)+l;
P+=F+Math.max(M,0)+l;
return P;
},createDataCellHtml:function(Q,R){R.push(H,this._getCellClass(Q),q,s,Q.styleLeft,y,this._getCellSizeStyle(Q.styleWidth,Q.styleHeight,this._insetX,this._insetY),this._getCellStyle(Q),i,this._getCellAttributes(Q),B+this._getContentHtml(Q),t);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(p){if(this.getUseAutoAlign()){if(typeof p.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(m){var n=arguments.callee.base.call(this,m);

if(!n){return h;
}var o=this._getStyleFlags(m);

if(o&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){n+=c;
}
if(o&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){n+=d;
}
if(o&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){n+=b;
}return n;
},_getContentHtml:function(l){return qx.bom.String.escape(this._formatValue(l));
},_formatValue:function(i){var k=i.value;

if(k==null){return h;
}
if(typeof k==a){return k;
}else if(typeof k==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var j=qx.ui.table.cellrenderer.Default._numberFormat.format(k);
}else if(k instanceof Date){j=qx.util.format.DateFormat.getDateInstance().format(k);
}else{j=k;
}return j;
}}});
})();
(function(){var a="qx.ui.table.ICellEditorFactory";
qx.Interface.define(a,{members:{createCellEditor:function(b){return true;
},getCellEditorValue:function(c){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(g){var h=this._createEditor();
h.originalValue=g.value;

if(g.value===null||g.value===undefined){g.value=f;
}h.setValue(f+g.value);
h.addListener(b,function(){h.selectAllText();
});
return h;
},getCellEditorValue:function(i){var k=i.getValue();
var j=this.getValidationFunction();

if(j){k=j(k,i.originalValue);
}
if(typeof i.originalValue==c){k=parseFloat(k);
}return k;
}}});
})();
(function(){var b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{_createEditor:function(){var c=new qx.ui.form.TextField();
c.setAppearance(a);
return c;
}}});
})();
(function(){var K="qx.event.type.Data",J="visibilityChanged",I="orderChanged",H="visibilityChangedPre",G="__mS",F="widthChanged",E="qx.ui.table.columnmodel.Basic",D="__mT",C="__mU";
qx.Class.define(E,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mN=[];
this.__mO=[];
},events:{"widthChanged":K,"visibilityChangedPre":K,"visibilityChanged":K,"orderChanged":K},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__mP:null,__mQ:null,__mO:null,__mN:null,__mR:null,__mS:null,__mT:null,__mU:null,init:function(g){{};
this.__mR=[];
var k=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var l=this.__mS||(this.__mS=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var j=this.__mT||(this.__mT=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var h=this.__mU||(this.__mU=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__mN=[];
this.__mO=[];

for(var n=0;n<g;n++){this.__mR[n]={width:k,headerRenderer:l,dataRenderer:j,editorFactory:h};
this.__mN[n]=n;
this.__mO[n]=n;
}this.__mQ=null;

for(var n=0;n<g;n++){var m={col:n,visible:true};
this.fireDataEvent(H,m);
this.fireDataEvent(J,m);
}},getVisibleColumns:function(){return this.__mO!=null?this.__mO:[];
},setColumnWidth:function(bc,bd){{};
var bf=this.__mR[bc].width;

if(bf!=bd){this.__mR[bc].width=bd;
var be={col:bc,newWidth:bd,oldWidth:bf};
this.fireDataEvent(F,be);
}},getColumnWidth:function(L){{};
return this.__mR[L].width;
},setHeaderCellRenderer:function(Y,ba){{};
var bb=this.__mR[Y].headerRenderer;

if(bb!==this.__mS){bb.dispose();
}this.__mR[Y].headerRenderer=ba;
},getHeaderCellRenderer:function(b){{};
return this.__mR[b].headerRenderer;
},setDataCellRenderer:function(M,N){{};
var O=this.__mR[M].headerRenderer;

if(O!==this.__mT){O.dispose();
}this.__mR[M].dataRenderer=N;
},getDataCellRenderer:function(A){{};
return this.__mR[A].dataRenderer;
},setCellEditorFactory:function(c,d){{};
var e=this.__mR[c].headerRenderer;

if(e!==this.__mU){e.dispose();
}this.__mR[c].editorFactory=d;
},getCellEditorFactory:function(B){{};
return this.__mR[B].editorFactory;
},_getColToXPosMap:function(){if(this.__mQ==null){this.__mQ={};

for(var bi=0;bi<this.__mN.length;bi++){var bh=this.__mN[bi];
this.__mQ[bh]={overX:bi};
}
for(var bg=0;bg<this.__mO.length;bg++){var bh=this.__mO[bg];
this.__mQ[bh].visX=bg;
}}return this.__mQ;
},getVisibleColumnCount:function(){return this.__mO!=null?this.__mO.length:0;
},getVisibleColumnAtX:function(a){{};
return this.__mO[a];
},getVisibleX:function(t){{};
return this._getColToXPosMap()[t].visX;
},getOverallColumnCount:function(){return this.__mN.length;
},getOverallColumnAtX:function(f){{};
return this.__mN[f];
},getOverallX:function(bj){{};
return this._getColToXPosMap()[bj].overX;
},isColumnVisible:function(u){{};
return (this._getColToXPosMap()[u].visX!=null);
},setColumnVisible:function(P,Q){{};

if(Q!=this.isColumnVisible(P)){if(Q){var W=this._getColToXPosMap();
var T=W[P].overX;

if(T==null){throw new Error("Showing column failed: "+P+". The column is not added to this TablePaneModel.");
}var U;

for(var x=T+1;x<this.__mN.length;x++){var V=this.__mN[x];
var R=W[V].visX;

if(R!=null){U=R;
break;
}}if(U==null){U=this.__mO.length;
}this.__mO.splice(U,0,P);
}else{var S=this.getVisibleX(P);
this.__mO.splice(S,1);
}this.__mQ=null;
if(!this.__mP){var X={col:P,visible:Q};
this.fireDataEvent(H,X);
this.fireDataEvent(J,X);
}}},moveColumn:function(o,p){{};
this.__mP=true;
var s=this.__mN[o];
var q=this.isColumnVisible(s);

if(q){this.setColumnVisible(s,false);
}this.__mN.splice(o,1);
this.__mN.splice(p,0,s);
this.__mQ=null;

if(q){this.setColumnVisible(s,true);
}this.__mP=false;
var r={col:s,fromOverXPos:o,toOverXPos:p};
this.fireDataEvent(I,r);
},setColumnsOrder:function(v){{};

if(v.length==this.__mN.length){this.__mP=true;
var z=new Array(v.length);

for(var w=0;w<this.__mN.length;w++){var y=this.isColumnVisible(w);
z[w]=y;

if(y){this.setColumnVisible(w,false);
}}this.__mN=qx.lang.Array.clone(v);
this.__mQ=null;
for(var w=0;w<this.__mN.length;w++){if(z[w]){this.setColumnVisible(w,true);
}}this.__mP=false;
this.fireDataEvent(I);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__mN.length+", got "+v.length);
}}},destruct:function(){for(var i=0;i<this.__mR.length;i++){this.__mR[i].headerRenderer.dispose();
this.__mR[i].dataRenderer.dispose();
this.__mR[i].editorFactory.dispose();
}this.__mN=this.__mO=this.__mR=this.__mQ=null;
this._disposeObjects(G,D,C);
}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var l=new qx.ui.layout.Grid();
l.setRowFlex(0,1);
l.setColumnFlex(1,1);
l.setColumnFlex(2,1);
this.setLayout(l);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(o,p){if(o){this._showChildControl(h).setValue(o);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(q,r){if(q){this._showChildControl(f).setSource(q);
}else{this._excludeChildControl(f);
}},_applyIcon:function(j,k){if(j){this._showChildControl(i).setSource(j);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(m){var n;

switch(m){case h:n=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(n,{row:0,column:1});
break;
case f:n=new qx.ui.basic.Image(this.getSortIcon());
n.setAnonymous(true);
this._add(n,{row:0,column:2});
break;
case i:n=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(n,{row:0,column:0});
break;
}return n||arguments.callee.base.call(this,m);
}}});
})();
(function(){var f="\n",e="",d=" &nbsp;",c="<br>",b=" ",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(j){return qx.util.StringEscape.escape(j,qx.bom.String.FROM_CHARCODE);
},unescape:function(l){return qx.util.StringEscape.unescape(l,qx.bom.String.TO_CHARCODE);
},fromText:function(i){return qx.bom.String.escape(i).replace(/(  |\n)/g,function(g){var h={"  ":d,"\n":c};
return h[g]||g;
});
},toText:function(k){return qx.bom.String.unescape(k.replace(/\s+|<([^>])+>/gi,function(m){if(/\s+/.test(m)){return b;
}else if(/^<BR|^<br/gi.test(m)){return f;
}else{return e;
}}));
}},defer:function(n,o,p){n.FROM_CHARCODE=qx.lang.Object.invert(n.TO_CHARCODE);
}});
})();
(function(){var k=";",j="&",h='X',g="",f='#',e="&#",d="qx.util.StringEscape";
qx.Class.define(d,{statics:{escape:function(o,p){var r,t=g;

for(var i=0,l=o.length;i<l;i++){var s=o.charAt(i);
var q=s.charCodeAt(0);

if(p[q]){r=j+p[q]+k;
}else{if(q>0x7F){r=e+q+k;
}else{r=s;
}}t+=r;
}return t;
},unescape:function(m,n){return m.replace(/&[#\w]+;/gi,function(a){var b=a;
var a=a.substring(1,a.length-1);
var c=n[a];

if(c){b=String.fromCharCode(c);
}else{if(a.charAt(0)==f){if(a.charAt(1).toUpperCase()==h){c=a.substring(2);
if(c.match(/^[0-9A-Fa-f]+$/gi)){b=String.fromCharCode(parseInt(c,16));
}}else{c=a.substring(1);
if(c.match(/^\d+$/gi)){b=String.fromCharCode(parseInt(c,10));
}}}}return b;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(Q){arguments.callee.base.call(this);
this.__mV=Q;
},statics:{getIntegerInstance:function(){var G=qx.util.format.NumberFormat;

if(G._integerInstance==null){G._integerInstance=new G();
G._integerInstance.setMaximumFractionDigits(0);
}return G._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__mV:null,format:function(u){switch(u){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var y=(u<0);

if(y){u=-u;
}
if(this.getMaximumFractionDigits()!=null){var F=Math.pow(10,this.getMaximumFractionDigits());
u=Math.round(u*F)/F;
}var E=String(Math.floor(u)).length;
var v=t+u;
var B=v.substring(0,E);

while(B.length<this.getMinimumIntegerDigits()){B=q+B;
}
if(this.getMaximumIntegerDigits()!=null&&B.length>this.getMaximumIntegerDigits()){B=B.substring(B.length-this.getMaximumIntegerDigits());
}var A=v.substring(E+1);

while(A.length<this.getMinimumFractionDigits()){A+=q;
}
if(this.getMaximumFractionDigits()!=null&&A.length>this.getMaximumFractionDigits()){A=A.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var x=B;
B=t;
var D;

for(D=x.length;D>3;D-=3){B=t+qx.locale.Number.getGroupSeparator(this.__mV)+x.substring(D-3,D)+B;
}B=x.substring(0,D)+B;
}var z=this.getPrefix()?this.getPrefix():t;
var w=this.getPostfix()?this.getPostfix():t;
var C=z+(y?r:t)+B;

if(A.length>0){C+=t+qx.locale.Number.getDecimalSeparator(this.__mV)+A;
}C+=w;
return C;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__mV)+t);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__mV)+t);
var I=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+M+g+n+K+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var L=I.exec(H);

if(L==null){throw new Error("Number string '"+H+"' does not match the number format");
}var N=(L[1]==r);
var P=L[2];
var O=L[3];
P=P.replace(new RegExp(M,m),t);
var J=(N?r:t)+P;

if(O!=null&&O.length!=0){O=O.replace(new RegExp(K),t);
J+=h+O;
}return parseFloat(J);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(g){return qx.locale.Manager.getInstance().localize(d,[],g);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(e){return qx.locale.Manager.getInstance().localize(c,[],e);
}}});
})();
(function(){var dG="(\\d\\d?)",dF="format",dE="",dD="abbreviated",dC="wide",dB="(",dA=")",dz="|",dy="stand-alone",dx="wildcard",dl="default",dk="literal",dj="'",di="hour",dh="(\\d\\d?\\d?)",dg="ms",df="narrow",de="-",dd="quoted_literal",dc='a',dN="HH:mm:ss",dO="+",dL="HHmmss",dM="long",dJ='z',dK="0",dH="sec",dI="day",dP='Z',dQ=" ",dq="min",dp="mm",ds="(\\d+)",dr="h",du="KK",dt='L',dw="Z",dv="(\\d\\d+)",dn="EEEE",dm="^",cd=":",ce='y',cf="K",cg="a",ch="([\\+\\-]\\d\\d:?\\d\\d)",ci="GMT",cj="dd",ck="qx.util.format.DateFormat",cl="yyy",cm="H",dU="YYYY",dT="y",dS="HH",dR="EE",dY='h',dX="S",dW='s',dV='A',eb="yyyyyy",ea="kk",cL="ss",cM='H',cJ='S',cK="MMMM",cP='c',cQ="d",cN="([a-zA-Z]+)",cO='k',cH="m",cI='Y',cu='D',ct="yyyyy",cw='K',cv="hh",cq="SSS",cp="MM",cs="yy",cr="(\\d\\d\\d\\d\\d\\d+)",co="yyyy-MM-dd HH:mm:ss",cn="(\\d\\d\\d\\d\\d+)",cV="short",cW='d',cX="unkown",cY='m',cR="(\\d\\d\\d\\d)",cS="(\\d\\d\\d+)",cT="k",cU='M',da="(\\d\\d\\d\\d+)",db="SS",cE="MMM",cD="s",cC="M",cB='w',cA="EEE",cz="$",cy="?",cx='E',cG="z",cF="yyyy";
qx.Class.define(ck,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(ca,cb){arguments.callee.base.call(this);

if(!cb){this.__mW=qx.locale.Manager.getInstance().getLocale();
}else{this.__mW=cb;
}
if(ca!=null){this.__mX=ca.toString();
}else{this.__mX=qx.locale.Date.getDateFormat(dM,this.__mW)+dQ+qx.locale.Date.getDateTimeFormat(dL,dN,this.__mW);
}},statics:{getDateTimeInstance:function(){var b=qx.util.format.DateFormat;
var a=qx.locale.Date.getDateFormat(dM)+dQ+qx.locale.Date.getDateTimeFormat(dL,dN);

if(b._dateInstance==null||b._dateInstance.__mX!=a){b._dateTimeInstance=new b();
}return b._dateTimeInstance;
},getDateInstance:function(){var N=qx.util.format.DateFormat;
var M=qx.locale.Date.getDateFormat(cV)+dE;

if(N._dateInstance==null||N._dateInstance.__mX!=M){N._dateInstance=new N(M);
}return N._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:co,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__mW:null,__mX:null,__mY:null,__na:null,__nb:null,__nc:function(e,f){var g=dE+e;

while(g.length<f){g=dK+g;
}return g;
},__nd:function(J){var K=new Date(J.getTime());
var L=K.getDate();

while(K.getMonth()!=0){K.setDate(-1);
L+=K.getDate()+1;
}return L;
},__ne:function(cc){return new Date(cc.getTime()+(3-((cc.getDay()+6)%7))*86400000);
},__nf:function(ba){var bc=this.__ne(ba);
var bd=bc.getFullYear();
var bb=this.__ne(new Date(bd,0,4));
return Math.floor(1.5+(bc.getTime()-bb.getTime())/86400000/7);
},format:function(bz){if(bz==null){return null;
}var bF=qx.util.format.DateFormat;
var bG=this.__mW;
var bQ=bz.getFullYear();
var bK=bz.getMonth();
var bS=bz.getDate();
var bA=bz.getDay();
var bL=bz.getHours();
var bH=bz.getMinutes();
var bM=bz.getSeconds();
var bO=bz.getMilliseconds();
var bR=bz.getTimezoneOffset();
var bD=bR>0?1:-1;
var bB=Math.floor(Math.abs(bR)/60);
var bI=Math.abs(bR)%60;
this.__ng();
var bP=dE;

for(var i=0;i<this.__nb.length;i++){var bN=this.__nb[i];

if(bN.type==dk){bP+=bN.text;
}else{var bE=bN.character;
var bJ=bN.size;
var bC=cy;

switch(bE){case ce:case cI:if(bJ==2){bC=this.__nc(bQ%100,2);
}else{bC=bQ+dE;

if(bJ>bC.length){for(var i=bC.length;i<bJ;i++){bC=dK+bC;
}}}break;
case cu:bC=this.__nc(this.__nd(bz),bJ);
break;
case cW:bC=this.__nc(bS,bJ);
break;
case cB:bC=this.__nc(this.__nf(bz),bJ);
break;
case cx:if(bJ==2){bC=qx.locale.Date.getDayName(df,bA,bG,dF);
}else if(bJ==3){bC=qx.locale.Date.getDayName(dD,bA,bG,dF);
}else if(bJ==4){bC=qx.locale.Date.getDayName(dC,bA,bG,dF);
}break;
case cP:if(bJ==2){bC=qx.locale.Date.getDayName(df,bA,bG,dy);
}else if(bJ==3){bC=qx.locale.Date.getDayName(dD,bA,bG,dy);
}else if(bJ==4){bC=qx.locale.Date.getDayName(dC,bA,bG,dy);
}break;
case cU:if(bJ==1||bJ==2){bC=this.__nc(bK+1,bJ);
}else if(bJ==3){bC=qx.locale.Date.getMonthName(dD,bK,bG,dF);
}else if(bJ==4){bC=qx.locale.Date.getMonthName(dC,bK,bG,dF);
}break;
case dt:if(bJ==1||bJ==2){bC=this.__nc(bK+1,bJ);
}else if(bJ==3){bC=qx.locale.Date.getMonthName(dD,bK,bG,dy);
}else if(bJ==4){bC=qx.locale.Date.getMonthName(dC,bK,bG,dy);
}break;
case dc:bC=(bL<12)?qx.locale.Date.getAmMarker(bG):qx.locale.Date.getPmMarker(bG);
break;
case cM:bC=this.__nc(bL,bJ);
break;
case cO:bC=this.__nc((bL==0)?24:bL,bJ);
break;
case cw:bC=this.__nc(bL%12,bJ);
break;
case dY:bC=this.__nc(((bL%12)==0)?12:(bL%12),bJ);
break;
case cY:bC=this.__nc(bH,bJ);
break;
case dW:bC=this.__nc(bM,bJ);
break;
case cJ:bC=this.__nc(bO,bJ);
break;
case dJ:if(bJ==1){bC=ci+((bD>0)?de:dO)+this.__nc(Math.abs(bB))+cd+this.__nc(bI,2);
}else if(bJ==2){bC=bF.MEDIUM_TIMEZONE_NAMES[bB];
}else if(bJ==3){bC=bF.FULL_TIMEZONE_NAMES[bB];
}break;
case dP:bC=((bD>0)?de:dO)+this.__nc(Math.abs(bB),2)+this.__nc(bI,2);
break;
}bP+=bC;
}}return bP;
},parse:function(Q){this.__nh();
var W=this.__mY.regex.exec(Q);

if(W==null){throw new Error("Date string '"+Q+"' does not match the date format: "+this.__mX);
}var R={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var S=1;

for(var i=0;i<this.__mY.usedRules.length;i++){var U=this.__mY.usedRules[i];
var T=W[S];

if(U.field!=null){R[U.field]=parseInt(T,10);
}else{U.manipulator(R,T);
}S+=(U.groups==null)?1:U.groups;
}var V=new Date(R.year,R.month,R.day,(R.ispm)?(R.hour+12):R.hour,R.min,R.sec,R.ms);

if(R.month!=V.getMonth()||R.year!=V.getFullYear()){throw new Error("Error parsing date '"+Q+"': the value for day or month is too large");
}return V;
},__ng:function(){if(this.__nb!=null){return;
}this.__nb=[];
var G;
var E=0;
var I=dE;
var C=this.__mX;
var F=dl;
var i=0;

while(i<C.length){var H=C.charAt(i);

switch(F){case dd:if(H==dj){if(i+1>=C.length){i++;
break;
}var D=C.charAt(i+1);

if(D==dj){I+=H;
i++;
}else{i++;
F=cX;
}}else{I+=H;
i++;
}break;
case dx:if(H==G){E++;
i++;
}else{this.__nb.push({type:dx,character:G,size:E});
G=null;
E=0;
F=dl;
}break;
default:if((H>=dc&&H<=dJ)||(H>=dV&&H<=dP)){G=H;
F=dx;
}else if(H==dj){if(i+1>=C.length){I+=H;
i++;
break;
}var D=C.charAt(i+1);

if(D==dj){I+=H;
i++;
}i++;
F=dd;
}else{F=dl;
}
if(F!=dl){if(I.length>0){this.__nb.push({type:dk,text:I});
I=dE;
}}else{I+=H;
i++;
}break;
}}if(G!=null){this.__nb.push({type:dx,character:G,size:E});
}else if(I.length>0){this.__nb.push({type:dk,text:I});
}},__nh:function(){if(this.__mY!=null){return ;
}var l=this.__mX;
this.__ni();
this.__ng();
var r=[];
var n=dm;

for(var j=0;j<this.__nb.length;j++){var s=this.__nb[j];

if(s.type==dk){n+=qx.lang.String.escapeRegexpChars(s.text);
}else{var k=s.character;
var o=s.size;
var m;

for(var t=0;t<this.__na.length;t++){var p=this.__na[t];

if(k==p.pattern.charAt(0)&&o==p.pattern.length){m=p;
break;
}}if(m==null){var q=dE;

for(var i=0;i<o;i++){q+=k;
}throw new Error("Malformed date format: "+l+". Wildcard "+q+" is not supported");
}else{r.push(m);
n+=m.regex;
}}}n+=cz;
var h;

try{h=new RegExp(n);
}catch(ec){throw new Error("Malformed date format: "+l);
}this.__mY={regex:h,"usedRules":r,pattern:n};
},__ni:function(){var bl=qx.util.format.DateFormat;
var br=qx.lang.String;

if(this.__na!=null){return ;
}var bm=this.__na=[];
var by=function(bV,bW){bW=parseInt(bW,10);

if(bW<bl.ASSUME_YEAR_2000_THRESHOLD){bW+=2000;
}else if(bW<100){bW+=1900;
}bV.year=bW;
};
var bs=function(bX,bY){bX.month=parseInt(bY,10)-1;
};
var bp=function(O,P){O.ispm=(P==bl.PM_MARKER);
};
var bo=function(w,x){w.hour=parseInt(x,10)%24;
};
var bn=function(bT,bU){bT.hour=parseInt(bU,10)%12;
};
var bv=function(y,z){return;
};
var bt=qx.locale.Date.getMonthNames(dD,this.__mW,dF);

for(var i=0;i<bt.length;i++){bt[i]=br.escapeRegexpChars(bt[i].toString());
}var bu=function(X,Y){Y=br.escapeRegexpChars(Y);
X.month=bt.indexOf(Y);
};
var bi=qx.locale.Date.getMonthNames(dC,this.__mW,dF);

for(var i=0;i<bi.length;i++){bi[i]=br.escapeRegexpChars(bi[i].toString());
}var bh=function(A,B){B=br.escapeRegexpChars(B);
A.month=bi.indexOf(B);
};
var bk=qx.locale.Date.getDayNames(df,this.__mW,dF);

for(var i=0;i<bk.length;i++){bk[i]=br.escapeRegexpChars(bk[i].toString());
}var bg=function(u,v){v=br.escapeRegexpChars(v);
u.month=bk.indexOf(v);
};
var bw=qx.locale.Date.getDayNames(dD,this.__mW,dF);

for(var i=0;i<bw.length;i++){bw[i]=br.escapeRegexpChars(bw[i].toString());
}var bq=function(c,d){d=br.escapeRegexpChars(d);
c.month=bw.indexOf(d);
};
var bx=qx.locale.Date.getDayNames(dC,this.__mW,dF);

for(var i=0;i<bx.length;i++){bx[i]=br.escapeRegexpChars(bx[i].toString());
}var bj=function(be,bf){bf=br.escapeRegexpChars(bf);
be.month=bx.indexOf(bf);
};
bm.push({pattern:dU,regex:cR,manipulator:by});
bm.push({pattern:dT,regex:ds,manipulator:by});
bm.push({pattern:cs,regex:dv,manipulator:by});
bm.push({pattern:cl,regex:cS,manipulator:by});
bm.push({pattern:cF,regex:da,manipulator:by});
bm.push({pattern:ct,regex:cn,manipulator:by});
bm.push({pattern:eb,regex:cr,manipulator:by});
bm.push({pattern:cC,regex:dG,manipulator:bs});
bm.push({pattern:cp,regex:dG,manipulator:bs});
bm.push({pattern:cE,regex:dB+bt.join(dz)+dA,manipulator:bu});
bm.push({pattern:cK,regex:dB+bi.join(dz)+dA,manipulator:bh});
bm.push({pattern:cj,regex:dG,field:dI});
bm.push({pattern:cQ,regex:dG,field:dI});
bm.push({pattern:dR,regex:dB+bk.join(dz)+dA,manipulator:bg});
bm.push({pattern:cA,regex:dB+bw.join(dz)+dA,manipulator:bq});
bm.push({pattern:dn,regex:dB+bx.join(dz)+dA,manipulator:bj});
bm.push({pattern:cg,regex:dB+bl.AM_MARKER+dz+bl.PM_MARKER+dA,manipulator:bp});
bm.push({pattern:dS,regex:dG,field:di});
bm.push({pattern:cm,regex:dG,field:di});
bm.push({pattern:ea,regex:dG,manipulator:bo});
bm.push({pattern:cT,regex:dG,manipulator:bo});
bm.push({pattern:du,regex:dG,field:di});
bm.push({pattern:cf,regex:dG,field:di});
bm.push({pattern:cv,regex:dG,manipulator:bn});
bm.push({pattern:dr,regex:dG,manipulator:bn});
bm.push({pattern:dp,regex:dG,field:dq});
bm.push({pattern:cH,regex:dG,field:dq});
bm.push({pattern:cL,regex:dG,field:dH});
bm.push({pattern:cD,regex:dG,field:dH});
bm.push({pattern:cq,regex:dh,field:dg});
bm.push({pattern:db,regex:dh,field:dg});
bm.push({pattern:dX,regex:dh,field:dg});
bm.push({pattern:dw,regex:ch,manipulator:bv});
bm.push({pattern:cG,regex:cN,manipulator:bv});
}},destruct:function(){this.__nb=this.__mY=this.__na=null;
}});
})();
(function(){var w="_",v="format",u="thu",t="sat",s="cldr_day_",r="cldr_month_",q="wed",p="fri",o="tue",n="mon",N="sun",M="short",L="HH:mm",K="HHmmsszz",J="HHmm",I="HHmmss",H="cldr_date_format_",G="HH:mm:ss zz",F="full",E="cldr_pm",C="long",D="medium",A="cldr_am",B="qx.locale.Date",y="cldr_date_time_format_",z="cldr_time_format_",x="HH:mm:ss";
qx.Class.define(B,{statics:{__nj:qx.locale.Manager.getInstance(),getAmMarker:function(bi){return this.__nj.localize(A,[],bi);
},getPmMarker:function(S){return this.__nj.localize(E,[],S);
},getDayNames:function(length,Y,ba){var ba=ba?ba:v;
{};
var bc=[N,n,o,q,u,p,t];
var bd=[];

for(var i=0;i<bc.length;i++){var bb=s+ba+w+length+w+bc[i];
bd.push(this.__nj.localize(bb,[],Y));
}return bd;
},getDayName:function(length,bj,bk,bl){var bl=bl?bl:v;
{};
var bn=[N,n,o,q,u,p,t];
var bm=s+bl+w+length+w+bn[bj];
return this.__nj.localize(bm,[],bk);
},getMonthNames:function(length,be,bf){var bf=bf?bf:v;
{};
var bh=[];

for(var i=0;i<12;i++){var bg=r+bf+w+length+w+(i+1);
bh.push(this.__nj.localize(bg,[],be));
}return bh;
},getMonthName:function(length,O,P,Q){var Q=Q?Q:v;
{};
var R=r+Q+w+length+w+(O+1);
return this.__nj.localize(R,[],P);
},getDateFormat:function(bv,bw){{};
var bx=H+bv;
return this.__nj.localize(bx,[],bw);
},getDateTimeFormat:function(T,U,V){var X=y+T;
var W=this.__nj.localize(X,[],V);

if(W==X){W=U;
}return W;
},getTimeFormat:function(j,k){{};
var m=z+j;
var l=this.__nj.localize(m,[],k);

if(l!=m){return l;
}
switch(j){case M:case D:return qx.locale.Date.getDateTimeFormat(J,L);
case C:return qx.locale.Date.getDateTimeFormat(I,x);
case F:return qx.locale.Date.getDateTimeFormat(K,G);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bs){var bt={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bu=qx.locale.Date._getTerritory(bs);
return bt[bu]!=null?bt[bu]:1;
},getWeekendStart:function(d){var f={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var e=qx.locale.Date._getTerritory(d);
return f[e]!=null?f[e]:6;
},getWeekendEnd:function(a){var b={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var c=qx.locale.Date._getTerritory(a);
return b[c]!=null?b[c]:0;
},isWeekend:function(bo,bp){var br=qx.locale.Date.getWeekendStart(bp);
var bq=qx.locale.Date.getWeekendEnd(bp);

if(bq>br){return ((bo>=br)&&(bo<=bq));
}else{return ((bo>=br)||(bo<=bq));
}},_getTerritory:function(g){if(g){var h=g.split(w)[1]||g;
}else{h=this.__nj.getTerritory()||this.__nj.getLanguage();
}return h.toUpperCase();
}}});
})();
(function(){var ca="",bY="Number",bX='</div>',bW='" ',bV="paneUpdated",bU='<div>',bT="</div>",bS="overflow: hidden;",bR="qx.event.type.Data",bQ="paneReloadsData",cs="div",cr='style="',cq="_applyMaxCacheLines",cp="qx.ui.table.pane.Pane",co="width: 100%;",cn="qx.event.type.Event",cm="_applyVisibleRowCount",cl='>',ck="line-height: ",cj="appear",ch='class="',ci="width:100%;",cf="px;",cg='<div ',cd="'>",ce="_applyFirstVisibleRow",cb="<div style='",cc=";position:relative;";
qx.Class.define(cp,{extend:qx.ui.core.Widget,construct:function(Y){arguments.callee.base.call(this);
this.__nk=Y;
this.__nl=0;
this.__nm=0;
this.__nn=[];
},events:{"paneReloadsData":bR,"paneUpdated":cn},properties:{firstVisibleRow:{check:bY,init:0,apply:ce},visibleRowCount:{check:bY,init:0,apply:cm},maxCacheLines:{check:bY,init:1000,apply:cq},allowShrinkX:{refine:true,init:false}},members:{__nm:null,__nl:null,__nk:null,__no:null,__np:null,__nq:null,__nn:null,__nr:0,_applyFirstVisibleRow:function(ct,cu){this.updateContent(false,ct-cu);
},_applyVisibleRowCount:function(cx,cy){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__nk;
},getTable:function(){return this.__nk.getTable();
},setFocusedCell:function(U,V,W){if(U!=this.__nq||V!=this.__np){var X=this.__np;
this.__nq=U;
this.__np=V;
if(V!=X&&!W){if(X!==null){this.updateContent(false,null,X,true);
}
if(V!==null){this.updateContent(false,null,V,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(ba,bb){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(N,O,P,Q){this.__ns();
var S=this.getFirstVisibleRow();
var R=this.getVisibleRowCount();

if(O==-1||O>=S&&N<S+R){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(cv,cw){if(this.__nr>=cv&&cv!==-1){this.__ns();
}},__ns:function(){this.__nn=[];
this.__nr=0;
},__nt:function(F,G,H){if(!G&&!H&&this.__nn[F]){return this.__nn[F];
}else{return null;
}},__nu:function(I,J,K,L){var M=this.getMaxCacheLines();

if(!K&&!L&&!this.__nn[I]&&M>0){this._applyMaxCacheLines(M);
this.__nn[I]=J;
this.__nr+=1;
}},updateContent:function(o,p,q,r){if(o){this.__ns();
}if(p&&Math.abs(p)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(p);
}else if(r&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(q);
}else{this._updateAllRows();
}},_updateRowStyles:function(s){var w=this.getContentElement().getDomElement();

if(!w||!w.firstChild){this._updateAllRows();
return;
}var C=this.getTable();
var u=C.getSelectionModel();
var z=C.getTableModel();
var D=C.getDataRowRenderer();
var v=w.firstChild.childNodes;
var B={table:C};
var E=this.getFirstVisibleRow();
var y=0;
var t=v.length;

if(s!=null){var A=s-E;

if(A>=0&&A<t){E=s;
y=A;
t=A+1;
}else{return;
}}
for(;y<t;y++,E++){B.row=E;
B.selected=u.isSelectedIndex(E);
B.focusedRow=(this.__np==E);
B.rowData=z.getRowData(E);
D.updateDataRowElement(B,v[y]);
}},_getRowsHtml:function(bo,bp){var bv=this.getTable();
var by=bv.getSelectionModel();
var bs=bv.getTableModel();
var bt=bv.getTableColumnModel();
var bM=this.getPaneScroller().getTablePaneModel();
var bD=bv.getDataRowRenderer();
bs.prefetchRows(bo,bo+bp-1);
var bJ=bv.getRowHeight();
var bL=bM.getColumnCount();
var bu=0;
var br=[];
for(var x=0;x<bL;x++){var bO=bM.getColumnAtX(x);
var bx=bt.getColumnWidth(bO);
br.push({col:bO,xPos:x,editable:bs.isColumnEditable(bO),focusedCol:this.__nq==bO,styleLeft:bu,styleWidth:bx});
bu+=bx;
}var bN=[];
var bP=false;

for(var bw=bo;bw<bo+bp;bw++){var bz=by.isSelectedIndex(bw);
var bC=(this.__np==bw);
var bG=this.__nt(bw,bz,bC);

if(bG){bN.push(bG);
continue;
}var bF=[];
var bI={table:bv};
bI.styleHeight=bJ;
bI.row=bw;
bI.selected=bz;
bI.focusedRow=bC;
bI.rowData=bs.getRowData(bw);

if(!bI.rowData){bP=true;
}bF.push(cg);
var bq=bD.getRowClass(bI);

if(bq){bF.push(ch,bq,bW);
}var bE=bD.createRowStyle(bI);
bE+=cc+bD.getRowHeightStyle(bJ)+ci;

if(bE){bF.push(cr,bE,bW);
}bF.push(cl);

for(var x=0;x<bL;x++){var bA=br[x];

for(var bK in bA){bI[bK]=bA[bK];
}var bO=bI.col;
bI.value=bs.getValue(bO,bw);
var bB=bt.getDataCellRenderer(bO);
bB.createDataCellHtml(bI,bF);
}bF.push(bX);
var bH=bF.join(ca);
this.__nu(bw,bH,bz,bC);
bN.push(bH);
}this.fireDataEvent(bQ,bP);
return bN.join(ca);
},_scrollContent:function(a){var b=this.getContentElement().getDomElement();

if(!(b&&b.firstChild)){this._updateAllRows();
return;
}var l=b.firstChild;
var c=l.childNodes;
var j=this.getVisibleRowCount();
var h=this.getFirstVisibleRow();
var f=this.getTable().getTableModel();
var m=0;
m=f.getRowCount();
if(h+j>m){this._updateAllRows();
return;
}var n=a<0?j+a:0;
var d=a<0?0:j-a;

for(i=Math.abs(a)-1;i>=0;i--){var g=c[n];

try{l.removeChild(g);
}catch(T){break;
}}if(!this.__no){this.__no=document.createElement(cs);
}var k=bU;
k+=this._getRowsHtml(h+d,Math.abs(a));
k+=bX;
this.__no.innerHTML=k;
var e=this.__no.firstChild.childNodes;
if(a>0){for(var i=e.length-1;i>=0;i--){var g=e[0];
l.appendChild(g);
}}else{for(var i=e.length-1;i>=0;i--){var g=e[e.length-1];
l.insertBefore(g,l.firstChild);
}}if(this.__np!==null){this._updateRowStyles(this.__np-a);
this._updateRowStyles(this.__np);
}this.fireEvent(bV);
},_updateAllRows:function(){var bf=this.getContentElement().getDomElement();

if(!bf){this.addListenerOnce(cj,arguments.callee,this);
return;
}var bl=this.getTable();
var bi=bl.getTableModel();
var bk=this.getPaneScroller().getTablePaneModel();
var bj=bk.getColumnCount();
var bc=bl.getRowHeight();
var bg=this.getFirstVisibleRow();
var bd=this.getVisibleRowCount();
var bm=bi.getRowCount();

if(bg+bd>bm){bd=Math.max(0,bm-bg);
}var be=bk.getTotalWidth();
var bh;
if(bd>0){bh=[cb,co,(bl.getForceLineHeight()?ck+bc+cf:ca),bS,cd,this._getRowsHtml(bg,bd),bT];
}else{bh=[];
}var bn=bh.join(ca);
bf.innerHTML=bn;
this.setWidth(be);
this.__nl=bj;
this.__nm=bd;
this.fireEvent(bV);
}},destruct:function(){this.__no=this.__nk=this.__nn=null;
}});
})();
(function(){var o="hovered",n="__nv",m="qx.ui.table.pane.Header";
qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(s){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__nv=s;
},members:{__nv:null,__nw:null,__nx:null,getPaneScroller:function(){return this.__nv;
},getTable:function(){return this.__nv.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(p,q){var r=this.getHeaderWidgetAtColumn(p);

if(r!=null){r.setWidth(q);
}},setMouseOverColumn:function(a){if(a!=this.__nx){if(this.__nx!=null){var b=this.getHeaderWidgetAtColumn(this.__nx);

if(b!=null){b.removeState(o);
}}
if(a!=null){this.getHeaderWidgetAtColumn(a).addState(o);
}this.__nx=a;
}},getHeaderWidgetAtColumn:function(t){var u=this.getPaneScroller().getTablePaneModel().getX(t);
return this._getChildren()[u];
},showColumnMoveFeedback:function(c,x){var g=this.getContainerLocation();

if(this.__nw==null){var d=this.getPaneScroller().getTablePaneModel().getX(c);
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
this.__nw=e;
}this.__nw.setLayoutProperties({left:g.left+x});
this.__nw.show();
},hideColumnMoveFeedback:function(){if(this.__nw!=null){this.__nw.destroy();
this.__nw=null;
}},isShowingColumnMoveFeedback:function(){return this.__nw!=null;
},_updateContent:function(y){var D=this.getTable().getTableModel();
var G=this.getTable().getTableColumnModel();
var H=this.getPaneScroller().getTablePaneModel();
var J=this._getChildren();
var E=H.getColumnCount();
var z=D.getSortColumnIndex();
if(y){this._cleanUpCells();
}var A={};
A.sortedAscending=D.isSortAscending();

for(var x=0;x<E;x++){var C=H.getColumnAtX(x);

if(C===undefined){continue;
}var I=G.getColumnWidth(C);
var F=G.getHeaderCellRenderer(C);
A.xPos=x;
A.col=C;
A.name=D.getColumnName(C);
A.editable=D.isColumnEditable(C);
A.sorted=(C==z);
var B=J[x];
if(B==null){B=F.createHeaderCell(A);
B.set({width:I});
this._add(B);
}else{F.updateHeaderCell(A,B);
}}},_cleanUpCells:function(){var w=this._getChildren();

for(var x=w.length-1;x>=0;x--){var v=w[x];
v.destroy();
}}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var c="qx.nativeScrollBars",b="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(c,false);
qx.Mixin.define(b,{members:{_createScrollBar:function(a){if(qx.core.Setting.get(c)){return new qx.ui.core.scroll.NativeScrollBar(a);
}else{return new qx.ui.core.scroll.ScrollBar(a);
}}}});
})();
(function(){var ex="Boolean",ew="resize-line",ev="mousedown",eu="qx.event.type.Data",et="mouseup",es="qx.ui.table.pane.CellEvent",er="scroll",eq="focus-indicator",ep="excluded",eo="scrollbar-y",fv="visible",fu="mousemove",ft="header",fs="editing",fr="click",fq="modelChanged",fp="scrollbar-x",fo="cellClick",fn="pane",fm="__nF",eE="mouseout",eF="__nB",eC="changeHorizontalScrollBarVisible",eD="bottom",eA="_applyScrollTimeout",eB="changeScrollX",ey="_applyTablePaneModel",ez="Integer",eI="dblclick",eJ="__nA",eR="dataEdited",eP="mousewheel",fa="interval",eU="qx.ui.table.pane.Scroller",fi="_applyShowCellFocusIndicator",ff="resize",eL="__nz",fl="vertical",fk="__nD",fj="changeScrollY",eK="appear",eN="table-scroller",eO="beforeSort",eQ="__nC",eS="cellDblclick",eV="__nE",fc="horizontal",fh="losecapture",eG="contextmenu",eH="col-resize",eM="disappear",eY="_applyVerticalScrollBarVisible",eX="_applyHorizontalScrollBarVisible",eW="__nG",fe="cellContextmenu",fd="close",eT="changeTablePaneModel",fb="qx.ui.table.pane.Model",en="__nH",fg="changeVerticalScrollBarVisible";
qx.Class.define(eU,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bf){arguments.callee.base.call(this);
this.__ny=bf;
var bg=new qx.ui.layout.Grid();
bg.setColumnFlex(0,1);
bg.setRowFlex(1,1);
this._setLayout(bg);
this.__nz=this._showChildControl(fp);
this.__nA=this._showChildControl(eo);
this.__nB=this._showChildControl(ft);
this.__nC=this._showChildControl(fn);
this.__nD=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__nD,{row:0,column:0,colSpan:2});
this.__nE=new qx.ui.table.pane.Clipper();
this.__nE.add(this.__nB);
this.__nE.addListener(fh,this._onChangeCaptureHeader,this);
this.__nE.addListener(fu,this._onMousemoveHeader,this);
this.__nE.addListener(ev,this._onMousedownHeader,this);
this.__nE.addListener(et,this._onMouseupHeader,this);
this.__nE.addListener(fr,this._onClickHeader,this);
this.__nD.add(this.__nE,{flex:1});
this.__nF=new qx.ui.table.pane.Clipper();
this.__nF.add(this.__nC);
this.__nF.addListener(eP,this._onMousewheel,this);
this.__nF.addListener(fu,this._onMousemovePane,this);
this.__nF.addListener(ev,this._onMousedownPane,this);
this.__nF.addListener(et,this._onMouseupPane,this);
this.__nF.addListener(fr,this._onClickPane,this);
this.__nF.addListener(eG,this._onContextMenu,this);
this.__nF.addListener(eI,this._onDblclickPane,this);
this.__nF.addListener(ff,this._onResizePane,this);
this._add(this.__nF,{row:1,column:0});
this.__nG=this.getChildControl(eq);
this.getChildControl(ew).hide();
this.addListener(eE,this._onMouseout,this);
this.addListener(eK,this._onAppear,this);
this.addListener(eM,this._onDisappear,this);
this.__nH=new qx.event.Timer();
this.__nH.addListener(fa,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":eu,"changeScrollX":eu,"cellClick":es,"cellDblclick":es,"cellContextmenu":es,"beforeSort":eu},properties:{horizontalScrollBarVisible:{check:ex,init:true,apply:eX,event:eC},verticalScrollBarVisible:{check:ex,init:true,apply:eY,event:fg},tablePaneModel:{check:fb,apply:ey,event:eT},liveResize:{check:ex,init:false},focusCellOnMouseMove:{check:ex,init:false},selectBeforeFocus:{check:ex,init:false},showCellFocusIndicator:{check:ex,init:true,apply:fi},scrollTimeout:{check:ez,init:100,apply:eA},appearance:{refine:true,init:eN}},members:{__nI:null,__ny:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,__nP:null,__nQ:null,__nR:null,__nS:null,__nT:null,__nU:null,__nV:null,__nW:null,__nX:null,__nY:null,__oa:null,__ob:null,__oc:null,__od:null,__nz:null,__nA:null,__nB:null,__nE:null,__nC:null,__nF:null,__nG:null,__nD:null,__nH:null,getPaneInsetRight:function(){var dd=this.getTopRightWidget();
var de=dd&&dd.isVisible()&&dd.getBounds()?dd.getBounds().width:0;
var dc=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(de,dc);
},setPaneWidth:function(cI){if(this.isVerticalScrollBarVisible()){cI+=this.getPaneInsetRight();
}this.setWidth(cI);
},_createChildControlImpl:function(df){var dg;

switch(df){case ft:dg=(this.getTable().getNewTablePaneHeader())(this);
break;
case fn:dg=(this.getTable().getNewTablePane())(this);
break;
case eq:dg=new qx.ui.table.pane.FocusIndicator(this);
dg.setUserBounds(0,0,0,0);
dg.setZIndex(1000);
dg.addListener(et,this._onMouseupFocusIndicator,this);
this.__nF.add(dg);
dg.exclude();
break;
case ew:dg=new qx.ui.core.Widget();
dg.setUserBounds(0,0,0,0);
dg.setZIndex(1000);
this.__nF.add(dg);
break;
case fp:dg=this._createScrollBar(fc).set({minWidth:0,alignY:eD});
dg.addListener(er,this._onScrollX,this);
this._add(dg,{row:2,column:0});
break;
case eo:dg=this._createScrollBar(fl);
dg.addListener(er,this._onScrollY,this);
this._add(dg,{row:1,column:1});
break;
}return dg||arguments.callee.base.call(this,df);
},_applyHorizontalScrollBarVisible:function(P,Q){this.__nz.setVisibility(P?fv:ep);

if(!P){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(L,M){this.__nA.setVisibility(L?fv:ep);

if(!L){this.setScrollX(0);
}},_applyTablePaneModel:function(dT,dU){if(dU!=null){dU.removeListener(fq,this._onPaneModelChanged,this);
}dT.addListener(fq,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(dt,du){if(dt){this._updateFocusIndicator();
}else{if(this.__nG){this.__nG.hide();
}}},getScrollY:function(){return this.__nA.getPosition();
},setScrollY:function(scrollY,be){this.__nA.scrollTo(scrollY);

if(be){this._updateContent();
}},getScrollX:function(){return this.__nz.getPosition();
},setScrollX:function(scrollX){this.__nz.scrollTo(scrollX);
},getTable:function(){return this.__ny;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(cN,cO){this.__nB.setColumnWidth(cN,cO);
this.__nC.setColumnWidth(cN,cO);
var cP=this.getTablePaneModel();
var x=cP.getX(cN);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__nB.onColOrderChanged();
this.__nC.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(R,S,T,U){this.__nC.onTableModelDataChanged(R,S,T,U);
var V=this.getTable().getTableModel().getRowCount();

if(V!=this.__nI){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=V){if(V==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),V-1);
}}this.__nI=V;
}},onSelectionChanged:function(){this.__nC.onSelectionChanged();
},onFocusChanged:function(){this.__nC.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__nB.onTableModelMetaDataChanged();
this.__nC.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__nB.onPaneModelChanged();
this.__nC.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__nB._updateContent();
this.__ny._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var dk=this.__nF.getInnerSize();

if(!dk){return ;
}var di=this.getTablePaneModel().getTotalWidth();
var dj=this.__nz;

if(dk.width<di){var dh=Math.max(0,di-dk.width);
dj.setMaximum(dh);
dj.setKnobFactor(dk.width/di);
var dl=dj.getPosition();
dj.setPosition(Math.min(dl,dh));
}else{dj.setMaximum(0);
dj.setKnobFactor(1);
dj.setPosition(0);
}},updateVerScrollBarMaximum:function(){var el=this.__nF.getInnerSize();

if(!el){return ;
}var ej=this.getTable().getTableModel();
var ef=ej.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){ef+=1;
}var ee=this.getTable().getRowHeight();
var eh=ef*ee;
var ek=this.__nA;

if(el.height<eh){var eg=Math.max(0,eh-el.height);
ek.setMaximum(eg);
ek.setKnobFactor(el.height/eh);
var ei=ek.getPosition();
ek.setPosition(Math.min(ei,eg));
}else{ek.setMaximum(0);
ek.setKnobFactor(1);
ek.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var cM=e.getData();
this.fireDataEvent(eB,cM,e.getOldData());
this.__nE.scrollToX(cM);
this.__nF.scrollToX(cM);
},_onScrollY:function(e){this.fireDataEvent(fj,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var bh=this.getTable();

if(!bh.getEnabled()){return;
}var bj=qx.bom.client.Engine.GECKO?1:3;
var bi=this.__nA.getPosition()+((e.getWheelDelta()*bj)*bh.getRowHeight());
this.__nA.scrollTo(bi);
if(this.__nW&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__nW,this.__nX);
}e.stop();
},__oe:function(dV){var eb=this.getTable();
var ec=this.__nB.getHeaderWidgetAtColumn(this.__nR);
var dW=ec.getSizeHint().minWidth;
var dY=Math.max(dW,this.__nT+dV-this.__nS);

if(this.getLiveResize()){var dX=eb.getTableColumnModel();
dX.setColumnWidth(this.__nR,dY);
}else{this.__nB.setColumnWidth(this.__nR,dY);
var ea=this.getTablePaneModel();
this._showResizeLine(ea.getColumnLeft(this.__nR)+dY);
}this.__nS+=dY-this.__nT;
this.__nT=dY;
},__of:function(bI){var bJ=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__nB.isShowingColumnMoveFeedback()||bI>this.__nQ+bJ||bI<this.__nQ-bJ){this.__nN+=bI-this.__nQ;
this.__nB.showColumnMoveFeedback(this.__nM,this.__nN);
var bK=this.__ny.getTablePaneScrollerAtPageX(bI);

if(this.__nP&&this.__nP!=bK){this.__nP.hideColumnMoveFeedback();
}
if(bK!=null){this.__nO=bK.showColumnMoveFeedback(bI);
}else{this.__nO=null;
}this.__nP=bK;
this.__nQ=bI;
}},_onMousemoveHeader:function(e){var dQ=this.getTable();

if(!dQ.getEnabled()){return;
}var dR=false;
var dK=null;
var dO=e.getDocumentLeft();
var dP=e.getDocumentTop();
this.__nW=dO;
this.__nX=dP;

if(this.__nR!=null){this.__oe(dO);
dR=true;
e.stopPropagation();
}else if(this.__nM!=null){this.__of(dO);
e.stopPropagation();
}else{var dL=this._getResizeColumnForPageX(dO);

if(dL!=-1){dR=true;
}else{var dN=dQ.getTableModel();
var dS=this._getColumnForPageX(dO);

if(dS!=null&&dN.isColumnSortable(dS)){dK=dS;
}}}var dM=dR?eH:null;
this.getApplicationRoot().setGlobalCursor(dM);
this.setCursor(dM);
this.__nB.setMouseOverColumn(dK);
},_onMousemovePane:function(e){var W=this.getTable();

if(!W.getEnabled()){return;
}var Y=e.getDocumentLeft();
var ba=e.getDocumentTop();
this.__nW=Y;
this.__nX=ba;
var X=this._getRowForPagePos(Y,ba);

if(X!=null&&this._getColumnForPageX(Y)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(Y,ba);
}}this.__nB.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var J=e.getDocumentLeft();
var K=this._getResizeColumnForPageX(J);

if(K!=-1){this._startResizeHeader(K,J);
e.stop();
}else{var I=this._getColumnForPageX(J);

if(I!=null){this._startMoveHeader(I,J);
e.stop();
}}},_startResizeHeader:function(q,r){var s=this.getTable().getTableColumnModel();
this.__nR=q;
this.__nS=r;
this.__nT=s.getColumnWidth(this.__nR);
this.__nE.capture();
},_startMoveHeader:function(cy,cz){this.__nM=cy;
this.__nQ=cz;
this.__nN=this.getTablePaneModel().getColumnLeft(cy);
this.__nE.capture();
},_onMousedownPane:function(e){var bw=this.getTable();

if(!bw.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var bt=e.getDocumentLeft();
var bv=e.getDocumentTop();
var by=this._getRowForPagePos(bt,bv);
var bx=this._getColumnForPageX(bt);

if(by!==null){this.__nU={row:by,col:bx};
var bu=this.getSelectBeforeFocus();

if(bu){bw.getSelectionManager().handleMouseDown(by,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(bt,bv);
}
if(!bu){bw.getSelectionManager().handleMouseDown(by,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__nU&&this.__nG.getRow()==this.__nU.row&&this.__nG.getColumn()==this.__nU.col){this.__nU={};
this.fireEvent(fo,qx.ui.table.pane.CellEvent,[this,e,this.__nU.row,this.__nU.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__nR!=null){this._stopResizeHeader();
}
if(this.__nM!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var ca=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
ca.setColumnWidth(this.__nR,this.__nT);
}this.__nR=null;
this.__nE.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var cu=this.getTable().getTableColumnModel();
var cv=this.getTablePaneModel();
this.__nB.hideColumnMoveFeedback();

if(this.__nP){this.__nP.hideColumnMoveFeedback();
}
if(this.__nO!=null){var cx=cv.getFirstColumnX()+cv.getX(this.__nM);
var ct=this.__nO;

if(ct!=cx&&ct!=cx+1){var cw=cu.getVisibleColumnAtX(cx);
var cs=cu.getVisibleColumnAtX(ct);
var cr=cu.getOverallX(cw);
var cq=(cs!=null)?cu.getOverallX(cs):cu.getOverallColumnCount();

if(cq>cr){cq--;
}cu.moveColumn(cr,cq);
}}this.__nM=null;
this.__nO=null;
this.__nE.releaseCapture();
},_onMouseupPane:function(e){var N=this.getTable();

if(!N.getEnabled()){return;
}var O=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(O!=-1&&O!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){N.getSelectionManager().handleMouseUp(O,e);
}},_onMouseupHeader:function(e){var bH=this.getTable();

if(!bH.getEnabled()){return;
}
if(this.__nR!=null){this._stopResizeHeader();
this.__nV=true;
e.stop();
}else if(this.__nM!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__nV){this.__nV=false;
return;
}var cE=this.getTable();

if(!cE.getEnabled()){return;
}var cC=cE.getTableModel();
var cD=e.getDocumentLeft();
var cB=this._getResizeColumnForPageX(cD);

if(cB==-1){var cH=this._getColumnForPageX(cD);

if(cH!=null&&cC.isColumnSortable(cH)){var cA=cC.getSortColumnIndex();
var cF=(cH!=cA)?true:!cC.isSortAscending();
var cG={column:cH,ascending:cF};

if(this.fireDataEvent(eO,cG)){cC.sortByColumn(cH,cF);
cE.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var t=this.getTable();

if(!t.getEnabled()){return;
}var w=e.getDocumentLeft();
var y=e.getDocumentTop();
var u=this._getRowForPagePos(w,y);
var v=this._getColumnForPageX(w);

if(u!=null&&v!=null){t.getSelectionManager().handleClick(u,e);

if(this.__nG.isHidden()||(this.__nU&&u==this.__nU.row&&v==this.__nU.col)){this.__nU={};
this.fireEvent(fo,qx.ui.table.pane.CellEvent,[this,e,u,v],true);
}}},_onContextMenu:function(e){var dH=e.getDocumentLeft();
var dI=e.getDocumentTop();
var dF=this._getRowForPagePos(dH,dI);
var dG=this._getColumnForPageX(dH);

if(this.__nG.isHidden()||(this.__nU&&dF==this.__nU.row&&dG==this.__nU.col)){this.__nU={};
this.fireEvent(fe,qx.ui.table.pane.CellEvent,[this,e,dF,dG],true);
var dE=this.getTable().getContextMenu();

if(dE){if(dE.getChildren().length>0){dE.openAtMouse(e);
}else{dE.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var bc=e.getDocumentLeft();
var bd=e.getDocumentTop();
this._focusCellAtPagePos(bc,bd);
this.startEditing();
var bb=this._getRowForPagePos(bc,bd);

if(bb!=-1&&bb!=null){this.fireEvent(eS,qx.ui.table.pane.CellEvent,[this,e,bb],true);
}},_onMouseout:function(e){var dJ=this.getTable();

if(!dJ.getEnabled()){return;
}if(this.__nR==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__nB.setMouseOverColumn(null);
},_showResizeLine:function(x){var da=this._showChildControl(ew);
var cY=da.getWidth();
var db=this.__nF.getBounds();
da.setUserBounds(x-Math.round(cY/2),0,cY,db.height);
},_hideResizeLine:function(){this._excludeChildControl(ew);
},showColumnMoveFeedback:function(cd){var cm=this.getTablePaneModel();
var cl=this.getTable().getTableColumnModel();
var cg=this.__nC.getContainerLocation().left;
var ck=cm.getColumnCount();
var ch=0;
var cf=0;
var cp=cg;

for(var ce=0;ce<ck;ce++){var ci=cm.getColumnAtX(ce);
var cn=cl.getColumnWidth(ci);

if(cd<cp+cn/2){break;
}cp+=cn;
ch=ce+1;
cf=cp-cg;
}var cj=this.__nF.getContainerLocation().left;
var co=this.__nF.getBounds().width;
var scrollX=cj-cg;
cf=qx.lang.Number.limit(cf,scrollX+2,scrollX+co-1);
this._showResizeLine(cf);
return cm.getFirstColumnX()+ch;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dp,dq){var ds=this._getRowForPagePos(dp,dq);

if(ds!=-1&&ds!=null){var dr=this._getColumnForPageX(dp);
this.__ny.setFocusedCell(dr,ds);
}},setFocusedCell:function(cb,cc){if(!this.isEditing()){this.__nC.setFocusedCell(cb,cc,this.__nK);
this.__nY=cb;
this.__oa=cc;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__nY;
},getFocusedRow:function(){return this.__oa;
},scrollCellVisible:function(bL,bM){var bW=this.getTablePaneModel();
var bN=bW.getX(bL);

if(bN!=-1){var bT=this.__nF.getInnerSize();

if(!bT){return;
}var bU=this.getTable().getTableColumnModel();
var bQ=bW.getColumnLeft(bL);
var bX=bU.getColumnWidth(bL);
var bO=this.getTable().getRowHeight();
var bY=bM*bO;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var bV=Math.min(bQ,bQ+bX-bT.width);
var bS=bQ;
this.setScrollX(Math.max(bV,Math.min(bS,scrollX)));
var bP=bY+bO-bT.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){bP+=bO;
}var bR=bY;
this.setScrollY(Math.max(bP,Math.min(bR,scrollY)),true);
}},isEditing:function(){return this.__ob!=null;
},startEditing:function(){var dA=this.getTable();
var dy=dA.getTableModel();
var dC=this.__nY;

if(!this.isEditing()&&(dC!=null)&&dy.isColumnEditable(dC)){var dD=this.__oa;
var dw=this.getTablePaneModel().getX(dC);
var dx=dy.getValue(dC,dD);
this.__oc=dA.getTableColumnModel().getCellEditorFactory(dC);
var dz={col:dC,row:dD,xPos:dw,value:dx,table:dA};
this.__ob=this.__oc.createCellEditor(dz);
if(this.__ob===null){return false;
}else if(this.__ob instanceof qx.ui.window.Window){this.__ob.setModal(true);
this.__ob.setShowClose(false);
this.__ob.addListener(fd,this._onCellEditorModalWindowClose,this);
var f=dA.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__ob,dz);
}this.__ob.open();
}else{var dB=this.__nG.getInnerSize();
this.__ob.setUserBounds(0,0,dB.width,dB.height);
this.__nG.addListener(ev,function(e){e.stopPropagation();
});
this.__nG.add(this.__ob);
this.__nG.addState(fs);
this.__nG.setKeepActive(false);
this.__ob.focus();
this.__ob.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var bs=this.__oc.getCellEditorValue(this.__ob);
var br=this.getTable().getTableModel().getValue(this.__nY,this.__oa);
this.getTable().getTableModel().setValue(this.__nY,this.__oa,bs);
this.__ny.focus();
this.__ny.fireDataEvent(eR,{row:this.__oa,col:this.__nY,oldValue:br,value:bs});
}},cancelEditing:function(){if(this.isEditing()&&!this.__ob.pendingDispose){if(this._cellEditorIsModalWindow){this.__ob.destroy();
this.__ob=null;
this.__oc=null;
this.__ob.pendingDispose=true;
}else{this.__nG.removeState(fs);
this.__nG.setKeepActive(true);
this.__ob.destroy();
this.__ob=null;
this.__oc=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(bk){var bn=this.getTable().getTableColumnModel();
var bo=this.getTablePaneModel();
var bm=bo.getColumnCount();
var bq=this.__nB.getContainerLocation().left;

for(var x=0;x<bm;x++){var bl=bo.getColumnAtX(x);
var bp=bn.getColumnWidth(bl);
bq+=bp;

if(bk<bq){return bl;
}}return null;
},_getResizeColumnForPageX:function(cQ){var cU=this.getTable().getTableColumnModel();
var cV=this.getTablePaneModel();
var cT=cV.getColumnCount();
var cX=this.__nB.getContainerLocation().left;
var cR=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<cT;x++){var cS=cV.getColumnAtX(x);
var cW=cU.getColumnWidth(cS);
cX+=cW;

if(cQ>=(cX-cR)&&cQ<=(cX+cR)){return cS;
}}return -1;
},_getRowForPagePos:function(z,A){var B=this.__nC.getContentLocation();

if(z<B.left||z>B.right){return null;
}
if(A>=B.top&&A<=B.bottom){var C=this.getTable().getRowHeight();
var scrollY=this.__nA.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/C)*C;
}var F=scrollY+A-B.top;
var H=Math.floor(F/C);
var G=this.getTable().getTableModel();
var D=G.getRowCount();
return (H<D)?H:null;
}var E=this.__nB.getContainerLocation();

if(A>=E.top&&A<=E.bottom&&z<=E.right){return -1;
}return null;
},setTopRightWidget:function(dm){var dn=this.__od;

if(dn!=null){this.__nD.remove(dn);
}
if(dm!=null){this.__nD.add(dm);
}this.__od=dm;
},getTopRightWidget:function(){return this.__od;
},getHeader:function(){return this.__nB;
},getTablePane:function(){return this.__nC;
},getVerticalScrollBarWidth:function(){var dv=this.__nA;
return dv.isVisible()?(dv.getSizeHint().width||0):0;
},getNeededScrollBars:function(a,b){var j=this.__nA.getSizeHint().width;
var k=this.__nF.getInnerSize();
var c=k?k.width:0;

if(this.getVerticalScrollBarVisible()){c+=j;
}var n=k?k.height:0;

if(this.getHorizontalScrollBarVisible()){n+=j;
}var h=this.getTable().getTableModel();
var l=h.getRowCount();
var o=this.getTablePaneModel().getTotalWidth();
var m=this.getTable().getRowHeight()*l;
var g=false;
var p=false;

if(o>c){g=true;

if(m>n-j){p=true;
}}else if(m>n){p=true;

if(!b&&(o>c-j)){g=true;
}}var i=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var d=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((a||g)?i:0)|((b||!p)?0:d);
},_applyScrollTimeout:function(cJ,cK){this._startInterval(cJ);
},_startInterval:function(em){this.__nH.setInterval(em);
this.__nH.start();
},_stopInterval:function(){this.__nH.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__nK&&!this.__nC._layoutPending){this.__nK=false;
this._updateContent();
}}),_updateContent:function(){var bD=this.__nF.getInnerSize();

if(!bD){return;
}var bG=bD.height;
var scrollX=this.__nz.getPosition();
var scrollY=this.__nA.getPosition();
var bA=this.getTable().getRowHeight();
var bB=Math.floor(scrollY/bA);
var bF=this.__nC.getFirstVisibleRow();
this.__nC.setFirstVisibleRow(bB);
var bC=Math.ceil(bG/bA);
var bz=0;
var bE=this.getTable().getKeepFirstVisibleRowComplete();

if(!bE){bC++;
bz=scrollY%bA;
}this.__nC.setVisibleRowCount(bC);

if(bB!=bF){this._updateFocusIndicator();
}this.__nF.scrollToX(scrollX);
if(!bE){this.__nF.scrollToY(bz);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var cL=this.getTable();

if(!cL.getEnabled()){return;
}this.__nG.moveToCell(this.__nY,this.__oa);
}},destruct:function(){this._stopInterval();
var ed=this.getTablePaneModel();

if(ed){ed.dispose();
}this.__nU=this.__od=this.__ny=null;
this._disposeObjects(eL,eJ,eV,fm,eW,eF,eQ,fk,en);
}});
})();
(function(){var c="qx.ui.core.scroll.IScrollBar",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"scroll":b},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(e){this.assertNumber(e);
},scrollBy:function(a){this.assertNumber(a);
},scrollBySteps:function(d){this.assertNumber(d);
}}});
})();
(function(){var w="horizontal",v="px",u="scroll",t="vertical",s="-1px",r="qx.client",q="0",p="hidden",o="mousedown",n="qx.ui.core.scroll.NativeScrollBar",L="PositiveNumber",K="Integer",J="mousemove",I="__oh",H="_applyMaximum",G="_applyOrientation",F="appear",E="opera",D="PositiveInteger",C="mshtml",A="mouseup",B="Number",y="_applyPosition",z="scrollbar",x="native";
qx.Class.define(n,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(M){arguments.callee.base.call(this);
this.addState(x);
this.getContentElement().addListener(u,this._onScroll,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(A,this._stopPropagation,this);
this.addListener(J,this._stopPropagation,this);

if(qx.core.Variant.isSet(r,E)){this.addListener(F,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(M!=null){this.setOrientation(M);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:z},orientation:{check:[w,t],init:w,apply:G},maximum:{check:D,apply:H,init:100},position:{check:B,init:0,apply:y,event:u},singleStep:{check:K,init:20},knobFactor:{check:L,nullable:true}},members:{__og:null,__oh:null,_getScrollPaneElement:function(){if(!this.__oh){this.__oh=new qx.html.Element();
}return this.__oh;
},renderLayout:function(Q,top,R,S){var T=arguments.callee.base.call(this,Q,top,R,S);
this._updateScrollBar();
return T;
},_getContentHint:function(){var m=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__og?100:m,maxWidth:this.__og?null:m,minWidth:this.__og?null:m,height:this.__og?m:100,maxHeight:this.__og?m:null,minHeight:this.__og?m:null};
},_applyEnabled:function(k,l){arguments.callee.base.call(this,k,l);
this._updateScrollBar();
},_applyMaximum:function(U){this._updateScrollBar();
},_applyPosition:function(f){var content=this.getContentElement();

if(this.__og){content.scrollToX(f);
}else{content.scrollToY(f);
}},_applyOrientation:function(a,b){var c=this.__og=a===w;
this.set({allowGrowX:c,allowShrinkX:c,allowGrowY:!c,allowShrinkY:!c});

if(c){this.replaceState(t,w);
}else{this.replaceState(w,t);
}this.getContentElement().setStyles({overflowX:c?u:p,overflowY:c?p:u});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var h=this.__og;
var i=this.getBounds();

if(!i){return;
}
if(this.isEnabled()){var j=h?i.width:i.height;
var g=this.getMaximum()+j;
}else{g=0;
}if(qx.core.Variant.isSet(r,C)){var i=this.getBounds();
this.getContentElement().setStyles({left:h?q:s,top:h?s:q,width:(h?i.width:i.width+1)+v,height:(h?i.height+1:i.height)+v});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(h?g:1)+v,height:(h?1:g)+v});
this.scrollTo(this.getPosition());
},scrollTo:function(P){this.setPosition(Math.max(0,Math.min(this.getMaximum(),P)));
},scrollBy:function(d){this.scrollTo(this.getPosition()+d);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.scrollBy(N*O);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__og?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(I);
}});
})();
(function(){var s="slider",r="horizontal",q="button-begin",p="vertical",o="button-end",n="Integer",m="execute",l="right",k="left",j="down",H="up",G="PositiveNumber",F="changeValue",E="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",D="_applyKnobFactor",C="knob",B="qx.ui.core.scroll.ScrollBar",A="resize",z="_applyOrientation",y="_applyPageStep",w="PositiveInteger",x="scroll",u="_applyPosition",v="scrollbar",t="_applyMaximum";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(b){arguments.callee.base.call(this);
this._createChildControl(q);
this._createChildControl(s).addListener(A,this._onResizeSlider,this);
this._createChildControl(o);
if(b!=null){this.setOrientation(b);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:v},orientation:{check:[r,p],init:r,apply:z},maximum:{check:w,apply:t,init:100},position:{check:E,init:0,apply:u,event:x},singleStep:{check:n,init:20},pageStep:{check:n,init:10,apply:y},knobFactor:{check:G,apply:D,nullable:true}},members:{__oi:2,_createChildControlImpl:function(L){var M;

switch(L){case s:M=new qx.ui.core.scroll.ScrollSlider();
M.setPageStep(100);
M.setFocusable(false);
M.addListener(F,this._onChangeSliderValue,this);
this._add(M,{flex:1});
break;
case q:M=new qx.ui.form.RepeatButton();
M.setFocusable(false);
M.addListener(m,this._onExecuteBegin,this);
this._add(M);
break;
case o:M=new qx.ui.form.RepeatButton();
M.setFocusable(false);
M.addListener(m,this._onExecuteEnd,this);
this._add(M);
break;
}return M||arguments.callee.base.call(this,L);
},_applyMaximum:function(I){this.getChildControl(s).setMaximum(I);
},_applyPosition:function(d){this.getChildControl(s).setValue(d);
},_applyKnobFactor:function(c){this.getChildControl(s).setKnobFactor(c);
},_applyPageStep:function(a){this.getChildControl(s).setPageStep(a);
},_applyOrientation:function(P,Q){var R=this._getLayout();

if(R){R.dispose();
}if(P===r){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(p,r);
this.getChildControl(q).replaceState(H,k);
this.getChildControl(o).replaceState(j,l);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(r,p);
this.getChildControl(q).replaceState(k,H);
this.getChildControl(o).replaceState(l,j);
}this.getChildControl(s).setOrientation(P);
},scrollTo:function(N){this.getChildControl(s).slideTo(N);
},scrollBy:function(O){this.getChildControl(s).slideBy(O);
},scrollBySteps:function(J){var K=this.getSingleStep();
this.getChildControl(s).slideBy(J*K);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var f=this.getChildControl(s).getChildControl(C);
var i=f.getSizeHint();
var g=false;
var h=this.getChildControl(s).getInnerSize();

if(this.getOrientation()==p){if(h.height<i.minHeight+this.__oi){g=true;
}}else{if(h.width<i.minWidth+this.__oi){g=true;
}}
if(g){f.exclude();
}else{f.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(d){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(a){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(c){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var n="knob",m="horizontal",l="vertical",k="Integer",j="px",i="mousemove",h="resize",g="left",f="top",d="mouseup",R="slider",Q="PageUp",P="mousedown",O="height",N="changeValue",M="Left",L="Down",K="Up",J="dblclick",I="qx.ui.form.Slider",u="PageDown",v="mousewheel",s="interval",t="_applyValue",q="_applyKnobFactor",r="End",o="width",p="_applyOrientation",w="Home",x="floor",A="_applyMinimum",z="click",C="Right",B="keypress",E="ceil",D="losecapture",y="contextmenu",H="_applyMaximum",G="Number",F="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(I,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bC){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(B,this._onKeyPress);
this.addListener(v,this._onMouseWheel);
this.addListener(P,this._onMouseDown);
this.addListener(d,this._onMouseUp);
this.addListener(D,this._onMouseUp);
this.addListener(h,this._onUpdate);
this.addListener(y,this._onStopEvent);
this.addListener(z,this._onStopEvent);
this.addListener(J,this._onStopEvent);
if(bC!=null){this.setOrientation(bC);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:R},focusable:{refine:true,init:true},orientation:{check:[m,l],init:m,apply:p},value:{check:F,init:0,apply:t,event:N,nullable:true},minimum:{check:k,init:0,apply:A},maximum:{check:k,init:100,apply:H},singleStep:{check:k,init:1},pageStep:{check:k,init:10},knobFactor:{check:G,apply:q,nullable:true}},members:{__oj:null,__ok:null,__ol:null,__om:null,__on:null,__oo:null,__op:null,__oq:null,__or:null,_forwardStates:{invalid:true},_createChildControlImpl:function(S){var T;

switch(S){case n:T=new qx.ui.core.Widget();
T.addListener(h,this._onUpdate,this);
this._add(T);
break;
}return T||arguments.callee.base.call(this,S);
},_onMouseWheel:function(e){var bB=e.getWheelDelta()>0?1:-1;
this.slideBy(bB*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bA=this.getOrientation()===m;
var bz=bA?M:K;
var forward=bA?C:L;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bz:this.slideBack();
break;
case u:this.slidePageForward();
break;
case Q:this.slidePageBack();
break;
case w:this.slideToBegin();
break;
case r:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__om){return;
}var bv=this.__ot;
var bt=this.getChildControl(n);
var bu=bv?g:f;
var bx=bv?e.getDocumentLeft():e.getDocumentTop();
var by=this.__oj=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bu];
var bw=this.__ok=qx.bom.element.Location.get(bt.getContainerElement().getDomElement())[bu];

if(e.getTarget()===bt){this.__om=true;
this.__on=bx+by-bw;
}else{this.__oo=true;
this.__op=bx<=bw?-1:1;
this.__ou(e);
this._onInterval();
if(!this.__or){this.__or=new qx.event.Timer(100);
this.__or.addListener(s,this._onInterval,this);
}this.__or.start();
}this.addListener(i,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__om){this.releaseCapture();
delete this.__om;
delete this.__on;
}else if(this.__oo){this.__or.stop();
this.releaseCapture();
delete this.__oo;
delete this.__op;
delete this.__oq;
}this.removeListener(i,this._onMouseMove);
if(e.getType()===d){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__om){var V=this.__ot?e.getDocumentLeft():e.getDocumentTop();
var U=V-this.__on;
this.slideTo(this._positionToValue(U));
}else if(this.__oo){this.__ou(e);
}e.stopPropagation();
},_onInterval:function(e){var b=this.getValue()+(this.__op*this.getPageStep());
if(b<this.getMinimum()){b=this.getMinimum();
}else if(b>this.getMaximum()){b=this.getMaximum();
}var c=this.__op==-1;

if((c&&b<=this.__oq)||(!c&&b>=this.__oq)){b=this.__oq;
}this.slideTo(b);
},_onUpdate:function(e){var bO=this.getInnerSize();
var bP=this.getChildControl(n).getBounds();
var bN=this.__ot?o:O;
this._updateKnobSize();
this.__os=bO[bN]-bP[bN];
this.__ol=bP[bN];
this._updateKnobPosition();
},__ot:false,__os:0,__ou:function(e){var bb=this.__ot;
var bi=bb?e.getDocumentLeft():e.getDocumentTop();
var bk=this.__oj;
var bc=this.__ok;
var bm=this.__ol;
var bj=bi-bk;

if(bi>=bc){bj-=bm;
}var bg=this._positionToValue(bj);
var bd=this.getMinimum();
var be=this.getMaximum();

if(bg<bd){bg=bd;
}else if(bg>be){bg=be;
}else{var bh=this.getValue();
var bf=this.getPageStep();
var bl=this.__op<0?x:E;
bg=bh+(Math[bl]((bg-bh)/bf)*bf);
}if(this.__oq==null||(this.__op==-1&&bg<=this.__oq)||(this.__op==1&&bg>=this.__oq)){this.__oq=bg;
}},_positionToValue:function(bD){var bE=this.__os;
if(bE==null||bE==0){return 0;
}var bG=bD/bE;

if(bG<0){bG=0;
}else if(bG>1){bG=1;
}var bF=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bF*bG);
},_valueToPosition:function(bJ){var bK=this.__os;

if(bK==null){return 0;
}var bL=this.getMaximum()-this.getMinimum();
if(bL==0){return 0;
}var bJ=bJ-this.getMinimum();
var bM=bJ/bL;

if(bM<0){bM=0;
}else if(bM>1){bM=1;
}return Math.round(bK*bM);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(br){var bs=this.getChildControl(n).getContainerElement();

if(this.__ot){bs.setStyle(g,br+j,true);
}else{bs.setStyle(f,br+j,true);
}},_updateKnobSize:function(){var bo=this.getKnobFactor();

if(bo==null){return;
}var bn=this.getInnerSize();

if(bn==null){return;
}if(this.__ot){this.getChildControl(n).setWidth(Math.round(bo*bn.width));
}else{this.getChildControl(n).setHeight(Math.round(bo*bn.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(a){this.slideTo(this.getValue()+a);
},slideTo:function(W){if(W<this.getMinimum()){W=this.getMinimum();
}else if(W>this.getMaximum()){W=this.getMaximum();
}else{W=this.getMinimum()+Math.round((W-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(W);
},_applyOrientation:function(X,Y){var ba=this.getChildControl(n);
this.__ot=X===m;
if(this.__ot){this.removeState(l);
ba.removeState(l);
this.addState(m);
ba.addState(m);
ba.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(m);
ba.removeState(m);
this.addState(l);
ba.addState(l);
ba.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bH,bI){if(bH!=null){this._updateKnobSize();
}else{if(this.__ot){this.getChildControl(n).resetWidth();
}else{this.getChildControl(n).resetHeight();
}}},_applyValue:function(bp,bq){if(bp!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bQ,bR){if(this.getValue()<bQ){this.setValue(bQ);
}this._updateKnobPosition();
},_applyMaximum:function(bS,bT){if(this.getValue()>bS){this.setValue(bS);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var b="qx.ui.table.pane.Clipper";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(a){this.getContentElement().scrollToX(a,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){arguments.callee.base.call(this);
this.__ov=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__ov:null,_onKeyPress:function(e){var q=e.getKeyIdentifier();

if(q!==f&&q!==c){e.stopPropagation();
}},moveToCell:function(i,j){if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__ov.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__ov.getTable();
var n=p.getTableColumnModel();
var o=this.__ov.getTablePaneModel();
var m=this.__ov.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this.__ov=null;
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
}},clone:function(g){var h=arguments.callee.base.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(e,f,g){return e>=f&&e<=g;
},isBetweenRange:function(h,i,j){return h>i&&h<j;
},limit:function(b,c,d){if(d!=null&&b>d){return d;
}else if(c!=null&&b<c){return c;
}else{return b;
}}}});
})();
(function(){var q="Number",p="qx.event.type.Event",o="_applyFirstColumnX",n="Integer",m="qx.ui.table.pane.Model",l="_applyMaxColumnCount",k="visibilityChangedPre";
qx.Class.define(m,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
a.addListener(k,this._onColVisibilityChanged,this);
this.__ow=a;
},events:{"modelChanged":p},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:n,init:0,apply:o},maxColumnCount:{check:q,init:-1,apply:l}},members:{__ox:null,__ow:null,_applyFirstColumnX:function(r,s){this.__ox=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(C,D){this.__ox=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(w){this.__ow=w;
this.__ox=null;
},_onColVisibilityChanged:function(y){this.__ox=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__ox==null){var d=this.getFirstColumnX();
var f=this.getMaxColumnCount();
var e=this.__ow.getVisibleColumnCount();

if(f==-1||(d+f)>e){this.__ox=e-d;
}else{this.__ox=f;
}}return this.__ox;
},getColumnAtX:function(b){var c=this.getFirstColumnX();
return this.__ow.getVisibleColumnAtX(c+b);
},getX:function(t){var u=this.getFirstColumnX();
var v=this.getMaxColumnCount();
var x=this.__ow.getVisibleX(t)-u;

if(x>=0&&(v==-1||x<v)){return x;
}else{return -1;
}},getColumnLeft:function(g){var j=0;
var i=this.getColumnCount();

for(var x=0;x<i;x++){var h=this.getColumnAtX(x);

if(h==g){return j;
}j+=this.__ow.getColumnWidth(h);
}return -1;
},getTotalWidth:function(){var z=0;
var A=this.getColumnCount();

for(var x=0;x<A;x++){var B=this.getColumnAtX(x);
z+=this.__ow.getColumnWidth(B);
}return z;
}},destruct:function(){this.__ow=null;
}});
})();
(function(){var cc="",cb="!",ca="'!",bY="'",bX="Expected '",bW="' (rgb(",bV=",",bU=")), but found value '",bT="Event (",bS="Expected value to be the CSS color '",di="' but found ",dh="The value '",dg="qx.core.Object",df="Expected value to be an array but found ",de=") was fired.",dd="Expected value to be an integer >= 0 but found ",dc="' to be not equal with '",db="' to '",da="qx.ui.core.Widget",cY="Called assertTrue with '",cj="Expected value to be a map but found ",ck="The function did not raise an exception!",ch="Expected value to be undefined but found ",ci="Expected value to be a DOM element but found  '",cf="Expected value to be a regular expression but found ",cg="' to implement the interface '",cd="Expected value to be null but found ",ce="Invalid argument 'type'",cr="Called assert with 'false'",cs="Assertion error! ",cE="Expected value to be a string but found ",cA="null",cM="' but found '",cH="' must must be a key of the map '",cU="The String '",cR="Expected value not to be undefined but found ",cw="qx.util.ColorUtil",cX=": ",cW="The raised exception does not have the expected type! ",cV=") not fired.",cv="qx.core.Assert",cy="Expected value to be typeof object but found ",cz="' (identical) but found '",cC="' must have any of the values defined in the array '",cF="Expected value to be a number but found ",cI="Called assertFalse with '",cO="]",cT="Expected value to be a qooxdoo object but found ",cl="' arguments.",cm="Expected value not to be null but found ",cx="Array[",cL="' does not match the regular expression '",cK="' to be not identical with '",cJ="' arguments but found '",cQ="', which cannot be converted to a CSS color!",cP="Expected object '",cG="qx.core.AssertionError",cN="Expected value to be a boolean but found ",bP="))!",cS="Expected value to be a qooxdoo widget but found ",cn="Expected value '%1' to be in the range '%2'..'%3'!",co="Expected value to be typeof '",cB="Expected value to be typeof function but found ",bQ="Expected value to be an integer but found ",bR="Called fail().",cu="The parameter 're' must be a string or a regular expression.",cp="Expected value to be a number >= 0 but found ",cq="Expected value to be instanceof '",ct="Wrong number of arguments given. Expected '",cD="object";
qx.Class.define(cv,{statics:{__oy:true,__oz:function(n,o){var p=cc;

for(var i=1,l=arguments.length;i<l;i++){p=p+this.__oA(arguments[i]);
}var r=cs+n+cX+p;

if(this.__oy){qx.Bootstrap.error(r);
}
if(qx.Class.isDefined(cG)){var q=new qx.core.AssertionError(n,p);

if(this.__oy){qx.Bootstrap.error("Stack trace: \n"+q.getStackTrace());
}throw q;
}else{throw new Error(r);
}},__oA:function(bk){var bl;

if(bk===null){bl=cA;
}else if(qx.lang.Type.isArray(bk)&&bk.length>10){bl=cx+bk.length+cO;
}else if((bk instanceof Object)&&(bk.toString==null)){bl=qx.lang.Json.stringify(bk,null,2);
}else{try{bl=bk.toString();
}catch(e){bl=cc;
}}return bl;
},assert:function(L,M){L==true||this.__oz(M||cc,cr);
},fail:function(Q){this.__oz(Q||cc,bR);
},assertTrue:function(bG,bH){(bG===true)||this.__oz(bH||cc,cY,bG,bY);
},assertFalse:function(bq,br){(bq===false)||this.__oz(br||cc,cI,bq,bY);
},assertEquals:function(I,J,K){I==J||this.__oz(K||cc,bX,I,cM,J,ca);
},assertNotEquals:function(bx,by,bz){bx!=by||this.__oz(bz||cc,bX,bx,dc,by,ca);
},assertIdentical:function(dO,dP,dQ){dO===dP||this.__oz(dQ||cc,bX,dO,cz,dP,ca);
},assertNotIdentical:function(j,k,m){j!==k||this.__oz(m||cc,bX,j,cK,k,ca);
},assertNotUndefined:function(bD,bE){bD!==undefined||this.__oz(bE||cc,cR,bD,cb);
},assertUndefined:function(g,h){g===undefined||this.__oz(h||cc,ch,g,cb);
},assertNotNull:function(bo,bp){bo!==null||this.__oz(bp||cc,cm,bo,cb);
},assertNull:function(bs,bt){bs===null||this.__oz(bt||cc,cd,bs,cb);
},assertJsonEquals:function(T,U,V){this.assertEquals(qx.lang.Json.stringify(T),qx.lang.Json.stringify(U),V);
},assertMatch:function(dj,dk,dl){this.assertString(dj);
this.assert(qx.lang.Type.isRegExp(dk)||qx.lang.Type.isString(dk),cu);
dj.search(dk)>=0||this.__oz(dl||cc,cU,dj,cL,dk.toString(),ca);
},assertArgumentsCount:function(s,t,u,v){var w=s.length;
(w>=t&&w<=u)||this.__oz(v||cc,ct,t,db,u,cJ,arguments.length,cl);
},assertEventFired:function(du,event,dv,dw,dx){var dz=false;
var dy=function(e){if(dw){dw.call(du,e);
}dz=true;
};
var dA=du.addListener(event,dy,du);
dv.call();
dz===true||this.__oz(dx||cc,bT,event,cV);
du.removeListenerById(dA);
},assertEventNotFired:function(C,event,D,E){var G=false;
var F=function(e){G=true;
};
var H=C.addListener(event,F,C);
D.call();
G===false||this.__oz(E||cc,bT,event,de);
C.removeListenerById(H);
},assertException:function(bK,bL,bM,bN){var bL=bL||Error;
var bO;

try{this.__oy=false;
bK();
}catch(a){bO=a;
}finally{this.__oy=true;
}
if(bO==null){this.__oz(bN||cc,ck);
}bO instanceof bL||this.__oz(bN||cc,cW,bL);

if(bM){this.assertMatch(bO.toString(),bM,bN);
}},assertInArray:function(bA,bB,bC){bB.indexOf(bA)!==-1||this.__oz(bC||cc,dh,bA,cC,bB,bY);
},assertArrayEquals:function(bu,bv,bw){this.assertArray(bu,bw);
this.assertArray(bv,bw);
this.assertEquals(bu.length,bv.length,bw);

for(var i=0;i<bu.length;i++){this.assertIdentical(bu[i],bv[i],bw);
}},assertKeyInMap:function(N,O,P){O[N]!==undefined||this.__oz(P||cc,dh,N,cH,O,bY);
},assertFunction:function(dJ,dK){qx.lang.Type.isFunction(dJ)||this.__oz(dK||cc,cB,dJ,cb);
},assertString:function(R,S){qx.lang.Type.isString(R)||this.__oz(S||cc,cE,R,cb);
},assertBoolean:function(bI,bJ){qx.lang.Type.isBoolean(bI)||this.__oz(bJ||cc,cN,bI,cb);
},assertNumber:function(dH,dI){(qx.lang.Type.isNumber(dH)&&isFinite(dH))||this.__oz(dI||cc,cF,dH,cb);
},assertPositiveNumber:function(bg,bh){(qx.lang.Type.isNumber(bg)&&isFinite(bg)&&bg>=0)||this.__oz(bh||cc,cp,bg,cb);
},assertInteger:function(bb,bc){(qx.lang.Type.isNumber(bb)&&isFinite(bb)&&bb%1===0)||this.__oz(bc||cc,bQ,bb,cb);
},assertPositiveInteger:function(dL,dM){var dN=(qx.lang.Type.isNumber(dL)&&isFinite(dL)&&dL%1===0&&dL>=0);
dN||this.__oz(dM||cc,dd,dL,cb);
},assertInRange:function(W,X,Y,ba){(W>=X&&W<=Y)||this.__oz(ba||cc,qx.lang.String.format(cn,[W,X,Y]));
},assertObject:function(bd,be){var bf=bd!==null&&(qx.lang.Type.isObject(bd)||typeof bd===cD);
bf||this.__oz(be||cc,cy,(bd),cb);
},assertArray:function(bm,bn){qx.lang.Type.isArray(bm)||this.__oz(bn||cc,df,bm,cb);
},assertMap:function(dD,dE){qx.lang.Type.isObject(dD)||this.__oz(dE||cc,cj,dD,cb);
},assertRegExp:function(bi,bj){qx.lang.Type.isRegExp(bi)||this.__oz(bj||cc,cf,bi,cb);
},assertType:function(z,A,B){this.assertString(A,ce);
typeof (z)===A||this.__oz(B||cc,co,A,di,z,cb);
},assertInstance:function(b,c,d){var f=c.classname||c+cc;
b instanceof c||this.__oz(d||cc,cq,f,di,b,cb);
},assertInterface:function(dU,dV,dW){qx.Class.implementsInterface(dU,dV)||this.__oz(dW||cc,cP,dU,cg,dV,ca);
},assertCssColor:function(dm,dn,dp){var dq=qx.Class.getByName(cw);

if(!dq){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var ds=dq.stringToRgb(dm);

try{var dr=dq.stringToRgb(dn);
}catch(bF){this.__oz(dp||cc,bS,dm,bW,ds.join(bV),bU,dn,cQ);
}var dt=ds[0]==dr[0]&&ds[1]==dr[1]&&ds[2]==dr[2];
dt||this.__oz(dp||cc,bS,ds,bW,ds.join(bV),bU,dn,bW,dr.join(bV),bP);
},assertElement:function(dF,dG){!!(dF&&dF.nodeType===1)||this.__oz(dG||cc,ci,dF,ca);
},assertQxObject:function(dB,dC){this.__oB(dB,dg)||this.__oz(dC||cc,cT,dB,cb);
},assertQxWidget:function(x,y){this.__oB(x,da)||this.__oz(y||cc,cS,x,cb);
},__oB:function(dR,dS){if(!dR){return false;
}var dT=dR.constructor;

while(dT){if(dT.classname===dS){return true;
}dT=dT.superclass;
}return false;
}}});
})();
(function(){var D='',C='"',B=':',A=']',z='null',y=': ',x='object',w='function',u=',',t='\n',bn='\\u',bm=',\n',bl='0000',bk='string',bj="Cannot stringify a recursive object.",bi='0',bh='-',bg='}',bf='String',be='Boolean',K='\\\\',L='\\f',I='\\t',J='{\n',G='[]',H="qx.lang.JsonImpl",E='Z',F='\\n',M='Object',N='{}',U='@',S='.',X='(',W='Array',ba='T',Y='\\r',P='{',bd='JSON.parse',bc=' ',bb='[',O='Number',Q=')',R='[\n',T='\\"',V='\\b';
qx.Class.define(H,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__oC:null,__oD:null,__oE:null,__oF:null,stringify:function(d,e,f){this.__oC=D;
this.__oD=D;
this.__oF=[];

if(qx.lang.Type.isNumber(f)){var f=Math.min(10,Math.floor(f));

for(var i=0;i<f;i+=1){this.__oD+=bc;
}}else if(qx.lang.Type.isString(f)){if(f.length>10){f=f.slice(0,10);
}this.__oD=f;
}if(e&&(qx.lang.Type.isFunction(e)||qx.lang.Type.isArray(e))){this.__oE=e;
}else{this.__oE=null;
}return this.__oG(D,{'':d});
},__oG:function(m,o){var r=this.__oC,p,s=o[m];
if(s&&qx.lang.Type.isFunction(s.toJSON)){s=s.toJSON(m);
}else if(qx.lang.Type.isDate(s)){s=this.dateToJSON(s);
}if(typeof this.__oE===w){s=this.__oE.call(o,m,s);
}
if(s===null){return z;
}
if(s===undefined){return undefined;
}switch(qx.lang.Type.getClass(s)){case bf:return this.__oH(s);
case O:return isFinite(s)?String(s):z;
case be:return String(s);
case W:this.__oC+=this.__oD;
p=[];

if(this.__oF.indexOf(s)!==-1){throw new TypeError(bj);
}this.__oF.push(s);
var length=s.length;

for(var i=0;i<length;i+=1){p[i]=this.__oG(i,s)||z;
}this.__oF.pop();
if(p.length===0){var q=G;
}else if(this.__oC){q=R+this.__oC+p.join(bm+this.__oC)+t+r+A;
}else{q=bb+p.join(u)+A;
}this.__oC=r;
return q;
case M:this.__oC+=this.__oD;
p=[];

if(this.__oF.indexOf(s)!==-1){throw new TypeError(bj);
}this.__oF.push(s);
if(this.__oE&&typeof this.__oE===x){var length=this.__oE.length;

for(var i=0;i<length;i+=1){var k=this.__oE[i];

if(typeof k===bk){var v=this.__oG(k,s);

if(v){p.push(this.__oH(k)+(this.__oC?y:B)+v);
}}}}else{for(var k in s){if(Object.hasOwnProperty.call(s,k)){var v=this.__oG(k,s);

if(v){p.push(this.__oH(k)+(this.__oC?y:B)+v);
}}}}this.__oF.pop();
if(p.length===0){var q=N;
}else if(this.__oC){q=J+this.__oC+p.join(bm+this.__oC)+t+r+bg;
}else{q=P+p.join(u)+bg;
}this.__oC=r;
return q;
}},dateToJSON:function(g){var h=function(n){return n<10?bi+n:n;
};
var l=function(n){var b=h(n);
return n<100?bi+b:b;
};
return isFinite(g.valueOf())?g.getUTCFullYear()+bh+h(g.getUTCMonth()+1)+bh+h(g.getUTCDate())+ba+h(g.getUTCHours())+B+h(g.getUTCMinutes())+B+h(g.getUTCSeconds())+S+l(g.getUTCMilliseconds())+E:null;
},__oH:function(bv){var bw={'\b':V,'\t':I,'\n':F,'\f':L,'\r':Y,'"':T,'\\':K};
var bx=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bx.lastIndex=0;

if(bx.test(bv)){return C+
bv.replace(bx,function(a){var c=bw[a];
return typeof c===bk?c:bn+(bl+a.charCodeAt(0).toString(16)).slice(-4);
})+C;
}else{return C+bv+C;
}},parse:function(bo,bp){var bq=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;
if(bq.test(bo)){bo=bo.replace(bq,function(a){return bn+(bl+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bo.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,U).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,A).replace(/(?:^|:|,)(?:\s*\[)+/g,D))){var j=eval(X+bo+Q);
return typeof bp===w?this.__oI({'':j},D,bp):j;
}throw new SyntaxError(bd);
},__oI:function(br,bs,bt){var bu=br[bs];

if(bu&&typeof bu===x){for(var k in bu){if(Object.hasOwnProperty.call(bu,k)){var v=this.__oI(bu,k,bt);

if(v!==undefined){bu[k]=v;
}else{delete bu[k];
}}}}return bt.call(br,bs,bu);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var d="qx.ui.core.ISingleSelection",c="qx.event.type.Data";
qx.Interface.define(d,{events:{"changeSelection":c},members:{getSelection:function(){return true;
},setSelection:function(a){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(b){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="changeSelection",f="changeSelected",d="__oJ",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__oJ:null,getSelection:function(){var l=this.__oK().getSelected();

if(l){return [l];
}else{return [];
}},setSelection:function(m){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
switch(m.length){case 0:this.resetSelection();
break;
case 1:this.__oK().setSelected(m[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+m.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__oK().resetSelected();
},isSelected:function(j){return this.__oK().isSelected(j);
},isSelectionEmpty:function(){return this.__oK().isSelectionEmpty();
},getSelectables:function(){return this.__oK().getSelectables();
},_onChangeSelected:function(e){var b=e.getData();
var a=e.getOldData();
b==null?b=[]:b=[b];
a==null?a=[]:a=[a];
this.fireDataEvent(g,b,a);
},__oK:function(){if(this.__oJ==null){var i=this;
this.__oJ=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(k){if(i._isItemSelectable){return i._isItemSelectable(k);
}else{return k.isEnabled()&&k.isVisible();
}}});
this.__oJ.addListener(f,this._onChangeSelected,this);
}this.__oJ.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__oJ;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var g="change",f="qx.event.type.Data",e="__oL",d="qx.ui.form.MModelSelection",c="changeSelection";
qx.Mixin.define(d,{construct:function(){this.__oL=new qx.data.Array();
this.__oL.addListener(g,this.__oO,this);
this.addListener(c,this.__oN,this);
},events:{changeModelSelection:f},members:{__oL:null,__oM:false,__oN:function(){if(this.__oM){return;
}var s=this.getSelection();
var q=[];

for(var i=0;i<s.length;i++){var t=s[i];
var r=t.getModel?t.getModel():null;

if(r!==null){q.push(r);
}}this.setModelSelection(q);
},__oO:function(){this.__oM=true;
var k=this.getSelectables();
var m=[];
var l=this.__oL.toArray();

for(var i=0;i<l.length;i++){var o=l[i];

for(var j=0;j<k.length;j++){var p=k[j];
var h=p.getModel?p.getModel():null;

if(o===h){m.push(p);
break;
}}}this.setSelection(m);
this.__oM=false;
var n=this.getSelection();

if(!qx.lang.Array.equals(n,m)){this.__oN();
}},getModelSelection:function(){return this.__oL;
},setModelSelection:function(a){if(!a){this.__oL.removeAll();
return;
}{};
a.unshift(this.__oL.getLength());
a.unshift(0);
var b=this.__oL.splice.apply(this.__oL,a);
b.dispose();
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var E="Boolean",D="changeValue",C="_applyAllowEmptySelection",B="_applyInvalidMessage",A="qx.ui.form.RadioGroup",z="_applyValid",y="",x="changeRequired",w="changeValid",v="changeEnabled",s="changeInvalidMessage",u="changeSelection",t="_applyEnabled",r="String",q="__oP";
qx.Class.define(A,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(P){arguments.callee.base.call(this);
this.__oP=[];
this.addListener(u,this.__oQ,this);

if(P!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:E,apply:t,event:v,init:true},wrap:{check:E,init:true},allowEmptySelection:{check:E,init:false,apply:C},valid:{check:E,init:true,apply:z,event:w},required:{check:E,init:false,event:x},invalidMessage:{check:r,init:y,event:s,apply:B}},members:{__oP:null,getItems:function(){return this.__oP;
},add:function(I){var J=this.__oP;
var K;

for(var i=0,l=arguments.length;i<l;i++){K=arguments[i];

if(qx.lang.Array.contains(J,K)){continue;
}K.addListener(D,this._onItemChangeChecked,this);
J.push(K);
K.setGroup(this);
if(K.getValue()){this.setSelection([K]);
}}if(!this.isAllowEmptySelection()&&J.length>0&&!this.getSelection()[0]){this.setSelection([J[0]]);
}},remove:function(o){var p=this.__oP;

if(qx.lang.Array.contains(p,o)){qx.lang.Array.remove(p,o);
if(o.getGroup()===this){o.resetGroup();
}o.removeListener(D,this._onItemChangeChecked,this);
if(o.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__oP;
},_onItemChangeChecked:function(e){var a=e.getTarget();

if(a.getValue()){this.setSelection([a]);
}else if(this.getSelection()[0]==a){this.resetSelection();
}},_applyInvalidMessage:function(b,c){for(var i=0;i<this.__oP.length;i++){this.__oP[i].setInvalidMessage(b);
}},_applyValid:function(N,O){for(var i=0;i<this.__oP.length;i++){this.__oP[i].setValid(N);
}},_applyEnabled:function(F,G){var H=this.__oP;

if(F==null){for(var i=0,l=H.length;i<l;i++){H[i].resetEnabled();
}}else{for(var i=0,l=H.length;i<l;i++){H[i].setEnabled(F);
}}},_applyAllowEmptySelection:function(m,n){if(!m&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var h=this.getSelection()[0];
var k=this.__oP;
var j=k.indexOf(h);

if(j==-1){return;
}var i=0;
var length=k.length;
if(this.getWrap()){j=(j+1)%length;
}else{j=Math.min(j+1,length-1);
}
while(i<length&&!k[j].getEnabled()){j=(j+1)%length;
i++;
}this.setSelection([k[j]]);
},selectPrevious:function(){var d=this.getSelection()[0];
var g=this.__oP;
var f=g.indexOf(d);

if(f==-1){return;
}var i=0;
var length=g.length;
if(this.getWrap()){f=(f-1+length)%length;
}else{f=Math.max(f-1,0);
}
while(i<length&&!g[f].getEnabled()){f=(f-1+length)%length;
i++;
}this.setSelection([g[f]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__oQ:function(e){var M=e.getData()[0];
var L=e.getOldData()[0];

if(L){L.setValue(false);
}
if(M){M.setValue(true);
}}},destruct:function(){this._disposeArray(q);
}});
})();
(function(){var g="__oT",f="__oR",e="qx.ui.core.SingleSelectionManager",d="changeSelected",c="__oS",b="qx.event.type.Data",a="Boolean";
qx.Class.define(e,{extend:qx.core.Object,construct:function(p){arguments.callee.base.call(this);
{};
this.__oR=p;
},events:{"changeSelected":b},properties:{allowEmptySelection:{check:a,init:true,apply:g}},members:{__oS:null,__oR:null,getSelected:function(){return this.__oS;
},setSelected:function(h){if(!this.__oV(h)){throw new Error("Could not select "+h+", because it is not a child element!");
}this.__oU(h);
},resetSelected:function(){this.__oU(null);
},isSelected:function(q){if(!this.__oV(q)){throw new Error("Could not check if "+q+" is selected,"+" because it is not a child element!");
}return this.__oS===q;
},isSelectionEmpty:function(){return this.__oS==null;
},getSelectables:function(){var t=this.__oR.getItems();
var u=[];

for(var i=0;i<t.length;i++){if(this.__oR.isItemSelectable(t[i])){u.push(t[i]);
}}return u;
},__oT:function(n,o){if(!n){this.__oU(this.__oS);
}},__oU:function(j){var m=this.__oS;
var l=j;

if(l!=null&&m===l){return;
}
if(!this.isAllowEmptySelection()&&l==null){var k=this.getSelectables()[0];

if(k){l=k;
}}this.__oS=l;
this.fireDataEvent(d,l,m);
},__oV:function(r){var s=this.__oR.getItems();

for(var i=0;i<s.length;i++){if(s[i]===r){return true;
}}return false;
}},destruct:function(){if(this.__oR.toHashCode){this._disposeObjects(f);
}else{this.__oR=null;
}this._disposeObjects(c);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(s,t,name){if((s instanceof qx.core.Object)&&qx.Class.hasMixin(s.constructor,qx.data.marshal.MEventBubbling)){var u=qx.lang.Function.bind(this.__oW,this,name);
var v=s.addListener(c,u,this);
s.setUserData(d,v);
}if(t!=null&&t.getUserData&&t.getUserData(d)!=null){t.removeListenerById(t.getUserData(d));
}},__oW:function(name,e){var r=e.getData();
var n=r.value;
var l=r.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(r.name.indexOf){var q=r.name.indexOf(f)!=-1?r.name.indexOf(f):r.name.length;
var o=r.name.indexOf(h)!=-1?r.name.indexOf(h):r.name.length;

if(q<o){var k=r.name.substring(0,q);
var p=r.name.substring(q+1,r.name.length);

if(p[0]!=h){p=f+p;
}var m=name+h+k+g+p;
}else if(o<q){var k=r.name.substring(0,o);
var p=r.name.substring(o,r.name.length);
var m=name+h+k+g+p;
}else{var m=name+h+r.name+g;
}}else{var m=name+h+r.name+g;
}}else{var m=name+f+r.name;
}this.fireDataEvent(c,{value:n,name:m,old:l});
}}});
})();
(function(){var Q="change",P="add",O="remove",N="order",M="",L="qx.data.Array",K="?",J="changeBubble",I="qx.event.type.Event",H="number",F="changeLength",G="qx.event.type.Data";
qx.Class.define(L,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(h){arguments.callee.base.call(this);
if(h==undefined){this.__oX=[];
}else if(arguments.length>1){this.__oX=[];

for(var i=0;i<arguments.length;i++){this.__oX.push(arguments[i]);
}}else if(typeof h==H){this.__oX=new Array(h);
}else if(h instanceof Array){this.__oX=qx.lang.Array.clone(h);
}else{this.__oX=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__oX.length;i++){this._applyEventPropagation(this.__oX[i],null,i);
}this.__oY();
},events:{"change":G,"changeLength":I},members:{__oX:null,concat:function(t){if(t){var u=this.__oX.concat(t);
}else{var u=this.__oX.concat();
}return new qx.data.Array(u);
},join:function(C){return this.__oX.join(C);
},pop:function(){var bd=this.__oX.pop();
this.__oY();
this._applyEventPropagation(null,bd,this.length-1);
this.fireDataEvent(Q,{start:this.length-1,end:this.length-1,type:O,items:[bd]},null);
return bd;
},push:function(q){for(var i=0;i<arguments.length;i++){this.__oX.push(arguments[i]);
this.__oY();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(Q,{start:this.length-1,end:this.length-1,type:P,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__oX.reverse();
this.fireDataEvent(Q,{start:0,end:this.length-1,type:N,items:null},null);
},shift:function(){var p=this.__oX.shift();
this.__oY();
this._applyEventPropagation(null,p);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:O,items:[p]},null);
return p;
},slice:function(D,E){return new qx.data.Array(this.__oX.slice(D,E));
},splice:function(R,S,T){var ba=this.__oX.length;
var W=this.__oX.splice.apply(this.__oX,arguments);
if(this.__oX.length!=ba){this.__oY();
}var X=S>0;
var U=arguments.length>2;
var V=null;

if(X||U){if(this.__oX.length>ba){var Y=P;
}else if(this.__oX.length<ba){var Y=O;
V=W;
}else{var Y=N;
}this.fireDataEvent(Q,{start:R,end:this.length-1,type:Y,items:V},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,R+i);
}this.fireDataEvent(J,{value:this,name:K,old:W});
for(var i=0;i<W.length;i++){this._applyEventPropagation(null,W[i],i);
}return (new qx.data.Array(W));
},sort:function(j){this.__oX.sort.apply(this.__oX,arguments);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:N,items:null},null);
},unshift:function(bg){for(var i=arguments.length-1;i>=0;i--){this.__oX.unshift(arguments[i]);
this.__oY();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:P,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__oX;
},getItem:function(c){return this.__oX[c];
},setItem:function(e,f){var g=this.__oX[e];
this.__oX[e]=f;
this._applyEventPropagation(f,g,e);
if(this.length!=this.__oX.length){this.__oY();
}this.fireDataEvent(Q,{start:e,end:e,type:P,items:[f]},null);
},getLength:function(){return this.length;
},indexOf:function(m){return this.__oX.indexOf(m);
},toString:function(){if(this.__oX!=null){return this.__oX.toString();
}return M;
},contains:function(k){return this.__oX.indexOf(k)!==-1;
},copy:function(){return this.concat();
},insertAt:function(n,o){this.splice(n,0,o);
},insertBefore:function(y,z){var A=this.indexOf(y);

if(A==-1){this.push(z);
}else{this.splice(A,0,z);
}},insertAfter:function(v,w){var x=this.indexOf(v);

if(x==-1||x==(this.length-1)){this.push(w);
}else{this.splice(x+1,0,w);
}},removeAt:function(a){return this.splice(a,1)[0];
},removeAll:function(){for(var i=0;i<this.__oX.length;i++){this._applyEventPropagation(null,this.__oX[i],i);
}var bc=this.getLength();
var bb=this.__oX.concat();
this.__oX.length=0;
this.__oY();
this.fireDataEvent(Q,{start:0,end:bc-1,type:O,items:bb},null);
},append:function(l){{};
for(var i=0;i<l.length;i++){this._applyEventPropagation(l[i],null,this.__oX.length+i);
}Array.prototype.push.apply(this.__oX,l);
this.__oY();
},remove:function(be){var bf=this.indexOf(be);

if(bf!=-1){this.splice(bf,1);
return be;
}},equals:function(d){if(this.length!==d.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==d.getItem(i)){return false;
}}return true;
},sum:function(){var b=0;

for(var i=0;i<this.length;i++){b+=this.getItem(i);
}return b;
},max:function(){var B=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>B){B=this.getItem(i);
}}return B===undefined?null:B;
},min:function(){var bh=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bh){bh=this.getItem(i);
}}return bh===undefined?null:bh;
},forEach:function(r,s){for(var i=0;i<this.__oX.length;i++){r.call(s,this.__oX[i]);
}},__oY:function(){this.length=this.__oX.length;
this.fireEvent(F,qx.event.type.Event);
}},destruct:function(){this.__oX=null;
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
(function(){var o="Count",n="by Count",m="Classname",l="inspector.objects.CountModel";
qx.Class.define(l,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},members:{getData:function(c){var g=c.qx.core.ObjectRegistry.getRegistry();
var e={};

for(var d in g){if(e[g[d].classname]==undefined){e[g[d].classname]=0;
}e[g[d].classname]++;
}var k=[];

for(var f in e){k.push([e[f],f]);
}k.sort(function(a,b){return a[0]<b[0];
});
var h=qx.core.Init.getApplication().getExcludes();

for(var i=k.length-1;i>=0;i--){for(var j=0;j<h.length;j++){if(k[i][0]===h[j].toHashCode()){k.splice(i,1);
}}}return k;
},getColumns:function(){return [o,m];
},getName:function(){return n;
},selectionEnabled:function(){return false;
}}});
})();
(function(){var u="pressed",t="abandoned",s="hovered",r="checked",q="Space",p="Enter",o="mouseup",n="mousedown",m="Boolean",l="_applyValue",f="mouseover",k="mouseout",i="qx.ui.form.ToggleButton",d="keydown",c="changeValue",h="button",g="keyup",j="execute";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(v,w){arguments.callee.base.call(this,v,w);
this.addListener(f,this._onMouseOver);
this.addListener(k,this._onMouseOut);
this.addListener(n,this._onMouseDown);
this.addListener(o,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(g,this._onKeyUp);
this.addListener(j,this._onExecute,this);
},properties:{appearance:{refine:true,init:h},focusable:{refine:true,init:true},value:{check:m,nullable:true,event:c,apply:l,init:false}},members:{_applyValue:function(a,b){a?this.addState(r):this.removeState(r);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(s);

if(this.hasState(t)){this.removeState(t);
this.addState(u);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(s);

if(this.hasState(u)){if(!this.getValue()){this.removeState(u);
}this.addState(t);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(t);
this.addState(u);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(t)){this.removeState(t);
}else if(this.hasState(u)){this.execute();
}this.removeState(u);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case p:case q:this.removeState(t);
this.addState(u);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(u)){return;
}
switch(e.getKeyIdentifier()){case p:case q:this.removeState(t);
this.execute();
this.removeState(u);
e.stopPropagation();
}}}});
})();
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){arguments.callee.base.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var f="qx.ui.form.RadioGroup",e="_applyGroup",d="qx.ui.toolbar.RadioButton";
qx.Class.define(d,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:f,apply:e,nullable:true}},members:{_applyValue:function(a,b){arguments.callee.base.call(this,a,b);

if(a){var c=this.getGroup();

if(c){c.setSelection([this]);
}}},_applyGroup:function(g,h){if(h){h.remove(this);
}
if(g){g.add(this);
}}}});
})();
(function(){var x="instance",v="]",u='id',t=" [",s='instance',r="changeOpen",q="_getChildren",p="getChildren",o="inspector/images/components/image.png",n="qx.ui.form.TextField",bG="qx.ui.layout.DockLayout",bF="inspector/images/components/radiobutton.png",bE="_structureToggle",bD="qx.ui.pageview.buttonview.Button",bC="inspector/images/components/verticallayout.png",bB="qx.ui.groupbox.RadioGroupBox",bA="inspector/images/components/horizontallayout.png",bz="inspector/images/components/label.png",by="qx.ui.groupbox.CheckGroupBox",bx="qx.ui.treevirtual.TreeVirtual",E="qx.ui.basic.Image",F="qx.ui.basic.Label",C="qx.ui.pageview.tabview.Button",D="inspector/images/components/toolbar.png",A="qx.ui.toolbar.ToolBar",B="inspector/images/components/window.png",y="_reloadButton",z="_tree",M="inspector/images/components/button.png",N="inspector/images/components/textarea.png",bb="qx.ui.form.RadioButton",W="qx.ui.window.Window",bj="changeSelection",be="inspector/images/components/table.png",bt="qx.ui.tree.Tree",bo="qx.ui.layout.HBox",R="qx.ui.form.ComboBox",bw="inspector/images/components/textfield.png",bv="inspector/images/components/groupbox.png",bu="icon/22/actions/view-refresh.png",Q="inspector/images/components/checkbox.png",T="qx.ui.form.CheckBox",V="Display internal widget structure.",Y="qx.ui.table.Table",bc="Reload the window.",bf="qx.ui.layout.VBox",bl="qx.ui.menu.Layout",bq="inspector/images/components/atom.png",G="qx.ui.toolbar.Button",H="qx.ui.menu.Button",S="qx.ui.layout.CanvasLayout",bi="inspector/images/components/spinner.png",bh="qx.ui.layout.FlowLayout",bg="qx.ui.menu.Menu",bn="Widgets",bm="qx.ui.form.Button",bd="click",bk="inspector.widgets.WidgetsWindow",f="inspector/images/components/tree.png",bp="qx.ui.layout.GridLayout",I="qx.ui.pageview.radioview.Button",J="qx.ui.form.TextArea",X="qx.ui.groupbox.Groupbox",g="qx.ui.menubar.Button",h="inspector/images/components/menu.png",P="qx.ui.menubar.MenuBar",K="inspector/images/components/layout.png",L="qx.ui.splitpane.SplitPane",O="inspector/images/components/combobox.png",ba="qx.ui.basic.Atom",bs="inspector/images/components/splitpane.png",br="icon/22/actions/document-properties.png",U="qx.ui.form.Spinner";
qx.Class.define(bk,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,bn);
this._reloadButton=new qx.ui.toolbar.Button(null,bu);
this._reloadButton.setToolTipText(bc);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(bd,function(){this.load();
},this);
this._toolbar.addSpacer();
this._structureToggle=new qx.ui.toolbar.CheckBox(null,br);
this._structureToggle.setToolTipText(V);
this._toolbar.add(this._structureToggle);
this._structureToggle.setValue(false);
this._tree=new qx.ui.tree.Tree();
this._tree.setDecorator(null);
this._tree.setRootOpenClose(true);
this.add(this._tree,{flex:1});
this._tree.addListener(bj,function(e){if(e.getData()[0]){var cf=e.getData()[0].getUserData(x);
qx.core.Init.getApplication().select(cf,this);
}},this);
},members:{setInitSizeAndPosition:function(){var ce=qx.bom.Viewport.getWidth()-this.getWidth();
var cd=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(ce,30+cd);
this.setHeight(cd);
},select:function(ca){this._selectWidgetInTheTree(ca);
},getSelection:function(){var a=this._tree.getSelection()[0];
if(a!=null){return a.getUserData(x);
}return null;
},load:function(bW){if(bW==undefined){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
}else{this._iFrameWindow=bW;
}var bX=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
var bY=new qx.ui.tree.TreeFolder(bX.classname+t+bX.toHashCode()+v);
bY.setUserData(x,bX);
this._tree.setRoot(bY);
this._fillTree(bX,bY,2);
},_fillTree:function(bM,bN,bO){var bT=bN.getItems(false,true);
var bP=this._structureToggle.isValue()?q:p;
if(bM[bP]==undefined){if(bP===p){bP=q;

if(bM[bP]==undefined){return;
}}else{return;
}}if(bM[bP]().length==0){if(bT.length>1){for(var m=0;m<bT.length;m++){if(bT[m+1]==this._tree.getSelection()[0]){this._tree.resetSelection();
}bN.removeAt(0);
}}}var bU=qx.core.Init.getApplication().getExcludes();
var i=0;
bO--;
for(var k=0;k<bM[bP]().length;k++){var bR=bM[bP]()[k];
var bQ=false;

for(var j=0;j<bU.length;j++){if(bR==bU[j]){bQ=true;
break;
}}if(bQ){continue;
}if(bT[i]==null){var bV=new qx.ui.tree.TreeFolder(bR.classname+t+bR.toHashCode()+v);
bV.setIcon(this._getIconPath(bR.classname));
bN.addAt(bV,i);
bV.setUserData(s,bR);
bV.setUserData(u,bR.toHashCode());
bV.addListener(r,this._treeOpenHandler,this);
}else{if(bT[i].getLabel()==bR.classname+t+bR.toHashCode()+v){var bV=bT[i];
}else{if(bN.getItems()[i]!=null){if(bN.getItems()[i]==this._tree.getSelection()[0]){this._tree.resetSelection();
}}bN.removeAt(i);
var bV=new qx.ui.tree.TreeFolder(bR.classname+t+bR.toHashCode()+v);
bN.addAt(bV,i);
bV.setUserData(s,bR);
bV.setUserData(u,bR.toHashCode());
bV.addListener(r,this._treeOpenHandler,this);
}}if(bO>0){this._fillTree(bR,bV,bO);
}if(i+1==bM[bP]().length){var bS=bN.getItems(false,true);
if(bS.length-2!=i){for(var l=i+1;l<bS.length;l++){bN.removeAt(i+1);
}}}i++;
}},_treeOpenHandler:function(e){if(e.getData()){var cb=e.getTarget().getUserData(s);
this._fillTree(cb,e.getTarget(),2);
}},_getIconPath:function(cc){switch(cc){case E:return o;
case F:return bz;
case ba:return bq;
case bt:case bx:return f;
case bg:return h;
case bm:case H:case g:case bD:case I:case C:case G:return M;
case S:case bG:case bh:case bp:case bl:return K;
case bf:return bC;
case bo:return bA;
case A:case P:return D;
case W:return B;
case X:case by:case bB:return bv;
case U:return bi;
case R:return O;
case n:return bw;
case J:return N;
case L:return bs;
case Y:return be;
case T:return Q;
case bb:return bF;
default:return null;
}},_selectWidgetInTheTree:function(bH){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
if(!(bH instanceof this._iFrameWindow.qx.ui.core.Widget)){return;
}var bJ=[];
var w=bH;

if(this._structureToggle.isValue()){while(w.getLayoutParent()!=null){bJ.push(w);
w=w.getLayoutParent();
}}else{while(w.getParent!=undefined&&w.getParent()!=null||w.getLayoutParent()!=null){if(w.getParent!=undefined&&w.getParent()!=null){bJ.push(w);
w=w.getParent();
}else if(w.getLayoutParent()!=null){bJ.push(w);
w=w.getLayoutParent();
}}}for(var i=bJ.length-1;i>0;i--){this._openFolder(bJ[i]);
}this._tree.getRoot().setOpen(true);
var bL=bH.toHashCode();
var bI=this._tree.getItems(true,true);
var bK=false;
if(this._tree.getRoot().getUserData(x).toHashCode()==bL){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return;
}for(var i=0;i<bI.length;i++){if(bI[i].getUserData(u)==bL){bK=true;
this._tree.resetSelection();
this._tree.addToSelection(bI[i]);
break;
}}if(!bK){this._tree.resetSelection();
}},_openFolder:function(b){var d=b.toHashCode();
var c=this._tree.getItems(true,true);
if(this._tree.getRoot().getUserData(x).toHashCode()==d){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return ;
}for(var i=0;i<c.length;i++){if(c[i].getUserData(u)==d){c[i].setOpen(true);
break;
}}}},destruct:function(){this._iFrameWindow=null;
this._disposeObjects(y,bE,z);
}});
})();
(function(){var O="scrollbar-y",N="scrollbar-x",M="pane",L="auto",K="corner",J="on",I="changeVisibility",H="scroll",G="_computeScrollbars",F="off",y="scrollY",E="qx.ui.core.scroll.AbstractScrollArea",B="abstract",w="update",v="scrollX",A="mousewheel",z="scrollbarY",C="scrollbarX",u="horizontal",D="scrollarea",x="vertical";
qx.Class.define(E,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:B,construct:function(){arguments.callee.base.call(this);
var n=new qx.ui.layout.Grid();
n.setColumnFlex(0,1);
n.setRowFlex(0,1);
this._setLayout(n);
this.addListener(A,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:D},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[L,J,F],init:L,themeable:true,apply:G},scrollbarY:{check:[L,J,F],init:L,themeable:true,apply:G},scrollbar:{group:[C,z]}},members:{_createChildControlImpl:function(V){var W;

switch(V){case M:W=new qx.ui.core.scroll.ScrollPane();
W.addListener(w,this._computeScrollbars,this);
W.addListener(v,this._onScrollPaneX,this);
W.addListener(y,this._onScrollPaneY,this);
this._add(W,{row:0,column:0});
break;
case N:W=this._createScrollBar(u);
W.setMinWidth(0);
W.exclude();
W.addListener(H,this._onScrollBarX,this);
W.addListener(I,this._onChangeScrollbarXVisibility,this);
this._add(W,{row:1,column:0});
break;
case O:W=this._createScrollBar(x);
W.setMinHeight(0);
W.exclude();
W.addListener(H,this._onScrollBarY,this);
W.addListener(I,this._onChangeScrollbarYVisibility,this);
this._add(W,{row:0,column:1});
break;
case K:W=new qx.ui.core.Widget();
W.setWidth(0);
W.setHeight(0);
W.exclude();
this._add(W,{row:1,column:1});
break;
}return W||arguments.callee.base.call(this,V);
},getPaneSize:function(){return this.getChildControl(M).getInnerSize();
},getItemTop:function(X){return this.getChildControl(M).getItemTop(X);
},getItemBottom:function(ba){return this.getChildControl(M).getItemBottom(ba);
},getItemLeft:function(p){return this.getChildControl(M).getItemLeft(p);
},getItemRight:function(U){return this.getChildControl(M).getItemRight(U);
},scrollToX:function(Y){qx.ui.core.queue.Manager.flush();
this.getChildControl(N).scrollTo(Y);
},scrollByX:function(P){qx.ui.core.queue.Manager.flush();
this.getChildControl(N).scrollBy(P);
},getScrollX:function(){var T=this.getChildControl(N,true);
return T?T.getPosition():0;
},scrollToY:function(t){qx.ui.core.queue.Manager.flush();
this.getChildControl(O).scrollTo(t);
},scrollByY:function(q){qx.ui.core.queue.Manager.flush();
this.getChildControl(O).scrollBy(q);
},getScrollY:function(){var o=this.getChildControl(O,true);
return o?o.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(M).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(M).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var R=this._isChildControlVisible(N);
var S=this._isChildControlVisible(O);
var Q=(S)?this.getChildControl(O,true):(R?this.getChildControl(N,true):null);

if(Q){Q.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var l=this._isChildControlVisible(N);
var m=this._isChildControlVisible(O);

if(!l){this.scrollToX(0);
}l&&m?this._showChildControl(K):this._excludeChildControl(K);
},_onChangeScrollbarYVisibility:function(e){var r=this._isChildControlVisible(N);
var s=this._isChildControlVisible(O);

if(!s){this.scrollToY(0);
}r&&s?this._showChildControl(K):this._excludeChildControl(K);
},_computeScrollbars:function(){var h=this.getChildControl(M);
var content=h.getChildren()[0];

if(!content){this._excludeChildControl(N);
this._excludeChildControl(O);
return;
}var a=this.getInnerSize();
var g=h.getInnerSize();
var d=h.getScrollSize();
if(!g||!d){return;
}var i=this.getScrollbarX();
var j=this.getScrollbarY();

if(i===L&&j===L){var f=d.width>a.width;
var k=d.height>a.height;
if((f||k)&&!(f&&k)){if(f){k=d.height>g.height;
}else if(k){f=d.width>g.width;
}}}else{var f=i===J;
var k=j===J;
if(d.width>(f?g.width:a.width)&&i===L){f=true;
}
if(d.height>(f?g.height:a.height)&&j===L){k=true;
}}if(f){var c=this.getChildControl(N);
c.show();
c.setMaximum(Math.max(0,d.width-g.width-1));
c.setKnobFactor(g.width/d.width);
}else{this._excludeChildControl(N);
}
if(k){var b=this.getChildControl(O);
b.show();
b.setMaximum(Math.max(0,d.height-g.height-1));
b.setKnobFactor(g.height/d.height);
}else{this._excludeChildControl(O);
}}}});
})();
(function(){var b="qx.ui.core.IMultiSelection";
qx.Interface.define(b,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(a){return arguments.length==1;
}}});
})();
(function(){var L="single",K="Boolean",J="one",I="changeSelection",H="mouseup",G="mousedown",F="losecapture",E="multi",D="_applyQuickSelection",C="mouseover",v="_applySelectionMode",B="__pa",y="_applyDragSelection",u="qx.ui.core.MMultiSelectionHandling",t="removeItem",x="keypress",w="qx.event.type.Data",z="addItem",s="additive",A="mousemove";
qx.Mixin.define(u,{construct:function(){var n=this.SELECTION_MANAGER;
var m=this.__pa=new n(this);
this.addListener(G,m.handleMouseDown,m);
this.addListener(H,m.handleMouseUp,m);
this.addListener(C,m.handleMouseOver,m);
this.addListener(A,m.handleMouseMove,m);
this.addListener(F,m.handleLoseCapture,m);
this.addListener(x,m.handleKeyPress,m);
this.addListener(z,m.handleAddItem,m);
this.addListener(t,m.handleRemoveItem,m);
m.addListener(I,this._onSelectionChange,this);
},events:{"changeSelection":w},properties:{selectionMode:{check:[L,E,s,J],init:L,apply:v},dragSelection:{check:K,init:false,apply:y},quickSelection:{check:K,init:false,apply:D}},members:{__pa:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong all items."));
this.trace();
}this.__pa.selectAll();
},isSelected:function(h){if(!qx.ui.core.Widget.contains(this,h)){throw new Error("Could not test if "+h+" is selected, because it is not a child element!");
}return this.__pa.isItemSelected(h);
},addToSelection:function(g){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,g)){throw new Error("Could not add + "+g+" to selection, because it is not a child element!");
}this.__pa.addItem(g);
},removeFromSelection:function(l){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,l)){throw new Error("Could not remove "+l+" from selection, because it is not a child element!");
}this.__pa.removeItem(l);
},selectRange:function(j,k){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__pa.selectItemRange(j,k);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selectiong."));
this.trace();
}this.__pa.clearSelection();
},setSelection:function(q){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<q.length;i++){if(!qx.ui.core.Widget.contains(this,q[i])){throw new Error("Could not select "+q[i]+", because it is not a child element!");
}}
if(q.length===0){this.resetSelection();
}else{var r=this.getSelection();

if(!qx.lang.Array.equals(r,q)){this.__pa.replaceSelection(q);
}}},getSelection:function(){return this.__pa.getSelection();
},getSortedSelection:function(){return this.__pa.getSortedSelection();
},isSelectionEmpty:function(){return this.__pa.isSelectionEmpty();
},getSelectionContext:function(){return this.__pa.getSelectionContext();
},_getManager:function(){return this.__pa;
},getSelectables:function(){return this.__pa.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__pa.invertSelection();
},_getLeadItem:function(){var c=this.__pa.getMode();

if(c===L||c===J){return this.__pa.getSelectedItem();
}else{return this.__pa.getLeadItem();
}},_applySelectionMode:function(a,b){this.__pa.setMode(a);
},_applyDragSelection:function(o,p){this.__pa.setDrag(o);
},_applyQuickSelection:function(d,f){this.__pa.setQuick(d);
},_onSelectionChange:function(e){this.fireDataEvent(I,e.getData());
}},destruct:function(){this._disposeObjects(B);
}});
})();
(function(){var cf="one",ce="single",cd="selected",cc="additive",cb="multi",ca="PageUp",bY="under",bX="Left",bW="lead",bV="Down",cD="Up",cC="Boolean",cB="PageDown",cA="anchor",cz="End",cy="Home",cx="Right",cw="right",cv="click",cu="above",cm="left",cn="Escape",ck="__pe",cl="A",ci="Space",cj="_applyMode",cg="interval",ch="changeSelection",co="qx.event.type.Data",cp="quick",cr="key",cq="abstract",ct="drag",cs="qx.ui.core.selection.Abstract";
qx.Class.define(cs,{type:cq,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__pb={};
},events:{"changeSelection":co},properties:{mode:{check:[ce,cb,cc,cf],init:ce,apply:cj},drag:{check:cC,init:false},quick:{check:cC,init:false}},members:{__pc:0,__pd:0,__pe:null,__pf:null,__pg:null,__ph:null,__pi:null,__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,__po:null,__pp:null,__pq:null,__pr:null,__ps:null,__pb:null,__pt:null,__pu:null,getSelectionContext:function(){return this.__pr;
},selectAll:function(){var bG=this.getMode();

if(bG==ce||bG==cf){throw new Error("Can not select all items in selection mode: "+bG);
}this._selectAllItems();
this._fireChange();
},selectItem:function(B){this._setSelectedItem(B);
var C=this.getMode();

if(C!==ce&&C!==cf){this._setLeadItem(B);
this._setAnchorItem(B);
}this._scrollItemIntoView(B);
this._fireChange();
},addItem:function(bC){var bD=this.getMode();

if(bD===ce||bD===cf){this._setSelectedItem(bC);
}else{if(!this._getAnchorItem()){this._setAnchorItem(bC);
}this._setLeadItem(bC);
this._addToSelection(bC);
}this._scrollItemIntoView(bC);
this._fireChange();
},removeItem:function(bP){this._removeFromSelection(bP);

if(this.getMode()===cf&&this.isSelectionEmpty()){var bQ=this._getFirstSelectable();

if(bQ){this.addItem(bQ);
}if(bQ==bP){return;
}}
if(this.getLeadItem()==bP){this._setLeadItem(null);
}
if(this._getAnchorItem()==bP){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(n,o){var p=this.getMode();

if(p==ce||p==cf){throw new Error("Can not select multiple items in selection mode: "+p);
}this._selectItemRange(n,o);
this._setAnchorItem(n);
this._setLeadItem(o);
this._scrollItemIntoView(o);
this._fireChange();
},clearSelection:function(){if(this.getMode()==cf){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(k){var m=this.getMode();

if(m==cf||m===ce){if(k.length>1){throw new Error("Could not select more than one items in mode: "+m+"!");
}
if(k.length==1){this.selectItem(k[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(k);
}},getSelectedItem:function(){var bE=this.getMode();

if(bE===ce||bE===cf){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__pb);
},getSortedSelection:function(){var bS=this.getSelectables();
var bR=qx.lang.Object.getValues(this.__pb);
bR.sort(function(a,b){return bS.indexOf(a)-bS.indexOf(b);
});
return bR;
},isItemSelected:function(bT){var bU=this._selectableToHashCode(bT);
return this.__pb[bU]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__pb);
},invertSelection:function(){var cL=this.getMode();

if(cL===ce||cL===cf){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cK=this.getSelectables();

for(var i=0;i<cK.length;i++){this._toggleInSelection(cK[i]);
}this._fireChange();
},_setLeadItem:function(bN){var bO=this.__ps;

if(bO!==null){this._styleSelectable(bO,bW,false);
}
if(bN!==null){this._styleSelectable(bN,bW,true);
}this.__ps=bN;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__ps!==null?this.__ps:null;
},_setAnchorItem:function(cE){var cF=this.__pt;

if(cF){this._styleSelectable(cF,cA,false);
}
if(cE){this._styleSelectable(cE,cA,true);
}this.__pt=cE;
},_getAnchorItem:function(){return this.__pt!==null?this.__pt:null;
},_isSelectable:function(bk){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bF=event.getTarget();
return this._isSelectable(bF)?bF:null;
},_selectableToHashCode:function(cG){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cR,cS,cT){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bM){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bH){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(z,A){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bb){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bl,bm){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(D,E){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(x,y){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cU,cV){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cU===cf){var cW=this._getFirstSelectable();

if(cW){this._setSelectedItem(cW);
this._scrollItemIntoView(cW);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var cQ=this.getMode();

if(cQ!==cf&&cQ!==ce){return;
}var cP=this._getSelectableFromMouseEvent(event);

if(cP===null){return;
}this._setSelectedItem(cP);
this._fireChange(cp);
},handleMouseDown:function(event){var by=this._getSelectableFromMouseEvent(event);

if(by===null){return;
}var bA=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bx=event.isShiftPressed();
if(this.isItemSelected(by)&&!bx&&!bA&&!this.getDrag()){this.__pu=by;
return;
}else{this.__pu=null;
}this._scrollItemIntoView(by);
switch(this.getMode()){case ce:case cf:this._setSelectedItem(by);
break;
case cc:this._setLeadItem(by);
this._setAnchorItem(by);
this._toggleInSelection(by);
break;
case cb:this._setLeadItem(by);
if(bx){var bz=this._getAnchorItem();

if(bz===null){bz=this._getFirstSelectable();
this._setAnchorItem(bz);
}this._selectItemRange(bz,by,bA);
}else if(bA){this._setAnchorItem(by);
this._toggleInSelection(by);
}else{this._setAnchorItem(by);
this._setSelectedItem(by);
}break;
}var bB=this.getMode();

if(this.getDrag()&&bB!==ce&&bB!==cf&&!bx&&!bA){this.__pi=this._getLocation();
this.__pf=this._getScroll();
this.__pj=event.getDocumentLeft()+this.__pf.left;
this.__pk=event.getDocumentTop()+this.__pf.top;
this.__pl=true;
this._capture();
}this._fireChange(cv);
},handleMouseUp:function(event){var bf=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bc=event.isShiftPressed();

if(!bf&&!bc&&this.__pu){var bd=this._getSelectableFromMouseEvent(event);

if(bd===null||!this.isItemSelected(bd)){return;
}var be=this.getMode();

if(be===cc){this._removeFromSelection(bd);
}else{this._setSelectedItem(bd);

if(this.getMode()===cb){this._setLeadItem(bd);
this._setAnchorItem(bd);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__pl){return;
}this.__pm=event.getDocumentLeft();
this.__pn=event.getDocumentTop();
var bj=this.__pm+this.__pf.left;

if(bj>this.__pj){this.__po=1;
}else if(bj<this.__pj){this.__po=-1;
}else{this.__po=0;
}var bi=this.__pn+this.__pf.top;

if(bi>this.__pk){this.__pp=1;
}else if(bi<this.__pk){this.__pp=-1;
}else{this.__pp=0;
}var location=this.__pi;

if(this.__pm<location.left){this.__pc=this.__pm-location.left;
}else if(this.__pm>location.right){this.__pc=this.__pm-location.right;
}else{this.__pc=0;
}
if(this.__pn<location.top){this.__pd=this.__pn-location.top;
}else if(this.__pn>location.bottom){this.__pd=this.__pn-location.bottom;
}else{this.__pd=0;
}if(!this.__pe){this.__pe=new qx.event.Timer(100);
this.__pe.addListener(cg,this._onInterval,this);
}this.__pe.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var bL=e.getData();

if(this.getMode()===cf&&this.isSelectionEmpty()){this.addItem(bL);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__pl){return;
}if(this.__pq){this._fireChange(cv);
}delete this.__pl;
delete this.__pg;
delete this.__ph;
this._releaseCapture();
if(this.__pe){this.__pe.stop();
}},_onInterval:function(e){this._scrollBy(this.__pc,this.__pd);
this.__pf=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var W=this._getDimension();
var P=Math.max(0,Math.min(this.__pm-this.__pi.left,W.width))+this.__pf.left;
var O=Math.max(0,Math.min(this.__pn-this.__pi.top,W.height))+this.__pf.top;
if(this.__pg===P&&this.__ph===O){return;
}this.__pg=P;
this.__ph=O;
var Y=this._getAnchorItem();
var R=Y;
var U=this.__po;
var X,Q;

while(U!==0){X=U>0?this._getRelatedSelectable(R,cw):this._getRelatedSelectable(R,cm);
if(X!==null){Q=this._getSelectableLocationX(X);
if((U>0&&Q.left<=P)||(U<0&&Q.right>=P)){R=X;
continue;
}}break;
}var V=this.__pp;
var T,S;

while(V!==0){T=V>0?this._getRelatedSelectable(R,bY):this._getRelatedSelectable(R,cu);
if(T!==null){S=this._getSelectableLocationY(T);
if((V>0&&S.top<=O)||(V<0&&S.bottom>=O)){R=T;
continue;
}}break;
}var ba=this.getMode();

if(ba===cb){this._selectItemRange(Y,R);
}else if(ba===cc){if(this.isItemSelected(Y)){this._selectItemRange(Y,R,true);
}else{this._deselectItemRange(Y,R);
}this._setAnchorItem(R);
}this._fireChange(ct);
},__pv:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var bt,bs;
var bv=event.getKeyIdentifier();
var bu=this.getMode();
var bp=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bq=event.isShiftPressed();
var br=false;

if(bv===cl&&bp){if(bu!==ce&&bu!==cf){this._selectAllItems();
br=true;
}}else if(bv===cn){if(bu!==ce&&bu!==cf){this._clearSelection();
br=true;
}}else if(bv===ci){var bo=this.getLeadItem();

if(bo&&!bq){if(bp||bu===cc){this._toggleInSelection(bo);
}else{this._setSelectedItem(bo);
}br=true;
}}else if(this.__pv[bv]){br=true;

if(bu===ce||bu==cf){bt=this._getSelectedItem();
}else{bt=this.getLeadItem();
}
if(bt!==null){switch(bv){case cy:bs=this._getFirstSelectable();
break;
case cz:bs=this._getLastSelectable();
break;
case cD:bs=this._getRelatedSelectable(bt,cu);
break;
case bV:bs=this._getRelatedSelectable(bt,bY);
break;
case bX:bs=this._getRelatedSelectable(bt,cm);
break;
case cx:bs=this._getRelatedSelectable(bt,cw);
break;
case ca:bs=this._getPage(bt,true);
break;
case cB:bs=this._getPage(bt,false);
break;
}}else{switch(bv){case cy:case bV:case cx:case cB:bs=this._getFirstSelectable();
break;
case cz:case cD:case bX:case ca:bs=this._getLastSelectable();
break;
}}if(bs!==null){switch(bu){case ce:case cf:this._setSelectedItem(bs);
break;
case cc:this._setLeadItem(bs);
break;
case cb:if(bq){var bw=this._getAnchorItem();

if(bw===null){this._setAnchorItem(bw=this._getFirstSelectable());
}this._setLeadItem(bs);
this._selectItemRange(bw,bs,bp);
}else{this._setAnchorItem(bs);
this._setLeadItem(bs);

if(!bp){this._setSelectedItem(bs);
}}break;
}this._scrollItemIntoView(bs);
}}
if(br){event.stop();
this._fireChange(cr);
}},_selectAllItems:function(){var j=this.getSelectables();

for(var i=0,l=j.length;i<l;i++){this._addToSelection(j[i]);
}},_clearSelection:function(){var bg=this.__pb;

for(var bh in bg){this._removeFromSelection(bg[bh]);
}this.__pb={};
},_selectItemRange:function(F,G,H){var K=this._getSelectableRange(F,G);
if(!H){var J=this.__pb;
var L=this.__pw(K);

for(var I in J){if(!L[I]){this._removeFromSelection(J[I]);
}}}for(var i=0,l=K.length;i<l;i++){this._addToSelection(K[i]);
}},_deselectItemRange:function(bI,bJ){var bK=this._getSelectableRange(bI,bJ);

for(var i=0,l=bK.length;i<l;i++){this._removeFromSelection(bK[i]);
}},__pw:function(cM){var cO={};
var cN;

for(var i=0,l=cM.length;i<l;i++){cN=cM[i];
cO[this._selectableToHashCode(cN)]=cN;
}return cO;
},_getSelectedItem:function(){for(var bn in this.__pb){return this.__pb[bn];
}return null;
},_setSelectedItem:function(cH){if(this._isSelectable(cH)){var cI=this.__pb;
var cJ=this._selectableToHashCode(cH);

if(!cI[cJ]||qx.lang.Object.hasMinLength(cI,2)){this._clearSelection();
this._addToSelection(cH);
}}},_addToSelection:function(f){var g=this._selectableToHashCode(f);

if(!this.__pb[g]&&this._isSelectable(f)){this.__pb[g]=f;
this._styleSelectable(f,cd,true);
this.__pq=true;
}},_toggleInSelection:function(M){var N=this._selectableToHashCode(M);

if(!this.__pb[N]){this.__pb[N]=M;
this._styleSelectable(M,cd,true);
}else{delete this.__pb[N];
this._styleSelectable(M,cd,false);
}this.__pq=true;
},_removeFromSelection:function(c){var d=this._selectableToHashCode(c);

if(this.__pb[d]!=null){delete this.__pb[d];
this._styleSelectable(c,cd,false);
this.__pq=true;
}},_replaceMultiSelection:function(q){var t=false;
var w,v;
var r={};

for(var i=0,l=q.length;i<l;i++){w=q[i];

if(this._isSelectable(w)){v=this._selectableToHashCode(w);
r[v]=w;
}}var s=w;
var u=this.__pb;

for(var v in u){if(r[v]){delete r[v];
}else{w=u[v];
delete u[v];
this._styleSelectable(w,cd,false);
t=true;
}}for(var v in r){w=u[v]=r[v];
this._styleSelectable(w,cd,true);
t=true;
}if(!t){return false;
}this._scrollItemIntoView(s);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__pq=true;
this._fireChange();
},_fireChange:function(h){if(this.__pq){this.__pr=h||null;
this.fireDataEvent(ch,this.getSelection());
delete this.__pq;
}}},destruct:function(){this._disposeObjects(ck);
this.__pb=this.__pu=this.__pt=null;
this.__ps=null;
}});
})();
(function(){var K="vertical",J="under",I="above",H="qx.ui.core.selection.Widget",G="left",F="right";
qx.Class.define(H,{extend:qx.ui.core.selection.Abstract,construct:function(L){arguments.callee.base.call(this);
this.__px=L;
},members:{__px:null,_isSelectable:function(f){return f.isEnabled()&&f.isVisible()&&f.getLayoutParent()===this.__px;
},_selectableToHashCode:function(z){return z.$$hash;
},_styleSelectable:function(g,h,j){j?g.addState(h):g.removeState(h);
},_capture:function(){this.__px.capture();
},_releaseCapture:function(){this.__px.releaseCapture();
},_getWidget:function(){return this.__px;
},_getLocation:function(){var s=this.__px.getContentElement().getDomElement();
return s?qx.bom.element.Location.get(s):null;
},_getDimension:function(){return this.__px.getInnerSize();
},_getSelectableLocationX:function(C){var D=C.getBounds();

if(D){return {left:D.left,right:D.left+D.width};
}},_getSelectableLocationY:function(c){var d=c.getBounds();

if(d){return {top:d.top,bottom:d.top+d.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(A,B){},_scrollItemIntoView:function(k){this.__px.scrollChildIntoView(k);
},getSelectables:function(){var N=this.__px.getChildren();
var O=[];
var M;

for(var i=0,l=N.length;i<l;i++){M=N[i];

if(M.isEnabled()&&M.isVisible()){O.push(M);
}}return O;
},_getSelectableRange:function(t,u){if(t===u){return [t];
}var y=this.__px.getChildren();
var v=[];
var x=false;
var w;

for(var i=0,l=y.length;i<l;i++){w=y[i];

if(w===t||w===u){if(x){v.push(w);
break;
}else{x=true;
}}
if(x&&w.isEnabled()&&w.isVisible()){v.push(w);
}}return v;
},_getFirstSelectable:function(){var e=this.__px.getChildren();

for(var i=0,l=e.length;i<l;i++){if(e[i].isEnabled()&&e[i].isVisible()){return e[i];
}}return null;
},_getLastSelectable:function(){var E=this.__px.getChildren();

for(var i=E.length-1;i>0;i--){if(E[i].isEnabled()&&E[i].isVisible()){return E[i];
}}return null;
},_getRelatedSelectable:function(m,n){var q=this.__px.getOrientation()===K;
var p=this.__px.getChildren();
var o=p.indexOf(m);
var r;

if((q&&n===I)||(!q&&n===G)){for(var i=o-1;i>=0;i--){r=p[i];

if(r.isEnabled()&&r.isVisible()){return r;
}}}else if((q&&n===J)||(!q&&n===F)){for(var i=o+1;i<p.length;i++){r=p[i];

if(r.isEnabled()&&r.isVisible()){return r;
}}}return null;
},_getPage:function(a,b){if(b){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__px=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.isVisible()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var e=this._getWidget();
return {left:e.getScrollX(),top:e.getScrollY()};
},_scrollBy:function(b,c){var d=this._getWidget();
d.scrollByX(b);
d.scrollByY(c);
},_getPage:function(f,g){var l=this.getSelectables();
var length=l.length;
var o=l.indexOf(f);
if(o===-1){throw new Error("Invalid lead item: "+f);
}var h=this._getWidget();
var q=h.getScrollY();
var innerHeight=h.getInnerSize().height;
var top,k,p;

if(g){var n=q;
var i=o;
while(1){for(;i>=0;i--){top=h.getItemTop(l[i]);
if(top<n){p=i+1;
break;
}}if(p==null){var r=this._getFirstSelectable();
return r==f?null:r;
}if(p>=o){n-=innerHeight+q-h.getItemBottom(f);
p=null;
continue;
}return l[p];
}}else{var m=innerHeight+q;
var i=o;
while(1){for(;i<length;i++){k=h.getItemBottom(l[i]);
if(k>m){p=i-1;
break;
}}if(p==null){var j=this._getLastSelectable();
return j==f?null:j;
}if(p<=o){m+=h.getItemTop(f)-q;
p=null;
continue;
}return l[p];
}}}}});
})();
(function(){var j="right",h="above",g="left",f="under",e="qx.ui.tree.SelectionManager";
qx.Class.define(e,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(k){var l=k.getBounds();

if(l){var top=this._getWidget().getItemTop(k);
return {top:top,bottom:top+l.height};
}},_isSelectable:function(a){return a instanceof qx.ui.tree.AbstractTreeItem&&a.isEnabled()&&a.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var c=this._getWidget();
var d=[];

if(c.getRoot()!=null){var b=c.getRoot().getItems(true,false,c.getHideRoot());

for(var i=0;i<b.length;i++){if(this._isSelectable(b[i])){d.push(b[i]);
}}}return d;
},_getSelectableRange:function(m,n){if(m===n){return [m];
}var o=this.getSelectables();
var p=o.indexOf(m);
var q=o.indexOf(n);

if(p<0||q<0){return [];
}
if(p<q){return o.slice(p,q+1);
}else{return o.slice(q,p+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var r=this.getSelectables();

if(r.length>0){return r[r.length-1];
}else{return null;
}},_getRelatedSelectable:function(s,t){var u=this._getWidget();
var v=null;

switch(t){case h:v=u.getPreviousSiblingOf(s,false);
break;
case f:v=u.getNextSiblingOf(s,false);
break;
case g:case j:break;
}
if(!v){return null;
}
if(this._isSelectable(v)){return v;
}else{return this._getRelatedSelectable(v,t);
}}}});
})();
(function(){var u="dblclick",t="click",s="Boolean",r="excluded",q="visible",p="qx.event.type.Data",o="_applyOpenMode",n="Space",m="Left",l="Enter",I="changeOpenMode",H="_applyRootOpenClose",G="changeSelection",F="qx.ui.tree.Tree",E="tree",D="_applyHideRoot",C="changeRoot",B="_applyRoot",A="keypress",z="none",x="__py",y="pane",v="Right",w="qx.ui.tree.AbstractTreeItem";
qx.Class.define(F,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__py=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(y).add(this.__py);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(G,this._onChangeSelection,this);
this.addListener(A,this._onKeyPress,this);
},events:{addItem:p,removeItem:p},properties:{openMode:{check:[t,u,z],init:u,apply:o,event:I,themeable:true},root:{check:w,init:null,nullable:true,event:C,apply:B},hideRoot:{check:s,init:false,apply:D},rootOpenClose:{check:s,init:false,apply:H},appearance:{refine:true,init:E},focusable:{refine:true,init:true}},members:{__py:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__py;
},_applyRoot:function(J,K){var L=this.getChildrenContainer();

if(K){L.remove(K);

if(K.hasChildren()){L.remove(K.getChildrenContainer());
}}
if(J){L.add(J);

if(J.hasChildren()){L.add(J.getChildrenContainer());
}J.setVisibility(this.getHideRoot()?r:q);
J.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(bb,bc){var bd=this.getRoot();

if(!bd){return;
}bd.setVisibility(bb?r:q);
bd.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(N,O){var P=this.getRoot();

if(!P){return;
}P.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__py;
},getNextSiblingOf:function(Q,R,S){if((R!==false||Q.isOpen())&&!(S==true)&&Q.hasChildren()){return Q.getChildren()[0];
}
while(Q){var parent=Q.getParent();

if(!parent){return null;
}var U=parent.getChildren();
var T=U.indexOf(Q);

if(T>-1&&T<U.length-1){return U[T+1];
}Q=parent;
}return null;
},getPreviousSiblingOf:function(a,b,c){var parent=a.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==a){return null;
}}}else{if(a==this.getRoot()){return null;
}}var g=parent.getChildren();
var d=g.indexOf(a);

if(d>0){var f=g[d-1];

while((b!==false||f.isOpen())&&!(c==true)&&f.hasChildren()){var h=f.getChildren();
f=h[h.length-1];
}return f;
}else{return parent;
}},getItems:function(j,k){if(this.getRoot()!=null){return this.getRoot().getItems(j,k,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(M){while(M){if(M==this){return null;
}
if(M instanceof qx.ui.tree.AbstractTreeItem){return M;
}M=M.getLayoutParent();
}return null;
},_applyOpenMode:function(X,Y){if(Y==t){this.removeListener(t,this._onOpen,this);
}else if(Y==u){this.removeListener(u,this._onOpen,this);
}
if(X==t){this.addListener(t,this._onOpen,this);
}else if(X==u){this.addListener(u,this._onOpen,this);
}},_onOpen:function(e){var ba=this.getTreeItem(e.getTarget());

if(!ba||!ba.isOpenable()){return;
}ba.setOpen(!ba.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var W=e.getData();
for(var i=0;i<W.length;i++){var V=W[i];
while(V.getParent()!=null){V=V.getParent();
V.setOpen(true);
}}},_onKeyPress:function(e){var be=this._getLeadItem();

if(be!==null){switch(e.getKeyIdentifier()){case m:if(be.isOpenable()&&be.isOpen()){be.setOpen(false);
}break;
case v:if(be.isOpenable()&&!be.isOpen()){be.setOpen(true);
}break;
case l:case n:if(be.isOpenable()){be.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(x);
}});
})();
(function(){var bt="open",bs="auto",br="middle",bq="icon",bp="label",bo="changeOpen",bn="excluded",bm="visible",bl="String",bk="opened",bM="always",bL="qx.ui.tree.AbstractTreeItem",bK="addItem",bJ="Boolean",bI="Integer",bH="__pz",bG="_applyIndent",bF="__pD",bE="changeOpenSymbolMode",bD="_applyOpenSymbolMode",bA="resize",bB="",by="removeItem",bz="abstract",bw="never",bx="_applyIcon",bu="__pA",bv="_applyOpen",bC="_applyLabel";
qx.Class.define(bL,{extend:qx.ui.core.Widget,type:bz,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__pz=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bJ,init:false,event:bo,apply:bv},openSymbolMode:{check:[bM,bw,bs],init:bs,event:bE,apply:bD},indent:{check:bI,init:19,apply:bG,themeable:true},parent:{check:bL,nullable:true},icon:{check:bl,apply:bx,nullable:true,themeable:true},label:{check:bl,apply:bC,init:bB}},members:{__pz:null,__pA:null,__pB:null,__pC:null,__pD:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(M){var N;

switch(M){case bp:N=new qx.ui.basic.Label().set({alignY:br,value:this.getLabel()});
break;
case bq:N=new qx.ui.basic.Image().set({alignY:br,source:this.getIcon()});
break;
case bt:N=new qx.ui.tree.FolderOpenButton().set({alignY:br});
N.addListener(bo,this._onChangeOpen,this);
N.addListener(bA,this._updateIndent,this);
break;
}return N||arguments.callee.base.call(this,M);
},getTree:function(){var bT=this;

while(bT.getParent()){bT=bT.getParent();
}var bS=bT.getLayoutParent()?bT.getLayoutParent().getLayoutParent():0;

if(bS&&bS instanceof qx.ui.core.scroll.ScrollPane){return bS.getLayoutParent();
}return null;
},addWidget:function(j,k){this._add(j,k);
},addSpacer:function(){if(!this.__pD){this.__pD=new qx.ui.core.Spacer();
}else{this._remove(this.__pD);
}this._add(this.__pD);
},addOpenButton:function(){this._add(this.getChildControl(bt));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bj=this.getChildControl(bq);

if(this.__pC){this._remove(bj);
}this._add(bj);
this.__pC=true;
},addLabel:function(d){var f=this.getChildControl(bp);

if(this.__pB){this._remove(f);
}
if(d){this.setLabel(d);
}else{f.setValue(this.getLabel());
}this._add(f);
this.__pB=true;
},addState:function(Q){arguments.callee.base.call(this,Q);
var S=this._getChildren();

for(var i=0,l=S.length;i<l;i++){var R=S[i];

if(R.addState){S[i].addState(Q);
}}},removeState:function(bN){arguments.callee.base.call(this,bN);
var bP=this._getChildren();

for(var i=0,l=bP.length;i<l;i++){var bO=bP[i];

if(bO.addState){bP[i].removeState(bN);
}}},_applyIcon:function(bf,bg){var bh=this.getChildControl(bq,true);

if(bh){bh.setSource(bf);
}},_applyLabel:function(a,b){var c=this.getChildControl(bp,true);

if(c){c.setValue(a);
}},_applyOpen:function(g,h){if(this.hasChildren()){this.getChildrenContainer().setVisibility(g?bm:bn);
}var open=this.getChildControl(bt,true);

if(open){open.setOpen(g);
}g?this.addState(bk):this.removeState(bk);
},isOpenable:function(){var z=this.getOpenSymbolMode();
return (z===bM||z===bs&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bt,true);

if(!open){return false;
}var bU=this.getTree();

if(!bU.getRootOpenClose()){if(bU.getHideRoot()){if(bU.getRoot()==this.getParent()){return false;
}}else{if(bU.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(T,U){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var P=0;
var open=this.getChildControl(bt,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var O=open.getBounds();

if(O){P=O.width;
}else{return;
}}else{open.exclude();
}}
if(this.__pD){this.__pD.setWidth((this.getLevel()+1)*this.getIndent()-P);
}},_applyIndent:function(bd,be){this._updateIndent();
},getLevel:function(){var H=this.getTree();

if(!H){return;
}var I=this;
var J=-1;

while(I){I=I.getParent();
J+=1;
}if(H.getHideRoot()){J-=1;
}
if(!H.getRootOpenClose()){J-=1;
}return J;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__pA){this.__pA=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?bm:bn});
}return this.__pA;
},hasChildrenContainer:function(){return this.__pA;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__pz;
},hasChildren:function(){return this.__pz?this.__pz.length>0:false;
},getItems:function(m,n,o){if(o!==false){var p=[];
}else{var p=[this];
}var s=this.hasChildren()&&(n!==false||this.isOpen());

if(s){var r=this.getChildren();

if(m===false){p=p.concat(r);
}else{for(var i=0,q=r.length;i<q;i++){p=p.concat(r[i].getItems(m,n,false));
}}}return p;
},recursiveAddToWidgetQueue:function(){var bi=this.getItems(true,true,false);

for(var i=0,l=bi.length;i<l;i++){qx.ui.core.queue.Widget.add(bi[i]);
}},__pE:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(t){var u=this.getChildrenContainer();
var x=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var y=arguments[i];
var w=y.getParent();

if(w){w.remove(y);
}y.setParent(this);
var v=this.hasChildren();
u.add(y);

if(y.hasChildren()){u.add(y.getChildrenContainer());
}this.__pz.push(y);

if(!v){this.__pE();
}
if(x){y.recursiveAddToWidgetQueue();
x.fireNonBubblingEvent(bK,qx.event.type.Data,[y]);
}}
if(x){qx.ui.core.queue.Widget.add(this);
}},addAt:function(B,C){{};

if(C==this.__pz.length){this.add(B);
return;
}var G=B.getParent();

if(G){G.remove(B);
}var E=this.getChildrenContainer();
B.setParent(this);
var F=this.hasChildren();
var D=this.__pz[C];
E.addBefore(B,D);

if(B.hasChildren()){E.addAfter(B.getChildrenContainer(),B);
}qx.lang.Array.insertAt(this.__pz,B,C);

if(!F){this.__pE();
}
if(this.getTree()){B.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bQ,bR){{};
this.addAt(bQ,this.__pz.indexOf(bR));
},addAfter:function(K,L){{};
this.addAt(K,this.__pz.indexOf(L)+1);
},addAtBegin:function(A){this.addAt(A,0);
},remove:function(V){for(var i=0,l=arguments.length;i<l;i++){var ba=arguments[i];

if(this.__pz.indexOf(ba)==-1){this.warn("Cannot remove treeitem '"+ba+"'. It is not a child of this tree item.");
return;
}var W=this.getChildrenContainer();

if(ba.hasChildrenContainer()){var Y=ba.getChildrenContainer();

if(W.getChildren().indexOf(Y)>=0){W.remove(Y);
}}qx.lang.Array.remove(this.__pz,ba);
ba.setParent(null);
W.remove(ba);
}var X=this.getTree();

if(X){X.fireNonBubblingEvent(by,qx.event.type.Data,[ba]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bb){var bc=this.__pz[bb];

if(bc){this.remove(bc);
}},removeAll:function(){for(var i=this.__pz.length-1;i>=0;i--){this.remove(this.__pz[i]);
}}},destruct:function(){this._disposeArray(bH);
this._disposeObjects(bF,bu);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(h,this._onClick);
this.addListener(a,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
},properties:{open:{check:f,init:false,event:g,apply:c}},members:{_applyOpen:function(j,k){j?this.addState(i):this.removeState(i);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
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
(function(){var a="inspector.property.IPropertyListController";
qx.Interface.define(a,{members:{getQxObject:function(){return true;
},setSelectedProperty:function(b){return true;
},getSelectedProperty:function(){return true;
},getInheritedStatus:function(){return true;
},getGroupStatus:function(){return true;
},gotoSelectedWidget:function(){return true;
},getFilter:function(){return true;
}}});
})();
(function(){var m="key",l="classname",k="execute",j="changeValue",i="set",h="qx.version",g="Group by inheritance",f="inspector/images/icons/api.png",d="qx.ui.core.Widget",c="_filter",O="_propertyList",N="_setPropertyToDefaultButton",M="inspector/images/icons/highlight.png",L="http://demo.qooxdoo.org/",K="icon/22/actions/view-refresh.png",J="#",I="_highlightCurrentPropertyButton",H="View",G="get",F="_reloadButton",t="/apiviewer/",u="_setNullButton",r="qx.ui.core.Parent",s="Property",p="inspector/images/icons/setnull.png",q="inspector/images/icons/goto.png",n="qx.ui.core.ClientDocument",o="_menu",v="Group by category",w="Show Inherited Porperties",z="_groupButton",y="~",B="_gotoSelectedPropertyButton",A="_inheritedButton",D="current",C="inspector/images/icons/setinit.png",x=" (Loading...)",E="inspector.property.PropertyWindow";
qx.Class.define(E,{extend:inspector.components.AbstractWindow,implement:inspector.property.IPropertyListController,construct:function(){arguments.callee.base.call(this,s);
this._filter=new inspector.property.Filter();
this._addToolbarButtons();
this._createMainElement();
},statics:{RELOAD_BUTTON_TOOLTIP_TEXT:"Reload the window.",SHOW_API_BUTTON_TOOLTIP_TEXT:"Show the API of the selected object or property.",SET_NULL_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to null.",SET_DEFAULT_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to its initial value.",HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Highlight the currently selected property.",GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Go to the currently selected property.",PROPERTY_CAPTION_TITLE:"Properties"},members:{_propertyList:null,_propertyListFull:null,_propertyListHtmlTable:null,_reloadButton:null,_reloadToolTip:null,_apiButtonToolTip:null,_setNullButton:null,_setNullTooltip:null,_setPropertyToDefaultButton:null,_setPropertyToDefaultTooltip:null,_highlightCurrentPropertyButton:null,_highlightCurrentPropertyTooltip:null,_gotoSelectedPropertyButton:null,_gotoSelectedPropertyTooltip:null,_menu:null,_currentlySelectedProperty:null,_qxObject:null,_showInherited:false,_reloadTimer:null,_filter:null,setInitSizeAndPosition:function(){var W=qx.bom.Viewport.getWidth()-this.getWidth();
var V=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(W,30+2*V);
this.setHeight(V);
},select:function(bv){if(this._qxObject==bv){return;
}this._qxObject=bv;
this.setCaption(arguments.callee.self.PROPERTY_CAPTION_TITLE+x);
var self=this;
window.setTimeout(function(){self._propertyList.build();
if(self._currentlySelectedProperty!=null){var bu=self._currentlySelectedProperty.getUserData(m);
var bt=self._currentlySelectedProperty.getUserData(l);
if(self._propertyList.containsProperty(bu,bt)){self._switchPropertyButtons();
}else{self._currentlySelectedProperty=null;
self._setNullButton.setEnabled(false);
self._setPropertyToDefaultButton.setEnabled(false);
self._highlightCurrentPropertyButton.setEnabled(false);
self._gotoSelectedPropertyButton.setEnabled(false);
}}self.setCaption(inspector.property.PropertyWindow.PROPERTY_CAPTION_TITLE);
},0);
},getSelection:function(){return this._qxObject;
},getQxObject:function(){return this._qxObject;
},setSelectedProperty:function(P){this._currentlySelectedProperty=P;
this._switchPropertyButtons();
},getSelectedProperty:function(){return this._currentlySelectedProperty;
},getInheritedStatus:function(){return this._showInherited;
},getGroupStatus:function(){return this._groupButton.getValue();
},gotoSelectedWidget:function(){this._gotoSelectedPropertyButtonEventListener();
},getFilter:function(){return this._filter;
},_createMainElement:function(){this._propertyList=new inspector.property.PropertyList(this);
var b=new qx.ui.container.Scroll();
this.add(b,{flex:1});
b.add(this._propertyList);
},_addToolbarButtons:function(){this._createMenu();
var Y=new qx.ui.toolbar.MenuButton(H,null,this._menu);
this._toolbar.add(Y);
this._toolbar.addSeparator();
this._reloadButton=new qx.ui.toolbar.Button(null,K);
this._reloadButton.setToolTipText(arguments.callee.self.RELOAD_BUTTON_TOOLTIP_TEXT);
this._reloadButton.addListener(k,function(){this._propertyList.build();
},this);
this._toolbar.add(this._reloadButton);
this._toolbar.addSeparator();
var X=new qx.ui.toolbar.Button(null,f);
X.setToolTipText(arguments.callee.self.SHOW_API_BUTTON_TOOLTIP_TEXT);
X.addListener(k,this._onOpenApiWindow,this);
this._toolbar.add(X);
this._toolbar.addSpacer();
this._setNullButton=new qx.ui.toolbar.Button(null,p);
this._setNullButton.setToolTipText(arguments.callee.self.SET_NULL_BUTTON_TOOLTIP_TEXT);
this._setNullButton.addListener(k,this._setNullButtonEventListener,this);
this._setNullButton.setEnabled(false);
this._toolbar.add(this._setNullButton);
this._setPropertyToDefaultButton=new qx.ui.toolbar.Button(null,C);
this._setPropertyToDefaultButton.setToolTipText(arguments.callee.self.SET_DEFAULT_BUTTON_TOOLTIP_TEXT);
this._setPropertyToDefaultButton.addListener(k,this._setPropertyToDefaultButtonEventListener,this);
this._setPropertyToDefaultButton.setEnabled(false);
this._toolbar.add(this._setPropertyToDefaultButton);
this._highlightCurrentPropertyButton=new qx.ui.toolbar.Button(null,M);
this._highlightCurrentPropertyButton.setToolTipText(arguments.callee.self.HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._highlightCurrentPropertyButton.addListener(k,this._highlightCurrentPropertyButtonEventListener,this);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton=new qx.ui.toolbar.Button(null,q);
this._gotoSelectedPropertyButton.setToolTipText(arguments.callee.self.GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._gotoSelectedPropertyButton.addListener(k,this._gotoSelectedPropertyButtonEventListener,this);
this._gotoSelectedPropertyButton.setEnabled(false);
},_createMenu:function(){this._menu=new qx.ui.menu.Menu();
this._inheritedButton=new qx.ui.menu.CheckBox(w);
this._inheritedButton.addListener(j,this._switchInheritedStatus,this);
this._inheritedButton.setValue(true);
this._menu.add(this._inheritedButton);
this._menu.addSeparator();
var a=new qx.ui.menu.RadioButton(g);
a.addListener(j,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(true);
},this);
a.setValue(true);
this._menu.add(a);
this._groupButton=new qx.ui.menu.RadioButton(v);
this._groupButton.addListener(j,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(false);
},this);
this._menu.add(this._groupButton);
new qx.ui.form.RadioGroup(a,this._groupButton);
},_switchPropertyButtons:function(){if(this._currentlySelectedProperty==null){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var bd=this._currentlySelectedProperty.getUserData(l);
var be=this._currentlySelectedProperty.getUserData(m);
var bb=qx.core.Init.getApplication().getIframeWindowObject();
var bg=bb.qx.Class.getByName(bd).$$properties;
var bf=bg[be];
if(bf.nullable){this._setNullButton.setEnabled(true);
}else{this._setNullButton.setEnabled(false);
}if(bf.init){this._setPropertyToDefaultButton.setEnabled(true);
}else{this._setPropertyToDefaultButton.setEnabled(false);
}if(be!=undefined){try{var bh=G+qx.lang.String.firstUp(be);
if(this._qxObject[bh]==undefined){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var bc=this._qxObject[bh].call(this._qxObject);
if((bf.check==d||bf.check==r)&&(this._qxObject.classname!=n)&&(bc!=null)){this._highlightCurrentPropertyButton.setEnabled(true);
this._gotoSelectedPropertyButton.setEnabled(true);
}else{this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}catch(ba){alert("Error during reading the selected Property: "+ba);
this._currentlySelectedProperty.setBackgroundColor(null);
this._currentlySelectedProperty=null;
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}},_onOpenApiWindow:function(){if(this._qxObject!=null){if(this._currentlySelectedProperty!=null){var br=this._currentlySelectedProperty.getUserData(l);
var bs=this._currentlySelectedProperty.getUserData(m);
this._openApiWindow(br,bs);
}else{this._openApiWindow(this._qxObject.classname);
}}else{this._openApiWindow();
}},_openApiWindow:function(Q,R){var S=qx.core.Init.getApplication()._loadedWindow.qx.core.Setting.get(h);
var T=L+(S||D)+t;

if(Q!=null){T+=J+Q;
if(R!=null){T+=y+R;
}}var U=window.open(T);
U.focus();
},_setNullButtonEventListener:function(){var bo=this._currentlySelectedProperty.getUserData(l);
var bq=this._currentlySelectedProperty.getUserData(m);
var bp=i+qx.lang.String.firstUp(bq);
try{this._qxObject[bp].call(this._qxObject,null);
var bo=this._currentlySelectedProperty.getUserData(l);
var bq=this._currentlySelectedProperty.getUserData(m);
this._propertyList.update(bq,bo);
this._switchPropertyButtons();
}catch(e){alert(e);
}},_setPropertyToDefaultButtonEventListener:function(){var bj=this._currentlySelectedProperty.getUserData(l);
var bk=this._currentlySelectedProperty.getUserData(m);
var bi=qx.core.Init.getApplication().getIframeWindowObject();
var bn=bi.qx.Class.getByName(bj).$$properties;
var bm=bn[bk];
var bl=i+qx.lang.String.firstUp(bk);
try{this._qxObject[bl].call(this._qxObject,bm.init);
var bj=this._currentlySelectedProperty.getUserData(l);
var bk=this._currentlySelectedProperty.getUserData(m);
this._propertyList.update(bk,bj);
}catch(e){alert(e);
}},_highlightCurrentPropertyButtonEventListener:function(){},_gotoSelectedPropertyButtonEventListener:function(){},_switchInheritedStatus:function(e){this._showInherited=e.getCurrentTarget().getValue();

if(this._propertyList){this._propertyList.switchInheritedStatus(this._showInherited);
}}},destruct:function(){this._qxObject=null;
this._disposeObjects(c,o,A,z,F,u,N,I,B,O);
}});
})();
(function(){var a="inspector.property.IFilter";
qx.Interface.define(a,{members:{sortIn:function(b,c,d){return true;
},getResult:function(){return true;
},empty:function(){return true;
}}});
})();
(function(){var k="Behavior",j="Content",h="Appearance",g="Dimension",f="Spacing",e="Tooltip & Context menu",d="Visibility",c="height",b="content",a="spacing",T="droppable",S="shadow",R="cursor",Q="decorator",P="opacity",O="zIndex",N="color",M="appearance",L="icon",K="inspector.property.Filter",r="value",s="font",p="keepfocus",q="focusable",n="enabled",o="allowShrink",l="keepactive",m="draggable",t="name",u="align",B="width",z="visibility",E="i",D="padding",G="selectable",F="rich",w="allowStretch",J="tabindex",I="anonymous",H="tooltip",v="label",x="margin",y="contextmenu",A="allowGrow",C="checked";
qx.Class.define(K,{extend:qx.core.Object,implement:inspector.property.IFilter,statics:{DEFAULT_CATEGORY_NAME:"Rest"},construct:function(){qx.core.Object.call(this);
this._tests=[];
this._defineTests();
this._createCategories();
},members:{_categories:null,_properties:null,_classnames:null,_tests:null,sortIn:function(V,W,X){for(var i=0;i<this._tests.length;i++){var Y=new RegExp(this._tests[i][0],E);
if(Y.test(V)){var ba=this._categories[this._tests[i][1]];
this._properties[ba][V]=W;
this._classnames[ba][V]=X;
return ;
}}this._properties[this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]][V]=W;
this._classnames[this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]][V]=X;
},getResult:function(){var bb=[];

for(var name in this._categories){bb[this._categories[name]]=name;
}return {names:bb,props:this._properties,classes:this._classnames};
},empty:function(){this.__pF();
},_createCategories:function(){this._categories=[];
var i=1;

for(var U=0;U<this._tests.length;U++){if(this._categories[this._tests[U][1]]==undefined){this._categories[this._tests[U][1]]=i;
i++;
}}this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]=i;
this.__pF();
},__pF:function(){this._properties=[];
this._classnames=[];
for(var i=1;i<=this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME];i++){this._properties[i]={};
this._classnames[i]=[];
}},_defineTests:function(){this._tests.push([x,f]);
this._tests.push([a,f]);
this._tests.push([D,f]);
this._tests.push([u,f]);
this._tests.push([M,h]);
this._tests.push([N,h]);
this._tests.push([Q,h]);
this._tests.push([S,h]);
this._tests.push([s,h]);
this._tests.push([P,h]);
this._tests.push([R,h]);
this._tests.push([B,g]);
this._tests.push([c,g]);
this._tests.push([A,g]);
this._tests.push([o,g]);
this._tests.push([w,g]);
this._tests.push([b,j]);
this._tests.push([F,j]);
this._tests.push([n,j]);
this._tests.push([C,j]);
this._tests.push([r,j]);
this._tests.push([t,j]);
this._tests.push([v,j]);
this._tests.push([L,j]);
this._tests.push([H,e]);
this._tests.push([y,e]);
this._tests.push([z,d]);
this._tests.push([O,d]);
this._tests.push([I,k]);
this._tests.push([J,k]);
this._tests.push([q,k]);
this._tests.push([p,k]);
this._tests.push([l,k]);
this._tests.push([m,k]);
this._tests.push([T,k]);
this._tests.push([G,k]);
}},destruct:function(){this._tests=this._categories=this._properties=this._classnames=null;
}});
})();
(function(){var e="abstract",d="qx.core.Object",c="inspector.property.AbstractPropertyList";
qx.Class.define(c,{extend:qx.ui.container.Composite,type:e,construct:function(f){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.VBox(8));
this._controller=f;
},members:{_controller:null,_filter:null,build:function(){throw new Error("Abstract method call (build) in 'PropertyList'!");
},update:function(a,b){throw new Error("Abstract method call (update) in 'PropertyList'!");
},getComponents:function(){throw new Error("Abstract method call (getComponents) in 'PropertyList'!");
},containsProperty:function(w,x){throw new Error("Abstract method call (containsProperty) in 'PropertyList'!");
},switchInheritedStatus:function(){throw new Error("Abstract method call (switchInheritedStatus) in 'PropertyList'!");
},recalculateLayout:function(){throw new Error("Abstract method call (recalculateLayout) in 'PropertyList'!");
},_getDataInherited:function(g){var m=g;
var h=qx.core.Init.getApplication().getIframeWindowObject();
var n=[];
var l=[];
var k=[];
for(var i=1;;i++){n[i]=h.qx.Class.getByName(m.classname).$$properties;
k[i]=m.classname;
l[i]=[];
for(var j in n[i]){l[i][j]=m.classname;
}if(h.qx.Class.getByName(d)==m){break;
}m=h.qx.Class.getByName(m.classname).superclass;
}return {names:k,props:n,classes:l};
},_getDataGrouped:function(p){var u=this._getDataInherited(p);
var t=u.props;
var s=this._controller.getFilter();
s.empty();
for(var q=0;q<t.length;q++){var v=u.names[q];

for(var r in t[q]){s.sortIn(r,t[q][r],v);
}}return s.getResult();
},_getData:function(o){if(this._controller.getGroupStatus()){return this._getDataGrouped(o);
}else{return this._getDataInherited(o);
}}},destruct:function(){this._controller=this._filter=null;
}});
})();
(function(){var bn=".",bm="",bl="key",bk="classname",bj="inspector/images/shell/errorIcon.png",bi="click",bh="visible",bg="inherited",bf="set",be="name",co="row",cn="changeValue",cm="qx.ui.basic.Label",cl="qx.ui.core.Widget",ck="activate",cj="excluded",ci="inspector/images/close.png",ch="Integer",cg="inspector/images/null.png",cf="middle",bu="get",bv="getActiveWindow",bs="qx.ui.container.Composite",bt="qx.event.type.Focus",bq="Number",br="NonEmptyString",bo="blur",bp="mousedown",bA="Boolean",bB="icon/16/actions/go-next.png",bK="#FFFFFF",bH="inspector.property.PropertyList",bS="qx.ui.form.TextField",bN="solid",cb="_arrow",bX="execute",bD="Enter",ce="Double",cd="inspector/images/open.png",cc="#969696",bC="<u>",bF="pointer",bG=":",bJ="Label",bL="String",bO="hidden",bU="<b>",ca="]</u>",bw="qx.ui.form.CheckBox",bx="</b>",bE=" objects",bR="Float",bQ="cursor",bP="qx.ui.form.ComboBox",bW="keypress",bV="inherit",bM="Color",bT=" [",bd="Font",bY="qx.event.type.KeySequence",by="white",bz="left",bI="Choose Color";
qx.Class.define(bH,{extend:inspector.property.AbstractPropertyList,construct:function(h){arguments.callee.base.call(this,h);
this._propertyRows={};
this._comboBoxPopups=[];
this._createColorPopup();
var j=new qx.ui.basic.Image(bB);
j.setPaddingLeft(8);
this._arrow={arrow:j,container:null,row:null};
},members:{_propertyRows:null,_comboBoxPopups:null,_colorPopup:null,_colorFields:null,_currentColorProperty:null,_arrow:null,build:function(){if(this._controller.getQxObject()!=null){this._reloadPropertyListFull();
}},update:function(cN,cO){this._setPropertyValueFull(cN,cO);
},switchInheritedStatus:function(){var cV=this.getChildren();

for(var i=0;i<cV.length;i++){if(cV[i].getUserData(bg)){if(this._controller.getInheritedStatus()){cV[i].setVisibility(bh);
}else{cV[i].setVisibility(cj);
}}}},containsProperty:function(cq,cr){return this._propertyRows[cr+bn+cq]==null?false:true;
},_reloadPropertyListFull:function(){var cw=false;
var cz=true;
var cF=this._getData(this._controller.getQxObject());
var cx=cF.names;
var cG=cF.props;
var cy=cF.classes;
if(!this._controller.getGroupStatus()){this._removeUnnecessaryClasses(cx);
}for(var i=cG.length-1;i>0;i--){if(!this._controller.getGroupStatus()){var cC=this.getChildren();
if(!cw&&cC.length>0){var x=cC.length-1-2*(cG.length-i-1);
if(x>0){var cI=cC[x].getUserData(be);
if(cI!=cx[i]){var cD=cx[i+1];
cw=true;
}}else{cw=true;
cz=false;
}}else{cw=true;
cz=false;
}}else{cw=true;
if(cz){this._clearList();
cz=false;
}}if(cw){if(cz){this._removeOld(cD);
cz=false;
}var cv=new qx.ui.basic.Atom(bU+cx[i]+bx,ci);
cv.setUserData(be,cx[i]);
cv.setRich(true);
this.addAt(cv,0);
var ct=new qx.ui.container.Composite(new qx.ui.layout.Grid(6,6));
ct.getLayout().setColumnWidth(0,25);
ct.setUserData(be,cx[i]);
if(!this._controller.getGroupStatus()){if(i==1){ct.setUserData(bg,false);
cv.setUserData(bg,false);
}else{ct.setUserData(bg,true);
cv.setUserData(bg,true);
}}cv.addListener(bi,function(e){if(this.isVisible()){this.setVisibility(cj);
e.getTarget().setIcon(cd);
}else{this.setVisibility(bh);
e.getTarget().setIcon(ci);
}},ct);
this.addAfter(ct,cv);
var cE=0;

for(var cB in cG[i]){if(cG[i][cB].group==null){var cu=new qx.ui.basic.Label(cB+bG);
cu.setUserData(bk,cy[i][cB]);
cu.setUserData(bl,cB);
cu.setUserData(co,cE);
ct.add(cu,{row:cE,column:1});
var cH=null;

try{cH=this._getPropertyWidgetFull(cG[i][cB],cB,cy[i][cB]);
}catch(Y){cH=new qx.ui.basic.Label(bm);
}cH.setUserData(bk,cy[i][cB]);
cH.setUserData(bl,cB);
cH.setUserData(co,cE);
ct.add(cH,{row:cE,column:2});
var cA=new qx.ui.basic.Image(cg);
cA.setUserData(bk,cy[i][cB]);
cA.setUserData(bl,cB);
cA.setUserData(co,cE);
ct.add(cA,{row:cE,column:3});
this._propertyRows[cy[i][cB]+bn+cB]={container:ct,row:cE};
ct.getLayout().setRowAlign(cE,bz,cf);
ct.getLayout().setRowMinHeight(cE,20);
cu.addListener(bi,this.__pG,this);
cH.addListener(bi,this.__pG,this);
cH.addListener(ck,this.__pG,this);
cA.addListener(bi,this.__pG,this);
cE++;
}}}}this.switchInheritedStatus();
this._refillPropertyListFull();
},_removeUnnecessaryClasses:function(cQ){for(;(cQ.length-1)*2<this.getChildren().length;){var cT=this.getChildren()[0];
this.removeAt(0);
cT.dispose();
var cS=this.getChildren()[0].getChildren();
for(var cU=0;cU<cS.length;cU++){if(cS[cU].classname==cm){var cR=cS[cU].getUserData(bk)+bn+cS[cU].getUserData(bl);
delete this._propertyRows[cR];
}}this.removeAt(0);
}},_removeOld:function(a){if(a==null){this._clearList();
return;
}while(true){var g=this.getChildren()[0];
var f=g.getUserData(be);
if(f==a){break;
}else{if(g.classname==bs){var d=g.getChildren();
for(var b=0;b<d.length;b++){if(d[b].classname==cm){var c=d[b].getUserData(bk)+bn+d[b].getUserData(bl);
delete this._propertyRows[c];
}}}this.removeAt(0);
}}},_clearList:function(){for(var bc in this._porpertyColumns){delete this._porpertyColumns[bc];
}this.removeAll();
},_getPropertyWidgetFull:function(E,F,G){var T=bu+qx.lang.String.firstUp(F);

try{if(T===bv){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var L=this._controller.getQxObject()[T]();
}}catch(cX){return new qx.ui.basic.Label();
}if(E.check!==null){if(E.check==bA){var I=new qx.ui.form.CheckBox();
var N=function(e){var n=this._controller.getQxObject()[T].call(this._controller.getQxObject());

if(e.getData()!=n){var m=bf+qx.lang.String.firstUp(F);
try{this._controller.getQxObject()[m].call(this._controller.getQxObject(),e.getData());
this._setPropertyValueFull(F,G,true);
}catch(cs){alert(cs+" ["+m+"]");
I.setValue(!n);
}}};
I.addListener(cn,N,this);
return I;
}else if(E.check instanceof Array){var H=new qx.ui.form.ComboBox();
var O=E.check;
for(var i=0;i<O.length;i++){var M=new qx.ui.form.ListItem(O[i]);
H.add(M);
}H.addListener(cn,function(e){var l=null;
if(e.getTarget().getValue()!=null){var l=e.getTarget().getValue();
}if(l!=L){var k=bf+qx.lang.String.firstUp(F);
try{this._controller.getQxObject()[k].call(this._controller.getQxObject(),l);
L=this._controller.getQxObject()[T].call(this._controller.getQxObject());
this._setPropertyValueFull(F,G,true);
L=this._controller.getQxObject()[T].call(this._controller.getQxObject());
}catch(D){alert(D);
}}},this);
return H;
}else if(E.check==ch||E.check==bL||E.check==br||E.check==bJ||E.check==bR||E.check==ce||E.check==bq){var R=new qx.ui.form.TextField();
var P=function(e){if(e.classname==bY){if(e.getKeyIdentifier()!=bD){return;
}}else if(e.classname==bt){}else{return ;
}var V=bf+qx.lang.String.firstUp(F);
try{var W=R.getValue();
L=this._controller.getQxObject()[T].call(this._controller.getQxObject());
if(e.classname==bt){if(W==bm&&L==null){return;
}}if(E.check==ch||E.check==bq){W=parseFloat(W);
}this._controller.getQxObject()[V].call(this._controller.getQxObject(),W);
this._setPropertyValueFull(F,G,true);
L=this._controller.getQxObject()[T].call(this._controller.getQxObject());
}catch(cp){alert(cp);
R.setValue(L+bm);
}};
R.addListener(bo,P,this);
R.addListener(bW,P,this);
return R;
}else if(E.check==bM){var J=new qx.ui.container.Composite(new qx.ui.layout.HBox(6));
J.getLayout().setAlignY(cf);
var Q=new qx.ui.core.Widget();
Q.setDecorator(new qx.ui.decoration.Single(1,bN,cc));
Q.setBackgroundColor(by);
Q.setHeight(20);
Q.setWidth(20);
Q.setAllowGrowX(false);
Q.setAllowGrowY(false);
J.add(Q);
this._colorFields[G+bn+F]=Q;
var K=new qx.ui.form.Button(bI);
J.add(K);
K.addListener(bp,function(e){this._colorPopup.setValue(Q.getBackgroundColor());
this._currentColorProperty=G+bn+F;
this._colorPopup.placeToMouse(e);
this._colorPopup.show();
},this);
K.addListener(bX,this.__pG,this);
K.addListener(ck,this.__pG,this);
return J;
}else if(E.ckeck==cl){var U=new qx.ui.basic.Label();
return U;
}else{var S=new qx.ui.basic.Label();
return S;
}}else{var S=new qx.ui.basic.Label();
return S;
}},_refillPropertyListFull:function(){for(var cL in this._propertyRows){try{var cM=cL.substr(cL.lastIndexOf(bn)+1);
var cK=cL.substring(0,cL.lastIndexOf(bn));
this._setPropertyValueFull(cM,cK);
}catch(cW){}}},_setPropertyValueFull:function(o,p,q){var t=qx.core.Init.getApplication().getIframeWindowObject();
var s=this._propertyRows[p+bn+o].container.getLayout();
var B=this._propertyRows[p+bn+o].row;

if(!q&&s.getCellWidget(B,0)){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}var A=bu+qx.lang.String.firstUp(o);

try{if(A===bv){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var w=this._controller.getQxObject()[A]();
}}catch(cJ){s.getCellWidget(B,3).setVisibility(bh);
s.getCellWidget(B,3).setSource(bj);
var u=s.getCellWidget(B,3).getToolTip();

if(!u){u=new qx.ui.tooltip.ToolTip(cJ+bm,bj);
}else{u.setLabel(cJ+bm);
u.setIcon(bj);
}s.getCellWidget(B,3).setToolTip(u);
return;
}if(w==null){s.getCellWidget(B,3).setVisibility(bh);
s.getCellWidget(B,3).setSource(cg);
s.getCellWidget(B,3).resetToolTip();
}else{s.getCellWidget(B,3).setVisibility(bO);
}
try{var parent=this._controller.getQxObject();

while(w==bV){parent=parent.getLayoutParent();
w=parent[A].call(parent);
}}catch(C){s.getCellWidget(B,3).setVisibility(bh);
s.getCellWidget(B,3).setSource(bj);
var u=s.getCellWidget(B,3).getToolTip();

if(!u){u=new qx.ui.tooltip.ToolTip(C+bm,bj);
}else{u.setLabel(C+bm);
u.setIcon(bj);
}s.getCellWidget(B,3).setToolTip(u);
return;
}if(s.getCellWidget(B,2).classname==bw){if(w==null){s.getCellWidget(B,2).setValue(false);
}else{s.getCellWidget(B,2).setValue(w);
}}else if(s.getCellWidget(B,2).classname==cm){if(w!=null){var z=t.qx.Class.getByName(p).$$properties;
var y=z[o];
if(w instanceof Array){s.getCellWidget(B,2).setValue(w.length+bE);
}else if((y.check==cl)&&(this._controller.getQxObject() instanceof qx.application.AbstractGui)){s.getCellWidget(B,2).setValue(bC+w.classname+bT+w.toHashCode()+ca);
s.getCellWidget(B,2).setStyleProperty(bQ,bF);
if(s.getCellWidget(B,2).hasListeners(bi)===undefined){s.getCellWidget(B,2).addListener(bi,function(e){if(this._controller.getSelectedProperty()!=null){this._controller.getSelectedProperty().setBackgroundColor(null);
}this._controller.setSelectedProperty(s.getCellWidget(B,1));
this._controller.gotoSelectedWidget();
},this);
}}else if(y.check==bd){s.getCellWidget(B,2).setFont(w);
s.getCellWidget(B,2).setValue(w+bm);
}else{s.getCellWidget(B,2).setValue(w+bm);
}}else{s.getCellWidget(B,2).setValue(bm);
}}else if(s.getCellWidget(B,2).classname==bS){if(w!=null){s.getCellWidget(B,2).setValue(w+bm);
}else{s.getCellWidget(B,2).setValue(bm);
}}else if(s.getCellWidget(B,2).classname==bP){var r=s.getCellWidget(B,2);
if(w==null){r.resetSelection();
}else{for(var i=0;i<r.getChildren().length;i++){if(w==r.getChildren()[i].getLabel()){if(w){r.setValue(w);
}}}}}else if(s.getCellWidget(B,2).classname==bs){try{var v=t.qx.theme.manager.Color.getInstance().resolve(w);
s.getCellWidget(B,2).getChildren()[0].setBackgroundColor(v);
}catch(cP){s.getCellWidget(B,2).getChildren()[0].setBackgroundColor(bK);
}}},_createColorPopup:function(){this._colorPopup=new qx.ui.control.ColorPopup();
var X=qx.core.Init.getApplication();
X.getRoot().add(this._colorPopup);
this._colorFields={};
this._colorPopup.addListener(cn,function(e){if(this._currentColorProperty!=null){var da=this._currentColorProperty.substr(this._currentColorProperty.lastIndexOf(bn)+1);
var cY=this._currentColorProperty.substring(0,this._currentColorProperty.lastIndexOf(bn));
var db=bf+qx.lang.String.firstUp(da);
try{this._controller.getQxObject()[db].call(this._controller.getQxObject(),e.getData());
this._colorFields[this._currentColorProperty].setBackgroundColor(e.getData());
this._setPropertyValueFull(da,cY,true);
}catch(dc){alert(dc);
}this._currentColorProperty=null;
}},this);
},__pG:function(e){var ba=e.getTarget();

while(ba.getUserData(bl)==null){ba=ba.getLayoutParent();
}var bb=ba.getUserData(bk)+bn+ba.getUserData(bl);
if(this._arrow.container!=null){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}if(this._propertyRows[bb]!=undefined){this._arrow.container=this._propertyRows[bb].container;
this._arrow.row=ba.getUserData(co);
this._arrow.container.add(this._arrow.arrow,{row:this._arrow.row,column:0});
this._controller.setSelectedProperty(ba);
}else{this._controller.setSelectedProperty(null);
}}},destruct:function(){this._propertyRows=this._comboBoxPopups=this._colorPopup=this._colorFields=this._oldPropertyListPool=null;
this._disposeObjects(cb);
}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
arguments.callee.base.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var A="popup",z="list",y="",x="mousewheel",w="resize",v="Function",u="blur",t="abstract",s="keypress",r="Number",k="changeSelection",q="PageUp",n="_applyMaxListHeight",i="PageDown",h="mouseup",m="Escape",l="changeVisibility",o="one",g="middle",p="qx.ui.form.AbstractSelectBox",j="mousedown";
qx.Class.define(p,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:t,construct:function(){arguments.callee.base.call(this);
var K=new qx.ui.layout.HBox();
this._setLayout(K);
K.setAlignY(g);
this.addListener(s,this._onKeyPress);
this.addListener(u,this._onBlur,this);
var J=qx.core.Init.getApplication().getRoot();
J.addListener(x,this._onMousewheel,this,true);
this.addListener(w,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:r,apply:n,nullable:true,init:200},format:{check:v,init:function(f){return this._defaultFormat(f);
},nullable:true}},members:{_createChildControlImpl:function(B){var C;

switch(B){case z:C=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:o,quickSelection:true});
C.addListener(k,this._onListChangeSelection,this);
C.addListener(j,this._onListMouseDown,this);
break;
case A:C=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
C.setAutoHide(false);
C.setKeepActive(true);
C.addListener(h,this.close,this);
C.add(this.getChildControl(z));
C.addListener(l,this._onPopupChangeVisibility,this);
break;
}return C||arguments.callee.base.call(this,B);
},_applyMaxListHeight:function(c,d){this.getChildControl(z).setMaxHeight(c);
},getChildrenContainer:function(){return this.getChildControl(z);
},open:function(){var L=this.getChildControl(A);
L.placeToWidget(this,true);
L.show();
},close:function(){this.getChildControl(A).hide();
},toggle:function(){var M=this.getChildControl(A).isVisible();

if(M){this.close();
}else{this.open();
}},_defaultFormat:function(D){var E=D?D.getLabel():y;
var F=D?D.getRich():false;

if(F){E=E.replace(/<[^>]+?>/g,y);
E=qx.bom.String.unescape(E);
}return E;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var a=e.getKeyIdentifier();
var b=this.getChildControl(A);
if(b.isHidden()&&(a==i||a==q)){e.stopPropagation();
}else if(!b.isHidden()&&a==m){this.close();
e.stop();
}else{this.getChildControl(z).handleKeyPress(e);
}},_onMousewheel:function(e){var H=e.getTarget();
var G=this.getChildControl(A);

if(qx.ui.core.Widget.contains(G,H)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(A).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var I=qx.core.Init.getApplication().getRoot();

if(I){I.removeListener(x,this._onMousewheel,this,true);
}}});
})();
(function(){var J="textfield",I="button",H="list",G="selected",F="focusout",E="inner",D="changeValue",C="popup",B="focusin",A="combobox",t="click",z="blur",w="Enter",s="quick",r="_applyPlaceholder",v="qx.ui.form.ComboBox",u="single",x="Down",q="String",y="qx.event.type.Data";
qx.Class.define(v,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){arguments.callee.base.call(this);
var a=this._createChildControl(J);
this._createChildControl(I);
this.addListener(t,this._onClick);
this.addListener(B,function(e){a.fireNonBubblingEvent(B,qx.event.type.Focus);
},this);
this.addListener(F,function(e){a.fireNonBubblingEvent(F,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:A},placeholder:{check:q,nullable:true,apply:r}},events:{"changeValue":y},members:{__pH:null,__pI:null,_applyPlaceholder:function(j,k){this.getChildControl(J).setPlaceholder(j);
},_createChildControlImpl:function(R){var S;

switch(R){case J:S=new qx.ui.form.TextField();
S.setFocusable(false);
S.addState(E);
S.addListener(D,this._onTextFieldChangeValue,this);
S.addListener(z,this.close,this);
this._add(S,{flex:1});
break;
case I:S=new qx.ui.form.Button();
S.setFocusable(false);
S.setKeepActive(true);
S.addState(E);
this._add(S);
break;
case H:S=arguments.callee.base.call(this,R);
S.setSelectionMode(u);
break;
}return S||arguments.callee.base.call(this,R);
},_forwardStates:{focused:true},tabFocus:function(){var l=this.getChildControl(J);
l.getFocusElement().focus();
l.selectAllText();
},setValue:function(h){var i=this.getChildControl(J);

if(i.getValue()==h){return;
}i.setValue(h);
},getValue:function(){return this.getChildControl(J).getValue();
},resetValue:function(){this.getChildControl(J).setValue(null);
},_onKeyPress:function(e){var n=this.getChildControl(C);
var m=e.getKeyIdentifier();

if(m==x&&e.isAltPressed()){this.getChildControl(I).addState(G);
this.toggle();
e.stopPropagation();
}else if(m==w){if(n.isVisible()){this.close();
e.stop();
}}else if(n.isVisible()){arguments.callee.base.call(this,e);
}},_onClick:function(e){var g=e.getTarget();

if(g==this.getChildControl(I)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__pH){var f=this.__pH.getLabel();

if(this.getFormat()!=null){f=this.getFormat().call(this,this.__pH);
}if(f&&f.translate){f=f.translate();
}this.setValue(f);
this.__pH=null;
}},_onListChangeSelection:function(e){var b=e.getData();

if(b.length>0){var c=this.getChildControl(H);

if(c.getSelectionContext()==s){this.__pH=b[0];
}else{var d=b[0].getLabel();

if(this.getFormat()!=null){d=this.getFormat().call(this,b[0]);
}if(d&&d.translate){d=d.translate();
}this.setValue(d);
this.__pH=null;
}}},_onPopupChangeVisibility:function(e){var L=this.getChildControl(C);

if(L.isVisible()){var M=this.getChildControl(H);
var N=this.getValue();
var K=null;

if(N){K=M.findItem(N);
}
if(K){M.setSelection([K]);
}else{M.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(I).removeState(G);
},_onTextFieldChangeValue:function(e){var Q=e.getData();
var P=this.getChildControl(H);

if(Q!=null){var O=P.findItem(Q,false);

if(O){P.setSelection([O]);
}else{P.resetSelection();
}}else{P.resetSelection();
}this.fireDataEvent(D,Q,e.getOldData());
},getTextSelection:function(){return this.getChildControl(J).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(J).getTextSelectionLength();
},setTextSelection:function(o,p){this.getChildControl(J).setTextSelection(o,p);
},clearTextSelection:function(){this.getChildControl(J).clearTextSelection();
},selectAllText:function(){this.getChildControl(J).selectAllText();
}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="Enter",d="one",c="__pJ",b="addChildWidget",a="_applySpacing",y="Boolean",x="Integer",w="action",v="keyinput",u="addItem",t="removeChildWidget",s="_applyOrientation",r="single",q="keypress",p="list",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(H){arguments.callee.base.call(this);
this.__pJ=new qx.ui.container.Composite();
this.__pJ.addListener(b,this._onAddChild,this);
this.__pJ.addListener(t,this._onRemoveChild,this);
this.getChildControl(n).add(this.__pJ);
if(H){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(q,this._onKeyPress);
this.addListener(v,this._onKeyInput);
this.__pK=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:s},spacing:{check:x,init:0,apply:a,themeable:true},enableInlineFind:{check:y,init:true}},members:{__pK:null,__pL:null,__pJ:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__pJ;
},_onAddChild:function(e){this.fireDataEvent(u,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(B,C){var D=B===m;
var E=D?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__pJ;
content.setLayout(E);
content.setAllowGrowX(!D);
content.setAllowGrowY(D);
this._applySpacing(this.getSpacing());
},_applySpacing:function(F,G){this.__pJ.getLayout().setSpacing(F);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==f&&!e.isAltPressed()){var Q=this.getSelection();

for(var i=0;i<Q.length;i++){Q[i].fireEvent(w);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var z=this.getSelectionMode();

if(!(z===r||z===d)){return;
}if(((new Date).valueOf()-this.__pL)>1000){this.__pK=h;
}this.__pK+=e.getChar();
var A=this.findItemByLabelFuzzy(this.__pK);
if(A){this.setSelection([A]);
}this.__pL=(new Date).valueOf();
},findItemByLabelFuzzy:function(I){I=I.toLowerCase();
var J=this.getChildren();
for(var i=0,l=J.length;i<l;i++){var K=J[i].getLabel();
if(K&&K.toLowerCase().indexOf(I)==0){return J[i];
}}return null;
},findItem:function(L,M){if(M!==false){L=L.toLowerCase();
}var N=this.getChildren();
var P;
for(var i=0,l=N.length;i<l;i++){P=N[i];
var O=P.getLabel();

if(O!=null){if(O.translate){O=O.translate();
}
if(M!==false){O=O.toLowerCase();
}
if(O.toString()==L.toString()){return P;
}}}return null;
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var f="listitem",e="qx.ui.form.ListItem",d="qx.event.type.Event";
qx.Class.define(e,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(a,b,c){arguments.callee.base.call(this,a,b);

if(c!=null){this.setModel(c);
}},events:{"action":d},properties:{appearance:{refine:true,init:f}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var A="current-preview",z="execute",y="selected-preview",x="Number",w="preview-pane",v="selector-button",u="colorselector-cancelbutton",t="auto-button",s="colorselector-okbutton",r="mousedown",bm="teal",bl="maroon",bk="qx.ui.control.ColorPopup",bj="#666",bi="changeValue",bh="#333",bg="__pP",bf="#000",be="yellow",bd="changeGreen",H="colorpopup",I="_applyValue",F="blue",G="changeRed",D="field#",E="__pO",B="#CCC",C="Color Selector",J="changeVisibility",K="recent",R="changeBlue",P="mouseover",V="Cancel",T="#FFF",Y="right",X="Open ColorSelector",M="mouseout",bc="#999",bb="Automatic",ba="Basic Colors",L="Preview (Old/New)",N="visible",O="Recent Colors",Q="OK",S="field",U="green",W="red";
qx.Class.define(bk,{extend:qx.ui.popup.Popup,implement:[qx.ui.form.IColorForm],construct:function(){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.VBox(5));
this._createChildControl(t);
this._createBoxes();
this._createChildControl(w);
this._createChildControl(v);
this.addListener(J,this._onChangeVisibility,this);
},properties:{appearance:{refine:true,init:H},value:{nullable:true,apply:I,event:bi},red:{check:x,init:null,nullable:true,event:G},green:{check:x,init:null,nullable:true,event:bd},blue:{check:x,init:null,nullable:true,event:R}},members:{__pM:1e5,__pN:null,__pO:null,__pP:null,__pQ:K,__pR:12,_createChildControlImpl:function(bD){var bE;

switch(bD){case S:bE=new qx.ui.core.Widget;
bE.addListener(r,this._onFieldMouseDown,this);
bE.addListener(P,this._onFieldMouseOver,this);
bE.addListener(M,this._onFieldMouseOut,this);
break;
case t:bE=new qx.ui.form.Button(this.tr(bb));
bE.setAllowStretchX(true);
bE.addListener(z,this._onAutomaticBtnExecute,this);
this.add(bE);
break;
case v:bE=new qx.ui.form.Button(this.tr(X));
bE.addListener(z,this._onSelectorButtonExecute,this);
this.add(bE);
break;
case w:bE=new qx.ui.groupbox.GroupBox(this.tr(L));
bE.setLayout(new qx.ui.layout.HBox);
bE.add(this._createChildControl(y,true),{flex:1});
bE.add(this._createChildControl(A,true),{flex:1});
this.add(bE);
break;
case y:bE=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case A:bE=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case s:bE=new qx.ui.form.Button(this.tr(Q));
bE.addListener(z,this._onColorSelectorOk,this);
break;
case u:bE=new qx.ui.form.Button(this.tr(V));
bE.addListener(z,this._onColorSelectorCancel,this);
break;
}return bE||arguments.callee.base.call(this,bD);
},_createBoxes:function(){this.__pN={};
var bz=this._tables;
var bC,by,bA;
var j=0;

for(var bB in bz){bC=bz[bB];
by=new qx.ui.groupbox.GroupBox(bC.label);
by.setLayout(new qx.ui.layout.HBox);
this.__pN[bB]=by;
this.add(by);

for(var i=0;i<this.__pR;i++){bA=this.getChildControl(D+(j++));
bA.setBackgroundColor(bC.values[i]||null);
by.add(bA);
}}},_createColorSelector:function(){if(this.__pP){return;
}var n=new qx.ui.window.Window(this.tr(C));
this.__pO=n;
n.setLayout(new qx.ui.layout.VBox(16));
n.setResizable(false);
n.moveTo(20,20);
this.__pP=new qx.ui.control.ColorSelector;
n.add(this.__pP);
var o=new qx.ui.container.Composite(new qx.ui.layout.HBox(8,Y));
n.add(o);
var q=this._createChildControl(u);
var p=this._createChildControl(s);
o.add(q);
o.add(p);
},_applyValue:function(k,l){if(k===null){this.setRed(null);
this.setGreen(null);
this.setBlue(null);
}else{var m=qx.util.ColorUtil.stringToRgb(k);
this.setRed(m[0]);
this.setGreen(m[1]);
this.setBlue(m[2]);
}this.getChildControl(y).setBackgroundColor(k);
this._rotatePreviousColors();
},_rotatePreviousColors:function(){if(!this._tables){return;
}var f=this._tables[this.__pQ].values;
var g=this.__pN[this.__pQ];

if(!f){return;
}var h=this.getValue();

if(!h){return;
}var d=f.indexOf(h);

if(d!=-1){qx.lang.Array.removeAt(f,d);
}else if(f.length==this.__pR){f.shift();
}f.push(h);
var c=g.getChildren();

for(var i=0;i<c.length;i++){c[i].setBackgroundColor(f[i]||null);
}},_onFieldMouseDown:function(e){var b=this.getChildControl(A).getBackgroundColor();
this.setValue(b);

if(b){this.hide();
}},_onFieldMouseOver:function(e){this.getChildControl(A).setBackgroundColor(e.getTarget().getBackgroundColor());
},_onFieldMouseOut:function(e){var bq=this.getRed();
var bp=this.getGreen();
var bn=this.getBlue();
var bo=null;

if(bq!==null||bp!==null||bn!==null){var bo=qx.util.ColorUtil.rgbToRgbString([bq,bp,bn]);
}this.getChildControl(A).setBackgroundColor(bo);
},_onAutomaticBtnExecute:function(){this.setValue(null);
this.hide();
},_onSelectorButtonExecute:function(){this._createColorSelector();
this.exclude();
var bt=this.getRed();
var bs=this.getGreen();
var br=this.getBlue();

if(bt===null||bs===null||br===null){bt=255;
bs=255;
br=255;
}this.__pP.setRed(bt);
this.__pP.setGreen(bs);
this.__pP.setBlue(br);
this.__pO.open();
},_onColorSelectorOk:function(){var a=this.__pP;
this.setValue(qx.util.ColorUtil.rgbToRgbString([a.getRed(),a.getGreen(),a.getBlue()]));
this.__pO.close();
},_onColorSelectorCancel:function(){this.__pO.close();
},_onChangeVisibility:function(e){if(this.getVisibility()==N){var bx=this.getRed();
var bw=this.getGreen();
var bu=this.getBlue();
var bv=null;

if(bx!==null||bw!==null||bu!==null){var bv=qx.util.ColorUtil.rgbToRgbString([bx,bw,bu]);
}this.getChildControl(y).setBackgroundColor(bv);
this.getChildControl(A).setBackgroundColor(bv);
}},_tables:{core:{label:ba,values:[bf,bh,bj,bc,B,T,W,U,F,be,bm,bl]},recent:{label:O,values:[]}}},destruct:function(){this._disposeObjects(E,bg);
this._tables=this.__pN=null;
}});
})();
(function(){var o="legend",n="frame",m="middle",l="top",k="resize",j="qx.ui.groupbox.GroupBox",i="groupbox",h="_applyLegendPosition";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(r,s){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(n);
this._createChildControl(o);
if(r!=null){this.setLegend(r);
}
if(s!=null){this.setIcon(s);
}},properties:{appearance:{refine:true,init:i},legendPosition:{check:[l,m],init:m,apply:h,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(p){var q;

switch(p){case n:q=new qx.ui.container.Composite();
this._add(q,{left:0,top:6,right:0,bottom:0});
break;
case o:q=new qx.ui.basic.Atom();
q.addListener(k,this._repositionFrame,this);
this._add(q);
break;
}return q||arguments.callee.base.call(this,p);
},_getContentPaddingTarget:function(){return this.getChildControl(n);
},_applyLegendPosition:function(e){if(this.getChildControl(o).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var c=this.getChildControl(o);
var b=this.getChildControl(n);
var d=c.getBounds().height;
if(this.getLegendPosition()==m){b.setLayoutProperties({"top":Math.round(d/2)});
}else if(this.getLegendPosition()==l){b.setLayoutProperties({"top":d});
}},getChildrenContainer:function(){return this.getChildControl(n);
},setLegend:function(f){var g=this.getChildControl(o);

if(f!==null){g.setLabel(f);
g.show();
}else{g.exclude();
}},getLegend:function(){return this.getChildControl(o).getLabel();
},setIcon:function(a){this.getChildControl(o).setIcon(a);
},getIcon:function(){this.getChildControl(o).getIcon();
}}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(k,m){var q=this._getLayoutChildren();
var n,p,o,r,top;
for(var i=0,l=q.length;i<l;i++){n=q[i];
p=n.getSizeHint();
o=n.getLayoutProperties();
r=(o.left||0)+n.getMarginLeft();
top=(o.top||0)+n.getMarginTop();
n.renderLayout(r,top,p.width,p.height);
}},_computeSizeHint:function(){var g=this._getLayoutChildren();
var d,j,e;
var h=0,f=0;
var b,c;
for(var i=0,l=g.length;i<l;i++){d=g[i];
j=d.getSizeHint();
e=d.getLayoutProperties();
b=j.width+(e.left||0)+d.getMarginLeft()+d.getMarginRight();
c=j.height+(e.top||0)+d.getMarginTop()+d.getMarginBottom();

if(b>h){h=b;
}
if(c>f){f=c;
}}return {width:h,height:f};
}}});
})();
(function(){var bB="brightness-handle",bA="hue-saturation-handle",bz="hsbSpinner",by="rgbSpinner",bx="changeValue",bw="hexField",bv="hueSaturationField",bu="brightness-field",bt="mousedown",bs="rgb-spinner-red",bh="preview-content-old",bg="rgb-spinner-green",bf="brightnessField",be="hue-saturation-field",bd="hsb-spinner-brightness",bc="preview-content-new",bb="hue-saturation-pane",ba="rgb-spinner-blue",Y="hsb-spinner-hue",X="hsb-spinner-saturation",bI="hex-field",bJ="brightnessModifier",bG="blueModifier",bH="saturationModifier",bE="middle",bF="Number",bC="#",bD="redModifier",bK="greenModifier",bL="hueModifier",bl="Integer",bk="brightness-pane",bn="control-pane",bm="preset-grid",bp="mouseup",bo="preset-field-set",br="qx.event.type.Event",bq="mousemove",bj="hex-field-composite",bi="rgb-spinner-composite",g="hsb-spinner-composite",h="control-bar",k="mousewheel",l="visual-pane",m="input-field-set",n="preview-field-set",o="black",p="_applyGreen",q="#333",r="aqua",bP="colorbucket",bO="qx.event.type.Data",bN="Hex",bM="#BBB",bT="decoration/colorselector/brightness-handle.gif",bS="Visual",bR="_applySaturation",bQ="Preview (Old/New)",bV="FFFFFF",bU="decoration/colorselector/brightness-field.png",H="white",I="orange",F="_applyRed",G="_applyBlue",L="maroon",M="Presets",J="_applyBrightness",K="#999",D="purple",E="red",z="blue",y="_applyHue",B="decoration/colorselector/huesaturation-handle.gif",A="colorselector",v="qx.ui.control.ColorSelector",u="lime",x="#EEE",w="olive",t="RGB",s="decoration/colorselector/huesaturation-field.jpg",R="navy",S="teal",T="green",U="yellow",N="#666",O="fuchsia",P="Details",Q="",V="colorbucket#",W="appear",C="HSB";
qx.Class.define(v,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IColorForm],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(h);
this.addListener(W,this._onAppear,this);
},events:{"dialogok":br,"dialogcancel":br,"changeValue":bO},properties:{appearance:{refine:true,init:A},red:{check:bl,init:255,apply:F},green:{check:bl,init:255,apply:p},blue:{check:bl,init:255,apply:G},hue:{check:bF,init:0,apply:y},saturation:{check:bF,init:0,apply:bR},brightness:{check:bF,init:100,apply:J}},members:{__pS:null,__pT:[L,E,I,U,w,D,O,u,T,R,z,r,S,o,q,N,K,bM,x,H],__pU:Q,__pV:0,__pW:0,__pX:0,__pY:true,__qa:false,_createChildControlImpl:function(cG){var cH;

switch(cG){case h:cH=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
cH.add(this.getChildControl(bn));
cH.add(this.getChildControl(l));
this._add(cH);
break;
case l:cH=new qx.ui.groupbox.GroupBox(this.tr(bS));
cH.setLayout(new qx.ui.layout.HBox(10));
cH.add(this.getChildControl(bb));
cH.add(this.getChildControl(bk));
break;
case bn:cH=new qx.ui.container.Composite(new qx.ui.layout.VBox(12));
cH.add(this.getChildControl(bo));
cH.add(this.getChildControl(m));
cH.add(this.getChildControl(n),{flex:1});
break;
case bb:cH=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
cH.setAllowGrowY(false);
cH.addListener(k,this._onHueSaturationPaneMouseWheel,this);
cH.add(this.getChildControl(be));
cH.add(this.getChildControl(bA),{left:0,top:256});
break;
case be:cH=new qx.ui.basic.Image(s);
cH.addListener(bt,this._onHueSaturationFieldMouseDown,this);
break;
case bA:cH=new qx.ui.basic.Image(B);
cH.addListener(bt,this._onHueSaturationFieldMouseDown,this);
cH.addListener(bp,this._onHueSaturationHandleMouseUp,this);
cH.addListener(bq,this._onHueSaturationHandleMouseMove,this);
break;
case bk:cH=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
cH.setAllowGrowY(false);
cH.addListener(k,this._onBrightnessPaneMouseWheel,this);
cH.add(this.getChildControl(bu));
cH.add(this.getChildControl(bB));
break;
case bu:cH=new qx.ui.basic.Image(bU);
cH.addListener(bt,this._onBrightnessFieldMouseDown,this);
break;
case bB:cH=new qx.ui.basic.Image(bT);
cH.addListener(bt,this._onBrightnessHandleMouseDown,this);
cH.addListener(bp,this._onBrightnessHandleMouseUp,this);
cH.addListener(bq,this._onBrightnessHandleMouseMove,this);
break;
case bo:cH=new qx.ui.groupbox.GroupBox(this.tr(M));
cH.setLayout(new qx.ui.layout.Grow());
cH.add(this.getChildControl(bm));
break;
case bP:cH=new qx.ui.core.Widget();
cH.addListener(bt,this._onColorFieldClick,this);
break;
case bm:cM=new qx.ui.layout.Grid(3,3);
cH=new qx.ui.container.Composite(cM);
var cN;
var cL;

for(var i=0;i<2;i++){for(var j=0;j<10;j++){cL=i*10+j;
cN=this.getChildControl(V+cL);
cN.setBackgroundColor(this.__pT[cL]);
cH.add(cN,{column:j,row:i});
}}break;
case m:cH=new qx.ui.groupbox.GroupBox(this.tr(P));
var cM=new qx.ui.layout.VBox();
cM.setSpacing(10);
cH.setLayout(cM);
cH.add(this.getChildControl(bj));
cH.add(this.getChildControl(bi));
cH.add(this.getChildControl(g));
break;
case n:cH=new qx.ui.groupbox.GroupBox(this.tr(bQ));
var cM=new qx.ui.layout.HBox(10);
cH.setLayout(cM);
cH.add(this.getChildControl(bh),{flex:1});
cH.add(this.getChildControl(bc),{flex:1});
break;
case bj:var cK=new qx.ui.layout.HBox(4);
cK.setAlignY(bE);
cH=new qx.ui.container.Composite(cK);
var cP=new qx.ui.basic.Label(this.tr(bN));
cH.add(cP);
var cO=new qx.ui.basic.Label(bC);
cH.add(cO);
cH.add(this.getChildControl(bI));
break;
case bI:cH=new qx.ui.form.TextField(bV);
cH.setMaxLength(6);
cH.setFilter(/[0-9A-Fa-f]/);
cH.setWidth(55);
cH.addListener(bx,this._onHexFieldChange,this);
break;
case bi:var cK=new qx.ui.layout.HBox(4);
cK.setAlignY(bE);
cH=new qx.ui.container.Composite(cK);
var cI=new qx.ui.basic.Label(this.tr(t));
cI.setWidth(25);
cH.add(cI);
cH.add(this.getChildControl(bs));
cH.add(this.getChildControl(bg));
cH.add(this.getChildControl(ba));
break;
case bs:cH=new qx.ui.form.Spinner(0,255,255);
cH.setWidth(50);
cH.addListener(bx,this._setRedFromSpinner,this);
break;
case bg:cH=new qx.ui.form.Spinner(0,255,255);
cH.setWidth(50);
cH.addListener(bx,this._setGreenFromSpinner,this);
break;
case ba:cH=new qx.ui.form.Spinner(0,255,255);
cH.setWidth(50);
cH.addListener(bx,this._setBlueFromSpinner,this);
break;
case g:var cK=new qx.ui.layout.HBox(4);
cK.setAlignY(bE);
cH=new qx.ui.container.Composite(cK);
var cJ=new qx.ui.basic.Label(this.tr(C));
cJ.setWidth(25);
cH.add(cJ);
cH.add(this.getChildControl(Y));
cH.add(this.getChildControl(X));
cH.add(this.getChildControl(bd));
break;
case Y:cH=new qx.ui.form.Spinner(0,0,360);
cH.setWidth(50);
cH.addListener(bx,this._setHueFromSpinner,this);
break;
case X:cH=new qx.ui.form.Spinner(0,0,100);
cH.setWidth(50);
cH.addListener(bx,this._setSaturationFromSpinner,this);
break;
case bd:cH=new qx.ui.form.Spinner(0,100,100);
cH.setWidth(50);
cH.addListener(bx,this._setBrightnessFromSpinner,this);
break;
case bh:cH=new qx.ui.core.Widget();
break;
case bc:cH=new qx.ui.core.Widget();
break;
}return cH||arguments.callee.base.call(this,cG);
},setValue:function(bX){var bY;

if(bX==null){this.__pY=true;
bY=[255,255,255];
}else{bY=qx.util.ColorUtil.stringToRgb(bX);
this.__pY=false;
}this.__qa=true;
this.setRed(bY[0]);
this.setGreen(bY[1]);
this.__qa=false;
this.setBlue(bY[2]);
},getValue:function(){return this.__pY?null:bC+qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
},resetValue:function(){this.__pY=true;
this.__qa=true;
this.setRed(255);
this.setGreen(255);
this.__qa=false;
this.setBlue(255);
},__qb:function(){if(!this.__qa){this.__pY=false;
this.fireDataEvent(bx,this.getValue());
}},_applyRed:function(d,f){if(this.__pS===null){this.__pS=bD;
}
if(this.__pS!==by){this.getChildControl(bs).setValue(d);
}
if(this.__pS!==bw){this._setHexFromRgb();
}
switch(this.__pS){case by:case bw:case bD:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__qb();

if(this.__pS===bD){this.__pS=null;
}},_applyGreen:function(ct,cu){if(this.__pS===null){this.__pS=bK;
}
if(this.__pS!==by){this.getChildControl(bg).setValue(ct);
}
if(this.__pS!==bw){this._setHexFromRgb();
}
switch(this.__pS){case by:case bw:case bK:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__qb();

if(this.__pS===bK){this.__pS=null;
}},_applyBlue:function(cz,cA){if(this.__pS===null){this.__pS=bG;
}
if(this.__pS!==by){this.getChildControl(ba).setValue(cz);
}
if(this.__pS!==bw){this._setHexFromRgb();
}
switch(this.__pS){case by:case bw:case bG:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__qb();

if(this.__pS===bG){this.__pS=null;
}},_applyHue:function(ci,cj){if(this.__pS===null){this.__pS=bL;
}
if(this.__pS!==bz){this.getChildControl(Y).setValue(ci);
}
if(this.__pS!==bv){if(this.getChildControl(bA).getBounds()){this.getChildControl(bA).setDomLeft(Math.round(ci/1.40625)+this.getChildControl(bb).getPaddingLeft());
}else{this.getChildControl(bA).setLayoutProperties({left:Math.round(ci/1.40625)});
}}
switch(this.__pS){case bz:case bv:case bL:this._setRgbFromHue();
}this._setBrightnessGradiant();

if(this.__pS===bL){this.__pS=null;
}},_applySaturation:function(cB,cC){if(this.__pS===null){this.__pS=bH;
}
if(this.__pS!==bz){this.getChildControl(X).setValue(cB);
}
if(this.__pS!==bv){this._setBrightnessGradiant();

if(this.getChildControl(bA).getBounds()){this.getChildControl(bA).setDomTop(256-Math.round(cB*2.56)+this.getChildControl(bb).getPaddingTop());
}else{this.getChildControl(bA).setLayoutProperties({top:256-Math.round(cB*2.56)});
}}
switch(this.__pS){case bz:case bv:case bH:this._setRgbFromHue();
}
if(this.__pS===bH){this.__pS=null;
}},_applyBrightness:function(cp,cq){if(this.__pS===null){this.__pS=bJ;
}
if(this.__pS!==bz){this.getChildControl(bd).setValue(cp);
}
if(this.__pS!==bf){var cr=256-Math.round(cp*2.56);

if(this.getChildControl(bB).getBounds()){this.getChildControl(bB).setDomTop(cr+this.getChildControl(bk).getPaddingTop());
}else{this.getChildControl(bB).setLayoutProperties({top:cr});
}}
switch(this.__pS){case bz:case bf:case bJ:this._setRgbFromHue();
}
if(this.__pS===bJ){this.__pS=null;
}},_onBrightnessHandleMouseDown:function(e){this.getChildControl(bB).capture();
this.__pU=bB;
var c=this.getChildControl(bu).getContainerLocation();
var b=this.getChildControl(bB).getContainerLocation();
var a=this.getChildControl(bu).getBounds();
this.__pV=c.top+(e.getDocumentTop()-b.top)-a.top;
e.stopPropagation();
},_onBrightnessHandleMouseUp:function(e){this.getChildControl(bB).releaseCapture();
this.__pU=null;
},_onBrightnessHandleMouseMove:function(e){if(this.__pU===bB){this._setBrightnessOnFieldEvent(e);
e.stopPropagation();
}},_onBrightnessFieldMouseDown:function(e){var location=this.getChildControl(bu).getContainerLocation();
var cl=this.getChildControl(bB).getBounds();
this.__pV=location.top+(cl.height/2);
this._setBrightnessOnFieldEvent(e);
this.getChildControl(bB).capture();
this.__pU=bB;
},_onBrightnessPaneMouseWheel:function(e){this.setBrightness(qx.lang.Number.limit(this.getBrightness()+e.getWheelDelta(),0,100));
e.stop();
},_setBrightnessOnFieldEvent:function(e){var cy=qx.lang.Number.limit(e.getDocumentTop()-this.__pV,0,256);
this.__pS=bf;

if(this.getChildControl(bB).getBounds()){this.getChildControl(bB).setDomTop(cy);
}else{this.getChildControl(bB).setLayoutProperties({top:cy});
}this.setBrightness(100-Math.round(cy/2.56));
this.__pS=null;
},_onHueSaturationHandleMouseUp:function(e){if(this.__pU){e.stopPropagation();
this.getChildControl(bA).releaseCapture();
this.__pU=null;
}},_onHueSaturationHandleMouseMove:function(e){if(this.__pU===bA){this._setHueSaturationOnFieldEvent(e);
e.stopPropagation();
}},_onHueSaturationFieldMouseDown:function(e){var location=this.getChildControl(be).getContainerLocation();
var cw=this.getChildControl(bA).getBounds();
var cx=this.getChildControl(be).getBounds();
this.__pW=location.top+(cw.height/2)-cx.top;
this.__pX=location.left+(cw.width/2)-cx.left;
this._setHueSaturationOnFieldEvent(e);
this.getChildControl(bA).capture();
this.__pU=bA;
},_onHueSaturationPaneMouseWheel:function(e){this.setSaturation(qx.lang.Number.limit(this.getSaturation()+e.getWheelDelta(),0,100));
e.stop();
},_setHueSaturationOnFieldEvent:function(e){var cb=qx.lang.Number.limit(e.getDocumentTop()-this.__pW,0,256);
var ca=qx.lang.Number.limit(e.getDocumentLeft()-this.__pX,0,256);
this.getChildControl(bA).setDomPosition(ca,cb);
this.__pS=bv;
this.setSaturation(100-Math.round(cb/2.56));
this.setHue(Math.round(ca*1.40625));
this.__pS=null;
},_setRedFromSpinner:function(){if(this.__pS!==null){return;
}this.__pS=by;
this.setRed(this.getChildControl(bs).getValue());
this.__pS=null;
},_setGreenFromSpinner:function(){if(this.__pS!==null){return;
}this.__pS=by;
this.setGreen(this.getChildControl(bg).getValue());
this.__pS=null;
},_setBlueFromSpinner:function(){if(this.__pS!==null){return;
}this.__pS=by;
this.setBlue(this.getChildControl(ba).getValue());
this.__pS=null;
},_setHueFromSpinner:function(){if(this.__pS!==null){return;
}this.__pS=bz;
this.setHue(this.getChildControl(Y).getValue());
this.__pS=null;
},_setSaturationFromSpinner:function(){if(this.__pS!==null){return;
}this.__pS=bz;
this.setSaturation(this.getChildControl(X).getValue());
this.__pS=null;
},_setBrightnessFromSpinner:function(){if(this.__pS!==null){return;
}this.__pS=bz;
this.setBrightness(this.getChildControl(bd).getValue());
this.__pS=null;
},_onHexFieldChange:function(e){if(this.__pS!==null){return;
}
try{var cn=this.getChildControl(bI);
var cm=qx.util.ColorUtil.hexStringToRgb(bC+cn.getValue());
}catch(cs){return;
}this.__pS=bw;
this.setRed(cm[0]);
this.setGreen(cm[1]);
this.setBlue(cm[2]);
this.__pS=null;
},_setHexFromRgb:function(){var co=qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bI).setValue(co);
},_onColorFieldClick:function(e){var cc=e.getTarget().getBackgroundColor();

if(!cc){return this.error("Missing backgroundColor value for field: "+e.getTarget());
}var cd=qx.util.ColorUtil.stringToRgb(cc);
this.setRed(cd[0]);
this.setGreen(cd[1]);
this.setBlue(cd[2]);
},_setHueFromRgb:function(){switch(this.__pS){case bz:case bv:case bf:break;
default:var cQ=qx.util.ColorUtil.rgbToHsb([this.getRed(),this.getGreen(),this.getBlue()]);
this.setHue(cQ[0]);
this.setSaturation(cQ[1]);
this.setBrightness(cQ[2]);
}},_setRgbFromHue:function(){switch(this.__pS){case by:case bw:break;
default:var ck=qx.util.ColorUtil.hsbToRgb([this.getHue(),this.getSaturation(),this.getBrightness()]);
this.setRed(ck[0]);
this.setGreen(ck[1]);
this.setBlue(ck[2]);
}},_setPreviewFromRgb:function(){var cv=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bc).setBackgroundColor(cv);
},setPreviousColor:function(ce,cf,cg){var ch=qx.util.ColorUtil.rgbToRgbString([ce,cf,cg]);
this.getChildControl(bh).setBackgroundColor(ch);
this.setRed(ce);
this.setGreen(cf);
this.setBlue(cg);
},_setBrightnessGradiant:function(){var cD=qx.util.ColorUtil;
var cE=cD.hsbToRgb([this.getHue(),this.getSaturation(),255]);
var cF=cD.rgbToRgbString(cE);
this.getChildControl(bu).setBackgroundColor(cF);
},_onAppear:function(e){var bW=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bh).setBackgroundColor(bW);
this.getChildControl(bc).setBackgroundColor(bW);
}}});
})();
(function(){var n="textfield",m="",l="downbutton",k="upbutton",j="Number",i="inner",h="PageUp",g="Boolean",f="changeValue",d="Down",K="Up",J="execute",I="PageDown",H="changeLocale",G="qx.dynlocale",F="on",E="_applyEditable",D="_applyWrap",C="keydown",B="\-]",u="mousewheel",v="_applyValue",s="number",t="_applyMinimum",q="qx.util.format.NumberFormat",r="[0-9",o="keyup",p="spinner",w="this._checkValue(value)",x="_applyMaximum",z="changeNumberFormat",y="_applyNumberFormat",A="qx.ui.form.Spinner";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(bu,bv,bw){arguments.callee.base.call(this);
var bx=new qx.ui.layout.Grid();
bx.setColumnFlex(0,1);
bx.setRowFlex(0,1);
bx.setRowFlex(1,1);
this._setLayout(bx);
this.addListener(C,this._onKeyDown,this);
this.addListener(o,this._onKeyUp,this);
this.addListener(u,this._onMouseWheel,this);

if(qx.core.Variant.isSet(G,F)){qx.locale.Manager.getInstance().addListener(H,this._onChangeLocale,this);
}this._createChildControl(n);
this._createChildControl(k);
this._createChildControl(l);
if(bu!=null){this.setMinimum(bu);
}
if(bw!=null){this.setMaximum(bw);
}
if(bv!==undefined){this.setValue(bv);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},singleStep:{check:j,init:1},pageStep:{check:j,init:10},minimum:{check:j,apply:t,init:0},value:{check:w,nullable:true,apply:v,init:0,event:f},maximum:{check:j,apply:x,init:100},wrap:{check:g,init:false,apply:D},editable:{check:g,init:true,apply:E},numberFormat:{check:q,apply:y,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__qc:null,__qd:false,__qe:false,_createChildControlImpl:function(X){var Y;

switch(X){case n:Y=new qx.ui.form.TextField();
Y.setFilter(this._getFilterRegExp());
Y.addState(i);
Y.setWidth(40);
Y.setFocusable(false);
Y.addListener(f,this._onTextChange,this);
this._add(Y,{column:0,row:0,rowSpan:2});
break;
case k:Y=new qx.ui.form.RepeatButton();
Y.addState(i);
Y.setFocusable(false);
Y.addListener(J,this._countUp,this);
this._add(Y,{column:1,row:0});
break;
case l:Y=new qx.ui.form.RepeatButton();
Y.addState(i);
Y.setFocusable(false);
Y.addListener(J,this._countDown,this);
this._add(Y,{column:1,row:1});
break;
}return Y||arguments.callee.base.call(this,X);
},_getFilterRegExp:function(){var bm=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var bl=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var bk=m;
var bi=m;

if(this.getNumberFormat()!==null){bk=this.getNumberFormat().getPrefix()||m;
bi=this.getNumberFormat().getPostfix()||m;
}var bj=new RegExp(r+qx.lang.String.escapeRegexpChars(bm)+qx.lang.String.escapeRegexpChars(bl)+qx.lang.String.escapeRegexpChars(bk)+qx.lang.String.escapeRegexpChars(bi)+B);
return bj;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var U=this.getChildControl(n);
U.getFocusElement().focus();
U.selectAllText();
},_applyMinimum:function(Q,R){if(this.getMaximum()<Q){this.setMaximum(Q);
}
if(this.getValue()<Q){this.setValue(Q);
}else{this._updateButtons();
}},_applyMaximum:function(be,bf){if(this.getMinimum()>be){this.setMin(be);
}
if(this.getValue()>be){this.setValue(be);
}else{this._updateButtons();
}},_applyEnabled:function(bA,bB){arguments.callee.base.call(this,bA,bB);
this._updateButtons();
},_checkValue:function(bn){return typeof bn===s&&bn>=this.getMinimum()&&bn<=this.getMaximum();
},_applyValue:function(ba,bb){var bc=this.getChildControl(n);
this._updateButtons();
this.__qc=ba;
if(ba!==null){if(this.getNumberFormat()){bc.setValue(this.getNumberFormat().format(ba));
}else{bc.setValue(ba+m);
}}else{bc.setValue(m);
}},_applyEditable:function(L,M){var N=this.getChildControl(n);

if(N){N.setReadOnly(!L);
}},_applyWrap:function(bg,bh){this._updateButtons();
},_applyNumberFormat:function(a,b){var c=this.getChildControl(n);
c.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(z,this._onChangeNumberFormat,this);
this._applyValue(this.__qc,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(n);
},_updateButtons:function(){var bq=this.getChildControl(k);
var bp=this.getChildControl(l);
var br=this.getValue();

if(!this.getEnabled()){bq.setEnabled(false);
bp.setEnabled(false);
}else{if(this.getWrap()){bq.setEnabled(true);
bp.setEnabled(true);
}else{if(br!==null&&br<this.getMaximum()){bq.setEnabled(true);
}else{bq.setEnabled(false);
}if(br!==null&&br>this.getMinimum()){bp.setEnabled(true);
}else{bp.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case h:this.__qd=true;
case K:this.getChildControl(k).press();
break;
case I:this.__qe=true;
case d:this.getChildControl(l).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case h:this.getChildControl(k).release();
this.__qd=false;
break;
case K:this.getChildControl(k).release();
break;
case I:this.getChildControl(l).release();
this.__qe=false;
break;
case d:this.getChildControl(l).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var bs=this.getChildControl(n);
var bt;
if(this.getNumberFormat()){try{bt=this.getNumberFormat().parse(bs.getValue());
}catch(bo){}}if(bt===undefined){bt=parseFloat(bs.getValue(),10);
}if(!isNaN(bt)){if(bt>this.getMaximum()){bs.setValue(this.getMaximum()+m);
return;
}else if(bt<this.getMinimum()){bs.setValue(this.getMinimum()+m);
return;
}this.setValue(bt);
}else{this._applyValue(this.__qc,undefined);
}},_onChangeLocale:function(S){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var T=this.getChildControl(n);
T.setFilter(this._getFilterRegExp());
T.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(V){var W=this.getChildControl(n);
W.setFilter(this._getFilterRegExp());
W.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__qd){var bz=this.getValue()+this.getPageStep();
}else{var bz=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(bz>this.getMaximum()){var by=this.getMaximum()-bz;
bz=this.getMinimum()+by;
}}this.gotoValue(bz);
},_countDown:function(){if(this.__qe){var P=this.getValue()-this.getPageStep();
}else{var P=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(P<this.getMinimum()){var O=this.getMinimum()+P;
P=this.getMaximum()-O;
}}this.gotoValue(P);
},gotoValue:function(bd){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),bd)));
}},destruct:function(){if(qx.core.Variant.isSet(G,F)){qx.locale.Manager.getInstance().removeListener(H,this._onChangeLocale,this);
}}});
})();
(function(){var c="pane",b="qx.ui.container.Scroll";
qx.Class.define(b,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){arguments.callee.base.call(this);

if(content){this.add(content);
}},members:{add:function(d){this.getChildControl(c).add(d);
},remove:function(a){this.getChildControl(c).remove(a);
},getChildren:function(){return this.getChildControl(c).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(c);
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
(function(){var j="checked",i="qx.ui.form.RadioGroup",h="Boolean",g="menu-radiobutton",f="_applyValue",d="qx.ui.menu.RadioButton",c="changeValue",b="_applyGroup",a="execute";
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(k,l){arguments.callee.base.call(this);
if(k!=null){this.setLabel(k);
}
if(l!=null){this.setMenu(l);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(o,p){o?this.addState(j):this.removeState(j);
},_applyGroup:function(m,n){if(n){n.remove(this);
}
if(m){m.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var n="",m="Console",l="_consoleButton",k="_findField",j="&gt;",i="changeValue",h="_stack",g="execute",f="Filter...",d='"',F="'",E="&lt;",D=">",C="_consoleView",B="<",A="changeSelection",z="&amp;",y="&#39;",x="DOM",w="inspector.console.ConsoleWindow",u="_domButton",v="&quot;",s="&",t="?",q="Clear",r="_domView",p="_clearButton";
qx.Class.define(w,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,m);
this._clearButton=new qx.ui.toolbar.Button(q);
this._toolbar.add(this._clearButton);
this._clearButton.addListener(g,function(){this._stack.getSelection()[0].clear();
},this);
this._toolbar.add(new qx.ui.toolbar.Separator());
this._consoleButton=new qx.ui.toolbar.RadioButton(m);
this._toolbar.add(this._consoleButton);
this._domButton=new qx.ui.toolbar.RadioButton(x);
this._toolbar.add(this._domButton);
this._toolbar.addSpacer();
this._findField=new qx.ui.form.TextField();
this._findField.setPlaceholder(f);
this._findField.setLiveUpdate(true);
this._findField.setMarginRight(5);
this._toolbar.add(this._findField);
this._findField.addListener(i,function(e){this._stack.getSelection()[0].filter(e.getData());
},this);
this._stack=new qx.ui.container.Stack();
this.add(this._stack,{flex:1});
this._consoleView=new inspector.console.ConsoleView(this);
this._stack.add(this._consoleView,{flex:1});
this._domView=new inspector.console.DomView(this);
this._stack.add(this._domView,{flex:1});
var M=new qx.ui.form.RadioGroup(this._consoleButton,this._domButton);
M.addListener(A,function(e){this._findField.setValue(n);

if(M.getSelection()[0]==this._consoleButton){this._stack.setSelection([this._consoleView]);
}else if(M.getSelection()[0]==this._domButton){this._stack.setSelection([this._domView]);
}else{this._consoleButton.setValue(true);
}},this);
},members:{setInitSizeAndPosition:function(){var K=qx.bom.Viewport.getWidth()-300;
var L=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(0,2*L+30);
this.setWidth(K);
this.setHeight(L);
},escapeHtml:function(G){function H(I){switch(I){case B:return E;
case D:return j;
case s:return z;
case F:return y;
case d:return v;
}return t;
}return String(G).replace(/[<>&"']/g,H);
},inspectObjectByInternalId:function(J){var o=this._consoleView.getObjectById(J);
this.inspectObject(o);
},inspectObjectByDomSelecet:function(b,c){this._domView.setObjectByIndex(b,c);
this._findField.setValue(n);
},inspectObject:function(a){this._domView.setObject(a.object,a.name);
this._domButton.setValue(true);
},goToDefaultView:function(){this._consoleButton.setValue(true);
this._domView.clear();
}},destruct:function(){this._disposeObjects(p,l,u,k,h,C,r);
}});
})();
(function(){var t="_applyDynamic",s="changeSelection",r="Boolean",q="qx.ui.container.Stack";
qx.Class.define(q,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(s,this.__qf,this);
},properties:{dynamic:{check:r,init:false,apply:t}},members:{_applyDynamic:function(w){var y=this._getChildren();
var x=this.getSelection()[0];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z!=x){if(w){y[i].exclude();
}else{y[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(A){return A.isEnabled();
},__qf:function(e){var u=e.getOldData()[0];
var v=e.getData()[0];

if(u){if(this.isDynamic()){u.exclude();
}else{u.hide();
}}
if(v){v.show();
}},add:function(j){this._add(j);
var k=this.getSelection()[0];

if(!k){this.setSelection([j]);
}else if(k!==j){if(this.isDynamic()){j.exclude();
}else{j.hide();
}}},remove:function(g){this._remove(g);

if(this.getSelection()[0]===g){var h=this._getChildren()[0];

if(h){this.setSelection([h]);
}else{this.resetSelection();
}}},indexOf:function(a){return this._indexOf(a);
},getChildren:function(){return this._getChildren();
},previous:function(){var o=this.getSelection()[0];
var m=this._indexOf(o)-1;
var p=this._getChildren();

if(m<0){m=p.length-1;
}var n=p[m];
this.setSelection([n]);
},next:function(){var c=this.getSelection()[0];
var b=this._indexOf(c)+1;
var d=this._getChildren();
var f=d[b]||d[0];
this.setSelection([f]);
}}});
})();
(function(){var K="",J=")",I="Tab",H="'>",G="qx.core.Init.getApplication().inspectObjectByInternalId(",F="Down",E="Up",D="warning",C="error",B="Control",bK="info",bJ="(",bI="<span class='ins_console_link' onclick='",bH="display",bG="<div class='ins_console_common'><div class='",bF="Escape",bE="Enter",bD="ins_console_warn",bC="]</span> ",bB="ins_console_return_qxobject",R="changeValue",S="qx.client",P="keydown",Q="Courier New",N=", ...",O="' class='ins_console_icon'>",L="\"qx.core.Init.getApplication().setWidgetByHash('",M="<img src='",X="ins_console_return_primitive",Y="ins_console_debug",bh="&nbsp;",bf="<span class='ins_console_dom_link' onclick='",bp="input",bk="Space",bx=">>>&nbsp;",bu="ins_console_text",bb="middle",bA=" more",bz="<span class='ins_console_link' onclick=",by="ins_console_error",ba="inspector.console.ConsoleView",bd="ins_console_info",be=" </span>",bg="</div></div>",bi="]",bl="[",br="inspector/images/shell/",bw=", ",T="keyup",U="ins_console_return_object",bc="ins_console_return_array",bo="</span>",bn="mshtml",bm="'>inspect Object</span>",bt="keypress",bs="none",bj="', 'console');\"> ",bq=" [",A=">>>",bv=".",V="Icon.png",W="scroll";
qx.Class.define(ba,{extend:qx.ui.core.Widget,construct:function(console){arguments.callee.base.call(this);
this._console=console;
this._autoCompletePopup=new inspector.console.AutoCompletePopup(this);
this._history=[];
this._historyCounter=-1;
this._objectFolder=[];
this._objectFolderIndex=0;
this._filter=K;
this._setLayout(new qx.ui.layout.VBox());
this._content=new qx.ui.embed.Html(K);
this._content.setOverflowY(W);
this._add(this._content,{flex:1});
var bX=new qx.ui.container.Composite();
bX.setDecorator(bp);
var bY=new qx.ui.layout.HBox();
bY.setAlignY(bb);
bX.setLayout(bY);
this._add(bX);
var bW=new qx.ui.basic.Label(A);
var bV=new qx.bom.Font(12,[Q]);
bW.setFont(bV);
bX.add(bW);
this._inputTextField=new qx.ui.form.TextField(K);
this._inputTextField.setLiveUpdate(true);
this._inputTextField.setDecorator(null);
this._inputTextField.setFont(bV);
bX.add(this._inputTextField,{flex:1});
this._inputTextField.addListener(P,this._keyDownHandler,this);
this._inputTextField.addListener(T,this._keyUpHandler,this);
this._inputTextField.addListener(bt,this._keyPressHandler,this);
this._inputTextField.addListener(R,function(e){if(this._autoCompletePopup.isOnScreen()){this._autoCompletePopup.load(e.getData());
}},this);
var ca=qx.core.Init.getApplication().getIframeWindowObject();
ca.qx.log.Logger.register(inspector.console.Appender);
inspector.console.Appender.consoleView=this;
},members:{clear:function(){this._content.setHtml(K);
},getObjectById:function(a){return this._objectFolder[a];
},filter:function(b){this._filter=b;
try{var d=this._content.getContentElement().getDomElement().childNodes;
var c=new RegExp(this._filter);
for(var i=0;i<d.length;i++){if(qx.core.Variant.isSet(S,bn)){var content=d[i].innerText;
}else{var content=d[i].textContent;
}if(qx.dom.Node.isElement(d[i])){if(c.test(content)){qx.bom.element.Style.set(d[i],bH,null);
}else{qx.bom.element.Style.set(d[i],bH,bs);
}}}}catch(e){alert("Unable to filter: "+e);
}},chooseAutoCompleteValue:function(){var p=this._inputTextField.getValue();
var name=this._autoCompletePopup.getCurrentSelection();
if(name){var o=p.substring(p.lastIndexOf(bv)+1);
name=name.substring(o.length,name.length);
this.appendString(name);
}this._autoCompletePopup.hide();
this._inputTextField.focus();
},appendString:function(bM){if(bM!=null){this._inputTextField.setValue(this._inputTextField.getValue()+bM);
if(this._inputTextField.getValue().lastIndexOf(bJ)!=-1){var bN=this._inputTextField.getValue().lastIndexOf(bJ)+1;
var bO=this._inputTextField.getValue().length-1;
this._inputTextField.setTextSelection(bN,bO);
}}},_process:function(bR){this._printText(this._console.escapeHtml(bR));

try{var bS=inspector.console.Util.evalOnIframe(bR);

if(bS!=null){this._objectFolder[this._objectFolderIndex]={name:bR,object:bS};
this._printReturnValue(bS);
this._objectFolderIndex++;
}}catch(bL){this.error(bL);
}},_keyDownHandler:function(e){if(e.getKeyIdentifier()==bF){this._autoCompletePopup.hide();
return;
}if(e.getKeyIdentifier()==bE){if(!this._autoCompletePopup.isOnScreen()){this._history.unshift(this._inputTextField.getValue());
this._process(this._inputTextField.getValue());
this._inputTextField.setValue(K);
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
}if(e.getKeyIdentifier()==B){this._ctrl=true;
return;
}if(e.getKeyIdentifier()==bk||e.getKeyIdentifier()==I){if(this._ctrl||e.getKeyIdentifier()==I){e.preventDefault();
if(e.getKeyIdentifier()==I){var self=this;
window.setTimeout(function(){var length=self._inputTextField.getValue().length;
self._inputTextField.setTextSelection(length,length);
},0);
}try{var u=qx.bom.element.Location.getLeft(this.getContainerElement().getDomElement());
var top=qx.bom.element.Location.getTop(this._inputTextField.getContentElement().getDomElement())-this._autoCompletePopup.getHeight();
this._autoCompletePopup.open(this._inputTextField.getValue(),u,top);
var self=this;
window.setTimeout(function(){self._inputTextField.focus();
},0);
}catch(n){this.info(n);
}}return;
}},_keyUpHandler:function(e){if(e.getKeyIdentifier()==B){this._ctrl=false;
}},_keyPressHandler:function(e){if(this._autoCompletePopup.isOnScreen()){if(e.getKeyIdentifier()==F){this._autoCompletePopup.selectionDown();
}else if(e.getKeyIdentifier()==E){this._autoCompletePopup.selectionUp();
}}},_scrollToLastLine:function(){qx.ui.core.queue.Manager.flush();
var self=this;
window.setTimeout(function(){var ci=self._content.getContentElement();
var ch=qx.bom.element.Dimension.getContentHeight(self._content.getContentElement().getDomElement());
ci.scrollToY(ch);
},0);
},_printReturnValue:function(q){var r=qx.core.Init.getApplication().getIframeWindowObject();
if(r&&q instanceof r.qx.core.Object){this._printQxObject(q);
}else if(q instanceof r.Array){var s=this._printArray(q);
var t=this._getLabel(bI+G+this._objectFolderIndex+J+H+s+bo,bc);
this._content.setHtml(this._content.getHtml()+t);
return;
}else if(r&&(q instanceof r.Object||q==r.window||q==r.document)){var t=this._getLabel(bI+G+this._objectFolderIndex+J+H+q+be,U);
this._content.setHtml(this._content.getHtml()+t);
return;
}else{var t=this._getLabel(q,X);
this._content.setHtml(this._content.getHtml()+t);
}this._scrollToLastLine();
},_printQxObject:function(bP){var bQ=this._getLabel(bz+L+bP.toHashCode()+bj+bP.classname+bq+bP.toHashCode()+bC+bf+G+this._objectFolderIndex+J+bm,bB);
this._content.setHtml(this._content.getHtml()+bQ);
this._scrollToLastLine();
},_printText:function(bT){var bU=this._getLabel(bx+bT,bu);
this._content.setHtml(this._content.getHtml()+bU);
this._scrollToLastLine();
},_getLabel:function(f,g,h){var f=f;
if(h==bK||h==C||h==D){var k=qx.util.ResourceManager.getInstance().toUri(br+h+V);
var j=M+k+O;
f=j+bh+f;
}f=bG+g+H+f+bg;
return f;
},_printArray:function(w){var x=qx.core.Init.getApplication().getIframeWindowObject();

if(w instanceof x.Array){var y=new qx.util.StringBuilder();
var length=w.length;
var z=K;

if(length>2){z=N+(length-2)+bA;
length=2;
}
for(var i=0;i<length;i++){if(!y.isEmpty()){y.add(bw);
}y.add(this._printArray(w[i]));
}return bl+y.get()+z+bi;
}else{return w;
}},error:function(cf){if(!this._console.isVisible()){this._console.open();
}var cg=this._getLabel(cf,by,C);
this._content.setHtml(this._content.getHtml()+cg);
this._scrollToLastLine();
},warn:function(cd){if(!this._console.isVisible()){this._console.open();
}var ce=this._getLabel(cd,bD,D);
this._content.setHtml(this._content.getHtml()+ce);
this._scrollToLastLine();
},info:function(cb){if(!this._console.isVisible()){this._console.open();
}var cc=this._getLabel(cb,bd,bK);
this._content.setHtml(this._content.getHtml()+cc);
this._scrollToLastLine();
},debug:function(l){if(!this._console.isVisible()){this._console.open();
}var m=this._getLabel(l,Y);
this._content.setHtml(this._content.getHtml()+m);
this._scrollToLastLine();
},dispose:function(){var v=qx.core.Init.getApplication().getIframeWindowObject();
v.qx.log.Logger.unregister(inspector.console.Appender);
}}});
})();
(function(){var v="",u="18.gif",t="%",s=".",r="function",q="#FFFFFF",p="inspector/images/autocomplete/property_",o="qx.ui.table.pane.Pane",n="_table",m="inspector/images/autocomplete/method_",J="visible",I="^",H="__",G="public",F=")",E="_",D="(",C="_tableModel",B="inspector.console.AutoCompletePopup",A=", ",y="private",z="click",w="protected",x="window.";
qx.Class.define(B,{extend:qx.ui.popup.Popup,construct:function(K){arguments.callee.base.call(this);
this._controller=K;
this.setLayout(new qx.ui.layout.VBox());
this.setBackgroundColor(q);
this.setHeight(140);
this.setWidth(300);
qx.core.Init.getApplication().getRoot().add(this);
this._tableModel=new qx.ui.table.model.Simple();
this._tableModel.setColumns([v,r]);
this._table=new qx.ui.table.Table(this._tableModel);
this._table.setWidth(298);
this._table.setHeight(138);
this._table.setShowCellFocusIndicator(false);
this._table.setColumnVisibilityButtonVisible(false);
this._table.setStatusBarVisible(false);
this._table.getTableColumnModel().setColumnWidth(0,22);
this._table.getTableColumnModel().setColumnWidth(1,260);
var L=new qx.ui.table.cellrenderer.Image(18,18);
this._table.getTableColumnModel().setDataCellRenderer(0,L);
this._table.setRowHeight(20);
this.add(this._table);
this._table.addListener(z,function(e){if(e.getTarget().classname==o){this._controller.chooseAutoCompleteValue();
}},this);
},members:{selectionUp:function(){var M=this._table.getSelectionModel().getLeadSelectionIndex();
if(M>0){M--;
}else{M=this._tableModel.getData().length-1;
}this._table.getSelectionModel().addSelectionInterval(M,M);
this._table.setFocusedCell(0,M,true);
},selectionDown:function(){var R=this._table.getSelectionModel().getLeadSelectionIndex();
var S=this._tableModel.getData().length-1;
if(R!=S){R++;
}else{R=0;
}this._table.getSelectionModel().addSelectionInterval(R,R);
this._table.setFocusedCell(0,R,true);
},open:function(P,Q,top){this.moveTo(Q,top);
this.show();
this.load(P);
},load:function(a){var b=qx.core.Init.getApplication().getIframeWindowObject();
this._table.getSelectionModel().setSelectionInterval(0,0);
this._table.setFocusedCell(0,0,true);
this._tableModel.setData([]);
var g=a.substring(a.lastIndexOf(s)+1);
if(a==g){a=x+a;
}a=a.substring(0,a.lastIndexOf(s));
var d=null;

try{d=inspector.console.Util.evalOnIframe(a);
}catch(N){this.hide();
return;
}if(!(d instanceof b.Object)&&!d==b.window){this.hide();
return ;
}if(d instanceof b.qx.core.Object){this._tableModel.setColumnNamesByIndex([v,d.classname]);
}else{this._tableModel.setColumnNamesByIndex([v,a]);
}var h=new RegExp(I+g);
var i=[];
for(var name in d){try{if(h.test(name)){if(name.substring(0,2)==H){var f=y;
}else if(name.substring(0,1)==E){var f=w;
}else{var f=G;
}if(d[name] instanceof b.Function){var k=name+D;
for(var j=0;j<d[name].length;j++){if(j==d[name].length-1){k+=unescape(t+(61+j));
}else{k+=unescape(t+(61+j)+A);
}}k+=F;
var c=m+f+u;
i.push([c,k]);
}else{var c=p+f+u;
i.push([c,name]);
}}}catch(l){}}
if(i.length<1){this._table.resetSelection();
}this._tableModel.setData(i);
this._tableModel.sortByColumn(1,true);
},isOnScreen:function(){return this.getVisibility()==J;
},getCurrentSelection:function(){var O=this._table.getSelectionModel().getLeadSelectionIndex();
if(O!=-1){return this._tableModel.getData()[O][1]+v;
}return null;
}},destruct:function(){this._controller=null;
this._disposeObjects(C,n);
}});
})();
(function(){var t="px",s=".qooxdoo-table-cell-icon {",r="abstract",q="",p="qx.ui.table.cellrenderer.AbstractImage",o=" qooxdoo-table-cell-icon",n="<div></div>",m="'",l="no-repeat",k="}",e="  text-align:center;",j="inline-block",h="static",d="top",c="  padding-top:1px;",g="title='",f="string",i="-moz-inline-box";
qx.Class.define(p,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){arguments.callee.base.call(this);
var E=arguments.callee.self;

if(!E.stylesheet){E.stylesheet=qx.bom.Stylesheet.createElement(s+e+c+k);
}},members:{__qg:16,__qh:16,_insetY:2,__qi:null,_identifyImage:function(H){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(u){var v=this._identifyImage(u);
if(v==null||typeof u==f){v={url:v,tooltip:null};
}
if(u.width&&u.height){var w={width:u.imageWidth,height:u.imageHeight};
}else{w=this.__qj(v.url);
}v.width=w.width;
v.height=w.height;
return v;
},__qj:function(z){var C=qx.util.ResourceManager.getInstance();
var B=qx.io.ImageLoader;
var A,D;
if(C.has(z)){A=C.getImageWidth(z);
D=C.getImageHeight(z);
}else if(B.isLoaded(z)){A=B.getWidth(z);
D=B.getHeight(z);
}else{A=this.__qg;
D=this.__qh;
}return {width:A,height:D};
},createDataCellHtml:function(x,y){this.__qi=this._getImageInfos(x);
return arguments.callee.base.call(this,x,y);
},_getCellClass:function(b){return arguments.callee.base.call(this)+o;
},_getContentHtml:function(a){var content=n;
if(this.__qi.url){var content=qx.bom.element.Decoration.create(this.__qi.url,l,{width:this.__qi.width+t,height:this.__qi.height+t,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?i:j,verticalAlign:d,position:h});
}return content;
},_getCellAttributes:function(F){var G=this.__qi.tooltip;

if(G){return g+G+m;
}else{return q;
}}},destruct:function(){this.__qi=null;
}});
})();
(function(){var b="qx.ui.table.cellrenderer.Image",a="";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(e,f){arguments.callee.base.call(this);

if(e){this.__qk=e;
}
if(f){this.__ql=f;
}this.__qm=qx.util.AliasManager.getInstance();
},members:{__qm:null,__ql:16,__qk:16,_identifyImage:function(c){var d={imageWidth:this.__qk,imageHeight:this.__ql};

if(c.value==a){d.url=null;
}else{d.url=this.__qm.resolve(c.value);
}d.tooltip=c.tooltip;
return d;
}},destruct:function(){this.__qm=null;
}});
})();
(function(){var r="qx.client",q="",p="');",o="webkit",n="webkit|mshtml|gecko",m="  } catch (ex) {",l="inspector.console.Util",k="  }",j="mshtml",i="  try {",c="return eval('",h="};",f="window.top.inspector.$$inspector = function()",b="{",a="    return ex;",e="opera",d="$2",g="return eval.call(window, '";
qx.Class.define(l,{statics:{evalOnIframe:function(t){var u=qx.core.Init.getApplication().getIframeWindowObject();
var w=null;

try{if(qx.core.Variant.isSet(r,n)){if(qx.core.Variant.isSet(r,j)||qx.core.Variant.isSet(r,o)){t=t.replace(/^(\s*var\s+)(.*)$/,d);
}var v=q;
if(qx.core.Variant.isSet(r,o)&&qx.bom.client.Engine.FULLVERSION>=528){v=c+t+p;
}else{v=g+t+p;
}u.qx.lang.Function.globalEval([f,b,i,v,m,a,k,h].join(q));
w=inspector.$$inspector.call(qx.core.Init.getApplication().getSelectedObject());
}else if(qx.core.Variant.isSet(r,e)){w=(function(x){return u.eval(x);
}).call(qx.core.Init.getApplication().getSelectedObject(),t);
}if(w instanceof u.Error){throw w;
}}catch(s){throw s;
}return w;
}}});
})();
(function(){var w="none",v="text",u="",t="userSelect",s="color",r="String",q="0px",p="webkit",o="changeHtml",n="_applyCssClass",k="class",m="qx.ui.embed.Html",l="_applyHtml",j="qx.client",i="html";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(x){arguments.callee.base.call(this);

if(x!=null){this.setHtml(x);
}},properties:{html:{check:r,apply:l,event:o,nullable:true},cssClass:{check:r,init:u,apply:n},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(f,g){var h=this.getContentElement();
h.setAttribute(i,f||u);
h.setStyles({"padding":q,"border":w});
},_applyCssClass:function(z,A){this.getContentElement().setAttribute(k,z);
},_applySelectable:function(y){arguments.callee.base.call(this,y);
if(qx.core.Variant.isSet(j,p)){this.getContainerElement().setStyle(t,y?v:w);
this.getContentElement().setStyle(t,y?v:w);
}},_applyFont:function(a,b){var c=a?qx.theme.manager.Font.getInstance().resolve(a).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(c);
},_applyTextColor:function(d,e){if(d){this.getContentElement().setStyle(s,qx.theme.manager.Color.getInstance().resolve(d));
}else{this.getContentElement().removeStyle(s);
}}}});
})();
(function(){var r=": ",q=", ",p="info",o="{ ",n="]: ",m="ms ",l=" ]",k="map",h="warn",g=" }",d="[ ",f="[",e="inspector.console.Appender",c="string",b="error";
qx.Class.define(e,{statics:{consoleView:null,process:function(D){if(this.consoleView){var E=this.__qn(D);

if(D.level==p){this.consoleView.info(E);
}else if(D.level==h){this.consoleView.warn(E);
}else if(D.level==b){this.consoleView.error(E);
}else{this.consoleView.debug(E);
}}},__qn:function(s){var v=qx.core.Init.getApplication().getIframeWindowObject();
var C=new qx.util.StringBuilder();
var z,B,u,x;
C.add(s.offset,m);

if(s.object){var t=v.qx.core.ObjectRegistry.fromHashCode(s.object);

if(t){C.add(t.classname,f,t.$$hash,n);
}}else if(s.clazz){C.add(s.clazz.classname,r);
}var w=s.items;

for(var i=0,A=w.length;i<A;i++){z=w[i];
B=z.text;

if(B instanceof v.Array){var x=[];

for(var j=0,y=B.length;j<y;j++){u=B[j];

if(typeof u===c){x.push(this.__qo(u));
}else if(u.key){x.push(u.key+r+this.__qo(u.text));
}else{x.push(this.__qo(u.text));
}}
if(z.type===k){C.add(o,x.join(q),g);
}else{C.add(d,x.join(q),l);
}}else{C.add(this.__qo(B));
}}return C.get();
},__qo:function(a){return this.consoleView._console.escapeHtml(a);
}}});
})();
(function(){var g="mshtml",f="pop.push.reverse.shift.sort.splice.unshift.join.slice",e="number",d="qx.type.BaseArray",c="qx.client",b=".";
qx.Class.define(d,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function p(q){if(qx.core.Variant.isSet(c,g)){o.prototype={length:0,$$isArray:true};
var t=f.split(b);

for(var length=t.length;length;){o.prototype[t[--length]]=Array.prototype[t[length]];
}}var u=Array.prototype.slice;
o.prototype.concat=function(){var j=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var h;

if(arguments[i] instanceof o){h=u.call(arguments[i],0);
}else if(arguments[i] instanceof Array){h=arguments[i];
}else{h=[arguments[i]];
}j.push.apply(j,h);
}return j;
};
o.prototype.toString=function(){return u.call(this,0).toString();
};
o.prototype.toLocaleString=function(){return u.call(this,0).toLocaleString();
};
o.prototype.constructor=o;
o.prototype.indexOf=qx.lang.Core.arrayIndexOf;
o.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
o.prototype.forEach=qx.lang.Core.arrayForEach;
o.prototype.some=qx.lang.Core.arraySome;
o.prototype.every=qx.lang.Core.arrayEvery;
var r=qx.lang.Core.arrayFilter;
var s=qx.lang.Core.arrayMap;
o.prototype.filter=function(){var m=new this.constructor;
m.push.apply(m,r.apply(this,arguments));
return m;
};
o.prototype.map=function(){var a=new this.constructor;
a.push.apply(a,s.apply(this,arguments));
return a;
};
o.prototype.slice=function(){var k=new this.constructor;
k.push.apply(k,Array.prototype.slice.apply(this,arguments));
return k;
};
o.prototype.splice=function(){var l=new this.constructor;
l.push.apply(l,Array.prototype.splice.apply(this,arguments));
return l;
};
o.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
o.prototype.valueOf=function(){return this.length;
};
return o;
}function o(length){if(arguments.length===1&&typeof length===e){this.length=-1<length&&length===length>>.5?length:this.push(length);
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
(function(){var K="",J="'>",I="inspector/images/spacer.gif",H="</td></tr>",G="</td>",F="</span>",E="'><img class='ins_dom_front_image' src='",D="qx.core.Init.getApplication().inspectObjectByDomSelecet(",C="<tr><td class='",B="</div>",bM=")",bL="</span></td></tr>",bK="string",bJ="<div class='ins_dom_no_prop'>No object selected.</div>",bI="<td><span class='ins_dom_null'>",bH="\")",bG="<td class='ins_dom_object'>",bF=", \"",bE="<tr><td class='ins_dom_key'><img class='ins_dom_front_image' src='",bD=".",R="<div class='ins_dom_func'>",S=" &raquo; <span class='ins_dom_return_path_link' onclick='",P="<div class='ins_dom_return_path_main'>",Q="<td class='ins_dom_self_ref'>self reference</td></tr>",N="<table class='ins_dom_table'>",O=" more</span> ]",L="'><a onclick='",M="&quot;</span>",X="<td class='ins_dom_string'>&quot;Error occurs by reading value!&quot;</td></tr>",Y="Object",bj="inspector/images/open.png",bg="', 'console');\">select Object</u>",br="toString",bm=", ",bz="<a onclick='",bw="<td class='ins_dom_string'>&quot;",bc="<td class='ins_dom_basic'>",bC="ins_dom_key_number",bB="<td class='ins_dom_func_object'>",bA="<span class='ins_dom_func_object'>function()</span>",bb=")'>",be="</a>",bf=" ]",bi="</a></td>",bk="<span class='ins_dom_basic'>",bn="<div class='ins_dom_no_prop'>There are no properties to show for this object.</div>",bt="&quot;</td></tr>",by="_htmlEmbed",T="ins_dom_key",U="</table>",bd="</a> <a style='color: #000000;' onclick=\"qx.core.Init.getApplication().setWidgetByHash('",bq="<span class='ins_dom_object'>",bp=" &raquo; <span class='ins_dom_return_path_selected'>",bo=", ... <span class='ins_dom_array_more'>",bv="[Class ",bu="qx_srcview",bl="[ ",bs="Error occurs by reading value!",y="<pre>",bx="appear",V="]</span>",W="scroll",bh="<span class='ins_dom_string'>&quot;",z="</pre>",A="inspector.console.DomView",ba="<span class='ins_dom_object'>[";
qx.Class.define(A,{extend:qx.ui.core.Widget,statics:{SEARCH_TERM:"Search..."},construct:function(console){arguments.callee.base.call(this);
this._console=console;
this._filter=K;
this._setLayout(new qx.ui.layout.VBox());
this._htmlEmbed=new qx.ui.embed.Html(bJ);
this._htmlEmbed.setOverflowY(W);
this._add(this._htmlEmbed,{flex:1});
this.addListenerOnce(bx,function(){this._htmlEmbed.getContentElement().getDomElement().id=bu;
},this);
this._breadCrumb=[];
},members:{clear:function(){this._htmlEmbed.setHtml(bJ);
},setObject:function(u,name){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
this._breadCrumb=[];
var w=name.split(bD);
for(var i=0;i<w.length-1;i++){var x=K;
for(var j=0;j<=i;j++){x+=w[j];
if(j!=i){x+=bD;
}}var v=eval(x);
this._breadCrumb[i]={object:v,name:w[i]};
}name=w[w.length-1];
this._htmlEmbed.setHtml(this._getHtmlToObject(u,i,name));
},setObjectByIndex:function(c,d){this._filter=K;

try{if(d){var g=this._breadCrumb[c].object[d];
for(var i=0;i<this._breadCrumb.length;i++){if(this._breadCrumb[i].object==g){this._htmlEmbed.setHtml(this._getHtmlToObject(g,i,d));
this._htmlEmbed.getContentElement().scrollToY(0);
return ;
}}this._htmlEmbed.setHtml(this._getHtmlToObject(g,(c)+1,d));
this._htmlEmbed.getContentElement().scrollToY(0);
}else{var g=this._breadCrumb[c].object;
var f=this._breadCrumb[c].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(g,c,f));
this._htmlEmbed.getContentElement().scrollToY(0);
this._breadCrumb.splice(c+1,this._breadCrumb.length-c+1);
}}catch(e){alert("Can not select this Object: "+e);
}},filter:function(bN){this._filter=bN;
if(this._breadCrumb.length>0){var bO=this._breadCrumb.length-1;
var bP=this._breadCrumb[bO].object;
var name=this._breadCrumb[bO].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(bP,bO,name));
}},getFilter:function(){if(this._filter==K){return inspector.console.DomView.SEARCH_TERM;
}else{return this._filter;
}},getCurrentSelectedClassname:function(){if(this._breadCrumb.length>0){var h=this._breadCrumb[this._breadCrumb.length-1].object;
if(h.classname!=undefined){if(qx.Class.isDefined(h.classname)||qx.Interface.isDefined(h.classname)||qx.Mixin.isDefined(h.classname)||qx.Theme.isDefined(h.classname)){return h.classname;
}}}return null;
},_getHtmlToObject:function(o,bQ,name){var bU=new qx.util.StringBuilder();
if(name==undefined){var name=Y;
}this._breadCrumb[bQ]={object:o,name:name};
bU.add(this._getReturnPath(bQ));
var bW=true;
var bY=this._sortAndFilterProperties(o);
bU.add(N);
for(var i=0;i<bY.length;i++){bW=false;
bU.add(K);
if(!isNaN(bY[i].key)){var bR=bC;
}else{var bR=T;
}try{bY[i].value instanceof this._iFrameWindow.Object;
}catch(k){var bT=qx.util.ResourceManager.getInstance().toUri(I);
bU.add(C+bR+E+bT+J+this._console.escapeHtml(bY[i].key)+G);
bU.add(bI+bY[i].value+bL);
continue;
}if(!(bY[i].value instanceof this._iFrameWindow.Object)&&bY[i].value!=this._iFrameWindow.window&&bY[i].value!=this._iFrameWindow.document){var bT=qx.util.ResourceManager.getInstance().toUri(I);
bU.add(C+bR+E+bT+J+this._console.escapeHtml(bY[i].key)+G);
if(bY[i].value==null){bU.add(bI+bY[i].value+bL);
}else if(typeof bY[i].value==bK){bU.add(bw+this._console.escapeHtml(bY[i].value)+bt);
}else{bU.add(bc+bY[i].value+H);
}}else{if(bY[i].value instanceof this._iFrameWindow.Function){var bS=bY[i].value.toString();
if(bS.search(/native code/)!=-1){continue;
}}var bX=null;

if(bX==null){bX=new qx.util.StringBuilder();
}else{bX.clear();
}if(bY[i].value!=o){var bT=qx.util.ResourceManager.getInstance().toUri(bj);
bX.add(C+bR+L+D+bQ+bF+bY[i].key+bH+E+bT+J+this._console.escapeHtml(bY[i].key)+bi);
}if(bY[i].value==o){var bT=qx.util.ResourceManager.getInstance().toUri(I);
bU.add(bE+bT+J+bY[i].key+G);
bU.add(Q);
}else if(bY[i].value instanceof this._iFrameWindow.Function){bU.add(bX.get());
if(bY[i].value.toString().substr(0,7)==bv){bU.add(bG+this._getObject(bY[i].value,bQ,bY[i].key)+H);
}else{bU.add(bB+this._getObject(bY[i].value,bQ,bY[i].key)+H);
}}else{try{var bV=this._getObject(bY[i].value,bQ,bY[i].key);
bU.add(bX.get());
bU.add(bG+bV+H);
}catch(cd){var bT=qx.util.ResourceManager.getInstance().toUri(I);
bU.add(bE+bT+J+bY[i].key+G);
bU.add(X);
}}}}bU.add(U);
if(bW){bU.add(bn);
}bU.add(this._getFunctionCode(o));
return bU.get();
},_getFunctionCode:function(o){if(o instanceof this._iFrameWindow.Function&&!o.hasOwnProperty(br)){var l=o.toString();
l=y+qx.dev.Tokenizer.javaScriptToHtml(l)+z;
return R+l+B;
}else{return K;
}},_sortAndFilterProperties:function(o){if(this._filter!=K){try{var r=new RegExp(this._filter);
}catch(e){alert("Unable to filter: "+e);
}}var s=[];
for(var t in o){try{if(r!=null){if(r.test(t)){s.push({key:t,value:o[t]});
}}else{s.push({key:t,value:o[t]});
}}catch(ca){s.push({key:t,value:bs});
}}s.sort(function(a,b){if(isNaN(a.key)||isNaN(b.key)){return ((a.key<b.key)?-1:((a.key>b.key)?1:0));
}else{return a.key-b.key;
}});
return s;
},_getReturnPath:function(cb){var cc=new qx.util.StringBuilder();
cc.add(P);
for(var i=0;i<=cb;i++){if(i==cb){cc.add(bp);
}else{cc.add(S+D+i+bb);
}cc.add(this._breadCrumb[i].name);
cc.add(F);
}cc.add(B);
return cc.get();
},_getObject:function(m,n,p){var q=new qx.util.StringBuilder();
q.add(bz+D+n+bF+p+bH+J);
if(m instanceof this._iFrameWindow.Function){if(m.toString().indexOf(bM)!=-1){q.add(m.toString().substring(0,m.toString().indexOf(bM)+1));
}else{q.add(m.toString());
}}else if(m instanceof this._iFrameWindow.Array){q.add(bl);
for(var j=0;j<2&&j<m.length;j++){if(m[j] instanceof this._iFrameWindow.Function){q.add(bA);
}else if(typeof m[j]==bK){q.add(bh+m[j]+M);
}else if(m[j] instanceof this._iFrameWindow.Array){q.add(ba+m[j]+V);
}else if(m[j] instanceof this._iFrameWindow.Object){q.add(bq+m[j]+F);
}else{q.add(bk+m[j]+F);
}if(j!=1&&j!=m.length-1){q.add(bm);
}}if(m.length>2){q.add(bo+(m.length-2)+O);
}else{q.add(bf);
}}else if(m instanceof this._iFrameWindow.qx.core.Object){q.add(m+bd+m.toHashCode()+bg);
}else{q.add(m);
}q.add(be);
return q.get();
}},destruct:function(){this._console=this._breadCrumb=null;
this._disposeObjects(by);
}});
})();
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bo){var bS={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bF={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var br={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bB=function(bT){return new RegExp(s+bT+u);
};
var bL=L;
var bC=N;
var bv=p;
var bE=n;
var bz=I;
var bH=t;
var bG=v;
var bt=D;
var bO=Y;
var bQ=W;
var bA=T;
var bD=[O+bA+M,H+bA+B,w+bA+S,P+bA+X,C+bA+r].join(bc);
var bM=bB(bL);
var bw=bB(bC);
var bJ=bB(bv);
var bs=bB(bE);
var bP=bB(bz);
var by=bB(bH);
var bq=bB(bG);
var bK=bB(bt);
var bx=bB(bO);
var bp=bB(bQ);
var bu=bB(bD);
var bI=new RegExp([bL,bC,bv,bE,bz,bH,bG,bG,bt,bO,bQ,bD,y].join(bc),G);
var bN=[];
var a=bo.match(bI);

for(var i=0;i<a.length;i++){var bR=a[i];

if(bR.match(bM)){bN.push({type:b,value:bR});
}else if(bR.match(bw)){bN.push({type:bb,value:bR});
}else if(bR.match(bu)){bN.push({type:be,value:bR});
}else if(bR.match(bq)){bN.push({type:c,value:bR});
}else if(bR.match(by)){bN.push({type:e,value:bR});
}else if(bS[bR]){bN.push({type:bf,value:bR});
}else if(bF[bR]){bN.push({type:ba,value:bR});
}else if(br[bR]){bN.push({type:h,value:bR});
}else if(bR.match(bJ)){bN.push({type:bg,value:bR});
}else if(bR.match(bP)){bN.push({type:q,value:bR});
}else if(bR.match(bs)){bN.push({type:z,value:bR});
}else if(bR.match(bx)){bN.push({type:j,value:bR});
}else if(bR.match(bB(bp))){bN.push({type:g,value:bR});
}else if(bR.match(bK)){bN.push({type:A,value:bR});
}else if(bR==f){bN.push({type:k,value:f});
}else if(bR==d){bN.push({type:k,value:d});
}else if(bR==bd){bN.push({type:k,value:bd});
}else{bN.push({type:k,value:bR});
}}return bN;
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


qx.$$loader.init();

