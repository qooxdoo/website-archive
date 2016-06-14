(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"fce.reportServerAddUrl":"/reports/features/add","fce.reportServerGetUrl":"/reports/features/get","fce.reportServerHost":null,"qx.allowUrlSettings":true,"qx.application":"fce.Application","qx.debug":false,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.revision":"28156","qx.theme":"fce.theme.Theme","qx.version":"1.5"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"fce":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.5"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:fce.c4bbd69799fe.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
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
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  var item = list.shift();
  loadScript(item,  function() {
    if (isWebkit) {
      // force async, else Safari fails with a "maximum recursion depth exceeded"
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

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"}},"resources":{"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-next.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/go-previous.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/help-contents.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-restore.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-new.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"en":{}}};
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
}return be;
})(),getEnvironmentSetting:function(bf){if(qx.$$environment){return qx.$$environment[bf];
}},setEnvironmentSetting:function(bg,bh){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bg]===undefined){qx.$$environment[bg]=bh;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bi,bj,bk,name,bl){var bo=bk.prototype;
var bn=new Function;
bn.prototype=bo;
var bm=new bn;
bi.prototype=bm;
bm.name=bm.classname=name;
bm.basename=bl;
bj.base=bi.superclass=bk;
bj.self=bi.constructor=bm.constructor=bi;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bp){return bp.__count__;
},"default":function(bq){var length=0;

for(var br in bq){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bs,bt,bu){if(bu===undefined){bu=true;
}
for(var bv in bt){if(bu||bs[bv]===undefined){bs[bv]=bt[bv];
}}return bs;
},__hm:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bw){var bx=[];
var bz=Object.prototype.hasOwnProperty;

for(var bA in bw){if(bz.call(bw,bA)){bx.push(bA);
}}var by=qx.Bootstrap.__hm;

for(var i=0,a=by,l=a.length;i<l;i++){if(bz.call(bw,a[i])){bx.push(a[i]);
}}return bx;
},"default":function(bB){var bC=[];
var bD=Object.prototype.hasOwnProperty;

for(var bE in bB){if(bD.call(bB,bE)){bC.push(bE);
}}return bC;
}})[typeof (Object.keys)==L?B:(function(){for(var bF in {toString:1}){return bF;
}})()!==m?u:j],getKeysAsString:function(bG){var bH=qx.Bootstrap.getKeys(bG);

if(bH.length==0){return p;
}return g+bH.join(C)+g;
},__hn:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bI,self,bJ){var bK=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bL=Array.prototype.slice.call(arguments,0,arguments.length);
return bI.apply(self,bK.concat(bL));
};
},firstUp:function(bM){return bM.charAt(0).toUpperCase()+bM.substr(1);
},firstLow:function(bN){return bN.charAt(0).toLowerCase()+bN.substr(1);
},getClass:function(bO){var bP=Object.prototype.toString.call(bO);
return (qx.Bootstrap.__hn[bP]||bP.slice(8,-1));
},isString:function(bQ){return (bQ!==null&&(typeof bQ===F||qx.Bootstrap.getClass(bQ)==d||bQ instanceof String||(!!bQ&&!!bQ.$$isString)));
},isArray:function(bR){return (bR!==null&&(bR instanceof Array||(bR&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bR.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bR)==f||(!!bR&&!!bR.$$isArray)));
},isObject:function(bS){return (bS!==undefined&&bS!==null&&qx.Bootstrap.getClass(bS)==h);
},isFunction:function(bT){return qx.Bootstrap.getClass(bT)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bU,name){while(bU){if(bU.$$properties&&bU.$$properties[name]){return bU.$$properties[name];
}bU=bU.superclass;
}return null;
},hasProperty:function(bV,name){return !!qx.Bootstrap.getPropertyDefinition(bV,name);
},getEventType:function(bW,name){var bW=bW.constructor;

while(bW.superclass){if(bW.$$events&&bW.$$events[name]!==undefined){return bW.$$events[name];
}bW=bW.superclass;
}return null;
},supportsEvent:function(bX,name){return !!qx.Bootstrap.getEventType(bX,name);
},getByInterface:function(bY,ca){var cb,i,l;

while(bY){if(bY.$$implements){cb=bY.$$flatImplements;

for(i=0,l=cb.length;i<l;i++){if(cb[i]===ca){return bY;
}}}bY=bY.superclass;
}return null;
},hasInterface:function(cc,cd){return !!qx.Bootstrap.getByInterface(cc,cd);
},getMixins:function(ce){var cf=[];

while(ce){if(ce.$$includes){cf.push.apply(cf,ce.$$flatIncludes);
}ce=ce.superclass;
}return cf;
},$$logs:[],debug:function(cg,ch){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(ci,cj){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ck,cl){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cm,cn){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(co){}}});
})();
(function(){var d="-",c="",b="qx.bom.client.Locale",a="android";
qx.Bootstrap.define(b,{statics:{getLocale:function(){var e=qx.bom.client.Locale.__lI();
var f=e.indexOf(d);

if(f!=-1){e=e.substr(0,f);
}return e;
},getVariant:function(){var g=qx.bom.client.Locale.__lI();
var i=c;
var h=g.indexOf(d);

if(h!=-1){i=g.substr(h+1);
}return i;
},__lI:function(){var j=(navigator.userLanguage||navigator.language||c);
if(qx.bom.client.OperatingSystem.getName()==a){var k=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(k){j=k[0];
}}return j.toLowerCase();
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",bb="10.0",ba="10.4",Y="rim_tabletos",X="Darwin",W="2003",V=")",U="iPhone",T="android",S="unix",R="ce",q="7",r="SymbianOS",o="|",p="MacPPC",m="iPod",n="\.",k="Win64",l="linux",u="me",v="Macintosh",D="Android",B="Windows",J="ios",F="vista",N="blackberry",L="(",x="win",Q="Linux",P="BSD",O="iPad",w="X11",z="xp",A="symbian",C="qx.bom.client.OperatingSystem",E="g",G="Win32",K="osx",M="webOS",s="RIM Tablet OS",t="BlackBerry",y="nt4",I="MacIntel",H="webos";
qx.Bootstrap.define(C,{statics:{getName:function(){if(!navigator){return j;
}var bc=navigator.platform||j;
var bd=navigator.userAgent||j;

if(bc.indexOf(B)!=-1||bc.indexOf(G)!=-1||bc.indexOf(k)!=-1){return x;
}else if(bc.indexOf(v)!=-1||bc.indexOf(p)!=-1||bc.indexOf(I)!=-1){return K;
}else if(bd.indexOf(s)!=-1){return Y;
}else if(bd.indexOf(M)!=-1){return H;
}else if(bc.indexOf(m)!=-1||bc.indexOf(U)!=-1||bc.indexOf(O)!=-1){return J;
}else if(bc.indexOf(Q)!=-1){return l;
}else if(bc.indexOf(w)!=-1||bc.indexOf(P)!=-1||bc.indexOf(X)!=-1){return S;
}else if(bc.indexOf(D)!=-1){return T;
}else if(bc.indexOf(r)!=-1){return A;
}else if(bc.indexOf(t)!=-1){return N;
}return j;
},__dn:{"Windows NT 6.1":q,"Windows NT 6.0":F,"Windows NT 5.2":W,"Windows NT 5.1":z,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":y,"Win 9x 4.90":u,"Windows CE":R,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":ba,"Mac OS X 10.4":ba,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":bb,"Mac OS X 10.0":bb},getVersion:function(){var bg=[];

for(var bf in qx.bom.client.OperatingSystem.__dn){bg.push(bf);
}var bh=new RegExp(L+bg.join(o).replace(/\./g,n)+V,E);
var be=bh.exec(navigator.userAgent);

if(be&&be[1]){return qx.bom.client.OperatingSystem.__dn[be[1]];
}return j;
}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
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
},getDataset:function(){return !!document.documentElement.dataset;
}}});
})();
(function(){var r=".",q="function",p="",o="gecko",n="[object Opera]",m="mshtml",l="8.0",k="AppleWebKit/",j="9.0",i="[^\\.0-9]",c="Gecko",h="webkit",f="4.0",b="1.9.0.0",a="opera",e="Version/",d="5.0",g="qx.bom.client.Engine";
qx.Bootstrap.define(g,{statics:{getVersion:function(){var v=window.navigator.userAgent;
var t=p;

if(qx.bom.client.Engine.__bN()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(v)){if(v.indexOf(e)!=-1){var u=v.match(/Version\/(\d+)\.(\d+)/);
t=u[1]+r+u[2].charAt(0)+r+u[2].substring(1,u[2].length);
}else{t=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=p){t+=r+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__bO()){if(/AppleWebKit\/([^ ]+)/.test(v)){t=RegExp.$1;
var w=RegExp(i).exec(t);

if(w){t=t.slice(0,w.index);
}}}else if(qx.bom.client.Engine.__bP()){if(/rv\:([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
}}else if(qx.bom.client.Engine.__bQ()){if(/MSIE\s+([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
if(t<8&&/Trident\/([^\);]+)(\)|;)/.test(v)){if(RegExp.$1==f){t=l;
}else if(RegExp.$1==d){t=j;
}}}}else{var s=window.qxFail;

if(s&&typeof s===q){t=s().FULLVERSION;
}else{t=b;
qx.Bootstrap.warn("Unsupported client: "+v+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return t;
},getName:function(){var name;

if(qx.bom.client.Engine.__bN()){name=a;
}else if(qx.bom.client.Engine.__bO()){name=h;
}else if(qx.bom.client.Engine.__bP()){name=o;
}else if(qx.bom.client.Engine.__bQ()){name=m;
}else{var x=window.qxFail;

if(x&&typeof x===q){name=x().NAME;
}else{name=o;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__bN:function(){return window.opera&&Object.prototype.toString.call(window.opera)==n;
},__bO:function(){return window.navigator.userAgent.indexOf(k)!=-1;
},__bP:function(){return window.controllers&&window.navigator.product===c;
},__bQ:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}}});
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
},getXmlHttpRequest:function(){var q=window.ActiveXObject?(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var g="silverlight",f="wmv",e="quicktime",d="pdf",c="divx",b="mshtml",a="qx.bom.client.Plugin";
qx.Bootstrap.define(a,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__IX:{quicktime:{plugin:["QuickTime"],control:"QuickTimeCheckObject.QuickTimeCheck.1"},wmv:{plugin:["Windows Media"],control:"WMPlayer.OCX.7"},divx:{plugin:["DivX Web Player"],control:"npdivx.DivXBrowserPlugin.1"},silverlight:{plugin:["Silverlight"],control:"AgControl.AgControl"},pdf:{plugin:["Chrome PDF Viewer","Adobe Acrobat"],control:"AcroPDF.PDF"}},getQuicktimeVersion:function(){var h=qx.bom.client.Plugin.__IX[e];
return qx.bom.client.Plugin.__IY(h.control,h.plugin);
},getWindowsMediaVersion:function(){var k=qx.bom.client.Plugin.__IX[f];
return qx.bom.client.Plugin.__IY(k.control,k.plugin);
},getDivXVersion:function(){var l=qx.bom.client.Plugin.__IX[c];
return qx.bom.client.Plugin.__IY(l.control,l.plugin);
},getSilverlightVersion:function(){var m=qx.bom.client.Plugin.__IX[g];
return qx.bom.client.Plugin.__IY(m.control,m.plugin);
},getPdfVersion:function(){var n=qx.bom.client.Plugin.__IX[d];
return qx.bom.client.Plugin.__IY(n.control,n.plugin);
},getQuicktime:function(){var o=qx.bom.client.Plugin.__IX[e];
return qx.bom.client.Plugin.__Ja(o.control,o.plugin);
},getWindowsMedia:function(){var p=qx.bom.client.Plugin.__IX[f];
return qx.bom.client.Plugin.__Ja(p.control,p.plugin);
},getDivX:function(){var q=qx.bom.client.Plugin.__IX[c];
return qx.bom.client.Plugin.__Ja(q.control,q.plugin);
},getSilverlight:function(){var r=qx.bom.client.Plugin.__IX[g];
return qx.bom.client.Plugin.__Ja(r.control,r.plugin);
},getPdf:function(){var s=qx.bom.client.Plugin.__IX[d];
return qx.bom.client.Plugin.__Ja(s.control,s.plugin);
},__IY:function(t,u){var v=qx.bom.client.Plugin.__Ja(t,u);
if(!v){return "";
}if(qx.bom.client.Engine.getName()=="mshtml"){var w=new ActiveXObject(t);

try{var z=w.versionInfo;

if(z!=undefined){return z;
}z=w.version;

if(z!=undefined){return z;
}z=w.settings.version;

if(z!=undefined){return z;
}}catch(B){return "";
}return "";
}else{var A=navigator.plugins;
var y=/([0-9]\.[0-9])/g;

for(var i=0;i<A.length;i++){var x=A[i];

for(var j=0;j<u.length;j++){if(x.name.indexOf(u[j])!==-1){if(y.test(x.name)||y.test(x.description)){return RegExp.$1;
}}}}return "";
}},__Ja:function(C,D){if(qx.bom.client.Engine.getName()==b){var E=window.ActiveXObject;

if(!E){return false;
}
try{new ActiveXObject(C);
}catch(G){return false;
}return true;
}else{var F=navigator.plugins;

if(!F){return false;
}var name;

for(var i=0;i<F.length;i++){name=F[i].name;

for(var j=0;j<D.length;j++){if(name.indexOf(D[j])!==-1){return true;
}}}return false;
}}}});
})();
(function(){var j="mshtml",i="msie",h=")(/| )([0-9]+\.[0-9])",g="",f="(",e="ce",d="CSS1Compat",c="android",b="operamini",a="mobile chrome",z="iemobile",y="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",x="opera mobi",w="Mobile Safari",v="operamobile",u="ie",t="mobile safari",s="IEMobile|Maxthon|MSIE",r="qx.bom.client.Browser",q="opera mini",o="opera",p="Opera Mini|Opera Mobi|Opera",m="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",k="5.0",l="Mobile/";
qx.Bootstrap.define(r,{statics:{getName:function(){var D=navigator.userAgent;
var C=new RegExp(f+qx.bom.client.Browser.__dx+h);
var B=D.match(C);

if(!B){return g;
}var name=B[1].toLowerCase();
var A=qx.bom.client.Engine.getName();

if(A===n){if(name===c){name=a;
}else if(D.indexOf(w)!==-1||D.indexOf(l)!==-1){name=t;
}}else if(A===j){if(name===i){name=u;
if(qx.bom.client.OperatingSystem.getVersion()===e){name=z;
}}}else if(A===o){if(name===x){name=v;
}else if(name===q){name=b;
}}return name;
},getVersion:function(){var H=navigator.userAgent;
var G=new RegExp(f+qx.bom.client.Browser.__dx+h);
var F=H.match(G);

if(!F){return g;
}var name=F[1].toLowerCase();
var E=F[3];
if(H.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==j){E=qx.bom.client.Engine.getVersion();

if(name===i&&qx.bom.client.OperatingSystem.getVersion()==e){E=k;
}}return E;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==j&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}},__dx:{"webkit":m,"gecko":y,"mshtml":s,"opera":p}[qx.bom.client.Engine.getName()]}});
})();
(function(){var k="background",j="div",h="color",g="linear-gradient(0deg, white 0%, red 100%)",f="placeholder",e="content",d="OTextOverflow",c="MozBorderRadius",b="qx.bom.client.Css",a='m11',C="input",B="-ms-linear-gradient(0deg, white 0%, red 100%)",A="-moz-linear-gradient(0deg, white 0%, red 100%)",z="gradient",y="-webkit-linear-gradient(left, white, black)",x="MozBoxShadow",w="rgba(1, 2, 3, 0.5)",v="rgba",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",r='WebKitCSSMatrix',s="WebkitBorderRadius",p="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",q="mshtml",n="WebkitBoxShadow",o="textOverflow",l="boxShadow",m="border";
qx.Bootstrap.define(b,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==q||!qx.bom.client.Browser.getQuirksMode();
return content?e:m;
},getTextOverflow:function(){return o in document.documentElement.style||d in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(C);
return f in i;
},getBorderRadius:function(){return t in document.documentElement.style||c in document.documentElement.style||s in document.documentElement.style;
},getBoxShadow:function(){return l in document.documentElement.style||x in document.documentElement.style||n in document.documentElement.style;
},getTranslate3d:function(){return r in window&&a in new WebKitCSSMatrix();
},getGradients:function(){var D;

try{D=document.createElement(j);
}catch(F){D=document.createElement();
}var E=[p,y,A,u,B,g];

for(var i=0;i<E.length;i++){try{D.style[k]=E[i];

if(D.style[k].indexOf(z)!=-1){return true;
}}catch(G){}}return false;
},getRgba:function(){var H;

try{H=document.createElement(j);
}catch(I){H=document.createElement();
}try{H.style[h]=w;

if(H.style[h].indexOf(v)!=-1){return true;
}}catch(J){}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var e="undefined",d="node.js",c="rhino",b="",a="qx.bom.client.Runtime";
qx.Bootstrap.define(a,{statics:{getName:function(){var name=b;
if(typeof environment!==e){name=c;
}else if(typeof process!==e){name=d;
}else{name=qx.bom.client.Browser.getName();
}return name;
}}});
})();
(function(){var t="$1",s="",r=".",q="Shockwave Flash",p="undefined",o="object",n="mshtml",m=",",l="$version",k="always",d="win",j="ShockwaveFlash.ShockwaveFlash.6",g="qx.bom.client.Flash",c="9.0.151",b="10.0.12",f="ShockwaveFlash.ShockwaveFlash.7",e="ShockwaveFlash.ShockwaveFlash",h="osx",a="6.0.65";
qx.Bootstrap.define(g,{statics:{isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()==n){if(!window.ActiveXObject){return s;
}var w=[0,0,0];
var v=false;

try{var x=new ActiveXObject(f);
}catch(z){try{var x=new ActiveXObject(j);
w=[6,0,21];
x.AllowScriptAccess=k;
}catch(A){if(w[0]==6){v=true;
}}
if(!v){try{x=new ActiveXObject(e);
}catch(B){}}}
if(!v&&typeof x==o){var u=x.GetVariable(l);

if(typeof u!=p){u=u.split(" ")[1].split(m);
w[0]=parseInt(u[0],10);
w[1]=parseInt(u[1],10);
w[2]=parseInt(u[2],10);
}}return w.join(r);
}else{if(!navigator.plugins||typeof navigator.plugins[q]!==o){return s;
}var w=[0,0,0];
var y=navigator.plugins[q].description;

if(typeof y!=p){y=y.replace(/^.*\s+(\S+\s+\S+$)/,t);
w[0]=parseInt(y.replace(/^(.*)\..*$/,t),10);
w[1]=parseInt(y.replace(/^.*\.(.*)\s.*$/,t),10);
w[2]=/r/.test(y)?parseInt(y.replace(/^.*r(.*)$/,t),10):0;
}return w.join(r);
}},getExpressInstall:function(){var D=qx.bom.client.Flash.getVersion();

if(D==s){return false;
}var C=qx.bom.client.OperatingSystem.getName();
return (C==d||C==h)&&qx.bom.client.Flash.__CF(a,D);
},getStrictSecurityModel:function(){var E=qx.bom.client.Flash.getVersion();

if(E==s){return false;
}var F=E.split(r);

if(F[0]<10){return qx.bom.client.Flash.__CF(c,E);
}else{return qx.bom.client.Flash.__CF(b,E);
}},_cachedSupportsVersion:{},__CF:function(G,H){var K=G.split(".");
var J=H||qx.bom.client.Flash.getVersion();
J=J.split(".");

for(var i=0;i<K.length;i++){var I=parseInt(J[i],10)-parseInt(K[i],10);

if(I>0){return true;
}else if(I<0){return false;
}}return true;
}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var m="ipod",l="g",k="xbox",j="pc",i="\.",h="(",g=")",f="iPhone",e="|",d="qx.bom.client.Device",a="wii",c="ipad",b="ds";
qx.Bootstrap.define(d,{statics:{__dn:{"iPod":m,"iPad":c,"iPhone":f,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":a,"Nintendo DS":b,"XBOX":"xbox","Xbox":k},getName:function(){var p=[];

for(var o in this.__dn){p.push(o);
}var q=new RegExp(h+p.join(e).replace(/\./g,i)+g,l);
var n=q.exec(navigator.userAgent);

if(n&&n[1]){return qx.bom.client.Device.__dn[n[1]];
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
(function(){var bu="html.video.ogg",bt="os.version",bs="phonegap.notification",br="browser.name",bq="event.pointer",bp="plugin.gears",bo="io.ssl",bn="css.boxmodel",bm="html.xul",bl="html.classlist",ba="event.touch",Y="io.maxrequests",X="browser.documentmode",W="ecmascript.objectcount",V="plugin.flash.strictsecurity",U="html.audio.mp3",T="locale",S="css.rgba",R="plugin.divx.version",Q="locale.variant",bB="device.name",bC="html.filereader",bz="html.video.webm",bA="os.name",bx="html.storage.local",by="css.borderradius",bv="plugin.silverlight",bw="html.webworker",bD="plugin.flash",bE="html.audio.aif",be="css.translate3d",bd="html.canvas",bg="html.audio",bf="html.xpath",bi="html.audio.ogg",bh="plugin.pdf.version",bk="css.placeholder",bj="html.dataset",bc="plugin.quicktime.version",bb="io.xhr",a="plugin.silverlight.version",b="html.video",c="default",d="plugin.windowsmedia",e="plugin.flash.version",f="html.geolocation",g="html.storage.session",h="html.audio.au",j="plugin.quicktime",k="plugin.windowsmedia.version",bI="engine.name",bH="|",bG="html.video.h264",bF="runtime.name",bM="css.boxshadow",bL="html.audio.wav",bK="browser.version",bJ="plugin.flash.express",bO="browser.quirksmode",bN="phonegap",A="qx.allowUrlSettings",B="css.textoverflow",y="plugin.divx",z="css.gradients",E="engine.version",F="html.vml",C="plugin.pdf",D="html.dataurl",w="html.svg",x="qx.optimization.strings",s="qx.dynlocale",r="qx.propertyDebugLevel",u=":",t="qx.optimization.comments",o="qx.mobile.emulatetouch",n="qx.core.Environment",q="qx.debug.dispose",p="qx.optimization.variables",m="qxenv",l="qx.optimization.variants",K="&",L="qx.allowUrlVariants",M="qx.debug.databinding",N="qx.optimization.basecalls",G="true",H="qx.optimization.privates",I="qx.aspects",J="qx.debug",O="qx.dynamicmousewheel",P="false",v="qx.mobile.nativescroll";
qx.Bootstrap.define(n,{statics:{_checks:{},_asyncChecks:{},__cJ:{},get:function(bP){if(this.__cJ[bP]!=undefined){return this.__cJ[bP];
}var bQ=this._checks[bP];

if(bQ){var bR=bQ();
this.__cJ[bP]=bR;
return bR;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bP+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bS,bT,self){var bV=this;

if(this.__cJ[bS]!=undefined){window.setTimeout(function(){bT.call(self,bV.__cJ[bS]);
},0);
return;
}var bU=this._asyncChecks[bS];

if(bU){bU(function(bW){bV.__cJ[bS]=bW;
bT.call(self,bW);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bS+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bX,bY){return this.__cK(this.get(bX),bY);
},selectAsync:function(ca,cb,self){this.getAsync(ca,function(cc){var cd=this.__cK(ca,cb);
cd.call(self,cc);
},this);
},__cK:function(ce,cf){var ch=cf[ce];

if(cf.hasOwnProperty(ce)){return ch;
}for(var cg in cf){if(cg.indexOf(bH)!=-1){var ci=cg.split(bH);

for(var i=0;i<ci.length;i++){if(ci[i]==ce){return cf[cg];
}}}}
if(cf[c]!==undefined){return cf[c];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+ce+'" ('+(typeof ce)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(cf)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(cj){delete this.__cJ[cj];
},add:function(ck,cl){if(this._checks[ck]==undefined){if(cl instanceof Function){this._checks[ck]=cl;
}else{this._checks[ck]=this.__cN(cl);
}}},addAsync:function(cm,cn){if(this._checks[cm]==undefined){this._asyncChecks[cm]=cn;
}},_initDefaultQxValues:function(){this.add(A,function(){return false;
});
this.add(L,function(){return false;
});
this.add(r,function(){return 0;
});
this.add(J,function(){return true;
});
this.add(I,function(){return false;
});
this.add(s,function(){return true;
});
this.add(o,function(){return false;
});
this.add(v,function(){return false;
});
this.add(O,function(){return true;
});
this.add(M,function(){return false;
});
this.add(q,function(){return false;
});
this.add(N,function(){return false;
});
this.add(t,function(){return false;
});
this.add(H,function(){return false;
});
this.add(x,function(){return false;
});
this.add(p,function(){return false;
});
this.add(l,function(){return false;
});
},__cL:function(){if(qx&&qx.$$environment){for(var cp in qx.$$environment){var co=qx.$$environment[cp];
this._checks[cp]=this.__cN(co);
}}},__cM:function(){if(window.document&&window.document.location){var cq=window.document.location.search.slice(1).split(K);

for(var i=0;i<cq.length;i++){var cs=cq[i].split(u);

if(cs.length!=3||cs[0]!=m){continue;
}var ct=cs[1];
var cr=decodeURIComponent(cs[2]);
if(cr==G){cr=true;
}else if(cr==P){cr=false;
}else if(/^(\d|\.)+$/.test(cr)){cr=parseFloat(cr);
}this._checks[ct]=this.__cN(cr);
}}},__cN:function(cu){return qx.Bootstrap.bind(function(cv){return cv;
},null,cu);
},useCheck:function(cw){return true;
},_initChecksMap:function(){if(this.useCheck(E)){this._checks[E]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(bI)){this._checks[bI]=qx.bom.client.Engine.getName;
}if(this.useCheck(br)){this._checks[br]=qx.bom.client.Browser.getName;
}
if(this.useCheck(bK)){this._checks[bK]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(X)){this._checks[X]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(bO)){this._checks[bO]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(bF)){this._checks[bF]=qx.bom.client.Runtime.getName;
}if(this.useCheck(bB)){this._checks[bB]=qx.bom.client.Device.getName;
}if(this.useCheck(T)){this._checks[T]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(bA)){this._checks[bA]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(bt)){this._checks[bt]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(bp)){this._checks[bp]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck(bc)){this._checks[bc]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck(d)){this._checks[d]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck(k)){this._checks[k]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck(y)){this._checks[y]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck(R)){this._checks[R]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck(bv)){this._checks[bv]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck(bD)){this._checks[bD]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck(e)){this._checks[e]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck(bJ)){this._checks[bJ]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Flash.getStrictSecurityModel;
}
if(this.useCheck(C)){this._checks[C]=qx.bom.client.Plugin.getPdf;
}
if(this.useCheck(bh)){this._checks[bh]=qx.bom.client.Plugin.getPdfVersion;
}if(this.useCheck(Y)){this._checks[Y]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(bo)){this._checks[bo]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(bb)){this._checks[bb]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(ba)){this._checks[ba]=qx.bom.client.Event.getTouch;
}
if(this.useCheck(bq)){this._checks[bq]=qx.bom.client.Event.getPointer;
}if(this.useCheck(W)){this._checks[W]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck(bw)){this._checks[bw]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck(bC)){this._checks[bC]=qx.bom.client.Html.getFileReader;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck(bg)){this._checks[bg]=qx.bom.client.Html.getAudio;
}
if(this.useCheck(bi)){this._checks[bi]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck(U)){this._checks[U]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck(bL)){this._checks[bL]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck(bE)){this._checks[bE]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getVideo;
}
if(this.useCheck(bu)){this._checks[bu]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck(bG)){this._checks[bG]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck(bz)){this._checks[bz]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck(bx)){this._checks[bx]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck(g)){this._checks[g]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck(bl)){this._checks[bl]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(bf)){this._checks[bf]=qx.bom.client.Html.getXPath;
}
if(this.useCheck(bm)){this._checks[bm]=qx.bom.client.Html.getXul;
}
if(this.useCheck(bd)){this._checks[bd]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck(w)){this._checks[w]=qx.bom.client.Html.getSvg;
}
if(this.useCheck(F)){this._checks[F]=qx.bom.client.Html.getVml;
}
if(this.useCheck(D)){this._asyncChecks[D]=qx.bom.client.Html.getDataUrl;
}
if(this.useCheck(bj)){this._checks[bj]=qx.bom.client.Html.getDataset;
}if(this.useCheck(B)){this._checks[B]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck(bk)){this._checks[bk]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck(by)){this._checks[by]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(bM)){this._checks[bM]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(z)){this._checks[z]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(bn)){this._checks[bn]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(be)){this._checks[be]=qx.bom.client.Css.getTranslate3d;
}
if(this.useCheck(S)){this._checks[S]=qx.bom.client.Css.getRgba;
}if(this.useCheck(bN)){this._checks[bN]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(bs)){this._checks[bs]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(cx){cx._initDefaultQxValues();
cx._initChecksMap();
cx.__cL();
if(cx.get(A)===true){cx.__cM();
}}});
})();
(function(){var h="qx.Mixin",g=".prototype",f="constructor",e="Array",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(h,{statics:{define:function(name,j){if(j){if(j.include&&!(qx.Bootstrap.getClass(j.include)===e)){j.include=[j.include];
}var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,f);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+g);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,b);
}}else{var m={};
}m.$$type=a;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(n){var q=this.flatten(n);
var r=q.length;

if(r<2){return true;
}var u={};
var t={};
var s={};
var p;

for(var i=0;i<r;i++){p=q[i];

for(var o in p.events){if(s[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+s[o]+'" in member "'+o+'"!');
}s[o]=p.name;
}
for(var o in p.properties){if(u[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+u[o]+'" in property "'+o+'"!');
}u[o]=p.name;
}
for(var o in p.members){if(t[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+t[o]+'" in member "'+o+'"!');
}t[o]=p.name;
}}return true;
},isCompatible:function(v,w){var x=qx.Bootstrap.getMixins(w);
x.push(v);
return qx.Mixin.checkCompatibility(x);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(y){if(!y){return [];
}var z=y.concat();

for(var i=0,l=y.length;i<l;i++){if(y[i].$$includes){z.push.apply(z,this.flatten(y[i].$$includes));
}}return z;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__ge:null,__gg:function(){}}});
})();
(function(){var j="function",h="Boolean",g="qx.Interface",f="Array",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(g,{statics:{define:function(name,k){if(k){if(k.extend&&!(qx.Bootstrap.getClass(k.extend)===f)){k.extend=[k.extend];
}var m=k.statics?k.statics:{};
if(k.extend){m.$$extends=k.extend;
}
if(k.properties){m.$$properties=k.properties;
}
if(k.members){m.$$members=k.members;
}
if(k.events){m.$$events=k.events;
}}else{var m={};
}m.$$type=c;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
qx.Interface.$$registry[name]=m;
return m;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(n){if(!n){return [];
}var o=n.concat();

for(var i=0,l=n.length;i<l;i++){if(n[i].$$extends){o.push.apply(o,this.flatten(n[i].$$extends));
}}return o;
},__jX:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__jY(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.Bootstrap.hasInterface(q,r);

if(x){p[v]=this.__kc(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__jY:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.Bootstrap.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.Bootstrap.getPropertyDefinition(y,A).check==h;
}return true;
},__ka:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.Bootstrap.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__kb:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.Bootstrap.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__jX(K,N,L,false);
this.__ka(N,L);
this.__kb(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__jX(O.prototype,O,P,Q);
this.__ka(O,P);
this.__kb(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__kc:function(){},__ge:null,__gg:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__ho:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__ho;
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
},addAdvice:function(o,p,q,name){this.__ho.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
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
(function(){var cy=';',cx='computed=this.',cw='=value;',cv='this.',cu="set",ct="setThemed",cs="setRuntime",cr="init",cq='if(this.',cp='delete this.',bz='!==undefined)',by='}',bx="resetThemed",bw='else if(this.',bv="string",bu='return this.',bt="reset",bs="boolean",br="resetRuntime",bq='!==undefined){',cF="",cG="refresh",cD='=true;',cE="this.",cB=";",cC='old=this.',cz="();",cA='else ',cH='if(old===undefined)old=this.',cI='old=computed=this.',bX="return this.",bW="get",ca='(value);',bY="(a[",cc='if(old===computed)return value;',cb='if(old===undefined)old=null;',ce=' of an instance of ',cd=' is not (yet) ready!");',bV="]);",bU='!==inherit){',f='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',g='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',h='value !== null && value.nodeType === 9 && value.documentElement',j='===value)return value;',k='value !== null && value.$$type === "Mixin"',m='return init;',n='var init=this.',o='value !== null && value.nodeType === 1 && value.attributes',p="var parent = this.getLayoutParent();",q="Error in property ",cW='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cV="property",cU='.validate.call(this, value);',cT='qx.core.Assert.assertInstance(value, Date, msg) || true',db='else{',da="if (!parent) return;",cY=" in method ",cX='qx.core.Assert.assertInstance(value, Error, msg) || true',dd='=computed;',dc='Undefined value is not allowed!',P='(backup);',Q="MSIE 6.0",N='if(computed===inherit){',O="inherit",T='Is invalid!',U='if(value===undefined)prop.error(this,2,"',R='var computed, old=this.',S='else if(computed===undefined)',L="': ",M=" of class ",y='value !== null && value.nodeType !== undefined',x='===undefined)return;',A='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',z="')){",u='qx.core.Assert.assertPositiveInteger(value, msg) || true',t='else this.',w='value=this.',v='","',s='if(init==qx.core.Property.$$inherit)init=null;',r='value !== null && value.$$type === "Interface"',ba='var inherit=prop.$$inherit;',bb="', qx.event.type.Data, [computed, old]",bc="var value = parent.",bd="$$useinit_",V='computed=undefined;delete this.',W="(value);",X='Requires exactly one argument!',Y='",value);',be='computed=value;',bf='}else{',I="$$runtime_",H=';}',G="$$user_",F='){',E='qx.core.Assert.assertArray(value, msg) || true',D='if(computed===undefined||computed===inherit){',C='qx.core.Assert.assertPositiveNumber(value, msg) || true',B=".prototype",K="Boolean",J=")}",bg='(computed, old, "',bh='return value;',bi='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bj="if(reg.hasListener(this, '",bk='Does not allow any arguments!',bl=')a[i].',bm="()",bn="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bo='.$$properties.',bp='value !== null && value.$$type === "Theme"',bD="var reg=qx.event.Registration;",bC="())",bB='return null;',bA='qx.core.Assert.assertObject(value, msg) || true',bH='");',bG='qx.core.Assert.assertString(value, msg) || true',bF='var pa=this.getLayoutParent();if(pa)computed=pa.',bE="if (value===undefined) value = parent.",bJ='value !== null && value.$$type === "Class"',bI='qx.core.Assert.assertFunction(value, msg) || true',bQ='!==undefined&&',bR='var computed, old;',bO='var backup=computed;',bP=".",bM="object",bN="$$init_",bK="$$theme_",bL='if(computed===undefined)computed=null;',bS='qx.core.Assert.assertMap(value, msg) || true',bT="qx.aspects",ci='qx.core.Assert.assertNumber(value, msg) || true',ch='if((computed===undefined||computed===inherit)&&',ck="reg.fireEvent(this, '",cj='Null value is not allowed!',cm='qx.core.Assert.assertInteger(value, msg) || true',cl="value",co="rv:1.8.1",cn="shorthand",cg='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cf='value !== null && value.type !== undefined',cP='value !== null && value.document',cQ='throw new Error("Property ',cR="(!this.",cS='qx.core.Assert.assertBoolean(value, msg) || true',cL='if(a[i].',cM="toggle",cN="$$inherit_",cO='var prop=qx.core.Property;',cJ=" with incoming value '",cK="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",e='if(computed===undefined||computed==inherit)computed=null;',d="qx.core.Property",c="is",b='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(d,{statics:{__fH:{"Boolean":cS,"String":bG,"Number":ci,"Integer":cm,"PositiveNumber":C,"PositiveInteger":u,"Error":cX,"RegExp":cg,"Object":bA,"Array":E,"Map":bS,"Function":bI,"Date":cT,"Node":y,"Element":o,"Document":h,"Window":cP,"Event":cf,"Class":bJ,"Mixin":k,"Interface":r,"Theme":bp,"Color":f,"Decorator":A,"Font":g},__fI:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:O,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bv,dereference:bs,inheritable:bs,nullable:bs,themeable:bs,refine:bs,init:null,apply:bv,event:bv,check:null,transform:bv,deferredInit:bs,validate:null},$$allowedGroupKeys:{name:bv,group:bM,mode:bv,themeable:bs},$$inheritable:{},__fJ:function(de){var df=this.__fK(de);

if(!df.length){var dg=function(){};
}else{dg=this.__fL(df);
}de.prototype.$$refreshInheritables=dg;
},__fK:function(dh){var dj=[];

while(dh){var di=dh.$$properties;

if(di){for(var name in this.$$inheritable){if(di[name]&&di[name].inheritable){dj.push(name);
}}}dh=dh.superclass;
}return dj;
},__fL:function(dk){var dp=this.$$store.inherit;
var dn=this.$$store.init;
var dm=this.$$method.refresh;
var dl=[p,da];

for(var i=0,l=dk.length;i<l;i++){var name=dk[i];
dl.push(bc,dp[name],cB,bE,dn[name],cB,cE,dm[name],W);
}return new Function(dl.join(cF));
},attachRefreshInheritables:function(dq){dq.prototype.$$refreshInheritables=function(){qx.core.Property.__fJ(dq);
return this.$$refreshInheritables();
};
},attachMethods:function(dr,name,ds){ds.group?this.__fM(dr,ds,name):this.__fN(dr,ds,name);
},__fM:function(dt,du,name){var dB=qx.Bootstrap.firstUp(name);
var dA=dt.prototype;
var dC=du.themeable===true;
var dD=[];
var dx=[];

if(dC){var dv=[];
var dz=[];
}var dy=bn;
dD.push(dy);

if(dC){dv.push(dy);
}
if(du.mode==cn){var dw=cK;
dD.push(dw);

if(dC){dv.push(dw);
}}
for(var i=0,a=du.group,l=a.length;i<l;i++){dD.push(cE,this.$$method.set[a[i]],bY,i,bV);
dx.push(cE,this.$$method.reset[a[i]],cz);

if(dC){dv.push(cE,this.$$method.setThemed[a[i]],bY,i,bV);
dz.push(cE,this.$$method.resetThemed[a[i]],cz);
}}this.$$method.set[name]=cu+dB;
dA[this.$$method.set[name]]=new Function(dD.join(cF));
this.$$method.reset[name]=bt+dB;
dA[this.$$method.reset[name]]=new Function(dx.join(cF));

if(dC){this.$$method.setThemed[name]=ct+dB;
dA[this.$$method.setThemed[name]]=new Function(dv.join(cF));
this.$$method.resetThemed[name]=bx+dB;
dA[this.$$method.resetThemed[name]]=new Function(dz.join(cF));
}},__fN:function(dE,dF,name){var dH=qx.Bootstrap.firstUp(name);
var dJ=dE.prototype;
if(dF.dereference===undefined&&typeof dF.check===bv){dF.dereference=this.__fO(dF.check);
}var dI=this.$$method;
var dG=this.$$store;
dG.runtime[name]=I+name;
dG.user[name]=G+name;
dG.theme[name]=bK+name;
dG.init[name]=bN+name;
dG.inherit[name]=cN+name;
dG.useinit[name]=bd+name;
dI.get[name]=bW+dH;
dJ[dI.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dE,name,bW);
};
dI.set[name]=cu+dH;
dJ[dI.set[name]]=function(dK){return qx.core.Property.executeOptimizedSetter(this,dE,name,cu,arguments);
};
dI.reset[name]=bt+dH;
dJ[dI.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dE,name,bt);
};

if(dF.inheritable||dF.apply||dF.event||dF.deferredInit){dI.init[name]=cr+dH;
dJ[dI.init[name]]=function(dL){return qx.core.Property.executeOptimizedSetter(this,dE,name,cr,arguments);
};
}
if(dF.inheritable){dI.refresh[name]=cG+dH;
dJ[dI.refresh[name]]=function(dM){return qx.core.Property.executeOptimizedSetter(this,dE,name,cG,arguments);
};
}dI.setRuntime[name]=cs+dH;
dJ[dI.setRuntime[name]]=function(dN){return qx.core.Property.executeOptimizedSetter(this,dE,name,cs,arguments);
};
dI.resetRuntime[name]=br+dH;
dJ[dI.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dE,name,br);
};

if(dF.themeable){dI.setThemed[name]=ct+dH;
dJ[dI.setThemed[name]]=function(dO){return qx.core.Property.executeOptimizedSetter(this,dE,name,ct,arguments);
};
dI.resetThemed[name]=bx+dH;
dJ[dI.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dE,name,bx);
};
}
if(dF.check===K){dJ[cM+dH]=new Function(bX+dI.set[name]+cR+dI.get[name]+bC);
dJ[c+dH]=new Function(bX+dI.get[name]+bm);
}},__fO:function(dP){return !!this.__fI[dP];
},__fP:function(dQ){return this.__fI[dQ]||qx.Bootstrap.classIsDefined(dQ)||(qx.Interface&&qx.Interface.isDefined(dQ));
},__fQ:{0:b,1:X,2:dc,3:bk,4:cj,5:T},error:function(dR,dS,dT,dU,dV){var dW=dR.constructor.classname;
var dX=q+dT+M+dW+cY+this.$$method[dU][dT]+cJ+dV+L;
throw new Error(dX+(this.__fQ[dS]||"Unknown reason: "+dS));
},__fR:function(dY,ea,name,eb,ec,ed){var ee=this.$$method[eb][name];
{ea[ee]=new Function(cl,ec.join(cF));
};
if(qx.core.Environment.get(bT)){ea[ee]=qx.core.Aspect.wrap(dY.classname+bP+ee,ea[ee],cV);
}qx.Bootstrap.setDisplayName(ea[ee],dY.classname+B,ee);
if(ed===undefined){return dY[ee]();
}else{return dY[ee](ed[0]);
}},executeOptimizedGetter:function(ef,eg,name,eh){var ej=eg.$$properties[name];
var el=eg.prototype;
var ei=[];
var ek=this.$$store;
ei.push(cq,ek.runtime[name],bz);
ei.push(bu,ek.runtime[name],cy);

if(ej.inheritable){ei.push(bw,ek.inherit[name],bz);
ei.push(bu,ek.inherit[name],cy);
ei.push(cA);
}ei.push(cq,ek.user[name],bz);
ei.push(bu,ek.user[name],cy);

if(ej.themeable){ei.push(bw,ek.theme[name],bz);
ei.push(bu,ek.theme[name],cy);
}
if(ej.deferredInit&&ej.init===undefined){ei.push(bw,ek.init[name],bz);
ei.push(bu,ek.init[name],cy);
}ei.push(cA);

if(ej.init!==undefined){if(ej.inheritable){ei.push(n,ek.init[name],cy);

if(ej.nullable){ei.push(s);
}else if(ej.init!==undefined){ei.push(bu,ek.init[name],cy);
}else{ei.push(bi,name,ce,eg.classname,cd);
}ei.push(m);
}else{ei.push(bu,ek.init[name],cy);
}}else if(ej.inheritable||ej.nullable){ei.push(bB);
}else{ei.push(cQ,name,ce,eg.classname,cd);
}return this.__fR(ef,el,name,eh,ei);
},executeOptimizedSetter:function(em,en,name,eo,ep){var eu=en.$$properties[name];
var et=en.prototype;
var er=[];
var eq=eo===cu||eo===ct||eo===cs||(eo===cr&&eu.init===undefined);
var es=eu.apply||eu.event||eu.inheritable;
var ev=this.__fS(eo,name);
this.__fT(er,eu,name,eo,eq);

if(eq){this.__fU(er,en,eu,name);
}
if(es){this.__fV(er,eq,ev,eo);
}
if(eu.inheritable){er.push(ba);
}
if(!es){this.__fX(er,name,eo,eq);
}else{this.__fY(er,eu,name,eo,eq);
}
if(eu.inheritable){this.__ga(er,eu,name,eo);
}else if(es){this.__gb(er,eu,name,eo);
}
if(es){this.__gc(er,eu,name);
if(eu.inheritable&&et._getChildren){this.__gd(er,name);
}}if(eq){er.push(bh);
}return this.__fR(em,et,name,eo,er,ep);
},__fS:function(ew,name){if(ew===cs||ew===br){var ex=this.$$store.runtime[name];
}else if(ew===ct||ew===bx){ex=this.$$store.theme[name];
}else if(ew===cr){ex=this.$$store.init[name];
}else{ex=this.$$store.user[name];
}return ex;
},__fT:function(ey,ez,name,eA,eB){{if(!ez.nullable||ez.check||ez.inheritable){ey.push(cO);
}if(eA===cu){ey.push(U,name,v,eA,Y);
}};
},__fU:function(eC,eD,eE,name){if(eE.transform){eC.push(w,eE.transform,ca);
}if(eE.validate){if(typeof eE.validate===bv){eC.push(cv,eE.validate,ca);
}else if(eE.validate instanceof Function){eC.push(eD.classname,bo,name);
eC.push(cU);
}}},__fV:function(eF,eG,eH,eI){var eJ=(eI===bt||eI===bx||eI===br);

if(eG){eF.push(cq,eH,j);
}else if(eJ){eF.push(cq,eH,x);
}},__fW:undefined,__fX:function(eK,name,eL,eM){if(eL===cs){eK.push(cv,this.$$store.runtime[name],cw);
}else if(eL===br){eK.push(cq,this.$$store.runtime[name],bz);
eK.push(cp,this.$$store.runtime[name],cy);
}else if(eL===cu){eK.push(cv,this.$$store.user[name],cw);
}else if(eL===bt){eK.push(cq,this.$$store.user[name],bz);
eK.push(cp,this.$$store.user[name],cy);
}else if(eL===ct){eK.push(cv,this.$$store.theme[name],cw);
}else if(eL===bx){eK.push(cq,this.$$store.theme[name],bz);
eK.push(cp,this.$$store.theme[name],cy);
}else if(eL===cr&&eM){eK.push(cv,this.$$store.init[name],cw);
}},__fY:function(eN,eO,name,eP,eQ){if(eO.inheritable){eN.push(R,this.$$store.inherit[name],cy);
}else{eN.push(bR);
}eN.push(cq,this.$$store.runtime[name],bq);

if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eP===br){eN.push(cp,this.$$store.runtime[name],cy);
eN.push(cq,this.$$store.user[name],bz);
eN.push(cx,this.$$store.user[name],cy);
eN.push(bw,this.$$store.theme[name],bz);
eN.push(cx,this.$$store.theme[name],cy);
eN.push(bw,this.$$store.init[name],bq);
eN.push(cx,this.$$store.init[name],cy);
eN.push(cv,this.$$store.useinit[name],cD);
eN.push(by);
}else{eN.push(cI,this.$$store.runtime[name],cy);
if(eP===cu){eN.push(cv,this.$$store.user[name],cw);
}else if(eP===bt){eN.push(cp,this.$$store.user[name],cy);
}else if(eP===ct){eN.push(cv,this.$$store.theme[name],cw);
}else if(eP===bx){eN.push(cp,this.$$store.theme[name],cy);
}else if(eP===cr&&eQ){eN.push(cv,this.$$store.init[name],cw);
}}eN.push(by);
eN.push(bw,this.$$store.user[name],bq);

if(eP===cu){if(!eO.inheritable){eN.push(cC,this.$$store.user[name],cy);
}eN.push(cx,this.$$store.user[name],cw);
}else if(eP===bt){if(!eO.inheritable){eN.push(cC,this.$$store.user[name],cy);
}eN.push(cp,this.$$store.user[name],cy);
eN.push(cq,this.$$store.runtime[name],bz);
eN.push(cx,this.$$store.runtime[name],cy);
eN.push(cq,this.$$store.theme[name],bz);
eN.push(cx,this.$$store.theme[name],cy);
eN.push(bw,this.$$store.init[name],bq);
eN.push(cx,this.$$store.init[name],cy);
eN.push(cv,this.$$store.useinit[name],cD);
eN.push(by);
}else{if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eO.inheritable){eN.push(cx,this.$$store.user[name],cy);
}else{eN.push(cI,this.$$store.user[name],cy);
}if(eP===ct){eN.push(cv,this.$$store.theme[name],cw);
}else if(eP===bx){eN.push(cp,this.$$store.theme[name],cy);
}else if(eP===cr&&eQ){eN.push(cv,this.$$store.init[name],cw);
}}eN.push(by);
if(eO.themeable){eN.push(bw,this.$$store.theme[name],bq);

if(!eO.inheritable){eN.push(cC,this.$$store.theme[name],cy);
}
if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eP===cu){eN.push(cx,this.$$store.user[name],cw);
}else if(eP===ct){eN.push(cx,this.$$store.theme[name],cw);
}else if(eP===bx){eN.push(cp,this.$$store.theme[name],cy);
eN.push(cq,this.$$store.init[name],bq);
eN.push(cx,this.$$store.init[name],cy);
eN.push(cv,this.$$store.useinit[name],cD);
eN.push(by);
}else if(eP===cr){if(eQ){eN.push(cv,this.$$store.init[name],cw);
}eN.push(cx,this.$$store.theme[name],cy);
}else if(eP===cG){eN.push(cx,this.$$store.theme[name],cy);
}eN.push(by);
}eN.push(bw,this.$$store.useinit[name],F);

if(!eO.inheritable){eN.push(cC,this.$$store.init[name],cy);
}
if(eP===cr){if(eQ){eN.push(cx,this.$$store.init[name],cw);
}else{eN.push(cx,this.$$store.init[name],cy);
}}else if(eP===cu||eP===cs||eP===ct||eP===cG){eN.push(cp,this.$$store.useinit[name],cy);

if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eP===cu){eN.push(cx,this.$$store.user[name],cw);
}else if(eP===ct){eN.push(cx,this.$$store.theme[name],cw);
}else if(eP===cG){eN.push(cx,this.$$store.init[name],cy);
}}eN.push(by);
if(eP===cu||eP===cs||eP===ct||eP===cr){eN.push(db);

if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eP===cu){eN.push(cx,this.$$store.user[name],cw);
}else if(eP===ct){eN.push(cx,this.$$store.theme[name],cw);
}else if(eP===cr){if(eQ){eN.push(cx,this.$$store.init[name],cw);
}else{eN.push(cx,this.$$store.init[name],cy);
}eN.push(cv,this.$$store.useinit[name],cD);
}eN.push(by);
}},__ga:function(eR,eS,name,eT){eR.push(D);

if(eT===cG){eR.push(be);
}else{eR.push(bF,this.$$store.inherit[name],cy);
}eR.push(ch);
eR.push(cv,this.$$store.init[name],bQ);
eR.push(cv,this.$$store.init[name],bU);
eR.push(cx,this.$$store.init[name],cy);
eR.push(cv,this.$$store.useinit[name],cD);
eR.push(bf);
eR.push(cp,this.$$store.useinit[name],H);
eR.push(by);
eR.push(cc);
eR.push(N);
eR.push(V,this.$$store.inherit[name],cy);
eR.push(by);
eR.push(S);
eR.push(cp,this.$$store.inherit[name],cy);
eR.push(t,this.$$store.inherit[name],dd);
eR.push(bO);
if(eS.init!==undefined&&eT!==cr){eR.push(cH,this.$$store.init[name],cB);
}else{eR.push(cb);
}eR.push(e);
},__gb:function(eU,eV,name,eW){if(eW!==cu&&eW!==cs&&eW!==ct){eU.push(bL);
}eU.push(cc);
if(eV.init!==undefined&&eW!==cr){eU.push(cH,this.$$store.init[name],cB);
}else{eU.push(cb);
}},__gc:function(eX,eY,name){if(eY.apply){eX.push(cv,eY.apply,bg,name,bH);
}if(eY.event){eX.push(bD,bj,eY.event,z,ck,eY.event,bb,J);
}},__gd:function(fa,name){fa.push(cW);
fa.push(cL,this.$$method.refresh[name],bl,this.$$method.refresh[name],P);
fa.push(by);
}},defer:function(fb){var fd=navigator.userAgent.indexOf(Q)!=-1;
var fc=navigator.userAgent.indexOf(co)!=-1;
if(fd||fc){fb.__fO=fb.__fP;
}}});
})();
(function(){var u="qx.aspects",t=".",s="static",r="constructor",q="Array",p="[Class ",o="]",n="toString",m="$$init_",k=".prototype",d="destructor",j="extend",g="Class",c="destruct",b="qx.Class",f="singleton",e="member",h="qx.event.type.Data";
qx.Bootstrap.define(b,{statics:{define:function(name,v){if(!v){var v={};
}if(v.include&&!(qx.Bootstrap.getClass(v.include)===q)){v.include=[v.include];
}if(v.implement&&!(qx.Bootstrap.getClass(v.implement)===q)){v.implement=[v.implement];
}var w=false;

if(!v.hasOwnProperty(j)&&!v.type){v.type=s;
w=true;
}var x=this.__gi(name,v.type,v.extend,v.statics,v.construct,v.destruct,v.include);
if(v.extend){if(v.properties){this.__gk(x,v.properties,true);
}if(v.members){this.__gm(x,v.members,true,true,false);
}if(v.events){this.__gj(x,v.events,true);
}if(v.include){for(var i=0,l=v.include.length;i<l;i++){this.__gq(x,v.include[i],false);
}}}if(v.environment){for(var y in v.environment){qx.core.Environment.add(y,v.environment[y]);
}}if(v.implement){for(var i=0,l=v.implement.length;i<l;i++){this.__go(x,v.implement[i]);
}}if(v.defer){v.defer.self=x;
v.defer(x,x.prototype,{add:function(name,z){var A={};
A[name]=z;
qx.Class.__gk(x,A,true);
}});
}return x;
},undefine:function(name){delete this.$$registry[name];
var B=name.split(t);
var D=[window];

for(var i=0;i<B.length;i++){D.push(D[i][B[i]]);
}for(var i=D.length-1;i>=1;i--){var C=D[i];
var parent=D[i-1];

if(qx.Bootstrap.isFunction(C)||qx.Bootstrap.objectGetLength(C)===0){delete parent[B[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(E,F){qx.Class.__gq(E,F,false);
},patch:function(G,H){qx.Class.__gq(G,H,true);
},isSubClassOf:function(I,J){if(!I){return false;
}
if(I==J){return true;
}
if(I.prototype instanceof J){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(K){var L=[];

while(K){if(K.$$properties){L.push.apply(L,qx.Bootstrap.getKeys(K.$$properties));
}K=K.superclass;
}return L;
},getByProperty:function(M,name){while(M){if(M.$$properties&&M.$$properties[name]){return M;
}M=M.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(N,O){return N.$$includes&&N.$$includes.indexOf(O)!==-1;
},getByMixin:function(P,Q){var R,i,l;

while(P){if(P.$$includes){R=P.$$flatIncludes;

for(i=0,l=R.length;i<l;i++){if(R[i]===Q){return P;
}}}P=P.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(S,T){return !!this.getByMixin(S,T);
},hasOwnInterface:function(U,V){return U.$$implements&&U.$$implements.indexOf(V)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(W){var X=[];

while(W){if(W.$$implements){X.push.apply(X,W.$$flatImplements);
}W=W.superclass;
}return X;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(Y,ba){var bb=Y.constructor;

if(this.hasInterface(bb,ba)){return true;
}
try{qx.Interface.assertObject(Y,ba);
return true;
}catch(bc){}
try{qx.Interface.assert(bb,ba,false);
return true;
}catch(bd){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return p+this.classname+o;
},$$registry:qx.Bootstrap.$$registry,__ge:null,__gf:null,__gg:function(){},__gh:function(){},__gi:function(name,be,bf,bg,bh,bi,bj){var bm;

if(!bf&&qx.core.Environment.get(u)==false){bm=bg||{};
qx.Bootstrap.setDisplayNames(bm,name);
}else{var bm={};

if(bf){if(!bh){bh=this.__gr();
}
if(this.__gt(bf,bj)){bm=this.__gu(bh,name,be);
}else{bm=bh;
}if(be===f){bm.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bh,name,r);
}if(bg){qx.Bootstrap.setDisplayNames(bg,name);
var bn;

for(var i=0,a=qx.Bootstrap.getKeys(bg),l=a.length;i<l;i++){bn=a[i];
var bk=bg[bn];

if(qx.core.Environment.get(u)){if(bk instanceof Function){bk=qx.core.Aspect.wrap(name+t+bn,bk,s);
}bm[bn]=bk;
}else{bm[bn]=bk;
}}}}var bl=qx.Bootstrap.createNamespace(name,bm);
bm.name=bm.classname=name;
bm.basename=bl;
bm.$$type=g;

if(be){bm.$$classtype=be;
}if(!bm.hasOwnProperty(n)){bm.toString=this.genericToString;
}
if(bf){qx.Bootstrap.extendClass(bm,bh,bf,name,bl);
if(bi){if(qx.core.Environment.get(u)){bi=qx.core.Aspect.wrap(name,bi,d);
}bm.$$destructor=bi;
qx.Bootstrap.setDisplayName(bi,name,c);
}}this.$$registry[name]=bm;
return bm;
},__gj:function(bo,bp,bq){var br,br;

if(bo.$$events){for(var br in bp){bo.$$events[br]=bp[br];
}}else{bo.$$events=bp;
}},__gk:function(bs,bt,bu){var bv;

if(bu===undefined){bu=false;
}var bw=bs.prototype;

for(var name in bt){bv=bt[name];
bv.name=name;
if(!bv.refine){if(bs.$$properties===undefined){bs.$$properties={};
}bs.$$properties[name]=bv;
}if(bv.init!==undefined){bs.prototype[m+name]=bv.init;
}if(bv.event!==undefined){var event={};
event[bv.event]=h;
this.__gj(bs,event,bu);
}if(bv.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bw.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bs);
}}
if(!bv.refine){qx.core.Property.attachMethods(bs,name,bv);
}}},__gl:null,__gm:function(bx,by,bz,bA,bB){var bC=bx.prototype;
var bE,bD;
qx.Bootstrap.setDisplayNames(by,bx.classname+k);

for(var i=0,a=qx.Bootstrap.getKeys(by),l=a.length;i<l;i++){bE=a[i];
bD=by[bE];
if(bA!==false&&bD instanceof Function&&bD.$$type==null){if(bB==true){bD=this.__gn(bD,bC[bE]);
}else{if(bC[bE]){bD.base=bC[bE];
}bD.self=bx;
}
if(qx.core.Environment.get(u)){bD=qx.core.Aspect.wrap(bx.classname+t+bE,bD,e);
}}bC[bE]=bD;
}},__gn:function(bF,bG){if(bG){return function(){var bI=bF.base;
bF.base=bG;
var bH=bF.apply(this,arguments);
bF.base=bI;
return bH;
};
}else{return bF;
}},__go:function(bJ,bK){var bL=qx.Interface.flatten([bK]);

if(bJ.$$implements){bJ.$$implements.push(bK);
bJ.$$flatImplements.push.apply(bJ.$$flatImplements,bL);
}else{bJ.$$implements=[bK];
bJ.$$flatImplements=bL;
}},__gp:function(bM){var name=bM.classname;
var bN=this.__gu(bM,name,bM.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bM),l=a.length;i<l;i++){bO=a[i];
bN[bO]=bM[bO];
}bN.prototype=bM.prototype;
var bQ=bM.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bQ),l=a.length;i<l;i++){bO=a[i];
var bR=bQ[bO];
if(bR&&bR.self==bM){bR.self=bN;
}}for(var bO in this.$$registry){var bP=this.$$registry[bO];

if(!bP){continue;
}
if(bP.base==bM){bP.base=bN;
}
if(bP.superclass==bM){bP.superclass=bN;
}
if(bP.$$original){if(bP.$$original.base==bM){bP.$$original.base=bN;
}
if(bP.$$original.superclass==bM){bP.$$original.superclass=bN;
}}}qx.Bootstrap.createNamespace(name,bN);
this.$$registry[name]=bN;
return bN;
},__gq:function(bS,bT,bU){if(this.hasMixin(bS,bT)){return;
}var bX=bS.$$original;

if(bT.$$constructor&&!bX){bS=this.__gp(bS);
}var bW=qx.Mixin.flatten([bT]);
var bV;

for(var i=0,l=bW.length;i<l;i++){bV=bW[i];
if(bV.$$events){this.__gj(bS,bV.$$events,bU);
}if(bV.$$properties){this.__gk(bS,bV.$$properties,bU);
}if(bV.$$members){this.__gm(bS,bV.$$members,bU,bU,bU);
}}if(bS.$$includes){bS.$$includes.push(bT);
bS.$$flatIncludes.push.apply(bS.$$flatIncludes,bW);
}else{bS.$$includes=[bT];
bS.$$flatIncludes=bW;
}},__gr:function(){function bY(){bY.base.apply(this,arguments);
}return bY;
},__gs:function(){return function(){};
},__gt:function(ca,cb){if(ca&&ca.$$includes){var cc=ca.$$flatIncludes;

for(var i=0,l=cc.length;i<l;i++){if(cc[i].$$constructor){return true;
}}}if(cb){var cd=qx.Mixin.flatten(cb);

for(var i=0,l=cd.length;i<l;i++){if(cd[i].$$constructor){return true;
}}}return false;
},__gu:function(ce,name,cf){var ch=function(){var ck=ch;
var cj=ck.$$original.apply(this,arguments);
if(ck.$$includes){var ci=ck.$$flatIncludes;

for(var i=0,l=ci.length;i<l;i++){if(ci[i].$$constructor){ci[i].$$constructor.apply(this,arguments);
}}}return cj;
};

if(qx.core.Environment.get(u)){var cg=qx.core.Aspect.wrap(name,ch,r);
ch.$$original=ce;
ch.constructor=cg;
ch=cg;
}ch.$$original=ce;
ce.wrapper=ch;
return ch;
}},defer:function(){if(qx.core.Environment.get(u)){for(var cl in qx.Bootstrap.$$registry){var cm=qx.Bootstrap.$$registry[cl];

for(var cn in cm){if(cm[cn] instanceof Function){cm[cn]=qx.core.Aspect.wrap(cl+t+cn,cm[cn],s);
}}}}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__hh:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__hi:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__dl:function(){var L=qx.lang.Generics.__hh;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__hi(N,O);
}}}}},defer:function(Q){Q.__dl();
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",F="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",w="qx.data.SingleValueBinding",u="Binding property ",v="Binding from '",s="PositiveNumber",t="PositiveInteger",q="Binding does not exist!",r=").",n="Date",p=" not possible: No event available. ";
qx.Class.define(w,{statics:{__kd:{},bind:function(G,H,I,J,K){var V=this.__kf(G,H,I,J,K);
var Q=H.split(d);
var M=this.__kl(Q);
var U=[];
var R=[];
var S=[];
var O=[];
var P=G;
try{for(var i=0;i<Q.length;i++){if(M[i]!==l){O.push(g);
}else{O.push(this.__kg(P,Q[i]));
}U[i]=P;
if(i==Q.length-1){if(M[i]!==l){var ba=M[i]===h?P.length-1:M[i];
var L=P.getItem(ba);
this.__kk(L,I,J,K,G);
S[i]=this.__km(P,O[i],I,J,K,M[i]);
}else{if(Q[i]!=null&&P[m+qx.lang.String.firstUp(Q[i])]!=null){var L=P[m+qx.lang.String.firstUp(Q[i])]();
this.__kk(L,I,J,K,G);
}S[i]=this.__km(P,O[i],I,J,K);
}}else{var W={index:i,propertyNames:Q,sources:U,listenerIds:S,arrayIndexValues:M,targetObject:I,targetPropertyChain:J,options:K,listeners:R};
var T=qx.lang.Function.bind(this.__ke,this,W);
R.push(T);
S[i]=P.addListener(O[i],T);
}if(P[m+qx.lang.String.firstUp(Q[i])]==null){P=null;
}else if(M[i]!==l){P=P[m+qx.lang.String.firstUp(Q[i])](M[i]);
}else{P=P[m+qx.lang.String.firstUp(Q[i])]();
}
if(!P){break;
}}}catch(bb){for(var i=0;i<U.length;i++){if(U[i]&&S[i]){U[i].removeListenerById(S[i]);
}}var Y=V.targets;
var N=V.listenerIds[i];
for(var i=0;i<Y.length;i++){if(Y[i]&&N[i]){Y[i].removeListenerById(N[i]);
}}throw bb;
}var X={type:E,listenerIds:S,sources:U,targetListenerIds:V.listenerIds,targets:V.targets};
this.__kn(X,G,H,I,J);
return X;
},__ke:function(bc){if(bc.options&&bc.options.onUpdate){bc.options.onUpdate(bc.sources[bc.index],bc.targetObject);
}for(var j=bc.index+1;j<bc.propertyNames.length;j++){var bg=bc.sources[j];
bc.sources[j]=null;

if(!bg){continue;
}bg.removeListenerById(bc.listenerIds[j]);
}var bg=bc.sources[bc.index];
for(var j=bc.index+1;j<bc.propertyNames.length;j++){if(bc.arrayIndexValues[j-1]!==l){bg=bg[m+qx.lang.String.firstUp(bc.propertyNames[j-1])](bc.arrayIndexValues[j-1]);
}else{bg=bg[m+qx.lang.String.firstUp(bc.propertyNames[j-1])]();
}bc.sources[j]=bg;
if(!bg){this.__kh(bc.targetObject,bc.targetPropertyChain);
break;
}if(j==bc.propertyNames.length-1){if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bh=bc.arrayIndexValues[j]===h?bg.length-1:bc.arrayIndexValues[j];
var be=bg.getItem(bh);
this.__kk(be,bc.targetObject,bc.targetPropertyChain,bc.options,bc.sources[bc.index]);
bc.listenerIds[j]=this.__km(bg,g,bc.targetObject,bc.targetPropertyChain,bc.options,bc.arrayIndexValues[j]);
}else{if(bc.propertyNames[j]!=null&&bg[m+qx.lang.String.firstUp(bc.propertyNames[j])]!=null){var be=bg[m+qx.lang.String.firstUp(bc.propertyNames[j])]();
this.__kk(be,bc.targetObject,bc.targetPropertyChain,bc.options,bc.sources[bc.index]);
}var bf=this.__kg(bg,bc.propertyNames[j]);
bc.listenerIds[j]=this.__km(bg,bf,bc.targetObject,bc.targetPropertyChain,bc.options);
}}else{if(bc.listeners[j]==null){var bd=qx.lang.Function.bind(this.__ke,this,bc);
bc.listeners.push(bd);
}if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bf=g;
}else{var bf=this.__kg(bg,bc.propertyNames[j]);
}bc.listenerIds[j]=bg.addListener(bf,bc.listeners[j]);
}}},__kf:function(bi,bj,bk,bl,bm){var bq=bl.split(d);
var bo=this.__kl(bq);
var bv=[];
var bu=[];
var bs=[];
var br=[];
var bp=bk;
for(var i=0;i<bq.length-1;i++){if(bo[i]!==l){br.push(g);
}else{try{br.push(this.__kg(bp,bq[i]));
}catch(e){break;
}}bv[i]=bp;
var bt=function(){for(var j=i+1;j<bq.length-1;j++){var by=bv[j];
bv[j]=null;

if(!by){continue;
}by.removeListenerById(bs[j]);
}var by=bv[i];
for(var j=i+1;j<bq.length-1;j++){var bw=qx.lang.String.firstUp(bq[j-1]);
if(bo[j-1]!==l){var bz=bo[j-1]===h?by.getLength()-1:bo[j-1];
by=by[m+bw](bz);
}else{by=by[m+bw]();
}bv[j]=by;
if(bu[j]==null){bu.push(bt);
}if(qx.Class.implementsInterface(by,qx.data.IListData)){var bx=g;
}else{try{var bx=qx.data.SingleValueBinding.__kg(by,bq[j]);
}catch(e){break;
}}bs[j]=by.addListener(bx,bu[j]);
}qx.data.SingleValueBinding.updateTarget(bi,bj,bk,bl,bm);
};
bu.push(bt);
bs[i]=bp.addListener(br[i],bt);
var bn=qx.lang.String.firstUp(bq[i]);
if(bp[m+bn]==null){bp=null;
}else if(bo[i]!==l){bp=bp[m+bn](bo[i]);
}else{bp=bp[m+bn]();
}
if(!bp){break;
}}return {listenerIds:bs,targets:bv};
},updateTarget:function(bA,bB,bC,bD,bE){var bF=this.getValueFromObject(bA,bB);
bF=qx.data.SingleValueBinding.__ko(bF,bC,bD,bE,bA);
this.__ki(bC,bD,bF);
},getValueFromObject:function(o,bG){var bK=this.__kj(o,bG);
var bI;

if(bK!=null){var bM=bG.substring(bG.lastIndexOf(d)+1,bG.length);
if(bM.charAt(bM.length-1)==f){var bH=bM.substring(bM.lastIndexOf(k)+1,bM.length-1);
var bJ=bM.substring(0,bM.lastIndexOf(k));
var bL=bK[m+qx.lang.String.firstUp(bJ)]();

if(bH==h){bH=bL.length-1;
}
if(bL!=null){bI=bL.getItem(bH);
}}else{bI=bK[m+qx.lang.String.firstUp(bM)]();
}}return bI;
},__kg:function(bN,bO){var bP=this.__kp(bN,bO);
if(bP==null){if(qx.Class.supportsEvent(bN.constructor,bO)){bP=bO;
}else if(qx.Class.supportsEvent(bN.constructor,g+qx.lang.String.firstUp(bO))){bP=g+qx.lang.String.firstUp(bO);
}else{throw new qx.core.AssertionError(u+bO+x+bN+p);
}}return bP;
},__kh:function(bQ,bR){var bS=this.__kj(bQ,bR);

if(bS!=null){var bT=bR.substring(bR.lastIndexOf(d)+1,bR.length);
if(bT.charAt(bT.length-1)==f){this.__ki(bQ,bR,null);
return;
}if(bS[C+qx.lang.String.firstUp(bT)]!=undefined){bS[C+qx.lang.String.firstUp(bT)]();
}else{bS[F+qx.lang.String.firstUp(bT)](null);
}}},__ki:function(bU,bV,bW){var cb=this.__kj(bU,bV);

if(cb!=null){var cc=bV.substring(bV.lastIndexOf(d)+1,bV.length);
if(cc.charAt(cc.length-1)==f){var bX=cc.substring(cc.lastIndexOf(k)+1,cc.length-1);
var ca=cc.substring(0,cc.lastIndexOf(k));
var bY=bU;

if(!qx.Class.implementsInterface(bY,qx.data.IListData)){bY=cb[m+qx.lang.String.firstUp(ca)]();
}
if(bX==h){bX=bY.length-1;
}
if(bY!=null){bY.setItem(bX,bW);
}}else{cb[F+qx.lang.String.firstUp(cc)](bW);
}}},__kj:function(cd,ce){var ch=ce.split(d);
var ci=cd;
for(var i=0;i<ch.length-1;i++){try{var cg=ch[i];
if(cg.indexOf(f)==cg.length-1){var cf=cg.substring(cg.indexOf(k)+1,cg.length-1);
cg=cg.substring(0,cg.indexOf(k));
}if(cg!=l){ci=ci[m+qx.lang.String.firstUp(cg)]();
}if(cf!=null){if(cf==h){cf=ci.length-1;
}ci=ci.getItem(cf);
cf=null;
}}catch(cj){return null;
}}return ci;
},__kk:function(ck,cl,cm,cn,co){ck=this.__ko(ck,cl,cm,cn,co);
if(ck===undefined){this.__kh(cl,cm);
}if(ck!==undefined){try{this.__ki(cl,cm,ck);
if(cn&&cn.onUpdate){cn.onUpdate(co,cl,ck);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cn&&cn.onSetFail){cn.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+ck+" on "+cl+". Error message: "+e);
}}}},__kl:function(cp){var cq=[];
for(var i=0;i<cp.length;i++){var name=cp[i];
if(qx.lang.String.endsWith(name,f)){var cr=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cr!==h){if(cr==l||isNaN(parseInt(cr,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cp[i]=name.substring(0,name.indexOf(k));
cq[i]=l;
cq[i+1]=cr;
cp.splice(i+1,0,D);
i++;
}else{cq[i]=cr;
cp.splice(i,1,D);
}}else{cq[i]=l;
}}return cq;
},__km:function(cs,ct,cu,cv,cw,cx){var cy;
var cA=function(cB,e){if(cB!==l){if(cB===h){cB=cs.length-1;
}var cE=cs.getItem(cB);
if(cE===undefined){qx.data.SingleValueBinding.__kh(cu,cv);
}var cC=e.getData().start;
var cD=e.getData().end;

if(cB<cC||cB>cD){return;
}}else{var cE=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cs+" by "+ct+" to "+cu+" ("+cv+")");
qx.log.Logger.debug("Data before conversion: "+cE);
}cE=qx.data.SingleValueBinding.__ko(cE,cu,cv,cw,cs);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cE);
}try{if(cE!==undefined){qx.data.SingleValueBinding.__ki(cu,cv,cE);
}else{qx.data.SingleValueBinding.__kh(cu,cv);
}if(cw&&cw.onUpdate){cw.onUpdate(cs,cu,cE);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cw&&cw.onSetFail){cw.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cE+" on "+cu+". Error message: "+e);
}}};
if(!cx){cx=l;
}cA=qx.lang.Function.bind(cA,cs,cx);
var cz=cs.addListener(ct,cA);
return cz;
},__kn:function(cF,cG,cH,cI,cJ){if(this.__kd[cG.toHashCode()]===undefined){this.__kd[cG.toHashCode()]=[];
}this.__kd[cG.toHashCode()].push([cF,cG,cH,cI,cJ]);
},__ko:function(cK,cL,cM,cN,cO){if(cN&&cN.converter){var cQ;

if(cL.getModel){cQ=cL.getModel();
}return cN.converter(cK,cQ,cO,cL);
}else{var cS=this.__kj(cL,cM);
var cT=cM.substring(cM.lastIndexOf(d)+1,cM.length);
if(cS==null){return cK;
}var cR=qx.Class.getPropertyDefinition(cS.constructor,cT);
var cP=cR==null?l:cR.check;
return this.__kq(cK,cP);
}},__kp:function(cU,cV){var cW=qx.Class.getPropertyDefinition(cU.constructor,cV);

if(cW==null){return null;
}return cW.event;
},__kq:function(cX,cY){var da=qx.lang.Type.getClass(cX);
if((da==c||da==b)&&(cY==y||cY==t)){cX=parseInt(cX,10);
}if((da==A||da==c||da==n)&&cY==b){cX=cX+l;
}if((da==c||da==b)&&(cY==c||cY==s)){cX=parseFloat(cX);
}return cX;
},removeBindingFromObject:function(db,dc){if(dc.type==E){for(var i=0;i<dc.sources.length;i++){if(dc.sources[i]){dc.sources[i].removeListenerById(dc.listenerIds[i]);
}}for(var i=0;i<dc.targets.length;i++){if(dc.targets[i]){dc.targets[i].removeListenerById(dc.targetListenerIds[i]);
}}}else{db.removeListenerById(dc);
}var dd=this.__kd[db.toHashCode()];
if(dd!=undefined){for(var i=0;i<dd.length;i++){if(dd[i][0]==dc){qx.lang.Array.remove(dd,dd[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(de){var df=this.__kd[de.toHashCode()];

if(df!=undefined){for(var i=df.length-1;i>=0;i--){this.removeBindingFromObject(de,df[i][0]);
}}},getAllBindingsForObject:function(dg){if(this.__kd[dg.toHashCode()]===undefined){this.__kd[dg.toHashCode()]=[];
}return this.__kd[dg.toHashCode()];
},removeAllBindings:function(){for(var di in this.__kd){var dh=qx.core.ObjectRegistry.fromHashCode(di);
if(dh==null){delete this.__kd[di];
continue;
}this.removeAllBindingsForObject(dh);
}this.__kd={};
},getAllBindings:function(){return this.__kd;
},showBindingInLog:function(dj,dk){var dm;
for(var i=0;i<this.__kd[dj.toHashCode()].length;i++){if(this.__kd[dj.toHashCode()][i][0]==dk){dm=this.__kd[dj.toHashCode()][i];
break;
}}
if(dm===undefined){var dl=q;
}else{var dl=v+dm[1]+B+dm[2]+z+dm[3]+B+dm[4]+r;
}qx.log.Logger.debug(dl);
},showAllBindingsInLog:function(){for(var dp in this.__kd){var dn=qx.core.ObjectRegistry.fromHashCode(dp);

for(var i=0;i<this.__kd[dp].length;i++){this.showBindingInLog(dn,this.__kd[dp][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Class.define(g,{statics:{__cO:j,__cP:null,__cQ:{},camelCase:function(q){var r=this.__cQ[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
}return r;
},hyphenate:function(u){var v=this.__cQ[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
}return v;
},capitalize:function(x){if(this.__cP===null){var y=m;
this.__cP=new RegExp(f+this.__cO.replace(/[0-9A-F]{4}/g,function(z){return y+z;
})+a+this.__cO.replace(/[0-9A-F]{4}/g,function(A){return y+A;
})+n,o);
}return x.replace(this.__cP,function(B){return B.toUpperCase();
});
},clean:function(C){return this.trim(C.replace(/\s+/g,d));
},trimLeft:function(D){return D.replace(/^\s+/,p);
},trimRight:function(E){return E.replace(/\s+$/,p);
},trim:function(F){return F.replace(/^\s+|\s+$/g,p);
},startsWith:function(G,H){return G.indexOf(H)===0;
},endsWith:function(I,J){return I.substring(I.length-J.length,I.length)===J;
},repeat:function(K,L){return K.length>0?new Array(L+1).join(K):p;
},pad:function(M,length,N){var O=length-M.length;

if(O>0){if(typeof N===l){N=c;
}return this.repeat(N,O)+M;
}else{return M;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(R,S){var T=R;
var i=S.length;

while(i--){T=T.replace(new RegExp(e+(i+1),o),S[i]+p);
}return T;
},escapeRegexpChars:function(U){return U.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(V){return V.split(/\B|\b/g);
},stripTags:function(W){return W.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(X,Y){var bb=p;
var ba=X.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){bb+=arguments[1]+b;
return p;
});

if(Y===true){qx.lang.Function.globalEval(bb);
}return ba;
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
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
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
(function(){var b="qx.globalErrorHandling",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{__ie:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(b);
}else{return !!qx.Bootstrap.getEnvironmentSetting(b);
}},setErrorHandler:function(c,d){this.__eB=c||null;
this.__eC=d||window;

if(this.__ie()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__ig,this);

if(this.__if==null){this.__if=window.onerror;
}var self=this;
window.onerror=function(f,g,h){self.__if(f,g,h);
e(f,g,h);
};
}
if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__ig,this);
}if(this.__eB==null){if(this.__if!=null){window.onerror=this.__if;
this.__if=null;
}else{window.onerror=null;
}}}},__ig:function(i,j,k){if(this.__eB){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(l){if(this.__ie()){var self=this;
return function(){if(!self.__eB){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(m){self.handleError(new qx.core.GlobalError(m,arguments));
}};
}else{return l;
}},handleError:function(n){if(this.__eB){this.__eB.call(this.__eC,n);
}}},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(b,true);
}else{qx.Bootstrap.setEnvironmentSetting(b,true);
}o.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bR=c;
this.__bS=d||b;
this.__bT=e===undefined?-1:e;
},members:{__bR:null,__bS:null,__bT:null,toString:function(){return this.__bR;
},getUri:function(){return this.__bS;
},getLineNumber:function(){return this.__bT;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);
}this.__bR=b+(c&&c.message?c.message:c);
Error.call(this,this.__bR);
this.__kF=d;
this.__kG=c;
},members:{__kG:null,__kF:null,__bR:null,toString:function(){return this.__bR;
},getArguments:function(){return this.__kF;
},getSourceException:function(){return this.__kG;
}},destruct:function(){this.__kG=null;
this.__kF=null;
this.__bR=null;
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__ek:true,__el:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__em(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__ek){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__ek){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__em:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__el(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__el(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__el(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__el(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__el(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__el(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__el(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__el(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__el(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__el(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__el(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__el(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__el(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__el(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__el(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__el(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__ek=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__ek=true;
}
if(cQ==null){this.__el(cP||p,s);
}cQ instanceof cN||this.__el(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__el(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__el(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__el(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__el(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__el(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__el(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__el(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__el(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__el(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__el(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__el(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__el(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__el(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__el(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__el(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__el(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__el(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__el(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__el(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__el(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__en(ea,bu)||this.__el(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__en(ec,z)||this.__el(ed||p,b,ec,o);
},__en:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bE=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bE:null,message:null,getComment:function(){return this.__bE;
},toString:function(){return this.__bE+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dw=qx.dev.StackTrace.getStackTrace();
},members:{__dw:null,getStackTrace:function(){return this.__dw;
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
var Q=this.__dp(P);
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
if(W){var Y=this.__dp(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__dp(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__dp(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__dp(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message&&bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__dp(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__dp:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var h="qx.debug.dispose",g="$$hash",f="-",e="",d="qx.core.ObjectRegistry",c="-0";
qx.Class.define(d,{statics:{inShutDown:false,__ho:{},__hp:0,__hq:[],__hr:e,__hs:{},register:function(j){var n=this.__ho;

if(!n){return;
}var m=j.$$hash;

if(m==null){var k=this.__hq;

if(k.length>0&&!qx.core.Environment.get(h)){m=k.pop();
}else{m=(this.__hp++)+this.__hr;
}j.$$hash=m;

if(qx.core.Environment.get(h)&&qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__hs[m]=qx.dev.StackTrace.getStackTrace();
}}n[m]=j;
},unregister:function(o){var p=o.$$hash;

if(p==null){return;
}var q=this.__ho;

if(q&&q[p]){delete q[p];
this.__hq.push(p);
}try{delete o.$$hash;
}catch(r){if(o.removeAttribute){o.removeAttribute(g);
}}},toHashCode:function(s){var u=s.$$hash;

if(u!=null){return u;
}var t=this.__hq;

if(t.length>0){u=t.pop();
}else{u=(this.__hp++)+this.__hr;
}return s.$$hash=u;
},clearHashCode:function(v){var w=v.$$hash;

if(w!=null){this.__hq.push(w);
try{delete v.$$hash;
}catch(x){if(v.removeAttribute){v.removeAttribute(g);
}}}},fromHashCode:function(y){return this.__ho[y]||null;
},shutdown:function(){this.inShutDown=true;
var A=this.__ho;
var C=[];

for(var B in A){C.push(B);
}C.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var z,i=0,l=C.length;

while(true){try{for(;i<l;i++){B=C[i];
z=A[B];

if(z&&z.dispose){z.dispose();
}}}catch(D){qx.Bootstrap.error(this,"Could not dispose object "+z.toString()+": "+D);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__ho;
},getRegistry:function(){return this.__ho;
},getNextHash:function(){return this.__hp;
},getPostId:function(){return this.__hr;
},getStackTraces:function(){return this.__hs;
}},defer:function(E){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){E.__hr=f+(i+1);
return;
}}}E.__hr=c;
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__fA:null,__fB:null,__fC:null,__fD:null,stringify:function(bb,bc,bd){this.__fA=p;
this.__fB=p;
this.__fD=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__fB+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__fB=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__fC=bc;
}else{this.__fC=null;
}return this.__fE(p,{'':bb});
},__fE:function(be,bf){var bi=this.__fA,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__fC===e){bj=this.__fC.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__fF(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__fA+=this.__fB;
bg=[];

if(this.__fD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__fD.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__fE(i,bj)||h;
}this.__fD.pop();
if(bg.length===0){var bh=s;
}else if(this.__fA){bh=E+this.__fA+bg.join(Y+this.__fA)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__fA=bi;
return bh;
case z:this.__fA+=this.__fB;
bg=[];

if(this.__fD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__fD.push(bj);
if(this.__fC&&typeof this.__fC===f){var length=this.__fC.length;

for(var i=0;i<length;i+=1){var k=this.__fC[i];

if(typeof k===W){var v=this.__fE(k,bj);

if(v){bg.push(this.__fF(k)+(this.__fA?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__fE(k,bj);

if(v){bg.push(this.__fF(k)+(this.__fA?g:m)+v);
}}}}this.__fD.pop();
if(bg.length===0){var bh=A;
}else if(this.__fA){bh=w+this.__fA+bg.join(Y+this.__fA)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__fA=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__fF:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__fG({'':j},p,bs):j;
}throw new SyntaxError(P);
},__fG:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__fG(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1&&JSON.stringify({"prop":"val"},function(k,v){return k==="prop"?"repl":v;
}).indexOf("repl")>0)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__eD:0,__eE:0,__eF:false,__eG:0,__eH:null,__eI:null,setMaxEntries:function(c){this.__eI=c;
this.clear();
},getMaxEntries:function(){return this.__eI;
},addEntry:function(d){this.__eH[this.__eD]=d;
this.__eD=this.__eJ(this.__eD,1);
var e=this.getMaxEntries();

if(this.__eE<e){this.__eE++;
}if(this.__eF&&(this.__eG<e)){this.__eG++;
}},mark:function(){this.__eF=true;
this.__eG=0;
},clearMark:function(){this.__eF=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__eE){f=this.__eE;
}if(g&&this.__eF&&(f>this.__eG)){f=this.__eG;
}
if(f>0){var i=this.__eJ(this.__eD,-1);
var h=this.__eJ(i,-f+1);
var j;

if(h<=i){j=this.__eH.slice(h,i+1);
}else{j=this.__eH.slice(h,this.__eE).concat(this.__eH.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__eH=new Array(this.getMaxEntries());
this.__eE=0;
this.__eG=0;
this.__eD=0;
},__eJ:function(k,l){var m=this.getMaxEntries();
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
qx.Class.define(s,{statics:{__jJ:A,setLevel:function(I){this.__jJ=I;
},getLevel:function(){return this.__jJ;
},setTreshold:function(J){this.__jL.setMaxMessages(J);
},getTreshold:function(){return this.__jL.getMaxMessages();
},__jK:{},__df:0,register:function(K){if(K.$$id){return;
}var M=this.__df++;
this.__jK[M]=K;
K.$$id=M;
var L=this.__jM;
var N=this.__jL.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__jJ]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__jK[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__jN(A,arguments);
},info:function(S,T){qx.log.Logger.__jN(e,arguments);
},warn:function(U,V){qx.log.Logger.__jN(r,arguments);
},error:function(W,X){qx.log.Logger.__jN(j,arguments);
},trace:function(Y){qx.log.Logger.__jN(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__jL.clearHistory();
},__jL:new qx.log.appender.RingBuffer(50),__jM:{debug:0,info:1,warn:2,error:3},__jN:function(bv,bw){var bB=this.__jM;

if(bB[bv]<bB[this.__jJ]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__jP(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__jL.process(bD);
var bE=this.__jK;

for(var bz in bE){bE[bz].process(bD);
}},__jO:function(bF){if(bF===undefined){return y;
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
},__jP:function(bH,bI){var bP=this.__jO(bH);
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
}bL.push(this.__jP(bH[i],false));
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
bJ=this.__jP(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__jN(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===this.DOCUMENT?e:e.ownerDocument||e.document;
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
(function(){var l="on",k="engine.name",j="gecko",i="engine.version",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(m,n,o,p){if(m.addEventListener){m.addEventListener(n,o,!!p);
}else if(m.attachEvent){m.attachEvent(l+n,o);
}else if(typeof m[l+n]!=g){m[l+n]=o;
}else{}},removeNativeListener:function(q,r,s,t){if(q.removeEventListener){q.removeEventListener(r,s,!!t);
}else if(q.detachEvent){try{q.detachEvent(l+r,s);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof q[l+r]!=g){q[l+r]=null;
}else{}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(k)==j)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))<1.9){try{e.keyCode=0;
}catch(u){}}}else{try{e.keyCode=0;
}catch(v){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(w,x){if(document.createEvent){var y=document.createEvent(a);
y.initEvent(x,true,true);
return !w.dispatchEvent(y);
}else{var y=document.createEventObject();
return w.fireEvent(l+x,y);
}},supportsEvent:qx.core.Environment.select(k,{"webkit":function(z,A){return z.hasOwnProperty(l+A);
},"default":function(B,C){var D=l+C;
var E=(D in B);

if(!E){E=typeof B[D]==h;

if(!E&&B.setAttribute){B.setAttribute(D,c);
E=typeof B[D]==h;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="__jI",h="c",g="DOM_",c="WIN_",f="__jH",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__cp=s;
this.__jQ=qx.core.ObjectRegistry.toHashCode(s);
this.__cW=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__jR={};
this.__jH={};
this.__jI={};
this.__jS={};
},statics:{__jT:0,getNextUniqueId:function(){return (this.__jT++)+o;
}},members:{__cW:null,__jR:null,__jI:null,__jU:null,__jH:null,__jS:null,__cp:null,__jQ:null,getWindow:function(){return this.__cp;
},getWindowId:function(){return this.__jQ;
},getHandler:function(u){var v=this.__jH[u.classname];

if(v){return v;
}return this.__jH[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__jI[w.classname];

if(x){return x;
}return this.__jI[w.classname]=new w(this,this.__cW);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__jR[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},getAllListeners:function(){return this.__jR;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__jR[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==h;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__jR[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__jV(P,W,R);
}else{this.__jW(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__jR[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__jR[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__jV(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__jT++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__jR[bx];

if(!bz){bz=this.__jR[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__jV(bp,bq,bs);
}var by=(qx.event.Manager.__jT++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__cp){bF=true;
bL=c+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__jS;

if(bH[bL]){return bH[bL];
}var bK=this.__cW.getHandlers();
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
},__jV:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__jR[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__jW(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__jR[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__jW(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__jR[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__jW(cq,cv,cr);
}}delete this.__jR[cu];
return true;
},deleteAllListeners:function(cx){delete this.__jR[cx];
},__jW:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__cW.getDispatchers();
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
},dispose:function(){this.__cW.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,f);
qx.util.DisposeUtil.disposeMap(this,j);
this.__jR=this.__cp=this.__jU=null;
this.__cW=this.__jS=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__jG:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__jG[f];

if(!e){e=new qx.event.Manager(d,this);
this.__jG[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__jG[h];
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
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__jH:[],addHandler:function(Q){this.__jH.push(Q);
this.__jH.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__jH;
},__jI:[],addDispatcher:function(R,S){this.__jI.push(R);
this.__jI.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__jI;
}}});
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
},__dq:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__dq.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__dq.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__dq.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__dq.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__dq.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__dq.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__dq.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__dq.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__dr:null,setUserData:function(bg,bh){if(!this.__dr){this.__dr={};
}this.__dr[bg]=bh;
},getUserData:function(bi){if(!this.__dr){return null;
}var bj=this.__dr[bi];
return bj===undefined?null:bj;
},__ds:qx.log.Logger,debug:function(bk){this.__dt(f,arguments);
},info:function(bl){this.__dt(m,arguments);
},warn:function(bm){this.__dt(h,arguments);
},error:function(bn){this.__dt(j,arguments);
},trace:function(){this.__ds.trace(this);
},__dt:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__ds[bo].apply(this.__ds,bq);
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
}if(this.__du){this.__du();
}},__du:null,__dv:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__du=bD.__dv;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__dr=null;
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
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
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
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__bL={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__bL:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__bL[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__bL){return;
}var h=g.classname;
var j=this.__bL[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__bL[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__bL;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__bL;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
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
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__dc:null,__id:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__dc=b;
this.__id=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__dc=this.__dc;
f.__id=this.__id;
return f;
},getData:function(){return this.__dc;
},getOldData:function(){return this.__id;
}},destruct:function(){this.__dc=this.__id=null;
}});
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
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
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
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__cR=false;
this.__cS=false;
this.__cT=false;
this.__cU=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__cV();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cT:null,__cR:null,__cS:null,__cU:null,__cV:function(){if(!this.__cT&&this.__cR&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__cT=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__cT=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__cT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__cR=true;
this.__cV();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cR=true;
this.__cV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cU){this.__cU=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="fce.Application",b="os.name",a="engine.version";
qx.Class.define(f,{statics:{getApplication:function(){return this.__ec||null;
},ready:function(){if(this.__ec){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=c;
var j=qx.Class.getByName(i);

if(j){this.__ec=new j;
var h=new Date;
this.__ec.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__ec.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__ed:function(e){var k=this.__ec;

if(k){k.close();
}},__ee:function(){var l=this.__ec;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
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
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__ed:function(e){var f=this.__application;

if(f){e.setReturnValue(f.close());
}},__ee:function(){var g=this.__application;

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__ee,h);
qx.event.Registration.addListener(window,b,h.__ed,h);
}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__cq:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__cq;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__cq=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__cq=null;
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
},initialize:function(){var u=qx.core.Environment;
var s,t;
s=u.get(e);

if(s){t=qx.Theme.getByName(s);

if(!t){throw new Error("The theme to use is not available: "+s);
}this.setTheme(t);
}}},environment:{"qx.theme":c}});
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
}else if(this.isRgbString(m)){return this.__ck();
}else if(this.isHex3String(m)){return this.__cm();
}else if(this.isHex6String(m)){return this.__cn();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__ck();
}else if(this.isRgbaString(n)){return this.__cl();
}else if(this.isHex3String(n)){return this.__cm();
}else if(this.isHex6String(n)){return this.__cn();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return (this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v)||this.isRgbaString(v));
},isCssString:function(w){return (this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w)||this.isRgbaString(w));
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__ck:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__cl:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__cm:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__cn:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__cm(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__cn(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__cm(P);
}
if(this.isHex6String(P)){return this.__cn(P);
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
(function(){var m="object",l="_applyTheme",k="",j="_",h="__iq",g="qx.ui.decoration.",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:l,event:c}},members:{__iq:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__iq;

if(!p){p=this.__iq={};
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
},isCached:function(A){return qx.lang.Object.contains(this.__iq,A);
},_applyTheme:function(B,C){var E=qx.util.AliasManager.getInstance();

if(C){for(var D in C.aliases){E.remove(D);
}}
if(B){for(var D in B.aliases){E.add(D,B.aliases[D]);
}}
if(!B){this.__iq={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__jB:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__jB=null;
},getInsets:function(){if(this.__jB){return this.__jB;
}var j=this._getDefaultInsets();
return this.__jB={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__jB=null;
}},destruct:function(){this.__jB=null;
}});
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
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__hh:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__hh[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__hh[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{__do:null,getScrollbarWidth:function(){if(this.__do!==null){return this.__do;
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
this.__do=c?c:16;
document.body.removeChild(t);
return this.__do;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(T,U){return z+U+e;
}:function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(br,bs){br.style.overflow=bs;
}:function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bx){bx.style.overflow=j;
}:function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bz,bA){bz.style.overflow=j;
}:function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bT,bU){bT.style.overflow=bU;
}:function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(ca){ca.style.overflow=j;
}:function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(cc,cd){cc.style.overflow=j;
}:function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var q="engine.name",p="",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",f=":",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(m,{statics:{__ir:qx.core.Environment.select(q,{"mshtml":null,"webkit":[o,k,g],"gecko":[a],"opera":[o]}),__is:qx.core.Environment.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[h],"opera":[n]}),__it:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__iu:function(r){var s=this.__it;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Environment.select(q,{"mshtml":function(t){},"default":function(u){var w=this.__is;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+f+u+c;
}}return v;
}}),get:qx.core.Environment.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__iu(x)){return d;
}}return j;
},"default":function(y){var A=this.__ir;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Environment.select(q,{"mshtml":function(B,C){},"default":function(D,E){var F=this.__ir;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
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
}}),__ey:function(){var v=this.getWidth()>this.getHeight()?90:0;
var w=window.orientation;

if(w==null||Math.abs(w%180)==v){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__ez:null,getOrientation:function(x){var y=(x||window).orientation;

if(y==null){y=this.getWidth(x)>this.getHeight(x)?90:0;
}else{y=this.__ez[y];
}return y;
},isLandscape:function(z){return Math.abs(this.getOrientation(z))==90;
},isPortrait:function(A){return Math.abs(this.getOrientation(A))!==90;
}},defer:function(B){B.__ez=B.__ey();
}});
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
(function(){var m="",k="engine.name",h="userSelect",g="style",f="MozUserModify",e="px",d="pixelBottom",c="float",b="borderImage",a="styleFloat",F="appearance",E="pixelHeight",D='Ms',C=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',t='string',u="pixelRight",r='Moz',s="pixelWidth",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(x,{statics:{__gx:function(){var G=[F,h,q,b];
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
}}}this.__gy=K;
this.__gy[n]=qx.core.Environment.select(k,{"gecko":f,"webkit":v,"default":h});
this.__gz={};

for(var I in K){this.__gz[I]=qx.lang.String.hyphenate(K[I]);
}this.__gy[c]=qx.core.Environment.select(k,{"mshtml":a,"default":B});
},__gA:{width:s,height:E,left:z,right:u,top:A,bottom:d},__gB:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__gB;
var R=this.__gz;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(qx.lang.String.hyphenate(name),C,P,p);
}}return Q.join(m);
},setCss:qx.core.Environment.select(k,{"mshtml":function(T,U){T.style.cssText=U;
},"default":function(V,W){V.setAttribute(g,W);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(X){return X.style.cssText.toLowerCase();
},"default":function(Y){return Y.getAttribute(g);
}}),isPropertySupported:function(ba){return (this.__gB[ba]||this.__gy[ba]||ba in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bb,name,bc,bd){name=this.__gy[name]||name;
if(bd!==false&&this.__gB[name]){return this.__gB[name].set(bb,bc);
}else{bb.style[name]=bc!==null?bc:m;
}},setStyles:function(be,bf,bg){var bj=this.__gy;
var bl=this.__gB;
var bh=be.style;

for(var bk in bf){var bi=bf[bk];
var name=bj[bk]||bk;

if(bi===undefined){if(bg!==false&&bl[name]){bl[name].reset(be);
}else{bh[name]=m;
}}else{if(bg!==false&&bl[name]){bl[name].set(be,bi);
}else{bh[name]=bi!==null?bi:m;
}}}},reset:function(bm,name,bn){name=this.__gy[name]||name;
if(bn!==false&&this.__gB[name]){return this.__gB[name].reset(bm);
}else{bm.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(bo,name,bp,bq){name=this.__gy[name]||name;
if(bq!==false&&this.__gB[name]){return this.__gB[name].get(bo,bp);
}if(!bo.currentStyle){return bo.style[name]||m;
}switch(bp){case this.LOCAL_MODE:return bo.style[name]||m;
case this.CASCADED_MODE:return bo.currentStyle[name]||m;
default:var bu=bo.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bu)){return bu;
}var bt=this.__gA[name];

if(bt){var br=bo.style[name];
bo.style[name]=bu||0;
var bs=bo.style[bt]+e;
bo.style[name]=br;
return bs;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bu)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bu;
}},"default":function(bv,name,bw,bx){name=this.__gy[name]||name;
if(bx!==false&&this.__gB[name]){return this.__gB[name].get(bv,bw);
}switch(bw){case this.LOCAL_MODE:return bv.style[name]||m;
case this.CASCADED_MODE:if(bv.currentStyle){return bv.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var by=qx.dom.Node.getDocument(bv);
var bz=by.defaultView.getComputedStyle(bv,null);
return bz?bz[name]:m;
}}})},defer:function(bA){bA.__gx();
}});
})();
(function(){var e="=",d="ecmascript.objectcount",c="+",b="qx.lang.Object",a="&";
qx.Class.define(b,{statics:{empty:function(f){for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.core.Environment.get(d))?function(h){return h.__count__===0;
}:function(j){for(var k in j){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(d))?function(m,n){return m.__count__>=n;
}:function(o,p){if(p<=0){return true;
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
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__co={};
this.add(a,h);
},members:{__co:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__co[k]){return this.__co[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__co[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__co[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__co[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__co){v[w]=this.__co[w];
}return v;
}},destruct:function(){this.__co=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;
return g instanceof qx.bom.Font?g:h[g];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){var m=this.__hl(k.fonts[i]);
return l[i]=(new m).set(k.fonts[i]);
}return i;
},isDynamic:function(n){var q=this._dynamic;

if(n&&(n instanceof qx.bom.Font||q[n]!==undefined)){return true;
}var p=this.getTheme();

if(p!==null&&n&&p.fonts[n]){var o=this.__hl(p.fonts[n]);
q[n]=(new o).set(p.fonts[n]);
return true;
}return false;
},__hk:function(r,s){if(r[s].include){var t=r[r[s].include];
r[s].include=null;
delete r[s].include;
r[s]=qx.lang.Object.mergeWith(r[s],t,false);
this.__hk(r,s);
}},_applyTheme:function(u){var v=this._getDynamic();

for(var y in v){if(v[y].themed){v[y].dispose();
delete v[y];
}}
if(u){var w=u.fonts;

for(var y in w){if(w[y].include&&w[w[y].include]){this.__hk(w,y);
}var x=this.__hl(w[y]);
v[y]=(new x).set(w[y]);
v[y].themed=true;
}}this._setDynamic(v);
},__hl:function(z){if(z.sources){return qx.bom.webfonts.WebFont;
}return qx.bom.Font;
}},destruct:function(){this._disposeMap(d);
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
},__gC:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,textColor:k},getDefaultStyles:function(){return this.__gC;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__gD:null,__gE:null,__gF:null,__gG:null,__gH:null,__gI:null,__gJ:null,_applySize:function(J,K){this.__gD=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__gI=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__gE=P;
},_applyBold:function(Q,R){this.__gF=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__gG=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__gH=U===null?null:U;
},_applyColor:function(W,X){this.__gJ=W===null?null:W;
},getStyles:function(){return {fontFamily:this.__gE,fontSize:this.__gD,fontWeight:this.__gF,fontStyle:this.__gG,textDecoration:this.__gH,lineHeight:this.__gI,textColor:this.__gJ};
}}});
})();
(function(){var g="'",f="qx.bom.webfonts.WebFont",e="",d="changeStatus",c=" ",b="_applySources",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.bom.Font,events:{"changeStatus":a},properties:{sources:{nullable:true,apply:b}},members:{__kN:null,_applySources:function(h,j){var n=[];

for(var i=0,l=h.length;i<l;i++){var m=this._quoteFontFamily(h[i].family);
n.push(m);
var k=h[i].source;
qx.bom.webfonts.Manager.getInstance().require(m,k,this._onWebFontChangeStatus,this);
}this.setFamily(n.concat(this.getFamily()));
},_onWebFontChangeStatus:function(o){var p=o.getData();
this.fireDataEvent(d,p);
},_quoteFontFamily:function(q){q=q.replace(/["']/g,e);

if(q.indexOf(c)>0){q=g+q+g;
}return q;
}}});
})();
(function(){var n="",k="url('",h="ie",g="browser.name",f="changeStatus",e="svg",d="chrome",c="#",b="firefox",a="eot",T="ios",S="ttf",R="browser.version",Q="woff",P="m",O="os.name",N=")",M="qx.bom.webfonts.Manager",L="singleton",K=",\n",u="src: ",v="mobileSafari",s="'eot)",t="@font-face {",q="interval",r="}\n",o="font-family: ",p="mobile safari",w="safari",y="?#iefix') format('eot')",C=";\n",B="') format('woff')",E="opera",D="\.(",G="os.version",F="') format('svg')",A="'eot')",J="\nfont-style: normal;\nfont-weight: normal;",I="@font-face.*?",H=";",z="') format('truetype')";
qx.Class.define(M,{extend:qx.core.Object,type:L,construct:function(){qx.core.Object.call(this);
this.__gQ=[];
this.__gR={};
this.__db=[];
this.__gS=this.getPreferredFormats();
},statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__gQ:null,__gT:null,__gR:null,__gS:null,__db:null,__gU:null,require:function(U,V,W,X){var Y=[];

for(var i=0,l=V.length;i<l;i++){var bb=V[i].split(c);
var ba=qx.util.ResourceManager.getInstance().toUri(bb[0]);

if(bb.length>1){ba=ba+c+bb[1];
}Y.push(ba);
}if(!(qx.core.Environment.get(g)==h&&qx.bom.client.Browser.getVersion()<9)){this.__gV(U,Y,W,X);
return;
}
if(!this.__gU){this.__gU=new qx.event.Timer(100);
this.__gU.addListener(q,this.__gW,this);
}
if(!this.__gU.isEnabled()){this.__gU.start();
}this.__db.push([U,Y,W,X]);
},remove:function(bc){var bd=null;

for(var i=0,l=this.__gQ.length;i<l;i++){if(this.__gQ[i]==bc){bd=i;
this.__hd(bc);
break;
}}
if(bd){qx.lang.Array.removeAt(this.__gQ,bd);
}
if(bc in this.__gR){this.__gR[bc].dispose();
delete this.__gR[bc];
}},getPreferredFormats:function(){var be=[];
var bi=qx.core.Environment.get(g);
var bf=qx.core.Environment.get(R);
var bh=qx.core.Environment.get(O);
var bg=qx.core.Environment.get(G);

if((bi==h&&bf>=9)||(bi==b&&bf>=3.6)||(bi==d&&bf>=6)){be.push(Q);
}
if((bi==E&&bf>=10)||(bi==w&&bf>=3.1)||(bi==b&&bf>=3.5)||(bi==d&&bf>=4)||(bi==p&&bh==T&&bg>=4.2)){be.push(S);
}
if(bi==h&&bf>=4){be.push(a);
}
if(bi==v&&bh==T&&bg>=4.1){be.push(e);
}return be;
},removeStyleSheet:function(){this.__gQ=[];

if(this.__gT){var bj=this.__gT.ownerNode?this.__gT.ownerNode:this.__gT.owningElement;
qx.dom.Element.removeChild(bj,bj.parentNode);
}this.__gT=null;
},__gV:function(bk,bl,bm,bn){if(!qx.lang.Array.contains(this.__gQ,bk)){var bq=this.__gY(bl);
var bp=this.__ha(bk,bq);

if(!bp){throw new Error("Couldn't create @font-face rule for WebFont "+bk+"!");
}
if(!this.__gT){this.__gT=qx.bom.Stylesheet.createElement();
}
try{this.__hc(bp);
}catch(br){}this.__gQ.push(bk);
}
if(!this.__gR[bk]){this.__gR[bk]=new qx.bom.webfonts.Validator(bk);
this.__gR[bk].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);
this.__gR[bk].addListenerOnce(f,this.__gX,this);
}
if(bm){var bo=bn||window;
this.__gR[bk].addListenerOnce(f,bm,bo);
}this.__gR[bk].validate();
},__gW:function(){if(this.__db.length==0){this.__gU.stop();
return;
}var bs=this.__db.shift();
this.__gV.apply(this,bs);
},__gX:function(bt){var bu=bt.getData();

if(bu.valid===false){qx.event.Timer.once(function(){this.remove(bu.family);
},this,250);
}},__gY:function(bv){var bx=qx.bom.webfonts.Manager.FONT_FORMATS;
var bA={};

for(var i=0,l=bv.length;i<l;i++){var by=null;

for(var x=0;x<bx.length;x++){var bz=new RegExp(D+bx[x]+N);
var bw=bz.exec(bv[i]);

if(bw){by=bw[1];
}}
if(by){bA[by]=bv[i];
}}return bA;
},__ha:function(bB,bC){var bF=[];
var bD=this.__gS.length>0?this.__gS:qx.bom.webfonts.Manager.FONT_FORMATS;

for(var i=0,l=bD.length;i<l;i++){var bE=bD[i];

if(bC[bE]){bF.push(this.__hb(bE,bC[bE]));
}}var bG=u+bF.join(K)+H;
bG=o+bB+C+bG;
bG=bG+J;
return bG;
},__hb:function(bH,bI){switch(bH){case a:return k+bI+y;
case Q:return k+bI+B;
case S:return k+bI+z;
case e:return k+bI+F;
default:return null;
}},__hc:function(bJ){var bL=t+bJ+r;

if(qx.core.Environment.get(g)==h&&qx.core.Environment.get(R)<9){var bK=this.__he(this.__gT.cssText);
bK+=bL;
this.__gT.cssText=bK;
}else{this.__gT.insertRule(bL,this.__gT.cssRules.length);
}},__hd:function(bM){var bP=new RegExp(I+bM,P);

for(var i=0,l=document.styleSheets.length;i<l;i++){var bN=document.styleSheets[i];

if(bN.cssText){var bO=bN.cssText.replace(/\n/g,n).replace(/\r/g,n);
bO=this.__he(bO);

if(bP.exec(bO)){bO=bO.replace(bP,n);
}bN.cssText=bO;
}else if(bN.cssRules){for(var j=0,m=bN.cssRules.length;j<m;j++){var bO=bN.cssRules[j].cssText.replace(/\n/g,n).replace(/\r/g,n);

if(bP.exec(bO)){this.__gT.deleteRule(j);
return;
}}}}},__he:function(bQ){return bQ.replace(s,A);
}},destruct:function(){delete this.__gQ;
this.removeStyleSheet();

for(var bR in this.__gR){this.__gR[bR].dispose();
}qx.bom.webfonts.Validator.removeDefaultHelperElements();
}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__ho:qx.$$resources||{},__ip:{}},members:{has:function(q){return !!this.self(arguments).__ho[q];
},getData:function(r){return this.self(arguments).__ho[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__ho[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__ho[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__ho[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__ho[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__ho[A[4]];

if(z){var D=A[4];
var C=this.constructor.__ho[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__ho[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__ip[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__ho[I];
var L=this.constructor.__ho[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__ip[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__ip[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__ip[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__ip[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__ip[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__ip[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__eh=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__ei=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__ej:null,__eh:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__ej);
this.__ej=null;
}else if(p){this.__ej=window.setInterval(this.__eh,this.getInterval());
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
}})},destruct:function(){if(this.__ej){window.clearInterval(this.__ej);
}this.__ej=this.__eh=null;
}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(d){d=d.firstChild;

while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(f,g){if(!g){g=window;
}var h=g.document.getElementsByTagName(f.nodeName);

for(var i=0,l=h.length;i<l;i++){if(h[i]===f){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(n,parent){if(parent.firstChild){this.insertBefore(n,parent.firstChild);
}else{parent.appendChild(n);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(r,s){var parent=s.parentNode;

if(s==parent.lastChild){parent.appendChild(r);
}else{return this.insertBefore(r,s.nextSibling);
}return true;
},remove:function(t){if(!t.parentNode){return false;
}t.parentNode.removeChild(t);
return true;
},removeChild:function(u,parent){if(u.parentNode!==parent){return false;
}parent.removeChild(u);
return true;
},removeChildAt:function(v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.removeChild(w);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(z,A,parent){var B=parent.childNodes[A];

if(!B){return false;
}parent.replaceChild(z,B);
return true;
}}});
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
(function(){var h=",",g="interval",f="changeStatus",e="qx.event.type.Data",d="qx.bom.webfonts.Validator",c="_applyFontFamily",b="span",a="Integer";
qx.Class.define(d,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);

if(i){this.setFontFamily(i);
}this.__dg=this._getRequestedHelpers();
},statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__dh:null,__di:null,removeDefaultHelperElements:function(){var j=qx.bom.webfonts.Validator.__di;

if(j){for(var k in j){document.body.removeChild(j[k]);
}}delete qx.bom.webfonts.Validator.__di;
}},properties:{fontFamily:{nullable:true,init:null,apply:c},timeout:{check:a,init:5000}},events:{"changeStatus":e},members:{__dg:null,__dj:null,__dk:null,validate:function(){this.__dk=new Date().getTime();

if(this.__dj){this.__dj.restart();
}else{this.__dj=new qx.event.Timer(100);
this.__dj.addListener(g,this.__dm,this);
qx.event.Timer.once(function(){this.__dj.start();
},this,0);
}},_reset:function(){if(this.__dg){for(var m in this.__dg){var l=this.__dg[m];
document.body.removeChild(l);
}this.__dg=null;
}},_isFontValid:function(){if(!qx.bom.webfonts.Validator.__dh){this.__dl();
}
if(!this.__dg){this.__dg=this._getRequestedHelpers();
}var o=qx.bom.element.Dimension.getWidth(this.__dg.sans);
var n=qx.bom.element.Dimension.getWidth(this.__dg.serif);
var p=qx.bom.webfonts.Validator;

if(o!==p.__dh.sans&&n!==p.__dh.serif){return true;
}return false;
},_getRequestedHelpers:function(){var q=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);
var r=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);
return {sans:this._getHelperElement(q),serif:this._getHelperElement(r)};
},_getHelperElement:function(s){var t=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);

if(s){if(t.fontFamily){t.fontFamily+=h+s.join(h);
}else{t.fontFamily=s.join(h);
}}var u=document.createElement(b);
u.innerHTML=qx.bom.webfonts.Validator.COMPARISON_STRING;
qx.bom.element.Style.setStyles(u,t);
document.body.appendChild(u);
return u;
},_applyFontFamily:function(v,w){if(v!==w){this._reset();
}},__dl:function(){var x=qx.bom.webfonts.Validator;

if(!x.__di){x.__di={sans:this._getHelperElement(x.COMPARISON_FONTS.sans),serif:this._getHelperElement(x.COMPARISON_FONTS.serif)};
}x.__dh={sans:qx.bom.element.Dimension.getWidth(x.__di.sans),serif:qx.bom.element.Dimension.getWidth(x.__di.serif)};
},__dm:function(){if(this._isFontValid()){this.__dj.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:true});
}else{var y=new Date().getTime();

if(y-this.__dk>=this.getTimeout()){this.__dj.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:false});
}}}},destruct:function(){this._reset();
this.__dj.stop();
this.__dj.removeListener(g,this.__dm,this);
this._disposeObjects(this.__dj);
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
},__ih:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__ih[t]){var w=r.clientWidth;

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

if(this.__ih[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gM={};
this.__gN={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__gO:{},__gM:null,__gN:null,_applyTheme:function(j,k){this.__gN={};
this.__gM={};
},__gP:function(l,m,n){var s=m.appearances;
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
return this.__gP(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__gP(q,m);

if(o){return o;
}}if(n!=null){return this.__gP(n,m);
}return null;
}else if(typeof v===h){return this.__gP(v,m,n);
}else if(v.include&&!v.style){return this.__gP(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__gN;
var B=F[x];

if(!B){B=F[x]=this.__gP(x,z,A);
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
}}var E=this.__gM;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__gO;
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
}},destruct:function(){this.__gM=this.__gN=null;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__oq(q.include);
q.patch=this.__oq(q.patch);
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__ot(r,q);
this.__or(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__oq:function(s){if(!s){return [];
}
if(qx.Bootstrap.isArray(s)){return s;
}else{return [s];
}},__or:function(t,u){var v=u.aliases||{};

if(u.extend&&u.extend.aliases){qx.Bootstrap.objectMergeWith(v,u.extend.aliases,false);
}t.aliases=v;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__os:function(w){for(var i=0,x=this.__ou,l=x.length;i<l;i++){if(w[x[i]]){return x[i];
}}},__ot:function(y,z){var C=this.__os(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||p;
var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__ou:[g,d,f,n,c,o,m,b],__ge:null,__ov:null,__gg:function(){},patch:function(F,G){var I=this.__os(G);

if(I!==this.__os(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
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
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="qx.ui.tooltip.ToolTip",h="_applyCurrent",g="qx.ui.tooltip.Manager",c="__pP",f="__pN",d="tooltip-error",b="singleton",a="__pM";
qx.Class.define(g,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__pW,this,true);
this.__pM=new qx.event.Timer();
this.__pM.addListener(n,this.__pT,this);
this.__pN=new qx.event.Timer();
this.__pN.addListener(n,this.__pU,this);
this.__pO={left:0,top:0};
},properties:{current:{check:i,nullable:true,apply:h},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__pO:null,__pN:null,__pM:null,__pP:null,__pQ:null,__pR:function(){if(!this.__pP){this.__pP=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__pP;
},__pS:function(){if(!this.__pQ){this.__pQ=new qx.ui.tooltip.ToolTip().set({appearance:d});
this.__pQ.syncAppearance();
}return this.__pQ;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__pM.stop();
this.__pN.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__pM.startWith(q.getShowTimeout());
t.addListener(s,l,this.__pX,this,true);
t.addListener(s,o,this.__pY,this,true);
t.addListener(s,k,this.__pV,this,true);
}else{t.removeListener(s,l,this.__pX,this,true);
t.removeListener(s,o,this.__pY,this,true);
t.removeListener(s,k,this.__pV,this,true);
}},__pT:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__pN.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__pO);
}u.show();
}this.__pM.stop();
},__pU:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__pN.stop();
this.resetCurrent();
},__pV:function(e){var w=this.__pO;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__pW:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||!z.getEnabled()||z.isBlockToolTip()||(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__pS().set({label:x});
}
if(!A){A=this.__pR().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__pX:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__pY:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__pW,this,true);
this._disposeObjects(a,f,c);
this.__pO=null;
}});
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
this.__bL={};
},statics:{MAX_SIZE:15,__bM:a},members:{__bL:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__bM;
e=c;
}var g=this.__bL;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__bM){i.dispose();
return;
}var k=this.__bL;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__bL;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__bL=null;
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__bU={};
this.__bV=qx.lang.Function.bind(this.__ca,this);
this.__bW=false;
},members:{__bX:null,__bY:null,__bU:null,__bW:null,__bV:null,schedule:function(c){if(this.__bX==null){this.__bX=window.setTimeout(this.__bV,0);
}var d=c.toHashCode();
if(this.__bY&&this.__bY[d]){return;
}this.__bU[d]=c;
this.__bW=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__bY&&this.__bY[f]){this.__bY[f]=null;
return;
}delete this.__bU[f];
if(qx.lang.Object.isEmpty(this.__bU)&&this.__bX!=null){window.clearTimeout(this.__bX);
this.__bX=null;
}},__ca:qx.event.GlobalError.observeMethod(function(){this.__bX=null;
while(this.__bW){this.__bY=qx.lang.Object.clone(this.__bU);
this.__bU={};
this.__bW=false;

for(var h in this.__bY){var g=this.__bY[h];

if(g){this.__bY[h]=null;
g.call();
}}}this.__bY=null;
})},destruct:function(){if(this.__bX!=null){window.clearTimeout(this.__bX);
}this.__bV=this.__bU=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__eB=b;
this.__eC=c||null;
this.__x=qx.util.DeferredCallManager.getInstance();
},members:{__eB:null,__eC:null,__x:null,cancel:function(){this.__x.cancel(this);
},schedule:function(){this.__x.schedule(this);
},call:function(){var d;
this.__eC?this.__eB.apply(this.__eC):this.__eB();
}},destruct:function(){this.cancel();
this.__eC=this.__eB=this.__x=null;
}});
})();
(function(){var m="element",k="qxSelectable",j="off",h="engine.name",g="on",f="text",d="div",c="",b="mshtml",a="none",F="scroll",E="qx.html.Element",D="|capture|",C="activate",B="blur",A="deactivate",z="capture",w="userSelect",v="-moz-none",u="visible",s="releaseCapture",t="|bubble|",q="tabIndex",r="focus",o="MozUserSelect",p="hidden",n="__iU";
qx.Class.define(E,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__iz=G||d;
this.__iA=H||null;
this.__iB=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__iC:{},_scheduleFlush:function(J){qx.html.Element.__eR.schedule();
},flush:function(){var U;
var M=this.__iD();
var L=M.getFocus();

if(L&&this.__iH(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__iH(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__iF();

if(P&&this.__iH(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__iY()){if(U.__iI&&qx.dom.Hierarchy.isRendered(U.__iI)){V.push(U);
}else{U.__iX();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
U.__iX();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__iI;

if(!X){delete R[T];
continue;
}if(!U.$$disposed){X.style.display=U.__iK?c:a;
if((qx.core.Environment.get(h)==b)){if(!(document.documentMode>=8)){X.style.visibility=U.__iK?u:p;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__iI;

if(bd&&bd.offsetWidth){var O=true;
if(U.__iN!=null){U.__iI.scrollLeft=U.__iN;
delete U.__iN;
}if(U.__iO!=null){U.__iI.scrollTop=U.__iO;
delete U.__iO;
}var Y=U.__iL;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__iL;
}else{O=false;
}}var ba=U.__iM;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__iM;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__iI;

if(!X||!N[bb.type]&&!bb.element.__iY()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__iC){var K=this.__iC[T];
var bd=K.element.__iI;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__iC[T];
}}qx.event.handler.Appear.refresh();
},__iD:function(){if(!this.__iE){var be=qx.event.Registration.getManager(window);
this.__iE=be.getHandler(qx.event.handler.Focus);
}return this.__iE;
},__iF:function(){if(!this.__iG){var bf=qx.event.Registration.getManager(window);
this.__iG=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__iG.getCaptureElement();
},__iH:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__iY();
}},members:{__iz:null,__iI:null,__cq:false,__iJ:true,__iK:true,__iL:null,__iM:null,__iN:null,__iO:null,__iP:null,__iQ:null,__iR:null,__iA:null,__iB:null,__iS:null,__iT:null,__iU:null,__iV:null,__iW:null,_scheduleChildrenUpdate:function(){if(this.__iV){return;
}this.__iV=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__iz);
},__iX:function(){var length;
var bi=this.__iU;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__iK&&bj.__iJ&&!bj.__iI){bj.__iX();
}}}
if(!this.__iI){this.__iI=this._createDomElement();
this.__iI.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__iV){this._syncChildren();
}}delete this.__iV;
},_insertChildren:function(){var bk=this.__iU;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__iI&&bm.__iJ){bl.appendChild(bm.__iI);
}}this.__iI.appendChild(bl);
}else{var bl=this.__iI;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__iI&&bm.__iJ){bl.appendChild(bm.__iI);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__iU;
var bu=bn.length;
var bo;
var bs;
var bq=this.__iI;
var bt=bq.childNodes;
var bp=0;
var bv;
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__iJ||bs.__iW!==this){bq.removeChild(bv);
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__iJ){bs=bo.__iI;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}}bp++;
}}},_copyData:function(bx){var bB=this.__iI;
var bA=this.__iB;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__iA;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__iS;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__iT;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__iT;
}},_syncData:function(){var bH=this.__iI;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__iQ;

if(bF){var bK=this.__iB;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__iQ=null;
}var bF=this.__iP;

if(bF){var bK=this.__iA;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__iP=null;
}var bF=this.__iR;

if(bF){var bK=this.__iS;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__iR=null;
}},__iY:function(){var bL=this;
while(bL){if(bL.__cq){return true;
}
if(!bL.__iJ||!bL.__iK){return false;
}bL=bL.__iW;
}return false;
},__ja:function(bM){if(bM.__iW===this){throw new Error("Child is already in: "+bM);
}
if(bM.__cq){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__iW){bM.__iW.remove(bM);
}bM.__iW=this;
if(!this.__iU){this.__iU=[];
}if(this.__iI){this._scheduleChildrenUpdate();
}},__jb:function(bN){if(bN.__iW!==this){throw new Error("Has no child: "+bN);
}if(this.__iI){this._scheduleChildrenUpdate();
}delete bN.__iW;
},__jc:function(bO){if(bO.__iW!==this){throw new Error("Has no child: "+bO);
}if(this.__iI){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__iU||null;
},getChild:function(bP){var bQ=this.__iU;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__iU;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__iU;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__iU;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__ja(arguments[i]);
}this.__iU.push.apply(this.__iU,arguments);
}else{this.__ja(bW);
this.__iU.push(bW);
}return this;
},addAt:function(bX,bY){this.__ja(bX);
qx.lang.Array.insertAt(this.__iU,bX,bY);
return this;
},remove:function(ca){var cb=this.__iU;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__jb(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__jb(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__iU;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__jb(cf);
qx.lang.Array.removeAt(this.__iU,cd);
return this;
},removeAll:function(){var cg=this.__iU;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__jb(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__iW||null;
},insertInto:function(parent,ch){parent.__ja(this);

if(ch==null){parent.__iU.push(this);
}else{qx.lang.Array.insertAt(this.__iU,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__iW;
parent.__ja(this);
qx.lang.Array.insertBefore(parent.__iU,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__iW;
parent.__ja(this);
qx.lang.Array.insertAfter(parent.__iU,this,cj);
return this;
},moveTo:function(ck){var parent=this.__iW;
parent.__jc(this);
var cl=parent.__iU.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__iU,cl);
qx.lang.Array.insertAt(parent.__iU,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__iW;
return this.moveTo(parent.__iU.indexOf(cm));
},moveAfter:function(cn){var parent=this.__iW;
return this.moveTo(parent.__iU.indexOf(cn)+1);
},free:function(){var parent=this.__iW;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__iU){return;
}parent.__jb(this);
qx.lang.Array.remove(parent.__iU,this);
return this;
},getDomElement:function(){return this.__iI||null;
},getNodeName:function(){return this.__iz;
},setNodeName:function(name){this.__iz=name;
},setRoot:function(co){this.__cq=co;
},useMarkup:function(cp){if(this.__iI){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(h)==b)){var cq=document.createElement(d);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__iI;
},useElement:function(cr){if(this.__iI){throw new Error("Could not overwrite existing element!");
}this.__iI=cr;
this.__iI.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(q);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__iz]){return true;
}return false;
},setSelectable:qx.core.Environment.select(h,{"webkit":function(cu){this.setAttribute(k,cu?g:j);
this.setStyle(w,cu?f:a);
},"gecko":function(cv){this.setAttribute(k,cv?g:j);
this.setStyle(o,cv?f:v);
},"default":function(cw){this.setAttribute(k,cw?g:j);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__iz];
},include:function(){if(this.__iJ){return;
}delete this.__iJ;

if(this.__iW){this.__iW._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__iJ){return;
}this.__iJ=false;

if(this.__iW){this.__iW._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__iJ===true;
},show:function(){if(this.__iK){return;
}
if(this.__iI){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__iW){this.__iW._scheduleChildrenUpdate();
}delete this.__iK;
},hide:function(){if(!this.__iK){return;
}
if(this.__iI){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__iK=false;
},isVisible:function(){return this.__iK===true;
},scrollChildIntoViewX:function(cx,cy,cz){var cA=this.__iI;
var cB=cx.getDomElement();

if(cz!==false&&cA&&cA.offsetWidth&&cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewX(cB,cA,cy);
}else{this.__iL={element:cx,align:cy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__iN;
},scrollChildIntoViewY:function(cC,cD,cE){var cF=this.__iI;
var cG=cC.getDomElement();

if(cE!==false&&cF&&cF.offsetWidth&&cG&&cG.offsetWidth){qx.bom.element.Scroll.intoViewY(cG,cF,cD);
}else{this.__iM={element:cC,align:cD};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__iO;
},scrollToX:function(x,cH){var cI=this.__iI;

if(cH!==true&&cI&&cI.offsetWidth){cI.scrollLeft=x;
delete this.__iN;
}else{this.__iN=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__iL;
},getScrollX:function(){var cJ=this.__iI;

if(cJ){return cJ.scrollLeft;
}return this.__iN||0;
},scrollToY:function(y,cK){var cL=this.__iI;

if(cK!==true&&cL&&cL.offsetWidth){cL.scrollTop=y;
delete this.__iO;
}else{this.__iO=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__iM;
},getScrollY:function(){var cM=this.__iI;

if(cM){return cM.scrollTop;
}return this.__iO||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(F,this.__je,this);
},enableScrolling:function(){this.removeListener(F,this.__je,this);
},__jd:null,__je:function(e){if(!this.__jd){this.__jd=true;
this.__iI.scrollTop=0;
this.__iI.scrollLeft=0;
delete this.__jd;
}},getTextSelection:function(){var cN=this.__iI;

if(cN){return qx.bom.Selection.get(cN);
}return null;
},getTextSelectionLength:function(){var cO=this.__iI;

if(cO){return qx.bom.Selection.getLength(cO);
}return null;
},getTextSelectionStart:function(){var cP=this.__iI;

if(cP){return qx.bom.Selection.getStart(cP);
}return null;
},getTextSelectionEnd:function(){var cQ=this.__iI;

if(cQ){return qx.bom.Selection.getEnd(cQ);
}return null;
},setTextSelection:function(cR,cS){var cT=this.__iI;

if(cT){qx.bom.Selection.set(cT,cR,cS);
return;
}qx.html.Element.__iC[this.toHashCode()]={element:this,start:cR,end:cS};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cU=this.__iI;

if(cU){qx.bom.Selection.clear(cU);
}delete qx.html.Element.__iC[this.toHashCode()];
},__jf:function(cV,cW){var cX=qx.html.Element._actions;
cX.push({type:cV,element:this,args:cW||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__jf(r);
},blur:function(){this.__jf(B);
},activate:function(){this.__jf(C);
},deactivate:function(){this.__jf(A);
},capture:function(cY){this.__jf(z,[cY!==false]);
},releaseCapture:function(){this.__jf(s);
},setStyle:function(da,dc,dd){if(!this.__iA){this.__iA={};
}
if(this.__iA[da]==dc){return;
}
if(dc==null){delete this.__iA[da];
}else{this.__iA[da]=dc;
}if(this.__iI){if(dd){qx.bom.element.Style.set(this.__iI,da,dc);
return this;
}if(!this.__iP){this.__iP={};
}this.__iP[da]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(de,df){var dg=qx.bom.element.Style;

if(!this.__iA){this.__iA={};
}
if(this.__iI){if(!this.__iP){this.__iP={};
}
for(var di in de){var dh=de[di];

if(this.__iA[di]==dh){continue;
}
if(dh==null){delete this.__iA[di];
}else{this.__iA[di]=dh;
}if(df){dg.set(this.__iI,di,dh);
continue;
}this.__iP[di]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var di in de){var dh=de[di];

if(this.__iA[di]==dh){continue;
}
if(dh==null){delete this.__iA[di];
}else{this.__iA[di]=dh;
}}}return this;
},removeStyle:function(dj,dk){this.setStyle(dj,null,dk);
},getStyle:function(dl){return this.__iA?this.__iA[dl]:null;
},getAllStyles:function(){return this.__iA||null;
},setAttribute:function(dm,dn,dp){if(!this.__iB){this.__iB={};
}
if(this.__iB[dm]==dn){return;
}
if(dn==null){delete this.__iB[dm];
}else{this.__iB[dm]=dn;
}if(this.__iI){if(dp){qx.bom.element.Attribute.set(this.__iI,dm,dn);
return this;
}if(!this.__iQ){this.__iQ={};
}this.__iQ[dm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dq,dr){for(var ds in dq){this.setAttribute(ds,dq[ds],dr);
}return this;
},removeAttribute:function(dt,du){this.setAttribute(dt,null,du);
},getAttribute:function(dv){return this.__iB?this.__iB[dv]:null;
},_applyProperty:function(name,dw){},_setProperty:function(dx,dy,dz){if(!this.__iS){this.__iS={};
}
if(this.__iS[dx]==dy){return;
}
if(dy==null){delete this.__iS[dx];
}else{this.__iS[dx]=dy;
}if(this.__iI){if(dz){this._applyProperty(dx,dy);
return this;
}if(!this.__iR){this.__iR={};
}this.__iR[dx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(dC){var dD=this.__iS;

if(!dD){return null;
}var dE=dD[dC];
return dE==null?null:dE;
},addListener:function(dF,dG,self,dH){var dI;

if(this.$$disposed){return null;
}
if(this.__iI){return qx.event.Registration.addListener(this.__iI,dF,dG,self,dH);
}
if(!this.__iT){this.__iT={};
}
if(dH==null){dH=false;
}var dJ=qx.event.Manager.getNextUniqueId();
var dK=dF+(dH?D:t)+dJ;
this.__iT[dK]={type:dF,listener:dG,self:self,capture:dH,unique:dJ};
return dK;
},removeListener:function(dL,dM,self,dN){var dO;

if(this.$$disposed){return null;
}
if(this.__iI){qx.event.Registration.removeListener(this.__iI,dL,dM,self,dN);
}else{var dQ=this.__iT;
var dP;

if(dN==null){dN=false;
}
for(var dR in dQ){dP=dQ[dR];
if(dP.listener===dM&&dP.self===self&&dP.capture===dN&&dP.type===dL){delete dQ[dR];
break;
}}}return this;
},removeListenerById:function(dS){if(this.$$disposed){return null;
}
if(this.__iI){qx.event.Registration.removeListenerById(this.__iI,dS);
}else{delete this.__iT[dS];
}return this;
},hasListener:function(dT,dU){if(this.$$disposed){return false;
}
if(this.__iI){return qx.event.Registration.hasListener(this.__iI,dT,dU);
}var dW=this.__iT;
var dV;

if(dU==null){dU=false;
}
for(var dX in dW){dV=dW[dX];
if(dV.capture===dU&&dV.type===dT){return true;
}}return false;
}},defer:function(dY){dY.__eR=new qx.util.DeferredCall(dY.flush,dY);
},destruct:function(){var ea=this.__iI;

if(ea){qx.event.Registration.getManager(ea).removeAllListeners(ea);
ea.$$element=c;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__iW;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(n);
this.__iB=this.__iA=this.__iT=this.__iS=this.__iQ=this.__iP=this.__iR=this.__iI=this.__iW=this.__iL=this.__iM=null;
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__x=f;
this.__cp=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__x:null,__cp:null,__kH:null,__kI:null,__kJ:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__kJ=qx.lang.Function.listener(this._onNative,this);
this.__kH=qx.bom.Event.supportsEvent(this.__cp,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cp,this.__kH,this.__kJ);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cp,this.__kH,this.__kJ);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__kI!=p){this.__kI=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cp,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__x=this.__cp=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__ef:null,__eg:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__ef=d;
this.__eg=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__ef=this.__ef;
g.__eg=this.__eg;
return g;
},getOrientation:function(){return this.__ef;
},isLandscape:function(){return this.__eg==c;
},isPortrait:function(){return this.__eg==a;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__x=b;
this.__cp=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__x:null,__cp:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__x=this.__cp=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__x=u;
this.__cp=u.getWindow();
this.__cq=this.__cp.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__cr:null,__cs:null,__x:null,__cp:null,__cq:null,__ct:null,__cu:null,__cv:null,__cw:null,__cx:false,__cy:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__cz:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__cA:function(F,G,H,I){if(!H){H=this.__cz(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cp,h,qx.event.type.Data,[G]);
},__cB:function(J,K,L){if(!L){L=this.__cz(J);
}var K=K||J.type;

if(K==r){this.__cC(J,L);
}else if(K==q){this.__cD(J,L);
}else if(K==s){this.__cE(J,L);
}},__cC:function(M,N){var O=M.changedTouches[0];
this.__ct=O.screenX;
this.__cu=O.screenY;
this.__cv=new Date().getTime();
this.__cw=M.changedTouches.length===1;
},__cD:function(P,Q){if(this.__cw&&P.changedTouches.length>1){this.__cw=false;
}},__cE:function(R,S){if(this.__cw){var T=R.changedTouches[0];
var V={x:T.screenX-this.__ct,y:T.screenY-this.__cu};
var W=qx.event.handler.Touch;

if(this.__cy==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__cA(R,f,S,qx.event.type.Tap);
}else{var U=this.__cF(R,S,V);

if(U){R.swipe=U;
this.__cA(R,c,S,qx.event.type.Swipe);
}}}},__cF:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__cv;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__cv,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__cG:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__cH(bi)){this.__cx=true;
}else if(bj==s){this.__cx=false;
}var bm=this.__cI(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__cH:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__cI:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__cz(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__cr=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,r,this.__cr);
Event.addNativeListener(this.__cq,q,this.__cr);
Event.addNativeListener(this.__cq,s,this.__cr);
Event.addNativeListener(this.__cq,m,this.__cr);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__cs=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,k,this.__cs);
Event.addNativeListener(this.__cq,o,this.__cs);
Event.addNativeListener(this.__cq,l,this.__cs);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,r,this.__cr);
Event.removeNativeListener(this.__cq,q,this.__cr);
Event.removeNativeListener(this.__cq,s,this.__cr);
Event.removeNativeListener(this.__cq,m,this.__cr);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,k,this.__cs);
Event.removeNativeListener(this.__cq,o,this.__cs);
Event.removeNativeListener(this.__cq,l,this.__cs);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__cx){return;
}var bt=this.__cG(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__cy=this.__cz(bu);
}this.__cA(bu,bv);
this.__cB(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__x=this.__cp=this.__cq=this.__cy=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
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
},isMultiTouch:function(){return this.__gL().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gK(f).pageX;
},getDocumentTop:function(g){return this.__gK(g).pageY;
},getScreenLeft:function(h){return this.__gK(h).screenX;
},getScreenTop:function(j){return this.__gK(j).screenY;
},getViewportLeft:function(k){return this.__gK(k).clientX;
},getViewportTop:function(l){return this.__gK(l).clientY;
},getIdentifier:function(m){return this.__gK(m).identifier;
},__gK:function(n){n=n==null?0:n;
return this.__gL()[n];
},__gL:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
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
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__x=d;
this.__gv={};
qx.event.handler.Appear.__gw[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gw:{},refresh:function(){var e=this.__gw;

for(var f in e){e[f].refresh();
}}},members:{__x:null,__gv:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__gv;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__gv;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__gv;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__x.dispatchEvent(w,t);
}}}},destruct:function(){this.__x=this.__gv=null;
delete qx.event.handler.Appear.__gw[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
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
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
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
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__x=u;
this.__cp=u.getWindow();
this.__cq=this.__cp.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eo:null,__ep:null,__eq:null,__er:null,__es:null,__x:null,__cp:null,__cq:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__cA:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cp,b,qx.event.type.Data,[E||D.type]);
},__et:function(){var H=[this.__cp,this.__cq,this.__cq.body];
var I=this.__cp;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__eo=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,q,this.__eo);
Event.addNativeListener(this.__cq,t,this.__eo);
Event.addNativeListener(this.__cq,r,this.__eo);
Event.addNativeListener(this.__cq,n,this.__eo);
Event.addNativeListener(this.__cq,p,this.__eo);
},_initMoveObserver:function(){this.__ep=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,j,this.__ep);
Event.addNativeListener(this.__cq,l,this.__ep);
Event.addNativeListener(this.__cq,k,this.__ep);
},_initWheelObserver:function(){this.__eq=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__et();
qx.bom.Event.addNativeListener(J.target,J.type,this.__eq);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,q,this.__eo);
Event.removeNativeListener(this.__cq,t,this.__eo);
Event.removeNativeListener(this.__cq,r,this.__eo);
Event.removeNativeListener(this.__cq,n,this.__eo);
Event.removeNativeListener(this.__cq,p,this.__eo);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,j,this.__ep);
Event.removeNativeListener(this.__cq,l,this.__ep);
Event.removeNativeListener(this.__cq,k,this.__ep);
},_stopWheelObserver:function(){var K=this.__et();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__eq);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__cA(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__eu){this.__eu(M,N,O);
}
if(this.__ew){this.__ew(M,N,O);
}this.__cA(M,N,O);

if(this.__ev){this.__ev(M,N,O);
}
if(this.__ex){this.__ex(M,N,O);
}this.__er=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__cA(P,o);
}),__eu:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__cA(Q,t,S);
}}},"default":null}),__ev:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__cA(T,p,V);
}},"default":null}),__ew:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__er==r){this.__cA(W,q,Y);
}else if(X==n){this.__cA(W,r,Y);
}},"default":null}),__ex:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__es=bc;
break;
case t:if(bc!==this.__es){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__es);
this.__cA(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__x=this.__cp=this.__cq=this.__es=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var j="left",i="right",h="middle",g="none",f="click",e="contextmenu",d="qx.event.type.Mouse",c="browser.documentmode",b="browser.name",a="ie";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.wheelDeltaX=k.wheelDeltaX;
l.wheelDeltaY=k.wheelDeltaY;
l.detail=k.detail;
l.axis=k.axis;
l.wheelX=k.wheelX;
l.wheelY=k.wheelY;
l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;
l.srcElement=k.srcElement;
l.target=k.target;
return l;
},__in:{0:j,2:i,1:h},__io:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__in[this._native.button]||g;
}else{return this.__io[this._native.button]||g;
}}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(n);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var l="engine.version",k="os.name",j="engine.name",i="x",h="osx",g="win",f="qx.dynamicmousewheel",d="chrome",c="qx.event.type.MouseWheel",b="browser.name",a="y";
qx.Class.define(c,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__bG:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__bH();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__bH();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__bH:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__bI(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__bI(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__bI(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__bI(-e.wheelDeltaY):0;
}else{y=this.__bI(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__bI(e.detail);
}}return y;
}return 0;
},__bI:function(w){if(qx.core.Environment.get(f)){return this.__bG(w);
}else{var z=qx.core.Environment.select(j,{"default":function(){return w/40;
},"gecko":function(){return w;
},"webkit":function(){if(qx.core.Environment.get(b)==d){if(qx.core.Environment.get(k)==h){return w/60;
}else{return w/120;
}}else{if(qx.core.Environment.get(k)==g){var A=120;
if(parseFloat(qx.core.Environment.get(l))==533.16){A=1200;
}}else{A=40;
if(parseFloat(qx.core.Environment.get(l))==533.16||parseFloat(qx.core.Environment.get(l))==533.17||parseFloat(qx.core.Environment.get(l))==533.18){A=1200;
}}return w/A;
}}});
return z.call(this);
}}}});
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
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__x=by;
this.__cp=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__cq=this.__cp;
}else{this.__cq=this.__cp.document.documentElement;
}this.__kx={};
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
}}},members:{__ky:null,__x:null,__cp:null,__cq:null,__kx:null,__kz:null,__kA:null,__kB:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__kC();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__x.dispatchEvent(bL,event);
}if(this.__cp){qx.event.Registration.fireEvent(this.__cp,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__kC();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__x.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cp){qx.event.Registration.fireEvent(this.__cp,s,qx.event.type.Data,[bN]);
}},__kC:function(){var bR=this.__x.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__x.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ky=qx.lang.Function.listener(this.__kD,this);
this.__kB=qx.lang.Function.listener(this.__dD,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,i,this.__ky);
Event.addNativeListener(this.__cq,m,this.__ky);
Event.addNativeListener(this.__cq,k,this.__kB);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,i,this.__ky);
Event.removeNativeListener(this.__cq,m,this.__ky);
Event.removeNativeListener(this.__cq,k,this.__kB);

for(var bU in (this.__kA||{})){var bT=this.__kA[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__kA);
},__kD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__kx[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__kx[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__kx[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__kx[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__kE(ca.target,cd,ce);
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
}}this.__kx[ci]=ch;
}},"opera":function(cj){this.__kz=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__kE:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__kA){this.__kA={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__kA[co]){return;
}var self=this;
this.__kA[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__dD(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__kA[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__dD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__kz){this._idealKeyHandler(0,this.__kz,cA,cz);
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
this.__kz=this.__x=this.__cp=this.__cq=this.__kx=null;
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
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,__ff:null,__fg:null,__fh:null,__fi:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__fw(S);

if(T){this.setActive(T);
}},__cA:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__fj:function(){if(this._windowFocused){this._windowFocused=false;
this.__cA(this._window,null,g,false);
}},__fk:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cA(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__fb=qx.lang.Function.listener(this.__fp,this);
this.__fc=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fl,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.addNativeListener(this._window,f,this.__fb,true);
qx.bom.Event.addNativeListener(this._window,g,this.__fc,true);
qx.bom.Event.addNativeListener(this._window,y,this.__fd,true);
},"mshtml":function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__ff=qx.lang.Function.listener(this.__fm,this);
this.__fg=qx.lang.Function.listener(this.__fn,this);
this.__fe=qx.lang.Function.listener(this.__ft,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eY);
qx.bom.Event.addNativeListener(this._document,h,this.__fa);
qx.bom.Event.addNativeListener(this._document,b,this.__ff);
qx.bom.Event.addNativeListener(this._document,a,this.__fg);
qx.bom.Event.addNativeListener(this._document,d,this.__fe);
},"webkit":function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__fg=qx.lang.Function.listener(this.__fn,this);
this.__fb=qx.lang.Function.listener(this.__fp,this);
this.__fc=qx.lang.Function.listener(this.__fo,this);
this.__fe=qx.lang.Function.listener(this.__ft,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.addNativeListener(this._document,d,this.__fe,false);
qx.bom.Event.addNativeListener(this._window,c,this.__fg,true);
qx.bom.Event.addNativeListener(this._window,f,this.__fb,true);
qx.bom.Event.addNativeListener(this._window,g,this.__fc,true);
},"opera":function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__ff=qx.lang.Function.listener(this.__fm,this);
this.__fg=qx.lang.Function.listener(this.__fn,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.addNativeListener(this._window,z,this.__ff,true);
qx.bom.Event.addNativeListener(this._window,c,this.__fg,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__fb,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__fc,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__fd,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eY);
qx.bom.Event.removeNativeListener(this._document,h,this.__fa);
qx.bom.Event.removeNativeListener(this._document,b,this.__ff);
qx.bom.Event.removeNativeListener(this._document,a,this.__fg);
qx.bom.Event.removeNativeListener(this._document,d,this.__fe);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__fe,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__fg,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__fb,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__fc,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__ff,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__fg,true);
}}),__fl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__fx(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__fm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__fk();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__fv(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__fk();

if(this.__fh){this.setFocus(this.__fh);
delete this.__fh;
}
if(this.__fi){this.setActive(this.__fi);
delete this.__fi;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__fx(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__fn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__fj();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__fj();
this.__fh=this.getFocus();
this.__fi=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__fo:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__fj();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__fj();
this.__fh=this.getFocus();
this.__fi=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__fk();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__fk();

if(this.__fh){this.setFocus(this.__fh);
delete this.__fh;
}
if(this.__fi){this.setActive(this.__fi);
delete this.__fi;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__fq:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__fv(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__fv(bB);

if(bA){if(!this.__fx(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__fx(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__fv(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__fv(bK);

if(!this.__fx(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__fr:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__fs(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__fs(bQ));
},"default":null})),__fs:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__ft:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__fx(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__fu:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__fv:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__fu(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__fw:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__fx:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__cA(cg,cf,v,true);
}
if(cf){this.__cA(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__cA(ci,ch,a,true);
}
if(ch){this.__cA(ch,ci,b,true);
}if(ci){this.__cA(ci,ch,g,false);
}
if(ch){this.__cA(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fy=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__fz(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__fz(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__fz(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__fz(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__fz(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__fz(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__fz(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__fz(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__fz(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__fz:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",C="Alt",B="keyup",A="mouseup",z="keypress",y="dragend",x="on",w="mousedown",v="qxDraggable",u="Escape",t="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(D){qx.core.Object.call(this);
this.__x=D;
this.__cq=D.getWindow().document.documentElement;
this.__x.addListener(this.__cq,w,this._onMouseDown,this);
this.__hV();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__x:null,__cq:null,__hM:null,__hN:null,__C:null,__hO:null,__hP:null,__cJ:null,__hQ:null,__hR:null,__hS:false,__hT:0,__hU:0,canHandleEvent:function(E,F){},registerEvent:function(G,H,I){},unregisterEvent:function(J,K,L){},addType:function(M){this.__C[M]=true;
},addAction:function(N){this.__hO[N]=true;
},supportsType:function(O){return !!this.__C[O];
},supportsAction:function(P){return !!this.__hO[P];
},getData:function(Q){if(!this.__ic||!this.__hM){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__C[Q]){throw new Error("Unsupported data type: "+Q+"!");
}
if(!this.__cJ[Q]){this.__hQ=Q;
this.__cA(q,this.__hN,this.__hM,false);
}
if(!this.__cJ[Q]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__cJ[Q]||null;
},getCurrentAction:function(){return this.__hR;
},addData:function(R,S){this.__cJ[R]=S;
},getCurrentType:function(){return this.__hQ;
},isSessionActive:function(){return this.__hS;
},__hV:function(){this.__C={};
this.__hO={};
this.__hP={};
this.__cJ={};
},__hW:function(){if(this.__hN==null){return;
}var V=this.__hO;
var T=this.__hP;
var U=null;

if(this.__ic){if(T.Shift&&T.Control&&V.alias){U=k;
}else if(T.Shift&&T.Alt&&V.copy){U=j;
}else if(T.Shift&&V.move){U=b;
}else if(T.Alt&&V.alias){U=k;
}else if(T.Control&&V.copy){U=j;
}else if(V.move){U=b;
}else if(V.copy){U=j;
}else if(V.alias){U=k;
}}
if(U!=this.__hR){this.__hR=U;
this.__cA(o,this.__hN,this.__hM,false);
}},__cA:function(W,X,Y,ba,bb){var bd=qx.event.Registration;
var bc=bd.createEvent(W,qx.event.type.Drag,[ba,bb]);

if(X!==Y){bc.setRelatedTarget(Y);
}return bd.dispatchEvent(X,bc);
},__hX:function(be){while(be&&be.nodeType==1){if(be.getAttribute(v)==x){return be;
}be=be.parentNode;
}return null;
},__hY:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(s)==x){return bf;
}bf=bf.parentNode;
}return null;
},__ia:function(){this.__hN=null;
this.__x.removeListener(this.__cq,c,this._onMouseMove,this,true);
this.__x.removeListener(this.__cq,A,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__hV();
},__ib:function(){if(this.__hS){this.__x.removeListener(this.__cq,a,this._onMouseOver,this,true);
this.__x.removeListener(this.__cq,h,this._onMouseOut,this,true);
this.__x.removeListener(this.__cq,g,this._onKeyDown,this,true);
this.__x.removeListener(this.__cq,B,this._onKeyUp,this,true);
this.__x.removeListener(this.__cq,z,this._onKeyPress,this,true);
this.__cA(y,this.__hN,this.__hM,false);
this.__hS=false;
}this.__ic=false;
this.__hM=null;
this.__ia();
},__ic:false,_onWindowBlur:function(e){this.__ib();
},_onKeyDown:function(e){var bg=e.getKeyIdentifier();

switch(bg){case C:case f:case d:if(!this.__hP[bg]){this.__hP[bg]=true;
this.__hW();
}}},_onKeyUp:function(e){var bh=e.getKeyIdentifier();

switch(bh){case C:case f:case d:if(this.__hP[bh]){this.__hP[bh]=false;
this.__hW();
}}},_onKeyPress:function(e){var bi=e.getKeyIdentifier();

switch(bi){case u:this.__ib();
}},_onMouseDown:function(e){if(this.__hS){return;
}var bj=this.__hX(e.getTarget());

if(bj){this.__hT=e.getDocumentLeft();
this.__hU=e.getDocumentTop();
this.__hN=bj;
this.__x.addListener(this.__cq,c,this._onMouseMove,this,true);
this.__x.addListener(this.__cq,A,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__ic){this.__cA(r,this.__hM,this.__hN,false,e);
}if(this.__hS){e.stopPropagation();
}this.__ib();
},_onMouseMove:function(e){if(this.__hS){if(!this.__cA(t,this.__hN,this.__hM,true,e)){this.__ib();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hT)>3||Math.abs(e.getDocumentTop()-this.__hU)>3){if(this.__cA(n,this.__hN,this.__hM,true,e)){this.__hS=true;
this.__x.addListener(this.__cq,a,this._onMouseOver,this,true);
this.__x.addListener(this.__cq,h,this._onMouseOut,this,true);
this.__x.addListener(this.__cq,g,this._onKeyDown,this,true);
this.__x.addListener(this.__cq,B,this._onKeyUp,this,true);
this.__x.addListener(this.__cq,z,this._onKeyPress,this,true);
var bk=this.__hP;
bk.Control=e.isCtrlPressed();
bk.Shift=e.isShiftPressed();
bk.Alt=e.isAltPressed();
this.__hW();
}else{this.__cA(y,this.__hN,this.__hM,false);
this.__ia();
}}}},_onMouseOver:function(e){var bl=e.getTarget();
var bm=this.__hY(bl);

if(bm&&bm!=this.__hM){this.__ic=this.__cA(m,bm,this.__hN,true,e);
this.__hM=bm;
this.__hW();
}},_onMouseOut:function(e){var bo=this.__hY(e.getTarget());
var bn=this.__hY(e.getRelatedTarget());

if(bo&&bo!==bn&&bo==this.__hM){this.__cA(l,this.__hM,bn,false,e);
this.__hM=null;
this.__ic=false;
qx.event.Timer.once(this.__hW,this,0);
}}},destruct:function(){this.__hN=this.__hM=this.__x=this.__cq=this.__C=this.__hO=this.__hP=this.__cJ=null;
},defer:function(bp){qx.event.Registration.addHandler(bp);
}});
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
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__lp:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__lq:{},__lr:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__lr[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__lr[t]=true;
}catch(e){qx.bom.Element.__lr[t]=false;
}}return qx.bom.Element.__lr[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__lq[w]){var v=qx.bom.Element.__lq[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__lq[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__lp;
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
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__eA:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__eA.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__eA;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__eA;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__eA;
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
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cp=j.getWindow();
this.__cW=k;
j.addListener(this.__cp,f,this.releaseCapture,this);
j.addListener(this.__cp,e,this.releaseCapture,this);
j.addListener(this.__cp,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cW:null,__cX:null,__cY:true,__cp:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__cX&&this.__da[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__cY||!qx.dom.Hierarchy.contains(this.__cX,o)){o=this.__cX;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__da:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__cX===q&&this.__cY==r){return;
}
if(this.__cX){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__cY=r;
this.__cX=q;
this.__cW.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__cX;
},releaseCapture:function(){var s=this.__cX;

if(!s){return;
}this.__cX=null;
this.__cW.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__cX=this.__cp=this.__cW=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
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
if(C){L=E?{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
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
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
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
(function(){var j="borderTopWidth",i="borderLeftWidth",h="marginTop",g="marginLeft",f="engine.name",e="scroll",d="engine.version",c="border-box",b="borderBottomWidth",a="borderRightWidth",C="auto",B="padding",A="browser.quirksmode",z="qx.bom.element.Location",y="paddingLeft",x="static",w="marginBottom",v="visible",u="BODY",t="opera",q="paddingBottom",r="paddingTop",o="marginRight",p="position",m="margin",n="overflow",k="paddingRight",l="browser.documentmode",s="border";
qx.Class.define(z,{statics:{__kU:function(D,E){return qx.bom.element.Style.get(D,E,qx.bom.element.Style.COMPUTED_MODE,false);
},__kV:function(F,G){return parseInt(qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__kW:function(H){var K=0,top=0;
if(H.getBoundingClientRect&&qx.core.Environment.get(f)!=t){var J=qx.dom.Node.getWindow(H);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
}else{var I=qx.dom.Node.getDocument(H).body;
H=H.parentNode;
while(H&&H!=I){K+=H.scrollLeft;
top+=H.scrollTop;
H=H.parentNode;
}}return {left:K,top:top};
},__kX:qx.core.Environment.select(f,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(A)){O+=this.__kV(M,i);
top+=this.__kV(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<530.17){S+=this.__kV(Q,i);
top+=this.__kV(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(d))<1.9){V+=this.__kV(U,g);
top+=this.__kV(U,h);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__kV(U,i);
top+=this.__kV(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__kY:qx.core.Environment.select(f,{"mshtml|webkit":function(ba){var bc=qx.dom.Node.getDocument(ba);
if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=bd.left;
var top=bd.top;
}else{var be=ba.offsetLeft;
var top=ba.offsetTop;
ba=ba.offsetParent;
var bb=bc.body;
while(ba&&ba!=bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
be+=this.__kV(ba,i);
top+=this.__kV(ba,j);
ba=ba.offsetParent;
}}return {left:be,top:top};
},"gecko":function(bf){if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=Math.round(bi.left);
var top=Math.round(bi.top);
}else{var bj=0;
var top=0;
var bg=qx.dom.Node.getDocument(bf).body;
var bh=qx.bom.element.BoxSizing;

if(bh.get(bf)!==c){bj-=this.__kV(bf,i);
top-=this.__kV(bf,j);
}
while(bf&&bf!==bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
if(bh.get(bf)!==c){bj+=this.__kV(bf,i);
top+=this.__kV(bf,j);
}if(bf.parentNode&&this.__kU(bf.parentNode,n)!=v){bj+=this.__kV(bf.parentNode,i);
top+=this.__kV(bf.parentNode,j);
}bf=bf.offsetParent;
}}return {left:bj,top:top};
},"default":function(bk){var bm=0;
var top=0;
var bl=qx.dom.Node.getDocument(bk).body;
while(bk&&bk!==bl){bm+=bk.offsetLeft;
top+=bk.offsetTop;
bk=bk.offsetParent;
}return {left:bm,top:top};
}}),get:function(bn,bo){if(bn.tagName==u){var location=this.__la(bn);
var bv=location.left;
var top=location.top;
}else{var bp=this.__kX(bn);
var bu=this.__kY(bn);
var scroll=this.__kW(bn);
var bv=bu.left+bp.left-scroll.left;
var top=bu.top+bp.top-scroll.top;
}var bq=bv+bn.offsetWidth;
var br=top+bn.offsetHeight;

if(bo){if(bo==B||bo==e){var bs=qx.bom.element.Overflow.getX(bn);

if(bs==e||bs==C){bq+=bn.scrollWidth-bn.offsetWidth+this.__kV(bn,i)+this.__kV(bn,a);
}var bt=qx.bom.element.Overflow.getY(bn);

if(bt==e||bt==C){br+=bn.scrollHeight-bn.offsetHeight+this.__kV(bn,j)+this.__kV(bn,b);
}}
switch(bo){case B:bv+=this.__kV(bn,y);
top+=this.__kV(bn,r);
bq-=this.__kV(bn,k);
br-=this.__kV(bn,q);
case e:bv-=bn.scrollLeft;
top-=bn.scrollTop;
bq-=bn.scrollLeft;
br-=bn.scrollTop;
case s:bv+=this.__kV(bn,i);
top+=this.__kV(bn,j);
bq-=this.__kV(bn,a);
br-=this.__kV(bn,b);
break;
case m:bv-=this.__kV(bn,g);
top-=this.__kV(bn,h);
bq+=this.__kV(bn,o);
br+=this.__kV(bn,w);
break;
}}return {left:bv,top:top,right:bq,bottom:br};
},__la:qx.core.Environment.select(f,{"default":function(bw){var top=bw.offsetTop+this.__kV(bw,h);
var bx=bw.offsetLeft+this.__kV(bw,g);
return {left:bx,top:top};
},"mshtml":function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(!((parseFloat(qx.core.Environment.get(d))<8||qx.core.Environment.get(l)<8)&&!qx.core.Environment.get(A))){top+=this.__kV(by,h);
bz+=this.__kV(by,g);
}return {left:bz,top:top};
},"gecko":function(bA){var top=bA.offsetTop+this.__kV(bA,h)+this.__kV(bA,i);
var bB=bA.offsetLeft+this.__kV(bA,g)+this.__kV(bA,j);
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
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__de=e;
this.__df=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__df:null,__de:null,getId:function(){return this.__df;
},getDecorator:function(){return this.__de;
},resize:function(h,i){this.__de.resize(this.getDomElement(),h,i);
},tint:function(j){this.__de.tint(this.getDomElement(),j);
},getInsets:function(){return this.__de.getInsets();
}},destruct:function(){this.__de=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__cb:null,__cc:null,__cd:null,__ce:null,__cf:null,__cg:null,__ch:null,getBounds:function(){return this.__cg||this.__cc||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__cb){this.__cb=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__cc;

if(!G){G=this.__cc={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__cd){F.local=true;
delete this.__cd;
}
if(this.__cf){F.margin=true;
delete this.__cf;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__cd;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__cd=true;
this.__ce=null;
},getSizeHint:function(H){var I=this.__ce;

if(I){return I;
}
if(H===false){return null;
}I=this.__ce=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__cb&&this.getHeight()==null){I.height=this.__cb;
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
},_applyMargin:function(){this.__cf=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__cg;
},setUserBounds:function(S,top,T,U){this.__cg={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__cg;
qx.ui.core.queue.Layout.add(this);
},__ci:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__ch;

if(!W){W=this.__ch={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__ch||this.__ci;
},clearLayoutProperties:function(){delete this.__ch;
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
var bd=this.__ch;

if(bd){bc.__ch=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__ch=this.__cc=this.__cg=this.__ce=null;
}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__db:{},remove:function(c){delete this.__db[c.$$hash];
},add:function(d){this.__db[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__db[e.$$hash];
},flush:function(){var f=this.__kM();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__kL;
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
},__kK:function(){var t=qx.ui.core.queue.Visibility;
this.__kL={};
var s=[];
var r=this.__db;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__kM:function(){var x=[];
var z=this.__kK();

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
(function(){var h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__eK:false,__eL:{},__eM:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__eL[i]=true;

if(!self.__eK){self.__eR.schedule();
self.__eK=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__eN){return;
}self.__eN=true;
self.__eR.cancel();
var j=self.__eL;
self.__eO(function(){while(j.visibility||j.widget||j.appearance||j.layout||j.element){if(j.widget){delete j.widget;
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
}}},function(){self.__eK=false;
});
self.__eO(function(){if(j.dispose){delete j.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__eN=false;
});
self.__eM=0;
},__eO:function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){self.__eK=false;
self.__eN=false;
self.__eM+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){l();
}
if(self.__eM<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__eM-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}},__eP:function(e){var m=qx.ui.core.queue.Manager;
if(e.getData()==g){m.PAUSE=true;

if(m.__eQ){window.clearTimeout(m.__eQ);
}m.__eQ=window.setTimeout(function(){m.PAUSE=false;
m.__eQ=null;
m.flush();
},500);
}else{m.flush();
}}},defer:function(n){n.__eR=new qx.util.DeferredCall(n.flush);
qx.html.Element._scheduleFlush=n.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?n.__eP:n.flush);
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__db:[],remove:function(c){qx.lang.Array.remove(this.__db,c);
},add:function(d){var e=this.__db;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__db;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__db=[];
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__db:[],__dc:{},remove:function(c){delete this.__dc[c.$$hash];
qx.lang.Array.remove(this.__db,c);
},isVisible:function(d){return this.__dc[d.$$hash]||false;
},__dd:function(e){var g=this.__dc;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__dd(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__db;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__db;
var p=this.__dc;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__dd(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__db=[];
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__db:[],remove:function(c){qx.lang.Array.remove(this.__db,c);
},add:function(d){var e=this.__db;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__db,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__db;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__db:[],add:function(c){var d=this.__db;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},isEmpty:function(){return this.__db.length==0;
},flush:function(){var e=this.__db;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__db=[];
}}});
})();
(function(){var bY="px",bX="Boolean",bW="qx.event.type.Drag",bV="qx.event.type.Mouse",bU="visible",bT="qx.event.type.Focus",bS="Integer",bR="qx.event.type.Touch",bQ="qx.event.type.Data",bP="excluded",bx="_applyPadding",bw="qx.event.type.Event",bv="on",bu="hidden",bt="engine.name",bs="contextmenu",br="String",bq="tabIndex",bp="focused",bo="changeVisibility",cg="mshtml",ch="hovered",ce="qx.event.type.KeySequence",cf="absolute",cc="backgroundColor",cd="drag",ca="div",cb="disabled",ci="move",cj="dragstart",bI="qx.dynlocale",bH="dragchange",bK="dragend",bJ="resize",bM="Decorator",bL="zIndex",bO="opacity",bN="default",bG="Color",bF="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="__jr",g="_applyBackgroundColor",h="event.pointer",j="_applyFocusable",k="changeShadow",m="qx.event.type.KeyInput",n="createChildControl",o="Font",cn="_applyShadow",cm="_applyEnabled",cl="_applySelectable",ck="Number",cr="_applyKeepActive",cq="_applyVisibility",cp="__jk",co="repeat",ct="qxDraggable",cs="syncAppearance",N="paddingLeft",O="__jp",L="_applyDroppable",M="#",R="qx.event.type.MouseWheel",S="__jh",P="_applyCursor",Q="_applyDraggable",J="changeTextColor",K="$$widget",w="changeContextMenu",v="paddingTop",y="changeSelectable",x="hideFocus",s="none",r="outline",u="_applyAppearance",t="_applyOpacity",q="__jl",p="url(",X=")",Y="qx.ui.core.Widget",ba="_applyFont",bb="cursor",T="qxDroppable",U="changeZIndex",V="changeEnabled",W="changeFont",bc="_applyDecorator",bd="_applyZIndex",G="_applyTextColor",F="qx.ui.menu.Menu",E="__jg",D="_applyToolTipText",C="true",B="widget",A="changeDecorator",z="_applyTabIndex",I="changeAppearance",H="shorthand",be="/",bf="",bg="__jm",bh="_applyContextMenu",bi="paddingBottom",bj="changeNativeContextMenu",bk="undefined",bl="qx.ui.tooltip.ToolTip",bm="__jt",bn="qxKeepActive",bB="_applyKeepFocus",bA="paddingRight",bz="changeBackgroundColor",by="changeLocale",bE="qxKeepFocus",bD="opera",bC="qx/static/blank.gif";
qx.Class.define(Y,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__jg=this._createContainerElement();
this.__jh=this.__js();
this.__jg.add(this.__jh);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bw,disappear:bw,createChildControl:bQ,resize:bQ,move:bQ,syncAppearance:bQ,mousemove:bV,mouseover:bV,mouseout:bV,mousedown:bV,mouseup:bV,click:bV,dblclick:bV,contextmenu:bV,beforeContextmenuOpen:bQ,mousewheel:R,touchstart:bR,touchend:bR,touchmove:bR,touchcancel:bR,tap:bR,swipe:bR,keyup:ce,keydown:ce,keypress:ce,keyinput:m,focus:bT,blur:bT,focusin:bT,focusout:bT,activate:bT,deactivate:bT,capture:bw,losecapture:bw,drop:bW,dragleave:bW,dragover:bW,drag:bW,dragstart:bW,dragend:bW,dragchange:bW,droprequest:bW},properties:{paddingTop:{check:bS,init:0,apply:bx,themeable:true},paddingRight:{check:bS,init:0,apply:bx,themeable:true},paddingBottom:{check:bS,init:0,apply:bx,themeable:true},paddingLeft:{check:bS,init:0,apply:bx,themeable:true},padding:{group:[v,bA,bi,N],mode:H,themeable:true},zIndex:{nullable:true,init:null,apply:bd,event:U,check:bS,themeable:true},decorator:{nullable:true,init:null,apply:bc,event:A,check:bM,themeable:true},shadow:{nullable:true,init:null,apply:cn,event:k,check:bM,themeable:true},backgroundColor:{nullable:true,check:bG,apply:g,event:bz,themeable:true},textColor:{nullable:true,check:bG,apply:G,event:J,themeable:true,inheritable:true},font:{nullable:true,apply:ba,check:o,event:W,themeable:true,inheritable:true,dereference:true},opacity:{check:ck,apply:t,themeable:true,nullable:true,init:null},cursor:{check:br,apply:P,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bl,nullable:true},toolTipText:{check:br,nullable:true,event:bF,apply:D},toolTipIcon:{check:br,nullable:true,event:bF},blockToolTip:{check:bX,init:false},visibility:{check:[bU,bu,bP],init:bU,apply:cq,event:bo},enabled:{init:true,check:bX,inheritable:true,apply:cm,event:V},anonymous:{init:false,check:bX},tabIndex:{check:bS,nullable:true,apply:z},focusable:{check:bX,init:false,apply:j},keepFocus:{check:bX,init:false,apply:bB},keepActive:{check:bX,init:false,apply:cr},draggable:{check:bX,init:false,apply:Q},droppable:{check:bX,init:false,apply:L},selectable:{check:bX,init:false,event:y,apply:cl},contextMenu:{check:F,apply:bh,nullable:true,event:w},nativeContextMenu:{check:bX,init:false,themeable:true,event:bj,apply:d},appearance:{check:br,init:B,apply:u,event:I}},statics:{DEBUG:false,getWidgetByElement:function(cu,cv){while(cu){var cw=cu.$$widget;
if(cw!=null){var cx=qx.core.ObjectRegistry.fromHashCode(cw);
if(!cv||!cx.getAnonymous()){return cx;
}}try{cu=cu.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cy){while(cy){if(parent==cy){return true;
}cy=cy.getLayoutParent();
}return false;
},__ji:new qx.ui.core.DecoratorFactory(),__jj:new qx.ui.core.DecoratorFactory()},members:{__jg:null,__jh:null,__jk:null,__jl:null,__jm:null,__jn:null,__jo:null,__jp:null,_getLayout:function(){return this.__jp;
},_setLayout:function(cz){if(this.__jp){this.__jp.connectToWidget(null);
}
if(cz){cz.connectToWidget(this);
}this.__jp=cz;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cA=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cA);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cA);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__jq:function(a,b){if(a==b){return false;
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
if(cP.size){var cO=this.__jm;

if(cO){cO.setStyles({width:cF+bY,height:cG+bY});
}}
if(cP.size||this._updateInsets){if(this.__jk){this.__jk.resize(cF,cG);
}}
if(cP.size){if(this.__jl){var cH=this.__jl.getInsets();
var cL=cF+cH.left+cH.right;
var cJ=cG+cH.top+cH.bottom;
this.__jl.resize(cL,cJ);
}}
if(cM||cP.local||cP.margin){if(this.__jp&&this.hasLayoutChildren()){this.__jp.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cP.position&&this.hasListener(ci)){this.fireDataEvent(ci,this.getBounds());
}
if(cP.size&&this.hasListener(bJ)){this.fireDataEvent(bJ,this.getBounds());
}delete this._updateInsets;
return cP;
},__jr:null,clearSeparators:function(){var cS=this.__jr;

if(!cS){return;
}var cT=qx.ui.core.Widget.__ji;
var content=this.getContentElement();
var cR;

for(var i=0,l=cS.length;i<l;i++){cR=cS[i];
cT.poolDecorator(cR);
content.remove(cR);
}cS.length=0;
},renderSeparator:function(cU,cV){var cW=qx.ui.core.Widget.__ji.getDecoratorElement(cU);
this.getContentElement().add(cW);
cW.resize(cV.width,cV.height);
cW.setStyles({left:cV.left+bY,top:cV.top+bY});
if(!this.__jr){this.__jr=[cW];
}else{this.__jr.push(cW);
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
if(dd>cY&&cY!=null){dd=cY;
}}}
if(da==null){da=dg;

if(df.minHeight!=null){da+=df.minHeight;
if(da>db&&db!=null){da=db;
}}}
if(cY==null){if(df.maxWidth==null){cY=Infinity;
}else{cY=df.maxWidth+dh;
if(cY<dd&&dd!=null){cY=dd;
}}}
if(db==null){if(df.maxHeight==null){db=Infinity;
}else{db=df.maxHeight+dg;
if(db<da&&da!=null){db=da;
}}}return {width:de,minWidth:dd,maxWidth:cY,height:dc,minHeight:da,maxHeight:db};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__jp){this.__jp.invalidateLayoutCache();
}},_getContentHint:function(){var dj=this.__jp;

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

if(this.__jk){var dv=this.__jk.getInsets();
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
},__js:function(){var dF=this._createContentElement();
dF.setStyles({"position":cf,"zIndex":10});
return dF;
},_createContentElement:function(){return new qx.html.Element(ca,{overflowX:bu,overflowY:bu});
},getContainerElement:function(){return this.__jg;
},getContentElement:function(){return this.__jh;
},getDecoratorElement:function(){return this.__jk||null;
},getShadowElement:function(){return this.__jl||null;
},__jt:null,getLayoutChildren:function(){var dH=this.__jt;

if(!dH){return this.__ju;
}var dI;

for(var i=0,l=dH.length;i<l;i++){var dG=dH[i];

if(dG.hasUserBounds()||dG.isExcluded()){if(dI==null){dI=dH.concat();
}qx.lang.Array.remove(dI,dG);
}}return dI||dH;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dJ=this.__jp;

if(dJ){dJ.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dK=this.__jt;

if(!dK){return false;
}var dL;

for(var i=0,l=dK.length;i<l;i++){dL=dK[i];

if(!dL.hasUserBounds()&&!dL.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ju:[],_getChildren:function(){return this.__jt||this.__ju;
},_indexOf:function(dM){var dN=this.__jt;

if(!dN){return -1;
}return dN.indexOf(dM);
},_hasChildren:function(){var dO=this.__jt;
return dO!=null&&(!!dO[0]);
},addChildrenToQueue:function(dP){var dQ=this.__jt;

if(!dQ){return;
}var dR;

for(var i=0,l=dQ.length;i<l;i++){dR=dQ[i];
dP.push(dR);
dR.addChildrenToQueue(dP);
}},_add:function(dS,dT){if(dS.getLayoutParent()==this){qx.lang.Array.remove(this.__jt,dS);
}
if(this.__jt){this.__jt.push(dS);
}else{this.__jt=[dS];
}this.__jv(dS,dT);
},_addAt:function(dU,dV,dW){if(!this.__jt){this.__jt=[];
}if(dU.getLayoutParent()==this){qx.lang.Array.remove(this.__jt,dU);
}var dX=this.__jt[dV];

if(dX===dU){dU.setLayoutProperties(dW);
}
if(dX){qx.lang.Array.insertBefore(this.__jt,dU,dX);
}else{this.__jt.push(dU);
}this.__jv(dU,dW);
},_addBefore:function(dY,ea,eb){if(dY==ea){return;
}
if(!this.__jt){this.__jt=[];
}if(dY.getLayoutParent()==this){qx.lang.Array.remove(this.__jt,dY);
}qx.lang.Array.insertBefore(this.__jt,dY,ea);
this.__jv(dY,eb);
},_addAfter:function(ec,ed,ee){if(ec==ed){return;
}
if(!this.__jt){this.__jt=[];
}if(ec.getLayoutParent()==this){qx.lang.Array.remove(this.__jt,ec);
}qx.lang.Array.insertAfter(this.__jt,ec,ed);
this.__jv(ec,ee);
},_remove:function(ef){if(!this.__jt){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__jt,ef);
this.__jw(ef);
},_removeAt:function(eg){if(!this.__jt){throw new Error("This widget has no children!");
}var eh=this.__jt[eg];
qx.lang.Array.removeAt(this.__jt,eg);
this.__jw(eh);
return eh;
},_removeAll:function(){if(!this.__jt){return [];
}var ei=this.__jt.concat();
this.__jt.length=0;

for(var i=ei.length-1;i>=0;i--){this.__jw(ei[i]);
}qx.ui.core.queue.Layout.add(this);
return ei;
},_afterAddChild:null,_afterRemoveChild:null,__jv:function(ej,ek){var parent=ej.getLayoutParent();

if(parent&&parent!=this){parent._remove(ej);
}ej.setLayoutParent(this);
if(ek){ej.setLayoutProperties(ek);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ej);
}},__jw:function(em){if(em.getLayoutParent()!==this){throw new Error("Remove Error: "+em+" is not a child of this widget!");
}em.setLayoutParent(null);
if(this.__jp){this.__jp.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(em);
}},capture:function(en){this.getContainerElement().capture(en);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(eo,ep,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__jm){return;
}var eq=this.__jm=new qx.html.Element;
eq.setStyles({position:cf,top:0,left:0,zIndex:7});
var er=this.getBounds();

if(er){this.__jm.setStyles({width:er.width+bY,height:er.height+bY});
}if((qx.core.Environment.get(bt)==cg)){eq.setStyles({backgroundImage:p+qx.util.ResourceManager.getInstance().toUri(bC)+X,backgroundRepeat:co});
}this.getContainerElement().add(eq);
},_applyDecorator:function(es,et){var ew=qx.ui.core.Widget.__ji;
var eu=this.getContainerElement();
if(!this.__jm&&!qx.core.Environment.get(h)){this._createProtectorElement();
}if(et){eu.remove(this.__jk);
ew.poolDecorator(this.__jk);
}if(es){var ev=this.__jk=ew.getDecoratorElement(es);
ev.setStyle(bL,5);
eu.add(ev);
}else{delete this.__jk;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__jq(et,es)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(es){var ex=this.getBounds();

if(ex){ev.resize(ex.width,ex.height);
this.__jm&&this.__jm.setStyles({width:ex.width+bY,height:ex.height+bY});
}}},_applyShadow:function(ey,ez){var eG=qx.ui.core.Widget.__jj;
var eB=this.getContainerElement();
if(ez){eB.remove(this.__jl);
eG.poolDecorator(this.__jl);
}if(ey){var eD=this.__jl=eG.getDecoratorElement(ey);
eB.add(eD);
var eF=eD.getInsets();
eD.setStyles({left:(-eF.left)+bY,top:(-eF.top)+bY});
var eE=this.getBounds();

if(eE){var eC=eE.width+eF.left+eF.right;
var eA=eE.height+eF.top+eF.bottom;
eD.resize(eC,eA);
}eD.tint(null);
}else{delete this.__jl;
}},_applyToolTipText:function(eH,eI){if(qx.core.Environment.get(bI)){if(this.__jo){return;
}var eJ=qx.locale.Manager.getInstance();
this.__jo=eJ.addListener(by,function(){var eK=this.getToolTipText();

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
}this.getContainerElement().setStyle(bb,eV,qx.core.Environment.get(bt)==bD);
},_applyBackgroundColor:function(eX,eY){var fa=this.getBackgroundColor();
var fc=this.getContainerElement();

if(this.__jk){this.__jk.tint(fa);
fc.setStyle(cc,null);
}else{var fb=qx.theme.manager.Color.getInstance().resolve(fa);
fc.setStyle(cc,fb);
}},_applyFont:function(fd,fe){},__jx:null,$$stateChanges:null,_forwardStates:null,hasState:function(ff){var fg=this.__jx;
return !!fg&&!!fg[ff];
},addState:function(fh){var fi=this.__jx;

if(!fi){fi=this.__jx={};
}
if(fi[fh]){return;
}this.__jx[fh]=true;
if(fh===ch){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fl=this.__jA;

if(forward&&forward[fh]&&fl){var fj;

for(var fk in fl){fj=fl[fk];

if(fj instanceof qx.ui.core.Widget){fl[fk].addState(fh);
}}}},removeState:function(fm){var fn=this.__jx;

if(!fn||!fn[fm]){return;
}delete this.__jx[fm];
if(fm===ch){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fq=this.__jA;

if(forward&&forward[fm]&&fq){for(var fp in fq){var fo=fq[fp];

if(fo instanceof qx.ui.core.Widget){fo.removeState(fm);
}}}},replaceState:function(fr,fs){var ft=this.__jx;

if(!ft){ft=this.__jx={};
}
if(!ft[fs]){ft[fs]=true;
}
if(ft[fr]){delete ft[fr];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fw=this.__jA;

if(forward&&forward[fs]&&fw){for(var fv in fw){var fu=fw[fv];

if(fu instanceof qx.ui.core.Widget){fu.replaceState(fr,fs);
}}}},__jy:null,__jz:null,syncAppearance:function(){var fB=this.__jx;
var fA=this.__jy;
var fC=qx.theme.manager.Appearance.getInstance();
var fy=qx.core.Property.$$method.setThemed;
var fG=qx.core.Property.$$method.resetThemed;
if(this.__jz){delete this.__jz;
if(fA){var fx=fC.styleFrom(fA,fB,null,this.getAppearance());
fA=null;
}}if(!fA){var fz=this;
var fF=[];

do{fF.push(fz.$$subcontrol||fz.getAppearance());
}while(fz=fz.$$subparent);
fA=fF.reverse().join(be).replace(/#[0-9]+/g,bf);
this.__jy=fA;
}var fD=fC.styleFrom(fA,fB,null,this.getAppearance());

if(fD){var fE;

if(fx){for(var fE in fx){if(fD[fE]===undefined){this[fG[fE]]();
}}}for(var fE in fD){fD[fE]===undefined?this[fG[fE]]():this[fy[fE]](fD[fE]);
}}else if(fx){for(var fE in fx){this[fG[fE]]();
}}this.fireDataEvent(cs,this.__jx);
},_applyAppearance:function(fH,fI){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__jn){qx.ui.core.queue.Appearance.add(this);
this.__jn=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__jz=true;
qx.ui.core.queue.Appearance.add(this);
var fL=this.__jA;

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
if((qx.core.Environment.get(bt)==cg)){fQ.setAttribute(x,C);
}else{fQ.setStyle(r,s);
}}else{if(fQ.isNativelyFocusable()){fQ.setAttribute(bq,-1);
}else if(fP){fQ.setAttribute(bq,null);
}}},_applyKeepFocus:function(fS){var fT=this.getFocusElement();
fT.setAttribute(bE,fS?bv:null);
},_applyKeepActive:function(fU){var fV=this.getContainerElement();
fV.setAttribute(bn,fU?bv:null);
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
}this.getContainerElement().setAttribute(ct,gg?bv:null);
},_applyDroppable:function(gi,gj){if(!this.isEnabled()&&gi===true){gi=false;
}this.getContainerElement().setAttribute(T,gi?bv:null);
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
},hasChildControl:function(gy){if(!this.__jA){return false;
}return !!this.__jA[gy];
},__jA:null,_getCreatedChildControls:function(){return this.__jA;
},getChildControl:function(gz,gA){if(!this.__jA){if(gA){return null;
}this.__jA={};
}var gB=this.__jA[gz];

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
},_createChildControl:function(gI){if(!this.__jA){this.__jA={};
}else if(this.__jA[gI]){throw new Error("Child control '"+gI+"' already created!");
}var gM=gI.indexOf(M);

if(gM==-1){var gJ=this._createChildControlImpl(gI);
}else{var gJ=this._createChildControlImpl(gI.substring(0,gM),gI.substring(gM+1,gI.length));
}
if(!gJ){throw new Error("Unsupported control: "+gI);
}gJ.$$subcontrol=gI;
gJ.$$subparent=this;
var gK=this.__jx;
var forward=this._forwardStates;

if(gK&&forward&&gJ instanceof qx.ui.core.Widget){for(var gL in gK){if(forward[gL]){gJ.addState(gL);
}}}this.fireDataEvent(n,gJ);
return this.__jA[gI]=gJ;
},_createChildControlImpl:function(gN,gO){return null;
},_disposeChildControls:function(){var gS=this.__jA;

if(!gS){return;
}var gQ=qx.ui.core.Widget;

for(var gR in gS){var gP=gS[gR];

if(!gQ.contains(this,gP)){gP.destroy();
}else{gP.dispose();
}}delete this.__jA;
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
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bI)){if(this.__jo){qx.locale.Manager.getInstance().removeListenerById(this.__jo);
}}this.getContainerElement().setAttribute(K,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hi=qx.ui.core.Widget;
var hh=this.getContainerElement();

if(this.__jk){hh.remove(this.__jk);
hi.__ji.poolDecorator(this.__jk);
}
if(this.__jl){hh.remove(this.__jl);
hi.__jj.poolDecorator(this.__jl);
}this.clearSeparators();
this.__jk=this.__jl=this.__jr=null;
}else{this._disposeArray(f);
this._disposeObjects(cp,q);
}this._disposeArray(bm);
this.__jx=this.__jA=null;
this._disposeObjects(O,E,S,bg);
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__x=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__x:null,__bJ:{focusin:1,focusout:1,focus:1,blur:1},__bK:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__bJ[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__bJ[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__bJ[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__bK[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__x.getListeners(u,v,k);

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
}}},destruct:function(){this.__x=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__dy=u;
this.length=u.length;
},members:{$$isString:true,length:0,__dy:null,toString:function(){return this.__dy;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__hf=c;
this.__hg=d;
},members:{__hf:null,__hg:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hf,this.__hg);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hE=qx.$$translations||{};
this.__hF=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__hG=m;
this.setLocale(m||this.__hH);
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
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hH:f,__hI:null,__hJ:null,__hE:null,__hF:null,__hG:null,getLanguage:function(){return this.__hJ;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var C=[];

for(var B in this.__hF){if(B!=this.__hH){C.push(B);
}}return C;
},__hK:function(D){var F;

if(D==null){return null;
}var E=D.indexOf(l);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){this.__hI=G;
this.__hJ=this.__hK(G);
},addTranslation:function(I,J){var K=this.__hE;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__hF;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__hE;
return this.__hL(T,Q,R,S);
},localize:function(U,V,W){var X=this.__hF;
return this.__hL(X,U,V,W);
},__hL:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__hK(bc);
}else{bc=this.__hI;
bf=this.__hJ;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__hH]){bd=Y[this.__hH][ba];
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
}},destruct:function(){this.__hE=this.__hF=null;
}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__ls:{},__lt:(qx.core.Environment.get(j)==c)&&qx.core.Environment.get(D)<9,__lu:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__lv:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===h){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=g&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=g&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__lt){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===h){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if((qx.core.Environment.get(j)==c)){if(X&&this.__lt&&this.__lu[W]&&qx.lang.String.endsWith(X,F)){return i;
}}return this.__lv[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(j)==c)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(j)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__lt&&this.__lu[ba]&&bd===q){bc=this.__ly(bb,ba,Y);
}else{if(ba===b){bc=this.__lz(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__lA(bb,ba,Y);
}else{bc=this.__lD(bb,ba,Y);
}}return bc;
},__lw:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__lx:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__ly:function(bl,bm,bn){var bq=this.__lx(bn);
bl=this.__lw(bl,bq.width,bq.height);
var bp=bm==f?E:b;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=g;
return {style:bl};
},__lz:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__lx(bt);
br=this.__lw(br,bv.width,bv.height);
return {src:bu,style:br};
},__lA:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__lx(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__lB(bw,bD,bE.height);
}else{bw=this.__lC(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__lB:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__lC:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__lD:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__lx(bP);
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
}else{bN=this.__lw(bN,ca.width,ca.height);
bN=this.__lE(bN,bP,bO);
return {style:bN};
}},__lE:function(cb,cc,cd){var top=null;
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
},__lF:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__ls[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__ls[ci]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__lt;
},"default":function(){return false;
}})}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__dc:{},__ii:{width:null,height:null},__ij:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__dc[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__dc[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__dc[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__dc[k];
return m?m.format:null;
},getSize:function(n){var o=this.__dc[n];
return o?{width:o.width,height:o.height}:this.__ii;
},getWidth:function(p){var q=this.__dc[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__dc[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__dc[t];

if(!w){w=this.__dc[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__ik,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__dc[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__dc[z]=null;
},__ik:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__dc[E];
if(event.type===b){F.loaded=true;
F.width=this.__il(D);
F.height=this.__im(D);
var G=this.__ij.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__il:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__im:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__iv:[n,null,m,i,null,r,k,null,r],__iw:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ix:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__iy:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__ix(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__iy(G)){G=q+G+q;
}var H=this.__iv;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__iw;
}var L=this.__ix(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__iy(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
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
},resetSource:function(){if((qx.core.Environment.get(i)==d)){this._setProperty(k,a);
}else{this._removeProperty(k,true);
}return this;
},setScale:function(y){this._setProperty(j,y);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{statics:{__iK:null,setVisibleElement:function(y){this.__iK=y;
},getVisibleElement:function(){return this.__iK;
}},properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__kO:null,__kP:null,__kQ:null,getLayoutLocation:function(z){var C,B,D,top;
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
}},placeToWidget:function(L,M){if(M){this.__kR();
this.__kO=qx.lang.Function.bind(this.placeToWidget,this,L,false);
qx.event.Idle.getInstance().addListener(i,this.__kO);
this.__kQ=function(){this.__kR();
};
this.addListener(g,this.__kQ,this);
}var N=L.getContainerLocation()||this.getLayoutLocation(L);
this.__kT(N);
},__kR:function(){if(this.__kO){qx.event.Idle.getInstance().removeListener(i,this.__kO);
this.__kO=null;
}
if(this.__kQ){this.removeListener(g,this.__kQ,this);
this.__kQ=null;
}},placeToMouse:function(event){var P=event.getDocumentLeft();
var top=event.getDocumentTop();
var O={left:P,top:top,right:P,bottom:top};
this.__kT(O);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__kO=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(i,this.__kO);
this.addListener(g,function(){if(this.__kO){qx.event.Idle.getInstance().removeListener(i,this.__kO);
this.__kO=null;
}},this);
}this.__kT(S);
},placeToPoint:function(T){var U={left:T.left,top:T.top,right:T.left,bottom:T.top};
this.__kT(U);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__kS:function(V){var W=null;

if(this._computePlacementSize){var W=this._computePlacementSize();
}else if(this.isVisible()){var W=this.getBounds();
}
if(W==null){this.addListenerOnce(q,function(){this.__kS(V);
},this);
}else{V.call(this,W);
}},__kT:function(X){this.__kS(function(Y){var ba=qx.util.placement.Placement.compute(Y,this.getLayoutParent().getBounds(),X,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(ba.left,ba.top);
});
}},destruct:function(){this.__kR();
}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__kr=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__kr:null,_applyTimeoutInterval:function(h){this.__kr.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__kr){this.__kr.stop();
}this.__kr=null;
}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__dP';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__dP=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__dQ:null,compute:function(p,q,r,s,t,u,v){this.__dQ=this.__dQ||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__dQ.set({axisX:this.__dU(u),axisY:this.__dU(v),edge:x,align:w});
return this.__dQ.compute(p,q,r,s);
},__dR:null,__dS:null,__dT:null,__dU:function(z){switch(z){case b:this.__dR=this.__dR||new qx.util.placement.DirectAxis();
return this.__dR;
case d:this.__dS=this.__dS||new qx.util.placement.KeepAlignAxis();
return this.__dS;
case c:this.__dT=this.__dT||new qx.util.placement.BestFitAxis();
return this.__dT;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__dP:null,compute:function(A,B,C,D){var E=this.getAxisX()||this.__dP;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__dV());
var F=this.getAxisY()||this.__dP;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__dW());
return {left:G,top:top};
},__dV:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__dW:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
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
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",y="px",x="scale",w="changeSource",v="qx.ui.basic.Image",u="__lb",t="loaded",s="-disabled.$1",r="loadingFailed",q="String",p="_applySource",n="img",o="image",l="mshtml",m="_applyScale",k="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(z){this.__lb={};
qx.ui.core.Widget.call(this);

if(z){this.setSource(z);
}},properties:{source:{check:q,init:null,nullable:true,event:w,apply:p,themeable:true},scale:{check:a,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__lc:null,__ld:null,__eg:null,__lb:null,getContentElement:function(){return this.__lh();
},_createContentElement:function(){return this.__lh();
},_getContentHint:function(){return {width:this.__lc||0,height:this.__ld||0};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(D){this._styleSource();
},__le:function(E){this.__eg=E;
},__lf:function(){if(this.__eg==null){var G=this.getSource();
var F=false;

if(G!=null){F=qx.lang.String.endsWith(G,g);
}
if(this.getScale()&&F&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__eg=h;
}else if(this.getScale()){this.__eg=i;
}else{this.__eg=j;
}}return this.__eg;
},__lg:function(H){var I;
var J;

if(H==h){I=true;
J=f;
}else if(H==j){I=false;
J=f;
}else{I=true;
J=n;
}var K=new qx.html.Image(J);
K.setScale(I);
K.setStyles({"overflowX":b,"overflowY":b});
return K;
},__lh:function(){var L=this.__lf();

if(this.__lb[L]==null){this.__lb[L]=this.__lg(L);
}return this.__lb[L];
},_styleSource:function(){var M=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!M){this.getContentElement().resetSource();
return;
}this.__li(M);

if((qx.core.Environment.get(c)==l)){var N=this.getScale()?x:k;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(N,M);
}if(qx.util.ResourceManager.getInstance().has(M)){this.__lk(this.getContentElement(),M);
}else if(qx.io.ImageLoader.isLoaded(M)){this.__ll(this.getContentElement(),M);
}else{this.__lm(this.getContentElement(),M);
}},__li:qx.core.Environment.select(c,{"mshtml":function(O){var Q=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var P=qx.lang.String.endsWith(O,g);

if(Q&&P){if(this.getScale()&&this.__lf()!=h){this.__le(h);
}else if(!this.getScale()&&this.__lf()!=j){this.__le(j);
}}else{if(this.getScale()&&this.__lf()!=i){this.__le(i);
}else if(!this.getScale()&&this.__lf()!=j){this.__le(j);
}}this.__lj(this.__lh());
},"default":function(R){if(this.getScale()&&this.__lf()!=i){this.__le(i);
}else if(!this.getScale()&&this.__lf(j)){this.__le(j);
}this.__lj(this.__lh());
}}),__lj:function(S){var V=this.getContainerElement();
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
}},__lk:function(ba,bb){var bd=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bc=bb.replace(/\.([a-z]+)$/,s);

if(bd.has(bc)){bb=bc;
this.addState(e);
}else{this.removeState(e);
}}if(ba.getSource()===bb){return;
}ba.setSource(bb);
this.__lo(bd.getImageWidth(bb),bd.getImageHeight(bb));
},__ll:function(be,bf){var bh=qx.io.ImageLoader;
be.setSource(bf);
var bg=bh.getWidth(bf);
var bi=bh.getHeight(bf);
this.__lo(bg,bi);
},__lm:function(bj,bk){var self;
var bl=qx.io.ImageLoader;
if(!bl.isFailed(bk)){bl.load(bk,this.__ln,this);
}else{if(bj!=null){bj.resetSource();
}}},__ln:function(bm,bn){if(this.$$disposed===true){return;
}if(bm!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bn.failed){this.warn("Image could not be loaded: "+bm);
this.fireEvent(r);
}else if(bn.aborted){return ;
}else{this.fireEvent(t);
}this._styleSource();
},__lo:function(bo,bp){if(bo!==this.__lc||bp!==this.__ld){this.__lc=bo;
this.__ld=bp;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(u);
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
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
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
(function(){var f="mousedown",d="blur",c="__np",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__np=[];
qx.event.Registration.addListener(document.documentElement,f,this.__nr,this,true);
qx.bom.Element.addListener(window,d,this.hideAll,this);
},members:{__np:null,add:function(g){this.__np.push(g);
this.__nq();
},remove:function(h){if(this.__np){qx.lang.Array.remove(this.__np,h);
this.__nq();
}},hideAll:function(){var j;
var k=this.__np;

if(k){for(var i=0,l=k.length;i<l;i++){var j=k[i];
j.getAutoHide()&&j.exclude();
}}},__nq:function(){var m=1e7;

for(var i=0;i<this.__np.length;i++){this.__np[i].setZIndex(m++);
}},__nr:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__np;

for(var i=0;i<p.length;i++){var n=p[i];

if(!n.getAutoHide()||o==n||qx.ui.core.Widget.contains(n,o)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__nr,this,true);
this._disposeArray(c);
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
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__ce:null,_invalidChildrenCache:null,__cj:null,invalidateLayoutCache:function(){this.__ce=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__ce){return this.__ce;
}return this.__ce=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__cj;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__cj.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__cj){throw new Error("It is not possible to manually set the connected widget.");
}this.__cj=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__cj;
},_applyLayoutChange:function(){if(this.__cj){this.__cj.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__cj.getLayoutChildren();
}},destruct:function(){this.__cj=this.__ce=null;
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
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="qx.dynlocale",j="Boolean",i="color",h="enabled",g="changeLocale",f="_applyTextAlign",d="qx.ui.core.Widget",c="nowrap",b="changeTextAlign",a="_applyWrap",D="changeValue",C="qx.ui.basic.Label",B="whiteSpace",A="css.textoverflow",z="html.xul",y="_applyValue",x="center",w="_applyBuddy",v="String",u="textAlign",r="right",s="justify",p="changeRich",q="normal",n="_applyRich",o="click",l="label",m="left",t="A";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setValue(E);
}
if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().addListener(g,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:p,apply:n},wrap:{check:j,init:true,apply:a},value:{check:v,apply:y,event:D,nullable:true},buddy:{check:d,apply:w,nullable:true,init:null,dereference:true},textAlign:{check:[m,x,r,s],nullable:true,themeable:true,apply:f,event:b},appearance:{refine:true,init:l},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__G:null,__ks:null,__kt:null,__ku:null,__H:null,_getContentHint:function(){if(this.__ks){this.__kv=this.__kw();
delete this.__ks;
}return {width:this.__kv.width,height:this.__kv.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(F){if(!qx.core.Environment.get(A)&&qx.core.Environment.get(z)){if(F&&!this.isRich()){return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,F);
},_getContentHeightForWidth:function(G){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__kw(G).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(H,I){this.getContentElement().setStyle(u,H);
},_applyTextColor:function(J,K){if(J){this.getContentElement().setStyle(i,qx.theme.manager.Color.getInstance().resolve(J));
}else{this.getContentElement().removeStyle(i);
}},__kv:{width:0,height:0},_applyFont:function(L,M){if(M&&this.__G&&this.__H){this.__G.removeListenerById(this.__H);
this.__H=null;
}var N;

if(L){this.__G=qx.theme.manager.Font.getInstance().resolve(L);

if(this.__G instanceof qx.bom.webfonts.WebFont){this.__H=this.__G.addListener("changeStatus",this._onWebFontStatusChange,this);
}N=this.__G.getStyles();
}else{this.__G=null;
N=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(N);
this.__ks=true;
qx.ui.core.queue.Layout.add(this);
},__kw:function(O){var S=qx.bom.Label;
var Q=this.getFont();
var P=Q?this.__G.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||t;
var R=this.getRich();
return R?S.getHtmlSize(content,P,O):S.getTextSize(content,P);
},_applyBuddy:function(T,U){if(U!=null){U.removeBinding(this.__kt);
this.__kt=null;
this.removeListenerById(this.__ku);
this.__ku=null;
}
if(T!=null){this.__kt=T.bind(h,this,h);
this.__ku=this.addListener(o,function(){if(T.isFocusable()){T.focus.apply(T);
}},this);
}},_applyRich:function(V){this.getContentElement().setRich(V);
this.__ks=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(W,X){if(W&&!this.isRich()){}
if(this.isRich()){var Y=W?q:c;
this.getContentElement().setStyle(B,Y);
}},_onChangeLocale:qx.core.Environment.select(k,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_onWebFontStatusChange:function(ba){if(ba.getData().valid===true){this.__ks=true;
qx.ui.core.queue.Layout.add(this);
}},_applyValue:function(bb,bc){this.getContentElement().setValue(bb);
this.__ks=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(k)){qx.locale.Manager.getInstance().removeListener(g,this._onChangeLocale,this);
}if(this.__kt!=null){var bd=this.getBuddy();

if(bd!=null&&!bd.isDisposed()){bd.removeBinding(this.__kt);
}}
if(this.__G&&this.__H){this.__G.removeListenerById(this.__H);
}this.__G=this.__kt=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__bF:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__bF;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__bF==h){return;
}this.__bF=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="div",g="auto",f="0",e="inherit",d="text",c="value",b="",a="engine.name",C="hidden",B="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",A="nowrap",z="ellipsis",y="normal",x="block",w="label",v="px",u="crop",t="gecko",q="end",r="100%",o="visible",p="qx.bom.Label",m="opera",n="engine.version",k="mshtml",l="-1000px",s="absolute";
qx.Class.define(p,{statics:{__eS:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__eT:function(){var D=this.__eV(false);
document.body.insertBefore(D,document.body.firstChild);
return this._textElement=D;
},__eU:function(){var E=this.__eV(true);
document.body.insertBefore(E,document.body.firstChild);
return this._htmlElement=E;
},__eV:function(F){var G=qx.bom.Element.create(h);
var H=G.style;
H.width=H.height=g;
H.left=H.top=l;
H.visibility=C;
H.position=s;
H.overflow=o;
H.display=x;

if(F){H.whiteSpace=y;
}else{H.whiteSpace=A;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var I=document.createElementNS(B,w);
var H=I.style;
H.padding=f;
H.margin=f;
H.width=g;

for(var J in this.__eS){H[J]=e;
}G.appendChild(I);
}}return G;
},__eW:function(K){var L={};

if(K){L.whiteSpace=y;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){L.display=x;
}else{L.overflow=C;
L.whiteSpace=A;
L.textOverflow=z;
if((qx.core.Environment.get(a)==m)){L.OTextOverflow=z;
}}return L;
},create:function(content,M,N){if(!N){N=window;
}
if(M){var O=N.document.createElement(h);
O.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var O=N.document.createElement(h);
var Q=N.document.createElementNS(B,w);
var P=Q.style;
P.cursor=e;
P.color=e;
P.overflow=C;
P.maxWidth=r;
P.padding=f;
P.margin=f;
P.width=g;
for(var R in this.__eS){Q.style[R]=e;
}Q.setAttribute(u,q);
O.appendChild(Q);
}else{var O=N.document.createElement(h);
qx.bom.element.Style.setStyles(O,this.__eW(M));
}
if(content){this.setValue(O,content);
}return O;
},setValue:function(S,T){T=T||b;

if(S.useHtml){S.innerHTML=T;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){S.firstChild.setAttribute(c,T);
}else{qx.bom.element.Attribute.set(S,d,T);
}},getValue:function(U){if(U.useHtml){return U.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return U.firstChild.getAttribute(c)||b;
}else{return qx.bom.element.Attribute.get(U,d);
}},getHtmlSize:function(content,V,W){var X=this._htmlElement||this.__eU();
X.style.width=W!=undefined?W+v:g;
X.innerHTML=content;
return this.__eX(X,V);
},getTextSize:function(Y,ba){var bb=this._textElement||this.__eT();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){bb.firstChild.setAttribute(c,Y);
}else{qx.bom.element.Attribute.set(bb,d,Y);
}return this.__eX(bb,ba);
},__eX:function(bc,bd){var be=this.__eS;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||b;
}var bg=qx.bom.element.Dimension.getSize(bc);
if((qx.core.Environment.get(a)==t)){bg.width++;
}if((qx.core.Environment.get(a)==k)&&parseFloat(qx.core.Environment.get(n))>=9){bg.width++;
}return bg;
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
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__x",b="__oe",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__oe:null,__x:null,getWindowManager:function(){if(!this.__x){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__x;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__x){this.__x.setDesktop(null);
}j.setDesktop(this);
this.__x=j;
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
},getWindows:function(){if(!this.__oe){this.__oe=[];
}return this.__oe;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__mC",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__mC=this._createBlocker();
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__mC:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);
},_applyBlockerColor:function(g,h){this.__mC.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__mC.setOpacity(i);
},block:function(){this.__mC.block();
},isBlocked:function(){return this.__mC.isBlocked();
},unblock:function(){this.__mC.unblock();
},forceUnblock:function(){this.__mC.forceUnblock();
},blockContent:function(k){this.__mC.blockContent(k);
},isContentBlocked:function(){return this.__mC.isContentBlocked();
},unblockContent:function(){this.__mC.unblockContent();
},forceUnblockContent:function(){this.__mC.forceUnblockContent();
},getBlocker:function(){return this.__mC;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="opacity",w="interval",v="Tab",u="Color",t="qx.ui.root.Page",s="__mC",r="__qk",q="__kr",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(t)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__qm,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__qg=[];
this.__qh=[];
this.__qi=[];
},properties:{color:{check:u,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__mC:null,__qj:0,__qk:null,__qi:null,__qg:null,__qh:null,__ql:null,__kr:null,_isPageRoot:false,_widget:null,__qm:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__qn(c,C);
},_applyOpacity:function(D,E){this.__qn(x,D);
},__qn:function(F,G){var H=[];
this.__mC&&H.push(this.__mC);
this.__qk&&H.push(this.__qk);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__qg.push(I.getActive());
this.__qh.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__qg.length;

if(L>0){var K=this.__qg[L-1];

if(K){qx.bom.Element.activate(K);
}this.__qg.pop();
}var J=this.__qh.length;

if(J>0){var K=this.__qh[J-1];

if(K){qx.bom.Element.focus(this.__qh[J-1]);
}this.__qh.pop();
}},__qo:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__mC){this.__mC=this.__qo();
this.__mC.setStyle(l,15);
this._widget.getContainerElement().add(this.__mC);
this.__mC.exclude();
}return this.__mC;
},block:function(){this.__qj++;

if(this.__qj<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__qt,this);
M.addListener(d,this.__qs,this);
M.addListener(j,this.__qs,this);
M.addListener(f,this.__qs,this);
}},isBlocked:function(){return this.__qj>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__qj--;

if(this.__qj<1){this.__qp();
this.__qj=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__qj=0;
this.__qp();
},__qp:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__qt,this);
N.removeListener(d,this.__qs,this);
N.removeListener(j,this.__qs,this);
N.removeListener(f,this.__qs,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__qk){this.__qk=this.__qo();
this._widget.getContentElement().add(this.__qk);
this.__qk.exclude();
}return this.__qk;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__qi.push(O);

if(this.__qi.length<2){P.include();

if(this._isPageRoot){if(!this.__kr){this.__kr=new qx.event.Timer(300);
this.__kr.addListener(w,this.__qr,this);
}this.__kr.start();
this.__qr();
}}},isContentBlocked:function(){return this.__qi.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__qi.pop();
var Q=this.__qi[this.__qi.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__qi.length<1){this.__qq();
this.__qi=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__qi=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__qq();
},__qq:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__kr.stop();
}},__qr:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__qs:function(e){if(e.getKeyIdentifier()==v){e.stop();
}},__qt:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__qm,this);
}this._disposeObjects(r,s,q);
this.__ql=this.__qg=this.__qh=this._widget=this.__qi=null;
}});
})();
(function(){var t="engine.name",s="help",r="contextmenu",q="changeGlobalCursor",p="keypress",o="Boolean",n="root",m="",l=" !important",k="input",d="_applyGlobalCursor",j="Space",h="_applyNativeHelp",c=";",b="qx.ui.root.Abstract",g="abstract",f="textarea",i="String",a="*";
qx.Class.define(b,{type:g,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(p,this.__qT,this);
},properties:{appearance:{refine:true,init:n},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:i,nullable:true,themeable:true,apply:d,event:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:o,init:false,apply:h}},members:{__qS:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(t,{"mshtml":function(u,v){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__qS;

if(!z){this.__qS=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(c,m)+l);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__qT:function(e){if(e.getKeyIdentifier()!==j){return;
}var D=e.getTarget();
var C=qx.ui.core.FocusHandler.getInstance();

if(!C.isFocused(D)){return;
}var E=D.getContentElement().getNodeName();

if(E===k||E===f){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Environment.select(t,{"mshtml":function(F,G){if(G===false){qx.bom.Event.removeNativeListener(document,s,qx.lang.Function.returnFalse);
}
if(F===false){qx.bom.Event.addNativeListener(document,s,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__qS=null;
},defer:function(H,I){qx.ui.core.MChildrenHandling.remap(I);
}});
})();
(function(){var k="keypress",j="focusout",h="__dz",g="activate",f="Tab",d="singleton",c="deactivate",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:d,construct:function(){qx.core.Object.call(this);
this.__dz={};
},members:{__dz:null,__dA:null,__dB:null,__dC:null,connectTo:function(m){m.addListener(k,this.__dD,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(g,this._onActivate,this,true);
m.addListener(c,this._onDeactivate,this,true);
},addRoot:function(n){this.__dz[n.$$hash]=n;
},removeRoot:function(o){delete this.__dz[o.$$hash];
},getActiveWidget:function(){return this.__dA;
},isActive:function(p){return this.__dA==p;
},getFocusedWidget:function(){return this.__dB;
},isFocused:function(q){return this.__dB==q;
},isFocusRoot:function(r){return !!this.__dz[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__dA=t;
var s=this.__dE(t);

if(s!=this.__dC){this.__dC=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__dA==u){this.__dA=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__dB){this.__dB=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__dB){this.__dB=null;
w.visualizeBlur();
}},__dD:function(e){if(e.getKeyIdentifier()!=f){return;
}
if(!this.__dC){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__dB;

if(!e.isShiftPressed()){var y=x?this.__dI(x):this.__dG();
}else{var y=x?this.__dJ(x):this.__dH();
}if(y){y.tabFocus();
}},__dE:function(z){var A=this.__dz;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__dF:function(B,C){if(B===C){return 0;
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
},__dG:function(){return this.__dM(this.__dC,null);
},__dH:function(){return this.__dN(this.__dC,null);
},__dI:function(M){var N=this.__dC;

if(N==M){return this.__dG();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__dK(N,M,O);
O.sort(this.__dF);
var P=O.length;
return P>0?O[0]:this.__dG();
},__dJ:function(Q){var R=this.__dC;

if(R==Q){return this.__dH();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__dL(R,Q,S);
S.sort(this.__dF);
var T=S.length;
return T>0?S[T-1]:this.__dH();
},__dK:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__dF(U,X)<0){V.push(X);
}this.__dK(X,U,V);
}}},__dL:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__dF(Y,bc)>0){ba.push(bc);
}this.__dL(bc,Y,ba);
}}},__dM:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__dF(bf,bd)<0){bd=bf;
}}bd=this.__dM(bf,bd);
}}return bd;
},__dN:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__dF(bi,bg)>0){bg=bi;
}}bg=this.__dN(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(h);
this.__dB=this.__dA=this.__dC=null;
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__cp=qx.dom.Node.getWindow(o);
this.__nB=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__cp,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__cp:null,__nB:null,_createContainerElement:function(){var p=this.__nB;
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
},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__cp);
var v=qx.bom.Viewport.getHeight(this.__cp);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__cp=this.__nB=null;
}});
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
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
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
this.addListener(t,this.__nm,this);
this.addListener(n,this.__nm,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__nm:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var q="fce.Application",p="__NY",o="/reports/features/add",n="/reports/features/get",m="Feature Configuration Editor",k="\.",j="^",h="qooxdoo ",g="1.5",f="changeFeatures",c=".",e="app-header",d="icon/16/actions/help-contents.png",b="Help",a="execute";
qx.Class.define(q,{extend:qx.application.Standalone,members:{__NY:null,__Oa:null,__Ob:null,main:function(){qx.application.Standalone.prototype.main.call(this);
this.__Oa=q.split(c)[0];
var s=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
var scroll=new qx.ui.container.Scroll(s);
this.getRoot().add(scroll,{edge:0});
s.add(this._createHeader());
var r=new qx.ui.form.Button(b,d);
r.set({allowGrowX:false,margin:[0,0,0,20]});
r.addListener(a,function(u){this._getHelpWindow().open();
},this);
s.add(r);
this.__NY=new fce.view.FeatureSelector();
this.__NY.setMargin(20);
s.add(this.__NY,{flex:1});
var t=new fce.Environment();
t.addListenerOnce(f,function(v){var x=v.getData();
this._stripOwnSettings(x);
var y=this.__Oc();

if(y){y.compare(x);
}var w={detected:x};
this.__NY.setFeatureData(w);
},this);
t.check();
},_stripOwnSettings:function(z){var B=new RegExp(j+this.__Oa+k);
var A=[];

for(var C in z){if(B.exec(C)){A.push(C);
}}
for(var i=0,l=A.length;i<l;i++){delete z[A[i]];
}},_createHeader:function(){var F=new qx.ui.layout.HBox();
var D=new qx.ui.container.Composite(F);
D.setAppearance(e);
var G=new qx.ui.basic.Label(m);
var E=new qx.ui.basic.Label(h+g);
D.add(G);
D.add(new qx.ui.core.Spacer,{flex:1});
D.add(E);
return D;
},__Oc:function(){var J=null;
var I=o;
var H=n;

if(J&&I&&H){return new fce.Reporter(J,I,H);
}return null;
},_getHelpWindow:function(){if(!this.__Ob){this.__Ob=new fce.view.HelpWindow();
this.__Ob.center();
}return this.__Ob;
}},destruct:function(){this._disposeObjects(p);
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__jC:null,__jD:null,__jE:null,__iU:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jF:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__jC&&this.__jC.length!=length&&this.__jD&&this.__jC;
var u;
var t=r?this.__jC:new Array(length);
var v=r?this.__jD:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__jC=t;
this.__jD=v;
}this.__jE=s;
this.__iU=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__jF();
}var F=this.__iU;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__jC[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__jE&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__jD[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jF();
}var bc=qx.ui.layout.Util;
var bk=this.__iU;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__jD[i];
var Y=this.__jC[i];

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
}},destruct:function(){this.__jC=this.__jD=this.__iU=null;
}});
})();
(function(){var f="scrollbar-x",d="scrollbar-y",c="qx.ui.core.scroll.MWheelHandling",b="x",a="y";
qx.Mixin.define(c,{members:{_onMouseWheel:function(e){var l=this._isChildControlVisible(f);
var m=this._isChildControlVisible(d);
var q=m?this.getChildControl(d,true):null;
var p=l?this.getChildControl(f,true):null;
var j=e.getWheelDelta(a);
var i=e.getWheelDelta(b);
var k=!m;
var n=!l;
if(q){var o=parseInt(j);

if(o!==0){q.scrollBySteps(o);
}var h=q.getPosition();
var g=q.getMaximum();
if(o<0&&h<=0||o>0&&h>=g){k=true;
}}if(p){var o=parseInt(i);

if(o!==0){p.scrollBySteps(o);
}var h=p.getPosition();
var g=p.getMaximum();
if(o<0&&h<=0||o>0&&h>=g){n=true;
}}if(!k||!n){e.stop();
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Environment.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",q="mouseup",o="Number",p="_applyPosition",m="scrollbar",n="__qu",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if((qx.core.Environment.get(d)==t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:m},orientation:{check:[k,h],init:k,apply:v},maximum:{check:s,apply:w,init:100},position:{check:o,init:0,apply:p,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__mz:null,__qu:null,_getScrollPaneElement:function(){if(!this.__qu){this.__qu=new qx.html.Element();
}return this.__qu;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var F=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__mz?100:F,maxWidth:this.__mz?null:F,minWidth:this.__mz?null:F,height:this.__mz?F:100,maxHeight:this.__mz?F:null,minHeight:this.__mz?F:null};
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this._updateScrollBar();
},_applyMaximum:function(I){this._updateScrollBar();
},_applyPosition:function(J){var content=this.getContentElement();

if(this.__mz){content.scrollToX(J);
}else{content.scrollToY(J);
}},_applyOrientation:function(K,L){var M=this.__mz=K===k;
this.set({allowGrowX:M,allowShrinkX:M,allowGrowY:!M,allowShrinkY:!M});

if(M){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:M?i:c,overflowY:M?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var O=this.__mz;
var P=this.getBounds();

if(!P){return;
}
if(this.isEnabled()){var Q=O?P.width:P.height;
var N=this.getMaximum()+Q;
}else{N=0;
}if((qx.core.Environment.get(d)==r)){var P=this.getBounds();
this.getContentElement().setStyles({left:O?f:g,top:O?g:f,width:(O?P.width:P.width+1)+j,height:(O?P.height+1:P.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(O?N:1)+j,height:(O?1:N)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(S){this.scrollTo(this.getPosition()+S);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__mz?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var k="slider",j="horizontal",i="button-begin",h="vertical",g="button-end",f="Integer",d="execute",c="right",b="left",a="down",z="up",y="PositiveNumber",x="changeValue",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",v="_applyKnobFactor",u="knob",t="qx.ui.core.scroll.ScrollBar",s="resize",r="_applyOrientation",q="_applyPageStep",o="PositiveInteger",p="scroll",m="_applyPosition",n="scrollbar",l="_applyMaximum";
qx.Class.define(t,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(A){qx.ui.core.Widget.call(this);
this._createChildControl(i);
this._createChildControl(k).addListener(s,this._onResizeSlider,this);
this._createChildControl(g);
if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[j,h],init:j,apply:r},maximum:{check:o,apply:l,init:100},position:{check:w,init:0,apply:m,event:p},singleStep:{check:f,init:20},pageStep:{check:f,init:10,apply:q},knobFactor:{check:y,apply:v,nullable:true}},members:{__Aj:2,_createChildControlImpl:function(B,C){var D;

switch(B){case k:D=new qx.ui.core.scroll.ScrollSlider();
D.setPageStep(100);
D.setFocusable(false);
D.addListener(x,this._onChangeSliderValue,this);
this._add(D,{flex:1});
break;
case i:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteBegin,this);
this._add(D);
break;
case g:D=new qx.ui.form.RepeatButton();
D.setFocusable(false);
D.addListener(d,this._onExecuteEnd,this);
this._add(D);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_applyMaximum:function(E){this.getChildControl(k).setMaximum(E);
},_applyPosition:function(F){this.getChildControl(k).setValue(F);
},_applyKnobFactor:function(G){this.getChildControl(k).setKnobFactor(G);
},_applyPageStep:function(H){this.getChildControl(k).setPageStep(H);
},_applyOrientation:function(I,J){var K=this._getLayout();

if(K){K.dispose();
}if(I===j){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(h,j);
this.getChildControl(i).replaceState(z,b);
this.getChildControl(g).replaceState(a,c);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(j,h);
this.getChildControl(i).replaceState(b,z);
this.getChildControl(g).replaceState(c,a);
}this.getChildControl(k).setOrientation(I);
},scrollTo:function(L){this.getChildControl(k).slideTo(L);
},scrollBy:function(M){this.getChildControl(k).slideBy(M);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(k).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var P=this.getChildControl(k).getChildControl(u);
var S=P.getSizeHint();
var Q=false;
var R=this.getChildControl(k).getInnerSize();

if(this.getOrientation()==h){if(R.height<S.minHeight+this.__Aj){Q=true;
}}else{if(R.width<S.minWidth+this.__Aj){Q=true;
}}
if(Q){P.exclude();
}else{P.show();
}}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__hj,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__hj:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__hj,this);
}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",X="changeValue",W="interval",V="mousemove",U="resize",T="slider",S="mousedown",R="PageUp",Q="mouseout",P="x",O='qx.event.type.Data',r="Left",s="Down",p="Up",q="dblclick",n="qx.ui.form.Slider",o="PageDown",l="mousewheel",m="_applyValue",u="_applyKnobFactor",v="End",C="height",A="y",G="Right",E="width",K="_applyOrientation",I="Home",x="mouseover",N="floor",M="_applyMinimum",L="click",w="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",y="keypress",z="ceil",B="losecapture",D="contextmenu",F="_applyMaximum",H="Number",J="changeMaximum",t="changeMinimum";
qx.Class.define(n,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(Y){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(y,this._onKeyPress);
this.addListener(l,this._onMouseWheel);
this.addListener(S,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(B,this._onMouseUp);
this.addListener(U,this._onUpdate);
this.addListener(D,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(q,this._onStopEvent);
if(Y!=null){this.setOrientation(Y);
}else{this.initOrientation();
}},events:{changeValue:O},properties:{appearance:{refine:true,init:T},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:K},value:{check:w,init:0,apply:m,nullable:true},minimum:{check:h,init:0,apply:M,event:t},maximum:{check:h,init:100,apply:F,event:J},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:H,apply:u,nullable:true}},members:{__Ak:null,__Al:null,__Am:null,__An:null,__Ao:null,__Ap:null,__Aq:null,__Ar:null,__kr:null,__As:null,__At:null,__Au:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;

switch(ba){case k:bc=new qx.ui.core.Widget();
bc.addListener(U,this._onUpdate,this);
bc.addListener(x,this._onMouseOver);
bc.addListener(Q,this._onMouseOut);
this._add(bc);
break;
}return bc||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ba);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bf=this.getOrientation()===j?P:A;
var be=e.getWheelDelta(bf);
var bd=be>0?1:be<0?-1:0;
this.slideBy(bd*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bh=this.getOrientation()===j;
var bg=bh?r:p;
var forward=bh?G:s;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bg:this.slideBack();
break;
case o:this.slidePageForward();
break;
case R:this.slidePageBack();
break;
case I:this.slideToBegin();
break;
case v:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__An){return;
}var bk=this.__mz;
var bi=this.getChildControl(k);
var bj=bk?f:d;
var bm=bk?e.getDocumentLeft():e.getDocumentTop();
var bn=this.__Ak=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];
var bl=this.__Al=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];

if(e.getTarget()===bi){this.__An=true;

if(!this.__As){this.__As=new qx.event.Timer(100);
this.__As.addListener(W,this._fireValue,this);
}this.__As.start();
this.__Ao=bm+bn-bl;
bi.addState(b);
}else{this.__Ap=true;
this.__Aq=bm<=bl?-1:1;
this.__Aw(e);
this._onInterval();
if(!this.__kr){this.__kr=new qx.event.Timer(100);
this.__kr.addListener(W,this._onInterval,this);
}this.__kr.start();
}this.addListener(V,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__An){this.releaseCapture();
delete this.__An;
this.__As.stop();
this._fireValue();
delete this.__Ao;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bp;
var bq;
var bo;

if(this.__mz){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__Ak);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bq=e.getDocumentTop()-(bo+this.getChildControl(k).getBounds().top);
}else{bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__Ak);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bq=e.getDocumentLeft()-(bo+this.getChildControl(k).getBounds().left);
}
if(bq<0||bq>this.__Am||bp<0||bp>this.__Am){this.getChildControl(k).removeState(g);
}}}else if(this.__Ap){this.__kr.stop();
this.releaseCapture();
delete this.__Ap;
delete this.__Aq;
delete this.__Ar;
}this.removeListener(V,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__An){var bs=this.__mz?e.getDocumentLeft():e.getDocumentTop();
var br=bs-this.__Ao;
this.slideTo(this._positionToValue(br));
}else if(this.__Ap){this.__Aw(e);
}e.stopPropagation();
},_onInterval:function(e){var bt=this.getValue()+(this.__Aq*this.getPageStep());
if(bt<this.getMinimum()){bt=this.getMinimum();
}else if(bt>this.getMaximum()){bt=this.getMaximum();
}var bu=this.__Aq==-1;

if((bu&&bt<=this.__Ar)||(!bu&&bt>=this.__Ar)){bt=this.__Ar;
}this.slideTo(bt);
},_onUpdate:function(e){var bw=this.getInnerSize();
var bx=this.getChildControl(k).getBounds();
var bv=this.__mz?E:C;
this._updateKnobSize();
this.__Av=bw[bv]-bx[bv];
this.__Am=bx[bv];
this._updateKnobPosition();
},__mz:false,__Av:0,__Aw:function(e){var by=this.__mz;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__Ak;
var bz=this.__Al;
var bJ=this.__Am;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__Aq<0?N:z;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__Ar==null||(this.__Aq==-1&&bD<=this.__Ar)||(this.__Aq==1&&bD>=this.__Ar)){this.__Ar=bD;
}},_positionToValue:function(bK){var bL=this.__Av;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(bO){var bP=this.__Av;

if(bP==null){return 0;
}var bQ=this.getMaximum()-this.getMinimum();
if(bQ==0){return 0;
}var bO=bO-this.getMinimum();
var bR=bO/bQ;

if(bR<0){bR=0;
}else if(bR>1){bR=1;
}return Math.round(bP*bR);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(k).getContainerElement();

if(this.__mz){bT.setStyle(f,bS+a,true);
}else{bT.setStyle(d,bS+a,true);
}},_updateKnobSize:function(){var bV=this.getKnobFactor();

if(bV==null){return;
}var bU=this.getInnerSize();

if(bU==null){return;
}if(this.__mz){this.getChildControl(k).setWidth(Math.round(bV*bU.width));
}else{this.getChildControl(k).setHeight(Math.round(bV*bU.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bW){this.slideTo(this.getValue()+bW);
},slideTo:function(bX){if(bX<this.getMinimum()){bX=this.getMinimum();
}else if(bX>this.getMaximum()){bX=this.getMaximum();
}else{bX=this.getMinimum()+Math.round((bX-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bX);
},_applyOrientation:function(bY,ca){var cb=this.getChildControl(k);
this.__mz=bY===j;
if(this.__mz){this.removeState(i);
cb.removeState(i);
this.addState(j);
cb.addState(j);
cb.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
cb.removeState(j);
this.addState(i);
cb.addState(i);
cb.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(cc,cd){if(cc!=null){this._updateKnobSize();
}else{if(this.__mz){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();

if(this.__An){this.__Au=[ce,cf];
}else{this.fireEvent(X,qx.event.type.Data,[ce,cf]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__Au){return;
}var cg=this.__Au;
this.__Au=null;
this.fireEvent(X,qx.event.type.Data,cg);
},_applyMinimum:function(ch,ci){if(this.getValue()<ch){this.setValue(ch);
}this._updateKnobPosition();
},_applyMaximum:function(cj,ck){if(this.getValue()>cj){this.setValue(cj);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(e){qx.ui.form.Slider.call(this,e);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(f){var g=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){g.width=0;
}else{g.height=0;
}return g;
}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__dX:null,__dY:false,__ea:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__dY){this.__dY=false;
}else{this.__dY=true;
o.execute(this);
}}this.fireEvent(n);
},__eb:function(e){if(this.__dY){this.__dY=false;
return;
}this.__dY=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__ea);
}
if(p!=null){this.__ea=p.addListener(n,this.__eb,this);
}var t=this.__dX;

if(t==null){this.__dX=t={};
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
this.__dX=null;
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="__kr",d="qx.ui.form.RepeatButton",a="release",c="interval",b="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__kr=new qx.event.AcceleratingTimer();
this.__kr.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__ob:null,__kr:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__oc();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__ob){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__od();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__od();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__kr.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__kr.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__oc();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__ob){this.execute();
}}this.__od();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__ob){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__od();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__oc();
}},_onInterval:function(e){this.__ob=true;
this.fireEvent(b);
},__oc:function(){this.fireEvent(g);
this.__ob=false;
this.__kr.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__od:function(){this.fireEvent(a);
this.__kr.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="Integer",d="interval",c="__kr",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__kr=new qx.event.Timer(this.getInterval());
this.__kr.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__kr:null,__oC:null,start:function(){this.__kr.setInterval(this.getFirstInterval());
this.__kr.start();
},stop:function(){this.__kr.stop();
this.__oC=null;
},_onInterval:function(){this.__kr.stop();

if(this.__oC==null){this.__oC=this.getInterval();
}this.__oC=Math.max(this.getMinimum(),this.__oC-this.getDecrease());
this.__kr.setInterval(this.__oC);
this.__kr.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__lJ:null,__jD:null,__jE:null,__iU:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jF:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__lJ&&this.__lJ.length!=length&&this.__jD&&this.__lJ;
var u;
var s=r?this.__lJ:new Array(length);
var v=r?this.__jD:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__lJ=s;
this.__jD=v;
}this.__jE=t;
this.__iU=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__jF();
}var E=this.__iU;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__lJ[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__jE&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__jD[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jF();
}var bc=qx.ui.layout.Util;
var bk=this.__iU;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__jD[i];
var X=this.__lJ[i];

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
}},destruct:function(){this.__lJ=this.__jD=this.__iU=null;
}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="scrollbar-",d="on",c="_computeScrollbars",b="getDocument",a="changeVisibility",E="off",D="x",C="scroll",B="touchmove",A="scrollY",z="Left",y="mousewheel",x="scrollbarX",w="event.touch",v="scrollarea",r="y",s="vertical",p="scrollX",q="touchstart",n="horizontal",o="qx.ui.core.scroll.AbstractScrollArea",l="abstract",m="update",t="scrollbarY",u="Top";
qx.Class.define(o,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MWheelHandling],type:l,construct:function(){qx.ui.core.Widget.call(this);
var F=new qx.ui.layout.Grid();
F.setColumnFlex(0,1);
F.setRowFlex(0,1);
this._setLayout(F);
this.addListener(y,this._onMouseWheel,this);
if(qx.core.Environment.get(w)){this.addListener(B,this._onTouchMove,this);
this.addListener(q,function(){this.__id={"x":0,"y":0};
},this);
this.__id={};
this.__rd={};
}},properties:{appearance:{refine:true,init:v},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbarY:{check:[h,d,E],init:h,themeable:true,apply:c},scrollbar:{group:[x,t]}},members:{__id:null,__rd:null,_createChildControlImpl:function(G,H){var I;

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
},_onTouchMove:function(e){this._onTouchMoveDirectional(D,e);
this._onTouchMoveDirectional(r,e);
e.stop();
},_onTouchMoveDirectional:function(T,e){var U=(T==D?z:u);
var W=this.getChildControl(f+T,true);
var X=this._isChildControlVisible(f+T);

if(X&&W){if(this.__id[T]==0){var V=0;
}else{var V=-(e[b+U]()-this.__id[T]);
}this.__id[T]=e[b+U]();
W.scrollBy(V);
if(this.__rd[T]){clearTimeout(this.__rd[T]);
this.__rd[T]=null;
}this.__rd[T]=setTimeout(qx.lang.Function.bind(function(Y){this.__re(Y,T);
},this,V),100);
}},__re:function(ba,bb){this.__rd[bb]=null;
var bd=this._isChildControlVisible(f+bb);

if(ba==0||!bd){return;
}if(ba>0){ba=Math.max(0,ba-3);
}else{ba=Math.min(0,ba+3);
}this.__rd[bb]=setTimeout(qx.lang.Function.bind(function(be,bf){this.__re(be,bf);
},this,ba,bb),20);
var bc=this.getChildControl(f+bb,true);
bc.scrollBy(ba);
},_onChangeScrollbarXVisibility:function(e){var bg=this._isChildControlVisible(j);
var bh=this._isChildControlVisible(k);

if(!bg){this.scrollToX(0);
}bg&&bh?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bi=this._isChildControlVisible(j);
var bj=this._isChildControlVisible(k);

if(!bj){this.scrollToY(0);
}bi&&bj?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var bq=this.getChildControl(i);
var content=bq.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bk=this.getInnerSize();
var bp=bq.getInnerSize();
var bn=bq.getScrollSize();
if(!bp||!bn){return;
}var br=this.getScrollbarX();
var bs=this.getScrollbarY();

if(br===h&&bs===h){var bo=bn.width>bk.width;
var bt=bn.height>bk.height;
if((bo||bt)&&!(bo&&bt)){if(bo){bt=bn.height>bp.height;
}else if(bt){bo=bn.width>bp.width;
}}}else{var bo=br===d;
var bt=bs===d;
if(bn.width>(bo?bp.width:bk.width)&&br===h){bo=true;
}
if(bn.height>(bo?bp.height:bk.height)&&bs===h){bt=true;
}}if(bo){var bm=this.getChildControl(j);
bm.show();
bm.setMaximum(Math.max(0,bn.width-bp.width));
bm.setKnobFactor((bn.width===0)?0:bp.width/bn.width);
}else{this._excludeChildControl(j);
}
if(bt){var bl=this.getChildControl(k);
bl.show();
bl.setMaximum(Math.max(0,bn.height-bp.height));
bl.setKnobFactor((bn.height===0)?0:bp.height/bn.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__ht=[];
this.__hu=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__hv:null,__ht:null,__hu:null,__hw:null,__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,verifyLayoutProperty:null,__hC:function(){var B=[];
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
}}this.__hv=B;
this.__hw=A;
this.__hx=C;
this.__hy=w;
this.__hz=v;
this.__hA=null;
this.__hB=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__ht[G];

if(!J){this.__ht[G]={};
this.__ht[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__hu[K];

if(!N){this.__hu[K]={};
this.__hu[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__hu[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__ht[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__hC();
}var ba=this.__hv[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__hC();
}return this.__hy+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__hC();
}return this.__hz+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__ht[bc];
var bf=this.__hu[bd];
var be=this.__hv[bc][bd];

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
},getColumnFlex:function(bm){var bn=this.__hu[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__ht[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__hu[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__hu[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__hu[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__ht[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__ht[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__ht[bP]||{};
return bQ.minHeight||0;
},__hD:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ce=this.getSpacingY();

for(var i=0,l=this.__hx.length;i<l;i++){var cl=this.__hx[i];
var ch=this.__hD(cl);
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

for(var i=0,l=this.__hw.length;i<l;i++){var ct=this.__hw[i];
var cv=this.__hD(ct);
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
}}}},_getRowHeights:function(){if(this.__hA!=null){return this.__hA;
}var cP=[];
var cI=this.__hy;
var cH=this.__hz;

for(var cQ=0;cQ<=cI;cQ++){var cJ=0;
var cL=0;
var cK=0;

for(var cO=0;cO<=cH;cO++){var cG=this.__hv[cQ][cO];

if(!cG){continue;
}var cM=cG.getLayoutProperties().rowSpan||0;

if(cM>1){continue;
}var cN=this.__hD(cG);

if(this.getRowFlex(cQ)>0){cJ=Math.max(cJ,cN.minHeight);
}else{cJ=Math.max(cJ,cN.height);
}cL=Math.max(cL,cN.height);
}var cJ=Math.max(cJ,this.getRowMinHeight(cQ));
var cK=this.getRowMaxHeight(cQ);

if(this.getRowHeight(cQ)!==null){var cL=this.getRowHeight(cQ);
}else{var cL=Math.max(cJ,Math.min(cL,cK));
}cP[cQ]={minHeight:cJ,height:cL,maxHeight:cK};
}
if(this.__hx.length>0){this._fixHeightsRowSpan(cP);
}this.__hA=cP;
return cP;
},_getColWidths:function(){if(this.__hB!=null){return this.__hB;
}var cV=[];
var cS=this.__hz;
var cU=this.__hy;

for(var db=0;db<=cS;db++){var cY=0;
var cX=0;
var cT=Infinity;

for(var dc=0;dc<=cU;dc++){var cR=this.__hv[dc][db];

if(!cR){continue;
}var cW=cR.getLayoutProperties().colSpan||0;

if(cW>1){continue;
}var da=this.__hD(cR);

if(this.getColumnFlex(db)>0){cX=Math.max(cX,da.minWidth);
}else{cX=Math.max(cX,da.width);
}cY=Math.max(cY,da.width);
}cX=Math.max(cX,this.getColumnMinWidth(db));
cT=this.getColumnMaxWidth(db);

if(this.getColumnWidth(db)!==null){var cY=this.getColumnWidth(db);
}else{var cY=Math.max(cX,Math.min(cY,cT));
}cV[db]={minWidth:cX,width:cY,maxWidth:cT};
}
if(this.__hw.length>0){this._fixWidthsColSpan(cV);
}this.__hB=cV;
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
},renderLayout:function(ds,dt){if(this._invalidChildrenCache){this.__hC();
}var dH=qx.ui.layout.Util;
var dv=this.getSpacingX();
var dB=this.getSpacingY();
var dM=this._getColWidths();
var dL=this._getColumnFlexOffsets(ds);
var dw=[];
var dO=this.__hz;
var du=this.__hy;
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

for(var dC=0;dC<=du;dC++){var dJ=this.__hv[dC][dP];
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
this.__hB=null;
this.__hA=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hC();
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
}},destruct:function(){this.__hv=this.__ht=this.__hu=this.__hw=this.__hx=this.__hB=this.__hA=null;
}});
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
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__lG:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__lH:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__lH[name];
s[t]();
}else{var u=this.__lG[name];
s[u](q);
}}}});
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
(function(){var k="list",j="table",h="execute",g="bigger",f="jsonField",e="set",d="changeValue",c="filter",b="",a="change",Q="changeBubble",P="icon/16/actions/go-next.png",O="changeFeatureMap",N="sourceProperty",M="Selected Features",L="fce.view.FeatureSelector",K="bottom",J="_applyModel",I="changeFilter",H="__Oe",s="interval",t="Available Features",q="{\n  ",r="icon/16/actions/edit-find.png",o=",\n  ",p="Filter by feature name (RegEx)",m="middle",n="__Og",u="icon/16/actions/go-previous.png",v="icon/16/actions/window-new.png",z="_",y="Import Feature Map",B="textfield",A="\n}",D="JSON",C="cellDblclick",x="widget",G="featureselector",F="modelValueProperty",E="_applyFeatureData",w="__Of";
qx.Class.define(L,{extend:qx.ui.container.Composite,construct:function(){var R=new qx.ui.layout.HBox(20);
qx.ui.container.Composite.call(this,R);
this.setAppearance(G);
this.add(this._createTableContainer(),{flex:1});
this.add(this._createButtonContainer(),{flex:0});
this.add(this._createDisplayContainer(),{flex:1});
this.__Od={};
},properties:{featureData:{init:{},nullable:true,apply:E},model:{apply:J},filter:{init:b,event:I}},statics:{sanitizeId:function(S){if(/^[$A-Za-z_][0-9A-Za-z_]*$/.test(S)){return S;
}S=S.replace(/[^0-9a-z_]/gi,b);

if(S.length==0){S=z+new Date().getTime();
}return S;
}},members:{__Oe:null,__Of:null,__Og:null,__Oh:null,__Od:null,_createChildControlImpl:function(T,U){var V;

switch(T){case j:V=new fce.view.Table();
V.setMinWidth(330);
this.bind(c,V,c);
V.addListener(C,this.__Oi,this);
qx.data.SingleValueBinding.bind(V,N,this.getChildControl(k),F);
break;
case k:V=new fce.view.List();
V.setMinWidth(330);
V.setMinHeight(75);
V.getSelectedItems().addListener(a,this.__Ip,this);
break;
case f:V=new qx.ui.form.TextArea();
V.setMinWidth(330);
V.setMinHeight(75);
V.setReadOnly(true);
}return V;
},_createTableContainer:function(){var Y=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
var ba=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
Y.add(ba);
var bb=new qx.ui.basic.Label(t);
bb.setFont(g);
ba.add(bb);
bb.setAlignY(K);
ba.add(new qx.ui.core.Spacer(),{flex:1});
var X=new qx.ui.form.Button(y,v);
X.addListener(h,function(bc){this._getImportWindow().open();
},this);
ba.add(X);
var W=this.getChildControl(j);
Y.add(W,{flex:1});
Y.addBefore(this._createFilterBox(),W);
return Y;
},_createButtonContainer:function(){var bf=new qx.ui.container.Composite(new qx.ui.layout.VBox(20,m));
var bd=new qx.ui.form.Button(null,P);
bd.addListener(h,this.__Ok,this);
bf.add(bd);
var be=new qx.ui.form.Button(null,u);
be.addListener(h,this.__Ol,this);
bf.add(be);
return bf;
},_createDisplayContainer:function(){var bi=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
var bh=new qx.ui.basic.Label(M);
bi.add(bh);
bh.setFont(g);
bi.add(this.getChildControl(k),{flex:1});
var bg=new qx.ui.basic.Label(D);
bg.setFont(g);
bi.add(bg);
bi.add(this.getChildControl(f),{flex:1});
return bi;
},_createFilterBox:function(){var bl=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
bl.setAppearance(B);
var bj=this.__Oe=new qx.ui.form.TextField();
bj.setLiveUpdate(true);
bj.setAppearance(x);
bj.setPlaceholder(p);
bl.add(bj,{flex:1});
var bm=new qx.ui.basic.Image(r);
bl.add(bm);
var bk=new qx.event.Timer(500);
bk.addListener(s,function(bn){this.setFilter(this.__Oe.getValue());
bk.stop();
},this);
bj.addListener(d,function(bo){bk.restart();
},this);
return bl;
},_getImportWindow:function(){if(!this.__Of){this.__Of=new fce.view.ImportWindow();
this.__Of.center();
this.__Of.addListener(O,function(bp){var bq=bp.getData();
this.addFeatureSet(bq);
},this);
}return this.__Of;
},_getData:function(br){var bA=[];
var bt=[];
var bu=[];

for(var by in br){bu.push(by);
var bs=br[by];

for(var bx in bs){if(!qx.lang.Array.contains(bt,bx)){bt.push(bx);
}}}bt.sort();

for(var i=0,l=bt.length;i<l;i++){var bw=bt[i];
var bv={name:bw,distinctValues:1};
var bB=[];

for(var by in br){var bz=br[by];

if(bz[bw]!==undefined){bv[by]=bz[bw];

if(!qx.lang.Array.contains(bB,bz[bw])){bB.push(bz[bw]);
}}}bv.distinctValues=bB.length;
bA.push(bv);
}return bA;
},addFeatureSet:function(bC){var bD=this.getFeatureData();

for(var bE in bC){var bF=fce.view.FeatureSelector.sanitizeId(bE);
bD[bF]=bC[bE];
}this.setFeatureData(null);
this.setFeatureData(bD);
},_applyFeatureData:function(bG,bH){if(bG){var bJ=this._getData(bG);
var bI=qx.data.marshal.Json.createModel(bJ,true);
this.setModel(bI);
}},_applyModel:function(bK,bL){if(bL){bL.removeListener(Q,this.__Ip,this);
}bK.addListener(Q,this.__Ip,this);
this.getChildControl(j).setModel(bK);
},__Ip:function(){var bM=this.getChildControl(k).getModelValueProperty();
var bO=this.__Oj(this.getChildControl(k).getSelectedItems(),bM);
var bN=this._getJson(bO);
this.getChildControl(f).setValue(bN);
},__Oi:function(bP){var bQ=this.getChildControl(j);
var bU=bQ.getTableModel();
var bR=bP.getRow();
var bS=bU.getColumnCount()-1;
var bT=bU.getValue(bS,bR);
this.getChildControl(k).addItemsUnique(new qx.data.Array([bT]));
},__Oj:function(bV,bW){var bY={};

for(var i=0,l=bV.length;i<l;i++){var bX=bV.getItem(i);
bY[bX.getName()]=bX.get(bW);
}return bY;
},_getJson:function(ca){var cb=qx.lang.Json.stringify(ca);
return cb.replace(/{/,q).replace(/}/,A).replace(/,/g,o);
},_getSetsMenu:function(cc){if(!this.__Oh){this.__Oh=[];
}
for(var i=0,l=cc.length;i<l;i++){if(!qx.lang.Array.contains(this.__Oh,cc[i])){var cd=new qx.ui.menu.CheckBox(cc[i]);
cd.setValue(true);
cd.setUserData(e,cc[i]);
cd.addListener(d,function(ce){var cf=ce.getTarget().getUserData(e);
var cg=ce.getData();

if(cg){this._unstashSet(cf);
}else{this._stashSet(cf);
}},this);
this.__Og.add(cd);
this.__Oh.push(cc[i]);
}}},_stashSet:function(ch){var ci=this.getFeatureData();

if(ci[ch]){this.__Od[ch]=ci[ch];
delete ci[ch];
this.setFeatureData(null);
this.setFeatureData(ci);
}},_unstashSet:function(cj){var ck=this.getFeatureData();

if(this.__Od[cj]){ck[cj]=this.__Od[cj];
delete this.__Od[cj];
this.setFeatureData(null);
this.setFeatureData(ck);
}},__Ok:function(){var cl=this.getChildControl(j).getSelectedItems();
this.getChildControl(k).addItemsUnique(cl);
},__Ol:function(){this.getChildControl(k).removeSelected();
}},destruct:function(){this.getChildControl(k).getSelectedItems().removeListener(a,this.__Ip,this);
this._disposeObjects(H,w,n);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__lT,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__lT:function(name,e){var v=e.getData();
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
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__mo=[];
}else if(arguments.length>1){this.__mo=[];

for(var i=0;i<arguments.length;i++){this.__mo.push(arguments[i]);
}}else if(typeof p==c){this.__mo=new Array(p);
}else if(p instanceof Array){this.__mo=qx.lang.Array.clone(p);
}else{this.__mo=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__mo.length;i++){this._applyEventPropagation(this.__mo[i],null,i);
}this.__mp();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__mo:null,concat:function(q){if(q){var r=this.__mo.concat(q);
}else{var r=this.__mo.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__mo.join(s);
},pop:function(){var t=this.__mo.pop();
this.__mp();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__mo.push(arguments[i]);
this.__mp();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__mo.concat();
this.__mo.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__mo,name:k+(this.__mo.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__mo.shift();
this.__mp();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__mo.slice(x,y));
},splice:function(z,A,B){var J=this.__mo.length;
var F=this.__mo.splice.apply(this.__mo,arguments);
if(this.__mo.length!=J){this.__mp();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__mo.length>J){var I=m;
}else if(this.__mo.length<J){var I=l;
E=F;
}else{var I=j;
}this.fireDataEvent(o,{start:z,end:this.length-1,type:I,items:E},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,z+i);
}var G=[];

for(var i=2;i<arguments.length;i++){G[i-2]=arguments[i];
}var C=(z+Math.max(arguments.length-3,A-1));
var name=z==C?C:z+h+C;
this.fireDataEvent(n,{value:G,name:name,old:F});
for(var i=0;i<F.length;i++){this._registerEventChaining(null,F[i],i);
}return (new qx.data.Array(F));
},sort:function(K){if(this.length==0){return;
}var L=this.__mo.concat();
this.__mo.sort.apply(this.__mo,arguments);
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__mo,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__mo.unshift(arguments[i]);
this.__mp();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__mo[0]],name:g,old:[this.__mo[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__mo;
},getItem:function(N){return this.__mo[N];
},setItem:function(O,P){var Q=this.__mo[O];
if(Q===P){return;
}this.__mo[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__mo.length){this.__mp();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__mo.indexOf(R);
},toString:function(){if(this.__mo!=null){return this.__mo.toString();
}return b;
},contains:function(S){return this.__mo.indexOf(S)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U);
},insertBefore:function(V,W){var X=this.indexOf(V);

if(X==-1){this.push(W);
}else{this.splice(X,0,W);
}},insertAfter:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1||bb==(this.length-1)){this.push(ba);
}else{this.splice(bb+1,0,ba);
}},removeAt:function(bc){var be=this.splice(bc,1);
var bd=be.getItem(0);
be.dispose();
return bd;
},removeAll:function(){for(var i=0;i<this.__mo.length;i++){this._registerEventChaining(null,this.__mo[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__mo.concat();
this.__mo.length=0;
this.__mp();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__mo,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__mo.length+i);
}var bi=this.length;
this.__mp();
this.fireDataEvent(n,{value:bh,name:bi==(this.length-1)?bi:bi+h+(this.length-1),old:[]});
this.fireDataEvent(o,{start:bi,end:this.length-1,type:m,items:bh},null);
},remove:function(bj){var bk=this.indexOf(bj);

if(bk!=-1){this.splice(bk,1);
return bj;
}},equals:function(bl){if(this.length!==bl.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bl.getItem(i)){return false;
}}return true;
},sum:function(){var bm=0;

for(var i=0;i<this.length;i++){bm+=this.getItem(i);
}return bm;
},max:function(){var bn=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bn){bn=this.getItem(i);
}}return bn===undefined?null:bn;
},min:function(){var bo=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bo){bo=this.getItem(i);
}}return bo===undefined?null:bo;
},forEach:function(bp,bq){for(var i=0;i<this.__mo.length;i++){bp.call(bq,this.__mo[i],i,this);
}},__mp:function(){var br=this.length;
this.length=this.__mo.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__mo.length;i++){var bs=this.__mo[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__mo=null;
}});
})();
(function(){var q="Boolean",p="column-button",o="Function",n="qx.event.type.Data",m="statusbar",k="qx.ui.table.pane.CellEvent",h="function",g="PageUp",f="dataChanged",e="changeLocale",bH="changeSelection",bG="__xa",bF="appear",bE="qx.dynlocale",bD='"',bC="Enter",bB="metaDataChanged",bA="_applyStatusBarVisible",bz="columnVisibilityMenuCreateStart",by="blur",y="qx.ui.table.Table",z="columnVisibilityMenuCreateEnd",v="changeVisible",w="_applyResetSelectionOnHeaderClick",t="_applyMetaColumnCounts",u="focus",r="changeDataRowRenderer",s="changeHeaderCellHeight",G="Escape",H="A",ba="changeSelectionModel",V="Left",bi="__wQ",bd="Down",bu="Integer",bo="_applyHeaderCellHeight",O="visibilityChanged",bx="qx.ui.table.ITableModel",bw="orderChanged",bv="_applySelectionModel",M="menu-button",R="menu",T="_applyAdditionalStatusBarText",X="_applyFocusCellOnMouseMove",bb="table",be="_applyColumnVisibilityButtonVisible",bk="changeTableModel",bq="qx.event.type.Event",A="tableWidthChanged",B="_applyHeaderCellsVisible",Q="Object",bh="_applyShowCellFocusIndicator",bg="resize",bf="verticalScrollBarChanged",bm="changeScrollY",bl="_applyTableModel",bc="End",bj="_applyKeepFirstVisibleRowComplete",a="widthChanged",bp="one of one row",C="Home",D="_applyRowHeight",W="F2",b="Up",d="%1 rows",L="qx.ui.table.selection.Model",E="one row",F="__wR",J="PageDown",Y="%1 of %2 rows",bs="__kr",br="keypress",S="changeRowHeight",bt="__wX",N="Number",bn="header",I="_applyContextMenuFromDataCellsOnly",K="qx.ui.table.IRowRenderer",c="Right",U="__wY",P="Space";
qx.Class.define(y,{extend:qx.ui.core.Widget,construct:function(bI,bJ){qx.ui.core.Widget.call(this);
if(!bJ){bJ={};
}
if(bJ.initiallyHiddenColumns){this.setInitiallyHiddenColumns(bJ.initiallyHiddenColumns);
}
if(bJ.selectionManager){this.setNewSelectionManager(bJ.selectionManager);
}
if(bJ.selectionModel){this.setNewSelectionModel(bJ.selectionModel);
}
if(bJ.tableColumnModel){this.setNewTableColumnModel(bJ.tableColumnModel);
}
if(bJ.tablePane){this.setNewTablePane(bJ.tablePane);
}
if(bJ.tablePaneHeader){this.setNewTablePaneHeader(bJ.tablePaneHeader);
}
if(bJ.tablePaneScroller){this.setNewTablePaneScroller(bJ.tablePaneScroller);
}
if(bJ.tablePaneModel){this.setNewTablePaneModel(bJ.tablePaneModel);
}
if(bJ.columnMenu){this.setNewColumnMenu(bJ.columnMenu);
}this._setLayout(new qx.ui.layout.VBox());
this.__wQ=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(this.__wQ,{flex:1});
this.setDataRowRenderer(new qx.ui.table.rowrenderer.Default(this));
this.__wR=this.getNewSelectionManager()(this);
this.setSelectionModel(this.getNewSelectionModel()(this));
this.setTableModel(bI||this.getEmptyTableModel());
this.setMetaColumnCounts([-1]);
this.setTabIndex(1);
this.addListener(br,this._onKeyPress);
this.addListener(u,this._onFocusChanged);
this.addListener(by,this._onFocusChanged);
var bK=new qx.ui.core.Widget().set({height:0});
this._add(bK);
bK.addListener(bg,this._onResize,this);
this.__wS=null;
this.__wT=null;
if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().addListener(e,this._onChangeLocale,this);
}this.initStatusBarVisible();
bI=this.getTableModel();

if(bI.init&&typeof (bI.init)==h){bI.init(this);
}},events:{"columnVisibilityMenuCreateStart":n,"columnVisibilityMenuCreateEnd":n,"tableWidthChanged":bq,"verticalScrollBarChanged":n,"cellClick":k,"cellDblclick":k,"cellContextmenu":k,"dataEdited":n},statics:{__wU:{cellClick:1,cellDblclick:1,cellContextmenu:1}},properties:{appearance:{refine:true,init:bb},focusable:{refine:true,init:true},minWidth:{refine:true,init:50},initiallyHiddenColumns:{init:null},selectable:{refine:true,init:false},selectionModel:{check:L,apply:bv,event:ba},tableModel:{check:bx,apply:bl,event:bk},rowHeight:{check:N,init:20,apply:D,event:S,themeable:true},forceLineHeight:{check:q,init:true},headerCellsVisible:{check:q,init:true,apply:B,themeable:true},headerCellHeight:{check:bu,init:16,apply:bo,event:s,nullable:true,themeable:true},statusBarVisible:{check:q,init:true,apply:bA},additionalStatusBarText:{nullable:true,init:null,apply:T},columnVisibilityButtonVisible:{check:q,init:true,apply:be,themeable:true},metaColumnCounts:{check:Q,apply:t},focusCellOnMouseMove:{check:q,init:false,apply:X},rowFocusChangeModifiesSelection:{check:q,init:true},showCellFocusIndicator:{check:q,init:true,apply:bh},contextMenuFromDataCellsOnly:{check:q,init:true,apply:I},keepFirstVisibleRowComplete:{check:q,init:true,apply:bj},alwaysUpdateCells:{check:q,init:false},resetSelectionOnHeaderClick:{check:q,init:true,apply:w},dataRowRenderer:{check:K,init:null,nullable:true,event:r},modalCellEditorPreOpenFunction:{check:o,init:null,nullable:true},newColumnMenu:{check:o,init:function(){return new qx.ui.table.columnmenu.Button();
}},newSelectionManager:{check:o,init:function(bL){return new qx.ui.table.selection.Manager(bL);
}},newSelectionModel:{check:o,init:function(bM){return new qx.ui.table.selection.Model(bM);
}},newTableColumnModel:{check:o,init:function(bN){return new qx.ui.table.columnmodel.Basic(bN);
}},newTablePane:{check:o,init:function(bO){return new qx.ui.table.pane.Pane(bO);
}},newTablePaneHeader:{check:o,init:function(bP){return new qx.ui.table.pane.Header(bP);
}},newTablePaneScroller:{check:o,init:function(bQ){return new qx.ui.table.pane.Scroller(bQ);
}},newTablePaneModel:{check:o,init:function(bR){return new qx.ui.table.pane.Model(bR);
}}},members:{__wS:null,__wT:null,__wQ:null,__wR:null,__wV:null,__wW:null,__wE:null,__wX:null,__wY:null,__xa:null,__xb:null,__kr:null,_createChildControlImpl:function(bS,bT){var bU;

switch(bS){case m:bU=new qx.ui.basic.Label();
bU.set({allowGrowX:true});
this._add(bU);
break;
case p:bU=this.getNewColumnMenu()();
bU.set({focusable:false});
var bV=bU.factory(R,{table:this});
bV.addListener(bF,this._initColumnMenu,this);
break;
}return bU||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_applySelectionModel:function(bW,bX){this.__wR.setSelectionModel(bW);

if(bX!=null){bX.removeListener(bH,this._onSelectionChanged,this);
}bW.addListener(bH,this._onSelectionChanged,this);
},_applyRowHeight:function(bY,ca){var cb=this._getPaneScrollerArr();

for(var i=0;i<cb.length;i++){cb[i].updateVerScrollBarMaximum();
}},_applyHeaderCellsVisible:function(cc,cd){var ce=this._getPaneScrollerArr();

for(var i=0;i<ce.length;i++){ce[i]._excludeChildControl(bn);
}},_applyHeaderCellHeight:function(cf,cg){var ch=this._getPaneScrollerArr();

for(var i=0;i<ch.length;i++){ch[i].getHeader().setHeight(cf);
}},getEmptyTableModel:function(){if(!this.__xa){this.__xa=new qx.ui.table.model.Simple();
this.__xa.setColumns([]);
this.__xa.setData([]);
}return this.__xa;
},_applyTableModel:function(ci,cj){this.getTableColumnModel().init(ci.getColumnCount(),this);

if(cj!=null){cj.removeListener(bB,this._onTableModelMetaDataChanged,this);
cj.removeListener(f,this._onTableModelDataChanged,this);
}ci.addListener(bB,this._onTableModelMetaDataChanged,this);
ci.addListener(f,this._onTableModelDataChanged,this);
this._updateStatusBar();
this._updateTableData(0,ci.getRowCount(),0,ci.getColumnCount());
this._onTableModelMetaDataChanged();
if(cj&&ci.init&&typeof (ci.init)==h){ci.init(this);
}},getTableColumnModel:function(){if(!this.__wY){var cm=this.__wY=this.getNewTableColumnModel()(this);
cm.addListener(O,this._onColVisibilityChanged,this);
cm.addListener(a,this._onColWidthChanged,this);
cm.addListener(bw,this._onColOrderChanged,this);
var cl=this.getTableModel();
cm.init(cl.getColumnCount(),this);
var ck=this._getPaneScrollerArr();

for(var i=0;i<ck.length;i++){var cn=ck[i];
var co=cn.getTablePaneModel();
co.setTableColumnModel(cm);
}}return this.__wY;
},_applyStatusBarVisible:function(cp,cq){if(cp){this._showChildControl(m);
}else{this._excludeChildControl(m);
}
if(cp){this._updateStatusBar();
}},_applyAdditionalStatusBarText:function(cr,cs){this.__wV=cr;
this._updateStatusBar();
},_applyColumnVisibilityButtonVisible:function(ct,cu){if(ct){this._showChildControl(p);
}else{this._excludeChildControl(p);
}},_applyMetaColumnCounts:function(cv,cw){var cD=cv;
var cx=this._getPaneScrollerArr();
var cB={};

if(cv>cw){var cF=qx.event.Registration.getManager(cx[0]);

for(var cG in qx.ui.table.Table.__wU){cB[cG]={};
cB[cG].capture=cF.getListeners(cx[0],cG,true);
cB[cG].bubble=cF.getListeners(cx[0],cG,false);
}}this._cleanUpMetaColumns(cD.length);
var cC=0;

for(var i=0;i<cx.length;i++){var cH=cx[i];
var cE=cH.getTablePaneModel();
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
}if(cD.length>cx.length){var cA=this.getTableColumnModel();

for(var i=cx.length;i<cD.length;i++){var cE=this.getNewTablePaneModel()(cA);
cE.setFirstColumnX(cC);
cE.setMaxColumnCount(cD[i]);
cC+=cD[i];
var cH=this.getNewTablePaneScroller()(this);
cH.setTablePaneModel(cE);
cH.addListener(bm,this._onScrollY,this);
for(cG in qx.ui.table.Table.__wU){if(!cB[cG]){break;
}
if(cB[cG].capture&&cB[cG].capture.length>0){var cy=cB[cG].capture;

for(var j=0;j<cy.length;j++){var cz=cy[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cy[j].handler,cz,true);
}}
if(cB[cG].bubble&&cB[cG].bubble.length>0){var cJ=cB[cG].bubble;

for(var j=0;j<cJ.length;j++){var cz=cJ[j].context;

if(!cz){cz=this;
}else if(cz==cx[0]){cz=cH;
}cH.addListener(cG,cJ[j].handler,cz,false);
}}}var cI=(i==cD.length-1)?1:0;
this.__wQ.add(cH,{flex:cI});
cx=this._getPaneScrollerArr();
}}for(var i=0;i<cx.length;i++){var cH=cx[i];
var cK=(i==(cx.length-1));
cH.getHeader().setHeight(this.getHeaderCellHeight());
cH.setTopRightWidget(cK?this.getChildControl(p):null);
}
if(!this.isColumnVisibilityButtonVisible()){this._excludeChildControl(p);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_applyFocusCellOnMouseMove:function(cL,cM){var cN=this._getPaneScrollerArr();

for(var i=0;i<cN.length;i++){cN[i].setFocusCellOnMouseMove(cL);
}},_applyShowCellFocusIndicator:function(cO,cP){var cQ=this._getPaneScrollerArr();

for(var i=0;i<cQ.length;i++){cQ[i].setShowCellFocusIndicator(cO);
}},_applyContextMenuFromDataCellsOnly:function(cR,cS){var cT=this._getPaneScrollerArr();

for(var i=0;i<cT.length;i++){cT[i].setContextMenuFromDataCellsOnly(cR);
}},_applyKeepFirstVisibleRowComplete:function(cU,cV){var cW=this._getPaneScrollerArr();

for(var i=0;i<cW.length;i++){cW[i].onKeepFirstVisibleRowCompleteChanged();
}},_applyResetSelectionOnHeaderClick:function(cX,cY){var da=this._getPaneScrollerArr();

for(var i=0;i<da.length;i++){da[i].setResetSelectionOnHeaderClick(cX);
}},getSelectionManager:function(){return this.__wR;
},_getPaneScrollerArr:function(){return this.__wQ.getChildren();
},getPaneScroller:function(db){return this._getPaneScrollerArr()[db];
},_cleanUpMetaColumns:function(dc){var dd=this._getPaneScrollerArr();

if(dd!=null){for(var i=dd.length-1;i>=dc;i--){dd[i].destroy();
}}},_onChangeLocale:function(de){this.updateContent();
this._updateStatusBar();
},_onSelectionChanged:function(df){var dg=this._getPaneScrollerArr();

for(var i=0;i<dg.length;i++){dg[i].onSelectionChanged();
}this._updateStatusBar();
},_onTableModelMetaDataChanged:function(dh){var di=this._getPaneScrollerArr();

for(var i=0;i<di.length;i++){di[i].onTableModelMetaDataChanged();
}this._updateStatusBar();
},_onTableModelDataChanged:function(dj){var dk=dj.getData();
this._updateTableData(dk.firstRow,dk.lastRow,dk.firstColumn,dk.lastColumn,dk.removeStart,dk.removeCount);
},_updateTableData:function(dl,dm,dn,dp,dq,dr){var ds=this._getPaneScrollerArr();
if(dr){this.getSelectionModel().removeSelectionInterval(dq,dq+dr);
if(this.__wT>=dq&&this.__wT<(dq+dr)){this.setFocusedCell();
}}
for(var i=0;i<ds.length;i++){ds[i].onTableModelDataChanged(dl,dm,dn,dp);
}var dt=this.getTableModel().getRowCount();

if(dt!=this.__wW){this.__wW=dt;
this._updateScrollBarVisibility();
this._updateStatusBar();
}},_onScrollY:function(du){if(!this.__wE){this.__wE=true;
var dv=this._getPaneScrollerArr();

for(var i=0;i<dv.length;i++){dv[i].setScrollY(du.getData());
}this.__wE=false;
}},_onKeyPress:function(dw){if(!this.getEnabled()){return;
}var dD=this.__wT;
var dA=true;
var dE=dw.getKeyIdentifier();

if(this.isEditing()){if(dw.getModifiers()==0){switch(dE){case bC:this.stopEditing();
var dD=this.__wT;
this.moveFocusedCell(0,1);

if(this.__wT!=dD){dA=this.startEditing();
}break;
case G:this.cancelEditing();
this.focus();
break;
default:dA=false;
break;
}}}else{if(dw.isCtrlPressed()){dA=true;

switch(dE){case H:var dB=this.getTableModel().getRowCount();

if(dB>0){this.getSelectionModel().setSelectionInterval(0,dB-1);
}break;
default:dA=false;
break;
}}else{switch(dE){case P:this.__wR.handleSelectKeyDown(this.__wT,dw);
break;
case W:case bC:this.startEditing();
dA=true;
break;
case C:this.setFocusedCell(this.__wS,0,true);
break;
case bc:var dB=this.getTableModel().getRowCount();
this.setFocusedCell(this.__wS,dB-1,true);
break;
case V:this.moveFocusedCell(-1,0);
break;
case c:this.moveFocusedCell(1,0);
break;
case b:this.moveFocusedCell(0,-1);
break;
case bd:this.moveFocusedCell(0,1);
break;
case g:case J:var dz=this.getPaneScroller(0);
var dC=dz.getTablePane();
var dy=this.getRowHeight();
var dx=(dE==g)?-1:1;
dB=dC.getVisibleRowCount()-1;
dz.setScrollY(dz.getScrollY()+dx*dB*dy);
this.moveFocusedCell(0,dx*dB);
break;
default:dA=false;
}}}
if(dD!=this.__wT&&this.getRowFocusChangeModifiesSelection()){this.__wR.handleMoveKeyDown(this.__wT,dw);
}
if(dA){dw.preventDefault();
dw.stopPropagation();
}},_onFocusChanged:function(dF){var dG=this._getPaneScrollerArr();

for(var i=0;i<dG.length;i++){dG[i].onFocusChanged();
}},_onColVisibilityChanged:function(dH){var dI=this._getPaneScrollerArr();

for(var i=0;i<dI.length;i++){dI[i].onColVisibilityChanged();
}var dJ=dH.getData();

if(this.__wX!=null&&dJ.col!=null&&dJ.visible!=null){this.__wX[dJ.col].setVisible(dJ.visible);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColWidthChanged:function(dK){var dL=this._getPaneScrollerArr();

for(var i=0;i<dL.length;i++){var dM=dK.getData();
dL[i].setColumnWidth(dM.col,dM.newWidth);
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},_onColOrderChanged:function(dN){var dO=this._getPaneScrollerArr();

for(var i=0;i<dO.length;i++){dO[i].onColOrderChanged();
}this._updateScrollerWidths();
this._updateScrollBarVisibility();
},getTablePaneScrollerAtPageX:function(dP){var dQ=this._getMetaColumnAtPageX(dP);
return (dQ!=-1)?this.getPaneScroller(dQ):null;
},setFocusedCell:function(dR,dS,dT){if(!this.isEditing()&&(dR!=this.__wS||dS!=this.__wT)){if(dR===null){dR=0;
}this.__wS=dR;
this.__wT=dS;
var dU=this._getPaneScrollerArr();

for(var i=0;i<dU.length;i++){dU[i].setFocusedCell(dR,dS);
}
if(dR!==null&&dT){this.scrollCellVisible(dR,dS);
}}},resetSelection:function(){this.getSelectionModel().resetSelection();
},resetCellFocus:function(){this.setFocusedCell(null,null,false);
},getFocusedColumn:function(){return this.__wS;
},getFocusedRow:function(){return this.__wT;
},highlightFocusedRow:function(dV){this.getDataRowRenderer().setHighlightFocusRow(dV);
},clearFocusedRowHighlight:function(dW){if(dW){var dY=dW.getRelatedTarget();

if(dY instanceof qx.ui.table.pane.Pane||dY instanceof qx.ui.table.pane.FocusIndicator){return;
}}this.resetCellFocus();
var dX=this._getPaneScrollerArr();

for(var i=0;i<dX.length;i++){dX[i].onFocusChanged();
}},moveFocusedCell:function(ea,eb){var ef=this.__wS;
var eg=this.__wT;
if(ef==null||eg==null){return;
}
if(ea!=0){var ee=this.getTableColumnModel();
var x=ee.getVisibleX(ef);
var ed=ee.getVisibleColumnCount();
x=qx.lang.Number.limit(x+ea,0,ed-1);
ef=ee.getVisibleColumnAtX(x);
}
if(eb!=0){var ec=this.getTableModel();
eg=qx.lang.Number.limit(eg+eb,0,ec.getRowCount()-1);
}this.setFocusedCell(ef,eg,true);
},scrollCellVisible:function(eh,ei){var ej=this.getContentElement().getDomElement();
if(!ej){this.addListenerOnce(bF,function(){this.scrollCellVisible(eh,ei);
},this);
}var ek=this.getTableColumnModel();
var x=ek.getVisibleX(eh);
var el=this._getMetaColumnAtColumnX(x);

if(el!=-1){this.getPaneScroller(el).scrollCellVisible(eh,ei);
}},isEditing:function(){if(this.__wS!=null){var x=this.getTableColumnModel().getVisibleX(this.__wS);
var em=this._getMetaColumnAtColumnX(x);
return this.getPaneScroller(em).isEditing();
}return false;
},startEditing:function(){if(this.__wS!=null){var x=this.getTableColumnModel().getVisibleX(this.__wS);
var eo=this._getMetaColumnAtColumnX(x);
var en=this.getPaneScroller(eo).startEditing();
return en;
}return false;
},stopEditing:function(){if(this.__wS!=null){var x=this.getTableColumnModel().getVisibleX(this.__wS);
var ep=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(ep).stopEditing();
}},cancelEditing:function(){if(this.__wS!=null){var x=this.getTableColumnModel().getVisibleX(this.__wS);
var eq=this._getMetaColumnAtColumnX(x);
this.getPaneScroller(eq).cancelEditing();
}},updateContent:function(){var er=this._getPaneScrollerArr();

for(var i=0;i<er.length;i++){er[i].getTablePane().updateContent(true);
}},blockHeaderElements:function(){var es=this._getPaneScrollerArr();

for(var i=0;i<es.length;i++){es[i].getHeader().getBlocker().blockContent(20);
}this.getChildControl(p).getBlocker().blockContent(20);
},unblockHeaderElements:function(){var et=this._getPaneScrollerArr();

for(var i=0;i<et.length;i++){et[i].getHeader().getBlocker().unblockContent();
}this.getChildControl(p).getBlocker().unblockContent();
},_getMetaColumnAtPageX:function(eu){var ev=this._getPaneScrollerArr();

for(var i=0;i<ev.length;i++){var ew=ev[i].getContainerLocation();

if(eu>=ew.left&&eu<=ew.right){return i;
}}return -1;
},_getMetaColumnAtColumnX:function(ex){var ez=this.getMetaColumnCounts();
var eA=0;

for(var i=0;i<ez.length;i++){var ey=ez[i];
eA+=ey;

if(ey==-1||ex<eA){return i;
}}return -1;
},_updateStatusBar:function(){var eB=this.getTableModel();

if(this.getStatusBarVisible()){var eC=this.getSelectionModel().getSelectedCount();
var eE=eB.getRowCount();
var eD;

if(eE>=0){if(eC==0){eD=this.trn(E,d,eE,eE);
}else{eD=this.trn(bp,Y,eE,eC,eE);
}}
if(this.__wV){if(eD){eD+=this.__wV;
}else{eD=this.__wV;
}}
if(eD){this.getChildControl(m).setValue(eD);
}}},_updateScrollerWidths:function(){var eF=this._getPaneScrollerArr();

for(var i=0;i<eF.length;i++){var eH=(i==(eF.length-1));
var eI=eF[i].getTablePaneModel().getTotalWidth();
eF[i].setPaneWidth(eI);
var eG=eH?1:0;
eF[i].setLayoutProperties({flex:eG});
}},_updateScrollBarVisibility:function(){if(!this.getBounds()){return;
}var eM=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var eO=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
var eJ=this._getPaneScrollerArr();
var eL=false;
var eN=false;

for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
var eK=eJ[i].getNeededScrollBars(eL,!eP);

if(eK&eM){eL=true;
}
if(eP&&(eK&eO)){eN=true;
}}for(var i=0;i<eJ.length;i++){var eP=(i==(eJ.length-1));
eJ[i].setHorizontalScrollBarVisible(eL);
if(eP){if(this.__xb==null){this.__xb=eJ[i].getVerticalScrollBarVisible();
this.__kr=qx.event.Timer.once(function(){this.__xb=null;
this.__kr=null;
},this,0);
}}eJ[i].setVerticalScrollBarVisible(eP&&eN);
if(eP&&eN!=this.__xb){this.fireDataEvent(bf,eN);
}}},_initColumnMenu:function(){var eS=this.getTableModel();
var eT=this.getTableColumnModel();
var eU=this.getChildControl(p);
eU.empty();
var eR=eU.getMenu();
var eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(bz,eV);
this.__wX={};

for(var eW=0,l=eS.getColumnCount();eW<l;eW++){var eQ=eU.factory(M,{text:eS.getColumnName(eW),column:eW,bVisible:eT.isColumnVisible(eW)});
qx.core.Assert.assertInterface(eQ,qx.ui.table.IColumnMenuItem);
eQ.addListener(v,this._createColumnVisibilityCheckBoxHandler(eW),this);
this.__wX[eW]=eQ;
}eV={table:this,menu:eR,columnButton:eU};
this.fireDataEvent(z,eV);
},_createColumnVisibilityCheckBoxHandler:function(eX){return function(eY){var fa=this.getTableColumnModel();
fa.setColumnVisible(eX,eY.getData());
};
},setColumnWidth:function(fb,fc){this.getTableColumnModel().setColumnWidth(fb,fc);
},_onResize:function(){this.fireEvent(A);
this._updateScrollerWidths();
this._updateScrollBarVisibility();
},addListener:function(fd,fe,self,ff){if(this.self(arguments).__wU[fd]){var fh=[fd];

for(var i=0,fg=this._getPaneScrollerArr();i<fg.length;i++){fh.push(fg[i].addListener.apply(fg[i],arguments));
}return fh.join(bD);
}else{return qx.ui.core.Widget.prototype.addListener.call(this,fd,fe,self,ff);
}},removeListener:function(fi,fj,self,fk){if(this.self(arguments).__wU[fi]){for(var i=0,fl=this._getPaneScrollerArr();i<fl.length;i++){fl[i].removeListener.apply(fl[i],arguments);
}}else{qx.ui.core.Widget.prototype.removeListener.call(this,fi,fj,self,fk);
}},removeListenerById:function(fm){var fq=fm.split(bD);
var fp=fq.shift();

if(this.self(arguments).__wU[fp]){var fo=true;

for(var i=0,fn=this._getPaneScrollerArr();i<fn.length;i++){fo=fn[i].removeListenerById.call(fn[i],fq[i])&&fo;
}return fo;
}else{return qx.ui.core.Widget.prototype.removeListenerById.call(this,fm);
}},destroy:function(){this.getChildControl(p).getMenu().destroy();
qx.ui.core.Widget.prototype.destroy.call(this);
}},destruct:function(){if(qx.core.Environment.get(bE)){qx.locale.Manager.getInstance().removeListener(e,this._onChangeLocale,this);
}var fs=this.getSelectionModel();

if(fs){fs.dispose();
}var fr=this.getDataRowRenderer();

if(fr){fr.dispose();
}this._cleanUpMetaColumns(0);
this.getTableColumnModel().dispose();
this._disposeObjects(F,bi,bG,bG,U,bs);
this._disposeMap(bt);
}});
})();
(function(){var a="qx.ui.table.IRowRenderer";
qx.Interface.define(a,{members:{updateDataRowElement:function(b,c){},getRowHeightStyle:function(d){},createRowStyle:function(e){},getRowClass:function(f){}}});
})();
(function(){var j="",i="table-row-background-even",h="Boolean",g="content",f="default",e="height:",d="'",c="table-row",b="table-row-background-focused",a="css.boxmodel",v=';color:',u="table-row-background-odd",t="1px solid ",s="table-row-line",r="table-row-background-selected",q="background-color:",p=';border-bottom: 1px solid ',o="table-row-selected",n="table-row-background-focused-selected",m="px;",k="qx.ui.table.rowrenderer.Default",l=";";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.ui.table.IRowRenderer,construct:function(){qx.core.Object.call(this);
this.__xc=j;
this.__xc={};
this._colors={};
this._renderFont(qx.theme.manager.Font.getInstance().resolve(f));
var w=qx.theme.manager.Color.getInstance();
this._colors.bgcolFocusedSelected=w.resolve(n);
this._colors.bgcolFocused=w.resolve(b);
this._colors.bgcolSelected=w.resolve(r);
this._colors.bgcolEven=w.resolve(i);
this._colors.bgcolOdd=w.resolve(u);
this._colors.colSelected=w.resolve(o);
this._colors.colNormal=w.resolve(c);
this._colors.horLine=w.resolve(s);
},properties:{highlightFocusRow:{check:h,init:true}},members:{_colors:null,__xd:null,__xc:null,_insetY:1,_renderFont:function(x){if(x){this.__xd=x.getStyles();
this.__xc=qx.bom.element.Style.compile(this.__xd);
this.__xc=this.__xc.replace(/"/g,d);
}else{this.__xc=j;
this.__xd=qx.bom.Font.getDefaultStyles();
}},updateDataRowElement:function(y,z){var B=this.__xd;
var A=z.style;
qx.bom.element.Style.setStyles(z,B);

if(y.focusedRow&&this.getHighlightFocusRow()){A.backgroundColor=y.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused;
}else{if(y.selected){A.backgroundColor=this._colors.bgcolSelected;
}else{A.backgroundColor=(y.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd;
}}A.color=y.selected?this._colors.colSelected:this._colors.colNormal;
A.borderBottom=t+this._colors.horLine;
},getRowHeightStyle:function(C){if(qx.core.Environment.get(a)==g){C-=this._insetY;
}return e+C+m;
},createRowStyle:function(D){var E=[];
E.push(l);
E.push(this.__xc);
E.push(q);

if(D.focusedRow&&this.getHighlightFocusRow()){E.push(D.selected?this._colors.bgcolFocusedSelected:this._colors.bgcolFocused);
}else{if(D.selected){E.push(this._colors.bgcolSelected);
}else{E.push((D.row%2==0)?this._colors.bgcolEven:this._colors.bgcolOdd);
}}E.push(v);
E.push(D.selected?this._colors.colSelected:this._colors.colNormal);
E.push(p,this._colors.horLine);
return E.join(j);
},getRowClass:function(F){return j;
},getRowAttributes:function(G){return j;
}},destruct:function(){this._colors=this.__xd=this.__xc=null;
}});
})();
(function(){var a="qx.ui.table.IColumnMenuButton";
qx.Interface.define(a,{properties:{menu:{}},members:{factory:function(b,c){return true;
},empty:function(){return true;
}}});
})();
(function(){var m="pressed",l="hovered",k="changeVisibility",j="qx.ui.menu.Menu",i="submenu",h="Enter",g="abandoned",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",a="left",b="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(n,o,p){qx.ui.form.Button.call(this,n,o);
if(p!=null){this.setMenu(p);
}},properties:{menu:{check:j,nullable:true,apply:b,event:d}},members:{_applyMenu:function(q,r){if(r){r.removeListener(k,this._onMenuChange,this);
r.resetOpener();
}
if(q){q.addListener(k,this._onMenuChange,this);
q.setOpener(this);
q.removeState(i);
q.removeState(f);
}},open:function(s){var t=this.getMenu();

if(t){qx.ui.menu.Manager.getInstance().hideAll();
t.setOpener(this);
t.open();
if(s){var u=t.getSelectables()[0];

if(u){t.setSelectedButton(u);
}}}},_onMenuChange:function(e){var v=this.getMenu();

if(v.isVisible()){this.addState(m);
}else{this.removeState(m);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
if(e.getButton()!=a){return;
}var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(l);
},_onMouseOut:function(e){this.removeState(l);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case h:this.removeState(g);
this.addState(m);
var x=this.getMenu();

if(x){if(!x.isVisible()){this.open();
}else{x.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}}});
})();
(function(){var u="keypress",t="interval",s="keydown",r="mousedown",q="keyup",p="__np",o="blur",n="Enter",m="__og",l="Up",d="__of",k="Escape",h="event.touch",c="qx.ui.menu.Manager",b="Left",g="Down",f="Right",j="singleton",a="Space";
qx.Class.define(c,{type:j,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__np=[];
var v=document.body;
var w=qx.event.Registration;
w.addListener(window.document.documentElement,r,this._onMouseDown,this,true);
w.addListener(v,s,this._onKeyUpDown,this,true);
w.addListener(v,q,this._onKeyUpDown,this,true);
w.addListener(v,u,this._onKeyPress,this,true);
if(!qx.core.Environment.get(h)){qx.bom.Element.addListener(window,o,this.hideAll,this);
}this.__of=new qx.event.Timer;
this.__of.addListener(t,this._onOpenInterval,this);
this.__og=new qx.event.Timer;
this.__og.addListener(t,this._onCloseInterval,this);
},members:{__oh:null,__oi:null,__of:null,__og:null,__np:null,_getChild:function(x,y,z,A){var B=x.getChildren();
var length=B.length;
var C;

for(var i=y;i<length&&i>=0;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()){return C;
}}
if(A){i=i==length?0:length-1;

for(;i!=y;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()){return C;
}}}return null;
},_isInMenu:function(D){while(D){if(D instanceof qx.ui.menu.Menu){return true;
}D=D.getLayoutParent();
}return false;
},_getMenuButton:function(E){while(E){if(E instanceof qx.ui.menu.AbstractButton){return E;
}E=E.getLayoutParent();
}return null;
},add:function(F){var G=this.__np;
G.push(F);
F.setZIndex(1e6+G.length);
},remove:function(H){var I=this.__np;

if(I){qx.lang.Array.remove(I,H);
}},hideAll:function(){var J=this.__np;

if(J){for(var i=J.length-1;i>=0;i--){J[i].exclude();
}}},getActiveMenu:function(){var K=this.__np;
return K.length>0?K[K.length-1]:null;
},scheduleOpen:function(L){this.cancelClose(L);
if(L.isVisible()){if(this.__oh){this.cancelOpen(this.__oh);
}}else if(this.__oh!=L){this.__oh=L;
this.__of.restartWith(L.getOpenInterval());
}},scheduleClose:function(M){this.cancelOpen(M);
if(!M.isVisible()){if(this.__oi){this.cancelClose(this.__oi);
}}else if(this.__oi!=M){this.__oi=M;
this.__og.restartWith(M.getCloseInterval());
}},cancelOpen:function(N){if(this.__oh==N){this.__of.stop();
this.__oh=null;
}},cancelClose:function(O){if(this.__oi==O){this.__og.stop();
this.__oi=null;
}},_onOpenInterval:function(e){this.__of.stop();
this.__oh.open();
this.__oh=null;
},_onCloseInterval:function(e){this.__og.stop();
this.__oi.exclude();
this.__oi=null;
},_onMouseDown:function(e){var P=e.getTarget();
P=qx.ui.core.Widget.getWidgetByElement(P,true);
if(P==null){this.hideAll();
return;
}if(P.getMenu&&P.getMenu()&&P.getMenu().isVisible()){return;
}if(this.__np.length>0&&!this._isInMenu(P)){this.hideAll();
}},__oj:{"Enter":1,"Space":1},__ok:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var Q=this.getActiveMenu();

if(!Q){return;
}var R=e.getKeyIdentifier();

if(this.__ok[R]||(this.__oj[R]&&Q.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var S=this.getActiveMenu();

if(!S){return;
}var T=e.getKeyIdentifier();
var V=this.__ok[T];
var U=this.__oj[T];

if(V){switch(T){case l:this._onKeyPressUp(S);
break;
case g:this._onKeyPressDown(S);
break;
case b:this._onKeyPressLeft(S);
break;
case f:this._onKeyPressRight(S);
break;
case k:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(U){var W=S.getSelectedButton();

if(W){switch(T){case n:this._onKeyPressEnter(S,W,e);
break;
case a:this._onKeyPressSpace(S,W,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(X){var Y=X.getSelectedButton();
var ba=X.getChildren();
var bc=Y?X.indexOf(Y)-1:ba.length-1;
var bb=this._getChild(X,bc,-1,true);
if(bb){X.setSelectedButton(bb);
}else{X.resetSelectedButton();
}},_onKeyPressDown:function(bd){var be=bd.getSelectedButton();
var bg=be?bd.indexOf(be)+1:0;
var bf=this._getChild(bd,bg,1,true);
if(bf){bd.setSelectedButton(bf);
}else{bd.resetSelectedButton();
}},_onKeyPressLeft:function(bh){var bm=bh.getOpener();

if(!bm){return;
}if(bm instanceof qx.ui.menu.AbstractButton){var bj=bm.getLayoutParent();
bj.resetOpenedButton();
bj.setSelectedButton(bm);
}else if(bm instanceof qx.ui.menubar.Button){var bl=bm.getMenuBar().getMenuButtons();
var bi=bl.indexOf(bm);
if(bi===-1){return;
}var bn=null;
var length=bl.length;

for(var i=1;i<=length;i++){var bk=bl[(bi-i+length)%length];

if(bk.isEnabled()){bn=bk;
break;
}}
if(bn&&bn!=bm){bn.open(true);
}}},_onKeyPressRight:function(bo){var bq=bo.getSelectedButton();
if(bq){var bp=bq.getMenu();

if(bp){bo.setOpenedButton(bq);
var bw=this._getChild(bp,0,1);

if(bw){bp.setSelectedButton(bw);
}return;
}}else if(!bo.getOpenedButton()){var bw=this._getChild(bo,0,1);

if(bw){bo.setSelectedButton(bw);

if(bw.getMenu()){bo.setOpenedButton(bw);
}return;
}}var bu=bo.getOpener();
if(bu instanceof qx.ui.menu.Button&&bq){while(bu){bu=bu.getLayoutParent();

if(bu instanceof qx.ui.menu.Menu){bu=bu.getOpener();

if(bu instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bu){return;
}}if(bu instanceof qx.ui.menubar.Button){var bt=bu.getMenuBar().getMenuButtons();
var br=bt.indexOf(bu);
if(br===-1){return;
}var bv=null;
var length=bt.length;

for(var i=1;i<=length;i++){var bs=bt[(br+i)%length];

if(bs.isEnabled()){bv=bs;
break;
}}
if(bv&&bv!=bu){bv.open(true);
}}},_onKeyPressEnter:function(bx,by,e){if(by.hasListener(u)){var bz=e.clone();
bz.setBubbles(false);
bz.setTarget(by);
by.dispatchEvent(bz);
}this.hideAll();
},_onKeyPressSpace:function(bA,bB,e){if(bB.hasListener(u)){var bC=e.clone();
bC.setBubbles(false);
bC.setTarget(bB);
bB.dispatchEvent(bC);
}}},destruct:function(){var bE=qx.event.Registration;
var bD=document.body;
bE.removeListener(window.document.documentElement,r,this._onMouseDown,this,true);
bE.removeListener(bD,s,this._onKeyUpDown,this,true);
bE.removeListener(bD,q,this._onKeyUpDown,this,true);
bE.removeListener(bD,u,this._onKeyPress,this,true);
this._disposeObjects(d,m);
this._disposeArray(p);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__dO:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__dO(c);
},hasChildren:function(){return this.__dO(f);
},add:function(r,s){return this.__dO(j,r,s);
},remove:function(t){return this.__dO(a,t);
},removeAll:function(){return this.__dO(d);
},indexOf:function(u){return this.__dO(l,u);
},addAt:function(v,w,x){this.__dO(g,v,w,x);
},addBefore:function(y,z,A){this.__dO(i,y,z,A);
},addAfter:function(B,C,D){this.__dO(k,B,C,D);
},removeAt:function(E){return this.__dO(e,E);
}}});
})();
(function(){var l="slidebar",k="Integer",j="resize",h="qx.ui.core.Widget",g="selected",f="visible",d="Boolean",c="mouseout",b="excluded",a="menu",A="_applySelectedButton",z="_applyOpenInterval",y="_applySpacingY",x="_blocker",w="_applyCloseInterval",v="_applyBlockerColor",u="_applyIconColumnWidth",t="mouseover",s="qx.ui.menu.Menu",r="Color",p="Number",q="_applyOpenedButton",n="_applySpacingX",o="_applyBlockerOpacity",m="_applyArrowColumnWidth";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(t,this._onMouseOver);
this.addListener(c,this._onMouseOut);
this.addListener(j,this._onResize,this);
B.addListener(j,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:a},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:b},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:k,apply:n,init:0,themeable:true},spacingY:{check:k,apply:y,init:0,themeable:true},iconColumnWidth:{check:k,init:0,themeable:true,apply:u},arrowColumnWidth:{check:k,init:0,themeable:true,apply:m},blockerColor:{check:r,init:null,nullable:true,apply:v,themeable:true},blockerOpacity:{check:p,init:1,apply:o,themeable:true},selectedButton:{check:h,nullable:true,apply:A},openedButton:{check:h,nullable:true,apply:q},opener:{check:h,nullable:true},openInterval:{check:k,themeable:true,init:250,apply:z},closeInterval:{check:k,themeable:true,init:250,apply:w},blockBackground:{check:d,themeable:true,init:false}},members:{__qv:null,__qw:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__qy();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__qy();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(C){this.placeToPoint(C);
this.__qy();
this.show();
this._placementTarget=C;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var D=[];
var E=this.getChildren();

for(var i=0;i<E.length;i++){if(E[i].isEnabled()){D.push(E[i]);
}}return D;
},_applyIconColumnWidth:function(F,G){this._getMenuLayout().setIconColumnWidth(F);
},_applyArrowColumnWidth:function(H,I){this._getMenuLayout().setArrowColumnWidth(H);
},_applySpacingX:function(J,K){this._getMenuLayout().setColumnSpacing(J);
},_applySpacingY:function(L,M){this._getMenuLayout().setSpacing(L);
},_applyVisibility:function(N,O){qx.ui.core.Widget.prototype._applyVisibility.call(this,N,O);
var P=qx.ui.menu.Manager.getInstance();

if(N===f){P.add(this);
var Q=this.getParentMenu();

if(Q){Q.setOpenedButton(this.getOpener());
}}else if(O===f){P.remove(this);
var Q=this.getParentMenu();

if(Q&&Q.getOpenedButton()==this.getOpener()){Q.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__qx();
},__qx:function(){if(this.isVisible()){if(this.getBlockBackground()){var R=this.getZIndex();
this._blocker.blockContent(R-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var S=this.getOpener();

if(!S||!(S instanceof qx.ui.menu.AbstractButton)){return null;
}
if(S&&S.getContextMenu()===this){return null;
}
while(S&&!(S instanceof qx.ui.menu.Menu)){S=S.getLayoutParent();
}return S;
},_applySelectedButton:function(T,U){if(U){U.removeState(g);
}
if(T){T.addState(g);
}},_applyOpenedButton:function(V,W){if(W&&W.getMenu()){W.getMenu().exclude();
}
if(V){V.getMenu().open();
}},_applyBlockerColor:function(X,Y){this._blocker.setColor(X);
},_applyBlockerOpacity:function(ba,bb){this._blocker.setOpacity(ba);
},getChildrenContainer:function(){return this.getChildControl(l,true)||this;
},_createChildControlImpl:function(bc,bd){var be;

switch(bc){case l:var be=new qx.ui.menu.MenuSlideBar();
var bg=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bf=be.getLayout();
be.setLayout(bg);
bf.dispose();
var bh=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bh.length;i++){be.add(bh[i]);
}this.removeListener(j,this._onResize,this);
be.getChildrenContainer().addListener(j,this._onResize,this);
this._add(be);
break;
}return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);
},_getMenuLayout:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(l)){return this.getChildControl(l).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__qy:function(){var bj=this._getMenuBounds();

if(!bj){this.addListenerOnce(j,this.__qy,this);
return;
}var bi=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var bk=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(bj.height+top);
this.moveTo(bk,0);
});
}else if(top+bj.height>bi){this._assertSlideBar(function(){this.setHeight(bi-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(l)){return bl.call(this);
}this.__qw=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(l);

if(this.__qw){this.__qw.call(this);
delete this.__qw;
}},_onResize:function(){if(this.isVisible()){var bm=this._placementTarget;

if(!bm){return;
}else if(bm instanceof qx.ui.core.Widget){this.placeToWidget(bm);
}else if(bm.top!==undefined){this.placeToPoint(bm);
}else{throw new Error("Unknown target: "+bm);
}this.__qy();
}},_onMouseOver:function(e){var bo=qx.ui.menu.Manager.getInstance();
bo.cancelClose(this);
var bp=e.getTarget();

if(bp.isEnabled()&&bp instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bp);
var bn=bp.getMenu&&bp.getMenu();

if(bn){bn.setOpener(bp);
bo.scheduleOpen(bn);
this.__qv=bn;
}else{var bq=this.getOpenedButton();

if(bq){bo.scheduleClose(bq.getMenu());
}
if(this.__qv){bo.cancelOpen(this.__qv);
this.__qv=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var br=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bs=this.getOpenedButton();
bs?this.setSelectedButton(bs):this.resetSelectedButton();
if(bs){br.cancelClose(bs.getMenu());
}if(this.__qv){br.cancelOpen(this.__qv);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(j,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(x);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__pi:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__pi=[0,0,0,0];
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
}var p=qx.ui.layout.VBox.prototype._computeSizeHint.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__pi||null;
}},destruct:function(){this.__pi=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var s="icon",r="label",q="arrow",p="shortcut",o="changeLocale",n="qx.dynlocale",m="submenu",l="String",k="changeCommand",j="qx.ui.menu.Menu",c="qx.ui.menu.AbstractButton",i="keypress",g="",b="_applyIcon",a="mouseup",f="abstract",d="_applyLabel",h="_applyMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:f,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(a,this._onMouseUp);
this.addListener(i,this._onKeyPress);
this.addListener(k,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:d,nullable:true},menu:{check:j,apply:h,nullable:true,dereference:true},icon:{check:l,apply:b,themeable:true,nullable:true}},members:{_createChildControlImpl:function(t,u){var v;

switch(t){case s:v=new qx.ui.basic.Image;
v.setAnonymous(true);
this._add(v,{column:0});
break;
case r:v=new qx.ui.basic.Label;
v.setAnonymous(true);
this._add(v,{column:1});
break;
case p:v=new qx.ui.basic.Label;
v.setAnonymous(true);
this._add(v,{column:2});
break;
case q:v=new qx.ui.basic.Image;
v.setAnonymous(true);
this._add(v,{column:3});
break;
}return v||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_forwardStates:{selected:1},getChildrenSizes:function(){var w=0,x=0,y=0,C=0;

if(this._isChildControlVisible(s)){var D=this.getChildControl(s);
w=D.getMarginLeft()+D.getSizeHint().width+D.getMarginRight();
}
if(this._isChildControlVisible(r)){var A=this.getChildControl(r);
x=A.getMarginLeft()+A.getSizeHint().width+A.getMarginRight();
}
if(this._isChildControlVisible(p)){var z=this.getChildControl(p);
y=z.getMarginLeft()+z.getSizeHint().width+z.getMarginRight();
}
if(this._isChildControlVisible(q)){var B=this.getChildControl(q);
C=B.getMarginLeft()+B.getSizeHint().width+B.getMarginRight();
}return [w,x,y,C];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var G=e.getData();
if(G==null){return;
}
if(qx.core.Environment.get(n)){var E=e.getOldData();

if(!E){qx.locale.Manager.getInstance().addListener(o,this._onChangeLocale,this);
}
if(!G){qx.locale.Manager.getInstance().removeListener(o,this._onChangeLocale,this);
}}var F=G!=null?G.toString():g;
this.getChildControl(p).setValue(F);
},_onChangeLocale:qx.core.Environment.select(n,{"true":function(e){var H=this.getCommand();

if(H!=null){this.getChildControl(p).setValue(H.toString());
}},"false":null}),_applyIcon:function(I,J){if(I){this._showChildControl(s).setSource(I);
}else{this._excludeChildControl(s);
}},_applyLabel:function(K,L){if(K){this._showChildControl(r).setValue(K);
}else{this._excludeChildControl(r);
}},_applyMenu:function(M,N){if(N){N.resetOpener();
N.removeState(m);
}
if(M){this._showChildControl(q);
M.setOpener(this);
M.addState(m);
}else{this._excludeChildControl(q);
}}},destruct:function(){this.removeListener(k,this._onChangeCommand,this);

if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Environment.get(n)){qx.locale.Manager.getInstance().removeListener(o,this._onChangeLocale,this);
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
}var o=this.__ra(q[0]);
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
}},__ra:function(t){while(!(t instanceof qx.ui.menu.Menu)){t=t.getLayoutParent();
}return t;
},_computeSizeHint:function(){var w=this._getLayoutChildren();
var v=0;
var x=0;

for(var i=0,l=w.length;i<l;i++){var u=w[i].getSizeHint();
x+=u.width;
v=Math.max(v,u.height);
}return {width:x,height:v};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var u="horizontal",t="scrollpane",s="button-backward",r="button-forward",q="vertical",p="content",o="execute",n="qx.ui.container.SlideBar",m="scrollY",l="engine.name",d="removeChildWidget",k="scrollX",h="_applyOrientation",c="mousewheel",b="gecko",g="x",f="y",i="Integer",a="slidebar",j="update";
qx.Class.define(n,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(v){qx.ui.core.Widget.call(this);
var w=this.getChildControl(t);
this._add(w,{flex:1});

if(v!=null){this.setOrientation(v);
}else{this.initOrientation();
}this.addListener(c,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[u,q],init:u,apply:h},scrollStep:{check:i,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(p);
},_createChildControlImpl:function(x,y){var z;

switch(x){case r:z=new qx.ui.form.RepeatButton;
z.addListener(o,this._onExecuteForward,this);
z.setFocusable(false);
this._addAt(z,2);
break;
case s:z=new qx.ui.form.RepeatButton;
z.addListener(o,this._onExecuteBackward,this);
z.setFocusable(false);
this._addAt(z,0);
break;
case p:z=new qx.ui.container.Composite();
if(qx.core.Environment.get(l)==b){z.addListener(d,this._onRemoveChild,this);
}this.getChildControl(t).add(z);
break;
case t:z=new qx.ui.core.scroll.ScrollPane();
z.addListener(j,this._onResize,this);
z.addListener(k,this._onScroll,this);
z.addListener(m,this._onScroll,this);
break;
}return z||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,x);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(A){var B=this.getChildControl(t);

if(this.getOrientation()===u){B.scrollByX(A);
}else{B.scrollByY(A);
}},scrollTo:function(C){var D=this.getChildControl(t);

if(this.getOrientation()===u){D.scrollToX(C);
}else{D.scrollToY(C);
}},_applyEnabled:function(E,F,name){qx.ui.core.Widget.prototype._applyEnabled.call(this,E,F,name);
this._updateArrowsEnabled();
},_applyOrientation:function(G,H){var K=[this.getLayout(),this._getLayout()];
var J=this.getChildControl(r);
var I=this.getChildControl(s);
if(H==q){J.removeState(q);
I.removeState(q);
J.addState(u);
I.addState(u);
}else if(H==u){J.removeState(u);
I.removeState(u);
J.addState(q);
I.addState(q);
}
if(G==u){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(K[0]){K[0].dispose();
}
if(K[1]){K[1].dispose();
}},_onMouseWheel:function(e){var L=0;

if(this.getOrientation()===u){L=e.getWheelDelta(g);
}else{L=e.getWheelDelta(f);
}this.scrollBy(L*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(t).getChildren()[0];

if(!content){return;
}var M=this.getInnerSize();
var O=content.getBounds();
var N=(this.getOrientation()===u)?O.width>M.width:O.height>M.height;

if(N){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(t).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){if(!this.getEnabled()){this.getChildControl(s).setEnabled(false);
this.getChildControl(r).setEnabled(false);
return;
}var Q=this.getChildControl(t);

if(this.getOrientation()===u){var P=Q.getScrollX();
var R=Q.getScrollMaxX();
}else{var P=Q.getScrollY();
var R=Q.getScrollMaxY();
}this.getChildControl(s).setEnabled(P>0);
this.getChildControl(r).setEnabled(P<R);
},_showArrows:function(){this._showChildControl(r);
this._showChildControl(s);
},_hideArrows:function(){this._excludeChildControl(r);
this._excludeChildControl(s);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g,h){var i;

switch(g){case c:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteForward,this);
this._addAt(i,2);
break;
case e:i=new qx.ui.form.HoverButton();
i.addListener(f,this._onExecuteBackward,this);
this._addAt(i,0);
break;
}return i||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,g);
}}});
})();
(function(){var i="Integer",h="hovered",g="__kr",f="hover-button",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__kr=new qx.event.AcceleratingTimer();
this.__kr.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:f},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__kr:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__kr.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__kr.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__kr.stop();
}}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){qx.ui.form.MenuButton.prototype.open.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var m=this.getMenu();
var menubar=this.getMenuBar();

if(m.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(m);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==m){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var w="visible",v="excluded",u="resize",t="qx.event.type.Data",s="both",r="qx.ui.menu.Menu",q="_applySpacing",p="showItem",o="Boolean",n="icon",d="label",m="qx.ui.core.Widget",h="_applyOverflowIndicator",c="_applyOverflowHandling",b="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",j="hideItem",a="toolbar",k="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__ox=[];
this.__oy=[];
},properties:{appearance:{refine:true,init:a},openMenu:{check:r,event:k,nullable:true},show:{init:s,check:[s,d,n],inheritable:true,event:b},spacing:{nullable:true,check:g,themeable:true,apply:q},overflowIndicator:{check:m,nullable:true,apply:h},overflowHandling:{init:false,check:o,apply:c}},events:{"hideItem":t,"showItem":t},members:{__ox:null,__oy:null,_computeSizeHint:function(){var z=qx.ui.core.Widget.prototype._computeSizeHint.call(this);

if(true&&this.getOverflowHandling()){var x=0;
var y=this.getOverflowIndicator();

if(y){x=y.getSizeHint().width+this.getSpacing();
}z.minWidth=x;
}return z;
},_onResize:function(e){this._recalculateOverflow(e.getData().width);
},_recalculateOverflow:function(A,B){if(!this.getOverflowHandling()){return;
}B=B||this.getSizeHint().width;
var C=this.getOverflowIndicator();
var I=0;

if(C){I=C.getSizeHint().width;
}
if(A==undefined&&this.getBounds()!=null){A=this.getBounds().width;
}if(A==undefined){return ;
}if(A<B){do{var J=this._getNextToHide();
if(!J){return;
}var L=J.getMarginLeft()+J.getMarginRight();
L=Math.max(L,this.getSpacing());
var G=J.getSizeHint().width+L;
this.__oA(J);
B-=G;
if(C&&C.getVisibility()!=w){C.setVisibility(w);
B+=I;
var E=C.getMarginLeft()+C.getMarginRight();
B+=Math.max(E,this.getSpacing());
}}while(B>A);
}else if(this.__ox.length>0){do{var M=this.__ox[0];
if(M){var L=M.getMarginLeft()+M.getMarginRight();
L=Math.max(L,this.getSpacing());
if(M.getDecoratorElement()==null){M.syncAppearance();
M.invalidateLayoutCache();
}var F=M.getSizeHint().width;
var K=false;
if(this.__ox.length==1&&I>0){var D=L-this.getSpacing();
var H=B-I+F+D;
K=A>H;
}if(A>B+F+L||K){this.__oz(M);
B+=F;
if(C&&this.__ox.length==0){C.setVisibility(v);
}}else{return;
}}}while(A>=B&&this.__ox.length>0);
}},__oz:function(N){N.setVisibility(w);
this.__ox.shift();
this.fireDataEvent(p,N);
},__oA:function(O){if(!O){return;
}this.__ox.unshift(O);
O.setVisibility(v);
this.fireDataEvent(j,O);
},_getNextToHide:function(){for(var i=this.__oy.length-1;i>=0;i--){var P=this.__oy[i];
if(P&&P.getVisibility&&P.getVisibility()==w){return P;
}}var Q=this._getChildren();

for(var i=Q.length-1;i>=0;i--){var R=Q[i];
if(R==this.getOverflowIndicator()){continue;
}if(R.getVisibility&&R.getVisibility()==w){return R;
}}},setRemovePriority:function(S,T,U){if(!U&&this.__oy[T]!=undefined){throw new Error("Priority already in use!");
}this.__oy[T]=S;
},_applyOverflowHandling:function(V,W){this.invalidateLayoutCache();
var parent=this.getLayoutParent();

if(parent){parent.invalidateLayoutCache();
}var Y=this.getBounds();

if(Y&&Y.width){this._recalculateOverflow(Y.width);
}if(V){this.addListener(u,this._onResize,this);
}else{this.removeListener(u,this._onResize,this);
var X=this.getOverflowIndicator();

if(X){X.setVisibility(v);
}for(var i=0;i<this.__ox.length;i++){this.__ox[i].setVisibility(w);
}this.__ox=[];
}},_applyOverflowIndicator:function(ba,bb){if(bb){this._remove(bb);
}
if(ba){if(this._indexOf(ba)==-1){throw new Error("Widget must be child of the toolbar.");
}ba.setVisibility(v);
}},__oB:false,_setAllowMenuOpenHover:function(bc){this.__oB=bc;
},_isAllowMenuOpenHover:function(){return this.__oB;
},_applySpacing:function(bd,be){var bf=this._getLayout();
bd==null?bf.resetSpacing():bf.setSpacing(bd);
},_add:function(bg,bh){qx.ui.core.Widget.prototype._add.call(this,bg,bh);
var bi=this.getSizeHint().width+bg.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bi);
},_addAt:function(bj,bk,bl){qx.ui.core.Widget.prototype._addAt.call(this,bj,bk,bl);
var bm=this.getSizeHint().width+bj.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bm);
},_addBefore:function(bn,bo,bp){qx.ui.core.Widget.prototype._addBefore.call(this,bn,bo,bp);
var bq=this.getSizeHint().width+bn.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bq);
},_addAfter:function(br,bs,bt){qx.ui.core.Widget.prototype._addAfter.call(this,br,bs,bt);
var bu=this.getSizeHint().width+br.getSizeHint().width+2*this.getSpacing();
this._recalculateOverflow(null,bu);
},_remove:function(bv){qx.ui.core.Widget.prototype._remove.call(this,bv);
var bw=this.getSizeHint().width-bv.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,bw);
},_removeAt:function(bx){var bz=this._getChildren()[bx];
qx.ui.core.Widget.prototype._removeAt.call(this,bx);
var by=this.getSizeHint().width-bz.getSizeHint().width-2*this.getSpacing();
this._recalculateOverflow(null,by);
},_removeAll:function(){qx.ui.core.Widget.prototype._removeAll.call(this);
this._recalculateOverflow(null,0);
},addSpacer:function(){var bA=new qx.ui.core.Spacer;
this._add(bA,{flex:1});
return bA;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var bC=this.getChildren();
var bB=[];
var bD;

for(var i=0,l=bC.length;i<l;i++){bD=bC[i];

if(bD instanceof qx.ui.menubar.Button){bB.push(bD);
}else if(bD instanceof qx.ui.toolbar.Part){bB.push.apply(bB,bD.getMenuButtons());
}}return bB;
}},destruct:function(){if(this.hasListener(u)){this.removeListener(u,this._onResize,this);
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
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var p="middle",o="left",n="right",m="container",k="handle",j="both",h="Integer",g="qx.ui.toolbar.Part",f="icon",e="label",b="syncAppearance",d="changeShow",c="_applySpacing",a="toolbar/part";
qx.Class.define(g,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(k);
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,e,f],inheritable:true,event:d},spacing:{nullable:true,check:h,themeable:true,apply:c}},members:{_createChildControlImpl:function(q,r){var s;

switch(q){case k:s=new qx.ui.basic.Image();
s.setAlignY(p);
this._add(s);
break;
case m:s=new qx.ui.toolbar.PartContainer();
s.addListener(b,this.__mH,this);
this._add(s);
break;
}return s||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(t,u){var v=this.getChildControl(m).getLayout();
t==null?v.resetSpacing():v.setSpacing(t);
},__mH:function(){var w=this.getChildrenContainer().getChildren();

for(var i=0;i<w.length;i++){if(i==0&&i!=w.length-1){w[i].addState(o);
w[i].removeState(n);
w[i].removeState(p);
}else if(i==w.length-1&&i!=0){w[i].addState(n);
w[i].removeState(o);
w[i].removeState(p);
}else if(i==0&&i==w.length-1){w[i].removeState(o);
w[i].removeState(p);
w[i].removeState(n);
}else{w[i].addState(p);
w[i].removeState(n);
w[i].removeState(o);
}}},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var y=this.getChildren();
var x=[];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z instanceof qx.ui.menubar.Button){x.push(z);
}}return x;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){qx.ui.menu.AbstractButton.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setIcon(d);
}
if(f!=null){this.setCommand(f);
}
if(g!=null){this.setMenu(g);
}},properties:{appearance:{refine:true,init:a}},members:{_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
if(this.getMenu()){return;
}}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var f="menu-button",e="table-column-reset-button",d="separator",c="user-button",b="qx.ui.table.columnmenu.Button",a="menu";
qx.Class.define(b,{extend:qx.ui.form.MenuButton,implement:qx.ui.table.IColumnMenuButton,construct:function(){qx.ui.form.MenuButton.call(this);
this.__mC=new qx.ui.core.Blocker(this);
},members:{__wX:null,__mC:null,factory:function(g,h){switch(g){case a:var j=new qx.ui.menu.Menu();
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
}},getBlocker:function(){return this.__mC;
},empty:function(){var n=this.getMenu();
var o=n.getChildren();

for(var i=0,l=o.length;i<l;i++){o[0].destroy();
}}},destruct:function(){this.__mC.dispose();
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var m="checked",l="menu-checkbox",k="Boolean",j="label",i="_applyValue",h="value",g="changeValue",f="toolTipText",d="enabled",c="qx.ui.menu.CheckBox",a="menu",b="execute";
qx.Class.define(c,{extend:qx.ui.menu.AbstractButton,implement:[qx.ui.form.IBooleanForm],construct:function(n,o){qx.ui.menu.AbstractButton.call(this);
if(n!=null){if(n.translate){this.setLabel(n.translate());
}else{this.setLabel(n);
}}
if(o!=null){this.setMenu(o);
}this.addListener(b,this._onExecute,this);
},properties:{appearance:{refine:true,init:l},value:{check:k,init:false,apply:i,event:g,nullable:true}},members:{_bindableProperties:[d,j,f,h,a],_applyValue:function(p,q){p?this.addState(m):this.removeState(m);
},_onExecute:function(e){this.toggleValue();
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}else{if(this.getContextMenu()){return;
}}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var b="qx.ui.table.IColumnMenuItem",a="qx.event.type.Data";
qx.Interface.define(b,{properties:{visible:{}},events:{changeVisible:a}});
})();
(function(){var f="changeVisible",d="qx.ui.table.columnmenu.MenuItem",c="_applyVisible",b="Boolean",a="changeValue";
qx.Class.define(d,{extend:qx.ui.menu.CheckBox,implement:qx.ui.table.IColumnMenuItem,properties:{visible:{check:b,init:true,apply:c,event:f}},construct:function(g){qx.ui.menu.CheckBox.call(this,g);
this.addListener(a,function(e){this.bInListener=true;
this.setVisible(e.getData());
this.bInListener=false;
});
},members:{__xe:false,_applyVisible:function(h,i){if(!this.bInListener){this.setValue(h);
}}}});
})();
(function(){var b="qx.ui.table.selection.Model",a="qx.ui.table.selection.Manager";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
},properties:{selectionModel:{check:b}},members:{__xf:null,handleMouseDown:function(c,d){if(d.isLeftPressed()){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){this._handleSelectEvent(c,d);
this.__xf=true;
}else{this.__xf=false;
}}else if(d.isRightPressed()&&d.getModifiers()==0){var e=this.getSelectionModel();

if(!e.isSelectedIndex(c)){e.setSelectionInterval(c,c);
}}},handleMouseUp:function(f,g){if(g.isLeftPressed()&&!this.__xf){this._handleSelectEvent(f,g);
}},handleClick:function(h,i){},handleSelectKeyDown:function(j,k){this._handleSelectEvent(j,k);
},handleMoveKeyDown:function(l,m){var o=this.getSelectionModel();

switch(m.getModifiers()){case 0:o.setSelectionInterval(l,l);
break;
case qx.event.type.Dom.SHIFT_MASK:var n=o.getAnchorSelectionIndex();

if(n==-1){o.setSelectionInterval(l,l);
}else{o.setSelectionInterval(n,l);
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
(function(){var n="]",m="..",l="changeSelection",k=" [",h='ie',g="browser.version",f="qx.event.type.Event",d="Ranges:",c="qx.ui.table.selection.Model",b="browser.name",a="_applySelectionMode";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__wM=[];
this.__wN=-1;
this.__wO=-1;
this.hasBatchModeRefCount=0;
this.__wP=false;
},events:{"changeSelection":f},statics:{NO_SELECTION:1,SINGLE_SELECTION:2,SINGLE_INTERVAL_SELECTION:3,MULTIPLE_INTERVAL_SELECTION:4,MULTIPLE_INTERVAL_SELECTION_TOGGLE:5},properties:{selectionMode:{init:2,check:[1,2,3,4,5],apply:a}},members:{__wP:null,__wN:null,__wO:null,__wM:null,_applySelectionMode:function(o){this.resetSelection();
},setBatchMode:function(p){if(p){this.hasBatchModeRefCount+=1;
}else{if(this.hasBatchModeRefCount==0){throw new Error("Try to turn off batch mode althoug it was not turned on.");
}this.hasBatchModeRefCount-=1;

if(this.__wP){this.__wP=false;
this._fireChangeSelection();
}}return this.hasBatchMode();
},hasBatchMode:function(){return this.hasBatchModeRefCount>0;
},getAnchorSelectionIndex:function(){return this.__wN;
},_setAnchorSelectionIndex:function(q){this.__wN=q;
},getLeadSelectionIndex:function(){return this.__wO;
},_setLeadSelectionIndex:function(r){this.__wO=r;
},_getSelectedRangeArr:function(){return this.__wM;
},resetSelection:function(){if(!this.isSelectionEmpty()){this._resetSelection();
this._fireChangeSelection();
}},isSelectionEmpty:function(){return this.__wM.length==0;
},getSelectedCount:function(){var t=0;

for(var i=0;i<this.__wM.length;i++){var s=this.__wM[i];
t+=s.maxIndex-s.minIndex+1;
}return t;
},isSelectedIndex:function(u){for(var i=0;i<this.__wM.length;i++){var v=this.__wM[i];

if(u>=v.minIndex&&u<=v.maxIndex){return true;
}}return false;
},getSelectedRanges:function(){var w=[];

for(var i=0;i<this.__wM.length;i++){w.push({minIndex:this.__wM[i].minIndex,maxIndex:this.__wM[i].maxIndex});
}return w;
},iterateSelection:function(x,y){for(var i=0;i<this.__wM.length;i++){for(var j=this.__wM[i].minIndex;j<=this.__wM[i].maxIndex;j++){x.call(y,j);
}}},setSelectionInterval:function(z,A){var B=this.self(arguments);

switch(this.getSelectionMode()){case B.NO_SELECTION:return;
case B.SINGLE_SELECTION:if(this.isSelectedIndex(A)){return;
}z=A;
break;
case B.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this.setBatchMode(true);

try{for(var i=z;i<=A;i++){if(!this.isSelectedIndex(i)){this._addSelectionInterval(i,i);
}else{this.removeSelectionInterval(i,i);
}}}catch(e){if(qx.core.Environment.get(b)==h&&qx.core.Environment.get(g)<=7){this.setBatchMode(false);
}throw e;
}finally{this.setBatchMode(false);
}this._fireChangeSelection();
return;
}this._resetSelection();
this._addSelectionInterval(z,A);
this._fireChangeSelection();
},addSelectionInterval:function(C,D){var E=qx.ui.table.selection.Model;

switch(this.getSelectionMode()){case E.NO_SELECTION:return;
case E.MULTIPLE_INTERVAL_SELECTION:case E.MULTIPLE_INTERVAL_SELECTION_TOGGLE:this._addSelectionInterval(C,D);
this._fireChangeSelection();
break;
default:this.setSelectionInterval(C,D);
break;
}},removeSelectionInterval:function(F,G){this.__wN=F;
this.__wO=G;
var H=Math.min(F,G);
var J=Math.max(F,G);
for(var i=0;i<this.__wM.length;i++){var L=this.__wM[i];

if(L.minIndex>J){break;
}else if(L.maxIndex>=H){var M=(L.minIndex>=H)&&(L.minIndex<=J);
var K=(L.maxIndex>=H)&&(L.maxIndex<=J);

if(M&&K){this.__wM.splice(i,1);
i--;
}else if(M){L.minIndex=J+1;
}else if(K){L.maxIndex=H-1;
}else{var I={minIndex:J+1,maxIndex:L.maxIndex};
this.__wM.splice(i+1,0,I);
L.maxIndex=H-1;
break;
}}}this._fireChangeSelection();
},_resetSelection:function(){this.__wM=[];
this.__wN=-1;
this.__wO=-1;
},_addSelectionInterval:function(N,O){this.__wN=N;
this.__wO=O;
var P=Math.min(N,O);
var R=Math.max(N,O);
var Q=0;

for(;Q<this.__wM.length;Q++){var S=this.__wM[Q];

if(S.minIndex>P){break;
}}this.__wM.splice(Q,0,{minIndex:P,maxIndex:R});
var T=this.__wM[0];

for(var i=1;i<this.__wM.length;i++){var S=this.__wM[i];

if(T.maxIndex+1>=S.minIndex){T.maxIndex=Math.max(T.maxIndex,S.maxIndex);
this.__wM.splice(i,1);
i--;
}else{T=S;
}}},_dumpRanges:function(){var U=d;

for(var i=0;i<this.__wM.length;i++){var V=this.__wM[i];
U+=k+V.minIndex+m+V.maxIndex+n;
}this.debug(U);
},_fireChangeSelection:function(){if(this.hasBatchMode()){this.__wP=true;
}else{this.fireEvent(l);
}}},destruct:function(){this.__wM=null;
}});
})();
(function(){var a="qx.ui.table.ICellRenderer";
qx.Interface.define(a,{members:{createDataCellHtml:function(b,c){return true;
}}});
})();
(function(){var j="",i="px;",h=".qooxdoo-table-cell {",g="qooxdoo-table-cell",f="content",e='</div>',d="nowrap",c="default",b="}",a="width:",J=".qooxdoo-table-cell-right { text-align:right } ",I="css.boxmodel",H="0px 6px",G='<div class="',F="0px",E="height:",D="1px solid ",C=".qooxdoo-table-cell-bold { font-weight:bold } ",B="String",A="} ",q='>',r="mshtml",o='" ',p="ellipsis",m="content-box",n='left:',k="qx.ui.table.cellrenderer.Abstract",l="engine.name",s='" style="',t="abstract",v="none",u="hidden",x="table-column-line",w='px;',z=".qooxdoo-table-cell-italic { font-style:italic} ",y="absolute";
qx.Class.define(k,{type:t,implement:qx.ui.table.ICellRenderer,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
var K=qx.ui.table.cellrenderer.Abstract;

if(!K.__xg){var M=qx.theme.manager.Color.getInstance();
K.__xg=this.self(arguments);
var L=h+qx.bom.element.Style.compile({position:y,top:F,overflow:u,whiteSpace:d,borderRight:D+M.resolve(x),padding:H,cursor:c,textOverflow:p,userSelect:v})+A+J+z+C;

if(!(qx.core.Environment.get(l)==r)){L+=h+qx.bom.element.BoxSizing.compile(m)+b;
}K.__xg.stylesheet=qx.bom.Stylesheet.createElement(L);
}},properties:{defaultCellStyle:{init:null,check:B,nullable:true}},members:{_insetX:6+6+1,_insetY:0,_getCellClass:function(N){return g;
},_getCellStyle:function(O){return O.style||j;
},_getCellAttributes:function(P){return j;
},_getContentHtml:function(Q){return Q.value||j;
},_getCellSizeStyle:function(R,S,T,U){var V=j;

if(qx.core.Environment.get(I)==f){R-=T;
S-=U;
}V+=a+Math.max(R,0)+i;
V+=E+Math.max(S,0)+i;
return V;
},createDataCellHtml:function(W,X){X.push(G,this._getCellClass(W),s,n,W.styleLeft,w,this._getCellSizeStyle(W.styleWidth,W.styleHeight,this._insetX,this._insetY),this._getCellStyle(W),o,this._getCellAttributes(W),q+this._getContentHtml(W),e);
}}});
})();
(function(){var h="",g="number",f="Boolean",e="qx.ui.table.cellrenderer.Default",d=" qooxdoo-table-cell-bold",c=" qooxdoo-table-cell-right",b=" qooxdoo-table-cell-italic",a="string";
qx.Class.define(e,{extend:qx.ui.table.cellrenderer.Abstract,statics:{STYLEFLAG_ALIGN_RIGHT:1,STYLEFLAG_BOLD:2,STYLEFLAG_ITALIC:4,_numberFormat:null},properties:{useAutoAlign:{check:f,init:true}},members:{_getStyleFlags:function(i){if(this.getUseAutoAlign()){if(typeof i.value==g){return qx.ui.table.cellrenderer.Default.STYLEFLAG_ALIGN_RIGHT;
}}return 0;
},_getCellClass:function(j){var k=qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this,j);

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
var o;

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
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__hI=u;
},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__hI:null,format:function(v){switch(v){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var z=(v<0);

if(z){v=-v;
}
if(this.getMaximumFractionDigits()!=null){var G=Math.pow(10,this.getMaximumFractionDigits());
v=Math.round(v*G)/G;
}var F=String(Math.floor(v)).length;
var w=t+v;
var C=w.substring(0,F);

while(C.length<this.getMinimumIntegerDigits()){C=q+C;
}
if(this.getMaximumIntegerDigits()!=null&&C.length>this.getMaximumIntegerDigits()){C=C.substring(C.length-this.getMaximumIntegerDigits());
}var B=w.substring(F+1);

while(B.length<this.getMinimumFractionDigits()){B+=q;
}
if(this.getMaximumFractionDigits()!=null&&B.length>this.getMaximumFractionDigits()){B=B.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var y=C;
C=t;
var E;

for(E=y.length;E>3;E-=3){C=t+qx.locale.Number.getGroupSeparator(this.__hI)+y.substring(E-3,E)+C;
}C=y.substring(0,E)+C;
}var A=this.getPrefix()?this.getPrefix():t;
var x=this.getPostfix()?this.getPostfix():t;
var D=A+(z?r:t)+C;

if(B.length>0){D+=t+qx.locale.Number.getDecimalSeparator(this.__hI)+B;
}D+=x;
return D;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__hI)+t);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__hI)+t);
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
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(f){return qx.locale.Manager.getInstance().localize(a,[],f);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var cF=")",cE="(",cD="|",cC="(\\d\\d?)",cB="format",cA="",cz="-",cy="abbreviated",cx="wide",cw="stand-alone",bG="narrow",bF="(\\d\\d*?)",bE="quarter",bD='A',bC="default",bB="0",bA="literal",bz="wildcard",by="'",bx="(\\d?)",cM="hour",cN='Anno Domini',cK="+",cL='Q',cI="ms",cJ="(\\d\\d?\\d?)",cG="dayOfYear",cH='AD',cO="Y+",cP=":",cf='y',ce="quoted_literal",ch="weekOfYear",cg='a',cj="day",ci="(-*",cl="locale",ck="GMT",cd="HH:mm:ss",cc='y+',n="HHmmss",o="long",p='Y',q='z',r='BC',s="d",t="D",u='B',v='',w='Before Christ',de='Z',dd=" ",dc="min",db="sec",di="\\d",dh="+?",dg="eeeee",df='W',dk="qqqq",dj="h",W="KK",X='L',U="Z",V="GGGGG",bb="LL",bc="EEEE",Y="^",ba='4th quarter',S="SSS",T="qqq",F="K",E='q',H='G',G="a",B='2nd quarter',A="dd",D="qx.util.format.DateFormat",C="eee",z="ee",y="q",bh="QQQQ",bi="ww",bj="H",bk='Y+',bd="(\\d\\d\\d?)",be="(GMT[\\+\\-]\\d\\d:\\d\\d)",bf="_applyLocale",bg="Q",bl="c",bm="weekOfMonth",P="ccc",O="EEEEE",N="EE",M="GGG",L='-',K="w",J="mm",I='h',R="S",Q='s',bn="QQQ",bo="G",bp="GG",bq="kk",br="ss",bs="([\\+\\-]\\d\\d\\d\\d)",bt='H',bu='S',bv='1st quarter',bw="MMMM",bK='c',bJ='Q1',bI='3rd quarter',bH="eeee",bO="QQ",bN="LLLLL",bM="HH",bL='k',bQ="m",bP="DDD",bX='D',bY="LLLL",bV='e',bW='K',bT="L",bU="hh",bR="cccc",bS="e",ca="W",cb="GGGG",cp='Q2',co="MM",cr="y+",cq="ccccc",ct="E",cs="yyyy-MM-dd HH:mm:ss",cv="short",cu='d',cn="unkown",cm="\\d?",cW="k",cX='m',cY="String",da='Q3',cS="DD",cT='M',cU='isoUtcDateTime',cV="SS",cQ="MMM",cR="s",m="M",l='w',h="EEE",g="$",f="?",e='Q4',d="MMMMM",c='E',b="z",a="LLL",x="qq";
qx.Class.define(D,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dl,dm){qx.core.Object.call(this);

if(!dm){this.__hI=qx.locale.Manager.getInstance().getLocale();
this.__xh=qx.locale.Manager.getInstance().bind(cl,this,cl);
}else{this.__hI=dm;
this.setLocale(dm);
}this.__xi=this.__hI;

if(dl!=null){this.__xj=dl.toString();

if(this.__xj in qx.util.format.DateFormat.ISO_MASKS){if(this.__xj===cU){this.__xk=true;
}this.__xj=qx.util.format.DateFormat.ISO_MASKS[this.__xj];
}}else{this.__xj=qx.locale.Date.getDateFormat(o,this.__hI)+dd+qx.locale.Date.getDateTimeFormat(n,cd,this.__hI);
}},properties:{locale:{apply:bf,nullable:true,check:cY}},statics:{getDateTimeInstance:function(){var dp=qx.util.format.DateFormat;
var dn=qx.locale.Date.getDateFormat(o)+dd+qx.locale.Date.getDateTimeFormat(n,cd);

if(dp._dateInstance==null||dp._dateInstance.__xj!=dn){dp._dateTimeInstance=new dp();
}return dp._dateTimeInstance;
},getDateInstance:function(){var dr=qx.util.format.DateFormat;
var dq=qx.locale.Date.getDateFormat(cv)+cA;

if(dr._dateInstance==null||dr._dateInstance.__xj!=dq){dr._dateInstance=new dr(dq);
}return dr._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:cs,ISO_MASKS:{isoDate:"yyyy-MM-dd",isoTime:"HH:mm:ss",isoDateTime:"yyyy-MM-dd'T'HH:mm:ss",isoUtcDateTime:"yyyy-MM-dd'T'HH:mm:ss'Z'"},AM_MARKER:"am",PM_MARKER:"pm"},members:{__xh:null,__hI:null,__xi:null,__xj:null,__xl:null,__xm:null,__xn:null,__xk:null,__xo:function(ds,dt){var du=cA+(ds<0?((-1)*ds):ds);

while(du.length<dt){du=bB+du;
}return ds<0?cz+du:du;
},__xp:function(dv){var dw=new Date(dv.getTime());
var dx=dw.getDate();

while(dw.getMonth()!=0){dw.setDate(-1);
dx+=dw.getDate()+1;
}return dx;
},__xq:function(dy){return new Date(dy.getTime()+(3-((dy.getDay()+6)%7))*86400000);
},__xr:function(dz){var dB=this.__xq(dz);
var dC=dB.getFullYear();
var dA=this.__xq(new Date(dC,0,4));
return Math.floor(1.5+(dB.getTime()-dA.getTime())/86400000/7);
},__xs:function(dD){var dF=this.__xq(dD);
var dE=this.__xq(new Date(dD.getFullYear(),dD.getMonth(),4));
return Math.floor(1.5+(dF.getTime()-dE.getTime())/86400000/7);
},__xt:function(dG){var dH=this.__xq(dG);
return dH.getFullYear();
},__xu:function(dI){var dJ=new Date(dI,2,1);
dJ.setDate(-1);
return dJ.getDate()+1===29;
},__xv:function(dK,dL){var dP=0;
var dQ=0;
if(!dL){dL=1971;
}var dM=0;

for(var i=1;i<=12;i++){var dO=new Date(dL,i,1);
dO.setDate(-1);
var dN=dO.getDate()+1;
dM+=dN;

if(dM<dK){dP++;
dQ+=dN;
}else{dQ=dK-(dM-dN);
break;
}}return {month:dP,day:dQ};
},__xw:function(dR,dS,dT){var dU;

switch(dS){case 11:dU=dR-1;

if(dR!=this.__xt(new Date(dU,dS,dT))){dU=dR;
}break;
case 0:dU=dR+1;

if(dR!=this.__xt(new Date(dU,dS,dT))){dU=dR;
}break;
default:dU=dR;
}return dU;
},_applyLocale:function(dV,dW){this.__hI=dV===null?this.setLocale(this.__xi):dV;
},format:function(dX){if(dX==null){return null;
}
if(this.__xk){dX=new Date(dX.getUTCFullYear(),dX.getUTCMonth(),dX.getUTCDate(),dX.getUTCHours(),dX.getUTCMinutes(),dX.getUTCSeconds(),dX.getUTCMilliseconds());
}var eb=this.__hI;
var eg=dX.getFullYear();
var ec=dX.getMonth();
var ef=dX.getDate();
var ej=dX.getDay();
var em=dX.getHours();
var es=dX.getMinutes();
var ek=dX.getSeconds();
var eq=dX.getMilliseconds();
var ei=dX.getTimezoneOffset();
var en=ei>0?1:-1;
var dY=Math.floor(Math.abs(ei)/60);
var ep=Math.abs(ei)%60;
this.__xx();
var er=cA;

for(var i=0;i<this.__xn.length;i++){var eh=this.__xn[i];

if(eh.type==bA){er+=eh.text;
}else{var ea=eh.character;
var el=eh.size;
var et=f;

switch(ea){case cf:if(el==2){et=this.__xo(eg%100,2);
}else{var ed=Math.abs(eg);
et=ed+cA;

if(el>et.length){for(var j=et.length;j<el;j++){et=bB+et;
}}
if(eg<0){et=cz+et;
}}break;
case p:et=this.__xt(dX)+cA;
var ed=et.replace(L,v);

if(el>et.length){for(var j=ed.length;j<el;j++){ed=bB+ed;
}}et=et.indexOf(cz)!=-1?cz+ed:ed;
break;
case H:if(el>=1&&el<=3){et=eg>0?cH:r;
}else if(el==4){et=eg>0?cN:w;
}else if(el==5){et=eg>0?bD:u;
}break;
case cL:if(el==1||el==2){et=this.__xo(parseInt(ec/4)+1,el);
}
if(el==3){et=cL+(parseInt(ec/4)+1);
}break;
case E:if(el==1||el==2){et=this.__xo(parseInt(ec/4)+1,el);
}
if(el==3){et=cL+(parseInt(ec/4)+1);
}break;
case bX:et=this.__xo(this.__xp(dX),el);
break;
case cu:et=this.__xo(ef,el);
break;
case l:et=this.__xo(this.__xr(dX),el);
break;
case df:et=this.__xs(dX);
break;
case c:if(el>=1&&el<=3){et=qx.locale.Date.getDayName(cy,ej,eb,cB);
}else if(el==4){et=qx.locale.Date.getDayName(cx,ej,eb,cB);
}else if(el==5){et=qx.locale.Date.getDayName(bG,ej,eb,cw);
}break;
case bV:var ee=qx.locale.Date.getWeekStart(eb);
var eo=1+((ej-ee>=0)?(ej-ee):7+(ej-ee));

if(el>=1&&el<=2){et=this.__xo(eo,el);
}else if(el==3){et=qx.locale.Date.getDayName(cy,ej,eb,cB);
}else if(el==4){et=qx.locale.Date.getDayName(cx,ej,eb,cB);
}else if(el==5){et=qx.locale.Date.getDayName(bG,ej,eb,cw);
}break;
case bK:var ee=qx.locale.Date.getWeekStart(eb);
var eo=1+((ej-ee>=0)?(ej-ee):7+(ej-ee));

if(el==1){et=v+eo;
}else if(el==3){et=qx.locale.Date.getDayName(cy,ej,eb,cB);
}else if(el==4){et=qx.locale.Date.getDayName(cx,ej,eb,cB);
}else if(el==5){et=qx.locale.Date.getDayName(bG,ej,eb,cw);
}break;
case cT:if(el==1||el==2){et=this.__xo(ec+1,el);
}else if(el==3){et=qx.locale.Date.getMonthName(cy,ec,eb,cB);
}else if(el==4){et=qx.locale.Date.getMonthName(cx,ec,eb,cB);
}else if(el==5){et=qx.locale.Date.getMonthName(bG,ec,eb,cw);
}break;
case X:if(el==1||el==2){et=this.__xo(ec+1,el);
}else if(el==3){et=qx.locale.Date.getMonthName(cy,ec,eb,cB);
}else if(el==4){et=qx.locale.Date.getMonthName(cx,ec,eb,cB);
}else if(el==5){et=qx.locale.Date.getMonthName(bG,ec,eb,cw);
}break;
case cg:et=(em<12)?qx.locale.Date.getAmMarker(eb):qx.locale.Date.getPmMarker(eb);
break;
case bt:et=this.__xo(em,el);
break;
case bL:et=this.__xo((em==0)?24:em,el);
break;
case bW:et=this.__xo(em%12,el);
break;
case I:et=this.__xo(((em%12)==0)?12:(em%12),el);
break;
case cX:et=this.__xo(es,el);
break;
case Q:et=this.__xo(ek,el);
break;
case bu:et=eq+cA;

if(el<=et.length){et=et.substr(0,el);
}else{for(var j=et.length;j<el;j++){et=et+bB;
}}break;
case q:if(el>=1&&el<=4){et=ck+((en>0)?cz:cK)+this.__xo(Math.abs(dY),2)+cP+this.__xo(ep,2);
}break;
case de:if(el>=1&&el<=3){et=((en>0)?cz:cK)+this.__xo(Math.abs(dY),2)+this.__xo(ep,2);
}else{et=ck+((en>0)?cz:cK)+this.__xo(Math.abs(dY),2)+cP+this.__xo(ep,2);
}break;
}er+=et;
}}return er;
},parse:function(eu){this.__xy();
var eD=this.__xl.regex.exec(eu);

if(eD==null){throw new Error("Date string '"+eu+"' does not match the date format: "+this.__xj);
}var ev={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};
var ex=1;
var ew=false;
var ey=false;

for(var i=0;i<this.__xl.usedRules.length;i++){var ez=this.__xl.usedRules[i];
var eA=eD[ex];

if(ez.field!=null){ev[ez.field]=parseInt(eA,10);
}else{ez.manipulator(ev,eA);
}
if(ez.pattern==cO){var eB=false;

for(var k=0;k<this.__xl.usedRules.length;k++){if(this.__xl.usedRules[k].pattern==cc){eB=true;
break;
}}
if(!eB){ew=true;
}}
if(ez.pattern.indexOf(t)!=-1){var eF=false;

for(var k=0;k<this.__xl.usedRules.length;k++){if(this.__xl.usedRules[k].pattern.indexOf(s)!=-1){eF=true;
break;
}}
if(!eF){ey=true;
}}ex+=(ez.groups==null)?1:ez.groups;
}
if(ew){ev.year=this.__xw(ev.weekYear,ev.month,ev.day);
}
if(ey){var eE=this.__xv(ev.dayOfYear,ev.year);
ev.month=eE.month;
ev.day=eE.day;
}
if(ev.era<0&&(ev.year*ev.era<0)){ev.year=ev.year*ev.era;
}var eC=new Date(ev.year,ev.month,ev.day,(ev.ispm)?(ev.hour+12):ev.hour,ev.min,ev.sec,ev.ms);

if(this.__xk){eC=new Date(eC.getUTCFullYear(),eC.getUTCMonth(),eC.getUTCDate(),eC.getUTCHours(),eC.getUTCMinutes(),eC.getUTCSeconds(),eC.getUTCMilliseconds());
}
if(ev.month!=eC.getMonth()||ev.year!=eC.getFullYear()){throw new Error("Error parsing date '"+eu+"': the value for day or month is too large");
}return eC;
},__xx:function(){if(this.__xn!=null){return;
}this.__xn=[];
var eK;
var eI=0;
var eM=cA;
var eG=this.__xj;
var eJ=bC;
var i=0;

while(i<eG.length){var eL=eG.charAt(i);

switch(eJ){case ce:if(eL==by){if(i+1>=eG.length){i++;
break;
}var eH=eG.charAt(i+1);

if(eH==by){eM+=eL;
i++;
}else{i++;
eJ=cn;
}}else{eM+=eL;
i++;
}break;
case bz:if(eL==eK){eI++;
i++;
}else{this.__xn.push({type:bz,character:eK,size:eI});
eK=null;
eI=0;
eJ=bC;
}break;
default:if((eL>=cg&&eL<=q)||(eL>=bD&&eL<=de)){eK=eL;
eJ=bz;
}else if(eL==by){if(i+1>=eG.length){eM+=eL;
i++;
break;
}var eH=eG.charAt(i+1);

if(eH==by){eM+=eL;
i++;
}i++;
eJ=ce;
}else{eJ=bC;
}
if(eJ!=bC){if(eM.length>0){this.__xn.push({type:bA,text:eM});
eM=cA;
}}else{eM+=eL;
i++;
}break;
}}if(eK!=null){this.__xn.push({type:bz,character:eK,size:eI});
}else if(eM.length>0){this.__xn.push({type:bA,text:eM});
}},__xy:function(){if(this.__xl!=null){return ;
}var eQ=this.__xj;
this.__xA();
this.__xx();
var eW=[];
var eS=Y;

for(var eO=0;eO<this.__xn.length;eO++){var eX=this.__xn[eO];

if(eX.type==bA){eS+=qx.lang.String.escapeRegexpChars(eX.text);
}else{var eP=eX.character;
var eT=eX.size;
var eR;

for(var eY=0;eY<this.__xm.length;eY++){var eU=this.__xm[eY];

if(this.__xz(eU,eP,eT)){eR=eU;
break;
}}if(eR==null){var eV=cA;

for(var i=0;i<eT;i++){eV+=eP;
}throw new Error("Malformed date format: "+eQ+". Wildcard "+eV+" is not supported");
}else{eW.push(eR);
eS+=eR.regex;
}}}eS+=g;
var eN;

try{eN=new RegExp(eS);
}catch(fa){throw new Error("Malformed date format: "+eQ);
}this.__xl={regex:eN,"usedRules":eW,pattern:eS};
},__xz:function(fb,fc,fd){if(fc===cf&&fb.pattern===cc){fb.regex=fb.regexFunc(fd);
return true;
}else if(fc===p&&fb.pattern===bk){fb.regex=fb.regexFunc(fd);
return true;
}else{return fc==fb.pattern.charAt(0)&&fd==fb.pattern.length;
}},__xA:function(){var fu=qx.util.format.DateFormat;
var fx=qx.lang.String;

if(this.__xm!=null){return ;
}var fv=this.__xm=[];
var fp=qx.locale.Date.getAmMarker(this.__hI).toString()||fu.AM_MARKER;
var fH=qx.locale.Date.getPmMarker(this.__hI).toString()||fu.PM_MARKER;
var fg=this.__hI;
var fm=function(fO,fP){fP=parseInt(fP,10);

if(fP>0){if(fP<fu.ASSUME_YEAR_2000_THRESHOLD){fP+=2000;
}else if(fP<100){fP+=1900;
}}fO.year=fP;
};
var fL=function(fQ,fR){fR=parseInt(fR,10);

if(fR>0){if(fR<fu.ASSUME_YEAR_2000_THRESHOLD){fR+=2000;
}else if(fR<100){fR+=1900;
}}fQ.weekYear=fR;
};
var fN=function(fS,fT){fS.month=parseInt(fT,10)-1;
};
var fk=function(fU,fV){var fX=qx.locale.Date.getWeekStart(fg);
var fW=(parseInt(fV,10)-1+fX)<=6?parseInt(fV,10)-1+fX:(parseInt(fV,10)-1+fX)-7;
fU.weekDay=fW;
};
var fi=function(fY,ga){var gb=qx.locale.Date.getPmMarker(fg).toString()||fu.PM_MARKER;
fY.ispm=(ga==gb);
};
var fo=function(gc,gd){gc.hour=parseInt(gd,10)%24;
};
var fh=function(ge,gf){ge.hour=parseInt(gf,10)%12;
};
var fA=function(gg,gh){return;
};
var fB=[bD,u];
var fE=function(gi,gj){gi.era=gj==bD?1:-1;
};
var fs=[cH,r];
var fr=function(gk,gl){gk.era=gl==cH?1:-1;
};
var fG=[cN,w];
var fq=function(gm,gn){gm.era=gn==cN?1:-1;
};
var fJ=[bJ,cp,da,e];
var fe=function(go,gp){go.quarter=fJ.indexOf(gp);
};
var fF=[bv,B,bI,ba];
var fz=function(gq,gr){gq.quarter=fF.indexOf(gr);
};
var fK=qx.locale.Date.getMonthNames(cy,fg,cB);

for(var i=0;i<fK.length;i++){fK[i]=fx.escapeRegexpChars(fK[i].toString());
}var fl=function(gs,gt){gt=fx.escapeRegexpChars(gt);
gs.month=fK.indexOf(gt);
};
var fw=qx.locale.Date.getMonthNames(cx,fg,cB);

for(var i=0;i<fw.length;i++){fw[i]=fx.escapeRegexpChars(fw[i].toString());
}var fC=function(gu,gv){gv=fx.escapeRegexpChars(gv);
gu.month=fw.indexOf(gv);
};
var fM=qx.locale.Date.getMonthNames(bG,fg,cw);

for(var i=0;i<fM.length;i++){fM[i]=fx.escapeRegexpChars(fM[i].toString());
}var fj=function(gw,gx){gx=fx.escapeRegexpChars(gx);
gw.month=fM.indexOf(gx);
};
var ff=qx.locale.Date.getDayNames(bG,fg,cw);

for(var i=0;i<ff.length;i++){ff[i]=fx.escapeRegexpChars(ff[i].toString());
}var fI=function(gy,gz){gz=fx.escapeRegexpChars(gz);
gy.weekDay=ff.indexOf(gz);
};
var fD=qx.locale.Date.getDayNames(cy,fg,cB);

for(var i=0;i<fD.length;i++){fD[i]=fx.escapeRegexpChars(fD[i].toString());
}var fn=function(gA,gB){gB=fx.escapeRegexpChars(gB);
gA.weekDay=fD.indexOf(gB);
};
var fy=qx.locale.Date.getDayNames(cx,fg,cB);

for(var i=0;i<fy.length;i++){fy[i]=fx.escapeRegexpChars(fy[i].toString());
}var ft=function(gC,gD){gD=fx.escapeRegexpChars(gD);
gC.weekDay=fy.indexOf(gD);
};
fv.push({pattern:cr,regexFunc:function(gE){var gF=ci;

for(var i=0;i<gE;i++){gF+=di;

if(i===gE-1&&i!==1){gF+=dh;
}}gF+=cF;
return gF;
},manipulator:fm});
fv.push({pattern:cO,regexFunc:function(gG){var gH=ci;

for(var i=0;i<gG;i++){gH+=di;

if(i===gG-1){gH+=dh;
}}gH+=cF;
return gH;
},manipulator:fL});
fv.push({pattern:bo,regex:cE+fs.join(cD)+cF,manipulator:fr});
fv.push({pattern:bp,regex:cE+fs.join(cD)+cF,manipulator:fr});
fv.push({pattern:M,regex:cE+fs.join(cD)+cF,manipulator:fr});
fv.push({pattern:cb,regex:cE+fG.join(cD)+cF,manipulator:fq});
fv.push({pattern:V,regex:cE+fB.join(cD)+cF,manipulator:fE});
fv.push({pattern:bg,regex:bF,field:bE});
fv.push({pattern:bO,regex:cC,field:bE});
fv.push({pattern:bn,regex:cE+fJ.join(cD)+cF,manipulator:fe});
fv.push({pattern:bh,regex:cE+fF.join(cD)+cF,manipulator:fz});
fv.push({pattern:y,regex:bF,field:bE});
fv.push({pattern:x,regex:cC,field:bE});
fv.push({pattern:T,regex:cE+fJ.join(cD)+cF,manipulator:fe});
fv.push({pattern:dk,regex:cE+fF.join(cD)+cF,manipulator:fz});
fv.push({pattern:m,regex:bF,manipulator:fN});
fv.push({pattern:co,regex:cC,manipulator:fN});
fv.push({pattern:cQ,regex:cE+fK.join(cD)+cF,manipulator:fl});
fv.push({pattern:bw,regex:cE+fw.join(cD)+cF,manipulator:fC});
fv.push({pattern:d,regex:cE+fM.join(cD)+cF,manipulator:fj});
fv.push({pattern:bT,regex:bF,manipulator:fN});
fv.push({pattern:bb,regex:cC,manipulator:fN});
fv.push({pattern:a,regex:cE+fK.join(cD)+cF,manipulator:fl});
fv.push({pattern:bY,regex:cE+fw.join(cD)+cF,manipulator:fC});
fv.push({pattern:bN,regex:cE+fM.join(cD)+cF,manipulator:fj});
fv.push({pattern:A,regex:cC,field:cj});
fv.push({pattern:s,regex:bF,field:cj});
fv.push({pattern:t,regex:bx,field:cG});
fv.push({pattern:cS,regex:cC,field:cG});
fv.push({pattern:bP,regex:bd,field:cG});
fv.push({pattern:ct,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:N,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:h,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:bc,regex:cE+fy.join(cD)+cF,manipulator:ft});
fv.push({pattern:O,regex:cE+ff.join(cD)+cF,manipulator:fI});
fv.push({pattern:bS,regex:bx,manipulator:fk});
fv.push({pattern:z,regex:cC,manipulator:fk});
fv.push({pattern:C,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:bH,regex:cE+fy.join(cD)+cF,manipulator:ft});
fv.push({pattern:dg,regex:cE+ff.join(cD)+cF,manipulator:fI});
fv.push({pattern:bl,regex:cm,manipulator:fk});
fv.push({pattern:P,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:bR,regex:cE+fy.join(cD)+cF,manipulator:ft});
fv.push({pattern:cq,regex:cE+ff.join(cD)+cF,manipulator:fI});
fv.push({pattern:G,regex:cE+fp+cD+fH+cF,manipulator:fi});
fv.push({pattern:ca,regex:bx,field:bm});
fv.push({pattern:K,regex:bx,field:ch});
fv.push({pattern:bi,regex:cC,field:ch});
fv.push({pattern:bM,regex:cC,field:cM});
fv.push({pattern:bj,regex:cC,field:cM});
fv.push({pattern:bq,regex:cC,manipulator:fo});
fv.push({pattern:cW,regex:cC,manipulator:fo});
fv.push({pattern:W,regex:cC,field:cM});
fv.push({pattern:F,regex:cC,field:cM});
fv.push({pattern:bU,regex:cC,manipulator:fh});
fv.push({pattern:dj,regex:cC,manipulator:fh});
fv.push({pattern:J,regex:cC,field:dc});
fv.push({pattern:bQ,regex:cC,field:dc});
fv.push({pattern:br,regex:cC,field:db});
fv.push({pattern:cR,regex:cC,field:db});
fv.push({pattern:S,regex:cJ,field:cI});
fv.push({pattern:cV,regex:cJ,field:cI});
fv.push({pattern:R,regex:cJ,field:cI});
fv.push({pattern:U,regex:bs,manipulator:fA});
fv.push({pattern:b,regex:be,manipulator:fA});
}},destruct:function(){if(this.__xh!=null){qx.locale.Manager.getInstance().removeBinding(this.__xh);
}this.__xn=this.__xl=this.__xm=null;
}});
})();
(function(){var k="_",j="format",h="thu",g="sat",f="cldr_day_",e="cldr_month_",d="wed",c="fri",b="tue",a="mon",B="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",q="long",r="medium",o="cldr_am",p="qx.locale.Date",m="cldr_date_time_format_",n="cldr_time_format_",l="HH:mm:ss";
qx.Class.define(p,{statics:{__xB:qx.locale.Manager.getInstance(),getAmMarker:function(C){return this.__xB.localize(o,[],C);
},getPmMarker:function(D){return this.__xB.localize(s,[],D);
},getDayNames:function(length,E,F){var F=F?F:j;
var H=[B,a,b,d,h,c,g];
var I=[];

for(var i=0;i<H.length;i++){var G=f+F+k+length+k+H[i];
I.push(this.__xB.localize(G,[],E));
}return I;
},getDayName:function(length,J,K,L){var L=L?L:j;
var N=[B,a,b,d,h,c,g];
var M=f+L+k+length+k+N[J];
return this.__xB.localize(M,[],K);
},getMonthNames:function(length,O,P){var P=P?P:j;
var R=[];

for(var i=0;i<12;i++){var Q=e+P+k+length+k+(i+1);
R.push(this.__xB.localize(Q,[],O));
}return R;
},getMonthName:function(length,S,T,U){var U=U?U:j;
var V=e+U+k+length+k+(S+1);
return this.__xB.localize(V,[],T);
},getDateFormat:function(W,X){var Y=v+W;
return this.__xB.localize(Y,[],X);
},getDateTimeFormat:function(ba,bb,bc){var be=m+ba;
var bd=this.__xB.localize(be,[],bc);

if(bd==be){bd=bb;
}return bd;
},getTimeFormat:function(bf,bg){var bi=n+bf;
var bh=this.__xB.localize(bi,[],bg);

if(bh!=bi){return bh;
}
switch(bf){case A:case r:return qx.locale.Date.getDateTimeFormat(x,z);
case q:return qx.locale.Date.getDateTimeFormat(w,l);
case t:return qx.locale.Date.getDateTimeFormat(y,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bj){var bk={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bl=qx.locale.Date._getTerritory(bj);
return bk[bl]!=null?bk[bl]:1;
},getWeekendStart:function(bm){var bo={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bn=qx.locale.Date._getTerritory(bm);
return bo[bn]!=null?bo[bn]:6;
},getWeekendEnd:function(bp){var bq={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var br=qx.locale.Date._getTerritory(bp);
return bq[br]!=null?bq[br]:0;
},isWeekend:function(bs,bt){var bv=qx.locale.Date.getWeekendStart(bt);
var bu=qx.locale.Date.getWeekendEnd(bt);

if(bu>bv){return ((bs>=bv)&&(bs<=bu));
}else{return ((bs>=bv)||(bs<=bu));
}},_getTerritory:function(bw){if(bw){var bx=bw.split(k)[1]||bw;
}else{bx=this.__xB.getTerritory()||this.__xB.getLanguage();
}return bx.toUpperCase();
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
(function(){var k="showingPlaceholder",j="",i="none",h="qx.dynlocale",g="engine.name",f="Boolean",d="color",c="qx.event.type.Data",b="readonly",a="placeholder",Y="input",X="focusin",W="visibility",V="focusout",U="changeLocale",T="readOnly",S="text",R="_applyTextAlign",Q="px",P="RegExp",r=")",s="syncAppearance",p="gecko",q="change",n="textAlign",o="focused",l="center",m="visible",v="disabled",w="url(",D="String",B="resize",H="qx.ui.form.AbstractField",F="transparent",L="spellcheck",J="false",y="right",O="PositiveInteger",N="mshtml",M="abstract",x="block",z="webkit",A="_applyReadOnly",C="_applyPlaceholder",E="hidden",G="left",I="off",K="qx/static/blank.gif",t="changeReadOnly",u="absolute";
qx.Class.define(H,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:M,construct:function(ba){qx.ui.core.Widget.call(this);
this.__D=!qx.core.Environment.get("css.placeholder")||(qx.core.Environment.get("engine.name")=="gecko"&&parseFloat(qx.core.Environment.get("engine.version"))>=2);

if(ba!=null){this.setValue(ba);
}this.getContentElement().addListener(q,this._onChangeContent,this);
if(this.__D){this.addListener(s,this._syncPlaceholder,this);
}if(qx.core.Environment.get(h)){qx.locale.Manager.getInstance().addListener(U,this._onChangeLocale,this);
}},events:{"input":c,"changeValue":c},properties:{textAlign:{check:[G,l,y],nullable:true,themeable:true,apply:R},readOnly:{check:f,apply:A,event:t,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:O,init:Infinity},liveUpdate:{check:f,init:false},placeholder:{check:D,nullable:true,apply:C},filter:{check:P,nullable:true,init:null}},members:{__E:true,__F:null,__e:null,__f:null,__D:true,__G:null,__H:null,getFocusElement:function(){var bb=this.getContentElement();

if(bb){return bb;
}},_createInputElement:function(){return new qx.html.Input(S);
},renderLayout:function(bc,top,bd,be){var bf=this._updateInsets;
var bj=qx.ui.core.Widget.prototype.renderLayout.call(this,bc,top,bd,be);
if(!bj){return;
}var bh=bj.size||bf;
var bk=Q;

if(bh||bj.local||bj.margin){var bg=this.getInsets();
var innerWidth=bd-bg.left-bg.right;
var innerHeight=be-bg.top-bg.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bi=this.getContentElement();
if(bf&&this.__D){this.__K().setStyles({"left":bg.left+bk,"top":bg.top+bk});
}
if(bh){if(this.__D){this.__K().setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
}bi.setStyles({"width":innerWidth+bk,"height":innerHeight+bk});
this._renderContentElement(innerHeight,bi);
}},_renderContentElement:function(innerHeight,bl){},_createContentElement:function(){var bm=this._createInputElement();
bm.setStyles({"border":i,"padding":0,"margin":0,"display":x,"background":F,"outline":i,"appearance":i,"position":u,"autoComplete":I});
bm.setSelectable(this.getSelectable());
bm.setEnabled(this.getEnabled());
bm.addListener(Y,this._onHtmlInput,this);
bm.setAttribute(L,J);
if(qx.core.Environment.get(g)==z||qx.core.Environment.get(g)==p){bm.setStyle(B,i);
}if((qx.core.Environment.get(g)==N)){bm.setStyles({backgroundImage:w+qx.util.ResourceManager.getInstance().toUri(K)+r});
}return bm;
},_applyEnabled:function(bn,bo){qx.ui.core.Widget.prototype._applyEnabled.call(this,bn,bo);
this.getContentElement().setEnabled(bn);

if(this.__D){if(bn){this._showPlaceholder();
}else{this._removePlaceholder();
}}else{var bp=this.getContentElement();
bp.setAttribute(a,bn?this.getPlaceholder():j);
}},__I:{width:16,height:16},_getContentHint:function(){return {width:this.__I.width*10,height:this.__I.height||16};
},_applyFont:function(bq,br){if(br&&this.__G&&this.__H){this.__G.removeListenerById(this.__H);
this.__H=null;
}var bs;

if(bq){this.__G=qx.theme.manager.Font.getInstance().resolve(bq);

if(this.__G instanceof qx.bom.webfonts.WebFont){this.__H=this.__G.addListener("changeStatus",this._onWebFontStatusChange,this);
}bs=this.__G.getStyles();
}else{bs=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bs);
if(this.__D){this.__K().setStyles(bs);
}if(bq){this.__I=qx.bom.Label.getTextSize("A",bs);
}else{delete this.__I;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bt,bu){if(bt){this.getContentElement().setStyle(d,qx.theme.manager.Color.getInstance().resolve(bt));
}else{this.getContentElement().removeStyle(d);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__I;
},_onHtmlInput:function(e){var by=e.getData();
var bx=true;
this.__E=false;
if(this.getFilter()!=null){var bz=j;
var bv=by.search(this.getFilter());
var bw=by;

while(bv>=0){bz=bz+(bw.charAt(bv));
bw=bw.substring(bv+1,bw.length);
bv=bw.search(this.getFilter());
}
if(bz!=by){bx=false;
by=bz;
this.getContentElement().setValue(by);
}}if(by.length>this.getMaxLength()){bx=false;
this.getContentElement().setValue(by.substr(0,this.getMaxLength()));
}if(bx){this.fireDataEvent(Y,by,this.__f);
this.__f=by;
if(this.getLiveUpdate()){this.__J(by);
}}},_onWebFontStatusChange:function(bA){if(bA.getData().valid===true){var bB=this.__G.getStyles();
this.__I=qx.bom.Label.getTextSize("A",bB);
qx.ui.core.queue.Layout.add(this);
}},__J:function(bC){var bD=this.__e;
this.__e=bC;

if(bD!=bC){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[bC,bD]);
}},setValue:function(bE){if(bE===null){if(this.__E){return bE;
}bE=j;
this.__E=true;
}else{this.__E=false;
if(this.__D){this._removePlaceholder();
}}
if(qx.lang.Type.isString(bE)){var bG=this.getContentElement();

if(bE.length>this.getMaxLength()){bE=bE.substr(0,this.getMaxLength());
}
if(bG.getValue()!=bE){var bH=bG.getValue();
bG.setValue(bE);
var bF=this.__E?null:bE;
this.__e=bH;
this.__J(bF);
}if(this.__D){this._showPlaceholder();
}return bE;
}throw new Error("Invalid value type: "+bE);
},getValue:function(){var bI=this.getContentElement().getValue();
return this.__E?null:bI;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__E=e.getData()===null;
this.__J(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bJ,bK){this.getContentElement().setTextSelection(bJ,bK);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bM=this.getValue()||j;
var bL=this.getPlaceholder();

if(bL!=null&&bM==j&&!this.hasState(o)&&!this.hasState(v)){if(this.hasState(k)){this._syncPlaceholder();
}else{this.addState(k);
}}},_removePlaceholder:function(){if(this.hasState(k)){this.__K().setStyle(W,E);
this.removeState(k);
}},_syncPlaceholder:function(){if(this.hasState(k)){this.__K().setStyle(W,m);
}},__K:function(){if(this.__F==null){this.__F=new qx.html.Label();
var bN=qx.theme.manager.Color.getInstance();
this.__F.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute","color":bN.resolve("text-placeholder")});
this.getContainerElement().add(this.__F);
}return this.__F;
},_onChangeLocale:qx.core.Environment.select(h,{"true":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"false":null}),_applyPlaceholder:function(bO,bP){if(this.__D){this.__K().setValue(bO);

if(bO!=null){this.addListener(X,this._removePlaceholder,this);
this.addListener(V,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(X,this._removePlaceholder,this);
this.removeListener(V,this._showPlaceholder,this);
this._removePlaceholder();
}}else{if(this.getEnabled()){this.getContentElement().setAttribute(a,bO);
}}},_applyTextAlign:function(bQ,bR){this.getContentElement().setStyle(n,bQ);
},_applyReadOnly:function(bS,bT){var bU=this.getContentElement();
bU.setAttribute(T,bS);

if(bS){this.addState(b);
this.setFocusable(false);
}else{this.removeState(b);
this.setFocusable(true);
}}},destruct:function(){this.__F=this.__G=null;

if(qx.core.Environment.get(h)){qx.locale.Manager.getInstance().removeListener(U,this._onChangeLocale,this);
}
if(this.__G&&this.__H){this.__G.removeListenerById(this.__H);
}}});
})();
(function(){var n="wrap",m="value",l="textarea",k="engine.name",j="none",i="",h="overflow",g="input",f="qx.html.Input",e="select",b="disabled",d="read-only",c="overflowX",a="overflowY";
qx.Class.define(f,{extend:qx.html.Element,construct:function(o,p,q){if(o===e||o===l){var r=o;
}else{r=g;
}qx.html.Element.call(this,r,p,q);
this.__z=o;
},members:{__z:null,__A:null,__B:null,_createDomElement:function(){return qx.bom.Input.create(this.__z);
},_applyProperty:function(name,s){qx.html.Element.prototype._applyProperty.call(this,name,s);
var t=this.getDomElement();

if(name===m){qx.bom.Input.setValue(t,s);
}else if(name===n){qx.bom.Input.setWrap(t,s);
this.setStyle(h,t.style.overflow,true);
this.setStyle(c,t.style.overflowX,true);
this.setStyle(a,t.style.overflowY,true);
}},setEnabled:qx.core.Environment.select(k,{"webkit":function(u){this.__B=u;

if(!u){this.setStyles({"userModify":d,"userSelect":j});
}else{this.setStyles({"userModify":null,"userSelect":this.__A?null:j});
}},"default":function(v){this.setAttribute(b,v===false);
}}),setSelectable:qx.core.Environment.select(k,{"webkit":function(w){this.__A=w;
qx.html.Element.prototype.setSelectable.call(this,this.__B&&w);
},"default":function(x){qx.html.Element.prototype.setSelectable.call(this,x);
}}),setValue:function(y){var z=this.getDomElement();

if(z){if(z.value!=y){qx.bom.Input.setValue(z,y);
}}else{this._setProperty(m,y);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(m)||i;
},setWrap:function(B,C){if(this.__z===l){this._setProperty(n,B,C);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__z===l){return this._getProperty(n);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var m="input",k="engine.name",j="change",h="text",g="password",f="engine.version",d="radio",c="textarea",b="checkbox",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__c:false,__d:null,__e:null,__f:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===c)){return true;
}
if(C===j&&(D===m||D===c||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(f)<9||(qx.core.Environment.get(f)>=9&&qx.core.Environment.get(A)<9))){if(!E.__g){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===g||H===c||I===b||I===d){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==d){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__g=true;
}}else{if(F===m){this.__h(E);
}else if(F===j){if(E.type===d||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===g){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__h:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(f)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(f))<532&&L==c){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(f)<9&&qx.core.Environment.get(A)<9){if(O.__g){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===g||Q===c||R===b||R===d){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==d){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__g;
}catch(S){O.__g=null;
}}}else{if(P===m){this.__i(O);
}else if(P===j){if(O.type===d||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===g){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__i:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(f)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(f))<532&&V==c){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__e){this.__e=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__f){this.__f=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__c=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__c=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__d&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__d);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__c||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__d=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===d){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===g||bg.tagName.toLowerCase()===c)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===b){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var v="",u="select",t="engine.name",s="soft",r="off",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__C:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){var x=x?qx.lang.Object.clone(x):{};
var z;

if(w===q||w===u){z=w;
}else{z=c;
x.type=w;
}return qx.bom.Element.create(z,x,y);
},setValue:function(A,B){var G=A.nodeName.toLowerCase();
var D=A.type;
var Array=qx.lang.Array;
var H=qx.lang.Type;

if(typeof B===d){B+=v;
}
if((D===k||D===e)){if(H.isArray(B)){A.checked=Array.contains(B,A.value);
}else{A.checked=A.value==B;
}}else if(G===u){var C=H.isArray(B);
var I=A.options;
var E,F;

for(var i=0,l=I.length;i<l;i++){E=I[i];
F=E.getAttribute(f);

if(F==null){F=E.text;
}E.selected=C?Array.contains(B,F):B==F;
}
if(C&&B.length==0){A.selectedIndex=-1;
}}else if((D===n||D===q)&&(qx.core.Environment.get(t)==m)){A.$$inValueSet=true;
A.value=B;
A.$$inValueSet=null;
}else{A.value=B;
}},getValue:function(J){var P=J.nodeName.toLowerCase();

if(P===b){return (J.attributes.value||{}).specified?J.value:J.text;
}
if(P===u){var K=J.selectedIndex;
if(K<0){return null;
}var Q=[];
var S=J.options;
var R=J.type==g;
var O=qx.bom.Input;
var N;
for(var i=R?K:0,M=R?K+1:S.length;i<M;i++){var L=S[i];

if(L.selected){N=O.getValue(L);
if(R){return N;
}Q.push(N);
}}return Q;
}else{return (J.value||v).replace(/\r/g,v);
}},setWrap:qx.core.Environment.select(t,{"mshtml":function(T,U){var W=U?s:r;
var V=U?p:v;
T.wrap=W;
T.style.overflowY=V;
},"gecko|webkit":function(X,Y){var bb=Y?s:r;
var ba=Y?v:p;
X.setAttribute(o,bb);
X.style.overflow=ba;
},"default":function(bc,bd){bc.style.whiteSpace=bd?j:a;
}})}});
})();
(function(){var f="mshtml",e="engine.name",d="qx.ui.form.TextField",c='px',b="textfield",a="engine.version";
qx.Class.define(d,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:b},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,g){if((qx.core.Environment.get(e)==f)&&qx.core.Environment.get(a)<9){g.setStyles({"line-height":innerHeight+c});
}}}});
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
(function(){var i="icon",h="label",g="String",f="sort-icon",e="_applySortIcon",d="_applyIcon",c="table-header-cell",b="qx.ui.table.headerrenderer.HeaderCell",a="_applyLabel";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var j=new qx.ui.layout.Grid();
j.setRowFlex(0,1);
j.setColumnFlex(1,1);
j.setColumnFlex(2,1);
this.setLayout(j);
},properties:{appearance:{refine:true,init:c},label:{check:g,init:null,nullable:true,apply:a},sortIcon:{check:g,init:null,nullable:true,apply:e,themeable:true},icon:{check:g,init:null,nullable:true,apply:d}},members:{_applyLabel:function(k,l){if(k){this._showChildControl(h).setValue(k);
}else{this._excludeChildControl(h);
}},_applySortIcon:function(m,n){if(m){this._showChildControl(f).setSource(m);
}else{this._excludeChildControl(f);
}},_applyIcon:function(o,p){if(o){this._showChildControl(i).setSource(o);
}else{this._excludeChildControl(i);
}},_createChildControlImpl:function(q,r){var s;

switch(q){case h:s=new qx.ui.basic.Label(this.getLabel()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:1});
break;
case f:s=new qx.ui.basic.Image(this.getSortIcon());
s.setAnonymous(true);
this._add(s,{row:0,column:2});
break;
case i:s=new qx.ui.basic.Image(this.getIcon()).set({anonymous:true,allowShrinkX:true});
this._add(s,{row:0,column:0});
break;
}return s||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,q);
}}});
})();
(function(){var k="qx.event.type.Data",j="visibilityChanged",h="orderChanged",g="visibilityChangedPre",f="__xG",e="__xH",d="widthChanged",c="qx.ui.table.columnmodel.Basic",b="headerCellRendererChanged",a="__xI";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__xC=[];
this.__xD=[];
},events:{"widthChanged":k,"visibilityChangedPre":k,"visibilityChanged":k,"orderChanged":k,"headerCellRendererChanged":k},statics:{DEFAULT_WIDTH:100,DEFAULT_HEADER_RENDERER:qx.ui.table.headerrenderer.Default,DEFAULT_DATA_RENDERER:qx.ui.table.cellrenderer.Default,DEFAULT_EDITOR_FACTORY:qx.ui.table.celleditor.TextField},members:{__wE:null,__xE:null,__xD:null,__xC:null,__xF:null,__xG:null,__xH:null,__xI:null,init:function(l,m){this.__xF=[];
var q=qx.ui.table.columnmodel.Basic.DEFAULT_WIDTH;
var r=this.__xG||(this.__xG=new qx.ui.table.columnmodel.Basic.DEFAULT_HEADER_RENDERER());
var o=this.__xH||(this.__xH=new qx.ui.table.columnmodel.Basic.DEFAULT_DATA_RENDERER());
var n=this.__xI||(this.__xI=new qx.ui.table.columnmodel.Basic.DEFAULT_EDITOR_FACTORY());
this.__xC=[];
this.__xD=[];
var t;
if(m){t=m.getInitiallyHiddenColumns();
}t=t||[];

for(var u=0;u<l;u++){this.__xF[u]={width:q,headerRenderer:r,dataRenderer:o,editorFactory:n};
this.__xC[u]=u;
this.__xD[u]=u;
}this.__xE=null;
this.__wE=true;

for(var s=0;s<t.length;s++){this.setColumnVisible(t[s],false);
}this.__wE=false;

for(u=0;u<l;u++){var p={col:u,visible:this.isColumnVisible(u)};
this.fireDataEvent(g,p);
this.fireDataEvent(j,p);
}},getVisibleColumns:function(){return this.__xD!=null?this.__xD:[];
},setColumnWidth:function(v,w,y){var A=this.__xF[v].width;

if(A!=w){this.__xF[v].width=w;
var z={col:v,newWidth:w,oldWidth:A,isMouseAction:y||false};
this.fireDataEvent(d,z);
}},getColumnWidth:function(B){return this.__xF[B].width;
},setHeaderCellRenderer:function(C,D){var E=this.__xF[C].headerRenderer;

if(E!==this.__xG){E.dispose();
}this.__xF[C].headerRenderer=D;
this.fireDataEvent(b,{col:C});
},getHeaderCellRenderer:function(F){return this.__xF[F].headerRenderer;
},setDataCellRenderer:function(G,H){this.__xF[G].dataRenderer=H;
var I=this.__xF[G].dataRenderer;

if(I!==this.__xH){return I;
}return null;
},getDataCellRenderer:function(J){return this.__xF[J].dataRenderer;
},setCellEditorFactory:function(K,L){var M=this.__xF[K].headerRenderer;

if(M!==this.__xI){M.dispose();
}this.__xF[K].editorFactory=L;
},getCellEditorFactory:function(N){return this.__xF[N].editorFactory;
},_getColToXPosMap:function(){if(this.__xE==null){this.__xE={};

for(var Q=0;Q<this.__xC.length;Q++){var P=this.__xC[Q];
this.__xE[P]={overX:Q};
}
for(var O=0;O<this.__xD.length;O++){var P=this.__xD[O];
this.__xE[P].visX=O;
}}return this.__xE;
},getVisibleColumnCount:function(){return this.__xD!=null?this.__xD.length:0;
},getVisibleColumnAtX:function(R){return this.__xD[R];
},getVisibleX:function(S){return this._getColToXPosMap()[S].visX;
},getOverallColumnCount:function(){return this.__xC.length;
},getOverallColumnAtX:function(T){return this.__xC[T];
},getOverallX:function(U){return this._getColToXPosMap()[U].overX;
},isColumnVisible:function(V){return (this._getColToXPosMap()[V].visX!=null);
},setColumnVisible:function(W,X){if(X!=this.isColumnVisible(W)){if(X){var be=this._getColToXPosMap();
var bb=be[W].overX;

if(bb==null){throw new Error("Showing column failed: "+W+". The column is not added to this TablePaneModel.");
}var bc;

for(var x=bb+1;x<this.__xC.length;x++){var bd=this.__xC[x];
var Y=be[bd].visX;

if(Y!=null){bc=Y;
break;
}}if(bc==null){bc=this.__xD.length;
}this.__xD.splice(bc,0,W);
}else{var ba=this.getVisibleX(W);
this.__xD.splice(ba,1);
}this.__xE=null;
if(!this.__wE){var bf={col:W,visible:X};
this.fireDataEvent(g,bf);
this.fireDataEvent(j,bf);
}}},moveColumn:function(bg,bh){this.__wE=true;
var bk=this.__xC[bg];
var bi=this.isColumnVisible(bk);

if(bi){this.setColumnVisible(bk,false);
}this.__xC.splice(bg,1);
this.__xC.splice(bh,0,bk);
this.__xE=null;

if(bi){this.setColumnVisible(bk,true);
}this.__wE=false;
var bj={col:bk,fromOverXPos:bg,toOverXPos:bh};
this.fireDataEvent(h,bj);
},setColumnsOrder:function(bl){if(bl.length==this.__xC.length){this.__wE=true;
var bo=new Array(bl.length);

for(var bm=0;bm<this.__xC.length;bm++){var bn=this.isColumnVisible(bm);
bo[bm]=bn;

if(bn){this.setColumnVisible(bm,false);
}}this.__xC=qx.lang.Array.clone(bl);
this.__xE=null;
for(var bm=0;bm<this.__xC.length;bm++){if(bo[bm]){this.setColumnVisible(bm,true);
}}this.__wE=false;
this.fireDataEvent(h);
}else{throw new Error("setColumnsOrder: Invalid number of column positions given, expected "+this.__xC.length+", got "+bl.length);
}}},destruct:function(){for(var i=0;i<this.__xF.length;i++){this.__xF[i].headerRenderer.dispose();
this.__xF[i].dataRenderer.dispose();
this.__xF[i].editorFactory.dispose();
}this.__xC=this.__xD=this.__xF=this.__xE=null;
this._disposeObjects(f,e,a);
}});
})();
(function(){var k="",j="Number",h='</div>',g='" ',f="paneUpdated",e='<div>',d="</div>",c="overflow: hidden;",b="qx.event.type.Data",a="paneReloadsData",E="div",D='style="',C="_applyMaxCacheLines",B="qx.ui.table.pane.Pane",A="width: 100%;",z="qx.event.type.Event",w="_applyVisibleRowCount",v='>',u="line-height: ",t="appear",r='class="',s="width:100%;",p="px;",q='<div ',n="'>",o="_applyFirstVisibleRow",l="<div style='",m=";position:relative;";
qx.Class.define(B,{extend:qx.ui.core.Widget,construct:function(F){qx.ui.core.Widget.call(this);
this.__xJ=F;
this.__xK=0;
this.__wW=0;
this.__xL=[];
},events:{"paneReloadsData":b,"paneUpdated":z},properties:{firstVisibleRow:{check:j,init:0,apply:o},visibleRowCount:{check:j,init:0,apply:w},maxCacheLines:{check:j,init:1000,apply:C},allowShrinkX:{refine:true,init:false}},members:{__wW:null,__xK:null,__xJ:null,__xM:null,__wT:null,__wS:null,__xL:null,__xN:0,_applyFirstVisibleRow:function(G,H){this.updateContent(false,G-H);
},_applyVisibleRowCount:function(I,J){this.updateContent(true);
},_getContentHint:function(){return {width:this.getPaneScroller().getTablePaneModel().getTotalWidth(),height:400};
},getPaneScroller:function(){return this.__xJ;
},getTable:function(){return this.__xJ.getTable();
},setFocusedCell:function(K,L,M){if(K!=this.__wS||L!=this.__wT){var N=this.__wT;
this.__wS=K;
this.__wT=L;
if(L!=N&&!M){if(N!==null){this.updateContent(false,null,N,true);
}
if(L!==null){this.updateContent(false,null,L,true);
}}}},onSelectionChanged:function(){this.updateContent(false,null,null,true);
},onFocusChanged:function(){this.updateContent(false,null,null,true);
},setColumnWidth:function(O,P){this.updateContent(true);
},onColOrderChanged:function(){this.updateContent(true);
},onPaneModelChanged:function(){this.updateContent(true);
},onTableModelDataChanged:function(Q,R,S,T){this.__xO();
var V=this.getFirstVisibleRow();
var U=this.getVisibleRowCount();

if(R==-1||R>=V&&Q<V+U){this.updateContent();
}},onTableModelMetaDataChanged:function(){this.updateContent(true);
},_applyMaxCacheLines:function(W,X){if(this.__xN>=W&&W!==-1){this.__xO();
}},__xO:function(){this.__xL=[];
this.__xN=0;
},__xP:function(Y,ba,bb){if(!ba&&!bb&&this.__xL[Y]){return this.__xL[Y];
}else{return null;
}},__xQ:function(bc,bd,be,bf){var bg=this.getMaxCacheLines();

if(!be&&!bf&&!this.__xL[bc]&&bg>0){this._applyMaxCacheLines(bg);
this.__xL[bc]=bd;
this.__xN+=1;
}},updateContent:function(bh,bi,bj,bk){if(bh){this.__xO();
}if(bi&&Math.abs(bi)<=Math.min(10,this.getVisibleRowCount())){this._scrollContent(bi);
}else if(bk&&!this.getTable().getAlwaysUpdateCells()){this._updateRowStyles(bj);
}else{this._updateAllRows();
}},_updateRowStyles:function(bl){var bp=this.getContentElement().getDomElement();

if(!bp||!bp.firstChild){this._updateAllRows();
return;
}var bt=this.getTable();
var bn=bt.getSelectionModel();
var bq=bt.getTableModel();
var bu=bt.getDataRowRenderer();
var bo=bp.firstChild.childNodes;
var bs={table:bt};
var bv=this.getFirstVisibleRow();
var y=0;
var bm=bo.length;

if(bl!=null){var br=bl-bv;

if(br>=0&&br<bm){bv=bl;
y=br;
bm=br+1;
}else{return;
}}
for(;y<bm;y++,bv++){bs.row=bv;
bs.selected=bn.isSelectedIndex(bv);
bs.focusedRow=(this.__wT==bv);
bs.rowData=bq.getRowData(bv);
bu.updateDataRowElement(bs,bo[y]);
}},_getRowsHtml:function(bw,bx){var bD=this.getTable();
var bG=bD.getSelectionModel();
var bA=bD.getTableModel();
var bB=bD.getTableColumnModel();
var bV=this.getPaneScroller().getTablePaneModel();
var bL=bD.getDataRowRenderer();
bA.prefetchRows(bw,bw+bx-1);
var bS=bD.getRowHeight();
var bU=bV.getColumnCount();
var bC=0;
var bz=[];
for(var x=0;x<bU;x++){var bY=bV.getColumnAtX(x);
var bF=bB.getColumnWidth(bY);
bz.push({col:bY,xPos:x,editable:bA.isColumnEditable(bY),focusedCol:this.__wS==bY,styleLeft:bC,styleWidth:bF});
bC+=bF;
}var bX=[];
var ca=false;

for(var bE=bw;bE<bw+bx;bE++){var bH=bG.isSelectedIndex(bE);
var bK=(this.__wT==bE);
var bP=this.__xP(bE,bH,bK);

if(bP){bX.push(bP);
continue;
}var by=[];
var bR={table:bD};
bR.styleHeight=bS;
bR.row=bE;
bR.selected=bH;
bR.focusedRow=bK;
bR.rowData=bA.getRowData(bE);

if(!bR.rowData){ca=true;
}by.push(q);
var bO=bL.getRowAttributes(bR);

if(bO){by.push(bO);
}var bN=bL.getRowClass(bR);

if(bN){by.push(r,bN,g);
}var bM=bL.createRowStyle(bR);
bM+=m+bL.getRowHeightStyle(bS)+s;

if(bM){by.push(D,bM,g);
}by.push(v);
var bW=false;

for(x=0;x<bU&&!bW;x++){var bI=bz[x];

for(var bT in bI){bR[bT]=bI[bT];
}var bY=bR.col;
bR.value=bA.getValue(bY,bE);
var bJ=bB.getDataCellRenderer(bY);
bR.style=bJ.getDefaultCellStyle();
bW=bJ.createDataCellHtml(bR,by)||false;
}by.push(h);
var bQ=by.join(k);
this.__xQ(bE,bQ,bH,bK);
bX.push(bQ);
}this.fireDataEvent(a,ca);
return bX.join(k);
},_scrollContent:function(cb){var cc=this.getContentElement().getDomElement();

if(!(cc&&cc.firstChild)){this._updateAllRows();
return;
}var cl=cc.firstChild;
var cd=cl.childNodes;
var cj=this.getVisibleRowCount();
var ci=this.getFirstVisibleRow();
var cg=this.getTable().getTableModel();
var cm=0;
cm=cg.getRowCount();
if(ci+cj>cm){this._updateAllRows();
return;
}var cn=cb<0?cj+cb:0;
var ce=cb<0?0:cj-cb;

for(i=Math.abs(cb)-1;i>=0;i--){var ch=cd[cn];

try{cl.removeChild(ch);
}catch(co){break;
}}if(!this.__xM){this.__xM=document.createElement(E);
}var ck=e;
ck+=this._getRowsHtml(ci+ce,Math.abs(cb));
ck+=h;
this.__xM.innerHTML=ck;
var cf=this.__xM.firstChild.childNodes;
if(cb>0){for(var i=cf.length-1;i>=0;i--){var ch=cf[0];
cl.appendChild(ch);
}}else{for(var i=cf.length-1;i>=0;i--){var ch=cf[cf.length-1];
cl.insertBefore(ch,cl.firstChild);
}}if(this.__wT!==null){this._updateRowStyles(this.__wT-cb);
this._updateRowStyles(this.__wT);
}this.fireEvent(f);
},_updateAllRows:function(){var cs=this.getContentElement().getDomElement();

if(!cs){this.addListenerOnce(t,arguments.callee,this);
return;
}var cy=this.getTable();
var cv=cy.getTableModel();
var cx=this.getPaneScroller().getTablePaneModel();
var cw=cx.getColumnCount();
var cp=cy.getRowHeight();
var ct=this.getFirstVisibleRow();
var cq=this.getVisibleRowCount();
var cz=cv.getRowCount();

if(ct+cq>cz){cq=Math.max(0,cz-ct);
}var cr=cx.getTotalWidth();
var cu;
if(cq>0){cu=[l,A,(cy.getForceLineHeight()?u+cp+p:k),c,n,this._getRowsHtml(ct,cq),d];
}else{cu=[];
}var cA=cu.join(k);
cs.innerHTML=cA;
this.setWidth(cr);
this.__xK=cw;
this.__wW=cq;
this.fireEvent(f);
}},destruct:function(){this.__xM=this.__xJ=this.__xL=null;
}});
})();
(function(){var e="first",d="last",c="hovered",b="__xJ",a="qx.ui.table.pane.Header";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(f){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
this.__mC=new qx.ui.core.Blocker(this);
this.__xJ=f;
},members:{__xJ:null,__xR:null,__xS:null,__mC:null,getPaneScroller:function(){return this.__xJ;
},getTable:function(){return this.__xJ.getTable();
},getBlocker:function(){return this.__mC;
},onColOrderChanged:function(){this._updateContent(true);
},onPaneModelChanged:function(){this._updateContent(true);
},onTableModelMetaDataChanged:function(){this._updateContent();
},setColumnWidth:function(g,h,i){var j=this.getHeaderWidgetAtColumn(g);

if(j!=null){j.setWidth(h);
}},setMouseOverColumn:function(k){if(k!=this.__xS){if(this.__xS!=null){var l=this.getHeaderWidgetAtColumn(this.__xS);

if(l!=null){l.removeState(c);
}}
if(k!=null){this.getHeaderWidgetAtColumn(k).addState(c);
}this.__xS=k;
}},getHeaderWidgetAtColumn:function(m){var n=this.getPaneScroller().getTablePaneModel().getX(m);
return this._getChildren()[n];
},showColumnMoveFeedback:function(o,x){var s=this.getContainerLocation();

if(this.__xR==null){var y=this.getTable();
var p=this.getPaneScroller().getTablePaneModel().getX(o);
var r=this._getChildren()[p];
var t=y.getTableModel();
var v=y.getTableColumnModel();
var w={xPos:p,col:o,name:t.getColumnName(o),table:y};
var u=v.getHeaderCellRenderer(o);
var q=u.createHeaderCell(w);
var z=r.getBounds();
q.setWidth(z.width);
q.setHeight(z.height);
q.setZIndex(1000000);
q.setOpacity(0.8);
q.setLayoutProperties({top:s.top});
this.getApplicationRoot().add(q);
this.__xR=q;
}this.__xR.setLayoutProperties({left:s.left+x});
this.__xR.show();
},hideColumnMoveFeedback:function(){if(this.__xR!=null){this.__xR.destroy();
this.__xR=null;
}},isShowingColumnMoveFeedback:function(){return this.__xR!=null;
},_updateContent:function(A){var K=this.getTable();
var E=K.getTableModel();
var H=K.getTableColumnModel();
var J=this.getPaneScroller().getTablePaneModel();
var M=this._getChildren();
var F=J.getColumnCount();
var I=E.getSortColumnIndex();
if(A){this._cleanUpCells();
}var B={};
B.sortedAscending=E.isSortAscending();

for(var x=0;x<F;x++){var D=J.getColumnAtX(x);

if(D===undefined){continue;
}var L=H.getColumnWidth(D);
var G=H.getHeaderCellRenderer(D);
B.xPos=x;
B.col=D;
B.name=E.getColumnName(D);
B.editable=E.isColumnEditable(D);
B.sorted=(D==I);
B.table=K;
var C=M[x];
if(C==null){C=G.createHeaderCell(B);
C.set({width:L});
this._add(C);
}else{G.updateHeaderCell(B,C);
}if(x===0){C.addState(e);
C.removeState(d);
}else if(x===F-1){C.removeState(e);
C.addState(d);
}else{C.removeState(e);
C.removeState(d);
}}},_cleanUpCells:function(){var O=this._getChildren();

for(var x=O.length-1;x>=0;x--){var N=O[x];
N.destroy();
}}},destruct:function(){this.__mC.dispose();
this._disposeObjects(b);
}});
})();
(function(){var m="Boolean",l="resize-line",k="mousedown",j="qx.event.type.Data",i="mouseup",h="qx.ui.table.pane.CellEvent",g="scroll",d="focus-indicator",c="excluded",b="scrollbar-y",bo="table-scroller-focus-indicator",bn="visible",bm="mousemove",bl="header",bk="editing",bj="click",bi="modelChanged",bh="scrollbar-x",bg="cellClick",bf="pane",t="__ya",u="mouseout",r="changeHorizontalScrollBarVisible",s="__xW",p="bottom",q="_applyScrollTimeout",n="changeScrollX",o="_applyTablePaneModel",A="Integer",B="dblclick",K="dataEdited",H="mousewheel",S="interval",N="qx.ui.table.pane.Scroller",bb="_applyShowCellFocusIndicator",X="__xY",D="y",be="resize",bd="__ps",bc="__yb",C="vertical",F="__xV",G="changeScrollY",J="appear",L="table-scroller",O="beforeSort",U="__xU",ba="cellDblclick",v="__kr",w="horizontal",E="losecapture",R="contextmenu",Q="col-resize",P="disappear",W="_applyVerticalScrollBarVisible",V="_applyHorizontalScrollBarVisible",M="cellContextmenu",T="close",a="__xX",Y="changeTablePaneModel",y="x",z="qx.ui.table.pane.Model",I="changeVerticalScrollBarVisible";
qx.Class.define(N,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,construct:function(bp){qx.ui.core.Widget.call(this);
this.__xT=bp;
var bq=new qx.ui.layout.Grid();
bq.setColumnFlex(0,1);
bq.setRowFlex(1,1);
this._setLayout(bq);
this.__xU=this._showChildControl(bh);
this.__xV=this._showChildControl(b);
this.__ps=this._showChildControl(bl);
this.__xW=this._showChildControl(bf);
this.__xX=new qx.ui.container.Composite(new qx.ui.layout.HBox()).set({minWidth:0});
this._add(this.__xX,{row:0,column:0,colSpan:2});
this.__xY=new qx.ui.table.pane.Clipper();
this.__xY.add(this.__ps);
this.__xY.addListener(E,this._onChangeCaptureHeader,this);
this.__xY.addListener(bm,this._onMousemoveHeader,this);
this.__xY.addListener(k,this._onMousedownHeader,this);
this.__xY.addListener(i,this._onMouseupHeader,this);
this.__xY.addListener(bj,this._onClickHeader,this);
this.__xX.add(this.__xY,{flex:1});
this.__ya=new qx.ui.table.pane.Clipper();
this.__ya.add(this.__xW);
this.__ya.addListener(H,this._onMousewheel,this);
this.__ya.addListener(bm,this._onMousemovePane,this);
this.__ya.addListener(k,this._onMousedownPane,this);
this.__ya.addListener(i,this._onMouseupPane,this);
this.__ya.addListener(bj,this._onClickPane,this);
this.__ya.addListener(R,this._onContextMenu,this);
this.__ya.addListener(B,this._onDblclickPane,this);
this.__ya.addListener(be,this._onResizePane,this);
this._add(this.__ya,{row:1,column:0});
this.__yb=this.getChildControl(d);
this.initShowCellFocusIndicator();
this.getChildControl(l).hide();
this.addListener(u,this._onMouseout,this);
this.addListener(J,this._onAppear,this);
this.addListener(P,this._onDisappear,this);
this.__kr=new qx.event.Timer();
this.__kr.addListener(S,this._oninterval,this);
this.initScrollTimeout();
},statics:{MIN_COLUMN_WIDTH:10,RESIZE_REGION_RADIUS:5,CLICK_TOLERANCE:5,HORIZONTAL_SCROLLBAR:1,VERTICAL_SCROLLBAR:2},events:{"changeScrollY":j,"changeScrollX":j,"cellClick":h,"cellDblclick":h,"cellContextmenu":h,"beforeSort":j},properties:{horizontalScrollBarVisible:{check:m,init:false,apply:V,event:r},verticalScrollBarVisible:{check:m,init:false,apply:W,event:I},tablePaneModel:{check:z,apply:o,event:Y},liveResize:{check:m,init:false},focusCellOnMouseMove:{check:m,init:false},selectBeforeFocus:{check:m,init:false},showCellFocusIndicator:{check:m,init:true,apply:bb},contextMenuFromDataCellsOnly:{check:m,init:true},resetSelectionOnHeaderClick:{check:m,init:true},scrollTimeout:{check:A,init:100,apply:q},appearance:{refine:true,init:L}},members:{__wW:null,__xT:null,__yc:null,__yd:null,__ye:null,__yf:null,__yg:null,__yh:null,__yi:null,__yj:null,__yk:null,__yl:null,__ym:null,__yn:null,__yo:false,__yp:null,__yq:null,__yr:null,__wS:null,__wT:null,__ys:null,__yt:null,__yu:null,__xU:null,__xV:null,__ps:null,__xY:null,__xW:null,__ya:null,__yb:null,__xX:null,__kr:null,getPaneInsetRight:function(){var bt=this.getTopRightWidget();
var bu=bt&&bt.isVisible()&&bt.getBounds()?bt.getBounds().width+bt.getMarginLeft()+bt.getMarginRight():0;
var bs=this.__xV;
var br=this.getVerticalScrollBarVisible()?this.getVerticalScrollBarWidth()+bs.getMarginLeft()+bs.getMarginRight():0;
return Math.max(bu,br);
},setPaneWidth:function(bv){if(this.isVerticalScrollBarVisible()){bv+=this.getPaneInsetRight();
}this.setWidth(bv);
},_createChildControlImpl:function(bw,bx){var by;

switch(bw){case bl:by=(this.getTable().getNewTablePaneHeader())(this);
break;
case bf:by=(this.getTable().getNewTablePane())(this);
break;
case d:by=new qx.ui.table.pane.FocusIndicator(this);
by.setUserBounds(0,0,0,0);
by.setZIndex(1000);
by.addListener(i,this._onMouseupFocusIndicator,this);
this.__ya.add(by);
by.show();
by.setDecorator(null);
break;
case l:by=new qx.ui.core.Widget();
by.setUserBounds(0,0,0,0);
by.setZIndex(1000);
this.__ya.add(by);
break;
case bh:by=this._createScrollBar(w).set({minWidth:0,alignY:p});
by.addListener(g,this._onScrollX,this);
this._add(by,{row:2,column:0});
break;
case b:by=this._createScrollBar(C);
by.addListener(g,this._onScrollY,this);
this._add(by,{row:1,column:1});
break;
}return by||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bw);
},_applyHorizontalScrollBarVisible:function(bz,bA){this.__xU.setVisibility(bz?bn:c);
},_applyVerticalScrollBarVisible:function(bB,bC){this.__xV.setVisibility(bB?bn:c);
},_applyTablePaneModel:function(bD,bE){if(bE!=null){bE.removeListener(bi,this._onPaneModelChanged,this);
}bD.addListener(bi,this._onPaneModelChanged,this);
},_applyShowCellFocusIndicator:function(bF,bG){if(bF){this.__yb.setDecorator(bo);
this._updateFocusIndicator();
}else{if(this.__yb){this.__yb.setDecorator(null);
}}},getScrollY:function(){return this.__xV.getPosition();
},setScrollY:function(scrollY,bH){this.__xV.scrollTo(scrollY);

if(bH){this._updateContent();
}},getScrollX:function(){return this.__xU.getPosition();
},setScrollX:function(scrollX){this.__xU.scrollTo(scrollX);
},getTable:function(){return this.__xT;
},onColVisibilityChanged:function(){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
},setColumnWidth:function(bI,bJ){this.__ps.setColumnWidth(bI,bJ);
this.__xW.setColumnWidth(bI,bJ);
var bK=this.getTablePaneModel();
var x=bK.getX(bI);

if(x!=-1){this.updateHorScrollBarMaximum();
this._updateFocusIndicator();
}},onColOrderChanged:function(){this.__ps.onColOrderChanged();
this.__xW.onColOrderChanged();
this.updateHorScrollBarMaximum();
},onTableModelDataChanged:function(bL,bM,bN,bO){this.__xW.onTableModelDataChanged(bL,bM,bN,bO);
var bP=this.getTable().getTableModel().getRowCount();

if(bP!=this.__wW){this.updateVerScrollBarMaximum();

if(this.getFocusedRow()>=bP){if(bP==0){this.setFocusedCell(null,null);
}else{this.setFocusedCell(this.getFocusedColumn(),bP-1);
}}this.__wW=bP;
}},onSelectionChanged:function(){this.__xW.onSelectionChanged();
},onFocusChanged:function(){this.__xW.onFocusChanged();
},onTableModelMetaDataChanged:function(){this.__ps.onTableModelMetaDataChanged();
this.__xW.onTableModelMetaDataChanged();
},_onPaneModelChanged:function(){this.__ps.onPaneModelChanged();
this.__xW.onPaneModelChanged();
},_onResizePane:function(){this.updateHorScrollBarMaximum();
this.updateVerScrollBarMaximum();
this._updateContent();
this.__ps._updateContent();
this.__xT._updateScrollBarVisibility();
},updateHorScrollBarMaximum:function(){var bT=this.__ya.getInnerSize();

if(!bT){return ;
}var bR=this.getTablePaneModel().getTotalWidth();
var bS=this.__xU;

if(bT.width<bR){var bQ=Math.max(0,bR-bT.width);
bS.setMaximum(bQ);
bS.setKnobFactor(bT.width/bR);
var bU=bS.getPosition();
bS.setPosition(Math.min(bU,bQ));
}else{bS.setMaximum(0);
bS.setKnobFactor(1);
bS.setPosition(0);
}},updateVerScrollBarMaximum:function(){var cd=this.__ya.getInnerSize();

if(!cd){return ;
}var cb=this.getTable().getTableModel();
var bW=cb.getRowCount();

if(this.getTable().getKeepFirstVisibleRowComplete()){bW+=1;
}var bV=this.getTable().getRowHeight();
var bY=bW*bV;
var cc=this.__xV;

if(cd.height<bY){var bX=Math.max(0,bY-cd.height);
cc.setMaximum(bX);
cc.setKnobFactor(cd.height/bY);
var ca=cc.getPosition();
cc.setPosition(Math.min(ca,bX));
}else{cc.setMaximum(0);
cc.setKnobFactor(1);
cc.setPosition(0);
}},onKeepFirstVisibleRowCompleteChanged:function(){this.updateVerScrollBarMaximum();
this._updateContent();
},_onAppear:function(){this._startInterval(this.getScrollTimeout());
},_onDisappear:function(){this._stopInterval();
},_onScrollX:function(e){var ce=e.getData();
this.fireDataEvent(n,ce,e.getOldData());
this.__xY.scrollToX(ce);
this.__ya.scrollToX(ce);
},_onScrollY:function(e){this.fireDataEvent(G,e.getData(),e.getOldData());
this._postponedUpdateContent();
},_onMousewheel:function(e){var cf=this.getTable();

if(!cf.getEnabled()){return;
}var ci=e.getWheelDelta(D);
if(ci>0&&ci<1){ci=1;
}else if(ci<0&&ci>-1){ci=-1;
}this.__xV.scrollBySteps(ci);
ci=e.getWheelDelta(y);
if(ci>0&&ci<1){ci=1;
}else if(ci<0&&ci>-1){ci=-1;
}this.__xU.scrollBySteps(ci);
if(this.__yq&&this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(this.__yq,this.__yr);
}var ch=this.__xV.getPosition();
var cg=this.__xV.getMaximum();
if(ci<0&&ch<=0||ci>0&&ch>=cg){return;
}e.stop();
},__yv:function(cj){var co=this.getTable();
var cp=this.__ps.getHeaderWidgetAtColumn(this.__yk);
var ck=cp.getSizeHint().minWidth;
var cm=Math.max(ck,this.__ym+cj-this.__yl);

if(this.getLiveResize()){var cl=co.getTableColumnModel();
cl.setColumnWidth(this.__yk,cm,true);
}else{this.__ps.setColumnWidth(this.__yk,cm,true);
var cn=this.getTablePaneModel();
this._showResizeLine(cn.getColumnLeft(this.__yk)+cm);
}this.__yl+=cm-this.__ym;
this.__ym=cm;
},__yw:function(cq){var cr=qx.ui.table.pane.Scroller.CLICK_TOLERANCE;

if(this.__ps.isShowingColumnMoveFeedback()||cq>this.__yj+cr||cq<this.__yj-cr){this.__yg+=cq-this.__yj;
this.__ps.showColumnMoveFeedback(this.__yf,this.__yg);
var cs=this.__xT.getTablePaneScrollerAtPageX(cq);

if(this.__yi&&this.__yi!=cs){this.__yi.hideColumnMoveFeedback();
}
if(cs!=null){this.__yh=cs.showColumnMoveFeedback(cq);
}else{this.__yh=null;
}this.__yi=cs;
this.__yj=cq;
}},_onMousemoveHeader:function(e){var cz=this.getTable();

if(!cz.getEnabled()){return;
}var cA=false;
var ct=null;
var cx=e.getDocumentLeft();
var cy=e.getDocumentTop();
this.__yq=cx;
this.__yr=cy;

if(this.__yk!=null){this.__yv(cx);
cA=true;
e.stopPropagation();
}else if(this.__yf!=null){this.__yw(cx);
e.stopPropagation();
}else{var cu=this._getResizeColumnForPageX(cx);

if(cu!=-1){cA=true;
}else{var cw=cz.getTableModel();
var cB=this._getColumnForPageX(cx);

if(cB!=null&&cw.isColumnSortable(cB)){ct=cB;
}}}var cv=cA?Q:null;
this.getApplicationRoot().setGlobalCursor(cv);
this.setCursor(cv);
this.__ps.setMouseOverColumn(ct);
},_onMousemovePane:function(e){var cC=this.getTable();

if(!cC.getEnabled()){return;
}var cE=e.getDocumentLeft();
var cF=e.getDocumentTop();
this.__yq=cE;
this.__yr=cF;
var cD=this._getRowForPagePos(cE,cF);

if(cD!=null&&this._getColumnForPageX(cE)!=null){if(this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cE,cF);
}}this.__ps.setMouseOverColumn(null);
},_onMousedownHeader:function(e){if(!this.getTable().getEnabled()){return;
}var cH=e.getDocumentLeft();
var cI=this._getResizeColumnForPageX(cH);

if(cI!=-1){this._startResizeHeader(cI,cH);
e.stop();
}else{var cG=this._getColumnForPageX(cH);

if(cG!=null){this._startMoveHeader(cG,cH);
e.stop();
}}},_startResizeHeader:function(cJ,cK){var cL=this.getTable().getTableColumnModel();
this.__yk=cJ;
this.__yl=cK;
this.__ym=cL.getColumnWidth(this.__yk);
this.__xY.capture();
},_startMoveHeader:function(cM,cN){this.__yf=cM;
this.__yj=cN;
this.__yg=this.getTablePaneModel().getColumnLeft(cM);
this.__xY.capture();
},_onMousedownPane:function(e){var cR=this.getTable();

if(!cR.getEnabled()){return;
}
if(cR.isEditing()){cR.stopEditing();
}var cO=e.getDocumentLeft();
var cQ=e.getDocumentTop();
var cT=this._getRowForPagePos(cO,cQ);
var cS=this._getColumnForPageX(cO);

if(cT!==null){this.__yn={row:cT,col:cS};
this.__yo=false;
var cP=this.getSelectBeforeFocus();

if(cP){cR.getSelectionManager().handleMouseDown(cT,e);
}if(!this.getFocusCellOnMouseMove()){this._focusCellAtPagePos(cO,cQ);
}
if(!cP){cR.getSelectionManager().handleMouseDown(cT,e);
}}},_onMouseupFocusIndicator:function(e){if(this.__yn&&!this.__yo&&!this.isEditing()&&this.__yb.getRow()==this.__yn.row&&this.__yb.getColumn()==this.__yn.col){this.fireEvent(bg,qx.ui.table.pane.CellEvent,[this,e,this.__yn.row,this.__yn.col],true);
this.__yo=true;
}else if(!this.isEditing()){this._onMousedownPane(e);
}},_onChangeCaptureHeader:function(e){if(this.__yk!=null){this._stopResizeHeader();
}
if(this.__yf!=null){this._stopMoveHeader();
}},_stopResizeHeader:function(){var cU=this.getTable().getTableColumnModel();
if(!this.getLiveResize()){this._hideResizeLine();
cU.setColumnWidth(this.__yk,this.__ym,true);
}this.__yk=null;
this.__xY.releaseCapture();
this.getApplicationRoot().setGlobalCursor(null);
this.setCursor(null);
if(this.isEditing()){var cV=this.__ys.getBounds().height;
this.__ys.setUserBounds(0,0,this.__ym,cV);
}},_stopMoveHeader:function(){var db=this.getTable().getTableColumnModel();
var dc=this.getTablePaneModel();
this.__ps.hideColumnMoveFeedback();

if(this.__yi){this.__yi.hideColumnMoveFeedback();
}
if(this.__yh!=null){var de=dc.getFirstColumnX()+dc.getX(this.__yf);
var da=this.__yh;

if(da!=de&&da!=de+1){var dd=db.getVisibleColumnAtX(de);
var cY=db.getVisibleColumnAtX(da);
var cX=db.getOverallX(dd);
var cW=(cY!=null)?db.getOverallX(cY):db.getOverallColumnCount();

if(cW>cX){cW--;
}db.moveColumn(cX,cW);
this._updateFocusIndicator();
}}this.__yf=null;
this.__yh=null;
this.__xY.releaseCapture();
},_onMouseupPane:function(e){var df=this.getTable();

if(!df.getEnabled()){return;
}var dg=this._getRowForPagePos(e.getDocumentLeft(),e.getDocumentTop());

if(dg!=-1&&dg!=null&&this._getColumnForPageX(e.getDocumentLeft())!=null){df.getSelectionManager().handleMouseUp(dg,e);
}},_onMouseupHeader:function(e){var dh=this.getTable();

if(!dh.getEnabled()){return;
}
if(this.__yk!=null){this._stopResizeHeader();
this.__yp=true;
e.stop();
}else if(this.__yf!=null){this._stopMoveHeader();
e.stop();
}},_onClickHeader:function(e){if(this.__yp){this.__yp=false;
return;
}var dm=this.getTable();

if(!dm.getEnabled()){return;
}var dk=dm.getTableModel();
var dl=e.getDocumentLeft();
var dj=this._getResizeColumnForPageX(dl);

if(dj==-1){var dq=this._getColumnForPageX(dl);

if(dq!=null&&dk.isColumnSortable(dq)){var di=dk.getSortColumnIndex();
var dn=(dq!=di)?true:!dk.isSortAscending();
var dp={column:dq,ascending:dn,clickEvent:e};

if(this.fireDataEvent(O,dp,null,true)){dk.sortByColumn(dq,dn);

if(this.getResetSelectionOnHeaderClick()){dm.getSelectionModel().resetSelection();
}}}}e.stop();
},_onClickPane:function(e){var dr=this.getTable();

if(!dr.getEnabled()){return;
}var du=e.getDocumentLeft();
var dv=e.getDocumentTop();
var ds=this._getRowForPagePos(du,dv);
var dt=this._getColumnForPageX(du);

if(ds!=null&&dt!=null){dr.getSelectionManager().handleClick(ds,e);

if(this.__yb.isHidden()||(this.__yn&&!this.__yo&&!this.isEditing()&&ds==this.__yn.row&&dt==this.__yn.col)){this.fireEvent(bg,qx.ui.table.pane.CellEvent,[this,e,ds,dt],true);
this.__yo=true;
}}},_onContextMenu:function(e){var dz=e.getDocumentLeft();
var dA=e.getDocumentTop();
var dx=this._getRowForPagePos(dz,dA);
var dy=this._getColumnForPageX(dz);
if(dx===null&&this.getContextMenuFromDataCellsOnly()){return;
}
if(!this.getShowCellFocusIndicator()||dx===null||(this.__yn&&dx==this.__yn.row&&dy==this.__yn.col)){this.fireEvent(M,qx.ui.table.pane.CellEvent,[this,e,dx,dy],true);
var dw=this.getTable().getContextMenu();

if(dw){if(dw.getChildren().length>0){dw.openAtMouse(e);
}else{dw.exclude();
}e.preventDefault();
}}},_onContextMenuOpen:function(e){},_onDblclickPane:function(e){var dC=e.getDocumentLeft();
var dD=e.getDocumentTop();
this._focusCellAtPagePos(dC,dD);
this.startEditing();
var dB=this._getRowForPagePos(dC,dD);

if(dB!=-1&&dB!=null){this.fireEvent(ba,qx.ui.table.pane.CellEvent,[this,e,dB],true);
}},_onMouseout:function(e){var dE=this.getTable();

if(!dE.getEnabled()){return;
}if(this.__yk==null){this.setCursor(null);
this.getApplicationRoot().setGlobalCursor(null);
}this.__ps.setMouseOverColumn(null);
},_showResizeLine:function(x){var dG=this._showChildControl(l);
var dF=dG.getWidth();
var dH=this.__ya.getBounds();
dG.setUserBounds(x-Math.round(dF/2),0,dF,dH.height);
},_hideResizeLine:function(){this._excludeChildControl(l);
},showColumnMoveFeedback:function(dI){var dR=this.getTablePaneModel();
var dQ=this.getTable().getTableColumnModel();
var dL=this.__xW.getContainerLocation().left;
var dP=dR.getColumnCount();
var dM=0;
var dK=0;
var dU=dL;

for(var dJ=0;dJ<dP;dJ++){var dN=dR.getColumnAtX(dJ);
var dS=dQ.getColumnWidth(dN);

if(dI<dU+dS/2){break;
}dU+=dS;
dM=dJ+1;
dK=dU-dL;
}var dO=this.__ya.getContainerLocation().left;
var dT=this.__ya.getBounds().width;
var scrollX=dO-dL;
dK=qx.lang.Number.limit(dK,scrollX+2,scrollX+dT-1);
this._showResizeLine(dK);
return dR.getFirstColumnX()+dM;
},hideColumnMoveFeedback:function(){this._hideResizeLine();
},_focusCellAtPagePos:function(dV,dW){var dY=this._getRowForPagePos(dV,dW);

if(dY!=-1&&dY!=null){var dX=this._getColumnForPageX(dV);
this.__xT.setFocusedCell(dX,dY);
}},setFocusedCell:function(ea,eb){if(!this.isEditing()){this.__xW.setFocusedCell(ea,eb,this.__yd);
this.__wS=ea;
this.__wT=eb;
this._updateFocusIndicator();
}},getFocusedColumn:function(){return this.__wS;
},getFocusedRow:function(){return this.__wT;
},scrollCellVisible:function(ec,ed){var en=this.getTablePaneModel();
var ee=en.getX(ec);

if(ee!=-1){var ek=this.__ya.getInnerSize();

if(!ek){return;
}var el=this.getTable().getTableColumnModel();
var eh=en.getColumnLeft(ec);
var eo=el.getColumnWidth(ec);
var ef=this.getTable().getRowHeight();
var ep=ed*ef;
var scrollX=this.getScrollX();
var scrollY=this.getScrollY();
var em=Math.min(eh,eh+eo-ek.width);
var ej=eh;
this.setScrollX(Math.max(em,Math.min(ej,scrollX)));
var eg=ep+ef-ek.height;

if(this.getTable().getKeepFirstVisibleRowComplete()){eg+=ef;
}var ei=ep;
this.setScrollY(Math.max(eg,Math.min(ei,scrollY)),true);
}},isEditing:function(){return this.__ys!=null;
},startEditing:function(){var eu=this.getTable();
var es=eu.getTableModel();
var ew=this.__wS;

if(!this.isEditing()&&(ew!=null)&&es.isColumnEditable(ew)){var ex=this.__wT;
var eq=this.getTablePaneModel().getX(ew);
var er=es.getValue(ew,ex);
this.scrollCellVisible(eq,ex);
this.__yt=eu.getTableColumnModel().getCellEditorFactory(ew);
var et={col:ew,row:ex,xPos:eq,value:er,table:eu};
this.__ys=this.__yt.createCellEditor(et);
if(this.__ys===null){return false;
}else if(this.__ys instanceof qx.ui.window.Window){this.__ys.setModal(true);
this.__ys.setShowClose(false);
this.__ys.addListener(T,this._onCellEditorModalWindowClose,this);
var f=eu.getModalCellEditorPreOpenFunction();

if(f!=null){f(this.__ys,et);
}this.__ys.open();
}else{var ev=this.__yb.getInnerSize();
this.__ys.setUserBounds(0,0,ev.width,ev.height);
this.__yb.addListener(k,function(e){this.__yn={row:this.__wT,col:this.__wS};
e.stopPropagation();
},this);
this.__yb.add(this.__ys);
this.__yb.addState(bk);
this.__yb.setKeepActive(false);
this.__yb.setDecorator(bo);
this.__ys.focus();
this.__ys.activate();
}return true;
}return false;
},stopEditing:function(){if(!this.getShowCellFocusIndicator()){this.__yb.setDecorator(null);
}this.flushEditor();
this.cancelEditing();
},flushEditor:function(){if(this.isEditing()){var ez=this.__yt.getCellEditorValue(this.__ys);
var ey=this.getTable().getTableModel().getValue(this.__wS,this.__wT);
this.getTable().getTableModel().setValue(this.__wS,this.__wT,ez);
this.__xT.focus();
this.__xT.fireDataEvent(K,{row:this.__wT,col:this.__wS,oldValue:ey,value:ez});
}},cancelEditing:function(){if(this.isEditing()&&!this.__ys.pendingDispose){if(this._cellEditorIsModalWindow){this.__ys.destroy();
this.__ys=null;
this.__yt=null;
this.__ys.pendingDispose=true;
}else{this.__yb.removeState(bk);
this.__yb.setKeepActive(true);
this.__ys.destroy();
this.__ys=null;
this.__yt=null;
}}},_onCellEditorModalWindowClose:function(e){this.stopEditing();
},_getColumnForPageX:function(eA){var eD=this.getTable().getTableColumnModel();
var eE=this.getTablePaneModel();
var eC=eE.getColumnCount();
var eG=this.__xW.getContentLocation().left;

for(var x=0;x<eC;x++){var eB=eE.getColumnAtX(x);
var eF=eD.getColumnWidth(eB);
eG+=eF;

if(eA<eG){return eB;
}}return null;
},_getResizeColumnForPageX:function(eH){var eL=this.getTable().getTableColumnModel();
var eM=this.getTablePaneModel();
var eK=eM.getColumnCount();
var eO=this.__ps.getContainerLocation().left;
var eI=qx.ui.table.pane.Scroller.RESIZE_REGION_RADIUS;

for(var x=0;x<eK;x++){var eJ=eM.getColumnAtX(x);
var eN=eL.getColumnWidth(eJ);
eO+=eN;

if(eH>=(eO-eI)&&eH<=(eO+eI)){return eJ;
}}return -1;
},_getRowForPagePos:function(eP,eQ){var eR=this.__xW.getContentLocation();

if(eP<eR.left||eP>eR.right){return null;
}
if(eQ>=eR.top&&eQ<=eR.bottom){var eS=this.getTable().getRowHeight();
var scrollY=this.__xV.getPosition();

if(this.getTable().getKeepFirstVisibleRowComplete()){scrollY=Math.floor(scrollY/eS)*eS;
}var eV=scrollY+eQ-eR.top;
var eX=Math.floor(eV/eS);
var eW=this.getTable().getTableModel();
var eT=eW.getRowCount();
return (eX<eT)?eX:null;
}var eU=this.__ps.getContainerLocation();

if(eQ>=eU.top&&eQ<=eU.bottom&&eP<=eU.right){return -1;
}return null;
},setTopRightWidget:function(eY){var fa=this.__yu;

if(fa!=null){this.__xX.remove(fa);
}
if(eY!=null){this.__xX.add(eY);
}this.__yu=eY;
},getTopRightWidget:function(){return this.__yu;
},getHeader:function(){return this.__ps;
},getTablePane:function(){return this.__xW;
},getVerticalScrollBarWidth:function(){var fb=this.__xV;
return fb.isVisible()?(fb.getSizeHint().width||0):0;
},getNeededScrollBars:function(fc,fd){var fm=this.__xV;
var fq=fm.getSizeHint().width+fm.getMarginLeft()+fm.getMarginRight();
var fs=this.__xU;
var fr=fs.getSizeHint().height+fs.getMarginTop()+fs.getMarginBottom();
var fk=this.__ya.getInnerSize();
var fe=fk?fk.width:0;

if(this.getVerticalScrollBarVisible()){fe+=fq;
}var fp=fk?fk.height:0;

if(this.getHorizontalScrollBarVisible()){fp+=fr;
}var fl=this.getTable().getTableModel();
var fi=fl.getRowCount();
var ff=this.getTablePaneModel().getTotalWidth();
var fn=this.getTable().getRowHeight()*fi;
var fh=false;
var fo=false;

if(ff>fe){fh=true;

if(fn>fp-fr){fo=true;
}}else if(fn>fp){fo=true;

if(!fd&&(ff>fe-fq)){fh=true;
}}var fj=qx.ui.table.pane.Scroller.HORIZONTAL_SCROLLBAR;
var fg=qx.ui.table.pane.Scroller.VERTICAL_SCROLLBAR;
return ((fc||fh)?fj:0)|((fd||!fo)?0:fg);
},getPaneClipper:function(){return this.__ya;
},_applyScrollTimeout:function(ft,fu){this._startInterval(ft);
},_startInterval:function(fv){this.__kr.setInterval(fv);
this.__kr.start();
},_stopInterval:function(){this.__kr.stop();
},_postponedUpdateContent:function(){this._updateContent();
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.__yd&&!this.__xW._layoutPending){this.__yd=false;
this._updateContent();
}}),_updateContent:function(){var fA=this.__ya.getInnerSize();

if(!fA){return;
}var fD=fA.height;
var scrollX=this.__xU.getPosition();
var scrollY=this.__xV.getPosition();
var fx=this.getTable().getRowHeight();
var fy=Math.floor(scrollY/fx);
var fC=this.__xW.getFirstVisibleRow();
this.__xW.setFirstVisibleRow(fy);
var fz=Math.ceil(fD/fx);
var fw=0;
var fB=this.getTable().getKeepFirstVisibleRowComplete();

if(!fB){fz++;
fw=scrollY%fx;
}this.__xW.setVisibleRowCount(fz);

if(fy!=fC){this._updateFocusIndicator();
}this.__ya.scrollToX(scrollX);
if(!fB){this.__ya.scrollToY(fw);
}},_updateFocusIndicator:function(){var fE=this.getTable();

if(!fE.getEnabled()){return;
}this.__yb.moveToCell(this.__wS,this.__wT);
}},destruct:function(){this._stopInterval();
var fF=this.getTablePaneModel();

if(fF){fF.dispose();
}this.__yn=this.__yu=this.__xT=null;
this._disposeObjects(U,F,X,t,bc,bd,s,a,v);
}});
})();
(function(){var a="qx.ui.table.pane.Clipper";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this,new qx.ui.layout.Grow());
this.setMinWidth(0);
},members:{scrollToX:function(b){this.getContentElement().scrollToX(b,false);
},scrollToY:function(c){this.getContentElement().scrollToY(c,true);
}}});
})();
(function(){var g="Integer",f="Escape",d="keypress",c="Enter",b="excluded",a="qx.ui.table.pane.FocusIndicator";
qx.Class.define(a,{extend:qx.ui.container.Composite,construct:function(h){qx.ui.container.Composite.call(this);
this.__yx=h;
this.setKeepActive(true);
this.addListener(d,this._onKeyPress,this);
},properties:{visibility:{refine:true,init:b},row:{check:g,nullable:true},column:{check:g,nullable:true}},members:{__yx:null,_onKeyPress:function(e){var i=e.getKeyIdentifier();

if(i!==f&&i!==c){e.stopPropagation();
}},moveToCell:function(j,k){if(!this.__yx.getShowCellFocusIndicator()&&!this.__yx.getTable().getTableModel().isColumnEditable(j)){this.exclude();
return;
}else{this.show();
}
if(j==null){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var l=this.__yx.getTablePaneModel().getX(j);

if(l==-1){this.hide();
this.setRow(null);
this.setColumn(null);
}else{var q=this.__yx.getTable();
var o=q.getTableColumnModel();
var p=this.__yx.getTablePaneModel();
var n=this.__yx.getTablePane().getFirstVisibleRow();
var m=q.getRowHeight();
this.setUserBounds(p.getColumnLeft(j)-2,(k-n)*m-2,o.getColumnWidth(j)+3,m+3);
this.show();
this.setRow(k);
this.setColumn(j);
}}}},destruct:function(){this.__yx=null;
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
}},clone:function(g){var h=qx.event.type.Mouse.prototype.clone.call(this,g);
h.set({row:this.getRow(),column:this.getColumn()});
return h;
}}});
})();
(function(){var a="qx.lang.Number";
qx.Class.define(a,{statics:{isInRange:function(b,c,d){return b>=c&&b<=d;
},isBetweenRange:function(e,f,g){return e>f&&e<g;
},limit:function(h,i,j){if(j!=null&&h>j){return j;
}else if(i!=null&&h<i){return i;
}else{return h;
}}}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,{members:{setDesktop:function(b){this.assertInterface(b,qx.ui.window.IDesktop);
},changeActiveWindow:function(c,d){},updateStack:function(){},bringToFront:function(e){this.assertInstance(e,qx.ui.window.Window);
},sendToBack:function(f){this.assertInstance(f,qx.ui.window.Window);
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,{members:{setWindowManager:function(b){this.assertInterface(b,qx.ui.window.IWindowManager);
},getWindows:function(){},supportsMaximize:function(){},blockContent:function(c){this.assertInteger(c);
},unblockContent:function(){},isContentBlocked:function(){}}});
})();
(function(){var b="qx.ui.window.Manager",a="__bD";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.ui.window.IWindowManager,members:{__bD:null,setDesktop:function(c){this.__bD=c;
this.updateStack();
},getDesktop:function(){return this.__bD;
},changeActiveWindow:function(d,e){if(d){this.bringToFront(d);
d.setActive(true);
}
if(e){e.resetActive();
}},_minZIndex:1e5,updateStack:function(){qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.__bD.forceUnblockContent();
var f=this.__bD.getWindows();
var h=this._minZIndex;
var m=h+f.length*2;
var j=h+f.length*4;
var k=null;

for(var i=0,l=f.length;i<l;i++){var g=f[i];
if(!g.isVisible()){continue;
}k=k||g;
if(g.isModal()){g.setZIndex(j);
this.__bD.blockContent(j-1);
j+=2;
k=g;
}else if(g.isAlwaysOnTop()){g.setZIndex(m);
m+=2;
}else{g.setZIndex(h);
h+=2;
}if(!k.isModal()&&g.isActive()||g.getZIndex()>k.getZIndex()){k=g;
}}this.__bD.setActiveWindow(k);
},bringToFront:function(n){var o=this.__bD.getWindows();
var p=qx.lang.Array.remove(o,n);

if(p){o.push(n);
this.updateStack();
}},sendToBack:function(q){var r=this.__bD.getWindows();
var s=qx.lang.Array.remove(r,q);

if(s){r.unshift(q);
this.updateStack();
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var l="move",k="Boolean",j="mouseup",i="mousedown",h="losecapture",g="qx.ui.core.MMovable",f="mousemove",d="maximized",c="__V",b="__U",a="move-frame";
qx.Mixin.define(g,{properties:{movable:{check:k,init:true},useMoveFrame:{check:k,init:false}},members:{__U:null,__V:null,__W:null,__X:null,__Y:null,__ba:null,__bb:null,__bc:false,__bd:null,__be:0,_activateMoveHandle:function(m){if(this.__U){throw new Error("The move handle could not be redefined!");
}this.__U=m;
m.addListener(i,this._onMoveMouseDown,this);
m.addListener(j,this._onMoveMouseUp,this);
m.addListener(f,this._onMoveMouseMove,this);
m.addListener(h,this.__bi,this);
},__bf:function(){var n=this.__V;

if(!n){n=this.__V=new qx.ui.core.Widget();
n.setAppearance(a);
n.exclude();
qx.core.Init.getApplication().getRoot().add(n);
}return n;
},__bg:function(){var location=this.getContainerLocation();
var p=this.getBounds();
var o=this.__bf();
o.setUserBounds(location.left,location.top,p.width,p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},__bh:function(e){var r=this.__W;
var u=Math.max(r.left,Math.min(r.right,e.getDocumentLeft()));
var t=Math.max(r.top,Math.min(r.bottom,e.getDocumentTop()));
var q=this.__X+u;
var s=this.__Y+t;
return {viewportLeft:q,viewportTop:s,parentLeft:q-this.__ba,parentTop:s-this.__bb};
},_onMoveMouseDown:function(e){if(!this.getMovable()||this.hasState(d)){return;
}var parent=this.getLayoutParent();
var w=parent.getContentLocation();
var x=parent.getBounds();
if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(!parent.isContentBlocked()){this.__bd=parent.getBlockerColor();
this.__be=parent.getBlockerOpacity();
parent.setBlockerColor(null);
parent.setBlockerOpacity(1);
parent.blockContent(this.getZIndex()-1);
this.__bc=true;
}}this.__W={left:w.left,top:w.top,right:w.left+x.width,bottom:w.top+x.height};
var v=this.getContainerLocation();
this.__ba=w.left;
this.__bb=w.top;
this.__X=v.left-e.getDocumentLeft();
this.__Y=v.top-e.getDocumentTop();
this.addState(l);
this.__U.capture();
if(this.getUseMoveFrame()){this.__bg();
}e.stop();
},_onMoveMouseMove:function(e){if(!this.hasState(l)){return;
}var y=this.__bh(e);

if(this.getUseMoveFrame()){this.__bf().setDomPosition(y.viewportLeft,y.viewportTop);
}else{this.setDomPosition(y.parentLeft,y.parentTop);
}e.stopPropagation();
},_onMoveMouseUp:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
var parent=this.getLayoutParent();

if(qx.Class.implementsInterface(parent,qx.ui.window.IDesktop)){if(this.__bc){parent.unblockContent();
parent.setBlockerColor(this.__bd);
parent.setBlockerOpacity(this.__be);
this.__bd=null;
this.__be=0;
this.__bc=false;
}}this.__U.releaseCapture();
var z=this.__bh(e);
this.setLayoutProperties({left:z.parentLeft,top:z.parentTop});
if(this.getUseMoveFrame()){this.__bf().exclude();
}e.stopPropagation();
},__bi:function(e){if(!this.hasState(l)){return;
}this.removeState(l);
if(this.getUseMoveFrame()){this.__bf().exclude();
}}},destruct:function(){this._disposeObjects(c,b);
this.__W=null;
}});
})();
(function(){var k="Boolean",j="resize",i="mousedown",h="w-resize",g="sw-resize",f="n-resize",d="resizableRight",c="ne-resize",b="se-resize",a="Integer",z="e-resize",y="resizableLeft",x="mousemove",w="move",v="shorthand",u="maximized",t="nw-resize",s="mouseout",r="qx.ui.core.MResizable",q="mouseup",o="losecapture",p="resize-frame",m="resizableBottom",n="s-resize",l="resizableTop";
qx.Mixin.define(r,{construct:function(){var A=this.getContainerElement();
A.addListener(i,this.__by,this,true);
A.addListener(q,this.__bz,this);
A.addListener(x,this.__bB,this);
A.addListener(s,this.__bC,this);
A.addListener(o,this.__bA,this);
var B=this.getContainerElement().getDomElement();

if(B==null){B=window;
}this.__bl=qx.event.Registration.getManager(B).getHandler(qx.event.handler.DragDrop);
},properties:{resizableTop:{check:k,init:true},resizableRight:{check:k,init:true},resizableBottom:{check:k,init:true},resizableLeft:{check:k,init:true},resizable:{group:[l,d,m,y],mode:v},resizeSensitivity:{check:a,init:5},useResizeFrame:{check:k,init:true}},members:{__bl:null,__bm:null,__bn:null,__bo:null,__bp:null,__bq:null,__br:null,RESIZE_TOP:1,RESIZE_BOTTOM:2,RESIZE_LEFT:4,RESIZE_RIGHT:8,_getResizeFrame:function(){var C=this.__bm;

if(!C){C=this.__bm=new qx.ui.core.Widget();
C.setAppearance(p);
C.exclude();
qx.core.Init.getApplication().getRoot().add(C);
}return C;
},__bs:function(){var location=this.__bv();
var D=this._getResizeFrame();
D.setUserBounds(location.left,location.top,location.right-location.left,location.bottom-location.top);
D.show();
D.setZIndex(this.getZIndex()+1);
},__bt:function(e){var F=this.__bn;
var G=this.getSizeHint();
var K=this.__br;
var J=this.__bq;
var E=J.width;
var I=J.height;
var H=J.containerWidth;
var M=J.containerHeight;
var N=J.left;
var top=J.top;
var L;

if((F&this.RESIZE_TOP)||(F&this.RESIZE_BOTTOM)){L=Math.max(K.top,Math.min(K.bottom,e.getDocumentTop()))-this.__bp;

if(F&this.RESIZE_TOP){I-=L;
M-=L;
}else{I+=L;
M+=L;
}
if(M<G.minHeight){I+=(G.minHeight-M);
M=G.minHeight;
}else if(M>G.maxHeight){I-=(M-G.maxHeight);
M=G.maxHeight;
}
if(F&this.RESIZE_TOP){top+=J.containerHeight-M;
}}
if((F&this.RESIZE_LEFT)||(F&this.RESIZE_RIGHT)){L=Math.max(K.left,Math.min(K.right,e.getDocumentLeft()))-this.__bo;

if(F&this.RESIZE_LEFT){E-=L;
H-=L;
}else{E+=L;
H+=L;
}
if(H<G.minWidth){E+=(G.minWidth-H);
H=G.minWidth;
}else if(E>G.maxWidth){E-=(H-G.maxWidth);
H=G.maxWidth;
}
if(F&this.RESIZE_LEFT){N+=J.containerWidth-H;
}}return {viewportLeft:N,viewportTop:top,parentLeft:J.bounds.left+N-J.left,parentTop:J.bounds.top+top-J.top,containerWidth:H,containerHeight:M,width:E,height:I};
},__bu:{1:f,2:n,4:h,8:z,5:t,6:g,9:c,10:b},__bv:function(){var O=this.getDecoratorElement();
if(O&&O.getDomElement()){return qx.bom.element.Location.get(O.getDomElement());
}else{return this.getContentLocation();
}},__bw:function(e){var location=this.__bv();
var P=this.getResizeSensitivity();
var S=e.getDocumentLeft();
var R=e.getDocumentTop();
var Q=this.__bx(location,S,R,P);
if(Q>0){Q=Q|this.__bx(location,S,R,P*2);
}this.__bn=Q;
},__bx:function(location,T,U,V){var W=0;
if(this.getResizableTop()&&Math.abs(location.top-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_TOP;
}else if(this.getResizableBottom()&&Math.abs(location.bottom-U)<V&&T>location.left-V&&T<location.right+V){W+=this.RESIZE_BOTTOM;
}if(this.getResizableLeft()&&Math.abs(location.left-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_LEFT;
}else if(this.getResizableRight()&&Math.abs(location.right-T)<V&&U>location.top-V&&U<location.bottom+V){W+=this.RESIZE_RIGHT;
}return W;
},__by:function(e){if(!this.__bn){return;
}this.addState(j);
this.__bo=e.getDocumentLeft();
this.__bp=e.getDocumentTop();
var bb=this.getContainerLocation();
var X=this.__bv();
var ba=this.getBounds();
this.__bq={top:X.top,left:X.left,containerWidth:bb.right-bb.left,containerHeight:bb.bottom-bb.top,width:X.right-X.left,height:X.bottom-X.top,bounds:qx.lang.Object.clone(ba)};
var parent=this.getLayoutParent();
var bc=parent.getContentLocation();
var Y=parent.getBounds();
this.__br={left:bc.left,top:bc.top,right:bc.left+Y.width,bottom:bc.top+Y.height};
if(this.getUseResizeFrame()){this.__bs();
}this.capture();
e.stop();
},__bz:function(e){if(!this.hasState(j)){return;
}if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}var bd=this.__bt(e);
this.setWidth(bd.containerWidth);
this.setHeight(bd.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bd.parentLeft,top:bd.parentTop});
}this.__bn=0;
this.removeState(j);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
e.stopPropagation();
},__bA:function(e){if(!this.__bn){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(w);
if(this.getUseResizeFrame()){this._getResizeFrame().exclude();
}},__bB:function(e){if(this.hasState(j)){var bh=this.__bt(e);
if(this.getUseResizeFrame()){var bf=this._getResizeFrame();
bf.setUserBounds(bh.viewportLeft,bh.viewportTop,bh.width,bh.height);
}else{this.setWidth(bh.containerWidth);
this.setHeight(bh.containerHeight);
if(this.getResizableLeft()||this.getResizableTop()){this.setLayoutProperties({left:bh.parentLeft,top:bh.parentTop});
}}e.stopPropagation();
}else if(!this.hasState(u)&&!this.__bl.isSessionActive()){this.__bw(e);
var bi=this.__bn;
var bg=this.getApplicationRoot();

if(bi){var be=this.__bu[bi];
this.setCursor(be);
bg.setGlobalCursor(be);
}else if(this.getCursor()){this.resetCursor();
bg.resetGlobalCursor();
}}},__bC:function(e){if(this.getCursor()&&!this.hasState(j)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},destruct:function(){if(this.__bm!=null&&!qx.core.ObjectRegistry.inShutDown){this.__bm.destroy();
this.__bm=null;
}this.__bl=null;
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="captionbar",h="_applyCaptionBarChange",g="maximize-button",f="restore-button",d="minimize-button",c="close-button",b="maximized",a="execute",S="title",R="icon",Q="showStatusbar",P="pane",O="statusbar",N="statusbar-text",M="String",L="normal",K="active",J="beforeClose",r="beforeMinimize",s="mousedown",p="window-resize-frame",q="changeStatus",n="changeIcon",o="excluded",l="dblclick",m="_applyActive",t="beforeRestore",u="minimize",B="changeModal",z="changeAlwaysOnTop",D="_applyShowStatusbar",C="_applyStatus",F="qx.ui.window.Window",E="changeCaption",w="focusout",I="beforeMaximize",H="maximize",G="restore",v="window",x="close",y="changeActive",A="minimized";
qx.Class.define(F,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MResizable,qx.ui.core.MMovable,qx.ui.core.MContentPadding],construct:function(T,U){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(i);
this._createChildControl(P);
if(U!=null){this.setIcon(U);
}
if(T!=null){this.setCaption(T);
}this._updateCaptionBar();
this.addListener(s,this._onWindowMouseDown,this,true);
this.addListener(w,this._onWindowFocusOut,this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
this._getResizeFrame().setAppearance(p);
},statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},events:{"beforeClose":j,"close":j,"beforeMinimize":j,"minimize":j,"beforeMaximize":j,"maximize":j,"beforeRestore":j,"restore":j},properties:{appearance:{refine:true,init:v},visibility:{refine:true,init:o},focusable:{refine:true,init:true},active:{check:k,init:false,apply:m,event:y},alwaysOnTop:{check:k,init:false,event:z},modal:{check:k,init:false,event:B},caption:{apply:h,event:E,nullable:true},icon:{check:M,nullable:true,apply:h,event:n,themeable:true},status:{check:M,nullable:true,apply:C,event:q},showClose:{check:k,init:true,apply:h,themeable:true},showMaximize:{check:k,init:true,apply:h,themeable:true},showMinimize:{check:k,init:true,apply:h,themeable:true},allowClose:{check:k,init:true,apply:h},allowMaximize:{check:k,init:true,apply:h},allowMinimize:{check:k,init:true,apply:h},showStatusbar:{check:k,init:false,apply:D}},members:{__bj:null,__bk:null,getChildrenContainer:function(){return this.getChildControl(P);
},_forwardStates:{active:true,maximized:true,showStatusbar:true},setLayoutParent:function(parent){qx.ui.core.Widget.prototype.setLayoutParent.call(this,parent);
},_createChildControlImpl:function(V,W){var X;

switch(V){case O:X=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(X);
X.add(this.getChildControl(N));
break;
case N:X=new qx.ui.basic.Label();
X.setValue(this.getStatus());
break;
case P:X=new qx.ui.container.Composite();
this._add(X,{flex:1});
break;
case i:var ba=new qx.ui.layout.Grid();
ba.setRowFlex(0,1);
ba.setColumnFlex(1,1);
X=new qx.ui.container.Composite(ba);
this._add(X);
X.addListener(l,this._onCaptionMouseDblClick,this);
this._activateMoveHandle(X);
break;
case R:X=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(i).add(X,{row:0,column:0});
break;
case S:X=new qx.ui.basic.Label(this.getCaption());
X.setWidth(0);
X.setAllowGrowX(true);
var Y=this.getChildControl(i);
Y.add(X,{row:0,column:1});
break;
case d:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(a,this._onMinimizeButtonClick,this);
this.getChildControl(i).add(X,{row:0,column:2});
break;
case f:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(a,this._onRestoreButtonClick,this);
this.getChildControl(i).add(X,{row:0,column:3});
break;
case g:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(a,this._onMaximizeButtonClick,this);
this.getChildControl(i).add(X,{row:0,column:4});
break;
case c:X=new qx.ui.form.Button();
X.setFocusable(false);
X.addListener(a,this._onCloseButtonClick,this);
this.getChildControl(i).add(X,{row:0,column:6});
break;
}return X||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,V);
},_updateCaptionBar:function(){var bc;
var bd=this.getIcon();

if(bd){this.getChildControl(R).setSource(bd);
this._showChildControl(R);
}else{this._excludeChildControl(R);
}var bb=this.getCaption();

if(bb){this.getChildControl(S).setValue(bb);
this._showChildControl(S);
}else{this._excludeChildControl(S);
}
if(this.getShowMinimize()){this._showChildControl(d);
bc=this.getChildControl(d);
this.getAllowMinimize()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(d);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(f);
this._excludeChildControl(g);
}else{this._showChildControl(g);
this._excludeChildControl(f);
}bc=this.getChildControl(g);
this.getAllowMaximize()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(g);
this._excludeChildControl(f);
}
if(this.getShowClose()){this._showChildControl(c);
bc=this.getChildControl(c);
this.getAllowClose()?bc.resetEnabled():bc.setEnabled(false);
}else{this._excludeChildControl(c);
}},close:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(J,qx.event.type.Event,[false,true])){this.hide();
this.fireEvent(x);
}},open:function(){this.show();
this.setActive(true);
this.focus();
},center:function(){var parent=this.getLayoutParent();

if(parent){var bf=parent.getBounds();

if(bf){var bg=this.getSizeHint();
var be=Math.round((bf.width-bg.width)/2);
var top=Math.round((bf.height-bg.height)/2);

if(top<0){top=0;
}this.moveTo(be,top);
return;
}}},maximize:function(){if(this.isMaximized()){return;
}var parent=this.getLayoutParent();

if(parent!=null&&parent.supportsMaximize()){if(this.fireNonBubblingEvent(I,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bh=this.getLayoutProperties();
this.__bk=bh.left===undefined?0:bh.left;
this.__bj=bh.top===undefined?0:bh.top;
this.setLayoutProperties({left:null,top:null,edge:0});
this.addState(b);
this._updateCaptionBar();
this.fireEvent(H);
}}},minimize:function(){if(!this.isVisible()){return;
}
if(this.fireNonBubblingEvent(r,qx.event.type.Event,[false,true])){var bi=this.getLayoutProperties();
this.__bk=bi.left===undefined?0:bi.left;
this.__bj=bi.top===undefined?0:bi.top;
this.removeState(b);
this.hide();
this.fireEvent(u);
}},restore:function(){if(this.getMode()===L){return;
}
if(this.fireNonBubblingEvent(t,qx.event.type.Event,[false,true])){if(!this.isVisible()){this.open();
}var bj=this.__bk;
var top=this.__bj;
this.setLayoutProperties({edge:null,left:bj,top:top});
this.removeState(b);
this._updateCaptionBar();
this.fireEvent(G);
}},moveTo:function(bk,top){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bk,top:top});
},isMaximized:function(){return this.hasState(b);
},getMode:function(){if(!this.isVisible()){return A;
}else{if(this.isMaximized()){return b;
}else{return L;
}}},_applyActive:function(bl,bm){if(bm){this.removeState(K);
}else{this.addState(K);
}},_getContentPaddingTarget:function(){return this.getChildControl(P);
},_applyShowStatusbar:function(bn,bo){var bp=this._getResizeFrame();

if(bn){this.addState(Q);
bp.addState(Q);
}else{this.removeState(Q);
bp.removeState(Q);
}
if(bn){this._showChildControl(O);
}else{this._excludeChildControl(O);
}},_applyCaptionBarChange:function(bq,br){this._updateCaptionBar();
},_applyStatus:function(bs,bt){var bu=this.getChildControl(N,true);

if(bu){bu.setValue(bs);
}},_onWindowEventStop:function(e){e.stopPropagation();
},_onWindowMouseDown:function(e){this.setActive(true);
},_onWindowFocusOut:function(e){if(this.getModal()){return;
}var bv=e.getRelatedTarget();

if(bv!=null&&!qx.ui.core.Widget.contains(this,bv)){this.setActive(false);
}},_onCaptionMouseDblClick:function(e){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},_onMinimizeButtonClick:function(e){this.minimize();
this.getChildControl(d).reset();
},_onRestoreButtonClick:function(e){this.restore();
this.getChildControl(f).reset();
},_onMaximizeButtonClick:function(e){this.maximize();
this.getChildControl(g).reset();
},_onCloseButtonClick:function(e){this.close();
this.getChildControl(c).reset();
}}});
})();
(function(){var h="headerCellRendererChanged",g="visibilityChangedPre",f="Number",e="qx.event.type.Event",d="_applyFirstColumnX",c="Integer",b="qx.ui.table.pane.Model",a="_applyMaxColumnCount";
qx.Class.define(b,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setTableColumnModel(i);
},events:{"modelChanged":e},statics:{EVENT_TYPE_MODEL_CHANGED:"modelChanged"},properties:{firstColumnX:{check:c,init:0,apply:d},maxColumnCount:{check:f,init:-1,apply:a}},members:{__yy:null,__yz:null,_applyFirstColumnX:function(j,k){this.__yy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_applyMaxColumnCount:function(l,m){this.__yy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},setTableColumnModel:function(n){if(this.__yz){this.__yz.removeListener(g,this._onColVisibilityChanged,this);
this.__yz.removeListener(h,this._onColVisibilityChanged,this);
}this.__yz=n;
this.__yz.addListener(g,this._onColVisibilityChanged,this);
this.__yz.addListener(h,this._onHeaderCellRendererChanged,this);
this.__yy=null;
},_onColVisibilityChanged:function(o){this.__yy=null;
this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},_onHeaderCellRendererChanged:function(p){this.fireEvent(qx.ui.table.pane.Model.EVENT_TYPE_MODEL_CHANGED);
},getColumnCount:function(){if(this.__yy==null){var q=this.getFirstColumnX();
var s=this.getMaxColumnCount();
var r=this.__yz.getVisibleColumnCount();

if(s==-1||(q+s)>r){this.__yy=r-q;
}else{this.__yy=s;
}}return this.__yy;
},getColumnAtX:function(t){var u=this.getFirstColumnX();
return this.__yz.getVisibleColumnAtX(u+t);
},getX:function(v){var w=this.getFirstColumnX();
var y=this.getMaxColumnCount();
var x=this.__yz.getVisibleX(v)-w;

if(x>=0&&(y==-1||x<y)){return x;
}else{return -1;
}},getColumnLeft:function(z){var C=0;
var B=this.getColumnCount();

for(var x=0;x<B;x++){var A=this.getColumnAtX(x);

if(A==z){return C;
}C+=this.__yz.getColumnWidth(A);
}return -1;
},getTotalWidth:function(){var D=0;
var E=this.getColumnCount();

for(var x=0;x<E;x++){var F=this.getColumnAtX(x);
D+=this.__yz.getColumnWidth(F);
}return D;
}},destruct:function(){if(this.__yz){this.__yz.removeListener(g,this._onColVisibilityChanged,this);
this.__yz.removeListener(h,this._onColVisibilityChanged,this);
}this.__yz=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.ui.table.ITableModel";
qx.Interface.define(a,{events:{"dataChanged":c,"metaDataChanged":b,"sorted":c},members:{getRowCount:function(){},getRowData:function(d){},getColumnCount:function(){},getColumnId:function(e){},getColumnIndexById:function(f){},getColumnName:function(g){},isColumnEditable:function(h){},isColumnSortable:function(i){},sortByColumn:function(j,k){},getSortColumnIndex:function(){},isSortAscending:function(){},prefetchRows:function(l,m){},getValue:function(n,o){},getValueById:function(p,q){},setValue:function(r,s,t){},setValueById:function(u,v,w){}}});
})();
(function(){var e="metaDataChanged",d="qx.event.type.Data",c="qx.event.type.Event",b="abstract",a="qx.ui.table.model.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:qx.ui.table.ITableModel,events:{"dataChanged":d,"metaDataChanged":c,"sorted":d},construct:function(){qx.core.Object.call(this);
this.__wB=[];
this.__wC=[];
this.__wD={};
},members:{__wB:null,__wC:null,__wD:null,__wE:null,init:function(f){},getRowCount:function(){throw new Error("getRowCount is abstract");
},getRowData:function(g){return null;
},isColumnEditable:function(h){return false;
},isColumnSortable:function(j){return false;
},sortByColumn:function(k,l){},getSortColumnIndex:function(){return -1;
},isSortAscending:function(){return true;
},prefetchRows:function(m,n){},getValue:function(o,p){throw new Error("getValue is abstract");
},getValueById:function(q,r){return this.getValue(this.getColumnIndexById(q),r);
},setValue:function(s,t,u){throw new Error("setValue is abstract");
},setValueById:function(v,w,x){this.setValue(this.getColumnIndexById(v),w,x);
},getColumnCount:function(){return this.__wB.length;
},getColumnIndexById:function(y){return this.__wD[y];
},getColumnId:function(z){return this.__wB[z];
},getColumnName:function(A){return this.__wC[A];
},setColumnIds:function(B){this.__wB=B;
this.__wD={};

for(var i=0;i<B.length;i++){this.__wD[B[i]]=i;
}this.__wC=new Array(B.length);
if(!this.__wE){this.fireEvent(e);
}},setColumnNamesByIndex:function(C){if(this.__wB.length!=C.length){throw new Error("this.__columnIdArr and columnNameArr have different length: "+this.__wB.length+" != "+C.length);
}this.__wC=C;
this.fireEvent(e);
},setColumnNamesById:function(D){this.__wC=new Array(this.__wB.length);

for(var i=0;i<this.__wB.length;++i){this.__wC[i]=D[this.__wB[i]];
}},setColumns:function(E,F){var G=this.__wB.length==0||F;

if(F==null){if(this.__wB.length==0){F=E;
}else{F=this.__wB;
}}
if(F.length!=E.length){throw new Error("columnIdArr and columnNameArr have different length: "+F.length+" != "+E.length);
}
if(G){this.__wE=true;
this.setColumnIds(F);
this.__wE=false;
}this.setColumnNamesByIndex(E);
}},destruct:function(){this.__wB=this.__wC=this.__wD=null;
}});
})();
(function(){var e="dataChanged",d="metaDataChanged",c="qx.ui.table.model.Simple",b="Boolean",a="sorted";
qx.Class.define(c,{extend:qx.ui.table.model.Abstract,construct:function(){qx.ui.table.model.Abstract.call(this);
this.__yA=[];
this.__yB=-1;
this.__yC=[];
this.__wF=null;
},properties:{caseSensitiveSorting:{check:b,init:true}},statics:{_defaultSortComparatorAscending:function(f,g){var h=f[arguments.callee.columnIndex];
var k=g[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(h)&&qx.lang.Type.isNumber(k)){var l=isNaN(h)?isNaN(k)?0:1:isNaN(k)?-1:null;

if(l!=null){return l;
}}return (h>k)?1:((h==k)?0:-1);
},_defaultSortComparatorInsensitiveAscending:function(m,n){var o=(m[arguments.callee.columnIndex].toLowerCase?m[arguments.callee.columnIndex].toLowerCase():m[arguments.callee.columnIndex]);
var p=(n[arguments.callee.columnIndex].toLowerCase?n[arguments.callee.columnIndex].toLowerCase():n[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(o)&&qx.lang.Type.isNumber(p)){var q=isNaN(o)?isNaN(p)?0:1:isNaN(p)?-1:null;

if(q!=null){return q;
}}return (o>p)?1:((o==p)?0:-1);
},_defaultSortComparatorDescending:function(r,s){var t=r[arguments.callee.columnIndex];
var u=s[arguments.callee.columnIndex];

if(qx.lang.Type.isNumber(t)&&qx.lang.Type.isNumber(u)){var v=isNaN(t)?isNaN(u)?0:1:isNaN(u)?-1:null;

if(v!=null){return v;
}}return (t<u)?1:((t==u)?0:-1);
},_defaultSortComparatorInsensitiveDescending:function(w,x){var y=(w[arguments.callee.columnIndex].toLowerCase?w[arguments.callee.columnIndex].toLowerCase():w[arguments.callee.columnIndex]);
var z=(x[arguments.callee.columnIndex].toLowerCase?x[arguments.callee.columnIndex].toLowerCase():x[arguments.callee.columnIndex]);

if(qx.lang.Type.isNumber(y)&&qx.lang.Type.isNumber(z)){var A=isNaN(y)?isNaN(z)?0:1:isNaN(z)?-1:null;

if(A!=null){return A;
}}return (y<z)?1:((y==z)?0:-1);
}},members:{__yA:null,__wF:null,__yD:null,__yC:null,__yB:null,__yE:null,getRowData:function(B){var C=this.__yA[B];

if(C==null||C.originalData==null){return C;
}else{return C.originalData;
}},getRowDataAsMap:function(D){var F=this.__yA[D];

if(F!=null){var E={};
for(var G=0;G<this.getColumnCount();G++){E[this.getColumnId(G)]=F[G];
}
if(F.originalData!=null){for(var H in F.originalData){if(E[H]==undefined){E[H]=F.originalData[H];
}}}return E;
}return (F&&F.originalData)?F.originalData:null;
},getDataAsMapArray:function(){var J=this.getRowCount();
var I=[];

for(var i=0;i<J;i++){I.push(this.getRowDataAsMap(i));
}return I;
},setEditable:function(K){this.__wF=[];

for(var L=0;L<this.getColumnCount();L++){this.__wF[L]=K;
}this.fireEvent(d);
},setColumnEditable:function(M,N){if(N!=this.isColumnEditable(M)){if(this.__wF==null){this.__wF=[];
}this.__wF[M]=N;
this.fireEvent(d);
}},isColumnEditable:function(O){return this.__wF?(this.__wF[O]==true):false;
},setColumnSortable:function(P,Q){if(Q!=this.isColumnSortable(P)){if(this.__yD==null){this.__yD=[];
}this.__yD[P]=Q;
this.fireEvent(d);
}},isColumnSortable:function(R){return (this.__yD?(this.__yD[R]!==false):true);
},sortByColumn:function(S,T){var W;
var V=this.__yC[S];

if(V){W=(T?V.ascending:V.descending);
}else{if(this.getCaseSensitiveSorting()){W=(T?qx.ui.table.model.Simple._defaultSortComparatorAscending:qx.ui.table.model.Simple._defaultSortComparatorDescending);
}else{W=(T?qx.ui.table.model.Simple._defaultSortComparatorInsensitiveAscending:qx.ui.table.model.Simple._defaultSortComparatorInsensitiveDescending);
}}W.columnIndex=S;
this.__yA.sort(W);
this.__yB=S;
this.__yE=T;
var U={columnIndex:S,ascending:T};
this.fireDataEvent(a,U);
this.fireEvent(d);
},setSortMethods:function(X,Y){var ba;

if(qx.lang.Type.isFunction(Y)){ba={ascending:Y,descending:function(bb,bc){return Y(bc,bb);
}};
}else{ba=Y;
}this.__yC[X]=ba;
},getSortMethods:function(bd){return this.__yC[bd];
},clearSorting:function(){if(this.__yB!=-1){this.__yB=-1;
this.__yE=true;
this.fireEvent(d);
}},getSortColumnIndex:function(){return this.__yB;
},_setSortColumnIndex:function(be){this.__yB=be;
},isSortAscending:function(){return this.__yE;
},_setSortAscending:function(bf){this.__yE=bf;
},getRowCount:function(){return this.__yA.length;
},getValue:function(bg,bh){if(bh<0||bh>=this.__yA.length){throw new Error("this.__rowArr out of bounds: "+bh+" (0.."+this.__yA.length+")");
}return this.__yA[bh][bg];
},setValue:function(bi,bj,bk){if(this.__yA[bj][bi]!=bk){this.__yA[bj][bi]=bk;
if(this.hasListener(e)){var bl={firstRow:bj,lastRow:bj,firstColumn:bi,lastColumn:bi};
this.fireDataEvent(e,bl);
}
if(bi==this.__yB){this.clearSorting();
}}},setData:function(bm,bn){this.__yA=bm;
if(this.hasListener(e)){var bo={firstRow:0,lastRow:bm.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bo);
}
if(bn!==false){this.clearSorting();
}},getData:function(){return this.__yA;
},setDataAsMapArray:function(bp,bq,br){this.setData(this._mapArray2RowArr(bp,bq),br);
},addRows:function(bs,bt,bu){if(bt==null){bt=this.__yA.length;
}bs.splice(0,0,bt,0);
Array.prototype.splice.apply(this.__yA,bs);
var bv={firstRow:bt,lastRow:this.__yA.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bv);

if(bu!==false){this.clearSorting();
}},addRowsAsMapArray:function(bw,bx,by,bz){this.addRows(this._mapArray2RowArr(bw,by),bx,bz);
},setRows:function(bA,bB,bC){if(bB==null){bB=0;
}bA.splice(0,0,bB,bA.length);
Array.prototype.splice.apply(this.__yA,bA);
var bD={firstRow:bB,lastRow:this.__yA.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(e,bD);

if(bC!==false){this.clearSorting();
}},setRowsAsMapArray:function(bE,bF,bG,bH){this.setRows(this._mapArray2RowArr(bE,bG),bF,bH);
},removeRows:function(bI,bJ,bK){this.__yA.splice(bI,bJ);
var bL={firstRow:bI,lastRow:this.__yA.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1,removeStart:bI,removeCount:bJ};
this.fireDataEvent(e,bL);

if(bK!==false){this.clearSorting();
}},_mapArray2RowArr:function(bM,bN){var bR=bM.length;
var bO=this.getColumnCount();
var bQ=new Array(bR);
var bP;

for(var i=0;i<bR;++i){bP=[];

if(bN){bP.originalData=bM[i];
}
for(var j=0;j<bO;++j){bP[j]=bM[i][this.getColumnId(j)];
}bQ[i]=bP;
}return bQ;
}},destruct:function(){this.__yA=this.__wF=this.__yC=this.__yD=null;
}});
})();
(function(){var m="distinctValues",k="item",j="copy",h="name",g="items",f="orderChanged",d="fce.view.Table",c="A",b="changeSelectedItems",a="_applyModel",A="visibilityChanged",z="changeSelection",w="droprequest",v="String",u="dragstart",t="",s="number",r="changeSourceProperty",q="main",p="keyup",n="boolean",o="_applyFilter";
qx.Class.define(d,{extend:qx.ui.table.Table,construct:function(){qx.ui.table.Table.call(this);
this.setColumnVisibilityButtonVisible(false);
var B=this.getSelectionModel();
B.setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
B.addListener(z,this.__Oo,this);
this.__Om=[];
this._setUpDragDrop();
this.setDecorator(q);
this.addListener(p,function(C){var E=C.getKeyIdentifier();

if(E===c&&C.isCtrlPressed()){var D=this.getTableModel().getRowCount()-1;
this.getSelectionModel().addSelectionInterval(0,D);
}},this);
},properties:{model:{apply:a},selectedItems:{init:new qx.data.Array(),event:b},sourceProperty:{init:null,nullable:true,check:v,event:r},filter:{apply:o}},members:{__Om:null,__On:function(F){var G=F.col;

switch(typeof F.rowData[G]){case n:return new qx.ui.table.cellrenderer.Boolean();
case s:return new qx.ui.table.cellrenderer.Number();
default:return new qx.ui.table.cellrenderer.String();
}},_setUpDragDrop:function(){this.setDraggable(true);
this.addListener(u,function(e){e.addType(g);
e.addAction(j);
});
this.addListener(w,function(e){var H=e.getCurrentAction();
var J=e.getCurrentType();

if(J==g&&H==j){var I=this.getSelectedItems();
e.addData(J,I);
}},this);
},__Oo:function(){var K=this.getTableModel().getColumnCount()-1;
this.getSelectedItems().removeAll();
this.getSelectionModel().iterateSelection(function(L){var M=this.getTableModel().getValue(K,L);
this.getSelectedItems().push(M);
},this);
},_applyModel:function(N,O){var P=new qx.ui.table.model.Filtered();
this.__Om=this._getModelProperties(N);

if(this.__Om.indexOf(m)>=0){this.__Om.push(qx.lang.Array.removeAt(this.__Om,this.__Om.indexOf(m)));
}this.__Om.push(k);
P.setColumns(this.__Om);
P.setData(this._getRowData(N));
this.setTableModel(P);
this._configureColumnModel();
},_getModelProperties:function(Q){var T=[];

for(var i=0,l=Q.length;i<l;i++){var S=Q.getItem(i);
var U=qx.util.PropertyUtil.getProperties(S.constructor);

for(var R in U){if(!qx.lang.Array.contains(T,R)){T.push(R);
}}}return T;
},_getRowData:function(V){var Y=[];

for(var i=0,l=V.length;i<l;i++){var bb=[];
var X=V.getItem(i);
var ba=qx.util.PropertyUtil.getProperties(X.constructor);

for(var x=0,y=this.__Om.length;x<y;x++){var W=this.__Om[x];

if(W in ba){bb.push(X.get(W));
}else if(W==k){bb.push(X);
}else{bb.push(undefined);
}}Y.push(bb);
}return Y;
},_configureColumnModel:function(){var bd=this.getTableColumnModel();
bd.addListener(f,function(bf){this.setSourceProperty(this._getFirstVisibleColumnId());
},this);
bd.addListener(A,function(bg){this.setSourceProperty(this._getFirstVisibleColumnId());
},this);
var bc=new qx.ui.table.cellrenderer.Dynamic(this.__On);
var be=this.getTableModel().getColumnCount()-1;

for(var i=1;i<be;i++){bd.setDataCellRenderer(i,bc);
}bd.setColumnWidth(0,200);
bd.setColumnVisible(be,false);
},_getFirstVisibleColumnId:function(){var bi=this.getTableModel();
var bj=this.getTableColumnModel().getVisibleColumns();

for(var i=0,l=bj.length;i<l;i++){var bh=bi.getColumnId(bj[i]);

if(bh!==h&&bh!==m){return bi.getColumnId(bj[i]);
}}return null;
},_applyFilter:function(bk,bl){var bm=this.getTableModel();

if(bl){bm.resetHiddenRows();
}
if(bk&&bk!==t){bm.addNotRegex(bk,h);
bm.applyFilters();
}this.getSelectionModel().resetSelection();
}}});
})();
(function(){var j="px",i="no-repeat",h="repeat",g="gecko",f="scale",e="string",d="static",c="'",b="qx.ui.table.cellrenderer.AbstractImage",a="}",A="  text-align:center;",z="scale-x",y="repeat-y",x=".qooxdoo-table-cell-icon {",w="",v="<div></div>",u="top",t="engine.version",s="engine.name",r="abstract",p=" qooxdoo-table-cell-icon",q="inline-block",n="repeat-x",o="  padding-top:1px;",l="title='",m="scale-y",k="-moz-inline-box";
qx.Class.define(b,{extend:qx.ui.table.cellrenderer.Abstract,type:r,construct:function(){qx.ui.table.cellrenderer.Abstract.call(this);
var B=this.self(arguments);

if(!B.stylesheet){B.stylesheet=qx.bom.Stylesheet.createElement(x+A+o+a);
}},properties:{repeat:{check:function(C){var D=[f,z,m,h,n,y,i];
return qx.lang.Array.contains(D,C);
},init:i}},members:{__AG:16,__AH:16,__Ii:null,_insetY:2,_identifyImage:function(E){throw new Error("_identifyImage is abstract");
},_getImageInfos:function(F){var G=this._identifyImage(F);
if(G==null||typeof G==e){G={url:G,tooltip:null};
}if(!G.imageWidth||!G.imageHeight){var H=this.__AI(G.url);
G.imageWidth=H.width;
G.imageHeight=H.height;
}G.width=G.imageWidth;
G.height=G.imageHeight;
return G;
},__AI:function(I){var L=qx.util.ResourceManager.getInstance();
var K=qx.io.ImageLoader;
var J,M;
if(L.has(I)){J=L.getImageWidth(I);
M=L.getImageHeight(I);
}else if(K.isLoaded(I)){J=K.getWidth(I);
M=K.getHeight(I);
}else{J=this.__AG;
M=this.__AH;
}return {width:J,height:M};
},createDataCellHtml:function(N,O){this.__Ii=this._getImageInfos(N);
return qx.ui.table.cellrenderer.Abstract.prototype.createDataCellHtml.call(this,N,O);
},_getCellClass:function(P){return qx.ui.table.cellrenderer.Abstract.prototype._getCellClass.call(this)+p;
},_getContentHtml:function(Q){var content=v;
if(this.__Ii.url){content=qx.bom.element.Decoration.create(this.__Ii.url,this.getRepeat(),{width:this.__Ii.width+j,height:this.__Ii.height+j,display:qx.core.Environment.get(s)==g&&qx.core.Environment.get(t)<1.9?k:q,verticalAlign:u,position:d});
}return content;
},_getCellAttributes:function(R){var S=this.__Ii.tooltip;

if(S){return l+S+c;
}else{return w;
}}},destruct:function(){this.__Ii=null;
}});
})();
(function(){var g="String",f="_applyIconTrue",e="decoration/table/boolean-true.png",d="qx.ui.table.cellrenderer.Boolean",c=";padding-top:4px;",b="decoration/table/boolean-false.png",a="_applyIconFalse";
qx.Class.define(d,{extend:qx.ui.table.cellrenderer.AbstractImage,construct:function(){qx.ui.table.cellrenderer.AbstractImage.call(this);
this.__Gj=qx.util.AliasManager.getInstance();
this.initIconTrue();
this.initIconFalse();
},properties:{iconTrue:{check:g,init:e,apply:f},iconFalse:{check:g,init:b,apply:a}},members:{__BO:null,__BP:false,__Gj:null,_applyIconTrue:function(h){this.__BO=this.__Gj.resolve(h);
},_applyIconFalse:function(i){this.__BP=this.__Gj.resolve(i);
},_insetY:5,_getCellStyle:function(j){return qx.ui.table.cellrenderer.AbstractImage.prototype._getCellStyle.call(this,j)+c;
},_identifyImage:function(k){var l={imageWidth:11,imageHeight:11};

switch(k.value){case true:l.url=this.__BO;
break;
case false:l.url=this.__BP;
break;
default:l.url=null;
break;
}return l;
}},destruct:function(){this.__Gj=null;
}});
})();
(function(){var o="==",n="",m=">",l="between",k="<",j="regex",h="!between",g=">=",f="!=",e="<=",b=";",d='g',c=":",a="qx.ui.table.cellrenderer.Conditional";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Default,construct:function(p,q,r,s){qx.ui.table.cellrenderer.Default.call(this);
this.numericAllowed=[o,f,m,k,g,e];
this.betweenAllowed=[l,h];
this.conditions=[];
this.__BS=p||"";
this.__BT=q||"";
this.__BU=r||"";
this.__BV=s||"";
},members:{__BS:null,__BT:null,__BU:null,__BV:null,__CJ:function(t,u){if(t[1]!=null){u["text-align"]=t[1];
}
if(t[2]!=null){u["color"]=t[2];
}
if(t[3]!=null){u["font-style"]=t[3];
}
if(t[4]!=null){u["font-weight"]=t[4];
}},addNumericCondition:function(v,w,x,y,z,A,B){var C=null;

if(qx.lang.Array.contains(this.numericAllowed,v)){if(w!=null){C=[v,x,y,z,A,w,B];
}}
if(C!=null){this.conditions.push(C);
}else{throw new Error("Condition not recognized or value is null!");
}},addBetweenCondition:function(D,E,F,G,H,I,J,K){if(qx.lang.Array.contains(this.betweenAllowed,D)){if(E!=null&&F!=null){var L=[D,G,H,I,J,E,F,K];
}}
if(L!=null){this.conditions.push(L);
}else{throw new Error("Condition not recognized or value1/value2 is null!");
}},addRegex:function(M,N,O,P,Q,R){if(M!=null){var S=[j,N,O,P,Q,M,R];
}
if(S!=null){this.conditions.push(S);
}else{throw new Error("regex cannot be null!");
}},_getCellStyle:function(T){if(!this.conditions.length){return T.style||n;
}var Y=T.table.getTableModel();
var i;
var bb;
var U;
var W={"text-align":this.__BS,"color":this.__BT,"font-style":this.__BU,"font-weight":this.__BV};

for(i in this.conditions){bb=false;

if(qx.lang.Array.contains(this.numericAllowed,this.conditions[i][0])){if(this.conditions[i][6]==null){U=T.value;
}else{U=Y.getValueById(this.conditions[i][6],T.row);
}
switch(this.conditions[i][0]){case o:if(U==this.conditions[i][5]){bb=true;
}break;
case f:if(U!=this.conditions[i][5]){bb=true;
}break;
case m:if(U>this.conditions[i][5]){bb=true;
}break;
case k:if(U<this.conditions[i][5]){bb=true;
}break;
case g:if(U>=this.conditions[i][5]){bb=true;
}break;
case e:if(U<=this.conditions[i][5]){bb=true;
}break;
}}else if(qx.lang.Array.contains(this.betweenAllowed,this.conditions[i][0])){if(this.conditions[i][7]==null){U=T.value;
}else{U=Y.getValueById(this.conditions[i][7],T.row);
}
switch(this.conditions[i][0]){case l:if(U>=this.conditions[i][5]&&U<=this.conditions[i][6]){bb=true;
}break;
case h:if(U<this.conditions[i][5]&&U>this.conditions[i][6]){bb=true;
}break;
}}else if(this.conditions[i][0]==j){if(this.conditions[i][6]==null){U=T.value;
}else{U=Y.getValueById(this.conditions[i][6],T.row);
}var V=new RegExp(this.conditions[i][5],d);
bb=V.test(U);
}if(bb==true){this.__CJ(this.conditions[i],W);
}}var ba=[];

for(var X in W){if(W[X]){ba.push(X,c,W[X],b);
}}return ba.join(n);
}},destruct:function(){this.numericAllowed=this.betweenAllowed=this.conditions=null;
}});
})();
(function(){var e="",d="qooxdoo-table-cell qooxdoo-table-cell-right",c="0",b="qx.util.format.NumberFormat",a="qx.ui.table.cellrenderer.Number";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Conditional,properties:{numberFormat:{check:b,init:null,nullable:true}},members:{_getContentHtml:function(f){var g=this.getNumberFormat();

if(g){if(f.value||f.value==0){return g.format(f.value);
}else{return e;
}}else{return f.value==0?c:(f.value||e);
}},_getCellClass:function(h){return d;
}}});
})();
(function(){var c="qx.ui.table.cellrenderer.String",b="qooxdoo-table-cell",a="";
qx.Class.define(c,{extend:qx.ui.table.cellrenderer.Conditional,members:{_getContentHtml:function(d){return qx.bom.String.escape(d.value||a);
},_getCellClass:function(e){return b;
}}});
})();
(function(){var p='g',o="==",n=">",m="notregex",l="between",k="<",j="regex",h='gi',g="!between",f=">=",c="dataChanged",e="!=",d="<=",b="qx.ui.table.model.Filtered",a='';
qx.Class.define(b,{extend:qx.ui.table.model.Simple,construct:function(){qx.ui.table.model.Simple.call(this);
this.numericAllowed=new Array(o,e,n,k,f,d);
this.betweenAllowed=new Array(l,g);
this.__BW=false;
this.Filters=new Array();
},members:{__BX:null,__BW:null,_js_in_array:function(q,r){var s=r.toString();

if(s==a){return false;
}var u=new RegExp(q,p);
var t=u.test(r);
return t;
},addBetweenFilter:function(v,w,x,y){if(this._js_in_array(v,this.betweenAllowed)&&y!=null){if(w!=null&&x!=null){var z=new Array(v,w,x,y);
}}
if(z!=null){this.Filters.push(z);
}else{throw new Error("Filter not recognized or value1/value2 is null!");
}},addNumericFilter:function(A,B,C){var D=null;

if(this._js_in_array(A,this.numericAllowed)&&C!=null){if(B!=null){D=[A,B,C];
}}
if(D!=null){this.Filters.push(D);
}else{throw new Error("Filter not recognized: value or target is null!");
}},addRegex:function(E,F,G){var I;

if(G){I=h;
}else{I=p;
}
if(E!=null&&F!=null){var H=new Array(j,E,F,I);
}
if(H!=null){this.Filters.push(H);
}else{throw new Error("regex cannot be null!");
}},addNotRegex:function(J,K,L){var N;

if(L){N=h;
}else{N=p;
}
if(J!=null&&K!=null){var M=new Array(m,J,K,N);
}
if(M!=null){this.Filters.push(M);
}else{throw new Error("notregex cannot be null!");
}},applyFilters:function(){var i;
var S;
var O;
var R=this.getData();
var P=R.length;

for(var U=0;U<P;U++){S=false;

for(i in this.Filters){if(this._js_in_array(this.Filters[i][0],this.numericAllowed)&&S==false){O=this.getValueById(this.Filters[i][2],U);

switch(this.Filters[i][0]){case o:if(O==this.Filters[i][1]){S=true;
}break;
case e:if(O!=this.Filters[i][1]){S=true;
}break;
case n:if(O>this.Filters[i][1]){S=true;
}break;
case k:if(O<this.Filters[i][1]){S=true;
}break;
case f:if(O>=this.Filters[i][1]){S=true;
}break;
case d:if(O<=this.Filters[i][1]){S=true;
}break;
}}else if(this._js_in_array(this.Filters[i][0],this.betweenAllowed)&&S==false){O=this.getValueById(this.Filters[i][3],U);

switch(this.Filters[i][0]){case l:if(O>=this.Filters[i][1]&&O<=this.Filters[i][2]){S=true;
}break;
case g:if(O<this.Filters[i][1]&&O>this.Filters[i][2]){S=true;
}break;
}}else if(this.Filters[i][0]==j&&S==false){O=this.getValueById(this.Filters[i][2],U);
var Q=new RegExp(this.Filters[i][1],this.Filters[i][3]);
S=Q.test(O);
}else if(this.Filters[i][0]==m&&S==false){O=this.getValueById(this.Filters[i][2],U);
var Q=new RegExp(this.Filters[i][1],this.Filters[i][3]);
S=!Q.test(O);
}}if(S==true){this.hideRows(U,1,false);
U--;
P--;
}}var T={firstRow:0,lastRow:P-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(c,T);
},hideRows:function(V,W,dispatchEvent){var Y=this.getData();
dispatchEvent=(dispatchEvent!=null?dispatchEvent:true);

if(!this.__BW){this.__BX=Y.slice(0);
this.__BW=true;
}
if(W==null||W<1){W=1;
}
for(var X=V;X<(Y.length-W);X++){Y[X]=Y[X+W];
}this.removeRows(X,W);
if(dispatchEvent){var ba={firstRow:0,lastRow:Y.length-1,firstColumn:0,lastColumn:this.getColumnCount()-1};
this.fireDataEvent(c,ba);
}},resetHiddenRows:function(){if(!this.__BX){return ;
}this.Filters=[];
this.setData(qx.lang.Array.clone(this.__BX));
},setData:function(bb,bc){this.__BX=qx.lang.Array.clone(bb);
this.Filters=[];
qx.ui.table.model.Simple.prototype.setData.call(this,bb,bc);
}},destruct:function(){this.__BX=this.numericAllowed=this.betweenAllowed=this.Filters=null;
}});
})();
(function(){var d="$$theme_",c="$$user_",b="$$init_",a="qx.util.PropertyUtil";
qx.Class.define(a,{statics:{getProperties:function(e){return e.$$properties;
},getAllProperties:function(f){var i={};
var j=f;
while(j!=qx.core.Object){var h=this.getProperties(j);

for(var g in h){i[g]=h[g];
}j=j.superclass;
}return i;
},getUserValue:function(k,l){return k[c+l];
},setUserValue:function(m,n,o){m[c+n]=o;
},deleteUserValue:function(p,q){delete (p[c+q]);
},getInitValue:function(r,s){return r[b+s];
},setInitValue:function(t,u,v){t[b+u]=v;
},deleteInitValue:function(w,x){delete (w[b+x]);
},getThemeValue:function(y,z){return y[d+z];
},setThemeValue:function(A,B,C){A[d+B]=C;
},deleteThemeValue:function(D,E){delete (D[d+E]);
},setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;
F[I[G]](H);
},resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;
J[L[K]]();
}}});
})();
(function(){var b="Function",a="qx.ui.table.cellrenderer.Dynamic";
qx.Class.define(a,{extend:qx.ui.table.cellrenderer.Default,construct:function(c){qx.ui.table.cellrenderer.Default.call(this);

if(c){this.setCellRendererFactoryFunction(c);
}},properties:{cellRendererFactoryFunction:{check:b,nullable:true,init:null}},members:{createDataCellHtml:function(d,e){var g=this.getCellRendererFactoryFunction();

if(!g){throw new Error("No function provided! Aborting.");
}var f=g(d);
return f.createDataCellHtml(d,e);
}}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="os.name",g="osx",f="under",d="PageUp",c="Left",O="lead",N="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",v="click",w="above",t="left",u="Escape",r="A",s="Space",p="__oL",q="_applyMode",x="interval",y="changeSelection",A="qx.event.type.Data",z="quick",C="key",B="abstract",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:B,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iC={};
},events:{"changeSelection":A},properties:{mode:{check:[n,j,k,o],init:n,apply:q},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__oJ:0,__oK:0,__oL:null,__oM:null,__oN:null,__oO:null,__oP:null,__oQ:null,__oR:null,__oS:null,__oT:null,__oU:null,__oV:null,__oW:null,__oX:null,__oY:null,__pa:null,__iC:null,__pb:null,__pc:null,_userInteraction:false,__pd:null,getSelectionContext:function(){return this.__oY;
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
}else{if(this._getAnchorItem()==null){this._setAnchorItem(S);
}this._setLeadItem(S);
this._addToSelection(S);
}this._scrollItemIntoView(S);
this._fireChange();
},removeItem:function(U){this._removeFromSelection(U);

if(this.getMode()===o&&this.isSelectionEmpty()){var V=this._applyDefaultSelection();
if(V==U){return;
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
},clearSelection:function(){if(this.getMode()==o){var ba=this._applyDefaultSelection(true);

if(ba!=null){return;
}}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bb){var bc=this.getMode();

if(bc==o||bc===n){if(bb.length>1){throw new Error("Could not select more than one items in mode: "+bc+"!");
}
if(bb.length==1){this.selectItem(bb[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bb);
}},getSelectedItem:function(){var bd=this.getMode();

if(bd===n||bd===o){var be=this._getSelectedItem();
return be!=undefined?be:null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__iC);
},getSortedSelection:function(){var bg=this.getSelectables();
var bf=qx.lang.Object.getValues(this.__iC);
bf.sort(function(a,b){return bg.indexOf(a)-bg.indexOf(b);
});
return bf;
},isItemSelected:function(bh){var bi=this._selectableToHashCode(bh);
return this.__iC[bi]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__iC);
},invertSelection:function(){var bk=this.getMode();

if(bk===n||bk===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bj=this.getSelectables();

for(var i=0;i<bj.length;i++){this._toggleInSelection(bj[i]);
}this._fireChange();
},_setLeadItem:function(bl){var bm=this.__pa;

if(bm!==null){this._styleSelectable(bm,O,false);
}
if(bl!==null){this._styleSelectable(bl,O,true);
}this.__pa=bl;
},getLeadItem:function(){return this.__pa!==null?this.__pa:null;
},_setAnchorItem:function(bn){var bo=this.__pb;

if(bo!=null){this._styleSelectable(bo,J,false);
}
if(bn!=null){this._styleSelectable(bn,J,true);
}this.__pb=bn;
},_getAnchorItem:function(){return this.__pb!==null?this.__pb:null;
},_isSelectable:function(bp){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bq=event.getTarget();
if(bq&&this._isSelectable(bq)){return bq;
}return null;
},_selectableToHashCode:function(br){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bs,bt,bu){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bv){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bw){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bx,by){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bz){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(bA){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bB,bC){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bD,bE){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bF,bG){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bH,bI){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bH===o){this._applyDefaultSelection(true);
}this._fireChange();
},handleMouseOver:function(event){if(this.__pd!=null&&this.__pd!=this._getScroll().top){this.__pd=null;
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
this._fireChange(z);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bM=this._getSelectableFromMouseEvent(event);

if(bM===null){this._userInteraction=false;
return;
}var bO=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bL=event.isShiftPressed();
if(this.isItemSelected(bM)&&!bL&&!bO&&!this.getDrag()){this.__pc=bM;
this._userInteraction=false;
return;
}else{this.__pc=null;
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

if(this.getDrag()&&bP!==n&&bP!==o&&!bL&&!bO){this.__oP=this._getLocation();
this.__oM=this._getScroll();
this.__oQ=event.getDocumentLeft()+this.__oM.left;
this.__oR=event.getDocumentTop()+this.__oM.top;
this.__oS=true;
this._capture();
}this._fireChange(v);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bT=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bQ=event.isShiftPressed();

if(!bT&&!bQ&&this.__pc!=null){var bR=this._getSelectableFromMouseEvent(event);

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
},handleMouseMove:function(event){if(!this.__oS){return;
}this.__oT=event.getDocumentLeft();
this.__oU=event.getDocumentTop();
this._userInteraction=true;
var bV=this.__oT+this.__oM.left;

if(bV>this.__oQ){this.__oV=1;
}else if(bV<this.__oQ){this.__oV=-1;
}else{this.__oV=0;
}var bU=this.__oU+this.__oM.top;

if(bU>this.__oR){this.__oW=1;
}else if(bU<this.__oR){this.__oW=-1;
}else{this.__oW=0;
}var location=this.__oP;

if(this.__oT<location.left){this.__oJ=this.__oT-location.left;
}else if(this.__oT>location.right){this.__oJ=this.__oT-location.right;
}else{this.__oJ=0;
}
if(this.__oU<location.top){this.__oK=this.__oU-location.top;
}else if(this.__oU>location.bottom){this.__oK=this.__oU-location.bottom;
}else{this.__oK=0;
}if(!this.__oL){this.__oL=new qx.event.Timer(100);
this.__oL.addListener(x,this._onInterval,this);
}this.__oL.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bW=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__oS){return;
}if(this.__oX){this._fireChange(v);
}delete this.__oS;
delete this.__oN;
delete this.__oO;
this._releaseCapture();
if(this.__oL){this.__oL.stop();
}},_onInterval:function(e){this._scrollBy(this.__oJ,this.__oK);
this.__oM=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cg=this._getDimension();
var bY=Math.max(0,Math.min(this.__oT-this.__oP.left,cg.width))+this.__oM.left;
var bX=Math.max(0,Math.min(this.__oU-this.__oP.top,cg.height))+this.__oM.top;
if(this.__oN===bY&&this.__oO===bX){return;
}this.__oN=bY;
this.__oO=bX;
var ci=this._getAnchorItem();
var cb=ci;
var ce=this.__oV;
var ch,ca;

while(ce!==0){ch=ce>0?this._getRelatedSelectable(cb,F):this._getRelatedSelectable(cb,t);
if(ch!==null){ca=this._getSelectableLocationX(ch);
if((ce>0&&ca.left<=bY)||(ce<0&&ca.right>=bY)){cb=ch;
continue;
}}break;
}var cf=this.__oW;
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
},__ok:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
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

if(ck!=null&&!cm){if(cl||cq===k){this._toggleInSelection(ck);
}else{this._setSelectedItem(ck);
}cn=true;
}}else if(this.__ok[cr]){cn=true;

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
}this.__pd=this._getScroll().top;
this._scrollItemIntoView(co);
}}
if(cn){event.stop();
this._fireChange(C);
}this._userInteraction=false;
},_selectAllItems:function(){var ct=this.getSelectables();

for(var i=0,l=ct.length;i<l;i++){this._addToSelection(ct[i]);
}},_clearSelection:function(){var cu=this.__iC;

for(var cv in cu){this._removeFromSelection(cu[cv]);
}this.__iC={};
},_selectItemRange:function(cw,cx,cy){var cB=this._getSelectableRange(cw,cx);
if(!cy){var cA=this.__iC;
var cC=this.__pe(cB);

for(var cz in cA){if(!cC[cz]){this._removeFromSelection(cA[cz]);
}}}for(var i=0,l=cB.length;i<l;i++){this._addToSelection(cB[i]);
}},_deselectItemRange:function(cD,cE){var cF=this._getSelectableRange(cD,cE);

for(var i=0,l=cF.length;i<l;i++){this._removeFromSelection(cF[i]);
}},__pe:function(cG){var cI={};
var cH;

for(var i=0,l=cG.length;i<l;i++){cH=cG[i];
cI[this._selectableToHashCode(cH)]=cH;
}return cI;
},_getSelectedItem:function(){for(var cJ in this.__iC){return this.__iC[cJ];
}return null;
},_setSelectedItem:function(cK){if(this._isSelectable(cK)){var cL=this.__iC;
var cM=this._selectableToHashCode(cK);

if(!cL[cM]||qx.lang.Object.hasMinLength(cL,2)){this._clearSelection();
this._addToSelection(cK);
}}},_addToSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(this.__iC[cO]==null&&this._isSelectable(cN)){this.__iC[cO]=cN;
this._styleSelectable(cN,m,true);
this.__oX=true;
}},_toggleInSelection:function(cP){var cQ=this._selectableToHashCode(cP);

if(this.__iC[cQ]==null){this.__iC[cQ]=cP;
this._styleSelectable(cP,m,true);
}else{delete this.__iC[cQ];
this._styleSelectable(cP,m,false);
}this.__oX=true;
},_removeFromSelection:function(cR){var cS=this._selectableToHashCode(cR);

if(this.__iC[cS]!=null){delete this.__iC[cS];
this._styleSelectable(cR,m,false);
this.__oX=true;
}},_replaceMultiSelection:function(cT){var cW=false;
var da,cY;
var cU={};

for(var i=0,l=cT.length;i<l;i++){da=cT[i];

if(this._isSelectable(da)){cY=this._selectableToHashCode(da);
cU[cY]=da;
}}var db=cT[0];
var cV=da;
var cX=this.__iC;

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
this.__oX=true;
this._fireChange();
},_fireChange:function(dc){if(this.__oX){this.__oY=dc||null;
this.fireDataEvent(y,this.getSelection());
delete this.__oX;
}},_applyDefaultSelection:function(dd){if(dd===true||this.getMode()===o&&this.isSelectionEmpty()){var de=this._getFirstSelectable();

if(de!=null){this.selectItem(de);
}return de;
}return null;
}},destruct:function(){this._disposeObjects(p);
this.__iC=this.__pc=this.__pb=null;
this.__pa=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(g){qx.ui.core.selection.Abstract.call(this);
this.__cj=g;
},members:{__cj:null,_isSelectable:function(h){return this._isItemSelectable(h)&&h.getLayoutParent()===this.__cj;
},_selectableToHashCode:function(j){return j.$$hash;
},_styleSelectable:function(k,m,n){n?k.addState(m):k.removeState(m);
},_capture:function(){this.__cj.capture();
},_releaseCapture:function(){this.__cj.releaseCapture();
},_isItemSelectable:function(o){if(this._userInteraction){return o.isVisible()&&o.isEnabled();
}else{return o.isVisible();
}},_getWidget:function(){return this.__cj;
},_getLocation:function(){var p=this.__cj.getContentElement().getDomElement();
return p?qx.bom.element.Location.get(p):null;
},_getDimension:function(){return this.__cj.getInnerSize();
},_getSelectableLocationX:function(q){var r=q.getBounds();

if(r){return {left:r.left,right:r.left+r.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(w){this.__cj.scrollChildIntoView(w);
},getSelectables:function(x){var y=false;

if(!x){y=this._userInteraction;
this._userInteraction=true;
}var B=this.__cj.getChildren();
var z=[];
var A;

for(var i=0,l=B.length;i<l;i++){A=B[i];

if(this._isItemSelectable(A)){z.push(A);
}}this._userInteraction=y;
return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__cj.getChildren();
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
},_getFirstSelectable:function(){var I=this.__cj.getChildren();

for(var i=0,l=I.length;i<l;i++){if(this._isItemSelectable(I[i])){return I[i];
}}return null;
},_getLastSelectable:function(){var J=this.__cj.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(K,L){var O=this.__cj.getOrientation()===f;
var N=this.__cj.getChildren();
var M=N.indexOf(K);
var P;

if((O&&L===d)||(!O&&L===b)){for(var i=M-1;i>=0;i--){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}else if((O&&L===e)||(!O&&L===a)){for(var i=M+1;i<N.length;i++){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__cj=null;
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
(function(){var f="change",d="__lU",c="qx.event.type.Data",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__lU=new qx.data.Array();
this.__lU.addListener(f,this.__lX,this);
this.addListener(a,this.__lW,this);
},events:{changeModelSelection:c},members:{__lU:null,__lV:false,__lW:function(){if(this.__lV){return;
}var k=this.getSelection();
var g=[];

for(var i=0;i<k.length;i++){var l=k[i];
var h=l.getModel?l.getModel():null;

if(h!==null){g.push(h);
}}if(g.length===k.length){try{this.setModelSelection(g);
}catch(e){throw new Error("Could not set the model selection. Maybe your models are not unique?");
}}},__lX:function(){this.__lV=true;
var n=this.getSelectables(true);
var p=[];
var o=this.__lU.toArray();

for(var i=0;i<o.length;i++){var r=o[i];

for(var j=0;j<n.length;j++){var s=n[j];
var m=s.getModel?s.getModel():null;

if(r===m){p.push(s);
break;
}}}this.setSelection(p);
this.__lV=false;
var q=this.getSelection();

if(!qx.lang.Array.equals(q,p)){this.__lW();
}},getModelSelection:function(){return this.__lU;
},setModelSelection:function(t){if(!t){this.__lU.removeAll();
return;
}t.unshift(this.__lU.getLength());
t.unshift(0);
var u=this.__lU.splice.apply(this.__lU,t);
u.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="mouseup",q="mousedown",p="losecapture",o="multi",n="_applyQuickSelection",m="mouseover",d="_applySelectionMode",l="_applyDragSelection",h="qx.ui.core.MMultiSelectionHandling",c="__x",b="removeItem",g="keypress",f="qx.event.type.Data",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(h,{construct:function(){var x=this.SELECTION_MANAGER;
var w=this.__x=new x(this);
this.addListener(q,w.handleMouseDown,w);
this.addListener(r,w.handleMouseUp,w);
this.addListener(m,w.handleMouseOver,w);
this.addListener(k,w.handleMouseMove,w);
this.addListener(p,w.handleLoseCapture,w);
this.addListener(g,w.handleKeyPress,w);
this.addListener(j,w.handleAddItem,w);
this.addListener(b,w.handleRemoveItem,w);
w.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[v,o,a,t],init:v,apply:d},dragSelection:{check:u,init:false,apply:l},quickSelection:{check:u,init:false,apply:n}},members:{__x:null,selectAll:function(){this.__x.selectAll();
},isSelected:function(y){if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not test if "+y+" is selected, because it is not a child element!");
}return this.__x.isItemSelected(y);
},addToSelection:function(z){if(!qx.ui.core.Widget.contains(this,z)){throw new Error("Could not add + "+z+" to selection, because it is not a child element!");
}this.__x.addItem(z);
},removeFromSelection:function(A){if(!qx.ui.core.Widget.contains(this,A)){throw new Error("Could not remove "+A+" from selection, because it is not a child element!");
}this.__x.removeItem(A);
},selectRange:function(B,C){this.__x.selectItemRange(B,C);
},resetSelection:function(){this.__x.clearSelection();
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{var E=this.getSelection();

if(!qx.lang.Array.equals(E,D)){this.__x.replaceSelection(D);
}}},getSelection:function(){return this.__x.getSelection();
},getSortedSelection:function(){return this.__x.getSortedSelection();
},isSelectionEmpty:function(){return this.__x.isSelectionEmpty();
},getSelectionContext:function(){return this.__x.getSelectionContext();
},_getManager:function(){return this.__x;
},getSelectables:function(F){return this.__x.getSelectables(F);
},invertSelection:function(){this.__x.invertSelection();
},_getLeadItem:function(){var G=this.__x.getMode();

if(G===v||G===t){return this.__x.getSelectedItem();
}else{return this.__x.getLeadItem();
}},_applySelectionMode:function(H,I){this.__x.setMode(H);
},_applyDragSelection:function(J,K){this.__x.setDrag(J);
},_applyQuickSelection:function(L,M){this.__x.setQuick(L);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
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
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="text",d="Boolean",c="one",b="addChildWidget",a="_applySpacing",A="Enter",z="Integer",y="action",x="keyinput",w="addItem",v="__oG",u="removeChildWidget",t="_applyOrientation",s="single",r="keypress",p="list",q="label",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(B){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__oG=this._createListItemContainer();
this.__oG.addListener(b,this._onAddChild,this);
this.__oG.addListener(u,this._onRemoveChild,this);
this.getChildControl(n).add(this.__oG);
if(B){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(r,this._onKeyPress);
this.addListener(x,this._onKeyInput);
this.__pK=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:t},spacing:{check:z,init:0,apply:a,themeable:true},enableInlineFind:{check:d,init:true}},members:{__pK:null,__pL:null,__oG:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__oG;
},_onAddChild:function(e){this.fireDataEvent(w,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_createListItemContainer:function(){return new qx.ui.container.Composite;
},_applyOrientation:function(C,D){var E=C===m;
var F=E?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__oG;
content.setLayout(F);
content.setAllowGrowX(!E);
content.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},_applySpacing:function(G,H){this.__oG.getLayout().setSpacing(G);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==A&&!e.isAltPressed()){var I=this.getSelection();

for(var i=0;i<I.length;i++){I[i].fireEvent(y);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var J=this.getSelectionMode();

if(!(J===s||J===c)){return;
}if(((new Date).valueOf()-this.__pL)>1000){this.__pK=h;
}this.__pK+=e.getChar();
var K=this.findItemByLabelFuzzy(this.__pK);
if(K){this.setSelection([K]);
}this.__pL=(new Date).valueOf();
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
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var k="keypress",j="change",h="items",g="name",f="fce.view.List",e="multi",d="dragover",c="changeSelectedItems",b="Delete",a="drop";
qx.Class.define(f,{extend:qx.ui.form.List,construct:function(m){qx.ui.form.List.call(this,m);
this.set({enableInlineFind:true,selectionMode:e});
this._setUpDragDrop();
this.addListener(k,function(p){if(p.getKeyIdentifier()===b){this.removeSelected();
}},this);
var o=new qx.data.Array();
o.addListener(j,this.__Ip,this);
this.setSelectedItems(o);
this.__Op=[];
var n=this._getManager();
this.removeListener(k,n.handleKeyPress,n);
},properties:{selectedItems:{event:c},modelValueProperty:{init:null,nullable:true}},members:{__Op:null,_setUpDragDrop:function(){this.setDroppable(true);
this.addListener(a,function(q){var r=q.getData(h);
this.addItemsUnique(r);
},this);
this.addListener(d,function(s){if(!s.supportsType(h)){s.preventDefault();
}});
},__Ip:function(){if(!this.getModelValueProperty()){return;
}var t=this.getSelectedItems();

for(var i=0,l=t.length;i<l;i++){var u=t.getItem(i);

if(!this.isItemListed(u)){var v=new fce.view.ListItem(u,this.getModelValueProperty(),g);
this.add(v);
this.__Op.push(u);
}}},isItemListed:function(w){if(qx.lang.Array.contains(this.__Op,w)){return true;
}var x=w.getName();

for(var i=0,l=this.__Op.length;i<l;i++){if(this.__Op[i].getName()===x){return true;
}}return false;
},removeSelected:function(){var z=this.getSelection();

for(var i=0,l=z.length;i<l;i++){var y=z[i].getModelItem();
this.getSelectedItems().remove(y);
z[i].destroy();
qx.lang.Array.remove(this.__Op,y);
}},addItemsUnique:function(A){for(var i=0,l=A.length;i<l;i++){var B=this.getSelectedItems();

if(!B.contains(A.getItem(i))){B.push(A.getItem(i));
}}}},destruct:function(){this.getSelectedItems().removeListener(j,this.__Ip,this);
this.__Op=null;
}});
})();
(function(){var k="label",j="checkbox",i="textfield",h="listitem",g="bigger",f="boolean",e="",d="_applyModelItem",c="fce.view.ListItem",b="value",a="number";
qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(l,m,n){var o=new qx.ui.layout.HBox(10);
qx.ui.container.Composite.call(this,o);
this.set({padding:5,appearance:h});

if(m){this.setValueProperty(m);
}
if(n){this.setLabelProperty(n);
}
if(l){this.setModelItem(l);
}},properties:{modelItem:{apply:d},labelProperty:{init:null,nullable:true},valueProperty:{init:null,nullable:true},gap:{themeable:true}},members:{_applyModelItem:function(p,q){var t=p;
var s=this.getChildControl(k);
var r=e;

if(this.getLabelProperty()){var v=this.getLabelProperty();
r=t.get(v);
}s.setValue(r);
var u=null;
var x=false;

if(this.getValueProperty()){var v=this.getValueProperty();
u=t.get(v);
}var w;

if(typeof u===f){w=this.getChildControl(j);
}else{w=this.getChildControl(i);
}
if(typeof u===a){x=true;
u=u.toString();
}w.setValue(u);
this.add(s,{flex:1});
this.add(w);

if(this.getValueProperty()){qx.data.SingleValueBinding.bind(w,b,t,this.getValueProperty(),{converter:function(y,z,A,B){if(x){return parseInt(y,10);
}return y;
}});
}},_createChildControlImpl:function(C,D){var E;

switch(C){case k:E=new qx.ui.basic.Label();
E.set({anonymous:true,allowGrowX:true,font:g});
break;
case j:E=new qx.ui.form.CheckBox();
break;
case i:E=new qx.ui.form.TextField();
break;
}return E;
}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__x",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__x:null,getSelection:function(){var g=this.__lL().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__lL().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection"+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__lL().resetSelected();
},isSelected:function(i){return this.__lL().isSelected(i);
},isSelectionEmpty:function(){return this.__lL().isSelectionEmpty();
},getSelectables:function(j){return this.__lL().getSelectables(j);
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(d,l,k);
},__lL:function(){if(this.__x==null){var m=this;
this.__x=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(n){if(m._isItemSelectable){return m._isItemSelectable(n);
}else{return n.isVisible();
}}});
this.__x.addListener(c,this._onChangeSelected,this);
}this.__x.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__x;
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var g="__mq",f="__ms",e="Boolean",d="__mr",c="qx.ui.core.SingleSelectionManager",b="changeSelected",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this.__mq=h;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:e,init:true,apply:f}},members:{__mr:null,__mq:null,getSelected:function(){return this.__mr;
},setSelected:function(j){if(!this.__mu(j)){throw new Error("Could not select "+j+", because it is not a child element!");
}this.__mt(j);
},resetSelected:function(){this.__mt(null);
},isSelected:function(k){if(!this.__mu(k)){throw new Error("Could not check if "+k+" is selected,"+" because it is not a child element!");
}return this.__mr===k;
},isSelectionEmpty:function(){return this.__mr==null;
},getSelectables:function(l){var m=this.__mq.getItems();
var n=[];

for(var i=0;i<m.length;i++){if(this.__mq.isItemSelectable(m[i])){n.push(m[i]);
}}if(!l){for(var i=n.length-1;i>=0;i--){if(!n[i].getEnabled()){n.splice(i,1);
}}}return n;
},__ms:function(o,p){if(!o){this.__mt(this.__mr);
}},__mt:function(q){var t=this.__mr;
var s=q;

if(s!=null&&t===s){return;
}
if(!this.isAllowEmptySelection()&&s==null){var r=this.getSelectables(true)[0];

if(r){s=r;
}}this.__mr=s;
this.fireDataEvent(b,s,t);
},__mu:function(u){var v=this.__mq.getItems();

for(var i=0;i<v.length;i++){if(v[i]===u){return true;
}}return false;
}},destruct:function(){if(this.__mq.toHashCode){this._disposeObjects(g);
}else{this.__mq=null;
}this._disposeObjects(d);
}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__a",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);
this.__a=[];
this.addListener(b,this.__b,this);

if(s!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__a:null,getItems:function(){return this.__a;
},add:function(t){var u=this.__a;
var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];

if(qx.lang.Array.contains(u,v)){continue;
}v.addListener(p,this._onItemChangeChecked,this);
u.push(v);
v.setGroup(this);
if(v.getValue()){this.setSelection([v]);
}}if(!this.isAllowEmptySelection()&&u.length>0&&!this.getSelection()[0]){this.setSelection([u[0]]);
}},remove:function(w){var x=this.__a;

if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);
if(w.getGroup()===this){w.resetGroup();
}w.removeListener(p,this._onItemChangeChecked,this);
if(w.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(z);
}},_applyValid:function(B,C){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(B);
}},_applyEnabled:function(D,E){var F=this.__a;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var I=this.getSelection()[0];
var K=this.__a;
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
var N=this.__a;
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
},_isItemSelectable:function(O){return this.__a.indexOf(O)!=-1;
},__b:function(e){var Q=e.getData()[0];
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
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var g="label",f="checkbox",e="qx.ui.form.CheckBox",d="value",c="toolTipText",b="enabled",a="menu";
qx.Class.define(e,{extend:qx.ui.form.ToggleButton,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(h){qx.ui.form.ToggleButton.call(this,h);
this.setValue(false);
},properties:{appearance:{refine:true,init:f},allowGrowX:{refine:true,init:false}},members:{_forwardStates:{invalid:true,focused:true,undetermined:true,checked:true,hovered:true},_bindableProperties:[b,g,c,d,a]}});
})();
(function(){var k="overflowY",j="engine.name",i="hidden",h="auto",g="textarea",f="width",d="webkit",c="Boolean",b="Integer",a="input",z="",y="appear",x="mshtml",w="px",v="_applyWrap",u="-1",t="_applyMinimalLineHeight",s="mousewheel",r="y",q="_applyAutoSize",o="tabIndex",p='name',m="qx.ui.form.TextArea",n='id',l="absolute";
qx.Class.define(m,{extend:qx.ui.form.AbstractField,construct:function(A){qx.ui.form.AbstractField.call(this,A);
this.initWrap();
this.addListener(s,this._onMousewheel,this);
},properties:{wrap:{check:c,init:true,apply:v},appearance:{refine:true,init:g},singleStep:{check:b,init:20},minimalLineHeight:{check:b,apply:t,init:4},autoSize:{check:c,apply:q,init:false}},members:{__vA:null,__vB:null,__vC:null,setValue:function(B){B=qx.ui.form.AbstractField.prototype.setValue.call(this,B);
this.__vD();
return B;
},_onMousewheel:function(e){var C=this.getContentElement();
var scrollY=C.getScrollY();
C.scrollToY(scrollY+e.getWheelDelta(r)*this.getSingleStep());
var D=C.getScrollY();

if(D!=scrollY){e.stop();
}},__vD:function(){if(this.isAutoSize()){var G=this.__vE();

if(G){this.__vC=this.__vC||this._getAreaHeight();
var I=this._getScrolledAreaHeight();
if(this.getMaxHeight()){var E=this.getInsets();
var F=-E.top+this.getMaxHeight()-E.bottom;

if(I>F){this.getContentElement().setStyle(k,h);
}else{this.getContentElement().setStyle(k,i);
}}var H=Math.max(I,this.__vC);
this._setAreaHeight(H);
}else{this.addListenerOnce(y,function(){if(qx.core.Environment.get(j)==d){var K=this.getContentElement();
var J=this.getValue();
K.setStyle(k,i,true);
this.setValue(z);
this.setValue(J);
}this.__vD();
},this);
}}},_getAreaHeight:function(){return this.getInnerSize().height;
},_setAreaHeight:function(L){if(this._getAreaHeight()!==L){this.__vB=L;
qx.ui.core.queue.Layout.add(this);
qx.ui.core.queue.Manager.flush();
this.__vH();
}},_getScrolledAreaHeight:function(){var N=this.__vE();
var M=N.getDomElement();

if(M){if(!M.parentNode){qx.html.Element.flush();
return this._getScrolledAreaHeight();
}if(qx.core.Environment.get(j)===d){N.setWrap(!this.getWrap(),true);
}N.setWrap(this.getWrap(),true);
if(qx.core.Environment.get(j)==d){M.style.overflow=i;
}if(qx.core.Environment.get(j)==x){M.style.overflow=z;
}N.setValue(this.getValue());
this.__vG(N);

if(qx.core.Environment.get(j)==x){if(!M.scrollTop){qx.html.Element.flush();
}return M.scrollTop+this._getTextSize().height;
}return M.scrollTop;
}},__vE:function(){this.__vA=this.__vA||this.__vF();
return this.__vA;
},__vF:function(){var R,P,O,Q;
R=this.getContentElement();
if(!R.getDomElement()){return;
}O=qx.bom.Collection.create(R.getDomElement()).clone()[0];
Q=new qx.html.Input(g);
Q.useElement(O);
P=Q;
P.setStyles({position:l,top:0,left:-9999,height:0,overflow:i},true);
P.removeAttribute(n);
P.removeAttribute(p);
P.setAttribute(o,u);
P.setValue(R.getValue());
P.insertBefore(R);
this.__vG(P);
return P;
},__vG:function(S){S=S.getDomElement();

if(S){S.scrollTop=10000;
}},_createInputElement:function(){return new qx.html.Input(g,{overflowX:h,overflowY:h});
},_applyWrap:function(T,U){this.getContentElement().setWrap(T);
this.__vD();
},_applyMinimalLineHeight:function(){qx.ui.core.queue.Layout.add(this);
},_applyAutoSize:function(V,W){if(V){this.__vD();
this.addListener(a,this.__vD,this);
this.addListenerOnce(y,function(){this.getContentElement().setStyle(k,i);
});
}else{this.removeListener(a,this.__vD);
this.getContentElement().setStyle(k,h);
}},_applyDimension:function(X){qx.ui.form.AbstractField.prototype._applyDimension.call(this);

if(X===this.getMaxHeight()){this.__vD();
}},__vH:function(){var content=this.getContentElement();
var ba=content.getDomElement();
var Y=content.getStyle(f);
content.setStyle(f,parseInt(Y,10)+1000+w,true);
if(ba){qx.bom.element.Dimension.getWidth(ba);
}content.setStyle(f,Y,true);
},__vI:function(){if(this.isAutoSize()&&this.getHeight()){this.warn("autoSize is ignored when the height property is set. "+"If you want to set an initial height, use the minHeight "+"property instead.");
}},_getContentHint:function(){var bb=qx.ui.form.AbstractField.prototype._getContentHint.call(this);
bb.height=bb.height*this.getMinimalLineHeight();
bb.width=this._getTextSize().width*20;

if(this.isAutoSize()){bb.height=this.__vB||bb.height;
}return bb;
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
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__rR:/\s+/g,__rS:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__rR);

for(var i=0,l=B.length;i<l;i++){z[B[i]]=true;
}
for(var i=0,l=y.length;i<l;i++){if(!z[y[i]]){B.push(y[i]);
}}}else{B=y;
}return x.className=B.join(o);
}}),get:function(C){var D=C.className;

if(typeof D.split!==c){if(typeof D===a){if(qx.Bootstrap.getClass(D)==b){D=D.baseVal;
}else{D=n;
}}
if(typeof D===d){D=n;
}}return D;
},has:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(E,name){return E.classList.contains(name);
},"default":function(F,name){var G=new RegExp(m+name+k);
return G.test(F.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(H,name){H.classList.remove(name);
return name;
},"default":function(I,name){var J=new RegExp(m+name+k);
I.className=I.className.replace(J,e);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(K,L){for(var i=0;i<L.length;i++){K.classList.remove(L[i]);
}return K.className;
},"default":function(M,N){var O=new RegExp(j+N.join(g)+j,h);
return M.className=M.className.replace(O,p).replace(this.__rS,p).replace(this.__rR,o);
}}),replace:function(P,Q,R){this.remove(P,Q);
return this.add(P,R);
},toggle:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(S,name,T){if(T===undefined){S.classList.toggle(name);
}else{T?this.add(S,name):this.remove(S,name);
}return name;
},"default":function(U,name,V){if(V==null){V=!this.has(U,name);
}V?this.add(U,name):this.remove(U,name);
return name;
}})}});
})();
(function(){var m="get",k="set",h="reset",g=":not(",f="getValue",e="append",d=")",c="getPreviousSiblings",b="#",a="qx.bom.Collection",K="setValue",J="prepend",I="string",H="getAncestors",G="getOffsetParent",F="remove",E=">*",D="add",C="*",B="",t="addListener",u="has",r="toggle",s="getSiblings",p="replace",q="after",n="replaceWith",o="setCss",v="setStyles",w="before",y="getNextSiblings",x="getPosition",A="getCss",z="removeListener";
(function(){var M=function(N,O){return function(P,Q,R,S,T,U){var length=this.length;

if(length>0){var V=N[O];

for(var i=0;i<length;i++){if(this[i].nodeType===1){V.call(N,this[i],P,Q,R,S,T,U);
}}}return this;
};
};
var L=function(W,X){return function(Y,ba,bb,bc,bd,be){if(this.length>0){var bf=this[0].nodeType===1?W[X](this[0],Y,ba,bb,bc,bd,be):null;

if(bf&&bf.nodeType){return this.__vN([bf]);
}else{return bf;
}}return null;
};
};
qx.Class.define(a,{extend:qx.type.BaseArray,construct:function(bg){qx.type.BaseArray.apply(this,arguments);
},statics:{query:function(bh,bi){var bj=qx.bom.Selector.query(bh,bi);
return qx.lang.Array.cast(bj,qx.bom.Collection);
},id:function(bk){var bl=document.getElementById(bk);
if(bl&&bl.id!=bk){return qx.bom.Collection.query(b+bk);
}if(bl){return new qx.bom.Collection(bl);
}else{return new qx.bom.Collection();
}},html:function(bm,bn){var bo=qx.bom.Html.clean([bm],bn);
return qx.lang.Array.cast(bo,qx.bom.Collection);
},__vJ:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(bp,bq){var bs=qx.bom.Collection;
if(bp.nodeType){return new bs(bp);
}else if(typeof bp===I){var br=bs.__vJ.exec(bp);

if(br){return br[1]?bs.html(br[1],bq):bs.id(br[3].substring(1));
}else{return bs.query(bp,bq);
}}else{return qx.lang.Array.cast(bp,qx.bom.Collection);
}}},members:{__vK:null,setAttribute:M(qx.bom.element.Attribute,k),resetAttribute:M(qx.bom.element.Attribute,h),getAttribute:L(qx.bom.element.Attribute,m),addClass:M(qx.bom.element.Class,D),getClass:L(qx.bom.element.Class,m),hasClass:L(qx.bom.element.Class,u),removeClass:M(qx.bom.element.Class,F),replaceClass:M(qx.bom.element.Class,p),toggleClass:M(qx.bom.element.Class,r),setValue:M(qx.bom.Input,K),getValue:L(qx.bom.Input,f),setStyle:M(qx.bom.element.Style,k),setStyles:M(qx.bom.element.Style,v),resetStyle:M(qx.bom.element.Style,h),getStyle:L(qx.bom.element.Style,m),setCss:M(qx.bom.element.Style,o),getCss:M(qx.bom.element.Style,A),getOffset:L(qx.bom.element.Location,m),getPosition:L(qx.bom.element.Location,x),getOffsetParent:L(qx.bom.element.Location,G),setScrollLeft:function(bt){var Node=qx.dom.Node;

for(var i=0,l=this.length,bu;i<l;i++){bu=this[i];

if(Node.isElement(bu)){bu.scrollLeft=bt;
}else if(Node.isWindow(bu)){bu.scrollTo(bt,this.getScrollTop(bu));
}else if(Node.isDocument(bu)){Node.getWindow(bu).scrollTo(bt,this.getScrollTop(bu));
}}return this;
},setScrollTop:function(bv){var Node=qx.dom.Node;

for(var i=0,l=this.length,bw;i<l;i++){bw=this[i];

if(Node.isElement(bw)){bw.scrollTop=bv;
}else if(Node.isWindow(bw)){bw.scrollTo(this.getScrollLeft(bw),bv);
}else if(Node.isDocument(bw)){Node.getWindow(bw).scrollTo(this.getScrollLeft(bw),bv);
}}return this;
},getScrollLeft:function(){var bx=this[0];

if(!bx){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(bx)||Node.isDocument(bx)){return qx.bom.Viewport.getScrollLeft();
}return bx.scrollLeft;
},getScrollTop:function(){var by=this[0];

if(!by){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(by)||Node.isDocument(by)){return qx.bom.Viewport.getScrollTop();
}return by.scrollTop;
},getWidth:function(){var bz=this[0];
var Node=qx.dom.Node;

if(bz){if(Node.isElement(bz)){return qx.bom.element.Dimension.getWidth(bz);
}else if(Node.isDocument(bz)){return qx.bom.Document.getWidth(Node.getWindow(bz));
}else if(Node.isWindow(bz)){return qx.bom.Viewport.getWidth(bz);
}}return null;
},getContentWidth:function(){var bA=this[0];

if(qx.dom.Node.isElement(bA)){return qx.bom.element.Dimension.getContentWidth(bA);
}return null;
},getHeight:function(){var bB=this[0];
var Node=qx.dom.Node;

if(bB){if(Node.isElement(bB)){return qx.bom.element.Dimension.getHeight(bB);
}else if(Node.isDocument(bB)){return qx.bom.Document.getHeight(Node.getWindow(bB));
}else if(Node.isWindow(bB)){return qx.bom.Viewport.getHeight(bB);
}}return null;
},getContentHeight:function(){var bC=this[0];

if(qx.dom.Node.isElement(bC)){return qx.bom.element.Dimension.getContentHeight(bC);
}return null;
},addListener:M(qx.bom.Element,t),removeListener:M(qx.bom.Element,z),eq:function(bD){return this.slice(bD,+bD+1);
},filter:function(bE,bF){var bG;

if(qx.lang.Type.isFunction(bE)){bG=qx.type.BaseArray.prototype.filter.call(this,bE,bF);
}else{bG=qx.bom.Selector.matches(bE,this);
}return this.__vN(bG);
},is:function(bH){return !!bH&&qx.bom.Selector.matches(bH,this).length>0;
},__vL:/^.[^:#\[\.,]*$/,not:function(bI){if(this.__vL.test(bI)){var bJ=qx.bom.Selector.matches(g+bI+d,this);
return this.__vN(bJ);
}var bJ=qx.bom.Selector.matches(bI,this);
return this.filter(function(bK){return bJ.indexOf(bK)===-1;
});
},add:function(bL,bM){var bN=qx.bom.Selector.query(bL,bM);
var bO=qx.lang.Array.unique(this.concat(bN));
return this.__vN(bO);
},children:function(bP){var bQ=[];

for(var i=0,l=this.length;i<l;i++){bQ.push.apply(bQ,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bP){bQ=qx.bom.Selector.matches(bP,bQ);
}return this.__vN(bQ);
},closest:function(bR){var bS=new qx.bom.Collection(1);
var bU=qx.bom.Selector;
var bT=this.map(function(bV){while(bV&&bV.ownerDocument){bS[0]=bV;

if(bU.matches(bR,bS).length>0){return bV;
}bV=bV.parentNode;
}});
return this.__vN(qx.lang.Array.unique(bT));
},contents:function(){var bX=[];
var bW=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bX.push.apply(bX,bW.fromCollection(this[i].childNodes));
}return this.__vN(bX);
},find:function(bY){var cb=qx.bom.Selector;
if(this.length===1){return this.__vN(cb.query(bY,this[0]));
}else{var ca=[];

for(var i=0,l=this.length;i<l;i++){ca.push.apply(ca,cb.query(bY,this[i]));
}return this.__vN(qx.lang.Array.unique(ca));
}},next:function(cc){var cd=qx.dom.Hierarchy;
var ce=this.map(cd.getNextElementSibling,cd);
if(cc){ce=qx.bom.Selector.matches(cc,ce);
}return this.__vN(ce);
},nextAll:function(cf){return this.__vM(y,cf);
},prev:function(cg){var ch=qx.dom.Hierarchy;
var ci=this.map(ch.getPreviousElementSibling,ch);
if(cg){ci=qx.bom.Selector.matches(cg,ci);
}return this.__vN(ci);
},prevAll:function(cj){return this.__vM(c,cj);
},parent:function(ck){var Element=qx.dom.Element;
var cl=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(ck){cl=qx.bom.Selector.matches(ck,cl);
}return this.__vN(cl);
},parents:function(cm){return this.__vM(H,cm);
},siblings:function(cn){return this.__vM(s,cn);
},__vM:function(co,cp){var cr=[];
var cq=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cr.push.apply(cr,cq[co](this[i]));
}var cs=qx.lang.Array.unique(cr);
if(cp){cs=qx.bom.Selector.matches(cp,cs);
}return this.__vN(cs);
},__vN:function(ct){var cu=new qx.bom.Collection;
cu.__vK=this;
ct=Array.prototype.slice.call(ct,0);
cu.push.apply(cu,ct);
return cu;
},andSelf:function(){return this.add(this.__vK);
},end:function(){return this.__vK||new qx.bom.Collection();
},__vO:function(cv,cw){var cB=this[0];
var cA=cB.ownerDocument||cB;
var cz=cA.createDocumentFragment();
var cD=qx.bom.Html.clean(cv,cA,cz);
var cF=cz.firstChild;
if(cF){var cx=this.length-1;

for(var i=0,l=cx;i<l;i++){cw.call(this,this[i],cz.cloneNode(true));
}cw.call(this,this[cx],cz);
}if(cD){var cy;
var cE=qx.io.ScriptLoader;
var cC=qx.lang.Function;

for(var i=0,l=cD.length;i<l;i++){cy=cD[i];
if(cy.src){cE.get().load(cy.src);
}else{cC.globalEval(cy.text||cy.textContent||cy.innerHTML||B);
}if(cy.parentNode){cy.parentNode.removeChild(cy);
}}}return this;
},__vP:function(cG,cH){var cJ=qx.bom.Selector;
var cI=qx.lang.Array;
var cL=[];

for(var i=0,l=cG.length;i<l;i++){cL.push.apply(cL,cJ.query(cG[i]));
}cL=cI.cast(cI.unique(cL),qx.bom.Collection);
for(var i=0,cK=this.length;i<cK;i++){cL[cH](this[i]);
}return this;
},append:function(cM){return this.__vO(arguments,this.__vQ);
},prepend:function(cN){return this.__vO(arguments,this.__vR);
},__vQ:function(cO,cP){cO.appendChild(cP);
},__vR:function(cQ,cR){cQ.insertBefore(cR,cQ.firstChild);
},appendTo:function(cS){return this.__vP(arguments,e);
},prependTo:function(cT){return this.__vP(arguments,J);
},before:function(cU){return this.__vO(arguments,this.__vS);
},after:function(cV){return this.__vO(arguments,this.__vT);
},__vS:function(cW,cX){cW.parentNode.insertBefore(cX,cW);
},__vT:function(cY,da){cY.parentNode.insertBefore(da,cY.nextSibling);
},insertBefore:function(db){return this.__vP(arguments,w);
},insertAfter:function(dc){return this.__vP(arguments,q);
},wrapAll:function(content){var de=this[0];

if(de){var dd=qx.bom.Collection.create(content,de.ownerDocument).clone();
if(de.parentNode){de.parentNode.insertBefore(dd[0],de);
}dd.map(this.__vU).append(this);
}return this;
},__vU:function(df){while(df.firstChild){df=df.firstChild;
}return df;
},wrapInner:function(content){var dg=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){dg[0]=this[i];
dg.contents().wrapAll(content);
}return this;
},wrap:function(content){var dh=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){dh[0]=this[i];
dh.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(di){return this.__vP(arguments,n);
},remove:function(dj){var dl=this;

if(dj){dl=this.filter(dj);

if(dl.length==0){return this;
}}for(var i=0,dm=dl.length,dk;i<dm;i++){dk=dl[i];

if(dk.parentNode){dk.parentNode.removeChild(dk);
}}return dl;
},destroy:function(dn){if(this.length==0){return this;
}var dq=qx.bom.Selector;
var dt=this;

if(dn){dt=this.filter(dn);

if(dt.length==0){return this;
}}var ds=qx.event.Registration.getManager(this[0]);

for(var i=0,l=dt.length,dr,du;i<l;i++){dr=dt[i];
ds.removeAllListeners(dr);
du=dq.query(C,dr);

for(var j=0,dp=du.length;j<dp;j++){ds.removeAllListeners(du[j]);
}if(dr.parentNode){dr.parentNode.removeChild(dr);
}}if(dn){dt.end();
qx.lang.Array.exclude(this,dt);
}else{this.length=0;
}return this;
},empty:function(){var dv=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){dv.query(E,this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(dw){var Element=qx.bom.Element;
return dw?this.map(function(dx){return Element.clone(dx,true);
}):this.map(Element.clone,Element);
}},defer:function(dy){if(window.$==null){window.$=dy.create;
}}});
})();
})();
(function(){var m="string",k="script",h="<table>",g="engine.name",f="<fieldset>",e="<select multiple='multiple'>",d="</div>",c="</select>",b="</tr></tbody></table>",a="<col",J="div",I="<table><tbody><tr>",H=">",G="<table><tbody></tbody><colgroup>",F="<th",E="</tbody></table>",D="<td",C="</colgroup></table>",B="<opt",A="text/javascript",t="",u="</fieldset>",r="<table><tbody>",s="div<div>",p="<table",q="mshtml",n="qx.bom.Html",o="<leg",v="tbody",w="<tr",y="</table>",x="undefined",z="></";
qx.Class.define(n,{statics:{__vV:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__vW:{opt:[1,e,c],leg:[1,f,u],table:[1,h,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Environment.select(g,{"mshtml":[1,s,d],"default":null})},__vX:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__vV);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__vW;

if(!Q.indexOf(B)){T=P.opt;
}else if(!Q.indexOf(o)){T=P.leg;
}else if(Q.match(/^<(thead|tbody|tfoot|colg|cap)/)){T=P.table;
}else if(!Q.indexOf(w)){T=P.tr;
}else if(!Q.indexOf(D)||!Q.indexOf(F)){T=P.td;
}else if(!Q.indexOf(a)){T=P.col;
}else{T=P.def;
}if(T){U.innerHTML=T[1]+N+T[2];
var S=T[0];

while(S--){U=U.lastChild;
}}else{U.innerHTML=N;
}if((qx.core.Environment.get(g)==q)){var V=/<tbody/i.test(N);
var R=!Q.indexOf(p)&&!V?U.firstChild&&U.firstChild.childNodes:T[1]==h&&!V?U.childNodes:[];

for(var j=R.length-1;j>=0;--j){if(R[j].tagName.toLowerCase()===v&&!R[j].childNodes.length){R[j].parentNode.removeChild(R[j]);
}}if(/^\s/.test(N)){U.insertBefore(O.createTextNode(N.match(/^\s*/)[0]),U.firstChild);
}}return qx.lang.Array.fromCollection(U.childNodes);
},clean:function(W,X,Y){X=X||document;
if(typeof X.createElement===x){X=X.ownerDocument||X[0]&&X[0].ownerDocument||document;
}if(!Y&&W.length===1&&typeof W[0]===m){var bg=/^<(\w+)\s*\/?>$/.exec(W[0]);

if(bg){return [X.createElement(bg[1])];
}}var ba,bc=[];

for(var i=0,l=W.length;i<l;i++){ba=W[i];
if(typeof ba===m){ba=this.__vX(ba,X);
}if(ba.nodeType){bc.push(ba);
}else if(ba instanceof qx.type.BaseArray){bc.push.apply(bc,Array.prototype.slice.call(ba,0));
}else if(ba.toElement){bc.push(ba.toElement());
}else{bc.push.apply(bc,ba);
}}if(Y){var bf=[],be=qx.lang.Array,bd,bb;

for(var i=0;bc[i];i++){bd=bc[i];

if(bd.nodeType==1&&bd.tagName.toLowerCase()===k&&(!bd.type||bd.type.toLowerCase()===A)){if(bd.parentNode){bd.parentNode.removeChild(bc[i]);
}bf.push(bd);
}else{if(bd.nodeType===1){bb=be.fromCollection(bd.getElementsByTagName(k));
bc.splice.apply(bc,[i+1,0].concat(bb));
}Y.appendChild(bd);
}}return bf;
}return bc;
}}});
})();
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__mj=qx.Bootstrap.bind(this.__mn,this);
this.__mk=document.createElement(f);
},statics:{TIMEOUT:15},members:{__ml:null,__mm:null,__eB:null,__eC:null,__mj:null,__mk:null,load:function(q,r,s){if(this.__ml){throw new Error("Another request is still running!");
}this.__ml=true;
this.__mm=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__mk;
this.__eB=r||null;
this.__eC=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__mj;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__ml){this.dispose(a);
}},dispose:function(status){if(this.__mm){return;
}this.__mm=true;
var x=this.__mk;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__ml;
if(this.__eB){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__eB.call(self.__eC,status);
delete self.__eB;
}),0);
}else{this.__eB.call(this.__eC,status);
delete this.__eB;
}}},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__mn:qx.event.GlobalError.observeMethod(function(e){var y=qx.bom.client.Engine.getName();
if(y==n){var z=this.__mk.readyState;

if(z==i){this.dispose(p);
}else if(z==m){this.dispose(p);
}else{return;
}}else if(y==j){if(qx.Bootstrap.isString(e)||e.type===l){return this.dispose(o);
}else if(e.type===k){return this.dispose(p);
}else{return;
}}else{if(qx.Bootstrap.isString(e)||e.type===l){this.dispose(o);
}else if(e.type===k){this.dispose(p);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.dispose(p);
}else{return;
}}})}});
})();
(function(){var n="",m="Import",l="visible",k="icon/16/actions/window-new.png",j="changeFeatureMap",i="Feature Set Name",h="Import Feature Map",g="center",f="fce.view.ImportWindow",e="JSON field may not be empty!",b="Feature Set Definition (JSON)",d="close",c="red",a="execute";
qx.Class.define(f,{extend:qx.ui.window.Window,properties:{featureMap:{event:j}},construct:function(){qx.ui.window.Window.call(this,h,k);
this.setWidth(300);
this.setHeight(400);
this.setLayout(new qx.ui.layout.VBox(10));
var o=new qx.ui.basic.Label(i);
this.add(o);
var s=this.__Oq=new qx.ui.form.TextField();
this.add(s);
o.setBuddy(s);
var q=new qx.ui.basic.Label(b);
this.add(q);
var p=this.__Or=new qx.ui.form.TextArea();
this.add(p,{flex:1});
q.setBuddy(p);
var r=new qx.ui.basic.Label(n);
r.setTextColor(c);
this.add(r);
r.exclude();
this.__Os=r;
window.em=r;
var t=new qx.ui.form.Button(m);
t.setAlignX(g);
t.setAllowGrowX(false);
this.add(t);
this.addListener(d,this.reset,this);
t.addListener(a,this._onImport,this);
},members:{__Oq:null,__Or:null,__Os:null,reset:function(){this.__Oq.setValue(n);
this.__Or.setValue(n);
this.__Os.setValue(n);
this.__Os.exclude();
},_onImport:function(){var name=this.__Oq.getValue();
var v=this.__Or.getValue();

if(!v){this._showError(e);
return;
}var w;

try{w=qx.lang.Json.parse(v);
}catch(x){this._showError(x.message);
return;
}
try{qx.core.Assert.assertMap(w);
}catch(y){this._showError(y.message);
return;
}var u={};
u[name]=w;

try{this.setFeatureMap(u);
}catch(z){this._showError(z.message);
return;
}this.close();
},_showError:function(A){this.__Os.setValue(A);
this.__Os.setVisibility(l);
}}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var k="qx.data.model.",j="",h="Array",g="_validate",f='"',e="qx.debug.databinding",d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){qx.core.Object.call(this);
this.__nc=l;
},statics:{$$instance:null,createModel:function(m,n){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();
}this.$$instance.toClass(m,n);
return this.$$instance.toModel(m);
}},members:{__nc:null,__nd:function(o){return qx.Bootstrap.getKeys(o).sort().join(f);
},toClass:function(p,q){if(!qx.lang.Type.isObject(p)||p instanceof qx.core.Object){if(p instanceof Array||qx.Bootstrap.getClass(p)==h){for(var i=0;i<p.length;i++){this.toClass(p[i],q);
}}return ;
}var s=this.__nd(p);
for(var t in p){this.toClass(p[t],q);
}if(qx.Class.isDefined(k+s)){return;
}if(this.__nc&&this.__nc.getModelClass&&this.__nc.getModelClass(s)!=null){return;
}var z={};
var y={__ne:this.__ne};

for(var t in p){t=t.replace(/-/g,j);
z[t]={};
z[t].nullable=true;
z[t].event=d+qx.lang.String.firstUp(t);
if(q){z[t].apply=a;
}if(this.__nc&&this.__nc.getValidationRule){var v=this.__nc.getValidationRule(s,t);

if(v){z[t].validate=g+t;
y[g+t]=v;
}}}if(this.__nc&&this.__nc.getModelSuperClass){var x=this.__nc.getModelSuperClass(s)||qx.core.Object;
}else{var x=qx.core.Object;
}var u=[];

if(this.__nc&&this.__nc.getModelMixins){var w=this.__nc.getModelMixins(s);
if(!qx.lang.Type.isArray(w)){if(w!=null){u=[w];
}}}if(q){u.push(qx.data.marshal.MEventBubbling);
}var r={extend:x,include:u,properties:z,members:y,destruct:this.__nf};
qx.Class.define(k+s,r);
},__nf:function(){var A=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var B in A){this.__ne(this.get(A[B].name));
}},__ne:function(C){if(!(C instanceof qx.core.Object)){return ;
}if(C.isDisposed()){return;
}C.dispose();
},__ng:function(D){var E;
if(this.__nc&&this.__nc.getModelClass){E=this.__nc.getModelClass(D);
}
if(E!=null){return (new E());
}else{var F=qx.Class.getByName(k+D);
return (new F());
}},toModel:function(G){var K=qx.lang.Type.isObject(G);
var H=G instanceof Array||qx.Bootstrap.getClass(G)==h;

if((!K&&!H)||G instanceof qx.core.Object){return G;
}else if(H){var M=new qx.data.Array();
M.setAutoDisposeItems(true);

for(var i=0;i<G.length;i++){M.push(this.toModel(G[i]));
}return M;
}else if(K){var I=this.__nd(G);
var N=this.__ng(I);
for(var L in G){var J=L.replace(/-/g,j);
if((false)&&qx.core.Environment.get(e)){if(L!=J){this.warn("The model contained an illegal name: '"+L+"'. Replaced it with '"+J+"'.");
}}N[b+qx.lang.String.firstUp(J)](this.toModel(G[L]));
}return N;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__nc=null;
}});
})();
(function(){var b="fce.Environment",a="changeFeatures";
qx.Class.define(b,{extend:qx.core.Object,properties:{features:{nullable:true,init:null,event:a}},members:{__Q:null,check:function(){var g=qx.core.Environment._checks;
var e=qx.lang.Object.getKeys(g);
var d={};

for(var i=0,l=e.length;i<l;i++){var f=e[i];
d[f]=qx.core.Environment.get(f);
}g=qx.core.Environment._asyncChecks;
var c=qx.lang.Object.getLength(g);
e=qx.lang.Object.getKeys(g);

for(var i=0,l=e.length;i<l;i++){var f=e[i];
qx.core.Environment.getAsync(f,function(h){d[f]=h;
c--;
},this);
}this.setFeatures(d);
}}});
})();
(function(){var j="completed",h="timeout",g="browser.name",f="failed",e="useragent=",d="application/json",c="GET",b="fce.Reporter",a="POST";
qx.Class.define(b,{extend:qx.core.Object,statics:{IGNORED_FEATURES:[/^qx\./,/^plugin\./]},construct:function(k,m,n){qx.core.Object.call(this);

if(k){this.setServer(k);
}
if(m){this.setAddUrl(m);
}
if(n){this.setGetUrl(n);
}},properties:{server:{init:null,nullable:true},addUrl:{init:null,nullable:true},getUrl:{init:null,nullable:true}},members:{__Ot:null,_sendReport:function(o){if(this.getServer()===null||this.getAddUrl()===null){throw new Error("Report server host or URL not specified!");
}var r=qx.lang.Json.stringify(o);
var p=this.getServer()+this.getAddUrl();
var q=new qx.io.remote.Request(p,a);
q.setData(r);
q.setCrossDomain(true);
q.addListener(f,function(s){this.error("Request failed!");
},this);
q.addListener(h,function(t){this.error("Request timed out!");
},this);
q.addListener(j,function(u){if(u.getContent().id){this.info("Report saved. ID: "+u.getContent().id);
}else{this.info("Report ignored to prevent duplicate entry.");
}},this);
q.send();
},compare:function(v){this.__Ot=v;

if(this.getGetUrl()){this.getFeaturesFromServer();
}else{this._sendReport(this.__Ot);
}},getFeaturesFromServer:function(){var w=navigator.userAgent;
var y=this.getServer()+this.getGetUrl();
var x=new qx.io.remote.Request(y,c,d);
x.setCrossDomain(true);
x.setData(e+encodeURIComponent(w));
x.addListener(j,function(z){var A=z.getContent();

if(qx.lang.Object.getKeys(A).length==0){this.debug("Sending this client's environment data to the server");
this._sendReport(this.__Ot);
}else{this._compareFeatureSets(A);
}},this);
x.addListener(f,function(B){this.error("Request failed with status",x.getStatus());
},this);
x.addListener(h,function(C){this.error("Request timed out");
},this);
x.send();
},_compareFeatureSets:function(D){if(!D[g]||!this.__Ot[g]){return;
}var E=[];

for(var F in D){if(this.__Ot[F]&&!this.isIgnored(F)){if(D[F]!==this.__Ot[F]){E.push(F);
}}}
if(E.length==0){this.info("No differences found");
}
for(var i=0,l=E.length;i<l;i++){var F=E[i];
this.error(F,"expected",D[F],"found",this.__Ot[F]);
}},isIgnored:function(G){var H=fce.Reporter.IGNORED_FEATURES;

for(var i=0,l=H.length;i<l;i++){if(H[i] instanceof RegExp){return H[i].exec(G);
}
if(G===H[i]){return true;
}}}}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__ry={};
this.__rz={};
this.__rA={};
this.__rB={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__rC=++qx.io.remote.Request.__rC;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__rC:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__ry:null,__rz:null,__rA:null,__rB:null,__rC:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__rD:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__rD(e);
},_onsending:function(e){this.setState(g);
this.__rD(e);
},_onreceiving:function(e){this.setState(f);
this.__rD(e);
},_oncompleted:function(e){this.setState(a);
this.__rD(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__rD(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__rD(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__rD(e);
this.dispose();
},_applyState:function(V,W){},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__ry[bf]=bg;
},removeRequestHeader:function(bh){delete this.__ry[bh];
},getRequestHeader:function(bi){return this.__ry[bi]||null;
},getRequestHeaders:function(){return this.__ry;
},setParameter:function(bj,bk,bl){if(bl){this.__rA[bj]=bk;
}else{this.__rz[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__rA[bm];
}else{delete this.__rz[bm];
}},getParameter:function(bo,bp){if(bp){return this.__rA[bo]||null;
}else{return this.__rz[bo]||null;
}},getParameters:function(bq){return (bq?this.__rA:this.__rz);
},setFormField:function(br,bs){this.__rB[br]=bs;
},removeFormField:function(bt){delete this.__rB[bt];
},getFormField:function(bu){return this.__rB[bu]||null;
},getFormFields:function(){return this.__rB;
},getSequenceNumber:function(){return this.__rC;
}},destruct:function(){this.setTransport(null);
this.__ry=this.__rz=this.__rA=this.__rB=null;
}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="__on",o="_applyEnabled",n="Boolean",m="sending",l="interval",k="failed",c="qx.io.remote.RequestQueue",j="timeout",g="completed",b="queued",a="__kr",f="io.maxrequests",d="receiving",h="singleton";
qx.Class.define(c,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__db=[];
this.__on=[];
this.__oo=0;
this.__kr=new qx.event.Timer(500);
this.__kr.addListener(l,this._oninterval,this);
},properties:{enabled:{init:true,check:n,apply:o},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(f)},defaultTimeout:{check:t,init:5000}},members:{__db:null,__on:null,__oo:null,__kr:null,getRequestQueue:function(){return this.__db;
},getActiveQueue:function(){return this.__on;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__on.length==0&&this.__db.length==0){this.__kr.stop();
}if(!this.getEnabled()){return;
}if(this.__db.length==0||(this.__db[0].isAsynchronous()&&this.__on.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__oo>=this.getMaxTotalRequests()){return;
}var v=this.__db.shift();
var w=new qx.io.remote.Exchange(v);
this.__oo++;
this.__on.push(w);
this._debug();
w.addListener(m,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(g,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(j,this._oncompleted,this);
w.addListener(k,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__db.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__on,x);
x.dispose();
this._check();
},__op:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=q+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__on;

if(I.length==0){this.__kr.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__kr.setEnabled(J);
},add:function(L){L.setState(b);

if(L.isAsynchronous()){this.__db.push(L);
}else{this.__db.unshift(L);
}this._check();

if(this.getEnabled()){this.__kr.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__db,M)){qx.lang.Array.remove(this.__db,M);
}}},destruct:function(){this._disposeArray(p);
this._disposeObjects(a);
this.__db=null;
}});
})();
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){bN.abort();
}else{this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__mI();
},__mI:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__mI();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},environment:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){this.setState(l);
},timeout:function(){this.setState(n);
},failed:function(){this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var l="=",k="",j="engine.name",h="&",g="application/xml",f="application/json",d="text/html",c="textarea",b="_data_",a="load",F="text/plain",E="text/javascript",D="readystatechange",C="completed",B="?",A="qx.io.remote.transport.Iframe",z="none",y="display",x="gecko",w="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="opera",p="failed",m="mshtml",n="form_",u="timeout",v="qx/static/blank.gif";
qx.Class.define(A,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var G=(new Date).valueOf();
var H=w+G;
var I=n+G;
var J;

if((qx.core.Environment.get(j)==m)){J=q;
}this.__nj=qx.bom.Iframe.create({id:H,name:H,src:J});
qx.bom.element.Style.set(this.__nj,y,z);
this.__Q=qx.bom.Element.create("form",{id:I,name:I,target:H});
qx.bom.element.Style.set(this.__Q,y,z);
qx.dom.Element.insertEnd(this.__Q,qx.dom.Node.getBodyElement(document));
this.__dc=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__dc,this.__Q);
qx.dom.Element.insertEnd(this.__nj,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__nj,a,this._onload,this);
this.__nk=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__nj,D,this.__nk);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[F,E,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__dc:null,__nl:0,__Q:null,__nj:null,__nk:null,send:function(){var L=this.getMethod();
var N=this.getUrl();
var R=this.getParameters(false);
var Q=[];

for(var M in R){var O=R[M];

if(O instanceof Array){for(var i=0;i<O.length;i++){Q.push(encodeURIComponent(M)+l+encodeURIComponent(O[i]));
}}else{Q.push(encodeURIComponent(M)+l+encodeURIComponent(O));
}}
if(Q.length>0){N+=(N.indexOf(B)>=0?h:B)+Q.join(h);
}if(this.getData()===null){var R=this.getParameters(true);
var Q=[];

for(var M in R){var O=R[M];

if(O instanceof Array){for(var i=0;i<O.length;i++){Q.push(encodeURIComponent(M)+l+encodeURIComponent(O[i]));
}}else{Q.push(encodeURIComponent(M)+l+encodeURIComponent(O));
}}
if(Q.length>0){this.setData(Q.join(h));
}}var K=this.getFormFields();

for(var M in K){var P=document.createElement(c);
P.name=M;
P.appendChild(document.createTextNode(K[M]));
this.__Q.appendChild(P);
}this.__Q.action=N;
this.__Q.method=L;
this.__dc.appendChild(document.createTextNode(this.getData()));
this.__Q.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.core.Environment.get(j)==o&&this.getIframeHtmlContent()==k){return;
}
if(this.__Q.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__nj.readyState]);
}),_switchReadyState:function(S){switch(this.getState()){case C:case s:case p:case u:this.warn("Ignore Ready State Change");
return;
}while(this.__nl<S){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}},setRequestHeader:function(T,U){},getResponseHeader:function(V){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__nj);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__nj);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__nj);
},getIframeTextContent:function(){var W=this.getIframeBody();

if(!W){return null;
}
if(!W.firstChild){return k;
}if(W.firstChild.tagName&&W.firstChild.tagName.toLowerCase()==t){return W.firstChild.innerHTML;
}else{return W.innerHTML;
}},getIframeHtmlContent:function(){var X=this.getIframeBody();
return X?X.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==C){return null;
}var Y=this.getIframeTextContent();

switch(this.getResponseType()){case F:{};
return Y;
break;
case d:Y=this.getIframeHtmlContent();
{};
return Y;
break;
case f:Y=this.getIframeHtmlContent();
{};

try{return Y&&Y.length>0?qx.lang.Json.parse(Y):null;
}catch(ba){return this.error("Could not execute json: ("+Y+")",ba);
}case E:Y=this.getIframeHtmlContent();
{};

try{return Y&&Y.length>0?window.eval(Y):null;
}catch(bb){return this.error("Could not execute javascript: ("+Y+")",bb);
}case g:Y=this.getIframeDocument();
{};
return Y;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,A);
},destruct:function(){if(this.__nj){qx.event.Registration.removeListener(this.__nj,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__nj,D,this.__nk);
if((qx.core.Environment.get(j)==x)){this.__nj.src=qx.util.ResourceManager.getInstance().toUri(v);
}qx.dom.Element.remove(this.__nj);
}
if(this.__Q){qx.dom.Element.remove(this.__Q);
}this.__nj=this.__Q=this.__dc=null;
}});
})();
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe",a="navigate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){var f=qx.bom.Iframe.queryCurrentUrl(e);

if(f!==e.$$url){qx.event.Registration.fireEvent(e,a,qx.event.type.Data,[f]);
e.$$url=f;
}qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===b;
},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){}},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var i="engine.name",h="load",g="",f="qx.bom.Iframe",e="osx",d="os.name",c="webkit",b="iframe",a="body";
qx.Class.define(f,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(j,k){var j=j?qx.lang.Object.clone(j):{};
var l=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var m in l){if(j[m]==null){j[m]=l[m];
}}return qx.bom.Element.create(b,j,k);
},getWindow:function(n){try{return n.contentWindow;
}catch(o){return null;
}},getDocument:qx.core.Environment.select(i,{"mshtml":function(p){try{var q=this.getWindow(p);
return q?q.document:null;
}catch(r){return null;
}},"default":function(s){try{return s.contentDocument;
}catch(t){return null;
}}}),getBody:function(u){try{var v=this.getDocument(u);
return v?v.getElementsByTagName(a)[0]:null;
}catch(w){return null;
}},setSource:function(x,y){try{if(this.getWindow(x)&&qx.dom.Hierarchy.isRendered(x)){try{if((qx.core.Environment.get(i)==c)&&qx.core.Environment.get(d)==e){var z=this.getWindow(x);

if(z){z.stop();
}}this.getWindow(x).location.replace(y);
}catch(A){x.src=y;
}}else{x.src=y;
}this.__om(x);
}catch(B){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(C){var D=this.getDocument(C);

try{if(D&&D.location){return D.location.href;
}}catch(E){}return g;
},__om:function(F){var G=function(){qx.bom.Event.removeNativeListener(F,h,G);
F.$$url=qx.bom.Iframe.queryCurrentUrl(F);
};
qx.bom.Event.addNativeListener(F,h,G);
}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__nC;

if(s>=2000000000){qx.io.remote.transport.Script.__nC=s=1;
}this.__iI=null;
this.__nC=s;
},statics:{__nC:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__nl:0,__iI:null,__nC:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__nC;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__nC]=this;
this.__iI=document.createElement(c);
this.__iI.charset=e;
this.__iI.src=x;
document.body.appendChild(this.__iI);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__nl<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){return null;
}
switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__iI){delete qx.io.remote.transport.Script._instanceRegistry[this.__nC];
document.body.removeChild(this.__iI);
}this.__iI=this._responseContent=null;
}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="engine.name",b="configured",a="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",u='Referer',v="engine.version",r='Basic ',t="\n</pre>",p="string",q='Authorization',n="<pre>Could not execute json: \n",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="mshtml",x=':',z="parseerror",y="file:",B="webkit",A="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,J,L,I]},createRequestObject:qx.core.Environment.select(c,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__nn:false,__nl:0,__no:null,getRequest:function(){if(this.__no===null){this.__no=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__no.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__no;
},send:function(){this.__nl=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===y&&!(/^http(s){0,1}\:/.test(S)));
this.__nn=O;
var W=this.getParameters(false);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){S+=(S.indexOf(E)>=0?d:E)+U.join(d);
}if(this.getData()===null){var W=this.getParameters(true);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){this.setData(U.join(d));
}}var V=function(X){var bd=o;
var bh=f;
var bb,ba,Y;
var be,bf,bg,bc;
var i=0;

do{bb=X.charCodeAt(i++);
ba=X.charCodeAt(i++);
Y=X.charCodeAt(i++);
be=bb>>2;
bf=((bb&3)<<4)|(ba>>4);
bg=((ba&15)<<2)|(Y>>6);
bc=Y&63;

if(isNaN(ba)){bg=bc=64;
}else if(isNaN(Y)){bc=64;
}bh+=bd.charAt(be)+bd.charAt(bf)+bd.charAt(bg)+bd.charAt(bc);
}while(i<X.length);
return bh;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){Q.open(M,S,T);
Q.setRequestHeader(q,r+V(this.getUsername()+x+this.getPassword()));
}else{Q.open(M,S,T,this.getUsername(),this.getPassword());
}}else{Q.open(M,S,T);
}}catch(bi){this.error("Failed with exception: "+bi);
this.failed();
return;
}if(!(qx.core.Environment.get(c)==B)){Q.setRequestHeader(u,window.location.href);
}var P=this.getRequestHeaders();

for(var N in P){Q.setRequestHeader(N,P[N]);
}try{if(O&&T&&qx.core.Environment.get(c)==w&&qx.core.Environment.get(v)==9){qx.event.Timer.once(function(){Q.send(this.getData());
},this,0);
}else{Q.send(this.getData());
}}catch(bj){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+bj,"send");
this.failed();
}return;
}if(!T){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case a:{};
return;
}var bk=this.getReadyState();

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__nn)){if(this.getState()===b){this.setState(g);
}this.failed();
return;
}}if(bk==3&&this.__nl==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}while(this.__nl<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}}),getReadyState:function(){var bl=null;

try{bl=this.getRequest().readyState;
}catch(bm){}return bl;
},setRequestHeader:function(bn,bo){this.getRequestHeaders()[bn]=bo;
},getResponseHeader:function(bp){var bq=null;

try{bq=this.getRequest().getResponseHeader(bp)||null;
}catch(br){}return bq;
},getStringResponseHeaders:function(){var bt=null;

try{var bs=this.getRequest().getAllResponseHeaders();

if(bs){bt=bs;
}}catch(bu){}return bt;
},getResponseHeaders:function(){var bx=this.getStringResponseHeaders();
var by={};

if(bx){var bv=bx.split(/[\r\n]+/g);

for(var i=0,l=bv.length;i<l;i++){var bw=bv[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bw){by[bw[1]]=bw[2];
}}}return by;
},getStatusCode:function(){var bz=-1;

try{bz=this.getRequest().status;
if(bz===1223){bz=204;
}}catch(bA){}return bz;
},getStatusText:function(){var bB=f;

try{bB=this.getRequest().statusText;
}catch(bC){}return bB;
},getResponseText:function(){var bD=null;

try{bD=this.getRequest().responseText;
}catch(bE){bD=null;
}return bD;
},getResponseXml:function(){var bH=null;
var bF=this.getStatusCode();
var bG=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bF,bG,this.__nn)){try{bH=this.getRequest().responseXML;
}catch(bI){}}if(typeof bH==A&&bH!=null){if(!bH.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bH.loadXML(s);
}if(!bH.documentElement){throw new Error("Missing Document Element!");
}
if(bH.documentElement.tagName==z){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bH;
},getFetchedLength:function(){var bJ=this.getResponseText();
return typeof bJ==p?bJ.length:0;
},getResponseContent:function(){var bK=this.getState();

if(bK!==k&&bK!=m){return null;
}var bM=this.getResponseText();

if(bK==m){return bM;
}
switch(this.getResponseType()){case G:case I:{};
return bM;
case J:{};

try{if(bM&&bM.length>0){var bL;

if(this.getParseJson()){bL=qx.lang.Json.parse(bM);
bL=(bL===0?0:(bL||null));
}else{bL=bM;
}return bL;
}else{return null;
}}catch(bN){this.error("Could not execute json: ["+bM+"]",bN);
return n+bM+t;
}case F:{};

try{if(bM&&bM.length>0){var bL=window.eval(bM);
return (bL===0?0:(bL||null));
}else{return null;
}}catch(bO){this.error("Could not execute javascript: ["+bM+"]",bO);
return null;
}case L:bM=this.getResponseXml();
{};
return (bM===0?0:(bM||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bP,bQ){switch(bP){case D:this.fireEvent(D);
break;
case b:this.fireEvent(b);
break;
case g:this.fireEvent(g);
break;
case H:this.fireEvent(H);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case a:this.getRequest().abort();
this.fireEvent(a);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bR=this.getRequest();

if(bR){bR.onreadystatechange=qx.lang.Function.empty;
switch(bR.readyState){case 1:case 2:case 3:bR.abort();
}}this.__no=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var j="bigger",i="\"",h="the currently used client.<br/>",g="The purpose of this application is to help",f="target=\"_blank\" style=\"",e="clicking and dragging or by selecting them and using the &quot;right ",d="column is used. Thus, the value to be added can be chosen by dragging ",c="be used as the value of an &quot;environment&quot; configuration key.",b="The <strong>Available Features</strong> ",a="icon/16/actions/help-contents.png",L="target=\"_blank\">qx.core.Environment</a> with the values detected for ",K="table initially displays all keys defined in <a style=\"",J="arrow&quot; button. When adding a feature to the selection, the ",I="\" ",H="Overview",G=" displays the selected environment settings and allows editing of their ",F="/pages/application/featureconfigeditor.html#browser-specific-builds",E="the &quot;Del&quot; key or clicking the &quot;left arrow&quot; button.",D="http://manual.qooxdoo.org/",C="the <strong>Selected Features</strong> list by double-clicking, ",q="View Components",r="1.5",o=" Multiple sets of client features can be compared to find common values.",p="Additional feature sets, e.g. from different browsers, can be added ",m=" developers create configurations for <a href=\"",n="the columns.",k="The <strong>JSON</strong> box displays a ",l="to the table using the <strong>Import Feature Map</strong> button.",s="serialization of the currently selected configuration. This map can ",t="Help",w="The <strong>Selected Features</strong> list",v="values. Entries can be removed by selecting them and then either pressing ",y="\">browser-specific builds</a>.",x="href=\"http://demo.qooxdoo.org/current/apiviewer/#qx.core.Environment\"",A="display: inline; color: blue;",z="fce.view.HelpWindow",u="value from the first table column to the right of the &quot;name&quot;",B="Individual key/value pairs can be added to ";
qx.Class.define(z,{extend:qx.ui.window.Window,construct:function(){qx.ui.window.Window.call(this,t,a);
this.setWidth(500);
this.setHeight(450);
this.setLayout(new qx.ui.layout.Canvas());
this._addContent();
},members:{_addContent:function(){var P=new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
P.setPadding(5);
var scroll=new qx.ui.container.Scroll(P);
this.add(scroll,{edge:0});
var T=new qx.ui.basic.Label(H);
T.setFont(j);
P.add(T);
var W=A;
var U=r;
var V=D+U+F;
var O=new qx.ui.basic.Label(g+m+V+I+f+W+y+o);
O.setRich(true);
P.add(O);
var S=new qx.ui.basic.Label(q);
S.setFont(j);
P.add(S);
var M=new qx.ui.basic.Label(b+K+W+i+x+L+h+p+l);
M.setRich(true);
P.add(M);
var N=new qx.ui.basic.Label(B+C+e+J+u+d+n);
N.setRich(true);
P.add(N);
var Q=new qx.ui.basic.Label(w+G+v+E);
Q.setRich(true);
P.add(Q);
var R=new qx.ui.basic.Label(k+s+c);
R.setRich(true);
P.add(R);
}}});
})();
(function(){var f="sans-serif",e="arial",d="monospace",c="Courier New",b="qx.theme.simple.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:13,family:[e,f]},"bold":{size:13,family:[e,f],bold:true},"headline":{size:24,family:[f,e]},"small":{size:11,family:[e,f]},"monospace":{size:11,family:[a,c,d]}}});
})();
(function(){var b="fce.theme.Font",a="bold";
qx.Theme.define(b,{extend:qx.theme.simple.Font,fonts:{"bigger":{include:[a],size:13}}});
})();
(function(){var dl="widget",dk="button",dj="pointer",di="button-box",dh="atom",dg="background",df="main-dark",de="bold",dd="text-disabled",dc="image",ca="white",bY="background-selected",bX="popup",bW="button-box-hovered",bV="",bU="button-box-pressed-hovered",bT="button-box-pressed",bS="arrow-down",bR="groupbox",bQ="text-selected",dt="cell",du="tooltip",dr="label",ds="combobox/button",dp="list",dq="middle",dm="menu-button",dn="toolbar-button",dv="textfield",dw="spinner",cK="button-frame",cJ="-middle",cM="light-background",cL="-invert",cO="background-selected-dark",cN="invalid",cQ="combobox",cP="scrollbar",cI="inset",cH="center",k="datechooser/button",l="right",m="main",n="background-disabled",o="-right",p="radiobutton",q="arrow-",r="checkbox",s="-left",t="tree-folder",dK="selectbox",dJ="-invalid",dI="icon/16/places/folder-open.png",dH="menu-slidebar-button",dO="scrollbar/button",dN="border-invalid",dM="tree-minus",dL="statusbar",dQ="down",dP="text",bg="background-disabled-checked",bh="tree",be="slidebar/button-forward",bf="icon/16/places/folder.png",bk="icon/16/mimetypes/text-plain.png",bl="tree-plus",bi="default",bj="-top-left",bc="datechooser",bd="button-box-focused",L="blank",K="treevirtual-folder",N="-bottom-right",M="virtual-list",H="-top-right",G="arrow-right",J="left",I="up",F="right-top",E="focused-inset",bq="slidebar/button-backward",br="-bottom-left",bs="table-row-background-even",bt="button-box-pressed-top-right",bm="arrow-left",bn="datechooser-weekday",bo="arrow-up",bp="icon/16/actions/dialog-ok.png",bu="button-box-top-right",bv="slidebar",W="#BABABA",V="button-box-hovered-bottom-right",U="tabview-page-button-top-bottom",T="move-frame",S="nodrop",R="window-caption",Q="table-header-cell",P="button-box-hovered-top-right",bb="row-layer",ba="treevirtual-plus-only",bw="move",bx="treevirtual-plus-end",by="-last",bz="vertical",bA="arrow-down-small",bB="tooltip-error",bC="window-restore",bD="resize-frame",bE="scroll-knob",bF="tabview-close",ci="atom/label",ch="button-box-pressed-bottom-right",cg="button-box-pressed-hovered-bottom-right",cf="icon/16/actions/dialog-cancel.png",cm="qx.theme.simple.Appearance",cl="menu-slidebar",ck="treevirtual-minus-cross",cj="background-pane",cp="table-",co="scroll-knob-pressed",cD="icon",cE="arrow-rewind",cB="icon/16/apps/office-calendar.png",cC="headline",cz="treevirtual-plus-start",cA="treevirtual-minus-end",cx="checkbox-undetermined",cy="button-box-bottom-right",cF="datechooser-week",cG="descending",cU="toolbar-separator",cT="arrow-up-small",cW="horizontal",cV="border-light-shadow",cY="text-placeholder",cX="treevirtual-plus-cross",db="scrollarea",da="treevirtual-line",cS="tabview-page-button-right-left",cR="menu-checkbox",dD="best-fit",dE="button-border",dF="treevirtual-cross",dG="button-hover",dz="menubar-button-pressed",dA="progressbar",dB="tree-file",dC="tooltip-text",dx="keep-align",dy="-first",j="alias",i="ascending",h="button-box-hovered-right-borderless",g="button-box-right-borderless",f="lead-item",e="checkbox-focused",d="border-blue",c="window-minimize",b="button-box-pressed-hovered-top-right",a="knob-",w="treevirtual-minus-only",x="treevirtual-minus-start",u="checkbox-checked",v="window",A="window-active",B="table-header-cell-first",y="button-box-pressed-right-borderless",z="scroll-knob-hovered",C="tabview-label-active-disabled",D="select-column-order",cq="button-box-pressed-hovered-right-borderless",cn="scroll-knob-pressed-hovered",cv="white-box",cr="datechooser-week-header",cd="menubar-button-hovered",cb="table-header-column-button",O="window-close",ce="datechooser-date-pane",Y="tabview-unselected",X="cursor-",bI="-focused",bJ="menu-radiobutton",bK="window-maximize",bL="treevirtual-end",bM="table",bN="arrow-forward",bO="copy",bP="table-row-background-selected",bG="radiobutton-focused",bH="scrollbar/slider/knob",cc="atom/icon",cu="table-header",ct="menu-separator",cs="link",cw="icon/16/actions/view-refresh.png";
qx.Theme.define(cm,{appearances:{"widget":{},"label":{style:function(dR){return {textColor:dR.disabled?dd:undefined};
}},"image":{style:function(dS){return {opacity:!dS.replacement&&dS.disabled?0.3:undefined};
}},"atom":{},"atom/label":dr,"atom/icon":dc,"root":{style:function(dT){return {backgroundColor:dg,textColor:dP,font:bi};
}},"popup":{style:function(dU){return {decorator:bX,backgroundColor:cj};
}},"tooltip":{include:bX,style:function(dV){return {backgroundColor:du,textColor:dC,decorator:du,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dh,"tooltip-error":{include:du,style:function(dW){return {textColor:bQ,showTimeout:100,hideTimeout:10000,decorator:bB,font:de,backgroundColor:undefined};
}},"tooltip-error/atom":dh,"iframe":{style:function(dX){return {backgroundColor:ca,decorator:df};
}},"move-frame":{style:function(dY){return {decorator:df};
}},"resize-frame":T,"dragdrop-cursor":{style:function(ea){var eb=S;

if(ea.copy){eb=bO;
}else if(ea.move){eb=bw;
}else if(ea.alias){eb=j;
}return {source:qx.theme.simple.Image.URLS[X+eb],position:F,offset:[2,16,2,6]};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dk,include:dk,style:function(ec){return {icon:qx.theme.simple.Image.URLS[q+(ec.vertical?dQ:l)]};
}},"slidebar/button-backward":{alias:dk,include:dk,style:function(ed){return {icon:qx.theme.simple.Image.URLS[q+(ed.vertical?I:J)]};
}},"table":dl,"table/statusbar":{style:function(ee){return {decorator:dL,padding:[2,5],backgroundColor:cM};
}},"table/column-button":{alias:dk,style:function(ef){return {decorator:cb,padding:3,icon:qx.theme.simple.Image.URLS[D]};
}},"table-column-reset-button":{include:dm,alias:dm,style:function(){return {icon:cw};
}},"table-scroller/scrollbar-x":cP,"table-scroller/scrollbar-y":cP,"table-scroller":dl,"table-scroller/header":{style:function(){return {decorator:cu};
}},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(eg){return {decorator:m};
}},"table-scroller/resize-line":{style:function(eh){return {backgroundColor:dE,width:3};
}},"table-header-cell":{alias:dh,style:function(ei){return {decorator:ei.first?B:Q,minWidth:13,font:de,paddingTop:3,paddingLeft:5,cursor:dj,sortIcon:ei.sorted?(qx.theme.simple.Image.URLS[cp+(ei.sortedAscending?i:cG)]):undefined};
}},"table-header-cell/icon":{include:cc,style:function(ej){return {paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ek){return {alignY:dq,alignX:l,paddingRight:5};
}},"table-editor-textfield":{include:dv,style:function(el){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:dK,alias:dK,style:function(em){return {padding:[0,2]};
}},"table-editor-combobox":{include:cQ,alias:cQ,style:function(en){return {decorator:undefined};
}},"treevirtual":bM,"treevirtual-folder":{style:function(eo){return {icon:(eo.opened?dI:bf)};
}},"treevirtual-file":{include:K,alias:K,style:function(ep){return {icon:bk};
}},"treevirtual-line":{style:function(eq){return {icon:qx.theme.simple.Image.URLS[da]};
}},"treevirtual-contract":{style:function(er){return {icon:qx.theme.simple.Image.URLS[dM]};
}},"treevirtual-expand":{style:function(es){return {icon:qx.theme.simple.Image.URLS[bl]};
}},"treevirtual-only-contract":{style:function(et){return {icon:qx.theme.simple.Image.URLS[w]};
}},"treevirtual-only-expand":{style:function(eu){return {icon:qx.theme.simple.Image.URLS[ba]};
}},"treevirtual-start-contract":{style:function(ev){return {icon:qx.theme.simple.Image.URLS[x]};
}},"treevirtual-start-expand":{style:function(ew){return {icon:qx.theme.simple.Image.URLS[cz]};
}},"treevirtual-end-contract":{style:function(ex){return {icon:qx.theme.simple.Image.URLS[cA]};
}},"treevirtual-end-expand":{style:function(ey){return {icon:qx.theme.simple.Image.URLS[bx]};
}},"treevirtual-cross-contract":{style:function(ez){return {icon:qx.theme.simple.Image.URLS[ck]};
}},"treevirtual-cross-expand":{style:function(eA){return {icon:qx.theme.simple.Image.URLS[cX]};
}},"treevirtual-end":{style:function(eB){return {icon:qx.theme.simple.Image.URLS[bL]};
}},"treevirtual-cross":{style:function(eC){return {icon:qx.theme.simple.Image.URLS[dF]};
}},"resizer":{style:function(eD){return {decorator:df};
}},"splitpane":{},"splitpane/splitter":{style:function(eE){return {backgroundColor:cM};
}},"splitpane/splitter/knob":{style:function(eF){return {source:qx.theme.simple.Image.URLS[a+(eF.horizontal?cW:bz)],padding:2};
}},"splitpane/slider":{style:function(eG){return {backgroundColor:cV,opacity:0.3};
}},"menu":{style:function(eH){var eI={backgroundColor:dg,decorator:m,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eH.submenu||eH.contextmenu?dD:dx};

if(eH.submenu){eI.position=F;
eI.offset=[-2,-3];
}
if(eH.contextmenu){eI.offset=4;
}return eI;
}},"menu/slidebar":cl,"menu-slidebar":dl,"menu-slidebar-button":{style:function(eJ){return {backgroundColor:eJ.hovered?bY:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dH,style:function(eK){return {icon:qx.theme.simple.Image.URLS[bo+(eK.hovered?cL:bV)]};
}},"menu-slidebar/button-forward":{include:dH,style:function(eL){return {icon:qx.theme.simple.Image.URLS[bS+(eL.hovered?cL:bV)]};
}},"menu-separator":{style:function(eM){return {height:0,decorator:ct,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dh,style:function(eN){return {backgroundColor:eN.selected?bY:undefined,textColor:eN.selected?bQ:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dc,style:function(eO){return {alignY:dq};
}},"menu-button/label":{include:dr,style:function(eP){return {alignY:dq,padding:1};
}},"menu-button/shortcut":{include:dr,style:function(eQ){return {alignY:dq,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dc,style:function(eR){return {source:qx.theme.simple.Image.URLS[G+(eR.selected?cL:bV)],alignY:dq};
}},"menu-checkbox":{alias:dm,include:dm,style:function(eS){return {icon:!eS.checked?undefined:qx.theme.simple.Image.URLS[cR+(eS.selected?cL:bV)]};
}},"menu-radiobutton":{alias:dm,include:dm,style:function(eT){return {icon:!eT.checked?undefined:qx.theme.simple.Image.URLS[bJ+(eT.selected?cL:bV)]};
}},"menubar":{style:function(eU){return {backgroundColor:cM,padding:[4,2]};
}},"menubar-button":{style:function(eV){var eX;
var eW=[2,6];

if(!eV.disabled){if(eV.pressed){eX=dz;
eW=[1,5,2,5];
}else if(eV.hovered){eX=cd;
eW=[1,5];
}}return {padding:eW,cursor:eV.disabled?undefined:dj,textColor:cs,decorator:eX};
}},"virtual-list":dp,"virtual-list/row-layer":bb,"row-layer":dl,"column-layer":dl,"group-item":{include:dr,alias:dr,style:function(eY){return {padding:4,backgroundColor:W,textColor:ca,font:de};
}},"virtual-selectbox":dK,"virtual-selectbox/dropdown":bX,"virtual-selectbox/dropdown/list":{alias:M},"virtual-combobox":cQ,"virtual-combobox/dropdown":bX,"virtual-combobox/dropdown/list":{alias:M},"virtual-tree":{include:bh,alias:bh,style:function(fa){return {itemHeight:21};
}},"virtual-tree-folder":t,"virtual-tree-file":dB,"cell":{style:function(fb){return {backgroundColor:fb.selected?bP:bs,textColor:fb.selected?bQ:dP,padding:[3,6]};
}},"cell-string":dt,"cell-number":{include:dt,style:function(fc){return {textAlign:l};
}},"cell-image":dt,"cell-boolean":dt,"cell-atom":dt,"cell-date":dt,"cell-html":dt,"htmlarea":{"include":dl,style:function(fd){return {backgroundColor:ca};
}},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(fe){var ff=bE;

if(!fe.disabled){if(fe.hovered&&!fe.pressed&&!fe.checked){ff=z;
}else if(fe.hovered&&(fe.pressed||fe.checked)){ff=cn;
}else if(fe.pressed||fe.checked){ff=co;
}}return {height:14,width:14,cursor:dj,decorator:ff,minHeight:fe.horizontal?undefined:20,minWidth:fe.horizontal?20:undefined};
}},"scrollbar/button":{style:function(fg){var fh={};
fh.padding=4;
var fi=bV;

if(fg.left){fi=J;
fh.marginRight=2;
}else if(fg.right){fi+=l;
fh.marginLeft=2;
}else if(fg.up){fi+=I;
fh.marginBottom=2;
}else{fi+=dQ;
fh.marginTop=2;
}fh.icon=qx.theme.simple.Image.URLS[q+fi];
fh.cursor=dj;
fh.decorator=di;
return fh;
}},"scrollbar/button-begin":dO,"scrollbar/button-end":dO,"scrollarea/corner":{style:function(fj){return {backgroundColor:dg};
}},"scrollarea":dl,"scrollarea/pane":dl,"scrollarea/scrollbar-x":cP,"scrollarea/scrollbar-y":cP,"textfield":{style:function(fk){var fm;

if(fk.disabled){fm=dd;
}else if(fk.showingPlaceholder){fm=cY;
}else{fm=undefined;
}var fn;
var fl;

if(fk.disabled){fn=cI;
fl=[2,3];
}else if(fk.invalid){fn=dN;
fl=[1,2];
}else if(fk.focused){fn=E;
fl=[1,2];
}else{fl=[2,3];
fn=cI;
}return {decorator:fn,padding:fl,textColor:fm,backgroundColor:fk.disabled?n:ca};
}},"textarea":dv,"radiobutton/icon":{style:function(fo){var fq=p;

if(fo.focused&&!fo.invalid){fq=bG;
}fq+=fo.invalid&&!fo.disabled?dJ:bV;
var fp;

if(fo.disabled&&fo.checked){fp=bg;
}else if(fo.disabled){fp=n;
}else if(fo.checked){fp=bY;
}return {decorator:fq,width:12,height:12,backgroundColor:fp};
}},"radiobutton":{style:function(fr){return {icon:qx.theme.simple.Image.URLS[L]};
}},"checkbox":{alias:dh,style:function(fs){var ft;
if(fs.checked){ft=qx.theme.simple.Image.URLS[u];
}else if(fs.undetermined){ft=qx.theme.simple.Image.URLS[cx];
}else{ft=qx.theme.simple.Image.URLS[L];
}return {icon:ft,gap:6};
}},"checkbox/icon":{style:function(fu){var fw=r;

if(fu.focused&&!fu.invalid){fw=e;
}fw+=fu.invalid&&!fu.disabled?dJ:bV;
var fv;
if(fu.checked){fv=2;
}else if(fu.undetermined){fv=[4,2];
}return {decorator:fw,width:12,height:12,padding:fv,backgroundColor:ca};
}},"spinner":{style:function(fx){return {textColor:fx.disabled?dd:undefined};
}},"spinner/textfield":dv,"spinner/upbutton":{alias:ds,include:ds,style:function(fy){var fz=bu;

if(fy.hovered&&!fy.pressed&&!fy.checked){fz=P;
}else if(fy.hovered&&(fy.pressed||fy.checked)){fz=b;
}else if(fy.pressed||fy.checked){fz=bt;
}return {icon:qx.theme.simple.Image.URLS[cT],decorator:fz,width:17};
}},"spinner/downbutton":{alias:ds,include:ds,style:function(fA){var fB=cy;

if(fA.hovered&&!fA.pressed&&!fA.checked){fB=V;
}else if(fA.hovered&&(fA.pressed||fA.checked)){fB=cg;
}else if(fA.pressed||fA.checked){fB=ch;
}return {icon:qx.theme.simple.Image.URLS[bA],decorator:fB,width:17};
}},"selectbox":cK,"selectbox/atom":dh,"selectbox/popup":bX,"selectbox/list":{alias:dp,include:dp,style:function(){return {decorator:undefined};
}},"selectbox/arrow":{include:dc,style:function(fC){return {source:qx.theme.simple.Image.URLS[bS],paddingRight:4,paddingLeft:5};
}},"combobox":{},"combobox/button":{alias:cK,include:cK,style:function(fD){var fE=g;

if(fD.hovered&&!fD.pressed&&!fD.checked){fE=h;
}else if(fD.hovered&&(fD.pressed||fD.checked)){fE=cq;
}else if(fD.pressed||fD.checked){fE=y;
}return {icon:qx.theme.simple.Image.URLS[bS],cursor:dj,decorator:fE,padding:[0,5],width:19};
}},"combobox/popup":bX,"combobox/list":{alias:dp},"combobox/textfield":dv,"datefield":cQ,"datefield/button":{alias:ds,include:ds,style:function(fF){return {icon:cB,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};
}},"datefield/list":{alias:bc,include:bc,style:function(fG){return {decorator:undefined};
}},"list":{alias:db,include:dv},"listitem":{alias:dh,style:function(fH){return {gap:4,padding:fH.lead?[2,4]:[3,5],backgroundColor:fH.selected?bY:undefined,textColor:fH.selected?bQ:undefined,decorator:fH.lead?f:undefined};
}},"slider":{style:function(fI){var fK;
var fJ;

if(fI.disabled){fK=cI;
fJ=[2,3];
}else if(fI.invalid){fK=dN;
fJ=[1,2];
}else if(fI.focused){fK=E;
fJ=[1,2];
}else{fJ=[2,3];
fK=cI;
}return {decorator:fK,padding:fJ};
}},"slider/knob":bH,"button-frame":{alias:dh,style:function(fL){var fM=di;

if(fL.hovered&&!fL.pressed&&!fL.checked){fM=bW;
}else if(fL.hovered&&(fL.pressed||fL.checked)){fM=bU;
}else if(fL.pressed||fL.checked){fM=bT;
}
if(fL.invalid&&!fL.disabled){fM+=dJ;
}else if(fL.focused){fM+=bI;
}return {decorator:fM,padding:[3,8],cursor:fL.disabled?undefined:dj,minWidth:5,minHeight:5};
}},"button-frame/label":{alias:ci,style:function(fN){return {textColor:fN.disabled?dd:undefined};
}},"button":{alias:cK,include:cK,style:function(fO){return {center:true};
}},"hover-button":{alias:dk,include:dk,style:function(fP){return {decorator:fP.hovered?dG:undefined};
}},"splitbutton":{},"splitbutton/button":{alias:dh,style:function(fQ){var fR=di;

if(fQ.disabled){fR=di;
}else if(fQ.focused){fR=bd;
}else if(fQ.hovered&&!fQ.pressed&&!fQ.checked){fR=bW;
}else if(fQ.hovered&&(fQ.pressed||fQ.checked)){fR=bU;
}else if(fQ.pressed||fQ.checked){fR=bT;
}fR+=s;
return {decorator:fR,padding:[3,8],cursor:fQ.disabled?undefined:dj};
}},"splitbutton/arrow":{style:function(fS){var fT=di;

if(fS.disabled){fT=di;
}else if(fS.focused){fT=bd;
}else if(fS.hovered&&!fS.pressed&&!fS.checked){fT=bW;
}else if(fS.hovered&&(fS.pressed||fS.checked)){fT=bU;
}else if(fS.pressed||fS.checked){fT=bT;
}fT+=o;
return {icon:qx.theme.simple.Image.URLS[bS],decorator:fT,cursor:dj,padding:[3,4]};
}},"groupbox":{},"groupbox/legend":{alias:dh,style:function(fU){return {textColor:fU.invalid?cN:undefined,padding:5,margin:4,font:de};
}},"groupbox/frame":{style:function(fV){return {backgroundColor:dg,padding:[6,9],margin:[18,2,2,2],decorator:cv};
}},"check-groupbox":bR,"check-groupbox/legend":{alias:r,include:r,style:function(fW){return {textColor:fW.invalid?cN:undefined,padding:5,margin:4,font:de};
}},"radio-groupbox":bR,"radio-groupbox/legend":{alias:p,include:p,style:function(fX){return {textColor:fX.invalid?cN:undefined,padding:5,margin:4,font:de};
}},"tree-folder/open":{include:dc,style:function(fY){return {source:fY.opened?qx.theme.simple.Image.URLS[dM]:qx.theme.simple.Image.URLS[bl]};
}},"tree-folder":{style:function(ga){return {padding:[2,8,2,5],icon:ga.opened?dI:bf,backgroundColor:ga.selected?bY:undefined,iconOpened:dI};
}},"tree-folder/icon":{include:dc,style:function(gb){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(gc){return {padding:[1,2],textColor:gc.selected?bQ:undefined};
}},"tree-file":{include:t,alias:t,style:function(gd){return {icon:bk};
}},"tree":{include:dp,alias:dp,style:function(ge){return {contentPadding:ge.invalid&&!ge.disabled?[3,0]:[4,1],padding:ge.focused?0:1};
}},"window":{style:function(gf){return {contentPadding:[10,10,10,10],backgroundColor:dg,decorator:gf.maximized?undefined:gf.active?A:v};
}},"window-resize-frame":bD,"window/pane":{},"window/captionbar":{style:function(gg){return {backgroundColor:gg.active?cM:n,padding:8,font:de,decorator:R};
}},"window/icon":{style:function(gh){return {marginRight:4};
}},"window/title":{style:function(gi){return {cursor:bi,font:de,marginRight:20,alignY:dq};
}},"window/minimize-button":{alias:dk,style:function(gj){return {icon:qx.theme.simple.Image.URLS[c],padding:[1,2],cursor:gj.disabled?undefined:dj};
}},"window/restore-button":{alias:dk,style:function(gk){return {icon:qx.theme.simple.Image.URLS[bC],padding:[1,2],cursor:gk.disabled?undefined:dj};
}},"window/maximize-button":{alias:dk,style:function(gl){return {icon:qx.theme.simple.Image.URLS[bK],padding:[1,2],cursor:gl.disabled?undefined:dj};
}},"window/close-button":{alias:dk,style:function(gm){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[O],padding:[1,2],cursor:gm.disabled?undefined:dj};
}},"window/statusbar":{style:function(gn){return {decorator:dL,padding:[2,6]};
}},"window/statusbar-text":dr,"datechooser":{style:function(go){return {decorator:m};
}},"datechooser/navigation-bar":{style:function(gp){return {backgroundColor:dg,textColor:gp.disabled?dd:gp.invalid?cN:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":du,"datechooser/last-month-button-tooltip":du,"datechooser/next-year-button-tooltip":du,"datechooser/next-month-button-tooltip":du,"datechooser/last-year-button":k,"datechooser/last-month-button":k,"datechooser/next-year-button":k,"datechooser/next-month-button":k,"datechooser/button/icon":{},"datechooser/button":{style:function(gq){var gr={width:17,show:cD,cursor:dj};

if(gq.lastYear){gr.icon=qx.theme.simple.Image.URLS[cE];
}else if(gq.lastMonth){gr.icon=qx.theme.simple.Image.URLS[bm];
}else if(gq.nextYear){gr.icon=qx.theme.simple.Image.URLS[bN];
}else if(gq.nextMonth){gr.icon=qx.theme.simple.Image.URLS[G];
}return gr;
}},"datechooser/month-year-label":{style:function(gs){return {font:de,textAlign:cH};
}},"datechooser/date-pane":{style:function(gt){return {decorator:ce,backgroundColor:dg};
}},"datechooser/weekday":{style:function(gu){return {decorator:bn,font:de,textAlign:cH,textColor:gu.disabled?dd:gu.weekend?cO:dg,backgroundColor:gu.weekend?dg:cO,paddingTop:2};
}},"datechooser/day":{style:function(gv){return {textAlign:cH,decorator:gv.today?m:undefined,textColor:gv.disabled?dd:gv.selected?bQ:gv.otherMonth?dd:undefined,backgroundColor:gv.disabled?undefined:gv.selected?bY:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gw){return {textAlign:cH,textColor:cO,padding:[2,4],decorator:gw.header?cr:cF};
}},"progressbar":{style:function(gx){return {decorator:dA,padding:1,backgroundColor:ca};
}},"progressbar/progress":{style:function(gy){return {backgroundColor:gy.disabled?bg:bY};
}},"toolbar":{style:function(gz){return {backgroundColor:cM,padding:0};
}},"toolbar/part":{style:function(gA){return {margin:[0,15]};
}},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(gB){return {decorator:cU,margin:[7,0],width:4};
}},"toolbar-button":{alias:dh,style:function(gC){var gE=di;

if(gC.disabled){gE=di;
}else if(gC.hovered&&!gC.pressed&&!gC.checked){gE=bW;
}else if(gC.hovered&&(gC.pressed||gC.checked)){gE=bU;
}else if(gC.pressed||gC.checked){gE=bT;
}if(gC.left){gE+=s;
}else if(gC.right){gE+=o;
}else if(gC.middle){gE+=cJ;
}var gD=[7,10];

if(gC.left||gC.middle||gC.right){gD=[7,0];
}return {cursor:dj,decorator:gE,margin:gD,padding:[3,5]};
}},"toolbar-menubutton":{alias:dn,include:dn,style:function(gF){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dc,include:dc,style:function(gG){return {source:qx.theme.simple.Image.URLS[bS],cursor:dj,padding:[0,5],marginLeft:2};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:dn,include:dn,style:function(gH){var gI=di;

if(gH.disabled){gI=di;
}else if(gH.hovered&&!gH.pressed&&!gH.checked){gI=bW;
}else if(gH.hovered&&(gH.pressed||gH.checked)){gI=bU;
}else if(gH.pressed||gH.checked){gI=bT;
}if(gH.left){gI+=s;
}else if(gH.right){gI+=cJ;
}else if(gH.middle){gI+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bS],decorator:gI};
}},"toolbar-splitbutton/arrow":{alias:dn,include:dn,style:function(gJ){var gK=di;

if(gJ.disabled){gK=di;
}else if(gJ.hovered&&!gJ.pressed&&!gJ.checked){gK=bW;
}else if(gJ.hovered&&(gJ.pressed||gJ.checked)){gK=bU;
}else if(gJ.pressed||gJ.checked){gK=bT;
}if(gJ.left){gK+=cJ;
}else if(gJ.right){gK+=o;
}else if(gJ.middle){gK+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bS],decorator:gK};
}},"tabview":{},"tabview/bar":{alias:bv,style:function(gL){var gM=0,gP=0,gN=0,gO=0;

if(gL.barTop){gN-=2;
}else if(gL.barBottom){gM-=2;
}else if(gL.barRight){gO-=2;
}else{gP-=2;
}return {marginBottom:gN,marginTop:gM,marginLeft:gO,marginRight:gP};
}},"tabview/bar/button-forward":{include:be,alias:be,style:function(gQ){var gR=di;

if(gQ.hovered&&!gQ.pressed&&!gQ.checked){gR=bW;
}else if(gQ.hovered&&(gQ.pressed||gQ.checked)){gR=bU;
}else if(gQ.pressed||gQ.checked){gR=bT;
}
if(gQ.barTop){return {marginTop:4,marginBottom:2,decorator:gR+H};
}else if(gQ.barBottom){return {marginTop:2,marginBottom:4,decorator:gR+N};
}else if(gQ.barLeft){return {marginLeft:4,marginRight:2,decorator:gR+br};
}else{return {marginLeft:2,marginRight:4,decorator:gR+N};
}}},"tabview/bar/button-backward":{include:bq,alias:bq,style:function(gS){var gT=di;

if(gS.hovered&&!gS.pressed&&!gS.checked){gT=bW;
}else if(gS.hovered&&(gS.pressed||gS.checked)){gT=bU;
}else if(gS.pressed||gS.checked){gT=bT;
}
if(gS.barTop){return {marginTop:4,marginBottom:2,decorator:gT+bj};
}else if(gS.barBottom){return {marginTop:2,marginBottom:4,decorator:gT+br};
}else if(gS.barLeft){return {marginLeft:4,marginRight:2,decorator:gT+bj};
}else{return {marginLeft:2,marginRight:4,decorator:gT+H};
}}},"tabview/pane":{style:function(gU){return {backgroundColor:dg,decorator:d,padding:10};
}},"tabview-page":dl,"tabview-page/button":{style:function(gV){var hf;
var hd=0,hb=0,gX=0,ha=0;
if(gV.barTop||gV.barBottom){var gY=5,gW=5,hc=9,he=9;
}else{var gY=8,gW=8,hc=4,he=4;
}if(gV.barTop||gV.barBottom){hf=U;
}else if(gV.barRight||gV.barLeft){hf=cS;
}if(gV.checked){if(gV.barTop){hc+=1;
he+=1;
gY+=4;
}else if(gV.barBottom){hc+=1;
he+=1;
gY+=2;
}else if(gV.barLeft){gY+=1;
gW+=1;
hc+=4;
}else if(gV.barRight){gY+=1;
gW+=1;
hc+=2;
}}else{if(gV.barTop){gX+=2;
hd+=4;
}else if(gV.barBottom){gX+=4;
hd+=2;
}else if(gV.barLeft){hb+=2;
ha+=4;
}else if(gV.barRight){hb+=4;
ha+=2;
}}
if(gV.firstTab&&!gV.checked){hf+=dy;
}else if(gV.lastTab&&!gV.checked){hf+=by;
}return {zIndex:gV.checked?10:5,decorator:gV.checked?undefined:hf,backgroundColor:gV.checked?bY:Y,textColor:gV.disabled?gV.checked?C:dd:ca,padding:[gY,he,gW,hc],margin:[hd,hb,gX,ha]};
}},"tabview-page/button/label":{alias:dr,style:function(hg){return {padding:[0,1,0,1],margin:hg.focused?0:1};
}},"tabview-page/button/icon":dc,"tabview-page/button/close-button":{alias:dh,style:function(hh){return {cursor:hh.disabled?undefined:dj,icon:qx.theme.simple.Image.URLS[bF]};
}},"colorpopup":{alias:bX,include:bX,style:function(hi){return {padding:5};
}},"colorpopup/field":{style:function(hj){return {margin:2,width:14,height:14,backgroundColor:dg,decorator:df};
}},"colorpopup/selector-button":dk,"colorpopup/auto-button":dk,"colorpopup/preview-pane":bR,"colorpopup/current-preview":{style:function(hk){return {height:20,padding:4,marginLeft:4,decorator:df,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hl){return {height:20,padding:4,marginRight:4,decorator:df,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dk,include:dk,style:function(hm){return {icon:bp};
}},"colorpopup/colorselector-cancelbutton":{alias:dk,include:dk,style:function(hn){return {icon:cf};
}},"colorselector":dl,"colorselector/control-bar":dl,"colorselector/visual-pane":bR,"colorselector/control-pane":dl,"colorselector/preset-grid":dl,"colorselector/colorbucket":{style:function(ho){return {decorator:df,width:16,height:16};
}},"colorselector/preset-field-set":bR,"colorselector/input-field-set":bR,"colorselector/preview-field-set":bR,"colorselector/hex-field-composite":dl,"colorselector/hex-field":dv,"colorselector/rgb-spinner-composite":dl,"colorselector/rgb-spinner-red":dw,"colorselector/rgb-spinner-green":dw,"colorselector/rgb-spinner-blue":dw,"colorselector/hsb-spinner-composite":dl,"colorselector/hsb-spinner-hue":dw,"colorselector/hsb-spinner-saturation":dw,"colorselector/hsb-spinner-brightness":dw,"colorselector/preview-content-old":{style:function(hp){return {decorator:df,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hq){return {decorator:df,backgroundColor:ca,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(hr){return {decorator:df,margin:5};
}},"colorselector/brightness-field":{style:function(hs){return {decorator:df,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dl,"colorselector/hue-saturation-handle":dl,"colorselector/brightness-pane":dl,"colorselector/brightness-handle":dl,"app-header":{style:function(ht){return {font:cC,textColor:bQ,backgroundColor:cO,padding:[8,12]};
}},"app-header-label":{style:function(hu){return {paddingTop:5};
}}}});
})();
(function(){var a="qx.theme.simple.Image";
qx.Class.define(a,{extend:qx.core.Object,statics:{URLS:{"blank":"qx/static/blank.gif","checkbox-checked":"decoration/checkbox/checked.png","checkbox-undetermined":"decoration/checkbox/undetermined.png","window-minimize":"decoration/window/minimize.gif","window-maximize":"decoration/window/maximize.gif","window-restore":"decoration/window/restore.gif","window-close":"decoration/window/close.gif","cursor-copy":"decoration/cursors/copy.gif","cursor-move":"decoration/cursors/move.gif","cursor-alias":"decoration/cursors/alias.gif","cursor-nodrop":"decoration/cursors/nodrop.gif","arrow-right":"decoration/arrows/right.gif","arrow-left":"decoration/arrows/left.gif","arrow-up":"decoration/arrows/up.gif","arrow-down":"decoration/arrows/down.gif","arrow-forward":"decoration/arrows/forward.gif","arrow-rewind":"decoration/arrows/rewind.gif","arrow-down-small":"decoration/arrows/down-small.gif","arrow-up-small":"decoration/arrows/up-small.gif","arrow-up-invert":"decoration/arrows/up-invert.gif","arrow-down-invert":"decoration/arrows/down-invert.gif","arrow-right-invert":"decoration/arrows/right-invert.gif","knob-horizontal":"decoration/splitpane/knob-horizontal.png","knob-vertical":"decoration/splitpane/knob-vertical.png","tree-minus":"decoration/tree/minus.gif","tree-plus":"decoration/tree/plus.gif","select-column-order":"decoration/table/select-column-order.png","table-ascending":"decoration/table/ascending.png","table-descending":"decoration/table/descending.png","treevirtual-line":"decoration/treevirtual/line.gif","treevirtual-minus-only":"decoration/treevirtual/only_minus.gif","treevirtual-plus-only":"decoration/treevirtual/only_plus.gif","treevirtual-minus-start":"decoration/treevirtual/start_minus.gif","treevirtual-plus-start":"decoration/treevirtual/start_plus.gif","treevirtual-minus-end":"decoration/treevirtual/end_minus.gif","treevirtual-plus-end":"decoration/treevirtual/end_plus.gif","treevirtual-minus-cross":"decoration/treevirtual/cross_minus.gif","treevirtual-plus-cross":"decoration/treevirtual/cross_plus.gif","treevirtual-end":"decoration/treevirtual/end.gif","treevirtual-cross":"decoration/treevirtual/cross.gif","menu-checkbox":"decoration/menu/checkbox.gif","menu-checkbox-invert":"decoration/menu/checkbox-invert.gif","menu-radiobutton-invert":"decoration/menu/radiobutton-invert.gif","menu-radiobutton":"decoration/menu/radiobutton.gif","tabview-close":"decoration/tabview/close.gif"}}});
})();
(function(){var l="list",k="checkbox",j="inset",i="table",h="textarea",g="text",f="fce.theme.Appearance",e="background-disabled",d="text-disabled",c="white",a="border-invalid",b="text-placeholder";
qx.Theme.define(f,{extend:qx.theme.simple.Appearance,appearances:{"listitem/checkbox":{alias:k,include:k,style:function(m){return {padding:[0,35,0,0]};
}},"featureselector":{},"featureselector/list":{alias:l,include:l},"listitem/textfield":{style:function(n){var p;

if(n.disabled){p=d;
}else if(n.showingPlaceholder){p=b;
}else{p=g;
}var q;
var o;

if(n.disabled){q=j;
o=[2,3];
}else if(n.invalid){q=a;
o=[1,2];
}else{o=[2,3];
q=j;
}return {decorator:q,padding:o,textColor:p,backgroundColor:n.disabled?e:c};
}},"featureselector/table":{alias:i,include:i},"featureselector/textarea":{alias:h,include:h}}});
})();
(function(){var j="white",i="#5685D6",h="black",g="#6694E3",f="#EEE",e="gray",d="#D9D9D9",c="#1866B5",b="#24B",a="#FF0000",N="#CCCCCC",M="rgba(0, 0, 0, 0.4)",L="#FFFFE1",K="#B7B7B7",J="#BBBBBB",I="#9DCBFE",H="#A7A6AA",G="#EBEBEB",F="#666666",E="#CBC8CD",q="#F9F9F9",r="#F7F7F7",o="#808080",p="#686868",m="#888888",n="#E0ECFF",k="#2E3A46",l="css.rgba",s="#F5F5F5",t="#E3E3E3",w="#DDDDDD",v="#BBB",y="qx.theme.simple.Color",x="#F1F1F1",A="#939393",z="#BCBCBC",u="#134983",D="#E8F0E3",C="#FAFBFE",B="#AAAAAA";
qx.Theme.define(y,{colors:{"background":j,"dark-blue":i,"light-background":n,"background-selected":g,"background-selected-dark":i,"background-disabled":r,"background-disabled-checked":J,"background-pane":C,"tabview-unselected":c,"tabview-button-border":u,"tabview-label-active-disabled":d,"link":b,"scrollbar-bright":x,"scrollbar-dark":G,"button":D,"button-border":v,"button-border-hovered":A,"invalid":a,"button-box-bright":q,"button-box-dark":t,"button-box-bright-pressed":w,"button-box-dark-pressed":s,"border-lead":m,"window-border":k,"window-border-inner":I,"white-box-border":z,"shadow":qx.core.Environment.get(l)?M:F,"border-main":g,"border-light":K,"border-light-shadow":p,"border-separator":o,"text":h,"text-disabled":H,"text-selected":j,"text-placeholder":E,"tooltip":L,"tooltip-text":h,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":j,"table-row-background-odd":j,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":f,"table-column-line":f,"progressive-table-header":B,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":N,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":j}});
})();
(function(){var a="fce.theme.Color";
qx.Theme.define(a,{extend:qx.theme.simple.Color,colors:{}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b}});
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
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="engine.name",f="horizontal",e=",",d=" 0",c="px",b="browser.name",a="0",K="shorthand",J="Color",I="vertical",H="",G="Number",F="webkit",E="%",D="),to(",C="from(",B="background-image",q="engine.version",r="-moz-",o="-webkit-gradient(linear,",p="startColorPosition",m="-o-",n="deg, ",k="startColor",l="ie",s="qx.ui.decoration.MLinearBackgroundGradient",t="endColorPosition",w="opera",v="linear-gradient(",y="endColor",x="-ms-",A="gecko",z="background",u="-webkit-";
qx.Mixin.define(s,{properties:{startColor:{check:J,nullable:true,apply:j},endColor:{check:J,nullable:true,apply:j},orientation:{check:[f,I],init:I,apply:j},startColorPosition:{check:G,init:0,apply:j},endColorPosition:{check:G,init:100,apply:j},colorPositionUnit:{check:[c,E],init:E,apply:j},gradientStart:{group:[k,p],mode:K},gradientEnd:{group:[y,t],mode:K}},members:{_styleLinearBackgroundGradient:function(L){var O=qx.theme.manager.Color.getInstance();
var U=this.getColorPositionUnit();
if(qx.core.Environment.get(g)==F&&parseFloat(qx.core.Environment.get(q))<534.16){U=U===c?H:U;

if(this.getOrientation()==f){var T=this.getStartColorPosition()+U+d+U;
var S=this.getEndColorPosition()+U+d+U;
}else{var T=a+U+i+this.getStartColorPosition()+U;
var S=a+U+i+this.getEndColorPosition()+U;
}var Q=C+O.resolve(this.getStartColor())+D+O.resolve(this.getEndColor())+h;
var P=o+T+e+S+e+Q+h;
L[z]=P;
}else{var V=this.getOrientation()==f?0:270;
var N=O.resolve(this.getStartColor())+i+this.getStartColorPosition()+U;
var M=O.resolve(this.getEndColor())+i+this.getEndColorPosition()+U;
var R=H;

if(qx.core.Environment.get(g)==A){R=r;
}else if(qx.core.Environment.get(b)==w){R=m;
}else if(qx.core.Environment.get(b)==l){R=x;
}else if(qx.core.Environment.get(g)==F){R=u;
}L[B]=R+v+V+n+N+e+M+h;
}},_resizeLinearBackgroundGradient:function(W,X,Y){var ba=this.getInsets();
X-=ba.left+ba.right;
Y-=ba.top+ba.bottom;
return {left:ba.left,top:ba.top,width:X,height:Y};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__qY;
this._resizeBorder=this.__qX;
this._styleBorder=this.__qV;
this._generateMarkup=this.__qW;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__qU:null,__qV:function(D){var E=qx.theme.manager.Color.getInstance();
D.position=t;
var F=this.getInnerWidthTop();

if(F>0){D[e]=F+j+this.getStyleTop()+i+E.resolve(this.getInnerColorTop());
}var F=this.getInnerWidthRight();

if(F>0){D[b]=F+j+this.getStyleRight()+i+E.resolve(this.getInnerColorRight());
}var F=this.getInnerWidthBottom();

if(F>0){D[c]=F+j+this.getStyleBottom()+i+E.resolve(this.getInnerColorBottom());
}var F=this.getInnerWidthLeft();

if(F>0){D[d]=F+j+this.getStyleLeft()+i+E.resolve(this.getInnerColorLeft());
}},__qW:function(G){var J=this._generateBackgroundMarkup(G);
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
return this.__qU=this._generateBackgroundMarkup(G,J);
},__qX:function(K,L,M){var N=this.getInsets();
L-=N.left+N.right;
M-=N.top+N.bottom;
var O=N.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=N.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:O,top:top,width:L,height:M,elementToApplyDimensions:K.firstChild};
},__qY:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
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
(function(){var j="tabview-button-border",i="button-box",h="button-box-pressed",g="background-selected",f="button-border",e="button-box-hovered",d="button-box-pressed-hovered",c="solid",b="invalid",a="gray",X="button-border-hovered",W="tabview-unselected",V="shadow",U="border-separator",T="button-box-focused",S="border-light",R="checkbox",Q="tabview-page-button-top-bottom",P="window-border",O="radiobutton",q="scroll-knob",r="tabview-page-button-right-left",o="background",p="button-box-bright",m="window-border-inner",n="white",k="button-box-bright-pressed",l="button-box-dark-pressed",u="table-header",v="button-box-invalid",C="menubar-button-hovered",A="button-box-dark",G="#999999",E="qx/decoration/Simple",K="dotted",I="button",x="tooltip-text",N="table-focus-indicator",M="button-box-pressed-invalid",L="scrollbar-dark",w="qx.theme.simple.Decoration",y="table-header-cell",z="border-lead",B="#FFF",D="button-box-pressed-focused",F="scrollbar-bright",H="border-light-shadow",J="white-box-border",s="window",t="scroll-knob-pressed";
qx.Theme.define(w,{aliases:{decoration:E},decorations:{"border-blue":{decorator:qx.ui.decoration.Uniform,style:{width:4,color:g}},"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:g}},"main-dark":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:f}},"popup":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,shadowLength:2,shadowBlurRadius:5,shadowColor:V}},"button-box":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,gradientStart:[p,40],gradientEnd:[A,70],backgroundColor:p}},"button-box-pressed":{include:i,style:{gradientStart:[k,40],gradientEnd:[l,70],backgroundColor:k}},"button-box-pressed-hovered":{include:h,style:{color:X}},"button-box-hovered":{include:i,style:{color:X}},"button-box-invalid":{include:i,style:{color:b}},"button-box-pressed-invalid":{include:h,style:{color:b}},"button-box-hovered-invalid":{include:v},"button-box-pressed-hovered-invalid":{include:M},"button-box-focused":{include:i,style:{color:g}},"button-box-pressed-focused":{include:h,style:{color:g}},"button-box-hovered-focused":{include:T},"button-box-pressed-hovered-focused":{include:D},"button-box-right":{include:i,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:h,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:d,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:e,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:T,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:i,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:h,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:d,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:e,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:i,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:h,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:d,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:e,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:i,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:h,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:d,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:e,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:i,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:h,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:d,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:e,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:i,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:h,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:d,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:e,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:i,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:h,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:d,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:e,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:i,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:h,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:d,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:e,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:T,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:U}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:U}},"scroll-knob":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,backgroundColor:F}},"scroll-knob-pressed":{include:q,style:{backgroundColor:L}},"scroll-knob-hovered":{include:q,style:{color:X}},"scroll-knob-pressed-hovered":{include:t,style:{color:X}},"button-hover":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{backgroundColor:I,radius:3}},"window":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,innerWidth:4,innerColor:m,shadowLength:1,shadowBlurRadius:3,shadowColor:V,backgroundColor:o}},"window-active":{include:s,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{decorator:qx.ui.decoration.Single,style:{width:[0,0,2,0],color:m}},"white-box":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:J,shadowBlurRadius:2,shadowColor:G,radius:7,backgroundColor:n}},"inset":{decorator:qx.ui.decoration.Single,style:{width:1,color:[H,S,S,S]}},"focused-inset":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:g}},"border-invalid":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:b}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:K,color:z}},"tooltip":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{width:1,color:x,shadowLength:1,shadowBlurRadius:2,shadowColor:V}},"tooltip-error":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{radius:5,backgroundColor:b}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:f}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"menubar-button-hovered":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:1,color:g,radius:3,backgroundColor:n}},"menubar-button-pressed":{include:C,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:a,style:c}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,style:c}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:a,style:c}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,widthRight:1,colorRight:a,style:c}},"tabview-page-button-top-bottom":{decorator:qx.ui.decoration.Single,style:{width:[0,1],color:j}},"tabview-page-button-top-bottom-first":{include:Q,style:{color:[j,j,j,W]}},"tabview-page-button-top-bottom-last":{include:Q,style:{color:[j,W,j,j]}},"tabview-page-button-right-left":{decorator:qx.ui.decoration.Single,style:{width:[1,0],color:j}},"tabview-page-button-right-left-first":{include:r,style:{color:[W,j,j,j]}},"tabview-page-button-right-left-last":{include:r,style:{color:[j,j,W,j]}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g,styleTop:c}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:N,style:c}},"table-header":{include:i,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:u,style:{width:1,color:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,color:f}},"table-header-cell-first":{include:y,style:{widthLeft:1}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:B,width:1,color:U}},"radiobutton":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:10,width:1,color:f,innerColor:o,innerWidth:2}},"radiobutton-focused":{include:O,style:{color:g}},"radiobutton-invalid":{include:O,style:{color:b}},"checkbox":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:f}},"checkbox-focused":{include:R,style:{color:g}},"checkbox-invalid":{include:R,style:{color:b}}}});
})();
(function(){var a="fce.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.simple.Decoration,decorations:{}});
})();
(function(){var a="fce.theme.Theme";
qx.Theme.define(a,{meta:{color:fce.theme.Color,decoration:fce.theme.Decoration,font:fce.theme.Font,icon:qx.theme.icon.Tango,appearance:fce.theme.Appearance}});
})();


qx.$$loader.init();

