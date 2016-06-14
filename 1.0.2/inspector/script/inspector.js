(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"inspector.Application","qx.theme":"inspector.theme.Theme","qx.version":"1.0.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"./script"},"inspector":{"resourceUri":"./resource","sourceUri":"./script","version":"trunk"},"qx":{"resourceUri":"./resource","sourceUri":"./script","version":"1.0.2"}};
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
  packageHashes : {"0":"82751360d399"},
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

qx.$$packageData['82751360d399']={"resources":{"inspector/css/consoleview.css":"inspector","inspector/css/domview.css":"inspector","inspector/css/propertylisthtml.css":"inspector","inspector/css/sourceview.css":"inspector","inspector/html/index.html":"inspector","inspector/images/autocomplete/method_private18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/method_protected18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/method_public18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_private18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_protected18.gif":[18,18,"gif","inspector"],"inspector/images/autocomplete/property_public18.gif":[18,18,"gif","inspector"],"inspector/images/close.gif":[17,13,"gif","inspector"],"inspector/images/close.png":[17,13,"png","inspector"],"inspector/images/components/atom.png":[16,16,"png","inspector"],"inspector/images/components/button.png":[16,16,"png","inspector"],"inspector/images/components/checkbox.png":[16,16,"png","inspector"],"inspector/images/components/combobox.png":[16,16,"png","inspector"],"inspector/images/components/document.png":[16,16,"png","inspector"],"inspector/images/components/groupbox.png":[16,16,"png","inspector"],"inspector/images/components/horizontallayout.png":[16,16,"png","inspector"],"inspector/images/components/image.png":[16,16,"png","inspector"],"inspector/images/components/label.png":[16,16,"png","inspector"],"inspector/images/components/layout.png":[16,16,"png","inspector"],"inspector/images/components/listview.png":[16,16,"png","inspector"],"inspector/images/components/menu.png":[16,16,"png","inspector"],"inspector/images/components/radiobutton.png":[16,16,"png","inspector"],"inspector/images/components/spinner.png":[16,16,"png","inspector"],"inspector/images/components/splitpane.png":[16,16,"png","inspector"],"inspector/images/components/table.png":[16,16,"png","inspector"],"inspector/images/components/textarea.png":[16,16,"png","inspector"],"inspector/images/components/textfield.png":[16,16,"png","inspector"],"inspector/images/components/toolbar.png":[16,16,"png","inspector"],"inspector/images/components/tree.png":[16,16,"png","inspector"],"inspector/images/components/verticallayout.png":[16,16,"png","inspector"],"inspector/images/components/window.png":[16,16,"png","inspector"],"inspector/images/icons/api.png":[22,22,"png","inspector"],"inspector/images/icons/edit-find-disabled.png":[16,16,"png","inspector"],"inspector/images/icons/edit-find.png":[16,16,"png","inspector"],"inspector/images/icons/goto.png":[22,22,"png","inspector"],"inspector/images/icons/highlight.png":[22,22,"png","inspector"],"inspector/images/icons/setinit-disabled.png":[22,22,"png","inspector"],"inspector/images/icons/setinit.png":[22,22,"png","inspector"],"inspector/images/icons/setnull-disabled.png":[22,22,"png","inspector"],"inspector/images/icons/setnull.png":[22,22,"png","inspector"],"inspector/images/null.png":[15,15,"png","inspector"],"inspector/images/open.gif":[17,13,"gif","inspector"],"inspector/images/open.png":[17,13,"png","inspector"],"inspector/images/shell/errorIcon.png":[14,14,"png","inspector"],"inspector/images/shell/infoIcon.png":[14,14,"png","inspector"],"inspector/images/shell/warningIcon.png":[14,14,"png","inspector"],"inspector/images/spacer.gif":[17,13,"gif","inspector"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/document-properties.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/view-refresh.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]}};
(function(){var bi="toString",bh=".",bg="default",bf="Object",be='"',bd="Array",bc="()",bb="String",ba="Function",Y=".prototype",bG="function",bF="Boolean",bE="Error",bD="RegExp",bC="warn",bB="hasOwnProperty",bA="string",bz="toLocaleString",by='\", "',bx="info",bp="BROKEN_IE",bq="isPrototypeOf",bn="Date",bo="",bl="qx.Bootstrap",bm="]",bj="Class",bk="error",br="[Class ",bs="valueOf",bu="Number",bt="count",bw="debug",bv="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return br+this.classname+bm;
},createNamespace:function(name,y){var A=name.split(bh);
var parent=window;
var z=A[0];

for(var i=0,B=A.length-1;i<B;i++,z=A[i]){if(!parent[z]){parent=parent[z]={};
}else{parent=parent[z];
}}parent[z]=y;
return z;
},setDisplayName:function(I,J,name){I.displayName=J+bh+name+bc;
},setDisplayNames:function(K,L){for(var name in K){var M=K[name];

if(M instanceof Function){M.displayName=L+bh+name+bc;
}}},define:function(name,bN){if(!bN){var bN={statics:{}};
}var bS;
var bQ=null;
qx.Bootstrap.setDisplayNames(bN.statics,name);

if(bN.members){qx.Bootstrap.setDisplayNames(bN.members,name+Y);
bS=bN.construct||new Function;
var bO=bN.statics||{};
for(var i=0,bT=qx.Bootstrap.getKeys(bO),l=bT.length;i<l;i++){var bU=bT[i];
bS[bU]=bO[bU];
}bQ=bS.prototype;
var bP=bN.members||{};
for(var i=0,bT=qx.Bootstrap.getKeys(bP),l=bT.length;i<l;i++){var bU=bT[i];
bQ[bU]=bP[bU];
}}else{bS=bN.statics||{};
}var bR=this.createNamespace(name,bS);
bS.name=bS.classname=name;
bS.basename=bR;
bS.$$type=bj;
if(!bS.hasOwnProperty(bi)){bS.toString=this.genericToString;
}if(bN.defer){bN.defer(bS,bQ);
}qx.Bootstrap.$$registry[name]=bN.statics;
return bS;
}};
qx.Bootstrap.define(bl,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(g){return g.__count__;
},"default":function(bV){var length=0;

for(var bW in bV){length++;
}return length;
}})[(({}).__count__==0)?bt:bg],objectMergeWith:function(r,s,t){if(t===undefined){t=true;
}
for(var u in s){if(t||r[u]===undefined){r[u]=s[u];
}}return r;
},__a:[bq,bB,bz,bi,bs],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(j){var k=[];

for(var o in j){k.push(o);
}var m=qx.Bootstrap.__a;
var n=Object.prototype.hasOwnProperty;

for(var i=0,a=m,l=a.length;i<l;i++){if(n.call(j,a[i])){k.push(a[i]);
}}return k;
},"default":function(d){var e=[];

for(var f in d){e.push(f);
}return e;
}})[typeof (Object.keys)==
bG?bv:
(function(){for(var p in {toString:1}){return p;
}})()!==bi?bp:bg],getKeysAsString:function(bJ){var bK=qx.Bootstrap.getKeys(bJ);

if(bK.length==0){return bo;
}return be+bK.join(by)+be;
},__b:{"[object String]":bb,"[object Array]":bd,"[object Object]":bf,"[object RegExp]":bD,"[object Number]":bu,"[object Boolean]":bF,"[object Date]":bn,"[object Function]":ba,"[object Error]":bE},firstUp:function(X){return X.charAt(0).toUpperCase()+X.substr(1);
},firstLow:function(bL){return bL.charAt(0).toLowerCase()+bL.substr(1);
},getClass:function(C){var D=Object.prototype.toString.call(C);
return (qx.Bootstrap.__b[D]||D.slice(8,-1));
},isString:function(bH){return (bH!==null&&(typeof bH===bA||qx.Bootstrap.getClass(bH)==bb||bH instanceof String||(!!bH&&!!bH.$$isString)));
},isArray:function(R){return (R!==null&&(R instanceof Array||(R&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(R.constructor,qx.data.IListData))||qx.Bootstrap.getClass(R)==bd||(!!R&&!!R.$$isArray)));
},isObject:function(q){return (q!==undefined&&q!==null&&qx.Bootstrap.getClass(q)==bf);
},isFunction:function(x){return qx.Bootstrap.getClass(x)==ba;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(G,name){while(G){if(G.$$properties&&G.$$properties[name]){return G.$$properties[name];
}G=G.superclass;
}return null;
},hasProperty:function(H,name){return !!qx.Bootstrap.getPropertyDefinition(H,name);
},getEventType:function(bM,name){var bM=bM.constructor;

while(bM.superclass){if(bM.$$events&&bM.$$events[name]!==undefined){return bM.$$events[name];
}bM=bM.superclass;
}return null;
},supportsEvent:function(bI,name){return !!qx.Bootstrap.getEventType(bI,name);
},getByInterface:function(U,V){var W,i,l;

while(U){if(U.$$implements){W=U.$$flatImplements;

for(i=0,l=W.length;i<l;i++){if(W[i]===V){return U;
}}}U=U.superclass;
}return null;
},hasInterface:function(P,Q){return !!qx.Bootstrap.getByInterface(P,Q);
},getMixins:function(E){var F=[];

while(E){if(E.$$includes){F.push.apply(F,E.$$flatIncludes);
}E=E.superclass;
}return F;
},$$logs:[],debug:function(S,T){qx.Bootstrap.$$logs.push([bw,arguments]);
},info:function(b,c){qx.Bootstrap.$$logs.push([bx,arguments]);
},warn:function(v,w){qx.Bootstrap.$$logs.push([bC,arguments]);
},error:function(N,O){qx.Bootstrap.$$logs.push([bk,arguments]);
},trace:function(h){}}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,t){if(!t){var t={};
}t.include=this.__qz(t.include);
t.patch=this.__qz(t.patch);
{};
var u={$$type:e,name:name,title:t.title,toString:this.genericToString};
if(t.extend){u.supertheme=t.extend;
}u.basename=qx.Bootstrap.createNamespace(name,u);
this.__qC(u,t);
this.__qA(u,t);
this.$$registry[name]=u;
for(var i=0,a=t.include,l=a.length;i<l;i++){this.include(u,a[i]);
}
for(var i=0,a=t.patch,l=a.length;i<l;i++){this.patch(u,a[i]);
}},__qz:function(I){if(!I){return [];
}
if(qx.Bootstrap.isArray(I)){return I;
}else{return [I];
}},__qA:function(q,r){var s=r.aliases||{};

if(r.extend&&r.extend.aliases){qx.Bootstrap.objectMergeWith(s,r.extend.aliases,false);
}q.aliases=s;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__qB:function(J){for(var i=0,K=this.__qD,l=K.length;i<l;i++){if(J[K[i]]){return K[i];
}}},__qC:function(v,w){var z=this.__qB(w);
if(w.extend&&!z){z=w.extend.type;
}v.type=z||p;
if(!z){return;
}var B=function(){};
if(w.extend){B.prototype=new w.extend.$$clazz;
}var A=B.prototype;
var y=w[z];
for(var x in y){A[x]=y[x];
if(A[x].base){{};
A[x].base=w.extend;
}}v.$$clazz=B;
v[z]=new B;
},$$registry:{},__qD:[g,d,f,n,c,o,m,b],__qE:null,__qF:null,__qG:function(){},patch:function(C,D){var F=this.__qB(D);

if(F!==this.__qB(C)){throw new Error("The mixins '"+C.name+"' are not compatible '"+D.name+"'!");
}var E=D[F];
var G=C.$$clazz.prototype;

for(var H in E){G[H]=E[H];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var a="inspector.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,colors:{}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qx.propertyDebugLevel",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(h,{statics:{__c:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__c[a]){this.__c[a]={};
}else if(this.__c[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__c[a].defaultValue=b;
},get:function(l){var m=this.__c[l];

if(m===undefined){throw new Error('Setting "'+l+'" is not defined.');
}
if(m.value!==undefined){return m.value;
}return m.defaultValue;
},set:function(p,q){if((p.split(c)).length<2){throw new Error('Malformed settings key "'+p+'". Must be following the schema "namespace.key".');
}
if(!this.__c[p]){this.__c[p]={};
}this.__c[p].value=q;
},__d:function(){if(window.qxsettings){for(var n in window.qxsettings){this.set(n,window.qxsettings[n]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(o){}this.__e();
}},__e:function(){if(this.get(k)!=true){return;
}var t=document.location.search.slice(1).split(j);

for(var i=0;i<t.length;i++){var s=t[i].split(d);

if(s.length!=3||s[0]!=e){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(r){r.define(k,false);
r.define(g,false);
r.define(f,0);
r.__d();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,v){if(v){if(v.extend&&!(v.extend instanceof Array)){v.extend=[v.extend];
}{};
var w=v.statics?v.statics:{};
if(v.extend){w.$$extends=v.extend;
}
if(v.properties){w.$$properties=v.properties;
}
if(v.members){w.$$members=v.members;
}
if(v.events){w.$$events=v.events;
}}else{var w={};
}w.$$type=c;
w.name=name;
w.toString=this.genericToString;
w.basename=qx.Bootstrap.createNamespace(name,w);
qx.Interface.$$registry[name]=w;
return w;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(t){if(!t){return [];
}var u=t.concat();

for(var i=0,l=t.length;i<l;i++){if(t[i].$$extends){u.push.apply(u,this.flatten(t[i].$$extends));
}}return u;
},__f:function(I,J,K,L){var P=K.$$members;

if(P){for(var O in P){if(qx.Bootstrap.isFunction(P[O])){var N=this.__g(J,O);
var M=N||qx.Bootstrap.isFunction(I[O]);

if(!M){throw new Error('Implementation of method "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}var Q=L===true&&!N&&!qx.Bootstrap.hasInterface(J,K);

if(Q){I[O]=this.__j(K,I[O],O,P[O]);
}}else{if(typeof I[O]===undefined){if(typeof I[O]!==h){throw new Error('Implementation of member "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}}}}}},__g:function(n,o){var s=o.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!s){return false;
}var p=qx.Bootstrap.firstLow(s[2]);
var q=qx.Bootstrap.getPropertyDefinition(n,p);

if(!q){return false;
}var r=s[0]==b||s[0]==d;

if(r){return qx.Bootstrap.getPropertyDefinition(n,p).check==g;
}return true;
},__h:function(j,k){if(k.$$properties){for(var m in k.$$properties){if(!qx.Bootstrap.getPropertyDefinition(j,m)){throw new Error('The property "'+m+'" is not supported by Class "'+j.classname+'"!');
}}}},__i:function(x,y){if(y.$$events){for(var z in y.$$events){if(!qx.Bootstrap.supportsEvent(x,z)){throw new Error('The event "'+z+'" is not supported by Class "'+x.classname+'"!');
}}}},assertObject:function(E,F){var H=E.constructor;
this.__f(E,H,F,false);
this.__h(H,F);
this.__i(H,F);
var G=F.$$extends;

if(G){for(var i=0,l=G.length;i<l;i++){this.assertObject(E,G[i]);
}}},assert:function(A,B,C){this.__f(A.prototype,A,B,C);
this.__h(A,B);
this.__i(A,B);
var D=B.$$extends;

if(D){for(var i=0,l=D.length;i<l;i++){this.assert(A,D[i],C);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var y=w.statics?w.statics:{};
qx.Bootstrap.setDisplayNames(y,name);

for(var x in y){if(y[x] instanceof Function){y[x].$$mixin=y;
}}if(w.construct){y.$$constructor=w.construct;
qx.Bootstrap.setDisplayName(w.construct,name,e);
}
if(w.include){y.$$includes=w.include;
}
if(w.properties){y.$$properties=w.properties;
}
if(w.members){y.$$members=w.members;
qx.Bootstrap.setDisplayNames(w.members,name+f);
}
for(var x in y.$$members){if(y.$$members[x] instanceof Function){y.$$members[x].$$mixin=y;
}}
if(w.events){y.$$events=w.events;
}
if(w.destruct){y.$$destructor=w.destruct;
qx.Bootstrap.setDisplayName(w.destruct,name,b);
}}else{var y={};
}y.$$type=a;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
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
},isCompatible:function(h,j){var k=qx.Bootstrap.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$includes){v.push.apply(v,this.flatten(u[i].$$includes));
}}return v;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var ca=';',bY="string",bX='!==undefined)',bW='if(this.',bV='return this.',bU="boolean",bT="set",bS="resetThemed",bR="setThemed",bQ="resetRuntime",bF="reset",bE='this.',bD="setRuntime",bC="init",bB="",bA="this.",bz='=value;',by='else if(this.',bx='delete this.',bw="();",ch='else ',ci="return this.",cf="get",cg='(value);',cd="(a[",ce=' of an instance of ',cb="refresh",cc=' is not (yet) ready!");',cj="]);",ck='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bJ='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bI='value !== null && value.nodeType === 9 && value.documentElement',bL='===value)return value;',bK='value !== null && value.$$type === "Mixin"',bN='return init;',bM='var init=this.',bP='value !== null && value.nodeType === 1 && value.attributes',bO="Error in property ",bH="property",bG='.validate.call(this, value);',r='qx.core.Assert.assertInstance(value, Date, msg) || true',s=" in method ",t='qx.core.Assert.assertInstance(value, Error, msg) || true',u='Undefined value is not allowed!',v="inherit",w='Is invalid!',x='if(value===undefined)prop.error(this,2,"',y="': ",z=" of class ",A='value !== null && value.nodeType !== undefined',co='===undefined)return;',cn='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',cm='qx.core.Assert.assertPositiveInteger(value, msg) || true',cl='value=this.',cs='","',cr='if(init==qx.core.Property.$$inherit)init=null;',cq='value !== null && value.$$type === "Interface"',cp='var inherit=prop.$$inherit;',cu="$$useinit_",ct='",value);',ba="on",bb="$$runtime_",X='Requires exactly one argument!',Y="$$user_",be='qx.core.Assert.assertArray(value, msg) || true',bf='qx.core.Assert.assertPositiveNumber(value, msg) || true',bc=".prototype",bd="Boolean",V='return value;',W='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',I='Does not allow any arguments!',H="()",K="var a=arguments[0] instanceof Array?arguments[0]:arguments;",J='.$$properties.',E='value !== null && value.$$type === "Theme"',D="())",G='return null;',F='qx.core.Assert.assertObject(value, msg) || true',C='qx.core.Assert.assertString(value, msg) || true',B='value !== null && value.$$type === "Class"',bk='qx.core.Assert.assertFunction(value, msg) || true',bl=".",bm="object",bn="$$init_",bg="$$theme_",bh='qx.core.Assert.assertMap(value, msg) || true',bi="qx.aspects",bj='qx.core.Assert.assertNumber(value, msg) || true',bo='Null value is not allowed!',bp='qx.core.Assert.assertInteger(value, msg) || true',S="value",R="shorthand",Q='qx.core.Assert.assertInstance(value, RegExp, msg) || true',P='value !== null && value.type !== undefined',O='value !== null && value.document',N='throw new Error("Property ',M="(!this.",L='qx.core.Assert.assertBoolean(value, msg) || true',U="toggle",T="$$inherit_",bq='var prop=qx.core.Property;',br=" with incoming value '",bs="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bt="qx.core.Property",bu="is",bv='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bt,{statics:{__o:{"Boolean":L,"String":C,"Number":bj,"Integer":bp,"PositiveNumber":bf,"PositiveInteger":cm,"Error":t,"RegExp":Q,"Object":F,"Array":be,"Map":bh,"Function":bk,"Date":r,"Node":A,"Element":bP,"Document":bI,"Window":O,"Event":P,"Class":B,"Mixin":bK,"Interface":cq,"Theme":E,"Color":ck,"Decorator":cn,"Font":bJ},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:v,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bY,dispose:bU,inheritable:bU,nullable:bU,themeable:bU,refine:bU,init:null,apply:bY,event:bY,check:null,transform:bY,deferredInit:bU,validate:null},$$allowedGroupKeys:{name:bY,group:bm,mode:bY,themeable:bU},$$inheritable:{},refresh:function(cU){var parent=cU.getLayoutParent();

if(parent){var cX=cU.constructor;
var da=this.$$store.inherit;
var cY=this.$$store.init;
var cW=this.$$method.refresh;
var db;
var cV;
{};

while(cX){db=cX.$$properties;

if(db){for(var name in this.$$inheritable){if(db[name]&&cU[cW[name]]){cV=parent[da[name]];

if(cV===undefined){cV=parent[cY[name]];
}{};
cU[cW[name]](cV);
}}}cX=cX.superclass;
}}},attach:function(dC){var dD=dC.$$properties;

if(dD){for(var name in dD){this.attachMethods(dC,name,dD[name]);
}}dC.$$propertiesAttached=true;
},attachMethods:function(cy,name,cz){cz.group?this.__q(cy,cz,name):this.__r(cy,cz,name);
},__q:function(dH,dI,name){var dP=qx.Bootstrap.firstUp(name);
var dO=dH.prototype;
var dQ=dI.themeable===true;
{};
var dR=[];
var dL=[];

if(dQ){var dJ=[];
var dN=[];
}var dM=K;
dR.push(dM);

if(dQ){dJ.push(dM);
}
if(dI.mode==R){var dK=bs;
dR.push(dK);

if(dQ){dJ.push(dK);
}}
for(var i=0,a=dI.group,l=a.length;i<l;i++){{};
dR.push(bA,this.$$method.set[a[i]],cd,i,cj);
dL.push(bA,this.$$method.reset[a[i]],bw);

if(dQ){{};
dJ.push(bA,this.$$method.setThemed[a[i]],cd,i,cj);
dN.push(bA,this.$$method.resetThemed[a[i]],bw);
}}this.$$method.set[name]=bT+dP;
dO[this.$$method.set[name]]=new Function(dR.join(bB));
this.$$method.reset[name]=bF+dP;
dO[this.$$method.reset[name]]=new Function(dL.join(bB));

if(dQ){this.$$method.setThemed[name]=bR+dP;
dO[this.$$method.setThemed[name]]=new Function(dJ.join(bB));
this.$$method.resetThemed[name]=bS+dP;
dO[this.$$method.resetThemed[name]]=new Function(dN.join(bB));
}},__r:function(dw,dx,name){var dz=qx.Bootstrap.firstUp(name);
var dB=dw.prototype;
{};
if(dx.dispose===undefined&&typeof dx.check===bY){dx.dispose=this.__p[dx.check]||qx.Bootstrap.classIsDefined(dx.check)||(qx.Interface&&qx.Interface.isDefined(dx.check));
}var dA=this.$$method;
var dy=this.$$store;
dy.runtime[name]=bb+name;
dy.user[name]=Y+name;
dy.theme[name]=bg+name;
dy.init[name]=bn+name;
dy.inherit[name]=T+name;
dy.useinit[name]=cu+name;
dA.get[name]=cf+dz;
dB[dA.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dw,name,cf);
};
dA.set[name]=bT+dz;
dB[dA.set[name]]=function(cK){return qx.core.Property.executeOptimizedSetter(this,dw,name,bT,arguments);
};
dA.reset[name]=bF+dz;
dB[dA.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,bF);
};

if(dx.inheritable||dx.apply||dx.event||dx.deferredInit){dA.init[name]=bC+dz;
dB[dA.init[name]]=function(dE){return qx.core.Property.executeOptimizedSetter(this,dw,name,bC,arguments);
};
}
if(dx.inheritable){dA.refresh[name]=cb+dz;
dB[dA.refresh[name]]=function(cP){return qx.core.Property.executeOptimizedSetter(this,dw,name,cb,arguments);
};
}dA.setRuntime[name]=bD+dz;
dB[dA.setRuntime[name]]=function(q){return qx.core.Property.executeOptimizedSetter(this,dw,name,bD,arguments);
};
dA.resetRuntime[name]=bQ+dz;
dB[dA.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,bQ);
};

if(dx.themeable){dA.setThemed[name]=bR+dz;
dB[dA.setThemed[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,dw,name,bR,arguments);
};
dA.resetThemed[name]=bS+dz;
dB[dA.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,bS);
};
}
if(dx.check===bd){dB[U+dz]=new Function(ci+dA.set[name]+M+dA.get[name]+D);
dB[bu+dz]=new Function(ci+dA.get[name]+H);
}},__s:{0:bv,1:X,2:u,3:I,4:bo,5:w},error:function(dc,dd,de,df,dg){var dh=dc.constructor.classname;
var di=bO+de+z+dh+s+this.$$method[df][de]+br+dg+y;
throw new Error(di+(this.__s[dd]||"Unknown reason: "+dd));
},__t:function(dS,dT,name,dU,dV,dW){var dX=this.$$method[dU][name];
{dT[dX]=new Function(S,dV.join(bB));
};
if(qx.core.Variant.isSet(bi,ba)){dT[dX]=qx.core.Aspect.wrap(dS.classname+bl+dX,dT[dX],bH);
}qx.Bootstrap.setDisplayName(dT[dX],dS.classname+bc,dX);
if(dW===undefined){return dS[dX]();
}else{return dS[dX](dW[0]);
}},executeOptimizedGetter:function(c,d,name,e){var g=d.$$properties[name];
var j=d.prototype;
var f=[];
var h=this.$$store;
f.push(bW,h.runtime[name],bX);
f.push(bV,h.runtime[name],ca);

if(g.inheritable){f.push(by,h.inherit[name],bX);
f.push(bV,h.inherit[name],ca);
f.push(ch);
}f.push(bW,h.user[name],bX);
f.push(bV,h.user[name],ca);

if(g.themeable){f.push(by,h.theme[name],bX);
f.push(bV,h.theme[name],ca);
}
if(g.deferredInit&&g.init===undefined){f.push(by,h.init[name],bX);
f.push(bV,h.init[name],ca);
}f.push(ch);

if(g.init!==undefined){if(g.inheritable){f.push(bM,h.init[name],ca);

if(g.nullable){f.push(cr);
}else if(g.init!==undefined){f.push(bV,h.init[name],ca);
}else{f.push(W,name,ce,d.classname,cc);
}f.push(bN);
}else{f.push(bV,h.init[name],ca);
}}else if(g.inheritable||g.nullable){f.push(G);
}else{f.push(N,name,ce,d.classname,cc);
}return this.__t(c,j,name,e,f);
},executeOptimizedSetter:function(cA,cB,name,cC,cD){var cI=cB.$$properties[name];
var cH=cB.prototype;
var cF=[];
var cE=cC===bT||cC===bR||cC===bD||(cC===bC&&cI.init===undefined);
var cG=cI.apply||cI.event||cI.inheritable;
var cJ=this.__u(cC,name);
this.__v(cF,cI,name,cC,cE);

if(cE){this.__w(cF,cB,cI,name);
}
if(cG){this.__x(cF,cE,cJ,cC);
}
if(cI.inheritable){cF.push(cp);
}{};

if(!cG){this.__z(cF,name,cC,cE);
}else{this.__A(cF,cI,name,cC,cE);
}
if(cI.inheritable){this.__B(cF,cI,name,cC);
}else if(cG){this.__C(cF,cI,name,cC);
}
if(cG){this.__D(cF,cI,name);
if(cI.inheritable&&cH._getChildren){this.__E(cF,name);
}}if(cE){cF.push(V);
}return this.__t(cA,cH,name,cC,cF,cD);
},__u:function(dF,name){if(dF===bD||dF===bQ){var dG=this.$$store.runtime[name];
}else if(dF===bR||dF===bS){dG=this.$$store.theme[name];
}else if(dF===bC){dG=this.$$store.init[name];
}else{dG=this.$$store.user[name];
}return dG;
},__v:function(cQ,cR,name,cS,cT){{if(!cR.nullable||cR.check||cR.inheritable){cQ.push(bq);
}if(cS===bT){cQ.push(x,name,cs,cS,ct);
}};
},__w:function(cv,cw,cx,name){if(cx.transform){cv.push(cl,cx.transform,cg);
}if(cx.validate){if(typeof cx.validate===bY){cv.push(bE,cx.validate,cg);
}else if(cx.validate instanceof Function){cv.push(cw.classname,J,name);
cv.push(bG);
}}},__x:function(dr,ds,dt,du){var dv=(du===bF||du===bS||du===bQ);

if(ds){dr.push(bW,dt,bL);
}else if(dv){dr.push(bW,dt,co);
}},__y:undefined,__z:function(n,name,o,p){if(o===bD){n.push(bE,this.$$store.runtime[name],bz);
}else if(o===bQ){n.push(bW,this.$$store.runtime[name],bX);
n.push(bx,this.$$store.runtime[name],ca);
}else if(o===bT){n.push(bE,this.$$store.user[name],bz);
}else if(o===bF){n.push(bW,this.$$store.user[name],bX);
n.push(bx,this.$$store.user[name],ca);
}else if(o===bR){n.push(bE,this.$$store.theme[name],bz);
}else if(o===bS){n.push(bW,this.$$store.theme[name],bX);
n.push(bx,this.$$store.theme[name],ca);
}else if(o===bC&&p){n.push(bE,this.$$store.init[name],bz);
}},__A:function(dm,dn,name,dp,dq){if(dn.inheritable){dm.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dm.push('var computed, old;');
}dm.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dp==="resetRuntime"){dm.push('delete this.',this.$$store.runtime[name],';');
dm.push('if(this.',this.$$store.user[name],'!==undefined)');
dm.push('computed=this.',this.$$store.user[name],';');
dm.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dm.push('computed=this.',this.$$store.theme[name],';');
dm.push('else if(this.',this.$$store.init[name],'!==undefined){');
dm.push('computed=this.',this.$$store.init[name],';');
dm.push('this.',this.$$store.useinit[name],'=true;');
dm.push('}');
}else{dm.push('old=computed=this.',this.$$store.runtime[name],';');
if(dp==="set"){dm.push('this.',this.$$store.user[name],'=value;');
}else if(dp==="reset"){dm.push('delete this.',this.$$store.user[name],';');
}else if(dp==="setThemed"){dm.push('this.',this.$$store.theme[name],'=value;');
}else if(dp==="resetThemed"){dm.push('delete this.',this.$$store.theme[name],';');
}else if(dp==="init"&&dq){dm.push('this.',this.$$store.init[name],'=value;');
}}dm.push('}');
dm.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dp==="set"){if(!dn.inheritable){dm.push('old=this.',this.$$store.user[name],';');
}dm.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dp==="reset"){if(!dn.inheritable){dm.push('old=this.',this.$$store.user[name],';');
}dm.push('delete this.',this.$$store.user[name],';');
dm.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dm.push('computed=this.',this.$$store.runtime[name],';');
dm.push('if(this.',this.$$store.theme[name],'!==undefined)');
dm.push('computed=this.',this.$$store.theme[name],';');
dm.push('else if(this.',this.$$store.init[name],'!==undefined){');
dm.push('computed=this.',this.$$store.init[name],';');
dm.push('this.',this.$$store.useinit[name],'=true;');
dm.push('}');
}else{if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dn.inheritable){dm.push('computed=this.',this.$$store.user[name],';');
}else{dm.push('old=computed=this.',this.$$store.user[name],';');
}if(dp==="setThemed"){dm.push('this.',this.$$store.theme[name],'=value;');
}else if(dp==="resetThemed"){dm.push('delete this.',this.$$store.theme[name],';');
}else if(dp==="init"&&dq){dm.push('this.',this.$$store.init[name],'=value;');
}}dm.push('}');
if(dn.themeable){dm.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dn.inheritable){dm.push('old=this.',this.$$store.theme[name],';');
}
if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dp==="set"){dm.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dp==="setThemed"){dm.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dp==="resetThemed"){dm.push('delete this.',this.$$store.theme[name],';');
dm.push('if(this.',this.$$store.init[name],'!==undefined){');
dm.push('computed=this.',this.$$store.init[name],';');
dm.push('this.',this.$$store.useinit[name],'=true;');
dm.push('}');
}else if(dp==="init"){if(dq){dm.push('this.',this.$$store.init[name],'=value;');
}dm.push('computed=this.',this.$$store.theme[name],';');
}else if(dp==="refresh"){dm.push('computed=this.',this.$$store.theme[name],';');
}dm.push('}');
}dm.push('else if(this.',this.$$store.useinit[name],'){');

if(!dn.inheritable){dm.push('old=this.',this.$$store.init[name],';');
}
if(dp==="init"){if(dq){dm.push('computed=this.',this.$$store.init[name],'=value;');
}else{dm.push('computed=this.',this.$$store.init[name],';');
}}else if(dp==="set"||dp==="setRuntime"||dp==="setThemed"||dp==="refresh"){dm.push('delete this.',this.$$store.useinit[name],';');

if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dp==="set"){dm.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dp==="setThemed"){dm.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dp==="refresh"){dm.push('computed=this.',this.$$store.init[name],';');
}}dm.push('}');
if(dp==="set"||dp==="setRuntime"||dp==="setThemed"||dp==="init"){dm.push('else{');

if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dp==="set"){dm.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dp==="setThemed"){dm.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dp==="init"){if(dq){dm.push('computed=this.',this.$$store.init[name],'=value;');
}else{dm.push('computed=this.',this.$$store.init[name],';');
}dm.push('this.',this.$$store.useinit[name],'=true;');
}dm.push('}');
}},__B:function(dj,dk,name,dl){dj.push('if(computed===undefined||computed===inherit){');

if(dl==="refresh"){dj.push('computed=value;');
}else{dj.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dj.push('if((computed===undefined||computed===inherit)&&');
dj.push('this.',this.$$store.init[name],'!==undefined&&');
dj.push('this.',this.$$store.init[name],'!==inherit){');
dj.push('computed=this.',this.$$store.init[name],';');
dj.push('this.',this.$$store.useinit[name],'=true;');
dj.push('}else{');
dj.push('delete this.',this.$$store.useinit[name],';}');
dj.push('}');
dj.push('if(old===computed)return value;');
dj.push('if(computed===inherit){');
dj.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dj.push('}');
dj.push('else if(computed===undefined)');
dj.push('delete this.',this.$$store.inherit[name],';');
dj.push('else this.',this.$$store.inherit[name],'=computed;');
dj.push('var backup=computed;');
if(dk.init!==undefined&&dl!=="init"){dj.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dj.push('if(old===undefined)old=null;');
}dj.push('if(computed===undefined||computed==inherit)computed=null;');
},__C:function(cL,cM,name,cN){if(cN!=="set"&&cN!=="setRuntime"&&cN!=="setThemed"){cL.push('if(computed===undefined)computed=null;');
}cL.push('if(old===computed)return value;');
if(cM.init!==undefined&&cN!=="init"){cL.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cL.push('if(old===undefined)old=null;');
}},__D:function(k,m,name){if(m.apply){k.push('this.',m.apply,'(computed, old, "',name,'");');
}if(m.event){k.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",m.event,"')){","reg.fireEvent(this, '",m.event,"', qx.event.type.Data, [computed, old]",")}");
}},__E:function(cO,name){cO.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
cO.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
cO.push('}');
}}});
})();
(function(){var a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__X:function(){var b="unknown";
var f="0.0.0";
var e=window.navigator.userAgent;
var h=false;
var d=false;

if(window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]"){b="opera";
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(e)){f=RegExp.$1+"."+RegExp.$2;

if(RegExp.$3!=""){f+="."+RegExp.$3;
}}else{d=true;
f="9.6.0";
}}else if(window.navigator.userAgent.indexOf("AppleWebKit/")!=-1){b="webkit";
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(e)){f=RegExp.$1;
var g=RegExp("[^\\.0-9]").exec(f);

if(g){f=f.slice(0,g.index);
}}else{d=true;
f="525.26";
}}else if(window.controllers&&window.navigator.product==="Gecko"){b="gecko";
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(e)){f=RegExp.$1;
}else{d=true;
f="1.9.0.0";
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(e)){b="mshtml";
f=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(f<8&&/Trident\/([^\);]+)(\)|;)/.test(e)){if(RegExp.$1==="4.0"){f="8.0";
}}this.MSHTML=true;
}else{var c=window.qxFail;

if(c&&typeof c==="function"){var b=c();

if(b.NAME&&b.FULLVERSION){b=b.NAME;
this[b.toUpperCase()]=true;
f=b.FULLVERSION;
}}else{h=true;
d=true;
f="1.9.0.0";
b="gecko";
this.GECKO=true;
window.alert("Unsupported client: "+e+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=h;
this.UNKNOWN_VERSION=d;
this.NAME=b;
this.FULLVERSION=f;
this.VERSION=parseFloat(f);
}},defer:function(i){i.__X();
}});
})();
(function(){var w="on",u="off",t="|",s="default",r="object",q="&",p="qx.aspects",o="$",n="qx.allowUrlVariants",m="qx.debug",e="qx.client",k="qx.dynlocale",h="webkit",d="qxvariant",c="opera",g=":",f="qx.core.Variant",j="mshtml",b="gecko";
qx.Bootstrap.define(f,{statics:{__Y:{},__ba:{},compilerIsSet:function(){return true;
},define:function(x,y,z){{};

if(!this.__Y[x]){this.__Y[x]={};
}else{}this.__Y[x].allowedValues=y;
this.__Y[x].defaultValue=z;
},get:function(A){var B=this.__Y[A];
{};

if(B.value!==undefined){return B.value;
}return B.defaultValue;
},__bb:function(){if(window.qxvariants){for(var a in qxvariants){{};

if(!this.__Y[a]){this.__Y[a]={};
}this.__Y[a].value=qxvariants[a];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(Q){}this.__bc(this.__Y);
}},__bc:function(){if(qx.core.Setting.get(n)!=true){return;
}var N=document.location.search.slice(1).split(q);

for(var i=0;i<N.length;i++){var O=N[i].split(g);

if(O.length!=3||O[0]!=d){continue;
}var P=O[1];

if(!this.__Y[P]){this.__Y[P]={};
}this.__Y[P].value=decodeURIComponent(O[2]);
}},select:function(J,K){{};

for(var L in K){if(this.isSet(J,L)){return K[L];
}}
if(K[s]!==undefined){return K[s];
}{};
},isSet:function(E,F){var G=E+o+F;

if(this.__ba[G]!==undefined){return this.__ba[G];
}var I=false;
if(F.indexOf(t)<0){I=this.get(E)===F;
}else{var H=F.split(t);

for(var i=0,l=H.length;i<l;i++){if(this.get(E)===H[i]){I=true;
break;
}}}this.__ba[G]=I;
return I;
},__bd:function(v){return typeof v===r&&v!==null&&v instanceof Array;
},__be:function(v){return typeof v===r&&v!==null&&!(v instanceof Array);
},__bf:function(C,D){for(var i=0,l=C.length;i<l;i++){if(C[i]==D){return true;
}}return false;
}},defer:function(M){M.define(e,[b,j,c,h],qx.bom.client.Engine.NAME);
M.define(m,[w,u],w);
M.define(p,[w,u],u);
M.define(k,[w,u],w);
M.__bb();
}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__wk:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__wk;
var o;

for(var i=0;i<p.length;i++){o=p[i];

if((o.type==null||l==o.type||o.type==b)&&(o.name==null||j.match(o.name))){o.pos==-1?q.push(o.fcn):m.push(o.fcn);
}}
if(q.length===0&&m.length===0){return k;
}var n=function(){for(var i=0;i<q.length;i++){q[i].call(this,j,k,l,arguments);
}var h=k.apply(this,arguments);

for(var i=0;i<m.length;i++){m[i].call(this,j,k,l,arguments,h);
}return h;
};

if(l!==a){n.self=k.self;
n.base=k.base;
}k.wrapper=n;
n.original=k;
return n;
},addAdvice:function(e,f,g,name){this.__wk.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var bp="static",bo="[Class ",bn="]",bm="qx.aspects",bl="extend",bk="qx.Class",bj=".",bi="on";
qx.Bootstrap.define(bk,{statics:{define:function(name,bE){if(!bE){var bE={};
}if(bE.include&&!(bE.include instanceof Array)){bE.include=[bE.include];
}if(bE.implement&&!(bE.implement instanceof Array)){bE.implement=[bE.implement];
}if(!bE.hasOwnProperty(bl)&&!bE.type){bE.type=bp;
}{};
var bG=this.__J(name,bE.type,bE.extend,bE.statics,bE.construct,bE.destruct);
if(bE.extend){if(bE.properties){this.__L(bG,bE.properties,true);
}if(bE.members){this.__N(bG,bE.members,true,true,false);
}if(bE.events){this.__K(bG,bE.events,true);
}if(bE.include){for(var i=0,l=bE.include.length;i<l;i++){this.__Q(bG,bE.include[i],false);
}}}if(bE.settings){for(var bF in bE.settings){qx.core.Setting.define(bF,bE.settings[bF]);
}}if(bE.variants){for(var bF in bE.variants){qx.core.Variant.define(bF,bE.variants[bF].allowedValues,bE.variants[bF].defaultValue);
}}if(bE.implement){for(var i=0,l=bE.implement.length;i<l;i++){this.__P(bG,bE.implement[i]);
}}{};
if(bE.defer){bE.defer.self=bG;
bE.defer(bG,bG.prototype,{add:function(name,s){var t={};
t[name]=s;
qx.Class.__L(bG,t,true);
}});
}return bG;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(c,d){{};
qx.Class.__Q(c,d,false);
},patch:function(bu,bv){{};
qx.Class.__Q(bu,bv,true);
},isSubClassOf:function(ba,bb){if(!ba){return false;
}
if(ba==bb){return true;
}
if(ba.prototype instanceof bb){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bc){var bd=[];

while(bc){if(bc.$$properties){bd.push.apply(bd,qx.Bootstrap.getKeys(bc.$$properties));
}bc=bc.superclass;
}return bd;
},getByProperty:function(bN,name){while(bN){if(bN.$$properties&&bN.$$properties[name]){return bN;
}bN=bN.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(u,v){return u.$$includes&&u.$$includes.indexOf(v)!==-1;
},getByMixin:function(D,E){var F,i,l;

while(D){if(D.$$includes){F=D.$$flatIncludes;

for(i=0,l=F.length;i<l;i++){if(F[i]===E){return D;
}}}D=D.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(P,Q){return !!this.getByMixin(P,Q);
},hasOwnInterface:function(bI,bJ){return bI.$$implements&&bI.$$implements.indexOf(bJ)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(y){var z=[];

while(y){if(y.$$implements){z.push.apply(z,y.$$flatImplements);
}y=y.superclass;
}return z;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(A,B){var C=A.constructor;

if(this.hasInterface(C,B)){return true;
}
try{qx.Interface.assertObject(A,B);
return true;
}catch(bH){}
try{qx.Interface.assert(C,B,false);
return true;
}catch(b){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bo+this.classname+bn;
},$$registry:qx.Bootstrap.$$registry,__F:null,__G:null,__H:function(){},__I:function(){},__J:function(name,e,f,g,h,j){var p;

if(!f&&qx.core.Variant.isSet("qx.aspects","off")){p=g||{};
qx.Bootstrap.setDisplayNames(p,name);
}else{p={};

if(f){if(!h){h=this.__R();
}p=this.__T(h,name,e);
qx.Bootstrap.setDisplayName(h,name,"constructor");
}if(g){qx.Bootstrap.setDisplayNames(g,name);
var q;

for(var i=0,a=qx.Bootstrap.getKeys(g),l=a.length;i<l;i++){q=a[i];
var m=g[q];

if(qx.core.Variant.isSet("qx.aspects","on")){if(m instanceof Function){m=qx.core.Aspect.wrap(name+"."+q,m,"static");
}p[q]=m;
}else{p[q]=m;
}}}}var o=qx.Bootstrap.createNamespace(name,p,false);
p.name=p.classname=name;
p.basename=o;
p.$$type="Class";

if(e){p.$$classtype=e;
}if(!p.hasOwnProperty("toString")){p.toString=this.genericToString;
}
if(f){var r=f.prototype;
var k=this.__S();
k.prototype=r;
var n=new k;
p.prototype=n;
n.name=n.classname=name;
n.basename=o;
h.base=p.superclass=f;
h.self=p.constructor=n.constructor=p;
if(j){if(qx.core.Variant.isSet("qx.aspects","on")){j=qx.core.Aspect.wrap(name,j,"destructor");
}p.$$destructor=j;
qx.Bootstrap.setDisplayName(j,name,"destruct");
}}this.$$registry[name]=p;
return p;
},__K:function(be,bf,bg){var bh,bh;
{};

if(be.$$events){for(var bh in bf){be.$$events[bh]=bf[bh];
}}else{be.$$events=bf;
}},__L:function(U,V,W){var Y;

if(W===undefined){W=false;
}var X=!!U.$$propertiesAttached;

for(var name in V){Y=V[name];
{};
Y.name=name;
if(!Y.refine){if(U.$$properties===undefined){U.$$properties={};
}U.$$properties[name]=Y;
}if(Y.init!==undefined){U.prototype["$$init_"+name]=Y.init;
}if(Y.event!==undefined){var event={};
event[Y.event]="qx.event.type.Data";
this.__K(U,event,W);
}if(Y.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(X){qx.core.Property.attachMethods(U,name,Y);
}}},__M:null,__N:function(bw,bx,by,bz,bA){var bB=bw.prototype;
var bD,bC;
qx.Bootstrap.setDisplayNames(bx,bw.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bx),l=a.length;i<l;i++){bD=a[i];
bC=bx[bD];
{};
if(bz!==false&&bC instanceof Function&&bC.$$type==null){if(bA==true){bC=this.__O(bC,bB[bD]);
}else{if(bB[bD]){bC.base=bB[bD];
}bC.self=bw;
}
if(qx.core.Variant.isSet("qx.aspects","on")){bC=qx.core.Aspect.wrap(bw.classname+"."+bD,bC,"member");
}}bB[bD]=bC;
}},__O:function(w,x){if(x){return function(){var bP=w.base;
w.base=x;
var bO=w.apply(this,arguments);
w.base=bP;
return bO;
};
}else{return w;
}},__P:function(br,bs){{};
var bt=qx.Interface.flatten([bs]);

if(br.$$implements){br.$$implements.push(bs);
br.$$flatImplements.push.apply(br.$$flatImplements,bt);
}else{br.$$implements=[bs];
br.$$flatImplements=bt;
}},__Q:function(K,L,M){{};

if(this.hasMixin(K,L)){return;
}var O=qx.Mixin.flatten([L]);
var N;

for(var i=0,l=O.length;i<l;i++){N=O[i];
if(N.$$events){this.__K(K,N.$$events,M);
}if(N.$$properties){this.__L(K,N.$$properties,M);
}if(N.$$members){this.__N(K,N.$$members,M,M,M);
}}if(K.$$includes){K.$$includes.push(L);
K.$$flatIncludes.push.apply(K.$$flatIncludes,O);
}else{K.$$includes=[L];
K.$$flatIncludes=O;
}},__R:function(){function bq(){arguments.callee.base.apply(this,arguments);
}return bq;
},__S:function(){return function(){};
},__T:function(G,name,H){var J=function(){var T=arguments.callee.constructor;
{};
if(!T.$$propertiesAttached){qx.core.Property.attach(T);
}var S=T.$$original.apply(this,arguments);
if(T.$$includes){var R=T.$$flatIncludes;

for(var i=0,l=R.length;i<l;i++){if(R[i].$$constructor){R[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return S;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var I=qx.core.Aspect.wrap(name,J,"constructor");
J.$$original=G;
J.constructor=I;
J=I;
}if(H==="singleton"){J.getInstance=this.getInstance;
}J.$$original=G;
G.wrapper=J;
return J;
}},defer:function(){if(qx.core.Variant.isSet(bm,bi)){for(var bK in qx.Bootstrap.$$registry){var bL=qx.Bootstrap.$$registry[bK];

for(var bM in bL){if(bL[bM] instanceof Function){bL[bM]=qx.core.Aspect.wrap(bK+bj+bM,bL[bM],bp);
}}}}}});
})();
(function(){var d="$$hash",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__U:{},__V:0,__W:[],register:function(p){var s=this.__U;

if(!s){return;
}var r=p.$$hash;

if(r==null){var q=this.__W;

if(q.length>0){r=q.pop();
}else{r=(this.__V++).toString(36);
}p.$$hash=r;
}{};
s[r]=p;
},unregister:function(e){var f=e.$$hash;

if(f==null){return;
}var g=this.__U;

if(g&&g[f]){delete g[f];
this.__W.push(f);
}try{delete e.$$hash;
}catch(t){if(e.removeAttribute){e.removeAttribute(d);
}}},toHashCode:function(k){{};
var n=k.$$hash;

if(n!=null){return n;
}var m=this.__W;

if(m.length>0){n=m.pop();
}else{n=(this.__V++).toString(36);
}return k.$$hash=n;
},clearHashCode:function(h){{};
var j=h.$$hash;

if(j!=null){this.__W.push(j);
try{delete h.$$hash;
}catch(z){if(h.removeAttribute){h.removeAttribute(d);
}}}},fromHashCode:function(u){return this.__U[u]||null;
},shutdown:function(){this.inShutDown=true;
var w=this.__U;
var y=[];

for(var x in w){y.push(x);
}y.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var v,i=0,l=y.length;

while(true){try{for(;i<l;i++){x=y[i];
v=w[x];

if(v&&v.dispose){v.dispose();
}}}catch(o){qx.Bootstrap.error(this,"Could not dispose object "+v.toString()+": "+o);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__U;
},getRegistry:function(){return this.__U;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var l="qx.client",k="on",j="function",i="mousedown",h="qx.bom.Event",g="return;",f="mouseover",d="HTMLEvents";
qx.Class.define(h,{statics:{addNativeListener:qx.core.Variant.select(l,{"mshtml":function(a,b,c){a.attachEvent(k+b,c);
},"default":function(y,z,A){y.addEventListener(z,A,false);
}}),removeNativeListener:qx.core.Variant.select(l,{"mshtml":function(B,C,D){try{B.detachEvent(k+C,D);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(p,q,r){p.removeEventListener(q,r,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(l,{"mshtml":function(e){if(e.type===f){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(l,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==i&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(t){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(s){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(m,n){if(document.createEventObject){var o=document.createEventObject();
return m.fireEvent(k+n,o);
}else{var o=document.createEvent(d);
o.initEvent(n,true,true);
return !m.dispatchEvent(o);
}},supportsEvent:qx.core.Variant.select(l,{"webkit":function(E,F){return E.hasOwnProperty(k+F);
},"default":function(u,v){var w=k+v;
var x=(w in u);

if(!x){x=typeof u[w]==j;

if(!x&&u.setAttribute){u.setAttribute(w,g);
x=typeof u[w]==j;
u.removeAttribute(w);
}}return x;
}})}});
})();
(function(){var C="|bubble",B="|capture",A="|",z="_",y="unload",x="UNKNOWN_",w="__bl",v="DOM_",u="c",t="__bk",q="WIN_",s="capture",r="qx.event.Manager",p="QX_";
qx.Class.define(r,{extend:Object,construct:function(W,X){this.__bg=W;
this.__bh=qx.core.ObjectRegistry.toHashCode(W);
this.__bi=X;
if(W.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(W,y,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(W,y,arguments.callee);
self.dispose();
}));
}this.__bj={};
this.__bk={};
this.__bl={};
this.__bm={};
},statics:{__bn:0,getNextUniqueId:function(){return (this.__bn++).toString(36);
}},members:{__bi:null,__bj:null,__bl:null,__bo:null,__bk:null,__bm:null,__bg:null,__bh:null,getWindow:function(){return this.__bg;
},getWindowId:function(){return this.__bh;
},getHandler:function(bk){var bl=this.__bk[bk.classname];

if(bl){return bl;
}return this.__bk[bk.classname]=new bk(this);
},getDispatcher:function(n){var o=this.__bl[n.classname];

if(o){return o;
}return this.__bl[n.classname]=new n(this,this.__bi);
},getListeners:function(bA,bB,bC){var bD=bA.$$hash||qx.core.ObjectRegistry.toHashCode(bA);
var bF=this.__bj[bD];

if(!bF){return null;
}var bG=bB+(bC?B:C);
var bE=bF[bG];
return bE?bE.concat():null;
},serializeListeners:function(D){var K=D.$$hash||qx.core.ObjectRegistry.toHashCode(D);
var M=this.__bj[K];
var I=[];

if(M){var G,L,E,H,J;

for(var F in M){G=F.indexOf(A);
L=F.substring(0,G);
E=F.charAt(G+1)==u;
H=M[F];

for(var i=0,l=H.length;i<l;i++){J=H[i];
I.push({self:J.context,handler:J.handler,type:L,capture:E});
}}}return I;
},toggleAttachedEvents:function(N,O){var T=N.$$hash||qx.core.ObjectRegistry.toHashCode(N);
var V=this.__bj[T];

if(V){var Q,U,P,R;

for(var S in V){Q=S.indexOf(A);
U=S.substring(0,Q);
P=S.charCodeAt(Q+1)===99;
R=V[S];

if(O){this.__bp(N,U,P);
}else{this.__bq(N,U,P);
}}}},hasListener:function(ck,cl,cm){{};
var cn=ck.$$hash||qx.core.ObjectRegistry.toHashCode(ck);
var cp=this.__bj[cn];

if(!cp){return false;
}var cq=cl+(cm?B:C);
var co=cp[cq];
return co&&co.length>0;
},importListeners:function(bH,bI){{};
var bO=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bP=this.__bj[bO]={};
var bL=qx.event.Manager;

for(var bJ in bI){var bM=bI[bJ];
var bN=bM.type+(bM.capture?B:C);
var bK=bP[bN];

if(!bK){bK=bP[bN]=[];
this.__bp(bH,bM.type,bM.capture);
}bK.push({handler:bM.listener,context:bM.self,unique:bM.unique||(bL.__bn++).toString(36)});
}},addListener:function(a,b,c,self,d){var h;
{};
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var m=this.__bj[j];

if(!m){m=this.__bj[j]={};
}var g=b+(d?B:C);
var f=m[g];

if(!f){f=m[g]=[];
}if(f.length===0){this.__bp(a,b,d);
}var k=(qx.event.Manager.__bn++).toString(36);
var e={handler:c,context:self,unique:k};
f.push(e);
return g+A+k;
},findHandler:function(cr,cs){var cC=false,cv=false,cD=false;
var cB;

if(cr.nodeType===1){cC=true;
cB=v+cr.tagName.toLowerCase()+z+cs;
}else if(cr==this.__bg){cv=true;
cB=q+cs;
}else if(cr.classname){cD=true;
cB=p+cr.classname+z+cs;
}else{cB=x+cr+z+cs;
}var cx=this.__bm;

if(cx[cB]){return cx[cB];
}var cA=this.__bi.getHandlers();
var cw=qx.event.IEventHandler;
var cy,cz,cu,ct;

for(var i=0,l=cA.length;i<l;i++){cy=cA[i];
cu=cy.SUPPORTED_TYPES;

if(cu&&!cu[cs]){continue;
}ct=cy.TARGET_CHECK;

if(ct){if(!cC&&ct===cw.TARGET_DOMNODE){continue;
}else if(!cv&&ct===cw.TARGET_WINDOW){continue;
}else if(!cD&&ct===cw.TARGET_OBJECT){continue;
}}cz=this.getHandler(cA[i]);

if(cy.IGNORE_CAN_HANDLE||cz.canHandleEvent(cr,cs)){cx[cB]=cz;
return cz;
}}return null;
},__bp:function(bw,bx,by){var bz=this.findHandler(bw,bx);

if(bz){bz.registerEvent(bw,bx,by);
return;
}{};
},removeListener:function(bm,bn,bo,self,bp){var bt;
{};
var bu=bm.$$hash||qx.core.ObjectRegistry.toHashCode(bm);
var bv=this.__bj[bu];

if(!bv){return false;
}var bq=bn+(bp?B:C);
var br=bv[bq];

if(!br){return false;
}var bs;

for(var i=0,l=br.length;i<l;i++){bs=br[i];

if(bs.handler===bo&&bs.context===self){qx.lang.Array.removeAt(br,i);

if(br.length==0){this.__bq(bm,bn,bp);
}return true;
}}return false;
},removeListenerById:function(bX,bY){var cf;
{};
var cd=bY.split(A);
var ci=cd[0];
var ca=cd[1].charCodeAt(0)==99;
var ch=cd[2];
var cg=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var cj=this.__bj[cg];

if(!cj){return false;
}var ce=ci+(ca?B:C);
var cc=cj[ce];

if(!cc){return false;
}var cb;

for(var i=0,l=cc.length;i<l;i++){cb=cc[i];

if(cb.unique===ch){qx.lang.Array.removeAt(cc,i);

if(cc.length==0){this.__bq(bX,ci,ca);
}return true;
}}return false;
},removeAllListeners:function(bd){var bh=bd.$$hash||qx.core.ObjectRegistry.toHashCode(bd);
var bj=this.__bj[bh];

if(!bj){return false;
}var bf,bi,be;

for(var bg in bj){if(bj[bg].length>0){bf=bg.split(A);
bi=bf[0];
be=bf[1]===s;
this.__bq(bd,bi,be);
}}delete this.__bj[bh];
return true;
},__bq:function(Y,ba,bb){var bc=this.findHandler(Y,ba);

if(bc){bc.unregisterEvent(Y,ba,bb);
return;
}{};
},dispatchEvent:function(bQ,event){var bV;
{};
var bW=event.getType();

if(!event.getBubbles()&&!this.hasListener(bQ,bW)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bQ);
}var bU=this.__bi.getDispatchers();
var bT;
var bS=false;

for(var i=0,l=bU.length;i<l;i++){bT=this.getDispatcher(bU[i]);
if(bT.canDispatchEvent(bQ,event,bW)){bT.dispatchEvent(bQ,event,bW);
bS=true;
break;
}}
if(!bS){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bW+" on "+bQ);
return true;
}var bR=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bR;
},dispose:function(){this.__bi.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,t);
qx.util.DisposeUtil.disposeMap(this,w);
this.__bj=this.__bg=this.__bo=null;
this.__bi=this.__bm=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(q){return q.nodeType===
this.DOCUMENT?q:
q.ownerDocument||q.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.parentWindow;
},"default":function(h){if(h.nodeType==null){return h;
}if(h.nodeType!==this.DOCUMENT){h=h.ownerDocument;
}return h.defaultView;
}}),getDocumentElement:function(j){return this.getDocument(j).documentElement;
},getBodyElement:function(f){return this.getDocument(f).body;
},isNode:function(t){return !!(t&&t.nodeType!=null);
},isElement:function(n){return !!(n&&n.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(r){return !!(r&&r.nodeType===this.TEXT);
},isWindow:function(b){return !!(b&&b.history&&b.location&&b.document);
},isNodeName:function(k,l){if(!l||!k||!k.nodeName){return false;
}return l.toLowerCase()==qx.dom.Node.getName(k);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(o){if(!o||!o.nodeType){return null;
}
switch(o.nodeType){case 1:var i,a=[],p=o.childNodes,length=p.length;

for(i=0;i<length;i++){a[i]=this.getText(p[i]);
}return a.join(c);
case 2:return o.nodeValue;
break;
case 3:return o.nodeValue;
break;
}return null;
}}});
})();
(function(){var o="mshtml",n="qx.client",m="[object Array]",k="qx.lang.Array",j="qx",h="number",g="string";
qx.Class.define(k,{statics:{toArray:function(bd,be){return this.cast(bd,Array,be);
},cast:function(Y,ba,bb){if(Y.constructor===ba){return Y;
}
if(qx.Class.hasInterface(Y,qx.data.IListData)){var Y=Y.toArray();
}var bc=new ba;
if(qx.core.Variant.isSet(n,o)){if(Y.item){for(var i=bb||0,l=Y.length;i<l;i++){bc.push(Y[i]);
}return bc;
}}if(Object.prototype.toString.call(Y)===m&&bb==null){bc.push.apply(bc,Y);
}else{bc.push.apply(bc,Array.prototype.slice.call(Y,bb||0));
}return bc;
},fromArguments:function(J,K){return Array.prototype.slice.call(J,K||0);
},fromCollection:function(bh){if(qx.core.Variant.isSet(n,o)){if(bh.item){var bi=[];

for(var i=0,l=bh.length;i<l;i++){bi[i]=bh[i];
}return bi;
}}return Array.prototype.slice.call(bh,0);
},fromShortHand:function(R){var T=R.length;
var S=qx.lang.Array.clone(R);
switch(T){case 1:S[1]=S[2]=S[3]=S[0];
break;
case 2:S[2]=S[0];
case 3:S[3]=S[1];
}return S;
},clone:function(s){return s.concat();
},insertAt:function(G,H,i){G.splice(i,0,H);
return G;
},insertBefore:function(V,W,X){var i=V.indexOf(X);

if(i==-1){V.push(W);
}else{V.splice(i,0,W);
}return V;
},insertAfter:function(d,e,f){var i=d.indexOf(f);

if(i==-1||i==(d.length-1)){d.push(e);
}else{d.splice(i+1,0,e);
}return d;
},removeAt:function(p,i){return p.splice(i,1)[0];
},removeAll:function(I){I.length=0;
return this;
},append:function(b,c){{};
Array.prototype.push.apply(b,c);
return b;
},exclude:function(bj,bk){{};

for(var i=0,bm=bk.length,bl;i<bm;i++){bl=bj.indexOf(bk[i]);

if(bl!=-1){bj.splice(bl,1);
}}return bj;
},remove:function(q,r){var i=q.indexOf(r);

if(i!=-1){q.splice(i,1);
return r;
}},contains:function(bp,bq){return bp.indexOf(bq)!==-1;
},equals:function(bf,bg){var length=bf.length;

if(length!==bg.length){return false;
}
for(var i=0;i<length;i++){if(bf[i]!==bg[i]){return false;
}}return true;
},sum:function(bn){var bo=0;

for(var i=0,l=bn.length;i<l;i++){bo+=bn[i];
}return bo;
},max:function(O){{};
var i,Q=O.length,P=O[0];

for(i=1;i<Q;i++){if(O[i]>P){P=O[i];
}}return P===undefined?null:P;
},min:function(L){{};
var i,N=L.length,M=L[0];

for(i=1;i<N;i++){if(L[i]<M){M=L[i];
}}return M===undefined?null:M;
},unique:function(t){var D=[],v={},y={},A={};
var z,u=0;
var E=j+qx.lang.Date.now();
var w=false,C=false,F=false;
for(var i=0,B=t.length;i<B;i++){z=t[i];
if(z===null){if(!w){w=true;
D.push(z);
}}else if(z===undefined){}else if(z===false){if(!C){C=true;
D.push(z);
}}else if(z===true){if(!F){F=true;
D.push(z);
}}else if(typeof z===g){if(!v[z]){v[z]=1;
D.push(z);
}}else if(typeof z===h){if(!y[z]){y[z]=1;
D.push(z);
}}else{x=z[E];

if(x==null){x=z[E]=u++;
}
if(!A[x]){A[x]=z;
D.push(z);
}}}for(var x in A){try{delete A[x][E];
}catch(a){try{A[x][E]=null;
}catch(U){throw new Error("Cannot clean-up map entry doneObjects["+x+"]["+E+"]");
}}}return D;
}}});
})();
(function(){var C="()",B=".",A=".prototype.",z='anonymous()',y="qx.lang.Function",x=".constructor()";
qx.Class.define(y,{statics:{getCaller:function(i){return i.caller?i.caller.callee:i.callee.caller;
},getName:function(a){if(a.displayName){return a.displayName;
}
if(a.$$original||a.wrapper||a.classname){return a.classname+x;
}
if(a.$$mixin){for(var c in a.$$mixin.$$members){if(a.$$mixin.$$members[c]==a){return a.$$mixin.name+A+c+C;
}}for(var c in a.$$mixin){if(a.$$mixin[c]==a){return a.$$mixin.name+B+c+C;
}}}
if(a.self){var d=a.self.constructor;

if(d){for(var c in d.prototype){if(d.prototype[c]==a){return d.classname+A+c+C;
}}for(var c in d){if(d[c]==a){return d.classname+B+c+C;
}}}}var b=a.toString().match(/function\s*(\w*)\s*\(.*/);

if(b&&b.length>=1&&b[1]){return b[1]+C;
}return z;
},globalEval:function(h){if(window.execScript){return window.execScript(h);
}else{return eval.call(window,h);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(e,f){{};
if(!f){return e;
}if(!(f.self||f.args||f.delay!=null||f.periodical!=null||f.attempt)){return e;
}return function(event){{};
var G=qx.lang.Array.fromArguments(arguments);
if(f.args){G=f.args.concat(G);
}
if(f.delay||f.periodical){var F=qx.event.GlobalError.observeMethod(function(){return e.apply(f.self||this,G);
});

if(f.delay){return window.setTimeout(F,f.delay);
}
if(f.periodical){return window.setInterval(F,f.periodical);
}}else if(f.attempt){var H=false;

try{H=e.apply(f.self||this,G);
}catch(l){}return H;
}else{return e.apply(f.self||this,G);
}};
},bind:function(D,self,E){return this.create(D,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(j,k){return this.create(j,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(o,self,p){if(arguments.length<3){return function(event){return o.call(self||this,event||window.event);
};
}else{var q=qx.lang.Array.fromArguments(arguments,2);
return function(event){var g=[event||window.event];
g.push.apply(g,q);
o.apply(self||this,g);
};
}},attempt:function(m,self,n){return this.create(m,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(u,v,self,w){return this.create(u,{delay:v,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(r,s,self,t){return this.create(r,{periodical:s,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var i="qx.event.Registration";
qx.Class.define(i,{statics:{__br:{},getManager:function(M){if(M==null){{};
M=window;
}else if(M.nodeType){M=qx.dom.Node.getWindow(M);
}else if(!qx.dom.Node.isWindow(M)){M=window;
}var O=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var N=this.__br[O];

if(!N){N=new qx.event.Manager(M,this);
this.__br[O]=N;
}return N;
},removeManager:function(s){var t=s.getWindowId();
delete this.__br[t];
},addListener:function(o,p,q,self,r){return this.getManager(o).addListener(o,p,q,self,r);
},removeListener:function(G,H,I,self,J){return this.getManager(G).removeListener(G,H,I,self,J);
},removeListenerById:function(P,Q){return this.getManager(P).removeListenerById(P,Q);
},removeAllListeners:function(v){return this.getManager(v).removeAllListeners(v);
},hasListener:function(C,D,E){return this.getManager(C).hasListener(C,D,E);
},serializeListeners:function(j){return this.getManager(j).serializeListeners(j);
},createEvent:function(k,l,m){{};
if(l==null){l=qx.event.type.Event;
}var n=qx.event.Pool.getInstance().getObject(l);

if(!n){return;
}m?n.init.apply(n,m):n.init();
if(k){n.setType(k);
}return n;
},dispatchEvent:function(u,event){return this.getManager(u).dispatchEvent(u,event);
},fireEvent:function(w,x,y,z){var A;
{};
var B=this.createEvent(x,y||null,z);
return this.getManager(w).dispatchEvent(w,B);
},fireNonBubblingEvent:function(c,d,e,f){{};
var g=this.getManager(c);

if(!g.hasListener(c,d,false)){return true;
}var h=this.createEvent(d,e||null,f);
return g.dispatchEvent(c,h);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bs:[],addHandler:function(F){{};
this.__bs.push(F);
this.__bs.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bs;
},__bt:[],addDispatcher:function(K,L){{};
this.__bt.push(K);
this.__bt.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bt;
}}});
})();
(function(){var k=":",j="qx.client",h="anonymous",g="...",f="qx.dev.StackTrace",e="",d="\n",c="/source/class/",b=".";
qx.Class.define(f,{statics:{getStackTrace:qx.core.Variant.select(j,{"gecko":function(){try{throw new Error();
}catch(o){var w=this.getStackTraceFromError(o);
qx.lang.Array.removeAt(w,0);
var u=this.getStackTraceFromCaller(arguments);
var s=u.length>w.length?u:w;

for(var i=0;i<Math.min(u.length,w.length);i++){var t=u[i];

if(t.indexOf(h)>=0){continue;
}var A=t.split(k);

if(A.length!=2){continue;
}var y=A[0];
var r=A[1];
var q=w[i];
var B=q.split(k);
var x=B[0];
var p=B[1];

if(qx.Class.getByName(x)){var v=x;
}else{v=y;
}var z=v+k;

if(r){z+=r+k;
}z+=p;
s[i]=z;
}return s;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var l;

try{l.bar();
}catch(bc){var m=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(m,0);
return m;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(n){return [];
},"default":function(H){var M=[];
var L=qx.lang.Function.getCaller(H);
var I={};

while(L){var J=qx.lang.Function.getName(L);
M.push(J);

try{L=L.caller;
}catch(a){break;
}
if(!L){break;
}var K=qx.core.ObjectRegistry.toHashCode(L);

if(I[K]){M.push(g);
break;
}I[K]=L;
}return M;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(U){if(!U.stack){return [];
}var bb=/@(.+):(\d+)$/gm;
var V;
var W=[];

while((V=bb.exec(U.stack))!=null){var X=V[1];
var ba=V[2];
var Y=this.__bu(X);
W.push(Y+k+ba);
}return W;
},"webkit":function(G){if(G.sourceURL&&G.line){return [this.__bu(G.sourceURL)+k+G.line];
}else{return [];
}},"opera":function(N){if(N.message.indexOf("Backtrace:")<0){return [];
}var P=[];
var Q=qx.lang.String.trim(N.message.split("Backtrace:")[1]);
var R=Q.split(d);

for(var i=0;i<R.length;i++){var O=R[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(O&&O.length>=2){var T=O[1];
var S=this.__bu(O[2]);
P.push(S+k+T);
}}return P;
},"default":function(){return [];
}}),__bu:function(C){var F=c;
var D=C.indexOf(F);
var E=(D==-1)?C:C.substring(D+F.length).replace(/\//g,b).replace(/\.js$/,e);
return E;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(i){this.__bv=[];
this.setMaxMessages(i||50);
},members:{__bw:0,__bv:null,__bx:50,setMaxMessages:function(b){this.__bx=b;
this.clearHistory();
},getMaxMessages:function(){return this.__bx;
},process:function(g){var h=this.getMaxMessages();

if(this.__bv.length<h){this.__bv.push(g);
}else{this.__bv[this.__bw++]=g;

if(this.__bw>=h){this.__bw=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__bv.length){c=this.__bv.length;
}
if(this.__bv.length==this.getMaxMessages()){var e=this.__bw-1;
}else{e=this.__bv.length-1;
}var d=e-c+1;

if(d<0){d+=this.__bv.length;
}var f;

if(d<=e){f=this.__bv.slice(d,e+1);
}else{f=this.__bv.slice(d,this.__bv.length).concat(this.__bv.slice(0,e+1));
}return f;
},clearHistory:function(){this.__bv=[];
this.__bw=0;
}}});
})();
(function(){var bh="node",bg="error",bf="...(+",be="array",bd=")",bc="info",bb="instance",ba="string",Y="null",X="class",bC="number",bB="stringify",bA="]",bz="unknown",by="function",bx="boolean",bw="debug",bv="map",bu="undefined",bt="qx.log.Logger",bo=")}",bp="#",bm="warn",bn="document",bk="{...(",bl="[",bi="text[",bj="[...(",bq="\n",br=")]",bs="object";
qx.Class.define(bt,{statics:{__by:bw,setLevel:function(S){this.__by=S;
},getLevel:function(){return this.__by;
},setTreshold:function(bK){this.__bB.setMaxMessages(bK);
},getTreshold:function(){return this.__bB.getMaxMessages();
},__bz:{},__bA:0,register:function(D){if(D.$$id){return;
}var E=this.__bA++;
this.__bz[E]=D;
D.$$id=E;
var F=this.__bB.getAllLogEvents();

for(var i=0,l=F.length;i<l;i++){D.process(F[i]);
}},unregister:function(c){var d=c.$$id;

if(d==null){return;
}delete this.__bz[d];
delete c.$$id;
},debug:function(bI,bJ){qx.log.Logger.__bD(bw,arguments);
},info:function(bD,bE){qx.log.Logger.__bD(bc,arguments);
},warn:function(Q,R){qx.log.Logger.__bD(bm,arguments);
},error:function(e,f){qx.log.Logger.__bD(bg,arguments);
},trace:function(G){qx.log.Logger.__bD(bc,[G,qx.dev.StackTrace.getStackTrace().join(bq)]);
},deprecatedMethodWarning:function(A,B){var C;
{};
},deprecatedClassWarning:function(g,h){var j;
{};
},deprecatedEventWarning:function(bF,event,bG){var bH;
{};
},deprecatedMixinWarning:function(n,o){var p;
{};
},deprecatedConstantWarning:function(T,U,V){var self,W;
{};
},clear:function(){this.__bB.clearHistory();
},__bB:new qx.log.appender.RingBuffer(50),__bC:{debug:0,info:1,warn:2,error:3},__bD:function(q,r){var w=this.__bC;

if(w[q]<w[this.__by]){return;
}var t=r.length<2?null:r[0];
var v=t?1:0;
var s=[];

for(var i=v,l=r.length;i<l;i++){s.push(this.__bF(r[i],true));
}var x=new Date;
var y={time:x,offset:x-qx.Bootstrap.LOADSTART,level:q,items:s,win:window};
if(t){if(t instanceof qx.core.Object){y.object=t.$$hash;
}else if(t.$$type){y.clazz=t;
}}this.__bB.process(y);
var z=this.__bz;

for(var u in z){z[u].process(y);
}},__bE:function(k){if(k===undefined){return bu;
}else if(k===null){return Y;
}
if(k.$$type){return X;
}var m=typeof k;

if(m===by||m==ba||m===bC||m===bx){return m;
}else if(m===bs){if(k.nodeType){return bh;
}else if(k.classname){return bb;
}else if(k instanceof Array){return be;
}else if(k instanceof Error){return bg;
}else{return bv;
}}
if(k.toString){return bB;
}return bz;
},__bF:function(H,I){var P=this.__bE(H);
var L=bz;
var K=[];

switch(P){case Y:case bu:L=P;
break;
case ba:case bC:case bx:L=H;
break;
case bh:if(H.nodeType===9){L=bn;
}else if(H.nodeType===3){L=bi+H.nodeValue+bA;
}else if(H.nodeType===1){L=H.nodeName.toLowerCase();

if(H.id){L+=bp+H.id;
}}else{L=bh;
}break;
case by:L=qx.lang.Function.getName(H)||P;
break;
case bb:L=H.basename+bl+H.$$hash+bA;
break;
case X:case bB:L=H.toString();
break;
case bg:K=qx.dev.StackTrace.getStackTraceFromError(H);
L=H.toString();
break;
case be:if(I){L=[];

for(var i=0,l=H.length;i<l;i++){if(L.length>20){L.push(bf+(l-i)+bd);
break;
}L.push(this.__bF(H[i],false));
}}else{L=bj+H.length+br;
}break;
case bv:if(I){var J;
var O=[];

for(var N in H){O.push(N);
}O.sort();
L=[];

for(var i=0,l=O.length;i<l;i++){if(L.length>20){L.push(bf+(l-i)+bd);
break;
}N=O[i];
J=this.__bF(H[N],false);
J.key=N;
L.push(J);
}}else{var M=0;

for(var N in H){M++;
}L=bk+M+bo;
}break;
}return {type:P,text:L,trace:K};
}},defer:function(a){var b=qx.Bootstrap.$$logs;

for(var i=0;i<b.length;i++){this.__bD(b[i][0],b[i][1]);
}qx.Bootstrap.debug=a.debug;
qx.Bootstrap.info=a.info;
qx.Bootstrap.warn=a.warn;
qx.Bootstrap.error=a.error;
qx.Bootstrap.trace=a.trace;
}});
})();
(function(){var bo="set",bn="get",bm="reset",bl="qx.core.Object",bk="]",bj="[",bi="$$user_",bh="Object";
qx.Class.define(bl,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bh},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bj+this.$$hash+bk;
},base:function(V,W){{};

if(arguments.length===1){return V.callee.base.call(this);
}else{return V.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(p){return p.callee.self;
},clone:function(){var h=this.constructor;
var g=new h;
var k=qx.Class.getProperties(h);
var j=qx.core.Property.$$store.user;
var m=qx.core.Property.$$method.set;
var name;
for(var i=0,l=k.length;i<l;i++){name=k[i];

if(this.hasOwnProperty(j[name])){g[m[name]](this[j[name]]);
}}return g;
},set:function(B,C){var E=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(B)){if(!this[E[B]]){if(this[bo+qx.Bootstrap.firstUp(B)]!=undefined){this[bo+qx.Bootstrap.firstUp(B)](C);
return;
}{};
}return this[E[B]](C);
}else{for(var D in B){if(!this[E[D]]){if(this[bo+qx.Bootstrap.firstUp(D)]!=undefined){this[bo+qx.Bootstrap.firstUp(D)](B[D]);
continue;
}{};
}this[E[D]](B[D]);
}return this;
}},get:function(r){var s=qx.core.Property.$$method.get;

if(!this[s[r]]){if(this[bn+qx.Bootstrap.firstUp(r)]!=undefined){return this[bn+qx.Bootstrap.firstUp(r)]();
}{};
}return this[s[r]]();
},reset:function(a){var b=qx.core.Property.$$method.reset;

if(!this[b[a]]){if(this[bm+qx.Bootstrap.firstUp(a)]!=undefined){this[bm+qx.Bootstrap.firstUp(a)]();
return;
}{};
}this[b[a]]();
},__bG:qx.event.Registration,addListener:function(bu,bv,self,bw){if(!this.$$disposed){return this.__bG.addListener(this,bu,bv,self,bw);
}return null;
},addListenerOnce:function(L,M,self,N){var O=function(e){M.call(self||this,e);
this.removeListener(L,O,this,N);
};
return this.addListener(L,O,this,N);
},removeListener:function(t,u,self,v){if(!this.$$disposed){return this.__bG.removeListener(this,t,u,self,v);
}return false;
},removeListenerById:function(f){if(!this.$$disposed){return this.__bG.removeListenerById(this,f);
}return false;
},hasListener:function(by,bz){return this.__bG.hasListener(this,by,bz);
},dispatchEvent:function(bx){if(!this.$$disposed){return this.__bG.dispatchEvent(this,bx);
}return true;
},fireEvent:function(bp,bq,br){if(!this.$$disposed){return this.__bG.fireEvent(this,bp,bq,br);
}return true;
},fireNonBubblingEvent:function(S,T,U){if(!this.$$disposed){return this.__bG.fireNonBubblingEvent(this,S,T,U);
}return true;
},fireDataEvent:function(w,x,y,z){if(!this.$$disposed){if(y===undefined){y=null;
}return this.__bG.fireNonBubblingEvent(this,w,qx.event.type.Data,[x,y,!!z]);
}return true;
},__bH:null,setUserData:function(c,d){if(!this.__bH){this.__bH={};
}this.__bH[c]=d;
},getUserData:function(bs){if(!this.__bH){return null;
}var bt=this.__bH[bs];
return bt===undefined?null:bt;
},__bI:qx.log.Logger,debug:function(A){this.__bI.debug(this,A);
},info:function(P){this.__bI.info(this,P);
},warn:function(q){this.__bI.warn(this,q);
},error:function(K){this.__bI.error(this,K);
},trace:function(){this.__bI.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var I,G;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var H=this.constructor;
var F;

while(H.superclass){if(H.$$destructor){H.$$destructor.call(this);
}if(H.$$includes){F=H.$$flatIncludes;

for(var i=0,l=F.length;i<l;i++){if(F[i].$$destructor){F[i].$$destructor.call(this);
}}}H=H.superclass;
}var J=qx.Class.getProperties(this.constructor);

for(var i=0,l=J.length;i<l;i++){delete this[bi+J[i]];
}{};
},_disposeFields:function(R){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(Q){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(o){qx.util.DisposeUtil.disposeArray(this,o);
},_disposeMap:function(n){qx.util.DisposeUtil.disposeMap(this,n);
}},settings:{"qx.disposerDebugLevel":0},defer:function(X){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bH=null;
var bb=this.constructor;
var bf;
var bg=qx.core.Property.$$store;
var bd=bg.user;
var be=bg.theme;
var Y=bg.inherit;
var bc=bg.useinit;
var ba=bg.init;

while(bb){bf=bb.$$properties;

if(bf){for(var name in bf){if(bf[name].dispose){this[bd[name]]=this[be[name]]=this[Y[name]]=this[bc[name]]=this[ba[name]]=undefined;
}}}bb=bb.superclass;
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__rE:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__rE=null;
},getInsets:function(){if(this.__rE){return this.__rE;
}var j=this._getDefaultInsets();
return this.__rE={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__rE=null;
}},destruct:function(){this.__rE=null;
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
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(v,w,x){arguments.callee.base.call(this);
if(v!=null){this.setWidth(v);
}
if(w!=null){this.setStyle(w);
}
if(x!=null){this.setColor(x);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__rF:null,_getDefaultInsets:function(){var u=this.getWidth();
return {top:u,right:u,bottom:u,left:u};
},_isInitialized:function(){return !!this.__rF;
},getMarkup:function(){if(this.__rF){return this.__rF;
}var y={position:a,top:0,left:0};
var z=this.getWidth();
{};
var B=qx.theme.manager.Color.getInstance();
y.border=z+c+this.getStyle()+e+(B.resolve(this.getColor())||n);
var A=this._generateBackgroundMarkup(y);
return this.__rF=A;
},resize:function(p,q,r){var t=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(t||qx.bom.client.Feature.CONTENT_BOX){var s=this.getWidth()*2;
q-=s;
r-=s;
if(q<0){q=0;
}
if(r<0){r=0;
}}p.style.width=q+l;
p.style.height=r+l;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__rF=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){arguments.callee.base.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__rG:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__rG;
},getMarkup:function(){if(this.__rG){return this.__rG;
}var g={position:a,top:0,left:0};
var h=this._generateBackgroundMarkup(g);
return this.__rG=h;
},resize:function(l,m,n){l.style.width=m+f;
l.style.height=n+f;
},tint:function(i,j){var k=qx.theme.manager.Color.getInstance();

if(j==null){j=this.getBackgroundColor();
}i.style.backgroundColor=k.resolve(j)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__rG=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",F=" ",E="shorthand",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",x="styleTop",w="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="scale",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.Single",v="border-bottom",u="absolute";
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(L,M,N){arguments.callee.base.call(this);
if(L!=null){this.setWidth(L);
}
if(M!=null){this.setStyle(M);
}
if(N!=null){this.setColor(N);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,o]},right:{group:[r,B,p]},top:{group:[C,x,m]},bottom:{group:[y,q,w]},width:{group:[C,r,y,z],mode:E},style:{group:[x,B,q,A],mode:E},color:{group:[m,p,w,o],mode:E}},members:{__rH:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__rH;
},getMarkup:function(G){if(this.__rH){return this.__rH;
}var H=qx.theme.manager.Color.getInstance();
var I={};
var K=this.getWidthTop();

if(K>0){I[k]=K+e+this.getStyleTop()+F+(H.resolve(this.getColorTop())||g);
}var K=this.getWidthRight();

if(K>0){I[s]=K+e+this.getStyleRight()+F+(H.resolve(this.getColorRight())||g);
}var K=this.getWidthBottom();

if(K>0){I[v]=K+e+this.getStyleBottom()+F+(H.resolve(this.getColorBottom())||g);
}var K=this.getWidthLeft();

if(K>0){I[l]=K+e+this.getStyleLeft()+F+(H.resolve(this.getColorLeft())||g);
}{};
I.position=u;
I.top=0;
I.left=0;
var J=this._generateBackgroundMarkup(I);
return this.__rH=J;
},resize:function(O,P,Q){var S=this.getBackgroundImage()&&this.getBackgroundRepeat()==n;

if(S||qx.bom.client.Feature.CONTENT_BOX){var R=this.getInsets();
P-=R.left+R.right;
Q-=R.top+R.bottom;
if(P<0){P=0;
}
if(Q<0){Q=0;
}}O.style.width=P+D;
O.style.height=Q+D;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.style.backgroundColor=V.resolve(U)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__rH=null;
}});
})();
(function(){var k="px",j="0px",i="-1px",h="no-repeat",g="scale-x",f="scale-y",e="-tr",d="-l",c='</div>',b="scale",y="qx.client",x="-br",w="-t",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",p="",n="-bl",o="-c",l="mshtml",m="qx.ui.decoration.Grid";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(O,P){arguments.callee.base.call(this);
if(O!=null){this.setBaseImage(O);
}
if(P!=null){this.setInsets(P);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__rI:null,__rJ:null,__rK:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__rI;
},getMarkup:function(){if(this.__rI){return this.__rI;
}var D=qx.bom.element.Decoration;
var E=this.__rJ;
var F=this.__rK;
var G=[];
G.push(t);
G.push(D.create(E.tl,h,{top:0,left:0}));
G.push(D.create(E.t,g,{top:0,left:F.left+k}));
G.push(D.create(E.tr,h,{top:0,right:0}));
G.push(D.create(E.bl,h,{bottom:0,left:0}));
G.push(D.create(E.b,g,{bottom:0,left:F.left+k}));
G.push(D.create(E.br,h,{bottom:0,right:0}));
G.push(D.create(E.l,f,{top:F.top+k,left:0}));
G.push(D.create(E.c,b,{top:F.top+k,left:F.left+k}));
G.push(D.create(E.r,f,{top:F.top+k,right:0}));
G.push(c);
return this.__rI=G.join(p);
},resize:function(z,A,B){var C=this.__rK;
var innerWidth=A-C.left-C.right;
var innerHeight=B-C.top-C.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}z.style.width=A+k;
z.style.height=B+k;
z.childNodes[1].style.width=innerWidth+k;
z.childNodes[4].style.width=innerWidth+k;
z.childNodes[7].style.width=innerWidth+k;
z.childNodes[6].style.height=innerHeight+k;
z.childNodes[7].style.height=innerHeight+k;
z.childNodes[8].style.height=innerHeight+k;

if(qx.core.Variant.isSet(y,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(A%2==1){z.childNodes[2].style.marginRight=i;
z.childNodes[5].style.marginRight=i;
z.childNodes[8].style.marginRight=i;
}else{z.childNodes[2].style.marginRight=j;
z.childNodes[5].style.marginRight=j;
z.childNodes[8].style.marginRight=j;
}
if(B%2==1){z.childNodes[3].style.marginBottom=i;
z.childNodes[4].style.marginBottom=i;
z.childNodes[5].style.marginBottom=i;
}else{z.childNodes[3].style.marginBottom=j;
z.childNodes[4].style.marginBottom=j;
z.childNodes[5].style.marginBottom=j;
}}}},tint:function(S,T){},_applyBaseImage:function(H,I){{};

if(H){var M=this._resolveImageUrl(H);
var N=/(.*)(\.[a-z]+)$/.exec(M);
var L=N[1];
var K=N[2];
var J=this.__rJ={tl:L+v+K,t:L+w+K,tr:L+e+K,bl:L+n+K,b:L+r+K,br:L+x+K,l:L+d+K,c:L+o+K,r:L+u+K};
this.__rK=this._computeEdgeSizes(J);
}},_resolveImageUrl:function(a){return qx.util.AliasManager.getInstance().resolve(a);
},_computeEdgeSizes:function(Q){var R=qx.util.ResourceManager.getInstance();
return {top:R.getImageHeight(Q.t),bottom:R.getImageHeight(Q.b),left:R.getImageWidth(Q.l),right:R.getImageWidth(Q.r)};
}},destruct:function(){this.__rI=this.__rJ=this.__rK=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(E,F,G){arguments.callee.base.call(this);
if(E!=null){this.setOuterColor(E);
}
if(F!=null){this.setInnerColor(F);
}
if(G!=null){this.setInnerOpacity(G);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__rL:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__rL;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__rL){return this.__rL;
}var z=qx.theme.manager.Color.getInstance();
var A=[];
var D=d+z.resolve(this.getOuterColor())+b;
var C=d+z.resolve(this.getInnerColor())+b;
A.push(k);
A.push(f);
A.push(e,D);
A.push(qx.bom.element.Opacity.compile(0.35));
A.push(i);
A.push(n);
A.push(q,D);
A.push(r,D);
A.push(i);
A.push(f);
A.push(m);
A.push(p,D);
A.push(s,D);
A.push(i);
var B={position:l,top:g,left:g};
A.push(this._generateBackgroundMarkup(B));
A.push(t);
A.push(e,C);
A.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
A.push(i);
A.push(v);
return this.__rL=A.join(c);
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
}var R=a;
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
},tint:function(w,x){var y=qx.theme.manager.Color.getInstance();

if(x==null){x=this.getBackgroundColor();
}w.childNodes[3].style.backgroundColor=y.resolve(x)||c;
}},destruct:function(){this.__rL=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var d="decoration/toolbar/toolbar-gradient.png",c="border-main",b="inspector.theme.Decoration",a="scale";
qx.Theme.define(b,{extend:qx.theme.modern.Decoration,decorations:{"myToolbar":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:c,backgroundImage:d,backgroundRepeat:a}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ew:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__ew();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__ex:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__ey:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__ex){K.push(J);
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
}else{this.NAME=this.__ex[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__ey();
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
(function(){var gi="button-frame",gh="atom",gg="widget",gf="main",ge="button",gd="text-selected",gc="image",gb="bold",ga="middle",fY="background-light",eM="text-disabled",eL="groupbox",eK="decoration/arrows/down.png",eJ="cell",eI="selected",eH="border-invalid",eG="input",eF="input-disabled",eE="menu-button",eD="input-focused-invalid",gp="toolbar-button",gq="spinner",gn="input-focused",go="popup",gl="tooltip",gm="list",gj="tree-item",gk="treevirtual-contract",gr="scrollbar",gs="datechooser/nav-button",fH="text-hovered",fG="center",fJ="treevirtual-expand",fI="textfield",fL="label",fK="decoration/arrows/right.png",fN="background-application",fM="radiobutton",fF="white",fE="invalid",cI="combobox",cJ="right-top",cK="checkbox",cL="text-title",cM="qx/static/blank.gif",cN="scrollbar/button",cO="right",cP="combobox/button",cQ="icon/16/places/folder.png",cR="text-label",gG="decoration/tree/closed.png",gF="scrollbar-slider-horizontal",gE="decoration/arrows/left.png",gD="button-focused",gK="text-light",gJ="menu-slidebar-button",gI="text-input",gH="slidebar/button-forward",gM="background-splitpane",gL=".png",dL="decoration/tree/open.png",dM="default",dJ="decoration/arrows/down-small.png",dK="datechooser",dP="slidebar/button-backward",dQ="selectbox",dN="treevirtual-folder",dO="shadow-popup",dH="icon/16/mimetypes/office-document.png",dI="background-medium",dm="table",dl="decoration/arrows/up.png",dp="decoration/form/",dn="",di="-invalid",dh="icon/16/places/folder-open.png",dk="button-checked",dj="decoration/window/maximize-active-hovered.png",dg="radiobutton-hovered",df="decoration/cursors/",dW="slidebar",dX="tooltip-error-arrow",dY="table-scroller-focus-indicator",ea="move-frame",dS="nodrop",dT="decoration/table/boolean-true.png",dU="table-header-cell",dV="menu",eb="app-header",ec="row-layer",dA="text-inactive",dz="move",dy="radiobutton-checked-focused",dx="decoration/window/restore-active-hovered.png",dw="shadow-window",dv="table-column-button",du="right.png",dt="tabview-page-button-bottom-inactive",dE="tooltip-error",dD="window-statusbar",ed="button-hovered",ee="decoration/scrollbar/scrollbar-",ef="background-tip",eg="scrollbar-slider-horizontal-disabled",eh="table-scroller-header",ei="button-pressed",ej="table-pane",ek="decoration/window/close-active.png",el="native",em="checkbox-hovered",eU="button-invalid-shadow",eT="checkbox-checked",eS="decoration/window/minimize-active-hovered.png",eR="menubar",eY="icon/16/actions/dialog-cancel.png",eX="tabview-page-button-top-inactive",eW="tabview-page-button-left-inactive",eV="menu-slidebar",fd="toolbar-button-checked",fc="decoration/tree/open-selected.png",fA="radiobutton-checked",fB="decoration/window/minimize-inactive.png",fy="icon/16/apps/office-calendar.png",fz="group",fw="tabview-page-button-right-inactive",fx="decoration/window/minimize-active.png",fu="decoration/window/restore-inactive.png",fv="checkbox-checked-focused",fC="splitpane",fD="combobox/textfield",fR="button-preselected-focused",fQ="decoration/window/close-active-hovered.png",fT="qx/icon/Tango/16/actions/window-close.png",fS="checkbox-pressed",fV="button-disabled",fU="selected-dragover",fX="border-separator",fW="decoration/window/maximize-inactive.png",fP="dragover",fO="scrollarea",gz="scrollbar-vertical",gA="decoration/menu/checkbox-invert.gif",gB="decoration/toolbar/toolbar-handle-knob.gif",gC="icon/22/mimetypes/office-document.png",gv="button-preselected",gw="button-checked-focused",gx="up.png",gy="best-fit",gt="decoration/tree/closed-selected.png",gu="qx.theme.modern.Appearance",cH="text-active",cG="toolbar-button-hovered",cF="progressive-table-header",cE="decoration/table/select-column-order.png",cD="decoration/menu/radiobutton.gif",cC="decoration/arrows/forward.png",cB="decoration/table/descending.png",cA="window-captionbar-active",cz="checkbox-checked-hovered",cy="scrollbar-slider-vertical",cU="toolbar",cV="alias",cS="decoration/window/restore-active.png",cT="decoration/table/boolean-false.png",cY="checkbox-checked-disabled",da="icon/32/mimetypes/office-document.png",cW="radiobutton-checked-disabled",cX="tabview-pane",dc="decoration/arrows/rewind.png",dd="checkbox-focused",fh="top",fb="#EEE",fo="icon/16/actions/dialog-ok.png",fk="radiobutton-checked-hovered",eP="table-header-cell-hovered",eN="window",dr="text-gray",eQ="decoration/menu/radiobutton-invert.gif",dC="text-placeholder",dB="slider",ev="keep-align",ew="down.png",ex="tabview-page-button-top-active",ey="icon/32/places/folder-open.png",ez="icon/22/places/folder.png",eA="decoration/window/maximize-active.png",eB="checkbox-checked-pressed",eC="decoration/window/close-inactive.png",et="tabview-page-button-left-active",eu="toolbar-part",eO="decoration/splitpane/knob-vertical.png",fn=".gif",fm="icon/22/places/folder-open.png",fl="radiobutton-checked-pressed",fs="table-statusbar",fr="radiobutton-pressed",fq="window-captionbar-inactive",fp="copy",fj="radiobutton-focused",fi="decoration/arrows/down-invert.png",db="decoration/menu/checkbox.gif",dG="decoration/splitpane/knob-horizontal.png",dF="icon/32/places/folder.png",fa="toolbar-separator",dR="tabview-page-button-bottom-active",fg="decoration/arrows/up-small.png",ff="decoration/table/ascending.png",fe="decoration/arrows/up-invert.png",dq="small",ft="tabview-page-button-right-active",de="-disabled",ds="scrollbar-horizontal",en="progressive-table-header-cell",eo="menu-separator",ep="pane",eq="decoration/arrows/right-invert.png",er="left.png",es="icon/16/actions/view-refresh.png";
qx.Theme.define(gu,{appearances:{"widget":{},"root":{style:function(cj){return {backgroundColor:fN,textColor:cR,font:dM};
}},"label":{style:function(cf){return {textColor:cf.disabled?eM:undefined};
}},"move-frame":{style:function(gR){return {decorator:gf};
}},"resize-frame":ea,"dragdrop-cursor":{style:function(cb){var cc=dS;

if(cb.copy){cc=fp;
}else if(cb.move){cc=dz;
}else if(cb.alias){cc=cV;
}return {source:df+cc+fn,position:cJ,offset:[2,16,2,6]};
}},"image":{style:function(bC){return {opacity:!bC.replacement&&bC.disabled?0.3:1};
}},"atom":{},"atom/label":fL,"atom/icon":gc,"popup":{style:function(cg){return {decorator:gf,backgroundColor:fY,shadow:dO};
}},"button-frame":{alias:gh,style:function(ct){var cv,cu;

if(ct.checked&&ct.focused&&!ct.inner){cv=gw;
cu=undefined;
}else if(ct.disabled){cv=fV;
cu=undefined;
}else if(ct.pressed){cv=ei;
cu=fH;
}else if(ct.checked){cv=dk;
cu=undefined;
}else if(ct.hovered){cv=ed;
cu=fH;
}else if(ct.preselected&&ct.focused&&!ct.inner){cv=fR;
cu=fH;
}else if(ct.preselected){cv=gv;
cu=fH;
}else if(ct.focused&&!ct.inner){cv=gD;
cu=undefined;
}else{cv=ge;
cu=undefined;
}return {decorator:cv,textColor:cu,shadow:ct.invalid&&!ct.disabled?eU:undefined};
}},"button-frame/image":{style:function(ic){return {opacity:!ic.replacement&&ic.disabled?0.5:1};
}},"button":{alias:gi,include:gi,style:function(bS){return {padding:[2,8],center:true};
}},"hover-button":{alias:gh,include:gh,style:function(cs){return {decorator:cs.hovered?eI:undefined,textColor:cs.hovered?gd:undefined};
}},"splitbutton":{},"splitbutton/button":ge,"splitbutton/arrow":{alias:ge,include:ge,style:function(ca){return {icon:eK,padding:2,marginLeft:1};
}},"checkbox":{alias:gh,style:function(k){var m;

if(k.checked&&k.focused){m=fv;
}else if(k.checked&&k.disabled){m=cY;
}else if(k.checked&&k.pressed){m=eB;
}else if(k.checked&&k.hovered){m=cz;
}else if(k.checked){m=eT;
}else if(k.focused){m=dd;
}else if(k.pressed){m=fS;
}else if(k.hovered){m=em;
}else{m=cK;
}var l=k.invalid&&!k.disabled?di:dn;
return {icon:dp+m+l+gL,gap:6};
}},"radiobutton":{alias:gh,style:function(bP){var bR;

if(bP.checked&&bP.focused){bR=dy;
}else if(bP.checked&&bP.disabled){bR=cW;
}else if(bP.checked&&bP.pressed){bR=fl;
}else if(bP.checked&&bP.hovered){bR=fk;
}else if(bP.checked){bR=fA;
}else if(bP.focused){bR=fj;
}else if(bP.pressed){bR=fr;
}else if(bP.hovered){bR=dg;
}else{bR=fM;
}var bQ=bP.invalid&&!bP.disabled?di:dn;
return {icon:dp+bR+bQ+gL,gap:6};
}},"textfield":{style:function(hs){var hx;
var hv=!!hs.focused;
var hw=!!hs.invalid;
var ht=!!hs.disabled;

if(hv&&hw&&!ht){hx=eD;
}else if(hv&&!hw&&!ht){hx=gn;
}else if(ht){hx=eF;
}else if(!hv&&hw&&!ht){hx=eH;
}else{hx=eG;
}var hu;

if(hs.disabled){hu=eM;
}else if(hs.showingPlaceholder){hu=dC;
}else{hu=gI;
}return {decorator:hx,padding:[2,4,1],textColor:hu};
}},"textarea":{include:fI,style:function(bA){return {padding:4};
}},"spinner":{style:function(hy){var hC;
var hA=!!hy.focused;
var hB=!!hy.invalid;
var hz=!!hy.disabled;

if(hA&&hB&&!hz){hC=eD;
}else if(hA&&!hB&&!hz){hC=gn;
}else if(hz){hC=eF;
}else if(!hA&&hB&&!hz){hC=eH;
}else{hC=eG;
}return {decorator:hC};
}},"spinner/textfield":{style:function(ib){return {marginRight:2,padding:[2,4,1],textColor:ib.disabled?eM:gI};
}},"spinner/upbutton":{alias:gi,include:gi,style:function(bX){return {icon:fg,padding:bX.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gi,include:gi,style:function(gN){return {icon:dJ,padding:gN.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cI,"datefield/button":{alias:cP,include:cP,style:function(cq){return {icon:fy,padding:[0,3],decorator:undefined};
}},"datefield/textfield":fD,"datefield/list":{alias:dK,include:dK,style:function(f){return {decorator:undefined};
}},"groupbox":{style:function(bB){return {legendPosition:fh};
}},"groupbox/legend":{alias:gh,style:function(bW){return {padding:[1,0,1,4],textColor:bW.invalid?fE:cL,font:gb};
}},"groupbox/frame":{style:function(cp){return {padding:12,decorator:fz};
}},"check-groupbox":eL,"check-groupbox/legend":{alias:cK,include:cK,style:function(d){return {padding:[1,0,1,4],textColor:d.invalid?fE:cL,font:gb};
}},"radio-groupbox":eL,"radio-groupbox/legend":{alias:fM,include:fM,style:function(p){return {padding:[1,0,1,4],textColor:p.invalid?fE:cL,font:gb};
}},"scrollarea":{style:function(bY){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bp){return {backgroundColor:fN};
}},"scrollarea/pane":gg,"scrollarea/scrollbar-x":gr,"scrollarea/scrollbar-y":gr,"scrollbar":{style:function(gU){if(gU[el]){return {};
}return {width:gU.horizontal?undefined:16,height:gU.horizontal?16:undefined,decorator:gU.horizontal?ds:gz,padding:1};
}},"scrollbar/slider":{alias:dB,style:function(be){return {padding:be.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gi,style:function(hp){var hq=hp.horizontal?gF:cy;

if(hp.disabled){hq+=de;
}return {decorator:hq,minHeight:hp.horizontal?undefined:9,minWidth:hp.horizontal?9:undefined};
}},"scrollbar/button":{alias:gi,include:gi,style:function(bJ){var bK=ee;

if(bJ.left){bK+=er;
}else if(bJ.right){bK+=du;
}else if(bJ.up){bK+=gx;
}else{bK+=ew;
}
if(bJ.left||bJ.right){return {padding:[0,0,0,bJ.left?3:4],icon:bK,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bK,width:14,height:15};
}}},"scrollbar/button-begin":cN,"scrollbar/button-end":cN,"slider":{style:function(hg){var hk;
var hi=!!hg.focused;
var hj=!!hg.invalid;
var hh=!!hg.disabled;

if(hi&&hj&&!hh){hk=eD;
}else if(hi&&!hj&&!hh){hk=gn;
}else if(hh){hk=eF;
}else if(!hi&&hj&&!hh){hk=eH;
}else{hk=eG;
}return {decorator:hk};
}},"slider/knob":{include:gi,style:function(bc){return {decorator:bc.disabled?eg:gF,shadow:undefined,height:14,width:14};
}},"list":{alias:fO,style:function(V){var ba;
var X=!!V.focused;
var Y=!!V.invalid;
var W=!!V.disabled;

if(X&&Y&&!W){ba=eD;
}else if(X&&!Y&&!W){ba=gn;
}else if(W){ba=eF;
}else if(!X&&Y&&!W){ba=eH;
}else{ba=eG;
}return {backgroundColor:fY,decorator:ba};
}},"list/pane":gg,"listitem":{alias:gh,style:function(bu){var bv;

if(bu.dragover){bv=bu.selected?fU:fP;
}else{bv=bu.selected?eI:undefined;
}return {padding:bu.dragover?[4,4,2,4]:4,textColor:bu.selected?gd:undefined,decorator:bv};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gi,include:gi,style:function(N){return {padding:5,center:true,icon:N.vertical?eK:fK};
}},"slidebar/button-backward":{alias:gi,include:gi,style:function(hN){return {padding:5,center:true,icon:hN.vertical?dl:gE};
}},"tabview":{style:function(he){return {contentPadding:16};
}},"tabview/bar":{alias:dW,style:function(hH){var hI={marginBottom:hH.barTop?-1:0,marginTop:hH.barBottom?-4:0,marginLeft:hH.barRight?-3:0,marginRight:hH.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(hH.barTop||hH.barBottom){hI.paddingLeft=5;
hI.paddingRight=7;
}else{hI.paddingTop=5;
hI.paddingBottom=7;
}return hI;
}},"tabview/bar/button-forward":{include:gH,alias:gH,style:function(cl){if(cl.barTop||cl.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dP,alias:dP,style:function(r){if(r.barTop||r.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bN){return {decorator:cX,minHeight:100,marginBottom:bN.barBottom?-1:0,marginTop:bN.barTop?-1:0,marginLeft:bN.barLeft?-1:0,marginRight:bN.barRight?-1:0};
}},"tabview-page":gg,"tabview-page/button":{alias:gh,style:function(G){var M,I=0;
var L=0,H=0,J=0,K=0;

if(G.checked){if(G.barTop){M=ex;
I=[6,14];
J=G.firstTab?0:-5;
K=G.lastTab?0:-5;
}else if(G.barBottom){M=dR;
I=[6,14];
J=G.firstTab?0:-5;
K=G.lastTab?0:-5;
}else if(G.barRight){M=ft;
I=[6,13];
L=G.firstTab?0:-5;
H=G.lastTab?0:-5;
}else{M=et;
I=[6,13];
L=G.firstTab?0:-5;
H=G.lastTab?0:-5;
}}else{if(G.barTop){M=eX;
I=[4,10];
L=4;
J=G.firstTab?5:1;
K=1;
}else if(G.barBottom){M=dt;
I=[4,10];
H=4;
J=G.firstTab?5:1;
K=1;
}else if(G.barRight){M=fw;
I=[4,10];
K=5;
L=G.firstTab?5:1;
H=1;
J=1;
}else{M=eW;
I=[4,10];
J=5;
L=G.firstTab?5:1;
H=1;
K=1;
}}return {zIndex:G.checked?10:5,decorator:M,padding:I,marginTop:L,marginBottom:H,marginLeft:J,marginRight:K,textColor:G.checked?cH:dA};
}},"tabview-page/button/close-button":{alias:gh,style:function(hl){return {icon:fT};
}},"toolbar":{style:function(s){return {decorator:cU,spacing:2};
}},"toolbar/part":{style:function(S){return {decorator:eu,spacing:2};
}},"toolbar/part/container":{style:function(cw){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bz){return {source:gB,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gh,style:function(bL){return {marginTop:2,marginBottom:2,padding:(bL.pressed||bL.checked||bL.hovered)&&!bL.disabled||(bL.disabled&&bL.checked)?3:5,decorator:bL.pressed||(bL.checked&&!bL.hovered)||(bL.checked&&bL.disabled)?fd:bL.hovered&&!bL.disabled?cG:undefined};
}},"toolbar-menubutton":{alias:gp,include:gp,style:function(bl){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gc,include:gc,style:function(t){return {source:dJ};
}},"toolbar-splitbutton":{style:function(c){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gp,include:gp,style:function(gX){return {icon:eK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gp,include:gp,style:function(hr){return {padding:hr.pressed||hr.checked?1:hr.hovered?1:3,icon:eK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(g){return {decorator:fa,margin:7};
}},"tree":gm,"tree-item":{style:function(hM){return {padding:[2,6],textColor:hM.selected?gd:undefined,decorator:hM.selected?eI:undefined};
}},"tree-item/icon":{include:gc,style:function(hD){return {paddingRight:5};
}},"tree-item/label":fL,"tree-item/open":{include:gc,style:function(hY){var ia;

if(hY.selected&&hY.opened){ia=fc;
}else if(hY.selected&&!hY.opened){ia=gt;
}else if(hY.opened){ia=dL;
}else{ia=gG;
}return {padding:[0,5,0,2],source:ia};
}},"tree-folder":{include:gj,alias:gj,style:function(Q){var R;

if(Q.small){R=Q.opened?dh:cQ;
}else if(Q.large){R=Q.opened?ey:dF;
}else{R=Q.opened?fm:ez;
}return {icon:R};
}},"tree-file":{include:gj,alias:gj,style:function(bG){return {icon:bG.small?dH:bG.large?da:gC};
}},"treevirtual":dm,"treevirtual-folder":{style:function(hn){return {icon:hn.opened?dh:cQ};
}},"treevirtual-file":{include:dN,alias:dN,style:function(hQ){return {icon:dH};
}},"treevirtual-line":{style:function(gT){return {icon:cM};
}},"treevirtual-contract":{style:function(b){return {icon:dL,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(bM){return {icon:gG,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gk,"treevirtual-only-expand":fJ,"treevirtual-start-contract":gk,"treevirtual-start-expand":fJ,"treevirtual-end-contract":gk,"treevirtual-end-expand":fJ,"treevirtual-cross-contract":gk,"treevirtual-cross-expand":fJ,"treevirtual-end":{style:function(gW){return {icon:cM};
}},"treevirtual-cross":{style:function(hL){return {icon:cM};
}},"tooltip":{include:go,style:function(bo){return {backgroundColor:ef,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gh,"tooltip-error":{include:gl,style:function(bV){return {textColor:gd,placeMethod:gg,offset:[0,0,0,14],marginTop:-2,position:cJ,showTimeout:100,hideTimeout:10000,decorator:dE,shadow:dX,font:gb};
}},"tooltip-error/atom":gh,"window":{style:function(bI){return {shadow:dw,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bF){return {decorator:eN};
}},"window/captionbar":{style:function(gV){return {decorator:gV.active?cA:fq,textColor:gV.active?fF:dr,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(ce){return {margin:[5,0,3,6]};
}},"window/title":{style:function(bk){return {alignY:ga,font:gb,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gh,style:function(C){return {icon:C.active?C.hovered?eS:fx:fB,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gh,style:function(bb){return {icon:bb.active?bb.hovered?dx:cS:fu,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gh,style:function(bU){return {icon:bU.active?bU.hovered?dj:eA:fW,margin:[4,8,2,0]};
}},"window/close-button":{alias:gh,style:function(bn){return {icon:bn.active?bn.hovered?fQ:ek:eC,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(F){return {padding:[2,6],decorator:dD,minHeight:18};
}},"window/statusbar-text":{style:function(bd){return {font:dq};
}},"iframe":{style:function(gY){return {decorator:gf};
}},"resizer":{style:function(z){return {decorator:ep};
}},"splitpane":{style:function(hE){return {decorator:fC};
}},"splitpane/splitter":{style:function(gO){return {width:gO.horizontal?3:undefined,height:gO.vertical?3:undefined,backgroundColor:gM};
}},"splitpane/splitter/knob":{style:function(q){return {source:q.horizontal?dG:eO};
}},"splitpane/slider":{style:function(bj){return {width:bj.horizontal?3:undefined,height:bj.vertical?3:undefined,backgroundColor:gM};
}},"selectbox":{alias:gi,include:gi,style:function(hf){return {padding:[2,8]};
}},"selectbox/atom":gh,"selectbox/popup":go,"selectbox/list":{alias:gm},"selectbox/arrow":{include:gc,style:function(bf){return {source:eK,paddingLeft:5};
}},"datechooser":{style:function(hT){var hX;
var hV=!!hT.focused;
var hW=!!hT.invalid;
var hU=!!hT.disabled;

if(hV&&hW&&!hU){hX=eD;
}else if(hV&&!hW&&!hU){hX=gn;
}else if(hU){hX=eF;
}else if(!hV&&hW&&!hU){hX=eH;
}else{hX=eG;
}return {padding:2,decorator:hX,backgroundColor:fY};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gi,alias:gi,style:function(O){var P={padding:[2,4],shadow:undefined};

if(O.lastYear){P.icon=dc;
P.marginRight=1;
}else if(O.lastMonth){P.icon=gE;
}else if(O.nextYear){P.icon=cC;
P.marginLeft=1;
}else if(O.nextMonth){P.icon=fK;
}return P;
}},"datechooser/last-year-button-tooltip":gl,"datechooser/last-month-button-tooltip":gl,"datechooser/next-year-button-tooltip":gl,"datechooser/next-month-button-tooltip":gl,"datechooser/last-year-button":gs,"datechooser/last-month-button":gs,"datechooser/next-month-button":gs,"datechooser/next-year-button":gs,"datechooser/month-year-label":{style:function(i){return {font:gb,textAlign:fG,textColor:i.disabled?eM:undefined};
}},"datechooser/date-pane":{style:function(hb){return {textColor:hb.disabled?eM:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(bt){return {textColor:bt.disabled?eM:bt.weekend?gK:undefined,textAlign:fG,paddingTop:2,backgroundColor:dI};
}},"datechooser/week":{style:function(hK){return {textAlign:fG,padding:[2,4],backgroundColor:dI};
}},"datechooser/day":{style:function(by){return {textAlign:fG,decorator:by.disabled?undefined:by.selected?eI:undefined,textColor:by.disabled?eM:by.selected?gd:by.otherMonth?gK:undefined,font:by.today?gb:undefined,padding:[2,4]};
}},"combobox":{style:function(u){var y;
var w=!!u.focused;
var x=!!u.invalid;
var v=!!u.disabled;

if(w&&x&&!v){y=eD;
}else if(w&&!x&&!v){y=gn;
}else if(v){y=eF;
}else if(!w&&x&&!v){y=eH;
}else{y=eG;
}return {decorator:y};
}},"combobox/popup":go,"combobox/list":{alias:gm},"combobox/button":{include:gi,alias:gi,style:function(bw){var bx={icon:eK,padding:2};

if(bw.selected){bx.decorator=gD;
}return bx;
}},"combobox/textfield":{include:fI,style:function(a){return {decorator:undefined};
}},"menu":{style:function(br){var bs={decorator:dV,shadow:dO,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:br.submenu||br.contextmenu?gy:ev};

if(br.submenu){bs.position=cJ;
bs.offset=[-2,-3];
}return bs;
}},"menu/slidebar":eV,"menu-slidebar":gg,"menu-slidebar-button":{style:function(hP){return {decorator:hP.hovered?eI:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gJ,style:function(D){return {icon:D.hovered?fe:dl};
}},"menu-slidebar/button-forward":{include:gJ,style:function(T){return {icon:T.hovered?fi:eK};
}},"menu-separator":{style:function(hF){return {height:0,decorator:eo,margin:[4,2]};
}},"menu-button":{alias:gh,style:function(B){return {decorator:B.selected?eI:undefined,textColor:B.selected?gd:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gc,style:function(cn){return {alignY:ga};
}},"menu-button/label":{include:fL,style:function(ch){return {alignY:ga,padding:1};
}},"menu-button/shortcut":{include:fL,style:function(gP){return {alignY:ga,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gc,style:function(ck){return {source:ck.selected?eq:fK,alignY:ga};
}},"menu-checkbox":{alias:eE,include:eE,style:function(gQ){return {icon:!gQ.checked?undefined:gQ.selected?gA:db};
}},"menu-radiobutton":{alias:eE,include:eE,style:function(o){return {icon:!o.checked?undefined:o.selected?eQ:cD};
}},"menubar":{style:function(bD){return {decorator:eR};
}},"menubar-button":{alias:gh,style:function(hO){return {decorator:hO.pressed||hO.hovered?eI:undefined,textColor:hO.pressed||hO.hovered?gd:undefined,padding:[3,8]};
}},"colorselector":gg,"colorselector/control-bar":gg,"colorselector/control-pane":gg,"colorselector/visual-pane":eL,"colorselector/preset-grid":gg,"colorselector/colorbucket":{style:function(hG){return {decorator:gf,width:16,height:16};
}},"colorselector/preset-field-set":eL,"colorselector/input-field-set":eL,"colorselector/preview-field-set":eL,"colorselector/hex-field-composite":gg,"colorselector/hex-field":fI,"colorselector/rgb-spinner-composite":gg,"colorselector/rgb-spinner-red":gq,"colorselector/rgb-spinner-green":gq,"colorselector/rgb-spinner-blue":gq,"colorselector/hsb-spinner-composite":gg,"colorselector/hsb-spinner-hue":gq,"colorselector/hsb-spinner-saturation":gq,"colorselector/hsb-spinner-brightness":gq,"colorselector/preview-content-old":{style:function(bm){return {decorator:gf,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hd){return {decorator:gf,backgroundColor:fY,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(cr){return {decorator:gf,margin:5};
}},"colorselector/brightness-field":{style:function(E){return {decorator:gf,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gg,"colorselector/hue-saturation-handle":gg,"colorselector/brightness-pane":gg,"colorselector/brightness-handle":gg,"colorpopup":{alias:go,include:go,style:function(bh){return {padding:5,backgroundColor:fN};
}},"colorpopup/field":{style:function(id){return {decorator:gf,margin:2,width:14,height:14,backgroundColor:fY};
}},"colorpopup/selector-button":ge,"colorpopup/auto-button":ge,"colorpopup/preview-pane":eL,"colorpopup/current-preview":{style:function(bO){return {height:20,padding:4,marginLeft:4,decorator:gf,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(ci){return {height:20,padding:4,marginRight:4,decorator:gf,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ge,include:ge,style:function(hS){return {icon:fo};
}},"colorpopup/colorselector-cancelbutton":{alias:ge,include:ge,style:function(hJ){return {icon:eY};
}},"table":{alias:gg,style:function(bE){return {decorator:dm};
}},"table-header":{},"table/statusbar":{style:function(U){return {decorator:fs,padding:[0,2]};
}},"table/column-button":{alias:gi,style:function(e){return {decorator:dv,padding:3,icon:cE};
}},"table-column-reset-button":{include:eE,alias:eE,style:function(){return {icon:es};
}},"table-scroller":gg,"table-scroller/scrollbar-x":gr,"table-scroller/scrollbar-y":gr,"table-scroller/header":{style:function(j){return {decorator:eh};
}},"table-scroller/pane":{style:function(cm){return {backgroundColor:ej};
}},"table-scroller/focus-indicator":{style:function(bT){return {decorator:dY};
}},"table-scroller/resize-line":{style:function(h){return {backgroundColor:fX,width:2};
}},"table-header-cell":{alias:gh,style:function(cx){return {minWidth:13,minHeight:20,padding:cx.hovered?[3,4,2,4]:[3,4],decorator:cx.hovered?eP:dU,sortIcon:cx.sorted?(cx.sortedAscending?ff:cB):undefined};
}},"table-header-cell/label":{style:function(bi){return {minWidth:0,alignY:ga,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hc){return {alignY:ga,alignX:cO};
}},"table-header-cell/icon":{style:function(bg){return {minWidth:0,alignY:ga,paddingRight:5};
}},"table-editor-textfield":{include:fI,style:function(cd){return {decorator:undefined,padding:[2,2],backgroundColor:fY};
}},"table-editor-selectbox":{include:dQ,alias:dQ,style:function(bq){return {padding:[0,2],backgroundColor:fY};
}},"table-editor-combobox":{include:cI,alias:cI,style:function(bH){return {decorator:undefined,backgroundColor:fY};
}},"progressive-table-header":{alias:gg,style:function(hm){return {decorator:cF};
}},"progressive-table-header-cell":{alias:gh,style:function(ha){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:en};
}},"app-header":{style:function(hR){return {font:gb,textColor:gd,padding:[8,12],decorator:eb};
}},"virtual-list":gm,"virtual-list/row-layer":ec,"row-layer":{style:function(gS){return {colorEven:fF,colorOdd:fb};
}},"column-layer":gg,"cell":{style:function(n){return {textColor:n.selected?gd:cR,padding:[3,6],font:dM};
}},"cell-string":eJ,"cell-number":{include:eJ,style:function(ho){return {textAlign:cO};
}},"cell-image":eJ,"cell-boolean":{include:eJ,style:function(A){return {iconTrue:dT,iconFalse:cT};
}},"cell-atom":eJ,"cell-date":eJ,"cell-html":eJ,"htmlarea":{"include":gg,style:function(co){return {backgroundColor:fF};
}}}});
})();
(function(){var h="textfield",g="table",f="window",e="toolbar",d="toolbar-button",c="bold",b="inspector.theme.Appearance",a="green";
qx.Theme.define(b,{extend:qx.theme.modern.Appearance,appearances:{"toolbar-button-bold":{alias:d,include:d,style:function(k){return {textColor:a,font:c};
}},"objectsWindow":{alias:f,include:f,style:function(i){return {contentPadding:[0,0,0,0],showMinimize:false,showMaximize:false,width:300,height:200};
}},"objects2-toolbar":{alias:e,include:e,style:function(l){return {paddingLeft:3,paddingRight:3};
}},"objects2-textfield":{alias:h,include:h,style:function(j){return {marginRight:5};
}},"objects2-table":{alias:g,include:g,style:function(m){return {decorator:null};
}}}});
})();
(function(){var a="inspector.theme.Theme";
qx.Theme.define(a,{meta:{color:inspector.theme.Color,decoration:inspector.theme.Decoration,font:inspector.theme.Font,icon:qx.theme.icon.Tango,appearance:inspector.theme.Appearance}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__cw:function(){this.QUIRKS_MODE=this.__cx();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__cx:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cw();
}});
})();
(function(){var b="qx.lang.Object";
qx.Class.define(b,{statics:{empty:function(F){{};

for(var G in F){if(F.hasOwnProperty(G)){delete F[G];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(a){{};
return a.__count__===0;
}:
function(e){{};

for(var f in e){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(z,A){{};
return z.__count__>=A;
}:
function(k,m){{};

if(m<=0){return true;
}var length=0;

for(var n in k){if((++length)>=m){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(t){{};
var v=[];
var u=this.getKeys(t);

for(var i=0,l=u.length;i<l;i++){v.push(t[u[i]]);
}return v;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(B,C){{};
return qx.lang.Object.mergeWith(B,C,false);
},merge:function(w,x){{};
var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(H){{};
var I={};

for(var J in H){I[J]=H[J];
}return I;
},invert:function(g){{};
var h={};

for(var j in g){h[g[j].toString()]=j;
}return h;
},getKeyFromValue:function(q,r){{};

for(var s in q){if(q.hasOwnProperty(s)&&q[s]===r){return s;
}}return null;
},contains:function(c,d){{};
return this.getKeyFromValue(c,d)!==null;
},select:function(o,p){{};
return p[o];
},fromArray:function(D){{};
var E={};

for(var i=0,l=D.length;i<l;i++){{};
E[D[i].toString()]=true;
}return E;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Class.define(f,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==c)?j:h,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?h:j,{"native":Array.prototype.indexOf,"emulated":function(k,m){if(m==null){m=0;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i<this.length;i++){if(this[i]===k){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?h:j,{"native":Array.prototype.lastIndexOf,"emulated":function(a,b){if(b==null){b=this.length-1;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i>=0;i--){if(this[i]===a){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?h:j,{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?h:j,{"native":Array.prototype.filter,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(A.call(B||window,D,i,this)){C.push(this[i]);
}}}return C;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?h:j,{"native":Array.prototype.map,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){s[i]=q.call(r||window,t,i,this);
}}return s;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?h:j,{"native":Array.prototype.some,"emulated":function(x,y){var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){if(x.call(y||window,z,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?h:j,{"native":Array.prototype.every,"emulated":function(u,v){var l=this.length;

for(var i=0;i<l;i++){var w=this[i];

if(w!==undefined){if(!u.call(v||window,w,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?h:j,{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
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
(function(){var j="qx.event.type.Event";
qx.Class.define(j,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(d,e){{};
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
},clone:function(a){if(a){var b=a;
}else{var b=qx.event.Pool.getInstance().getObject(this.constructor);
}b._type=this._type;
b._target=this._target;
b._currentTarget=this._currentTarget;
b._relatedTarget=this._relatedTarget;
b._originalTarget=this._originalTarget;
b._stopPropagation=this._stopPropagation;
b._bubbles=this._bubbles;
b._preventDefault=this._preventDefault;
b._cancelable=this._cancelable;
return b;
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
},setType:function(h){this._type=h;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(c){this._relatedTarget=c;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(l){this._originalTarget=l;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(g){this._bubbles=g;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(i){this._cancelable=i;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cB:null,__cC:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__cB=d;
this.__cC=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__cB=this.__cB;
c.__cC=this.__cC;
return c;
},getData:function(){return this.__cB;
},getOldData:function(){return this.__cC;
}},destruct:function(){this.__cB=this.__cC=null;
}});
})();
(function(){var B="get",A="",z="[",y="last",x="change",w="]",v=".",u="Number",t="String",s="set",Q="deepBinding",P="item",O="reset",N="' (",M="Boolean",L=") to the object '",K="Integer",J="qx.data.SingleValueBinding",I="No event could be found for the property",H="Binding from '",F="PositiveNumber",G="PositiveInteger",D="Binding does not exist!",E=").",C="Date";
qx.Class.define(J,{statics:{DEBUG_ON:false,__cD:{},bind:function(cz,cA,cB,cC,cD){var cN=this.__cF(cz,cA,cB,cC,cD);
var cI=cA.split(v);
var cF=this.__cM(cI);
var cM=[];
var cJ=[];
var cK=[];
var cG=[];
var cH=cz;
for(var i=0;i<cI.length;i++){if(cF[i]!==A){cG.push(x);
}else{cG.push(this.__cH(cH,cI[i]));
}cM[i]=cH;
if(i==cI.length-1){if(cF[i]!==A){var cQ=cF[i]===y?cH.length-1:cF[i];
var cE=cH.getItem(cQ);
this.__cL(cE,cB,cC,cD,cz);
cK[i]=this.__cN(cH,cG[i],cB,cC,cD,cF[i]);
}else{if(cI[i]!=null&&cH[B+qx.lang.String.firstUp(cI[i])]!=null){var cE=cH[B+qx.lang.String.firstUp(cI[i])]();
this.__cL(cE,cB,cC,cD,cz);
}cK[i]=this.__cN(cH,cG[i],cB,cC,cD);
}}else{var cO={index:i,propertyNames:cI,sources:cM,listenerIds:cK,arrayIndexValues:cF,targetObject:cB,targetPropertyChain:cC,options:cD,listeners:cJ};
var cL=qx.lang.Function.bind(this.__cE,this,cO);
cJ.push(cL);
cK[i]=cH.addListener(cG[i],cL);
}if(cH[B+qx.lang.String.firstUp(cI[i])]==null){cH=null;
}else if(cF[i]!==A){cH=cH[B+qx.lang.String.firstUp(cI[i])](cF[i]);
}else{cH=cH[B+qx.lang.String.firstUp(cI[i])]();
}
if(!cH){break;
}}var cP={type:Q,listenerIds:cK,sources:cM,targetListenerIds:cN.listenerIds,targets:cN.targets};
this.__cO(cP,cz,cA,cB,cC);
return cP;
},__cE:function(bJ){if(bJ.options&&bJ.options.onUpdate){bJ.options.onUpdate(bJ.sources[bJ.index],bJ.targetObject);
}for(var j=bJ.index+1;j<bJ.propertyNames.length;j++){var bN=bJ.sources[j];
bJ.sources[j]=null;

if(!bN){continue;
}bN.removeListenerById(bJ.listenerIds[j]);
}var bN=bJ.sources[bJ.index];
for(var j=bJ.index+1;j<bJ.propertyNames.length;j++){if(bJ.arrayIndexValues[j-1]!==A){bN=bN[B+qx.lang.String.firstUp(bJ.propertyNames[j-1])](bJ.arrayIndexValues[j-1]);
}else{bN=bN[B+qx.lang.String.firstUp(bJ.propertyNames[j-1])]();
}bJ.sources[j]=bN;
if(!bN){this.__cI(bJ.targetObject,bJ.targetPropertyChain);
break;
}if(j==bJ.propertyNames.length-1){if(qx.Class.implementsInterface(bN,qx.data.IListData)){var bO=bJ.arrayIndexValues[j]===y?bN.length-1:bJ.arrayIndexValues[j];
var bL=bN.getItem(bO);
this.__cL(bL,bJ.targetObject,bJ.targetPropertyChain,bJ.options,bJ.sources[bJ.index]);
bJ.listenerIds[j]=this.__cN(bN,x,bJ.targetObject,bJ.targetPropertyChain,bJ.options,bJ.arrayIndexValues[j]);
}else{if(bJ.propertyNames[j]!=null&&bN[B+qx.lang.String.firstUp(bJ.propertyNames[j])]!=null){var bL=bN[B+qx.lang.String.firstUp(bJ.propertyNames[j])]();
this.__cL(bL,bJ.targetObject,bJ.targetPropertyChain,bJ.options,bJ.sources[bJ.index]);
}var bM=this.__cH(bN,bJ.propertyNames[j]);
bJ.listenerIds[j]=this.__cN(bN,bM,bJ.targetObject,bJ.targetPropertyChain,bJ.options);
}}else{if(bJ.listeners[j]==null){var bK=qx.lang.Function.bind(this.__cE,this,bJ);
bJ.listeners.push(bK);
}if(qx.Class.implementsInterface(bN,qx.data.IListData)){var bM=x;
}else{var bM=this.__cH(bN,bJ.propertyNames[j]);
}bJ.listenerIds[j]=bN.addListener(bM,bJ.listeners[j]);
}}},__cF:function(bX,bY,ca,cb,cc){var cg=cb.split(v);
var ce=this.__cM(cg);
var cl=[];
var ck=[];
var ci=[];
var ch=[];
var cf=ca;
for(var i=0;i<cg.length-1;i++){if(ce[i]!==A){ch.push(x);
}else{try{ch.push(this.__cH(cf,cg[i]));
}catch(e){break;
}}cl[i]=cf;
var cj=function(){for(var j=i+1;j<cg.length-1;j++){var bV=cl[j];
cl[j]=null;

if(!bV){continue;
}bV.removeListenerById(ci[j]);
}var bV=cl[i];
for(var j=i+1;j<cg.length-1;j++){var bT=qx.lang.String.firstUp(cg[j-1]);
if(ce[j-1]!==A){var bW=ce[j-1]===y?bV.getLength()-1:ce[j-1];
bV=bV[B+bT](bW);
}else{bV=bV[B+bT]();
}cl[j]=bV;
if(ck[j]==null){ck.push(cj);
}if(qx.Class.implementsInterface(bV,qx.data.IListData)){var bU=x;
}else{try{var bU=qx.data.SingleValueBinding.__cH(bV,cg[j]);
}catch(e){break;
}}ci[j]=bV.addListener(bU,ck[j]);
}qx.data.SingleValueBinding.__cG(bX,bY,ca,cb);
};
ck.push(cj);
ci[i]=cf.addListener(ch[i],cj);
var cd=qx.lang.String.firstUp(cg[i]);
if(cf[B+cd]==null){cf=null;
}else if(ce[i]!==A){cf=cf[B+cd](ce[i]);
}else{cf=cf[B+cd]();
}
if(!cf){break;
}}return {listenerIds:ci,targets:cl};
},__cG:function(cm,cn,co,cp){var ct=this.__cK(cm,cn);

if(ct!=null){var cv=cn.substring(cn.lastIndexOf(v)+1,cn.length);
if(cv.charAt(cv.length-1)==w){var cq=cv.substring(cv.lastIndexOf(z)+1,cv.length-1);
var cs=cv.substring(0,cv.lastIndexOf(z));
var cu=ct[B+qx.lang.String.firstUp(cs)]();

if(cq==y){cq=cu.length-1;
}
if(cu!=null){var cr=cu.getItem(cq);
}}else{var cr=ct[B+qx.lang.String.firstUp(cv)]();
}}this.__cJ(co,cp,cr);
},__cH:function(cw,cx){var cy=this.__cQ(cw,cx);
if(cy==null){if(qx.Class.supportsEvent(cw.constructor,cx)){cy=cx;
}else if(qx.Class.supportsEvent(cw.constructor,x+qx.lang.String.firstUp(cx))){cy=x+qx.lang.String.firstUp(cx);
}else{throw new qx.core.AssertionError(I,cx);
}}return cy;
},__cI:function(bP,bQ){var bR=this.__cK(bP,bQ);

if(bR!=null){var bS=bQ.substring(bQ.lastIndexOf(v)+1,bQ.length);
if(bS.charAt(bS.length-1)==w){this.__cJ(bP,bQ,null);
return;
}if(bR[O+qx.lang.String.firstUp(bS)]!=undefined){bR[O+qx.lang.String.firstUp(bS)]();
}else{bR[s+qx.lang.String.firstUp(bS)](null);
}}},__cJ:function(bn,bo,bp){var bt=this.__cK(bn,bo);

if(bt!=null){var bu=bo.substring(bo.lastIndexOf(v)+1,bo.length);
if(bu.charAt(bu.length-1)==w){var bq=bu.substring(bu.lastIndexOf(z)+1,bu.length-1);
var bs=bu.substring(0,bu.lastIndexOf(z));
var br=bt[B+qx.lang.String.firstUp(bs)]();

if(bq==y){bq=br.length-1;
}
if(br!=null){br.setItem(bq,bp);
}}else{bt[s+qx.lang.String.firstUp(bu)](bp);
}}},__cK:function(R,S){var V=S.split(v);
var W=R;
for(var i=0;i<V.length-1;i++){try{var U=V[i];
if(U.indexOf(w)==U.length-1){var T=U.substring(U.indexOf(z)+1,U.length-1);
U=U.substring(0,U.indexOf(z));
}W=W[B+qx.lang.String.firstUp(U)]();

if(T!=null){if(T==y){T=W.length-1;
}W=W.getItem(T);
T=null;
}}catch(X){return null;
}}return W;
},__cL:function(Y,ba,bb,bc,bd){Y=this.__cP(Y,ba,bb,bc);
if(Y==null){this.__cI(ba,bb);
}if(Y!=undefined){try{this.__cJ(ba,bb,Y);
if(bc&&bc.onUpdate){bc.onUpdate(bd,ba,Y);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bc&&bc.onSetFail){bc.onSetFail(e);
}else{this.warn("Failed so set value "+Y+" on "+ba+". Error message: "+e);
}}}},__cM:function(bD){var bE=[];
for(var i=0;i<bD.length;i++){var name=bD[i];
if(qx.lang.String.endsWith(name,w)){var bF=name.substring(name.indexOf(z)+1,name.indexOf(w));
if(name.indexOf(w)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bF!==y){if(bF==A||isNaN(parseInt(bF))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(z)!=0){bD[i]=name.substring(0,name.indexOf(z));
bE[i]=A;
bE[i+1]=bF;
bD.splice(i+1,0,P);
i++;
}else{bE[i]=bF;
bD.splice(i,1,P);
}}else{bE[i]=A;
}}return bE;
},__cN:function(be,bf,bg,bh,bi,bj){var bk;
{};
var bm=function(cW,e){if(cW!==A){if(cW===y){cW=be.length-1;
}var da=be.getItem(cW);
if(da==undefined){qx.data.SingleValueBinding.__cI(bg,bh);
}var cX=e.getData().start;
var cY=e.getData().end;

if(cW<cX||cW>cY){return;
}}else{var da=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+be+" by "+bf+" to "+bg+" ("+bh+")");
qx.log.Logger.debug("Data before conversion: "+da);
}da=qx.data.SingleValueBinding.__cP(da,bg,bh,bi);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+da);
}try{if(da!=undefined){qx.data.SingleValueBinding.__cJ(bg,bh,da);
}else{qx.data.SingleValueBinding.__cI(bg,bh);
}if(bi&&bi.onUpdate){bi.onUpdate(be,bg,da);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bi&&bi.onSetFail){bi.onSetFail(e);
}else{this.warn("Failed so set value "+da+" on "+bg+". Error message: "+e);
}}};
if(!bj){bj=A;
}bm=qx.lang.Function.bind(bm,be,bj);
var bl=be.addListener(bf,bm);
return bl;
},__cO:function(cR,cS,cT,cU,cV){if(this.__cD[cS.toHashCode()]===undefined){this.__cD[cS.toHashCode()]=[];
}this.__cD[cS.toHashCode()].push([cR,cS,cT,cU,cV]);
},__cP:function(h,k,l,m){if(m&&m.converter){var o;

if(k.getModel){o=k.getModel();
}return m.converter(h,o);
}else{var q=this.__cK(k,l);
var r=l.substring(l.lastIndexOf(v)+1,l.length);
if(q==null){return h;
}var p=qx.Class.getPropertyDefinition(q.constructor,r);
var n=p==null?A:p.check;
return this.__cR(h,n);
}},__cQ:function(bG,bH){var bI=qx.Class.getPropertyDefinition(bG.constructor,bH);

if(bI==null){return null;
}return bI.event;
},__cR:function(db,dc){var dd=qx.lang.Type.getClass(db);
if((dd==u||dd==t)&&(dc==K||dc==G)){db=parseInt(db);
}if((dd==M||dd==u||dd==C)&&dc==t){db=db+A;
}if((dd==u||dd==t)&&(dc==u||dc==F)){db=parseFloat(db);
}return db;
},removeBindingFromObject:function(bw,bx){if(bx.type==Q){for(var i=0;i<bx.sources.length;i++){if(bx.sources[i]){bx.sources[i].removeListenerById(bx.listenerIds[i]);
}}for(var i=0;i<bx.targets.length;i++){if(bx.targets[i]){bx.targets[i].removeListenerById(bx.targetListenerIds[i]);
}}}else{bw.removeListenerById(bx);
}var by=this.__cD[bw.toHashCode()];
if(by!=undefined){for(var i=0;i<by.length;i++){if(by[i][0]==bx){qx.lang.Array.remove(by,by[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bB){{};
var bC=this.__cD[bB.toHashCode()];

if(bC!=undefined){for(var i=bC.length-1;i>=0;i--){this.removeBindingFromObject(bB,bC[i][0]);
}}},getAllBindingsForObject:function(bv){if(this.__cD[bv.toHashCode()]===undefined){this.__cD[bv.toHashCode()]=[];
}return this.__cD[bv.toHashCode()];
},removeAllBindings:function(){for(var bA in this.__cD){var bz=qx.core.ObjectRegistry.fromHashCode(bA);
if(bz==null){delete this.__cD[bA];
continue;
}this.removeAllBindingsForObject(bz);
}this.__cD={};
},getAllBindings:function(){return this.__cD;
},showBindingInLog:function(c,d){var g;
for(var i=0;i<this.__cD[c.toHashCode()].length;i++){if(this.__cD[c.toHashCode()][i][0]==d){g=this.__cD[c.toHashCode()][i];
break;
}}
if(g===undefined){var f=D;
}else{var f=H+g[1]+N+g[2]+L+g[3]+N+g[4]+E;
}qx.log.Logger.debug(f);
},showAllBindingsInLog:function(){for(var b in this.__cD){var a=qx.core.ObjectRegistry.fromHashCode(b);

for(var i=0;i<this.__cD[b].length;i++){this.showBindingInLog(a,this.__cD[b][i][0]);
}}}}});
})();
(function(){var l="",k="g",j="0",h='\\$1',g="%",f='-',e="qx.lang.String",d=' ',c='\n',b="undefined";
qx.Class.define(e,{statics:{camelCase:function(a){return a.replace(/\-([a-z])/g,function(v,w){return w.toUpperCase();
});
},hyphenate:function(P){return P.replace(/[A-Z]/g,function(B){return (f+B.charAt(0).toLowerCase());
});
},capitalize:function(H){return H.replace(/\b[a-z]/g,function(I){return I.toUpperCase();
});
},clean:function(Q){return this.trim(Q.replace(/\s+/g,d));
},trimLeft:function(O){return O.replace(/^\s+/,l);
},trimRight:function(N){return N.replace(/\s+$/,l);
},trim:function(J){return J.replace(/^\s+|\s+$/g,l);
},startsWith:function(C,D){return C.indexOf(D)===0;
},endsWith:function(m,n){return m.substring(m.length-n.length,m.length)===n;
},repeat:function(t,u){return t.length>0?new Array(u+1).join(t):l;
},pad:function(E,length,F){var G=length-E.length;

if(G>0){if(typeof F===b){F=j;
}return this.repeat(F,G)+E;
}else{return E;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(L,M){return L.indexOf(M)!=-1;
},format:function(q,r){var s=q;

for(var i=0;i<r.length;i++){s=s.replace(new RegExp(g+(i+1),k),r[i]);
}return s;
},escapeRegexpChars:function(p){return p.replace(/([.*+?^${}()|[\]\/\\])/g,h);
},toArray:function(o){return o.split(/\B|\b/g);
},stripTags:function(K){return K.replace(/<\/?[^>]+>/gi,l);
},stripScripts:function(x,y){var A=l;
var z=x.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){A+=arguments[1]+c;
return l;
});

if(y===true){qx.lang.Function.globalEval(A);
}return z;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(j){},setItem:function(h,i){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var f="qx.globalErrorHandling",e="on",d="qx.event.GlobalError";
qx.Class.define(d,{statics:{setErrorHandler:function(k,l){this.__cS=k||null;
this.__cT=l||window;

if(qx.core.Setting.get(f)===e){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__cU,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__cU:function(a,b,c){if(this.__cS){this.handleError(new qx.core.WindowError(a,b,c));
return true;
}},observeMethod:function(i){if(qx.core.Setting.get(f)===e){var self=this;
return function(){if(!self.__cS){return i.apply(this,arguments);
}
try{return i.apply(this,arguments);
}catch(h){self.handleError(new qx.core.GlobalError(h,arguments));
}};
}else{return i;
}},handleError:function(j){if(this.__cS){this.__cS.call(this.__cT,j);
}}},defer:function(g){qx.core.Setting.define(f,e);
g.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cV=c;
this.__cW=d||b;
this.__cX=e===undefined?-1:e;
},members:{__cV:null,__cW:null,__cX:null,toString:function(){return this.__cV;
},getUri:function(){return this.__cW;
},getLineNumber:function(){return this.__cX;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__cY=b+(c&&c.message?c.message:c);
Error.call(this,this.__cY);
this.__da=d;
this.__db=c;
},members:{__db:null,__da:null,__cY:null,toString:function(){return this.__cY;
},getArguments:function(){return this.__da;
},getSourceException:function(){return this.__db;
}},destruct:function(){this.__db=null;
this.__da=null;
this.__cY=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dc=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dc:null,message:null,getComment:function(){return this.__dc;
},toString:function(){return this.__dc+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dd=qx.dev.StackTrace.getStackTrace();
},members:{__dd:null,getStackTrace:function(){return this.__dd;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==e;
},isNumber:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Number));
},isBoolean:function(a){return (a!==null&&(this.getClass(a)==b||a instanceof Boolean));
},isDate:function(h){return (h!==null&&(this.getClass(h)==d||h instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==f||j instanceof Error));
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){arguments.callee.base.call(this);
this.__de={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__de:null,getObject:function(d){if(this.$$disposed){return;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__de[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__de){return;
}var h=g.classname;
var j=this.__de[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__de[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__de;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__de;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(f,g){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=g.length;i<l;i++){var name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}f[name]=null;
}},disposeObjects:function(o,p){var name;

for(var i=0,l=p.length;i<l;i++){name=p[i];

if(o[name]==null||!o.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(o[name].dispose){o[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}o[name]=null;
}},disposeArray:function(q,r){var t=q[r];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){q[r]=null;
return;
}try{var s;

for(var i=t.length-1;i>=0;i--){s=t[i];

if(s){s.dispose();
}}}catch(n){throw new Error("The array field: "+r+" of object: "+q+" has non disposable entries: "+n);
}t.length=0;
q[r]=null;
},disposeMap:function(h,j){var k=h[j];

if(!k){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{for(var m in k){if(k.hasOwnProperty(m)){k[m].dispose();
}}}catch(e){throw new Error("The map field: "+j+" of object: "+h+" has non disposable entries: "+e);
}h[j]=null;
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
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(c){this._manager=c;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(d,event,e){var h,f;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var j=this._manager.getListeners(d,e,false);

if(j){for(var i=0,l=j.length;i<l;i++){var g=j[i].context||d;
j[i].handler.call(g,event);
}}}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__cy:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cz:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cA:function(){var J=qx.lang.Generics.__cy;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__cz(L,M);
}}}}},defer:function(Q){Q.__cA();
}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(c){if(c&&this._dynamic[c]){return this._dynamic[c];
}return c;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__gE={};
this.add(a,h);
},members:{__gE:null,_preprocess:function(n){var q=this._getDynamic();

if(q[n]===false){return n;
}else if(q[n]===undefined){if(n.charAt(0)===j||n.charAt(0)===b||n.indexOf(g)===0||n.indexOf(f)===i||n.indexOf(e)===0){q[n]=false;
return n;
}
if(this.__gE[n]){return this.__gE[n];
}var p=n.substring(0,n.indexOf(j));
var o=this.__gE[p];

if(o!==undefined){q[n]=o+n.substring(p.length);
}}return n;
},add:function(r,s){this.__gE[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(k){delete this.__gE[k];
},resolve:function(l){var m=this._getDynamic();

if(l!==null){l=this._preprocess(l);
}return m[l]||l;
}},destruct:function(){this.__gE=null;
}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="scale-y",F="qx/icon",E="repeat",D=".png",C="crop",B="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",A='<div style="',z="repeat-y",y='<img src="',x="qx.bom.element.Decoration",w="', sizingMethod='",r="png",s="')",p='"></div>',q='"/>',n='" style="',o="none",l="webkit",m=" ",t="repeat-x",u="DXImageTransform.Microsoft.AlphaImageLoader",v="absolute";
qx.Class.define(x,{statics:{DEBUG:false,__gW:{},__gX:qx.core.Variant.isSet(j,c),__gY:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__ha:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(bM,bN,bO,bP){var bR=this.getTagName(bO,bN);

if(bR!=bM.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bS=this.getAttributes(bN,bO,bP);

if(bR===h){bM.src=bS.src;
}if(bM.style.backgroundPosition!=g&&bS.style.backgroundPosition===undefined){bS.style.backgroundPosition=null;
}if(bM.style.clip!=g&&bS.style.clip===undefined){bS.style.clip=null;
}var bQ=qx.bom.element.Style;
bQ.setStyles(bM,bS.style);
if(this.__gX){try{bM.filters[u].apply();
}catch(e){}}},create:function(bh,bi,bj){var bk=this.getTagName(bi,bh);
var bm=this.getAttributes(bh,bi,bj);
var bl=qx.bom.element.Style.compile(bm.style);

if(bk===h){return y+bm.src+n+bl+q;
}else{return A+bl+p;
}},getTagName:function(G,H){if(qx.core.Variant.isSet(j,c)){if(H&&this.__gX&&this.__gY[G]&&qx.lang.String.endsWith(H,D)){return i;
}}return this.__ha[G];
},getAttributes:function(bv,bw,bx){if(!bx){bx={};
}
if(!bx.position){bx.position=v;
}
if(qx.core.Variant.isSet(j,c)){bx.fontSize=0;
bx.lineHeight=0;
}else if(qx.core.Variant.isSet(j,l)){bx.WebkitUserDrag=o;
}var bz=qx.util.ResourceManager.getInstance().getImageFormat(bv)||qx.io.ImageLoader.getFormat(bv);
{};
var by;
if(this.__gX&&this.__gY[bw]&&bz===r){by=this.__hd(bx,bw,bv);
}else{if(bw===b){by=this.__he(bx,bw,bv);
}else if(bw===d||bw===a){by=this.__hf(bx,bw,bv);
}else{by=this.__hi(bx,bw,bv);
}}return by;
},__hb:function(bW,bX,bY){if(bW.width==null&&bX!=null){bW.width=bX+k;
}
if(bW.height==null&&bY!=null){bW.height=bY+k;
}return bW;
},__hc:function(bT){var bU=qx.util.ResourceManager.getInstance().getImageWidth(bT)||qx.io.ImageLoader.getWidth(bT);
var bV=qx.util.ResourceManager.getInstance().getImageHeight(bT)||qx.io.ImageLoader.getHeight(bT);
return {width:bU,height:bV};
},__hd:function(I,J,K){var N=this.__hc(K);
I=this.__hb(I,N.width,N.height);
var M=J==f?C:b;
var L=B+qx.util.ResourceManager.getInstance().toUri(K)+w+M+s;
I.filter=L;
I.backgroundImage=I.backgroundRepeat=g;
return {style:I};
},__he:function(T,U,V){var W=qx.util.ResourceManager.getInstance().toUri(V);
var X=this.__hc(V);
T=this.__hb(T,X.width,X.height);
return {src:W,style:T};
},__hf:function(bE,bF,bG){var bK=qx.util.ResourceManager.getInstance();
var bJ=bK.isClippedImage(bG);
var bL=this.__hc(bG);

if(bJ){var bI=bK.getData(bG);
var bH=bK.toUri(bI[4]);

if(bF===d){bE=this.__hg(bE,bI,bL.height);
}else{bE=this.__hh(bE,bI,bL.width);
}return {src:bH,style:bE};
}else{{};

if(bF==d){bE.height=bL.height==null?null:bL.height+k;
}else if(bF==a){bE.width=bL.width==null?null:bL.width+k;
}var bH=bK.toUri(bG);
return {src:bH,style:bE};
}},__hg:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().getImageHeight(bB[4]);
bA.clip={top:-bB[6],height:bC};
bA.height=bD+k;
if(bA.top!=null){bA.top=(parseInt(bA.top,10)+bB[6])+k;
}else if(bA.bottom!=null){bA.bottom=(parseInt(bA.bottom,10)+bC-bD-bB[6])+k;
}return bA;
},__hh:function(O,P,Q){var R=qx.util.ResourceManager.getInstance().getImageWidth(P[4]);
O.clip={left:-P[5],width:Q};
O.width=R+k;
if(O.left!=null){O.left=(parseInt(O.left,10)+P[5])+k;
}else if(O.right!=null){O.right=(parseInt(O.right,10)+Q-R-P[5])+k;
}return O;
},__hi:function(bn,bo,bp){var bu=qx.util.ResourceManager.getInstance().isClippedImage(bp);
var bt=this.__hc(bp);
if(bu&&bo!==E){var bs=qx.util.ResourceManager.getInstance().getData(bp);
var br=qx.bom.element.Background.getStyles(bs[4],bo,bs[5],bs[6]);

for(var bq in br){bn[bq]=br[bq];
}
if(bt.width!=null&&bn.width==null&&(bo==z||bo===f)){bn.width=bt.width+k;
}
if(bt.height!=null&&bn.height==null&&(bo==t||bo===f)){bn.height=bt.height+k;
}return {style:bn};
}else{{};
bn=this.__hb(bn,bt.width,bt.height);
bn=this.__hj(bn,bp,bo);
return {style:bn};
}},__hj:function(Y,ba,bb){var top=null;
var bf=null;

if(Y.backgroundPosition){var bc=Y.backgroundPosition.split(m);
bf=parseInt(bc[0]);

if(isNaN(bf)){bf=bc[0];
}top=parseInt(bc[1]);

if(isNaN(top)){top=bc[1];
}}var be=qx.bom.element.Background.getStyles(ba,bb,bf,top);

for(var bd in be){Y[bd]=be[bd];
}if(Y.filter){Y.filter=g;
}return Y;
},__hk:function(S){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(S)&&S.indexOf(F)==-1){if(!this.__gW[S]){qx.log.Logger.debug("Potential clipped image candidate: "+S);
this.__gW[S]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__gX;
},"default":function(){return false;
}})}});
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
(function(){var m="n-resize",l="e-resize",k="nw-resize",j="ne-resize",i="",h="cursor:",g="qx.client",f=";",e="qx.bom.element.Cursor",d="cursor",c="hand";
qx.Class.define(e,{statics:{__fY:qx.core.Variant.select(g,{"mshtml":{"cursor":c,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"opera":{"col-resize":l,"row-resize":m,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"default":{}}),compile:function(p){return h+(this.__fY[p]||p)+f;
},get:function(a,b){return qx.bom.element.Style.get(a,d,b,false);
},set:function(n,o){n.style.cursor=this.__fY[o]||o;
},reset:function(q){q.style.cursor=i;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(q){if(q>=1){return m;
}
if(q<0.00001){q=0;
}return d+(q*100)+f;
},"gecko":function(B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+B+k;
}else{return i+B+k;
}},"default":function(p){if(p==1){return m;
}return i+p+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(F,G){var H=qx.bom.element.Style.get(F,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(G>=1){F.style.filter=H.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(G<0.00001){G=0;
}if(!F.currentStyle||!F.currentStyle.hasLayout){F.style.zoom=1;
}F.style.filter=H.replace(/alpha\([^\)]*\)/gi,m)+c+G*100+e;
},"gecko":function(z,A){if(A==1){A=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(C,D){if(D==1){D=m;
}C.style.opacity=D;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(n){var o=qx.bom.element.Style.get(n,j,qx.bom.element.Style.COMPUTED_MODE,false);
n.style.filter=o.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(E){if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=m;
}else{E.style.opacity=m;
}},"default":function(r){r.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(s,t){var u=qx.bom.element.Style.get(s,j,t,false);

if(u){var v=u.match(/alpha\(opacity=(.*)\)/);

if(v&&v[1]){return parseFloat(v[1])/100;
}}return 1.0;
},"gecko":function(I,J){var K=qx.bom.element.Style.get(I,qx.bom.client.Engine.VERSION<1.7?g:h,J,false);

if(K==0.999999){K=1.0;
}
if(K!=null){return parseFloat(K);
}return 1.0;
},"default":function(w,x){var y=qx.bom.element.Style.get(w,h,x,false);

if(y!=null){return parseFloat(y);
}return 1.0;
}})}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__ga:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__gb:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__gc:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__gd:function(F){var G=this.__gc;
return G.tags[F.tagName.toLowerCase()]||G.types[F.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(v){{};
},"default":function(z){var B=this.__gb;
var A=p;

if(B){for(var i=0,l=B.length;i<l;i++){A+=B[i]+m+z+c;
}}return A;
}}),get:qx.core.Variant.select(q,{"mshtml":function(u){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(u))){if(!this.__gd(u)){return d;
}}return k;
},"default":function(r){var t=this.__ga;
var s;

if(t){for(var i=0,l=t.length;i<l;i++){s=qx.bom.element.Style.get(r,t[i],null,false);

if(s!=null&&s!==p){return s;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(C,D){{};
},"default":function(w,x){var y=this.__ga;

if(y){for(var i=0,l=y.length;i<l;i++){w.style[y[i]]=x;
}}}}),reset:function(E){this.set(E,p);
}}});
})();
(function(){var u="",r="qx.client",q="hidden",p="-moz-scrollbars-none",o="overflow",n=";",m="overflowY",l=":",k="overflowX",j="overflow:",G="none",F="scroll",E="borderLeftStyle",D="borderRightStyle",C="div",B="borderRightWidth",A="overflow-y",z="borderLeftWidth",y="-moz-scrollbars-vertical",x="100px",v="qx.bom.element.Overflow",w="overflow-x";
qx.Class.define(v,{statics:{__fX:null,getScrollbarWidth:function(){if(this.__fX!==null){return this.__fX;
}var V=qx.bom.element.Style;
var X=function(a,b){return parseInt(V.get(a,b))||0;
};
var Y=function(bE){return (V.get(bE,D)==G?0:X(bE,B));
};
var W=function(bH){return (V.get(bH,E)==G?0:X(bH,z));
};
var bb=qx.core.Variant.select(r,{"mshtml":function(R){if(V.get(R,m)==q||R.clientWidth==0){return Y(R);
}return Math.max(0,R.offsetWidth-R.clientLeft-R.clientWidth);
},"default":function(bh){if(bh.clientWidth==0){var bi=V.get(bh,o);
var bj=(bi==F||bi==y?16:0);
return Math.max(0,Y(bh)+bj);
}return Math.max(0,(bh.offsetWidth-bh.clientWidth-W(bh)));
}});
var ba=function(bL){return bb(bL)-Y(bL);
};
var t=document.createElement(C);
var s=t.style;
s.height=s.width=x;
s.overflow=F;
document.body.appendChild(t);
var c=ba(t);
this.__fX=c?c:16;
document.body.removeChild(t);
return this.__fX;
},_compile:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bk,bl){if(bl==q){bl=p;
}return j+bl+n;
}:
function(T,U){return T+l+U+n;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){return j+bd+n;
}:
function(bx,by){return bx+l+by+n;
},"default":function(bU,bV){return bU+l+bV+n;
}}),compileX:function(d){return this._compile(w,d);
},compileY:function(bW){return this._compile(A,bW);
},getX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){var g=qx.bom.element.Style.get(e,o,f,false);

if(g===p){g=q;
}return g;
}:
function(h,i){return qx.bom.element.Style.get(h,k,i,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bF,bG){return qx.bom.element.Style.get(bF,o,bG,false);
}:
function(ce,cf){return qx.bom.element.Style.get(ce,k,cf,false);
},"default":function(O,P){return qx.bom.element.Style.get(O,k,P,false);
}}),setX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bv,bw){if(bw==q){bw=p;
}bv.style.overflow=bw;
}:
function(bO,bP){bO.style.overflowX=bP;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bm,bn){bm.style.overflow=bn;
}:
function(bM,bN){bM.style.overflowX=bN;
},"default":function(br,bs){br.style.overflowX=bs;
}}),resetX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(L){L.style.overflow=u;
}:
function(Q){Q.style.overflowX=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,N){M.style.overflow=u;
}:
function(bS,bT){bS.style.overflowX=u;
},"default":function(bq){bq.style.overflowX=u;
}}),getY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(be,bf){var bg=qx.bom.element.Style.get(be,o,bf,false);

if(bg===p){bg=q;
}return bg;
}:
function(bt,bu){return qx.bom.element.Style.get(bt,m,bu,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){return qx.bom.element.Style.get(bX,o,bY,false);
}:
function(bo,bp){return qx.bom.element.Style.get(bo,m,bp,false);
},"default":function(H,I){return qx.bom.element.Style.get(H,m,I,false);
}}),setY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bJ,bK){if(bK===q){bK=p;
}bJ.style.overflow=bK;
}:
function(ca,cb){ca.style.overflowY=cb;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bB,bC){bB.style.overflow=bC;
}:
function(bz,bA){bz.style.overflowY=bA;
},"default":function(J,K){J.style.overflowY=K;
}}),resetY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(S){S.style.overflow=u;
}:
function(bD){bD.style.overflowY=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cc,cd){cc.style.overflow=u;
}:
function(bQ,bR){bQ.style.overflowY=u;
},"default":function(bI){bI.style.overflowY=u;
}})}});
})();
(function(){var l="",k="qx.client",j="user-select",i="userSelect",h="appearance",g="style",f="MozUserModify",e="px",d="-webkit-appearance",c="styleFloat",H="-webkit-user-select",G="-moz-appearance",F="pixelHeight",E="MozAppearance",D=":",C="pixelTop",B="pixelLeft",A="text-overflow",z="-moz-user-select",y="MozUserSelect",s="qx.bom.element.Style",t="-moz-user-modify",q="-webkit-user-modify",r="WebkitUserSelect",o="-o-text-overflow",p="pixelRight",m="cssFloat",n="pixelWidth",u="pixelBottom",v=";",x="WebkitUserModify",w="WebkitAppearance";
qx.Class.define(s,{statics:{__ge:{styleNames:{"float":qx.core.Variant.select(k,{"mshtml":c,"default":m}),"appearance":qx.core.Variant.select(k,{"gecko":E,"webkit":w,"default":h}),"userSelect":qx.core.Variant.select(k,{"gecko":y,"webkit":r,"default":i}),"userModify":qx.core.Variant.select(k,{"gecko":f,"webkit":x,"default":i})},cssNames:{"appearance":qx.core.Variant.select(k,{"gecko":G,"webkit":d,"default":h}),"userSelect":qx.core.Variant.select(k,{"gecko":z,"webkit":H,"default":j}),"userModify":qx.core.Variant.select(k,{"gecko":t,"webkit":q,"default":j}),"textOverflow":qx.core.Variant.select(k,{"opera":o,"default":A})},mshtmlPixel:{width:n,height:F,left:B,right:p,top:C,bottom:u},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__gf:{},compile:function(I){var M=[];
var Q=this.__ge;
var P=Q.special;
var N=Q.cssNames;
var L=this.__gf;
var O=qx.lang.String;
var name,K,J;

for(name in I){J=I[name];

if(J==null){continue;
}name=N[name]||name;
if(P[name]){M.push(P[name].compile(J));
}else{K=L[name];

if(!K){K=L[name]=O.hyphenate(name);
}M.push(K,D,J,v);
}}return M.join(l);
},setCss:qx.core.Variant.select(k,{"mshtml":function(a,b){a.style.cssText=b;
},"default":function(by,bz){by.setAttribute(g,bz);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(X){return X.style.cssText.toLowerCase();
},"default":function(bo){return bo.getAttribute(g);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bh,name,bi,bj){{};
var bk=this.__ge;
name=bk.styleNames[name]||name;
if(bj!==false&&bk.special[name]){return bk.special[name].set(bh,bi);
}else{bh.style[name]=bi!==null?bi:l;
}},setStyles:function(bp,bq,br){{};
var bx=this.__ge;
var bu=bx.styleNames;
var bw=bx.special;
var bs=bp.style;

for(var bv in bq){var bt=bq[bv];
var name=bu[bv]||bv;

if(bt===undefined){if(br!==false&&bw[name]){bw[name].reset(bp);
}else{bs[name]=l;
}}else{if(br!==false&&bw[name]){bw[name].set(bp,bt);
}else{bs[name]=bt!==null?bt:l;
}}}},reset:function(bl,name,bm){var bn=this.__ge;
name=bn.styleNames[name]||name;
if(bm!==false&&bn.special[name]){return bn.special[name].reset(bl);
}else{bl.style[name]=l;
}},get:qx.core.Variant.select(k,{"mshtml":function(Y,name,ba,bb){var bg=this.__ge;
name=bg.styleNames[name]||name;
if(bb!==false&&bg.special[name]){return bg.special[name].get(Y,ba);
}if(!Y.currentStyle){return Y.style[name]||l;
}switch(ba){case this.LOCAL_MODE:return Y.style[name]||l;
case this.CASCADED_MODE:return Y.currentStyle[name]||l;
default:var bf=Y.currentStyle[name]||l;
if(/^-?[\.\d]+(px)?$/i.test(bf)){return bf;
}var be=bg.mshtmlPixel[name];

if(be){var bc=Y.style[name];
Y.style[name]=bf||0;
var bd=Y.style[be]+e;
Y.style[name]=bc;
return bd;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bf)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bf;
}},"default":function(R,name,S,T){var W=this.__ge;
name=W.styleNames[name]||name;
if(T!==false&&W.special[name]){return W.special[name].get(R,S);
}switch(S){case this.LOCAL_MODE:return R.style[name]||l;
case this.CASCADED_MODE:if(R.currentStyle){return R.currentStyle[name]||l;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var U=qx.dom.Node.getDocument(R);
var V=U.defaultView.getComputedStyle(R,null);
return V?V[name]:l;
}}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(g){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (g||window).document.compatMode!==f;
}},"webkit":function(k){if(document.compatMode===undefined){var l=(k||window).document.createElement(a);
l.style.cssText=e;
return l.style.width===c?true:false;
}else{return (k||window).document.compatMode!==f;
}},"default":function(q){return (q||window).document.compatMode!==f;
}}),isStandardMode:function(m){return !this.isQuirksMode(m);
},getWidth:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getWidth(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollWidth:o.body.scrollWidth;
return Math.max(scroll,p);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(g){if(qx.bom.client.Engine.VERSION<9.5){return (g||window).document.body.clientWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"webkit":function(i){if(qx.bom.client.Engine.VERSION<523.15){return (i||window).innerWidth;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(p){if(qx.bom.client.Engine.VERSION<9.5){return (p||window).document.body.clientHeight;
}else{var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientHeight:q.body.clientHeight;
}},"webkit":function(k){if(qx.bom.client.Engine.VERSION<523.15){return (k||window).innerHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(t){return (t||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(r){var s=(r||window).document;
return s.documentElement.scrollTop||s.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var h="/",g="mshtml",f="",e="qx.client",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__gK:qx.$$resources||{},__gL:{}},members:{has:function(y){return !!arguments.callee.self.__gK[y];
},getData:function(B){return arguments.callee.self.__gK[B]||null;
},getImageWidth:function(w){var x=arguments.callee.self.__gK[w];
return x?x[0]:null;
},getImageHeight:function(z){var A=arguments.callee.self.__gK[z];
return A?A[1]:null;
},getImageFormat:function(k){var l=arguments.callee.self.__gK[k];
return l?l[2]:null;
},isClippedImage:function(i){var j=arguments.callee.self.__gK[i];
return j&&j.length>4;
},toUri:function(m){if(m==null){return m;
}var n=arguments.callee.self.__gK[m];

if(!n){return m;
}
if(typeof n===c){var p=n;
}else{var p=n[3];
if(!p){return m;
}}var o=f;

if(qx.core.Variant.isSet(e,g)&&qx.bom.client.Feature.SSL){o=arguments.callee.self.__gL[p];
}return o+qx.$$libraries[p].resourceUri+h+m;
}},defer:function(q){if(qx.core.Variant.isSet(e,g)){if(qx.bom.client.Feature.SSL){for(var u in qx.$$libraries){var s;

if(qx.$$libraries[u].resourceUri){s=qx.$$libraries[u].resourceUri;
}else{q.__gL[u]=f;
continue;
}if(s.match(/^\/\//)!=null){q.__gL[u]=window.location.protocol;
}else if(s.match(/^\.\//)!=null){var r=document.URL;
q.__gL[u]=r.substring(0,r.lastIndexOf(h)+1);
}else if(s.match(/^http/)!=null){}else{var v=window.location.href.indexOf(d);
var t;

if(v==-1){t=window.location.href;
}else{t=window.location.href.substring(0,v);
}q.__gL[u]=t.substring(0,t.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var e="qx.client",d="load",c="qx.io.ImageLoader";
qx.Bootstrap.define(c,{statics:{__hl:{},__hm:{width:null,height:null},__hn:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(s){var t=this.__hl[s];
return !!(t&&t.loaded);
},isFailed:function(f){var g=this.__hl[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__hl[h];
return !!(j&&j.loading);
},getFormat:function(a){var b=this.__hl[a];
return b?b.format:null;
},getSize:function(k){var m=this.__hl[k];
return m?
{width:m.width,height:m.height}:this.__hm;
},getWidth:function(v){var w=this.__hl[v];
return w?w.width:null;
},getHeight:function(p){var q=this.__hl[p];
return q?q.height:null;
},load:function(C,D,E){var F=this.__hl[C];

if(!F){F=this.__hl[C]={};
}if(D&&!E){E=window;
}if(F.loaded||F.loading||F.failed){if(D){if(F.loading){F.callbacks.push(D,E);
}else{D.call(E,C,F);
}}}else{F.loading=true;
F.callbacks=[];

if(D){F.callbacks.push(D,E);
}var H=new Image();
var G=qx.lang.Function.listener(this.__ho,this,H,C);
H.onload=G;
H.onerror=G;
H.src=C;
}},__ho:qx.event.GlobalError.observeMethod(function(event,x,y){var z=this.__hl[y];
if(event.type===d){z.loaded=true;
z.width=this.__hp(x);
z.height=this.__hq(x);
var A=this.__hn.exec(y);

if(A!=null){z.format=A[1];
}}else{z.failed=true;
}x.onload=x.onerror=null;
var B=z.callbacks;
delete z.loading;
delete z.callbacks;
for(var i=0,l=B.length;i<l;i+=2){B[i].call(B[i+1],y,z);
}}),__hp:qx.core.Variant.select(e,{"gecko":function(n){return n.naturalWidth;
},"default":function(o){return o.width;
}}),__hq:qx.core.Variant.select(e,{"gecko":function(u){return u.naturalHeight;
},"default":function(r){return r.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__hr:[i,null,h,b,null,j,e,null,j],__hs:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ht:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==m){top+=0.01;
}
if(z){var B=(typeof z==m)?z+k:z;
}else{B=l;
}
if(top){var C=(typeof top==m)?top+k:top;
}else{C=l;
}return B+d+C;
},compile:function(n,o,p,top){var q=this.__ht(p,top);
var r=qx.util.ResourceManager.getInstance().toUri(n);
var s=this.__hr;
s[1]=r;
s[4]=q;
s[7]=o;
return s.join(g);
},getStyles:function(t,u,v,top){if(!t){return this.__hs;
}var w=this.__ht(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:c+x+f};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
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
(function(){var bf=",",be="rgb(",bd=")",bc="qx.theme.manager.Color",bb="qx.util.ColorUtil";
qx.Class.define(bb,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(J){return this.NAMED[J]!==undefined;
},isSystemColor:function(D){return this.SYSTEM[D]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(bc);
},isThemedColor:function(v){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(v);
},stringToRgb:function(U){if(this.supportsThemes()&&this.isThemedColor(U)){var U=qx.theme.manager.Color.getInstance().resolveDynamic(U);
}
if(this.isNamedColor(U)){return this.NAMED[U];
}else if(this.isSystemColor(U)){throw new Error("Could not convert system colors to RGB: "+U);
}else if(this.isRgbString(U)){return this.__hu();
}else if(this.isHex3String(U)){return this.__hw();
}else if(this.isHex6String(U)){return this.__hx();
}throw new Error("Could not parse color: "+U);
},cssStringToRgb:function(N){if(this.isNamedColor(N)){return this.NAMED[N];
}else if(this.isSystemColor(N)){throw new Error("Could not convert system colors to RGB: "+N);
}else if(this.isRgbString(N)){return this.__hu();
}else if(this.isRgbaString(N)){return this.__hv();
}else if(this.isHex3String(N)){return this.__hw();
}else if(this.isHex6String(N)){return this.__hx();
}throw new Error("Could not parse color: "+N);
},stringToRgbString:function(C){return this.rgbToRgbString(this.stringToRgb(C));
},rgbToRgbString:function(P){return be+P[0]+bf+P[1]+bf+P[2]+bd;
},rgbToHexString:function(bh){return (qx.lang.String.pad(bh[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(E){return this.isThemedColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E);
},isCssString:function(bg){return this.isSystemColor(bg)||this.isNamedColor(bg)||this.isHex3String(bg)||this.isHex6String(bg)||this.isRgbString(bg);
},isHex3String:function(V){return this.REGEXP.hex3.test(V);
},isHex6String:function(Q){return this.REGEXP.hex6.test(Q);
},isRgbString:function(u){return this.REGEXP.rgb.test(u);
},isRgbaString:function(O){return this.REGEXP.rgba.test(O);
},__hu:function(){var ba=parseInt(RegExp.$1,10);
var Y=parseInt(RegExp.$2,10);
var X=parseInt(RegExp.$3,10);
return [ba,Y,X];
},__hv:function(){var T=parseInt(RegExp.$1,10);
var S=parseInt(RegExp.$2,10);
var R=parseInt(RegExp.$3,10);
return [T,S,R];
},__hw:function(){var H=parseInt(RegExp.$1,16)*17;
var G=parseInt(RegExp.$2,16)*17;
var F=parseInt(RegExp.$3,16)*17;
return [H,G,F];
},__hx:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(bi){if(this.isHex3String(bi)){return this.__hw(bi);
}throw new Error("Invalid hex3 value: "+bi);
},hex6StringToRgb:function(W){if(this.isHex6String(W)){return this.__hx(W);
}throw new Error("Invalid hex6 value: "+W);
},hexStringToRgb:function(I){if(this.isHex3String(I)){return this.__hw(I);
}
if(this.isHex6String(I)){return this.__hx(I);
}throw new Error("Invalid hex value: "+I);
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
},hsbToRgb:function(w){var i,f,p,q,t;
var x=w[0]/360;
var y=w[1]/100;
var z=w[2]/100;

if(x>=1.0){x%=1.0;
}
if(y>1.0){y=1.0;
}
if(z>1.0){z=1.0;
}var A=Math.floor(255*z);
var B={};

if(y==0.0){B.red=B.green=B.blue=A;
}else{x*=6.0;
i=Math.floor(x);
f=x-i;
p=Math.floor(A*(1.0-y));
q=Math.floor(A*(1.0-(y*f)));
t=Math.floor(A*(1.0-(y*(1.0-f))));

switch(i){case 0:B.red=A;
B.green=t;
B.blue=p;
break;
case 1:B.red=q;
B.green=A;
B.blue=p;
break;
case 2:B.red=p;
B.green=A;
B.blue=t;
break;
case 3:B.red=p;
B.green=q;
B.blue=A;
break;
case 4:B.red=t;
B.green=p;
B.blue=A;
break;
case 5:B.red=A;
B.green=p;
B.blue=q;
break;
}}return [B.red,B.green,B.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var l="ready",k="qx.client",j="mshtml",i="load",h="unload",g="qx.event.handler.Application",f="complete",d="gecko|opera|webkit",c="left",b="DOMContentLoaded",a="shutdown";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._window=r.getWindow();
this.__gt=false;
this.__gu=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gv:false,onScriptLoaded:function(){this.__gv=true;
var w=qx.event.handler.Application.$$instance;

if(w){w.__gy();
}}},members:{canHandleEvent:function(y,z){},registerEvent:function(s,t,u){},unregisterEvent:function(o,p,q){},__gw:null,__gt:null,__gu:null,__gx:null,__gy:function(){var x=qx.event.handler.Application;
if(!this.__gw&&this.__gt&&x.__gv){if(qx.core.Variant.isSet(k,j)){if(qx.event.Registration.hasListener(this._window,l)){this.__gw=true;
qx.event.Registration.fireEvent(this._window,l);
}}else{this.__gw=true;
qx.event.Registration.fireEvent(this._window,l);
}}},isApplicationReady:function(){return this.__gw;
},_initObserver:function(){if(qx.$$domReady||document.readyState==f){this.__gt=true;
this.__gy();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(k,d)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(k,j)){var self=this;
var m=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(n){window.setTimeout(m,100);
}};
m();
}qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,h,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,i,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,h,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gt=true;
this.__gy();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gx){this.__gx=true;

try{qx.event.Registration.fireEvent(this._window,a);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var c="qx.event.handler.Window";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this._manager=o;
this._window=o.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.addNativeListener(this._window,m,this._onNativeWrapper);
}},_stopWindowObserver:function(){var f=qx.event.handler.Window.SUPPORTED_TYPES;

for(var d in f){qx.bom.Event.removeNativeListener(this._window,d,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__gA||null;
},__gz:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__gA=new j;
var h=new Date;
this.__gA.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__gA.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__gB:function(e){var g=this.__gA;

if(g){e.setReturnValue(g.close());
}},__gC:function(){var l=this.__gA;

if(l){l.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.__gz,k);
qx.event.Registration.addListener(window,a,k.__gC,k);
qx.event.Registration.addListener(window,c,k.__gB,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(d,e){var f=qx.locale.Manager;

if(f){return f.tr.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(g,h,i,j){var k=qx.locale.Manager;

if(k){return k.trn.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(b){var c=qx.locale.Manager;

if(c){return c.marktr.apply(c,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__qJ:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__qJ;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__qJ=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__qJ=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var u="changeValue",t="console",s="_propertyWindow",r="_consoleWindow",q="_widgetsWindow",p="_consoleButton",o="Left",n="execute",m="_propertyButton",l="Height",bs="property",br="widgets",bq="url",bp="Open",bo="Top",bn="_widgetsButton",bm="Width",bl="close",bk="Objects",bj="resize",B="_reloadButton",C="true",z="Inspect widget",A="_inspectButton",x="index.html",y="myToolbar",v="_objectsButton",w="<tt>",F="open",G=" Can not access the javascript in the iframe!",O="Properties",M="load",W="_selector",R="changeSelection",bf="_container",bc="middle",I="inspector/images/icons/edit-find.png",bi="_objectsWindow",bh="..",bg="",H="qooxdoo Inspector",K="Lucida Grande",L="move",N="</tt>",P="inspector.Application",S="Widgets",Y="_selectedWidgetLabel",be="_toolbar",D="objects",E="_iFrame",J="toolbar-button-bold",V="Console",U="inspector/css/propertylisthtml.css",T="inspector/css/domview.css",bb="inspector/css/consoleview.css",ba="hidden",Q="inspector/css/sourceview.css",X="_urlTextField",k="icon/16/actions/view-refresh.png",bd="minimized";
qx.Class.define(P,{extend:qx.application.Standalone,construct:function(){arguments.callee.base.call(this);
qx.bom.Stylesheet.includeFile(T);
qx.bom.Stylesheet.includeFile(bb);
qx.bom.Stylesheet.includeFile(Q);
qx.bom.Stylesheet.includeFile(U);
},members:{__Nk:null,_toolbar:null,_objectsButton:null,_widgetsButton:null,_consoleButton:null,_propertyButton:null,_inspectButton:null,_selectedWidgetLabel:null,_urlTextField:null,_reloadButton:null,_objectsWindow:null,_widgetsWindow:null,_consoleWindow:null,_propertyWindow:null,_container:null,_iFrame:null,_loading:null,_selector:null,_loadedWindow:null,__Nl:null,__Nm:null,main:function(){arguments.callee.base.call(this);
{};
this.__Nl=new inspector.components.InspectorModel(this);
this.__Nm=new inspector.components.State();
this._container=new qx.ui.container.Composite(new qx.ui.layout.VBox());
this.getRoot().add(this._container,{edge:0});
this.__Nt();
this.__Nw(false);
var bD=bh;
var bC=qx.bom.Cookie.get(bq);

if(bC==undefined||bC==bg){bC=bD;
}
if(window.qxinspector!=undefined&&qxinspector.local){this._urlTextField.setVisibility(ba);
bD=x;
}else{bD=bC;
}this._loading=true;
this._iFrame=new qx.ui.embed.Iframe(bD);
this._iFrame.setDecorator(null);
this._container.add(this._iFrame,{flex:1});
this._iFrame.addListener(M,this.__Nn,this);
this._urlTextField.setValue(bD);
},__Nn:function(){this.__Nk=0;
this.__No();
var by=this._iFrame.getSource();

try{by=this._iFrame.getWindow().location.pathname;
}catch(bG){}
if(window.qxinspector==undefined){this._urlTextField.setValue(by);
}qx.bom.Cookie.set(bq,by,7);
},__No:function(){this._loadedWindow=this._iFrame.getContentElement().getWindow();
this.__Nw(false);
if(!this.__Ns()){return;
}this.__Nw(true);
if(!this._selector){this._selector=new inspector.components.Selector(this._loadedWindow);
}else{this._selector.setJSWindow(this._loadedWindow);
}this._selector.addListener(R,this._changeSelection,this);
this._selector.setSelection(this._loadedWindow.qx.core.Init.getApplication());
this._loading=false;
this.__Np();
this.__Nl.setObjectRegistry(this._loadedWindow.qx.core.ObjectRegistry);
this.select(this._loadedWindow.qx.core.Init.getApplication().getRoot());
this.__Nm.restoreState();
this.__Nr();
},__Np:function(){if(this._objectsWindow!=null&&this._objectsWindow.isVisible()){this._objectsWindow.load(this._loadedWindow);
}if(this._widgetsWindow!=null&&this._widgetsWindow.isVisible()){this._widgetsWindow.load(this._loadedWindow);
}},__Nq:function(d,f,name){var i=qx.bom.Cookie.get(name+bp);

if(i==C||i===null){f.setValue(true);
var top=parseInt(qx.bom.Cookie.get(name+bo));
var j=parseInt(qx.bom.Cookie.get(name+o));

if(!isNaN(top)&&!isNaN(j)){this[d].moveTo(j,top);
}var g=parseInt(qx.bom.Cookie.get(name+bm));
var h=parseInt(qx.bom.Cookie.get(name+l));

if(!isNaN(h)){this[d].setHeight(h);
}
if(!isNaN(g)){this[d].setWidth(g);
}}},__Nr:function(){this.__Nq(q,this._widgetsButton,br);
this.__Nq(r,this._consoleButton,t);
this.__Nq(s,this._propertyButton,bs);
},__Ns:function(){try{this.__Nk++;
if(this.__Nk>20){throw new Error("qooxdoo not found!");
}
try{this._loadedWindow.qx.core.Init.getApplication().getRoot();
return true;
}catch(a){qx.event.Timer.once(this.__No,this,500);
throw new Error("qooxdoo isn't ready at the moment!");
}}catch(bE){this._selectedWidgetLabel.setValue(G);
return false;
}},__Nt:function(){this._toolbar=new qx.ui.toolbar.ToolBar();
this._toolbar.setDecorator(y);
this._toolbar._getLayout().setAlignY(bc);
this._container.add(this._toolbar);
var bx=new qx.ui.basic.Label(H);
bx.setPaddingLeft(10);
bx.setPaddingRight(5);
var bw=new qx.bom.Font(12,[K]);
bw.setBold(true);
bw.setItalic(true);
bx.setFont(bw);
this._toolbar.add(bx);
this._toolbar.add(new qx.ui.toolbar.Separator());
var bv=new inspector.objects2.Window(bk,this.__Nl);
this.__Nm.add(bv,D);
this._objectsButton=new qx.ui.toolbar.CheckBox(bk);
this._toolbar.add(this._objectsButton);
this._objectsButton.addListener(u,function(e){e.getData()?bv.open():bv.close();
},this);
bv.addListener(F,function(e){this._objectsButton.setValue(true);
},this);
bv.addListener(bl,function(e){this._objectsButton.setValue(false);
},this);
this.__Nu(bn,S,q,inspector.widgets.WidgetsWindow,br,function(){this._widgetsWindow.load();
});
this.__Nu(m,O,s,inspector.property.PropertyWindow,bs,function(){this._propertyWindow.select(this._selector.getSelection());
});
this.__Nu(p,V,r,inspector.console.ConsoleWindow,t,function(){});
this._toolbar.add(new qx.ui.toolbar.Separator());
this._inspectButton=new qx.ui.toolbar.CheckBox(z,I);
this._inspectButton.setAppearance(J);
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
this._reloadButton=new qx.ui.toolbar.Button(null,k);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(n,this._reloadIframe,this);
},_reloadIframe:function(e){this._loading=true;
var bt=this._iFrame.getSource();

try{bt=this._iFrame.getWindow().location.pathname;
}catch(bu){}
if(bt!=this._urlTextField.getValue()){this._iFrame.setSource(this._urlTextField.getValue());
}else{if(e.getType()==n){if(this._iFrame.getSource!=bt){this._iFrame.setSource(bt);
}else{this._iFrame.reload();
}}}},__Nu:function(bM,bN,bO,bP,name,bQ){this[bM]=new qx.ui.toolbar.CheckBox(bN);
this._toolbar.add(this[bM]);
var bR=false;
this[bM].addListener(u,function(e){if(!bR){this[bO]=new bP();
this.getRoot().add(this[bO]);
this[bO].setInitSizeAndPosition();
this.__Nv(this[bO],this[bM],name);
}e.getData()?this[bO].open():this[bO].close();
bQ.call(this);
bR=true;
qx.bom.Cookie.set(name+bp,e.getData(),7);
},this);
},__Nv:function(b,c,name){b.addListener(bl,function(){c.setValue(false);
},this);
b.addListener(L,function(e){qx.bom.Cookie.set(name+o,e.getData().left,7);
qx.bom.Cookie.set(name+bo,e.getData().top,7);
},this);
b.addListener(bj,function(e){qx.bom.Cookie.set(name+bm,e.getData().width,7);
qx.bom.Cookie.set(name+l,e.getData().height,7);
},this);
},__Nw:function(bF){this._objectsButton.setEnabled(bF);
this._widgetsButton.setEnabled(bF);
this._consoleButton.setEnabled(bF);
this._propertyButton.setEnabled(bF);
this._inspectButton.setEnabled(bF);
this._selectedWidgetLabel.setEnabled(bF);
},_changeSelection:function(e){this._inspectButton.setValue(false);
this.select(e.getData(),this._selector);
},getSelectedObject:function(){return this._selector.getSelection();
},setWidgetByHash:function(bz,bA){if(bA==t){bA=this._consoleWindow;
this._consoleWindow.goToDefaultView();
}var bB=this._loadedWindow.qx.core.ObjectRegistry.fromHashCode(bz);
this.select(bB,bA);
},inspectObjectByDomSelecet:function(bK,bL){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByDomSelecet(bK,bL);
}},inspectObjectByInternalId:function(bH){if(this._consoleWindow!=null){this._consoleWindow.inspectObjectByInternalId(bH);
}},select:function(bI,bJ){if(this._loading||!bI){return;
}this._selectedWidgetLabel.setValue(w+bI.toString()+N);

if(bJ!=this._selector){if(bI!==this._selector.getSelection()){this._selector.setSelection(bI);
}}
if(this._objectsWindow!=null&&bJ!=this._objectsWindow){if(bI!=this._objectsWindow.getSelection()){this._objectsWindow.select(bI,true);
}}
if(this._widgetsWindow!=null&&bJ!=this._widgetsWindow){if(bI!=this._widgetsWindow.getSelection()){this._widgetsWindow.select(bI,true);
}}
if(this._propertyWindow!=null&&bJ!=this._propertyWindow){if(bI!=this._propertyWindow.getSelection()&&this._propertyWindow.getMode()!=bd){this._propertyWindow.select(bI,true);
}}this.__Nl.setInspected(bI);
this._selector.highlightFor(bI,1000);
},getIframeWindowObject:function(){return this._loadedWindow;
},getExcludes:function(){if(this._selector!=null){return this._selector.getAddedWidgets();
}else{return [];
}}},destruct:function(){this._loadedWindow=null;
this._disposeObjects(bf,be,v,bn,m,p,A,Y,X,B,E,W,bi,q,r,s);
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f,g,h,i){arguments.callee.base.call(this,h,i);
this._target=f||qx.bom.Event.getTarget(e);
this._relatedTarget=g||qx.bom.Event.getRelatedTarget(e);

if(e.timeStamp){this._timeStamp=e.timeStamp;
}this._native=e;
this._returnValue=null;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
var d={};
c._native=this._cloneNativeEvent(this._native,d);
c._returnValue=this._returnValue;
return c;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(j){this._returnValue=j;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
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
(function(){var g="object",f="_applyTheme",e="qx.theme.manager.Decoration",d="Theme",c="__gD",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:f}},members:{__gD:null,resolve:function(j){if(!j){return null;
}
if(typeof j===g){return j;
}var m=this.getTheme();

if(!m){return null;
}var m=this.getTheme();

if(!m){return null;
}var n=this.__gD;

if(!n){n=this.__gD={};
}var k=n[j];

if(k){return k;
}var l=m.decorations[j];

if(!l){return null;
}var o=l.decorator;

if(o==null){throw new Error("Missing definition of which decorator to use in entry: "+j+"!");
}return n[j]=(new o).set(l.style);
},isValidPropertyValue:function(t){if(typeof t===b){return this.isDynamic(t);
}else if(typeof t===g){var u=t.constructor;
return qx.Class.hasInterface(u,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(h){if(!h){return false;
}var i=this.getTheme();

if(!i){return false;
}return !!i.decorations[h];
},_applyTheme:function(p,q){var s=qx.util.AliasManager.getInstance();

if(q){for(var r in q.aliases){s.remove(r);
}}
if(p){for(var r in p.aliases){s.add(r,p.aliases[r]);
}}
if(!p){this.__gD={};
}}},destruct:function(){this._disposeMap(c);
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
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(Q,R){arguments.callee.base.call(this);

if(Q!==undefined){this.setSize(Q);
}
if(R!==undefined){this.setFamily(R);
}},statics:{fromString:function(y){var C=new qx.bom.Font();
var A=y.split(/\s+/);
var name=[];
var B;

for(var i=0;i<A.length;i++){switch(B=A[i]){case c:C.setBold(true);
break;
case e:C.setItalic(true);
break;
case j:C.setDecoration(j);
break;
default:var z=parseInt(B,10);

if(z==B||qx.lang.String.contains(B,g)){C.setSize(z);
}else{name.push(B);
}break;
}}
if(name.length>0){C.setFamily(name);
}return C;
},fromConfig:function(K){var L=new qx.bom.Font;
L.set(K);
return L;
},__jF:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__jF;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__jG:null,__jH:null,__jI:null,__jJ:null,__jK:null,__jL:null,_applySize:function(S,T){this.__jG=S===null?null:S+g;
},_applyLineHeight:function(G,H){this.__jL=G===null?null:G;
},_applyFamily:function(D,E){var F=k;

for(var i=0,l=D.length;i<l;i++){if(D[i].indexOf(o)>0){F+=f+D[i]+f;
}else{F+=D[i];
}
if(i!==l-1){F+=n;
}}this.__jH=F;
},_applyBold:function(O,P){this.__jI=O===null?null:O?c:d;
},_applyItalic:function(M,N){this.__jJ=M===null?null:M?e:d;
},_applyDecoration:function(I,J){this.__jK=I===null?null:I;
},getStyles:function(){return {fontFamily:this.__jH,fontSize:this.__jG,fontWeight:this.__jI,fontStyle:this.__jJ,textDecoration:this.__jK,lineHeight:this.__jL};
}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hy={};
this.__hz={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__hA:{},__hy:null,__hz:null,_applyTheme:function(i,j){this.__hz={};
this.__hy={};
},__hB:function(k,l,m){var q=l.appearances;
var t=q[k];

if(!t){var u=b;
var n=[];
var s=k.split(u);
var r;

while(!t&&s.length>0){n.unshift(s.pop());
var o=s.join(u);
t=q[o];

if(t){r=t.alias||t;

if(typeof r===h){var p=r+u+n.join(u);
return this.__hB(p,l,m);
}}}if(m!=null){return this.__hB(m,l);
}return null;
}else if(typeof t===h){return this.__hB(t,l,m);
}else if(t.include&&!t.style){return this.__hB(t.include,l,m);
}return k;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__hz;
var z=E[v];

if(!z){z=E[v]=this.__hB(v,x,y);
}var J=x.appearances[z];

if(!J){this.warn("Missing appearance: "+v);
return null;
}if(!J.style){return null;
}var K=z;

if(w){var L=J.$$bits;

if(!L){L=J.$$bits={};
J.$$length=0;
}var C=0;

for(var F in w){if(!w[F]){continue;
}
if(L[F]==null){L[F]=1<<J.$$length++;
}C+=L[F];
}if(C>0){K+=e+C;
}}var D=this.__hy;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__hA;
}var H;
if(J.include||J.base){var B=J.style(w);
var A;

if(J.include){A=this.styleFrom(J.include,w,x,y);
}H={};
if(J.base){var G=this.styleFrom(z,w,J.base,y);

if(J.include){for(var I in G){if(!A.hasOwnProperty(I)&&!B.hasOwnProperty(I)){H[I]=G[I];
}}}else{for(var I in G){if(!B.hasOwnProperty(I)){H[I]=G[I];
}}}}if(J.include){for(var I in A){if(!B.hasOwnProperty(I)){H[I]=A[I];
}}}for(var I in B){H[I]=B[I];
}}else{H=J.style(w);
}return D[K]=H||null;
}},destruct:function(){this.__hy=this.__hz=null;
}});
})();
(function(){var t="focusout",s="interval",r="mouseover",q="mouseout",p="mousemove",o="__qK",n="widget",m="qx.ui.tooltip.ToolTip",l="Boolean",k="_applyCurrent",h="__qN",j="qx.ui.tooltip.Manager",i="tooltip-error",g="singleton",f="__qL";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,r,this.__qU,this,true);
this.__qK=new qx.event.Timer();
this.__qK.addListener(s,this.__qR,this);
this.__qL=new qx.event.Timer();
this.__qL.addListener(s,this.__qS,this);
this.__qM={left:0,top:0};
},properties:{current:{check:m,nullable:true,apply:k},showInvalidTooltips:{check:l,init:true}},members:{__qM:null,__qL:null,__qK:null,__qN:null,__qO:null,__qP:function(){if(!this.__qN){this.__qN=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qN;
},__qQ:function(){if(!this.__qO){this.__qO=new qx.ui.tooltip.ToolTip().set({appearance:i});
this.__qO.syncAppearance();
}return this.__qO;
},_applyCurrent:function(a,b){if(b&&qx.ui.core.Widget.contains(b,a)){return;
}if(b){if(!b.isDisposed()){b.exclude();
}this.__qK.stop();
this.__qL.stop();
}var d=qx.event.Registration;
var c=document.body;
if(a){this.__qK.startWith(a.getShowTimeout());
d.addListener(c,q,this.__qV,this,true);
d.addListener(c,t,this.__qW,this,true);
d.addListener(c,p,this.__qT,this,true);
}else{d.removeListener(c,q,this.__qV,this,true);
d.removeListener(c,t,this.__qW,this,true);
d.removeListener(c,p,this.__qT,this,true);
}},__qR:function(e){var z=this.getCurrent();

if(z&&!z.isDisposed()){this.__qL.startWith(z.getHideTimeout());

if(z.getPlaceMethod()==n){z.placeToWidget(z.getOpener());
}else{z.placeToPoint(this.__qM);
}z.show();
}this.__qK.stop();
},__qS:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){A.exclude();
}this.__qL.stop();
this.resetCurrent();
},__qT:function(e){var B=this.__qM;
B.left=e.getDocumentLeft();
B.top=e.getDocumentTop();
},__qU:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
}var F=this.__qQ().set({label:C});
}else if(!F){var F=this.__qP().set({label:G,icon:D});
}this.setCurrent(F);
F.setOpener(E);
},__qV:function(e){var w=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!w){return;
}var x=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!x){return;
}var y=this.getCurrent();
if(y&&(x==y||qx.ui.core.Widget.contains(y,x))){return;
}if(x&&w&&qx.ui.core.Widget.contains(w,x)){return;
}if(y&&!x){this.setCurrent(null);
}else{this.resetCurrent();
}},__qW:function(e){var u=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!u){return;
}var v=this.getCurrent();
if(v&&v==u.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,r,this.__qU,this,true);
this._disposeObjects(o,f,h);
this.__qM=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__fQ=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(l,m,n){var o=new qx.event.Timer(n);
o.addListener(i,function(e){o.stop();
l.call(m,e);
o.dispose();
m=null;
},m);
o.start();
return o;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__fR:null,__fQ:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__fR);
this.__fR=null;
}else if(p){this.__fR=window.setInterval(this.__fQ,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(j){this.setInterval(j);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(k){this.stop();
this.startWith(k);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__fR){window.clearInterval(this.__fR);
}this.__fR=this.__fQ=null;
}});
})();
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(p){return this._indexOf(p);
},add:function(j,k){this._add(j,k);
},addAt:function(a,b,c){this._addAt(a,b,c);
},addBefore:function(l,m,n){this._addBefore(l,m,n);
},addAfter:function(e,f,g){this._addAfter(e,f,g);
},remove:function(h){this._remove(h);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(i){i.getChildren=i._getChildren;
i.hasChildren=i._hasChildren;
i.indexOf=i._indexOf;
i.add=i._add;
i.addAt=i._addAt;
i.addBefore=i._addBefore;
i.addAfter=i._addAfter;
i.remove=i._remove;
i.removeAt=i._removeAt;
i.removeAll=i._removeAll;
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
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__bJ:null,__bK:null,__bL:null,__bM:null,__bN:null,__bO:null,__bP:null,getBounds:function(){return this.__bO||this.__bK||null;
},clearSeparators:function(){},renderSeparator:function(M,N){},renderLayout:function(W,top,X,Y){var ba;
{};
var bb=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bb=this._getHeightForWidth(X);
}
if(bb!=null&&bb!==this.__bJ){this.__bJ=bb;
qx.ui.core.queue.Layout.add(this);
return null;
}var bd=this.__bK;

if(!bd){bd=this.__bK={};
}var bc={};

if(W!==bd.left||top!==bd.top){bc.position=true;
bd.left=W;
bd.top=top;
}
if(X!==bd.width||Y!==bd.height){bc.size=true;
bd.width=X;
bd.height=Y;
}if(this.__bL){bc.local=true;
delete this.__bL;
}
if(this.__bN){bc.margin=true;
delete this.__bN;
}return bc;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__bL;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__bL=true;
this.__bM=null;
},getSizeHint:function(B){var C=this.__bM;

if(C){return C;
}
if(B===false){return null;
}C=this.__bM=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__bJ&&this.getHeight()==null){C.height=this.__bJ;
}if(C.minWidth>C.width){C.width=C.minWidth;
}
if(C.maxWidth<C.width){C.width=C.maxWidth;
}
if(!this.getAllowGrowX()){C.maxWidth=C.width;
}
if(!this.getAllowShrinkX()){C.minWidth=C.width;
}if(C.minHeight>C.height){C.height=C.minHeight;
}
if(C.maxHeight<C.height){C.height=C.maxHeight;
}
if(!this.getAllowGrowY()){C.maxHeight=C.height;
}
if(!this.getAllowShrinkY()){C.minHeight=C.height;
}return C;
},_computeSizeHint:function(){var S=this.getMinWidth()||0;
var P=this.getMinHeight()||0;
var T=this.getWidth()||S;
var R=this.getHeight()||P;
var O=this.getMaxWidth()||Infinity;
var Q=this.getMaxHeight()||Infinity;
return {minWidth:S,width:T,maxWidth:O,minHeight:P,height:R,maxHeight:Q};
},_hasHeightForWidth:function(){var G=this._getLayout();

if(G){return G.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(K){var L=this._getLayout();

if(L&&L.hasHeightForWidth()){return L.getHeightForWidth(K);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__bN=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__bO;
},setUserBounds:function(y,top,z,A){this.__bO={left:y,top:top,width:z,height:A};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__bO;
qx.ui.core.queue.Layout.add(this);
},__bQ:{},setLayoutProperties:function(D){if(D==null){return;
}var E=this.__bP;

if(!E){E=this.__bP={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(D);
}for(var F in D){if(D[F]==null){delete E[F];
}else{E[F]=D[F];
}}},getLayoutProperties:function(){return this.__bP||this.__bQ;
},clearLayoutProperties:function(){delete this.__bP;
},updateLayoutProperties:function(H){var I=this._getLayout();

if(I){var J;
{};
I.invalidateChildrenCache();
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
},clone:function(){var U=arguments.callee.base.call(this);
var V=this.__bP;

if(V){U.__bP=qx.lang.Object.clone(V);
}return U;
}},destruct:function(){this.$$parent=this.$$subparent=this.__bP=this.__bK=this.__bO=this.__bM=null;
}});
})();
(function(){var h="qx.ui.core.DecoratorFactory",g="$$nopool$$";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__bR={};
},statics:{MAX_SIZE:15,__bS:g},members:{__bR:null,getDecoratorElement:function(a){var f=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(a)){var d=a;
var c=qx.theme.manager.Decoration.getInstance().resolve(a);
}else{var d=f.__bS;
c=a;
}var e=this.__bR;

if(e[d]&&e[d].length>0){var b=e[d].pop();
}else{var b=this._createDecoratorElement(c,d);
}b.$$pooled=false;
return b;
},poolDecorator:function(n){if(!n||n.$$pooled){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__bS){n.dispose();
return;
}var p=this.__bR;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(i,j){var k=new qx.html.Decorator(i,j);
{};
return k;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var m=this.__bR;

for(var l in m){qx.util.DisposeUtil.disposeArray(m,l);
}}this.__bR=null;
}});
})();
(function(){var fs="px",fr="Boolean",fq="qx.event.type.Mouse",fp="qx.event.type.Drag",fo="visible",fn="qx.event.type.Focus",fm="on",fl="Integer",fk="excluded",fj="qx.event.type.Data",eU="_applyPadding",eT="qx.event.type.Event",eS="hidden",eR="contextmenu",eQ="String",eP="tabIndex",eO="backgroundColor",eN="focused",eM="changeVisibility",eL="mshtml",fz="hovered",fA="qx.event.type.KeySequence",fx="qx.client",fy="absolute",fv="drag",fw="div",ft="disabled",fu="move",fB="dragstart",fC="qx.dynlocale",fc="dragchange",fb="dragend",fe="resize",fd="Decorator",fg="zIndex",ff="$$widget",fi="opacity",fh="default",fa="Color",eY="changeToolTipText",dB="beforeContextmenuOpen",dC="_applyNativeContextMenu",dD="_applyBackgroundColor",dE="_applyFocusable",dF="changeShadow",dG="qx.event.type.KeyInput",dH="__bX",dI="createChildControl",dJ="__bY",dK="Font",fG="_applyShadow",fF="_applyEnabled",fE="_applySelectable",fD="Number",fK="_applyKeepActive",fJ="__bU",fI="_applyVisibility",fH="repeat",fM="qxDraggable",fL="syncAppearance",ek="paddingLeft",em="_applyDroppable",ei="#",ej="qx.event.type.MouseWheel",ep="_applyCursor",eq="_applyDraggable",en="changeTextColor",eo="changeContextMenu",eg="paddingTop",eh="changeSelectable",dS="hideFocus",dR="none",dU="__cd",dT="outline",dO="_applyAppearance",dN="_applyOpacity",dQ="url(",dP=")",dM="qx.ui.core.Widget",dL="__bT",ev="_applyFont",ew="cursor",ex="qxDroppable",ey="changeZIndex",er="changeEnabled",es="changeFont",et="_applyDecorator",eu="_applyZIndex",ez="_applyTextColor",eA="qx.ui.menu.Menu",ed="__cf",ec="_applyToolTipText",eb="true",ea="widget",dY="changeDecorator",dX="_applyTabIndex",dW="__ch",dV="changeAppearance",ef="__ca",ee="shorthand",eB="/",eC="",eD="_applyContextMenu",eE="paddingBottom",eF="changeNativeContextMenu",eG="qx.ui.tooltip.ToolTip",eH="qxKeepActive",eI="_applyKeepFocus",eJ="paddingRight",eK="changeBackgroundColor",eX="changeLocale",eW="qxKeepFocus",eV="qx/static/blank.gif";
qx.Class.define(dM,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__bT=this._createContainerElement();
this.__bU=this.__cg();
this.__bT.add(this.__bU);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:eT,disappear:eT,createChildControl:fj,resize:fj,move:fj,syncAppearance:fj,mousemove:fq,mouseover:fq,mouseout:fq,mousedown:fq,mouseup:fq,click:fq,dblclick:fq,contextmenu:fq,beforeContextmenuOpen:fq,mousewheel:ej,keyup:fA,keydown:fA,keypress:fA,keyinput:dG,focus:fn,blur:fn,focusin:fn,focusout:fn,activate:fn,deactivate:fn,capture:eT,losecapture:eT,drop:fp,dragleave:fp,dragover:fp,drag:fp,dragstart:fp,dragend:fp,dragchange:fp,droprequest:fp},properties:{paddingTop:{check:fl,init:0,apply:eU,themeable:true},paddingRight:{check:fl,init:0,apply:eU,themeable:true},paddingBottom:{check:fl,init:0,apply:eU,themeable:true},paddingLeft:{check:fl,init:0,apply:eU,themeable:true},padding:{group:[eg,eJ,eE,ek],mode:ee,themeable:true},zIndex:{nullable:true,init:null,apply:eu,event:ey,check:fl,themeable:true},decorator:{nullable:true,init:null,apply:et,event:dY,check:fd,themeable:true},shadow:{nullable:true,init:null,apply:fG,event:dF,check:fd,themeable:true},backgroundColor:{nullable:true,check:fa,apply:dD,event:eK,themeable:true},textColor:{nullable:true,check:fa,apply:ez,event:en,themeable:true,inheritable:true},font:{nullable:true,apply:ev,check:dK,event:es,themeable:true,inheritable:true,dispose:true},opacity:{check:fD,apply:dN,themeable:true,nullable:true,init:null},cursor:{check:eQ,apply:ep,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eG,nullable:true},toolTipText:{check:eQ,nullable:true,event:eY,apply:ec},toolTipIcon:{check:eQ,nullable:true,event:eY},blockToolTip:{check:fr,init:false},visibility:{check:[fo,eS,fk],init:fo,apply:fI,event:eM},enabled:{init:true,check:fr,inheritable:true,apply:fF,event:er},anonymous:{init:false,check:fr},tabIndex:{check:fl,nullable:true,apply:dX},focusable:{check:fr,init:false,apply:dE},keepFocus:{check:fr,init:false,apply:eI},keepActive:{check:fr,init:false,apply:fK},draggable:{check:fr,init:false,apply:eq},droppable:{check:fr,init:false,apply:em},selectable:{check:fr,init:false,event:eh,apply:fE},contextMenu:{check:eA,apply:eD,nullable:true,event:eo},nativeContextMenu:{check:fr,init:false,themeable:true,event:eF,apply:dC},appearance:{check:eQ,init:ea,apply:dO,event:dV}},statics:{DEBUG:false,getWidgetByElement:function(bR){while(bR){var bS=bR.$$widget;
if(bS!=null){return qx.core.ObjectRegistry.fromHashCode(bS);
}bR=bR.parentNode;
}return null;
},contains:function(parent,ca){while(ca){if(parent==ca){return true;
}ca=ca.getLayoutParent();
}return false;
},__bV:new qx.ui.core.DecoratorFactory(),__bW:new qx.ui.core.DecoratorFactory()},members:{__bT:null,__bU:null,__bX:null,__bY:null,__ca:null,__cb:null,__cc:null,__cd:null,_getLayout:function(){return this.__cd;
},_setLayout:function(gh){{};

if(this.__cd){this.__cd.connectToWidget(null);
}
if(gh){gh.connectToWidget(this);
}this.__cd=gh;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cG=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cG);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cG);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__ce:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var fQ=qx.theme.manager.Decoration.getInstance();
var fS=fQ.resolve(a).getInsets();
var fR=fQ.resolve(b).getInsets();

if(fS.top!=fR.top||fS.right!=fR.right||fS.bottom!=fR.bottom||fS.left!=fR.left){return true;
}return false;
},renderLayout:function(fT,top,fU,fV){var gf=arguments.callee.base.call(this,fT,top,fU,fV);
if(!gf){return;
}var fX=this.getContainerElement();
var content=this.getContentElement();
var gc=gf.size||this._updateInsets;
var gg=fs;
var gd={};
if(gf.position){gd.left=fT+gg;
gd.top=top+gg;
}if(gf.size){gd.width=fU+gg;
gd.height=fV+gg;
}
if(gf.position||gf.size){fX.setStyles(gd);
}
if(gc||gf.local||gf.margin){var fW=this.getInsets();
var innerWidth=fU-fW.left-fW.right;
var innerHeight=fV-fW.top-fW.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var ga={};

if(this._updateInsets){ga.left=fW.left+gg;
ga.top=fW.top+gg;
}
if(gc){ga.width=innerWidth+gg;
ga.height=innerHeight+gg;
}
if(gc||this._updateInsets){content.setStyles(ga);
}
if(gf.size){var ge=this.__ca;

if(ge){ge.setStyles({width:fU+fs,height:fV+fs});
}}
if(gf.size||this._updateInsets){if(this.__bX){this.__bX.resize(fU,fV);
}}
if(gf.size){if(this.__bY){var fW=this.__bY.getInsets();
var gb=fU+fW.left+fW.right;
var fY=fV+fW.top+fW.bottom;
this.__bY.resize(gb,fY);
}}
if(gc||gf.local||gf.margin){if(this.__cd&&this.hasLayoutChildren()){this.__cd.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(gf.position&&this.hasListener(fu)){this.fireDataEvent(fu,this.getBounds());
}
if(gf.size&&this.hasListener(fe)){this.fireDataEvent(fe,this.getBounds());
}delete this._updateInsets;
return gf;
},__cf:null,clearSeparators:function(){var bF=this.__cf;

if(!bF){return;
}var bG=qx.ui.core.Widget.__bV;
var content=this.getContentElement();
var bE;

for(var i=0,l=bF.length;i<l;i++){bE=bF[i];
bG.poolDecorator(bE);
content.remove(bE);
}bF.length=0;
},renderSeparator:function(bW,bX){var bY=qx.ui.core.Widget.__bV.getDecoratorElement(bW);
this.getContentElement().add(bY);
bY.resize(bX.width,bX.height);
bY.setStyles({left:bX.left+fs,top:bX.top+fs});
if(!this.__cf){this.__cf=[bY];
}else{this.__cf.push(bY);
}},_computeSizeHint:function(){var P=this.getWidth();
var O=this.getMinWidth();
var K=this.getMaxWidth();
var N=this.getHeight();
var L=this.getMinHeight();
var M=this.getMaxHeight();
{};
var Q=this._getContentHint();
var J=this.getInsets();
var S=J.left+J.right;
var R=J.top+J.bottom;

if(P==null){P=Q.width+S;
}
if(N==null){N=Q.height+R;
}
if(O==null){O=S;

if(Q.minWidth!=null){O+=Q.minWidth;
}}
if(L==null){L=R;

if(Q.minHeight!=null){L+=Q.minHeight;
}}
if(K==null){if(Q.maxWidth==null){K=Infinity;
}else{K=Q.maxWidth+S;
}}
if(M==null){if(Q.maxHeight==null){M=Infinity;
}else{M=Q.maxHeight+R;
}}return {width:P,minWidth:O,maxWidth:K,height:N,minHeight:L,maxHeight:M};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__cd){this.__cd.invalidateLayoutCache();
}},_getContentHint:function(){var gE=this.__cd;

if(gE){if(this.hasLayoutChildren()){var gD;
var gF=gE.getSizeHint();
{};
return gF;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dg){var dk=this.getInsets();
var dn=dk.left+dk.right;
var dm=dk.top+dk.bottom;
var dl=dg-dn;
var di=this._getLayout();

if(di&&di.hasHeightForWidth()){var dh=di.getHeightForWidth(dg);
}else{dh=this._getContentHeightForWidth(dl);
}var dj=dh+dm;
return dj;
},_getContentHeightForWidth:function(gr){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var bO=this.getPaddingRight();
var bQ=this.getPaddingBottom();
var bP=this.getPaddingLeft();

if(this.__bX){var bN=this.__bX.getInsets();
{};
top+=bN.top;
bO+=bN.right;
bQ+=bN.bottom;
bP+=bN.left;
}return {"top":top,"right":bO,"bottom":bQ,"left":bP};
},getInnerSize:function(){var gy=this.getBounds();

if(!gy){return null;
}var gx=this.getInsets();
return {width:gy.width-gx.left-gx.right,height:gy.height-gx.top-gx.bottom};
},show:function(){this.setVisibility(fo);
},hide:function(){this.setVisibility(eS);
},exclude:function(){this.setVisibility(fk);
},isVisible:function(){return this.getVisibility()===fo;
},isHidden:function(){return this.getVisibility()!==fo;
},isExcluded:function(){return this.getVisibility()===fk;
},isSeeable:function(){var I=this.getContainerElement().getDomElement();

if(I){return I.offsetWidth>0;
}var H=this;

do{if(!H.isVisible()){return false;
}
if(H.isRootWidget()){return true;
}H=H.getLayoutParent();
}while(H);
return false;
},_createContainerElement:function(){var fN=new qx.html.Element(fw);
{};
fN.setStyles({"position":fy,"zIndex":0});
fN.setAttribute(ff,this.toHashCode());
{};
return fN;
},__cg:function(){var dq=this._createContentElement();
{};
dq.setStyles({"position":fy,"zIndex":10});
return dq;
},_createContentElement:function(){var bb=new qx.html.Element(fw);
bb.setStyles({"overflowX":eS,"overflowY":eS});
return bb;
},getContainerElement:function(){return this.__bT;
},getContentElement:function(){return this.__bU;
},getDecoratorElement:function(){return this.__bX||null;
},getShadowElement:function(){return this.__bY||null;
},__ch:null,getLayoutChildren:function(){var z=this.__ch;

if(!z){return this.__ci;
}var A;

for(var i=0,l=z.length;i<l;i++){var y=z[i];

if(y.hasUserBounds()||y.isExcluded()){if(A==null){A=z.concat();
}qx.lang.Array.remove(A,y);
}}return A||z;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var x=this.__cd;

if(x){x.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var cW=this.__ch;

if(!cW){return false;
}var cX;

for(var i=0,l=cW.length;i<l;i++){cX=cW[i];

if(!cX.hasUserBounds()&&!cX.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ci:[],_getChildren:function(){return this.__ch||this.__ci;
},_indexOf:function(bI){var bJ=this.__ch;

if(!bJ){return -1;
}return bJ.indexOf(bI);
},_hasChildren:function(){var G=this.__ch;
return G!=null&&(!!G[0]);
},addChildrenToQueue:function(bK){var bL=this.__ch;

if(!bL){return;
}var bM;

for(var i=0,l=bL.length;i<l;i++){bM=bL[i];
bK[bM.$$hash]=bM;
bM.addChildrenToQueue(bK);
}},_add:function(gW,gX){if(gW.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,gW);
}
if(this.__ch){this.__ch.push(gW);
}else{this.__ch=[gW];
}this.__cj(gW,gX);
},_addAt:function(cK,cL,cM){if(!this.__ch){this.__ch=[];
}if(cK.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,cK);
}var cN=this.__ch[cL];

if(cN===cK){return cK.setLayoutProperties(cM);
}
if(cN){qx.lang.Array.insertBefore(this.__ch,cK,cN);
}else{this.__ch.push(cK);
}this.__cj(cK,cM);
},_addBefore:function(bh,bi,bj){{};

if(bh==bi){return;
}
if(!this.__ch){this.__ch=[];
}if(bh.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,bh);
}qx.lang.Array.insertBefore(this.__ch,bh,bi);
this.__cj(bh,bj);
},_addAfter:function(cr,cs,ct){{};

if(cr==cs){return;
}
if(!this.__ch){this.__ch=[];
}if(cr.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,cr);
}qx.lang.Array.insertAfter(this.__ch,cr,cs);
this.__cj(cr,ct);
},_remove:function(dp){if(!this.__ch){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ch,dp);
this.__ck(dp);
},_removeAt:function(bv){if(!this.__ch){throw new Error("This widget has no children!");
}var bw=this.__ch[bv];
qx.lang.Array.removeAt(this.__ch,bv);
this.__ck(bw);
return bw;
},_removeAll:function(){if(!this.__ch){return;
}var gI=this.__ch.concat();
this.__ch.length=0;

for(var i=gI.length-1;i>=0;i--){this.__ck(gI[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__cj:function(bx,by){{};
var parent=bx.getLayoutParent();

if(parent&&parent!=this){parent._remove(bx);
}bx.setLayoutParent(this);
if(by){bx.setLayoutProperties(by);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(bx);
}},__ck:function(F){{};

if(F.getLayoutParent()!==this){throw new Error("Remove Error: "+F+" is not a child of this widget!");
}F.setLayoutParent(null);
if(this.__cd){this.__cd.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(F);
}},capture:function(bB){this.getContainerElement().capture(bB);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(cT,cU,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__ca){return;
}var bn=this.__ca=new qx.html.Element;
{};
bn.setStyles({position:fy,top:0,left:0,zIndex:7});
var bo=this.getBounds();

if(bo){this.__ca.setStyles({width:bo.width+fs,height:bo.height+fs});
}if(qx.core.Variant.isSet(fx,eL)){bn.setStyles({backgroundImage:dQ+qx.util.ResourceManager.getInstance().toUri(eV)+dP,backgroundRepeat:fH});
}this.getContainerElement().add(bn);
},_applyDecorator:function(T,U){{};
var Y=qx.ui.core.Widget.__bV;
var W=this.getContainerElement();
if(!this.__ca&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(U){W.remove(this.__bX);
Y.poolDecorator(this.__bX);
}if(T){var X=this.__bX=Y.getDecoratorElement(T);
X.setStyle(fg,5);
var V=this.getBackgroundColor();
X.tint(V);
W.add(X);
}else{delete this.__bX;
this._applyBackgroundColor(this.getBackgroundColor());
}if(T&&!U&&V){this.getContainerElement().setStyle(eO,null);
}if(this.__ce(U,T)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(T){var ba=this.getBounds();

if(ba){X.resize(ba.width,ba.height);
this.__ca&&
this.__ca.setStyles({width:ba.width+fs,height:ba.height+fs});
}}},_applyShadow:function(cg,ch){var co=qx.ui.core.Widget.__bW;
var cj=this.getContainerElement();
if(ch){cj.remove(this.__bY);
co.poolDecorator(this.__bY);
}if(cg){var cl=this.__bY=co.getDecoratorElement(cg);
cj.add(cl);
var cn=cl.getInsets();
cl.setStyles({left:(-cn.left)+fs,top:(-cn.top)+fs});
var cm=this.getBounds();

if(cm){var ck=cm.width+cn.left+cn.right;
var ci=cm.height+cn.top+cn.bottom;
cl.resize(ck,ci);
}cl.tint(null);
}else{delete this.__bY;
}},_applyToolTipText:function(bk,bl){if(qx.core.Variant.isSet(fC,fm)){if(this.__cc){return;
}var bm=qx.locale.Manager.getInstance();
this.__cc=bm.addListener(eX,function(){if(bk&&bk.translate){this.setToolTipText(bk.translate());
}},this);
}},_applyTextColor:function(gz,gA){},_applyZIndex:function(bT,bU){this.getContainerElement().setStyle(fg,bT==null?0:bT);
},_applyVisibility:function(bp,bq){var br=this.getContainerElement();

if(bp===fo){br.show();
}else{br.hide();
}var parent=this.$$parent;

if(parent&&(bq==null||bp==null||bq===fk||bp===fk)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(gs,gt){this.getContainerElement().setStyle(fi,gs==1?null:gs);
if(qx.core.Variant.isSet(fx,eL)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var gu=(gs==1||gs==null)?null:0.99;
this.getContentElement().setStyle(fi,gu);
}}},_applyCursor:function(bz,bA){if(bz==null&&!this.isSelectable()){bz=fh;
}this.getContainerElement().setStyle(ew,bz,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(q,r){var s=this.getBackgroundColor();
var u=this.getContainerElement();

if(this.__bX){this.__bX.tint(s);
u.setStyle(eO,null);
}else{var t=qx.theme.manager.Color.getInstance().resolve(s);
u.setStyle(eO,t);
}},_applyFont:function(bs,bt){},__cl:null,$$stateChanges:null,_forwardStates:null,hasState:function(cp){var cq=this.__cl;
return cq&&cq[cp];
},addState:function(bc){var bd=this.__cl;

if(!bd){bd=this.__cl={};
}
if(bd[bc]){return;
}this.__cl[bc]=true;
if(bc===fz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bg=this.__co;

if(forward&&forward[bc]&&bg){var be;

for(var bf in bg){be=bg[bf];

if(be instanceof qx.ui.core.Widget){bg[bf].addState(bc);
}}}},removeState:function(cv){var cw=this.__cl;

if(!cw||!cw[cv]){return;
}delete this.__cl[cv];
if(cv===fz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cz=this.__co;

if(forward&&forward[cv]&&cz){for(var cy in cz){var cx=cz[cy];

if(cx instanceof qx.ui.core.Widget){cx.removeState(cv);
}}}},replaceState:function(c,d){var f=this.__cl;

if(!f){f=this.__cl={};
}
if(!f[d]){f[d]=true;
}
if(f[c]){delete f[c];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var j=this.__co;

if(forward&&forward[d]&&j){for(var h in j){var g=j[h];

if(g instanceof qx.ui.core.Widget){g.replaceState(c,d);
}}}},__cm:null,__cn:null,syncAppearance:function(){var dv=this.__cl;
var du=this.__cm;
var dw=qx.theme.manager.Appearance.getInstance();
var ds=qx.core.Property.$$method.setThemed;
var dA=qx.core.Property.$$method.resetThemed;
if(this.__cn){delete this.__cn;
if(du){var dr=dw.styleFrom(du,dv,null,this.getAppearance());
if(dr){du=null;
}}}if(!du){var dt=this;
var dz=[];

do{dz.push(dt.$$subcontrol||dt.getAppearance());
}while(dt=dt.$$subparent);
du=this.__cm=dz.reverse().join(eB).replace(/#[0-9]+/g,eC);
}var dx=dw.styleFrom(du,dv,null,this.getAppearance());

if(dx){var dy;

if(dr){for(var dy in dr){if(dx[dy]===undefined){this[dA[dy]]();
}}}{};
for(var dy in dx){dx[dy]===undefined?this[dA[dy]]():this[ds[dy]](dx[dy]);
}}else if(dr){for(var dy in dr){this[dA[dy]]();
}}this.fireDataEvent(fL,this.__cl);
},_applyAppearance:function(gB,gC){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__cb){qx.ui.core.queue.Appearance.add(this);
this.__cb=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__cn=true;
qx.ui.core.queue.Appearance.add(this);
var cf=this.__co;

if(cf){var cd;

for(var ce in cf){cd=cf[ce];

if(cd instanceof qx.ui.core.Widget){cd.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var bH=this;

while(bH.getAnonymous()){bH=bH.getLayoutParent();

if(!bH){return null;
}}return bH;
},getFocusTarget:function(){var bV=this;

if(!bV.getEnabled()){return null;
}
while(bV.getAnonymous()||!bV.getFocusable()){bV=bV.getLayoutParent();

if(!bV||!bV.getEnabled()){return null;
}}return bV;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gk,gl){var gm=this.getFocusElement();
if(gk){var gn=this.getTabIndex();

if(gn==null){gn=1;
}gm.setAttribute(eP,gn);
if(qx.core.Variant.isSet(fx,eL)){gm.setAttribute(dS,eb);
}else{gm.setStyle(dT,dR);
}}else{if(gm.isNativelyFocusable()){gm.setAttribute(eP,-1);
}else if(gl){gm.setAttribute(eP,null);
}}},_applyKeepFocus:function(gv){var gw=this.getFocusElement();
gw.setAttribute(eW,gv?fm:null);
},_applyKeepActive:function(gU){var gV=this.getContainerElement();
gV.setAttribute(eH,gU?fm:null);
},_applyTabIndex:function(cV){if(cV==null){cV=1;
}else if(cV<1||cV>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&cV!=null){this.getFocusElement().setAttribute(eP,cV);
}},_applySelectable:function(bu){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(bu);
this.getContentElement().setSelectable(bu);
},_applyEnabled:function(gQ,gR){if(gQ===false){this.addState(ft);
this.removeState(fz);
if(this.isFocusable()){this.removeState(eN);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(ft);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gS,gT,name){},_applyContextMenu:function(gO,gP){if(gP){gP.removeState(eR);

if(gP.getOpener()==this){gP.resetOpener();
}
if(!gO){this.removeListener(eR,this._onContextMenuOpen);
gP.removeListener(eM,this._onBeforeContextMenuOpen,this);
}}
if(gO){gO.setOpener(this);
gO.addState(eR);

if(!gP){this.addListener(eR,this._onContextMenuOpen);
gO.addListener(eM,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==fo&&this.hasListener(dB)){this.fireDataEvent(dB,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(cE,cF){if(!this.isEnabled()&&cE===true){cE=false;
}qx.ui.core.DragDropCursor.getInstance();
if(cE){this.addListener(fB,this._onDragStart);
this.addListener(fv,this._onDrag);
this.addListener(fb,this._onDragEnd);
this.addListener(fc,this._onDragChange);
}else{this.removeListener(fB,this._onDragStart);
this.removeListener(fv,this._onDrag);
this.removeListener(fb,this._onDragEnd);
this.removeListener(fc,this._onDragChange);
}this.getContainerElement().setAttribute(fM,cE?fm:null);
},_applyDroppable:function(v,w){if(!this.isEnabled()&&v===true){v=false;
}this.getContainerElement().setAttribute(ex,v?fm:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(fh);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var D=qx.ui.core.DragDropCursor.getInstance();
var E=e.getCurrentAction();
E?D.setAction(E):D.resetAction();
},visualizeFocus:function(){this.addState(eN);
},visualizeBlur:function(){this.removeState(eN);
},scrollChildIntoView:function(cY,da,db,dc){this.scrollChildIntoViewX(cY,da,dc);
this.scrollChildIntoViewY(cY,db,dc);
},scrollChildIntoViewX:function(go,gp,gq){this.getContentElement().scrollChildIntoViewX(go.getContainerElement(),gp,gq);
},scrollChildIntoViewY:function(cQ,cR,cS){this.getContentElement().scrollChildIntoViewY(cQ.getContainerElement(),cR,cS);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(df){if(!this.__co){return false;
}return !!this.__co[df];
},__co:null,_getCreatedChildControls:function(){return this.__co;
},getChildControl:function(k,m){if(!this.__co){if(m){return null;
}this.__co={};
}var n=this.__co[k];

if(n){return n;
}
if(m===true){return null;
}return this._createChildControl(k);
},_showChildControl:function(o){var p=this.getChildControl(o);
p.show();
return p;
},_excludeChildControl:function(bC){var bD=this.getChildControl(bC,true);

if(bD){bD.exclude();
}},_isChildControlVisible:function(cH){var cI=this.getChildControl(cH,true);

if(cI){return cI.isVisible();
}return false;
},_createChildControl:function(gJ){if(!this.__co){this.__co={};
}else if(this.__co[gJ]){throw new Error("Child control '"+gJ+"' already created!");
}var gN=gJ.indexOf(ei);

if(gN==-1){var gK=this._createChildControlImpl(gJ);
}else{var gK=this._createChildControlImpl(gJ.substring(0,gN));
}
if(!gK){throw new Error("Unsupported control: "+gJ);
}gK.$$subcontrol=gJ;
gK.$$subparent=this;
var gL=this.__cl;
var forward=this._forwardStates;

if(gL&&forward&&gK instanceof qx.ui.core.Widget){for(var gM in gL){if(forward[gM]){gK.addState(gM);
}}}this.fireDataEvent(dI,gK);
return this.__co[gJ]=gK;
},_createChildControlImpl:function(cJ){return null;
},_disposeChildControls:function(){var cD=this.__co;

if(!cD){return;
}var cB=qx.ui.core.Widget;

for(var cC in cD){var cA=cD[cC];

if(!cB.contains(this,cA)){cA.destroy();
}else{cA.dispose();
}}delete this.__co;
},_findTopControl:function(){var cu=this;

while(cu){if(!cu.$$subparent){return cu;
}cu=cu.$$subparent;
}return null;
},getContainerLocation:function(gG){var gH=this.getContainerElement().getDomElement();
return gH?qx.bom.element.Location.get(gH,gG):null;
},getContentLocation:function(fO){var fP=this.getContentElement().getDomElement();
return fP?qx.bom.element.Location.get(fP,fO):null;
},setDomLeft:function(cO){var cP=this.getContainerElement().getDomElement();

if(cP){cP.style.left=cO+fs;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gi){var gj=this.getContainerElement().getDomElement();

if(gj){gj.style.top=gi+fs;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(B,top){var C=this.getContainerElement().getDomElement();

if(C){C.style.left=B+fs;
C.style.top=top+fs;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var dd=arguments.callee.base.call(this);

if(this.getChildren){var de=this.getChildren();

for(var i=0,l=de.length;i<l;i++){dd.add(de[i].clone());
}}return dd;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fC,fm)){if(this.__cc){qx.locale.Manager.getInstance().removeListenerById(this.__cc);
}}this.getContainerElement().setAttribute(ff,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var cc=qx.ui.core.Widget;
var cb=this.getContainerElement();

if(this.__bX){cb.remove(this.__bX);
cc.__bV.poolDecorator(this.__bX);
}
if(this.__bY){cb.remove(this.__bY);
cc.__bW.poolDecorator(this.__bY);
}this.clearSeparators();
this.__bX=this.__bY=this.__cf=null;
}else{this._disposeArray(ed);
this._disposeObjects(dH,dJ);
}this._disposeArray(dW);
this.__cl=this.__co=null;
this._disposeObjects(dU,dL,fJ,ef);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){arguments.callee.base.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(b,qx.event.type.Data,[h]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var j="keep-align",i="interval",h="Integer",g="direct",f="best-fit",e="mouse",d="bottom-left",c="disappear",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[g,j,f],init:j,themeable:true},placementModeY:{check:[g,j,f],init:j,themeable:true},offsetLeft:{check:h,init:0,themeable:true},offsetTop:{check:h,init:0,themeable:true},offsetRight:{check:h,init:0,themeable:true},offsetBottom:{check:h,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__hR:null,getLayoutLocation:function(K){var N,M,O,top;
M=K.getBounds();
O=M.left;
top=M.top;
var P=M;
K=K.getLayoutParent();

while(K&&!K.isRootWidget()){M=K.getBounds();
O+=M.left;
top+=M.top;
N=K.getInsets();
O+=N.left;
top+=N.top;
K=K.getLayoutParent();
}if(K.isRootWidget()){var L=K.getContainerLocation();

if(L){O+=L.left;
top+=L.top;
}}return {left:O,top:top,right:O+P.width,bottom:top+P.height};
},moveTo:function(E,top){if(this.getDomMove()){this.setDomPosition(E,top);
}else{this.setLayoutProperties({left:E,top:top});
}},placeToWidget:function(y,z){if(z){this.__hR=qx.lang.Function.bind(this.placeToWidget,this,y,false);
qx.event.Idle.getInstance().addListener(i,this.__hR);
this.addListener(c,function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(i,this.__hR);
this.__hR=null;
}},this);
}var A=y.getContainerLocation()||this.getLayoutLocation(y);
this.__hT(A);
},placeToMouse:function(event){var X=event.getDocumentLeft();
var top=event.getDocumentTop();
var W={left:X,top:top,right:X,bottom:top};
this.__hT(W);
},placeToElement:function(H,I){var location=qx.bom.element.Location.get(H);
var J={left:location.left,top:location.top,right:location.left+H.offsetWidth,bottom:location.top+H.offsetHeight};
if(I){this.__hR=qx.lang.Function.bind(this.placeToElement,this,H,false);
qx.event.Idle.getInstance().addListener(i,this.__hR);
this.addListener(c,function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(i,this.__hR);
this.__hR=null;
}},this);
}this.__hT(J);
},placeToPoint:function(S){var T={left:S.left,top:S.top,right:S.left,bottom:S.top};
this.__hT(T);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hS:function(Q){var R=null;

if(this._computePlacementSize){var R=this._computePlacementSize();
}else if(this.isVisible()){var R=this.getBounds();
}
if(R==null){this.addListenerOnce(q,function(){this.__hS(Q);
},this);
}else{Q.call(this,R);
}},__hT:function(D){this.__hS(function(F){var G=qx.util.placement.Placement.compute(F,this.getLayoutParent().getBounds(),D,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(G.left,G.top);
});
},setSmart:function(B){{};
var C=B?j:g;
this.set({placementModeX:C,placementModeY:C});
},getSmart:function(){{};
var U=this.getPlacementModeX()==j?true:false;
var V=this.getPlacementModeY()==j?true:false;
return U&&V;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(i,this.__hR);
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
qx.Class.define(j,{extend:qx.ui.popup.Popup,construct:function(r,s){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(n);
if(r!=null){this.setLabel(r);
}
if(s!=null){this.setIcon(s);
}this.addListener(f,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:h},showTimeout:{check:m,init:700,themeable:true},hideTimeout:{check:m,init:4000,themeable:true},label:{check:l,nullable:true,apply:c},icon:{check:l,nullable:true,apply:i,themeable:true},rich:{check:d,init:false,apply:k},opener:{check:g,nullable:true}},members:{_createChildControlImpl:function(a){var b;

switch(a){case n:b=new qx.ui.basic.Atom;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(t,u){var v=this.getChildControl(n);
t==null?v.resetIcon:v.setIcon(t);
},_applyLabel:function(w,x){var y=this.getChildControl(n);
w==null?y.resetLabel():y.setLabel(w);
},_applyRich:function(o,p){var q=this.getChildControl(n);
q.setRich(o);
}}});
})();
(function(){var c="qx.ui.core.queue.Layout",b="layout";
qx.Class.define(c,{statics:{__df:{},remove:function(a){delete this.__df[a.$$hash];
},add:function(q){this.__df[q.$$hash]=q;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var r=this.__di();
for(var i=r.length-1;i>=0;i--){var s=r[i];
if(s.hasValidLayout()){continue;
}if(s.isRootWidget()&&!s.hasUserBounds()){var u=s.getSizeHint();
s.renderLayout(0,0,u.width,u.height);
}else{var t=s.getBounds();
s.renderLayout(t.left,t.top,t.width,t.height);
}}},getNestingLevel:function(d){var e=this.__dh;
var g=0;
var parent=d;
while(true){if(e[parent.$$hash]!=null){g+=e[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
g+=1;
}var f=g;

while(d&&d!==parent){e[d.$$hash]=f--;
d=d.$$parent;
}return g;
},__dg:function(){var A=qx.ui.core.queue.Visibility;
this.__dh={};
var z=[];
var y=this.__df;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__di:function(){var l=[];
var n=this.__dg();

for(var k=n.length-1;k>=0;k--){if(!n[k]){continue;
}
for(var j in n[k]){var h=n[k][j];
if(k==0||h.isRootWidget()||h.hasUserBounds()){l.push(h);
h.invalidateLayoutCache();
continue;
}var p=h.getSizeHint(false);

if(p){h.invalidateLayoutCache();
var m=h.getSizeHint();
var o=(!h.getBounds()||p.minWidth!==m.minWidth||p.width!==m.width||p.maxWidth!==m.maxWidth||p.minHeight!==m.minHeight||p.height!==m.height||p.maxHeight!==m.maxHeight);
}else{o=true;
}
if(o){var parent=h.getLayoutParent();

if(!n[k-1]){n[k-1]={};
}n[k-1][parent.$$hash]=parent;
}else{l.push(h);
}}}return l;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__dj=g;
this.__dk=g.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dj:null,__dk:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__dj=this.__dk=null;
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__dl={};
this.__dm=qx.lang.Function.bind(this.__dq,this);
this.__dn=false;
},members:{__do:null,__dp:null,__dl:null,__dn:null,__dm:null,schedule:function(g){if(this.__do==null){this.__do=window.setTimeout(this.__dm,0);
}var h=g.toHashCode();
if(this.__dp&&this.__dp[h]){return;
}this.__dl[h]=g;
this.__dn=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__dp&&this.__dp[f]){this.__dp[f]=null;
return;
}delete this.__dl[f];
if(qx.lang.Object.isEmpty(this.__dl)&&this.__do!=null){window.clearTimeout(this.__do);
this.__do=null;
}},__dq:qx.event.GlobalError.observeMethod(function(){this.__do=null;
while(this.__dn){this.__dp=qx.lang.Object.clone(this.__dl);
this.__dl={};
this.__dn=false;

for(var d in this.__dp){var c=this.__dp[d];

if(c){this.__dp[d]=null;
c.call();
}}}this.__dp=null;
})},destruct:function(){if(this.__do!=null){window.clearTimeout(this.__do);
}this.__dm=this.__dl=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){arguments.callee.base.call(this);
this.__dr=d;
this.__ds=e||null;
this.__dt=qx.util.DeferredCallManager.getInstance();
},members:{__dr:null,__ds:null,__dt:null,cancel:function(){this.__dt.cancel(this);
},schedule:function(){this.__dt.schedule(this);
},call:function(){this.__ds?this.__dr.apply(this.__ds):this.__dr();
}},destruct:function(b,c){this.cancel();
this.__ds=this.__dr=this.__dt=null;
}});
})();
(function(){var C="element",B="qx.client",A="div",z="",w="mshtml",v="none",u="scroll",t="text",s="qx.html.Element",r="|capture|",W="focus",V="gecko",U="blur",T="deactivate",S="capture",R="userSelect",Q="-moz-none",P="visible",O="releaseCapture",N="|bubble|",J="qxSelectable",K="tabIndex",H="off",I="activate",F="MozUserSelect",G="normal",D="webkit",E="__dQ",L="hidden",M="on";
qx.Class.define(s,{extend:qx.core.Object,construct:function(bd){arguments.callee.base.call(this);
this.__du=bd||A;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dv:{},_scheduleFlush:function(cP){qx.html.Element.__ed.schedule();
},flush:function(){var dQ;
{};
var dI=this.__dw();
var dH=dI.getFocus();

if(dH&&this.__dA(dH)){dI.blur(dH);
}var dX=dI.getActive();

if(dX&&this.__dA(dX)){qx.bom.Element.deactivate(dX);
}var dL=this.__dy();

if(dL&&this.__dA(dL)){qx.bom.Element.releaseCapture(dL);
}var dR=[];
var dS=this._modified;

for(var dP in dS){dQ=dS[dP];
if(dQ.__dU()){if(dQ.__dB&&qx.dom.Hierarchy.isRendered(dQ.__dB)){dR.push(dQ);
}else{{};
dQ.__dT();
}delete dS[dP];
}}
for(var i=0,l=dR.length;i<l;i++){dQ=dR[i];
{};
dQ.__dT();
}var dN=this._visibility;

for(var dP in dN){dQ=dN[dP];
{};
if(!dQ.$$disposed){dQ.__dB.style.display=dQ.__dE?z:v;
if(qx.core.Variant.isSet(B,w)){if(!(document.documentMode>=8)){dQ.__dB.style.visibility=dQ.__dE?P:L;
}}}delete dN[dP];
}var scroll=this._scroll;

for(var dP in scroll){dQ=scroll[dP];
var dY=dQ.__dB;

if(dY&&dY.offsetWidth){var dK=true;
if(dQ.__dH!=null){dQ.__dB.scrollLeft=dQ.__dH;
delete dQ.__dH;
}if(dQ.__dI!=null){dQ.__dB.scrollTop=dQ.__dI;
delete dQ.__dI;
}var dU=dQ.__dF;

if(dU!=null){var dO=dU.element.getDomElement();

if(dO&&dO.offsetWidth){qx.bom.element.Scroll.intoViewX(dO,dY,dU.align);
delete dQ.__dF;
}else{dK=false;
}}var dV=dQ.__dG;

if(dV!=null){var dO=dV.element.getDomElement();

if(dO&&dO.offsetWidth){qx.bom.element.Scroll.intoViewY(dO,dY,dV.align);
delete dQ.__dG;
}else{dK=false;
}}if(dK){delete scroll[dP];
}}}var dJ={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dW=this._actions[i];
var dT=dW.element.__dB;

if(!dT||!dJ[dW.type]&&!dW.element.__dU()){continue;
}var dM=dW.args;
dM.unshift(dT);
qx.bom.Element[dW.type].apply(qx.bom.Element,dM);
}this._actions=[];
for(var dP in this.__dv){var dG=this.__dv[dP];
var dY=dG.element.__dB;

if(dY){qx.bom.Selection.set(dY,dG.start,dG.end);
delete this.__dv[dP];
}}qx.event.handler.Appear.refresh();
},__dw:function(){if(!this.__dx){var p=qx.event.Registration.getManager(window);
this.__dx=p.getHandler(qx.event.handler.Focus);
}return this.__dx;
},__dy:function(){if(!this.__dz){var bv=qx.event.Registration.getManager(window);
this.__dz=bv.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dz.getCaptureElement();
},__dA:function(bR){var bS=qx.core.ObjectRegistry.fromHashCode(bR.$$element);
return bS&&!bS.__dU();
}},members:{__du:null,__dB:null,__dC:false,__dD:true,__dE:true,__dF:null,__dG:null,__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,_scheduleChildrenUpdate:function(){if(this.__dR){return;
}this.__dR=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
},_createDomElement:function(){return qx.bom.Element.create(this.__du);
},__dT:function(){{};
var ci=this.__dQ;

if(ci){var length=ci.length;
var cj;

for(var i=0;i<length;i++){cj=ci[i];

if(cj.__dE&&cj.__dD&&!cj.__dB){cj.__dT();
}}}
if(!this.__dB){this.__dB=this._createDomElement();
this.__dB.$$element=this.$$hash;
this._copyData(false);

if(ci&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dR){this._syncChildren();
}}delete this.__dR;
},_insertChildren:function(){var bI=this.__dQ;
var length=bI.length;
var bK;

if(length>2){var bJ=document.createDocumentFragment();

for(var i=0;i<length;i++){bK=bI[i];

if(bK.__dB&&bK.__dD){bJ.appendChild(bK.__dB);
}}this.__dB.appendChild(bJ);
}else{var bJ=this.__dB;

for(var i=0;i<length;i++){bK=bI[i];

if(bK.__dB&&bK.__dD){bJ.appendChild(bK.__dB);
}}}},_syncChildren:function(){var de;
var dj=qx.core.ObjectRegistry;
var cY=this.__dQ;
var dh=cY.length;
var da;
var df;
var dd=this.__dB;
var dg=dd.childNodes;
var dc=0;
var di;
{};
for(var i=dg.length-1;i>=0;i--){di=dg[i];
df=dj.fromHashCode(di.$$element);

if(!df||!df.__dD||df.__dS!==this){dd.removeChild(di);
{};
}}for(var i=0;i<dh;i++){da=cY[i];
if(da.__dD){df=da.__dB;
di=dg[dc];

if(!df){continue;
}if(df!=di){if(di){dd.insertBefore(df,di);
}else{dd.appendChild(df);
}{};
}dc++;
}}{};
},_copyData:function(dy){var dC=this.__dB;
var dB=this.__dN;

if(dB){var dz=qx.bom.element.Attribute;

for(var dD in dB){dz.set(dC,dD,dB[dD]);
}}var dB=this.__dM;

if(dB){var dA=qx.bom.element.Style;

if(dy){dA.setStyles(dC,dB);
}else{dA.setCss(dC,dA.compile(dB));
}}var dB=this.__dO;

if(dB){for(var dD in dB){this._applyProperty(dD,dB[dD]);
}}var dB=this.__dP;

if(dB){qx.event.Registration.getManager(dC).importListeners(dC,dB);
delete this.__dP;
}},_syncData:function(){var cH=this.__dB;
var cG=qx.bom.element.Attribute;
var cE=qx.bom.element.Style;
var cF=this.__dK;

if(cF){var cK=this.__dN;

if(cK){var cI;

for(var cJ in cF){cI=cK[cJ];

if(cI!==undefined){cG.set(cH,cJ,cI);
}else{cG.reset(cH,cJ);
}}}this.__dK=null;
}var cF=this.__dJ;

if(cF){var cK=this.__dM;

if(cK){var cD={};

for(var cJ in cF){cD[cJ]=cK[cJ];
}cE.setStyles(cH,cD);
}this.__dJ=null;
}var cF=this.__dL;

if(cF){var cK=this.__dO;

if(cK){var cI;

for(var cJ in cF){this._applyProperty(cJ,cK[cJ]);
}}this.__dL=null;
}},__dU:function(){var ds=this;
while(ds){if(ds.__dC){return true;
}
if(!ds.__dD||!ds.__dE){return false;
}ds=ds.__dS;
}return false;
},__dV:function(cS){if(cS.__dS===this){throw new Error("Child is already in: "+cS);
}
if(cS.__dC){throw new Error("Root elements could not be inserted into other ones.");
}if(cS.__dS){cS.__dS.remove(cS);
}cS.__dS=this;
if(!this.__dQ){this.__dQ=[];
}if(this.__dB){this._scheduleChildrenUpdate();
}},__dW:function(q){if(q.__dS!==this){throw new Error("Has no child: "+q);
}if(this.__dB){this._scheduleChildrenUpdate();
}delete q.__dS;
},__dX:function(h){if(h.__dS!==this){throw new Error("Has no child: "+h);
}if(this.__dB){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dQ||null;
},getChild:function(bq){var br=this.__dQ;
return br&&br[bq]||null;
},hasChildren:function(){var bQ=this.__dQ;
return bQ&&bQ[0]!==undefined;
},indexOf:function(d){var f=this.__dQ;
return f?f.indexOf(d):-1;
},hasChild:function(ct){var cu=this.__dQ;
return cu&&cu.indexOf(ct)!==-1;
},add:function(ch){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dV(arguments[i]);
}this.__dQ.push.apply(this.__dQ,arguments);
}else{this.__dV(ch);
this.__dQ.push(ch);
}return this;
},addAt:function(cQ,cR){this.__dV(cQ);
qx.lang.Array.insertAt(this.__dQ,cQ,cR);
return this;
},remove:function(bT){var bU=this.__dQ;

if(!bU){return;
}
if(arguments[1]){var bV;

for(var i=0,l=arguments.length;i<l;i++){bV=arguments[i];
this.__dW(bV);
qx.lang.Array.remove(bU,bV);
}}else{this.__dW(bT);
qx.lang.Array.remove(bU,bT);
}return this;
},removeAt:function(co){var cp=this.__dQ;

if(!cp){throw new Error("Has no children!");
}var cq=cp[co];

if(!cq){throw new Error("Has no child at this position!");
}this.__dW(cq);
qx.lang.Array.removeAt(this.__dQ,co);
return this;
},removeAll:function(){var bw=this.__dQ;

if(bw){for(var i=0,l=bw.length;i<l;i++){this.__dW(bw[i]);
}bw.length=0;
}return this;
},getParent:function(){return this.__dS||null;
},insertInto:function(parent,g){parent.__dV(this);

if(g==null){parent.__dQ.push(this);
}else{qx.lang.Array.insertAt(this.__dQ,this,g);
}return this;
},insertBefore:function(bz){var parent=bz.__dS;
parent.__dV(this);
qx.lang.Array.insertBefore(parent.__dQ,this,bz);
return this;
},insertAfter:function(be){var parent=be.__dS;
parent.__dV(this);
qx.lang.Array.insertAfter(parent.__dQ,this,be);
return this;
},moveTo:function(du){var parent=this.__dS;
parent.__dX(this);
var dv=parent.__dQ.indexOf(this);

if(dv===du){throw new Error("Could not move to same index!");
}else if(dv<du){du--;
}qx.lang.Array.removeAt(parent.__dQ,dv);
qx.lang.Array.insertAt(parent.__dQ,this,du);
return this;
},moveBefore:function(dt){var parent=this.__dS;
return this.moveTo(parent.__dQ.indexOf(dt));
},moveAfter:function(bp){var parent=this.__dS;
return this.moveTo(parent.__dQ.indexOf(bp)+1);
},free:function(){var parent=this.__dS;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dQ){return;
}parent.__dW(this);
qx.lang.Array.remove(parent.__dQ,this);
return this;
},getDomElement:function(){return this.__dB||null;
},getNodeName:function(){return this.__du;
},setNodeName:function(name){this.__du=name;
},setRoot:function(cT){this.__dC=cT;
},useMarkup:function(cr){if(this.__dB){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(B,w)){var cs=document.createElement(A);
}else{var cs=qx.html.Element.__dY;

if(!cs){cs=qx.html.Element.__dY=document.createElement(A);
}}cs.innerHTML=cr;
this.__dB=cs.firstChild;
this.__dB.$$element=this.$$hash;
this._copyData(true);
return this.__dB;
},useElement:function(cO){if(this.__dB){throw new Error("Could not overwrite existing element!");
}this.__dB=cO;
this.__dB.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cN=this.getAttribute(K);

if(cN>=1){return true;
}var cM=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cN>=0&&cM[this.__du]){return true;
}return false;
},setSelectable:function(bF){this.setAttribute(J,bF?M:H);
if(qx.core.Variant.isSet(B,D)){this.setStyle(R,bF?G:v);
}else if(qx.core.Variant.isSet(B,V)){this.setStyle(F,bF?t:Q);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__du];
},include:function(){if(this.__dD){return;
}delete this.__dD;

if(this.__dS){this.__dS._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dD){return;
}this.__dD=false;

if(this.__dS){this.__dS._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dD===true;
},show:function(){if(this.__dE){return;
}
if(this.__dB){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}if(this.__dS){this.__dS._scheduleChildrenUpdate();
}delete this.__dE;
},hide:function(){if(!this.__dE){return;
}
if(this.__dB){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}this.__dE=false;
},isVisible:function(){return this.__dE===true;
},scrollChildIntoViewX:function(bW,bX,bY){var ca=this.__dB;
var cb=bW.getDomElement();

if(bY!==false&&ca&&ca.offsetWidth&&cb&&cb.offsetWidth){qx.bom.element.Scroll.intoViewX(cb,ca,bX);
}else{this.__dF={element:bW,align:bX};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__dH;
},scrollChildIntoViewY:function(j,k,m){var n=this.__dB;
var o=j.getDomElement();

if(m!==false&&n&&n.offsetWidth&&o&&o.offsetWidth){qx.bom.element.Scroll.intoViewY(o,n,k);
}else{this.__dG={element:j,align:k};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__dI;
},scrollToX:function(x,cl){var cm=this.__dB;

if(cl!==true&&cm&&cm.offsetWidth){cm.scrollLeft=x;
}else{this.__dH=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__dF;
},getScrollX:function(){var bD=this.__dB;

if(bD){return bD.scrollLeft;
}return this.__dH||0;
},scrollToY:function(y,bb){var bc=this.__dB;

if(bb!==true&&bc&&bc.offsetWidth){bc.scrollTop=y;
}else{this.__dI=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__dG;
},getScrollY:function(){var cv=this.__dB;

if(cv){return cv.scrollTop;
}return this.__dI||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(u,this.__eb,this);
},enableScrolling:function(){this.removeListener(u,this.__eb,this);
},__ea:null,__eb:function(e){if(!this.__ea){this.__ea=true;
this.__dB.scrollTop=0;
this.__dB.scrollLeft=0;
delete this.__ea;
}},getTextSelection:function(){var bG=this.__dB;

if(bG){return qx.bom.Selection.get(bG);
}return null;
},getTextSelectionLength:function(){var bE=this.__dB;

if(bE){return qx.bom.Selection.getLength(bE);
}return null;
},getTextSelectionStart:function(){var dw=this.__dB;

if(dw){return qx.bom.Selection.getStart(dw);
}return null;
},getTextSelectionEnd:function(){var cU=this.__dB;

if(cU){return qx.bom.Selection.getEnd(cU);
}return null;
},setTextSelection:function(dl,dm){var dn=this.__dB;

if(dn){qx.bom.Selection.set(dn,dl,dm);
return;
}qx.html.Element.__dv[this.toHashCode()]={element:this,start:dl,end:dm};
qx.html.Element._scheduleFlush(C);
},clearTextSelection:function(){var dk=this.__dB;

if(dk){qx.bom.Selection.clear(dk);
}delete qx.html.Element.__dv[this.toHashCode()];
},__ec:function(dp,dq){var dr=qx.html.Element._actions;
dr.push({type:dp,element:this,args:dq||[]});
qx.html.Element._scheduleFlush(C);
},focus:function(){this.__ec(W);
},blur:function(){this.__ec(U);
},activate:function(){this.__ec(I);
},deactivate:function(){this.__ec(T);
},capture:function(bH){this.__ec(S,[bH!==false]);
},releaseCapture:function(){this.__ec(O);
},setStyle:function(a,b,c){if(!this.__dM){this.__dM={};
}
if(this.__dM[a]==b){return;
}
if(b==null){delete this.__dM[a];
}else{this.__dM[a]=b;
}if(this.__dB){if(c){qx.bom.element.Style.set(this.__dB,a,b);
return this;
}if(!this.__dJ){this.__dJ={};
}this.__dJ[a]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},setStyles:function(bL,bM){var bN=qx.bom.element.Style;

if(!this.__dM){this.__dM={};
}
if(this.__dB){if(!this.__dJ){this.__dJ={};
}
for(var bP in bL){var bO=bL[bP];

if(this.__dM[bP]==bO){continue;
}
if(bO==null){delete this.__dM[bP];
}else{this.__dM[bP]=bO;
}if(bM){bN.set(this.__dB,bP,bO);
continue;
}this.__dJ[bP]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}else{for(var bP in bL){var bO=bL[bP];

if(this.__dM[bP]==bO){continue;
}
if(bO==null){delete this.__dM[bP];
}else{this.__dM[bP]=bO;
}}}return this;
},removeStyle:function(dE,dF){this.setStyle(dE,null,dF);
},getStyle:function(ck){return this.__dM?this.__dM[ck]:null;
},getAllStyles:function(){return this.__dM||null;
},setAttribute:function(cV,cW,cX){if(!this.__dN){this.__dN={};
}
if(this.__dN[cV]==cW){return;
}
if(cW==null){delete this.__dN[cV];
}else{this.__dN[cV]=cW;
}if(this.__dB){if(cX){qx.bom.element.Attribute.set(this.__dB,cV,cW);
return this;
}if(!this.__dK){this.__dK={};
}this.__dK[cV]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},setAttributes:function(X,Y){for(var ba in X){this.setAttribute(ba,X[ba],Y);
}return this;
},removeAttribute:function(bA,bB){this.setAttribute(bA,null,bB);
},getAttribute:function(dx){return this.__dN?this.__dN[dx]:null;
},_applyProperty:function(name,bl){},_setProperty:function(bm,bn,bo){if(!this.__dO){this.__dO={};
}
if(this.__dO[bm]==bn){return;
}
if(bn==null){delete this.__dO[bm];
}else{this.__dO[bm]=bn;
}if(this.__dB){if(bo){this._applyProperty(bm,bn);
return this;
}if(!this.__dL){this.__dL={};
}this.__dL[bm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},_removeProperty:function(bx,by){this._setProperty(bx,null,by);
},_getProperty:function(bs){var bt=this.__dO;

if(!bt){return null;
}var bu=bt[bs];
return bu==null?null:bu;
},addListener:function(bf,bg,self,bh){var bi;

if(this.$$disposed){return null;
}{};

if(this.__dB){return qx.event.Registration.addListener(this.__dB,bf,bg,self,bh);
}
if(!this.__dP){this.__dP={};
}
if(bh==null){bh=false;
}var bj=qx.event.Manager.getNextUniqueId();
var bk=bf+(bh?r:N)+bj;
this.__dP[bk]={type:bf,listener:bg,self:self,capture:bh,unique:bj};
return bk;
},removeListener:function(cw,cx,self,cy){var cz;

if(this.$$disposed){return null;
}{};

if(this.__dB){qx.event.Registration.removeListener(this.__dB,cw,cx,self,cy);
}else{var cB=this.__dP;
var cA;

if(cy==null){cy=false;
}
for(var cC in cB){cA=cB[cC];
if(cA.listener===cx&&cA.self===self&&cA.capture===cy&&cA.type===cw){delete cB[cC];
break;
}}}return this;
},removeListenerById:function(cn){if(this.$$disposed){return null;
}
if(this.__dB){qx.event.Registration.removeListenerById(this.__dB,cn);
}else{delete this.__dP[cn];
}return this;
},hasListener:function(cc,cd){if(this.$$disposed){return false;
}
if(this.__dB){return qx.event.Registration.hasListener(this.__dB,cc,cd);
}var cf=this.__dP;
var ce;

if(cd==null){cd=false;
}
for(var cg in cf){ce=cf[cg];
if(ce.capture===cd&&ce.type===cc){return true;
}}return false;
}},defer:function(cL){cL.__ed=new qx.util.DeferredCall(cL.flush,cL);
},destruct:function(){var bC=this.__dB;

if(bC){qx.event.Registration.getManager(bC).removeAllListeners(bC);
bC.$$element=z;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dS;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(E);
this.__dN=this.__dM=this.__dP=this.__dO=this.__dK=this.__dJ=this.__dL=this.__dB=this.__dS=this.__dF=this.__dG=null;
}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__ee:false,__ef:{},__eg:0,MAX_RETRIES:10,scheduleFlush:function(c){var self=qx.ui.core.queue.Manager;
self.__ef[c]=true;

if(!self.__ee){self.__ej.schedule();
self.__ee=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__eh){return;
}self.__eh=true;
self.__ej.cancel();
var f=self.__ef;
self.__ei(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
qx.ui.core.queue.Widget.flush();
}
if(f.visibility){delete f.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(f.appearance){delete f.appearance;
qx.ui.core.queue.Appearance.flush();
}if(f.widget||f.visibility||f.appearance){continue;
}
if(f.layout){delete f.layout;
qx.ui.core.queue.Layout.flush();
}if(f.widget||f.visibility||f.appearance||f.layout){continue;
}
if(f.element){delete f.element;
qx.html.Element.flush();
}}},function(){self.__ee=false;
});
self.__ei(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__eh=false;
});
self.__eg=0;
},__ei:function(g,h){var self=qx.ui.core.queue.Manager;

try{g();
}catch(e){{};
self.__ee=false;
self.__eh=false;
self.__eg+=1;

if(self.__eg<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__eg-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{h();
}}},defer:function(d){d.__ej=new qx.util.DeferredCall(d.flush);
qx.html.Element._scheduleFlush=d.scheduleFlush;
qx.event.Registration.addListener(window,a,d.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(x){this._manager=x;
},members:{_getParent:function(u){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
},dispatchEvent:function(c,event,d){var parent=c;
var o=this._manager;
var l,s;
var h;
var n,q;
var p;
var r=[];
l=o.getListeners(c,d,true);
s=o.getListeners(c,d,false);

if(l){r.push(l);
}
if(s){r.push(s);
}var parent=this._getParent(c);
var f=[];
var e=[];
var g=[];
var m=[];
while(parent!=null){l=o.getListeners(parent,d,true);

if(l){g.push(l);
m.push(parent);
}s=o.getListeners(parent,d,false);

if(s){f.push(s);
e.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=g.length-1;i>=0;i--){p=m[i];
event.setCurrentTarget(p);
h=g[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(c);

for(var i=0,t=r.length;i<t;i++){h=r[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||c;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,t=f.length;i<t;i++){p=e[i];
event.setCurrentTarget(p);
h=f[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
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
(function(){var o="keydown",n="qx.client",m="keypress",l="NumLock",k="keyup",j="Enter",i="0",h="9",g="-",f="PageUp",bv="+",bu="PrintScreen",bt="gecko",bs="A",br="Z",bq="Left",bp="F5",bo="Down",bn="Up",bm="F11",v="F6",w="useraction",t="F3",u="keyinput",r="Insert",s="F8",p="End",q="/",D="Delete",E="*",Q="F1",M="F4",Y="Home",T="F2",bi="F12",be="PageDown",I="F7",bl="F9",bk="F10",bj="Right",H="text",K="Escape",L="webkit",O="5",R="3",U="Meta",bb="7",bg="CapsLock",x="input",y="Control",J="Space",X="Tab",W="Shift",V="Pause",bd="Unidentified",bc="qx.event.handler.Keyboard",S="mshtml",ba="mshtml|webkit",c="6",bf="off",z="Apps",A="4",N="Alt",d="2",e="Scroll",G="1",B="8",C="Win",F="autoComplete",P=",",bh="Backspace";
qx.Class.define(bc,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bY){arguments.callee.base.call(this);
this.__ek=bY;
this.__el=bY.getWindow();
if(qx.core.Variant.isSet(n,bt)){this.__em=this.__el;
}else{this.__em=this.__el.document.documentElement;
}this.__en={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cp){if(this._identifierToKeyCodeMap[cp]){return true;
}
if(cp.length!=1){return false;
}
if(cp>=i&&cp<=h){return true;
}
if(cp>=bs&&cp<=br){return true;
}
switch(cp){case bv:case g:case E:case q:return true;
default:return false;
}}},members:{__eo:null,__ek:null,__el:null,__em:null,__en:null,__ep:null,__eq:null,__er:null,canHandleEvent:function(ca,cb){},registerEvent:function(ct,cu,cv){},unregisterEvent:function(bJ,bK,bL){},_fireInputEvent:function(bw,bx){var by=this.__es();
if(by&&by.offsetWidth!=0){var event=qx.event.Registration.createEvent(u,qx.event.type.KeyInput,[bw,by,bx]);
this.__ek.dispatchEvent(by,event);
}if(this.__el){qx.event.Registration.fireEvent(this.__el,w,qx.event.type.Data,[u]);
}},_fireSequenceEvent:function(cH,cI,cJ){var cK=this.__es();
var cL=cH.keyCode;
var event=qx.event.Registration.createEvent(cI,qx.event.type.KeySequence,[cH,cK,cJ]);
this.__ek.dispatchEvent(cK,event);
if(qx.core.Variant.isSet(n,ba)){if(cI==o&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cL)&&!this._emulateKeyPress[cL]){this._fireSequenceEvent(cH,m,cJ);
}}}if(this.__el){qx.event.Registration.fireEvent(this.__el,w,qx.event.type.Data,[cI]);
}},__es:function(){var cw=this.__ek.getHandler(qx.event.handler.Focus);
var cx=cw.getActive();
if(!cx||cx.offsetWidth==0){cx=cw.getFocus();
}if(!cx||cx.offsetWidth==0){cx=this.__ek.getWindow().document.body;
}return cx;
},_initKeyObserver:function(){this.__eo=qx.lang.Function.listener(this.__et,this);
this.__er=qx.lang.Function.listener(this.__ev,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__em,k,this.__eo);
Event.addNativeListener(this.__em,o,this.__eo);
Event.addNativeListener(this.__em,m,this.__er);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__em,k,this.__eo);
Event.removeNativeListener(this.__em,o,this.__eo);
Event.removeNativeListener(this.__em,m,this.__er);

for(var ck in (this.__eq||{})){var cj=this.__eq[ck];
Event.removeNativeListener(cj.target,m,cj.callback);
}delete (this.__eq);
},__et:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(bU){bU=window.event||bU;
var bX=bU.keyCode;
var bV=0;
var bW=bU.type;
if(!(this.__en[bX]==o&&bW==o)){this._idealKeyHandler(bX,bV,bW,bU);
}if(bW==o){if(this._isNonPrintableKeyCode(bX)||this._emulateKeyPress[bX]){this._idealKeyHandler(bX,bV,m,bU);
}}this.__en[bX]=bW;
},"gecko":function(cc){var cg=this._keyCodeFix[cc.keyCode]||cc.keyCode;
var ce=0;
var cf=cc.type;
if(qx.bom.client.Platform.WIN){var cd=cg?this._keyCodeToIdentifier(cg):this._charCodeToIdentifier(ce);

if(!(this.__en[cd]==o&&cf==o)){this._idealKeyHandler(cg,ce,cf,cc);
}this.__en[cd]=cf;
}else{this._idealKeyHandler(cg,ce,cf,cc);
}this.__eu(cc.target,cf,cg);
},"webkit":function(bQ){var bT=0;
var bR=0;
var bS=bQ.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bS==k||bS==o){bT=this._charCode2KeyCode[bQ.charCode]||bQ.keyCode;
}else{if(this._charCode2KeyCode[bQ.charCode]){bT=this._charCode2KeyCode[bQ.charCode];
}else{bR=bQ.charCode;
}}this._idealKeyHandler(bT,bR,bS,bQ);
}else{bT=bQ.keyCode;
if(!(this.__en[bT]==o&&bS==o)){this._idealKeyHandler(bT,bR,bS,bQ);
}if(bS==o){if(this._isNonPrintableKeyCode(bT)||this._emulateKeyPress[bT]){this._idealKeyHandler(bT,bR,m,bQ);
}}this.__en[bT]=bS;
}},"opera":function(cq){this.__ep=cq.keyCode;
this._idealKeyHandler(cq.keyCode,0,cq.type,cq);
}})),__eu:qx.core.Variant.select(n,{"gecko":function(cC,cD,cE){if(cD===o&&(cE==33||cE==34||cE==38||cE==40)&&cC.type==H&&cC.tagName.toLowerCase()===x&&cC.getAttribute(F)!==bf){if(!this.__eq){this.__eq={};
}var cG=qx.core.ObjectRegistry.toHashCode(cC);

if(this.__eq[cG]){return;
}var self=this;
this.__eq[cG]={target:cC,callback:function(cy){qx.bom.Event.stopPropagation(cy);
self.__ev(cy);
}};
var cF=qx.event.GlobalError.observeMethod(this.__eq[cG].callback);
qx.bom.Event.addNativeListener(cC,m,cF);
}},"default":null}),__ev:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(cs){cs=window.event||cs;

if(this._charCode2KeyCode[cs.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cs.keyCode],0,cs.type,cs);
}else{this._idealKeyHandler(0,cs.keyCode,cs.type,cs);
}},"gecko":function(bM){var bP=this._keyCodeFix[bM.keyCode]||bM.keyCode;
var bN=bM.charCode;
var bO=bM.type;
this._idealKeyHandler(bP,bN,bO,bM);
},"webkit":function(bz){if(qx.bom.client.Engine.VERSION<525.13){var bC=0;
var bA=0;
var bB=bz.type;

if(bB==k||bB==o){bC=this._charCode2KeyCode[bz.charCode]||bz.keyCode;
}else{if(this._charCode2KeyCode[bz.charCode]){bC=this._charCode2KeyCode[bz.charCode];
}else{bA=bz.charCode;
}}this._idealKeyHandler(bC,bA,bB,bz);
}else{if(this._charCode2KeyCode[bz.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bz.keyCode],0,bz.type,bz);
}else{this._idealKeyHandler(0,bz.keyCode,bz.type,bz);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__ep){this._idealKeyHandler(0,this.__ep,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(bE,bF,bG,bH){var bI;
if(bE||(!bE&&!bF)){bI=this._keyCodeToIdentifier(bE);
this._fireSequenceEvent(bH,bG,bI);
}else{bI=this._charCodeToIdentifier(bF);
this._fireSequenceEvent(bH,m,bI);
this._fireInputEvent(bH,bF);
}},_specialCharCodeMap:{8:bh,9:X,13:j,27:K,32:J},_emulateKeyPress:qx.core.Variant.select(n,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:W,17:y,18:N,20:bg,224:U,37:bq,38:bn,39:bj,40:bo,33:f,34:be,35:p,36:Y,45:r,46:D,112:Q,113:T,114:t,115:M,116:bp,117:v,118:I,119:s,120:bl,121:bk,122:bm,123:bi,144:l,44:bu,145:e,19:V,91:C,93:z},_numpadToCharCode:{96:i.charCodeAt(0),97:G.charCodeAt(0),98:d.charCodeAt(0),99:R.charCodeAt(0),100:A.charCodeAt(0),101:O.charCodeAt(0),102:c.charCodeAt(0),103:bb.charCodeAt(0),104:B.charCodeAt(0),105:h.charCodeAt(0),106:E.charCodeAt(0),107:bv.charCodeAt(0),109:g.charCodeAt(0),110:P.charCodeAt(0),111:q.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:br.charCodeAt(0),_charCode0:i.charCodeAt(0),_charCode9:h.charCodeAt(0),_isNonPrintableKeyCode:function(bD){return this._keyCodeToIdentifierMap[bD]?true:false;
},_isIdentifiableKeyCode:function(ch){if(ch>=this._charCodeA&&ch<=this._charCodeZ){return true;
}if(ch>=this._charCode0&&ch<=this._charCode9){return true;
}if(this._specialCharCodeMap[ch]){return true;
}if(this._numpadToCharCode[ch]){return true;
}if(this._isNonPrintableKeyCode(ch)){return true;
}return false;
},_keyCodeToIdentifier:function(a){if(this._isIdentifiableKeyCode(a)){var b=this._numpadToCharCode[a];

if(b){return String.fromCharCode(b);
}return (this._keyCodeToIdentifierMap[a]||this._specialCharCodeMap[a]||String.fromCharCode(a));
}else{return bd;
}},_charCodeToIdentifier:function(cr){return this._specialCharCodeMap[cr]||String.fromCharCode(cr).toUpperCase();
},_identifierToKeyCode:function(ci){return qx.event.handler.Keyboard._identifierToKeyCodeMap[ci]||ci.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__ep=this.__ek=this.__el=this.__em=this.__en=null;
},defer:function(cl,cm,cn){qx.event.Registration.addHandler(cl);
if(!cl._identifierToKeyCodeMap){cl._identifierToKeyCodeMap={};

for(var co in cm._keyCodeToIdentifierMap){cl._identifierToKeyCodeMap[cm._keyCodeToIdentifierMap[co]]=parseInt(co,10);
}
for(var co in cm._specialCharCodeMap){cl._identifierToKeyCodeMap[cm._specialCharCodeMap[co]]=parseInt(co,10);
}}
if(qx.core.Variant.isSet(n,S)){cm._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(n,bt)){cm._keyCodeFix={12:cm._identifierToKeyCode(l)};
}else if(qx.core.Variant.isSet(n,L)){if(qx.bom.client.Engine.VERSION<525.13){cm._charCode2KeyCode={63289:cm._identifierToKeyCode(l),63276:cm._identifierToKeyCode(f),63277:cm._identifierToKeyCode(be),63275:cm._identifierToKeyCode(p),63273:cm._identifierToKeyCode(Y),63234:cm._identifierToKeyCode(bq),63232:cm._identifierToKeyCode(bn),63235:cm._identifierToKeyCode(bj),63233:cm._identifierToKeyCode(bo),63272:cm._identifierToKeyCode(D),63302:cm._identifierToKeyCode(r),63236:cm._identifierToKeyCode(Q),63237:cm._identifierToKeyCode(T),63238:cm._identifierToKeyCode(t),63239:cm._identifierToKeyCode(M),63240:cm._identifierToKeyCode(bp),63241:cm._identifierToKeyCode(v),63242:cm._identifierToKeyCode(I),63243:cm._identifierToKeyCode(s),63244:cm._identifierToKeyCode(bl),63245:cm._identifierToKeyCode(bk),63246:cm._identifierToKeyCode(bm),63247:cm._identifierToKeyCode(bi),63248:cm._identifierToKeyCode(bu),3:cm._identifierToKeyCode(j),12:cm._identifierToKeyCode(l),13:cm._identifierToKeyCode(j)};
}else{cm._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var O="qx.client",N="mouseup",M="click",L="mousedown",K="contextmenu",J="mousewheel",I="dblclick",H="mshtml",G="mouseover",F="mouseout",A="DOMMouseScroll",E="mousemove",D="on",z="mshtml|webkit|opera",y="useraction",C="gecko|webkit",B="qx.event.handler.Mouse";
qx.Class.define(B,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(T){arguments.callee.base.call(this);
this.__ez=T;
this.__eA=T.getWindow();
this.__eB=this.__eA.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eC:null,__eD:null,__eE:null,__eF:null,__eG:null,__ez:null,__eA:null,__eB:null,canHandleEvent:function(R,S){},registerEvent:qx.bom.client.System.IPHONE?
function(g,h,i){g[D+h]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(s,t,u){s[D+t]=undefined;
}:qx.lang.Function.returnNull,__eH:function(n,o,p){if(!p){p=n.target||n.srcElement;
}if(p&&p.nodeType){qx.event.Registration.fireEvent(p,o||n.type,o==J?qx.event.type.MouseWheel:qx.event.type.Mouse,[n,p,null,true,true]);
}qx.event.Registration.fireEvent(this.__eA,y,qx.event.type.Data,[o||n.type]);
},_initButtonObserver:function(){this.__eC=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eB,L,this.__eC);
Event.addNativeListener(this.__eB,N,this.__eC);
Event.addNativeListener(this.__eB,M,this.__eC);
Event.addNativeListener(this.__eB,I,this.__eC);
Event.addNativeListener(this.__eB,K,this.__eC);
},_initMoveObserver:function(){this.__eD=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eB,E,this.__eD);
Event.addNativeListener(this.__eB,G,this.__eD);
Event.addNativeListener(this.__eB,F,this.__eD);
},_initWheelObserver:function(){this.__eE=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var v=qx.core.Variant.isSet(O,z)?J:A;
var w=qx.core.Variant.isSet(O,H)?this.__eB:this.__eA;
Event.addNativeListener(w,v,this.__eE);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eB,L,this.__eC);
Event.removeNativeListener(this.__eB,N,this.__eC);
Event.removeNativeListener(this.__eB,M,this.__eC);
Event.removeNativeListener(this.__eB,I,this.__eC);
Event.removeNativeListener(this.__eB,K,this.__eC);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eB,E,this.__eD);
Event.removeNativeListener(this.__eB,G,this.__eD);
Event.removeNativeListener(this.__eB,F,this.__eD);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var q=qx.core.Variant.isSet(O,z)?J:A;
var r=qx.core.Variant.isSet(O,H)?this.__eB:this.__eA;
Event.removeNativeListener(r,q,this.__eE);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(P){this.__eH(P);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(d){var e=d.type;
var f=d.target||d.srcElement;
if(qx.core.Variant.isSet(O,C)){if(f&&f.nodeType==3){f=f.parentNode;
}}
if(this.__eI){this.__eI(d,e,f);
}
if(this.__eK){this.__eK(d,e,f);
}this.__eH(d,e,f);

if(this.__eJ){this.__eJ(d,e,f);
}
if(this.__eL){this.__eL(d,e,f);
}this.__eF=e;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(Q){this.__eH(Q,J);
}),__eI:qx.core.Variant.select(O,{"webkit":function(a,b,c){if(qx.bom.client.Engine.VERSION<530){if(b==K){this.__eH(a,N,c);
}}},"default":null}),__eJ:qx.core.Variant.select(O,{"opera":function(U,V,W){if(V==N&&U.button==2){this.__eH(U,K,W);
}},"default":null}),__eK:qx.core.Variant.select(O,{"mshtml":function(X,Y,ba){if(Y==N&&this.__eF==M){this.__eH(X,L,ba);
}else if(Y==I){this.__eH(X,M,ba);
}},"default":null}),__eL:qx.core.Variant.select(O,{"mshtml":null,"default":function(j,k,l){switch(k){case L:this.__eG=l;
break;
case N:if(l!==this.__eG){var m=qx.dom.Hierarchy.getCommonParent(l,this.__eG);
this.__eH(j,M,m);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__ez=this.__eA=this.__eB=this.__eG=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var c="qx.event.handler.Capture";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var R="alias",Q="copy",P="blur",O="mouseout",N="keydown",M="Ctrl",L="Shift",K="mousemove",J="move",I="mouseover",bi="Alt",bh="keyup",bg="mouseup",bf="dragend",be="on",bd="mousedown",bc="qxDraggable",bb="drag",ba="drop",Y="qxDroppable",W="qx.event.handler.DragDrop",X="droprequest",U="dragstart",V="dragchange",S="dragleave",T="dragover";
qx.Class.define(W,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(F){arguments.callee.base.call(this);
this.__eM=F;
this.__eN=F.getWindow().document.documentElement;
this.__eM.addListener(this.__eN,bd,this._onMouseDown,this);
this.__fa();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:false,__eX:0,__eY:0,canHandleEvent:function(g,h){},registerEvent:function(k,l,m){},unregisterEvent:function(n,o,p){},addType:function(bj){this.__eQ[bj]=true;
},addAction:function(i){this.__eR[i]=true;
},supportsType:function(D){return !!this.__eQ[D];
},supportsAction:function(G){return !!this.__eR[G];
},getData:function(f){if(!this.__fh||!this.__eO){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__eQ[f]){throw new Error("Unsupported data type: "+f+"!");
}
if(!this.__eT[f]){this.__eU=f;
this.__fc(X,this.__eP,this.__eO,false);
}
if(!this.__eT[f]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__eT[f]||null;
},getCurrentAction:function(){return this.__eV;
},addData:function(bk,bl){this.__eT[bk]=bl;
},getCurrentType:function(){return this.__eU;
},__fa:function(){this.__eQ={};
this.__eR={};
this.__eS={};
this.__eT={};
},__fb:function(){if(this.__eP==null){return;
}var C=this.__eR;
var A=this.__eS;
var B=null;

if(this.__fh){if(A.Shift&&A.Ctrl&&C.alias){B=R;
}else if(A.Shift&&A.Alt&&C.copy){B=Q;
}else if(A.Shift&&C.move){B=J;
}else if(A.Alt&&C.alias){B=R;
}else if(A.Ctrl&&C.copy){B=Q;
}else if(C.move){B=J;
}else if(C.copy){B=Q;
}else if(C.alias){B=R;
}}
if(B!=this.__eV){this.__eV=B;
this.__fc(V,this.__eP,this.__eO,false);
}},__fc:function(s,t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(s,qx.event.type.Drag,[v,w]);

if(t!==u){x.setRelatedTarget(u);
}return y.dispatchEvent(t,x);
},__fd:function(a){while(a&&a.nodeType==1){if(a.getAttribute(bc)==be){return a;
}a=a.parentNode;
}return null;
},__fe:function(H){while(H&&H.nodeType==1){if(H.getAttribute(Y)==be){return H;
}H=H.parentNode;
}return null;
},__ff:function(){this.__eP=null;
this.__eM.removeListener(this.__eN,K,this._onMouseMove,this,true);
this.__eM.removeListener(this.__eN,bg,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,P,this._onWindowBlur,this);
this.__fa();
},__fg:function(){if(this.__eW){this.__eM.removeListener(this.__eN,I,this._onMouseOver,this,true);
this.__eM.removeListener(this.__eN,O,this._onMouseOut,this,true);
this.__eM.removeListener(this.__eN,N,this._onKeyDown,this,true);
this.__eM.removeListener(this.__eN,bh,this._onKeyUp,this,true);
this.__fc(bf,this.__eP,this.__eO,false);
this.__eW=false;
}this.__fh=false;
this.__eO=null;
this.__ff();
},__fh:false,_onWindowBlur:function(e){this.__fg();
},_onKeyDown:function(e){var bm=e.getKeyIdentifier();

switch(bm){case bi:case M:case L:if(!this.__eS[bm]){this.__eS[bm]=true;
this.__fb();
}}},_onKeyUp:function(e){var j=e.getKeyIdentifier();

switch(j){case bi:case M:case L:if(this.__eS[j]){this.__eS[j]=false;
this.__fb();
}}},_onMouseDown:function(e){if(this.__eW){return;
}var z=this.__fd(e.getTarget());

if(z){this.__eX=e.getDocumentLeft();
this.__eY=e.getDocumentTop();
this.__eP=z;
this.__eM.addListener(this.__eN,K,this._onMouseMove,this,true);
this.__eM.addListener(this.__eN,bg,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,P,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fh){this.__fc(ba,this.__eO,this.__eP,false,e);
}if(this.__eW){e.stopPropagation();
}this.__fg();
},_onMouseMove:function(e){if(this.__eW){if(!this.__fc(bb,this.__eP,this.__eO,true,e)){this.__fg();
}}else{if(Math.abs(e.getDocumentLeft()-this.__eX)>3||Math.abs(e.getDocumentTop()-this.__eY)>3){if(this.__fc(U,this.__eP,this.__eO,true,e)){this.__eW=true;
this.__eM.addListener(this.__eN,I,this._onMouseOver,this,true);
this.__eM.addListener(this.__eN,O,this._onMouseOut,this,true);
this.__eM.addListener(this.__eN,N,this._onKeyDown,this,true);
this.__eM.addListener(this.__eN,bh,this._onKeyUp,this,true);
var b=this.__eS;
b.Ctrl=e.isCtrlPressed();
b.Shift=e.isShiftPressed();
b.Alt=e.isAltPressed();
this.__fb();
}else{this.__fc(bf,this.__eP,this.__eO,false);
this.__ff();
}}}},_onMouseOver:function(e){var q=e.getTarget();
var r=this.__fe(q);

if(r&&r!=this.__eO){this.__fh=this.__fc(T,r,this.__eP,true,e);
this.__eO=r;
this.__fb();
}},_onMouseOut:function(e){var d=this.__fe(e.getTarget());
var c=this.__fe(e.getRelatedTarget());

if(d&&d!==c&&d==this.__eO){this.__fc(S,this.__eO,c,false,e);
this.__eO=null;
this.__fh=false;
qx.event.Timer.once(this.__fb,this,0);
}}},destruct:function(){this.__eP=this.__eO=this.__eM=this.__eN=this.__eQ=this.__eR=this.__eS=this.__eT=null;
},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var d="-",c="qx.event.handler.Element";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){arguments.callee.base.call(this);
this._manager=s;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(e,f,g){var j=qx.core.ObjectRegistry.toHashCode(e);
var h=j+d+f;
var i=qx.lang.Function.listener(this._onNative,this,h);
qx.bom.Event.addNativeListener(e,f,i);
this._registeredEvents[h]={element:e,type:f,listener:i};
},unregisterEvent:function(t,u,v){var y=this._registeredEvents;

if(!y){return;
}var z=qx.core.ObjectRegistry.toHashCode(t);
var w=z+d+u;
var x=this._registeredEvents[w];
qx.bom.Event.removeNativeListener(t,u,x.listener);
delete this._registeredEvents[w];
},_onNative:qx.event.GlobalError.observeMethod(function(k,l){var n=this._registeredEvents;

if(!n){return;
}var m=n[l];
qx.event.Registration.fireNonBubblingEvent(m.element,m.type,qx.event.type.Native,[k]);
})},destruct:function(){var p;
var q=this._registeredEvents;

for(var r in q){p=q[r];
qx.bom.Event.removeNativeListener(p.element,p.type,p.listener);
}this._manager=this._registeredEvents=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this.__fi=m;
this.__fj={};
qx.event.handler.Appear.__fk[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fk:{},refresh:function(){var k=this.__fk;

for(var l in k){k[l].refresh();
}}},members:{__fi:null,__fj:null,canHandleEvent:function(d,e){},registerEvent:function(s,t,u){var v=qx.core.ObjectRegistry.toHashCode(s)+t;
var w=this.__fj;

if(w&&!w[v]){w[v]=s;
s.$$displayed=s.offsetWidth>0;
}},unregisterEvent:function(f,g,h){var i=qx.core.ObjectRegistry.toHashCode(f)+g;
var j=this.__fj;

if(!j){return;
}
if(j[i]){delete j[i];
}},refresh:function(){var q=this.__fj;
var r;

for(var p in q){r=q[p];
var n=r.offsetWidth>0;

if((!!r.$$displayed)!==n){r.$$displayed=n;
var o=qx.event.Registration.createEvent(n?a:b);
this.__fi.dispatchEvent(r,o);
}}}},destruct:function(){this.__fi=this.__fj=null;
delete qx.event.handler.Appear.__fk[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var p="mshtml",o="",n="qx.client",m=">",k="<",h=" ",g="='",f="qx.bom.Element",e="div",d="' ",c="></";
qx.Class.define(f,{statics:{__fl:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,q,r){if(!r){r=window;
}
if(!name){throw new Error("The tag name is missing!");
}var t=this.__fl;
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
},empty:function(T){return T.innerHTML=o;
},addListener:function(P,Q,R,self,S){return qx.event.Registration.addListener(P,Q,R,self,S);
},removeListener:function(U,V,W,self,X){return qx.event.Registration.removeListener(U,V,W,self,X);
},removeListenerById:function(z,A){return qx.event.Registration.removeListenerById(z,A);
},hasListener:function(Y,ba,bb){return qx.event.Registration.hasListener(Y,ba,bb);
},focus:function(O){qx.event.Registration.getManager(O).getHandler(qx.event.handler.Focus).focus(O);
},blur:function(y){qx.event.Registration.getManager(y).getHandler(qx.event.handler.Focus).blur(y);
},activate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).activate(bc);
},deactivate:function(x){qx.event.Registration.getManager(x).getHandler(qx.event.handler.Focus).deactivate(x);
},capture:function(a,b){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(a,b);
},releaseCapture:function(B){qx.event.Registration.getManager(B).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(B);
},clone:function(C,D){var G;

if(D||(qx.core.Variant.isSet(n,p)&&!qx.xml.Document.isXmlDocument(C))){var K=qx.event.Registration.getManager(C);
var E=qx.dom.Hierarchy.getDescendants(C);
E.push(C);
}if(qx.core.Variant.isSet(n,p)){for(var i=0,l=E.length;i<l;i++){K.toggleAttachedEvents(E[i],false);
}}var G=C.cloneNode(true);
if(qx.core.Variant.isSet(n,p)){for(var i=0,l=E.length;i<l;i++){K.toggleAttachedEvents(E[i],true);
}}if(D===true){var N=qx.dom.Hierarchy.getDescendants(G);
N.push(G);
var F,I,M,H;

for(var i=0,L=E.length;i<L;i++){M=E[i];
F=K.serializeListeners(M);

if(F.length>0){I=N[i];

for(var j=0,J=F.length;j<J;j++){H=F[j];
K.addListener(I,H.type,H.handler,H.self,H.capture);
}}}}return G;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
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
(function(){var S="qx.client",R="blur",Q="focus",P="mousedown",O="on",N="mouseup",M="DOMFocusOut",L="DOMFocusIn",K="selectstart",J="onmousedown",bn="onfocusout",bm="onfocusin",bl="onmouseup",bk="onselectstart",bj="draggesture",bi="qx.event.handler.Focus",bh="_applyFocus",bg="deactivate",bf="textarea",be="_applyActive",ba="input",bb="focusin",X="qxSelectable",Y="tabIndex",V="off",W="activate",T="mshtml",U="focusout",bc="qxKeepFocus",bd="qxKeepActive";
qx.Class.define(bi,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bH){arguments.callee.base.call(this);
this._manager=bH;
this._window=bH.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:be,nullable:true},focus:{apply:bh,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__fm:null,__fn:null,__fo:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,canHandleEvent:function(bq,br){},registerEvent:function(h,i,j){},unregisterEvent:function(C,D,E){},focus:function(I){if(qx.core.Variant.isSet(S,T)){window.setTimeout(function(){try{I.focus();
}catch(bL){}},0);
}else{try{I.focus();
}catch(bG){}}this.setFocus(I);
this.setActive(I);
},activate:function(x){this.setActive(x);
},blur:function(g){try{g.blur();
}catch(l){}
if(this.getActive()===g){this.resetActive();
}
if(this.getFocus()===g){this.resetFocus();
}},deactivate:function(z){if(this.getActive()===z){this.resetActive();
}},tryActivate:function(bo){var bp=this.__fK(bo);

if(bp){this.setActive(bp);
}},__fw:function(bs,bt,bu,bv){var bx=qx.event.Registration;
var bw=bx.createEvent(bu,qx.event.type.Focus,[bs,bt,bv]);
bx.dispatchEvent(bs,bw);
},_windowFocused:true,__fx:function(){if(this._windowFocused){this._windowFocused=false;
this.__fw(this._window,null,R,false);
}},__fy:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fw(this._window,null,Q,false);
}},_initObserver:qx.core.Variant.select(S,{"gecko":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fo=qx.lang.Function.listener(this.__fD,this);
this.__fp=qx.lang.Function.listener(this.__fC,this);
this.__fq=qx.lang.Function.listener(this.__fz,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._window.addEventListener(Q,this.__fo,true);
this._window.addEventListener(R,this.__fp,true);
this._window.addEventListener(bj,this.__fq,true);
},"mshtml":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this.__fr=qx.lang.Function.listener(this.__fH,this);
this._document.attachEvent(J,this.__fm);
this._document.attachEvent(bl,this.__fn);
this._document.attachEvent(bm,this.__fs);
this._document.attachEvent(bn,this.__ft);
this._document.attachEvent(bk,this.__fr);
},"webkit":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this.__fo=qx.lang.Function.listener(this.__fD,this);
this.__fp=qx.lang.Function.listener(this.__fC,this);
this.__fr=qx.lang.Function.listener(this.__fH,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._document.addEventListener(K,this.__fr,false);
this._window.addEventListener(M,this.__ft,true);
this._window.addEventListener(Q,this.__fo,true);
this._window.addEventListener(R,this.__fp,true);
},"opera":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._window.addEventListener(L,this.__fs,true);
this._window.addEventListener(M,this.__ft,true);
}}),_stopObserver:qx.core.Variant.select(S,{"gecko":function(){this._document.removeEventListener(P,this.__fm,true);
this._document.removeEventListener(N,this.__fn,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
this._window.removeEventListener(bj,this.__fq,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,J,this.__fm);
qx.bom.Event.removeNativeListener(this._document,bl,this.__fn);
qx.bom.Event.removeNativeListener(this._document,bm,this.__fs);
qx.bom.Event.removeNativeListener(this._document,bn,this.__ft);
qx.bom.Event.removeNativeListener(this._document,bk,this.__fr);
},"webkit":function(){this._document.removeEventListener(P,this.__fm,true);
this._document.removeEventListener(K,this.__fr,false);
this._window.removeEventListener(L,this.__fs,true);
this._window.removeEventListener(M,this.__ft,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
},"opera":function(){this._document.removeEventListener(P,this.__fm,true);
this._window.removeEventListener(L,this.__fs,true);
this._window.removeEventListener(M,this.__ft,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
}}),__fz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){if(!this.__fL(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){this.__fy();
var n=e.srcElement;
var m=this.__fJ(n);

if(m){this.setFocus(m);
}this.tryActivate(n);
},"opera":function(e){var bC=e.target;

if(bC==this._document||bC==this._window){this.__fy();

if(this.__fu){this.setFocus(this.__fu);
delete this.__fu;
}
if(this.__fv){this.setActive(this.__fv);
delete this.__fv;
}}else{this.setFocus(bC);
this.tryActivate(bC);
if(!this.__fL(bC)){bC.selectionStart=0;
bC.selectionEnd=0;
}}},"default":null})),__fB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){if(!e.toElement){this.__fx();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var F=e.target;

if(F===this.getFocus()){this.resetFocus();
}
if(F===this.getActive()){this.resetActive();
}},"opera":function(e){var by=e.target;

if(by==this._document){this.__fx();
this.__fu=this.getFocus();
this.__fv=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(by===this.getFocus()){this.resetFocus();
}
if(by===this.getActive()){this.resetActive();
}}},"default":null})),__fC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fx();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fx();
this.__fu=this.getFocus();
this.__fv=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){var bE=e.target;

if(bE===this._window||bE===this._document){this.__fy();
bE=this._body;
}this.setFocus(bE);
this.tryActivate(bE);
},"webkit":function(e){var bA=e.target;

if(bA===this._window||bA===this._document){this.__fy();

if(this.__fu){this.setFocus(this.__fu);
delete this.__fu;
}
if(this.__fv){this.setActive(this.__fv);
delete this.__fv;
}}else{this.setFocus(bA);
this.tryActivate(bA);
}},"default":null})),__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){var bB=this.__fJ(e.target);

if(!bB){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var B=e.srcElement;
var A=this.__fJ(B);

if(A){if(!this.__fL(B)){B.unselectable=O;
try{document.selection.empty();
}catch(e){}try{A.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__fL(B)){B.unselectable=O;
}}},"webkit":function(e){var f=e.target;
var d=this.__fJ(f);

if(d){this.setFocus(d);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var w=e.target;
var u=this.__fJ(w);

if(!this.__fL(w)){qx.bom.Event.preventDefault(e);
if(u){var v=this.getFocus();

if(v&&v.selectionEnd){v.selectionStart=0;
v.selectionEnd=0;
v.blur();
}if(u){this.setFocus(u);
}}}else if(u){this.setFocus(u);
}},"default":null})),__fF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){var bz=e.srcElement;

if(bz.unselectable){bz.unselectable=V;
}this.tryActivate(this.__fG(bz));
},"gecko":function(e){var bF=e.target;

while(bF&&bF.offsetWidth===undefined){bF=bF.parentNode;
}
if(bF){this.tryActivate(bF);
}},"webkit|opera":function(e){this.tryActivate(this.__fG(e.target));
},"default":null})),__fG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml|webkit":function(o){var p=this.getFocus();

if(p&&o!=p&&(p.nodeName.toLowerCase()===ba||p.nodeName.toLowerCase()===bf)){o=p;
}return o;
},"default":function(bD){return bD;
}})),__fH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml|webkit":function(e){var y=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__fL(y)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fI:function(a){var b=qx.bom.element.Attribute.get(a,Y);

if(b>=1){return true;
}var c=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(b>=0&&c[a.tagName]){return true;
}return false;
},__fJ:function(k){while(k&&k.nodeType===1){if(k.getAttribute(bc)==O){return null;
}
if(this.__fI(k)){return k;
}k=k.parentNode;
}return this._body;
},__fK:function(q){var r=q;

while(q&&q.nodeType===1){if(q.getAttribute(bd)==O){return null;
}q=q.parentNode;
}return r;
},__fL:function(s){while(s&&s.nodeType===1){var t=s.getAttribute(X);

if(t!=null){return t===O;
}s=s.parentNode;
}return true;
},_applyActive:function(G,H){if(H){this.__fw(H,G,bg,true);
}
if(G){this.__fw(G,H,W,true);
}},_applyFocus:function(bM,bN){if(bN){this.__fw(bN,bM,U,true);
}
if(bM){this.__fw(bM,bN,bb,true);
}if(bN){this.__fw(bN,bM,R,false);
}
if(bM){this.__fw(bM,bN,Q,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fM=null;
},defer:function(bI){qx.event.Registration.addHandler(bI);
var bJ=bI.FOCUSABLE_ELEMENTS;

for(var bK in bJ){bJ[bK.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__fN:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(A){var B=[];
var D=this.__fN.runtime;

for(var C in A){if(!D[C]){B.push(C,t,A[C],y);
}}return B.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(H,name){var J=this.__fN;
var I;
name=J.names[name]||name;
if(J.original[name]){I=H.getAttribute(name,2);
}else if(J.property[name]){I=H[name];

if(typeof J.propertyDefault[name]!==i&&I==J.propertyDefault[name]){if(typeof J.bools[name]===i){return null;
}else{return I;
}}}else{I=H.getAttribute(name);
}if(J.bools[name]){return !!I;
}return I;
},"default":function(K,name){var M=this.__fN;
var L;
name=M.names[name]||name;
if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
}}),set:function(E,name,F){var G=this.__fN;
name=G.names[name]||name;
if(G.bools[name]){F=!!F;
}if(G.property[name]&&(!(E[name]===undefined)||G.qxProperties[name])){if(F==null){if(G.removeableProperties[name]){E.removeAttribute(name);
return;
}else if(typeof G.propertyDefault[name]!==i){F=G.propertyDefault[name];
}}E[name]=F;
}else{if(F===true){E.setAttribute(name,name);
}else if(F===false||F===null){E.removeAttribute(name);
}else{E.setAttribute(name,F);
}}},reset:function(z,name){this.set(z,name,null);
}}});
})();
(function(){var j="left",i="right",h="middle",g="qx.client",f="dblclick",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){arguments.callee.base.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(k,l){var l=arguments.callee.base.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.detail=k.detail;
l.srcElement=k.srcElement;
return l;
},__fO:qx.core.Variant.select(g,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return j;
case c:return i;
default:return this.__fO[this._native.button]||d;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(r);
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
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fP:function(y){var z=navigator.userAgent;
var B=new RegExp(s+y+d);
var C=z.match(B);

if(!C){return;
}var name=C[1].toLowerCase();
var A=C[3];
if(z.match(/Version(\/| )([0-9]+\.[0-9])/)){A=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(z.indexOf(a)!==-1||z.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
A=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=A;
this.VERSION=parseFloat(A,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(G){G.__fP(o);
},"gecko":function(E){E.__fP(k);
},"mshtml":function(F){F.__fP(v);
},"opera":function(D){D.__fP(p);
}})});
})();
(function(){var k="qx.client",j="qx.dom.Hierarchy",i="previousSibling",h="*",g="nextSibling",f="parentNode";
qx.Class.define(j,{statics:{getNodeIndex:function(D){var E=0;

while(D&&(D=D.previousSibling)){E++;
}return E;
},getElementIndex:function(z){var A=0;
var B=qx.dom.Node.ELEMENT;

while(z&&(z=z.previousSibling)){if(z.nodeType==B){A++;
}}return A;
},getNextElementSibling:function(F){while(F&&(F=F.nextSibling)&&!qx.dom.Node.isElement(F)){continue;
}return F||null;
},getPreviousElementSibling:function(L){while(L&&(L=L.previousSibling)&&!qx.dom.Node.isElement(L)){continue;
}return L||null;
},contains:qx.core.Variant.select(k,{"webkit|mshtml|opera":function(w,x){if(qx.dom.Node.isDocument(w)){var y=qx.dom.Node.getDocument(x);
return w&&y==w;
}else if(qx.dom.Node.isDocument(x)){return false;
}else{return w.contains(x);
}},"gecko":function(O,P){return !!(O.compareDocumentPosition(P)&16);
},"default":function(T,U){while(U){if(T==U){return true;
}U=U.parentNode;
}return false;
}}),isRendered:function(u){if(!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
if(v.body.contains){return v.body.contains(u);
}if(v.compareDocumentPosition){return !!(v.compareDocumentPosition(u)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(M,N){return this.contains(N,M);
},getCommonParent:qx.core.Variant.select(k,{"mshtml|opera":function(d,e){if(d===e){return d;
}
while(d&&qx.dom.Node.isElement(d)){if(d.contains(e)){return d;
}d=d.parentNode;
}return null;
},"default":function(l,m){if(l===m){return l;
}var n={};
var q=qx.core.ObjectRegistry;
var p,o;

while(l||m){if(l){p=q.toHashCode(l);

if(n[p]){return n[p];
}n[p]=l;
l=l.parentNode;
}
if(m){o=q.toHashCode(m);

if(n[o]){return n[o];
}n[o]=m;
m=m.parentNode;
}}return null;
}}),getAncestors:function(r){return this._recursivelyCollect(r,f);
},getChildElements:function(a){a=a.firstChild;

if(!a){return [];
}var b=this.getNextSiblings(a);

if(a.nodeType===1){b.unshift(a);
}return b;
},getDescendants:function(c){return qx.lang.Array.fromCollection(c.getElementsByTagName(h));
},getFirstDescendant:function(K){K=K.firstChild;

while(K&&K.nodeType!=1){K=K.nextSibling;
}return K;
},getLastDescendant:function(t){t=t.lastChild;

while(t&&t.nodeType!=1){t=t.previousSibling;
}return t;
},getPreviousSiblings:function(s){return this._recursivelyCollect(s,i);
},getNextSiblings:function(V){return this._recursivelyCollect(V,g);
},_recursivelyCollect:function(H,I){var J=[];

while(H=H[I]){if(H.nodeType==1){J.push(H);
}}return J;
},getSiblings:function(C){return this.getPreviousSiblings(C).reverse().concat(this.getNextSiblings(C));
},isEmpty:function(G){G=G.firstChild;

while(G){if(G.nodeType===qx.dom.Node.ELEMENT||G.nodeType===qx.dom.Node.TEXT){return false;
}G=G.nextSibling;
}return true;
},cleanWhitespace:function(Q){var R=Q.firstChild;

while(R){var S=R.nextSibling;

if(R.nodeType==3&&!/\S/.test(R.nodeValue)){Q.removeChild(R);
}R=S;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(g,h){arguments.callee.base.call(this,true,g);

if(h){this._native=h.getNativeEvent()||null;
this._originalTarget=h.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(c){var d=arguments.callee.base.call(this,c);
d._native=this._native;
return d;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(m);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(j){this.getManager().addType(j);
},addAction:function(o){this.getManager().addAction(o);
},supportsType:function(i){return this.getManager().supportsType(i);
},supportsAction:function(n){return this.getManager().supportsAction(n);
},addData:function(k,l){this.getManager().addData(k,l);
},getData:function(e){return this.getManager().getData(e);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(o,p){arguments.callee.base.call(this,o);
this.__fS=o.getWindow();
this.__fT=p;
o.addListener(this.__fS,f,this.releaseCapture,this);
o.addListener(this.__fS,e,this.releaseCapture,this);
o.addListener(this.__fS,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fT:null,__fU:null,__fV:true,__fS:null,_getParent:function(k){return k.parentNode;
},canDispatchEvent:function(q,event,r){return (this.__fU&&this.__fW[r]);
},dispatchEvent:function(s,event,t){if(t==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fV||!qx.dom.Hierarchy.contains(this.__fU,s)){s=this.__fU;
}arguments.callee.base.call(this,s,event,t);
},__fW:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(l,m){var m=m!==false;

if(this.__fU===l&&this.__fV==m){return;
}
if(this.__fU){this.releaseCapture();
}this.nativeSetCapture(l,m);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(l,h,function(){qx.bom.Event.removeNativeListener(l,h,arguments.callee);
self.releaseCapture();
});
}this.__fV=m;
this.__fU=l;
this.__fT.fireEvent(l,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fU;
},releaseCapture:function(){var u=this.__fU;

if(!u){return;
}this.__fU=null;
this.__fT.fireEvent(u,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(u);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(i,j){i.setCapture(j!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fU=this.__fS=this.__fT=null;
},defer:function(n){qx.event.Registration.addDispatcher(n);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==d;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(n,b);

if(y){var A=h;
A+=y;

if(x){A+=f+x+o;
}A+=k;
z.loadXML(A);
}return z;
},"default":function(v,w){return document.implementation.createDocument(v||q,w||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(E){var F=qx.xml.Document.create();
F.loadXML(E);
return F;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(s){if(qx.core.Variant.isSet(r,p)){var t=[a,j];
var u=[c,g];

for(var i=0,l=t.length;i<l;i++){try{new ActiveXObject(t[i]);
new ActiveXObject(u[i]);
}catch(D){continue;
}s.DOMDOC=t[i];
s.XMLHTTP=u[i];
break;
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
(function(){var bb="borderTopWidth",ba="borderLeftWidth",Y="marginTop",X="marginLeft",W="scroll",V="qx.client",U="border-box",T="borderBottomWidth",S="borderRightWidth",R="auto",bq="padding",bp="qx.bom.element.Location",bo="paddingLeft",bn="static",bm="marginBottom",bl="visible",bk="BODY",bj="paddingBottom",bi="paddingTop",bh="marginRight",bf="position",bg="margin",bd="overflow",be="paddingRight",bc="border";
qx.Class.define(bp,{statics:{__gg:function(N,O){return qx.bom.element.Style.get(N,O,qx.bom.element.Style.COMPUTED_MODE,false);
},__gh:function(i,j){return parseInt(qx.bom.element.Style.get(i,j,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gi:function(bv){var by=0,top=0;
if(bv.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bx=qx.dom.Node.getWindow(bv);
by-=qx.bom.Viewport.getScrollLeft(bx);
top-=qx.bom.Viewport.getScrollTop(bx);
}else{var bw=qx.dom.Node.getDocument(bv).body;
bv=bv.parentNode;
while(bv&&bv!=bw){by+=bv.scrollLeft;
top+=bv.scrollTop;
bv=bv.parentNode;
}}return {left:by,top:top};
},__gj:qx.core.Variant.select(V,{"mshtml":function(bz){var bB=qx.dom.Node.getDocument(bz);
var bA=bB.body;
var bC=0;
var top=0;
bC-=bA.clientLeft+bB.documentElement.clientLeft;
top-=bA.clientTop+bB.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bC+=this.__gh(bA,ba);
top+=this.__gh(bA,bb);
}return {left:bC,top:top};
},"webkit":function(J){var L=qx.dom.Node.getDocument(J);
var K=L.body;
var M=K.offsetLeft;
var top=K.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){M+=this.__gh(K,ba);
top+=this.__gh(K,bb);
}return {left:M,top:top};
},"gecko":function(bN){var bO=qx.dom.Node.getDocument(bN).body;
var bP=bO.offsetLeft;
var top=bO.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bP+=this.__gh(bO,X);
top+=this.__gh(bO,Y);
}if(qx.bom.element.BoxSizing.get(bO)!==U){bP+=this.__gh(bO,ba);
top+=this.__gh(bO,bb);
}return {left:bP,top:top};
},"default":function(bD){var bE=qx.dom.Node.getDocument(bD).body;
var bF=bE.offsetLeft;
var top=bE.offsetTop;
return {left:bF,top:top};
}}),__gk:qx.core.Variant.select(V,{"mshtml|webkit":function(bI){var bK=qx.dom.Node.getDocument(bI);
if(bI.getBoundingClientRect){var bL=bI.getBoundingClientRect();
var bM=bL.left;
var top=bL.top;
}else{var bM=bI.offsetLeft;
var top=bI.offsetTop;
bI=bI.offsetParent;
var bJ=bK.body;
while(bI&&bI!=bJ){bM+=bI.offsetLeft;
top+=bI.offsetTop;
bM+=this.__gh(bI,ba);
top+=this.__gh(bI,bb);
bI=bI.offsetParent;
}}return {left:bM,top:top};
},"gecko":function(u){if(u.getBoundingClientRect){var x=u.getBoundingClientRect();
var y=Math.round(x.left);
var top=Math.round(x.top);
}else{var y=0;
var top=0;
var v=qx.dom.Node.getDocument(u).body;
var w=qx.bom.element.BoxSizing;

if(w.get(u)!==U){y-=this.__gh(u,ba);
top-=this.__gh(u,bb);
}
while(u&&u!==v){y+=u.offsetLeft;
top+=u.offsetTop;
if(w.get(u)!==U){y+=this.__gh(u,ba);
top+=this.__gh(u,bb);
}if(u.parentNode&&this.__gg(u.parentNode,bd)!=bl){y+=this.__gh(u.parentNode,ba);
top+=this.__gh(u.parentNode,bb);
}u=u.offsetParent;
}}return {left:y,top:top};
},"default":function(d){var f=0;
var top=0;
var e=qx.dom.Node.getDocument(d).body;
while(d&&d!==e){f+=d.offsetLeft;
top+=d.offsetTop;
d=d.offsetParent;
}return {left:f,top:top};
}}),get:function(A,B){if(A.tagName==bk){var location=this.__gl(A);
var I=location.left;
var top=location.top;
}else{var C=this.__gj(A);
var H=this.__gk(A);
var scroll=this.__gi(A);
var I=H.left+C.left-scroll.left;
var top=H.top+C.top-scroll.top;
}var D=I+A.offsetWidth;
var E=top+A.offsetHeight;

if(B){if(B==bq||B==W){var F=qx.bom.element.Overflow.getX(A);

if(F==W||F==R){D+=A.scrollWidth-A.offsetWidth+this.__gh(A,ba)+this.__gh(A,S);
}var G=qx.bom.element.Overflow.getY(A);

if(G==W||G==R){E+=A.scrollHeight-A.offsetHeight+this.__gh(A,bb)+this.__gh(A,T);
}}
switch(B){case bq:I+=this.__gh(A,bo);
top+=this.__gh(A,bi);
D-=this.__gh(A,be);
E-=this.__gh(A,bj);
case W:I-=A.scrollLeft;
top-=A.scrollTop;
D-=A.scrollLeft;
E-=A.scrollTop;
case bc:I+=this.__gh(A,ba);
top+=this.__gh(A,bb);
D-=this.__gh(A,S);
E-=this.__gh(A,T);
break;
case bg:I-=this.__gh(A,X);
top-=this.__gh(A,Y);
D+=this.__gh(A,bh);
E+=this.__gh(A,bm);
break;
}}return {left:I,top:top,right:D,bottom:E};
},__gl:qx.core.Variant.select(V,{"default":function(bt){var top=bt.offsetTop+this.__gh(bt,Y);
var bu=bt.offsetLeft+this.__gh(bt,X);
return {left:bu,top:top};
},"mshtml":function(s){var top=s.offsetTop;
var t=s.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gh(s,Y);
t+=this.__gh(s,X);
}return {left:t,top:top};
},"gecko":function(bG){var top=bG.offsetTop+this.__gh(bG,Y)+this.__gh(bG,ba);
var bH=bG.offsetLeft+this.__gh(bG,X)+this.__gh(bG,bb);
return {left:bH,top:top};
}}),getLeft:function(k,l){return this.get(k,l).left;
},getTop:function(br,bs){return this.get(br,bs).top;
},getRight:function(g,h){return this.get(g,h).right;
},getBottom:function(P,Q){return this.get(P,Q).bottom;
},getRelative:function(m,n,o,p){var r=this.get(m,o);
var q=this.get(n,p);
return {left:r.left-q.left,top:r.top-q.top,right:r.right-q.right,bottom:r.bottom-q.bottom};
},getPosition:function(z){return this.getRelative(z,this.getOffsetParent(z));
},getOffsetParent:function(a){var c=a.offsetParent||document.body;
var b=qx.bom.element.Style;

while(c&&(!/^body|html$/i.test(c.tagName)&&b.get(c,bf)===bn)){c=c.offsetParent;
}return c;
}}});
})();
(function(){var l="qx.client",k="character",j="EndToEnd",i="input",h="textarea",g="StartToStart",f='character',e="qx.bom.Selection",d="button",c="#text",b="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(l,{"mshtml":function(bx){return bx.selection;
},"default":function(bi){return qx.dom.Node.getWindow(bi).getSelection();
}}),get:qx.core.Variant.select(l,{"mshtml":function(G){var H=qx.bom.Range.get(qx.dom.Node.getDocument(G));
return H.text;
},"default":function(a){if(this.__gm(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(l,{"mshtml":function(m){var o=this.get(m);
var n=qx.util.StringSplit.split(o,/\r\n/);
return o.length-(n.length-1);
},"opera":function(A){var F,D,B;

if(this.__gm(A)){var E=A.selectionStart;
var C=A.selectionEnd;
F=A.value.substring(E,C);
D=C-E;
}else{F=qx.bom.Selection.get(A);
D=F.length;
}B=qx.util.StringSplit.split(F,/\r\n/);
return D-(B.length-1);
},"default":function(v){if(this.__gm(v)){return v.selectionEnd-v.selectionStart;
}else{return this.get(v).length;
}}}),getStart:qx.core.Variant.select(l,{"mshtml":function(J){if(this.__gm(J)){var O=qx.bom.Range.get();
if(!J.contains(O.parentElement())){return -1;
}var P=qx.bom.Range.get(J);
var N=J.value.length;
P.moveToBookmark(O.getBookmark());
P.moveEnd(f,N);
return N-P.text.length;
}else{var P=qx.bom.Range.get(J);
var L=P.parentElement();
var Q=qx.bom.Range.get();
Q.moveToElementText(L);
var K=qx.bom.Range.get(qx.dom.Node.getBodyElement(J));
K.setEndPoint(g,P);
K.setEndPoint(j,Q);
if(Q.compareEndPoints(g,K)==0){return 0;
}var M;
var R=0;

while(true){M=K.moveStart(k,-1);
if(Q.compareEndPoints(g,K)==0){break;
}if(M==0){break;
}else{R++;
}}return ++R;
}},"gecko|webkit":function(ba){if(this.__gm(ba)){return ba.selectionStart;
}else{var bc=qx.dom.Node.getDocument(ba);
var bb=this.getSelectionObject(bc);
if(bb.anchorOffset<bb.focusOffset){return bb.anchorOffset;
}else{return bb.focusOffset;
}}},"default":function(by){if(this.__gm(by)){return by.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(by)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(l,{"mshtml":function(bn){if(this.__gm(bn)){var bs=qx.bom.Range.get();
if(!bn.contains(bs.parentElement())){return -1;
}var bt=qx.bom.Range.get(bn);
var br=bn.value.length;
bt.moveToBookmark(bs.getBookmark());
bt.moveStart(f,-br);
return bt.text.length;
}else{var bt=qx.bom.Range.get(bn);
var bp=bt.parentElement();
var bu=qx.bom.Range.get();
bu.moveToElementText(bp);
var br=bu.text.length;
var bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bn));
bo.setEndPoint(j,bt);
bo.setEndPoint(g,bu);
if(bu.compareEndPoints(j,bo)==0){return br-1;
}var bq;
var bv=0;

while(true){bq=bo.moveEnd(k,1);
if(bu.compareEndPoints(j,bo)==0){break;
}if(bq==0){break;
}else{bv++;
}}return br-(++bv);
}},"gecko|webkit":function(bj){if(this.__gm(bj)){return bj.selectionEnd;
}else{var bl=qx.dom.Node.getDocument(bj);
var bk=this.getSelectionObject(bl);
if(bk.focusOffset>bk.anchorOffset){return bk.focusOffset;
}else{return bk.anchorOffset;
}}},"default":function(bm){if(this.__gm(bm)){return bm.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bm)).focusOffset;
}}}),__gm:function(I){return qx.dom.Node.isElement(I)&&(I.nodeName.toLowerCase()==i||I.nodeName.toLowerCase()==h);
},set:qx.core.Variant.select(l,{"mshtml":function(bd,be,bf){var bg;
if(qx.dom.Node.isDocument(bd)){bd=bd.body;
}
if(qx.dom.Node.isElement(bd)||qx.dom.Node.isText(bd)){switch(bd.nodeName.toLowerCase()){case i:case h:case d:if(bf===undefined){bf=bd.value.length;
}
if(be>=0&&be<=bd.value.length&&bf>=0&&bf<=bd.value.length){bg=qx.bom.Range.get(bd);
bg.collapse(true);
bg.moveStart(k,be);
bg.moveEnd(k,bf-be);
bg.select();
return true;
}break;
case c:if(bf===undefined){bf=bd.nodeValue.length;
}
if(be>=0&&be<=bd.nodeValue.length&&bf>=0&&bf<=bd.nodeValue.length){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bg.moveToElementText(bd.parentNode);
bg.collapse(true);
bg.moveStart(k,be);
bg.moveEnd(k,bf-be);
bg.select();
return true;
}break;
default:if(bf===undefined){bf=bd.childNodes.length-1;
}if(bd.childNodes[be]&&bd.childNodes[bf]){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bg.moveToElementText(bd.childNodes[be]);
bg.collapse(true);
var bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bh.moveToElementText(bd.childNodes[bf]);
bg.setEndPoint(j,bh);
bg.select();
return true;
}}}return false;
},"default":function(S,T,U){var Y=S.nodeName.toLowerCase();

if(qx.dom.Node.isElement(S)&&(Y==i||Y==h)){if(U===undefined){U=S.value.length;
}if(T>=0&&T<=S.value.length&&U>=0&&U<=S.value.length){S.focus();
S.select();
S.setSelectionRange(T,U);
return true;
}}else{var W=false;
var X=qx.dom.Node.getWindow(S).getSelection();
var V=qx.bom.Range.get(S);
if(qx.dom.Node.isText(S)){if(U===undefined){U=S.length;
}
if(T>=0&&T<S.length&&U>=0&&U<=S.length){W=true;
}}else if(qx.dom.Node.isElement(S)){if(U===undefined){U=S.childNodes.length-1;
}
if(T>=0&&S.childNodes[T]&&U>=0&&S.childNodes[U]){W=true;
}}else if(qx.dom.Node.isDocument(S)){S=S.body;

if(U===undefined){U=S.childNodes.length-1;
}
if(T>=0&&S.childNodes[T]&&U>=0&&S.childNodes[U]){W=true;
}}
if(W){if(!X.isCollapsed){X.collapseToStart();
}V.setStart(S,T);
if(qx.dom.Node.isText(S)){V.setEnd(S,U);
}else{V.setEndAfter(S.childNodes[U]);
}if(X.rangeCount>0){X.removeAllRanges();
}X.addRange(V);
return true;
}}return false;
}}),setAll:function(bw){return qx.bom.Selection.set(bw,0);
},clear:qx.core.Variant.select(l,{"mshtml":function(w){var x=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(w));
var y=qx.bom.Range.get(w);
var parent=y.parentElement();
var z=qx.bom.Range.get(qx.dom.Node.getDocument(w));
if(parent==z.parentElement()&&parent==w){x.empty();
}},"default":function(p){var r=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p));
var t=p.nodeName.toLowerCase();
if(qx.dom.Node.isElement(p)&&(t==i||t==h)){p.setSelectionRange(0,0);
qx.bom.Element.blur(p);
}else if(qx.dom.Node.isDocument(p)||t==b){r.collapse(p.body?p.body:p,0);
}else{var s=qx.bom.Range.get(p);

if(!s.collapsed){var u;
var q=s.commonAncestorContainer;
if(qx.dom.Node.isElement(p)&&qx.dom.Node.isText(q)){u=q.parentNode;
}else{u=q;
}
if(u==p){r.collapse(p,0);
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
qx.Class.define(b,{statics:{__gn:{},remove:function(e){delete this.__gn[e.$$hash];
},add:function(c){var d=this.__gn;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__gn;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__gn={};
}}});
})();
(function(){var g="qx.ui.core.queue.Visibility",f="visibility";
qx.Class.define(g,{statics:{__go:{},__gp:{},remove:function(i){var j=i.$$hash;
delete this.__gp[j];
delete this.__go[j];
},isVisible:function(h){return this.__gp[h.$$hash]||false;
},__gq:function(m){var o=this.__gp;
var n=m.$$hash;
var p;
if(m.isExcluded()){p=false;
}else{var parent=m.$$parent;

if(parent){p=this.__gq(parent);
}else{p=m.isRootWidget();
}}return o[n]=p;
},add:function(k){var l=this.__go;

if(l[k.$$hash]){return;
}l[k.$$hash]=k;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var a=this.__go;
var e=this.__gp;
for(var b in a){if(e[b]!=null){a[b].addChildrenToQueue(a);
}}var d={};

for(var b in a){d[b]=e[b];
e[b]=null;
}for(var b in a){var c=a[b];
delete a[b];
if(e[b]==null){this.__gq(c);
}if(e[b]&&e[b]!=d[b]){c.checkAppearanceNeeds();
}}this.__go={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gr:{},remove:function(c){delete this.__gr[c.$$hash];
},add:function(i){var j=this.__gr;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(d){return !!this.__gr[d.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__gr;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gs:{},add:function(c){var d=this.__gs;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__gs;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__gs={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(g,h){arguments.callee.base.call(this);
this.__gF=g;
this.__gG=h||g.toHashCode();
this.useMarkup(g.getMarkup());
var i={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=c;
}this.setStyles(i);
},members:{__gG:null,__gF:null,getId:function(){return this.__gG;
},getDecorator:function(){return this.__gF;
},resize:function(e,f){this.__gF.resize(this.getDomElement(),e,f);
},tint:function(d){this.__gF.tint(this.getDomElement(),d);
},getInsets:function(){return this.__gF.getInsets();
}},destruct:function(){this.__gF=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__gH=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gH:null,__gI:{focusin:1,focusout:1,focus:1,blur:1},__gJ:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(h,j){return h instanceof qx.ui.core.Widget;
},_dispatchEvent:function(k){var q=k.getTarget();
var p=qx.ui.core.Widget.getWidgetByElement(q);
var r=false;

while(p&&p.isAnonymous()){var r=true;
p=p.getLayoutParent();
}if(p&&r&&k.getType()==a){p.getContainerElement().activate();
}if(this.__gI[k.getType()]){p=p&&p.getFocusTarget();
if(!p){return;
}}if(k.getRelatedTarget){var y=k.getRelatedTarget();
var x=qx.ui.core.Widget.getWidgetByElement(y);

while(x&&x.isAnonymous()){x=x.getLayoutParent();
}
if(x){if(this.__gI[k.getType()]){x=x.getFocusTarget();
}if(x===p){return;
}}}var t=k.getCurrentTarget();
var v=qx.ui.core.Widget.getWidgetByElement(t);

if(!v||v.isAnonymous()){return;
}if(this.__gI[k.getType()]){v=v.getFocusTarget();
}var w=k.getType();

if(!v||!(v.isEnabled()||this.__gJ[w])){return;
}var m=k.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var s=this.__gH.getListeners(v,w,m);

if(!s||s.length===0){return;
}var n=qx.event.Pool.getInstance().getObject(k.constructor);
k.clone(n);
n.setTarget(p);
n.setRelatedTarget(x||null);
n.setCurrentTarget(v);
var z=k.getOriginalTarget();

if(z){var o=qx.ui.core.Widget.getWidgetByElement(z);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}n.setOriginalTarget(o);
}else{n.setOriginalTarget(q);
}for(var i=0,l=s.length;i<l;i++){var u=s[i].context||v;
s[i].handler.call(u,n);
}if(n.getPropagationStopped()){k.stopPropagation();
}
if(n.getDefaultPrevented()){k.preventDefault();
}qx.event.Pool.getInstance().poolObject(n);
},registerEvent:function(A,B,C){var D;

if(B===e||B===f){D=A.getFocusElement();
}else if(B===c||B===d){D=A.getContentElement();
}else{D=A.getContainerElement();
}
if(D){D.addListener(B,this._dispatchEvent,this,C);
}},unregisterEvent:function(E,F,G){var H;

if(F===e||F===f){H=E.getFocusElement();
}else if(F===c||F===d){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.removeListener(F,this._dispatchEvent,this,G);
}}},destruct:function(){this.__gH=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__gM:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__gM();
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__gN=u;
this.length=u.length;
},members:{$$isString:true,length:0,__gN:null,toString:function(){return this.__gN;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,z){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(v,w){{};
var x=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
w.valueOf=w.toString;

if(new v(t).valueOf()==null){delete w.valueOf;
}
for(var i=0,l=x.length;i<l;i++){w[x[i]]=String.prototype[x[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__gO=c;
this.__gP=d;
},members:{__gO:null,__gP:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__gO,this.__gP);
}}});
})();
(function(){var k="_",j="",h="qx.dynlocale",g="on",f="_applyLocale",e="changeLocale",d="C",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gQ=qx.$$translations||{};
this.__gR=qx.$$locales||{};
var n=qx.bom.client.Locale;
var l=n.LOCALE;
var m=n.VARIANT;

if(m!==j){l+=k+m;
}this.setLocale(l||this.__gS);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(bd,be,bf){var bg=qx.lang.Array.fromArguments(arguments);
bg.splice(0,2);
return qx.locale.Manager.getInstance().translate(be,bg);
},marktr:function(w){return w;
}},properties:{locale:{check:b,nullable:true,apply:f,event:e}},members:{__gS:d,__gT:null,__gU:null,__gQ:null,__gR:null,getLanguage:function(){return this.__gU;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var X=[];

for(var W in this.__gR){if(W!=this.__gS){X.push(W);
}}return X;
},__gV:function(P){var R;
var Q=P.indexOf(k);

if(Q==-1){R=P;
}else{R=P.substring(0,Q);
}return R;
},_applyLocale:function(x,y){this.__gT=x;
this.__gU=this.__gV(x);
},addTranslation:function(S,T){var U=this.__gQ;

if(U[S]){for(var V in T){U[S][V]=T[V];
}}else{U[S]=T;
}},addLocale:function(Y,ba){var bb=this.__gR;

if(bb[Y]){for(var bc in ba){bb[Y][bc]=ba[bc];
}}else{bb[Y]=ba;
}},translate:function(H,I,J){var O;
var M=this.__gQ;

if(!M){return H;
}
if(J){var L=this.__gV(J);
}else{J=this.__gT;
L=this.__gU;
}
if(!O&&M[J]){O=M[J][H];
}
if(!O&&M[L]){O=M[L][H];
}
if(!O&&M[this.__gS]){O=M[this.__gS][H];
}
if(!O){O=H;
}
if(I.length>0){var K=[];

for(var i=0;i<I.length;i++){var N=I[i];

if(N&&N.translate){K[i]=N.translate();
}else{K[i]=N;
}}O=qx.lang.String.format(O,K);
}
if(qx.core.Variant.isSet(h,g)){O=new qx.locale.LocalizedString(O,H,I);
}return O;
},localize:function(z,A,B){var G;
var E=this.__gR;

if(!E){return z;
}
if(B){var D=this.__gV(B);
}else{B=this.__gT;
D=this.__gU;
}
if(!G&&E[B]){G=E[B][z];
}
if(!G&&E[D]){G=E[D][z];
}
if(!G&&E[this.__gS]){G=E[this.__gS][z];
}
if(!G){G=z;
}
if(A.length>0){var C=[];

for(var i=0;i<A.length;i++){var F=A[i];

if(F.translate){C[i]=F.translate();
}else{C[i]=F;
}}G=qx.lang.String.format(G,C);
}
if(qx.core.Variant.isSet(h,g)){G=new qx.locale.LocalizedString(G,z,A);
}return G;
}},destruct:function(){this.__gQ=this.__gR=null;
}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{_applyProperty:function(name,q){arguments.callee.base.call(this,name,q);

if(name===j){var u=this.getDomElement();
var r=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){r.backgroundPosition=null;
r.backgroundRepeat=null;
}var s=this._getProperty(j);
var t=this._getProperty(i);
var v=t?i:h;
qx.bom.element.Decoration.update(u,s,v,r);
}},_createDomElement:function(){var n=this._getProperty(i);
var o=n?i:h;

if(qx.core.Variant.isSet(g,f)){var m=this._getProperty(j);
this.setNodeName(qx.bom.element.Decoration.getTagName(o,m));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(o));
}return arguments.callee.base.call(this);
},_copyData:function(k){return arguments.callee.base.call(this,true);
},setSource:function(l){this._setProperty(j,l);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(p){this._setProperty(i,p);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var y="nonScaled",x="scaled",w="alphaScaled",v=".png",u="replacement",t="hidden",s="div",r="Boolean",q="_applyScale",p="px",j="_applySource",o="-disabled.$1",m="img",i="changeSource",h="qx.client",l="__hC",k="String",n="image",g="qx.ui.basic.Image";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(f){this.__hC={};
arguments.callee.base.call(this);

if(f){this.setSource(f);
}},properties:{source:{check:k,init:null,nullable:true,event:i,apply:j,themeable:true},scale:{check:r,init:false,themeable:true,apply:q},appearance:{refine:true,init:n},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hD:null,__hE:null,__hF:null,__hC:null,getContentElement:function(){return this.__hJ();
},_createContentElement:function(){return this.__hJ();
},_getContentHint:function(){return {width:this.__hD||0,height:this.__hE||0};
},_applyEnabled:function(Q,R){arguments.callee.base.call(this,Q,R);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(ba){this._styleSource();
},__hG:function(D){this.__hF=D;
},__hH:function(){if(this.__hF==null){var T=this.getSource();
var S=false;

if(T!=null){S=qx.lang.String.endsWith(T,v);
}
if(this.getScale()&&S&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hF=w;
}else if(this.getScale()){this.__hF=x;
}else{this.__hF=y;
}}return this.__hF;
},__hI:function(bf){var bg;
var bh;

if(bf==w){bg=true;
bh=s;
}else if(bf==y){bg=false;
bh=s;
}else{bg=true;
bh=m;
}var bi=new qx.html.Image(bh);
bi.setScale(bg);
bi.setStyles({"overflowX":t,"overflowY":t});
return bi;
},__hJ:function(){var P=this.__hH();

if(this.__hC[P]==null){this.__hC[P]=this.__hI(P);
}return this.__hC[P];
},_styleSource:function(){var bb=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!bb){this.getContentElement().resetSource();
return;
}this.__hK(bb);
if(qx.util.ResourceManager.getInstance().has(bb)){this.__hM(this.getContentElement(),bb);
}else if(qx.io.ImageLoader.isLoaded(bb)){this.__hN(this.getContentElement(),bb);
}else{this.__hO(this.getContentElement(),bb);
}},__hK:qx.core.Variant.select(h,{"mshtml":function(z){var B=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var A=qx.lang.String.endsWith(z,v);

if(B&&A){if(this.getScale()&&this.__hH()!=w){this.__hG(w);
}else if(!this.getScale()&&this.__hH()!=y){this.__hG(y);
}}else{if(this.getScale()&&this.__hH()!=x){this.__hG(x);
}else if(!this.getScale()&&this.__hH()!=y){this.__hG(y);
}}this.__hL(this.__hJ());
},"default":function(bc){if(this.getScale()&&this.__hH()!=x){this.__hG(x);
}else if(!this.getScale()&&this.__hH(y)){this.__hG(y);
}this.__hL(this.__hJ());
}}),__hL:function(E){var H=this.getContainerElement();
var I=H.getChild(0);

if(I!=E){if(I!=null){var K=p;
var F={};
var G=this.getInnerSize();

if(G!=null){F.width=G.width+K;
F.height=G.height+K;
}var J=this.getInsets();
F.left=J.left+K;
F.top=J.top+K;
F.zIndex=10;
E.setStyles(F,true);
E.setSelectable(this.getSelectable());
}H.removeAt(0);
H.addAt(E,0);
}},__hM:function(L,M){var O=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var N=M.replace(/\.([a-z]+)$/,o);

if(O.has(N)){M=N;
this.addState(u);
}else{this.removeState(u);
}}if(L.getSource()===M){return;
}L.setSource(M);
this.__hQ(O.getImageWidth(M),O.getImageHeight(M));
},__hN:function(U,V){var X=qx.io.ImageLoader;
U.setSource(V);
var W=X.getWidth(V);
var Y=X.getHeight(V);
this.__hQ(W,Y);
},__hO:function(c,d){var self;
var e=qx.io.ImageLoader;
{};
if(!e.isFailed(d)){e.load(d,this.__hP,this);
}else{if(c!=null){c.resetSource();
}}},__hP:function(bd,be){if(bd!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(be.failed){this.warn("Image could not be loaded: "+bd);
}this._styleSource();
},__hQ:function(a,b){if(a!==this.__hD||b!==this.__hE){this.__hD=a;
this.__hE=b;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(l);
}});
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
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(f,this._onInterval,this);
h.start();
this.__hU=h;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__hU:null,_applyTimeoutInterval:function(g){this.__hU.setInterval(g);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__hU){this.__hU.stop();
}this.__hU=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b='__hV',a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hV=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__hW:null,compute:function(z,A,B,C,D,E,F){this.__hW=this.__hW||new qx.util.placement.Placement();
var I=D.split(f);
var H=I[0];
var G=I[1];
this.__hW.set({axisX:this.__ib(E),axisY:this.__ib(F),edge:H,align:G});
return this.__hW.compute(z,A,B,C);
},__hX:null,__hY:null,__ia:null,__ib:function(y){switch(y){case a:this.__hX=this.__hX||new qx.util.placement.DirectAxis();
return this.__hX;
case d:this.__hY=this.__hY||new qx.util.placement.KeepAlignAxis();
return this.__hY;
case c:this.__ia=this.__ia||new qx.util.placement.BestFitAxis();
return this.__ia;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hV:null,compute:function(r,s,t,u){{};
var v=this.getAxisX()||this.__hV;
var x=v.computeStart(r.width,{start:t.left,end:t.right},{start:u.left,end:u.right},s.width,this.__ic());
var w=this.getAxisY()||this.__hV;
var top=w.computeStart(r.height,{start:t.top,end:t.bottom},{start:u.top,end:u.bottom},s.height,this.__id());
return {left:x,top:top};
},__ic:function(){var q=this.getEdge();
var p=this.getAlign();

if(q==l){return i;
}else if(q==n){return g;
}else if(p==l){return k;
}else if(p==n){return h;
}},__id:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
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
(function(){var f="mousedown",d="__lj",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lj={};
qx.event.Registration.addListener(document.documentElement,f,this.__ll,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__lj:null,add:function(m){{};
this.__lj[m.$$hash]=m;
this.__lk();
},remove:function(n){{};
var o=this.__lj;

if(o){delete o[n.$$hash];
this.__lk();
}},hideAll:function(){var h=this.__lj;

if(h){for(var g in h){h[g].exclude();
}}},__lk:function(){var r=1e7;
var q=this.__lj;

for(var p in q){q[p].setZIndex(r++);
}},__ll:function(e){var k=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var l=this.__lj;

for(var j in l){var i=l[j];

if(!i.getAutoHide()||k==i||qx.ui.core.Widget.contains(i,k)){continue;
}i.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__ll,this,true);
this._disposeMap(d);
}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__ie:null,_invalidChildrenCache:null,__if:null,invalidateLayoutCache:function(){this.__ie=null;
},renderLayout:function(d,e){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__ie){return this.__ie;
}return this.__ie=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(f){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var c=this.__if;

if(c instanceof qx.ui.core.LayoutItem){c.clearSeparators();
}},_renderSeparator:function(g,h){this.__if.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__if){throw new Error("It is not possible to manually set the connected widget.");
}this.__if=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__if;
},_applyLayoutChange:function(){if(this.__if){this.__if.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__if.getLayoutChildren();
}},destruct:function(){this.__if=this.__ie=null;
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
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(L,M){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(L!=null){this.setLabel(L);
}
if(M!=null){this.setIcon(M);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(F){var G;

switch(F){case j:G=new qx.ui.basic.Label(this.getLabel());
G.setAnonymous(true);
G.setRich(this.getRich());
this._add(G);

if(this.getLabel()==null||this.getShow()===i){G.exclude();
}break;
case i:G=new qx.ui.basic.Image(this.getIcon());
G.setAnonymous(true);
this._addAt(G,0);

if(this.getIcon()==null||this.getShow()===j){G.exclude();
}break;
}return G||arguments.callee.base.call(this,F);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(P,Q){var R=this.getChildControl(j,true);

if(R){R.setValue(P);
}this._handleLabel();
},_applyRich:function(x,y){var z=this.getChildControl(j,true);

if(z){z.setRich(x);
}},_applyIcon:function(A,B){var C=this.getChildControl(i,true);

if(C){C.setSource(A);
}this._handleIcon();
},_applyGap:function(J,K){this._getLayout().setGap(J);
},_applyShow:function(D,E){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(N,O){this._getLayout().setIconPosition(N);
},_applyCenter:function(H,I){this._getLayout().setCenter(H);
}}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,w,p;
var B,u;
var z=this.getGap();
var E=this.getCenter();
if(o===k||o===f){var x=length-1;
var s=-1;
var q=-1;
}else{var x=0;
var s=length;
var q=1;
}if(o==h||o==k){if(E){var A=0;

for(var i=x;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){A+=p;

if(i!=x){A+=z;
}}}top=Math.round((m-A)/2);
}else{top=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
w=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,w,l);
B.renderLayout(F,top,w,p);
if(p>0){top+=p+z;
}}}else{var t=l;
var n=null;
var D=0;

for(var i=x;i!=s;i+=q){B=r[i];
w=B.getSizeHint().width;

if(w>0){if(!n&&B instanceof qx.ui.basic.Label){n=B;
}else{t-=w;
}D++;
}}
if(D>1){var C=(D-1)*z;
t-=C;
}
if(n){var u=n.getSizeHint();
var y=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=y;
}
if(E&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(B===n){w=y;
}else{w=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
B.renderLayout(F,top,w,p);
if(w>0){F+=w+z;
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
(function(){var m="middle",k="qx.ui.layout.Util",j="left",h="center",g="top",f="bottom",e="right";
qx.Class.define(k,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(x,y,z){var B,F,A,G;
var C=y>z;
var H=Math.abs(y-z);
var I,D;
var E={};

for(F in x){B=x[F];
E[F]={potential:C?B.max-B.value:B.value-B.min,flex:C?B.flex:1/B.flex,offset:0};
}while(H!=0){G=Infinity;
A=0;

for(F in E){B=E[F];

if(B.potential>0){A+=B.flex;
G=Math.min(G,B.potential/B.flex);
}}if(A==0){break;
}G=Math.min(H,G*A)/A;
I=0;

for(F in E){B=E[F];

if(B.potential>0){D=Math.min(H,B.potential,Math.ceil(G*B.flex));
I+=D-G*B.flex;

if(I>=1){I-=1;
D-=1;
}B.potential-=D;

if(C){B.offset+=D;
}else{B.offset-=D;
}H-=D;
}}}return E;
},computeHorizontalAlignOffset:function(r,s,t,u,v){if(u==null){u=0;
}
if(v==null){v=0;
}var w=0;

switch(r){case j:w=u;
break;
case e:w=t-s-v;
break;
case h:w=Math.round((t-s)/2);
if(w<u){w=u;
}else if(w<v){w=Math.max(u,t-s-v);
}break;
}return w;
},computeVerticalAlignOffset:function(R,S,T,U,V){if(U==null){U=0;
}
if(V==null){V=0;
}var W=0;

switch(R){case g:W=U;
break;
case f:W=T-S-V;
break;
case m:W=Math.round((T-S)/2);
if(W<U){W=U;
}else if(W<V){W=Math.max(U,T-S-V);
}break;
}return W;
},collapseMargins:function(a){var b=0,d=0;

for(var i=0,l=arguments.length;i<l;i++){var c=arguments[i];

if(c<0){d=Math.min(d,c);
}else if(c>0){b=Math.max(b,c);
}}return b+d;
},computeHorizontalGaps:function(n,o,p){if(o==null){o=0;
}var q=0;

if(p){q+=n[0].getMarginLeft();

for(var i=1,l=n.length;i<l;i+=1){q+=this.collapseMargins(o,n[i-1].getMarginRight(),n[i].getMarginLeft());
}q+=n[l-1].getMarginRight();
}else{for(var i=1,l=n.length;i<l;i+=1){q+=n[i].getMarginLeft()+n[i].getMarginRight();
}q+=(o*(l-1));
}return q;
},computeVerticalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginTop();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginBottom(),bm[i].getMarginTop());
}bp+=bm[l-1].getMarginBottom();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginTop()+bm[i].getMarginBottom();
}bp+=(bn*(l-1));
}return bp;
},computeHorizontalSeparatorGaps:function(J,K,L){var O=qx.theme.manager.Decoration.getInstance().resolve(L);
var N=O.getInsets();
var M=N.left+N.right;
var P=0;

for(var i=0,l=J.length;i<l;i++){var Q=J[i];
P+=Q.getMarginLeft()+Q.getMarginRight();
}P+=(K+M+K)*(l-1);
return P;
},computeVerticalSeparatorGaps:function(be,bf,bg){var bj=qx.theme.manager.Decoration.getInstance().resolve(bg);
var bi=bj.getInsets();
var bh=bi.top+bi.bottom;
var bk=0;

for(var i=0,l=be.length;i<l;i++){var bl=be[i];
bk+=bl.getMarginTop()+bl.getMarginBottom();
}bk+=(bf+bh+bf)*(l-1);
return bk;
},arrangeIdeals:function(X,Y,ba,bb,bc,bd){if(Y<X||bc<bb){if(Y<X&&bc<bb){Y=X;
bc=bb;
}else if(Y<X){bc-=(X-Y);
Y=X;
if(bc<bb){bc=bb;
}}else if(bc<bb){Y-=(bb-bc);
bc=bb;
if(Y<X){Y=X;
}}}
if(Y>ba||bc>bd){if(Y>ba&&bc>bd){Y=ba;
bc=bd;
}else if(Y>ba){bc+=(Y-ba);
Y=ba;
if(bc>bd){bc=bd;
}}else if(bc>bd){Y+=(bc-bd);
bc=bd;
if(Y>ba){Y=ba;
}}}return {begin:Y,end:bc};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="qx.dynlocale",j="text",i="Boolean",h="qx.client",g="color",f="userSelect",d="changeLocale",c="enabled",b="none",a="on",F="_applyTextAlign",E="qx.ui.core.Widget",D="gecko",C="changeTextAlign",B="_applyWrap",A="changeValue",z="changeContent",y="qx.ui.basic.Label",x="A",w="_applyValue",r="center",s="_applyBuddy",p="String",q="textAlign",n="right",o="changeRich",l="_applyRich",m="click",t="label",u="webkit",v="left";
qx.Class.define(y,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(J){arguments.callee.base.call(this);

if(J!=null){this.setValue(J);
}
if(qx.core.Variant.isSet(k,a)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:o,apply:l},wrap:{check:i,init:true,apply:B},value:{check:p,apply:w,event:A,nullable:true},buddy:{check:E,apply:s,nullable:true,init:null},textAlign:{check:[v,r,n],nullable:true,themeable:true,apply:F,event:C},appearance:{refine:true,init:t},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__jr:null,__js:null,__jt:null,__ju:null,_getContentHint:function(){if(this.__js){this.__jv=this.__jw();
delete this.__js;
}return {width:this.__jv.width,height:this.__jv.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(L){if(qx.core.Variant.isSet(h,D)){if(L&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,L);
if(qx.core.Variant.isSet(h,u)){this.getContainerElement().setStyle(f,L?j:b);
this.getContentElement().setStyle(f,L?j:b);
}},_getContentHeightForWidth:function(X){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jw(X).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(G,H){this.getContentElement().setStyle(q,G);
},_applyTextColor:function(Y,ba){if(Y){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(Y));
}else{this.getContentElement().removeStyle(g);
}},__jv:{width:0,height:0},_applyFont:function(bb,bc){var bd;

if(bb){this.__jr=qx.theme.manager.Font.getInstance().resolve(bb);
bd=this.__jr.getStyles();
}else{this.__jr=null;
bd=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bd);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
},__jw:function(M){var Q=qx.bom.Label;
var O=this.getFont();
var N=O?this.__jr.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||x;
var P=this.getRich();
return P?Q.getHtmlSize(content,N,M):Q.getTextSize(content,N);
},_applyBuddy:function(V,W){if(W!=null){W.removeBinding(this.__jt);
this.__jt=null;
this.removeListenerById(this.__ju);
this.__ju=null;
}
if(V!=null){this.__jt=V.bind(c,this,c);
this.__ju=this.addListener(m,V.focus,V);
}},_applyRich:function(I){this.getContentElement().setRich(I);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(T,U){if(T&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(R,S){this.getContentElement().setValue(R);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(z,R,S);
}},destruct:function(){if(qx.core.Variant.isSet(k,a)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}if(this.__jt!=null){var K=this.getBuddy();

if(K!=null&&!K.isDisposed()){K.removeBinding(this.__jt);
}}this.__jr=this.__jt=null;
}});
})();
(function(){var f="value",e="Please use the getValue() method instead.",d="qx.html.Label",c="Please use the setValue() method instead.";
qx.Class.define(d,{extend:qx.html.Element,members:{__jx:null,_applyProperty:function(name,j){arguments.callee.base.call(this,name,j);

if(name==f){var k=this.getDomElement();
qx.bom.Label.setValue(k,j);
}},_createDomElement:function(){var b=this.__jx;
var a=qx.bom.Label.create(this._content,b);
return a;
},_copyData:function(l){return arguments.callee.base.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__jx==h){return;
}this.__jx=h;
return this;
},setValue:function(m){this._setProperty(f,m);
return this;
},getValue:function(){return this._getProperty(f);
},setContent:function(g){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.setValue(g);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return this.getValue();
}}});
})();
(function(){var j="qx.client",i="gecko",h="div",g="inherit",f="text",e="value",d="",c="hidden",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="nowrap",B="auto",A="0",z="ellipsis",y="normal",x="label",w="px",v="crop",u="end",t="100%",s="visible",q="qx.bom.Label",r="Please use the setValue() method instead.",o="opera",p="Please use the getValue() method instead.",m="block",n="none",k="-1000px",l="absolute";
qx.Class.define(q,{statics:{__jy:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jz:function(){var K=this.__jB(false);
document.body.insertBefore(K,document.body.firstChild);
return this._textElement=K;
},__jA:function(){var Q=this.__jB(true);
document.body.insertBefore(Q,document.body.firstChild);
return this._htmlElement=Q;
},__jB:function(F){var G=qx.bom.Element.create(h);
var H=G.style;
H.width=H.height=B;
H.left=H.top=k;
H.visibility=c;
H.position=l;
H.overflow=s;

if(F){H.whiteSpace=y;
}else{H.whiteSpace=a;

if(qx.core.Variant.isSet(j,i)){var I=document.createElementNS(b,x);
var H=I.style;
H.padding=A;

for(var J in this.__jy){H[J]=g;
}G.appendChild(I);
}}return G;
},__jC:function(bh){var bi={};

if(bh){bi.whiteSpace=y;
}else if(qx.core.Variant.isSet(j,i)){bi.display=m;
}else{bi.overflow=c;
bi.whiteSpace=a;
bi.textOverflow=z;
bi.userSelect=n;
if(qx.core.Variant.isSet(j,o)){bi.OTextOverflow=z;
}}return bi;
},create:function(content,V,W){if(!W){W=window;
}
if(V){var X=W.document.createElement(h);
X.useHtml=true;
}else if(qx.core.Variant.isSet(j,i)){var X=W.document.createElement(h);
var ba=W.document.createElementNS(b,x);
var Y=ba.style;
Y.cursor=g;
Y.color=g;
Y.overflow=c;
Y.maxWidth=t;
Y.padding=A;
for(var bb in this.__jy){ba.style[bb]=g;
}ba.setAttribute(v,u);
X.appendChild(ba);
}else{var X=W.document.createElement(h);
qx.bom.element.Style.setStyles(X,this.__jC(V));
}
if(content){this.setValue(X,content);
}return X;
},setValue:function(D,E){E=E||d;

if(D.useHtml){D.innerHTML=E;
}else if(qx.core.Variant.isSet(j,i)){D.firstChild.setAttribute(e,E);
}else{qx.bom.element.Attribute.set(D,f,E);
}},getValue:function(C){if(C.useHtml){return C.innerHTML;
}else if(qx.core.Variant.isSet(j,i)){return C.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(C,f);
}},getHtmlSize:function(content,R,S){var T=this._htmlElement||this.__jA();
T.style.width=S!==undefined?S+w:B;
T.innerHTML=content;
return this.__jD(T,R);
},getTextSize:function(N,O){var P=this._textElement||this.__jz();

if(qx.core.Variant.isSet(j,i)){P.firstChild.setAttribute(e,N);
}else{qx.bom.element.Attribute.set(P,f,N);
}return this.__jD(P,O);
},__jD:function(bc,bd){var be=this.__jy;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||d;
}var bg=qx.bom.element.Dimension.getSize(bc);

if(qx.core.Variant.isSet(j,i)){if(!qx.bom.client.Platform.WIN){bg.width++;
}}return bg;
},setContent:function(L,M){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.setValue(L,M);
},getContent:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.getValue(U);
}}});
})();
(function(){var g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.right)-Math.round(j.left);
}else{return i.offsetWidth;
}},"default":function(v){return v.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(l){if(l.getBoundingClientRect){var m=l.getBoundingClientRect();
return Math.round(m.bottom)-Math.round(m.top);
}else{return l.offsetHeight;
}},"default":function(h){return h.offsetHeight;
}}),getSize:function(n){return {width:this.getWidth(n),height:this.getHeight(n)};
},__jE:{visible:true,hidden:true},getContentWidth:function(o){var q=qx.bom.element.Style;
var r=qx.bom.element.Overflow.getX(o);
var s=parseInt(q.get(o,c),10);
var u=parseInt(q.get(o,d),10);

if(this.__jE[r]){return o.clientWidth-s-u;
}else{if(o.clientWidth>=o.scrollWidth){return Math.max(o.clientWidth,o.scrollWidth)-s-u;
}else{var t=o.scrollWidth-s;
var p=qx.bom.client.Engine;

if(p.NAME===g&&p.VERSION==6){t-=u;
}return t;
}}},getContentHeight:function(w){var y=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getY(w);
var B=parseInt(y.get(w,b),10);
var z=parseInt(y.get(w,a),10);

if(this.__jE[A]){return w.clientHeight-B-z;
}else{if(w.clientHeight>=w.scrollHeight){return Math.max(w.clientHeight,w.scrollHeight)-B-z;
}else{var C=w.scrollHeight-B;
var x=qx.bom.client.Engine;

if(x.NAME===g&&x.VERSION==6){C-=z;
}return C;
}}},getContentSize:function(k){return {width:this.getContentWidth(k),height:this.getContentHeight(k)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(e){return arguments.length==1;
},getRequired:function(){},setValid:function(d){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var j="Use 'getBlocker().getContentBlockerElement()' instead.",i="Use 'getBlocker().getBlockerElement()' instead.",h="_applyBlockerColor",g="Number",f="qx.ui.core.MBlocker",e="__qX",d="_applyBlockerOpacity",c="Color";
qx.Mixin.define(f,{construct:function(){this.__qX=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:c,init:null,nullable:true,apply:h,themeable:true},blockerOpacity:{check:g,init:1,apply:d,themeable:true}},members:{__qX:null,_applyBlockerColor:function(a,b){this.__qX.setColor(a);
},_applyBlockerOpacity:function(k,l){this.__qX.setOpacity(k);
},block:function(){this.__qX.block();
},isBlocked:function(){return this.__qX.isBlocked();
},unblock:function(){this.__qX.unblock();
},forceUnblock:function(){this.__qX.forceUnblock();
},blockContent:function(m){this.__qX.blockContent(m);
},isContentBlocked:function(){return this.__qX.isContentBlocked();
},unblockContent:function(){this.__qX.unblockContent();
},forceUnblockContent:function(){this.__qX.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.__qX.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__qX.getBlockerElement();
},getBlocker:function(){return this.__qX;
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__ra",b="__qY",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__qY:null,__ra:null,getWindowManager:function(){if(!this.__ra){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ra;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__ra){this.__ra.setDesktop(null);
}o.setDesktop(this);
this.__ra=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(l,m){this.getWindowManager().changeActiveWindow(l,m);

if(l){l.setActive(true);
}
if(m){m.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(k){if(qx.Class.isDefined(i)&&k instanceof qx.ui.window.Window){this._addWindow(k);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(j){if(qx.Class.isDefined(i)&&j instanceof qx.ui.window.Window){this._removeWindow(j);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__qY){this.__qY=[];
}return this.__qY;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__rb:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(q,r){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__rb;

if(!B){this.__rb=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,a,qx.bom.element.Cursor.compile(y).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(s,t){if(t===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(s===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__rb=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(o){this.__rc=qx.dom.Node.getWindow(o);
this.__rd=o;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__rc,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__rc:null,__rd:null,_createContainerElement:function(){var u=this.__rd;

if(qx.core.Variant.isSet(f,k)){if(!u.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var y=u.documentElement.style;
var v=u.body.style;
y.overflow=v.overflow=g;
y.padding=y.margin=v.padding=v.margin=l;
y.width=y.height=v.width=v.height=c;
var x=u.createElement(d);
u.body.appendChild(x);
var w=new qx.html.Root(x);
w.setStyle(m,b);
w.setAttribute(i,this.toHashCode());
return w;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var p=qx.bom.Viewport.getWidth(this.__rc);
var q=qx.bom.Viewport.getHeight(this.__rc);
return {minWidth:p,width:p,maxWidth:p,minHeight:q,height:q,maxHeight:q};
},_applyPadding:function(z,A,name){if(z&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,z,A,name);
},_applyDecorator:function(r,s){arguments.callee.base.call(this,r,s);

if(!r){return;
}var t=this.getDecoratorElement().getInsets();

if(t.left||t.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__rc=this.__rd=null;
}});
})();
(function(){var p="zIndex",o="px",n="keydown",m="deactivate",l="This method is not needed anymore.",k="resize",j="keyup",h="keypress",g="backgroundColor",f="_applyOpacity",C="__mq",B="opacity",A="interval",z="Tab",y="Color",x="qx.ui.root.Page",w="Use 'getBlockerElement' instead.",v="__mo",u="__mt",t="Use 'getContentBlockerElement' instead.",r="Number",s="qx.ui.core.Blocker",q="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(D){arguments.callee.base.call(this);
this._widget=D;
this._isPageRoot=(qx.Class.isDefined(x)&&D instanceof qx.ui.root.Page);

if(this._isPageRoot){D.addListener(k,this.__mu,this);
}this.__ml=[];
this.__mm=[];
this.__mn=[];
},properties:{color:{check:y,init:null,nullable:true,apply:q,themeable:true},opacity:{check:r,init:1,apply:f,themeable:true}},members:{__mo:null,__mp:0,__mq:null,__mn:null,__ml:null,__mm:null,__mr:null,__ms:0,__mt:null,_isPageRoot:false,_widget:null,__mu:function(e){var S=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:S.width,height:S.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:S.width,height:S.height});
}},_applyColor:function(N,O){var P=qx.theme.manager.Color.getInstance().resolve(N);
this.__mv(g,P);
},_applyOpacity:function(T,U){this.__mv(B,T);
},__mv:function(E,F){var G=[];
this.__mo&&G.push(this.__mo);
this.__mq&&G.push(this.__mq);

for(var i=0;i<G.length;i++){G[i].setStyle(E,F);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.__ms+=1;

if(this.__ms==1){this.__mr=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.__ms-=1;

if(this.__ms==0){this._widget.setAnonymous(this.__mr);
}},_backupActiveWidget:function(){var M=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__ml.push(M.getActive());
this.__mm.push(M.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var J=this.__ml.length;

if(J>0){var I=this.__ml[J-1];

if(I){qx.bom.Element.activate(I);
}this.__ml.pop();
}var H=this.__mm.length;

if(H>0){var I=this.__mm[H-1];

if(I){qx.bom.Element.focus(this.__mm[H-1]);
}this.__mm.pop();
}},__mw:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__mo){this.__mo=this.__mw();
this.__mo.setStyle(p,15);
this._widget.getContainerElement().add(this.__mo);
this.__mo.exclude();
}return this.__mo;
},block:function(){this.__mp++;

if(this.__mp<2){this._backupActiveWidget();
var V=this.getBlockerElement();
V.include();
V.activate();
V.addListener(m,this.__mB,this);
V.addListener(h,this.__mA,this);
V.addListener(n,this.__mA,this);
V.addListener(j,this.__mA,this);
}},isBlocked:function(){return this.__mp>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__mp--;

if(this.__mp<1){this.__mx();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__mp=0;
this.__mx();
},__mx:function(){this._restoreActiveWidget();
var a=this.getBlockerElement();
a.removeListener(m,this.__mB,this);
a.removeListener(h,this.__mA,this);
a.removeListener(n,this.__mA,this);
a.removeListener(j,this.__mA,this);
a.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__mq){this.__mq=this.__mw();
this._widget.getContentElement().add(this.__mq);
this.__mq.exclude();
}return this.__mq;
},blockContent:function(Q){var R=this.getContentBlockerElement();
R.setStyle(p,Q);
this.__mn.push(Q);

if(this.__mn.length<2){R.include();

if(this._isPageRoot){if(!this.__mt){this.__mt=new qx.event.Timer(300);
this.__mt.addListener(A,this.__mz,this);
}this.__mt.start();
this.__mz();
}}},isContentBlocked:function(){return this.__mn.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mn.pop();
var b=this.__mn[this.__mn.length-1];
var c=this.getContentBlockerElement();
c.setStyle(p,b);

if(this.__mn.length<1){this.__my();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mn=[];
var d=this.getContentBlockerElement();
d.setStyle(p,null);
this.__my();
},__my:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__mt.stop();
}},__mz:function(){var K=this._widget.getContainerElement().getDomElement();
var L=qx.dom.Node.getDocument(K);
this.getContentBlockerElement().setStyles({height:L.documentElement.scrollHeight+o,width:L.documentElement.scrollWidth+o});
},__mA:function(e){if(e.getKeyIdentifier()==z){e.stop();
}},__mB:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(k,this.__mu,this);
}this._disposeObjects(C,v,u);
this.__mr=this.__ml=this.__mm=this._widget=this.__mn=null;
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
}this.addListener(o,this.__mC,this);
this.addListener(p,this.__mC,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__mC:function(){var w=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,w,true);
}}});
})();
(function(){var ba="keypress",Y="__or",X="focusout",W="activate",V="Tab",U="singleton",T="deactivate",S="focusin",R="qx.ui.core.FocusHandler";
qx.Class.define(R,{extend:qx.core.Object,type:U,construct:function(){arguments.callee.base.call(this);
this.__or={};
},members:{__or:null,__os:null,__ot:null,__ou:null,connectTo:function(bi){bi.addListener(ba,this.__ov,this);
bi.addListener(S,this._onFocusIn,this,true);
bi.addListener(X,this._onFocusOut,this,true);
bi.addListener(W,this._onActivate,this,true);
bi.addListener(T,this._onDeactivate,this,true);
},addRoot:function(b){this.__or[b.$$hash]=b;
},removeRoot:function(bb){delete this.__or[bb.$$hash];
},getActiveWidget:function(){return this.__os;
},isActive:function(u){return this.__os==u;
},getFocusedWidget:function(){return this.__ot;
},isFocused:function(bh){return this.__ot==bh;
},isFocusRoot:function(a){return !!this.__or[a.$$hash];
},_onActivate:function(e){var D=e.getTarget();
this.__os=D;
var C=this.__ow(D);

if(C!=this.__ou){this.__ou=C;
}},_onDeactivate:function(e){var bf=e.getTarget();

if(this.__os==bf){this.__os=null;
}},_onFocusIn:function(e){var I=e.getTarget();

if(I!=this.__ot){this.__ot=I;
I.visualizeFocus();
}},_onFocusOut:function(e){var bg=e.getTarget();

if(bg==this.__ot){this.__ot=null;
bg.visualizeBlur();
}},__ov:function(e){if(e.getKeyIdentifier()!=V){return;
}
if(!this.__ou){return;
}e.stopPropagation();
e.preventDefault();
var P=this.__ot;

if(!e.isShiftPressed()){var Q=P?this.__oA(P):this.__oy();
}else{var Q=P?this.__oB(P):this.__oz();
}if(Q){Q.tabFocus();
}},__ow:function(J){var K=this.__or;

while(J){if(K[J.$$hash]){return J;
}J=J.getLayoutParent();
}return null;
},__ox:function(h,j){if(h===j){return 0;
}var m=h.getTabIndex()||0;
var k=j.getTabIndex()||0;

if(m!=k){return m-k;
}var r=h.getContainerElement().getDomElement();
var q=j.getContainerElement().getDomElement();
var p=qx.bom.element.Location;
var o=p.get(r);
var n=p.get(q);
if(o.top!=n.top){return o.top-n.top;
}if(o.left!=n.left){return o.left-n.left;
}var s=h.getZIndex();
var t=j.getZIndex();

if(s!=t){return s-t;
}return 0;
},__oy:function(){return this.__oE(this.__ou,null);
},__oz:function(){return this.__oF(this.__ou,null);
},__oA:function(L){var M=this.__ou;

if(M==L){return this.__oy();
}
while(L&&L.getAnonymous()){L=L.getLayoutParent();
}
if(L==null){return [];
}var N=[];
this.__oC(M,L,N);
N.sort(this.__ox);
var O=N.length;
return O>0?N[0]:this.__oy();
},__oB:function(E){var F=this.__ou;

if(F==E){return this.__oz();
}
while(E&&E.getAnonymous()){E=E.getLayoutParent();
}
if(E==null){return [];
}var G=[];
this.__oD(F,E,G);
G.sort(this.__ox);
var H=G.length;
return H>0?G[H-1]:this.__oz();
},__oC:function(parent,y,z){var A=parent.getLayoutChildren();
var B;

for(var i=0,l=A.length;i<l;i++){B=A[i];
if(!(B instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(B)&&B.isEnabled()&&B.isVisible()){if(B.isTabable()&&this.__ox(y,B)<0){z.push(B);
}this.__oC(B,y,z);
}}},__oD:function(parent,c,d){var f=parent.getLayoutChildren();
var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];
if(!(g instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(g)&&g.isEnabled()&&g.isVisible()){if(g.isTabable()&&this.__ox(c,g)>0){d.push(g);
}this.__oD(g,c,d);
}}},__oE:function(parent,v){var w=parent.getLayoutChildren();
var x;

for(var i=0,l=w.length;i<l;i++){x=w[i];
if(!(x instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(x)&&x.isEnabled()&&x.isVisible()){if(x.isTabable()){if(v==null||this.__ox(x,v)<0){v=x;
}}v=this.__oE(x,v);
}}return v;
},__oF:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__ox(be,bc)>0){bc=be;
}}bc=this.__oF(be,bc);
}}return bc;
}},destruct:function(){this._disposeMap(Y);
this.__ot=this.__os=this.__ou=null;
}});
})();
(function(){var n="qx.client",m="head",l="text/css",k="stylesheet",j="}",h='@import "',g="{",f='";',e="qx.bom.Stylesheet",d="link",c="style";
qx.Class.define(e,{statics:{includeFile:function(D,E){if(!E){E=document;
}var F=E.createElement(d);
F.type=l;
F.rel=k;
F.href=qx.util.ResourceManager.getInstance().toUri(D);
var G=E.getElementsByTagName(m)[0];
G.appendChild(F);
},createElement:qx.core.Variant.select(n,{"mshtml":function(ba){var bb=document.createStyleSheet();

if(ba){bb.cssText=ba;
}return bb;
},"default":function(o){var p=document.createElement(c);
p.type=l;

if(o){p.appendChild(document.createTextNode(o));
}document.getElementsByTagName(m)[0].appendChild(p);
return p.sheet;
}}),addRule:qx.core.Variant.select(n,{"mshtml":function(q,r,s){q.addRule(r,s);
},"default":function(t,u,v){t.insertRule(u+g+v+j,t.cssRules.length);
}}),removeRule:qx.core.Variant.select(n,{"mshtml":function(O,P){var Q=O.rules;
var R=Q.length;

for(var i=R-1;i>=0;--i){if(Q[i].selectorText==P){O.removeRule(i);
}}},"default":function(H,I){var J=H.cssRules;
var K=J.length;

for(var i=K-1;i>=0;--i){if(J[i].selectorText==I){H.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(n,{"mshtml":function(bc){var bd=bc.rules;
var be=bd.length;

for(var i=be-1;i>=0;i--){bc.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Variant.select(n,{"mshtml":function(bf,bg){bf.addImport(bg);
},"default":function(a,b){a.insertRule(h+b+f,a.cssRules.length);
}}),removeImport:qx.core.Variant.select(n,{"mshtml":function(V,W){var X=V.imports;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].href==W){V.removeImport(i);
}}},"default":function(z,A){var B=z.cssRules;
var C=B.length;

for(var i=C-1;i>=0;i--){if(B[i].href==A){z.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(n,{"mshtml":function(S){var T=S.imports;
var U=T.length;

for(var i=U-1;i>=0;i--){S.removeImport(i);
}},"default":function(w){var x=w.cssRules;
var y=x.length;

for(var i=y-1;i>=0;i--){if(x[i].type==x[i].IMPORT_RULE){w.deleteRule(i);
}}}})}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(c,d){var q=this._getLayoutChildren();
var g,p,n;
var s,top,e,f,j,h;
var o,m,r,k;

for(var i=0,l=q.length;i<l;i++){g=q[i];
p=g.getSizeHint();
n=g.getLayoutProperties();
o=g.getMarginTop();
m=g.getMarginRight();
r=g.getMarginBottom();
k=g.getMarginLeft();
s=n.left!=null?n.left:n.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*c/100);
}e=n.right!=null?n.right:n.edge;

if(qx.lang.Type.isString(e)){e=Math.round(parseFloat(e)*c/100);
}top=n.top!=null?n.top:n.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*d/100);
}f=n.bottom!=null?n.bottom:n.edge;

if(qx.lang.Type.isString(f)){f=Math.round(parseFloat(f)*d/100);
}if(s!=null&&e!=null){j=c-s-e-k-m;
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}s+=k;
}else{j=n.width;

if(j==null){j=p.width;
}else{j=Math.round(parseFloat(j)*c/100);
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}}
if(e!=null){s=c-j-e-m-k;
}else if(s==null){s=k;
}else{s+=k;
}}if(top!=null&&f!=null){h=d-top-f-o-r;
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}top+=o;
}else{h=n.height;

if(h==null){h=p.height;
}else{h=Math.round(parseFloat(h)*d/100);
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}}
if(f!=null){top=d-h-f-r-o;
}else if(top==null){top=o;
}else{top+=o;
}}g.renderLayout(s,top,j,h);
}},_computeSizeHint:function(){var I=0,H=0;
var F=0,D=0;
var B,A;
var z,x;
var t=this._getLayoutChildren();
var w,G,v;
var J,top,u,y;

for(var i=0,l=t.length;i<l;i++){w=t[i];
G=w.getLayoutProperties();
v=w.getSizeHint();
var E=w.getMarginLeft()+w.getMarginRight();
var C=w.getMarginTop()+w.getMarginBottom();
B=v.width+E;
A=v.minWidth+E;
J=G.left!=null?G.left:G.edge;

if(J&&typeof J===b){B+=J;
A+=J;
}u=G.right!=null?G.right:G.edge;

if(u&&typeof u===b){B+=u;
A+=u;
}I=Math.max(I,B);
H=Math.max(H,A);
z=v.height+C;
x=v.minHeight+C;
top=G.top!=null?G.top:G.edge;

if(top&&typeof top===b){z+=top;
x+=top;
}y=G.bottom!=null?G.bottom:G.edge;

if(y&&typeof y===b){z+=y;
x+=y;
}F=Math.max(F,z);
D=Math.max(D,x);
}return {width:I,minWidth:H,height:F,minHeight:D};
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
(function(){var c="inspector.components.IInspectorModel",b="qx.event.type.Event",a="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeObjects":b,"changeInspected":a},members:{getObjectRegistry:function(){return true;
},setObjectRegistry:function(f){return arguments.length==1;
},getApplication:function(){return true;
},setApplication:function(e){return arguments.length==1;
},getObjects:function(){return true;
},getInspected:function(){return true;
},setInspected:function(d){return arguments.length==1;
}}});
})();
(function(){var e="changeObjects",d="changeInspected",c="qx.event.type.Event",b="inspector.components.InspectorModel",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,implement:[inspector.components.IInspectorModel],construct:function(f){arguments.callee.base.call(this);
this.__Nx=f;
},events:{"changeObjects":c,"changeInspected":a},members:{__Ny:null,__Nx:null,__Nz:null,getObjectRegistry:function(){return this.__Ny;
},setObjectRegistry:function(g){if(this.__Ny!==g){this.__Ny=g;
this.fireEvent(e);
}},getApplication:function(){return this.__Nx;
},setApplication:function(h){if(this.__Nx!==h){this.__Nx=h;
this.fireEvent(e);
}},getObjects:function(){var l=[];

if(this.__Ny===null||this.__Nx===null){return l;
}var k=this.__Ny.getRegistry();
var i=this.__Nx.getExcludes();

for(var j in k){var m=k[j];

if(!qx.lang.Array.contains(i,m)){l.push(m);
}}return l;
},getInspected:function(){return this.__Nz;
},setInspected:function(n){if(this.__Nz!==n){var o=this.__Nz;
this.__Nz=n;
this.__Nx.select(n);
this.fireDataEvent(d,this.__Nz,o);
}}},destruct:function(){this.__Ny=this.constructor=this.__Nz=null;
}});
})();
(function(){var b="inspector.components.State",a="cookieKey";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__NA=[];
},members:{__NA:null,add:function(c,d){if(!qx.lang.Array.contains(this.__NA,c)){c.setUserData(a,d);
this.__NA.push(c);
this.__NB(c);
}},__NB:function(k){var l=k.getUserData("cookieKey");
k.addListener("open",function(){qx.bom.Cookie.set(l+"Open",true,7);
},this);
k.addListener("close",function(){qx.bom.Cookie.set(l+"Open",false,7);
},this);
k.addListener("move",function(event){qx.bom.Cookie.set(l+"Left",event.getData().left,7);
qx.bom.Cookie.set(l+"Top",event.getData().top,7);
},this);
k.addListener("resize",function(event){qx.bom.Cookie.set(l+"Width",event.getData().width,7);
qx.bom.Cookie.set(l+"Height",event.getData().height,7);
},this);
},restoreState:function(){for(var i=0;i<this.__NA.length;i++){this.__NC(this.__NA[i]);
}},__NC:function(e){var f=e.getUserData("cookieKey");
var open=qx.bom.Cookie.get(f+"Open");
var j=parseInt(qx.bom.Cookie.get(f+"Left"));
var top=parseInt(qx.bom.Cookie.get(f+"Top"));
var h=parseInt(qx.bom.Cookie.get(f+"Width"));
var g=parseInt(qx.bom.Cookie.get(f+"Height"));

if(open==="true"||open===null){e.open();

if(!isNaN(j)&&!isNaN(top)&&!isNaN(h)&&!isNaN(g)){e.setSizeAndPosition({top:top,left:j,width:h,height:g});
}}}},destruct:function(){this.__NA=null;
}});
})();
(function(){var i="=",h="",g=";path=",f=";domain=",e=";expires=Thu, 01-Jan-1970 00:00:01 GMT",d="qx.bom.Cookie",c=";expires=",b=";",a=";secure";
qx.Class.define(d,{statics:{get:function(j){var k=document.cookie.indexOf(j+i);
var m=k+j.length+1;

if((!k)&&(j!=document.cookie.substring(0,j.length))){return null;
}
if(k==-1){return null;
}var l=document.cookie.indexOf(b,m);

if(l==-1){l=document.cookie.length;
}return unescape(document.cookie.substring(m,l));
},set:function(r,s,t,u,v,w){var x=[r,i,escape(s)];

if(t){var y=new Date();
y.setTime(y.getTime());
x.push(c,new Date(y.getTime()+(t*1000*60*60*24)).toGMTString());
}
if(u){x.push(g,u);
}
if(v){x.push(f,v);
}
if(w){x.push(a);
}document.cookie=x.join(h);
},del:function(n,o,p){if(!qx.bom.Cookie.get(n)){return;
}var q=[n,i];

if(o){q.push(g,o);
}
if(p){q.push(f,p);
}q.push(e);
document.cookie=q.join(h);
}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(S,T,U){arguments.callee.base.call(this);

if(S){this.setSpacing(S);
}
if(T){this.setAlignY(T);
}
if(U){this.setSeparator(U);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__ig:null,__ih:null,__ii:null,__ij:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ik:function(){var t=this._getLayoutChildren();
var length=t.length;
var p=false;
var o=this.__ig&&this.__ig.length!=length&&this.__ih&&this.__ig;
var r;
var q=o?this.__ig:new Array(length);
var s=o?this.__ih:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.height!=null){q[i]=parseFloat(r.height)/100;
}
if(r.flex!=null){s[i]=r.flex;
p=true;
}else{s[i]=0;
}}if(!o){this.__ig=q;
this.__ih=s;
}this.__ii=p;
this.__ij=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(u,v){if(this._invalidChildrenCache){this.__ik();
}var C=this.__ij;
var length=C.length;
var M=qx.ui.layout.Util;
var L=this.getSpacing();
var P=this.getSeparator();

if(P){var z=M.computeVerticalSeparatorGaps(C,L,P);
}else{var z=M.computeVerticalGaps(C,L,true);
}var i,x,y,G;
var H=[];
var N=z;

for(i=0;i<length;i+=1){G=this.__ig[i];
y=G!=null?Math.floor((v-z)*G):C[i].getSizeHint().height;
H.push(y);
N+=y;
}if(this.__ii&&N!=v){var E={};
var K,O;

for(i=0;i<length;i+=1){K=this.__ih[i];

if(K>0){D=C[i].getSizeHint();
E[i]={min:D.minHeight,value:H[i],max:D.maxHeight,flex:K};
}}var A=M.computeFlexOffsets(E,v,N);

for(i in A){O=A[i].offset;
H[i]+=O;
N+=O;
}}var top=C[0].getMarginTop();
if(N<v&&this.getAlignY()!=m){top=v-N;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var D,R,I,y,F,J,B;
this._clearSeparators();
if(P){var Q=qx.theme.manager.Decoration.getInstance().resolve(P).getInsets();
var w=Q.top+Q.bottom;
}for(i=0;i<length;i+=1){x=C[i];
y=H[i];
D=x.getSizeHint();
J=x.getMarginLeft();
B=x.getMarginRight();
I=Math.max(D.minWidth,Math.min(u-J-B,D.maxWidth));
R=M.computeHorizontalAlignOffset(x.getAlignX()||this.getAlignX(),I,u,J,B);
if(i>0){if(P){top+=F+L;
this._renderSeparator(P,{top:top,left:0,height:w,width:u});
top+=w+L+x.getMarginTop();
}else{top+=M.collapseMargins(L,F,x.getMarginTop());
}}x.renderLayout(R,top,I,y);
top+=y;
F=x.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ik();
}var bc=qx.ui.layout.Util;
var bk=this.__ij;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__ih[i];
var Y=this.__ig[i];

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
}},destruct:function(){this.__ig=this.__ih=this.__ij=null;
}});
})();
(function(){var g="String",f="qx.ui.embed.AbstractIframe",e="name",d="",c="_applySource",b="qx.event.type.Event",a="_applyFrameName";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(j){arguments.callee.base.call(this);

if(j){this.setSource(j);
}},events:{"load":b},properties:{source:{check:g,apply:c,nullable:true},frameName:{check:g,init:d,apply:a}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(h,i){this._getIframeElement().setSource(h);
},_applyFrameName:function(k,l){this._getIframeElement().setAttribute(e,k);
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
(function(){var l="qx.client",k="mousedown",j="load",i="help",h="mouseup",g="losecapture",f="contextmenu",d="none",c="display",b="repeat",C="Boolean",B="px",A="url(",z=")",y="gecko",x="div",w="DOMNodeInserted",v="_applyNativeHelp",u="__Dx",t="/",r="appear",s="mshtml",p="block",q="qx.ui.embed.Iframe",n="iframe",o="absolute",m="qx/static/blank.gif";
qx.Class.define(q,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(H){if(H!=null){this.__Dw=H;
}arguments.callee.base.call(this,H);
qx.event.Registration.addListener(document.body,k,this.block,this,true);
qx.event.Registration.addListener(document.body,h,this.release,this,true);
qx.event.Registration.addListener(document.body,g,this.release,this,true);
this.__Dx=this._createBlockerElement();
this.getContainerElement().add(this.__Dx);

if(qx.core.Variant.isSet(l,y)){this.addListenerOnce(r,function(e){var G=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(G,w,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:n},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:C,init:false,apply:v}},members:{__Dw:null,__Dx:null,renderLayout:function(O,top,P,Q){arguments.callee.base.call(this,O,top,P,Q);
var S=B;
var R=this.getInsets();
this.__Dx.setStyles({"left":R.left+S,"top":R.top+S,"width":(P-R.left-R.right)+S,"height":(Q-R.top-R.bottom)+S});
},_createContentElement:function(){var D=new qx.html.Iframe(this.__Dw);
D.addListener(j,this._onIframeLoad,this);
return D;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var a=new qx.html.Element(x);
a.setStyles({"zIndex":20,"position":o,"display":d});
if(qx.core.Variant.isSet(l,s)){a.setStyles({backgroundImage:A+qx.util.ResourceManager.getInstance().toUri(m)+z,backgroundRepeat:b});
}return a;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(j);
},block:function(){this.__Dx.setStyle(c,p);
},release:function(){this.__Dx.setStyle(c,d);
},_applyNativeContextMenu:function(I,J){if(I!==false&&J!==false){return;
}var K=this.getDocument();

if(!K){return;
}
try{var L=K.documentElement;
}catch(e){return ;
}
if(J===false){qx.event.Registration.removeListener(L,f,this._onNativeContextMenu,this,true);
}
if(I===false){qx.event.Registration.addListener(L,f,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(l,{"mshtml":function(M,N){var document=this.getDocument();

if(!document){return;
}
try{if(N===false){qx.bom.Event.removeNativeListener(document,i,qx.lang.Function.returnFalse);
}
if(M===false){qx.bom.Event.addNativeListener(document,i,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var F=this.getContentElement().getDomElement();
var E=F.src;
if(E.charAt(E.length-1)==t){E=E.substring(0,E.length-1);
}
if(E!=this.getSource()){qx.bom.Iframe.getWindow(F).stop();
F.src=this.getSource();
}}},destruct:function(){this._disposeObjects(u);
qx.event.Registration.removeListener(document.body,k,this.block,this,true);
qx.event.Registration.removeListener(document.body,h,this.release,this,true);
qx.event.Registration.removeListener(document.body,g,this.release,this,true);
}});
})();
(function(){var f="source",e="name",d="qx.html.Iframe",c="qx.event.type.Event",b="iframe";
qx.Class.define(d,{extend:qx.html.Element,construct:function(a){arguments.callee.base.call(this,b);
this._setProperty(f,a);
},events:{"load":c},members:{_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==f){var i=this.getDomElement();
qx.bom.Iframe.setSource(i,h);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var j=this.getDomElement();

if(j){return qx.bom.Iframe.getWindow(j);
}else{return null;
}},getDocument:function(){var n=this.getDomElement();

if(n){return qx.bom.Iframe.getDocument(n);
}else{return null;
}},getBody:function(){var g=this.getDomElement();

if(g){return qx.bom.Iframe.getBody(g);
}else{return null;
}},setSource:function(k){this._setProperty(f,k);
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
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(i){qx.event.Registration.fireEvent(i,b);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===a;
},registerEvent:function(k,l,m){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var h="qx.client",g="webkit",f="body",e="iframe",d="qx.bom.Iframe";
qx.Class.define(d,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(i,j){var i=i?qx.lang.Object.clone(i):{};
var k=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var l in k){if(i[l]==null){i[l]=k[l];
}}return qx.bom.Element.create(e,i,j);
},getWindow:qx.core.Variant.select(h,{"mshtml|gecko":function(C){try{return C.contentWindow;
}catch(p){return null;
}},"default":function(z){try{var A=this.getDocument(z);
return A?A.defaultView:null;
}catch(q){return null;
}}}),getDocument:qx.core.Variant.select(h,{"mshtml":function(m){try{var n=this.getWindow(m);
return n?n.document:null;
}catch(u){return null;
}},"default":function(B){try{return B.contentDocument;
}catch(D){return null;
}}}),getBody:function(r){try{var s=this.getDocument(r);
return s?s.getElementsByTagName(f)[0]:null;
}catch(t){return null;
}},setSource:function(a,b){try{if(this.getWindow(a)&&qx.dom.Hierarchy.isRendered(a)){try{if(qx.core.Variant.isSet(h,g)&&qx.bom.client.Platform.MAC){var c=this.getContentWindow();

if(c){c.stop();
}}this.getWindow(a).location.replace(b);
}catch(v){a.src=b;
}}else{a.src=b;
}}catch(o){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(x){var y=this.getDocument(x);

try{if(y&&y.location){return y.location.href;
}}catch(w){}return null;
}}});
})();
(function(){var s="click",r="black",q="",p="red",o="inspector.components.Selector",n="qx.ui.root.Application",m="mousemove",l="_highlightOverlay",k="changeSelection",j="_catchClickLayer",g="solid",h="_highlightDecorator";
qx.Class.define(o,{extend:qx.core.Object,construct:function(t){arguments.callee.base.call(this);
this.setJSWindow(t);
},properties:{selection:{event:k,nullable:true}},members:{setJSWindow:function(N){this._iFrameWindow=N;
this._addedWidgets=[];
this._root=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
this._createCatchClickLayer();
this._createHighlightStuff();
this.setSelection(null);
},getAddedWidgets:function(){return this._addedWidgets;
},start:function(){this._catchClickLayer.show();
},end:function(){this._catchClickLayer.hide();
},highlightFor:function(C,D){if(C.classname==n){return;
}this._highlight(C);
if(this._highlightTimerId!=null){window.clearTimeout(this._highlightTimerId);
}var self=this;
self._highlightTimerId=window.setTimeout(function(){self._highlightOverlay.hide();
self._highlightTimerId=null;
},D);
},_createCatchClickLayer:function(){this._catchClickLayer=new this._iFrameWindow.qx.ui.core.Widget();
this._addedWidgets.push(this._catchClickLayer);
this._catchClickLayer.setBackgroundColor(r);
this._catchClickLayer.setOpacity(0.1);
this._catchClickLayer.setZIndex(1e6-1);
this._catchClickLayer.hide();
this._root.add(this._catchClickLayer,{left:0,top:0,right:0,bottom:0});
this._catchClickLayer.addListener(s,function(e){this._catchClickLayer.hide();
var I=e.getDocumentLeft();
var J=e.getDocumentTop();
var K=this._searchWidget(this._root,I,J);
this._highlightOverlay.hide();
this.setSelection(K);
},this);
this._catchClickLayer.addListener(m,function(e){var E=e.getDocumentLeft();
var F=e.getDocumentTop();
var G=this._searchWidget(this._root,E,F,q);
this._highlight(G);
},this);
},_createHighlightStuff:function(){this._highlightDecorator=new this._iFrameWindow.qx.ui.decoration.Single(2,g,p);
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
}}catch(H){}if(d.getContainerElement){var f=d.getContainerElement().getDomElement();
}else if(d.getDomElement){var f=d.getDomElement();
}else{return d;
}var c=this._getCoordinates(f);
if(c!=null){if(c.right>=x&&c.left<=x&&c.bottom>=y&&c.top<=y){b=this._searchWidget(d,x,y);
}}}return b;
},_getCoordinates:function(L){if(L==null){return null;
}var M={};
M.left=qx.bom.element.Location.getLeft(L);
M.right=qx.bom.element.Location.getRight(L);
M.top=qx.bom.element.Location.getTop(L);
M.bottom=qx.bom.element.Location.getBottom(L);
return M;
},_highlight:function(u){var A=null;

if(u.getContainerElement&&u.getContainerElement().getDomElement){A=u.getContainerElement().getDomElement();
}else if(u.getDomElement){A=u.getDomElement();
}if(A==null){this._highlightOverlay.hide();
return;
}var z=this._getCoordinates(A);
var B=z.left-2;
var v=z.right+2;
var top=z.top-2;
var w=z.bottom+2;
this._highlightOverlay.renderLayout(B,top,v-B,w-top);
this._highlightOverlay.show();
}},destruct:function(){this._iFrameWindow=this._addedWidgets=this._root=null;
this._disposeObjects(j,h,l);
}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__mF:false,_setAllowMenuOpenHover:function(q){this.__mF=q;
},_isAllowMenuOpenHover:function(){return this.__mF;
},_applySpacing:function(n,o){var p=this._getLayout();
n==null?p.resetSpacing():p.setSpacing(n);
},addSpacer:function(){var m=new qx.ui.core.Spacer;
this._add(m,{flex:1});
return m;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var s=this.getChildren();
var r=[];
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];

if(t instanceof qx.ui.menubar.Button){r.push(t);
}else if(t instanceof qx.ui.toolbar.Part){r.push.apply(r,t.getMenuButtons());
}}return r;
}}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){arguments.callee.base.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__jO:null,__jP:null,__jQ:null,__jR:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jS:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__jO&&this.__jO.length!=length&&this.__jP&&this.__jO;
var u;
var s=r?this.__jO:new Array(length);
var v=r?this.__jP:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__jO=s;
this.__jP=v;
}this.__jQ=t;
this.__jR=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__jS();
}var E=this.__jR;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__jO[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__jQ&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__jP[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=m){U=x-F;

if(this.getAlignX()===k){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jS();
}var bc=qx.ui.layout.Util;
var bk=this.__jR;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__jP[i];
var X=this.__jO[i];

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
}},destruct:function(){this.__jO=this.__jP=this.__jR=null;
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
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jj:null,__jk:false,__jl:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__jk){this.__jk=false;
}else{this.__jk=true;
o.execute(this);
}}this.fireEvent(n);
},__jm:function(e){if(this.__jk){this.__jk=false;
return;
}this.__jk=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__jl);
}
if(p!=null){this.__jl=p.addListener(n,this.__jm,this);
}var t=this.__jj;

if(t==null){this.__jj=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__jj=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){arguments.callee.base.call(this,r,s);

if(t!=null){this.setCommand(t);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var p=this.hasState(o);
var q=this.hasState(n);

if(p){this.removeState(o);
}
if(q){this.removeState(n);
}else{this.addState(m);

if(p){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(u,v,w){arguments.callee.base.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(n,o){if(o){o.removeListener(j,this._onMenuChange,this);
o.resetOpener();
}
if(n){n.addListener(j,this._onMenuChange,this);
n.setOpener(this);
n.removeState(h);
n.removeState(f);
}},open:function(q){var r=this.getMenu();

if(r){qx.ui.menu.Manager.getInstance().hideAll();
r.setOpener(this);
r.open();
if(q){var s=r.getSelectables()[0];

if(s){r.setSelectedButton(s);
}}}},_onMenuChange:function(e){var m=this.getMenu();

if(m.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var p=this.getMenu();

if(p){if(!p.isVisible()){this.open();
}else{p.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var t=this.getMenu();

if(t){if(!t.isVisible()){this.open();
}else{t.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var k="pressed",j="hovered",i="inherit",h="qx.ui.menubar.Button",g="keydown",f="menubar-button",d="keyup";
qx.Class.define(h,{extend:qx.ui.form.MenuButton,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(g,this._onKeyDown);
this.removeListener(d,this._onKeyUp);
},properties:{appearance:{refine:true,init:f},show:{refine:true,init:i},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){arguments.callee.base.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(k);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(k);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var m=this.getMenu();

if(m&&m.isVisible()&&!this.hasState(k)){this.addState(k);
}},_onMouseOver:function(e){this.addState(j);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var bf="keypress",be="interval",bd="keydown",bc="mousedown",bb="keyup",ba="blur",Y="Enter",X="__lY",W="Up",V="__ma",P="Escape",U="qx.ui.menu.Manager",S="Left",O="Down",N="Right",R="__lX",Q="singleton",T="Space";
qx.Class.define(U,{type:Q,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lX=[];
var L=document.body;
var M=qx.event.Registration;
M.addListener(window.document.documentElement,bc,this._onMouseDown,this,true);
M.addListener(L,bd,this._onKeyUpDown,this,true);
M.addListener(L,bb,this._onKeyUpDown,this,true);
M.addListener(L,bf,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,ba,this.hideAll,this);
this.__lY=new qx.event.Timer;
this.__lY.addListener(be,this._onOpenInterval,this);
this.__ma=new qx.event.Timer;
this.__ma.addListener(be,this._onCloseInterval,this);
},members:{__mb:null,__mc:null,__lY:null,__ma:null,__lX:null,_getChild:function(bm,bn,bo,bp){var bq=bm.getChildren();
var length=bq.length;
var br;

for(var i=bn;i<length&&i>=0;i+=bo){br=bq[i];

if(br.isEnabled()&&!br.isAnonymous()){return br;
}}
if(bp){i=i==length?0:length-1;

for(;i!=bn;i+=bo){br=bq[i];

if(br.isEnabled()&&!br.isAnonymous()){return br;
}}}return null;
},_isInMenu:function(bx){while(bx){if(bx instanceof qx.ui.menu.Menu){return true;
}bx=bx.getLayoutParent();
}return false;
},_getMenuButton:function(K){while(K){if(K instanceof qx.ui.menu.AbstractButton){return K;
}K=K.getLayoutParent();
}return null;
},add:function(bu){{};
var bv=this.__lX;
bv.push(bu);
bu.setZIndex(1e6+bv.length);
},remove:function(bs){{};
var bt=this.__lX;

if(bt){qx.lang.Array.remove(bt,bs);
}},hideAll:function(){var a=this.__lX;

if(a){for(var i=a.length-1;i>=0;i--){a[i].exclude();
}}},getActiveMenu:function(){var bD=this.__lX;
return bD.length>0?bD[bD.length-1]:null;
},scheduleOpen:function(z){this.cancelClose(z);
if(z.isVisible()){if(this.__mb){this.cancelOpen(this.__mb);
}}else if(this.__mb!=z){this.__mb=z;
this.__lY.restartWith(z.getOpenInterval());
}},scheduleClose:function(bB){this.cancelOpen(bB);
if(!bB.isVisible()){if(this.__mc){this.cancelClose(this.__mc);
}}else if(this.__mc!=bB){this.__mc=bB;
this.__ma.restartWith(bB.getCloseInterval());
}},cancelOpen:function(bg){if(this.__mb==bg){this.__lY.stop();
this.__mb=null;
}},cancelClose:function(bw){if(this.__mc==bw){this.__ma.stop();
this.__mc=null;
}},_onOpenInterval:function(e){this.__lY.stop();
this.__mb.open();
this.__mb=null;
},_onCloseInterval:function(e){this.__ma.stop();
this.__mc.exclude();
this.__mc=null;
},_onMouseDown:function(e){var bC=e.getTarget();
bC=qx.ui.core.Widget.getWidgetByElement(bC);
if(bC==null){this.hideAll();
return;
}if(bC.getMenu&&bC.getMenu()&&bC.getMenu().isVisible()){return;
}if(this.__lX.length>0&&!this._isInMenu(bC)){this.hideAll();
}},__md:{"Enter":1,"Space":1},__me:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var o=this.getActiveMenu();

if(!o){return;
}var p=e.getKeyIdentifier();

if(this.__me[p]||(this.__md[p]&&o.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bh=this.getActiveMenu();

if(!bh){return;
}var bi=e.getKeyIdentifier();
var bk=this.__me[bi];
var bj=this.__md[bi];

if(bk){switch(bi){case W:this._onKeyPressUp(bh);
break;
case O:this._onKeyPressDown(bh);
break;
case S:this._onKeyPressLeft(bh);
break;
case N:this._onKeyPressRight(bh);
break;
case P:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bj){var bl=bh.getSelectedButton();

if(bl){switch(bi){case Y:this._onKeyPressEnter(bh,bl,e);
break;
case T:this._onKeyPressSpace(bh,bl,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(j){var k=j.getSelectedButton();
var l=j.getChildren();
var n=k?j.indexOf(k)-1:l.length-1;
var m=this._getChild(j,n,-1,true);
if(m){j.setSelectedButton(m);
}else{j.resetSelectedButton();
}},_onKeyPressDown:function(b){var c=b.getSelectedButton();
var f=c?b.indexOf(c)+1:0;
var d=this._getChild(b,f,1,true);
if(d){b.setSelectedButton(d);
}else{b.resetSelectedButton();
}},_onKeyPressLeft:function(A){var F=A.getOpener();

if(!F){return;
}if(F instanceof qx.ui.menu.Button){var C=F.getLayoutParent();
C.resetOpenedButton();
C.setSelectedButton(F);
}else if(F instanceof qx.ui.menubar.Button){var E=F.getMenuBar().getMenuButtons();
var B=E.indexOf(F);
if(B===-1){return;
}var G=null;
var length=E.length;

for(var i=1;i<=length;i++){var D=E[(B-i+length)%length];

if(D.isEnabled()){G=D;
break;
}}
if(G&&G!=F){G.open(true);
}}},_onKeyPressRight:function(q){var s=q.getSelectedButton();
if(s){var r=s.getMenu();

if(r){q.setOpenedButton(s);
var y=this._getChild(r,0,1);

if(y){r.setSelectedButton(y);
}return;
}}else if(!q.getOpenedButton()){var y=this._getChild(q,0,1);

if(y){q.setSelectedButton(y);

if(y.getMenu()){q.setOpenedButton(y);
}return;
}}var w=q.getOpener();
if(w instanceof qx.ui.menu.Button&&s){while(w){w=w.getLayoutParent();

if(w instanceof qx.ui.menu.Menu){w=w.getOpener();

if(w instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!w){return;
}}if(w instanceof qx.ui.menubar.Button){var v=w.getMenuBar().getMenuButtons();
var t=v.indexOf(w);
if(t===-1){return;
}var x=null;
var length=v.length;

for(var i=1;i<=length;i++){var u=v[(t+i)%length];

if(u.isEnabled()){x=u;
break;
}}
if(x&&x!=w){x.open(true);
}}},_onKeyPressEnter:function(H,I,e){if(I.hasListener(bf)){var J=e.clone();
J.setBubbles(false);
J.setTarget(I);
I.dispatchEvent(J);
}this.hideAll();
},_onKeyPressSpace:function(by,bz,e){if(bz.hasListener(bf)){var bA=e.clone();
bA.setBubbles(false);
bA.setTarget(bz);
bz.dispatchEvent(bA);
}}},destruct:function(){var h=qx.event.Registration;
var g=document.body;
h.removeListener(window.document.documentElement,bc,this._onMouseDown,this,true);
h.removeListener(g,bd,this._onKeyUpDown,this,true);
h.removeListener(g,bb,this._onKeyUpDown,this,true);
h.removeListener(g,bf,this._onKeyPress,this,true);
this._disposeObjects(X,V);
this._disposeArray(R);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__mf:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__mf(c);
},hasChildren:function(){return this.__mf(f);
},add:function(r,s){return this.__mf(j,r,s);
},remove:function(t){return this.__mf(a,t);
},removeAll:function(){return this.__mf(d);
},indexOf:function(u){return this.__mf(l,u);
},addAt:function(v,w,x){this.__mf(g,v,w,x);
},addBefore:function(y,z,A){this.__mf(i,y,z,A);
},addAfter:function(C,D,E){this.__mf(k,C,D,E);
},removeAt:function(B){this.__mf(e,B);
}}});
})();
(function(){var Q="slidebar",P="Integer",O="resize",N="qx.ui.core.Widget",M="selected",L="visible",K="Boolean",J="mouseout",I="excluded",H="menu",bg="_applySelectedButton",bf="_applyOpenInterval",be="_applySpacingY",bd="_blocker",bc="_applyCloseInterval",bb="_applyBlockerColor",ba="_applyIconColumnWidth",Y="mouseover",X="qx.ui.menu.Menu",W="Color",U="Number",V="_applyOpenedButton",S="_applySpacingX",T="_applyBlockerOpacity",R="_applyArrowColumnWidth";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(Y,this._onMouseOver);
this.addListener(J,this._onMouseOut);
this.addListener(O,this._onResize,this);
B.addListener(O,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:H},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:I},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:P,apply:S,init:0,themeable:true},spacingY:{check:P,apply:be,init:0,themeable:true},iconColumnWidth:{check:P,init:0,themeable:true,apply:ba},arrowColumnWidth:{check:P,init:0,themeable:true,apply:R},blockerColor:{check:W,init:null,nullable:true,apply:bb,themeable:true},blockerOpacity:{check:U,init:1,apply:T,themeable:true},selectedButton:{check:N,nullable:true,apply:bg},openedButton:{check:N,nullable:true,apply:V},opener:{check:N,nullable:true},openInterval:{check:P,themeable:true,init:250,apply:bf},closeInterval:{check:P,themeable:true,init:250,apply:bc},blockBackground:{check:K,themeable:true,init:false}},members:{__mg:null,__mh:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mj();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mj();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(E){this.placeToPoint(E);
this.__mj();
this.show();
this._placementTarget=E;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bj=[];
var bk=this.getChildren();

for(var i=0;i<bk.length;i++){if(bk[i].isEnabled()){bj.push(bk[i]);
}}return bj;
},_applyIconColumnWidth:function(o,p){this._getMenuLayout().setIconColumnWidth(o);
},_applyArrowColumnWidth:function(F,G){this._getMenuLayout().setArrowColumnWidth(F);
},_applySpacingX:function(C,D){this._getMenuLayout().setColumnSpacing(C);
},_applySpacingY:function(bq,br){this._getMenuLayout().setSpacing(bq);
},_applyVisibility:function(s,t){arguments.callee.base.call(this,s,t);
var u=qx.ui.menu.Manager.getInstance();

if(s===L){u.add(this);
var v=this.getParentMenu();

if(v){v.setOpenedButton(this.getOpener());
}}else if(t===L){u.remove(this);
var v=this.getParentMenu();

if(v&&v.getOpenedButton()==this.getOpener()){v.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mi();
},__mi:function(){if(this.isVisible()){if(this.getBlockBackground()){var r=this.getZIndex();
this._blocker.blockContent(r-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var w=this.getOpener();

if(!w||!(w instanceof qx.ui.menu.AbstractButton)){return null;
}
while(w&&!(w instanceof qx.ui.menu.Menu)){w=w.getLayoutParent();
}return w;
},_applySelectedButton:function(a,b){if(b){b.removeState(M);
}
if(a){a.addState(M);
}},_applyOpenedButton:function(k,l){if(l){l.getMenu().exclude();
}
if(k){k.getMenu().open();
}},_applyBlockerColor:function(m,n){this._blocker.setColor(m);
},_applyBlockerOpacity:function(c,d){this._blocker.setOpacity(c);
},getChildrenContainer:function(){return this.getChildControl(Q,true)||this;
},_createChildControlImpl:function(bl){var bm;

switch(bl){case Q:var bm=new qx.ui.menu.MenuSlideBar();
var bo=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bn=bm.getLayout();
bm.setLayout(bo);
bn.dispose();
var bp=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bp.length;i++){bm.add(bp[i]);
}this.removeListener(O,this._onResize,this);
bm.getChildrenContainer().addListener(O,this._onResize,this);
this._add(bm);
break;
}return bm||arguments.callee.base.call(this,bl);
},_getMenuLayout:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mj:function(){var z=this._getMenuBounds();

if(!z){this.addListenerOnce(O,this.__mj,this);
return;
}var y=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var A=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(z.height+top);
this.moveTo(A,0);
});
}else if(top+z.height>y){this._assertSlideBar(function(){this.setHeight(y-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(q){if(this.hasChildControl(Q)){return q.call(this);
}this.__mh=q;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(Q);

if(this.__mh){this.__mh.call(this);
delete this.__mh;
}},_onResize:function(){if(this.isVisible()){var x=this._placementTarget;

if(!x){return;
}else if(x instanceof qx.ui.core.Widget){this.placeToWidget(x);
}else if(x.top!==undefined){this.placeToPoint(x);
}else{throw new Error("Unknown target: "+x);
}this.__mj();
}},_onMouseOver:function(e){var g=qx.ui.menu.Manager.getInstance();
g.cancelClose(this);
var h=e.getTarget();

if(h.isEnabled()&&h instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(h);
var f=h.getMenu&&h.getMenu();

if(f){f.setOpener(h);
g.scheduleOpen(f);
this.__mg=f;
}else{var j=this.getOpenedButton();

if(j){g.scheduleClose(j.getMenu());
}
if(this.__mg){g.cancelOpen(this.__mg);
this.__mg=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bh=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bi=this.getOpenedButton();
bi?this.setSelectedButton(bi):this.resetSelectedButton();
if(bi){bh.cancelClose(bi.getMenu());
}if(this.__mg){bh.cancelOpen(this.__mg);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(O,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bd);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__mk:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__mk=[0,0,0,0];
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
},getColumnSizes:function(){return this.__mk||null;
}},destruct:function(){this.__mk=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(D){var E;

switch(D){case t:E=new qx.ui.basic.Image;
E.setAnonymous(true);
this._add(E,{column:0});
break;
case s:E=new qx.ui.basic.Label;
E.setAnonymous(true);
this._add(E,{column:1});
break;
case q:E=new qx.ui.basic.Label;
E.setAnonymous(true);
this._add(E,{column:2});
break;
case r:E=new qx.ui.basic.Image;
E.setAnonymous(true);
this._add(E,{column:3});
break;
}return E||arguments.callee.base.call(this,D);
},_forwardStates:{selected:1},getChildrenSizes:function(){var G=0,H=0,I=0,M=0;

if(this._isChildControlVisible(t)){var N=this.getChildControl(t);
G=N.getMarginLeft()+N.getSizeHint().width+N.getMarginRight();
}
if(this._isChildControlVisible(s)){var K=this.getChildControl(s);
H=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(q)){var J=this.getChildControl(q);
I=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}
if(this._isChildControlVisible(r)){var L=this.getChildControl(r);
M=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}return [G,H,I,M];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var A=e.getData();

if(qx.core.Variant.isSet(o,m)){var y=e.getOldData();

if(!y){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!A){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var z=A!=null?A.toString():h;
this.getChildControl(q).setValue(z);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var F=this.getCommand();

if(F!=null){this.getChildControl(q).setValue(F.toString());
}},"off":null}),_applyIcon:function(u,v){if(u){this._showChildControl(t).setSource(u);
}else{this._excludeChildControl(t);
}},_applyLabel:function(B,C){if(B){this._showChildControl(s).setValue(B);
}else{this._excludeChildControl(s);
}},_applyMenu:function(w,x){if(x){x.resetOpener();
x.removeState(n);
}
if(w){this._showChildControl(r);
w.setOpener(this);
w.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var c="middle",b="qx.ui.menu.ButtonLayout",a="left";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(j,k){var v=this._getLayoutChildren();
var u;
var n;
var o=[];

for(var i=0,l=v.length;i<l;i++){u=v[i];
n=u.getLayoutProperties().column;
o[n]=u;
}var t=this.__mD(v[0]);
var w=t.getColumnSizes();
var q=t.getSpacingX();
var p=qx.lang.Array.sum(w)+q*(w.length-1);

if(p<j){w[1]+=j-p;
}var x=0,top=0;
var r=qx.ui.layout.Util;

for(var i=0,l=w.length;i<l;i++){u=o[i];

if(u){var m=u.getSizeHint();
var top=r.computeVerticalAlignOffset(u.getAlignY()||c,m.height,k,0,0);
var s=r.computeHorizontalAlignOffset(u.getAlignX()||a,m.width,w[i],u.getMarginLeft(),u.getMarginRight());
u.renderLayout(x+s,top,m.width,m.height);
}x+=w[i]+q;
}},__mD:function(d){while(!(d instanceof qx.ui.menu.Menu)){d=d.getLayoutParent();
}return d;
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
(function(){var s="horizontal",r="scrollpane",q="vertical",p="button-backward",o="button-forward",n="content",m="execute",l="qx.ui.container.SlideBar",k="scrollY",j="removeChildWidget",f="scrollX",i="_applyOrientation",h="mousewheel",d="Integer",c="slidebar",g="update";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(t){arguments.callee.base.call(this);
var u=this.getChildControl(r);
this._add(u,{flex:1});

if(t!=null){this.setOrientation(t);
}else{this.initOrientation();
}this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:c},orientation:{check:[s,q],init:s,apply:i},scrollStep:{check:d,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(n);
},_createChildControlImpl:function(v){var w;

switch(v){case o:w=new qx.ui.form.RepeatButton;
w.addListener(m,this._onExecuteForward,this);
w.setFocusable(false);
this._addAt(w,2);
break;
case p:w=new qx.ui.form.RepeatButton;
w.addListener(m,this._onExecuteBackward,this);
w.setFocusable(false);
this._addAt(w,0);
break;
case n:w=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){w.addListener(j,this._onRemoveChild,this);
}this.getChildControl(r).add(w);
break;
case r:w=new qx.ui.core.scroll.ScrollPane();
w.addListener(g,this._onResize,this);
w.addListener(f,this._onScroll,this);
w.addListener(k,this._onScroll,this);
break;
}return w||arguments.callee.base.call(this,v);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(D){var E=this.getChildControl(r);

if(this.getOrientation()===s){E.scrollByX(D);
}else{E.scrollByY(D);
}},scrollTo:function(a){var b=this.getChildControl(r);

if(this.getOrientation()===s){b.scrollToX(a);
}else{b.scrollToY(a);
}},_applyOrientation:function(F,G){var J=[this.getLayout(),this._getLayout()];
var I=this.getChildControl(o);
var H=this.getChildControl(p);
if(G==q){I.removeState(q);
H.removeState(q);
I.addState(s);
H.addState(s);
}else if(G==s){I.removeState(s);
H.removeState(s);
I.addState(q);
H.addState(q);
}
if(F==s){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(J[0]){J[0].dispose();
}
if(J[1]){J[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(r).getChildren()[0];

if(!content){return;
}var x=this.getInnerSize();
var z=content.getBounds();
var y=(this.getOrientation()===s)?z.width>x.width:z.height>x.height;

if(y){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(r).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var B=this.getChildControl(r);

if(this.getOrientation()===s){var A=B.getScrollX();
var C=B.getScrollMaxX();
}else{var A=B.getScrollY();
var C=B.getScrollMaxY();
}this.getChildControl(p).setEnabled(A>0);
this.getChildControl(o).setEnabled(A<C);
},_showArrows:function(){this._showChildControl(o);
this._showChildControl(p);
},_hideArrows:function(){this._excludeChildControl(o);
this._excludeChildControl(p);
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="__jn",d="qx.ui.form.RepeatButton",a="release",c="interval",b="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__jn=new qx.event.AcceleratingTimer();
this.__jn.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__jo:null,__jn:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__jp();
}this.removeState(m);
this.addState(n);
}},release:function(o){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__jo){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__jq();
},_applyEnabled:function(p,q){arguments.callee.base.call(this,p,q);

if(!p){this.removeState(n);
this.removeState(m);
this.__jq();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__jn.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__jn.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__jp();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__jo){this.execute();
}}this.__jq();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__jo){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__jq();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__jp();
}},_onInterval:function(e){this.__jo=true;
this.fireEvent(b);
},__jp:function(){this.fireEvent(g);
this.__jo=false;
this.__jn.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__jq:function(){this.fireEvent(a);
this.__jn.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="Integer",d="interval",c="__jM",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jM=new qx.event.Timer(this.getInterval());
this.__jM.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__jM:null,__jN:null,start:function(){this.__jM.setInterval(this.getFirstInterval());
this.__jM.start();
},stop:function(){this.__jM.stop();
this.__jN=null;
},_onInterval:function(){this.__jM.stop();

if(this.__jN==null){this.__jN=this.getInterval();
}this.__jN=Math.max(this.getMinimum(),this.__jN-this.getDecrease());
this.__jM.setInterval(this.__jN);
this.__jM.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var H="resize",G="scrollY",F="update",E="scrollX",D="_applyScrollX",C="_applyScrollY",B="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",A="appear",z="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",w="qx.event.type.Event",u="qx.ui.core.scroll.ScrollPane",v="scroll";
qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(H,this._onUpdate);
var j=this.getContentElement();
j.addListener(v,this._onScroll,this);
j.addListener(A,this._onAppear,this);
},events:{update:w},properties:{scrollX:{check:B,apply:D,event:E,init:0},scrollY:{check:z,apply:C,event:G,init:0}},members:{add:function(s){var t=this._getChildren()[0];

if(t){this._remove(t);
t.removeListener(H,this._onUpdate,this);
}
if(s){this._add(s);
s.addListener(H,this._onUpdate,this);
}},remove:function(N){if(N){this._remove(N);
N.removeListener(H,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(F);
},_onScroll:function(e){var b=this.getContentElement();
this.setScrollX(b.getScrollX());
this.setScrollY(b.getScrollY());
},_onAppear:function(e){var n=this.getContentElement();
var k=this.getScrollX();
var l=n.getScrollX();

if(k!=l){n.scrollToX(k);
}var o=this.getScrollY();
var m=n.getScrollY();

if(o!=m){n.scrollToY(o);
}},getItemTop:function(i){var top=0;

do{top+=i.getBounds().top;
i=i.getLayoutParent();
}while(i&&i!==this);
return top;
},getItemBottom:function(f){return this.getItemTop(f)+f.getBounds().height;
},getItemLeft:function(c){var d=0;
var parent;

do{d+=c.getBounds().left;
parent=c.getLayoutParent();

if(parent){d+=parent.getInsets().left;
}c=parent;
}while(c&&c!==this);
return d;
},getItemRight:function(M){return this.getItemLeft(M)+M.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var h=this.getInnerSize();
var g=this.getScrollSize();

if(h&&g){return Math.max(0,g.width-h.width);
}return 0;
},getScrollMaxY:function(){var r=this.getInnerSize();
var q=this.getScrollSize();

if(r&&q){return Math.max(0,q.height-r.height);
}return 0;
},scrollToX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollX(I);
},scrollToY:function(K){var L=this.getScrollMaxY();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollY(K);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(p){this.getContentElement().scrollToX(p);
},_applyScrollY:function(a){this.getContentElement().scrollToY(a);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__mE",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__mE=new qx.event.AcceleratingTimer();
this.__mE.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__mE:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mE.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__mE.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mE.stop();
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
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(q){var r;

switch(q){case k:r=new qx.ui.basic.Image();
r.setAlignY(g);
this._add(r);
break;
case m:r=new qx.ui.toolbar.PartContainer;
this._add(r);
break;
}return r||arguments.callee.base.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(n,o){var p=this.getChildControl(m).getLayout();
n==null?p.resetSpacing():p.setSpacing(n);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var t=this.getChildren();
var s=[];
var u;

for(var i=0,l=t.length;i<l;i++){u=t[i];

if(u instanceof qx.ui.menubar.Button){s.push(u);
}}return s;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){this.addListener(i,this.__nU,this,true);
this.addListener(q,this.__nV,this);
this.addListener(x,this.__nX,this);
this.addListener(s,this.__nY,this);
this.addListener(o,this.__nW,this);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,__nP:function(){var K=this.__nK;

if(!K){K=this.__nK=new qx.ui.core.Widget();
K.setAppearance(p);
K.exclude();
qx.core.Init.getApplication().getRoot().add(K);
}return K;
},__nQ:function(){var B=this.__nO;
var A=this.__nP();
A.setUserBounds(B.left,B.top,B.width,B.height);
A.show();
A.setZIndex(this.getZIndex()+1);
},__nR:function(e){var E=this.__nL;
var F=this.getSizeHint();
var H=this.__nO;
var D=H.width;
var G=H.height;
var J=H.left;
var top=H.top;
var I;

if((E&this.RESIZE_TOP)||(E&this.RESIZE_BOTTOM)){I=e.getDocumentTop()-this.__nN;

if(E&this.RESIZE_TOP){G-=I;
}else{G+=I;
}
if(G<F.minHeight){G=F.minHeight;
}else if(G>F.maxHeight){G=F.maxHeight;
}
if(E&this.RESIZE_TOP){top+=H.height-G;
}}
if((E&this.RESIZE_LEFT)||(E&this.RESIZE_RIGHT)){I=e.getDocumentLeft()-this.__nM;

if(E&this.RESIZE_LEFT){D-=I;
}else{D+=I;
}
if(D<F.minWidth){D=F.minWidth;
}else if(D>F.maxWidth){D=F.maxWidth;
}
if(E&this.RESIZE_LEFT){J+=H.width-D;
}}return {viewportLeft:J,viewportTop:top,parentLeft:H.bounds.left+J-H.left,parentTop:H.bounds.top+top-H.top,width:D,height:G};
},__nS:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__nT:function(e){var T=this.getContentLocation();
var R=this.getResizeSensitivity();
var V=e.getDocumentLeft();
var U=e.getDocumentTop();
var S=0;

if(this.getResizableTop()&&Math.abs(T.top-U)<R){S+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(T.bottom-U)<R){S+=this.RESIZE_BOTTOM;
}
if(this.getResizableLeft()&&Math.abs(T.left-V)<R){S+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(T.right-V)<R){S+=this.RESIZE_RIGHT;
}this.__nL=S;
},__nU:function(e){if(!this.__nL){return;
}this.addState(j);
this.__nM=e.getDocumentLeft();
this.__nN=e.getDocumentTop();
var location=this.getContainerLocation();
var Q=this.getBounds();
this.__nO={top:location.top,left:location.left,width:Q.width,height:Q.height,bounds:qx.lang.Object.clone(Q)};
if(this.getUseResizeFrame()){this.__nQ();
}this.capture();
e.stop();
},__nV:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this.__nP().exclude();
}var C=this.__nR(e);
this.setWidth(C.width);
this.setHeight(C.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:C.parentLeft,top:C.parentTop});
}this.__nL=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__nW:function(e){if(!this.__nL){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this.__nP().exclude();
}},__nX:function(e){if(this.hasState(j)){var O=this.__nR(e);
if(this.getUseResizeFrame()){var M=this.__nP();
M.setUserBounds(O.viewportLeft,O.viewportTop,O.width,O.height);
}else{this.setWidth(O.width);
this.setHeight(O.height);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:O.parentLeft,top:O.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)){this.__nT(e);
var P=this.__nL;
var N=this.getApplicationRoot();

if(P){var L=this.__nS[P];
this.setCursor(L);
N.setGlobalCursor(L);
}else if(this.getCursor()){this.resetCursor();
N.resetGlobalCursor();
}}},__nY:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__nK!=null&&!qx.core.ObjectRegistry.inShutDown){this.__nK.destroy();
this.__nK=null;
}}});
})();
(function(){var n="move",m="Boolean",l="mouseup",k="mousedown",j="losecapture",i="__oa",h="qx.ui.core.MMovable",g="__ob",f="mousemove",d="maximized",c="move-frame";
qx.Mixin.define(h,{properties:{movable:{check:m,init:true},useMoveFrame:{check:m,init:false}},members:{__oa:null,__ob:null,__oc:null,__od:null,__oe:null,__of:null,__og:null,__oh:false,__oi:null,__oj:0,_activateMoveHandle:function(u){if(this.__oa){throw new Error("The move handle could not be redefined!");
}this.__oa=u;
u.addListener(k,this._onMoveMouseDown,this);
u.addListener(l,this._onMoveMouseUp,this);
u.addListener(f,this._onMoveMouseMove,this);
u.addListener(j,this.__on,this);
},__ok:function(){var o=this.__ob;

if(!o){o=this.__ob=new qx.ui.core.Widget();
o.setAppearance(c);
o.exclude();
qx.core.Init.getApplication().getRoot().add(o);
}return o;
},__ol:function(){var location=this.getContainerLocation();
var b=this.getBounds();
var a=this.__ok();
a.setUserBounds(location.left,location.top,b.width,b.height);
a.show();
a.setZIndex(this.getZIndex()+1);
},__om:function(e){var w=this.__oc;
var z=Math.max(w.left,Math.min(w.right,e.getDocumentLeft()));
var y=Math.max(w.top,Math.min(w.bottom,e.getDocumentTop()));
var v=this.__od+z;
var x=this.__oe+y;
return {viewportLeft:v,viewportTop:x,parentLeft:v-this.__of,parentTop:x-this.__og};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(d)){return;
}var parent=this.getLayoutParent();
var q=parent.getContentLocation();
var r=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__oh=true;
this.__oi=parent.getBlockerColor();
this.__oj=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
}}this.__oc={left:q.left,top:q.top,right:q.left+r.width,bottom:q.top+r.height};
var p=this.getContainerLocation();
this.__of=q.left;
this.__og=q.top;
this.__od=p.left-e.getDocumentLeft();
this.__oe=p.top-e.getDocumentTop();
this.addState(n);
this.__oa.capture();
if(this.getUseMoveFrame()){this.__ol();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(n)){return;
}var s=this.__om(e);

if(this.getUseMoveFrame()){this.__ok().setDomPosition(s.viewportLeft,s.viewportTop);
}else{this.setDomPosition(s.parentLeft,s.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(n)){return;
}this.removeState(n);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__oh){parent.unblockContent();
parent.setBlockerColor(this.__oi);
parent.setBlockerOpacity(this.__oj);
this.__oi=null;
this.__oj=0;
}}this.__oa.releaseCapture();
var t=this.__om(e);
this.setLayoutProperties({left:t.parentLeft,top:t.parentTop});
if(this.getUseMoveFrame()){this.__ok().exclude();
}e.stopPropagation();
},__on:function(e){if(!this.hasState(n)){return;
}this.removeState(n);
if(this.getUseMoveFrame()){this.__ok().exclude();
}}},destruct:function(){this._disposeObjects(g,i);
this.__oc=null;
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__im:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__in:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__in[name];
s[t]();
}else{var u=this.__im[name];
s[u](q);
}}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(f){this.assertInterface(f,qx.ui.window.IDesktop);
},changeActiveWindow:function(b,c){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(d){this.assertInstance(d,qx.ui.window.Window);
}}});
})();
(function(){var b="qx.ui.window.Manager",a="__oo";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__oo:null,setDesktop:function(o){this.__oo=o;
this.updateStack();
},getDesktop:function(){return this.__oo;
},changeActiveWindow:function(c,d){if(c){this.bringToFront(c);
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__oo.forceUnblockContent();
var j=this.__oo.getWindows();
var n=this._minZIndex-1;
var m=false;
var k,h=null;

for(var i=0,l=j.length;i<l;i++){k=j[i];

if(!k.isVisible()){continue;
}n+=2;
k.setZIndex(n);
if(k.getModal()){this.__oo.blockContent(n-1);
}m=m||k.isActive();
h=k;
}
if(!m){this.__oo.setActiveWindow(h);
}},bringToFront:function(e){var f=this.__oo.getWindows();
var g=qx.lang.Array.remove(f,e);

if(g){f.push(e);
this.updateStack();
}},sendToBack:function(p){var q=this.__oo.getWindows();
var r=qx.lang.Array.remove(q,p);

if(r){q.unshift(p);
this.updateStack();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var o="Boolean",n="qx.event.type.Event",m="captionbar",l="maximize-button",k="_applyCaptionBarChange",j="restore-button",i="minimize-button",h="close-button",g="maximized",f="execute",V="pane",U="title",T="icon",S="statusbar-text",R="statusbar",Q="normal",P="String",O="active",N="beforeClose",M="beforeMinimize",v="mousedown",w="changeStatus",t="changeIcon",u="excluded",r="_applyCaption",s="_applyActive",p="beforeRestore",q="minimize",x="dblclick",y="changeModal",E="_applyShowStatusbar",D="_applyStatus",G="qx.ui.window.Window",F="changeCaption",I="_applyIcon",H="focusout",A="beforeMaximize",L="maximize",K="restore",J="window",z="close",B="changeActive",C="minimized";
qx.Class.define(G,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(bo,bp){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(m);
this._createChildControl(V);
if(bp!=null){this.setIcon(bp);
}
if(bo!=null){this.setCaption(bo);
}this._updateCaptionBar();
this.addListener(v,this._onWindowMouseDown,this,true);
this.addListener(H,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":n,"close":n,"beforeMinimize":n,"minimize":n,"beforeMaximize":n,"maximize":n,"beforeRestore":n,"restore":n},properties:{appearance:{refine:true,init:J},visibility:{refine:true,init:u},focusable:{refine:true,init:true},active:{check:o,init:false,apply:s,event:B},modal:{check:o,init:false,event:y},caption:{apply:r,event:F,nullable:true},icon:{check:P,nullable:true,apply:I,event:t,themeable:true},status:{check:P,nullable:true,apply:D,event:w},showClose:{check:o,init:true,apply:k,themeable:true},showMaximize:{check:o,init:true,apply:k,themeable:true},showMinimize:{check:o,init:true,apply:k,themeable:true},allowClose:{check:o,init:true,apply:k},allowMaximize:{check:o,init:true,apply:k},allowMinimize:{check:o,init:true,apply:k},showStatusbar:{check:o,init:false,apply:E}},members:{__op:null,__oq:null,getChildrenContainer:function(){return this.getChildControl(V);
},_forwardStates:{active:true,maximized:true},setLayoutParent:function(parent){{};
arguments.callee.base.call(this,parent);
},_createChildControlImpl:function(bk){var bl;

switch(bk){case R:bl=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(bl);
bl.add(this.getChildControl(S));
break;
case S:bl=new qx.ui.basic.Label();
bl.setValue(this.getStatus());
break;
case V:bl=new qx.ui.container.Composite();
this._add(bl,{flex:1});
break;
case m:var bn=new qx.ui.layout.Grid();
bn.setRowFlex(0,1);
bn.setColumnFlex(1,1);
bl=new qx.ui.container.Composite(bn);
this._add(bl);
bl.addListener(x,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(bl);
break;
case T:bl=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(m).add(bl,{row:0,column:0});
break;
case U:bl=new qx.ui.basic.Label(this.getCaption());
bl.setWidth(0);
bl.setAllowGrowX(true);
var bm=this.getChildControl(m);
bm.add(bl,{row:0,column:1});
break;
case i:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(f,this._onMinimizeButtonClick,this);
this.getChildControl(m).add(bl,{row:0,column:2});
break;
case j:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(f,this._onRestoreButtonClick,this);
this.getChildControl(m).add(bl,{row:0,column:3});
break;
case l:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(f,this._onMaximizeButtonClick,this);
this.getChildControl(m).add(bl,{row:0,column:4});
break;
case h:bl=new qx.ui.form.Button();
bl.setFocusable(false);
bl.addListener(f,this._onCloseButtonClick,this);
this.getChildControl(m).add(bl,{row:0,column:6});
break;
}return bl||arguments.callee.base.call(this,bk);
},_updateCaptionBar:function(){var c;

if(this.getIcon()){this._showChildControl(T);
}else{this._excludeChildControl(T);
}
if(this.getCaption()){this._showChildControl(U);
}else{this._excludeChildControl(U);
}
if(this.getShowMinimize()){this._showChildControl(i);
c=this.getChildControl(i);
this.getAllowMinimize()?c.resetEnabled():c.setEnabled(false);
}else{this._excludeChildControl(i);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(j);
this._excludeChildControl(l);
}else{this._showChildControl(l);
this._excludeChildControl(j);
}c=this.getChildControl(l);
this.getAllowMaximize()?c.resetEnabled():c.setEnabled(false);
}else{this._excludeChildControl(l);
this._excludeChildControl(j);
}
if(this.getShowClose()){this._showChildControl(h);
c=this.getChildControl(h);
this.getAllowClose()?c.resetEnabled():c.setEnabled(false);
}else{this._excludeChildControl(h);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(N,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(z);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bi=parent.getBounds();

if(bi){var bj=this.getSizeHint();
var bh=Math.round((bi.width-bj.width)/2);
var top=Math.round((bi.height-bj.height)/2);

if(top<0){top=0;
}this.moveTo(bh,top);
return;
}}{};
},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(A,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bc=this.getLayoutProperties();
this.__oq=bc.left===undefined?0:bc.left;
this.__op=bc.top===undefined?0:bc.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(g);
this._updateCaptionBar();
this.fireEvent(L);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(M,qx.event.type.Event,[false,true])){var d=this.getLayoutProperties();
this.__oq=d.left===undefined?0:d.left;
this.__op=d.top===undefined?0:d.top;
this.removeState(g);
this.hide();
this.fireEvent(q);
}},restore:function(){if(this.getMode()===Q){return;
}
if(this.fireNonBubblingEvent(p,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var be=this.__oq;
var top=this.__op;
this.setLayoutProperties({edge:null,left:be,top:top});
this.removeState(g);
this._updateCaptionBar();
this.fireEvent(K);
}},moveTo:function(W,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:W,top:top});
},isMaximized:function(){return this.hasState(g);
},getMode:function(){if(!this.isVisible()){return C;
}else{if(this.isMaximized()){return g;
}else{return Q;
}}},_applyActive:function(bq,br){if(br){this.removeState(O);
}else{this.addState(O);
}},_getContentPaddingTarget:function(){return this.getChildControl(V);
},_applyShowStatusbar:function(ba,bb){if(ba){this._showChildControl(R);
}else{this._excludeChildControl(R);
}},_applyCaptionBarChange:function(X,Y){this._updateCaptionBar();
},_applyStatus:function(bs,bt){var bu=this.getChildControl(S,true);

if(bu){bu.setValue(bs);
}},_applyCaption:function(a,b){this.getChildControl(U).setValue(a);
this._updateCaptionBar();
},_applyIcon:function(bf,bg){this.getChildControl(T).setSource(bf);
this._updateCaptionBar();
},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bd=e.getRelatedTarget();

if(bd!=null&&!qx.ui.core.Widget.contains(this,bd)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(i).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(j).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(l).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(h).reset();
}}});
})();
(function(){var f="open",e="__ND",d="objectsWindow",c="qx.event.type.Event",b="inspector.objects2.Window",a="__NE";
qx.Class.define(b,{extend:qx.ui.window.Window,construct:function(name,g){arguments.callee.base.call(this,name);
this.setLayout(new qx.ui.layout.Canvas());
this.setAppearance(d);
this.syncAppearance();
this.setInitSizeAndPosition();
this.__ND=new inspector.objects2.Model(g);
this.__NE=new inspector.objects2.Controller(this.__ND);
this.add(this.__NE.getView(),{edge:0});
},events:{"open":c},members:{__ND:null,__NE:null,setSizeAndPosition:function(h){this.moveTo(h.left,h.top);
this.setWidth(h.width);
this.setHeight(h.height);
},setInitSizeAndPosition:function(){var j=parseInt(qx.bom.Viewport.getWidth()-this.getWidth());
var i=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(j,30);
this.setHeight(i);
},open:function(){arguments.callee.base.call(this);
this.fireEvent(f);
}},destruct:function(){this._disposeObjects(e,a);
}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var O="left",N="top",M="_applyLayoutChange",L="hAlign",K="flex",J="vAlign",I="Integer",H="minWidth",G="width",F="minHeight",C="qx.ui.layout.Grid",E="height",D="maxHeight",B="maxWidth";
qx.Class.define(C,{extend:qx.ui.layout.Abstract,construct:function(bD,bE){arguments.callee.base.call(this);
this.__jT=[];
this.__jU=[];

if(bD){this.setSpacingX(bD);
}
if(bE){this.setSpacingY(bE);
}},properties:{spacingX:{check:I,init:0,apply:M},spacingY:{check:I,init:0,apply:M}},members:{__jV:null,__jT:null,__jU:null,__jW:null,__jX:null,__jY:null,__ka:null,__kb:null,__kc:null,verifyLayoutProperty:null,__kd:function(){var df=[];
var de=[];
var dg=[];
var dc=-1;
var db=-1;
var di=this._getLayoutChildren();

for(var i=0,l=di.length;i<l;i++){var dd=di[i];
var dh=dd.getLayoutProperties();
var dj=dh.row;
var da=dh.column;
dh.colSpan=dh.colSpan||1;
dh.rowSpan=dh.rowSpan||1;
if(dj==null||da==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+dd+"' must be defined!");
}
if(df[dj]&&df[dj][da]){throw new Error("Cannot add widget '"+dd+"'!. "+"There is already a widget '"+df[dj][da]+"' in this cell ("+dj+", "+da+")");
}
for(var x=da;x<da+dh.colSpan;x++){for(var y=dj;y<dj+dh.rowSpan;y++){if(df[y]==undefined){df[y]=[];
}df[y][x]=dd;
db=Math.max(db,x);
dc=Math.max(dc,y);
}}
if(dh.rowSpan>1){dg.push(dd);
}
if(dh.colSpan>1){de.push(dd);
}}for(var y=0;y<=dc;y++){if(df[y]==undefined){df[y]=[];
}}this.__jV=df;
this.__jW=de;
this.__jX=dg;
this.__jY=dc;
this.__ka=db;
this.__kb=null;
this.__kc=null;
delete this._invalidChildrenCache;
},_setRowData:function(bS,bT,bU){var bV=this.__jT[bS];

if(!bV){this.__jT[bS]={};
this.__jT[bS][bT]=bU;
}else{bV[bT]=bU;
}},_setColumnData:function(P,Q,R){var S=this.__jU[P];

if(!S){this.__jU[P]={};
this.__jU[P][Q]=R;
}else{S[Q]=R;
}},setSpacing:function(dv){this.setSpacingY(dv);
this.setSpacingX(dv);
return this;
},setColumnAlign:function(dA,dB,dC){{};
this._setColumnData(dA,L,dB);
this._setColumnData(dA,J,dC);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bn){var bo=this.__jU[bn]||{};
return {vAlign:bo.vAlign||N,hAlign:bo.hAlign||O};
},setRowAlign:function(dD,dE,dF){{};
this._setRowData(dD,L,dE);
this._setRowData(dD,J,dF);
this._applyLayoutChange();
return this;
},getRowAlign:function(bl){var bm=this.__jT[bl]||{};
return {vAlign:bm.vAlign||N,hAlign:bm.hAlign||O};
},getCellWidget:function(X,Y){if(this._invalidChildrenCache){this.__kd();
}var X=this.__jV[X]||{};
return X[Y]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__kd();
}return this.__jY+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__kd();
}return this.__ka+1;
},getCellAlign:function(dm,dn){var du=N;
var ds=O;
var dt=this.__jT[dm];
var dq=this.__jU[dn];
var dp=this.__jV[dm][dn];

if(dp){var dr={vAlign:dp.getAlignY(),hAlign:dp.getAlignX()};
}else{dr={};
}if(dr.vAlign){du=dr.vAlign;
}else if(dt&&dt.vAlign){du=dt.vAlign;
}else if(dq&&dq.vAlign){du=dq.vAlign;
}if(dr.hAlign){ds=dr.hAlign;
}else if(dq&&dq.hAlign){ds=dq.hAlign;
}else if(dt&&dt.hAlign){ds=dt.hAlign;
}return {vAlign:du,hAlign:ds};
},setColumnFlex:function(dw,dx){this._setColumnData(dw,K,dx);
this._applyLayoutChange();
return this;
},getColumnFlex:function(T){var U=this.__jU[T]||{};
return U.flex!==undefined?U.flex:0;
},setRowFlex:function(dG,dH){this._setRowData(dG,K,dH);
this._applyLayoutChange();
return this;
},getRowFlex:function(k){var m=this.__jT[k]||{};
var n=m.flex!==undefined?m.flex:0;
return n;
},setColumnMaxWidth:function(bQ,bR){this._setColumnData(bQ,B,bR);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(dK){var dL=this.__jU[dK]||{};
return dL.maxWidth!==undefined?dL.maxWidth:Infinity;
},setColumnWidth:function(a,b){this._setColumnData(a,G,b);
this._applyLayoutChange();
return this;
},getColumnWidth:function(g){var h=this.__jU[g]||{};
return h.width!==undefined?h.width:null;
},setColumnMinWidth:function(bF,bG){this._setColumnData(bF,H,bG);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(e){var f=this.__jU[e]||{};
return f.minWidth||0;
},setRowMaxHeight:function(dk,dl){this._setRowData(dk,D,dl);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(dy){var dz=this.__jT[dy]||{};
return dz.maxHeight||Infinity;
},setRowHeight:function(c,d){this._setRowData(c,E,d);
this._applyLayoutChange();
return this;
},getRowHeight:function(bH){var bI=this.__jT[bH]||{};
return bI.height!==undefined?bI.height:null;
},setRowMinHeight:function(dI,dJ){this._setRowData(dI,F,dJ);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(V){var W=this.__jT[V]||{};
return W.minHeight||0;
},__ke:function(bW){var cb=bW.getSizeHint();
var ca=bW.getMarginLeft()+bW.getMarginRight();
var bY=bW.getMarginTop()+bW.getMarginBottom();
var bX={height:cb.height+bY,width:cb.width+ca,minHeight:cb.minHeight+bY,minWidth:cb.minWidth+ca,maxHeight:cb.maxHeight+bY,maxWidth:cb.maxWidth+ca};
return bX;
},_fixHeightsRowSpan:function(dM){var dX=this.getSpacingY();

for(var i=0,l=this.__jX.length;i<l;i++){var dP=this.__jX[i];
var dR=this.__ke(dP);
var dS=dP.getLayoutProperties();
var dO=dS.row;
var dV=dX*(dS.rowSpan-1);
var dN=dV;
var dU={};

for(var j=0;j<dS.rowSpan;j++){var ea=dS.row+j;
var dQ=dM[ea];
var dY=this.getRowFlex(ea);

if(dY>0){dU[ea]={min:dQ.minHeight,value:dQ.height,max:dQ.maxHeight,flex:dY};
}dV+=dQ.height;
dN+=dQ.minHeight;
}if(dV<dR.height){var dW=qx.ui.layout.Util.computeFlexOffsets(dU,dR.height,dV);

for(var j=0;j<dS.rowSpan;j++){var dT=dW[dO+j]?dW[dO+j].offset:0;
dM[dO+j].height+=dT;
}}if(dN<dR.minHeight){var dW=qx.ui.layout.Util.computeFlexOffsets(dU,dR.minHeight,dN);

for(var j=0;j<dS.rowSpan;j++){var dT=dW[dO+j]?dW[dO+j].offset:0;
dM[dO+j].minHeight+=dT;
}}}},_fixWidthsColSpan:function(bp){var bt=this.getSpacingX();

for(var i=0,l=this.__jW.length;i<l;i++){var bq=this.__jW[i];
var bs=this.__ke(bq);
var bv=bq.getLayoutProperties();
var br=bv.column;
var bB=bt*(bv.colSpan-1);
var bu=bB;
var bw={};
var by;

for(var j=0;j<bv.colSpan;j++){var bC=bv.column+j;
var bA=bp[bC];
var bz=this.getColumnFlex(bC);
if(bz>0){bw[bC]={min:bA.minWidth,value:bA.width,max:bA.maxWidth,flex:bz};
}bB+=bA.width;
bu+=bA.minWidth;
}if(bB<bs.width){var bx=qx.ui.layout.Util.computeFlexOffsets(bw,bs.width,bB);

for(var j=0;j<bv.colSpan;j++){by=bx[br+j]?bx[br+j].offset:0;
bp[br+j].width+=by;
}}if(bu<bs.minWidth){var bx=qx.ui.layout.Util.computeFlexOffsets(bw,bs.minWidth,bu);

for(var j=0;j<bv.colSpan;j++){by=bx[br+j]?bx[br+j].offset:0;
bp[br+j].minWidth+=by;
}}}},_getRowHeights:function(){if(this.__kb!=null){return this.__kb;
}var bj=[];
var bc=this.__jY;
var bb=this.__ka;

for(var bk=0;bk<=bc;bk++){var bd=0;
var bf=0;
var be=0;

for(var bi=0;bi<=bb;bi++){var ba=this.__jV[bk][bi];

if(!ba){continue;
}var bg=ba.getLayoutProperties().rowSpan||0;

if(bg>1){continue;
}var bh=this.__ke(ba);

if(this.getRowFlex(bk)>0){bd=Math.max(bd,bh.minHeight);
}else{bd=Math.max(bd,bh.height);
}bf=Math.max(bf,bh.height);
}var bd=Math.max(bd,this.getRowMinHeight(bk));
var be=this.getRowMaxHeight(bk);

if(this.getRowHeight(bk)!==null){var bf=this.getRowHeight(bk);
}else{var bf=Math.max(bd,Math.min(bf,be));
}bj[bk]={minHeight:bd,height:bf,maxHeight:be};
}
if(this.__jX.length>0){this._fixHeightsRowSpan(bj);
}this.__kb=bj;
return bj;
},_getColWidths:function(){if(this.__kc!=null){return this.__kc;
}var s=[];
var p=this.__ka;
var r=this.__jY;

for(var z=0;z<=p;z++){var v=0;
var u=0;
var q=Infinity;

for(var A=0;A<=r;A++){var o=this.__jV[A][z];

if(!o){continue;
}var t=o.getLayoutProperties().colSpan||0;

if(t>1){continue;
}var w=this.__ke(o);

if(this.getColumnFlex(z)>0){u=Math.max(u,w.minWidth);
}else{u=Math.max(u,w.width);
}v=Math.max(v,w.width);
}var u=Math.max(u,this.getColumnMinWidth(z));
var q=this.getColumnMaxWidth(z);

if(this.getColumnWidth(z)!==null){var v=this.getColumnWidth(z);
}else{var v=Math.max(u,Math.min(v,q));
}s[z]={minWidth:u,width:v,maxWidth:q};
}
if(this.__jW.length>0){this._fixWidthsColSpan(s);
}this.__kc=s;
return s;
},_getColumnFlexOffsets:function(bJ){var bK=this.getSizeHint();
var bO=bJ-bK.width;

if(bO==0){return {};
}var bM=this._getColWidths();
var bL={};

for(var i=0,l=bM.length;i<l;i++){var bP=bM[i];
var bN=this.getColumnFlex(i);

if((bN<=0)||(bP.width==bP.maxWidth&&bO>0)||(bP.width==bP.minWidth&&bO<0)){continue;
}bL[i]={min:bP.minWidth,value:bP.width,max:bP.maxWidth,flex:bN};
}return qx.ui.layout.Util.computeFlexOffsets(bL,bJ,bK.width);
},_getRowFlexOffsets:function(cH){var cI=this.getSizeHint();
var cL=cH-cI.height;

if(cL==0){return {};
}var cM=this._getRowHeights();
var cJ={};

for(var i=0,l=cM.length;i<l;i++){var cN=cM[i];
var cK=this.getRowFlex(i);

if((cK<=0)||(cN.height==cN.maxHeight&&cL>0)||(cN.height==cN.minHeight&&cL<0)){continue;
}cJ[i]={min:cN.minHeight,value:cN.height,max:cN.maxHeight,flex:cK};
}return qx.ui.layout.Util.computeFlexOffsets(cJ,cH,cI.height);
},renderLayout:function(cc,cd){if(this._invalidChildrenCache){this.__kd();
}var cr=qx.ui.layout.Util;
var cf=this.getSpacingX();
var cl=this.getSpacingY();
var cw=this._getColWidths();
var cv=this._getColumnFlexOffsets(cc);
var cg=[];
var cy=this.__ka;
var ce=this.__jY;
var cx;

for(var cz=0;cz<=cy;cz++){cx=cv[cz]?cv[cz].offset:0;
cg[cz]=cw[cz].width+cx;
}var co=this._getRowHeights();
var cq=this._getRowFlexOffsets(cd);
var cF=[];

for(var cm=0;cm<=ce;cm++){cx=cq[cm]?cq[cm].offset:0;
cF[cm]=co[cm].height+cx;
}var cG=0;

for(var cz=0;cz<=cy;cz++){var top=0;

for(var cm=0;cm<=ce;cm++){var ct=this.__jV[cm][cz];
if(!ct){top+=cF[cm]+cl;
continue;
}var ch=ct.getLayoutProperties();
if(ch.row!==cm||ch.column!==cz){top+=cF[cm]+cl;
continue;
}var cE=cf*(ch.colSpan-1);

for(var i=0;i<ch.colSpan;i++){cE+=cg[cz+i];
}var cu=cl*(ch.rowSpan-1);

for(var i=0;i<ch.rowSpan;i++){cu+=cF[cm+i];
}var ci=ct.getSizeHint();
var cC=ct.getMarginTop();
var cs=ct.getMarginLeft();
var cp=ct.getMarginBottom();
var ck=ct.getMarginRight();
var cn=Math.max(ci.minWidth,Math.min(cE-cs-ck,ci.maxWidth));
var cD=Math.max(ci.minHeight,Math.min(cu-cC-cp,ci.maxHeight));
var cA=this.getCellAlign(cm,cz);
var cB=cG+cr.computeHorizontalAlignOffset(cA.hAlign,cn,cE,cs,ck);
var cj=top+cr.computeVerticalAlignOffset(cA.vAlign,cD,cu,cC,cp);
ct.renderLayout(cB,cj,cn,cD);
top+=cF[cm]+cl;
}cG+=cg[cz]+cf;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__kc=null;
this.__kb=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kd();
}var cS=this._getColWidths();
var cU=0,cV=0;

for(var i=0,l=cS.length;i<l;i++){var cW=cS[i];

if(this.getColumnFlex(i)>0){cU+=cW.minWidth;
}else{cU+=cW.width;
}cV+=cW.width;
}var cX=this._getRowHeights();
var cQ=0,cT=0;

for(var i=0,l=cX.length;i<l;i++){var cY=cX[i];

if(this.getRowFlex(i)>0){cQ+=cY.minHeight;
}else{cQ+=cY.height;
}cT+=cY.height;
}var cP=this.getSpacingX()*(cS.length-1);
var cO=this.getSpacingY()*(cX.length-1);
var cR={minWidth:cU+cP,width:cV+cP,minHeight:cQ+cO,height:cT+cO};
return cR;
}},destruct:function(){this.__jV=this.__jT=this.__jU=this.__jW=this.__jX=this.__kc=this.__kb=null;
}});
})();
(function(){var e="changeObjects",d="changeInspected",c="qx.event.type.Event",b="inspector.objects2.Model",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,construct:function(f){arguments.callee.base.call(this);
this.__NF=f;
f.addListener(e,this.__NG,this);
f.addListener(d,this.__NH,this);
},events:{"changeObjects":c,"changeInspected":a},members:{__NF:null,getObjects:function(){return this.__NF.getObjects();
},getObjectFromHashCode:function(g){var h=this.__NF.getObjectRegistry();
return h.fromHashCode(g);
},getInspected:function(){return this.__NF.getInspected();
},setInspected:function(i){this.__NF.setInspected(i);
},__NG:function(event){this.fireEvent("changeObjects");
},__NH:function(event){this.fireDataEvent("changeInspected",event.getData(),event.getOldData());
}},destruct:function(){this.__NF.removeListener(e,this.__NG,this);
this.__NF.removeListener(d,this.__NH,this);
this.__NF=null;
}});
})();
(function(){var d="changeInspected",c="changeObjects",b="inspector.objects2.Controller",a="appear";
qx.Class.define(b,{extend:qx.core.Object,construct:function(g){arguments.callee.base.call(this);
{};
this.__NI=g;
this.__NI.addListener(d,this.__NR,this);
this.__NI.addListener(c,this.__NS,this);
this.__NJ=new inspector.objects2.View(this);
this.__NK=qx.util.TimerManager.getInstance();
this.__NJ.addListenerOnce(a,function(event){this.__NJ.selectObject(this.__NI.getInspected());
},this);
this.__NP();
},members:{__NJ:null,__NI:null,__NL:null,__NM:null,__NK:null,__NN:null,__NO:false,getView:function(){return this.__NJ;
},reload:function(){this.__NO=true;
this.__NU().reload();
this.__NT().reload();
this.__NO=false;
this.__NJ.selectObject(this.__NI.getInspected());
},showByHash:function(){this.__NJ.setByHashActive(true);
this.__NJ.setByCountActive(false);
this.__NJ.setTableModel(this.__NT());
this.__NJ.setTableSelectionMode(qx.ui.table.selection.Model.SINGLE_SELECTION);
this.__NJ.selectObject(this.__NI.getInspected());
},showByCount:function(){this.__NJ.setByHashActive(false);
this.__NJ.setByCountActive(true);
this.__NJ.setTableModel(this.__NU());
this.__NJ.setTableSelectionMode(qx.ui.table.selection.Model.NO_SELECTION);
this.__NJ.selectObject(null);
},setFilter:function(e){this.__NO=true;
this.__NQ();
this.__NN=this.__NK.start(function(){this.__NN=null;
this.__NU().filter(e);
this.__NT().filter(e);
this.__NO=false;
this.__NJ.selectObject(this.__NI.getInspected());
},0,this,null,200);
},inspect:function(h){if(h==null){this.__NJ.selectObject(this.__NI.getInspected());
return;
}var i=this.__NI.getObjectFromHashCode(h);

if(i!=null&&!this.__NO){this.__NI.setInspected(i);
}},__NP:function(){this.__NJ.setFilter("");
this.showByHash();
},__NQ:function(){if(this.__NN!=null){this.__NK.stop(this.__NN);
this.__NN=null;
}},__NR:function(event){var f=event.getData();
this.__NJ.selectObject(f);
},__NS:function(event){this.reload();
},__NT:function(){if(this.__NL==null){this.__NL=new inspector.objects2.table.HashModel(this.__NI);
}return this.__NL;
},__NU:function(){if(this.__NM==null){this.__NM=new inspector.objects2.table.CountModel(this.__NI);
}return this.__NM;
}},destruct:function(){this.__NQ();

if(this.__NL!=null){this.__NL.dispose();
}
if(this.__NM){this.__NM.dispose();
}this.__NJ.destroy();
this.__NJ=this.__NI=this.__NL=this.__NN;
this.__NM=this.__NK=this.__NO=null;
}});
})();
(function(){var l="execute",k="show",j="count",h="hash",g="Show the objects by there hash value.",f="__NW",e="Reloads the view.",d="changeValue",c="objects2-toolbar",b="objects2-textfield",x="Filter...",w="20%",v="__NX",u="Enter a case sensitive value to filter the table.",t="Show the objects by there count.",s="changeSelection",r="middle",q="",p="icon/22/actions/view-refresh.png",o="inspector.objects2.View",m="__NY",n="80%";
qx.Class.define(o,{extend:qx.ui.container.Composite,construct:function(K){arguments.callee.base.call(this);
{};
this.__NV=K;
this.__Ob();
},members:{__NW:null,__NX:null,__NY:null,__Oa:null,__NV:null,setByHashActive:function(J){{};
this.__NW.setValue(J);
},setByCountActive:function(G){{};
this.__NX.setValue(G);
},setTableModel:function(O){{};
this.__NY.setTableModel(O);
this.__Oc();
},setTableSelectionMode:function(I){{};
this.__NY.getSelectionModel().setSelectionMode(I);
},selectObject:function(A){var C=this.__NY.getSelectionModel();
C.resetSelection();

if(A!=null&&C.getSelectionMode()!=qx.ui.table.selection.Model.NO_SELECTION){var B=this.__NY.getTableModel().getData();

for(var i=0;i<B.length;i++){if(B[i][0]==A.toHashCode()){C.setSelectionInterval(i,i);
this.__NY.scrollCellVisible(0,i);
return;
}}}else{this.__NY.scrollCellVisible(0,0);
}},setFilter:function(a){this.__Oa.setValue(a);
},__Ob:function(){this.setLayout(new qx.ui.layout.VBox());
var toolbar=new qx.ui.toolbar.ToolBar();
toolbar.setAppearance(c);
toolbar._getLayout().setAlignY(r);
this.add(toolbar);
var E=new qx.ui.toolbar.Button(null,p);
E.setToolTipText(e);
E.addListener(l,this._onReaload,this);
toolbar.add(E);
toolbar.addSeparator();
this.__NW=new qx.ui.toolbar.RadioButton("by Hash");
this.__NW.setUserData(k,h);
this.__NW.addListener(l,this._onShowByChanged,this);
this.__NW.setToolTipText(g);
toolbar.add(this.__NW);
this.__NX=new qx.ui.toolbar.RadioButton("by Count");
this.__NX.setUserData(k,j);
this.__NX.addListener(l,this._onShowByChanged,this);
this.__NX.setToolTipText(t);
toolbar.add(this.__NX);
toolbar.addSpacer();
this.__Oa=new qx.ui.form.TextField().set({appearance:b,liveUpdate:true,placeholder:x,toolTipText:u});
this.__Oa.addListener(d,this._onFilterChanged,this);
toolbar.add(this.__Oa);
var F={tableColumnModel:function(H){return new qx.ui.table.columnmodel.Resize(H);
}};
this.__NY=new qx.ui.table.Table(null,F).set({appearance:"objects2-table",columnVisibilityButtonVisible:false,toolTipText:"Select a item to inspect it or sort the table."});
this.__NY.getSelectionModel().addListener(s,this._onModelChangeSelection,this);
this.__NY.getDataRowRenderer().setHighlightFocusRow(false);
this.add(this.__NY,{flex:1});
},_onReaload:function(event){this.__NV.reload();
},_onShowByChanged:function(event){var y=event.getTarget();
var z=y?y.getUserData(k):q;

switch(z){case h:this.__NV.showByHash();
break;
case j:this.__NV.showByCount();
break;
default:this.error("Method: '"+z+"' doesn't exist.");
break;
}},_onFilterChanged:function(event){this.__NV.setFilter(event.getData());
},_onModelChangeSelection:function(event){var N=this.__NY.getSelectionModel();

if(N.isSelectionEmpty()){this.__NV.inspect(null);
return;
}var L=N.getSelectedRanges()[0].minIndex;
var M=this.__NY.getTableModel().getData()[L];
this.__NV.inspect(M[0]);
},__Oc:function(){var D=this.__NY.getTableColumnModel().getBehavior();
D.setWidth(0,w);
D.setMinWidth(0,50);
D.setMaxWidth(0,100);
D.setWidth(1,n);
D.setMinWidth(1,300);
}},destruct:function(){this.__NV=null;
this._disposeObjects(f,v,m);
}});
})();
(function(){var T="..",S="changeSelection",R="Use 'resetSelection' instead",Q=" [",P="]",O="qx.event.type.Event",N="Ranges:",M="qx.ui.table.selection.Model",L="_applySelectionMode",K="Use '_resetSelection' instead.";
qx.Class.define(M,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mI=[];
this.__mJ=-1;
this.__mK=-1;
this.hasBatchModeRefCount=0;
this.__mL=false;
},events:{"changeSelection":O},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:L}},members:{__mL:null,__mJ:null,__mK:null,__mI:null,_applySelectionMode:function(U){this.resetSelection();
},setBatchMode:function(v){if(v){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__mL){this.__mL=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__mJ;
},_setAnchorSelectionIndex:function(z){this.__mJ=z;
},getLeadSelectionIndex:function(){return this.__mK;
},_setLeadSelectionIndex:function(a){this.__mK=a;
},_getSelectedRangeArr:function(){return this.__mI;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,R);
this.resetSelection();
},isSelectionEmpty:function(){return this.__mI.length==0;
},getSelectedCount:function(){var B=0;

for(var i=0;i<this.__mI.length;i++){var A=this.__mI[i];
B+=A.maxIndex-A.minIndex+1;
}return B;
},isSelectedIndex:function(C){for(var i=0;i<this.__mI.length;i++){var D=this.__mI[i];

if(C>=D.minIndex&&C<=D.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__mI.length;i++){w.push({minIndex:this.__mI[i].minIndex,maxIndex:this.__mI[i].maxIndex});
}return w;
},iterateSelection:function(t,u){for(var i=0;i<this.__mI.length;i++){for(var j=this.__mI[i].minIndex;j<=this.__mI[i].maxIndex;j++){t.call(u,j);
}}},setSelectionInterval:function(H,I){var J=arguments.callee.self;

switch(this.getSelectionMode()){case J.NO_SELECTION:return;
case J.SINGLE_SELECTION:if(this.isSelectedIndex(I)){return;
}H=I;
break;
case J.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=H;i<=I;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(H,I);
this._fireChangeSelection();
},addSelectionInterval:function(E,F){var G=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case G.NO_SELECTION:return;
case G.MULTIPLE_INTERVAL_SELECTION:case G.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(E,F);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(E,F);
break;
}},removeSelectionInterval:function(l,m){this.__mJ=l;
this.__mK=m;
var n=Math.min(l,m);
var p=Math.max(l,m);
for(var i=0;i<this.__mI.length;i++){var r=this.__mI[i];

if(r.minIndex>p){break;
}else if(r.maxIndex>=n){var s=(r.minIndex>=n)&&(r.minIndex<=p);
var q=(r.maxIndex>=n)&&(r.maxIndex<=p);

if(s&&q){this.__mI.splice(i,1);
i--;
}else if(s){r.minIndex=p+1;
}else if(q){r.maxIndex=n-1;
}else{var o={minIndex:p+1,maxIndex:r.maxIndex};
this.__mI.splice(i+1,0,o);
r.maxIndex=n-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__mI=[];
this.__mJ=-1;
this.__mK=-1;
},_clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,K);
this._resetSelection();
},_addSelectionInterval:function(b,c){this.__mJ=b;
this.__mK=c;
var d=Math.min(b,c);
var g=Math.max(b,c);
var f=0;

for(;f<this.__mI.length;f++){var h=this.__mI[f];

if(h.minIndex>d){break;
}}this.__mI.splice(f,0,{minIndex:d,maxIndex:g});
var k=this.__mI[0];

for(var i=1;i<this.__mI.length;i++){var h=this.__mI[i];

if(k.maxIndex+1>=h.minIndex){k.maxIndex=Math.max(k.maxIndex,h.maxIndex);
this.__mI.splice(i,1);
i--;
}else{k=h;
}}},_dumpRanges:function(){var x=N;

for(var i=0;i<this.__mI.length;i++){var y=this.__mI[i];
x+=Q+y.minIndex+T+y.maxIndex+P;
}this.debug(x);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__mL=true;
}else{this.fireEvent(S);
}}},destruct:function(){this.__mI=null;
}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
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
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
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
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="__qf",f="changeSelection",d="changeSelected",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__qf:null,getSelection:function(){var l=this.__qg().getSelected();

if(l){return [l];
}else{return [];
}},setSelection:function(m){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
switch(m.length){case 0:this.resetSelection();
break;
case 1:this.__qg().setSelected(m[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+m.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__qg().resetSelected();
},isSelected:function(k){return this.__qg().isSelected(k);
},isSelectionEmpty:function(){return this.__qg().isSelectionEmpty();
},getSelectables:function(){return this.__qg().getSelectables();
},_onChangeSelected:function(e){var b=e.getData();
var a=e.getOldData();
b==null?b=[]:b=[b];
a==null?a=[]:a=[a];
this.fireDataEvent(f,b,a);
},__qg:function(){if(this.__qf==null){var i=this;
this.__qf=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(j){if(i._isItemSelectable){return i._isItemSelectable(j);
}else{return j.isEnabled()&&j.isVisible();
}}});
this.__qf.addListener(d,this._onChangeSelected,this);
}this.__qf.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__qf;
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var e="change",d="qx.event.type.Data",c="__io",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__io=new qx.data.Array();
this.__io.addListener(e,this.__ir,this);
this.addListener(a,this.__iq,this);
},events:{changeModelSelection:d},members:{__io:null,__ip:false,__iq:function(){if(this.__ip){return;
}var h=this.getSelection();
var f=[];

for(var i=0;i<h.length;i++){var k=h[i];
var g=k.getModel?k.getModel():null;

if(g!==null){f.push(g);
}}this.setModelSelection(f);
},__ir:function(){this.__ip=true;
var o=this.getSelectables();
var q=[];
var p=this.__io.toArray();

for(var i=0;i<p.length;i++){var s=p[i];

for(var j=0;j<o.length;j++){var t=o[j];
var n=t.getModel?t.getModel():null;

if(s===n){q.push(t);
break;
}}}this.setSelection(q);
this.__ip=false;
var r=this.getSelection();

if(!qx.lang.Array.equals(r,q)){this.__iq();
}},getModelSelection:function(){return this.__io;
},setModelSelection:function(l){if(!l){this.__io.removeAll();
return;
}{};
l.unshift(this.__io.getLength());
l.unshift(0);
var m=this.__io.splice.apply(this.__io,l);
m.dispose();
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var r="Boolean",q="changeValue",p="_applyAllowEmptySelection",o="_applyInvalidMessage",n="qx.ui.form.RadioGroup",m="_applyValid",k="",j="changeRequired",h="changeValid",g="changeEnabled",c="changeInvalidMessage",f="changeSelection",d="_applyEnabled",b="String",a="__qn";
qx.Class.define(n,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(M){arguments.callee.base.call(this);
this.__qn=[];
this.addListener(f,this.__qo,this);

if(M!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:d,event:g,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:p},valid:{check:r,init:true,apply:m,event:h},required:{check:r,init:false,event:j},invalidMessage:{check:b,init:k,event:c,apply:o}},members:{__qn:null,getItems:function(){return this.__qn;
},add:function(J){var K=this.__qn;
var L;

for(var i=0,l=arguments.length;i<l;i++){L=arguments[i];

if(qx.lang.Array.contains(K,L)){continue;
}L.addListener(q,this._onItemChangeChecked,this);
K.push(L);
L.setGroup(this);
if(L.getValue()){this.setSelection([L]);
}}if(!this.isAllowEmptySelection()&&K.length>0&&!this.getSelection()[0]){this.setSelection([K[0]]);
}},remove:function(x){var y=this.__qn;

if(qx.lang.Array.contains(y,x)){qx.lang.Array.remove(y,x);
if(x.getGroup()===this){x.resetGroup();
}x.removeListener(q,this._onItemChangeChecked,this);
if(x.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__qn;
},_onItemChangeChecked:function(e){var P=e.getTarget();

if(P.getValue()){this.setSelection([P]);
}else if(this.getSelection()[0]==P){this.resetSelection();
}},_applyInvalidMessage:function(N,O){for(var i=0;i<this.__qn.length;i++){this.__qn[i].setInvalidMessage(N);
}},_applyValid:function(H,I){for(var i=0;i<this.__qn.length;i++){this.__qn[i].setValid(H);
}},_applyEnabled:function(u,v){var w=this.__qn;

if(u==null){for(var i=0,l=w.length;i<l;i++){w[i].resetEnabled();
}}else{for(var i=0,l=w.length;i<l;i++){w[i].setEnabled(u);
}}},_applyAllowEmptySelection:function(C,D){if(!C&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var z=this.getSelection()[0];
var B=this.__qn;
var A=B.indexOf(z);

if(A==-1){return;
}var i=0;
var length=B.length;
if(this.getWrap()){A=(A+1)%length;
}else{A=Math.min(A+1,length-1);
}
while(i<length&&!B[A].getEnabled()){A=(A+1)%length;
i++;
}this.setSelection([B[A]]);
},selectPrevious:function(){var E=this.getSelection()[0];
var G=this.__qn;
var F=G.indexOf(E);

if(F==-1){return;
}var i=0;
var length=G.length;
if(this.getWrap()){F=(F-1+length)%length;
}else{F=Math.max(F-1,0);
}
while(i<length&&!G[F].getEnabled()){F=(F-1+length)%length;
i++;
}this.setSelection([G[F]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__qo:function(e){var t=e.getData()[0];
var s=e.getOldData()[0];

if(s){s.setValue(false);
}
if(t){t.setValue(true);
}}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var j="__qk",h="__qj",g="Boolean",f="qx.ui.core.SingleSelectionManager",e="__qi",d="changeSelected",c="qx.event.type.Data";
qx.Class.define(f,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
{};
this.__qi=n;
},events:{"changeSelected":c},properties:{allowEmptySelection:{check:g,init:true,apply:j}},members:{__qj:null,__qi:null,getSelected:function(){return this.__qj;
},setSelected:function(k){if(!this.__qm(k)){throw new Error("Could not select "+k+", because it is not a child element!");
}this.__ql(k);
},resetSelected:function(){this.__ql(null);
},isSelected:function(o){if(!this.__qm(o)){throw new Error("Could not check if "+o+" is selected,"+" because it is not a child element!");
}return this.__qj===o;
},isSelectionEmpty:function(){return this.__qj==null;
},getSelectables:function(){var p=this.__qi.getItems();
var q=[];

for(var i=0;i<p.length;i++){if(this.__qi.isItemSelectable(p[i])){q.push(p[i]);
}}return q;
},__qk:function(a,b){if(!a){this.__ql(this.__qj);
}},__ql:function(r){var u=this.__qj;
var t=r;

if(t!=null&&u===t){return;
}
if(!this.isAllowEmptySelection()&&t==null){var s=this.getSelectables()[0];

if(s){t=s;
}}this.__qj=t;
this.fireDataEvent(d,t,u);
},__qm:function(l){var m=this.__qi.getItems();

for(var i=0;i<m.length;i++){if(m[i]===l){return true;
}}return false;
}},destruct:function(){if(this.__qi.toHashCode){this._disposeObjects(e);
}else{this.__qi=null;
}this._disposeObjects(h);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__kf,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__kf:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var n="change",m="add",l="remove",k="order",j="",h="qx.data.Array",g="?",f="changeBubble",e="qx.event.type.Event",d="number",b="changeLength",c="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(B){arguments.callee.base.call(this);
if(B==undefined){this.__kg=[];
}else if(arguments.length>1){this.__kg=[];

for(var i=0;i<arguments.length;i++){this.__kg.push(arguments[i]);
}}else if(typeof B==d){this.__kg=new Array(B);
}else if(B instanceof Array){this.__kg=qx.lang.Array.clone(B);
}else{this.__kg=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(this.__kg[i],null,i);
}this.__kh();
},events:{"change":c,"changeLength":e},members:{__kg:null,concat:function(be){if(be){var bf=this.__kg.concat(be);
}else{var bf=this.__kg.concat();
}return new qx.data.Array(bf);
},join:function(L){return this.__kg.join(L);
},pop:function(){var A=this.__kg.pop();
this.__kh();
this._applyEventPropagation(null,A,this.length-1);
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:l,items:[A]},null);
return A;
},push:function(bb){for(var i=0;i<arguments.length;i++){this.__kg.push(arguments[i]);
this.__kh();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__kg.reverse();
this.fireDataEvent(n,{start:0,end:this.length-1,type:k,items:null},null);
},shift:function(){var bg=this.__kg.shift();
this.__kh();
this._applyEventPropagation(null,bg);
this.fireDataEvent(n,{start:0,end:this.length-1,type:l,items:[bg]},null);
return bg;
},slice:function(J,K){return new qx.data.Array(this.__kg.slice(J,K));
},splice:function(R,S,T){var ba=this.__kg.length;
var W=this.__kg.splice.apply(this.__kg,arguments);
if(this.__kg.length!=ba){this.__kh();
}var X=S>0;
var U=arguments.length>2;
var V=null;

if(X||U){if(this.__kg.length>ba){var Y=m;
}else if(this.__kg.length<ba){var Y=l;
V=W;
}else{var Y=k;
}this.fireDataEvent(n,{start:R,end:this.length-1,type:Y,items:V},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,R+i);
}this.fireDataEvent(f,{value:this,name:g,old:W});
for(var i=0;i<W.length;i++){this._applyEventPropagation(null,W[i],i);
}return (new qx.data.Array(W));
},sort:function(bc){this.__kg.sort.apply(this.__kg,arguments);
this.fireDataEvent(n,{start:0,end:this.length-1,type:k,items:null},null);
},unshift:function(a){for(var i=arguments.length-1;i>=0;i--){this.__kg.unshift(arguments[i]);
this.__kh();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(n,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__kg;
},getItem:function(bh){return this.__kg[bh];
},setItem:function(w,x){var y=this.__kg[w];
this.__kg[w]=x;
this._applyEventPropagation(x,y,w);
if(this.length!=this.__kg.length){this.__kh();
}this.fireDataEvent(n,{start:w,end:w,type:m,items:[x]},null);
},getLength:function(){return this.length;
},indexOf:function(H){return this.__kg.indexOf(H);
},toString:function(){if(this.__kg!=null){return this.__kg.toString();
}return j;
},contains:function(bd){return this.__kg.indexOf(bd)!==-1;
},copy:function(){return this.concat();
},insertAt:function(q,r){this.splice(q,0,r);
},insertBefore:function(N,O){var P=this.indexOf(N);

if(P==-1){this.push(O);
}else{this.splice(P,0,O);
}},insertAfter:function(E,F){var G=this.indexOf(E);

if(G==-1||G==(this.length-1)){this.push(F);
}else{this.splice(G+1,0,F);
}},removeAt:function(u){return this.splice(u,1)[0];
},removeAll:function(){for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(null,this.__kg[i],i);
}var D=this.getLength();
var C=this.__kg.concat();
this.__kg.length=0;
this.__kh();
this.fireDataEvent(n,{start:0,end:D-1,type:l,items:C},null);
},append:function(Q){{};
for(var i=0;i<Q.length;i++){this._applyEventPropagation(Q[i],null,this.__kg.length+i);
}Array.prototype.push.apply(this.__kg,Q);
this.__kh();
},remove:function(o){var p=this.indexOf(o);

if(p!=-1){this.splice(p,1);
return o;
}},equals:function(M){if(this.length!==M.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==M.getItem(i)){return false;
}}return true;
},sum:function(){var v=0;

for(var i=0;i<this.length;i++){v+=this.getItem(i);
}return v;
},max:function(){var I=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>I){I=this.getItem(i);
}}return I===undefined?null:I;
},min:function(){var z=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<z){z=this.getItem(i);
}}return z===undefined?null:z;
},forEach:function(s,t){for(var i=0;i<this.__kg.length;i++){s.call(t,this.__kg[i]);
}},__kh:function(){this.length=this.__kg.length;
this.fireEvent(b,qx.event.type.Event);
}},destruct:function(){for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(null,this.__kg[i],i);
}this.__kg=null;
}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var r="showingPlaceholder",q="color",p="",o="none",n="qx.client",m="qx.dynlocale",l="Boolean",k="qx.event.type.Data",j="readonly",i="input",bh="focusin",bg="visibility",bf="focusout",be="changeLocale",bd="hidden",bc="on",bb="absolute",ba="readOnly",Y="text",X="_applyTextAlign",y="px",z="RegExp",w=")",x="syncAppearance",u="changeValue",v="gecko",s="A",t="change",C="textAlign",D="focused",L="center",J="visible",P="disabled",N="url(",T="off",R="String",F="resize",W="qx.ui.form.AbstractField",V="transparent",U="spellcheck",E="false",H="right",I="PositiveInteger",K="mshtml",M="abstract",O="block",Q="webkit",S="_applyReadOnly",A="_applyPlaceholder",B="left",G="qx/static/blank.gif";
qx.Class.define(W,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:M,construct:function(bB){arguments.callee.base.call(this);

if(bB!=null){this.setValue(bB);
}this.getContentElement().addListener(t,this._onChangeContent,this);
this.addListener(x,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(m,bc)){qx.locale.Manager.getInstance().addListener(be,this._onChangeLocale,this);
}},events:{"input":k,"changeValue":k},properties:{textAlign:{check:[B,L,H],nullable:true,themeable:true,apply:X},readOnly:{check:l,apply:S,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:I,init:Infinity},liveUpdate:{check:l,init:false},placeholder:{check:R,nullable:true,apply:A},filter:{check:z,nullable:true,init:null}},members:{__ku:true,__kv:null,__kw:null,__kx:null,getFocusElement:function(){var h=this.getContentElement();

if(h){return h;
}},_createInputElement:function(){return new qx.html.Input(Y);
},renderLayout:function(bC,top,bD,bE){var bF=this._updateInsets;
var bJ=arguments.callee.base.call(this,bC,top,bD,bE);
if(!bJ){return;
}var bH=bJ.size||bF;
var bK=y;

if(bH||bJ.local||bJ.margin){var bG=this.getInsets();
var innerWidth=bD-bG.left-bG.right;
var innerHeight=bE-bG.top-bG.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bI=this.getContentElement();

if(bF){this.__kA().setStyles({"left":bG.left+bK,"top":bG.top+bK});
}
if(bH){this.__kA().setStyles({"width":innerWidth+bK,"height":innerHeight+bK});
bI.setStyles({"width":innerWidth+bK,"height":innerHeight+bK});
}},_createContentElement:function(){var by=this._createInputElement();
by.setStyles({"border":o,"padding":0,"margin":0,"display":O,"background":V,"outline":o,"appearance":o,"position":bb,"autoComplete":T});
by.setSelectable(this.getSelectable());
by.setEnabled(this.getEnabled());
by.addListener(i,this._onHtmlInput,this);
if(qx.core.Variant.isSet(n,v)){by.setAttribute(U,E);
}if(qx.core.Variant.isSet(n,Q)){by.setStyle(F,o);
}if(qx.core.Variant.isSet(n,K)){by.setStyles({backgroundImage:N+qx.util.ResourceManager.getInstance().toUri(G)+w});
}return by;
},_applyEnabled:function(bL,bM){arguments.callee.base.call(this,bL,bM);
this.getContentElement().setEnabled(bL);

if(bL){this._showPlaceholder();
}else{this._removePlaceholder();
}},__ky:{width:16,height:16},_getContentHint:function(){return {width:this.__ky.width*10,height:this.__ky.height||16};
},_applyFont:function(a,b){var c;

if(a){var d=qx.theme.manager.Font.getInstance().resolve(a);
c=d.getStyles();
}else{c=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(c);
this.__kA().setStyles(c);
if(a){this.__ky=qx.bom.Label.getTextSize(s,c);
}else{delete this.__ky;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bi,bj){if(bi){this.getContentElement().setStyle(q,qx.theme.manager.Color.getInstance().resolve(bi));
this.__kA().setStyle(q,qx.theme.manager.Color.getInstance().resolve(bi));
}else{this.getContentElement().removeStyle(q);
this.__kA().removeStyle(q);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__ky;
},_onHtmlInput:function(e){var bs=e.getData();
var br=true;
this.__ku=false;
if(this.getFilter()!=null){var bt=p;
var bp=bs.search(this.getFilter());
var bq=bs;

while(bp>=0){bt=bt+(bq.charAt(bp));
bq=bq.substring(bp+1,bq.length);
bp=bq.search(this.getFilter());
}
if(bt!=bs){br=false;
bs=bt;
this.getContentElement().setValue(bs);
}}if(bs.length>this.getMaxLength()){var br=false;
this.getContentElement().setValue(bs.substr(0,this.getMaxLength()));
}if(br){this.fireDataEvent(i,bs,this.__kx);
this.__kx=bs;
if(this.getLiveUpdate()){this.__kz(bs);
}}},__kz:function(bw){this.fireNonBubblingEvent(u,qx.event.type.Data,[bw,this.__kw]);
this.__kw=bw;
},setValue:function(bN){if(bN===null){if(this.__ku){return bN;
}bN=p;
this.__ku=true;
}else{this.__ku=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bN)){var bP=this.getContentElement();

if(bN.length>this.getMaxLength()){bN=bN.substr(0,this.getMaxLength());
}
if(bP.getValue()!=bN){var bQ=bP.getValue();
bP.setValue(bN);
var bO=this.__ku?null:bN;
this.__kw=bQ;
this.__kz(bO);
}this._showPlaceholder();
return bN;
}throw new Error("Invalid value type: "+bN);
},getValue:function(){var bx=this.getContentElement().getValue();
return this.__ku?null:bx;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__ku=e.getData()===null;
this.__kz(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bu,bv){this.getContentElement().setTextSelection(bu,bv);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bo=this.getValue()||p;
var bn=this.getPlaceholder();

if(bn!=null&&bo==p&&!this.hasState(D)&&!this.hasState(P)){if(this.hasState(r)){this._syncPlaceholder();
}else{this.addState(r);
}}},_removePlaceholder:function(){if(this.hasState(r)){this.__kA().setStyle(bg,bd);
this.removeState(r);
}},_syncPlaceholder:function(){if(this.hasState(r)){this.__kA().setStyle(bg,J);
}},__kA:function(){if(this.__kv==null){this.__kv=new qx.html.Label();
this.__kv.setStyles({"visibility":bd,"zIndex":6,"position":bb});
this.getContainerElement().add(this.__kv);
}return this.__kv;
},_onChangeLocale:qx.core.Variant.select(m,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bz,bA){this.__kA().setValue(bz);

if(bz!=null){this.addListener(bh,this._removePlaceholder,this);
this.addListener(bf,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bh,this._removePlaceholder,this);
this.removeListener(bf,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(f,g){this.getContentElement().setStyle(C,f);
},_applyReadOnly:function(bk,bl){var bm=this.getContentElement();
bm.setAttribute(ba,bk);

if(bk){this.addState(j);
this.setFocusable(false);
}else{this.removeState(j);
this.setFocusable(true);
}}},destruct:function(){this.__kv=null;

if(qx.core.Variant.isSet(m,bc)){qx.locale.Manager.getInstance().removeListener(be,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var p="none",o="wrap",n="value",m="qx.client",l="textarea",k="off",j="on",i="qxSelectable",h="",g="webkit",c="input",f="qx.html.Input",e="select",b="disabled",a="read-only",d="userSelect";
qx.Class.define(f,{extend:qx.html.Element,construct:function(s){arguments.callee.base.call(this);
this.__kB=s;
if(s===e||s===l){this.setNodeName(s);
}else{this.setNodeName(c);
}},members:{__kB:null,__kC:null,__kD:null,_createDomElement:function(){return qx.bom.Input.create(this.__kB);
},_applyProperty:function(name,t){arguments.callee.base.call(this,name,t);
var u=this.getDomElement();

if(name===n){qx.bom.Input.setValue(u,t);
}else if(name===o){qx.bom.Input.setWrap(u,t);
}},setEnabled:qx.core.Variant.select(m,{"webkit":function(B){this.__kD=B;

if(!B){this.setStyles({"userModify":a,"userSelect":p});
}else{this.setStyles({"userModify":null,"userSelect":this.__kC?null:p});
}},"default":function(r){this.setAttribute(b,r===false);
}}),setSelectable:qx.core.Variant.select(m,{"webkit":function(x){this.__kC=x;
this.setAttribute(i,x?j:k);
if(qx.core.Variant.isSet(m,g)){var y=this.__kD?x?null:p:p;
this.setStyle(d,y);
}},"default":function(z){this.setAttribute(i,z?j:k);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(n,v);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(n)||h;
},setWrap:function(q){if(this.__kB===l){this._setProperty(o,q);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__kB===l){return this._getProperty(o);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var W="change",V="input",U="qx.client",T="text",S="password",R="checkbox",Q="radio",P="textarea",O="keypress",N="opera",H="propertychange",M="blur",K="keydown",G="keyup",F="select-multiple",J="checked",I="value",L="select",E="qx.event.handler.Input";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(U,N)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__kE:false,__kF:null,__kG:null,canHandleEvent:function(a,b){var c=a.tagName.toLowerCase();

if(b===V&&(c===V||c===P)){return true;
}
if(b===W&&(c===V||c===P||c===L)){return true;
}return false;
},registerEvent:qx.core.Variant.select(U,{"mshtml":function(f,g,h){if(!f.__kH){var j=f.tagName.toLowerCase();
var k=f.type;

if(k===T||k===S||j===P||k===R||k===Q){qx.bom.Event.addNativeListener(f,H,this._onPropertyWrapper);
}
if(k!==R&&k!==Q){qx.bom.Event.addNativeListener(f,W,this._onChangeValueWrapper);
}
if(k===T||k===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,f);
qx.bom.Event.addNativeListener(f,O,this._onKeyPressWrapped);
}f.__kH=true;
}},"default":function(Y,ba,bb){if(ba===V){this.__kI(Y);
}else if(ba===W){if(Y.type===Q||Y.type===R){qx.bom.Event.addNativeListener(Y,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(Y,W,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(U,N)){if(Y.type===T||Y.type===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,Y);
qx.bom.Event.addNativeListener(Y,O,this._onKeyPressWrapped);
}}}}}),__kI:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(bd){var be=bd.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&be==P){qx.bom.Event.addNativeListener(bd,O,this._onInputWrapper);
}qx.bom.Event.addNativeListener(bd,V,this._onInputWrapper);
},"opera":function(p){qx.bom.Event.addNativeListener(p,G,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(p,K,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(p,M,this._onBlurWrapper);
qx.bom.Event.addNativeListener(p,V,this._onInputWrapper);
},"default":function(u){qx.bom.Event.addNativeListener(u,V,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(U,{"mshtml":function(v,w){if(v.__kH){var x=v.tagName.toLowerCase();
var y=v.type;

if(y===T||y===S||x===P||y===R||y===Q){qx.bom.Event.removeNativeListener(v,H,this._onPropertyWrapper);
}
if(y!==R&&y!==Q){qx.bom.Event.removeNativeListener(v,W,this._onChangeValueWrapper);
}
if(y===T||y===S){qx.bom.Event.removeNativeListener(v,O,this._onKeyPressWrapped);
}
try{delete v.__kH;
}catch(bc){v.__kH=null;
}}},"default":function(m,n){if(n===V){this.__kI(m);
}else if(n===W){if(m.type===Q||m.type===R){qx.bom.Event.removeNativeListener(m,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(m,W,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(U,N)){if(m.type===T||m.type===S){qx.bom.Event.removeNativeListener(m,O,this._onKeyPressWrapped);
}}}}),__kJ:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(B){var C=B.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&C==P){qx.bom.Event.removeNativeListener(B,O,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(B,V,this._onInputWrapper);
},"opera":function(t){qx.bom.Event.removeNativeListener(t,G,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(t,K,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(t,M,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(t,V,this._onInputWrapper);
},"default":function(d){qx.bom.Event.removeNativeListener(d,V,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(U,{"mshtml|opera":function(e,bf){if(e.keyCode===13){if(bf.value!==this.__kG){this.__kG=bf.value;
qx.event.Registration.fireEvent(bf,W,qx.event.type.Data,[bf.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__kE=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__kE=false;
}},"default":null}),_onBlur:qx.core.Variant.select(U,{"opera":function(e){if(this.__kF){window.clearTimeout(this.__kF);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var D=e.target;
if(!this.__kE){if(qx.core.Variant.isSet(U,N)){this.__kF=window.setTimeout(function(){qx.event.Registration.fireEvent(D,V,qx.event.type.Data,[D.value]);
},0);
}else{qx.event.Registration.fireEvent(D,V,qx.event.type.Data,[D.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var A=e.target||e.srcElement;
var z=A.value;

if(A.type===F){var z=[];

for(var i=0,o=A.options,l=o.length;i<l;i++){if(o[i].selected){z.push(o[i].value);
}}}qx.event.Registration.fireEvent(A,W,qx.event.type.Data,[z]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var s=e.target;

if(s.type===Q){if(s.checked){qx.event.Registration.fireEvent(s,W,qx.event.type.Data,[s.value]);
}}else{qx.event.Registration.fireEvent(s,W,qx.event.type.Data,[s.checked]);
}}),_onProperty:qx.core.Variant.select(U,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var q=e.target||e.srcElement;
var r=e.propertyName;

if(r===I&&(q.type===T||q.type===S||q.tagName.toLowerCase()===P)){if(!q.__inValueSet){qx.event.Registration.fireEvent(q,V,qx.event.type.Data,[q.value]);
}}else if(r===J){if(q.type===R){qx.event.Registration.fireEvent(q,W,qx.event.type.Data,[q.checked]);
}else if(q.checked){qx.event.Registration.fireEvent(q,W,qx.event.type.Data,[q.value]);
}}}),"default":function(){}})},defer:function(X){qx.event.Registration.addHandler(X);
}});
})();
(function(){var v="",u="select",t="soft",s="off",r="qx.client",q="wrap",p="text",o="mshtml",n="number",m="checkbox",d="select-one",k="input",g="option",c="value",b="radio",f="qx.bom.Input",e="nowrap",h="textarea",a="auto",j="normal";
qx.Class.define(f,{statics:{__kK:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(A,B,C){{};
var B=B?qx.lang.Object.clone(B):{};
var D;

if(A===h||A===u){D=A;
}else{D=k;
B.type=A;
}return qx.bom.Element.create(D,B,C);
},setValue:function(G,H){var M=G.nodeName.toLowerCase();
var J=G.type;
var Array=qx.lang.Array;
var N=qx.lang.Type;

if(typeof H===n){H+=v;
}
if((J===m||J===b)){if(N.isArray(H)){G.checked=Array.contains(H,G.value);
}else{G.checked=G.value==H;
}}else if(M===u){var I=N.isArray(H);
var O=G.options;
var K,L;

for(var i=0,l=O.length;i<l;i++){K=O[i];
L=K.getAttribute(c);

if(L==null){L=K.text;
}K.selected=I?Array.contains(H,L):H==L;
}
if(I&&H.length==0){G.selectedIndex=-1;
}}else if(J===p&&qx.core.Variant.isSet(r,o)){G.__kL=true;
G.value=H;
G.__kL=null;
}else{G.value=H;
}},getValue:function(P){var V=P.nodeName.toLowerCase();

if(V===g){return (P.attributes.value||{}).specified?P.value:P.text;
}
if(V===u){var Q=P.selectedIndex;
if(Q<0){return null;
}var W=[];
var Y=P.options;
var X=P.type==d;
var U=qx.bom.Input;
var T;
for(var i=X?Q:0,S=X?Q+1:Y.length;i<S;i++){var R=Y[i];

if(R.selected){T=U.getValue(R);
if(X){return T;
}W.push(T);
}}return W;
}else{return (P.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Variant.select(r,{"mshtml":function(E,F){E.wrap=F?t:s;
},"gecko|webkit":function(w,x){var z=x?t:s;
var y=x?v:a;
w.setAttribute(q,z);
w.style.overflow=y;
},"default":function(ba,bb){ba.style.whiteSpace=bb?j:e;
}})}});
})();
(function(){var a="qx.ui.table.IHeaderRenderer";
qx.Interface.define(a,{members:{createHeaderCell:function(b){return true;
},updateHeaderCell:function(c,d){return true;
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
var S=qx.ui.table.cellrenderer.Abstract;

if(!S.__kW){var U=qx.theme.manager.Color.getInstance();
S.__kW=arguments.callee.self;
var T=h+
qx.bom.element.Style.compile({position:w,top:D,overflow:s,whiteSpace:e,borderRight:B+U.resolve(z),padding:F,cursor:d,textOverflow:r,userSelect:l})+t+G+u+A;

if(!qx.core.Variant.isSet(c,x)){T+=h+qx.bom.element.BoxSizing.compile(o)+b;
}S.__kW.stylesheet=qx.bom.Stylesheet.createElement(T);
}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(J){return g;
},_getCellStyle:function(H){return H.style||j;
},_getCellAttributes:function(R){return j;
},_getContentHtml:function(I){return I.value||j;
},_getCellSizeStyle:function(M,N,O,P){var Q=j;

if(qx.bom.client.Feature.CONTENT_BOX){M-=O;
N-=P;
}Q+=a+Math.max(M,0)+i;
Q+=C+Math.max(N,0)+i;
return Q;
},createDataCellHtml:function(K,L){L.push(E,this._getCellClass(K),n,p,K.styleLeft,v,this._getCellSizeStyle(K.styleWidth,K.styleHeight,this._insetX,this._insetY),this._getCellStyle(K),f,this._getCellAttributes(K),y+this._getContentHtml(K),q);
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
},_getContentHtml:function(p){return qx.bom.String.escape(this._formatValue(p));
},_formatValue:function(m){var o=m.value;

if(o==null){return h;
}
if(typeof o==a){return o;
}else if(typeof o==g){if(!qx.ui.table.cellrenderer.Default._numberFormat){qx.ui.table.cellrenderer.Default._numberFormat=new qx.util.format.NumberFormat();
qx.ui.table.cellrenderer.Default._numberFormat.setMaximumFractionDigits(2);
}var n=qx.ui.table.cellrenderer.Default._numberFormat.format(o);
}else if(o instanceof Date){n=qx.util.format.DateFormat.getDateInstance().format(o);
}else{n=o;
}return n;
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
(function(){var c="number",b="qx.ui.table.celleditor.TextField",a="table-editor-textfield";
qx.Class.define(b,{extend:qx.ui.table.celleditor.AbstractField,members:{getCellEditorValue:function(d){var f=d.getValue();
var e=this.getValidationFunction();

if(e){f=e(f,d.originalValue);
}
if(typeof d.originalValue==c){if(f!=null){f=parseFloat(f);
}}return f;
},_createEditor:function(){var g=new qx.ui.form.TextField();
g.setAppearance(a);
return g;
}}});
})();
(function(){var o="qx.event.type.Data",n="visibilityChanged",m="orderChanged",l="visibilityChangedPre",k="__lf",j="widthChanged",h="qx.ui.table.columnmodel.Basic",g="__ld",f="__le";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__kX=[];
this.__kY=[];
},events:{"widthChanged":o,"visibilityChangedPre":o,"visibilityChanged":o,"orderChanged":o},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__la:null,__lb:null,__kY:null,__kX:null,__lc:null,__ld:null,__le:null,__lf:null,init:function(I){{};
this.__lc=[];
var L=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var M=this.__ld||(this.__ld=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var K=this.__le||(this.__le=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var J=this.__lf||(this.__lf=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__kX=[];
this.__kY=[];

for(var O=0;O<I;O++){this.__lc[O]={width:L,headerRenderer:M,dataRenderer:K,editorFactory:J};
this.__kX[O]=O;
this.__kY[O]=O;
}this.__lb=null;

for(var O=0;O<I;O++){var N={col:O,visible:true};
this.fireDataEvent(l,N);
this.fireDataEvent(n,N);
}},getVisibleColumns:function(){return this.__kY!=null?this.__kY:[];
},setColumnWidth:function(t,u){{};
var w=this.__lc[t].width;

if(w!=u){this.__lc[t].width=u;
var v={col:t,newWidth:u,oldWidth:w};
this.fireDataEvent(j,v);
}},getColumnWidth:function(A){{};
return this.__lc[A].width;
},setHeaderCellRenderer:function(p,q){{};
var r=this.__lc[p].headerRenderer;

if(r!==this.__ld){r.dispose();
}this.__lc[p].headerRenderer=q;
},getHeaderCellRenderer:function(H){{};
return this.__lc[H].headerRenderer;
},setDataCellRenderer:function(E,F){{};
var G=this.__lc[E].dataRenderer;

if(G!==this.__le){G.dispose();
}this.__lc[E].dataRenderer=F;
},getDataCellRenderer:function(P){{};
return this.__lc[P].dataRenderer;
},setCellEditorFactory:function(B,C){{};
var D=this.__lc[B].headerRenderer;

if(D!==this.__lf){D.dispose();
}this.__lc[B].editorFactory=C;
},getCellEditorFactory:function(z){{};
return this.__lc[z].editorFactory;
},_getColToXPosMap:function(){if(this.__lb==null){this.__lb={};

for(var ba=0;ba<this.__kX.length;ba++){var Y=this.__kX[ba];
this.__lb[Y]={overX:ba};
}
for(var X=0;X<this.__kY.length;X++){var Y=this.__kY[X];
this.__lb[Y].visX=X;
}}return this.__lb;
},getVisibleColumnCount:function(){return this.__kY!=null?this.__kY.length:0;
},getVisibleColumnAtX:function(s){{};
return this.__kY[s];
},getVisibleX:function(W){{};
return this._getColToXPosMap()[W].visX;
},getOverallColumnCount:function(){return this.__kX.length;
},getOverallColumnAtX:function(e){{};
return this.__kX[e];
},getOverallX:function(Q){{};
return this._getColToXPosMap()[Q].overX;
},isColumnVisible:function(y){{};
return (this._getColToXPosMap()[y].visX!=null);
},setColumnVisible:function(bb,bc){{};

if(bc!=this.isColumnVisible(bb)){if(bc){var bi=this._getColToXPosMap();
var bf=bi[bb].overX;

if(bf==null){throw new Error("Showing column failed: "+bb+". The column is not added to this TablePaneModel.");
}var bg;

for(var x=bf+1;x<this.__kX.length;x++){var bh=this.__kX[x];
var bd=bi[bh].visX;

if(bd!=null){bg=bd;
break;
}}if(bg==null){bg=this.__kY.length;
}this.__kY.splice(bg,0,bb);
}else{var be=this.getVisibleX(bb);
this.__kY.splice(be,1);
}this.__lb=null;
if(!this.__la){var bj={col:bb,visible:bc};
this.fireDataEvent(l,bj);
this.fireDataEvent(n,bj);
}}},moveColumn:function(R,S){{};
this.__la=true;
var V=this.__kX[R];
var T=this.isColumnVisible(V);

if(T){this.setColumnVisible(V,false);
}this.__kX.splice(R,1);
this.__kX.splice(S,0,V);
this.__lb=null;

if(T){this.setColumnVisible(V,true);
}this.__la=false;
var U={col:V,fromOverXPos:R,toOverXPos:S};
this.fireDataEvent(m,U);
},setColumnsOrder:function(a){{};

if(a.length==this.__kX.length){this.__la=true;
var d=new Array(a.length);

for(var b=0;b<this.__kX.length;b++){var c=this.isColumnVisible(b);
d[b]=c;

if(c){this.setColumnVisible(b,false);
}}this.__kX=qx.lang.Array.clone(a);
this.__lb=null;
for(var b=0;b<this.__kX.length;b++){if(d[b]){this.setColumnVisible(b,true);
}}this.__la=false;
this.fireDataEvent(m);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__kX.length+", got "+a.length);
}}},destruct:function(){for(var i=0;i<this.__lc.length;i++){this.__lc[i].headerRenderer.dispose();
this.__lc[i].dataRenderer.dispose();
this.__lc[i].editorFactory.dispose();
}this.__kX=this.__kY=this.__lc=this.__lb=null;
this._disposeObjects(g,f,k);
}});
})();
(function(){var n="appear",m="columnVisibilityMenuCreateEnd",l="tableWidthChanged",k="verticalScrollBarChanged",j="qx.ui.table.columnmodel.resizebehavior.Abstract",i="qx.ui.table.columnmodel.Resize",h="_applyBehavior",g="separator",f="visibilityChanged",e="Reset column widths",b="changeBehavior",d="user-button",c="widthChanged",a="execute";
qx.Class.define(i,{extend:qx.ui.table.columnmodel.Basic,include:qx.locale.MTranslation,construct:function(){arguments.callee.base.call(this);
this.__lg=false;
this.__lh=false;
},properties:{behavior:{check:j,init:null,nullable:true,apply:h,event:b}},members:{__lh:null,__lg:null,__li:null,_applyBehavior:function(u,v){if(v!=null){v.dispose();
v=null;
}u._setNumColumns(this.getOverallColumnCount());
u.setTableColumnModel(this);
},init:function(p,q){arguments.callee.base.call(this,p);

if(this.__li==null){this.__li=q;
q.addListener(n,this._onappear,this);
q.addListener(l,this._onTableWidthChanged,this);
q.addListener(k,this._onverticalscrollbarchanged,this);
q.addListener(m,this._addResetColumnWidthButton,this);
this.addListener(c,this._oncolumnwidthchanged,this);
this.addListener(f,this._onvisibilitychanged,this);
}if(this.getBehavior()==null){this.setBehavior(new qx.ui.table.columnmodel.resizebehavior.Default());
}this.getBehavior()._setNumColumns(p);
},getTable:function(){return this.__li;
},_addResetColumnWidthButton:function(event){var t=event.getData();
var s=t.columnButton;
var r=t.menu;
var o;
o=s.factory(g);
r.add(o);
o=s.factory(d,{text:this.tr(e)});
r.add(o);
o.addListener(a,this._onappear,this);
},_onappear:function(event){if(this.__lg){return ;
}this.__lg=true;
{};
this.getBehavior().onAppear(event,event.getType()!==n);
this.__li._updateScrollerWidths();
this.__li._updateScrollBarVisibility();
this.__lg=false;
this.__lh=true;
},_onTableWidthChanged:function(event){if(this.__lg||!this.__lh){return ;
}this.__lg=true;
{};
this.getBehavior().onTableWidthChanged(event);
this.__lg=false;
},_onverticalscrollbarchanged:function(event){if(this.__lg||!this.__lh){return ;
}this.__lg=true;
{};
this.getBehavior().onVerticalScrollBarChanged(event);
qx.event.Timer.once(function(){if(this.__li&&!this.__li.isDisposed()){this.__li._updateScrollerWidths();
this.__li._updateScrollBarVisibility();
}},this,0);
this.__lg=false;
},_oncolumnwidthchanged:function(event){if(this.__lg||!this.__lh){return ;
}this.__lg=true;
{};
this.getBehavior().onColumnWidthChanged(event);
this.__lg=false;
},_onvisibilitychanged:function(event){if(this.__lg||!this.__lh){return ;
}this.__lg=true;
{};
this.getBehavior().onVisibilityChanged(event);
this.__lg=false;
}},destruct:function(){this.__li=null;
}});
})();
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var n=new qx.ui.layout.Grid();
n.setRowFlex(0,1);
n.setColumnFlex(1,1);
n.setColumnFlex(2,1);
this.setLayout(n);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(o,p){if(o){this._showChildControl(h).setValue(o);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(j,k){if(j){this._showChildControl(f).setSource(j);
}else{this._excludeChildControl(f);
}},_applyIcon:function(l,m){if(l){this._showChildControl(i).setSource(l);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(q){var r;

switch(q){case h:r=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(r,{row:0,column:1});
break;
case f:r=new qx.ui.basic.Image(this.getSortIcon());
r.setAnonymous(true);
this._add(r,{row:0,column:2});
break;
case i:r=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(r,{row:0,column:0});
break;
}return r||arguments.callee.base.call(this,q);
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(l){return qx.bom.String.escape(l).replace(/(  |\n)/g,function(j){var k={"  ":e,"\n":d};
return k[j]||j;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(q){if(q.indexOf(f)===0){return b;
}else if(q.length>0&&q.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(n,o,p){n.FROM_CHARCODE=qx.lang.Object.invert(n.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(h,j){var m,o=d;

for(var i=0,l=h.length;i<l;i++){var n=h.charAt(i);
var k=n.charCodeAt(0);

if(j[k]){m=f+j[k]+g;
}else{if(k>0x7F){m=b+k+g;
}else{m=n;
}}o+=m;
}return o;
},unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=q[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==c){if(r.charAt(1).toUpperCase()==e){t=r.substring(2);
if(t.match(/^[0-9A-Fa-f]+$/gi)){s=String.fromCharCode(parseInt(t,16));
}}else{t=r.substring(1);
if(t.match(/^\d+$/gi)){s=String.fromCharCode(parseInt(t,10));
}}}}return s;
});
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(Q){arguments.callee.base.call(this);
this.__lm=Q;
},statics:{getIntegerInstance:function(){var D=qx.util.format.NumberFormat;

if(D._integerInstance==null){D._integerInstance=new D();
D._integerInstance.setMaximumFractionDigits(0);
}return D._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__lm:null,format:function(E){switch(E){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var I=(E<0);

if(I){E=-E;
}
if(this.getMaximumFractionDigits()!=null){var P=Math.pow(10,this.getMaximumFractionDigits());
E=Math.round(E*P)/P;
}var O=String(Math.floor(E)).length;
var F=t+E;
var L=F.substring(0,O);

while(L.length<this.getMinimumIntegerDigits()){L=q+L;
}
if(this.getMaximumIntegerDigits()!=null&&L.length>this.getMaximumIntegerDigits()){L=L.substring(L.length-this.getMaximumIntegerDigits());
}var K=F.substring(O+1);

while(K.length<this.getMinimumFractionDigits()){K+=q;
}
if(this.getMaximumFractionDigits()!=null&&K.length>this.getMaximumFractionDigits()){K=K.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var H=L;
L=t;
var N;

for(N=H.length;N>3;N-=3){L=t+qx.locale.Number.getGroupSeparator(this.__lm)+H.substring(N-3,N)+L;
}L=H.substring(0,N)+L;
}var J=this.getPrefix()?this.getPrefix():t;
var G=this.getPostfix()?this.getPostfix():t;
var M=J+(I?r:t)+L;

if(K.length>0){M+=t+qx.locale.Number.getDecimalSeparator(this.__lm)+K;
}M+=G;
return M;
},parse:function(u){var z=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__lm)+t);
var x=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__lm)+t);
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
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var ce="(\\d\\d?)",cd="format",cc="",cb="abbreviated",ca="wide",bY="(",bX=")",bW="|",bV="stand-alone",bU="wildcard",bJ="default",bI="literal",bH="'",bG="hour",bF="(\\d\\d?\\d?)",bE="ms",bD="narrow",bC="-",bB="quoted_literal",bA='a',cl="HH:mm:ss",cm="+",cj="HHmmss",ck="long",ch='z',ci="0",cf="sec",cg="day",cn='Z',co=" ",bN="min",bM="mm",bP="(\\d+)",bO="h",bR="KK",bQ='L',bT="Z",bS="(\\d\\d+)",bL="EEEE",bK="^",B=":",C='y',D="K",E="a",F="([\\+\\-]\\d\\d:?\\d\\d)",G="GMT",H="dd",I="qx.util.format.DateFormat",J="yyy",K="H",cs="YYYY",cr="y",cq="HH",cp="EE",cw='h',cv="S",cu='s',ct='A',cy="yyyyyy",cx="kk",bk="ss",bl='H',bi='S',bj="MMMM",bo='c',bp="d",bm="([a-zA-Z]+)",bn='k',bg="m",bh='Y',S='D',R="yyyyy",U='K',T="hh",O="SSS",N="MM",Q="yy",P="(\\d\\d\\d\\d\\d\\d+)",M="yyyy-MM-dd HH:mm:ss",L="(\\d\\d\\d\\d\\d+)",bu="short",bv='d',bw="unkown",bx='m',bq="(\\d\\d\\d\\d)",br="(\\d\\d\\d+)",bs="k",bt='M',by="(\\d\\d\\d\\d+)",bz="SS",bd="MMM",bc="s",bb="M",ba='w',Y="EEE",X="$",W="?",V='E',bf="z",be="yyyy";
qx.Class.define(I,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(cV,cW){arguments.callee.base.call(this);

if(!cW){this.__ln=qx.locale.Manager.getInstance().getLocale();
}else{this.__ln=cW;
}
if(cV!=null){this.__lo=cV.toString();
}else{this.__lo=qx.locale.Date.getDateFormat(ck,this.__ln)+co+qx.locale.Date.getDateTimeFormat(cj,cl,this.__ln);
}},statics:{getDateTimeInstance:function(){var cU=qx.util.format.DateFormat;
var cT=qx.locale.Date.getDateFormat(ck)+co+qx.locale.Date.getDateTimeFormat(cj,cl);

if(cU._dateInstance==null||cU._dateInstance.__lo!=cT){cU._dateTimeInstance=new cU();
}return cU._dateTimeInstance;
},getDateInstance:function(){var y=qx.util.format.DateFormat;
var x=qx.locale.Date.getDateFormat(bu)+cc;

if(y._dateInstance==null||y._dateInstance.__lo!=x){y._dateInstance=new y(x);
}return y._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:M,AM_MARKER:"am",PM_MARKER:"pm",MEDIUM_TIMEZONE_NAMES:["GMT"],FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},members:{__ln:null,__lo:null,__lp:null,__lq:null,__lr:null,__ls:function(cX,cY){var da=cc+cX;

while(da.length<cY){da=ci+da;
}return da;
},__lt:function(u){var v=new Date(u.getTime());
var w=v.getDate();

while(v.getMonth()!=0){v.setDate(-1);
w+=v.getDate()+1;
}return w;
},__lu:function(dN){return new Date(dN.getTime()+(3-((dN.getDay()+6)%7))*86400000);
},__lv:function(dd){var df=this.__lu(dd);
var dg=df.getFullYear();
var de=this.__lu(new Date(dg,0,4));
return Math.floor(1.5+(df.getTime()-de.getTime())/86400000/7);
},format:function(dr){if(dr==null){return null;
}var dx=qx.util.format.DateFormat;
var dy=this.__ln;
var dI=dr.getFullYear();
var dC=dr.getMonth();
var dK=dr.getDate();
var ds=dr.getDay();
var dD=dr.getHours();
var dz=dr.getMinutes();
var dE=dr.getSeconds();
var dG=dr.getMilliseconds();
var dJ=dr.getTimezoneOffset();
var dv=dJ>0?1:-1;
var dt=Math.floor(Math.abs(dJ)/60);
var dA=Math.abs(dJ)%60;
this.__lw();
var dH=cc;

for(var i=0;i<this.__lr.length;i++){var dF=this.__lr[i];

if(dF.type==bI){dH+=dF.text;
}else{var dw=dF.character;
var dB=dF.size;
var du=W;

switch(dw){case C:case bh:if(dB==2){du=this.__ls(dI%100,2);
}else{du=dI+cc;

if(dB>du.length){for(var i=du.length;i<dB;i++){du=ci+du;
}}}break;
case S:du=this.__ls(this.__lt(dr),dB);
break;
case bv:du=this.__ls(dK,dB);
break;
case ba:du=this.__ls(this.__lv(dr),dB);
break;
case V:if(dB==2){du=qx.locale.Date.getDayName(bD,ds,dy,cd);
}else if(dB==3){du=qx.locale.Date.getDayName(cb,ds,dy,cd);
}else if(dB==4){du=qx.locale.Date.getDayName(ca,ds,dy,cd);
}break;
case bo:if(dB==2){du=qx.locale.Date.getDayName(bD,ds,dy,bV);
}else if(dB==3){du=qx.locale.Date.getDayName(cb,ds,dy,bV);
}else if(dB==4){du=qx.locale.Date.getDayName(ca,ds,dy,bV);
}break;
case bt:if(dB==1||dB==2){du=this.__ls(dC+1,dB);
}else if(dB==3){du=qx.locale.Date.getMonthName(cb,dC,dy,cd);
}else if(dB==4){du=qx.locale.Date.getMonthName(ca,dC,dy,cd);
}break;
case bQ:if(dB==1||dB==2){du=this.__ls(dC+1,dB);
}else if(dB==3){du=qx.locale.Date.getMonthName(cb,dC,dy,bV);
}else if(dB==4){du=qx.locale.Date.getMonthName(ca,dC,dy,bV);
}break;
case bA:du=(dD<12)?qx.locale.Date.getAmMarker(dy):qx.locale.Date.getPmMarker(dy);
break;
case bl:du=this.__ls(dD,dB);
break;
case bn:du=this.__ls((dD==0)?24:dD,dB);
break;
case U:du=this.__ls(dD%12,dB);
break;
case cw:du=this.__ls(((dD%12)==0)?12:(dD%12),dB);
break;
case bx:du=this.__ls(dz,dB);
break;
case cu:du=this.__ls(dE,dB);
break;
case bi:du=this.__ls(dG,dB);
break;
case ch:if(dB==1){du=G+((dv>0)?bC:cm)+this.__ls(Math.abs(dt))+B+this.__ls(dA,2);
}else if(dB==2){du=dx.MEDIUM_TIMEZONE_NAMES[dt];
}else if(dB==3){du=dx.FULL_TIMEZONE_NAMES[dt];
}break;
case cn:du=((dv>0)?bC:cm)+this.__ls(Math.abs(dt),2)+this.__ls(dA,2);
break;
}dH+=du;
}}return dH;
},parse:function(dO){this.__lx();
var dU=this.__lp.regex.exec(dO);

if(dU==null){throw new Error("Date string '"+dO+"' does not match the date format: "+this.__lo);
}var dP={year:1970,month:0,day:1,hour:0,ispm:false,min:0,sec:0,ms:0};
var dQ=1;

for(var i=0;i<this.__lp.usedRules.length;i++){var dS=this.__lp.usedRules[i];
var dR=dU[dQ];

if(dS.field!=null){dP[dS.field]=parseInt(dR,10);
}else{dS.manipulator(dP,dR);
}dQ+=(dS.groups==null)?1:dS.groups;
}var dT=new Date(dP.year,dP.month,dP.day,(dP.ispm)?(dP.hour+12):dP.hour,dP.min,dP.sec,dP.ms);

if(dP.month!=dT.getMonth()||dP.year!=dT.getFullYear()){throw new Error("Error parsing date '"+dO+"': the value for day or month is too large");
}return dT;
},__lw:function(){if(this.__lr!=null){return;
}this.__lr=[];
var ea;
var dX=0;
var ec=cc;
var dV=this.__lo;
var dY=bJ;
var i=0;

while(i<dV.length){var eb=dV.charAt(i);

switch(dY){case bB:if(eb==bH){if(i+1>=dV.length){i++;
break;
}var dW=dV.charAt(i+1);

if(dW==bH){ec+=eb;
i++;
}else{i++;
dY=bw;
}}else{ec+=eb;
i++;
}break;
case bU:if(eb==ea){dX++;
i++;
}else{this.__lr.push({type:bU,character:ea,size:dX});
ea=null;
dX=0;
dY=bJ;
}break;
default:if((eb>=bA&&eb<=ch)||(eb>=ct&&eb<=cn)){ea=eb;
dY=bU;
}else if(eb==bH){if(i+1>=dV.length){ec+=eb;
i++;
break;
}var dW=dV.charAt(i+1);

if(dW==bH){ec+=eb;
i++;
}i++;
dY=bB;
}else{dY=bJ;
}
if(dY!=bJ){if(ec.length>0){this.__lr.push({type:bI,text:ec});
ec=cc;
}}else{ec+=eb;
i++;
}break;
}}if(ea!=null){this.__lr.push({type:bU,character:ea,size:dX});
}else if(ec.length>0){this.__lr.push({type:bI,text:ec});
}},__lx:function(){if(this.__lp!=null){return ;
}var cE=this.__lo;
this.__ly();
this.__lw();
var cK=[];
var cG=bK;

for(var cC=0;cC<this.__lr.length;cC++){var cL=this.__lr[cC];

if(cL.type==bI){cG+=qx.lang.String.escapeRegexpChars(cL.text);
}else{var cD=cL.character;
var cH=cL.size;
var cF;

for(var cM=0;cM<this.__lq.length;cM++){var cI=this.__lq[cM];

if(cD==cI.pattern.charAt(0)&&cH==cI.pattern.length){cF=cI;
break;
}}if(cF==null){var cJ=cc;

for(var i=0;i<cH;i++){cJ+=cD;
}throw new Error("Malformed date format: "+cE+". Wildcard "+cJ+" is not supported");
}else{cK.push(cF);
cG+=cF.regex;
}}}cG+=X;
var cB;

try{cB=new RegExp(cG);
}catch(dl){throw new Error("Malformed date format: "+cE);
}this.__lp={regex:cB,"usedRules":cK,pattern:cG};
},__ly:function(){var f=qx.util.format.DateFormat;
var m=qx.lang.String;

if(this.__lq!=null){return ;
}var g=this.__lq=[];
var t=function(dp,dq){dq=parseInt(dq,10);

if(dq<f.ASSUME_YEAR_2000_THRESHOLD){dq+=2000;
}else if(dq<100){dq+=1900;
}dp.year=dq;
};
var n=function(dL,dM){dL.month=parseInt(dM,10)-1;
};
var k=function(db,dc){db.ispm=(dc==f.PM_MARKER);
};
var j=function(cN,cO){cN.hour=parseInt(cO,10)%24;
};
var h=function(cz,cA){cz.hour=parseInt(cA,10)%12;
};
var q=function(dm,dn){return;
};
var o=qx.locale.Date.getMonthNames(cb,this.__ln,cd);

for(var i=0;i<o.length;i++){o[i]=m.escapeRegexpChars(o[i].toString());
}var p=function(dh,di){di=m.escapeRegexpChars(di);
dh.month=o.indexOf(di);
};
var c=qx.locale.Date.getMonthNames(ca,this.__ln,cd);

for(var i=0;i<c.length;i++){c[i]=m.escapeRegexpChars(c[i].toString());
}var b=function(cP,cQ){cQ=m.escapeRegexpChars(cQ);
cP.month=c.indexOf(cQ);
};
var e=qx.locale.Date.getDayNames(bD,this.__ln,cd);

for(var i=0;i<e.length;i++){e[i]=m.escapeRegexpChars(e[i].toString());
}var a=function(cR,cS){cS=m.escapeRegexpChars(cS);
cR.month=e.indexOf(cS);
};
var r=qx.locale.Date.getDayNames(cb,this.__ln,cd);

for(var i=0;i<r.length;i++){r[i]=m.escapeRegexpChars(r[i].toString());
}var l=function(z,A){A=m.escapeRegexpChars(A);
z.month=r.indexOf(A);
};
var s=qx.locale.Date.getDayNames(ca,this.__ln,cd);

for(var i=0;i<s.length;i++){s[i]=m.escapeRegexpChars(s[i].toString());
}var d=function(dj,dk){dk=m.escapeRegexpChars(dk);
dj.month=s.indexOf(dk);
};
g.push({pattern:cs,regex:bq,manipulator:t});
g.push({pattern:cr,regex:bP,manipulator:t});
g.push({pattern:Q,regex:bS,manipulator:t});
g.push({pattern:J,regex:br,manipulator:t});
g.push({pattern:be,regex:by,manipulator:t});
g.push({pattern:R,regex:L,manipulator:t});
g.push({pattern:cy,regex:P,manipulator:t});
g.push({pattern:bb,regex:ce,manipulator:n});
g.push({pattern:N,regex:ce,manipulator:n});
g.push({pattern:bd,regex:bY+o.join(bW)+bX,manipulator:p});
g.push({pattern:bj,regex:bY+c.join(bW)+bX,manipulator:b});
g.push({pattern:H,regex:ce,field:cg});
g.push({pattern:bp,regex:ce,field:cg});
g.push({pattern:cp,regex:bY+e.join(bW)+bX,manipulator:a});
g.push({pattern:Y,regex:bY+r.join(bW)+bX,manipulator:l});
g.push({pattern:bL,regex:bY+s.join(bW)+bX,manipulator:d});
g.push({pattern:E,regex:bY+f.AM_MARKER+bW+f.PM_MARKER+bX,manipulator:k});
g.push({pattern:cq,regex:ce,field:bG});
g.push({pattern:K,regex:ce,field:bG});
g.push({pattern:cx,regex:ce,manipulator:j});
g.push({pattern:bs,regex:ce,manipulator:j});
g.push({pattern:bR,regex:ce,field:bG});
g.push({pattern:D,regex:ce,field:bG});
g.push({pattern:T,regex:ce,manipulator:h});
g.push({pattern:bO,regex:ce,manipulator:h});
g.push({pattern:bM,regex:ce,field:bN});
g.push({pattern:bg,regex:ce,field:bN});
g.push({pattern:bk,regex:ce,field:cf});
g.push({pattern:bc,regex:ce,field:cf});
g.push({pattern:O,regex:bF,field:bE});
g.push({pattern:bz,regex:bF,field:bE});
g.push({pattern:cv,regex:bF,field:bE});
g.push({pattern:bT,regex:F,manipulator:q});
g.push({pattern:bf,regex:bm,manipulator:q});
}},destruct:function(){this.__lr=this.__lp=this.__lq=null;
}});
})();
(function(){var k="_",j="format",h="thu",g="sat",f="cldr_day_",e="cldr_month_",d="wed",c="fri",b="tue",a="mon",B="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",q="long",r="medium",o="cldr_am",p="qx.locale.Date",m="cldr_date_time_format_",n="cldr_time_format_",l="HH:mm:ss";
qx.Class.define(p,{statics:{__lz:qx.locale.Manager.getInstance(),getAmMarker:function(be){return this.__lz.localize(o,[],be);
},getPmMarker:function(Y){return this.__lz.localize(s,[],Y);
},getDayNames:function(length,K,L){var L=L?L:j;
{};
var N=[B,a,b,d,h,c,g];
var O=[];

for(var i=0;i<N.length;i++){var M=f+L+k+length+k+N[i];
O.push(this.__lz.localize(M,[],K));
}return O;
},getDayName:function(length,bf,bg,bh){var bh=bh?bh:j;
{};
var bj=[B,a,b,d,h,c,g];
var bi=f+bh+k+length+k+bj[bf];
return this.__lz.localize(bi,[],bg);
},getMonthNames:function(length,bk,bl){var bl=bl?bl:j;
{};
var bn=[];

for(var i=0;i<12;i++){var bm=e+bl+k+length+k+(i+1);
bn.push(this.__lz.localize(bm,[],bk));
}return bn;
},getMonthName:function(length,U,V,W){var W=W?W:j;
{};
var X=e+W+k+length+k+(U+1);
return this.__lz.localize(X,[],V);
},getDateFormat:function(P,Q){{};
var R=v+P;
return this.__lz.localize(R,[],Q);
},getDateTimeFormat:function(F,G,H){var J=m+F;
var I=this.__lz.localize(J,[],H);

if(I==J){I=G;
}return I;
},getTimeFormat:function(bu,bv){{};
var bx=n+bu;
var bw=this.__lz.localize(bx,[],bv);

if(bw!=bx){return bw;
}
switch(bu){case A:case r:return qx.locale.Date.getDateTimeFormat(x,z);
case q:return qx.locale.Date.getDateTimeFormat(w,l);
case t:return qx.locale.Date.getDateTimeFormat(y,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(C){var D={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var E=qx.locale.Date._getTerritory(C);
return D[E]!=null?D[E]:1;
},getWeekendStart:function(br){var bt={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bs=qx.locale.Date._getTerritory(br);
return bt[bs]!=null?bt[bs]:6;
},getWeekendEnd:function(bo){var bp={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var bq=qx.locale.Date._getTerritory(bo);
return bp[bq]!=null?bp[bq]:0;
},isWeekend:function(ba,bb){var bd=qx.locale.Date.getWeekendStart(bb);
var bc=qx.locale.Date.getWeekendEnd(bb);

if(bc>bd){return ((ba>=bd)&&(ba<=bc));
}else{return ((ba>=bd)||(ba<=bc));
}},_getTerritory:function(S){if(S){var T=S.split(k)[1]||S;
}else{T=this.__lz.getTerritory()||this.__lz.getLanguage();
}return T.toUpperCase();
}}});
})();
(function(){var e="auto",d="string",c="number",b="*",a="qx.ui.core.ColumnData";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(){arguments.callee.base.call(this);
this.setColumnWidth(e);
},members:{__lA:null,renderLayout:function(j,top,k,l){this.__lA=k;
},getComputedWidth:function(){return this.__lA;
},getFlex:function(){return this.getLayoutProperties().flex||0;
},setColumnWidth:function(f,g){var g=g||0;
var h=null;

if(typeof f==c){this.setWidth(f);
}else if(typeof f==d){if(f==e){g=1;
}else{var i=f.match(/^[0-9]+(?:\.[0-9]+)?([%\*])$/);

if(i){if(i[1]==b){g=parseFloat(f);
}else{h=f;
}}}}this.setLayoutProperties({flex:g,width:h});
}},settings:{"qx.tableResizeDebug":false}});
})();
(function(){var b="qx.ui.table.columnmodel.resizebehavior.Abstract",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,members:{_setNumColumns:function(c){throw new Error("_setNumColumns is abstract");
},onAppear:function(event,d){throw new Error("onAppear is abstract");
},onTableWidthChanged:function(event){throw new Error("onTableWidthChanged is abstract");
},onVerticalScrollBarChanged:function(event){throw new Error("onVerticalScrollBarChanged is abstract");
},onColumnWidthChanged:function(event){throw new Error("onColumnWidthChanged is abstract");
},onVisibilityChanged:function(event){throw new Error("onVisibilityChanged is abstract");
},_getAvailableWidth:function(){var f=this.getTableColumnModel();
var i=f.getTable();
var e=i._getPaneScrollerArr();

if(!e[0]||!e[0].getLayoutParent().getBounds()){return null;
}var h=e[0].getLayoutParent().getBounds().width;
var g=e[e.length-1];
h-=g.getPaneInsetRight();
return h;
}}});
})();
(function(){var j="Function",h="Boolean",g="minWidth",f="width",e="qx.ui.table.columnmodel.Resize",d="qx.ui.table.columnmodel.resizebehavior.Default",c="__lD",b="maxWidth",a="__lC";
qx.Class.define(d,{extend:qx.ui.table.columnmodel.resizebehavior.Abstract,construct:function(){arguments.callee.base.call(this);
this.__lB=[];
this.__lC=new qx.ui.layout.HBox();
this.__lC.connectToWidget(this);
this.__lD=new qx.util.DeferredCall(this._computeColumnsFlexWidth,this);
},properties:{newResizeBehaviorColumnData:{check:j,init:function(p){return new qx.ui.core.ColumnData();
}},initializeWidthsOnEveryAppear:{check:h,init:false},tableColumnModel:{check:e}},members:{__lC:null,__lE:null,__lB:null,__lD:null,__lF:false,setWidth:function(q,r,s){if(q>=this.__lB.length){throw new Error("Column number out of range");
}this.__lB[q].setColumnWidth(r,s);
this.__lD.schedule();
},setMinWidth:function(W,X){if(W>=this.__lB.length){throw new Error("Column number out of range");
}this.__lB[W].setMinWidth(X);
this.__lD.schedule();
},setMaxWidth:function(D,E){if(D>=this.__lB.length){throw new Error("Column number out of range");
}this.__lB[D].setMaxWidth(E);
this.__lD.schedule();
},set:function(m,n){for(var o in n){switch(o){case f:this.setWidth(m,n[o]);
break;
case g:this.setMinWidth(m,n[o]);
break;
case b:this.setMaxWidth(m,n[o]);
break;
default:throw new Error("Unknown property: "+o);
}}},onAppear:function(event,t){if(t===true||!this.__lF||this.getInitializeWidthsOnEveryAppear()){this._computeColumnsFlexWidth();
this.__lF=true;
}},onTableWidthChanged:function(event){this._computeColumnsFlexWidth();
},onVerticalScrollBarChanged:function(event){this._computeColumnsFlexWidth();
},onColumnWidthChanged:function(event){this._extendNextColumn(event);
},onVisibilityChanged:function(event){var k=event.getData();
if(k.visible){this._computeColumnsFlexWidth();
return;
}this._extendLastColumn(event);
},_setNumColumns:function(u){var v=this.__lB;
if(u<=v.length){v.splice(u,v.length);
return;
}for(var i=v.length;i<u;i++){v[i]=this.getNewResizeBehaviorColumnData()();
v[i].columnNumber=i;
}},getLayoutChildren:function(){return this.__lE;
},_computeColumnsFlexWidth:function(){this.__lD.cancel();
var A=this._getAvailableWidth();

if(A===null){return;
}var w=this.getTableColumnModel();
var y=w.getVisibleColumns();
var z=y.length;
var x=this.__lB;
var i,l;

if(z===0){return;
}var C=[];

for(i=0;i<z;i++){C.push(x[y[i]]);
}this.__lE=C;
this.__lG();
this.__lC.renderLayout(A,100);
for(i=0,l=C.length;i<l;i++){var B=C[i].getComputedWidth();
w.setColumnWidth(y[i],B);
}},__lG:function(){this.__lC.invalidateChildrenCache();
var F=this.__lE;

for(var i=0,l=F.length;i<l;i++){F[i].invalidateLayoutCache();
}},_extendNextColumn:function(event){var S=this.getTableColumnModel();
var V=event.getData();
var Q=S.getVisibleColumns();
var P=this._getAvailableWidth();
var O=Q.length;
if(V.newWidth>V.oldWidth){return ;
}var i;
var R;
var U=0;

for(i=0;i<O;i++){U+=S.getColumnWidth(Q[i]);
}if(U<P){for(i=0;i<Q.length;i++){if(Q[i]==V.col){R=Q[i+1];
break;
}}
if(R){var T=(P-(U-S.getColumnWidth(R)));
S.setColumnWidth(R,T);
}}},_extendLastColumn:function(event){var J=this.getTableColumnModel();
var N=event.getData();
if(N.visible){return;
}var I=J.getVisibleColumns();
if(I.length==0){return;
}var H=this._getAvailableWidth(J);
var G=I.length;
var i;
var L;
var M=0;

for(i=0;i<G;i++){M+=J.getColumnWidth(I[i]);
}if(M<H){L=I[I.length-1];
var K=(H-(M-J.getColumnWidth(L)));
J.setColumnWidth(L,K);
}},_getResizeColumnData:function(){return this.__lB;
}},destruct:function(){this.__lB=this.__lE=null;
this._disposeObjects(a,c);
}});
})();
(function(){var z="column-button",y="Function",w="Boolean",v="qx.event.type.Data",u="statusbar",t="qx.ui.table.pane.CellEvent",s="PageUp",r="__lR",q='"',p="changeLocale",bM="changeSelection",bL="qx.dynlocale",bK="Enter",bJ="metaDataChanged",bI="dataChanged",bH="on",bG="_applyStatusBarVisible",bF="columnVisibilityMenuCreateStart",bE="blur",bD="qx.ui.table.Table",G="columnVisibilityMenuCreateEnd",H="Use 'resetSelection' instead.",E="verticalScrollBarChanged",F="_applyMetaColumnCounts",C="one of one row",D="focus",A="changeDataRowRenderer",B="changeHeaderCellHeight",O="Escape",P="A",bf="changeSelectionModel",bb="Left",bn="Down",bi="Integer",bz="_applyHeaderCellHeight",bt="visibilityChanged",V="qx.ui.table.ITableModel",bC="orderChanged",bB="_applySelectionModel",bA="menu",T="_applyAdditionalStatusBarText",X="_applyFocusCellOnMouseMove",ba="table",bd="_applyColumnVisibilityButtonVisible",bg="changeTableModel",bj="qx.event.type.Event",bp="tableWidthChanged",bv="End",I="Object",J="_applyShowCellFocusIndicator",W="__lI",bm="resize",bl="changeScrollY",bk="_applyTableModel",br="menu-button",bq="_applyKeepFirstVisibleRowComplete",bh="widthChanged",bo="Home",m="_applyRowHeight",bu="F2",K="appear",L="Up",bc="%1 rows",n="qx.ui.table.selection.Model",o="one row",S="__lP",M="PageDown",N="%1 of %2 rows",R="keypress",be="changeRowHeight",bx="__lQ",bw="Number",Y="__lH",by="changeVisible",U="qx.ui.table.IRowRenderer",bs="Right",Q="Space";
qx.Class.define(bD,{extend:qx.ui.core.Widget,construct:function(dQ,dR){arguments.callee.base.call(this);
if(!dR){dR={};
}
if(dR.selectionManager){this.setNewSelectionManager(dR.selectionManager);
}
if(dR.selectionModel){this.setNewSelectionModel(dR.selectionModel);
}
if(dR.tableColumnModel){this.setNewTableColumnModel(dR.tableColumnModel);
}
if(dR.tablePane){this.setNewTablePane(dR.tablePane);
}
if(dR.tablePaneHeader){this.setNewTablePaneHeader(dR.tablePaneHeader);
}
if(dR.tablePaneScroller){this.setNewTablePaneScroller(dR.tablePaneScroller);
}
if(dR.tablePaneModel){this.setNewTablePaneModel(dR.tablePaneModel);
}
if(dR.columnMenu){this.setNewColumnMenu(dR.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__lH=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__lH,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__lI=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(dQ||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(R,this._onKeyPress);
this.addListener(D,this._onFocusChanged);
this.addListener(bE,this._onFocusChanged);
var dS=new qx.ui.core.Widget().set({height:0});
this._add(dS);
dS.addListener(bm,this._onResize,this);
this.__lJ=null;
this.__lK=null;
if(qx.core.Variant.isSet(bL,bH)){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}this.initStatusBarVisible();
},events:{"columnVisibilityMenuCreateStart":v,"columnVisibilityMenuCreateEnd":v,"tableWidthChanged":bj,"verticalScrollBarChanged":v,"cellClick":t,"cellDblclick":t,"cellContextmenu":t,"dataEdited":v},statics:{__lL:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:ba},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},selectable:{refine:true,init:false},selectionModel:{check:n,apply:bB,event:bf},tableModel:{check:V,apply:bk,event:bg},rowHeight:{check:bw,init:20,apply:m,event:be},forceLineHeight:{check:w,init:true},headerCellHeight:{check:bi,init:16,apply:bz,event:B,nullable:true},statusBarVisible:{check:w,init:true,apply:bG},additionalStatusBarText:{nullable:true,init:null,apply:T},columnVisibilityButtonVisible:{check:w,init:true,apply:bd},metaColumnCounts:{check:I,apply:F},focusCellOnMouseMove:{check:w,init:false,apply:X},rowFocusChangeModifiesSelection:{check:w,init:true},showCellFocusIndicator:{check:w,init:true,apply:J},keepFirstVisibleRowComplete:{check:w,init:true,apply:bq},alwaysUpdateCells:{check:w,init:false},dataRowRenderer:{check:U,init:null,nullable:true,event:A},modalCellEditorPreOpenFunction:{check:y,init:null,nullable:true},newColumnMenu:{check:y,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:y,init:function(eg){return new qx.ui.table.selection.Manager(eg);
}},newSelectionModel:{check:y,init:function(d){return new qx.ui.table.selection.Model(d);
}},newTableColumnModel:{check:y,init:function(cD){return new qx.ui.table.columnmodel.Basic(cD);
}},newTablePane:{check:y,init:function(cC){return new qx.ui.table.pane.Pane(cC);
}},newTablePaneHeader:{check:y,init:function(dY){return new qx.ui.table.pane.Header(dY);
}},newTablePaneScroller:{check:y,init:function(c){return new qx.ui.table.pane.Scroller(c);
}},newTablePaneModel:{check:y,init:function(cR){return new qx.ui.table.pane.Model(cR);
}}},members:{__lJ:null,__lK:null,__lH:null,__lI:null,__lM:null,__lN:null,__lO:null,__lP:null,__lQ:null,__lR:null,_createChildControlImpl:function(dx){var dy;

switch(dx){case u:dy=new qx.ui.basic.Label();
dy.set({allowGrowX:true});
this._add(dy);
break;
case z:dy=this.getNewColumnMenu()();
dy.set({focusable:false});
var dz=dy.factory(bA,{table:this});
dz.addListener(K,this._initColumnMenu,this);
break;
}return dy||arguments.callee.base.call(this,dx);
},_applySelectionModel:function(cA,cB){this.__lI.setSelectionModel(cA);

if(cB!=null){cB.removeListener(bM,this._onSelectionChanged,this);
}cA.addListener(bM,this._onSelectionChanged,this);
},_applyRowHeight:function(dT,dU){var dV=this._getPaneScrollerArr();

for(var i=0;i<dV.length;i++){dV[i].updateVerScrollBarMaximum();
}},_applyHeaderCellHeight:function(ec,ed){var ee=this._getPaneScrollerArr();

for(var i=0;i<ee.length;i++){ee[i].getHeader().setHeight(ec);
}},getEmptyTableModel:function(){if(!this.__lR){this.__lR=new qx.ui.table.model.Simple();
this.__lR.setColumns([]);
this.__lR.setData([]);
}return this.__lR;
},_applyTableModel:function(e,f){this.getTableColumnModel().init(e.getColumnCount(),this);

if(f!=null){f.removeListener(bJ,this._onTableModelMetaDataChanged,this);
f.removeListener(bI,this._onTableModelDataChanged,this);
}e.addListener(bJ,this._onTableModelMetaDataChanged,this);
e.addListener(bI,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,e.getRowCount(),0,e.getColumnCount());
this._onTableModelMetaDataChanged();
},getTableColumnModel:function(){if(!this.__lQ){var du=this.__lQ=this.getNewTableColumnModel()(this);
du.addListener(bt,this._onColVisibilityChanged,this);
du.addListener(bh,this._onColWidthChanged,this);
du.addListener(bC,this._onColOrderChanged,this);
var dt=this.getTableModel();
du.init(dt.getColumnCount(),this);
var ds=this._getPaneScrollerArr();

for(var i=0;i<ds.length;i++){var dv=ds[i];
var dw=dv.getTablePaneModel();
dw.setTableColumnModel(du);
}}return this.__lQ;
},_applyStatusBarVisible:function(ea,eb){if(ea){this._showChildControl(u);
}else{this._excludeChildControl(u);
}
if(ea){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(em,en){this.__lM=em;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(dq,dr){if(dq){this._showChildControl(z);
}else{this._excludeChildControl(z);
}},_applyMetaColumnCounts:function(bQ,bR){var bY=bQ;
var bS=this._getPaneScrollerArr();
var bW={};

if(bQ>bR){var cb=qx.event.Registration.getManager(bS[0]);

for(var cc in qx.ui.table.Table.__lL){bW[cc]={};
bW[cc].capture=cb.getListeners(bS[0],cc,true);
bW[cc].bubble=cb.getListeners(bS[0],cc,false);
}}this._cleanUpMetaColumns(bY.length);
var bX=0;

for(var i=0;i<bS.length;i++){var cd=bS[i];
var ca=cd.getTablePaneModel();
ca.setFirstColumnX(bX);
ca.setMaxColumnCount(bY[i]);
bX+=bY[i];
}if(bY.length>bS.length){var bV=this.getTableColumnModel();

for(var i=bS.length;i<bY.length;i++){var ca=this.getNewTablePaneModel()(bV);
ca.setFirstColumnX(bX);
ca.setMaxColumnCount(bY[i]);
bX+=bY[i];
var cd=this.getNewTablePaneScroller()(this);
cd.setTablePaneModel(ca);
cd.addListener(bl,this._onScrollY,this);
for(cc in qx.ui.table.Table.__lL){if(!bW[cc]){break;
}
if(bW[cc].capture&&bW[cc].capture.length>0){var bT=bW[cc].capture;

for(var i=0;i<bT.length;i++){var bU=bT[i].context;

if(!bU){bU=this;
}else if(bU==bS[0]){bU=cd;
}cd.addListener(cc,bT[i].handler,bU,true);
}}
if(bW[cc].bubble&&bW[cc].bubble.length>0){var cf=bW[cc].bubble;

for(var i=0;i<cf.length;i++){var bU=cf[i].context;

if(!bU){bU=this;
}else if(bU==bS[0]){bU=cd;
}cd.addListener(cc,cf[i].handler,bU,false);
}}}var ce=(i==bY.length-1)?1:0;
this.__lH.add(cd,{flex:ce});
bS=this._getPaneScrollerArr();
}}for(var i=0;i<bS.length;i++){var cd=bS[i];
var cg=(i==(bS.length-1));
cd.getHeader().setHeight(this.getHeaderCellHeight());
cd.setTopRightWidget(cg?this.getChildControl(z):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(z);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cW,cX){var cY=this._getPaneScrollerArr();

for(var i=0;i<cY.length;i++){cY[i].setFocusCellOnMouseMove(cW);
}},_applyShowCellFocusIndicator:function(eY,fa){var fb=this._getPaneScrollerArr();

for(var i=0;i<fb.length;i++){fb[i].setShowCellFocusIndicator(eY);
}},_applyKeepFirstVisibleRowComplete:function(eV,eW){var eX=this._getPaneScrollerArr();

for(var i=0;i<eX.length;i++){eX[i].onKeepFirstVisibleRowCompleteChanged();
}},getSelectionManager:function(){return this.__lI;
},_getPaneScrollerArr:function(){return this.__lH.getChildren();
},getPaneScroller:function(b){return this._getPaneScrollerArr()[b];
},_cleanUpMetaColumns:function(eh){var ei=this._getPaneScrollerArr();

if(ei!=null){for(var i=ei.length-1;i>=eh;i--){ei[i].destroy();
}}},_onChangeLocale:function(ef){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(cu){var cv=this._getPaneScrollerArr();

for(var i=0;i<cv.length;i++){cv[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(cP){var cQ=this._getPaneScrollerArr();

for(var i=0;i<cQ.length;i++){cQ[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(ek){var el=ek.getData();
this._updateTableData(el.firstRow,el.lastRow,el.firstColumn,el.lastColumn,el.removeStart,el.removeCount);
},_updateTableData:function(cH,cI,cJ,cK,cL,cM){var cN=this._getPaneScrollerArr();
if(cM){this.getSelectionModel().removeSelectionInterval(cL,cL+cM);
}
for(var i=0;i<cN.length;i++){cN[i].onTableModelDataChanged(cH,cI,cJ,cK);
}var cO=this.getTableModel().getRowCount();

if(cO!=this.__lN){this.__lN=cO;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(cF){if(!this.__lO){this.__lO=true;
var cG=this._getPaneScrollerArr();

for(var i=0;i<cG.length;i++){cG[i].setScrollY(cF.getData());
}this.__lO=false;
}},_onKeyPress:function(eM){if(!this.getEnabled()){return;
}var eT=this.__lK;
var eQ=true;
var eU=eM.getKeyIdentifier();

if(this.isEditing()){if(eM.getModifiers()==0){switch(eU){case bK:this.stopEditing();
var eT=this.__lK;
this.moveFocusedCell(0,1);

if(this.__lK!=eT){eQ=this.startEditing();
}break;
case O:this.cancelEditing();
this.focus();
break;
default:eQ=false;
break;
}}}else{if(eM.isCtrlPressed()){eQ=true;

switch(eU){case P:var eR=this.getTableModel().getRowCount();

if(eR>0){this.getSelectionModel().setSelectionInterval(0,eR-1);
}break;
default:eQ=false;
break;
}}else{switch(eU){case Q:this.__lI.handleSelectKeyDown(this.__lK,eM);
break;
case bu:case bK:eQ=this.startEditing();
break;
case bo:this.setFocusedCell(this.__lJ,0,true);
break;
case bv:var eR=this.getTableModel().getRowCount();
this.setFocusedCell(this.__lJ,eR-1,true);
break;
case bb:this.moveFocusedCell(-1,0);
break;
case bs:this.moveFocusedCell(1,0);
break;
case L:this.moveFocusedCell(0,-1);
break;
case bn:this.moveFocusedCell(0,1);
break;
case s:case M:var eP=this.getPaneScroller(0);
var eS=eP.getTablePane();
var eR=eS.getVisibleRowCount()-1;
var eO=this.getRowHeight();
var eN=(eU==s)?-1:1;
eP.setScrollY(eP.getScrollY()+eN*eR*eO);
this.moveFocusedCell(0,eN*eR);
break;
default:eQ=false;
}}}
if(eT!=this.__lK&&this.getRowFocusChangeModifiesSelection()){this.__lI.handleMoveKeyDown(this.__lK,eM);
}
if(eQ){eM.preventDefault();
eM.stopPropagation();
}},_onFocusChanged:function(dN){var dO=this._getPaneScrollerArr();

for(var i=0;i<dO.length;i++){dO[i].onFocusChanged();
}},_onColVisibilityChanged:function(dA){var dB=this._getPaneScrollerArr();

for(var i=0;i<dB.length;i++){dB[i].onColVisibilityChanged();
}var dC=dA.getData();

if(this.__lP!=null&&dC.col!=null&&dC.visible!=null){this.__lP[dC.col].setVisible(dC.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dJ){var dK=this._getPaneScrollerArr();

for(var i=0;i<dK.length;i++){var dL=dJ.getData();
dK[i].setColumnWidth(dL.col,dL.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(bO){var bP=this._getPaneScrollerArr();

for(var i=0;i<bP.length;i++){bP[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(et){var eu=this._getMetaColumnAtPageX(et);
return (eu!=-1)?this.getPaneScroller(eu):null;
},setFocusedCell:function(dD,dE,dF){if(!this.isEditing()&&(dD!=this.__lJ||dE!=this.__lK)){if(dD===null){dD=0;
}this.__lJ=dD;
this.__lK=dE;
var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].setFocusedCell(dD,dE);
}
if(dD!==null&&dF){this.scrollCellVisible(dD,dE);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},clearSelection:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
this.resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__lJ;
},getFocusedRow:function(){return this.__lK;
},highlightFocusedRow:function(eo){this.getDataRowRenderer().setHighlightFocusRow(eo);
},clearFocusedRowHighlight:function(){this.resetCellFocus();
var bN=this._getPaneScrollerArr();

for(var i=0;i<bN.length;i++){bN[i].onFocusChanged();
}},moveFocusedCell:function(ev,ew){var eA=this.__lJ;
var eB=this.__lK;

if(eA===null||eB===null){return;
}
if(ev!=0){var ez=this.getTableColumnModel();
var x=ez.getVisibleX(eA);
var ey=ez.getVisibleColumnCount();
x=qx.lang.Number.limit(x+ev,0,ey-1);
eA=ez.getVisibleColumnAtX(x);
}
if(ew!=0){var ex=this.getTableModel();
eB=qx.lang.Number.limit(eB+ew,0,ex.getRowCount()-1);
}this.setFocusedCell(eA,eB,true);
},scrollCellVisible:function(cq,cr){var cs=this.getTableColumnModel();
var x=cs.getVisibleX(cq);
var ct=this._getMetaColumnAtColumnX(x);

if(ct!=-1){this.getPaneScroller(ct).scrollCellVisible(cq,cr);
}},isEditing:function(){if(this.__lJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__lJ);
var dM=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(dM).isEditing();
}return false;
},startEditing:function(){if(this.__lJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__lJ);
var dX=this._getMetaColumnAtColumnX(x);
var dW=this.getPaneScroller(dX).startEditing();
return dW;
}return false;
},stopEditing:function(){if(this.__lJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__lJ);
var eL=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eL).stopEditing();
}},cancelEditing:function(){if(this.__lJ!=null){var x=this.getTableColumnModel().getVisibleX(this.__lJ);
var cE=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(cE).cancelEditing();
}},updateContent:function(){var ej=this._getPaneScrollerArr();

for(var i=0;i<ej.length;i++){ej[i].getTablePane().updateContent();
}},blockHeaderElements:function(){var a=this._getPaneScrollerArr();

for(var i=0;i<a.length;i++){a[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(z).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var g=this._getPaneScrollerArr();

for(var i=0;i<g.length;i++){g[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(z).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(h){var j=this._getPaneScrollerArr();

for(var i=0;i<j.length;i++){var k=j[i].getContainerLocation();

if(h>=k.left&&h<=k.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(cw){var cy=this.getMetaColumnCounts();
var cz=0;

for(var i=0;i<cy.length;i++){var cx=cy[i];
cz+=cx;

if(cx==-1||cw<cz){return i;
}}return -1;
},_updateStatusBar:function(){var cS=this.getTableModel();

if(this.getStatusBarVisible()){var cT=this.getSelectionModel().getSelectedCount();
var cV=cS.getRowCount();
var cU;

if(cV>=0){if(cT==0){cU=this.trn(o,bc,cV,cV);
}else{cU=this.trn(C,N,cV,cT,cV);
}}
if(this.__lM){if(cU){cU+=this.__lM;
}else{cU=this.__lM;
}}
if(cU){this.getChildControl(u).setValue(cU);
}}},_updateScrollerWidths:function(){var cm=this._getPaneScrollerArr();

for(var i=0;i<cm.length;i++){var co=(i==(cm.length-1));
var cp=cm[i].getTablePaneModel().getTotalWidth();
cm[i].setPaneWidth(cp);
var cn=co?1:0;
cm[i].setLayoutProperties({flex:cn});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var dk=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var dn=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var dh=this._getPaneScrollerArr();
var dj=false;
var dm=false;

for(var i=0;i<dh.length;i++){var dp=(i==(dh.length-1));
var di=dh[i].getNeededScrollBars(dj,!dp);

if(di&dk){dj=true;
}
if(dp&&(di&dn)){dm=true;
}}for(var i=0;i<dh.length;i++){var dp=(i==(dh.length-1));
var dl;
dh[i].setHorizontalScrollBarVisible(dj);
if(dp){dl=dh[i].getVerticalScrollBarVisible();
}dh[i].setVerticalScrollBarVisible(dp&&dm);
if(dp&&dm!=dl){this.fireDataEvent(E,dm);
}}},_initColumnMenu:function(){var dc=this.getTableModel();
var dd=this.getTableColumnModel();
var de=this.getChildControl(z);
de.empty();
var db=de.getMenu();
var df={table:this,menu:db,columnButton:de};
this.fireDataEvent(bF,df);
this.__lP={};

for(var dg=0,l=dc.getColumnCount();dg<l;dg++){var da=de.factory(br,{text:dc.getColumnName(dg),column:dg,bVisible:dd.isColumnVisible(dg)});
qx.core.Assert.assertInterface(da,qx.ui.table.IColumnMenuItem);
da.addListener(by,this._createColumnVisibilityCheckBoxHandler(dg),this);
this.__lP[dg]=da;
}var df={table:this,menu:db,columnButton:de};
this.fireDataEvent(G,df);
},_createColumnVisibilityCheckBoxHandler:function(dP){return function(eE){var eF=this.getTableColumnModel();
eF.setColumnVisible(dP,eE.getData());
};
},setColumnWidth:function(eC,eD){this.getTableColumnModel().setColumnWidth(eC,eD);
},_onResize:function(){this.fireEvent(bp);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(ch,ci,self,cj){if(arguments.callee.self.__lL[ch]){var cl=[ch];

for(var i=0,ck=this._getPaneScrollerArr();i<ck.length;i++){cl.push(ck[i].addListener.apply(ck[i],arguments));
}return cl.join(q);
}else{return arguments.callee.base.call(this,ch,ci,self,cj);
}},removeListener:function(ep,eq,self,er){if(arguments.callee.self.__lL[ep]){for(var i=0,es=this._getPaneScrollerArr();i<es.length;i++){es[i].removeListener.apply(es[i],arguments);
}}else{arguments.callee.base.call(this,ep,eq,self,er);
}},removeListenerById:function(eG){var eK=eG.split(q);
var eJ=eK.shift();

if(arguments.callee.self.__lL[eJ]){var eI=true;

for(var i=0,eH=this._getPaneScrollerArr();i<eH.length;i++){eI=eH[i].removeListenerById.call(eH[i],eK[i])&&eI;
}return eI;
}else{return arguments.callee.base.call(this,eG);
}},destroy:function(){this.getChildControl(z).getMenu().destroy();
arguments.callee.base.call(this);
}},destruct:function(){if(qx.core.Variant.isSet(bL,bH)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}var dI=this.getSelectionModel();

if(dI){dI.dispose();
}var dH=this.getDataRowRenderer();

if(dH){dH.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(W,Y,r,r,bx);
this._disposeMap(S);
}});
})();
(function(){var b="qx.ui.table.IRowRenderer";
qx.Interface.define(b,{members:{updateDataRowElement:function(d,e){},getRowHeightStyle:function(f){},createRowStyle:function(a){},getRowClass:function(c){}}});
})();
(function(){var t="",s="table-row-background-even",r="table-row-background-selected",q="table-row",p="background-color:",o="table-row-background-focused",n=';border-bottom: 1px solid ',m=';color:',l="table-row-selected",k="table-row-background-odd",d="default",j="table-row-background-focused-selected",g="qx.ui.table.rowrenderer.Default",c="table-row-line",b="'",f="height:",e=";",h="px;",a="1px solid ",i="Boolean";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){arguments.callee.base.call(this);
this.__lS=t;
this.__lS={};
this.__lT={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(d));
var w=qx.theme.manager.Color.getInstance();
this.__lT.bgcolFocusedSelected=w.resolve(j);
this.__lT.bgcolFocused=w.resolve(o);
this.__lT.bgcolSelected=w.resolve(r);
this.__lT.bgcolEven=w.resolve(s);
this.__lT.bgcolOdd=w.resolve(k);
this.__lT.colSelected=w.resolve(l);
this.__lT.colNormal=w.resolve(q);
this.__lT.horLine=w.resolve(c);
},properties:{highlightFocusRow:{check:i,init:true}},members:{__lT:null,__lU:null,__lS:null,_insetY:1,_renderFont:function(u){if(u){this.__lU=u.getStyles();
this.__lS=qx.bom.element.Style.compile(this.__lU);
this.__lS=this.__lS.replace(/"/g,b);
}else{this.__lS=t;
this.__lU=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(x,y){var A=this.__lU;
var z=y.style;
qx.bom.element.Style.setStyles(y,A);

if(x.focusedRow&&this.getHighlightFocusRow()){z.backgroundColor=x.selected?this.__lT.bgcolFocusedSelected:this.__lT.bgcolFocused;
}else{if(x.selected){z.backgroundColor=this.__lT.bgcolSelected;
}else{z.backgroundColor=(x.row%2==0)?this.__lT.bgcolEven:this.__lT.bgcolOdd;
}}z.color=x.selected?this.__lT.colSelected:this.__lT.colNormal;
z.borderBottom=a+this.__lT.horLine;
},getRowHeightStyle:function(v){if(qx.bom.client.Feature.CONTENT_BOX){v-=this._insetY;
}return f+v+h;
},createRowStyle:function(C){var D=[];
D.push(e);
D.push(this.__lS);
D.push(p);

if(C.focusedRow&&this.getHighlightFocusRow()){D.push(C.selected?this.__lT.bgcolFocusedSelected:this.__lT.bgcolFocused);
}else{if(C.selected){D.push(this.__lT.bgcolSelected);
}else{D.push((C.row%2==0)?this.__lT.bgcolEven:this.__lT.bgcolOdd);
}}D.push(m);
D.push(C.selected?this.__lT.colSelected:this.__lT.colNormal);
D.push(n,this.__lT.horLine);
return D.join(t);
},getRowClass:function(B){return t;
}},destruct:function(){this.__lT=this.__lU=this.__lS=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var h="menu-button",g="table-column-reset-button",f="separator",e="user-button",d="qx.ui.table.columnmenu.Button",c="menu";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){arguments.callee.base.call(this);
this.__lV=new qx.ui.core.Blocker(this);
},members:{__lW:null,__lV:null,factory:function(j,k){switch(j){case c:var m=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__lV;
},empty:function(){var a=this.getMenu();
var b=a.getChildren();

for(var i=0,l=b.length;i<l;i++){b[0].destroy();
}}},destruct:function(){this.__lV.dispose();
}});
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
(function(){var d="qx.ui.table.selection.Model",c="qx.ui.table.selection.Manager";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
},properties:{selectionModel:{check:d}},members:{__mH:null,handleMouseDown:function(r,s){if(s.isLeftPressed()){var t=this.getSelectionModel();

if(!t.isSelectedIndex(r)){this._handleSelectEvent(r,s);
this.__mH=true;
}else{this.__mH=false;
}}else if(s.isRightPressed()&&s.getModifiers()==0){var t=this.getSelectionModel();

if(!t.isSelectedIndex(r)){t.setSelectionInterval(r,r);
}}},handleMouseUp:function(p,q){if(q.isLeftPressed()&&!this.__mH){this._handleSelectEvent(p,q);
}},handleClick:function(a,b){},handleSelectKeyDown:function(n,o){this._handleSelectEvent(n,o);
},handleMoveKeyDown:function(e,f){var h=this.getSelectionModel();

switch(f.getModifiers()){case 0:h.setSelectionInterval(e,e);
break;
case qx.event.type.Dom.SHIFT_MASK:var g=h.getAnchorSelectionIndex();

if(g==-1){h.setSelectionInterval(e,e);
}else{h.setSelectionInterval(g,e);
}break;
}},_handleSelectEvent:function(i,j){var m=this.getSelectionModel();
var k=m.getLeadSelectionIndex();
var l=m.getAnchorSelectionIndex();

if(j.isShiftPressed()){if(i!=k||m.isSelectionEmpty()){if(l==-1){l=i;
}
if(j.isCtrlOrCommandPressed()){m.addSelectionInterval(l,i);
}else{m.setSelectionInterval(l,i);
}}}else if(j.isCtrlOrCommandPressed()){if(m.isSelectedIndex(i)){m.removeSelectionInterval(i,i);
}else{m.addSelectionInterval(i,i);
}}else{m.setSelectionInterval(i,i);
}}}});
})();
(function(){var bD="",bC="Number",bB='</div>',bA='" ',bz="paneUpdated",by='<div>',bx="</div>",bw="overflow: hidden;",bv="qx.event.type.Data",bu="paneReloadsData",bV="div",bU='style="',bT="_applyMaxCacheLines",bS="qx.ui.table.pane.Pane",bR="width: 100%;",bQ="qx.event.type.Event",bP="_applyVisibleRowCount",bO='>',bN="line-height: ",bM="appear",bK='class="',bL="width:100%;",bI="px;",bJ='<div ',bG="'>",bH="_applyFirstVisibleRow",bE="<div style='",bF=";position:relative;";
qx.Class.define(bS,{extend:qx.ui.core.Widget,construct:function(T){arguments.callee.base.call(this);
this.__mM=T;
this.__mN=0;
this.__mO=0;
this.__mP=[];
},events:{"paneReloadsData":bv,"paneUpdated":bQ},properties:{firstVisibleRow:{check:bC,init:0,apply:bH},visibleRowCount:{check:bC,init:0,apply:bP},maxCacheLines:{check:bC,init:1000,apply:bT},allowShrinkX:{refine:true,init:false}},members:{__mO:null,__mN:null,__mM:null,__mQ:null,__mR:null,__mS:null,__mP:null,__mT:0,_applyFirstVisibleRow:function(bs,bt){this.updateContent(false,bs-bt);
},_applyVisibleRowCount:function(ct,cu){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__mM;
},getTable:function(){return this.__mM.getTable();
},setFocusedCell:function(bW,bX,bY){if(bW!=this.__mS||bX!=this.__mR){var ca=this.__mR;
this.__mS=bW;
this.__mR=bX;
if(bX!=ca&&!bY){if(ca!==null){this.updateContent(false,null,ca,true);
}
if(bX!==null){this.updateContent(false,null,bX,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(X,Y){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(cn,co,cp,cq){this.__mU();
var cs=this.getFirstVisibleRow();
var cr=this.getVisibleRowCount();

if(co==-1||co>=cs&&cn<cs+cr){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(U,V){if(this.__mT>=U&&U!==-1){this.__mU();
}},__mU:function(){this.__mP=[];
this.__mT=0;
},__mV:function(m,n,o){if(!n&&!o&&this.__mP[m]){return this.__mP[m];
}else{return null;
}},__mW:function(bn,bo,bp,bq){var br=this.getMaxCacheLines();

if(!bp&&!bq&&!this.__mP[bn]&&br>0){this._applyMaxCacheLines(br);
this.__mP[bn]=bo;
this.__mT+=1;
}},updateContent:function(cv,cw,cx,cy){if(cv){this.__mU();
}if(cw&&Math.abs(cw)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(cw);
}else if(cy&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(cx);
}else{this._updateAllRows();
}},_updateRowStyles:function(a){var e=this.getContentElement().getDomElement();

if(!e||!e.firstChild){this._updateAllRows();
return;
}var j=this.getTable();
var c=j.getSelectionModel();
var f=j.getTableModel();
var k=j.getDataRowRenderer();
var d=e.firstChild.childNodes;
var h={table:j};
var l=this.getFirstVisibleRow();
var y=0;
var b=d.length;

if(a!=null){var g=a-l;

if(g>=0&&g<b){l=a;
y=g;
b=g+1;
}else{return;
}}
for(;y<b;y++,l++){h.row=l;
h.selected=c.isSelectedIndex(l);
h.focusedRow=(this.__mR==l);
h.rowData=f.getRowData(l);
k.updateDataRowElement(h,d[y]);
}},_getRowsHtml:function(p,q){var w=this.getTable();
var B=w.getSelectionModel();
var t=w.getTableModel();
var u=w.getTableColumnModel();
var P=this.getPaneScroller().getTablePaneModel();
var G=w.getDataRowRenderer();
t.prefetchRows(p,p+q-1);
var M=w.getRowHeight();
var O=P.getColumnCount();
var v=0;
var s=[];
for(var x=0;x<O;x++){var R=P.getColumnAtX(x);
var A=u.getColumnWidth(R);
s.push({col:R,xPos:x,editable:t.isColumnEditable(R),focusedCol:this.__mS==R,styleLeft:v,styleWidth:A});
v+=A;
}var Q=[];
var S=false;

for(var z=p;z<p+q;z++){var C=B.isSelectedIndex(z);
var F=(this.__mR==z);
var J=this.__mV(z,C,F);

if(J){Q.push(J);
continue;
}var I=[];
var L={table:w};
L.styleHeight=M;
L.row=z;
L.selected=C;
L.focusedRow=F;
L.rowData=t.getRowData(z);

if(!L.rowData){S=true;
}I.push(bJ);
var r=G.getRowClass(L);

if(r){I.push(bK,r,bA);
}var H=G.createRowStyle(L);
H+=bF+G.getRowHeightStyle(M)+bL;

if(H){I.push(bU,H,bA);
}I.push(bO);

for(var x=0;x<O;x++){var D=s[x];

for(var N in D){L[N]=D[N];
}var R=L.col;
L.value=t.getValue(R,z);
var E=u.getDataCellRenderer(R);
E.createDataCellHtml(L,I);
}I.push(bB);
var K=I.join(bD);
this.__mW(z,K,C,F);
Q.push(K);
}this.fireDataEvent(bu,S);
return Q.join(bD);
},_scrollContent:function(ba){var bb=this.getContentElement().getDomElement();

if(!(bb&&bb.firstChild)){this._updateAllRows();
return;
}var bk=bb.firstChild;
var bc=bk.childNodes;
var bi=this.getVisibleRowCount();
var bh=this.getFirstVisibleRow();
var bf=this.getTable().getTableModel();
var bl=0;
bl=bf.getRowCount();
if(bh+bi>bl){this._updateAllRows();
return;
}var bm=ba<0?bi+ba:0;
var bd=ba<0?0:bi-ba;

for(i=Math.abs(ba)-1;i>=0;i--){var bg=bc[bm];

try{bk.removeChild(bg);
}catch(W){break;
}}if(!this.__mQ){this.__mQ=document.createElement(bV);
}var bj=by;
bj+=this._getRowsHtml(bh+bd,Math.abs(ba));
bj+=bB;
this.__mQ.innerHTML=bj;
var be=this.__mQ.firstChild.childNodes;
if(ba>0){for(var i=be.length-1;i>=0;i--){var bg=be[0];
bk.appendChild(bg);
}}else{for(var i=be.length-1;i>=0;i--){var bg=be[be.length-1];
bk.insertBefore(bg,bk.firstChild);
}}if(this.__mR!==null){this._updateRowStyles(this.__mR-ba);
this._updateRowStyles(this.__mR);
}this.fireEvent(bz);
},_updateAllRows:function(){var ce=this.getContentElement().getDomElement();

if(!ce){this.addListenerOnce(bM,arguments.callee,this);
return;
}var ck=this.getTable();
var ch=ck.getTableModel();
var cj=this.getPaneScroller().getTablePaneModel();
var ci=cj.getColumnCount();
var cb=ck.getRowHeight();
var cf=this.getFirstVisibleRow();
var cc=this.getVisibleRowCount();
var cl=ch.getRowCount();

if(cf+cc>cl){cc=Math.max(0,cl-cf);
}var cd=cj.getTotalWidth();
var cg;
if(cc>0){cg=[bE,bR,(ck.getForceLineHeight()?bN+cb+bI:bD),bw,bG,this._getRowsHtml(cf,cc),bx];
}else{cg=[];
}var cm=cg.join(bD);
ce.innerHTML=cm;
this.setWidth(cd);
this.__mN=ci;
this.__mO=cc;
this.fireEvent(bz);
}},destruct:function(){this.__mQ=this.__mM=this.__mP=null;
}});
})();
(function(){var o="hovered",n="__mY",m="qx.ui.table.pane.Header";
qx.Class.define(m,{extend:qx.ui.core.Widget,construct:function(J){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__mX=new qx.ui.core.Blocker(this);
this.__mY=J;
},members:{__mY:null,__na:null,__nb:null,__mX:null,getPaneScroller:function(){return this.__mY;
},getTable:function(){return this.__mY.getTable();
},getBlocker:function(){return this.__mX;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(E,F){var G=this.getHeaderWidgetAtColumn(E);

if(G!=null){G.setWidth(F);
}},setMouseOverColumn:function(C){if(C!=this.__nb){if(this.__nb!=null){var D=this.getHeaderWidgetAtColumn(this.__nb);

if(D!=null){D.removeState(o);
}}
if(C!=null){this.getHeaderWidgetAtColumn(C).addState(o);
}this.__nb=C;
}},getHeaderWidgetAtColumn:function(H){var I=this.getPaneScroller().getTablePaneModel().getX(H);
return this._getChildren()[I];
},showColumnMoveFeedback:function(r,x){var v=this.getContainerLocation();

if(this.__na==null){var s=this.getPaneScroller().getTablePaneModel().getX(r);
var u=this._getChildren()[s];
var w=this.getTable().getTableModel();
var z=this.getTable().getTableColumnModel();
var A={xPos:s,col:r,name:w.getColumnName(r)};
var y=z.getHeaderCellRenderer(r);
var t=y.createHeaderCell(A);
var B=u.getBounds();
t.setWidth(B.width);
t.setHeight(B.height);
t.setZIndex(1000000);
t.setOpacity(0.8);
t.setLayoutProperties({top:v.top});
this.getApplicationRoot().add(t);
this.__na=t;
}this.__na.setLayoutProperties({left:v.left+x});
this.__na.show();
},hideColumnMoveFeedback:function(){if(this.__na!=null){this.__na.destroy();
this.__na=null;
}},isShowingColumnMoveFeedback:function(){return this.__na!=null;
},_updateContent:function(a){var f=this.getTable().getTableModel();
var i=this.getTable().getTableColumnModel();
var j=this.getPaneScroller().getTablePaneModel();
var l=this._getChildren();
var g=j.getColumnCount();
var b=f.getSortColumnIndex();
if(a){this._cleanUpCells();
}var c={};
c.sortedAscending=f.isSortAscending();

for(var x=0;x<g;x++){var e=j.getColumnAtX(x);

if(e===undefined){continue;
}var k=i.getColumnWidth(e);
var h=i.getHeaderCellRenderer(e);
c.xPos=x;
c.col=e;
c.name=f.getColumnName(e);
c.editable=f.isColumnEditable(e);
c.sorted=(e==b);
var d=l[x];
if(d==null){d=h.createHeaderCell(c);
d.set({width:k});
this._add(d);
}else{h.updateHeaderCell(c,d);
}}},_cleanUpCells:function(){var q=this._getChildren();

for(var x=q.length-1;x>=0;x--){var p=q[x];
p.destroy();
}}},destruct:function(){this.__mX.dispose();
this._disposeObjects(n);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var I="Boolean",H="resize-line",G="mousedown",F="qx.event.type.Data",E="mouseup",D="qx.ui.table.pane.CellEvent",C="scroll",B="focus-indicator",A="excluded",z="scrollbar-y",bG="visible",bF="mousemove",bE="header",bD="editing",bC="click",bB="modelChanged",bA="scrollbar-x",bz="cellClick",by="pane",bx="__nl",P="mouseout",Q="__nj",N="changeHorizontalScrollBarVisible",O="bottom",L="_applyScrollTimeout",M="changeScrollX",J="_applyTablePaneModel",K="Integer",T="__nh",U="dblclick",bd="dataEdited",bb="mousewheel",bl="interval",bg="qx.ui.table.pane.Scroller",bt="__nd",bq="__nf",W="_applyShowCellFocusIndicator",bw="resize",bv="__ng",bu="vertical",V="changeScrollY",Y="__ne",ba="appear",bc="table-scroller",be="beforeSort",bh="__ni",bn="cellDblclick",bs="horizontal",R="losecapture",S="contextmenu",X="col-resize",bk="disappear",bj="_applyVerticalScrollBarVisible",bi="_applyHorizontalScrollBarVisible",bp="__nk",bo="cellContextmenu",bf="close",bm="changeTablePaneModel",y="qx.ui.table.pane.Model",br="changeVerticalScrollBarVisible";
qx.Class.define(bg,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(eu){arguments.callee.base.call(this);
this.__nc=eu;
var ev=new qx.ui.layout.Grid();
ev.setColumnFlex(0,1);
ev.setRowFlex(1,1);
this._setLayout(ev);
this.__nd=this._showChildControl(bA);
this.__ne=this._showChildControl(z);
this.__nf=this._showChildControl(bE);
this.__ng=this._showChildControl(by);
this.__nh=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__nh,{row:0,column:0,colSpan:2});
this.__ni=new qx.ui.table.pane.Clipper();
this.__ni.add(this.__nf);
this.__ni.addListener(R,this._onChangeCaptureHeader,this);
this.__ni.addListener(bF,this._onMousemoveHeader,this);
this.__ni.addListener(G,this._onMousedownHeader,this);
this.__ni.addListener(E,this._onMouseupHeader,this);
this.__ni.addListener(bC,this._onClickHeader,this);
this.__nh.add(this.__ni,{flex:1});
this.__nj=new qx.ui.table.pane.Clipper();
this.__nj.add(this.__ng);
this.__nj.addListener(bb,this._onMousewheel,this);
this.__nj.addListener(bF,this._onMousemovePane,this);
this.__nj.addListener(G,this._onMousedownPane,this);
this.__nj.addListener(E,this._onMouseupPane,this);
this.__nj.addListener(bC,this._onClickPane,this);
this.__nj.addListener(S,this._onContextMenu,this);
this.__nj.addListener(U,this._onDblclickPane,this);
this.__nj.addListener(bw,this._onResizePane,this);
this._add(this.__nj,{row:1,column:0});
this.__nk=this.getChildControl(B);
this.getChildControl(H).hide();
this.addListener(P,this._onMouseout,this);
this.addListener(ba,this._onAppear,this);
this.addListener(bk,this._onDisappear,this);
this.__nl=new qx.event.Timer();
this.__nl.addListener(bl,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":F,"changeScrollX":F,"cellClick":D,"cellDblclick":D,"cellContextmenu":D,"beforeSort":F},properties:{horizontalScrollBarVisible:{check:I,init:true,apply:bi,event:N},verticalScrollBarVisible:{check:I,init:true,apply:bj,event:br},tablePaneModel:{check:y,apply:J,event:bm},liveResize:{check:I,init:false},focusCellOnMouseMove:{check:I,init:false},selectBeforeFocus:{check:I,init:false},showCellFocusIndicator:{check:I,init:true,apply:W},scrollTimeout:{check:K,init:100,apply:L},appearance:{refine:true,init:bc}},members:{__nm:null,__nc:null,__nn:null,__no:null,__np:null,__nq:null,__nr:null,__ns:null,__nt:null,__nu:null,__nv:null,__nw:null,__nx:null,__ny:null,__nz:null,__nA:null,__nB:null,__nC:null,__nD:null,__nE:null,__nF:null,__nG:null,__nd:null,__ne:null,__nf:null,__ni:null,__ng:null,__nj:null,__nk:null,__nh:null,__nl:null,getPaneInsetRight:function(){var di=this.getTopRightWidget();
var dj=di&&di.isVisible()&&di.getBounds()?di.getBounds().width:0;
var dh=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth():0;
return Math.max(dj,dh);
},setPaneWidth:function(g){if(this.isVerticalScrollBarVisible()){g+=this.getPaneInsetRight();
}this.setWidth(g);
},_createChildControlImpl:function(cQ){var cR;

switch(cQ){case bE:cR=(this.getTable().getNewTablePaneHeader())(this);
break;
case by:cR=(this.getTable().getNewTablePane())(this);
break;
case B:cR=new qx.ui.table.pane.FocusIndicator(this);
cR.setUserBounds(0,0,0,0);
cR.setZIndex(1000);
cR.addListener(E,this._onMouseupFocusIndicator,this);
this.__nj.add(cR);
cR.exclude();
break;
case H:cR=new qx.ui.core.Widget();
cR.setUserBounds(0,0,0,0);
cR.setZIndex(1000);
this.__nj.add(cR);
break;
case bA:cR=this._createScrollBar(bs).set({minWidth:0,alignY:O});
cR.addListener(C,this._onScrollX,this);
this._add(cR,{row:2,column:0});
break;
case z:cR=this._createScrollBar(bu);
cR.addListener(C,this._onScrollY,this);
this._add(cR,{row:1,column:1});
break;
}return cR||arguments.callee.base.call(this,cQ);
},_applyHorizontalScrollBarVisible:function(c,d){this.__nd.setVisibility(c?bG:A);

if(!c){this.setScrollY(0,true);
}},_applyVerticalScrollBarVisible:function(h,i){this.__ne.setVisibility(h?bG:A);

if(!h){this.setScrollX(0);
}},_applyTablePaneModel:function(en,eo){if(eo!=null){eo.removeListener(bB,this._onPaneModelChanged,this);
}en.addListener(bB,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(du,dv){if(du){this._updateFocusIndicator();
}else{if(this.__nk){this.__nk.hide();
}}},getScrollY:function(){return this.__ne.getPosition();
},setScrollY:function(scrollY,r){this.__ne.scrollTo(scrollY);

if(r){this._updateContent();
}},getScrollX:function(){return this.__nd.getPosition();
},setScrollX:function(scrollX){this.__nd.scrollTo(scrollX);
},getTable:function(){return this.__nc;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(ek,el){this.__nf.setColumnWidth(ek,el);
this.__ng.setColumnWidth(ek,el);
var em=this.getTablePaneModel();
var x=em.getX(ek);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__nf.onColOrderChanged();
this.__ng.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(ep,eq,er,es){this.__ng.onTableModelDataChanged(ep,eq,er,es);
var et=this.getTable().getTableModel().getRowCount();

if(et!=this.__nm){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=et){if(et==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),et-1);
}}this.__nm=et;
}},onSelectionChanged:function(){this.__ng.onSelectionChanged();
},onFocusChanged:function(){this.__ng.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__nf.onTableModelMetaDataChanged();
this.__ng.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__nf.onPaneModelChanged();
this.__ng.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__nf._updateContent();
this.__nc._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var ft=this.__nj.getInnerSize();

if(!ft){return ;
}var fr=this.getTablePaneModel().getTotalWidth();
var fs=this.__nd;

if(ft.width<fr){var fq=Math.max(0,fr-ft.width);
fs.setMaximum(fq);
fs.setKnobFactor(ft.width/fr);
var fu=fs.getPosition();
fs.setPosition(Math.min(fu,fq));
}else{fs.setMaximum(0);
fs.setKnobFactor(1);
fs.setPosition(0);
}},updateVerScrollBarMaximum:function(){var eE=this.__nj.getInnerSize();

if(!eE){return ;
}var eC=this.getTable().getTableModel();
var ey=eC.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){ey+=1;
}var ex=this.getTable().getRowHeight();
var eA=ey*ex;
var eD=this.__ne;

if(eE.height<eA){var ez=Math.max(0,eA-eE.height);
eD.setMaximum(ez);
eD.setKnobFactor(eE.height/eA);
var eB=eD.getPosition();
eD.setPosition(Math.min(eB,ez));
}else{eD.setMaximum(0);
eD.setKnobFactor(1);
eD.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var fa=e.getData();
this.fireDataEvent(M,fa,e.getOldData());
this.__ni.scrollToX(fa);
this.__nj.scrollToX(fa);
},_onScrollY:function(e){this.fireDataEvent(V,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var dw=this.getTable();

if(!dw.getEnabled()){return;
}var dy=qx.bom.client.Engine.GECKO?1:3;
var dx=this.__ne.getPosition()+((e.getWheelDelta()*dy)*dw.getRowHeight());
this.__ne.scrollTo(dx);
if(this.__nA&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__nA,this.__nB);
}e.stop();
},__nH:function(cs){var cx=this.getTable();
var cy=this.__nf.getHeaderWidgetAtColumn(this.__nv);
var ct=cy.getSizeHint().minWidth;
var cv=Math.max(ct,this.__nx+cs-this.__nw);

if(this.getLiveResize()){var cu=cx.getTableColumnModel();
cu.setColumnWidth(this.__nv,cv);
}else{this.__nf.setColumnWidth(this.__nv,cv);
var cw=this.getTablePaneModel();
this._showResizeLine(cw.getColumnLeft(this.__nv)+cv);
}this.__nw+=cv-this.__nx;
this.__nx=cv;
},__nI:function(cp){var cq=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__nf.isShowingColumnMoveFeedback()||cp>this.__nu+cq||cp<this.__nu-cq){this.__nr+=cp-this.__nu;
this.__nf.showColumnMoveFeedback(this.__nq,this.__nr);
var cr=this.__nc.getTablePaneScrollerAtPageX(cp);

if(this.__nt&&this.__nt!=cr){this.__nt.hideColumnMoveFeedback();
}
if(cr!=null){this.__ns=cr.showColumnMoveFeedback(cp);
}else{this.__ns=null;
}this.__nt=cr;
this.__nu=cp;
}},_onMousemoveHeader:function(e){var de=this.getTable();

if(!de.getEnabled()){return;
}var df=false;
var cX=null;
var dc=e.getDocumentLeft();
var dd=e.getDocumentTop();
this.__nA=dc;
this.__nB=dd;

if(this.__nv!=null){this.__nH(dc);
df=true;
e.stopPropagation();
}else if(this.__nq!=null){this.__nI(dc);
e.stopPropagation();
}else{var cY=this._getResizeColumnForPageX(dc);

if(cY!=-1){df=true;
}else{var db=de.getTableModel();
var dg=this._getColumnForPageX(dc);

if(dg!=null&&db.isColumnSortable(dg)){cX=dg;
}}}var da=df?X:null;
this.getApplicationRoot().setGlobalCursor(da);
this.setCursor(da);
this.__nf.setMouseOverColumn(cX);
},_onMousemovePane:function(e){var eT=this.getTable();

if(!eT.getEnabled()){return;
}var eV=e.getDocumentLeft();
var eW=e.getDocumentTop();
this.__nA=eV;
this.__nB=eW;
var eU=this._getRowForPagePos(eV,eW);

if(eU!=null&&this._getColumnForPageX(eV)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(eV,eW);
}}this.__nf.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var fm=e.getDocumentLeft();
var fn=this._getResizeColumnForPageX(fm);

if(fn!=-1){this._startResizeHeader(fn,fm);
e.stop();
}else{var fl=this._getColumnForPageX(fm);

if(fl!=null){this._startMoveHeader(fl,fm);
e.stop();
}}},_startResizeHeader:function(eF,eG){var eH=this.getTable().getTableColumnModel();
this.__nv=eF;
this.__nw=eG;
this.__nx=eH.getColumnWidth(this.__nv);
this.__ni.capture();
},_startMoveHeader:function(bX,bY){this.__nq=bX;
this.__nu=bY;
this.__nr=this.getTablePaneModel().getColumnLeft(bX);
this.__ni.capture();
},_onMousedownPane:function(e){var ee=this.getTable();

if(!ee.getEnabled()){return;
}
if(this.isEditing()){this.stopEditing();
}var eb=e.getDocumentLeft();
var ed=e.getDocumentTop();
var eg=this._getRowForPagePos(eb,ed);
var ef=this._getColumnForPageX(eb);

if(eg!==null){this.__ny={row:eg,col:ef};
var ec=this.getSelectBeforeFocus();

if(ec){ee.getSelectionManager().handleMouseDown(eg,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(eb,ed);
}
if(!ec){ee.getSelectionManager().handleMouseDown(eg,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__ny&&!this.isEditing()&&this.__nk.getRow()==this.__ny.row&&this.__nk.getColumn()==this.__ny.col){this.__ny={};
this.fireEvent(bz,qx.ui.table.pane.CellEvent,[this,e,this.__ny.row,this.__ny.col],true);
}},_onChangeCaptureHeader:function(e){if(this.__nv!=null){this._stopResizeHeader();
}
if(this.__nq!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var dk=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
dk.setColumnWidth(this.__nv,this.__nx);
}this.__nv=null;
this.__ni.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
},_stopMoveHeader:function(){var n=this.getTable().getTableColumnModel();
var o=this.getTablePaneModel();
this.__nf.hideColumnMoveFeedback();

if(this.__nt){this.__nt.hideColumnMoveFeedback();
}
if(this.__ns!=null){var q=o.getFirstColumnX()+o.getX(this.__nq);
var m=this.__ns;

if(m!=q&&m!=q+1){var p=n.getVisibleColumnAtX(q);
var l=n.getVisibleColumnAtX(m);
var k=n.getOverallX(p);
var j=(l!=null)?n.getOverallX(l):n.getOverallColumnCount();

if(j>k){j--;
}n.moveColumn(k,j);
}}this.__nq=null;
this.__ns=null;
this.__ni.releaseCapture();
},_onMouseupPane:function(e){var fo=this.getTable();

if(!fo.getEnabled()){return;
}var fp=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(fp!=-1&&fp!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){fo.getSelectionManager().handleMouseUp(fp,e);
}},_onMouseupHeader:function(e){var cP=this.getTable();

if(!cP.getEnabled()){return;
}
if(this.__nv!=null){this._stopResizeHeader();
this.__nz=true;
e.stop();
}else if(this.__nq!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__nz){this.__nz=false;
return;
}var eM=this.getTable();

if(!eM.getEnabled()){return;
}var eK=eM.getTableModel();
var eL=e.getDocumentLeft();
var eJ=this._getResizeColumnForPageX(eL);

if(eJ==-1){var eP=this._getColumnForPageX(eL);

if(eP!=null&&eK.isColumnSortable(eP)){var eI=eK.getSortColumnIndex();
var eN=(eP!=eI)?true:!eK.isSortAscending();
var eO={column:eP,ascending:eN};

if(this.fireDataEvent(be,eO)){eK.sortByColumn(eP,eN);
eM.getSelectionModel().resetSelection();
}}}e.stop();
},_onClickPane:function(e){var s=this.getTable();

if(!s.getEnabled()){return;
}var v=e.getDocumentLeft();
var w=e.getDocumentTop();
var t=this._getRowForPagePos(v,w);
var u=this._getColumnForPageX(v);

if(t!=null&&u!=null){s.getSelectionManager().handleClick(t,e);

if(this.__nk.isHidden()||(this.__ny&&!this.isEditing()&&t==this.__ny.row&&u==this.__ny.col)){this.__ny={};
this.fireEvent(bz,qx.ui.table.pane.CellEvent,[this,e,t,u],true);
}}},_onContextMenu:function(e){var cV=e.getDocumentLeft();
var cW=e.getDocumentTop();
var cT=this._getRowForPagePos(cV,cW);
var cU=this._getColumnForPageX(cV);

if(this.__nk.isHidden()||(this.__ny&&cT==this.__ny.row&&cU==this.__ny.col)){this.__ny={};
this.fireEvent(bo,qx.ui.table.pane.CellEvent,[this,e,cT,cU],true);
var cS=this.getTable().getContextMenu();

if(cS){if(cS.getChildren().length>0){cS.openAtMouse(e);
}else{cS.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var eR=e.getDocumentLeft();
var eS=e.getDocumentTop();
this._focusCellAtPagePos(eR,eS);
this.startEditing();
var eQ=this._getRowForPagePos(eR,eS);

if(eQ!=-1&&eQ!=null){this.fireEvent(bn,qx.ui.table.pane.CellEvent,[this,e,eQ],true);
}},_onMouseout:function(e){var fk=this.getTable();

if(!fk.getEnabled()){return;
}if(this.__nv==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__nf.setMouseOverColumn(null);
},_showResizeLine:function(x){var ei=this._showChildControl(H);
var eh=ei.getWidth();
var ej=this.__nj.getBounds();
ei.setUserBounds(x-Math.round(eh/2),0,eh,ej.height);
},_hideResizeLine:function(){this._excludeChildControl(H);
},showColumnMoveFeedback:function(dz){var dI=this.getTablePaneModel();
var dH=this.getTable().getTableColumnModel();
var dC=this.__ng.getContainerLocation().left;
var dG=dI.getColumnCount();
var dD=0;
var dB=0;
var dL=dC;

for(var dA=0;dA<dG;dA++){var dE=dI.getColumnAtX(dA);
var dJ=dH.getColumnWidth(dE);

if(dz<dL+dJ/2){break;
}dL+=dJ;
dD=dA+1;
dB=dL-dC;
}var dF=this.__nj.getContainerLocation().left;
var dK=this.__nj.getBounds().width;
var scrollX=dF-dC;
dB=qx.lang.Number.limit(dB,scrollX+2,scrollX+dK-1);
this._showResizeLine(dB);
return dI.getFirstColumnX()+dD;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(cK,cL){var cN=this._getRowForPagePos(cK,cL);

if(cN!=-1&&cN!=null){var cM=this._getColumnForPageX(cK);
this.__nc.setFocusedCell(cM,cN);
}},setFocusedCell:function(bV,bW){if(!this.isEditing()){this.__ng.setFocusedCell(bV,bW,this.__no);
this.__nC=bV;
this.__nD=bW;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__nC;
},getFocusedRow:function(){return this.__nD;
},scrollCellVisible:function(bH,bI){var bS=this.getTablePaneModel();
var bJ=bS.getX(bH);

if(bJ!=-1){var bP=this.__nj.getInnerSize();

if(!bP){return;
}var bQ=this.getTable().getTableColumnModel();
var bM=bS.getColumnLeft(bH);
var bT=bQ.getColumnWidth(bH);
var bK=this.getTable().getRowHeight();
var bU=bI*bK;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var bR=Math.min(bM,bM+bT-bP.width);
var bO=bM;
this.setScrollX(Math.max(bR,Math.min(bO,scrollX)));
var bL=bU+bK-bP.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){bL+=bK;
}var bN=bU;
this.setScrollY(Math.max(bL,Math.min(bN,scrollY)),true);
}},isEditing:function(){return this.__nE!=null;
},startEditing:function(){var fg=this.getTable();
var fe=fg.getTableModel();
var fi=this.__nC;

if(!this.isEditing()&&(fi!=null)&&fe.isColumnEditable(fi)){var fj=this.__nD;
var fc=this.getTablePaneModel().getX(fi);
var fd=fe.getValue(fi,fj);
fg.blockHeaderElements();
this.__nF=fg.getTableColumnModel().getCellEditorFactory(fi);
var ff={col:fi,row:fj,xPos:fc,value:fd,table:fg};
this.__nE=this.__nF.createCellEditor(ff);
if(this.__nE===null){return false;
}else if(this.__nE instanceof qx.ui.window.Window){this.__nE.setModal(true);
this.__nE.setShowClose(false);
this.__nE.addListener(bf,this._onCellEditorModalWindowClose,this);
var f=fg.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__nE,ff);
}this.__nE.open();
}else{var fh=this.__nk.getInnerSize();
this.__nE.setUserBounds(0,0,fh.width,fh.height);
this.__nk.addListener(G,function(e){this.__ny={row:this.__nD,col:this.__nC};
e.stopPropagation();
},this);
this.__nk.add(this.__nE);
this.__nk.addState(bD);
this.__nk.setKeepActive(false);
this.__nE.focus();
this.__nE.activate();
}return true;
}return false;
},stopEditing:function(){this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var eY=this.__nF.getCellEditorValue(this.__nE);
var eX=this.getTable().getTableModel().getValue(this.__nC,this.__nD);
this.getTable().getTableModel().setValue(this.__nC,this.__nD,eY);
this.__nc.focus();
this.__nc.fireDataEvent(bd,{row:this.__nD,col:this.__nC,oldValue:eX,value:eY});
}},cancelEditing:function(){if(this.isEditing()&&!this.__nE.pendingDispose){this.getTable().unblockHeaderElements();

if(this._cellEditorIsModalWindow){this.__nE.destroy();
this.__nE=null;
this.__nF=null;
this.__nE.pendingDispose=true;
}else{this.__nk.removeState(bD);
this.__nk.setKeepActive(true);
this.__nE.destroy();
this.__nE=null;
this.__nF=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(ci){var cl=this.getTable().getTableColumnModel();
var cm=this.getTablePaneModel();
var ck=cm.getColumnCount();
var co=this.__nf.getContainerLocation().left;

for(var x=0;x<ck;x++){var cj=cm.getColumnAtX(x);
var cn=cl.getColumnWidth(cj);
co+=cn;

if(ci<co){return cj;
}}return null;
},_getResizeColumnForPageX:function(ca){var ce=this.getTable().getTableColumnModel();
var cf=this.getTablePaneModel();
var cd=cf.getColumnCount();
var ch=this.__nf.getContainerLocation().left;
var cb=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<cd;x++){var cc=cf.getColumnAtX(x);
var cg=ce.getColumnWidth(cc);
ch+=cg;

if(ca>=(ch-cb)&&ca<=(ch+cb)){return cc;
}}return -1;
},_getRowForPagePos:function(cz,cA){var cB=this.__ng.getContentLocation();

if(cz<cB.left||cz>cB.right){return null;
}
if(cA>=cB.top&&cA<=cB.bottom){var cC=this.getTable().getRowHeight();
var scrollY=this.__ne.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/cC)*cC;
}var cF=scrollY+cA-cB.top;
var cH=Math.floor(cF/cC);
var cG=this.getTable().getTableModel();
var cD=cG.getRowCount();
return (cH<cD)?cH:null;
}var cE=this.__nf.getContainerLocation();

if(cA>=cE.top&&cA<=cE.bottom&&cz<=cE.right){return -1;
}return null;
},setTopRightWidget:function(a){var b=this.__nG;

if(b!=null){this.__nh.remove(b);
}
if(a!=null){this.__nh.add(a);
}this.__nG=a;
},getTopRightWidget:function(){return this.__nG;
},getHeader:function(){return this.__nf;
},getTablePane:function(){return this.__ng;
},getVerticalScrollBarWidth:function(){var cO=this.__ne;
return cO.isVisible()?(cO.getSizeHint().width||0):0;
},getNeededScrollBars:function(dM,dN){var dT=this.__ne.getSizeHint().width;
var dU=this.__nj.getInnerSize();
var dO=dU?dU.width:0;

if(this.getVerticalScrollBarVisible()){dO+=dT;
}var dX=dU?dU.height:0;

if(this.getHorizontalScrollBarVisible()){dX+=dT;
}var dR=this.getTable().getTableModel();
var dV=dR.getRowCount();
var dY=this.getTablePaneModel().getTotalWidth();
var dW=this.getTable().getRowHeight()*dV;
var dQ=false;
var ea=false;

if(dY>dO){dQ=true;

if(dW>dX-dT){ea=true;
}}else if(dW>dX){ea=true;

if(!dN&&(dY>dO-dT)){dQ=true;
}}var dS=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var dP=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((dM||dQ)?dS:0)|((dN||!ea)?0:dP);
},_applyScrollTimeout:function(cI,cJ){this._startInterval(cI);
},_startInterval:function(ew){this.__nl.setInterval(ew);
this.__nl.start();
},_stopInterval:function(){this.__nl.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__no&&!this.__ng._layoutPending){this.__no=false;
this._updateContent();
}}),_updateContent:function(){var dq=this.__nj.getInnerSize();

if(!dq){return;
}var dt=dq.height;
var scrollX=this.__nd.getPosition();
var scrollY=this.__ne.getPosition();
var dm=this.getTable().getRowHeight();
var dn=Math.floor(scrollY/dm);
var ds=this.__ng.getFirstVisibleRow();
this.__ng.setFirstVisibleRow(dn);
var dp=Math.ceil(dt/dm);
var dl=0;
var dr=this.getTable().getKeepFirstVisibleRowComplete();

if(!dr){dp++;
dl=scrollY%dm;
}this.__ng.setVisibleRowCount(dp);

if(dn!=ds){this._updateFocusIndicator();
}this.__nj.scrollToX(scrollX);
if(!dr){this.__nj.scrollToY(dl);
}},_updateFocusIndicator:function(){if(!this.getShowCellFocusIndicator()){return;
}var fv=this.getTable();

if(!fv.getEnabled()){return;
}this.__nk.moveToCell(this.__nC,this.__nD);
}},destruct:function(){this._stopInterval();
var fb=this.getTablePaneModel();

if(fb){fb.dispose();
}this.__ny=this.__nG=this.__nc=null;
this._disposeObjects(bt,Y,bh,Q,bp,bq,bv,T,bx);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(c){this.assertNumber(c);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",q="mouseup",o="Number",p="_applyPosition",m="scrollbar",n="__iU",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(B){arguments.callee.base.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(B!=null){this.setOrientation(B);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:m},orientation:{check:[k,h],init:k,apply:v},maximum:{check:s,apply:w,init:100},position:{check:o,init:0,apply:p,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__iT:null,__iU:null,_getScrollPaneElement:function(){if(!this.__iU){this.__iU=new qx.html.Element();
}return this.__iU;
},renderLayout:function(N,top,O,P){var Q=arguments.callee.base.call(this,N,top,O,P);
this._updateScrollBar();
return Q;
},_getContentHint:function(){var E=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__iT?100:E,maxWidth:this.__iT?null:E,minWidth:this.__iT?null:E,height:this.__iT?E:100,maxHeight:this.__iT?E:null,minHeight:this.__iT?E:null};
},_applyEnabled:function(L,M){arguments.callee.base.call(this,L,M);
this._updateScrollBar();
},_applyMaximum:function(A){this._updateScrollBar();
},_applyPosition:function(F){var content=this.getContentElement();

if(this.__iT){content.scrollToX(F);
}else{content.scrollToY(F);
}},_applyOrientation:function(G,H){var I=this.__iT=G===k;
this.set({allowGrowX:I,allowShrinkX:I,allowGrowY:!I,allowShrinkY:!I});

if(I){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:I?i:c,overflowY:I?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var T=this.__iT;
var U=this.getBounds();

if(!U){return;
}
if(this.isEnabled()){var V=T?U.width:U.height;
var S=this.getMaximum()+V;
}else{S=0;
}if(qx.core.Variant.isSet(f,r)){var U=this.getBounds();
this.getContentElement().setStyles({left:T?d:g,top:T?g:d,width:(T?U.width:U.width+1)+j,height:(T?U.height+1:U.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(T?S:1)+j,height:(T?1:S)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(W){this.setPosition(Math.max(0,Math.min(this.getMaximum(),W)));
},scrollBy:function(R){this.scrollTo(this.getPosition()+R);
},scrollBySteps:function(J){var K=this.getSingleStep();
this.scrollBy(J*K);
},_onScroll:function(e){var D=this.getContentElement();
var C=this.__iT?D.getScrollX():D.getScrollY();
this.setPosition(C);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){arguments.callee.base.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__iV:2,_createChildControlImpl:function(P){var Q;

switch(P){case l:Q=new qx.ui.core.scroll.ScrollSlider();
Q.setPageStep(100);
Q.setFocusable(false);
Q.addListener(y,this._onChangeSliderValue,this);
this._add(Q,{flex:1});
break;
case j:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(f,this._onExecuteBegin,this);
this._add(Q);
break;
case h:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(f,this._onExecuteEnd,this);
this._add(Q);
break;
}return Q||arguments.callee.base.call(this,P);
},_applyMaximum:function(K){this.getChildControl(l).setMaximum(K);
},_applyPosition:function(J){this.getChildControl(l).setValue(J);
},_applyKnobFactor:function(B){this.getChildControl(l).setKnobFactor(B);
},_applyPageStep:function(F){this.getChildControl(l).setPageStep(F);
},_applyOrientation:function(C,D){var E=this._getLayout();

if(E){E.dispose();
}if(C===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(A,c);
this.getChildControl(h).replaceState(b,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(c,A);
this.getChildControl(h).replaceState(d,b);
}this.getChildControl(l).setOrientation(C);
},scrollTo:function(a){this.getChildControl(l).slideTo(a);
},scrollBy:function(R){this.getChildControl(l).slideBy(R);
},scrollBySteps:function(H){var I=this.getSingleStep();
this.getChildControl(l).slideBy(H*I);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var L=this.getChildControl(l).getChildControl(v);
var O=L.getSizeHint();
var M=false;
var N=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(N.height<O.minHeight+this.__iV){M=true;
}}else{if(N.width<O.minWidth+this.__iV){M=true;
}}
if(M){L.exclude();
}else{L.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(d){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var be="knob",bd="horizontal",bc="vertical",bb="Integer",ba="hovered",Y="left",X="top",W="mouseup",V="pressed",U="px",bM="mousemove",bL="resize",bK="slider",bJ="mousedown",bI="PageUp",bH="mouseout",bG="changeValue",bF="Left",bE="Down",bD="Up",bl="dblclick",bm="qx.ui.form.Slider",bj="PageDown",bk="mousewheel",bh="interval",bi="_applyValue",bf="_applyKnobFactor",bg="End",bn="height",bo="width",bv="_applyOrientation",bt="Home",bx="mouseover",bw="floor",bz="_applyMinimum",by="click",bq="Right",bC="keypress",bB="ceil",bA="losecapture",bp="contextmenu",br="_applyMaximum",bs="Number",bu="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bm,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(O){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bC,this._onKeyPress);
this.addListener(bk,this._onMouseWheel);
this.addListener(bJ,this._onMouseDown);
this.addListener(W,this._onMouseUp);
this.addListener(bA,this._onMouseUp);
this.addListener(bL,this._onUpdate);
this.addListener(bp,this._onStopEvent);
this.addListener(by,this._onStopEvent);
this.addListener(bl,this._onStopEvent);
if(O!=null){this.setOrientation(O);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bK},focusable:{refine:true,init:true},orientation:{check:[bd,bc],init:bd,apply:bv},value:{check:bu,init:0,apply:bi,event:bG,nullable:true},minimum:{check:bb,init:0,apply:bz},maximum:{check:bb,init:100,apply:br},singleStep:{check:bb,init:1},pageStep:{check:bb,init:10},knobFactor:{check:bs,apply:bf,nullable:true}},members:{__iW:null,__iX:null,__iY:null,__ja:null,__jb:null,__jc:null,__jd:null,__je:null,__jf:null,_forwardStates:{invalid:true},_createChildControlImpl:function(P){var Q;

switch(P){case be:Q=new qx.ui.core.Widget();
Q.addListener(bL,this._onUpdate,this);
Q.addListener(bx,this._onMouseOver);
Q.addListener(bH,this._onMouseOut);
this._add(Q);
break;
}return Q||arguments.callee.base.call(this,P);
},_onMouseOver:function(e){this.addState(ba);
},_onMouseOut:function(e){this.removeState(ba);
},_onMouseWheel:function(e){var R=e.getWheelDelta()>0?1:-1;
this.slideBy(R*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bQ=this.getOrientation()===bd;
var bP=bQ?bF:bD;
var forward=bQ?bq:bE;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bP:this.slideBack();
break;
case bj:this.slidePageForward();
break;
case bI:this.slidePageBack();
break;
case bt:this.slideToBegin();
break;
case bg:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__ja){return;
}var K=this.__jh;
var I=this.getChildControl(be);
var J=K?Y:X;
var M=K?e.getDocumentLeft():e.getDocumentTop();
var N=this.__iW=qx.bom.element.Location.get(this.getContentElement().getDomElement())[J];
var L=this.__iX=qx.bom.element.Location.get(I.getContainerElement().getDomElement())[J];

if(e.getTarget()===I){this.__ja=true;
this.__jb=M+N-L;
I.addState(V);
}else{this.__jc=true;
this.__jd=M<=L?-1:1;
this.__ji(e);
this._onInterval();
if(!this.__jf){this.__jf=new qx.event.Timer(100);
this.__jf.addListener(bh,this._onInterval,this);
}this.__jf.start();
}this.addListener(bM,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__ja){this.releaseCapture();
delete this.__ja;
delete this.__jb;
this.getChildControl(be).removeState(V);
if(e.getType()===W){var q;
var r;
var p;

if(this.__jh){q=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__iW);
p=qx.bom.element.Location.get(this.getContentElement().getDomElement())[X];
r=e.getDocumentTop()-(p+this.getChildControl(be).getBounds().top);
}else{q=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__iW);
p=qx.bom.element.Location.get(this.getContentElement().getDomElement())[Y];
r=e.getDocumentLeft()-(p+this.getChildControl(be).getBounds().left);
}
if(r<0||r>this.__iY||q<0||q>this.__iY){this.getChildControl(be).removeState(ba);
}}}else if(this.__jc){this.__jf.stop();
this.releaseCapture();
delete this.__jc;
delete this.__jd;
delete this.__je;
}this.removeListener(bM,this._onMouseMove);
if(e.getType()===W){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__ja){var bT=this.__jh?e.getDocumentLeft():e.getDocumentTop();
var bS=bT-this.__jb;
this.slideTo(this._positionToValue(bS));
}else if(this.__jc){this.__ji(e);
}e.stopPropagation();
},_onInterval:function(e){var n=this.getValue()+(this.__jd*this.getPageStep());
if(n<this.getMinimum()){n=this.getMinimum();
}else if(n>this.getMaximum()){n=this.getMaximum();
}var o=this.__jd==-1;

if((o&&n<=this.__je)||(!o&&n>=this.__je)){n=this.__je;
}this.slideTo(n);
},_onUpdate:function(e){var G=this.getInnerSize();
var H=this.getChildControl(be).getBounds();
var F=this.__jh?bo:bn;
this._updateKnobSize();
this.__jg=G[F]-H[F];
this.__iY=H[F];
this._updateKnobPosition();
},__jh:false,__jg:0,__ji:function(e){var a=this.__jh;
var i=a?e.getDocumentLeft():e.getDocumentTop();
var k=this.__iW;
var b=this.__iX;
var m=this.__iY;
var j=i-k;

if(i>=b){j-=m;
}var g=this._positionToValue(j);
var c=this.getMinimum();
var d=this.getMaximum();

if(g<c){g=c;
}else if(g>d){g=d;
}else{var h=this.getValue();
var f=this.getPageStep();
var l=this.__jd<0?bw:bB;
g=h+(Math[l]((g-h)/f)*f);
}if(this.__je==null||(this.__jd==-1&&g<=this.__je)||(this.__jd==1&&g>=this.__je)){this.__je=g;
}},_positionToValue:function(u){var v=this.__jg;
if(v==null||v==0){return 0;
}var x=u/v;

if(x<0){x=0;
}else if(x>1){x=1;
}var w=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(w*x);
},_valueToPosition:function(bX){var bY=this.__jg;

if(bY==null){return 0;
}var ca=this.getMaximum()-this.getMinimum();
if(ca==0){return 0;
}var bX=bX-this.getMinimum();
var cb=bX/ca;

if(cb<0){cb=0;
}else if(cb>1){cb=1;
}return Math.round(bY*cb);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(S){var T=this.getChildControl(be).getContainerElement();

if(this.__jh){T.setStyle(Y,S+U,true);
}else{T.setStyle(X,S+U,true);
}},_updateKnobSize:function(){var bO=this.getKnobFactor();

if(bO==null){return;
}var bN=this.getInnerSize();

if(bN==null){return;
}if(this.__jh){this.getChildControl(be).setWidth(Math.round(bO*bN.width));
}else{this.getChildControl(be).setHeight(Math.round(bO*bN.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bR){this.slideTo(this.getValue()+bR);
},slideTo:function(y){if(y<this.getMinimum()){y=this.getMinimum();
}else if(y>this.getMaximum()){y=this.getMaximum();
}else{y=this.getMinimum()+Math.round((y-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(y);
},_applyOrientation:function(bU,bV){var bW=this.getChildControl(be);
this.__jh=bU===bd;
if(this.__jh){this.removeState(bc);
bW.removeState(bc);
this.addState(bd);
bW.addState(bd);
bW.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(bd);
bW.removeState(bd);
this.addState(bc);
bW.addState(bc);
bW.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(B,C){if(B!=null){this._updateKnobSize();
}else{if(this.__jh){this.getChildControl(be).resetWidth();
}else{this.getChildControl(be).resetHeight();
}}},_applyValue:function(z,A){if(z!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(s,t){if(this.getValue()<s){this.setValue(s);
}this._updateKnobPosition();
},_applyMaximum:function(D,E){if(this.getValue()>D){this.setValue(D);
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
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(q){arguments.callee.base.call(this);
this.__nJ=q;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__nJ:null,_onKeyPress:function(e){var h=e.getKeyIdentifier();

if(h!==f&&h!==c){e.stopPropagation();
}},moveToCell:function(i,j){if(i==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var k=this.__nJ.getTablePaneModel().getX(i);

if(k==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var p=this.__nJ.getTable();
var n=p.getTableColumnModel();
var o=this.__nJ.getTablePaneModel();
var m=this.__nJ.getTablePane().getFirstVisibleRow();
var l=p.getRowHeight();
this.setUserBounds(o.getColumnLeft(i)-2,(j-m)*l-2,n.getColumnWidth(i)+3,l+3);
this.show();
this.setRow(j);
this.setColumn(i);
}}}},destruct:function(){this.__nJ=null;
}});
})();
(function(){var b="Integer",a="qx.ui.table.pane.CellEvent";
qx.Class.define(a,{extend:qx.event.type.Mouse,properties:{row:{check:b,nullable:true},column:{check:b,nullable:true}},members:{init:function(e,f,g,h){f.clone(this);
this.setBubbles(false);

if(g!=null){this.setRow(g);
}else{this.setRow(e._getRowForPagePos(this.getDocumentLeft(),this.getDocumentTop()));
}
if(h!=null){this.setColumn(h);
}else{this.setColumn(e._getColumnForPageX(this.getDocumentLeft()));
}},clone:function(c){var d=arguments.callee.base.call(this,c);
d.set({row:this.getRow(),column:this.getColumn()});
return d;
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
(function(){var g="Number",f="qx.event.type.Event",e="_applyFirstColumnX",d="Integer",c="qx.ui.table.pane.Model",b="_applyMaxColumnCount",a="visibilityChangedPre";
qx.Class.define(c,{extend:qx.core.Object,construct:function(i){arguments.callee.base.call(this);
i.addListener(a,this._onColVisibilityChanged,this);
this.__oG=i;
},events:{"modelChanged":f},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:d,init:0,apply:e},maxColumnCount:{check:g,init:-1,apply:b}},members:{__oH:null,__oG:null,_applyFirstColumnX:function(u,v){this.__oH=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(j,k){this.__oH=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){this.__oG=n;
this.__oH=null;
},_onColVisibilityChanged:function(h){this.__oH=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__oH==null){var w=this.getFirstColumnX();
var z=this.getMaxColumnCount();
var y=this.__oG.getVisibleColumnCount();

if(z==-1||(w+z)>y){this.__oH=y-w;
}else{this.__oH=z;
}}return this.__oH;
},getColumnAtX:function(l){var m=this.getFirstColumnX();
return this.__oG.getVisibleColumnAtX(m+l);
},getX:function(r){var s=this.getFirstColumnX();
var t=this.getMaxColumnCount();
var x=this.__oG.getVisibleX(r)-s;

if(x>=0&&(t==-1||x<t)){return x;
}else{return -1;
}},getColumnLeft:function(A){var D=0;
var C=this.getColumnCount();

for(var x=0;x<C;x++){var B=this.getColumnAtX(x);

if(B==A){return D;
}D+=this.__oG.getColumnWidth(B);
}return -1;
},getTotalWidth:function(){var o=0;
var p=this.getColumnCount();

for(var x=0;x<p;x++){var q=this.getColumnAtX(x);
o+=this.__oG.getColumnWidth(q);
}return o;
}},destruct:function(){this.__oG=null;
}});
})();
(function(){var h="qx.event.type.Data",g="EVENT_TYPE_DATA_CHANGED",f="qx.ui.table.ITableModel",e="New code should not use this. Instead, use the text string 'dataChanged' literally.",d="New code should not use this. Instead, use the text string 'metaDataChanged' literally.",c="qx.event.type.Event",b="EVENT_TYPE_META_DATA_CHANGED";
qx.Interface.define(f,{events:{"dataChanged":h,"metaDataChanged":c,"sorted":h},statics:{EVENT_TYPE_DATA_CHANGED:"dataChanged",EVENT_TYPE_META_DATA_CHANGED:"metaDataChanged"},members:{getRowCount:function(){},getRowData:function(j){},getColumnCount:function(){},getColumnId:function(y){},getColumnIndexById:function(i){},getColumnName:function(a){},isColumnEditable:function(t){},isColumnSortable:function(q){},sortByColumn:function(u,v){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(z,A){},getValue:function(w,x){},getValueById:function(r,s){},setValue:function(k,l,m){},setValueById:function(n,o,p){}}});
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,g,e);
qx.log.Logger.deprecatedConstantWarning(qx.ui.table.ITableModel,b,d);
})();
(function(){var w="metaDataChanged",v="qx.event.type.Data",u="qx.event.type.Event",t="abstract",s="qx.ui.table.model.Abstract";
qx.Class.define(s,{type:t,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":v,"metaDataChanged":u,"sorted":v},construct:function(){arguments.callee.base.call(this);
this.__kM=[];
this.__kN=[];
this.__kO={};
},members:{__kM:null,__kN:null,__kO:null,__kP:null,getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(D){return null;
},isColumnEditable:function(a){return false;
},isColumnSortable:function(A){return false;
},sortByColumn:function(e,f){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(B,C){},getValue:function(g,h){throw new Error("getValue is abstract");
},getValueById:function(x,y){return this.getValue(this.getColumnIndexById(x),y);
},setValue:function(m,n,o){throw new Error("setValue is abstract");
},setValueById:function(j,k,l){this.setValue(this.getColumnIndexById(j),k,l);
},getColumnCount:function(){return this.__kM.length;
},getColumnIndexById:function(E){return this.__kO[E];
},getColumnId:function(b){return this.__kM[b];
},getColumnName:function(F){return this.__kN[F];
},setColumnIds:function(d){this.__kM=d;
this.__kO={};

for(var i=0;i<d.length;i++){this.__kO[d[i]]=i;
}this.__kN=new Array(d.length);
if(!this.__kP){this.fireEvent(w);
}},setColumnNamesByIndex:function(z){if(this.__kM.length!=z.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__kM.length+" != "+z.length);
}this.__kN=z;
this.fireEvent(w);
},setColumnNamesById:function(c){this.__kN=new Array(this.__kM.length);

for(var i=0;i<this.__kM.length;++i){this.__kN[i]=c[this.__kM[i]];
}},setColumns:function(p,q){var r=this.__kM.length==0||q;

if(q==null){if(this.__kM.length==0){q=p;
}else{q=this.__kM;
}}
if(q.length!=p.length){throw new Error("columnIdArr and columnNameArr have different length: "+q.length+" != "+p.length);
}
if(r){this.__kP=true;
this.setColumnIds(q);
this.__kP=false;
}this.setColumnNamesByIndex(p);
}},destruct:function(){this.__kM=this.__kN=this.__kO=null;
}});
})();
(function(){var u="dataChanged",t="metaDataChanged",s="qx.ui.table.model.Simple",r="Boolean",q="sorted";
qx.Class.define(s,{extend:qx.ui.table.model.Abstract,construct:function(){arguments.callee.base.call(this);
this.__kQ=[];
this.__kR=-1;
this.__kS=[];
this.__kT=null;
},properties:{caseSensitiveSorting:{check:r,init:true}},statics:{_defaultSortComparatorAscending:function(v,w){var x=v[arguments.callee.columnIndex];
var y=w[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(x)&&qx.lang.Type.isNumber(y)){var z=isNaN(x)?isNaN(y)?0:1:isNaN(y)?-1:null;

if(z!=null){return z;
}}return (x>y)?1:((x==y)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(bw,bx){var by=(bw[arguments.callee.columnIndex].toLowerCase?bw[arguments.callee.columnIndex].toLowerCase():bw[arguments.callee.columnIndex]);
var bz=(bx[arguments.callee.columnIndex].toLowerCase?bx[arguments.callee.columnIndex].toLowerCase():bx[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(by)&&qx.lang.Type.isNumber(bz)){var bA=isNaN(by)?isNaN(bz)?0:1:isNaN(bz)?-1:null;

if(bA!=null){return bA;
}}return (by>bz)?1:((by==bz)?0:-1);
},_defaultSortComparatorDescending:function(A,B){var C=A[arguments.callee.columnIndex];
var D=B[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(C)&&qx.lang.Type.isNumber(D)){var E=isNaN(C)?isNaN(D)?0:1:isNaN(D)?-1:null;

if(E!=null){return E;
}}return (C<D)?1:((C==D)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(bb,bc){var bd=(bb[arguments.callee.columnIndex].toLowerCase?bb[arguments.callee.columnIndex].toLowerCase():bb[arguments.callee.columnIndex]);
var be=(bc[arguments.callee.columnIndex].toLowerCase?bc[arguments.callee.columnIndex].toLowerCase():bc[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(bd)&&qx.lang.Type.isNumber(be)){var bf=isNaN(bd)?isNaN(be)?0:1:isNaN(be)?-1:null;

if(bf!=null){return bf;
}}return (bd<be)?1:((bd==be)?0:-1);
}},members:{__kQ:null,__kT:null,__kU:null,__kS:null,__kR:null,__kV:null,getRowData:function(bD){var bE=this.__kQ[bD];

if(bE==null||bE.originalData==null){return bE;
}else{return bE.originalData;
}},getRowDataAsMap:function(bL){var bN=this.__kQ[bL];
var bM={};

for(var bO=0;bO<this.getColumnCount();bO++){bM[this.getColumnId(bO)]=bN[bO];
}return bM;
},getDataAsMapArray:function(){var ba=this.getRowCount();
var Y=[];

for(var i=0;i<ba;i++){Y.push(this.getRowDataAsMap(i));
}return Y;
},setEditable:function(k){this.__kT=[];

for(var l=0;l<this.getColumnCount();l++){this.__kT[l]=k;
}this.fireEvent(t);
},setColumnEditable:function(S,T){if(T!=this.isColumnEditable(S)){if(this.__kT==null){this.__kT=[];
}this.__kT[S]=T;
this.fireEvent(t);
}},isColumnEditable:function(bl){return this.__kT?(this.__kT[bl]==true):false;
},setColumnSortable:function(bm,bn){if(bn!=this.isColumnSortable(bm)){if(this.__kU==null){this.__kU=[];
}this.__kU[bm]=bn;
this.fireEvent(t);
}},isColumnSortable:function(R){return (this.__kU?(this.__kU[R]!==false):true);
},sortByColumn:function(bg,bh){var bk;
var bj=this.__kS[bg];

if(bj){bk=(bh?bj.ascending:bj.descending);
}else{if(this.getCaseSensitiveSorting()){bk=(bh?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{bk=(bh?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}bk.columnIndex=bg;
this.__kQ.sort(bk);
this.__kR=bg;
this.__kV=bh;
var bi={columnIndex:bg,ascending:bh};
this.fireDataEvent(q,bi);
this.fireEvent(t);
},setSortMethods:function(L,M){var N;

if(qx.lang.Type.isFunction(M)){N={ascending:M,descending:function(bB,bC){return M(bC,bB);
}};
}else{N=M;
}this.__kS[L]=N;
},getSortMethods:function(bv){return this.__kS[bv];
},clearSorting:function(){if(this.__kR!=-1){this.__kR=-1;
this.__kV=true;
this.fireEvent(t);
}},getSortColumnIndex:function(){return this.__kR;
},isSortAscending:function(){return this.__kV;
},getRowCount:function(){return this.__kQ.length;
},getValue:function(F,G){if(G<0||G>=this.__kQ.length){throw new Error("this.__rowArr out of bounds: "+G+" (0.."+this.__kQ.length+")");
}return this.__kQ[G][F];
},setValue:function(m,n,o){if(this.__kQ[n][m]!=o){this.__kQ[n][m]=o;
if(this.hasListener(u)){var p={firstRow:n,lastRow:n,firstColumn:m,lastColumn:m};
this.fireDataEvent(u,p);
}
if(m==this.__kR){this.clearSorting();
}}},setData:function(bo,bp){this.__kQ=bo;
if(this.hasListener(u)){var bq={firstRow:0,lastRow:bo.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(u,bq);
}
if(bp!==false){this.clearSorting();
}},getData:function(){return this.__kQ;
},setDataAsMapArray:function(O,P,Q){this.setData(this._mapArray2RowArr(O,P),Q);
},addRows:function(br,bs,bt){if(bs==null){bs=this.__kQ.length;
}br.splice(0,0,bs,0);
Array.prototype.splice.apply(this.__kQ,br);
var bu={firstRow:bs,lastRow:this.__kQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(u,bu);

if(bt!==false){this.clearSorting();
}},addRowsAsMapArray:function(H,I,J,K){this.addRows(this._mapArray2RowArr(H,J),I,K);
},setRows:function(e,f,g){if(f==null){f=0;
}e.splice(0,0,f,e.length);
Array.prototype.splice.apply(this.__kQ,e);
var h={firstRow:f,lastRow:this.__kQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(u,h);

if(g!==false){this.clearSorting();
}},setRowsAsMapArray:function(a,b,c,d){this.setRows(this._mapArray2RowArr(a,c),b,d);
},removeRows:function(U,V,W){this.__kQ.splice(U,V);
var X={firstRow:U,lastRow:this.__kQ.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:U,removeCount:V};
this.fireDataEvent(u,X);

if(W!==false){this.clearSorting();
}},_mapArray2RowArr:function(bF,bG){var bK=bF.length;
var bH=this.getColumnCount();
var bJ=new Array(bK);
var bI;

for(var i=0;i<bK;++i){bI=[];

if(bG){bI.originalData=bF[i];
}
for(var j=0;j<bH;++j){bI[j]=bF[i][this.getColumnId(j)];
}bJ[i]=bI;
}return bJ;
}},destruct:function(){this.__kQ=this.__kT=this.__kS=this.__kU=null;
}});
})();
(function(){var cb="",ca="!",bY="'!",bX="'",bW="Expected '",bV="' (rgb(",bU=",",bT=")), but found value '",bS="Event (",bR="Expected value to be the CSS color '",dh="' but found ",dg="The value '",df="qx.core.Object",de="Expected value to be an array but found ",dd=") was fired.",dc="Expected value to be an integer >= 0 but found ",db="' to be not equal with '",da="' to '",cY="qx.ui.core.Widget",cX="Called assertTrue with '",ci="Expected value to be a map but found ",cj="The function did not raise an exception!",cg="Expected value to be undefined but found ",ch="Expected value to be a DOM element but found  '",ce="Expected value to be a regular expression but found ",cf="' to implement the interface '",cc="Expected value to be null but found ",cd="Invalid argument 'type'",cq="Called assert with 'false'",cr="Assertion error! ",cD="Expected value to be a string but found ",cz="null",cL="' but found '",cG="' must must be a key of the map '",cT="The String '",cQ="Expected value not to be undefined but found ",cv="qx.util.ColorUtil",cW=": ",cV="The raised exception does not have the expected type! ",cU=") not fired.",cu="qx.core.Assert",cx="Expected value to be typeof object but found ",cy="' (identical) but found '",cB="' must have any of the values defined in the array '",cE="Expected value to be a number but found ",cH="Called assertFalse with '",cN="]",cS="Expected value to be a qooxdoo object but found ",ck="' arguments.",cl="Expected value not to be null but found ",cw="Array[",cK="' does not match the regular expression '",cJ="' to be not identical with '",cI="' arguments but found '",cP="', which cannot be converted to a CSS color!",cO="Expected object '",cF="qx.core.AssertionError",cM="Expected value to be a boolean but found ",bO="))!",cR="Expected value to be a qooxdoo widget but found ",cm="Expected value '%1' to be in the range '%2'..'%3'!",cn="Expected value to be typeof '",cA="Expected value to be typeof function but found ",bP="Expected value to be an integer but found ",bQ="Called fail().",ct="The parameter 're' must be a string or a regular expression.",co="Expected value to be a number >= 0 but found ",cp="Expected value to be instanceof '",cs="Wrong number of arguments given. Expected '",cC="object";
qx.Class.define(cu,{statics:{__oI:true,__oJ:function(dC,dD){var dE=cb;

for(var i=1,l=arguments.length;i<l;i++){dE=dE+this.__oK(arguments[i]);
}var dG=cr+dC+cW+dE;

if(this.__oI){qx.Bootstrap.error(dG);
}
if(qx.Class.isDefined(cF)){var dF=new qx.core.AssertionError(dC,dE);

if(this.__oI){qx.Bootstrap.error("Stack trace: \n"+dF.getStackTrace());
}throw dF;
}else{throw new Error(dG);
}},__oK:function(bE){var bF;

if(bE===null){bF=cz;
}else if(qx.lang.Type.isArray(bE)&&bE.length>10){bF=cw+bE.length+cN;
}else if((bE instanceof Object)&&(bE.toString==null)){bF=qx.lang.Json.stringify(bE,null,2);
}else{try{bF=bE.toString();
}catch(e){bF=cb;
}}return bF;
},assert:function(Q,R){Q==true||this.__oJ(R||cb,cq);
},fail:function(bD){this.__oJ(bD||cb,bQ);
},assertTrue:function(bv,bw){(bv===true)||this.__oJ(bw||cb,cX,bv,bX);
},assertFalse:function(x,y){(x===false)||this.__oJ(y||cb,cH,x,bX);
},assertEquals:function(bx,by,bz){bx==by||this.__oJ(bz||cb,bW,bx,cL,by,bY);
},assertNotEquals:function(dL,dM,dN){dL!=dM||this.__oJ(dN||cb,bW,dL,db,dM,bY);
},assertIdentical:function(n,o,p){n===o||this.__oJ(p||cb,bW,n,cy,o,bY);
},assertNotIdentical:function(ds,dt,du){ds!==dt||this.__oJ(du||cb,bW,ds,cJ,dt,bY);
},assertNotUndefined:function(U,V){U!==undefined||this.__oJ(V||cb,cQ,U,ca);
},assertUndefined:function(br,bs){br===undefined||this.__oJ(bs||cb,cg,br,ca);
},assertNotNull:function(dV,dW){dV!==null||this.__oJ(dW||cb,cl,dV,ca);
},assertNull:function(dJ,dK){dJ===null||this.__oJ(dK||cb,cc,dJ,ca);
},assertJsonEquals:function(I,J,K){this.assertEquals(qx.lang.Json.stringify(I),qx.lang.Json.stringify(J),K);
},assertMatch:function(bG,bH,bI){this.assertString(bG);
this.assert(qx.lang.Type.isRegExp(bH)||qx.lang.Type.isString(bH),ct);
bG.search(bH)>=0||this.__oJ(bI||cb,cT,bG,cK,bH.toString(),bY);
},assertArgumentsCount:function(W,X,Y,ba){var bb=W.length;
(bb>=X&&bb<=Y)||this.__oJ(ba||cb,cs,X,da,Y,cI,arguments.length,ck);
},assertEventFired:function(dv,event,dw,dx,dy){var dA=false;
var dz=function(e){if(dx){dx.call(dv,e);
}dA=true;
};
var dB=dv.addListener(event,dz,dv);
dw.call();
dA===true||this.__oJ(dy||cb,bS,event,cU);
dv.removeListenerById(dB);
},assertEventNotFired:function(f,event,g,h){var k=false;
var j=function(e){k=true;
};
var m=f.addListener(event,j,f);
g.call();
k===false||this.__oJ(h||cb,bS,event,dd);
f.removeListenerById(m);
},assertException:function(L,M,N,O){var M=M||Error;
var P;

try{this.__oI=false;
L();
}catch(d){P=d;
}finally{this.__oI=true;
}
if(P==null){this.__oJ(O||cb,cj);
}P instanceof M||this.__oJ(O||cb,cV,M);

if(N){this.assertMatch(P.toString(),N,O);
}},assertInArray:function(bc,bd,be){bd.indexOf(bc)!==-1||this.__oJ(be||cb,dg,bc,cB,bd,bX);
},assertArrayEquals:function(bL,bM,bN){this.assertArray(bL,bN);
this.assertArray(bM,bN);
this.assertEquals(bL.length,bM.length,bN);

for(var i=0;i<bL.length;i++){this.assertIdentical(bL[i],bM[i],bN);
}},assertKeyInMap:function(a,b,c){b[a]!==undefined||this.__oJ(c||cb,dg,a,cG,b,bX);
},assertFunction:function(F,G){qx.lang.Type.isFunction(F)||this.__oJ(G||cb,cA,F,ca);
},assertString:function(dn,dp){qx.lang.Type.isString(dn)||this.__oJ(dp||cb,cD,dn,ca);
},assertBoolean:function(dq,dr){qx.lang.Type.isBoolean(dq)||this.__oJ(dr||cb,cM,dq,ca);
},assertNumber:function(dH,dI){(qx.lang.Type.isNumber(dH)&&isFinite(dH))||this.__oJ(dI||cb,cE,dH,ca);
},assertPositiveNumber:function(D,E){(qx.lang.Type.isNumber(D)&&isFinite(D)&&D>=0)||this.__oJ(E||cb,co,D,ca);
},assertInteger:function(z,A){(qx.lang.Type.isNumber(z)&&isFinite(z)&&z%1===0)||this.__oJ(A||cb,bP,z,ca);
},assertPositiveInteger:function(bo,bp){var bq=(qx.lang.Type.isNumber(bo)&&isFinite(bo)&&bo%1===0&&bo>=0);
bq||this.__oJ(bp||cb,dc,bo,ca);
},assertInRange:function(dO,dP,dQ,dR){(dO>=dP&&dO<=dQ)||this.__oJ(dR||cb,qx.lang.String.format(cm,[dO,dP,dQ]));
},assertObject:function(dS,dT){var dU=dS!==null&&(qx.lang.Type.isObject(dS)||typeof dS===cC);
dU||this.__oJ(dT||cb,cx,(dS),ca);
},assertArray:function(bm,bn){qx.lang.Type.isArray(bm)||this.__oJ(bn||cb,de,bm,ca);
},assertMap:function(bJ,bK){qx.lang.Type.isObject(bJ)||this.__oJ(bK||cb,ci,bJ,ca);
},assertRegExp:function(bt,bu){qx.lang.Type.isRegExp(bt)||this.__oJ(bu||cb,ce,bt,ca);
},assertType:function(bA,bB,bC){this.assertString(bB,cd);
typeof (bA)===bB||this.__oJ(bC||cb,cn,bB,dh,bA,ca);
},assertInstance:function(t,u,v){var w=u.classname||u+cb;
t instanceof u||this.__oJ(v||cb,cp,w,dh,t,ca);
},assertInterface:function(q,r,s){qx.Class.implementsInterface(q,r)||this.__oJ(s||cb,cO,q,cf,r,bY);
},assertCssColor:function(bf,bg,bh){var bi=qx.Class.getByName(cv);

if(!bi){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bk=bi.stringToRgb(bf);

try{var bj=bi.stringToRgb(bg);
}catch(H){this.__oJ(bh||cb,bR,bf,bV,bk.join(bU),bT,bg,cP);
}var bl=bk[0]==bj[0]&&bk[1]==bj[1]&&bk[2]==bj[2];
bl||this.__oJ(bh||cb,bR,bk,bV,bk.join(bU),bT,bg,bV,bj.join(bU),bO);
},assertElement:function(S,T){!!(S&&S.nodeType===1)||this.__oJ(T||cb,ch,S,bY);
},assertQxObject:function(di,dj){this.__oL(di,df)||this.__oJ(dj||cb,cS,di,ca);
},assertQxWidget:function(B,C){this.__oL(B,cY)||this.__oJ(C||cb,cR,B,ca);
},__oL:function(dk,dl){if(!dk){return false;
}var dm=dk.constructor;

while(dm){if(dm.classname===dl){return true;
}dm=dm.superclass;
}return false;
}}});
})();
(function(){var t='',s='"',r=':',q=']',p='null',o=': ',m='object',l='function',h=',',g='\n',be='\\u',bd=',\n',bc='0000',bb='string',ba="Cannot stringify a recursive object.",Y='0',X='-',W='}',V='String',U='Boolean',B='\\\\',C='\\f',z='\\t',A='{\n',x='[]',y="qx.lang.JsonImpl",u='Z',w='\\n',D='Object',E='{}',L='@',J='.',O='(',N='Array',Q='T',P='\\r',G='{',T='JSON.parse',S=' ',R='[',F='Number',H=')',I='[\n',K='\\"',M='\\b';
qx.Class.define(y,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__oM:null,__oN:null,__oO:null,__oP:null,stringify:function(bi,bj,bk){this.__oM=t;
this.__oN=t;
this.__oP=[];

if(qx.lang.Type.isNumber(bk)){var bk=Math.min(10,Math.floor(bk));

for(var i=0;i<bk;i+=1){this.__oN+=S;
}}else if(qx.lang.Type.isString(bk)){if(bk.length>10){bk=bk.slice(0,10);
}this.__oN=bk;
}if(bj&&(qx.lang.Type.isFunction(bj)||qx.lang.Type.isArray(bj))){this.__oO=bj;
}else{this.__oO=null;
}return this.__oQ(t,{'':bi});
},__oQ:function(bs,bt){var bw=this.__oM,bu,bx=bt[bs];
if(bx&&qx.lang.Type.isFunction(bx.toJSON)){bx=bx.toJSON(bs);
}else if(qx.lang.Type.isDate(bx)){bx=this.dateToJSON(bx);
}if(typeof this.__oO===l){bx=this.__oO.call(bt,bs,bx);
}
if(bx===null){return p;
}
if(bx===undefined){return undefined;
}switch(qx.lang.Type.getClass(bx)){case V:return this.__oR(bx);
case F:return isFinite(bx)?String(bx):p;
case U:return String(bx);
case N:this.__oM+=this.__oN;
bu=[];

if(this.__oP.indexOf(bx)!==-1){throw new TypeError(ba);
}this.__oP.push(bx);
var length=bx.length;

for(var i=0;i<length;i+=1){bu[i]=this.__oQ(i,bx)||p;
}this.__oP.pop();
if(bu.length===0){var bv=x;
}else if(this.__oM){bv=I+this.__oM+bu.join(bd+this.__oM)+g+bw+q;
}else{bv=R+bu.join(h)+q;
}this.__oM=bw;
return bv;
case D:this.__oM+=this.__oN;
bu=[];

if(this.__oP.indexOf(bx)!==-1){throw new TypeError(ba);
}this.__oP.push(bx);
if(this.__oO&&typeof this.__oO===m){var length=this.__oO.length;

for(var i=0;i<length;i+=1){var k=this.__oO[i];

if(typeof k===bb){var v=this.__oQ(k,bx);

if(v){bu.push(this.__oR(k)+(this.__oM?o:r)+v);
}}}}else{for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__oQ(k,bx);

if(v){bu.push(this.__oR(k)+(this.__oM?o:r)+v);
}}}}this.__oP.pop();
if(bu.length===0){var bv=E;
}else if(this.__oM){bv=A+this.__oM+bu.join(bd+this.__oM)+g+bw+W;
}else{bv=G+bu.join(h)+W;
}this.__oM=bw;
return bv;
}},dateToJSON:function(bo){var bp=function(n){return n<10?Y+n:n;
};
var bq=function(n){var br=bp(n);
return n<100?Y+br:br;
};
return isFinite(bo.valueOf())?bo.getUTCFullYear()+X+bp(bo.getUTCMonth()+1)+X+bp(bo.getUTCDate())+Q+bp(bo.getUTCHours())+r+bp(bo.getUTCMinutes())+r+bp(bo.getUTCSeconds())+J+bq(bo.getUTCMilliseconds())+u:null;
},__oR:function(bf){var bg={'\b':M,'\t':z,'\n':w,'\f':C,'\r':P,'"':K,'\\':B};
var bh=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bh.lastIndex=0;

if(bh.test(bf)){return s+
bf.replace(bh,function(a){var c=bg[a];
return typeof c===bb?c:be+(bc+a.charCodeAt(0).toString(16)).slice(-4);
})+s;
}else{return s+bf+s;
}},parse:function(bl,bm){var bn=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bn.lastIndex=0;
if(bn.test(bl)){bl=bl.replace(bn,function(a){return be+(bc+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bl.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,L).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q).replace(/(?:^|:|,)(?:\s*\[)+/g,t))){var j=eval(O+bl+H);
return typeof bm===l?this.__oS({'':j},t,bm):j;
}throw new SyntaxError(T);
},__oS:function(b,d,e){var f=b[d];

if(f&&typeof f===m){for(var k in f){if(Object.hasOwnProperty.call(f,k)){var v=this.__oS(f,k,e);

if(v!==undefined){f[k]=v;
}else{delete f[k];
}}}}return e.call(b,d,f);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var c="qx.util.TimerManager",b="interval",a="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:a,statics:{__HB:[],__HC:{},__HD:0},members:{start:function(q,r,s,t,u){if(!u){u=r||0;
}var v=(new Date()).getTime()+u;
arguments.callee.self.__HC[++arguments.callee.self.__HD]={callback:q,userData:t||null,expireAt:v,recurTime:r,context:s||this};
this.__HE(v,arguments.callee.self.__HD);
return arguments.callee.self.__HD;
},stop:function(o){var p=arguments.callee.self.__HB;
var length=p.length;

for(var i=0;i<length;i++){if(p[i]==o){p.splice(i,1);
break;
}}delete arguments.callee.self.__HC[o];
if(p.length==0){qx.event.Idle.getInstance().removeListener(b,this.__HF);
}},__HE:function(k,l){var n=arguments.callee.self.__HB;
var m=arguments.callee.self.__HC;
var length=n.length;

for(var i=0;i<length;i++){if(m[n[i]].expireAt>k){n.splice(i,0,l);
break;
}}if(n.length==length){n.push(l);
}if(n.length==1){qx.event.Idle.getInstance().addListener("interval",this.__HF,this);
}},__HF:function(){var g=(new Date()).getTime();
var e=arguments.callee.self.__HB;
var f=arguments.callee.self.__HC;
while(e.length>0&&f[e[0]].expireAt<=g){var j=(e.splice(0,1))[0];
var d=f[j];
d.callback.call(d.context,d.userData,j);
if(d.recurTime&&f[j]){var h=(new Date()).getTime();
d.expireAt=h+d.recurTime;
this.__HE(d.expireAt,j);
}else{delete f[j];
}}if(e.length==0){qx.event.Idle.getInstance().removeListener("interval",this.__HF);
}}}});
})();
(function(){var p='g',o="==",n=">",m="notregex",l="between",k="<",j="regex",h='gi',g="!between",f=">=",c="dataChanged",e="!=",d="<=",b="qx.ui.table.model.Filtered",a='';
qx.Class.define(b,{extend:qx.ui.table.model.Simple,construct:function(){arguments.callee.base.call(this);
this.numericAllowed=new Array(o,e,n,k,f,d);
this.betweenAllowed=new Array(l,g);
this.__DI=false;
this.Filters=new Array();
},members:{__DJ:null,__DI:null,_js_in_array:function(O,P){var Q=P.toString();

if(Q==a){return false;
}var S=new RegExp(O,p);
var R=S.test(P);
return R;
},addBetweenFilter:function(J,K,L,M){if(this._js_in_array(J,this.betweenAllowed)&&M!=null){if(K!=null&&L!=null){var N=new Array(J,K,L,M);
}}
if(N!=null){this.Filters.push(N);
}else{throw new Error("Filter not recognized or value1/value2 is null!");
}},addNumericFilter:function(A,B,C){var D=null;

if(this._js_in_array(A,this.numericAllowed)&&C!=null){if(B!=null){D=[A,B,C];
}}
if(D!=null){this.Filters.push(D);
}else{throw new Error("Filter not recognized: value or target is null!");
}},addRegex:function(q,r,s){var u;

if(s){u=h;
}else{u=p;
}
if(q!=null&&r!=null){var t=new Array(j,q,r,u);
}
if(t!=null){this.Filters.push(t);
}else{throw new Error("regex cannot be null!");
}},addNotRegex:function(v,w,x){var z;

if(x){z=h;
}else{z=p;
}
if(v!=null&&w!=null){var y=new Array(m,v,w,z);
}
if(y!=null){this.Filters.push(y);
}else{throw new Error("notregex cannot be null!");
}},applyFilters:function(){var i;
var X;
var T;
var W=this.getData();
var U=W.length;

for(var ba=0;ba<U;ba++){X=false;

for(i in this.Filters){if(this._js_in_array(this.Filters[i][0],this.numericAllowed)&&X==false){T=this.getValueById(this.Filters[i][2],ba);

switch(this.Filters[i][0]){case o:if(T==this.Filters[i][1]){X=true;
}break;
case e:if(T!=this.Filters[i][1]){X=true;
}break;
case n:if(T>this.Filters[i][1]){X=true;
}break;
case k:if(T<this.Filters[i][1]){X=true;
}break;
case f:if(T>=this.Filters[i][1]){X=true;
}break;
case d:if(T<=this.Filters[i][1]){X=true;
}break;
}}else if(this._js_in_array(this.Filters[i][0],this.betweenAllowed)&&X==false){T=this.getValueById(this.Filters[i][3],ba);

switch(this.Filters[i][0]){case l:if(T>=this.Filters[i][1]&&T<=this.Filters[i][2]){X=true;
}break;
case g:if(T<this.Filters[i][1]&&T>this.Filters[i][2]){X=true;
}break;
}}else if(this.Filters[i][0]==j&&X==false){T=this.getValueById(this.Filters[i][2],ba);
var V=new RegExp(this.Filters[i][1],this.Filters[i][3]);
X=V.test(T);
}else if(this.Filters[i][0]==m&&X==false){T=this.getValueById(this.Filters[i][2],ba);
var V=new RegExp(this.Filters[i][1],this.Filters[i][3]);
X=!V.test(T);
}}if(X==true){this.hideRows(ba,1,false);
ba--;
U--;
}}var Y={firstRow:0,lastRow:U-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(c,Y);
},hideRows:function(E,F,dispatchEvent){var H=this.getData();
dispatchEvent=(dispatchEvent!=null?dispatchEvent:true);

if(!this.__DI){this.__DJ=H.slice(0);
this.__DI=true;
}
if(F==null||F<1){F=1;
}
for(var G=E;G<(H.length-F);G++){H[G]=H[G+F];
}this.removeRows(G,F);
if(dispatchEvent){var I={firstRow:0,lastRow:H.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(c,I);
}},resetHiddenRows:function(){if(!this.__DJ){return ;
}this.Filters=[];
this.setData(qx.lang.Array.clone(this.__DJ));
},setData:function(bb,bc){this.__DJ=qx.lang.Array.clone(bb);
this.Filters=[];
arguments.callee.base.call(this,bb,bc);
}},destruct:function(){this.__DJ=this.numericAllowed=this.betweenAllowed=this.Filters=null;
}});
})();
(function(){var c="",b="Classname",a="inspector.objects2.table.AbstractModel";
qx.Class.define(a,{extend:qx.ui.table.model.Filtered,construct:function(e,f){arguments.callee.base.call(this);
this._model=e;
this.setColumns(f);
this.setData(this._getData());
},members:{__Od:c,_model:null,_getData:function(){throw Error("Abstract Method call!");
},reload:function(){this.setData(this._getData());
this.filter(this.__Od);
},filter:function(d){this.__Od=d;
this.resetHiddenRows();

if(d!=c){this.addNotRegex(d,b,true);
this.applyFilters();
}}},destruct:function(){this._model=null;
}});
})();
(function(){var c="Classname",b="Hash",a="inspector.objects2.table.HashModel";
qx.Class.define(a,{extend:inspector.objects2.table.AbstractModel,construct:function(g){arguments.callee.base.call(this,g,[b,c]);
},members:{_getData:function(){var d=this._model.getObjects();
var e=[];

for(var i=0;i<d.length;i++){var f=d[i];
e.push([f.toHashCode(),f.classname]);
}return e;
}}});
})();
(function(){var e="inspector.objects2.table.CountModel",d="Count",c="Classname";
qx.Class.define(e,{extend:inspector.objects2.table.AbstractModel,construct:function(f){arguments.callee.base.call(this,f,[d,c]);
},members:{_getData:function(){var j=this._model.getObjects();
var h={};

for(var i=0;i<j.length;i++){var g=j[i].classname;

if(h[g]===undefined){h[g]=0;
}h[g]++;
}var k=[];

for(var g in h){k.push([h[g],g]);
}k.sort(function(a,b){return a[0]<b[0];
});
return k;
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
(function(){var s="instance",r="]",q='id',p=" [",o='instance',n="changeOpen",h="_getChildren",g="getChildren",f="inspector/images/components/image.png",d="qx.ui.form.TextField",bC="qx.ui.layout.DockLayout",bB="inspector/images/components/radiobutton.png",bA="_structureToggle",bz="qx.ui.pageview.buttonview.Button",by="inspector/images/components/verticallayout.png",bx="qx.ui.groupbox.RadioGroupBox",bw="inspector/images/components/horizontallayout.png",bv="inspector/images/components/label.png",bu="qx.ui.groupbox.CheckGroupBox",bt="qx.ui.treevirtual.TreeVirtual",A="qx.ui.basic.Image",B="qx.ui.basic.Label",y="qx.ui.pageview.tabview.Button",z="inspector/images/components/toolbar.png",v="qx.ui.toolbar.ToolBar",x="inspector/images/components/window.png",t="_reloadButton",u="_tree",I="inspector/images/components/button.png",J="inspector/images/components/textarea.png",W="qx.ui.form.RadioButton",S="qx.ui.window.Window",bf="changeSelection",ba="inspector/images/components/table.png",bp="qx.ui.tree.Tree",bk="qx.ui.layout.HBox",N="qx.ui.form.ComboBox",bs="inspector/images/components/textfield.png",br="inspector/images/components/groupbox.png",bq="icon/22/actions/view-refresh.png",M="inspector/images/components/checkbox.png",P="qx.ui.form.CheckBox",R="Display internal widget structure.",U="qx.ui.table.Table",X="Reload the window.",bb="qx.ui.layout.VBox",bh="qx.ui.menu.Layout",bm="inspector/images/components/atom.png",C="qx.ui.toolbar.Button",D="qx.ui.menu.Button",O="qx.ui.layout.CanvasLayout",be="inspector/images/components/spinner.png",bd="qx.ui.layout.FlowLayout",bc="qx.ui.menu.Menu",bj="Widgets",bi="qx.ui.form.Button",Y="click",bg="inspector.widgets.WidgetsWindow",a="inspector/images/components/tree.png",bl="qx.ui.layout.GridLayout",E="qx.ui.pageview.radioview.Button",F="qx.ui.form.TextArea",T="qx.ui.groupbox.Groupbox",b="qx.ui.menubar.Button",c="inspector/images/components/menu.png",L="qx.ui.menubar.MenuBar",G="inspector/images/components/layout.png",H="qx.ui.splitpane.SplitPane",K="inspector/images/components/combobox.png",V="qx.ui.basic.Atom",bo="inspector/images/components/splitpane.png",bn="icon/22/actions/document-properties.png",Q="qx.ui.form.Spinner";
qx.Class.define(bg,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,bj);
this._reloadButton=new qx.ui.toolbar.Button(null,bq);
this._reloadButton.setToolTipText(X);
this._toolbar.add(this._reloadButton);
this._reloadButton.addListener(Y,function(){this.load();
},this);
this._toolbar.addSpacer();
this._structureToggle=new qx.ui.toolbar.CheckBox(null,bn);
this._structureToggle.setToolTipText(R);
this._toolbar.add(this._structureToggle);
this._structureToggle.setValue(false);
this._tree=new qx.ui.tree.Tree();
this._tree.setDecorator(null);
this._tree.setRootOpenClose(true);
this.add(this._tree,{flex:1});
this._tree.addListener(bf,function(e){if(e.getData()[0]){var bE=e.getData()[0].getUserData(s);
qx.core.Init.getApplication().select(bE,this);
}},this);
},members:{setInitSizeAndPosition:function(){var bQ=qx.bom.Viewport.getWidth()-this.getWidth();
var bP=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(bQ,30+bP);
this.setHeight(bP);
},select:function(bO){this._selectWidgetInTheTree(bO);
},getSelection:function(){var bI=this._tree.getSelection()[0];
if(bI!=null){return bI.getUserData(s);
}return null;
},load:function(bF){if(bF==undefined){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
}else{this._iFrameWindow=bF;
}var bG=this._iFrameWindow.qx.core.Init.getApplication().getRoot();
var bH=new qx.ui.tree.TreeFolder(bG.classname+p+bG.toHashCode()+r);
bH.setUserData(s,bG);
this._tree.setRoot(bH);
this._fillTree(bG,bH,2);
},_fillTree:function(bU,bV,bW){var cc=bV.getItems(false,true);
var bX=this._structureToggle.isValue()?h:g;
if(bU[bX]==undefined){if(bX===g){bX=h;

if(bU[bX]==undefined){return;
}}else{return;
}}if(bU[bX]().length==0){if(cc.length>1){for(var m=0;m<cc.length;m++){if(cc[m+1]==this._tree.getSelection()[0]){this._tree.resetSelection();
}bV.removeAt(0);
}}}var cd=qx.core.Init.getApplication().getExcludes();
var i=0;
bW--;
for(var k=0;k<bU[bX]().length;k++){var ca=bU[bX]()[k];
var bY=false;

for(var j=0;j<cd.length;j++){if(ca==cd[j]){bY=true;
break;
}}if(bY){continue;
}if(cc[i]==null){var ce=new qx.ui.tree.TreeFolder(ca.classname+p+ca.toHashCode()+r);
ce.setIcon(this._getIconPath(ca.classname));
bV.addAt(ce,i);
ce.setUserData(o,ca);
ce.setUserData(q,ca.toHashCode());
ce.addListener(n,this._treeOpenHandler,this);
}else{if(cc[i].getLabel()==ca.classname+p+ca.toHashCode()+r){var ce=cc[i];
}else{if(bV.getItems()[i]!=null){if(bV.getItems()[i]==this._tree.getSelection()[0]){this._tree.resetSelection();
}}bV.removeAt(i);
var ce=new qx.ui.tree.TreeFolder(ca.classname+p+ca.toHashCode()+r);
bV.addAt(ce,i);
ce.setUserData(o,ca);
ce.setUserData(q,ca.toHashCode());
ce.addListener(n,this._treeOpenHandler,this);
}}if(bW>0){this._fillTree(ca,ce,bW);
}if(i+1==bU[bX]().length){var cb=bV.getItems(false,true);
if(cb.length-2!=i){for(var l=i+1;l<cb.length;l++){bV.removeAt(i+1);
}}}i++;
}},_treeOpenHandler:function(e){if(e.getData()){var bD=e.getTarget().getUserData(o);
this._fillTree(bD,e.getTarget(),2);
}},_getIconPath:function(cf){switch(cf){case A:return f;
case B:return bv;
case V:return bm;
case bp:case bt:return a;
case bc:return c;
case bi:case D:case b:case bz:case E:case y:case C:return I;
case O:case bC:case bd:case bl:case bh:return G;
case bb:return by;
case bk:return bw;
case v:case L:return z;
case S:return x;
case T:case bu:case bx:return br;
case Q:return be;
case N:return K;
case d:return bs;
case F:return J;
case H:return bo;
case U:return ba;
case P:return M;
case W:return bB;
default:return null;
}},_selectWidgetInTheTree:function(bJ){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
if(!(bJ instanceof this._iFrameWindow.qx.ui.core.Widget)){return;
}var bL=[];
var w=bJ;

if(this._structureToggle.isValue()){while(w.getLayoutParent()!=null){bL.push(w);
w=w.getLayoutParent();
}}else{while(w.getParent!=undefined&&w.getParent()!=null||w.getLayoutParent()!=null){if(w.getParent!=undefined&&w.getParent()!=null){bL.push(w);
w=w.getParent();
}else if(w.getLayoutParent()!=null){bL.push(w);
w=w.getLayoutParent();
}}}for(var i=bL.length-1;i>0;i--){this._openFolder(bL[i]);
}this._tree.getRoot().setOpen(true);
var bN=bJ.toHashCode();
var bK=this._tree.getItems(true,true);
var bM=false;
if(this._tree.getRoot().getUserData(s).toHashCode()==bN){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return;
}for(var i=0;i<bK.length;i++){if(bK[i].getUserData(q)==bN){bM=true;
this._tree.resetSelection();
this._tree.addToSelection(bK[i]);
break;
}}if(!bM){this._tree.resetSelection();
}},_openFolder:function(bR){var bT=bR.toHashCode();
var bS=this._tree.getItems(true,true);
if(this._tree.getRoot().getUserData(s).toHashCode()==bT){this._tree.resetSelection();
this._tree.addToSelection(this._tree.getRoot());
return ;
}for(var i=0;i<bS.length;i++){if(bS[i].getUserData(q)==bT){bS[i].setOpen(true);
break;
}}}},destruct:function(){this._iFrameWindow=null;
this._disposeObjects(t,bA,u);
}});
})();
(function(){var T="scrollbar-y",S="scrollbar-x",R="pane",Q="auto",P="corner",O="on",N="changeVisibility",M="scroll",L="_computeScrollbars",K="off",D="scrollY",J="qx.ui.core.scroll.AbstractScrollArea",G="abstract",B="update",A="scrollX",F="mousewheel",E="scrollbarY",H="scrollbarX",z="horizontal",I="scrollarea",C="vertical";
qx.Class.define(J,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:G,construct:function(){arguments.callee.base.call(this);
var i=new qx.ui.layout.Grid();
i.setColumnFlex(0,1);
i.setRowFlex(0,1);
this._setLayout(i);
this.addListener(F,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:I},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[Q,O,K],init:Q,themeable:true,apply:L},scrollbarY:{check:[Q,O,K],init:Q,themeable:true,apply:L},scrollbar:{group:[H,E]}},members:{_createChildControlImpl:function(w){var x;

switch(w){case R:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(B,this._computeScrollbars,this);
x.addListener(A,this._onScrollPaneX,this);
x.addListener(D,this._onScrollPaneY,this);
this._add(x,{row:0,column:0});
break;
case S:x=this._createScrollBar(z);
x.setMinWidth(0);
x.exclude();
x.addListener(M,this._onScrollBarX,this);
x.addListener(N,this._onChangeScrollbarXVisibility,this);
this._add(x,{row:1,column:0});
break;
case T:x=this._createScrollBar(C);
x.setMinHeight(0);
x.exclude();
x.addListener(M,this._onScrollBarY,this);
x.addListener(N,this._onChangeScrollbarYVisibility,this);
this._add(x,{row:0,column:1});
break;
case P:x=new qx.ui.core.Widget();
x.setWidth(0);
x.setHeight(0);
x.exclude();
this._add(x,{row:1,column:1});
break;
}return x||arguments.callee.base.call(this,w);
},getPaneSize:function(){return this.getChildControl(R).getInnerSize();
},getItemTop:function(y){return this.getChildControl(R).getItemTop(y);
},getItemBottom:function(v){return this.getChildControl(R).getItemBottom(v);
},getItemLeft:function(j){return this.getChildControl(R).getItemLeft(j);
},getItemRight:function(b){return this.getChildControl(R).getItemRight(b);
},scrollToX:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(S).scrollTo(X);
},scrollByX:function(a){qx.ui.core.queue.Manager.flush();
this.getChildControl(S).scrollBy(a);
},getScrollX:function(){var c=this.getChildControl(S,true);
return c?c.getPosition():0;
},scrollToY:function(U){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollTo(U);
},scrollByY:function(k){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollBy(k);
},getScrollY:function(){var d=this.getChildControl(T,true);
return d?d.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(R).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(R).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var g=this._isChildControlVisible(S);
var h=this._isChildControlVisible(T);
var f=(h)?this.getChildControl(T,true):(g?this.getChildControl(S,true):null);

if(f){f.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var Y=this._isChildControlVisible(S);
var ba=this._isChildControlVisible(T);

if(!Y){this.scrollToX(0);
}Y&&ba?this._showChildControl(P):this._excludeChildControl(P);
},_onChangeScrollbarYVisibility:function(e){var V=this._isChildControlVisible(S);
var W=this._isChildControlVisible(T);

if(!W){this.scrollToY(0);
}V&&W?this._showChildControl(P):this._excludeChildControl(P);
},_computeScrollbars:function(){var r=this.getChildControl(R);
var content=r.getChildren()[0];

if(!content){this._excludeChildControl(S);
this._excludeChildControl(T);
return;
}var l=this.getInnerSize();
var q=r.getInnerSize();
var o=r.getScrollSize();
if(!q||!o){return;
}var s=this.getScrollbarX();
var t=this.getScrollbarY();

if(s===Q&&t===Q){var p=o.width>l.width;
var u=o.height>l.height;
if((p||u)&&!(p&&u)){if(p){u=o.height>q.height;
}else if(u){p=o.width>q.width;
}}}else{var p=s===O;
var u=t===O;
if(o.width>(p?q.width:l.width)&&s===Q){p=true;
}
if(o.height>(p?q.height:l.height)&&t===Q){u=true;
}}if(p){var n=this.getChildControl(S);
n.show();
n.setMaximum(Math.max(0,o.width-q.width));
n.setKnobFactor(q.width/o.width);
}else{this._excludeChildControl(S);
}
if(u){var m=this.getChildControl(T);
m.show();
m.setMaximum(Math.max(0,o.height-q.height));
m.setKnobFactor(q.height/o.height);
}else{this._excludeChildControl(T);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var w="single",v="Boolean",u="one",t="changeSelection",s="mouseup",r="mousedown",q="losecapture",p="multi",o="_applyQuickSelection",n="mouseover",f="_applySelectionMode",m="__il",j="_applyDragSelection",d="qx.ui.core.MMultiSelectionHandling",c="removeItem",h="keypress",g="qx.event.type.Data",k="addItem",b="additive",l="mousemove";
qx.Mixin.define(d,{construct:function(){var I=this.SELECTION_MANAGER;
var H=this.__il=new I(this);
this.addListener(r,H.handleMouseDown,H);
this.addListener(s,H.handleMouseUp,H);
this.addListener(n,H.handleMouseOver,H);
this.addListener(l,H.handleMouseMove,H);
this.addListener(q,H.handleLoseCapture,H);
this.addListener(h,H.handleKeyPress,H);
this.addListener(k,H.handleAddItem,H);
this.addListener(c,H.handleRemoveItem,H);
H.addListener(t,this._onSelectionChange,this);
},events:{"changeSelection":g},properties:{selectionMode:{check:[w,p,b,u],init:w,apply:f},dragSelection:{check:v,init:false,apply:j},quickSelection:{check:v,init:false,apply:o}},members:{__il:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting all items."));
this.trace();
}this.__il.selectAll();
},isSelected:function(a){if(!qx.ui.core.Widget.contains(this,a)){throw new Error("Could not test if "+a+" is selected, because it is not a child element!");
}return this.__il.isItemSelected(a);
},addToSelection:function(C){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,C)){throw new Error("Could not add + "+C+" to selection, because it is not a child element!");
}this.__il.addItem(C);
},removeFromSelection:function(J){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,J)){throw new Error("Could not remove "+J+" from selection, because it is not a child element!");
}this.__il.removeItem(J);
},selectRange:function(D,E){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__il.selectItemRange(D,E);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selection."));
this.trace();
}this.__il.clearSelection();
},setSelection:function(x){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
for(var i=0;i<x.length;i++){if(!qx.ui.core.Widget.contains(this,x[i])){throw new Error("Could not select "+x[i]+", because it is not a child element!");
}}
if(x.length===0){this.resetSelection();
}else{var y=this.getSelection();

if(!qx.lang.Array.equals(y,x)){this.__il.replaceSelection(x);
}}},getSelection:function(){return this.__il.getSelection();
},getSortedSelection:function(){return this.__il.getSortedSelection();
},isSelectionEmpty:function(){return this.__il.isSelectionEmpty();
},getSelectionContext:function(){return this.__il.getSelectionContext();
},_getManager:function(){return this.__il;
},getSelectables:function(){return this.__il.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__il.invertSelection();
},_getLeadItem:function(){var B=this.__il.getMode();

if(B===w||B===u){return this.__il.getSelectedItem();
}else{return this.__il.getLeadItem();
}},_applySelectionMode:function(z,A){this.__il.setMode(z);
},_applyDragSelection:function(F,G){this.__il.setDrag(F);
},_applyQuickSelection:function(K,L){this.__il.setQuick(K);
},_onSelectionChange:function(e){this.fireDataEvent(t,e.getData());
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var bV="one",bU="single",bT="selected",bS="additive",bR="multi",bQ="PageUp",bP="under",bO="Left",bN="lead",bM="Down",cu="Up",ct="Boolean",cs="PageDown",cr="anchor",cq="End",cp="Home",co="Right",cn="right",cm="click",cl="above",cd="left",ce="Escape",cb="A",cc="Space",bY="_applyMode",ca="interval",bW="changeSelection",bX="qx.event.type.Data",cf="quick",cg="key",ci="__iv",ch="abstract",ck="drag",cj="qx.ui.core.selection.Abstract";
qx.Class.define(cj,{type:ch,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__is={};
},events:{"changeSelection":bX},properties:{mode:{check:[bU,bR,bS,bV],init:bU,apply:bY},drag:{check:ct,init:false},quick:{check:ct,init:false}},members:{__it:0,__iu:0,__iv:null,__iw:null,__ix:null,__iy:null,__iz:null,__iA:null,__iB:null,__iC:null,__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__is:null,__iK:null,__iL:null,getSelectionContext:function(){return this.__iI;
},selectAll:function(){var N=this.getMode();

if(N==bU||N==bV){throw new Error("Can not select all items in selection mode: "+N);
}this._selectAllItems();
this._fireChange();
},selectItem:function(bt){this._setSelectedItem(bt);
var bu=this.getMode();

if(bu!==bU&&bu!==bV){this._setLeadItem(bt);
this._setAnchorItem(bt);
}this._scrollItemIntoView(bt);
this._fireChange();
},addItem:function(z){var A=this.getMode();

if(A===bU||A===bV){this._setSelectedItem(z);
}else{if(!this._getAnchorItem()){this._setAnchorItem(z);
}this._setLeadItem(z);
this._addToSelection(z);
}this._scrollItemIntoView(z);
this._fireChange();
},removeItem:function(bA){this._removeFromSelection(bA);

if(this.getMode()===bV&&this.isSelectionEmpty()){var bB=this._getFirstSelectable();

if(bB){this.addItem(bB);
}if(bB==bA){return;
}}
if(this.getLeadItem()==bA){this._setLeadItem(null);
}
if(this._getAnchorItem()==bA){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(B,C){var D=this.getMode();

if(D==bU||D==bV){throw new Error("Can not select multiple items in selection mode: "+D);
}this._selectItemRange(B,C);
this._setAnchorItem(B);
this._setLeadItem(C);
this._scrollItemIntoView(C);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bV){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cQ){var cR=this.getMode();

if(cR==bV||cR===bU){if(cQ.length>1){throw new Error("Could not select more than one items in mode: "+cR+"!");
}
if(cQ.length==1){this.selectItem(cQ[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cQ);
}},getSelectedItem:function(){var W=this.getMode();

if(W===bU||W===bV){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__is);
},getSortedSelection:function(){var H=this.getSelectables();
var G=qx.lang.Object.getValues(this.__is);
G.sort(function(a,b){return H.indexOf(a)-H.indexOf(b);
});
return G;
},isItemSelected:function(bo){var bp=this._selectableToHashCode(bo);
return this.__is[bp]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__is);
},invertSelection:function(){var y=this.getMode();

if(y===bU||y===bV){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var x=this.getSelectables();

for(var i=0;i<x.length;i++){this._toggleInSelection(x[i]);
}this._fireChange();
},_setLeadItem:function(cT){var cU=this.__iJ;

if(cU!==null){this._styleSelectable(cU,bN,false);
}
if(cT!==null){this._styleSelectable(cT,bN,true);
}this.__iJ=cT;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__iJ!==null?this.__iJ:null;
},_setAnchorItem:function(bw){var bx=this.__iK;

if(bx){this._styleSelectable(bx,cr,false);
}
if(bw){this._styleSelectable(bw,cr,true);
}this.__iK=bw;
},_getAnchorItem:function(){return this.__iK!==null?this.__iK:null;
},_isSelectable:function(O){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bL=event.getTarget();
return this._isSelectable(bL)?bL:null;
},_selectableToHashCode:function(P){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cv,cw,cx){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(br){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bv){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cV,cW){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bs){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(U,V){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(E,F){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bJ,bK){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cy,cz){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cy===bV){var cA=this._getFirstSelectable();

if(cA){this._setSelectedItem(cA);
this._scrollItemIntoView(cA);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bn=this.getMode();

if(bn!==bV&&bn!==bU){return;
}var bm=this._getSelectableFromMouseEvent(event);

if(bm===null){return;
}this._setSelectedItem(bm);
this._fireChange(cf);
},handleMouseDown:function(event){var bg=this._getSelectableFromMouseEvent(event);

if(bg===null){return;
}var bi=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bf=event.isShiftPressed();
if(this.isItemSelected(bg)&&!bf&&!bi&&!this.getDrag()){this.__iL=bg;
return;
}else{this.__iL=null;
}this._scrollItemIntoView(bg);
switch(this.getMode()){case bU:case bV:this._setSelectedItem(bg);
break;
case bS:this._setLeadItem(bg);
this._setAnchorItem(bg);
this._toggleInSelection(bg);
break;
case bR:this._setLeadItem(bg);
if(bf){var bh=this._getAnchorItem();

if(bh===null){bh=this._getFirstSelectable();
this._setAnchorItem(bh);
}this._selectItemRange(bh,bg,bi);
}else if(bi){this._setAnchorItem(bg);
this._toggleInSelection(bg);
}else{this._setAnchorItem(bg);
this._setSelectedItem(bg);
}break;
}var bj=this.getMode();

if(this.getDrag()&&bj!==bU&&bj!==bV&&!bf&&!bi){this.__iz=this._getLocation();
this.__iw=this._getScroll();
this.__iA=event.getDocumentLeft()+this.__iw.left;
this.__iB=event.getDocumentTop()+this.__iw.top;
this.__iC=true;
this._capture();
}this._fireChange(cm);
},handleMouseUp:function(event){var T=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var Q=event.isShiftPressed();

if(!T&&!Q&&this.__iL){var R=this._getSelectableFromMouseEvent(event);

if(R===null||!this.isItemSelected(R)){return;
}var S=this.getMode();

if(S===bS){this._removeFromSelection(R);
}else{this._setSelectedItem(R);

if(this.getMode()===bR){this._setLeadItem(R);
this._setAnchorItem(R);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__iC){return;
}this.__iD=event.getDocumentLeft();
this.__iE=event.getDocumentTop();
var bz=this.__iD+this.__iw.left;

if(bz>this.__iA){this.__iF=1;
}else if(bz<this.__iA){this.__iF=-1;
}else{this.__iF=0;
}var by=this.__iE+this.__iw.top;

if(by>this.__iB){this.__iG=1;
}else if(by<this.__iB){this.__iG=-1;
}else{this.__iG=0;
}var location=this.__iz;

if(this.__iD<location.left){this.__it=this.__iD-location.left;
}else if(this.__iD>location.right){this.__it=this.__iD-location.right;
}else{this.__it=0;
}
if(this.__iE<location.top){this.__iu=this.__iE-location.top;
}else if(this.__iE>location.bottom){this.__iu=this.__iE-location.bottom;
}else{this.__iu=0;
}if(!this.__iv){this.__iv=new qx.event.Timer(100);
this.__iv.addListener(ca,this._onInterval,this);
}this.__iv.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var ba=e.getData();

if(this.getMode()===bV&&this.isSelectionEmpty()){this.addItem(ba);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__iC){return;
}if(this.__iH){this._fireChange(cm);
}delete this.__iC;
delete this.__ix;
delete this.__iy;
this._releaseCapture();
if(this.__iv){this.__iv.stop();
}},_onInterval:function(e){this._scrollBy(this.__it,this.__iu);
this.__iw=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cM=this._getDimension();
var cF=Math.max(0,Math.min(this.__iD-this.__iz.left,cM.width))+this.__iw.left;
var cE=Math.max(0,Math.min(this.__iE-this.__iz.top,cM.height))+this.__iw.top;
if(this.__ix===cF&&this.__iy===cE){return;
}this.__ix=cF;
this.__iy=cE;
var cO=this._getAnchorItem();
var cH=cO;
var cK=this.__iF;
var cN,cG;

while(cK!==0){cN=cK>0?this._getRelatedSelectable(cH,cn):this._getRelatedSelectable(cH,cd);
if(cN!==null){cG=this._getSelectableLocationX(cN);
if((cK>0&&cG.left<=cF)||(cK<0&&cG.right>=cF)){cH=cN;
continue;
}}break;
}var cL=this.__iG;
var cJ,cI;

while(cL!==0){cJ=cL>0?this._getRelatedSelectable(cH,bP):this._getRelatedSelectable(cH,cl);
if(cJ!==null){cI=this._getSelectableLocationY(cJ);
if((cL>0&&cI.top<=cE)||(cL<0&&cI.bottom>=cE)){cH=cJ;
continue;
}}break;
}var cP=this.getMode();

if(cP===bR){this._selectItemRange(cO,cH);
}else if(cP===bS){if(this.isItemSelected(cO)){this._selectItemRange(cO,cH,true);
}else{this._deselectItemRange(cO,cH);
}this._setAnchorItem(cH);
}this._fireChange(ck);
},__iM:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var j,h;
var m=event.getKeyIdentifier();
var k=this.getMode();
var d=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var f=event.isShiftPressed();
var g=false;

if(m===cb&&d){if(k!==bU&&k!==bV){this._selectAllItems();
g=true;
}}else if(m===ce){if(k!==bU&&k!==bV){this._clearSelection();
g=true;
}}else if(m===cc){var c=this.getLeadItem();

if(c&&!f){if(d||k===bS){this._toggleInSelection(c);
}else{this._setSelectedItem(c);
}g=true;
}}else if(this.__iM[m]){g=true;

if(k===bU||k==bV){j=this._getSelectedItem();
}else{j=this.getLeadItem();
}
if(j!==null){switch(m){case cp:h=this._getFirstSelectable();
break;
case cq:h=this._getLastSelectable();
break;
case cu:h=this._getRelatedSelectable(j,cl);
break;
case bM:h=this._getRelatedSelectable(j,bP);
break;
case bO:h=this._getRelatedSelectable(j,cd);
break;
case co:h=this._getRelatedSelectable(j,cn);
break;
case bQ:h=this._getPage(j,true);
break;
case cs:h=this._getPage(j,false);
break;
}}else{switch(m){case cp:case bM:case co:case cs:h=this._getFirstSelectable();
break;
case cq:case cu:case bO:case bQ:h=this._getLastSelectable();
break;
}}if(h!==null){switch(k){case bU:case bV:this._setSelectedItem(h);
break;
case bS:this._setLeadItem(h);
break;
case bR:if(f){var n=this._getAnchorItem();

if(n===null){this._setAnchorItem(n=this._getFirstSelectable());
}this._setLeadItem(h);
this._selectItemRange(n,h,d);
}else{this._setAnchorItem(h);
this._setLeadItem(h);

if(!d){this._setSelectedItem(h);
}}break;
}this._scrollItemIntoView(h);
}}
if(g){event.stop();
this._fireChange(cg);
}},_selectAllItems:function(){var be=this.getSelectables();

for(var i=0,l=be.length;i<l;i++){this._addToSelection(be[i]);
}},_clearSelection:function(){var X=this.__is;

for(var Y in X){this._removeFromSelection(X[Y]);
}this.__is={};
},_selectItemRange:function(o,p,q){var t=this._getSelectableRange(o,p);
if(!q){var s=this.__is;
var u=this.__iN(t);

for(var r in s){if(!u[r]){this._removeFromSelection(s[r]);
}}}for(var i=0,l=t.length;i<l;i++){this._addToSelection(t[i]);
}},_deselectItemRange:function(bb,bc){var bd=this._getSelectableRange(bb,bc);

for(var i=0,l=bd.length;i<l;i++){this._removeFromSelection(bd[i]);
}},__iN:function(cB){var cD={};
var cC;

for(var i=0,l=cB.length;i<l;i++){cC=cB[i];
cD[this._selectableToHashCode(cC)]=cC;
}return cD;
},_getSelectedItem:function(){for(var bq in this.__is){return this.__is[bq];
}return null;
},_setSelectedItem:function(I){if(this._isSelectable(I)){var J=this.__is;
var K=this._selectableToHashCode(I);

if(!J[K]||qx.lang.Object.hasMinLength(J,2)){this._clearSelection();
this._addToSelection(I);
}}},_addToSelection:function(L){var M=this._selectableToHashCode(L);

if(!this.__is[M]&&this._isSelectable(L)){this.__is[M]=L;
this._styleSelectable(L,bT,true);
this.__iH=true;
}},_toggleInSelection:function(v){var w=this._selectableToHashCode(v);

if(!this.__is[w]){this.__is[w]=v;
this._styleSelectable(v,bT,true);
}else{delete this.__is[w];
this._styleSelectable(v,bT,false);
}this.__iH=true;
},_removeFromSelection:function(bk){var bl=this._selectableToHashCode(bk);

if(this.__is[bl]!=null){delete this.__is[bl];
this._styleSelectable(bk,bT,false);
this.__iH=true;
}},_replaceMultiSelection:function(bC){var bF=false;
var bI,bH;
var bD={};

for(var i=0,l=bC.length;i<l;i++){bI=bC[i];

if(this._isSelectable(bI)){bH=this._selectableToHashCode(bI);
bD[bH]=bI;
}}var bE=bI;
var bG=this.__is;

for(var bH in bG){if(bD[bH]){delete bD[bH];
}else{bI=bG[bH];
delete bG[bH];
this._styleSelectable(bI,bT,false);
bF=true;
}}for(var bH in bD){bI=bG[bH]=bD[bH];
this._styleSelectable(bI,bT,true);
bF=true;
}if(!bF){return false;
}this._scrollItemIntoView(bE);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__iH=true;
this._fireChange();
},_fireChange:function(cS){if(this.__iH){this.__iI=cS||null;
this.fireDataEvent(bW,this.getSelection());
delete this.__iH;
}}},destruct:function(){this._disposeObjects(ci);
this.__is=this.__iL=this.__iK=null;
this.__iJ=null;
}});
})();
(function(){var J="vertical",I="under",H="above",G="qx.ui.core.selection.Widget",F="left",E="right";
qx.Class.define(G,{extend:qx.ui.core.selection.Abstract,construct:function(C){arguments.callee.base.call(this);
this.__iO=C;
},members:{__iO:null,_isSelectable:function(r){return r.isEnabled()&&r.isVisible()&&r.getLayoutParent()===this.__iO;
},_selectableToHashCode:function(K){return K.$$hash;
},_styleSelectable:function(g,h,j){j?g.addState(h):g.removeState(h);
},_capture:function(){this.__iO.capture();
},_releaseCapture:function(){this.__iO.releaseCapture();
},_getWidget:function(){return this.__iO;
},_getLocation:function(){var s=this.__iO.getContentElement().getDomElement();
return s?qx.bom.element.Location.get(s):null;
},_getDimension:function(){return this.__iO.getInnerSize();
},_getSelectableLocationX:function(L){var M=L.getBounds();

if(M){return {left:M.left,right:M.left+M.width};
}},_getSelectableLocationY:function(N){var O=N.getBounds();

if(O){return {top:O.top,bottom:O.top+O.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(A,B){},_scrollItemIntoView:function(D){this.__iO.scrollChildIntoView(D);
},getSelectables:function(){var e=this.__iO.getChildren();
var f=[];
var d;

for(var i=0,l=e.length;i<l;i++){d=e[i];

if(d.isEnabled()&&d.isVisible()){f.push(d);
}}return f;
},_getSelectableRange:function(u,v){if(u===v){return [u];
}var z=this.__iO.getChildren();
var w=[];
var y=false;
var x;

for(var i=0,l=z.length;i<l;i++){x=z[i];

if(x===u||x===v){if(y){w.push(x);
break;
}else{y=true;
}}
if(y&&x.isEnabled()&&x.isVisible()){w.push(x);
}}return w;
},_getFirstSelectable:function(){var a=this.__iO.getChildren();

for(var i=0,l=a.length;i<l;i++){if(a[i].isEnabled()&&a[i].isVisible()){return a[i];
}}return null;
},_getLastSelectable:function(){var t=this.__iO.getChildren();

for(var i=t.length-1;i>0;i--){if(t[i].isEnabled()&&t[i].isVisible()){return t[i];
}}return null;
},_getRelatedSelectable:function(k,m){var p=this.__iO.getOrientation()===J;
var o=this.__iO.getChildren();
var n=o.indexOf(k);
var q;

if((p&&m===H)||(!p&&m===F)){for(var i=n-1;i>=0;i--){q=o[i];

if(q.isEnabled()&&q.isVisible()){return q;
}}}else if((p&&m===I)||(!p&&m===E)){for(var i=n+1;i<o.length;i++){q=o[i];

if(q.isEnabled()&&q.isVisible()){return q;
}}}return null;
},_getPage:function(b,c){if(c){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__iO=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.isVisible()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var r=this._getWidget();
return {left:r.getScrollX(),top:r.getScrollY()};
},_scrollBy:function(o,p){var q=this._getWidget();
q.scrollByX(o);
q.scrollByY(p);
},_getPage:function(b,c){var g=this.getSelectables();
var length=g.length;
var k=g.indexOf(b);
if(k===-1){throw new Error("Invalid lead item: "+b);
}var d=this._getWidget();
var m=d.getScrollY();
var innerHeight=d.getInnerSize().height;
var top,f,l;

if(c){var j=m;
var i=k;
while(1){for(;i>=0;i--){top=d.getItemTop(g[i]);
if(top<j){l=i+1;
break;
}}if(l==null){var n=this._getFirstSelectable();
return n==b?null:n;
}if(l>=k){j-=innerHeight+m-d.getItemBottom(b);
l=null;
continue;
}return g[l];
}}else{var h=innerHeight+m;
var i=k;
while(1){for(;i<length;i++){f=d.getItemBottom(g[i]);
if(f>h){l=i-1;
break;
}}if(l==null){var e=this._getLastSelectable();
return e==b?null:e;
}if(l<=k){h+=d.getItemTop(b)-m;
l=null;
continue;
}return g[l];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(p){var q=p.getBounds();

if(q){var top=this._getWidget().getItemTop(p);
return {top:top,bottom:top+q.height};
}},_isSelectable:function(v){return v instanceof qx.ui.tree.AbstractTreeItem&&v.isEnabled()&&v.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var g=this._getWidget();
var h=[];

if(g.getRoot()!=null){var f=g.getRoot().getItems(true,false,g.getHideRoot());

for(var i=0;i<f.length;i++){if(this._isSelectable(f[i])){h.push(f[i]);
}}}return h;
},_getSelectableRange:function(j,k){if(j===k){return [j];
}var l=this.getSelectables();
var m=l.indexOf(j);
var n=l.indexOf(k);

if(m<0||n<0){return [];
}
if(m<n){return l.slice(m,n+1);
}else{return l.slice(n,m+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var o=this.getSelectables();

if(o.length>0){return o[o.length-1];
}else{return null;
}},_getRelatedSelectable:function(r,s){var t=this._getWidget();
var u=null;

switch(s){case d:u=t.getPreviousSiblingOf(r,false);
break;
case b:u=t.getNextSiblingOf(r,false);
break;
case c:case e:break;
}
if(!u){return null;
}
if(this._isSelectable(u)){return u;
}else{return this._getRelatedSelectable(u,s);
}}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="__iP",c="_applyOpenMode",b="Space",a="Left",z="Enter",y="changeOpenMode",x="_applyRootOpenClose",w="changeSelection",v="qx.ui.tree.Tree",u="tree",t="_applyHideRoot",s="changeRoot",r="_applyRoot",q="keypress",o="none",p="pane",m="Right",n="qx.ui.tree.AbstractTreeItem";
qx.Class.define(v,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__iP=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__iP);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(w,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:c,event:y,themeable:true},root:{check:n,init:null,nullable:true,event:s,apply:r},hideRoot:{check:j,init:false,apply:t},rootOpenClose:{check:j,init:false,apply:x},appearance:{refine:true,init:u},focusable:{refine:true,init:true}},members:{__iP:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__iP;
},_applyRoot:function(A,B){var C=this.getChildrenContainer();

if(B){C.remove(B);

if(B.hasChildren()){C.remove(B.getChildrenContainer());
}}
if(A){C.add(A);

if(A.hasChildren()){C.add(A.getChildrenContainer());
}A.setVisibility(this.getHideRoot()?h:g);
A.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(Y,ba){var bb=this.getRoot();

if(!bb){return;
}bb.setVisibility(Y?h:g);
bb.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(D,E){var F=this.getRoot();

if(!F){return;
}F.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__iP;
},getNextSiblingOf:function(S,T,U){if((T!==false||S.isOpen())&&!(U==true)&&S.hasChildren()){return S.getChildren()[0];
}
while(S){var parent=S.getParent();

if(!parent){return null;
}var W=parent.getChildren();
var V=W.indexOf(S);

if(V>-1&&V<W.length-1){return W[V+1];
}S=parent;
}return null;
},getPreviousSiblingOf:function(L,M,N){var parent=L.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==L){return null;
}}}else{if(L==this.getRoot()){return null;
}}var Q=parent.getChildren();
var O=Q.indexOf(L);

if(O>0){var P=Q[O-1];

while((M!==false||P.isOpen())&&!(N==true)&&P.hasChildren()){var R=P.getChildren();
P=R[R.length-1];
}return P;
}else{return parent;
}},getItems:function(bc,bd){if(this.getRoot()!=null){return this.getRoot().getItems(bc,bd,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(I){while(I){if(I==this){return null;
}
if(I instanceof qx.ui.tree.AbstractTreeItem){return I;
}I=I.getLayoutParent();
}return null;
},_applyOpenMode:function(J,K){if(K==k){this.removeListener(k,this._onOpen,this);
}else if(K==l){this.removeListener(l,this._onOpen,this);
}
if(J==k){this.addListener(k,this._onOpen,this);
}else if(J==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var be=this.getTreeItem(e.getTarget());

if(!be||!be.isOpenable()){return;
}be.setOpen(!be.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var H=e.getData();
for(var i=0;i<H.length;i++){var G=H[i];
while(G.getParent()!=null){G=G.getParent();
G.setOpen(true);
}}},_onKeyPress:function(e){var X=this._getLeadItem();

if(X!==null){switch(e.getKeyIdentifier()){case a:if(X.isOpenable()&&X.isOpen()){X.setOpen(false);
}break;
case m:if(X.isOpenable()&&!X.isOpen()){X.setOpen(true);
}break;
case z:case b:if(X.isOpenable()){X.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var bc="open",bb="auto",ba="middle",Y="icon",X="label",W="changeOpen",V="excluded",U="visible",T="String",S="opened",bv="always",bu="qx.ui.tree.AbstractTreeItem",bt="__ki",bs="addItem",br="Boolean",bq="__kj",bp="Integer",bo="_applyIndent",bn="changeOpenSymbolMode",bm="_applyOpenSymbolMode",bj="resize",bk="",bh="removeItem",bi="abstract",bf="never",bg="_applyIcon",bd="_applyOpen",be="_applyLabel",bl="__km";
qx.Class.define(bu,{extend:qx.ui.core.Widget,type:bi,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__ki=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:br,init:false,event:W,apply:bd},openSymbolMode:{check:[bv,bf,bb],init:bb,event:bn,apply:bm},indent:{check:bp,init:19,apply:bo,themeable:true},parent:{check:bu,nullable:true},icon:{check:T,apply:bg,nullable:true,themeable:true},label:{check:T,apply:be,init:bk}},members:{__ki:null,__kj:null,__kk:null,__kl:null,__km:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(by){var bz;

switch(by){case X:bz=new qx.ui.basic.Label().set({alignY:ba,value:this.getLabel()});
break;
case Y:bz=new qx.ui.basic.Image().set({alignY:ba,source:this.getIcon()});
break;
case bc:bz=new qx.ui.tree.FolderOpenButton().set({alignY:ba});
bz.addListener(W,this._onChangeOpen,this);
bz.addListener(bj,this._updateIndent,this);
break;
}return bz||arguments.callee.base.call(this,by);
},getTree:function(){var G=this;

while(G.getParent()){G=G.getParent();
}var F=G.getLayoutParent()?G.getLayoutParent().getLayoutParent():0;

if(F&&F instanceof qx.ui.core.scroll.ScrollPane){return F.getLayoutParent();
}return null;
},addWidget:function(bL,bM){this._add(bL,bM);
},addSpacer:function(){if(!this.__km){this.__km=new qx.ui.core.Spacer();
}else{this._remove(this.__km);
}this._add(this.__km);
},addOpenButton:function(){this._add(this.getChildControl(bc));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bN=this.getChildControl(Y);

if(this.__kl){this._remove(bN);
}this._add(bN);
this.__kl=true;
},addLabel:function(w){var x=this.getChildControl(X);

if(this.__kk){this._remove(x);
}
if(w){this.setLabel(w);
}else{x.setValue(this.getLabel());
}this._add(x);
this.__kk=true;
},addState:function(O){arguments.callee.base.call(this,O);
var Q=this._getChildren();

for(var i=0,l=Q.length;i<l;i++){var P=Q[i];

if(P.addState){Q[i].addState(O);
}}},removeState:function(bI){arguments.callee.base.call(this,bI);
var bK=this._getChildren();

for(var i=0,l=bK.length;i<l;i++){var bJ=bK[i];

if(bJ.addState){bK[i].removeState(bI);
}}},_applyIcon:function(L,M){var N=this.getChildControl(Y,true);

if(N){N.setSource(L);
}},_applyLabel:function(bP,bQ){var bR=this.getChildControl(X,true);

if(bR){bR.setValue(bP);
}},_applyOpen:function(j,k){if(this.hasChildren()){this.getChildrenContainer().setVisibility(j?U:V);
}var open=this.getChildControl(bc,true);

if(open){open.setOpen(j);
}j?this.addState(S):this.removeState(S);
},isOpenable:function(){var m=this.getOpenSymbolMode();
return (m===bv||m===bb&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(bc,true);

if(!open){return false;
}var R=this.getTree();

if(!R.getRootOpenClose()){if(R.getHideRoot()){if(R.getRoot()==this.getParent()){return false;
}}else{if(R.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bA,bB){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var I=0;
var open=this.getChildControl(bc,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var H=open.getBounds();

if(H){I=H.width;
}else{return;
}}else{open.exclude();
}}
if(this.__km){this.__km.setWidth((this.getLevel()+1)*this.getIndent()-I);
}},_applyIndent:function(bw,bx){this._updateIndent();
},getLevel:function(){var bS=this.getTree();

if(!bS){return;
}var bT=this;
var bU=-1;

while(bT){bT=bT.getParent();
bU+=1;
}if(bS.getHideRoot()){bU-=1;
}
if(!bS.getRootOpenClose()){bU-=1;
}return bU;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__kj){this.__kj=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?U:V});
}return this.__kj;
},hasChildrenContainer:function(){return this.__kj;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ki;
},hasChildren:function(){return this.__ki?this.__ki.length>0:false;
},getItems:function(n,o,p){if(p!==false){var q=[];
}else{var q=[this];
}var t=this.hasChildren()&&(o!==false||this.isOpen());

if(t){var s=this.getChildren();

if(n===false){q=q.concat(s);
}else{for(var i=0,r=s.length;i<r;i++){q=q.concat(s[i].getItems(n,o,false));
}}}return q;
},recursiveAddToWidgetQueue:function(){var h=this.getItems(true,true,false);

for(var i=0,l=h.length;i<l;i++){qx.ui.core.queue.Widget.add(h[i]);
}},__kn:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(a){var b=this.getChildrenContainer();
var f=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var g=arguments[i];
var d=g.getParent();

if(d){d.remove(g);
}g.setParent(this);
var c=this.hasChildren();
b.add(g);

if(g.hasChildren()){b.add(g.getChildrenContainer());
}this.__ki.push(g);

if(!c){this.__kn();
}
if(f){g.recursiveAddToWidgetQueue();
f.fireNonBubblingEvent(bs,qx.event.type.Data,[g]);
}}
if(f){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bC,bD){{};

if(bD==this.__ki.length){this.add(bC);
return;
}var bH=bC.getParent();

if(bH){bH.remove(bC);
}var bF=this.getChildrenContainer();
bC.setParent(this);
var bG=this.hasChildren();
var bE=this.__ki[bD];
bF.addBefore(bC,bE);

if(bC.hasChildren()){bF.addAfter(bC.getChildrenContainer(),bC);
}qx.lang.Array.insertAt(this.__ki,bC,bD);

if(!bG){this.__kn();
}
if(this.getTree()){bC.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(u,v){{};
this.addAt(u,this.__ki.indexOf(v));
},addAfter:function(D,E){{};
this.addAt(D,this.__ki.indexOf(E)+1);
},addAtBegin:function(bO){this.addAt(bO,0);
},remove:function(y){for(var i=0,l=arguments.length;i<l;i++){var C=arguments[i];

if(this.__ki.indexOf(C)==-1){this.warn("Cannot remove treeitem '"+C+"'. It is not a child of this tree item.");
return;
}var z=this.getChildrenContainer();

if(C.hasChildrenContainer()){var B=C.getChildrenContainer();

if(z.getChildren().indexOf(B)>=0){z.remove(B);
}}qx.lang.Array.remove(this.__ki,C);
C.setParent(null);
z.remove(C);
}var A=this.getTree();

if(A){A.fireNonBubblingEvent(bh,qx.event.type.Data,[C]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(J){var K=this.__ki[J];

if(K){this.remove(K);
}},removeAll:function(){for(var i=this.__ki.length-1;i>=0;i--){this.remove(this.__ki[i]);
}}},destruct:function(){this._disposeArray(bt);
this._disposeObjects(bl,bq);
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
(function(){var z="key",y="classname",x="execute",w="changeValue",v="set",u="qx.version",t="Group by inheritance",s="inspector/images/icons/api.png",r="qx.ui.core.Widget",q="_filter",bc="_propertyList",bb="_setPropertyToDefaultButton",ba="inspector/images/icons/highlight.png",Y="http://demo.qooxdoo.org/",X="icon/22/actions/view-refresh.png",W="#",V="_highlightCurrentPropertyButton",U="View",T="get",S="_reloadButton",G="/apiviewer/",H="_setNullButton",E="qx.ui.core.Parent",F="Property",C="inspector/images/icons/setnull.png",D="inspector/images/icons/goto.png",A="qx.ui.core.ClientDocument",B="_menu",I="Group by category",J="Show Inherited Porperties",M="_groupButton",L="~",O="_gotoSelectedPropertyButton",N="_inheritedButton",Q="current",P="inspector/images/icons/setinit.png",K=" (Loading...)",R="inspector.property.PropertyWindow";
qx.Class.define(R,{extend:inspector.components.AbstractWindow,implement:inspector.property.IPropertyListController,construct:function(){arguments.callee.base.call(this,F);
this._filter=new inspector.property.Filter();
this._addToolbarButtons();
this._createMainElement();
},statics:{RELOAD_BUTTON_TOOLTIP_TEXT:"Reload the window.",SHOW_API_BUTTON_TOOLTIP_TEXT:"Show the API of the selected object or property.",SET_NULL_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to null.",SET_DEFAULT_BUTTON_TOOLTIP_TEXT:"Set the currently selected property to its initial value.",HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Highlight the currently selected property.",GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT:"Go to the currently selected property.",PROPERTY_CAPTION_TITLE:"Properties"},members:{_propertyList:null,_propertyListFull:null,_propertyListHtmlTable:null,_reloadButton:null,_reloadToolTip:null,_apiButtonToolTip:null,_setNullButton:null,_setNullTooltip:null,_setPropertyToDefaultButton:null,_setPropertyToDefaultTooltip:null,_highlightCurrentPropertyButton:null,_highlightCurrentPropertyTooltip:null,_gotoSelectedPropertyButton:null,_gotoSelectedPropertyTooltip:null,_menu:null,_currentlySelectedProperty:null,_qxObject:null,_showInherited:false,_reloadTimer:null,_filter:null,setInitSizeAndPosition:function(){var c=qx.bom.Viewport.getWidth()-this.getWidth();
var b=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(c,30+2*b);
this.setHeight(b);
},select:function(g){if(this._qxObject==g){return;
}this._qxObject=g;
this.setCaption(arguments.callee.self.PROPERTY_CAPTION_TITLE+K);
var self=this;
window.setTimeout(function(){self._propertyList.build();
if(self._currentlySelectedProperty!=null){var l=self._currentlySelectedProperty.getUserData(z);
var k=self._currentlySelectedProperty.getUserData(y);
if(self._propertyList.containsProperty(l,k)){self._switchPropertyButtons();
}else{self._currentlySelectedProperty=null;
self._setNullButton.setEnabled(false);
self._setPropertyToDefaultButton.setEnabled(false);
self._highlightCurrentPropertyButton.setEnabled(false);
self._gotoSelectedPropertyButton.setEnabled(false);
}}self.setCaption(inspector.property.PropertyWindow.PROPERTY_CAPTION_TITLE);
},0);
},getSelection:function(){return this._qxObject;
},getQxObject:function(){return this._qxObject;
},setSelectedProperty:function(bo){this._currentlySelectedProperty=bo;
this._switchPropertyButtons();
},getSelectedProperty:function(){return this._currentlySelectedProperty;
},getInheritedStatus:function(){return this._showInherited;
},getGroupStatus:function(){return this._groupButton.getValue();
},gotoSelectedWidget:function(){this._gotoSelectedPropertyButtonEventListener();
},getFilter:function(){return this._filter;
},_createMainElement:function(){this._propertyList=new inspector.property.PropertyList(this);
var m=new qx.ui.container.Scroll();
this.add(m,{flex:1});
m.add(this._propertyList);
},_addToolbarButtons:function(){this._createMenu();
var f=new qx.ui.toolbar.MenuButton(U,null,this._menu);
this._toolbar.add(f);
this._toolbar.addSeparator();
this._reloadButton=new qx.ui.toolbar.Button(null,X);
this._reloadButton.setToolTipText(arguments.callee.self.RELOAD_BUTTON_TOOLTIP_TEXT);
this._reloadButton.addListener(x,function(){this._propertyList.build();
},this);
this._toolbar.add(this._reloadButton);
this._toolbar.addSeparator();
var d=new qx.ui.toolbar.Button(null,s);
d.setToolTipText(arguments.callee.self.SHOW_API_BUTTON_TOOLTIP_TEXT);
d.addListener(x,this._onOpenApiWindow,this);
this._toolbar.add(d);
this._toolbar.addSpacer();
this._setNullButton=new qx.ui.toolbar.Button(null,C);
this._setNullButton.setToolTipText(arguments.callee.self.SET_NULL_BUTTON_TOOLTIP_TEXT);
this._setNullButton.addListener(x,this._setNullButtonEventListener,this);
this._setNullButton.setEnabled(false);
this._toolbar.add(this._setNullButton);
this._setPropertyToDefaultButton=new qx.ui.toolbar.Button(null,P);
this._setPropertyToDefaultButton.setToolTipText(arguments.callee.self.SET_DEFAULT_BUTTON_TOOLTIP_TEXT);
this._setPropertyToDefaultButton.addListener(x,this._setPropertyToDefaultButtonEventListener,this);
this._setPropertyToDefaultButton.setEnabled(false);
this._toolbar.add(this._setPropertyToDefaultButton);
this._highlightCurrentPropertyButton=new qx.ui.toolbar.Button(null,ba);
this._highlightCurrentPropertyButton.setToolTipText(arguments.callee.self.HIGHLIGHT_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._highlightCurrentPropertyButton.addListener(x,this._highlightCurrentPropertyButtonEventListener,this);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton=new qx.ui.toolbar.Button(null,D);
this._gotoSelectedPropertyButton.setToolTipText(arguments.callee.self.GOTO_SELECTED_PROPERTY_BUTTON_TOOLTIP_TEXT);
this._gotoSelectedPropertyButton.addListener(x,this._gotoSelectedPropertyButtonEventListener,this);
this._gotoSelectedPropertyButton.setEnabled(false);
},_createMenu:function(){this._menu=new qx.ui.menu.Menu();
this._inheritedButton=new qx.ui.menu.CheckBox(J);
this._inheritedButton.addListener(w,this._switchInheritedStatus,this);
this._inheritedButton.setValue(true);
this._menu.add(this._inheritedButton);
this._menu.addSeparator();
var a=new qx.ui.menu.RadioButton(t);
a.addListener(w,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(true);
},this);
a.setValue(true);
this._menu.add(a);
this._groupButton=new qx.ui.menu.RadioButton(I);
this._groupButton.addListener(w,function(e){if(this._qxObject!=null){this._propertyList.build();
}this._inheritedButton.setEnabled(false);
},this);
this._menu.add(this._groupButton);
new qx.ui.form.RadioGroup(a,this._groupButton);
},_switchPropertyButtons:function(){if(this._currentlySelectedProperty==null){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var br=this._currentlySelectedProperty.getUserData(y);
var bs=this._currentlySelectedProperty.getUserData(z);
var bp=qx.core.Init.getApplication().getIframeWindowObject();
var bu=bp.qx.Class.getByName(br).$$properties;
var bt=bu[bs];
if(bt.nullable){this._setNullButton.setEnabled(true);
}else{this._setNullButton.setEnabled(false);
}if(bt.init){this._setPropertyToDefaultButton.setEnabled(true);
}else{this._setPropertyToDefaultButton.setEnabled(false);
}if(bs!=undefined){try{var bv=T+qx.lang.String.firstUp(bs);
if(this._qxObject[bv]==undefined){this._setNullButton.setEnabled(false);
this._setPropertyToDefaultButton.setEnabled(false);
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
return ;
}var bq=this._qxObject[bv].call(this._qxObject);
if((bt.check==r||bt.check==E)&&(this._qxObject.classname!=A)&&(bq!=null)){this._highlightCurrentPropertyButton.setEnabled(true);
this._gotoSelectedPropertyButton.setEnabled(true);
}else{this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}catch(j){alert("Error during reading the selected Property: "+j);
this._currentlySelectedProperty.setBackgroundColor(null);
this._currentlySelectedProperty=null;
this._highlightCurrentPropertyButton.setEnabled(false);
this._gotoSelectedPropertyButton.setEnabled(false);
}}},_onOpenApiWindow:function(){if(this._qxObject!=null){if(this._currentlySelectedProperty!=null){var h=this._currentlySelectedProperty.getUserData(y);
var i=this._currentlySelectedProperty.getUserData(z);
this._openApiWindow(h,i);
}else{this._openApiWindow(this._qxObject.classname);
}}else{this._openApiWindow();
}},_openApiWindow:function(bj,bk){var bl=qx.core.Init.getApplication()._loadedWindow.qx.core.Setting.get(u);
var bm=Y+(bl||Q)+G;

if(bj!=null){bm+=W+bj;
if(bk!=null){bm+=L+bk;
}}var bn=window.open(bm);
bn.focus();
},_setNullButtonEventListener:function(){var n=this._currentlySelectedProperty.getUserData(y);
var p=this._currentlySelectedProperty.getUserData(z);
var o=v+qx.lang.String.firstUp(p);
try{this._qxObject[o].call(this._qxObject,null);
var n=this._currentlySelectedProperty.getUserData(y);
var p=this._currentlySelectedProperty.getUserData(z);
this._propertyList.update(p,n);
this._switchPropertyButtons();
}catch(e){alert(e);
}},_setPropertyToDefaultButtonEventListener:function(){var be=this._currentlySelectedProperty.getUserData(y);
var bf=this._currentlySelectedProperty.getUserData(z);
var bd=qx.core.Init.getApplication().getIframeWindowObject();
var bi=bd.qx.Class.getByName(be).$$properties;
var bh=bi[bf];
var bg=v+qx.lang.String.firstUp(bf);
try{this._qxObject[bg].call(this._qxObject,bh.init);
var be=this._currentlySelectedProperty.getUserData(y);
var bf=this._currentlySelectedProperty.getUserData(z);
this._propertyList.update(bf,be);
}catch(e){alert(e);
}},_highlightCurrentPropertyButtonEventListener:function(){},_gotoSelectedPropertyButtonEventListener:function(){},_switchInheritedStatus:function(e){this._showInherited=e.getCurrentTarget().getValue();

if(this._propertyList){this._propertyList.switchInheritedStatus(this._showInherited);
}}},destruct:function(){this._qxObject=null;
this._disposeObjects(q,B,N,M,S,H,bb,V,O,bc);
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
},members:{_categories:null,_properties:null,_classnames:null,_tests:null,sortIn:function(U,V,W){for(var i=0;i<this._tests.length;i++){var X=new RegExp(this._tests[i][0],E);
if(X.test(U)){var Y=this._categories[this._tests[i][1]];
this._properties[Y][U]=V;
this._classnames[Y][U]=W;
return ;
}}this._properties[this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]][U]=V;
this._classnames[this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]][U]=W;
},getResult:function(){var ba=[];

for(var name in this._categories){ba[this._categories[name]]=name;
}return {names:ba,props:this._properties,classes:this._classnames};
},empty:function(){this.__Oe();
},_createCategories:function(){this._categories=[];
var i=1;

for(var bb=0;bb<this._tests.length;bb++){if(this._categories[this._tests[bb][1]]==undefined){this._categories[this._tests[bb][1]]=i;
i++;
}}this._categories[arguments.callee.self.DEFAULT_CATEGORY_NAME]=i;
this.__Oe();
},__Oe:function(){this._properties=[];
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
(function(){var c="abstract",b="qx.core.Object",a="inspector.property.AbstractPropertyList";
qx.Class.define(a,{extend:qx.ui.container.Composite,type:c,construct:function(x){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.VBox(8));
this._controller=x;
},members:{_controller:null,_filter:null,build:function(){throw new Error("Abstract method call (build) in 'PropertyList'!");
},update:function(v,w){throw new Error("Abstract method call (update) in 'PropertyList'!");
},getComponents:function(){throw new Error("Abstract method call (getComponents) in 'PropertyList'!");
},containsProperty:function(t,u){throw new Error("Abstract method call (containsProperty) in 'PropertyList'!");
},switchInheritedStatus:function(){throw new Error("Abstract method call (switchInheritedStatus) in 'PropertyList'!");
},recalculateLayout:function(){throw new Error("Abstract method call (recalculateLayout) in 'PropertyList'!");
},_getDataInherited:function(n){var r=n;
var o=qx.core.Init.getApplication().getIframeWindowObject();
var s=[];
var q=[];
var p=[];
for(var i=1;;i++){s[i]=o.qx.Class.getByName(r.classname).$$properties;
p[i]=r.classname;
q[i]=[];
for(var j in s[i]){q[i][j]=r.classname;
}if(o.qx.Class.getByName(b)==r){break;
}r=o.qx.Class.getByName(r.classname).superclass;
}return {names:p,props:s,classes:q};
},_getDataGrouped:function(d){var k=this._getDataInherited(d);
var h=k.props;
var g=this._controller.getFilter();
g.empty();
for(var e=0;e<h.length;e++){var l=k.names[e];

for(var f in h[e]){g.sortIn(f,h[e][f],l);
}}return g.getResult();
},_getData:function(m){if(this._controller.getGroupStatus()){return this._getDataGrouped(m);
}else{return this._getDataInherited(m);
}}},destruct:function(){this._controller=this._filter=null;
}});
})();
(function(){var G=".",F="",E="key",D="classname",C="inspector/images/shell/errorIcon.png",B="click",A="visible",z="inherited",y="set",w="name",bH="row",bG="changeValue",bF="qx.ui.basic.Label",bE="qx.ui.core.Widget",bD="activate",bC="excluded",bB="inspector/images/close.png",bA="Integer",bz="inspector/images/null.png",by="middle",N="get",O="getActiveWindow",L="qx.ui.container.Composite",M="qx.event.type.Focus",J="Number",K="NonEmptyString",H="blur",I="mousedown",T="Boolean",U="icon/16/actions/go-next.png",be="#FFFFFF",bb="inspector.property.PropertyList",bm="qx.ui.form.TextField",bh="solid",bu="_arrow",br="execute",W="Enter",bx="Double",bw="inspector/images/open.png",bv="#969696",V="<u>",Y="pointer",ba=":",bd="Label",bf="String",bi="hidden",bo="<b>",bt="]</u>",P="qx.ui.form.CheckBox",Q="</b>",X=" objects",bl="Float",bk="cursor",bj="qx.ui.form.ComboBox",bq="keypress",bp="inherit",bg="Color",bn=" [",v="Font",bs="qx.event.type.KeySequence",R="white",S="left",bc="Choose Color";
qx.Class.define(bb,{extend:inspector.property.AbstractPropertyList,construct:function(cu){arguments.callee.base.call(this,cu);
this._propertyRows={};
this._comboBoxPopups=[];
this._createColorPopup();
var cv=new qx.ui.basic.Image(U);
cv.setPaddingLeft(8);
this._arrow={arrow:cv,container:null,row:null};
},members:{_propertyRows:null,_comboBoxPopups:null,_colorPopup:null,_colorFields:null,_currentColorProperty:null,_arrow:null,build:function(){if(this._controller.getQxObject()!=null){this._reloadPropertyListFull();
}},update:function(s,t){this._setPropertyValueFull(s,t);
},switchInheritedStatus:function(){var dc=this.getChildren();

for(var i=0;i<dc.length;i++){if(dc[i].getUserData(z)){if(this._controller.getInheritedStatus()){dc[i].setVisibility(A);
}else{dc[i].setVisibility(bC);
}}}},containsProperty:function(cO,cP){return this._propertyRows[cP+G+cO]==null?false:true;
},_reloadPropertyListFull:function(){var ch=false;
var ck=true;
var cp=this._getData(this._controller.getQxObject());
var ci=cp.names;
var cq=cp.props;
var cj=cp.classes;
if(!this._controller.getGroupStatus()){this._removeUnnecessaryClasses(ci);
}for(var i=cq.length-1;i>0;i--){if(!this._controller.getGroupStatus()){var cm=this.getChildren();
if(!ch&&cm.length>0){var x=cm.length-1-2*(cq.length-i-1);
if(x>0){var cs=cm[x].getUserData(w);
if(cs!=ci[i]){var cn=ci[i+1];
ch=true;
}}else{ch=true;
ck=false;
}}else{ch=true;
ck=false;
}}else{ch=true;
if(ck){this._clearList();
ck=false;
}}if(ch){if(ck){this._removeOld(cn);
ck=false;
}var cf=new qx.ui.basic.Atom(bo+ci[i]+Q,bB);
cf.setUserData(w,ci[i]);
cf.setRich(true);
this.addAt(cf,0);
var cd=new qx.ui.container.Composite(new qx.ui.layout.Grid(6,6));
cd.getLayout().setColumnWidth(0,25);
cd.setUserData(w,ci[i]);
if(!this._controller.getGroupStatus()){if(i==1){cd.setUserData(z,false);
cf.setUserData(z,false);
}else{cd.setUserData(z,true);
cf.setUserData(z,true);
}}cf.addListener(B,function(e){if(this.isVisible()){this.setVisibility(bC);
e.getTarget().setIcon(bw);
}else{this.setVisibility(A);
e.getTarget().setIcon(bB);
}},cd);
this.addAfter(cd,cf);
var co=0;

for(var cl in cq[i]){if(cq[i][cl].group==null){var ce=new qx.ui.basic.Label(cl+ba);
ce.setUserData(D,cj[i][cl]);
ce.setUserData(E,cl);
ce.setUserData(bH,co);
cd.add(ce,{row:co,column:1});
var cr=null;

try{cr=this._getPropertyWidgetFull(cq[i][cl],cl,cj[i][cl]);
}catch(ct){cr=new qx.ui.basic.Label(F);
}cr.setUserData(D,cj[i][cl]);
cr.setUserData(E,cl);
cr.setUserData(bH,co);
cd.add(cr,{row:co,column:2});
var cg=new qx.ui.basic.Image(bz);
cg.setUserData(D,cj[i][cl]);
cg.setUserData(E,cl);
cg.setUserData(bH,co);
cd.add(cg,{row:co,column:3});
this._propertyRows[cj[i][cl]+G+cl]={container:cd,row:co};
cd.getLayout().setRowAlign(co,S,by);
cd.getLayout().setRowMinHeight(co,20);
ce.addListener(B,this.__Of,this);
cr.addListener(B,this.__Of,this);
cr.addListener(bD,this.__Of,this);
cg.addListener(B,this.__Of,this);
co++;
}}}}this.switchInheritedStatus();
this._refillPropertyListFull();
},_removeUnnecessaryClasses:function(bI){for(;(bI.length-1)*2<this.getChildren().length;){var bL=this.getChildren()[0];
this.removeAt(0);
bL.dispose();
var bK=this.getChildren()[0].getChildren();
for(var bM=0;bM<bK.length;bM++){if(bK[bM].classname==bF){var bJ=bK[bM].getUserData(D)+G+bK[bM].getUserData(E);
delete this._propertyRows[bJ];
}}this.removeAt(0);
}},_removeOld:function(cQ){if(cQ==null){this._clearList();
return;
}while(true){var cV=this.getChildren()[0];
var cU=cV.getUserData(w);
if(cU==cQ){break;
}else{if(cV.classname==L){var cT=cV.getChildren();
for(var cR=0;cR<cT.length;cR++){if(cT[cR].classname==bF){var cS=cT[cR].getUserData(D)+G+cT[cR].getUserData(E);
delete this._propertyRows[cS];
}}}this.removeAt(0);
}}},_clearList:function(){for(var u in this._porpertyColumns){delete this._porpertyColumns[u];
}this.removeAll();
},_getPropertyWidgetFull:function(cx,cy,cz){var cM=N+qx.lang.String.firstUp(cy);

try{if(cM===O){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var cE=this._controller.getQxObject()[cM]();
}}catch(bS){return new qx.ui.basic.Label();
}if(cx.check!==null){if(cx.check==T){var cB=new qx.ui.form.CheckBox();
var cG=function(e){var bR=this._controller.getQxObject()[cM].call(this._controller.getQxObject());

if(e.getData()!=bR){var bQ=y+qx.lang.String.firstUp(cy);
try{this._controller.getQxObject()[bQ].call(this._controller.getQxObject(),e.getData());
this._setPropertyValueFull(cy,cz,true);
}catch(bT){alert(bT+" ["+bQ+"]");
cB.setValue(!bR);
}}};
cB.addListener(bG,cG,this);
return cB;
}else if(cx.check instanceof Array){var cA=new qx.ui.form.ComboBox();
var cH=cx.check;
for(var i=0;i<cH.length;i++){var cF=new qx.ui.form.ListItem(cH[i]);
cA.add(cF);
}cA.addListener(bG,function(e){var cX=null;
if(e.getTarget().getValue()!=null){var cX=e.getTarget().getValue();
}if(cX!=cE){var cW=y+qx.lang.String.firstUp(cy);
try{this._controller.getQxObject()[cW].call(this._controller.getQxObject(),cX);
cE=this._controller.getQxObject()[cM].call(this._controller.getQxObject());
this._setPropertyValueFull(cy,cz,true);
cE=this._controller.getQxObject()[cM].call(this._controller.getQxObject());
}catch(db){alert(db);
}}},this);
return cA;
}else if(cx.check==bA||cx.check==bf||cx.check==K||cx.check==bd||cx.check==bl||cx.check==bx||cx.check==J){var cK=new qx.ui.form.TextField();
var cI=function(e){if(e.classname==bs){if(e.getKeyIdentifier()!=W){return;
}}else if(e.classname==M){}else{return ;
}var q=y+qx.lang.String.firstUp(cy);
try{var r=cK.getValue();
cE=this._controller.getQxObject()[cM].call(this._controller.getQxObject());
if(e.classname==M){if(r==F&&cE==null){return;
}}if(cx.check==bA||cx.check==J){r=parseFloat(r);
}this._controller.getQxObject()[q].call(this._controller.getQxObject(),r);
this._setPropertyValueFull(cy,cz,true);
cE=this._controller.getQxObject()[cM].call(this._controller.getQxObject());
}catch(cw){alert(cw);
cK.setValue(cE+F);
}};
cK.addListener(H,cI,this);
cK.addListener(bq,cI,this);
return cK;
}else if(cx.check==bg){var cC=new qx.ui.container.Composite(new qx.ui.layout.HBox(6));
cC.getLayout().setAlignY(by);
var cJ=new qx.ui.core.Widget();
cJ.setDecorator(new qx.ui.decoration.Single(1,bh,bv));
cJ.setBackgroundColor(R);
cJ.setHeight(20);
cJ.setWidth(20);
cJ.setAllowGrowX(false);
cJ.setAllowGrowY(false);
cC.add(cJ);
this._colorFields[cz+G+cy]=cJ;
var cD=new qx.ui.form.Button(bc);
cC.add(cD);
cD.addListener(I,function(e){this._colorPopup.setValue(cJ.getBackgroundColor());
this._currentColorProperty=cz+G+cy;
this._colorPopup.placeToMouse(e);
this._colorPopup.show();
},this);
cD.addListener(br,this.__Of,this);
cD.addListener(bD,this.__Of,this);
return cC;
}else if(cx.ckeck==bE){var cN=new qx.ui.basic.Label();
return cN;
}else{var cL=new qx.ui.basic.Label();
return cL;
}}else{var cL=new qx.ui.basic.Label();
return cL;
}},_refillPropertyListFull:function(){for(var bW in this._propertyRows){try{var bX=bW.substr(bW.lastIndexOf(G)+1);
var bV=bW.substring(0,bW.lastIndexOf(G));
this._setPropertyValueFull(bX,bV);
}catch(bU){}}},_setPropertyValueFull:function(b,c,d){var h=qx.core.Init.getApplication().getIframeWindowObject();
var g=this._propertyRows[c+G+b].container.getLayout();
var p=this._propertyRows[c+G+b].row;

if(!d&&g.getCellWidget(p,0)){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}var o=N+qx.lang.String.firstUp(b);

try{if(o===O){throw new Error("Property activeWindow of an instance of qx.ui.root.Abstract is not (yet) ready!");
}else{var l=this._controller.getQxObject()[o]();
}}catch(bN){g.getCellWidget(p,3).setVisibility(A);
g.getCellWidget(p,3).setSource(C);
var j=g.getCellWidget(p,3).getToolTip();

if(!j){j=new qx.ui.tooltip.ToolTip(bN+F,C);
}else{j.setLabel(bN+F);
j.setIcon(C);
}g.getCellWidget(p,3).setToolTip(j);
return;
}if(l==null){g.getCellWidget(p,3).setVisibility(A);
g.getCellWidget(p,3).setSource(bz);
g.getCellWidget(p,3).resetToolTip();
}else{g.getCellWidget(p,3).setVisibility(bi);
}
try{var parent=this._controller.getQxObject();

while(l==bp){parent=parent.getLayoutParent();
l=parent[o].call(parent);
}}catch(bY){g.getCellWidget(p,3).setVisibility(A);
g.getCellWidget(p,3).setSource(C);
var j=g.getCellWidget(p,3).getToolTip();

if(!j){j=new qx.ui.tooltip.ToolTip(bY+F,C);
}else{j.setLabel(bY+F);
j.setIcon(C);
}g.getCellWidget(p,3).setToolTip(j);
return;
}if(g.getCellWidget(p,2).classname==P){if(l==null){g.getCellWidget(p,2).setValue(false);
}else{g.getCellWidget(p,2).setValue(l);
}}else if(g.getCellWidget(p,2).classname==bF){if(l!=null){var n=h.qx.Class.getByName(c).$$properties;
var m=n[b];
if(l instanceof Array){g.getCellWidget(p,2).setValue(l.length+X);
}else if((m.check==bE)&&(this._controller.getQxObject() instanceof qx.application.AbstractGui)){g.getCellWidget(p,2).setValue(V+l.classname+bn+l.toHashCode()+bt);
g.getCellWidget(p,2).setStyleProperty(bk,Y);
if(g.getCellWidget(p,2).hasListeners(B)===undefined){g.getCellWidget(p,2).addListener(B,function(e){if(this._controller.getSelectedProperty()!=null){this._controller.getSelectedProperty().setBackgroundColor(null);
}this._controller.setSelectedProperty(g.getCellWidget(p,1));
this._controller.gotoSelectedWidget();
},this);
}}else if(m.check==v){g.getCellWidget(p,2).setFont(l);
g.getCellWidget(p,2).setValue(l+F);
}else{g.getCellWidget(p,2).setValue(l+F);
}}else{g.getCellWidget(p,2).setValue(F);
}}else if(g.getCellWidget(p,2).classname==bm){if(l!=null){g.getCellWidget(p,2).setValue(l+F);
}else{g.getCellWidget(p,2).setValue(F);
}}else if(g.getCellWidget(p,2).classname==bj){var f=g.getCellWidget(p,2);
if(l==null){f.resetSelection();
}else{for(var i=0;i<f.getChildren().length;i++){if(l==f.getChildren()[i].getLabel()){if(l){f.setValue(l);
}}}}}else if(g.getCellWidget(p,2).classname==L){try{var k=h.qx.theme.manager.Color.getInstance().resolve(l);
g.getCellWidget(p,2).getChildren()[0].setBackgroundColor(k);
}catch(a){g.getCellWidget(p,2).getChildren()[0].setBackgroundColor(be);
}}},_createColorPopup:function(){this._colorPopup=new qx.ui.control.ColorPopup();
var da=qx.core.Init.getApplication();
da.getRoot().add(this._colorPopup);
this._colorFields={};
this._colorPopup.addListener(bG,function(e){if(this._currentColorProperty!=null){var cb=this._currentColorProperty.substr(this._currentColorProperty.lastIndexOf(G)+1);
var ca=this._currentColorProperty.substring(0,this._currentColorProperty.lastIndexOf(G));
var cc=y+qx.lang.String.firstUp(cb);
try{this._controller.getQxObject()[cc].call(this._controller.getQxObject(),e.getData());
this._colorFields[this._currentColorProperty].setBackgroundColor(e.getData());
this._setPropertyValueFull(cb,ca,true);
}catch(cY){alert(cY);
}this._currentColorProperty=null;
}},this);
},__Of:function(e){var bO=e.getTarget();

while(bO.getUserData(E)==null){bO=bO.getLayoutParent();
}var bP=bO.getUserData(D)+G+bO.getUserData(E);
if(this._arrow.container!=null){this._arrow.container.remove(this._arrow.arrow);
this._arrow.container=null;
this._arrow.row=null;
}if(this._propertyRows[bP]!=undefined){this._arrow.container=this._propertyRows[bP].container;
this._arrow.row=bO.getUserData(bH);
this._arrow.container.add(this._arrow.arrow,{row:this._arrow.row,column:0});
this._controller.setSelectedProperty(bO);
}else{this._controller.setSelectedProperty(null);
}}},destruct:function(){this._propertyRows=this._comboBoxPopups=this._colorPopup=this._colorFields=this._oldPropertyListPool=null;
this._disposeObjects(bu);
}});
})();
(function(){var b="checkbox",a="qx.ui.form.CheckBox";
qx.Class.define(a,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(c){{};
arguments.callee.base.call(this,c);
this.setValue(false);
},properties:{appearance:{refine:true,init:b},allowGrowX:{refine:true,init:false}}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="qx.ui.form.AbstractSelectBox",l="changeSelection",i="PageUp",c="_applyMaxListHeight",b="PageDown",h="mouseup",g="Escape",j="changeVisibility",a="one",k="middle",d="mousedown";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){arguments.callee.base.call(this);
var M=new qx.ui.layout.HBox();
this._setLayout(M);
M.setAlignY(k);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var L=qx.core.Init.getApplication().getRoot();
L.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:c,nullable:true,init:200},format:{check:q,init:function(K){return this._defaultFormat(K);
},nullable:true}},members:{_createChildControlImpl:function(I){var J;

switch(I){case u:J=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:a,quickSelection:true});
J.addListener(l,this._onListChangeSelection,this);
J.addListener(d,this._onListMouseDown,this);
break;
case v:J=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
J.setAutoHide(false);
J.setKeepActive(true);
J.addListener(h,this.close,this);
J.add(this.getChildControl(u));
J.addListener(j,this._onPopupChangeVisibility,this);
break;
}return J||arguments.callee.base.call(this,I);
},_applyMaxListHeight:function(y,z){this.getChildControl(u).setMaxHeight(y);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var C=this.getChildControl(v);
C.placeToWidget(this,true);
C.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var D=this.getChildControl(v).isVisible();

if(D){this.close();
}else{this.open();
}},_defaultFormat:function(F){var G=F?F.getLabel():t;
var H=F?F.getRich():false;

if(H){G=G.replace(/<[^>]+?>/g,t);
G=qx.bom.String.unescape(G);
}return G;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var A=e.getKeyIdentifier();
var B=this.getChildControl(v);
if(B.isHidden()&&(A==b||A==i)){e.stopPropagation();
}else if(!B.isHidden()&&A==g){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var x=e.getTarget();
var w=this.getChildControl(v);

if(qx.ui.core.Widget.contains(w,x)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var E=qx.core.Init.getApplication().getRoot();

if(E){E.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var N="textfield",M="button",L="list",K="selected",J="focusout",I="inner",H="changeValue",G="popup",F="focusin",E="combobox",x="click",D="blur",A="Enter",w="quick",v="_applyPlaceholder",z="qx.ui.form.ComboBox",y="single",B="Down",u="String",C="qx.event.type.Data";
qx.Class.define(z,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.form.IStringForm],construct:function(){arguments.callee.base.call(this);
var O=this._createChildControl(N);
this._createChildControl(M);
this.addListener(x,this._onClick);
this.addListener(F,function(e){O.fireNonBubblingEvent(F,qx.event.type.Focus);
},this);
this.addListener(J,function(e){O.fireNonBubblingEvent(J,qx.event.type.Focus);
},this);
},properties:{appearance:{refine:true,init:E},placeholder:{check:u,nullable:true,apply:v}},events:{"changeValue":C},members:{__vX:null,__vY:null,_applyPlaceholder:function(q,r){this.getChildControl(N).setPlaceholder(q);
},_createChildControlImpl:function(a){var b;

switch(a){case N:b=new qx.ui.form.TextField();
b.setFocusable(false);
b.addState(I);
b.addListener(H,this._onTextFieldChangeValue,this);
b.addListener(D,this.close,this);
this._add(b,{flex:1});
break;
case M:b=new qx.ui.form.Button();
b.setFocusable(false);
b.setKeepActive(true);
b.addState(I);
this._add(b);
break;
case L:b=arguments.callee.base.call(this,a);
b.setSelectionMode(y);
break;
}return b||arguments.callee.base.call(this,a);
},_forwardStates:{focused:true},tabFocus:function(){var t=this.getChildControl(N);
t.getFocusElement().focus();
t.selectAllText();
},setValue:function(c){var d=this.getChildControl(N);

if(d.getValue()==c){return;
}d.setValue(c);
},getValue:function(){return this.getChildControl(N).getValue();
},resetValue:function(){this.getChildControl(N).setValue(null);
},_onKeyPress:function(e){var g=this.getChildControl(G);
var f=e.getKeyIdentifier();

if(f==B&&e.isAltPressed()){this.getChildControl(M).addState(K);
this.toggle();
e.stopPropagation();
}else if(f==A){if(g.isVisible()){this.close();
e.stop();
}}else if(g.isVisible()){arguments.callee.base.call(this,e);
}},_onClick:function(e){var S=e.getTarget();

if(S==this.getChildControl(M)){this.toggle();
}else{this.close();
}},_onListMouseDown:function(e){if(this.__vX){var s=this.__vX.getLabel();

if(this.getFormat()!=null){s=this.getFormat().call(this,this.__vX);
}if(s&&s.translate){s=s.translate();
}this.setValue(s);
this.__vX=null;
}},_onListChangeSelection:function(e){var h=e.getData();

if(h.length>0){var i=this.getChildControl(L);

if(i.getSelectionContext()==w){this.__vX=h[0];
}else{var j=h[0].getLabel();

if(this.getFormat()!=null){j=this.getFormat().call(this,h[0]);
}if(j&&j.translate){j=j.translate();
}this.setValue(j);
this.__vX=null;
}}},_onPopupChangeVisibility:function(e){var l=this.getChildControl(G);

if(l.isVisible()){var m=this.getChildControl(L);
var n=this.getValue();
var k=null;

if(n){k=m.findItem(n);
}
if(k){m.setSelection([k]);
}else{m.resetSelection();
}}else{this.tabFocus();
}this.getChildControl(M).removeState(K);
},_onTextFieldChangeValue:function(e){var R=e.getData();
var Q=this.getChildControl(L);

if(R!=null){var P=Q.findItem(R,false);

if(P){Q.setSelection([P]);
}else{Q.resetSelection();
}}else{Q.resetSelection();
}this.fireDataEvent(H,R,e.getOldData());
},getTextSelection:function(){return this.getChildControl(N).getTextSelection();
},getTextSelectionLength:function(){return this.getChildControl(N).getTextSelectionLength();
},setTextSelection:function(o,p){this.getChildControl(N).setTextSelection(o,p);
},clearTextSelection:function(){this.getChildControl(N).clearTextSelection();
},selectAllText:function(){this.getChildControl(N).selectAllText();
}}});
})();
(function(){var p="horizontal",o="qx.event.type.Data",n="vertical",m="",k="qx.ui.form.List",j="Boolean",h="one",g="addChildWidget",f="_applySpacing",d="Enter",B="Integer",A="action",z="keyinput",y="addItem",x="removeChildWidget",w="_applyOrientation",v="__wO",u="single",t="keypress",s="list",q="pane",r="removeItem";
qx.Class.define(k,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(C){arguments.callee.base.call(this);
this.__wO=new qx.ui.container.Composite();
this.__wO.addListener(g,this._onAddChild,this);
this.__wO.addListener(x,this._onRemoveChild,this);
this.getChildControl(q).add(this.__wO);
if(C){this.setOrientation(p);
}else{this.initOrientation();
}this.addListener(t,this._onKeyPress);
this.addListener(z,this._onKeyInput);
this.__wP=m;
},events:{addItem:o,removeItem:o},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},orientation:{check:[p,n],init:n,apply:w},spacing:{check:B,init:0,apply:f,themeable:true},enableInlineFind:{check:j,init:true}},members:{__wP:null,__wQ:null,__wO:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__wO;
},_onAddChild:function(e){this.fireDataEvent(y,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(r,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(K,L){var M=K===p;
var N=M?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__wO;
content.setLayout(N);
content.setAllowGrowX(!M);
content.setAllowGrowY(M);
this._applySpacing(this.getSpacing());
},_applySpacing:function(P,Q){this.__wO.getLayout().setSpacing(P);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==d&&!e.isAltPressed()){var O=this.getSelection();

for(var i=0;i<O.length;i++){O[i].fireEvent(A);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var D=this.getSelectionMode();

if(!(D===u||D===h)){return;
}if(((new Date).valueOf()-this.__wQ)>1000){this.__wP=m;
}this.__wP+=e.getChar();
var E=this.findItemByLabelFuzzy(this.__wP);
if(E){this.setSelection([E]);
}this.__wQ=(new Date).valueOf();
},findItemByLabelFuzzy:function(a){a=a.toLowerCase();
var b=this.getChildren();
for(var i=0,l=b.length;i<l;i++){var c=b[i].getLabel();
if(c&&c.toLowerCase().indexOf(a)==0){return b[i];
}}return null;
},findItem:function(F,G){if(G!==false){F=F.toLowerCase();
}var H=this.getChildren();
var J;
for(var i=0,l=H.length;i<l;i++){J=H[i];
var I=J.getLabel();

if(I!=null){if(I.translate){I=I.translate();
}
if(G!==false){I=I.toLowerCase();
}
if(I.toString()==F.toString()){return J;
}}}return null;
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){arguments.callee.base.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var m="current-preview",l="execute",k="selected-preview",h="Number",g="preview-pane",f="selector-button",d="colorselector-cancelbutton",c="auto-button",b="colorselector-okbutton",a="mousedown",X="teal",W="maroon",V="qx.ui.control.ColorPopup",U="#666",T="changeValue",S="#333",R="#000",Q="__Jo",P="yellow",O="changeGreen",t="colorpopup",u="_applyValue",r="blue",s="changeRed",p="field#",q="__Jn",n="#CCC",o="Color Selector",v="changeVisibility",w="recent",D="changeBlue",B="mouseover",H="Cancel",F="#FFF",K="right",J="Open ColorSelector",y="mouseout",N="#999",M="Automatic",L="Basic Colors",x="Preview (Old/New)",z="visible",A="Recent Colors",C="OK",E="field",G="green",I="red";
qx.Class.define(V,{extend:qx.ui.popup.Popup,implement:[qx.ui.form.IColorForm],construct:function(){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.VBox(5));
this._createChildControl(c);
this._createBoxes();
this._createChildControl(g);
this._createChildControl(f);
this.addListener(v,this._onChangeVisibility,this);
},properties:{appearance:{refine:true,init:t},value:{nullable:true,apply:u,event:T},red:{check:h,init:null,nullable:true,event:s},green:{check:h,init:null,nullable:true,event:O},blue:{check:h,init:null,nullable:true,event:D}},members:{__Jl:1e5,__Jm:null,__Jn:null,__Jo:null,__Jp:w,__Jq:12,_createChildControlImpl:function(bD){var bE;

switch(bD){case E:bE=new qx.ui.core.Widget;
bE.addListener(a,this._onFieldMouseDown,this);
bE.addListener(B,this._onFieldMouseOver,this);
bE.addListener(y,this._onFieldMouseOut,this);
break;
case c:bE=new qx.ui.form.Button(this.tr(M));
bE.setAllowStretchX(true);
bE.addListener(l,this._onAutomaticBtnExecute,this);
this.add(bE);
break;
case f:bE=new qx.ui.form.Button(this.tr(J));
bE.addListener(l,this._onSelectorButtonExecute,this);
this.add(bE);
break;
case g:bE=new qx.ui.groupbox.GroupBox(this.tr(x));
bE.setLayout(new qx.ui.layout.HBox);
bE.add(this._createChildControl(k,true),{flex:1});
bE.add(this._createChildControl(m,true),{flex:1});
this.add(bE);
break;
case k:bE=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case m:bE=new qx.ui.container.Composite(new qx.ui.layout.Basic);
break;
case b:bE=new qx.ui.form.Button(this.tr(C));
bE.addListener(l,this._onColorSelectorOk,this);
break;
case d:bE=new qx.ui.form.Button(this.tr(H));
bE.addListener(l,this._onColorSelectorCancel,this);
break;
}return bE||arguments.callee.base.call(this,bD);
},_createBoxes:function(){this.__Jm={};
var bq=this._tables;
var bt,bp,br;
var j=0;

for(var bs in bq){bt=bq[bs];
bp=new qx.ui.groupbox.GroupBox(bt.label);
bp.setLayout(new qx.ui.layout.HBox);
this.__Jm[bs]=bp;
this.add(bp);

for(var i=0;i<this.__Jq;i++){br=this.getChildControl(p+(j++));
br.setBackgroundColor(bt.values[i]||null);
bp.add(br);
}}},_createColorSelector:function(){if(this.__Jo){return;
}var Y=new qx.ui.window.Window(this.tr(o));
this.__Jn=Y;
Y.setLayout(new qx.ui.layout.VBox(16));
Y.setResizable(false);
Y.moveTo(20,20);
this.__Jo=new qx.ui.control.ColorSelector;
Y.add(this.__Jo);
var ba=new qx.ui.container.Composite(new qx.ui.layout.HBox(8,K));
Y.add(ba);
var bc=this._createChildControl(d);
var bb=this._createChildControl(b);
ba.add(bc);
ba.add(bb);
},_applyValue:function(bm,bn){if(bm===null){this.setRed(null);
this.setGreen(null);
this.setBlue(null);
}else{var bo=qx.util.ColorUtil.stringToRgb(bm);
this.setRed(bo[0]);
this.setGreen(bo[1]);
this.setBlue(bo[2]);
}this.getChildControl(k).setBackgroundColor(bm);
this._rotatePreviousColors();
},_rotatePreviousColors:function(){if(!this._tables){return;
}var bw=this._tables[this.__Jp].values;
var bx=this.__Jm[this.__Jp];

if(!bw){return;
}var by=this.getValue();

if(!by){return;
}var bv=bw.indexOf(by);

if(bv!=-1){qx.lang.Array.removeAt(bw,bv);
}else if(bw.length==this.__Jq){bw.shift();
}bw.push(by);
var bu=bx.getChildren();

for(var i=0;i<bu.length;i++){bu[i].setBackgroundColor(bw[i]||null);
}},_onFieldMouseDown:function(e){var bl=this.getChildControl(m).getBackgroundColor();
this.setValue(bl);

if(bl){this.hide();
}},_onFieldMouseOver:function(e){this.getChildControl(m).setBackgroundColor(e.getTarget().getBackgroundColor());
},_onFieldMouseOut:function(e){var bg=this.getRed();
var bf=this.getGreen();
var bd=this.getBlue();
var be=null;

if(bg!==null||bf!==null||bd!==null){var be=qx.util.ColorUtil.rgbToRgbString([bg,bf,bd]);
}this.getChildControl(m).setBackgroundColor(be);
},_onAutomaticBtnExecute:function(){this.setValue(null);
this.hide();
},_onSelectorButtonExecute:function(){this._createColorSelector();
this.exclude();
var bk=this.getRed();
var bj=this.getGreen();
var bi=this.getBlue();

if(bk===null||bj===null||bi===null){bk=255;
bj=255;
bi=255;
}this.__Jo.setRed(bk);
this.__Jo.setGreen(bj);
this.__Jo.setBlue(bi);
this.__Jn.open();
},_onColorSelectorOk:function(){var bh=this.__Jo;
this.setValue(qx.util.ColorUtil.rgbToRgbString([bh.getRed(),bh.getGreen(),bh.getBlue()]));
this.__Jn.close();
},_onColorSelectorCancel:function(){this.__Jn.close();
},_onChangeVisibility:function(e){if(this.getVisibility()==z){var bC=this.getRed();
var bB=this.getGreen();
var bz=this.getBlue();
var bA=null;

if(bC!==null||bB!==null||bz!==null){var bA=qx.util.ColorUtil.rgbToRgbString([bC,bB,bz]);
}this.getChildControl(k).setBackgroundColor(bA);
this.getChildControl(m).setBackgroundColor(bA);
}},_tables:{core:{label:L,values:[R,S,U,N,n,F,I,G,r,P,X,W]},recent:{label:A,values:[]}}},destruct:function(){this._disposeObjects(q,Q);
this._tables=this.__Jm=null;
}});
})();
(function(){var i="legend",h="frame",g="middle",f="top",d="resize",c="qx.ui.groupbox.GroupBox",b="groupbox",a="_applyLegendPosition";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(j,k){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(h);
this._createChildControl(i);
if(j!=null){this.setLegend(j);
}
if(k!=null){this.setIcon(k);
}},properties:{appearance:{refine:true,init:b},legendPosition:{check:[f,g],init:g,apply:a,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(l){var m;

switch(l){case h:m=new qx.ui.container.Composite();
this._add(m,{left:0,top:6,right:0,bottom:0});
break;
case i:m=new qx.ui.basic.Atom();
m.addListener(d,this._repositionFrame,this);
this._add(m);
break;
}return m||arguments.callee.base.call(this,l);
},_getContentPaddingTarget:function(){return this.getChildControl(h);
},_applyLegendPosition:function(e){if(this.getChildControl(i).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var r=this.getChildControl(i);
var q=this.getChildControl(h);
var s=r.getBounds().height;
if(this.getLegendPosition()==g){q.setLayoutProperties({"top":Math.round(s/2)});
}else if(this.getLegendPosition()==f){q.setLayoutProperties({"top":s});
}},getChildrenContainer:function(){return this.getChildControl(h);
},setLegend:function(n){var o=this.getChildControl(i);

if(n!==null){o.setLabel(n);
o.show();
}else{o.exclude();
}},getLegend:function(){return this.getChildControl(i).getLabel();
},setIcon:function(p){this.getChildControl(i).setIcon(p);
},getIcon:function(){this.getChildControl(i).getIcon();
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
(function(){var bX="brightness-handle",bW="hue-saturation-handle",bV="hsbSpinner",bU="rgbSpinner",bT="changeValue",bS="hexField",bR="hueSaturationField",bQ="brightness-field",bP="mousedown",bO="rgb-spinner-red",bD="preview-content-old",bC="rgb-spinner-green",bB="brightnessField",bA="hue-saturation-field",bz="hsb-spinner-brightness",by="preview-content-new",bx="hue-saturation-pane",bw="rgb-spinner-blue",bv="hsb-spinner-hue",bu="hsb-spinner-saturation",cf="hex-field",cg="brightnessModifier",cd="blueModifier",ce="saturationModifier",cb="middle",cc="Number",bY="#",ca="redModifier",ch="greenModifier",ci="hueModifier",bH="Integer",bG="brightness-pane",bJ="control-pane",bI="preset-grid",bL="mouseup",bK="preset-field-set",bN="qx.event.type.Event",bM="mousemove",bF="hex-field-composite",bE="rgb-spinner-composite",E="hsb-spinner-composite",F="control-bar",G="mousewheel",H="visual-pane",I="input-field-set",J="preview-field-set",K="black",L="_applyGreen",M="#333",N="aqua",cm="colorbucket",cl="qx.event.type.Data",ck="Hex",cj="#BBB",cq="decoration/colorselector/brightness-handle.gif",cp="Visual",co="_applySaturation",cn="Preview (Old/New)",cs="FFFFFF",cr="decoration/colorselector/brightness-field.png",be="white",bf="orange",bc="_applyRed",bd="_applyBlue",bi="maroon",bj="Presets",bg="_applyBrightness",bh="#999",ba="purple",bb="red",V="blue",U="_applyHue",X="decoration/colorselector/huesaturation-handle.gif",W="colorselector",R="qx.ui.control.ColorSelector",Q="lime",T="#EEE",S="olive",P="RGB",O="decoration/colorselector/huesaturation-field.jpg",bo="navy",bp="teal",bq="green",br="yellow",bk="#666",bl="fuchsia",bm="Details",bn="",bs="colorbucket#",bt="appear",Y="HSB";
qx.Class.define(R,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IColorForm],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(F);
this.addListener(bt,this._onAppear,this);
},events:{"dialogok":bN,"dialogcancel":bN,"changeValue":cl},properties:{appearance:{refine:true,init:W},red:{check:bH,init:255,apply:bc},green:{check:bH,init:255,apply:L},blue:{check:bH,init:255,apply:bd},hue:{check:cc,init:0,apply:U},saturation:{check:cc,init:0,apply:co},brightness:{check:cc,init:100,apply:bg}},members:{__Dl:null,__Dm:[bi,bb,bf,br,S,ba,bl,Q,bq,bo,V,N,bp,K,M,bk,bh,cj,T,be],__Dn:bn,__Do:0,__Dp:0,__Dq:0,__Dr:true,__Ds:false,_createChildControlImpl:function(cA){var cB;

switch(cA){case F:cB=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
cB.add(this.getChildControl(bJ));
cB.add(this.getChildControl(H));
this._add(cB);
break;
case H:cB=new qx.ui.groupbox.GroupBox(this.tr(cp));
cB.setLayout(new qx.ui.layout.HBox(10));
cB.add(this.getChildControl(bx));
cB.add(this.getChildControl(bG));
break;
case bJ:cB=new qx.ui.container.Composite(new qx.ui.layout.VBox(12));
cB.add(this.getChildControl(bK));
cB.add(this.getChildControl(I));
cB.add(this.getChildControl(J),{flex:1});
break;
case bx:cB=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
cB.setAllowGrowY(false);
cB.addListener(G,this._onHueSaturationPaneMouseWheel,this);
cB.add(this.getChildControl(bA));
cB.add(this.getChildControl(bW),{left:0,top:256});
break;
case bA:cB=new qx.ui.basic.Image(O);
cB.addListener(bP,this._onHueSaturationFieldMouseDown,this);
break;
case bW:cB=new qx.ui.basic.Image(X);
cB.addListener(bP,this._onHueSaturationFieldMouseDown,this);
cB.addListener(bL,this._onHueSaturationHandleMouseUp,this);
cB.addListener(bM,this._onHueSaturationHandleMouseMove,this);
break;
case bG:cB=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
cB.setAllowGrowY(false);
cB.addListener(G,this._onBrightnessPaneMouseWheel,this);
cB.add(this.getChildControl(bQ));
cB.add(this.getChildControl(bX));
break;
case bQ:cB=new qx.ui.basic.Image(cr);
cB.addListener(bP,this._onBrightnessFieldMouseDown,this);
break;
case bX:cB=new qx.ui.basic.Image(cq);
cB.addListener(bP,this._onBrightnessHandleMouseDown,this);
cB.addListener(bL,this._onBrightnessHandleMouseUp,this);
cB.addListener(bM,this._onBrightnessHandleMouseMove,this);
break;
case bK:cB=new qx.ui.groupbox.GroupBox(this.tr(bj));
cB.setLayout(new qx.ui.layout.Grow());
cB.add(this.getChildControl(bI));
break;
case cm:cB=new qx.ui.core.Widget();
cB.addListener(bP,this._onColorFieldClick,this);
break;
case bI:cG=new qx.ui.layout.Grid(3,3);
cB=new qx.ui.container.Composite(cG);
var cH;
var cF;

for(var i=0;i<2;i++){for(var j=0;j<10;j++){cF=i*10+j;
cH=this.getChildControl(bs+cF);
cH.setBackgroundColor(this.__Dm[cF]);
cB.add(cH,{column:j,row:i});
}}break;
case I:cB=new qx.ui.groupbox.GroupBox(this.tr(bm));
var cG=new qx.ui.layout.VBox();
cG.setSpacing(10);
cB.setLayout(cG);
cB.add(this.getChildControl(bF));
cB.add(this.getChildControl(bE));
cB.add(this.getChildControl(E));
break;
case J:cB=new qx.ui.groupbox.GroupBox(this.tr(cn));
var cG=new qx.ui.layout.HBox(10);
cB.setLayout(cG);
cB.add(this.getChildControl(bD),{flex:1});
cB.add(this.getChildControl(by),{flex:1});
break;
case bF:var cE=new qx.ui.layout.HBox(4);
cE.setAlignY(cb);
cB=new qx.ui.container.Composite(cE);
var cJ=new qx.ui.basic.Label(this.tr(ck));
cB.add(cJ);
var cI=new qx.ui.basic.Label(bY);
cB.add(cI);
cB.add(this.getChildControl(cf));
break;
case cf:cB=new qx.ui.form.TextField(cs);
cB.setMaxLength(6);
cB.setFilter(/[0-9A-Fa-f]/);
cB.setWidth(55);
cB.addListener(bT,this._onHexFieldChange,this);
break;
case bE:var cE=new qx.ui.layout.HBox(4);
cE.setAlignY(cb);
cB=new qx.ui.container.Composite(cE);
var cC=new qx.ui.basic.Label(this.tr(P));
cC.setWidth(25);
cB.add(cC);
cB.add(this.getChildControl(bO));
cB.add(this.getChildControl(bC));
cB.add(this.getChildControl(bw));
break;
case bO:cB=new qx.ui.form.Spinner(0,255,255);
cB.setWidth(50);
cB.addListener(bT,this._setRedFromSpinner,this);
break;
case bC:cB=new qx.ui.form.Spinner(0,255,255);
cB.setWidth(50);
cB.addListener(bT,this._setGreenFromSpinner,this);
break;
case bw:cB=new qx.ui.form.Spinner(0,255,255);
cB.setWidth(50);
cB.addListener(bT,this._setBlueFromSpinner,this);
break;
case E:var cE=new qx.ui.layout.HBox(4);
cE.setAlignY(cb);
cB=new qx.ui.container.Composite(cE);
var cD=new qx.ui.basic.Label(this.tr(Y));
cD.setWidth(25);
cB.add(cD);
cB.add(this.getChildControl(bv));
cB.add(this.getChildControl(bu));
cB.add(this.getChildControl(bz));
break;
case bv:cB=new qx.ui.form.Spinner(0,0,360);
cB.setWidth(50);
cB.addListener(bT,this._setHueFromSpinner,this);
break;
case bu:cB=new qx.ui.form.Spinner(0,0,100);
cB.setWidth(50);
cB.addListener(bT,this._setSaturationFromSpinner,this);
break;
case bz:cB=new qx.ui.form.Spinner(0,100,100);
cB.setWidth(50);
cB.addListener(bT,this._setBrightnessFromSpinner,this);
break;
case bD:cB=new qx.ui.core.Widget();
break;
case by:cB=new qx.ui.core.Widget();
break;
}return cB||arguments.callee.base.call(this,cA);
},setValue:function(cw){var cx;

if(cw==null){this.__Dr=true;
cx=[255,255,255];
}else{cx=qx.util.ColorUtil.stringToRgb(cw);
this.__Dr=false;
}this.__Ds=true;
this.setRed(cx[0]);
this.setGreen(cx[1]);
this.__Ds=false;
this.setBlue(cx[2]);
},getValue:function(){return this.__Dr?null:bY+qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
},resetValue:function(){this.__Dr=true;
this.__Ds=true;
this.setRed(255);
this.setGreen(255);
this.__Ds=false;
this.setBlue(255);
},__Dt:function(){if(!this.__Ds){this.__Dr=false;
this.fireDataEvent(bT,this.getValue());
}},_applyRed:function(y,z){if(this.__Dl===null){this.__Dl=ca;
}
if(this.__Dl!==bU){this.getChildControl(bO).setValue(y);
}
if(this.__Dl!==bS){this._setHexFromRgb();
}
switch(this.__Dl){case bU:case bS:case ca:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__Dt();

if(this.__Dl===ca){this.__Dl=null;
}},_applyGreen:function(cy,cz){if(this.__Dl===null){this.__Dl=ch;
}
if(this.__Dl!==bU){this.getChildControl(bC).setValue(cy);
}
if(this.__Dl!==bS){this._setHexFromRgb();
}
switch(this.__Dl){case bU:case bS:case ch:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__Dt();

if(this.__Dl===ch){this.__Dl=null;
}},_applyBlue:function(cP,cQ){if(this.__Dl===null){this.__Dl=cd;
}
if(this.__Dl!==bU){this.getChildControl(bw).setValue(cP);
}
if(this.__Dl!==bS){this._setHexFromRgb();
}
switch(this.__Dl){case bU:case bS:case cd:this._setHueFromRgb();
}this._setPreviewFromRgb();
this.__Dt();

if(this.__Dl===cd){this.__Dl=null;
}},_applyHue:function(k,l){if(this.__Dl===null){this.__Dl=ci;
}
if(this.__Dl!==bV){this.getChildControl(bv).setValue(k);
}
if(this.__Dl!==bR){if(this.getChildControl(bW).getBounds()){this.getChildControl(bW).setDomLeft(Math.round(k/1.40625)+this.getChildControl(bx).getPaddingLeft());
}else{this.getChildControl(bW).setLayoutProperties({left:Math.round(k/1.40625)});
}}
switch(this.__Dl){case bV:case bR:case ci:this._setRgbFromHue();
}this._setBrightnessGradiant();

if(this.__Dl===ci){this.__Dl=null;
}},_applySaturation:function(B,C){if(this.__Dl===null){this.__Dl=ce;
}
if(this.__Dl!==bV){this.getChildControl(bu).setValue(B);
}
if(this.__Dl!==bR){this._setBrightnessGradiant();

if(this.getChildControl(bW).getBounds()){this.getChildControl(bW).setDomTop(256-Math.round(B*2.56)+this.getChildControl(bx).getPaddingTop());
}else{this.getChildControl(bW).setLayoutProperties({top:256-Math.round(B*2.56)});
}}
switch(this.__Dl){case bV:case bR:case ce:this._setRgbFromHue();
}
if(this.__Dl===ce){this.__Dl=null;
}},_applyBrightness:function(t,u){if(this.__Dl===null){this.__Dl=cg;
}
if(this.__Dl!==bV){this.getChildControl(bz).setValue(t);
}
if(this.__Dl!==bB){var v=256-Math.round(t*2.56);

if(this.getChildControl(bX).getBounds()){this.getChildControl(bX).setDomTop(v+this.getChildControl(bG).getPaddingTop());
}else{this.getChildControl(bX).setLayoutProperties({top:v});
}}
switch(this.__Dl){case bV:case bB:case cg:this._setRgbFromHue();
}
if(this.__Dl===cg){this.__Dl=null;
}},_onBrightnessHandleMouseDown:function(e){this.getChildControl(bX).capture();
this.__Dn=bX;
var cM=this.getChildControl(bQ).getContainerLocation();
var cL=this.getChildControl(bX).getContainerLocation();
var cK=this.getChildControl(bQ).getBounds();
this.__Do=cM.top+(e.getDocumentTop()-cL.top)-cK.top;
e.stopPropagation();
},_onBrightnessHandleMouseUp:function(e){this.getChildControl(bX).releaseCapture();
this.__Dn=null;
},_onBrightnessHandleMouseMove:function(e){if(this.__Dn===bX){this._setBrightnessOnFieldEvent(e);
e.stopPropagation();
}},_onBrightnessFieldMouseDown:function(e){var location=this.getChildControl(bQ).getContainerLocation();
var a=this.getChildControl(bX).getBounds();
this.__Do=location.top+(a.height/2);
this._setBrightnessOnFieldEvent(e);
this.getChildControl(bX).capture();
this.__Dn=bX;
},_onBrightnessPaneMouseWheel:function(e){this.setBrightness(qx.lang.Number.limit(this.getBrightness()+e.getWheelDelta(),0,100));
e.stop();
},_setBrightnessOnFieldEvent:function(e){var w=qx.lang.Number.limit(e.getDocumentTop()-this.__Do,0,256);
this.__Dl=bB;

if(this.getChildControl(bX).getBounds()){this.getChildControl(bX).setDomTop(w);
}else{this.getChildControl(bX).setLayoutProperties({top:w});
}this.setBrightness(100-Math.round(w/2.56));
this.__Dl=null;
},_onHueSaturationHandleMouseUp:function(e){if(this.__Dn){e.stopPropagation();
this.getChildControl(bW).releaseCapture();
this.__Dn=null;
}},_onHueSaturationHandleMouseMove:function(e){if(this.__Dn===bW){this._setHueSaturationOnFieldEvent(e);
e.stopPropagation();
}},_onHueSaturationFieldMouseDown:function(e){var location=this.getChildControl(bA).getContainerLocation();
var cN=this.getChildControl(bW).getBounds();
var cO=this.getChildControl(bA).getBounds();
this.__Dp=location.top+(cN.height/2)-cO.top;
this.__Dq=location.left+(cN.width/2)-cO.left;
this._setHueSaturationOnFieldEvent(e);
this.getChildControl(bW).capture();
this.__Dn=bW;
},_onHueSaturationPaneMouseWheel:function(e){this.setSaturation(qx.lang.Number.limit(this.getSaturation()+e.getWheelDelta(),0,100));
e.stop();
},_setHueSaturationOnFieldEvent:function(e){var h=qx.lang.Number.limit(e.getDocumentTop()-this.__Dp,0,256);
var g=qx.lang.Number.limit(e.getDocumentLeft()-this.__Dq,0,256);
this.getChildControl(bW).setDomPosition(g,h);
this.__Dl=bR;
this.setSaturation(100-Math.round(h/2.56));
this.setHue(Math.round(g*1.40625));
this.__Dl=null;
},_setRedFromSpinner:function(){if(this.__Dl!==null){return;
}this.__Dl=bU;
this.setRed(this.getChildControl(bO).getValue());
this.__Dl=null;
},_setGreenFromSpinner:function(){if(this.__Dl!==null){return;
}this.__Dl=bU;
this.setGreen(this.getChildControl(bC).getValue());
this.__Dl=null;
},_setBlueFromSpinner:function(){if(this.__Dl!==null){return;
}this.__Dl=bU;
this.setBlue(this.getChildControl(bw).getValue());
this.__Dl=null;
},_setHueFromSpinner:function(){if(this.__Dl!==null){return;
}this.__Dl=bV;
this.setHue(this.getChildControl(bv).getValue());
this.__Dl=null;
},_setSaturationFromSpinner:function(){if(this.__Dl!==null){return;
}this.__Dl=bV;
this.setSaturation(this.getChildControl(bu).getValue());
this.__Dl=null;
},_setBrightnessFromSpinner:function(){if(this.__Dl!==null){return;
}this.__Dl=bV;
this.setBrightness(this.getChildControl(bz).getValue());
this.__Dl=null;
},_onHexFieldChange:function(e){if(this.__Dl!==null){return;
}
try{var s=this.getChildControl(cf);
var r=qx.util.ColorUtil.hexStringToRgb(bY+s.getValue());
}catch(m){return;
}this.__Dl=bS;
this.setRed(r[0]);
this.setGreen(r[1]);
this.setBlue(r[2]);
this.__Dl=null;
},_setHexFromRgb:function(){var D=qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(cf).setValue(D);
},_onColorFieldClick:function(e){var c=e.getTarget().getBackgroundColor();

if(!c){return this.error("Missing backgroundColor value for field: "+e.getTarget());
}var d=qx.util.ColorUtil.stringToRgb(c);
this.setRed(d[0]);
this.setGreen(d[1]);
this.setBlue(d[2]);
},_setHueFromRgb:function(){switch(this.__Dl){case bV:case bR:case bB:break;
default:var A=qx.util.ColorUtil.rgbToHsb([this.getRed(),this.getGreen(),this.getBlue()]);
this.setHue(A[0]);
this.setSaturation(A[1]);
this.setBrightness(A[2]);
}},_setRgbFromHue:function(){switch(this.__Dl){case bU:case bS:break;
default:var b=qx.util.ColorUtil.hsbToRgb([this.getHue(),this.getSaturation(),this.getBrightness()]);
this.setRed(b[0]);
this.setGreen(b[1]);
this.setBlue(b[2]);
}},_setPreviewFromRgb:function(){var x=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(by).setBackgroundColor(x);
},setPreviousColor:function(n,o,p){var q=qx.util.ColorUtil.rgbToRgbString([n,o,p]);
this.getChildControl(bD).setBackgroundColor(q);
this.setRed(n);
this.setGreen(o);
this.setBlue(p);
},_setBrightnessGradiant:function(){var ct=qx.util.ColorUtil;
var cu=ct.hsbToRgb([this.getHue(),this.getSaturation(),255]);
var cv=ct.rgbToRgbString(cu);
this.getChildControl(bQ).setBackgroundColor(cv);
},_onAppear:function(e){var f=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);
this.getChildControl(bD).setBackgroundColor(f);
this.getChildControl(by).setBackgroundColor(f);
}}});
})();
(function(){var p="textfield",o="",n="downbutton",m="upbutton",l="Number",k="inner",j="PageUp",i="Boolean",h="changeValue",g="Down",M="Up",L="execute",K="PageDown",J="changeLocale",I="qx.dynlocale",H="on",G="_applyEditable",F="_applyWrap",E="keydown",D="\-]",w="mousewheel",x="_applyValue",u="number",v="_applyMinimum",s="qx.util.format.NumberFormat",t="[0-9",q="keyup",r="spinner",y="this._checkValue(value)",z="_applyMaximum",B="changeNumberFormat",A="_applyNumberFormat",C="qx.ui.form.Spinner";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.INumberForm,qx.ui.form.IRange,qx.ui.form.IForm],include:[qx.ui.core.MContentPadding,qx.ui.form.MForm],construct:function(U,V,W){arguments.callee.base.call(this);
var X=new qx.ui.layout.Grid();
X.setColumnFlex(0,1);
X.setRowFlex(0,1);
X.setRowFlex(1,1);
this._setLayout(X);
this.addListener(E,this._onKeyDown,this);
this.addListener(q,this._onKeyUp,this);
this.addListener(w,this._onMouseWheel,this);

if(qx.core.Variant.isSet(I,H)){qx.locale.Manager.getInstance().addListener(J,this._onChangeLocale,this);
}this._createChildControl(p);
this._createChildControl(m);
this._createChildControl(n);
if(U!=null){this.setMinimum(U);
}
if(W!=null){this.setMaximum(W);
}
if(V!==undefined){this.setValue(V);
}else{this.initValue();
}},properties:{appearance:{refine:true,init:r},focusable:{refine:true,init:true},singleStep:{check:l,init:1},pageStep:{check:l,init:10},minimum:{check:l,apply:v,init:0},value:{check:y,nullable:true,apply:x,init:0,event:h},maximum:{check:l,apply:z,init:100},wrap:{check:i,init:false,apply:F},editable:{check:i,init:true,apply:G},numberFormat:{check:s,apply:A,nullable:true},allowShrinkY:{refine:true,init:false}},members:{__vA:null,__vB:false,__vC:false,_createChildControlImpl:function(S){var T;

switch(S){case p:T=new qx.ui.form.TextField();
T.setFilter(this._getFilterRegExp());
T.addState(k);
T.setWidth(40);
T.setFocusable(false);
T.addListener(h,this._onTextChange,this);
this._add(T,{column:0,row:0,rowSpan:2});
break;
case m:T=new qx.ui.form.RepeatButton();
T.addState(k);
T.setFocusable(false);
T.addListener(L,this._countUp,this);
this._add(T,{column:1,row:0});
break;
case n:T=new qx.ui.form.RepeatButton();
T.addState(k);
T.setFocusable(false);
T.addListener(L,this._countDown,this);
this._add(T,{column:1,row:1});
break;
}return T||arguments.callee.base.call(this,S);
},_getFilterRegExp:function(){var bp=qx.locale.Number.getDecimalSeparator(qx.locale.Manager.getInstance().getLocale());
var bo=qx.locale.Number.getGroupSeparator(qx.locale.Manager.getInstance().getLocale());
var bn=o;
var bl=o;

if(this.getNumberFormat()!==null){bn=this.getNumberFormat().getPrefix()||o;
bl=this.getNumberFormat().getPostfix()||o;
}var bm=new RegExp(t+qx.lang.String.escapeRegexpChars(bp)+qx.lang.String.escapeRegexpChars(bo)+qx.lang.String.escapeRegexpChars(bn)+qx.lang.String.escapeRegexpChars(bl)+D);
return bm;
},_forwardStates:{focused:true,invalid:true},tabFocus:function(){var bh=this.getChildControl(p);
bh.getFocusElement().focus();
bh.selectAllText();
},_applyMinimum:function(Y,ba){if(this.getMaximum()<Y){this.setMaximum(Y);
}
if(this.getValue()<Y){this.setValue(Y);
}else{this._updateButtons();
}},_applyMaximum:function(d,f){if(this.getMinimum()>d){this.setMin(d);
}
if(this.getValue()>d){this.setValue(d);
}else{this._updateButtons();
}},_applyEnabled:function(Q,R){arguments.callee.base.call(this,Q,R);
this._updateButtons();
},_checkValue:function(bb){return typeof bb===u&&bb>=this.getMinimum()&&bb<=this.getMaximum();
},_applyValue:function(bq,br){var bs=this.getChildControl(p);
this._updateButtons();
this.__vA=bq;
if(bq!==null){if(this.getNumberFormat()){bs.setValue(this.getNumberFormat().format(bq));
}else{bs.setValue(bq+o);
}}else{bs.setValue(o);
}},_applyEditable:function(bv,bw){var bx=this.getChildControl(p);

if(bx){bx.setReadOnly(!bv);
}},_applyWrap:function(bt,bu){this._updateButtons();
},_applyNumberFormat:function(bi,bj){var bk=this.getChildControl(p);
bk.setFilter(this._getFilterRegExp());
this.getNumberFormat().addListener(B,this._onChangeNumberFormat,this);
this._applyValue(this.__vA,undefined);
},_getContentPaddingTarget:function(){return this.getChildControl(p);
},_updateButtons:function(){var bf=this.getChildControl(m);
var be=this.getChildControl(n);
var bg=this.getValue();

if(!this.getEnabled()){bf.setEnabled(false);
be.setEnabled(false);
}else{if(this.getWrap()){bf.setEnabled(true);
be.setEnabled(true);
}else{if(bg!==null&&bg<this.getMaximum()){bf.setEnabled(true);
}else{bf.setEnabled(false);
}if(bg!==null&&bg>this.getMinimum()){be.setEnabled(true);
}else{be.setEnabled(false);
}}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case j:this.__vB=true;
case M:this.getChildControl(m).press();
break;
case K:this.__vC=true;
case g:this.getChildControl(n).press();
break;
default:return ;
}e.stopPropagation();
e.preventDefault();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case j:this.getChildControl(m).release();
this.__vB=false;
break;
case M:this.getChildControl(m).release();
break;
case K:this.getChildControl(n).release();
this.__vC=false;
break;
case g:this.getChildControl(n).release();
break;
}},_onMouseWheel:function(e){if(e.getWheelDelta()>0){this._countDown();
}else{this._countUp();
}e.stop();
},_onTextChange:function(e){var bc=this.getChildControl(p);
var bd;
if(this.getNumberFormat()){try{bd=this.getNumberFormat().parse(bc.getValue());
}catch(N){}}if(bd===undefined){bd=parseFloat(bc.getValue(),10);
}if(!isNaN(bd)){if(bd>this.getMaximum()){bc.setValue(this.getMaximum()+o);
return;
}else if(bd<this.getMinimum()){bc.setValue(this.getMinimum()+o);
return;
}this.setValue(bd);
}else{this._applyValue(this.__vA,undefined);
}},_onChangeLocale:function(by){if(this.getNumberFormat()!==null){this.setNumberFormat(this.getNumberFormat());
var bz=this.getChildControl(p);
bz.setFilter(this._getFilterRegExp());
bz.setValue(this.getNumberFormat().format(this.getValue()));
}},_onChangeNumberFormat:function(O){var P=this.getChildControl(p);
P.setFilter(this._getFilterRegExp());
P.setValue(this.getNumberFormat().format(this.getValue()));
},_countUp:function(){if(this.__vB){var bB=this.getValue()+this.getPageStep();
}else{var bB=this.getValue()+this.getSingleStep();
}if(this.getWrap()){if(bB>this.getMaximum()){var bA=this.getMaximum()-bB;
bB=this.getMinimum()+bA;
}}this.gotoValue(bB);
},_countDown:function(){if(this.__vC){var b=this.getValue()-this.getPageStep();
}else{var b=this.getValue()-this.getSingleStep();
}if(this.getWrap()){if(b<this.getMinimum()){var a=this.getMinimum()+b;
b=this.getMaximum()-a;
}}this.gotoValue(b);
},gotoValue:function(c){return this.setValue(Math.min(this.getMaximum(),Math.max(this.getMinimum(),c)));
}},destruct:function(){if(qx.core.Variant.isSet(I,H)){qx.locale.Manager.getInstance().removeListener(J,this._onChangeLocale,this);
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
(function(){var k="",j="Console",i="_consoleButton",h="_findField",g="&gt;",f="changeValue",d="_stack",c="execute",b="Filter...",a='"',C="'",B="&lt;",A=">",z="_consoleView",y="<",x="changeSelection",w="&amp;",v="&#39;",u="DOM",t="inspector.console.ConsoleWindow",r="_domButton",s="&quot;",p="&",q="?",m="Clear",n="_domView",l="_clearButton";
qx.Class.define(t,{extend:inspector.components.AbstractWindow,construct:function(){arguments.callee.base.call(this,j);
this._clearButton=new qx.ui.toolbar.Button(m);
this._toolbar.add(this._clearButton);
this._clearButton.addListener(c,function(){this._stack.getSelection()[0].clear();
},this);
this._toolbar.add(new qx.ui.toolbar.Separator());
this._consoleButton=new qx.ui.toolbar.RadioButton(j);
this._toolbar.add(this._consoleButton);
this._domButton=new qx.ui.toolbar.RadioButton(u);
this._toolbar.add(this._domButton);
this._toolbar.addSpacer();
this._findField=new qx.ui.form.TextField();
this._findField.setPlaceholder(b);
this._findField.setLiveUpdate(true);
this._findField.setMarginRight(5);
this._toolbar.add(this._findField);
this._findField.addListener(f,function(e){this._stack.getSelection()[0].filter(e.getData());
},this);
this._stack=new qx.ui.container.Stack();
this.add(this._stack,{flex:1});
this._consoleView=new inspector.console.ConsoleView(this);
this._stack.add(this._consoleView,{flex:1});
this._domView=new inspector.console.DomView(this);
this._stack.add(this._domView,{flex:1});
var D=new qx.ui.form.RadioGroup(this._consoleButton,this._domButton);
D.addListener(x,function(e){this._findField.setValue(k);

if(D.getSelection()[0]==this._consoleButton){this._stack.setSelection([this._consoleView]);
}else if(D.getSelection()[0]==this._domButton){this._stack.setSelection([this._domView]);
}else{this._consoleButton.setValue(true);
}},this);
},members:{setInitSizeAndPosition:function(){var H=qx.bom.Viewport.getWidth()-300;
var I=parseInt((qx.bom.Viewport.getHeight()-30)/3);
this.moveTo(0,2*I+30);
this.setWidth(H);
this.setHeight(I);
},escapeHtml:function(J){function K(L){switch(L){case y:return B;
case A:return g;
case p:return w;
case C:return v;
case a:return s;
}return q;
}return String(J).replace(/[<>&"']/g,K);
},inspectObjectByInternalId:function(E){var o=this._consoleView.getObjectById(E);
this.inspectObject(o);
},inspectObjectByDomSelecet:function(F,G){this._domView.setObjectByIndex(F,G);
this._findField.setValue(k);
},inspectObject:function(M){this._domView.setObject(M.object,M.name);
this._domButton.setValue(true);
},goToDefaultView:function(){this._consoleButton.setValue(true);
this._domView.clear();
}},destruct:function(){this._disposeObjects(l,i,r,h,d,z,n);
}});
})();
(function(){var g="_applyDynamic",f="changeSelection",d="Boolean",c="qx.ui.container.Stack";
qx.Class.define(c,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(f,this.__qh,this);
},properties:{dynamic:{check:d,init:false,apply:g}},members:{_applyDynamic:function(o){var q=this._getChildren();
var p=this.getSelection()[0];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r!=p){if(o){q[i].exclude();
}else{q[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(n){return n.isEnabled();
},__qh:function(e){var z=e.getOldData()[0];
var A=e.getData()[0];

if(z){if(this.isDynamic()){z.exclude();
}else{z.hide();
}}
if(A){A.show();
}},add:function(a){this._add(a);
var b=this.getSelection()[0];

if(!b){this.setSelection([a]);
}else if(b!==a){if(this.isDynamic()){a.exclude();
}else{a.hide();
}}},remove:function(x){this._remove(x);

if(this.getSelection()[0]===x){var y=this._getChildren()[0];

if(y){this.setSelection([y]);
}else{this.resetSelection();
}}},indexOf:function(w){return this._indexOf(w);
},getChildren:function(){return this._getChildren();
},previous:function(){var k=this.getSelection()[0];
var h=this._indexOf(k)-1;
var m=this._getChildren();

if(h<0){h=m.length-1;
}var j=m[h];
this.setSelection([j]);
},next:function(){var t=this.getSelection()[0];
var s=this._indexOf(t)+1;
var u=this._getChildren();
var v=u[s]||u[0];
this.setSelection([v]);
}}});
})();
(function(){var bf="",be=")",bd="Tab",bc="'>",bb="qx.core.Init.getApplication().inspectObjectByInternalId(",ba="Down",Y="Up",X="warning",W="error",V="Control",cf="info",ce="(",cd="<span class='ins_console_link' onclick='",cc="display",cb="<div class='ins_console_common'><div class='",ca="Escape",bY="Enter",bX="ins_console_warn",bW="]</span> ",bV="ins_console_return_qxobject",bm="changeValue",bn="qx.client",bk="keydown",bl="Courier New",bi=", ...",bj="' class='ins_console_icon'>",bg="\"qx.core.Init.getApplication().setWidgetByHash('",bh="<img src='",bs="ins_console_return_primitive",bt="ins_console_debug",bB="&nbsp;",bz="<span class='ins_console_dom_link' onclick='",bJ="input",bE="Space",bR=">>>&nbsp;",bO="ins_console_text",bv="middle",bU=" more",bT="<span class='ins_console_link' onclick=",bS="ins_console_error",bu="inspector.console.ConsoleView",bx="ins_console_info",by=" </span>",bA="</div></div>",bC="]",bF="[",bL="inspector/images/shell/",bQ=", ",bo="keyup",bp="ins_console_return_object",bw="ins_console_return_array",bI="</span>",bH="mshtml",bG="'>inspect Object</span>",bN="keypress",bM="none",bD="', 'console');\"> ",bK=" [",U=">>>",bP=".",bq="Icon.png",br="scroll";
qx.Class.define(bu,{extend:qx.ui.core.Widget,construct:function(console){arguments.callee.base.call(this);
this._console=console;
this._autoCompletePopup=new inspector.console.AutoCompletePopup(this);
this._history=[];
this._historyCounter=-1;
this._objectFolder=[];
this._objectFolderIndex=0;
this._filter=bf;
this._setLayout(new qx.ui.layout.VBox());
this._content=new qx.ui.embed.Html(bf);
this._content.setOverflowY(br);
this._add(this._content,{flex:1});
var n=new qx.ui.container.Composite();
n.setDecorator(bJ);
var o=new qx.ui.layout.HBox();
o.setAlignY(bv);
n.setLayout(o);
this._add(n);
var m=new qx.ui.basic.Label(U);
var l=new qx.bom.Font(12,[bl]);
m.setFont(l);
n.add(m);
this._inputTextField=new qx.ui.form.TextField(bf);
this._inputTextField.setLiveUpdate(true);
this._inputTextField.setDecorator(null);
this._inputTextField.setFont(l);
n.add(this._inputTextField,{flex:1});
this._inputTextField.addListener(bk,this._keyDownHandler,this);
this._inputTextField.addListener(bo,this._keyUpHandler,this);
this._inputTextField.addListener(bN,this._keyPressHandler,this);
this._inputTextField.addListener(bm,function(e){if(this._autoCompletePopup.isOnScreen()){this._autoCompletePopup.load(e.getData());
}},this);
var p=qx.core.Init.getApplication().getIframeWindowObject();
p.qx.log.Logger.register(inspector.console.Appender);
inspector.console.Appender.consoleView=this;
},members:{clear:function(){this._content.setHtml(bf);
},getObjectById:function(x){return this._objectFolder[x];
},filter:function(q){this._filter=q;
try{var s=this._content.getContentElement().getDomElement().childNodes;
var r=new RegExp(this._filter);
for(var i=0;i<s.length;i++){if(qx.core.Variant.isSet(bn,bH)){var content=s[i].innerText;
}else{var content=s[i].textContent;
}if(qx.dom.Node.isElement(s[i])){if(r.test(content)){qx.bom.element.Style.set(s[i],cc,null);
}else{qx.bom.element.Style.set(s[i],cc,bM);
}}}}catch(e){alert("Unable to filter: "+e);
}},chooseAutoCompleteValue:function(){var D=this._inputTextField.getValue();
var name=this._autoCompletePopup.getCurrentSelection();
if(name){var C=D.substring(D.lastIndexOf(bP)+1);
name=name.substring(C.length,name.length);
this.appendString(name);
}this._autoCompletePopup.hide();
this._inputTextField.focus();
},appendString:function(t){if(t!=null){this._inputTextField.setValue(this._inputTextField.getValue()+t);
if(this._inputTextField.getValue().lastIndexOf(ce)!=-1){var u=this._inputTextField.getValue().lastIndexOf(ce)+1;
var v=this._inputTextField.getValue().length-1;
this._inputTextField.setTextSelection(u,v);
}}},_process:function(g){this._printText(this._console.escapeHtml(g));

try{var h=inspector.console.Util.evalOnIframe(g);

if(h!=null){this._objectFolder[this._objectFolderIndex]={name:g,object:h};
this._printReturnValue(h);
this._objectFolderIndex++;
}}catch(O){this.error(O);
}},_keyDownHandler:function(e){if(e.getKeyIdentifier()==ca){this._autoCompletePopup.hide();
return;
}if(e.getKeyIdentifier()==bY){if(!this._autoCompletePopup.isOnScreen()){this._history.unshift(this._inputTextField.getValue());
this._process(this._inputTextField.getValue());
this._inputTextField.setValue(bf);
this._historyCounter=-1;
if(this._history.length>20){this._history.pop();
}}else{this.chooseAutoCompleteValue();
}return;
}if(e.getKeyIdentifier()==Y){e.preventDefault();
if(!this._autoCompletePopup.isOnScreen()){if(this._history[this._historyCounter+1]!=undefined){this._historyCounter++;
this._inputTextField.setValue(this._history[this._historyCounter]);
}}return;
}if(e.getKeyIdentifier()==ba){e.preventDefault();
if(!this._autoCompletePopup.isOnScreen()){if(this._historyCounter>0){this._historyCounter--;
this._inputTextField.setValue(this._history[this._historyCounter]);
}}return;
}if(e.getKeyIdentifier()==V){this._ctrl=true;
return;
}if(e.getKeyIdentifier()==bE||e.getKeyIdentifier()==bd){if(this._ctrl||e.getKeyIdentifier()==bd){e.preventDefault();
if(e.getKeyIdentifier()==bd){var self=this;
window.setTimeout(function(){var length=self._inputTextField.getValue().length;
self._inputTextField.setTextSelection(length,length);
},0);
}try{var cg=qx.bom.element.Location.getLeft(this.getContainerElement().getDomElement());
var top=qx.bom.element.Location.getTop(this._inputTextField.getContentElement().getDomElement())-this._autoCompletePopup.getHeight();
this._autoCompletePopup.open(this._inputTextField.getValue(),cg,top);
var self=this;
window.setTimeout(function(){self._inputTextField.focus();
},0);
}catch(T){this.info(T);
}}return;
}},_keyUpHandler:function(e){if(e.getKeyIdentifier()==V){this._ctrl=false;
}},_keyPressHandler:function(e){if(this._autoCompletePopup.isOnScreen()){if(e.getKeyIdentifier()==ba){this._autoCompletePopup.selectionDown();
}else if(e.getKeyIdentifier()==Y){this._autoCompletePopup.selectionUp();
}}},_scrollToLastLine:function(){qx.ui.core.queue.Manager.flush();
var self=this;
window.setTimeout(function(){var k=self._content.getContentElement();
var j=qx.bom.element.Dimension.getContentHeight(self._content.getContentElement().getDomElement());
k.scrollToY(j);
},0);
},_printReturnValue:function(P){var Q=qx.core.Init.getApplication().getIframeWindowObject();
if(Q&&P instanceof Q.qx.core.Object){this._printQxObject(P);
}else if(P instanceof Q.Array){var R=this._printArray(P);
var S=this._getLabel(cd+bb+this._objectFolderIndex+be+bc+R+bI,bw);
this._content.setHtml(this._content.getHtml()+S);
return;
}else if(Q&&(P instanceof Q.Object||P==Q.window||P==Q.document)){var S=this._getLabel(cd+bb+this._objectFolderIndex+be+bc+P+by,bp);
this._content.setHtml(this._content.getHtml()+S);
return;
}else{var S=this._getLabel(P,bs);
this._content.setHtml(this._content.getHtml()+S);
}this._scrollToLastLine();
},_printQxObject:function(ch){var ci=this._getLabel(bT+bg+ch.toHashCode()+bD+ch.classname+bK+ch.toHashCode()+bW+bz+bb+this._objectFolderIndex+be+bG,bV);
this._content.setHtml(this._content.getHtml()+ci);
this._scrollToLastLine();
},_printText:function(G){var H=this._getLabel(bR+G,bO);
this._content.setHtml(this._content.getHtml()+H);
this._scrollToLastLine();
},_getLabel:function(a,b,c){var a=a;
if(c==cf||c==W||c==X){var f=qx.util.ResourceManager.getInstance().toUri(bL+c+bq);
var d=bh+f+bj;
a=d+bB+a;
}a=cb+b+bc+a+bA;
return a;
},_printArray:function(K){var L=qx.core.Init.getApplication().getIframeWindowObject();

if(K instanceof L.Array){var M=new qx.util.StringBuilder();
var length=K.length;
var N=bf;

if(length>2){N=bi+(length-2)+bU;
length=2;
}
for(var i=0;i<length;i++){if(!M.isEmpty()){M.add(bQ);
}M.add(this._printArray(K[i]));
}return bF+M.get()+N+bC;
}else{return K;
}},error:function(A){if(!this._console.isVisible()){this._console.open();
}var B=this._getLabel(A,bS,W);
this._content.setHtml(this._content.getHtml()+B);
this._scrollToLastLine();
},warn:function(E){if(!this._console.isVisible()){this._console.open();
}var F=this._getLabel(E,bX,X);
this._content.setHtml(this._content.getHtml()+F);
this._scrollToLastLine();
},info:function(I){if(!this._console.isVisible()){this._console.open();
}var J=this._getLabel(I,bx,cf);
this._content.setHtml(this._content.getHtml()+J);
this._scrollToLastLine();
},debug:function(y){if(!this._console.isVisible()){this._console.open();
}var z=this._getLabel(y,bt);
this._content.setHtml(this._content.getHtml()+z);
this._scrollToLastLine();
},dispose:function(){var w=qx.core.Init.getApplication().getIframeWindowObject();
w.qx.log.Logger.unregister(inspector.console.Appender);
}}});
})();
(function(){var m="",l="18.gif",k="%",i=".",h="function",g="#FFFFFF",f="inspector/images/autocomplete/property_",d="qx.ui.table.pane.Pane",c="_table",b="inspector/images/autocomplete/method_",A="visible",z="^",y="__",x="public",w=")",v="_",u="(",t="_tableModel",s="inspector.console.AutoCompletePopup",r=", ",p="private",q="click",n="protected",o="window.";
qx.Class.define(s,{extend:qx.ui.popup.Popup,construct:function(H){arguments.callee.base.call(this);
this._controller=H;
this.setLayout(new qx.ui.layout.VBox());
this.setBackgroundColor(g);
this.setHeight(140);
this.setWidth(300);
qx.core.Init.getApplication().getRoot().add(this);
this._tableModel=new qx.ui.table.model.Simple();
this._tableModel.setColumns([m,h]);
this._table=new qx.ui.table.Table(this._tableModel);
this._table.setWidth(298);
this._table.setHeight(138);
this._table.setShowCellFocusIndicator(false);
this._table.setColumnVisibilityButtonVisible(false);
this._table.setStatusBarVisible(false);
this._table.getTableColumnModel().setColumnWidth(0,22);
this._table.getTableColumnModel().setColumnWidth(1,260);
var I=new qx.ui.table.cellrenderer.Image(18,18);
this._table.getTableColumnModel().setDataCellRenderer(0,I);
this._table.setRowHeight(20);
this.add(this._table);
this._table.addListener(q,function(e){if(e.getTarget().classname==d){this._controller.chooseAutoCompleteValue();
}},this);
},members:{selectionUp:function(){var S=this._table.getSelectionModel().getLeadSelectionIndex();
if(S>0){S--;
}else{S=this._tableModel.getData().length-1;
}this._table.getSelectionModel().addSelectionInterval(S,S);
this._table.setFocusedCell(0,S,true);
},selectionDown:function(){var E=this._table.getSelectionModel().getLeadSelectionIndex();
var F=this._tableModel.getData().length-1;
if(E!=F){E++;
}else{E=0;
}this._table.getSelectionModel().addSelectionInterval(E,E);
this._table.setFocusedCell(0,E,true);
},open:function(B,C,top){this.moveTo(C,top);
this.show();
this.load(B);
},load:function(J){var K=qx.core.Init.getApplication().getIframeWindowObject();
this._table.getSelectionModel().setSelectionInterval(0,0);
this._table.setFocusedCell(0,0,true);
this._tableModel.setData([]);
var O=J.substring(J.lastIndexOf(i)+1);
if(J==O){J=o+J;
}J=J.substring(0,J.lastIndexOf(i));
var M=null;

try{M=inspector.console.Util.evalOnIframe(J);
}catch(D){this.hide();
return;
}if(!(M instanceof K.Object)&&!M==K.window){this.hide();
return ;
}if(M instanceof K.qx.core.Object){this._tableModel.setColumnNamesByIndex([m,M.classname]);
}else{this._tableModel.setColumnNamesByIndex([m,J]);
}var P=new RegExp(z+O);
var Q=[];
for(var name in M){try{if(P.test(name)){if(name.substring(0,2)==y){var N=p;
}else if(name.substring(0,1)==v){var N=n;
}else{var N=x;
}if(M[name] instanceof K.Function){var R=name+u;
for(var j=0;j<M[name].length;j++){if(j==M[name].length-1){R+=unescape(k+(61+j));
}else{R+=unescape(k+(61+j)+r);
}}R+=w;
var L=b+N+l;
Q.push([L,R]);
}else{var L=f+N+l;
Q.push([L,name]);
}}}catch(G){}}
if(Q.length<1){this._table.resetSelection();
}this._tableModel.setData(Q);
this._tableModel.sortByColumn(1,true);
},isOnScreen:function(){return this.getVisibility()==A;
},getCurrentSelection:function(){var a=this._table.getSelectionModel().getLeadSelectionIndex();
if(a!=-1){return this._tableModel.getData()[a][1]+m;
}return null;
}},destruct:function(){this._controller=null;
this._disposeObjects(t,c);
}});
})();
(function(){var r="px",q=".qooxdoo-table-cell-icon {",p="abstract",o="",n="qx.ui.table.cellrenderer.AbstractImage",m=" qooxdoo-table-cell-icon",l="<div></div>",k="'",j="no-repeat",i="}",c="  text-align:center;",h="inline-block",f="static",b="top",a="  padding-top:1px;",e="title='",d="string",g="-moz-inline-box";
qx.Class.define(n,{extend:qx.ui.table.cellrenderer.Abstract,type:p,construct:function(){arguments.callee.base.call(this);
var t=arguments.callee.self;

if(!t.stylesheet){t.stylesheet=qx.bom.Stylesheet.createElement(q+c+a+i);
}},members:{__oT:16,__oU:16,_insetY:2,__oV:null,_identifyImage:function(s){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(z){var A=this._identifyImage(z);
if(A==null||typeof z==d){A={url:A,tooltip:null};
}
if(z.width&&z.height){var B={width:z.imageWidth,height:z.imageHeight};
}else{B=this.__oW(A.url);
}A.width=B.width;
A.height=B.height;
return A;
},__oW:function(u){var x=qx.util.ResourceManager.getInstance();
var w=qx.io.ImageLoader;
var v,y;
if(x.has(u)){v=x.getImageWidth(u);
y=x.getImageHeight(u);
}else if(w.isLoaded(u)){v=w.getWidth(u);
y=w.getHeight(u);
}else{v=this.__oT;
y=this.__oU;
}return {width:v,height:y};
},createDataCellHtml:function(G,H){this.__oV=this._getImageInfos(G);
return arguments.callee.base.call(this,G,H);
},_getCellClass:function(F){return arguments.callee.base.call(this)+m;
},_getContentHtml:function(C){var content=l;
if(this.__oV.url){var content=qx.bom.element.Decoration.create(this.__oV.url,j,{width:this.__oV.width+r,height:this.__oV.height+r,display:qx.bom.client.Engine.GECKO&&qx.bom.client.Engine.VERSION<1.9?g:h,verticalAlign:b,position:f});
}return content;
},_getCellAttributes:function(D){var E=this.__oV.tooltip;

if(E){return e+E+k;
}else{return o;
}}},destruct:function(){this.__oV=null;
}});
})();
(function(){var b="qx.ui.table.cellrenderer.Image",a="";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(c,d){arguments.callee.base.call(this);

if(c){this.__oX=c;
}
if(d){this.__oY=d;
}this.__pa=qx.util.AliasManager.getInstance();
},members:{__pa:null,__oY:16,__oX:16,_identifyImage:function(e){var f={imageWidth:this.__oX,imageHeight:this.__oY};

if(e.value==a){f.url=null;
}else{f.url=this.__pa.resolve(e.value);
}f.tooltip=e.tooltip;
return f;
}},destruct:function(){this.__pa=null;
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
}else if(qx.core.Variant.isSet(r,e)){w=(function(s){return u.eval(s);
}).call(qx.core.Init.getApplication().getSelectedObject(),t);
}if(w instanceof u.Error){throw w;
}}catch(x){throw x;
}return w;
}}});
})();
(function(){var o="none",n="text",m="",l="userSelect",k="color",j="String",i="0px",h="webkit",g="changeHtml",f="_applyCssClass",c="class",e="qx.ui.embed.Html",d="_applyHtml",b="qx.client",a="html";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(A){arguments.callee.base.call(this);

if(A!=null){this.setHtml(A);
}},properties:{html:{check:j,apply:d,event:g,nullable:true},cssClass:{check:j,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(p,q){var r=this.getContentElement();
r.setAttribute(a,p||m);
r.setStyles({"padding":i,"border":o});
},_applyCssClass:function(x,y){this.getContentElement().setAttribute(c,x);
},_applySelectable:function(z){arguments.callee.base.call(this,z);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,z?n:o);
this.getContentElement().setStyle(l,z?n:o);
}},_applyFont:function(s,t){var u=s?qx.theme.manager.Font.getInstance().resolve(s).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(u);
},_applyTextColor:function(v,w){if(v){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(v));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var q=": ",p=", ",o="info",n="{ ",m="]: ",l="ms ",k=" ]",h="map",g="warn",f=" }",c="[ ",e="[",d="inspector.console.Appender",b="string",a="error";
qx.Class.define(d,{statics:{consoleView:null,process:function(D){if(this.consoleView){var E=this.__Og(D);

if(D.level==o){this.consoleView.info(E);
}else if(D.level==g){this.consoleView.warn(E);
}else if(D.level==a){this.consoleView.error(E);
}else{this.consoleView.debug(E);
}}},__Og:function(s){var v=qx.core.Init.getApplication().getIframeWindowObject();
var C=new qx.util.StringBuilder();
var z,B,u,x;
C.add(s.offset,l);

if(s.object){var t=v.qx.core.ObjectRegistry.fromHashCode(s.object);

if(t){C.add(t.classname,e,t.$$hash,m);
}}else if(s.clazz){C.add(s.clazz.classname,q);
}var w=s.items;

for(var i=0,A=w.length;i<A;i++){z=w[i];
B=z.text;

if(B instanceof v.Array){var x=[];

for(var j=0,y=B.length;j<y;j++){u=B[j];

if(typeof u===b){x.push(this.__Oh(u));
}else if(u.key){x.push(u.key+q+this.__Oh(u.text));
}else{x.push(this.__Oh(u.text));
}}
if(z.type===h){C.add(n,x.join(p),f);
}else{C.add(c,x.join(p),k);
}}else{C.add(this.__Oh(B));
}}return C.get();
},__Oh:function(r){return this.consoleView._console.escapeHtml(r);
}}});
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function s(g){if(qx.core.Variant.isSet(b,f)){r.prototype={length:0,$$isArray:true};
var k=e.split(a);

for(var length=k.length;length;){r.prototype[k[--length]]=Array.prototype[k[length]];
}}var l=Array.prototype.slice;
r.prototype.concat=function(){var o=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var n;

if(arguments[i] instanceof r){n=l.call(arguments[i],0);
}else if(arguments[i] instanceof Array){n=arguments[i];
}else{n=[arguments[i]];
}o.push.apply(o,n);
}return o;
};
r.prototype.toString=function(){return l.call(this,0).toString();
};
r.prototype.toLocaleString=function(){return l.call(this,0).toLocaleString();
};
r.prototype.constructor=r;
r.prototype.indexOf=qx.lang.Core.arrayIndexOf;
r.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
r.prototype.forEach=qx.lang.Core.arrayForEach;
r.prototype.some=qx.lang.Core.arraySome;
r.prototype.every=qx.lang.Core.arrayEvery;
var h=qx.lang.Core.arrayFilter;
var j=qx.lang.Core.arrayMap;
r.prototype.filter=function(){var t=new this.constructor;
t.push.apply(t,h.apply(this,arguments));
return t;
};
r.prototype.map=function(){var p=new this.constructor;
p.push.apply(p,j.apply(this,arguments));
return p;
};
r.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
r.prototype.splice=function(){var m=new this.constructor;
m.push.apply(m,Array.prototype.splice.apply(this,arguments));
return m;
};
r.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
r.prototype.valueOf=function(){return this.length;
};
return r;
}function r(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function q(){}q.prototype=[];
r.prototype=new q;
r.prototype.length=0;
qx.type.BaseArray=s(r);
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
(function(){var W="",V="'>",U="inspector/images/spacer.gif",T="</td></tr>",S="</td>",R="</span>",Q="'><img class='ins_dom_front_image' src='",P="qx.core.Init.getApplication().inspectObjectByDomSelecet(",O="<tr><td class='",N="</div>",bY=")",bX="</span></td></tr>",bW="string",bV="<div class='ins_dom_no_prop'>No object selected.</div>",bU="<td><span class='ins_dom_null'>",bT="\")",bS="<td class='ins_dom_object'>",bR=", \"",bQ="<tr><td class='ins_dom_key'><img class='ins_dom_front_image' src='",bP=".",be="<div class='ins_dom_func'>",bf=" &raquo; <span class='ins_dom_return_path_link' onclick='",bc="<div class='ins_dom_return_path_main'>",bd="<td class='ins_dom_self_ref'>self reference</td></tr>",ba="<table class='ins_dom_table'>",bb=" more</span> ]",X="'><a onclick='",Y="&quot;</span>",bk="<td class='ins_dom_string'>&quot;Error occurs by reading value!&quot;</td></tr>",bl="Object",bv="inspector/images/open.png",bs="', 'console');\">select Object</u>",bD="toString",by=", ",bL="<a onclick='",bI="<td class='ins_dom_string'>&quot;",bo="<td class='ins_dom_basic'>",bO="ins_dom_key_number",bN="<td class='ins_dom_func_object'>",bM="<span class='ins_dom_func_object'>function()</span>",bn=")'>",bq="</a>",br=" ]",bu="</a></td>",bw="<span class='ins_dom_basic'>",bz="<div class='ins_dom_no_prop'>There are no properties to show for this object.</div>",bF="&quot;</td></tr>",bK="_htmlEmbed",bg="ins_dom_key",bh="</table>",bp="</a> <a style='color: #000000;' onclick=\"qx.core.Init.getApplication().setWidgetByHash('",bC="<span class='ins_dom_object'>",bB=" &raquo; <span class='ins_dom_return_path_selected'>",bA=", ... <span class='ins_dom_array_more'>",bH="[Class ",bG="qx_srcview",bx="[ ",bE="Error occurs by reading value!",K="<pre>",bJ="appear",bi="]</span>",bj="scroll",bt="<span class='ins_dom_string'>&quot;",L="</pre>",M="inspector.console.DomView",bm="<span class='ins_dom_object'>[";
qx.Class.define(M,{extend:qx.ui.core.Widget,statics:{SEARCH_TERM:"Search..."},construct:function(console){arguments.callee.base.call(this);
this._console=console;
this._filter=W;
this._setLayout(new qx.ui.layout.VBox());
this._htmlEmbed=new qx.ui.embed.Html(bV);
this._htmlEmbed.setOverflowY(bj);
this._add(this._htmlEmbed,{flex:1});
this.addListenerOnce(bJ,function(){this._htmlEmbed.getContentElement().getDomElement().id=bG;
},this);
this._breadCrumb=[];
},members:{clear:function(){this._htmlEmbed.setHtml(bV);
},setObject:function(m,name){this._iFrameWindow=qx.core.Init.getApplication().getIframeWindowObject();
this._breadCrumb=[];
var p=name.split(bP);
for(var i=0;i<p.length-1;i++){var q=W;
for(var j=0;j<=i;j++){q+=p[j];
if(j!=i){q+=bP;
}}var n=eval(q);
this._breadCrumb[i]={object:n,name:p[i]};
}name=p[p.length-1];
this._htmlEmbed.setHtml(this._getHtmlToObject(m,i,name));
},setObjectByIndex:function(r,s){this._filter=W;

try{if(s){var u=this._breadCrumb[r].object[s];
for(var i=0;i<this._breadCrumb.length;i++){if(this._breadCrumb[i].object==u){this._htmlEmbed.setHtml(this._getHtmlToObject(u,i,s));
this._htmlEmbed.getContentElement().scrollToY(0);
return ;
}}this._htmlEmbed.setHtml(this._getHtmlToObject(u,(r)+1,s));
this._htmlEmbed.getContentElement().scrollToY(0);
}else{var u=this._breadCrumb[r].object;
var t=this._breadCrumb[r].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(u,r,t));
this._htmlEmbed.getContentElement().scrollToY(0);
this._breadCrumb.splice(r+1,this._breadCrumb.length-r+1);
}}catch(e){alert("Can not select this Object: "+e);
}},filter:function(g){this._filter=g;
if(this._breadCrumb.length>0){var h=this._breadCrumb.length-1;
var k=this._breadCrumb[h].object;
var name=this._breadCrumb[h].name;
this._htmlEmbed.setHtml(this._getHtmlToObject(k,h,name));
}},getFilter:function(){if(this._filter==W){return inspector.console.DomView.SEARCH_TERM;
}else{return this._filter;
}},getCurrentSelectedClassname:function(){if(this._breadCrumb.length>0){var J=this._breadCrumb[this._breadCrumb.length-1].object;
if(J.classname!=undefined){if(qx.Class.isDefined(J.classname)||qx.Interface.isDefined(J.classname)||qx.Mixin.isDefined(J.classname)||qx.Theme.isDefined(J.classname)){return J.classname;
}}}return null;
},_getHtmlToObject:function(o,A,name){var E=new qx.util.StringBuilder();
if(name==undefined){var name=bl;
}this._breadCrumb[A]={object:o,name:name};
E.add(this._getReturnPath(A));
var G=true;
var I=this._sortAndFilterProperties(o);
E.add(ba);
for(var i=0;i<I.length;i++){G=false;
E.add(W);
if(!isNaN(I[i].key)){var B=bO;
}else{var B=bg;
}try{I[i].value instanceof this._iFrameWindow.Object;
}catch(c){var D=qx.util.ResourceManager.getInstance().toUri(U);
E.add(O+B+Q+D+V+this._console.escapeHtml(I[i].key)+S);
E.add(bU+I[i].value+bX);
continue;
}if(!(I[i].value instanceof this._iFrameWindow.Object)&&I[i].value!=this._iFrameWindow.window&&I[i].value!=this._iFrameWindow.document){var D=qx.util.ResourceManager.getInstance().toUri(U);
E.add(O+B+Q+D+V+this._console.escapeHtml(I[i].key)+S);
if(I[i].value==null){E.add(bU+I[i].value+bX);
}else if(typeof I[i].value==bW){E.add(bI+this._console.escapeHtml(I[i].value)+bF);
}else{E.add(bo+I[i].value+T);
}}else{if(I[i].value instanceof this._iFrameWindow.Function){var C=I[i].value.toString();
if(C.search(/native code/)!=-1){continue;
}}var H=null;

if(H==null){H=new qx.util.StringBuilder();
}else{H.clear();
}if(I[i].value!=o){var D=qx.util.ResourceManager.getInstance().toUri(bv);
H.add(O+B+X+P+A+bR+I[i].key+bT+Q+D+V+this._console.escapeHtml(I[i].key)+bu);
}if(I[i].value==o){var D=qx.util.ResourceManager.getInstance().toUri(U);
E.add(bQ+D+V+I[i].key+S);
E.add(bd);
}else if(I[i].value instanceof this._iFrameWindow.Function){E.add(H.get());
if(I[i].value.toString().substr(0,7)==bH){E.add(bS+this._getObject(I[i].value,A,I[i].key)+T);
}else{E.add(bN+this._getObject(I[i].value,A,I[i].key)+T);
}}else{try{var F=this._getObject(I[i].value,A,I[i].key);
E.add(H.get());
E.add(bS+F+T);
}catch(ca){var D=qx.util.ResourceManager.getInstance().toUri(U);
E.add(bQ+D+V+I[i].key+S);
E.add(bk);
}}}}E.add(bh);
if(G){E.add(bz);
}E.add(this._getFunctionCode(o));
return E.get();
},_getFunctionCode:function(o){if(o instanceof this._iFrameWindow.Function&&!o.hasOwnProperty(bD)){var z=o.toString();
z=K+qx.dev.Tokenizer.javaScriptToHtml(z)+L;
return be+z+N;
}else{return W;
}},_sortAndFilterProperties:function(o){if(this._filter!=W){try{var cb=new RegExp(this._filter);
}catch(e){alert("Unable to filter: "+e);
}}var cc=[];
for(var cd in o){try{if(cb!=null){if(cb.test(cd)){cc.push({key:cd,value:o[cd]});
}}else{cc.push({key:cd,value:o[cd]});
}}catch(l){cc.push({key:cd,value:bE});
}}cc.sort(function(a,b){if(isNaN(a.key)||isNaN(b.key)){return ((a.key<b.key)?-1:((a.key>b.key)?1:0));
}else{return a.key-b.key;
}});
return cc;
},_getReturnPath:function(d){var f=new qx.util.StringBuilder();
f.add(bc);
for(var i=0;i<=d;i++){if(i==d){f.add(bB);
}else{f.add(bf+P+i+bn);
}f.add(this._breadCrumb[i].name);
f.add(R);
}f.add(N);
return f.get();
},_getObject:function(v,w,x){var y=new qx.util.StringBuilder();
y.add(bL+P+w+bR+x+bT+V);
if(v instanceof this._iFrameWindow.Function){if(v.toString().indexOf(bY)!=-1){y.add(v.toString().substring(0,v.toString().indexOf(bY)+1));
}else{y.add(v.toString());
}}else if(v instanceof this._iFrameWindow.Array){y.add(bx);
for(var j=0;j<2&&j<v.length;j++){if(v[j] instanceof this._iFrameWindow.Function){y.add(bM);
}else if(typeof v[j]==bW){y.add(bt+v[j]+Y);
}else if(v[j] instanceof this._iFrameWindow.Array){y.add(bm+v[j]+bi);
}else if(v[j] instanceof this._iFrameWindow.Object){y.add(bC+v[j]+R);
}else{y.add(bw+v[j]+R);
}if(j!=1&&j!=v.length-1){y.add(by);
}}if(v.length>2){y.add(bA+(v.length-2)+bb);
}else{y.add(br);
}}else if(v instanceof this._iFrameWindow.qx.core.Object){y.add(v+bp+v.toHashCode()+bs);
}else{y.add(v);
}y.add(bq);
return y.get();
}},destruct:function(){this._console=this._breadCrumb=null;
this._disposeObjects(bK);
}});
})();
(function(){var l="</span>",k="sym",j="nl",h="qxkey",g="ws",f=">",e="qqstr",d="<",c="qstr",b="linecomment",bg="ident",bf="keyword",be="regexp",bd="&",bc="|",bb="fullcomment",ba="atom",Y="\\r\\n|\\r|\\n",X="\\s*\\)*",W="\\s",s="^",t='["][^"]*["]',q="real",r="\\s*[,\\)]",o="<span class='string'>",p="[a-zA-Z_][a-zA-Z0-9_]*\\b",m="<span class='comment'>",n="[+-]?\\d+",w="\\s*\\(*\\s*",x="&nbsp;",F="qx.dev.Tokenizer",D="\\t",M="\\s*\\)*\\s*\\)",H="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",S="\\)*\\.(?:test|exec)\\s*\\(\\s*",Q="<span class='regexp'>",z="int",V="'>",U="<span class='",T="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",y=".",B="\\s*\\)*\\s*?,?",C="[\\(,]\\s*",E="<span class='ident'>",G="g",I="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",N="\\/\\*(?:.|[\\n\\r])*?\\*\\/",R="\n",u="$",v="['][^']*[']",A="tab",L="\\/\\/.*?[\\n\\r$]",K="<br>",J=" ",P="(?::|=|\\?)\\s*\\(*\\s*",O="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bh){var bL={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bB={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bx={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bt=function(bT){return new RegExp(s+bT+u);
};
var bE=L;
var bu=N;
var bo=p;
var bw=n;
var br=I;
var bz=t;
var by=v;
var bm=D;
var bH=Y;
var bJ=W;
var bs=T;
var bv=[O+bs+M,H+bs+B,w+bs+S,P+bs+X,C+bs+r].join(bc);
var bF=bt(bE);
var bp=bt(bu);
var bC=bt(bo);
var bl=bt(bw);
var bI=bt(br);
var bk=bt(bz);
var bj=bt(by);
var bD=bt(bm);
var bq=bt(bH);
var bi=bt(bJ);
var bn=bt(bv);
var bA=new RegExp([bE,bu,bo,bw,br,bz,by,by,bm,bH,bJ,bv,y].join(bc),G);
var bG=[];
var a=bh.match(bA);

for(var i=0;i<a.length;i++){var bK=a[i];

if(bK.match(bF)){bG.push({type:b,value:bK});
}else if(bK.match(bp)){bG.push({type:bb,value:bK});
}else if(bK.match(bn)){bG.push({type:be,value:bK});
}else if(bK.match(bj)){bG.push({type:c,value:bK});
}else if(bK.match(bk)){bG.push({type:e,value:bK});
}else if(bL[bK]){bG.push({type:bf,value:bK});
}else if(bB[bK]){bG.push({type:ba,value:bK});
}else if(bx[bK]){bG.push({type:h,value:bK});
}else if(bK.match(bC)){bG.push({type:bg,value:bK});
}else if(bK.match(bI)){bG.push({type:q,value:bK});
}else if(bK.match(bl)){bG.push({type:z,value:bK});
}else if(bK.match(bq)){bG.push({type:j,value:bK});
}else if(bK.match(bt(bi))){bG.push({type:g,value:bK});
}else if(bK.match(bD)){bG.push({type:A,value:bK});
}else if(bK==f){bG.push({type:k,value:f});
}else if(bK==d){bG.push({type:k,value:d});
}else if(bK==bd){bG.push({type:k,value:bd});
}else{bG.push({type:k,value:bK});
}}return bG;
},javaScriptToHtml:function(bM){var bQ=qx.dev.Tokenizer.tokenizeJavaScript(bM);
var bP=new qx.util.StringBuilder();

for(var i=0;i<bQ.length;i++){var bR=bQ[i];
var bO=qx.bom.String.escape(bR.value);

switch(bR.type){case be:bP.add(Q,bO,l);
break;
case bg:bP.add(E,bO,l);
break;
case b:case bb:bP.add(m,bO,l);
break;
case c:case e:bP.add(o,bO,l);
break;
case bf:case ba:case h:bP.add(U,bR.type,V,bO,l);
break;
case j:var bN=qx.bom.client.Engine.MSHTML?K:R;
bP.add(bN);
break;
case g:var bS=qx.bom.client.Engine.MSHTML?x:J;
bP.add(bS);
break;
default:bP.add(bO);
}}return bP.get();
}}});
})();


qx.$$loader.init();

