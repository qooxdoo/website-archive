(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"inspector.Application","qx.theme":"inspector.theme.Theme","qx.version":"1.0"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"./script"},"inspector":{"resourceUri":"./resource","sourceUri":"./script","version":"trunk"},"qx":{"resourceUri":"./resource","sourceUri":"./script","version":"trunk"}};
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
  packageHashes : {"0":"2913008c7533"},
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

qx.$$packageData['2913008c7533']={"resources":{"inspector/css/consoleview.css":"inspector","inspector/css/domview.css":"inspector","inspector/css/propertylisthtml.css":"inspector","inspector/css/sourceview.css":"inspector","inspector/html/index.html":"inspector","inspector/images/autocomplete/method_private18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/method_protected18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/method_public18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_private18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_protected18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_public18.gif":[18,18,"gif","inspector"],"inspector/images/close.gif":[17,13,"gif","inspector"],"inspector/images/close.png":[17,13,"png","inspector"],"inspector/images/components/atom.png":[16,16,"png","inspector"],"inspector/images/components/button.png":[16,16,"png","inspector"],"inspector/images/components/checkbox.png":[16,16,"png","inspector"],"inspector/images/components/combobox.png":[16,16,"png","inspector"],"inspector/images/components/document.png":[16,16,"png","inspector"],"inspector/images/components/groupbox.png":[16,16,"png","inspector"],"inspector/images/components/horizontallayout.png":[16,16,"png","inspector"],"inspector/images/components/image.png":[16,16,"png","inspector"],"inspector/images/components/label.png":[16,16,"png","inspector"],"inspector/images/components/layout.png":[16,16,"png","inspector"],"inspector/images/components/listview.png":[16,16,"png","inspector"],"inspector/images/components/menu.png":[16,16,"png","inspector"],"inspector/images/components/radiobutton.png":[16,16,"png","inspector"],"inspector/images/components/spinner.png":[16,16,"png","inspector"],"inspector/images/components/splitpane.png":[16,16,"png","inspector"],"inspector/images/components/table.png":[16,16,"png","inspector"],"inspector/images/components/textarea.png":[16,16,"png","inspector"],"inspector/images/components/textfield.png":[16,16,"png","inspector"],"inspector/images/components/toolbar.png":[16,16,"png","inspector"],"inspector/images/components/tree.png":[16,16,"png","inspector"],"inspector/images/components/verticallayout.png":[16,16,"png","inspector"],"inspector/images/components/window.png":[16,16,"png","inspector"],"inspector/images/icons/api.png":[22,22,"png","inspector"],"inspector/images/icons/goto.png":[22,22,"png","inspector"],"inspector/images/icons/highlight.png":[22,22,"png","inspector"],"inspector/images/icons/setinit.png":[22,22,"png","inspector"],"inspector/images/icons/setnull.png":[22,22,"png","inspector"],"inspector/images/null.png":[15,15,"png","inspector"],"inspector/images/open.gif":[17,13,"gif","inspector"],"inspector/images/open.png":[17,13,"png","inspector"],"inspector/images/shell/errorIcon.png":[14,14,"png","inspector"],"inspector/images/shell/infoIcon.png":[14,14,"png","inspector"],"inspector/images/shell/warningIcon.png":[14,14,"png","inspector"],"inspector/images/spacer.gif":[17,13,"gif","inspector"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-61,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-43,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-30,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-15,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-53,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-35,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-44,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-24,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-12,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-8],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-46,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-22,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/table/descending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-54,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-36,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/document-properties.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-find.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/view-refresh.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]}};
(function(){var l=".",k="()",j="[Class ",h=".prototype",g="toString",f="qx.Bootstrap",e="]",d="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return j+this.classname+e;
},createNamespace:function(name,v){var x=name.split(l);
var parent=window;
var w=x[0];

for(var i=0,y=x.length-1;i<y;i++,w=x[i]){if(!parent[w]){parent=parent[w]={};
}else{parent=parent[w];
}}parent[w]=v;
return w;
},setDisplayName:function(m,n,name){m.displayName=n+l+name+k;
},setDisplayNames:function(a,b){for(var name in a){var c=a[name];

if(c instanceof Function){c.displayName=b+l+name+k;
}}},define:function(name,o){if(!o){var o={statics:{}};
}var t;
var r=null;
qx.Bootstrap.setDisplayNames(o.statics,name);

if(o.members){qx.Bootstrap.setDisplayNames(o.members,name+h);
t=o.construct||new Function;
var p=o.statics;

for(var q in p){t[q]=p[q];
}r=t.prototype;
var u=o.members;

for(var q in u){r[q]=u[q];
}}else{t=o.statics||{};
}var s=this.createNamespace(name,t);
t.name=t.classname=name;
t.basename=s;
t.$$type=d;
if(!t.hasOwnProperty(g)){t.toString=this.genericToString;
}if(o.defer){o.defer(t,r);
}qx.Bootstrap.$$registry[name]=o.statics;
return t;
}};
qx.Bootstrap.define(f,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var m="qx.allowUrlSettings",l="&",k="qx.core.Setting",j="qx.allowUrlVariants",h="qx.propertyDebugLevel",g="qxsetting",f=":",e=".";
qx.Bootstrap.define(k,{statics:{__a:{},define:function(o,p){if(p===undefined){throw new Error('Default value of setting "'+o+'" must be defined!');
}
if(!this.__a[o]){this.__a[o]={};
}else if(this.__a[o].defaultValue!==undefined){throw new Error('Setting "'+o+'" is already defined!');
}this.__a[o].defaultValue=p;
},get:function(q){var r=this.__a[q];

if(r===undefined){throw new Error('Setting "'+q+'" is not defined.');
}
if(r.value!==undefined){return r.value;
}return r.defaultValue;
},set:function(c,d){if((c.split(e)).length<2){throw new Error('Malformed settings key "'+c+'". Must be following the schema "namespace.key".');
}
if(!this.__a[c]){this.__a[c]={};
}this.__a[c].value=d;
},__b:function(){if(window.qxsettings){for(var t in window.qxsettings){this.set(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(n){}this.__c();
}},__c:function(){if(this.get(m)!=true){return;
}var b=document.location.search.slice(1).split(l);

for(var i=0;i<b.length;i++){var a=b[i].split(f);

if(a.length!=3||a[0]!=g){continue;
}this.set(a[1],decodeURIComponent(a[2]));
}}},defer:function(s){s.define(m,false);
s.define(j,false);
s.define(h,0);
s.__b();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__d:function(){var u=d;
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
}},defer:function(t){t.__d();
}});
})();
(function(){var x="on",w="off",u="|",t="default",s="object",r="&",q="qx.aspects",p="$",o="qx.allowUrlVariants",n="qx.debug",f="qx.client",m="qx.dynlocale",j="webkit",e="qxvariant",d="opera",h=":",g="qx.core.Variant",k="mshtml",c="gecko";
qx.Bootstrap.define(g,{statics:{__e:{},__f:{},compilerIsSet:function(){return true;
},define:function(N,O,P){{};

if(!this.__e[N]){this.__e[N]={};
}else{}this.__e[N].allowedValues=O;
this.__e[N].defaultValue=P;
},get:function(y){var z=this.__e[y];
{};

if(z.value!==undefined){return z.value;
}return z.defaultValue;
},__g:function(){if(window.qxvariants){for(var D in qxvariants){{};

if(!this.__e[D]){this.__e[D]={};
}this.__e[D].value=qxvariants[D];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(Q){}this.__h(this.__e);
}},__h:function(){if(qx.core.Setting.get(o)!=true){return;
}var J=document.location.search.slice(1).split(r);

for(var i=0;i<J.length;i++){var K=J[i].split(h);

if(K.length!=3||K[0]!=e){continue;
}var L=K[1];

if(!this.__e[L]){this.__e[L]={};
}this.__e[L].value=decodeURIComponent(K[2]);
}},select:function(A,B){{};

for(var C in B){if(this.isSet(A,C)){return B[C];
}}
if(B[t]!==undefined){return B[t];
}{};
},isSet:function(E,F){var G=E+p+F;

if(this.__f[G]!==undefined){return this.__f[G];
}var I=false;
if(F.indexOf(u)<0){I=this.get(E)===F;
}else{var H=F.split(u);

for(var i=0,l=H.length;i<l;i++){if(this.get(E)===H[i]){I=true;
break;
}}}this.__f[G]=I;
return I;
},__i:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__j:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__k:function(a,b){for(var i=0,l=a.length;i<l;i++){if(a[i]==b){return true;
}}return false;
}},defer:function(M){M.define(f,[c,k,d,j],qx.bom.client.Engine.NAME);
M.define(n,[x,w],x);
M.define(q,[x,w],w);
M.define(m,[x,w],x);
M.__g();
}});
})();
(function(){var q="qx.client",p='"',o="valueOf",n="toLocaleString",m="isPrototypeOf",k="",j="toString",h="qx.lang.Object",g='\", "',f="hasOwnProperty";
qx.Bootstrap.define(h,{statics:{empty:function(b){{};

for(var c in b){if(b.hasOwnProperty(c)){delete b[c];
}}},isEmpty:qx.core.Variant.select(q,{"gecko":function(U){{};
return U.__count__===0;
},"default":function(K){{};

for(var L in K){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(q,{"gecko":function(Y,ba){{};
return Y.__count__>=ba;
},"default":function(u,v){{};

if(v<=0){return true;
}var length=0;

for(var w in u){if((++length)>=v){return true;
}}return false;
}}),getLength:qx.core.Variant.select(q,{"gecko":function(T){{};
return T.__count__;
},"default":function(bb){{};
var length=0;

for(var bc in bb){length++;
}return length;
}}),_shadowedKeys:[m,f,n,j,o],getKeys:qx.core.Variant.select(q,{"mshtml":function(A){var B=[];

for(var D in A){B.push(D);
}var C=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(C.call(A,a[i])){B.push(a[i]);
}}return B;
},"default":function(Q){var R=[];

for(var S in Q){R.push(S);
}return R;
}}),getKeysAsString:function(d){{};
var e=qx.lang.Object.getKeys(d);

if(e.length==0){return k;
}return p+e.join(g)+p;
},getValues:function(V){{};
var X=[];
var W=this.getKeys(V);

for(var i=0,l=W.length;i<l;i++){X.push(V[W[i]]);
}return X;
},mergeWith:function(bf,bg,bh){{};

if(bh===undefined){bh=true;
}
for(var bi in bg){if(bh||bf[bi]===undefined){bf[bi]=bg[bi];
}}return bf;
},carefullyMergeWith:function(bd,be){{};
return qx.lang.Object.mergeWith(bd,be,false);
},merge:function(H,I){{};
var J=arguments.length;

for(var i=1;i<J;i++){qx.lang.Object.mergeWith(H,arguments[i]);
}return H;
},clone:function(x){{};
var y={};

for(var z in x){y[z]=x[z];
}return y;
},invert:function(E){{};
var F={};

for(var G in E){F[E[G].toString()]=G;
}return F;
},getKeyFromValue:function(r,s){{};

for(var t in r){if(r.hasOwnProperty(t)&&r[t]===s){return t;
}}return null;
},contains:function(M,N){{};
return this.getKeyFromValue(M,N)!==null;
},select:function(bj,bk){{};
return bk[bj];
},fromArray:function(O){{};
var P={};

for(var i=0,l=O.length;i<l;i++){{};
P[O[i].toString()]=true;
}return P;
}}});
})();
(function(){var n="Function",m="Boolean",l="Error",k="Number",j="Array",i="Date",h="RegExp",g="String",f="Object",e="qx.lang.Type",d="string";
qx.Bootstrap.define(e,{statics:{__l:{"[object String]":g,"[object Array]":j,"[object Object]":f,"[object RegExp]":h,"[object Number]":k,"[object Boolean]":m,"[object Date]":i,"[object Function]":n,"[object Error]":l},getClass:function(a){var b=Object.prototype.toString.call(a);
return (this.__l[b]||b.slice(8,-1));
},isString:function(q){return (q!==null&&(typeof q===d||this.getClass(q)==g||q instanceof String||(!!q&&!!q.$$isString)));
},isArray:function(r){return (r!==null&&(r instanceof Array||(r&&qx.Class.hasInterface(r.constructor,qx.data.IListData))||this.getClass(r)==j||(!!r&&!!r.$$isArray)));
},isObject:function(o){return (o!==undefined&&o!==null&&this.getClass(o)==f);
},isRegExp:function(u){return this.getClass(u)==h;
},isNumber:function(p){return (p!==null&&(this.getClass(p)==k||p instanceof Number));
},isBoolean:function(t){return (t!==null&&(this.getClass(t)==m||t instanceof Boolean));
},isDate:function(s){return (s!==null&&(this.getClass(s)==i||s instanceof Date));
},isError:function(c){return (c!==null&&(this.getClass(c)==l||c instanceof Error));
},isFunction:function(v){return this.getClass(v)==n;
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
(function(){var bs="qx.aspects",br="on",bq=".",bp="static",bo="[Class ",bn="]",bm="toString",bl="constructor",bk="member",bj="$$init_",bd=".prototype",bi="destructor",bg="extend",bc="destruct",bb="Class",bf="off",be="qx.Class",bh="qx.event.type.Data";
qx.Bootstrap.define(be,{statics:{define:function(name,bt){if(!bt){var bt={};
}if(bt.include&&!(bt.include instanceof Array)){bt.include=[bt.include];
}if(bt.implement&&!(bt.implement instanceof Array)){bt.implement=[bt.implement];
}if(!bt.hasOwnProperty(bg)&&!bt.type){bt.type=bp;
}{};
var bv=this.__r(name,bt.type,bt.extend,bt.statics,bt.construct,bt.destruct);
if(bt.extend){if(bt.properties){this.__t(bv,bt.properties,true);
}if(bt.members){this.__v(bv,bt.members,true,true,false);
}if(bt.events){this.__s(bv,bt.events,true);
}if(bt.include){for(var i=0,l=bt.include.length;i<l;i++){this.__y(bv,bt.include[i],false);
}}}if(bt.settings){for(var bu in bt.settings){qx.core.Setting.define(bu,bt.settings[bu]);
}}if(bt.variants){for(var bu in bt.variants){qx.core.Variant.define(bu,bt.variants[bu].allowedValues,bt.variants[bu].defaultValue);
}}if(bt.implement){for(var i=0,l=bt.implement.length;i<l;i++){this.__x(bv,bt.implement[i]);
}}{};
if(bt.defer){bt.defer.self=bv;
bt.defer(bv,bv.prototype,{add:function(name,bX){var bY={};
bY[name]=bX;
qx.Class.__t(bv,bY,true);
}});
}return bv;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bE,bF){{};
qx.Class.__y(bE,bF,false);
},patch:function(bN,bO){{};
qx.Class.__y(bN,bO,true);
},isSubClassOf:function(o,p){if(!o){return false;
}
if(o==p){return true;
}
if(o.prototype instanceof p){return true;
}return false;
},getPropertyDefinition:function(cf,name){while(cf){if(cf.$$properties&&cf.$$properties[name]){return cf.$$properties[name];
}cf=cf.superclass;
}return null;
},getProperties:function(bA){var bB=[];

while(bA){if(bA.$$properties){bB.push.apply(bB,qx.lang.Object.getKeys(bA.$$properties));
}bA=bA.superclass;
}return bB;
},getByProperty:function(bR,name){while(bR){if(bR.$$properties&&bR.$$properties[name]){return bR;
}bR=bR.superclass;
}return null;
},hasProperty:function(bQ,name){return !!this.getPropertyDefinition(bQ,name);
},getEventType:function(bP,name){var bP=bP.constructor;

while(bP.superclass){if(bP.$$events&&bP.$$events[name]!==undefined){return bP.$$events[name];
}bP=bP.superclass;
}return null;
},supportsEvent:function(bw,name){return !!this.getEventType(bw,name);
},hasOwnMixin:function(bS,bT){return bS.$$includes&&bS.$$includes.indexOf(bT)!==-1;
},getByMixin:function(v,w){var x,i,l;

while(v){if(v.$$includes){x=v.$$flatIncludes;

for(i=0,l=x.length;i<l;i++){if(x[i]===w){return v;
}}}v=v.superclass;
}return null;
},getMixins:function(P){var Q=[];

while(P){if(P.$$includes){Q.push.apply(Q,P.$$flatIncludes);
}P=P.superclass;
}return Q;
},hasMixin:function(bx,by){return !!this.getByMixin(bx,by);
},hasOwnInterface:function(bG,bH){return bG.$$implements&&bG.$$implements.indexOf(bH)!==-1;
},getByInterface:function(L,M){var N,i,l;

while(L){if(L.$$implements){N=L.$$flatImplements;

for(i=0,l=N.length;i<l;i++){if(N[i]===M){return L;
}}}L=L.superclass;
}return null;
},getInterfaces:function(bC){var bD=[];

while(bC){if(bC.$$implements){bD.push.apply(bD,bC.$$flatImplements);
}bC=bC.superclass;
}return bD;
},hasInterface:function(R,S){return !!this.getByInterface(R,S);
},implementsInterface:function(k,m){var n=k.constructor;

if(this.hasInterface(n,m)){return true;
}
try{qx.Interface.assertObject(k,m);
return true;
}catch(bz){}
try{qx.Interface.assert(n,m,false);
return true;
}catch(O){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bo+this.classname+bn;
},$$registry:qx.Bootstrap.$$registry,__n:null,__o:null,__p:function(){},__q:function(){},__r:function(name,z,A,B,C,D){var I;

if(!A&&qx.core.Variant.isSet(bs,bf)){I=B||{};
qx.Bootstrap.setDisplayNames(I,name);
}else{I={};

if(A){if(!C){C=this.__z();
}I=this.__B(C,name,z);
qx.Bootstrap.setDisplayName(C,name,bl);
}if(B){qx.Bootstrap.setDisplayNames(B,name);
var J;

for(var i=0,a=qx.lang.Object.getKeys(B),l=a.length;i<l;i++){J=a[i];
var F=B[J];

if(qx.core.Variant.isSet(bs,br)){if(F instanceof Function){F=qx.core.Aspect.wrap(name+bq+J,F,bp);
}I[J]=F;
}else{I[J]=F;
}}}}var H=qx.Bootstrap.createNamespace(name,I,false);
I.name=I.classname=name;
I.basename=H;
I.$$type=bb;

if(z){I.$$classtype=z;
}if(!I.hasOwnProperty(bm)){I.toString=this.genericToString;
}
if(A){var K=A.prototype;
var E=this.__A();
E.prototype=K;
var G=new E;
I.prototype=G;
G.name=G.classname=name;
G.basename=H;
C.base=I.superclass=A;
C.self=I.constructor=G.constructor=I;
if(D){if(qx.core.Variant.isSet(bs,br)){D=qx.core.Aspect.wrap(name,D,bi);
}I.$$destructor=D;
qx.Bootstrap.setDisplayName(D,name,bc);
}}this.$$registry[name]=I;
return I;
},__s:function(ci,cj,ck){var cl,cl;
{};

if(ci.$$events){for(var cl in cj){ci.$$events[cl]=cj[cl];
}}else{ci.$$events=cj;
}},__t:function(ca,cb,cc){var ce;

if(cc===undefined){cc=false;
}var cd=!!ca.$$propertiesAttached;

for(var name in cb){ce=cb[name];
{};
ce.name=name;
if(!ce.refine){if(ca.$$properties===undefined){ca.$$properties={};
}ca.$$properties[name]=ce;
}if(ce.init!==undefined){ca.prototype[bj+name]=ce.init;
}if(ce.event!==undefined){var event={};
event[ce.event]=bh;
this.__s(ca,event,cc);
}if(ce.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(cd){qx.core.Property.attachMethods(ca,name,ce);
}}},__u:null,__v:function(b,c,d,e,f){var g=b.prototype;
var j,h;
qx.Bootstrap.setDisplayNames(c,b.classname+bd);

for(var i=0,a=qx.lang.Object.getKeys(c),l=a.length;i<l;i++){j=a[i];
h=c[j];
{};
if(e!==false&&h instanceof Function&&h.$$type==null){if(f==true){h=this.__w(h,g[j]);
}else{if(g[j]){h.base=g[j];
}h.self=b;
}
if(qx.core.Variant.isSet(bs,br)){h=qx.core.Aspect.wrap(b.classname+bq+j,h,bk);
}}g[j]=h;
}},__w:function(bL,bM){if(bM){return function(){var ch=bL.base;
bL.base=bM;
var cg=bL.apply(this,arguments);
bL.base=ch;
return cg;
};
}else{return bL;
}},__x:function(T,U){{};
var V=qx.Interface.flatten([U]);

if(T.$$implements){T.$$implements.push(U);
T.$$flatImplements.push.apply(T.$$flatImplements,V);
}else{T.$$implements=[U];
T.$$flatImplements=V;
}},__y:function(q,r,s){{};

if(this.hasMixin(q,r)){return;
}var u=qx.Mixin.flatten([r]);
var t;

for(var i=0,l=u.length;i<l;i++){t=u[i];
if(t.$$events){this.__s(q,t.$$events,s);
}if(t.$$properties){this.__t(q,t.$$properties,s);
}if(t.$$members){this.__v(q,t.$$members,s,s,s);
}}if(q.$$includes){q.$$includes.push(r);
q.$$flatIncludes.push.apply(q.$$flatIncludes,u);
}else{q.$$includes=[r];
q.$$flatIncludes=u;
}},__z:function(){function y(){arguments.callee.base.apply(this,arguments);
}return y;
},__A:function(){return function(){};
},__B:function(W,name,X){var ba=function(){var bK=arguments.callee.constructor;
{};
if(!bK.$$propertiesAttached){qx.core.Property.attach(bK);
}var bJ=bK.$$original.apply(this,arguments);
if(bK.$$includes){var bI=bK.$$flatIncludes;

for(var i=0,l=bI.length;i<l;i++){if(bI[i].$$constructor){bI[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bJ;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var Y=qx.core.Aspect.wrap(name,ba,"constructor");
ba.$$original=W;
ba.constructor=Y;
ba=Y;
}if(X==="singleton"){ba.getInstance=this.getInstance;
}ba.$$original=W;
W.wrapper=ba;
return ba;
}},defer:function(bU){if(qx.core.Variant.isSet(bs,br)){for(var bV in qx.Bootstrap.$$registry){var bU=qx.Bootstrap.$$registry[bV];

for(var bW in bU){if(bU[bW] instanceof Function){bU[bW]=qx.core.Aspect.wrap(bV+bq+bW,bU[bW],bp);
}}}}}});
})();
(function(){var v="]",u="Theme",t="[Theme ",s="qx.Theme";
qx.Class.define(s,{statics:{define:function(name,x){if(!x){var x={};
}x.include=this.__C(x.include);
x.patch=this.__C(x.patch);
{};
var y={$$type:u,name:name,title:x.title,toString:this.genericToString};
if(x.extend){y.supertheme=x.extend;
}y.basename=qx.Bootstrap.createNamespace(name,y);
this.__F(y,x);
this.__D(y,x);
this.$$registry[name]=y;
for(var i=0,a=x.include,l=a.length;i<l;i++){this.include(y,a[i]);
}
for(var i=0,a=x.patch,l=a.length;i<l;i++){this.patch(y,a[i]);
}},__C:function(w){if(!w){return [];
}
if(qx.lang.Type.isArray(w)){return w;
}else{return [w];
}},__D:function(z,A){var B=A.aliases||{};

if(A.extend&&A.extend.aliases){qx.lang.Object.mergeWith(B,A.extend.aliases,false);
}z.aliases=B;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return t+this.name+v;
},__E:function(q){for(var i=0,r=this.__G,l=r.length;i<l;i++){if(q[r[i]]){return r[i];
}}},__F:function(b,c){var f=this.__E(c);
if(c.extend&&!f){f=c.extend.type;
}b.type=f||"other";
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
},$$registry:{},__G:["colors","borders","decorations","fonts","icons","widgets","appearances","meta"],__H:null,__I:null,__J:function(){},patch:function(C,D){var F=this.__E(D);

if(F!==this.__E(C)){throw new Error("The mixins '"+C.name+"' are not compatible '"+D.name+"'!");
}var E=D[F];
var G=C.$$clazz.prototype;

for(var H in E){G[H]=E[H];
}},include:function(j,k){var n=k.type;

if(n!==j.type){throw new Error("The mixins '"+j.name+"' are not compatible '"+k.name+"'!");
}var m=k[n];
var o=j.$$clazz.prototype;

for(var p in m){if(o[p]!==undefined){continue;
}o[p]=m[p];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="inspector.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var bg=';',bf='return this.',be="boolean",bd="string",bc='!==undefined)',bb='else if(this.',ba='if(this.',Y='else ',X=' of an instance of ',W=' is not (yet) ready!");',bO="init",bN="': ",bM=" of class ",bL='(computed, old, "',bK='return value;',bJ='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bI='return init;',bH='var init=this.',bG="')){",bF="if(reg.hasListener(this, '",bn="Error in property ",bo='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bl='if(init==qx.core.Property.$$inherit)init=null;',bm="set",bj='if(a[i].',bk="var reg=qx.event.Registration;",bh=" in method ",bi='throw new Error("Property ',bp='(backup);',bq='var inherit=prop.$$inherit;',bx='return null;',bv='this.',bz=")}",by="setRuntime",bB=')a[i].',bA='");',bs="setThemed",bE="inherit",bD=" with incoming value '",bC="', qx.event.type.Data, [computed, old]",br="object",bt='}',bu="reg.fireEvent(this, '",bw="qx.core.Property";
qx.Bootstrap.define(bw,{statics:{__K:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__L:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bE,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bd,dispose:be,inheritable:be,nullable:be,themeable:be,refine:be,init:null,apply:bd,event:bd,check:null,transform:bd,deferredInit:be,validate:null},$$allowedGroupKeys:{name:bd,group:br,mode:bd,themeable:be},$$inheritable:{},refresh:function(cm){var parent=cm.getLayoutParent();

if(parent){var cp=cm.constructor;
var cr=this.$$store.inherit;
var cq=this.$$store.init;
var co=this.$$method.refresh;
var cs;
var cn;
{};

while(cp){cs=cp.$$properties;

if(cs){for(var name in this.$$inheritable){if(cs[name]&&cm[co[name]]){cn=parent[cr[name]];

if(cn===undefined){cn=parent[cq[name]];
}{};
cm[co[name]](cn);
}}}cp=cp.superclass;
}}},attach:function(H){var I=H.$$properties;

if(I){for(var name in I){this.attachMethods(H,name,I[name]);
}}H.$$propertiesAttached=true;
},attachMethods:function(n,name,o){o.group?this.__M(n,o,name):this.__N(n,o,name);
},__M:function(ca,cb,name){var ci=qx.lang.String.firstUp(name);
var ch=ca.prototype;
var cj=cb.themeable===true;
{};
var ck=[];
var ce=[];

if(cj){var cc=[];
var cg=[];
}var cf="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
ck.push(cf);

if(cj){cc.push(cf);
}
if(cb.mode=="shorthand"){var cd="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
ck.push(cd);

if(cj){cc.push(cd);
}}
for(var i=0,a=cb.group,l=a.length;i<l;i++){{};
ck.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
ce.push("this.",this.$$method.reset[a[i]],"();");

if(cj){{};
cc.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
cg.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+ci;
ch[this.$$method.set[name]]=new Function(ck.join(""));
this.$$method.reset[name]="reset"+ci;
ch[this.$$method.reset[name]]=new Function(ce.join(""));

if(cj){this.$$method.setThemed[name]="setThemed"+ci;
ch[this.$$method.setThemed[name]]=new Function(cc.join(""));
this.$$method.resetThemed[name]="resetThemed"+ci;
ch[this.$$method.resetThemed[name]]=new Function(cg.join(""));
}},__N:function(cw,cx,name){var cz=qx.lang.String.firstUp(name);
var cB=cw.prototype;
{};
if(cx.dispose===undefined&&typeof cx.check==="string"){cx.dispose=this.__L[cx.check]||qx.Class.isDefined(cx.check)||qx.Interface.isDefined(cx.check);
}var cA=this.$$method;
var cy=this.$$store;
cy.runtime[name]="$$runtime_"+name;
cy.user[name]="$$user_"+name;
cy.theme[name]="$$theme_"+name;
cy.init[name]="$$init_"+name;
cy.inherit[name]="$$inherit_"+name;
cy.useinit[name]="$$useinit_"+name;
cA.get[name]="get"+cz;
cB[cA.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cw,name,"get");
};
cA.set[name]="set"+cz;
cB[cA.set[name]]=function(D){return qx.core.Property.executeOptimizedSetter(this,cw,name,"set",arguments);
};
cA.reset[name]="reset"+cz;
cB[cA.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,"reset");
};

if(cx.inheritable||cx.apply||cx.event||cx.deferredInit){cA.init[name]="init"+cz;
cB[cA.init[name]]=function(cC){return qx.core.Property.executeOptimizedSetter(this,cw,name,"init",arguments);
};
}
if(cx.inheritable){cA.refresh[name]="refresh"+cz;
cB[cA.refresh[name]]=function(cl){return qx.core.Property.executeOptimizedSetter(this,cw,name,"refresh",arguments);
};
}cA.setRuntime[name]="setRuntime"+cz;
cB[cA.setRuntime[name]]=function(z){return qx.core.Property.executeOptimizedSetter(this,cw,name,"setRuntime",arguments);
};
cA.resetRuntime[name]="resetRuntime"+cz;
cB[cA.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,"resetRuntime");
};

if(cx.themeable){cA.setThemed[name]="setThemed"+cz;
cB[cA.setThemed[name]]=function(J){return qx.core.Property.executeOptimizedSetter(this,cw,name,"setThemed",arguments);
};
cA.resetThemed[name]="resetThemed"+cz;
cB[cA.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,"resetThemed");
};
}
if(cx.check==="Boolean"){cB["toggle"+cz]=new Function("return this."+cA.set[name]+"(!this."+cA.get[name]+"())");
cB["is"+cz]=new Function("return this."+cA.get[name]+"()");
}},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(p,q,r,s,t){var u=p.constructor.classname;
var v=bn+r+bM+u+bh+this.$$method[s][r]+bD+t+bN;
throw new Error(v+(this.__O[q]||"Unknown reason: "+q));
},__P:function(M,N,name,O,P,Q){var R=this.$$method[O][name];
{N[R]=new Function("value",P.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){N[R]=qx.core.Aspect.wrap(M.classname+"."+R,N[R],"property");
}qx.Bootstrap.setDisplayName(N[R],M.classname+".prototype",R);
if(Q===undefined){return M[R]();
}else{return M[R](Q[0]);
}},executeOptimizedGetter:function(bQ,bR,name,bS){var bU=bR.$$properties[name];
var bW=bR.prototype;
var bT=[];
var bV=this.$$store;
bT.push(ba,bV.runtime[name],bc);
bT.push(bf,bV.runtime[name],bg);

if(bU.inheritable){bT.push(bb,bV.inherit[name],bc);
bT.push(bf,bV.inherit[name],bg);
bT.push(Y);
}bT.push(ba,bV.user[name],bc);
bT.push(bf,bV.user[name],bg);

if(bU.themeable){bT.push(bb,bV.theme[name],bc);
bT.push(bf,bV.theme[name],bg);
}
if(bU.deferredInit&&bU.init===undefined){bT.push(bb,bV.init[name],bc);
bT.push(bf,bV.init[name],bg);
}bT.push(Y);

if(bU.init!==undefined){if(bU.inheritable){bT.push(bH,bV.init[name],bg);

if(bU.nullable){bT.push(bl);
}else if(bU.init!==undefined){bT.push(bf,bV.init[name],bg);
}else{bT.push(bJ,name,X,bR.classname,W);
}bT.push(bI);
}else{bT.push(bf,bV.init[name],bg);
}}else if(bU.inheritable||bU.nullable){bT.push(bx);
}else{bT.push(bi,name,X,bR.classname,W);
}return this.__P(bQ,bW,name,bS,bT);
},executeOptimizedSetter:function(b,c,name,d,e){var k=c.$$properties[name];
var j=c.prototype;
var g=[];
var f=d===bm||d===bs||d===by||(d===bO&&k.init===undefined);
var h=k.apply||k.event||k.inheritable;
var m=this.__Q(d,name);
this.__R(g,k,name,d,f);

if(f){this.__S(g,c,k,name);
}
if(h){this.__T(g,f,m,d);
}
if(k.inheritable){g.push(bq);
}{};

if(!h){this.__V(g,name,d,f);
}else{this.__W(g,k,name,d,f);
}
if(k.inheritable){this.__X(g,k,name,d);
}else if(h){this.__Y(g,k,name,d);
}
if(h){this.__ba(g,k,name);
if(k.inheritable&&j._getChildren){this.__bb(g,name);
}}if(f){g.push(bK);
}return this.__P(b,j,name,d,g,e);
},__Q:function(bX,name){if(bX==="setRuntime"||bX==="resetRuntime"){var bY=this.$$store.runtime[name];
}else if(bX==="setThemed"||bX==="resetThemed"){bY=this.$$store.theme[name];
}else if(bX==="init"){bY=this.$$store.init[name];
}else{bY=this.$$store.user[name];
}return bY;
},__R:function(S,T,name,U,V){{if(!T.nullable||T.check||T.inheritable){S.push('var prop=qx.core.Property;');
}if(U==="set"){S.push('if(value===undefined)prop.error(this,2,"',name,'","',U,'",value);');
}};
},__S:function(ct,cu,cv,name){if(cv.transform){ct.push('value=this.',cv.transform,'(value);');
}if(cv.validate){if(typeof cv.validate==="string"){ct.push('this.',cv.validate,'(value);');
}else if(cv.validate instanceof Function){ct.push(cu.classname,'.$$properties.',name);
ct.push('.validate.call(this, value);');
}}},__T:function(cD,cE,cF,cG){var cH=(cG==="reset"||cG==="resetThemed"||cG==="resetRuntime");

if(cE){cD.push('if(this.',cF,'===value)return value;');
}else if(cH){cD.push('if(this.',cF,'===undefined)return;');
}},__U:undefined,__V:function(w,name,x,y){if(x==="setRuntime"){w.push('this.',this.$$store.runtime[name],'=value;');
}else if(x==="resetRuntime"){w.push('if(this.',this.$$store.runtime[name],'!==undefined)');
w.push('delete this.',this.$$store.runtime[name],';');
}else if(x==="set"){w.push('this.',this.$$store.user[name],'=value;');
}else if(x==="reset"){w.push('if(this.',this.$$store.user[name],'!==undefined)');
w.push('delete this.',this.$$store.user[name],';');
}else if(x==="setThemed"){w.push('this.',this.$$store.theme[name],'=value;');
}else if(x==="resetThemed"){w.push('if(this.',this.$$store.theme[name],'!==undefined)');
w.push('delete this.',this.$$store.theme[name],';');
}else if(x==="init"&&y){w.push('this.',this.$$store.init[name],'=value;');
}},__W:function(cI,cJ,name,cK,cL){if(cJ.inheritable){cI.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cI.push('var computed, old;');
}cI.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cK==="setRuntime"){cI.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cK==="resetRuntime"){cI.push('delete this.',this.$$store.runtime[name],';');
cI.push('if(this.',this.$$store.user[name],'!==undefined)');
cI.push('computed=this.',this.$$store.user[name],';');
cI.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cI.push('computed=this.',this.$$store.theme[name],';');
cI.push('else if(this.',this.$$store.init[name],'!==undefined){');
cI.push('computed=this.',this.$$store.init[name],';');
cI.push('this.',this.$$store.useinit[name],'=true;');
cI.push('}');
}else{cI.push('old=computed=this.',this.$$store.runtime[name],';');
if(cK==="set"){cI.push('this.',this.$$store.user[name],'=value;');
}else if(cK==="reset"){cI.push('delete this.',this.$$store.user[name],';');
}else if(cK==="setThemed"){cI.push('this.',this.$$store.theme[name],'=value;');
}else if(cK==="resetThemed"){cI.push('delete this.',this.$$store.theme[name],';');
}else if(cK==="init"&&cL){cI.push('this.',this.$$store.init[name],'=value;');
}}cI.push('}');
cI.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cK==="set"){if(!cJ.inheritable){cI.push('old=this.',this.$$store.user[name],';');
}cI.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cK==="reset"){if(!cJ.inheritable){cI.push('old=this.',this.$$store.user[name],';');
}cI.push('delete this.',this.$$store.user[name],';');
cI.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cI.push('computed=this.',this.$$store.runtime[name],';');
cI.push('if(this.',this.$$store.theme[name],'!==undefined)');
cI.push('computed=this.',this.$$store.theme[name],';');
cI.push('else if(this.',this.$$store.init[name],'!==undefined){');
cI.push('computed=this.',this.$$store.init[name],';');
cI.push('this.',this.$$store.useinit[name],'=true;');
cI.push('}');
}else{if(cK==="setRuntime"){cI.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cJ.inheritable){cI.push('computed=this.',this.$$store.user[name],';');
}else{cI.push('old=computed=this.',this.$$store.user[name],';');
}if(cK==="setThemed"){cI.push('this.',this.$$store.theme[name],'=value;');
}else if(cK==="resetThemed"){cI.push('delete this.',this.$$store.theme[name],';');
}else if(cK==="init"&&cL){cI.push('this.',this.$$store.init[name],'=value;');
}}cI.push('}');
if(cJ.themeable){cI.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cJ.inheritable){cI.push('old=this.',this.$$store.theme[name],';');
}
if(cK==="setRuntime"){cI.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cK==="set"){cI.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cK==="setThemed"){cI.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cK==="resetThemed"){cI.push('delete this.',this.$$store.theme[name],';');
cI.push('if(this.',this.$$store.init[name],'!==undefined){');
cI.push('computed=this.',this.$$store.init[name],';');
cI.push('this.',this.$$store.useinit[name],'=true;');
cI.push('}');
}else if(cK==="init"){if(cL){cI.push('this.',this.$$store.init[name],'=value;');
}cI.push('computed=this.',this.$$store.theme[name],';');
}else if(cK==="refresh"){cI.push('computed=this.',this.$$store.theme[name],';');
}cI.push('}');
}cI.push('else if(this.',this.$$store.useinit[name],'){');

if(!cJ.inheritable){cI.push('old=this.',this.$$store.init[name],';');
}
if(cK==="init"){if(cL){cI.push('computed=this.',this.$$store.init[name],'=value;');
}else{cI.push('computed=this.',this.$$store.init[name],';');
}}else if(cK==="set"||cK==="setRuntime"||cK==="setThemed"||cK==="refresh"){cI.push('delete this.',this.$$store.useinit[name],';');

if(cK==="setRuntime"){cI.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cK==="set"){cI.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cK==="setThemed"){cI.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cK==="refresh"){cI.push('computed=this.',this.$$store.init[name],';');
}}cI.push('}');
if(cK==="set"||cK==="setRuntime"||cK==="setThemed"||cK==="init"){cI.push('else{');

if(cK==="setRuntime"){cI.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cK==="set"){cI.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cK==="setThemed"){cI.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cK==="init"){if(cL){cI.push('computed=this.',this.$$store.init[name],'=value;');
}else{cI.push('computed=this.',this.$$store.init[name],';');
}cI.push('this.',this.$$store.useinit[name],'=true;');
}cI.push('}');
}},__X:function(A,B,name,C){A.push('if(computed===undefined||computed===inherit){');

if(C==="refresh"){A.push('computed=value;');
}else{A.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}A.push('if((computed===undefined||computed===inherit)&&');
A.push('this.',this.$$store.init[name],'!==undefined&&');
A.push('this.',this.$$store.init[name],'!==inherit){');
A.push('computed=this.',this.$$store.init[name],';');
A.push('this.',this.$$store.useinit[name],'=true;');
A.push('}else{');
A.push('delete this.',this.$$store.useinit[name],';}');
A.push('}');
A.push('if(old===computed)return value;');
A.push('if(computed===inherit){');
A.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
A.push('}');
A.push('else if(computed===undefined)');
A.push('delete this.',this.$$store.inherit[name],';');
A.push('else this.',this.$$store.inherit[name],'=computed;');
A.push('var backup=computed;');
if(B.init!==undefined&&C!=="init"){A.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{A.push('if(old===undefined)old=null;');
}A.push('if(computed===undefined||computed==inherit)computed=null;');
},__Y:function(E,F,name,G){if(G!=="set"&&G!=="setRuntime"&&G!=="setThemed"){E.push('if(computed===undefined)computed=null;');
}E.push('if(old===computed)return value;');
if(F.init!==undefined&&G!=="init"){E.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{E.push('if(old===undefined)old=null;');
}},__ba:function(K,L,name){if(L.apply){K.push(bv,L.apply,bL,name,bA);
}if(L.event){K.push(bk,bF,L.event,bG,bu,L.event,bC,bz);
}},__bb:function(bP,name){bP.push(bo);
bP.push(bj,this.$$method.refresh[name],bB,this.$$method.refresh[name],bp);
bP.push(bt);
}}});
})();
(function(){var f="$$hash",e="qx.core.ObjectRegistry";
qx.Bootstrap.define(e,{statics:{inShutDown:false,__bc:{},__bd:0,__be:[],register:function(p){var s=this.__bc;

if(!s){return;
}var r=p.$$hash;

if(r==null){var q=this.__be;

if(q.length>0){r=q.pop();
}else{r=(this.__bd++).toString(36);
}p.$$hash=r;
}{};
s[r]=p;
},unregister:function(t){var u=t.$$hash;

if(u==null){return;
}var v=this.__bc;

if(v&&v[u]){delete v[u];
this.__be.push(u);
}try{delete t.$$hash;
}catch(w){if(t.removeAttribute){t.removeAttribute(f);
}}},toHashCode:function(g){{};
var j=g.$$hash;

if(j!=null){return j;
}var h=this.__be;

if(h.length>0){j=h.pop();
}else{j=(this.__bd++).toString(36);
}return g.$$hash=j;
},clearHashCode:function(y){{};
var z=y.$$hash;

if(z!=null){this.__be.push(z);
try{delete y.$$hash;
}catch(c){if(y.removeAttribute){y.removeAttribute(f);
}}}},fromHashCode:function(d){return this.__bc[d]||null;
},shutdown:function(){this.inShutDown=true;
var m=this.__bc;
var o=[];

for(var n in m){o.push(n);
}o.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var k,i=0,l=o.length;

while(true){try{for(;i<l;i++){n=o[i];
k=m[n];

if(k&&k.dispose){k.dispose();
}}}catch(x){qx.log.Logger.error(this,"Could not dispose object "+k.toString()+": "+x);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
}}});
})();
(function(){var k="qx.Mixin",j=".prototype",h="constructor",g="[Mixin ",f="]",e="destruct",d="Mixin";
qx.Bootstrap.define(k,{statics:{define:function(name,u){if(u){if(u.include&&!(u.include instanceof Array)){u.include=[u.include];
}{};
var w=u.statics?u.statics:{};
qx.Bootstrap.setDisplayNames(w,name);

for(var v in w){if(w[v] instanceof Function){w[v].$$mixin=w;
}}if(u.construct){w.$$constructor=u.construct;
qx.Bootstrap.setDisplayName(u.construct,name,h);
}
if(u.include){w.$$includes=u.include;
}
if(u.properties){w.$$properties=u.properties;
}
if(u.members){w.$$members=u.members;
qx.Bootstrap.setDisplayNames(u.members,name+j);
}
for(var v in w.$$members){if(w.$$members[v] instanceof Function){w.$$members[v].$$mixin=w;
}}
if(u.events){w.$$events=u.events;
}
if(u.destruct){w.$$destructor=u.destruct;
qx.Bootstrap.setDisplayName(u.destruct,name,e);
}}else{var w={};
}w.$$type=d;
w.name=name;
w.toString=this.genericToString;
w.basename=qx.Bootstrap.createNamespace(name,w);
this.$$registry[name]=w;
return w;
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
},isCompatible:function(a,b){var c=qx.Class.getMixins(b);
c.push(a);
return qx.Mixin.checkCompatibility(c);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return g+this.name+f;
},$$registry:{},__bf:null,__bg:function(){}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var o="qx.client",n="on",m="function",l="mousedown",k="qx.bom.Event",j="return;",i="mouseover",h="HTMLEvents";
qx.Bootstrap.define(k,{statics:{addNativeListener:qx.core.Variant.select(o,{"mshtml":function(D,E,F){D.attachEvent(n+E,F);
},"default":function(A,B,C){A.addEventListener(B,C,false);
}}),removeNativeListener:qx.core.Variant.select(o,{"mshtml":function(d,f,g){try{d.detachEvent(n+f,g);
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
}catch(c){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(s){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(t,u){if(document.createEventObject){var v=document.createEventObject();
return t.fireEvent(n+u,v);
}else{var v=document.createEvent(h);
v.initEvent(u,true,true);
return !t.dispatchEvent(v);
}},supportsEvent:qx.core.Variant.select(o,{"webkit":function(a,b){return a.hasOwnProperty(n+b);
},"default":function(w,x){var y=n+x;
var z=(y in w);

if(!z){z=typeof w[y]==m;

if(!z&&w.setAttribute){w.setAttribute(y,j);
z=typeof w[y]==m;
w.removeAttribute(y);
}}return z;
}})}});
})();
(function(){var p="|bubble",o="|capture",n="|",m="_",k="unload",j="UNKNOWN_",h="__bl",g="DOM_",f="__bm",e="c",b="WIN_",d="capture",c="qx.event.Manager",a="QX_";
qx.Bootstrap.define(c,{construct:function(u,v){this.__bh=u;
this.__bi=qx.core.ObjectRegistry.toHashCode(u);
this.__bj=v;
if(u.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(u,k,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(u,k,arguments.callee);
self.dispose();
}));
}this.__bk={};
this.__bl={};
this.__bm={};
this.__bn={};
},statics:{__bo:0,getNextUniqueId:function(){return (this.__bo++).toString(36);
}},members:{__bj:null,__bk:null,__bm:null,__bp:null,__bl:null,__bn:null,__bh:null,__bi:null,getWindow:function(){return this.__bh;
},getWindowId:function(){return this.__bi;
},getHandler:function(ct){var cu=this.__bl[ct.classname];

if(cu){return cu;
}return this.__bl[ct.classname]=new ct(this);
},getDispatcher:function(cd){var ce=this.__bm[cd.classname];

if(ce){return ce;
}return this.__bm[cd.classname]=new cd(this,this.__bj);
},getListeners:function(cm,cn,co){var cp=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cr=this.__bk[cp];

if(!cr){return null;
}var cs=cn+(co?o:p);
var cq=cr[cs];
return cq?cq.concat():null;
},serializeListeners:function(w){var D=w.$$hash||qx.core.ObjectRegistry.toHashCode(w);
var F=this.__bk[D];
var B=[];

if(F){var z,E,x,A,C;

for(var y in F){z=y.indexOf(n);
E=y.substring(0,z);
x=y.charAt(z+1)==e;
A=F[y];

for(var i=0,l=A.length;i<l;i++){C=A[i];
B.push({self:C.context,handler:C.handler,type:E,capture:x});
}}}return B;
},toggleAttachedEvents:function(cv,cw){var cB=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cD=this.__bk[cB];

if(cD){var cy,cC,cx,cz;

for(var cA in cD){cy=cA.indexOf(n);
cC=cA.substring(0,cy);
cx=cA.charCodeAt(cy+1)===99;
cz=cD[cA];

if(cw){this.__bq(cv,cC,cx);
}else{this.__br(cv,cC,cx);
}}}},hasListener:function(Q,R,S){{};
var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__bk[T];

if(!V){return false;
}var W=R+(S?o:p);
var U=V[W];
return U&&U.length>0;
},importListeners:function(X,Y){{};
var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bg=this.__bk[bf]={};
var bc=qx.event.Manager;

for(var ba in Y){var bd=Y[ba];
var be=bd.type+(bd.capture?o:p);
var bb=bg[be];

if(!bb){bb=bg[be]=[];
this.__bq(X,bd.type,bd.capture);
}bb.push({handler:bd.listener,context:bd.self,unique:bd.unique||(bc.__bo++).toString(36)});
}},addListener:function(bE,bF,bG,self,bH){var bL;
{};
var bM=bE.$$hash||qx.core.ObjectRegistry.toHashCode(bE);
var bO=this.__bk[bM];

if(!bO){bO=this.__bk[bM]={};
}var bK=bF+(bH?o:p);
var bJ=bO[bK];

if(!bJ){bJ=bO[bK]=[];
}if(bJ.length===0){this.__bq(bE,bF,bH);
}var bN=(qx.event.Manager.__bo++).toString(36);
var bI={handler:bG,context:self,unique:bN};
bJ.push(bI);
return bK+n+bN;
},findHandler:function(bP,bQ){var cb=false,bT=false,cc=false;
var ca;

if(bP.nodeType===1){cb=true;
ca=g+bP.tagName.toLowerCase()+m+bQ;
}else if(bP==this.__bh){bT=true;
ca=b+bQ;
}else if(bP.classname){cc=true;
ca=a+bP.classname+m+bQ;
}else{ca=j+bP+m+bQ;
}var bV=this.__bn;

if(bV[ca]){return bV[ca];
}var bY=this.__bj.getHandlers();
var bU=qx.event.IEventHandler;
var bW,bX,bS,bR;

for(var i=0,l=bY.length;i<l;i++){bW=bY[i];
bS=bW.SUPPORTED_TYPES;

if(bS&&!bS[bQ]){continue;
}bR=bW.TARGET_CHECK;

if(bR){if(!cb&&bR===bU.TARGET_DOMNODE){continue;
}else if(!bT&&bR===bU.TARGET_WINDOW){continue;
}else if(!cc&&bR===bU.TARGET_OBJECT){continue;
}}bX=this.getHandler(bY[i]);

if(bW.IGNORE_CAN_HANDLE||bX.canHandleEvent(bP,bQ)){bV[ca]=bX;
return bX;
}}return null;
},__bq:function(bA,bB,bC){var bD=this.findHandler(bA,bB);

if(bD){bD.registerEvent(bA,bB,bC);
return;
}{};
},removeListener:function(G,H,I,self,J){var N;
{};
var O=G.$$hash||qx.core.ObjectRegistry.toHashCode(G);
var P=this.__bk[O];

if(!P){return false;
}var K=H+(J?o:p);
var L=P[K];

if(!L){return false;
}var M;

for(var i=0,l=L.length;i<l;i++){M=L[i];

if(M.handler===I&&M.context===self){qx.lang.Array.removeAt(L,i);

if(L.length==0){this.__br(G,H,J);
}return true;
}}return false;
},removeListenerById:function(bo,bp){var bv;
{};
var bt=bp.split(n);
var by=bt[0];
var bq=bt[1].charCodeAt(0)==99;
var bx=bt[2];
var bw=bo.$$hash||qx.core.ObjectRegistry.toHashCode(bo);
var bz=this.__bk[bw];

if(!bz){return false;
}var bu=by+(bq?o:p);
var bs=bz[bu];

if(!bs){return false;
}var br;

for(var i=0,l=bs.length;i<l;i++){br=bs[i];

if(br.unique===bx){qx.lang.Array.removeAt(bs,i);

if(bs.length==0){this.__br(bo,by,bq);
}return true;
}}return false;
},removeAllListeners:function(bh){var bl=bh.$$hash||qx.core.ObjectRegistry.toHashCode(bh);
var bn=this.__bk[bl];

if(!bn){return false;
}var bj,bm,bi;

for(var bk in bn){if(bn[bk].length>0){bj=bk.split(n);
bm=bj[0];
bi=bj[1]===d;
this.__br(bh,bm,bi);
}}delete this.__bk[bl];
return true;
},__br:function(q,r,s){var t=this.findHandler(q,r);

if(t){t.unregisterEvent(q,r,s);
return;
}{};
},dispatchEvent:function(cf,event){var ck;
{};
var cl=event.getType();

if(!event.getBubbles()&&!this.hasListener(cf,cl)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cf);
}var cj=this.__bj.getDispatchers();
var ci;
var ch=false;

for(var i=0,l=cj.length;i<l;i++){ci=this.getDispatcher(cj[i]);
if(ci.canDispatchEvent(cf,event,cl)){ci.dispatchEvent(cf,event,cl);
ch=true;
break;
}}
if(!ch){qx.log.Logger.error(this,"No dispatcher can handle event of type "+cl+" on "+cf);
return true;
}var cg=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cg;
},dispose:function(){this.__bj.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,h);
qx.util.DisposeUtil.disposeMap(this,f);
this.__bk=this.__bh=this.__bp=null;
this.__bj=this.__bn=null;
}}});
})();
(function(){var j="qx.dom.Node",h="qx.client",g="";
qx.Bootstrap.define(j,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(q){return q.nodeType===
this.DOCUMENT?q:
q.ownerDocument||q.document;
},getWindow:qx.core.Variant.select(h,{"mshtml":function(k){if(k.nodeType==null){return k;
}if(k.nodeType!==this.DOCUMENT){k=k.ownerDocument;
}return k.parentWindow;
},"default":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.defaultView;
}}),getDocumentElement:function(l){return this.getDocument(l).documentElement;
},getBodyElement:function(e){return this.getDocument(e).body;
},isNode:function(f){return !!(f&&f.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(r){return !!(r&&r.nodeType===this.DOCUMENT);
},isText:function(s){return !!(s&&s.nodeType===this.TEXT);
},isWindow:function(b){return !!(b&&b.history&&b.location&&b.document);
},isNodeName:function(m,n){if(!n||!m||!m.nodeName){return false;
}return n.toLowerCase()==qx.dom.Node.getName(m);
},getName:function(o){if(!o||!o.nodeName){return null;
}return o.nodeName.toLowerCase();
},getText:function(c){if(!c||!c.nodeType){return null;
}
switch(c.nodeType){case 1:var i,a=[],d=c.childNodes,length=d.length;

for(i=0;i<length;i++){a[i]=this.getText(d[i]);
}return a.join(g);
case 2:return c.nodeValue;
break;
case 3:return c.nodeValue;
break;
}return null;
}}});
})();
(function(){var V="mshtml",U="qx.client",T="[object Array]",S="qx.lang.Array",R="qx",Q="number",P="string";
qx.Bootstrap.define(S,{statics:{toArray:function(D,E){return this.cast(D,Array,E);
},cast:function(H,I,J){if(H.constructor===I){return H;
}
if(qx.Class.hasInterface(H,qx.data.IListData)){var H=H.toArray();
}var K=new I;
if(qx.core.Variant.isSet(U,V)){if(H.item){for(var i=J||0,l=H.length;i<l;i++){K.push(H[i]);
}return K;
}}if(Object.prototype.toString.call(H)===T&&J==null){K.push.apply(K,H);
}else{K.push.apply(K,Array.prototype.slice.call(H,J||0));
}return K;
},fromArguments:function(bn,bo){return Array.prototype.slice.call(bn,bo||0);
},fromCollection:function(A){if(qx.core.Variant.isSet(U,V)){if(A.item){var B=[];

for(var i=0,l=A.length;i<l;i++){B[i]=A[i];
}return B;
}}return Array.prototype.slice.call(A,0);
},fromShortHand:function(X){var ba=X.length;
var Y=qx.lang.Array.clone(X);
switch(ba){case 1:Y[1]=Y[2]=Y[3]=Y[0];
break;
case 2:Y[2]=Y[0];
case 3:Y[3]=Y[1];
}return Y;
},clone:function(C){return C.concat();
},insertAt:function(v,w,i){v.splice(i,0,w);
return v;
},insertBefore:function(L,M,N){var i=L.indexOf(N);

if(i==-1){L.push(M);
}else{L.splice(i,0,M);
}return L;
},insertAfter:function(bi,bj,bk){var i=bi.indexOf(bk);

if(i==-1||i==(bi.length-1)){bi.push(bj);
}else{bi.splice(i+1,0,bj);
}return bi;
},removeAt:function(O,i){return O.splice(i,1)[0];
},removeAll:function(s){s.length=0;
return this;
},append:function(y,z){{};
Array.prototype.push.apply(y,z);
return y;
},exclude:function(be,bf){{};

for(var i=0,bh=bf.length,bg;i<bh;i++){bg=be.indexOf(bf[i]);

if(bg!=-1){be.splice(bg,1);
}}return be;
},remove:function(F,G){var i=F.indexOf(G);

if(i!=-1){F.splice(i,1);
return G;
}},contains:function(t,u){return t.indexOf(u)!==-1;
},equals:function(bl,bm){var length=bl.length;

if(length!==bm.length){return false;
}
for(var i=0;i<length;i++){if(bl[i]!==bm[i]){return false;
}}return true;
},sum:function(bp){var bq=0;

for(var i=0,l=bp.length;i<l;i++){bq+=bp[i];
}return bq;
},max:function(a){{};
var i,c=a.length,b=a[0];

for(i=1;i<c;i++){if(a[i]>b){b=a[i];
}}return b===undefined?null:b;
},min:function(bb){{};
var i,bd=bb.length,bc=bb[0];

for(i=1;i<bd;i++){if(bb[i]<bc){bc=bb[i];
}}return bc===undefined?null:bc;
},unique:function(d){var p=[],f={},j={},m={};
var k,e=0;
var q=R+qx.lang.Date.now();
var g=false,o=false,r=false;
for(var i=0,n=d.length;i<n;i++){k=d[i];
if(k===null){if(!g){g=true;
p.push(k);
}}else if(k===undefined){}else if(k===false){if(!o){o=true;
p.push(k);
}}else if(k===true){if(!r){r=true;
p.push(k);
}}else if(typeof k===P){if(!f[k]){f[k]=1;
p.push(k);
}}else if(typeof k===Q){if(!j[k]){j[k]=1;
p.push(k);
}}else{h=k[q];

if(h==null){h=k[q]=e++;
}
if(!m[h]){m[h]=k;
p.push(k);
}}}for(var h in m){try{delete m[h][q];
}catch(x){try{m[h][q]=null;
}catch(W){throw new Error("Cannot clean-up map entry doneObjects["+h+"]["+q+"]");
}}}return p;
}}});
})();
(function(){var E="()",D=".",C=".prototype.",B='anonymous()',A="qx.lang.Function",z=".constructor()";
qx.Bootstrap.define(A,{statics:{getCaller:function(y){return y.caller?y.caller.callee:y.callee.caller;
},getName:function(a){if(a.displayName){return a.displayName;
}
if(a.$$original||a.wrapper||a.classname){return a.classname+z;
}
if(a.$$mixin){for(var c in a.$$mixin.$$members){if(a.$$mixin.$$members[c]==a){return a.$$mixin.name+C+c+E;
}}for(var c in a.$$mixin){if(a.$$mixin[c]==a){return a.$$mixin.name+D+c+E;
}}}
if(a.self){var d=a.self.constructor;

if(d){for(var c in d.prototype){if(d.prototype[c]==a){return d.classname+C+c+E;
}}for(var c in d){if(d[c]==a){return d.classname+D+c+E;
}}}}var b=a.toString().match(/function\s*(\w*)\s*\(.*/);

if(b&&b.length>=1&&b[1]){return b[1]+E;
}return B;
},globalEval:function(i){if(window.execScript){return window.execScript(i);
}else{return eval.call(window,i);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(j,k){{};
if(!k){return j;
}if(!(k.self||k.args||k.delay!=null||k.periodical!=null||k.attempt)){return j;
}return function(event){{};
var o=qx.lang.Array.fromArguments(arguments);
if(k.args){o=k.args.concat(o);
}
if(k.delay||k.periodical){var n=qx.event.GlobalError.observeMethod(function(){return j.apply(k.self||this,o);
});

if(k.delay){return window.setTimeout(n,k.delay);
}
if(k.periodical){return window.setInterval(n,k.periodical);
}}else if(k.attempt){var p=false;

try{p=j.apply(k.self||this,o);
}catch(h){}return p;
}else{return j.apply(k.self||this,o);
}};
},bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(l,m){return this.create(l,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(q,self,r){if(arguments.length<3){return function(event){return q.call(self||this,event||window.event);
};
}else{var s=qx.lang.Array.fromArguments(arguments,2);
return function(event){var t=[event||window.event];
t.push.apply(t,s);
q.apply(self||this,t);
};
}},attempt:function(u,self,v){return this.create(u,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(F,G,self,H){return this.create(F,{delay:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(e,f,self,g){return this.create(e,{periodical:f,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var n="qx.event.Registration";
qx.Bootstrap.define(n,{statics:{__bs:{},getManager:function(y){if(y==null){{};
y=window;
}else if(y.nodeType){y=qx.dom.Node.getWindow(y);
}else if(!qx.dom.Node.isWindow(y)){y=window;
}var A=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var z=this.__bs[A];

if(!z){z=new qx.event.Manager(y,this);
this.__bs[A]=z;
}return z;
},removeManager:function(M){var N=M.getWindowId();
delete this.__bs[N];
},addListener:function(u,v,w,self,x){return this.getManager(u).addListener(u,v,w,self,x);
},removeListener:function(I,J,K,self,L){return this.getManager(I).removeListener(I,J,K,self,L);
},removeListenerById:function(G,H){return this.getManager(G).removeListenerById(G,H);
},removeAllListeners:function(O){return this.getManager(O).removeAllListeners(O);
},hasListener:function(c,d,e){return this.getManager(c).hasListener(c,d,e);
},serializeListeners:function(m){return this.getManager(m).serializeListeners(m);
},createEvent:function(C,D,E){{};
if(D==null){D=qx.event.type.Event;
}var F=qx.event.Pool.getInstance().getObject(D);

if(!F){return;
}E?F.init.apply(F,E):F.init();
if(C){F.setType(C);
}return F;
},dispatchEvent:function(f,event){return this.getManager(f).dispatchEvent(f,event);
},fireEvent:function(o,p,q,r){var s;
{};
var t=this.createEvent(p,q||null,r);
return this.getManager(o).dispatchEvent(o,t);
},fireNonBubblingEvent:function(g,h,i,j){{};
var k=this.getManager(g);

if(!k.hasListener(g,h,false)){return true;
}var l=this.createEvent(h,i||null,j);
return k.dispatchEvent(g,l);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bt:[],addHandler:function(B){{};
this.__bt.push(B);
this.__bt.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bt;
},__bu:[],addDispatcher:function(P,Q){{};
this.__bu.push(P);
this.__bu.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bu;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Bootstrap.define(a,{construct:function(b){this.__bv=[];
this.setMaxMessages(b||50);
},members:{__bw:0,__bv:null,__bx:50,setMaxMessages:function(e){this.__bx=e;
this.clearHistory();
},getMaxMessages:function(){return this.__bx;
},process:function(c){var d=this.getMaxMessages();

if(this.__bv.length<d){this.__bv.push(c);
}else{this.__bv[this.__bw++]=c;

if(this.__bw>=d){this.__bw=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(f){if(f>this.__bv.length){f=this.__bv.length;
}
if(this.__bv.length==this.getMaxMessages()){var h=this.__bw-1;
}else{h=this.__bv.length-1;
}var g=h-f+1;

if(g<0){g+=this.__bv.length;
}var i;

if(g<=h){i=this.__bv.slice(g,h+1);
}else{i=this.__bv.slice(g,this.__bv.length).concat(this.__bv.slice(0,h+1));
}return i;
},clearHistory:function(){this.__bv=[];
this.__bw=0;
}}});
})();
(function(){var P="node",O="error",N="...(+",M="array",L=")",K="info",J="instance",I="string",H="null",G="class",bl="number",bk="stringify",bj="]",bi="unknown",bh="function",bg="boolean",bf="debug",be="map",bd="undefined",bc="qx.log.Logger",W=")}",X="#",U="warn",V="document",S="{...(",T="[",Q="text[",R="[...(",Y="\n",ba=")]",bb="object";
qx.Bootstrap.define(bc,{statics:{__by:bf,setLevel:function(s){this.__by=s;
},getLevel:function(){return this.__by;
},setTreshold:function(t){this.__bB.setMaxMessages(t);
},getTreshold:function(){return this.__bB.getMaxMessages();
},__bz:{},__bA:0,register:function(p){if(p.$$id){return;
}var q=this.__bA++;
this.__bz[q]=p;
p.$$id=q;
var r=this.__bB.getAllLogEvents();

for(var i=0,l=r.length;i<l;i++){p.process(r[i]);
}},unregister:function(bo){var bp=bo.$$id;

if(bp==null){return;
}delete this.__bz[bp];
delete bo.$$id;
},debug:function(by,bz){this.__bD(bf,arguments);
},info:function(bq,br){this.__bD(K,arguments);
},warn:function(A,B){this.__bD(U,arguments);
},error:function(bm,bn){this.__bD(O,arguments);
},trace:function(F){this.__bD(K,[F,qx.dev.StackTrace.getStackTrace().join(Y)]);
},deprecatedMethodWarning:function(bs,bt){var bu;
{};
},deprecatedClassWarning:function(bv,bw){var bx;
{};
},deprecatedEventWarning:function(C,event,D){var E;
{};
},deprecatedMixinWarning:function(m,n){var o;
{};
},deprecatedConstantWarning:function(w,x,y){var self,z;
{};
},clear:function(){this.__bB.clearHistory();
},__bB:new qx.log.appender.RingBuffer(50),__bC:{debug:0,info:1,warn:2,error:3},__bD:function(a,b){var g=this.__bC;

if(g[a]<g[this.__by]){return;
}var d=b.length<2?null:b[0];
var f=d?1:0;
var c=[];

for(var i=f,l=b.length;i<l;i++){c.push(this.__bF(b[i],true));
}var h=new Date;
var j={time:h,offset:h-qx.Bootstrap.LOADSTART,level:a,items:c,win:window};
if(d){if(d instanceof qx.core.Object){j.object=d.$$hash;
}else if(d.$$type){j.clazz=d;
}}this.__bB.process(j);
var k=this.__bz;

for(var e in k){k[e].process(j);
}},__bE:function(u){if(u===undefined){return bd;
}else if(u===null){return H;
}
if(u.$$type){return G;
}var v=typeof u;

if(v===bh||v==I||v===bl||v===bg){return v;
}else if(v===bb){if(u.nodeType){return P;
}else if(u.classname){return J;
}else if(u instanceof Array){return M;
}else if(u instanceof Error){return O;
}else{return be;
}}
if(u.toString){return bk;
}return bi;
},__bF:function(bA,bB){var bI=this.__bE(bA);
var bE=bi;
var bD=[];

switch(bI){case H:case bd:bE=bI;
break;
case I:case bl:case bg:bE=bA;
break;
case P:if(bA.nodeType===9){bE=V;
}else if(bA.nodeType===3){bE=Q+bA.nodeValue+bj;
}else if(bA.nodeType===1){bE=bA.nodeName.toLowerCase();

if(bA.id){bE+=X+bA.id;
}}else{bE=P;
}break;
case bh:bE=qx.lang.Function.getName(bA)||bI;
break;
case J:bE=bA.basename+T+bA.$$hash+bj;
break;
case G:case bk:bE=bA.toString();
break;
case O:bD=qx.dev.StackTrace.getStackTraceFromError(bA);
bE=bA.toString();
break;
case M:if(bB){bE=[];

for(var i=0,l=bA.length;i<l;i++){if(bE.length>20){bE.push(N+(l-i)+L);
break;
}bE.push(this.__bF(bA[i],false));
}}else{bE=R+bA.length+ba;
}break;
case be:if(bB){var bC;
var bH=[];

for(var bG in bA){bH.push(bG);
}bH.sort();
bE=[];

for(var i=0,l=bH.length;i<l;i++){if(bE.length>20){bE.push(N+(l-i)+L);
break;
}bG=bH[i];
bC=this.__bF(bA[bG],false);
bC.key=bG;
bE.push(bC);
}}else{var bF=0;

for(var bG in bA){bF++;
}bE=S+bF+W;
}break;
}return {type:bI,text:bE,trace:bD};
}}});
})();
(function(){var br="set",bq="get",bp="reset",bo="qx.core.Object",bn="]",bm="[",bl="$$user_",bk="Don't use '_disposeFields' - instead assign directly to 'null'",bj="Object";
qx.Class.define(bo,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bj},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bm+this.$$hash+bn;
},base:function(by,bz){{};

if(arguments.length===1){return by.callee.base.call(this);
}else{return by.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(w){return w.callee.self;
},clone:function(){var bu=this.constructor;
var bt=new bu;
var bw=qx.Class.getProperties(bu);
var bv=qx.core.Property.$$store.user;
var bx=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bw.length;i<l;i++){name=bw[i];

if(this.hasOwnProperty(bv[name])){bt[bx[name]](this[bv[name]]);
}}return bt;
},set:function(y,z){var B=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(y)){if(!this[B[y]]){if(this[br+qx.lang.String.firstUp(y)]!=undefined){this[br+qx.lang.String.firstUp(y)](z);
return;
}{};
}return this[B[y]](z);
}else{for(var A in y){if(!this[B[A]]){if(this[br+qx.lang.String.firstUp(A)]!=undefined){this[br+qx.lang.String.firstUp(A)](y[A]);
continue;
}{};
}this[B[A]](y[A]);
}return this;
}},get:function(u){var v=qx.core.Property.$$method.get;

if(!this[v[u]]){if(this[bq+qx.lang.String.firstUp(u)]!=undefined){return this[bq+qx.lang.String.firstUp(u)]();
}{};
}return this[v[u]]();
},reset:function(a){var b=qx.core.Property.$$method.reset;

if(!this[b[a]]){if(this[bp+qx.lang.String.firstUp(a)]!=undefined){this[bp+qx.lang.String.firstUp(a)]();
return;
}{};
}this[b[a]]();
},__bG:qx.event.Registration,addListener:function(P,Q,self,R){if(!this.$$disposed){return this.__bG.addListener(this,P,Q,self,R);
}return null;
},addListenerOnce:function(c,d,self,f){var g=function(e){d.call(self||this,e);
this.removeListener(c,g,this,f);
};
return this.addListener(c,g,this,f);
},removeListener:function(h,j,self,k){if(!this.$$disposed){return this.__bG.removeListener(this,h,j,self,k);
}return false;
},removeListenerById:function(O){if(!this.$$disposed){return this.__bG.removeListenerById(this,O);
}return false;
},hasListener:function(L,M){return this.__bG.hasListener(this,L,M);
},dispatchEvent:function(t){if(!this.$$disposed){return this.__bG.dispatchEvent(this,t);
}return true;
},fireEvent:function(X,Y,ba){if(!this.$$disposed){return this.__bG.fireEvent(this,X,Y,ba);
}return true;
},fireNonBubblingEvent:function(U,V,W){if(!this.$$disposed){return this.__bG.fireNonBubblingEvent(this,U,V,W);
}return true;
},fireDataEvent:function(p,q,r,s){if(!this.$$disposed){if(r===undefined){r=null;
}return this.__bG.fireNonBubblingEvent(this,p,qx.event.type.Data,[q,r,!!s]);
}return true;
},__bH:null,setUserData:function(C,D){if(!this.__bH){this.__bH={};
}this.__bH[C]=D;
},getUserData:function(m){if(!this.__bH){return null;
}var n=this.__bH[m];
return n===undefined?null:n;
},__bI:qx.log.Logger,debug:function(E){this.__bI.debug(this,E);
},info:function(F){this.__bI.info(this,F);
},warn:function(x){this.__bI.warn(this,x);
},error:function(o){this.__bI.error(this,o);
},trace:function(){this.__bI.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var J,H;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var I=this.constructor;
var G;

while(I.superclass){if(I.$$destructor){I.$$destructor.call(this);
}if(I.$$includes){G=I.$$flatIncludes;

for(var i=0,l=G.length;i<l;i++){if(G[i].$$destructor){G[i].$$destructor.call(this);
}}}I=I.superclass;
}var K=qx.Class.getProperties(this.constructor);

for(var i=0,l=K.length;i<l;i++){delete this[bl+K[i]];
}{};
},_disposeFields:function(S){qx.log.Logger.deprecatedMethodWarning(arguments.callee,bk);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bA){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(T){qx.util.DisposeUtil.disposeArray(this,T);
},_disposeMap:function(bs){qx.util.DisposeUtil.disposeMap(this,bs);
}},settings:{"qx.disposerDebugLevel":0},defer:function(N){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bH=null;
var bd=this.constructor;
var bh;
var bi=qx.core.Property.$$store;
var bf=bi.user;
var bg=bi.theme;
var bb=bi.inherit;
var be=bi.useinit;
var bc=bi.init;

while(bd){bh=bd.$$properties;

if(bh){for(var name in bh){if(bh[name].dispose){this[bf[name]]=this[bg[name]]=this[bb[name]]=this[be[name]]=this[bc[name]]=undefined;
}}}bd=bd.superclass;
}}});
})();
(function(){var m="",l="g",k="0",j='\\$1',h="%",g='-',f="qx.lang.String",e=' ',d='\n',c="undefined";
qx.Bootstrap.define(f,{statics:{camelCase:function(Q){return Q.replace(/\-([a-z])/g,function(F,G){return G.toUpperCase();
});
},hyphenate:function(K){return K.replace(/[A-Z]/g,function(y){return (g+y.charAt(0).toLowerCase());
});
},capitalize:function(E){return E.replace(/\b[a-z]/g,function(s){return s.toUpperCase();
});
},clean:function(R){return this.trim(R.replace(/\s+/g,e));
},trimLeft:function(H){return H.replace(/^\s+/,m);
},trimRight:function(A){return A.replace(/\s+$/,m);
},trim:function(z){return z.replace(/^\s+|\s+$/g,m);
},startsWith:function(n,o){return n.indexOf(o)===0;
},endsWith:function(O,P){return O.substring(O.length-P.length,O.length)===P;
},repeat:function(a,b){return a.length>=0?new Array(b+1).join(a):m;
},pad:function(L,length,M){var N=length-L.length;

if(N>0){if(typeof M===c){M=k;
}return this.repeat(M,N)+L;
}else{return L;
}},firstUp:function(p){return p.charAt(0).toUpperCase()+p.substr(1);
},firstLow:function(x){return x.charAt(0).toLowerCase()+x.substr(1);
},contains:function(q,r){return q.indexOf(r)!=-1;
},format:function(B,C){var D=B;

for(var i=0;i<C.length;i++){D=D.replace(new RegExp(h+(i+1),l),C[i]);
}return D;
},escapeRegexpChars:function(I){return I.replace(/([.*+?^${}()|[\]\/\\])/g,j);
},toArray:function(S){return S.split(/\B|\b/g);
},stripTags:function(J){return J.replace(/<\/?[^>]+>/gi,m);
},stripScripts:function(t,u){var w=m;
var v=t.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){w+=arguments[1]+d;
return m;
});

if(u===true){qx.lang.Function.globalEval(w);
}return v;
}}});
})();
(function(){var s="function",r="Boolean",q="qx.Interface",p="]",o="toggle",n="Interface",m="is",k="[Interface ";
qx.Bootstrap.define(q,{statics:{define:function(name,P){if(P){if(P.extend&&!(P.extend instanceof Array)){P.extend=[P.extend];
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
}Q.$$type=n;
Q.name=name;
Q.toString=this.genericToString;
Q.basename=qx.Bootstrap.createNamespace(name,Q);
qx.Interface.$$registry[name]=Q;
return Q;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(A){if(!A){return [];
}var B=A.concat();

for(var i=0,l=A.length;i<l;i++){if(A[i].$$extends){B.push.apply(B,this.flatten(A[i].$$extends));
}}return B;
},__bJ:function(a,b,c,d){var h=c.$$members;

if(h){for(var g in h){if(qx.lang.Type.isFunction(h[g])){var f=this.__bK(b,g);
var e=f||qx.lang.Type.isFunction(a[g]);

if(!e){throw new Error('Implementation of method "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}var j=d===true&&!f&&!qx.Class.hasInterface(b,c);

if(j){a[g]=this.__bN(c,a[g],g,h[g]);
}}else{if(typeof a[g]===undefined){if(typeof a[g]!==s){throw new Error('Implementation of member "'+g+'" is missing in class "'+b.classname+'" required by interface "'+c.name+'"');
}}}}}},__bK:function(C,D){var H=D.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!H){return false;
}var E=qx.lang.String.firstLow(H[2]);
var F=qx.Class.hasProperty(C,E);

if(!F){return false;
}var G=H[0]==m||H[0]==o;

if(G){return qx.Class.getPropertyDefinition(C,E).check==r;
}return true;
},__bL:function(t,u){if(u.$$properties){for(var v in u.$$properties){if(!qx.Class.hasProperty(t,v)){throw new Error('The property "'+v+'" is not supported by Class "'+t.classname+'"!');
}}}},__bM:function(M,N){if(N.$$events){for(var O in N.$$events){if(!qx.Class.supportsEvent(M,O)){throw new Error('The event "'+O+'" is not supported by Class "'+M.classname+'"!');
}}}},assertObject:function(w,x){var z=w.constructor;
this.__bJ(w,z,x,false);
this.__bL(z,x);
this.__bM(z,x);
var y=x.$$extends;

if(y){for(var i=0,l=y.length;i<l;i++){this.assertObject(w,y[i]);
}}},assert:function(I,J,K){this.__bJ(I.prototype,I,J,K);
this.__bL(I,J);
this.__bM(I,J);
var L=J.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assert(I,L[i],K);
}}},genericToString:function(){return k+this.name+p;
},$$registry:{},__bN:function(){},__bO:null,__bP:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__bQ:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__bQ=null;
},getInsets:function(){if(this.__bQ){return this.__bQ;
}var j=this._getDefaultInsets();
return this.__bQ={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__bQ=null;
}},destruct:function(){this.__bQ=null;
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
(function(){var s="_applyStyle",r="Color",q="px",p="solid",o="dotted",n="double",m="dashed",l="",k="_applyWidth",j="qx.ui.decoration.Uniform",g="px ",i=" ",h="scale",f="PositiveInteger",e="absolute";
qx.Class.define(j,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(C,D,E){arguments.callee.base.call(this);
if(C!=null){this.setWidth(C);
}
if(D!=null){this.setStyle(D);
}
if(E!=null){this.setColor(E);
}},properties:{width:{check:f,init:0,apply:k},style:{nullable:true,check:[p,o,m,n],init:p,apply:s},color:{nullable:true,check:r,apply:s},backgroundColor:{check:r,nullable:true,apply:s}},members:{__bR:null,_getDefaultInsets:function(){var t=this.getWidth();
return {top:t,right:t,bottom:t,left:t};
},_isInitialized:function(){return !!this.__bR;
},getMarkup:function(){if(this.__bR){return this.__bR;
}var a={position:e,top:0,left:0};
var b=this.getWidth();
{};
var d=qx.theme.manager.Color.getInstance();
a.border=b+g+this.getStyle()+i+d.resolve(this.getColor());
var c=this._generateBackgroundMarkup(a);
return this.__bR=c;
},resize:function(x,y,z){var B=this.getBackgroundImage()&&this.getBackgroundRepeat()==h;

if(B||qx.bom.client.Feature.CONTENT_BOX){var A=this.getWidth()*2;
y-=A;
z-=A;
if(y<0){y=0;
}
if(z<0){z=0;
}}x.style.width=y+q;
x.style.height=z+q;
},tint:function(u,v){var w=qx.theme.manager.Color.getInstance();

if(v==null){v=this.getBackgroundColor();
}u.style.backgroundColor=w.resolve(v)||l;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__bR=null;
}});
})();
(function(){var i="px",h="qx.ui.decoration.Background",g="",f="_applyStyle",e="Color",d="absolute";
qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(l){arguments.callee.base.call(this);

if(l!=null){this.setBackgroundColor(l);
}},properties:{backgroundColor:{check:e,nullable:true,apply:f}},members:{__bS:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bS;
},getMarkup:function(){if(this.__bS){return this.__bS;
}var j={position:d,top:0,left:0};
var k=this._generateBackgroundMarkup(j);
return this.__bS=k;
},resize:function(m,n,o){m.style.width=n+i;
m.style.height=o+i;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||g;
},_applyStyle:function(){{};
}},destruct:function(){this.__bS=null;
}});
})();
(function(){var w="_applyStyle",v="solid",u="Color",t="double",s="px ",r="dotted",q="_applyWidth",p="dashed",o="Number",n=" ",S="shorthand",R="px",Q="widthTop",P="styleRight",O="styleLeft",N="widthLeft",M="widthBottom",L="styleTop",K="colorBottom",J="styleBottom",D="widthRight",E="colorLeft",B="colorRight",C="colorTop",z="scale",A="border-top",x="border-left",y="border-right",F="qx.ui.decoration.Single",G="",I="border-bottom",H="absolute";
qx.Class.define(F,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(f,g,h){arguments.callee.base.call(this);
if(f!=null){this.setWidth(f);
}
if(g!=null){this.setStyle(g);
}
if(h!=null){this.setColor(h);
}},properties:{widthTop:{check:o,init:0,apply:q},widthRight:{check:o,init:0,apply:q},widthBottom:{check:o,init:0,apply:q},widthLeft:{check:o,init:0,apply:q},styleTop:{nullable:true,check:[v,r,p,t],init:v,apply:w},styleRight:{nullable:true,check:[v,r,p,t],init:v,apply:w},styleBottom:{nullable:true,check:[v,r,p,t],init:v,apply:w},styleLeft:{nullable:true,check:[v,r,p,t],init:v,apply:w},colorTop:{nullable:true,check:u,apply:w},colorRight:{nullable:true,check:u,apply:w},colorBottom:{nullable:true,check:u,apply:w},colorLeft:{nullable:true,check:u,apply:w},backgroundColor:{check:u,nullable:true,apply:w},left:{group:[N,O,E]},right:{group:[D,P,B]},top:{group:[Q,L,C]},bottom:{group:[M,J,K]},width:{group:[Q,D,M,N],mode:S},style:{group:[L,P,J,O],mode:S},color:{group:[C,B,K,E],mode:S}},members:{__bT:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__bT;
},getMarkup:function(i){if(this.__bT){return this.__bT;
}var j=qx.theme.manager.Color.getInstance();
var k={};
var m=this.getWidthTop();

if(m>0){k[A]=m+s+this.getStyleTop()+n+j.resolve(this.getColorTop());
}var m=this.getWidthRight();

if(m>0){k[y]=m+s+this.getStyleRight()+n+j.resolve(this.getColorRight());
}var m=this.getWidthBottom();

if(m>0){k[I]=m+s+this.getStyleBottom()+n+j.resolve(this.getColorBottom());
}var m=this.getWidthLeft();

if(m>0){k[x]=m+s+this.getStyleLeft()+n+j.resolve(this.getColorLeft());
}{};
k.position=H;
k.top=0;
k.left=0;
var l=this._generateBackgroundMarkup(k);
return this.__bT=l;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==z;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getInsets();
b-=d.left+d.right;
c-=d.top+d.bottom;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+R;
a.style.height=c+R;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.style.backgroundColor=V.resolve(U)||G;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__bT=null;
}});
})();
(function(){var x="px",w="0px",v="-1px",u="no-repeat",t="scale-x",s="scale-y",r="-tr",q="-l",p='</div>',o="scale",L="qx.client",K="-br",J="-t",I="-tl",H="-r",G='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',F="_applyBaseImage",E="-b",D="String",C="",A="-bl",B="-c",y="mshtml",z="qx.ui.decoration.Grid";
qx.Class.define(z,{extend:qx.ui.decoration.Abstract,construct:function(S,T){arguments.callee.base.call(this);
if(S!=null){this.setBaseImage(S);
}
if(T!=null){this.setInsets(T);
}},properties:{baseImage:{check:D,nullable:true,apply:F}},members:{__bU:null,__bV:null,__bW:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bU;
},getMarkup:function(){if(this.__bU){return this.__bU;
}var O=qx.bom.element.Decoration;
var P=this.__bV;
var Q=this.__bW;
var R=[];
R.push(G);
R.push(O.create(P.tl,u,{top:0,left:0}));
R.push(O.create(P.t,t,{top:0,left:Q.left+x}));
R.push(O.create(P.tr,u,{top:0,right:0}));
R.push(O.create(P.bl,u,{bottom:0,left:0}));
R.push(O.create(P.b,t,{bottom:0,left:Q.left+x}));
R.push(O.create(P.br,u,{bottom:0,right:0}));
R.push(O.create(P.l,s,{top:Q.top+x,left:0}));
R.push(O.create(P.c,o,{top:Q.top+x,left:Q.left+x}));
R.push(O.create(P.r,s,{top:Q.top+x,right:0}));
R.push(p);
return this.__bU=R.join(C);
},resize:function(j,k,l){var m=this.__bW;
var innerWidth=k-m.left-m.right;
var innerHeight=l-m.top-m.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}j.style.width=k+x;
j.style.height=l+x;
j.childNodes[1].style.width=innerWidth+x;
j.childNodes[4].style.width=innerWidth+x;
j.childNodes[7].style.width=innerWidth+x;
j.childNodes[6].style.height=innerHeight+x;
j.childNodes[7].style.height=innerHeight+x;
j.childNodes[8].style.height=innerHeight+x;

if(qx.core.Variant.isSet(L,y)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(k%2==1){j.childNodes[2].style.marginRight=v;
j.childNodes[5].style.marginRight=v;
j.childNodes[8].style.marginRight=v;
}else{j.childNodes[2].style.marginRight=w;
j.childNodes[5].style.marginRight=w;
j.childNodes[8].style.marginRight=w;
}
if(l%2==1){j.childNodes[3].style.marginBottom=v;
j.childNodes[4].style.marginBottom=v;
j.childNodes[5].style.marginBottom=v;
}else{j.childNodes[3].style.marginBottom=w;
j.childNodes[4].style.marginBottom=w;
j.childNodes[5].style.marginBottom=w;
}}}},tint:function(M,N){},_applyBaseImage:function(a,b){{};

if(a){var f=this._resolveImageUrl(a);
var g=/(.*)(\.[a-z]+)$/.exec(f);
var e=g[1];
var d=g[2];
var c=this.__bV={tl:e+I+d,t:e+J+d,tr:e+r+d,bl:e+A+d,b:e+E+d,br:e+K+d,l:e+q+d,c:e+B+d,r:e+H+d};
this.__bW=this._computeEdgeSizes(c);
}},_resolveImageUrl:function(n){return qx.util.AliasManager.getInstance().resolve(n);
},_computeEdgeSizes:function(h){var i=qx.util.ResourceManager.getInstance();
return {top:i.getImageHeight(h.t),bottom:i.getImageHeight(h.b),left:i.getImageWidth(h.l),right:i.getImageWidth(h.r)};
}},destruct:function(){this.__bU=this.__bV=this.__bW=null;
}});
})();
(function(){var m="_applyStyle",l='"></div>',k="Color",j="1px",i='<div style="',h='border:',g="1px solid ",f="",e=";",d="px",y='</div>',x="qx.ui.decoration.Beveled",w='<div style="position:absolute;top:1px;left:1px;',v='border-bottom:',u='border-right:',t='border-left:',s='border-top:',r="Number",q='<div style="position:absolute;top:1px;left:0px;',p='position:absolute;top:0px;left:1px;',n='<div style="overflow:hidden;font-size:0;line-height:0;">',o="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(z,A,B){arguments.callee.base.call(this);
if(z!=null){this.setOuterColor(z);
}
if(A!=null){this.setInnerColor(A);
}
if(B!=null){this.setInnerOpacity(B);
}},properties:{innerColor:{check:k,nullable:true,apply:m},innerOpacity:{check:r,init:1,apply:m},outerColor:{check:k,nullable:true,apply:m},backgroundColor:{check:k,nullable:true,apply:m}},members:{__bX:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__bX;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__bX){return this.__bX;
}var C=qx.theme.manager.Color.getInstance();
var D=[];
var G=g+C.resolve(this.getOuterColor())+e;
var F=g+C.resolve(this.getInnerColor())+e;
D.push(n);
D.push(i);
D.push(h,G);
D.push(qx.bom.element.Opacity.compile(0.35));
D.push(l);
D.push(q);
D.push(t,G);
D.push(u,G);
D.push(l);
D.push(i);
D.push(p);
D.push(s,G);
D.push(v,G);
D.push(l);
var E={position:o,top:j,left:j};
D.push(this._generateBackgroundMarkup(E));
D.push(w);
D.push(h,F);
D.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
D.push(l);
D.push(y);
return this.__bX=D.join(f);
},resize:function(H,I,J){if(I<4){I=4;
}
if(J<4){J=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=I-2;
var outerHeight=J-2;
var P=outerWidth;
var O=outerHeight;
var innerWidth=I-4;
var innerHeight=J-4;
}else{var outerWidth=I;
var outerHeight=J;
var P=I-2;
var O=J-2;
var innerWidth=P;
var innerHeight=O;
}var R=d;
var N=H.childNodes[0].style;
N.width=outerWidth+R;
N.height=outerHeight+R;
var M=H.childNodes[1].style;
M.width=outerWidth+R;
M.height=O+R;
var L=H.childNodes[2].style;
L.width=P+R;
L.height=outerHeight+R;
var K=H.childNodes[3].style;
K.width=P+R;
K.height=O+R;
var Q=H.childNodes[4].style;
Q.width=innerWidth+R;
Q.height=innerHeight+R;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.childNodes[3].style.backgroundColor=c.resolve(b)||f;
}},destruct:function(){this.__bX=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var d="decoration/toolbar/toolbar-gradient.png",c="border-main",b="inspector.theme.Decoration",a="scale";
qx.Theme.define(b,{extend:qx.theme.modern.Decoration,decorations:{"myToolbar":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:c,backgroundImage:d,backgroundRepeat:a}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__bY:function(){var n=navigator.platform;
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
}}},defer:function(o){o.__bY();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__ca:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cb:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__ca){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

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
}else{this.NAME=this.__ca[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__cb();
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
(function(){var fb="button-frame",fa="atom",eY="widget",eX="main",eW="button",eV="text-selected",eU="image",eT="bold",eS="middle",eR="background-light",dE="text-disabled",dD="groupbox",dC="decoration/arrows/down.png",dB="cell",dA="selected",dz="border-invalid",dy="input",dx="input-disabled",dw="menu-button",dv="input-focused-invalid",fi="toolbar-button",fj="spinner",fg="input-focused",fh="popup",fe="tooltip",ff="list",fc="tree-item",fd="treevirtual-contract",fk="scrollbar",fl="datechooser/nav-button",eA="text-hovered",ez="center",eC="treevirtual-expand",eB="textfield",eE="label",eD="decoration/arrows/right.png",eG="background-application",eF="radiobutton",ey="white",ex="invalid",bz="combobox",bA="right-top",bB=".png",bC="checkbox",bD="text-title",bE="qx/static/blank.gif",bF="scrollbar/button",bG="right",bH="combobox/button",bI="icon/16/places/folder.png",fz="text-label",fy="decoration/tree/closed.png",fx="scrollbar-slider-horizontal",fw="decoration/arrows/left.png",fD="button-focused",fC="text-light",fB="menu-slidebar-button",fA="text-input",fF="slidebar/button-forward",fE="background-splitpane",cB="decoration/tree/open.png",cC="default",cz="decoration/arrows/down-small.png",cA="datechooser",cF="slidebar/button-backward",cG="selectbox",cD="treevirtual-folder",cE="shadow-popup",cx="icon/16/mimetypes/office-document.png",cy="background-medium",cd=".gif",cc="table",cf="decoration/arrows/up.png",ce="decoration/form/",bY="",bX="-invalid",cb="icon/16/places/folder-open.png",ca="button-checked",bW="decoration/window/maximize-active-hovered.png",bV="radiobutton-hovered",cM="decoration/cursors/",cN="slidebar",cO="tooltip-error-arrow",cP="table-scroller-focus-indicator",cI="move-frame",cJ="nodrop",cK="decoration/table/boolean-true.png",cL="table-header-cell",cQ="menu",cR="app-header",cq="row-layer",cp="text-inactive",co="move",cn="radiobutton-checked-focused",cm="decoration/window/restore-active-hovered.png",cl="shadow-window",ck="table-column-button",cj="right.png",cu="tabview-page-button-bottom-inactive",ct="tooltip-error",cS="window-statusbar",cT="button-hovered",cU="decoration/scrollbar/scrollbar-",cV="background-tip",cW="scrollbar-slider-horizontal-disabled",cX="table-scroller-header",cY="radiobutton-disabled",da="button-pressed",db="table-pane",dc="decoration/window/close-active.png",dM="native",dL="checkbox-hovered",dK="button-invalid-shadow",dJ="checkbox-checked",dQ="decoration/window/minimize-active-hovered.png",dP="menubar",dO="icon/16/actions/dialog-cancel.png",dN="tabview-page-button-top-inactive",dU="tabview-page-button-left-inactive",dT="menu-slidebar",es="toolbar-button-checked",et="decoration/tree/open-selected.png",eq="radiobutton-checked",er="decoration/window/minimize-inactive.png",eo="icon/16/apps/office-calendar.png",ep="group",em="tabview-page-button-right-inactive",en="decoration/window/minimize-active.png",eu="decoration/window/restore-inactive.png",ev="checkbox-checked-focused",eK="splitpane",eJ="combobox/textfield",eM="button-preselected-focused",eL="decoration/window/close-active-hovered.png",eO="qx/icon/Tango/16/actions/window-close.png",eN="checkbox-pressed",eQ="button-disabled",eP="selected-dragover",eI="border-separator",eH="decoration/window/maximize-inactive.png",fs="dragover",ft="scrollarea",fu="scrollbar-vertical",fv="decoration/menu/checkbox-invert.gif",fo="decoration/toolbar/toolbar-handle-knob.gif",fp="icon/22/mimetypes/office-document.png",fq="button-preselected",fr="button-checked-focused",fm="up.png",fn="best-fit",by="decoration/tree/closed-selected.png",bx="qx.theme.modern.Appearance",bw="text-active",bv="checkbox-disabled",bu="toolbar-button-hovered",bt="progressive-table-header",bs="decoration/table/select-column-order.png",br="decoration/menu/radiobutton.gif",bq="decoration/arrows/forward.png",bp="decoration/table/descending",bL="window-captionbar-active",bM="checkbox-checked-hovered",bJ="scrollbar-slider-vertical",bK="toolbar",bP="alias",bQ="decoration/window/restore-active.png",bN="decoration/table/boolean-false.png",bO="checkbox-checked-disabled",bS="icon/32/mimetypes/office-document.png",bT="radiobutton-checked-disabled",dY="tabview-pane",dS="decoration/arrows/rewind.png",eg="checkbox-focused",ec="top",dH="#EEE",dF="icon/16/actions/dialog-ok.png",ch="radiobutton-checked-hovered",dI="table-header-cell-hovered",cs="window",cr="text-gray",dm="decoration/menu/radiobutton-invert.gif",dn="text-placeholder",dp="slider",dq="keep-align",dr="down.png",ds="tabview-page-button-top-active",dt="icon/32/places/folder-open.png",du="icon/22/places/folder.png",dj="decoration/window/maximize-active.png",dk="checkbox-checked-pressed",dG="decoration/window/close-inactive.png",ef="tabview-page-button-left-active",ee="toolbar-part",ed="decoration/splitpane/knob-vertical.png",ek="icon/22/places/folder-open.png",ej="radiobutton-checked-pressed",ei="table-statusbar",eh="radiobutton-pressed",eb="window-captionbar-inactive",ea="copy",bR="radiobutton-focused",cw="decoration/arrows/down-invert.png",cv="decoration/menu/checkbox.gif",dR="decoration/splitpane/knob-horizontal.png",cH="decoration/table/ascending",dX="icon/32/places/folder.png",dW="toolbar-separator",dV="tabview-page-button-bottom-active",cg="decoration/arrows/up-small.png",el="decoration/arrows/up-invert.png",bU="small",ci="tabview-page-button-right-active",dd="-disabled",de="scrollbar-horizontal",df="progressive-table-header-cell",dg="menu-separator",dh="pane",di="decoration/arrows/right-invert.png",ew="left.png",dl="icon/16/actions/view-refresh.png";
qx.Theme.define(bx,{appearances:{"widget":{},"root":{style:function(hu){return {backgroundColor:eG,textColor:fz,font:cC};
}},"label":{style:function(id){return {textColor:id.disabled?dE:undefined};
}},"move-frame":{style:function(R){return {decorator:eX};
}},"resize-frame":cI,"dragdrop-cursor":{style:function(A){var B=cJ;

if(A.copy){B=ea;
}else if(A.move){B=co;
}else if(A.alias){B=bP;
}return {source:cM+B+cd,position:bA,offset:[2,16,2,6]};
}},"image":{style:function(o){return {opacity:!o.replacement&&o.disabled?0.3:1};
}},"atom":{},"atom/label":eE,"atom/icon":eU,"popup":{style:function(S){return {decorator:eX,backgroundColor:eR,shadow:cE};
}},"button-frame":{alias:fa,style:function(gW){var gY,gX;

if(gW.checked&&gW.focused&&!gW.inner){gY=fr;
gX=undefined;
}else if(gW.disabled){gY=eQ;
gX=undefined;
}else if(gW.pressed){gY=da;
gX=eA;
}else if(gW.checked){gY=ca;
gX=undefined;
}else if(gW.hovered){gY=cT;
gX=eA;
}else if(gW.preselected&&gW.focused&&!gW.inner){gY=eM;
gX=eA;
}else if(gW.preselected){gY=fq;
gX=eA;
}else if(gW.focused&&!gW.inner){gY=fD;
gX=undefined;
}else{gY=eW;
gX=undefined;
}return {decorator:gY,textColor:gX,shadow:gW.invalid&&!gW.disabled?dK:undefined};
}},"button-frame/image":{style:function(gV){return {opacity:!gV.replacement&&gV.disabled?0.5:1};
}},"button":{alias:fb,include:fb,style:function(F){return {padding:[2,8],center:true};
}},"hover-button":{alias:fa,include:fa,style:function(hp){return {decorator:hp.hovered?dA:undefined,textColor:hp.hovered?eV:undefined};
}},"splitbutton":{},"splitbutton/button":eW,"splitbutton/arrow":{alias:eW,include:eW,style:function(hi){return {icon:dC,padding:2,marginLeft:1};
}},"checkbox":{alias:fa,style:function(H){var J;

if(H.checked&&H.focused){J=ev;
}else if(H.checked&&H.disabled){J=bO;
}else if(H.checked&&H.pressed){J=dk;
}else if(H.checked&&H.hovered){J=bM;
}else if(H.checked){J=dJ;
}else if(H.disabled){J=bv;
}else if(H.focused){J=eg;
}else if(H.pressed){J=eN;
}else if(H.hovered){J=dL;
}else{J=bC;
}var I=H.invalid&&!H.disabled?bX:bY;
return {icon:ce+J+I+bB,gap:6};
}},"radiobutton":{alias:fa,style:function(fG){var fI;

if(fG.checked&&fG.focused){fI=cn;
}else if(fG.checked&&fG.disabled){fI=bT;
}else if(fG.checked&&fG.pressed){fI=ej;
}else if(fG.checked&&fG.hovered){fI=ch;
}else if(fG.checked){fI=eq;
}else if(fG.disabled){fI=cY;
}else if(fG.focused){fI=bR;
}else if(fG.pressed){fI=eh;
}else if(fG.hovered){fI=bV;
}else{fI=eF;
}var fH=fG.invalid&&!fG.disabled?bX:bY;
return {icon:ce+fI+fH+bB,gap:6};
}},"textfield":{style:function(gN){var gS;
var gQ=!!gN.focused;
var gR=!!gN.invalid;
var gO=!!gN.disabled;

if(gQ&&gR&&!gO){gS=dv;
}else if(gQ&&!gR&&!gO){gS=fg;
}else if(gO){gS=dx;
}else if(!gQ&&gR&&!gO){gS=dz;
}else{gS=dy;
}var gP;

if(gN.disabled){gP=dE;
}else if(gN.showingPlaceholder){gP=dn;
}else{gP=fA;
}return {decorator:gS,padding:[2,4,1],textColor:gP};
}},"textarea":{include:eB,style:function(fS){return {padding:4};
}},"spinner":{style:function(hV){var ia;
var hX=!!hV.focused;
var hY=!!hV.invalid;
var hW=!!hV.disabled;

if(hX&&hY&&!hW){ia=dv;
}else if(hX&&!hY&&!hW){ia=fg;
}else if(hW){ia=dx;
}else if(!hX&&hY&&!hW){ia=dz;
}else{ia=dy;
}return {decorator:ia};
}},"spinner/textfield":{style:function(hh){return {marginRight:2,padding:[2,4,1],textColor:hh.disabled?dE:fA};
}},"spinner/upbutton":{alias:fb,include:fb,style:function(gK){return {icon:cg,padding:gK.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:fb,include:fb,style:function(z){return {icon:cz,padding:z.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":bz,"datefield/button":{alias:bH,include:bH,style:function(gc){return {icon:eo,padding:[0,3],decorator:undefined};
}},"datefield/textfield":eJ,"datefield/list":{alias:cA,include:cA,style:function(N){return {decorator:undefined};
}},"groupbox":{style:function(hv){return {legendPosition:ec};
}},"groupbox/legend":{alias:fa,style:function(gU){return {padding:[1,0,1,4],textColor:gU.invalid?ex:bD,font:eT};
}},"groupbox/frame":{style:function(K){return {padding:12,decorator:ep};
}},"check-groupbox":dD,"check-groupbox/legend":{alias:bC,include:bC,style:function(hF){return {padding:[1,0,1,4],textColor:hF.invalid?ex:bD,font:eT};
}},"radio-groupbox":dD,"radio-groupbox/legend":{alias:eF,include:eF,style:function(n){return {padding:[1,0,1,4],textColor:n.invalid?ex:bD,font:eT};
}},"scrollarea":{style:function(ge){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(gF){return {backgroundColor:eG};
}},"scrollarea/pane":eY,"scrollarea/scrollbar-x":fk,"scrollarea/scrollbar-y":fk,"scrollbar":{style:function(fU){if(fU[dM]){return {};
}return {width:fU.horizontal?undefined:16,height:fU.horizontal?16:undefined,decorator:fU.horizontal?de:fu,padding:1};
}},"scrollbar/slider":{alias:dp,style:function(fM){return {padding:fM.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:fb,style:function(hl){var hm=hl.horizontal?fx:bJ;

if(hl.disabled){hm+=dd;
}return {decorator:hm,minHeight:hl.horizontal?undefined:9,minWidth:hl.horizontal?9:undefined};
}},"scrollbar/button":{alias:fb,include:fb,style:function(ib){var ic=cU;

if(ib.left){ic+=ew;
}else if(ib.right){ic+=cj;
}else if(ib.up){ic+=fm;
}else{ic+=dr;
}
if(ib.left||ib.right){return {padding:[0,0,0,ib.left?3:4],icon:ic,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:ic,width:14,height:15};
}}},"scrollbar/button-begin":bF,"scrollbar/button-end":bF,"slider":{style:function(u){var y;
var w=!!u.focused;
var x=!!u.invalid;
var v=!!u.disabled;

if(w&&x&&!v){y=dv;
}else if(w&&!x&&!v){y=fg;
}else if(v){y=dx;
}else if(!w&&x&&!v){y=dz;
}else{y=dy;
}return {decorator:y};
}},"slider/knob":{include:fb,style:function(bl){return {decorator:bl.disabled?cW:fx,shadow:undefined,height:14,width:14};
}},"list":{alias:ft,style:function(gg){var gk;
var gi=!!gg.focused;
var gj=!!gg.invalid;
var gh=!!gg.disabled;

if(gi&&gj&&!gh){gk=dv;
}else if(gi&&!gj&&!gh){gk=fg;
}else if(gh){gk=dx;
}else if(!gi&&gj&&!gh){gk=dz;
}else{gk=dy;
}return {backgroundColor:eR,decorator:gk};
}},"list/pane":eY,"listitem":{alias:fa,style:function(gt){var gu;

if(gt.dragover){gu=gt.selected?eP:fs;
}else{gu=gt.selected?dA:undefined;
}return {padding:gt.dragover?[4,4,2,4]:4,textColor:gt.selected?eV:undefined,decorator:gu};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:fb,include:fb,style:function(gr){return {padding:5,center:true,icon:gr.vertical?dC:eD};
}},"slidebar/button-backward":{alias:fb,include:fb,style:function(gH){return {padding:5,center:true,icon:gH.vertical?cf:fw};
}},"tabview":{style:function(hK){return {contentPadding:16};
}},"tabview/bar":{alias:cN,style:function(bn){var bo={marginBottom:bn.barTop?-1:0,marginTop:bn.barBottom?-4:0,marginLeft:bn.barRight?-3:0,marginRight:bn.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bn.barTop||bn.barBottom){bo.paddingLeft=5;
bo.paddingRight=7;
}else{bo.paddingTop=5;
bo.paddingBottom=7;
}return bo;
}},"tabview/bar/button-forward":{include:fF,alias:fF,style:function(hU){if(hU.barTop||hU.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cF,alias:cF,style:function(hR){if(hR.barTop||hR.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gC){return {decorator:dY,minHeight:100,marginBottom:gC.barBottom?-1:0,marginTop:gC.barTop?-1:0,marginLeft:gC.barLeft?-1:0,marginRight:gC.barRight?-1:0};
}},"tabview-page":eY,"tabview-page/button":{alias:fa,style:function(ba){var bg,bc=0;
var bf=0,bb=0,bd=0,be=0;

if(ba.checked){if(ba.barTop){bg=ds;
bc=[6,14];
bd=ba.firstTab?0:-5;
be=ba.lastTab?0:-5;
}else if(ba.barBottom){bg=dV;
bc=[6,14];
bd=ba.firstTab?0:-5;
be=ba.lastTab?0:-5;
}else if(ba.barRight){bg=ci;
bc=[6,13];
bf=ba.firstTab?0:-5;
bb=ba.lastTab?0:-5;
}else{bg=ef;
bc=[6,13];
bf=ba.firstTab?0:-5;
bb=ba.lastTab?0:-5;
}}else{if(ba.barTop){bg=dN;
bc=[4,10];
bf=4;
bd=ba.firstTab?5:1;
be=1;
}else if(ba.barBottom){bg=cu;
bc=[4,10];
bb=4;
bd=ba.firstTab?5:1;
be=1;
}else if(ba.barRight){bg=em;
bc=[4,10];
be=5;
bf=ba.firstTab?5:1;
bb=1;
bd=1;
}else{bg=dU;
bc=[4,10];
bd=5;
bf=ba.firstTab?5:1;
bb=1;
be=1;
}}return {zIndex:ba.checked?10:5,decorator:bg,padding:bc,marginTop:bf,marginBottom:bb,marginLeft:bd,marginRight:be,textColor:ba.checked?bw:cp};
}},"tabview-page/button/close-button":{alias:fa,style:function(bi){return {icon:eO};
}},"toolbar":{style:function(hL){return {decorator:bK,spacing:2};
}},"toolbar/part":{style:function(fR){return {decorator:ee,spacing:2};
}},"toolbar/part/container":{style:function(hq){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hn){return {source:fo,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:fa,style:function(go){return {marginTop:2,marginBottom:2,padding:(go.pressed||go.checked||go.hovered)&&!go.disabled||(go.disabled&&go.checked)?3:5,decorator:go.pressed||(go.checked&&!go.hovered)||(go.checked&&go.disabled)?es:go.hovered&&!go.disabled?bu:undefined};
}},"toolbar-menubutton":{alias:fi,include:fi,style:function(gm){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eU,include:eU,style:function(hO){return {source:cz};
}},"toolbar-splitbutton":{style:function(hN){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:fi,include:fi,style:function(hI){return {icon:dC,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:fi,include:fi,style:function(hS){return {padding:hS.pressed||hS.checked?1:hS.hovered?1:3,icon:dC,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(he){return {decorator:dW,margin:7};
}},"tree":ff,"tree-item":{style:function(hg){return {padding:[2,6],textColor:hg.selected?eV:undefined,decorator:hg.selected?dA:undefined};
}},"tree-item/icon":{include:eU,style:function(bm){return {paddingRight:5};
}},"tree-item/label":eE,"tree-item/open":{include:eU,style:function(r){var s;

if(r.selected&&r.opened){s=et;
}else if(r.selected&&!r.opened){s=by;
}else if(r.opened){s=cB;
}else{s=fy;
}return {padding:[0,5,0,2],source:s};
}},"tree-folder":{include:fc,alias:fc,style:function(gI){var gJ;

if(gI.small){gJ=gI.opened?cb:bI;
}else if(gI.large){gJ=gI.opened?dt:dX;
}else{gJ=gI.opened?ek:du;
}return {icon:gJ};
}},"tree-file":{include:fc,alias:fc,style:function(hH){return {icon:hH.small?cx:hH.large?bS:fp};
}},"treevirtual":cc,"treevirtual-folder":{style:function(M){return {icon:M.opened?cb:bI};
}},"treevirtual-file":{include:cD,alias:cD,style:function(fV){return {icon:cx};
}},"treevirtual-line":{style:function(hd){return {icon:bE};
}},"treevirtual-contract":{style:function(fX){return {icon:cB,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(e){return {icon:fy,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":fd,"treevirtual-only-expand":eC,"treevirtual-start-contract":fd,"treevirtual-start-expand":eC,"treevirtual-end-contract":fd,"treevirtual-end-expand":eC,"treevirtual-cross-contract":fd,"treevirtual-cross-expand":eC,"treevirtual-end":{style:function(hM){return {icon:bE};
}},"treevirtual-cross":{style:function(gy){return {icon:bE};
}},"tooltip":{include:fh,style:function(hs){return {backgroundColor:cV,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":fa,"tooltip-error":{include:fe,style:function(ig){return {textColor:eV,placeMethod:eY,offset:[0,0,0,14],marginTop:-2,position:bA,showTimeout:100,hideTimeout:10000,decorator:ct,shadow:cO,font:eT};
}},"tooltip-error/atom":fa,"window":{style:function(h){return {shadow:cl,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bk){return {decorator:cs};
}},"window/captionbar":{style:function(hf){return {decorator:hf.active?bL:eb,textColor:hf.active?ey:cr,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(gT){return {margin:[5,0,3,6]};
}},"window/title":{style:function(bj){return {alignY:eS,font:eT,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:fa,style:function(hC){return {icon:hC.active?hC.hovered?dQ:en:er,margin:[4,8,2,0]};
}},"window/restore-button":{alias:fa,style:function(fY){return {icon:fY.active?fY.hovered?cm:bQ:eu,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:fa,style:function(bh){return {icon:bh.active?bh.hovered?bW:dj:eH,margin:[4,8,2,0]};
}},"window/close-button":{alias:fa,style:function(hc){return {icon:hc.active?hc.hovered?eL:dc:dG,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(gx){return {padding:[2,6],decorator:cS,minHeight:18};
}},"window/statusbar-text":{style:function(hj){return {font:bU};
}},"iframe":{style:function(fQ){return {decorator:eX};
}},"resizer":{style:function(fL){return {decorator:dh};
}},"splitpane":{style:function(gE){return {decorator:eK};
}},"splitpane/splitter":{style:function(fJ){return {width:fJ.horizontal?3:undefined,height:fJ.vertical?3:undefined,backgroundColor:fE};
}},"splitpane/splitter/knob":{style:function(hb){return {source:hb.horizontal?dR:ed};
}},"splitpane/slider":{style:function(k){return {width:k.horizontal?3:undefined,height:k.vertical?3:undefined,backgroundColor:fE};
}},"selectbox":{alias:fb,include:fb,style:function(ih){return {padding:[2,8]};
}},"selectbox/atom":fa,"selectbox/popup":fh,"selectbox/list":{alias:ff},"selectbox/arrow":{include:eU,style:function(gG){return {source:dC,paddingLeft:5};
}},"datechooser":{style:function(hx){var hB;
var hz=!!hx.focused;
var hA=!!hx.invalid;
var hy=!!hx.disabled;

if(hz&&hA&&!hy){hB=dv;
}else if(hz&&!hA&&!hy){hB=fg;
}else if(hy){hB=dx;
}else if(!hz&&hA&&!hy){hB=dz;
}else{hB=dy;
}return {padding:2,decorator:hB,backgroundColor:eR};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:fb,alias:fb,style:function(P){var Q={padding:[2,4],shadow:undefined};

if(P.lastYear){Q.icon=dS;
Q.marginRight=1;
}else if(P.lastMonth){Q.icon=fw;
}else if(P.nextYear){Q.icon=bq;
Q.marginLeft=1;
}else if(P.nextMonth){Q.icon=eD;
}return Q;
}},"datechooser/last-year-button-tooltip":fe,"datechooser/last-month-button-tooltip":fe,"datechooser/next-year-button-tooltip":fe,"datechooser/next-month-button-tooltip":fe,"datechooser/last-year-button":fl,"datechooser/last-month-button":fl,"datechooser/next-month-button":fl,"datechooser/next-year-button":fl,"datechooser/month-year-label":{style:function(fP){return {font:eT,textAlign:ez,textColor:fP.disabled?dE:undefined};
}},"datechooser/date-pane":{style:function(hD){return {textColor:hD.disabled?dE:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hJ){return {textColor:hJ.disabled?dE:hJ.weekend?fC:undefined,textAlign:ez,paddingTop:2,backgroundColor:cy};
}},"datechooser/week":{style:function(hw){return {textAlign:ez,padding:[2,4],backgroundColor:cy};
}},"datechooser/day":{style:function(l){return {textAlign:ez,decorator:l.disabled?undefined:l.selected?dA:undefined,textColor:l.disabled?dE:l.selected?eV:l.otherMonth?fC:undefined,font:l.today?eT:undefined,padding:[2,4]};
}},"combobox":{style:function(U){var Y;
var W=!!U.focused;
var X=!!U.invalid;
var V=!!U.disabled;

if(W&&X&&!V){Y=dv;
}else if(W&&!X&&!V){Y=fg;
}else if(V){Y=dx;
}else if(!W&&X&&!V){Y=dz;
}else{Y=dy;
}return {decorator:Y};
}},"combobox/popup":fh,"combobox/list":{alias:ff},"combobox/button":{include:fb,alias:fb,style:function(p){var q={icon:dC,padding:2};

if(p.selected){q.decorator=fD;
}return q;
}},"combobox/textfield":{include:eB,style:function(ht){return {decorator:undefined};
}},"menu":{style:function(c){var d={decorator:cQ,shadow:cE,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:c.submenu||c.contextmenu?fn:dq};

if(c.submenu){d.position=bA;
d.offset=[-2,-3];
}return d;
}},"menu/slidebar":dT,"menu-slidebar":eY,"menu-slidebar-button":{style:function(gb){return {decorator:gb.hovered?dA:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:fB,style:function(m){return {icon:m.hovered?el:cf};
}},"menu-slidebar/button-forward":{include:fB,style:function(gL){return {icon:gL.hovered?cw:dC};
}},"menu-separator":{style:function(ga){return {height:0,decorator:dg,margin:[4,2]};
}},"menu-button":{alias:fa,style:function(b){return {decorator:b.selected?dA:undefined,textColor:b.selected?eV:undefined,padding:[4,6]};
}},"menu-button/icon":{include:eU,style:function(hE){return {alignY:eS};
}},"menu-button/label":{include:eE,style:function(gD){return {alignY:eS,padding:1};
}},"menu-button/shortcut":{include:eE,style:function(ho){return {alignY:eS,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:eU,style:function(hQ){return {source:hQ.selected?di:eD,alignY:eS};
}},"menu-checkbox":{alias:dw,include:dw,style:function(G){return {icon:!G.checked?undefined:G.selected?fv:cv};
}},"menu-radiobutton":{alias:dw,include:dw,style:function(t){return {icon:!t.checked?undefined:t.selected?dm:br};
}},"menubar":{style:function(O){return {decorator:dP};
}},"menubar-button":{alias:fa,style:function(gM){return {decorator:gM.pressed||gM.hovered?dA:undefined,textColor:gM.pressed||gM.hovered?eV:undefined,padding:[3,8]};
}},"colorselector":eY,"colorselector/control-bar":eY,"colorselector/control-pane":eY,"colorselector/visual-pane":dD,"colorselector/preset-grid":eY,"colorselector/colorbucket":{style:function(g){return {decorator:eX,width:16,height:16};
}},"colorselector/preset-field-set":dD,"colorselector/input-field-set":dD,"colorselector/preview-field-set":dD,"colorselector/hex-field-composite":eY,"colorselector/hex-field":eB,"colorselector/rgb-spinner-composite":eY,"colorselector/rgb-spinner-red":fj,"colorselector/rgb-spinner-green":fj,"colorselector/rgb-spinner-blue":fj,"colorselector/hsb-spinner-composite":eY,"colorselector/hsb-spinner-hue":fj,"colorselector/hsb-spinner-saturation":fj,"colorselector/hsb-spinner-brightness":fj,"colorselector/preview-content-old":{style:function(T){return {decorator:eX,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(f){return {decorator:eX,backgroundColor:eR,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(fO){return {decorator:eX,margin:5};
}},"colorselector/brightness-field":{style:function(a){return {decorator:eX,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eY,"colorselector/hue-saturation-handle":eY,"colorselector/brightness-pane":eY,"colorselector/brightness-handle":eY,"colorpopup":{alias:fh,include:fh,style:function(hG){return {padding:5,backgroundColor:eG};
}},"colorpopup/field":{style:function(gn){return {decorator:eX,margin:2,width:14,height:14,backgroundColor:eR};
}},"colorpopup/selector-button":eW,"colorpopup/auto-button":eW,"colorpopup/preview-pane":dD,"colorpopup/current-preview":{style:function(fN){return {height:20,padding:4,marginLeft:4,decorator:eX,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(fK){return {height:20,padding:4,marginRight:4,decorator:eX,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eW,include:eW,style:function(gA){return {icon:dF};
}},"colorpopup/colorselector-cancelbutton":{alias:eW,include:eW,style:function(gd){return {icon:dO};
}},"table":{alias:eY,style:function(gp){return {decorator:cc};
}},"table-header":{},"table/statusbar":{style:function(hr){return {decorator:ei,padding:[0,2]};
}},"table/column-button":{alias:fb,style:function(ha){return {decorator:ck,padding:3,icon:bs};
}},"table-column-reset-button":{include:dw,alias:dw,style:function(){return {icon:dl};
}},"table-scroller":eY,"table-scroller/scrollbar-x":fk,"table-scroller/scrollbar-y":fk,"table-scroller/header":{style:function(j){return {decorator:cX};
}},"table-scroller/pane":{style:function(gB){return {backgroundColor:db};
}},"table-scroller/focus-indicator":{style:function(gq){return {decorator:cP};
}},"table-scroller/resize-line":{style:function(hT){return {backgroundColor:eI,width:2};
}},"table-header-cell":{alias:fa,style:function(D){var E=qx.bom.client.Engine.MSHTML?cd:bB;
return {minWidth:13,minHeight:20,padding:D.hovered?[3,4,2,4]:[3,4],decorator:D.hovered?dI:cL,sortIcon:D.sorted?(D.sortedAscending?cH+E:bp+E):undefined};
}},"table-header-cell/label":{style:function(fT){return {minWidth:0,alignY:eS,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hk){return {alignY:eS,alignX:bG};
}},"table-header-cell/icon":{style:function(gf){return {minWidth:0,alignY:eS,paddingRight:5};
}},"table-editor-textfield":{include:eB,style:function(gv){return {decorator:undefined,padding:[2,2],backgroundColor:eR};
}},"table-editor-selectbox":{include:cG,alias:cG,style:function(gw){return {padding:[0,2],backgroundColor:eR};
}},"table-editor-combobox":{include:bz,alias:bz,style:function(ie){return {decorator:undefined,backgroundColor:eR};
}},"progressive-table-header":{alias:eY,style:function(fW){return {decorator:bt};
}},"progressive-table-header-cell":{alias:fa,style:function(i){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:df};
}},"app-header":{style:function(gz){return {font:eT,textColor:eV,padding:[8,12],decorator:cR};
}},"virtual-list":ff,"virtual-list/row-layer":cq,"row-layer":{style:function(gl){return {colorEven:ey,colorOdd:dH};
}},"column-layer":eY,"cell":{style:function(C){return {textColor:C.selected?eV:fz,padding:[3,6],font:cC};
}},"cell-string":dB,"cell-number":{include:dB,style:function(gs){return {textAlign:bG};
}},"cell-image":dB,"cell-boolean":{include:dB,style:function(L){return {iconTrue:cK,iconFalse:bN};
}},"cell-atom":dB,"cell-date":dB,"cell-html":dB,"htmlarea":{"include":eY,style:function(hP){return {backgroundColor:ey};
}}}});
})();
(function(){var d="toolbar-button",c="inspector.theme.Appearance",b="green",a="bold";
qx.Theme.define(c,{extend:qx.theme.modern.Appearance,appearances:{"toolbar-button-bold":{alias:d,include:d,style:function(e){return {textColor:b,font:a};
}}}});
})();
(function(){var a="inspector.theme.Theme";
qx.Theme.define(a,{meta:{color:inspector.theme.Color,decoration:inspector.theme.Decoration,font:inspector.theme.Font,icon:qx.theme.icon.Tango,appearance:inspector.theme.Appearance}});
})();
(function(){var k="emulated",j="native",h='"',g="qx.lang.Core",f="\\\\",e="\\\"",d="[object Error]";
qx.Bootstrap.define(g,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==d)?k:j,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?j:k,{"native":Array.prototype.indexOf,"emulated":function(u,v){if(v==null){v=0;
}else if(v<0){v=Math.max(0,this.length+v);
}
for(var i=v;i<this.length;i++){if(this[i]===u){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?j:k,{"native":Array.prototype.lastIndexOf,"emulated":function(s,t){if(t==null){t=this.length-1;
}else if(t<0){t=Math.max(0,this.length+t);
}
for(var i=t;i>=0;i--){if(this[i]===s){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?j:k,{"native":Array.prototype.forEach,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){p.call(q||window,r,i,this);
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
(function(){var n="indexOf",m="lastIndexOf",k="slice",j="concat",h="join",g="toLocaleUpperCase",f="shift",e="substr",d="filter",c="unshift",K="match",J="quote",I="qx.lang.Generics",H="localeCompare",G="sort",F="some",E="charAt",D="split",C="substring",B="pop",v="toUpperCase",w="replace",t="push",u="charCodeAt",q="every",r="reverse",o="search",p="forEach",x="map",y="toLowerCase",A="splice",z="toLocaleLowerCase";
qx.Bootstrap.define(I,{statics:{__cc:{"Array":[h,r,G,t,B,f,c,A,j,k,n,m,p,x,d,F,q],"String":[J,C,y,v,E,u,n,m,z,g,H,K,o,w,D,e,j,k]},__cd:function(a,b){return function(s){return a.prototype[b].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ce:function(){var L=qx.lang.Generics.__cc;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__cd(N,O);
}}}}},defer:function(Q){Q.__ce();
}});
})();
(function(){var e="qx.event.type.Data",d="qx.event.type.Event",c="qx.data.IListData";
qx.Interface.define(c,{events:{"change":e,"changeLength":d},members:{getItem:function(f){},setItem:function(a,b){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var h="qx.globalErrorHandling",g="on",f="qx.event.GlobalError";
qx.Bootstrap.define(f,{statics:{setErrorHandler:function(i,j){this.__cf=i||null;
this.__cg=j||window;

if(qx.core.Setting.get(h)===g){if(i&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__ch,this);
}
if(!i&&window.onerror){window.onerror=null;
}}},__ch:function(c,d,e){if(this.__cf){this.handleError(new qx.core.WindowError(c,d,e));
return true;
}},observeMethod:function(a){if(qx.core.Setting.get(h)===g){var self=this;
return function(){if(!self.__cf){return a.apply(this,arguments);
}
try{return a.apply(this,arguments);
}catch(b){self.handleError(b);
}};
}else{return a;
}},handleError:function(k){if(this.__cf){this.__cf.call(this.__cg,k);
}}},defer:function(l){qx.core.Setting.define(h,g);
l.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__ci=c;
this.__cj=d||b;
this.__ck=e===undefined?-1:e;
},members:{__ci:null,__cj:null,__ck:null,toString:function(){return this.__ci;
},getUri:function(){return this.__cj;
},getLineNumber:function(){return this.__ck;
}}});
})();
(function(){var l="qx.event.type.Event";
qx.Class.define(l,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){{};
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
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(c){this._type=c;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(h){this._eventPhase=h;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(j){this._currentTarget=j;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(g){this._relatedTarget=g;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(i){this._bubbles=i;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(k){this._cancelable=k;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var d="qx.event.type.Data";
qx.Class.define(d,{extend:qx.event.type.Event,members:{__cl:null,__cm:null,init:function(a,b,c){arguments.callee.base.call(this,false,c);
this.__cl=a;
this.__cm=b;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f.__cl=this.__cl;
f.__cm=this.__cm;
return f;
},getData:function(){return this.__cl;
},getOldData:function(){return this.__cm;
}},destruct:function(){this.__cl=this.__cm=null;
}});
})();
(function(){var c="qx.event.IEventHandler";
qx.Interface.define(c,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(a,b){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var t="ready",s="qx.client",r="mshtml",q="load",p="unload",o="qx.event.handler.Application",n="complete",m="gecko|opera|webkit",l="left",k="DOMContentLoaded",j="shutdown";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){arguments.callee.base.call(this);
this._window=u.getWindow();
this.__cn=false;
this.__co=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__cp:false,onScriptLoaded:function(){this.__cp=true;
var v=qx.event.handler.Application.$$instance;

if(v){v.__cs();
}}},members:{canHandleEvent:function(y,z){},registerEvent:function(f,g,h){},unregisterEvent:function(b,c,d){},__cq:null,__cn:null,__co:null,__cr:null,__cs:function(){var x=qx.event.handler.Application;
if(!this.__cq&&this.__cn&&x.__cp){if(qx.core.Variant.isSet(s,r)){if(qx.event.Registration.hasListener(this._window,t)){this.__cq=true;
qx.event.Registration.fireEvent(this._window,t);
}}else{this.__cq=true;
qx.event.Registration.fireEvent(this._window,t);
}}},isApplicationReady:function(){return this.__cq;
},_initObserver:function(){if(qx.$$domReady||document.readyState==n){this.__cn=true;
this.__cs();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(s,m)){qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(s,r)){var self=this;
var w=function(){try{document.documentElement.doScroll(l);

if(document.body){self._onNativeLoadWrapped();
}}catch(i){window.setTimeout(w,100);
}};
w();
}qx.bom.Event.addNativeListener(this._window,q,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,p,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,q,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,p,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cn=true;
this.__cs();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cr){this.__cr=true;

try{qx.event.Registration.fireEvent(this._window,j);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var A=":",z="qx.client",y="anonymous",x="...",w="qx.dev.StackTrace",v="",u="\n",t="/source/class/",s=".";
qx.Bootstrap.define(w,{statics:{getStackTrace:qx.core.Variant.select(z,{"gecko":function(){try{throw new Error();
}catch(h){var J=this.getStackTraceFromError(h);
qx.lang.Array.removeAt(J,0);
var H=this.getStackTraceFromCaller(arguments);
var F=H.length>J.length?H:J;

for(var i=0;i<Math.min(H.length,J.length);i++){var G=H[i];

if(G.indexOf(y)>=0){continue;
}var N=G.split(A);

if(N.length!=2){continue;
}var L=N[0];
var E=N[1];
var D=J[i];
var O=D.split(A);
var K=O[0];
var C=O[1];

if(qx.Class.getByName(K)){var I=K;
}else{I=L;
}var M=I+A;

if(E){M+=E+A;
}M+=C;
F[i]=M;
}return F;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var q;

try{q.bar();
}catch(X){var r=this.getStackTraceFromError(X);
qx.lang.Array.removeAt(r,0);
return r;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(z,{"opera":function(W){return [];
},"default":function(j){var o=[];
var n=qx.lang.Function.getCaller(j);
var k={};

while(n){var l=qx.lang.Function.getName(n);
o.push(l);

try{n=n.caller;
}catch(p){break;
}
if(!n){break;
}var m=qx.core.ObjectRegistry.toHashCode(n);

if(k[m]){o.push(x);
break;
}k[m]=n;
}return o;
}}),getStackTraceFromError:qx.core.Variant.select(z,{"gecko":function(P){if(!P.stack){return [];
}var V=/@(.+):(\d+)$/gm;
var Q;
var R=[];

while((Q=V.exec(P.stack))!=null){var S=Q[1];
var U=Q[2];
var T=this.__ct(S);
R.push(T+A+U);
}return R;
},"webkit":function(B){if(B.sourceURL&&B.line){return [this.__ct(B.sourceURL)+A+B.line];
}else{return [];
}},"opera":function(a){if(a.message.indexOf("Backtrace:")<0){return [];
}var c=[];
var d=qx.lang.String.trim(a.message.split("Backtrace:")[1]);
var e=d.split(u);

for(var i=0;i<e.length;i++){var b=e[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(b&&b.length>=2){var g=b[1];
var f=this.__ct(b[2]);
c.push(f+A+g);
}}return c;
},"default":function(){return [];
}}),__ct:function(Y){var bc=t;
var ba=Y.indexOf(bc);
var bb=(ba==-1)?Y:Y.substring(ba+bc.length).replace(/\//g,s).replace(/\.js$/,v);
return bb;
}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
this.__cu={};

if(n!=null){this.setSize(n);
}},properties:{size:{check:a,init:Infinity}},members:{__cu:null,getObject:function(j){if(this.$$disposed){return;
}
if(!j){throw new Error("Class needs to be defined!");
}var k=null;
var m=this.__cu[j.classname];

if(m){k=m.pop();
}
if(k){k.$$pooled=false;
}else{k=new j;
}return k;
},poolObject:function(c){if(!this.__cu){return;
}var d=c.classname;
var e=this.__cu[d];

if(c.$$pooled){throw new Error("Object is already pooled: "+c);
}
if(!e){this.__cu[d]=e=[];
}if(e.length>this.getSize()){if(c.destroy){c.destroy();
}else{c.dispose();
}return;
}c.$$pooled=true;
e.push(c);
}},destruct:function(){var h=this.__cu;
var f,g,i,l;

for(f in h){g=h[f];

for(i=0,l=g.length;i<l;i++){g[i].dispose();
}}delete this.__cu;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var j="Don't use 'disposeFields' - instead assign directly to 'null'",h="qx.util.DisposeUtil";
qx.Class.define(h,{statics:{disposeFields:function(k,m){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
var name;

for(var i=0,l=m.length;i<l;i++){var name=m[i];

if(k[name]==null||!k.hasOwnProperty(name)){continue;
}k[name]=null;
}},disposeObjects:function(f,g){var name;

for(var i=0,l=g.length;i<l;i++){name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(f[name].dispose){f[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}f[name]=null;
}},disposeArray:function(n,o){var q=n[o];

if(!q){return;
}if(qx.core.ObjectRegistry.inShutDown){n[o]=null;
return;
}try{var p;

for(var i=q.length-1;i>=0;i--){p=q[i];

if(p){p.dispose();
}}}catch(e){throw new Error("The array field: "+o+" of object: "+n+" has non disposable entries: "+e);
}q.length=0;
n[o]=null;
},disposeMap:function(a,b){var c=a[b];

if(!c){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{for(var d in c){if(c.hasOwnProperty(d)){c[d].dispose();
}}}catch(u){throw new Error("The map field: "+b+" of object: "+a+" has non disposable entries: "+u);
}a[b]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
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
(function(){var b="qx.event.dispatch.Direct";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(a){this._manager=a;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,e){return !event.getBubbles();
},dispatchEvent:function(f,event,g){var k,h;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;
m[i].handler.call(j,event);
}}}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var p="get",o="",n="[",m="last",l="change",k="]",h=".",g="Number",f="String",d="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=").",y=") to the object '",x="Integer",w="qx.data.SingleValueBinding",v="No event could be found for the property",t="PositiveNumber",u="Binding from '",r="PositiveInteger",s="Binding does not exist!",q="Date";
qx.Class.define(w,{statics:{DEBUG_ON:false,__cv:{},bind:function(bQ,bR,bS,bT,bU){var cf=this.__cx(bQ,bR,bS,bT,bU);
var ca=bR.split(h);
var bW=this.__cE(ca);
var ce=[];
var cb=[];
var cc=[];
var bX=[];
var bY=bQ;
for(var i=0;i<ca.length;i++){if(bW[i]!==o){bX.push(l);
}else{bX.push(this.__cz(bY,ca[i]));
}ce[i]=bY;
if(i==ca.length-1){if(bW[i]!==o){var ci=bW[i]===m?bY.length-1:bW[i];
var bV=bY.getItem(ci);
this.__cD(bV,bS,bT,bU,bQ);
cc[i]=this.__cF(bY,bX[i],bS,bT,bU,bW[i]);
}else{if(ca[i]!=null&&bY[p+qx.lang.String.firstUp(ca[i])]!=null){var bV=bY[p+qx.lang.String.firstUp(ca[i])]();
this.__cD(bV,bS,bT,bU,bQ);
}cc[i]=this.__cF(bY,bX[i],bS,bT,bU);
}}else{var cg={index:i,propertyNames:ca,sources:ce,listenerIds:cc,arrayIndexValues:bW,targetObject:bS,targetPropertyChain:bT,options:bU,listeners:cb};
var cd=qx.lang.Function.bind(this.__cw,this,cg);
cb.push(cd);
cc[i]=bY.addListener(bX[i],cd);
}if(bY[p+qx.lang.String.firstUp(ca[i])]==null){bY=null;
}else if(bW[i]!==o){bY=bY[p+qx.lang.String.firstUp(ca[i])](bW[i]);
}else{bY=bY[p+qx.lang.String.firstUp(ca[i])]();
}
if(!bY){break;
}}var ch={type:E,listenerIds:cc,sources:ce,targetListenerIds:cf.listenerIds,targets:cf.targets};
this.__cG(ch,bQ,bR,bS,bT);
return ch;
},__cw:function(br){if(br.options&&br.options.onUpdate){br.options.onUpdate(br.sources[br.index],br.targetObject);
}for(var j=br.index+1;j<br.propertyNames.length;j++){var bv=br.sources[j];
br.sources[j]=null;

if(!bv){continue;
}bv.removeListenerById(br.listenerIds[j]);
}var bv=br.sources[br.index];
for(var j=br.index+1;j<br.propertyNames.length;j++){if(br.arrayIndexValues[j-1]!==o){bv=bv[p+qx.lang.String.firstUp(br.propertyNames[j-1])](br.arrayIndexValues[j-1]);
}else{bv=bv[p+qx.lang.String.firstUp(br.propertyNames[j-1])]();
}br.sources[j]=bv;
if(!bv){this.__cA(br.targetObject,br.targetPropertyChain);
break;
}if(j==br.propertyNames.length-1){if(qx.Class.implementsInterface(bv,qx.data.IListData)){var bw=br.arrayIndexValues[j]===m?bv.length-1:br.arrayIndexValues[j];
var bt=bv.getItem(bw);
this.__cD(bt,br.targetObject,br.targetPropertyChain,br.options,br.sources[br.index]);
br.listenerIds[j]=this.__cF(bv,l,br.targetObject,br.targetPropertyChain,br.options,br.arrayIndexValues[j]);
}else{if(br.propertyNames[j]!=null&&bv[p+qx.lang.String.firstUp(br.propertyNames[j])]!=null){var bt=bv[p+qx.lang.String.firstUp(br.propertyNames[j])]();
this.__cD(bt,br.targetObject,br.targetPropertyChain,br.options,br.sources[br.index]);
}var bu=this.__cz(bv,br.propertyNames[j]);
br.listenerIds[j]=this.__cF(bv,bu,br.targetObject,br.targetPropertyChain,br.options);
}}else{if(br.listeners[j]==null){var bs=qx.lang.Function.bind(this.__cw,this,br);
br.listeners.push(bs);
}if(qx.Class.implementsInterface(bv,qx.data.IListData)){var bu=l;
}else{var bu=this.__cz(bv,br.propertyNames[j]);
}br.listenerIds[j]=bv.addListener(bu,br.listeners[j]);
}}},__cx:function(cH,cI,cJ,cK,cL){var cP=cK.split(h);
var cN=this.__cE(cP);
var cU=[];
var cT=[];
var cR=[];
var cQ=[];
var cO=cJ;
for(var i=0;i<cP.length-1;i++){if(cN[i]!==o){cQ.push(l);
}else{try{cQ.push(this.__cz(cO,cP[i]));
}catch(e){break;
}}cU[i]=cO;
var cS=function(){for(var j=i+1;j<cP.length-1;j++){var H=cU[j];
cU[j]=null;

if(!H){continue;
}H.removeListenerById(cR[j]);
}var H=cU[i];
for(var j=i+1;j<cP.length-1;j++){var F=qx.lang.String.firstUp(cP[j-1]);
if(cN[j-1]!==o){var I=cN[j-1]===m?H.getLength()-1:cN[j-1];
H=H[p+F](I);
}else{H=H[p+F]();
}cU[j]=H;
if(cT[j]==null){cT.push(cS);
}if(qx.Class.implementsInterface(H,qx.data.IListData)){var G=l;
}else{try{var G=qx.data.SingleValueBinding.__cz(H,cP[j]);
}catch(e){break;
}}cR[j]=H.addListener(G,cT[j]);
}qx.data.SingleValueBinding.__cy(cH,cI,cJ,cK);
};
cT.push(cS);
cR[i]=cO.addListener(cQ[i],cS);
var cM=qx.lang.String.firstUp(cP[i]);
if(cO[p+cM]==null){cO=null;
}else if(cN[i]!==o){cO=cO[p+cM](cN[i]);
}else{cO=cO[p+cM]();
}
if(!cO){break;
}}return {listenerIds:cR,targets:cU};
},__cy:function(ck,cl,cm,cn){var cr=this.__cC(ck,cl);

if(cr!=null){var ct=cl.substring(cl.lastIndexOf(h)+1,cl.length);
if(ct.charAt(ct.length-1)==k){var co=ct.substring(ct.lastIndexOf(n)+1,ct.length-1);
var cq=ct.substring(0,ct.lastIndexOf(n));
var cs=cr[p+qx.lang.String.firstUp(cq)]();

if(co==m){co=cs.length-1;
}
if(cs!=null){var cp=cs.getItem(co);
}}else{var cp=cr[p+qx.lang.String.firstUp(ct)]();
}}this.__cB(cm,cn,cp);
},__cz:function(a,b){var c=this.__cI(a,b);
if(c==null){if(qx.Class.supportsEvent(a.constructor,b)){c=b;
}else if(qx.Class.supportsEvent(a.constructor,l+qx.lang.String.firstUp(b))){c=l+qx.lang.String.firstUp(b);
}else{throw new qx.core.AssertionError(v,b);
}}return c;
},__cA:function(R,S){var T=this.__cC(R,S);

if(T!=null){var U=S.substring(S.lastIndexOf(h)+1,S.length);
if(U.charAt(U.length-1)==k){this.__cB(R,S,null);
return;
}if(T[C+qx.lang.String.firstUp(U)]!=undefined){T[C+qx.lang.String.firstUp(U)]();
}else{T[d+qx.lang.String.firstUp(U)](null);
}}},__cB:function(bj,bk,bl){var bp=this.__cC(bj,bk);

if(bp!=null){var bq=bk.substring(bk.lastIndexOf(h)+1,bk.length);
if(bq.charAt(bq.length-1)==k){var bm=bq.substring(bq.lastIndexOf(n)+1,bq.length-1);
var bo=bq.substring(0,bq.lastIndexOf(n));
var bn=bp[p+qx.lang.String.firstUp(bo)]();

if(bm==m){bm=bn.length-1;
}
if(bn!=null){bn.setItem(bm,bl);
}}else{bp[d+qx.lang.String.firstUp(bq)](bl);
}}},__cC:function(cX,cY){var dc=cY.split(h);
var dd=cX;
for(var i=0;i<dc.length-1;i++){try{var db=dc[i];
if(db.indexOf(k)==db.length-1){var da=db.substring(db.indexOf(n)+1,db.length-1);
db=db.substring(0,db.indexOf(n));
}dd=dd[p+qx.lang.String.firstUp(db)]();

if(da!=null){if(da==m){da=dd.length-1;
}dd=dd.getItem(da);
da=null;
}}catch(cj){return null;
}}return dd;
},__cD:function(bC,bD,bE,bF,bG){bC=this.__cH(bC,bD,bE,bF);
if(bC==null){this.__cA(bD,bE);
}if(bC!=undefined){try{this.__cB(bD,bE,bC);
if(bF&&bF.onUpdate){bF.onUpdate(bG,bD,bC);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bF&&bF.onSetFail){bF.onSetFail(e);
}else{this.warn("Failed so set value "+bC+" on "+bD+". Error message: "+e);
}}}},__cE:function(bJ){var bK=[];
for(var i=0;i<bJ.length;i++){var name=bJ[i];
if(qx.lang.String.endsWith(name,k)){var bL=name.substring(name.indexOf(n)+1,name.indexOf(k));
if(name.indexOf(k)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bL!==m){if(bL==o||isNaN(parseInt(bL))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(n)!=0){bJ[i]=name.substring(0,name.indexOf(n));
bK[i]=o;
bK[i+1]=bL;
bJ.splice(i+1,0,D);
i++;
}else{bK[i]=bL;
bJ.splice(i,1,D);
}}else{bK[i]=o;
}}return bK;
},__cF:function(W,X,Y,ba,bb,bc){var bd;
{};
var bf=function(bM,e){if(bM!==o){if(bM===m){bM=W.length-1;
}var bP=W.getItem(bM);
if(bP==undefined){qx.data.SingleValueBinding.__cA(Y,ba);
}var bN=e.getData().start;
var bO=e.getData().end;

if(bM<bN||bM>bO){return;
}}else{var bP=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+W+" by "+X+" to "+Y+" ("+ba+")");
qx.log.Logger.debug("Data before conversion: "+bP);
}bP=qx.data.SingleValueBinding.__cH(bP,Y,ba,bb);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bP);
}try{if(bP!=undefined){qx.data.SingleValueBinding.__cB(Y,ba,bP);
}else{qx.data.SingleValueBinding.__cA(Y,ba);
}if(bb&&bb.onUpdate){bb.onUpdate(W,Y,bP);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bb&&bb.onSetFail){bb.onSetFail(e);
}else{this.warn("Failed so set value "+bP+" on "+Y+". Error message: "+e);
}}};
if(!bc){bc=o;
}bf=qx.lang.Function.bind(bf,W,bc);
var be=W.addListener(X,bf);
return be;
},__cG:function(M,N,O,P,Q){if(this.__cv[N.toHashCode()]===undefined){this.__cv[N.toHashCode()]=[];
}this.__cv[N.toHashCode()].push([M,N,O,P,Q]);
},__cH:function(cu,cv,cw,cx){if(cx&&cx.converter){var cz;

if(cv.getModel){cz=cv.getModel();
}return cx.converter(cu,cz);
}else{var cB=this.__cC(cv,cw);
var cC=cw.substring(cw.lastIndexOf(h)+1,cw.length);
if(cB==null){return cu;
}var cA=qx.Class.getPropertyDefinition(cB.constructor,cC);
var cy=cA==null?o:cA.check;
return this.__cJ(cu,cy);
}},__cI:function(bx,by){var bz=qx.Class.getPropertyDefinition(bx.constructor,by);

if(bz==null){return null;
}return bz.event;
},__cJ:function(bg,bh){var bi=qx.lang.Type.getClass(bg);
if((bi==g||bi==f)&&(bh==x||bh==r)){bg=parseInt(bg);
}if((bi==A||bi==g||bi==q)&&bh==f){bg=bg+o;
}if((bi==g||bi==f)&&(bh==g||bh==t)){bg=parseFloat(bg);
}return bg;
},removeBindingFromObject:function(J,K){if(K.type==E){for(var i=0;i<K.sources.length;i++){if(K.sources[i]){K.sources[i].removeListenerById(K.listenerIds[i]);
}}for(var i=0;i<K.targets.length;i++){if(K.targets[i]){K.targets[i].removeListenerById(K.targetListenerIds[i]);
}}}else{J.removeListenerById(K);
}var L=this.__cv[J.toHashCode()];
if(L!=undefined){for(var i=0;i<L.length;i++){if(L[i][0]==K){qx.lang.Array.remove(L,L[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bH){{};
var bI=this.__cv[bH.toHashCode()];

if(bI!=undefined){for(var i=bI.length-1;i>=0;i--){this.removeBindingFromObject(bH,bI[i][0]);
}}},getAllBindingsForObject:function(V){if(this.__cv[V.toHashCode()]===undefined){this.__cv[V.toHashCode()]=[];
}return this.__cv[V.toHashCode()];
},removeAllBindings:function(){for(var cW in this.__cv){var cV=qx.core.ObjectRegistry.fromHashCode(cW);
if(cV==null){delete this.__cv[cW];
continue;
}this.removeAllBindingsForObject(cV);
}this.__cv={};
},getAllBindings:function(){return this.__cv;
},showBindingInLog:function(cD,cE){var cG;
for(var i=0;i<this.__cv[cD.toHashCode()].length;i++){if(this.__cv[cD.toHashCode()][i][0]==cE){cG=this.__cv[cD.toHashCode()][i];
break;
}}
if(cG===undefined){var cF=s;
}else{var cF=u+cG[1]+B+cG[2]+y+cG[3]+B+cG[4]+z;
}qx.log.Logger.debug(cF);
},showAllBindingsInLog:function(){for(var bB in this.__cv){var bA=qx.core.ObjectRegistry.fromHashCode(bB);

for(var i=0;i<this.__cv[bB].length;i++){this.showBindingInLog(bA,this.__cv[bB][i][0]);
}}}}});
})();
(function(){var e=": ",d="qx.type.BaseError",c="";
qx.Class.define(d,{extend:Error,construct:function(a,b){Error.call(this,b);
this.__cK=a||c;
this.message=b||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cK:null,message:null,getComment:function(){return this.__cK;
},toString:function(){return this.__cK+e+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cL=qx.dev.StackTrace.getStackTrace();
},members:{__cL:null,getStackTrace:function(){return this.__cL;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var d="qx.event.handler.Object";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(e,f){return qx.Class.supportsEvent(e.constructor,f);
},registerEvent:function(g,h,i){},unregisterEvent:function(a,b,c){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var d="qx.util.ValueManager",c="abstract";
qx.Class.define(d,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(b){this._dynamic=b;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var m="/",l="0",k="qx/static",j="http://",i="https://",h="file://",g="qx.util.AliasManager",f="singleton",e=".",d="static";
qx.Class.define(g,{type:f,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cM={};
this.add(d,k);
},members:{__cM:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===m||r.charAt(0)===e||r.indexOf(j)===0||r.indexOf(i)===l||r.indexOf(h)===0){u[r]=false;
return r;
}
if(this.__cM[r]){return this.__cM[r];
}var t=r.substring(0,r.indexOf(m));
var s=this.__cM[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(n,o){this.__cM[n]=o;
var q=this._getDynamic();
for(var p in q){if(p.substring(0,p.indexOf(m))===n){q[p]=o+p.substring(n.length);
}}},remove:function(c){delete this.__cM[c];
},resolve:function(a){var b=this._getDynamic();

if(a!==null){a=this._preprocess(a);
}return b[a]||a;
}},destruct:function(){this.__cM=null;
}});
})();
(function(){var J="px",I="qx.client",H="div",G="img",F="",E="scale-x",D="mshtml",C="no-repeat",B="scale",A="scale-y",be="qx/icon",bd="repeat",bc=".png",bb="crop",ba="webkit",Y="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",X='<div style="',W="repeat-y",V='<img src="',U="qx.bom.element.Decoration",Q="', sizingMethod='",R="png",O="')",P='"/>',M='" style="',N="none",K=" ",L="repeat-x",S='"></div>',T="absolute";
qx.Class.define(U,{statics:{DEBUG:false,__cN:{},__cO:qx.core.Variant.isSet(I,D),__cP:qx.core.Variant.select(I,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__cQ:{"scale-x":G,"scale-y":G,"scale":G,"repeat":H,"no-repeat":H,"repeat-x":H,"repeat-y":H},update:function(br,bs,bt,bu){var bw=this.getTagName(bt,bs);

if(bw!=br.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bx=this.getAttributes(bs,bt,bu);

if(bw===G){br.src=bx.src;
}if(br.style.backgroundPosition!=F&&bx.style.backgroundPosition===undefined){bx.style.backgroundPosition=null;
}if(br.style.clip!=F&&bx.style.clip===undefined){bx.style.clip=null;
}var bv=qx.bom.element.Style;
bv.setStyles(br,bx.style);
},create:function(bl,bm,bn){var bo=this.getTagName(bm,bl);
var bq=this.getAttributes(bl,bm,bn);
var bp=qx.bom.element.Style.compile(bq.style);

if(bo===G){return V+bq.src+M+bp+P;
}else{return X+bp+S;
}},getTagName:function(bH,bI){if(qx.core.Variant.isSet(I,D)){if(bI&&this.__cO&&this.__cP[bH]&&qx.lang.String.endsWith(bI,bc)){return H;
}}return this.__cQ[bH];
},getAttributes:function(bS,bT,bU){if(!bU){bU={};
}
if(!bU.position){bU.position=T;
}
if(qx.core.Variant.isSet(I,D)){bU.fontSize=0;
bU.lineHeight=0;
}else if(qx.core.Variant.isSet(I,ba)){bU.WebkitUserDrag=N;
}var bW=qx.util.ResourceManager.getInstance().getImageFormat(bS)||qx.io.ImageLoader.getFormat(bS);
{};
var bV;
if(this.__cO&&this.__cP[bT]&&bW===R){bV=this.__cT(bU,bT,bS);
}else{if(bT===B){bV=this.__cU(bU,bT,bS);
}else if(bT===E||bT===A){bV=this.__cV(bU,bT,bS);
}else{bV=this.__cY(bU,bT,bS);
}}return bV;
},__cR:function(h,i,j){if(h.width==null&&i!=null){h.width=i+J;
}
if(h.height==null&&j!=null){h.height=j+J;
}return h;
},__cS:function(bE){var bF=qx.util.ResourceManager.getInstance().getImageWidth(bE)||qx.io.ImageLoader.getWidth(bE);
var bG=qx.util.ResourceManager.getInstance().getImageHeight(bE)||qx.io.ImageLoader.getHeight(bE);
return {width:bF,height:bG};
},__cT:function(by,bz,bA){var bD=this.__cS(bA);
by=this.__cR(by,bD.width,bD.height);
var bC=bz==C?bb:B;
var bB=Y+qx.util.ResourceManager.getInstance().toUri(bA)+Q+bC+O;
by.filter=bB;
by.backgroundImage=by.backgroundRepeat=F;
return {style:by};
},__cU:function(bf,bh,bi){var bj=qx.util.ResourceManager.getInstance().toUri(bi);
var bk=this.__cS(bi);
bf=this.__cR(bf,bk.width,bk.height);
return {src:bj,style:bf};
},__cV:function(s,t,u){var y=qx.util.ResourceManager.getInstance();
var x=y.isClippedImage(u);
var z=this.__cS(u);

if(x){var w=y.getData(u);
var v=y.toUri(w[4]);

if(t===E){s=this.__cW(s,w,z.height);
}else{s=this.__cX(s,w,z.width);
}return {src:v,style:s};
}else{{};

if(t==E){s.height=z.height==null?null:z.height+J;
}else if(t==A){s.width=z.width==null?null:z.width+J;
}var v=y.toUri(u);
return {src:v,style:s};
}},__cW:function(o,p,q){var r=qx.util.ResourceManager.getInstance().getImageHeight(p[4]);
o.clip={top:-p[6],height:q};
o.height=r+J;
if(o.top!=null){o.top=(parseInt(o.top,10)+p[6])+J;
}else if(o.bottom!=null){o.bottom=(parseInt(o.bottom,10)+q-r-p[6])+J;
}return o;
},__cX:function(k,l,m){var n=qx.util.ResourceManager.getInstance().getImageWidth(l[4]);
k.clip={left:-l[5],width:m};
k.width=n+J;
if(k.left!=null){k.left=(parseInt(k.left,10)+l[5])+J;
}else if(k.right!=null){k.right=(parseInt(k.right,10)+m-n-l[5])+J;
}return k;
},__cY:function(bK,bL,bM){var bR=qx.util.ResourceManager.getInstance().isClippedImage(bM);
var bQ=this.__cS(bM);
if(bR&&bL!==bd){var bP=qx.util.ResourceManager.getInstance().getData(bM);
var bO=qx.bom.element.Background.getStyles(bP[4],bL,bP[5],bP[6]);

for(var bN in bO){bK[bN]=bO[bN];
}
if(bQ.width!=null&&bK.width==null&&(bL==W||bL===C)){bK.width=bQ.width+J;
}
if(bQ.height!=null&&bK.height==null&&(bL==L||bL===C)){bK.height=bQ.height+J;
}return {style:bK};
}else{{};
bK=this.__cR(bK,bQ.width,bQ.height);
bK=this.__da(bK,bM,bL);
return {style:bK};
}},__da:function(a,b,c){var top=null;
var g=null;

if(a.backgroundPosition){var d=a.backgroundPosition.split(K);
g=parseInt(d[0]);

if(isNaN(g)){g=d[0];
}top=parseInt(d[1]);

if(isNaN(top)){top=d[1];
}}var f=qx.bom.element.Background.getStyles(b,c,g,top);

for(var e in f){a[e]=f[e];
}if(a.filter){a.filter=F;
}return a;
},__db:function(bJ){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bJ)&&bJ.indexOf(be)==-1){if(!this.__cN[bJ]){qx.log.Logger.debug("Potential clipped image candidate: "+bJ);
this.__cN[bJ]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(I,{"mshtml":function(){return qx.bom.element.Decoration.__cO;
},"default":function(){return false;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
qx.Class.define(f,{statics:{compile:function(o){if(!o){return k;
}var t=o.left;
var top=o.top;
var s=o.width;
var r=o.height;
var p,q;

if(t==null){p=(s==null?n:s+m);
t=n;
}else{p=(s==null?n:t+s+m);
t=t+m;
}
if(top==null){q=(r==null?n:r+m);
top=n;
}else{q=(r==null?n:top+r+m);
top=top+m;
}return d+top+l+p+l+q+l+t+i;
},get:function(u,v){var x=qx.bom.element.Style.get(u,c,v,false);
var C,top,A,z;
var w,y;

if(typeof x===e&&x!==n&&x!==h){x=qx.lang.String.trim(x);
if(/\((.*)\)/.test(x)){var B=RegExp.$1.split(l);
top=qx.lang.String.trim(B[0]);
w=qx.lang.String.trim(B[1]);
y=qx.lang.String.trim(B[2]);
C=qx.lang.String.trim(B[3]);
if(C===n){C=null;
}
if(top===n){top=null;
}
if(w===n){w=null;
}
if(y===n){y=null;
}if(top!=null){top=parseInt(top,10);
}
if(w!=null){w=parseInt(w,10);
}
if(y!=null){y=parseInt(y,10);
}
if(C!=null){C=parseInt(C,10);
}if(w!=null&&C!=null){A=w-C;
}else if(w!=null){A=w;
}
if(y!=null&&top!=null){z=y-top;
}else if(y!=null){z=y;
}}else{throw new Error("Could not parse clip string: "+x);
}}return {left:C||null,top:top||null,width:A||null,height:z||null};
},set:function(E,F){if(!F){E.style.clip=a;
return;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?n:J+m);
K=n;
}else{G=(J==null?n:K+J+m);
K=K+m;
}
if(top==null){H=(I==null?n:I+m);
top=n;
}else{H=(I==null?n:top+I+m);
top=top+m;
}E.style.clip=j+top+l+G+l+H+l+K+g;
},reset:function(D){D.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var m="n-resize",l="e-resize",k="nw-resize",j="ne-resize",i="",h="cursor:",g="qx.client",f=";",e="qx.bom.element.Cursor",d="cursor",c="hand";
qx.Class.define(e,{statics:{__dc:qx.core.Variant.select(g,{"mshtml":{"cursor":c,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"opera":{"col-resize":l,"row-resize":m,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"default":{}}),compile:function(q){return h+(this.__dc[q]||q)+f;
},get:function(a,b){return qx.bom.element.Style.get(a,d,b,false);
},set:function(n,o){n.style.cursor=this.__dc[o]||o;
},reset:function(p){p.style.cursor=i;
}}});
})();
(function(){var q="",p="qx.client",o=";",n="filter",m="opacity:",l="opacity",k="MozOpacity",j=");",i=")",h="zoom:1;filter:alpha(opacity=",e="qx.bom.element.Opacity",g="alpha(opacity=",f="-moz-opacity:";
qx.Class.define(e,{statics:{compile:qx.core.Variant.select(p,{"mshtml":function(a){if(a>=1){return q;
}
if(a<0.00001){a=0;
}return h+(a*100)+j;
},"gecko":function(v){if(v==1){v=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return f+v+o;
}else{return m+v+o;
}},"default":function(b){if(b==1){return q;
}return m+b+o;
}}),set:qx.core.Variant.select(p,{"mshtml":function(I,J){var K=qx.bom.element.Style.get(I,n,qx.bom.element.Style.COMPUTED_MODE,false);
if(J>=1){I.style.filter=K.replace(/alpha\([^\)]*\)/gi,q);
return;
}
if(J<0.00001){J=0;
}if(!I.currentStyle||!I.currentStyle.hasLayout){I.style.zoom=1;
}I.style.filter=K.replace(/alpha\([^\)]*\)/gi,q)+g+J*100+i;
},"gecko":function(D,E){if(E==1){E=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){D.style.MozOpacity=E;
}else{D.style.opacity=E;
}},"default":function(w,x){if(x==1){x=q;
}w.style.opacity=x;
}}),reset:qx.core.Variant.select(p,{"mshtml":function(c){var d=qx.bom.element.Style.get(c,n,qx.bom.element.Style.COMPUTED_MODE,false);
c.style.filter=d.replace(/alpha\([^\)]*\)/gi,q);
},"gecko":function(y){if(qx.bom.client.Engine.VERSION<1.7){y.style.MozOpacity=q;
}else{y.style.opacity=q;
}},"default":function(C){C.style.opacity=q;
}}),get:qx.core.Variant.select(p,{"mshtml":function(r,s){var t=qx.bom.element.Style.get(r,n,s,false);

if(t){var u=t.match(/alpha\(opacity=(.*)\)/);

if(u&&u[1]){return parseFloat(u[1])/100;
}}return 1.0;
},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,qx.bom.client.Engine.VERSION<1.7?k:l,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(z,A){var B=qx.bom.element.Style.get(z,l,A,false);

if(B!=null){return parseFloat(B);
}return 1.0;
}})}});
})();
(function(){var s="qx.client",r="",q="boxSizing",p="box-sizing",o=":",n="border-box",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="-moz-box-sizing",h="WebkitBoxSizing",e=";",g="-khtml-box-sizing",f="content-box",d="-webkit-box-sizing",c="MozBoxSizing";
qx.Class.define(m,{statics:{__dd:qx.core.Variant.select(s,{"mshtml":null,"webkit":[q,k,h],"gecko":[c],"opera":[q]}),__de:qx.core.Variant.select(s,{"mshtml":null,"webkit":[p,g,d],"gecko":[j],"opera":[p]}),__df:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dg:function(z){var A=this.__df;
return A.tags[z.tagName.toLowerCase()]||A.types[z.type];
},compile:qx.core.Variant.select(s,{"mshtml":function(a){{};
},"default":function(t){var v=this.__de;
var u=r;

if(v){for(var i=0,l=v.length;i<l;i++){u+=v[i]+o+t+e;
}}return u;
}}),get:qx.core.Variant.select(s,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__dg(D)){return f;
}}return n;
},"default":function(w){var y=this.__dd;
var x;

if(y){for(var i=0,l=y.length;i<l;i++){x=qx.bom.element.Style.get(w,y[i],null,false);

if(x!=null&&x!==r){return x;
}}}return r;
}}),set:qx.core.Variant.select(s,{"mshtml":function(B,C){{};
},"default":function(E,F){var G=this.__dd;

if(G){for(var i=0,l=G.length;i<l;i++){E.style[G[i]]=F;
}}}}),reset:function(b){this.set(b,r);
}}});
})();
(function(){var T="",S="qx.client",R="hidden",Q="-moz-scrollbars-none",P="overflow",O=";",N="overflowY",M=":",L="overflowX",K="overflow:",bg="none",bf="scroll",be="borderLeftStyle",bd="borderRightStyle",bc="div",bb="borderRightWidth",ba="overflow-y",Y="borderLeftWidth",X="-moz-scrollbars-vertical",W="100px",U="qx.bom.element.Overflow",V="overflow-x";
qx.Class.define(U,{statics:{__dh:null,getScrollbarWidth:function(){if(this.__dh!==null){return this.__dh;
}var bO=qx.bom.element.Style;
var bQ=function(bv,bw){return parseInt(bO.get(bv,bw))||0;
};
var bR=function(m){return (bO.get(m,bd)==bg?0:bQ(m,bb));
};
var bP=function(cf){return (bO.get(cf,be)==bg?0:bQ(cf,Y));
};
var bT=qx.core.Variant.select(S,{"mshtml":function(x){if(bO.get(x,N)==R||x.clientWidth==0){return bR(x);
}return Math.max(0,x.offsetWidth-x.clientLeft-x.clientWidth);
},"default":function(bB){if(bB.clientWidth==0){var bC=bO.get(bB,P);
var bD=(bC==bf||bC==X?16:0);
return Math.max(0,bR(bB)+bD);
}return Math.max(0,(bB.offsetWidth-bB.clientWidth-bP(bB)));
}});
var bS=function(C){return bT(C)-bR(C);
};
var t=document.createElement(bc);
var s=t.style;
s.height=s.width=W;
s.overflow=bf;
document.body.appendChild(t);
var c=bS(t);
this.__dh=c?c:16;
document.body.removeChild(t);
return this.__dh;
},_compile:qx.core.Variant.select(S,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(p,q){if(q==R){q=Q;
}return K+q+O;
}:
function(bz,bA){return bz+M+bA+O;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bL,bM){return K+bM+O;
}:
function(bY,ca){return bY+M+ca+O;
},"default":function(bo,bp){return bo+M+bp+O;
}}),compileX:function(bN){return this._compile(V,bN);
},compileY:function(D){return this._compile(ba,D);
},getX:qx.core.Variant.select(S,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(h,i){var j=qx.bom.element.Style.get(h,P,i,false);

if(j===Q){j=R;
}return j;
}:
function(G,H){return qx.bom.element.Style.get(G,L,H,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bW,bX){return qx.bom.element.Style.get(bW,P,bX,false);
}:
function(bm,bn){return qx.bom.element.Style.get(bm,L,bn,false);
},"default":function(cd,ce){return qx.bom.element.Style.get(cd,L,ce,false);
}}),setX:qx.core.Variant.select(S,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(I,J){if(J==R){J=Q;
}I.style.overflow=J;
}:
function(k,l){k.style.overflowX=l;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cb,cc){cb.style.overflow=cc;
}:
function(bk,bl){bk.style.overflowX=bl;
},"default":function(r,u){r.style.overflowX=u;
}}),resetX:qx.core.Variant.select(S,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bE){bE.style.overflow=T;
}:
function(bH){bH.style.overflowX=T;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(n,o){n.style.overflow=T;
}:
function(v,w){v.style.overflowX=T;
},"default":function(bI){bI.style.overflowX=T;
}}),getY:qx.core.Variant.select(S,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(z,A){var B=qx.bom.element.Style.get(z,P,A,false);

if(B===Q){B=R;
}return B;
}:
function(bq,br){return qx.bom.element.Style.get(bq,N,br,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bt,bu){return qx.bom.element.Style.get(bt,P,bu,false);
}:
function(bJ,bK){return qx.bom.element.Style.get(bJ,N,bK,false);
},"default":function(bx,by){return qx.bom.element.Style.get(bx,N,by,false);
}}),setY:qx.core.Variant.select(S,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bU,bV){if(bV===R){bV=Q;
}bU.style.overflow=bV;
}:
function(E,F){E.style.overflowY=F;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(f,g){f.style.overflow=g;
}:
function(d,e){d.style.overflowY=e;
},"default":function(a,b){a.style.overflowY=b;
}}),resetY:qx.core.Variant.select(S,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bs){bs.style.overflow=T;
}:
function(y){y.style.overflowY=T;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bi,bj){bi.style.overflow=T;
}:
function(bF,bG){bF.style.overflowY=T;
},"default":function(bh){bh.style.overflowY=T;
}})}});
})();
(function(){var D="",C="qx.client",B="user-select",A="userSelect",z="appearance",y="style",x="MozUserModify",w="px",v="-webkit-appearance",u="styleFloat",ba="-webkit-user-select",Y="-moz-appearance",X="pixelHeight",W="MozAppearance",V=":",U="pixelTop",T="pixelLeft",S="text-overflow",R="-moz-user-select",Q="MozUserSelect",K="qx.bom.element.Style",L="-moz-user-modify",I="-webkit-user-modify",J="WebkitUserSelect",G="-o-text-overflow",H="pixelRight",E="cssFloat",F="pixelWidth",M="pixelBottom",N=";",P="WebkitUserModify",O="WebkitAppearance";
qx.Class.define(K,{statics:{__di:{styleNames:{"float":qx.core.Variant.select(C,{"mshtml":u,"default":E}),"appearance":qx.core.Variant.select(C,{"gecko":W,"webkit":O,"default":z}),"userSelect":qx.core.Variant.select(C,{"gecko":Q,"webkit":J,"default":A}),"userModify":qx.core.Variant.select(C,{"gecko":x,"webkit":P,"default":A})},cssNames:{"appearance":qx.core.Variant.select(C,{"gecko":Y,"webkit":v,"default":z}),"userSelect":qx.core.Variant.select(C,{"gecko":R,"webkit":ba,"default":B}),"userModify":qx.core.Variant.select(C,{"gecko":L,"webkit":I,"default":B}),"textOverflow":qx.core.Variant.select(C,{"opera":G,"default":S})},mshtmlPixel:{width:F,height:X,left:T,right:H,top:U,bottom:M},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__dj:{},compile:function(b){var f=[];
var j=this.__di;
var i=j.special;
var g=j.cssNames;
var e=this.__dj;
var h=qx.lang.String;
var name,d,c;

for(name in b){c=b[name];

if(c==null){continue;
}name=g[name]||name;
if(i[name]){f.push(i[name].compile(c));
}else{d=e[name];

if(!d){d=e[name]=h.hyphenate(name);
}f.push(d,V,c,N);
}}return f.join(D);
},setCss:qx.core.Variant.select(C,{"mshtml":function(s,t){s.style.cssText=t;
},"default":function(bl,bm){bl.setAttribute(y,bm);
}}),getCss:qx.core.Variant.select(C,{"mshtml":function(a){return a.style.cssText.toLowerCase();
},"default":function(bb){return bb.getAttribute(y);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bn,name,bo,bp){{};
var bq=this.__di;
name=bq.styleNames[name]||name;
if(bp!==false&&bq.special[name]){return bq.special[name].set(bn,bo);
}else{bn.style[name]=bo!==null?bo:D;
}},setStyles:function(bc,bd,be){{};
var bk=this.__di;
var bh=bk.styleNames;
var bj=bk.special;
var bf=bc.style;

for(var bi in bd){var bg=bd[bi];
var name=bh[bi]||bi;

if(bg===undefined){if(be!==false&&bj[name]){bj[name].reset(bc);
}else{bf[name]=D;
}}else{if(be!==false&&bj[name]){bj[name].set(bc,bg);
}else{bf[name]=bg!==null?bg:D;
}}}},reset:function(br,name,bs){var bt=this.__di;
name=bt.styleNames[name]||name;
if(bs!==false&&bt.special[name]){return bt.special[name].reset(br);
}else{br.style[name]=D;
}},get:qx.core.Variant.select(C,{"mshtml":function(k,name,l,m){var r=this.__di;
name=r.styleNames[name]||name;
if(m!==false&&r.special[name]){return r.special[name].get(k,l);
}if(!k.currentStyle){return k.style[name]||D;
}switch(l){case this.LOCAL_MODE:return k.style[name]||D;
case this.CASCADED_MODE:return k.currentStyle[name]||D;
default:var q=k.currentStyle[name]||D;
if(/^-?[\.\d]+(px)?$/i.test(q)){return q;
}var p=r.mshtmlPixel[name];

if(p){var n=k.style[name];
k.style[name]=q||0;
var o=k.style[p]+w;
k.style[name]=n;
return o;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(q)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return q;
}},"default":function(bu,name,bv,bw){var bz=this.__di;
name=bz.styleNames[name]||name;
if(bw!==false&&bz.special[name]){return bz.special[name].get(bu,bv);
}switch(bv){case this.LOCAL_MODE:return bu.style[name]||D;
case this.CASCADED_MODE:if(bu.currentStyle){return bu.currentStyle[name]||D;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bx=qx.dom.Node.getDocument(bu);
var by=bx.defaultView.getComputedStyle(bu,null);
return by?by[name]:D;
}}})}});
})();
(function(){var m="CSS1Compat",l="position:absolute;width:0;height:0;width:1",k="qx.bom.Document",j="1px",i="qx.client",h="div";
qx.Class.define(k,{statics:{isQuirksMode:qx.core.Variant.select(i,{"mshtml":function(f){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (f||window).document.compatMode!==m;
}},"webkit":function(a){if(document.compatMode===undefined){var b=(a||window).document.createElement(h);
b.style.cssText=l;
return b.style.width===j?true:false;
}else{return (a||window).document.compatMode!==m;
}},"default":function(g){return (g||window).document.compatMode!==m;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(c){var d=(c||window).document;
var e=qx.bom.Viewport.getWidth(c);
var scroll=this.isStandardMode(c)?d.documentElement.scrollWidth:d.body.scrollWidth;
return Math.max(scroll,e);
},getHeight:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getHeight(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollHeight:o.body.scrollHeight;
return Math.max(scroll,p);
}}});
})();
(function(){var j="qx.client",i="qx.bom.Viewport";
qx.Class.define(i,{statics:{getWidth:qx.core.Variant.select(j,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"webkit":function(q){if(qx.bom.client.Engine.VERSION<523.15){return (q||window).innerWidth;
}else{var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}},"default":function(s){var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}}),getHeight:qx.core.Variant.select(j,{"opera":function(m){if(qx.bom.client.Engine.VERSION<9.5){return (m||window).document.body.clientHeight;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}},"webkit":function(g){if(qx.bom.client.Engine.VERSION<523.15){return (g||window).innerHeight;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;
}},"default":function(k){var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(j,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollLeft||p.body.scrollLeft;
},"default":function(a){return (a||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(j,{"mshtml":function(b){var c=(b||window).document;
return c.documentElement.scrollTop||c.body.scrollTop;
},"default":function(d){return (d||window).pageYOffset;
}})}});
})();
(function(){var c="CSS1Compat",b="qx.bom.client.Feature";
qx.Bootstrap.define(b,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__dk:function(){this.QUIRKS_MODE=this.__dl();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__dl:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==c;
}}},defer:function(a){a.__dk();
}});
})();
(function(){var k="/",j="mshtml",i="qx.client",h="",g="?",f="string",e="qx.util.ResourceManager",d="singleton",c="qx.isSource";
qx.Class.define(e,{extend:qx.core.Object,type:d,statics:{__dm:qx.$$resources||{},__dn:{}},members:{has:function(l){return !!arguments.callee.self.__dm[l];
},getData:function(m){return arguments.callee.self.__dm[m]||null;
},getImageWidth:function(z){var A=arguments.callee.self.__dm[z];
return A?A[0]:null;
},getImageHeight:function(a){var b=arguments.callee.self.__dm[a];
return b?b[1]:null;
},getImageFormat:function(B){var C=arguments.callee.self.__dm[B];
return C?C[2]:null;
},isClippedImage:function(t){var u=arguments.callee.self.__dm[t];
return u&&u.length>4;
},toUri:function(v){if(v==null){return v;
}var w=arguments.callee.self.__dm[v];

if(!w){return v;
}
if(typeof w===f){var y=w;
}else{var y=w[3];
if(!y){return v;
}}var x=h;

if(qx.core.Variant.isSet(i,j)&&qx.bom.client.Feature.SSL){x=arguments.callee.self.__dn[y];
}return x+qx.$$libraries[y].resourceUri+k+v;
}},defer:function(n){if(qx.core.Variant.isSet(i,j)){if(qx.bom.client.Feature.SSL){for(var r in qx.$$libraries){var p=qx.$$libraries[r].resourceUri;
if(p.match(/^\/\//)!=null){n.__dn[r]=window.location.protocol;
}else if(p.match(/^\.\//)!=null&&qx.core.Setting.get(c)){var o=document.URL;
n.__dn[r]=o.substring(0,o.lastIndexOf(k));
}else if(p.match(/^http/)!=null){}else{var s=window.location.href.indexOf(g);
var q;

if(s==-1){q=window.location.href;
}else{q=window.location.href.substring(0,s);
}n.__dn[r]=q.substring(0,q.lastIndexOf(k)+1);
}}}}}});
})();
(function(){var k="qx.client",j="load",h="qx.io.ImageLoader";
qx.Bootstrap.define(h,{statics:{__do:{},__dp:{width:null,height:null},__dq:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(B){var C=this.__do[B];
return !!(C&&C.loaded);
},isFailed:function(x){var y=this.__do[x];
return !!(y&&y.failed);
},isLoading:function(a){var b=this.__do[a];
return !!(b&&b.loading);
},getFormat:function(n){var o=this.__do[n];
return o?o.format:null;
},getSize:function(z){var A=this.__do[z];
return A?
{width:A.width,height:A.height}:this.__dp;
},getWidth:function(G){var H=this.__do[G];
return H?H.width:null;
},getHeight:function(D){var E=this.__do[D];
return E?E.height:null;
},load:function(q,r,s){var t=this.__do[q];

if(!t){t=this.__do[q]={};
}if(r&&!s){s=window;
}if(t.loaded||t.loading||t.failed){if(r){if(t.loading){t.callbacks.push(r,s);
}else{r.call(s,q,t);
}}}else{t.loading=true;
t.callbacks=[];

if(r){t.callbacks.push(r,s);
}var v=new Image();
var u=qx.lang.Function.listener(this.__dr,this,v,q);
v.onload=u;
v.onerror=u;
v.src=q;
}},__dr:qx.event.GlobalError.observeMethod(function(event,c,d){var e=this.__do[d];
if(event.type===j){e.loaded=true;
e.width=this.__ds(c);
e.height=this.__dt(c);
var f=this.__dq.exec(d);

if(f!=null){e.format=f[1];
}}else{e.failed=true;
}c.onload=c.onerror=null;
var g=e.callbacks;
delete e.loading;
delete e.callbacks;
for(var i=0,l=g.length;i<l;i+=2){g[i].call(g[i+1],d,e);
}}),__ds:qx.core.Variant.select(k,{"gecko":function(w){return w.naturalWidth;
},"default":function(m){return m.width;
}}),__dt:qx.core.Variant.select(k,{"gecko":function(p){return p.naturalHeight;
},"default":function(F){return F.height;
}})}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__du:[o,null,n,h,null,p,k,null,p],__dv:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__dw:function(F,top){var G=qx.bom.client.Engine;

if(G.GECKO&&G.VERSION<1.9&&F==top&&typeof F==s){top+=0.01;
}
if(F){var H=(typeof F==s)?F+q:F;
}else{H=r;
}
if(top){var I=(typeof top==s)?top+q:top;
}else{I=r;
}return H+j+I;
},compile:function(z,A,B,top){var C=this.__dw(B,top);
var D=qx.util.ResourceManager.getInstance().toUri(z);
var E=this.__du;
E[1]=D;
E[4]=C;
E[7]=A;
return E.join(m);
},getStyles:function(t,u,v,top){if(!t){return this.__dv;
}var w=this.__dw(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:i+x+l};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(a,b,c,d,top){var e=this.getStyles(b,c,d,top);

for(var f in e){a.style[f]=e[f];
}}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===b){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var T=",",S="rgb(",R=")",Q="qx.theme.manager.Color",P="qx.util.ColorUtil";
qx.Class.define(P,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(bh){return this.NAMED[bh]!==undefined;
},isSystemColor:function(d){return this.SYSTEM[d]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(Q);
},isThemedColor:function(J){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(J);
},stringToRgb:function(O){if(this.supportsThemes()&&this.isThemedColor(O)){var O=qx.theme.manager.Color.getInstance().resolveDynamic(O);
}
if(this.isNamedColor(O)){return this.NAMED[O];
}else if(this.isSystemColor(O)){throw new Error("Could not convert system colors to RGB: "+O);
}else if(this.isRgbString(O)){return this.__dx();
}else if(this.isHex3String(O)){return this.__dz();
}else if(this.isHex6String(O)){return this.__dA();
}throw new Error("Could not parse color: "+O);
},cssStringToRgb:function(s){if(this.isNamedColor(s)){return this.NAMED[s];
}else if(this.isSystemColor(s)){throw new Error("Could not convert system colors to RGB: "+s);
}else if(this.isRgbString(s)){return this.__dx();
}else if(this.isRgbaString(s)){return this.__dy();
}else if(this.isHex3String(s)){return this.__dz();
}else if(this.isHex6String(s)){return this.__dA();
}throw new Error("Could not parse color: "+s);
},stringToRgbString:function(l){return this.rgbToRgbString(this.stringToRgb(l));
},rgbToRgbString:function(I){return S+I[0]+T+I[1]+T+I[2]+R;
},rgbToHexString:function(A){return (qx.lang.String.pad(A[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(A[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(A[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(m){return this.isThemedColor(m)||this.isNamedColor(m)||this.isHex3String(m)||this.isHex6String(m)||this.isRgbString(m);
},isCssString:function(B){return this.isSystemColor(B)||this.isNamedColor(B)||this.isHex3String(B)||this.isHex6String(B)||this.isRgbString(B);
},isHex3String:function(a){return this.REGEXP.hex3.test(a);
},isHex6String:function(o){return this.REGEXP.hex6.test(o);
},isRgbString:function(bi){return this.REGEXP.rgb.test(bi);
},isRgbaString:function(e){return this.REGEXP.rgba.test(e);
},__dx:function(){var H=parseInt(RegExp.$1,10);
var G=parseInt(RegExp.$2,10);
var F=parseInt(RegExp.$3,10);
return [H,G,F];
},__dy:function(){var E=parseInt(RegExp.$1,10);
var D=parseInt(RegExp.$2,10);
var C=parseInt(RegExp.$3,10);
return [E,D,C];
},__dz:function(){var N=parseInt(RegExp.$1,16)*17;
var M=parseInt(RegExp.$2,16)*17;
var L=parseInt(RegExp.$3,16)*17;
return [N,M,L];
},__dA:function(){var k=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var j=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var h=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [k,j,h];
},hex3StringToRgb:function(n){if(this.isHex3String(n)){return this.__dz(n);
}throw new Error("Invalid hex3 value: "+n);
},hex6StringToRgb:function(c){if(this.isHex6String(c)){return this.__dA(c);
}throw new Error("Invalid hex6 value: "+c);
},hexStringToRgb:function(K){if(this.isHex3String(K)){return this.__dz(K);
}
if(this.isHex6String(K)){return this.__dA(K);
}throw new Error("Invalid hex value: "+K);
},rgbToHsb:function(U){var W,X,ba;
var bg=U[0];
var bd=U[1];
var V=U[2];
var bf=(bg>bd)?bg:bd;

if(V>bf){bf=V;
}var Y=(bg<bd)?bg:bd;

if(V<Y){Y=V;
}ba=bf/255.0;

if(bf!=0){X=(bf-Y)/bf;
}else{X=0;
}
if(X==0){W=0;
}else{var bc=(bf-bg)/(bf-Y);
var be=(bf-bd)/(bf-Y);
var bb=(bf-V)/(bf-Y);

if(bg==bf){W=bb-be;
}else if(bd==bf){W=2.0+bc-bb;
}else{W=4.0+be-bc;
}W=W/6.0;

if(W<0){W=W+1.0;
}}return [Math.round(W*360),Math.round(X*100),Math.round(ba*100)];
},hsbToRgb:function(u){var i,f,p,q,t;
var v=u[0]/360;
var w=u[1]/100;
var x=u[2]/100;

if(v>=1.0){v%=1.0;
}
if(w>1.0){w=1.0;
}
if(x>1.0){x=1.0;
}var y=Math.floor(255*x);
var z={};

if(w==0.0){z.red=z.green=z.blue=y;
}else{v*=6.0;
i=Math.floor(v);
f=v-i;
p=Math.floor(y*(1.0-w));
q=Math.floor(y*(1.0-(w*f)));
t=Math.floor(y*(1.0-(w*(1.0-f))));

switch(i){case 0:z.red=y;
z.green=t;
z.blue=p;
break;
case 1:z.red=q;
z.green=y;
z.blue=p;
break;
case 2:z.red=p;
z.green=y;
z.blue=t;
break;
case 3:z.red=p;
z.green=q;
z.blue=y;
break;
case 4:z.red=t;
z.green=p;
z.blue=y;
break;
case 5:z.red=y;
z.green=p;
z.blue=q;
break;
}}return [z.red,z.green,z.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var m="qx.event.handler.Window";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){arguments.callee.base.call(this);
this._manager=u;
this._window=u.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(h,i){},registerEvent:function(c,d,f){},unregisterEvent:function(j,k,l){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var b=qx.event.handler.Window.SUPPORTED_TYPES;

for(var a in b){qx.bom.Event.addNativeListener(this._window,a,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=e.target||e.srcElement;

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var h="ready",g="qx.application",f="beforeunload",d="qx.core.Init",c="shutdown";
qx.Class.define(d,{statics:{getApplication:function(){return this.__dC||null;
},__dB:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var j=qx.core.Setting.get(g);
var k=qx.Class.getByName(j);

if(k){this.__dC=new k;
var i=new Date;
this.__dC.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-i)+"ms");
var i=new Date;
this.__dC.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-i)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+j);
}},__dD:function(e){var b=this.__dC;

if(b){e.setReturnValue(b.close());
}},__dE:function(){var l=this.__dC;

if(l){l.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,h,a.__dB,a);
qx.event.Registration.addListener(window,c,a.__dE,a);
qx.event.Registration.addListener(window,f,a.__dD,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var h="qx.locale.MTranslation";
qx.Mixin.define(h,{members:{tr:function(a,b){var c=qx.locale.Manager;

if(c){return c.tr.apply(c,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(i,j,k,l){var m=qx.locale.Manager;

if(m){return m.trn.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(d,e,f){var g=qx.locale.Manager;

if(g){return g.trc.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dF:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__dF;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__dF=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__dF=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var v="_objectsWindow",u="changeValue",t="console",s="_propertyWindow",r="_consoleWindow",q="_widgetsWindow",p="_consoleButton",o="execute",n="_objectsButton",m="Height",bs="property",br="widgets",bq="url",bp="Open",bo="Top",bn="_widgetsButton",bm="objects",bl="Width",bk="_propertyButton",bj="Left",C="resize",D="_reloadButton",A="_urlTextField",B="true",y="Inspect widget",z="_inspectButton",w="index.html",x="myToolbar",G="<tt>",H="</tt>",P=" Can not access the javascript in the iframe!",N="Properties",X="load",S="_selector",bf="changeSelection",bd="_container",J="middle",bi="..",bh="",bg="qooxdoo Inspector",I="Lucida Grande",L="close",M="inspector.Application",O="Widgets",Q="_selectedWidgetLabel",T="_toolbar",ba="_iFrame",be="icon/22/actions/edit-find.png",E="toolbar-button-bold",F="Console",K="inspector/css/propertylisthtml.css",W="move",V="inspector/css/domview.css",U="inspector/css/consoleview.css",bc="hidden",bb="inspector/css/sourceview.css",R="Objects",Y="icon/16/actions/view-refresh.png",l="minimized";
qx.Class.define(M,{extend:qx.application.Standalone,construct:function(){arguments.callee.base.call(this);
qx.bom.Stylesheet.includeFile(V);
qx.bom.Stylesheet.includeFile(U);
qx.bom.Stylesheet.includeFile(bb);
qx.bom.Stylesheet.includeFile(K);
},members:{__dG:null,_toolbar:null,_objectsButton:null,_widgetsButton:null,_consoleButton:null,_propertyButton:null,_inspectButton:null,_selectedWidgetLabel:null,_urlTextField:null,_reloadButton:null,_objectsWindow:null,_widgetsWindow:null,_consoleWindow:null,_propertyWindow:null,_container:null,_iFrame:null,_loading:null,_selector:null,_loadedWindow:null,main:function(){arguments.callee.base.call(this);
{};
this._container=new qx.ui.container.Composite(new qx.ui.layout.VBox());
this.getRoot().add(this._container,{edge:0});
this.__dN();
this.__dQ(false);
var bB=bi;
var bA=qx.bom.Cookie.get(bq);

if(bA==undefined||bA==bh){bA=bB;
}
if(window.qxinspector!=undefined&&qxinspector.local){this._urlTextField.setVisibility(bc);
bB=w;
}else{bB=bA;
}this._loading=true;
this._iFrame=new qx.ui.embed.Iframe(bB);
this._iFrame.setDecorator(null);
this._container.add(this._iFrame,{flex:1});
this._iFrame.addListener(X,this.__dH,this);
this._urlTextField.setValue(bB);
},__dH:function(){this.__dG=0;
this.__dI();
var bM=this._iFrame.getSource();

try{bM=this._iFrame.getWindow().location.pathname;
}catch(bz){}
if(window.qxinspector==undefined){this._urlTextField.setValue(bM);
}qx.bom.Cookie.set(bq,bM,7);
},__dI:function(){this._loadedWindow=this._iFrame.getContentElement().getWindow();
this.__dQ(false);
if(!this.__dM()){return;
}this.__dQ(true);
if(!this._selector){this._selector=new inspector.components.Selector(this._loadedWindow);
}else{this._selector.setJSWindow(this._loadedWindow);
}this._selector.addListener(bf,this._changeSelection,this);
this._selector.setSelection(this._loadedWindow.qx.core.Init.getApplication());
this._loading=false;
this.__dJ();
this.select(this._loadedWindow.qx.core.Init.getApplication().getRoot());
this.__dL();
},__dJ:function(){if(this._objectsWindow!=null&&this._objectsWindow.isVisible()){this._objectsWindow.load(this._loadedWindow);
}if(this._widgetsWindow!=null&&this._widgetsWindow.isVisible()){this._widgetsWindow.load(this._loadedWindow);
}},__dK:function(bF,bG,name){var bJ=qx.bom.Cookie.get(name+bp);

if(bJ==B||bJ===null){bG.setValue(true);
var top=parseInt(qx.bom.Cookie.get(name+bo));
var bK=parseInt(qx.bom.Cookie.get(name+bj));

if(!isNaN(top)&&!isNaN(bK)){this[bF].moveTo(bK,top);
}var bH=parseInt(qx.bom.Cookie.get(name+bl));
var bI=parseInt(qx.bom.Cookie.get(name+m));

if(!isNaN(bI)){this[bF].setHeight(bI);
}
if(!isNaN(bH)){this[bF].setWidth(bH);
}}},__dL:function(){this.__dK(v,this._objectsButton,bm);
this.__dK(q,this._widgetsButton,br);
this.__dK(r,this._consoleButton,t);
this.__dK(s,this._propertyButton,bs);
},__dM:function(){try{this.__dG++;
if(this.__dG>20){throw new Error("qooxdoo not found!");
}
try{this._loadedWindow.qx.core.Init.getApplication().getRoot();
return true;
}catch(bv){qx.event.Timer.once(this.__dI,this,500);
throw new Error("qooxdoo isn't ready at the moment!");
}}catch(bw){this._selectedWidgetLabel.setValue(P);
return false;
}},__dN:function(){this._toolbar=new qx.ui.toolbar.ToolBar();
this._toolbar.setDecorator(x);
this._toolbar._getLayout().setAlignY(J);
this._container.add(this._toolbar);
var bP=new qx.ui.basic.Label(bg);
bP.setPaddingLeft(10);
bP.setPaddingRight(5);
var bO=new qx.bom.Font(12,[I]);
bO.setBold(true);
bO.setItalic(true);
bP.setFont(bO);
this._toolbar.add(bP);
this._toolbar.add(new qx.ui.toolbar.Separator());
this.__dO(n,R,v,inspector.objects.ObjectsWindow,bm,function(){if(this._loadedWindow!=null){this._objectsWindow.load(this._loadedWindow);
}});
this.__dO(bn,O,q,inspector.widgets.WidgetsWindow,br,function(){this._widgetsWindow.load();
});
this.__dO(bk,N,s,inspector.property.PropertyWindow,bs,function(){this._propertyWindow.select(this._selector.getSelection());
});
this.__dO(p,F,r,inspector.console.ConsoleWindow,t,function(){});
this._toolbar.add(new qx.ui.toolbar.Separator());
this._inspectButton=new qx.ui.toolbar.CheckBox(y,be);
this._inspectButton.setAppearance(E);
this._toolbar.add(this._inspectButton);
this._inspectButton.addListener(u,function(e){if(e.getData()){this._selector.start();
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
this._urlTextField.addListener(u,this._reloadIframe,this);
this._reloadButton=new qx.ui.toolbar.Button(null,Y);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(o,this._reloadIframe,this);
},_reloadIframe:function(e){this._loading=true;
var bC=this._iFrame.getSource();

try{bC=this._iFrame.getWindow().location.pathname;
}catch(bN){}
if(bC!=this._urlTextField.getValue()){this._iFrame.setSource(this._urlTextField.getValue());
}else{if(e.getType()==o){if(this._iFrame.getSource!=bC){this._iFrame.setSource(bC);
}else{this._iFrame.reload();
}}}},__dO:function(a,b,c,d,name,f){this[a]=new qx.ui.toolbar.CheckBox(b);
this._toolbar.add(this[a]);
var g=false;
this[a].addListener(u,function(e){if(!g){this[c]=new d();
this.getRoot().add(this[c]);
this[c].setInitSizeAndPosition();
this.__dP(this[c],this[a],name);
}e.getData()?this[c].open():this[c].close();
f.call(this);
g=true;
qx.bom.Cookie.set(name+bp,e.getData(),7);
},this);
},__dP:function(bD,bE,name){bD.addListener(L,function(){bE.setValue(false);
},this);
bD.addListener(W,function(e){qx.bom.Cookie.set(name+bj,e.getData().left,7);
qx.bom.Cookie.set(name+bo,e.getData().top,7);
},this);
bD.addListener(C,function(e){qx.bom.Cookie.set(name+bl,e.getData().width,7);
qx.bom.Cookie.set(name+m,e.getData().height,7);
},this);
},__dQ:function(bL){this._objectsButton.setEnabled(bL);
this._widgetsButton.setEnabled(bL);
this._consoleButton.setEnabled(bL);
this._propertyButton.setEnabled(bL);
this._inspectButton.setEnabled(bL);
this._selectedWidgetLabel.setEnabled(bL);
},_changeSelection:function(e){this._inspectButton.setValue(false);
this.select(e.getData(),this._selector);
},getSelectedObject:function(){return this._selector.getSelection();
},setWidgetByHash:function(i,j){if(j==t){j=this._consoleWindow;
this._consoleWindow.goToDefaultView();
}var k=this._loadedWindow.qx.core.ObjectRegistry.fromHashCode(i);
this.select(k,j);
},inspectObjectByDomSelecet:function(bt,bu){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByDomSelecet(bt,bu);
}},inspectObjectByInternalId:function(h){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByInternalId(h);
}},select:function(bx,by){if(this._loading||!bx){return;
}this._selectedWidgetLabel.setValue(G+bx.toString()+H);

if(by!=this._selector){if(bx!==this._selector.getSelection()){this._selector.setSelection(bx);
}}
if(this._objectsWindow!=null&&by!=this._objectsWindow){if(bx!=this._objectsWindow.getSelection()){this._objectsWindow.select(bx,true);
}}
if(this._widgetsWindow!=null&&by!=this._widgetsWindow){if(bx!=this._widgetsWindow.getSelection()){this._widgetsWindow.select(bx,true);
}}
if(this._propertyWindow!=null&&by!=this._propertyWindow){if(bx!=this._propertyWindow.getSelection()&&this._propertyWindow.getMode()!=l){this._propertyWindow.select(bx,true);
}}this._selector.highlightFor(bx,1000);
},getIframeWindowObject:function(){return this._loadedWindow;
},getExcludes:function(){return this._selector.getAddedWidgets();
}},destruct:function(){this._loadedWindow=null;
this._disposeObjects(bd,T,n,bn,bk,p,z,Q,A,D,ba,S,v,q,r,s);
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
(function(){var r="_applyTheme",q="qx.theme",p="qx.theme.manager.Meta",o="qx.theme.Modern",n="Theme",m="singleton";
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
(function(){var o="object",n="_applyTheme",m="__dR",l="qx.theme.manager.Decoration",k="Theme",j="string",i="singleton";
qx.Class.define(l,{type:i,extend:qx.core.Object,properties:{theme:{check:k,nullable:true,apply:n}},members:{__dR:null,resolve:function(a){if(!a){return null;
}
if(typeof a===o){return a;
}var d=this.getTheme();

if(!d){return null;
}var d=this.getTheme();

if(!d){return null;
}var e=this.__dR;

if(!e){e=this.__dR={};
}var b=e[a];

if(b){return b;
}var c=d.decorations[a];

if(!c){return null;
}var f=c.decorator;

if(f==null){throw new Error("Missing definition of which decorator to use in entry: "+a+"!");
}return e[a]=(new f).set(c.style);
},isValidPropertyValue:function(g){if(typeof g===j){return this.isDynamic(g);
}else if(typeof g===o){var h=g.constructor;
return qx.Class.hasInterface(h,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(p){if(!p){return false;
}var q=this.getTheme();

if(!q){return false;
}return !!q.decorations[p];
},_applyTheme:function(r,s){var u=qx.util.AliasManager.getInstance();

if(s){for(var t in s.aliases){u.remove(t);
}}
if(r){for(var t in r.aliases){u.add(t,r.aliases[t]);
}}
if(!r){this.__dR={};
}}},destruct:function(){this._disposeMap(m);
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(i){var j=this._dynamic;
return i instanceof qx.bom.Font?i:j[i];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.fonts[k]);
}return k;
},isDynamic:function(f){var h=this._dynamic;

if(f&&(f instanceof qx.bom.Font||h[f]!==undefined)){return true;
}var g=this.getTheme();

if(g!==null&&f&&g.fonts[f]){h[f]=(new qx.bom.Font).set(g.fonts[f]);
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
(function(){var q="",p="underline",o="Boolean",n="px",m='"',k="italic",j="normal",h="bold",g="_applyItalic",f="_applyBold",C="Integer",B="_applyFamily",A="_applyLineHeight",z="Array",y="overline",x="line-through",w="qx.bom.Font",v="Number",u="_applyDecoration",t=" ",r="_applySize",s=",";
qx.Class.define(w,{extend:qx.core.Object,construct:function(I,J){arguments.callee.base.call(this);

if(I!==undefined){this.setSize(I);
}
if(J!==undefined){this.setFamily(J);
}},statics:{fromString:function(D){var H=new qx.bom.Font();
var F=D.split(/\s+/);
var name=[];
var G;

for(var i=0;i<F.length;i++){switch(G=F[i]){case h:H.setBold(true);
break;
case k:H.setItalic(true);
break;
case p:H.setDecoration(p);
break;
default:var E=parseInt(G,10);

if(E==G||qx.lang.String.contains(G,n)){H.setSize(E);
}else{name.push(G);
}break;
}}
if(name.length>0){H.setFamily(name);
}return H;
},fromConfig:function(K){var L=new qx.bom.Font;
L.set(K);
return L;
},__dS:{fontFamily:q,fontSize:q,fontWeight:q,fontStyle:q,textDecoration:q,lineHeight:1.2},getDefaultStyles:function(){return this.__dS;
}},properties:{size:{check:C,nullable:true,apply:r},lineHeight:{check:v,nullable:true,apply:A},family:{check:z,nullable:true,apply:B},bold:{check:o,nullable:true,apply:f},italic:{check:o,nullable:true,apply:g},decoration:{check:[p,x,y],nullable:true,apply:u}},members:{__dT:null,__dU:null,__dV:null,__dW:null,__dX:null,__dY:null,_applySize:function(Q,R){this.__dT=Q===null?null:Q+n;
},_applyLineHeight:function(O,P){this.__dY=O===null?null:O;
},_applyFamily:function(c,d){var e=q;

for(var i=0,l=c.length;i<l;i++){if(c[i].indexOf(t)>0){e+=m+c[i]+m;
}else{e+=c[i];
}
if(i!==l-1){e+=s;
}}this.__dU=e;
},_applyBold:function(a,b){this.__dV=a===null?null:a?h:j;
},_applyItalic:function(S,T){this.__dW=S===null?null:S?k:j;
},_applyDecoration:function(M,N){this.__dX=M===null?null:M;
},getStyles:function(){return {fontFamily:this.__dU,fontSize:this.__dT,fontWeight:this.__dV,fontStyle:this.__dW,textDecoration:this.__dX,lineHeight:this.__dY};
}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var J="string",I="_applyTheme",H="qx.theme.manager.Appearance",G=":",F="Theme",E="changeTheme",D="/",C="singleton";
qx.Class.define(H,{type:C,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ea={};
this.__eb={};
},properties:{theme:{check:F,nullable:true,event:E,apply:I}},members:{__ec:{},__ea:null,__eb:null,_applyTheme:function(K,L){this.__eb={};
this.__ea={};
},__ed:function(a,b,c){var g=b.appearances;
var j=g[a];

if(!j){var k=D;
var d=[];
var i=a.split(k);
var h;

while(!j&&i.length>0){d.unshift(i.pop());
var e=i.join(k);
j=g[e];

if(j){h=j.alias||j;

if(typeof h===J){var f=h+k+d.join(k);
return this.__ed(f,b,c);
}}}if(c!=null){return this.__ed(c,b);
}return null;
}else if(typeof j===J){return this.__ed(j,b,c);
}else if(j.include&&!j.style){return this.__ed(j.include,b,c);
}return a;
},styleFrom:function(l,m,n,o){if(!n){n=this.getTheme();
}var u=this.__eb;
var p=u[l];

if(!p){p=u[l]=this.__ed(l,n,o);
}var z=n.appearances[p];

if(!z){this.warn("Missing appearance: "+l);
return null;
}if(!z.style){return null;
}var A=p;

if(m){var B=z.$$bits;

if(!B){B=z.$$bits={};
z.$$length=0;
}var s=0;

for(var v in m){if(!m[v]){continue;
}
if(B[v]==null){B[v]=1<<z.$$length++;
}s+=B[v];
}if(s>0){A+=G+s;
}}var t=this.__ea;

if(t[A]!==undefined){return t[A];
}if(!m){m=this.__ec;
}var x;
if(z.include||z.base){var r=z.style(m);
var q;

if(z.include){q=this.styleFrom(z.include,m,n,o);
}x={};
if(z.base){var w=this.styleFrom(p,m,z.base,o);

if(z.include){for(var y in w){if(!q.hasOwnProperty(y)&&!r.hasOwnProperty(y)){x[y]=w[y];
}}}else{for(var y in w){if(!r.hasOwnProperty(y)){x[y]=w[y];
}}}}if(z.include){for(var y in q){if(!r.hasOwnProperty(y)){x[y]=q[y];
}}}for(var y in r){x[y]=r[y];
}}else{x=z.style(m);
}return t[A]=x||null;
}},destruct:function(){this.__ea=this.__eb=null;
}});
})();
(function(){var u="focusout",t="interval",s="mouseover",r="mouseout",q="mousemove",p="widget",o="__ef",n="qx.ui.tooltip.ToolTip",m="Boolean",l="__eh",i="_applyCurrent",k="__ee",j="qx.ui.tooltip.Manager",h="tooltip-error",g="singleton";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,s,this.__eo,this,true);
this.__ee=new qx.event.Timer();
this.__ee.addListener(t,this.__el,this);
this.__ef=new qx.event.Timer();
this.__ef.addListener(t,this.__em,this);
this.__eg={left:0,top:0};
},properties:{current:{check:n,nullable:true,apply:i},showInvalidTooltips:{check:m,init:true}},members:{__eg:null,__ef:null,__ee:null,__eh:null,__ei:null,__ej:function(){if(!this.__eh){this.__eh=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__eh;
},__ek:function(){if(!this.__ei){this.__ei=new qx.ui.tooltip.ToolTip().set({appearance:h});
this.__ei.syncAppearance();
}return this.__ei;
},_applyCurrent:function(w,x){if(x&&qx.ui.core.Widget.contains(x,w)){return;
}if(x){if(!x.isDisposed()){x.exclude();
}this.__ee.stop();
this.__ef.stop();
}var z=qx.event.Registration;
var y=document.body;
if(w){this.__ee.startWith(w.getShowTimeout());
z.addListener(y,r,this.__ep,this,true);
z.addListener(y,u,this.__eq,this,true);
z.addListener(y,q,this.__en,this,true);
}else{z.removeListener(y,r,this.__ep,this,true);
z.removeListener(y,u,this.__eq,this,true);
z.removeListener(y,q,this.__en,this,true);
}},__el:function(e){var f=this.getCurrent();

if(f&&!f.isDisposed()){this.__ef.startWith(f.getHideTimeout());

if(f.getPlaceMethod()==p){f.placeToWidget(f.getOpener());
}else{f.placeToPoint(this.__eg);
}f.show();
}this.__ee.stop();
},__em:function(e){var d=this.getCurrent();

if(d&&!d.isDisposed()){d.exclude();
}this.__ef.stop();
this.resetCurrent();
},__en:function(e){var v=this.__eg;
v.left=e.getDocumentLeft();
v.top=e.getDocumentTop();
},__eo:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
}
if(E.isBlockToolTip()){return;
}if(C&&E.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var F=this.__ek().set({label:C});
}else if(!F){var F=this.__ej().set({label:G,icon:D});
}this.setCurrent(F);
F.setOpener(E);
},__ep:function(e){var a=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!a){return;
}var b=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!b){return;
}var c=this.getCurrent();
if(c&&(b==c||qx.ui.core.Widget.contains(c,b))){return;
}if(b&&a&&qx.ui.core.Widget.contains(a,b)){return;
}if(c&&!b){this.setCurrent(null);
}else{this.resetCurrent();
}},__eq:function(e){var A=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!A){return;
}var B=this.getCurrent();
if(B&&B==A.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,s,this.__eo,this,true);
this._disposeObjects(k,o,l);
this.__eg=null;
}});
})();
(function(){var l="interval",k="qx.event.Timer",j="_applyInterval",i="_applyEnabled",h="Boolean",g="qx.event.type.Event",f="Integer";
qx.Class.define(k,{extend:qx.core.Object,construct:function(d){arguments.callee.base.call(this);
this.setEnabled(false);

if(d!=null){this.setInterval(d);
}var self=this;
this.__er=function(){self._oninterval.call(self);
};
},events:{"interval":g},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.addListener(l,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:h,apply:i},interval:{check:f,init:1000,apply:j}},members:{__es:null,__er:null,_applyInterval:function(b,c){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(m,n){if(n){window.clearInterval(this.__es);
this.__es=null;
}else if(m){this.__es=window.setInterval(this.__er,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(a){this.setInterval(a);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(l);
}})},destruct:function(){if(this.__es){window.clearInterval(this.__es);
}this.__es=this.__er=null;
}});
})();
(function(){var e="qx.ui.core.MChildrenHandling";
qx.Mixin.define(e,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(f){return this._indexOf(f);
},add:function(c,d){this._add(c,d);
},addAt:function(n,o,p){this._addAt(n,o,p);
},addBefore:function(j,k,l){this._addBefore(j,k,l);
},addAfter:function(g,h,i){this._addAfter(g,h,i);
},remove:function(a){this._remove(a);
},removeAt:function(b){return this._removeAt(b);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(m){m.getChildren=m._getChildren;
m.hasChildren=m._hasChildren;
m.indexOf=m._indexOf;
m.add=m._add;
m.addAt=m._addAt;
m.addBefore=m._addBefore;
m.addAfter=m._addAfter;
m.remove=m._remove;
m.removeAt=m._removeAt;
m.removeAll=m._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__et:null,__eu:null,__ev:null,__ew:null,__ex:null,__ey:null,__ez:null,getBounds:function(){return this.__ey||this.__eu||null;
},clearSeparators:function(){},renderSeparator:function(T,U){},renderLayout:function(E,top,F,G){var H;
{};
var I=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var I=this._getHeightForWidth(F);
}
if(I!=null&&I!==this.__et){this.__et=I;
qx.ui.core.queue.Layout.add(this);
return null;
}var K=this.__eu;

if(!K){K=this.__eu={};
}var J={};

if(E!==K.left||top!==K.top){J.position=true;
K.left=E;
K.top=top;
}
if(F!==K.width||G!==K.height){J.size=true;
K.width=F;
K.height=G;
}if(this.__ev){J.local=true;
delete this.__ev;
}
if(this.__ex){J.margin=true;
delete this.__ex;
}return J;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__ev;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__ev=true;
this.__ew=null;
},getSizeHint:function(L){var M=this.__ew;

if(M){return M;
}
if(L===false){return null;
}M=this.__ew=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__et&&this.getHeight()==null){M.height=this.__et;
}if(M.minWidth>M.width){M.width=M.minWidth;
}
if(M.maxWidth<M.width){M.width=M.maxWidth;
}
if(!this.getAllowGrowX()){M.maxWidth=M.width;
}
if(!this.getAllowShrinkX()){M.minWidth=M.width;
}if(M.minHeight>M.height){M.height=M.minHeight;
}
if(M.maxHeight<M.height){M.height=M.maxHeight;
}
if(!this.getAllowGrowY()){M.maxHeight=M.height;
}
if(!this.getAllowShrinkY()){M.minHeight=M.height;
}return M;
},_computeSizeHint:function(){var R=this.getMinWidth()||0;
var O=this.getMinHeight()||0;
var S=this.getWidth()||R;
var Q=this.getHeight()||O;
var N=this.getMaxWidth()||Infinity;
var P=this.getMaxHeight()||Infinity;
return {minWidth:R,width:S,maxWidth:N,minHeight:O,height:Q,maxHeight:P};
},_hasHeightForWidth:function(){var ba=this._getLayout();

if(ba){return ba.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(X){var Y=this._getLayout();

if(Y&&Y.hasHeightForWidth()){return Y.getHeightForWidth(X);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__ex=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__ey;
},setUserBounds:function(bb,top,bc,bd){this.__ey={left:bb,top:top,width:bc,height:bd};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__ey;
qx.ui.core.queue.Layout.add(this);
},__eA:{},setLayoutProperties:function(y){if(y==null){return;
}var z=this.__ez;

if(!z){z=this.__ez={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(y);
}for(var A in y){if(y[A]==null){delete z[A];
}else{z[A]=y[A];
}}},getLayoutProperties:function(){return this.__ez||this.__eA;
},clearLayoutProperties:function(){delete this.__ez;
},updateLayoutProperties:function(B){var C=this._getLayout();

if(C){var D;
{};
C.invalidateChildrenCache();
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
},clone:function(){var V=arguments.callee.base.call(this);
var W=this.__ez;

if(W){V.__ez=qx.lang.Object.clone(W);
}return V;
}},destruct:function(){this.$$parent=this.$$subparent=this.__ez=this.__eu=this.__ey=this.__ew=null;
}});
})();
(function(){var h="qx.ui.core.DecoratorFactory",g="$$nopool$$";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__eB={};
},statics:{MAX_SIZE:15,__eC:g},members:{__eB:null,getDecoratorElement:function(i){var n=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(i)){var l=i;
var k=qx.theme.manager.Decoration.getInstance().resolve(i);
}else{var l=n.__eC;
k=i;
}var m=this.__eB;

if(m[l]&&m[l].length>0){var j=m[l].pop();
}else{var j=this._createDecoratorElement(k,l);
}j.$$pooled=false;
return j;
},poolDecorator:function(a){if(!a||a.$$pooled){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__eC){a.dispose();
return;
}var c=this.__eB;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(o,p){var q=new qx.html.Decorator(o,p);
{};
return q;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var f=this.__eB;

for(var e in f){qx.util.DisposeUtil.disposeArray(f,e);
}}this.__eB=null;
}});
})();
(function(){var dB="px",dA="Boolean",dz="qx.event.type.Mouse",dy="qx.event.type.Drag",dx="visible",dw="qx.event.type.Focus",dv="on",du="Integer",dt="excluded",ds="qx.event.type.Data",dd="_applyPadding",dc="qx.event.type.Event",db="hidden",da="contextmenu",cY="String",cX="tabIndex",cW="backgroundColor",cV="focused",cU="changeVisibility",cT="mshtml",dI="hovered",dJ="qx.event.type.KeySequence",dG="qx.client",dH="absolute",dE="drag",dF="div",dC="disabled",dD="move",dK="dragstart",dL="qx.dynlocale",dk="dragchange",dj="dragend",dm="resize",dl="Decorator",dp="zIndex",dn="$$widget",dr="opacity",dq="default",di="Color",dh="changeToolTipText",bK="beforeContextmenuOpen",bL="_applyNativeContextMenu",bM="_applyBackgroundColor",bN="_applyFocusable",bO="changeShadow",bP="__eD",bQ="qx.event.type.KeyInput",bR="__eO",bS="createChildControl",bT="__eJ",dP="Font",dO="__eQ",dN="_applyShadow",dM="_applyEnabled",dT="_applySelectable",dS="Number",dR="_applyKeepActive",dQ="_applyVisibility",dV="__eI",dU="repeat",ct="qxDraggable",cu="syncAppearance",cr="paddingLeft",cs="_applyDroppable",cx="#",cy="qx.event.type.MouseWheel",cv="_applyCursor",cw="_applyDraggable",cp="__eH",cq="changeTextColor",cc="changeContextMenu",cb="paddingTop",ce="changeSelectable",cd="hideFocus",bX="none",bW="outline",ca="_applyAppearance",bY="_applyOpacity",bV="url(",bU=")",cD="qx.ui.core.Widget",cE="_applyFont",cF="cursor",cG="qxDroppable",cz="changeZIndex",cA="changeEnabled",cB="changeFont",cC="_applyDecorator",cH="_applyZIndex",cI="_applyTextColor",cm="qx.ui.menu.Menu",cl="_applyToolTipText",ck="true",cj="widget",ci="changeDecorator",ch="__eM",cg="_applyTabIndex",cf="changeAppearance",co="shorthand",cn="/",cJ="",cK="_applyContextMenu",cL="paddingBottom",cM="changeNativeContextMenu",cN="qx.ui.tooltip.ToolTip",cO="qxKeepActive",cP="_applyKeepFocus",cQ="__eE",cR="paddingRight",cS="changeBackgroundColor",dg="changeLocale",df="qxKeepFocus",de="qx/static/blank.gif";
qx.Class.define(cD,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__eD=this._createContainerElement();
this.__eE=this.__eP();
this.__eD.add(this.__eE);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dc,disappear:dc,createChildControl:ds,resize:ds,move:ds,syncAppearance:ds,mousemove:dz,mouseover:dz,mouseout:dz,mousedown:dz,mouseup:dz,click:dz,dblclick:dz,contextmenu:dz,beforeContextmenuOpen:dz,mousewheel:cy,keyup:dJ,keydown:dJ,keypress:dJ,keyinput:bQ,focus:dw,blur:dw,focusin:dw,focusout:dw,activate:dw,deactivate:dw,capture:dc,losecapture:dc,drop:dy,dragleave:dy,dragover:dy,drag:dy,dragstart:dy,dragend:dy,dragchange:dy,droprequest:dy},properties:{paddingTop:{check:du,init:0,apply:dd,themeable:true},paddingRight:{check:du,init:0,apply:dd,themeable:true},paddingBottom:{check:du,init:0,apply:dd,themeable:true},paddingLeft:{check:du,init:0,apply:dd,themeable:true},padding:{group:[cb,cR,cL,cr],mode:co,themeable:true},zIndex:{nullable:true,init:null,apply:cH,event:cz,check:du,themeable:true},decorator:{nullable:true,init:null,apply:cC,event:ci,check:dl,themeable:true},shadow:{nullable:true,init:null,apply:dN,event:bO,check:dl,themeable:true},backgroundColor:{nullable:true,check:di,apply:bM,event:cS,themeable:true},textColor:{nullable:true,check:di,apply:cI,event:cq,themeable:true,inheritable:true},font:{nullable:true,apply:cE,check:dP,event:cB,themeable:true,inheritable:true,dispose:true},opacity:{check:dS,apply:bY,themeable:true,nullable:true,init:null},cursor:{check:cY,apply:cv,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:cN,nullable:true},toolTipText:{check:cY,nullable:true,event:dh,apply:cl},toolTipIcon:{check:cY,nullable:true,event:dh},blockToolTip:{check:dA,init:false},visibility:{check:[dx,db,dt],init:dx,apply:dQ,event:cU},enabled:{init:true,check:dA,inheritable:true,apply:dM,event:cA},anonymous:{init:false,check:dA},tabIndex:{check:du,nullable:true,apply:cg},focusable:{check:dA,init:false,apply:bN},keepFocus:{check:dA,init:false,apply:cP},keepActive:{check:dA,init:false,apply:dR},draggable:{check:dA,init:false,apply:cw},droppable:{check:dA,init:false,apply:cs},selectable:{check:dA,init:false,event:ce,apply:dT},contextMenu:{check:cm,apply:cK,nullable:true,event:cc},nativeContextMenu:{check:dA,init:false,themeable:true,event:cM,apply:bL},appearance:{check:cY,init:cj,apply:ca,event:cf}},statics:{DEBUG:false,getWidgetByElement:function(er){while(er){var es=er.$$widget;
if(es!=null){return qx.core.ObjectRegistry.fromHashCode(es);
}er=er.parentNode;
}return null;
},contains:function(parent,W){while(W){if(parent==W){return true;
}W=W.getLayoutParent();
}return false;
},__eF:new qx.ui.core.DecoratorFactory(),__eG:new qx.ui.core.DecoratorFactory()},members:{__eD:null,__eE:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,_getLayout:function(){return this.__eM;
},_setLayout:function(gT){{};

if(this.__eM){this.__eM.connectToWidget(null);
}
if(gT){gT.connectToWidget(this);
}this.__eM=gT;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var eB=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(eB);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(eB);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__eN:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var M=qx.theme.manager.Decoration.getInstance();
var O=M.resolve(a).getInsets();
var N=M.resolve(b).getInsets();

if(O.top!=N.top||O.right!=N.right||O.bottom!=N.bottom||O.left!=N.left){return true;
}return false;
},renderLayout:function(fC,top,fD,fE){var fN=arguments.callee.base.call(this,fC,top,fD,fE);
if(!fN){return;
}var fG=this.getContainerElement();
var content=this.getContentElement();
var fK=fN.size||this._updateInsets;
var fO=dB;
var fL={};
if(fN.position){fL.left=fC+fO;
fL.top=top+fO;
}if(fN.size){fL.width=fD+fO;
fL.height=fE+fO;
}
if(fN.position||fN.size){fG.setStyles(fL);
}
if(fK||fN.local||fN.margin){var fF=this.getInsets();
var innerWidth=fD-fF.left-fF.right;
var innerHeight=fE-fF.top-fF.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var fI={};

if(this._updateInsets){fI.left=fF.left+fO;
fI.top=fF.top+fO;
}
if(fK){fI.width=innerWidth+fO;
fI.height=innerHeight+fO;
}
if(fK||this._updateInsets){content.setStyles(fI);
}
if(fN.size){var fM=this.__eJ;

if(fM){fM.setStyles({width:fD+dB,height:fE+dB});
}}
if(fN.size||this._updateInsets){if(this.__eH){this.__eH.resize(fD,fE);
}}
if(fN.size){if(this.__eI){var fF=this.__eI.getInsets();
var fJ=fD+fF.left+fF.right;
var fH=fE+fF.top+fF.bottom;
this.__eI.resize(fJ,fH);
}}
if(fK||fN.local||fN.margin){if(this.__eM&&this.hasLayoutChildren()){this.__eM.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fN.position&&this.hasListener(dD)){this.fireDataEvent(dD,this.getBounds());
}
if(fN.size&&this.hasListener(dm)){this.fireDataEvent(dm,this.getBounds());
}delete this._updateInsets;
return fN;
},__eO:null,clearSeparators:function(){var u=this.__eO;

if(!u){return;
}var v=qx.ui.core.Widget.__eF;
var content=this.getContentElement();
var t;

for(var i=0,l=u.length;i<l;i++){t=u[i];
v.poolDecorator(t);
content.remove(t);
}u.length=0;
},renderSeparator:function(eV,eW){var eX=qx.ui.core.Widget.__eF.getDecoratorElement(eV);
this.getContentElement().add(eX);
eX.resize(eW.width,eW.height);
eX.setStyles({left:eW.left+dB,top:eW.top+dB});
if(!this.__eO){this.__eO=[eX];
}else{this.__eO.push(eX);
}},_computeSizeHint:function(){var F=this.getWidth();
var E=this.getMinWidth();
var A=this.getMaxWidth();
var D=this.getHeight();
var B=this.getMinHeight();
var C=this.getMaxHeight();
{};
var G=this._getContentHint();
var z=this.getInsets();
var I=z.left+z.right;
var H=z.top+z.bottom;

if(F==null){F=G.width+I;
}
if(D==null){D=G.height+H;
}
if(E==null){E=I;

if(G.minWidth!=null){E+=G.minWidth;
}}
if(B==null){B=H;

if(G.minHeight!=null){B+=G.minHeight;
}}
if(A==null){if(G.maxWidth==null){A=Infinity;
}else{A=G.maxWidth+I;
}}
if(C==null){if(G.maxHeight==null){C=Infinity;
}else{C=G.maxHeight+H;
}}return {width:F,minWidth:E,maxWidth:A,height:D,minHeight:B,maxHeight:C};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__eM){this.__eM.invalidateLayoutCache();
}},_getContentHint:function(){var R=this.__eM;

if(R){if(this.hasLayoutChildren()){var Q;
var S=R.getSizeHint();
{};
return S;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(ei){var en=this.getInsets();
var eq=en.left+en.right;
var ep=en.top+en.bottom;
var eo=ei-eq;
var ek=this._getLayout();

if(ek&&ek.hasHeightForWidth()){var ej=ek.getHeightForWidth(ei);
}else{ej=this._getContentHeightForWidth(eo);
}var em=ej+ep;
return em;
},_getContentHeightForWidth:function(gC){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var n=this.getPaddingRight();
var p=this.getPaddingBottom();
var o=this.getPaddingLeft();

if(this.__eH){var m=this.__eH.getInsets();
{};
top+=m.top;
n+=m.right;
p+=m.bottom;
o+=m.left;
}return {"top":top,"right":n,"bottom":p,"left":o};
},getInnerSize:function(){var fr=this.getBounds();

if(!fr){return null;
}var fq=this.getInsets();
return {width:fr.width-fq.left-fq.right,height:fr.height-fq.top-fq.bottom};
},show:function(){this.setVisibility(dx);
},hide:function(){this.setVisibility(db);
},exclude:function(){this.setVisibility(dt);
},isVisible:function(){return this.getVisibility()===dx;
},isHidden:function(){return this.getVisibility()!==dx;
},isExcluded:function(){return this.getVisibility()===dt;
},isSeeable:function(){var fc=this.getContainerElement().getDomElement();

if(fc){return fc.offsetWidth>0;
}var fb=this;

do{if(!fb.isVisible()){return false;
}
if(fb.isRootWidget()){return true;
}fb=fb.getLayoutParent();
}while(fb);
return false;
},_createContainerElement:function(){var gk=new qx.html.Element(dF);
{};
gk.setStyles({"position":dH,"zIndex":0});
gk.setAttribute(dn,this.toHashCode());
{};
return gk;
},__eP:function(){var bG=this._createContentElement();
{};
bG.setStyles({"position":dH,"zIndex":10});
return bG;
},_createContentElement:function(){var dW=new qx.html.Element(dF);
dW.setStyles({"overflowX":db,"overflowY":db});
return dW;
},getContainerElement:function(){return this.__eD;
},getContentElement:function(){return this.__eE;
},getDecoratorElement:function(){return this.__eH||null;
},getShadowElement:function(){return this.__eI||null;
},__eQ:null,getLayoutChildren:function(){var x=this.__eQ;

if(!x){return this.__eR;
}var y;

for(var i=0,l=x.length;i<l;i++){var w=x[i];

if(w.hasUserBounds()||w.isExcluded()){if(y==null){y=x.concat();
}qx.lang.Array.remove(y,w);
}}return y||x;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var X=this.__eM;

if(X){X.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var ee=this.__eQ;

if(!ee){return false;
}var ef;

for(var i=0,l=ee.length;i<l;i++){ef=ee[i];

if(!ef.hasUserBounds()&&!ef.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eR:[],_getChildren:function(){return this.__eQ||this.__eR;
},_indexOf:function(ec){var ed=this.__eQ;

if(!ed){return -1;
}return ed.indexOf(ec);
},_hasChildren:function(){var eP=this.__eQ;
return eP!=null&&(!!eP[0]);
},addChildrenToQueue:function(J){var K=this.__eQ;

if(!K){return;
}var L;

for(var i=0,l=K.length;i<l;i++){L=K[i];
J[L.$$hash]=L;
L.addChildrenToQueue(J);
}},_add:function(eY,fa){if(eY.getLayoutParent()==this){qx.lang.Array.remove(this.__eQ,eY);
}
if(this.__eQ){this.__eQ.push(eY);
}else{this.__eQ=[eY];
}this.__eS(eY,fa);
},_addAt:function(eI,eJ,eK){if(!this.__eQ){this.__eQ=[];
}if(eI.getLayoutParent()==this){qx.lang.Array.remove(this.__eQ,eI);
}var eL=this.__eQ[eJ];

if(eL===eI){return eI.setLayoutProperties(eK);
}
if(eL){qx.lang.Array.insertBefore(this.__eQ,eI,eL);
}else{this.__eQ.push(eI);
}this.__eS(eI,eK);
},_addBefore:function(eQ,eR,eS){{};

if(eQ==eR){return;
}
if(!this.__eQ){this.__eQ=[];
}if(eQ.getLayoutParent()==this){qx.lang.Array.remove(this.__eQ,eQ);
}qx.lang.Array.insertBefore(this.__eQ,eQ,eR);
this.__eS(eQ,eS);
},_addAfter:function(q,r,s){{};

if(q==r){return;
}
if(!this.__eQ){this.__eQ=[];
}if(q.getLayoutParent()==this){qx.lang.Array.remove(this.__eQ,q);
}qx.lang.Array.insertAfter(this.__eQ,q,r);
this.__eS(q,s);
},_remove:function(gj){if(!this.__eQ){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__eQ,gj);
this.__eT(gj);
},_removeAt:function(ge){if(!this.__eQ){throw new Error("This widget has no children!");
}var gf=this.__eQ[ge];
qx.lang.Array.removeAt(this.__eQ,ge);
this.__eT(gf);
return gf;
},_removeAll:function(){if(!this.__eQ){return;
}var ey=this.__eQ.concat();
this.__eQ.length=0;

for(var i=ey.length-1;i>=0;i--){this.__eT(ey[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eS:function(gx,gy){{};
var parent=gx.getLayoutParent();

if(parent&&parent!=this){parent._remove(gx);
}gx.setLayoutParent(this);
if(gy){gx.setLayoutProperties(gy);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gx);
}},__eT:function(dX){{};

if(dX.getLayoutParent()!==this){throw new Error("Remove Error: "+dX+" is not a child of this widget!");
}dX.setLayoutParent(null);
if(this.__eM){this.__eM.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(dX);
}},capture:function(fS){this.getContainerElement().capture(fS);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(gU,gV,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__eJ){return;
}var Y=this.__eJ=new qx.html.Element;
{};
Y.setStyles({position:dH,top:0,left:0,zIndex:7});
var ba=this.getBounds();

if(ba){this.__eJ.setStyles({width:ba.width+dB,height:ba.height+dB});
}if(qx.core.Variant.isSet(dG,cT)){Y.setStyles({backgroundImage:bV+qx.util.ResourceManager.getInstance().toUri(de)+bU,backgroundRepeat:dU});
}this.getContainerElement().add(Y);
},_applyDecorator:function(bp,bq){{};
var bu=qx.ui.core.Widget.__eF;
var bs=this.getContainerElement();
if(!this.__eJ&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(bq){bs.remove(this.__eH);
bu.poolDecorator(this.__eH);
}if(bp){var bt=this.__eH=bu.getDecoratorElement(bp);
bt.setStyle(dp,5);
var br=this.getBackgroundColor();
bt.tint(br);
bs.add(bt);
}else{delete this.__eH;
this._applyBackgroundColor(this.getBackgroundColor());
}if(bp&&!bq&&br){this.getContainerElement().setStyle(cW,null);
}if(this.__eN(bq,bp)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(bp){var bv=this.getBounds();

if(bv){bt.resize(bv.width,bv.height);
this.__eJ&&
this.__eJ.setStyles({width:bv.width+dB,height:bv.height+dB});
}}},_applyShadow:function(go,gp){var gw=qx.ui.core.Widget.__eG;
var gr=this.getContainerElement();
if(gp){gr.remove(this.__eI);
gw.poolDecorator(this.__eI);
}if(go){var gt=this.__eI=gw.getDecoratorElement(go);
gr.add(gt);
var gv=gt.getInsets();
gt.setStyles({left:(-gv.left)+dB,top:(-gv.top)+dB});
var gu=this.getBounds();

if(gu){var gs=gu.width+gv.left+gv.right;
var gq=gu.height+gv.top+gv.bottom;
gt.resize(gs,gq);
}gt.tint(null);
}else{delete this.__eI;
}},_applyToolTipText:function(fz,fA){if(qx.core.Variant.isSet(dL,dv)){if(this.__eL){return;
}var fB=qx.locale.Manager.getInstance();
this.__eL=fB.addListener(dg,function(){if(fz&&fz.translate){this.setToolTipText(fz.translate());
}},this);
}},_applyTextColor:function(gF,gG){},_applyZIndex:function(fP,fQ){this.getContainerElement().setStyle(dp,fP==null?0:fP);
},_applyVisibility:function(gz,gA){var gB=this.getContainerElement();

if(gz===dx){gB.show();
}else{gB.hide();
}var parent=this.$$parent;

if(parent&&(gA==null||gz==null||gA===dt||gz===dt)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eM,eN){this.getContainerElement().setStyle(dr,eM==1?null:eM);
if(qx.core.Variant.isSet(dG,cT)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eO=(eM==1||eM==null)?null:0.99;
this.getContentElement().setStyle(dr,eO);
}}},_applyCursor:function(fj,fk){if(fj==null&&!this.isSelectable()){fj=dq;
}this.getContainerElement().setStyle(cF,fj,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(bw,bx){var by=this.getBackgroundColor();
var bA=this.getContainerElement();

if(this.__eH){this.__eH.tint(by);
bA.setStyle(cW,null);
}else{var bz=qx.theme.manager.Color.getInstance().resolve(by);
bA.setStyle(cW,bz);
}},_applyFont:function(gh,gi){},__eU:null,$$stateChanges:null,_forwardStates:null,hasState:function(ew){var ex=this.__eU;
return ex&&ex[ew];
},addState:function(fs){var ft=this.__eU;

if(!ft){ft=this.__eU={};
}
if(ft[fs]){return;
}this.__eU[fs]=true;
if(fs===dI){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fw=this.__eX;

if(forward&&forward[fs]&&fw){var fu;

for(var fv in fw){fu=fw[fv];

if(fu instanceof qx.ui.core.Widget){fw[fv].addState(fs);
}}}},removeState:function(c){var d=this.__eU;

if(!d||!d[c]){return;
}delete this.__eU[c];
if(c===dI){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var h=this.__eX;

if(forward&&forward[c]&&h){for(var g in h){var f=h[g];

if(f instanceof qx.ui.core.Widget){f.removeState(c);
}}}},replaceState:function(bj,bk){var bl=this.__eU;

if(!bl){bl=this.__eU={};
}
if(!bl[bk]){bl[bk]=true;
}
if(bl[bj]){delete bl[bj];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bo=this.__eX;

if(forward&&forward[bk]&&bo){for(var bn in bo){var bm=bo[bn];

if(bm instanceof qx.ui.core.Widget){bm.replaceState(bj,bk);
}}}},__eV:null,__eW:null,syncAppearance:function(){var gN=this.__eU;
var gM=this.__eV;
var gO=qx.theme.manager.Appearance.getInstance();
var gK=qx.core.Property.$$method.setThemed;
var gS=qx.core.Property.$$method.resetThemed;
if(this.__eW){delete this.__eW;
if(gM){var gJ=gO.styleFrom(gM,gN,null,this.getAppearance());
if(gJ){gM=null;
}}}if(!gM){var gL=this;
var gR=[];

do{gR.push(gL.$$subcontrol||gL.getAppearance());
}while(gL=gL.$$subparent);
gM=this.__eV=gR.reverse().join(cn).replace(/#[0-9]+/g,cJ);
}var gP=gO.styleFrom(gM,gN,null,this.getAppearance());

if(gP){var gQ;

if(gJ){for(var gQ in gJ){if(gP[gQ]===undefined){this[gS[gQ]]();
}}}{};
for(var gQ in gP){gP[gQ]===undefined?this[gS[gQ]]():this[gK[gQ]](gP[gQ]);
}}else if(gJ){for(var gQ in gJ){this[gS[gQ]]();
}}this.fireDataEvent(cu,this.__eU);
},_applyAppearance:function(fX,fY){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__eK){qx.ui.core.queue.Appearance.add(this);
this.__eK=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__eW=true;
qx.ui.core.queue.Appearance.add(this);
var gn=this.__eX;

if(gn){var gl;

for(var gm in gn){gl=gn[gm];

if(gl instanceof qx.ui.core.Widget){gl.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fR=this;

while(fR.getAnonymous()){fR=fR.getLayoutParent();

if(!fR){return null;
}}return fR;
},getFocusTarget:function(){var et=this;

if(!et.getEnabled()){return null;
}
while(et.getAnonymous()||!et.getFocusable()){et=et.getLayoutParent();

if(!et||!et.getEnabled()){return null;
}}return et;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(ga,gb){var gc=this.getFocusElement();
if(ga){var gd=this.getTabIndex();

if(gd==null){gd=1;
}gc.setAttribute(cX,gd);
if(qx.core.Variant.isSet(dG,cT)){gc.setAttribute(cd,ck);
}else{gc.setStyle(bW,bX);
}}else{if(gc.isNativelyFocusable()){gc.setAttribute(cX,-1);
}else if(gb){gc.setAttribute(cX,null);
}}},_applyKeepFocus:function(fh){var fi=this.getFocusElement();
fi.setAttribute(df,fh?dv:null);
},_applyKeepActive:function(ez){var eA=this.getContainerElement();
eA.setAttribute(cO,ez?dv:null);
},_applyTabIndex:function(bb){if(bb==null){bb=1;
}else if(bb<1||bb>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bb!=null){this.getFocusElement().setAttribute(cX,bb);
}},_applySelectable:function(dY){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(dY);
this.getContentElement().setSelectable(dY);
},_applyEnabled:function(j,k){if(j===false){this.addState(dC);
this.removeState(dI);
if(this.isFocusable()){this.removeState(cV);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(dC);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(eT,eU,name){},_applyContextMenu:function(fx,fy){if(fy){fy.removeState(da);

if(fy.getOpener()==this){fy.resetOpener();
}
if(!fx){this.removeListener(da,this._onContextMenuOpen);
fy.removeListener(cU,this._onBeforeContextMenuOpen,this);
}}
if(fx){fx.setOpener(this);
fx.addState(da);

if(!fy){this.addListener(da,this._onContextMenuOpen);
fx.addListener(cU,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==dx&&this.hasListener(bK)){this.fireDataEvent(bK,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(fV,fW){if(!this.isEnabled()&&fV===true){fV=false;
}qx.ui.core.DragDropCursor.getInstance();
if(fV){this.addListener(dK,this._onDragStart);
this.addListener(dE,this._onDrag);
this.addListener(dj,this._onDragEnd);
this.addListener(dk,this._onDragChange);
}else{this.removeListener(dK,this._onDragStart);
this.removeListener(dE,this._onDrag);
this.removeListener(dj,this._onDragEnd);
this.removeListener(dk,this._onDragChange);
}this.getContainerElement().setAttribute(ct,fV?dv:null);
},_applyDroppable:function(eu,ev){if(!this.isEnabled()&&eu===true){eu=false;
}this.getContainerElement().setAttribute(cG,eu?dv:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(dq);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bc=qx.ui.core.DragDropCursor.getInstance();
var bd=e.getCurrentAction();
bd?bc.setAction(bd):bc.resetAction();
},visualizeFocus:function(){this.addState(cV);
},visualizeBlur:function(){this.removeState(cV);
},scrollChildIntoView:function(bB,bC,bD,bE){this.scrollChildIntoViewX(bB,bC,bE);
this.scrollChildIntoViewY(bB,bD,bE);
},scrollChildIntoViewX:function(bH,bI,bJ){this.getContentElement().scrollChildIntoViewX(bH.getContainerElement(),bI,bJ);
},scrollChildIntoViewY:function(T,U,V){this.getContentElement().scrollChildIntoViewY(T.getContainerElement(),U,V);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(P){if(!this.__eX){return false;
}return !!this.__eX[P];
},__eX:null,_getCreatedChildControls:function(){return this.__eX;
},getChildControl:function(be,bf){if(!this.__eX){if(bf){return null;
}this.__eX={};
}var bg=this.__eX[be];

if(bg){return bg;
}
if(bf===true){return null;
}return this._createChildControl(be);
},_showChildControl:function(ff){var fg=this.getChildControl(ff);
fg.show();
return fg;
},_excludeChildControl:function(gH){var gI=this.getChildControl(gH,true);

if(gI){gI.exclude();
}},_isChildControlVisible:function(eG){var eH=this.getChildControl(eG,true);

if(eH){return eH.isVisible();
}return false;
},_createChildControl:function(fl){if(!this.__eX){this.__eX={};
}else if(this.__eX[fl]){throw new Error("Child control '"+fl+"' already created!");
}var fp=fl.indexOf(cx);

if(fp==-1){var fm=this._createChildControlImpl(fl);
}else{var fm=this._createChildControlImpl(fl.substring(0,fp));
}
if(!fm){throw new Error("Unsupported control: "+fl);
}fm.$$subcontrol=fl;
fm.$$subparent=this;
var fn=this.__eU;
var forward=this._forwardStates;

if(fn&&forward&&fm instanceof qx.ui.core.Widget){for(var fo in fn){if(forward[fo]){fm.addState(fo);
}}}this.fireDataEvent(bS,fm);
return this.__eX[fl]=fm;
},_createChildControlImpl:function(gg){return null;
},_disposeChildControls:function(){var eF=this.__eX;

if(!eF){return;
}var eD=qx.ui.core.Widget;

for(var eE in eF){var eC=eF[eE];

if(!eD.contains(this,eC)){eC.destroy();
}else{eC.dispose();
}}delete this.__eX;
},_findTopControl:function(){var bF=this;

while(bF){if(!bF.$$subparent){return bF;
}bF=bF.$$subparent;
}return null;
},getContainerLocation:function(fT){var fU=this.getContainerElement().getDomElement();
return fU?qx.bom.element.Location.get(fU,fT):null;
},getContentLocation:function(ea){var eb=this.getContentElement().getDomElement();
return eb?qx.bom.element.Location.get(eb,ea):null;
},setDomLeft:function(eg){var eh=this.getContainerElement().getDomElement();

if(eh){eh.style.left=eg+dB;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(fd){var fe=this.getContainerElement().getDomElement();

if(fe){fe.style.top=fd+dB;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(bh,top){var bi=this.getContainerElement().getDomElement();

if(bi){bi.style.left=bh+dB;
bi.style.top=top+dB;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var gD=arguments.callee.base.call(this);

if(this.getChildren){var gE=this.getChildren();

for(var i=0,l=gE.length;i<l;i++){gD.add(gE[i].clone());
}}return gD;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(dL,dv)){if(this.__eL){qx.locale.Manager.getInstance().removeListenerById(this.__eL);
}}this.getContainerElement().setAttribute(dn,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var gX=qx.ui.core.Widget;
var gW=this.getContainerElement();

if(this.__eH){gW.remove(this.__eH);
gX.__eF.poolDecorator(this.__eH);
}
if(this.__eI){gW.remove(this.__eI);
gX.__eG.poolDecorator(this.__eI);
}this.clearSeparators();
this.__eH=this.__eI=this.__eO=null;
}else{this._disposeArray(bR);
this._disposeObjects(cp,dV);
}this._disposeArray(dO);
this.__eU=this.__eX=null;
this._disposeObjects(ch,bP,cQ,bT);
}});
})();
(function(){var g="qx.event.type.Data",f="qx.ui.container.Composite",e="addChildWidget",d="removeChildWidget";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(b){arguments.callee.base.call(this);

if(b!=null){this._setLayout(b);
}},events:{addChildWidget:g,removeChildWidget:g},members:{_afterAddChild:function(a){this.fireNonBubblingEvent(e,qx.event.type.Data,[a]);
},_afterRemoveChild:function(c){this.fireNonBubblingEvent(d,qx.event.type.Data,[c]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var v="keep-align",u="interval",t="Integer",s="direct",r="best-fit",q="mouse",p="bottom-left",o="disappear",n="Boolean",m="bottom-right",J="widget",I="qx.ui.core.MPlacement",H="left-top",G="offsetRight",F="shorthand",E="offsetLeft",D="top-left",C="appear",B="offsetBottom",A="top-right",y="offsetTop",z="right-bottom",w="right-top",x="left-bottom";
qx.Mixin.define(I,{properties:{position:{check:[D,A,p,m,H,x,w,z],init:p,themeable:true},placeMethod:{check:[J,q],init:q,themeable:true},domMove:{check:n,init:false},placementModeX:{check:[s,v,r],init:v,themeable:true},placementModeY:{check:[s,v,r],init:v,themeable:true},offsetLeft:{check:t,init:0,themeable:true},offsetTop:{check:t,init:0,themeable:true},offsetRight:{check:t,init:0,themeable:true},offsetBottom:{check:t,init:0,themeable:true},offset:{group:[y,G,B,E],mode:F,themeable:true}},members:{__eY:null,getLayoutLocation:function(a){var d,c,e,top;
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
},moveTo:function(L,top){if(this.getDomMove()){this.setDomPosition(L,top);
}else{this.setLayoutProperties({left:L,top:top});
}},placeToWidget:function(T,U){if(U){this.__eY=qx.lang.Function.bind(this.placeToWidget,this,T,false);
qx.event.Idle.getInstance().addListener(u,this.__eY);
this.addListener(o,function(){if(this.__eY){qx.event.Idle.getInstance().removeListener(u,this.__eY);
this.__eY=null;
}},this);
}var V=T.getContainerLocation()||this.getLayoutLocation(T);
this.__fb(V);
},placeToMouse:function(event){var N=event.getDocumentLeft();
var top=event.getDocumentTop();
var M={left:N,top:top,right:N,bottom:top};
this.__fb(M);
},placeToElement:function(O,P){var location=qx.bom.element.Location.get(O);
var Q={left:location.left,top:location.top,right:location.left+O.offsetWidth,bottom:location.top+O.offsetHeight};
if(P){this.__eY=qx.lang.Function.bind(this.placeToElement,this,O,false);
qx.event.Idle.getInstance().addListener(u,this.__eY);
this.addListener(o,function(){if(this.__eY){qx.event.Idle.getInstance().removeListener(u,this.__eY);
this.__eY=null;
}},this);
}this.__fb(Q);
},placeToPoint:function(R){var S={left:R.left,top:R.top,right:R.left,bottom:R.top};
this.__fb(S);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__fa:function(i){var j=null;

if(this._computePlacementSize){var j=this._computePlacementSize();
}else if(this.isVisible()){var j=this.getBounds();
}
if(j==null){this.addListenerOnce(C,function(){this.__fa(i);
},this);
}else{i.call(this,j);
}},__fb:function(K){this.__fa(function(g){var h=qx.util.placement.Placement.compute(g,this.getLayoutParent().getBounds(),K,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(h.left,h.top);
});
},setSmart:function(W){{};
var X=W?v:s;
this.set({placementModeX:X,placementModeY:X});
},getSmart:function(){{};
var k=this.getPlacementModeX()==v?true:false;
var l=this.getPlacementModeY()==v?true:false;
return k&&l;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__eY){qx.event.Idle.getInstance().removeListener(u,this.__eY);
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
(function(){var n="atom",m="Integer",l="String",k="_applyRich",j="qx.ui.tooltip.ToolTip",i="_applyIcon",h="tooltip",g="qx.ui.core.Widget",f="mouseover",d="Boolean",c="_applyLabel";
qx.Class.define(j,{extend:qx.ui.popup.Popup,construct:function(x,y){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(n);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(f,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:h},showTimeout:{check:m,init:700,themeable:true},hideTimeout:{check:m,init:4000,themeable:true},label:{check:l,nullable:true,apply:c},icon:{check:l,nullable:true,apply:i,themeable:true},rich:{check:d,init:false,apply:k},opener:{check:g,nullable:true}},members:{_createChildControlImpl:function(a){var b;

switch(a){case n:b=new qx.ui.basic.Atom;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(n);
u==null?w.resetIcon:w.setIcon(u);
},_applyLabel:function(o,p){var q=this.getChildControl(n);
o==null?q.resetLabel():q.setLabel(o);
},_applyRich:function(r,s){var t=this.getChildControl(n);
t.setRich(r);
}}});
})();
(function(){var q="qx.ui.core.queue.Layout",p="layout";
qx.Class.define(q,{statics:{__fc:{},remove:function(v){delete this.__fc[v.$$hash];
},add:function(A){this.__fc[A.$$hash]=A;
qx.ui.core.queue.Manager.scheduleFlush(p);
},flush:function(){var w=this.__ff();
for(var i=w.length-1;i>=0;i--){var x=w[i];
if(x.hasValidLayout()){continue;
}if(x.isRootWidget()&&!x.hasUserBounds()){var z=x.getSizeHint();
x.renderLayout(0,0,z.width,z.height);
}else{var y=x.getBounds();
x.renderLayout(y.left,y.top,y.width,y.height);
}}},getNestingLevel:function(r){var s=this.__fe;
var u=0;
var parent=r;
while(true){if(s[parent.$$hash]!=null){u+=s[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
u+=1;
}var t=u;

while(r&&r!==parent){s[r.$$hash]=t--;
r=r.$$parent;
}return u;
},__fd:function(){var f=qx.ui.core.queue.Visibility;
this.__fe={};
var e=[];
var d=this.__fc;
var a,c;

for(var b in d){a=d[b];

if(f.isVisible(a)){c=this.getNestingLevel(a);
if(!e[c]){e[c]={};
}e[c][b]=a;
delete d[b];
}}return e;
},__ff:function(){var k=[];
var m=this.__fd();

for(var j=m.length-1;j>=0;j--){if(!m[j]){continue;
}
for(var h in m[j]){var g=m[j][h];
if(j==0||g.isRootWidget()||g.hasUserBounds()){k.push(g);
g.invalidateLayoutCache();
continue;
}var o=g.getSizeHint(false);

if(o){g.invalidateLayoutCache();
var l=g.getSizeHint();
var n=(!g.getBounds()||o.minWidth!==l.minWidth||o.width!==l.width||o.maxWidth!==l.maxWidth||o.minHeight!==l.minHeight||o.height!==l.height||o.maxHeight!==l.maxHeight);
}else{n=true;
}
if(n){var parent=g.getLayoutParent();

if(!m[j-1]){m[j-1]={};
}m[j-1][parent.$$hash]=parent;
}else{k.push(g);
}}}return k;
}}});
})();
(function(){var d="qx.event.handler.UserAction";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__fg=k;
this.__fh=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fg:null,__fh:null,canHandleEvent:function(a,b){},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},destruct:function(){this.__fg=this.__fh=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fi={};
this.__fj=qx.lang.Function.bind(this.__fn,this);
this.__fk=false;
},members:{__fl:null,__fm:null,__fi:null,__fk:null,__fj:null,schedule:function(c){if(this.__fl==null){this.__fl=window.setTimeout(this.__fj,0);
}var d=c.toHashCode();
if(this.__fm&&this.__fm[d]){return;
}this.__fi[d]=c;
this.__fk=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__fm&&this.__fm[f]){this.__fm[f]=null;
return;
}delete this.__fi[f];
if(qx.lang.Object.isEmpty(this.__fi)&&this.__fl!=null){window.clearTimeout(this.__fl);
this.__fl=null;
}},__fn:qx.event.GlobalError.observeMethod(function(){this.__fl=null;
while(this.__fk){this.__fm=qx.lang.Object.clone(this.__fi);
this.__fi={};
this.__fk=false;

for(var h in this.__fm){var g=this.__fm[h];

if(g){this.__fm[h]=null;
g.call();
}}}this.__fm=null;
})},destruct:function(){if(this.__fl!=null){window.clearTimeout(this.__fl);
}this.__fj=this.__fi=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){arguments.callee.base.call(this);
this.__fo=d;
this.__fp=e||null;
this.__fq=qx.util.DeferredCallManager.getInstance();
},members:{__fo:null,__fp:null,__fq:null,cancel:function(){this.__fq.cancel(this);
},schedule:function(){this.__fq.schedule(this);
},call:function(){this.__fp?this.__fo.apply(this.__fp):this.__fo();
}},destruct:function(b,c){this.cancel();
this.__fp=this.__fo=this.__fq=null;
}});
})();
(function(){var bG="element",bF="qx.client",bE="div",bD="",bC="mshtml",bB="none",bA="scroll",bz="qx.html.Element",by="|capture|",bx="activate",bW="blur",bV="deactivate",bU="userSelect",bT="capture",bS="visible",bR="releaseCapture",bQ="|bubble|",bP="__fN",bO="qxSelectable",bN="tabIndex",bL="off",bM="focus",bJ="normal",bK="webkit",bH="hidden",bI="on";
qx.Class.define(bz,{extend:qx.core.Object,construct:function(bs){arguments.callee.base.call(this);
this.__fr=bs||bE;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__fs:{},_scheduleFlush:function(n){qx.html.Element.__ga.schedule();
},flush:function(){var dI;
{};
var dA=this.__ft();
var dz=dA.getFocus();

if(dz&&this.__fx(dz)){dA.blur(dz);
}var dP=dA.getActive();

if(dP&&this.__fx(dP)){qx.bom.Element.deactivate(dP);
}var dD=this.__fv();

if(dD&&this.__fx(dD)){qx.bom.Element.releaseCapture(dD);
}var dJ=[];
var dK=this._modified;

for(var dH in dK){dI=dK[dH];
if(dI.__fR()){if(dI.__fy&&qx.dom.Hierarchy.isRendered(dI.__fy)){dJ.push(dI);
}else{{};
dI.__fQ();
}delete dK[dH];
}}
for(var i=0,l=dJ.length;i<l;i++){dI=dJ[i];
{};
dI.__fQ();
}var dF=this._visibility;

for(var dH in dF){dI=dF[dH];
{};
dI.__fy.style.display=dI.__fB?bD:bB;
if(qx.core.Variant.isSet(bF,bC)){if(!(document.documentMode>=8)){dI.__fy.style.visibility=dI.__fB?bS:bH;
}}delete dF[dH];
}var scroll=this._scroll;

for(var dH in scroll){dI=scroll[dH];
var dQ=dI.__fy;

if(dQ&&dQ.offsetWidth){var dC=true;
if(dI.__fE!=null){dI.__fy.scrollLeft=dI.__fE;
delete dI.__fE;
}if(dI.__fF!=null){dI.__fy.scrollTop=dI.__fF;
delete dI.__fF;
}var dM=dI.__fC;

if(dM!=null){var dG=dM.element.getDomElement();

if(dG&&dG.offsetWidth){qx.bom.element.Scroll.intoViewX(dG,dQ,dM.align);
delete dI.__fC;
}else{dC=false;
}}var dN=dI.__fD;

if(dN!=null){var dG=dN.element.getDomElement();

if(dG&&dG.offsetWidth){qx.bom.element.Scroll.intoViewY(dG,dQ,dN.align);
delete dI.__fD;
}else{dC=false;
}}if(dC){delete scroll[dH];
}}}var dB={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dO=this._actions[i];
var dL=dO.element.__fy;

if(!dL||!dB[dO.type]&&!dO.element.__fR()){continue;
}var dE=dO.args;
dE.unshift(dL);
qx.bom.Element[dO.type].apply(qx.bom.Element,dE);
}this._actions=[];
for(var dH in this.__fs){var dy=this.__fs[dH];
var dQ=dy.element.__fy;

if(dQ){qx.bom.Selection.set(dQ,dy.start,dy.end);
delete this.__fs[dH];
}}qx.event.handler.Appear.refresh();
},__ft:function(){if(!this.__fu){var dg=qx.event.Registration.getManager(window);
this.__fu=dg.getHandler(qx.event.handler.Focus);
}return this.__fu;
},__fv:function(){if(!this.__fw){var bb=qx.event.Registration.getManager(window);
this.__fw=bb.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__fw.getCaptureElement();
},__fx:function(bX){var bY=qx.core.ObjectRegistry.fromHashCode(bX.$$element);
return bY&&!bY.__fR();
}},members:{__fr:null,__fy:null,__fz:false,__fA:true,__fB:true,__fC:null,__fD:null,__fE:null,__fF:null,__fG:null,__fH:null,__fI:null,__fJ:null,__fK:null,__fL:null,__fM:null,__fN:null,__fO:null,__fP:null,_scheduleChildrenUpdate:function(){if(this.__fO){return;
}this.__fO=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
},_createDomElement:function(){return qx.bom.Element.create(this.__fr);
},__fQ:function(){{};
var bc=this.__fN;

if(bc){var length=bc.length;
var bd;

for(var i=0;i<length;i++){bd=bc[i];

if(bd.__fB&&bd.__fA&&!bd.__fy){bd.__fQ();
}}}
if(!this.__fy){this.__fy=this._createDomElement();
this.__fy.$$element=this.$$hash;
this._copyData(false);

if(bc&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fO){this._syncChildren();
}}delete this.__fO;
},_insertChildren:function(){var v=this.__fN;
var length=v.length;
var z;

if(length>2){var w=document.createDocumentFragment();

for(var i=0;i<length;i++){z=v[i];

if(z.__fy&&z.__fA){w.appendChild(z.__fy);
}}this.__fy.appendChild(w);
}else{var w=this.__fy;

for(var i=0;i<length;i++){z=v[i];

if(z.__fy&&z.__fA){w.appendChild(z.__fy);
}}}},_syncChildren:function(){var f;
var m=qx.core.ObjectRegistry;
var a=this.__fN;
var j=a.length;
var b;
var g;
var d=this.__fy;
var h=d.childNodes;
var c=0;
var k;
{};
for(var i=h.length-1;i>=0;i--){k=h[i];
g=m.fromHashCode(k.$$element);

if(!g||!g.__fA||g.__fP!==this){d.removeChild(k);
{};
}}for(var i=0;i<j;i++){b=a[i];
if(b.__fA){g=b.__fy;
k=h[c];

if(!g){continue;
}if(g!=k){if(k){d.insertBefore(g,k);
}else{d.appendChild(g);
}{};
}c++;
}}{};
},_copyData:function(cf){var cj=this.__fy;
var ci=this.__fK;

if(ci){var cg=qx.bom.element.Attribute;

for(var ck in ci){cg.set(cj,ck,ci[ck]);
}}var ci=this.__fJ;

if(ci){var ch=qx.bom.element.Style;

if(cf){ch.setStyles(cj,ci);
}else{ch.setCss(cj,ch.compile(ci));
}}var ci=this.__fL;

if(ci){for(var ck in ci){this._applyProperty(ck,ci[ck]);
}}var ci=this.__fM;

if(ci){qx.event.Registration.getManager(cj).importListeners(cj,ci);
delete this.__fM;
}},_syncData:function(){var cA=this.__fy;
var cz=qx.bom.element.Attribute;
var cx=qx.bom.element.Style;
var cy=this.__fH;

if(cy){var cD=this.__fK;

if(cD){var cB;

for(var cC in cy){cB=cD[cC];

if(cB!==undefined){cz.set(cA,cC,cB);
}else{cz.reset(cA,cC);
}}}this.__fH=null;
}var cy=this.__fG;

if(cy){var cD=this.__fJ;

if(cD){var cw={};

for(var cC in cy){cw[cC]=cD[cC];
}cx.setStyles(cA,cw);
}this.__fG=null;
}var cy=this.__fI;

if(cy){var cD=this.__fL;

if(cD){var cB;

for(var cC in cy){this._applyProperty(cC,cD[cC]);
}}this.__fI=null;
}},__fR:function(){var A=this;
while(A){if(A.__fz){return true;
}
if(!A.__fA||!A.__fB){return false;
}A=A.__fP;
}return false;
},__fS:function(bv){if(bv.__fP===this){throw new Error("Child is already in: "+bv);
}
if(bv.__fz){throw new Error("Root elements could not be inserted into other ones.");
}if(bv.__fP){bv.__fP.remove(bv);
}bv.__fP=this;
if(!this.__fN){this.__fN=[];
}if(this.__fy){this._scheduleChildrenUpdate();
}},__fT:function(ca){if(ca.__fP!==this){throw new Error("Has no child: "+ca);
}if(this.__fy){this._scheduleChildrenUpdate();
}delete ca.__fP;
},__fU:function(br){if(br.__fP!==this){throw new Error("Has no child: "+br);
}if(this.__fy){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fN||null;
},getChild:function(cm){var cn=this.__fN;
return cn&&cn[cm]||null;
},hasChildren:function(){var U=this.__fN;
return U&&U[0]!==undefined;
},indexOf:function(bp){var bq=this.__fN;
return bq?bq.indexOf(bp):-1;
},hasChild:function(dm){var dn=this.__fN;
return dn&&dn.indexOf(dm)!==-1;
},add:function(cL){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fS(arguments[i]);
}this.__fN.push.apply(this.__fN,arguments);
}else{this.__fS(cL);
this.__fN.push(cL);
}return this;
},addAt:function(co,cp){this.__fS(co);
qx.lang.Array.insertAt(this.__fN,co,cp);
return this;
},remove:function(bj){var bk=this.__fN;

if(!bk){return;
}
if(arguments[1]){var bl;

for(var i=0,l=arguments.length;i<l;i++){bl=arguments[i];
this.__fT(bl);
qx.lang.Array.remove(bk,bl);
}}else{this.__fT(bj);
qx.lang.Array.remove(bk,bj);
}return this;
},removeAt:function(du){var dv=this.__fN;

if(!dv){throw new Error("Has no children!");
}var dw=dv[du];

if(!dw){throw new Error("Has no child at this position!");
}this.__fT(dw);
qx.lang.Array.removeAt(this.__fN,du);
return this;
},removeAll:function(){var W=this.__fN;

if(W){for(var i=0,l=W.length;i<l;i++){this.__fT(W[i]);
}W.length=0;
}return this;
},getParent:function(){return this.__fP||null;
},insertInto:function(parent,o){parent.__fS(this);

if(o==null){parent.__fN.push(this);
}else{qx.lang.Array.insertAt(this.__fN,this,o);
}return this;
},insertBefore:function(cb){var parent=cb.__fP;
parent.__fS(this);
qx.lang.Array.insertBefore(parent.__fN,this,cb);
return this;
},insertAfter:function(bi){var parent=bi.__fP;
parent.__fS(this);
qx.lang.Array.insertAfter(parent.__fN,this,bi);
return this;
},moveTo:function(M){var parent=this.__fP;
parent.__fU(this);
var N=parent.__fN.indexOf(this);

if(N===M){throw new Error("Could not move to same index!");
}else if(N<M){M--;
}qx.lang.Array.removeAt(parent.__fN,N);
qx.lang.Array.insertAt(parent.__fN,this,M);
return this;
},moveBefore:function(K){var parent=this.__fP;
return this.moveTo(parent.__fN.indexOf(K));
},moveAfter:function(V){var parent=this.__fP;
return this.moveTo(parent.__fN.indexOf(V)+1);
},free:function(){var parent=this.__fP;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fN){return;
}parent.__fT(this);
qx.lang.Array.remove(parent.__fN,this);
return this;
},getDomElement:function(){return this.__fy||null;
},getNodeName:function(){return this.__fr;
},setNodeName:function(name){this.__fr=name;
},setRoot:function(bu){this.__fz=bu;
},useMarkup:function(cX){if(this.__fy){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bF,bC)){var cY=document.createElement(bE);
}else{var cY=qx.html.Element.__fV;

if(!cY){cY=qx.html.Element.__fV=document.createElement(bE);
}}cY.innerHTML=cX;
this.__fy=cY.firstChild;
this.__fy.$$element=this.$$hash;
this._copyData(true);
return this.__fy;
},useElement:function(dd){if(this.__fy){throw new Error("Could not overwrite existing element!");
}this.__fy=dd;
this.__fy.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dc=this.getAttribute(bN);

if(dc>=1){return true;
}var da=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dc>=0&&da[this.__fr]){return true;
}return false;
},setSelectable:function(dx){this.setAttribute(bO,dx?bI:bL);
if(qx.core.Variant.isSet(bF,bK)){this.setStyle(bU,dx?bJ:bB);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__fr];
},include:function(){if(this.__fA){return;
}delete this.__fA;

if(this.__fP){this.__fP._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__fA){return;
}this.__fA=false;

if(this.__fP){this.__fP._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__fA===true;
},show:function(){if(this.__fB){return;
}
if(this.__fy){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}if(this.__fP){this.__fP._scheduleChildrenUpdate();
}delete this.__fB;
},hide:function(){if(!this.__fB){return;
}
if(this.__fy){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}this.__fB=false;
},isVisible:function(){return this.__fB===true;
},scrollChildIntoViewX:function(dh,di,dj){var dk=this.__fy;
var dl=dh.getDomElement();

if(dj!==false&&dk&&dk.offsetWidth&&dl&&dl.offsetWidth){qx.bom.element.Scroll.intoViewX(dl,dk,di);
}else{this.__fC={element:dh,align:di};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}delete this.__fE;
},scrollChildIntoViewY:function(dp,dq,dr){var ds=this.__fy;
var dt=dp.getDomElement();

if(dr!==false&&ds&&ds.offsetWidth&&dt&&dt.offsetWidth){qx.bom.element.Scroll.intoViewY(dt,ds,dq);
}else{this.__fD={element:dp,align:dq};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}delete this.__fF;
},scrollToX:function(x,de){var df=this.__fy;

if(de!==true&&df&&df.offsetWidth){df.scrollLeft=x;
}else{this.__fE=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}delete this.__fC;
},getScrollX:function(){var cv=this.__fy;

if(cv){return cv.scrollLeft;
}return this.__fE||0;
},scrollToY:function(y,X){var Y=this.__fy;

if(X!==true&&Y&&Y.offsetWidth){Y.scrollTop=y;
}else{this.__fF=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}delete this.__fD;
},getScrollY:function(){var bt=this.__fy;

if(bt){return bt.scrollTop;
}return this.__fF||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bA,this.__fX,this);
},enableScrolling:function(){this.removeListener(bA,this.__fX,this);
},__fW:null,__fX:function(e){if(!this.__fW){this.__fW=true;
this.__fy.scrollTop=0;
this.__fy.scrollLeft=0;
delete this.__fW;
}},getTextSelection:function(){var J=this.__fy;

if(J){return qx.bom.Selection.get(J);
}return null;
},getTextSelectionLength:function(){var be=this.__fy;

if(be){return qx.bom.Selection.getLength(be);
}return null;
},getTextSelectionStart:function(){var cR=this.__fy;

if(cR){return qx.bom.Selection.getStart(cR);
}return null;
},getTextSelectionEnd:function(){var L=this.__fy;

if(L){return qx.bom.Selection.getEnd(L);
}return null;
},setTextSelection:function(O,P){var Q=this.__fy;

if(Q){qx.bom.Selection.set(Q,O,P);
return;
}qx.html.Element.__fs[this.toHashCode()]={element:this,start:O,end:P};
qx.html.Element._scheduleFlush(bG);
},clearTextSelection:function(){var I=this.__fy;

if(I){qx.bom.Selection.clear(I);
}delete qx.html.Element.__fs[this.toHashCode()];
},__fY:function(bf,bg){var bh=qx.html.Element._actions;
bh.push({type:bf,element:this,args:bg||[]});
qx.html.Element._scheduleFlush(bG);
},focus:function(){this.__fY(bM);
},blur:function(){this.__fY(bW);
},activate:function(){this.__fY(bx);
},deactivate:function(){this.__fY(bV);
},capture:function(bw){this.__fY(bT,[bw!==false]);
},releaseCapture:function(){this.__fY(bR);
},setStyle:function(R,S,T){if(!this.__fJ){this.__fJ={};
}
if(this.__fJ[R]==S){return;
}
if(S==null){delete this.__fJ[R];
}else{this.__fJ[R]=S;
}if(this.__fy){if(T){qx.bom.element.Style.set(this.__fy,R,S);
return this;
}if(!this.__fG){this.__fG={};
}this.__fG[R]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}return this;
},setStyles:function(cq,cr){var cs=qx.bom.element.Style;

if(!this.__fJ){this.__fJ={};
}
if(this.__fy){if(!this.__fG){this.__fG={};
}
for(var cu in cq){var ct=cq[cu];

if(this.__fJ[cu]==ct){continue;
}
if(ct==null){delete this.__fJ[cu];
}else{this.__fJ[cu]=ct;
}if(cr){cs.set(this.__fy,cu,ct);
continue;
}this.__fG[cu]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}else{for(var cu in cq){var ct=cq[cu];

if(this.__fJ[cu]==ct){continue;
}
if(ct==null){delete this.__fJ[cu];
}else{this.__fJ[cu]=ct;
}}}return this;
},removeStyle:function(cN,cO){this.setStyle(cN,null,cO);
},getStyle:function(B){return this.__fJ?this.__fJ[B]:null;
},getAllStyles:function(){return this.__fJ||null;
},setAttribute:function(C,D,E){if(!this.__fK){this.__fK={};
}
if(this.__fK[C]==D){return;
}
if(D==null){delete this.__fK[C];
}else{this.__fK[C]=D;
}if(this.__fy){if(E){qx.bom.element.Attribute.set(this.__fy,C,D);
return this;
}if(!this.__fH){this.__fH={};
}this.__fH[C]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}return this;
},setAttributes:function(dR,dS){for(var dT in dR){this.setAttribute(dT,dR[dT],dS);
}return this;
},removeAttribute:function(bn,bo){this.setAttribute(bn,null,bo);
},getAttribute:function(ba){return this.__fK?this.__fK[ba]:null;
},_applyProperty:function(name,dU){},_setProperty:function(F,G,H){if(!this.__fL){this.__fL={};
}
if(this.__fL[F]==G){return;
}
if(G==null){delete this.__fL[F];
}else{this.__fL[F]=G;
}if(this.__fy){if(H){this._applyProperty(F,G);
return this;
}if(!this.__fI){this.__fI={};
}this.__fI[F]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bG);
}return this;
},_removeProperty:function(cP,cQ){this._setProperty(cP,null,cQ);
},_getProperty:function(cc){var cd=this.__fL;

if(!cd){return null;
}var ce=cd[cc];
return ce==null?null:ce;
},addListener:function(p,q,self,r){var s;

if(this.$$disposed){return null;
}{};

if(this.__fy){return qx.event.Registration.addListener(this.__fy,p,q,self,r);
}
if(!this.__fM){this.__fM={};
}
if(r==null){r=false;
}var t=qx.event.Manager.getNextUniqueId();
var u=p+(r?by:bQ)+t;
this.__fM[u]={type:p,listener:q,self:self,capture:r,unique:t};
return u;
},removeListener:function(cE,cF,self,cG){var cH;

if(this.$$disposed){return null;
}{};

if(this.__fy){qx.event.Registration.removeListener(this.__fy,cE,cF,self,cG);
}else{var cJ=this.__fM;
var cI;

if(cG==null){cG=false;
}
for(var cK in cJ){cI=cJ[cK];
if(cI.listener===cF&&cI.self===self&&cI.capture===cG&&cI.type===cE){delete cJ[cK];
break;
}}}return this;
},removeListenerById:function(cl){if(this.$$disposed){return null;
}
if(this.__fy){qx.event.Registration.removeListenerById(this.__fy,cl);
}else{delete this.__fM[cl];
}return this;
},hasListener:function(cS,cT){if(this.$$disposed){return false;
}
if(this.__fy){return qx.event.Registration.hasListener(this.__fy,cS,cT);
}var cV=this.__fM;
var cU;

if(cT==null){cT=false;
}
for(var cW in cV){cU=cV[cW];
if(cU.capture===cT&&cU.type===cS){return true;
}}return false;
}},defer:function(cM){cM.__ga=new qx.util.DeferredCall(cM.flush,cM);
},destruct:function(){var bm=this.__fy;

if(bm){qx.event.Registration.getManager(bm).removeAllListeners(bm);
bm.$$element=bD;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fP;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bP);
this.__fK=this.__fJ=this.__fM=this.__fL=this.__fH=this.__fG=this.__fI=this.__fy=this.__fP=this.__fC=this.__fD=null;
}});
})();
(function(){var c="qx.ui.core.queue.Manager",b="useraction";
qx.Class.define(c,{statics:{__gb:false,__gc:{},__gd:0,MAX_RETRIES:10,scheduleFlush:function(d){var self=qx.ui.core.queue.Manager;
self.__gc[d]=true;

if(!self.__gb){self.__gg.schedule();
self.__gb=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__ge){return;
}self.__ge=true;
self.__gg.cancel();
var a=self.__gc;
self.__gf(function(){while(a.visibility||a.widget||a.appearance||a.layout||a.element){if(a.widget){delete a.widget;
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
}}},function(){self.__gb=false;
});
self.__gf(function(){if(a.dispose){delete a.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__ge=false;
});
self.__gd=0;
},__gf:function(g,h){var self=qx.ui.core.queue.Manager;

try{g();
}catch(e){{};
self.__gb=false;
self.__ge=false;
self.__gd+=1;

if(self.__gd<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__gd-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{h();
}}},defer:function(f){f.__gg=new qx.util.DeferredCall(f.flush);
qx.html.Element._scheduleFlush=f.scheduleFlush;
qx.event.Registration.addListener(window,b,f.flush);
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
(function(){var b="qx.event.dispatch.DomBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(c){return c.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var K="keydown",J="qx.client",I="keypress",H="NumLock",G="keyup",F="Enter",E="0",D="9",C="-",B="PageUp",bR="+",bQ="PrintScreen",bP="gecko",bO="A",bN="Z",bM="Left",bL="F5",bK="Down",bJ="Up",bI="F11",R="F6",S="useraction",P="F3",Q="keyinput",N="Insert",O="F8",L="End",M="/",ba="Delete",bb="*",bn="F1",bj="F4",bv="Home",bq="F2",bE="F12",bA="PageDown",bf="F7",bH="F9",bG="F10",bF="Right",be="text",bh="Escape",bi="webkit",bl="5",bo="3",br="Meta",bx="7",bC="CapsLock",T="input",U="Control",bg="Space",bu="Tab",bt="Shift",bs="Pause",bz="Unidentified",by="qx.event.handler.Keyboard",bp="mshtml",bw="mshtml|webkit",y="6",bB="off",V="Apps",W="4",bk="Alt",z="2",A="Scroll",bd="1",X="8",Y="Win",bc="autoComplete",bm=",",bD="Backspace";
qx.Class.define(by,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__gh=a;
this.__gi=a.getWindow();
if(qx.core.Variant.isSet(J,bP)){this.__gj=this.__gi;
}else{this.__gj=this.__gi.document.documentElement;
}this.__gk={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cK){if(this._identifierToKeyCodeMap[cK]){return true;
}
if(cK.length!=1){return false;
}
if(cK>=E&&cK<=D){return true;
}
if(cK>=bO&&cK<=bN){return true;
}
switch(cK){case bR:case C:case bb:case M:return true;
default:return false;
}}},members:{__gl:null,__gh:null,__gi:null,__gj:null,__gk:null,__gm:null,__gn:null,__go:null,canHandleEvent:function(cv,cw){},registerEvent:function(d,e,f){},unregisterEvent:function(cq,cr,cs){},_fireInputEvent:function(cH,cI){var cJ=this.__gp();
if(cJ&&cJ.offsetWidth!=0){var event=qx.event.Registration.createEvent(Q,qx.event.type.KeyInput,[cH,cJ,cI]);
this.__gh.dispatchEvent(cJ,event);
}if(this.__gi){qx.event.Registration.fireEvent(this.__gi,S,qx.event.type.Data,[Q]);
}},_fireSequenceEvent:function(cc,cd,ce){var cf=this.__gp();
var cg=cc.keyCode;
var event=qx.event.Registration.createEvent(cd,qx.event.type.KeySequence,[cc,cf,ce]);
this.__gh.dispatchEvent(cf,event);
if(qx.core.Variant.isSet(J,bw)){if(cd==K&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cg)&&!this._emulateKeyPress[cg]){this._fireSequenceEvent(cc,I,ce);
}}}if(this.__gi){qx.event.Registration.fireEvent(this.__gi,S,qx.event.type.Data,[cd]);
}},__gp:function(){var ct=this.__gh.getHandler(qx.event.handler.Focus);
var cu=ct.getActive();
if(!cu||cu.offsetWidth==0){cu=ct.getFocus();
}if(!cu||cu.offsetWidth==0){cu=this.__gh.getWindow().document.body;
}return cu;
},_initKeyObserver:function(){this.__gl=qx.lang.Function.listener(this.__gq,this);
this.__go=qx.lang.Function.listener(this.__gs,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gj,G,this.__gl);
Event.addNativeListener(this.__gj,K,this.__gl);
Event.addNativeListener(this.__gj,I,this.__go);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gj,G,this.__gl);
Event.removeNativeListener(this.__gj,K,this.__gl);
Event.removeNativeListener(this.__gj,I,this.__go);

for(var cb in (this.__gn||{})){var ca=this.__gn[cb];
Event.removeNativeListener(ca.target,I,ca.callback);
}delete (this.__gn);
},__gq:qx.event.GlobalError.observeMethod(qx.core.Variant.select(J,{"mshtml":function(ch){ch=window.event||ch;
var ck=ch.keyCode;
var ci=0;
var cj=ch.type;
if(!(this.__gk[ck]==K&&cj==K)){this._idealKeyHandler(ck,ci,cj,ch);
}if(cj==K){if(this._isNonPrintableKeyCode(ck)||this._emulateKeyPress[ck]){this._idealKeyHandler(ck,ci,I,ch);
}}this.__gk[ck]=cj;
},"gecko":function(l){var p=this._keyCodeFix[l.keyCode]||l.keyCode;
var n=0;
var o=l.type;
if(qx.bom.client.Platform.WIN){var m=p?this._keyCodeToIdentifier(p):this._charCodeToIdentifier(n);

if(!(this.__gk[m]==K&&o==K)){this._idealKeyHandler(p,n,o,l);
}this.__gk[m]=o;
}else{this._idealKeyHandler(p,n,o,l);
}this.__gr(l.target,o,p);
},"webkit":function(u){var x=0;
var v=0;
var w=u.type;
if(qx.bom.client.Engine.VERSION<525.13){if(w==G||w==K){x=this._charCode2KeyCode[u.charCode]||u.keyCode;
}else{if(this._charCode2KeyCode[u.charCode]){x=this._charCode2KeyCode[u.charCode];
}else{v=u.charCode;
}}this._idealKeyHandler(x,v,w,u);
}else{x=u.keyCode;
if(!(this.__gk[x]==K&&w==K)){this._idealKeyHandler(x,v,w,u);
}if(w==K){if(this._isNonPrintableKeyCode(x)||this._emulateKeyPress[x]){this._idealKeyHandler(x,v,I,u);
}}this.__gk[x]=w;
}},"opera":function(t){this.__gm=t.keyCode;
this._idealKeyHandler(t.keyCode,0,t.type,t);
}})),__gr:qx.core.Variant.select(J,{"gecko":function(cC,cD,cE){if(cD===K&&(cE==33||cE==34||cE==38||cE==40)&&cC.type==be&&cC.tagName.toLowerCase()===T&&cC.getAttribute(bc)!==bB){if(!this.__gn){this.__gn={};
}var cG=qx.core.ObjectRegistry.toHashCode(cC);

if(this.__gn[cG]){return;
}var self=this;
this.__gn[cG]={target:cC,callback:function(g){qx.bom.Event.stopPropagation(g);
self.__gs(g);
}};
var cF=qx.event.GlobalError.observeMethod(this.__gn[cG].callback);
qx.bom.Event.addNativeListener(cC,I,cF);
}},"default":null}),__gs:qx.event.GlobalError.observeMethod(qx.core.Variant.select(J,{"mshtml":function(cL){cL=window.event||cL;

if(this._charCode2KeyCode[cL.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cL.keyCode],0,cL.type,cL);
}else{this._idealKeyHandler(0,cL.keyCode,cL.type,cL);
}},"gecko":function(cx){var cA=this._keyCodeFix[cx.keyCode]||cx.keyCode;
var cy=cx.charCode;
var cz=cx.type;
this._idealKeyHandler(cA,cy,cz,cx);
},"webkit":function(bS){if(qx.bom.client.Engine.VERSION<525.13){var bV=0;
var bT=0;
var bU=bS.type;

if(bU==G||bU==K){bV=this._charCode2KeyCode[bS.charCode]||bS.keyCode;
}else{if(this._charCode2KeyCode[bS.charCode]){bV=this._charCode2KeyCode[bS.charCode];
}else{bT=bS.charCode;
}}this._idealKeyHandler(bV,bT,bU,bS);
}else{if(this._charCode2KeyCode[bS.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bS.keyCode],0,bS.type,bS);
}else{this._idealKeyHandler(0,bS.keyCode,bS.type,bS);
}}},"opera":function(bW){var bY=bW.keyCode;
var bX=bW.type;
if(bY!=this.__gm){this._idealKeyHandler(0,this.__gm,bX,bW);
}else{if(this._keyCodeToIdentifierMap[bW.keyCode]){this._idealKeyHandler(bW.keyCode,0,bW.type,bW);
}else{this._idealKeyHandler(0,bW.keyCode,bW.type,bW);
}}}})),_idealKeyHandler:function(cl,cm,cn,co){var cp;
if(cl||(!cl&&!cm)){cp=this._keyCodeToIdentifier(cl);
this._fireSequenceEvent(co,cn,cp);
}else{cp=this._charCodeToIdentifier(cm);
this._fireSequenceEvent(co,I,cp);
this._fireInputEvent(co,cm);
}},_specialCharCodeMap:{8:bD,9:bu,13:F,27:bh,32:bg},_emulateKeyPress:qx.core.Variant.select(J,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bt,17:U,18:bk,20:bC,224:br,37:bM,38:bJ,39:bF,40:bK,33:B,34:bA,35:L,36:bv,45:N,46:ba,112:bn,113:bq,114:P,115:bj,116:bL,117:R,118:bf,119:O,120:bH,121:bG,122:bI,123:bE,144:H,44:bQ,145:A,19:bs,91:Y,93:V},_numpadToCharCode:{96:E.charCodeAt(0),97:bd.charCodeAt(0),98:z.charCodeAt(0),99:bo.charCodeAt(0),100:W.charCodeAt(0),101:bl.charCodeAt(0),102:y.charCodeAt(0),103:bx.charCodeAt(0),104:X.charCodeAt(0),105:D.charCodeAt(0),106:bb.charCodeAt(0),107:bR.charCodeAt(0),109:C.charCodeAt(0),110:bm.charCodeAt(0),111:M.charCodeAt(0)},_charCodeA:bO.charCodeAt(0),_charCodeZ:bN.charCodeAt(0),_charCode0:E.charCodeAt(0),_charCode9:D.charCodeAt(0),_isNonPrintableKeyCode:function(q){return this._keyCodeToIdentifierMap[q]?true:false;
},_isIdentifiableKeyCode:function(r){if(r>=this._charCodeA&&r<=this._charCodeZ){return true;
}if(r>=this._charCode0&&r<=this._charCode9){return true;
}if(this._specialCharCodeMap[r]){return true;
}if(this._numpadToCharCode[r]){return true;
}if(this._isNonPrintableKeyCode(r)){return true;
}return false;
},_keyCodeToIdentifier:function(b){if(this._isIdentifiableKeyCode(b)){var c=this._numpadToCharCode[b];

if(c){return String.fromCharCode(c);
}return (this._keyCodeToIdentifierMap[b]||this._specialCharCodeMap[b]||String.fromCharCode(b));
}else{return bz;
}},_charCodeToIdentifier:function(s){return this._specialCharCodeMap[s]||String.fromCharCode(s).toUpperCase();
},_identifierToKeyCode:function(cB){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cB]||cB.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gm=this.__gh=this.__gi=this.__gj=this.__gk=null;
},defer:function(h,i,j){qx.event.Registration.addHandler(h);
if(!h._identifierToKeyCodeMap){h._identifierToKeyCodeMap={};

for(var k in i._keyCodeToIdentifierMap){h._identifierToKeyCodeMap[i._keyCodeToIdentifierMap[k]]=parseInt(k,10);
}
for(var k in i._specialCharCodeMap){h._identifierToKeyCodeMap[i._specialCharCodeMap[k]]=parseInt(k,10);
}}
if(qx.core.Variant.isSet(J,bp)){i._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(J,bP)){i._keyCodeFix={12:i._identifierToKeyCode(H)};
}else if(qx.core.Variant.isSet(J,bi)){if(qx.bom.client.Engine.VERSION<525.13){i._charCode2KeyCode={63289:i._identifierToKeyCode(H),63276:i._identifierToKeyCode(B),63277:i._identifierToKeyCode(bA),63275:i._identifierToKeyCode(L),63273:i._identifierToKeyCode(bv),63234:i._identifierToKeyCode(bM),63232:i._identifierToKeyCode(bJ),63235:i._identifierToKeyCode(bF),63233:i._identifierToKeyCode(bK),63272:i._identifierToKeyCode(ba),63302:i._identifierToKeyCode(N),63236:i._identifierToKeyCode(bn),63237:i._identifierToKeyCode(bq),63238:i._identifierToKeyCode(P),63239:i._identifierToKeyCode(bj),63240:i._identifierToKeyCode(bL),63241:i._identifierToKeyCode(R),63242:i._identifierToKeyCode(bf),63243:i._identifierToKeyCode(O),63244:i._identifierToKeyCode(bH),63245:i._identifierToKeyCode(bG),63246:i._identifierToKeyCode(bI),63247:i._identifierToKeyCode(bE),63248:i._identifierToKeyCode(bQ),3:i._identifierToKeyCode(F),12:i._identifierToKeyCode(H),13:i._identifierToKeyCode(F)};
}else{i._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var J="qx.client",I="mouseup",H="click",G="mousedown",F="contextmenu",E="mousewheel",D="dblclick",C="mshtml",B="mouseover",A="mouseout",v="DOMMouseScroll",z="mousemove",y="on",u="mshtml|webkit|opera",t="useraction",x="gecko|webkit",w="qx.event.handler.Mouse";
qx.Class.define(w,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(T){arguments.callee.base.call(this);
this.__gt=T;
this.__gu=T.getWindow();
this.__gv=this.__gu.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,__gt:null,__gu:null,__gv:null,canHandleEvent:function(K,L){},registerEvent:qx.bom.client.System.IPHONE?
function(j,k,l){j[y+k]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(Q,R,S){Q[y+R]=undefined;
}:qx.lang.Function.returnNull,__gB:function(N,O,P){if(!P){P=N.target||N.srcElement;
}if(P&&P.nodeType){qx.event.Registration.fireEvent(P,O||N.type,O==E?qx.event.type.MouseWheel:qx.event.type.Mouse,[N,P,null,true,true]);
}qx.event.Registration.fireEvent(this.__gu,t,qx.event.type.Data,[O||N.type]);
},_initButtonObserver:function(){this.__gw=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gv,G,this.__gw);
Event.addNativeListener(this.__gv,I,this.__gw);
Event.addNativeListener(this.__gv,H,this.__gw);
Event.addNativeListener(this.__gv,D,this.__gw);
Event.addNativeListener(this.__gv,F,this.__gw);
},_initMoveObserver:function(){this.__gx=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gv,z,this.__gx);
Event.addNativeListener(this.__gv,B,this.__gx);
Event.addNativeListener(this.__gv,A,this.__gx);
},_initWheelObserver:function(){this.__gy=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var U=qx.core.Variant.isSet(J,u)?E:v;
var V=qx.core.Variant.isSet(J,C)?this.__gv:this.__gu;
Event.addNativeListener(V,U,this.__gy);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gv,G,this.__gw);
Event.removeNativeListener(this.__gv,I,this.__gw);
Event.removeNativeListener(this.__gv,H,this.__gw);
Event.removeNativeListener(this.__gv,D,this.__gw);
Event.removeNativeListener(this.__gv,F,this.__gw);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gv,z,this.__gx);
Event.removeNativeListener(this.__gv,B,this.__gx);
Event.removeNativeListener(this.__gv,A,this.__gx);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var b=qx.core.Variant.isSet(J,u)?E:v;
var c=qx.core.Variant.isSet(J,C)?this.__gv:this.__gu;
Event.removeNativeListener(c,b,this.__gy);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(M){this.__gB(M);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(d){var e=d.type;
var f=d.target||d.srcElement;
if(qx.core.Variant.isSet(J,x)){if(f&&f.nodeType==3){f=f.parentNode;
}}
if(this.__gC){this.__gC(d,e,f);
}
if(this.__gE){this.__gE(d,e,f);
}this.__gB(d,e,f);

if(this.__gD){this.__gD(d,e,f);
}
if(this.__gF){this.__gF(d,e,f);
}this.__gz=e;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(a){this.__gB(a,E);
}),__gC:qx.core.Variant.select(J,{"webkit":function(X,Y,ba){if(qx.bom.client.Engine.VERSION<530){if(Y==F){this.__gB(X,I,ba);
}}},"default":null}),__gD:qx.core.Variant.select(J,{"opera":function(m,n,o){if(n==I&&m.button==2){this.__gB(m,F,o);
}},"default":null}),__gE:qx.core.Variant.select(J,{"mshtml":function(g,h,i){if(h==I&&this.__gz==H){this.__gB(g,G,i);
}else if(h==D){this.__gB(g,H,i);
}},"default":null}),__gF:qx.core.Variant.select(J,{"mshtml":null,"default":function(p,q,r){switch(q){case G:this.__gA=r;
break;
case I:if(r!==this.__gA){var s=qx.dom.Hierarchy.getCommonParent(r,this.__gA);
this.__gB(p,H,s);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__gt=this.__gu=this.__gv=this.__gA=null;
},defer:function(W){qx.event.Registration.addHandler(W);
}});
})();
(function(){var d="qx.event.handler.Capture";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var s="alias",r="copy",q="blur",p="mouseout",o="keydown",n="Ctrl",m="Shift",l="mousemove",k="move",j="mouseover",I="Alt",H="keyup",G="mouseup",F="dragend",E="on",D="mousedown",C="qxDraggable",B="drag",A="drop",z="qxDroppable",x="qx.event.handler.DragDrop",y="droprequest",v="dragstart",w="dragchange",t="dragleave",u="dragover";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){arguments.callee.base.call(this);
this.__gG=f;
this.__gH=f.getWindow().document.documentElement;
this.__gG.addListener(this.__gH,D,this._onMouseDown,this);
this.__gT();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gG:null,__gH:null,__gI:null,__gJ:null,__gK:null,__gL:null,__gM:null,__gN:null,__gO:null,__gP:null,__gQ:false,__gR:0,__gS:0,canHandleEvent:function(P,Q){},registerEvent:function(bc,bd,be){},unregisterEvent:function(bk,bl,bm){},addType:function(g){this.__gK[g]=true;
},addAction:function(bj){this.__gL[bj]=true;
},supportsType:function(h){return !!this.__gK[h];
},supportsAction:function(c){return !!this.__gL[c];
},getData:function(bi){if(!this.__hb||!this.__gI){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gK[bi]){throw new Error("Unsupported data type: "+bi+"!");
}
if(!this.__gN[bi]){this.__gO=bi;
this.__gV(y,this.__gJ,this.__gI,false);
}
if(!this.__gN[bi]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gN[bi]||null;
},getCurrentAction:function(){return this.__gP;
},addData:function(N,O){this.__gN[N]=O;
},getCurrentType:function(){return this.__gO;
},__gT:function(){this.__gK={};
this.__gL={};
this.__gM={};
this.__gN={};
},__gU:function(){var M=this.__gL;
var K=this.__gM;
var L=null;

if(this.__hb){if(K.Shift&&K.Ctrl&&M.alias){L=s;
}else if(K.Shift&&K.Alt&&M.copy){L=r;
}else if(K.Shift&&M.move){L=k;
}else if(K.Alt&&M.alias){L=s;
}else if(K.Ctrl&&M.copy){L=r;
}else if(M.move){L=k;
}else if(M.copy){L=r;
}else if(M.alias){L=s;
}}
if(L!=this.__gP){this.__gP=L;
this.__gV(w,this.__gJ,this.__gI,false);
}},__gV:function(S,T,U,V,W){var Y=qx.event.Registration;
var X=Y.createEvent(S,qx.event.type.Drag,[V,W]);

if(T!==U){X.setRelatedTarget(U);
}return Y.dispatchEvent(T,X);
},__gW:function(i){while(i&&i.nodeType==1){if(i.getAttribute(C)==E){return i;
}i=i.parentNode;
}return null;
},__gX:function(J){while(J&&J.nodeType==1){if(J.getAttribute(z)==E){return J;
}J=J.parentNode;
}return null;
},__gY:function(){this.__gJ=null;
this.__gG.removeListener(this.__gH,l,this._onMouseMove,this,true);
this.__gG.removeListener(this.__gH,G,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,q,this._onWindowBlur,this);
this.__gT();
},__ha:function(){if(this.__gQ){this.__gG.removeListener(this.__gH,j,this._onMouseOver,this,true);
this.__gG.removeListener(this.__gH,p,this._onMouseOut,this,true);
this.__gG.removeListener(this.__gH,o,this._onKeyDown,this,true);
this.__gG.removeListener(this.__gH,H,this._onKeyUp,this,true);
this.__gV(F,this.__gJ,this.__gI,false);
this.__gQ=false;
}this.__hb=false;
this.__gI=null;
this.__gY();
},__hb:false,_onWindowBlur:function(e){this.__ha();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case I:case n:case m:if(!this.__gM[bh]){this.__gM[bh]=true;
this.__gU();
}}},_onKeyUp:function(e){var b=e.getKeyIdentifier();

switch(b){case I:case n:case m:if(this.__gM[b]){this.__gM[b]=false;
this.__gU();
}}},_onMouseDown:function(e){if(this.__gQ){return;
}var R=this.__gW(e.getTarget());

if(R){this.__gR=e.getDocumentLeft();
this.__gS=e.getDocumentTop();
this.__gJ=R;
this.__gG.addListener(this.__gH,l,this._onMouseMove,this,true);
this.__gG.addListener(this.__gH,G,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,q,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hb){this.__gV(A,this.__gI,this.__gJ,false,e);
}if(this.__gQ){e.stopPropagation();
}this.__ha();
},_onMouseMove:function(e){if(this.__gQ){if(!this.__gV(B,this.__gJ,this.__gI,true,e)){this.__ha();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gR)>3||Math.abs(e.getDocumentTop()-this.__gS)>3){if(this.__gV(v,this.__gJ,this.__gI,true,e)){this.__gQ=true;
this.__gG.addListener(this.__gH,j,this._onMouseOver,this,true);
this.__gG.addListener(this.__gH,p,this._onMouseOut,this,true);
this.__gG.addListener(this.__gH,o,this._onKeyDown,this,true);
this.__gG.addListener(this.__gH,H,this._onKeyUp,this,true);
var d=this.__gM;
d.Ctrl=e.isCtrlPressed();
d.Shift=e.isShiftPressed();
d.Alt=e.isAltPressed();
this.__gU();
}else{this.__gV(F,this.__gJ,this.__gI,false);
this.__gY();
}}}},_onMouseOver:function(e){var bf=e.getTarget();
var bg=this.__gX(bf);

if(bg&&bg!=this.__gI){this.__hb=this.__gV(u,bg,this.__gJ,true,e);
this.__gI=bg;
this.__gU();
}},_onMouseOut:function(e){var bb=this.__gX(e.getTarget());
var ba=this.__gX(e.getRelatedTarget());

if(bb&&bb!==ba&&bb==this.__gI){this.__gV(t,this.__gI,ba,false,e);
this.__gI=null;
this.__hb=false;
qx.event.Timer.once(this.__gU,this,0);
}}},destruct:function(){this.__gJ=this.__gI=this.__gG=this.__gH=this.__gK=this.__gL=this.__gM=this.__gN=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var j="-",i="qx.event.handler.Element";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this._manager=h;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(k,l){},registerEvent:function(u,v,w){var z=qx.core.ObjectRegistry.toHashCode(u);
var x=z+j+v;
var y=qx.lang.Function.listener(this._onNative,this,x);
qx.bom.Event.addNativeListener(u,v,y);
this._registeredEvents[x]={element:u,type:v,listener:y};
},unregisterEvent:function(a,b,c){var f=this._registeredEvents;

if(!f){return;
}var g=qx.core.ObjectRegistry.toHashCode(a);
var d=g+j+b;
var e=this._registeredEvents[d];
qx.bom.Event.removeNativeListener(a,b,e.listener);
delete this._registeredEvents[d];
},_onNative:qx.event.GlobalError.observeMethod(function(q,r){var t=this._registeredEvents;

if(!t){return;
}var s=t[r];
qx.event.Registration.fireNonBubblingEvent(s.element,s.type,qx.event.type.Native,[q]);
})},destruct:function(){var n;
var o=this._registeredEvents;

for(var p in o){n=o[p];
qx.bom.Event.removeNativeListener(n.element,n.type,n.listener);
}this._manager=this._registeredEvents=null;
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var j="qx.event.handler.Appear",i="disappear",h="appear";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){arguments.callee.base.call(this);
this.__hc=x;
this.__hd={};
qx.event.handler.Appear.__he[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__he:{},refresh:function(){var k=this.__he;

for(var l in k){k[l].refresh();
}}},members:{__hc:null,__hd:null,canHandleEvent:function(a,b){},registerEvent:function(c,d,e){var f=qx.core.ObjectRegistry.toHashCode(c)+d;
var g=this.__hd;

if(g&&!g[f]){g[f]=c;
c.$$displayed=c.offsetWidth>0;
}},unregisterEvent:function(s,t,u){var v=qx.core.ObjectRegistry.toHashCode(s)+t;
var w=this.__hd;

if(!w){return;
}
if(w[v]){delete w[v];
}},refresh:function(){var p=this.__hd;
var q;

for(var o in p){q=p[o];
var m=q.offsetWidth>0;

if((!!q.$$displayed)!==m){q.$$displayed=m;
var n=qx.event.Registration.createEvent(m?h:i);
this.__hc.dispatchEvent(q,n);
}}}},destruct:function(){this.__hc=this.__hd=null;
delete qx.event.handler.Appear.__he[this.$$hash];
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var q="mshtml",p="",o="qx.client",n=">",m="<",k=" ",h="='",g="qx.bom.Element",f="div",e="' ",d="></";
qx.Class.define(g,{statics:{__hf:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,I,J){if(!J){J=window;
}
if(!name){throw new Error("The tag name is missing!");
}var L=this.__hf;
var K=p;

for(var N in I){if(L[N]){K+=N+h+I[N]+e;
}}var O;
if(K!=p){if(qx.bom.client.Engine.MSHTML){O=J.document.createElement(m+name+k+K+n);
}else{var M=J.document.createElement(f);
M.innerHTML=m+name+k+K+d+name+n;
O=M.firstChild;
}}else{O=J.document.createElement(name);
}
for(var N in I){if(!L[N]){qx.bom.element.Attribute.set(O,N,I[N]);
}}return O;
},empty:function(b){return b.innerHTML=p;
},addListener:function(z,A,B,self,C){return qx.event.Registration.addListener(z,A,B,self,C);
},removeListener:function(u,v,w,self,x){return qx.event.Registration.removeListener(u,v,w,self,x);
},removeListenerById:function(G,H){return qx.event.Registration.removeListenerById(G,H);
},hasListener:function(r,s,t){return qx.event.Registration.hasListener(r,s,t);
},focus:function(D){qx.event.Registration.getManager(D).getHandler(qx.event.handler.Focus).focus(D);
},blur:function(P){qx.event.Registration.getManager(P).getHandler(qx.event.handler.Focus).blur(P);
},activate:function(c){qx.event.Registration.getManager(c).getHandler(qx.event.handler.Focus).activate(c);
},deactivate:function(a){qx.event.Registration.getManager(a).getHandler(qx.event.handler.Focus).deactivate(a);
},capture:function(E,F){qx.event.Registration.getManager(E).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(E,F);
},releaseCapture:function(y){qx.event.Registration.getManager(y).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(y);
},clone:function(Q,R){var U;

if(R||(qx.core.Variant.isSet(o,q)&&!qx.xml.Document.isXmlDocument(Q))){var Y=qx.event.Registration.getManager(Q);
var S=qx.dom.Hierarchy.getDescendants(Q);
S.push(Q);
}if(qx.core.Variant.isSet(o,q)){for(var i=0,l=S.length;i<l;i++){Y.toggleAttachedEvents(S[i],false);
}}var U=Q.cloneNode(true);
if(qx.core.Variant.isSet(o,q)){for(var i=0,l=S.length;i<l;i++){Y.toggleAttachedEvents(S[i],true);
}}if(R===true){var bc=qx.dom.Hierarchy.getDescendants(U);
bc.push(U);
var T,W,bb,V;

for(var i=0,ba=S.length;i<ba;i++){bb=S[i];
T=Y.serializeListeners(bb);

if(T.length>0){W=bc[i];

for(var j=0,X=T.length;j<X;j++){V=T[j];
Y.addListener(W,V.type,V.handler,V.self,V.capture);
}}}}return U;
}}});
})();
(function(){var e="qx.event.type.Dom";
qx.Class.define(e,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(a,b){var b=arguments.callee.base.call(this,a,b);
b.shiftKey=a.shiftKey;
b.ctrlKey=a.ctrlKey;
b.altKey=a.altKey;
b.metaKey=a.metaKey;
return b;
},getModifiers:function(){var d=0;
var c=this._native;

if(c.shiftKey){d|=qx.event.type.Dom.SHIFT_MASK;
}
if(c.ctrlKey){d|=qx.event.type.Dom.CTRL_MASK;
}
if(c.altKey){d|=qx.event.type.Dom.ALT_MASK;
}
if(c.metaKey){d|=qx.event.type.Dom.META_MASK;
}return d;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var bp="qx.client",bo="blur",bn="focus",bm="mousedown",bl="on",bk="mouseup",bj="DOMFocusOut",bi="DOMFocusIn",bh="selectstart",bg="onmousedown",bL="onfocusout",bK="onfocusin",bJ="onmouseup",bI="onselectstart",bH="draggesture",bG="gecko",bF="qx.event.handler.Focus",bE="_applyFocus",bD="deactivate",bC="textarea",bw="qxIsRootPage",bx="_applyActive",bu="input",bv="focusin",bs="qxSelectable",bt="tabIndex",bq="off",br="activate",by="1",bz="focusout",bB="qxKeepFocus",bA="qxKeepActive";
qx.Class.define(bF,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){arguments.callee.base.call(this);
this._manager=i;
this._window=i.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bx,nullable:true},focus:{apply:bE,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hg:null,__hh:null,__hi:null,__hj:null,__hk:null,__hl:null,__hm:null,__hn:null,__ho:null,__hp:null,canHandleEvent:function(Y,ba){},registerEvent:function(m,n,o){},unregisterEvent:function(f,g,h){},focus:function(a){try{a.focus();
}catch(bc){}this.setFocus(a);
this.setActive(a);
},activate:function(l){this.setActive(l);
},blur:function(k){try{k.blur();
}catch(bb){}
if(this.getActive()===k){this.resetActive();
}
if(this.getFocus()===k){this.resetFocus();
}},deactivate:function(L){if(this.getActive()===L){this.resetActive();
}},tryActivate:function(A){var B=this.__hE(A);

if(B){this.setActive(B);
}},__hq:function(bM,bN,bO,bP){var bR=qx.event.Registration;
var bQ=bR.createEvent(bO,qx.event.type.Focus,[bM,bN,bP]);
bR.dispatchEvent(bM,bQ);
},_windowFocused:true,__hr:function(){if(this._windowFocused){this._windowFocused=false;
this.__hq(this._window,null,bo,false);
}},__hs:function(){if(!this._windowFocused){this._windowFocused=true;
this.__hq(this._window,null,bn,false);
}},_initObserver:qx.core.Variant.select(bp,{"gecko":function(){this.__hg=qx.lang.Function.listener(this.__hy,this);
this.__hh=qx.lang.Function.listener(this.__hz,this);
this.__hi=qx.lang.Function.listener(this.__hx,this);
this.__hj=qx.lang.Function.listener(this.__hw,this);
this.__hk=qx.lang.Function.listener(this.__ht,this);
this._document.addEventListener(bm,this.__hg,true);
this._document.addEventListener(bk,this.__hh,true);
this._window.addEventListener(bn,this.__hi,true);
this._window.addEventListener(bo,this.__hj,true);
this._window.addEventListener(bH,this.__hk,true);
},"mshtml":function(){this.__hg=qx.lang.Function.listener(this.__hy,this);
this.__hh=qx.lang.Function.listener(this.__hz,this);
this.__hm=qx.lang.Function.listener(this.__hu,this);
this.__hn=qx.lang.Function.listener(this.__hv,this);
this.__hl=qx.lang.Function.listener(this.__hB,this);
this._document.attachEvent(bg,this.__hg);
this._document.attachEvent(bJ,this.__hh);
this._document.attachEvent(bK,this.__hm);
this._document.attachEvent(bL,this.__hn);
this._document.attachEvent(bI,this.__hl);
},"webkit":function(){this.__hg=qx.lang.Function.listener(this.__hy,this);
this.__hh=qx.lang.Function.listener(this.__hz,this);
this.__hn=qx.lang.Function.listener(this.__hv,this);
this.__hi=qx.lang.Function.listener(this.__hx,this);
this.__hj=qx.lang.Function.listener(this.__hw,this);
this.__hl=qx.lang.Function.listener(this.__hB,this);
this._document.addEventListener(bm,this.__hg,true);
this._document.addEventListener(bk,this.__hh,true);
this._document.addEventListener(bh,this.__hl,false);
this._window.addEventListener(bj,this.__hn,true);
this._window.addEventListener(bn,this.__hi,true);
this._window.addEventListener(bo,this.__hj,true);
},"opera":function(){this.__hg=qx.lang.Function.listener(this.__hy,this);
this.__hh=qx.lang.Function.listener(this.__hz,this);
this.__hm=qx.lang.Function.listener(this.__hu,this);
this.__hn=qx.lang.Function.listener(this.__hv,this);
this._document.addEventListener(bm,this.__hg,true);
this._document.addEventListener(bk,this.__hh,true);
this._window.addEventListener(bi,this.__hm,true);
this._window.addEventListener(bj,this.__hn,true);
}}),_stopObserver:qx.core.Variant.select(bp,{"gecko":function(){this._document.removeEventListener(bm,this.__hg,true);
this._document.removeEventListener(bk,this.__hh,true);
this._window.removeEventListener(bn,this.__hi,true);
this._window.removeEventListener(bo,this.__hj,true);
this._window.removeEventListener(bH,this.__hk,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bg,this.__hg);
qx.bom.Event.removeNativeListener(this._document,bJ,this.__hh);
qx.bom.Event.removeNativeListener(this._document,bK,this.__hm);
qx.bom.Event.removeNativeListener(this._document,bL,this.__hn);
qx.bom.Event.removeNativeListener(this._document,bI,this.__hl);
},"webkit":function(){this._document.removeEventListener(bm,this.__hg,true);
this._document.removeEventListener(bh,this.__hl,false);
this._window.removeEventListener(bi,this.__hm,true);
this._window.removeEventListener(bj,this.__hn,true);
this._window.removeEventListener(bn,this.__hi,true);
this._window.removeEventListener(bo,this.__hj,true);
},"opera":function(){this._document.removeEventListener(bm,this.__hg,true);
this._window.removeEventListener(bi,this.__hm,true);
this._window.removeEventListener(bj,this.__hn,true);
this._window.removeEventListener(bn,this.__hi,true);
this._window.removeEventListener(bo,this.__hj,true);
}}),__ht:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"gecko":function(e){if(!this.__hF(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__hu:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"mshtml":function(e){this.__hs();
var y=e.srcElement;
var x=this.__hD(y);

if(x){this.setFocus(x);
}this.tryActivate(y);
},"opera":function(e){var b=e.target;

if(b==this._document||b==this._window){this.__hs();

if(this.__ho){this.setFocus(this.__ho);
delete this.__ho;
}
if(this.__hp){this.setActive(this.__hp);
delete this.__hp;
}}else{this.setFocus(b);
this.tryActivate(b);
if(!this.__hF(b)){b.selectionStart=0;
b.selectionEnd=0;
}}},"default":null})),__hv:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"mshtml":function(e){if(!e.toElement){this.__hr();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var K=e.target;

if(K===this.getFocus()){this.resetFocus();
}
if(K===this.getActive()){this.resetActive();
}},"opera":function(e){var p=e.target;

if(p==this._document){this.__hr();
this.__ho=this.getFocus();
this.__hp=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(p===this.getFocus()){this.resetFocus();
}
if(p===this.getActive()){this.resetActive();
}}},"default":null})),__hw:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__hr();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__hr();
this.__ho=this.getFocus();
this.__hp=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hx:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"gecko":function(e){var z=e.target;

if(z===this._window||z===this._document){this.__hs();
z=this._body;
}this.setFocus(z);
this.tryActivate(z);
},"webkit":function(e){var T=e.target;

if(T===this._window||T===this._document){this.__hs();

if(this.__ho){this.setFocus(this.__ho);
delete this.__ho;
}
if(this.__hp){this.setActive(this.__hp);
delete this.__hp;
}}else{this.setFocus(T);
this.tryActivate(T);
}},"default":null})),__hy:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"gecko":function(e){var v=e.target;
var t=this.__hD(v);
var u=this.__hF(v);

if(!u){qx.bom.Event.preventDefault(e);
if(t){if(qx.core.Variant.isSet(bp,bG)){var w=qx.bom.element.Attribute.get(t,bw)===by;

if(!w){t.focus();
}}else{t.focus();
}}}else if(!t){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var H=e.srcElement;
var G=this.__hD(H);

if(G){if(!this.__hF(H)){H.unselectable=bl;
try{document.selection.empty();
}catch(e){}try{G.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__hF(H)){H.unselectable=bl;
}}},"webkit":function(e){var be=e.target;
var bd=this.__hD(be);

if(bd){this.setFocus(bd);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var O=e.target;
var M=this.__hD(O);

if(!this.__hF(O)){qx.bom.Event.preventDefault(e);
if(M){var N=this.getFocus();

if(N&&N.selectionEnd){N.selectionStart=0;
N.selectionEnd=0;
N.blur();
}if(M){this.setFocus(M);
}}}else if(M){this.setFocus(M);
}},"default":null})),__hz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"mshtml":function(e){var F=e.srcElement;

if(F.unselectable){F.unselectable=bq;
}this.tryActivate(this.__hA(F));
},"gecko":function(e){var X=e.target;

while(X&&X.offsetWidth===undefined){X=X.parentNode;
}
if(X){this.tryActivate(X);
}},"webkit|opera":function(e){this.tryActivate(this.__hA(e.target));
},"default":null})),__hA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"mshtml|webkit":function(P){var Q=this.getFocus();

if(Q&&P!=Q&&(Q.nodeName.toLowerCase()===bu||Q.nodeName.toLowerCase()===bC)){P=Q;
}return P;
},"default":function(bf){return bf;
}})),__hB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bp,{"mshtml|webkit":function(e){var j=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__hF(j)){qx.bom.Event.preventDefault(e);
}},"default":null})),__hC:function(C){var D=qx.bom.element.Attribute.get(C,bt);

if(D>=1){return true;
}var E=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(D>=0&&E[C.tagName]){return true;
}return false;
},__hD:function(q){while(q&&q.nodeType===1){if(q.getAttribute(bB)==bl){return null;
}
if(this.__hC(q)){return q;
}q=q.parentNode;
}return this._body;
},__hE:function(R){var S=R;

while(R&&R.nodeType===1){if(R.getAttribute(bA)==bl){return null;
}R=R.parentNode;
}return S;
},__hF:function(r){while(r&&r.nodeType===1){var s=r.getAttribute(bs);

if(s!=null){return s===bl;
}r=r.parentNode;
}return true;
},_applyActive:function(c,d){if(d){this.__hq(d,c,bD,true);
}
if(c){this.__hq(c,d,br,true);
}},_applyFocus:function(I,J){if(J){this.__hq(J,I,bz,true);
}
if(I){this.__hq(I,J,bv,true);
}if(J){this.__hq(J,I,bo,false);
}
if(I){this.__hq(I,J,bn,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__hG=null;
},defer:function(U){qx.event.Registration.addHandler(U);
var V=U.FOCUSABLE_ELEMENTS;

for(var W in V){V[W.toUpperCase()]=1;
}}});
})();
(function(){var d="qx.event.type.Focus";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(a,b,c){arguments.callee.base.call(this,c,false);
this._target=a;
this._relatedTarget=b;
return this;
}}});
})();
(function(){var n="",m="qx.client",l="readOnly",k="accessKey",j="qx.bom.element.Attribute",i="rowSpan",h="vAlign",g="className",f="textContent",e="'",B="htmlFor",A="longDesc",z="cellSpacing",y="frameBorder",x="='",w="useMap",v="innerText",u="innerHTML",t="tabIndex",s="dateTime",q="maxLength",r="mshtml",o="cellPadding",p="colSpan";
qx.Class.define(j,{statics:{__hH:{names:{"class":g,"for":B,html:u,text:qx.core.Variant.isSet(m,r)?v:f,colspan:p,rowspan:i,valign:h,datetime:s,accesskey:k,tabindex:t,maxlength:q,readonly:l,longdesc:A,cellpadding:o,cellspacing:z,frameborder:y,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,maxLength:10000000,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(a){var b=[];
var d=this.__hH.runtime;

for(var c in a){if(!d[c]){b.push(c,x,a[c],e);
}}return b.join(n);
},get:qx.core.Variant.select(m,{"mshtml":function(I,name){var K=this.__hH;
var J;
name=K.names[name]||name;
if(K.original[name]){J=I.getAttribute(name,2);
}else if(K.property[name]){if(K.propertyDefault[name]&&J==K.propertyDefault[name]){return null;
}J=I[name];
}else{J=I.getAttribute(name);
}if(K.bools[name]){return !!J;
}return J;
},"default":function(C,name){var E=this.__hH;
var D;
name=E.names[name]||name;
if(E.property[name]){if(E.propertyDefault[name]&&D==E.propertyDefault[name]){return null;
}D=C[name];

if(D==null){D=C.getAttribute(name);
}}else{D=C.getAttribute(name);
}if(E.bools[name]){return !!D;
}return D;
}}),set:function(F,name,G){var H=this.__hH;
name=H.names[name]||name;
if(H.bools[name]){G=!!G;
}if(H.property[name]){if(G==null){G=H.propertyDefault[name];

if(G===undefined){G=null;
}}F[name]=G;
}else{if(G===true){F.setAttribute(name,name);
}else if(G===false||G===null){F.removeAttribute(name);
}else{F.setAttribute(name,G);
}}},reset:function(L,name){this.set(L,name,null);
}}});
})();
(function(){var p="left",o="right",n="middle",m="qx.client",l="dblclick",k="click",j="none",i="contextmenu",h="qx.event.type.Mouse";
qx.Class.define(h,{extend:qx.event.type.Dom,members:{init:function(c,d,e,f,g){arguments.callee.base.call(this,c,d,e,f,g);

if(!e){this._relatedTarget=qx.bom.Event.getRelatedTarget(c);
}return this;
},_cloneNativeEvent:function(a,b){var b=arguments.callee.base.call(this,a,b);
b.button=a.button;
b.clientX=a.clientX;
b.clientY=a.clientY;
b.pageX=a.pageX;
b.pageY=a.pageY;
b.screenX=a.screenX;
b.screenY=a.screenY;
b.wheelDelta=a.wheelDelta;
b.detail=a.detail;
b.srcElement=a.srcElement;
return b;
},__hI:qx.core.Variant.select(m,{"mshtml":{1:p,2:o,4:n},"default":{0:p,2:o,1:n}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case k:case l:return p;
case i:return o;
default:return this.__hI[this._native.button]||j;
}},isLeftPressed:function(){return this.getButton()===p;
},isMiddlePressed:function(){return this.getButton()===n;
},isRightPressed:function(){return this.getButton()===o;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(m,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(m,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(q);
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
(function(){var q="qx.client",p="ie",o="msie",n="android",m="operamini",l="mobile chrome",k=")(/| )([0-9]+\.[0-9])",j="iemobile",i="opera mobi",h="Mobile Safari",E="operamobile",D="mobile safari",C="IEMobile|Maxthon|MSIE",B="qx.bom.client.Browser",A="opera mini",z="(",y="opera",x="mshtml",w="Opera Mini|Opera Mobi|Opera",v="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",t="webkit",u="5.0",r="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",s="Mobile/";
qx.Bootstrap.define(B,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__hJ:function(b){var c=navigator.userAgent;
var e=new RegExp(z+b+k);
var f=c.match(e);

if(!f){return;
}var name=f[1].toLowerCase();
var d=f[3];
if(c.match(/Version(\/| )([0-9]+\.[0-9])/)){d=RegExp.$2;
}
if(qx.core.Variant.isSet(q,t)){if(name===n){name=l;
}else if(c.indexOf(h)!==-1||c.indexOf(s)!==-1){name=D;
}}else if(qx.core.Variant.isSet(q,x)){if(name===o){name=p;
if(qx.bom.client.System.WINCE&&name===p){name=j;
d=u;
}}}else if(qx.core.Variant.isSet(q,y)){if(name===i){name=E;
}else if(name===A){name=m;
}}this.NAME=name;
this.FULLVERSION=d;
this.VERSION=parseFloat(d,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(q,{"webkit":function(a){a.__hJ(v);
},"gecko":function(g){g.__hJ(r);
},"mshtml":function(F){F.__hJ(C);
},"opera":function(G){G.__hJ(w);
}})});
})();
(function(){var n="qx.client",m="qx.dom.Hierarchy",l="previousSibling",k="*",j="nextSibling",i="parentNode";
qx.Class.define(m,{statics:{getNodeIndex:function(d){var e=0;

while(d&&(d=d.previousSibling)){e++;
}return e;
},getElementIndex:function(a){var b=0;
var c=qx.dom.Node.ELEMENT;

while(a&&(a=a.previousSibling)){if(a.nodeType==c){b++;
}}return b;
},getNextElementSibling:function(t){while(t&&(t=t.nextSibling)&&!qx.dom.Node.isElement(t)){continue;
}return t||null;
},getPreviousElementSibling:function(q){while(q&&(q=q.previousSibling)&&!qx.dom.Node.isElement(q)){continue;
}return q||null;
},contains:qx.core.Variant.select(n,{"webkit|mshtml|opera":function(F,G){if(qx.dom.Node.isDocument(F)){var H=qx.dom.Node.getDocument(G);
return F&&H==F;
}else if(qx.dom.Node.isDocument(G)){return false;
}else{return F.contains(G);
}},"gecko":function(r,s){return !!(r.compareDocumentPosition(s)&16);
},"default":function(A,B){while(B){if(A==B){return true;
}B=B.parentNode;
}return false;
}}),isRendered:function(N){if(!N.offsetParent){return false;
}var O=N.ownerDocument||N.document;
if(O.body.contains){return O.body.contains(N);
}if(O.compareDocumentPosition){return !!(O.compareDocumentPosition(N)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(P,Q){return this.contains(Q,P);
},getCommonParent:qx.core.Variant.select(n,{"mshtml|opera":function(f,g){if(f===g){return f;
}
while(f&&qx.dom.Node.isElement(f)){if(f.contains(g)){return f;
}f=f.parentNode;
}return null;
},"default":function(u,v){if(u===v){return u;
}var w={};
var z=qx.core.ObjectRegistry;
var y,x;

while(u||v){if(u){y=z.toHashCode(u);

if(w[y]){return w[y];
}w[y]=u;
u=u.parentNode;
}
if(v){x=z.toHashCode(v);

if(w[x]){return w[x];
}w[x]=v;
v=v.parentNode;
}}return null;
}}),getAncestors:function(h){return this._recursivelyCollect(h,i);
},getChildElements:function(S){S=S.firstChild;

if(!S){return [];
}var T=this.getNextSiblings(S);

if(S.nodeType===1){T.unshift(S);
}return T;
},getDescendants:function(p){return qx.lang.Array.fromCollection(p.getElementsByTagName(k));
},getFirstDescendant:function(U){U=U.firstChild;

while(U&&U.nodeType!=1){U=U.nextSibling;
}return U;
},getLastDescendant:function(M){M=M.lastChild;

while(M&&M.nodeType!=1){M=M.previousSibling;
}return M;
},getPreviousSiblings:function(R){return this._recursivelyCollect(R,l);
},getNextSiblings:function(o){return this._recursivelyCollect(o,j);
},_recursivelyCollect:function(C,D){var E=[];

while(C=C[D]){if(C.nodeType==1){E.push(C);
}}return E;
},getSiblings:function(V){return this.getPreviousSiblings(V).reverse().concat(this.getNextSiblings(V));
},isEmpty:function(I){I=I.firstChild;

while(I){if(I.nodeType===qx.dom.Node.ELEMENT||I.nodeType===qx.dom.Node.TEXT){return false;
}I=I.nextSibling;
}return true;
},cleanWhitespace:function(J){var K=J.firstChild;

while(K){var L=K.nextSibling;

if(K.nodeType==3&&!/\S/.test(K.nodeValue)){J.removeChild(K);
}K=L;
}}}});
})();
(function(){var f="qx.client",e="qx.event.type.Drag";
qx.Class.define(e,{extend:qx.event.type.Event,members:{init:function(b,c){arguments.callee.base.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
i._native=this._native;
return i;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(d){this.getManager().addType(d);
},addAction:function(j){this.getManager().addAction(j);
},supportsType:function(l){return this.getManager().supportsType(l);
},supportsAction:function(a){return this.getManager().supportsAction(a);
},addData:function(m,n){this.getManager().addData(m,n);
},getData:function(g){return this.getManager().getData(g);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var k="losecapture",j="qx.client",i="blur",h="focus",g="click",f="qx.event.dispatch.MouseCapture",e="capture",d="scroll";
qx.Class.define(f,{extend:qx.event.dispatch.AbstractBubbling,construct:function(u,v){arguments.callee.base.call(this,u);
this.__hK=u.getWindow();
this.__hL=v;
u.addListener(this.__hK,i,this.releaseCapture,this);
u.addListener(this.__hK,h,this.releaseCapture,this);
u.addListener(this.__hK,d,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__hL:null,__hM:null,__hN:true,__hK:null,_getParent:function(c){return c.parentNode;
},canDispatchEvent:function(l,event,m){return (this.__hM&&this.__hO[m]);
},dispatchEvent:function(o,event,p){if(p==g){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hN||!qx.dom.Hierarchy.contains(this.__hM,o)){o=this.__hM;
}arguments.callee.base.call(this,o,event,p);
},__hO:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(a,b){var b=b!==false;

if(this.__hM===a&&this.__hN==b){return;
}
if(this.__hM){this.releaseCapture();
}this.nativeSetCapture(a,b);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(a,k,function(){qx.bom.Event.removeNativeListener(a,k,arguments.callee);
self.releaseCapture();
});
}this.__hN=b;
this.__hM=a;
this.__hL.fireEvent(a,e,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hM;
},releaseCapture:function(){var r=this.__hM;

if(!r){return;
}this.__hM=null;
this.__hL.fireEvent(r,k,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(r);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(j,{"mshtml":function(s,t){s.setCapture(t!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(j,{"mshtml":function(n){n.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hM=this.__hK=this.__hL=null;
},defer:function(q){qx.event.Registration.addDispatcher(q);
}});
})();
(function(){var w="qx.client",v="",u="mshtml",t="'",s="SelectionLanguage",r="qx.xml.Document",q=" />",p="MSXML2.DOMDocument.3.0",o='<\?xml version="1.0" encoding="utf-8"?>\n<',n="MSXML2.XMLHTTP.3.0",h="MSXML2.XMLHTTP.6.0",m=" xmlns='",k="text/xml",g="XPath",f="MSXML2.DOMDocument.6.0",j="HTML";
qx.Bootstrap.define(r,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(z){if(z.nodeType===9){return z.documentElement.nodeName!==j;
}else if(z.ownerDocument){return this.isXmlDocument(z.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(w,{"mshtml":function(D,E){var F=new ActiveXObject(this.DOMDOC);
F.setProperty(s,g);

if(E){var G=o;
G+=E;

if(D){G+=m+D+t;
}G+=q;
F.loadXML(G);
}return F;
},"default":function(x,y){return document.implementation.createDocument(x||v,y||v,null);
}}),fromString:qx.core.Variant.select(w,{"mshtml":function(B){var C=qx.xml.Document.create();
C.loadXML(B);
return C;
},"default":function(d){var e=new DOMParser();
return e.parseFromString(d,k);
}})},defer:function(a){if(qx.core.Variant.isSet(w,u)){var b=[f,p];
var c=[h,n];

for(var i=0,l=b.length;i<l;i++){try{new ActiveXObject(b[i]);
new ActiveXObject(c[i]);
}catch(A){continue;
}a.DOMDOC=b[i];
a.XMLHTTP=c[i];
break;
}}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(H,stop,I){var parent=H.parentNode;
var N=qx.dom.Node.getDocument(H);
var J=N.body;
var V,T,Q;
var X,O,Y;
var R,ba,bd;
var bb,L,U,K;
var P,bc,S;
var M=I===g;
var W=I===c;
stop=stop?stop.parentNode:N;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){T=parent.scrollLeft;
Q=T+qx.bom.Viewport.getWidth();
X=qx.bom.Viewport.getWidth();
O=parent.clientWidth;
Y=parent.scrollWidth;
R=0;
ba=0;
bd=0;
}else{V=qx.bom.element.Location.get(parent);
T=V.left;
Q=V.right;
X=parent.offsetWidth;
O=parent.clientWidth;
Y=parent.scrollWidth;
R=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
ba=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
bd=X-O-R-ba;
}bb=qx.bom.element.Location.get(H);
L=bb.left;
U=bb.right;
K=H.offsetWidth;
P=L-T-R;
bc=U-Q+ba;
S=0;
if(M){S=P;
}else if(W){S=bc+bd;
}else if(P<0||K>O){S=P;
}else if(bc>0){S=bc+bd;
}parent.scrollLeft+=S;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
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
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="scroll",e="qx.client",d="border-box",c="borderBottomWidth",b="borderRightWidth",a="auto",y="padding",x="qx.bom.element.Location",w="paddingLeft",v="static",u="marginBottom",t="visible",s="BODY",r="paddingBottom",q="paddingTop",p="marginRight",n="position",o="margin",l="overflow",m="paddingRight",k="border";
qx.Class.define(x,{statics:{__hP:function(z,A){return qx.bom.element.Style.get(z,A,qx.bom.element.Style.COMPUTED_MODE,false);
},__hQ:function(bA,bB){return parseInt(qx.bom.element.Style.get(bA,bB,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hR:function(M){var P=0,top=0;
if(M.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var O=qx.dom.Node.getWindow(M);
P-=qx.bom.Viewport.getScrollLeft(O);
top-=qx.bom.Viewport.getScrollTop(O);
}else{var N=qx.dom.Node.getDocument(M).body;
M=M.parentNode;
while(M&&M!=N){P+=M.scrollLeft;
top+=M.scrollTop;
M=M.parentNode;
}}return {left:P,top:top};
},__hS:qx.core.Variant.select(e,{"mshtml":function(F){var H=qx.dom.Node.getDocument(F);
var G=H.body;
var I=0;
var top=0;
I-=G.clientLeft+H.documentElement.clientLeft;
top-=G.clientTop+H.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){I+=this.__hQ(G,i);
top+=this.__hQ(G,j);
}return {left:I,top:top};
},"webkit":function(bH){var bJ=qx.dom.Node.getDocument(bH);
var bI=bJ.body;
var bK=bI.offsetLeft;
var top=bI.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bK+=this.__hQ(bI,i);
top+=this.__hQ(bI,j);
}return {left:bK,top:top};
},"gecko":function(br){var bs=qx.dom.Node.getDocument(br).body;
var bt=bs.offsetLeft;
var top=bs.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bt+=this.__hQ(bs,g);
top+=this.__hQ(bs,h);
}if(qx.bom.element.BoxSizing.get(bs)!==d){bt+=this.__hQ(bs,i);
top+=this.__hQ(bs,j);
}return {left:bt,top:top};
},"default":function(bN){var bO=qx.dom.Node.getDocument(bN).body;
var bP=bO.offsetLeft;
var top=bO.offsetTop;
return {left:bP,top:top};
}}),__hT:qx.core.Variant.select(e,{"mshtml|webkit":function(X){var ba=qx.dom.Node.getDocument(X);
if(X.getBoundingClientRect){var bb=X.getBoundingClientRect();
var bc=bb.left;
var top=bb.top;
}else{var bc=X.offsetLeft;
var top=X.offsetTop;
X=X.offsetParent;
var Y=ba.body;
while(X&&X!=Y){bc+=X.offsetLeft;
top+=X.offsetTop;
bc+=this.__hQ(X,i);
top+=this.__hQ(X,j);
X=X.offsetParent;
}}return {left:bc,top:top};
},"gecko":function(S){if(S.getBoundingClientRect){var V=S.getBoundingClientRect();
var W=Math.round(V.left);
var top=Math.round(V.top);
}else{var W=0;
var top=0;
var T=qx.dom.Node.getDocument(S).body;
var U=qx.bom.element.BoxSizing;

if(U.get(S)!==d){W-=this.__hQ(S,i);
top-=this.__hQ(S,j);
}
while(S&&S!==T){W+=S.offsetLeft;
top+=S.offsetTop;
if(U.get(S)!==d){W+=this.__hQ(S,i);
top+=this.__hQ(S,j);
}if(S.parentNode&&this.__hP(S.parentNode,l)!=t){W+=this.__hQ(S.parentNode,i);
top+=this.__hQ(S.parentNode,j);
}S=S.offsetParent;
}}return {left:W,top:top};
},"default":function(J){var L=0;
var top=0;
var K=qx.dom.Node.getDocument(J).body;
while(J&&J!==K){L+=J.offsetLeft;
top+=J.offsetTop;
J=J.offsetParent;
}return {left:L,top:top};
}}),get:function(bi,bj){if(bi.tagName==s){var location=this.__hU(bi);
var bq=location.left;
var top=location.top;
}else{var bk=this.__hS(bi);
var bp=this.__hT(bi);
var scroll=this.__hR(bi);
var bq=bp.left+bk.left-scroll.left;
var top=bp.top+bk.top-scroll.top;
}var bl=bq+bi.offsetWidth;
var bm=top+bi.offsetHeight;

if(bj){if(bj==y||bj==f){var bn=qx.bom.element.Overflow.getX(bi);

if(bn==f||bn==a){bl+=bi.scrollWidth-bi.offsetWidth+this.__hQ(bi,i)+this.__hQ(bi,b);
}var bo=qx.bom.element.Overflow.getY(bi);

if(bo==f||bo==a){bm+=bi.scrollHeight-bi.offsetHeight+this.__hQ(bi,j)+this.__hQ(bi,c);
}}
switch(bj){case y:bq+=this.__hQ(bi,w);
top+=this.__hQ(bi,q);
bl-=this.__hQ(bi,m);
bm-=this.__hQ(bi,r);
case f:bq-=bi.scrollLeft;
top-=bi.scrollTop;
bl-=bi.scrollLeft;
bm-=bi.scrollTop;
case k:bq+=this.__hQ(bi,i);
top+=this.__hQ(bi,j);
bl-=this.__hQ(bi,b);
bm-=this.__hQ(bi,c);
break;
case o:bq-=this.__hQ(bi,g);
top-=this.__hQ(bi,h);
bl+=this.__hQ(bi,p);
bm+=this.__hQ(bi,u);
break;
}}return {left:bq,top:top,right:bl,bottom:bm};
},__hU:qx.core.Variant.select(e,{"default":function(B){var top=B.offsetTop+this.__hQ(B,h);
var C=B.offsetLeft+this.__hQ(B,g);
return {left:C,top:top};
},"mshtml":function(bL){var top=bL.offsetTop;
var bM=bL.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hQ(bL,h);
bM+=this.__hQ(bL,g);
}return {left:bM,top:top};
},"gecko":function(D){var top=D.offsetTop+this.__hQ(D,h)+this.__hQ(D,i);
var E=D.offsetLeft+this.__hQ(D,g)+this.__hQ(D,j);
return {left:E,top:top};
}}),getLeft:function(bg,bh){return this.get(bg,bh).left;
},getTop:function(be,bf){return this.get(be,bf).top;
},getRight:function(bC,bD){return this.get(bC,bD).right;
},getBottom:function(Q,R){return this.get(Q,R).bottom;
},getRelative:function(bu,bv,bw,bx){var bz=this.get(bu,bw);
var by=this.get(bv,bx);
return {left:bz.left-by.left,top:bz.top-by.top,right:bz.right-by.right,bottom:bz.bottom-by.bottom};
},getPosition:function(bd){return this.getRelative(bd,this.getOffsetParent(bd));
},getOffsetParent:function(bE){var bG=bE.offsetParent||document.body;
var bF=qx.bom.element.Style;

while(bG&&(!/^body|html$/i.test(bG.tagName)&&bF.get(bG,n)===v)){bG=bG.offsetParent;
}return bG;
}}});
})();
(function(){var w="qx.client",v="character",u="EndToEnd",t="input",s="textarea",r="StartToStart",q='character',p="qx.bom.Selection",o="button",n="#text",m="body";
qx.Class.define(p,{statics:{getSelectionObject:qx.core.Variant.select(w,{"mshtml":function(N){return N.selection;
},"default":function(bt){return qx.dom.Node.getWindow(bt).getSelection();
}}),get:qx.core.Variant.select(w,{"mshtml":function(bu){var bv=qx.bom.Range.get(qx.dom.Node.getDocument(bu));
return bv.text;
},"default":function(a){if(this.__hV(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(w,{"mshtml":function(bw){var by=this.get(bw);
var bx=qx.util.StringSplit.split(by,/\r\n/);
return by.length-(bx.length-1);
},"opera":function(g){var l,j,h;

if(this.__hV(g)){var k=g.selectionStart;
var i=g.selectionEnd;
l=g.value.substring(k,i);
j=i-k;
}else{l=qx.bom.Selection.get(g);
j=l.length;
}h=qx.util.StringSplit.split(l,/\r\n/);
return j-(h.length-1);
},"default":function(ba){if(this.__hV(ba)){return ba.selectionEnd-ba.selectionStart;
}else{return this.get(ba).length;
}}}),getStart:qx.core.Variant.select(w,{"mshtml":function(bc){if(this.__hV(bc)){var bh=qx.bom.Range.get();
if(!bc.contains(bh.parentElement())){return -1;
}var bi=qx.bom.Range.get(bc);
var bg=bc.value.length;
bi.moveToBookmark(bh.getBookmark());
bi.moveEnd(q,bg);
return bg-bi.text.length;
}else{var bi=qx.bom.Range.get(bc);
var be=bi.parentElement();
var bj=qx.bom.Range.get();
bj.moveToElementText(be);
var bd=qx.bom.Range.get(qx.dom.Node.getBodyElement(bc));
bd.setEndPoint(r,bi);
bd.setEndPoint(u,bj);
if(bj.compareEndPoints(r,bd)==0){return 0;
}var bf;
var bk=0;

while(true){bf=bd.moveStart(v,-1);
if(bj.compareEndPoints(r,bd)==0){break;
}if(bf==0){break;
}else{bk++;
}}return ++bk;
}},"gecko|webkit":function(V){if(this.__hV(V)){return V.selectionStart;
}else{var X=qx.dom.Node.getDocument(V);
var W=this.getSelectionObject(X);
if(W.anchorOffset<W.focusOffset){return W.anchorOffset;
}else{return W.focusOffset;
}}},"default":function(Y){if(this.__hV(Y)){return Y.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(Y)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(w,{"mshtml":function(E){if(this.__hV(E)){var J=qx.bom.Range.get();
if(!E.contains(J.parentElement())){return -1;
}var K=qx.bom.Range.get(E);
var I=E.value.length;
K.moveToBookmark(J.getBookmark());
K.moveStart(q,-I);
return K.text.length;
}else{var K=qx.bom.Range.get(E);
var G=K.parentElement();
var L=qx.bom.Range.get();
L.moveToElementText(G);
var I=L.text.length;
var F=qx.bom.Range.get(qx.dom.Node.getBodyElement(E));
F.setEndPoint(u,K);
F.setEndPoint(r,L);
if(L.compareEndPoints(u,F)==0){return I-1;
}var H;
var M=0;

while(true){H=F.moveEnd(v,1);
if(L.compareEndPoints(u,F)==0){break;
}if(H==0){break;
}else{M++;
}}return I-(++M);
}},"gecko|webkit":function(bq){if(this.__hV(bq)){return bq.selectionEnd;
}else{var bs=qx.dom.Node.getDocument(bq);
var br=this.getSelectionObject(bs);
if(br.focusOffset>br.anchorOffset){return br.focusOffset;
}else{return br.anchorOffset;
}}},"default":function(O){if(this.__hV(O)){return O.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(O)).focusOffset;
}}}),__hV:function(b){return qx.dom.Node.isElement(b)&&(b.nodeName.toLowerCase()==t||b.nodeName.toLowerCase()==s);
},set:qx.core.Variant.select(w,{"mshtml":function(bl,bm,bn){var bo;
if(qx.dom.Node.isDocument(bl)){bl=bl.body;
}
if(qx.dom.Node.isElement(bl)||qx.dom.Node.isText(bl)){switch(bl.nodeName.toLowerCase()){case t:case s:case o:if(bn===undefined){bn=bl.value.length;
}
if(bm>=0&&bm<=bl.value.length&&bn>=0&&bn<=bl.value.length){bo=qx.bom.Range.get(bl);
bo.collapse(true);
bo.moveStart(v,bm);
bo.moveEnd(v,bn-bm);
bo.select();
return true;
}break;
case n:if(bn===undefined){bn=bl.nodeValue.length;
}
if(bm>=0&&bm<=bl.nodeValue.length&&bn>=0&&bn<=bl.nodeValue.length){bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bo.moveToElementText(bl.parentNode);
bo.collapse(true);
bo.moveStart(v,bm);
bo.moveEnd(v,bn-bm);
bo.select();
return true;
}break;
default:if(bn===undefined){bn=bl.childNodes.length-1;
}if(bl.childNodes[bm]&&bl.childNodes[bn]){bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bo.moveToElementText(bl.childNodes[bm]);
bo.collapse(true);
var bp=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bp.moveToElementText(bl.childNodes[bn]);
bo.setEndPoint(u,bp);
bo.select();
return true;
}}}return false;
},"default":function(x,y,z){var D=x.nodeName.toLowerCase();

if(qx.dom.Node.isElement(x)&&(D==t||D==s)){if(z===undefined){z=x.value.length;
}if(y>=0&&y<=x.value.length&&z>=0&&z<=x.value.length){x.focus();
x.select();
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
}}),setAll:function(bb){return qx.bom.Selection.set(bb,0);
},clear:qx.core.Variant.select(w,{"mshtml":function(c){var d=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(c));
var e=qx.bom.Range.get(c);
var parent=e.parentElement();
var f=qx.bom.Range.get(qx.dom.Node.getDocument(c));
if(parent==f.parentElement()&&parent==c){d.empty();
}},"default":function(P){var R=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(P));
var T=P.nodeName.toLowerCase();
if(qx.dom.Node.isElement(P)&&(T==t||T==s)){P.setSelectionRange(0,0);
qx.bom.Element.blur(P);
}else if(qx.dom.Node.isDocument(P)||T==m){R.collapse(P.body?P.body:P,0);
}else{var S=qx.bom.Range.get(P);

if(!S.collapsed){var U;
var Q=S.commonAncestorContainer;
if(qx.dom.Node.isElement(P)&&qx.dom.Node.isText(Q)){U=Q.parentNode;
}else{U=Q;
}
if(U==P){R.collapse(P,0);
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
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
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
(function(){var d="qx.ui.core.queue.Widget",c="widget";
qx.Class.define(d,{statics:{__hW:{},remove:function(e){delete this.__hW[e.$$hash];
},add:function(a){var b=this.__hW;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(c);
},flush:function(){var f=this.__hW;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__hW={};
}}});
})();
(function(){var d="qx.ui.core.queue.Visibility",c="visibility";
qx.Class.define(d,{statics:{__hX:{},__hY:{},remove:function(e){var f=e.$$hash;
delete this.__hY[f];
delete this.__hX[f];
},isVisible:function(g){return this.__hY[g.$$hash]||false;
},__ia:function(m){var o=this.__hY;
var n=m.$$hash;
var p;
if(m.isExcluded()){p=false;
}else{var parent=m.$$parent;

if(parent){p=this.__ia(parent);
}else{p=m.isRootWidget();
}}return o[n]=p;
},add:function(a){var b=this.__hX;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(c);
},flush:function(){var h=this.__hX;
var l=this.__hY;
for(var i in h){if(l[i]!=null){h[i].addChildrenToQueue(h);
}}var k={};

for(var i in h){k[i]=l[i];
l[i]=null;
}for(var i in h){var j=h[i];
delete h[i];
if(l[i]==null){this.__ia(j);
}if(l[i]&&l[i]!=k[i]){j.checkAppearanceNeeds();
}}this.__hX={};
}}});
})();
(function(){var g="appearance",f="qx.ui.core.queue.Appearance";
qx.Class.define(f,{statics:{__ib:{},remove:function(j){delete this.__ib[j.$$hash];
},add:function(h){var i=this.__ib;

if(i[h.$$hash]){return;
}i[h.$$hash]=h;
qx.ui.core.queue.Manager.scheduleFlush(g);
},has:function(e){return !!this.__ib[e.$$hash];
},flush:function(){var d=qx.ui.core.queue.Visibility;
var a=this.__ib;
var c;

for(var b in a){c=a[b];
delete a[b];
if(d.isVisible(c)){c.syncAppearance();
}else{c.$$stateChanges=true;
}}}}});
})();
(function(){var e="dispose",d="qx.ui.core.queue.Dispose";
qx.Class.define(d,{statics:{__ic:{},add:function(f){var g=this.__ic;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(e);
},flush:function(){var a=this.__ic;

for(var c in a){var b=a[c];
delete a[c];
b.dispose();
}for(var c in a){return;
}this.__ic={};
}}});
})();
(function(){var f="none",e="qx.html.Decorator",d="absolute";
qx.Class.define(e,{extend:qx.html.Element,construct:function(a,b){arguments.callee.base.call(this);
this.__id=a;
this.__ie=b||a.toHashCode();
this.useMarkup(a.getMarkup());
var c={position:d,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){c.pointerEvents=f;
}this.setStyles(c);
},members:{__ie:null,__id:null,getId:function(){return this.__ie;
},getDecorator:function(){return this.__id;
},resize:function(g,h){this.__id.resize(this.getDomElement(),g,h);
},tint:function(i){this.__id.tint(this.getDomElement(),i);
},getInsets:function(){return this.__id.getInsets();
}},destruct:function(){this.__id=null;
}});
})();
(function(){var w="blur",v="focus",u="input",t="load",s="qx.ui.core.EventHandler",r="activate";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__if=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__if:null,__ig:{focusin:1,focusout:1,focus:1,blur:1},__ih:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(F,G){return F instanceof qx.ui.core.Widget;
},_dispatchEvent:function(a){var f=a.getTarget();
var e=qx.ui.core.Widget.getWidgetByElement(f);
var g=false;

while(e&&e.isAnonymous()){var g=true;
e=e.getLayoutParent();
}if(e&&g&&a.getType()==r){e.getContainerElement().activate();
}if(this.__ig[a.getType()]){e=e&&e.getFocusTarget();
if(!e){return;
}}if(a.getRelatedTarget){var p=a.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__ig[a.getType()]){o=o.getFocusTarget();
}if(o===e){return;
}}}var j=a.getCurrentTarget();
var m=qx.ui.core.Widget.getWidgetByElement(j);

if(!m||m.isAnonymous()){return;
}if(this.__ig[a.getType()]){m=m.getFocusTarget();
}var n=a.getType();

if(!m||!(m.isEnabled()||this.__ih[n])){return;
}var b=a.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var h=this.__if.getListeners(m,n,b);

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
},registerEvent:function(x,y,z){var A;

if(y===v||y===w){A=x.getFocusElement();
}else if(y===t||y===u){A=x.getContentElement();
}else{A=x.getContainerElement();
}
if(A){A.addListener(y,this._dispatchEvent,this,z);
}},unregisterEvent:function(B,C,D){var E;

if(C===v||C===w){E=B.getFocusElement();
}else if(C===t||C===u){E=B.getContentElement();
}else{E=B.getContainerElement();
}
if(E){E.removeListener(C,this._dispatchEvent,this,D);
}}},destruct:function(){this.__if=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Bootstrap.define(c,{statics:{LOCALE:"",VARIANT:"",__ii:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__ii();
}});
})();
(function(){var z="",y='indexOf',x='slice',w='concat',v='toLocaleLowerCase',u="qx.type.BaseString",t='match',s='toLocaleUpperCase',r='search',q='replace',j='toLowerCase',p='charCodeAt',n='split',h='substring',g='lastIndexOf',m='substr',k='toUpperCase',o='charAt';
qx.Class.define(u,{extend:Object,construct:function(f){var f=f||z;
this.__ij=f;
this.length=f.length;
},members:{$$isString:true,length:0,__ij:null,toString:function(){return this.__ij;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(a,b){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(c,d){{};
var e=[o,p,w,y,g,t,q,r,x,n,m,h,j,k,v,s];
d.valueOf=d.toString;

if(new c(z).valueOf()==null){delete d.valueOf;
}
for(var i=0,l=e.length;i<l;i++){d[e[i]]=String.prototype[e[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__ik=c;
this.__il=d;
},members:{__ik:null,__il:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ik,this.__il);
}}});
})();
(function(){var O="_",N="",M="qx.dynlocale",L="on",K="_applyLocale",J="changeLocale",I="C",H="qx.locale.Manager",G="String",F="singleton";
qx.Class.define(H,{type:F,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__im=qx.$$translations||{};
this.__in=qx.$$locales||{};
var R=qx.bom.client.Locale;
var P=R.LOCALE;
var Q=R.VARIANT;

if(Q!==N){P+=O+Q;
}this.setLocale(P||this.__io);
},statics:{tr:function(y,z){var A=qx.lang.Array.fromArguments(arguments);
A.splice(0,1);
return qx.locale.Manager.getInstance().translate(y,A);
},trn:function(bc,bd,be,bf){var bg=qx.lang.Array.fromArguments(arguments);
bg.splice(0,3);
if(be!=1){return qx.locale.Manager.getInstance().translate(bd,bg);
}else{return qx.locale.Manager.getInstance().translate(bc,bg);
}},trc:function(X,Y,ba){var bb=qx.lang.Array.fromArguments(arguments);
bb.splice(0,2);
return qx.locale.Manager.getInstance().translate(Y,bb);
},marktr:function(S){return S;
}},properties:{locale:{check:G,nullable:true,apply:K,event:J}},members:{__io:I,__ip:null,__iq:null,__im:null,__in:null,getLanguage:function(){return this.__iq;
},getTerritory:function(){return this.getLocale().split(O)[1]||N;
},getAvailableLocales:function(){var k=[];

for(var j in this.__in){if(j!=this.__io){k.push(j);
}}return k;
},__ir:function(l){var n;
var m=l.indexOf(O);

if(m==-1){n=l;
}else{n=l.substring(0,m);
}return n;
},_applyLocale:function(o,p){this.__ip=o;
this.__iq=this.__ir(o);
},addTranslation:function(B,C){var D=this.__im;

if(D[B]){for(var E in C){D[B][E]=C[E];
}}else{D[B]=C;
}},addLocale:function(T,U){var V=this.__in;

if(V[T]){for(var W in U){V[T][W]=U[W];
}}else{V[T]=U;
}},translate:function(a,b,c){var h;
var f=this.__im;

if(!f){return a;
}
if(c){var e=this.__ir(c);
}else{c=this.__ip;
e=this.__iq;
}
if(!h&&f[c]){h=f[c][a];
}
if(!h&&f[e]){h=f[e][a];
}
if(!h&&f[this.__io]){h=f[this.__io][a];
}
if(!h){h=a;
}
if(b.length>0){var d=[];

for(var i=0;i<b.length;i++){var g=b[i];

if(g&&g.translate){d[i]=g.translate();
}else{d[i]=g;
}}h=qx.lang.String.format(h,d);
}
if(qx.core.Variant.isSet(M,L)){h=new qx.locale.LocalizedString(h,a,b);
}return h;
},localize:function(q,r,s){var x;
var v=this.__in;

if(!v){return q;
}
if(s){var u=this.__ir(s);
}else{s=this.__ip;
u=this.__iq;
}
if(!x&&v[s]){x=v[s][q];
}
if(!x&&v[u]){x=v[u][q];
}
if(!x&&v[this.__io]){x=v[this.__io][q];
}
if(!x){x=q;
}
if(r.length>0){var t=[];

for(var i=0;i<r.length;i++){var w=r[i];

if(w.translate){t[i]=w.translate();
}else{t[i]=w;
}}x=qx.lang.String.format(x,t);
}
if(qx.core.Variant.isSet(M,L)){x=new qx.locale.LocalizedString(x,q,r);
}return x;
}},destruct:function(){this.__im=this.__in=null;
}});
})();
(function(){var m="source",l="scale",k="no-repeat",j="mshtml",i="qx.client",h="qx.html.Image";
qx.Class.define(h,{extend:qx.html.Element,members:{_applyProperty:function(name,b){arguments.callee.base.call(this,name,b);

if(name===m){var f=this.getDomElement();
var c=this.getAllStyles();
var d=this._getProperty(m);
var e=this._getProperty(l);
var g=e?l:k;
qx.bom.element.Decoration.update(f,d,g,c);
}},_createDomElement:function(){var q=this._getProperty(l);
var r=q?l:k;

if(qx.core.Variant.isSet(i,j)){var p=this._getProperty(m);
this.setNodeName(qx.bom.element.Decoration.getTagName(r,p));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(r));
}return arguments.callee.base.call(this);
},_copyData:function(n){return arguments.callee.base.call(this,true);
},setSource:function(o){this._setProperty(m,o);
return this;
},getSource:function(){return this._getProperty(m);
},resetSource:function(){this._removeProperty(m);
return this;
},setScale:function(a){this._setProperty(l,a);
return this;
},getScale:function(){return this._getProperty(l);
}}});
})();
(function(){var bf="nonScaled",be="scaled",bd="alphaScaled",bc=".png",bb="replacement",ba="hidden",Y="div",X="__is",W="Boolean",V="_applyScale",P="px",U="_applySource",S="-disabled.$1",O="img",N="changeSource",R="qx.client",Q="String",T="image",M="qx.ui.basic.Image";
qx.Class.define(M,{extend:qx.ui.core.Widget,construct:function(a){this.__is={};
arguments.callee.base.call(this);

if(a){this.setSource(a);
}},properties:{source:{check:Q,init:null,nullable:true,event:N,apply:U,themeable:true},scale:{check:W,init:false,themeable:true,apply:V},appearance:{refine:true,init:T},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__it:null,__iu:null,__iv:null,__is:null,getContentElement:function(){return this.__iz();
},_createContentElement:function(){return this.__iz();
},_getContentHint:function(){return {width:this.__it||0,height:this.__iu||0};
},_applyEnabled:function(f,g){arguments.callee.base.call(this,f,g);

if(this.getSource()){this._styleSource();
}},_applySource:function(A){this._styleSource();
},_applyScale:function(n){this._styleSource();
},__iw:function(e){this.__iv=e;
},__ix:function(){if(this.__iv==null){var bi=this.getSource();
var bh=false;

if(bi!=null){bh=qx.lang.String.endsWith(bi,bc);
}
if(this.getScale()&&bh&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iv=bd;
}else if(this.getScale()){this.__iv=be;
}else{this.__iv=bf;
}}return this.__iv;
},__iy:function(u){var v;
var w;

if(u==bd){v=true;
w=Y;
}else if(u==bf){v=false;
w=Y;
}else{v=true;
w=O;
}var x=new qx.html.Image(w);
x.setScale(v);
x.setStyles({"overflowX":ba,"overflowY":ba});
return x;
},__iz:function(){var bg=this.__ix();

if(this.__is[bg]==null){this.__is[bg]=this.__iy(bg);
}return this.__is[bg];
},_styleSource:function(){var I=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!I){this.getContentElement().resetSource();
return;
}this.__iA(I);
if(qx.util.ResourceManager.getInstance().has(I)){this.__iC(this.getContentElement(),I);
}else if(qx.io.ImageLoader.isLoaded(I)){this.__iD(this.getContentElement(),I);
}else{this.__iE(this.getContentElement(),I);
}},__iA:qx.core.Variant.select(R,{"mshtml":function(J){var L=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var K=qx.lang.String.endsWith(J,bc);

if(L&&K){if(this.getScale()&&this.__ix()!=bd){this.__iw(bd);
}else if(!this.getScale()&&this.__ix()!=bf){this.__iw(bf);
}}else{if(this.getScale()&&this.__ix()!=be){this.__iw(be);
}else if(!this.getScale()&&this.__ix()!=bf){this.__iw(bf);
}}this.__iB(this.__iz());
},"default":function(m){if(this.getScale()&&this.__ix()!=be){this.__iw(be);
}else if(!this.getScale()&&this.__ix(bf)){this.__iw(bf);
}this.__iB(this.__iz());
}}),__iB:function(B){var E=this.getContainerElement();
var F=E.getChild(0);

if(F!=B){if(F!=null){var H=P;
var C={};
var D=this.getInnerSize();

if(D!=null){C.width=D.width+H;
C.height=D.height+H;
}var G=this.getInsets();
C.left=G.left+H;
C.top=G.top+H;
B.setStyles(C,true);
B.setSelectable(this.getSelectable());
}E.removeAt(0);
E.addAt(B,0);
}},__iC:function(q,r){var t=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var s=r.replace(/\.([a-z]+)$/,S);

if(t.has(s)){r=s;
this.addState(bb);
}else{this.removeState(bb);
}}if(q.getSource()===r){return;
}q.setSource(r);
this.__iG(t.getImageWidth(r),t.getImageHeight(r));
},__iD:function(h,i){var k=qx.io.ImageLoader;
h.setSource(i);
var j=k.getWidth(i);
var l=k.getHeight(i);
this.__iG(j,l);
},__iE:function(b,c){var self;
var d=qx.io.ImageLoader;
{};
if(!d.isFailed(c)){d.load(c,this.__iF,this);
}else{if(b!=null){b.resetSource();
}}},__iF:function(y,z){if(y!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(z.failed){this.warn("Image could not be loaded: "+y);
}this._styleSource();
},__iG:function(o,p){if(o!==this.__it||p!==this.__iu){this.__it=o;
this.__iu=p;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(X);
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
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(g,this._onInterval,this);
h.start();
this.__iH=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__iH:null,_applyTimeoutInterval:function(a){this.__iH.setInterval(a);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__iH){this.__iH.stop();
}this.__iH=null;
}});
})();
(function(){var p="top",o="right",n="bottom",m="left",l="align-start",k="qx.util.placement.AbstractAxis",j="edge-start",i="align-end",h="edge-end",g="-",d="best-fit",f="qx.util.placement.Placement",e='__iI',c="keep-align",b="direct";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iI=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:k},axisY:{check:k},edge:{check:[p,o,n,m],init:p},align:{check:[p,o,n,m],init:o}},statics:{__iJ:null,compute:function(q,r,s,t,u,v,w){this.__iJ=this.__iJ||new qx.util.placement.Placement();
var z=u.split(g);
var y=z[0];
var x=z[1];
this.__iJ.set({axisX:this.__iN(v),axisY:this.__iN(w),edge:y,align:x});
return this.__iJ.compute(q,r,s,t);
},__iK:null,__iL:null,__iM:null,__iN:function(a){switch(a){case b:this.__iK=this.__iK||new qx.util.placement.DirectAxis();
return this.__iK;
case c:this.__iL=this.__iL||new qx.util.placement.KeepAlignAxis();
return this.__iL;
case d:this.__iM=this.__iM||new qx.util.placement.BestFitAxis();
return this.__iM;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__iI:null,compute:function(A,B,C,D){{};
var E=this.getAxisX()||this.__iI;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__iO());
var F=this.getAxisY()||this.__iI;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__iP());
return {left:G,top:top};
},__iO:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==m){return j;
}else if(K==o){return h;
}else if(J==m){return l;
}else if(J==o){return i;
}},__iP:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==p){return j;
}else if(I==n){return h;
}else if(H==p){return l;
}else if(H==n){return i;
}}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var i="edge-start",h="align-start",g="align-end",f="edge-end",e="qx.util.placement.AbstractAxis";
qx.Class.define(e,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(a,b,c,d){switch(d){case i:return b.start-c.end-a;
case f:return b.end+c.start;
case h:return b.start+c.start;
case g:return b.end-c.end-a;
}},_isInRange:function(j,k,l){return j>=0&&j+k<=l;
}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var g="qx.util.placement.BestFitAxis";
qx.Class.define(g,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(a,b,c,d,e){var f=this._moveToEdgeAndAlign(a,b,c,e);

if(this._isInRange(f,a,d)){return f;
}
if(f<0){f=Math.min(0,d-a);
}
if(f+a>d){f=Math.max(0,d-a);
}return f;
}}});
})();
(function(){var k="mousedown",j="blur",i="__iQ",h="singleton",g="qx.ui.popup.Manager";
qx.Class.define(g,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iQ={};
qx.event.Registration.addListener(document.documentElement,k,this.__iS,this,true);
qx.bom.Element.addListener(window,j,this.hideAll,this);
},members:{__iQ:null,add:function(f){{};
this.__iQ[f.$$hash]=f;
this.__iR();
},remove:function(o){{};
var p=this.__iQ;

if(p){delete p[o.$$hash];
this.__iR();
}},hideAll:function(){var r=this.__iQ;

if(r){for(var q in r){r[q].exclude();
}}},__iR:function(){var n=1e7;
var m=this.__iQ;

for(var l in m){m[l].setZIndex(n++);
}},__iS:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var d=this.__iQ;

for(var b in d){var a=d[b];

if(!a.getAutoHide()||c==a||qx.ui.core.Widget.contains(a,c)){continue;
}a.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,k,this.__iS,this,true);
this._disposeMap(i);
}});
})();
(function(){var e="abstract",d="qx.ui.layout.Abstract";
qx.Class.define(d,{type:e,extend:qx.core.Object,members:{__iT:null,_invalidChildrenCache:null,__iU:null,invalidateLayoutCache:function(){this.__iT=null;
},renderLayout:function(b,c){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__iT){return this.__iT;
}return this.__iT=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(i){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var h=this.__iU;

if(h instanceof qx.ui.core.LayoutItem){h.clearSeparators();
}},_renderSeparator:function(f,g){this.__iU.renderSeparator(f,g);
},connectToWidget:function(a){if(a&&this.__iU){throw new Error("It is not possible to manually set the connected widget.");
}this.__iU=a;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__iU;
},_applyLayoutChange:function(){if(this.__iU){this.__iU.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__iU.getLayoutChildren();
}},destruct:function(){this.__iU=this.__iT=null;
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
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var p="label",o="icon",n="Boolean",m="both",l="String",k="left",j="changeGap",i="changeShow",h="bottom",g="_applyCenter",C="changeIcon",B="qx.ui.basic.Atom",A="changeLabel",z="Integer",y="_applyIconPosition",x="top",w="right",v="_applyRich",u="_applyIcon",t="_applyShow",r="_applyLabel",s="_applyGap",q="atom";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(D,E){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(D!=null){this.setLabel(D);
}
if(E!=null){this.setIcon(E);
}},properties:{appearance:{refine:true,init:q},label:{apply:r,nullable:true,check:l,event:A},rich:{check:n,init:false,apply:v},icon:{check:l,apply:u,nullable:true,themeable:true,event:C},gap:{check:z,nullable:false,event:j,apply:s,themeable:true,init:4},show:{init:m,check:[m,p,o],themeable:true,inheritable:true,apply:t,event:i},iconPosition:{init:k,check:[x,w,h,k],themeable:true,apply:y},center:{init:false,check:n,themeable:true,apply:g}},members:{_createChildControlImpl:function(K){var L;

switch(K){case p:L=new qx.ui.basic.Label(this.getLabel());
L.setAnonymous(true);
L.setRich(this.getRich());
this._add(L);

if(this.getLabel()==null||this.getShow()===o){L.exclude();
}break;
case o:L=new qx.ui.basic.Image(this.getIcon());
L.setAnonymous(true);
this._addAt(L,0);

if(this.getIcon()==null||this.getShow()===p){L.exclude();
}break;
}return L||arguments.callee.base.call(this,K);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===o){this._excludeChildControl(p);
}else{this._showChildControl(p);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===p){this._excludeChildControl(o);
}else{this._showChildControl(o);
}},_applyLabel:function(M,N){var O=this.getChildControl(p,true);

if(O){O.setValue(M);
}this._handleLabel();
},_applyRich:function(F,G){var H=this.getChildControl(p,true);

if(H){H.setRich(F);
}},_applyIcon:function(P,Q){var R=this.getChildControl(o,true);

if(R){R.setSource(P);
}this._handleIcon();
},_applyGap:function(a,b){this._getLayout().setGap(a);
},_applyShow:function(c,d){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(I,J){this._getLayout().setIconPosition(I);
},_applyCenter:function(e,f){this._getLayout().setCenter(e);
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
(function(){var bh="middle",bg="qx.ui.layout.Util",bf="left",be="center",bd="top",bc="bottom",bb="right";
qx.Class.define(bg,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(O,P,Q){var S,W,R,X;
var T=P>Q;
var Y=Math.abs(P-Q);
var ba,U;
var V={};

for(W in O){S=O[W];
V[W]={potential:T?S.max-S.value:S.value-S.min,flex:T?S.flex:1/S.flex,offset:0};
}while(Y!=0){X=Infinity;
R=0;

for(W in V){S=V[W];

if(S.potential>0){R+=S.flex;
X=Math.min(X,S.potential/S.flex);
}}if(R==0){break;
}X=Math.min(Y,X*R)/R;
ba=0;

for(W in V){S=V[W];

if(S.potential>0){U=Math.min(Y,S.potential,Math.ceil(X*S.flex));
ba+=U-X*S.flex;

if(ba>=1){ba-=1;
U-=1;
}S.potential-=U;

if(T){S.offset+=U;
}else{S.offset-=U;
}Y-=U;
}}}return V;
},computeHorizontalAlignOffset:function(E,F,G,H,I){if(H==null){H=0;
}
if(I==null){I=0;
}var J=0;

switch(E){case bf:J=H;
break;
case bb:J=G-F-I;
break;
case be:J=Math.round((G-F)/2);
if(J<H){J=H;
}else if(J<I){J=Math.max(H,G-F-I);
}break;
}return J;
},computeVerticalAlignOffset:function(g,h,j,k,m){if(k==null){k=0;
}
if(m==null){m=0;
}var n=0;

switch(g){case bd:n=k;
break;
case bc:n=j-h-m;
break;
case bh:n=Math.round((j-h)/2);
if(n<k){n=k;
}else if(n<m){n=Math.max(k,j-h-m);
}break;
}return n;
},collapseMargins:function(bi){var bj=0,bl=0;

for(var i=0,l=arguments.length;i<l;i++){var bk=arguments[i];

if(bk<0){bl=Math.min(bl,bk);
}else if(bk>0){bj=Math.max(bj,bk);
}}return bj+bl;
},computeHorizontalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginLeft();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginRight(),bm[i].getMarginLeft());
}bp+=bm[l-1].getMarginRight();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginLeft()+bm[i].getMarginRight();
}bp+=(bn*(l-1));
}return bp;
},computeVerticalGaps:function(K,L,M){if(L==null){L=0;
}var N=0;

if(M){N+=K[0].getMarginTop();

for(var i=1,l=K.length;i<l;i+=1){N+=this.collapseMargins(L,K[i-1].getMarginBottom(),K[i].getMarginTop());
}N+=K[l-1].getMarginBottom();
}else{for(var i=1,l=K.length;i<l;i+=1){N+=K[i].getMarginTop()+K[i].getMarginBottom();
}N+=(L*(l-1));
}return N;
},computeHorizontalSeparatorGaps:function(o,p,q){var t=qx.theme.manager.Decoration.getInstance().resolve(q);
var s=t.getInsets();
var r=s.left+s.right;
var u=0;

for(var i=0,l=o.length;i<l;i++){var v=o[i];
u+=v.getMarginLeft()+v.getMarginRight();
}u+=(p+r+p)*(l-1);
return u;
},computeVerticalSeparatorGaps:function(w,x,y){var B=qx.theme.manager.Decoration.getInstance().resolve(y);
var A=B.getInsets();
var z=A.top+A.bottom;
var C=0;

for(var i=0,l=w.length;i<l;i++){var D=w[i];
C+=D.getMarginTop()+D.getMarginBottom();
}C+=(x+z+x)*(l-1);
return C;
},arrangeIdeals:function(a,b,c,d,e,f){if(b<a||e<d){if(b<a&&e<d){b=a;
e=d;
}else if(b<a){e-=(a-b);
b=a;
if(e<d){e=d;
}}else if(e<d){b-=(d-e);
e=d;
if(b<a){b=a;
}}}
if(b>c||e>f){if(b>c&&e>f){b=c;
e=f;
}else if(b>c){e+=(b-c);
b=c;
if(e>f){e=f;
}}else if(e>f){b+=(e-f);
e=f;
if(b>c){b=c;
}}}return {begin:b,end:e};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var p="qx.dynlocale",o="text",n="Boolean",m="qx.client",l="color",k="userSelect",j="changeLocale",i="enabled",h="none",g="on",K="_applyTextAlign",J="qx.ui.core.Widget",I="gecko",H="changeTextAlign",G="_applyWrap",F="changeValue",E="changeContent",D="qx.ui.basic.Label",C="A",B="_applyValue",w="center",x="_applyBuddy",u="String",v="textAlign",s="right",t="changeRich",q="_applyRich",r="click",y="label",z="webkit",A="left";
qx.Class.define(D,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(O){arguments.callee.base.call(this);

if(O!=null){this.setValue(O);
}
if(qx.core.Variant.isSet(p,g)){qx.locale.Manager.getInstance().addListener(j,this._onChangeLocale,this);
}},properties:{rich:{check:n,init:false,event:t,apply:q},wrap:{check:n,init:true,apply:G},value:{check:u,apply:B,event:F,nullable:true},buddy:{check:J,apply:x,nullable:true,init:null},textAlign:{check:[A,w,s],nullable:true,themeable:true,apply:K,event:H},appearance:{refine:true,init:y},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iV:null,__iW:null,__iX:null,__iY:null,_getContentHint:function(){if(this.__iW){this.__ja=this.__jb();
delete this.__iW;
}return {width:this.__ja.width,height:this.__ja.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(S){if(qx.core.Variant.isSet(m,I)){if(S&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,S);
if(qx.core.Variant.isSet(m,z)){this.getContainerElement().setStyle(k,S?o:h);
this.getContentElement().setStyle(k,S?o:h);
}},_getContentHeightForWidth:function(bb){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jb(bb).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(Q,R){this.getContentElement().setStyle(v,Q);
},_applyTextColor:function(d,f){if(d){this.getContentElement().setStyle(l,qx.theme.manager.Color.getInstance().resolve(d));
}else{this.getContentElement().removeStyle(l);
}},__ja:{width:0,height:0},_applyFont:function(L,M){var N;

if(L){this.__iV=qx.theme.manager.Font.getInstance().resolve(L);
N=this.__iV.getStyles();
}else{this.__iV=null;
N=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(N);
this.__iW=true;
qx.ui.core.queue.Layout.add(this);
},__jb:function(V){var ba=qx.bom.Label;
var X=this.getFont();
var W=X?this.__iV.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||C;
var Y=this.getRich();
return Y?ba.getHtmlSize(content,W,V):ba.getTextSize(content,W);
},_applyBuddy:function(b,c){if(c!=null){c.removeBinding(this.__iX);
this.__iX=null;
this.removeListenerById(this.__iY);
this.__iY=null;
}
if(b!=null){this.__iX=b.bind(i,this,i);
this.__iY=this.addListener(r,b.focus,b);
}},_applyRich:function(a){this.getContentElement().setRich(a);
this.__iW=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(bc,bd){if(bc&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(p,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(T,U){this.getContentElement().setValue(T);
this.__iW=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(E,T,U);
}},destruct:function(){if(qx.core.Variant.isSet(p,g)){qx.locale.Manager.getInstance().removeListener(j,this._onChangeLocale,this);
}if(this.__iX!=null){var P=this.getBuddy();

if(P!=null&&!P.isDisposed()){P.removeBinding(this.__iX);
}}this.__iV=this.__iX=null;
}});
})();
(function(){var g="value",f="Please use the getValue() method instead.",e="qx.html.Label",d="Please use the setValue() method instead.";
qx.Class.define(e,{extend:qx.html.Element,members:{__jc:null,_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==g){var i=this.getDomElement();
qx.bom.Label.setValue(i,h);
}},_createDomElement:function(){var c=this.__jc;
var b=qx.bom.Label.create(this._content,c);
return b;
},_copyData:function(m){return arguments.callee.base.call(this,true);
},setRich:function(k){var l=this.getDomElement();

if(l){throw new Error("The label mode cannot be modified after initial creation");
}k=!!k;

if(this.__jc==k){return;
}this.__jc=k;
return this;
},setValue:function(a){this._setProperty(g,a);
return this;
},getValue:function(){return this._getProperty(g);
},setContent:function(j){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.setValue(j);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.getValue();
}}});
})();
(function(){var u="qx.client",t="gecko",s="div",r="inherit",q="text",p="value",o="",n="hidden",m="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",l="nowrap",L="auto",K="ellipsis",J="normal",I="label",H="px",G="crop",F="end",E="100%",D="visible",C="qx.bom.Label",A="Please use the setValue() method instead.",B="opera",y="Please use the getValue() method instead.",z="block",w="none",x="-1000px",v="absolute";
qx.Class.define(C,{statics:{__jd:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__je:function(){var c=this.__jg(false);
document.body.insertBefore(c,document.body.firstChild);
return this._textElement=c;
},__jf:function(){var bg=this.__jg(true);
document.body.insertBefore(bg,document.body.firstChild);
return this._htmlElement=bg;
},__jg:function(R){var S=qx.bom.Element.create(s);
var T=S.style;
T.width=T.height=L;
T.left=T.top=x;
T.visibility=n;
T.position=v;
T.overflow=D;

if(R){T.whiteSpace=J;
}else{T.whiteSpace=l;

if(qx.core.Variant.isSet(u,t)){var U=document.createElementNS(m,I);
for(var V in this.__jd){U.style[V]=r;
}S.appendChild(U);
}}return S;
},__jh:function(j){var k={};

if(j){k.whiteSpace=J;
}else if(qx.core.Variant.isSet(u,t)){k.display=z;
}else{k.overflow=n;
k.whiteSpace=l;
k.textOverflow=K;
k.userSelect=w;
if(qx.core.Variant.isSet(u,B)){k.OTextOverflow=K;
}}return k;
},create:function(content,M,N){if(!N){N=window;
}
if(M){var O=N.document.createElement(s);
O.useHtml=true;
}else if(qx.core.Variant.isSet(u,t)){var O=N.document.createElement(s);
var P=N.document.createElementNS(m,I);
P.style.cursor=r;
P.style.color=r;
P.style.overflow=n;
P.style.maxWidth=E;
for(var Q in this.__jd){P.style[Q]=r;
}P.setAttribute(G,F);
O.appendChild(P);
}else{var O=N.document.createElement(s);
qx.bom.element.Style.setStyles(O,this.__jh(M));
}
if(content){this.setValue(O,content);
}return O;
},setValue:function(a,b){b=b||o;

if(a.useHtml){a.innerHTML=b;
}else if(qx.core.Variant.isSet(u,t)){a.firstChild.setAttribute(p,b);
}else{qx.bom.element.Attribute.set(a,q,b);
}},getValue:function(d){if(d.useHtml){return d.innerHTML;
}else if(qx.core.Variant.isSet(u,t)){return d.firstChild.getAttribute(p)||o;
}else{return qx.bom.element.Attribute.get(d,q);
}},getHtmlSize:function(content,bb,bc){var bd=this._htmlElement||this.__jf();
bd.style.width=bc!==undefined?bc+H:L;
bd.innerHTML=content;
return this.__ji(bd,bb);
},getTextSize:function(X,Y){var ba=this._textElement||this.__je();

if(qx.core.Variant.isSet(u,t)){ba.firstChild.setAttribute(p,X);
}else{qx.bom.element.Attribute.set(ba,q,X);
}return this.__ji(ba,Y);
},__ji:function(e,f){var g=this.__jd;

if(!f){f={};
}
for(var h in g){e.style[h]=f[h]||o;
}var i=qx.bom.element.Dimension.getSize(e);

if(qx.core.Variant.isSet(u,t)){if(!qx.bom.client.Platform.WIN){i.width++;
}}return i;
},setContent:function(be,bf){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
this.setValue(be,bf);
},getContent:function(W){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getValue(W);
}}});
})();
(function(){var h="mshtml",g="qx.client",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="paddingTop",b="paddingBottom";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(g,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.right)-Math.round(j.left);
}else{return i.offsetWidth;
}},"default":function(v){return v.offsetWidth;
}}),getHeight:qx.core.Variant.select(g,{"gecko":function(t){if(t.getBoundingClientRect){var u=t.getBoundingClientRect();
return Math.round(u.bottom)-Math.round(u.top);
}else{return t.offsetHeight;
}},"default":function(s){return s.offsetHeight;
}}),getSize:function(k){return {width:this.getWidth(k),height:this.getHeight(k)};
},__jj:{visible:true,hidden:true},getContentWidth:function(w){var y=qx.bom.element.Style;
var z=qx.bom.element.Overflow.getX(w);
var A=parseInt(y.get(w,d),10);
var C=parseInt(y.get(w,e),10);

if(this.__jj[z]){return w.clientWidth-A-C;
}else{if(w.clientWidth>=w.scrollWidth){return Math.max(w.clientWidth,w.scrollWidth)-A-C;
}else{var B=w.scrollWidth-A;
var x=qx.bom.client.Engine;

if(x.NAME===h&&x.VERSION==6){B-=C;
}return B;
}}},getContentHeight:function(l){var n=qx.bom.element.Style;
var p=qx.bom.element.Overflow.getY(l);
var q=parseInt(n.get(l,c),10);
var o=parseInt(n.get(l,b),10);

if(this.__jj[p]){return l.clientHeight-q-o;
}else{if(l.clientHeight>=l.scrollHeight){return Math.max(l.clientHeight,l.scrollHeight)-q-o;
}else{var r=l.scrollHeight-q;
var m=qx.bom.client.Engine;

if(m.NAME===h&&m.VERSION==6){r-=o;
}return r;
}}},getContentSize:function(a){return {width:this.getContentWidth(a),height:this.getContentHeight(a)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(d){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var j="Use 'getBlocker().getContentBlockerElement()' instead.",i="Use 'getBlocker().getBlockerElement()' instead.",h="_applyBlockerColor",g="Number",f="qx.ui.core.MBlocker",e="_applyBlockerOpacity",d="Color",c="__jk";
qx.Mixin.define(f,{construct:function(){this.__jk=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:d,init:null,nullable:true,apply:h,themeable:true},blockerOpacity:{check:g,init:1,apply:e,themeable:true}},members:{__jk:null,_applyBlockerColor:function(k,l){this.__jk.setColor(k);
},_applyBlockerOpacity:function(a,b){this.__jk.setOpacity(a);
},block:function(){this.__jk.block();
},isBlocked:function(){return this.__jk.isBlocked();
},unblock:function(){this.__jk.unblock();
},forceUnblock:function(){this.__jk.forceUnblock();
},blockContent:function(m){this.__jk.blockContent(m);
},isContentBlocked:function(){return this.__jk.isContentBlocked();
},unblockContent:function(){this.__jk.unblockContent();
},forceUnblockContent:function(){this.__jk.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.__jk.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__jk.getBlockerElement();
},getBlocker:function(){return this.__jk;
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var l="qx.ui.window.Window",k="changeModal",j="changeVisibility",i="changeActive",h="_applyActiveWindow",g="__jm",f="__jl",d="qx.ui.window.MDesktop";
qx.Mixin.define(d,{properties:{activeWindow:{check:l,apply:h,init:null,nullable:true}},members:{__jl:null,__jm:null,getWindowManager:function(){if(!this.__jm){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__jm;
},supportsMaximize:function(){return true;
},setWindowManager:function(c){if(this.__jm){this.__jm.setDesktop(null);
}c.setDesktop(this);
this.__jm=c;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(m,n){this.getWindowManager().changeActiveWindow(m,n);

if(m){m.setActive(true);
}
if(n){n.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(b){if(qx.Class.isDefined(l)&&b instanceof qx.ui.window.Window){this._addWindow(b);
}},_addWindow:function(o){if(!qx.lang.Array.contains(this.getWindows(),o)){this.getWindows().push(o);
o.addListener(i,this._onChangeActive,this);
o.addListener(k,this._onChangeModal,this);
o.addListener(j,this._onChangeVisibility,this);
}
if(o.getActive()){this.setActiveWindow(o);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(p){if(qx.Class.isDefined(l)&&p instanceof qx.ui.window.Window){this._removeWindow(p);
}},_removeWindow:function(a){qx.lang.Array.remove(this.getWindows(),a);
a.removeListener(i,this._onChangeActive,this);
a.removeListener(k,this._onChangeModal,this);
a.removeListener(j,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__jl){this.__jl=[];
}return this.__jl;
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(g);
}});
})();
(function(){var t="contextmenu",s="help",r="qx.client",q="changeGlobalCursor",p="abstract",o="Boolean",n="root",m="",l=" !important",k="_applyGlobalCursor",h="_applyNativeHelp",j=";",i="qx.ui.root.Abstract",g="String",f="*";
qx.Class.define(i,{type:p,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:g,nullable:true,themeable:true,apply:k,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__jn:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(r,{"mshtml":function(w,x){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__jn;

if(!B){this.__jn=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,f,qx.bom.element.Cursor.compile(y).replace(j,m)+l);
}}}),_applyNativeContextMenu:function(a,b){if(a){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(r,{"mshtml":function(c,d){if(d===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(c===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__jn=null;
},defer:function(u,v){qx.ui.core.MChildrenHandling.remap(v);
}});
})();
(function(){var o="resize",n="position",m="0px",l="webkit",k="paddingLeft",j="$$widget",i="qx.ui.root.Application",h="hidden",g="qx.client",f="div",b="paddingTop",d="100%",c="absolute";
qx.Class.define(i,{extend:qx.ui.root.Abstract,construct:function(a){this.__jo=qx.dom.Node.getWindow(a);
this.__jp=a;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__jo,o,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__jo:null,__jp:null,_createContainerElement:function(){var r=this.__jp;

if(qx.core.Variant.isSet(g,l)){if(!r.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var v=r.documentElement.style;
var s=r.body.style;
v.overflow=s.overflow=h;
v.padding=v.margin=s.padding=s.margin=m;
v.width=v.height=s.width=s.height=d;
var u=r.createElement(f);
r.body.appendChild(u);
var t=new qx.html.Root(u);
t.setStyle(n,c);
t.setAttribute(j,this.toHashCode());
return t;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var p=qx.bom.Viewport.getWidth(this.__jo);
var q=qx.bom.Viewport.getHeight(this.__jo);
return {minWidth:p,width:p,maxWidth:p,minHeight:q,height:q,maxHeight:q};
},_applyPadding:function(z,A,name){if(z&&(name==b||name==k)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,z,A,name);
},_applyDecorator:function(w,x){arguments.callee.base.call(this,w,x);

if(!w){return;
}var y=this.getDecoratorElement().getInsets();

if(y.left||y.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__jo=this.__jp=null;
}});
})();
(function(){var v="zIndex",u="px",t="keydown",s="deactivate",r="This method is not needed anymore.",q="resize",p="keyup",o="keypress",n="backgroundColor",m="_applyOpacity",I="Use 'getBlockerElement' instead.",H="__jv",G="opacity",F="interval",E="Tab",D="__jy",C="Color",B="qx.ui.root.Page",A="Use 'getContentBlockerElement' instead.",z="__jt",x="Number",y="qx.ui.core.Blocker",w="_applyColor";
qx.Class.define(y,{extend:qx.core.Object,construct:function(R){arguments.callee.base.call(this);
this._widget=R;
this._isPageRoot=(qx.Class.isDefined(B)&&R instanceof qx.ui.root.Page);

if(this._isPageRoot){R.addListener(q,this.__jz,this);
}this.__jq=[];
this.__jr=[];
this.__js=[];
},properties:{color:{check:C,init:null,nullable:true,apply:w,themeable:true},opacity:{check:x,init:1,apply:m,themeable:true}},members:{__jt:null,__ju:0,__jv:null,__js:null,__jq:null,__jr:null,__jw:null,__jx:0,__jy:null,_isPageRoot:false,_widget:null,__jz:function(e){var f=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:f.width,height:f.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:f.width,height:f.height});
}},_applyColor:function(g,h){var j=qx.theme.manager.Color.getInstance().resolve(g);
this.__jA(n,j);
},_applyOpacity:function(J,K){this.__jA(G,J);
},__jA:function(a,b){var c=[];
this.__jt&&c.push(this.__jt);
this.__jv&&c.push(this.__jv);

for(var i=0;i<c.length;i++){c[i].setStyle(a,b);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.__jx+=1;

if(this.__jx==1){this.__jw=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.__jx-=1;

if(this.__jx==0){this._widget.setAnonymous(this.__jw);
}},_backupActiveWidget:function(){var d=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__jq.push(d.getActive());
this.__jr.push(d.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var U=this.__jq.length;

if(U>0){var T=this.__jq[U-1];

if(T){qx.bom.Element.activate(T);
}this.__jq.pop();
}var S=this.__jr.length;

if(S>0){var T=this.__jr[S-1];

if(T){qx.bom.Element.focus(this.__jr[S-1]);
}this.__jr.pop();
}},__jB:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,I);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__jt){this.__jt=this.__jB();
this.__jt.setStyle(v,15);
this._widget.getContainerElement().add(this.__jt);
this.__jt.exclude();
}return this.__jt;
},block:function(){this.__ju++;

if(this.__ju<2){this._backupActiveWidget();
var V=this.getBlockerElement();
V.include();
V.activate();
V.addListener(s,this.__jG,this);
V.addListener(o,this.__jF,this);
V.addListener(t,this.__jF,this);
V.addListener(p,this.__jF,this);
}},isBlocked:function(){return this.__ju>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ju--;

if(this.__ju<1){this.__jC();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ju=0;
this.__jC();
},__jC:function(){this._restoreActiveWidget();
var P=this.getBlockerElement();
P.removeListener(s,this.__jG,this);
P.removeListener(o,this.__jF,this);
P.removeListener(t,this.__jF,this);
P.removeListener(p,this.__jF,this);
P.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__jv){this.__jv=this.__jB();
this._widget.getContentElement().add(this.__jv);
this.__jv.exclude();
}return this.__jv;
},blockContent:function(N){var O=this.getContentBlockerElement();
O.setStyle(v,N);
this.__js.push(N);

if(this.__js.length<2){O.include();

if(this._isPageRoot){if(!this.__jy){this.__jy=new qx.event.Timer(300);
this.__jy.addListener(F,this.__jE,this);
}this.__jy.start();
this.__jE();
}}},isContentBlocked:function(){return this.__js.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__js.pop();
var L=this.__js[this.__js.length-1];
var M=this.getContentBlockerElement();
M.setStyle(v,L);

if(this.__js.length<1){this.__jD();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__js=[];
var Q=this.getContentBlockerElement();
Q.setStyle(v,null);
this.__jD();
},__jD:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__jy.stop();
}},__jE:function(){var k=this._widget.getContainerElement().getDomElement();
var l=qx.dom.Node.getDocument(k);
this.getContentBlockerElement().setStyles({height:l.documentElement.scrollHeight+u,width:l.documentElement.scrollWidth+u});
},__jF:function(e){if(e.getKeyIdentifier()==E){e.stop();
}},__jG:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(q,this.__jz,this);
}this._disposeObjects(H,z,D);
this.__jw=this.__jq=this.__jr=this._widget=this.__js=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(w,x){arguments.callee.base.call(this);
var w=w?qx.theme.manager.Color.getInstance().resolve(w):null;
this.setStyles({position:d,width:u,height:u,opacity:x||0,backgroundColor:w});
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
}this.addListener(o,this.__jH,this);
this.addListener(p,this.__jH,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__jH:function(){var y=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,y,true);
}}});
})();
(function(){var x="keypress",w="__jI",v="focusout",u="activate",t="Tab",s="singleton",r="deactivate",q="focusin",p="qx.ui.core.FocusHandler";
qx.Class.define(p,{extend:qx.core.Object,type:s,construct:function(){arguments.callee.base.call(this);
this.__jI={};
},members:{__jI:null,__jJ:null,__jK:null,__jL:null,connectTo:function(T){T.addListener(x,this.__jM,this);
T.addListener(q,this._onFocusIn,this,true);
T.addListener(v,this._onFocusOut,this,true);
T.addListener(u,this._onActivate,this,true);
T.addListener(r,this._onDeactivate,this,true);
},addRoot:function(bf){this.__jI[bf.$$hash]=bf;
},removeRoot:function(S){delete this.__jI[S.$$hash];
},getActiveWidget:function(){return this.__jJ;
},isActive:function(W){return this.__jJ==W;
},getFocusedWidget:function(){return this.__jK;
},isFocused:function(E){return this.__jK==E;
},isFocusRoot:function(R){return !!this.__jI[R.$$hash];
},_onActivate:function(e){var I=e.getTarget();
this.__jJ=I;
var H=this.__jN(I);

if(H!=this.__jL){this.__jL=H;
}},_onDeactivate:function(e){var F=e.getTarget();

if(this.__jJ==F){this.__jJ=null;
}},_onFocusIn:function(e){var o=e.getTarget();

if(o!=this.__jK){this.__jK=o;
o.visualizeFocus();
}},_onFocusOut:function(e){var G=e.getTarget();

if(G==this.__jK){this.__jK=null;
G.visualizeBlur();
}},__jM:function(e){if(e.getKeyIdentifier()!=t){return;
}
if(!this.__jL){return;
}e.stopPropagation();
e.preventDefault();
var U=this.__jK;

if(!e.isShiftPressed()){var V=U?this.__jR(U):this.__jP();
}else{var V=U?this.__jS(U):this.__jQ();
}if(V){V.tabFocus();
}},__jN:function(C){var D=this.__jI;

while(C){if(D[C.$$hash]){return C;
}C=C.getLayoutParent();
}return null;
},__jO:function(a,b){if(a===b){return 0;
}var d=a.getTabIndex()||0;
var c=b.getTabIndex()||0;

if(d!=c){return d-c;
}var k=a.getContainerElement().getDomElement();
var j=b.getContainerElement().getDomElement();
var h=qx.bom.element.Location;
var g=h.get(k);
var f=h.get(j);
if(g.top!=f.top){return g.top-f.top;
}if(g.left!=f.left){return g.left-f.left;
}var m=a.getZIndex();
var n=b.getZIndex();

if(m!=n){return m-n;
}return 0;
},__jP:function(){return this.__jV(this.__jL,null);
},__jQ:function(){return this.__jW(this.__jL,null);
},__jR:function(J){var K=this.__jL;

if(K==J){return this.__jP();
}
while(J&&J.getAnonymous()){J=J.getLayoutParent();
}
if(J==null){return [];
}var L=[];
this.__jT(K,J,L);
L.sort(this.__jO);
var M=L.length;
return M>0?L[0]:this.__jP();
},__jS:function(X){var Y=this.__jL;

if(Y==X){return this.__jQ();
}
while(X&&X.getAnonymous()){X=X.getLayoutParent();
}
if(X==null){return [];
}var ba=[];
this.__jU(Y,X,ba);
ba.sort(this.__jO);
var bb=ba.length;
return bb>0?ba[bb-1]:this.__jQ();
},__jT:function(parent,y,z){var A=parent.getLayoutChildren();
var B;

for(var i=0,l=A.length;i<l;i++){B=A[i];
if(!(B instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(B)&&B.isEnabled()&&B.isVisible()){if(B.isTabable()&&this.__jO(y,B)<0){z.push(B);
}this.__jT(B,y,z);
}}},__jU:function(parent,N,O){var P=parent.getLayoutChildren();
var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
if(!(Q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Q)&&Q.isEnabled()&&Q.isVisible()){if(Q.isTabable()&&this.__jO(N,Q)>0){O.push(Q);
}this.__jU(Q,N,O);
}}},__jV:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__jO(be,bc)<0){bc=be;
}}bc=this.__jV(be,bc);
}}return bc;
},__jW:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__jO(bi,bg)>0){bg=bi;
}}bg=this.__jW(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(w);
this.__jK=this.__jJ=this.__jL=null;
}});
})();
(function(){var E="qx.client",D="head",C="text/css",B="stylesheet",A="}",z='@import "',y="{",x='";',w="qx.bom.Stylesheet",v="link",u="style";
qx.Class.define(w,{statics:{includeFile:function(q,r){if(!r){r=document;
}var s=r.createElement(v);
s.type=C;
s.rel=B;
s.href=qx.util.ResourceManager.getInstance().toUri(q);
var t=r.getElementsByTagName(D)[0];
t.appendChild(s);
},createElement:qx.core.Variant.select(E,{"mshtml":function(M){var N=document.createStyleSheet();

if(M){N.cssText=M;
}return N;
},"default":function(bf){var bg=document.createElement(u);
bg.type=C;

if(bf){bg.appendChild(document.createTextNode(bf));
}document.getElementsByTagName(D)[0].appendChild(bg);
return bg.sheet;
}}),addRule:qx.core.Variant.select(E,{"mshtml":function(e,f,g){e.addRule(f,g);
},"default":function(bc,bd,be){bc.insertRule(bd+y+be+A,bc.cssRules.length);
}}),removeRule:qx.core.Variant.select(E,{"mshtml":function(O,P){var Q=O.rules;
var R=Q.length;

for(var i=R-1;i>=0;--i){if(Q[i].selectorText==P){O.removeRule(i);
}}},"default":function(h,j){var k=h.cssRules;
var l=k.length;

for(var i=l-1;i>=0;--i){if(k[i].selectorText==j){h.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(E,{"mshtml":function(Y){var ba=Y.rules;
var bb=ba.length;

for(var i=bb-1;i>=0;i--){Y.removeRule(i);
}},"default":function(S){var T=S.cssRules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.deleteRule(i);
}}}),addImport:qx.core.Variant.select(E,{"mshtml":function(c,d){c.addImport(d);
},"default":function(a,b){a.insertRule(z+b+x,a.cssRules.length);
}}),removeImport:qx.core.Variant.select(E,{"mshtml":function(m,n){var o=m.imports;
var p=o.length;

for(var i=p-1;i>=0;i--){if(o[i].href==n){m.removeImport(i);
}}},"default":function(I,J){var K=I.cssRules;
var L=K.length;

for(var i=L-1;i>=0;i--){if(K[i].href==J){I.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(E,{"mshtml":function(F){var G=F.imports;
var H=G.length;

for(var i=H-1;i>=0;i--){F.removeImport(i);
}},"default":function(V){var W=V.cssRules;
var X=W.length;

for(var i=X-1;i>=0;i--){if(W[i].type==W[i].IMPORT_RULE){V.deleteRule(i);
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
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){arguments.callee.base.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var bb="_applyLayoutChange",ba="top",Y="left",X="middle",W="Decorator",V="center",U="_applyReversed",T="bottom",S="qx.ui.layout.VBox",R="Integer",P="right",Q="Boolean";
qx.Class.define(S,{extend:qx.ui.layout.Abstract,construct:function(bc,bd,be){arguments.callee.base.call(this);

if(bc){this.setSpacing(bc);
}
if(bd){this.setAlignY(bd);
}
if(be){this.setSeparator(be);
}},properties:{alignY:{check:[ba,X,T],init:ba,apply:bb},alignX:{check:[Y,V,P],init:Y,apply:bb},spacing:{check:R,init:0,apply:bb},separator:{check:W,nullable:true,apply:bb},reversed:{check:Q,init:false,apply:U}},members:{__jX:null,__jY:null,__ka:null,__kb:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kc:function(){var bk=this._getLayoutChildren();
var length=bk.length;
var bg=false;
var bf=this.__jX&&this.__jX.length!=length&&this.__jY&&this.__jX;
var bi;
var bh=bf?this.__jX:new Array(length);
var bj=bf?this.__jY:new Array(length);
if(this.getReversed()){bk=bk.concat().reverse();
}for(var i=0;i<length;i++){bi=bk[i].getLayoutProperties();

if(bi.height!=null){bh[i]=parseFloat(bi.height)/100;
}
if(bi.flex!=null){bj[i]=bi.flex;
bg=true;
}else{bj[i]=0;
}}if(!bf){this.__jX=bh;
this.__jY=bj;
}this.__ka=bg;
this.__kb=bk;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(r,s){if(this._invalidChildrenCache){this.__kc();
}var z=this.__kb;
var length=z.length;
var J=qx.ui.layout.Util;
var I=this.getSpacing();
var M=this.getSeparator();

if(M){var w=J.computeVerticalSeparatorGaps(z,I,M);
}else{var w=J.computeVerticalGaps(z,I,true);
}var i,u,v,D;
var E=[];
var K=w;

for(i=0;i<length;i+=1){D=this.__jX[i];
v=D!=null?Math.floor((s-w)*D):z[i].getSizeHint().height;
E.push(v);
K+=v;
}if(this.__ka&&K!=s){var B={};
var H,L;

for(i=0;i<length;i+=1){H=this.__jY[i];

if(H>0){A=z[i].getSizeHint();
B[i]={min:A.minHeight,value:E[i],max:A.maxHeight,flex:H};
}}var x=J.computeFlexOffsets(B,s,K);

for(i in x){L=x[i].offset;
E[i]+=L;
K+=L;
}}var top=z[0].getMarginTop();
if(K<s&&this.getAlignY()!=ba){top=s-K;

if(this.getAlignY()===X){top=Math.round(top/2);
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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kc();
}var g=qx.ui.layout.Util;
var q=this.__kb;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__jY[i];
var d=this.__jX[i];

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
}},destruct:function(){this.__jX=this.__jY=this.__kb=null;
}});
})();
(function(){var m="=",l="",k=";path=",j=";domain=",i=";expires=Thu, 01-Jan-1970 00:00:01 GMT",h="qx.bom.Cookie",g=";expires=",f=";",e=";secure";
qx.Class.define(h,{statics:{get:function(a){var b=document.cookie.indexOf(a+m);
var d=b+a.length+1;

if((!b)&&(a!=document.cookie.substring(0,a.length))){return null;
}
if(b==-1){return null;
}var c=document.cookie.indexOf(f,d);

if(c==-1){c=document.cookie.length;
}return unescape(document.cookie.substring(d,c));
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
},del:function(v,w,x){if(!qx.bom.Cookie.get(v)){return;
}var y=[v,m];

if(w){y.push(k,w);
}
if(x){y.push(j,x);
}y.push(i);
document.cookie=y.join(l);
}}});
})();
(function(){var j="String",i="qx.ui.embed.AbstractIframe",h="name",g="",f="_applySource",e="qx.event.type.Event",d="_applyFrameName";
qx.Class.define(i,{extend:qx.ui.core.Widget,construct:function(c){arguments.callee.base.call(this);

if(c){this.setSource(c);
}},events:{"load":e},properties:{source:{check:j,apply:f,nullable:true},frameName:{check:j,init:g,apply:d}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(k,l){this._getIframeElement().setSource(k);
},_applyFrameName:function(a,b){this._getIframeElement().setAttribute(h,a);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(k){this.getContentElement().setStyle(h,k);
},_applyOverflowY:function(j){this.getContentElement().setStyle(d,j);
}}});
})();
(function(){var t="qx.client",s="mousedown",r="load",q="help",p="mouseup",o="losecapture",n="contextmenu",m="none",l="display",k="repeat",K="Boolean",J="px",I="url(",H=")",G="gecko",F="div",E="DOMNodeInserted",D="_applyNativeHelp",C="/",B="appear",z="mshtml",A="__ke",x="block",y="qx.ui.embed.Iframe",v="iframe",w="absolute",u="qx/static/blank.gif";
qx.Class.define(y,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(L){if(L!=null){this.__kd=L;
}arguments.callee.base.call(this,L);
qx.event.Registration.addListener(document.body,s,this.block,this,true);
qx.event.Registration.addListener(document.body,p,this.release,this,true);
qx.event.Registration.addListener(document.body,o,this.release,this,true);
this.__ke=this._createBlockerElement();
this.getContainerElement().add(this.__ke);

if(qx.core.Variant.isSet(t,G)){this.addListenerOnce(B,function(e){var j=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(j,E,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:v},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:K,init:false,apply:D}},members:{__kd:null,__ke:null,renderLayout:function(d,top,f,g){arguments.callee.base.call(this,d,top,f,g);
var i=J;
var h=this.getInsets();
this.__ke.setStyles({"left":h.left+i,"top":h.top+i,"width":(f-h.left-h.right)+i,"height":(g-h.top-h.bottom)+i});
},_createContentElement:function(){var a=new qx.html.Iframe(this.__kd);
a.addListener(r,this._onIframeLoad,this);
return a;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var S=new qx.html.Element(F);
S.setStyles({"zIndex":20,"position":w,"display":m});
if(qx.core.Variant.isSet(t,z)){S.setStyles({backgroundImage:I+qx.util.ResourceManager.getInstance().toUri(u)+H,backgroundRepeat:k});
}return S;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(r);
},block:function(){this.__ke.setStyle(l,x);
},release:function(){this.__ke.setStyle(l,m);
},_applyNativeContextMenu:function(M,N){if(M!==false&&N!==false){return;
}var O=this.getDocument();

if(!O){return;
}
try{var P=O.documentElement;
}catch(e){return ;
}
if(N===false){qx.event.Registration.removeListener(P,n,this._onNativeContextMenu,this,true);
}
if(M===false){qx.event.Registration.addListener(P,n,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(t,{"mshtml":function(b,c){var document=this.getDocument();

if(!document){return;
}
try{if(c===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(b===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var R=this.getContentElement().getDomElement();
var Q=R.src;
if(Q.charAt(Q.length-1)==C){Q=Q.substring(0,Q.length-1);
}
if(Q!=this.getSource()){qx.bom.Iframe.getWindow(R).stop();
R.src=this.getSource();
}}},destruct:function(){this._disposeObjects(A);
qx.event.Registration.removeListener(document.body,s,this.block,this,true);
qx.event.Registration.removeListener(document.body,p,this.release,this,true);
qx.event.Registration.removeListener(document.body,o,this.release,this,true);
}});
})();
(function(){var f="source",e="name",d="qx.html.Iframe",c="qx.event.type.Event",b="iframe";
qx.Class.define(d,{extend:qx.html.Element,construct:function(g){arguments.callee.base.call(this,b);
this._setProperty(f,g);
},events:{"load":c},members:{_applyProperty:function(name,l){arguments.callee.base.call(this,name,l);

if(name==f){var m=this.getDomElement();
qx.bom.Iframe.setSource(m,l);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var n=this.getDomElement();

if(n){return qx.bom.Iframe.getWindow(n);
}else{return null;
}},getDocument:function(){var k=this.getDomElement();

if(k){return qx.bom.Iframe.getDocument(k);
}else{return null;
}},getBody:function(){var a=this.getDomElement();

if(a){return qx.bom.Iframe.getBody(a);
}else{return null;
}},setSource:function(j){this._setProperty(f,j);
return this;
},getSource:function(){return this._getProperty(f);
},setName:function(name){this.setAttribute(e,name);
return this;
},getName:function(){return this.getAttribute(e);
},reload:function(){var i=this.getDomElement();

if(i){var h=this.getSource();
this.setSource(null);
this.setSource(h);
}}}});
})();
(function(){var i="qx.event.handler.Iframe",h="load",g="iframe";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(j){qx.event.Registration.fireEvent(j,h);
})},members:{canHandleEvent:function(l,m){return l.tagName.toLowerCase()===g;
},registerEvent:function(d,e,f){},unregisterEvent:function(a,b,c){}},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var m="qx.client",l="webkit",k="body",j="iframe",i="qx.bom.Iframe";
qx.Class.define(i,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(o,p){var o=o?qx.lang.Object.clone(o):{};
var q=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var r in q){if(o[r]==null){o[r]=q[r];
}}return qx.bom.Element.create(j,o,p);
},getWindow:qx.core.Variant.select(m,{"mshtml|gecko":function(w){try{return w.contentWindow;
}catch(s){return null;
}},"default":function(e){try{var f=this.getDocument(e);
return f?f.defaultView:null;
}catch(t){return null;
}}}),getDocument:qx.core.Variant.select(m,{"mshtml":function(c){try{var d=this.getWindow(c);
return d?d.document:null;
}catch(A){return null;
}},"default":function(h){try{return h.contentDocument;
}catch(z){return null;
}}}),getBody:function(u){try{var v=this.getDocument(u);
return v?v.getElementsByTagName(k)[0]:null;
}catch(g){return null;
}},setSource:function(B,C){try{if(this.getWindow(B)&&qx.dom.Hierarchy.isRendered(B)){try{if(qx.core.Variant.isSet(m,l)&&qx.bom.client.Platform.MAC){var D=this.getContentWindow();

if(D){D.stop();
}}this.getWindow(B).location.replace(C);
}catch(y){B.src=C;
}}else{B.src=C;
}}catch(x){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(a){var b=this.getDocument(a);

try{if(b&&b.location){return b.location.href;
}}catch(n){}return null;
}}});
})();
(function(){var w="click",v="black",u="",t="red",s="inspector.components.Selector",r="qx.ui.root.Application",q="mousemove",p="_highlightOverlay",o="changeSelection",n="_catchClickLayer",l="solid",m="_highlightDecorator";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A){arguments.callee.base.call(this);
this.setJSWindow(A);
},properties:{selection:{event:o,nullable:true}},members:{setJSWindow:function(z){this._iFrameWindow=z;
this._addedWidgets=[];
this._root=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
this._createCatchClickLayer();
this._createHighlightStuff();
this.setSelection(null);
},getAddedWidgets:function(){return this._addedWidgets;
},start:function(){this._catchClickLayer.show();
},end:function(){this._catchClickLayer.hide();
},highlightFor:function(M,N){if(M.classname==r){return;
}this._highlight(M);
if(this._highlightTimerId!=null){window.clearTimeout(this._highlightTimerId);
}var self=this;
self._highlightTimerId=window.setTimeout(function(){self._highlightOverlay.hide();
self._highlightTimerId=null;
},N);
},_createCatchClickLayer:function(){this._catchClickLayer=new this._iFrameWindow.qx.ui.core.Widget();
this._addedWidgets.push(this._catchClickLayer);
this._catchClickLayer.setBackgroundColor(v);
this._catchClickLayer.setOpacity(0.1);
this._catchClickLayer.setZIndex(1e6-1);
this._catchClickLayer.hide();
this._root.add(this._catchClickLayer,{left:0,top:0,right:0,bottom:0});
this._catchClickLayer.addListener(w,function(e){this._catchClickLayer.hide();
var h=e.getDocumentLeft();
var j=e.getDocumentTop();
var k=this._searchWidget(this._root,h,j);
this._highlightOverlay.hide();
this.setSelection(k);
},this);
this._catchClickLayer.addListener(q,function(e){var H=e.getDocumentLeft();
var I=e.getDocumentTop();
var J=this._searchWidget(this._root,H,I,u);
this._highlight(J);
},this);
},_createHighlightStuff:function(){this._highlightDecorator=new this._iFrameWindow.qx.ui.decoration.Single(2,l,t);
this._addedWidgets.push(this._highlightDecorator);
this._highlightOverlay=new this._iFrameWindow.qx.ui.core.Widget();
this._addedWidgets.push(this._highlightOverlay);
this._highlightOverlay.setDecorator(this._highlightDecorator);
this._highlightOverlay.setZIndex(1e6-2);
this._highlightOverlay.hide();
this._root.add(this._highlightOverlay);
},_searchWidget:function(b,x,y){var c=b;
for(var i=0;i<b._getChildren().length;i++){var f=b._getChildren()[i];
if(f==this._catchClickLayer||f==this._highlightOverlay){continue;
}try{if(f instanceof this._iFrameWindow.qx.ui.core.Spacer){continue;
}}catch(a){}if(f.getContainerElement){var g=f.getContainerElement().getDomElement();
}else if(f.getDomElement){var g=f.getDomElement();
}else{return f;
}var d=this._getCoordinates(g);
if(d!=null){if(d.right>=x&&d.left<=x&&d.bottom>=y&&d.top<=y){c=this._searchWidget(f,x,y);
}}}return c;
},_getCoordinates:function(K){if(K==null){return null;
}var L={};
L.left=qx.bom.element.Location.getLeft(K);
L.right=qx.bom.element.Location.getRight(K);
L.top=qx.bom.element.Location.getTop(K);
L.bottom=qx.bom.element.Location.getBottom(K);
return L;
},_highlight:function(B){var F=null;

if(B.getContainerElement&&B.getContainerElement().getDomElement){F=B.getContainerElement().getDomElement();
}else if(B.getDomElement){F=B.getDomElement();
}if(F==null){this._highlightOverlay.hide();
return;
}var E=this._getCoordinates(F);
var G=E.left-2;
var C=E.right+2;
var top=E.top-2;
var D=E.bottom+2;
this._highlightOverlay.renderLayout(G,top,C-G,D-top);
this._highlightOverlay.show();
}},destruct:function(){this._iFrameWindow=this._addedWidgets=this._root=null;
this._disposeObjects(n,m,p);
}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__kf:false,_setAllowMenuOpenHover:function(m){this.__kf=m;
},_isAllowMenuOpenHover:function(){return this.__kf;
},_applySpacing:function(q,r){var s=this._getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSpacer:function(){var t=new qx.ui.core.Spacer;
this._add(t,{flex:1});
return t;
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
(function(){var q="_applyLayoutChange",p="left",o="center",n="top",m="Decorator",k="middle",j="_applyReversed",h="bottom",g="Boolean",f="right",d="Integer",e="qx.ui.layout.HBox";
qx.Class.define(e,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){arguments.callee.base.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignX(b);
}
if(c){this.setSeparator(c);
}},properties:{alignX:{check:[p,o,f],init:p,apply:q},alignY:{check:[n,k,h],init:n,apply:q},spacing:{check:d,init:0,apply:q},separator:{check:m,nullable:true,apply:q},reversed:{check:g,init:false,apply:j}},members:{__kg:null,__kh:null,__ki:null,__kj:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kk:function(){var U=this._getLayoutChildren();
var length=U.length;
var R=false;
var P=this.__kg&&this.__kg.length!=length&&this.__kh&&this.__kg;
var S;
var Q=P?this.__kg:new Array(length);
var T=P?this.__kh:new Array(length);
if(this.getReversed()){U=U.concat().reverse();
}for(var i=0;i<length;i++){S=U[i].getLayoutProperties();

if(S.width!=null){Q[i]=parseFloat(S.width)/100;
}
if(S.flex!=null){T[i]=S.flex;
R=true;
}else{T[i]=0;
}}if(!P){this.__kg=Q;
this.__kh=T;
}this.__ki=R;
this.__kj=U;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(r,s){if(this._invalidChildrenCache){this.__kk();
}var y=this.__kj;
var length=y.length;
var H=qx.ui.layout.Util;
var G=this.getSpacing();
var K=this.getSeparator();

if(K){var v=H.computeHorizontalSeparatorGaps(y,G,K);
}else{var v=H.computeHorizontalGaps(y,G,true);
}var i,t,E,D;
var J=[];
var z=v;

for(i=0;i<length;i+=1){D=this.__kg[i];
E=D!=null?Math.floor((r-v)*D):y[i].getSizeHint().width;
J.push(E);
z+=E;
}if(this.__ki&&z!=r){var B={};
var F,I;

for(i=0;i<length;i+=1){F=this.__kh[i];

if(F>0){A=y[i].getSizeHint();
B[i]={min:A.minWidth,value:J[i],max:A.maxWidth,flex:F};
}}var w=H.computeFlexOffsets(B,r,z);

for(i in w){I=w[i].offset;
J[i]+=I;
z+=I;
}}var O=y[0].getMarginLeft();
if(z<r&&this.getAlignX()!=p){O=r-z;

if(this.getAlignX()===o){O=Math.round(O/2);
}}var A,top,u,E,x,M,C;
var G=this.getSpacing();
this._clearSeparators();
if(K){var L=qx.theme.manager.Decoration.getInstance().resolve(K).getInsets();
var N=L.left+L.right;
}for(i=0;i<length;i+=1){t=y[i];
E=J[i];
A=t.getSizeHint();
M=t.getMarginTop();
C=t.getMarginBottom();
u=Math.max(A.minHeight,Math.min(s-M-C,A.maxHeight));
top=H.computeVerticalAlignOffset(t.getAlignY()||this.getAlignY(),u,s,M,C);
if(i>0){if(K){O+=x+G;
this._renderSeparator(K,{left:O,top:0,width:N,height:s});
O+=N+G+t.getMarginLeft();
}else{O+=H.collapseMargins(G,x,t.getMarginLeft());
}}t.renderLayout(O,top,E,u);
O+=E;
x=t.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kk();
}var bc=qx.ui.layout.Util;
var bk=this.__kj;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__kh[i];
var X=this.__kg[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__kg=this.__kh=this.__kj=null;
}});
})();
(function(){var c="qx.ui.core.Spacer";
qx.Class.define(c,{extend:qx.ui.core.LayoutItem,construct:function(a,b){arguments.callee.base.call(this);
this.setWidth(a!=null?a:0);
this.setHeight(b!=null?b:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kl:null,__km:false,__kn:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__km){this.__km=false;
}else{this.__km=true;
o.execute(this);
}}this.fireEvent(n);
},__ko:function(e){if(this.__km){this.__km=false;
return;
}this.__km=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__kn);
}
if(p!=null){this.__kn=p.addListener(n,this.__ko,this);
}var t=this.__kl;

if(t==null){this.__kl=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__kl=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var q="pressed",p="abandoned",o="hovered",n="Enter",m="Space",l="dblclick",k="qx.ui.form.Button",j="mouseup",i="mousedown",h="mouseover",d="mouseout",g="keydown",f="button",c="keyup";
qx.Class.define(k,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){arguments.callee.base.call(this,r,s);

if(t!=null){this.setCommand(t);
}this.addListener(h,this._onMouseOver);
this.addListener(d,this._onMouseOut);
this.addListener(i,this._onMouseDown);
this.addListener(j,this._onMouseUp);
this.addListener(g,this._onKeyDown);
this.addListener(c,this._onKeyUp);
this.addListener(l,this._onStopEvent);
},properties:{appearance:{refine:true,init:f},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(p)){return;
}this.addState(q);
},release:function(){if(this.hasState(q)){this.removeState(q);
}},reset:function(){this.removeState(q);
this.removeState(p);
this.removeState(o);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(p)){this.removeState(p);
this.addState(q);
}this.addState(o);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(o);

if(this.hasState(q)){this.removeState(q);
this.addState(p);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(p);
this.addState(q);
},_onMouseUp:function(e){this.releaseCapture();
var a=this.hasState(q);
var b=this.hasState(p);

if(a){this.removeState(q);
}
if(b){this.removeState(p);
}else{this.addState(o);

if(a){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case n:case m:this.removeState(p);
this.addState(q);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case n:case m:if(this.hasState(q)){this.removeState(p);
this.removeState(q);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var p="pressed",o="hovered",n="changeVisibility",m="qx.ui.menu.Menu",l="submenu",k="Enter",j="contextmenu",i="changeMenu",h="qx.ui.form.MenuButton",g="abandoned",f="_applyMenu";
qx.Class.define(h,{extend:qx.ui.form.Button,construct:function(r,s,t){arguments.callee.base.call(this,r,s);
if(t!=null){this.setMenu(t);
}},properties:{menu:{check:m,nullable:true,apply:f,event:i}},members:{_applyMenu:function(v,w){if(w){w.removeListener(n,this._onMenuChange,this);
w.resetOpener();
}
if(v){v.addListener(n,this._onMenuChange,this);
v.setOpener(this);
v.removeState(l);
v.removeState(j);
}},open:function(a){var b=this.getMenu();

if(b){qx.ui.menu.Manager.getInstance().hideAll();
b.setOpener(this);
b.open();
if(a){var c=b.getSelectables()[0];

if(c){b.setSelectedButton(c);
}}}},_onMenuChange:function(e){var u=this.getMenu();

if(u.isVisible()){this.addState(p);
}else{this.removeState(p);
}},_onMouseDown:function(e){var d=this.getMenu();

if(d){if(!d.isVisible()){this.open();
}else{d.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(o);
},_onMouseOut:function(e){this.removeState(o);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case k:this.removeState(g);
this.addState(p);
var q=this.getMenu();

if(q){if(!q.isVisible()){this.open();
}else{q.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var l="pressed",k="hovered",j="inherit",i="qx.ui.menubar.Button",h="keydown",g="menubar-button",f="keyup";
qx.Class.define(i,{extend:qx.ui.form.MenuButton,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(h,this._onKeyDown);
this.removeListener(f,this._onKeyUp);
},properties:{appearance:{refine:true,init:g},show:{refine:true,init:j},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(m){arguments.callee.base.call(this,m);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var d=this.getMenu();
var menubar=this.getMenuBar();

if(d.isVisible()){this.addState(l);
if(menubar){menubar.setOpenMenu(d);
}}else{this.removeState(l);
if(menubar&&menubar.getOpenMenu()==d){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(l)){this.addState(l);
}},_onMouseOver:function(e){this.addState(k);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var B="keypress",A="interval",z="keydown",y="mousedown",x="keyup",w="__kr",v="blur",u="Enter",t="__kp",s="Up",m="Escape",r="qx.ui.menu.Manager",p="Left",l="__kq",k="Down",o="Right",n="singleton",q="Space";
qx.Class.define(r,{type:n,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kp=[];
var X=document.body;
var Y=qx.event.Registration;
Y.addListener(window.document.documentElement,y,this._onMouseDown,this,true);
Y.addListener(X,z,this._onKeyUpDown,this,true);
Y.addListener(X,x,this._onKeyUpDown,this,true);
Y.addListener(X,B,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,v,this.hideAll,this);
this.__kq=new qx.event.Timer;
this.__kq.addListener(A,this._onOpenInterval,this);
this.__kr=new qx.event.Timer;
this.__kr.addListener(A,this._onCloseInterval,this);
},members:{__ks:null,__kt:null,__kq:null,__kr:null,__kp:null,_getChild:function(bm,bn,bo,bp){var bq=bm.getChildren();
var length=bq.length;
var br;

for(var i=bn;i<length&&i>=0;i+=bo){br=bq[i];

if(br.isEnabled()&&!br.isAnonymous()){return br;
}}
if(bp){i=i==length?0:length-1;

for(;i!=bn;i+=bo){br=bq[i];

if(br.isEnabled()&&!br.isAnonymous()){return br;
}}}return null;
},_isInMenu:function(ba){while(ba){if(ba instanceof qx.ui.menu.Menu){return true;
}ba=ba.getLayoutParent();
}return false;
},_getMenuButton:function(U){while(U){if(U instanceof qx.ui.menu.AbstractButton){return U;
}U=U.getLayoutParent();
}return null;
},add:function(bk){{};
var bl=this.__kp;
bl.push(bk);
bk.setZIndex(1e6+bl.length);
},remove:function(G){{};
var H=this.__kp;

if(H){qx.lang.Array.remove(H,G);
}},hideAll:function(){var bc=this.__kp;

if(bc){for(var i=bc.length-1;i>=0;i--){bc[i].exclude();
}}},getActiveMenu:function(){var bd=this.__kp;
return bd.length>0?bd[bd.length-1]:null;
},scheduleOpen:function(bb){this.cancelClose(bb);
if(bb.isVisible()){if(this.__ks){this.cancelOpen(this.__ks);
}}else if(this.__ks!=bb){this.__ks=bb;
this.__kq.restartWith(bb.getOpenInterval());
}},scheduleClose:function(bB){this.cancelOpen(bB);
if(!bB.isVisible()){if(this.__kt){this.cancelClose(this.__kt);
}}else if(this.__kt!=bB){this.__kt=bB;
this.__kr.restartWith(bB.getCloseInterval());
}},cancelOpen:function(bj){if(this.__ks==bj){this.__kq.stop();
this.__ks=null;
}},cancelClose:function(V){if(this.__kt==V){this.__kr.stop();
this.__kt=null;
}},_onOpenInterval:function(e){this.__kq.stop();
this.__ks.open();
this.__ks=null;
},_onCloseInterval:function(e){this.__kr.stop();
this.__kt.exclude();
this.__kt=null;
},_onMouseDown:function(e){var W=e.getTarget();
W=qx.ui.core.Widget.getWidgetByElement(W);
if(W==null){this.hideAll();
return;
}if(W.getMenu&&W.getMenu()&&W.getMenu().isVisible()){return;
}if(this.__kp.length>0&&!this._isInMenu(W)){this.hideAll();
}},__ku:{"Enter":1,"Space":1},__kv:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bC=this.getActiveMenu();

if(!bC){return;
}var bD=e.getKeyIdentifier();

if(this.__kv[bD]||(this.__ku[bD]&&bC.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var be=this.getActiveMenu();

if(!be){return;
}var bf=e.getKeyIdentifier();
var bh=this.__kv[bf];
var bg=this.__ku[bf];

if(bh){switch(bf){case s:this._onKeyPressUp(be);
break;
case k:this._onKeyPressDown(be);
break;
case p:this._onKeyPressLeft(be);
break;
case o:this._onKeyPressRight(be);
break;
case m:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bg){var bi=be.getSelectedButton();

if(bi){switch(bf){case u:this._onKeyPressEnter(be,bi,e);
break;
case q:this._onKeyPressSpace(be,bi,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(I){var J=I.getSelectedButton();
var K=I.getChildren();
var M=J?I.indexOf(J)-1:K.length-1;
var L=this._getChild(I,M,-1,true);
if(L){I.setSelectedButton(L);
}else{I.resetSelectedButton();
}},_onKeyPressDown:function(C){var D=C.getSelectedButton();
var F=D?C.indexOf(D)+1:0;
var E=this._getChild(C,F,1,true);
if(E){C.setSelectedButton(E);
}else{C.resetSelectedButton();
}},_onKeyPressLeft:function(N){var S=N.getOpener();

if(!S){return;
}if(S instanceof qx.ui.menu.Button){var P=S.getLayoutParent();
P.resetOpenedButton();
P.setSelectedButton(S);
}else if(S instanceof qx.ui.menubar.Button){var R=S.getMenuBar().getMenuButtons();
var O=R.indexOf(S);
if(O===-1){return;
}var T=null;
var length=R.length;

for(var i=1;i<=length;i++){var Q=R[(O-i+length)%length];

if(Q.isEnabled()){T=Q;
break;
}}
if(T&&T!=S){T.open(true);
}}},_onKeyPressRight:function(bs){var bu=bs.getSelectedButton();
if(bu){var bt=bu.getMenu();

if(bt){bs.setOpenedButton(bu);
var bA=this._getChild(bt,0,1);

if(bA){bt.setSelectedButton(bA);
}return;
}}else if(!bs.getOpenedButton()){var bA=this._getChild(bs,0,1);

if(bA){bs.setSelectedButton(bA);

if(bA.getMenu()){bs.setOpenedButton(bA);
}return;
}}var by=bs.getOpener();
if(by instanceof qx.ui.menu.Button&&bu){while(by){by=by.getLayoutParent();

if(by instanceof qx.ui.menu.Menu){by=by.getOpener();

if(by instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!by){return;
}}if(by instanceof qx.ui.menubar.Button){var bx=by.getMenuBar().getMenuButtons();
var bv=bx.indexOf(by);
if(bv===-1){return;
}var bz=null;
var length=bx.length;

for(var i=1;i<=length;i++){var bw=bx[(bv+i)%length];

if(bw.isEnabled()){bz=bw;
break;
}}
if(bz&&bz!=by){bz.open(true);
}}},_onKeyPressEnter:function(c,d,e){if(d.hasListener(B)){var f=e.clone();
f.setBubbles(false);
f.setTarget(d);
d.dispatchEvent(f);
}this.hideAll();
},_onKeyPressSpace:function(g,h,e){if(h.hasListener(B)){var j=e.clone();
j.setBubbles(false);
j.setTarget(h);
h.dispatchEvent(j);
}}},destruct:function(){var b=qx.event.Registration;
var a=document.body;
b.removeListener(window.document.documentElement,y,this._onMouseDown,this,true);
b.removeListener(a,z,this._onKeyUpDown,this,true);
b.removeListener(a,x,this._onKeyUpDown,this,true);
b.removeListener(a,B,this._onKeyPress,this,true);
this._disposeObjects(l,w);
this._disposeArray(t);
}});
})();
(function(){var C="slidebar",B="Integer",A="resize",z="qx.ui.core.Widget",y="selected",x="visible",w="Boolean",v="mouseout",u="excluded",t="menu",R="_applySelectedButton",Q="_applySpacingY",P="_blocker",O="_applyCloseInterval",N="_applyBlockerColor",M="_applyIconColumnWidth",L="mouseover",K="_applyArrowColumnWidth",J="qx.ui.menu.Menu",I="Color",G="Number",H="_applyOpenInterval",E="_applySpacingX",F="_applyBlockerOpacity",D="_applyOpenedButton";
qx.Class.define(J,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var g=this.getApplicationRoot();
g.add(this);
this.addListener(L,this._onMouseOver);
this.addListener(v,this._onMouseOut);
this.addListener(A,this._onResize,this);
g.addListener(A,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(g);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:t},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:u},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:B,apply:E,init:0,themeable:true},spacingY:{check:B,apply:Q,init:0,themeable:true},iconColumnWidth:{check:B,init:0,themeable:true,apply:M},arrowColumnWidth:{check:B,init:0,themeable:true,apply:K},blockerColor:{check:I,init:null,nullable:true,apply:N,themeable:true},blockerOpacity:{check:G,init:1,apply:F,themeable:true},selectedButton:{check:z,nullable:true,apply:R},openedButton:{check:z,nullable:true,apply:D},opener:{check:z,nullable:true},openInterval:{check:B,themeable:true,init:250,apply:H},closeInterval:{check:B,themeable:true,init:250,apply:O},blockBackground:{check:w,themeable:true,init:false}},members:{__kw:null,__kx:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__kz();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__kz();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(a){this.placeToPoint(a);
this.__kz();
this.show();
this._placementTarget=a;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var U=[];
var V=this.getChildren();

for(var i=0;i<V.length;i++){if(V[i].isEnabled()){U.push(V[i]);
}}return U;
},_applyIconColumnWidth:function(S,T){this._getMenuLayout().setIconColumnWidth(S);
},_applyArrowColumnWidth:function(bo,bp){this._getMenuLayout().setArrowColumnWidth(bo);
},_applySpacingX:function(be,bf){this._getMenuLayout().setColumnSpacing(be);
},_applySpacingY:function(h,j){this._getMenuLayout().setSpacing(h);
},_applyVisibility:function(W,X){arguments.callee.base.call(this,W,X);
var Y=qx.ui.menu.Manager.getInstance();

if(W===x){Y.add(this);
var ba=this.getParentMenu();

if(ba){ba.setOpenedButton(this.getOpener());
}}else if(X===x){Y.remove(this);
var ba=this.getParentMenu();

if(ba&&ba.getOpenedButton()==this.getOpener()){ba.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__ky();
},__ky:function(){if(this.isVisible()){if(this.getBlockBackground()){var bd=this.getZIndex();
this._blocker.blockContent(bd-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var k=this.getOpener();

if(!k||!(k instanceof qx.ui.menu.AbstractButton)){return null;
}
while(k&&!(k instanceof qx.ui.menu.Menu)){k=k.getLayoutParent();
}return k;
},_applySelectedButton:function(d,f){if(f){f.removeState(y);
}
if(d){d.addState(y);
}},_applyOpenedButton:function(bb,bc){if(bc){bc.getMenu().exclude();
}
if(bb){bb.getMenu().open();
}},_applyBlockerColor:function(bm,bn){this._blocker.setColor(bm);
},_applyBlockerOpacity:function(b,c){this._blocker.setOpacity(b);
},_createChildControlImpl:function(bh){var bi;

switch(bh){case C:var bi=new qx.ui.menu.MenuSlideBar();
var bk=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bj=bi.getLayout();
bi.setLayout(bk);
bj.dispose();
var bl=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bl.length;i++){bi.add(bl[i]);
}this.removeListener(A,this._onResize,this);
bi.getChildrenContainer().addListener(A,this._onResize,this);
this.add(bi);
break;
}return bi||arguments.callee.base.call(this,bh);
},_getMenuLayout:function(){if(this.hasChildControl(C)){return this.getChildControl(C).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(C)){return this.getChildControl(C).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__kz:function(){var m=this._getMenuBounds();

if(!m){this.addListenerOnce(A,this.__kz,this);
return;
}var l=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var n=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(m.height+top);
this.moveTo(n,0);
});
}else if(top+m.height>l){this._assertSlideBar(function(){this.setHeight(l-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(o){if(this.hasChildControl(C)){return o.call(this);
}this.__kx=o;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(C);

if(this.__kx){this.__kx.call(this);
delete this.__kx;
}},_onResize:function(){if(this.isVisible()){var bg=this._placementTarget;

if(!bg){return;
}else if(bg instanceof qx.ui.core.Widget){this.placeToWidget(bg);
}else if(bg.top!==undefined){this.placeToPoint(bg);
}else{throw new Error("Unknown target: "+bg);
}this.__kz();
}},_onMouseOver:function(e){var q=qx.ui.menu.Manager.getInstance();
q.cancelClose(this);
var r=e.getTarget();

if(r.isEnabled()&&r instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(r);
var p=r.getMenu&&r.getMenu();

if(p){p.setOpener(r);
q.scheduleOpen(p);
this.__kw=p;
}else{var s=this.getOpenedButton();

if(s){q.scheduleClose(s.getMenu());
}
if(this.__kw){q.cancelOpen(this.__kw);
this.__kw=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bq=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var br=this.getOpenedButton();
br?this.setSelectedButton(br):this.resetSelectedButton();
if(br){bq.cancelClose(br.getMenu());
}if(this.__kw){bq.cancelOpen(this.__kw);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(A,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(P);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__kA:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__kA=[0,0,0,0];
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
},getColumnSizes:function(){return this.__kA||null;
}},destruct:function(){this.__kA=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var w="icon",v="label",u="arrow",t="shortcut",s="changeLocale",r="qx.dynlocale",q="submenu",p="on",o="String",n="qx.ui.menu.Menu",h="qx.ui.menu.AbstractButton",m="keypress",k="",g="_applyIcon",f="mouseup",j="abstract",i="_applyLabel",l="_applyMenu",d="changeCommand";
qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:j,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(f,this._onMouseUp);
this.addListener(m,this._onKeyPress);
this.addListener(d,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:o,apply:i,nullable:true},menu:{check:n,apply:l,nullable:true},icon:{check:o,apply:g,themeable:true,nullable:true}},members:{_createChildControlImpl:function(F){var G;

switch(F){case w:G=new qx.ui.basic.Image;
G.setAnonymous(true);
this._add(G,{column:0});
break;
case v:G=new qx.ui.basic.Label;
G.setAnonymous(true);
this._add(G,{column:1});
break;
case t:G=new qx.ui.basic.Label;
G.setAnonymous(true);
this._add(G,{column:2});
break;
case u:G=new qx.ui.basic.Image;
G.setAnonymous(true);
this._add(G,{column:3});
break;
}return G||arguments.callee.base.call(this,F);
},_forwardStates:{selected:1},getChildrenSizes:function(){var x=0,y=0,z=0,D=0;

if(this._isChildControlVisible(w)){var E=this.getChildControl(w);
x=E.getMarginLeft()+E.getSizeHint().width+E.getMarginRight();
}
if(this._isChildControlVisible(v)){var B=this.getChildControl(v);
y=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}
if(this._isChildControlVisible(t)){var A=this.getChildControl(t);
z=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(u)){var C=this.getChildControl(u);
D=C.getMarginLeft()+C.getSizeHint().width+C.getMarginRight();
}return [x,y,z,D];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var N=e.getData();

if(qx.core.Variant.isSet(r,p)){var L=e.getOldData();

if(!L){qx.locale.Manager.getInstance().addListener(s,this._onChangeLocale,this);
}
if(!N){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}var M=N!=null?N.toString():k;
this.getChildControl(t).setValue(M);
},_onChangeLocale:qx.core.Variant.select(r,{"on":function(e){var a=this.getCommand();

if(a!=null){this.getChildControl(t).setValue(a.toString());
}},"off":null}),_applyIcon:function(J,K){if(J){this._showChildControl(w).setSource(J);
}else{this._excludeChildControl(w);
}},_applyLabel:function(H,I){if(H){this._showChildControl(v).setValue(H);
}else{this._excludeChildControl(v);
}},_applyMenu:function(b,c){if(c){c.resetOpener();
c.removeState(q);
}
if(b){this._showChildControl(u);
b.setOpener(this);
b.addState(q);
}else{this._excludeChildControl(u);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(r,p)){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(d,e){var q=this._getLayoutChildren();
var p;
var g;
var h=[];

for(var i=0,l=q.length;i<l;i++){p=q[i];
g=p.getLayoutProperties().column;
h[g]=p;
}var o=this.__kB(q[0]);
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
}},__kB:function(x){while(!(x instanceof qx.ui.menu.Menu)){x=x.getLayoutParent();
}return x;
},_computeSizeHint:function(){var v=this._getLayoutChildren();
var u=0;
var w=0;

for(var i=0,l=v.length;i<l;i++){var t=v[i].getSizeHint();
w+=t.width;
u=Math.max(u,t.height);
}return {width:w,height:u};
}}});
})();
(function(){var f="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(f,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(d,e){return this.getChildrenContainer().add(d,e);
},remove:function(g){return this.getChildrenContainer().remove(g);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(o){return this.getChildrenContainer().indexOf(o);
},addAt:function(a,b,c){this.getChildrenContainer().addAt(a,b,c);
},addBefore:function(l,m,n){this.getChildrenContainer().addBefore(l,m,n);
},addAfter:function(h,i,j){this.getChildrenContainer().addAfter(h,i,j);
},removeAt:function(k){this.getChildrenContainer().removeAt(k);
}}});
})();
(function(){var b="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(b,{members:{setLayout:function(a){return this.getChildrenContainer().setLayout(a);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var w="horizontal",v="scrollpane",u="vertical",t="button-backward",s="button-forward",r="content",q="execute",p="qx.ui.container.SlideBar",o="scrollY",n="removeChildWidget",j="scrollX",m="_applyOrientation",l="mousewheel",i="Integer",h="slidebar",k="update";
qx.Class.define(p,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(a){arguments.callee.base.call(this);
var b=this.getChildControl(v);
this._add(b,{flex:1});

if(a!=null){this.setOrientation(a);
}else{this.initOrientation();
}this.addListener(l,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:h},orientation:{check:[w,u],init:w,apply:m},scrollStep:{check:i,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(r);
},_createChildControlImpl:function(c){var d;

switch(c){case s:d=new qx.ui.form.RepeatButton;
d.addListener(q,this._onExecuteForward,this);
d.setFocusable(false);
this._addAt(d,2);
break;
case t:d=new qx.ui.form.RepeatButton;
d.addListener(q,this._onExecuteBackward,this);
d.setFocusable(false);
this._addAt(d,0);
break;
case r:d=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){d.addListener(n,this._onRemoveChild,this);
}this.getChildControl(v).add(d);
break;
case v:d=new qx.ui.core.scroll.ScrollPane();
d.addListener(k,this._onResize,this);
d.addListener(j,this._onScroll,this);
d.addListener(o,this._onScroll,this);
break;
}return d||arguments.callee.base.call(this,c);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(I){var J=this.getChildControl(v);

if(this.getOrientation()===w){J.scrollByX(I);
}else{J.scrollByY(I);
}},scrollTo:function(f){var g=this.getChildControl(v);

if(this.getOrientation()===w){g.scrollToX(f);
}else{g.scrollToY(f);
}},_applyOrientation:function(x,y){var B=[this.getLayout(),this._getLayout()];
var A=this.getChildControl(s);
var z=this.getChildControl(t);
if(y==u){A.removeState(u);
z.removeState(u);
A.addState(w);
z.addState(w);
}else if(y==w){A.removeState(w);
z.removeState(w);
A.addState(u);
z.addState(u);
}
if(x==w){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(B[0]){B[0].dispose();
}
if(B[1]){B[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(v).getChildren()[0];

if(!content){return;
}var C=this.getInnerSize();
var E=content.getBounds();
var D=(this.getOrientation()===w)?E.width>C.width:E.height>C.height;

if(D){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(v).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var G=this.getChildControl(v);

if(this.getOrientation()===w){var F=G.getScrollX();
var H=G.getScrollMaxX();
}else{var F=G.getScrollY();
var H=G.getScrollMaxY();
}this.getChildControl(t).setEnabled(F>0);
this.getChildControl(s).setEnabled(F<H);
},_showArrows:function(){this._showChildControl(s);
this._showChildControl(t);
},_hideArrows:function(){this._excludeChildControl(s);
this._excludeChildControl(t);
this.scrollTo(0);
}}});
})();
(function(){var h="execute",g="button-backward",f="vertical",e="button-forward",d="menu-slidebar",c="qx.ui.menu.MenuSlideBar";
qx.Class.define(c,{extend:qx.ui.container.SlideBar,construct:function(){arguments.callee.base.call(this,f);
},properties:{appearance:{refine:true,init:d}},members:{_createChildControlImpl:function(a){var b;

switch(a){case e:b=new qx.ui.form.HoverButton();
b.addListener(h,this._onExecuteForward,this);
this._addAt(b,2);
break;
case g:b=new qx.ui.form.HoverButton();
b.addListener(h,this._onExecuteBackward,this);
this._addAt(b,0);
break;
}return b||arguments.callee.base.call(this,a);
}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__kC",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(q,r){arguments.callee.base.call(this,q,r);
this.__kC=new qx.event.AcceleratingTimer();
this.__kC.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__kD:null,__kC:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__kE();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__kD){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__kF();
},_applyEnabled:function(o,p){arguments.callee.base.call(this,o,p);

if(!o){this.removeState(n);
this.removeState(m);
this.__kF();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__kC.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__kC.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__kE();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__kD){this.execute();
}}this.__kF();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__kD){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__kF();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__kE();
}},_onInterval:function(e){this.__kD=true;
this.fireEvent(b);
},__kE:function(){this.fireEvent(g);
this.__kD=false;
this.__kC.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__kF:function(){this.fireEvent(d);
this.__kC.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__kG",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kG=new qx.event.Timer(this.getInterval());
this.__kG.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__kG:null,__kH:null,start:function(){this.__kG.setInterval(this.getFirstInterval());
this.__kG.start();
},stop:function(){this.__kG.stop();
this.__kH=null;
},_onInterval:function(){this.__kG.stop();

if(this.__kH==null){this.__kH=this.getInterval();
}this.__kH=Math.max(this.getMinimum(),this.__kH-this.getDecrease());
this.__kG.setInterval(this.__kH);
this.__kG.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var w="resize",v="scrollY",u="update",t="scrollX",s="_applyScrollX",r="_applyScrollY",q="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",p="appear",o="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",n="qx.event.type.Event",l="qx.ui.core.scroll.ScrollPane",m="scroll";
qx.Class.define(l,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(w,this._onUpdate);
var j=this.getContentElement();
j.addListener(m,this._onScroll,this);
j.addListener(p,this._onAppear,this);
},events:{update:n},properties:{scrollX:{check:q,apply:s,event:t,init:0},scrollY:{check:o,apply:r,event:v,init:0}},members:{add:function(C){var D=this._getChildren()[0];

if(D){this._remove(D);
D.removeListener(w,this._onUpdate,this);
}
if(C){this._add(C);
C.addListener(w,this._onUpdate,this);
}},remove:function(J){if(J){this._remove(J);
J.removeListener(w,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(u);
},_onScroll:function(e){var G=this.getContentElement();
this.setScrollX(G.getScrollX());
this.setScrollY(G.getScrollY());
},_onAppear:function(e){var g=this.getContentElement();
var c=this.getScrollX();
var d=g.getScrollX();

if(c!=d){g.scrollToX(c);
}var h=this.getScrollY();
var f=g.getScrollY();

if(h!=f){g.scrollToY(h);
}},getItemTop:function(B){var top=0;

do{top+=B.getBounds().top;
B=B.getLayoutParent();
}while(B&&B!==this);
return top;
},getItemBottom:function(A){return this.getItemTop(A)+A.getBounds().height;
},getItemLeft:function(H){var I=0;
var parent;

do{I+=H.getBounds().left;
parent=H.getLayoutParent();

if(parent){I+=parent.getInsets().left;
}H=parent;
}while(H&&H!==this);
return I;
},getItemRight:function(i){return this.getItemLeft(i)+i.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var N=this.getInnerSize();
var M=this.getScrollSize();

if(N&&M){return Math.max(0,M.width-N.width);
}return 0;
},getScrollMaxY:function(){var L=this.getInnerSize();
var K=this.getScrollSize();

if(L&&K){return Math.max(0,K.height-L.height);
}return 0;
},scrollToX:function(E){var F=this.getScrollMaxX();

if(E<0){E=0;
}else if(E>F){E=F;
}this.setScrollX(E);
},scrollToY:function(a){var b=this.getScrollMaxY();

if(a<0){a=0;
}else if(a>b){a=b;
}this.setScrollY(a);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(k){this.getContentElement().scrollToX(k);
},_applyScrollY:function(z){this.getContentElement().scrollToY(z);
}}});
})();
(function(){var i="Integer",h="hovered",g="__kI",f="hover-button",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__kI=new qx.event.AcceleratingTimer();
this.__kI.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:f},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__kI:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__kI.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__kI.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__kI.stop();
}}},destruct:function(){this._disposeObjects(g);
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
(function(){var w="Boolean",v="resize",u="mousedown",t="w-resize",s="sw-resize",r="n-resize",q="resizableRight",p="ne-resize",o="se-resize",n="Integer",L="e-resize",K="resizableLeft",J="mousemove",I="move",H="shorthand",G="maximized",F="nw-resize",E="mouseout",D="qx.ui.core.MResizable",C="mouseup",A="losecapture",B="resize-frame",y="resizableBottom",z="s-resize",x="resizableTop";
qx.Mixin.define(D,{construct:function(){this.addListener(u,this.__kT,this,true);
this.addListener(C,this.__kU,this);
this.addListener(J,this.__kW,this);
this.addListener(E,this.__kX,this);
this.addListener(A,this.__kV,this);
},properties:{resizableTop:{check:w,init:true},resizableRight:{check:w,init:true},resizableBottom:{check:w,init:true},resizableLeft:{check:w,init:true},resizable:{group:[x,q,y,K],mode:H},resizeSensitivity:{check:n,init:5},useResizeFrame:{check:w,init:true}},members:{__kJ:null,__kK:null,__kL:null,__kM:null,__kN:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__kO:function(){var T=this.__kJ;

if(!T){T=this.__kJ=new qx.ui.core.Widget();
T.setAppearance(B);
T.exclude();
qx.core.Init.getApplication().getRoot().add(T);
}return T;
},__kP:function(){var m=this.__kN;
var l=this.__kO();
l.setUserBounds(m.left,m.top,m.width,m.height);
l.show();
l.setZIndex(this.getZIndex()+1);
},__kQ:function(e){var N=this.__kK;
var O=this.getSizeHint();
var Q=this.__kN;
var M=Q.width;
var P=Q.height;
var S=Q.left;
var top=Q.top;
var R;

if((N&this.RESIZE_TOP)||(N&this.RESIZE_BOTTOM)){R=e.getDocumentTop()-this.__kM;

if(N&this.RESIZE_TOP){P-=R;
}else{P+=R;
}
if(P<O.minHeight){P=O.minHeight;
}else if(P>O.maxHeight){P=O.maxHeight;
}
if(N&this.RESIZE_TOP){top+=Q.height-P;
}}
if((N&this.RESIZE_LEFT)||(N&this.RESIZE_RIGHT)){R=e.getDocumentLeft()-this.__kL;

if(N&this.RESIZE_LEFT){M-=R;
}else{M+=R;
}
if(M<O.minWidth){M=O.minWidth;
}else if(M>O.maxWidth){M=O.maxWidth;
}
if(N&this.RESIZE_LEFT){S+=Q.width-M;
}}return {viewportLeft:S,viewportTop:top,parentLeft:Q.bounds.left+S-Q.left,parentTop:Q.bounds.top+top-Q.top,width:M,height:P};
},__kR:{1:r,2:z,4:t,8:L,5:F,6:s,9:p,10:o},__kS:function(e){var c=this.getContentLocation();
var a=this.getResizeSensitivity();
var f=e.getDocumentLeft();
var d=e.getDocumentTop();
var b=0;

if(this.getResizableTop()&&Math.abs(c.top-d)<a){b+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(c.bottom-d)<a){b+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(c.left-f)<a){b+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(c.right-f)<a){b+=this.RESIZE_RIGHT;
}this.__kK=b;
},__kT:function(e){if(!this.__kK){return;
}this.addState(v);
this.__kL=e.getDocumentLeft();
this.__kM=e.getDocumentTop();
var location=this.getContainerLocation();
var V=this.getBounds();
this.__kN={top:location.top,left:location.left,width:V.width,height:V.height,bounds:qx.lang.Object.clone(V)};
if(this.getUseResizeFrame()){this.__kP();
}this.capture();
e.stop();
},__kU:function(e){if(!this.hasState(v)){return;
}if(this.getUseResizeFrame()){this.__kO().exclude();
}var U=this.__kQ(e);
this.setWidth(U.width);
this.setHeight(U.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:U.parentLeft,top:U.parentTop});
}this.__kK=0;
this.removeState(v);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__kV:function(e){if(!this.__kK){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(I);
if(this.getUseResizeFrame()){this.__kO().exclude();
}},__kW:function(e){if(this.hasState(v)){var j=this.__kQ(e);
if(this.getUseResizeFrame()){var h=this.__kO();
h.setUserBounds(j.viewportLeft,j.viewportTop,j.width,j.height);
}else{this.setWidth(j.width);
this.setHeight(j.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:j.parentLeft,top:j.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(G)){this.__kS(e);
var k=this.__kK;
var i=this.getApplicationRoot();

if(k){var g=this.__kR[k];
this.setCursor(g);
i.setGlobalCursor(g);
}else if(this.getCursor()){this.resetCursor();
i.resetGlobalCursor();
}}},__kX:function(e){if(this.getCursor()&&!this.hasState(v)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__kJ!=null&&!qx.core.ObjectRegistry.inShutDown){this.__kJ.destroy();
this.__kJ=null;
}}});
})();
(function(){var q="move",p="Boolean",o="mouseup",n="mousedown",m="losecapture",l="__la",k="qx.ui.core.MMovable",j="__kY",i="mousemove",h="maximized",g="move-frame";
qx.Mixin.define(k,{properties:{movable:{check:p,init:true},useMoveFrame:{check:p,init:false}},members:{__kY:null,__la:null,__lb:null,__lc:null,__ld:null,__le:null,__lf:null,__lg:false,__lh:null,__li:0,_activateMoveHandle:function(t){if(this.__kY){throw new Error("The move handle could not be redefined!");
}this.__kY=t;
t.addListener(n,this._onMoveMouseDown,this);
t.addListener(o,this._onMoveMouseUp,this);
t.addListener(i,this._onMoveMouseMove,this);
t.addListener(m,this.__lm,this);
},__lj:function(){var d=this.__la;

if(!d){d=this.__la=new qx.ui.core.Widget();
d.setAppearance(g);
d.exclude();
qx.core.Init.getApplication().getRoot().add(d);
}return d;
},__lk:function(){var location=this.getContainerLocation();
var s=this.getBounds();
var r=this.__lj();
r.setUserBounds(location.left,location.top,s.width,s.height);
r.show();
r.setZIndex(this.getZIndex()+1);
},__ll:function(e){var w=this.__lb;
var z=Math.max(w.left,Math.min(w.right,e.getDocumentLeft()));
var y=Math.max(w.top,Math.min(w.bottom,e.getDocumentTop()));
var v=this.__lc+z;
var x=this.__ld+y;
return {viewportLeft:v,viewportTop:x,parentLeft:v-this.__le,parentTop:x-this.__lf};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(h)){return;
}var parent=this.getLayoutParent();
var b=parent.getContentLocation();
var c=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__lg=true;
this.__lh=parent.getBlockerColor();
this.__li=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__lb={left:b.left,top:b.top,right:b.left+c.width,bottom:b.top+c.height};
var a=this.getContainerLocation();
this.__le=b.left;
this.__lf=b.top;
this.__lc=a.left-e.getDocumentLeft();
this.__ld=a.top-e.getDocumentTop();
this.addState(q);
this.__kY.capture();
if(this.getUseMoveFrame()){this.__lk();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(q)){return;
}var f=this.__ll(e);

if(this.getUseMoveFrame()){this.__lj().setDomPosition(f.viewportLeft,f.viewportTop);
}else{this.setDomPosition(f.parentLeft,f.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(q)){return;
}this.removeState(q);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__lg){parent.unblockContent();
parent.setBlockerColor(this.__lh);
parent.setBlockerOpacity(this.__li);
this.__lh=null;
this.__li=0;
}}this.__kY.releaseCapture();
var u=this.__ll(e);
this.setLayoutProperties({left:u.parentLeft,top:u.parentTop});
if(this.getUseMoveFrame()){this.__lj().exclude();
}e.stopPropagation();
},__lm:function(e){if(!this.hasState(q)){return;
}this.removeState(q);
if(this.getUseMoveFrame()){this.__lj().exclude();
}}},destruct:function(){this._disposeObjects(l,j);
this.__lb=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ln:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__lo:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__lo[name];
s[t]();
}else{var u=this.__ln[name];
s[u](q);
}}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(c){this.assertInterface(c,qx.ui.window.IDesktop);
},changeActiveWindow:function(e,f){},updateStack:function(){},bringToFront:function(b){this.assertInstance(b,qx.ui.window.Window);
},sendToBack:function(d){this.assertInstance(d,qx.ui.window.Window);
}}});
})();
(function(){var g="__lp",f="qx.ui.window.Manager";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__lp:null,setDesktop:function(k){this.__lp=k;
this.updateStack();
},getDesktop:function(){return this.__lp;
},changeActiveWindow:function(h,j){if(h){this.bringToFront(h);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__lp.forceUnblockContent();
var b=this.__lp.getWindows();
var e=this._minZIndex-1;
var d=false;
var c,a=null;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(!c.isVisible()){continue;
}e+=2;
c.setZIndex(e);
if(c.getModal()){this.__lp.blockContent(e-1);
}d=d||c.isActive();
a=c;
}
if(!d){this.__lp.setActiveWindow(a);
}},bringToFront:function(m){var n=this.__lp.getWindows();
var o=qx.lang.Array.remove(n,m);

if(o){n.push(m);
this.updateStack();
}},sendToBack:function(p){var q=this.__lp.getWindows();
var r=qx.lang.Array.remove(q,p);

if(r){q.unshift(p);
this.updateStack();
}}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="captionbar",h="maximize-button",g="_applyCaptionBarChange",f="restore-button",d="minimize-button",c="close-button",b="maximized",a="execute",R="pane",Q="title",P="icon",O="statusbar-text",N="statusbar",M="normal",L="String",K="active",J="beforeClose",I="beforeMinimize",r="mousedown",s="changeStatus",p="changeIcon",q="excluded",n="_applyCaption",o="_applyActive",l="beforeRestore",m="minimize",t="dblclick",u="changeModal",A="_applyShowStatusbar",z="_applyStatus",C="qx.ui.window.Window",B="changeCaption",E="_applyIcon",D="focusout",w="beforeMaximize",H="maximize",G="restore",F="window",v="close",x="changeActive",y="minimized";
qx.Class.define(C,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(S,T){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(i);
this._createChildControl(R);
if(T!=null){this.setIcon(T);
}
if(S!=null){this.setCaption(S);
}this._updateCaptionBar();
this.addListener(r,this._onWindowMouseDown,this,true);
this.addListener(D,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:F},visibility:{refine:true,init:q},focusable:{refine:true,init:true},active:{check:k,init:false,apply:o,event:x},modal:{check:k,init:false,event:u},caption:{apply:n,event:B,nullable:true},icon:{check:L,nullable:true,apply:E,event:p,themeable:true},status:{check:L,nullable:true,apply:z,event:s},showClose:{check:k,init:true,apply:g,themeable:true},showMaximize:{check:k,init:true,apply:g,themeable:true},showMinimize:{check:k,init:true,apply:g,themeable:true},allowClose:{check:k,init:true,apply:g},allowMaximize:{check:k,init:true,apply:g},allowMinimize:{check:k,init:true,apply:g},showStatusbar:{check:k,init:false,apply:A}},members:{__lq:null,__lr:null,getChildrenContainer:function(){return this.getChildControl(R);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(bq){var br;

switch(bq){case N:br=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(br);
br.add(this.getChildControl(O));
break;
case O:br=new qx.ui.basic.Label();
br.setValue(this.getStatus());
break;
case R:br=new qx.ui.container.Composite();
this._add(br,{flex:1});
break;
case i:var bt=new qx.ui.layout.Grid();
bt.setRowFlex(0,1);
bt.setColumnFlex(1,1);
br=new qx.ui.container.Composite(bt);
this._add(br);
br.addListener(t,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(br);
break;
case P:br=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(i).add(br,{row:0,column:0});
break;
case Q:br=new qx.ui.basic.Label(this.getCaption());
br.setWidth(0);
br.setAllowGrowX(true);
var bs=this.getChildControl(i);
bs.add(br,{row:0,column:1});
break;
case d:br=new qx.ui.form.Button();
br.setFocusable(false);
br.addListener(a,this._onMinimizeButtonClick,this);
this.getChildControl(i).add(br,{row:0,column:2});
break;
case f:br=new qx.ui.form.Button();
br.setFocusable(false);
br.addListener(a,this._onRestoreButtonClick,this);
this.getChildControl(i).add(br,{row:0,column:3});
break;
case h:br=new qx.ui.form.Button();
br.setFocusable(false);
br.addListener(a,this._onMaximizeButtonClick,this);
this.getChildControl(i).add(br,{row:0,column:4});
break;
case c:br=new qx.ui.form.Button();
br.setFocusable(false);
br.addListener(a,this._onCloseButtonClick,this);
this.getChildControl(i).add(br,{row:0,column:6});
break;
}return br||arguments.callee.base.call(this,bq);
},_updateCaptionBar:function(){var X;

if(this.getIcon()){this._showChildControl(P);
}else{this._excludeChildControl(P);
}
if(this.getCaption()){this._showChildControl(Q);
}else{this._excludeChildControl(Q);
}
if(this.getShowMinimize()){this._showChildControl(d);
X=this.getChildControl(d);
this.getAllowMinimize()?X.resetEnabled():X.setEnabled(false);
}else{this._excludeChildControl(d);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(f);
this._excludeChildControl(h);
}else{this._showChildControl(h);
this._excludeChildControl(f);
}X=this.getChildControl(h);
this.getAllowMaximize()?X.resetEnabled():X.setEnabled(false);
}else{this._excludeChildControl(h);
this._excludeChildControl(f);
}
if(this.getShowClose()){this._showChildControl(c);
X=this.getChildControl(c);
this.getAllowClose()?X.resetEnabled():X.setEnabled(false);
}else{this._excludeChildControl(c);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(J,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(v);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bm=parent.getBounds();

if(bm){var bn=this.getSizeHint();
var bl=Math.round((bm.width-bn.width)/2);
var top=Math.round((bm.height-bn.height)/2);

if(top<0){top=0;
}this.moveTo(bl,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(w,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bu=this.getLayoutProperties();
this.__lr=bu.left===undefined?0:bu.left;
this.__lq=bu.top===undefined?0:bu.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(b);
this._updateCaptionBar();
this.fireEvent(H);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(I,qx.event.type.Event,[false,true])){var bk=this.getLayoutProperties();
this.__lr=bk.left===undefined?0:bk.left;
this.__lq=bk.top===undefined?0:bk.top;
this.removeState(b);
this.hide();
this.fireEvent(m);
}},restore:function(){if(this.getMode()===M){return;
}
if(this.fireNonBubblingEvent(l,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var U=this.__lr;
var top=this.__lq;
this.setLayoutProperties({edge:null,left:U,top:top});
this.removeState(b);
this._updateCaptionBar();
this.fireEvent(G);
}},moveTo:function(bj,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bj,top:top});
},isMaximized:function(){return this.hasState(b);
},getMode:function(){if(!this.isVisible()){return y;
}else{if(this.isMaximized()){return b;
}else{return M;
}}},_applyActive:function(bh,bi){if(bi){this.removeState(K);
}else{this.addState(K);
}},_getContentPaddingTarget:function(){return this.getChildControl(R);
},_applyShowStatusbar:function(bo,bp){if(bo){this._showChildControl(N);
}else{this._excludeChildControl(N);
}},_applyCaptionBarChange:function(V,W){this._updateCaptionBar();
},_applyStatus:function(bb,bc){var bd=this.getChildControl(O,true);

if(bd){bd.setValue(bb);
}},_applyCaption:function(Y,ba){this.getChildControl(Q).setValue(Y);
},_applyIcon:function(be,bf){this.getChildControl(P).setSource(be);
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bg=e.getRelatedTarget();

if(bg!=null&&!qx.ui.core.Widget.contains(this,bg)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(d).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(f).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(h).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(c).reset();
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
(function(){var y="",x="changeValue",w="inspector.objects.ObjectsWindow",v="_model",u="_modelRadio",t="_table",s="icon/22/actions/view-refresh.png",r="_reloadButton",q="changeSelection",p="Objects",m="_filterTextField",o="execute",n="Filter...";
qx.Class.define(w,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,p);
this._reloadButton=new qx.ui.toolbar.Button(null,s);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(o,function(){this.load(null,this._filterTextField.getValue());
},this);
this._toolbar.add(new qx.ui.toolbar.Separator());
this._toolbar.addSpacer();
this._filterTextField=new qx.ui.form.TextField();
this._filterTextField.setPlaceholder(n);
this._filterTextField.setLiveUpdate(true);
this._filterTextField.setMarginRight(5);
this._toolbar.add(this._filterTextField);
this._filterTextField.addListener(x,function(e){var z=qx.util.TimerManager.getInstance();
if(this.__ls!=null){z.stop(this.__ls);
this.__ls=null;
}this.__ls=z.start(function(){this.load(null,e.getData());
this.__ls=null;
},0,this,null,200);
},this);
this._model=new qx.ui.table.model.Simple();
this._model.setColumns([y,y]);
this._table=new qx.ui.table.Table(this._model);
this._table.setDecorator(null);
this._table.setColumnVisibilityButtonVisible(false);
this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
this.add(this._table,{flex:1});
this._table.getSelectionModel().addListener(q,this._onChangeSelection,this);
this._table.getDataRowRenderer().setHighlightFocusRow(false);
this._modelRadio=new qx.ui.form.RadioGroup();
this._currentModel=null;
this._addModel(new inspector.objects.HashModel());
this._addModel(new inspector.objects.CountModel());
},members:{__ls:null,_addModel:function(a){var b=new qx.ui.toolbar.RadioButton(a.getName());
this._toolbar.addAt(b,this._toolbar.getChildren().length-2);
this._modelRadio.add(b);
b.addListener(x,function(e){if(!e.getData()){return;
}this._currentModel=a;
this._model.setColumns(a.getColumns());
this.load();
if(a.selectionEnabled()){this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
this.select(qx.core.Init.getApplication().getSelectedObject());
}else{this._table.resetSelection();
this._table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.NO_SELECTION);
}this._filterTextField.setValue(y);
},this);
if(this._currentModel==null){this._currentModel=a;
this._model.setColumns(a.getColumns());
this._table.setColumnWidth(0,50);
this._table.setColumnWidth(1,230);
}},setInitSizeAndPosition:function(){var G=qx.bom.Viewport.getWidth()-this.getWidth();
var F=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(G,30);
this.setHeight(F);
},load:function(window,D){this._iFrameWindow=window||this._iFrameWindow;
var E=this._currentModel.getData(this._iFrameWindow);
if(D){E=this._filterData(E,D);
}this._table.getTableModel().setData(E);
},select:function(A){if(this._currentModel.selectionEnabled()){var C=this._table.getSelectionModel();
var B=this._table.getTableModel().getData();

for(var i=0;i<B.length;i++){if(B[i][0]==A.toHashCode()){C.resetSelection();
C.setSelectionInterval(i,i);
this._table.scrollCellVisible(0,i);
return;
}}}},_onChangeSelection:function(e){if(this._table.getSelectionModel().isSelectionEmpty()){return;
}
if(this._table.getSelectionModel().getSelectedRanges()[0]&&this._iFrameWindow){var f=this._table.getSelectionModel().getSelectedRanges()[0].minIndex;
var h=this._table.getTableModel().getData()[f];
var g=this._iFrameWindow.qx.core.ObjectRegistry.fromHashCode(h[0]);
qx.core.Init.getApplication().select(g,this);
}},_filterData:function(c,d){for(var i=c.length-1;i>=0;i--){if(c[i][0] instanceof String){if(c[i][0].search(d)==-1&&c[i][1].search(d)==-1){c.splice(i,1);
}}else{if(c[i][1].search(d)==-1){c.splice(i,1);
}}}return c;
},getSelection:function(){var l=this._table.getSelectionModel();
var j=l.getSelectedRanges().minIndex;

if(j){var k=this._table.getTableModel().getData()[j];
return qx.core.ObjectRegistry.fromHashCode(k[0]);
}return null;
}},destruct:function(){this._currentModel=this._iFrameWindow=null;
this._disposeObjects(r,m,v,t,u);
}});
})();
(function(){var b="qx.ui.window.IDesktop";
qx.Interface.define(b,{members:{setWindowManager:function(c){this.assertInterface(c,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(a){this.assertInteger(a);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var J="left",I="top",H="_applyLayoutChange",G="hAlign",F="flex",E="vAlign",D="Integer",C="minWidth",B="width",A="minHeight",v="qx.ui.layout.Grid",z="height",w="maxHeight",u="maxWidth";
qx.Class.define(v,{extend:qx.ui.layout.Abstract,construct:function(bs,bt){arguments.callee.base.call(this);
this.__lt=[];
this.__lu=[];

if(bs){this.setSpacingX(bs);
}
if(bt){this.setSpacingY(bt);
}},properties:{spacingX:{check:D,init:0,apply:H},spacingY:{check:D,init:0,apply:H}},members:{__lv:null,__lt:null,__lu:null,__lw:null,__lx:null,__ly:null,__lz:null,__lA:null,__lB:null,verifyLayoutProperty:null,__lC:function(){var dF=[];
var dE=[];
var dG=[];
var dC=-1;
var dB=-1;
var dI=this._getLayoutChildren();

for(var i=0,l=dI.length;i<l;i++){var dD=dI[i];
var dH=dD.getLayoutProperties();
var dJ=dH.row;
var dA=dH.column;
dH.colSpan=dH.colSpan||1;
dH.rowSpan=dH.rowSpan||1;
if(dJ==null||dA==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+dD+"' must be defined!");
}
if(dF[dJ]&&dF[dJ][dA]){throw new Error("Cannot add widget '"+dD+"'!. "+"There is already a widget '"+dF[dJ][dA]+"' in this cell ("+dJ+", "+dA+")");
}
for(var x=dA;x<dA+dH.colSpan;x++){for(var y=dJ;y<dJ+dH.rowSpan;y++){if(dF[y]==undefined){dF[y]=[];
}dF[y][x]=dD;
dB=Math.max(dB,x);
dC=Math.max(dC,y);
}}
if(dH.rowSpan>1){dG.push(dD);
}
if(dH.colSpan>1){dE.push(dD);
}}for(var y=0;y<=dC;y++){if(dF[y]==undefined){dF[y]=[];
}}this.__lv=dF;
this.__lw=dE;
this.__lx=dG;
this.__ly=dC;
this.__lz=dB;
this.__lA=null;
this.__lB=null;
delete this._invalidChildrenCache;
},_setRowData:function(dW,dX,dY){var ea=this.__lt[dW];

if(!ea){this.__lt[dW]={};
this.__lt[dW][dX]=dY;
}else{ea[dX]=dY;
}},_setColumnData:function(du,dv,dw){var dx=this.__lu[du];

if(!dx){this.__lu[du]={};
this.__lu[du][dv]=dw;
}else{dx[dv]=dw;
}},setSpacing:function(t){this.setSpacingY(t);
this.setSpacingX(t);
return this;
},setColumnAlign:function(cR,cS,cT){{};
this._setColumnData(cR,G,cS);
this._setColumnData(cR,E,cT);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bP){var bQ=this.__lu[bP]||{};
return {vAlign:bQ.vAlign||I,hAlign:bQ.hAlign||J};
},setRowAlign:function(q,r,s){{};
this._setRowData(q,G,r);
this._setRowData(q,E,s);
this._applyLayoutChange();
return this;
},getRowAlign:function(bJ){var bK=this.__lt[bJ]||{};
return {vAlign:bK.vAlign||I,hAlign:bK.hAlign||J};
},getCellWidget:function(dy,dz){if(this._invalidChildrenCache){this.__lC();
}var dy=this.__lv[dy]||{};
return dy[dz]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__lC();
}return this.__ly+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__lC();
}return this.__lz+1;
},getCellAlign:function(cU,cV){var dc=I;
var da=J;
var db=this.__lt[cU];
var cX=this.__lu[cV];
var cW=this.__lv[cU][cV];

if(cW){var cY={vAlign:cW.getAlignY(),hAlign:cW.getAlignX()};
}else{cY={};
}if(cY.vAlign){dc=cY.vAlign;
}else if(db&&db.vAlign){dc=db.vAlign;
}else if(cX&&cX.vAlign){dc=cX.vAlign;
}if(cY.hAlign){da=cY.hAlign;
}else if(cX&&cX.hAlign){da=cX.hAlign;
}else if(db&&db.hAlign){da=db.hAlign;
}return {vAlign:dc,hAlign:da};
},setColumnFlex:function(bR,bS){this._setColumnData(bR,F,bS);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bH){var bI=this.__lu[bH]||{};
return bI.flex!==undefined?bI.flex:0;
},setRowFlex:function(ds,dt){this._setRowData(ds,F,dt);
this._applyLayoutChange();
return this;
},getRowFlex:function(dT){var dU=this.__lt[dT]||{};
var dV=dU.flex!==undefined?dU.flex:0;
return dV;
},setColumnMaxWidth:function(bq,br){this._setColumnData(bq,u,br);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bV){var bW=this.__lu[bV]||{};
return bW.maxWidth!==undefined?bW.maxWidth:Infinity;
},setColumnWidth:function(dK,dL){this._setColumnData(dK,B,dL);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bN){var bO=this.__lu[bN]||{};
return bO.width!==undefined?bO.width:null;
},setColumnMinWidth:function(bT,bU){this._setColumnData(bT,C,bU);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bB){var bC=this.__lu[bB]||{};
return bC.minWidth||0;
},setRowMaxHeight:function(bu,bv){this._setRowData(bu,w,bv);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bF){var bG=this.__lt[bF]||{};
return bG.maxHeight||Infinity;
},setRowHeight:function(bD,bE){this._setRowData(bD,z,bE);
this._applyLayoutChange();
return this;
},getRowHeight:function(bo){var bp=this.__lt[bo]||{};
return bp.height!==undefined?bp.height:null;
},setRowMinHeight:function(o,p){this._setRowData(o,A,p);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bL){var bM=this.__lt[bL]||{};
return bM.minHeight||0;
},__lD:function(bw){var bA=bw.getSizeHint();
var bz=bw.getMarginLeft()+bw.getMarginRight();
var by=bw.getMarginTop()+bw.getMarginBottom();
var bx={height:bA.height+by,width:bA.width+bz,minHeight:bA.minHeight+by,minWidth:bA.minWidth+bz,maxHeight:bA.maxHeight+by,maxWidth:bA.maxWidth+bz};
return bx;
},_fixHeightsRowSpan:function(dd){var dp=this.getSpacingY();

for(var i=0,l=this.__lx.length;i<l;i++){var dg=this.__lx[i];
var di=this.__lD(dg);
var dj=dg.getLayoutProperties();
var df=dj.row;
var dm=dp*(dj.rowSpan-1);
var de=dm;
var dl={};

for(var j=0;j<dj.rowSpan;j++){var dr=dj.row+j;
var dh=dd[dr];
var dq=this.getRowFlex(dr);

if(dq>0){dl[dr]={min:dh.minHeight,value:dh.height,max:dh.maxHeight,flex:dq};
}dm+=dh.height;
de+=dh.minHeight;
}if(dm<di.height){var dn=qx.ui.layout.Util.computeFlexOffsets(dl,di.height,dm);

for(var j=0;j<dj.rowSpan;j++){var dk=dn[df+j]?dn[df+j].offset:0;
dd[df+j].height+=dk;
}}if(de<di.minHeight){var dn=qx.ui.layout.Util.computeFlexOffsets(dl,di.minHeight,de);

for(var j=0;j<dj.rowSpan;j++){var dk=dn[df+j]?dn[df+j].offset:0;
dd[df+j].minHeight+=dk;
}}}},_fixWidthsColSpan:function(bX){var cc=this.getSpacingX();

for(var i=0,l=this.__lw.length;i<l;i++){var bY=this.__lw[i];
var cb=this.__lD(bY);
var ce=bY.getLayoutProperties();
var ca=ce.column;
var ck=cc*(ce.colSpan-1);
var cd=ck;
var cf={};
var ch;

for(var j=0;j<ce.colSpan;j++){var cl=ce.column+j;
var cj=bX[cl];
var ci=this.getColumnFlex(cl);
if(ci>0){cf[cl]={min:cj.minWidth,value:cj.width,max:cj.maxWidth,flex:ci};
}ck+=cj.width;
cd+=cj.minWidth;
}if(ck<cb.width){var cg=qx.ui.layout.Util.computeFlexOffsets(cf,cb.width,ck);

for(var j=0;j<ce.colSpan;j++){ch=cg[ca+j]?cg[ca+j].offset:0;
bX[ca+j].width+=ch;
}}if(cd<cb.minWidth){var cg=qx.ui.layout.Util.computeFlexOffsets(cf,cb.minWidth,cd);

for(var j=0;j<ce.colSpan;j++){ch=cg[ca+j]?cg[ca+j].offset:0;
bX[ca+j].minWidth+=ch;
}}}},_getRowHeights:function(){if(this.__lA!=null){return this.__lA;
}var m=[];
var c=this.__ly;
var b=this.__lz;

for(var n=0;n<=c;n++){var d=0;
var f=0;
var e=0;

for(var k=0;k<=b;k++){var a=this.__lv[n][k];

if(!a){continue;
}var g=a.getLayoutProperties().rowSpan||0;

if(g>1){continue;
}var h=this.__lD(a);

if(this.getRowFlex(n)>0){d=Math.max(d,h.minHeight);
}else{d=Math.max(d,h.height);
}f=Math.max(f,h.height);
}var d=Math.max(d,this.getRowMinHeight(n));
var e=this.getRowMaxHeight(n);

if(this.getRowHeight(n)!==null){var f=this.getRowHeight(n);
}else{var f=Math.max(d,Math.min(f,e));
}m[n]={minHeight:d,height:f,maxHeight:e};
}
if(this.__lx.length>0){this._fixHeightsRowSpan(m);
}this.__lA=m;
return m;
},_getColWidths:function(){if(this.__lB!=null){return this.__lB;
}var O=[];
var L=this.__lz;
var N=this.__ly;

for(var T=0;T<=L;T++){var R=0;
var Q=0;
var M=Infinity;

for(var U=0;U<=N;U++){var K=this.__lv[U][T];

if(!K){continue;
}var P=K.getLayoutProperties().colSpan||0;

if(P>1){continue;
}var S=this.__lD(K);

if(this.getColumnFlex(T)>0){Q=Math.max(Q,S.minWidth);
}else{Q=Math.max(Q,S.width);
}R=Math.max(R,S.width);
}var Q=Math.max(Q,this.getColumnMinWidth(T));
var M=this.getColumnMaxWidth(T);

if(this.getColumnWidth(T)!==null){var R=this.getColumnWidth(T);
}else{var R=Math.max(Q,Math.min(R,M));
}O[T]={minWidth:Q,width:R,maxWidth:M};
}
if(this.__lw.length>0){this._fixWidthsColSpan(O);
}this.__lB=O;
return O;
},_getColumnFlexOffsets:function(dM){var dN=this.getSizeHint();
var dR=dM-dN.width;

if(dR==0){return {};
}var dP=this._getColWidths();
var dO={};

for(var i=0,l=dP.length;i<l;i++){var dS=dP[i];
var dQ=this.getColumnFlex(i);

if((dQ<=0)||(dS.width==dS.maxWidth&&dR>0)||(dS.width==dS.minWidth&&dR<0)){continue;
}dO[i]={min:dS.minWidth,value:dS.width,max:dS.maxWidth,flex:dQ};
}return qx.ui.layout.Util.computeFlexOffsets(dO,dM,dN.width);
},_getRowFlexOffsets:function(V){var W=this.getSizeHint();
var ba=V-W.height;

if(ba==0){return {};
}var bb=this._getRowHeights();
var X={};

for(var i=0,l=bb.length;i<l;i++){var bc=bb[i];
var Y=this.getRowFlex(i);

if((Y<=0)||(bc.height==bc.maxHeight&&ba>0)||(bc.height==bc.minHeight&&ba<0)){continue;
}X[i]={min:bc.minHeight,value:bc.height,max:bc.maxHeight,flex:Y};
}return qx.ui.layout.Util.computeFlexOffsets(X,V,W.height);
},renderLayout:function(cm,cn){if(this._invalidChildrenCache){this.__lC();
}var cB=qx.ui.layout.Util;
var cp=this.getSpacingX();
var cv=this.getSpacingY();
var cG=this._getColWidths();
var cF=this._getColumnFlexOffsets(cm);
var cq=[];
var cI=this.__lz;
var co=this.__ly;
var cH;

for(var cJ=0;cJ<=cI;cJ++){cH=cF[cJ]?cF[cJ].offset:0;
cq[cJ]=cG[cJ].width+cH;
}var cy=this._getRowHeights();
var cA=this._getRowFlexOffsets(cn);
var cP=[];

for(var cw=0;cw<=co;cw++){cH=cA[cw]?cA[cw].offset:0;
cP[cw]=cy[cw].height+cH;
}var cQ=0;

for(var cJ=0;cJ<=cI;cJ++){var top=0;

for(var cw=0;cw<=co;cw++){var cD=this.__lv[cw][cJ];
if(!cD){top+=cP[cw]+cv;
continue;
}var cr=cD.getLayoutProperties();
if(cr.row!==cw||cr.column!==cJ){top+=cP[cw]+cv;
continue;
}var cO=cp*(cr.colSpan-1);

for(var i=0;i<cr.colSpan;i++){cO+=cq[cJ+i];
}var cE=cv*(cr.rowSpan-1);

for(var i=0;i<cr.rowSpan;i++){cE+=cP[cw+i];
}var cs=cD.getSizeHint();
var cM=cD.getMarginTop();
var cC=cD.getMarginLeft();
var cz=cD.getMarginBottom();
var cu=cD.getMarginRight();
var cx=Math.max(cs.minWidth,Math.min(cO-cC-cu,cs.maxWidth));
var cN=Math.max(cs.minHeight,Math.min(cE-cM-cz,cs.maxHeight));
var cK=this.getCellAlign(cw,cJ);
var cL=cQ+cB.computeHorizontalAlignOffset(cK.hAlign,cx,cO,cC,cu);
var ct=top+cB.computeVerticalAlignOffset(cK.vAlign,cN,cE,cM,cz);
cD.renderLayout(cL,ct,cx,cN);
top+=cP[cw]+cv;
}cQ+=cq[cJ]+cp;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__lB=null;
this.__lA=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lC();
}var bh=this._getColWidths();
var bj=0,bk=0;

for(var i=0,l=bh.length;i<l;i++){var bl=bh[i];

if(this.getColumnFlex(i)>0){bj+=bl.minWidth;
}else{bj+=bl.width;
}bk+=bl.width;
}var bm=this._getRowHeights();
var bf=0,bi=0;

for(var i=0,l=bm.length;i<l;i++){var bn=bm[i];

if(this.getRowFlex(i)>0){bf+=bn.minHeight;
}else{bf+=bn.height;
}bi+=bn.height;
}var be=this.getSpacingX()*(bh.length-1);
var bd=this.getSpacingY()*(bm.length-1);
var bg={minWidth:bj+be,width:bk+be,minHeight:bf+bd,height:bi+bd};
return bg;
}},destruct:function(){this.__lv=this.__lt=this.__lu=this.__lw=this.__lx=this.__lB=this.__lA=null;
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
(function(){var k="showingPlaceholder",j="color",i="",h="none",g="qx.client",f="changeValue",d="Boolean",c="qx.event.type.Data",b="readonly",a="input",W="focusin",V="visibility",U="focusout",T="hidden",S="absolute",R="readOnly",Q="text",P="_applyTextAlign",O="px",N="RegExp",r=")",s="syncAppearance",p="gecko",q="A",n="change",o="textAlign",l="focused",m="center",t="visible",u="disabled",B="url(",z="String",F="resize",D="qx.ui.form.AbstractField",J="transparent",H="off",w="spellcheck",M="false",L="right",K="PositiveInteger",v="mshtml",x="abstract",y="block",A="webkit",C="_applyReadOnly",E="_applyPlaceholder",G="left",I="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:x,construct:function(bG){arguments.callee.base.call(this);

if(bG!=null){this.setValue(bG);
}this.getContentElement().addListener(n,this._onChangeContent,this);
this.addListener(s,this._syncPlaceholder,this);
},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[G,m,L],nullable:true,themeable:true,apply:P},readOnly:{check:d,apply:C,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:K,init:Infinity},liveUpdate:{check:d,init:false},placeholder:{check:z,nullable:true,apply:E},filter:{check:N,nullable:true,init:null}},members:{__lE:true,__lF:null,getFocusElement:function(){var bH=this.getContentElement();

if(bH){return bH;
}},_createInputElement:function(){return new qx.html.Input(Q);
},renderLayout:function(bq,top,br,bs){var bt=this._updateInsets;
var bx=arguments.callee.base.call(this,bq,top,br,bs);
if(!bx){return;
}var bv=bx.size||bt;
var by=O;

if(bv||bx.local||bx.margin){var bu=this.getInsets();
var innerWidth=br-bu.left-bu.right;
var innerHeight=bs-bu.top-bu.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bw=this.getContentElement();

if(bt){this.__lH().setStyles({"left":bu.left+by,"top":bu.top+by});
}
if(bv){this.__lH().setStyles({"width":innerWidth+by,"height":innerHeight+by});
bw.setStyles({"width":innerWidth+by,"height":innerHeight+by});
}},_createContentElement:function(){var bF=this._createInputElement();
bF.setStyles({"border":h,"padding":0,"margin":0,"display":y,"background":J,"outline":h,"appearance":h,"position":S,"autoComplete":H});
bF.setSelectable(this.getSelectable());
bF.setEnabled(this.getEnabled());
bF.addListener(a,this._onHtmlInput,this);
if(qx.core.Variant.isSet(g,p)){bF.setAttribute(w,M);
}if(qx.core.Variant.isSet(g,A)){bF.setStyle(F,h);
}if(qx.core.Variant.isSet(g,v)){bF.setStyles({backgroundImage:B+qx.util.ResourceManager.getInstance().toUri(I)+r});
}return bF;
},_applyEnabled:function(bo,bp){arguments.callee.base.call(this,bo,bp);
this.getContentElement().setEnabled(bo);

if(bo){this._showPlaceholder();
}else{this._removePlaceholder();
}},__lG:{width:16,height:16},_getContentHint:function(){return {width:this.__lG.width*10,height:this.__lG.height||16};
},_applyFont:function(be,bf){var bg;

if(be){var bh=qx.theme.manager.Font.getInstance().resolve(be);
bg=bh.getStyles();
}else{bg=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bg);
this.__lH().setStyles(bg);
if(be){this.__lG=qx.bom.Label.getTextSize(q,bg);
}else{delete this.__lG;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bz,bA){if(bz){this.getContentElement().setStyle(j,qx.theme.manager.Color.getInstance().resolve(bz));
this.__lH().setStyle(j,qx.theme.manager.Color.getInstance().resolve(bz));
}else{this.getContentElement().removeStyle(j);
this.__lH().removeStyle(j);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__lG;
},_onHtmlInput:function(e){var bc=e.getData();
var bb=true;
this.__lE=false;
if(this.getFilter()!=null){var bd=i;
var Y=bc.search(this.getFilter());
var ba=bc;

while(Y>=0){bd=bd+(ba.charAt(Y));
ba=ba.substring(Y+1,ba.length);
Y=ba.search(this.getFilter());
}
if(bd!=bc){bb=false;
bc=bd;
this.getContentElement().setValue(bc);
}}if(bc.length>this.getMaxLength()){var bb=false;
this.getContentElement().setValue(bc.substr(0,this.getMaxLength()));
}if(bb){this.fireDataEvent(a,bc);
if(this.getLiveUpdate()){this.fireNonBubblingEvent(f,qx.event.type.Data,[bc]);
}}},setValue:function(bB){if(bB===null){if(this.__lE){return bB;
}bB=i;
this.__lE=true;
}else{this.__lE=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bB)){var bD=this.getContentElement();

if(bB.length>this.getMaxLength()){bB=bB.substr(0,this.getMaxLength());
}
if(bD.getValue()!=bB){var bE=bD.getValue();
bD.setValue(bB);
var bC=this.__lE?null:bB;
this.fireNonBubblingEvent(f,qx.event.type.Data,[bC,bE]);
}this._showPlaceholder();
return bB;
}throw new Error("Invalid value type: "+bB);
},getValue:function(){var X=this.getContentElement().getValue();
return this.__lE?null:X;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__lE=e.getData()===null;
this.fireNonBubblingEvent(f,qx.event.type.Data,[e.getData()]);
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bk,bl){this.getContentElement().setTextSelection(bk,bl);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bj=this.getValue()||i;
var bi=this.getPlaceholder();

if(bi!=null&&bj==i&&!this.hasState(l)&&!this.hasState(u)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__lH().setStyle(V,T);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__lH().setStyle(V,t);
}},__lH:function(){if(this.__lF==null){this.__lF=new qx.html.Label();
this.__lF.setStyles({"visibility":T,"zIndex":6,"position":S});
this.getContainerElement().add(this.__lF);
}return this.__lF;
},_applyPlaceholder:function(bm,bn){this.__lH().setValue(bm);

if(bm!=null){this.addListener(W,this._removePlaceholder,this);
this.addListener(U,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(W,this._removePlaceholder,this);
this.removeListener(U,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bI,bJ){this.getContentElement().setStyle(o,bI);
},_applyReadOnly:function(bK,bL){var bM=this.getContentElement();
bM.setAttribute(R,bK);

if(bK){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__lF=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var s="none",r="wrap",q="value",p="qx.client",o="textarea",n="off",m="on",l="qxSelectable",k="",j="webkit",f="input",i="qx.html.Input",h="select",e="disabled",d="read-only",g="userSelect";
qx.Class.define(i,{extend:qx.html.Element,construct:function(B){arguments.callee.base.call(this);
this.__lI=B;
if(B===h||B===o){this.setNodeName(B);
}else{this.setNodeName(f);
}},members:{__lI:null,__lJ:null,__lK:null,_createDomElement:function(){return qx.bom.Input.create(this.__lI);
},_applyProperty:function(name,t){arguments.callee.base.call(this,name,t);
var u=this.getDomElement();

if(name===q){qx.bom.Input.setValue(u,t);
}else if(name===r){qx.bom.Input.setWrap(u,t);
}},setEnabled:qx.core.Variant.select(p,{"webkit":function(v){this.__lK=v;

if(!v){this.setStyles({"userModify":d,"userSelect":s});
}else{this.setStyles({"userModify":null,"userSelect":this.__lJ?null:s});
}},"default":function(A){this.setAttribute(e,A===false);
}}),setSelectable:qx.core.Variant.select(p,{"webkit":function(a){this.__lJ=a;
this.setAttribute(l,a?m:n);
if(qx.core.Variant.isSet(p,j)){var b=this.__lK?a?null:s:s;
this.setStyle(g,b);
}},"default":function(w){this.setAttribute(l,w?m:n);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(q,y);
}return this;
},getValue:function(){var c=this.getDomElement();

if(c){return qx.bom.Input.getValue(c);
}return this._getProperty(q)||k;
},setWrap:function(x){if(this.__lI===o){this._setProperty(r,x);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__lI===o){return this._getProperty(r);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var W="change",V="input",U="checkbox",T="radio",S="textarea",R="qx.client",Q="text",P="password",O="keypress",N="propertychange",J="select-multiple",M="checked",L="value",I="select",H="qx.event.handler.Input",K="Enter";
qx.Class.define(H,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){var c=a.tagName.toLowerCase();

if(b===V&&(c===V||c===S)){return true;
}
if(b===W&&(c===V||c===S||c===I)){return true;
}return false;
},registerEvent:qx.core.Variant.select(R,{"mshtml":function(d,f,g){if(!d.__lL){var h=d.tagName.toLowerCase();
var j=d.type;

if(j===Q||j===P||h===S||j===U||j===T){qx.bom.Event.addNativeListener(d,N,this._onPropertyWrapper);
}
if(j!==U&&j!==T){qx.bom.Event.addNativeListener(d,W,this._onChangeValueWrapper);
}this.__lO(d,j);
d.__lL=true;
}},"default":function(t,u,v){if(u===V){this.__lM(t);
}else if(u===W){if(t.type===T||t.type===U){qx.bom.Event.addNativeListener(t,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(t,W,this._onChangeValueWrapper);
}this.__lO(t,t.type);
}}}),__lM:qx.core.Variant.select(R,{"mshtml":null,"webkit":function(q){var r=q.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&r==S){qx.bom.Event.addNativeListener(q,O,this._onInputWrapper);
}qx.bom.Event.addNativeListener(q,V,this._onInputWrapper);
},"default":function(k){qx.bom.Event.addNativeListener(k,V,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(R,{"mshtml":function(X,Y){if(X.__lL){var ba=X.tagName.toLowerCase();
var bb=X.type;

if(bb===Q||bb===P||ba===S||bb===U||bb===T){qx.bom.Event.removeNativeListener(X,N,this._onPropertyWrapper);
}
if(bb!==U&&bb!==T){qx.bom.Event.removeNativeListener(X,W,this._onChangeValueWrapper);
}
try{delete X.__lL;
}catch(w){X.__lL=null;
}}},"default":function(bc,bd){if(bd===V){this.__lM(bc);
}else if(bd===W){if(bc.type===T||bc.type===U){qx.bom.Event.removeNativeListener(bc,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(bc,W,this._onChangeValueWrapper);
}}}}),__lN:qx.core.Variant.select(R,{"mshtml":null,"webkit":function(C){var D=C.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&D==S){qx.bom.Event.removeNativeListener(C,O,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(C,V,this._onInputWrapper);
},"default":function(s){qx.bom.Event.removeNativeListener(s,V,this._onInputWrapper);
}}),__lO:qx.core.Variant.select(R,{"mshtml|opera":function(m,n){if(n===Q||n===P){qx.event.Registration.addListener(m,O,function(e){if(e.getKeyIdentifier()===K){qx.event.Registration.fireEvent(m,W,qx.event.type.Data,[m.value]);
}});
}},"default":function(y,z){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var x=e.target;
qx.event.Registration.fireEvent(x,V,qx.event.type.Data,[x.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var G=e.target||e.srcElement;
var F=G.value;

if(G.type===J){var F=[];

for(var i=0,o=G.options,l=o.length;i<l;i++){if(o[i].selected){F.push(o[i].value);
}}}qx.event.Registration.fireEvent(G,W,qx.event.type.Data,[F]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var p=e.target;

if(p.type===T){if(p.checked){qx.event.Registration.fireEvent(p,W,qx.event.type.Data,[p.value]);
}}else{qx.event.Registration.fireEvent(p,W,qx.event.type.Data,[p.checked]);
}}),_onProperty:qx.core.Variant.select(R,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var A=e.target||e.srcElement;
var B=e.propertyName;

if(B===L&&(A.type===Q||A.type===P||A.tagName.toLowerCase()===S)){if(!A.__inValueSet){qx.event.Registration.fireEvent(A,V,qx.event.type.Data,[A.value]);
}}else if(B===M){if(A.type===U){qx.event.Registration.fireEvent(A,W,qx.event.type.Data,[A.checked]);
}else if(A.checked){qx.event.Registration.fireEvent(A,W,qx.event.type.Data,[A.value]);
}}}),"default":function(){}})},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var z="",y="select",x="soft",w="off",v="qx.client",u="wrap",t="text",s="mshtml",r="number",q="checkbox",h="select-one",p="input",m="option",g="value",f="radio",k="qx.bom.Input",j="nowrap",n="textarea",e="auto",o="normal";
qx.Class.define(k,{statics:{__lP:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(V,W,X){{};
var W=W?qx.lang.Object.clone(W):{};
var Y;

if(V===n||V===y){Y=V;
}else{Y=p;
W.type=V;
}return qx.bom.Element.create(Y,W,X);
},setValue:function(K,L){var Q=K.nodeName.toLowerCase();
var N=K.type;
var Array=qx.lang.Array;
var R=qx.lang.Type;

if(typeof L===r){L+=z;
}
if((N===q||N===f)){if(R.isArray(L)){K.checked=Array.contains(L,K.value);
}else{K.checked=K.value==L;
}}else if(Q===y){var M=R.isArray(L);
var S=K.options;
var O,P;

for(var i=0,l=S.length;i<l;i++){O=S[i];
P=O.getAttribute(g);

if(P==null){P=O.text;
}O.selected=M?Array.contains(L,P):L==P;
}
if(M&&L.length==0){K.selectedIndex=-1;
}}else if(N===t&&qx.core.Variant.isSet(v,s)){K.__lQ=true;
K.value=L;
K.__lQ=null;
}else{K.value=L;
}},getValue:function(A){var G=A.nodeName.toLowerCase();

if(G===m){return (A.attributes.value||{}).specified?A.value:A.text;
}
if(G===y){var B=A.selectedIndex;
if(B<0){return null;
}var H=[];
var J=A.options;
var I=A.type==h;
var F=qx.bom.Input;
var E;
for(var i=I?B:0,D=I?B+1:J.length;i<D;i++){var C=J[i];

if(C.selected){E=F.getValue(C);
if(I){return E;
}H.push(E);
}}return H;
}else{return (A.value||z).replace(/\r/g,z);
}},setWrap:qx.core.Variant.select(v,{"mshtml":function(T,U){T.wrap=U?x:w;
},"gecko|webkit":function(a,b){var d=b?x:w;
var c=b?z:e;
a.setAttribute(u,d);
a.style.overflow=c;
},"default":function(ba,bb){ba.style.whiteSpace=bb?o:j;
}})}});
})();
(function(){var c="interval",b="qx.util.TimerManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__lR:[],__lS:{},__lT:0},members:{start:function(f,g,h,j,k){if(!k){k=g||0;
}var l=(new Date()).getTime()+k;
arguments.callee.self.__lS[++arguments.callee.self.__lT]={callback:f,userData:j||null,expireAt:l,recurTime:g,context:h||this};
this.__lU(l,arguments.callee.self.__lT);
return arguments.callee.self.__lT;
},stop:function(d){var e=arguments.callee.self.__lR;
var length=e.length;

for(var i=0;i<length;i++){if(e[i]==d){e.splice(i,1);
break;
}}delete arguments.callee.self.__lS[d];
if(e.length==0){qx.event.Idle.getInstance().removeListener(c,this.__lV);
}},__lU:function(s,t){var v=arguments.callee.self.__lR;
var u=arguments.callee.self.__lS;
var length=v.length;

for(var i=0;i<length;i++){if(u[v[i]].expireAt>s){v.splice(i,0,t);
break;
}}if(v.length==length){v.push(t);
}if(v.length==1){qx.event.Idle.getInstance().addListener(c,this.__lV,this);
}},__lV:function(){var p=(new Date()).getTime();
var n=arguments.callee.self.__lR;
var o=arguments.callee.self.__lS;
while(n.length>0&&o[n[0]].expireAt<=p){var r=(n.splice(0,1))[0];
var m=o[r];
m.callback.call(m.context,m.userData,r);
if(m.recurTime&&o[r]){var q=(new Date()).getTime();
m.expireAt=q+m.recurTime;
this.__lU(m.expireAt,r);
}else{delete o[r];
}}if(n.length==0){qx.event.Idle.getInstance().removeListener(c,this.__lV);
}}}});
})();
(function(){var k="qx.event.type.Data",j="EVENT_TYPE_DATA_CHANGED",i="qx.ui.table.ITableModel",h="New code should not use this. Instead, use the text string 'dataChanged' literally.",g="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",f="qx.event.type.Event",e="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(i,{events:{"dataChanged":k,"metaDataChanged":f,"sorted":k},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(l){},getColumnCount:function(){},getColumnId:function(o){},getColumnIndexById:function(p){},getColumnName:function(w){},isColumnEditable:function(A){},isColumnSortable:function(v){},sortByColumn:function(a,b){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(m,n){},getValue:function(c,d){},getValueById:function(q,r){},setValue:function(s,t,u){},setValueById:function(x,y,z){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,j,h);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,e,g);
})();
(function(){var y="metaDataChanged",x="qx.event.type.Data",w="qx.event.type.Event",v="abstract",u="qx.ui.table.model.Abstract";
qx.Class.define(u,{type:v,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":x,"metaDataChanged":w,"sorted":x},construct:function(){arguments.callee.base.call(this);
this.__lW=[];
this.__lX=[];
this.__lY={};
},members:{__lW:null,__lX:null,__lY:null,__ma:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(C){return null;
},isColumnEditable:function(o){return false;
},isColumnSortable:function(n){return false;
},sortByColumn:function(p,q){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(l,m){},getValue:function(a,b){throw new Error("getValue is abstract");
},getValueById:function(E,F){return this.getValue(this.getColumnIndexById(E),F);
},setValue:function(c,d,e){throw new Error("setValue is abstract");
},setValueById:function(h,j,k){this.setValue(this.getColumnIndexById(h),j,k);
},getColumnCount:function(){return this.__lW.length;
},getColumnIndexById:function(D){return this.__lY[D];
},getColumnId:function(B){return this.__lW[B];
},getColumnName:function(A){return this.__lX[A];
},setColumnIds:function(f){this.__lW=f;
this.__lY={};

for(var i=0;i<f.length;i++){this.__lY[f[i]]=i;
}this.__lX=new Array(f.length);
if(!this.__ma){this.fireEvent(y);
}},setColumnNamesByIndex:function(g){if(this.__lW.length!=g.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__lW.length+" != "+g.length);
}this.__lX=g;
this.fireEvent(y);
},setColumnNamesById:function(z){this.__lX=new Array(this.__lW.length);

for(var i=0;i<this.__lW.length;++i){this.__lX[i]=z[this.__lW[i]];
}},setColumns:function(r,s){var t=this.__lW.length==0||s;

if(s==null){if(this.__lW.length==0){s=r;
}else{s=this.__lW;
}}
if(s.length!=r.length){throw new Error("columnIdArr and columnNameArr have different length: "+s.length+" != "+r.length);
}
if(t){this.__ma=true;
this.setColumnIds(s);
this.__ma=false;
}this.setColumnNamesByIndex(r);
}},destruct:function(){this.__lW=this.__lX=this.__lY=null;
}});
})();
(function(){var M="dataChanged",L="metaDataChanged",K="qx.ui.table.model.Simple",J="Boolean",I="sorted";
qx.Class.define(K,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__mb=[];
this.__mc=-1;
this.__md=[];
this.__me=null;
},properties:{caseSensitiveSorting:{check:J,init:true}},statics:{_defaultSortComparatorAscending:function(u,v){var w=u[arguments.callee.columnIndex];
var x=v[arguments.callee.columnIndex];
return (w>x)?1:((w==x)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bo,bp){var bq=(isNaN(bo[arguments.callee.columnIndex])?bo[arguments.callee.columnIndex].toLowerCase():bo[arguments.callee.columnIndex]);
var br=(isNaN(bp[arguments.callee.columnIndex])?bp[arguments.callee.columnIndex].toLowerCase():bp[arguments.callee.columnIndex]);
return (bq>br)?1:((bq==br)?0:-1);
},_defaultSortComparatorDescending:function(q,r){var s=q[arguments.callee.columnIndex];
var t=r[arguments.callee.columnIndex];
return (s<t)?1:((s==t)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(Y,ba){var bb=(isNaN(Y[arguments.callee.columnIndex])?Y[arguments.callee.columnIndex].toLowerCase():Y[arguments.callee.columnIndex]);
var bc=(isNaN(ba[arguments.callee.columnIndex])?ba[arguments.callee.columnIndex].toLowerCase():ba[arguments.callee.columnIndex]);
return (bb<bc)?1:((bb==bc)?0:-1);
}},members:{__mb:null,__me:null,__mf:null,__md:null,__mc:null,__mg:null,getRowData:function(C){var D=this.__mb[C];

if(D==null||D.originalData==null){return D;
}else{return D.originalData;
}},getRowDataAsMap:function(R){var T=this.__mb[R];
var S={};

for(var U=0;U<this.getColumnCount();U++){S[this.getColumnId(U)]=T[U];
}return S;
},getDataAsMapArray:function(){var bK=this.getRowCount();
var bJ=[];

for(var i=0;i<bK;i++){bJ.push(this.getRowDataAsMap(i));
}return bJ;
},setEditable:function(bx){this.__me=[];

for(var by=0;by<this.getColumnCount();by++){this.__me[by]=bx;
}this.fireEvent(L);
},setColumnEditable:function(A,B){if(B!=this.isColumnEditable(A)){if(this.__me==null){this.__me=[];
}this.__me[A]=B;
this.fireEvent(L);
}},isColumnEditable:function(n){return this.__me?(this.__me[n]==true):false;
},setColumnSortable:function(o,p){if(p!=this.isColumnSortable(o)){if(this.__mf==null){this.__mf=[];
}this.__mf[o]=p;
this.fireEvent(L);
}},isColumnSortable:function(bI){return (this.__mf?(this.__mf[bI]!==false):true);
},sortByColumn:function(bs,bt){var bw;
var bv=this.__md[bs];

if(bv){bw=(bt?bv.ascending:bv.descending);
}else{if(this.getCaseSensitiveSorting()){bw=(bt?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bw=(bt?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bw.columnIndex=bs;
this.__mb.sort(bw);
this.__mc=bs;
this.__mg=bt;
var bu={columnIndex:bs,ascending:bt};
this.fireDataEvent(I,bu);
this.fireEvent(L);
},setSortMethods:function(bh,bi){var bj;

if(qx.lang.Type.isFunction(bi)){bj={ascending:bi,descending:function(f,g){return bi(g,f);
}};
}else{bj=bi;
}this.__md[bh]=bj;
},getSortMethods:function(e){return this.__md[e];
},clearSorting:function(){if(this.__mc!=-1){this.__mc=-1;
this.__mg=true;
this.fireEvent(L);
}},getSortColumnIndex:function(){return this.__mc;
},isSortAscending:function(){return this.__mg;
},getRowCount:function(){return this.__mb.length;
},getValue:function(y,z){if(z<0||z>=this.__mb.length){throw new Error("this.__rowArr out of bounds: "+z+" (0.."+this.__mb.length+")");
}return this.__mb[z][y];
},setValue:function(h,k,l){if(this.__mb[k][h]!=l){this.__mb[k][h]=l;
if(this.hasListener(M)){var m={firstRow:k,lastRow:k,firstColumn:h,lastColumn:h};
this.fireDataEvent(M,m);
}
if(h==this.__mc){this.clearSorting();
}}},setData:function(bF,bG){this.__mb=bF;
if(this.hasListener(M)){var bH={firstRow:0,lastRow:bF.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(M,bH);
}
if(bG!==false){this.clearSorting();
}},getData:function(){return this.__mb;
},setDataAsMapArray:function(V,W,X){this.setData(this._mapArray2RowArr(V,W),X);
},addRows:function(E,F,G){if(F==null){F=this.__mb.length;
}E.splice(0,0,F,0);
Array.prototype.splice.apply(this.__mb,E);
var H={firstRow:F,lastRow:this.__mb.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(M,H);

if(G!==false){this.clearSorting();
}},addRowsAsMapArray:function(a,b,c,d){this.addRows(this._mapArray2RowArr(a,c),b,d);
},setRows:function(bk,bl,bm){if(bl==null){bl=0;
}bk.splice(0,0,bl,bk.length);
Array.prototype.splice.apply(this.__mb,bk);
var bn={firstRow:bl,lastRow:this.__mb.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(M,bn);

if(bm!==false){this.clearSorting();
}},setRowsAsMapArray:function(bd,be,bf,bg){this.setRows(this._mapArray2RowArr(bd,bf),be,bg);
},removeRows:function(N,O,P){this.__mb.splice(N,O);
var Q={firstRow:N,lastRow:this.__mb.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:N,removeCount:O};
this.fireDataEvent(M,Q);

if(P!==false){this.clearSorting();
}},_mapArray2RowArr:function(bz,bA){var bE=bz.length;
var bB=this.getColumnCount();
var bD=new Array(bE);
var bC;

for(var i=0;i<bE;++i){bC=[];

if(bA){bC.originalData=bz[i];
}
for(var j=0;j<bB;++j){bC[j]=bz[i][this.getColumnId(j)];
}bD[i]=bC;
}return bD;
}},destruct:function(){this.__mb=this.__me=this.__md=this.__mf=null;
}});
})();
(function(){var cD="Function",cC="Boolean",cB="column-button",cA="qx.event.type.Data",cz="statusbar",cy="qx.ui.table.pane.CellEvent",cx="PageUp",cw="changeLocale",cv="__mr",cu="changeSelection",dQ="qx.dynlocale",dP="Enter",dO="metaDataChanged",dN="dataChanged",dM="on",dL="_applyStatusBarVisible",dK="columnVisibilityMenuCreateStart",dJ="blur",dI="qx.ui.table.Table",dH="columnVisibilityMenuCreateEnd",cK="Use 'resetSelection' instead.",cL="verticalScrollBarChanged",cI="_applyMetaColumnCounts",cJ="one of one row",cG="focus",cH="changeDataRowRenderer",cE="changeHeaderCellHeight",cF="Escape",cS="A",cT="changeSelectionModel",di="Left",de="Down",dr="Integer",dl="_applyHeaderCellHeight",dD="__mi",dx="visibilityChanged",cY="qx.ui.table.ITableModel",dG="orderChanged",dF="_applySelectionModel",dE="menu",cW="_applyAdditionalStatusBarText",db="_applyFocusCellOnMouseMove",dd="table",dg="_applyColumnVisibilityButtonVisible",dj="changeTableModel",dm="qx.event.type.Event",dt="tableWidthChanged",dz="__mq",cM="End",cN="Object",da="_applyShowCellFocusIndicator",dq="resize",dp="__mh",dn="changeScrollY",dv="_applyTableModel",du="menu-button",dk="_applyKeepFirstVisibleRowComplete",ds="widthChanged",cr="Home",dy="_applyRowHeight",cO="F2",cP="appear",df="Up",cs="%1 rows",ct="qx.ui.table.selection.Model",cV="one row",cQ="PageDown",cR="%1 of %2 rows",cU="__mp",dh="keypress",dB="changeRowHeight",dA="Number",dc="changeVisible",dC="qx.ui.table.IRowRenderer",cX="Right",dw="Space";
qx.Class.define(dI,{extend:qx.ui.core.Widget,construct:function(dW,dX){arguments.callee.base.call(this);
if(!dX){dX={};
}
if(dX.selectionManager){this.setNewSelectionManager(dX.selectionManager);
}
if(dX.selectionModel){this.setNewSelectionModel(dX.selectionModel);
}
if(dX.tableColumnModel){this.setNewTableColumnModel(dX.tableColumnModel);
}
if(dX.tablePane){this.setNewTablePane(dX.tablePane);
}
if(dX.tablePaneHeader){this.setNewTablePaneHeader(dX.tablePaneHeader);
}
if(dX.tablePaneScroller){this.setNewTablePaneScroller(dX.tablePaneScroller);
}
if(dX.tablePaneModel){this.setNewTablePaneModel(dX.tablePaneModel);
}
if(dX.columnMenu){this.setNewColumnMenu(dX.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__mh=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__mh,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__mi=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(dW||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(dh,this._onKeyPress);
this.addListener(cG,this._onFocusChanged);
this.addListener(dJ,this._onFocusChanged);
var dY=new qx.ui.core.Widget().set({height:0});
this._add(dY);
dY.addListener(dq,this._onResize,this);
this.__mj=null;
this.__mk=null;
if(qx.core.Variant.isSet(dQ,dM)){qx.locale.Manager.getInstance().addListener(cw,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":cA,"columnVisibilityMenuCreateEnd":cA,"tableWidthChanged":dm,"verticalScrollBarChanged":cA,"cellClick":cy,"cellDblclick":cy,"cellContextmenu":cy,"dataEdited":cA},statics:{__ml:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:dd},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:ct,apply:dF,event:cT},tableModel:{check:cY,apply:dv,event:dj},rowHeight:{check:dA,init:20,apply:dy,event:dB},forceLineHeight:{check:cC,init:true},headerCellHeight:{check:dr,init:16,apply:dl,event:cE,nullable:true},statusBarVisible:{check:cC,init:true,apply:dL},additionalStatusBarText:{nullable:true,init:null,apply:cW},columnVisibilityButtonVisible:{check:cC,init:true,apply:dg},metaColumnCounts:{check:cN,apply:cI},focusCellOnMouseMove:{check:cC,init:false,apply:db},rowFocusChangeModifiesSelection:{check:cC,init:true},showCellFocusIndicator:{check:cC,init:true,apply:da},keepFirstVisibleRowComplete:{check:cC,init:true,apply:dk},alwaysUpdateCells:{check:cC,init:false},dataRowRenderer:{check:dC,init:null,nullable:true,event:cH},modalCellEditorPreOpenFunction:{check:cD,init:null,nullable:true},newColumnMenu:{check:cD,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:cD,init:function(r){return new qx.ui.table.selection.Manager(r);
}},newSelectionModel:{check:cD,init:function(be){return new qx.ui.table.selection.Model(be);
}},newTableColumnModel:{check:cD,init:function(ef){return new qx.ui.table.columnmodel.Basic(ef);
}},newTablePane:{check:cD,init:function(a){return new qx.ui.table.pane.Pane(a);
}},newTablePaneHeader:{check:cD,init:function(bo){return new qx.ui.table.pane.Header(bo);
}},newTablePaneScroller:{check:cD,init:function(u){return new qx.ui.table.pane.Scroller(u);
}},newTablePaneModel:{check:cD,init:function(cm){return new qx.ui.table.pane.Model(cm);
}}},members:{__mj:null,__mk:null,__mh:null,__mi:null,__mm:null,__mn:null,__mo:null,__mp:null,__mq:null,__mr:null,_createChildControlImpl:function(W){var X;

switch(W){case cz:X=new qx.ui.basic.Label();
X.set({allowGrowX:true});
this._add(X);
break;
case cB:X=this.getNewColumnMenu()();
X.set({focusable:false});
var Y=X.factory(dE,{table:this});
Y.addListener(cP,this._initColumnMenu,this);
break;
}return X||arguments.callee.base.call(this,W);
},_applySelectionModel:function(s,t){this.__mi.setSelectionModel(s);

if(t!=null){t.removeListener(cu,this._onSelectionChanged,this);
}s.addListener(cu,this._onSelectionChanged,this);
},_applyRowHeight:function(bg,bh){var bi=this._getPaneScrollerArr();

for(var i=0;i<bi.length;i++){bi[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(bO,bP){var bQ=this._getPaneScrollerArr();

for(var i=0;i<bQ.length;i++){bQ[i].getHeader().setHeight(bO);
}},getEmptyTableModel:function(){if(!this.__mr){this.__mr=new qx.ui.table.model.Simple();
this.__mr.setColumns([]);
this.__mr.setData([]);
}return this.__mr;
},_applyTableModel:function(el,em){this.getTableColumnModel().init(el.getColumnCount(),this);

if(em!=null){em.removeListener(dO,this._onTableModelMetaDataChanged,this);
em.removeListener(dN,this._onTableModelDataChanged,this);
}el.addListener(dO,this._onTableModelMetaDataChanged,this);
el.addListener(dN,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,el.getRowCount(),0,el.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__mq){var f=this.__mq=this.getNewTableColumnModel()(this);
f.addListener(dx,this._onColVisibilityChanged,this);
f.addListener(ds,this._onColWidthChanged,this);
f.addListener(dG,this._onColOrderChanged,this);
var e=this.getTableModel();
f.init(e.getColumnCount(),this);
var c=this._getPaneScrollerArr();

for(var i=0;i<c.length;i++){var d=c[i];
var g=d.getTablePaneModel();
g.setTableColumnModel(f);
}}return this.__mq;
},_applyStatusBarVisible:function(dU,dV){if(dU){this._showChildControl(cz);
}else{this._excludeChildControl(cz);
}
if(dU){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(p,q){this.__mm=p;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ck,cl){if(ck){this._showChildControl(cB);
}else{this._excludeChildControl(cB);
}},_applyMetaColumnCounts:function(w,y){var F=w;
var z=this._getPaneScrollerArr();
var D={};

if(w>y){var H=qx.event.Registration.getManager(z[0]);

for(var I in qx.ui.table.Table.__ml){D[I]={};
D[I].capture=H.getListeners(z[0],I,true);
D[I].bubble=H.getListeners(z[0],I,false);
}}this._cleanUpMetaColumns(F.length);
var E=0;

for(var i=0;i<z.length;i++){var J=z[i];
var G=J.getTablePaneModel();
G.setFirstColumnX(E);
G.setMaxColumnCount(F[i]);
E+=F[i];
}if(F.length>z.length){var C=this.getTableColumnModel();

for(var i=z.length;i<F.length;i++){var G=this.getNewTablePaneModel()(C);
G.setFirstColumnX(E);
G.setMaxColumnCount(F[i]);
E+=F[i];
var J=this.getNewTablePaneScroller()(this);
J.setTablePaneModel(G);
J.addListener(dn,this._onScrollY,this);
for(I in qx.ui.table.Table.__ml){if(!D[I]){break;
}
if(D[I].capture&&D[I].capture.length>0){var A=D[I].capture;

for(var i=0;i<A.length;i++){var B=A[i].context;

if(!B){B=this;
}else if(B==z[0]){B=J;
}J.addListener(I,A[i].handler,B,true);
}}
if(D[I].bubble&&D[I].bubble.length>0){var L=D[I].bubble;

for(var i=0;i<L.length;i++){var B=L[i].context;

if(!B){B=this;
}else if(B==z[0]){B=J;
}J.addListener(I,L[i].handler,B,false);
}}}var K=(i==F.length-1)?1:0;
this.__mh.add(J,{flex:K});
z=this._getPaneScrollerArr();
}}for(var i=0;i<z.length;i++){var J=z[i];
var M=(i==(z.length-1));
J.getHeader().setHeight(this.getHeaderCellHeight());
J.setTopRightWidget(M?this.getChildControl(cB):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(cB);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(bR,bS){var bT=this._getPaneScrollerArr();

for(var i=0;i<bT.length;i++){bT[i].setFocusCellOnMouseMove(bR);
}},_applyShowCellFocusIndicator:function(eL,eM){var eN=this._getPaneScrollerArr();

for(var i=0;i<eN.length;i++){eN[i].setShowCellFocusIndicator(eL);
}},_applyKeepFirstVisibleRowComplete:function(bv,bw){var bx=this._getPaneScrollerArr();

for(var i=0;i<bx.length;i++){bx[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__mi;
},_getPaneScrollerArr:function(){return this.__mh.getChildren();
},getPaneScroller:function(ec){return this._getPaneScrollerArr()[ec];
},_cleanUpMetaColumns:function(ej){var ek=this._getPaneScrollerArr();

if(ek!=null){for(var i=ek.length-1;i>=ej;i--){ek[i].destroy();
}}},_onChangeLocale:function(v){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(ba){var bb=this._getPaneScrollerArr();

for(var i=0;i<bb.length;i++){bb[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(er){var es=this._getPaneScrollerArr();

for(var i=0;i<es.length;i++){es[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(et){var eu=et.getData();
this._updateTableData(eu.firstRow,eu.lastRow,eu.firstColumn,eu.lastColumn,eu.removeStart,eu.removeCount);
},_updateTableData:function(cc,cd,ce,cf,cg,ch){var ci=this._getPaneScrollerArr();
if(ch){this.getSelectionModel().removeSelectionInterval(cg,cg+ch);
}
for(var i=0;i<ci.length;i++){ci[i].onTableModelDataChanged(cc,cd,ce,cf);
}var cj=this.getTableModel().getRowCount();

if(cj!=this.__mn){this.__mn=cj;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(bm){if(!this.__mo){this.__mo=true;
var bn=this._getPaneScrollerArr();

for(var i=0;i<bn.length;i++){bn[i].setScrollY(bm.getData());
}this.__mo=false;
}},_onKeyPress:function(eC){if(!this.getEnabled()){return;
}var eJ=this.__mk;
var eG=true;
var eK=eC.getKeyIdentifier();

if(this.isEditing()){if(eC.getModifiers()==0){switch(eK){case dP:this.stopEditing();
var eJ=this.__mk;
this.moveFocusedCell(0,1);

if(this.__mk!=eJ){eG=this.startEditing();
}break;
case cF:this.cancelEditing();
this.focus();
break;
default:eG=false;
break;
}}return;
}else{if(eC.isCtrlPressed()){eG=true;

switch(eK){case cS:var eH=this.getTableModel().getRowCount();

if(eH>0){this.getSelectionModel().setSelectionInterval(0,eH-1);
}break;
default:eG=false;
break;
}}else{switch(eK){case dw:this.__mi.handleSelectKeyDown(this.__mk,eC);
break;
case cO:case dP:eG=this.startEditing();
break;
case cr:this.setFocusedCell(this.__mj,0,true);
break;
case cM:var eH=this.getTableModel().getRowCount();
this.setFocusedCell(this.__mj,eH-1,true);
break;
case di:this.moveFocusedCell(-1,0);
break;
case cX:this.moveFocusedCell(1,0);
break;
case df:this.moveFocusedCell(0,-1);
break;
case de:this.moveFocusedCell(0,1);
break;
case cx:case cQ:var eF=this.getPaneScroller(0);
var eI=eF.getTablePane();
var eH=eI.getVisibleRowCount()-1;
var eE=this.getRowHeight();
var eD=(eK==cx)?-1:1;
eF.setScrollY(eF.getScrollY()+eD*eH*eE);
this.moveFocusedCell(0,eD*eH);
break;
default:eG=false;
}}}
if(eJ!=this.__mk&&this.getRowFocusChangeModifiesSelection()){this.__mi.handleMoveKeyDown(this.__mk,eC);
}
if(eG){eC.preventDefault();
eC.stopPropagation();
}},_onFocusChanged:function(bt){var bu=this._getPaneScrollerArr();

for(var i=0;i<bu.length;i++){bu[i].onFocusChanged();
}},_onColVisibilityChanged:function(dR){var dS=this._getPaneScrollerArr();

for(var i=0;i<dS.length;i++){dS[i].onColVisibilityChanged();
}var dT=dR.getData();

if(this.__mp!=null&&dT.col!=null&&dT.visible!=null){this.__mp[dT.col].setVisible(dT.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(bL){var bM=this._getPaneScrollerArr();

for(var i=0;i<bM.length;i++){var bN=bL.getData();
bM[i].setColumnWidth(bN.col,bN.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(bU){var bV=this._getPaneScrollerArr();

for(var i=0;i<bV.length;i++){bV[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(ea){var eb=this._getMetaColumnAtPageX(ea);
return (eb!=-1)?this.getPaneScroller(eb):null;
},setFocusedCell:function(eO,eP,eQ){if(!this.isEditing()&&(eO!=this.__mj||eP!=this.__mk)){if(eO===null){eO=0;
}this.__mj=eO;
this.__mk=eP;
var eR=this._getPaneScrollerArr();

for(var i=0;i<eR.length;i++){eR[i].setFocusedCell(eO,eP);
}
if(eO!==null&&eQ){this.scrollCellVisible(eO,eP);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cK);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__mj;
},getFocusedRow:function(){return this.__mk;
},highlightFocusedRow:function(V){this.getDataRowRenderer().setHighlightFocusRow(V);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var b=this._getPaneScrollerArr();

for(var i=0;i<b.length;i++){b[i].onFocusChanged();
}},moveFocusedCell:function(N,O){var S=this.__mj;
var T=this.__mk;

if(S===null||T===null){return;
}
if(N!=0){var R=this.getTableColumnModel();
var x=R.getVisibleX(S);
var Q=R.getVisibleColumnCount();
x=qx.lang.Number.limit(x+N,0,Q-1);
S=R.getVisibleColumnAtX(x);
}
if(O!=0){var P=this.getTableModel();
T=qx.lang.Number.limit(T+O,0,P.getRowCount()-1);
}this.setFocusedCell(S,T,true);
},scrollCellVisible:function(bz,bA){var bB=this.getTableColumnModel();
var x=bB.getVisibleX(bz);
var bC=this._getMetaColumnAtColumnX(x);

if(bC!=-1){this.getPaneScroller(bC).scrollCellVisible(bz,bA);
}},isEditing:function(){if(this.__mj!=null){var x=this.getTableColumnModel().getVisibleX(this.__mj);
var bl=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(bl).isEditing();
}return false;
},startEditing:function(){if(this.__mj!=null){var x=this.getTableColumnModel().getVisibleX(this.__mj);
var ee=this._getMetaColumnAtColumnX(x);
var ed=this.getPaneScroller(ee).startEditing();
return ed;
}return false;
},stopEditing:function(){if(this.__mj!=null){var x=this.getTableColumnModel().getVisibleX(this.__mj);
var bW=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(bW).stopEditing();
}},cancelEditing:function(){if(this.__mj!=null){var x=this.getTableColumnModel().getVisibleX(this.__mj);
var U=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(U).cancelEditing();
}},updateContent:function(){var by=this._getPaneScrollerArr();

for(var i=0;i<by.length;i++){by[i].getTablePane().updateContent();
}},_getMetaColumnAtPageX:function(eg){var eh=this._getPaneScrollerArr();

for(var i=0;i<eh.length;i++){var ei=eh[i].getContainerLocation();

if(eg>=ei.left&&eg<=ei.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(cn){var cp=this.getMetaColumnCounts();
var cq=0;

for(var i=0;i<cp.length;i++){var co=cp[i];
cq+=co;

if(co==-1||cn<cq){return i;
}}return -1;
},_updateStatusBar:function(){var h=this.getTableModel();

if(this.getStatusBarVisible()){var j=this.getSelectionModel().getSelectedCount();
var m=h.getRowCount();
var k;

if(m>=0){if(j==0){k=this.trn(cV,cs,m,m);
}else{k=this.trn(cJ,cR,m,j,m);
}}
if(this.__mm){if(k){k+=this.__mm;
}else{k=this.__mm;
}}
if(k){this.getChildControl(cz).setValue(k);
}}},_updateScrollerWidths:function(){var bX=this._getPaneScrollerArr();

for(var i=0;i<bX.length;i++){var ca=(i==(bX.length-1));
var cb=bX[i].getTablePaneModel().getTotalWidth();
bX[i].setPaneWidth(cb);
var bY=ca?1:0;
bX[i].setLayoutProperties({flex:bY});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var bG=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var bJ=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var bD=this._getPaneScrollerArr();
var bF=false;
var bI=false;

for(var i=0;i<bD.length;i++){var bK=(i==(bD.length-1));
var bE=bD[i].getNeededScrollBars(bF,!bK);

if(bE&bG){bF=true;
}
if(bK&&(bE&bJ)){bI=true;
}}for(var i=0;i<bD.length;i++){var bK=(i==(bD.length-1));
var bH;
bD[i].setHorizontalScrollBarVisible(bF);
if(bK){bH=bD[i].getVerticalScrollBarVisible();
}bD[i].setVerticalScrollBarVisible(bK&&bI);
if(bK&&bI!=bH){this.fireDataEvent(cL,bI);
}}},_initColumnMenu:function(){var ex=this.getTableModel();
var ey=this.getTableColumnModel();
var ez=this.getChildControl(cB);
ez.empty();
var ew=ez.getMenu();
var eA={table:this,menu:ew,columnButton:ez};
this.fireDataEvent(dK,eA);
this.__mp={};

for(var eB=0,l=ex.getColumnCount();eB<l;eB++){var ev=ez.factory(du,{text:ex.getColumnName(eB),column:eB,bVisible:ey.isColumnVisible(eB)});
qx.core.Assert.assertInterface(ev,qx.ui.table.IColumnMenuItem);
ev.addListener(dc,this._createColumnVisibilityCheckBoxHandler(eB),this);
this.__mp[eB]=ev;
}var eA={table:this,menu:ew,columnButton:ez};
this.fireDataEvent(dH,eA);
},_createColumnVisibilityCheckBoxHandler:function(bf){return function(bc){var bd=this.getTableColumnModel();
bd.setColumnVisible(bf,bc.getData());
};
},setColumnWidth:function(bj,bk){this.getTableColumnModel().setColumnWidth(bj,bk);
},_onResize:function(){this.fireEvent(dt);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(bp,bq,self,br){if(arguments.callee.self.__ml[bp]){for(var i=0,bs=this._getPaneScrollerArr();i<bs.length;i++){bs[i].addListener.apply(bs[i],arguments);
}}else{return arguments.callee.base.call(this,bp,bq,self,br);
}},removeListener:function(en,eo,self,ep){if(arguments.callee.self.__ml[en]){for(var i=0,eq=this._getPaneScrollerArr();i<eq.length;i++){eq[i].removeListener.apply(eq[i],arguments);
}}else{arguments.callee.base.call(this,en,eo,self,ep);
}},destroy:function(){this.getChildControl(cB).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(dQ,dM)){qx.locale.Manager.getInstance().removeListener(cw,this._onChangeLocale,this);
}var o=this.getSelectionModel();

if(o){o.dispose();
}var n=this.getDataRowRenderer();

if(n){n.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(dD,dp,cv,cv,dz);
this._disposeMap(cU);
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(d,e){},getRowHeightStyle:function(c){},createRowStyle:function(b){},getRowClass:function(f){}}});
})();
(function(){var z="",y="table-row-background-even",x="table-row-background-selected",w="table-row",v="background-color:",u="table-row-background-focused",t=';border-bottom: 1px solid ',s=';color:',r="table-row-selected",q="table-row-background-odd",j="default",p="table-row-background-focused-selected",m="qx.ui.table.rowrenderer.Default",i="table-row-line",h="'",l="height:",k=";",n="px;",g="1px solid ",o="Boolean";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__ms=z;
this.__ms={};
this.__mt={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(j));
var A=qx.theme.manager.Color.getInstance();
this.__mt.bgcolFocusedSelected=A.resolve(p);
this.__mt.bgcolFocused=A.resolve(u);
this.__mt.bgcolSelected=A.resolve(x);
this.__mt.bgcolEven=A.resolve(y);
this.__mt.bgcolOdd=A.resolve(q);
this.__mt.colSelected=A.resolve(r);
this.__mt.colNormal=A.resolve(w);
this.__mt.horLine=A.resolve(i);
},properties:{highlightFocusRow:{check:o,init:true}},members:{__mt:null,__mu:null,__ms:null,_insetY:1,_renderFont:function(f){if(f){this.__mu=f.getStyles();
this.__ms=qx.bom.element.Style.compile(this.__mu);
this.__ms=this.__ms.replace(/"/g,h);
}else{this.__ms=z;
this.__mu=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(b,c){var e=this.__mu;
var d=c.style;
qx.bom.element.Style.setStyles(c,e);

if(b.focusedRow&&this.getHighlightFocusRow()){d.backgroundColor=b.selected?this.__mt.bgcolFocusedSelected:this.__mt.bgcolFocused;
}else{if(b.selected){d.backgroundColor=this.__mt.bgcolSelected;
}else{d.backgroundColor=(b.row%2==0)?this.__mt.bgcolEven:this.__mt.bgcolOdd;
}}d.color=b.selected?this.__mt.colSelected:this.__mt.colNormal;
d.borderBottom=g+this.__mt.horLine;
},getRowHeightStyle:function(B){if(qx.bom.client.Feature.CONTENT_BOX){B-=this._insetY;
}return l+B+n;
},createRowStyle:function(C){var D=[];
D.push(k);
D.push(this.__ms);
D.push(v);

if(C.focusedRow&&this.getHighlightFocusRow()){D.push(C.selected?this.__mt.bgcolFocusedSelected:this.__mt.bgcolFocused);
}else{if(C.selected){D.push(this.__mt.bgcolSelected);
}else{D.push((C.row%2==0)?this.__mt.bgcolEven:this.__mt.bgcolOdd);
}}D.push(s);
D.push(C.selected?this.__mt.colSelected:this.__mt.colNormal);
D.push(t,this.__mt.horLine);
return D.join(z);
},getRowClass:function(a){return z;
}},destruct:function(){this.__mt=this.__mu=this.__ms=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var h="menu-button",g="table-column-reset-button",f="separator",e="user-button",d="qx.ui.table.columnmenu.Button",c="menu";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
},members:{__mv:null,factory:function(j,k){switch(j){case c:var m=new qx.ui.menu.Menu();
this.setMenu(m);
return m;
case h:var o=new qx.ui.table.columnmenu.MenuItem(k.text);
o.setVisible(k.bVisible);
this.getMenu().add(o);
return o;
case e:var n=new qx.ui.menu.Button(k.text);
n.set({appearance:g});
return n;
case f:return new qx.ui.menu.Separator();
default:throw new Error("Unrecognized factory request: "+j);
}},empty:function(){var a=this.getMenu();
var b=a.getChildren();

for(var i=0,l=b.length;i<l;i++){b[0].destroy();
}}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var l="checked",k="menu-checkbox",j="Boolean",i="_applyValue",h="changeValue",g="qx.ui.menu.CheckBox",f="execute";
qx.Class.define(g,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(c,d){arguments.callee.base.call(this);
if(c!=null){if(c.translate){this.setLabel(c.translate());
}else{this.setLabel(c);
}}
if(d!=null){this.setMenu(d);
}this.addListener(f,this._onExecute,this);
},properties:{appearance:{refine:true,init:k},value:{check:j,init:false,apply:i,event:h,nullable:true}},members:{_applyValue:function(a,b){a?this.addState(l):this.removeState(l);
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
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(i){arguments.callee.base.call(this,i);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__mw:false,_applyVisible:function(g,h){if(!this.bInListener){this.setValue(g);
}}}});
})();
(function(){var d="qx.ui.table.selection.Model",c="qx.ui.table.selection.Manager";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:d}},members:{__mx:null,handleMouseDown:function(m,n){if(n.isLeftPressed()){var o=this.getSelectionModel();

if(!o.isSelectedIndex(m)){this._handleSelectEvent(m,n);
this.__mx=true;
}else{this.__mx=false;
}}else if(n.isRightPressed()&&n.getModifiers()==0){var o=this.getSelectionModel();

if(!o.isSelectedIndex(m)){o.setSelectionInterval(m,m);
}}},handleMouseUp:function(e,f){if(f.isLeftPressed()&&!this.__mx){this._handleSelectEvent(e,f);
}},handleClick:function(a,b){},handleSelectKeyDown:function(k,l){this._handleSelectEvent(k,l);
},handleMoveKeyDown:function(g,h){var j=this.getSelectionModel();

switch(h.getModifiers()){case 0:j.setSelectionInterval(g,g);
break;
case qx.event.type.Dom.SHIFT_MASK:var i=j.getAnchorSelectionIndex();

if(i==-1){j.setSelectionInterval(g,g);
}else{j.setSelectionInterval(i,g);
}break;
}},_handleSelectEvent:function(p,q){var t=this.getSelectionModel();
var r=t.getLeadSelectionIndex();
var s=t.getAnchorSelectionIndex();

if(q.isShiftPressed()){if(p!=r||t.isSelectionEmpty()){if(s==-1){s=p;
}
if(q.isCtrlOrCommandPressed()){t.addSelectionInterval(s,p);
}else{t.setSelectionInterval(s,p);
}}}else if(q.isCtrlOrCommandPressed()){if(t.isSelectedIndex(p)){t.removeSelectionInterval(p,p);
}else{t.addSelectionInterval(p,p);
}}else{t.setSelectionInterval(p,p);
}}}});
})();
(function(){var n="..",m="changeSelection",l="Use 'resetSelection' instead",k=" [",h="]",g="qx.event.type.Event",f="Ranges:",d="qx.ui.table.selection.Model",c="_applySelectionMode",b="Use '_resetSelection' instead.";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__my=[];
this.__mz=-1;
this.__mA=-1;
this.hasBatchModeRefCount=0;
this.__mB=false;
},events:{"changeSelection":g},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:c}},members:{__mB:null,__mz:null,__mA:null,__my:null,_applySelectionMode:function(w){this.resetSelection();
},setBatchMode:function(A){if(A){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__mB){this.__mB=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__mz;
},_setAnchorSelectionIndex:function(a){this.__mz=a;
},getLeadSelectionIndex:function(){return this.__mA;
},_setLeadSelectionIndex:function(o){this.__mA=o;
},_getSelectedRangeArr:function(){return this.__my;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.resetSelection();
},isSelectionEmpty:function(){return this.__my.length==0;
},getSelectedCount:function(){var q=0;

for(var i=0;i<this.__my.length;i++){var p=this.__my[i];
q+=p.maxIndex-p.minIndex+1;
}return q;
},isSelectedIndex:function(u){for(var i=0;i<this.__my.length;i++){var v=this.__my[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var K=[];

for(var i=0;i<this.__my.length;i++){K.push({minIndex:this.__my[i].minIndex,maxIndex:this.__my[i].maxIndex});
}return K;
},iterateSelection:function(I,J){for(var i=0;i<this.__my.length;i++){for(var j=this.__my[i].minIndex;j<=this.__my[i].maxIndex;j++){I.call(J,j);
}}},setSelectionInterval:function(r,s){var t=arguments.callee.self;

switch(this.getSelectionMode()){case t.NO_SELECTION:return;
case t.SINGLE_SELECTION:if(this.isSelectedIndex(s)){return;
}r=s;
break;
case t.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=r;i<=s;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(r,s);
this._fireChangeSelection();
},addSelectionInterval:function(x,y){var z=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case z.NO_SELECTION:return;
case z.MULTIPLE_INTERVAL_SELECTION:case z.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(x,y);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(x,y);
break;
}},removeSelectionInterval:function(L,M){this.__mz=L;
this.__mA=M;
var N=Math.min(L,M);
var P=Math.max(L,M);
for(var i=0;i<this.__my.length;i++){var R=this.__my[i];

if(R.minIndex>P){break;
}else if(R.maxIndex>=N){var S=(R.minIndex>=N)&&(R.minIndex<=P);
var Q=(R.maxIndex>=N)&&(R.maxIndex<=P);

if(S&&Q){this.__my.splice(i,1);
i--;
}else if(S){R.minIndex=P+1;
}else if(Q){R.maxIndex=N-1;
}else{var O={minIndex:P+1,maxIndex:R.maxIndex};
this.__my.splice(i+1,0,O);
R.maxIndex=N-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__my=[];
this.__mz=-1;
this.__mA=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
this._resetSelection();
},_addSelectionInterval:function(B,C){this.__mz=B;
this.__mA=C;
var D=Math.min(B,C);
var F=Math.max(B,C);
var E=0;

for(;E<this.__my.length;E++){var G=this.__my[E];

if(G.minIndex>D){break;
}}this.__my.splice(E,0,{minIndex:D,maxIndex:F});
var H=this.__my[0];

for(var i=1;i<this.__my.length;i++){var G=this.__my[i];

if(H.maxIndex+1>=G.minIndex){H.maxIndex=Math.max(H.maxIndex,G.maxIndex);
this.__my.splice(i,1);
i--;
}else{H=G;
}}},_dumpRanges:function(){var T=f;

for(var i=0;i<this.__my.length;i++){var U=this.__my[i];
T+=k+U.minIndex+n+U.maxIndex+h;
}this.debug(T);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__mB=true;
}else{this.fireEvent(m);
}}},destruct:function(){this.__my=null;
}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(d){return true;
},updateHeaderCell:function(b,c){return true;
}}});
})();
(function(){var b="qx.ui.table.headerrenderer.Default",a="String";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.table.IHeaderRenderer,statics:{STATE_SORTED:"sorted",STATE_SORTED_ASCENDING:"sortedAscending"},properties:{toolTip:{check:a,init:null,nullable:true}},members:{createHeaderCell:function(c){var d=new qx.ui.table.headerrenderer.HeaderCell();
this.updateHeaderCell(c,d);
return d;
},updateHeaderCell:function(e,f){var g=qx.ui.table.headerrenderer.Default;
if(e.name&&e.name.translate){f.setLabel(e.name.translate());
}else{f.setLabel(e.name);
}var h=f.getToolTip();

if(this.getToolTip()!=null){if(h==null){h=new qx.ui.tooltip.ToolTip(this.getToolTip());
f.setToolTip(h);
qx.util.DisposeUtil.disposeTriggeredBy(h,f);
}else{h.setLabel(this.getToolTip());
}}e.sorted?f.addState(g.STATE_SORTED):f.removeState(g.STATE_SORTED);
e.sortedAscending?f.addState(g.STATE_SORTED_ASCENDING):f.removeState(g.STATE_SORTED_ASCENDING);
}}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f='" ',e="nowrap",d="default",c="qx.client",b="}",a="width:",G=".qooxdoo-table-cell-right { text-align:right } ",F="0px 6px",E='<div class="',D="0px",C="height:",B="1px solid ",A=".qooxdoo-table-cell-bold { font-weight:bold } ",z="table-row-line",y='>',x="mshtml",q='</div>',r="ellipsis",o="content-box",p='left:',m="qx.ui.table.cellrenderer.Abstract",n='" style="',k="abstract",l="none",s="hidden",t="} ",v='px;',u=".qooxdoo-table-cell-italic { font-style:italic} ",w="absolute";
qx.Class.define(m,{type:k,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
var H=qx.ui.table.cellrenderer.Abstract;

if(!H.__mC){var J=qx.theme.manager.Color.getInstance();
H.__mC=arguments.callee.self;
var I=h+
qx.bom.element.Style.compile({position:w,top:D,overflow:s,whiteSpace:e,borderRight:B+J.resolve(z),padding:F,cursor:d,textOverflow:r,userSelect:l})+t+G+u+A;

if(!qx.core.Variant.isSet(c,x)){I+=h+qx.bom.element.BoxSizing.compile(o)+b;
}H.__mC.stylesheet=qx.bom.Stylesheet.createElement(I);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(U){return g;
},_getCellStyle:function(P){return P.style||j;
},_getCellAttributes:function(S){return j;
},_getContentHtml:function(T){return T.value||j;
},_getCellSizeStyle:function(K,L,M,N){var O=j;

if(qx.bom.client.Feature.CONTENT_BOX){K-=M;
L-=N;
}O+=a+Math.max(K,0)+i;
O+=C+Math.max(L,0)+i;
return O;
},createDataCellHtml:function(Q,R){R.push(E,this._getCellClass(Q),n,p,Q.styleLeft,v,this._getCellSizeStyle(Q.styleWidth,Q.styleHeight,this._insetX,this._insetY),this._getCellStyle(Q),f,this._getCellAttributes(Q),y+this._getContentHtml(Q),q);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}},_getCellClass:function(j){var k=arguments.callee.base.call(this,j);

if(!k){return h;
}var l=this._getStyleFlags(j);

if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT){k+=c;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_BOLD){k+=d;
}
if(l&qx.ui.table.cellrenderer.Default.STYLEFLAG_ITALIC){k+=b;
}return k;
},_getContentHtml:function(m){return qx.bom.String.escape(this._formatValue(m));
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
qx.Interface.define(a,{members:{createCellEditor:function(c){return true;
},getCellEditorValue:function(b){return true;
}}});
})();
(function(){var f="",e="Function",d="abstract",c="number",b="appear",a="qx.ui.table.celleditor.AbstractField";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.ui.table.ICellEditorFactory,type:d,properties:{validationFunction:{check:e,nullable:true,init:null}},members:{_createEditor:function(){throw new Error("Abstract method call!");
},createCellEditor:function(j){var k=this._createEditor();
k.originalValue=j.value;

if(j.value===null||j.value===undefined){j.value=f;
}k.setValue(f+j.value);
k.addListener(b,function(){k.selectAllText();
});
return k;
},getCellEditorValue:function(g){var i=g.getValue();
var h=this.getValidationFunction();

if(h){i=h(i,g.originalValue);
}
if(typeof g.originalValue==c){i=parseFloat(i);
}return i;
}}});
})();
(function(){var b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{_createEditor:function(){var c=new qx.ui.form.TextField();
c.setAppearance(a);
return c;
}}});
})();
(function(){var be="qx.event.type.Data",bd="visibilityChanged",bc="orderChanged",bb="visibilityChangedPre",ba="widthChanged",Y="qx.ui.table.columnmodel.Basic",X="__mK",W="__mJ",V="__mI";
qx.Class.define(Y,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mD=[];
this.__mE=[];
},events:{"widthChanged":be,"visibilityChangedPre":be,"visibilityChanged":be,"orderChanged":be},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__mF:null,__mG:null,__mE:null,__mD:null,__mH:null,__mI:null,__mJ:null,__mK:null,init:function(C){{};
this.__mH=[];
var F=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var G=this.__mI||(this.__mI=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var E=this.__mJ||(this.__mJ=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var D=this.__mK||(this.__mK=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__mD=[];
this.__mE=[];

for(var I=0;I<C;I++){this.__mH[I]={width:F,headerRenderer:G,dataRenderer:E,editorFactory:D};
this.__mD[I]=I;
this.__mE[I]=I;
}this.__mG=null;

for(var I=0;I<C;I++){var H={col:I,visible:true};
this.fireDataEvent(bb,H);
this.fireDataEvent(bd,H);
}},getVisibleColumns:function(){return this.__mE!=null?this.__mE:[];
},setColumnWidth:function(q,r){{};
var t=this.__mH[q].width;

if(t!=r){this.__mH[q].width=r;
var s={col:q,newWidth:r,oldWidth:t};
this.fireDataEvent(ba,s);
}},getColumnWidth:function(d){{};
return this.__mH[d].width;
},setHeaderCellRenderer:function(z,A){{};
var B=this.__mH[z].headerRenderer;

if(B!==this.__mI){B.dispose();
}this.__mH[z].headerRenderer=A;
},getHeaderCellRenderer:function(T){{};
return this.__mH[T].headerRenderer;
},setDataCellRenderer:function(K,L){{};
var M=this.__mH[K].headerRenderer;

if(M!==this.__mJ){M.dispose();
}this.__mH[K].dataRenderer=L;
},getDataCellRenderer:function(S){{};
return this.__mH[S].dataRenderer;
},setCellEditorFactory:function(bh,bi){{};
var bj=this.__mH[bh].headerRenderer;

if(bj!==this.__mK){bj.dispose();
}this.__mH[bh].editorFactory=bi;
},getCellEditorFactory:function(J){{};
return this.__mH[J].editorFactory;
},_getColToXPosMap:function(){if(this.__mG==null){this.__mG={};

for(var c=0;c<this.__mD.length;c++){var b=this.__mD[c];
this.__mG[b]={overX:c};
}
for(var a=0;a<this.__mE.length;a++){var b=this.__mE[a];
this.__mG[b].visX=a;
}}return this.__mG;
},getVisibleColumnCount:function(){return this.__mE!=null?this.__mE.length:0;
},getVisibleColumnAtX:function(bg){{};
return this.__mE[bg];
},getVisibleX:function(bf){{};
return this._getColToXPosMap()[bf].visX;
},getOverallColumnCount:function(){return this.__mD.length;
},getOverallColumnAtX:function(f){{};
return this.__mD[f];
},getOverallX:function(U){{};
return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(e){{};
return (this._getColToXPosMap()[e].visX!=null);
},setColumnVisible:function(g,h){{};

if(h!=this.isColumnVisible(g)){if(h){var o=this._getColToXPosMap();
var l=o[g].overX;

if(l==null){throw new Error("Showing column failed: "+g+". The column is not added to this TablePaneModel.");
}var m;

for(var x=l+1;x<this.__mD.length;x++){var n=this.__mD[x];
var j=o[n].visX;

if(j!=null){m=j;
break;
}}if(m==null){m=this.__mE.length;
}this.__mE.splice(m,0,g);
}else{var k=this.getVisibleX(g);
this.__mE.splice(k,1);
}this.__mG=null;
if(!this.__mF){var p={col:g,visible:h};
this.fireDataEvent(bb,p);
this.fireDataEvent(bd,p);
}}},moveColumn:function(N,O){{};
this.__mF=true;
var R=this.__mD[N];
var P=this.isColumnVisible(R);

if(P){this.setColumnVisible(R,false);
}this.__mD.splice(N,1);
this.__mD.splice(O,0,R);
this.__mG=null;

if(P){this.setColumnVisible(R,true);
}this.__mF=false;
var Q={col:R,fromOverXPos:N,toOverXPos:O};
this.fireDataEvent(bc,Q);
},setColumnsOrder:function(u){{};

if(u.length==this.__mD.length){this.__mF=true;
var y=new Array(u.length);

for(var v=0;v<this.__mD.length;v++){var w=this.isColumnVisible(v);
y[v]=w;

if(w){this.setColumnVisible(v,false);
}}this.__mD=qx.lang.Array.clone(u);
this.__mG=null;
for(var v=0;v<this.__mD.length;v++){if(y[v]){this.setColumnVisible(v,true);
}}this.__mF=false;
this.fireEvent(bc);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__mD.length+", got "+u.length);
}}},destruct:function(){for(var i=0;i<this.__mH.length;i++){this.__mH[i].headerRenderer.dispose();
this.__mH[i].dataRenderer.dispose();
this.__mH[i].editorFactory.dispose();
}this.__mD=this.__mE=this.__mH=this.__mG=null;
this._disposeObjects(V,W,X);
}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
j.setColumnFlex(2,1);
this.setLayout(j);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(m,n){if(m){this._showChildControl(h).setValue(m);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(o,p){if(o){this._showChildControl(f).setSource(o);
}else{this._excludeChildControl(f);
}},_applyIcon:function(q,r){if(q){this._showChildControl(i).setSource(q);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(k){var l;

switch(k){case h:l=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(l,{row:0,column:1});
break;
case f:l=new qx.ui.basic.Image(this.getSortIcon());
l.setAnonymous(true);
this._add(l,{row:0,column:2});
break;
case i:l=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(l,{row:0,column:0});
break;
}return l||arguments.callee.base.call(this,k);
}}});
})();
(function(){var f="\n",e="",d=" &nbsp;",c="<br>",b=" ",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(g){return qx.bom.String.escape(g).replace(/(  |\n)/g,function(o){var p={"  ":d,"\n":c};
return p[o]||o;
});
},toText:function(j){return qx.bom.String.unescape(j.replace(/\s+|<([^>])+>/gi,function(n){if(/\s+/.test(n)){return b;
}else if(/^<BR|^<br/gi.test(n)){return f;
}else{return e;
}}));
}},defer:function(k,l,m){k.FROM_CHARCODE=qx.lang.Object.invert(k.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Bootstrap.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(s,t){return s.replace(/&[#\w]+;/gi,function(p){var q=p;
var p=p.substring(1,p.length-1);
var r=t[p];

if(r){q=String.fromCharCode(r);
}else{if(p.charAt(0)==c){if(p.charAt(1).toUpperCase()==e){r=p.substring(2);
if(r.match(/^[0-9A-Fa-f]+$/gi)){q=String.fromCharCode(parseInt(r,16));
}}else{r=p.substring(1);
if(r.match(/^\d+$/gi)){q=String.fromCharCode(parseInt(r,10));
}}}}return q;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(D){arguments.callee.base.call(this);
this.__mL=D;
},statics:{getIntegerInstance:function(){var E=qx.util.format.NumberFormat;

if(E._integerInstance==null){E._integerInstance=new E();
E._integerInstance.setMaximumFractionDigits(0);
}return E._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__mL:null,format:function(F){switch(F){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var J=(F<0);

if(J){F=-F;
}
if(this.getMaximumFractionDigits()!=null){var Q=Math.pow(10,this.getMaximumFractionDigits());
F=Math.round(F*Q)/Q;
}var P=String(Math.floor(F)).length;
var G=t+F;
var M=G.substring(0,P);

while(M.length<this.getMinimumIntegerDigits()){M=q+M;
}
if(this.getMaximumIntegerDigits()!=null&&M.length>this.getMaximumIntegerDigits()){M=M.substring(M.length-this.getMaximumIntegerDigits());
}var L=G.substring(P+1);

while(L.length<this.getMinimumFractionDigits()){L+=q;
}
if(this.getMaximumFractionDigits()!=null&&L.length>this.getMaximumFractionDigits()){L=L.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var I=M;
M=t;
var O;

for(O=I.length;O>3;O-=3){M=t+qx.locale.Number.getGroupSeparator(this.__mL)+I.substring(O-3,O)+M;
}M=I.substring(0,O)+M;
}var K=this.getPrefix()?this.getPrefix():t;
var H=this.getPostfix()?this.getPostfix():t;
var N=K+(J?r:t)+M;

if(L.length>0){N+=t+qx.locale.Number.getDecimalSeparator(this.__mL)+L;
}N+=H;
return N;
},parse:function(u){var z=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__mL)+t);
var x=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__mL)+t);
var v=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+z+g+n+x+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var y=v.exec(u);

if(y==null){throw new Error("Number string '"+u+"' does not match the number format");
}var A=(y[1]==r);
var C=y[2];
var B=y[3];
C=C.replace(new RegExp(z,m),t);
var w=(A?r:t)+C;

if(B!=null&&B.length!=0){B=B.replace(new RegExp(x),t);
w+=h+B;
}return parseFloat(w);
}}});
})();
(function(){var e="cldr_number_decimal_separator",d="cldr_number_percent_format",c="qx.locale.Number",b="cldr_number_group_separator";
qx.Class.define(c,{statics:{getDecimalSeparator:function(f){return qx.locale.Manager.getInstance().localize(e,[],f);
},getGroupSeparator:function(g){return qx.locale.Manager.getInstance().localize(b,[],g);
},getPercentFormat:function(a){return qx.locale.Manager.getInstance().localize(d,[],a);
}}});
})();
(function(){var cL="(\\d\\d?)",cK="format",cJ="",cI="abbreviated",cH="wide",cG="(",cF=")",cE="|",cD="stand-alone",cC="wildcard",cr="default",cq="literal",cp="'",co="hour",cn="(\\d\\d?\\d?)",cm="ms",cl="narrow",ck="-",cj="quoted_literal",ci='a',cS="HH:mm:ss",cT="+",cQ="HHmmss",cR="long",cO='z',cP="0",cM="sec",cN="day",cU='Z',cV=" ",cv="min",cu="mm",cx="(\\d+)",cw="h",cz="KK",cy='L',cB="Z",cA="(\\d\\d+)",ct="EEEE",cs="^",bj=":",bk='y',bl="K",bm="a",bn="([\\+\\-]\\d\\d:?\\d\\d)",bo="GMT",bp="dd",bq="qx.util.format.DateFormat",br="yyy",bs="H",da="YYYY",cY="y",cX="HH",cW="EE",de='h',dd="S",dc='s',db='A',dg="yyyyyy",df="kk",bR="ss",bS='H',bP='S',bQ="MMMM",bV='c',bW="d",bT="([a-zA-Z]+)",bU='k',bN="m",bO='Y',bA='D',bz="yyyyy",bC='K',bB="hh",bw="SSS",bv="MM",by="yy",bx="(\\d\\d\\d\\d\\d\\d+)",bu="yyyy-MM-dd HH:mm:ss",bt="(\\d\\d\\d\\d\\d+)",cc="short",cd='d',ce="unkown",cf='m',bX="(\\d\\d\\d\\d)",bY="(\\d\\d\\d+)",ca="k",cb='M',cg="(\\d\\d\\d\\d+)",ch="SS",bK="MMM",bJ="s",bI="M",bH='w',bG="EEE",bF="$",bE="?",bD='E',bM="z",bL="yyyy";
qx.Class.define(bq,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dy,dz){arguments.callee.base.call(this);

if(!dz){this.__mM=qx.locale.Manager.getInstance().getLocale();
}else{this.__mM=dz;
}
if(dy!=null){this.__mN=dy.toString();
}else{this.__mN=qx.locale.Date.getDateFormat(cR,this.__mM)+cV+qx.locale.Date.getDateTimeFormat(cQ,cS,this.__mM);
}},statics:{getDateTimeInstance:function(){var bi=qx.util.format.DateFormat;
var bh=qx.locale.Date.getDateFormat(cR)+cV+qx.locale.Date.getDateTimeFormat(cQ,cS);

if(bi._dateInstance==null||bi._dateInstance.__mN!=bh){bi._dateTimeInstance=new bi();
}return bi._dateTimeInstance;
},getDateInstance:function(){var ec=qx.util.format.DateFormat;
var eb=qx.locale.Date.getDateFormat(cc)+cJ;

if(ec._dateInstance==null||ec._dateInstance.__mN!=eb){ec._dateInstance=new ec(eb);
}return ec._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:bu,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__mM:null,__mN:null,__mO:null,__mP:null,__mQ:null,__mR:function(dP,dQ){var dR=cJ+dP;

while(dR.length<dQ){dR=cP+dR;
}return dR;
},__mS:function(dT){var dU=new Date(dT.getTime());
var dV=dU.getDate();

while(dU.getMonth()!=0){dU.setDate(-1);
dV+=dU.getDate()+1;
}return dV;
},__mT:function(dS){return new Date(dS.getTime()+(3-((dS.getDay()+6)%7))*86400000);
},__mU:function(bd){var bf=this.__mT(bd);
var bg=bf.getFullYear();
var be=this.__mT(new Date(bg,0,4));
return Math.floor(1.5+(bf.getTime()-be.getTime())/86400000/7);
},format:function(I){if(I==null){return null;
}var O=qx.util.format.DateFormat;
var P=this.__mM;
var ba=I.getFullYear();
var T=I.getMonth();
var bc=I.getDate();
var J=I.getDay();
var U=I.getHours();
var Q=I.getMinutes();
var V=I.getSeconds();
var X=I.getMilliseconds();
var bb=I.getTimezoneOffset();
var M=bb>0?1:-1;
var K=Math.floor(Math.abs(bb)/60);
var R=Math.abs(bb)%60;
this.__mV();
var Y=cJ;

for(var i=0;i<this.__mQ.length;i++){var W=this.__mQ[i];

if(W.type==cq){Y+=W.text;
}else{var N=W.character;
var S=W.size;
var L=bE;

switch(N){case bk:case bO:if(S==2){L=this.__mR(ba%100,2);
}else{L=ba+cJ;

if(S>L.length){for(var i=L.length;i<S;i++){L=cP+L;
}}}break;
case bA:L=this.__mR(this.__mS(I),S);
break;
case cd:L=this.__mR(bc,S);
break;
case bH:L=this.__mR(this.__mU(I),S);
break;
case bD:if(S==2){L=qx.locale.Date.getDayName(cl,J,P,cK);
}else if(S==3){L=qx.locale.Date.getDayName(cI,J,P,cK);
}else if(S==4){L=qx.locale.Date.getDayName(cH,J,P,cK);
}break;
case bV:if(S==2){L=qx.locale.Date.getDayName(cl,J,P,cD);
}else if(S==3){L=qx.locale.Date.getDayName(cI,J,P,cD);
}else if(S==4){L=qx.locale.Date.getDayName(cH,J,P,cD);
}break;
case cb:if(S==1||S==2){L=this.__mR(T+1,S);
}else if(S==3){L=qx.locale.Date.getMonthName(cI,T,P,cK);
}else if(S==4){L=qx.locale.Date.getMonthName(cH,T,P,cK);
}break;
case cy:if(S==1||S==2){L=this.__mR(T+1,S);
}else if(S==3){L=qx.locale.Date.getMonthName(cI,T,P,cD);
}else if(S==4){L=qx.locale.Date.getMonthName(cH,T,P,cD);
}break;
case ci:L=(U<12)?qx.locale.Date.getAmMarker(P):qx.locale.Date.getPmMarker(P);
break;
case bS:L=this.__mR(U,S);
break;
case bU:L=this.__mR((U==0)?24:U,S);
break;
case bC:L=this.__mR(U%12,S);
break;
case de:L=this.__mR(((U%12)==0)?12:(U%12),S);
break;
case cf:L=this.__mR(Q,S);
break;
case dc:L=this.__mR(V,S);
break;
case bP:L=this.__mR(X,S);
break;
case cO:if(S==1){L=bo+((M>0)?ck:cT)+this.__mR(Math.abs(K))+bj+this.__mR(R,2);
}else if(S==2){L=O.MEDIUM_TIMEZONE_NAMES[K];
}else if(S==3){L=O.FULL_TIMEZONE_NAMES[K];
}break;
case cU:L=((M>0)?ck:cT)+this.__mR(Math.abs(K),2)+this.__mR(R,2);
break;
}Y+=L;
}}return Y;
},parse:function(b){this.__mW();
var h=this.__mO.regex.exec(b);

if(h==null){throw new Error("Date string '"+b+"' does not match the date format: "+this.__mN);
}var c={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var d=1;

for(var i=0;i<this.__mO.usedRules.length;i++){var f=this.__mO.usedRules[i];
var e=h[d];

if(f.field!=null){c[f.field]=parseInt(e,10);
}else{f.manipulator(c,e);
}d+=(f.groups==null)?1:f.groups;
}var g=new Date(c.year,c.month,c.day,(c.ispm)?(c.hour+12):c.hour,c.min,c.sec,c.ms);

if(c.month!=g.getMonth()||c.year!=g.getFullYear()){throw new Error("Error parsing date '"+b+"': the value for day or month is too large");
}return g;
},__mV:function(){if(this.__mQ!=null){return;
}this.__mQ=[];
var dG;
var dE=0;
var dI=cJ;
var dC=this.__mN;
var dF=cr;
var i=0;

while(i<dC.length){var dH=dC.charAt(i);

switch(dF){case cj:if(dH==cp){if(i+1>=dC.length){i++;
break;
}var dD=dC.charAt(i+1);

if(dD==cp){dI+=dH;
i++;
}else{i++;
dF=ce;
}}else{dI+=dH;
i++;
}break;
case cC:if(dH==dG){dE++;
i++;
}else{this.__mQ.push({type:cC,character:dG,size:dE});
dG=null;
dE=0;
dF=cr;
}break;
default:if((dH>=ci&&dH<=cO)||(dH>=db&&dH<=cU)){dG=dH;
dF=cC;
}else if(dH==cp){if(i+1>=dC.length){dI+=dH;
i++;
break;
}var dD=dC.charAt(i+1);

if(dD==cp){dI+=dH;
i++;
}i++;
dF=cj;
}else{dF=cr;
}
if(dF!=cr){if(dI.length>0){this.__mQ.push({type:cq,text:dI});
dI=cJ;
}}else{dI+=dH;
i++;
}break;
}}if(dG!=null){this.__mQ.push({type:cC,character:dG,size:dE});
}else if(dI.length>0){this.__mQ.push({type:cq,text:dI});
}},__mW:function(){if(this.__mO!=null){return ;
}var dk=this.__mN;
this.__mX();
this.__mV();
var dr=[];
var dm=cs;

for(var di=0;di<this.__mQ.length;di++){var ds=this.__mQ[di];

if(ds.type==cq){dm+=qx.lang.String.escapeRegexpChars(ds.text);
}else{var dj=ds.character;
var dn=ds.size;
var dl;

for(var dt=0;dt<this.__mP.length;dt++){var dp=this.__mP[dt];

if(dj==dp.pattern.charAt(0)&&dn==dp.pattern.length){dl=dp;
break;
}}if(dl==null){var dq=cJ;

for(var i=0;i<dn;i++){dq+=dj;
}throw new Error("Malformed date format: "+dk+". Wildcard "+dq+" is not supported");
}else{dr.push(dl);
dm+=dl.regex;
}}}dm+=bF;
var dh;

try{dh=new RegExp(dm);
}catch(a){throw new Error("Malformed date format: "+dk);
}this.__mO={regex:dh,"usedRules":dr,pattern:dm};
},__mX:function(){var o=qx.util.format.DateFormat;
var u=qx.lang.String;

if(this.__mP!=null){return ;
}var p=this.__mP=[];
var B=function(E,F){F=parseInt(F,10);

if(F<o.ASSUME_YEAR_2000_THRESHOLD){F+=2000;
}else if(F<100){F+=1900;
}E.year=F;
};
var v=function(du,dv){du.month=parseInt(dv,10)-1;
};
var s=function(dN,dO){dN.ispm=(dO==o.PM_MARKER);
};
var r=function(dL,dM){dL.hour=parseInt(dM,10)%24;
};
var q=function(dW,dX){dW.hour=parseInt(dX,10)%12;
};
var y=function(dA,dB){return;
};
var w=qx.locale.Date.getMonthNames(cI,this.__mM,cK);

for(var i=0;i<w.length;i++){w[i]=u.escapeRegexpChars(w[i].toString());
}var x=function(C,D){D=u.escapeRegexpChars(D);
C.month=w.indexOf(D);
};
var l=qx.locale.Date.getMonthNames(cH,this.__mM,cK);

for(var i=0;i<l.length;i++){l[i]=u.escapeRegexpChars(l[i].toString());
}var k=function(G,H){H=u.escapeRegexpChars(H);
G.month=l.indexOf(H);
};
var n=qx.locale.Date.getDayNames(cl,this.__mM,cK);

for(var i=0;i<n.length;i++){n[i]=u.escapeRegexpChars(n[i].toString());
}var j=function(dJ,dK){dK=u.escapeRegexpChars(dK);
dJ.month=n.indexOf(dK);
};
var z=qx.locale.Date.getDayNames(cI,this.__mM,cK);

for(var i=0;i<z.length;i++){z[i]=u.escapeRegexpChars(z[i].toString());
}var t=function(dY,ea){ea=u.escapeRegexpChars(ea);
dY.month=z.indexOf(ea);
};
var A=qx.locale.Date.getDayNames(cH,this.__mM,cK);

for(var i=0;i<A.length;i++){A[i]=u.escapeRegexpChars(A[i].toString());
}var m=function(dw,dx){dx=u.escapeRegexpChars(dx);
dw.month=A.indexOf(dx);
};
p.push({pattern:da,regex:bX,manipulator:B});
p.push({pattern:cY,regex:cx,manipulator:B});
p.push({pattern:by,regex:cA,manipulator:B});
p.push({pattern:br,regex:bY,manipulator:B});
p.push({pattern:bL,regex:cg,manipulator:B});
p.push({pattern:bz,regex:bt,manipulator:B});
p.push({pattern:dg,regex:bx,manipulator:B});
p.push({pattern:bI,regex:cL,manipulator:v});
p.push({pattern:bv,regex:cL,manipulator:v});
p.push({pattern:bK,regex:cG+w.join(cE)+cF,manipulator:x});
p.push({pattern:bQ,regex:cG+l.join(cE)+cF,manipulator:k});
p.push({pattern:bp,regex:cL,field:cN});
p.push({pattern:bW,regex:cL,field:cN});
p.push({pattern:cW,regex:cG+n.join(cE)+cF,manipulator:j});
p.push({pattern:bG,regex:cG+z.join(cE)+cF,manipulator:t});
p.push({pattern:ct,regex:cG+A.join(cE)+cF,manipulator:m});
p.push({pattern:bm,regex:cG+o.AM_MARKER+cE+o.PM_MARKER+cF,manipulator:s});
p.push({pattern:cX,regex:cL,field:co});
p.push({pattern:bs,regex:cL,field:co});
p.push({pattern:df,regex:cL,manipulator:r});
p.push({pattern:ca,regex:cL,manipulator:r});
p.push({pattern:cz,regex:cL,field:co});
p.push({pattern:bl,regex:cL,field:co});
p.push({pattern:bB,regex:cL,manipulator:q});
p.push({pattern:cw,regex:cL,manipulator:q});
p.push({pattern:cu,regex:cL,field:cv});
p.push({pattern:bN,regex:cL,field:cv});
p.push({pattern:bR,regex:cL,field:cM});
p.push({pattern:bJ,regex:cL,field:cM});
p.push({pattern:bw,regex:cn,field:cm});
p.push({pattern:ch,regex:cn,field:cm});
p.push({pattern:dd,regex:cn,field:cm});
p.push({pattern:cB,regex:bn,manipulator:y});
p.push({pattern:bM,regex:bT,manipulator:y});
}},destruct:function(){this.__mQ=this.__mO=this.__mP=null;
}});
})();
(function(){var z="_",y="format",x="thu",w="sat",v="cldr_day_",u="cldr_month_",t="wed",s="fri",r="tue",q="mon",Q="sun",P="short",O="HH:mm",N="HHmmsszz",M="HHmm",L="HHmmss",K="cldr_date_format_",J="HH:mm:ss zz",I="full",H="cldr_pm",F="long",G="medium",D="cldr_am",E="qx.locale.Date",B="cldr_date_time_format_",C="cldr_time_format_",A="HH:mm:ss";
qx.Class.define(E,{statics:{__mY:qx.locale.Manager.getInstance(),getAmMarker:function(ba){return this.__mY.localize(D,[],ba);
},getPmMarker:function(g){return this.__mY.localize(H,[],g);
},getDayNames:function(length,bf,bg){var bg=bg?bg:y;
{};
var bi=[Q,q,r,t,x,s,w];
var bj=[];

for(var i=0;i<bi.length;i++){var bh=v+bg+z+length+z+bi[i];
bj.push(this.__mY.localize(bh,[],bf));
}return bj;
},getDayName:function(length,bt,bu,bv){var bv=bv?bv:y;
{};
var bx=[Q,q,r,t,x,s,w];
var bw=v+bv+z+length+z+bx[bt];
return this.__mY.localize(bw,[],bu);
},getMonthNames:function(length,m,n){var n=n?n:y;
{};
var p=[];

for(var i=0;i<12;i++){var o=u+n+z+length+z+(i+1);
p.push(this.__mY.localize(o,[],m));
}return p;
},getMonthName:function(length,h,j,k){var k=k?k:y;
{};
var l=u+k+z+length+z+(h+1);
return this.__mY.localize(l,[],j);
},getDateFormat:function(bm,bn){{};
var bo=K+bm;
return this.__mY.localize(bo,[],bn);
},getDateTimeFormat:function(R,S,T){var V=B+R;
var U=this.__mY.localize(V,[],T);

if(U==V){U=S;
}return U;
},getTimeFormat:function(bp,bq){{};
var bs=C+bp;
var br=this.__mY.localize(bs,[],bq);

if(br!=bs){return br;
}
switch(bp){case P:case G:return qx.locale.Date.getDateTimeFormat(M,O);
case F:return qx.locale.Date.getDateTimeFormat(L,A);
case I:return qx.locale.Date.getDateTimeFormat(N,J);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(d){var e={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var f=qx.locale.Date._getTerritory(d);
return e[f]!=null?e[f]:1;
},getWeekendStart:function(W){var Y={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var X=qx.locale.Date._getTerritory(W);
return Y[X]!=null?Y[X]:6;
},getWeekendEnd:function(a){var b={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var c=qx.locale.Date._getTerritory(a);
return b[c]!=null?b[c]:0;
},isWeekend:function(bb,bc){var be=qx.locale.Date.getWeekendStart(bc);
var bd=qx.locale.Date.getWeekendEnd(bc);

if(bd>be){return ((bb>=be)&&(bb<=bd));
}else{return ((bb>=be)||(bb<=bd));
}},_getTerritory:function(bk){if(bk){var bl=bk.split(z)[1]||bk;
}else{bl=this.__mY.getTerritory()||this.__mY.getLanguage();
}return bl.toUpperCase();
}}});
})();
(function(){var bO="",bN="Number",bM='</div>',bL='" ',bK="paneUpdated",bJ='<div>',bI="</div>",bH="overflow: hidden;",bG="qx.event.type.Data",bF="paneReloadsData",ch="div",cg='style="',cf="_applyMaxCacheLines",ce="qx.ui.table.pane.Pane",cd="width: 100%;",cc="qx.event.type.Event",cb="_applyVisibleRowCount",ca='>',bY="line-height: ",bX="appear",bV='class="',bW="width:100%;",bT="px;",bU='<div ',bR="'>",bS="_applyFirstVisibleRow",bP="<div style='",bQ=";position:relative;";
qx.Class.define(ce,{extend:qx.ui.core.Widget,construct:function(bi){arguments.callee.base.call(this);
this.__na=bi;
this.__nb=0;
this.__nc=0;
this.__nd=[];
},events:{"paneReloadsData":bG,"paneUpdated":cc},properties:{firstVisibleRow:{check:bN,init:0,apply:bS},visibleRowCount:{check:bN,init:0,apply:cb},maxCacheLines:{check:bN,init:1000,apply:cf},allowShrinkX:{refine:true,init:false}},members:{__nc:null,__nb:null,__na:null,__ne:null,__nf:null,__ng:null,__nd:null,__nh:0,_applyFirstVisibleRow:function(a,b){this.updateContent(false,a-b);
},_applyVisibleRowCount:function(bc,bd){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__na;
},getTable:function(){return this.__na.getTable();
},setFocusedCell:function(be,bf,bg){if(be!=this.__ng||bf!=this.__nf){var bh=this.__nf;
this.__ng=be;
this.__nf=bf;
if(bf!=bh&&!bg){if(bh!==null){this.updateContent(false,null,bh,true);
}
if(bf!==null){this.updateContent(false,null,bf,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(cu,cv){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(bl,bm,bn,bo){this.__ni();
var bq=this.getFirstVisibleRow();
var bp=this.getVisibleRowCount();

if(bm==-1||bm>=bq&&bl<bq+bp){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(bj,bk){if(this.__nh>=bj&&bj!==-1){this.__ni();
}},__ni:function(){this.__nd=[];
this.__nh=0;
},__nj:function(cw,cx,cy){if(!cx&&!cy&&this.__nd[cw]){return this.__nd[cw];
}else{return null;
}},__nk:function(g,h,j,k){var l=this.getMaxCacheLines();

if(!j&&!k&&!this.__nd[g]&&l>0){this._applyMaxCacheLines(l);
this.__nd[g]=h;
this.__nh+=1;
}},updateContent:function(c,d,e,f){if(c){this.__ni();
}if(d&&Math.abs(d)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(d);
}else if(f&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(e);
}else{this._updateAllRows();
}},_updateRowStyles:function(m){var q=this.getContentElement().getDomElement();

if(!q||!q.firstChild){this._updateAllRows();
return;
}var u=this.getTable();
var o=u.getSelectionModel();
var r=u.getTableModel();
var v=u.getDataRowRenderer();
var p=q.firstChild.childNodes;
var t={table:u};
var w=this.getFirstVisibleRow();
var y=0;
var n=p.length;

if(m!=null){var s=m-w;

if(s>=0&&s<n){w=m;
y=s;
n=s+1;
}else{return;
}}
for(;y<n;y++,w++){t.row=w;
t.selected=o.isSelectedIndex(w);
t.focusedRow=(this.__nf==w);
t.rowData=r.getRowData(w);
v.updateDataRowElement(t,p[y]);
}},_getRowsHtml:function(z,A){var G=this.getTable();
var J=G.getSelectionModel();
var D=G.getTableModel();
var E=G.getTableColumnModel();
var X=this.getPaneScroller().getTablePaneModel();
var O=G.getDataRowRenderer();
D.prefetchRows(z,z+A-1);
var U=G.getRowHeight();
var W=X.getColumnCount();
var F=0;
var C=[];
for(var x=0;x<W;x++){var ba=X.getColumnAtX(x);
var I=E.getColumnWidth(ba);
C.push({col:ba,xPos:x,editable:D.isColumnEditable(ba),focusedCol:this.__ng==ba,styleLeft:F,styleWidth:I});
F+=I;
}var Y=[];
var bb=false;

for(var H=z;H<z+A;H++){var K=J.isSelectedIndex(H);
var N=(this.__nf==H);
var R=this.__nj(H,K,N);

if(R){Y.push(R);
continue;
}var Q=[];
var T={table:G};
T.styleHeight=U;
T.row=H;
T.selected=K;
T.focusedRow=N;
T.rowData=D.getRowData(H);

if(!T.rowData){bb=true;
}Q.push(bU);
var B=O.getRowClass(T);

if(B){Q.push(bV,B,bL);
}var P=O.createRowStyle(T);
P+=bQ+O.getRowHeightStyle(U)+bW;

if(P){Q.push(cg,P,bL);
}Q.push(ca);

for(var x=0;x<W;x++){var L=C[x];

for(var V in L){T[V]=L[V];
}var ba=T.col;
T.value=D.getValue(ba,H);
var M=E.getDataCellRenderer(ba);
M.createDataCellHtml(T,Q);
}Q.push(bM);
var S=Q.join(bO);
this.__nk(H,S,K,N);
Y.push(S);
}this.fireDataEvent(bF,bb);
return Y.join(bO);
},_scrollContent:function(bs){var bt=this.getContentElement().getDomElement();

if(!(bt&&bt.firstChild)){this._updateAllRows();
return;
}var bC=bt.firstChild;
var bu=bC.childNodes;
var bA=this.getVisibleRowCount();
var bz=this.getFirstVisibleRow();
var bx=this.getTable().getTableModel();
var bD=0;
bD=bx.getRowCount();
if(bz+bA>bD){this._updateAllRows();
return;
}var bE=bs<0?bA+bs:0;
var bv=bs<0?0:bA-bs;

for(i=Math.abs(bs)-1;i>=0;i--){var by=bu[bE];

try{bC.removeChild(by);
}catch(br){break;
}}if(!this.__ne){this.__ne=document.createElement(ch);
}var bB=bJ;
bB+=this._getRowsHtml(bz+bv,Math.abs(bs));
bB+=bM;
this.__ne.innerHTML=bB;
var bw=this.__ne.firstChild.childNodes;
if(bs>0){for(var i=bw.length-1;i>=0;i--){var by=bw[0];
bC.appendChild(by);
}}else{for(var i=bw.length-1;i>=0;i--){var by=bw[bw.length-1];
bC.insertBefore(by,bC.firstChild);
}}if(this.__nf!==null){this._updateRowStyles(this.__nf-bs);
this._updateRowStyles(this.__nf);
}this.fireEvent(bK);
},_updateAllRows:function(){var cl=this.getContentElement().getDomElement();

if(!cl){this.addListenerOnce(bX,arguments.callee,this);
return;
}var cr=this.getTable();
var co=cr.getTableModel();
var cq=this.getPaneScroller().getTablePaneModel();
var cp=cq.getColumnCount();
var ci=cr.getRowHeight();
var cm=this.getFirstVisibleRow();
var cj=this.getVisibleRowCount();
var cs=co.getRowCount();

if(cm+cj>cs){cj=Math.max(0,cs-cm);
}var ck=cq.getTotalWidth();
var cn;
if(cj>0){cn=[bP,cd,(cr.getForceLineHeight()?bY+ci+bT:bO),bH,bR,this._getRowsHtml(cm,cj),bI];
}else{cn=[];
}var ct=cn.join(bO);
cl.innerHTML=ct;
this.setWidth(ck);
this.__nb=cp;
this.__nc=cj;
this.fireEvent(bK);
}},destruct:function(){this.__ne=this.__na=this.__nd=null;
}});
})();
(function(){var c="hovered",b="__nl",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(d){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__nl=d;
},members:{__nl:null,__nm:null,__nn:null,getPaneScroller:function(){return this.__nl;
},getTable:function(){return this.__nl.getTable();
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(o,p){var q=this.getHeaderWidgetAtColumn(o);

if(q!=null){q.setWidth(p);
}},setMouseOverColumn:function(I){if(I!=this.__nn){if(this.__nn!=null){var J=this.getHeaderWidgetAtColumn(this.__nn);

if(J!=null){J.removeState(c);
}}
if(I!=null){this.getHeaderWidgetAtColumn(I).addState(c);
}this.__nn=I;
}},getHeaderWidgetAtColumn:function(t){var u=this.getPaneScroller().getTablePaneModel().getX(t);
return this._getChildren()[u];
},showColumnMoveFeedback:function(e,x){var i=this.getContainerLocation();

if(this.__nm==null){var f=this.getPaneScroller().getTablePaneModel().getX(e);
var h=this._getChildren()[f];
var j=this.getTable().getTableModel();
var l=this.getTable().getTableColumnModel();
var m={xPos:f,col:e,name:j.getColumnName(e)};
var k=l.getHeaderCellRenderer(e);
var g=k.createHeaderCell(m);
var n=h.getBounds();
g.setWidth(n.width);
g.setHeight(n.height);
g.setZIndex(1000000);
g.setOpacity(0.8);
g.setLayoutProperties({top:i.top});
this.getApplicationRoot().add(g);
this.__nm=g;
}this.__nm.setLayoutProperties({left:i.left+x});
this.__nm.show();
},hideColumnMoveFeedback:function(){if(this.__nm!=null){this.__nm.destroy();
this.__nm=null;
}},isShowingColumnMoveFeedback:function(){return this.__nm!=null;
},_updateContent:function(v){var B=this.getTable().getTableModel();
var E=this.getTable().getTableColumnModel();
var F=this.getPaneScroller().getTablePaneModel();
var H=this._getChildren();
var C=F.getColumnCount();
var w=B.getSortColumnIndex();
if(v){this._cleanUpCells();
}var y={};
y.sortedAscending=B.isSortAscending();

for(var x=0;x<C;x++){var A=F.getColumnAtX(x);

if(A===undefined){continue;
}var G=E.getColumnWidth(A);
var D=E.getHeaderCellRenderer(A);
y.xPos=x;
y.col=A;
y.name=B.getColumnName(A);
y.editable=B.isColumnEditable(A);
y.sorted=(A==w);
var z=H[x];
if(z==null){z=D.createHeaderCell(y);
z.set({width:G});
this._add(z);
}else{D.updateHeaderCell(y,z);
}}},_cleanUpCells:function(){var s=this._getChildren();

for(var x=s.length-1;x>=0;x--){var r=s[x];
r.destroy();
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var m="Boolean",l="resize-line",k="mousedown",j="qx.event.type.Data",i="mouseup",h="qx.ui.table.pane.CellEvent",g="scroll",d="focus-indicator",c="excluded",b="scrollbar-y",bl="visible",bk="mousemove",bj="header",bi="editing",bh="click",bg="modelChanged",bf="scrollbar-x",be="cellClick",bd="pane",bc="__nw",t="__nu",u="mouseout",r="__nq",s="changeHorizontalScrollBarVisible",p="__nx",q="bottom",n="_applyScrollTimeout",o="changeScrollX",y="_applyTablePaneModel",z="Integer",H="dblclick",F="dataEdited",P="mousewheel",K="interval",X="qx.ui.table.pane.Scroller",U="__nr",B="_applyShowCellFocusIndicator",bb="resize",ba="__nt",Y="__ns",A="vertical",D="__nv",E="changeScrollY",G="appear",I="__np",L="table-scroller",R="beforeSort",W="cellDblclick",v="horizontal",w="losecapture",C="contextmenu",O="col-resize",N="disappear",M="_applyVerticalScrollBarVisible",T="_applyHorizontalScrollBarVisible",S="cellContextmenu",J="close",Q="changeTablePaneModel",a="qx.ui.table.pane.Model",V="changeVerticalScrollBarVisible";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bx){arguments.callee.base.call(this);
this.__no=bx;
var by=new qx.ui.layout.Grid();
by.setColumnFlex(0,1);
by.setRowFlex(1,1);
this._setLayout(by);
this.__np=this._showChildControl(bf);
this.__nq=this._showChildControl(b);
this.__nr=this._showChildControl(bj);
this.__ns=this._showChildControl(bd);
this.__nt=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__nt,{row:0,column:0,colSpan:2});
this.__nu=new qx.ui.table.pane.Clipper();
this.__nu.add(this.__nr);
this.__nu.addListener(w,this._onChangeCaptureHeader,this);
this.__nu.addListener(bk,this._onMousemoveHeader,this);
this.__nu.addListener(k,this._onMousedownHeader,this);
this.__nu.addListener(i,this._onMouseupHeader,this);
this.__nu.addListener(bh,this._onClickHeader,this);
this.__nt.add(this.__nu,{flex:1});
this.__nv=new qx.ui.table.pane.Clipper();
this.__nv.add(this.__ns);
this.__nv.addListener(P,this._onMousewheel,this);
this.__nv.addListener(bk,this._onMousemovePane,this);
this.__nv.addListener(k,this._onMousedownPane,this);
this.__nv.addListener(i,this._onMouseupPane,this);
this.__nv.addListener(bh,this._onClickPane,this);
this.__nv.addListener(C,this._onContextMenu,this);
this.__nv.addListener(H,this._onDblclickPane,this);
this.__nv.addListener(bb,this._onResizePane,this);
this._add(this.__nv,{row:1,column:0});
this.__nw=this.getChildControl(d);
this.getChildControl(l).hide();
this.addListener(u,this._onMouseout,this);
this.addListener(G,this._onAppear,this);
this.addListener(N,this._onDisappear,this);
this.__nx=new qx.event.Timer();
this.__nx.addListener(K,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":j,"changeScrollX":j,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"beforeSort":j},properties:{horizontalScrollBarVisible:{check:m,init:true,apply:T,event:s},verticalScrollBarVisible:{check:m,init:true,apply:M,event:V},tablePaneModel:{check:a,apply:y,event:Q},liveResize:{check:m,init:false},focusCellOnMouseMove:{check:m,init:false},selectBeforeFocus:{check:m,init:false},showCellFocusIndicator:{check:m,init:true,apply:B},scrollTimeout:{check:z,init:100,apply:n},appearance:{refine:true,init:L}},members:{__ny:null,__no:null,__nz:null,__nA:null,__nB:null,__nC:null,__nD:null,__nE:null,__nF:null,__nG:null,__nH:null,__nI:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,__nP:null,__nQ:null,__nR:null,__nS:null,__np:null,__nq:null,__nr:null,__nu:null,__ns:null,__nv:null,__nw:null,__nt:null,__nx:null,getPaneInsetRight:function(){var cu=this.getTopRightWidget();
var cv=cu&&cu.isVisible()&&cu.getBounds()?cu.getBounds().width:0;
var ct=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(cv,ct);
},setPaneWidth:function(dq){if(this.isVerticalScrollBarVisible()){dq+=this.getPaneInsetRight();
}this.setWidth(dq);
},_createChildControlImpl:function(dg){var dh;

switch(dg){case bj:dh=(this.getTable().getNewTablePaneHeader())(this);
break;
case bd:dh=(this.getTable().getNewTablePane())(this);
break;
case d:dh=new qx.ui.table.pane.FocusIndicator(this);
dh.setUserBounds(0,0,0,0);
dh.setZIndex(1000);
dh.addListener(i,this._onMouseupFocusIndicator,this);
this.__nv.add(dh);
dh.exclude();
break;
case l:dh=new qx.ui.core.Widget();
dh.setUserBounds(0,0,0,0);
dh.setZIndex(1000);
this.__nv.add(dh);
break;
case bf:dh=this._createScrollBar(v).set({minWidth:0,alignY:q});
dh.addListener(g,this._onScrollX,this);
this._add(dh,{row:2,column:0});
break;
case b:dh=this._createScrollBar(A);
dh.addListener(g,this._onScrollY,this);
this._add(dh,{row:1,column:1});
break;
}return dh||arguments.callee.base.call(this,dg);
},_applyHorizontalScrollBarVisible:function(bq,br){this.__np.setVisibility(bq?bl:c);

if(!bq){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(ci,cj){this.__nq.setVisibility(ci?bl:c);

if(!ci){this.setScrollX(0);
}},_applyTablePaneModel:function(ck,cl){if(cl!=null){cl.removeListener(bg,this._onPaneModelChanged,this);
}ck.addListener(bg,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(cw,cx){if(cw){this._updateFocusIndicator();
}else{if(this.__nw){this.__nw.hide();
}}},getScrollY:function(){return this.__nq.getPosition();
},setScrollY:function(scrollY,ch){this.__nq.scrollTo(scrollY);

if(ch){this._updateContent();
}},getScrollX:function(){return this.__np.getPosition();
},setScrollX:function(scrollX){this.__np.scrollTo(scrollX);
},getTable:function(){return this.__no;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(dd,de){this.__nr.setColumnWidth(dd,de);
this.__ns.setColumnWidth(dd,de);
var df=this.getTablePaneModel();
var x=df.getX(dd);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__nr.onColOrderChanged();
this.__ns.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bs,bt,bu,bv){this.__ns.onTableModelDataChanged(bs,bt,bu,bv);
var bw=this.getTable().getTableModel().getRowCount();

if(bw!=this.__ny){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bw){if(bw==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bw-1);
}}this.__ny=bw;
}},onSelectionChanged:function(){this.__ns.onSelectionChanged();
},onFocusChanged:function(){this.__ns.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__nr.onTableModelMetaDataChanged();
this.__ns.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__nr.onPaneModelChanged();
this.__ns.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__nr._updateContent();
this.__no._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var fs=this.__nv.getInnerSize();

if(!fs){return ;
}var fq=this.getTablePaneModel().getTotalWidth();
var fr=this.__np;

if(fs.width<fq){var fp=Math.max(0,fq-fs.width);
fr.setMaximum(fp);
fr.setKnobFactor(fs.width/fq);
var ft=fr.getPosition();
fr.setPosition(Math.min(ft,fp));
}else{fr.setMaximum(0);
fr.setKnobFactor(1);
fr.setPosition(0);
}},updateVerScrollBarMaximum:function(){var ew=this.__nv.getInnerSize();

if(!ew){return ;
}var eu=this.getTable().getTableModel();
var eq=eu.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){eq+=1;
}var ep=this.getTable().getRowHeight();
var es=eq*ep;
var ev=this.__nq;

if(ew.height<es){var er=Math.max(0,es-ew.height);
ev.setMaximum(er);
ev.setKnobFactor(ew.height/es);
var et=ev.getPosition();
ev.setPosition(Math.min(et,er));
}else{ev.setMaximum(0);
ev.setKnobFactor(1);
ev.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var dz=e.getData();
this.fireDataEvent(o,dz,e.getOldData());
this.__nu.scrollToX(dz);
this.__nv.scrollToX(dz);
},_onScrollY:function(e){this.fireDataEvent(E,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var bz=this.getTable();

if(!bz.getEnabled()){return;
}var bB=qx.bom.client.Engine.GECKO?1:3;
var bA=this.__nq.getPosition()+((e.getWheelDelta()*bB)*bz.getRowHeight());
this.__nq.scrollTo(bA);
if(this.__nM&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__nM,this.__nN);
}e.stop();
},__nT:function(cV){var db=this.getTable();
var dc=this.__nr.getHeaderWidgetAtColumn(this.__nH);
var cW=dc.getSizeHint().minWidth;
var cY=Math.max(cW,this.__nJ+cV-this.__nI);

if(this.getLiveResize()){var cX=db.getTableColumnModel();
cX.setColumnWidth(this.__nH,cY);
}else{this.__nr.setColumnWidth(this.__nH,cY);
var da=this.getTablePaneModel();
this._showResizeLine(da.getColumnLeft(this.__nH)+cY);
}this.__nI+=cY-this.__nJ;
this.__nJ=cY;
},__nU:function(di){var dj=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__nr.isShowingColumnMoveFeedback()||di>this.__nG+dj||di<this.__nG-dj){this.__nD+=di-this.__nG;
this.__nr.showColumnMoveFeedback(this.__nC,this.__nD);
var dk=this.__no.getTablePaneScrollerAtPageX(di);

if(this.__nF&&this.__nF!=dk){this.__nF.hideColumnMoveFeedback();
}
if(dk!=null){this.__nE=dk.showColumnMoveFeedback(di);
}else{this.__nE=null;
}this.__nF=dk;
this.__nG=di;
}},_onMousemoveHeader:function(e){var fl=this.getTable();

if(!fl.getEnabled()){return;
}var fm=false;
var ff=null;
var fj=e.getDocumentLeft();
var fk=e.getDocumentTop();
this.__nM=fj;
this.__nN=fk;

if(this.__nH!=null){this.__nT(fj);
fm=true;
e.stopPropagation();
}else if(this.__nC!=null){this.__nU(fj);
e.stopPropagation();
}else{var fg=this._getResizeColumnForPageX(fj);

if(fg!=-1){fm=true;
}else{var fi=fl.getTableModel();
var fn=this._getColumnForPageX(fj);

if(fn!=null&&fi.isColumnSortable(fn)){ff=fn;
}}}var fh=fm?O:null;
this.getApplicationRoot().setGlobalCursor(fh);
this.setCursor(fh);
this.__nr.setMouseOverColumn(ff);
},_onMousemovePane:function(e){var dl=this.getTable();

if(!dl.getEnabled()){return;
}var dn=e.getDocumentLeft();
var dp=e.getDocumentTop();
this.__nM=dn;
this.__nN=dp;
var dm=this._getRowForPagePos(dn,dp);

if(dm!=null&&this._getColumnForPageX(dn)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(dn,dp);
}}this.__nr.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cM=e.getDocumentLeft();
var cN=this._getResizeColumnForPageX(cM);

if(cN!=-1){this._startResizeHeader(cN,cM);
e.stop();
}else{var cL=this._getColumnForPageX(cM);

if(cL!=null){this._startMoveHeader(cL,cM);
e.stop();
}}},_startResizeHeader:function(dI,dJ){var dK=this.getTable().getTableColumnModel();
this.__nH=dI;
this.__nI=dJ;
this.__nJ=dK.getColumnWidth(this.__nH);
this.__nu.capture();
},_startMoveHeader:function(cJ,cK){this.__nC=cJ;
this.__nG=cK;
this.__nD=this.getTablePaneModel().getColumnLeft(cJ);
this.__nu.capture();
},_onMousedownPane:function(e){var cR=this.getTable();

if(!cR.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var cO=e.getDocumentLeft();
var cQ=e.getDocumentTop();
var cT=this._getRowForPagePos(cO,cQ);
var cS=this._getColumnForPageX(cO);

if(cT!==null){this.__nK={row:cT,col:cS};
var cP=this.getSelectBeforeFocus();

if(cP){cR.getSelectionManager().handleMouseDown(cT,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cO,cQ);
}
if(!cP){cR.getSelectionManager().handleMouseDown(cT,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__nK&&this.__nw.getRow()==this.__nK.row&&this.__nw.getColumn()==this.__nK.col){this.__nK={};
this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,this.__nK.row,this.__nK.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__nH!=null){this._stopResizeHeader();
}
if(this.__nC!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cU=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cU.setColumnWidth(this.__nH,this.__nJ);
}this.__nH=null;
this.__nu.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var eN=this.getTable().getTableColumnModel();
var eO=this.getTablePaneModel();
this.__nr.hideColumnMoveFeedback();

if(this.__nF){this.__nF.hideColumnMoveFeedback();
}
if(this.__nE!=null){var eQ=eO.getFirstColumnX()+eO.getX(this.__nC);
var eM=this.__nE;

if(eM!=eQ&&eM!=eQ+1){var eP=eN.getVisibleColumnAtX(eQ);
var eL=eN.getVisibleColumnAtX(eM);
var eK=eN.getOverallX(eP);
var eJ=(eL!=null)?eN.getOverallX(eL):eN.getOverallColumnCount();

if(eJ>eK){eJ--;
}eN.moveColumn(eK,eJ);
}}this.__nC=null;
this.__nE=null;
this.__nu.releaseCapture();
},_onMouseupPane:function(e){var dQ=this.getTable();

if(!dQ.getEnabled()){return;
}var dR=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(dR!=-1&&dR!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){dQ.getSelectionManager().handleMouseUp(dR,e);
}},_onMouseupHeader:function(e){var ce=this.getTable();

if(!ce.getEnabled()){return;
}
if(this.__nH!=null){this._stopResizeHeader();
this.__nL=true;
e.stop();
}else if(this.__nC!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__nL){this.__nL=false;
return;
}var dW=this.getTable();

if(!dW.getEnabled()){return;
}var dU=dW.getTableModel();
var dV=e.getDocumentLeft();
var dT=this._getResizeColumnForPageX(dV);

if(dT==-1){var ea=this._getColumnForPageX(dV);

if(ea!=null&&dU.isColumnSortable(ea)){var dS=dU.getSortColumnIndex();
var dX=(ea!=dS)?true:!dU.isSortAscending();
var dY={column:ea,ascending:dX};

if(this.fireDataEvent(R,dY)){dU.sortByColumn(ea,dX);
dW.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var bY=this.getTable();

if(!bY.getEnabled()){return;
}var cc=e.getDocumentLeft();
var cd=e.getDocumentTop();
var ca=this._getRowForPagePos(cc,cd);
var cb=this._getColumnForPageX(cc);

if(ca!=null&&cb!=null){bY.getSelectionManager().handleClick(ca,e);

if(this.__nw.isHidden()||(this.__nK&&ca==this.__nK.row&&cb==this.__nK.col)){this.__nK={};
this.fireEvent(be,qx.ui.table.pane.CellEvent,[this,e,ca,cb],true);
}}},_onContextMenu:function(e){var cp=e.getDocumentLeft();
var cq=e.getDocumentTop();
var cn=this._getRowForPagePos(cp,cq);
var co=this._getColumnForPageX(cp);

if(this.__nw.isHidden()||(this.__nK&&cn==this.__nK.row&&co==this.__nK.col)){this.__nK={};
this.fireEvent(S,qx.ui.table.pane.CellEvent,[this,e,cn,co],true);
var cm=this.getTable().getContextMenu();

if(cm){if(cm.getChildren().length>0){cm.openAtMouse(e);
}else{cm.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var ey=e.getDocumentLeft();
var ez=e.getDocumentTop();
this._focusCellAtPagePos(ey,ez);
this.startEditing();
var ex=this._getRowForPagePos(ey,ez);

if(ex!=-1&&ex!=null){this.fireEvent(W,qx.ui.table.pane.CellEvent,[this,e,ex],true);
}},_onMouseout:function(e){var cF=this.getTable();

if(!cF.getEnabled()){return;
}if(this.__nH==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__nr.setMouseOverColumn(null);
},_showResizeLine:function(x){var cH=this._showChildControl(l);
var cG=cH.getWidth();
var cI=this.__nv.getBounds();
cH.setUserBounds(x-Math.round(cG/2),0,cG,cI.height);
},_hideResizeLine:function(){this._excludeChildControl(l);
},showColumnMoveFeedback:function(eR){var fb=this.getTablePaneModel();
var fa=this.getTable().getTableColumnModel();
var eU=this.__ns.getContainerLocation().left;
var eY=fb.getColumnCount();
var eV=0;
var eT=0;
var fe=eU;

for(var eS=0;eS<eY;eS++){var eW=fb.getColumnAtX(eS);
var fc=fa.getColumnWidth(eW);

if(eR<fe+fc/2){break;
}fe+=fc;
eV=eS+1;
eT=fe-eU;
}var eX=this.__nv.getContainerLocation().left;
var fd=this.__nv.getBounds().width;
var scrollX=eX-eU;
eT=qx.lang.Number.limit(eT,scrollX+2,scrollX+fd-1);
this._showResizeLine(eT);
return fb.getFirstColumnX()+eV;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dM,dN){var dP=this._getRowForPagePos(dM,dN);

if(dP!=-1&&dP!=null){var dO=this._getColumnForPageX(dM);
this.__no.setFocusedCell(dO,dP);
}},setFocusedCell:function(cf,cg){if(!this.isEditing()){this.__ns.setFocusedCell(cf,cg,this.__nA);
this.__nO=cf;
this.__nP=cg;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__nO;
},getFocusedRow:function(){return this.__nP;
},scrollCellVisible:function(eb,ec){var em=this.getTablePaneModel();
var ed=em.getX(eb);

if(ed!=-1){var ej=this.__nv.getInnerSize();

if(!ej){return;
}var ek=this.getTable().getTableColumnModel();
var eg=em.getColumnLeft(eb);
var en=ek.getColumnWidth(eb);
var ee=this.getTable().getRowHeight();
var eo=ec*ee;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var el=Math.min(eg,eg+en-ej.width);
var ei=eg;
this.setScrollX(Math.max(el,Math.min(ei,scrollX)));
var ef=eo+ee-ej.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){ef+=ee;
}var eh=eo;
this.setScrollY(Math.max(ef,Math.min(eh,scrollY)),true);
}},isEditing:function(){return this.__nQ!=null;
},startEditing:function(){var bU=this.getTable();
var bS=bU.getTableModel();
var bW=this.__nO;

if(!this.isEditing()&&(bW!=null)&&bS.isColumnEditable(bW)){var bX=this.__nP;
var bQ=this.getTablePaneModel().getX(bW);
var bR=bS.getValue(bW,bX);
this.__nR=bU.getTableColumnModel().getCellEditorFactory(bW);
var bT={col:bW,row:bX,xPos:bQ,value:bR,table:bU};
this.__nQ=this.__nR.createCellEditor(bT);
if(this.__nQ===null){return false;
}else if(this.__nQ instanceof qx.ui.window.Window){this.__nQ.setModal(true);
this.__nQ.setShowClose(false);
this.__nQ.addListener(J,this._onCellEditorModalWindowClose,this);
var f=bU.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__nQ,bT);
}this.__nQ.open();
}else{var bV=this.__nw.getInnerSize();
this.__nQ.setUserBounds(0,0,bV.width,bV.height);
this.__nw.addListener(k,function(e){e.stopPropagation();
});
this.__nw.add(this.__nQ);
this.__nw.addState(bi);
this.__nw.setKeepActive(false);
this.__nQ.focus();
this.__nQ.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var fv=this.__nR.getCellEditorValue(this.__nQ);
var fu=this.getTable().getTableModel().getValue(this.__nO,this.__nP);
this.getTable().getTableModel().setValue(this.__nO,this.__nP,fv);
this.__no.focus();
this.__no.fireDataEvent(F,{row:this.__nP,col:this.__nO,oldValue:fu,value:fv});
}},cancelEditing:function(){if(this.isEditing()&&!this.__nQ.pendingDispose){if(this._cellEditorIsModalWindow){this.__nQ.destroy();
this.__nQ=null;
this.__nR=null;
this.__nQ.pendingDispose=true;
}else{this.__nw.removeState(bi);
this.__nw.setKeepActive(true);
this.__nQ.destroy();
this.__nQ=null;
this.__nR=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(cy){var cB=this.getTable().getTableColumnModel();
var cC=this.getTablePaneModel();
var cA=cC.getColumnCount();
var cE=this.__nr.getContainerLocation().left;

for(var x=0;x<cA;x++){var cz=cC.getColumnAtX(x);
var cD=cB.getColumnWidth(cz);
cE+=cD;

if(cy<cE){return cz;
}}return null;
},_getResizeColumnForPageX:function(dr){var dv=this.getTable().getTableColumnModel();
var dw=this.getTablePaneModel();
var du=dw.getColumnCount();
var dy=this.__nr.getContainerLocation().left;
var ds=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<du;x++){var dt=dw.getColumnAtX(x);
var dx=dv.getColumnWidth(dt);
dy+=dx;

if(dr>=(dy-ds)&&dr<=(dy+ds)){return dt;
}}return -1;
},_getRowForPagePos:function(eA,eB){var eC=this.__ns.getContentLocation();

if(eA<eC.left||eA>eC.right){return null;
}
if(eB>=eC.top&&eB<=eC.bottom){var eD=this.getTable().getRowHeight();
var scrollY=this.__nq.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eD)*eD;
}var eG=scrollY+eB-eC.top;
var eI=Math.floor(eG/eD);
var eH=this.getTable().getTableModel();
var eE=eH.getRowCount();
return (eI<eE)?eI:null;
}var eF=this.__nr.getContainerLocation();

if(eB>=eF.top&&eB<=eF.bottom&&eA<=eF.right){return -1;
}return null;
},setTopRightWidget:function(bo){var bp=this.__nS;

if(bp!=null){this.__nt.remove(bp);
}
if(bo!=null){this.__nt.add(bo);
}this.__nS=bo;
},getTopRightWidget:function(){return this.__nS;
},getHeader:function(){return this.__nr;
},getTablePane:function(){return this.__ns;
},getVerticalScrollBarWidth:function(){var cs=this.__nq;
return cs.isVisible()?(cs.getSizeHint().width||0):0;
},getNeededScrollBars:function(bC,bD){var bJ=this.__nq.getSizeHint().width;
var bK=this.__nv.getInnerSize();
var bE=bK?bK.width:0;

if(this.getVerticalScrollBarVisible()){bE+=bJ;
}var bN=bK?bK.height:0;

if(this.getHorizontalScrollBarVisible()){bN+=bJ;
}var bH=this.getTable().getTableModel();
var bL=bH.getRowCount();
var bO=this.getTablePaneModel().getTotalWidth();
var bM=this.getTable().getRowHeight()*bL;
var bG=false;
var bP=false;

if(bO>bE){bG=true;

if(bM>bN-bJ){bP=true;
}}else if(bM>bN){bP=true;

if(!bD&&(bO>bE-bJ)){bG=true;
}}var bI=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var bF=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((bC||bG)?bI:0)|((bD||!bP)?0:bF);
},_applyScrollTimeout:function(bm,bn){this._startInterval(bm);
},_startInterval:function(cr){this.__nx.setInterval(cr);
this.__nx.start();
},_stopInterval:function(){this.__nx.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__nA&&!this.__ns._layoutPending){this.__nA=false;
this._updateContent();
}}),_updateContent:function(){var dE=this.__nv.getInnerSize();

if(!dE){return;
}var dH=dE.height;
var scrollX=this.__np.getPosition();
var scrollY=this.__nq.getPosition();
var dB=this.getTable().getRowHeight();
var dC=Math.floor(scrollY/dB);
var dG=this.__ns.getFirstVisibleRow();
this.__ns.setFirstVisibleRow(dC);
var dD=Math.ceil(dH/dB);
var dA=0;
var dF=this.getTable().getKeepFirstVisibleRowComplete();

if(!dF){dD++;
dA=scrollY%dB;
}this.__ns.setVisibleRowCount(dD);

if(dC!=dG){this._updateFocusIndicator();
}this.__nv.scrollToX(scrollX);
if(!dF){this.__nv.scrollToY(dA);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var fo=this.getTable();

if(!fo.getEnabled()){return;
}this.__nw.moveToCell(this.__nO,this.__nP);
}},destruct:function(){this._stopInterval();
var dL=this.getTablePaneModel();

if(dL){dL.dispose();
}this.__nK=this.__nS=this.__no=null;
this._disposeObjects(I,r,t,D,bc,U,Y,ba,p);
}});
})();
(function(){var c="qx.ui.core.scroll.IScrollBar",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"scroll":b},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(e){this.assertNumber(e);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(a){this.assertNumber(a);
}}});
})();
(function(){var w="horizontal",v="px",u="scroll",t="vertical",s="-1px",r="qx.client",q="0",p="hidden",o="mousedown",n="qx.ui.core.scroll.NativeScrollBar",L="PositiveNumber",K="Integer",J="mousemove",I="_applyMaximum",H="_applyOrientation",G="appear",F="opera",E="PositiveInteger",D="mshtml",C="mouseup",A="__nW",B="Number",y="_applyPosition",z="scrollbar",x="native";
qx.Class.define(n,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(N){arguments.callee.base.call(this);
this.addState(x);
this.getContentElement().addListener(u,this._onScroll,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(C,this._stopPropagation,this);
this.addListener(J,this._stopPropagation,this);

if(qx.core.Variant.isSet(r,F)){this.addListener(G,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(N!=null){this.setOrientation(N);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:z},orientation:{check:[w,t],init:w,apply:H},maximum:{check:E,apply:I,init:100},position:{check:B,init:0,apply:y,event:u},singleStep:{check:K,init:20},knobFactor:{check:L,nullable:true}},members:{__nV:null,__nW:null,_getScrollPaneElement:function(){if(!this.__nW){this.__nW=new qx.html.Element();
}return this.__nW;
},renderLayout:function(a,top,b,c){var d=arguments.callee.base.call(this,a,top,b,c);
this._updateScrollBar();
return d;
},_getContentHint:function(){var Q=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__nV?100:Q,maxWidth:this.__nV?null:Q,minWidth:this.__nV?null:Q,height:this.__nV?Q:100,maxHeight:this.__nV?Q:null,minHeight:this.__nV?Q:null};
},_applyEnabled:function(T,U){arguments.callee.base.call(this,T,U);
this._updateScrollBar();
},_applyMaximum:function(S){this._updateScrollBar();
},_applyPosition:function(M){var content=this.getContentElement();

if(this.__nV){content.scrollToX(M);
}else{content.scrollToY(M);
}},_applyOrientation:function(k,l){var m=this.__nV=k===w;
this.set({allowGrowX:m,allowShrinkX:m,allowGrowY:!m,allowShrinkY:!m});

if(m){this.replaceState(t,w);
}else{this.replaceState(w,t);
}this.getContentElement().setStyles({overflowX:m?u:p,overflowY:m?p:u});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var h=this.__nV;
var i=this.getBounds();

if(!i){return;
}
if(this.isEnabled()){var j=h?i.width:i.height;
var g=this.getMaximum()+j;
}else{g=0;
}if(qx.core.Variant.isSet(r,D)){var i=this.getBounds();
this.getContentElement().setStyles({left:h?q:s,top:h?s:q,width:(h?i.width:i.width+1)+v,height:(h?i.height+1:i.height)+v});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(h?g:1)+v,height:(h?1:g)+v});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(f){this.scrollTo(this.getPosition()+f);
},scrollBySteps:function(V){var W=this.getSingleStep();
this.scrollBy(V*W);
},_onScroll:function(e){var P=this.getContentElement();
var O=this.__nV?P.getScrollX():P.getScrollY();
this.setPosition(O);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(A);
}});
})();
(function(){var n="slider",m="horizontal",l="button-begin",k="vertical",j="button-end",i="Integer",h="execute",g="right",f="left",d="down",C="up",B="PositiveNumber",A="changeValue",z="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",y="_applyKnobFactor",x="knob",w="qx.ui.core.scroll.ScrollBar",v="resize",u="_applyOrientation",t="_applyPageStep",r="PositiveInteger",s="scroll",p="_applyPosition",q="scrollbar",o="_applyMaximum";
qx.Class.define(w,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(F){arguments.callee.base.call(this);
this._createChildControl(l);
this._createChildControl(n).addListener(v,this._onResizeSlider,this);
this._createChildControl(j);
if(F!=null){this.setOrientation(F);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:q},orientation:{check:[m,k],init:m,apply:u},maximum:{check:r,apply:o,init:100},position:{check:z,init:0,apply:p,event:s},singleStep:{check:i,init:20},pageStep:{check:i,init:10,apply:t},knobFactor:{check:B,apply:y,nullable:true}},members:{__nX:2,_createChildControlImpl:function(G){var H;

switch(G){case n:H=new qx.ui.core.scroll.ScrollSlider();
H.setPageStep(100);
H.setFocusable(false);
H.addListener(A,this._onChangeSliderValue,this);
this._add(H,{flex:1});
break;
case l:H=new qx.ui.form.RepeatButton();
H.setFocusable(false);
H.addListener(h,this._onExecuteBegin,this);
this._add(H);
break;
case j:H=new qx.ui.form.RepeatButton();
H.setFocusable(false);
H.addListener(h,this._onExecuteEnd,this);
this._add(H);
break;
}return H||arguments.callee.base.call(this,G);
},_applyMaximum:function(a){this.getChildControl(n).setMaximum(a);
},_applyPosition:function(D){this.getChildControl(n).setValue(D);
},_applyKnobFactor:function(c){this.getChildControl(n).setKnobFactor(c);
},_applyPageStep:function(b){this.getChildControl(n).setPageStep(b);
},_applyOrientation:function(J,K){var L=this._getLayout();

if(L){L.dispose();
}if(J===m){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(k,m);
this.getChildControl(l).replaceState(C,f);
this.getChildControl(j).replaceState(d,g);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(m,k);
this.getChildControl(l).replaceState(f,C);
this.getChildControl(j).replaceState(g,d);
}this.getChildControl(n).setOrientation(J);
},scrollTo:function(I){this.getChildControl(n).slideTo(I);
},scrollBy:function(E){this.getChildControl(n).slideBy(E);
},scrollBySteps:function(M){var N=this.getSingleStep();
this.getChildControl(n).slideBy(M*N);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var O=this.getChildControl(n).getChildControl(x);
var R=O.getSizeHint();
var P=false;
var Q=this.getChildControl(n).getInnerSize();

if(this.getOrientation()==k){if(Q.height<R.minHeight+this.__nX){P=true;
}}else{if(Q.width<R.minWidth+this.__nX){P=true;
}}
if(P){O.exclude();
}else{O.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="qx.ui.form.IRange";
qx.Interface.define(c,{members:{setMinimum:function(d){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(b){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(e){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(a){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var be="knob",bd="horizontal",bc="vertical",bb="Integer",ba="px",Y="mousemove",X="resize",W="left",V="top",U="mouseup",bI="slider",bH="PageUp",bG="mousedown",bF="height",bE="changeValue",bD="Left",bC="Down",bB="Up",bA="dblclick",bz="qx.ui.form.Slider",bl="PageDown",bm="mousewheel",bj="interval",bk="_applyValue",bh="_applyKnobFactor",bi="End",bf="width",bg="_applyOrientation",bn="Home",bo="floor",br="_applyMinimum",bq="click",bt="Right",bs="keypress",bv="ceil",bu="losecapture",bp="contextmenu",by="_applyMaximum",bx="Number",bw="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bz,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(v){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bs,this._onKeyPress);
this.addListener(bm,this._onMouseWheel);
this.addListener(bG,this._onMouseDown);
this.addListener(U,this._onMouseUp);
this.addListener(bu,this._onMouseUp);
this.addListener(X,this._onUpdate);
this.addListener(bp,this._onStopEvent);
this.addListener(bq,this._onStopEvent);
this.addListener(bA,this._onStopEvent);
if(v!=null){this.setOrientation(v);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bI},focusable:{refine:true,init:true},orientation:{check:[bd,bc],init:bd,apply:bg},value:{check:bw,init:0,apply:bk,event:bE,nullable:true},minimum:{check:bb,init:0,apply:br},maximum:{check:bb,init:100,apply:by},singleStep:{check:bb,init:1},pageStep:{check:bb,init:10},knobFactor:{check:bx,apply:bh,nullable:true}},members:{__nY:null,__oa:null,__ob:null,__oc:null,__od:null,__oe:null,__of:null,__og:null,__oh:null,_forwardStates:{invalid:true},_createChildControlImpl:function(w){var x;

switch(w){case be:x=new qx.ui.core.Widget();
x.addListener(X,this._onUpdate,this);
this._add(x);
break;
}return x||arguments.callee.base.call(this,w);
},_onMouseWheel:function(e){var bL=e.getWheelDelta()>0?1:-1;
this.slideBy(bL*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var T=this.getOrientation()===bd;
var S=T?bD:bB;
var forward=T?bt:bC;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case S:this.slideBack();
break;
case bl:this.slidePageForward();
break;
case bH:this.slidePageBack();
break;
case bn:this.slideToBegin();
break;
case bi:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__oc){return;
}var I=this.__oj;
var G=this.getChildControl(be);
var H=I?W:V;
var K=I?e.getDocumentLeft():e.getDocumentTop();
var L=this.__nY=qx.bom.element.Location.get(this.getContentElement().getDomElement())[H];
var J=this.__oa=qx.bom.element.Location.get(G.getContainerElement().getDomElement())[H];

if(e.getTarget()===G){this.__oc=true;
this.__od=K+L-J;
}else{this.__oe=true;
this.__of=K<=J?-1:1;
this.__ok(e);
this._onInterval();
if(!this.__oh){this.__oh=new qx.event.Timer(100);
this.__oh.addListener(bj,this._onInterval,this);
}this.__oh.start();
}this.addListener(Y,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__oc){this.releaseCapture();
delete this.__oc;
delete this.__od;
}else if(this.__oe){this.__oh.stop();
this.releaseCapture();
delete this.__oe;
delete this.__of;
delete this.__og;
}this.removeListener(Y,this._onMouseMove);
if(e.getType()===U){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__oc){var bP=this.__oj?e.getDocumentLeft():e.getDocumentTop();
var bO=bP-this.__od;
this.slideTo(this._positionToValue(bO));
}else if(this.__oe){this.__ok(e);
}e.stopPropagation();
},_onInterval:function(e){var y=this.getValue()+(this.__of*this.getPageStep());
if(y<this.getMinimum()){y=this.getMinimum();
}else if(y>this.getMaximum()){y=this.getMaximum();
}var z=this.__of==-1;

if((z&&y<=this.__og)||(!z&&y>=this.__og)){y=this.__og;
}this.slideTo(y);
},_onUpdate:function(e){var Q=this.getInnerSize();
var R=this.getChildControl(be).getBounds();
var P=this.__oj?bf:bF;
this._updateKnobSize();
this.__oi=Q[P]-R[P];
this.__ob=R[P];
this._updateKnobPosition();
},__oj:false,__oi:0,__ok:function(e){var a=this.__oj;
var i=a?e.getDocumentLeft():e.getDocumentTop();
var k=this.__nY;
var b=this.__oa;
var m=this.__ob;
var j=i-k;

if(i>=b){j-=m;
}var g=this._positionToValue(j);
var c=this.getMinimum();
var d=this.getMaximum();

if(g<c){g=c;
}else if(g>d){g=d;
}else{var h=this.getValue();
var f=this.getPageStep();
var l=this.__of<0?bo:bv;
g=h+(Math[l]((g-h)/f)*f);
}if(this.__og==null||(this.__of==-1&&g<=this.__og)||(this.__of==1&&g>=this.__og)){this.__og=g;
}},_positionToValue:function(B){var C=this.__oi;
if(C==null||C==0){return 0;
}var E=B/C;

if(E<0){E=0;
}else if(E>1){E=1;
}var D=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(D*E);
},_valueToPosition:function(n){var o=this.__oi;

if(o==null){return 0;
}var p=this.getMaximum()-this.getMinimum();
if(p==0){return 0;
}var n=n-this.getMinimum();
var q=n/p;

if(q<0){q=0;
}else if(q>1){q=1;
}return Math.round(o*q);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(r){var s=this.getChildControl(be).getContainerElement();

if(this.__oj){s.setStyle(W,r+ba,true);
}else{s.setStyle(V,r+ba,true);
}},_updateKnobSize:function(){var bK=this.getKnobFactor();

if(bK==null){return;
}var bJ=this.getInnerSize();

if(bJ==null){return;
}if(this.__oj){this.getChildControl(be).setWidth(Math.round(bK*bJ.width));
}else{this.getChildControl(be).setHeight(Math.round(bK*bJ.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(F){this.slideTo(this.getValue()+F);
},slideTo:function(A){if(A<this.getMinimum()){A=this.getMinimum();
}else if(A>this.getMaximum()){A=this.getMaximum();
}else{A=this.getMinimum()+Math.round((A-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(A);
},_applyOrientation:function(M,N){var O=this.getChildControl(be);
this.__oj=M===bd;
if(this.__oj){this.removeState(bc);
O.removeState(bc);
this.addState(bd);
O.addState(bd);
O.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(bd);
O.removeState(bd);
this.addState(bc);
O.addState(bc);
O.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bS,bT){if(bS!=null){this._updateKnobSize();
}else{if(this.__oj){this.getChildControl(be).resetWidth();
}else{this.getChildControl(be).resetHeight();
}}},_applyValue:function(bM,bN){if(bM!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bQ,bR){if(this.getValue()<bQ){this.setValue(bQ);
}this._updateKnobPosition();
},_applyMaximum:function(t,u){if(this.getValue()>t){this.setValue(t);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(c){this.getContentElement().scrollToX(c,false);
},scrollToY:function(b){this.getContentElement().scrollToY(b,true);
}}});
})();
(function(){var h="Integer",g="Escape",f="keypress",d="Enter",c="excluded",b="qx.ui.table.pane.FocusIndicator";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(a){arguments.callee.base.call(this);
this.__ol=a;
this.setKeepActive(true);
this.addListener(f,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:c},row:{check:h,nullable:true},column:{check:h,nullable:true}},members:{__ol:null,_onKeyPress:function(e){var q=e.getKeyIdentifier();

if(q!==g&&q!==d){e.stopPropagation();
}},moveToCell:function(i,j){if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__ol.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__ol.getTable();
var n=p.getTableColumnModel();
var o=this.__ol.getTablePaneModel();
var m=this.__ol.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this.__ol=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(c,d,e,f){d.clone(this);
this.setBubbles(false);

if(e!=null){this.setRow(e);
}else{this.setRow(c._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(f!=null){this.setColumn(f);
}else{this.setColumn(c._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(g){var h=arguments.callee.base.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Bootstrap.define(a,{statics:{isInRange:function(e,f,g){return e>=f&&e<=g;
},isBetweenRange:function(h,i,j){return h>i&&h<j;
},limit:function(b,c,d){if(d!=null&&b>d){return d;
}else if(c!=null&&b<c){return c;
}else{return b;
}}}});
})();
(function(){var m="Number",l="qx.event.type.Event",k="_applyFirstColumnX",j="Integer",i="qx.ui.table.pane.Model",h="_applyMaxColumnCount",g="visibilityChangedPre";
qx.Class.define(i,{extend:qx.core.Object,construct:function(f){arguments.callee.base.call(this);
f.addListener(g,this._onColVisibilityChanged,this);
this.__om=f;
},events:{"modelChanged":l},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:j,init:0,apply:k},maxColumnCount:{check:m,init:-1,apply:h}},members:{__on:null,__om:null,_applyFirstColumnX:function(z,A){this.__on=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(C,D){this.__on=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(a){this.__om=a;
this.__on=null;
},_onColVisibilityChanged:function(B){this.__on=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__on==null){var s=this.getFirstColumnX();
var u=this.getMaxColumnCount();
var t=this.__om.getVisibleColumnCount();

if(u==-1||(s+u)>t){this.__on=t-s;
}else{this.__on=u;
}}return this.__on;
},getColumnAtX:function(n){var o=this.getFirstColumnX();
return this.__om.getVisibleColumnAtX(o+n);
},getX:function(p){var q=this.getFirstColumnX();
var r=this.getMaxColumnCount();
var x=this.__om.getVisibleX(p)-q;

if(x>=0&&(r==-1||x<r)){return x;
}else{return -1;
}},getColumnLeft:function(b){var e=0;
var d=this.getColumnCount();

for(var x=0;x<d;x++){var c=this.getColumnAtX(x);

if(c==b){return e;
}e+=this.__om.getColumnWidth(c);
}return -1;
},getTotalWidth:function(){var v=0;
var w=this.getColumnCount();

for(var x=0;x<w;x++){var y=this.getColumnAtX(x);
v+=this.__om.getColumnWidth(y);
}return v;
}},destruct:function(){this.__om=null;
}});
})();
(function(){var bL="",bK="!",bJ="'!",bI="'",bH="Expected '",bG="' (rgb(",bF=",",bE=")), but found value '",bD="Event (",bC="Expected value to be the CSS color '",cR="' but found ",cQ="The value '",cP="qx.core.Object",cO="Expected value to be an array but found ",cN=") was fired.",cM="Expected value to be an integer >= 0 but found ",cL="' to be not equal with '",cK="' to '",cJ="qx.ui.core.Widget",cI="Called assertTrue with '",bS="Expected value to be a map but found ",bT="The function did not raise an exception!",bQ="Expected value to be undefined but found ",bR="Expected value to be a DOM element but found  '",bO="Expected value to be a regular expression but found ",bP="' to implement the interface '",bM="Expected value to be null but found ",bN="Invalid argument 'type'",cb="Called assert with 'false'",cc="Assertion error! ",co="Expected value to be a string but found ",ck="null",cw="' but found '",cr="' must must be a key of the map '",cE="The String '",cB="Expected value not to be undefined but found ",cg="qx.util.ColorUtil",cH=": ",cG="The raised exception does not have the expected type! ",cF=") not fired.",cf="qx.core.Assert",ci="Expected value to be typeof object but found ",cj="' (identical) but found '",cm="' must have any of the values defined in the array '",cp="Expected value to be a number but found ",cs="Called assertFalse with '",cy="]",cD="Expected value to be a qooxdoo object but found ",bU="' arguments.",bV="Expected value not to be null but found ",ch="Array[",cv="' does not match the regular expression '",cu="' to be not identical with '",ct="' arguments but found '",cA="', which cannot be converted to a CSS color!",cz="Expected object '",cq="qx.core.AssertionError",cx="Expected value to be a boolean but found ",bz="))!",cC="Expected value to be a qooxdoo widget but found ",bW="Expected value '%1' to be in the range '%2'..'%3'!",bX="Expected value to be typeof '",cl="Expected value to be typeof function but found ",bA="Expected value to be an integer but found ",bB="Called fail().",ce="The parameter 're' must be a string or a regular expression.",bY="Expected value to be a number >= 0 but found ",ca="Expected value to be instanceof '",cd="Wrong number of arguments given. Expected '",cn="object";
qx.Bootstrap.define(cf,{statics:{__oo:true,__op:function(bi,bj){var bk=bL;

for(var i=1,l=arguments.length;i<l;i++){bk=bk+this.__oq(arguments[i]);
}var bm=cc+bi+cH+bk;

if(this.__oo){qx.log.Logger.error(bm);
}
if(qx.Class.isDefined(cq)){var bl=new qx.core.AssertionError(bi,bk);

if(this.__oo){qx.log.Logger.error("Stack trace: \n"+bl.getStackTrace());
}throw bl;
}else{throw new Error(bm);
}},__oq:function(dS){var dT;

if(dS===null){dT=ck;
}else if(qx.lang.Type.isArray(dS)&&dS.length>10){dT=ch+dS.length+cy;
}else if((dS instanceof Object)&&(dS.toString==null)){dT=qx.util.Json.stringify(dS);
}else{try{dT=dS.toString();
}catch(e){dT=bL;
}}return dT;
},assert:function(dN,dO){dN==true||this.__op(dO||bL,cb);
},fail:function(bt){this.__op(bt||bL,bB);
},assertTrue:function(r,s){(r===true)||this.__op(s||bL,cI,r,bI);
},assertFalse:function(I,J){(I===false)||this.__op(J||bL,cs,I,bI);
},assertEquals:function(D,E,F){D==E||this.__op(F||bL,bH,D,cw,E,bJ);
},assertNotEquals:function(N,O,P){N!=O||this.__op(P||bL,bH,N,cL,O,bJ);
},assertIdentical:function(cY,da,db){cY===da||this.__op(db||bL,bH,cY,cj,da,bJ);
},assertNotIdentical:function(dU,dV,dW){dU!==dV||this.__op(dW||bL,bH,dU,cu,dV,bJ);
},assertNotUndefined:function(G,H){G!==undefined||this.__op(H||bL,cB,G,bK);
},assertUndefined:function(dj,dk){dj===undefined||this.__op(dk||bL,bQ,dj,bK);
},assertNotNull:function(f,g){f!==null||this.__op(g||bL,bV,f,bK);
},assertNull:function(dL,dM){dL===null||this.__op(dM||bL,bM,dL,bK);
},assertJsonEquals:function(t,u,v){this.assertEquals(qx.util.Json.stringify(t),qx.util.Json.stringify(u),v);
},assertMatch:function(bb,bc,bd){this.assertString(bb);
this.assert(qx.lang.Type.isRegExp(bc)||qx.lang.Type.isString(bc),ce);
bb.search(bc)>=0||this.__op(bd||bL,cE,bb,cv,bc.toString(),bJ);
},assertArgumentsCount:function(m,n,o,p){var q=m.length;
(q>=n&&q<=o)||this.__op(p||bL,cd,n,cK,o,ct,arguments.length,bU);
},assertEventFired:function(dc,event,dd,de,df){var dh=false;
var dg=function(e){if(de){de.call(dc,e);
}dh=true;
};
var di=dc.addListener(event,dg,dc);
dd.call();
dh===true||this.__op(df||bL,bD,event,cF);
dc.removeListenerById(di);
},assertEventNotFired:function(dr,event,ds,dt){var dv=false;
var du=function(e){dv=true;
};
var dw=dr.addListener(event,du,dr);
ds.call();
dv===false||this.__op(dt||bL,bD,event,cN);
dr.removeListenerById(dw);
},assertException:function(V,W,X,Y){var W=W||Error;
var ba;

try{this.__oo=false;
V();
}catch(cU){ba=cU;
}finally{this.__oo=true;
}
if(ba==null){this.__op(Y||bL,bT);
}ba instanceof W||this.__op(Y||bL,cG,W);

if(X){this.assertMatch(ba.toString(),X,Y);
}},assertInArray:function(cV,cW,cX){cW.indexOf(cV)!==-1||this.__op(cX||bL,cQ,cV,cm,cW,bI);
},assertArrayEquals:function(Q,R,S){this.assertArray(Q,S);
this.assertArray(R,S);
this.assertEquals(Q.length,R.length,S);

for(var i=0;i<Q.length;i++){this.assertIdentical(Q[i],R[i],S);
}},assertKeyInMap:function(dP,dQ,dR){dQ[dP]!==undefined||this.__op(dR||bL,cQ,dP,cr,dQ,bI);
},assertFunction:function(bp,bq){qx.lang.Type.isFunction(bp)||this.__op(bq||bL,cl,bp,bK);
},assertString:function(w,x){qx.lang.Type.isString(w)||this.__op(x||bL,co,w,bK);
},assertBoolean:function(B,C){qx.lang.Type.isBoolean(B)||this.__op(C||bL,cx,B,bK);
},assertNumber:function(bn,bo){(qx.lang.Type.isNumber(bn)&&isFinite(bn))||this.__op(bo||bL,cp,bn,bK);
},assertPositiveNumber:function(dx,dy){(qx.lang.Type.isNumber(dx)&&isFinite(dx)&&dx>=0)||this.__op(dy||bL,bY,dx,bK);
},assertInteger:function(br,bs){(qx.lang.Type.isNumber(br)&&isFinite(br)&&br%1===0)||this.__op(bs||bL,bA,br,bK);
},assertPositiveInteger:function(K,L){var M=(qx.lang.Type.isNumber(K)&&isFinite(K)&&K%1===0&&K>=0);
M||this.__op(L||bL,cM,K,bK);
},assertInRange:function(a,b,c,d){(a>=b&&a<=c)||this.__op(d||bL,qx.lang.String.format(bW,[a,b,c]));
},assertObject:function(h,j){var k=h!==null&&(qx.lang.Type.isObject(h)||typeof h===cn);
k||this.__op(j||bL,ci,(h),bK);
},assertArray:function(dp,dq){qx.lang.Type.isArray(dp)||this.__op(dq||bL,cO,dp,bK);
},assertMap:function(dJ,dK){qx.lang.Type.isObject(dJ)||this.__op(dK||bL,bS,dJ,bK);
},assertRegExp:function(cS,cT){qx.lang.Type.isRegExp(cS)||this.__op(cT||bL,bO,cS,bK);
},assertType:function(bu,bv,bw){this.assertString(bv,bN);
typeof (bu)===bv||this.__op(bw||bL,bX,bv,cR,bu,bK);
},assertInstance:function(be,bf,bg){var bh=bf.classname||bf+bL;
be instanceof bf||this.__op(bg||bL,ca,bh,cR,be,bK);
},assertInterface:function(y,z,A){qx.Class.implementsInterface(y,z)||this.__op(A||bL,cz,y,bP,z,bJ);
},assertCssColor:function(dz,dA,dB){var dC=qx.Class.getByName(cg);

if(!dC){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dE=dC.stringToRgb(dz);

try{var dD=dC.stringToRgb(dA);
}catch(dG){this.__op(dB||bL,bC,dz,bG,dE.join(bF),bE,dA,cA);
}var dF=dE[0]==dD[0]&&dE[1]==dD[1]&&dE[2]==dD[2];
dF||this.__op(dB||bL,bC,dE,bG,dE.join(bF),bE,dA,bG,dD.join(bF),bz);
},assertElement:function(T,U){!!(T&&T.nodeType===1)||this.__op(U||bL,bR,T,bJ);
},assertQxObject:function(bx,by){this.__or(bx,cP)||this.__op(by||bL,cD,bx,bK);
},assertQxWidget:function(dH,dI){this.__or(dH,cJ)||this.__op(dI||bL,cC,dH,bK);
},__or:function(dl,dm){if(!dl){return false;
}var dn=dl.constructor;

while(dn){if(dn.classname===dm){return true;
}dn=dn.superclass;
}return false;
}}});
})();
(function(){var D=",",C="",B="string",A="null",z='"',y="qx.jsonDebugging",x='\\u00',w="new Date(Date.UTC(",v="}",u='\\\\',ba='\\f',Y='\\"',X="__ov",W="))",V="__ox",U="__oE",T='(',S=":",R="{",Q='\\r',K='\\t',L="]",I="[",J="Use 'parse' instead!",G="__ou",H="qx.jsonEncodeUndefined",E='\\b',F="qx.util.Json",M="__ow",N=')',P='\\n',O="__oF";
qx.Class.define(F,{statics:{__os:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__ot:{"function":G,"boolean":X,"number":M,"string":V,"object":U,"undefined":O},__ou:function(bf,bg){return String(bf);
},__ov:function(bs,bt){return String(bs);
},__ow:function(bo,bp){return isFinite(bo)?String(bo):A;
},__ox:function(c,d){var e;

if(/["\\\x00-\x1f]/.test(c)){e=c.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__oz);
}else{e=c;
}return z+e+z;
},__oy:{'\b':E,'\t':K,'\n':P,'\f':ba,'\r':Q,'"':Y,'\\':u},__oz:function(a,b){var bn=qx.util.Json.__oy[b];

if(bn){return bn;
}bn=b.charCodeAt();
return x+Math.floor(bn/16).toString(16)+(bn%16).toString(16);
},__oA:function(bu,bv){var bx=[],bA=true,bz,bw;
var by=qx.util.Json.__oH;
bx.push(I);

if(by){qx.util.Json.__oB+=qx.util.Json.BEAUTIFYING_INDENT;
bx.push(qx.util.Json.__oB);
}
for(var i=0,l=bu.length;i<l;i++){bw=bu[i];
bz=this.__ot[typeof bw];

if(bz){bw=this[bz](bw,i+C);

if(typeof bw==B){if(!bA){bx.push(D);

if(by){bx.push(qx.util.Json.__oB);
}}bx.push(bw);
bA=false;
}}}
if(by){qx.util.Json.__oB=qx.util.Json.__oB.substring(0,qx.util.Json.__oB.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bx.push(qx.util.Json.__oB);
}bx.push(L);
return bx.join(C);
},__oC:function(bk,bl){var bm=bk.getUTCFullYear()+D+bk.getUTCMonth()+D+bk.getUTCDate()+D+bk.getUTCHours()+D+bk.getUTCMinutes()+D+bk.getUTCSeconds()+D+bk.getUTCMilliseconds();
return w+bm+W;
},__oD:function(f,g){var k=[],n=true,j,h;
var m=qx.util.Json.__oH;
k.push(R);

if(m){qx.util.Json.__oB+=qx.util.Json.BEAUTIFYING_INDENT;
k.push(qx.util.Json.__oB);
}
for(var g in f){h=f[g];
j=this.__ot[typeof h];

if(j){h=this[j](h,g);

if(typeof h==B){if(!n){k.push(D);

if(m){k.push(qx.util.Json.__oB);
}}k.push(this.__ox(g),S,h);
n=false;
}}}
if(m){qx.util.Json.__oB=qx.util.Json.__oB.substring(0,qx.util.Json.__oB.length-qx.util.Json.BEAUTIFYING_INDENT.length);
k.push(qx.util.Json.__oB);
}k.push(v);
return k.join(C);
},__oE:function(p,q){if(p){if(qx.lang.Type.isFunction(p.toJSON)&&p.toJSON!==this.__os){return this.__oG(p.toJSON(q),q);
}else if(qx.lang.Type.isDate(p)){return this.__oC(p,q);
}else if(qx.lang.Type.isArray(p)){return this.__oA(p,q);
}else if(qx.lang.Type.isObject(p)){return this.__oD(p,q);
}return C;
}return A;
},__oF:function(bh,bi){if(qx.core.Setting.get(H)){return A;
}},__oG:function(bq,br){return this[this.__ot[typeof bq]](bq,br);
},stringify:function(bc,bd){this.__oH=bd;
this.__oB=this.BEAUTIFYING_LINE_END;
var be=this.__oG(bc,C);

if(typeof be!=B){be=null;
}if(qx.core.Setting.get(y)){qx.log.Logger.debug(this,"JSON request: "+be);
}return be;
},parse:function(r,s){if(s===undefined){s=true;
}
if(qx.core.Setting.get(y)){qx.log.Logger.debug(this,"JSON response: "+r);
}
if(s){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(r.replace(/"(\\.|[^"\\])*"/g,C))){throw new Error("Could not parse JSON string!");
}}
try{var t=(r&&r.length>0)?eval(T+r+N):null;
return t;
}catch(o){throw new Error("Could not evaluate JSON string: "+o.message);
}},parseQx:function(bb){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
return qx.util.Json.parse(bb,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bj){bj.__os=Date.prototype.toJSON;
}});
})();
(function(){var d="qx.ui.core.ISingleSelection",c="qx.event.type.Data";
qx.Interface.define(d,{events:{"changeSelection":c},members:{getSelection:function(){return true;
},setSelection:function(b){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(a){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var g="__oI",f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":b},members:{__oI:null,getSelection:function(){var l=this.__oJ().getSelected();

if(l){return [l];
}else{return [];
}},setSelection:function(m){switch(m.length){case 0:this.resetSelection();
break;
case 1:this.__oJ().setSelected(m[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+m.length+" items!");
}},resetSelection:function(){this.__oJ().resetSelected();
},isSelected:function(a){return this.__oJ().isSelected(a);
},isSelectionEmpty:function(){return this.__oJ().isSelectionEmpty();
},getSelectables:function(){return this.__oJ().getSelectables();
},_onChangeSelected:function(e){var j=e.getData();
var i=e.getOldData();
j==null?j=[]:j=[j];
i==null?i=[]:i=[i];
this.fireDataEvent(d,j,i);
},__oJ:function(){if(this.__oI==null){var h=this;
this.__oI=new qx.ui.core.SingleSelectionManager({getItems:function(){return h._getItems();
},isItemSelectable:function(k){if(h._isItemSelectable){return h._isItemSelectable(k);
}else{return k.isEnabled()&&k.isVisible();
}}});
this.__oI.addListener(c,this._onChangeSelected,this);
}this.__oI.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__oI;
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var k="change",h="__oK",g="qx.event.type.Data",f="qx.ui.form.MModelSelection",e="changeSelection";
qx.Mixin.define(f,{construct:function(){this.__oK=new qx.data.Array();
this.__oK.addListener(k,this.__oN,this);
this.addListener(e,this.__oM,this);
},events:{changeModelSelection:g},members:{__oK:null,__oL:false,__oM:function(){if(this.__oL){return;
}var c=this.getSelection();
var a=[];

for(var i=0;i<c.length;i++){var d=c[i];
var b=d.getModel?d.getModel():null;

if(b!==null){a.push(b);
}}this.setModelSelection(a);
},__oN:function(){this.__oL=true;
var o=this.getSelectables();
var q=[];
var p=this.__oK.toArray();

for(var i=0;i<p.length;i++){var s=p[i];

for(var j=0;j<o.length;j++){var t=o[j];
var n=t.getModel?t.getModel():null;

if(s===n){q.push(t);
break;
}}}this.setSelection(q);
this.__oL=false;
var r=this.getSelection();

if(!qx.lang.Array.equals(r,q)){this.__oM();
}},getModelSelection:function(){return this.__oK;
},setModelSelection:function(l){if(!l){this.__oK.removeAll();
return;
}{};
l.unshift(this.__oK.getLength());
l.unshift(0);
var m=this.__oK.splice.apply(this.__oK,l);
m.dispose();
}},destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var z="Boolean",y="changeValue",x="_applyAllowEmptySelection",w="_applyInvalidMessage",v="qx.ui.form.RadioGroup",u="_applyValid",t="",s="changeRequired",r="changeValid",q="changeEnabled",n="__oO",p="changeInvalidMessage",o="changeSelection",m="_applyEnabled",k="String";
qx.Class.define(v,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(M){arguments.callee.base.call(this);
this.__oO=[];
this.addListener(o,this.__oP,this);

if(M!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:z,apply:m,event:q},wrap:{check:z,init:true},allowEmptySelection:{check:z,init:false,apply:x},valid:{check:z,init:true,apply:u,event:r},required:{check:z,init:false,event:s},invalidMessage:{check:k,init:t,event:p,apply:w}},members:{__oO:null,getItems:function(){return this.__oO;
},add:function(N){var O=this.__oO;
var P;

for(var i=0,l=arguments.length;i<l;i++){P=arguments[i];

if(qx.lang.Array.contains(O,P)){continue;
}P.addListener(y,this._onItemChangeChecked,this);
O.push(P);
P.setGroup(this);
if(P.getValue()){this.setSelection([P]);
}}if(!this.isAllowEmptySelection()&&O.length>0&&!this.getSelection()[0]){this.setSelection([O[0]]);
}},remove:function(h){var j=this.__oO;

if(qx.lang.Array.contains(j,h)){qx.lang.Array.remove(j,h);
if(h.getGroup()===this){h.resetGroup();
}h.removeListener(y,this._onItemChangeChecked,this);
if(h.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__oO;
},_onItemChangeChecked:function(e){var J=e.getTarget();

if(J.getValue()){this.setSelection([J]);
}else if(this.getSelection()[0]==J){this.resetSelection();
}},_applyInvalidMessage:function(c,d){for(var i=0;i<this.__oO.length;i++){this.__oO[i].setInvalidMessage(c);
}},_applyValid:function(a,b){for(var i=0;i<this.__oO.length;i++){this.__oO[i].setValid(a);
}},_applyEnabled:function(D,E){var F=this.__oO;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(K,L){if(!K&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var A=this.getSelection()[0];
var C=this.__oO;
var B=C.indexOf(A);

if(B==-1){return;
}var i=0;
var length=C.length;
if(this.getWrap()){B=(B+1)%length;
}else{B=Math.min(B+1,length-1);
}
while(i<length&&!C[B].getEnabled()){B=(B+1)%length;
i++;
}this.setSelection([C[B]]);
},selectPrevious:function(){var G=this.getSelection()[0];
var I=this.__oO;
var H=I.indexOf(G);

if(H==-1){return;
}var i=0;
var length=I.length;
if(this.getWrap()){H=(H-1+length)%length;
}else{H=Math.max(H-1,0);
}
while(i<length&&!I[H].getEnabled()){H=(H-1+length)%length;
i++;
}this.setSelection([I[H]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__oP:function(e){var g=e.getData()[0];
var f=e.getOldData()[0];

if(f){f.setValue(false);
}
if(g){g.setValue(true);
}}},destruct:function(){this._disposeArray(n);
}});
})();
(function(){var k="Boolean",j="qx.ui.core.SingleSelectionManager",h="__oR",g="changeSelected",f="__oS",e="__oQ",d="qx.event.type.Data";
qx.Class.define(j,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
{};
this.__oQ=n;
},events:{"changeSelected":d},properties:{allowEmptySelection:{check:k,init:true,apply:f}},members:{__oR:null,__oQ:null,getSelected:function(){return this.__oR;
},setSelected:function(o){if(!this.__oU(o)){throw new Error("Could not select "+o+", because it is not a child element!");
}this.__oT(o);
},resetSelected:function(){this.__oT(null);
},isSelected:function(c){if(!this.__oU(c)){throw new Error("Could not check if "+c+" is selected,"+" because it is not a child element!");
}return this.__oR===c;
},isSelectionEmpty:function(){return this.__oR==null;
},getSelectables:function(){var a=this.__oQ.getItems();
var b=[];

for(var i=0;i<a.length;i++){if(this.__oQ.isItemSelectable(a[i])){b.push(a[i]);
}}return b;
},__oS:function(l,m){if(!l){this.__oT(this.__oR);
}},__oT:function(r){var u=this.__oR;
var t=r;

if(t!=null&&u===t){return;
}
if(!this.isAllowEmptySelection()&&t==null){var s=this.getSelectables()[0];

if(s){t=s;
}}this.__oR=t;
this.fireDataEvent(g,t,u);
},__oU:function(p){var q=this.__oQ.getItems();

for(var i=0;i<q.length;i++){if(q[i]===p){return true;
}}return false;
}},destruct:function(){if(this.__oQ.toHashCode){this._disposeObjects(e);
}else{this.__oQ=null;
}this._disposeObjects(h);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(q,r,name){this.fireDataEvent(c,{value:q,name:name,old:r});
this._registerEventChaining(q,r,name);
},_registerEventChaining:function(s,t,name){if((s instanceof qx.core.Object)&&qx.Class.hasMixin(s.constructor,qx.data.marshal.MEventBubbling)){var u=qx.lang.Function.bind(this.__oV,this,name);
var v=s.addListener(c,u,this);
s.setUserData(d,v);
}if(t!=null&&t.getUserData&&t.getUserData(d)!=null){t.removeListenerById(t.getUserData(d));
}},__oV:function(name,e){var p=e.getData();
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
(function(){var t="change",s="add",r="remove",q="order",p="",o="qx.data.Array",n="?",m="changeBubble",l="qx.event.type.Event",k="number",h="changeLength",j="qx.event.type.Data";
qx.Class.define(o,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(R){arguments.callee.base.call(this);
if(R==undefined){this.__oW=[];
}else if(arguments.length>1){this.__oW=[];

for(var i=0;i<arguments.length;i++){this.__oW.push(arguments[i]);
}}else if(typeof R==k){this.__oW=new Array(R);
}else if(R instanceof Array){this.__oW=qx.lang.Array.clone(R);
}else{this.__oW=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__oW.length;i++){this._applyEventPropagation(this.__oW[i],null,i);
}this.__oX();
},events:{"change":j,"changeLength":l},members:{__oW:null,concat:function(K){if(K){var L=this.__oW.concat(K);
}else{var L=this.__oW.concat();
}return new qx.data.Array(L);
},join:function(M){return this.__oW.join(M);
},pop:function(){var x=this.__oW.pop();
this.__oX();
this._applyEventPropagation(null,x,this.length-1);
this.fireDataEvent(t,{start:this.length-1,end:this.length-1,type:r,items:[x]},null);
return x;
},push:function(bb){for(var i=0;i<arguments.length;i++){this.__oW.push(arguments[i]);
this.__oX();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(t,{start:this.length-1,end:this.length-1,type:s,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__oW.reverse();
this.fireDataEvent(t,{start:0,end:this.length-1,type:q,items:null},null);
},shift:function(){var c=this.__oW.shift();
this.__oX();
this._applyEventPropagation(null,c);
this.fireDataEvent(t,{start:0,end:this.length-1,type:r,items:[c]},null);
return c;
},slice:function(bg,bh){return new qx.data.Array(this.__oW.slice(bg,bh));
},splice:function(y,z,A){var G=this.__oW.length;
var D=this.__oW.splice.apply(this.__oW,arguments);
if(this.__oW.length!=G){this.__oX();
}var E=z>0;
var B=arguments.length>2;
var C=null;

if(E||B){if(this.__oW.length>G){var F=s;
}else if(this.__oW.length<G){var F=r;
C=D;
}else{var F=q;
}this.fireDataEvent(t,{start:y,end:this.length-1,type:F,items:C},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,y+i);
}this.fireDataEvent(m,{value:this,name:n,old:D});
for(var i=0;i<D.length;i++){this._applyEventPropagation(null,D[i],i);
}return (new qx.data.Array(D));
},sort:function(J){this.__oW.sort.apply(this.__oW,arguments);
this.fireDataEvent(t,{start:0,end:this.length-1,type:q,items:null},null);
},unshift:function(w){for(var i=arguments.length-1;i>=0;i--){this.__oW.unshift(arguments[i]);
this.__oX();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(t,{start:0,end:this.length-1,type:s,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__oW;
},getItem:function(N){return this.__oW[N];
},setItem:function(X,Y){var ba=this.__oW[X];
this.__oW[X]=Y;
this._applyEventPropagation(Y,ba,X);
if(this.length!=this.__oW.length){this.__oX();
}this.fireDataEvent(t,{start:X,end:X,type:s,items:[Y]},null);
},getLength:function(){return this.length;
},indexOf:function(bc){return this.__oW.indexOf(bc);
},toString:function(){if(this.__oW!=null){return this.__oW.toString();
}return p;
},contains:function(e){return this.__oW.indexOf(e)!==-1;
},copy:function(){return this.concat();
},insertAt:function(a,b){this.splice(a,0,b);
},insertBefore:function(bd,be){var bf=this.indexOf(bd);

if(bf==-1){this.push(be);
}else{this.splice(bf,0,be);
}},insertAfter:function(S,T){var U=this.indexOf(S);

if(U==-1||U==(this.length-1)){this.push(T);
}else{this.splice(U+1,0,T);
}},removeAt:function(d){return this.splice(d,1)[0];
},removeAll:function(){for(var i=0;i<this.__oW.length;i++){this._applyEventPropagation(null,this.__oW[i],i);
}var Q=this.getLength();
var P=this.__oW.concat();
this.__oW.length=0;
this.__oX();
this.fireDataEvent(t,{start:0,end:Q-1,type:r,items:P},null);
},append:function(f){{};
for(var i=0;i<f.length;i++){this._applyEventPropagation(f[i],null,this.__oW.length+i);
}Array.prototype.push.apply(this.__oW,f);
this.__oX();
},remove:function(V){var W=this.indexOf(V);

if(W!=-1){this.splice(W,1);
return V;
}},equals:function(v){if(this.length!==v.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==v.getItem(i)){return false;
}}return true;
},sum:function(){var u=0;

for(var i=0;i<this.length;i++){u+=this.getItem(i);
}return u;
},max:function(){var O=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>O){O=this.getItem(i);
}}return O===undefined?null:O;
},min:function(){var g=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<g){g=this.getItem(i);
}}return g===undefined?null:g;
},forEach:function(H,I){for(var i=0;i<this.__oW.length;i++){H.call(I,this.__oW[i]);
}},__oX:function(){this.length=this.__oW.length;
this.fireEvent(h,qx.event.type.Event);
}},destruct:function(){this.__oW=null;
}});
})();
(function(){var k="inspector.objects.HashModel",h="by Hash",g="Classname",f="Hash";
qx.Class.define(k,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},members:{getData:function(a){var c=a.qx.core.ObjectRegistry.getRegistry();
var e=[];

for(var b in c){e.push([b,c[b].classname]);
}var d=qx.core.Init.getApplication().getExcludes();

for(var i=e.length-1;i>=0;i--){for(var j=0;j<d.length;j++){if(e[i][0]===d[j].toHashCode()){e.splice(i,1);
}}}return e;
},getColumns:function(){return [f,g];
},getName:function(){return h;
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
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(v,w){arguments.callee.base.call(this,v,w);
this.addListener(c,this._onMouseOver);
this.addListener(i,this._onMouseOut);
this.addListener(l,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(b,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(h,this._onExecute,this);
},properties:{appearance:{refine:true,init:f},focusable:{refine:true,init:true},value:{check:k,nullable:true,event:a,apply:j,init:false}},members:{_applyValue:function(t,u){t?this.addState(p):this.removeState(p);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(q);

if(this.hasState(r)){this.removeState(r);
this.addState(s);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(q);

if(this.hasState(s)){if(!this.getValue()){this.removeState(s);
}this.addState(r);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(r);
this.addState(s);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(r)){this.removeState(r);
}else if(this.hasState(s)){this.execute();
}this.removeState(s);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.addState(s);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(s)){return;
}
switch(e.getKeyIdentifier()){case n:case o:this.removeState(r);
this.execute();
this.removeState(s);
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
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(d){},getValue:function(){},setGroup:function(c){this.assertInstance(c,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var c="qx.ui.form.RadioGroup",b="_applyGroup",a="qx.ui.toolbar.RadioButton";
qx.Class.define(a,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:c,apply:b,nullable:true}},members:{_applyValue:function(f,g){arguments.callee.base.call(this,f,g);

if(f){var h=this.getGroup();

if(h){h.setSelection([this]);
}}},_applyGroup:function(d,e){if(e){e.remove(this);
}
if(d){d.add(this);
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
this._tree.addListener(bj,function(e){if(e.getData()[0]){var bM=e.getData()[0].getUserData(x);
qx.core.Init.getApplication().select(bM,this);
}},this);
},members:{setInitSizeAndPosition:function(){var bO=qx.bom.Viewport.getWidth()-this.getWidth();
var bN=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(bO,30+bN);
this.setHeight(bN);
},select:function(bU){this._selectWidgetInTheTree(bU);
},getSelection:function(){var bP=this._tree.getSelection()[0];
if(bP!=null){return bP.getUserData(x);
}return null;
},load:function(b){if(b==undefined){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
}else{this._iFrameWindow=b;
}var c=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
var d=new qx.ui.tree.TreeFolder(c.classname+t+c.toHashCode()+v);
d.setUserData(x,c);
this._tree.setRoot(d);
this._fillTree(c,d,2);
},_fillTree:function(bV,bW,bX){var cd=bW.getItems(false,true);
var bY=this._structureToggle.isValue()?q:p;
if(bV[bY]==undefined){if(bY===p){bY=q;

if(bV[bY]==undefined){return;
}}else{return;
}}if(bV[bY]().length==0){if(cd.length>1){for(var m=0;m<cd.length;m++){if(cd[m+1]==this._tree.getSelection()[0]){this._tree.resetSelection();
}bW.removeAt(0);
}}}var ce=qx.core.Init.getApplication().getExcludes();
var i=0;
bX--;
for(var k=0;k<bV[bY]().length;k++){var cb=bV[bY]()[k];
var ca=false;

for(var j=0;j<ce.length;j++){if(cb==ce[j]){ca=true;
break;
}}if(ca){continue;
}if(cd[i]==null){var cf=new qx.ui.tree.TreeFolder(cb.classname+t+cb.toHashCode()+v);
cf.setIcon(this._getIconPath(cb.classname));
bW.addAt(cf,i);
cf.setUserData(s,cb);
cf.setUserData(u,cb.toHashCode());
cf.addListener(r,this._treeOpenHandler,this);
}else{if(cd[i].getLabel()==cb.classname+t+cb.toHashCode()+v){var cf=cd[i];
}else{if(bW.getItems()[i]!=null){if(bW.getItems()[i]==this._tree.getSelection()[0]){this._tree.resetSelection();
}}bW.removeAt(i);
var cf=new qx.ui.tree.TreeFolder(cb.classname+t+cb.toHashCode()+v);
bW.addAt(cf,i);
cf.setUserData(s,cb);
cf.setUserData(u,cb.toHashCode());
cf.addListener(r,this._treeOpenHandler,this);
}}if(bX>0){this._fillTree(cb,cf,bX);
}if(i+1==bV[bY]().length){var cc=bW.getItems(false,true);
if(cc.length-2!=i){for(var l=i+1;l<cc.length;l++){bW.removeAt(i+1);
}}}i++;
}},_treeOpenHandler:function(e){if(e.getData()){var bT=e.getTarget().getUserData(s);
this._fillTree(bT,e.getTarget(),2);
}},_getIconPath:function(a){switch(a){case E:return o;
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
}},_openFolder:function(bQ){var bS=bQ.toHashCode();
var bR=this._tree.getItems(true,true);
if(this._tree.getRoot().getUserData(x).toHashCode()==bS){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return ;
}for(var i=0;i<bR.length;i++){if(bR[i].getUserData(u)==bS){bR[i].setOpen(true);
break;
}}}},destruct:function(){this._iFrameWindow=null;
this._disposeObjects(y,bE,z);
}});
})();
(function(){var V="scrollbar-y",U="scrollbar-x",T="pane",S="auto",R="corner",Q="on",P="changeVisibility",O="scroll",N="_computeScrollbars",M="off",F="scrollY",L="qx.ui.core.scroll.AbstractScrollArea",I="abstract",D="update",C="scrollX",H="mousewheel",G="scrollbarY",J="scrollbarX",B="horizontal",K="scrollarea",E="vertical";
qx.Class.define(L,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:I,construct:function(){arguments.callee.base.call(this);
var a=new qx.ui.layout.Grid();
a.setColumnFlex(0,1);
a.setRowFlex(0,1);
this._setLayout(a);
this.addListener(H,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:K},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[S,Q,M],init:S,themeable:true,apply:N},scrollbarY:{check:[S,Q,M],init:S,themeable:true,apply:N},scrollbar:{group:[J,G]}},members:{_createChildControlImpl:function(q){var r;

switch(q){case T:r=new qx.ui.core.scroll.ScrollPane();
r.addListener(D,this._computeScrollbars,this);
r.addListener(C,this._onScrollPaneX,this);
r.addListener(F,this._onScrollPaneY,this);
this._add(r,{row:0,column:0});
break;
case U:r=this._createScrollBar(B);
r.setMinWidth(0);
r.exclude();
r.addListener(O,this._onScrollBarX,this);
r.addListener(P,this._onChangeScrollbarXVisibility,this);
this._add(r,{row:1,column:0});
break;
case V:r=this._createScrollBar(E);
r.setMinHeight(0);
r.exclude();
r.addListener(O,this._onScrollBarY,this);
r.addListener(P,this._onChangeScrollbarYVisibility,this);
this._add(r,{row:0,column:1});
break;
case R:r=new qx.ui.core.Widget();
r.setWidth(0);
r.setHeight(0);
r.exclude();
this._add(r,{row:1,column:1});
break;
}return r||arguments.callee.base.call(this,q);
},getPaneSize:function(){return this.getChildControl(T).getInnerSize();
},getItemTop:function(Y){return this.getChildControl(T).getItemTop(Y);
},getItemBottom:function(X){return this.getChildControl(T).getItemBottom(X);
},getItemLeft:function(t){return this.getChildControl(T).getItemLeft(t);
},getItemRight:function(u){return this.getChildControl(T).getItemRight(u);
},scrollToX:function(bb){qx.ui.core.queue.Manager.flush();
this.getChildControl(U).scrollTo(bb);
},scrollByX:function(W){qx.ui.core.queue.Manager.flush();
this.getChildControl(U).scrollBy(W);
},getScrollX:function(){var ba=this.getChildControl(U,true);
return ba?ba.getPosition():0;
},scrollToY:function(A){qx.ui.core.queue.Manager.flush();
this.getChildControl(V).scrollTo(A);
},scrollByY:function(s){qx.ui.core.queue.Manager.flush();
this.getChildControl(V).scrollBy(s);
},getScrollY:function(){var z=this.getChildControl(V,true);
return z?z.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(T).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(T).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var o=this._isChildControlVisible(U);
var p=this._isChildControlVisible(V);
var n=(p)?this.getChildControl(V,true):(o?this.getChildControl(U,true):null);

if(n){n.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var v=this._isChildControlVisible(U);
var w=this._isChildControlVisible(V);

if(!v){this.scrollToX(0);
}v&&w?this._showChildControl(R):this._excludeChildControl(R);
},_onChangeScrollbarYVisibility:function(e){var x=this._isChildControlVisible(U);
var y=this._isChildControlVisible(V);

if(!y){this.scrollToY(0);
}x&&y?this._showChildControl(R):this._excludeChildControl(R);
},_computeScrollbars:function(){var i=this.getChildControl(T);
var content=i.getChildren()[0];

if(!content){this._excludeChildControl(U);
this._excludeChildControl(V);
return;
}var b=this.getInnerSize();
var h=i.getInnerSize();
var f=i.getScrollSize();
if(!h||!f){return;
}var k=this.getScrollbarX();
var l=this.getScrollbarY();

if(k===S&&l===S){var g=f.width>b.width;
var m=f.height>b.height;
if((g||m)&&!(g&&m)){if(g){m=f.height>h.height;
}else if(m){g=f.width>h.width;
}}}else{var g=k===Q;
var m=l===Q;
if(f.width>(g?h.width:b.width)&&k===S){g=true;
}
if(f.height>(g?h.height:b.height)&&l===S){m=true;
}}if(g){var d=this.getChildControl(U);
d.show();
var j=Math.max(0,f.width-h.width);
d.setMaximum(j);
d.setKnobFactor(j>0?h.width/f.width:0);
}else{this._excludeChildControl(U);
}
if(m){var c=this.getChildControl(V);
c.show();
var j=Math.max(0,f.height-h.height);
c.setMaximum(j);
c.setKnobFactor(j>0?h.height/f.height:0);
}else{this._excludeChildControl(V);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var G="single",F="Boolean",E="one",D="changeSelection",C="mouseup",B="mousedown",A="losecapture",z="multi",y="_applyQuickSelection",x="mouseover",q="_applySelectionMode",w="__oY",t="_applyDragSelection",p="qx.ui.core.MMultiSelectionHandling",o="removeItem",s="keypress",r="qx.event.type.Data",u="addItem",n="additive",v="mousemove";
qx.Mixin.define(p,{construct:function(){var l=this.SELECTION_MANAGER;
var k=this.__oY=new l(this);
this.addListener(B,k.handleMouseDown,k);
this.addListener(C,k.handleMouseUp,k);
this.addListener(x,k.handleMouseOver,k);
this.addListener(v,k.handleMouseMove,k);
this.addListener(A,k.handleLoseCapture,k);
this.addListener(s,k.handleKeyPress,k);
this.addListener(u,k.handleAddItem,k);
this.addListener(o,k.handleRemoveItem,k);
k.addListener(D,this._onSelectionChange,this);
},events:{"changeSelection":r},properties:{selectionMode:{check:[G,z,n,E],init:G,apply:q},dragSelection:{check:F,init:false,apply:t},quickSelection:{check:F,init:false,apply:y}},members:{__oY:null,selectAll:function(){this.__oY.selectAll();
},isSelected:function(H){if(!qx.ui.core.Widget.contains(this,H)){throw new Error("Could not test if "+H+" is selected, because it is not a child element!");
}return this.__oY.isItemSelected(H);
},addToSelection:function(m){if(!qx.ui.core.Widget.contains(this,m)){throw new Error("Could not add + "+m+" to selection, because it is not a child element!");
}this.__oY.addItem(m);
},removeFromSelection:function(c){if(!qx.ui.core.Widget.contains(this,c)){throw new Error("Could not remove "+c+" from selection, because it is not a child element!");
}this.__oY.removeItem(c);
},selectRange:function(a,b){this.__oY.selectItemRange(a,b);
},resetSelection:function(){this.__oY.clearSelection();
},setSelection:function(I){for(var i=0;i<I.length;i++){if(!qx.ui.core.Widget.contains(this,I[i])){throw new Error("Could not select "+I[i]+", because it is not a child element!");
}}
if(I.length===0){this.resetSelection();
}else{var J=this.getSelection();

if(!qx.lang.Array.equals(J,I)){this.__oY.replaceSelection(I);
}}},getSelection:function(){return this.__oY.getSelection();
},getSortedSelection:function(){return this.__oY.getSortedSelection();
},isSelectionEmpty:function(){return this.__oY.isSelectionEmpty();
},getSelectionContext:function(){return this.__oY.getSelectionContext();
},_getManager:function(){return this.__oY;
},getSelectables:function(){return this.__oY.getSelectables();
},invertSelection:function(){this.__oY.invertSelection();
},_getLeadItem:function(){var j=this.__oY.getMode();

if(j===G||j===E){return this.__oY.getSelectedItem();
}else{return this.__oY.getLeadItem();
}},_applySelectionMode:function(K,L){this.__oY.setMode(K);
},_applyDragSelection:function(g,h){this.__oY.setDrag(g);
},_applyQuickSelection:function(d,f){this.__oY.setQuick(d);
},_onSelectionChange:function(e){this.fireDataEvent(D,e.getData());
}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var bW="one",bV="single",bU="selected",bT="additive",bS="multi",bR="PageUp",bQ="under",bP="Left",bO="lead",bN="Down",cv="Up",cu="Boolean",ct="PageDown",cs="anchor",cr="End",cq="Home",cp="Right",co="right",cn="click",cm="above",ce="left",cf="Escape",cc="A",cd="Space",ca="_applyMode",cb="interval",bX="changeSelection",bY="qx.event.type.Data",cg="quick",ch="key",cj="__pd",ci="abstract",cl="drag",ck="qx.ui.core.selection.Abstract";
qx.Class.define(ck,{type:ci,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__pa={};
},events:{"changeSelection":bY},properties:{mode:{check:[bV,bS,bT,bW],init:bV,apply:ca},drag:{check:cu,init:false},quick:{check:cu,init:false}},members:{__pb:0,__pc:0,__pd:null,__pe:null,__pf:null,__pg:null,__ph:null,__pi:null,__pj:null,__pk:null,__pl:null,__pm:null,__pn:null,__po:null,__pp:null,__pq:null,__pr:null,__pa:null,__ps:null,__pt:null,getSelectionContext:function(){return this.__pq;
},selectAll:function(){var bK=this.getMode();

if(bK==bV||bK==bW){throw new Error("Can not select all items in selection mode: "+bK);
}this._selectAllItems();
this._fireChange();
},selectItem:function(t){this._setSelectedItem(t);
var u=this.getMode();

if(u!==bV&&u!==bW){this._setLeadItem(t);
this._setAnchorItem(t);
}this._scrollItemIntoView(t);
this._fireChange();
},addItem:function(P){var Q=this.getMode();

if(Q===bV||Q===bW){this._setSelectedItem(P);
}else{if(!this._getAnchorItem()){this._setAnchorItem(P);
}this._setLeadItem(P);
this._addToSelection(P);
}this._scrollItemIntoView(P);
this._fireChange();
},removeItem:function(cO){this._removeFromSelection(cO);

if(this.getMode()===bW&&this.isSelectionEmpty()){var cP=this._getFirstSelectable();

if(cP){this.addItem(cP);
}if(cP==cO){return;
}}
if(this.getLeadItem()==cO){this._setLeadItem(null);
}
if(this._getAnchorItem()==cO){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bD,bE){var bF=this.getMode();

if(bF==bV||bF==bW){throw new Error("Can not select multiple items in selection mode: "+bF);
}this._selectItemRange(bD,bE);
this._setAnchorItem(bD);
this._setLeadItem(bE);
this._scrollItemIntoView(bE);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bW){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cQ){var cR=this.getMode();

if(cR==bW||cR===bV){if(cQ.length>1){throw new Error("Could not select more than one items in mode: "+cR+"!");
}
if(cQ.length==1){this.selectItem(cQ[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cQ);
}},getSelectedItem:function(){var cW=this.getMode();

if(cW===bV||cW===bW){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__pa);
},getSortedSelection:function(){var bp=this.getSelectables();
var bo=qx.lang.Object.getValues(this.__pa);
bo.sort(function(a,b){return bp.indexOf(a)-bp.indexOf(b);
});
return bo;
},isItemSelected:function(bG){var bH=this._selectableToHashCode(bG);
return this.__pa[bH]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__pa);
},invertSelection:function(){var M=this.getMode();

if(M===bV||M===bW){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var L=this.getSelectables();

for(var i=0;i<L.length;i++){this._toggleInSelection(L[i]);
}this._fireChange();
},_setLeadItem:function(bI){var bJ=this.__pr;

if(bJ!==null){this._styleSelectable(bJ,bO,false);
}
if(bI!==null){this._styleSelectable(bI,bO,true);
}this.__pr=bI;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__pr!==null?this.__pr:null;
},_setAnchorItem:function(H){var I=this.__ps;

if(I){this._styleSelectable(I,cs,false);
}
if(H){this._styleSelectable(H,cs,true);
}this.__ps=H;
},_getAnchorItem:function(){return this.__ps!==null?this.__ps:null;
},_isSelectable:function(O){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var c=event.getTarget();
return this._isSelectable(c)?c:null;
},_selectableToHashCode:function(bi){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cL,cM,cN){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bC){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cV){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bg,bh){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(C){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cT,cU){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(be,bf){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(cG,cH){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cw,cx){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cw===bW){var cy=this._getFirstSelectable();

if(cy){this._setSelectedItem(cy);
this._scrollItemIntoView(cy);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var K=this.getMode();

if(K!==bW&&K!==bV){return;
}var J=this._getSelectableFromMouseEvent(event);

if(J===null){return;
}this._setSelectedItem(J);
this._fireChange(cg);
},handleMouseDown:function(event){var cC=this._getSelectableFromMouseEvent(event);

if(cC===null){return;
}var cE=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cB=event.isShiftPressed();
if(this.isItemSelected(cC)&&!cB&&!cE&&!this.getDrag()){this.__pt=cC;
return;
}else{this.__pt=null;
}this._scrollItemIntoView(cC);
switch(this.getMode()){case bV:case bW:this._setSelectedItem(cC);
break;
case bT:this._setLeadItem(cC);
this._setAnchorItem(cC);
this._toggleInSelection(cC);
break;
case bS:this._setLeadItem(cC);
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

if(this.getDrag()&&cF!==bV&&cF!==bW&&!cB&&!cE){this.__ph=this._getLocation();
this.__pe=this._getScroll();
this.__pi=event.getDocumentLeft()+this.__pe.left;
this.__pj=event.getDocumentTop()+this.__pe.top;
this.__pk=true;
this._capture();
}this._fireChange(cn);
},handleMouseUp:function(event){var G=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var D=event.isShiftPressed();

if(!G&&!D&&this.__pt){var E=this._getSelectableFromMouseEvent(event);

if(E===null||!this.isItemSelected(E)){return;
}var F=this.getMode();

if(F===bT){this._removeFromSelection(E);
}else{this._setSelectedItem(E);

if(this.getMode()===bS){this._setLeadItem(E);
this._setAnchorItem(E);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__pk){return;
}this.__pl=event.getDocumentLeft();
this.__pm=event.getDocumentTop();
var bM=this.__pl+this.__pe.left;

if(bM>this.__pi){this.__pn=1;
}else if(bM<this.__pi){this.__pn=-1;
}else{this.__pn=0;
}var bL=this.__pm+this.__pe.top;

if(bL>this.__pj){this.__po=1;
}else if(bL<this.__pj){this.__po=-1;
}else{this.__po=0;
}var location=this.__ph;

if(this.__pl<location.left){this.__pb=this.__pl-location.left;
}else if(this.__pl>location.right){this.__pb=this.__pl-location.right;
}else{this.__pb=0;
}
if(this.__pm<location.top){this.__pc=this.__pm-location.top;
}else if(this.__pm>location.bottom){this.__pc=this.__pm-location.bottom;
}else{this.__pc=0;
}if(!this.__pd){this.__pd=new qx.event.Timer(100);
this.__pd.addListener(cb,this._onInterval,this);
}this.__pd.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var N=e.getData();

if(this.getMode()===bW&&this.isSelectionEmpty()){this.addItem(N);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__pk){return;
}if(this.__pp){this._fireChange(cn);
}delete this.__pk;
delete this.__pf;
delete this.__pg;
this._releaseCapture();
if(this.__pd){this.__pd.stop();
}},_onInterval:function(e){this._scrollBy(this.__pb,this.__pc);
this.__pe=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var ba=this._getDimension();
var S=Math.max(0,Math.min(this.__pl-this.__ph.left,ba.width))+this.__pe.left;
var R=Math.max(0,Math.min(this.__pm-this.__ph.top,ba.height))+this.__pe.top;
if(this.__pf===S&&this.__pg===R){return;
}this.__pf=S;
this.__pg=R;
var bc=this._getAnchorItem();
var U=bc;
var X=this.__pn;
var bb,T;

while(X!==0){bb=X>0?this._getRelatedSelectable(U,co):this._getRelatedSelectable(U,ce);
if(bb!==null){T=this._getSelectableLocationX(bb);
if((X>0&&T.left<=S)||(X<0&&T.right>=S)){U=bb;
continue;
}}break;
}var Y=this.__po;
var W,V;

while(Y!==0){W=Y>0?this._getRelatedSelectable(U,bQ):this._getRelatedSelectable(U,cm);
if(W!==null){V=this._getSelectableLocationY(W);
if((Y>0&&V.top<=R)||(Y<0&&V.bottom>=R)){U=W;
continue;
}}break;
}var bd=this.getMode();

if(bd===bS){this._selectItemRange(bc,U);
}else if(bd===bT){if(this.isItemSelected(bc)){this._selectItemRange(bc,U,true);
}else{this._deselectItemRange(bc,U);
}this._setAnchorItem(U);
}this._fireChange(cl);
},__pu:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var by,bx;
var bA=event.getKeyIdentifier();
var bz=this.getMode();
var bu=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bv=event.isShiftPressed();
var bw=false;

if(bA===cc&&bu){if(bz!==bV&&bz!==bW){this._selectAllItems();
bw=true;
}}else if(bA===cf){if(bz!==bV&&bz!==bW){this._clearSelection();
bw=true;
}}else if(bA===cd){var bt=this.getLeadItem();

if(bt&&!bv){if(bu||bz===bT){this._toggleInSelection(bt);
}else{this._setSelectedItem(bt);
}bw=true;
}}else if(this.__pu[bA]){bw=true;

if(bz===bV||bz==bW){by=this._getSelectedItem();
}else{by=this.getLeadItem();
}
if(by!==null){switch(bA){case cq:bx=this._getFirstSelectable();
break;
case cr:bx=this._getLastSelectable();
break;
case cv:bx=this._getRelatedSelectable(by,cm);
break;
case bN:bx=this._getRelatedSelectable(by,bQ);
break;
case bP:bx=this._getRelatedSelectable(by,ce);
break;
case cp:bx=this._getRelatedSelectable(by,co);
break;
case bR:bx=this._getPage(by,true);
break;
case ct:bx=this._getPage(by,false);
break;
}}else{switch(bA){case cq:case bN:case cp:case ct:bx=this._getFirstSelectable();
break;
case cr:case cv:case bP:case bR:bx=this._getLastSelectable();
break;
}}if(bx!==null){switch(bz){case bV:case bW:this._setSelectedItem(bx);
break;
case bT:this._setLeadItem(bx);
break;
case bS:if(bv){var bB=this._getAnchorItem();

if(bB===null){this._setAnchorItem(bB=this._getFirstSelectable());
}this._setLeadItem(bx);
this._selectItemRange(bB,bx,bu);
}else{this._setAnchorItem(bx);
this._setLeadItem(bx);

if(!bu){this._setSelectedItem(bx);
}}break;
}this._scrollItemIntoView(bx);
}}
if(bw){event.stop();
this._fireChange(ch);
}},_selectAllItems:function(){var cS=this.getSelectables();

for(var i=0,l=cS.length;i<l;i++){this._addToSelection(cS[i]);
}},_clearSelection:function(){var cJ=this.__pa;

for(var cK in cJ){this._removeFromSelection(cJ[cK]);
}this.__pa={};
},_selectItemRange:function(v,w,x){var A=this._getSelectableRange(v,w);
if(!x){var z=this.__pa;
var B=this.__pv(A);

for(var y in z){if(!B[y]){this._removeFromSelection(z[y]);
}}}for(var i=0,l=A.length;i<l;i++){this._addToSelection(A[i]);
}},_deselectItemRange:function(d,f){var g=this._getSelectableRange(d,f);

for(var i=0,l=g.length;i<l;i++){this._removeFromSelection(g[i]);
}},__pv:function(h){var k={};
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];
k[this._selectableToHashCode(j)]=j;
}return k;
},_getSelectedItem:function(){for(var cI in this.__pa){return this.__pa[cI];
}return null;
},_setSelectedItem:function(bj){if(this._isSelectable(bj)){var bk=this.__pa;
var bl=this._selectableToHashCode(bj);

if(!bk[bl]||qx.lang.Object.hasMinLength(bk,2)){this._clearSelection();
this._addToSelection(bj);
}}},_addToSelection:function(cz){var cA=this._selectableToHashCode(cz);

if(!this.__pa[cA]&&this._isSelectable(cz)){this.__pa[cA]=cz;
this._styleSelectable(cz,bU,true);
this.__pp=true;
}},_toggleInSelection:function(br){var bs=this._selectableToHashCode(br);

if(!this.__pa[bs]){this.__pa[bs]=br;
this._styleSelectable(br,bU,true);
}else{delete this.__pa[bs];
this._styleSelectable(br,bU,false);
}this.__pp=true;
},_removeFromSelection:function(bm){var bn=this._selectableToHashCode(bm);

if(this.__pa[bn]!=null){delete this.__pa[bn];
this._styleSelectable(bm,bU,false);
this.__pp=true;
}},_replaceMultiSelection:function(m){var p=false;
var s,r;
var n={};

for(var i=0,l=m.length;i<l;i++){s=m[i];

if(this._isSelectable(s)){r=this._selectableToHashCode(s);
n[r]=s;
}}var o=s;
var q=this.__pa;

for(var r in q){if(n[r]){delete n[r];
}else{s=q[r];
delete q[r];
this._styleSelectable(s,bU,false);
p=true;
}}for(var r in n){s=q[r]=n[r];
this._styleSelectable(s,bU,true);
p=true;
}if(!p){return false;
}this._scrollItemIntoView(o);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__pp=true;
this._fireChange();
},_fireChange:function(bq){if(this.__pp){this.__pq=bq||null;
this.fireDataEvent(bX,this.getSelection());
delete this.__pp;
}}},destruct:function(){this._disposeObjects(cj);
this.__pa=this.__pt=this.__ps=null;
this.__pr=null;
}});
})();
(function(){var t="vertical",s="under",r="above",q="qx.ui.core.selection.Widget",p="left",o="right";
qx.Class.define(q,{extend:qx.ui.core.selection.Abstract,construct:function(B){arguments.callee.base.call(this);
this.__pw=B;
},members:{__pw:null,_isSelectable:function(w){return w.isEnabled()&&w.isVisible()&&w.getLayoutParent()===this.__pw;
},_selectableToHashCode:function(z){return z.$$hash;
},_styleSelectable:function(C,D,E){E?C.addState(D):C.removeState(D);
},_capture:function(){this.__pw.capture();
},_releaseCapture:function(){this.__pw.releaseCapture();
},_getWidget:function(){return this.__pw;
},_getLocation:function(){var n=this.__pw.getContentElement().getDomElement();
return n?qx.bom.element.Location.get(n):null;
},_getDimension:function(){return this.__pw.getInnerSize();
},_getSelectableLocationX:function(b){var c=b.getBounds();

if(c){return {left:c.left,right:c.left+c.width};
}},_getSelectableLocationY:function(d){var e=d.getBounds();

if(e){return {top:e.top,bottom:e.top+e.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(x,y){},_scrollItemIntoView:function(a){this.__pw.scrollChildIntoView(a);
},getSelectables:function(){var G=this.__pw.getChildren();
var H=[];
var F;

for(var i=0,l=G.length;i<l;i++){F=G[i];

if(F.isEnabled()&&F.isVisible()){H.push(F);
}}return H;
},_getSelectableRange:function(J,K){if(J===K){return [J];
}var O=this.__pw.getChildren();
var L=[];
var N=false;
var M;

for(var i=0,l=O.length;i<l;i++){M=O[i];

if(M===J||M===K){if(N){L.push(M);
break;
}else{N=true;
}}
if(N&&M.isEnabled()&&M.isVisible()){L.push(M);
}}return L;
},_getFirstSelectable:function(){var A=this.__pw.getChildren();

for(var i=0,l=A.length;i<l;i++){if(A[i].isEnabled()&&A[i].isVisible()){return A[i];
}}return null;
},_getLastSelectable:function(){var I=this.__pw.getChildren();

for(var i=I.length-1;i>0;i--){if(I[i].isEnabled()&&I[i].isVisible()){return I[i];
}}return null;
},_getRelatedSelectable:function(f,g){var k=this.__pw.getOrientation()===t;
var j=this.__pw.getChildren();
var h=j.indexOf(f);
var m;

if((k&&g===r)||(!k&&g===p)){for(var i=h-1;i>=0;i--){m=j[i];

if(m.isEnabled()&&m.isVisible()){return m;
}}}else if((k&&g===s)||(!k&&g===o)){for(var i=h+1;i<j.length;i++){m=j[i];

if(m.isEnabled()&&m.isVisible()){return m;
}}}return null;
},_getPage:function(u,v){if(v){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__pw=null;
}});
})();
(function(){var e="qx.ui.core.selection.ScrollArea";
qx.Class.define(e,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(a){return (a.isEnabled()&&a.isVisible()&&a.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var f=this._getWidget();
return {left:f.getScrollX(),top:f.getScrollY()};
},_scrollBy:function(b,c){var d=this._getWidget();
d.scrollByX(b);
d.scrollByY(c);
},_getPage:function(g,h){var m=this.getSelectables();
var length=m.length;
var p=m.indexOf(g);
if(p===-1){throw new Error("Invalid lead item: "+g);
}var j=this._getWidget();
var r=j.getScrollY();
var innerHeight=j.getInnerSize().height;
var top,l,q;

if(h){var o=r;
var i=p;
while(1){for(;i>=0;i--){top=j.getItemTop(m[i]);
if(top<o){q=i+1;
break;
}}if(q==null){var s=this._getFirstSelectable();
return s==g?null:s;
}if(q>=p){o-=innerHeight+r-j.getItemBottom(g);
q=null;
continue;
}return m[q];
}}else{var n=innerHeight+r;
var i=p;
while(1){for(;i<length;i++){l=j.getItemBottom(m[i]);
if(l>n){q=i-1;
break;
}}if(q==null){var k=this._getLastSelectable();
return k==g?null:k;
}if(q<=p){n+=j.getItemTop(g)-r;
q=null;
continue;
}return m[q];
}}}}});
})();
(function(){var r="right",q="above",p="left",o="under",n="qx.ui.tree.SelectionManager";
qx.Class.define(n,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(t){var u=t.getBounds();

if(u){var top=this._getWidget().getItemTop(t);
return {top:top,bottom:top+u.height};
}},_isSelectable:function(v){return v instanceof qx.ui.tree.AbstractTreeItem&&v.isEnabled()&&v.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var b=this._getWidget();
var c=[];

if(b.getRoot()!=null){var a=b.getRoot().getItems(true,false,b.getHideRoot());

for(var i=0;i<a.length;i++){if(this._isSelectable(a[i])){c.push(a[i]);
}}}return c;
},_getSelectableRange:function(d,e){if(d===e){return [d];
}var f=this.getSelectables();
var g=f.indexOf(d);
var h=f.indexOf(e);

if(g<0||h<0){return [];
}
if(g<h){return f.slice(g,h+1);
}else{return f.slice(h,g+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var s=this.getSelectables();

if(s.length>0){return s[s.length-1];
}else{return null;
}},_getRelatedSelectable:function(j,k){var l=this._getWidget();
var m=null;

switch(k){case q:m=l.getPreviousSiblingOf(j,false);
break;
case o:m=l.getNextSiblingOf(j,false);
break;
case p:case r:break;
}
if(!m){return null;
}
if(this._isSelectable(m)){return m;
}else{return this._getRelatedSelectable(m,k);
}}}});
})();
(function(){var y="dblclick",x="click",w="Boolean",v="excluded",u="visible",t="qx.event.type.Data",s="_applyOpenMode",r="__px",q="Space",p="Left",M="Enter",L="changeOpenMode",K="_applyRootOpenClose",J="changeSelection",I="qx.ui.tree.Tree",H="tree",G="_applyHideRoot",F="changeRoot",E="_applyRoot",D="keypress",B="none",C="pane",z="Right",A="qx.ui.tree.AbstractTreeItem";
qx.Class.define(I,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__px=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(C).add(this.__px);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(J,this._onChangeSelection,this);
this.addListener(D,this._onKeyPress,this);
},events:{addItem:t,removeItem:t},properties:{openMode:{check:[x,y,B],init:y,apply:s,event:L,themeable:true},root:{check:A,init:null,nullable:true,event:F,apply:E},hideRoot:{check:w,init:false,apply:G},rootOpenClose:{check:w,init:false,apply:K},appearance:{refine:true,init:H},focusable:{refine:true,init:true}},members:{__px:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__px;
},_applyRoot:function(d,f){var g=this.getChildrenContainer();

if(f){g.remove(f);

if(f.hasChildren()){g.remove(f.getChildrenContainer());
}}
if(d){g.add(d);

if(d.hasChildren()){g.add(d.getChildrenContainer());
}d.setVisibility(this.getHideRoot()?v:u);
d.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(bc,bd){var be=this.getRoot();

if(!be){return;
}be.setVisibility(bc?v:u);
be.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(O,P){var Q=this.getRoot();

if(!Q){return;
}Q.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__px;
},getNextSiblingOf:function(S,T,U){if((T!==false||S.isOpen())&&!(U==true)&&S.hasChildren()){return S.getChildren()[0];
}
while(S){var parent=S.getParent();

if(!parent){return null;
}var W=parent.getChildren();
var V=W.indexOf(S);

if(V>-1&&V<W.length-1){return W[V+1];
}S=parent;
}return null;
},getPreviousSiblingOf:function(h,j,k){var parent=h.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==h){return null;
}}}else{if(h==this.getRoot()){return null;
}}var n=parent.getChildren();
var l=n.indexOf(h);

if(l>0){var m=n[l-1];

while((j!==false||m.isOpen())&&!(k==true)&&m.hasChildren()){var o=m.getChildren();
m=o[o.length-1];
}return m;
}else{return parent;
}},getItems:function(ba,bb){if(this.getRoot()!=null){return this.getRoot().getItems(ba,bb,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(a){while(a){if(a==this){return null;
}
if(a instanceof qx.ui.tree.AbstractTreeItem){return a;
}a=a.getLayoutParent();
}return null;
},_applyOpenMode:function(b,c){if(c==x){this.removeListener(x,this._onOpen,this);
}else if(c==y){this.removeListener(y,this._onOpen,this);
}
if(b==x){this.addListener(x,this._onOpen,this);
}else if(b==y){this.addListener(y,this._onOpen,this);
}},_onOpen:function(e){var N=this.getTreeItem(e.getTarget());

if(!N||!N.isOpenable()){return;
}N.setOpen(!N.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var Y=e.getData();
for(var i=0;i<Y.length;i++){var X=Y[i];
while(X.getParent()!=null){X=X.getParent();
X.setOpen(true);
}}},_onKeyPress:function(e){var R=this._getLeadItem();

if(R!==null){switch(e.getKeyIdentifier()){case p:if(R.isOpenable()&&R.isOpen()){R.setOpen(false);
}break;
case z:if(R.isOpenable()&&!R.isOpen()){R.setOpen(true);
}break;
case M:case q:if(R.isOpenable()){R.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var E="open",D="auto",C="middle",B="icon",A="label",z="changeOpen",y="excluded",x="visible",w="String",v="opened",X="always",W="qx.ui.tree.AbstractTreeItem",V="addItem",U="Boolean",T="Integer",S="__pz",R="_applyIndent",Q="changeOpenSymbolMode",P="_applyOpenSymbolMode",O="resize",L="",M="removeItem",J="__py",K="abstract",H="never",I="_applyIcon",F="_applyOpen",G="__pC",N="_applyLabel";
qx.Class.define(W,{extend:qx.ui.core.Widget,type:K,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__py=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:U,init:false,event:z,apply:F},openSymbolMode:{check:[X,H,D],init:D,event:Q,apply:P},indent:{check:T,init:19,apply:R,themeable:true},parent:{check:W,nullable:true},icon:{check:w,apply:I,nullable:true,themeable:true},label:{check:w,apply:N,init:L}},members:{__py:null,__pz:null,__pA:null,__pB:null,__pC:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bf){var bg;

switch(bf){case A:bg=new qx.ui.basic.Label().set({alignY:C,value:this.getLabel()});
break;
case B:bg=new qx.ui.basic.Image().set({alignY:C,source:this.getIcon()});
break;
case E:bg=new qx.ui.tree.FolderOpenButton().set({alignY:C});
bg.addListener(z,this._onChangeOpen,this);
bg.addListener(O,this._updateIndent,this);
break;
}return bg||arguments.callee.base.call(this,bf);
},getTree:function(){var o=this;

while(o.getParent()){o=o.getParent();
}var n=o.getLayoutParent()?o.getLayoutParent().getLayoutParent():0;

if(n&&n instanceof qx.ui.core.scroll.ScrollPane){return n.getLayoutParent();
}return null;
},addWidget:function(bb,bc){this._add(bb,bc);
},addSpacer:function(){if(!this.__pC){this.__pC=new qx.ui.core.Spacer();
}else{this._remove(this.__pC);
}this._add(this.__pC);
},addOpenButton:function(){this._add(this.getChildControl(E));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bm=this.getChildControl(B);

if(this.__pB){this._remove(bm);
}this._add(bm);
this.__pB=true;
},addLabel:function(bM){var bN=this.getChildControl(A);

if(this.__pA){this._remove(bN);
}
if(bM){this.setLabel(bM);
}else{bN.setValue(this.getLabel());
}this._add(bN);
this.__pA=true;
},addState:function(b){arguments.callee.base.call(this,b);
var d=this._getChildren();

for(var i=0,l=d.length;i<l;i++){var c=d[i];

if(c.addState){d[i].addState(b);
}}},removeState:function(bJ){arguments.callee.base.call(this,bJ);
var bL=this._getChildren();

for(var i=0,l=bL.length;i<l;i++){var bK=bL[i];

if(bK.addState){bL[i].removeState(bJ);
}}},_applyIcon:function(bu,bv){var bw=this.getChildControl(B,true);

if(bw){bw.setSource(bu);
}},_applyLabel:function(bS,bT){var bU=this.getChildControl(A,true);

if(bU){bU.setValue(bS);
}},_applyOpen:function(Y,ba){if(this.hasChildren()){this.getChildrenContainer().setVisibility(Y?x:y);
}var open=this.getChildControl(E,true);

if(open){open.setOpen(Y);
}Y?this.addState(v):this.removeState(v);
},isOpenable:function(){var a=this.getOpenSymbolMode();
return (a===X||a===D&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(E,true);

if(!open){return false;
}var bn=this.getTree();

if(!bn.getRootOpenClose()){if(bn.getHideRoot()){if(bn.getRoot()==this.getParent()){return false;
}}else{if(bn.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bh,bi){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bI=0;
var open=this.getChildControl(E,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bH=open.getBounds();

if(bH){bI=bH.width;
}else{return;
}}else{open.exclude();
}}
if(this.__pC){this.__pC.setWidth((this.getLevel()+1)*this.getIndent()-bI);
}},_applyIndent:function(bd,be){this._updateIndent();
},getLevel:function(){var bj=this.getTree();

if(!bj){return;
}var bk=this;
var bl=-1;

while(bk){bk=bk.getParent();
bl+=1;
}if(bj.getHideRoot()){bl-=1;
}
if(!bj.getRootOpenClose()){bl-=1;
}return bl;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__pz){this.__pz=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?x:y});
}return this.__pz;
},hasChildrenContainer:function(){return this.__pz;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__py;
},hasChildren:function(){return this.__py?this.__py.length>0:false;
},getItems:function(bA,bB,bC){if(bC!==false){var bD=[];
}else{var bD=[this];
}var bG=this.hasChildren()&&(bB!==false||this.isOpen());

if(bG){var bF=this.getChildren();

if(bA===false){bD=bD.concat(bF);
}else{for(var i=0,bE=bF.length;i<bE;i++){bD=bD.concat(bF[i].getItems(bA,bB,false));
}}}return bD;
},recursiveAddToWidgetQueue:function(){var bx=this.getItems(true,true,false);

for(var i=0,l=bx.length;i<l;i++){qx.ui.core.queue.Widget.add(bx[i]);
}},__pD:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(p){var q=this.getChildrenContainer();
var t=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var u=arguments[i];
var s=u.getParent();

if(s){s.remove(u);
}u.setParent(this);
var r=this.hasChildren();
q.add(u);

if(u.hasChildren()){q.add(u.getChildrenContainer());
}this.__py.push(u);

if(!r){this.__pD();
}
if(t){u.recursiveAddToWidgetQueue();
t.fireNonBubblingEvent(V,qx.event.type.Data,[u]);
}}
if(t){qx.ui.core.queue.Widget.add(this);
}},addAt:function(f,g){{};

if(g==this.__py.length){this.add(f);
return;
}var m=f.getParent();

if(m){m.remove(f);
}var j=this.getChildrenContainer();
f.setParent(this);
var k=this.hasChildren();
var h=this.__py[g];
j.addBefore(f,h);

if(f.hasChildren()){j.addAfter(f.getChildrenContainer(),f);
}qx.lang.Array.insertAt(this.__py,f,g);

if(!k){this.__pD();
}
if(this.getTree()){f.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(by,bz){{};
this.addAt(by,this.__py.indexOf(bz));
},addAfter:function(bQ,bR){{};
this.addAt(bQ,this.__py.indexOf(bR)+1);
},addAtBegin:function(bt){this.addAt(bt,0);
},remove:function(bo){for(var i=0,l=arguments.length;i<l;i++){var bs=arguments[i];

if(this.__py.indexOf(bs)==-1){this.warn("Cannot remove treeitem '"+bs+"'. It is not a child of this tree item.");
return;
}var bp=this.getChildrenContainer();

if(bs.hasChildrenContainer()){var br=bs.getChildrenContainer();

if(bp.getChildren().indexOf(br)>=0){bp.remove(br);
}}qx.lang.Array.remove(this.__py,bs);
bs.setParent(null);
bp.remove(bs);
}var bq=this.getTree();

if(bq){bq.fireNonBubblingEvent(M,qx.event.type.Data,[bs]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bO){var bP=this.__py[bO];

if(bP){this.remove(bP);
}},removeAll:function(){for(var i=this.__py.length-1;i>=0;i--){this.remove(this.__py[i]);
}}},destruct:function(){this._disposeArray(J);
this._disposeObjects(G,S);
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
(function(){var x="key",w="classname",v="execute",u="changeValue",t="set",s="qx.version",r="Group by inheritance",q="inspector/images/icons/api.png",p="qx.ui.core.Widget",o="_filter",ba="_propertyList",Y="_setPropertyToDefaultButton",X="inspector/images/icons/highlight.png",W="http://demo.qooxdoo.org/",V="icon/22/actions/view-refresh.png",U="#",T="_highlightCurrentPropertyButton",S="View",R="get",Q="_reloadButton",E="/apiviewer/",F="_setNullButton",C="qx.ui.core.Parent",D="Property",A="inspector/images/icons/setnull.png",B="inspector/images/icons/goto.png",y="qx.ui.core.ClientDocument",z="_menu",G="Group by category",H="Show Inherited Porperties",K="_groupButton",J="~",M="_gotoSelectedPropertyButton",L="_inheritedButton",O="current",N="inspector/images/icons/setinit.png",I=" (Loading...)",P="inspector.property.PropertyWindow";
qx.Class.define(P,{extend:inspector.components.AbstractWindow,implement:inspector.property.IPropertyListController,construct:function(){arguments.callee.base.call(this,D);
this._filter=new inspector.property.Filter();
this._addToolbarButtons();
this._createMainElement();
},statics:{RELOAD_BUTTON_TOOLTIP_TEXT:"Reload the window.",SHOW_API_BUTTON_TOOLTIP_TEXT:"Show the API of the selected object or property.",SET_NULL_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to null.",SET_DEFAULT_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to its initial value.",HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Highlight the currently selected property.",GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Go to the currently selected property.",PROPERTY_CAPTION_TITLE:"Properties"},members:{_propertyList:null,_propertyListFull:null,_propertyListHtmlTable:null,_reloadButton:null,_reloadToolTip:null,_apiButtonToolTip:null,_setNullButton:null,_setNullTooltip:null,_setPropertyToDefaultButton:null,_setPropertyToDefaultTooltip:null,_highlightCurrentPropertyButton:null,_highlightCurrentPropertyTooltip:null,_gotoSelectedPropertyButton:null,_gotoSelectedPropertyTooltip:null,_menu:null,_currentlySelectedProperty:null,_qxObject:null,_showInherited:false,_reloadTimer:null,_filter:null,setInitSizeAndPosition:function(){var bv=qx.bom.Viewport.getWidth()-this.getWidth();
var bu=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(bv,30+2*bu);
this.setHeight(bu);
},select:function(d){if(this._qxObject==d){return;
}this._qxObject=d;
this.setCaption(arguments.callee.self.PROPERTY_CAPTION_TITLE+I);
var self=this;
window.setTimeout(function(){self._propertyList.build();
if(self._currentlySelectedProperty!=null){var bc=self._currentlySelectedProperty.getUserData(x);
var bb=self._currentlySelectedProperty.getUserData(w);
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
},setSelectedProperty:function(bt){this._currentlySelectedProperty=bt;
this._switchPropertyButtons();
},getSelectedProperty:function(){return this._currentlySelectedProperty;
},getInheritedStatus:function(){return this._showInherited;
},getGroupStatus:function(){return this._groupButton.getValue();
},gotoSelectedWidget:function(){this._gotoSelectedPropertyButtonEventListener();
},getFilter:function(){return this._filter;
},_createMainElement:function(){this._propertyList=new inspector.property.PropertyList(this);
var f=new qx.ui.container.Scroll();
this.add(f,{flex:1});
f.add(this._propertyList);
},_addToolbarButtons:function(){this._createMenu();
var bs=new qx.ui.toolbar.MenuButton(S,null,this._menu);
this._toolbar.add(bs);
this._toolbar.addSeparator();
this._reloadButton=new qx.ui.toolbar.Button(null,V);
this._reloadButton.setToolTipText(arguments.callee.self.RELOAD_BUTTON_TOOLTIP_TEXT);
this._reloadButton.addListener(v,function(){this._propertyList.build();
},this);
this._toolbar.add(this._reloadButton);
this._toolbar.addSeparator();
var br=new qx.ui.toolbar.Button(null,q);
br.setToolTipText(arguments.callee.self.SHOW_API_BUTTON_TOOLTIP_TEXT);
br.addListener(v,this._onOpenApiWindow,this);
this._toolbar.add(br);
this._toolbar.addSpacer();
this._setNullButton=new qx.ui.toolbar.Button(null,A);
this._setNullButton.setToolTipText(arguments.callee.self.SET_NULL_BUTTON_TOOLTIP_TEXT);
this._setNullButton.addListener(v,this._setNullButtonEventListener,this);
this._setNullButton.setEnabled(false);
this._toolbar.add(this._setNullButton);
this._setPropertyToDefaultButton=new qx.ui.toolbar.Button(null,N);
this._setPropertyToDefaultButton.setToolTipText(arguments.callee.self.SET_DEFAULT_BUTTON_TOOLTIP_TEXT);
this._setPropertyToDefaultButton.addListener(v,this._setPropertyToDefaultButtonEventListener,this);
this._setPropertyToDefaultButton.setEnabled(false);
this._toolbar.add(this._setPropertyToDefaultButton);
this._highlightCurrentPropertyButton=new qx.ui.toolbar.Button(null,X);
this._highlightCurrentPropertyButton.setToolTipText(arguments.callee.self.HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._highlightCurrentPropertyButton.addListener(v,this._highlightCurrentPropertyButtonEventListener,this);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton=new qx.ui.toolbar.Button(null,B);
this._gotoSelectedPropertyButton.setToolTipText(arguments.callee.self.GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._gotoSelectedPropertyButton.addListener(v,this._gotoSelectedPropertyButtonEventListener,this);
this._gotoSelectedPropertyButton.setEnabled(false);
},_createMenu:function(){this._menu=new qx.ui.menu.Menu();
this._inheritedButton=new qx.ui.menu.CheckBox(H);
this._inheritedButton.addListener(u,this._switchInheritedStatus,this);
this._inheritedButton.setValue(true);
this._menu.add(this._inheritedButton);
this._menu.addSeparator();
var bj=new qx.ui.menu.RadioButton(r);
bj.addListener(u,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(true);
},this);
bj.setValue(true);
this._menu.add(bj);
this._groupButton=new qx.ui.menu.RadioButton(G);
this._groupButton.addListener(u,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(false);
},this);
this._menu.add(this._groupButton);
new qx.ui.form.RadioGroup(bj,this._groupButton);
},_switchPropertyButtons:function(){if(this._currentlySelectedProperty==null){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var bm=this._currentlySelectedProperty.getUserData(w);
var bn=this._currentlySelectedProperty.getUserData(x);
var bk=qx.core.Init.getApplication().getIframeWindowObject();
var bp=bk.qx.Class.getByName(bm).$$properties;
var bo=bp[bn];
if(bo.nullable){this._setNullButton.setEnabled(true);
}else{this._setNullButton.setEnabled(false);
}if(bo.init){this._setPropertyToDefaultButton.setEnabled(true);
}else{this._setPropertyToDefaultButton.setEnabled(false);
}if(bn!=undefined){try{var bq=R+qx.lang.String.firstUp(bn);
if(this._qxObject[bq]==undefined){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var bl=this._qxObject[bq].call(this._qxObject);
if((bo.check==p||bo.check==C)&&(this._qxObject.classname!=y)&&(bl!=null)){this._highlightCurrentPropertyButton.setEnabled(true);
this._gotoSelectedPropertyButton.setEnabled(true);
}else{this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}catch(g){alert("Error during reading the selected Property: "+g);
this._currentlySelectedProperty.setBackgroundColor(null);
this._currentlySelectedProperty=null;
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}},_onOpenApiWindow:function(){if(this._qxObject!=null){if(this._currentlySelectedProperty!=null){var h=this._currentlySelectedProperty.getUserData(w);
var i=this._currentlySelectedProperty.getUserData(x);
this._openApiWindow(h,i);
}else{this._openApiWindow(this._qxObject.classname);
}}else{this._openApiWindow();
}},_openApiWindow:function(j,k){var l=qx.core.Init.getApplication()._loadedWindow.qx.core.Setting.get(s);
var m=W+(l||O)+E;

if(j!=null){m+=U+j;
if(k!=null){m+=J+k;
}}var n=window.open(m);
n.focus();
},_setNullButtonEventListener:function(){var a=this._currentlySelectedProperty.getUserData(w);
var c=this._currentlySelectedProperty.getUserData(x);
var b=t+qx.lang.String.firstUp(c);
try{this._qxObject[b].call(this._qxObject,null);
var a=this._currentlySelectedProperty.getUserData(w);
var c=this._currentlySelectedProperty.getUserData(x);
this._propertyList.update(c,a);
this._switchPropertyButtons();
}catch(e){alert(e);
}},_setPropertyToDefaultButtonEventListener:function(){var be=this._currentlySelectedProperty.getUserData(w);
var bf=this._currentlySelectedProperty.getUserData(x);
var bd=qx.core.Init.getApplication().getIframeWindowObject();
var bi=bd.qx.Class.getByName(be).$$properties;
var bh=bi[bf];
var bg=t+qx.lang.String.firstUp(bf);
try{this._qxObject[bg].call(this._qxObject,bh.init);
var be=this._currentlySelectedProperty.getUserData(w);
var bf=this._currentlySelectedProperty.getUserData(x);
this._propertyList.update(bf,be);
}catch(e){alert(e);
}},_highlightCurrentPropertyButtonEventListener:function(){},_gotoSelectedPropertyButtonEventListener:function(){},_switchInheritedStatus:function(e){this._showInherited=e.getCurrentTarget().getValue();

if(this._propertyList){this._propertyList.switchInheritedStatus(this._showInherited);
}}},destruct:function(){this._qxObject=null;
this._disposeObjects(o,z,L,K,Q,F,Y,T,M,ba);
}});
})();
(function(){var a="inspector.property.IFilter";
qx.Interface.define(a,{members:{sortIn:function(b,c,d){return true;
},getResult:function(){return true;
},empty:function(){return true;
}}});
})();
(function(){var q="Behavior",p="Content",o="Appearance",n="Dimension",m="Spacing",l="Tooltip & Context menu",k="Visibility",j="height",h="content",g="spacing",ba="droppable",Y="shadow",X="cursor",W="decorator",V="opacity",U="zIndex",T="color",S="appearance",R="icon",Q="inspector.property.Filter",x="value",y="font",v="keepfocus",w="focusable",t="enabled",u="allowShrink",r="keepactive",s="draggable",z="name",A="align",H="width",F="visibility",K="i",J="padding",M="selectable",L="rich",C="allowStretch",P="tabindex",O="anonymous",N="tooltip",B="label",D="margin",E="contextmenu",G="allowGrow",I="checked";
qx.Class.define(Q,{extend:qx.core.Object,implement:inspector.property.IFilter,statics:{DEFAULT_CATEGORY_NAME:"Rest"},construct:function(){qx.core.Object.call(this);
this._tests=[];
this._defineTests();
this._createCategories();
},members:{_categories:null,_properties:null,_classnames:null,_tests:null,sortIn:function(b,c,d){for(var i=0;i<this._tests.length;i++){var e=new RegExp(this._tests[i][0],K);
if(e.test(b)){var f=this._categories[this._tests[i][1]];
this._properties[f][b]=c;
this._classnames[f][b]=d;
return ;
}}this._properties[this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]][b]=c;
this._classnames[this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]][b]=d;
},getResult:function(){var bb=[];

for(var name in this._categories){bb[this._categories[name]]=name;
}return {names:bb,props:this._properties,classes:this._classnames};
},empty:function(){this.__pE();
},_createCategories:function(){this._categories=[];
var i=1;

for(var a=0;a<this._tests.length;a++){if(this._categories[this._tests[a][1]]==undefined){this._categories[this._tests[a][1]]=i;
i++;
}}this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]=i;
this.__pE();
},__pE:function(){this._properties=[];
this._classnames=[];
for(var i=1;i<=this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME];i++){this._properties[i]={};
this._classnames[i]=[];
}},_defineTests:function(){this._tests.push([D,m]);
this._tests.push([g,m]);
this._tests.push([J,m]);
this._tests.push([A,m]);
this._tests.push([S,o]);
this._tests.push([T,o]);
this._tests.push([W,o]);
this._tests.push([Y,o]);
this._tests.push([y,o]);
this._tests.push([V,o]);
this._tests.push([X,o]);
this._tests.push([H,n]);
this._tests.push([j,n]);
this._tests.push([G,n]);
this._tests.push([u,n]);
this._tests.push([C,n]);
this._tests.push([h,p]);
this._tests.push([L,p]);
this._tests.push([t,p]);
this._tests.push([I,p]);
this._tests.push([x,p]);
this._tests.push([z,p]);
this._tests.push([B,p]);
this._tests.push([R,p]);
this._tests.push([N,l]);
this._tests.push([E,l]);
this._tests.push([F,k]);
this._tests.push([U,k]);
this._tests.push([O,q]);
this._tests.push([P,q]);
this._tests.push([w,q]);
this._tests.push([v,q]);
this._tests.push([r,q]);
this._tests.push([s,q]);
this._tests.push([ba,q]);
this._tests.push([M,q]);
}},destruct:function(){this._tests=this._categories=this._properties=this._classnames=null;
}});
})();
(function(){var m="abstract",l="qx.core.Object",k="inspector.property.AbstractPropertyList";
qx.Class.define(k,{extend:qx.ui.container.Composite,type:m,construct:function(a){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.VBox(8));
this._controller=a;
},members:{_controller:null,_filter:null,build:function(){throw new Error("Abstract method call (build) in 'PropertyList'!");
},update:function(p,q){throw new Error("Abstract method call (update) in 'PropertyList'!");
},getComponents:function(){throw new Error("Abstract method call (getComponents) in 'PropertyList'!");
},containsProperty:function(n,o){throw new Error("Abstract method call (containsProperty) in 'PropertyList'!");
},switchInheritedStatus:function(){throw new Error("Abstract method call (switchInheritedStatus) in 'PropertyList'!");
},recalculateLayout:function(){throw new Error("Abstract method call (recalculateLayout) in 'PropertyList'!");
},_getDataInherited:function(b){var f=b;
var c=qx.core.Init.getApplication().getIframeWindowObject();
var g=[];
var e=[];
var d=[];
for(var i=1;;i++){g[i]=c.qx.Class.getByName(f.classname).$$properties;
d[i]=f.classname;
e[i]=[];
for(var j in g[i]){e[i][j]=f.classname;
}if(c.qx.Class.getByName(l)==f){break;
}f=c.qx.Class.getByName(f.classname).superclass;
}return {names:d,props:g,classes:e};
},_getDataGrouped:function(r){var w=this._getDataInherited(r);
var v=w.props;
var u=this._controller.getFilter();
u.empty();
for(var s=0;s<v.length;s++){var x=w.names[s];

for(var t in v[s]){u.sortIn(t,v[s][t],x);
}}return u.getResult();
},_getData:function(h){if(this._controller.getGroupStatus()){return this._getDataGrouped(h);
}else{return this._getDataInherited(h);
}}},destruct:function(){this._controller=this._filter=null;
}});
})();
(function(){var o=".",n="",m="key",l="classname",k="inspector/images/shell/errorIcon.png",j="click",h="visible",g="inherited",f="set",d="name",bq="row",bp="changeValue",bo="qx.ui.basic.Label",bn="qx.ui.core.Widget",bm="activate",bl="excluded",bk="inspector/images/close.png",bj="Integer",bi="inspector/images/null.png",bh="middle",v="get",w="getActiveWindow",t="qx.ui.container.Composite",u="qx.event.type.Focus",r="Number",s="NonEmptyString",p="blur",q="mousedown",C="Boolean",D="icon/16/actions/go-next.png",M="#FFFFFF",J="inspector.property.PropertyList",U="qx.ui.form.TextField",P="solid",bd="_arrow",ba="execute",F="Enter",bg="Double",bf="inspector/images/open.png",be="#969696",E="<u>",H="pointer",I=":",L="Label",N="String",Q="hidden",W="<b>",bc="]</u>",y="qx.ui.form.CheckBox",z="</b>",G=" objects",T="Float",S="cursor",R="qx.ui.form.ComboBox",Y="keypress",X="inherit",O="Color",V=" [",c="Font",bb="qx.event.type.KeySequence",A="white",B="left",K="Choose Color";
qx.Class.define(J,{extend:inspector.property.AbstractPropertyList,construct:function(br){arguments.callee.base.call(this,br);
this._propertyRows={};
this._comboBoxPopups=[];
this._createColorPopup();
var bs=new qx.ui.basic.Image(D);
bs.setPaddingLeft(8);
this._arrow={arrow:bs,container:null,row:null};
},members:{_propertyRows:null,_comboBoxPopups:null,_colorPopup:null,_colorFields:null,_currentColorProperty:null,_arrow:null,build:function(){if(this._controller.getQxObject()!=null){this._reloadPropertyListFull();
}},update:function(bv,bw){this._setPropertyValueFull(bv,bw);
},switchInheritedStatus:function(){var bJ=this.getChildren();

for(var i=0;i<bJ.length;i++){if(bJ[i].getUserData(g)){if(this._controller.getInheritedStatus()){bJ[i].setVisibility(h);
}else{bJ[i].setVisibility(bl);
}}}},containsProperty:function(cU,cV){return this._propertyRows[cV+o+cU]==null?false:true;
},_reloadPropertyListFull:function(){var cH=false;
var cK=true;
var cQ=this._getData(this._controller.getQxObject());
var cI=cQ.names;
var cR=cQ.props;
var cJ=cQ.classes;
if(!this._controller.getGroupStatus()){this._removeUnnecessaryClasses(cI);
}for(var i=cR.length-1;i>0;i--){if(!this._controller.getGroupStatus()){var cN=this.getChildren();
if(!cH&&cN.length>0){var x=cN.length-1-2*(cR.length-i-1);
if(x>0){var cT=cN[x].getUserData(d);
if(cT!=cI[i]){var cO=cI[i+1];
cH=true;
}}else{cH=true;
cK=false;
}}else{cH=true;
cK=false;
}}else{cH=true;
if(cK){this._clearList();
cK=false;
}}if(cH){if(cK){this._removeOld(cO);
cK=false;
}var cG=new qx.ui.basic.Atom(W+cI[i]+z,bk);
cG.setUserData(d,cI[i]);
cG.setRich(true);
this.addAt(cG,0);
var cE=new qx.ui.container.Composite(new qx.ui.layout.Grid(6,6));
cE.getLayout().setColumnWidth(0,25);
cE.setUserData(d,cI[i]);
if(!this._controller.getGroupStatus()){if(i==1){cE.setUserData(g,false);
cG.setUserData(g,false);
}else{cE.setUserData(g,true);
cG.setUserData(g,true);
}}cG.addListener(j,function(e){if(this.isVisible()){this.setVisibility(bl);
e.getTarget().setIcon(bf);
}else{this.setVisibility(h);
e.getTarget().setIcon(bk);
}},cE);
this.addAfter(cE,cG);
var cP=0;

for(var cM in cR[i]){if(cR[i][cM].group==null){var cF=new qx.ui.basic.Label(cM+I);
cF.setUserData(l,cJ[i][cM]);
cF.setUserData(m,cM);
cF.setUserData(bq,cP);
cE.add(cF,{row:cP,column:1});
var cS=null;

try{cS=this._getPropertyWidgetFull(cR[i][cM],cM,cJ[i][cM]);
}catch(b){cS=new qx.ui.basic.Label(n);
}cS.setUserData(l,cJ[i][cM]);
cS.setUserData(m,cM);
cS.setUserData(bq,cP);
cE.add(cS,{row:cP,column:2});
var cL=new qx.ui.basic.Image(bi);
cL.setUserData(l,cJ[i][cM]);
cL.setUserData(m,cM);
cL.setUserData(bq,cP);
cE.add(cL,{row:cP,column:3});
this._propertyRows[cJ[i][cM]+o+cM]={container:cE,row:cP};
cE.getLayout().setRowAlign(cP,B,bh);
cE.getLayout().setRowMinHeight(cP,20);
cF.addListener(j,this.__pF,this);
cS.addListener(j,this.__pF,this);
cS.addListener(bm,this.__pF,this);
cL.addListener(j,this.__pF,this);
cP++;
}}}}this.switchInheritedStatus();
this._refillPropertyListFull();
},_removeUnnecessaryClasses:function(bA){for(;(bA.length-1)*2<this.getChildren().length;){var bD=this.getChildren()[0];
this.removeAt(0);
bD.dispose();
var bC=this.getChildren()[0].getChildren();
for(var bE=0;bE<bC.length;bE++){if(bC[bE].classname==bo){var bB=bC[bE].getUserData(l)+o+bC[bE].getUserData(m);
delete this._propertyRows[bB];
}}this.removeAt(0);
}},_removeOld:function(cg){if(cg==null){this._clearList();
return;
}while(true){var cl=this.getChildren()[0];
var ck=cl.getUserData(d);
if(ck==cg){break;
}else{if(cl.classname==t){var cj=cl.getChildren();
for(var ch=0;ch<cj.length;ch++){if(cj[ch].classname==bo){var ci=cj[ch].getUserData(l)+o+cj[ch].getUserData(m);
delete this._propertyRows[ci];
}}}this.removeAt(0);
}}},_clearList:function(){for(var da in this._porpertyColumns){delete this._porpertyColumns[da];
}this.removeAll();
},_getPropertyWidgetFull:function(bO,bP,bQ){var ce=v+qx.lang.String.firstUp(bP);

try{if(ce===w){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var bV=this._controller.getQxObject()[ce]();
}}catch(bz){return new qx.ui.basic.Label();
}if(bO.check!==null){if(bO.check==C){var bS=new qx.ui.form.CheckBox();
var bX=function(e){var bu=this._controller.getQxObject()[ce].call(this._controller.getQxObject());

if(e.getData()!=bu){var bt=f+qx.lang.String.firstUp(bP);
try{this._controller.getQxObject()[bt].call(this._controller.getQxObject(),e.getData());
this._setPropertyValueFull(bP,bQ,true);
}catch(cY){alert(cY+" ["+bt+"]");
bS.setValue(!bu);
}}};
bS.addListener(bp,bX,this);
return bS;
}else if(bO.check instanceof Array){var bR=new qx.ui.form.ComboBox();
var bY=bO.check;
for(var i=0;i<bY.length;i++){var bW=new qx.ui.form.ListItem(bY[i]);
bR.add(bW);
}bR.addListener(bp,function(e){var bN=null;
if(e.getTarget().getValue()!=null){var bN=e.getTarget().getValue();
}if(bN!=bV){var bM=f+qx.lang.String.firstUp(bP);
try{this._controller.getQxObject()[bM].call(this._controller.getQxObject(),bN);
bV=this._controller.getQxObject()[ce].call(this._controller.getQxObject());
this._setPropertyValueFull(bP,bQ,true);
bV=this._controller.getQxObject()[ce].call(this._controller.getQxObject());
}catch(a){alert(a);
}}},this);
return bR;
}else if(bO.check==bj||bO.check==N||bO.check==s||bO.check==L||bO.check==T||bO.check==bg||bO.check==r){var cc=new qx.ui.form.TextField();
var ca=function(e){if(e.classname==bb){if(e.getKeyIdentifier()!=F){return;
}}else if(e.classname==u){}else{return ;
}var bx=f+qx.lang.String.firstUp(bP);
try{var by=cc.getValue();
bV=this._controller.getQxObject()[ce].call(this._controller.getQxObject());
if(e.classname==u){if(by==n&&bV==null){return;
}}if(bO.check==bj||bO.check==r){by=parseFloat(by);
}this._controller.getQxObject()[bx].call(this._controller.getQxObject(),by);
this._setPropertyValueFull(bP,bQ,true);
bV=this._controller.getQxObject()[ce].call(this._controller.getQxObject());
}catch(bL){alert(bL);
cc.setValue(bV+n);
}};
cc.addListener(p,ca,this);
cc.addListener(Y,ca,this);
return cc;
}else if(bO.check==O){var bT=new qx.ui.container.Composite(new qx.ui.layout.HBox(6));
bT.getLayout().setAlignY(bh);
var cb=new qx.ui.core.Widget();
cb.setDecorator(new qx.ui.decoration.Single(1,P,be));
cb.setBackgroundColor(A);
cb.setHeight(20);
cb.setWidth(20);
cb.setAllowGrowX(false);
cb.setAllowGrowY(false);
bT.add(cb);
this._colorFields[bQ+o+bP]=cb;
var bU=new qx.ui.form.Button(K);
bT.add(bU);
bU.addListener(q,function(e){this._colorPopup.setValue(cb.getBackgroundColor());
this._currentColorProperty=bQ+o+bP;
this._colorPopup.placeToMouse(e);
this._colorPopup.show();
},this);
bU.addListener(ba,this.__pF,this);
bU.addListener(bm,this.__pF,this);
return bT;
}else if(bO.ckeck==bn){var cf=new qx.ui.basic.Label();
return cf;
}else{var cd=new qx.ui.basic.Label();
return cd;
}}else{var cd=new qx.ui.basic.Label();
return cd;
}},_refillPropertyListFull:function(){for(var cp in this._propertyRows){try{var cq=cp.substr(cp.lastIndexOf(o)+1);
var co=cp.substring(0,cp.lastIndexOf(o));
this._setPropertyValueFull(cq,co);
}catch(bI){}}},_setPropertyValueFull:function(cr,cs,ct){var cw=qx.core.Init.getApplication().getIframeWindowObject();
var cv=this._propertyRows[cs+o+cr].container.getLayout();
var cD=this._propertyRows[cs+o+cr].row;

if(!ct&&cv.getCellWidget(cD,0)){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}var cC=v+qx.lang.String.firstUp(cr);

try{if(cC===w){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var cz=this._controller.getQxObject()[cC]();
}}catch(bK){cv.getCellWidget(cD,3).setVisibility(h);
cv.getCellWidget(cD,3).setSource(k);
var cx=cv.getCellWidget(cD,3).getToolTip();

if(!cx){cx=new qx.ui.tooltip.ToolTip(bK+n,k);
}else{cx.setLabel(bK+n);
cx.setIcon(k);
}cv.getCellWidget(cD,3).setToolTip(cx);
return;
}if(cz==null){cv.getCellWidget(cD,3).setVisibility(h);
cv.getCellWidget(cD,3).setSource(bi);
cv.getCellWidget(cD,3).resetToolTip();
}else{cv.getCellWidget(cD,3).setVisibility(Q);
}
try{var parent=this._controller.getQxObject();

while(cz==X){parent=parent.getLayoutParent();
cz=parent[cC].call(parent);
}}catch(cm){cv.getCellWidget(cD,3).setVisibility(h);
cv.getCellWidget(cD,3).setSource(k);
var cx=cv.getCellWidget(cD,3).getToolTip();

if(!cx){cx=new qx.ui.tooltip.ToolTip(cm+n,k);
}else{cx.setLabel(cm+n);
cx.setIcon(k);
}cv.getCellWidget(cD,3).setToolTip(cx);
return;
}if(cv.getCellWidget(cD,2).classname==y){if(cz==null){cv.getCellWidget(cD,2).setValue(false);
}else{cv.getCellWidget(cD,2).setValue(cz);
}}else if(cv.getCellWidget(cD,2).classname==bo){if(cz!=null){var cB=cw.qx.Class.getByName(cs).$$properties;
var cA=cB[cr];
if(cz instanceof Array){cv.getCellWidget(cD,2).setValue(cz.length+G);
}else if((cA.check==bn)&&(this._controller.getQxObject() instanceof qx.application.AbstractGui)){cv.getCellWidget(cD,2).setValue(E+cz.classname+V+cz.toHashCode()+bc);
cv.getCellWidget(cD,2).setStyleProperty(S,H);
if(cv.getCellWidget(cD,2).hasListeners(j)===undefined){cv.getCellWidget(cD,2).addListener(j,function(e){if(this._controller.getSelectedProperty()!=null){this._controller.getSelectedProperty().setBackgroundColor(null);
}this._controller.setSelectedProperty(cv.getCellWidget(cD,1));
this._controller.gotoSelectedWidget();
},this);
}}else if(cA.check==c){cv.getCellWidget(cD,2).setFont(cz);
cv.getCellWidget(cD,2).setValue(cz+n);
}else{cv.getCellWidget(cD,2).setValue(cz+n);
}}else{cv.getCellWidget(cD,2).setValue(n);
}}else if(cv.getCellWidget(cD,2).classname==U){if(cz!=null){cv.getCellWidget(cD,2).setValue(cz+n);
}else{cv.getCellWidget(cD,2).setValue(n);
}}else if(cv.getCellWidget(cD,2).classname==R){var cu=cv.getCellWidget(cD,2);
if(cz==null){cu.resetSelection();
}else{for(var i=0;i<cu.getChildren().length;i++){if(cz==cu.getChildren()[i].getLabel()){if(cz){cu.setValue(cz);
}}}}}else if(cv.getCellWidget(cD,2).classname==t){try{var cy=cw.qx.theme.manager.Color.getInstance().resolve(cz);
cv.getCellWidget(cD,2).getChildren()[0].setBackgroundColor(cy);
}catch(cX){cv.getCellWidget(cD,2).getChildren()[0].setBackgroundColor(M);
}}},_createColorPopup:function(){this._colorPopup=new qx.ui.control.ColorPopup();
var cn=qx.core.Init.getApplication();
cn.getRoot().add(this._colorPopup);
this._colorFields={};
this._colorPopup.addListener(bp,function(e){if(this._currentColorProperty!=null){var bG=this._currentColorProperty.substr(this._currentColorProperty.lastIndexOf(o)+1);
var bF=this._currentColorProperty.substring(0,this._currentColorProperty.lastIndexOf(o));
var bH=f+qx.lang.String.firstUp(bG);
try{this._controller.getQxObject()[bH].call(this._controller.getQxObject(),e.getData());
this._colorFields[this._currentColorProperty].setBackgroundColor(e.getData());
this._setPropertyValueFull(bG,bF,true);
}catch(cW){alert(cW);
}this._currentColorProperty=null;
}},this);
},__pF:function(e){var db=e.getTarget();

while(db.getUserData(m)==null){db=db.getLayoutParent();
}var dc=db.getUserData(l)+o+db.getUserData(m);
if(this._arrow.container!=null){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}if(this._propertyRows[dc]!=undefined){this._arrow.container=this._propertyRows[dc].container;
this._arrow.row=db.getUserData(bq);
this._arrow.container.add(this._arrow.arrow,{row:this._arrow.row,column:0});
this._controller.setSelectedProperty(db);
}else{this._controller.setSelectedProperty(null);
}}},destruct:function(){this._propertyRows=this._comboBoxPopups=this._colorPopup=this._colorFields=this._oldPropertyListPool=null;
this._disposeObjects(bd);
}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
arguments.callee.base.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var B="popup",A="list",z="",y="mousewheel",x="resize",w="Function",v="blur",u="abstract",t="keypress",s="Number",l="changeSelection",r="PageUp",o="_applyMaxListHeight",j="PageDown",i="mouseup",n="Escape",m="changeVisibility",p="one",h="middle",q="qx.ui.form.AbstractSelectBox",k="mousedown";
qx.Class.define(q,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:u,construct:function(){arguments.callee.base.call(this);
var J=new qx.ui.layout.HBox();
this._setLayout(J);
J.setAlignY(h);
this.addListener(t,this._onKeyPress);
this.addListener(v,this._onBlur,this);
var I=qx.core.Init.getApplication().getRoot();
I.addListener(y,this._onMousewheel,this,true);
this.addListener(x,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:s,apply:o,nullable:true,init:200},format:{check:w,init:function(M){return this._defaultFormat(M);
},nullable:true}},members:{_createChildControlImpl:function(f){var g;

switch(f){case A:g=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:p,quickSelection:true});
g.addListener(l,this._onListChangeSelection,this);
g.addListener(k,this._onListMouseDown,this);
break;
case B:g=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
g.setAutoHide(false);
g.setKeepActive(true);
g.addListener(i,this.close,this);
g.add(this.getChildControl(A));
g.addListener(m,this._onPopupChangeVisibility,this);
break;
}return g||arguments.callee.base.call(this,f);
},_applyMaxListHeight:function(K,L){this.getChildControl(A).setMaxHeight(K);
},getChildrenContainer:function(){return this.getChildControl(A);
},open:function(){var a=this.getChildControl(B);
a.placeToWidget(this,true);
a.show();
},close:function(){this.getChildControl(B).hide();
},toggle:function(){var F=this.getChildControl(B).isVisible();

if(F){this.close();
}else{this.open();
}},_defaultFormat:function(C){var D=C?C.getLabel():z;
var E=C?C.getRich():false;

if(E){D=D.replace(/<[^>]+?>/g,z);
D=qx.bom.String.unescape(D);
}return D;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var G=e.getKeyIdentifier();
var H=this.getChildControl(B);
if(H.isHidden()&&(G==j||G==r)){e.stopPropagation();
}else if(!H.isHidden()&&G==n){this.close();
e.stop();
}else{this.getChildControl(A).handleKeyPress(e);
}},_onMousewheel:function(e){var d=e.getTarget();
var c=this.getChildControl(B);

if(qx.ui.core.Widget.contains(c,d)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(B).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var b=qx.core.Init.getApplication().getRoot();

if(b){b.removeListener(y,this._onMousewheel,this,true);
}}});
})();
(function(){var z="textfield",y="button",x="list",w="selected",v="focusout",u="inner",t="changeValue",s="popup",r="focusin",q="combobox",j="click",p="blur",m="Enter",i="quick",h="_applyPlaceholder",l="qx.ui.form.ComboBox",k="single",n="Down",g="String",o="qx.event.type.Data";
qx.Class.define(l,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){arguments.callee.base.call(this);
var J=this._createChildControl(z);
this._createChildControl(y);
this.addListener(j,this._onClick);
this.addListener(r,function(e){J.fireNonBubblingEvent(r,qx.event.type.Focus);
},this);
this.addListener(v,function(e){J.fireNonBubblingEvent(v,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:q},placeholder:{check:g,nullable:true,apply:h}},events:{"changeValue":o},members:{__pG:null,__pH:null,_applyPlaceholder:function(E,F){this.getChildControl(z).setPlaceholder(E);
},_createChildControlImpl:function(P){var Q;

switch(P){case z:Q=new qx.ui.form.TextField();
Q.setFocusable(false);
Q.addState(u);
Q.addListener(t,this._onTextFieldChangeValue,this);
Q.addListener(p,this.close,this);
this._add(Q,{flex:1});
break;
case y:Q=new qx.ui.form.Button();
Q.setFocusable(false);
Q.setKeepActive(true);
Q.addState(u);
this._add(Q);
break;
case x:Q=arguments.callee.base.call(this,P);
Q.setSelectionMode(k);
break;
}return Q||arguments.callee.base.call(this,P);
},_forwardStates:{focused:true},tabFocus:function(){var O=this.getChildControl(z);
O.getFocusElement().focus();
O.selectAllText();
},setValue:function(A){var B=this.getChildControl(z);

if(B.getValue()==A){return;
}B.setValue(A);
},getValue:function(){return this.getChildControl(z).getValue();
},resetValue:function(){this.getChildControl(z).setValue(null);
},_onKeyPress:function(e){var D=this.getChildControl(s);
var C=e.getKeyIdentifier();

if(C==n&&e.isAltPressed()){this.getChildControl(y).addState(w);
this.toggle();
e.stopPropagation();
}else if(C==m){if(D.isVisible()){this.close();
e.stop();
}}else if(D.isVisible()){arguments.callee.base.call(this,e);
}},_onClick:function(e){var f=e.getTarget();

if(f==this.getChildControl(y)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__pG){var N=this.__pG.getLabel();

if(this.getFormat()!=null){N=this.getFormat().call(this,this.__pG);
}if(N&&N.translate){N=N.translate();
}this.setValue(N);
this.__pG=null;
}},_onListChangeSelection:function(e){var K=e.getData();

if(K.length>0){var L=this.getChildControl(x);

if(L.getSelectionContext()==i){this.__pG=K[0];
}else{var M=K[0].getLabel();

if(this.getFormat()!=null){M=this.getFormat().call(this,K[0]);
}if(M&&M.translate){M=M.translate();
}this.setValue(M);
this.__pG=null;
}}},_onPopupChangeVisibility:function(e){var b=this.getChildControl(s);

if(b.isVisible()){var c=this.getChildControl(x);
var d=this.getValue();
var a=null;

if(d){a=c.findItem(d);
}
if(a){c.setSelection([a]);
}else{c.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(y).removeState(w);
},_onTextFieldChangeValue:function(e){var I=e.getData();
var H=this.getChildControl(x);

if(I!=null){var G=H.findItem(I,false);

if(G){H.setSelection([G]);
}else{H.resetSelection();
}}else{H.resetSelection();
}this.fireDataEvent(t,I,e.getOldData());
},getTextSelection:function(){return this.getChildControl(z).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(z).getTextSelectionLength();
},setTextSelection:function(R,S){this.getChildControl(z).setTextSelection(R,S);
},clearTextSelection:function(){this.getChildControl(z).clearTextSelection();
},selectAllText:function(){this.getChildControl(z).selectAllText();
}}});
})();
(function(){var v="horizontal",u="qx.event.type.Data",t="vertical",s="",r="qx.ui.form.List",q="Enter",p="one",o="addChildWidget",n="_applySpacing",m="Boolean",H="Integer",G="action",F="keyinput",E="addItem",D="__pI",C="removeChildWidget",B="_applyOrientation",A="single",z="keypress",y="list",w="pane",x="removeItem";
qx.Class.define(r,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(L){arguments.callee.base.call(this);
this.__pI=new qx.ui.container.Composite();
this.__pI.addListener(o,this._onAddChild,this);
this.__pI.addListener(C,this._onRemoveChild,this);
this.getChildControl(w).add(this.__pI);
if(L){this.setOrientation(v);
}else{this.initOrientation();
}this.addListener(z,this._onKeyPress);
this.addListener(F,this._onKeyInput);
this.__pJ=s;
},events:{addItem:u,removeItem:u},properties:{appearance:{refine:true,init:y},focusable:{refine:true,init:true},orientation:{check:[v,t],init:t,apply:B},spacing:{check:H,init:0,apply:n,themeable:true},enableInlineFind:{check:m,init:true}},members:{__pJ:null,__pK:null,__pI:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__pI;
},_onAddChild:function(e){this.fireDataEvent(E,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(x,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(c,d){var f=c===v;
var g=f?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__pI;
content.setLayout(g);
content.setAllowGrowX(!f);
content.setAllowGrowY(f);
this._applySpacing(this.getSpacing());
},_applySpacing:function(I,J){this.__pI.getLayout().setSpacing(I);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==q&&!e.isAltPressed()){var K=this.getSelection();

for(var i=0;i<K.length;i++){K[i].fireEvent(G);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var a=this.getSelectionMode();

if(!(a===A||a===p)){return;
}if(((new Date).valueOf()-this.__pK)>1000){this.__pJ=s;
}this.__pJ+=e.getChar();
var b=this.findItemByLabelFuzzy(this.__pJ);
if(b){this.setSelection([b]);
}this.__pK=(new Date).valueOf();
},findItemByLabelFuzzy:function(h){h=h.toLowerCase();
var j=this.getChildren();
for(var i=0,l=j.length;i<l;i++){var k=j[i].getLabel();
if(k&&k.toLowerCase().indexOf(h)==0){return j[i];
}}return null;
},findItem:function(M,N){if(N!==false){M=M.toLowerCase();
}var O=this.getChildren();
var Q;
for(var i=0,l=O.length;i<l;i++){Q=O[i];
var P;

if(Q.getLabel()!=null){P=Q.getLabel();

if(P.translate){P=P.translate();
}
if(N!==false){P=P.toLowerCase();
}}
if(P.toString()==M.toString()){return Q;
}}return null;
}},destruct:function(){this._disposeObjects(D);
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
(function(){var u="current-preview",t="execute",s="selected-preview",r="Number",q="preview-pane",p="selector-button",o="colorselector-cancelbutton",n="auto-button",m="colorselector-okbutton",l="mousedown",bg="teal",bf="maroon",be="qx.ui.control.ColorPopup",bd="#666",bc="changeValue",bb="#333",ba="#000",Y="yellow",X="changeGreen",W="colorpopup",B="_applyValue",C="blue",z="changeRed",A="field#",x="__pN",y="__pO",v="#CCC",w="Color Selector",D="changeVisibility",E="recent",L="changeBlue",J="mouseover",P="Cancel",N="#FFF",S="right",R="Open ColorSelector",G="mouseout",V="#999",U="Automatic",T="Basic Colors",F="Preview (Old/New)",H="visible",I="Recent Colors",K="OK",M="field",O="green",Q="red";
qx.Class.define(be,{extend:qx.ui.popup.Popup,implement:[qx.ui.form.IColorForm],construct:function(){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.VBox(5));
this._createChildControl(n);
this._createBoxes();
this._createChildControl(q);
this._createChildControl(p);
this.addListener(D,this._onChangeVisibility,this);
},properties:{appearance:{refine:true,init:W},value:{nullable:true,apply:B,event:bc},red:{check:r,init:null,nullable:true,event:z},green:{check:r,init:null,nullable:true,event:X},blue:{check:r,init:null,nullable:true,event:L}},members:{__pL:1e5,__pM:null,__pN:null,__pO:null,__pP:E,__pQ:12,_createChildControlImpl:function(bD){var bE;

switch(bD){case M:bE=new qx.ui.core.Widget;
bE.addListener(l,this._onFieldMouseDown,this);
bE.addListener(J,this._onFieldMouseOver,this);
bE.addListener(G,this._onFieldMouseOut,this);
break;
case n:bE=new qx.ui.form.Button(this.tr(U));
bE.setAllowStretchX(true);
bE.addListener(t,this._onAutomaticBtnExecute,this);
this.add(bE);
break;
case p:bE=new qx.ui.form.Button(this.tr(R));
bE.addListener(t,this._onSelectorButtonExecute,this);
this.add(bE);
break;
case q:bE=new qx.ui.groupbox.GroupBox(this.tr(F));
bE.setLayout(new qx.ui.layout.HBox);
bE.add(this._createChildControl(s,true),{flex:1});
bE.add(this._createChildControl(u,true),{flex:1});
this.add(bE);
break;
case s:bE=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case u:bE=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case m:bE=new qx.ui.form.Button(this.tr(K));
bE.addListener(t,this._onColorSelectorOk,this);
break;
case o:bE=new qx.ui.form.Button(this.tr(P));
bE.addListener(t,this._onColorSelectorCancel,this);
break;
}return bE||arguments.callee.base.call(this,bD);
},_createBoxes:function(){this.__pM={};
var bl=this._tables;
var bo,bk,bm;
var j=0;

for(var bn in bl){bo=bl[bn];
bk=new qx.ui.groupbox.GroupBox(bo.label);
bk.setLayout(new qx.ui.layout.HBox);
this.__pM[bn]=bk;
this.add(bk);

for(var i=0;i<this.__pQ;i++){bm=this.getChildControl(A+(j++));
bm.setBackgroundColor(bo.values[i]||null);
bk.add(bm);
}}},_createColorSelector:function(){if(this.__pO){return;
}var bp=new qx.ui.window.Window(this.tr(w));
this.__pN=bp;
bp.setLayout(new qx.ui.layout.VBox(16));
bp.setResizable(false);
bp.moveTo(20,20);
this.__pO=new qx.ui.control.ColorSelector;
bp.add(this.__pO);
var bq=new qx.ui.container.Composite(new qx.ui.layout.HBox(8,S));
bp.add(bq);
var bs=this._createChildControl(o);
var br=this._createChildControl(m);
bq.add(bs);
bq.add(br);
},_applyValue:function(bh,bi){if(bh===null){this.setRed(null);
this.setGreen(null);
this.setBlue(null);
}else{var bj=qx.util.ColorUtil.stringToRgb(bh);
this.setRed(bj[0]);
this.setGreen(bj[1]);
this.setBlue(bj[2]);
}this.getChildControl(s).setBackgroundColor(bh);
this._rotatePreviousColors();
},_rotatePreviousColors:function(){if(!this._tables){return;
}var bv=this._tables[this.__pP].values;
var bw=this.__pM[this.__pP];

if(!bv){return;
}var bx=this.getValue();

if(!bx){return;
}var bu=bv.indexOf(bx);

if(bu!=-1){qx.lang.Array.removeAt(bv,bu);
}else if(bv.length==this.__pQ){bv.shift();
}bv.push(bx);
var bt=bw.getChildren();

for(var i=0;i<bt.length;i++){bt[i].setBackgroundColor(bv[i]||null);
}},_onFieldMouseDown:function(e){var k=this.getChildControl(u).getBackgroundColor();
this.setValue(k);

if(k){this.hide();
}},_onFieldMouseOver:function(e){this.getChildControl(u).setBackgroundColor(e.getTarget().getBackgroundColor());
},_onFieldMouseOut:function(e){var d=this.getRed();
var c=this.getGreen();
var a=this.getBlue();
var b=null;

if(d!==null||c!==null||a!==null){var b=qx.util.ColorUtil.rgbToRgbString([d,c,a]);
}this.getChildControl(u).setBackgroundColor(b);
},_onAutomaticBtnExecute:function(){this.setValue(null);
this.hide();
},_onSelectorButtonExecute:function(){this._createColorSelector();
this.exclude();
var h=this.getRed();
var g=this.getGreen();
var f=this.getBlue();

if(h===null||g===null||f===null){h=255;
g=255;
f=255;
}this.__pO.setRed(h);
this.__pO.setGreen(g);
this.__pO.setBlue(f);
this.__pN.open();
},_onColorSelectorOk:function(){var by=this.__pO;
this.setValue(qx.util.ColorUtil.rgbToRgbString([by.getRed(),by.getGreen(),by.getBlue()]));
this.__pN.close();
},_onColorSelectorCancel:function(){this.__pN.close();
},_onChangeVisibility:function(e){if(this.getVisibility()==H){var bC=this.getRed();
var bB=this.getGreen();
var bz=this.getBlue();
var bA=null;

if(bC!==null||bB!==null||bz!==null){var bA=qx.util.ColorUtil.rgbToRgbString([bC,bB,bz]);
}this.getChildControl(s).setBackgroundColor(bA);
this.getChildControl(u).setBackgroundColor(bA);
}},_tables:{core:{label:T,values:[ba,bb,bd,V,v,N,Q,O,C,Y,bg,bf]},recent:{label:I,values:[]}}},destruct:function(){this._disposeObjects(x,y);
this._tables=this.__pM=null;
}});
})();
(function(){var j="legend",i="frame",h="middle",g="top",f="resize",d="qx.ui.groupbox.GroupBox",c="groupbox",b="_applyLegendPosition";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(p,q){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(i);
this._createChildControl(j);
if(p!=null){this.setLegend(p);
}
if(q!=null){this.setIcon(q);
}},properties:{appearance:{refine:true,init:c},legendPosition:{check:[g,h],init:h,apply:b,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(k){var l;

switch(k){case i:l=new qx.ui.container.Composite();
this._add(l,{left:0,top:6,right:0,bottom:0});
break;
case j:l=new qx.ui.basic.Atom();
l.addListener(f,this._repositionFrame,this);
this._add(l);
break;
}return l||arguments.callee.base.call(this,k);
},_getContentPaddingTarget:function(){return this.getChildControl(i);
},_applyLegendPosition:function(e){if(this.getChildControl(j).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var n=this.getChildControl(j);
var m=this.getChildControl(i);
var o=n.getBounds().height;
if(this.getLegendPosition()==h){m.setLayoutProperties({"top":Math.round(o/2)});
}else if(this.getLegendPosition()==g){m.setLayoutProperties({"top":o});
}},getChildrenContainer:function(){return this.getChildControl(i);
},setLegend:function(r){var s=this.getChildControl(j);

if(r!==null){s.setLabel(r);
s.show();
}else{s.exclude();
}},getLegend:function(){return this.getChildControl(j).getLabel();
},setIcon:function(a){this.getChildControl(j).setIcon(a);
},getIcon:function(){this.getChildControl(j).getIcon();
}}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var d,f,e,h,top;
for(var i=0,l=g.length;i<l;i++){d=g[i];
f=d.getSizeHint();
e=d.getLayoutProperties();
h=(e.left||0)+d.getMarginLeft();
top=(e.top||0)+d.getMarginTop();
d.renderLayout(h,top,f.width,f.height);
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
(function(){var ct="brightness-handle",cs="hue-saturation-handle",cr="hsbSpinner",cq="rgbSpinner",cp="changeValue",co="hexField",cn="hueSaturationField",cm="brightness-field",cl="mousedown",ck="rgb-spinner-red",bY="preview-content-old",bX="rgb-spinner-green",bW="brightnessField",bV="hue-saturation-field",bU="hsb-spinner-brightness",bT="preview-content-new",bS="hue-saturation-pane",bR="rgb-spinner-blue",bQ="hsb-spinner-hue",bP="hsb-spinner-saturation",cA="hex-field",cB="brightnessModifier",cy="blueModifier",cz="saturationModifier",cw="middle",cx="Number",cu="#",cv="redModifier",cC="greenModifier",cD="hueModifier",cd="Integer",cc="brightness-pane",cf="control-pane",ce="preset-grid",ch="mouseup",cg="preset-field-set",cj="qx.event.type.Event",ci="mousemove",cb="hex-field-composite",ca="rgb-spinner-composite",ba="hsb-spinner-composite",bb="control-bar",bc="mousewheel",bd="visual-pane",be="input-field-set",bf="preview-field-set",bg="black",bh="_applyGreen",bi="#333",bj="aqua",cH="colorbucket",cG="qx.event.type.Data",cF="Hex",cE="#BBB",cL="decoration/colorselector/brightness-handle.gif",cK="Visual",cJ="_applySaturation",cI="Preview (Old/New)",cN="FFFFFF",cM="decoration/colorselector/brightness-field.png",bz="white",bA="orange",bx="_applyRed",by="_applyBlue",bD="maroon",bE="Presets",bB="_applyBrightness",bC="#999",bv="purple",bw="red",br="blue",bq="_applyHue",bt="decoration/colorselector/huesaturation-handle.gif",bs="colorselector",bn="qx.ui.control.ColorSelector",bm="lime",bp="#EEE",bo="olive",bl="RGB",bk="decoration/colorselector/huesaturation-field.jpg",bJ="navy",bK="teal",bL="green",bM="yellow",bF="#666",bG="fuchsia",bH="Details",bI="",bN="colorbucket#",bO="appear",bu="HSB";
qx.Class.define(bn,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IColorForm],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(bb);
this.addListener(bO,this._onAppear,this);
},events:{"dialogok":cj,"dialogcancel":cj,"changeValue":cG},properties:{appearance:{refine:true,init:bs},red:{check:cd,init:255,apply:bx},green:{check:cd,init:255,apply:bh},blue:{check:cd,init:255,apply:by},hue:{check:cx,init:0,apply:bq},saturation:{check:cx,init:0,apply:cJ},brightness:{check:cx,init:100,apply:bB}},members:{__pR:null,__pS:[bD,bw,bA,bM,bo,bv,bG,bm,bL,bJ,br,bj,bK,bg,bi,bF,bC,cE,bp,bz],__pT:bI,__pU:0,__pV:0,__pW:0,__pX:true,__pY:false,_createChildControlImpl:function(h){var k;

switch(h){case bb:k=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
k.add(this.getChildControl(cf));
k.add(this.getChildControl(bd));
this._add(k);
break;
case bd:k=new qx.ui.groupbox.GroupBox(this.tr(cK));
k.setLayout(new qx.ui.layout.HBox(10));
k.add(this.getChildControl(bS));
k.add(this.getChildControl(cc));
break;
case cf:k=new qx.ui.container.Composite(new qx.ui.layout.VBox(12));
k.add(this.getChildControl(cg));
k.add(this.getChildControl(be));
k.add(this.getChildControl(bf),{flex:1});
break;
case bS:k=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
k.setAllowGrowY(false);
k.addListener(bc,this._onHueSaturationPaneMouseWheel,this);
k.add(this.getChildControl(bV));
k.add(this.getChildControl(cs),{left:0,top:256});
break;
case bV:k=new qx.ui.basic.Image(bk);
k.addListener(cl,this._onHueSaturationFieldMouseDown,this);
break;
case cs:k=new qx.ui.basic.Image(bt);
k.addListener(cl,this._onHueSaturationFieldMouseDown,this);
k.addListener(ch,this._onHueSaturationHandleMouseUp,this);
k.addListener(ci,this._onHueSaturationHandleMouseMove,this);
break;
case cc:k=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
k.setAllowGrowY(false);
k.addListener(bc,this._onBrightnessPaneMouseWheel,this);
k.add(this.getChildControl(cm));
k.add(this.getChildControl(ct));
break;
case cm:k=new qx.ui.basic.Image(cM);
k.addListener(cl,this._onBrightnessFieldMouseDown,this);
break;
case ct:k=new qx.ui.basic.Image(cL);
k.addListener(cl,this._onBrightnessHandleMouseDown,this);
k.addListener(ch,this._onBrightnessHandleMouseUp,this);
k.addListener(ci,this._onBrightnessHandleMouseMove,this);
break;
case cg:k=new qx.ui.groupbox.GroupBox(this.tr(bE));
k.setLayout(new qx.ui.layout.Grow());
k.add(this.getChildControl(ce));
break;
case cH:k=new qx.ui.core.Widget();
k.addListener(cl,this._onColorFieldClick,this);
break;
case ce:p=new qx.ui.layout.Grid(3,3);
k=new qx.ui.container.Composite(p);
var q;
var o;

for(var i=0;i<2;i++){for(var j=0;j<10;j++){o=i*10+j;
q=this.getChildControl(bN+o);
q.setBackgroundColor(this.__pS[o]);
k.add(q,{column:j,row:i});
}}break;
case be:k=new qx.ui.groupbox.GroupBox(this.tr(bH));
var p=new qx.ui.layout.VBox();
p.setSpacing(10);
k.setLayout(p);
k.add(this.getChildControl(cb));
k.add(this.getChildControl(ca));
k.add(this.getChildControl(ba));
break;
case bf:k=new qx.ui.groupbox.GroupBox(this.tr(cI));
var p=new qx.ui.layout.HBox(10);
k.setLayout(p);
k.add(this.getChildControl(bY),{flex:1});
k.add(this.getChildControl(bT),{flex:1});
break;
case cb:var n=new qx.ui.layout.HBox(4);
n.setAlignY(cw);
k=new qx.ui.container.Composite(n);
var s=new qx.ui.basic.Label(this.tr(cF));
k.add(s);
var r=new qx.ui.basic.Label(cu);
k.add(r);
k.add(this.getChildControl(cA));
break;
case cA:k=new qx.ui.form.TextField(cN);
k.setMaxLength(6);
k.setFilter(/[0-9A-Fa-f]/);
k.setWidth(55);
k.addListener(cp,this._onHexFieldChange,this);
break;
case ca:var n=new qx.ui.layout.HBox(4);
n.setAlignY(cw);
k=new qx.ui.container.Composite(n);
var l=new qx.ui.basic.Label(this.tr(bl));
l.setWidth(25);
k.add(l);
k.add(this.getChildControl(ck));
k.add(this.getChildControl(bX));
k.add(this.getChildControl(bR));
break;
case ck:k=new qx.ui.form.Spinner(0,255,255);
k.setWidth(50);
k.addListener(cp,this._setRedFromSpinner,this);
break;
case bX:k=new qx.ui.form.Spinner(0,255,255);
k.setWidth(50);
k.addListener(cp,this._setGreenFromSpinner,this);
break;
case bR:k=new qx.ui.form.Spinner(0,255,255);
k.setWidth(50);
k.addListener(cp,this._setBlueFromSpinner,this);
break;
case ba:var n=new qx.ui.layout.HBox(4);
n.setAlignY(cw);
k=new qx.ui.container.Composite(n);
var m=new qx.ui.basic.Label(this.tr(bu));
m.setWidth(25);
k.add(m);
k.add(this.getChildControl(bQ));
k.add(this.getChildControl(bP));
k.add(this.getChildControl(bU));
break;
case bQ:k=new qx.ui.form.Spinner(0,0,360);
k.setWidth(50);
k.addListener(cp,this._setHueFromSpinner,this);
break;
case bP:k=new qx.ui.form.Spinner(0,0,100);
k.setWidth(50);
k.addListener(cp,this._setSaturationFromSpinner,this);
break;
case bU:k=new qx.ui.form.Spinner(0,100,100);
k.setWidth(50);
k.addListener(cp,this._setBrightnessFromSpinner,this);
break;
case bY:k=new qx.ui.core.Widget();
break;
case bT:k=new qx.ui.core.Widget();
break;
}return k||arguments.callee.base.call(this,h);
},setValue:function(z){var A;

if(z==null){this.__pX=true;
A=[255,255,255];
}else{A=qx.util.ColorUtil.stringToRgb(z);
this.__pX=false;
}this.__pY=true;
this.setRed(A[0]);
this.setGreen(A[1]);
this.__pY=false;
this.setBlue(A[2]);
},getValue:function(){return this.__pX?null:cu+qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
},resetValue:function(){this.__pX=true;
this.__pY=true;
this.setRed(255);
this.setGreen(255);
this.__pY=false;
this.setBlue(255);
},__qa:function(){if(!this.__pY){this.__pX=false;
this.fireDataEvent(cp,this.getValue());
}},_applyRed:function(Q,R){if(this.__pR===null){this.__pR=cv;
}
if(this.__pR!==cq){this.getChildControl(ck).setValue(Q);
}
if(this.__pR!==co){this._setHexFromRgb();
}
switch(this.__pR){case cq:case co:case cv:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__qa();

if(this.__pR===cv){this.__pR=null;
}},_applyGreen:function(x,y){if(this.__pR===null){this.__pR=cC;
}
if(this.__pR!==cq){this.getChildControl(bX).setValue(x);
}
if(this.__pR!==co){this._setHexFromRgb();
}
switch(this.__pR){case cq:case co:case cC:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__qa();

if(this.__pR===cC){this.__pR=null;
}},_applyBlue:function(D,E){if(this.__pR===null){this.__pR=cy;
}
if(this.__pR!==cq){this.getChildControl(bR).setValue(D);
}
if(this.__pR!==co){this._setHexFromRgb();
}
switch(this.__pR){case cq:case co:case cy:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__qa();

if(this.__pR===cy){this.__pR=null;
}},_applyHue:function(f,g){if(this.__pR===null){this.__pR=cD;
}
if(this.__pR!==cr){this.getChildControl(bQ).setValue(f);
}
if(this.__pR!==cn){if(this.getChildControl(cs).getBounds()){this.getChildControl(cs).setDomLeft(Math.round(f/1.40625)+this.getChildControl(bS).getPaddingLeft());
}else{this.getChildControl(cs).setLayoutProperties({left:Math.round(f/1.40625)});
}}
switch(this.__pR){case cr:case cn:case cD:this._setRgbFromHue();
}this._setBrightnessGradiant();

if(this.__pR===cD){this.__pR=null;
}},_applySaturation:function(v,w){if(this.__pR===null){this.__pR=cz;
}
if(this.__pR!==cr){this.getChildControl(bP).setValue(v);
}
if(this.__pR!==cn){this._setBrightnessGradiant();

if(this.getChildControl(cs).getBounds()){this.getChildControl(cs).setDomTop(256-Math.round(v*2.56)+this.getChildControl(bS).getPaddingTop());
}else{this.getChildControl(cs).setLayoutProperties({top:256-Math.round(v*2.56)});
}}
switch(this.__pR){case cr:case cn:case cz:this._setRgbFromHue();
}
if(this.__pR===cz){this.__pR=null;
}},_applyBrightness:function(W,X){if(this.__pR===null){this.__pR=cB;
}
if(this.__pR!==cr){this.getChildControl(bU).setValue(W);
}
if(this.__pR!==bW){var Y=256-Math.round(W*2.56);

if(this.getChildControl(ct).getBounds()){this.getChildControl(ct).setDomTop(Y+this.getChildControl(cc).getPaddingTop());
}else{this.getChildControl(ct).setLayoutProperties({top:Y});
}}
switch(this.__pR){case cr:case bW:case cB:this._setRgbFromHue();
}
if(this.__pR===cB){this.__pR=null;
}},_onBrightnessHandleMouseDown:function(e){this.getChildControl(ct).capture();
this.__pT=ct;
var cQ=this.getChildControl(cm).getContainerLocation();
var cP=this.getChildControl(ct).getContainerLocation();
var cO=this.getChildControl(cm).getBounds();
this.__pU=cQ.top+(e.getDocumentTop()-cP.top)-cO.top;
e.stopPropagation();
},_onBrightnessHandleMouseUp:function(e){this.getChildControl(ct).releaseCapture();
this.__pT=null;
},_onBrightnessHandleMouseMove:function(e){if(this.__pT===ct){this._setBrightnessOnFieldEvent(e);
e.stopPropagation();
}},_onBrightnessFieldMouseDown:function(e){var location=this.getChildControl(cm).getContainerLocation();
var K=this.getChildControl(ct).getBounds();
this.__pU=location.top+(K.height/2);
this._setBrightnessOnFieldEvent(e);
this.getChildControl(ct).capture();
this.__pT=ct;
},_onBrightnessPaneMouseWheel:function(e){this.setBrightness(qx.lang.Number.limit(this.getBrightness()+e.getWheelDelta(),0,100));
e.stop();
},_setBrightnessOnFieldEvent:function(e){var B=qx.lang.Number.limit(e.getDocumentTop()-this.__pU,0,256);
this.__pR=bW;

if(this.getChildControl(ct).getBounds()){this.getChildControl(ct).setDomTop(B);
}else{this.getChildControl(ct).setLayoutProperties({top:B});
}this.setBrightness(100-Math.round(B/2.56));
this.__pR=null;
},_onHueSaturationHandleMouseUp:function(e){if(this.__pT){e.stopPropagation();
this.getChildControl(cs).releaseCapture();
this.__pT=null;
}},_onHueSaturationHandleMouseMove:function(e){if(this.__pT===cs){this._setHueSaturationOnFieldEvent(e);
e.stopPropagation();
}},_onHueSaturationFieldMouseDown:function(e){var location=this.getChildControl(bV).getContainerLocation();
var N=this.getChildControl(cs).getBounds();
var O=this.getChildControl(bV).getBounds();
this.__pV=location.top+(N.height/2)-O.top;
this.__pW=location.left+(N.width/2)-O.left;
this._setHueSaturationOnFieldEvent(e);
this.getChildControl(cs).capture();
this.__pT=cs;
},_onHueSaturationPaneMouseWheel:function(e){this.setSaturation(qx.lang.Number.limit(this.getSaturation()+e.getWheelDelta(),0,100));
e.stop();
},_setHueSaturationOnFieldEvent:function(e){var b=qx.lang.Number.limit(e.getDocumentTop()-this.__pV,0,256);
var a=qx.lang.Number.limit(e.getDocumentLeft()-this.__pW,0,256);
this.getChildControl(cs).setDomPosition(a,b);
this.__pR=cn;
this.setSaturation(100-Math.round(b/2.56));
this.setHue(Math.round(a*1.40625));
this.__pR=null;
},_setRedFromSpinner:function(){if(this.__pR!==null){return;
}this.__pR=cq;
this.setRed(this.getChildControl(ck).getValue());
this.__pR=null;
},_setGreenFromSpinner:function(){if(this.__pR!==null){return;
}this.__pR=cq;
this.setGreen(this.getChildControl(bX).getValue());
this.__pR=null;
},_setBlueFromSpinner:function(){if(this.__pR!==null){return;
}this.__pR=cq;
this.setBlue(this.getChildControl(bR).getValue());
this.__pR=null;
},_setHueFromSpinner:function(){if(this.__pR!==null){return;
}this.__pR=cr;
this.setHue(this.getChildControl(bQ).getValue());
this.__pR=null;
},_setSaturationFromSpinner:function(){if(this.__pR!==null){return;
}this.__pR=cr;
this.setSaturation(this.getChildControl(bP).getValue());
this.__pR=null;
},_setBrightnessFromSpinner:function(){if(this.__pR!==null){return;
}this.__pR=cr;
this.setBrightness(this.getChildControl(bU).getValue());
this.__pR=null;
},_onHexFieldChange:function(e){if(this.__pR!==null){return;
}
try{var G=this.getChildControl(cA);
var F=qx.util.ColorUtil.hexStringToRgb(cu+G.getValue());
}catch(t){return;
}this.__pR=co;
this.setRed(F[0]);
this.setGreen(F[1]);
this.setBlue(F[2]);
this.__pR=null;
},_setHexFromRgb:function(){var P=qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(cA).setValue(P);
},_onColorFieldClick:function(e){var c=e.getTarget().getBackgroundColor();

if(!c){return this.error("Missing backgroundColor value for field: "+e.getTarget());
}var d=qx.util.ColorUtil.stringToRgb(c);
this.setRed(d[0]);
this.setGreen(d[1]);
this.setBlue(d[2]);
},_setHueFromRgb:function(){switch(this.__pR){case cr:case cn:case bW:break;
default:var u=qx.util.ColorUtil.rgbToHsb([this.getRed(),this.getGreen(),this.getBlue()]);
this.setHue(u[0]);
this.setSaturation(u[1]);
this.setBrightness(u[2]);
}},_setRgbFromHue:function(){switch(this.__pR){case cq:case co:break;
default:var C=qx.util.ColorUtil.hsbToRgb([this.getHue(),this.getSaturation(),this.getBrightness()]);
this.setRed(C[0]);
this.setGreen(C[1]);
this.setBlue(C[2]);
}},_setPreviewFromRgb:function(){var L=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bT).setBackgroundColor(L);
},setPreviousColor:function(S,T,U){var V=qx.util.ColorUtil.rgbToRgbString([S,T,U]);
this.getChildControl(bY).setBackgroundColor(V);
this.setRed(S);
this.setGreen(T);
this.setBlue(U);
},_setBrightnessGradiant:function(){var H=qx.util.ColorUtil;
var I=H.hsbToRgb([this.getHue(),this.getSaturation(),255]);
var J=H.rgbToRgbString(I);
this.getChildControl(cm).setBackgroundColor(J);
},_onAppear:function(e){var M=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bY).setBackgroundColor(M);
this.getChildControl(bT).setBackgroundColor(M);
}}});
})();
(function(){var W="textfield",V="",U="downbutton",T="upbutton",S="Number",R="inner",Q="PageUp",P="Boolean",O="changeValue",N="Down",bu="Up",bt="execute",bs="PageDown",br="changeLocale",bq="qx.dynlocale",bp="on",bo="_applyEditable",bn="_applyWrap",bm="keydown",bl="\-]",be="mousewheel",bf="_applyValue",bc="number",bd="_applyMinimum",ba="qx.util.format.NumberFormat",bb="[0-9",X="keyup",Y="spinner",bg="this._checkValue(value)",bh="_applyMaximum",bj="changeNumberFormat",bi="_applyNumberFormat",bk="qx.ui.form.Spinner";
qx.Class.define(bk,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(z,A,B){arguments.callee.base.call(this);
var C=new qx.ui.layout.Grid();
C.setColumnFlex(0,1);
C.setRowFlex(0,1);
C.setRowFlex(1,1);
this._setLayout(C);
this.addListener(bm,this._onKeyDown,this);
this.addListener(X,this._onKeyUp,this);
this.addListener(be,this._onMouseWheel,this);

if(qx.core.Variant.isSet(bq,bp)){qx.locale.Manager.getInstance().addListener(br,this._onChangeLocale,this);
}this._createChildControl(W);
this._createChildControl(T);
this._createChildControl(U);
if(z!=null){this.setMinimum(z);
}
if(B!=null){this.setMaximum(B);
}
if(A!==undefined){this.setValue(A);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:Y},focusable:{refine:true,init:true},singleStep:{check:S,init:1},pageStep:{check:S,init:10},minimum:{check:S,apply:bd,init:0},value:{check:bg,nullable:true,apply:bf,init:0,event:O},maximum:{check:S,apply:bh,init:100},wrap:{check:P,init:false,apply:bn},editable:{check:P,init:true,apply:bo},numberFormat:{check:ba,apply:bi,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__qb:null,__qc:false,__qd:false,_createChildControlImpl:function(u){var v;

switch(u){case W:v=new qx.ui.form.TextField();
v.setFilter(this._getFilterRegExp());
v.addState(R);
v.setWidth(40);
v.setFocusable(false);
v.addListener(O,this._onTextChange,this);
this._add(v,{column:0,row:0,rowSpan:2});
break;
case T:v=new qx.ui.form.RepeatButton();
v.addState(R);
v.setFocusable(false);
v.addListener(bt,this._countUp,this);
this._add(v,{column:1,row:0});
break;
case U:v=new qx.ui.form.RepeatButton();
v.addState(R);
v.setFocusable(false);
v.addListener(bt,this._countDown,this);
this._add(v,{column:1,row:1});
break;
}return v||arguments.callee.base.call(this,u);
},_getFilterRegExp:function(){var bz=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var by=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var bx=V;
var bv=V;

if(this.getNumberFormat()!==null){bx=this.getNumberFormat().getPrefix()||V;
bv=this.getNumberFormat().getPostfix()||V;
}var bw=new RegExp(bb+qx.lang.String.escapeRegexpChars(bz)+qx.lang.String.escapeRegexpChars(by)+qx.lang.String.escapeRegexpChars(bx)+qx.lang.String.escapeRegexpChars(bv)+bl);
return bw;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var j=this.getChildControl(W);
j.getFocusElement().focus();
j.selectAllText();
},_applyMinimum:function(n,o){if(this.getMaximum()<n){this.setMaximum(n);
}
if(this.getValue()<n){this.setValue(n);
}else{this._updateButtons();
}},_applyMaximum:function(f,g){if(this.getMinimum()>f){this.setMin(f);
}
if(this.getValue()>f){this.setValue(f);
}else{this._updateButtons();
}},_applyEnabled:function(I,J){arguments.callee.base.call(this,I,J);
this._updateButtons();
},_checkValue:function(k){return typeof k===bc&&k>=this.getMinimum()&&k<=this.getMaximum();
},_applyValue:function(p,q){var r=this.getChildControl(W);
this._updateButtons();
this.__qb=p;
if(p!==null){if(this.getNumberFormat()){r.setValue(this.getNumberFormat().format(p));
}else{r.setValue(p+V);
}}else{r.setValue(V);
}},_applyEditable:function(a,b){var c=this.getChildControl(W);

if(c){c.setReadOnly(!a);
}},_applyWrap:function(G,H){this._updateButtons();
},_applyNumberFormat:function(D,E){var F=this.getChildControl(W);
F.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(bj,this._onChangeNumberFormat,this);
this._applyValue(this.__qb,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(W);
},_updateButtons:function(){var x=this.getChildControl(T);
var w=this.getChildControl(U);
var y=this.getValue();

if(!this.getEnabled()){x.setEnabled(false);
w.setEnabled(false);
}else{if(this.getWrap()){x.setEnabled(true);
w.setEnabled(true);
}else{if(y!==null&&y<this.getMaximum()){x.setEnabled(true);
}else{x.setEnabled(false);
}if(y!==null&&y>this.getMinimum()){w.setEnabled(true);
}else{w.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case Q:this.__qc=true;
case bu:this.getChildControl(T).press();
break;
case bs:this.__qd=true;
case N:this.getChildControl(U).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case Q:this.getChildControl(T).release();
this.__qc=false;
break;
case bu:this.getChildControl(T).release();
break;
case bs:this.getChildControl(U).release();
this.__qd=false;
break;
case N:this.getChildControl(U).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var h=this.getChildControl(W);
var i;
if(this.getNumberFormat()){try{i=this.getNumberFormat().parse(h.getValue());
}catch(M){}}if(i===undefined){i=parseFloat(h.getValue(),10);
}if(!isNaN(i)){if(i>this.getMaximum()){h.setValue(this.getMaximum()+V);
return;
}else if(i<this.getMinimum()){h.setValue(this.getMinimum()+V);
return;
}this.setValue(i);
}else{this._applyValue(this.__qb,undefined);
}},_onChangeLocale:function(s){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var t=this.getChildControl(W);
t.setFilter(this._getFilterRegExp());
t.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(bA){var bB=this.getChildControl(W);
bB.setFilter(this._getFilterRegExp());
bB.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__qc){var L=this.getValue()+this.getPageStep();
}else{var L=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(L>this.getMaximum()){var K=this.getMaximum()-L;
L=this.getMinimum()+K;
}}this.gotoValue(L);
},_countDown:function(){if(this.__qd){var m=this.getValue()-this.getPageStep();
}else{var m=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(m<this.getMinimum()){var l=this.getMinimum()+m;
m=this.getMaximum()-l;
}}this.gotoValue(m);
},gotoValue:function(d){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),d)));
}},destruct:function(){if(qx.core.Variant.isSet(bq,bp)){qx.locale.Manager.getInstance().removeListener(br,this._onChangeLocale,this);
}}});
})();
(function(){var b="pane",a="qx.ui.container.Scroll";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){arguments.callee.base.call(this);

if(content){this.add(content);
}},members:{add:function(c){this.getChildControl(b).add(c);
},remove:function(d){this.getChildControl(b).remove(d);
},getChildren:function(){return this.getChildControl(b).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(b);
}}});
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
(function(){var n="checked",m="qx.ui.form.RadioGroup",l="Boolean",k="menu-radiobutton",j="_applyValue",i="qx.ui.menu.RadioButton",h="changeValue",g="_applyGroup",f="execute";
qx.Class.define(i,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(c,d){arguments.callee.base.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setMenu(d);
}this.addListener(f,this._onExecute,this);
},properties:{appearance:{refine:true,init:k},value:{check:l,nullable:true,event:h,apply:j,init:false},group:{check:m,nullable:true,apply:g}},members:{_applyValue:function(a,b){a?this.addState(n):this.removeState(n);
},_applyGroup:function(o,p){if(p){p.remove(this);
}
if(o){o.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var m="",l="Console",k="_consoleButton",j="_findField",i="&gt;",h="changeValue",g="_stack",f="execute",d="Filter...",c='"',E="'",D="&lt;",C=">",B="_consoleView",A="<",z="changeSelection",y="&amp;",x="&#39;",w="DOM",v="inspector.console.ConsoleWindow",t="_domButton",u="&quot;",r="&",s="?",p="Clear",q="_domView",n="_clearButton";
qx.Class.define(v,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,l);
this._clearButton=new qx.ui.toolbar.Button(p);
this._toolbar.add(this._clearButton);
this._clearButton.addListener(f,function(){this._stack.getSelection()[0].clear();
},this);
this._toolbar.add(new qx.ui.toolbar.Separator());
this._consoleButton=new qx.ui.toolbar.RadioButton(l);
this._toolbar.add(this._consoleButton);
this._domButton=new qx.ui.toolbar.RadioButton(w);
this._toolbar.add(this._domButton);
this._toolbar.addSpacer();
this._findField=new qx.ui.form.TextField();
this._findField.setPlaceholder(d);
this._findField.setLiveUpdate(true);
this._findField.setMarginRight(5);
this._toolbar.add(this._findField);
this._findField.addListener(h,function(e){this._stack.getSelection()[0].filter(e.getData());
},this);
this._stack=new qx.ui.container.Stack();
this.add(this._stack,{flex:1});
this._consoleView=new inspector.console.ConsoleView(this);
this._stack.add(this._consoleView,{flex:1});
this._domView=new inspector.console.DomView(this);
this._stack.add(this._domView,{flex:1});
var G=new qx.ui.form.RadioGroup(this._consoleButton,this._domButton);
G.addListener(z,function(e){this._findField.setValue(m);

if(G.getSelection()[0]==this._consoleButton){this._stack.setSelection([this._consoleView]);
}else if(G.getSelection()[0]==this._domButton){this._stack.setSelection([this._domView]);
}else{this._consoleButton.setValue(true);
}},this);
},members:{setInitSizeAndPosition:function(){var H=qx.bom.Viewport.getWidth()-300;
var I=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(0,2*I+30);
this.setWidth(H);
this.setHeight(I);
},escapeHtml:function(K){function L(M){switch(M){case A:return D;
case C:return i;
case r:return y;
case E:return x;
case c:return u;
}return s;
}return String(K).replace(/[<>&"']/g,L);
},inspectObjectByInternalId:function(F){var o=this._consoleView.getObjectById(F);
this.inspectObject(o);
},inspectObjectByDomSelecet:function(a,b){this._domView.setObjectByIndex(a,b);
this._findField.setValue(m);
},inspectObject:function(J){this._domView.setObject(J.object,J.name);
this._domButton.setValue(true);
},goToDefaultView:function(){this._consoleButton.setValue(true);
this._domView.clear();
}},destruct:function(){this._disposeObjects(n,k,t,j,g,B,q);
}});
})();
(function(){var p="_applyDynamic",o="changeSelection",n="Boolean",m="qx.ui.container.Stack";
qx.Class.define(m,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(o,this.__qe,this);
},properties:{dynamic:{check:n,init:false,apply:p}},members:{_applyDynamic:function(x){var z=this._getChildren();
var y=this.getSelection()[0];
var A;

for(var i=0,l=z.length;i<l;i++){A=z[i];

if(A!=y){if(x){z[i].exclude();
}else{z[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(h){return h.isEnabled();
},__qe:function(e){var f=e.getOldData()[0];
var g=e.getData()[0];

if(f){if(this.isDynamic()){f.exclude();
}else{f.hide();
}}
if(g){g.show();
}},add:function(q){this._add(q);
var r=this.getSelection()[0];

if(!r){this.setSelection([q]);
}else if(r!==q){if(this.isDynamic()){q.exclude();
}else{q.hide();
}}},remove:function(j){this._remove(j);

if(this.getSelection()[0]===j){var k=this._getChildren()[0];

if(k){this.setSelection([k]);
}else{this.resetSelection();
}}},indexOf:function(s){return this._indexOf(s);
},getChildren:function(){return this._getChildren();
},previous:function(){var v=this.getSelection()[0];
var t=this._indexOf(v)-1;
var w=this._getChildren();

if(t<0){t=w.length-1;
}var u=w[t];
this.setSelection([u]);
},next:function(){var b=this.getSelection()[0];
var a=this._indexOf(b)+1;
var c=this._getChildren();
var d=c[a]||c[0];
this.setSelection([d]);
}}});
})();
(function(){var r="",q=")",p="Tab",o="'>",n="qx.core.Init.getApplication().inspectObjectByInternalId(",m="Down",l="Up",k="warning",j="error",h="Control",br="info",bq="(",bp="<span class='ins_console_link' onclick='",bo="display",bn="<div class='ins_console_common'><div class='",bm="Escape",bl="Enter",bk="ins_console_warn",bj="]</span> ",bi="ins_console_return_qxobject",y="changeValue",z="qx.client",w="keydown",x="Courier New",u=", ...",v="' class='ins_console_icon'>",s="\"qx.core.Init.getApplication().setWidgetByHash('",t="<img src='",E="ins_console_return_primitive",F="ins_console_debug",N="&nbsp;",L="<span class='ins_console_dom_link' onclick='",V="input",Q="Space",be=">>>&nbsp;",bb="ins_console_text",H="middle",bh=" more",bg="<span class='ins_console_link' onclick=",bf="ins_console_error",G="inspector.console.ConsoleView",J="ins_console_info",K=" </span>",M="</div></div>",O="]",R="[",X="inspector/images/shell/",bd=", ",A="keyup",B="ins_console_return_object",I="ins_console_return_array",U="</span>",T="mshtml",S="'>inspect Object</span>",ba="keypress",Y="none",P="', 'console');\"> ",W=" [",g=">>>",bc=".",C="Icon.png",D="scroll";
qx.Class.define(G,{extend:qx.ui.core.Widget,construct:function(console){arguments.callee.base.call(this);
this._console=console;
this._autoCompletePopup=new inspector.console.AutoCompletePopup(this);
this._history=[];
this._historyCounter=-1;
this._objectFolder=[];
this._objectFolderIndex=0;
this._filter=r;
this._setLayout(new qx.ui.layout.VBox());
this._content=new qx.ui.embed.Html(r);
this._content.setOverflowY(D);
this._add(this._content,{flex:1});
var bL=new qx.ui.container.Composite();
bL.setDecorator(V);
var bM=new qx.ui.layout.HBox();
bM.setAlignY(H);
bL.setLayout(bM);
this._add(bL);
var bK=new qx.ui.basic.Label(g);
var bJ=new qx.bom.Font(12,[x]);
bK.setFont(bJ);
bL.add(bK);
this._inputTextField=new qx.ui.form.TextField(r);
this._inputTextField.setLiveUpdate(true);
this._inputTextField.setDecorator(null);
this._inputTextField.setFont(bJ);
bL.add(this._inputTextField,{flex:1});
this._inputTextField.addListener(w,this._keyDownHandler,this);
this._inputTextField.addListener(A,this._keyUpHandler,this);
this._inputTextField.addListener(ba,this._keyPressHandler,this);
this._inputTextField.addListener(y,function(e){if(this._autoCompletePopup.isOnScreen()){this._autoCompletePopup.load(e.getData());
}},this);
var bN=qx.core.Init.getApplication().getIframeWindowObject();
bN.qx.log.Logger.register(inspector.console.Appender);
inspector.console.Appender.consoleView=this;
},members:{clear:function(){this._content.setHtml(r);
},getObjectById:function(bs){return this._objectFolder[bs];
},filter:function(bV){this._filter=bV;
try{var bX=this._content.getContentElement().getDomElement().childNodes;
var bW=new RegExp(this._filter);
for(var i=0;i<bX.length;i++){if(qx.core.Variant.isSet(z,T)){var content=bX[i].innerText;
}else{var content=bX[i].textContent;
}if(qx.dom.Node.isElement(bX[i])){if(bW.test(content)){qx.bom.element.Style.set(bX[i],bo,null);
}else{qx.bom.element.Style.set(bX[i],bo,Y);
}}}}catch(e){alert("Unable to filter: "+e);
}},chooseAutoCompleteValue:function(){var bI=this._inputTextField.getValue();
var name=this._autoCompletePopup.getCurrentSelection();
if(name){var bH=bI.substring(bI.lastIndexOf(bc)+1);
name=name.substring(bH.length,name.length);
this.appendString(name);
}this._autoCompletePopup.hide();
this._inputTextField.focus();
},appendString:function(a){if(a!=null){this._inputTextField.setValue(this._inputTextField.getValue()+a);
if(this._inputTextField.getValue().lastIndexOf(bq)!=-1){var b=this._inputTextField.getValue().lastIndexOf(bq)+1;
var c=this._inputTextField.getValue().length-1;
this._inputTextField.setTextSelection(b,c);
}}},_process:function(bF){this._printText(this._console.escapeHtml(bF));

try{var bG=inspector.console.Util.evalOnIframe(bF);

if(bG!=null){this._objectFolder[this._objectFolderIndex]={name:bF,object:bG};
this._printReturnValue(bG);
this._objectFolderIndex++;
}}catch(bu){this.error(bu);
}},_keyDownHandler:function(e){if(e.getKeyIdentifier()==bm){this._autoCompletePopup.hide();
return;
}if(e.getKeyIdentifier()==bl){if(!this._autoCompletePopup.isOnScreen()){this._history.unshift(this._inputTextField.getValue());
this._process(this._inputTextField.getValue());
this._inputTextField.setValue(r);
this._historyCounter=-1;
if(this._history.length>20){this._history.pop();
}}else{this.chooseAutoCompleteValue();
}return;
}if(e.getKeyIdentifier()==l){e.preventDefault();
if(!this._autoCompletePopup.isOnScreen()){if(this._history[this._historyCounter+1]!=undefined){this._historyCounter++;
this._inputTextField.setValue(this._history[this._historyCounter]);
}}return;
}if(e.getKeyIdentifier()==m){e.preventDefault();
if(!this._autoCompletePopup.isOnScreen()){if(this._historyCounter>0){this._historyCounter--;
this._inputTextField.setValue(this._history[this._historyCounter]);
}}return;
}if(e.getKeyIdentifier()==h){this._ctrl=true;
return;
}if(e.getKeyIdentifier()==Q||e.getKeyIdentifier()==p){if(this._ctrl||e.getKeyIdentifier()==p){e.preventDefault();
if(e.getKeyIdentifier()==p){var self=this;
window.setTimeout(function(){var length=self._inputTextField.getValue().length;
self._inputTextField.setTextSelection(length,length);
},0);
}try{var bA=qx.bom.element.Location.getLeft(this.getContainerElement().getDomElement());
var top=qx.bom.element.Location.getTop(this._inputTextField.getContentElement().getDomElement())-this._autoCompletePopup.getHeight();
this._autoCompletePopup.open(this._inputTextField.getValue(),bA,top);
var self=this;
window.setTimeout(function(){self._inputTextField.focus();
},0);
}catch(bt){this.info(bt);
}}return;
}},_keyUpHandler:function(e){if(e.getKeyIdentifier()==h){this._ctrl=false;
}},_keyPressHandler:function(e){if(this._autoCompletePopup.isOnScreen()){if(e.getKeyIdentifier()==m){this._autoCompletePopup.selectionDown();
}else if(e.getKeyIdentifier()==l){this._autoCompletePopup.selectionUp();
}}},_scrollToLastLine:function(){qx.ui.core.queue.Manager.flush();
var self=this;
window.setTimeout(function(){var bz=self._content.getContentElement();
var by=qx.bom.element.Dimension.getContentHeight(self._content.getContentElement().getDomElement());
bz.scrollToY(by);
},0);
},_printReturnValue:function(cf){var cg=qx.core.Init.getApplication().getIframeWindowObject();
if(cg&&cf instanceof cg.qx.core.Object){this._printQxObject(cf);
}else if(cf instanceof cg.Array){var ch=this._printArray(cf);
var ci=this._getLabel(bp+n+this._objectFolderIndex+q+o+ch+U,I);
this._content.setHtml(this._content.getHtml()+ci);
return;
}else if(cg&&(cf instanceof cg.Object||cf==cg.window||cf==cg.document)){var ci=this._getLabel(bp+n+this._objectFolderIndex+q+o+cf+K,B);
this._content.setHtml(this._content.getHtml()+ci);
return;
}else{var ci=this._getLabel(cf,E);
this._content.setHtml(this._content.getHtml()+ci);
}this._scrollToLastLine();
},_printQxObject:function(cd){var ce=this._getLabel(bg+s+cd.toHashCode()+P+cd.classname+W+cd.toHashCode()+bj+L+n+this._objectFolderIndex+q+S,bi);
this._content.setHtml(this._content.getHtml()+ce);
this._scrollToLastLine();
},_printText:function(bY){var ca=this._getLabel(be+bY,bb);
this._content.setHtml(this._content.getHtml()+ca);
this._scrollToLastLine();
},_getLabel:function(bQ,bR,bS){var bQ=bQ;
if(bS==br||bS==j||bS==k){var bU=qx.util.ResourceManager.getInstance().toUri(X+bS+C);
var bT=t+bU+v;
bQ=bT+N+bQ;
}bQ=bn+bR+o+bQ+M;
return bQ;
},_printArray:function(bB){var bC=qx.core.Init.getApplication().getIframeWindowObject();

if(bB instanceof bC.Array){var bD=new qx.util.StringBuilder();
var length=bB.length;
var bE=r;

if(length>2){bE=u+(length-2)+bh;
length=2;
}
for(var i=0;i<length;i++){if(!bD.isEmpty()){bD.add(bd);
}bD.add(this._printArray(bB[i]));
}return R+bD.get()+bE+O;
}else{return bB;
}},error:function(bw){if(!this._console.isVisible()){this._console.open();
}var bx=this._getLabel(bw,bf,j);
this._content.setHtml(this._content.getHtml()+bx);
this._scrollToLastLine();
},warn:function(bO){if(!this._console.isVisible()){this._console.open();
}var bP=this._getLabel(bO,bk,k);
this._content.setHtml(this._content.getHtml()+bP);
this._scrollToLastLine();
},info:function(d){if(!this._console.isVisible()){this._console.open();
}var f=this._getLabel(d,J,br);
this._content.setHtml(this._content.getHtml()+f);
this._scrollToLastLine();
},debug:function(cb){if(!this._console.isVisible()){this._console.open();
}var cc=this._getLabel(cb,F);
this._content.setHtml(this._content.getHtml()+cc);
this._scrollToLastLine();
},dispose:function(){var bv=qx.core.Init.getApplication().getIframeWindowObject();
bv.qx.log.Logger.unregister(inspector.console.Appender);
}}});
})();
(function(){var A="",z="18.gif",y="%",x=".",w="function",v="#FFFFFF",u="inspector/images/autocomplete/property_",t="qx.ui.table.pane.Pane",s="_table",r="inspector/images/autocomplete/method_",O="visible",N="^",M="__",L="public",K=")",J="_",I="(",H="_tableModel",G="inspector.console.AutoCompletePopup",F=", ",D="private",E="click",B="protected",C="window.";
qx.Class.define(G,{extend:qx.ui.popup.Popup,construct:function(R){arguments.callee.base.call(this);
this._controller=R;
this.setLayout(new qx.ui.layout.VBox());
this.setBackgroundColor(v);
this.setHeight(140);
this.setWidth(300);
qx.core.Init.getApplication().getRoot().add(this);
this._tableModel=new qx.ui.table.model.Simple();
this._tableModel.setColumns([A,w]);
this._table=new qx.ui.table.Table(this._tableModel);
this._table.setWidth(298);
this._table.setHeight(138);
this._table.setShowCellFocusIndicator(false);
this._table.setColumnVisibilityButtonVisible(false);
this._table.setStatusBarVisible(false);
this._table.getTableColumnModel().setColumnWidth(0,22);
this._table.getTableColumnModel().setColumnWidth(1,260);
var S=new qx.ui.table.cellrenderer.Image(18,18);
this._table.getTableColumnModel().setDataCellRenderer(0,S);
this._table.setRowHeight(20);
this.add(this._table);
this._table.addListener(E,function(e){if(e.getTarget().classname==t){this._controller.chooseAutoCompleteValue();
}},this);
},members:{selectionUp:function(){var g=this._table.getSelectionModel().getLeadSelectionIndex();
if(g>0){g--;
}else{g=this._tableModel.getData().length-1;
}this._table.getSelectionModel().addSelectionInterval(g,g);
this._table.setFocusedCell(0,g,true);
},selectionDown:function(){var c=this._table.getSelectionModel().getLeadSelectionIndex();
var d=this._tableModel.getData().length-1;
if(c!=d){c++;
}else{c=0;
}this._table.getSelectionModel().addSelectionInterval(c,c);
this._table.setFocusedCell(0,c,true);
},open:function(a,b,top){this.moveTo(b,top);
this.show();
this.load(a);
},load:function(h){var i=qx.core.Init.getApplication().getIframeWindowObject();
this._table.getSelectionModel().setSelectionInterval(0,0);
this._table.setFocusedCell(0,0,true);
this._tableModel.setData([]);
var n=h.substring(h.lastIndexOf(x)+1);
if(h==n){h=C+h;
}h=h.substring(0,h.lastIndexOf(x));
var l=null;

try{l=inspector.console.Util.evalOnIframe(h);
}catch(P){this.hide();
return;
}if(!(l instanceof i.Object)&&!l==i.window){this.hide();
return ;
}if(l instanceof i.qx.core.Object){this._tableModel.setColumnNamesByIndex([A,l.classname]);
}else{this._tableModel.setColumnNamesByIndex([A,h]);
}var o=new RegExp(N+n);
var p=[];
for(var name in l){try{if(o.test(name)){if(name.substring(0,2)==M){var m=D;
}else if(name.substring(0,1)==J){var m=B;
}else{var m=L;
}if(l[name] instanceof i.Function){var q=name+I;
for(var j=0;j<l[name].length;j++){if(j==l[name].length-1){q+=unescape(y+(61+j));
}else{q+=unescape(y+(61+j)+F);
}}q+=K;
var k=r+m+z;
p.push([k,q]);
}else{var k=u+m+z;
p.push([k,name]);
}}}catch(Q){}}
if(p.length<1){this._table.resetSelection();
}this._tableModel.setData(p);
this._tableModel.sortByColumn(1,true);
},isOnScreen:function(){return this.getVisibility()==O;
},getCurrentSelection:function(){var f=this._table.getSelectionModel().getLeadSelectionIndex();
if(f!=-1){return this._tableModel.getData()[f][1]+A;
}return null;
}},destruct:function(){this._controller=null;
this._disposeObjects(H,s);
}});
})();
(function(){var s="px",r=".qooxdoo-table-cell-icon {",q="abstract",p="",o="qx.ui.table.cellrenderer.AbstractImage",n=" qooxdoo-table-cell-icon",m="<div></div>",l="'",k="no-repeat",j="}",d="  text-align:center;",i="inline-block",g="static",c="top",b="  padding-top:1px;",f="title='",e="string",h="-moz-inline-box";
qx.Class.define(o,{extend:qx.ui.table.cellrenderer.Abstract,type:q,construct:function(){arguments.callee.base.call(this);
var v=arguments.callee.self;

if(!v.stylesheet){v.stylesheet=qx.bom.Stylesheet.createElement(r+d+b+j);
}},members:{__qf:16,__qg:16,_insetY:2,__qh:null,_identifyImage:function(A){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(x){var y=this._identifyImage(x);
if(y==null||typeof x==e){y={url:y,tooltip:null};
}
if(x.width&&x.height){var z={width:x.imageWidth,height:x.imageHeight};
}else{z=this.__qi(y.url);
}y.width=z.width;
y.height=z.height;
return y;
},__qi:function(D){var G=qx.util.ResourceManager.getInstance();
var F=qx.io.ImageLoader;
var E,H;
if(G.has(D)){E=G.getImageWidth(D);
H=G.getImageHeight(D);
}else if(F.isLoaded(D)){E=F.getWidth(D);
H=F.getHeight(D);
}else{E=this.__qf;
H=this.__qg;
}return {width:E,height:H};
},createDataCellHtml:function(t,u){this.__qh=this._getImageInfos(t);
return arguments.callee.base.call(this,t,u);
},_getCellClass:function(w){return arguments.callee.base.call(this)+n;
},_getContentHtml:function(a){var content=m;
if(this.__qh.url){var content=qx.bom.element.Decoration.create(this.__qh.url,k,{width:this.__qh.width+s,height:this.__qh.height+s,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?h:i,verticalAlign:c,position:g});
}return content;
},_getCellAttributes:function(B){var C=this.__qh.tooltip;

if(C){return f+C+l;
}else{return p;
}}},destruct:function(){this.__qh=null;
}});
})();
(function(){var b="qx.ui.table.cellrenderer.Image",a="";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(c,d){arguments.callee.base.call(this);

if(c){this.__qj=c;
}
if(d){this.__qk=d;
}this.__ql=qx.util.AliasManager.getInstance();
},members:{__ql:null,__qk:16,__qj:16,_identifyImage:function(e){var f={imageWidth:this.__qj,imageHeight:this.__qk};

if(e.value==a){f.url=null;
}else{f.url=this.__ql.resolve(e.value);
}f.tooltip=e.tooltip;
return f;
}},destruct:function(){this.__ql=null;
}});
})();
(function(){var r="qx.client",q="",p="');",o="webkit",n="webkit|mshtml|gecko",m="  } catch (ex) {",l="inspector.console.Util",k="  }",j="mshtml",i="  try {",c="return eval('",h="};",f="window.top.inspector.$$inspector = function()",b="{",a="    return ex;",e="opera",d="$2",g="return eval.call(window, '";
qx.Class.define(l,{statics:{evalOnIframe:function(u){var v=qx.core.Init.getApplication().getIframeWindowObject();
var x=null;

try{if(qx.core.Variant.isSet(r,n)){if(qx.core.Variant.isSet(r,j)||qx.core.Variant.isSet(r,o)){u=u.replace(/^(\s*var\s+)(.*)$/,d);
}var w=q;
if(qx.core.Variant.isSet(r,o)&&qx.bom.client.Engine.FULLVERSION>=528){w=c+u+p;
}else{w=g+u+p;
}v.qx.lang.Function.globalEval([f,b,i,w,m,a,k,h].join(q));
x=inspector.$$inspector.call(qx.core.Init.getApplication().getSelectedObject());
}else if(qx.core.Variant.isSet(r,e)){x=(function(s){return v.eval(s);
}).call(qx.core.Init.getApplication().getSelectedObject(),u);
}if(x instanceof v.Error){throw x;
}}catch(t){throw t;
}return x;
}}});
})();
(function(){var s="none",r="text",q="",p="userSelect",o="color",n="String",m="0px",l="webkit",k="changeHtml",j="_applyCssClass",g="class",i="qx.ui.embed.Html",h="_applyHtml",f="qx.client",e="html";
qx.Class.define(i,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(d){arguments.callee.base.call(this);

if(d!=null){this.setHtml(d);
}},properties:{html:{check:n,apply:h,event:k,nullable:true},cssClass:{check:n,init:q,apply:j},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(x,y){var z=this.getContentElement();
z.setAttribute(e,x||q);
z.setStyles({"padding":m,"border":s});
},_applyCssClass:function(t,u){this.getContentElement().setAttribute(g,t);
},_applySelectable:function(A){arguments.callee.base.call(this,A);
if(qx.core.Variant.isSet(f,l)){this.getContainerElement().setStyle(p,A?r:s);
this.getContentElement().setStyle(p,A?r:s);
}},_applyFont:function(a,b){var c=a?qx.theme.manager.Font.getInstance().resolve(a).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(c);
},_applyTextColor:function(v,w){if(v){this.getContentElement().setStyle(o,qx.theme.manager.Color.getInstance().resolve(v));
}else{this.getContentElement().removeStyle(o);
}}}});
})();
(function(){var q=": ",p=", ",o="info",n="{ ",m="]: ",l="ms ",k=" ]",h="map",g="warn",f=" }",c="[ ",e="[",d="inspector.console.Appender",b="string",a="error";
qx.Class.define(d,{statics:{consoleView:null,process:function(D){if(this.consoleView){var E=this.__qm(D);

if(D.level==o){this.consoleView.info(E);
}else if(D.level==g){this.consoleView.warn(E);
}else if(D.level==a){this.consoleView.error(E);
}else{this.consoleView.debug(E);
}}},__qm:function(r){var u=qx.core.Init.getApplication().getIframeWindowObject();
var B=new qx.util.StringBuilder();
var y,A,t,w;
B.add(r.offset,l);

if(r.object){var s=u.qx.core.ObjectRegistry.fromHashCode(r.object);

if(s){B.add(s.classname,e,s.$$hash,m);
}}else if(r.clazz){B.add(r.clazz.classname,q);
}var v=r.items;

for(var i=0,z=v.length;i<z;i++){y=v[i];
A=y.text;

if(A instanceof u.Array){var w=[];

for(var j=0,x=A.length;j<x;j++){t=A[j];

if(typeof t===b){w.push(this.__qn(t));
}else if(t.key){w.push(t.key+q+this.__qn(t.text));
}else{w.push(this.__qn(t.text));
}}
if(y.type===h){B.add(n,w.join(p),f);
}else{B.add(c,w.join(p),k);
}}else{B.add(this.__qn(A));
}}return B.get();
},__qn:function(C){return this.consoleView._console.escapeHtml(C);
}}});
})();
(function(){var l="mshtml",k="pop.push.reverse.shift.sort.splice.unshift.join.slice",j="number",h="qx.type.BaseArray",g="qx.client",f=".";
qx.Class.define(h,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function u(a){if(qx.core.Variant.isSet(g,l)){t.prototype={length:0,$$isArray:true};
var d=k.split(f);

for(var length=d.length;length;){t.prototype[d[--length]]=Array.prototype[d[length]];
}}var e=Array.prototype.slice;
t.prototype.concat=function(){var n=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var m;

if(arguments[i] instanceof t){m=e.call(arguments[i],0);
}else if(arguments[i] instanceof Array){m=arguments[i];
}else{m=[arguments[i]];
}n.push.apply(n,m);
}return n;
};
t.prototype.toString=function(){return e.call(this,0).toString();
};
t.prototype.toLocaleString=function(){return e.call(this,0).toLocaleString();
};
t.prototype.constructor=t;
t.prototype.indexOf=qx.lang.Core.arrayIndexOf;
t.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
t.prototype.forEach=qx.lang.Core.arrayForEach;
t.prototype.some=qx.lang.Core.arraySome;
t.prototype.every=qx.lang.Core.arrayEvery;
var b=qx.lang.Core.arrayFilter;
var c=qx.lang.Core.arrayMap;
t.prototype.filter=function(){var p=new this.constructor;
p.push.apply(p,b.apply(this,arguments));
return p;
};
t.prototype.map=function(){var q=new this.constructor;
q.push.apply(q,c.apply(this,arguments));
return q;
};
t.prototype.slice=function(){var o=new this.constructor;
o.push.apply(o,Array.prototype.slice.apply(this,arguments));
return o;
};
t.prototype.splice=function(){var r=new this.constructor;
r.push.apply(r,Array.prototype.splice.apply(this,arguments));
return r;
};
t.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
t.prototype.valueOf=function(){return this.length;
};
return t;
}function t(length){if(arguments.length===1&&typeof length===j){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function s(){}s.prototype=[];
t.prototype=new s;
t.prototype.length=0;
qx.type.BaseArray=u(t);
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
(function(){var A="",z="'>",y="inspector/images/spacer.gif",x="</td></tr>",w="</td>",v="</span>",u="'><img class='ins_dom_front_image' src='",t="qx.core.Init.getApplication().inspectObjectByDomSelecet(",s="<tr><td class='",r="</div>",bC=")",bB="</span></td></tr>",bA="string",bz="<div class='ins_dom_no_prop'>No object selected.</div>",by="<td><span class='ins_dom_null'>",bx="\")",bw="<td class='ins_dom_object'>",bv=", \"",bu="<tr><td class='ins_dom_key'><img class='ins_dom_front_image' src='",bt=".",H="<div class='ins_dom_func'>",I=" &raquo; <span class='ins_dom_return_path_link' onclick='",F="<div class='ins_dom_return_path_main'>",G="<td class='ins_dom_self_ref'>self reference</td></tr>",D="<table class='ins_dom_table'>",E=" more</span> ]",B="'><a onclick='",C="&quot;</span>",N="<td class='ins_dom_string'>&quot;Error occurs by reading value!&quot;</td></tr>",O="Object",Y="inspector/images/open.png",V="', 'console');\">select Object</u>",bh="toString",bc=", ",bp="<a onclick='",bm="<td class='ins_dom_string'>&quot;",R="<td class='ins_dom_basic'>",bs="ins_dom_key_number",br="<td class='ins_dom_func_object'>",bq="<span class='ins_dom_func_object'>function()</span>",Q=")'>",T="</a>",U=" ]",X="</a></td>",ba="<span class='ins_dom_basic'>",bd="<div class='ins_dom_no_prop'>There are no properties to show for this object.</div>",bj="&quot;</td></tr>",bo="_htmlEmbed",J="ins_dom_key",K="</table>",S="</a> <a style='color: #000000;' onclick=\"qx.core.Init.getApplication().setWidgetByHash('",bg="<span class='ins_dom_object'>",bf=" &raquo; <span class='ins_dom_return_path_selected'>",be=", ... <span class='ins_dom_array_more'>",bl="[Class ",bk="qx_srcview",bb="[ ",bi="Error occurs by reading value!",n="<pre>",bn="appear",L="]</span>",M="scroll",W="<span class='ins_dom_string'>&quot;",p="</pre>",q="inspector.console.DomView",P="<span class='ins_dom_object'>[";
qx.Class.define(q,{extend:qx.ui.core.Widget,statics:{SEARCH_TERM:"Search..."},construct:function(console){arguments.callee.base.call(this);
this._console=console;
this._filter=A;
this._setLayout(new qx.ui.layout.VBox());
this._htmlEmbed=new qx.ui.embed.Html(bz);
this._htmlEmbed.setOverflowY(M);
this._add(this._htmlEmbed,{flex:1});
this.addListenerOnce(bn,function(){this._htmlEmbed.getContentElement().getDomElement().id=bk;
},this);
this._breadCrumb=[];
},members:{clear:function(){this._htmlEmbed.setHtml(bz);
},setObject:function(bL,name){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
this._breadCrumb=[];
var bN=name.split(bt);
for(var i=0;i<bN.length-1;i++){var bO=A;
for(var j=0;j<=i;j++){bO+=bN[j];
if(j!=i){bO+=bt;
}}var bM=eval(bO);
this._breadCrumb[i]={object:bM,name:bN[i]};
}name=bN[bN.length-1];
this._htmlEmbed.setHtml(this._getHtmlToObject(bL,i,name));
},setObjectByIndex:function(bG,bH){this._filter=A;

try{if(bH){var bJ=this._breadCrumb[bG].object[bH];
for(var i=0;i<this._breadCrumb.length;i++){if(this._breadCrumb[i].object==bJ){this._htmlEmbed.setHtml(this._getHtmlToObject(bJ,i,bH));
this._htmlEmbed.getContentElement().scrollToY(0);
return ;
}}this._htmlEmbed.setHtml(this._getHtmlToObject(bJ,(bG)+1,bH));
this._htmlEmbed.getContentElement().scrollToY(0);
}else{var bJ=this._breadCrumb[bG].object;
var bI=this._breadCrumb[bG].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(bJ,bG,bI));
this._htmlEmbed.getContentElement().scrollToY(0);
this._breadCrumb.splice(bG+1,this._breadCrumb.length-bG+1);
}}catch(e){alert("Can not select this Object: "+e);
}},filter:function(bP){this._filter=bP;
if(this._breadCrumb.length>0){var bQ=this._breadCrumb.length-1;
var bR=this._breadCrumb[bQ].object;
var name=this._breadCrumb[bQ].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(bR,bQ,name));
}},getFilter:function(){if(this._filter==A){return inspector.console.DomView.SEARCH_TERM;
}else{return this._filter;
}},getCurrentSelectedClassname:function(){if(this._breadCrumb.length>0){var bK=this._breadCrumb[this._breadCrumb.length-1].object;
if(bK.classname!=undefined){if(qx.Class.isDefined(bK.classname)||qx.Interface.isDefined(bK.classname)||qx.Mixin.isDefined(bK.classname)||qx.Theme.isDefined(bK.classname)){return bK.classname;
}}}return null;
},_getHtmlToObject:function(o,bU,name){var bY=new qx.util.StringBuilder();
if(name==undefined){var name=O;
}this._breadCrumb[bU]={object:o,name:name};
bY.add(this._getReturnPath(bU));
var cb=true;
var cd=this._sortAndFilterProperties(o);
bY.add(D);
for(var i=0;i<cd.length;i++){cb=false;
bY.add(A);
if(!isNaN(cd[i].key)){var bV=bs;
}else{var bV=J;
}try{cd[i].value instanceof this._iFrameWindow.Object;
}catch(bF){var bX=qx.util.ResourceManager.getInstance().toUri(y);
bY.add(s+bV+u+bX+z+this._console.escapeHtml(cd[i].key)+w);
bY.add(by+cd[i].value+bB);
continue;
}if(!(cd[i].value instanceof this._iFrameWindow.Object)&&cd[i].value!=this._iFrameWindow.window&&cd[i].value!=this._iFrameWindow.document){var bX=qx.util.ResourceManager.getInstance().toUri(y);
bY.add(s+bV+u+bX+z+this._console.escapeHtml(cd[i].key)+w);
if(cd[i].value==null){bY.add(by+cd[i].value+bB);
}else if(typeof cd[i].value==bA){bY.add(bm+this._console.escapeHtml(cd[i].value)+bj);
}else{bY.add(R+cd[i].value+x);
}}else{if(cd[i].value instanceof this._iFrameWindow.Function){var bW=cd[i].value.toString();
if(bW.search(/native code/)!=-1){continue;
}}var cc=null;

if(cc==null){cc=new qx.util.StringBuilder();
}else{cc.clear();
}if(cd[i].value!=o){var bX=qx.util.ResourceManager.getInstance().toUri(Y);
cc.add(s+bV+B+t+bU+bv+cd[i].key+bx+u+bX+z+this._console.escapeHtml(cd[i].key)+X);
}if(cd[i].value==o){var bX=qx.util.ResourceManager.getInstance().toUri(y);
bY.add(bu+bX+z+cd[i].key+w);
bY.add(G);
}else if(cd[i].value instanceof this._iFrameWindow.Function){bY.add(cc.get());
if(cd[i].value.toString().substr(0,7)==bl){bY.add(bw+this._getObject(cd[i].value,bU,cd[i].key)+x);
}else{bY.add(br+this._getObject(cd[i].value,bU,cd[i].key)+x);
}}else{try{var ca=this._getObject(cd[i].value,bU,cd[i].key);
bY.add(cc.get());
bY.add(bw+ca+x);
}catch(m){var bX=qx.util.ResourceManager.getInstance().toUri(y);
bY.add(bu+bX+z+cd[i].key+w);
bY.add(N);
}}}}bY.add(K);
if(cb){bY.add(bd);
}bY.add(this._getFunctionCode(o));
return bY.get();
},_getFunctionCode:function(o){if(o instanceof this._iFrameWindow.Function&&!o.hasOwnProperty(bh)){var bE=o.toString();
bE=n+qx.dev.Tokenizer.javaScriptToHtml(bE)+p;
return H+bE+r;
}else{return A;
}},_sortAndFilterProperties:function(o){if(this._filter!=A){try{var h=new RegExp(this._filter);
}catch(e){alert("Unable to filter: "+e);
}}var k=[];
for(var l in o){try{if(h!=null){if(h.test(l)){k.push({key:l,value:o[l]});
}}else{k.push({key:l,value:o[l]});
}}catch(bD){k.push({key:l,value:bi});
}}k.sort(function(a,b){if(isNaN(a.key)||isNaN(b.key)){return ((a.key<b.key)?-1:((a.key>b.key)?1:0));
}else{return a.key-b.key;
}});
return k;
},_getReturnPath:function(bS){var bT=new qx.util.StringBuilder();
bT.add(F);
for(var i=0;i<=bS;i++){if(i==bS){bT.add(bf);
}else{bT.add(I+t+i+Q);
}bT.add(this._breadCrumb[i].name);
bT.add(v);
}bT.add(r);
return bT.get();
},_getObject:function(c,d,f){var g=new qx.util.StringBuilder();
g.add(bp+t+d+bv+f+bx+z);
if(c instanceof this._iFrameWindow.Function){if(c.toString().indexOf(bC)!=-1){g.add(c.toString().substring(0,c.toString().indexOf(bC)+1));
}else{g.add(c.toString());
}}else if(c instanceof this._iFrameWindow.Array){g.add(bb);
for(var j=0;j<2&&j<c.length;j++){if(c[j] instanceof this._iFrameWindow.Function){g.add(bq);
}else if(typeof c[j]==bA){g.add(W+c[j]+C);
}else if(c[j] instanceof this._iFrameWindow.Array){g.add(P+c[j]+L);
}else if(c[j] instanceof this._iFrameWindow.Object){g.add(bg+c[j]+v);
}else{g.add(ba+c[j]+v);
}if(j!=1&&j!=c.length-1){g.add(bc);
}}if(c.length>2){g.add(be+(c.length-2)+E);
}else{g.add(U);
}}else if(c instanceof this._iFrameWindow.qx.core.Object){g.add(c+S+c.toHashCode()+V);
}else{g.add(c);
}g.add(T);
return g.get();
}},destruct:function(){this._console=this._breadCrumb=null;
this._disposeObjects(bo);
}});
})();
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bi){var bM={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bz={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bl={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bv=function(bh){return new RegExp(s+bh+u);
};
var bF=L;
var bw=N;
var bp=p;
var by=n;
var bt=I;
var bB=t;
var bA=v;
var bn=D;
var bI=Y;
var bK=W;
var bu=T;
var bx=[O+bu+M,H+bu+B,w+bu+S,P+bu+X,C+bu+r].join(bc);
var bG=bv(bF);
var bq=bv(bw);
var bD=bv(bp);
var bm=bv(by);
var bJ=bv(bt);
var bs=bv(bB);
var bk=bv(bA);
var bE=bv(bn);
var br=bv(bI);
var bj=bv(bK);
var bo=bv(bx);
var bC=new RegExp([bF,bw,bp,by,bt,bB,bA,bA,bn,bI,bK,bx,y].join(bc),G);
var bH=[];
var a=bi.match(bC);

for(var i=0;i<a.length;i++){var bL=a[i];

if(bL.match(bG)){bH.push({type:b,value:bL});
}else if(bL.match(bq)){bH.push({type:bb,value:bL});
}else if(bL.match(bo)){bH.push({type:be,value:bL});
}else if(bL.match(bk)){bH.push({type:c,value:bL});
}else if(bL.match(bs)){bH.push({type:e,value:bL});
}else if(bM[bL]){bH.push({type:bf,value:bL});
}else if(bz[bL]){bH.push({type:ba,value:bL});
}else if(bl[bL]){bH.push({type:h,value:bL});
}else if(bL.match(bD)){bH.push({type:bg,value:bL});
}else if(bL.match(bJ)){bH.push({type:q,value:bL});
}else if(bL.match(bm)){bH.push({type:z,value:bL});
}else if(bL.match(br)){bH.push({type:j,value:bL});
}else if(bL.match(bv(bj))){bH.push({type:g,value:bL});
}else if(bL.match(bE)){bH.push({type:A,value:bL});
}else if(bL==f){bH.push({type:k,value:f});
}else if(bL==d){bH.push({type:k,value:d});
}else if(bL==bd){bH.push({type:k,value:bd});
}else{bH.push({type:k,value:bL});
}}return bH;
},javaScriptToHtml:function(bN){var bR=qx.dev.Tokenizer.tokenizeJavaScript(bN);
var bQ=new qx.util.StringBuilder();

for(var i=0;i<bR.length;i++){var bS=bR[i];
var bP=qx.bom.String.escape(bS.value);

switch(bS.type){case be:bQ.add(Q,bP,l);
break;
case bg:bQ.add(E,bP,l);
break;
case b:case bb:bQ.add(m,bP,l);
break;
case c:case e:bQ.add(o,bP,l);
break;
case bf:case ba:case h:bQ.add(U,bS.type,V,bP,l);
break;
case j:var bO=qx.bom.client.Engine.MSHTML?K:R;
bQ.add(bO);
break;
case g:var bT=qx.bom.client.Engine.MSHTML?x:J;
bQ.add(bT);
break;
default:bQ.add(bP);
}}return bQ.get();
}}});
})();


qx.$$loader.init();

