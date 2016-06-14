(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"widgetbrowser.Application","qx.revision":"26649","qx.theme":"qx.theme.Simple","qx.version":"1.4"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"widgetbrowser.Application","qx.debug":false,"qx.nativeScrollBars":true,"qx.revision":"26649","qx.theme":"qx.theme.Simple","qx.version":"1.4"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.4"},"widgetbrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"basic":[0,1,32],"boot":[0],"control":[0,1,2,3,4,5,8,9,10,11,14,26],"embed":[0,1,28],"embedframe":[0,1,8,16,20,24],"form":[0,1,3,5,6,8,10,11,13,14,17,19,20,22],"list":[0,1,3,12,16,17,18,29],"misc":[0,1,2,31],"table":[0,1,2,3,4,5,6,7,9,12,15,23],"toolbar":[0,1,6,7,10,13,27],"tree":[0,1,18,21],"treevirtual":[0,1,2,3,4,5,6,7,9,12,15,25],"window":[0,1,2,4,11,19,30]},
  uris : [["__out__:widgetbrowser.simple.js"],["__out__:widgetbrowser.simple-0.js"],["__out__:widgetbrowser.simple-1.js"],["__out__:widgetbrowser.simple-2.js"],["__out__:widgetbrowser.simple-3.js"],["__out__:widgetbrowser.simple-4.js"],["__out__:widgetbrowser.simple-5.js"],["__out__:widgetbrowser.simple-6.js"],["__out__:widgetbrowser.simple-7.js"],["__out__:widgetbrowser.simple-8.js"],["__out__:widgetbrowser.simple-9.js"],["__out__:widgetbrowser.simple-10.js"],["__out__:widgetbrowser.simple-11.js"],["__out__:widgetbrowser.simple-12.js"],["__out__:widgetbrowser.simple-13.js"],["__out__:widgetbrowser.simple-14.js"],["__out__:widgetbrowser.simple-15.js"],["__out__:widgetbrowser.simple-16.js"],["__out__:widgetbrowser.simple-17.js"],["__out__:widgetbrowser.simple-18.js"],["__out__:widgetbrowser.simple-19.js"],["__out__:widgetbrowser.simple-20.js"],["__out__:widgetbrowser.simple-21.js"],["__out__:widgetbrowser.simple-22.js"],["__out__:widgetbrowser.simple-23.js"],["__out__:widgetbrowser.simple-24.js"],["__out__:widgetbrowser.simple-25.js"],["__out__:widgetbrowser.simple-26.js"],["__out__:widgetbrowser.simple-27.js"],["__out__:widgetbrowser.simple-28.js"],["__out__:widgetbrowser.simple-29.js"],["__out__:widgetbrowser.simple-30.js"],["__out__:widgetbrowser.simple-31.js"]],
  urisBefore : [],
  packageHashes : {"0":"f76b9070bac4","1":"91f919462a1e","2":"e0df6732c69d","3":"11653e679347","4":"875ecafbed3e","5":"f0d3f4779725","6":"7f6daa01569a","7":"afaa3e035a6c","8":"db3ffed5d2dc","9":"e4eb798b788f","10":"218f63bfa49a","11":"6c3b61df6de2","12":"e059f1d8cf72","13":"6f341c0c4d69","14":"17364d48c6ee","15":"2e2cff91cf06","16":"c732c41b805b","17":"9c14a5f4da34","18":"dc51ff3c07f3","19":"5451a810ef49","20":"357c5a6f84d6","21":"69a3b2d0b4f4","22":"a23398be13f2","23":"918cc5d5eaae","24":"233114f1a281","25":"88deff798caa","26":"1ba7fe4a6fb6","27":"0e69ae1d6435","28":"2cc1d377a062","29":"a9543c290b34","30":"b2d95b112675","31":"70be4270517b","32":"e58460f18e37"},
  boot : "boot",
  closureParts : {"basic":true,"control":true,"embed":true,"embedframe":true,"form":true,"list":true,"misc":true,"table":true,"toolbar":true,"tree":true,"treevirtual":true,"window":true},
  bootIsInline : true,
  addNoCacheParam : false,
  
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
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
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

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['f76b9070bac4']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"}},"resources":{"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/helper.js":"widgetbrowser","widgetbrowser/loading66.gif":[66,66,"gif","widgetbrowser"]},"translations":{}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var be=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){be=false;
}
if(qxvariants&&qxvariants["qx.debug"]=="off"){be=false;
}return be;
})(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bf,bg,bh,name,bi){var bl=bh.prototype;
var bk=new Function;
bk.prototype=bl;
var bj=new bk;
bf.prototype=bj;
bj.name=bj.classname=name;
bj.basename=bi;
bg.base=bf.superclass=bh;
bg.self=bf.constructor=bj.constructor=bf;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bm){return bm.__count__;
},"default":function(bn){var length=0;

for(var bo in bn){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bp,bq,br){if(br===undefined){br=true;
}
for(var bs in bq){if(br||bp[bs]===undefined){bp[bs]=bq[bs];
}}return bp;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bt){var bu=[];
var bw=Object.prototype.hasOwnProperty;

for(var bx in bt){if(bw.call(bt,bx)){bu.push(bx);
}}var bv=qx.Bootstrap.__a;

for(var i=0,a=bv,l=a.length;i<l;i++){if(bw.call(bt,a[i])){bu.push(a[i]);
}}return bu;
},"default":function(by){var bz=[];
var bA=Object.prototype.hasOwnProperty;

for(var bB in by){if(bA.call(by,bB)){bz.push(bB);
}}return bz;
}})[typeof (Object.keys)==
L?B:
(function(){for(var bC in {toString:1}){return bC;
}})()!==m?u:j],getKeysAsString:function(bD){var bE=qx.Bootstrap.getKeys(bD);

if(bE.length==0){return p;
}return g+bE.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bF,self,bG){var bH=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bI=Array.prototype.slice.call(arguments,0,arguments.length);
return bF.apply(self,bH.concat(bI));
};
},firstUp:function(bJ){return bJ.charAt(0).toUpperCase()+bJ.substr(1);
},firstLow:function(bK){return bK.charAt(0).toLowerCase()+bK.substr(1);
},getClass:function(bL){var bM=Object.prototype.toString.call(bL);
return (qx.Bootstrap.__b[bM]||bM.slice(8,-1));
},isString:function(bN){return (bN!==null&&(typeof bN===F||qx.Bootstrap.getClass(bN)==d||bN instanceof String||(!!bN&&!!bN.$$isString)));
},isArray:function(bO){return (bO!==null&&(bO instanceof Array||(bO&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bO.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bO)==f||(!!bO&&!!bO.$$isArray)));
},isObject:function(bP){return (bP!==undefined&&bP!==null&&qx.Bootstrap.getClass(bP)==h);
},isFunction:function(bQ){return qx.Bootstrap.getClass(bQ)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bR,name){while(bR){if(bR.$$properties&&bR.$$properties[name]){return bR.$$properties[name];
}bR=bR.superclass;
}return null;
},hasProperty:function(bS,name){return !!qx.Bootstrap.getPropertyDefinition(bS,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(bU,name){return !!qx.Bootstrap.getEventType(bU,name);
},getByInterface:function(bV,bW){var bX,i,l;

while(bV){if(bV.$$implements){bX=bV.$$flatImplements;

for(i=0,l=bX.length;i<l;i++){if(bX[i]===bW){return bV;
}}}bV=bV.superclass;
}return null;
},hasInterface:function(bY,ca){return !!qx.Bootstrap.getByInterface(bY,ca);
},getMixins:function(cb){var cc=[];

while(cb){if(cb.$$includes){cc.push.apply(cc,cb.$$flatIncludes);
}cb=cb.superclass;
}return cc;
},$$logs:[],debug:function(cd,ce){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(cf,cg){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ch,ci){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cj,ck){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cl){}}});
})();
(function(){var k="xhr",j="Microsoft.XMLHTTP",i="",h="file:",g="https:",f="webkit",e="gecko",d="activex",c="opera",b=".",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var l;
var o=qx.bom.client.Engine.getVersion().split(b);
var m=0;
var p=0;
var n=0;
if(o[0]){m=o[0];
}if(o[1]){p=o[1];
}if(o[2]){n=o[2];
}if(window.maxConnectionsPerServer){l=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==c){l=8;
}else if(qx.bom.client.Engine.getName()==f){l=4;
}else if(qx.bom.client.Engine.getName()==e&&((m>1)||((m==1)&&(p>9))||((m==1)&&(p==9)&&(n>=1)))){l=6;
}else{l=2;
}return l;
},getSsl:function(){return window.location.protocol===g;
},getXmlHttpRequest:function(){var q=window.ActiveXObject?
(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():
(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,h){if(h){if(h.include&&!(h.include instanceof Array)){h.include=[h.include];
}var k=h.statics?h.statics:{};
qx.Bootstrap.setDisplayNames(k,name);

for(var j in k){if(k[j] instanceof Function){k[j].$$mixin=k;
}}if(h.construct){k.$$constructor=h.construct;
qx.Bootstrap.setDisplayName(h.construct,name,e);
}
if(h.include){k.$$includes=h.include;
}
if(h.properties){k.$$properties=h.properties;
}
if(h.members){k.$$members=h.members;
qx.Bootstrap.setDisplayNames(h.members,name+f);
}
for(var j in k.$$members){if(k.$$members[j] instanceof Function){k.$$members[j].$$mixin=k;
}}
if(h.events){k.$$events=h.events;
}
if(h.destruct){k.$$destructor=h.destruct;
qx.Bootstrap.setDisplayName(h.destruct,name,b);
}}else{var k={};
}k.$$type=a;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
this.$$registry[name]=k;
return k;
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
},isCompatible:function(u,v){var w=qx.Bootstrap.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",T="10.0",S="10.4",R="2003",Q=")",P="iPhone",O="android",N="unix",M="ce",L="7",K="SymbianOS",q="MacPPC",r="iPod",o="\.",p="Win64",m="linux",n="me",k="Macintosh",l="Android",s="Windows",t="ios",A="vista",y="(",E="win",C="Linux",G="BSD",F="iPad",v="X11",J="xp",I="symbian",H="qx.bom.client.OperatingSystem",u="g",w="Win32",x="osx",z="|",B="nt4",D="MacIntel";
qx.Bootstrap.define(H,{statics:{getName:function(){var U=navigator&&navigator.platform;

if(!U){return j;
}
if(U.indexOf(s)!=-1||U.indexOf(w)!=-1||U.indexOf(p)!=-1){return E;
}else if(U.indexOf(k)!=-1||U.indexOf(q)!=-1||U.indexOf(D)!=-1){return x;
}else if(U.indexOf(r)!=-1||U.indexOf(P)!=-1||U.indexOf(F)!=-1){return t;
}else if(U.indexOf(C)!=-1){return m;
}else if(U.indexOf(v)!=-1||U.indexOf(G)!=-1){return N;
}else if(U.indexOf(l)!=-1){return O;
}else if(U.indexOf(K)!=-1){return I;
}return j;
},__e:{"Windows NT 6.1":L,"Windows NT 6.0":A,"Windows NT 5.2":R,"Windows NT 5.1":J,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":B,"Win 9x 4.90":n,"Windows CE":M,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":T,"Mac OS X 10.0":T},getVersion:function(){var X=[];

for(var W in this.__e){X.push(W);
}var Y=new RegExp(y+X.join(z).replace(/\./g,o)+Q,u);
var V=Y.exec(navigator.userAgent);

if(V&&V[1]){return qx.bom.client.OperatingSystem.__e[V[1]];
}return j;
}}});
})();
(function(){var n="-",m="",l="qx.bom.client.Locale",k="LOCALE",j="\n",h="VARIANT",g="Please check the API documentation of qx.core.Environment.",f="android",e="\nTrace:",d="' of '",a="'is deprecated: ",b="The constant '";
qx.Bootstrap.define(l,{statics:{LOCALE:"",VARIANT:"",getLocale:function(){var o=qx.bom.client.Locale.__f();
var p=o.indexOf(n);

if(p!=-1){o=o.substr(0,p);
}return o;
},getVariant:function(){var q=qx.bom.client.Locale.__f();
var s=m;
var r=q.indexOf(n);

if(r!=-1){s=q.substr(r+1);
}return s;
},__f:function(){var t=(navigator.userLanguage||navigator.language||m);
if(qx.bom.client.OperatingSystem.getName()==f){var u=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(u){t=u[0];
}}return t.toLowerCase();
}},defer:function(v){v.LOCALE=v.getLocale();
v.VARIANT=v.getVariant();
if(qx.Bootstrap.DEBUG){var w=[k,h];

for(var i=0;i<w.length;i++){if(v.__defineGetter__){var x=v[w[i]];
v.__defineGetter__(w[i],qx.Bootstrap.bind(function(y,c){var z=b+y+d+v.classname+a+g;

if(qx.dev&&qx.dev.StackTrace){z+=e+qx.dev.StackTrace.getStackTrace().join(j);
}qx.Bootstrap.warn(z);
return c;
},v,w[i],x));
}}}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(f).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(u);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(b);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(w);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(m);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(t);
},getVideo:function(){return !!document.createElement(r).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(i);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(d);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(n);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(A){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(B){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===y);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(h,p);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,o)||document.implementation.hasFeature(g,x));
},getVml:function(){return qx.bom.client.Engine.getName()==q;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(C){var D=new Image();
D.onload=D.onerror=function(){window.setTimeout(function(){C.call(null,(D.width==1&&D.height==1));
},0);
};
D.src=c;
}}});
})();
(function(){var p="",o="silverlight",n="wmv",m="mshtml",l="quicktime",k="divx",j="Windows Media",h="qx.bom.client.Plugin",g="WMPlayer.OCX.7",f="Silverlight",c="QuickTimeCheckObject.QuickTimeCheck.1",e="QuickTime",d="npdivx.DivXBrowserPlugin.1",b="DivX Web Player",a="AgControl.AgControl";
qx.Bootstrap.define(h,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__g:{quicktime:{plugin:e,control:c},wmv:{plugin:j,control:g},divx:{plugin:b,control:d},silverlight:{plugin:f,control:a}},getQuicktimeVersion:function(){var q=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__h(q.control,q.plugin);
},getWindowsMediaVersion:function(){var r=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__h(r.control,r.plugin);
},getDivXVersion:function(){var s=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__h(s.control,s.plugin);
},getSilverlightVersion:function(){var t=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__h(t.control,t.plugin);
},getQuicktime:function(){var u=qx.bom.client.Plugin.__g[l];
return qx.bom.client.Plugin.__i(u.control,u.plugin);
},getWindowsMedia:function(){var v=qx.bom.client.Plugin.__g[n];
return qx.bom.client.Plugin.__i(v.control,v.plugin);
},getDivX:function(){var w=qx.bom.client.Plugin.__g[k];
return qx.bom.client.Plugin.__i(w.control,w.plugin);
},getSilverlight:function(){var x=qx.bom.client.Plugin.__g[o];
return qx.bom.client.Plugin.__i(x.control,x.plugin);
},__h:function(y,z){var A=qx.bom.client.Plugin.__i(y,z);
if(!A){return p;
}if(qx.bom.client.Engine.getName()==m){var B=new ActiveXObject(y);

try{var E=B.versionInfo;

if(E!=undefined){return E;
}E=B.version;

if(E!=undefined){return E;
}E=B.settings.version;

if(E!=undefined){return E;
}}catch(G){return p;
}return p;
}else{var F=navigator.plugins;
var D=/([0-9]\.[0-9])/g;

for(var i=0;i<F.length;i++){var C=F[i];

if(C.name.indexOf(z)!==-1){if(D.test(C.name)||D.test(C.description)){return RegExp.$1;
}else{return p;
}return p;
}}}},__i:function(H,I){if(qx.bom.client.Engine.getName()==m){var J=window.ActiveXObject;

if(!J){return false;
}
try{new ActiveXObject(H);
}catch(L){return false;
}return true;
}else{var K=navigator.plugins;

if(!K){return false;
}var name;

for(var i=0;i<K.length;i++){name=K[i].name;

if(name.indexOf(I)!==-1){return true;
}}return false;
}}}});
})();
(function(){var l="",k="function",j="gecko",h=".",g="[object Opera]",f="[^\\.0-9]",e="4.0",d="\nTrace:",b="1.9.0.0",a="WEBKIT",I="Please check the API documentation of qx.core.Environment.",H="9.0",G="UNKNOWN_VERSION",F="GECKO",E="8.0",D="FULLVERSION",C="Gecko",B="OPERA",A="AppleWebKit/",z="'is deprecated: ",s="NAME",t="UNKNOWN_ENGINE",q="MSHTML",r="VERSION",o="DOCUMENT_MODE",p="' of '",m="opera",n="mshtml",u="\n",v="The constant '",x="webkit",w="5.0",y="qx.bom.client.Engine";
qx.Bootstrap.define(y,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,getVersion:function(){var M=window.navigator.userAgent;
var K=l;

if(qx.bom.client.Engine.__j()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(M)){K=RegExp.$1+h+RegExp.$2;

if(RegExp.$3!=l){K+=h+RegExp.$3;
}}}else if(qx.bom.client.Engine.__k()){if(/AppleWebKit\/([^ ]+)/.test(M)){K=RegExp.$1;
var L=RegExp(f).exec(K);

if(L){K=K.slice(0,L.index);
}}}else if(qx.bom.client.Engine.__l()){if(/rv\:([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
}}else if(qx.bom.client.Engine.__m()){if(/MSIE\s+([^\);]+)(\)|;)/.test(M)){K=RegExp.$1;
if(K<8&&/Trident\/([^\);]+)(\)|;)/.test(M)){if(RegExp.$1==e){K=E;
}else if(RegExp.$1==w){K=H;
}}}}else{var J=window.qxFail;

if(J&&typeof J===k){K=J().FULLVERSION;
}else{K=b;
qx.Bootstrap.warn("Unsupported client: "+M+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return K;
},getName:function(){var name;

if(qx.bom.client.Engine.__j()){name=m;
}else if(qx.bom.client.Engine.__k()){name=x;
}else if(qx.bom.client.Engine.__l()){name=j;
}else if(qx.bom.client.Engine.__m()){name=n;
}else{var N=window.qxFail;

if(N&&typeof N===k){name=N().NAME;
}else{name=j;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__j:function(){return window.opera&&Object.prototype.toString.call(window.opera)==g;
},__k:function(){return window.navigator.userAgent.indexOf(A)!=-1;
},__l:function(){return window.controllers&&window.navigator.product===C;
},__m:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(O){O.NAME=O.getName();
O.FULLVERSION=O.getVersion();

if(O.FULLVERSION==l){O.UNKNOWN_VERSION=true;
}
if(O.__j()){O.OPERA=true;

if(O.FULLVERSION==l){O.FULLVERSION="9.6.0";
}}else if(O.__k()){O.WEBKIT=true;

if(O.FULLVERSION==l){O.FULLVERSION="525.26";
}}else if(O.__l()){O.GECKO=true;

if(O.FULLVERSION==l){O.FULLVERSION="1.9.0.0";
}}else if(O.__m()){O.MSHTML=true;

if(document.documentMode){O.DOCUMENT_MODE=document.documentMode;
}}else{var P=window.qxFail;

if(P&&typeof P===k){if(P().NAME){O[P().NAME.toUpperCase()]=true;
}}else{O.GECKO=true;
O.UNKNOWN_ENGINE=true;
O.UNKNOWN_VERSION=true;
}}O.VERSION=parseFloat(O.FULLVERSION);
if(qx.Bootstrap.DEBUG){var Q=[s,D,r,B,a,F,q,t,G,o];

for(var i=0;i<Q.length;i++){if(O.__defineGetter__){var R=O[Q[i]];
O.__defineGetter__(Q[i],qx.Bootstrap.bind(function(S,c){var T=v+S+p+O.classname+z+I;

if(qx.dev&&qx.dev.StackTrace){T+=d+qx.dev.StackTrace.getStackTrace().join(u);
}qx.Bootstrap.warn(T);
return c;
},O,Q[i],R));
}}}}});
})();
(function(){var l="",k="mshtml",j="msie",h=")(/| )([0-9]+\.[0-9])",g="(",f="ce",e="CSS1Compat",d="android",b="operamini",a="\nTrace:",M="'is deprecated: ",L="Please check the API documentation of qx.core.Environment.",K="mobile chrome",J="iemobile",I="FULLVERSION",H="opera mobi",G="Mobile Safari",F="UNKNOWN",E="operamobile",D="ie",s="mobile safari",t="IEMobile|Maxthon|MSIE",q="NAME",r="qx.bom.client.Browser",o="opera mini",p="VERSION",m="' of '",n="opera",u="TITLE",v="\n",y="Opera Mini|Opera Mobi|Opera",x="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",A="The constant '",z="webkit",C="5.0",B="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",w="Mobile/";
qx.Bootstrap.define(r,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",getName:function(){var Q=navigator.userAgent;
var P=new RegExp(g+qx.bom.client.Browser.__n+h);
var O=Q.match(P);

if(!O){return l;
}var name=O[1].toLowerCase();
var N=qx.bom.client.Engine.getName();

if(N===z){if(name===d){name=K;
}else if(Q.indexOf(G)!==-1||Q.indexOf(w)!==-1){name=s;
}}else if(N===k){if(name===j){name=D;
if(qx.bom.client.OperatingSystem.getVersion()===f){name=J;
}}}else if(N===n){if(name===H){name=E;
}else if(name===o){name=b;
}}return name;
},getVersion:function(){var U=navigator.userAgent;
var T=new RegExp(g+qx.bom.client.Browser.__n+h);
var S=U.match(T);

if(!S){return l;
}var name=S[1].toLowerCase();
var R=S[3];
if(U.match(/Version(\/| )([0-9]+\.[0-9])/)){R=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==k){R=qx.bom.client.Engine.getVersion();

if(name===j&&qx.bom.client.OperatingSystem.getVersion()==f){R=C;
}}return R;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==k&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==e;
}},__n:{"webkit":x,"gecko":B,"mshtml":t,"opera":y}[qx.bom.client.Engine.getName()]},defer:function(V){V.NAME=V.getName();
V.FULLVERSION=V.getVersion();
V.VERSION=parseFloat(V.FULLVERSION);
V.TITLE=V.NAME+" "+V.VERSION;

if(V.NAME!==l){V.UNKNOWN=false;
}if(qx.Bootstrap.DEBUG){var W=[I,p,q,u,F];

for(var i=0;i<W.length;i++){if(V.__defineGetter__){var X=V[W[i]];
V.__defineGetter__(W[i],qx.Bootstrap.bind(function(Y,c){var ba=A+Y+m+V.classname+M+L;

if(qx.dev&&qx.dev.StackTrace){ba+=a+qx.dev.StackTrace.getStackTrace().join(v);
}qx.Bootstrap.warn(ba);
return c;
},V,W[i],X));
}}}}});
})();
(function(){var k="background",j="linear-gradient(0deg, white 0%, red 100%)",h="placeholder",g="content",f="div",e="OTextOverflow",d="MozBorderRadius",c="qx.bom.client.Css",b='m11',a="input",x="-moz-linear-gradient(0deg, white 0%, red 100%)",w="gradient",v="MozBoxShadow",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",s='WebKitCSSMatrix',r="WebkitBorderRadius",q="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",p="mshtml",o="WebkitBoxShadow",m="textOverflow",n="boxShadow",l="border";
qx.Bootstrap.define(c,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==p||!qx.bom.client.Browser.getQuirksMode();
return content?g:l;
},getTextOverflow:function(){return m in document.documentElement.style||e in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(a);
return h in i;
},getBorderRadius:function(){return t in document.documentElement.style||d in document.documentElement.style||r in document.documentElement.style;
},getBoxShadow:function(){return n in document.documentElement.style||v in document.documentElement.style||o in document.documentElement.style;
},getTranslate3d:function(){return s in window&&b in new WebKitCSSMatrix();
},getGradients:function(){var y;

try{y=document.createElement(f);
}catch(A){y=document.createElement();
}var z=[q,x,u,j];

for(var i=0;i<z.length;i++){try{y.style[k]=z[i];

if(y.style[k].indexOf(w)!=-1){return true;
}}catch(B){}}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var l=".",k="$1",j="",h="object",g="Shockwave Flash",f="undefined",e="REVISION",d="qx.bom.client.Flash",b="\nTrace:",a="ShockwaveFlash.ShockwaveFlash.7",H="STRICT_SECURITY_MODEL",G="osx",F="FULLVERSION",E="10.0.12",D="'is deprecated: ",C="win",B="ShockwaveFlash.ShockwaveFlash.6",A="VERSION",z="$version",y="' of '",s="EXPRESSINSTALL",t="6.0.65",q="mshtml",r="AVAILABLE",o="boolean",p="\n",m="always",n="Please check the API documentation of qx.core.Environment.",u="9.0.151",v="ShockwaveFlash.ShockwaveFlash",x="The constant '",w=",";
qx.Bootstrap.define(d,{statics:{AVAILABLE:false,FULLVERSION:"0.0.0",REVISION:"0",VERSION:0.0,EXPRESSINSTALL:false,STRICT_SECURITY_MODEL:false,isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()==q){if(!window.ActiveXObject){return j;
}var K=[0,0,0];
var J=false;

try{var L=new ActiveXObject(a);
}catch(N){try{var L=new ActiveXObject(B);
K=[6,0,21];
L.AllowScriptAccess=m;
}catch(O){if(K[0]==6){J=true;
}}
if(!J){try{L=new ActiveXObject(v);
}catch(P){}}}
if(!J&&typeof L==h){var I=L.GetVariable(z);

if(typeof I!=f){I=I.split(" ")[1].split(w);
K[0]=parseInt(I[0],10);
K[1]=parseInt(I[1],10);
K[2]=parseInt(I[2],10);
}}return K.join(l);
}else{if(!navigator.plugins||typeof navigator.plugins[g]!==h){return j;
}var K=[0,0,0];
var M=navigator.plugins[g].description;

if(typeof M!=f){M=M.replace(/^.*\s+(\S+\s+\S+$)/,k);
K[0]=parseInt(M.replace(/^(.*)\..*$/,k),10);
K[1]=parseInt(M.replace(/^.*\.(.*)\s.*$/,k),10);
K[2]=/r/.test(M)?parseInt(M.replace(/^.*r(.*)$/,k),10):0;
}return K.join(l);
}},getExpressInstall:function(){var R=qx.bom.client.Flash.getVersion();

if(R==j){return false;
}var Q=qx.bom.client.OperatingSystem.getName();
return (Q==C||Q==G)&&qx.bom.client.Flash.__o(t,R);
},getStrictSecurityModel:function(){var S=qx.bom.client.Flash.getVersion();

if(S==j){return false;
}var T=S.split(l);

if(T[0]<10){return qx.bom.client.Flash.__o(u,S);
}else{return qx.bom.client.Flash.__o(E,S);
}},_cachedSupportsVersion:{},supportsVersion:function(U){if(typeof this._cachedSupportsVersion[U]===o){return this._cachedSupportsVersion[U];
}else{var X=U.split(l);
var W=this.FULLVERSION.split(l);

for(var i=0;i<X.length;i++){var V=parseInt(W[i],10)-parseInt(X[i],10);

if(V>0){return (this._cachedSupportsVersion[U]=true);
}else if(V<0){return (this._cachedSupportsVersion[U]=false);
}}return (this._cachedSupportsVersion[U]=true);
}},__o:function(Y,ba){var bd=Y.split(l);
var bc=ba||qx.bom.client.Flash.getVersion();
bc=bc.split(l);

for(var i=0;i<bd.length;i++){var bb=parseInt(bc[i],10)-parseInt(bd[i],10);

if(bb>0){return true;
}else if(bb<0){return false;
}}return true;
}},defer:function(be){be.FULLVERSION=be.getVersion();
be.VERSION=parseFloat(be.FULLVERSION);
be.AVAILABLE=be.isAvailable();
var bh=be.FULLVERSION.split(l);
be.REVISION=bh[bh.length-1];
be.STRICT_SECURITY_MODEL=be.getStrictSecurityModel();
be.EXPRESSINSTALL=be.getExpressInstall();
if(qx.Bootstrap.DEBUG){var bf=[F,A,r,e,H,s];

for(var i=0;i<bf.length;i++){if(be.__defineGetter__){var bg=be[bf[i]];
be.__defineGetter__(bf[i],qx.Bootstrap.bind(function(bi,c){var bj=x+bi+y+be.classname+D+n;

if(qx.dev&&qx.dev.StackTrace){bj+=b+qx.dev.StackTrace.getStackTrace().join(p);
}qx.Bootstrap.warn(bj);
return c;
},be,bf[i],bg));
}}}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var m="ipod",l="g",k="xbox",j="pc",i="\.",h="(",g=")",f="iPhone",e="|",d="qx.bom.client.Device",a="wii",c="ipad",b="ds";
qx.Bootstrap.define(d,{statics:{__p:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__p){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__p[n[1]];
}return j;
}}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var o="on",n="off",m="os.name",l="html.storage.local",k="plugin.silverlight.version",j="os.version",h="html.xul",g="plugin.windowsmedia.version",f="html.video.ogg",e="default",bF="html.xpath",bE="plugin.flash.express",bD="plugin.windowsmedia",bC="html.webworker",bB="phonegap",bA="browser.quirksmode",bz="browser.name",by="plugin.silverlight",bx="event.pointer",bw="qx.aspects",v="plugin.gears",w="io.ssl",t="css.translate3d",u="html.classlist",r="locale.variant",s="css.textoverflow",p="qx.debug",q="html.video",D="plugin.flash",E="css.boxshadow",W="event.touch",S="html.storage.session",bf="plugin.divx",ba="css.boxmodel",br="plugin.flash.version",bl="qx.allowUrlSettings",L="css.gradients",bv="browser.documentmode",bt="html.vml",bs="html.canvas",J="html.audio",O="html.audio.mp3",Q="css.borderradius",U="ecmascript.objectcount",X="locale",bb="html.audio.au",bh="html.geolocation",bn="qx.mobile.emulatetouch",x="qx.dynlocale",y="plugin.quicktime",N="engine.version",be="io.maxrequests",bd="engine.name",bc="html.audio.aif",bj="html.audio.ogg",bi="qx.mobile.nativescroll",Y="plugin.divx.version",bg="html.video.h264",a="css.placeholder",bm="plugin.quicktime.version",z="|",A="browser.version",T="io.xhr",b="html.audio.wav",d="device.name",I="phonegap.notification",B="html.svg",C="html.dataurl",G="html.video.webm",V="plugin.flash.strictsecurity",bp="qx.core.Environment",bo="qx.debug.databinding",P="true",bq="qxenv",K="qx.propertyDebugLevel",bk="qx.dynamicmousewheel",F=":",H="false",c="&",R="qx.allowUrlVariants",M="qx.bom.htmlarea.HtmlArea.debug",bu="qx.globalErrorHandling";
qx.Bootstrap.define(bp,{statics:{_checks:{},_asyncChecks:{},__q:{},get:function(bG){if(this.__q[bG]!=undefined){return this.__q[bG];
}var bH=this._checks[bG];

if(bH){var bI=bH();
this.__q[bG]=bI;
return bI;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bG+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bJ,bK,self){var bM=this;

if(this.__q[bJ]!=undefined){window.setTimeout(function(){bK.call(self,bM.__q[bJ]);
},0);
return;
}var bL=this._asyncChecks[bJ];

if(bL){bL(function(bN){bM.__q[bJ]=bN;
bK.call(self,bN);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bJ+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bO,bP){return this.__r(this.get(bO),bP);
},selectAsync:function(bQ,bR,self){this.getAsync(bQ,function(bS){var bT=this.__r(bQ,bR);
bT.call(self,bS);
},this);
},__r:function(bU,bV){var bX=bV[bU];

if(bV.hasOwnProperty(bU)){return bX;
}for(var bW in bV){if(bW.indexOf(z)!=-1){var bY=bW.split(z);

for(var i=0;i<bY.length;i++){if(bY[i]==bU){return bV[bW];
}}}}if(bX===true&&bV[o]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'on' to 'true'.");
qx.Bootstrap.trace(this);
}return bV[o];
}if(bX===false&&bV[n]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+bU+"' is a boolean value. "+"Please change your select map from 'off' to 'false'.");
qx.Bootstrap.trace(this);
}return bV[n];
}
if(bV[e]!==undefined){return bV[e];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bU+'" ('+(typeof bU)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bV)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(ca){delete this.__q[ca];
},add:function(cb,cc){if(this._checks[cb]==undefined){if(cc instanceof Function){this._checks[cb]=cc;
}else{this._checks[cb]=this.__u(cc);
}}},addAsync:function(cd,ce){if(this._checks[cd]==undefined){this._asyncChecks[cd]=ce;
}},_initDefaultQxValues:function(){this.add(bl,function(){return false;
});
this.add(R,function(){return false;
});
this.add(K,function(){return 0;
});
this.add(p,function(){return true;
});
this.add(bw,function(){return false;
});
this.add(x,function(){return true;
});
this.add(bn,function(){return false;
});
this.add(bi,function(){return false;
});
this.add(bk,function(){return true;
});
this.add(bo,function(){return false;
});
},__s:function(){if(window.qxsettings){for(var cg in window.qxsettings){var cf=window.qxsettings[cg];

if(cg==M||cg==bu){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(window.qxvariants){for(var cg in window.qxvariants){var cf=window.qxvariants[cg];

if(cg==bw||cg==p||cg==x||cg==bn||cg==bi){if(cf==o){cf=true;
}else if(cf==n){cf=false;
}}this._checks[cg]=this.__u(cf);
}}if(qx&&qx.$$environment){for(var cg in qx.$$environment){var cf=qx.$$environment[cg];
this._checks[cg]=this.__u(cf);
}}},__t:function(){if(window.document&&window.document.location){var ch=window.document.location.search.slice(1).split(c);

for(var i=0;i<ch.length;i++){var cj=ch[i].split(F);

if(cj.length!=3||cj[0]!=bq){continue;
}var ck=cj[1];
var ci=decodeURIComponent(cj[2]);
if(ci==P){ci=true;
}else if(ci==H){ci=false;
}else if(/^(\d|\.)+$/.test(ci)){ci=parseFloat(ci);
}this._checks[ck]=this.__u(ci);
}}},__u:function(cl){return qx.Bootstrap.bind(function(cm){return cm;
},null,cl);
},useCheck:function(cn){return true;
},_initChecksMap:function(){if(this.useCheck(N)){this._checks[N]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Engine.getName;
}if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Browser.getName;
}
if(this.useCheck(A)){this._checks[A]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(d)){this._checks[d]=qx.bom.client.Device.getName;
}if(this.useCheck(X)){this._checks[X]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(r)){this._checks[r]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(m)){this._checks[m]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(v)){this._checks[v]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(y)){this._checks[y]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(by)){this._checks[by]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(D)){this._checks[D]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(br)){this._checks[br]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Flash.getStrictSecurityModel;
}if(this.useCheck(be)){this._checks[be]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(w)){this._checks[w]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(T)){this._checks[T]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Event.getPointer;
}if(this.useCheck(U)){this._checks[U]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(J)){this._checks[J]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(O)){this._checks[O]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(q)){this._checks[q]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(G)){this._checks[G]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(l)){this._checks[l]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(u)){this._checks[u]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(B)){this._checks[B]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.Html.getVml;
}
if(this.useCheck(C)){this._asyncChecks[C]=qx.bom.client.Html.getDataUrl;
}if(this.useCheck(s)){this._checks[s]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(E)){this._checks[E]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(L)){this._checks[L]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(t)){this._checks[t]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(I)){this._checks[I]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(co){co._initDefaultQxValues();
co._initChecksMap();
co.__s();
if(co.get(bl)!=true){co.__t();
}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__v:{},define:function(j,k){this.defineDeprecated(j,k);
},defineDeprecated:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__v[l]){this.__v[l]={};
}else if(this.__v[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__v[l].defaultValue=m;
},get:function(n){var o=this.__v[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(p,q){this.setDeprecated(p,q);
},setDeprecated:function(r,s){if((r.split(a)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__v[r]){this.__v[r]={};
}this.__v[r].value=s;
},__w:function(){if(window.qxsettings){for(var t in window.qxsettings){this.setDeprecated(t,window.qxsettings[t]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(u){}this.__x();
}},__x:function(){if(qx.core.Environment.get(h)!=true){return;
}var w=document.location.search.slice(1).split(g);

for(var i=0;i<w.length;i++){var v=w[i].split(b);

if(v.length!=3||v[0]!=c){continue;
}this.set(v[1],decodeURIComponent(v[2]));
}}},defer:function(x){x.defineDeprecated(h,false);
x.defineDeprecated(e,false);
x.defineDeprecated(d,0);
x.__w();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,j){if(j){if(j.extend&&!(j.extend instanceof Array)){j.extend=[j.extend];
}var k=j.statics?j.statics:{};
if(j.extend){k.$$extends=j.extend;
}
if(j.properties){k.$$properties=j.properties;
}
if(j.members){k.$$members=j.members;
}
if(j.events){k.$$events=j.events;
}}else{var k={};
}k.$$type=c;
k.name=name;
k.toString=this.genericToString;
k.basename=qx.Bootstrap.createNamespace(name,k);
qx.Interface.$$registry[name]=k;
return k;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(m){if(!m){return [];
}var n=m.concat();

for(var i=0,l=m.length;i<l;i++){if(m[i].$$extends){n.push.apply(n,this.flatten(m[i].$$extends));
}}return n;
},__y:function(o,p,q,r){var v=q.$$members;

if(v){for(var u in v){if(qx.Bootstrap.isFunction(v[u])){var t=this.__z(p,u);
var s=t||qx.Bootstrap.isFunction(o[u]);

if(!s){throw new Error('Implementation of method "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}var w=r===true&&!t&&!qx.Bootstrap.hasInterface(p,q);

if(w){o[u]=this.__C(q,o[u],u,v[u]);
}}else{if(typeof o[u]===undefined){if(typeof o[u]!==h){throw new Error('Implementation of member "'+u+'" is missing in class "'+p.classname+'" required by interface "'+q.name+'"');
}}}}}},__z:function(x,y){var C=y.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!C){return false;
}var z=qx.Bootstrap.firstLow(C[2]);
var A=qx.Bootstrap.getPropertyDefinition(x,z);

if(!A){return false;
}var B=C[0]==b||C[0]==d;

if(B){return qx.Bootstrap.getPropertyDefinition(x,z).check==g;
}return true;
},__A:function(D,E){if(E.$$properties){for(var F in E.$$properties){if(!qx.Bootstrap.getPropertyDefinition(D,F)){throw new Error('The property "'+F+'" is not supported by Class "'+D.classname+'"!');
}}}},__B:function(G,H){if(H.$$events){for(var I in H.$$events){if(!qx.Bootstrap.supportsEvent(G,I)){throw new Error('The event "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},assertObject:function(J,K){var M=J.constructor;
this.__y(J,M,K,false);
this.__A(M,K);
this.__B(M,K);
var L=K.$$extends;

if(L){for(var i=0,l=L.length;i<l;i++){this.assertObject(J,L[i]);
}}},assert:function(N,O,P){this.__y(N.prototype,N,O,P);
this.__A(N,O);
this.__B(N,O);
var Q=O.$$extends;

if(Q){for(var i=0,l=Q.length;i<l;i++){this.assert(N,Q[i],P);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__C:function(){},__D:null,__E:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__ui:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__ui;
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
},addAdvice:function(o,p,q,name){this.__ui.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
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
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',W="init",V="': ",U=" of class ",T='(computed, old, "',S='return value;',R='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',Q='return init;',P='var init=this.',O="')){",N="if(reg.hasListener(this, '",t="Error in property ",u='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',r='if(init==qx.core.Property.$$inherit)init=null;',s="rv:1.8.1",p="set",q='if(a[i].',n="var reg=qx.event.Registration;",o=" in method ",v='throw new Error("Property ',w='(backup);',D='var inherit=prop.$$inherit;',B='return null;',H='this.',F=")}",J="setRuntime",I=')a[i].',y='");',M="setThemed",L="inherit",K="MSIE 6.0",x=" with incoming value '",z="', qx.event.type.Data, [computed, old]",A="object",C='}',E="reg.fireEvent(this, '",G="qx.core.Property";
qx.Bootstrap.define(G,{statics:{__F:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__G:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:L,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:A,mode:h,themeable:j},$$inheritable:{},__H:function(X){var Y=this.__I(X);

if(!Y.length){var ba=function(){};
}else{ba=this.__J(Y);
}X.prototype.$$refreshInheritables=ba;
},__I:function(bb){var bd=[];

while(bb){var bc=bb.$$properties;

if(bc){for(var name in this.$$inheritable){if(bc[name]&&bc[name].inheritable){bd.push(name);
}}}bb=bb.superclass;
}return bd;
},__J:function(be){var bi=this.$$store.inherit;
var bh=this.$$store.init;
var bg=this.$$method.refresh;
var bf=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=be.length;i<l;i++){var name=be[i];
bf.push("var value = parent.",bi[name],";","if (value===undefined) value = parent.",bh[name],";","this.",bg[name],"(value);");
}return new Function(bf.join(""));
},attachRefreshInheritables:function(bj){bj.prototype.$$refreshInheritables=function(){qx.core.Property.__H(bj);
return this.$$refreshInheritables();
};
},attachMethods:function(bk,name,bl){bl.group?this.__K(bk,bl,name):this.__L(bk,bl,name);
},__K:function(bm,bn,name){var bu=qx.Bootstrap.firstUp(name);
var bt=bm.prototype;
var bv=bn.themeable===true;
var bw=[];
var bq=[];

if(bv){var bo=[];
var bs=[];
}var br="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bw.push(br);

if(bv){bo.push(br);
}
if(bn.mode=="shorthand"){var bp="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bw.push(bp);

if(bv){bo.push(bp);
}}
for(var i=0,a=bn.group,l=a.length;i<l;i++){bw.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bq.push("this.",this.$$method.reset[a[i]],"();");

if(bv){bo.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bs.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bu;
bt[this.$$method.set[name]]=new Function(bw.join(""));
this.$$method.reset[name]="reset"+bu;
bt[this.$$method.reset[name]]=new Function(bq.join(""));

if(bv){this.$$method.setThemed[name]="setThemed"+bu;
bt[this.$$method.setThemed[name]]=new Function(bo.join(""));
this.$$method.resetThemed[name]="resetThemed"+bu;
bt[this.$$method.resetThemed[name]]=new Function(bs.join(""));
}},__L:function(bx,by,name){var bA=qx.Bootstrap.firstUp(name);
var bC=bx.prototype;
if(by.dereference===undefined&&typeof by.check==="string"){by.dereference=this.__M(by.check);
}var bB=this.$$method;
var bz=this.$$store;
bz.runtime[name]="$$runtime_"+name;
bz.user[name]="$$user_"+name;
bz.theme[name]="$$theme_"+name;
bz.init[name]="$$init_"+name;
bz.inherit[name]="$$inherit_"+name;
bz.useinit[name]="$$useinit_"+name;
bB.get[name]="get"+bA;
bC[bB.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bx,name,"get");
};
bB.set[name]="set"+bA;
bC[bB.set[name]]=function(bD){return qx.core.Property.executeOptimizedSetter(this,bx,name,"set",arguments);
};
bB.reset[name]="reset"+bA;
bC[bB.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"reset");
};

if(by.inheritable||by.apply||by.event||by.deferredInit){bB.init[name]="init"+bA;
bC[bB.init[name]]=function(bE){return qx.core.Property.executeOptimizedSetter(this,bx,name,"init",arguments);
};
}
if(by.inheritable){bB.refresh[name]="refresh"+bA;
bC[bB.refresh[name]]=function(bF){return qx.core.Property.executeOptimizedSetter(this,bx,name,"refresh",arguments);
};
}bB.setRuntime[name]="setRuntime"+bA;
bC[bB.setRuntime[name]]=function(bG){return qx.core.Property.executeOptimizedSetter(this,bx,name,"setRuntime",arguments);
};
bB.resetRuntime[name]="resetRuntime"+bA;
bC[bB.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"resetRuntime");
};

if(by.themeable){bB.setThemed[name]="setThemed"+bA;
bC[bB.setThemed[name]]=function(bH){return qx.core.Property.executeOptimizedSetter(this,bx,name,"setThemed",arguments);
};
bB.resetThemed[name]="resetThemed"+bA;
bC[bB.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bx,name,"resetThemed");
};
}
if(by.check==="Boolean"){bC["toggle"+bA]=new Function("return this."+bB.set[name]+"(!this."+bB.get[name]+"())");
bC["is"+bA]=new Function("return this."+bB.get[name]+"()");
}},__M:function(bI){return !!this.__G[bI];
},__N:function(bJ){return this.__G[bJ]||qx.Bootstrap.classIsDefined(bJ)||(qx.Interface&&qx.Interface.isDefined(bJ));
},__O:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bK,bL,bM,bN,bO){var bP=bK.constructor.classname;
var bQ=t+bM+U+bP+o+this.$$method[bN][bM]+x+bO+V;
throw new Error(bQ+(this.__O[bL]||"Unknown reason: "+bL));
},__P:function(bR,bS,name,bT,bU,bV){var bW=this.$$method[bT][name];
{bS[bW]=new Function("value",bU.join(""));
};
if(qx.core.Environment.get("qx.aspects")){bS[bW]=qx.core.Aspect.wrap(bR.classname+"."+bW,bS[bW],"property");
}qx.Bootstrap.setDisplayName(bS[bW],bR.classname+".prototype",bW);
if(bV===undefined){return bR[bW]();
}else{return bR[bW](bV[0]);
}},executeOptimizedGetter:function(bX,bY,name,ca){var cc=bY.$$properties[name];
var ce=bY.prototype;
var cb=[];
var cd=this.$$store;
cb.push(e,cd.runtime[name],g);
cb.push(k,cd.runtime[name],m);

if(cc.inheritable){cb.push(f,cd.inherit[name],g);
cb.push(k,cd.inherit[name],m);
cb.push(d);
}cb.push(e,cd.user[name],g);
cb.push(k,cd.user[name],m);

if(cc.themeable){cb.push(f,cd.theme[name],g);
cb.push(k,cd.theme[name],m);
}
if(cc.deferredInit&&cc.init===undefined){cb.push(f,cd.init[name],g);
cb.push(k,cd.init[name],m);
}cb.push(d);

if(cc.init!==undefined){if(cc.inheritable){cb.push(P,cd.init[name],m);

if(cc.nullable){cb.push(r);
}else if(cc.init!==undefined){cb.push(k,cd.init[name],m);
}else{cb.push(R,name,c,bY.classname,b);
}cb.push(Q);
}else{cb.push(k,cd.init[name],m);
}}else if(cc.inheritable||cc.nullable){cb.push(B);
}else{cb.push(v,name,c,bY.classname,b);
}return this.__P(bX,ce,name,ca,cb);
},executeOptimizedSetter:function(cf,cg,name,ch,ci){var cn=cg.$$properties[name];
var cm=cg.prototype;
var ck=[];
var cj=ch===p||ch===M||ch===J||(ch===W&&cn.init===undefined);
var cl=cn.apply||cn.event||cn.inheritable;
var co=this.__Q(ch,name);
this.__R(ck,cn,name,ch,cj);

if(cj){this.__S(ck,cg,cn,name);
}
if(cl){this.__T(ck,cj,co,ch);
}
if(cn.inheritable){ck.push(D);
}
if(!cl){this.__V(ck,name,ch,cj);
}else{this.__W(ck,cn,name,ch,cj);
}
if(cn.inheritable){this.__X(ck,cn,name,ch);
}else if(cl){this.__Y(ck,cn,name,ch);
}
if(cl){this.__ba(ck,cn,name);
if(cn.inheritable&&cm._getChildren){this.__bb(ck,name);
}}if(cj){ck.push(S);
}return this.__P(cf,cm,name,ch,ck,ci);
},__Q:function(cp,name){if(cp==="setRuntime"||cp==="resetRuntime"){var cq=this.$$store.runtime[name];
}else if(cp==="setThemed"||cp==="resetThemed"){cq=this.$$store.theme[name];
}else if(cp==="init"){cq=this.$$store.init[name];
}else{cq=this.$$store.user[name];
}return cq;
},__R:function(cr,cs,name,ct,cu){{if(!cs.nullable||cs.check||cs.inheritable){cr.push('var prop=qx.core.Property;');
}if(ct==="set"){cr.push('if(value===undefined)prop.error(this,2,"',name,'","',ct,'",value);');
}};
},__S:function(cv,cw,cx,name){if(cx.transform){cv.push('value=this.',cx.transform,'(value);');
}if(cx.validate){if(typeof cx.validate==="string"){cv.push('this.',cx.validate,'(value);');
}else if(cx.validate instanceof Function){cv.push(cw.classname,'.$$properties.',name);
cv.push('.validate.call(this, value);');
}}},__T:function(cy,cz,cA,cB){var cC=(cB==="reset"||cB==="resetThemed"||cB==="resetRuntime");

if(cz){cy.push('if(this.',cA,'===value)return value;');
}else if(cC){cy.push('if(this.',cA,'===undefined)return;');
}},__U:undefined,__V:function(cD,name,cE,cF){if(cE==="setRuntime"){cD.push('this.',this.$$store.runtime[name],'=value;');
}else if(cE==="resetRuntime"){cD.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cD.push('delete this.',this.$$store.runtime[name],';');
}else if(cE==="set"){cD.push('this.',this.$$store.user[name],'=value;');
}else if(cE==="reset"){cD.push('if(this.',this.$$store.user[name],'!==undefined)');
cD.push('delete this.',this.$$store.user[name],';');
}else if(cE==="setThemed"){cD.push('this.',this.$$store.theme[name],'=value;');
}else if(cE==="resetThemed"){cD.push('if(this.',this.$$store.theme[name],'!==undefined)');
cD.push('delete this.',this.$$store.theme[name],';');
}else if(cE==="init"&&cF){cD.push('this.',this.$$store.init[name],'=value;');
}},__W:function(cG,cH,name,cI,cJ){if(cH.inheritable){cG.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cG.push('var computed, old;');
}cG.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="resetRuntime"){cG.push('delete this.',this.$$store.runtime[name],';');
cG.push('if(this.',this.$$store.user[name],'!==undefined)');
cG.push('computed=this.',this.$$store.user[name],';');
cG.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cG.push('computed=this.',this.$$store.theme[name],';');
cG.push('else if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else{cG.push('old=computed=this.',this.$$store.runtime[name],';');
if(cI==="set"){cG.push('this.',this.$$store.user[name],'=value;');
}else if(cI==="reset"){cG.push('delete this.',this.$$store.user[name],';');
}else if(cI==="setThemed"){cG.push('this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
}else if(cI==="init"&&cJ){cG.push('this.',this.$$store.init[name],'=value;');
}}cG.push('}');
cG.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cI==="set"){if(!cH.inheritable){cG.push('old=this.',this.$$store.user[name],';');
}cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="reset"){if(!cH.inheritable){cG.push('old=this.',this.$$store.user[name],';');
}cG.push('delete this.',this.$$store.user[name],';');
cG.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cG.push('computed=this.',this.$$store.runtime[name],';');
cG.push('if(this.',this.$$store.theme[name],'!==undefined)');
cG.push('computed=this.',this.$$store.theme[name],';');
cG.push('else if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else{if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cH.inheritable){cG.push('computed=this.',this.$$store.user[name],';');
}else{cG.push('old=computed=this.',this.$$store.user[name],';');
}if(cI==="setThemed"){cG.push('this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
}else if(cI==="init"&&cJ){cG.push('this.',this.$$store.init[name],'=value;');
}}cG.push('}');
if(cH.themeable){cG.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cH.inheritable){cG.push('old=this.',this.$$store.theme[name],';');
}
if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="resetThemed"){cG.push('delete this.',this.$$store.theme[name],';');
cG.push('if(this.',this.$$store.init[name],'!==undefined){');
cG.push('computed=this.',this.$$store.init[name],';');
cG.push('this.',this.$$store.useinit[name],'=true;');
cG.push('}');
}else if(cI==="init"){if(cJ){cG.push('this.',this.$$store.init[name],'=value;');
}cG.push('computed=this.',this.$$store.theme[name],';');
}else if(cI==="refresh"){cG.push('computed=this.',this.$$store.theme[name],';');
}cG.push('}');
}cG.push('else if(this.',this.$$store.useinit[name],'){');

if(!cH.inheritable){cG.push('old=this.',this.$$store.init[name],';');
}
if(cI==="init"){if(cJ){cG.push('computed=this.',this.$$store.init[name],'=value;');
}else{cG.push('computed=this.',this.$$store.init[name],';');
}}else if(cI==="set"||cI==="setRuntime"||cI==="setThemed"||cI==="refresh"){cG.push('delete this.',this.$$store.useinit[name],';');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="refresh"){cG.push('computed=this.',this.$$store.init[name],';');
}}cG.push('}');
if(cI==="set"||cI==="setRuntime"||cI==="setThemed"||cI==="init"){cG.push('else{');

if(cI==="setRuntime"){cG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cI==="set"){cG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cI==="setThemed"){cG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cI==="init"){if(cJ){cG.push('computed=this.',this.$$store.init[name],'=value;');
}else{cG.push('computed=this.',this.$$store.init[name],';');
}cG.push('this.',this.$$store.useinit[name],'=true;');
}cG.push('}');
}},__X:function(cK,cL,name,cM){cK.push('if(computed===undefined||computed===inherit){');

if(cM==="refresh"){cK.push('computed=value;');
}else{cK.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cK.push('if((computed===undefined||computed===inherit)&&');
cK.push('this.',this.$$store.init[name],'!==undefined&&');
cK.push('this.',this.$$store.init[name],'!==inherit){');
cK.push('computed=this.',this.$$store.init[name],';');
cK.push('this.',this.$$store.useinit[name],'=true;');
cK.push('}else{');
cK.push('delete this.',this.$$store.useinit[name],';}');
cK.push('}');
cK.push('if(old===computed)return value;');
cK.push('if(computed===inherit){');
cK.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cK.push('}');
cK.push('else if(computed===undefined)');
cK.push('delete this.',this.$$store.inherit[name],';');
cK.push('else this.',this.$$store.inherit[name],'=computed;');
cK.push('var backup=computed;');
if(cL.init!==undefined&&cM!=="init"){cK.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cK.push('if(old===undefined)old=null;');
}cK.push('if(computed===undefined||computed==inherit)computed=null;');
},__Y:function(cN,cO,name,cP){if(cP!=="set"&&cP!=="setRuntime"&&cP!=="setThemed"){cN.push('if(computed===undefined)computed=null;');
}cN.push('if(old===computed)return value;');
if(cO.init!==undefined&&cP!=="init"){cN.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cN.push('if(old===undefined)old=null;');
}},__ba:function(cQ,cR,name){if(cR.apply){cQ.push(H,cR.apply,T,name,y);
}if(cR.event){cQ.push(n,N,cR.event,O,E,cR.event,z,F);
}},__bb:function(cS,name){cS.push(u);
cS.push(q,this.$$method.refresh[name],I,this.$$method.refresh[name],w);
cS.push(C);
}},defer:function(cT){var cV=navigator.userAgent.indexOf(K)!=-1;
var cU=navigator.userAgent.indexOf(s)!=-1;
if(cV||cU){cT.__M=cT.__N;
}}});
})();
(function(){var t="qx.aspects",s=".",r="static",q="constructor",p="[Class ",o="]",n="toString",m="singleton",k="$$init_",j=".prototype",d="destructor",h="extend",g="Class",c="destruct",b="qx.Class",f="member",e="qx.event.type.Data";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}if(u.include&&!(u.include instanceof Array)){u.include=[u.include];
}if(u.implement&&!(u.implement instanceof Array)){u.implement=[u.implement];
}var v=false;

if(!u.hasOwnProperty(h)&&!u.type){u.type=r;
v=true;
}var w=this.__bg(name,u.type,u.extend,u.statics,u.construct,u.destruct,u.include);
if(u.extend){if(u.properties){this.__bi(w,u.properties,true);
}if(u.members){this.__bk(w,u.members,true,true,false);
}if(u.events){this.__bh(w,u.events,true);
}if(u.include){for(var i=0,l=u.include.length;i<l;i++){this.__bo(w,u.include[i],false);
}}}if(u.environment){for(var x in u.environment){qx.core.Environment.add(x,u.environment[x]);
}for(var x in u.environment){qx.core.Setting.defineDeprecated(x,u.environment[x]);
}}if(u.settings){for(var x in u.settings){qx.core.Setting.define(x,u.settings[x]);
}}if(u.variants){for(var x in u.variants){qx.core.Variant.define(x,u.variants[x].allowedValues,u.variants[x].defaultValue);
}}if(u.implement){for(var i=0,l=u.implement.length;i<l;i++){this.__bm(w,u.implement[i]);
}}if(u.defer){u.defer.self=w;
u.defer(w,w.prototype,{add:function(name,y){var z={};
z[name]=y;
qx.Class.__bi(w,z,true);
}});
}return w;
},undefine:function(name){delete this.$$registry[name];
var A=name.split(s);
var C=[window];

for(var i=0;i<A.length;i++){C.push(C[i][A[i]]);
}for(var i=C.length-1;i>=1;i--){var B=C[i];
var parent=C[i-1];

if(qx.Bootstrap.isFunction(B)||qx.Bootstrap.objectGetLength(B)===0){delete parent[A[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(D,E){qx.Class.__bo(D,E,false);
},patch:function(F,G){qx.Class.__bo(F,G,true);
},isSubClassOf:function(H,I){if(!H){return false;
}
if(H==I){return true;
}
if(H.prototype instanceof I){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(J){var K=[];

while(J){if(J.$$properties){K.push.apply(K,qx.Bootstrap.getKeys(J.$$properties));
}J=J.superclass;
}return K;
},getByProperty:function(L,name){while(L){if(L.$$properties&&L.$$properties[name]){return L;
}L=L.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(M,N){return M.$$includes&&M.$$includes.indexOf(N)!==-1;
},getByMixin:function(O,P){var Q,i,l;

while(O){if(O.$$includes){Q=O.$$flatIncludes;

for(i=0,l=Q.length;i<l;i++){if(Q[i]===P){return O;
}}}O=O.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(R,S){return !!this.getByMixin(R,S);
},hasOwnInterface:function(T,U){return T.$$implements&&T.$$implements.indexOf(U)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(V){var W=[];

while(V){if(V.$$implements){W.push.apply(W,V.$$flatImplements);
}V=V.superclass;
}return W;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(X,Y){var ba=X.constructor;

if(this.hasInterface(ba,Y)){return true;
}
try{qx.Interface.assertObject(X,Y);
return true;
}catch(bb){}
try{qx.Interface.assert(ba,Y,false);
return true;
}catch(bc){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return p+this.classname+o;
},$$registry:qx.Bootstrap.$$registry,__bc:null,__bd:null,__be:function(){},__bf:function(){},__bg:function(name,bd,be,bf,bg,bh,bi){var bl;

if(!be&&qx.core.Environment.get(t)==false){bl=bf||{};
qx.Bootstrap.setDisplayNames(bl,name);
}else{var bl={};

if(be){if(!bg){bg=this.__bp();
}
if(this.__br(be,bi)){bl=this.__bs(bg,name,bd);
}else{bl=bg;
}if(bd===m){bl.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bg,name,q);
}if(bf){qx.Bootstrap.setDisplayNames(bf,name);
var bm;

for(var i=0,a=qx.Bootstrap.getKeys(bf),l=a.length;i<l;i++){bm=a[i];
var bj=bf[bm];

if(qx.core.Environment.get(t)){if(bj instanceof Function){bj=qx.core.Aspect.wrap(name+s+bm,bj,r);
}bl[bm]=bj;
}else{bl[bm]=bj;
}}}}var bk=qx.Bootstrap.createNamespace(name,bl);
bl.name=bl.classname=name;
bl.basename=bk;
bl.$$type=g;

if(bd){bl.$$classtype=bd;
}if(!bl.hasOwnProperty(n)){bl.toString=this.genericToString;
}
if(be){qx.Bootstrap.extendClass(bl,bg,be,name,bk);
if(bh){if(qx.core.Environment.get(t)){bh=qx.core.Aspect.wrap(name,bh,d);
}bl.$$destructor=bh;
qx.Bootstrap.setDisplayName(bh,name,c);
}}this.$$registry[name]=bl;
return bl;
},__bh:function(bn,bo,bp){var bq,bq;

if(bn.$$events){for(var bq in bo){bn.$$events[bq]=bo[bq];
}}else{bn.$$events=bo;
}},__bi:function(br,bs,bt){var bu;

if(bt===undefined){bt=false;
}var bv=br.prototype;

for(var name in bs){bu=bs[name];
bu.name=name;
if(!bu.refine){if(br.$$properties===undefined){br.$$properties={};
}br.$$properties[name]=bu;
}if(bu.init!==undefined){br.prototype[k+name]=bu.init;
}if(bu.event!==undefined){var event={};
event[bu.event]=e;
this.__bh(br,event,bt);
}if(bu.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bv.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(br);
}}
if(!bu.refine){qx.core.Property.attachMethods(br,name,bu);
}}},__bj:null,__bk:function(bw,bx,by,bz,bA){var bB=bw.prototype;
var bD,bC;
qx.Bootstrap.setDisplayNames(bx,bw.classname+j);

for(var i=0,a=qx.Bootstrap.getKeys(bx),l=a.length;i<l;i++){bD=a[i];
bC=bx[bD];
if(bz!==false&&bC instanceof Function&&bC.$$type==null){if(bA==true){bC=this.__bl(bC,bB[bD]);
}else{if(bB[bD]){bC.base=bB[bD];
}bC.self=bw;
}
if(qx.core.Environment.get(t)){bC=qx.core.Aspect.wrap(bw.classname+s+bD,bC,f);
}}bB[bD]=bC;
}},__bl:function(bE,bF){if(bF){return function(){var bH=bE.base;
bE.base=bF;
var bG=bE.apply(this,arguments);
bE.base=bH;
return bG;
};
}else{return bE;
}},__bm:function(bI,bJ){var bK=qx.Interface.flatten([bJ]);

if(bI.$$implements){bI.$$implements.push(bJ);
bI.$$flatImplements.push.apply(bI.$$flatImplements,bK);
}else{bI.$$implements=[bJ];
bI.$$flatImplements=bK;
}},__bn:function(bL){var name=bL.classname;
var bM=this.__bs(bL,name,bL.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bL),l=a.length;i<l;i++){bN=a[i];
bM[bN]=bL[bN];
}bM.prototype=bL.prototype;
var bP=bL.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bP),l=a.length;i<l;i++){bN=a[i];
var bQ=bP[bN];
if(bQ&&bQ.self==bL){bQ.self=bM;
}}for(var bN in this.$$registry){var bO=this.$$registry[bN];

if(!bO){continue;
}
if(bO.base==bL){bO.base=bM;
}
if(bO.superclass==bL){bO.superclass=bM;
}
if(bO.$$original){if(bO.$$original.base==bL){bO.$$original.base=bM;
}
if(bO.$$original.superclass==bL){bO.$$original.superclass=bM;
}}}qx.Bootstrap.createNamespace(name,bM);
this.$$registry[name]=bM;
return bM;
},__bo:function(bR,bS,bT){if(this.hasMixin(bR,bS)){return;
}var bW=bR.$$original;

if(bS.$$constructor&&!bW){bR=this.__bn(bR);
}var bV=qx.Mixin.flatten([bS]);
var bU;

for(var i=0,l=bV.length;i<l;i++){bU=bV[i];
if(bU.$$events){this.__bh(bR,bU.$$events,bT);
}if(bU.$$properties){this.__bi(bR,bU.$$properties,bT);
}if(bU.$$members){this.__bk(bR,bU.$$members,bT,bT,bT);
}}if(bR.$$includes){bR.$$includes.push(bS);
bR.$$flatIncludes.push.apply(bR.$$flatIncludes,bV);
}else{bR.$$includes=[bS];
bR.$$flatIncludes=bV;
}},__bp:function(){function bX(){bX.base.apply(this,arguments);
}return bX;
},__bq:function(){return function(){};
},__br:function(bY,ca){if(bY&&bY.$$includes){var cb=bY.$$flatIncludes;

for(var i=0,l=cb.length;i<l;i++){if(cb[i].$$constructor){return true;
}}}if(ca){var cc=qx.Mixin.flatten(ca);

for(var i=0,l=cc.length;i<l;i++){if(cc[i].$$constructor){return true;
}}}return false;
},__bs:function(cd,name,ce){var cg=function(){var cj=cg;
var ci=cj.$$original.apply(this,arguments);
if(cj.$$includes){var ch=cj.$$flatIncludes;

for(var i=0,l=ch.length;i<l;i++){if(ch[i].$$constructor){ch[i].$$constructor.apply(this,arguments);
}}}return ci;
};

if(qx.core.Environment.get(t)){var cf=qx.core.Aspect.wrap(name,cg,q);
cg.$$original=cd;
cg.constructor=cf;
cg=cf;
}cg.$$original=cd;
cd.wrapper=cg;
return cg;
}},defer:function(){if(qx.core.Environment.get(t)){for(var ck in qx.Bootstrap.$$registry){var cl=qx.Bootstrap.$$registry[ck];

for(var cm in cl){if(cl[cm] instanceof Function){cl[cm]=qx.core.Aspect.wrap(ck+s+cm,cl[cm],r);
}}}}}});
})();
(function(){var x="off",w="on",u="|",t="default",s="object",r="&",q="qx.aspects",p="qx.mobile.nativescroll",o="qx.mobile.emulatetouch",n="$",e="qx.allowUrlVariants",m="qx.debug",h="qx.client",c="qx.dynlocale",b="webkit",g="qxvariant",f="opera",j=":",a="qx.core.Variant",k="mshtml",d="gecko";
qx.Bootstrap.define(a,{statics:{__bt:{},__bu:{},compilerIsSet:function(){return true;
},define:function(y,z,A){this.defineDeprecated(y,z,A);
},defineDeprecated:function(B,C,D){if(!this.__bt[B]){this.__bt[B]={};
}else{}this.__bt[B].allowedValues=C;
this.__bt[B].defaultValue=D;
},get:function(E){var F=this.__bt[E];

if(F.value!==undefined){return F.value;
}return F.defaultValue;
},__bv:function(){if(window.qxvariants){for(var G in qxvariants){if(!this.__bt[G]){this.__bt[G]={};
}this.__bt[G].value=qxvariants[G];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__bw(this.__bt);
}},__bw:function(){if(qx.core.Environment.get(e)!=true){return;
}var I=document.location.search.slice(1).split(r);

for(var i=0;i<I.length;i++){var J=I[i].split(j);

if(J.length!=3||J[0]!=g){continue;
}var K=J[1];

if(!this.__bt[K]){this.__bt[K]={};
}this.__bt[K].value=decodeURIComponent(J[2]);
}},select:function(L,M){for(var N in M){if(this.isSet(L,N)){return M[N];
}}
if(M[t]!==undefined){return M[t];
}},isSet:function(O,P){var Q=O+n+P;

if(this.__bu[Q]!==undefined){return this.__bu[Q];
}var S=false;
if(P.indexOf(u)<0){S=this.get(O)===P;
}else{var R=P.split(u);

for(var i=0,l=R.length;i<l;i++){if(this.get(O)===R[i]){S=true;
break;
}}}this.__bu[Q]=S;
return S;
},__bx:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__by:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__bz:function(T,U){for(var i=0,l=T.length;i<l;i++){if(T[i]==U){return true;
}}return false;
}},defer:function(V){V.defineDeprecated(h,[d,k,f,b],qx.bom.client.Engine.getName());
V.defineDeprecated(m,[w,x],w);
V.defineDeprecated(q,[w,x],x);
V.defineDeprecated(c,[w,x],w);
V.defineDeprecated(o,[w,x],x);
V.defineDeprecated(p,[w,x],x);
V.__bv();
}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dy=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dy:null,message:null,getComment:function(){return this.__dy;
},toString:function(){return this.__dy+(this.message?b+this.message:c);
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__cf:{},__cg:0,__ch:[],register:function(f){var j=this.__cf;

if(!j){return;
}var h=f.$$hash;

if(h==null){var g=this.__ch;

if(g.length>0){h=g.pop();
}else{h=(this.__cg++)+d;
}f.$$hash=h;
}j[h]=f;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__cf;

if(n&&n[m]){delete n[m];
this.__ch.push(m);
}try{delete k.$$hash;
}catch(o){if(k.removeAttribute){k.removeAttribute(e);
}}},toHashCode:function(p){var r=p.$$hash;

if(r!=null){return r;
}var q=this.__ch;

if(q.length>0){r=q.pop();
}else{r=(this.__cg++)+d;
}return p.$$hash=r;
},clearHashCode:function(s){var t=s.$$hash;

if(t!=null){this.__ch.push(t);
try{delete s.$$hash;
}catch(u){if(s.removeAttribute){s.removeAttribute(e);
}}}},fromHashCode:function(v){return this.__cf[v]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__cf;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(A){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+A);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__cf;
},getRegistry:function(){return this.__cf;
}}});
})();
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===
this.DOCUMENT?e:
e.ownerDocument||e.document;
},getWindow:qx.core.Environment.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(k){return !!(k&&k.nodeType!=null);
},isElement:function(l){return !!(l&&l.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(b);
case 2:case 3:case 4:return s.nodeValue;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}var o=new m;
if((qx.core.Environment.get(f)==g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if((qx.core.Environment.get(f)==g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var k="on",j="engine.name",i="gecko",h="engine.version",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(l,m,n,o){if(l.addEventListener){l.addEventListener(m,n,!!o);
}else if(l.attachEvent){l.attachEvent(k+m,n);
}},removeNativeListener:function(p,q,r,s){if(p.removeEventListener){p.removeEventListener(q,r,!!s);
}else if(p.detachEvent){try{p.detachEvent(k+q,r);
}catch(e){if(e.number!==-2146828218){throw e;
}}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(j)==i)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(j)==i)&&parseFloat(qx.core.Environment.get(h))<1.9){try{e.keyCode=0;
}catch(t){}}}else{try{e.keyCode=0;
}catch(u){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(v,w){if(document.createEvent){var x=document.createEvent(a);
x.initEvent(w,true,true);
return !v.dispatchEvent(x);
}else{var x=document.createEventObject();
return v.fireEvent(k+w,x);
}},supportsEvent:qx.core.Environment.select(j,{"webkit":function(y,z){return y.hasOwnProperty(k+z);
},"default":function(A,B){var C=k+B;
var D=(C in A);

if(!D){D=typeof A[C]==g;

if(!D&&A.setAttribute){A.setAttribute(C,c);
D=typeof A[C]==g;
A.removeAttribute(C);
}}return D;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="c",h="__bF",g="DOM_",c="__bE",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__bA=s;
this.__bB=qx.core.ObjectRegistry.toHashCode(s);
this.__bC=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__bD={};
this.__bE={};
this.__bF={};
this.__bG={};
},statics:{__bH:0,getNextUniqueId:function(){return (this.__bH++)+o;
}},members:{__bC:null,__bD:null,__bF:null,__bI:null,__bE:null,__bG:null,__bA:null,__bB:null,getWindow:function(){return this.__bA;
},getWindowId:function(){return this.__bB;
},getHandler:function(u){var v=this.__bE[u.classname];

if(v){return v;
}return this.__bE[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__bF[w.classname];

if(x){return x;
}return this.__bF[w.classname]=new w(this,this.__bC);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__bD[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__bD[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==j;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__bD[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__bJ(P,W,R);
}else{this.__bK(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__bD[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__bD[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__bJ(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__bH++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__bD[bx];

if(!bz){bz=this.__bD[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__bJ(bp,bq,bs);
}var by=(qx.event.Manager.__bH++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__bA){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__bG;

if(bH[bL]){return bH[bL];
}var bK=this.__bC.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__bJ:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__bD[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__bK(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__bD[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__bK(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__bD[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__bK(cq,cv,cr);
}}delete this.__bD[cu];
return true;
},deleteAllListeners:function(cx){delete this.__bD[cx];
},__bK:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__bC.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__bC.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,c);
qx.util.DisposeUtil.disposeMap(this,h);
this.__bD=this.__bA=this.__bI=null;
this.__bC=this.__bG=null;
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__bL:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__bL[f];

if(!e){e=new qx.event.Manager(d,this);
this.__bL[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__bL[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bM:[],addHandler:function(Q){this.__bM.push(Q);
this.__bM.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bM;
},__bN:[],addDispatcher:function(R,S){this.__bN.push(R);
this.__bN.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bN;
}}});
})();
(function(){var m=":",l="engine.name",k="Error created at",j="...",h="qx.dev.StackTrace",g="",f="\n",e="?",d="/source/class/",c="anonymous",a="of linked script",b=".";
qx.Bootstrap.define(h,{statics:{getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(A){var u=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(u,0);
var s=this.getStackTraceFromCaller(arguments);
var q=s.length>u.length?s:u;

for(var i=0;i<Math.min(s.length,u.length);i++){var r=s[i];

if(r.indexOf(c)>=0){continue;
}var y=r.split(m);

if(y.length!=2){continue;
}var w=y[0];
var p=y[1];
var o=u[i];
var z=o.split(m);
var v=z[0];
var n=z[1];

if(qx.Class.getByName(v)){var t=v;
}else{t=w;
}var x=t+m;

if(p){x+=p+m;
}x+=n;
q[i]=x;
}return q;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var B;

try{B.bar();
}catch(D){var C=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(C,0);
return C;
}return [];
}}),getStackTraceFromCaller:qx.core.Environment.select(l,{"opera":function(E){return [];
},"default":function(F){var K=[];
var J=qx.lang.Function.getCaller(F);
var G={};

while(J){var H=qx.lang.Function.getName(J);
K.push(H);

try{J=J.caller;
}catch(L){break;
}
if(!J){break;
}var I=qx.core.ObjectRegistry.toHashCode(J);

if(G[I]){K.push(j);
break;
}G[I]=J;
}return K;
}}),getStackTraceFromError:qx.core.Environment.select(l,{"gecko":function(M){if(!M.stack){return [];
}var S=/@(.+):(\d+)$/gm;
var N;
var O=[];

while((N=S.exec(M.stack))!=null){var P=N[1];
var R=N[2];
var Q=this.__bO(P);
O.push(Q+m+R);
}return O;
},"webkit":function(T){if(T.stack){var bb=/at (.*)/gm;
var ba=/\((.*?)(:[^\/].*)\)/;
var X=/(.*?)(:[^\/].*)/;
var U;
var V=[];

while((U=bb.exec(T.stack))!=null){var W=ba.exec(U[1]);

if(!W){W=X.exec(U[1]);
}
if(W){var Y=this.__bO(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__bO(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__bO(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__bO(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__bO(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__bO:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var k="",j="g",h="0",g='\\$1',f="%",e='-',d="qx.lang.String",c=' ',b='\n',a="undefined";
qx.Class.define(d,{statics:{camelCase:function(l){return l.replace(/\-([a-z])/g,function(m,n){return n.toUpperCase();
});
},hyphenate:function(o){return o.replace(/[A-Z]/g,function(p){return (e+p.charAt(0).toLowerCase());
});
},capitalize:function(q){return q.replace(/\b[a-z]/g,function(r){return r.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,c));
},trimLeft:function(t){return t.replace(/^\s+/,k);
},trimRight:function(u){return u.replace(/\s+$/,k);
},trim:function(v){return v.replace(/^\s+|\s+$/g,k);
},startsWith:function(w,x){return w.indexOf(x)===0;
},endsWith:function(y,z){return y.substring(y.length-z.length,y.length)===z;
},repeat:function(A,B){return A.length>0?new Array(B+1).join(A):k;
},pad:function(C,length,D){var E=length-C.length;

if(E>0){if(typeof D===a){D=h;
}return this.repeat(D,E)+C;
}else{return C;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(F,G){return F.indexOf(G)!=-1;
},format:function(H,I){var J=H;

for(var i=0;i<I.length;i++){J=J.replace(new RegExp(f+(i+1),j),I[i]+k);
}return J;
},escapeRegexpChars:function(K){return K.replace(/([.*+?^${}()|[\]\/\\])/g,g);
},toArray:function(L){return L.split(/\B|\b/g);
},stripTags:function(M){return M.replace(/<\/?[^>]+>/gi,k);
},stripScripts:function(N,O){var Q=k;
var P=N.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){Q+=arguments[1]+b;
return k;
});

if(O===true){qx.lang.Function.globalEval(Q);
}return P;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__bP:0,__bQ:0,__bR:false,__bS:0,__bT:null,__bU:null,setMaxEntries:function(c){this.__bU=c;
this.clear();
},getMaxEntries:function(){return this.__bU;
},addEntry:function(d){this.__bT[this.__bP]=d;
this.__bP=this.__bV(this.__bP,1);
var e=this.getMaxEntries();

if(this.__bQ<e){this.__bQ++;
}if(this.__bR&&(this.__bS<e)){this.__bS++;
}},mark:function(){this.__bR=true;
this.__bS=0;
},clearMark:function(){this.__bR=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__bQ){f=this.__bQ;
}if(g&&this.__bR&&(f>this.__bS)){f=this.__bS;
}
if(f>0){var i=this.__bV(this.__bP,-1);
var h=this.__bV(i,-f+1);
var j;

if(h<=i){j=this.__bT.slice(h,i+1);
}else{j=this.__bT.slice(h,this.__bQ).concat(this.__bT.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__bT=new Array(this.getMaxEntries());
this.__bQ=0;
this.__bS=0;
this.__bP=0;
},__bV:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__bW:A,setLevel:function(I){this.__bW=I;
},getLevel:function(){return this.__bW;
},setTreshold:function(J){this.__ca.setMaxMessages(J);
},getTreshold:function(){return this.__ca.getMaxMessages();
},__bX:{},__bY:0,register:function(K){if(K.$$id){return;
}var M=this.__bY++;
this.__bX[M]=K;
K.$$id=M;
var L=this.__cb;
var N=this.__ca.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__bW]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__bX[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__cc(A,arguments);
},info:function(S,T){qx.log.Logger.__cc(e,arguments);
},warn:function(U,V){qx.log.Logger.__cc(r,arguments);
},error:function(W,X){qx.log.Logger.__cc(j,arguments);
},trace:function(Y){qx.log.Logger.__cc(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__ca.clearHistory();
},__ca:new qx.log.appender.RingBuffer(50),__cb:{debug:0,info:1,warn:2,error:3},__cc:function(bv,bw){var bB=this.__cb;

if(bB[bv]<bB[this.__bW]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__ce(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__ca.process(bD);
var bE=this.__bX;

for(var bz in bE){bE[bz].process(bD);
}},__cd:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__ce:function(bH,bI){var bP=this.__cd(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__ce(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__ce(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__cc(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var q="set",p="get",o="reset",n="MSIE 6.0",m="info",k="qx.core.Object",j="error",h="warn",g="]",f="debug",b="[",d="$$user_",c="rv:1.8.1",a="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+g;
},base:function(r,s){if(arguments.length===1){return r.callee.base.call(this);
}else{return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var v=this.constructor;
var u=new v;
var x=qx.Class.getProperties(v);
var w=qx.core.Property.$$store.user;
var y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=x.length;i<l;i++){name=x[i];

if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);
}}return u;
},set:function(z,A){var C=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(z)){if(!this[C[z]]){if(this[q+qx.Bootstrap.firstUp(z)]!=undefined){this[q+qx.Bootstrap.firstUp(z)](A);
return this;
}}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}}this[G[F]]();
},__cm:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__cm.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__cm.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__cm.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__cm.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__cm.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__cm.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__cm.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__cm.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__cn:null,setUserData:function(bg,bh){if(!this.__cn){this.__cn={};
}this.__cn[bg]=bh;
},getUserData:function(bi){if(!this.__cn){return null;
}var bj=this.__cn[bi];
return bj===undefined?null:bj;
},__co:qx.log.Logger,debug:function(bk){this.__cp(f,arguments);
},info:function(bl){this.__cp(m,arguments);
},warn:function(bm){this.__cp(h,arguments);
},error:function(bn){this.__cp(j,arguments);
},trace:function(){this.__co.trace(this);
},__cp:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__co[bo].apply(this.__co,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__cq){this.__cq();
}},__cq:null,__cr:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__cq=bD.__cr;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cn=null;
var bI=this.constructor;
var bM;
var bN=qx.core.Property.$$store;
var bK=bN.user;
var bL=bN.theme;
var bG=bN.inherit;
var bJ=bN.useinit;
var bH=bN.init;

while(bI){bM=bI.$$properties;

if(bM){for(var name in bM){if(bM[name].dereference){this[bK[name]]=this[bL[name]]=this[bG[name]]=this[bJ[name]]=this[bH[name]]=undefined;
}}}bI=bI.superclass;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){this.__dH=b+(c&&c.message?c.message:c);
Error.call(this,this.__dH);
this.__dI=d;
this.__dJ=c;
},members:{__dJ:null,__dI:null,__dH:null,toString:function(){return this.__dH;
},getArguments:function(){return this.__dI;
},getSourceException:function(){return this.__dJ;
}},destruct:function(){this.__dJ=null;
this.__dI=null;
this.__dH=null;
}});
})();
(function(){var c="qx.globalErrorHandling",b="qx.event.GlobalError",a="on";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(d,e){this.__dK=d||null;
this.__dL=e||window;

if(qx.core.Environment.get(c)){if(d&&window.onerror){var f=qx.Bootstrap.bind(this.__dN,this);

if(this.__dM==null){this.__dM=window.onerror;
}var self=this;
window.onerror=function(g,h,i){self.__dM(g,h,i);
f(g,h,i);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__dN,this);
}if(this.__dK==null){if(this.__dM!=null){window.onerror=this.__dM;
this.__dM=null;
}else{window.onerror=null;
}}}},__dN:function(j,k,l){if(this.__dK){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Environment.get(c)){var self=this;
return function(){if(!self.__dK){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(o){if(this.__dK){this.__dK.call(this.__dL,o);
}}},defer:function(p){qx.core.Environment.add(c,true);
p.setErrorHandler(null,null);
qx.core.Setting.defineDeprecated(c,a);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__em={};
this.__en=qx.lang.Function.bind(this.__er,this);
this.__eo=false;
},members:{__ep:null,__eq:null,__em:null,__eo:null,__en:null,schedule:function(c){if(this.__ep==null){this.__ep=window.setTimeout(this.__en,0);
}var d=c.toHashCode();
if(this.__eq&&this.__eq[d]){return;
}this.__em[d]=c;
this.__eo=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__eq&&this.__eq[f]){this.__eq[f]=null;
return;
}delete this.__em[f];
if(qx.lang.Object.isEmpty(this.__em)&&this.__ep!=null){window.clearTimeout(this.__ep);
this.__ep=null;
}},__er:qx.event.GlobalError.observeMethod(function(){this.__ep=null;
while(this.__eo){this.__eq=qx.lang.Object.clone(this.__em);
this.__em={};
this.__eo=false;

for(var h in this.__eq){var g=this.__eq[h];

if(g){this.__eq[h]=null;
g.call();
}}}this.__eq=null;
})},destruct:function(){if(this.__ep!=null){window.clearTimeout(this.__ep);
}this.__en=this.__em=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__es=b;
this.__et=c||null;
this.__eu=qx.util.DeferredCallManager.getInstance();
},members:{__es:null,__et:null,__eu:null,cancel:function(){this.__eu.cancel(this);
},schedule:function(){this.__eu.schedule(this);
},call:function(){var d;
this.__et?this.__es.apply(this.__et):this.__es();
}},destruct:function(e,f){this.cancel();
this.__et=this.__es=this.__eu=null;
}});
})();
(function(){var m="element",k="qxSelectable",j="off",h="engine.name",g="on",f="text",d="div",c="",b="mshtml",a="none",F="scroll",E="qx.html.Element",D="|capture|",C="activate",B="blur",A="deactivate",z="capture",w="userSelect",v="-moz-none",u="visible",s="releaseCapture",t="|bubble|",q="tabIndex",r="focus",o="__eR",p="MozUserSelect",n="hidden";
qx.Class.define(E,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__ev=G||d;
this.__ew=H||null;
this.__ex=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__ey:{},_scheduleFlush:function(J){qx.html.Element.__fd.schedule();
},flush:function(){var U;
var M=this.__ez();
var L=M.getFocus();

if(L&&this.__eD(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__eD(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__eB();

if(P&&this.__eD(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__eV()){if(U.__eE&&qx.dom.Hierarchy.isRendered(U.__eE)){V.push(U);
}else{U.__eU();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
U.__eU();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__eE;

if(!X){delete R[T];
continue;
}if(!U.$$disposed){X.style.display=U.__eH?c:a;
if((qx.core.Environment.get(h)==b)){if(!(document.documentMode>=8)){X.style.visibility=U.__eH?u:n;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__eE;

if(bd&&bd.offsetWidth){var O=true;
if(U.__eK!=null){U.__eE.scrollLeft=U.__eK;
delete U.__eK;
}if(U.__eL!=null){U.__eE.scrollTop=U.__eL;
delete U.__eL;
}var Y=U.__eI;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__eI;
}else{O=false;
}}var ba=U.__eJ;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__eJ;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__eE;

if(!X||!N[bb.type]&&!bb.element.__eV()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__ey){var K=this.__ey[T];
var bd=K.element.__eE;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__ey[T];
}}qx.event.handler.Appear.refresh();
},__ez:function(){if(!this.__eA){var be=qx.event.Registration.getManager(window);
this.__eA=be.getHandler(qx.event.handler.Focus);
}return this.__eA;
},__eB:function(){if(!this.__eC){var bf=qx.event.Registration.getManager(window);
this.__eC=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eC.getCaptureElement();
},__eD:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__eV();
}},members:{__ev:null,__eE:null,__eF:false,__eG:true,__eH:true,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__ew:null,__ex:null,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,_scheduleChildrenUpdate:function(){if(this.__eS){return;
}this.__eS=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__ev);
},__eU:function(){var length;
var bi=this.__eR;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__eH&&bj.__eG&&!bj.__eE){bj.__eU();
}}}
if(!this.__eE){this.__eE=this._createDomElement();
this.__eE.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__eS){this._syncChildren();
}}delete this.__eS;
},_insertChildren:function(){var bk=this.__eR;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__eE&&bm.__eG){bl.appendChild(bm.__eE);
}}this.__eE.appendChild(bl);
}else{var bl=this.__eE;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__eE&&bm.__eG){bl.appendChild(bm.__eE);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__eR;
var bu=bn.length;
var bo;
var bs;
var bq=this.__eE;
var bt=bq.childNodes;
var bp=0;
var bv;
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__eG||bs.__eT!==this){bq.removeChild(bv);
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__eG){bs=bo.__eE;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}}bp++;
}}},_copyData:function(bx){var bB=this.__eE;
var bA=this.__ex;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__ew;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__eP;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__eQ;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__eQ;
}},_syncData:function(){var bH=this.__eE;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__eN;

if(bF){var bK=this.__ex;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__eN=null;
}var bF=this.__eM;

if(bF){var bK=this.__ew;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__eM=null;
}var bF=this.__eO;

if(bF){var bK=this.__eP;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__eO=null;
}},__eV:function(){var bL=this;
while(bL){if(bL.__eF){return true;
}
if(!bL.__eG||!bL.__eH){return false;
}bL=bL.__eT;
}return false;
},__eW:function(bM){if(bM.__eT===this){throw new Error("Child is already in: "+bM);
}
if(bM.__eF){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__eT){bM.__eT.remove(bM);
}bM.__eT=this;
if(!this.__eR){this.__eR=[];
}if(this.__eE){this._scheduleChildrenUpdate();
}},__eX:function(bN){if(bN.__eT!==this){throw new Error("Has no child: "+bN);
}if(this.__eE){this._scheduleChildrenUpdate();
}delete bN.__eT;
},__eY:function(bO){if(bO.__eT!==this){throw new Error("Has no child: "+bO);
}if(this.__eE){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__eR||null;
},getChild:function(bP){var bQ=this.__eR;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__eR;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__eR;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__eR;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__eW(arguments[i]);
}this.__eR.push.apply(this.__eR,arguments);
}else{this.__eW(bW);
this.__eR.push(bW);
}return this;
},addAt:function(bX,bY){this.__eW(bX);
qx.lang.Array.insertAt(this.__eR,bX,bY);
return this;
},remove:function(ca){var cb=this.__eR;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__eX(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__eX(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__eR;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__eX(cf);
qx.lang.Array.removeAt(this.__eR,cd);
return this;
},removeAll:function(){var cg=this.__eR;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__eX(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__eT||null;
},insertInto:function(parent,ch){parent.__eW(this);

if(ch==null){parent.__eR.push(this);
}else{qx.lang.Array.insertAt(this.__eR,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__eT;
parent.__eW(this);
qx.lang.Array.insertBefore(parent.__eR,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__eT;
parent.__eW(this);
qx.lang.Array.insertAfter(parent.__eR,this,cj);
return this;
},moveTo:function(ck){var parent=this.__eT;
parent.__eY(this);
var cl=parent.__eR.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__eR,cl);
qx.lang.Array.insertAt(parent.__eR,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__eT;
return this.moveTo(parent.__eR.indexOf(cm));
},moveAfter:function(cn){var parent=this.__eT;
return this.moveTo(parent.__eR.indexOf(cn)+1);
},free:function(){var parent=this.__eT;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__eR){return;
}parent.__eX(this);
qx.lang.Array.remove(parent.__eR,this);
return this;
},getDomElement:function(){return this.__eE||null;
},getNodeName:function(){return this.__ev;
},setNodeName:function(name){this.__ev=name;
},setRoot:function(co){this.__eF=co;
},useMarkup:function(cp){if(this.__eE){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(h)==b)){var cq=document.createElement(d);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__eE;
},useElement:function(cr){if(this.__eE){throw new Error("Could not overwrite existing element!");
}this.__eE=cr;
this.__eE.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(q);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__ev]){return true;
}return false;
},setSelectable:qx.core.Environment.select(h,{"webkit":function(cu){this.setAttribute(k,cu?g:j);
this.setStyle(w,cu?f:a);
},"gecko":function(cv){this.setAttribute(k,cv?g:j);
this.setStyle(p,cv?f:v);
},"default":function(cw){this.setAttribute(k,cw?g:j);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ev];
},include:function(){if(this.__eG){return;
}delete this.__eG;

if(this.__eT){this.__eT._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eG){return;
}this.__eG=false;

if(this.__eT){this.__eT._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eG===true;
},show:function(){if(this.__eH){return;
}
if(this.__eE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__eT){this.__eT._scheduleChildrenUpdate();
}delete this.__eH;
},hide:function(){if(!this.__eH){return;
}
if(this.__eE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__eH=false;
},isVisible:function(){return this.__eH===true;
},scrollChildIntoViewX:function(cx,cy,cz){var cA=this.__eE;
var cB=cx.getDomElement();

if(cz!==false&&cA&&cA.offsetWidth&&cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewX(cB,cA,cy);
}else{this.__eI={element:cx,align:cy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eK;
},scrollChildIntoViewY:function(cC,cD,cE){var cF=this.__eE;
var cG=cC.getDomElement();

if(cE!==false&&cF&&cF.offsetWidth&&cG&&cG.offsetWidth){qx.bom.element.Scroll.intoViewY(cG,cF,cD);
}else{this.__eJ={element:cC,align:cD};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eL;
},scrollToX:function(x,cH){var cI=this.__eE;

if(cH!==true&&cI&&cI.offsetWidth){cI.scrollLeft=x;
delete this.__eK;
}else{this.__eK=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eI;
},getScrollX:function(){var cJ=this.__eE;

if(cJ){return cJ.scrollLeft;
}return this.__eK||0;
},scrollToY:function(y,cK){var cL=this.__eE;

if(cK!==true&&cL&&cL.offsetWidth){cL.scrollTop=y;
delete this.__eL;
}else{this.__eL=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__eJ;
},getScrollY:function(){var cM=this.__eE;

if(cM){return cM.scrollTop;
}return this.__eL||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(F,this.__fb,this);
},enableScrolling:function(){this.removeListener(F,this.__fb,this);
},__fa:null,__fb:function(e){if(!this.__fa){this.__fa=true;
this.__eE.scrollTop=0;
this.__eE.scrollLeft=0;
delete this.__fa;
}},getTextSelection:function(){var cN=this.__eE;

if(cN){return qx.bom.Selection.get(cN);
}return null;
},getTextSelectionLength:function(){var cO=this.__eE;

if(cO){return qx.bom.Selection.getLength(cO);
}return null;
},getTextSelectionStart:function(){var cP=this.__eE;

if(cP){return qx.bom.Selection.getStart(cP);
}return null;
},getTextSelectionEnd:function(){var cQ=this.__eE;

if(cQ){return qx.bom.Selection.getEnd(cQ);
}return null;
},setTextSelection:function(cR,cS){var cT=this.__eE;

if(cT){qx.bom.Selection.set(cT,cR,cS);
return;
}qx.html.Element.__ey[this.toHashCode()]={element:this,start:cR,end:cS};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cU=this.__eE;

if(cU){qx.bom.Selection.clear(cU);
}delete qx.html.Element.__ey[this.toHashCode()];
},__fc:function(cV,cW){var cX=qx.html.Element._actions;
cX.push({type:cV,element:this,args:cW||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__fc(r);
},blur:function(){this.__fc(B);
},activate:function(){this.__fc(C);
},deactivate:function(){this.__fc(A);
},capture:function(cY){this.__fc(z,[cY!==false]);
},releaseCapture:function(){this.__fc(s);
},setStyle:function(da,dc,dd){if(!this.__ew){this.__ew={};
}
if(this.__ew[da]==dc){return;
}
if(dc==null){delete this.__ew[da];
}else{this.__ew[da]=dc;
}if(this.__eE){if(dd){qx.bom.element.Style.set(this.__eE,da,dc);
return this;
}if(!this.__eM){this.__eM={};
}this.__eM[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__ew){this.__ew={};
}
if(this.__eE){if(!this.__eM){this.__eM={};
}
for(var di in de){var dh=de[di];

if(this.__ew[di]==dh){continue;
}
if(dh==null){delete this.__ew[di];
}else{this.__ew[di]=dh;
}if(df){dg.set(this.__eE,di,dh);
continue;
}this.__eM[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var di in de){var dh=de[di];

if(this.__ew[di]==dh){continue;
}
if(dh==null){delete this.__ew[di];
}else{this.__ew[di]=dh;
}}}return this;
},removeStyle:function(dj,dk){this.setStyle(dj,null,dk);
},getStyle:function(dl){return this.__ew?this.__ew[dl]:null;
},getAllStyles:function(){return this.__ew||null;
},setAttribute:function(dm,dn,dp){if(!this.__ex){this.__ex={};
}
if(this.__ex[dm]==dn){return;
}
if(dn==null){delete this.__ex[dm];
}else{this.__ex[dm]=dn;
}if(this.__eE){if(dp){qx.bom.element.Attribute.set(this.__eE,dm,dn);
return this;
}if(!this.__eN){this.__eN={};
}this.__eN[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dq,dr){for(var ds in dq){this.setAttribute(ds,dq[ds],dr);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(dv){return this.__ex?this.__ex[dv]:null;
},_applyProperty:function(name,dw){},_setProperty:function(dx,dy,dz){if(!this.__eP){this.__eP={};
}
if(this.__eP[dx]==dy){return;
}
if(dy==null){delete this.__eP[dx];
}else{this.__eP[dx]=dy;
}if(this.__eE){if(dz){this._applyProperty(dx,dy);
return this;
}if(!this.__eO){this.__eO={};
}this.__eO[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(dC){var dD=this.__eP;

if(!dD){return null;
}var dE=dD[dC];
return dE==null?null:dE;
},addListener:function(dF,dG,self,dH){var dI;

if(this.$$disposed){return null;
}
if(this.__eE){return qx.event.Registration.addListener(this.__eE,dF,dG,self,dH);
}
if(!this.__eQ){this.__eQ={};
}
if(dH==null){dH=false;
}var dJ=qx.event.Manager.getNextUniqueId();
var dK=dF+(dH?D:t)+dJ;
this.__eQ[dK]={type:dF,listener:dG,self:self,capture:dH,unique:dJ};
return dK;
},removeListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}
if(this.__eE){qx.event.Registration.removeListener(this.__eE,dL,dM,self,dN);
}else{var dQ=this.__eQ;
var dP;

if(dN==null){dN=false;
}
for(var dR in dQ){dP=dQ[dR];
if(dP.listener===dM&&dP.self===self&&dP.capture===dN&&dP.type===dL){delete dQ[dR];
break;
}}}return this;
},removeListenerById:function(dS){if(this.$$disposed){return null;
}
if(this.__eE){qx.event.Registration.removeListenerById(this.__eE,dS);
}else{delete this.__eQ[dS];
}return this;
},hasListener:function(dT,dU){if(this.$$disposed){return false;
}
if(this.__eE){return qx.event.Registration.hasListener(this.__eE,dT,dU);
}var dW=this.__eQ;
var dV;

if(dU==null){dU=false;
}
for(var dX in dW){dV=dW[dX];
if(dV.capture===dU&&dV.type===dT){return true;
}}return false;
}},defer:function(dY){dY.__fd=new qx.util.DeferredCall(dY.flush,dY);
},destruct:function(){var ea=this.__eE;

if(ea){qx.event.Registration.getManager(ea).removeAllListeners(ea);
ea.$$element=c;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__eT;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(o);
this.__ex=this.__ew=this.__eQ=this.__eP=this.__eN=this.__eM=this.__eO=this.__eE=this.__eT=this.__eI=this.__eJ=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__lf:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__lf;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__lf==h){return;
}this.__lf=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var f="mshtml",e="engine.name",d="pop.push.reverse.shift.sort.splice.unshift.join.slice",c="number",b="qx.type.BaseArray",a=".";
qx.Class.define(b,{extend:Array,construct:function(g){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(l){if((qx.core.Environment.get(e)==f)){j.prototype={length:0,$$isArray:true};
var o=d.split(a);

for(var length=o.length;length;){j.prototype[o[--length]]=Array.prototype[o[length]];
}}var p=Array.prototype.slice;
j.prototype.concat=function(){var r=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var q;

if(arguments[i] instanceof j){q=p.call(arguments[i],0);
}else if(arguments[i] instanceof Array){q=arguments[i];
}else{q=[arguments[i]];
}r.push.apply(r,q);
}return r;
};
j.prototype.toString=function(){return p.call(this,0).toString();
};
j.prototype.toLocaleString=function(){return p.call(this,0).toLocaleString();
};
j.prototype.constructor=j;
j.prototype.indexOf=qx.lang.Core.arrayIndexOf;
j.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
j.prototype.forEach=qx.lang.Core.arrayForEach;
j.prototype.some=qx.lang.Core.arraySome;
j.prototype.every=qx.lang.Core.arrayEvery;
var m=qx.lang.Core.arrayFilter;
var n=qx.lang.Core.arrayMap;
j.prototype.filter=function(){var s=new this.constructor;
s.push.apply(s,m.apply(this,arguments));
return s;
};
j.prototype.map=function(){var t=new this.constructor;
t.push.apply(t,n.apply(this,arguments));
return t;
};
j.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
j.prototype.splice=function(){var v=new this.constructor;
v.push.apply(v,Array.prototype.splice.apply(this,arguments));
return v;
};
j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
j.prototype.valueOf=function(){return this.length;
};
return j;
}function j(length){if(arguments.length===1&&typeof length===c){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
})();
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
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
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="os.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var g=0;
var f=this._native;

if(f.shiftKey){g|=qx.event.type.Dom.SHIFT_MASK;
}
if(f.ctrlKey){g|=qx.event.type.Dom.CTRL_MASK;
}
if(f.altKey){g|=qx.event.type.Dom.ALT_MASK;
}
if(f.metaKey){g|=qx.event.type.Dom.META_MASK;
}return g;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(c)==a){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var h="left",g="right",f="middle",e="none",d="engine.name",c="click",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(i,j){var j=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,i,j);
j.button=i.button;
j.clientX=i.clientX;
j.clientY=i.clientY;
j.pageX=i.pageX;
j.pageY=i.pageY;
j.screenX=i.screenX;
j.screenY=i.screenY;
j.wheelDelta=i.wheelDelta;
j.detail=i.detail;
j.srcElement=i.srcElement;
j.target=i.target;
return j;
},__gO:{0:h,2:g,1:f},__gP:{1:h,2:g,4:f},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case b:return g;
case c:if(this.__gQ){return this.__gQ();
}default:if(this._native.target!==undefined){return this.__gO[this._native.button]||e;
}else{return this.__gP[this._native.button]||e;
}}},__gQ:qx.core.Environment.select(d,{"mshtml":function(){return h;
},"default":null}),isLeftPressed:function(){return this.getButton()===h;
},isMiddlePressed:function(){return this.getButton()===f;
},isRightPressed:function(){return this.getButton()===g;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var i="engine.version",h="os.name",g="osx",f="win",e="engine.name",d="chrome",c="qx.dynamicmousewheel",b="qx.event.type.MouseWheel",a="browser.name";
qx.Class.define(b,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__gR:function(j){var k=Math.abs(j);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>k){qx.event.type.MouseWheel.MINSCROLL=k;
this.__gS();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<k){qx.event.type.MouseWheel.MAXSCROLL=k;
this.__gS();
}if(qx.event.type.MouseWheel.MAXSCROLL===k&&qx.event.type.MouseWheel.MINSCROLL===k){return 2*(j/k);
}var l=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var m=(j/l)*Math.log(l)*qx.event.type.MouseWheel.FACTOR;
return m<0?Math.min(m,-1):Math.max(m,1);
},__gS:function(){var n=qx.event.type.MouseWheel.MAXSCROLL||0;
var q=qx.event.type.MouseWheel.MINSCROLL||n;

if(n<=q){return;
}var o=n-q;
var p=(n/o)*Math.log(o);

if(p==0){p=1;
}qx.event.type.MouseWheel.FACTOR=6/p;
},getWheelDelta:function(){if(qx.core.Environment.get(c)){if(this._native.detail){return this.__gR(this._native.detail);
}return this.__gR(-this._native.wheelDelta);
}else{var r=qx.core.Environment.select(e,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.core.Environment.get(a)==d){if(qx.core.Environment.get(h)==g){return -(this._native.wheelDelta/60);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.core.Environment.get(h)==f){var s=120;
if(parseFloat(qx.core.Environment.get(i))==533.16){s=1200;
}}else{s=40;
if(parseFloat(qx.core.Environment.get(i))==533.16||parseFloat(qx.core.Environment.get(i))==533.17||parseFloat(qx.core.Environment.get(i))==533.18){s=1200;
}}return -(this._native.wheelDelta/s);
}}});
return r.call(this);
}}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(k,l,m,n){switch(n){case e:return l.start-m.end-k;
case b:return l.end+m.start;
case d:return l.start+m.start;
case c:return l.end-m.end-k;
}},_isInRange:function(o,p,q){return o>=0&&o+p<=q;
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
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__dO=c;
this.__dP=d||b;
this.__dQ=e===undefined?-1:e;
},members:{__dO:null,__dP:null,__dQ:null,toString:function(){return this.__dO;
},getUri:function(){return this.__dP;
},getLineNumber:function(){return this.__dQ;
}}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__ip:null,_invalidChildrenCache:null,__iq:null,invalidateLayoutCache:function(){this.__ip=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__ip){return this.__ip;
}return this.__ip=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__iq;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__iq.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__iq){throw new Error("It is not possible to manually set the connected widget.");
}this.__iq=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__iq;
},_applyLayoutChange:function(){if(this.__iq){this.__iq.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__iq.getLayoutChildren();
}},destruct:function(){this.__iq=this.__ip=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__el={};
this.add(a,h);
},members:{__el:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__el[k]){return this.__el[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__el[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__el[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__el[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__el){v[w]=this.__el[w];
}return v;
}},destruct:function(){this.__el=null;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__fg=f;
this.__fh=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fg:null,__fh:null,__fi:null,__fj:null,__fk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
this.__fi=qx.bom.Event.supportsEvent(this.__fh,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__fh,this.__fi,this.__fk);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fh,this.__fi,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fj!=p){this.__fj=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__fh,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__fg=this.__fh=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__fl=b;
this.__fm=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fl:null,__fm:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__fl=this.__fm=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fn=u;
this.__fo=u.getWindow();
this.__fp=this.__fo.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fq:null,__fr:null,__fn:null,__fo:null,__fp:null,__fs:null,__ft:null,__fu:null,__fv:null,__fw:false,__fx:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fy:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__fz:function(F,G,H,I){if(!H){H=this.__fy(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__fo,h,qx.event.type.Data,[G]);
},__fA:function(J,K,L){if(!L){L=this.__fy(J);
}var K=K||J.type;

if(K==r){this.__fB(J,L);
}else if(K==q){this.__fC(J,L);
}else if(K==s){this.__fD(J,L);
}},__fB:function(M,N){var O=M.changedTouches[0];
this.__fs=O.screenX;
this.__ft=O.screenY;
this.__fu=new Date().getTime();
this.__fv=M.changedTouches.length===1;
},__fC:function(P,Q){if(this.__fv&&P.changedTouches.length>1){this.__fv=false;
}},__fD:function(R,S){if(this.__fv){var T=R.changedTouches[0];
var V={x:T.screenX-this.__fs,y:T.screenY-this.__ft};
var W=qx.event.handler.Touch;

if(this.__fx==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__fz(R,f,S,qx.event.type.Tap);
}else{var U=this.__fE(R,S,V);

if(U){R.swipe=U;
this.__fz(R,c,S,qx.event.type.Swipe);
}}}},__fE:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fu;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fu,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fF:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fG(bi)){this.__fw=true;
}else if(bj==s){this.__fw=false;
}var bm=this.__fH(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fG:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fH:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fy(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fq=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fp,r,this.__fq);
Event.addNativeListener(this.__fp,q,this.__fq);
Event.addNativeListener(this.__fp,s,this.__fq);
Event.addNativeListener(this.__fp,m,this.__fq);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fr=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fp,k,this.__fr);
Event.addNativeListener(this.__fp,o,this.__fr);
Event.addNativeListener(this.__fp,l,this.__fr);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fp,r,this.__fq);
Event.removeNativeListener(this.__fp,q,this.__fq);
Event.removeNativeListener(this.__fp,s,this.__fq);
Event.removeNativeListener(this.__fp,m,this.__fq);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fp,k,this.__fr);
Event.removeNativeListener(this.__fp,o,this.__fr);
Event.removeNativeListener(this.__fp,l,this.__fr);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__fw){return;
}var bt=this.__fF(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fx=this.__fy(bu);
}this.__fz(bu,bv);
this.__fA(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__fn=this.__fo=this.__fp=this.__fx=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
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
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
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
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__ie=false;
this.__if=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__ii();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__ig:null,__ie:null,__if:null,__ih:null,__ii:function(){if(!this.__ig&&this.__ie&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__ig=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__ig=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__ig;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__ie=true;
this.__ii();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Environment.get(n)==f||qx.core.Environment.get(n)==d||qx.core.Environment.get(n)==g){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if((qx.core.Environment.get(n)==l)){var self=this;
var y=function(){try{document.documentElement.doScroll(a);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__ie=true;
this.__ii();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__ih){this.__ih=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
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
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__hA=j.getWindow();
this.__hB=k;
j.addListener(this.__hA,f,this.releaseCapture,this);
j.addListener(this.__hA,e,this.releaseCapture,this);
j.addListener(this.__hA,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__hB:null,__hC:null,__hD:true,__hA:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__hC&&this.__hE[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hD||!qx.dom.Hierarchy.contains(this.__hC,o)){o=this.__hC;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__hE:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__hC===q&&this.__hD==r){return;
}
if(this.__hC){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__hD=r;
this.__hC=q;
this.__hB.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hC;
},releaseCapture:function(){var s=this.__hC;

if(!s){return;
}this.__hC=null;
this.__hB.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hC=this.__hA=this.__hB=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
})();
(function(){var r="engine.name",q="",p="MSXML2.DOMDocument.3.0",o="mshtml",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="'",h="MSXML2.XMLHTTP.3.0",g="MSXML2.XMLHTTP.6.0",c=" xmlns='",f='<\?xml version="1.0" encoding="utf-8"?>\n<',e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Environment.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==p){v.setProperty(n,b);
}
if(u){var w=f;
w+=u;

if(t){w+=c+t+j;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Environment.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if((qx.core.Environment.get(r)==o)){var E=[a,p];
var F=[g,h];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(G){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__gN().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gM(f).pageX;
},getDocumentTop:function(g){return this.__gM(g).pageY;
},getScreenLeft:function(h){return this.__gM(h).screenX;
},getScreenTop:function(j){return this.__gM(j).screenY;
},getViewportLeft:function(k){return this.__gM(k).clientX;
},getViewportTop:function(l){return this.__gM(l).clientY;
},getIdentifier:function(m){return this.__gM(m).identifier;
},__gM:function(n){n=n==null?0:n;
return this.__gN()[n];
},__gN:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hY:[],__ia:{},remove:function(c){delete this.__ia[c.$$hash];
qx.lang.Array.remove(this.__hY,c);
},isVisible:function(d){return this.__ia[d.$$hash]||false;
},__ib:function(e){var g=this.__ia;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__ib(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__hY;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__hY;
var p=this.__ia;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__ib(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__hY=[];
}}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__fe=e;
this.__ff=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__ff:null,__fe:null,getId:function(){return this.__ff;
},getDecorator:function(){return this.__fe;
},resize:function(h,i){this.__fe.resize(this.getDomElement(),h,i);
},tint:function(j){this.__fe.tint(this.getDomElement(),j);
},getInsets:function(){return this.__fe.getInsets();
}},destruct:function(){this.__fe=null;
}});
})();
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{__dX:null,getScrollbarWidth:function(){if(this.__dX!==null){return this.__dX;
}var A=qx.bom.element.Style;
var C=function(G,H){return parseInt(A.get(G,H),10)||0;
};
var D=function(I){return (A.get(I,v)==y?0:C(I,r));
};
var B=function(J){return (A.get(J,w)==y?0:C(J,p));
};
var F=qx.core.Environment.select(i,{"mshtml":function(K){if(A.get(K,d)==h||K.clientWidth==0){return D(K);
}return Math.max(0,K.offsetWidth-K.clientLeft-K.clientWidth);
},"default":function(L){if(L.clientWidth==0){var M=A.get(L,f);
var N=(M==x||M==o?16:0);
return Math.max(0,D(L)+N);
}return Math.max(0,(L.offsetWidth-L.clientWidth-B(L)));
}});
var E=function(O){return F(O)-D(O);
};
var t=document.createElement(u);
var s=t.style;
s.height=s.width=m;
s.overflow=x;
document.body.appendChild(t);
var c=E(t);
this.__dX=c?c:16;
document.body.removeChild(t);
return this.__dX;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:
function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(T,U){return z+U+e;
}:
function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:
function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:
function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:
function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(br,bs){br.style.overflow=bs;
}:
function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bx){bx.style.overflow=j;
}:
function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bz,bA){bz.style.overflow=j;
}:
function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:
function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:
function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:
function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(bT,bU){bT.style.overflow=bU;
}:
function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<
1.8?
function(ca){ca.style.overflow=j;
}:
function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<
9.5?
function(cc,cd){cc.style.overflow=j;
}:
function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__hP:false,__hQ:{},__hR:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__hQ[i]=true;

if(!self.__hP){self.__hW.schedule();
self.__hP=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__hS){return;
}self.__hS=true;
self.__hW.cancel();
var j=self.__hQ;
self.__hT(function(){while(j.visibility||j.widget||j.appearance||j.layout||j.element){if(j.widget){delete j.widget;
qx.ui.core.queue.Widget.flush();
}
if(j.visibility){delete j.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(j.appearance){delete j.appearance;
qx.ui.core.queue.Appearance.flush();
}if(j.widget||j.visibility||j.appearance){continue;
}
if(j.layout){delete j.layout;
qx.ui.core.queue.Layout.flush();
}if(j.widget||j.visibility||j.appearance||j.layout){continue;
}
if(j.element){delete j.element;
qx.html.Element.flush();
}}},function(){self.__hP=false;
});
self.__hT(function(){if(j.dispose){delete j.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__hS=false;
});
self.__hR=0;
},__hT:function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){self.__hP=false;
self.__hS=false;
self.__hR+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){l();
}
if(self.__hR<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__hR-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}},__hU:function(e){var m=qx.ui.core.queue.Manager;
if(e.getData()==g){m.PAUSE=true;

if(m.__hV){window.clearTimeout(m.__hV);
}m.__hV=window.setTimeout(function(){m.PAUSE=false;
m.__hV=null;
m.flush();
},500);
}else{m.flush();
}}},defer:function(n){n.__hW=new qx.util.DeferredCall(n.flush);
qx.html.Element._scheduleFlush=n.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?n.__hU:n.flush);
}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dz=qx.dev.StackTrace.getStackTrace();
},members:{__dz:null,getStackTrace:function(){return this.__dz;
}}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__it=u;
this.length=u.length;
},members:{$$isString:true,length:0,__it:null,toString:function(){return this.__it;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b='__jJ',a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jJ=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__jK:null,compute:function(p,q,r,s,t,u,v){this.__jK=this.__jK||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__jK.set({axisX:this.__jO(u),axisY:this.__jO(v),edge:x,align:w});
return this.__jK.compute(p,q,r,s);
},__jL:null,__jM:null,__jN:null,__jO:function(z){switch(z){case a:this.__jL=this.__jL||new qx.util.placement.DirectAxis();
return this.__jL;
case d:this.__jM=this.__jM||new qx.util.placement.KeepAlignAxis();
return this.__jM;
case c:this.__jN=this.__jN||new qx.util.placement.BestFitAxis();
return this.__jN;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__jJ:null,compute:function(A,B,C,D){var E=this.getAxisX()||this.__jJ;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__jP());
var F=this.getAxisY()||this.__jJ;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__jQ());
return {left:G,top:top};
},__jP:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__jQ:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="engine.name",h="password",g="file",f="submit",e="reset",d="textarea",c="input",a="hidden",b="body";
qx.Class.define(k,{statics:{get:qx.core.Environment.select(i,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case c:switch(m.type){case j:case h:case a:case l:case e:case g:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case d:case b:case l:return m.createTextRange();
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
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(h,j,k){var n,r,m,s;
var o=j>k;
var t=Math.abs(j-k);
var u,p;
var q={};

for(r in h){n=h[r];
q[r]={potential:o?n.max-n.value:n.value-n.min,flex:o?n.flex:1/n.flex,offset:0};
}while(t!=0){s=Infinity;
m=0;

for(r in q){n=q[r];

if(n.potential>0){m+=n.flex;
s=Math.min(s,n.potential/n.flex);
}}if(m==0){break;
}s=Math.min(t,s*m)/m;
u=0;

for(r in q){n=q[r];

if(n.potential>0){p=Math.min(t,n.potential,Math.ceil(s*n.flex));
u+=p-s*n.flex;

if(u>=1){u-=1;
p-=1;
}n.potential-=p;

if(o){n.offset+=p;
}else{n.offset-=p;
}t-=p;
}}}return q;
},computeHorizontalAlignOffset:function(v,w,x,y,z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;

switch(v){case e:A=y;
break;
case a:A=x-w-z;
break;
case d:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,x-w-z);
}break;
}return A;
},computeVerticalAlignOffset:function(B,C,D,E,F){if(E==null){E=0;
}
if(F==null){F=0;
}var G=0;

switch(B){case c:G=E;
break;
case b:G=D-C-F;
break;
case g:G=Math.round((D-C)/2);
if(G<E){G=E;
}else if(G<F){G=Math.max(E,D-C-F);
}break;
}return G;
},collapseMargins:function(H){var I=0,K=0;

for(var i=0,l=arguments.length;i<l;i++){var J=arguments[i];

if(J<0){K=Math.min(K,J);
}else if(J>0){I=Math.max(I,J);
}}return I+K;
},computeHorizontalGaps:function(L,M,N){if(M==null){M=0;
}var O=0;

if(N){O+=L[0].getMarginLeft();

for(var i=1,l=L.length;i<l;i+=1){O+=this.collapseMargins(M,L[i-1].getMarginRight(),L[i].getMarginLeft());
}O+=L[l-1].getMarginRight();
}else{for(var i=1,l=L.length;i<l;i+=1){O+=L[i].getMarginLeft()+L[i].getMarginRight();
}O+=(M*(l-1));
}return O;
},computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginTop();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());
}S+=P[l-1].getMarginBottom();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();
}S+=(Q*(l-1));
}return S;
},computeHorizontalSeparatorGaps:function(T,U,V){var Y=qx.theme.manager.Decoration.getInstance().resolve(V);
var X=Y.getInsets();
var W=X.left+X.right;
var ba=0;

for(var i=0,l=T.length;i<l;i++){var bb=T[i];
ba+=bb.getMarginLeft()+bb.getMarginRight();
}ba+=(U+W+U)*(l-1);
return ba;
},computeVerticalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.top+bg.bottom;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginTop()+bj.getMarginBottom();
}bi+=(bd+bf+bd)*(l-1);
return bi;
},arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;
bo=bn;
}else if(bl<bk){bo-=(bk-bl);
bl=bk;
if(bo<bn){bo=bn;
}}else if(bo<bn){bl-=(bn-bo);
bo=bn;
if(bl<bk){bl=bk;
}}}
if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;
bo=bp;
}else if(bl>bm){bo+=(bl-bm);
bl=bm;
if(bo>bp){bo=bp;
}}else if(bo>bp){bl+=(bo-bp);
bo=bp;
if(bl>bm){bl=bm;
}}}return {begin:bl,end:bo};
}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__gK:null,__gL:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__gK=d;
this.__gL=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__gK=this.__gK;
g.__gL=this.__gL;
return g;
},getOrientation:function(){return this.__gK;
},isLandscape:function(){return this.__gL==c;
},isPortrait:function(){return this.__gL==a;
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__hx=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__hy=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__hz:null,__hx:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__hz);
this.__hz=null;
}else if(p){this.__hz=window.setInterval(this.__hx,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__hz){window.clearInterval(this.__hz);
}this.__hz=this.__hx=null;
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__fL=u;
this.__fM=u.getWindow();
this.__fN=this.__fM.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__fO:null,__fP:null,__fQ:null,__fR:null,__fS:null,__fL:null,__fM:null,__fN:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===
d?
function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===
d?
function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__fT:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__fM,b,qx.event.type.Data,[E||D.type]);
},__fU:function(){var H=[this.__fM,this.__fN,this.__fN.body];
var I=this.__fM;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__fO=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,q,this.__fO);
Event.addNativeListener(this.__fN,t,this.__fO);
Event.addNativeListener(this.__fN,r,this.__fO);
Event.addNativeListener(this.__fN,n,this.__fO);
Event.addNativeListener(this.__fN,p,this.__fO);
},_initMoveObserver:function(){this.__fP=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fN,j,this.__fP);
Event.addNativeListener(this.__fN,l,this.__fP);
Event.addNativeListener(this.__fN,k,this.__fP);
},_initWheelObserver:function(){this.__fQ=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__fU();
qx.bom.Event.addNativeListener(J.target,J.type,this.__fQ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,q,this.__fO);
Event.removeNativeListener(this.__fN,t,this.__fO);
Event.removeNativeListener(this.__fN,r,this.__fO);
Event.removeNativeListener(this.__fN,n,this.__fO);
Event.removeNativeListener(this.__fN,p,this.__fO);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fN,j,this.__fP);
Event.removeNativeListener(this.__fN,l,this.__fP);
Event.removeNativeListener(this.__fN,k,this.__fP);
},_stopWheelObserver:function(){var K=this.__fU();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__fQ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__fT(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__fV){this.__fV(M,N,O);
}
if(this.__fX){this.__fX(M,N,O);
}this.__fT(M,N,O);

if(this.__fW){this.__fW(M,N,O);
}
if(this.__fY){this.__fY(M,N,O);
}this.__fR=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__fT(P,o);
}),__fV:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__fT(Q,t,S);
}}},"default":null}),__fW:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__fT(T,p,V);
}},"default":null}),__fX:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__fR==r){this.__fT(W,q,Y);
}else if(X==n){this.__fT(W,r,Y);
}},"default":null}),__fY:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__fS=bc;
break;
case t:if(bc!==this.__fS){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__fS);
this.__fT(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fL=this.__fM=this.__fN=this.__fS=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__im=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__im:null,__in:{focusin:1,focusout:1,focus:1,blur:1},__io:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__in[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__in[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__in[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__io[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__im.getListeners(u,v,k);

if(!r||r.length===0){return;
}var m=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(m);
m.setTarget(o);
m.setRelatedTarget(w||null);
m.setCurrentTarget(u);
var y=j.getOriginalTarget();

if(y){var n=qx.ui.core.Widget.getWidgetByElement(y);

while(n&&n.isAnonymous()){n=n.getLayoutParent();
}m.setOriginalTarget(n);
}else{m.setOriginalTarget(p);
}for(var i=0,l=r.length;i<l;i++){var t=r[i].context||u;
r[i].handler.call(t,m);
}if(m.getPropagationStopped()){j.stopPropagation();
}
if(m.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(m);
},registerEvent:function(z,A,B){var C;

if(A===e||A===f){C=z.getFocusElement();
}else if(A===c||A===d){C=z.getContentElement();
}else{C=z.getContainerElement();
}
if(C){C.addListener(A,this._dispatchEvent,this,B);
}},unregisterEvent:function(D,E,F){var G;

if(E===e||E===f){G=D.getFocusElement();
}else if(E===c||E===d){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__im=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="engine.version",b="engine.name",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(b,{"opera":function(d){if(parseFloat(qx.core.Environment.get(c))<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(f){if(parseFloat(qx.core.Environment.get(c))<523.15){return (f||window).innerWidth;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientWidth:g.body.clientWidth;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}}),getHeight:qx.core.Environment.select(b,{"opera":function(j){if(parseFloat(qx.core.Environment.get(c))<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(l){if(parseFloat(qx.core.Environment.get(c))<523.15){return (l||window).innerHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:qx.core.Environment.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Environment.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollTop||t.body.scrollTop;
},"default":function(u){return (u||window).pageYOffset;
}}),getOrientation:function(v){var w=(v||window).orientation;

if(w==null){w=this.getWidth(v)>this.getHeight(v)?90:0;
}return w;
},isLandscape:function(x){return Math.abs(this.getOrientation(x))==90;
},isPortrait:function(y){var z=this.getOrientation(y);
return (z==0||z==180);
}}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__hw:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__hw.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__hw;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__hw;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__hw;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]&&(!(J[name]===undefined)||L.qxProperties[name])){if(K==null){if(L.removeableProperties[name]){J.removeAttribute(name);
return;
}else if(typeof L.propertyDefault[name]!==i){K=L.propertyDefault[name];
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(M,name){this.set(M,name,null);
}}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addAt:function(e,f,g){this._addAt(e,f,g);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(k,l,m){this._addAfter(k,l,m);
},remove:function(n){this._remove(n);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){return this._removeAll();
}},statics:{remap:function(p){p.getChildren=p._getChildren;
p.hasChildren=p._hasChildren;
p.indexOf=p._indexOf;
p.add=p._add;
p.addAt=p._addAt;
p.addBefore=p._addBefore;
p.addAfter=p._addAfter;
p.remove=p._remove;
p.removeAt=p._removeAt;
p.removeAll=p._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cs={};
},statics:{MAX_SIZE:15,__ct:a},members:{__cs:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__ct;
e=c;
}var g=this.__cs;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__ct){i.dispose();
return;
}var k=this.__cs;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__cs;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__cs=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__cu:null,__cv:null,__cw:null,__cx:null,__cy:null,__cz:null,__cA:null,getBounds:function(){return this.__cz||this.__cv||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__cu){this.__cu=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__cv;

if(!G){G=this.__cv={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__cw){F.local=true;
delete this.__cw;
}
if(this.__cy){F.margin=true;
delete this.__cy;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__cw;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__cw=true;
this.__cx=null;
},getSizeHint:function(H){var I=this.__cx;

if(I){return I;
}
if(H===false){return null;
}I=this.__cx=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__cu&&this.getHeight()==null){I.height=this.__cu;
}if(I.minWidth>I.width){I.width=I.minWidth;
}
if(I.maxWidth<I.width){I.width=I.maxWidth;
}
if(!this.getAllowGrowX()){I.maxWidth=I.width;
}
if(!this.getAllowShrinkX()){I.minWidth=I.width;
}if(I.minHeight>I.height){I.height=I.minHeight;
}
if(I.maxHeight<I.height){I.height=I.maxHeight;
}
if(!this.getAllowGrowY()){I.maxHeight=I.height;
}
if(!this.getAllowShrinkY()){I.minHeight=I.height;
}return I;
},_computeSizeHint:function(){var N=this.getMinWidth()||0;
var K=this.getMinHeight()||0;
var O=this.getWidth()||N;
var M=this.getHeight()||K;
var J=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:N,width:O,maxWidth:J,minHeight:K,height:M,maxHeight:L};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Q){var R=this._getLayout();

if(R&&R.hasHeightForWidth()){return R.getHeightForWidth(Q);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__cy=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__cz;
},setUserBounds:function(S,top,T,U){this.__cz={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__cz;
qx.ui.core.queue.Layout.add(this);
},__cB:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__cA;

if(!W){W=this.__cA={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__cA||this.__cB;
},clearLayoutProperties:function(){delete this.__cA;
},updateLayoutProperties:function(Y){var ba=this._getLayout();

if(ba){var bb;
ba.invalidateChildrenCache();
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
},clone:function(){var bc=qx.core.Object.prototype.clone.call(this);
var bd=this.__cA;

if(bd){bc.__cA=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__cA=this.__cv=this.__cz=this.__cx=null;
}});
})();
(function(){var bY="px",bX="Boolean",bW="qx.event.type.Drag",bV="qx.event.type.Mouse",bU="visible",bT="qx.event.type.Focus",bS="Integer",bR="qx.event.type.Touch",bQ="qx.event.type.Data",bP="excluded",bx="_applyPadding",bw="qx.event.type.Event",bv="on",bu="hidden",bt="engine.name",bs="contextmenu",br="String",bq="tabIndex",bp="focused",bo="changeVisibility",cg="mshtml",ch="hovered",ce="qx.event.type.KeySequence",cf="absolute",cc="backgroundColor",cd="drag",ca="div",cb="disabled",ci="move",cj="dragstart",bI="qx.dynlocale",bH="dragchange",bK="dragend",bJ="resize",bM="Decorator",bL="zIndex",bO="opacity",bN="default",bG="Color",bF="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="_applyBackgroundColor",g="event.pointer",h="__cP",j="_applyFocusable",k="changeShadow",m="qx.event.type.KeyInput",n="createChildControl",o="Font",cn="__cC",cm="_applyShadow",cl="_applyEnabled",ck="_applySelectable",cr="Number",cq="_applyKeepActive",cp="__cN",co="_applyVisibility",ct="repeat",cs="qxDraggable",N="syncAppearance",O="paddingLeft",L="_applyDroppable",M="#",R="qx.event.type.MouseWheel",S="_applyCursor",P="_applyDraggable",Q="changeTextColor",J="$$widget",K="changeContextMenu",w="paddingTop",v="changeSelectable",y="hideFocus",x="none",s="outline",r="_applyAppearance",u="_applyOpacity",t="url(",q=")",p="qx.ui.core.Widget",X="__cD",Y="_applyFont",ba="cursor",bb="qxDroppable",T="__cL",U="changeZIndex",V="changeEnabled",W="__cG",bc="changeFont",bd="_applyDecorator",G="_applyZIndex",F="_applyTextColor",E="qx.ui.menu.Menu",D="__cH",C="_applyToolTipText",B="true",A="widget",z="changeDecorator",I="_applyTabIndex",H="changeAppearance",be="shorthand",bf="/",bg="",bh="_applyContextMenu",bi="paddingBottom",bj="changeNativeContextMenu",bk="undefined",bl="qx.ui.tooltip.ToolTip",bm="qxKeepActive",bn="_applyKeepFocus",bB="paddingRight",bA="changeBackgroundColor",bz="changeLocale",by="qxKeepFocus",bE="__cI",bD="opera",bC="qx/static/blank.gif";
qx.Class.define(p,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__cC=this._createContainerElement();
this.__cD=this.__cO();
this.__cC.add(this.__cD);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bw,disappear:bw,createChildControl:bQ,resize:bQ,move:bQ,syncAppearance:bQ,mousemove:bV,mouseover:bV,mouseout:bV,mousedown:bV,mouseup:bV,click:bV,dblclick:bV,contextmenu:bV,beforeContextmenuOpen:bQ,mousewheel:R,touchstart:bR,touchend:bR,touchmove:bR,touchcancel:bR,tap:bR,swipe:bR,keyup:ce,keydown:ce,keypress:ce,keyinput:m,focus:bT,blur:bT,focusin:bT,focusout:bT,activate:bT,deactivate:bT,capture:bw,losecapture:bw,drop:bW,dragleave:bW,dragover:bW,drag:bW,dragstart:bW,dragend:bW,dragchange:bW,droprequest:bW},properties:{paddingTop:{check:bS,init:0,apply:bx,themeable:true},paddingRight:{check:bS,init:0,apply:bx,themeable:true},paddingBottom:{check:bS,init:0,apply:bx,themeable:true},paddingLeft:{check:bS,init:0,apply:bx,themeable:true},padding:{group:[w,bB,bi,O],mode:be,themeable:true},zIndex:{nullable:true,init:null,apply:G,event:U,check:bS,themeable:true},decorator:{nullable:true,init:null,apply:bd,event:z,check:bM,themeable:true},shadow:{nullable:true,init:null,apply:cm,event:k,check:bM,themeable:true},backgroundColor:{nullable:true,check:bG,apply:f,event:bA,themeable:true},textColor:{nullable:true,check:bG,apply:F,event:Q,themeable:true,inheritable:true},font:{nullable:true,apply:Y,check:o,event:bc,themeable:true,inheritable:true,dereference:true},opacity:{check:cr,apply:u,themeable:true,nullable:true,init:null},cursor:{check:br,apply:S,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bl,nullable:true},toolTipText:{check:br,nullable:true,event:bF,apply:C},toolTipIcon:{check:br,nullable:true,event:bF},blockToolTip:{check:bX,init:false},visibility:{check:[bU,bu,bP],init:bU,apply:co,event:bo},enabled:{init:true,check:bX,inheritable:true,apply:cl,event:V},anonymous:{init:false,check:bX},tabIndex:{check:bS,nullable:true,apply:I},focusable:{check:bX,init:false,apply:j},keepFocus:{check:bX,init:false,apply:bn},keepActive:{check:bX,init:false,apply:cq},draggable:{check:bX,init:false,apply:P},droppable:{check:bX,init:false,apply:L},selectable:{check:bX,init:false,event:v,apply:ck},contextMenu:{check:E,apply:bh,nullable:true,event:K},nativeContextMenu:{check:bX,init:false,themeable:true,event:bj,apply:d},appearance:{check:br,init:A,apply:r,event:H}},statics:{DEBUG:false,getWidgetByElement:function(cu,cv){while(cu){var cw=cu.$$widget;
if(cw!=null){var cx=qx.core.ObjectRegistry.fromHashCode(cw);
if(!cv||!cx.getAnonymous()){return cx;
}}try{cu=cu.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cy){while(cy){if(parent==cy){return true;
}cy=cy.getLayoutParent();
}return false;
},__cE:new qx.ui.core.DecoratorFactory(),__cF:new qx.ui.core.DecoratorFactory()},members:{__cC:null,__cD:null,__cG:null,__cH:null,__cI:null,__cJ:null,__cK:null,__cL:null,_getLayout:function(){return this.__cL;
},_setLayout:function(cz){if(this.__cL){this.__cL.connectToWidget(null);
}
if(cz){cz.connectToWidget(this);
}this.__cL=cz;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cA=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cA);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cA);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__cM:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cB=qx.theme.manager.Decoration.getInstance();
var cD=cB.resolve(a).getInsets();
var cC=cB.resolve(b).getInsets();

if(cD.top!=cC.top||cD.right!=cC.right||cD.bottom!=cC.bottom||cD.left!=cC.left){return true;
}return false;
},renderLayout:function(cE,top,cF,cG){var cP=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,cE,top,cF,cG);
if(!cP){return null;
}var cI=this.getContainerElement();
var content=this.getContentElement();
var cM=cP.size||this._updateInsets;
var cQ=bY;
var cN={};
if(cP.position){cN.left=cE+cQ;
cN.top=top+cQ;
}if(cP.size){cN.width=cF+cQ;
cN.height=cG+cQ;
}
if(cP.position||cP.size){cI.setStyles(cN);
}
if(cM||cP.local||cP.margin){var cH=this.getInsets();
var innerWidth=cF-cH.left-cH.right;
var innerHeight=cG-cH.top-cH.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cK={};

if(this._updateInsets){cK.left=cH.left+cQ;
cK.top=cH.top+cQ;
}
if(cM){cK.width=innerWidth+cQ;
cK.height=innerHeight+cQ;
}
if(cM||this._updateInsets){content.setStyles(cK);
}
if(cP.size){var cO=this.__cI;

if(cO){cO.setStyles({width:cF+bY,height:cG+bY});
}}
if(cP.size||this._updateInsets){if(this.__cG){this.__cG.resize(cF,cG);
}}
if(cP.size){if(this.__cH){var cH=this.__cH.getInsets();
var cL=cF+cH.left+cH.right;
var cJ=cG+cH.top+cH.bottom;
this.__cH.resize(cL,cJ);
}}
if(cM||cP.local||cP.margin){if(this.__cL&&this.hasLayoutChildren()){this.__cL.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cP.position&&this.hasListener(ci)){this.fireDataEvent(ci,this.getBounds());
}
if(cP.size&&this.hasListener(bJ)){this.fireDataEvent(bJ,this.getBounds());
}delete this._updateInsets;
return cP;
},__cN:null,clearSeparators:function(){var cS=this.__cN;

if(!cS){return;
}var cT=qx.ui.core.Widget.__cE;
var content=this.getContentElement();
var cR;

for(var i=0,l=cS.length;i<l;i++){cR=cS[i];
cT.poolDecorator(cR);
content.remove(cR);
}cS.length=0;
},renderSeparator:function(cU,cV){var cW=qx.ui.core.Widget.__cE.getDecoratorElement(cU);
this.getContentElement().add(cW);
cW.resize(cV.width,cV.height);
cW.setStyles({left:cV.left+bY,top:cV.top+bY});
if(!this.__cN){this.__cN=[cW];
}else{this.__cN.push(cW);
}},_computeSizeHint:function(){var de=this.getWidth();
var dd=this.getMinWidth();
var cY=this.getMaxWidth();
var dc=this.getHeight();
var da=this.getMinHeight();
var db=this.getMaxHeight();
var df=this._getContentHint();
var cX=this.getInsets();
var dh=cX.left+cX.right;
var dg=cX.top+cX.bottom;

if(de==null){de=df.width+dh;
}
if(dc==null){dc=df.height+dg;
}
if(dd==null){dd=dh;

if(df.minWidth!=null){dd+=df.minWidth;
}}
if(da==null){da=dg;

if(df.minHeight!=null){da+=df.minHeight;
}}
if(cY==null){if(df.maxWidth==null){cY=Infinity;
}else{cY=df.maxWidth+dh;
}}
if(db==null){if(df.maxHeight==null){db=Infinity;
}else{db=df.maxHeight+dg;
}}return {width:de,minWidth:dd,maxWidth:cY,height:dc,minHeight:da,maxHeight:db};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__cL){this.__cL.invalidateLayoutCache();
}},_getContentHint:function(){var dj=this.__cL;

if(dj){if(this.hasLayoutChildren()){var di;
var dk=dj.getSizeHint();
return dk;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dl){var dq=this.getInsets();
var dt=dq.left+dq.right;
var ds=dq.top+dq.bottom;
var dr=dl-dt;
var dn=this._getLayout();

if(dn&&dn.hasHeightForWidth()){var dm=dn.getHeightForWidth(dl);
}else{dm=this._getContentHeightForWidth(dr);
}var dp=dm+ds;
return dp;
},_getContentHeightForWidth:function(du){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dw=this.getPaddingRight();
var dy=this.getPaddingBottom();
var dx=this.getPaddingLeft();

if(this.__cG){var dv=this.__cG.getInsets();
top+=dv.top;
dw+=dv.right;
dy+=dv.bottom;
dx+=dv.left;
}return {"top":top,"right":dw,"bottom":dy,"left":dx};
},getInnerSize:function(){var dA=this.getBounds();

if(!dA){return null;
}var dz=this.getInsets();
return {width:dA.width-dz.left-dz.right,height:dA.height-dz.top-dz.bottom};
},show:function(){this.setVisibility(bU);
},hide:function(){this.setVisibility(bu);
},exclude:function(){this.setVisibility(bP);
},isVisible:function(){return this.getVisibility()===bU;
},isHidden:function(){return this.getVisibility()!==bU;
},isExcluded:function(){return this.getVisibility()===bP;
},isSeeable:function(){var dC=this.getContainerElement().getDomElement();

if(dC){return dC.offsetWidth>0;
}var dB=this;

do{if(!dB.isVisible()){return false;
}
if(dB.isRootWidget()){return true;
}dB=dB.getLayoutParent();
}while(dB);
return false;
},_createContainerElement:function(){var dE={"$$widget":this.toHashCode()};
var dD={zIndex:0,position:cf};
return new qx.html.Element(ca,dD,dE);
},__cO:function(){var dF=this._createContentElement();
dF.setStyles({"position":cf,"zIndex":10});
return dF;
},_createContentElement:function(){return new qx.html.Element(ca,{overflowX:bu,overflowY:bu});
},getContainerElement:function(){return this.__cC;
},getContentElement:function(){return this.__cD;
},getDecoratorElement:function(){return this.__cG||null;
},getShadowElement:function(){return this.__cH||null;
},__cP:null,getLayoutChildren:function(){var dH=this.__cP;

if(!dH){return this.__cQ;
}var dI;

for(var i=0,l=dH.length;i<l;i++){var dG=dH[i];

if(dG.hasUserBounds()||dG.isExcluded()){if(dI==null){dI=dH.concat();
}qx.lang.Array.remove(dI,dG);
}}return dI||dH;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dJ=this.__cL;

if(dJ){dJ.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dK=this.__cP;

if(!dK){return false;
}var dL;

for(var i=0,l=dK.length;i<l;i++){dL=dK[i];

if(!dL.hasUserBounds()&&!dL.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__cQ:[],_getChildren:function(){return this.__cP||this.__cQ;
},_indexOf:function(dM){var dN=this.__cP;

if(!dN){return -1;
}return dN.indexOf(dM);
},_hasChildren:function(){var dO=this.__cP;
return dO!=null&&(!!dO[0]);
},addChildrenToQueue:function(dP){var dQ=this.__cP;

if(!dQ){return;
}var dR;

for(var i=0,l=dQ.length;i<l;i++){dR=dQ[i];
dP.push(dR);
dR.addChildrenToQueue(dP);
}},_add:function(dS,dT){if(dS.getLayoutParent()==this){qx.lang.Array.remove(this.__cP,dS);
}
if(this.__cP){this.__cP.push(dS);
}else{this.__cP=[dS];
}this.__cR(dS,dT);
},_addAt:function(dU,dV,dW){if(!this.__cP){this.__cP=[];
}if(dU.getLayoutParent()==this){qx.lang.Array.remove(this.__cP,dU);
}var dX=this.__cP[dV];

if(dX===dU){dU.setLayoutProperties(dW);
}
if(dX){qx.lang.Array.insertBefore(this.__cP,dU,dX);
}else{this.__cP.push(dU);
}this.__cR(dU,dW);
},_addBefore:function(dY,ea,eb){if(dY==ea){return;
}
if(!this.__cP){this.__cP=[];
}if(dY.getLayoutParent()==this){qx.lang.Array.remove(this.__cP,dY);
}qx.lang.Array.insertBefore(this.__cP,dY,ea);
this.__cR(dY,eb);
},_addAfter:function(ec,ed,ee){if(ec==ed){return;
}
if(!this.__cP){this.__cP=[];
}if(ec.getLayoutParent()==this){qx.lang.Array.remove(this.__cP,ec);
}qx.lang.Array.insertAfter(this.__cP,ec,ed);
this.__cR(ec,ee);
},_remove:function(ef){if(!this.__cP){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__cP,ef);
this.__cS(ef);
},_removeAt:function(eg){if(!this.__cP){throw new Error("This widget has no children!");
}var eh=this.__cP[eg];
qx.lang.Array.removeAt(this.__cP,eg);
this.__cS(eh);
return eh;
},_removeAll:function(){if(!this.__cP){return [];
}var ei=this.__cP.concat();
this.__cP.length=0;

for(var i=ei.length-1;i>=0;i--){this.__cS(ei[i]);
}qx.ui.core.queue.Layout.add(this);
return ei;
},_afterAddChild:null,_afterRemoveChild:null,__cR:function(ej,ek){var parent=ej.getLayoutParent();

if(parent&&parent!=this){parent._remove(ej);
}ej.setLayoutParent(this);
if(ek){ej.setLayoutProperties(ek);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ej);
}},__cS:function(em){if(em.getLayoutParent()!==this){throw new Error("Remove Error: "+em+" is not a child of this widget!");
}em.setLayoutParent(null);
if(this.__cL){this.__cL.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(em);
}},capture:function(en){this.getContainerElement().capture(en);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eo,ep,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__cI){return;
}var eq=this.__cI=new qx.html.Element;
eq.setStyles({position:cf,top:0,left:0,zIndex:7});
var er=this.getBounds();

if(er){this.__cI.setStyles({width:er.width+bY,height:er.height+bY});
}if((qx.core.Environment.get(bt)==cg)){eq.setStyles({backgroundImage:t+qx.util.ResourceManager.getInstance().toUri(bC)+q,backgroundRepeat:ct});
}this.getContainerElement().add(eq);
},_applyDecorator:function(es,et){var ew=qx.ui.core.Widget.__cE;
var eu=this.getContainerElement();
if(!this.__cI&&!qx.core.Environment.get(g)){this._createProtectorElement();
}if(et){eu.remove(this.__cG);
ew.poolDecorator(this.__cG);
}if(es){var ev=this.__cG=ew.getDecoratorElement(es);
ev.setStyle(bL,5);
eu.add(ev);
}else{delete this.__cG;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__cM(et,es)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(es){var ex=this.getBounds();

if(ex){ev.resize(ex.width,ex.height);
this.__cI&&
this.__cI.setStyles({width:ex.width+bY,height:ex.height+bY});
}}},_applyShadow:function(ey,ez){var eG=qx.ui.core.Widget.__cF;
var eB=this.getContainerElement();
if(ez){eB.remove(this.__cH);
eG.poolDecorator(this.__cH);
}if(ey){var eD=this.__cH=eG.getDecoratorElement(ey);
eB.add(eD);
var eF=eD.getInsets();
eD.setStyles({left:(-eF.left)+bY,top:(-eF.top)+bY});
var eE=this.getBounds();

if(eE){var eC=eE.width+eF.left+eF.right;
var eA=eE.height+eF.top+eF.bottom;
eD.resize(eC,eA);
}eD.tint(null);
}else{delete this.__cH;
}},_applyToolTipText:function(eH,eI){if(qx.core.Environment.get(bI)){if(this.__cK){return;
}var eJ=qx.locale.Manager.getInstance();
this.__cK=eJ.addListener(bz,function(){var eK=this.getToolTipText();

if(eK&&eK.translate){this.setToolTipText(eK.translate());
}},this);
}},_applyTextColor:function(eL,eM){},_applyZIndex:function(eN,eO){this.getContainerElement().setStyle(bL,eN==null?0:eN);
},_applyVisibility:function(eP,eQ){var eR=this.getContainerElement();

if(eP===bU){eR.show();
}else{eR.hide();
}var parent=this.$$parent;

if(parent&&(eQ==null||eP==null||eQ===bP||eP===bP)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eS,eT){this.getContainerElement().setStyle(bO,eS==1?null:eS);
if((qx.core.Environment.get(bt)==cg)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eU=(eS==1||eS==null)?null:0.99;
this.getContentElement().setStyle(bO,eU);
}}},_applyCursor:function(eV,eW){if(eV==null&&!this.isSelectable()){eV=bN;
}this.getContainerElement().setStyle(ba,eV,qx.core.Environment.get(bt)==bD);
},_applyBackgroundColor:function(eX,eY){var fa=this.getBackgroundColor();
var fc=this.getContainerElement();

if(this.__cG){this.__cG.tint(fa);
fc.setStyle(cc,null);
}else{var fb=qx.theme.manager.Color.getInstance().resolve(fa);
fc.setStyle(cc,fb);
}},_applyFont:function(fd,fe){},__cT:null,$$stateChanges:null,_forwardStates:null,hasState:function(ff){var fg=this.__cT;
return !!fg&&!!fg[ff];
},addState:function(fh){var fi=this.__cT;

if(!fi){fi=this.__cT={};
}
if(fi[fh]){return;
}this.__cT[fh]=true;
if(fh===ch){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fl=this.__cW;

if(forward&&forward[fh]&&fl){var fj;

for(var fk in fl){fj=fl[fk];

if(fj instanceof qx.ui.core.Widget){fl[fk].addState(fh);
}}}},removeState:function(fm){var fn=this.__cT;

if(!fn||!fn[fm]){return;
}delete this.__cT[fm];
if(fm===ch){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fq=this.__cW;

if(forward&&forward[fm]&&fq){for(var fp in fq){var fo=fq[fp];

if(fo instanceof qx.ui.core.Widget){fo.removeState(fm);
}}}},replaceState:function(fr,fs){var ft=this.__cT;

if(!ft){ft=this.__cT={};
}
if(!ft[fs]){ft[fs]=true;
}
if(ft[fr]){delete ft[fr];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fw=this.__cW;

if(forward&&forward[fs]&&fw){for(var fv in fw){var fu=fw[fv];

if(fu instanceof qx.ui.core.Widget){fu.replaceState(fr,fs);
}}}},__cU:null,__cV:null,syncAppearance:function(){var fB=this.__cT;
var fA=this.__cU;
var fC=qx.theme.manager.Appearance.getInstance();
var fy=qx.core.Property.$$method.setThemed;
var fG=qx.core.Property.$$method.resetThemed;
if(this.__cV){delete this.__cV;
if(fA){var fx=fC.styleFrom(fA,fB,null,this.getAppearance());
fA=null;
}}if(!fA){var fz=this;
var fF=[];

do{fF.push(fz.$$subcontrol||fz.getAppearance());
}while(fz=fz.$$subparent);
fA=fF.reverse().join(bf).replace(/#[0-9]+/g,bg);
this.__cU=fA;
}var fD=fC.styleFrom(fA,fB,null,this.getAppearance());

if(fD){var fE;

if(fx){for(var fE in fx){if(fD[fE]===undefined){this[fG[fE]]();
}}}for(var fE in fD){fD[fE]===undefined?this[fG[fE]]():this[fy[fE]](fD[fE]);
}}else if(fx){for(var fE in fx){this[fG[fE]]();
}}this.fireDataEvent(N,this.__cT);
},_applyAppearance:function(fH,fI){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__cJ){qx.ui.core.queue.Appearance.add(this);
this.__cJ=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__cV=true;
qx.ui.core.queue.Appearance.add(this);
var fL=this.__cW;

if(fL){var fJ;

for(var fK in fL){fJ=fL[fK];

if(fJ instanceof qx.ui.core.Widget){fJ.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fM=this;

while(fM.getAnonymous()){fM=fM.getLayoutParent();

if(!fM){return null;
}}return fM;
},getFocusTarget:function(){var fN=this;

if(!fN.getEnabled()){return null;
}
while(fN.getAnonymous()||!fN.getFocusable()){fN=fN.getLayoutParent();

if(!fN||!fN.getEnabled()){return null;
}}return fN;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fO,fP){var fQ=this.getFocusElement();
if(fO){var fR=this.getTabIndex();

if(fR==null){fR=1;
}fQ.setAttribute(bq,fR);
if((qx.core.Environment.get(bt)==cg)){fQ.setAttribute(y,B);
}else{fQ.setStyle(s,x);
}}else{if(fQ.isNativelyFocusable()){fQ.setAttribute(bq,-1);
}else if(fP){fQ.setAttribute(bq,null);
}}},_applyKeepFocus:function(fS){var fT=this.getFocusElement();
fT.setAttribute(by,fS?bv:null);
},_applyKeepActive:function(fU){var fV=this.getContainerElement();
fV.setAttribute(bm,fU?bv:null);
},_applyTabIndex:function(fW){if(fW==null){fW=1;
}else if(fW<1||fW>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fW!=null){this.getFocusElement().setAttribute(bq,fW);
}},_applySelectable:function(fX,fY){if(fY!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(fX);
},_applyEnabled:function(ga,gb){if(ga===false){this.addState(cb);
this.removeState(ch);
if(this.isFocusable()){this.removeState(bp);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cb);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gc,gd,name){},_applyContextMenu:function(ge,gf){if(gf){gf.removeState(bs);

if(gf.getOpener()==this){gf.resetOpener();
}
if(!ge){this.removeListener(bs,this._onContextMenuOpen);
gf.removeListener(bo,this._onBeforeContextMenuOpen,this);
}}
if(ge){ge.setOpener(this);
ge.addState(bs);

if(!gf){this.addListener(bs,this._onContextMenuOpen);
ge.addListener(bo,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bU&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gg,gh){if(!this.isEnabled()&&gg===true){gg=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gg){this.addListener(cj,this._onDragStart);
this.addListener(cd,this._onDrag);
this.addListener(bK,this._onDragEnd);
this.addListener(bH,this._onDragChange);
}else{this.removeListener(cj,this._onDragStart);
this.removeListener(cd,this._onDrag);
this.removeListener(bK,this._onDragEnd);
this.removeListener(bH,this._onDragChange);
}this.getContainerElement().setAttribute(cs,gg?bv:null);
},_applyDroppable:function(gi,gj){if(!this.isEnabled()&&gi===true){gi=false;
}this.getContainerElement().setAttribute(bb,gi?bv:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bN);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gk=qx.ui.core.DragDropCursor.getInstance();
var gl=e.getCurrentAction();
gl?gk.setAction(gl):gk.resetAction();
},visualizeFocus:function(){this.addState(bp);
},visualizeBlur:function(){this.removeState(bp);
},scrollChildIntoView:function(gm,gn,go,gp){gp=typeof gp==bk?true:gp;
var gq=qx.ui.core.queue.Layout;
var parent;
if(gp){gp=!gq.isScheduled(gm);
parent=gm.getLayoutParent();
if(gp&&parent){gp=!gq.isScheduled(parent);
if(gp){parent.getChildren().forEach(function(gr){gp=gp&&!gq.isScheduled(gr);
});
}}}this.scrollChildIntoViewX(gm,gn,gp);
this.scrollChildIntoViewY(gm,go,gp);
},scrollChildIntoViewX:function(gs,gt,gu){this.getContentElement().scrollChildIntoViewX(gs.getContainerElement(),gt,gu);
},scrollChildIntoViewY:function(gv,gw,gx){this.getContentElement().scrollChildIntoViewY(gv.getContainerElement(),gw,gx);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gy){if(!this.__cW){return false;
}return !!this.__cW[gy];
},__cW:null,_getCreatedChildControls:function(){return this.__cW;
},getChildControl:function(gz,gA){if(!this.__cW){if(gA){return null;
}this.__cW={};
}var gB=this.__cW[gz];

if(gB){return gB;
}
if(gA===true){return null;
}return this._createChildControl(gz);
},_showChildControl:function(gC){var gD=this.getChildControl(gC);
gD.show();
return gD;
},_excludeChildControl:function(gE){var gF=this.getChildControl(gE,true);

if(gF){gF.exclude();
}},_isChildControlVisible:function(gG){var gH=this.getChildControl(gG,true);

if(gH){return gH.isVisible();
}return false;
},_createChildControl:function(gI){if(!this.__cW){this.__cW={};
}else if(this.__cW[gI]){throw new Error("Child control '"+gI+"' already created!");
}var gM=gI.indexOf(M);

if(gM==-1){var gJ=this._createChildControlImpl(gI);
}else{var gJ=this._createChildControlImpl(gI.substring(0,gM),gI.substring(gM+1,gI.length));
}
if(!gJ){throw new Error("Unsupported control: "+gI);
}gJ.$$subcontrol=gI;
gJ.$$subparent=this;
var gK=this.__cT;
var forward=this._forwardStates;

if(gK&&forward&&gJ instanceof qx.ui.core.Widget){for(var gL in gK){if(forward[gL]){gJ.addState(gL);
}}}this.fireDataEvent(n,gJ);
return this.__cW[gI]=gJ;
},_createChildControlImpl:function(gN,gO){return null;
},_disposeChildControls:function(){var gS=this.__cW;

if(!gS){return;
}var gQ=qx.ui.core.Widget;

for(var gR in gS){var gP=gS[gR];

if(!gQ.contains(this,gP)){gP.destroy();
}else{gP.dispose();
}}delete this.__cW;
},_findTopControl:function(){var gT=this;

while(gT){if(!gT.$$subparent){return gT;
}gT=gT.$$subparent;
}return null;
},getContainerLocation:function(gU){var gV=this.getContainerElement().getDomElement();
return gV?qx.bom.element.Location.get(gV,gU):null;
},getContentLocation:function(gW){var gX=this.getContentElement().getDomElement();
return gX?qx.bom.element.Location.get(gX,gW):null;
},setDomLeft:function(gY){var ha=this.getContainerElement().getDomElement();

if(ha){ha.style.left=gY+bY;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hb){var hc=this.getContainerElement().getDomElement();

if(hc){hc.style.top=hb+bY;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(hd,top){var he=this.getContainerElement().getDomElement();

if(he){he.style.left=hd+bY;
he.style.top=top+bY;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hf=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hg=this.getChildren();

for(var i=0,l=hg.length;i<l;i++){hf.add(hg[i].clone());
}}return hf;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bI)){if(this.__cK){qx.locale.Manager.getInstance().removeListenerById(this.__cK);
}}this.getContainerElement().setAttribute(J,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hi=qx.ui.core.Widget;
var hh=this.getContainerElement();

if(this.__cG){hh.remove(this.__cG);
hi.__cE.poolDecorator(this.__cG);
}
if(this.__cH){hh.remove(this.__cH);
hi.__cF.poolDecorator(this.__cH);
}this.clearSeparators();
this.__cG=this.__cH=this.__cN=null;
}else{this._disposeArray(cp);
this._disposeObjects(W,D);
}this._disposeArray(h);
this.__cT=this.__cW=null;
this._disposeObjects(T,cn,X,bE);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__ic:[],remove:function(c){qx.lang.Array.remove(this.__ic,c);
},add:function(d){var e=this.__ic;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__ic,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__ic;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,x=Object.prototype.toString,p=false,z=true,t=/\\/g,g=/\W/;
[0,0].sort(function(){z=false;
return 0;
});
var s=function(B,C,D,E){D=D||[];
C=C||document;
var N=C;

if(C.nodeType!==1&&C.nodeType!==9){return [];
}
if(!B||typeof B!=="string"){return D;
}var m,H,F,J,L,I,O,i,P=true,G=s.isXML(C),K=[],M=B;
do{o.exec("");
m=o.exec(M);

if(m){M=m[3];
K.push(m[1]);

if(m[2]){J=m[3];
break;
}}}while(m);

if(K.length>1&&q.exec(B)){if(K.length===2&&k.relative[K[0]]){H=h(K[0]+K[1],C);
}else{H=k.relative[K[0]]?[C]:s(K.shift(),C);

while(K.length){B=K.shift();

if(k.relative[B]){B+=K.shift();
}H=h(B,H);
}}}else{if(!E&&K.length>1&&C.nodeType===9&&!G&&k.match.ID.test(K[0])&&!k.match.ID.test(K[K.length-1])){L=s.find(K.shift(),C,G);
C=L.expr?s.filter(L.expr,L.set)[0]:L.set[0];
}
if(C){L=E?
{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
H=L.expr?s.filter(L.expr,L.set):L.set;

if(K.length>0){F=f(H);
}else{P=false;
}
while(K.length){I=K.pop();
O=I;

if(!k.relative[I]){I="";
}else{O=K.pop();
}
if(O==null){O=C;
}k.relative[I](F,O,G);
}}else{F=K=[];
}}
if(!F){F=H;
}
if(!F){s.error(I||B);
}
if(x.call(F)==="[object Array]"){if(!P){D.push.apply(D,F);
}else if(C&&C.nodeType===1){for(i=0;F[i]!=null;i++){if(F[i]&&(F[i]===true||F[i].nodeType===1&&s.contains(C,F[i]))){D.push(H[i]);
}}}else{for(i=0;F[i]!=null;i++){if(F[i]&&F[i].nodeType===1){D.push(H[i]);
}}}}else{f(F,D);
}
if(J){s(J,N,D,E);
s.uniqueSort(D);
}return D;
};
s.uniqueSort=function(Q){if(u){p=z;
Q.sort(u);

if(p){for(var i=1;i<Q.length;i++){if(Q[i]===Q[i-1]){Q.splice(i--,1);
}}}}return Q;
};
s.matches=function(R,S){return s(R,null,null,S);
};
s.matchesSelector=function(T,U){return s(U,null,null,[T]).length>0;
};
s.find=function(V,W,X){var Y;

if(!V){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var bb,ba=k.order[i];

if((bb=k.leftMatch[ba].exec(V))){var bc=bb[1];
bb.splice(1,1);

if(bc.substr(bc.length-1)!=="\\"){bb[1]=(bb[1]||"").replace(t,"");
Y=k.find[ba](bb,W,X);

if(Y!=null){V=V.replace(k.match[ba],"");
break;
}}}}
if(!Y){Y=typeof W.getElementsByTagName!=="undefined"?W.getElementsByTagName("*"):[];
}return {set:Y,expr:V};
};
s.filter=function(bd,be,bf,bg){var bt,bs,bh=bd,bn=[],bi=be,bj=be&&be[0]&&s.isXML(be[0]);

while(bd&&be.length){for(var br in k.filter){if((bt=k.leftMatch[br].exec(bd))!=null&&bt[2]){var bq,bm,bk=k.filter[br],bu=bt[1];
bs=false;
bt.splice(1,1);

if(bu.substr(bu.length-1)==="\\"){continue;
}
if(bi===bn){bn=[];
}
if(k.preFilter[br]){bt=k.preFilter[br](bt,bi,bf,bn,bg,bj);

if(!bt){bs=bq=true;
}else if(bt===true){continue;
}}
if(bt){for(var i=0;(bm=bi[i])!=null;i++){if(bm){bq=bk(bm,bt,i,bi);
var bo=bg^!!bq;

if(bf&&bq!=null){if(bo){bs=true;
}else{bi[i]=false;
}}else if(bo){bn.push(bm);
bs=true;
}}}}
if(bq!==undefined){if(!bf){bi=bn;
}bd=bd.replace(k.match[br],"");

if(!bs){return [];
}break;
}}}if(bd===bh){if(bs==null){s.error(bd);
}else{break;
}}bh=bd;
}return bi;
};
s.error=function(bv){throw "Syntax error, unrecognized expression: "+bv;
};
var k=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bw){return bw.getAttribute("href");
},type:function(bx){return bx.getAttribute("type");
}},relative:{"+":function(by,bz){var bA=typeof bz==="string",bC=bA&&!g.test(bz),bD=bA&&!bC;

if(bC){bz=bz.toLowerCase();
}
for(var i=0,l=by.length,bB;i<l;i++){if((bB=by[i])){while((bB=bB.previousSibling)&&bB.nodeType!==1){}by[i]=bD||bB&&bB.nodeName.toLowerCase()===bz?bB||false:bB===bz;
}}
if(bD){s.filter(bz,by,true);
}},">":function(bE,bF){var bH,bG=typeof bF==="string",i=0,l=bE.length;

if(bG&&!g.test(bF)){bF=bF.toLowerCase();

for(;i<l;i++){bH=bE[i];

if(bH){var parent=bH.parentNode;
bE[i]=parent.nodeName.toLowerCase()===bF?parent:false;
}}}else{for(;i<l;i++){bH=bE[i];

if(bH){bE[i]=bG?bH.parentNode:bH.parentNode===bF;
}}
if(bG){s.filter(bF,bE,true);
}}},"":function(bI,bJ,bK){var bN,bL=v++,bM=y;

if(typeof bJ==="string"&&!g.test(bJ)){bJ=bJ.toLowerCase();
bN=bJ;
bM=A;
}bM("parentNode",bJ,bL,bI,bN,bK);
},"~":function(bO,bP,bQ){var bT,bR=v++,bS=y;

if(typeof bP==="string"&&!g.test(bP)){bP=bP.toLowerCase();
bT=bP;
bS=A;
}bS("previousSibling",bP,bR,bO,bT,bQ);
}},find:{ID:function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var m=bV.getElementById(bU[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bX,bY){if(typeof bY.getElementsByName!=="undefined"){var cb=[],ca=bY.getElementsByName(bX[1]);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].getAttribute("name")===bX[1]){cb.push(ca[i]);
}}return cb.length===0?null:cb;
}},TAG:function(cc,cd){if(typeof cd.getElementsByTagName!=="undefined"){return cd.getElementsByTagName(cc[1]);
}}},preFilter:{CLASS:function(ce,cf,cg,ch,ci,cj){ce=" "+ce[1].replace(t,"")+" ";

if(cj){return ce;
}
for(var i=0,ck;(ck=cf[i])!=null;i++){if(ck){if(ci^(ck.className&&(" "+ck.className+" ").replace(/[\t\n\r]/g," ").indexOf(ce)>=0)){if(!cg){ch.push(ck);
}}else if(cg){cf[i]=false;
}}}return false;
},ID:function(cl){return cl[1].replace(t,"");
},TAG:function(cm,cn){return cm[1].replace(t,"").toLowerCase();
},CHILD:function(co){if(co[1]==="nth"){if(!co[2]){s.error(co[0]);
}co[2]=co[2].replace(/^\+|\s*/g,'');
var cp=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(co[2]==="even"&&"2n"||co[2]==="odd"&&"2n+1"||!/\D/.test(co[2])&&"0n+"+co[2]||co[2]);
co[2]=(cp[1]+(cp[2]||1))-0;
co[3]=cp[3]-0;
}else if(co[2]){s.error(co[0]);
}co[0]=v++;
return co;
},ATTR:function(cq,cr,cs,ct,cu,cv){var name=cq[1]=cq[1].replace(t,"");

if(!cv&&k.attrMap[name]){cq[1]=k.attrMap[name];
}cq[4]=(cq[4]||cq[5]||"").replace(t,"");

if(cq[2]==="~="){cq[4]=" "+cq[4]+" ";
}return cq;
},PSEUDO:function(cw,cx,cy,cz,cA){if(cw[1]==="not"){if((o.exec(cw[3])||"").length>1||/^\w/.test(cw[3])){cw[3]=s(cw[3],null,null,cx);
}else{var cB=s.filter(cw[3],cx,cy,true^cA);

if(!cy){cz.push.apply(cz,cB);
}return false;
}}else if(k.match.POS.test(cw[0])||k.match.CHILD.test(cw[0])){return true;
}return cw;
},POS:function(cC){cC.unshift(true);
return cC;
}},filters:{enabled:function(cD){return cD.disabled===false&&cD.type!=="hidden";
},disabled:function(cE){return cE.disabled===true;
},checked:function(cF){return cF.checked===true;
},selected:function(cG){if(cG.parentNode){cG.parentNode.selectedIndex;
}return cG.selected===true;
},parent:function(cH){return !!cH.firstChild;
},empty:function(cI){return !cI.firstChild;
},has:function(cJ,i,cK){return !!s(cK[3],cJ).length;
},header:function(cL){return (/h\d/i).test(cL.nodeName);
},text:function(cM){return "text"===cM.getAttribute('type');
},radio:function(cN){return "radio"===cN.type;
},checkbox:function(cO){return "checkbox"===cO.type;
},file:function(cP){return "file"===cP.type;
},password:function(cQ){return "password"===cQ.type;
},submit:function(cR){return "submit"===cR.type;
},image:function(cS){return "image"===cS.type;
},reset:function(cT){return "reset"===cT.type;
},button:function(cU){return "button"===cU.type||cU.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(cW,i){return i===0;
},last:function(cX,i,cY,da){return i===da.length-1;
},even:function(db,i){return i%2===0;
},odd:function(dc,i){return i%2===1;
},lt:function(dd,i,de){return i<de[3]-0;
},gt:function(df,i,dg){return i>dg[3]-0;
},nth:function(dh,i,di){return di[3]-0===i;
},eq:function(dj,i,dk){return dk[3]-0===i;
}},filter:{PSEUDO:function(dl,dm,i,dn){var name=dm[1],dp=k.filters[name];

if(dp){return dp(dl,i,dm,dn);
}else if(name==="contains"){return (dl.textContent||dl.innerText||s.getText([dl])||"").indexOf(dm[3])>=0;
}else if(name==="not"){var dq=dm[3];

for(var j=0,l=dq.length;j<l;j++){if(dq[j]===dl){return false;
}}return true;
}else{s.error(name);
}},CHILD:function(dr,ds){var dy=ds[1],dt=dr;

switch(dy){case "only":case "first":while((dt=dt.previousSibling)){if(dt.nodeType===1){return false;
}}
if(dy==="first"){return true;
}dt=dr;
case "last":while((dt=dt.nextSibling)){if(dt.nodeType===1){return false;
}}return true;
case "nth":var dz=ds[2],dv=ds[3];

if(dz===1&&dv===0){return true;
}var dx=ds[0],parent=dr.parentNode;

if(parent&&(parent.sizcache!==dx||!dr.nodeIndex)){var du=0;

for(dt=parent.firstChild;dt;dt=dt.nextSibling){if(dt.nodeType===1){dt.nodeIndex=++du;
}}parent.sizcache=dx;
}var dw=dr.nodeIndex-dv;

if(dz===0){return dw===0;
}else{return (dw%dz===0&&dw/dz>=0);
}}},ID:function(dA,dB){return dA.nodeType===1&&dA.getAttribute("id")===dB;
},TAG:function(dC,dD){return (dD==="*"&&dC.nodeType===1)||dC.nodeName.toLowerCase()===dD;
},CLASS:function(dE,dF){return (" "+(dE.className||dE.getAttribute("class"))+" ").indexOf(dF)>-1;
},ATTR:function(dG,dH){var name=dH[1],dL=k.attrHandle[name]?k.attrHandle[name](dG):dG[name]!=null?dG[name]:dG.getAttribute(name),dK=dL+"",dJ=dH[2],dI=dH[4];
return dL==null?dJ==="!=":dJ==="="?dK===dI:dJ==="*="?dK.indexOf(dI)>=0:dJ==="~="?(" "+dK+" ").indexOf(dI)>=0:!dI?dK&&dL!==false:dJ==="!="?dK!==dI:dJ==="^="?dK.indexOf(dI)===0:dJ==="$="?dK.substr(dK.length-dI.length)===dI:dJ==="|="?dK===dI||dK.substr(0,dI.length+1)===dI+"-":false;
},POS:function(dM,dN,i,dO){var name=dN[2],dP=k.setFilters[name];

if(dP){return dP(dM,i,dN,dO);
}}}};
var q=k.match.POS,d=function(dQ,dR){return "\\"+(dR-0+1);
};

for(var w in k.match){k.match[w]=new RegExp(k.match[w].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[w].source.replace(/\\(\d+)/g,d));
}var f=function(dS,dT){dS=Array.prototype.slice.call(dS,0);

if(dT){dT.push.apply(dT,dS);
return dT;
}return dS;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dU,dV){var i=0,dW=dV||[];

if(x.call(dU)==="[object Array]"){Array.prototype.push.apply(dW,dU);
}else{if(typeof dU.length==="number"){for(var l=dU.length;i<l;i++){dW.push(dU[i]);
}}else{for(;dU[i];i++){dW.push(dU[i]);
}}}return dW;
};
}var u,n;

if(document.documentElement.compareDocumentPosition){u=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{u=function(a,b){var ec,ea,ed=[],ee=[],dY=a.parentNode,eb=b.parentNode,dX=dY;
if(a===b){p=true;
return 0;
}else if(dY===eb){return n(a,b);
}else if(!dY){return -1;
}else if(!eb){return 1;
}while(dX){ed.unshift(dX);
dX=dX.parentNode;
}dX=eb;

while(dX){ee.unshift(dX);
dX=dX.parentNode;
}ec=ed.length;
ea=ee.length;
for(var i=0;i<ec&&i<ea;i++){if(ed[i]!==ee[i]){return n(ed[i],ee[i]);
}}return i===ec?n(a,ee[i],-1):n(ed[i],b,1);
};
n=function(a,b,ef){if(a===b){return ef;
}var eg=a.nextSibling;

while(eg){if(eg===b){return -1;
}eg=eg.nextSibling;
}return 1;
};
}s.getText=function(eh){var ej="",ei;

for(var i=0;eh[i];i++){ei=eh[i];
if(ei.nodeType===3||ei.nodeType===4){ej+=ei.nodeValue;
}else if(ei.nodeType!==8){ej+=s.getText(ei.childNodes);
}}return ej;
};
(function(){var em=document.createElement("div"),el="script"+(new Date()).getTime(),ek=document.documentElement;
em.innerHTML="<a name='"+el+"'/>";
ek.insertBefore(em,ek.firstChild);
if(document.getElementById(el)){k.find.ID=function(en,eo,ep){if(typeof eo.getElementById!=="undefined"&&!ep){var m=eo.getElementById(en[1]);
return m?m.id===en[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===en[1]?[m]:undefined:[];
}};
k.filter.ID=function(eq,er){var es=typeof eq.getAttributeNode!=="undefined"&&eq.getAttributeNode("id");
return eq.nodeType===1&&es&&es.nodeValue===er;
};
}ek.removeChild(em);
ek=em=null;
})();
(function(){var et=document.createElement("div");
et.appendChild(document.createComment(""));
if(et.getElementsByTagName("*").length>0){k.find.TAG=function(eu,ev){var ex=ev.getElementsByTagName(eu[1]);
if(eu[1]==="*"){var ew=[];

for(var i=0;ex[i];i++){if(ex[i].nodeType===1){ew.push(ex[i]);
}}ex=ew;
}return ex;
};
}et.innerHTML="<a href='#'></a>";

if(et.firstChild&&typeof et.firstChild.getAttribute!=="undefined"&&et.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ey){return ey.getAttribute("href",2);
};
}et=null;
})();

if(document.querySelectorAll){(function(){var eA=s,ez=document.createElement("div"),eB="__sizzle__";
ez.innerHTML="<p class='TEST'></p>";
if(ez.querySelectorAll&&ez.querySelectorAll(".TEST").length===0){return;
}s=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&!s.isXML(eE)){var eL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(eD);

if(eL&&(eE.nodeType===1||eE.nodeType===9)){if(eL[1]){return f(eE.getElementsByTagName(eD),eF);
}else if(eL[2]&&k.find.CLASS&&eE.getElementsByClassName){return f(eE.getElementsByClassName(eL[2]),eF);
}}
if(eE.nodeType===9){if(eD==="body"&&eE.body){return f([eE.body],eF);
}else if(eL&&eL[3]){var eJ=eE.getElementById(eL[3]);
if(eJ&&eJ.parentNode){if(eJ.id===eL[3]){return f([eJ],eF);
}}else{return f([],eF);
}}
try{return f(eE.querySelectorAll(eD),eF);
}catch(eO){}}else if(eE.nodeType===1&&eE.nodeName.toLowerCase()!=="object"){var eN=eE,eI=eE.getAttribute("id"),eK=eI||eB,eH=eE.parentNode,eM=/^\s*[+~]/.test(eD);

if(!eI){eE.setAttribute("id",eK);
}else{eK=eK.replace(/'/g,"\\$&");
}
if(eM&&eH){eE=eE.parentNode;
}
try{if(!eM||eH){return f(eE.querySelectorAll("[id='"+eK+"'] "+eD),eF);
}}catch(eP){}finally{if(!eI){eN.removeAttribute("id");
}}}}return eA(eD,eE,eF,eG);
};

for(var eC in eA){s[eC]=eA[eC];
}ez=null;
})();
}(function(){var eS=document.documentElement,eQ=eS.matchesSelector||eS.mozMatchesSelector||eS.webkitMatchesSelector||eS.msMatchesSelector,eR=false;

try{eQ.call(document.documentElement,"[test!='']:sizzle");
}catch(eT){eR=true;
}
if(eQ){s.matchesSelector=function(eU,eV){eV=eV.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!s.isXML(eU)){try{if(eR||!k.match.PSEUDO.test(eV)&&!/!=/.test(eV)){return eQ.call(eU,eV);
}}catch(e){}}return s(eV,null,null,[eU]).length>0;
};
}})();
(function(){var eW=document.createElement("div");
eW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eW.getElementsByClassName||eW.getElementsByClassName("e").length===0){return;
}eW.lastChild.className="e";

if(eW.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eX,eY,fa){if(typeof eY.getElementsByClassName!=="undefined"&&!fa){return eY.getElementsByClassName(eX[1]);
}};
eW=null;
})();
function A(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1&&!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(fi.nodeName.toLowerCase()===fc){fh=fi;
break;
}fi=fi[fb];
}fe[i]=fh;
}}}function y(fj,fk,fl,fm,fn,fo){for(var i=0,l=fm.length;i<l;i++){var fq=fm[i];

if(fq){var fp=false;
fq=fq[fj];

while(fq){if(fq.sizcache===fl){fp=fm[fq.sizset];
break;
}
if(fq.nodeType===1){if(!fo){fq.sizcache=fl;
fq.sizset=i;
}
if(typeof fk!=="string"){if(fq===fk){fp=true;
break;
}}else if(s.filter(fk,[fq]).length>0){fp=fq;
break;
}}fq=fq[fj];
}fm[i]=fp;
}}}
if(document.documentElement.contains){s.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){s.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{s.contains=function(){return false;
};
}s.isXML=function(fr){var fs=(fr?fr.ownerDocument||fr:0).documentElement;
return fs?fs.nodeName!=="HTML":false;
};
var h=function(ft,fu){var fy,fw=[],fv="",fx=fu.nodeType?[fu]:fu;
while((fy=k.match.PSEUDO.exec(ft))){fv+=fy[0];
ft=ft.replace(k.match.PSEUDO,"");
}ft=k.relative[ft]?ft+"*":ft;

for(var i=0,l=fx.length;i<l;i++){s(ft,fx[i],fw);
}return s.filter(fv,fw);
};
var r=qx.bom.Selector;
r.query=function(fz,fA){return s(fz,fA);
};
r.matches=function(fB,fC){return s(fB,null,null,fC);
};
})();
})();
(function(){var a="qx.type.Array";
qx.Class.define(a,{extend:qx.type.BaseArray,members:{clone:qx.type.BaseArray.prototype.concat,insertAt:function(b,i){this.splice(i,0,b);
return this;
},insertBefore:function(c,d){var i=this.indexOf(d);

if(i==-1){this.push(c);
}else{this.splice(i,0,c);
}return this;
},insertAfter:function(e,f){var i=this.indexOf(f);

if(i==-1||i==(this.length-1)){this.push(e);
}else{this.splice(i+1,0,e);
}return this;
},removeAt:function(i){return this.splice(i,1)[0];
},removeAll:function(){this.length=0;
return this;
},append:function(g){var h=g;
if(g instanceof qx.type.Array){h=[];

for(var i=0;i<g.length;i++){h[i]=g[i];
}}Array.prototype.push.apply(this,h);
return this;
},remove:function(j){var i=this.indexOf(j);

if(i!=-1){this.splice(i,1);
return j;
}},contains:function(k){return this.indexOf(k)!==-1;
}}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="div",g="inherit",f="text",e="value",d="",c="engine.name",b="hidden",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",E="nowrap",D="auto",C="0",B="ellipsis",A="normal",z="label",y="os.name",x="px",w="crop",v="gecko",q="end",r="100%",o="visible",p="qx.bom.Label",m="win",n="opera",k="engine.version",l="mshtml",s="block",t="-1000px",u="absolute";
qx.Class.define(p,{statics:{__lg:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__lh:function(){var F=this.__lj(false);
document.body.insertBefore(F,document.body.firstChild);
return this._textElement=F;
},__li:function(){var G=this.__lj(true);
document.body.insertBefore(G,document.body.firstChild);
return this._htmlElement=G;
},__lj:function(H){var I=qx.bom.Element.create(h);
var J=I.style;
J.width=J.height=D;
J.left=J.top=t;
J.visibility=b;
J.position=u;
J.overflow=o;

if(H){J.whiteSpace=A;
}else{J.whiteSpace=E;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var K=document.createElementNS(a,z);
var J=K.style;
J.padding=C;

for(var L in this.__lg){J[L]=g;
}I.appendChild(K);
}}return I;
},__lk:function(M){var N={};

if(M){N.whiteSpace=A;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){N.display=s;
}else{N.overflow=b;
N.whiteSpace=E;
N.textOverflow=B;
if((qx.core.Environment.get(c)==n)){N.OTextOverflow=B;
}}return N;
},create:function(content,O,P){if(!P){P=window;
}
if(O){var Q=P.document.createElement(h);
Q.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var Q=P.document.createElement(h);
var S=P.document.createElementNS(a,z);
var R=S.style;
R.cursor=g;
R.color=g;
R.overflow=b;
R.maxWidth=r;
R.padding=C;
for(var T in this.__lg){S.style[T]=g;
}S.setAttribute(w,q);
Q.appendChild(S);
}else{var Q=P.document.createElement(h);
qx.bom.element.Style.setStyles(Q,this.__lk(O));
}
if(content){this.setValue(Q,content);
}return Q;
},setValue:function(U,V){V=V||d;

if(U.useHtml){U.innerHTML=V;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){U.firstChild.setAttribute(e,V);
}else{qx.bom.element.Attribute.set(U,f,V);
}},getValue:function(W){if(W.useHtml){return W.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return W.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(W,f);
}},getHtmlSize:function(content,X,Y){var ba=this._htmlElement||this.__li();
ba.style.width=Y!==undefined?Y+x:D;
ba.innerHTML=content;
return this.__ll(ba,X);
},getTextSize:function(bb,bc){var bd=this._textElement||this.__lh();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){bd.firstChild.setAttribute(e,bb);
}else{qx.bom.element.Attribute.set(bd,f,bb);
}return this.__ll(bd,bc);
},__ll:function(be,bf){var bg=this.__lg;

if(!bf){bf={};
}
for(var bh in bg){be.style[bh]=bf[bh]||d;
}var bi=qx.bom.element.Dimension.getSize(be);

if((qx.core.Environment.get(c)==v)){if(!(qx.core.Environment.get(y)==m)){bi.width++;
}}if((qx.core.Environment.get(c)==l)&&parseFloat(qx.core.Environment.get(k))>=9){bi.width++;
}return bi;
}}});
})();
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gT:null,__gU:null,__gV:null,__gW:null,__gX:null,__gY:null,__ha:null,__hb:null,__hc:null,__hd:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
var K=qx.bom.Selection.get(J);

if(K.length==0){var L=J.createTextRange();
L.moveStart(s,J.value.length);
L.collapse();
L.select();
}}catch(M){}},0);
}else{try{J.focus();
}catch(N){}}this.setFocus(J);
this.setActive(J);
},activate:function(O){this.setActive(O);
},blur:function(P){try{P.blur();
}catch(Q){}
if(this.getActive()===P){this.resetActive();
}
if(this.getFocus()===P){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(S){var T=this.__hs(S);

if(T){this.setActive(T);
}},__he:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__hf:function(){if(this._windowFocused){this._windowFocused=false;
this.__he(this._window,null,g,false);
}},__hg:function(){if(!this._windowFocused){this._windowFocused=true;
this.__he(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__gV=qx.lang.Function.listener(this.__hl,this);
this.__gW=qx.lang.Function.listener(this.__hk,this);
this.__gX=qx.lang.Function.listener(this.__hh,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gW,true);
qx.bom.Event.addNativeListener(this._window,y,this.__gX,true);
},"mshtml":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__ha=qx.lang.Function.listener(this.__hi,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__gY=qx.lang.Function.listener(this.__hp,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT);
qx.bom.Event.addNativeListener(this._document,h,this.__gU);
qx.bom.Event.addNativeListener(this._document,b,this.__ha);
qx.bom.Event.addNativeListener(this._document,a,this.__hb);
qx.bom.Event.addNativeListener(this._document,d,this.__gY);
},"webkit":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
this.__gV=qx.lang.Function.listener(this.__hl,this);
this.__gW=qx.lang.Function.listener(this.__hk,this);
this.__gY=qx.lang.Function.listener(this.__hp,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._document,d,this.__gY,false);
qx.bom.Event.addNativeListener(this._window,c,this.__hb,true);
qx.bom.Event.addNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.addNativeListener(this._window,g,this.__gW,true);
},"opera":function(){this.__gT=qx.lang.Function.listener(this.__hm,this);
this.__gU=qx.lang.Function.listener(this.__hn,this);
this.__ha=qx.lang.Function.listener(this.__hi,this);
this.__hb=qx.lang.Function.listener(this.__hj,this);
qx.bom.Event.addNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.addNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.addNativeListener(this._window,z,this.__ha,true);
qx.bom.Event.addNativeListener(this._window,c,this.__hb,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gW,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__gX,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU);
qx.bom.Event.removeNativeListener(this._document,b,this.__ha);
qx.bom.Event.removeNativeListener(this._document,a,this.__hb);
qx.bom.Event.removeNativeListener(this._document,d,this.__gY);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__gY,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__hb,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__gV,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__gW,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__gT,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__gU,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__ha,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__hb,true);
}}),__hh:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__ht(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__hi:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__hg();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__hr(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__hg();

if(this.__hc){this.setFocus(this.__hc);
delete this.__hc;
}
if(this.__hd){this.setActive(this.__hd);
delete this.__hd;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__ht(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__hj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__hf();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__hf();
this.__hc=this.getFocus();
this.__hd=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__hk:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__hf();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__hf();
this.__hc=this.getFocus();
this.__hd=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__hl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__hg();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__hg();

if(this.__hc){this.setFocus(this.__hc);
delete this.__hc;
}
if(this.__hd){this.setActive(this.__hd);
delete this.__hd;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__hm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__hr(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__hr(bB);

if(bA){if(!this.__ht(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__ht(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__hr(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__hr(bK);

if(!this.__ht(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__hn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__ho(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__ho(bQ));
},"default":null})),__ho:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__hp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__ht(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__hq:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__hr:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__hq(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__hs:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__ht:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__he(cg,cf,v,true);
}
if(cf){this.__he(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__he(ci,ch,a,true);
}
if(ch){this.__he(ch,ci,b,true);
}if(ci){this.__he(ci,ch,g,false);
}
if(ch){this.__he(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__hu=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__dR={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__dR:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__dR[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__dR){return;
}var h=g.classname;
var j=this.__dR[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__dR[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__dR;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__dR;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var j="",i="ready",h="shutdown",g="engine.name",f="qx.application",d="beforeunload",c="qx.core.Init",b="os.name",a="engine.version";
qx.Class.define(c,{statics:{getApplication:function(){return this.__ij||null;
},ready:function(){if(this.__ij){return;
}
if(qx.core.Environment.get(g)==j){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==j){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==j){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var l=qx.core.Environment.get(f);
var m=qx.Class.getByName(l);

if(m){this.__ij=new m;
var k=new Date;
this.__ij.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-k)+"ms");
var k=new Date;
this.__ij.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-k)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+l);
}},__ik:function(e){var n=this.__ij;

if(n){e.setReturnValue(n.close());
}},__il:function(){var o=this.__ij;

if(o){o.terminate();
}}},defer:function(p){qx.event.Registration.addListener(window,i,p.ready,p);
qx.event.Registration.addListener(window,h,p.__il,p);
qx.event.Registration.addListener(window,d,p.__ik,p);
}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__hv(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__hv(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__hv(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__hv(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();

try{H.moveToElementText(C);
}catch(J){return 0;
}var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(g,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(g,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(g,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(K){if(this.__hv(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__hv(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__hv(O)){var T=qx.bom.Range.get();
if(!O.contains(T.parentElement())){return -1;
}var U=qx.bom.Range.get(O);
var S=O.value.length;
U.moveToBookmark(T.getBookmark());
U.moveStart(e,-S);
return U.text.length;
}else{var U=qx.bom.Range.get(O);
var Q=U.parentElement();
var V=qx.bom.Range.get();

try{V.moveToElementText(Q);
}catch(X){return 0;
}var S=V.text.length;
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));
P.setEndPoint(i,U);
P.setEndPoint(g,V);
if(V.compareEndPoints(i,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(j,1);
if(V.compareEndPoints(i,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(Y){if(this.__hv(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__hv(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__hv:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
},set:qx.core.Environment.select(k,{"mshtml":function(be,bf,bg){var bh;
if(qx.dom.Node.isDocument(be)){be=be.body;
}
if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case h:case f:case c:if(bg===undefined){bg=be.value.length;
}
if(bf>=0&&bf<=be.value.length&&bg>=0&&bg<=be.value.length){bh=qx.bom.Range.get(be);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
case b:if(bg===undefined){bg=be.nodeValue.length;
}
if(bf>=0&&bf<=be.nodeValue.length&&bg>=0&&bg<=be.nodeValue.length){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.parentNode);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
default:if(bg===undefined){bg=be.childNodes.length-1;
}if(be.childNodes[bf]&&be.childNodes[bg]){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.childNodes[bf]);
bh.collapse(true);
var bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bi.moveToElementText(be.childNodes[bg]);
bh.setEndPoint(i,bi);
bh.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==f)){if(bl===undefined){bl=bj.value.length;
}if(bk>=0&&bk<=bj.value.length&&bl>=0&&bl<=bj.value.length){bj.focus();
bj.select();
bj.setSelectionRange(bk,bl);
return true;
}}else{var bn=false;
var bo=qx.dom.Node.getWindow(bj).getSelection();
var bm=qx.bom.Range.get(bj);
if(qx.dom.Node.isText(bj)){if(bl===undefined){bl=bj.length;
}
if(bk>=0&&bk<bj.length&&bl>=0&&bl<=bj.length){bn=true;
}}else if(qx.dom.Node.isElement(bj)){if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}else if(qx.dom.Node.isDocument(bj)){bj=bj.body;

if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}
if(bn){if(!bo.isCollapsed){bo.collapseToStart();
}bm.setStart(bj,bk);
if(qx.dom.Node.isText(bj)){bm.setEnd(bj,bl);
}else{bm.setEndAfter(bj.childNodes[bl]);
}if(bo.rangeCount>0){bo.removeAllRanges();
}bo.addRange(bm);
return true;
}}return false;
}}),setAll:function(bq){return qx.bom.Selection.set(bq,0);
},clear:qx.core.Environment.select(k,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));
var bt=qx.bom.Range.get(br);
var parent=bt.parentElement();
var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));
if(parent==bu.parentElement()&&parent==br){bs.empty();
}},"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));
var bz=bv.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bv)&&(bz==h||bz==f)){bv.setSelectionRange(0,0);
qx.bom.Element.blur(bv);
}else if(qx.dom.Node.isDocument(bv)||bz==a){bx.collapse(bv.body?bv.body:bv,0);
}else{var by=qx.bom.Range.get(bv);

if(!by.collapsed){var bA;
var bw=by.commonAncestorContainer;
if(qx.dom.Node.isElement(bv)&&qx.dom.Node.isText(bw)){bA=bw.parentNode;
}else{bA=bw;
}
if(bA==bv){bx.collapse(bv,0);
}}}}})}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__fI=d;
this.__fJ={};
qx.event.handler.Appear.__fK[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fK:{},refresh:function(){var e=this.__fK;

for(var f in e){e[f].refresh();
}}},members:{__fI:null,__fJ:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__fJ;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__fJ;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__fJ;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__fI.dispatchEvent(w,t);
}}}},destruct:function(){this.__fI=this.__fJ=null;
delete qx.event.handler.Appear.__fK[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="line-through",u="overline",t="Color",s="qx.bom.Font",r="Number",q="_applyDecoration",o=" ",p="_applySize",m=",",n="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);

if(A!==undefined){this.setSize(A);
}
if(B!==undefined){this.setFamily(B);
}},statics:{fromString:function(C){var G=new qx.bom.Font();
var E=C.split(/\s+/);
var name=[];
var F;

for(var i=0;i<E.length;i++){switch(F=E[i]){case c:G.setBold(true);
break;
case e:G.setItalic(true);
break;
case j:G.setDecoration(j);
break;
default:var D=parseInt(F,10);

if(D==F||qx.lang.String.contains(F,g)){G.setSize(D);
}else{name.push(F);
}break;
}}
if(name.length>0){G.setFamily(name);
}return G;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__lo:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,textColor:k},getDefaultStyles:function(){return this.__lo;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__lp:null,__lq:null,__lr:null,__ls:null,__lt:null,__lu:null,__lv:null,_applySize:function(J,K){this.__lp=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__lu=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__lq=P;
},_applyBold:function(Q,R){this.__lr=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__ls=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__lt=U===null?null:U;
},_applyColor:function(W,X){this.__lv=W===null?null:W;
},getStyles:function(){return {fontFamily:this.__lq,fontSize:this.__lp,fontWeight:this.__lr,fontStyle:this.__ls,textDecoration:this.__lt,lineHeight:this.__lu,textColor:this.__lv};
}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jh={};
this.__ji={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__jj:{},__jh:null,__ji:null,_applyTheme:function(j,k){this.__ji={};
this.__jh={};
},__jk:function(l,m,n){var s=m.appearances;
var v=s[l];

if(!v){var w=b;
var p=[];
var u=l.split(w);
var t;

while(!v&&u.length>0){p.unshift(u.pop());
var q=u.join(w);
v=s[q];

if(v){t=v.alias||v;

if(typeof t===h){var r=t+w+p.join(w);
return this.__jk(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__jk(q,m);

if(o){return o;
}}if(n!=null){return this.__jk(n,m);
}return null;
}else if(typeof v===h){return this.__jk(v,m,n);
}else if(v.include&&!v.style){return this.__jk(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__ji;
var B=F[x];

if(!B){B=F[x]=this.__jk(x,z,A);
}var L=z.appearances[B];

if(!L){this.warn("Missing appearance: "+x);
return null;
}if(!L.style){return null;
}var M=B;

if(y){var N=L.$$bits;

if(!N){N=L.$$bits={};
L.$$length=0;
}var D=0;

for(var H in y){if(!y[H]){continue;
}
if(N[H]==null){N[H]=1<<L.$$length++;
}D+=N[H];
}if(D>0){M+=e+D;
}}var E=this.__jh;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__jj;
}var J;
if(L.include||L.base){var C;

if(L.include){C=this.styleFrom(L.include,y,z,A);
}var G=L.style(y,C);
J={};
if(L.base){var I=this.styleFrom(B,y,L.base,A);

if(L.include){for(var K in I){if(!C.hasOwnProperty(K)&&!G.hasOwnProperty(K)){J[K]=I[K];
}}}else{for(var K in I){if(!G.hasOwnProperty(K)){J[K]=I[K];
}}}}if(L.include){for(var K in C){if(!G.hasOwnProperty(K)){J[K]=C[K];
}}}for(var K in G){J[K]=G[K];
}}else{J=L.style(y);
}return E[M]=J||null;
}},destruct:function(){this.__jh=this.__ji=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__iu=c;
this.__iv=d;
},members:{__iu:null,__iv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__iu,this.__iv);
}}});
})();
(function(){var e="=",d="ecmascript.objectcount",c="+",b="qx.lang.Object",a="&";
qx.Class.define(b,{statics:{empty:function(f){for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.core.Environment.get(d))?
function(h){return h.__count__===0;
}:
function(j){for(var k in j){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(d))?
function(m,n){return m.__count__>=n;
}:
function(o,p){if(p<=0){return true;
}var length=0;

for(var q in o){if((++length)>=p){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(r){var t=[];
var s=this.getKeys(r);

for(var i=0,l=s.length;i<l;i++){t.push(r[s[i]]);
}return t;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(u,v){return qx.lang.Object.mergeWith(u,v,false);
},merge:function(w,x){var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(z){var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(C){var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(F,G){for(var H in F){if(F.hasOwnProperty(H)&&F[H]===G){return H;
}}return null;
},contains:function(I,J){return this.getKeyFromValue(I,J)!==null;
},select:function(K,L){return L[K];
},fromArray:function(M){var N={};

for(var i=0,l=M.length;i<l;i++){N[M[i].toString()]=true;
}return N;
},toUriParameter:function(O,P){var S,R=[],Q=window.encodeURIComponent;

for(S in O){if(O.hasOwnProperty(S)){if(P){R.push(Q(S).replace(/%20/g,c)+e+Q(O[S]).replace(/%20/g,c));
}else{R.push(Q(S)+e+Q(O[S]));
}}}return R.join(a);
}}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__jl:null,setVisibleElement:function(y){this.__jl=y;
},getVisibleElement:function(){return this.__jl;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__jm:null,__jn:null,__jo:null,getLayoutLocation:function(z){var C,B,D,top;
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
},moveTo:function(F,top){var H=qx.ui.core.MPlacement.getVisibleElement();
if(H){var J=this.getBounds();
var G=H.getContentLocation();
if(J&&G){var K=top+J.height;
var I=F+J.width;
if((I>G.left&&F<G.right)&&(K>G.top&&top<G.bottom)){F=Math.max(G.left-J.width,0);
}}}
if(this.getDomMove()){this.setDomPosition(F,top);
}else{this.setLayoutProperties({left:F,top:top});
}},placeToWidget:function(L,M){if(M){this.__jp();
this.__jm=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__jm);
this.__jo=function(){this.__jp();
};
this.addListener(g,this.__jo,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__jr(N);
},__jp:function(){if(this.__jm){qx.event.Idle.getInstance().removeListener(i,this.__jm);
this.__jm=null;
}
if(this.__jo){this.removeListener(g,this.__jo,this);
this.__jo=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__jr(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__jm=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__jm);
this.addListener(g,function(){if(this.__jm){qx.event.Idle.getInstance().removeListener(i,this.__jm);
this.__jm=null;
}},this);
}this.__jr(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__jr(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__jq:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__jq(V);
},this);
}else{V.call(this,W);
}},__jr:function(X){this.__jq(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__jp();
}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",y="px",x="scale",w="changeSource",v="qx.ui.basic.Image",u="loaded",t="-disabled.$1",s="loadingFailed",r="String",q="_applySource",p="img",n="__js",o="image",l="mshtml",m="_applyScale",k="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(z){this.__js={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:r,init:null,nullable:true,event:w,apply:q,themeable:true},scale:{check:a,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__jt:null,__ju:null,__jv:null,__js:null,getContentElement:function(){return this.__jz();
},_createContentElement:function(){return this.__jz();
},_getContentHint:function(){return {width:this.__jt||0,height:this.__ju||0};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(D){this._styleSource();
},__jw:function(E){this.__jv=E;
},__jx:function(){if(this.__jv==null){var G=this.getSource();
var F=false;

if(G!=null){F=qx.lang.String.endsWith(G,g);
}
if(this.getScale()&&F&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__jv=h;
}else if(this.getScale()){this.__jv=i;
}else{this.__jv=j;
}}return this.__jv;
},__jy:function(H){var I;
var J;

if(H==h){I=true;
J=f;
}else if(H==j){I=false;
J=f;
}else{I=true;
J=p;
}var K=new qx.html.Image(J);
K.setScale(I);
K.setStyles({"overflowX":b,"overflowY":b});
return K;
},__jz:function(){var L=this.__jx();

if(this.__js[L]==null){this.__js[L]=this.__jy(L);
}return this.__js[L];
},_styleSource:function(){var M=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!M){this.getContentElement().resetSource();
return;
}this.__jA(M);

if((qx.core.Environment.get(c)==l)){var N=this.getScale()?x:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(N,M);
}if(qx.util.ResourceManager.getInstance().has(M)){this.__jC(this.getContentElement(),M);
}else if(qx.io.ImageLoader.isLoaded(M)){this.__jD(this.getContentElement(),M);
}else{this.__jE(this.getContentElement(),M);
}},__jA:qx.core.Environment.select(c,{"mshtml":function(O){var Q=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var P=qx.lang.String.endsWith(O,g);

if(Q&&P){if(this.getScale()&&this.__jx()!=h){this.__jw(h);
}else if(!this.getScale()&&this.__jx()!=j){this.__jw(j);
}}else{if(this.getScale()&&this.__jx()!=i){this.__jw(i);
}else if(!this.getScale()&&this.__jx()!=j){this.__jw(j);
}}this.__jB(this.__jz());
},"default":function(R){if(this.getScale()&&this.__jx()!=i){this.__jw(i);
}else if(!this.getScale()&&this.__jx(j)){this.__jw(j);
}this.__jB(this.__jz());
}}),__jB:function(S){var V=this.getContainerElement();
var W=V.getChild(0);

if(W!=S){if(W!=null){var Y=y;
var T={};
var U=this.getInnerSize();

if(U!=null){T.width=U.width+Y;
T.height=U.height+Y;
}var X=this.getInsets();
T.left=X.left+Y;
T.top=X.top+Y;
T.zIndex=10;
S.setStyles(T,true);
S.setSelectable(this.getSelectable());
}V.removeAt(0);
V.addAt(S,0);
}},__jC:function(ba,bb){var bd=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bc=bb.replace(/\.([a-z]+)$/,t);

if(bd.has(bc)){bb=bc;
this.addState(e);
}else{this.removeState(e);
}}if(ba.getSource()===bb){return;
}ba.setSource(bb);
this.__jH(bd.getImageWidth(bb),bd.getImageHeight(bb));
},__jD:function(be,bf){var bh=qx.io.ImageLoader;
be.setSource(bf);
var bg=bh.getWidth(bf);
var bi=bh.getHeight(bf);
this.__jH(bg,bi);
},__jE:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
if(!bl.isFailed(bk)){bl.load(bk,this.__jG,this);
}else{if(bj!=null){bj.resetSource();
}}},__jG:function(bm,bn){if(this.$$disposed===true){return;
}if(bm!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bn.failed){this.warn("Image could not be loaded: "+bm);
this.fireEvent(s);
}else{this.fireEvent(u);
}this._styleSource();
},__jH:function(bo,bp){if(bo!==this.__jt||bp!==this.__ju){this.__jt=bo;
this.__ju=bp;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(n);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__dS:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dT:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__dU:function(){var L=qx.lang.Generics.__dS;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__dT(N,O);
}}}}},defer:function(Q){Q.__dU();
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hX:[],remove:function(c){qx.lang.Array.remove(this.__hX,c);
},add:function(d){var e=this.__hX;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__hX;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__hX=[];
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},resolve:function(h){var k=this._dynamic;
var i=k[h];

if(i){return i;
}var j=this.getTheme();

if(j!==null&&j.fonts[h]){return k[h]=(new qx.bom.Font).set(j.fonts[h]);
}return h;
},isDynamic:function(l){var n=this._dynamic;

if(l&&(l instanceof qx.bom.Font||n[l]!==undefined)){return true;
}var m=this.getTheme();

if(m!==null&&l&&m.fonts[l]){n[l]=(new qx.bom.Font).set(m.fonts[l]);
return true;
}return false;
},__ln:function(o,p){if(o[p].include){var q=o[o[p].include];
o[p].include=null;
delete o[p].include;
o[p]=qx.lang.Object.mergeWith(o[p],q,false);
this.__ln(o,p);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__ln(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
}}});
})();
(function(){var k="source",j="scale",i="engine.name",h="no-repeat",g="",f="mshtml",e="backgroundImage",d="webkit",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name===k){var p=this.getDomElement();
var m=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(e)){m.backgroundPosition=null;
m.backgroundRepeat=null;
}var n=this._getProperty(k);
var o=this._getProperty(j);
var q=o?j:h;
if(n!=null){n=n||null;
qx.bom.element.Decoration.update(p,n,q,m);
}}},_removeProperty:function(r,s){if(r==k){this._setProperty(r,g,s);
}else{this._setProperty(r,null,s);
}},_createDomElement:function(){var u=this._getProperty(j);
var v=u?j:h;

if((qx.core.Environment.get(i)==f)){var t=this._getProperty(k);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(w){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(x){this._setProperty(k,x);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){if((qx.core.Environment.get(i)==d)){this._setProperty(k,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(k,true);
}return this;
},setScale:function(y){this._setProperty(j,y);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iw=qx.$$translations||{};
this.__ix=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__iy=m;
this.setLocale(m||this.__iz);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__iz:f,__iA:null,__iB:null,__iw:null,__ix:null,__iy:null,getLanguage:function(){return this.__iB;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var C=[];

for(var B in this.__ix){if(B!=this.__iz){C.push(B);
}}return C;
},__iC:function(D){var F;

if(D==null){return null;
}var E=D.indexOf(l);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){this.__iA=G;
this.__iB=this.__iC(G);
},addTranslation:function(I,J){var K=this.__iw;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__ix;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__iw;
return this.__iD(T,Q,R,S);
},localize:function(U,V,W){var X=this.__ix;
return this.__iD(X,U,V,W);
},__iD:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__iC(bc);
}else{bc=this.__iA;
bf=this.__iB;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__iz]){bd=Y[this.__iz][ba];
}
if(!bd){bd=ba;
}
if(bb.length>0){var be=[];

for(var i=0;i<bb.length;i++){var bg=bb[i];

if(bg&&bg.translate){be[i]=bg.translate();
}else{be[i]=bg;
}}bd=qx.lang.String.format(bd,be);
}
if(qx.core.Environment.get(d)){bd=new qx.locale.LocalizedString(bd,ba,bb);
}return bd;
}},destruct:function(){this.__iw=this.__ix=null;
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__ga=by;
this.__gb=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__gc=this.__gb;
}else{this.__gc=this.__gb.document.documentElement;
}this.__gd={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bz){if(this._identifierToKeyCodeMap[bz]){return true;
}
if(bz.length!=1){return false;
}
if(bz>=f&&bz<=d){return true;
}
if(bz>=bs&&bz<=bg){return true;
}
switch(bz){case bw:case bx:case M:case C:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bA){if(bA===br){return true;
}else{return this._identifierToKeyCodeMap[bA]?false:true;
}}},members:{__ge:null,__ga:null,__gb:null,__gc:null,__gd:null,__gf:null,__gg:null,__gh:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__gi();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__ga.dispatchEvent(bL,event);
}if(this.__gb){qx.event.Registration.fireEvent(this.__gb,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__gi();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__ga.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__gb){qx.event.Registration.fireEvent(this.__gb,s,qx.event.type.Data,[bN]);
}},__gi:function(){var bR=this.__ga.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__ga.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ge=qx.lang.Function.listener(this.__gj,this);
this.__gh=qx.lang.Function.listener(this.__gl,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__gc,i,this.__ge);
Event.addNativeListener(this.__gc,m,this.__ge);
Event.addNativeListener(this.__gc,k,this.__gh);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__gc,i,this.__ge);
Event.removeNativeListener(this.__gc,m,this.__ge);
Event.removeNativeListener(this.__gc,k,this.__gh);

for(var bU in (this.__gg||{})){var bT=this.__gg[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__gg);
},__gj:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__gd[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__gd[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__gd[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__gd[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__gk(ca.target,cd,ce);
},"webkit":function(cf){var ci=0;
var cg=0;
var ch=cf.type;
if(parseFloat(qx.core.Environment.get(e))<525.13){if(ch==i||ch==m){ci=this._charCode2KeyCode[cf.charCode]||cf.keyCode;
}else{if(this._charCode2KeyCode[cf.charCode]){ci=this._charCode2KeyCode[cf.charCode];
}else{cg=cf.charCode;
}}this._idealKeyHandler(ci,cg,ch,cf);
}else{ci=cf.keyCode;
this._idealKeyHandler(ci,cg,ch,cf);
if(ch==m){if(this._isNonPrintableKeyCode(ci)||this._emulateKeyPress[ci]){this._idealKeyHandler(ci,cg,k,cf);
}}this.__gd[ci]=ch;
}},"opera":function(cj){this.__gf=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__gk:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__gg){this.__gg={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__gg[co]){return;
}var self=this;
this.__gg[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__gl(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__gg[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__gl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}},"gecko":function(cr){var cu=this._keyCodeFix[cr.keyCode]||cr.keyCode;
var cs=cr.charCode;
var ct=cr.type;
this._idealKeyHandler(cu,cs,ct,cr);
},"webkit":function(cv){if(parseFloat(qx.core.Environment.get(e))<525.13){var cy=0;
var cw=0;
var cx=cv.type;

if(cx==i||cx==m){cy=this._charCode2KeyCode[cv.charCode]||cv.keyCode;
}else{if(this._charCode2KeyCode[cv.charCode]){cy=this._charCode2KeyCode[cv.charCode];
}else{cw=cv.charCode;
}}this._idealKeyHandler(cy,cw,cx,cv);
}else{if(this._charCode2KeyCode[cv.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cv.keyCode],0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__gf){this._idealKeyHandler(0,this.__gf,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:c.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
},_isIdentifiableKeyCode:function(cI){if(cI>=this._charCodeA&&cI<=this._charCodeZ){return true;
}if(cI>=this._charCode0&&cI<=this._charCode9){return true;
}if(this._specialCharCodeMap[cI]){return true;
}if(this._numpadToCharCode[cI]){return true;
}if(this._isNonPrintableKeyCode(cI)){return true;
}return false;
},_keyCodeToIdentifier:function(cJ){if(this._isIdentifiableKeyCode(cJ)){var cK=this._numpadToCharCode[cJ];

if(cK){return String.fromCharCode(cK);
}return (this._keyCodeToIdentifierMap[cJ]||this._specialCharCodeMap[cJ]||String.fromCharCode(cJ));
}else{return y;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(cM){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cM]||cM.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gf=this.__ga=this.__gb=this.__gc=this.__gd=null;
},defer:function(cN,cO){qx.event.Registration.addHandler(cN);
if(!cN._identifierToKeyCodeMap){cN._identifierToKeyCodeMap={};

for(var cP in cO._keyCodeToIdentifierMap){cN._identifierToKeyCodeMap[cO._keyCodeToIdentifierMap[cP]]=parseInt(cP,10);
}
for(var cP in cO._specialCharCodeMap){cN._identifierToKeyCodeMap[cO._specialCharCodeMap[cP]]=parseInt(cP,10);
}}
if((qx.core.Environment.get(l)==bm)){cO._charCode2KeyCode={13:13,27:27};
}else if((qx.core.Environment.get(l)==bt)){cO._keyCodeFix={12:cO._identifierToKeyCode(j)};
}else if((qx.core.Environment.get(l)==O)){if(parseFloat(qx.core.Environment.get(e))<525.13){cO._charCode2KeyCode={63289:cO._identifierToKeyCode(j),63276:cO._identifierToKeyCode(bu),63277:cO._identifierToKeyCode(bn),63275:cO._identifierToKeyCode(B),63273:cO._identifierToKeyCode(bk),63234:cO._identifierToKeyCode(bq),63232:cO._identifierToKeyCode(t),63235:cO._identifierToKeyCode(bb),63233:cO._identifierToKeyCode(bo),63272:cO._identifierToKeyCode(Q),63302:cO._identifierToKeyCode(n),63236:cO._identifierToKeyCode(Y),63237:cO._identifierToKeyCode(be),63238:cO._identifierToKeyCode(p),63239:cO._identifierToKeyCode(T),63240:cO._identifierToKeyCode(bp),63241:cO._identifierToKeyCode(r),63242:cO._identifierToKeyCode(bl),63243:cO._identifierToKeyCode(o),63244:cO._identifierToKeyCode(L),63245:cO._identifierToKeyCode(U),63246:cO._identifierToKeyCode(u),63247:cO._identifierToKeyCode(H),63248:cO._identifierToKeyCode(bv),3:cO._identifierToKeyCode(g),12:cO._identifierToKeyCode(j),13:cO._identifierToKeyCode(g)};
}else{cO._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(B){qx.core.Object.call(this);
this.__gm=B;
this.__gn=B.getWindow().document.documentElement;
this.__gm.addListener(this.__gn,v,this._onMouseDown,this);
this.__gz();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__gm:null,__gn:null,__go:null,__gp:null,__gq:null,__gr:null,__gs:null,__gt:null,__gu:null,__gv:null,__gw:false,__gx:0,__gy:0,canHandleEvent:function(C,D){},registerEvent:function(E,F,G){},unregisterEvent:function(H,I,J){},addType:function(K){this.__gq[K]=true;
},addAction:function(L){this.__gr[L]=true;
},supportsType:function(M){return !!this.__gq[M];
},supportsAction:function(N){return !!this.__gr[N];
},getData:function(O){if(!this.__gG||!this.__go){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__gq[O]){throw new Error("Unsupported data type: "+O+"!");
}
if(!this.__gt[O]){this.__gu=O;
this.__gB(q,this.__gp,this.__go,false);
}
if(!this.__gt[O]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gt[O]||null;
},getCurrentAction:function(){return this.__gv;
},addData:function(P,Q){this.__gt[P]=Q;
},getCurrentType:function(){return this.__gu;
},isSessionActive:function(){return this.__gw;
},__gz:function(){this.__gq={};
this.__gr={};
this.__gs={};
this.__gt={};
},__gA:function(){if(this.__gp==null){return;
}var T=this.__gr;
var R=this.__gs;
var S=null;

if(this.__gG){if(R.Shift&&R.Ctrl&&T.alias){S=k;
}else if(R.Shift&&R.Alt&&T.copy){S=j;
}else if(R.Shift&&T.move){S=b;
}else if(R.Alt&&T.alias){S=k;
}else if(R.Ctrl&&T.copy){S=j;
}else if(T.move){S=b;
}else if(T.copy){S=j;
}else if(T.alias){S=k;
}}
if(S!=this.__gv){this.__gv=S;
this.__gB(o,this.__gp,this.__go,false);
}},__gB:function(U,V,W,X,Y){var bb=qx.event.Registration;
var ba=bb.createEvent(U,qx.event.type.Drag,[X,Y]);

if(V!==W){ba.setRelatedTarget(W);
}return bb.dispatchEvent(V,ba);
},__gC:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(u)==w){return bc;
}bc=bc.parentNode;
}return null;
},__gD:function(bd){while(bd&&bd.nodeType==1){if(bd.getAttribute(r)==w){return bd;
}bd=bd.parentNode;
}return null;
},__gE:function(){this.__gp=null;
this.__gm.removeListener(this.__gn,c,this._onMouseMove,this,true);
this.__gm.removeListener(this.__gn,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__gz();
},__gF:function(){if(this.__gw){this.__gm.removeListener(this.__gn,a,this._onMouseOver,this,true);
this.__gm.removeListener(this.__gn,h,this._onMouseOut,this,true);
this.__gm.removeListener(this.__gn,g,this._onKeyDown,this,true);
this.__gm.removeListener(this.__gn,z,this._onKeyUp,this,true);
this.__gB(x,this.__gp,this.__go,false);
this.__gw=false;
}this.__gG=false;
this.__go=null;
this.__gE();
},__gG:false,_onWindowBlur:function(e){this.__gF();
},_onKeyDown:function(e){var be=e.getKeyIdentifier();

switch(be){case A:case f:case d:if(!this.__gs[be]){this.__gs[be]=true;
this.__gA();
}}},_onKeyUp:function(e){var bf=e.getKeyIdentifier();

switch(bf){case A:case f:case d:if(this.__gs[bf]){this.__gs[bf]=false;
this.__gA();
}}},_onMouseDown:function(e){if(this.__gw){return;
}var bg=this.__gC(e.getTarget());

if(bg){this.__gx=e.getDocumentLeft();
this.__gy=e.getDocumentTop();
this.__gp=bg;
this.__gm.addListener(this.__gn,c,this._onMouseMove,this,true);
this.__gm.addListener(this.__gn,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gG){this.__gB(s,this.__go,this.__gp,false,e);
}if(this.__gw){e.stopPropagation();
}this.__gF();
},_onMouseMove:function(e){if(this.__gw){if(!this.__gB(t,this.__gp,this.__go,true,e)){this.__gF();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gx)>3||Math.abs(e.getDocumentTop()-this.__gy)>3){if(this.__gB(n,this.__gp,this.__go,true,e)){this.__gw=true;
this.__gm.addListener(this.__gn,a,this._onMouseOver,this,true);
this.__gm.addListener(this.__gn,h,this._onMouseOut,this,true);
this.__gm.addListener(this.__gn,g,this._onKeyDown,this,true);
this.__gm.addListener(this.__gn,z,this._onKeyUp,this,true);
var bh=this.__gs;
bh.Ctrl=e.isCtrlPressed();
bh.Shift=e.isShiftPressed();
bh.Alt=e.isAltPressed();
this.__gA();
}else{this.__gB(x,this.__gp,this.__go,false);
this.__gE();
}}}},_onMouseOver:function(e){var bi=e.getTarget();
var bj=this.__gD(bi);

if(bj&&bj!=this.__go){this.__gG=this.__gB(m,bj,this.__gp,true,e);
this.__go=bj;
this.__gA();
}},_onMouseOut:function(e){var bl=this.__gD(e.getTarget());
var bk=this.__gD(e.getRelatedTarget());

if(bl&&bl!==bk&&bl==this.__go){this.__gB(l,this.__go,bk,false,e);
this.__go=null;
this.__gG=false;
qx.event.Timer.once(this.__gA,this,0);
}}},destruct:function(){this.__gp=this.__go=this.__gm=this.__gn=this.__gq=this.__gr=this.__gs=this.__gt=null;
},defer:function(bm){qx.event.Registration.addHandler(bm);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__di:null,__dj:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__di=b;
this.__dj=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__di=this.__di;
f.__dj=this.__dj;
return f;
},getData:function(){return this.__di;
},getOldData:function(){return this.__dj;
}},destruct:function(){this.__di=this.__dj=null;
}});
})();
(function(){var j="engine.name",i="0px",h="mshtml",g="engine.version",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="opera",b="paddingBottom",a="paddingTop";
qx.Class.define(f,{statics:{getWidth:qx.core.Environment.select(j,{"gecko":function(k){if(k.getBoundingClientRect){var l=k.getBoundingClientRect();
return Math.round(l.right)-Math.round(l.left);
}else{return k.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Environment.select(j,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.bottom)-Math.round(o.top);
}else{return n.offsetHeight;
}},"default":function(p){return p.offsetHeight;
}}),getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};
},__lm:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__lm[t]){var w=r.clientWidth;

if((qx.core.Environment.get(j)==c)){w=w-u-x;
}else{if(qx.dom.Node.isBlockNode(r)){w=w-u-x;
}}return w;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;
}else{var v=r.scrollWidth-u;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)>=6){v-=x;
}return v;
}}},getContentHeight:function(y){var z=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var B=parseInt(z.get(y,a)||i,10);
var A=parseInt(z.get(y,b)||i,10);

if(this.__lm[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__iS:{},__iT:{width:null,height:null},__iU:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__iS[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__iS[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__iS[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__iS[k];
return m?m.format:null;
},getSize:function(n){var o=this.__iS[n];
return o?
{width:o.width,height:o.height}:this.__iT;
},getWidth:function(p){var q=this.__iS[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__iS[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__iS[t];

if(!w){w=this.__iS[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__iV,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__iS[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__iS[z]=null;
},__iV:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__iS[E];

if(!F){}if(event.type===b){F.loaded=true;
F.width=this.__iW(D);
F.height=this.__iX(D);
var G=this.__iU.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__iW:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__iX:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h=",",e="rgb(",d=")",c="qx.theme.manager.Color",a="qx.util.ColorUtil";
qx.Class.define(a,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(j){return this.NAMED[j]!==undefined;
},isSystemColor:function(k){return this.SYSTEM[k]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(c);
},isThemedColor:function(l){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(l);
},stringToRgb:function(m){if(this.supportsThemes()&&this.isThemedColor(m)){var m=qx.theme.manager.Color.getInstance().resolveDynamic(m);
}
if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__jd();
}else if(this.isHex3String(m)){return this.__jf();
}else if(this.isHex6String(m)){return this.__jg();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__jd();
}else if(this.isRgbaString(n)){return this.__je();
}else if(this.isHex3String(n)){return this.__jf();
}else if(this.isHex6String(n)){return this.__jg();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v);
},isCssString:function(w){return this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w);
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__jd:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__je:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__jf:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__jg:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__jf(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__jg(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__jf(P);
}
if(this.isHex6String(P)){return this.__jg(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(Q){var S,T,V;
var bc=Q[0];
var Y=Q[1];
var R=Q[2];
var bb=(bc>Y)?bc:Y;

if(R>bb){bb=R;
}var U=(bc<Y)?bc:Y;

if(R<U){U=R;
}V=bb/255.0;

if(bb!=0){T=(bb-U)/bb;
}else{T=0;
}
if(T==0){S=0;
}else{var X=(bb-bc)/(bb-U);
var ba=(bb-Y)/(bb-U);
var W=(bb-R)/(bb-U);

if(bc==bb){S=W-ba;
}else if(Y==bb){S=2.0+X-W;
}else{S=4.0+ba-X;
}S=S/6.0;

if(S<0){S=S+1.0;
}}return [Math.round(S*360),Math.round(T*100),Math.round(V*100)];
},hsbToRgb:function(bd){var i,f,p,q,t;
var be=bd[0]/360;
var bf=bd[1]/100;
var bg=bd[2]/100;

if(be>=1.0){be%=1.0;
}
if(bf>1.0){bf=1.0;
}
if(bg>1.0){bg=1.0;
}var bh=Math.floor(255*bg);
var bi={};

if(bf==0.0){bi.red=bi.green=bi.blue=bh;
}else{be*=6.0;
i=Math.floor(be);
f=be-i;
p=Math.floor(bh*(1.0-bf));
q=Math.floor(bh*(1.0-(bf*f)));
t=Math.floor(bh*(1.0-(bf*(1.0-f))));

switch(i){case 0:bi.red=bh;
bi.green=t;
bi.blue=p;
break;
case 1:bi.red=q;
bi.green=bh;
bi.blue=p;
break;
case 2:bi.red=p;
bi.green=bh;
bi.blue=t;
break;
case 3:bi.red=p;
bi.green=q;
bi.blue=bh;
break;
case 4:bi.red=t;
bi.green=p;
bi.blue=bh;
break;
case 5:bi.red=bh;
bi.green=p;
bi.blue=q;
break;
}}return [bi.red,bi.green,bi.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var q="",p="string",o="/",n="mshtml",m="engine.name",l="io.ssl",k="//",j="?",i="data",h="isClippedImage has been superseded by getCombinedFormat",c="type",g="data:image/",f=";",b="encoding",a="qx.util.ResourceManager",e="singleton",d=",";
qx.Class.define(a,{extend:qx.core.Object,type:e,construct:function(){qx.core.Object.call(this);
},statics:{__ir:qx.$$resources||{},__is:{}},members:{has:function(r){return !!this.self(arguments).__ir[r];
},getData:function(s){return this.self(arguments).__ir[s]||null;
},getImageWidth:function(t){var u=this.self(arguments).__ir[t];
return u?u[0]:null;
},getImageHeight:function(v){var w=this.self(arguments).__ir[v];
return w?w[1]:null;
},getImageFormat:function(x){var y=this.self(arguments).__ir[x];
return y?y[2]:null;
},isClippedImage:function(z){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
var A=this.self(arguments).__ir[z];
return A&&A.length>4&&typeof (A[4])==p&&this.constructor.__ir[A[4]];
},getCombinedFormat:function(B){var E=q;
var D=this.self(arguments).__ir[B];
var C=D&&D.length>4&&typeof (D[4])==p&&this.constructor.__ir[D[4]];

if(C){var G=D[4];
var F=this.constructor.__ir[G];
E=F[2];
}return E;
},toUri:function(H){if(H==null){return H;
}var I=this.self(arguments).__ir[H];

if(!I){return H;
}
if(typeof I===p){var K=I;
}else{var K=I[3];
if(!K){return H;
}}var J=q;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){J=this.self(arguments).__is[K];
}return J+qx.$$libraries[K].resourceUri+o+H;
},toDataUri:function(L){var N=this.constructor.__ir[L];
var O=this.constructor.__ir[N[4]];
var P;

if(O){var M=O[4][L];
P=g+M[c]+f+M[b]+d+M[i];
}else{this.debug("ResourceManager.toDataUri: falling back for",L);
P=this.toUri(L);
}return P;
}},defer:function(Q){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var U in qx.$$libraries){var S;

if(qx.$$libraries[U].resourceUri){S=qx.$$libraries[U].resourceUri;
}else{Q.__is[U]=q;
continue;
}if(S.match(/^\/\//)!=null){Q.__is[U]=window.location.protocol;
}else if(S.match(/^\//)!=null){Q.__is[U]=window.location.protocol+k+window.location.host;
}else if(S.match(/^\.\//)!=null){var R=document.URL;
Q.__is[U]=R.substring(0,R.lastIndexOf(o)+1);
}else if(S.match(/^http/)!=null){Q.__is[U]=q;
}else{var V=window.location.href.indexOf(j);
var T;

if(V==-1){T=window.location.href;
}else{T=window.location.href.substring(0,V);
}Q.__is[U]=T.substring(0,T.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var m="object",l="_applyTheme",k="",j="_",h="__dV",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:l,event:c}},members:{__dV:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__dV;

if(!p){p=this.__dV={};
}var o=p[n];

if(o){return o;
}var v=s.decorations[n];

if(!v){return null;
}if(!v.style){v.style={};
}var q=v;

while(q.include){q=s.decorations[q.include];
if(!v.decorator&&q.decorator){v.decorator=q.decorator;
}if(q.style){for(var u in q.style){if(v.style[u]==undefined){v.style[u]=q.style[u];
}}}}var r=v.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}if(r instanceof Array){var t=r.concat([]);

for(var i=0;i<t.length;i++){t[i]=t[i].basename.replace(e,k);
}var name=g+t.join(j);

if(!qx.Class.getByName(name)){qx.Class.define(name,{extend:qx.ui.decoration.DynamicDecorator,include:r});
}r=qx.Class.getByName(name);
}return p[n]=(new r).set(v.style);
},isValidPropertyValue:function(w){if(typeof w===a){return this.isDynamic(w);
}else if(typeof w===m){var x=w.constructor;
return qx.Class.hasInterface(x,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(y){if(!y){return false;
}var z=this.getTheme();

if(!z){return false;
}return !!z.decorations[y];
},_applyTheme:function(A,B){var D=qx.util.AliasManager.getInstance();

if(B){for(var C in B.aliases){D.remove(C);
}}
if(A){for(var C in A.aliases){D.add(C,A.aliases[C]);
}}
if(!A){this.__dV={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var q="engine.name",p="",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",f=":",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(m,{statics:{__ea:qx.core.Environment.select(q,{"mshtml":null,"webkit":[o,k,g],"gecko":[a],"opera":[o]}),__eb:qx.core.Environment.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[h],"opera":[n]}),__ec:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__ed:function(r){var s=this.__ec;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Environment.select(q,{"mshtml":function(t){},"default":function(u){var w=this.__eb;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+f+u+c;
}}return v;
}}),get:qx.core.Environment.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__ed(x)){return d;
}}return j;
},"default":function(y){var A=this.__ea;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Environment.select(q,{"mshtml":function(B,C){},"default":function(D,E){var F=this.__ea;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__iY:[n,null,m,i,null,r,k,null,r],__ja:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__jb:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__jc:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__jb(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__jc(G)){G=q+G+q;
}var H=this.__iY;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__ja;
}var L=this.__jb(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__jc(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var d="-",c="qx.event.handler.Element",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);
this._manager=e;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===b){return f.tagName.toLowerCase()!==a;
}else{return true;
}},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+d+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+d+o;
var r=this._registeredEvents[q];

if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);
}delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
var y=this.constructor.CANCELABLE[w.type];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);
})},destruct:function(){var z;
var A=this._registeredEvents;

for(var B in A){z=A[B];
qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);
}this._manager=this._registeredEvents=null;
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var g="CSS1Compat",f="engine.name",e="position:absolute;width:0;height:0;width:1",d="engine.version",c="qx.bom.Document",b="1px",a="div";
qx.Class.define(c,{statics:{isQuirksMode:qx.core.Environment.select(f,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;
}else{return (h||window).document.compatMode!==g;
}},"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(a);
j.style.cssText=e;
return j.style.width===b?true:false;
}else{return (i||window).document.compatMode!==g;
}},"default":function(k){return (k||window).document.compatMode!==g;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(p){var q=(p||window).document;
var r=qx.bom.Viewport.getHeight(p);
var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;
return Math.max(scroll,r);
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__dW:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__dW=null;
},getInsets:function(){if(this.__dW){return this.__dW;
}var j=this._getDefaultInsets();
return this.__dW={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__dW=null;
}},destruct:function(){this.__dW=null;
}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dY:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__dY[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__dY[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var o="px",n="top",m="_tint",l="abstract",k='<div style="',j="",h="_getDefaultInsetsFor",g="bottom",f="qx.ui.decoration.DynamicDecorator",e="left",b="right",d="_resize",c="_style",a='"></div>';
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,type:l,members:{getMarkup:function(){if(this._markup){return this._markup;
}var p={};

for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](p);
}}if(!this._generateMarkup){var q=[k];
q.push(qx.bom.element.Style.compile(p));
q.push(a);
q=q.join(j);
}else{var q=this._generateMarkup(p);
}return this._markup=q;
},resize:function(r,s,t){var v={};

for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var u=this[name](r,s,t);

if(v.left==undefined){v.left=u.left;
v.top=u.top;
}
if(v.width==undefined){v.width=u.width;
v.height=u.height;
}
if(u.elementToApplyDimensions){v.elementToApplyDimensions=u.elementToApplyDimensions;
}v.left=u.left<v.left?u.left:v.left;
v.top=u.top<v.top?u.top:v.top;
v.width=u.width>v.width?u.width:v.width;
v.height=u.height>v.height?u.height:v.height;
}}if(v.left!=undefined){r.style.left=v.left+o;
r.style.top=v.top+o;
}if(v.width!=undefined){if(v.width<0){v.width=0;
}
if(v.height<0){v.height=0;
}
if(v.elementToApplyDimensions){r=v.elementToApplyDimensions;
}r.style.width=v.width+o;
r.style.height=v.height+o;
}},tint:function(w,x){for(var name in this){if(name.indexOf(m)==0&&this[name] instanceof Function){this[name](w,x,w.style);
}}},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){var B=[n,b,g,e];
var z={};

for(var name in this){if(name.indexOf(h)==0&&this[name] instanceof Function){var A=this[name]();

for(var i=0;i<B.length;i++){var y=B[i];
if(z[y]==undefined){z[y]=A[y];
}if(A[y]<z[y]){z[y]=A[y];
}}}}if(z[n]!=undefined){return z;
}return {top:0,right:0,bottom:0,left:0};
}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__id:[],add:function(c){var d=this.__id;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__id;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__id=[];
}}});
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
(function(){var m="",l="engine.name",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(l,{"mshtml":function(n){if(n>=1){n=1;
}
if(n<0.00001){n=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+n+k;
}else{return d+(n*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(p){if(p>=1){return m;
}return j+p+k;
}}),set:qx.core.Environment.select(l,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=m;
}q.style.opacity=r;
}else{var s=qx.bom.element.Style.get(q,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(r>=1){r=1;
}
if(r<0.00001){r=0;
}if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;
}q.style.filter=s.replace(/alpha\([^\)]*\)/gi,m)+c+r*100+e;
}},"gecko":function(t,u){if(u>=1){u=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=u;
}else{t.style.opacity=u;
}},"default":function(v,w){if(w>=1){w=m;
}v.style.opacity=w;
}}),reset:qx.core.Environment.select(l,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=m;
}else{var y=qx.bom.element.Style.get(x,h,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=m;
}else{z.style.opacity=m;
}},"default":function(A){A.style.opacity=m;
}}),get:qx.core.Environment.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,i,C,false);

if(D!=null){return parseFloat(D);
}return 1.0;
}else{var E=qx.bom.element.Style.get(B,h,C,false);

if(E){var D=E.match(/alpha\(opacity=(.*)\)/);

if(D&&D[1]){return parseFloat(D[1])/100;
}}return 1.0;
}},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})},defer:function(L){L.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",G="set",F="deepBinding",E="item",D="reset",C="qx.data.SingleValueBinding",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",u="Binding property ",v="DEBUG_ON",s="Binding from '",t="PositiveNumber",q="PositiveInteger",r="Binding does not exist!",n=").",p="Date",w=" not possible: No event available. ";
qx.Class.define(C,{statics:{DEBUG_ON:false,__dk:{},bind:function(H,I,J,K,L){var W=this.__dm(H,I,J,K,L);
var R=I.split(d);
var N=this.__ds(R);
var V=[];
var S=[];
var T=[];
var P=[];
var Q=H;
try{for(var i=0;i<R.length;i++){if(N[i]!==l){P.push(g);
}else{P.push(this.__dn(Q,R[i]));
}V[i]=Q;
if(i==R.length-1){if(N[i]!==l){var bb=N[i]===h?Q.length-1:N[i];
var M=Q.getItem(bb);
this.__dr(M,J,K,L,H);
T[i]=this.__dt(Q,P[i],J,K,L,N[i]);
}else{if(R[i]!=null&&Q[m+qx.lang.String.firstUp(R[i])]!=null){var M=Q[m+qx.lang.String.firstUp(R[i])]();
this.__dr(M,J,K,L,H);
}T[i]=this.__dt(Q,P[i],J,K,L);
}}else{var X={index:i,propertyNames:R,sources:V,listenerIds:T,arrayIndexValues:N,targetObject:J,targetPropertyChain:K,options:L,listeners:S};
var U=qx.lang.Function.bind(this.__dl,this,X);
S.push(U);
T[i]=Q.addListener(P[i],U);
}if(Q[m+qx.lang.String.firstUp(R[i])]==null){Q=null;
}else if(N[i]!==l){Q=Q[m+qx.lang.String.firstUp(R[i])](N[i]);
}else{Q=Q[m+qx.lang.String.firstUp(R[i])]();
}
if(!Q){break;
}}}catch(bc){for(var i=0;i<V.length;i++){if(V[i]&&T[i]){V[i].removeListenerById(T[i]);
}}var ba=W.targets;
var O=W.listenerIds[i];
for(var i=0;i<ba.length;i++){if(ba[i]&&O[i]){ba[i].removeListenerById(O[i]);
}}throw bc;
}var Y={type:F,listenerIds:T,sources:V,targetListenerIds:W.listenerIds,targets:W.targets};
this.__du(Y,H,I,J,K);
return Y;
},__dl:function(bd){if(bd.options&&bd.options.onUpdate){bd.options.onUpdate(bd.sources[bd.index],bd.targetObject);
}for(var j=bd.index+1;j<bd.propertyNames.length;j++){var bh=bd.sources[j];
bd.sources[j]=null;

if(!bh){continue;
}bh.removeListenerById(bd.listenerIds[j]);
}var bh=bd.sources[bd.index];
for(var j=bd.index+1;j<bd.propertyNames.length;j++){if(bd.arrayIndexValues[j-1]!==l){bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])](bd.arrayIndexValues[j-1]);
}else{bh=bh[m+qx.lang.String.firstUp(bd.propertyNames[j-1])]();
}bd.sources[j]=bh;
if(!bh){this.__do(bd.targetObject,bd.targetPropertyChain);
break;
}if(j==bd.propertyNames.length-1){if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bi=bd.arrayIndexValues[j]===h?bh.length-1:bd.arrayIndexValues[j];
var bf=bh.getItem(bi);
this.__dr(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
bd.listenerIds[j]=this.__dt(bh,g,bd.targetObject,bd.targetPropertyChain,bd.options,bd.arrayIndexValues[j]);
}else{if(bd.propertyNames[j]!=null&&bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]!=null){var bf=bh[m+qx.lang.String.firstUp(bd.propertyNames[j])]();
this.__dr(bf,bd.targetObject,bd.targetPropertyChain,bd.options,bd.sources[bd.index]);
}var bg=this.__dn(bh,bd.propertyNames[j]);
bd.listenerIds[j]=this.__dt(bh,bg,bd.targetObject,bd.targetPropertyChain,bd.options);
}}else{if(bd.listeners[j]==null){var be=qx.lang.Function.bind(this.__dl,this,bd);
bd.listeners.push(be);
}if(qx.Class.implementsInterface(bh,qx.data.IListData)){var bg=g;
}else{var bg=this.__dn(bh,bd.propertyNames[j]);
}bd.listenerIds[j]=bh.addListener(bg,bd.listeners[j]);
}}},__dm:function(bj,bk,bl,bm,bn){var br=bm.split(d);
var bp=this.__ds(br);
var bw=[];
var bv=[];
var bt=[];
var bs=[];
var bq=bl;
for(var i=0;i<br.length-1;i++){if(bp[i]!==l){bs.push(g);
}else{try{bs.push(this.__dn(bq,br[i]));
}catch(e){break;
}}bw[i]=bq;
var bu=function(){for(var j=i+1;j<br.length-1;j++){var bz=bw[j];
bw[j]=null;

if(!bz){continue;
}bz.removeListenerById(bt[j]);
}var bz=bw[i];
for(var j=i+1;j<br.length-1;j++){var bx=qx.lang.String.firstUp(br[j-1]);
if(bp[j-1]!==l){var bA=bp[j-1]===h?bz.getLength()-1:bp[j-1];
bz=bz[m+bx](bA);
}else{bz=bz[m+bx]();
}bw[j]=bz;
if(bv[j]==null){bv.push(bu);
}if(qx.Class.implementsInterface(bz,qx.data.IListData)){var by=g;
}else{try{var by=qx.data.SingleValueBinding.__dn(bz,br[j]);
}catch(e){break;
}}bt[j]=bz.addListener(by,bv[j]);
}qx.data.SingleValueBinding.updateTarget(bj,bk,bl,bm,bn);
};
bv.push(bu);
bt[i]=bq.addListener(bs[i],bu);
var bo=qx.lang.String.firstUp(br[i]);
if(bq[m+bo]==null){bq=null;
}else if(bp[i]!==l){bq=bq[m+bo](bp[i]);
}else{bq=bq[m+bo]();
}
if(!bq){break;
}}return {listenerIds:bt,targets:bw};
},updateTarget:function(bB,bC,bD,bE,bF){var bG=this.getValueFromObject(bB,bC);
bG=qx.data.SingleValueBinding.__dv(bG,bD,bE,bF,bB);
this.__dp(bD,bE,bG);
},getValueFromObject:function(o,bH){var bL=this.__dq(o,bH);
var bJ;

if(bL!=null){var bN=bH.substring(bH.lastIndexOf(d)+1,bH.length);
if(bN.charAt(bN.length-1)==f){var bI=bN.substring(bN.lastIndexOf(k)+1,bN.length-1);
var bK=bN.substring(0,bN.lastIndexOf(k));
var bM=bL[m+qx.lang.String.firstUp(bK)]();

if(bI==h){bI=bM.length-1;
}
if(bM!=null){bJ=bM.getItem(bI);
}}else{bJ=bL[m+qx.lang.String.firstUp(bN)]();
}}return bJ;
},__dn:function(bO,bP){var bQ=this.__dw(bO,bP);
if(bQ==null){if(qx.Class.supportsEvent(bO.constructor,bP)){bQ=bP;
}else if(qx.Class.supportsEvent(bO.constructor,g+qx.lang.String.firstUp(bP))){bQ=g+qx.lang.String.firstUp(bP);
}else{throw new qx.core.AssertionError(u+bP+x+bO+w);
}}return bQ;
},__do:function(bR,bS){var bT=this.__dq(bR,bS);

if(bT!=null){var bU=bS.substring(bS.lastIndexOf(d)+1,bS.length);
if(bU.charAt(bU.length-1)==f){this.__dp(bR,bS,null);
return;
}if(bT[D+qx.lang.String.firstUp(bU)]!=undefined){bT[D+qx.lang.String.firstUp(bU)]();
}else{bT[G+qx.lang.String.firstUp(bU)](null);
}}},__dp:function(bV,bW,bX){var cc=this.__dq(bV,bW);

if(cc!=null){var cd=bW.substring(bW.lastIndexOf(d)+1,bW.length);
if(cd.charAt(cd.length-1)==f){var bY=cd.substring(cd.lastIndexOf(k)+1,cd.length-1);
var cb=cd.substring(0,cd.lastIndexOf(k));
var ca=bV;

if(!qx.Class.implementsInterface(ca,qx.data.IListData)){ca=cc[m+qx.lang.String.firstUp(cb)]();
}
if(bY==h){bY=ca.length-1;
}
if(ca!=null){ca.setItem(bY,bX);
}}else{cc[G+qx.lang.String.firstUp(cd)](bX);
}}},__dq:function(ce,cf){var ci=cf.split(d);
var cj=ce;
for(var i=0;i<ci.length-1;i++){try{var ch=ci[i];
if(ch.indexOf(f)==ch.length-1){var cg=ch.substring(ch.indexOf(k)+1,ch.length-1);
ch=ch.substring(0,ch.indexOf(k));
}if(ch!=l){cj=cj[m+qx.lang.String.firstUp(ch)]();
}if(cg!=null){if(cg==h){cg=cj.length-1;
}cj=cj.getItem(cg);
cg=null;
}}catch(ck){return null;
}}return cj;
},__dr:function(cl,cm,cn,co,cp){cl=this.__dv(cl,cm,cn,co,cp);
if(cl===undefined){this.__do(cm,cn);
}if(cl!==undefined){try{this.__dp(cm,cn,cl);
if(co&&co.onUpdate){co.onUpdate(cp,cm,cl);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(co&&co.onSetFail){co.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cl+" on "+cm+". Error message: "+e);
}}}},__ds:function(cq){var cr=[];
for(var i=0;i<cq.length;i++){var name=cq[i];
if(qx.lang.String.endsWith(name,f)){var cs=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cs!==h){if(cs==l||isNaN(parseInt(cs,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cq[i]=name.substring(0,name.indexOf(k));
cr[i]=l;
cr[i+1]=cs;
cq.splice(i+1,0,E);
i++;
}else{cr[i]=cs;
cq.splice(i,1,E);
}}else{cr[i]=l;
}}return cr;
},__dt:function(ct,cu,cv,cw,cx,cy){var cz;
var cB=function(cC,e){if(cC!==l){if(cC===h){cC=ct.length-1;
}var cF=ct.getItem(cC);
if(cF===undefined){qx.data.SingleValueBinding.__do(cv,cw);
}var cD=e.getData().start;
var cE=e.getData().end;

if(cC<cD||cC>cE){return;
}}else{var cF=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+ct+" by "+cu+" to "+cv+" ("+cw+")");
qx.log.Logger.debug("Data before conversion: "+cF);
}cF=qx.data.SingleValueBinding.__dv(cF,cv,cw,cx,ct);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cF);
}try{if(cF!==undefined){qx.data.SingleValueBinding.__dp(cv,cw,cF);
}else{qx.data.SingleValueBinding.__do(cv,cw);
}if(cx&&cx.onUpdate){cx.onUpdate(ct,cv,cF);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cx&&cx.onSetFail){cx.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cF+" on "+cv+". Error message: "+e);
}}};
if(!cy){cy=l;
}cB=qx.lang.Function.bind(cB,ct,cy);
var cA=ct.addListener(cu,cB);
return cA;
},__du:function(cG,cH,cI,cJ,cK){if(this.__dk[cH.toHashCode()]===undefined){this.__dk[cH.toHashCode()]=[];
}this.__dk[cH.toHashCode()].push([cG,cH,cI,cJ,cK]);
},__dv:function(cL,cM,cN,cO,cP){if(cO&&cO.converter){var cR;

if(cM.getModel){cR=cM.getModel();
}return cO.converter(cL,cR,cP,cM);
}else{var cT=this.__dq(cM,cN);
var cU=cN.substring(cN.lastIndexOf(d)+1,cN.length);
if(cT==null){return cL;
}var cS=qx.Class.getPropertyDefinition(cT.constructor,cU);
var cQ=cS==null?l:cS.check;
return this.__dx(cL,cQ);
}},__dw:function(cV,cW){var cX=qx.Class.getPropertyDefinition(cV.constructor,cW);

if(cX==null){return null;
}return cX.event;
},__dx:function(cY,da){var db=qx.lang.Type.getClass(cY);
if((db==c||db==b)&&(da==y||da==q)){cY=parseInt(cY,10);
}if((db==A||db==c||db==p)&&da==b){cY=cY+l;
}if((db==c||db==b)&&(da==c||da==t)){cY=parseFloat(cY);
}return cY;
},removeBindingFromObject:function(dc,dd){if(dd.type==F){for(var i=0;i<dd.sources.length;i++){if(dd.sources[i]){dd.sources[i].removeListenerById(dd.listenerIds[i]);
}}for(var i=0;i<dd.targets.length;i++){if(dd.targets[i]){dd.targets[i].removeListenerById(dd.targetListenerIds[i]);
}}}else{dc.removeListenerById(dd);
}var de=this.__dk[dc.toHashCode()];
if(de!=undefined){for(var i=0;i<de.length;i++){if(de[i][0]==dd){qx.lang.Array.remove(de,de[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(df){var dg=this.__dk[df.toHashCode()];

if(dg!=undefined){for(var i=dg.length-1;i>=0;i--){this.removeBindingFromObject(df,dg[i][0]);
}}},getAllBindingsForObject:function(dh){if(this.__dk[dh.toHashCode()]===undefined){this.__dk[dh.toHashCode()]=[];
}return this.__dk[dh.toHashCode()];
},removeAllBindings:function(){for(var dj in this.__dk){var di=qx.core.ObjectRegistry.fromHashCode(dj);
if(di==null){delete this.__dk[dj];
continue;
}this.removeAllBindingsForObject(di);
}this.__dk={};
},getAllBindings:function(){return this.__dk;
},showBindingInLog:function(dk,dl){var dn;
for(var i=0;i<this.__dk[dk.toHashCode()].length;i++){if(this.__dk[dk.toHashCode()][i][0]==dl){dn=this.__dk[dk.toHashCode()][i];
break;
}}
if(dn===undefined){var dm=r;
}else{var dm=s+dn[1]+B+dn[2]+z+dn[3]+B+dn[4]+n;
}qx.log.Logger.debug(dm);
},showAllBindingsInLog:function(){for(var dq in this.__dk){var dp=qx.core.ObjectRegistry.fromHashCode(dq);

for(var i=0;i<this.__dk[dq].length;i++){this.showBindingInLog(dp,this.__dk[dq][i][0]);
}}}}});
qx.log.Logger.deprecatedConstantWarning(C,v);
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
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__jI=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jI:null,_applyTimeoutInterval:function(h){this.__jI.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jI){this.__jI.stop();
}this.__jI=null;
}});
})();
(function(){var k="qx.dynlocale",j="Boolean",i="color",h="enabled",g="changeLocale",f="_applyTextAlign",d="qx.ui.core.Widget",c="nowrap",b="changeTextAlign",a="_applyWrap",D="changeValue",C="changeContent",B="qx.ui.basic.Label",A="whiteSpace",z="css.textoverflow",y="html.xul",x="_applyValue",w="center",v="_applyBuddy",u="String",r="textAlign",s="right",p="changeRich",q="normal",n="_applyRich",o="click",l="label",m="left",t="A";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setValue(E);
}
if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().addListener(g,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:p,apply:n},wrap:{check:j,init:true,apply:a},value:{check:u,apply:x,event:D,nullable:true},buddy:{check:d,apply:v,nullable:true,init:null,dereference:true},textAlign:{check:[m,w,s],nullable:true,themeable:true,apply:f,event:b},appearance:{refine:true,init:l},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__kY:null,__la:null,__lb:null,__lc:null,_getContentHint:function(){if(this.__la){this.__ld=this.__le();
delete this.__la;
}return {width:this.__ld.width,height:this.__ld.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(F){if(!qx.core.Environment.get(z)&&qx.core.Environment.get(y)){if(F&&!this.isRich()){return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,F);
},_getContentHeightForWidth:function(G){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__le(G).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(H,I){this.getContentElement().setStyle(r,H);
},_applyTextColor:function(J,K){if(J){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(J));
}else{this.getContentElement().removeStyle(i);
}},__ld:{width:0,height:0},_applyFont:function(L,M){var N;

if(L){this.__kY=qx.theme.manager.Font.getInstance().resolve(L);
N=this.__kY.getStyles();
}else{this.__kY=null;
N=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(N);
this.__la=true;
qx.ui.core.queue.Layout.add(this);
},__le:function(O){var S=qx.bom.Label;
var Q=this.getFont();
var P=Q?this.__kY.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||t;
var R=this.getRich();
return R?S.getHtmlSize(content,P,O):S.getTextSize(content,P);
},_applyBuddy:function(T,U){if(U!=null){U.removeBinding(this.__lb);
this.__lb=null;
this.removeListenerById(this.__lc);
this.__lc=null;
}
if(T!=null){this.__lb=T.bind(h,this,h);
this.__lc=this.addListener(o,function(){if(T.isFocusable()){T.focus.apply(T);
}},this);
}},_applyRich:function(V){this.getContentElement().setRich(V);
this.__la=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(W,X){if(W&&!this.isRich()){}
if(this.isRich()){var Y=W?q:c;
this.getContentElement().setStyle(A,Y);
}},_onChangeLocale:qx.core.Environment.select(k,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_applyValue:function(ba,bb){this.getContentElement().setValue(ba);
this.__la=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(C,ba,bb);
}},destruct:function(){if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().removeListener(g,this._onChangeLocale,this);
}if(this.__lb!=null){var bc=this.getBuddy();

if(bc!=null&&!bc.isDisposed()){bc.removeBinding(this.__lb);
}}this.__kY=this.__lb=null;
}});
})();
(function(){var f="engine.name",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
qx.Class.define(e,{statics:{getNodeIndex:function(g){var h=0;

while(g&&(g=g.previousSibling)){h++;
}return h;
},getElementIndex:function(i){var j=0;
var k=qx.dom.Node.ELEMENT;

while(i&&(i=i.previousSibling)){if(i.nodeType==k){j++;
}}return j;
},getNextElementSibling:function(l){while(l&&(l=l.nextSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},getPreviousElementSibling:function(m){while(m&&(m=m.previousSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},contains:qx.core.Environment.select(f,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:qx.core.Environment.select(f,{"mshtml":function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
return v.body.contains(u);
},"gecko":function(w){var x=w.ownerDocument||w.document;
return !!(x.compareDocumentPosition(w)&16);
},"default":function(y){if(!y.parentNode||!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
return z.body.contains(y);
}}),isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Environment.select(f,{"mshtml|opera":function(C,D){if(C===D){return C;
}
while(C&&qx.dom.Node.isElement(C)){if(C.contains(D)){return C;
}C=C.parentNode;
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
}}),getAncestors:function(K){return this._recursivelyCollect(K,a);
},getChildElements:function(L){L=L.firstChild;

if(!L){return [];
}var M=this.getNextSiblings(L);

if(L.nodeType===1){M.unshift(L);
}return M;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(c));
},getFirstDescendant:function(O){O=O.firstChild;

while(O&&O.nodeType!=1){O=O.nextSibling;
}return O;
},getLastDescendant:function(P){P=P.lastChild;

while(P&&P.nodeType!=1){P=P.previousSibling;
}return P;
},getPreviousSiblings:function(Q){return this._recursivelyCollect(Q,d);
},getNextSiblings:function(R){return this._recursivelyCollect(R,b);
},_recursivelyCollect:function(S,T){var U=[];

while(S=S[T]){if(S.nodeType==1){U.push(S);
}}return U;
},getSiblings:function(V){return this.getPreviousSiblings(V).reverse().concat(this.getNextSiblings(V));
},isEmpty:function(W){W=W.firstChild;

while(W){if(W.nodeType===qx.dom.Node.ELEMENT||W.nodeType===qx.dom.Node.TEXT){return false;
}W=W.nextSibling;
}return true;
},cleanWhitespace:function(X){var Y=X.firstChild;

while(Y){var ba=Y.nextSibling;

if(Y.nodeType==3&&!/\S/.test(Y.nodeValue)){X.removeChild(Y);
}Y=ba;
}}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__hL:{},remove:function(c){delete this.__hL[c.$$hash];
},add:function(d){this.__hL[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__hL[e.$$hash];
},flush:function(){var f=this.__hO();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__hN;
var n=0;
var parent=k;
while(true){if(l[parent.$$hash]!=null){n+=l[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
n+=1;
}var m=n;

while(k&&k!==parent){l[k.$$hash]=m--;
k=k.$$parent;
}return n;
},__hM:function(){var t=qx.ui.core.queue.Visibility;
this.__hN={};
var s=[];
var r=this.__hL;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__hO:function(){var x=[];
var z=this.__hM();

for(var w=z.length-1;w>=0;w--){if(!z[w]){continue;
}
for(var v in z[w]){var u=z[w][v];
if(w==0||u.isRootWidget()||u.hasUserBounds()){x.push(u);
u.invalidateLayoutCache();
continue;
}var B=u.getSizeHint(false);

if(B){u.invalidateLayoutCache();
var y=u.getSizeHint();
var A=(!u.getBounds()||B.minWidth!==y.minWidth||B.width!==y.width||B.maxWidth!==y.maxWidth||B.minHeight!==y.minHeight||B.height!==y.height||B.maxHeight!==y.maxHeight);
}else{A=true;
}
if(A){var parent=u.getLayoutParent();

if(!z[w-1]){z[w-1]={};
}z[w-1][parent.$$hash]=parent;
}else{x.push(u);
}}}return x;
}}});
})();
(function(){var m="",k="engine.name",h="userSelect",g="style",f="MozUserModify",e="px",d="pixelBottom",c="float",b="borderImage",a="styleFloat",F="appearance",E="pixelHeight",D='Ms',C=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',t='string',u="pixelRight",r='Moz',s="pixelWidth",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(x,{statics:{__ee:function(){var G=[F,h,q,b];
var K={};
var H=document.documentElement.style;
var L=[r,o,w,y,D];

for(var i=0,l=G.length;i<l;i++){var M=G[i];
var I=M;

if(H[M]){K[I]=M;
continue;
}M=qx.lang.String.firstUp(M);

for(var j=0,N=L.length;j<N;j++){var J=L[j]+M;

if(typeof H[J]==t){K[I]=J;
break;
}}}this.__ef=K;
this.__ef[n]=qx.core.Environment.select(k,{"gecko":f,"webkit":v,"default":h});
this.__eg={};

for(var I in K){this.__eg[I]=this.__ek(K[I]);
}this.__ef[c]=qx.core.Environment.select(k,{"mshtml":a,"default":B});
},__eh:{width:s,height:E,left:z,right:u,top:A,bottom:d},__ei:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__ei;
var R=this.__eg;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(this.__ek(name),C,P,p);
}}return Q.join(m);
},__ej:{},__ek:function(T){var U=this.__ej;
var V=U[T];

if(!V){V=U[T]=qx.lang.String.hyphenate(T);
}return V;
},setCss:qx.core.Environment.select(k,{"mshtml":function(W,X){W.style.cssText=X;
},"default":function(Y,ba){Y.setAttribute(g,ba);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(bb){return bb.style.cssText.toLowerCase();
},"default":function(bc){return bc.getAttribute(g);
}}),isPropertySupported:function(bd){return (this.__ei[bd]||this.__ef[bd]||bd in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(be,name,bf,bg){name=this.__ef[name]||name;
if(bg!==false&&this.__ei[name]){return this.__ei[name].set(be,bf);
}else{be.style[name]=bf!==null?bf:m;
}},setStyles:function(bh,bi,bj){var bm=this.__ef;
var bo=this.__ei;
var bk=bh.style;

for(var bn in bi){var bl=bi[bn];
var name=bm[bn]||bn;

if(bl===undefined){if(bj!==false&&bo[name]){bo[name].reset(bh);
}else{bk[name]=m;
}}else{if(bj!==false&&bo[name]){bo[name].set(bh,bl);
}else{bk[name]=bl!==null?bl:m;
}}}},reset:function(bp,name,bq){name=this.__ef[name]||name;
if(bq!==false&&this.__ei[name]){return this.__ei[name].reset(bp);
}else{bp.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(br,name,bs,bt){name=this.__ef[name]||name;
if(bt!==false&&this.__ei[name]){return this.__ei[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||m;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||m;
case this.CASCADED_MODE:return br.currentStyle[name]||m;
default:var bx=br.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__eh[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+e;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(by,name,bz,bA){name=this.__ef[name]||name;
if(bA!==false&&this.__ei[name]){return this.__ei[name].get(by,bz);
}switch(bz){case this.LOCAL_MODE:return by.style[name]||m;
case this.CASCADED_MODE:if(by.currentStyle){return by.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bB=qx.dom.Node.getDocument(by);
var bC=bB.defaultView.getComputedStyle(by,null);
return bC?bC[name]:m;
}}})},defer:function(bD){bD.__ee();
}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="engine.name",e="scroll",d="engine.version",c="border-box",b="borderBottomWidth",a="borderRightWidth",C="auto",B="padding",A="browser.quirksmode",z="qx.bom.element.Location",y="paddingLeft",x="static",w="marginBottom",v="visible",u="BODY",t="opera",q="paddingBottom",r="paddingTop",o="marginRight",p="position",m="margin",n="overflow",k="paddingRight",l="browser.documentmode",s="border";
qx.Class.define(z,{statics:{__hF:function(D,E){return qx.bom.element.Style.get(D,E,qx.bom.element.Style.COMPUTED_MODE,false);
},__hG:function(F,G){return parseInt(qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hH:function(H){var K=0,top=0;
if(H.getBoundingClientRect&&qx.core.Environment.get(f)!=t){var J=qx.dom.Node.getWindow(H);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
}else{var I=qx.dom.Node.getDocument(H).body;
H=H.parentNode;
while(H&&H!=I){K+=H.scrollLeft;
top+=H.scrollTop;
H=H.parentNode;
}}return {left:K,top:top};
},__hI:qx.core.Environment.select(f,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(A)){O+=this.__hG(M,i);
top+=this.__hG(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__hG(Q,i);
top+=this.__hG(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__hG(U,g);
top+=this.__hG(U,h);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__hG(U,i);
top+=this.__hG(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__hJ:qx.core.Environment.select(f,{"mshtml|webkit":function(ba){var bc=qx.dom.Node.getDocument(ba);
if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=bd.left;
var top=bd.top;
}else{var be=ba.offsetLeft;
var top=ba.offsetTop;
ba=ba.offsetParent;
var bb=bc.body;
while(ba&&ba!=bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
be+=this.__hG(ba,i);
top+=this.__hG(ba,j);
ba=ba.offsetParent;
}}return {left:be,top:top};
},"gecko":function(bf){if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=Math.round(bi.left);
var top=Math.round(bi.top);
}else{var bj=0;
var top=0;
var bg=qx.dom.Node.getDocument(bf).body;
var bh=qx.bom.element.BoxSizing;

if(bh.get(bf)!==c){bj-=this.__hG(bf,i);
top-=this.__hG(bf,j);
}
while(bf&&bf!==bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
if(bh.get(bf)!==c){bj+=this.__hG(bf,i);
top+=this.__hG(bf,j);
}if(bf.parentNode&&this.__hF(bf.parentNode,n)!=v){bj+=this.__hG(bf.parentNode,i);
top+=this.__hG(bf.parentNode,j);
}bf=bf.offsetParent;
}}return {left:bj,top:top};
},"default":function(bk){var bm=0;
var top=0;
var bl=qx.dom.Node.getDocument(bk).body;
while(bk&&bk!==bl){bm+=bk.offsetLeft;
top+=bk.offsetTop;
bk=bk.offsetParent;
}return {left:bm,top:top};
}}),get:function(bn,bo){if(bn.tagName==u){var location=this.__hK(bn);
var bv=location.left;
var top=location.top;
}else{var bp=this.__hI(bn);
var bu=this.__hJ(bn);
var scroll=this.__hH(bn);
var bv=bu.left+bp.left-scroll.left;
var top=bu.top+bp.top-scroll.top;
}var bq=bv+bn.offsetWidth;
var br=top+bn.offsetHeight;

if(bo){if(bo==B||bo==e){var bs=qx.bom.element.Overflow.getX(bn);

if(bs==e||bs==C){bq+=bn.scrollWidth-bn.offsetWidth+this.__hG(bn,i)+this.__hG(bn,a);
}var bt=qx.bom.element.Overflow.getY(bn);

if(bt==e||bt==C){br+=bn.scrollHeight-bn.offsetHeight+this.__hG(bn,j)+this.__hG(bn,b);
}}
switch(bo){case B:bv+=this.__hG(bn,y);
top+=this.__hG(bn,r);
bq-=this.__hG(bn,k);
br-=this.__hG(bn,q);
case e:bv-=bn.scrollLeft;
top-=bn.scrollTop;
bq-=bn.scrollLeft;
br-=bn.scrollTop;
case s:bv+=this.__hG(bn,i);
top+=this.__hG(bn,j);
bq-=this.__hG(bn,a);
br-=this.__hG(bn,b);
break;
case m:bv-=this.__hG(bn,g);
top-=this.__hG(bn,h);
bq+=this.__hG(bn,o);
br+=this.__hG(bn,w);
break;
}}return {left:bv,top:top,right:bq,bottom:br};
},__hK:qx.core.Environment.select(f,{"default":function(bw){var top=bw.offsetTop+this.__hG(bw,h);
var bx=bw.offsetLeft+this.__hG(bw,g);
return {left:bx,top:top};
},"mshtml":function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(l)<8)&&!qx.core.Environment.get(A))){top+=this.__hG(by,h);
bz+=this.__hG(by,g);
}return {left:bz,top:top};
},"gecko":function(bA){var top=bA.offsetTop+this.__hG(bA,h)+this.__hG(bA,i);
var bB=bA.offsetLeft+this.__hG(bA,g)+this.__hG(bA,j);
return {left:bB,top:top};
}}),getLeft:function(bC,bD){return this.get(bC,bD).left;
},getTop:function(bE,bF){return this.get(bE,bF).top;
},getRight:function(bG,bH){return this.get(bG,bH).right;
},getBottom:function(bI,bJ){return this.get(bI,bJ).bottom;
},getRelative:function(bK,bL,bM,bN){var bP=this.get(bK,bM);
var bO=this.get(bL,bN);
return {left:bP.left-bO.left,top:bP.top-bO.top,right:bP.right-bO.right,bottom:bP.bottom-bO.bottom};
},getPosition:function(bQ){return this.getRelative(bQ,this.getOffsetParent(bQ));
},getOffsetParent:function(bR){var bT=bR.offsetParent||document.body;
var bS=qx.bom.element.Style;

while(bT&&(!/^body|html$/i.test(bT.tagName)&&bS.get(bT,p)===x)){bT=bT.offsetParent;
}return bT;
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gH:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gI:{},__gJ:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gJ[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gJ[t]=true;
}catch(e){qx.bom.Element.__gJ[t]=false;
}}return qx.bom.Element.__gJ[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gI[w]){var v=qx.bom.Element.__gI[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gI[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gH;
var z=p;

for(var C in x){if(A[C]){z+=C+k+x[C]+d;
}}var D;
if(z!=p){if(qx.bom.Element.allowCreationWithMarkup(y)){D=y.document.createElement(m+name+o+z+n);
}else{var B=qx.bom.Element.getHelperElement(y);
B.innerHTML=m+name+o+z+a+name+n;
D=B.firstChild;
}}else{D=y.document.createElement(name);
}
for(var C in x){if(!A[C]){qx.bom.element.Attribute.set(D,C,x[C]);
}}return D;
},empty:function(E){return E.innerHTML=p;
},addListener:function(F,G,H,self,I){return qx.event.Registration.addListener(F,G,H,self,I);
},removeListener:function(J,K,L,self,M){return qx.event.Registration.removeListener(J,K,L,self,M);
},removeListenerById:function(N,O){return qx.event.Registration.removeListenerById(N,O);
},hasListener:function(P,Q,R){return qx.event.Registration.hasListener(P,Q,R);
},focus:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).focus(S);
},blur:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).blur(T);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(W,X){qx.event.Registration.getManager(W).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(W,X);
},releaseCapture:function(Y){qx.event.Registration.getManager(Y).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(Y);
},matchesSelector:function(ba,bb){if(bb){return qx.bom.Selector.query(bb,ba.parentNode).length>0;
}else{return false;
}},clone:function(bc,bd){var bg;

if(bd||((qx.core.Environment.get(r)==q)&&!qx.xml.Document.isXmlDocument(bc))){var bk=qx.event.Registration.getManager(bc);
var be=qx.dom.Hierarchy.getDescendants(bc);
be.push(bc);
}if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],false);
}}var bg=bc.cloneNode(true);
if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],true);
}}if(bd===true){var bn=qx.dom.Hierarchy.getDescendants(bg);
bn.push(bg);
var bf,bi,bm,bh;

for(var i=0,bl=be.length;i<bl;i++){bm=be[i];
bf=bk.serializeListeners(bm);

if(bf.length>0){bi=bn[i];

for(var j=0,bj=bf.length;j<bj;j++){bh=bf[j];
bk.addListener(bi,bh.type,bh.handler,bh.self,bh.capture);
}}}}return bg;
}}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__iE:{},__iF:(qx.core.Environment.get(j)==c)&&qx.core.Environment.get(D)<9,__iG:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iH:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===h){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=g&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=g&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__iF){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===h){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if((qx.core.Environment.get(j)==c)){if(X&&this.__iF&&this.__iG[W]&&qx.lang.String.endsWith(X,F)){return i;
}}return this.__iH[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(j)==c)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(j)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__iF&&this.__iG[ba]&&bd===q){bc=this.__iK(bb,ba,Y);
}else{if(ba===b){bc=this.__iL(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__iM(bb,ba,Y);
}else{bc=this.__iP(bb,ba,Y);
}}return bc;
},__iI:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__iJ:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__iK:function(bl,bm,bn){var bq=this.__iJ(bn);
bl=this.__iI(bl,bq.width,bq.height);
var bp=bm==f?E:b;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=g;
return {style:bl};
},__iL:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__iJ(bt);
br=this.__iI(br,bv.width,bv.height);
return {src:bu,style:br};
},__iM:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__iJ(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__iN(bw,bD,bE.height);
}else{bw=this.__iO(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__iN:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__iO:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__iP:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__iJ(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=bT=0;
}else{var bV=bS.toUri(bW);
var bU=bY[5];
var bT=bY[6];
}var bQ=qx.bom.element.Background.getStyles(bV,bO,bU,bT);

for(var bR in bQ){bN[bR]=bQ[bR];
}
if(ca.width!=null&&bN.width==null&&(bO==A||bO===f)){bN.width=ca.width+k;
}
if(ca.height!=null&&bN.height==null&&(bO==w||bO===f)){bN.height=ca.height+k;
}return {style:bN};
}else{bN=this.__iI(bN,ca.width,ca.height);
bN=this.__iQ(bN,bP,bO);
return {style:bN};
}},__iQ:function(cb,cc,cd){var top=null;
var ch=null;

if(cb.backgroundPosition){var ce=cb.backgroundPosition.split(u);
ch=parseInt(ce[0],10);

if(isNaN(ch)){ch=ce[0];
}top=parseInt(ce[1],10);

if(isNaN(top)){top=ce[1];
}}var cg=qx.bom.element.Background.getStyles(cc,cd,ch,top);

for(var cf in cg){cb[cf]=cg[cf];
}if(cb.filter){cb.filter=g;
}return cb;
},__iR:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__iE[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__iE[ci]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__iF;
},"default":function(){return false;
}})}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="__lE",r="PositiveInteger",q="mshtml",o="mouseup",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if((qx.core.Environment.get(d)==t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:v},maximum:{check:r,apply:w,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__lD:null,__lE:null,_getScrollPaneElement:function(){if(!this.__lE){this.__lE=new qx.html.Element();
}return this.__lE;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var F=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__lD?100:F,maxWidth:this.__lD?null:F,minWidth:this.__lD?null:F,height:this.__lD?F:100,maxHeight:this.__lD?F:null,minHeight:this.__lD?F:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(I){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__lD){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(K,L){var M=this.__lD=K===k;
this.set({allowGrowX:M,allowShrinkX:M,allowGrowY:!M,allowShrinkY:!M});

if(M){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:M?i:c,overflowY:M?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var O=this.__lD;
var P=this.getBounds();

if(!P){return;
}
if(this.isEnabled()){var Q=O?P.width:P.height;
var N=this.getMaximum()+Q;
}else{N=0;
}if((qx.core.Environment.get(d)==q)){var P=this.getBounds();
this.getContentElement().setStyles({left:O?f:g,top:O?g:f,width:(O?P.width:P.width+1)+j,height:(O?P.height+1:P.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(O?N:1)+j,height:(O?1:N)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(S){this.scrollTo(this.getPosition()+S);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__lD?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(s);
}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.core.Setting.defineDeprecated(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){{return new qx.ui.core.scroll.NativeScrollBar(c);
};
}}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="os.name",g="osx",f="under",d="PageUp",c="Left",O="lead",N="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",v="click",w="above",t="left",u="Escape",r="A",s="Space",p="_applyMode",q="interval",x="changeSelection",y="qx.event.type.Data",A="quick",z="key",C="abstract",B="__ka",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:C,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jW={};
},events:{"changeSelection":y},properties:{mode:{check:[n,j,k,o],init:n,apply:p},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__jX:0,__jY:0,__ka:null,__kb:null,__kc:null,__kd:null,__ke:null,__kf:null,__kg:null,__kh:null,__ki:null,__kj:null,__kk:null,__kl:null,__km:null,__kn:null,__ko:null,__jW:null,__kp:null,__kq:null,_userInteraction:false,__kr:null,getSelectionContext:function(){return this.__kn;
},selectAll:function(){var P=this.getMode();

if(P==n||P==o){throw new Error("Can not select all items in selection mode: "+P);
}this._selectAllItems();
this._fireChange();
},selectItem:function(Q){this._setSelectedItem(Q);
var R=this.getMode();

if(R!==n&&R!==o){this._setLeadItem(Q);
this._setAnchorItem(Q);
}this._scrollItemIntoView(Q);
this._fireChange();
},addItem:function(S){var T=this.getMode();

if(T===n||T===o){this._setSelectedItem(S);
}else{if(!this._getAnchorItem()){this._setAnchorItem(S);
}this._setLeadItem(S);
this._addToSelection(S);
}this._scrollItemIntoView(S);
this._fireChange();
},removeItem:function(U){this._removeFromSelection(U);

if(this.getMode()===o&&this.isSelectionEmpty()){var V=this._getFirstSelectable();

if(V){this.addItem(V);
}if(V==U){return;
}}
if(this.getLeadItem()==U){this._setLeadItem(null);
}
if(this._getAnchorItem()==U){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(W,X){var Y=this.getMode();

if(Y==n||Y==o){throw new Error("Can not select multiple items in selection mode: "+Y);
}this._selectItemRange(W,X);
this._setAnchorItem(W);
this._setLeadItem(X);
this._scrollItemIntoView(X);
this._fireChange();
},clearSelection:function(){if(this.getMode()==o){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(ba){var bb=this.getMode();

if(bb==o||bb===n){if(ba.length>1){throw new Error("Could not select more than one items in mode: "+bb+"!");
}
if(ba.length==1){this.selectItem(ba[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(ba);
}},getSelectedItem:function(){var bc=this.getMode();

if(bc===n||bc===o){var bd=this._getSelectedItem();
return bd!=undefined?bd:null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__jW);
},getSortedSelection:function(){var bf=this.getSelectables();
var be=qx.lang.Object.getValues(this.__jW);
be.sort(function(a,b){return bf.indexOf(a)-bf.indexOf(b);
});
return be;
},isItemSelected:function(bg){var bh=this._selectableToHashCode(bg);
return this.__jW[bh]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__jW);
},invertSelection:function(){var bj=this.getMode();

if(bj===n||bj===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bi=this.getSelectables();

for(var i=0;i<bi.length;i++){this._toggleInSelection(bi[i]);
}this._fireChange();
},_setLeadItem:function(bk){var bl=this.__ko;

if(bl!==null){this._styleSelectable(bl,O,false);
}
if(bk!==null){this._styleSelectable(bk,O,true);
}this.__ko=bk;
},getLeadItem:function(){return this.__ko!==null?this.__ko:null;
},_setAnchorItem:function(bm){var bn=this.__kp;

if(bn){this._styleSelectable(bn,J,false);
}
if(bm){this._styleSelectable(bm,J,true);
}this.__kp=bm;
},_getAnchorItem:function(){return this.__kp!==null?this.__kp:null;
},_isSelectable:function(bo){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bp=event.getTarget();
if(bp&&this._isSelectable(bp)){return bp;
}return null;
},_selectableToHashCode:function(bq){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(br,bs,bt){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bu){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bv){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bw,bx){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(by){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(bz){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bA,bB){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bC,bD){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bE,bF){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bG,bH){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bG===o){var bI=this._getFirstSelectable();

if(bI!=null){this._setSelectedItem(bI);
this._scrollItemIntoView(bI);
}}this._fireChange();
},handleMouseOver:function(event){if(this.__kr!=null&&this.__kr!=this._getScroll().top){this.__kr=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var bK=this.getMode();

if(bK!==o&&bK!==n){this._userInteraction=false;
return;
}var bJ=this._getSelectableFromMouseEvent(event);

if(bJ===null){this._userInteraction=false;
return;
}this._setSelectedItem(bJ);
this._fireChange(A);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bM=this._getSelectableFromMouseEvent(event);

if(bM===null){this._userInteraction=false;
return;
}var bO=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bL=event.isShiftPressed();
if(this.isItemSelected(bM)&&!bL&&!bO&&!this.getDrag()){this.__kq=bM;
this._userInteraction=false;
return;
}else{this.__kq=null;
}this._scrollItemIntoView(bM);
switch(this.getMode()){case n:case o:this._setSelectedItem(bM);
break;
case k:this._setLeadItem(bM);
this._setAnchorItem(bM);
this._toggleInSelection(bM);
break;
case j:this._setLeadItem(bM);
if(bL){var bN=this._getAnchorItem();

if(bN===null){bN=this._getFirstSelectable();
this._setAnchorItem(bN);
}this._selectItemRange(bN,bM,bO);
}else if(bO){this._setAnchorItem(bM);
this._toggleInSelection(bM);
}else{this._setAnchorItem(bM);
this._setSelectedItem(bM);
}break;
}var bP=this.getMode();

if(this.getDrag()&&bP!==n&&bP!==o&&!bL&&!bO){this.__ke=this._getLocation();
this.__kb=this._getScroll();
this.__kf=event.getDocumentLeft()+this.__kb.left;
this.__kg=event.getDocumentTop()+this.__kb.top;
this.__kh=true;
this._capture();
}this._fireChange(v);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bT=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bQ=event.isShiftPressed();

if(!bT&&!bQ&&this.__kq){var bR=this._getSelectableFromMouseEvent(event);

if(bR===null||!this.isItemSelected(bR)){this._userInteraction=false;
return;
}var bS=this.getMode();

if(bS===k){this._removeFromSelection(bR);
}else{this._setSelectedItem(bR);

if(this.getMode()===j){this._setLeadItem(bR);
this._setAnchorItem(bR);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__kh){return;
}this.__ki=event.getDocumentLeft();
this.__kj=event.getDocumentTop();
this._userInteraction=true;
var bV=this.__ki+this.__kb.left;

if(bV>this.__kf){this.__kk=1;
}else if(bV<this.__kf){this.__kk=-1;
}else{this.__kk=0;
}var bU=this.__kj+this.__kb.top;

if(bU>this.__kg){this.__kl=1;
}else if(bU<this.__kg){this.__kl=-1;
}else{this.__kl=0;
}var location=this.__ke;

if(this.__ki<location.left){this.__jX=this.__ki-location.left;
}else if(this.__ki>location.right){this.__jX=this.__ki-location.right;
}else{this.__jX=0;
}
if(this.__kj<location.top){this.__jY=this.__kj-location.top;
}else if(this.__kj>location.bottom){this.__jY=this.__kj-location.bottom;
}else{this.__jY=0;
}if(!this.__ka){this.__ka=new qx.event.Timer(100);
this.__ka.addListener(q,this._onInterval,this);
}this.__ka.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bW=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__kh){return;
}if(this.__km){this._fireChange(v);
}delete this.__kh;
delete this.__kc;
delete this.__kd;
this._releaseCapture();
if(this.__ka){this.__ka.stop();
}},_onInterval:function(e){this._scrollBy(this.__jX,this.__jY);
this.__kb=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cg=this._getDimension();
var bY=Math.max(0,Math.min(this.__ki-this.__ke.left,cg.width))+this.__kb.left;
var bX=Math.max(0,Math.min(this.__kj-this.__ke.top,cg.height))+this.__kb.top;
if(this.__kc===bY&&this.__kd===bX){return;
}this.__kc=bY;
this.__kd=bX;
var ci=this._getAnchorItem();
var cb=ci;
var ce=this.__kk;
var ch,ca;

while(ce!==0){ch=ce>0?this._getRelatedSelectable(cb,F):this._getRelatedSelectable(cb,t);
if(ch!==null){ca=this._getSelectableLocationX(ch);
if((ce>0&&ca.left<=bY)||(ce<0&&ca.right>=bY)){cb=ch;
continue;
}}break;
}var cf=this.__kl;
var cd,cc;

while(cf!==0){cd=cf>0?this._getRelatedSelectable(cb,f):this._getRelatedSelectable(cb,w);
if(cd!==null){cc=this._getSelectableLocationY(cd);
if((cf>0&&cc.top<=bX)||(cf<0&&cc.bottom>=bX)){cb=cd;
continue;
}}break;
}var cj=this.getMode();

if(cj===j){this._selectItemRange(ci,cb);
}else if(cj===k){if(this.isItemSelected(ci)){this._selectItemRange(ci,cb,true);
}else{this._deselectItemRange(ci,cb);
}this._setAnchorItem(cb);
}this._fireChange(E);
},__ks:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cp,co;
var cr=event.getKeyIdentifier();
var cq=this.getMode();
var cl=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var cm=event.isShiftPressed();
var cn=false;

if(cr===r&&cl){if(cq!==n&&cq!==o){this._selectAllItems();
cn=true;
}}else if(cr===u){if(cq!==n&&cq!==o){this._clearSelection();
cn=true;
}}else if(cr===s){var ck=this.getLeadItem();

if(ck&&!cm){if(cl||cq===k){this._toggleInSelection(ck);
}else{this._setSelectedItem(ck);
}cn=true;
}}else if(this.__ks[cr]){cn=true;

if(cq===n||cq==o){cp=this._getSelectedItem();
}else{cp=this.getLeadItem();
}
if(cp!==null){switch(cr){case H:co=this._getFirstSelectable();
break;
case I:co=this._getLastSelectable();
break;
case M:co=this._getRelatedSelectable(cp,w);
break;
case N:co=this._getRelatedSelectable(cp,f);
break;
case c:co=this._getRelatedSelectable(cp,t);
break;
case G:co=this._getRelatedSelectable(cp,F);
break;
case d:co=this._getPage(cp,true);
break;
case K:co=this._getPage(cp,false);
break;
}}else{switch(cr){case H:case N:case G:case K:co=this._getFirstSelectable();
break;
case I:case M:case c:case d:co=this._getLastSelectable();
break;
}}if(co!==null){switch(cq){case n:case o:this._setSelectedItem(co);
break;
case k:this._setLeadItem(co);
break;
case j:if(cm){var cs=this._getAnchorItem();

if(cs===null){this._setAnchorItem(cs=this._getFirstSelectable());
}this._setLeadItem(co);
this._selectItemRange(cs,co,cl);
}else{this._setAnchorItem(co);
this._setLeadItem(co);

if(!cl){this._setSelectedItem(co);
}}break;
}this.__kr=this._getScroll().top;
this._scrollItemIntoView(co);
}}
if(cn){event.stop();
this._fireChange(z);
}this._userInteraction=false;
},_selectAllItems:function(){var ct=this.getSelectables();

for(var i=0,l=ct.length;i<l;i++){this._addToSelection(ct[i]);
}},_clearSelection:function(){var cu=this.__jW;

for(var cv in cu){this._removeFromSelection(cu[cv]);
}this.__jW={};
},_selectItemRange:function(cw,cx,cy){var cB=this._getSelectableRange(cw,cx);
if(!cy){var cA=this.__jW;
var cC=this.__kt(cB);

for(var cz in cA){if(!cC[cz]){this._removeFromSelection(cA[cz]);
}}}for(var i=0,l=cB.length;i<l;i++){this._addToSelection(cB[i]);
}},_deselectItemRange:function(cD,cE){var cF=this._getSelectableRange(cD,cE);

for(var i=0,l=cF.length;i<l;i++){this._removeFromSelection(cF[i]);
}},__kt:function(cG){var cI={};
var cH;

for(var i=0,l=cG.length;i<l;i++){cH=cG[i];
cI[this._selectableToHashCode(cH)]=cH;
}return cI;
},_getSelectedItem:function(){for(var cJ in this.__jW){return this.__jW[cJ];
}return null;
},_setSelectedItem:function(cK){if(this._isSelectable(cK)){var cL=this.__jW;
var cM=this._selectableToHashCode(cK);

if(!cL[cM]||qx.lang.Object.hasMinLength(cL,2)){this._clearSelection();
this._addToSelection(cK);
}}},_addToSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(!this.__jW[cO]&&this._isSelectable(cN)){this.__jW[cO]=cN;
this._styleSelectable(cN,m,true);
this.__km=true;
}},_toggleInSelection:function(cP){var cQ=this._selectableToHashCode(cP);

if(!this.__jW[cQ]){this.__jW[cQ]=cP;
this._styleSelectable(cP,m,true);
}else{delete this.__jW[cQ];
this._styleSelectable(cP,m,false);
}this.__km=true;
},_removeFromSelection:function(cR){var cS=this._selectableToHashCode(cR);

if(this.__jW[cS]!=null){delete this.__jW[cS];
this._styleSelectable(cR,m,false);
this.__km=true;
}},_replaceMultiSelection:function(cT){var cW=false;
var da,cY;
var cU={};

for(var i=0,l=cT.length;i<l;i++){da=cT[i];

if(this._isSelectable(da)){cY=this._selectableToHashCode(da);
cU[cY]=da;
}}var db=cT[0];
var cV=da;
var cX=this.__jW;

for(var cY in cX){if(cU[cY]){delete cU[cY];
}else{da=cX[cY];
delete cX[cY];
this._styleSelectable(da,m,false);
cW=true;
}}for(var cY in cU){da=cX[cY]=cU[cY];
this._styleSelectable(da,m,true);
cW=true;
}if(!cW){return false;
}this._scrollItemIntoView(cV);
this._setLeadItem(db);
this._setAnchorItem(db);
this.__km=true;
this._fireChange();
},_fireChange:function(dc){if(this.__km){this.__kn=dc||null;
this.fireDataEvent(x,this.getSelection());
delete this.__km;
}}},destruct:function(){this._disposeObjects(B);
this.__jW=this.__kq=this.__kp=null;
this.__ko=null;
}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="scrollbar-",d="on",c="_computeScrollbars",b="getDocument",a="changeVisibility",E="off",D="x",C="scroll",B="touchmove",A="scrollY",z="Left",y="mousewheel",x="scrollbarX",w="event.touch",v="scrollarea",r="y",s="vertical",p="scrollX",q="touchstart",n="horizontal",o="qx.ui.core.scroll.AbstractScrollArea",l="abstract",m="update",t="scrollbarY",u="Top";
qx.Class.define(o,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:l,construct:function(){qx.ui.core.Widget.call(this);
var F=new qx.ui.layout.Grid();
F.setColumnFlex(0,1);
F.setRowFlex(0,1);
this._setLayout(F);
this.addListener(y,this._onMouseWheel,this);
if(qx.core.Environment.get(w)){this.addListener(B,this._onTouchMove,this);
this.addListener(q,function(){this.__kA={"x":0,"y":0};
},this);
this.__kA={};
this.__kB={};
}},properties:{appearance:{refine:true,init:v},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbarY:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbar:{group:[x,t]}},members:{__kA:null,__kB:null,_createChildControlImpl:function(G,H){var I;

switch(G){case i:I=new qx.ui.core.scroll.ScrollPane();
I.addListener(m,this._computeScrollbars,this);
I.addListener(p,this._onScrollPaneX,this);
I.addListener(A,this._onScrollPaneY,this);
this._add(I,{row:0,column:0});
break;
case j:I=this._createScrollBar(n);
I.setMinWidth(0);
I.exclude();
I.addListener(C,this._onScrollBarX,this);
I.addListener(a,this._onChangeScrollbarXVisibility,this);
this._add(I,{row:1,column:0});
break;
case k:I=this._createScrollBar(s);
I.setMinHeight(0);
I.exclude();
I.addListener(C,this._onScrollBarY,this);
I.addListener(a,this._onChangeScrollbarYVisibility,this);
this._add(I,{row:0,column:1});
break;
case g:I=new qx.ui.core.Widget();
I.setWidth(0);
I.setHeight(0);
I.exclude();
this._add(I,{row:1,column:1});
break;
}return I||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,G);
},getPaneSize:function(){return this.getChildControl(i).getInnerSize();
},getItemTop:function(J){return this.getChildControl(i).getItemTop(J);
},getItemBottom:function(K){return this.getChildControl(i).getItemBottom(K);
},getItemLeft:function(L){return this.getChildControl(i).getItemLeft(L);
},getItemRight:function(M){return this.getChildControl(i).getItemRight(M);
},scrollToX:function(N){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollTo(N);
},scrollByX:function(O){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollBy(O);
},getScrollX:function(){var P=this.getChildControl(j,true);
return P?P.getPosition():0;
},scrollToY:function(Q){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollTo(Q);
},scrollByY:function(R){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollBy(R);
},getScrollY:function(){var S=this.getChildControl(k,true);
return S?S.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(i).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(i).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var V=this._isChildControlVisible(j);
var W=this._isChildControlVisible(k);
var U=(W)?this.getChildControl(k,true):(V?this.getChildControl(j,true):null);

if(U){var X=parseInt(e.getWheelDelta());
U.scrollBySteps(X);
var Y=U.getPosition();
var T=U.getMaximum();
if(X<0&&Y<=0||X>0&&Y>=T){return ;
}e.stop();
}},_onTouchMove:function(e){this._onTouchMoveDirectional(D,e);
this._onTouchMoveDirectional(r,e);
e.stop();
},_onTouchMoveDirectional:function(ba,e){var bb=(ba==D?z:u);
var bd=this.getChildControl(f+ba,true);
var be=this._isChildControlVisible(f+ba);

if(be&&bd){if(this.__kA[ba]==0){var bc=0;
}else{var bc=-(e[b+bb]()-this.__kA[ba]);
}this.__kA[ba]=e[b+bb]();
bd.scrollBy(bc);
if(this.__kB[ba]){clearTimeout(this.__kB[ba]);
this.__kB[ba]=null;
}this.__kB[ba]=setTimeout(qx.lang.Function.bind(function(bf){this.__kC(bf,ba);
},this,bc),100);
}},__kC:function(bg,bh){this.__kB[bh]=null;
var bj=this._isChildControlVisible(f+bh);

if(bg==0||!bj){return;
}if(bg>0){bg=Math.max(0,bg-3);
}else{bg=Math.min(0,bg+3);
}this.__kB[bh]=setTimeout(qx.lang.Function.bind(function(bk,bl){this.__kC(bk,bl);
},this,bg,bh),20);
var bi=this.getChildControl(f+bh,true);
bi.scrollBy(bg);
},_onChangeScrollbarXVisibility:function(e){var bm=this._isChildControlVisible(j);
var bn=this._isChildControlVisible(k);

if(!bm){this.scrollToX(0);
}bm&&bn?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bo=this._isChildControlVisible(j);
var bp=this._isChildControlVisible(k);

if(!bp){this.scrollToY(0);
}bo&&bp?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var bw=this.getChildControl(i);
var content=bw.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bq=this.getInnerSize();
var bv=bw.getInnerSize();
var bt=bw.getScrollSize();
if(!bv||!bt){return;
}var bx=this.getScrollbarX();
var by=this.getScrollbarY();

if(bx===h&&by===h){var bu=bt.width>bq.width;
var bz=bt.height>bq.height;
if((bu||bz)&&!(bu&&bz)){if(bu){bz=bt.height>bv.height;
}else if(bz){bu=bt.width>bv.width;
}}}else{var bu=bx===d;
var bz=by===d;
if(bt.width>(bu?bv.width:bq.width)&&bx===h){bu=true;
}
if(bt.height>(bu?bv.height:bq.height)&&by===h){bz=true;
}}if(bu){var bs=this.getChildControl(j);
bs.show();
bs.setMaximum(Math.max(0,bt.width-bv.width));
bs.setKnobFactor((bt.width===0)?0:bv.width/bt.width);
}else{this._excludeChildControl(j);
}
if(bz){var br=this.getChildControl(k);
br.show();
br.setMaximum(Math.max(0,bt.height-bv.height));
br.setKnobFactor((bt.height===0)?0:bv.height/bt.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="bottom-left",s="top-left",r="top",q="right",p="_applyRich",n="_applyIcon",o="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:p},icon:{check:f,apply:n,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:o,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(B,C){var D;

switch(B){case j:D=new qx.ui.basic.Label(this.getLabel());
D.setAnonymous(true);
D.setRich(this.getRich());
this._add(D);

if(this.getLabel()==null||this.getShow()===i){D.exclude();
}break;
case i:D=new qx.ui.basic.Image(this.getIcon());
D.setAnonymous(true);
this._addAt(D,0);

if(this.getIcon()==null||this.getShow()===j){D.exclude();
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(j,true);

if(J){J.setRich(H);
}},_applyIcon:function(K,L){var M=this.getChildControl(i,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(P,Q){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(R,S){this._getLayout().setIconPosition(R);
},_applyCenter:function(T,U){this._getLayout().setCenter(T);
},_applySelectable:function(V,W){qx.ui.core.Widget.prototype._applySelectable.call(this,V,W);
var X=this.getChildControl(j,true);

if(X){this.getChildControl(j).setSelectable(V);
}}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var f="hovered",e="mouseover",d="mouseout",c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(g,h,i){qx.ui.basic.Atom.call(this,g,h);

if(i!=null){this.setModel(i);
}this.addListener(e,this._onMouseOver,this);
this.addListener(d,this._onMouseOut,this);
},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true},_onMouseOver:function(){this.addState(f);
},_onMouseOut:function(){this.removeState(f);
}},destruct:function(){this.removeListener(e,this._onMouseOver,this);
this.removeListener(d,this._onMouseOut,this);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__oa:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__oa(c);
},hasChildren:function(){return this.__oa(f);
},add:function(r,s){return this.__oa(j,r,s);
},remove:function(t){return this.__oa(a,t);
},removeAll:function(){return this.__oa(d);
},indexOf:function(u){return this.__oa(l,u);
},addAt:function(v,w,x){this.__oa(g,v,w,x);
},addBefore:function(y,z,A){this.__oa(i,y,z,A);
},addAfter:function(B,C,D){this.__oa(k,B,C,D);
},removeAt:function(E){this.__oa(e,E);
}}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(g){qx.ui.core.selection.Abstract.call(this);
this.__ku=g;
},members:{__ku:null,_isSelectable:function(h){return this._isItemSelectable(h)&&h.getLayoutParent()===this.__ku;
},_selectableToHashCode:function(j){return j.$$hash;
},_styleSelectable:function(k,m,n){n?k.addState(m):k.removeState(m);
},_capture:function(){this.__ku.capture();
},_releaseCapture:function(){this.__ku.releaseCapture();
},_isItemSelectable:function(o){if(this._userInteraction){return o.isVisible()&&o.isEnabled();
}else{return o.isVisible();
}},_getWidget:function(){return this.__ku;
},_getLocation:function(){var p=this.__ku.getContentElement().getDomElement();
return p?qx.bom.element.Location.get(p):null;
},_getDimension:function(){return this.__ku.getInnerSize();
},_getSelectableLocationX:function(q){var r=q.getBounds();

if(r){return {left:r.left,right:r.left+r.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(w){this.__ku.scrollChildIntoView(w);
},getSelectables:function(x){var y=false;

if(!x){y=this._userInteraction;
this._userInteraction=true;
}var B=this.__ku.getChildren();
var z=[];
var A;

for(var i=0,l=B.length;i<l;i++){A=B[i];

if(this._isItemSelectable(A)){z.push(A);
}}this._userInteraction=y;
return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__ku.getChildren();
var E=[];
var G=false;
var F;

for(var i=0,l=H.length;i<l;i++){F=H[i];

if(F===C||F===D){if(G){E.push(F);
break;
}else{G=true;
}}
if(G&&this._isItemSelectable(F)){E.push(F);
}}return E;
},_getFirstSelectable:function(){var I=this.__ku.getChildren();

for(var i=0,l=I.length;i<l;i++){if(this._isItemSelectable(I[i])){return I[i];
}}return null;
},_getLastSelectable:function(){var J=this.__ku.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(K,L){var O=this.__ku.getOrientation()===f;
var N=this.__ku.getChildren();
var M=N.indexOf(K);
var P;

if((O&&L===d)||(!O&&L===b)){for(var i=M-1;i>=0;i--){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}else if((O&&L===e)||(!O&&L===a)){for(var i=M+1;i<N.length;i++){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__ku=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(b){return this._isItemSelectable(b)&&b.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var c=this._getWidget();
return {left:c.getScrollX(),top:c.getScrollY()};
},_scrollBy:function(d,e){var f=this._getWidget();
f.scrollByX(d);
f.scrollByY(e);
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
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="mouseup",q="mousedown",p="__kz",o="losecapture",n="multi",m="_applyQuickSelection",d="mouseover",l="_applySelectionMode",h="_applyDragSelection",c="qx.ui.core.MMultiSelectionHandling",b="removeItem",g="keypress",f="qx.event.type.Data",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(c,{construct:function(){var x=this.SELECTION_MANAGER;
var w=this.__kz=new x(this);
this.addListener(q,w.handleMouseDown,w);
this.addListener(r,w.handleMouseUp,w);
this.addListener(d,w.handleMouseOver,w);
this.addListener(k,w.handleMouseMove,w);
this.addListener(o,w.handleLoseCapture,w);
this.addListener(g,w.handleKeyPress,w);
this.addListener(j,w.handleAddItem,w);
this.addListener(b,w.handleRemoveItem,w);
w.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[v,n,a,t],init:v,apply:l},dragSelection:{check:u,init:false,apply:h},quickSelection:{check:u,init:false,apply:m}},members:{__kz:null,selectAll:function(){this.__kz.selectAll();
},isSelected:function(y){if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not test if "+y+" is selected, because it is not a child element!");
}return this.__kz.isItemSelected(y);
},addToSelection:function(z){if(!qx.ui.core.Widget.contains(this,z)){throw new Error("Could not add + "+z+" to selection, because it is not a child element!");
}this.__kz.addItem(z);
},removeFromSelection:function(A){if(!qx.ui.core.Widget.contains(this,A)){throw new Error("Could not remove "+A+" from selection, because it is not a child element!");
}this.__kz.removeItem(A);
},selectRange:function(B,C){this.__kz.selectItemRange(B,C);
},resetSelection:function(){this.__kz.clearSelection();
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{var E=this.getSelection();

if(!qx.lang.Array.equals(E,D)){this.__kz.replaceSelection(D);
}}},getSelection:function(){return this.__kz.getSelection();
},getSortedSelection:function(){return this.__kz.getSortedSelection();
},isSelectionEmpty:function(){return this.__kz.isSelectionEmpty();
},getSelectionContext:function(){return this.__kz.getSelectionContext();
},_getManager:function(){return this.__kz;
},getSelectables:function(F){return this.__kz.getSelectables(F);
},invertSelection:function(){this.__kz.invertSelection();
},_getLeadItem:function(){var G=this.__kz.getMode();

if(G===v||G===t){return this.__kz.getSelectedItem();
}else{return this.__kz.getLeadItem();
}},_applySelectionMode:function(H,I){this.__kz.setMode(H);
},_applyDragSelection:function(J,K){this.__kz.setDrag(J);
},_applyQuickSelection:function(L,M){this.__kz.setQuick(L);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
}},destruct:function(){this._disposeObjects(p);
}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__kD,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__kD:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__kD,this);
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="change",d="qx.event.type.Data",c="__kv",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__kv=new qx.data.Array();
this.__kv.addListener(f,this.__ky,this);
this.addListener(a,this.__kx,this);
},events:{changeModelSelection:d},members:{__kv:null,__kw:false,__kx:function(){if(this.__kw){return;
}var k=this.getSelection();
var g=[];

for(var i=0;i<k.length;i++){var l=k[i];
var h=l.getModel?l.getModel():null;

if(h!==null){g.push(h);
}}if(g.length===k.length){try{this.setModelSelection(g);
}catch(e){throw new Error("Could not set the model selection. Maybe your models are not unique?");
}}},__ky:function(){this.__kw=true;
var n=this.getSelectables(true);
var p=[];
var o=this.__kv.toArray();

for(var i=0;i<o.length;i++){var r=o[i];

for(var j=0;j<n.length;j++){var s=n[j];
var m=s.getModel?s.getModel():null;

if(r===m){p.push(s);
break;
}}}this.setSelection(p);
this.__kw=false;
var q=this.getSelection();

if(!qx.lang.Array.equals(q,p)){this.__kx();
}},getModelSelection:function(){return this.__kv;
},setModelSelection:function(t){if(!t){this.__kv.removeAll();
return;
}t.unshift(this.__kv.getLength());
t.unshift(0);
var u=this.__kv.splice.apply(this.__kv,t);
u.dispose();
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(e){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="text",d="Boolean",c="one",b="addChildWidget",a="__uG",A="_applySpacing",z="Enter",y="Integer",x="action",w="keyinput",v="addItem",u="removeChildWidget",t="_applyOrientation",s="single",r="keypress",p="list",q="label",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(B){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__uG=this._createListItemContainer();
this.__uG.addListener(b,this._onAddChild,this);
this.__uG.addListener(u,this._onRemoveChild,this);
this.getChildControl(n).add(this.__uG);
if(B){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(r,this._onKeyPress);
this.addListener(w,this._onKeyInput);
this.__uH=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:t},spacing:{check:y,init:0,apply:A,themeable:true},enableInlineFind:{check:d,init:true}},members:{__uH:null,__uI:null,__uG:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__uG;
},_onAddChild:function(e){this.fireDataEvent(v,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_createListItemContainer:function(){return new qx.ui.container.Composite;
},_applyOrientation:function(C,D){var E=C===m;
var F=E?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__uG;
content.setLayout(F);
content.setAllowGrowX(!E);
content.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},_applySpacing:function(G,H){this.__uG.getLayout().setSpacing(G);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==z&&!e.isAltPressed()){var I=this.getSelection();

for(var i=0;i<I.length;i++){I[i].fireEvent(x);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var J=this.getSelectionMode();

if(!(J===s||J===c)){return;
}if(((new Date).valueOf()-this.__uI)>1000){this.__uH=h;
}this.__uH+=e.getChar();
var K=this.findItemByLabelFuzzy(this.__uH);
if(K){this.setSelection([K]);
}this.__uI=(new Date).valueOf();
},findItemByLabelFuzzy:function(L){L=L.toLowerCase();
var M=this.getChildren();
for(var i=0,l=M.length;i<l;i++){var N=M[i].getLabel();
if(N&&N.toLowerCase().indexOf(L)==0){return M[i];
}}return null;
},findItem:function(O,P){if(P!==false){O=O.toLowerCase();
}var S=this.getChildren();
var U;
for(var i=0,l=S.length;i<l;i++){U=S[i];
var T;

if(U.isRich()){var Q=U.getChildControl(q,true);

if(Q){var R=Q.getContentElement().getDomElement();

if(R){T=qx.bom.element.Attribute.get(R,f);
}}}else{T=U.getLabel();
}
if(T!=null){if(T.translate){T=T.translate();
}
if(P!==false){T=T.toLowerCase();
}
if(T.toString()==O.toString()){return U;
}}}return null;
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="__mr",c="changeSelection",b="changeSelected",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__mr:null,getSelection:function(){var g=this.__ms().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__ms().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection"+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__ms().resetSelected();
},isSelected:function(i){return this.__ms().isSelected(i);
},isSelectionEmpty:function(){return this.__ms().isSelectionEmpty();
},getSelectables:function(j){return this.__ms().getSelectables(j);
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(c,l,k);
},__ms:function(){if(this.__mr==null){var m=this;
this.__mr=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(n){if(m._isItemSelectable){return m._isItemSelectable(n);
}else{return n.isVisible();
}}});
this.__mr.addListener(b,this._onChangeSelected,this);
}this.__mr.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__mr;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var v="popup",u="list",t="",s="mousewheel",r="resize",q="Function",p="blur",o="abstract",n="keypress",m="Number",f="qx.ui.form.AbstractSelectBox",l="changeSelection",i="PageUp",c="_applyMaxListHeight",b="PageDown",h="mouseup",g="Escape",j="changeVisibility",a="one",k="middle",d="mousedown";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:o,construct:function(){qx.ui.core.Widget.call(this);
var x=new qx.ui.layout.HBox();
this._setLayout(x);
x.setAlignY(k);
this.addListener(n,this._onKeyPress);
this.addListener(p,this._onBlur,this);
var w=qx.core.Init.getApplication().getRoot();
w.addListener(s,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:m,apply:c,nullable:true,init:200},format:{check:q,init:function(y){return this._defaultFormat(y);
},nullable:true}},members:{_createChildControlImpl:function(z,A){var B;

switch(z){case u:B=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:a,quickSelection:true});
B.addListener(l,this._onListChangeSelection,this);
B.addListener(d,this._onListMouseDown,this);
break;
case v:B=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
B.setAutoHide(false);
B.setKeepActive(true);
B.addListener(h,this.close,this);
B.add(this.getChildControl(u));
B.addListener(j,this._onPopupChangeVisibility,this);
break;
}return B||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},_applyMaxListHeight:function(C,D){this.getChildControl(u).setMaxHeight(C);
},getChildrenContainer:function(){return this.getChildControl(u);
},open:function(){var E=this.getChildControl(v);
E.placeToWidget(this,true);
E.show();
},close:function(){this.getChildControl(v).hide();
},toggle:function(){var F=this.getChildControl(v).isVisible();

if(F){this.close();
}else{this.open();
}},_defaultFormat:function(G){var H=G?G.getLabel():t;
var I=G?G.getRich():false;

if(I){H=H.replace(/<[^>]+?>/g,t);
H=qx.bom.String.unescape(H);
}return H;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var J=e.getKeyIdentifier();
var K=this.getChildControl(v);
if(K.isHidden()&&(J==b||J==i)){e.stopPropagation();
}else if(!K.isHidden()&&J==g){this.close();
e.stop();
}else{this.getChildControl(u).handleKeyPress(e);
}},_onMousewheel:function(e){var M=e.getTarget();
var L=this.getChildControl(v,true);

if(L==null){return;
}
if(qx.ui.core.Widget.contains(L,M)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(v).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){throw new Error("Abstract method: _onPopupChangeVisibility()");
}},destruct:function(){var N=qx.core.Init.getApplication().getRoot();

if(N){N.removeListener(s,this._onMousewheel,this,true);
}}});
})();
(function(){var k="list",j="atom",i="pressed",h="abandoned",g="popup",f="hovered",d="changeLabel",c="changeIcon",b="arrow",a="",z="spacer",y="Enter",x="one",w="mouseout",v="Space",u="key",t="mousewheel",s="keyinput",r="changeSelection",q="quick",o="qx.ui.form.SelectBox",p="mouseover",m="selectbox",n="click",l=" ";
qx.Class.define(o,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
this._createChildControl(j);
this._createChildControl(z);
this._createChildControl(b);
this.addListener(p,this._onMouseOver,this);
this.addListener(w,this._onMouseOut,this);
this.addListener(n,this._onClick,this);
this.addListener(t,this._onMouseWheel,this);
this.addListener(s,this._onKeyInput,this);
this.addListener(r,this.__xC,this);
},properties:{appearance:{refine:true,init:m}},members:{__xB:null,_createChildControlImpl:function(A,B){var C;

switch(A){case z:C=new qx.ui.core.Spacer();
this._add(C,{flex:1});
break;
case j:C=new qx.ui.basic.Atom(l);
C.setCenter(false);
C.setAnonymous(true);
this._add(C,{flex:1});
break;
case b:C=new qx.ui.basic.Image();
C.setAnonymous(true);
this._add(C);
break;
}return C||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,A);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==x;
},__xC:function(e){var E=e.getData()[0];
var D=this.getChildControl(k);

if(D.getSelection()[0]!=E){if(E){D.setSelection([E]);
}else{D.resetSelection();
}}this.__xD();
this.__xE();
},__xD:function(){var G=this.getChildControl(k).getSelection()[0];
var H=this.getChildControl(j);
var F=G?G.getIcon():a;
F==null?H.resetIcon():H.setIcon(F);
},__xE:function(){var K=this.getChildControl(k).getSelection()[0];
var L=this.getChildControl(j);
var J=K?K.getLabel():a;
var I=this.getFormat();

if(I!=null){J=I.call(this,K);
}if(J&&J.translate){J=J.translate();
}J==null?L.resetLabel():L.setLabel(J);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(h)){this.removeState(h);
this.addState(i);
}this.addState(f);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(f);

if(this.hasState(i)){this.removeState(i);
this.addState(h);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(g).isVisible()){return;
}var N=e.getWheelDelta()>0?1:-1;
var P=this.getSelectables();
var O=this.getSelection()[0];

if(!O){O=P[0];
}var M=P.indexOf(O)+N;
var Q=P.length-1;
if(M<0){M=0;
}else if(M>=Q){M=Q;
}this.setSelection([P[M]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var R=e.getKeyIdentifier();

if(R==y||R==v){if(this.__xB){this.setSelection([this.__xB]);
this.__xB=null;
}this.toggle();
}else{qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onKeyInput:function(e){var S=e.clone();
S.setTarget(this._list);
S.setBubbles(false);
this.getChildControl(k).dispatchEvent(S);
},_onListMouseDown:function(e){if(this.__xB){this.setSelection([this.__xB]);
this.__xB=null;
}},_onListChangeSelection:function(e){var T=e.getData();
var W=e.getOldData();
if(W&&W.length>0){W[0].removeListener(c,this.__xD,this);
W[0].removeListener(d,this.__xE,this);
}
if(T.length>0){var V=this.getChildControl(g);
var U=this.getChildControl(k);
var X=U.getSelectionContext();

if(V.isVisible()&&(X==q||X==u)){this.__xB=T[0];
}else{this.setSelection([T[0]]);
this.__xB=null;
}T[0].addListener(c,this.__xD,this);
T[0].addListener(d,this.__xE,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){var ba=this.getChildControl(g);

if(!ba.isVisible()){var bc=this.getChildControl(k);
if(bc.hasChildren()){bc.setSelection(this.getSelection());
}}else{var Y=ba.getLayoutLocation(this);
var be=qx.bom.Viewport.getHeight();
var bd=Y.top;
var bf=be-Y.bottom;
var bb=bd>bf?bd:bf;
var bg=this.getMaxListHeight();
var bc=this.getChildControl(k);

if(bg==null||bg>bb){bc.setMaxHeight(bb);
}else if(bg<bb){bc.setMaxHeight(bg);
}}}},destruct:function(){this.__xB=null;
}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__ci:true,__cj:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__ck(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__ci){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__ci){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__ck:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__cj(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__cj(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__cj(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__cj(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__cj(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__cj(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__cj(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__cj(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__cj(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__cj(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__cj(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__cj(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__cj(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__cj(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__cj(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__cj(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__ci=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__ci=true;
}
if(cQ==null){this.__cj(cP||p,s);
}cQ instanceof cN||this.__cj(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__cj(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__cj(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__cj(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__cj(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__cj(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__cj(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__cj(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__cj(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__cj(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__cj(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__cj(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__cj(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__cj(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__cj(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__cj(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__cj(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__cj(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__cj(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__cj(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__cj(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__cl(ea,bu)||this.__cj(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__cl(ec,z)||this.__cj(ed||p,b,ec,o);
},__cl:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__dA:null,__dB:null,__dC:null,__dD:null,stringify:function(bb,bc,bd){this.__dA=p;
this.__dB=p;
this.__dD=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__dB+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__dB=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__dC=bc;
}else{this.__dC=null;
}return this.__dE(p,{'':bb});
},__dE:function(be,bf){var bi=this.__dA,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__dC===e){bj=this.__dC.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__dF(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__dA+=this.__dB;
bg=[];

if(this.__dD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dD.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__dE(i,bj)||h;
}this.__dD.pop();
if(bg.length===0){var bh=s;
}else if(this.__dA){bh=E+this.__dA+bg.join(Y+this.__dA)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__dA=bi;
return bh;
case z:this.__dA+=this.__dB;
bg=[];

if(this.__dD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__dD.push(bj);
if(this.__dC&&typeof this.__dC===f){var length=this.__dC.length;

for(var i=0;i<length;i+=1){var k=this.__dC[i];

if(typeof k===W){var v=this.__dE(k,bj);

if(v){bg.push(this.__dF(k)+(this.__dA?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__dE(k,bj);

if(v){bg.push(this.__dF(k)+(this.__dA?g:m)+v);
}}}}this.__dD.pop();
if(bg.length===0){var bh=A;
}else if(this.__dA){bh=w+this.__dA+bg.join(Y+this.__dA)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__dA=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__dF:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+
bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__dG({'':j},p,bs):j;
}throw new SyntaxError(P);
},__dG:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__dG(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var p="success",o="engine.name",n="complete",m="error",l="load",k="fail",j="loaded",i="mshtml",h="head",g="readystatechange",c="webkit",f="script",d="abort",b="text/javascript",a="qx.io.ScriptLoader";
qx.Bootstrap.define(a,{construct:function(){this.__uz=qx.Bootstrap.bind(this.__uF,this);
this.__uA=document.createElement(f);
},members:{__uB:null,__uC:null,__uD:null,__uE:null,__uz:null,__uA:null,load:function(q,r,s){if(this.__uB){throw new Error("Another request is still running!");
}this.__uB=true;
this.__uC=false;
var t=document.getElementsByTagName(h)[0];
var u=this.__uA;
this.__uD=r||null;
this.__uE=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__uz;
u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__uB){this.dispose(d);
}},dispose:function(status){if(this.__uC){return;
}this.__uC=true;
var w=this.__uA;
w.onerror=w.onload=w.onreadystatechange=null;
var v=w.parentNode;

if(v){v.removeChild(w);
}delete this.__uB;
if(this.__uD){if(qx.core.Environment.get(o)==i||qx.core.Environment.get(o)==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__uD.call(self.__uE,status);
delete self.__uD;
}),0);
}else{this.__uD.call(this.__uE,status);
delete this.__uD;
}}},__uF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(o,{"mshtml":function(e){var x=this.__uA.readyState;

if(x==j){this.dispose(p);
}else if(x==n){this.dispose(p);
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type===m){return this.dispose(k);
}else if(e.type===l){return this.dispose(p);
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type===m){this.dispose(k);
}else if(e.type===l){this.dispose(p);
}else if(e.type===g&&(e.target.readyState===n||e.target.readyState===j)){this.dispose(p);
}else{return;
}}}))}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__kE:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__kF:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__kF[name];
s[t]();
}else{var u=this.__kE[name];
s[u](q);
}}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__lw:null,__lx:false,__ly:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__lx){this.__lx=false;
}else{this.__lx=true;
o.execute(this);
}}this.fireEvent(n);
},__lz:function(e){if(this.__lx){this.__lx=false;
return;
}this.__lx=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__ly);
}
if(p!=null){this.__ly=p.addListener(n,this.__lz,this);
}var t=this.__lw;

if(t==null){this.__lw=t={};
}var u;

for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){u=this.get(s);
}else{u=null;
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this._applyCommand(null,this.getCommand());
this.__lw=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(p,q,r){qx.ui.basic.Atom.call(this,p,q);

if(r!=null){this.setCommand(r);
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
var s=this.hasState(o);
var t=this.hasState(n);

if(s){this.removeState(o);
}
if(t){this.removeState(n);
}else{this.addState(m);

if(s){this.execute();
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
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var o="checked",n="keypress",m="Boolean",l="Right",k="_applyValue",j="changeValue",i="qx.ui.form.RadioButton",h="radiobutton",g="Left",f="qx.ui.form.RadioGroup",b="Down",d="_applyGroup",c="Up",a="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(p){qx.ui.form.Button.call(this,p);
this.addListener(a,this._onExecute);
this.addListener(n,this._onKeyPress);
},properties:{group:{check:f,nullable:true,apply:d},value:{check:m,nullable:true,event:j,apply:k,init:false},appearance:{refine:true,init:h},allowGrowX:{refine:true,init:false}},members:{_forwardStates:{checked:true,focused:true,invalid:true,hovered:true},_applyValue:function(q,r){q?this.addState(o):this.removeState(o);

if(q&&this.getFocusable()){this.focus();
}},_applyGroup:function(s,t){if(t){t.remove(this);
}
if(s){s.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onKeyPress:function(e){var u=this.getGroup();

if(!u){return;
}
switch(e.getKeyIdentifier()){case g:case c:u.selectPrevious();
break;
case l:case b:u.selectNext();
break;
}}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleBottom",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",u="styleLeft",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.MSingleBorder",s="border-bottom",t="absolute";
qx.Mixin.define(l,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,u,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[y,z,v]},width:{group:[B,q,y,x],mode:C},style:{group:[w,A,z,u],mode:C},color:{group:[p,o,v,r],mode:C}},members:{_styleBorder:function(E){var F=qx.theme.manager.Color.getInstance();
var G=this.getWidthTop();

if(G>0){E[m]=G+g+this.getStyleTop()+D+(F.resolve(this.getColorTop())||c);
}var G=this.getWidthRight();

if(G>0){E[k]=G+g+this.getStyleRight()+D+(F.resolve(this.getColorRight())||c);
}var G=this.getWidthBottom();

if(G>0){E[s]=G+g+this.getStyleBottom()+D+(F.resolve(this.getColorBottom())||c);
}var G=this.getWidthLeft();

if(G>0){E[n]=G+g+this.getStyleLeft()+D+(F.resolve(this.getColorLeft())||c);
}E.position=t;
E.top=0;
E.left=0;
},_resizeBorder:function(H,I,J){var K=this.getInsets();
I-=K.left+K.right;
J-=K.top+K.bottom;
if(I<0){I=0;
}
if(J<0){J=0;
}return {left:K.left-this.getWidthLeft(),top:K.top-this.getWidthTop(),width:I,height:J};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){}}});
})();
(function(){var d="qx.ui.decoration.MBackgroundColor",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(d,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(e,f,g){var h=qx.theme.manager.Color.getInstance();

if(f==null){f=this.getBackgroundColor();
}g.backgroundColor=h.resolve(f)||a;
},_resizeBackgroundColor:function(i,j,k){var l=this.getInsets();
j-=l.left+l.right;
k-=l.top+l.bottom;
return {left:l.left,top:l.top,width:j,height:k};
},_applyBackgroundColor:function(){}}});
})();
(function(){var t="_applyBackgroundImage",s="repeat",r="",q="mshtml",p="engine.name",o="backgroundPositionX",n='<div style="',m="backgroundPositionY",l='</div>',k="no-repeat",d="engine.version",j="scale",g='">',c=" ",b="repeat-x",f="repeat-y",e="hidden",h="qx.ui.decoration.MBackgroundImage",a="String",i="browser.quirksmode";
qx.Mixin.define(h,{properties:{backgroundImage:{check:a,nullable:true,apply:t},backgroundRepeat:{check:[s,b,f,k,j],init:s,apply:t},backgroundPositionX:{nullable:true,apply:t},backgroundPositionY:{nullable:true,apply:t},backgroundPosition:{group:[m,o]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(u,content){var y=r;
var x=this.getBackgroundImage();
var w=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var z=this.getBackgroundPositionX();

if(z==null){z=0;
}u.backgroundPosition=z+c+top;
if(x){var v=qx.util.AliasManager.getInstance().resolve(x);
y=qx.bom.element.Decoration.create(v,w,u);
}else{if((qx.core.Environment.get(p)==q)){if(parseFloat(qx.core.Environment.get(d))<7||qx.core.Environment.get(i)){u.overflow=e;
}}
if(!content){content=r;
}y=n+qx.bom.element.Style.compile(u)+g+content+l;
}return y;
},_applyBackgroundImage:function(){}}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(f){if(this._markup){return this._markup;
}var g={};
this._styleBorder(g,f);
var h=this._generateBackgroundMarkup(g);
return this._markup=h;
},resize:function(i,j,k){var l=this._resizeBorder(i,j,k);
i.style.width=l.width+b;
i.style.height=l.height+b;
i.style.left=parseInt(i.style.left)+l.left+b;
i.style.top=parseInt(i.style.top)+l.top+b;
},tint:function(m,n){this._tintBackgroundColor(m,n,m.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
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
},initialize:function(){var u=qx.core.Environment;
var s,t;
s=u.get(e);

if(s){t=qx.Theme.getByName(s);

if(!t){throw new Error("The theme to use is not available: "+s);
}this.setTheme(t);
}}},environment:{"qx.theme":c}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__sL(q.include);
q.patch=this.__sL(q.patch);
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__sO(r,q);
this.__sM(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__sL:function(s){if(!s){return [];
}
if(qx.Bootstrap.isArray(s)){return s;
}else{return [s];
}},__sM:function(t,u){var v=u.aliases||{};

if(u.extend&&u.extend.aliases){qx.Bootstrap.objectMergeWith(v,u.extend.aliases,false);
}t.aliases=v;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__sN:function(w){for(var i=0,x=this.__sP,l=x.length;i<l;i++){if(w[x[i]]){return x[i];
}}},__sO:function(y,z){var C=this.__sN(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||p;
if(!C){return;
}var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__sP:[g,d,f,n,c,o,m,b],__sQ:null,__sR:null,__sS:function(){},patch:function(F,G){var I=this.__sN(G);

if(I!==this.__sN(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
}var H=G[I];
var J=F.$$clazz.prototype;

for(var K in H){J[K]=H[K];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__tY;
this._resizeBorder=this.__tX;
this._styleBorder=this.__tV;
this._generateMarkup=this.__tW;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__tU:null,__tV:function(D){var E=qx.theme.manager.Color.getInstance();
D.position=t;
var F=this.getInnerWidthTop();

if(F>0){D[e]=F+j+this.getStyleTop()+i+E.resolve(this.getInnerColorTop());
}var F=this.getInnerWidthRight();

if(F>0){D[b]=F+j+this.getStyleRight()+i+E.resolve(this.getInnerColorRight());
}var F=this.getInnerWidthBottom();

if(F>0){D[c]=F+j+this.getStyleBottom()+i+E.resolve(this.getInnerColorBottom());
}var F=this.getInnerWidthLeft();

if(F>0){D[d]=F+j+this.getStyleLeft()+i+E.resolve(this.getInnerColorLeft());
}},__tW:function(G){var J=this._generateBackgroundMarkup(G);
var H=qx.theme.manager.Color.getInstance();
G[e]=h;
G[b]=h;
G[c]=h;
G[d]=h;
G[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(q)<8)){G[C]=h;
}var I=this.getWidthTop();

if(I>0){G[e]=I+j+this.getStyleTop()+i+H.resolve(this.getColorTop());
}var I=this.getWidthRight();

if(I>0){G[b]=I+j+this.getStyleRight()+i+H.resolve(this.getColorRight());
}var I=this.getWidthBottom();

if(I>0){G[c]=I+j+this.getStyleBottom()+i+H.resolve(this.getColorBottom());
}var I=this.getWidthLeft();

if(I>0){G[d]=I+j+this.getStyleLeft()+i+H.resolve(this.getColorLeft());
}G[l]=s;
G[y]=0;
G[p]=0;
return this.__tU=this._generateBackgroundMarkup(G,J);
},__tX:function(K,L,M){var N=this.getInsets();
L-=N.left+N.right;
M-=N.top+N.bottom;
var O=N.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=N.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:O,top:top,width:L,height:M,elementToApplyDimensions:K.firstChild};
},__tY:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",n="-moz-border-radius-topright",l="-webkit-border-top-right-radius",m="-moz-border-radius-topleft",k="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(x){x[d]=q;
var y=this.getRadiusTopLeft();

if(y>0){x[m]=y+j;
x[t]=y+j;
x[a]=y+j;
}y=this.getRadiusTopRight();

if(y>0){x[n]=y+j;
x[l]=y+j;
x[w]=y+j;
}y=this.getRadiusBottomLeft();

if(y>0){x[k]=y+j;
x[e]=y+j;
x[v]=y+j;
}y=this.getRadiusBottomRight();

if(y>0){x[r]=y+j;
x[b]=y+j;
x[p]=y+j;
}},_applyBorderRadius:function(){}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="engine.name",f="horizontal",e=",",d=" 0",c="px",b="background",a="0",E="shorthand",D="Color",C="vertical",B="",A="Number",z="%",y="),to(",x="from(",w="linear-gradient(",v="-moz-",q="-webkit-gradient(linear,",r="startColorPosition",o="-o-",p="deg, ",m="startColor",n="qx.ui.decoration.MLinearBackgroundGradient",k="endColorPosition",l="opera",s="endColor",t="gecko",u="webkit";
qx.Mixin.define(n,{properties:{startColor:{check:D,nullable:true,apply:j},endColor:{check:D,nullable:true,apply:j},orientation:{check:[f,C],init:C,apply:j},startColorPosition:{check:A,init:0,apply:j},endColorPosition:{check:A,init:100,apply:j},colorPositionUnit:{check:[c,z],init:z,apply:j},gradientStart:{group:[m,r],mode:E},gradientEnd:{group:[s,k],mode:E}},members:{_styleLinearBackgroundGradient:function(F){var I=qx.theme.manager.Color.getInstance();
var O=this.getColorPositionUnit();

if(qx.core.Environment.get(g)==u){O=O===c?B:O;

if(this.getOrientation()==f){var N=this.getStartColorPosition()+O+d+O;
var M=this.getEndColorPosition()+O+d+O;
}else{var N=a+O+i+this.getStartColorPosition()+O;
var M=a+O+i+this.getEndColorPosition()+O;
}var K=x+I.resolve(this.getStartColor())+y+I.resolve(this.getEndColor())+h;
var J=q+N+e+M+e+K+h;
F[b]=J;
}else{var P=this.getOrientation()==f?0:270;
var H=I.resolve(this.getStartColor())+i+this.getStartColorPosition()+O;
var G=I.resolve(this.getEndColor())+i+this.getEndColorPosition()+O;
var L=B;

if(qx.core.Environment.get(g)==t){L=v;
}else if(qx.core.Environment.get(g)==l){L=o;
}F[b]=L+w+P+p+H+e+G+h;
}},_resizeLinearBackgroundGradient:function(Q,R,S){var T=this.getInsets();
R-=T.left+T.right;
S-=T.top+T.bottom;
return {left:T.left,top:T.top,width:R,height:S};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var k="_applyBoxShadow",j="px ",i="Integer",h="shadowHorizontalLength",g="box-shadow",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",b="qx.ui.decoration.MBoxShadow",a="Color";
qx.Mixin.define(b,{properties:{shadowHorizontalLength:{nullable:true,check:i,apply:k},shadowVerticalLength:{nullable:true,check:i,apply:k},shadowBlurRadius:{nullable:true,check:i,apply:k},shadowColor:{nullable:true,check:a,apply:k},shadowLength:{group:[h,e],mode:c}},members:{_styleBoxShadow:function(l){var m=qx.theme.manager.Color.getInstance();
var p=m.resolve(this.getShadowColor());

if(p!=null){var q=this.getShadowVerticalLength()||0;
var n=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var o=n+j+q+j+blur+j+p;
l[d]=o;
l[f]=o;
l[g]=o;
}},_applyBoxShadow:function(){}}});
})();
(function(){var a="qx.ui.decoration.Uniform";
qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);
if(b!=null){this.setWidth(b);
}
if(c!=null){this.setStyle(c);
}
if(d!=null){this.setColor(d);
}}});
})();
(function(){var e="complete",d="loading",c="error",b="initialized",a="qx.io.part.Part";
qx.Bootstrap.define(a,{construct:function(name,f,g){this.__uO=name;
this._readyState=e;
this._packages=f;
this._loader=g;

for(var i=0;i<f.length;i++){if(f[i].getReadyState()!==e){this._readyState=b;
break;
}}},members:{_readyState:null,_loader:null,_packages:null,__uO:null,getReadyState:function(){return this._readyState;
},getName:function(){return this.__uO;
},getPackages:function(){return this._packages;
},preload:function(h,self){if(h){window.setTimeout(function(){h.call(self,this);
},0);
}},load:function(j,self){if(this._checkCompleteLoading(j,self)){return;
}this._readyState=d;

if(j){this._appendPartListener(j,self,this);
}var l=this;
var k=function(){l.load();
};

for(var i=0;i<this._packages.length;i++){var m=this._packages[i];

switch(m.getReadyState()){case b:this._loader.addPackageListener(m,k);
m.load(this._loader.notifyPackageResult,this._loader);
return;
case d:this._loader.addPackageListener(m,k);
return;
case e:break;
case c:this._markAsCompleted(c);
return;
default:throw new Error("Invalid case! "+m.getReadyState());
}}this._markAsCompleted(e);
},_appendPartListener:function(n,self,o){var p=this;
this._loader.addPartListener(this,function(){p._signalStartup();
n.call(self,o._readyState);
});
},_markAsCompleted:function(q){this._readyState=q;
this._loader.notifyPartResult(this);
},_signalStartup:function(){if(!qx.$$loader.applicationHandlerReady){qx.$$loader.signalStartup();
}},_checkCompleteLoading:function(r,self){var s=this._readyState;

if(s==e||s==c){if(r){var t=this;
setTimeout(function(){t._signalStartup();
r.call(self,s);
},0);
}return true;
}else if(s==d&&r){this._appendPartListener(r,self,this);
return true;
}}}});
})();
(function(){var i="error",h="initialized",g="loading",f="complete",e="engine.name",d="webkit",c="success",b="qx.io.part.Package",a="cached";
qx.Bootstrap.define(b,{construct:function(j,k,l){this.__uP=l?f:h;
this.__uQ=j;
this.__uR=k;
},members:{__uP:null,__uQ:null,__uR:null,__uS:null,__uT:null,__uU:null,__uV:null,getId:function(){return this.__uR;
},getReadyState:function(){return this.__uP;
},getUrls:function(){return this.__uQ;
},saveClosure:function(m){if(this.__uP==i){return;
}this.__uS=m;

if(!this.__uT){this.execute();
}else{clearTimeout(this.__uU);
this.__uP=a;
this.__uV(this);
}},execute:function(){if(this.__uS){this.__uS();
delete this.__uS;
}
if(qx.$$packageData[this.__uR]){this.__uX(qx.$$packageData[this.__uR]);
delete qx.$$packageData[this.__uR];
}this.__uP=f;
},loadClosure:function(n,self){if(this.__uP!==h){return;
}this.__uT=true;
this.__uP=g;
this.__uV=qx.Bootstrap.bind(n,self);
this.__uW(this.__uQ,function(){},function(){this.__uP=i;
n.call(self,this);
},this);
var o=this;
this.__uU=setTimeout(function(){o.__uP=i;
n.call(self,o);
},qx.Part.TIMEOUT);
},load:function(p,self){if(this.__uP!==h){return;
}this.__uT=false;
this.__uP=g;
this.__uW(this.__uQ,function(){this.__uP=f;
this.execute();
p.call(self,this);
},function(){this.__uP=i;
p.call(self,this);
},this);
},__uW:function(q,r,s,self){if(q.length==0){r.call(self);
return;
}var u=0;
var self=this;
var t=function(v){if(u>=q.length){r.call(self);
return;
}var w=new qx.io.ScriptLoader();
w.load(v.shift(),function(status){u+=1;
w.dispose();

if(status!==c){if(self.__uP==g){clearTimeout(self.__uU);
return s.call(self);
}}
if((qx.core.Environment.get(e)==d)){setTimeout(function(){t.call(self,v,r,self);
},0);
}else{t.call(self,v,r,self);
}},self);
};
t(q.concat());
},__uX:qx.$$loader.importPackageData}});
})();
(function(){var b="pane",a="qx.ui.container.Scroll";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);

if(content){this.add(content);
}},members:{add:function(c){this.getChildControl(b).add(c);
},remove:function(d){this.getChildControl(b).remove(d);
},getChildren:function(){return this.getChildControl(b).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(b);
}}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__sV:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__sV;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__sV=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__sV=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var b="north",a="widgetbrowser.Application";
qx.Class.define(a,{extend:qx.application.Standalone,construct:function(){qx.application.Standalone.call(this);
},members:{__Ru:null,__Rv:null,__Rw:null,main:function(){qx.application.Standalone.prototype.main.call(this);
var c=this.getRoot();
var d=new qx.ui.layout.Dock();
var e=new qx.ui.container.Composite(d);
c.add(e,{edge:0});
this.__Ru=new widgetbrowser.view.Header();
e.add(this.__Ru,{edge:b});
var scroll=this.__Rw=new qx.ui.container.Scroll();
e.add(scroll);
this.__Rv=new widgetbrowser.view.TabView();
this.__Rv.set({minWidth:800,minHeight:800,padding:15});
scroll.add(this.__Rv);
},getScroll:function(){return this.__Rw;
}}});
})();
(function(){var di="widget",dh="button",dg="pointer",df="button-box",de="atom",dd="background",dc="main-dark",db="bold",da="image",cY="list",ca="text-disabled",bY="white",bX="background-selected",bW="popup",bV="button-box-hovered",bU="",bT="button-box-pressed-hovered",bS="button-box-pressed",bR="arrow-down",bQ="groupbox",dq="text-selected",dr="cell",dn="tooltip",dp="label",dl="combobox/button",dm="middle",dj="menu-button",dk="toolbar-button",ds="textfield",dt="spinner",cH="button-frame",cG="-middle",cJ="light-background",cI="-invert",cL="background-selected-dark",cK="invalid",cN="combobox",cM="scrollbar",cF="inset",cE="center",k="datechooser/button",l="right",m="main",n="background-disabled",o="-right",p="radiobutton",q="arrow-",r="checkbox",s="-left",t="tree-folder",dH="selectbox",dG="-invalid",dF="icon/16/places/folder-open.png",dE="menu-slidebar-button",dL="scrollbar/button",dK="border-invalid",dJ="tree-minus",dI="statusbar",dN="down",dM="text",bg="background-disabled-checked",bh="slidebar/button-forward",be="icon/16/places/folder.png",bf="icon/16/mimetypes/text-plain.png",bk="tree-plus",bl="default",bi="-top-left",bj="datechooser",bc="blank",bd="treevirtual-folder",L="-bottom-right",K="virtual-list",N="-top-right",M="arrow-right",H="left",G="up",J="right-top",I="focused-inset",F="slidebar/button-backward",E="-bottom-left",bq="table-row-background-even",br="button-box-pressed-top-right",bs="arrow-left",bt="datechooser-weekday",bm="arrow-up",bn="keyboard-focus",bo="icon/16/actions/dialog-ok.png",bp="button-box-top-right",bu="slidebar",bv="#BABABA",W="button-box-hovered-bottom-right",V="tabview-page-button-top-bottom",U="move-frame",T="nodrop",S="window-caption",R="table-header-cell",Q="button-box-hovered-top-right",P="row-layer",bb="treevirtual-plus-only",ba="move",bw="treevirtual-plus-end",bx="-last",by="vertical",bz="arrow-down-small",bA="tooltip-error",bB="window-restore",bC="scroll-knob",bD="tabview-close",bE="atom/label",bF="button-box-pressed-bottom-right",ci="button-box-pressed-hovered-bottom-right",ch="icon/16/actions/dialog-cancel.png",cg="qx.theme.simple.Appearance",cf="menu-slidebar",cm="treevirtual-minus-cross",cl="background-pane",ck="table-",cj="scroll-knob-pressed",cp="icon",co="arrow-rewind",cA="icon/16/apps/office-calendar.png",cB="headline",cy="treevirtual-plus-start",cz="treevirtual-minus-end",cw="checkbox-undetermined",cx="button-box-bottom-right",cu="datechooser-week",cv="descending",cC="toolbar-separator",cD="arrow-up-small",cR="horizontal",cQ="border-light-shadow",cT="text-placeholder",cS="treevirtual-plus-cross",cV="scrollarea",cU="treevirtual-line",cX="tabview-page-button-right-left",cW="menu-checkbox",cP="best-fit",cO="button-border",dA="treevirtual-cross",dB="button-hover",dC="menubar-button-pressed",dD="progressbar",dw="tree-file",dx="tooltip-text",dy="keep-align",dz="-first",du="alias",dv="ascending",j="button-box-hovered-right-borderless",i="button-box-right-borderless",h="lead-item",g="checkbox-focused",f="border-blue",e="window-minimize",d="button-box-pressed-hovered-top-right",c="knob-",b="treevirtual-minus-only",a="treevirtual-minus-start",w="checkbox-checked",x="window",u="window-active",v="table-header-cell-first",A="button-box-pressed-right-borderless",B="scroll-knob-hovered",y="select-column-order",z="button-box-pressed-hovered-right-borderless",C="scroll-knob-pressed-hovered",D="white-box",cq="datechooser-week-header",cn="menubar-button-hovered",ct="table-header-column-button",cr="window-close",cd="datechooser-date-pane",cb="tabview-unselected",O="cursor-",ce="-focused",Y="menu-radiobutton",X="window-maximize",bI="treevirtual-end",bJ="table",bK="arrow-forward",bL="copy",bM="table-row-background-selected",bN="radiobutton-focused",bO="scrollbar/slider/knob",bP="atom/icon",bG="table-header",bH="menu-separator",cc="link",cs="icon/16/actions/view-refresh.png";
qx.Theme.define(cg,{appearances:{"widget":{},"label":{style:function(dO){return {textColor:dO.disabled?ca:undefined};
}},"image":{style:function(dP){return {opacity:!dP.replacement&&dP.disabled?0.3:undefined};
}},"atom":{},"atom/label":dp,"atom/icon":da,"root":{style:function(dQ){return {backgroundColor:dd,textColor:dM,font:bl};
}},"popup":{style:function(dR){return {decorator:bW,backgroundColor:cl};
}},"tooltip":{include:bW,style:function(dS){return {backgroundColor:dn,textColor:dx,decorator:dn,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":de,"tooltip-error":{include:dn,style:function(dT){return {textColor:dq,showTimeout:100,hideTimeout:10000,decorator:bA,font:db,backgroundColor:undefined};
}},"tooltip-error/atom":de,"iframe":{style:function(dU){return {backgroundColor:bY,decorator:dc};
}},"move-frame":{style:function(dV){return {decorator:dc};
}},"resize-frame":U,"dragdrop-cursor":{style:function(dW){var dX=T;

if(dW.copy){dX=bL;
}else if(dW.move){dX=ba;
}else if(dW.alias){dX=du;
}return {source:qx.theme.simple.Image.URLS[O+dX],position:J,offset:[2,16,2,6]};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dh,include:dh,style:function(dY){return {icon:qx.theme.simple.Image.URLS[q+(dY.vertical?dN:l)]};
}},"slidebar/button-backward":{alias:dh,include:dh,style:function(ea){return {icon:qx.theme.simple.Image.URLS[q+(ea.vertical?G:H)]};
}},"table":di,"table/statusbar":{style:function(eb){return {decorator:dI,padding:[2,5],backgroundColor:cJ};
}},"table/column-button":{alias:dh,style:function(ec){return {decorator:ct,padding:3,icon:qx.theme.simple.Image.URLS[y]};
}},"table-column-reset-button":{include:dj,alias:dj,style:function(){return {icon:cs};
}},"table-scroller/scrollbar-x":cM,"table-scroller/scrollbar-y":cM,"table-scroller":di,"table-scroller/header":{style:function(){return {decorator:bG};
}},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(ed){return {decorator:m};
}},"table-scroller/resize-line":{style:function(ee){return {backgroundColor:cO,width:3};
}},"table-header-cell":{alias:de,style:function(ef){return {decorator:ef.first?v:R,minWidth:13,font:db,paddingTop:3,paddingLeft:5,cursor:dg,sortIcon:ef.sorted?(qx.theme.simple.Image.URLS[ck+(ef.sortedAscending?dv:cv)]):undefined};
}},"table-header-cell/icon":{include:bP,style:function(eg){return {paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(eh){return {alignY:dm,alignX:l,paddingRight:5};
}},"table-editor-textfield":{include:ds,style:function(ei){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:dH,alias:dH,style:function(ej){return {padding:[0,2]};
}},"table-editor-combobox":{include:cN,alias:cN,style:function(ek){return {decorator:undefined};
}},"treevirtual":bJ,"treevirtual-folder":{style:function(el){return {icon:(el.opened?dF:be)};
}},"treevirtual-file":{include:bd,alias:bd,style:function(em){return {icon:bf};
}},"treevirtual-line":{style:function(en){return {icon:qx.theme.simple.Image.URLS[cU]};
}},"treevirtual-contract":{style:function(eo){return {icon:qx.theme.simple.Image.URLS[dJ]};
}},"treevirtual-expand":{style:function(ep){return {icon:qx.theme.simple.Image.URLS[bk]};
}},"treevirtual-only-contract":{style:function(eq){return {icon:qx.theme.simple.Image.URLS[b]};
}},"treevirtual-only-expand":{style:function(er){return {icon:qx.theme.simple.Image.URLS[bb]};
}},"treevirtual-start-contract":{style:function(es){return {icon:qx.theme.simple.Image.URLS[a]};
}},"treevirtual-start-expand":{style:function(et){return {icon:qx.theme.simple.Image.URLS[cy]};
}},"treevirtual-end-contract":{style:function(eu){return {icon:qx.theme.simple.Image.URLS[cz]};
}},"treevirtual-end-expand":{style:function(ev){return {icon:qx.theme.simple.Image.URLS[bw]};
}},"treevirtual-cross-contract":{style:function(ew){return {icon:qx.theme.simple.Image.URLS[cm]};
}},"treevirtual-cross-expand":{style:function(ex){return {icon:qx.theme.simple.Image.URLS[cS]};
}},"treevirtual-end":{style:function(ey){return {icon:qx.theme.simple.Image.URLS[bI]};
}},"treevirtual-cross":{style:function(ez){return {icon:qx.theme.simple.Image.URLS[dA]};
}},"resizer":{style:function(eA){return {decorator:dc};
}},"splitpane":{},"splitpane/splitter":{style:function(eB){return {backgroundColor:cJ};
}},"splitpane/splitter/knob":{style:function(eC){return {source:qx.theme.simple.Image.URLS[c+(eC.horizontal?cR:by)],padding:2};
}},"splitpane/slider":{style:function(eD){return {backgroundColor:cQ,opacity:0.3};
}},"menu":{style:function(eE){var eF={backgroundColor:dd,decorator:m,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eE.submenu||eE.contextmenu?cP:dy};

if(eE.submenu){eF.position=J;
eF.offset=[-2,-3];
}
if(eE.contextmenu){eF.offset=4;
}return eF;
}},"menu/slidebar":cf,"menu-slidebar":di,"menu-slidebar-button":{style:function(eG){return {backgroundColor:eG.hovered?bX:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dE,style:function(eH){return {icon:qx.theme.simple.Image.URLS[bm+(eH.hovered?cI:bU)]};
}},"menu-slidebar/button-forward":{include:dE,style:function(eI){return {icon:qx.theme.simple.Image.URLS[bR+(eI.hovered?cI:bU)]};
}},"menu-separator":{style:function(eJ){return {height:0,decorator:bH,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:de,style:function(eK){return {backgroundColor:eK.selected?bX:undefined,textColor:eK.selected?dq:undefined,padding:[2,6]};
}},"menu-button/icon":{include:da,style:function(eL){return {alignY:dm};
}},"menu-button/label":{include:dp,style:function(eM){return {alignY:dm,padding:1};
}},"menu-button/shortcut":{include:dp,style:function(eN){return {alignY:dm,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:da,style:function(eO){return {source:qx.theme.simple.Image.URLS[M+(eO.selected?cI:bU)],alignY:dm};
}},"menu-checkbox":{alias:dj,include:dj,style:function(eP){return {icon:!eP.checked?undefined:qx.theme.simple.Image.URLS[cW+(eP.selected?cI:bU)]};
}},"menu-radiobutton":{alias:dj,include:dj,style:function(eQ){return {icon:!eQ.checked?undefined:qx.theme.simple.Image.URLS[Y+(eQ.selected?cI:bU)]};
}},"menubar":{style:function(eR){return {backgroundColor:cJ,padding:[4,2]};
}},"menubar-button":{style:function(eS){var eU;
var eT=[2,6];

if(!eS.disabled){if(eS.pressed){eU=dC;
eT=[1,5,2,5];
}else if(eS.hovered){eU=cn;
eT=[1,5];
}}return {padding:eT,cursor:eS.disabled?undefined:dg,textColor:cc,decorator:eU};
}},"virtual-list":cY,"virtual-list/row-layer":P,"row-layer":di,"column-layer":di,"group-item":{include:dp,alias:dp,style:function(eV){return {padding:4,backgroundColor:bv,textColor:bY,font:db};
}},"virtual-selectbox":dH,"virtual-selectbox/dropdown":bW,"virtual-selectbox/dropdown/list":{alias:K},"virtual-combobox":cN,"virtual-combobox/dropdown":bW,"virtual-combobox/dropdown/list":{alias:K},"virtual-tree":{include:cY,alias:cY,style:function(eW){return {padding:eW.focused?0:1};
}},"virtual-tree-folder":t,"virtual-tree-file":dw,"cell":{style:function(eX){return {backgroundColor:eX.selected?bM:bq,textColor:eX.selected?dq:dM,padding:[3,6]};
}},"cell-string":dr,"cell-number":{include:dr,style:function(eY){return {textAlign:l};
}},"cell-image":dr,"cell-boolean":dr,"cell-atom":dr,"cell-date":dr,"cell-html":dr,"htmlarea":{"include":di,style:function(fa){return {backgroundColor:bY};
}},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(fb){var fc=bC;

if(!fb.disabled){if(fb.hovered&&!fb.pressed&&!fb.checked){fc=B;
}else if(fb.hovered&&(fb.pressed||fb.checked)){fc=C;
}else if(fb.pressed||fb.checked){fc=cj;
}}return {height:14,width:14,cursor:dg,decorator:fc,minHeight:fb.horizontal?undefined:20,minWidth:fb.horizontal?20:undefined};
}},"scrollbar/button":{style:function(fd){var fe={};
fe.padding=4;
var ff=bU;

if(fd.left){ff=H;
fe.marginRight=2;
}else if(fd.right){ff+=l;
fe.marginLeft=2;
}else if(fd.up){ff+=G;
fe.marginBottom=2;
}else{ff+=dN;
fe.marginTop=2;
}fe.icon=qx.theme.simple.Image.URLS[q+ff];
fe.cursor=dg;
fe.decorator=df;
return fe;
}},"scrollbar/button-begin":dL,"scrollbar/button-end":dL,"scrollarea/corner":{style:function(fg){return {backgroundColor:dd};
}},"scrollarea":di,"scrollarea/pane":di,"scrollarea/scrollbar-x":cM,"scrollarea/scrollbar-y":cM,"textfield":{style:function(fh){var fj;

if(fh.disabled){fj=ca;
}else if(fh.showingPlaceholder){fj=cT;
}else{fj=undefined;
}var fk;
var fi;

if(fh.disabled){fk=cF;
fi=[2,3];
}else if(fh.invalid){fk=dK;
fi=[1,2];
}else if(fh.focused){fk=I;
fi=[1,2];
}else{fi=[2,3];
fk=cF;
}return {decorator:fk,padding:fi,textColor:fj,backgroundColor:fh.disabled?n:bY};
}},"textarea":ds,"radiobutton/icon":{style:function(fl){var fn=p;

if(fl.focused&&!fl.invalid){fn=bN;
}fn+=fl.invalid&&!fl.disabled?dG:bU;
var fm;

if(fl.disabled&&fl.checked){fm=bg;
}else if(fl.disabled){fm=n;
}else if(fl.checked){fm=bX;
}return {decorator:fn,width:12,height:12,backgroundColor:fm};
}},"radiobutton":{style:function(fo){return {icon:qx.theme.simple.Image.URLS[bc]};
}},"checkbox":{alias:de,style:function(fp){var fq;
if(fp.checked){fq=qx.theme.simple.Image.URLS[w];
}else if(fp.undetermined){fq=qx.theme.simple.Image.URLS[cw];
}else{fq=qx.theme.simple.Image.URLS[bc];
}return {icon:fq,gap:6};
}},"checkbox/icon":{style:function(fr){var ft=r;

if(fr.focused&&!fr.invalid){ft=g;
}ft+=fr.invalid&&!fr.disabled?dG:bU;
var fs;
if(fr.checked){fs=2;
}else if(fr.undetermined){fs=[4,2];
}return {decorator:ft,width:12,height:12,padding:fs,backgroundColor:bY};
}},"spinner":{style:function(fu){return {textColor:fu.disabled?ca:undefined};
}},"spinner/textfield":ds,"spinner/upbutton":{alias:dl,include:dl,style:function(fv){var fw=bp;

if(fv.hovered&&!fv.pressed&&!fv.checked){fw=Q;
}else if(fv.hovered&&(fv.pressed||fv.checked)){fw=d;
}else if(fv.pressed||fv.checked){fw=br;
}return {icon:qx.theme.simple.Image.URLS[cD],decorator:fw,width:17};
}},"spinner/downbutton":{alias:dl,include:dl,style:function(fx){var fy=cx;

if(fx.hovered&&!fx.pressed&&!fx.checked){fy=W;
}else if(fx.hovered&&(fx.pressed||fx.checked)){fy=ci;
}else if(fx.pressed||fx.checked){fy=bF;
}return {icon:qx.theme.simple.Image.URLS[bz],decorator:fy,width:17};
}},"selectbox":cH,"selectbox/atom":de,"selectbox/popup":bW,"selectbox/list":{alias:cY,include:cY,style:function(){return {decorator:undefined};
}},"selectbox/arrow":{include:da,style:function(fz){return {source:qx.theme.simple.Image.URLS[bR],paddingRight:4,paddingLeft:5};
}},"combobox":{},"combobox/button":{alias:cH,include:cH,style:function(fA){var fB=i;

if(fA.hovered&&!fA.pressed&&!fA.checked){fB=j;
}else if(fA.hovered&&(fA.pressed||fA.checked)){fB=z;
}else if(fA.pressed||fA.checked){fB=A;
}return {icon:qx.theme.simple.Image.URLS[bR],cursor:dg,decorator:fB,padding:[0,5],width:19};
}},"combobox/popup":bW,"combobox/list":{alias:cY},"combobox/textfield":ds,"datefield":cN,"datefield/button":{alias:dl,include:dl,style:function(fC){return {icon:cA,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};
}},"datefield/list":{alias:bj,include:bj,style:function(fD){return {decorator:undefined};
}},"list":{alias:cV,include:ds},"listitem":{alias:de,style:function(fE){return {gap:4,padding:fE.lead?[2,4]:[3,5],backgroundColor:fE.selected?bX:undefined,textColor:fE.selected?dq:undefined,decorator:fE.lead?h:undefined};
}},"slider":{style:function(fF){var fH;
var fG;

if(fF.disabled){fH=cF;
fG=[2,3];
}else if(fF.invalid){fH=dK;
fG=[1,2];
}else if(fF.focused){fH=I;
fG=[1,2];
}else{fG=[2,3];
fH=cF;
}return {decorator:fH,padding:fG};
}},"slider/knob":bO,"button-frame":{alias:de,style:function(fI){var fJ=df;

if(fI.hovered&&!fI.pressed&&!fI.checked){fJ=bV;
}else if(fI.hovered&&(fI.pressed||fI.checked)){fJ=bT;
}else if(fI.pressed||fI.checked){fJ=bS;
}
if(fI.invalid&&!fI.disabled){fJ+=dG;
}else if(fI.focused){fJ+=ce;
}return {decorator:fJ,padding:[3,8],cursor:fI.disabled?undefined:dg,minWidth:5,minHeight:5};
}},"button-frame/label":{alias:bE,style:function(fK){return {textColor:fK.disabled?ca:undefined};
}},"button":{alias:cH,include:cH,style:function(fL){return {center:true};
}},"hover-button":{alias:dh,include:dh,style:function(fM){return {decorator:fM.hovered?dB:undefined};
}},"splitbutton":{},"splitbutton/button":{alias:de,style:function(fN){var fO=df;

if(fN.disabled){fO=df;
}else if(fN.hovered&&!fN.pressed&&!fN.checked){fO=bV;
}else if(fN.hovered&&(fN.pressed||fN.checked)){fO=bT;
}else if(fN.pressed||fN.checked){fO=bS;
}fO+=s;
return {decorator:fO,padding:[3,8],cursor:fN.disabled?undefined:dg};
}},"splitbutton/arrow":{style:function(fP){var fQ=df;

if(fP.disabled){fQ=df;
}else if(fP.hovered&&!fP.pressed&&!fP.checked){fQ=bV;
}else if(fP.hovered&&(fP.pressed||fP.checked)){fQ=bT;
}else if(fP.pressed||fP.checked){fQ=bS;
}fQ+=o;
return {icon:qx.theme.simple.Image.URLS[bR],decorator:fQ,cursor:dg,padding:[3,4]};
}},"groupbox":{},"groupbox/legend":{alias:de,style:function(fR){return {textColor:fR.invalid?cK:undefined,padding:5,margin:4,font:db};
}},"groupbox/frame":{style:function(fS){return {backgroundColor:dd,padding:[6,9],margin:[18,2,2,2],decorator:D};
}},"check-groupbox":bQ,"check-groupbox/legend":{alias:r,include:r,style:function(fT){return {textColor:fT.invalid?cK:undefined,padding:5,margin:4,font:db};
}},"radio-groupbox":bQ,"radio-groupbox/legend":{alias:p,include:p,style:function(fU){return {textColor:fU.invalid?cK:undefined,padding:5,margin:4,font:db};
}},"tree-folder/open":{include:da,style:function(fV){return {source:fV.opened?qx.theme.simple.Image.URLS[dJ]:qx.theme.simple.Image.URLS[bk]};
}},"tree-folder":{style:function(fW){return {padding:[2,8,2,5],icon:fW.opened?dF:be,backgroundColor:fW.selected?bX:undefined,iconOpened:dF};
}},"tree-folder/icon":{include:da,style:function(fX){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(fY){return {padding:[1,2],textColor:fY.selected?dq:undefined};
}},"tree-file":{include:t,alias:t,style:function(ga){return {icon:bf};
}},"tree":{include:cY,alias:cY,style:function(gb){return {contentPadding:gb.invalid&&!gb.disabled?[3,0]:[4,1],padding:gb.focused?0:1};
}},"window":{style:function(gc){return {contentPadding:[10,10,10,10],backgroundColor:dd,decorator:gc.maximized?undefined:gc.active?u:x};
}},"window/pane":{},"window/captionbar":{style:function(gd){return {backgroundColor:gd.active?cJ:n,padding:8,font:db,decorator:S};
}},"window/icon":{style:function(ge){return {marginRight:4};
}},"window/title":{style:function(gf){return {cursor:bl,font:db,marginRight:20,alignY:dm};
}},"window/minimize-button":{alias:dh,style:function(gg){return {icon:qx.theme.simple.Image.URLS[e],padding:[1,2],cursor:gg.disabled?undefined:dg};
}},"window/restore-button":{alias:dh,style:function(gh){return {icon:qx.theme.simple.Image.URLS[bB],padding:[1,2],cursor:gh.disabled?undefined:dg};
}},"window/maximize-button":{alias:dh,style:function(gi){return {icon:qx.theme.simple.Image.URLS[X],padding:[1,2],cursor:gi.disabled?undefined:dg};
}},"window/close-button":{alias:dh,style:function(gj){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[cr],padding:[1,2],cursor:gj.disabled?undefined:dg};
}},"window/statusbar":{style:function(gk){return {decorator:dI,padding:[2,6]};
}},"window/statusbar-text":dp,"datechooser":{style:function(gl){return {decorator:m};
}},"datechooser/navigation-bar":{style:function(gm){return {backgroundColor:dd,textColor:gm.disabled?ca:gm.invalid?cK:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":dn,"datechooser/last-month-button-tooltip":dn,"datechooser/next-year-button-tooltip":dn,"datechooser/next-month-button-tooltip":dn,"datechooser/last-year-button":k,"datechooser/last-month-button":k,"datechooser/next-year-button":k,"datechooser/next-month-button":k,"datechooser/button/icon":{},"datechooser/button":{style:function(gn){var go={width:17,show:cp,cursor:dg};

if(gn.lastYear){go.icon=qx.theme.simple.Image.URLS[co];
}else if(gn.lastMonth){go.icon=qx.theme.simple.Image.URLS[bs];
}else if(gn.nextYear){go.icon=qx.theme.simple.Image.URLS[bK];
}else if(gn.nextMonth){go.icon=qx.theme.simple.Image.URLS[M];
}return go;
}},"datechooser/month-year-label":{style:function(gp){return {font:db,textAlign:cE};
}},"datechooser/date-pane":{style:function(gq){return {decorator:cd,backgroundColor:dd};
}},"datechooser/weekday":{style:function(gr){return {decorator:bt,font:db,textAlign:cE,textColor:gr.disabled?ca:gr.weekend?cL:dd,backgroundColor:gr.weekend?dd:cL,paddingTop:2};
}},"datechooser/day":{style:function(gs){return {textAlign:cE,decorator:gs.today?m:undefined,textColor:gs.disabled?ca:gs.selected?dq:gs.otherMonth?ca:undefined,backgroundColor:gs.disabled?undefined:gs.selected?bX:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gt){return {textAlign:cE,textColor:cL,padding:[2,4],decorator:gt.header?cq:cu};
}},"progressbar":{style:function(gu){return {decorator:dD,padding:1,backgroundColor:bY};
}},"progressbar/progress":{style:function(gv){return {backgroundColor:gv.disabled?bg:bX};
}},"toolbar":{style:function(gw){return {backgroundColor:cJ,padding:0};
}},"toolbar/part":{style:function(gx){return {margin:[0,15]};
}},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(gy){return {decorator:cC,margin:[7,0],width:4};
}},"toolbar-button":{alias:de,style:function(gz){var gB=df;

if(gz.disabled){gB=df;
}else if(gz.hovered&&!gz.pressed&&!gz.checked){gB=bV;
}else if(gz.hovered&&(gz.pressed||gz.checked)){gB=bT;
}else if(gz.pressed||gz.checked){gB=bS;
}if(gz.left){gB+=s;
}else if(gz.right){gB+=o;
}else if(gz.middle){gB+=cG;
}var gA=[7,10];

if(gz.left||gz.middle||gz.right){gA=[7,0];
}return {cursor:dg,decorator:gB,margin:gA,padding:[3,5]};
}},"toolbar-menubutton":{alias:dk,include:dk,style:function(gC){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:da,include:da,style:function(gD){return {source:qx.theme.simple.Image.URLS[bR],cursor:dg,padding:[0,5],marginLeft:2};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:dk,include:dk,style:function(gE){var gF=df;

if(gE.disabled){gF=df;
}else if(gE.hovered&&!gE.pressed&&!gE.checked){gF=bV;
}else if(gE.hovered&&(gE.pressed||gE.checked)){gF=bT;
}else if(gE.pressed||gE.checked){gF=bS;
}if(gE.left){gF+=s;
}else if(gE.right){gF+=cG;
}else if(gE.middle){gF+=cG;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gF};
}},"toolbar-splitbutton/arrow":{alias:dk,include:dk,style:function(gG){var gH=df;

if(gG.disabled){gH=df;
}else if(gG.hovered&&!gG.pressed&&!gG.checked){gH=bV;
}else if(gG.hovered&&(gG.pressed||gG.checked)){gH=bT;
}else if(gG.pressed||gG.checked){gH=bS;
}if(gG.left){gH+=cG;
}else if(gG.right){gH+=o;
}else if(gG.middle){gH+=cG;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gH};
}},"tabview":{},"tabview/bar":{alias:bu,style:function(gI){var gJ=0,gM=0,gK=0,gL=0;

if(gI.barTop){gK-=2;
}else if(gI.barBottom){gJ-=2;
}else if(gI.barRight){gL-=2;
}else{gM-=2;
}return {marginBottom:gK,marginTop:gJ,marginLeft:gL,marginRight:gM};
}},"tabview/bar/button-forward":{include:bh,alias:bh,style:function(gN){var gO=df;

if(gN.hovered&&!gN.pressed&&!gN.checked){gO=bV;
}else if(gN.hovered&&(gN.pressed||gN.checked)){gO=bT;
}else if(gN.pressed||gN.checked){gO=bS;
}
if(gN.barTop){return {marginTop:4,marginBottom:2,decorator:gO+N};
}else if(gN.barBottom){return {marginTop:2,marginBottom:4,decorator:gO+L};
}else if(gN.barLeft){return {marginLeft:4,marginRight:2,decorator:gO+E};
}else{return {marginLeft:2,marginRight:4,decorator:gO+L};
}}},"tabview/bar/button-backward":{include:F,alias:F,style:function(gP){var gQ=df;

if(gP.hovered&&!gP.pressed&&!gP.checked){gQ=bV;
}else if(gP.hovered&&(gP.pressed||gP.checked)){gQ=bT;
}else if(gP.pressed||gP.checked){gQ=bS;
}
if(gP.barTop){return {marginTop:4,marginBottom:2,decorator:gQ+bi};
}else if(gP.barBottom){return {marginTop:2,marginBottom:4,decorator:gQ+E};
}else if(gP.barLeft){return {marginLeft:4,marginRight:2,decorator:gQ+bi};
}else{return {marginLeft:2,marginRight:4,decorator:gQ+N};
}}},"tabview/pane":{style:function(gR){return {backgroundColor:dd,decorator:f,padding:10};
}},"tabview-page":di,"tabview-page/button":{style:function(gS){var hc;
var ha=0,gX=0,gU=0,gW=0;
if(gS.barTop||gS.barBottom){var gV=5,gT=5,gY=9,hb=9;
}else{var gV=8,gT=8,gY=4,hb=4;
}if(gS.barTop||gS.barBottom){hc=V;
}else if(gS.barRight||gS.barLeft){hc=cX;
}if(gS.checked){if(gS.barTop){gY+=1;
hb+=1;
gV+=4;
}else if(gS.barBottom){gY+=1;
hb+=1;
gV+=2;
}else if(gS.barLeft){gV+=1;
gT+=1;
gY+=4;
}else if(gS.barRight){gV+=1;
gT+=1;
gY+=2;
}}else{if(gS.barTop){gU+=2;
ha+=4;
}else if(gS.barBottom){gU+=4;
ha+=2;
}else if(gS.barLeft){gX+=2;
gW+=4;
}else if(gS.barRight){gX+=4;
gW+=2;
}}
if(gS.firstTab&&!gS.checked){hc+=dz;
}else if(gS.lastTab&&!gS.checked){hc+=bx;
}return {zIndex:gS.checked?10:5,decorator:gS.checked?undefined:hc,backgroundColor:gS.checked?bX:cb,textColor:bY,padding:[gV,hb,gT,gY],margin:[ha,gX,gU,gW]};
}},"tabview-page/button/label":{alias:dp,style:function(hd){return {padding:[0,1,0,1],margin:hd.focused?0:1,decorator:hd.focused?bn:undefined};
}},"tabview-page/button/icon":da,"tabview-page/button/close-button":{alias:de,style:function(he){return {cursor:he.disabled?undefined:dg,icon:qx.theme.simple.Image.URLS[bD]};
}},"colorpopup":{alias:bW,include:bW,style:function(hf){return {padding:5};
}},"colorpopup/field":{style:function(hg){return {margin:2,width:14,height:14,backgroundColor:dd,decorator:dc};
}},"colorpopup/selector-button":dh,"colorpopup/auto-button":dh,"colorpopup/preview-pane":bQ,"colorpopup/current-preview":{style:function(hh){return {height:20,padding:4,marginLeft:4,decorator:dc,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hi){return {height:20,padding:4,marginRight:4,decorator:dc,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dh,include:dh,style:function(hj){return {icon:bo};
}},"colorpopup/colorselector-cancelbutton":{alias:dh,include:dh,style:function(hk){return {icon:ch};
}},"colorselector":di,"colorselector/control-bar":di,"colorselector/visual-pane":bQ,"colorselector/control-pane":di,"colorselector/preset-grid":di,"colorselector/colorbucket":{style:function(hl){return {decorator:dc,width:16,height:16};
}},"colorselector/preset-field-set":bQ,"colorselector/input-field-set":bQ,"colorselector/preview-field-set":bQ,"colorselector/hex-field-composite":di,"colorselector/hex-field":ds,"colorselector/rgb-spinner-composite":di,"colorselector/rgb-spinner-red":dt,"colorselector/rgb-spinner-green":dt,"colorselector/rgb-spinner-blue":dt,"colorselector/hsb-spinner-composite":di,"colorselector/hsb-spinner-hue":dt,"colorselector/hsb-spinner-saturation":dt,"colorselector/hsb-spinner-brightness":dt,"colorselector/preview-content-old":{style:function(hm){return {decorator:dc,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hn){return {decorator:dc,backgroundColor:bY,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ho){return {decorator:dc,margin:5};
}},"colorselector/brightness-field":{style:function(hp){return {decorator:dc,margin:[5,7]};
}},"colorselector/hue-saturation-pane":di,"colorselector/hue-saturation-handle":di,"colorselector/brightness-pane":di,"colorselector/brightness-handle":di,"app-header":{style:function(hq){return {font:cB,textColor:dq,backgroundColor:cL,padding:[8,12]};
}},"app-header-label":{style:function(hr){return {paddingTop:5};
}}}});
})();
(function(){var e="error",d="initialized",c="loading",b="qx.io.part.ClosurePart",a="complete";
qx.Bootstrap.define(b,{extend:qx.io.part.Part,construct:function(name,f,g){qx.io.part.Part.call(this,name,f,g);
},members:{__vT:0,preload:function(h,self){var j=0;
var l=this;

for(var i=0;i<this._packages.length;i++){var k=this._packages[i];

if(k.getReadyState()==d){k.loadClosure(function(m){j++;
l._loader.notifyPackageResult(m);
if(j>=l._packages.length&&h){h.call(self);
}},this._loader);
}}},load:function(n,self){if(this._checkCompleteLoading(n,self)){return;
}this._readyState=c;

if(n){this._appendPartListener(n,self,this);
}this.__vT=this._packages.length;

for(var i=0;i<this._packages.length;i++){var p=this._packages[i];
var o=p.getReadyState();
if(o==d){p.loadClosure(this._loader.notifyPackageResult,this._loader);
}if(o==d||o==c){this._loader.addPackageListener(p,qx.Bootstrap.bind(this._onPackageLoad,this,p));
}else if(o==e){this._markAsCompleted(e);
return;
}else{this.__vT--;
}}if(this.__vT<=0){this.__vU();
}},__vU:function(){for(var i=0;i<this._packages.length;i++){this._packages[i].execute();
}this._markAsCompleted(a);
},_onPackageLoad:function(q){if(this._readyState==e){return;
}if(q.getReadyState()==e){this._markAsCompleted(e);
return;
}this.__vT--;

if(this.__vT<=0){this.__vU();
}}}});
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
},set:function(n,o,p,q,r,s){var t=[n,i,escape(o)];

if(p){var u=new Date();
u.setTime(u.getTime());
t.push(c,new Date(u.getTime()+(p*1000*60*60*24)).toGMTString());
}
if(q){t.push(g,q);
}
if(r){t.push(f,r);
}
if(s){t.push(a);
}document.cookie=t.join(h);
},del:function(v,w,x){if(!qx.bom.Cookie.get(v)){return;
}var y=[v,i];

if(w){y.push(g,w);
}
if(x){y.push(f,x);
}y.push(e);
document.cookie=y.join(h);
}}});
})();
(function(){var f="sans-serif",e="arial",d="monospace",c="Courier New",b="qx.theme.simple.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:13,family:[e,f]},"bold":{size:13,family:[e,f],bold:true},"headline":{size:24,family:[f,e]},"small":{size:11,family:[e,f]},"monospace":{size:11,family:[a,c,d]}}});
})();
(function(){var l="_applyLayoutChange",k="Decorator",j="Integer",h="top",g="left",f="auto",e="qx.ui.layout.Dock",d="_applySort",c="Boolean",b="x",a="y";
qx.Class.define(e,{extend:qx.ui.layout.Abstract,construct:function(m,n,o,p){qx.ui.layout.Abstract.call(this);

if(m){this.setSpacingX(m);
}
if(n){this.setSpacingY(n);
}
if(o){this.setSeparatorX(o);
}
if(p){this.setSeparatorY(p);
}},properties:{sort:{check:[f,a,b],init:f,apply:d},separatorX:{check:k,nullable:true,apply:l},separatorY:{check:k,nullable:true,apply:l},connectSeparators:{check:c,init:false,apply:l},spacingX:{check:j,init:0,apply:l},spacingY:{check:j,init:0,apply:l}},members:{__Cz:null,__CA:null,verifyLayoutProperty:null,_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__CB:{north:1,south:2,west:3,east:4,center:5},__CC:{1:"top",2:"bottom",3:"left",4:"right"},__CD:function(){var q=this._getLayoutChildren();
var y,s;
var length=q.length;
var u=[];
var x=[];
var v=[];
var r=this.getSort()==="y";
var w=this.getSort()==="x";

for(var i=0;i<length;i++){y=q[i];
v=y.getLayoutProperties().edge;

if(v==="center"){if(s){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}s=y;
}else if(w||r){if(v==="north"||v==="south"){r?u.push(y):x.push(y);
}else if(v==="west"||v==="east"){r?x.push(y):u.push(y);
}}else{u.push(y);
}}var z=u.concat(x);

if(s){z.push(s);
}this.__Cz=z;
var t=[];

for(var i=0;i<length;i++){v=z[i].getLayoutProperties().edge;
t[i]=this.__CB[v]||5;
}this.__CA=t;
delete this._invalidChildrenCache;
},renderLayout:function(A,B){if(this._invalidChildrenCache){this.__CD();
}var U=qx.ui.layout.Util;
var H=this.__Cz;
var V=this.__CA;
var length=H.length;
var K,D,J,P,Q,bb,N,E,X;
var bf=[];
var M=[];
var be=this._getSeparatorWidths();
var bj=this.getSpacingX();
var bi=this.getSpacingY();
var I=-bj;
var W=-bi;

if(be.x){I-=be.x+bj;
}
if(be.y){W-=be.y+bi;
}
for(var i=0;i<length;i++){D=H[i];
P=D.getLayoutProperties();
J=D.getSizeHint();
N=J.width;
E=J.height;

if(P.width!=null){N=Math.floor(A*parseFloat(P.width)/100);

if(N<J.minWidth){N=J.minWidth;
}else if(N>J.maxWidth){N=J.maxWidth;
}}
if(P.height!=null){E=Math.floor(B*parseFloat(P.height)/100);

if(E<J.minHeight){E=J.minHeight;
}else if(E>J.maxHeight){E=J.maxHeight;
}}bf[i]=N;
M[i]=E;
switch(V[i]){case 1:case 2:W+=E+D.getMarginTop()+D.getMarginBottom()+bi;

if(be.y){W+=be.y+bi;
}break;
case 3:case 4:I+=N+D.getMarginLeft()+D.getMarginRight()+bj;

if(be.x){I+=be.x+bj;
}break;
default:I+=N+D.getMarginLeft()+D.getMarginRight()+bj;
W+=E+D.getMarginTop()+D.getMarginBottom()+bi;

if(be.x){I+=be.x+bj;
}
if(be.y){W+=be.y+bi;
}}}if(I!=A){K={};
bb=I<A;

for(var i=0;i<length;i++){D=H[i];

switch(V[i]){case 3:case 4:case 5:Q=D.getLayoutProperties().flex;
if(Q==null&&V[i]==5){Q=1;
}
if(Q>0){J=D.getSizeHint();
K[i]={min:J.minWidth,value:bf[i],max:J.maxWidth,flex:Q};
}}}var F=U.computeFlexOffsets(K,A,I);

for(var i in F){X=F[i].offset;
bf[i]+=X;
I+=X;
}}if(W!=B){K={};
bb=W<B;

for(var i=0;i<length;i++){D=H[i];

switch(V[i]){case 1:case 2:case 5:Q=D.getLayoutProperties().flex;
if(Q==null&&V[i]==5){Q=1;
}
if(Q>0){J=D.getSizeHint();
K[i]={min:J.minHeight,value:M[i],max:J.maxHeight,flex:Q};
}}}var F=U.computeFlexOffsets(K,B,W);

for(var i in F){X=F[i].offset;
M[i]+=X;
W+=X;
}}this._clearSeparators();
var bc=this.getSeparatorX(),bd=this.getSeparatorY();
var bg=this.getConnectSeparators();
var S=0,ba=0;
var bn,top,N,E,R,bk;
var T,bh,bm,C;
var bl,L,O,G;
var Y=this.__CC;

for(var i=0;i<length;i++){D=H[i];
bk=V[i];
J=D.getSizeHint();
bl=D.getMarginTop();
L=D.getMarginBottom();
O=D.getMarginLeft();
G=D.getMarginRight();
switch(bk){case 1:case 2:N=A-O-G;
if(N<J.minWidth){N=J.minWidth;
}else if(N>J.maxWidth){N=J.maxWidth;
}E=M[i];
top=S+U.computeVerticalAlignOffset(Y[bk],E,B,bl,L);
bn=ba+U.computeHorizontalAlignOffset(D.getAlignX()||g,N,A,O,G);
if(be.y){if(bk==1){bh=S+E+bl+bi+L;
}else{bh=S+B-E-bl-bi-L-be.y;
}T=bn;
bm=A;

if(bg&&T>0){T-=bj+O;
bm+=(bj)*2;
}else{T-=O;
}this._renderSeparator(bd,{left:T,top:bh,width:bm,height:be.y});
}R=E+bl+L+bi;

if(be.y){R+=be.y+bi;
}B-=R;
if(bk==1){S+=R;
}break;
case 3:case 4:E=B-bl-L;
if(E<J.minHeight){E=J.minHeight;
}else if(E>J.maxHeight){E=J.maxHeight;
}N=bf[i];
bn=ba+U.computeHorizontalAlignOffset(Y[bk],N,A,O,G);
top=S+U.computeVerticalAlignOffset(D.getAlignY()||h,E,B,bl,L);
if(be.x){if(bk==3){T=ba+N+O+bj+G;
}else{T=ba+A-N-O-bj-G-be.x;
}bh=top;
C=B;

if(bg&&bh>0){bh-=bi+bl;
C+=(bi)*2;
}else{bh-=bl;
}this._renderSeparator(bc,{left:T,top:bh,width:be.x,height:C});
}R=N+O+G+bj;

if(be.x){R+=be.x+bj;
}A-=R;
if(bk==3){ba+=R;
}break;
default:N=A-O-G;
E=B-bl-L;
if(N<J.minWidth){N=J.minWidth;
}else if(N>J.maxWidth){N=J.maxWidth;
}if(E<J.minHeight){E=J.minHeight;
}else if(E>J.maxHeight){E=J.maxHeight;
}bn=ba+U.computeHorizontalAlignOffset(D.getAlignX()||g,N,A,O,G);
top=S+U.computeVerticalAlignOffset(D.getAlignY()||h,E,B,bl,L);
}D.renderLayout(bn,top,N,E);
}},_getSeparatorWidths:function(){var bp=this.getSeparatorX(),bo=this.getSeparatorY();

if(bp||bo){var bu=qx.theme.manager.Decoration.getInstance();
}
if(bp){var bv=bu.resolve(bp);
var br=bv.getInsets();
var bs=br.left+br.right;
}
if(bo){var bw=bu.resolve(bo);
var bq=bw.getInsets();
var bt=bq.top+bq.bottom;
}return {x:bs||0,y:bt||0};
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__CD();
}var bA=this.__Cz;
var bK=this.__CA;
var length=bA.length;
var bE,bL;
var bG,bF;
var bH=0,bS=0;
var bx=0,bN=0;
var bI=0,bR=0;
var by=0,bM=0;
var bO=this._getSeparatorWidths();
var bQ=this.getSpacingX(),bP=this.getSpacingY();
var bC=-bQ,bB=-bP;

if(bO.x){bC-=bO.x+bQ;
}
if(bO.y){bB-=bO.y+bP;
}for(var i=0;i<length;i++){bL=bA[i];
bE=bL.getSizeHint();
bG=bL.getMarginLeft()+bL.getMarginRight();
bF=bL.getMarginTop()+bL.getMarginBottom();
switch(bK[i]){case 1:case 2:bI=Math.max(bI,bE.width+bH+bG);
bR=Math.max(bR,bE.minWidth+bS+bG);
by+=bE.height+bF;
bM+=bE.minHeight+bF;
bB+=bP;

if(bO.y){bB+=bO.y+bP;
}break;
case 3:case 4:bx=Math.max(bx,bE.height+by+bF);
bN=Math.max(bN,bE.minHeight+bM+bF);
bH+=bE.width+bG;
bS+=bE.minWidth+bG;
bC+=bQ;

if(bO.x){bC+=bO.x+bQ;
}break;
default:bH+=bE.width+bG;
bS+=bE.minWidth+bG;
by+=bE.height+bF;
bM+=bE.minHeight+bF;
bC+=bQ;

if(bO.x){bC+=bO.x+bQ;
}bB+=bP;

if(bO.y){bB+=bO.y+bP;
}}}var bD=Math.max(bS,bR)+bC;
var bT=Math.max(bH,bI)+bC;
var bJ=Math.max(bN,bM)+bB;
var bz=Math.max(bx,by)+bB;
return {minWidth:bD,width:bT,minHeight:bJ,height:bz};
}},destruct:function(){this.__CA=this.__Cz=null;
}});
})();
(function(){var m="changeValue",l="focused",k="hovered",j="selected",i=")",h="Invalid (",g="Hovered",f="Focused",d="Disabled",c="Selected",a="widgetbrowser.MControls",b="Invalid";
qx.Mixin.define(a,{members:{initControls:function(n,o){o=o||{};
var s=new qx.ui.container.Composite;
s.setLayout(new qx.ui.layout.HBox(10));
this.add(s);

if(o.disabled){var p=new qx.ui.form.ToggleButton(d);
p.addListener(m,function(){n.forEach(function(v,w){if(v.setEnabled){v.setEnabled(!this.getValue());
}},this);
});
s.add(p);
}
if(o.hovered){var u=new qx.ui.form.ToggleButton(g);
u.addListener(m,function(){n.forEach(function(x,y){if(this.getValue()){x.addState(k);
}else{x.removeState(k);
}},this);
});
s.add(u);
}
if(o.selected){var q=new qx.ui.form.ToggleButton(c);
q.addListener(m,function(){n.forEach(function(z,A){if(this.getValue()){z.addState(j);
}else{z.removeState(j);
}},this);
});
s.add(q);
}
if(o.focused){var r=new qx.ui.form.ToggleButton(f);
r.addListener(m,function(e){n.forEach(function(B,C){if(this.getValue()){B.addState(l);
}else{B.removeState(l);
}},this);
});
s.add(r);
}
if(o.invalid){var t=new qx.ui.form.ToggleButton(b);
t.addListener(m,function(e){n.forEach(function(D,E){if(D.setInvalidMessage&&D.setValid){D.setInvalidMessage(h+E+i);
D.setValid(!this.getValue());
}},this);
});
s.add(t);
}}}});
})();
(function(){var c="function",b="qx.Part",a="complete";
qx.Bootstrap.define(b,{construct:function(d){var m=d.parts[d.boot][0];
this.__wk=d;
this.__wl={};
this.__wm={};
this.__wn={};
this.__wo=[];
var n=this.__wq();

for(var i=0;i<n.length;i++){var e=d.packageHashes[i];
var j=new qx.io.part.Package(n[i],e,i==m);
this.__wo.push(j);
}this.__wp={};
var h=d.parts;
var f=d.closureParts||{};

for(var name in h){var g=h[name];
var l=[];

for(var i=0;i<g.length;i++){l.push(this.__wo[g[i]]);
}if(f[name]){var k=new qx.io.part.ClosurePart(name,l,this);
}else{var k=new qx.io.part.Part(name,l,this);
}this.__wp[name]=k;
}},statics:{TIMEOUT:7500,getInstance:function(){if(!this.$$instance){this.$$instance=new this(qx.$$loader);
}return this.$$instance;
},require:function(o,p,self){this.getInstance().require(o,p,self);
},preload:function(q){this.getInstance().preload(q);
},$$notifyLoad:function(r,s){this.getInstance().saveClosure(r,s);
}},members:{__wk:null,__wo:null,__wp:null,__wn:null,addToPackage:function(t){this.__wo.push(t);
},addClosurePackageListener:function(u,v){var w=u.getId();

if(!this.__wn[w]){this.__wn[w]=[];
}this.__wn[w].push(v);
},saveClosure:function(x,y){var A;

for(var i=0;i<this.__wo.length;i++){if(this.__wo[i].getId()==x){A=this.__wo[i];
break;
}}if(!A){throw new Error("Package not available: "+x);
}A.saveClosure(y);
var z=this.__wn[x];

if(!z){return;
}
for(var i=0;i<z.length;i++){z[i](a,x);
}this.__wn[x]=[];
},getParts:function(){return this.__wp;
},require:function(B,C,self){var C=C||function(){};
var self=self||window;

if(qx.Bootstrap.isString(B)){B=[B];
}var F=[];

for(var i=0;i<B.length;i++){F.push(this.__wp[B[i]]);
}var E=0;
var D=function(){E+=1;
if(E>=F.length){var G=[];

for(var i=0;i<F.length;i++){G.push(F[i].getReadyState());
}C.call(self,G);
}};

for(var i=0;i<F.length;i++){F[i].load(D,this);
}},preload:function(H,I,self){if(qx.Bootstrap.isString(H)){H=[H];
}var J=0;

for(var i=0;i<H.length;i++){this.__wp[H[i]].preload(function(){J++;

if(J>=H.length){var K=[];

for(var i=0;i<H.length;i++){K.push(this.__wp[H[i]].getReadyState());
}
if(I){I.call(self,K);
}}},this);
}},__wq:function(){var L=this.__wk.uris;
var M=[];

for(var i=0;i<L.length;i++){M.push(this.__wr(L[i]));
}return M;
},__wr:qx.$$loader.decodeUris,__wl:null,addPartListener:function(N,O){var P=N.getName();

if(!this.__wl[P]){this.__wl[P]=[];
}this.__wl[P].push(O);
},onpart:null,notifyPartResult:function(Q){var S=Q.getName();
var R=this.__wl[S];

if(R){for(var i=0;i<R.length;i++){R[i](Q.getReadyState());
}this.__wl[S]=[];
}
if(typeof this.onpart==c){this.onpart(Q);
}},__wm:null,addPackageListener:function(T,U){var V=T.getId();

if(!this.__wm[V]){this.__wm[V]=[];
}this.__wm[V].push(U);
},notifyPackageResult:function(W){var Y=W.getId();
var X=this.__wm[Y];

if(!X){return;
}
for(var i=0;i<X.length;i++){X[i](W.getReadyState());
}this.__wm[Y]=[];
}}});
})();
(function(){var j="tabview-button-border",i="button-box",h="button-box-pressed",g="background-selected",f="button-border",e="button-box-hovered",d="button-box-pressed-hovered",c="solid",b="invalid",a="gray",Y="button-border-hovered",X="tabview-unselected",W="shadow",V="border-separator",U="border-light",T="checkbox",S="dotted",R="tabview-page-button-top-bottom",Q="window-border",P="radiobutton",q="scroll-knob",r="tabview-page-button-right-left",o="background",p="button-box-bright",m="window-border-inner",n="white",k="button-box-bright-pressed",l="button-box-dark-pressed",u="black",v="table-header",D="button-box-invalid",B="menubar-button-hovered",H="button-box-dark",F="#999999",L="qx/decoration/Simple",J="button",x="tooltip-text",O="table-focus-indicator",N="button-box-pressed-invalid",M="scrollbar-dark",w="qx.theme.simple.Decoration",z="button-box-focused",A="table-header-cell",C="border-lead",E="#FFF",G="button-box-pressed-focused",I="scrollbar-bright",K="border-light-shadow",s="white-box-border",t="window",y="scroll-knob-pressed";
qx.Theme.define(w,{aliases:{decoration:L},decorations:{"border-blue":{decorator:qx.ui.decoration.Uniform,style:{width:4,color:g}},"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:g}},"main-dark":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:f}},"popup":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:Q,shadowLength:2,shadowBlurRadius:5,shadowColor:W}},"button-box":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,gradientStart:[p,40],gradientEnd:[H,70],backgroundColor:p}},"button-box-pressed":{include:i,style:{gradientStart:[k,40],gradientEnd:[l,70],backgroundColor:k}},"button-box-pressed-hovered":{include:h,style:{color:Y}},"button-box-hovered":{include:i,style:{color:Y}},"button-box-invalid":{include:i,style:{color:b}},"button-box-pressed-invalid":{include:h,style:{color:b}},"button-box-hovered-invalid":{include:D},"button-box-pressed-hovered-invalid":{include:N},"button-box-focused":{include:i,style:{color:g}},"button-box-pressed-focused":{include:h,style:{color:g}},"button-box-hovered-focused":{include:z},"button-box-pressed-hovered-focused":{include:G},"button-box-right":{include:i,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:h,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:d,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:e,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:i,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:h,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:d,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:e,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:i,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:h,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:d,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:e,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:i,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:h,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:d,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:e,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:i,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:h,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:d,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:e,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:i,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:h,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:d,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:e,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:i,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:h,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:d,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:e,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:i,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:h,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:d,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:e,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:V}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:V}},"scroll-knob":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,backgroundColor:I}},"scroll-knob-pressed":{include:q,style:{backgroundColor:M}},"scroll-knob-hovered":{include:q,style:{color:Y}},"scroll-knob-pressed-hovered":{include:y,style:{color:Y}},"button-hover":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{backgroundColor:J,radius:3}},"window":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:Q,innerWidth:4,innerColor:m,shadowLength:1,shadowBlurRadius:3,shadowColor:W,backgroundColor:o}},"window-active":{include:t,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{decorator:qx.ui.decoration.Single,style:{width:[0,0,2,0],color:m}},"white-box":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:s,shadowBlurRadius:2,shadowColor:F,radius:7,backgroundColor:n}},"inset":{decorator:qx.ui.decoration.Single,style:{width:1,color:[K,U,U,U]}},"focused-inset":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:g}},"border-invalid":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:b}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:S,color:C}},"tooltip":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{width:1,color:x,shadowLength:1,shadowBlurRadius:2,shadowColor:W}},"tooltip-error":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{radius:5,backgroundColor:b}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:f}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"menubar-button-hovered":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:1,color:g,radius:3,backgroundColor:n}},"menubar-button-pressed":{include:B,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:a,style:c}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,style:c}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:a,style:c}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,widthRight:1,colorRight:a,style:c}},"tabview-page-button-top-bottom":{decorator:qx.ui.decoration.Single,style:{width:[0,1],color:j}},"tabview-page-button-top-bottom-first":{include:R,style:{color:[j,j,j,X]}},"tabview-page-button-top-bottom-last":{include:R,style:{color:[j,X,j,j]}},"tabview-page-button-right-left":{decorator:qx.ui.decoration.Single,style:{width:[1,0],color:j}},"tabview-page-button-right-left-first":{include:r,style:{color:[X,j,j,j]}},"tabview-page-button-right-left-last":{include:r,style:{color:[j,j,X,j]}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:u,style:S}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g,styleTop:c}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:O,style:c}},"table-header":{include:i,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:v,style:{width:1,color:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,color:f}},"table-header-cell-first":{include:A,style:{widthLeft:1}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:E,width:1,color:V}},"radiobutton":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:10,width:1,color:f,innerColor:o,innerWidth:2}},"radiobutton-focused":{include:P,style:{color:g}},"radiobutton-invalid":{include:P,style:{color:b}},"checkbox":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:f}},"checkbox-focused":{include:T,style:{color:g}},"checkbox-invalid":{include:T,style:{color:b}}}});
})();
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="__sX",h="qx.ui.tooltip.ToolTip",g="__sW",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="tooltip-error",b="singleton",a="__ta";
qx.Class.define(f,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__th,this,true);
this.__sW=new qx.event.Timer();
this.__sW.addListener(n,this.__te,this);
this.__sX=new qx.event.Timer();
this.__sX.addListener(n,this.__tf,this);
this.__sY={left:0,top:0};
},properties:{current:{check:h,nullable:true,apply:c},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__sY:null,__sX:null,__sW:null,__ta:null,__tb:null,__tc:function(){if(!this.__ta){this.__ta=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ta;
},__td:function(){if(!this.__tb){this.__tb=new qx.ui.tooltip.ToolTip().set({appearance:d});
this.__tb.syncAppearance();
}return this.__tb;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__sW.stop();
this.__sX.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__sW.startWith(q.getShowTimeout());
t.addListener(s,l,this.__ti,this,true);
t.addListener(s,o,this.__tj,this,true);
t.addListener(s,k,this.__tg,this,true);
}else{t.removeListener(s,l,this.__ti,this,true);
t.removeListener(s,o,this.__tj,this,true);
t.removeListener(s,k,this.__tg,this,true);
}},__te:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__sX.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__sY);
}u.show();
}this.__sW.stop();
},__tf:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__sX.stop();
this.resetCurrent();
},__tg:function(e){var w=this.__sY;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__th:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||
!z.getEnabled()||
z.isBlockToolTip()||
(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__td().set({label:x});
}
if(!A){A=this.__tc().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__ti:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__tj:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__th,this,true);
this._disposeObjects(g,i,a);
this.__sY=null;
}});
})();
(function(){var l="button",k="",j="close",i="String",h="_applyIcon",g="page",f="qx.event.type.Event",e="_applyShowCloseButton",d="tabview-page",c="qx.ui.tabview.Page",a="_applyLabel",b="Boolean";
qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(m,n){qx.ui.container.Composite.call(this);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}},events:{"close":f},properties:{appearance:{refine:true,init:d},label:{check:i,init:k,apply:a},icon:{check:i,init:k,apply:h},showCloseButton:{check:b,init:false,apply:e}},members:{_forwardStates:{barTop:1,barRight:1,barBottom:1,barLeft:1,firstTab:1,lastTab:1},_applyIcon:function(o,p){this.getChildControl(l).setIcon(o);
},_applyLabel:function(q,r){this.getChildControl(l).setLabel(q);
},_applyEnabled:function(s,t){qx.ui.container.Composite.prototype._applyEnabled.call(this,s,t);
var u=this.getChildControl(l);
s==null?u.resetEnabled():u.setEnabled(s);
},_createChildControlImpl:function(v,w){var x;

switch(v){case l:x=new qx.ui.tabview.TabButton;
x.setAllowGrowX(true);
x.setAllowGrowY(true);
x.setUserData(g,this);
x.addListener(j,this._onButtonClose,this);
break;
}return x||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,v);
},_applyShowCloseButton:function(y,z){this.getChildControl(l).setShowCloseButton(y);
},_onButtonClose:function(){this.fireEvent(j);
},getButton:function(){return this.getChildControl(l);
}}});
})();
(function(){var k="appear",j="50%",i="excluded",h="widgetbrowser.view.TabPage",g="widgetbrowser/loading66.gif",f="browser.version",e="opera",d="11.0",c=".",b="browser.name",a="pane";
qx.Class.define(h,{extend:qx.ui.tabview.Page,include:widgetbrowser.MControls,construct:function(l,m,n){qx.ui.tabview.Page.call(this);
this.setLabel(l);
this.setLayout(new qx.ui.layout.Canvas());
this.addListenerOnce(k,function(){var p=m.split(c).pop().toLowerCase();
qx.Part.require(p,function(){var r=qx.Class.getByName(m);
var q=new r();
this.add(q,{top:40,edge:0});
if(qx.core.Environment.get(b)==e&&qx.core.Environment.get(f)==d){var scroll=qx.core.Init.getApplication().getScroll().getChildControl(a).getContentElement().getDomElement();
q.addListenerOnce(k,function(){if(scroll){scroll.scrollTop=0;
}});
}this.initControls(q.getWidgets(),n);
o.setVisibility(i);
},this);
},this);
var o=new qx.ui.basic.Image(g);
o.setMarginTop(-33);
o.setMarginLeft(-33);
this.add(o,{left:j,top:j});
},members:{}});
})();
(function(){var a="qx.theme.simple.Image";
qx.Class.define(a,{extend:qx.core.Object,statics:{URLS:{"blank":"qx/static/blank.gif","checkbox-checked":"decoration/checkbox/checked.png","checkbox-undetermined":"decoration/checkbox/undetermined.png","window-minimize":"decoration/window/minimize.gif","window-maximize":"decoration/window/maximize.gif","window-restore":"decoration/window/restore.gif","window-close":"decoration/window/close.gif","cursor-copy":"decoration/cursors/copy.gif","cursor-move":"decoration/cursors/move.gif","cursor-alias":"decoration/cursors/alias.gif","cursor-nodrop":"decoration/cursors/nodrop.gif","arrow-right":"decoration/arrows/right.gif","arrow-left":"decoration/arrows/left.gif","arrow-up":"decoration/arrows/up.gif","arrow-down":"decoration/arrows/down.gif","arrow-forward":"decoration/arrows/forward.gif","arrow-rewind":"decoration/arrows/rewind.gif","arrow-down-small":"decoration/arrows/down-small.gif","arrow-up-small":"decoration/arrows/up-small.gif","arrow-up-invert":"decoration/arrows/up-invert.gif","arrow-down-invert":"decoration/arrows/down-invert.gif","arrow-right-invert":"decoration/arrows/right-invert.gif","knob-horizontal":"decoration/splitpane/knob-horizontal.png","knob-vertical":"decoration/splitpane/knob-vertical.png","tree-minus":"decoration/tree/minus.gif","tree-plus":"decoration/tree/plus.gif","select-column-order":"decoration/table/select-column-order.png","table-ascending":"decoration/table/ascending.png","table-descending":"decoration/table/descending.png","treevirtual-line":"decoration/treevirtual/line.gif","treevirtual-minus-only":"decoration/treevirtual/only_minus.gif","treevirtual-plus-only":"decoration/treevirtual/only_plus.gif","treevirtual-minus-start":"decoration/treevirtual/start_minus.gif","treevirtual-plus-start":"decoration/treevirtual/start_plus.gif","treevirtual-minus-end":"decoration/treevirtual/end_minus.gif","treevirtual-plus-end":"decoration/treevirtual/end_plus.gif","treevirtual-minus-cross":"decoration/treevirtual/cross_minus.gif","treevirtual-plus-cross":"decoration/treevirtual/cross_plus.gif","treevirtual-end":"decoration/treevirtual/end.gif","treevirtual-cross":"decoration/treevirtual/cross.gif","menu-checkbox":"decoration/menu/checkbox.gif","menu-checkbox-invert":"decoration/menu/checkbox-invert.gif","menu-radiobutton-invert":"decoration/menu/radiobutton-invert.gif","menu-radiobutton":"decoration/menu/radiobutton.gif","tabview-close":"decoration/tabview/close.gif"}}});
})();
(function(){var j="white",i="#5685D6",h="black",g="#6694E3",f="#EEE",e="gray",d="#1866B5",c="#24B",b="#888888",a="#CCCCCC",K="#FFFFE1",J="#B7B7B7",I="#BBBBBB",H="#9DCBFE",G="#A7A6AA",F="#EBEBEB",E="#666666",D="#CBC8CD",C="#F9F9F9",B="#F7F7F7",q="#808080",r="#686868",o="#FF0000",p="#E0ECFF",m="#2E3A46",n="#F5F5F5",k="#E3E3E3",l="#DDDDDD",s="#BBB",t="qx.theme.simple.Color",w="#F1F1F1",v="#939393",y="#BCBCBC",x="#134983",A="#E8F0E3",z="#FAFBFE",u="#AAAAAA";
qx.Theme.define(t,{colors:{"background":j,"dark-blue":i,"light-background":p,"background-selected":g,"background-selected-dark":i,"background-disabled":B,"background-disabled-checked":I,"background-pane":z,"tabview-unselected":d,"tabview-button-border":x,"link":c,"scrollbar-bright":w,"scrollbar-dark":F,"button":A,"button-border":s,"button-border-hovered":v,"invalid":o,"button-box-bright":C,"button-box-dark":k,"button-box-bright-pressed":l,"button-box-dark-pressed":n,"border-lead":b,"window-border":m,"window-border-inner":H,"white-box-border":y,"shadow":E,"border-main":g,"border-light":J,"border-light-shadow":r,"border-separator":q,"text":h,"text-disabled":G,"text-selected":j,"text-placeholder":D,"tooltip":K,"tooltip-text":h,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":j,"table-row-background-odd":j,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":f,"table-column-line":f,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":a,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":j}});
})();
(function(){var b="Simple",a="qx.theme.Simple";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.simple.Color,decoration:qx.theme.simple.Decoration,font:qx.theme.simple.Font,appearance:qx.theme.simple.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var m="pane",k="lastTab",j="bar",h="page",g="firstTab",f="right",d="bottom",c="button",b="changeSelection",a="close",B="top",A="left",z="qx.event.type.Data",y="barRight",x="beforeChangeSelection",w="close-button",v="tabview",u="vertical",t="_applyBarPosition",s="barLeft",q="__sq",r="horizontal",o="qx.ui.tabview.TabView",p="barTop",n="barBottom";
qx.Class.define(o,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:[qx.ui.core.MContentPadding],construct:function(C){qx.ui.core.Widget.call(this);
this.__sp={top:p,right:y,bottom:n,left:s};
this._createChildControl(j);
this._createChildControl(m);
var D=this.__sq=new qx.ui.form.RadioGroup;
D.setWrap(false);
D.addListener(b,this._onChangeSelection,this);
if(C!=null){this.setBarPosition(C);
}else{this.initBarPosition();
}},events:{"changeSelection":z},properties:{appearance:{refine:true,init:v},barPosition:{check:[A,f,B,d],init:B,apply:t}},members:{__sq:null,_createChildControlImpl:function(E,F){var G;

switch(E){case j:G=new qx.ui.container.SlideBar();
G.setZIndex(10);
this._add(G);
break;
case m:G=new qx.ui.container.Stack;
G.setZIndex(5);
this._add(G,{flex:1});
break;
}return G||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,E);
},_getContentPaddingTarget:function(){return this.getChildControl(m);
},add:function(H){var I=H.getButton();
var J=this.getChildControl(j);
var L=this.getChildControl(m);
H.exclude();
J.add(I);
L.add(H);
this.__sq.add(I);
H.addState(this.__sp[this.getBarPosition()]);
H.addState(k);
var K=this.getChildren();

if(K[0]==H){H.addState(g);
}else{K[K.length-2].removeState(k);
}H.addListener(a,this._onPageClose,this);
},remove:function(M){var R=this.getChildControl(m);
var P=this.getChildControl(j);
var O=M.getButton();
var Q=R.getChildren();
if(this.getSelection()[0]==M){var N=Q.indexOf(M);

if(N==0){if(Q[1]){this.setSelection([Q[1]]);
}else{this.resetSelection();
}}else{this.setSelection([Q[N-1]]);
}}P.remove(O);
R.remove(M);
this.__sq.remove(O);
M.removeState(this.__sp[this.getBarPosition()]);
if(M.hasState(g)){M.removeState(g);

if(Q[0]){Q[0].addState(g);
}}
if(M.hasState(k)){M.removeState(k);

if(Q.length>0){Q[Q.length-1].addState(k);
}}M.removeListener(a,this._onPageClose,this);
},getChildren:function(){return this.getChildControl(m).getChildren();
},indexOf:function(S){return this.getChildControl(m).indexOf(S);
},__sp:null,_applyBarPosition:function(T,U){var V=this.getChildControl(j);
var bb=T==A||T==f;
var Y=T==f||T==d;
var ba=bb?qx.ui.layout.HBox:qx.ui.layout.VBox;
var bd=this._getLayout();

if(bd&&bd instanceof ba){}else{this._setLayout(bd=new ba);
}bd.setReversed(Y);
V.setOrientation(bb?u:r);
var bc=this.getChildren();
if(U){var W=this.__sp[U];
V.removeState(W);
for(var i=0,l=bc.length;i<l;i++){bc[i].removeState(W);
}}
if(T){var X=this.__sp[T];
V.addState(X);
for(var i=0,l=bc.length;i<l;i++){bc[i].addState(X);
}}},getSelection:function(){var be=this.__sq.getSelection();
var bf=[];

for(var i=0;i<be.length;i++){bf.push(be[i].getUserData(h));
}return bf;
},setSelection:function(bg){var bh=[];

for(var i=0;i<bg.length;i++){bh.push(bg[i].getChildControl(c));
}this.__sq.setSelection(bh);
},resetSelection:function(){this.__sq.resetSelection();
},isSelected:function(bi){var bj=bi.getChildControl(c);
return this.__sq.isSelected(bj);
},isSelectionEmpty:function(){return this.__sq.isSelectionEmpty();
},getSelectables:function(bk){var bl=this.__sq.getSelectables(bk);
var bm=[];

for(var i=0;i<bl.length;i++){bm.push(bl[i].getUserData(h));
}return bm;
},_onChangeSelection:function(e){var br=this.getChildControl(m);
var bo=e.getData()[0];
var bq=e.getOldData()[0];
var bn=[];
var bp=[];

if(bo){bn=[bo.getUserData(h)];
br.setSelection(bn);
bo.focus();
this.scrollChildIntoView(bo,null,null,false);
}else{br.resetSelection();
}
if(bq){bp=[bq.getUserData(h)];
}this.fireDataEvent(b,bn,bp);
},_onBeforeChangeSelection:function(e){if(!this.fireNonBubblingEvent(x,qx.event.type.Event,[false,true])){e.preventDefault();
}},_onRadioChangeSelection:function(e){var bs=e.getData()[0];

if(bs){this.setSelection([bs.getUserData(h)]);
}else{this.resetSelection();
}},_onPageClose:function(e){var bu=e.getTarget();
var bt=bu.getButton().getChildControl(w);
bt.reset();
this.remove(bu);
}},destruct:function(){this._disposeObjects(q);
this.__sp=null;
}});
})();
(function(){var k="currentTab",j="widgetbrowser.pages.Basic",i="widgetbrowser.pages.Tree",h="widgetbrowser.pages.Embed",g="widgetbrowser.pages.Form",f="Window",d="basic",c="widgetbrowser.view.TabView",b="widgetbrowser.pages.ToolBar",a="EmbedFrame",C="Misc",B="Toolbar/Menu",A="widgetbrowser.pages.TreeVirtual",z="Control",y="Basic",x="Tree",w="widgetbrowser.pages.List",v="changeSelection",u="TreeVirtual",t="widgetbrowser.pages.Table",r="Table",s="widgetbrowser.pages.EmbedFrame",p="Embed",q="widgetbrowser.pages.Misc",n="List",o="widgetbrowser.pages.Window",l="Form",m="widgetbrowser.pages.Control";
qx.Class.define(c,{extend:qx.ui.tabview.TabView,construct:function(){qx.ui.tabview.TabView.call(this);
this.init();
this.addListener(v,this.__Rx,this);
this.__Ry();
},members:{init:function(){var K,L;
L=g;
K={disabled:true,hovered:true,focused:true,invalid:true};
var F=new widgetbrowser.view.TabPage(l,L,K);
this.add(F);
L=i;
K={disabled:true};
var G=new widgetbrowser.view.TabPage(x,L,K);
this.add(G);
L=w;
K={disabled:true};
var J=new widgetbrowser.view.TabPage(n,L,K);
this.add(J);
L=t;
K={disabled:true};
var G=new widgetbrowser.view.TabPage(r,L,K);
this.add(G);
L=b;
K={disabled:true,hovered:true,selected:true};
var N=new widgetbrowser.view.TabPage(B,L,K);
this.add(N);
L=o;
K={disabled:true};
var P=new widgetbrowser.view.TabPage(f,L,K);
this.add(P);
L=m;
K={disabled:true};
var D=new widgetbrowser.view.TabPage(z,L,K);
this.add(D);
L=A;
K={};
var H=new widgetbrowser.view.TabPage(u,L,K);
this.add(H);
L=h;
K={};
var O=new widgetbrowser.view.TabPage(p,L,K);
this.add(O);
L=s;
K={};
var E=new widgetbrowser.view.TabPage(a,L,K);
this.add(E);
L=j;
K={disabled:true};
var I=new widgetbrowser.view.TabPage(y,L,K);
this.add(I);
L=q;
K={disabled:true};
var M=new widgetbrowser.view.TabPage(C,L,K);
this.add(M);
},__Rx:function(e){qx.bom.Cookie.set(k,e.getData()[0].getLabel());
},__Ry:function(){var Q=qx.bom.Cookie.get(k)||qx.bom.Cookie.set(k,d);
var R=new qx.type.Array().append(this.getSelectables()).filter(function(S){return S.getLabel()==Q;
})[0];

if(R){this.setSelection([R]);
}}}});
})();
(function(){var r="value",q="default",p="index.html?qx.theme=",o="black",n="app-header-label",m="Classic",l=" Theme",k="qx.version",j="2%",i="qooxdoo ",c="Widget Browser",h="widgetbrowser.view.Header",f="Modern",b="changeSelection",a="Simple",e="qx.theme.",d="Theme",g="app-header";
qx.Class.define(h,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this.setLayout(new qx.ui.layout.HBox);
this.setAppearance(g);
var v=new qx.ui.basic.Label(c);
var s=new qx.ui.basic.Label(i+qx.core.Environment.get(k));
s.setFont(q);
s.setAppearance(n);
var u=new qx.ui.form.SelectBox(d);
[f,a,m].forEach(function(name){var w=new qx.ui.form.ListItem(name+l);
w.setUserData(r,e+name);
u.add(w);
});
u.setFont(q);
var t=u.getSelectables().filter(function(x){if(window.location.search){return window.location.search.match(x.getUserData(r));
}})[0];
if(t){u.setSelection([t]);
}u.setTextColor(o);
u.addListener(b,function(y){var A=y.getData()[0];
var z=p+A.getUserData(r);
window.location=z;
});
this.add(v);
this.add(new qx.ui.core.Spacer,{flex:1});
this.add(u);
this.add(new qx.ui.core.Spacer,{width:j});
this.add(s);
}});
})();
(function(){var o="close-button",n="middle",m="left",l="icon",k="label",j="right",i="click",h="Boolean",g="bottom",f="qx.ui.tabview.TabButton",c="center",e="_applyShowCloseButton",d="top",b="close",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.ui.form.RadioButton,implement:qx.ui.form.IRadioItem,construct:function(){qx.ui.form.RadioButton.call(this);
var p=new qx.ui.layout.Grid(2,0);
p.setRowAlign(0,m,n);
p.setColumnAlign(0,j,n);
this._getLayout().dispose();
this._setLayout(p);
this.initShowCloseButton();
},events:{"close":a},properties:{showCloseButton:{check:h,init:false,apply:e}},members:{_forwardStates:{focused:true,checked:true},_applyIconPosition:function(q,r){var s={icon:this.getChildControl(l),label:this.getChildControl(k),closeButton:this.getShowCloseButton()?this.getChildControl(o):null};
for(var t in s){if(s[t]){this._remove(s[t]);
}}
switch(q){case d:this._add(s.label,{row:3,column:2});
this._add(s.icon,{row:1,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case g:this._add(s.label,{row:1,column:2});
this._add(s.icon,{row:3,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case m:this._add(s.label,{row:0,column:2});
this._add(s.icon,{row:0,column:0});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case j:this._add(s.label,{row:0,column:0});
this._add(s.icon,{row:0,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
}},_createChildControlImpl:function(u,v){var w;

switch(u){case k:var w=new qx.ui.basic.Label(this.getLabel());
w.setAnonymous(true);
this._add(w,{row:0,column:2});
this._getLayout().setColumnFlex(2,1);
break;
case l:w=new qx.ui.basic.Image(this.getIcon());
w.setAnonymous(true);
this._add(w,{row:0,column:0});
break;
case o:w=new qx.ui.form.Button();
w.addListener(i,this._onCloseButtonClick,this);
this._add(w,{row:0,column:4});

if(!this.getShowCloseButton()){w.exclude();
}break;
}return w||qx.ui.form.RadioButton.prototype._createChildControlImpl.call(this,u);
},_onCloseButtonClick:function(){this.fireDataEvent(b,this);
},_applyShowCloseButton:function(x,y){if(x){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyCenter:function(z){var A=this._getLayout();

if(z){A.setColumnAlign(2,c,n);
}else{A.setColumnAlign(2,m,n);
}}}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:[qx.ui.core.MSingleSelectionHandling,qx.ui.core.MChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__so,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(f){var h=this._getChildren();
var g=this.getSelection()[0];
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(j!=g){if(f){h[i].exclude();
}else{h[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(k){return true;
},__so:function(e){var m=e.getOldData()[0];
var n=e.getData()[0];

if(m){if(this.isDynamic()){m.exclude();
}else{m.hide();
}}
if(n){n.show();
}},_afterAddChild:function(o){var p=this.getSelection()[0];

if(!p){this.setSelection([o]);
}else if(p!==o){if(this.isDynamic()){o.exclude();
}else{o.hide();
}}},_afterRemoveChild:function(q){if(this.getSelection()[0]===q){var r=this._getChildren()[0];

if(r){this.setSelection([r]);
}else{this.resetSelection();
}}},previous:function(){var u=this.getSelection()[0];
var s=this._indexOf(u)-1;
var v=this._getChildren();

if(s<0){s=v.length-1;
}var t=v[s];
this.setSelection([t]);
},next:function(){var x=this.getSelection()[0];
var w=this._indexOf(x)+1;
var y=this._getChildren();
var z=y[w]||y[0];
this.setSelection([z]);
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(b,c){qx.ui.core.LayoutItem.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(d){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var f="mousedown",d="__nr",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nr=[];
qx.event.Registration.addListener(document.documentElement,f,this.__nt,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__nr:null,add:function(g){this.__nr.push(g);
this.__ns();
},remove:function(h){if(this.__nr){qx.lang.Array.remove(this.__nr,h);
this.__ns();
}},hideAll:function(){var j;
var k=this.__nr;

if(k){for(var i=0,l=k.length;i<l;i++){var j=k[i];
j.getAutoHide()&&j.exclude();
}}},__ns:function(){var m=1e7;

for(var i=0;i<this.__nr.length;i++){this.__nr[i].setZIndex(m++);
}},__nt:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__nr;

for(var i=0;i<p.length;i++){var n=p[i];

if(!n.getAutoHide()||o==n||qx.ui.core.Widget.contains(n,o)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__nt,this,true);
this._disposeArray(d);
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);
}qx.ui.container.Composite.prototype.show.call(this);
},_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__lA,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__lA:function(name,e){var v=e.getData();
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
(function(){var n="change",m="changeBubble",l="add",k="remove",j="0-",h="order",g="-",f="0",e="qx.event.type.Data",d="",a="qx.data.Array",c="number",b="changeLength";
qx.Class.define(a,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(o){qx.core.Object.call(this);
if(o==undefined){this.__lB=[];
}else if(arguments.length>1){this.__lB=[];

for(var i=0;i<arguments.length;i++){this.__lB.push(arguments[i]);
}}else if(typeof o==c){this.__lB=new Array(o);
}else if(o instanceof Array){this.__lB=qx.lang.Array.clone(o);
}else{this.__lB=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lB.length;i++){this._applyEventPropagation(this.__lB[i],null,i);
}this.__lC();
},events:{"change":e,"changeLength":e},members:{__lB:null,concat:function(p){if(p){var q=this.__lB.concat(p);
}else{var q=this.__lB.concat();
}return new qx.data.Array(q);
},join:function(r){return this.__lB.join(r);
},pop:function(){var s=this.__lB.pop();
this.__lC();
this._registerEventChaining(null,s,this.length-1);
this.fireDataEvent(m,{value:[],name:this.length,old:[s]});
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:k,items:[s]},null);
return s;
},push:function(t){for(var i=0;i<arguments.length;i++){this.__lB.push(arguments[i]);
this.__lC();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(m,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:l,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var u=this.__lB.concat();
this.__lB.reverse();
this.fireDataEvent(n,{start:0,end:this.length-1,type:h,items:null},null);
this.fireDataEvent(m,{value:this.__lB,name:j+(this.__lB.length-1),old:u});
},shift:function(){if(this.length==0){return;
}var v=this.__lB.shift();
this.__lC();
this._registerEventChaining(null,v,this.length-1);
this.fireDataEvent(m,{value:[],name:f,old:[v]});
this.fireDataEvent(n,{start:0,end:this.length-1,type:k,items:[v]},null);
return v;
},slice:function(w,x){return new qx.data.Array(this.__lB.slice(w,x));
},splice:function(y,z,A){var I=this.__lB.length;
var E=this.__lB.splice.apply(this.__lB,arguments);
if(this.__lB.length!=I){this.__lC();
}var G=z>0;
var C=arguments.length>2;
var D=null;

if(G||C){if(this.__lB.length>I){var H=l;
}else if(this.__lB.length<I){var H=k;
D=E;
}else{var H=h;
}this.fireDataEvent(n,{start:y,end:this.length-1,type:H,items:D},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,y+i);
}var F=[];

for(var i=2;i<arguments.length;i++){F[i-2]=arguments[i];
}var B=(y+Math.max(arguments.length-3,z-1));
var name=y==B?B:y+g+B;
this.fireDataEvent(m,{value:F,name:name,old:E});
for(var i=0;i<E.length;i++){this._registerEventChaining(null,E[i],i);
}return (new qx.data.Array(E));
},sort:function(J){if(this.length==0){return;
}var K=this.__lB.concat();
this.__lB.sort.apply(this.__lB,arguments);
this.fireDataEvent(n,{start:0,end:this.length-1,type:h,items:null},null);
this.fireDataEvent(m,{value:this.__lB,name:j+(this.length-1),old:K});
},unshift:function(L){for(var i=arguments.length-1;i>=0;i--){this.__lB.unshift(arguments[i]);
this.__lC();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(m,{value:[this.__lB[0]],name:f,old:[this.__lB[1]]});
this.fireDataEvent(n,{start:0,end:this.length-1,type:l,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lB;
},getItem:function(M){return this.__lB[M];
},setItem:function(N,O){var P=this.__lB[N];
if(P===O){return;
}this.__lB[N]=O;
this._registerEventChaining(O,P,N);
if(this.length!=this.__lB.length){this.__lC();
}this.fireDataEvent(m,{value:[O],name:N,old:[P]});
this.fireDataEvent(n,{start:N,end:N,type:l,items:[O]},null);
},getLength:function(){return this.length;
},indexOf:function(Q){return this.__lB.indexOf(Q);
},toString:function(){if(this.__lB!=null){return this.__lB.toString();
}return d;
},contains:function(R){return this.__lB.indexOf(R)!==-1;
},copy:function(){return this.concat();
},insertAt:function(S,T){this.splice(S,0,T);
},insertBefore:function(U,V){var W=this.indexOf(U);

if(W==-1){this.push(V);
}else{this.splice(W,0,V);
}},insertAfter:function(X,Y){var ba=this.indexOf(X);

if(ba==-1||ba==(this.length-1)){this.push(Y);
}else{this.splice(ba+1,0,Y);
}},removeAt:function(bb){return this.splice(bb,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__lB.length;i++){this._registerEventChaining(null,this.__lB[i],i);
}if(this.getLength()==0){return;
}var bd=this.getLength();
var bc=this.__lB.concat();
this.__lB.length=0;
this.__lC();
this.fireDataEvent(m,{value:[],name:j+(bd-1),old:bc});
this.fireDataEvent(n,{start:0,end:bd-1,type:k,items:bc},null);
return bc;
},append:function(be){if(be instanceof qx.data.Array){be=be.toArray();
}Array.prototype.push.apply(this.__lB,be);
for(var i=0;i<be.length;i++){this._registerEventChaining(be[i],null,this.__lB.length+i);
}var bf=this.length;
this.__lC();
this.fireDataEvent(m,{value:be,name:bf==(this.length-1)?bf:bf+g+(this.length-1),old:[]});
this.fireDataEvent(n,{start:bf,end:this.length-1,type:l,items:be},null);
},remove:function(bg){var bh=this.indexOf(bg);

if(bh!=-1){this.splice(bh,1);
return bg;
}},equals:function(bi){if(this.length!==bi.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bi.getItem(i)){return false;
}}return true;
},sum:function(){var bj=0;

for(var i=0;i<this.length;i++){bj+=this.getItem(i);
}return bj;
},max:function(){var bk=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bk){bk=this.getItem(i);
}}return bk===undefined?null:bk;
},min:function(){var bl=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bl){bl=this.getItem(i);
}}return bl===undefined?null:bl;
},forEach:function(bm,bn){for(var i=0;i<this.__lB.length;i++){bm.call(bn,this.__lB[i]);
}},__lC:function(){var bo=this.length;
this.length=this.__lB.length;
this.fireDataEvent(b,this.length,bo);
}},destruct:function(){for(var i=0;i<this.__lB.length;i++){this._applyEventPropagation(null,this.__lB[i],i);
}this.__lB=null;
}});
})();
(function(){var k="keypress",j="focusout",h="activate",g="Tab",f="__oD",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__oD={};
},members:{__oD:null,__oE:null,__oF:null,__oG:null,connectTo:function(m){m.addListener(k,this.__oH,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(h,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__oD[n.$$hash]=n;
},removeRoot:function(o){delete this.__oD[o.$$hash];
},getActiveWidget:function(){return this.__oE;
},isActive:function(p){return this.__oE==p;
},getFocusedWidget:function(){return this.__oF;
},isFocused:function(q){return this.__oF==q;
},isFocusRoot:function(r){return !!this.__oD[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__oE=t;
var s=this.__oI(t);

if(s!=this.__oG){this.__oG=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__oE==u){this.__oE=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__oF){this.__oF=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__oF){this.__oF=null;
w.visualizeBlur();
}},__oH:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__oG){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__oF;

if(!e.isShiftPressed()){var y=x?this.__oM(x):this.__oK();
}else{var y=x?this.__oN(x):this.__oL();
}if(y){y.tabFocus();
}},__oI:function(z){var A=this.__oD;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__oJ:function(B,C){if(B===C){return 0;
}var E=B.getTabIndex()||0;
var D=C.getTabIndex()||0;

if(E!=D){return E-D;
}var J=B.getContainerElement().getDomElement();
var I=C.getContainerElement().getDomElement();
var H=qx.bom.element.Location;
var G=H.get(J);
var F=H.get(I);
if(G.top!=F.top){return G.top-F.top;
}if(G.left!=F.left){return G.left-F.left;
}var K=B.getZIndex();
var L=C.getZIndex();

if(K!=L){return K-L;
}return 0;
},__oK:function(){return this.__oQ(this.__oG,null);
},__oL:function(){return this.__oR(this.__oG,null);
},__oM:function(M){var N=this.__oG;

if(N==M){return this.__oK();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__oO(N,M,O);
O.sort(this.__oJ);
var P=O.length;
return P>0?O[0]:this.__oK();
},__oN:function(Q){var R=this.__oG;

if(R==Q){return this.__oL();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__oP(R,Q,S);
S.sort(this.__oJ);
var T=S.length;
return T>0?S[T-1]:this.__oL();
},__oO:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__oJ(U,X)<0){V.push(X);
}this.__oO(X,U,V);
}}},__oP:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__oJ(Y,bc)>0){ba.push(bc);
}this.__oP(bc,Y,ba);
}}},__oQ:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__oJ(bf,bd)<0){bd=bf;
}}bd=this.__oQ(bf,bd);
}}return bd;
},__oR:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__oJ(bi,bg)>0){bg=bi;
}}bg=this.__oR(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(f);
this.__oF=this.__oE=this.__oG=null;
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(o,p){var q;

switch(o){case l:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,o);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(r,s){var t=this.getChildControl(l);
r==null?t.resetIcon():t.setIcon(r);
},_applyLabel:function(u,v){var w=this.getChildControl(l);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(x,y){var z=this.getChildControl(l);
z.setRich(x);
}}});
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
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(k){var l={"  ":e,"\n":d};
return l[k]||k;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(n){if(n.indexOf(f)===0){return b;
}else if(n.length>0&&n.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(o){o.FROM_CHARCODE=qx.lang.Object.invert(o.TO_CHARCODE);
}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var m="resize",l="scrollY",k="update",j="scrollX",i="_applyScrollX",h="_applyScrollY",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",f="appear",d="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",c="qx.event.type.Event",a="qx.ui.core.scroll.ScrollPane",b="scroll";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(m,this._onUpdate);
var n=this.getContentElement();
n.addListener(b,this._onScroll,this);
n.addListener(f,this._onAppear,this);
},events:{update:c},properties:{scrollX:{check:g,apply:i,event:j,init:0},scrollY:{check:d,apply:h,event:l,init:0}},members:{add:function(o){var p=this._getChildren()[0];

if(p){this._remove(p);
p.removeListener(m,this._onUpdate,this);
}
if(o){this._add(o);
o.addListener(m,this._onUpdate,this);
}},remove:function(q){if(q){this._remove(q);
q.removeListener(m,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(k);
},_onScroll:function(e){var r=this.getContentElement();
this.setScrollX(r.getScrollX());
this.setScrollY(r.getScrollY());
},_onAppear:function(e){var v=this.getContentElement();
var s=this.getScrollX();
var t=v.getScrollX();

if(s!=t){v.scrollToX(s);
}var w=this.getScrollY();
var u=v.getScrollY();

if(w!=u){v.scrollToY(w);
}},getItemTop:function(z){var top=0;

do{top+=z.getBounds().top;
z=z.getLayoutParent();
}while(z&&z!==this);
return top;
},getItemBottom:function(A){return this.getItemTop(A)+A.getBounds().height;
},getItemLeft:function(B){var C=0;
var parent;

do{C+=B.getBounds().left;
parent=B.getLayoutParent();

if(parent){C+=parent.getInsets().left;
}B=parent;
}while(B&&B!==this);
return C;
},getItemRight:function(D){return this.getItemLeft(D)+D.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var F=this.getInnerSize();
var E=this.getScrollSize();

if(F&&E){return Math.max(0,E.width-F.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
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
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(N){this.getContentElement().scrollToY(N);
}}});
})();
(function(){var s="horizontal",r="scrollpane",q="vertical",p="button-backward",o="button-forward",n="content",m="execute",l="qx.ui.container.SlideBar",k="scrollY",j="engine.name",c="removeChildWidget",i="scrollX",g="_applyOrientation",b="mousewheel",a="gecko",f="Integer",d="slidebar",h="update";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(t){qx.ui.core.Widget.call(this);
var u=this.getChildControl(r);
this._add(u,{flex:1});

if(t!=null){this.setOrientation(t);
}else{this.initOrientation();
}this.addListener(b,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:d},orientation:{check:[s,q],init:s,apply:g},scrollStep:{check:f,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(n);
},_createChildControlImpl:function(v,w){var x;

switch(v){case o:x=new qx.ui.form.RepeatButton;
x.addListener(m,this._onExecuteForward,this);
x.setFocusable(false);
this._addAt(x,2);
break;
case p:x=new qx.ui.form.RepeatButton;
x.addListener(m,this._onExecuteBackward,this);
x.setFocusable(false);
this._addAt(x,0);
break;
case n:x=new qx.ui.container.Composite();
if(qx.core.Environment.get(j)==a){x.addListener(c,this._onRemoveChild,this);
}this.getChildControl(r).add(x);
break;
case r:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(h,this._onResize,this);
x.addListener(i,this._onScroll,this);
x.addListener(k,this._onScroll,this);
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,v);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(y){var z=this.getChildControl(r);

if(this.getOrientation()===s){z.scrollByX(y);
}else{z.scrollByY(y);
}},scrollTo:function(A){var B=this.getChildControl(r);

if(this.getOrientation()===s){B.scrollToX(A);
}else{B.scrollToY(A);
}},_applyOrientation:function(C,D){var G=[this.getLayout(),this._getLayout()];
var F=this.getChildControl(o);
var E=this.getChildControl(p);
if(D==q){F.removeState(q);
E.removeState(q);
F.addState(s);
E.addState(s);
}else if(D==s){F.removeState(s);
E.removeState(s);
F.addState(q);
E.addState(q);
}
if(C==s){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(G[0]){G[0].dispose();
}
if(G[1]){G[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(r).getChildren()[0];

if(!content){return;
}var H=this.getInnerSize();
var J=content.getBounds();
var I=(this.getOrientation()===s)?J.width>H.width:J.height>H.height;

if(I){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(r).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var L=this.getChildControl(r);

if(this.getOrientation()===s){var K=L.getScrollX();
var M=L.getScrollMaxX();
}else{var K=L.getScrollY();
var M=L.getScrollMaxY();
}this.getChildControl(p).setEnabled(K>0);
this.getChildControl(o).setEnabled(K<M);
},_showArrows:function(){this._showChildControl(o);
this._showChildControl(p);
},_hideArrows:function(){this._excludeChildControl(o);
this._excludeChildControl(p);
this.scrollTo(0);
}}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__ox",b="__ow",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__ow:null,__ox:null,getWindowManager:function(){if(!this.__ox){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ox;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__ox){this.__ox.setDesktop(null);
}j.setDesktop(this);
this.__ox=j;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._addWindow(m);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ow){this.__ow=[];
}return this.__ow;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var f="__oy",e="_applyBlockerColor",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__oy=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:e,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__oy:null,_applyBlockerColor:function(g,h){this.__oy.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__oy.setOpacity(i);
},block:function(){this.__oy.block();
},isBlocked:function(){return this.__oy.isBlocked();
},unblock:function(){this.__oy.unblock();
},forceUnblock:function(){this.__oy.forceUnblock();
},blockContent:function(k){this.__oy.blockContent(k);
},isContentBlocked:function(){return this.__oy.isContentBlocked();
},unblockContent:function(){this.__oy.unblockContent();
},forceUnblockContent:function(){this.__oy.forceUnblockContent();
},getBlocker:function(){return this.__oy;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var t="engine.name",s="help",r="contextmenu",q="changeGlobalCursor",p="keypress",o="Boolean",n="root",m="",l=" !important",k="input",d="_applyGlobalCursor",j="Space",h="_applyNativeHelp",c=";",b="qx.ui.root.Abstract",g="abstract",f="textarea",i="String",a="*";
qx.Class.define(b,{type:g,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(p,this.__oA,this);
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:i,nullable:true,themeable:true,apply:d,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__oz:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__oz;

if(!z){this.__oz=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(c,m)+l);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__oA:function(e){if(e.getKeyIdentifier()!==j){return;
}var D=e.getTarget();
var C=qx.ui.core.FocusHandler.getInstance();

if(!C.isFocused(D)){return;
}var E=D.getContentElement().getNodeName();

if(E===k||E===f){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Environment.select(t,{"mshtml":function(F,G){if(G===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(F===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__oz=null;
},defer:function(H,I){qx.ui.core.MChildrenHandling.remap(I);
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__oB=qx.dom.Node.getWindow(o);
this.__oC=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__oB,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__oB:null,__oC:null,_createContainerElement:function(){var p=this.__oC;
if((qx.core.Environment.get(m)==j)){if(!p.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var t=p.documentElement.style;
var q=p.body.style;
t.overflow=q.overflow=f;
t.padding=t.margin=q.padding=q.margin=k;
t.width=t.height=q.width=q.height=c;
var s=p.createElement(d);
p.body.appendChild(s);
var r=new qx.html.Root(s);
r.setStyle(l,b);
r.setAttribute(h,this.toHashCode());
return r;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__oB);
var v=qx.bom.Viewport.getHeight(this.__oB);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__oB=this.__oC=null;
}});
})();
(function(){var l="engine.name",k="head",j="text/css",h="stylesheet",g="}",f='@import "',e="{",d='";',c="qx.bom.Stylesheet",b="link",a="style";
qx.Class.define(c,{statics:{includeFile:function(m,n){if(!n){n=document;
}var o=n.createElement(b);
o.type=j;
o.rel=h;
o.href=qx.util.ResourceManager.getInstance().toUri(m);
var p=n.getElementsByTagName(k)[0];
p.appendChild(o);
},createElement:qx.core.Environment.select(l,{"mshtml":function(q){var r=document.createStyleSheet();

if(q){r.cssText=q;
}return r;
},"default":function(s){var t=document.createElement(a);
t.type=j;

if(s){t.appendChild(document.createTextNode(s));
}document.getElementsByTagName(k)[0].appendChild(t);
return t.sheet;
}}),addRule:qx.core.Environment.select(l,{"mshtml":function(u,v,w){u.addRule(v,w);
},"default":function(x,y,z){x.insertRule(y+e+z+g,x.cssRules.length);
}}),removeRule:qx.core.Environment.select(l,{"mshtml":function(A,B){var C=A.rules;
var D=C.length;

for(var i=D-1;i>=0;--i){if(C[i].selectorText==B){A.removeRule(i);
}}},"default":function(E,F){var G=E.cssRules;
var H=G.length;

for(var i=H-1;i>=0;--i){if(G[i].selectorText==F){E.deleteRule(i);
}}}}),removeAllRules:qx.core.Environment.select(l,{"mshtml":function(I){var J=I.rules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Environment.select(l,{"mshtml":function(O,P){O.addImport(P);
},"default":function(Q,R){Q.insertRule(f+R+d,Q.cssRules.length);
}}),removeImport:qx.core.Environment.select(l,{"mshtml":function(S,T){var U=S.imports;
var V=U.length;

for(var i=V-1;i>=0;i--){if(U[i].href==T){S.removeImport(i);
}}},"default":function(W,X){var Y=W.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].href==X){W.deleteRule(i);
}}}}),removeAllImports:qx.core.Environment.select(l,{"mshtml":function(bb){var bc=bb.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){bb.removeImport(i);
}},"default":function(be){var bf=be.cssRules;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].type==bf[i].IMPORT_RULE){be.deleteRule(i);
}}}})}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="__on",b="backgroundColor",a="_applyOpacity",x="Boolean",w="opacity",v="interval",u="Tab",t="__ol",s="Color",r="__oj",q="qx.ui.root.Page",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(q)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__oo,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__og=[];
this.__oh=[];
this.__oi=[];
},properties:{color:{check:s,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:a,themeable:true},keepBlockerActive:{check:x,init:false}},members:{__oj:null,__ok:0,__ol:null,__oi:null,__og:null,__oh:null,__om:null,__on:null,_isPageRoot:false,_widget:null,__oo:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__op(b,C);
},_applyOpacity:function(D,E){this.__op(w,D);
},__op:function(F,G){var H=[];
this.__oj&&H.push(this.__oj);
this.__ol&&H.push(this.__ol);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__og.push(I.getActive());
this.__oh.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__og.length;

if(L>0){var K=this.__og[L-1];

if(K){qx.bom.Element.activate(K);
}this.__og.pop();
}var J=this.__oh.length;

if(J>0){var K=this.__oh[J-1];

if(K){qx.bom.Element.focus(this.__oh[J-1]);
}this.__oh.pop();
}},__oq:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__oj){this.__oj=this.__oq();
this.__oj.setStyle(l,15);
this._widget.getContainerElement().add(this.__oj);
this.__oj.exclude();
}return this.__oj;
},block:function(){this.__ok++;

if(this.__ok<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__ov,this);
M.addListener(d,this.__ou,this);
M.addListener(j,this.__ou,this);
M.addListener(f,this.__ou,this);
}},isBlocked:function(){return this.__ok>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__ok--;

if(this.__ok<1){this.__or();
this.__ok=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__ok=0;
this.__or();
},__or:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__ov,this);
N.removeListener(d,this.__ou,this);
N.removeListener(j,this.__ou,this);
N.removeListener(f,this.__ou,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__ol){this.__ol=this.__oq();
this._widget.getContentElement().add(this.__ol);
this.__ol.exclude();
}return this.__ol;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__oi.push(O);

if(this.__oi.length<2){P.include();

if(this._isPageRoot){if(!this.__on){this.__on=new qx.event.Timer(300);
this.__on.addListener(v,this.__ot,this);
}this.__on.start();
this.__ot();
}}},isContentBlocked:function(){return this.__oi.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oi.pop();
var Q=this.__oi[this.__oi.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__oi.length<1){this.__os();
this.__oi=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oi=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__os();
},__os:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__on.stop();
}},__ot:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__ou:function(e){if(e.getKeyIdentifier()==u){e.stop();
}},__ov:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__oo,this);
}this._disposeObjects(t,r,c);
this.__om=this.__og=this.__oh=this._widget=this.__oi=null;
}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__kT:null,__kU:null,__kV:null,__kW:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kX:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__kT&&this.__kT.length!=length&&this.__kU&&this.__kT;
var u;
var s=r?this.__kT:new Array(length);
var v=r?this.__kU:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__kT=s;
this.__kU=v;
}this.__kV=t;
this.__kW=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__kX();
}var E=this.__kW;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__kT[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__kV&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__kU[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kX();
}var bc=qx.ui.layout.Util;
var bk=this.__kW;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__kU[i];
var X=this.__kT[i];

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
}},destruct:function(){this.__kT=this.__kU=this.__kW=null;
}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__lF=[];
this.__lG=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__lH:null,__lF:null,__lG:null,__lI:null,__lJ:null,__lK:null,__lL:null,__lM:null,__lN:null,verifyLayoutProperty:null,__lO:function(){var B=[];
var A=[];
var C=[];
var w=-1;
var v=-1;
var E=this._getLayoutChildren();

for(var i=0,l=E.length;i<l;i++){var z=E[i];
var D=z.getLayoutProperties();
var F=D.row;
var u=D.column;
D.colSpan=D.colSpan||1;
D.rowSpan=D.rowSpan||1;
if(F==null||u==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+z+"' must be defined!");
}
if(B[F]&&B[F][u]){throw new Error("Cannot add widget '"+z+"'!. "+"There is already a widget '"+B[F][u]+"' in this cell ("+F+", "+u+")");
}
for(var x=u;x<u+D.colSpan;x++){for(var y=F;y<F+D.rowSpan;y++){if(B[y]==undefined){B[y]=[];
}B[y][x]=z;
v=Math.max(v,x);
w=Math.max(w,y);
}}
if(D.rowSpan>1){C.push(z);
}
if(D.colSpan>1){A.push(z);
}}for(var y=0;y<=w;y++){if(B[y]==undefined){B[y]=[];
}}this.__lH=B;
this.__lI=A;
this.__lJ=C;
this.__lK=w;
this.__lL=v;
this.__lM=null;
this.__lN=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__lF[G];

if(!J){this.__lF[G]={};
this.__lF[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__lG[K];

if(!N){this.__lG[K]={};
this.__lG[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__lG[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__lF[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__lO();
}var ba=this.__lH[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__lO();
}return this.__lK+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__lO();
}return this.__lL+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__lF[bc];
var bf=this.__lG[bd];
var be=this.__lH[bc][bd];

if(be){var bg={vAlign:be.getAlignY(),hAlign:be.getAlignX()};
}else{bg={};
}if(bg.vAlign){bj=bg.vAlign;
}else if(bi&&bi.vAlign){bj=bi.vAlign;
}else if(bf&&bf.vAlign){bj=bf.vAlign;
}if(bg.hAlign){bh=bg.hAlign;
}else if(bf&&bf.hAlign){bh=bf.hAlign;
}else if(bi&&bi.hAlign){bh=bi.hAlign;
}return {vAlign:bj,hAlign:bh};
},setColumnFlex:function(bk,bl){this._setColumnData(bk,n,bl);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bm){var bn=this.__lG[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__lF[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__lG[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__lG[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__lG[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__lF[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__lF[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__lF[bP]||{};
return bQ.minHeight||0;
},__lP:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ce=this.getSpacingY();

for(var i=0,l=this.__lJ.length;i<l;i++){var cl=this.__lJ[i];
var ch=this.__lP(cl);
var ca=cl.getLayoutProperties();
var cg=ca.row;
var cq=ce*(ca.rowSpan-1);
var bX=cq;
var cb={};

for(var j=0;j<ca.rowSpan;j++){var cf=ca.row+j;
var cp=bW[cf];
var cr=this.getRowFlex(cf);

if(cr>0){cb[cf]={min:cp.minHeight,value:cp.height,max:cp.maxHeight,flex:cr};
}cq+=cp.height;
bX+=cp.minHeight;
}if(cq<ch.height){if(!qx.lang.Object.isEmpty(cb)){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.height,cq);

for(var k=0;k<ca.rowSpan;k++){var cn=cc[cg+k]?cc[cg+k].offset:0;
bW[cg+k].height+=cn;
}}else{var ck=ce*(ca.rowSpan-1);
var ci=ch.height-ck;
var co=Math.floor(ci/ca.rowSpan);
var cm=0;
var bY=0;

for(var k=0;k<ca.rowSpan;k++){var cd=bW[cg+k].height;
cm+=cd;

if(cd<co){bY++;
}}var cj=Math.floor((ci-cm)/bY);
for(var k=0;k<ca.rowSpan;k++){if(bW[cg+k].height<co){bW[cg+k].height+=cj;
}}}}if(bX<ch.minHeight){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.minHeight,bX);

for(var j=0;j<ca.rowSpan;j++){var cn=cc[cg+j]?cc[cg+j].offset:0;
bW[cg+j].minHeight+=cn;
}}}},_fixWidthsColSpan:function(cs){var cw=this.getSpacingX();

for(var i=0,l=this.__lI.length;i<l;i++){var ct=this.__lI[i];
var cv=this.__lP(ct);
var cy=ct.getLayoutProperties();
var cu=cy.column;
var cE=cw*(cy.colSpan-1);
var cx=cE;
var cz={};
var cB;

for(var j=0;j<cy.colSpan;j++){var cF=cy.column+j;
var cD=cs[cF];
var cC=this.getColumnFlex(cF);
if(cC>0){cz[cF]={min:cD.minWidth,value:cD.width,max:cD.maxWidth,flex:cC};
}cE+=cD.width;
cx+=cD.minWidth;
}if(cE<cv.width){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.width,cE);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].width+=cB;
}}if(cx<cv.minWidth){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.minWidth,cx);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].minWidth+=cB;
}}}},_getRowHeights:function(){if(this.__lM!=null){return this.__lM;
}var cP=[];
var cI=this.__lK;
var cH=this.__lL;

for(var cQ=0;cQ<=cI;cQ++){var cJ=0;
var cL=0;
var cK=0;

for(var cO=0;cO<=cH;cO++){var cG=this.__lH[cQ][cO];

if(!cG){continue;
}var cM=cG.getLayoutProperties().rowSpan||0;

if(cM>1){continue;
}var cN=this.__lP(cG);

if(this.getRowFlex(cQ)>0){cJ=Math.max(cJ,cN.minHeight);
}else{cJ=Math.max(cJ,cN.height);
}cL=Math.max(cL,cN.height);
}var cJ=Math.max(cJ,this.getRowMinHeight(cQ));
var cK=this.getRowMaxHeight(cQ);

if(this.getRowHeight(cQ)!==null){var cL=this.getRowHeight(cQ);
}else{var cL=Math.max(cJ,Math.min(cL,cK));
}cP[cQ]={minHeight:cJ,height:cL,maxHeight:cK};
}
if(this.__lJ.length>0){this._fixHeightsRowSpan(cP);
}this.__lM=cP;
return cP;
},_getColWidths:function(){if(this.__lN!=null){return this.__lN;
}var cV=[];
var cS=this.__lL;
var cU=this.__lK;

for(var db=0;db<=cS;db++){var cY=0;
var cX=0;
var cT=Infinity;

for(var dc=0;dc<=cU;dc++){var cR=this.__lH[dc][db];

if(!cR){continue;
}var cW=cR.getLayoutProperties().colSpan||0;

if(cW>1){continue;
}var da=this.__lP(cR);

if(this.getColumnFlex(db)>0){cX=Math.max(cX,da.minWidth);
}else{cX=Math.max(cX,da.width);
}cY=Math.max(cY,da.width);
}var cX=Math.max(cX,this.getColumnMinWidth(db));
var cT=this.getColumnMaxWidth(db);

if(this.getColumnWidth(db)!==null){var cY=this.getColumnWidth(db);
}else{var cY=Math.max(cX,Math.min(cY,cT));
}cV[db]={minWidth:cX,width:cY,maxWidth:cT};
}
if(this.__lI.length>0){this._fixWidthsColSpan(cV);
}this.__lN=cV;
return cV;
},_getColumnFlexOffsets:function(dd){var de=this.getSizeHint();
var di=dd-de.width;

if(di==0){return {};
}var dg=this._getColWidths();
var df={};

for(var i=0,l=dg.length;i<l;i++){var dj=dg[i];
var dh=this.getColumnFlex(i);

if((dh<=0)||(dj.width==dj.maxWidth&&di>0)||(dj.width==dj.minWidth&&di<0)){continue;
}df[i]={min:dj.minWidth,value:dj.width,max:dj.maxWidth,flex:dh};
}return qx.ui.layout.Util.computeFlexOffsets(df,dd,de.width);
},_getRowFlexOffsets:function(dk){var dl=this.getSizeHint();
var dp=dk-dl.height;

if(dp==0){return {};
}var dq=this._getRowHeights();
var dm={};

for(var i=0,l=dq.length;i<l;i++){var dr=dq[i];
var dn=this.getRowFlex(i);

if((dn<=0)||(dr.height==dr.maxHeight&&dp>0)||(dr.height==dr.minHeight&&dp<0)){continue;
}dm[i]={min:dr.minHeight,value:dr.height,max:dr.maxHeight,flex:dn};
}return qx.ui.layout.Util.computeFlexOffsets(dm,dk,dl.height);
},renderLayout:function(ds,dt){if(this._invalidChildrenCache){this.__lO();
}var dH=qx.ui.layout.Util;
var dv=this.getSpacingX();
var dB=this.getSpacingY();
var dM=this._getColWidths();
var dL=this._getColumnFlexOffsets(ds);
var dw=[];
var dO=this.__lL;
var du=this.__lK;
var dN;

for(var dP=0;dP<=dO;dP++){dN=dL[dP]?dL[dP].offset:0;
dw[dP]=dM[dP].width+dN;
}var dE=this._getRowHeights();
var dG=this._getRowFlexOffsets(dt);
var dV=[];

for(var dC=0;dC<=du;dC++){dN=dG[dC]?dG[dC].offset:0;
dV[dC]=dE[dC].height+dN;
}var dW=0;

for(var dP=0;dP<=dO;dP++){var top=0;

for(var dC=0;dC<=du;dC++){var dJ=this.__lH[dC][dP];
if(!dJ){top+=dV[dC]+dB;
continue;
}var dx=dJ.getLayoutProperties();
if(dx.row!==dC||dx.column!==dP){top+=dV[dC]+dB;
continue;
}var dU=dv*(dx.colSpan-1);

for(var i=0;i<dx.colSpan;i++){dU+=dw[dP+i];
}var dK=dB*(dx.rowSpan-1);

for(var i=0;i<dx.rowSpan;i++){dK+=dV[dC+i];
}var dy=dJ.getSizeHint();
var dS=dJ.getMarginTop();
var dI=dJ.getMarginLeft();
var dF=dJ.getMarginBottom();
var dA=dJ.getMarginRight();
var dD=Math.max(dy.minWidth,Math.min(dU-dI-dA,dy.maxWidth));
var dT=Math.max(dy.minHeight,Math.min(dK-dS-dF,dy.maxHeight));
var dQ=this.getCellAlign(dC,dP);
var dR=dW+dH.computeHorizontalAlignOffset(dQ.hAlign,dD,dU,dI,dA);
var dz=top+dH.computeVerticalAlignOffset(dQ.vAlign,dT,dK,dS,dF);
dJ.renderLayout(dR,dz,dD,dT);
top+=dV[dC]+dB;
}dW+=dw[dP]+dv;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__lN=null;
this.__lM=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lO();
}var ec=this._getColWidths();
var ee=0,ef=0;

for(var i=0,l=ec.length;i<l;i++){var eg=ec[i];

if(this.getColumnFlex(i)>0){ee+=eg.minWidth;
}else{ee+=eg.width;
}ef+=eg.width;
}var eh=this._getRowHeights();
var ea=0,ed=0;

for(var i=0,l=eh.length;i<l;i++){var ei=eh[i];

if(this.getRowFlex(i)>0){ea+=ei.minHeight;
}else{ea+=ei.height;
}ed+=ei.height;
}var dY=this.getSpacingX()*(ec.length-1);
var dX=this.getSpacingY()*(eh.length-1);
var eb={minWidth:ee+dY,width:ef+dY,minHeight:ea+dX,height:ed+dX};
return eb;
}},destruct:function(){this.__lH=this.__lF=this.__lG=this.__lI=this.__lJ=this.__lN=this.__lM=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__jR:null,__jS:null,__jT:null,__jU:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jV:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__jR&&this.__jR.length!=length&&this.__jS&&this.__jR;
var u;
var t=r?this.__jR:new Array(length);
var v=r?this.__jS:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__jR=t;
this.__jS=v;
}this.__jT=s;
this.__jU=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__jV();
}var F=this.__jU;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__jR[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__jT&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__jS[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jV();
}var bc=qx.ui.layout.Util;
var bk=this.__jU;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__jS[i];
var Y=this.__jR[i];

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
}},destruct:function(){this.__jR=this.__jS=this.__jU=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="div",b="dblclick",a="mousewheel",w="qx.html.Blocker",v="mousemove",u="mouseover",t="appear",s="click",r="mshtml",q="engine.name",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(w,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if((qx.core.Environment.get(q)==r)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,c,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(s,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(t,this.__oS,this);
this.addListener(n,this.__oS,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__oS:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__mt",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);
this.__mt=[];
this.addListener(b,this.__mu,this);

if(s!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__mt:null,getItems:function(){return this.__mt;
},add:function(t){var u=this.__mt;
var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];

if(qx.lang.Array.contains(u,v)){continue;
}v.addListener(p,this._onItemChangeChecked,this);
u.push(v);
v.setGroup(this);
if(v.getValue()){this.setSelection([v]);
}}if(!this.isAllowEmptySelection()&&u.length>0&&!this.getSelection()[0]){this.setSelection([u[0]]);
}},remove:function(w){var x=this.__mt;

if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);
if(w.getGroup()===this){w.resetGroup();
}w.removeListener(p,this._onItemChangeChecked,this);
if(w.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__mt;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__mt.length;i++){this.__mt[i].setInvalidMessage(z);
}},_applyValid:function(B,C){for(var i=0;i<this.__mt.length;i++){this.__mt[i].setValid(B);
}},_applyEnabled:function(D,E){var F=this.__mt;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var I=this.getSelection()[0];
var K=this.__mt;
var J=K.indexOf(I);

if(J==-1){return;
}var i=0;
var length=K.length;
if(this.getWrap()){J=(J+1)%length;
}else{J=Math.min(J+1,length-1);
}
while(i<length&&!K[J].getEnabled()){J=(J+1)%length;
i++;
}this.setSelection([K[J]]);
},selectPrevious:function(){var L=this.getSelection()[0];
var N=this.__mt;
var M=N.indexOf(L);

if(M==-1){return;
}var i=0;
var length=N.length;
if(this.getWrap()){M=(M-1+length)%length;
}else{M=Math.max(M-1,0);
}
while(i<length&&!N[M].getEnabled()){M=(M-1+length)%length;
i++;
}this.setSelection([N[M]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},_isItemSelectable:function(O){return this.__mt.indexOf(O)!=-1;
},__mu:function(e){var Q=e.getData()[0];
var P=e.getOldData()[0];

if(P){P.setValue(false);
}
if(Q){Q.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var k="pressed",j="abandoned",i="hovered",h="Boolean",g="Space",f="undetermined",d="Enter",c="checked",b="mousedown",a="_applyTriState",w="mouseout",v="changeValue",u="keydown",t="_applyGroup",s="button",r="execute",q="qx.ui.form.RadioGroup",p="_applyValue",o="qx.ui.form.ToggleButton",n="mouseover",l="keyup",m="mouseup";
qx.Class.define(o,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable,qx.ui.form.IRadioItem],construct:function(x,y){qx.ui.basic.Atom.call(this,x,y);
this.addListener(n,this._onMouseOver);
this.addListener(w,this._onMouseOut);
this.addListener(b,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(u,this._onKeyDown);
this.addListener(l,this._onKeyUp);
this.addListener(r,this._onExecute,this);
},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},value:{check:h,nullable:true,event:v,apply:p,init:false},group:{check:q,nullable:true,apply:t},triState:{check:h,apply:a,nullable:true,init:null}},members:{_applyGroup:function(z,A){if(A){A.remove(this);
}
if(z){z.add(this);
}},_applyValue:function(B,C){B?this.addState(c):this.removeState(c);

if(this.isTriState()){if(B===null){this.addState(f);
}else if(C===null){this.removeState(f);
}}},_applyTriState:function(D,E){this._applyValue(this.getValue());
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(i);

if(this.hasState(j)){this.removeState(j);
this.addState(k);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(i);

if(this.hasState(k)){if(!this.getValue()){this.removeState(k);
}this.addState(j);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(j);
this.addState(k);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(j)){this.removeState(j);
}else if(this.hasState(k)){this.execute();
}this.removeState(k);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.addState(k);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(k)){return;
}
switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.execute();
this.removeState(k);
e.stopPropagation();
}}}});
})();
(function(){var g="__mx",f="qx.ui.core.SingleSelectionManager",e="__mv",d="__mw",c="changeSelected",b="qx.event.type.Data",a="Boolean";
qx.Class.define(f,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this.__mv=h;
},events:{"changeSelected":b},properties:{allowEmptySelection:{check:a,init:true,apply:g}},members:{__mw:null,__mv:null,getSelected:function(){return this.__mw;
},setSelected:function(j){if(!this.__mz(j)){throw new Error("Could not select "+j+", because it is not a child element!");
}this.__my(j);
},resetSelected:function(){this.__my(null);
},isSelected:function(k){if(!this.__mz(k)){throw new Error("Could not check if "+k+" is selected,"+" because it is not a child element!");
}return this.__mw===k;
},isSelectionEmpty:function(){return this.__mw==null;
},getSelectables:function(l){var m=this.__mv.getItems();
var n=[];

for(var i=0;i<m.length;i++){if(this.__mv.isItemSelectable(m[i])){n.push(m[i]);
}}if(!l){for(var i=n.length-1;i>=0;i--){if(!n[i].getEnabled()){n.splice(i,1);
}}}return n;
},__mx:function(o,p){if(!o){this.__my(this.__mw);
}},__my:function(q){var t=this.__mw;
var s=q;

if(s!=null&&t===s){return;
}
if(!this.isAllowEmptySelection()&&s==null){var r=this.getSelectables(true)[0];

if(r){s=r;
}}this.__mw=s;
this.fireDataEvent(c,s,t);
},__mz:function(u){var v=this.__mv.getItems();

for(var i=0;i<v.length;i++){if(v[i]===u){return true;
}}return false;
}},destruct:function(){if(this.__mv.toHashCode){this._disposeObjects(e);
}else{this.__mv=null;
}this._disposeObjects(d);
}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="__oU",d="qx.ui.form.RepeatButton",a="release",c="interval",b="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__oU=new qx.event.AcceleratingTimer();
this.__oU.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__oV:null,__oU:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__oW();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__oV){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__oX();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__oX();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__oU.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__oU.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__oW();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__oV){this.execute();
}}this.__oX();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__oV){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__oX();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__oW();
}},_onInterval:function(e){this.__oV=true;
this.fireEvent(b);
},__oW:function(){this.fireEvent(g);
this.__oV=false;
this.__oU.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__oX:function(){this.fireEvent(a);
this.__oU.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="Integer",d="interval",c="__oY",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oY=new qx.event.Timer(this.getInterval());
this.__oY.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__oY:null,__pa:null,start:function(){this.__oY.setInterval(this.getFirstInterval());
this.__oY.start();
},stop:function(){this.__oY.stop();
this.__pa=null;
},_onInterval:function(){this.__oY.stop();

if(this.__pa==null){this.__pa=this.getInterval();
}this.__pa=Math.max(this.getMinimum(),this.__pa-this.getDecrease());
this.__oY.setInterval(this.__pa);
this.__oY.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var m="bottom",l="top",k="_applyLayoutChange",j="top-left",h="bottom-left",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",a="Integer",b="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:k},iconPosition:{check:[g,l,f,m,j,h],init:g,apply:k},center:{check:b,init:false,apply:k}},members:{verifyLayoutProperty:null,renderLayout:function(n,o){var x=qx.ui.layout.Util;
var q=this.getIconPosition();
var t=this._getLayoutChildren();
var length=t.length;
var I,top,y,r;
var D,w;
var B=this.getGap();
var G=this.getCenter();
if(q===m||q===f){var z=length-1;
var u=-1;
var s=-1;
}else{var z=0;
var u=length;
var s=1;
}if(q==l||q==m){if(G){var C=0;

for(var i=z;i!=u;i+=s){r=t[i].getSizeHint().height;

if(r>0){C+=r;

if(i!=z){C+=B;
}}}top=Math.round((o-C)/2);
}else{top=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
y=Math.min(w.maxWidth,Math.max(n,w.minWidth));
r=w.height;
I=x.computeHorizontalAlignOffset(d,y,n);
D.renderLayout(I,top,y,r);
if(r>0){top+=r+B;
}}}else{var v=n;
var p=null;
var F=0;

for(var i=z;i!=u;i+=s){D=t[i];
y=D.getSizeHint().width;

if(y>0){if(!p&&D instanceof qx.ui.basic.Label){p=D;
}else{v-=y;
}F++;
}}
if(F>1){var E=(F-1)*B;
v-=E;
}
if(p){var w=p.getSizeHint();
var A=Math.max(w.minWidth,Math.min(v,w.maxWidth));
v-=A;
}
if(G&&v>0){I=Math.round(v/2);
}else{I=0;
}
for(var i=z;i!=u;i+=s){D=t[i];
w=D.getSizeHint();
r=Math.min(w.maxHeight,Math.max(o,w.minHeight));

if(D===p){y=A;
}else{y=w.width;
}var H=e;

if(q==j){H=l;
}else if(q==h){H=m;
}top=x.computeVerticalAlignOffset(H,w.height,o);
D.renderLayout(I,top,y,r);
if(y>0){I+=y+B;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===l||N===m){var J=0;

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


qx.$$loader.init();

