(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"engine.name":"webkit","qx.application":"mobileshowcase.Application","qx.debug":false,"qx.mobile.emulatetouch":true,"qx.mobile.nativescroll":false,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"28155","qx.theme":"qx.theme.Modern","qx.version":"1.5"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"mobileshowcase":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.5"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:mobileshowcase.813a9d2eb49b.js"]}},
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"}},"resources":{"mobileshowcase/css/styles.css":"mobileshowcase","mobileshowcase/icon/arrowleft.png":[26,26,"png","mobileshowcase"],"mobileshowcase/icon/camera.png":[26,26,"png","mobileshowcase"],"qx/icon/Tango/22/apps/internet-mail.png":[22,22,"png","qx"],"qx/mobile/css/LICENSE":"qx","qx/mobile/css/android/android.css":"qx","qx/mobile/css/common/main.css":"qx","qx/mobile/css/ios/ios.css":"qx","qx/mobile/icon/android/arrow.png":[25,20,"png","qx"],"qx/mobile/icon/android/arrow_pressed.png":[25,20,"png","qx"],"qx/mobile/icon/android/cancel.png":[20,20,"png","qx"],"qx/mobile/icon/android/checkbox-gray.png":[22,19,"png","qx"],"qx/mobile/icon/android/checkbox-green.png":[22,19,"png","qx"],"qx/mobile/icon/android/loading.png":[32,32,"png","qx"],"qx/mobile/icon/android/on_off.png":[149,27,"png","qx"],"qx/mobile/icon/android/scrollbar.png":[7,7,"png","qx"],"qx/mobile/icon/ios/arrow.png":[25,20,"png","qx"],"qx/mobile/icon/ios/arrow_pressed.png":[25,20,"png","qx"],"qx/mobile/icon/ios/backButton.png":[43,30,"png","qx"],"qx/mobile/icon/ios/backButton_pressed.png":[43,30,"png","qx"],"qx/mobile/icon/ios/cancel.png":[20,20,"png","qx"],"qx/mobile/icon/ios/checkbox.png":[22,21,"png","qx"],"qx/mobile/icon/ios/loading.png":[32,32,"png","qx"],"qx/mobile/icon/ios/on_off.png":[149,27,"png","qx"],"qx/mobile/icon/ios/pinstripes.png":[7,1,"png","qx"],"qx/mobile/icon/ios/scrollbar.png":[7,7,"png","qx"],"qx/mobile/icon/ios/toolButton.png":[16,30,"png","qx"],"qx/mobile/icon/ios/toolButton_pressed.png":[16,30,"png","qx"],"qx/mobile/js/LICENSE":"qx","qx/mobile/js/iscroll-debug.js":"qx","qx/mobile/js/iscroll.js":"qx"},"translations":{"C":{},"en":{}}};
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
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var k="os.name",j="default",h="browser.quirksmode",g="browser.name",f="phonegap",e="qx.allowUrlSettings",d="io.ssl",c="css.translate3d",b="locale.variant",a="html.classlist",N="event.touch",M="browser.documentmode",L="ecmascript.objectcount",K="engine.version",J="locale",I="|",H="browser.version",G="qx.core.Environment",F="qx.debug.databinding",E="qx.optimization.basecalls",r="qx.debug.dispose",s="qx.optimization.variables",p="true",q="qx.optimization.privates",n="qx.aspects",o="qx.debug",l="qx.dynamicmousewheel",m=":",t="qxenv",u="qx.optimization.strings",x="qx.optimization.comments",w="qx.optimization.variants",z="qx.mobile.emulatetouch",y="qx.dynlocale",B="false",A="&",v="qx.mobile.nativescroll",D="qx.allowUrlVariants",C="qx.propertyDebugLevel";
qx.Bootstrap.define(G,{statics:{_checks:{},_asyncChecks:{},__cJ:{},get:function(O){if(this.__cJ[O]!=undefined){return this.__cJ[O];
}var P=this._checks[O];

if(P){var Q=P();
this.__cJ[O]=Q;
return Q;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(O+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(R,S,self){var U=this;

if(this.__cJ[R]!=undefined){window.setTimeout(function(){S.call(self,U.__cJ[R]);
},0);
return;
}var T=this._asyncChecks[R];

if(T){T(function(V){U.__cJ[R]=V;
S.call(self,V);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(R+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(W,X){return this.__cK(this.get(W),X);
},selectAsync:function(Y,ba,self){this.getAsync(Y,function(bb){var bc=this.__cK(Y,ba);
bc.call(self,bb);
},this);
},__cK:function(bd,be){var bg=be[bd];

if(be.hasOwnProperty(bd)){return bg;
}for(var bf in be){if(bf.indexOf(I)!=-1){var bh=bf.split(I);

for(var i=0;i<bh.length;i++){if(bh[i]==bd){return be[bf];
}}}}
if(be[j]!==undefined){return be[j];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bd+'" ('+(typeof bd)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(be)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(bi){delete this.__cJ[bi];
},add:function(bj,bk){if(this._checks[bj]==undefined){if(bk instanceof Function){this._checks[bj]=bk;
}else{this._checks[bj]=this.__cN(bk);
}}},addAsync:function(bl,bm){if(this._checks[bl]==undefined){this._asyncChecks[bl]=bm;
}},_initDefaultQxValues:function(){this.add(e,function(){return false;
});
this.add(D,function(){return false;
});
this.add(C,function(){return 0;
});
this.add(o,function(){return true;
});
this.add(n,function(){return false;
});
this.add(y,function(){return true;
});
this.add(z,function(){return false;
});
this.add(v,function(){return false;
});
this.add(l,function(){return true;
});
this.add(F,function(){return false;
});
this.add(r,function(){return false;
});
this.add(E,function(){return false;
});
this.add(x,function(){return false;
});
this.add(q,function(){return false;
});
this.add(u,function(){return false;
});
this.add(s,function(){return false;
});
this.add(w,function(){return false;
});
},__cL:function(){if(qx&&qx.$$environment){for(var bo in qx.$$environment){var bn=qx.$$environment[bo];
this._checks[bo]=this.__cN(bn);
}}},__cM:function(){if(window.document&&window.document.location){var bp=window.document.location.search.slice(1).split(A);

for(var i=0;i<bp.length;i++){var br=bp[i].split(m);

if(br.length!=3||br[0]!=t){continue;
}var bs=br[1];
var bq=decodeURIComponent(br[2]);
if(bq==p){bq=true;
}else if(bq==B){bq=false;
}else if(/^(\d|\.)+$/.test(bq)){bq=parseFloat(bq);
}this._checks[bs]=this.__cN(bq);
}}},__cN:function(bt){return qx.Bootstrap.bind(function(bu){return bu;
},null,bt);
},useCheck:function(bv){return true;
},_initChecksMap:function(){if(this.useCheck(K)){this._checks[K]=qx.bom.client.Engine.getVersion;
}if(this.useCheck(g)){this._checks[g]=qx.bom.client.Browser.getName;
}
if(this.useCheck(H)){this._checks[H]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(M)){this._checks[M]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(J)){this._checks[J]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(k)){this._checks[k]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(d)){this._checks[d]=qx.bom.client.Transport.getSsl;
}if(this.useCheck(N)){this._checks[N]=qx.bom.client.Event.getTouch;
}if(this.useCheck(L)){this._checks[L]=qx.bom.client.EcmaScript.getObjectCount;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(c)){this._checks[c]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck(f)){this._checks[f]=qx.bom.client.PhoneGap.getPhoneGap;
}}},defer:function(bw){bw._initDefaultQxValues();
bw._initChecksMap();
bw.__cL();
if(bw.get(e)===true){bw.__cM();
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
(function(){var e="number",d="qx.lang.Array",c="string",b="[object Array]",a="qx";
qx.Class.define(d,{statics:{toArray:function(f,g){return this.cast(f,Array,g);
},cast:function(h,j,k){var i,l;

if(h.constructor===j){return h;
}
if(qx.Class.hasInterface(h,qx.data.IListData)){var h=h.toArray();
}var m=new j;
if(Object.prototype.toString.call(h)===b&&k==null){m.push.apply(m,h);
}else{m.push.apply(m,Array.prototype.slice.call(h,k||0));
}return m;
},fromArguments:function(n,o){return Array.prototype.slice.call(n,o||0);
},fromCollection:function(p){var q,i,l;
return Array.prototype.slice.call(p,0);
},fromShortHand:function(r){var t=r.length;
var s=qx.lang.Array.clone(r);
switch(t){case 1:s[1]=s[2]=s[3]=s[0];
break;
case 2:s[2]=s[0];
case 3:s[3]=s[1];
}return s;
},clone:function(u){return u.concat();
},insertAt:function(v,w,i){v.splice(i,0,w);
return v;
},insertBefore:function(x,y,z){var i=x.indexOf(z);

if(i==-1){x.push(y);
}else{x.splice(i,0,y);
}return x;
},insertAfter:function(A,B,C){var i=A.indexOf(C);

if(i==-1||i==(A.length-1)){A.push(B);
}else{A.splice(i+1,0,B);
}return A;
},removeAt:function(D,i){return D.splice(i,1)[0];
},removeAll:function(E){E.length=0;
return this;
},append:function(F,G){Array.prototype.push.apply(F,G);
return F;
},exclude:function(H,I){for(var i=0,K=I.length,J;i<K;i++){J=H.indexOf(I[i]);

if(J!=-1){H.splice(J,1);
}}return H;
},remove:function(L,M){var i=L.indexOf(M);

if(i!=-1){L.splice(i,1);
return M;
}},contains:function(N,O){return N.indexOf(O)!==-1;
},equals:function(P,Q){var length=P.length;

if(length!==Q.length){return false;
}
for(var i=0;i<length;i++){if(P[i]!==Q[i]){return false;
}}return true;
},sum:function(R){var S=0;

for(var i=0,l=R.length;i<l;i++){S+=R[i];
}return S;
},max:function(T){var i,V=T.length,U=T[0];

for(i=1;i<V;i++){if(T[i]>U){U=T[i];
}}return U===undefined?null:U;
},min:function(W){var i,Y=W.length,X=W[0];

for(i=1;i<Y;i++){if(W[i]<X){X=W[i];
}}return X===undefined?null:X;
},unique:function(ba){var bk=[],bc={},bf={},bh={};
var bg,bb=0;
var bl=a+qx.lang.Date.now();
var bd=false,bj=false,bm=false;
for(var i=0,bi=ba.length;i<bi;i++){bg=ba[i];
if(bg===null){if(!bd){bd=true;
bk.push(bg);
}}else if(bg===undefined){}else if(bg===false){if(!bj){bj=true;
bk.push(bg);
}}else if(bg===true){if(!bm){bm=true;
bk.push(bg);
}}else if(typeof bg===c){if(!bc[bg]){bc[bg]=1;
bk.push(bg);
}}else if(typeof bg===e){if(!bf[bg]){bf[bg]=1;
bk.push(bg);
}}else{be=bg[bl];

if(be==null){be=bg[bl]=bb++;
}
if(!bh[be]){bh[be]=bg;
bk.push(bg);
}}}for(var be in bh){try{delete bh[be][bl];
}catch(bn){try{bh[be][bl]=null;
}catch(bo){throw new Error("Cannot clean-up map entry doneObjects["+be+"]["+bl+"]");
}}}return bk;
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
(function(){var g="...",f="qx.dev.StackTrace",e="",d="?",c="/source/class/",b=":",a=".";
qx.Bootstrap.define(f,{statics:{getStackTrace:function(){return this.getStackTraceFromCaller(arguments);
},getStackTraceFromCaller:function(h){var m=[];
var l=qx.lang.Function.getCaller(h);
var i={};

while(l){var j=qx.lang.Function.getName(l);
m.push(j);

try{l=l.caller;
}catch(n){break;
}
if(!l){break;
}var k=qx.core.ObjectRegistry.toHashCode(l);

if(i[k]){m.push(g);
break;
}i[k]=l;
}return m;
},getStackTraceFromError:function(o){if(o.stack){var v=/at (.*)/gm;
var u=/\((.*?)(:[^\/].*)\)/;
var s=/(.*?)(:[^\/].*)/;
var p;
var q=[];

while((p=v.exec(o.stack))!=null){var r=u.exec(p[1]);

if(!r){r=s.exec(p[1]);
}
if(r){var t=this.__dp(r[1]);
q.push(t+r[2]);
}else{q.push(p[1]);
}}return q;
}else if(o.sourceURL&&o.line){return [this.__dp(o.sourceURL)+b+o.line];
}else{return [];
}},__dp:function(w){var A=c;
var x=w.indexOf(A);
var z=w.indexOf(d);

if(z>=0){w=w.substring(0,z);
}var y=(x==-1)?w:w.substring(x+A.length).replace(/\//g,a).replace(/\.js$/,e);
return y;
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
(function(){var c="qx.dom.Node",b="";
qx.Class.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;
},getWindow:function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView;
},getDocumentElement:function(f){return this.getDocument(f).documentElement;
},getBodyElement:function(g){return this.getDocument(g).body;
},isNode:function(h){return !!(h&&h.nodeType!=null);
},isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);
},isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);
},isText:function(l){return !!(l&&l.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;
}return o.toLowerCase()==qx.dom.Node.getName(n);
},getName:function(p){if(!p||!p.nodeName){return null;
}return p.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(b);
case 2:case 3:case 4:return q.nodeValue;
}return null;
},isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;
}s=qx.dom.Node.getName(s);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);
}}});
})();
(function(){var h="on",g="engine.version",f="undefined",d="HTMLEvents",c="mousedown",b="qx.bom.Event",a="mouseover";
qx.Class.define(b,{statics:{addNativeListener:function(i,j,k,l){if(i.addEventListener){i.addEventListener(j,k,!!l);
}else if(i.attachEvent){i.attachEvent(h+j,k);
}else if(typeof i[h+j]!=f){i[h+j]=k;
}else{}},removeNativeListener:function(m,n,o,p){if(m.removeEventListener){m.removeEventListener(n,o,!!p);
}else if(m.detachEvent){try{m.detachEvent(h+n,o);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof m[h+n]!=f){m[h+n]=null;
}else{}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===a){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((false)&&parseFloat(qx.core.Environment.get(g))>=1.9&&e.type==c&&e.button==2){return;
}e.preventDefault();
if((false)&&parseFloat(qx.core.Environment.get(g))<1.9){try{e.keyCode=0;
}catch(q){}}}else{try{e.keyCode=0;
}catch(r){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(s,t){if(document.createEvent){var u=document.createEvent(d);
u.initEvent(t,true,true);
return !s.dispatchEvent(u);
}else{var u=document.createEventObject();
return s.fireEvent(h+t,u);
}},supportsEvent:function(v,w){return v.hasOwnProperty(h+w);
}}});
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
(function(){var a="qx.application.Mobile";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,construct:function(){qx.core.Object.call(this);
},members:{__cq:null,main:function(){this.__cq=this._createRootWidget();
{this.__cq.setShowScrollbarY(false);
};
},getRoot:function(){return this.__cq;
},_createRootWidget:function(){return new qx.ui.mobile.core.Root();
},finalize:function(){},close:function(){},terminate:function(){}},destruct:function(){this.__cq=null;
}});
})();
(function(){var a="qx.ui.mobile.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addBefore:function(e,f,g){this._addBefore(e,f,g);
},addAfter:function(h,i,j){this._addAfter(h,i,j);
},remove:function(k){this._remove(k);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(m){m.getChildren=m._getChildren;
m.hasChildren=m._hasChildren;
m.indexOf=m._indexOf;
m.add=m._add;
m.addBefore=m._addBefore;
m.addAfter=m._addAfter;
m.remove=m._remove;
m.removeAt=m._removeAt;
m.removeAll=m._removeAll;
}}});
})();
(function(){var k="ready",j="webkit",i="load",h="unload",g="shutdown",f="qx.event.handler.Application",d="complete",c="gecko",b="opera",a="DOMContentLoaded";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(l){qx.core.Object.call(this);
this._window=l.getWindow();
this.__cR=false;
this.__cS=false;
this.__cT=false;
this.__cU=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var m=qx.event.handler.Application.$$instance;

if(m){m.__cV();
}}},members:{canHandleEvent:function(n,o){},registerEvent:function(p,q,r){},unregisterEvent:function(s,t,u){},__cT:null,__cR:null,__cS:null,__cU:null,__cV:function(){if(!this.__cT&&this.__cR&&qx.$$loader.scriptLoaded){{this.__cT=true;
qx.event.Registration.fireEvent(this._window,k);
};
}},isApplicationReady:function(){return this.__cT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==d||document.readyState==k){this.__cR=true;
this.__cV();
}else{var self,v;
this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(j==c||j==b||true){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else{}qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,h,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,i,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,h,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cR=true;
this.__cV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cU){this.__cU=true;

try{qx.event.Registration.fireEvent(this._window,g);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(w){qx.event.Registration.addHandler(w);
}});
})();
(function(){var c="ready",b="qx.bom.Lifecycle",a="shutdown";
qx.Class.define(b,{statics:{onReady:function(d,e){var g=qx.event.Registration;
var f=g.getManager(window).getHandler(qx.event.handler.Application);
if(f&&f.isApplicationReady()){d.call(e);
}else{g.addListener(window,c,d,e);
}},onShutdown:function(h,i){qx.event.Registration.addListener(window,a,h,i);
}}});
})();
(function(){var k="qx.event.type.Mouse",j="visible",h="qx.event.type.Focus",g="qx.event.type.Touch",f="excluded",e="hidden",d="qx.event.type.KeySequence",c="String",b="qx.event.type.Event",a="_applyAttribute",D="Boolean",C="visibility",B="display",A="div",z="changeId",y="qx.event.type.KeyInput",x="_transformId",w="qx.event.type.MouseWheel",v="_applyDefaultCssClass",u="_applyId",s="",t="changeVisibility",q="undefined",r="block",o="none",p="qx.ui.mobile.core.Widget",m="_applyStyle",n="_applyVisibility";
qx.Class.define(p,{extend:qx.core.Object,include:[qx.locale.MTranslation],construct:function(){qx.core.Object.call(this);
this._setContainerElement(this._createContainerElement());
this.__iU=[];
this.setId(this.getId());
this.initDefaultCssClass();
this.initName();
this.initAnonymous();
this.initActivatable();
},events:{mousemove:k,mouseover:k,mouseout:k,mousedown:k,mouseup:k,click:k,dblclick:k,contextmenu:k,beforeContextmenuOpen:k,mousewheel:w,touchstart:g,touchend:g,touchmove:g,touchcancel:g,tap:g,swipe:g,keyup:d,keydown:d,keypress:d,keyinput:y,domupdated:b,appear:b,disappear:b,focus:h,blur:h,focusin:h,focusout:h,activate:h,deactivate:h},properties:{defaultCssClass:{check:c,init:null,nullable:true,apply:v},name:{check:c,init:null,nullable:true,apply:a},anonymous:{check:D,init:null,nullable:true,apply:m},id:{check:c,init:null,nullable:true,apply:u,transform:x,event:z},visibility:{check:[j,e,f],init:j,apply:n,event:t},activatable:{check:D,init:false,apply:a}},statics:{ID_PREFIX:"qx_id_",__ho:{},__rE:0,__rF:null,onShutdown:function(){window.clearTimeout(qx.ui.mobile.core.Widget.__rF);
delete qx.ui.mobile.core.Widget.__ho;
},getCurrentId:function(){return qx.ui.mobile.core.Widget.__rE;
},registerWidget:function(E){var F=E.getId();
var G=qx.ui.mobile.core.Widget.__ho;
G[F]=E;
},unregisterWidget:function(H){delete qx.ui.mobile.core.Widget.__ho[H];
},getWidgetById:function(I){return qx.ui.mobile.core.Widget.__ho[I];
},scheduleDomUpdated:function(){if(qx.ui.mobile.core.Widget.__rF==null){qx.ui.mobile.core.Widget.__rF=window.setTimeout(qx.ui.mobile.core.Widget.domUpdated,0);
}},domUpdated:qx.event.GlobalError.observeMethod(function(){var J=qx.ui.mobile.core.Widget;
window.clearTimeout(J.__rF);
J.__rF=null;
qx.event.handler.Appear.refresh();
qx.ui.mobile.core.DomUpdatedHandler.refresh();
}),addAttributeMapping:function(K,L,M){var N;
qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[K]={attribute:L,values:M};
},addStyleMapping:function(O,P,Q){var R;
qx.ui.mobile.core.Widget.STYLE_MAPPING[O]={style:P,values:Q};
},ATTRIBUTE_MAPPING:{"selectable":{attribute:"data-selectable",values:{"true":null,"false":"false"}},"activatable":{attribute:"data-activatable",values:{"true":"true","false":null}},"readOnly":{attribute:"readonly"}},STYLE_MAPPING:{"anonymous":{style:"pointer-events",values:{"true":"none","false":null}}}},members:{__jg:null,__jh:null,__rG:null,__iU:null,__jp:null,_getTagName:function(){return A;
},_createContainerElement:function(){return qx.bom.Element.create(this._getTagName());
},_domUpdated:function(){qx.ui.mobile.core.Widget.scheduleDomUpdated();
},_transformId:function(S){if(S==null){var T=qx.ui.mobile.core.Widget;
S=T.ID_PREFIX+T.__rE++;
}return S;
},_applyId:function(U,V){if(V!=null){qx.ui.mobile.core.Widget.unregisterWidget(V);
}var W=this.getContainerElement();
W.id=U;
qx.ui.mobile.core.Widget.registerWidget(this);
},_add:function(X,Y){X.setLayoutParent(this);
X.setLayoutProperties(Y);
this.getContentElement().appendChild(X.getContainerElement());
this.__iU.push(X);
this._domUpdated();
},_addBefore:function(ba,bb,bc){if(ba==bb){return;
}ba.setLayoutParent(this);
ba.setLayoutProperties(bc);
this.getContentElement().insertBefore(ba.getContainerElement(),bb.getContainerElement());
qx.lang.Array.insertBefore(this.__iU,ba,bb);
this._domUpdated();
},_addAfter:function(bd,be,bf){if(bd==be){return;
}bd.setLayoutParent(this);
bd.setLayoutProperties(bf);
var length=this._getChildren().length;
var bg=this._indexOf(be);

if(bg==length-1){this.getContentElement().appendChild(bd.getContainerElement());
}else{var bh=this._getChildren()[bg+1];
this.getContentElement().insertBefore(bd.getContainerElement(),bh.getContainerElement());
}qx.lang.Array.insertAfter(this.__iU,bd,be);
this._domUpdated();
},_remove:function(bi){bi.setLayoutParent(null);
this._domUpdated();
},_removeAt:function(bj){if(!this.__iU){throw new Error("This widget has no children!");
}var bk=this.__iU[bj];
this._remove(bk);
},_removeAll:function(){var bl=this.__iU.concat();

for(var i=0,l=bl.length;i<l;i++){this._remove(bl[i]);
}},_indexOf:function(bm){var bn=this.__iU;

if(!bn){return -1;
}return bn.indexOf(bm);
},setLayoutParent:function(parent){if(this.__rG===parent){return;
}var bo=this.__rG;

if(bo&&!bo.$$disposed){this.__rG.removeChild(this);
}this.__rG=parent||null;
},removeChild:function(bp){qx.lang.Array.remove(this.__iU,bp);
this.getContentElement().removeChild(bp.getContainerElement());
},getLayoutParent:function(){return this.__rG;
},_getChildren:function(){return this.__iU;
},_hasChildren:function(){return this.__iU&&this.__iU.length>0;
},_setLayout:function(bq){if(this.__jp){this.__jp.connectToWidget(null);
}
if(bq){bq.connectToWidget(this);
}this.__jp=bq;
},_getLayout:function(){return this.__jp;
},setLayoutProperties:function(br){if(br==null){return;
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(this,br);
}},updateLayoutProperties:function(bs,bt){var bu=this._getLayout();

if(bu){bu.setLayoutProperties(bs,bt);
}},_setHtml:function(bv){this.getContentElement().innerHTML=bv||s;
this._domUpdated();
},_applyAttribute:function(bw,bx,by){this._setAttribute(by,bw);
},_setAttribute:function(bz,bA){var bC=qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[bz];

if(bC){bz=bC.attribute||bz;
var bB=bC.values;
bA=bB&&typeof bB[bA]!==q?bB[bA]:bA;
}var bD=this.getContainerElement();

if(bA!=null){qx.bom.element.Attribute.set(bD,bz,bA);
}else{qx.bom.element.Attribute.reset(bD,bz);
}this._domUpdated();
},_getAttribute:function(bE){var bF=this.getContainerElement();
return qx.bom.element.Attribute.get(bF,bE);
},_applyStyle:function(bG,bH,bI){this._setStyle(bI,bG);
},_setStyle:function(bJ,bK){var bL=qx.ui.mobile.core.Widget.STYLE_MAPPING[bJ];

if(bL){bJ=bL.style||bJ;
bK=bL.values[bK];
}var bM=this.getContainerElement();

if(bK!=null){qx.bom.element.Style.set(bM,bJ,bK);
}else{qx.bom.element.Style.reset(bM,bJ);
}this._domUpdated();
},_getStyle:function(bN){var bO=this.getContainerElement();
return qx.bom.element.Style.get(bO,bN);
},_applyDefaultCssClass:function(bP,bQ){if(bQ){this.removeCssClass(bQ);
}
if(bP){this.addCssClass(bP);
}},addCssClass:function(bR){var bS=this.getContainerElement();
qx.bom.element.Class.add(bS,bR);
this._domUpdated();
},removeCssClass:function(bT){var bU=this.getContainerElement();
qx.bom.element.Class.remove(bU,bT);
this._domUpdated();
},_applyVisibility:function(bV,bW){if(bV==f){this._setStyle(B,o);
}else if(bV==j){this._setStyle(B,r);
this._setStyle(C,j);
}else if(bV==e){this._setStyle(C,e);
}},show:function(){this.setVisibility(j);
},hide:function(){this.setVisibility(e);
},exclude:function(){this.setVisibility(f);
},isVisible:function(){return this.getVisibility()===j;
},isHidden:function(){return this.getVisibility()!==j;
},isExcluded:function(){return this.getVisibility()===f;
},isSeeable:function(){return this.getContainerElement().offsetWidth>0;
},_setContainerElement:function(bX){this.__jg=bX;
},getContainerElement:function(){return this.__jg;
},getContentElement:function(){if(!this.__jh){this.__jh=this._getContentElement();
}return this.__jh;
},_getContentElement:function(){return this.getContainerElement();
},destroy:function(){if(this.$$disposed){return;
}var parent=this.__rG;

if(parent){parent._remove(this);
}this.dispose();
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);

if(this.getId()){qx.ui.mobile.core.Widget.unregisterWidget(this.getId());
}}this.__rG=this.__jg=this.__jh=null;
this.__jp=null;
},defer:function(bY){qx.bom.Lifecycle.onShutdown(bY.onShutdown,bY);
}});
})();
(function(){var k="active",j="touchmove",h="qx.ui.mobile.core.EventHandler",g="touchend",f="touchcancel",e="data-selectable",d="true",c="data-activatable",b="touchstart",a="false";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__x=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,resize:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false,__rH:null,__rI:null,__rJ:null,__rK:null,__kr:null,__rL:function(m){var n=qx.ui.mobile.core.EventHandler;
n.__rI=qx.bom.Viewport.getScrollLeft();
n.__rJ=qx.bom.Viewport.getScrollTop();
var o=m.getChangedTargetTouches()[0];
n.__rK=o.screenY;
n.__rP();
var p=m.getTarget();

while(p&&p.parentNode&&p.parentNode.nodeType==1&&qx.bom.element.Attribute.get(p,c)!=d){p=p.parentNode;
}n.__rH=p;
n.__rM=window.setTimeout(function(){n.__rM=null;
var q=n.__rH;

if(q&&(qx.bom.element.Attribute.get(q,e)!=a)){qx.bom.element.Class.add(q,k);
}},100);
},__rN:function(r){qx.ui.mobile.core.EventHandler.__rQ();
},__rO:function(s){var t=qx.ui.mobile.core.EventHandler;
var u=s.getChangedTargetTouches()[0];
var v=u.screenY-t.__rK;

if(t.__rH&&Math.abs(v)>=qx.event.handler.Touch.TAP_MAX_DISTANCE){t.__rQ();
}
if(t.__rH&&(t.__rI!=qx.bom.Viewport.getScrollLeft()||t.__rJ!=qx.bom.Viewport.getScrollTop())){t.__rQ();
}},__rP:function(){var w=qx.ui.mobile.core.EventHandler;

if(w.__rM){window.clearTimeout(w.__rM);
w.__rM=null;
}},__rQ:function(){var x=qx.ui.mobile.core.EventHandler;
x.__rP();
var y=x.__rH;

if(y){qx.bom.element.Class.remove(y,k);
}x.__rH=null;
}},members:{__x:null,canHandleEvent:function(z,A){return z instanceof qx.ui.mobile.core.Widget;
},registerEvent:function(B,C,D){var E=B.getContainerElement();
qx.event.Registration.addListener(E,C,this._dispatchEvent,this,D);
},unregisterEvent:function(F,G,H){var I=F.getContainerElement();
qx.event.Registration.removeListener(I,G,this._dispatchEvent,this,H);
},_dispatchEvent:function(J){var O=J.getTarget();

if(!O||O.id==null){return;
}var N=qx.ui.mobile.core.Widget.getWidgetById(O.id);
if(J.getRelatedTarget){var V=J.getRelatedTarget();

if(V&&V.id){var U=qx.ui.mobile.core.Widget.getWidgetById(V.id);
}}var Q=J.getCurrentTarget();
var S=qx.ui.mobile.core.Widget.getWidgetById(Q.id);

if(!S){return;
}var K=J.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var T=J.getType();
var P=this.__x.getListeners(S,T,K);

if(!P||P.length===0){return;
}var L=qx.event.Pool.getInstance().getObject(J.constructor);
J.clone(L);
L.setTarget(N);
L.setRelatedTarget(U||null);
L.setCurrentTarget(S);
var W=J.getOriginalTarget();

if(W&&W.id){var M=qx.ui.mobile.core.Widget.getWidgetById(W.id);
L.setOriginalTarget(M);
}else{L.setOriginalTarget(O);
}for(var i=0,l=P.length;i<l;i++){var R=P[i].context||S;
P[i].handler.call(R,L);
}if(L.getPropagationStopped()){J.stopPropagation();
}
if(L.getDefaultPrevented()){J.preventDefault();
}qx.event.Pool.getInstance().poolObject(L);
}},destruct:function(){this.__x=null;
},defer:function(X){qx.event.Registration.addHandler(X);
qx.event.Registration.addListener(document,b,X.__rL);
qx.event.Registration.addListener(document,g,X.__rN);
qx.event.Registration.addListener(document,f,X.__rN);
qx.event.Registration.addListener(document,j,X.__rO);
}});
})();
(function(){var e="CSS1Compat",d="qx.bom.Document",c="1px",b="position:absolute;width:0;height:0;width:1",a="div";
qx.Class.define(d,{statics:{isQuirksMode:function(f){if(document.compatMode===undefined){var g=(f||window).document.createElement(a);
g.style.cssText=b;
return g.style.width===c?true:false;
}else{return (f||window).document.compatMode!==e;
}},isStandardMode:function(h){return !this.isQuirksMode(h);
},getWidth:function(i){var j=(i||window).document;
var k=qx.bom.Viewport.getWidth(i);
var scroll=this.isStandardMode(i)?j.documentElement.scrollWidth:j.body.scrollWidth;
return Math.max(scroll,k);
},getHeight:function(l){var m=(l||window).document;
var n=qx.bom.Viewport.getHeight(l);
var scroll=this.isStandardMode(l)?m.documentElement.scrollHeight:m.body.scrollHeight;
return Math.max(scroll,n);
}}});
})();
(function(){var b="engine.version",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:function(c){if(parseFloat(qx.core.Environment.get(b))<523.15){return (c||window).innerWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},getHeight:function(e){if(parseFloat(qx.core.Environment.get(b))<523.15){return (e||window).innerHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},getScrollLeft:function(g){return (g||window).pageXOffset;
},getScrollTop:function(h){return (h||window).pageYOffset;
},__ey:function(){var i=this.getWidth()>this.getHeight()?90:0;
var j=window.orientation;

if(j==null||Math.abs(j%180)==i){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__ez:null,getOrientation:function(k){var l=(k||window).orientation;

if(l==null){l=this.getWidth(k)>this.getHeight(k)?90:0;
}else{l=this.__ez[l];
}return l;
},isLandscape:function(m){return Math.abs(this.getOrientation(m))==90;
},isPortrait:function(n){return Math.abs(this.getOrientation(n))!==90;
}},defer:function(o){o.__ez=o.__ey();
}});
})();
(function(){var j="",i="undefined",h="readOnly",g="accessKey",f="qx.bom.element.Attribute",e="rowSpan",d="vAlign",c="className",b="textContent",a="'",v="htmlFor",u="longDesc",t="cellSpacing",s="frameBorder",r="='",q="useMap",p="innerHTML",o="tabIndex",n="dateTime",m="maxLength",k="cellPadding",l="colSpan";
qx.Class.define(f,{statics:{__eA:{names:{"class":c,"for":v,html:p,text:b,colspan:l,rowspan:e,valign:d,datetime:n,accesskey:g,tabindex:o,maxlength:m,readonly:h,longdesc:u,cellpadding:k,cellspacing:t,frameborder:s,usemap:q},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:524288},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(w){var x=[];
var z=this.__eA.runtime;

for(var y in w){if(!z[y]){x.push(y,r,w[y],a);
}}return x.join(j);
},get:function(A,name){var C=this.__eA;
var B;
name=C.names[name]||name;
if(C.property[name]){B=A[name];

if(typeof C.propertyDefault[name]!==i&&B==C.propertyDefault[name]){if(typeof C.bools[name]===i){return null;
}else{return B;
}}}else{B=A.getAttribute(name);
}if(C.bools[name]){return !!B;
}return B;
},set:function(D,name,E){if(typeof E===i){return;
}var F=this.__eA;
name=F.names[name]||name;
if(F.bools[name]){E=!!E;
}if(F.property[name]&&(!(D[name]===undefined)||F.qxProperties[name])){if(E==null){if(F.removeableProperties[name]){D.removeAttribute(name);
return;
}else if(typeof F.propertyDefault[name]!==i){E=F.propertyDefault[name];
}}D[name]=E;
}else{if(E===true){D.setAttribute(name,name);
}else if(E===false||E===null){D.removeAttribute(name);
}else{D.setAttribute(name,E);
}}},reset:function(G,name){this.set(G,name,null);
}}});
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
(function(){var o="touchend",n="touchstart",m="touchmove",l="event.touch",k="mousemove",j="mouseup",i="touchcancel",h="mousedown",g="qx.event.handler.Touch",f="useraction",b="swipe",d="tap",c="x",a="y";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){qx.core.Object.call(this);
this.__x=p;
this.__cp=p.getWindow();
this.__cq=this.__cp.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__cr:null,__cs:null,__x:null,__cp:null,__cq:null,__ct:null,__cu:null,__cv:null,__cw:null,__cx:false,__cy:null,canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cz:function(y){var z=qx.bom.Event.getTarget(y);
{if(z&&z.nodeType==3){z=z.parentNode;
}};
return z;
},__cA:function(A,B,C,D){if(!C){C=this.__cz(A);
}var B=B||A.type;

if(C&&C.nodeType){qx.event.Registration.fireEvent(C,B,D||qx.event.type.Touch,[A,C,null,true,true]);
}qx.event.Registration.fireEvent(this.__cp,f,qx.event.type.Data,[B]);
},__cB:function(E,F,G){if(!G){G=this.__cz(E);
}var F=F||E.type;

if(F==n){this.__cC(E,G);
}else if(F==m){this.__cD(E,G);
}else if(F==o){this.__cE(E,G);
}},__cC:function(H,I){var J=H.changedTouches[0];
this.__ct=J.screenX;
this.__cu=J.screenY;
this.__cv=new Date().getTime();
this.__cw=H.changedTouches.length===1;
},__cD:function(K,L){if(this.__cw&&K.changedTouches.length>1){this.__cw=false;
}},__cE:function(M,N){if(this.__cw){var O=M.changedTouches[0];
var Q={x:O.screenX-this.__ct,y:O.screenY-this.__cu};
var R=qx.event.handler.Touch;

if(this.__cy==N&&Math.abs(Q.x)<=R.TAP_MAX_DISTANCE&&Math.abs(Q.y)<=R.TAP_MAX_DISTANCE){this.__cA(M,d,N,qx.event.type.Tap);
}else{var P=this.__cF(M,N,Q);

if(P){M.swipe=P;
this.__cA(M,b,N,qx.event.type.Swipe);
}}}},__cF:function(S,T,U){var Y=qx.event.handler.Touch;
var ba=new Date().getTime()-this.__cv;
var bc=(Math.abs(U.x)>=Math.abs(U.y))?c:a;
var V=U[bc];
var W=Y.SWIPE_DIRECTION[bc][V<0?0:1];
var bb=(ba!==0)?V/ba:0;
var X=null;

if(Math.abs(bb)>=Y.SWIPE_MIN_VELOCITY&&Math.abs(V)>=Y.SWIPE_MIN_DISTANCE){X={startTime:this.__cv,duration:ba,axis:bc,direction:W,distance:V,velocity:bb};
}return X;
},__cG:function(bd){var be=bd.type;
var bg=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bg[be]){be=bg[be];
if(be==n&&this.__cH(bd)){this.__cx=true;
}else if(be==o){this.__cx=false;
}var bh=this.__cI(bd);
var bf=(be==o?[]:[bh]);
bd.touches=bf;
bd.targetTouches=bf;
bd.changedTouches=[bh];
}return be;
},__cH:function(bi){{var bj=0;
};
return bi.button==bj;
},__cI:function(bk){var bl=this.__cz(bk);
return {clientX:bk.clientX,clientY:bk.clientY,screenX:bk.screenX,screenY:bk.screenY,pageX:bk.pageX,pageY:bk.pageY,identifier:1,target:bl};
},_initTouchObserver:function(){this.__cr=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,n,this.__cr);
Event.addNativeListener(this.__cq,m,this.__cr);
Event.addNativeListener(this.__cq,o,this.__cr);
Event.addNativeListener(this.__cq,i,this.__cr);
},_initMouseObserver:function(){if(!qx.core.Environment.get(l)){this.__cs=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,h,this.__cs);
Event.addNativeListener(this.__cq,k,this.__cs);
Event.addNativeListener(this.__cq,j,this.__cs);
}},_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,n,this.__cr);
Event.removeNativeListener(this.__cq,m,this.__cr);
Event.removeNativeListener(this.__cq,o,this.__cr);
Event.removeNativeListener(this.__cq,i,this.__cr);
},_stopMouseObserver:function(){if(!qx.core.Environment.get(l)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,h,this.__cs);
Event.removeNativeListener(this.__cq,k,this.__cs);
Event.removeNativeListener(this.__cq,j,this.__cs);
}},_onTouchEvent:qx.event.GlobalError.observeMethod(function(bm){this._commonTouchEventHandler(bm);
}),_onMouseEvent:qx.event.GlobalError.observeMethod(function(bn){if(!qx.core.Environment.get(l)){if(bn.type==k&&!this.__cx){return;
}var bo=this.__cG(bn);
this._commonTouchEventHandler(bn,bo);
}}),_commonTouchEventHandler:function(bp,bq){var bq=bq||bp.type;

if(bq==n){this.__cy=this.__cz(bp);
}this.__cA(bp,bq);
this.__cB(bp,bq);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__x=this.__cp=this.__cq=this.__cy=null;
},defer:function(br){qx.event.Registration.addHandler(br);
if(qx.core.Environment.get(l)){{document.addEventListener(m,function(e){e.preventDefault();
});
};
qx.event.Registration.getManager(document).getHandler(br);
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
(function(){var b="qx.ui.mobile.core.DomUpdatedHandler",a="domupdated";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this.__x=c;
this.__gv={};
qx.ui.mobile.core.DomUpdatedHandler.__gw[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{domupdated:1},IGNORE_CAN_HANDLE:false,__gw:{},refresh:function(){var d=this.__gw;

for(var e in d){d[e].refresh();
}}},members:{__x:null,__gv:null,canHandleEvent:function(f,g){return f instanceof qx.ui.mobile.core.Widget;
},registerEvent:function(h,i,j){var k=h.$$hash;
var l=this.__gv;

if(l&&!l[k]){l[k]=h;
}},unregisterEvent:function(m,n,o){var p=m.$$hash;
var q=this.__gv;

if(!q){return;
}
if(q[p]){delete q[p];
}},refresh:function(){var t=this.__gv;
var u;

for(var s in t){u=t[s];

if(u&&!u.$$disposed&&u.isSeeable()){var r=qx.event.Registration.createEvent(a);
this.__x.dispatchEvent(u,r);
}}}},destruct:function(){this.__x=this.__gv=null;
delete qx.ui.mobile.core.DomUpdatedHandler.__gw[this.$$hash];
},defer:function(v){qx.event.Registration.addHandler(v);
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
(function(){var s="mouseup",r="mousewheel",q="mousedown",p="contextmenu",o="click",n="dblclick",m="os.name",l="mouseover",k="mouseout",j="ios",c="mousemove",h="on",f="engine.version",b="useraction",a="webkit",e="gecko",d="DOMMouseScroll",g="qx.event.handler.Mouse";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){qx.core.Object.call(this);
this.__x=t;
this.__cp=t.getWindow();
this.__cq=this.__cp.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eo:null,__ep:null,__eq:null,__er:null,__es:null,__x:null,__cp:null,__cq:null,canHandleEvent:function(u,v){},registerEvent:qx.core.Environment.get(m)===j?function(w,x,y){w[h+x]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===j?function(z,A,B){z[h+A]=undefined;
}:qx.lang.Function.returnNull,__cA:function(C,D,E){if(!E){E=qx.bom.Event.getTarget(C);
}if(E&&E.nodeType){qx.event.Registration.fireEvent(E,D||C.type,D==r?qx.event.type.MouseWheel:qx.event.type.Mouse,[C,E,null,true,true]);
}qx.event.Registration.fireEvent(this.__cp,b,qx.event.type.Data,[D||C.type]);
},__et:function(){var G=[this.__cp,this.__cq,this.__cq.body];
var H=this.__cp;
var F=d;

for(var i=0;i<G.length;i++){if(qx.bom.Event.supportsEvent(G[i],r)){F=r;
H=G[i];
break;
}}return {type:F,target:H};
},_initButtonObserver:function(){this.__eo=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,q,this.__eo);
Event.addNativeListener(this.__cq,s,this.__eo);
Event.addNativeListener(this.__cq,o,this.__eo);
Event.addNativeListener(this.__cq,n,this.__eo);
Event.addNativeListener(this.__cq,p,this.__eo);
},_initMoveObserver:function(){this.__ep=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,c,this.__ep);
Event.addNativeListener(this.__cq,l,this.__ep);
Event.addNativeListener(this.__cq,k,this.__ep);
},_initWheelObserver:function(){this.__eq=qx.lang.Function.listener(this._onWheelEvent,this);
var I=this.__et();
qx.bom.Event.addNativeListener(I.target,I.type,this.__eq);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,q,this.__eo);
Event.removeNativeListener(this.__cq,s,this.__eo);
Event.removeNativeListener(this.__cq,o,this.__eo);
Event.removeNativeListener(this.__cq,n,this.__eo);
Event.removeNativeListener(this.__cq,p,this.__eo);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,c,this.__ep);
Event.removeNativeListener(this.__cq,l,this.__ep);
Event.removeNativeListener(this.__cq,k,this.__ep);
},_stopWheelObserver:function(){var J=this.__et();
qx.bom.Event.removeNativeListener(J.target,J.type,this.__eq);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(K){this.__cA(K);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(L){var M=L.type;
var N=qx.bom.Event.getTarget(L);
if(a==e||true){if(N&&N.nodeType==3){N=N.parentNode;
}}
if(this.__eu){this.__eu(L,M,N);
}
if(this.__ew){this.__ew(L,M,N);
}this.__cA(L,M,N);

if(this.__ev){this.__ev(L,M,N);
}
if(this.__ex){this.__ex(L,M,N);
}this.__er=M;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(O){this.__cA(O,r);
}),__eu:function(P,Q,R){if(parseFloat(qx.core.Environment.get(f))<530){if(Q==p){this.__cA(P,s,R);
}}},__ev:null,__ew:null,__ex:function(S,T,U){switch(T){case q:this.__es=U;
break;
case s:if(U!==this.__es){var V=qx.dom.Hierarchy.getCommonParent(U,this.__es);
this.__cA(S,o,V);
}}}},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__x=this.__cp=this.__cq=this.__es=null;
},defer:function(W){qx.event.Registration.addHandler(W);
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
(function(){var k="engine.version",j="os.name",i="x",h="osx",g="win",f="chrome",d="qx.dynamicmousewheel",c="qx.event.type.MouseWheel",b="browser.name",a="y";
qx.Class.define(c,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__bG:function(l){var m=Math.abs(l);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>m){qx.event.type.MouseWheel.MINSCROLL=m;
this.__bH();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<m){qx.event.type.MouseWheel.MAXSCROLL=m;
this.__bH();
}if(qx.event.type.MouseWheel.MAXSCROLL===m&&qx.event.type.MouseWheel.MINSCROLL===m){return 2*(l/m);
}var n=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var o=(l/n)*Math.log(n)*qx.event.type.MouseWheel.FACTOR;
return o<0?Math.min(o,-1):Math.max(o,1);
},__bH:function(){var p=qx.event.type.MouseWheel.MAXSCROLL||0;
var s=qx.event.type.MouseWheel.MINSCROLL||p;

if(p<=s){return;
}var q=p-s;
var r=(p/q)*Math.log(q);

if(r==0){r=1;
}qx.event.type.MouseWheel.FACTOR=6/r;
},getWheelDelta:function(t){var e=this._native;
if(t===undefined){if(u===undefined){var u=-e.wheelDelta;

if(e.wheelDelta===undefined){u=e.detail;
}}return this.__bI(u);
}if(t===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__bI(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__bI(e.detail);
}}return x;
}if(t===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__bI(-e.wheelDeltaY):0;
}else{y=this.__bI(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__bI(e.detail);
}}return y;
}return 0;
},__bI:function(v){if(qx.core.Environment.get(d)){return this.__bG(v);
}else{var w=function(){if(qx.core.Environment.get(b)==f){if(qx.core.Environment.get(j)==h){return v/60;
}else{return v/120;
}}else{if(qx.core.Environment.get(j)==g){var z=120;
if(parseFloat(qx.core.Environment.get(k))==533.16){z=1200;
}}else{z=40;
if(parseFloat(qx.core.Environment.get(k))==533.16||parseFloat(qx.core.Environment.get(k))==533.17||parseFloat(qx.core.Environment.get(k))==533.18){z=1200;
}}return v/z;
}};
return w.call(this);
}}}});
})();
(function(){var e="qx.dom.Hierarchy",d="previousSibling",c="nextSibling",b="parentNode",a="*";
qx.Class.define(e,{statics:{getNodeIndex:function(f){var g=0;

while(f&&(f=f.previousSibling)){g++;
}return g;
},getElementIndex:function(h){var i=0;
var j=qx.dom.Node.ELEMENT;

while(h&&(h=h.previousSibling)){if(h.nodeType==j){i++;
}}return i;
},getNextElementSibling:function(k){while(k&&(k=k.nextSibling)&&!qx.dom.Node.isElement(k)){continue;
}return k||null;
},getPreviousElementSibling:function(l){while(l&&(l=l.previousSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},contains:function(m,n){if(qx.dom.Node.isDocument(m)){var o=qx.dom.Node.getDocument(n);
return m&&o==m;
}else if(qx.dom.Node.isDocument(n)){return false;
}else{return m.contains(n);
}},isRendered:function(p){if(!p.parentNode||!p.offsetParent){return false;
}var q=p.ownerDocument||p.document;
return q.body.contains(p);
},isDescendantOf:function(r,s){return this.contains(s,r);
},getCommonParent:function(t,u){if(t===u){return t;
}var v={};
var y=qx.core.ObjectRegistry;
var x,w;

while(t||u){if(t){x=y.toHashCode(t);

if(v[x]){return v[x];
}v[x]=t;
t=t.parentNode;
}
if(u){w=y.toHashCode(u);

if(v[w]){return v[w];
}v[w]=u;
u=u.parentNode;
}}return null;
},getAncestors:function(z){return this._recursivelyCollect(z,b);
},getChildElements:function(A){A=A.firstChild;

if(!A){return [];
}var B=this.getNextSiblings(A);

if(A.nodeType===1){B.unshift(A);
}return B;
},getDescendants:function(C){return qx.lang.Array.fromCollection(C.getElementsByTagName(a));
},getFirstDescendant:function(D){D=D.firstChild;

while(D&&D.nodeType!=1){D=D.nextSibling;
}return D;
},getLastDescendant:function(E){E=E.lastChild;

while(E&&E.nodeType!=1){E=E.previousSibling;
}return E;
},getPreviousSiblings:function(F){return this._recursivelyCollect(F,d);
},getNextSiblings:function(G){return this._recursivelyCollect(G,c);
},_recursivelyCollect:function(H,I){var J=[];

while(H=H[I]){if(H.nodeType==1){J.push(H);
}}return J;
},getSiblings:function(K){return this.getPreviousSiblings(K).reverse().concat(this.getNextSiblings(K));
},isEmpty:function(L){L=L.firstChild;

while(L){if(L.nodeType===qx.dom.Node.ELEMENT||L.nodeType===qx.dom.Node.TEXT){return false;
}L=L.nextSibling;
}return true;
},cleanWhitespace:function(M){var N=M.firstChild;

while(N){var O=N.nextSibling;

if(N.nodeType==3&&!/\S/.test(N.nodeValue)){M.removeChild(N);
}N=O;
}}}});
})();
(function(){var m="keydown",l="keypress",k="keyup",j="Enter",i="engine.version",h="NumLock",g="0",f="9",e="-",d="PageUp",bq="+",bp="PrintScreen",bo="os.name",bn="A",bm="Space",bl="Left",bk="F5",bj="Down",bi="Up",bh="F11",t="F6",u="useraction",r="osx",s="keyinput",p="Insert",q="F8",n="End",o="/",B="Delete",C="*",M="cmd",J="F1",U="F4",P="Home",bd="F2",ba="F12",F="PageDown",bg="F7",bf="Win",be="F9",E="F10",H="Right",I="F3",L="Z",N="Escape",Q="5",W="3",bc="Meta",v="7",w="CapsLock",G="Scroll",T="Control",S="Tab",R="Shift",Y="Pause",X="Unidentified",O="qx.event.handler.Keyboard",V="Apps",a="6",bb="4",x="Alt",y="2",K="mshtml",b="1",c="8",D="webkit",z=",",A="Backspace";
qx.Class.define(O,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(br){qx.core.Object.call(this);
this.__x=br;
this.__cp=br.getWindow();
{this.__cq=this.__cp.document.documentElement;
};
this.__kx={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bs){if(this._identifierToKeyCodeMap[bs]){return true;
}
if(bs.length!=1){return false;
}
if(bs>=g&&bs<=f){return true;
}
if(bs>=bn&&bs<=L){return true;
}
switch(bs){case bq:case e:case C:case o:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bt){if(bt===bm){return true;
}else{return this._identifierToKeyCodeMap[bt]?false:true;
}}},members:{__ky:null,__x:null,__cp:null,__cq:null,__kx:null,__kz:null,__kA:null,__kB:null,canHandleEvent:function(bu,bv){},registerEvent:function(bw,bx,by){},unregisterEvent:function(bz,bA,bB){},_fireInputEvent:function(bC,bD){var bE=this.__kC();
if(bE&&bE.offsetWidth!=0){var event=qx.event.Registration.createEvent(s,qx.event.type.KeyInput,[bC,bE,bD]);
this.__x.dispatchEvent(bE,event);
}if(this.__cp){qx.event.Registration.fireEvent(this.__cp,u,qx.event.type.Data,[s]);
}},_fireSequenceEvent:function(bF,bG,bH){var bI=this.__kC();
var bJ=bF.keyCode;
var event=qx.event.Registration.createEvent(bG,qx.event.type.KeySequence,[bF,bI,bH]);
this.__x.dispatchEvent(bI,event);
if(D==K||true){if(bG==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bJ)&&!this._emulateKeyPress[bJ]){this._fireSequenceEvent(bF,l,bH);
}}}if(this.__cp){qx.event.Registration.fireEvent(this.__cp,u,qx.event.type.Data,[bG]);
}},__kC:function(){var bK=this.__x.getHandler(qx.event.handler.Focus);
var bL=bK.getActive();
if(!bL||bL.offsetWidth==0){bL=bK.getFocus();
}if(!bL||bL.offsetWidth==0){bL=this.__x.getWindow().document.body;
}return bL;
},_initKeyObserver:function(){this.__ky=qx.lang.Function.listener(this.__kD,this);
this.__kB=qx.lang.Function.listener(this.__dD,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,k,this.__ky);
Event.addNativeListener(this.__cq,m,this.__ky);
Event.addNativeListener(this.__cq,l,this.__kB);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,k,this.__ky);
Event.removeNativeListener(this.__cq,m,this.__ky);
Event.removeNativeListener(this.__cq,l,this.__kB);

for(var bN in (this.__kA||{})){var bM=this.__kA[bN];
Event.removeNativeListener(bM.target,l,bM.callback);
}delete (this.__kA);
},__kD:qx.event.GlobalError.observeMethod(function(bO){var bR=0;
var bP=0;
var bQ=bO.type;
if(parseFloat(qx.core.Environment.get(i))<525.13){if(bQ==k||bQ==m){bR=this._charCode2KeyCode[bO.charCode]||bO.keyCode;
}else{if(this._charCode2KeyCode[bO.charCode]){bR=this._charCode2KeyCode[bO.charCode];
}else{bP=bO.charCode;
}}this._idealKeyHandler(bR,bP,bQ,bO);
}else{bR=bO.keyCode;
this._idealKeyHandler(bR,bP,bQ,bO);
if(bQ==m){if(this._isNonPrintableKeyCode(bR)||this._emulateKeyPress[bR]){this._idealKeyHandler(bR,bP,l,bO);
}}this.__kx[bR]=bQ;
}}),__kE:null,__dD:qx.event.GlobalError.observeMethod(function(bS){if(parseFloat(qx.core.Environment.get(i))<525.13){var bV=0;
var bT=0;
var bU=bS.type;

if(bU==k||bU==m){bV=this._charCode2KeyCode[bS.charCode]||bS.keyCode;
}else{if(this._charCode2KeyCode[bS.charCode]){bV=this._charCode2KeyCode[bS.charCode];
}else{bT=bS.charCode;
}}this._idealKeyHandler(bV,bT,bU,bS);
}else{if(this._charCode2KeyCode[bS.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bS.keyCode],0,bS.type,bS);
}else{this._idealKeyHandler(0,bS.keyCode,bS.type,bS);
}}}),_idealKeyHandler:function(bW,bX,bY,ca){var cb;
if(bW||(!bW&&!bX)){cb=this._keyCodeToIdentifier(bW);
this._fireSequenceEvent(ca,bY,cb);
}else{cb=this._charCodeToIdentifier(bX);
this._fireSequenceEvent(ca,l,cb);
this._fireInputEvent(ca,bX);
}},_specialCharCodeMap:{8:A,9:S,13:j,27:N,32:bm},_emulateKeyPress:{8:true,9:true,27:true},_keyCodeToIdentifierMap:{16:R,17:T,18:x,20:w,224:bc,37:bl,38:bi,39:H,40:bj,33:d,34:F,35:n,36:P,45:p,46:B,112:J,113:bd,114:I,115:U,116:bk,117:t,118:bg,119:q,120:be,121:E,122:bh,123:ba,144:h,44:bp,145:G,19:Y,91:qx.core.Environment.get(bo)==r?M:bf,92:bf,93:qx.core.Environment.get(bo)==r?M:V},_numpadToCharCode:{96:g.charCodeAt(0),97:b.charCodeAt(0),98:y.charCodeAt(0),99:W.charCodeAt(0),100:bb.charCodeAt(0),101:Q.charCodeAt(0),102:a.charCodeAt(0),103:v.charCodeAt(0),104:c.charCodeAt(0),105:f.charCodeAt(0),106:C.charCodeAt(0),107:bq.charCodeAt(0),109:e.charCodeAt(0),110:z.charCodeAt(0),111:o.charCodeAt(0)},_charCodeA:bn.charCodeAt(0),_charCodeZ:L.charCodeAt(0),_charCode0:g.charCodeAt(0),_charCode9:f.charCodeAt(0),_isNonPrintableKeyCode:function(cc){return this._keyCodeToIdentifierMap[cc]?true:false;
},_isIdentifiableKeyCode:function(cd){if(cd>=this._charCodeA&&cd<=this._charCodeZ){return true;
}if(cd>=this._charCode0&&cd<=this._charCode9){return true;
}if(this._specialCharCodeMap[cd]){return true;
}if(this._numpadToCharCode[cd]){return true;
}if(this._isNonPrintableKeyCode(cd)){return true;
}return false;
},_keyCodeToIdentifier:function(ce){if(this._isIdentifiableKeyCode(ce)){var cf=this._numpadToCharCode[ce];

if(cf){return String.fromCharCode(cf);
}return (this._keyCodeToIdentifierMap[ce]||this._specialCharCodeMap[ce]||String.fromCharCode(ce));
}else{return X;
}},_charCodeToIdentifier:function(cg){return this._specialCharCodeMap[cg]||String.fromCharCode(cg).toUpperCase();
},_identifierToKeyCode:function(ch){return qx.event.handler.Keyboard._identifierToKeyCodeMap[ch]||ch.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__kz=this.__x=this.__cp=this.__cq=this.__kx=null;
},defer:function(ci,cj){qx.event.Registration.addHandler(ci);
if(!ci._identifierToKeyCodeMap){ci._identifierToKeyCodeMap={};

for(var ck in cj._keyCodeToIdentifierMap){ci._identifierToKeyCodeMap[cj._keyCodeToIdentifierMap[ck]]=parseInt(ck,10);
}
for(var ck in cj._specialCharCodeMap){ci._identifierToKeyCodeMap[cj._specialCharCodeMap[ck]]=parseInt(ck,10);
}}{if(parseFloat(qx.core.Environment.get(i))<525.13){cj._charCode2KeyCode={63289:cj._identifierToKeyCode(h),63276:cj._identifierToKeyCode(d),63277:cj._identifierToKeyCode(F),63275:cj._identifierToKeyCode(n),63273:cj._identifierToKeyCode(P),63234:cj._identifierToKeyCode(bl),63232:cj._identifierToKeyCode(bi),63235:cj._identifierToKeyCode(H),63233:cj._identifierToKeyCode(bj),63272:cj._identifierToKeyCode(B),63302:cj._identifierToKeyCode(p),63236:cj._identifierToKeyCode(J),63237:cj._identifierToKeyCode(bd),63238:cj._identifierToKeyCode(I),63239:cj._identifierToKeyCode(U),63240:cj._identifierToKeyCode(bk),63241:cj._identifierToKeyCode(t),63242:cj._identifierToKeyCode(bg),63243:cj._identifierToKeyCode(q),63244:cj._identifierToKeyCode(be),63245:cj._identifierToKeyCode(E),63246:cj._identifierToKeyCode(bh),63247:cj._identifierToKeyCode(ba),63248:cj._identifierToKeyCode(bp),3:cj._identifierToKeyCode(j),12:cj._identifierToKeyCode(h),13:cj._identifierToKeyCode(j)};
}else{cj._charCode2KeyCode={13:13,27:27};
}};
}});
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
(function(){var t="blur",s="focus",r="on",q="selectstart",p="mousedown",o="DOMFocusOut",n="mouseup",m="activate",l="focusout",k="qxKeepActive",d="_applyActive",j="tabIndex",g="qx.event.handler.Focus",c="_applyFocus",b="qxSelectable",f="deactivate",e="input",h="textarea",a="focusin",i="qxKeepFocus";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this._manager=u;
this._window=u.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:d,nullable:true},focus:{apply:c,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:{button:1,input:1,select:1,textarea:1}},members:{__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,__ff:null,__fg:null,__fh:null,__fi:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},focus:function(D){{try{D.focus();
}catch(E){}};
this.setFocus(D);
this.setActive(D);
},activate:function(F){this.setActive(F);
},blur:function(G){try{G.blur();
}catch(H){}
if(this.getActive()===G){this.resetActive();
}
if(this.getFocus()===G){this.resetFocus();
}},deactivate:function(I){if(this.getActive()===I){this.resetActive();
}},tryActivate:function(J){var K=this.__fw(J);

if(K){this.setActive(K);
}},__cA:function(L,M,N,O){var Q=qx.event.Registration;
var P=Q.createEvent(N,qx.event.type.Focus,[L,M,O]);
Q.dispatchEvent(L,P);
},_windowFocused:true,__fj:function(){if(this._windowFocused){this._windowFocused=false;
this.__cA(this._window,null,t,false);
}},__fk:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cA(this._window,null,s,false);
}},_initObserver:function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__fg=qx.lang.Function.listener(this.__fn,this);
this.__fb=qx.lang.Function.listener(this.__fp,this);
this.__fc=qx.lang.Function.listener(this.__fo,this);
this.__fe=qx.lang.Function.listener(this.__ft,this);
qx.bom.Event.addNativeListener(this._document,p,this.__eY,true);
qx.bom.Event.addNativeListener(this._document,n,this.__fa,true);
qx.bom.Event.addNativeListener(this._document,q,this.__fe,false);
qx.bom.Event.addNativeListener(this._window,o,this.__fg,true);
qx.bom.Event.addNativeListener(this._window,s,this.__fb,true);
qx.bom.Event.addNativeListener(this._window,t,this.__fc,true);
},_stopObserver:function(){qx.bom.Event.removeNativeListener(this._document,p,this.__eY,true);
qx.bom.Event.removeNativeListener(this._document,n,this.__fa,true);
qx.bom.Event.removeNativeListener(this._document,q,this.__fe,false);
qx.bom.Event.removeNativeListener(this._window,o,this.__fg,true);
qx.bom.Event.removeNativeListener(this._window,s,this.__fb,true);
qx.bom.Event.removeNativeListener(this._window,t,this.__fc,true);
},__fl:qx.event.GlobalError.observeMethod(null),__fm:qx.event.GlobalError.observeMethod(null),__fn:qx.event.GlobalError.observeMethod(function(R){var S=qx.bom.Event.getTarget(R);

if(S===this.getFocus()){this.resetFocus();
}
if(S===this.getActive()){this.resetActive();
}}),__fo:qx.event.GlobalError.observeMethod(function(T){var U=qx.bom.Event.getTarget(T);

if(U===this._window||U===this._document){this.__fj();
this.__fh=this.getFocus();
this.__fi=this.getActive();
this.resetActive();
this.resetFocus();
}}),__fp:qx.event.GlobalError.observeMethod(function(V){var W=qx.bom.Event.getTarget(V);

if(W===this._window||W===this._document){this.__fk();

if(this.__fh){this.setFocus(this.__fh);
delete this.__fh;
}
if(this.__fi){this.setActive(this.__fi);
delete this.__fi;
}}else{this.setFocus(W);
this.tryActivate(W);
}}),__fq:qx.event.GlobalError.observeMethod(function(X){var ba=qx.bom.Event.getTarget(X);
var Y=this.__fv(ba);

if(Y){this.setFocus(Y);
}else{qx.bom.Event.preventDefault(X);
}}),__fr:qx.event.GlobalError.observeMethod(function(bb){var bc=qx.bom.Event.getTarget(bb);
this.tryActivate(this.__fs(bc));
}),__fs:qx.event.GlobalError.observeMethod(function(bd){var be=this.getFocus();

if(be&&bd!=be&&(be.nodeName.toLowerCase()===e||be.nodeName.toLowerCase()===h)){bd=be;
}return bd;
}),__ft:qx.event.GlobalError.observeMethod(function(bf){var bg=qx.bom.Event.getTarget(bf);

if(!this.__fx(bg)){qx.bom.Event.preventDefault(bf);
}}),__fu:function(bh){var bi=qx.bom.element.Attribute.get(bh,j);

if(bi>=1){return true;
}var bj=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bi>=0&&bj[bh.tagName]){return true;
}return false;
},__fv:function(bk){while(bk&&bk.nodeType===1){if(bk.getAttribute(i)==r){return null;
}
if(this.__fu(bk)){return bk;
}bk=bk.parentNode;
}return this._body;
},__fw:function(bl){var bm=bl;

while(bl&&bl.nodeType===1){if(bl.getAttribute(k)==r){return null;
}bl=bl.parentNode;
}return bm;
},__fx:function(bn){while(bn&&bn.nodeType===1){var bo=bn.getAttribute(b);

if(bo!=null){return bo===r;
}bn=bn.parentNode;
}return true;
},_applyActive:function(bp,bq){if(bq){this.__cA(bq,bp,f,true);
}
if(bp){this.__cA(bp,bq,m,true);
}},_applyFocus:function(br,bs){if(bs){this.__cA(bs,br,l,true);
}
if(br){this.__cA(br,bs,a,true);
}if(bs){this.__cA(bs,br,t,false);
}
if(br){this.__cA(br,bs,s,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fy=null;
},defer:function(bt){qx.event.Registration.addHandler(bt);
var bu=bt.FOCUSABLE_ELEMENTS;

for(var bv in bu){bu[bv.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
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
(function(){var o="",n=" ",m=">",k="<",h="='",g="none",f="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",d="qx.bom.Element",c="' ",b="div",a="></";
qx.Class.define(d,{statics:{__lp:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__lq:{},__lr:{},allowCreationWithMarkup:function(p){if(!p){p=window;
}var q=p.location.href;

if(qx.bom.Element.__lr[q]==undefined){try{p.document.createElement(f);
qx.bom.Element.__lr[q]=true;
}catch(e){qx.bom.Element.__lr[q]=false;
}}return qx.bom.Element.__lr[q];
},getHelperElement:function(r){if(!r){r=window;
}var t=r.location.href;

if(!qx.bom.Element.__lq[t]){var s=qx.bom.Element.__lq[t]=r.document.createElement(b);
{s.style.display=g;
r.document.body.appendChild(s);
};
}return qx.bom.Element.__lq[t];
},create:function(name,u,v){if(!v){v=window;
}
if(!name){throw new Error("The tag name is missing!");
}var x=this.__lp;
var w=o;

for(var z in u){if(x[z]){w+=z+h+u[z]+c;
}}var A;
if(w!=o){if(qx.bom.Element.allowCreationWithMarkup(v)){A=v.document.createElement(k+name+n+w+m);
}else{var y=qx.bom.Element.getHelperElement(v);
y.innerHTML=k+name+n+w+a+name+m;
A=y.firstChild;
}}else{A=v.document.createElement(name);
}
for(var z in u){if(!x[z]){qx.bom.element.Attribute.set(A,z,u[z]);
}}return A;
},empty:function(B){return B.innerHTML=o;
},addListener:function(C,D,E,self,F){return qx.event.Registration.addListener(C,D,E,self,F);
},removeListener:function(G,H,I,self,J){return qx.event.Registration.removeListener(G,H,I,self,J);
},removeListenerById:function(K,L){return qx.event.Registration.removeListenerById(K,L);
},hasListener:function(M,N,O){return qx.event.Registration.hasListener(M,N,O);
},focus:function(P){qx.event.Registration.getManager(P).getHandler(qx.event.handler.Focus).focus(P);
},blur:function(Q){qx.event.Registration.getManager(Q).getHandler(qx.event.handler.Focus).blur(Q);
},activate:function(R){qx.event.Registration.getManager(R).getHandler(qx.event.handler.Focus).activate(R);
},deactivate:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).deactivate(S);
},capture:function(T,U){qx.event.Registration.getManager(T).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(T,U);
},releaseCapture:function(V){qx.event.Registration.getManager(V).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(V);
},matchesSelector:function(W,X){if(X){return qx.bom.Selector.query(X,W.parentNode).length>0;
}else{return false;
}},clone:function(Y,ba){var i,l;
var i,l;
var bd;

if(ba||((false)&&!qx.xml.Document.isXmlDocument(Y))){var bh=qx.event.Registration.getManager(Y);
var bb=qx.dom.Hierarchy.getDescendants(Y);
bb.push(Y);
}var bd=Y.cloneNode(true);
if(ba===true){var bk=qx.dom.Hierarchy.getDescendants(bd);
bk.push(bd);
var bc,bf,bj,be;

for(var i=0,bi=bb.length;i<bi;i++){bj=bb[i];
bc=bh.serializeListeners(bj);

if(bc.length>0){bf=bk[i];

for(var j=0,bg=bc.length;j<bg;j++){be=bc[j];
bh.addListener(bf,be.type,be.handler,be.self,be.capture);
}}}}return bd;
}}});
})();
(function(){var g="losecapture",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(h,i){qx.event.dispatch.AbstractBubbling.call(this,h);
this.__cp=h.getWindow();
this.__cW=i;
h.addListener(this.__cp,f,this.releaseCapture,this);
h.addListener(this.__cp,e,this.releaseCapture,this);
h.addListener(this.__cp,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cW:null,__cX:null,__cY:true,__cp:null,_getParent:function(j){return j.parentNode;
},canDispatchEvent:function(k,event,l){return !!(this.__cX&&this.__da[l]);
},dispatchEvent:function(m,event,n){if(n==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__cY||!qx.dom.Hierarchy.contains(this.__cX,m)){m=this.__cX;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,m,event,n);
},__da:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(o,p){var p=p!==false;

if(this.__cX===o&&this.__cY==p){return;
}
if(this.__cX){this.releaseCapture();
}this.nativeSetCapture(o,p);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(o,g,function(){qx.bom.Event.removeNativeListener(o,g,arguments.callee);
self.releaseCapture();
});
}this.__cY=p;
this.__cX=o;
this.__cW.fireEvent(o,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__cX;
},releaseCapture:function(){var q=this.__cX;

if(!q){return;
}this.__cX=null;
this.__cW.fireEvent(q,g,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(q);
},hasNativeCapture:false,nativeSetCapture:qx.lang.Function.empty,nativeReleaseCapture:qx.lang.Function.empty},destruct:function(){this.__cX=this.__cp=this.__cW=null;
},defer:function(r){qx.event.Registration.addDispatcher(r);
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
(function(){var d="",c="text/xml",b="qx.xml.Document",a="HTML";
qx.Class.define(b,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(e){if(e.nodeType===9){return e.documentElement.nodeName!==a;
}else if(e.ownerDocument){return this.isXmlDocument(e.ownerDocument);
}else{return false;
}},create:function(f,g){return document.implementation.createDocument(f||d,g||d,null);
},fromString:function(h){var j=new DOMParser();
return j.parseFromString(h,c);
}},defer:function(k){var m,n,i,l;
}});
})();
(function(){var u="",r="none",q="scroll",p="qx.bom.element.Overflow",o="overflowY",n="borderLeftStyle",m="overflow-x",l="overflow",k="borderLeftWidth",j="100px",d="overflowX",i="-moz-scrollbars-vertical",g="borderRightStyle",b=":",a="div",f="overflow-y",e="borderRightWidth",h=";";
qx.Class.define(p,{statics:{__do:null,getScrollbarWidth:function(){if(this.__do!==null){return this.__do;
}var v=qx.bom.element.Style;
var x=function(B,C){return parseInt(v.get(B,C),10)||0;
};
var y=function(D){return (v.get(D,g)==r?0:x(D,e));
};
var w=function(E){return (v.get(E,n)==r?0:x(E,k));
};
var A=function(F){if(F.clientWidth==0){var G=v.get(F,l);
var H=(G==q||G==i?16:0);
return Math.max(0,y(F)+H);
}return Math.max(0,(F.offsetWidth-F.clientWidth-w(F)));
};
var z=function(I){return A(I)-y(I);
};
var t=document.createElement(a);
var s=t.style;
s.height=s.width=j;
s.overflow=q;
document.body.appendChild(t);
var c=z(t);
this.__do=c?c:16;
document.body.removeChild(t);
return this.__do;
},_compile:function(J,K){return J+b+K+h;
},compileX:function(L){return this._compile(m,L);
},compileY:function(M){return this._compile(f,M);
},getX:function(N,O){return qx.bom.element.Style.get(N,d,O,false);
},setX:function(P,Q){P.style.overflowX=Q;
},resetX:function(R){R.style.overflowX=u;
},getY:function(S,T){return qx.bom.element.Style.get(S,o,T,false);
},setY:function(U,V){U.style.overflowY=V;
},resetY:function(W){W.style.overflowY=u;
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
(function(){var e="",d="opacity",c="qx.bom.element.Opacity",b=";",a="opacity:";
qx.Class.define(c,{statics:{SUPPORT_CSS3_OPACITY:false,compile:function(f){if(f>=1){return e;
}return a+f+b;
},set:function(g,h){if(h>=1){h=e;
}g.style.opacity=h;
},reset:function(i){i.style.opacity=e;
},get:function(j,k){var l=qx.bom.element.Style.get(j,d,k,false);

if(l!=null){return parseFloat(l);
}return 1.0;
}},defer:function(m){m.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var k="",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="boxSizing",f="WebkitBoxSizing",e=":",d=";",c="-khtml-box-sizing",b="box-sizing",a="-webkit-box-sizing";
qx.Class.define(j,{statics:{__ir:[g,h,f],__is:[b,c,a],__it:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__iu:function(m){var n=this.__it;
return n.tags[m.tagName.toLowerCase()]||n.types[m.type];
},compile:function(o){var q=this.__is;
var p=k;

if(q){for(var i=0,l=q.length;i<l;i++){p+=q[i]+e+o+d;
}}return p;
},get:function(r){var t=this.__ir;
var s;

if(t){for(var i=0,l=t.length;i<l;i++){s=qx.bom.element.Style.get(r,t[i],null,false);

if(s!=null&&s!==k){return s;
}}}return k;
},set:function(u,v){var w=this.__ir;

if(w){for(var i=0,l=w.length;i<l;i++){u.style[w[i]]=v;
}}},reset:function(x){this.set(x,k);
}}});
})();
(function(){var e="",d="cursor:",c="qx.bom.element.Cursor",b="cursor",a=";";
qx.Class.define(c,{statics:{__hh:{},compile:function(f){return d+(this.__hh[f]||f)+a;
},get:function(g,h){return qx.bom.element.Style.get(g,b,h,false);
},set:function(i,j){i.style.cursor=this.__hh[j]||j;
},reset:function(k){k.style.cursor=e;
}}});
})();
(function(){var m="",k="style",h="pixelRight",g="float",f="borderImage",e="userSelect",d="appearance",c="pixelHeight",b='Ms',a=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',v='string',u="pixelBottom",t='Moz',s="pixelWidth",q=";",r="textOverflow",o="userModify",p='Webkit',n="WebkitUserModify";
qx.Class.define(x,{statics:{__gx:function(){var C=[d,e,r,f];
var G={};
var D=document.documentElement.style;
var H=[t,p,w,y,b];

for(var i=0,l=C.length;i<l;i++){var I=C[i];
var E=I;

if(D[I]){G[E]=I;
continue;
}I=qx.lang.String.firstUp(I);

for(var j=0,J=H.length;j<J;j++){var F=H[j]+I;

if(typeof D[F]==v){G[E]=F;
break;
}}}this.__gy=G;
this.__gy[o]=n;
this.__gz={};

for(var E in G){this.__gz[E]=qx.lang.String.hyphenate(G[E]);
}this.__gy[g]=B;
},__gA:{width:s,height:c,left:z,right:h,top:A,bottom:u},__gB:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(K){var M=[];
var O=this.__gB;
var N=this.__gz;
var name,L;

for(name in K){L=K[name];

if(L==null){continue;
}name=N[name]||name;
if(O[name]){M.push(O[name].compile(L));
}else{M.push(qx.lang.String.hyphenate(name),a,L,q);
}}return M.join(m);
},setCss:function(P,Q){P.setAttribute(k,Q);
},getCss:function(R){return R.getAttribute(k);
},isPropertySupported:function(S){return (this.__gB[S]||this.__gy[S]||S in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(T,name,U,V){name=this.__gy[name]||name;
if(V!==false&&this.__gB[name]){return this.__gB[name].set(T,U);
}else{T.style[name]=U!==null?U:m;
}},setStyles:function(W,X,Y){var bc=this.__gy;
var be=this.__gB;
var ba=W.style;

for(var bd in X){var bb=X[bd];
var name=bc[bd]||bd;

if(bb===undefined){if(Y!==false&&be[name]){be[name].reset(W);
}else{ba[name]=m;
}}else{if(Y!==false&&be[name]){be[name].set(W,bb);
}else{ba[name]=bb!==null?bb:m;
}}}},reset:function(bf,name,bg){name=this.__gy[name]||name;
if(bg!==false&&this.__gB[name]){return this.__gB[name].reset(bf);
}else{bf.style[name]=m;
}},get:function(bh,name,bi,bj){name=this.__gy[name]||name;
if(bj!==false&&this.__gB[name]){return this.__gB[name].get(bh,bi);
}switch(bi){case this.LOCAL_MODE:return bh.style[name]||m;
case this.CASCADED_MODE:if(bh.currentStyle){return bh.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bk=qx.dom.Node.getDocument(bh);
var bl=bk.defaultView.getComputedStyle(bh,null);
return bl?bl[name]:m;
}}},defer:function(bm){bm.__gx();
}});
})();
(function(){var g="qx.ui.mobile.core.Root",f="Boolean",e="root",d="overflow-y",c="hidden",b="auto",a="_applyShowScrollbarY";
qx.Class.define(g,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling],properties:{defaultCssClass:{refine:true,init:e},showScrollbarY:{check:f,init:true,apply:a}},members:{_createContainerElement:function(){return document.body;
},_applyShowScrollbarY:function(h,i){this._setStyle(d,h?b:c);
}},defer:function(j,k){qx.ui.mobile.core.MChildrenHandling.remap(k);
}});
})();
(function(){var i="/toolbar",h="/tab",g="/form",f="/animation/:animation",e="/event",d="/list",c="mobileshowcase.Application",b="/",a="/animation";
qx.Class.define(c,{extend:qx.application.Mobile,members:{main:function(){qx.application.Mobile.prototype.main.call(this);
var m=new mobileshowcase.page.Overview();
var q=new mobileshowcase.page.Event();
var n=new mobileshowcase.page.List();
var p=new mobileshowcase.page.Tab();
var toolbar=new mobileshowcase.page.Toolbar();
var l=new mobileshowcase.page.Form();
var o=new mobileshowcase.page.Animation();
var j=new mobileshowcase.page.AnimationLanding();
var k=qx.ui.mobile.navigation.Manager.getInstance();
k.onGet(b,function(r){m.show(r.customData);
},this);
k.onGet(e,function(s){q.show();
},this);
k.onGet(h,function(t){p.show();
},this);
k.onGet(i,function(u){toolbar.show();
},this);
k.onGet(d,function(v){n.show();
},this);
k.onGet(g,function(w){l.show();
},this);
k.onGet(a,function(x){o.show(x.customData);
},this);
k.onGet(f,function(y){var z=y.params.animation;
j.setAnimation(z);
j.show({animation:z});
},this);
}}});
})();
(function(){var k="os.name",j="android",h="phonegap",g="menubutton",f="qx.event.type.Data",e="backbutton",d="add",c="input",b="qx.ui.mobile.page.manager.Simple",a="remove";
qx.Class.define(b,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.__rT={};
this._setRoot(l);
this.__rX();
},events:{add:f,remove:f},members:{__rT:null,__rU:null,__cq:null,__rV:null,__rW:null,__rX:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){this.__rV=qx.lang.Function.bind(this._onBackButton,this);
this.__rW=qx.lang.Function.bind(this._onMenuButton,this);
qx.bom.Event.addNativeListener(document,e,this.__rV);
qx.bom.Event.addNativeListener(document,g,this.__rW);
}},__rY:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){qx.bom.Event.removeNativeListener(document,e,this.__rV);
qx.bom.Event.removeNativeListener(document,g,this.__rW);
}},_onBackButton:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){var m=true;

if(this.__rU){m=this.__rU.back();
}
if(m){navigator.app.exitApp();
}}},_onMenuButton:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){if(this.__rU){this.__rU.menu();
}}},add:function(n){this.__rT[n.getId()]=n;
this.fireDataEvent(d,n);
},remove:function(o){var p=this.getPage(o);
delete this.__rT[p.getId()];
this.fireDataEvent(a,p);
},show:function(q){var r=this.__rU;

if(r==q){return;
}q.initialize();
q.start();
this._getRoot().add(q);

if(r){r.stop();
this.__sa();
this._removeCurrentPage();
}this._setCurrentPage(q);
},_removeCurrentPage:function(){this._getRoot().remove(this.__rU);
},_getRoot:function(){if(this.__cq==null){this._setRoot(qx.core.Init.getApplication().getRoot());
}return this.__cq;
},_setRoot:function(s){this.__cq=s;
},getCurrentPage:function(){return this.__rU;
},_setCurrentPage:function(t){this.__rU=t;
},getPage:function(u){return this.__rT[u];
},__sa:function(){var v=document.getElementsByTagName(c);

for(var i=0,length=v.length;i<length;i++){v[i].blur();
}}},destruct:function(){this.__rY();
this.__sb=this.__rT=this.__rU=this.__cq=null;
}});
})();
(function(){var f="",d="engine.version",c="qx.core.BaseInit",b="os.name",a="mobileshowcase.Application";
qx.Class.define(c,{statics:{getApplication:function(){return this.__ec||null;
},ready:function(){if(this.__ec){return;
}
if(qx.core.Environment.get(d)==f){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==f){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var h=a;
var i=qx.Class.getByName(h);

if(i){this.__ec=new i;
var g=new Date;
this.__ec.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__ec.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__ed:function(e){var j=this.__ec;

if(j){j.close();
}},__ee:function(){var k=this.__ec;

if(k){k.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
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
(function(){var i="animationEnd",h="in",g="out",f="qx.event.type.Data",e="qx.ui.mobile.page.manager.Animation",d="reverse",c="slide",b="String",a="animationStart";
qx.Class.define(e,{extend:qx.ui.mobile.page.manager.Simple,events:{animationStart:f,animationEnd:f},properties:{defaultAnimation:{check:b,init:c}},statics:{ANIMATIONS:{"slide":true,"pop":true,"fade":true,"dissolve":true,"slideup":true,"flip":true,"swap":true,"cube":true}},members:{__sc:null,__sd:null,__se:null,__sf:null,__sg:null,isInAnimation:function(){return this.__sc;
},show:function(j,k){if(this.__sc){return;
}k=k||{};
this.__sd=k.animation||this.getDefaultAnimation();
k.reverse=k.reverse==null?false:k.reverse;
this.__se=k.fromHistory||k.reverse;
this.__sf=this.getCurrentPage();
this.__sg=j;
qx.ui.mobile.page.manager.Simple.prototype.show.call(this,j);
},_removeCurrentPage:function(){this.__sh();
},__sh:function(){this.__sc=true;
this.fireDataEvent(a,[this.__sf,this.__sg]);
var n=this.__sf.getContainerElement();
var l=this.__sg.getContainerElement();
var m=this.__sj(g);
var o=this.__sj(h);
qx.event.Registration.addListener(n,i,this._onAnimationEnd,this);
qx.event.Registration.addListener(l,i,this._onAnimationEnd,this);
qx.bom.element.Class.addClasses(l,o);
qx.bom.element.Class.addClasses(n,m);
},_onAnimationEnd:function(p){this._getRoot().remove(this.__sf);
this.__si();
this.fireDataEvent(i,[this.__sf,this.__sg]);
},__si:function(){if(this.__sc){var r=this.__sf.getContainerElement();
var q=this.__sg.getContainerElement();
qx.event.Registration.removeListener(r,i,this._onAnimationEnd,this);
qx.event.Registration.removeListener(q,i,this._onAnimationEnd,this);
qx.bom.element.Class.removeClasses(r,this.__sj(g));
qx.bom.element.Class.removeClasses(q,this.__sj(h));
this.__sc=false;
}},__sj:function(s){var t=[this.__sd,s];

if(this.__se){t.push(d);
}return t;
}},destruct:function(){this.__si();
this.__sc=this.__sd,this.__se=null;
this.__sf=this.__sg=null;
}});
})();
(function(){var a="qx.event.handler.Transition";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__sk={};
this.__sl=qx.lang.Function.listener(this._onNative,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{transitionEnd:1,animationEnd:1,animationStart:1,animationIteration:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,TYPE_TO_NATIVE:{transitionEnd:"webkitTransitionEnd",animationEnd:"webkitAnimationEnd",animationStart:"webkitAnimationStart",animationIteration:"webkitAnimationIteration"},NATIVE_TO_TYPE:{webkitTransitionEnd:"transitionEnd",webkitAnimationEnd:"animationEnd",webkitAnimationStart:"animationStart",webkitAnimationIteration:"animationIteration"}},members:{__sl:null,__sk:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){var i=qx.core.ObjectRegistry.toHashCode(e)+f;
var h=qx.event.handler.Transition.TYPE_TO_NATIVE[f];
this.__sk[i]={target:e,type:h};
qx.bom.Event.addNativeListener(e,h,this.__sl);
},unregisterEvent:function(j,k,l){var n=this.__sk;

if(!n){return;
}var m=qx.core.ObjectRegistry.toHashCode(j)+k;

if(n[m]){delete n[m];
}qx.bom.Event.removeNativeListener(j,qx.event.handler.Transition.TYPE_TO_NATIVE[k],this.__sl);
},_onNative:qx.event.GlobalError.observeMethod(function(o){qx.event.Registration.fireEvent(o.target,qx.event.handler.Transition.NATIVE_TO_TYPE[o.type],qx.event.type.Event);
})},destruct:function(){var event;
var q=this.__sk;

for(var p in q){event=q[p];

if(event.target){qx.bom.Event.removeNativeListener(event.target,event.type,this.__sl);
}}this.__sk=this.__sl=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var a="qx.ui.mobile.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var a="qx.ui.mobile.container.Composite";
qx.Class.define(a,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling,qx.ui.mobile.core.MLayoutHandling],construct:function(b){qx.ui.mobile.core.Widget.call(this);

if(b){this.setLayout(b);
}},defer:function(c,d){qx.ui.mobile.core.MChildrenHandling.remap(d);
qx.ui.mobile.core.MLayoutHandling.remap(d);
}});
})();
(function(){var o="qx.event.type.Event",n="resize",m="orientationchange",l="start",k="css.translate3d",j="height",i="px",h="page",g="stop",f="resume",c="initialize",e="pause",d="back",b="qx.ui.mobile.page.Page",a="menu";
qx.Class.define(b,{extend:qx.ui.mobile.container.Composite,construct:function(p){qx.ui.mobile.container.Composite.call(this,p);

if(!p){this.setLayout(new qx.ui.mobile.layout.VBox());
}qx.ui.mobile.page.Page.getManager().add(this);
this._resize();
qx.event.Registration.addListener(window,m,this._resize,this);
qx.event.Registration.addListener(window,n,this._resize,this);
},events:{"initialize":o,"start":o,"stop":o,"pause":o,"resume":o,"back":o,"menu":o},properties:{defaultCssClass:{refine:true,init:h}},statics:{__x:null,getManager:function(){return qx.ui.mobile.page.Page.__x;
},setManager:function(q){qx.ui.mobile.page.Page.__x=q;
}},members:{__sm:false,_resize:function(){{this._setStyle(j,window.innerHeight+i);
};
},_applyId:function(r,s){qx.ui.mobile.container.Composite.prototype._applyId.call(this,r,s);

if(s!=null){qx.ui.mobile.page.Page.getManager().remove(s);
}qx.ui.mobile.page.Page.getManager().add(this);
},back:function(){this.fireEvent(d);
var t=this._back();
return t||false;
},_back:function(){},menu:function(){this.fireEvent(a);
},show:function(u){qx.ui.mobile.page.Page.getManager().show(this,u);
},initialize:function(){if(!this.isInitialized()){this._initialize();
this.__sm=true;
this.fireEvent(c);
}},_initialize:function(){},isInitialized:function(){return this.__sm;
},start:function(){this._start();
this.fireEvent(l);
},_start:function(){},stop:function(){this._stop();
this.fireEvent(g);
},_stop:function(){},pause:function(){this._pause();
this.fireEvent(e);
},_pause:function(){},resume:function(){this._resume();
this.fireEvent(f);
},_resume:function(){}},destruct:function(){qx.event.Registration.removeListener(window,m,this._resize,this);
qx.event.Registration.removeListener(window,n,this._resize,this);
this.__sm=null;

if(!qx.core.ObjectRegistry.inShutDown){if(this.getId()){qx.ui.mobile.page.Page.getManager().remove(this.getId());
}}},defer:function(v){if(qx.core.Environment.get(k)){v.setManager(new qx.ui.mobile.page.manager.Animation());
}else{v.setManager(new qx.ui.mobile.page.manager.Simple());
}}});
})();
(function(){var b="abstract",a="qx.ui.mobile.layout.Abstract";
qx.Class.define(a,{extend:qx.core.Object,type:b,members:{_widget:null,__sn:null,__so:null,getCssClass:function(){},_getSupportedChildLayoutProperties:function(){},_setLayoutProperty:function(c,d,e){},setLayoutProperties:function(f,g){var i=this._getSupportedChildLayoutProperties();

for(var h in g){if(!i[h]){throw new Error("The layout does not support the "+h+" property");
}var j=g[h];
this._setLayoutProperty(f,h,j);
this._addChildLayoutProperty(f,h,j);
}},connectToWidget:function(k){if(this._widget){this._widget.removeCssClass(this.getCssClass());
}this._widget=k;

if(k){k.addCssClass(this.getCssClass());

if(this.__sn){for(var l in this.__sn){this.reset(l);
this.set(l,this.__sn[l]);
}}}else{this.__sn=null;
}},_addCachedProperty:function(m,n){if(!this.__sn){this.__sn={};
}this.__sn[m]=n;
},_getChildLayoutPropertyValue:function(o,p){var q=this.__sp(o);
return q[p];
},_addChildLayoutProperty:function(r,s,t){var u=this.__sp(r);

if(t==null){delete u[s];
}else{u[s]=t;
}},__sp:function(v){if(!this.__so){this.__so={};
}var w=this.__so;
var x=v.toHashCode();

if(!w[x]){w[x]={};
}return w[x];
}},destruct:function(){this._widget=null;
}});
})();
(function(){var l="_applyLayoutChange",k="boxFlex",j="abstract",i="middle",h="bottom",g="center",f="Boolean",e="flex",d="top",c="left",a="right",b="qx.ui.mobile.layout.AbstractBox";
qx.Class.define(b,{extend:qx.ui.mobile.layout.Abstract,type:j,construct:function(m,n,o){qx.ui.mobile.layout.Abstract.call(this);

if(m){this.setAlignX(m);
}
if(n){this.setAlignY(n);
}
if(o){this.setReversed(o);
}},properties:{alignX:{check:[c,g,a],nullable:true,init:null,apply:l},alignY:{check:[d,i,h],nullable:true,init:null,apply:l},reversed:{check:f,nullable:true,init:null,apply:l}},statics:{PROPERTY_CSS_MAPPING:{"alignX":{"hbox":{"left":"boxPackStart","center":"boxPackCenter","right":"boxPackEnd"},"vbox":{"left":"boxAlignStart","center":"boxAlignCenter","right":"boxAlignEnd"}},"alignY":{"hbox":{"top":"boxAlignStart","middle":"boxAlignCenter","bottom":"boxAlignEnd"},"vbox":{"top":"boxPackStart","middle":"boxPackCenter","bottom":"boxPackEnd"}},"reversed":{"hbox":{"true":"boxReverse","false":null},"vbox":{"true":"boxReverse","false":null}}},SUPPORTED_CHILD_LAYOUT_PROPERTIES:{"flex":1}},members:{_getSupportedChildLayoutProperties:function(){return qx.ui.mobile.layout.AbstractBox.SUPPORTED_CHILD_LAYOUT_PROPERTIES;
},_setLayoutProperty:function(p,q,r){if(q==e){var s=this._getChildLayoutPropertyValue(p,q);

if(s!=null){p.removeCssClass(k+r);
}p.addCssClass(k+r);
}},connectToWidget:function(t){if(this._widget){this.resetAlignX();
this.resetAlignY();
this.resetReversed();
}qx.ui.mobile.layout.Abstract.prototype.connectToWidget.call(this,t);
},_applyLayoutChange:function(u,v,w){if(this._widget){var A=this.getCssClass();
var y=qx.ui.mobile.layout.AbstractBox.PROPERTY_CSS_MAPPING[w][A];

if(v){var z=y[v];

if(z){this._widget.removeCssClass(z);
}}
if(u){var x=y[u];

if(x){this._widget.addCssClass(x);
}}}else{if(u){this._addCachedProperty(w,u);
}}}}});
})();
(function(){var b="vbox",a="qx.ui.mobile.layout.VBox";
qx.Class.define(a,{extend:qx.ui.mobile.layout.AbstractBox,members:{getCssClass:function(){return b;
}}});
})();
(function(){var n="String",m="",l="Boolean",k="tap",j="_applyShowButton",i="_applyShowBackButton",h="action",g="content",f="_applyBackButtonText",e="qx.event.type.Event",b="_applyContentCssClass",d="_applyButtonText",c="qx.ui.mobile.page.NavigationPage",a="_applyTitle";
qx.Class.define(c,{extend:qx.ui.mobile.page.Page,events:{action:e},properties:{title:{check:n,init:m,nullable:true,apply:a},backButtonText:{check:n,init:m,apply:f},buttonText:{check:n,init:m,apply:d},showBackButton:{check:l,init:false,apply:i},showButton:{check:l,init:false,apply:j},contentCssClass:{check:n,init:g,nullable:true,apply:b}},members:{__sq:null,__sr:null,__ss:null,__st:null,__oG:null,__su:null,getContent:function(){return this.__oG;
},_getTitle:function(){return this.__sr;
},_getNavigationBar:function(){return this.__sq();
},_getBackButton:function(){return this.__ss;
},_getButton:function(){return this.__st;
},_getScrollContainer:function(){return this.__su;
},_applyTitle:function(o,p){if(this.__sr){this.__sr.setValue(o);
}},_applyBackButtonText:function(q,r){if(this.__ss){this.__ss.setValue(q);
}},_applyButtonText:function(s,t){if(this.__st){this.__st.setValue(s);
}},_applyShowBackButton:function(u,v){this._showBackButton();
},_applyShowButton:function(w,x){this._showButton();
},_applyContentCssClass:function(y,z){if(this.__oG){this.__oG.setDefaultCssClass(y);
}},_showBackButton:function(){if(this.__ss){if(this.getShowBackButton()){this.__ss.show();
}else{this.__ss.hide();
}}},_showButton:function(){if(this.__st){if(this.getShowButton()){this.__st.show();
}else{this.__st.hide();
}}},_initialize:function(){qx.ui.mobile.page.Page.prototype._initialize.call(this);
this.__sq=this._createNavigationBar();

if(this.__sq){this.add(this.__sq);
}this.__su=this._createScrollContainer();
this.__oG=this._createContent();

if(this.__oG){this.__su.add(this.__oG);
}
if(this.__su){this.add(this.__su,{flex:1});
}},_createScrollContainer:function(){return new qx.ui.mobile.container.Scroll();
},_createContent:function(){var content=new qx.ui.mobile.container.Composite();
content.setDefaultCssClass(this.getContentCssClass());
return content;
},_createNavigationBar:function(){var A=new qx.ui.mobile.navigationbar.NavigationBar();
this.__ss=this._createBackButton();

if(this.__ss){this.__ss.addListener(k,this._onBackButtonTap,this);
this.__ss.setValue(this.getBackButtonText());
this._showBackButton();
A.add(this.__ss);
}this.__sr=this._createTitle();

if(this.__sr){A.add(this.__sr,{flex:1});
}this.__st=this._createButton();

if(this.__st){this.__st.addListener(k,this._onButtonTap,this);
this.__st.setValue(this.getButtonText());
this._showButton();
A.add(this.__st);
}return A;
},_createTitle:function(){return new qx.ui.mobile.navigationbar.Title(this.getTitle());
},_createBackButton:function(){return new qx.ui.mobile.navigationbar.BackButton();
},_createButton:function(){return new qx.ui.mobile.navigationbar.Button();
},_onBackButtonTap:function(B){this.back();
},_onButtonTap:function(C){this.fireEvent(h);
}},destruct:function(){this.__sq=this.__sr=this.__ss=this.__st=this.__oG=this.__su=null;
}});
})();
(function(){var m="resize",l="orientationchange",k="domupdated",j="qx/mobile/js/iscroll",i='TEXTAREA',h=".js",g='INPUT',f="scrollbar",d='SELECT',c="div",a="qx.ui.mobile.container.MIScroll",b="success";
qx.Mixin.define(a,{construct:function(){this.__sw();
this.__rX();
},members:{__sv:null,_createScrollElement:function(){var scroll=qx.bom.Element.create(c);
return scroll;
},_getScrollContentElement:function(){return this.getContainerElement().childNodes[0];
},__sw:function(){if(!window.iScroll){var o=j;
o+=h;
var n=qx.util.ResourceManager.getInstance().toUri(o);
var p=new qx.io.ScriptLoader();
p.load(n,this.__sz,this);
}else{this._setScroll(this.__sx());
}},__sx:function(){var scroll=new iScroll(this.getContainerElement(),{hideScrollbar:true,fadeScrollbar:true,hScrollbar:false,scrollbarClass:f,onBeforeScrollStart:function(e){var q=e.target;

while(q.nodeType!=1){q=q.parentNode;
}
if(q.tagName!=d&&q.tagName!=g&&q.tagName!=i){e.preventDefault();
}}});
return scroll;
},__rX:function(){qx.event.Registration.addListener(window,l,this._refresh,this);
qx.event.Registration.addListener(window,m,this._refresh,this);
this.addListener(k,this._refresh,this);
},__sy:function(){qx.event.Registration.removeListener(window,l,this._refresh,this);
qx.event.Registration.removeListener(window,m,this._refresh,this);
this.removeListener(k,this._refresh,this);
},__sz:function(status){if(status==b){this._setScroll(this.__sx());
}else{}},_setScroll:function(scroll){this.__sv=scroll;
},_refresh:function(){if(this.__sv){this.__sv.refresh();
}}},destruct:function(){this.__sy();
if(this.__sv){this.__sv.destroy();
}this.__sv;
}});
})();
(function(){var l="",k="string",j="data",i="io.ssl",h="type",g="data:image/",f=";",e="/",d="encoding",c="qx.util.ResourceManager",a="singleton",b=",";
qx.Class.define(c,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__ho:qx.$$resources||{},__ip:{}},members:{has:function(m){return !!this.self(arguments).__ho[m];
},getData:function(n){return this.self(arguments).__ho[n]||null;
},getImageWidth:function(o){var p=this.self(arguments).__ho[o];
return p?p[0]:null;
},getImageHeight:function(q){var r=this.self(arguments).__ho[q];
return r?r[1]:null;
},getImageFormat:function(s){var t=this.self(arguments).__ho[s];
return t?t[2]:null;
},getCombinedFormat:function(u){var x=l;
var w=this.self(arguments).__ho[u];
var v=w&&w.length>4&&typeof (w[4])==k&&this.constructor.__ho[w[4]];

if(v){var z=w[4];
var y=this.constructor.__ho[z];
x=y[2];
}return x;
},toUri:function(A){if(A==null){return A;
}var B=this.self(arguments).__ho[A];

if(!B){return A;
}
if(typeof B===k){var D=B;
}else{var D=B[3];
if(!D){return A;
}}var C=l;

if((false)&&qx.core.Environment.get(i)){C=this.self(arguments).__ip[D];
}return C+qx.$$libraries[D].resourceUri+e+A;
},toDataUri:function(E){var G=this.constructor.__ho[E];
var H=this.constructor.__ho[G[4]];
var I;

if(H){var F=H[4][E];
I=g+F[h]+f+F[d]+b+F[j];
}else{I=this.toUri(E);
}return I;
}},defer:function(J){var N,L,K,O,M;
}});
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
(function(){var b="qx.ui.mobile.container.Scroll",a="scroll";
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling],properties:{defaultCssClass:{refine:true,init:a}},members:{_createContainerElement:function(){var d=qx.ui.mobile.core.Widget.prototype._createContainerElement.call(this);
var c=this._createScrollElement();

if(c){d.appendChild(c);
}return d;
},_getContentElement:function(){var e=qx.ui.mobile.core.Widget.prototype._getContentElement.call(this);
var f=this._getScrollContentElement();
return f||e;
}},defer:function(g){{qx.Class.include(g,qx.ui.mobile.container.MIScroll);
};
}});
})();
(function(){var c="middle",b="navigationbar",a="qx.ui.mobile.navigationbar.NavigationBar";
qx.Class.define(a,{extend:qx.ui.mobile.container.Composite,construct:function(d){qx.ui.mobile.container.Composite.call(this,d);

if(!d){this.setLayout(new qx.ui.mobile.layout.HBox().set({alignY:c}));
}},properties:{defaultCssClass:{refine:true,init:b}}});
})();
(function(){var b="qx.ui.mobile.layout.HBox",a="hbox";
qx.Class.define(b,{extend:qx.ui.mobile.layout.AbstractBox,members:{getCssClass:function(){return a;
}}});
})();
(function(){var g="no-wrap",f="Boolean",e="label",d="_applyValue",c="qx.ui.mobile.basic.Label",b="_applyWrap",a="changeValue";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,construct:function(h){qx.ui.mobile.core.Widget.call(this);

if(h){this.setValue(h);
}this.initWrap();
},properties:{defaultCssClass:{refine:true,init:e},value:{nullable:true,init:null,apply:d,event:a},anonymous:{refine:true,init:true},wrap:{check:f,init:true,apply:b}},members:{_applyValue:function(i,j){this._setHtml(i);
},_applyWrap:function(k,l){if(k){this.removeCssClass(g);
}else{this.addCssClass(g);
}}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.Title",a="h1";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,properties:{wrap:{refine:true,init:false}},members:{_getTagName:function(){return a;
}}});
})();
(function(){var e="disabled",d="changeEnabled",c="_applyEnabled",b="Boolean",a="qx.ui.mobile.form.MEnable";
qx.Mixin.define(a,{properties:{enabled:{init:true,check:b,nullable:false,event:d,apply:c}},members:{_applyEnabled:function(f,g){if(f){this._setAttribute(e,null);

if(this.getAnonymous()){this.setAnonymous(false);
}}else{this._setAttribute(e,e);
this.setAnonymous(true);
}}}});
})();
(function(){var b="qx.ui.mobile.form.Button",a="button";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,include:[qx.ui.mobile.form.MEnable],properties:{defaultCssClass:{refine:true,init:a},anonymous:{refine:true,init:false},wrap:{refine:true,init:false},activatable:{refine:true,init:true}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.Button",a="navigationbar-button";
qx.Class.define(b,{extend:qx.ui.mobile.form.Button,properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.BackButton",a="navigationbar-backbutton";
qx.Class.define(b,{extend:qx.ui.mobile.navigationbar.Button,properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var j="Usings tabs to switch views",i="tab",h="Tab Bar",g="qx.event.type.Data",f="event",e="Slide, Fade, Cube...",d="Overview",c="changeSelection",b="toolbar, buttons, separators",a="Touch, Tap, Swipe...",w="Page Transitions",v="list",u="mobileshowcase.page.Overview",t="List",s="animation",r="form",q="/",p="toolbar",o="TextField, TextArea, ToggleButton, Button...",n="A large list",l="Events",m="Form Elements",k="Toolbar";
qx.Class.define(u,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(d);
},events:{"show":g},members:{_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var y=new qx.ui.mobile.list.List({configureItem:function(z,A,B){z.setTitle(A.title);
z.setSubTitle(A.subTitle);
z.setShowArrow(true);
}});
var x=[{title:m,subTitle:o,path:r},{title:t,subTitle:n,path:v},{title:h,subTitle:j,path:i},{title:k,subTitle:b,path:p},{title:l,subTitle:a,path:f},{title:w,subTitle:e,path:s}];
y.setModel(new qx.data.Array(x));
y.addListener(c,function(C){var D=x[C.getData()].path;
qx.ui.mobile.navigation.Manager.getInstance().executeGet(q+D);
},this);
this.getContent().add(y);
}}});
})();
(function(){var r="change",q="_applyDelegate",p="changeModel",o="LI",n="",m="list",l="changeDelegate",k="qx.data.Array",j="data-selectable",i="false",c="__sB",h="qx.ui.mobile.list.List",f="changeSelection",b="tap",a="ul",e="Integer",d="_applyModel",g="qx.event.type.Data";
qx.Class.define(h,{extend:qx.ui.mobile.core.Widget,construct:function(s){qx.ui.mobile.core.Widget.call(this);
this.addListener(b,this._onTap,this);
this.__sB=new qx.ui.mobile.list.provider.Provider(this);

if(s){this.setDelegate(s);
}},events:{changeSelection:g},properties:{defaultCssClass:{refine:true,init:m},delegate:{apply:q,event:l,init:null,nullable:true},model:{check:k,apply:d,event:p,nullable:true,init:null},itemCount:{check:e,init:0}},members:{__sB:null,_getTagName:function(){return a;
},_onTap:function(t){var v=t.getOriginalTarget();
var u=-1;

while(v.tagName!=o){v=v.parentNode;
}
if(qx.bom.element.Attribute.get(v,j)!=i&&qx.dom.Element.hasChild(this.getContainerElement(),v)){u=qx.dom.Hierarchy.getElementIndex(v);
}
if(u!=-1){this.fireDataEvent(f,u);
}},_applyModel:function(w,x){if(x!=null){x.removeListener(r,this.__sC,this);
}
if(w!=null){w.addListener(r,this.__sC,this);
}this.__sC();
},_applyDelegate:function(y,z){this.__sB.setDelegate(y);
},__sC:function(){var A=this.getModel();
this.setItemCount(A?A.getLength():0);
this.__sD();
},__sD:function(){this._setHtml(n);
var E=this.getItemCount();
var D=this.getModel();
var F=this.getContentElement();

for(var C=0;C<E;C++){var B=this.__sB.getItemElement(D.getItem(C),C);
F.appendChild(B);
}this._domUpdated();
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var d="_applyDelegate",c="qx.ui.mobile.list.provider.Provider",b="createItemRenderer",a="changeDelegate";
qx.Class.define(c,{extend:qx.core.Object,properties:{delegate:{event:a,init:null,nullable:true,apply:d}},members:{__sE:null,_setItemRenderer:function(e){this.__sE=e;
},_getItemRenderer:function(){return this.__sE;
},getItemElement:function(f,g){this.__sE.reset();
this._configureItem(f,g);
return qx.bom.Element.clone(this.__sE.getContainerElement(),true);
},_configureItem:function(h,i){var j=this.getDelegate();

if(j!=null&&j.configureItem!=null){j.configureItem(this.__sE,h,i);
}},_createItemRenderer:function(){var l=qx.util.Delegate.getMethod(this.getDelegate(),b);
var k=null;

if(l==null){k=new qx.ui.mobile.list.renderer.Default();
}else{k=l();
}return k;
},_applyDelegate:function(m,n){this._setItemRenderer(this._createItemRenderer());
}},destruct:function(){this.__sE=null;
}});
})();
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();
(function(){var k="Boolean",j="arrow",i="selected",h="listItem",g="li",f="_applyAttribute",e="_applySelected",d="qx.ui.mobile.list.renderer.Abstract",c="LI",b="_applyShowArrow",a="abstract";
qx.Class.define(d,{extend:qx.ui.mobile.core.Widget,type:a,include:[qx.ui.mobile.core.MChildrenHandling],construct:function(){qx.ui.mobile.core.Widget.call(this);
this.initSelectable();
this.initShowArrow();
},properties:{defaultCssClass:{refine:true,init:h},selected:{check:k,init:false,apply:e},selectable:{check:k,init:true,apply:f},showArrow:{check:k,init:false,apply:b},activatable:{refine:true,init:true}},members:{reset:function(){},_getTagName:function(){return g;
},getRowIndexFromEvent:function(l){return this.getRowIndex(l.getOriginalTarget());
},getRowIndex:function(m){while(m.tagName!=c){m=m.parentNode;
}return qx.dom.Hierarchy.getElementIndex(m);
},_applyShowArrow:function(n,o){if(n){this.addCssClass(j);
}else{this.removeCssClass(j);
}},_applySelected:function(p,q){if(p){this.addCssClass(i);
}else{this.removeCssClass(i);
}}}});
})();
(function(){var f="",e="list-itemlabel",d="qx.ui.mobile.list.renderer.Default",c="list-itemimage",b="middle",a="subtitle";
qx.Class.define(d,{extend:qx.ui.mobile.list.renderer.Abstract,construct:function(){qx.ui.mobile.list.renderer.Abstract.call(this);
this.add(this._create());
},members:{__sF:null,__sr:null,__sG:null,getImageWidget:function(){return this.__sF;
},getTitleWidget:function(){return this.__sr;
},getSubTitleWidget:function(){return this.__sG;
},setImage:function(g){this.__sF.setSource(g);
},setTitle:function(h){this.__sr.setValue(h);
},setSubTitle:function(i){this.__sG.setValue(i);
},_create:function(){var j=qx.ui.mobile.container.Composite;
var l=new j(new qx.ui.mobile.layout.HBox().set({alignY:b}));
this.__sF=new qx.ui.mobile.basic.Image();
this.__sF.setAnonymous(true);
this.__sF.addCssClass(c);
l.add(this.__sF);
var k=new j(new qx.ui.mobile.layout.VBox());
l.add(k,{flex:1});
this.__sr=new qx.ui.mobile.basic.Label();
this.__sr.setWrap(false);
this.__sr.addCssClass(e);
k.add(this.__sr);
this.__sG=new qx.ui.mobile.basic.Label();
this.__sG.setWrap(false);
this.__sG.addCssClass(a);
k.add(this.__sG);
return l;
},reset:function(){this.__sF.setSource(null);
this.__sr.setValue(f);
this.__sG.setValue(f);
}}});
})();
(function(){var h="qx.event.type.Event",g="src",f="_applySource",e="loaded",d="img",c="loadingFailed",b="qx.ui.mobile.basic.Image",a="String";
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,construct:function(i){qx.ui.mobile.core.Widget.call(this);

if(i){this.setSource(i);
}else{this.initSource();
}},events:{loadingFailed:h,loaded:h},properties:{source:{check:a,nullable:true,init:null,apply:f}},members:{_getTagName:function(){return d;
},_applySource:function(j,k){var l=j;

if(l){l=qx.util.ResourceManager.getInstance().toUri(l);
var m=qx.io.ImageLoader;

if(!m.isFailed(l)){m.load(l,this.__ln,this);
}}this._setSource(l);
},__ln:function(n,o){if(o.failed){this.warn("Image could not be loaded: "+n);
this.fireEvent(c);
}else{this.fireEvent(e);
}this._domUpdated();
},_setSource:function(p){this._setAttribute(g,p);
}}});
})();
(function(){var b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__dc:{},__ii:{width:null,height:null},__ij:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(c){var d=this.__dc[c];
return !!(d&&d.loaded);
},isFailed:function(e){var f=this.__dc[e];
return !!(f&&f.failed);
},isLoading:function(g){var h=this.__dc[g];
return !!(h&&h.loading);
},getFormat:function(j){var k=this.__dc[j];
return k?k.format:null;
},getSize:function(m){var n=this.__dc[m];
return n?{width:n.width,height:n.height}:this.__ii;
},getWidth:function(o){var p=this.__dc[o];
return p?p.width:null;
},getHeight:function(q){var r=this.__dc[q];
return r?r.height:null;
},load:function(s,t,u){var v=this.__dc[s];

if(!v){v=this.__dc[s]={};
}if(t&&!u){u=window;
}if(v.loaded||v.loading||v.failed){if(t){if(v.loading){v.callbacks.push(t,u);
}else{t.call(u,s,v);
}}}else{v.loading=true;
v.callbacks=[];

if(t){v.callbacks.push(t,u);
}var x=new Image();
var w=qx.lang.Function.listener(this.__ik,this,x,s);
x.onload=w;
x.onerror=w;
x.src=s;
v.element=x;
}},abort:function(y){var z=this.__dc[y];

if(z&&!z.loaded){z.aborted=true;
var B=z.callbacks;
var A=z.element;
A.onload=A.onerror=null;
delete z.callbacks;
delete z.element;
delete z.loading;

for(var i=0,l=B.length;i<l;i+=2){B[i].call(B[i+1],y,z);
}}this.__dc[y]=null;
},__ik:qx.event.GlobalError.observeMethod(function(event,C,D){var E=this.__dc[D];
if(event.type===b){E.loaded=true;
E.width=this.__il(C);
E.height=this.__im(C);
var F=this.__ij.exec(D);

if(F!=null){E.format=F[1];
}}else{E.failed=true;
}C.onload=C.onerror=null;
var G=E.callbacks;
delete E.loading;
delete E.callbacks;
delete E.element;
for(var i=0,l=G.length;i<l;i+=2){G[i].call(G[i+1],D,E);
}}),__il:function(H){return H.width;
},__im:function(I){return I.height;
}}});
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
(function(){var m="delete",l="changeHash",k="put",j="get",h="post",g="any",f="$",e="^",d="([^\/]+)",c="__tR",a="qx.ui.mobile.navigation.Manager",b="singleton";
qx.Class.define(a,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
this.__tN={},this.__tO=0;
this.__tP={};
this.__sb=[];
this.__tQ=null;
this.__tR=new qx.ui.mobile.navigation.Handler(qx.ui.mobile.navigation.Manager.DEFAULT_PATH);
this.__tR.addListener(l,this.__tS,this);
this.__tR.setHash(this.__tR.getLocationHash());
},statics:{DEFAULT_PATH:"/"},members:{__tR:null,__tN:null,__tO:null,__tP:null,__tQ:null,__sb:null,getCurrentGetPath:function(){return this.__tQ;
},onGet:function(n,o,p){return this._addRoute(j,n,o,p);
},onPost:function(q,r,s){return this._addRoute(h,q,r,s);
},onPut:function(t,u,v){return this._addRoute(k,t,u,v);
},onDelete:function(w,x,y){return this._addRoute(m,w,x,y);
},onAny:function(z,A,B){return this._addRoute(g,z,A,B);
},_addRoute:function(C,D,E,F){var G=this.__tN[C]=this.__tN[C]||{};
var I=this.__tO++;
var H=[];
var J=null;
if(qx.lang.Type.isString(D)){var K=/:([\w\d]+)/g;

while((J=K.exec(D))!==null){H.push(J[1]);
}D=new RegExp(e+D.replace(K,d)+f);
}G[I]={regExp:D,params:H,handler:E,scope:F};
this.__tP[I]=C;
this._executeRoute(C,this.__tQ,G[I]);
return I;
},remove:function(L){var N=this.__tP[L];
var M=this.__tN[N];
delete M[L];
delete this.__tP[L];
},__tS:function(O){var P=O.getData();

if(P!=this.__tQ){this.executeGet(P,null);
}},executeGet:function(Q,R){this.__tQ=Q;
var S=this.__tU(Q);

if(S){this.debug("Path from history: "+Q);

if(!R){R=S.customData||{};
R.fromHistory=true;
}}else{this.__tT(Q,R);
}this.__tR.setHash(Q);
this._execute(j,Q,null,R);
},executePost:function(T,U,V){this._execute(h,T,U,V);
},executePut:function(W,X,Y){this._execute(k,W,X,Y);
},executeDelete:function(ba,bb,bc){this._execute(m,ba,bb,bc);
},__tT:function(bd,be){this.debug("Add path "+bd+" to history");
this.__sb.unshift({path:bd,customData:be});
},__tU:function(bf){var history=this.__sb;
var length=history.length;
var bg=null;

for(var i=0;i<length;i++){if(history[i].path==bf){bg=history[i];
history.splice(0,i);
break;
}}return bg;
},_execute:function(bh,bi,bj,bk){this.debug("Execute "+bh+" for path "+bi);
var bn=false;
var bl=this.__tN[g];
bn=this._executeRoutes(bh,bi,bl,bj,bk);
var bm=false;
var bl=this.__tN[bh];
bm=this._executeRoutes(bh,bi,bl,bj,bk);

if(!bm&&!bn){this.info("No route found for "+bi);
}},_executeRoutes:function(bo,bp,bq,br,bs){if(!bq||qx.lang.Object.isEmpty(bq)){return true;
}var bt=false;

for(var bv in bq){var bu=bq[bv];
bt=this._executeRoute(bo,bp,bu,br,bs);
}return bt;
},_executeRoute:function(bw,bx,by,bz,bA){var bD=by.regExp.exec(bx);

if(bD){var bz=bz||{};
var bC=null;
var bB=null;
bD.shift();

for(var i=0;i<bD.length;i++){bB=this._decode(bD[i]);
bC=by.params[i];

if(bC){bz[bC]=bB;
}else{bz[i]=bB;
}}this.debug("Execute "+bw+" handler for path "+bx+" and route "+by.regExp.toString());
by.handler.call(by.scope,{path:bx,params:bz,customData:bA});
}return bD;
},_encode:function(bE){return encodeURIComponent(bE);
},_decode:function(bF){return decodeURIComponent(bF);
},_getRoutes:function(){return this.__tN;
}},destruct:function(){this.__tR.removeListener(l,this.__tS,this);
this.__sb=this.__tN=this.__tP=null;
this._disposeObjects(c);
}});
})();
(function(){var g="#",f="hashchange",e="String",d="",c="changeHash",b="_applyHash",a="qx.ui.mobile.navigation.Handler";
qx.Class.define(a,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this.__tV=qx.lang.Function.bind(this.__ua,this);
this.__tX();

if(h){this.setDefaultHash(h);
}},properties:{defaultHash:{check:e,init:d},hash:{check:e,event:c,init:null,apply:b}},members:{__tV:null,__tW:null,__tX:function(){qx.bom.Event.addNativeListener(window,f,this.__tV);
},__tY:function(){qx.bom.Event.removeNativeListener(window,f,this.__tV);
},__ua:function(i){this.setHash(this.getLocationHash());
},getLocationHash:function(){var j=this.getDefaultHash();

if(window.location.hash){j=location.hash.substring(1);
}return j;
},_applyHash:function(k,l){if((l!=null)||(l==null&&k!=this.getDefaultHash())){window.location.hash=k;
}},removeFromHistory:function(){var m=window.location.href;
m=m.substring(0,m.indexOf(g));
window.location.replace(m+g+this.getHash());
}},destruct:function(){this.__tY();
}});
})();
(function(){var q="touchstart",p="touchmove",o="swipe",n="eventcontainer",m="",l="touchend",k="center",j="Back",i=" swipe",h=" ",c="mobileshowcase.page.Event",g="Event",f="tap",b="middle",a="/",e=" tap",d="Touch / Tap / Swipe this area";
qx.Class.define(c,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(g);
this.setShowBackButton(true);
this.setBackButtonText(j);
},members:{__ub:null,__uc:null,__ud:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var r=this.__ub=new qx.ui.mobile.container.Composite(new qx.ui.mobile.layout.VBox().set({alignX:k,alignY:b}));
r.addCssClass(n);
r.addListener(f,this._onTap,this);
r.addListener(o,this._onSwipe,this);
r.addListener(q,this._onTouch,this);
r.addListener(p,this._onTouch,this);
r.addListener(l,this._onTouch,this);
var s=this.__uc=new qx.ui.mobile.basic.Label(d);
r.add(s);
this.getContent().add(r,{flex:1});
},_onTap:function(t){this.__uc.setValue(this.__uc.getValue()+e);
},_onSwipe:function(u){this.__uc.setValue(this.__uc.getValue()+i);
},_onTouch:function(v){var w=v.getType();

if(w==q){this.__uc.setValue(m);
}this.__uc.setValue(this.__uc.getValue()+h+v.getType());
},_back:function(){qx.ui.mobile.navigation.Manager.getInstance().executeGet(a,{reverse:true});
}}});
})();
(function(){var j="qx/icon/Tango/22/apps/internet-mail.png",h="List",g="Item",f="Selectable ",e="Subtitle for Item #",d="Back",c="mobileshowcase.page.List",b="changeSelection",a="/";
qx.Class.define(c,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(h);
this.setShowBackButton(true);
this.setBackButtonText(d);
},members:{_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var l=new qx.ui.mobile.list.List({configureItem:function(m,n,o){m.setImage(j);
m.setTitle(o<4?(f+n.title):n.title);
m.setSubTitle(n.subTitle);
m.setSelectable(o<4);
m.setShowArrow(o<4);
}});
var k=[];

for(var i=0;i<100;i++){k.push({title:g+i,subTitle:e+i});
}l.setModel(new qx.data.Array(k));
l.addListener(b,function(p){alert("Item Selected #"+p.getData());
},this);
this.getContent().add(l);
},_back:function(){qx.ui.mobile.navigation.Manager.getInstance().executeGet(a,{reverse:true});
}}});
})();
(function(){var l="Tab 3",k="Tab 2",j="Tab 4",i="Tabs",h="View 3",g="Tab 1",f="Back",e="View 1",d="mobileshowcase.page.Tab",c="View 4",a="/",b="View 2";
qx.Class.define(d,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(i);
this.setShowBackButton(true);
this.setBackButtonText(f);
},members:{_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
this.add(this.__ue());
},__ue:function(){var p=new qx.ui.mobile.tabbar.TabBar();
var n=new qx.ui.mobile.tabbar.TabButton(g);
p.add(n);
n.setView(this.__uf(e));
var q=new qx.ui.mobile.tabbar.TabButton(k);
q.setView(this.__uf(b));
p.add(q);
var o=new qx.ui.mobile.tabbar.TabButton(l);
o.setView(this.__uf(h));
p.add(o);
var m=new qx.ui.mobile.tabbar.TabButton(j);
m.setView(this.__uf(c));
p.add(m);
return p;
},__uf:function(r){var s=new qx.ui.mobile.basic.Label(r);
this.getContent().add(s);
return s;
},_back:function(){qx.ui.mobile.navigation.Manager.getInstance().executeGet(a,{reverse:true});
}}});
})();
(function(){var i="selected",h="changeView",g="tap",f="changeSelection",e="_applySelection",d="tabBar",c="qx.ui.mobile.tabbar.TabButton",b="middle",a="qx.ui.mobile.tabbar.TabBar";
qx.Class.define(a,{extend:qx.ui.mobile.core.Widget,construct:function(){qx.ui.mobile.core.Widget.call(this);
this._setLayout(new qx.ui.mobile.layout.HBox(null,b));
this.addListener(g,this._onTap,this);
},properties:{defaultCssClass:{refine:true,init:d},selection:{check:c,nullable:true,init:null,apply:e,event:f}},members:{_onTap:function(j){var k=j.getTarget();

if(k instanceof qx.ui.mobile.tabbar.TabButton){this.setSelection(k);
}},_applySelection:function(l,m){if(m){m.removeCssClass(i);

if(m.getView()){m.getView().exclude();
}}
if(l){l.addCssClass(i);

if(l.getView()){l.getView().show();
}}},add:function(n){this._add(n,{flex:1});

if(!this.getSelection()){this.setSelection(n);
}n.addListener(h,this._onChangeView,this);
},_onChangeView:function(o){if(this.getSelection()==o.getTarget()){o.getData().show();
}},remove:function(p){this._remove(p);

if(this.getSelection()==p){this.setSelection(null);
}p.removeListener(h,this._onChangeView,this);
}},destruct:function(){this.removeListener(g,this._onTap,this);
}});
})();
(function(){var e="tabButton",d="qx.ui.mobile.tabbar.TabButton",c="_applyView",b="qx.ui.mobile.core.Widget",a="changeView";
qx.Class.define(d,{extend:qx.ui.mobile.form.Button,properties:{defaultCssClass:{refine:true,init:e},view:{check:b,nullable:false,init:null,apply:c,event:a}},members:{_applyView:function(f,g){f.exclude();
}}});
})();
(function(){var o="tap",n="Search",m="Searching...",l="mobileshowcase/icon/camera.png",k="Toggle the toolbar",j="Go Back",i="Back",h="search",g="Take a Picture",f="mobileshowcase.page.Toolbar",c="/",e="Take Picture",d="mobileshowcase/icon/arrowleft.png",b="Toolbar",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(b);
this.setShowBackButton(true);
this.setBackButtonText(i);
},events:{"show":a},members:{__ug:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var s=new qx.ui.mobile.form.Title(n);
this.getContent().add(s);
var p=new qx.ui.mobile.form.Button(k);
p.addListener(o,this._onButtonTap,this);
this.getContent().add(p);
var toolbar=this.__ug=new qx.ui.mobile.toolbar.ToolBar();
this.add(toolbar);
var t=new qx.ui.mobile.toolbar.Button(h);
toolbar.add(t);
t.addListener(o,function(){s.setValue(m);
qx.lang.Function.delay(function(){this.setValue(n);
},2000,s);
},this);
toolbar.add(new qx.ui.mobile.toolbar.Separator());
var r=new qx.ui.mobile.toolbar.Button(null,d);
toolbar.add(r);
r.addListener(o,function(){s.setValue(j);
},this);
toolbar.add(new qx.ui.mobile.toolbar.Separator());
var q=new qx.ui.mobile.toolbar.Button(e,l);
toolbar.add(q);
q.addListener(o,function(){s.setValue(g);
});
},_onButtonTap:function(){this.__ug.toggle();
},_back:function(){qx.ui.mobile.navigation.Manager.getInstance().executeGet(c,{reverse:true});
}}});
})();
(function(){var b="qx.ui.mobile.form.Title",a="h2";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,properties:{wrap:{refine:true,init:false}},members:{_getTagName:function(){return a;
}}});
})();
(function(){var d='toolbar-hidden',c="middle",b="qx.ui.mobile.toolbar.ToolBar",a="toolbar";
qx.Class.define(b,{extend:qx.ui.mobile.container.Composite,construct:function(e){qx.ui.mobile.container.Composite.call(this,e);

if(!e){this.setLayout(new qx.ui.mobile.layout.HBox().set({alignY:c}));
}},properties:{defaultCssClass:{refine:true,init:a}},members:{__uh:false,add:function(f,g){if(!(f instanceof qx.ui.mobile.toolbar.Separator)){g=g?g:{};
qx.lang.Object.carefullyMergeWith(g,{flex:1});
}qx.ui.mobile.container.Composite.prototype.add.call(this,f,g);
},show:function(){this.removeCssClass(d);
this.__uh=false;
},hide:function(){this.addCssClass(d);
this.__uh=true;
},toggle:function(){this.__uh?this.show():this.hide();
}}});
})();
(function(){var b="qx.ui.mobile.toolbar.Separator",a="toolbar-separator";
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,construct:function(){qx.ui.mobile.core.Widget.call(this);
},properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var d="middle",c=" ",b="toolbar-button",a="qx.ui.mobile.toolbar.Button";
qx.Class.define(a,{extend:qx.ui.mobile.form.Button,construct:function(e,f){qx.ui.mobile.form.Button.call(this);
this.__ui(e,f);
},properties:{defaultCssClass:{refine:true,init:b}},members:{_applyValue:function(g,h){},__ui:function(i,j){var m,n,l;

if(i){m=new qx.ui.mobile.basic.Label(i);
m.setAnonymous(true);
m.setWrap(false);
}
if(j){n=new qx.ui.mobile.basic.Image(j);
n.setAnonymous(true);
}var k=new qx.ui.mobile.layout.VBox().set({alignY:d});
l=new qx.ui.mobile.container.Composite(k);
l.setAnonymous(true);

if(n){l.add(n);
}
if(m){l.add(m);
}else{if(!n){l.add(new qx.ui.mobile.basic.Label(c));
}}this._add(l);
}},destruct:function(){}});
})();
(function(){var j="value",i="Username: ",h="Password: ",g="model",f="Female",e="Agree? ",d="From a friend",c="Agree on our terms: ",b="qooxdoo Licensing Information\n=============================\n\nqooxdoo may be used under the terms of either the\n\n  * GNU Lesser General Public License (LGPL)\n    http://www.gnu.org/licenses/lgpl.html\n\nor the\n\n  * Eclipse Public License (EPL)\n    http://www.eclipse.org/org/documents/epl-v10.php\n\nAs a recipient of qooxdoo, you may choose which license to receive the code \nunder. Certain files or entire directories may not be covered by this \ndual license, but are subject to licenses compatible to both LGPL and EPL.\nLicense exceptions are explicitly declared in all relevant files or in a \n\nLICENSE file in the relevant directories.",a="How did you hear about us ?",H="How did you hear about us : ",G="Male",F="%",E="Terms of Service",D="Are you human? : ",C="/",B="Username",A="Password",z="username should have more than 3 characters!",y="Terms of Service: ",q="mobileshowcase.page.Form",r="Registration Result",o="Gender",p="Are you human? Drag the slider to prove it.",m="Back",n="Offline ad",k="Web search",l="User Registration Form",s="<br>",t="Form",v="tap",u="Remember password? ",x="password_reminder",w="Submit";
qx.Class.define(q,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(t);
this.setShowBackButton(true);
this.setBackButtonText(m);
},members:{__uj:null,__lK:null,__uk:null,__ul:null,__um:null,__un:null,__uo:null,__up:null,__uq:null,__ur:null,__Q:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var J=new qx.ui.mobile.form.Title(l);
this.getContent().add(J);
this.__Q=this.__us();
this.getContent().add(new qx.ui.mobile.form.renderer.Single(this.__Q));
var I=new qx.ui.mobile.form.Button(w);
I.addListener(v,this._onButtonTap,this);
this.getContent().add(I);
var J=new qx.ui.mobile.form.Title(r);
this.getContent().add(J);
this.__um=new qx.ui.mobile.embed.Html();
this.getContent().add(this.__um);
},__us:function(){var M=new qx.ui.mobile.form.Form();
var N=M.getValidationManager();
this.__lK=new qx.ui.mobile.form.TextField().set({placeholder:B});
this.__lK.setRequired(true);
M.add(this.__lK,i);
N.add(this.__lK,function(O,P){var Q=O!=null&&O.length>3;

if(!Q){P.setInvalidMessage(z);
}return Q;
},this);
this.__uj=new qx.ui.mobile.form.PasswordField().set({placeholder:A});
M.add(this.__uj,h);
this.__up=new qx.ui.mobile.form.CheckBox();
M.add(this.__up,u);
this.__up.setModel(x);
this.__up.bind(g,this.__uj,j);
this.__uj.bind(j,this.__up,g);
M.addGroupHeader(o);
this.__uq=new qx.ui.mobile.form.RadioButton();
this.__ur=new qx.ui.mobile.form.RadioButton();
var L=new qx.ui.form.RadioGroup(this.__uq,this.__ur);
M.add(this.__uq,G);
M.add(this.__ur,f);
this.__uk=new qx.ui.mobile.form.TextArea().set({placeholder:E});
M.add(this.__uk,y);
this.__uk.setValue(b);
this.__ul=new qx.ui.mobile.form.ToggleButton();
M.add(this.__ul,e);
this.__un=new qx.ui.mobile.form.Slider();
M.add(this.__un,p);
var K=new qx.data.Array([k,d,n]);
this.__uo=new qx.ui.mobile.form.SelectBox();
this.__uo.setModel(K);
M.add(this.__uo,a);
return M;
},_onButtonTap:function(R){if(this.__Q.validate()){var S=[];
S.push(i+this.__lK.getValue());
S.push(h+this.__uj.getValue());
S.push(c+this.__ul.getValue());
S.push(H+this.__uo.getValue());
S.push(D+this.__un.getValue()+F);
this.__um.setHtml(S.join(s));
}},_back:function(){qx.ui.mobile.navigation.Manager.getInstance().executeGet(C,{reverse:true});
}}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(b,c,d,e,f){},addButton:function(g,h){}}});
})();
(function(){var b="qx.ui.mobile.form.renderer.AbstractRenderer",a="abstract";
qx.Class.define(b,{type:a,extend:qx.ui.mobile.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(c){qx.ui.mobile.core.Widget.call(this);
var g=c.getGroups();

for(var i=0;i<g.length;i++){var f=g[i];
this.addItems(f.items,f.labels,f.title,f.options,f.headerOptions);
}var d=c.getButtons();
var e=c.getButtonOptions();

for(var i=0;i<d.length;i++){this.addButton(d[i],e[i]);
}c.setRenderer(this);
this._form=c;
},members:{_form:null,addItems:function(h,j,k){throw new Error("Abstract method call");
},addButton:function(l){throw new Error("Abstract method call");
},showErrorForItem:function(m){throw new Error("Abstract method call");
},resetForm:function(){throw new Error("Abstract method call");
}}});
})();
(function(){var f='formElementError',e='div',d='7px',c="qx.ui.mobile.form.renderer.Single",b='marginBottom',a="ul";
qx.Class.define(c,{extend:qx.ui.mobile.form.renderer.AbstractRenderer,construct:function(g){qx.ui.mobile.form.renderer.AbstractRenderer.call(this,g);
this.__ut=[];
},members:{__ut:null,_getTagName:function(){return a;
},addItems:function(h,j,k){if(k!=null){this._showGroupHeader(k);
}
for(var i=0,l=h.length;i<l;i++){var n=new qx.ui.mobile.form.Row();

if(j[i]!=null){var m=new qx.ui.mobile.basic.Label(j[i]);
m._setStyle(b,d);
n.add(m);
}n.add(h[i]);
this._add(n);
}},_showGroupHeader:function(o){var p=new qx.ui.mobile.form.Row();
p.add(new qx.ui.mobile.basic.Label(o));
this._add(p);
},addButton:function(q){var r=new qx.ui.mobile.form.Row(new qx.ui.mobile.layout.HBox());
r.add(q,{flex:1});
this._add(r);
},showErrorForItem:function(s){var t=qx.bom.Element.create(e);
t.innerHTML=s.getInvalidMessage();
qx.bom.element.Class.add(t,f);
qx.dom.Element.insertAfter(t,s.getContainerElement());
qx.bom.Element.focus(s.getContainerElement());
this.__ut.push(t);
},resetForm:function(){for(var i=0;i<this.__ut.length;i++){qx.dom.Element.remove(this.__ut[i]);
}}}});
})();
(function(){var e="li",d="_applyAttribute",c="Boolean",b="qx.ui.mobile.form.Row",a="formRow";
qx.Class.define(b,{extend:qx.ui.mobile.container.Composite,construct:function(f){qx.ui.mobile.container.Composite.call(this,f);
this.initSelectable();
},properties:{defaultCssClass:{refine:true,init:a},selectable:{check:c,init:false,apply:d}},members:{_getTagName:function(){return e;
}}});
})();
(function(){var d="qx.ui.mobile.embed.Html",c="changeHtml",b="String",a="_applyHtml";
qx.Class.define(d,{extend:qx.ui.mobile.core.Widget,construct:function(e){qx.ui.mobile.core.Widget.call(this);

if(e){this.setHtml(e);
}},properties:{html:{check:b,init:null,nullable:true,event:c,apply:a}},members:{_applyHtml:function(f,g){this._setHtml(f);
}}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__L=[];
this._buttons=[];
this._buttonOptions=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__L:null,_validationManager:null,_groupCounter:0,_buttons:null,_buttonOptions:null,_resetter:null,add:function(c,d,e,name,f,g){if(this.__M()){this.__L.push({title:null,items:[],labels:[],names:[],options:[],headerOptions:{}});
}this.__L[this._groupCounter].items.push(c);
this.__L[this._groupCounter].labels.push(d);
this.__L[this._groupCounter].options.push(g);
if(name==null){name=d.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__L[this._groupCounter].names.push(name);
this._validationManager.add(c,e,f);
this._resetter.add(c);
},addGroupHeader:function(h,k){if(!this.__M()){this._groupCounter++;
}this.__L.push({title:h,items:[],labels:[],names:[],options:[],headerOptions:k});
},addButton:function(l,m){this._buttons.push(l);
this._buttonOptions.push(m||null);
},__M:function(){return this.__L.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__L;
},getButtons:function(){return this._buttons;
},getButtonOptions:function(){return this._buttonOptions;
},getItems:function(){var n={};
for(var i=0;i<this.__L.length;i++){var o=this.__L[i];
for(var j=0;j<o.names.length;j++){var name=o.names[j];
n[name]=o.items[j];
}}return n;
}},destruct:function(){this.__L=this._buttons=this._buttonOptions=null;
this._validationManager.dispose();
this._resetter.dispose();
}});
})();
(function(){var k="",j="complete",h="String",g="changeValid",f="qx.event.type.Event",d="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",c="qx.ui.form.validation.Manager",b="This field is required",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__j=[];
this.__k={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(b));
},events:{"changeValid":a,"complete":f},properties:{validator:{check:d,init:null,nullable:true},invalidMessage:{check:h,init:k},requiredFieldMessage:{check:h,init:k},context:{nullable:true}},members:{__j:null,__l:null,__k:null,__m:null,add:function(l,m,n){if(!this.__r(l)){throw new Error("Added widget not supported.");
}if(this.__s(l)){if(m!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var o={item:l,validator:m,valid:null,context:n};
this.__j.push(o);
},remove:function(p){var q=this.__j;

for(var i=0,r=q.length;i<r;i++){if(p===q[i].item){q.splice(i,1);
return p;
}}return null;
},getItems:function(){var s=[];

for(var i=0;i<this.__j.length;i++){s.push(this.__j[i].item);
}return s;
},validate:function(){var x=true;
this.__m=true;
var u=[];
for(var i=0;i<this.__j.length;i++){var v=this.__j[i].item;
var y=this.__j[i].validator;
u.push(v);
if(y==null){var t=this.__n(v);
x=x&&t;
this.__m=t&&this.__m;
continue;
}var t=this.__o(this.__j[i],v.getValue());
x=t&&x;

if(t!=null){this.__m=t&&this.__m;
}}var w=this.__p(u);

if(qx.lang.Type.isBoolean(w)){this.__m=w&&this.__m;
}x=w&&x;
this.__t(x);

if(qx.lang.Object.isEmpty(this.__k)){this.fireEvent(j);
}return x;
},__n:function(z){if(z.getRequired()){if(this.__s(z)){var A=!!z.getSelection()[0];
}else{var A=!!z.getValue();
}z.setValid(A);
var C=z.getRequiredInvalidMessage();
var B=C?C:this.getRequiredFieldMessage();
z.setInvalidMessage(B);
return A;
}return true;
},__o:function(D,E){var J=D.item;
var I=D.context;
var H=D.validator;
if(this.__q(H)){this.__k[J.toHashCode()]=null;
H.validate(J,J.getValue(),this,I);
return null;
}var G=null;

try{var G=H.call(I||this,E,J);

if(G===undefined){G=true;
}}catch(e){if(e instanceof qx.core.ValidationError){G=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var F=e.message;
}else{var F=e.getComment();
}J.setInvalidMessage(F);
}else{throw e;
}}J.setValid(G);
D.valid=G;
return G;
},__p:function(K){var M=this.getValidator();
var N=this.getContext()||this;

if(M==null){return true;
}this.setInvalidMessage(k);

if(this.__q(M)){this.__k[this.toHashCode()]=null;
M.validateForm(K,this,N);
return null;
}
try{var O=M.call(N,K,this);

if(O===undefined){O=true;
}}catch(e){if(e instanceof qx.core.ValidationError){O=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var L=e.message;
}else{var L=e.getComment();
}this.setInvalidMessage(L);
}else{throw e;
}}return O;
},__q:function(P){var Q=false;

if(!qx.lang.Type.isFunction(P)){Q=qx.Class.isSubClassOf(P.constructor,qx.ui.form.validation.AsyncValidator);
}return Q;
},__r:function(R){var S=R.constructor;
return qx.Class.hasInterface(S,qx.ui.form.IForm);
},__s:function(T){var U=T.constructor;
return qx.Class.hasInterface(U,qx.ui.core.ISingleSelection);
},__t:function(V){var W=this.__l;
this.__l=V;
if(W!=V){this.fireDataEvent(g,V,W);
}},getValid:function(){return this.__l;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var X=[];
for(var i=0;i<this.__j.length;i++){var Y=this.__j[i].item;

if(!Y.getValid()){X.push(Y.getInvalidMessage());
}}if(this.getInvalidMessage()!=k){X.push(this.getInvalidMessage());
}return X;
},reset:function(){for(var i=0;i<this.__j.length;i++){var ba=this.__j[i];
ba.item.setValid(true);
}this.__l=null;
},setItemValid:function(bb,bc){this.__k[bb.toHashCode()]=bc;
bb.setValid(bc);
this.__u();
},setFormValid:function(bd){this.__k[this.toHashCode()]=bd;
this.__u();
},__u:function(){var bf=this.__m;
for(var bg in this.__k){var be=this.__k[bg];
bf=be&&bf;
if(be==null){return;
}}this.__t(bf);
this.__k={};
this.fireEvent(j);
}},destruct:function(){this.__j=null;
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
(function(){var a="qx.ui.form.validation.AsyncValidator";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b){qx.core.Object.call(this);
this.__v=b;
},members:{__v:null,__w:null,__x:null,__y:null,validate:function(c,d,e,f){this.__y=false;
this.__w=c;
this.__x=e;
this.__v.call(f||this,this,d);
},validateForm:function(g,h,i){this.__y=true;
this.__x=h;
this.__v.call(i,g,this);
},setValid:function(j,k){if(this.__y){if(k!==undefined){this.__x.setInvalidMessage(k);
}this.__x.setFormValid(j);
}else{if(k!==undefined){this.__w.setInvalidMessage(k);
}this.__x.setItemValid(this.__w,j);
}}},destruct:function(){this.__x=this.__w=null;
}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
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
(function(){var a="qx.ui.form.Resetter";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__a=[];
},members:{__a:null,add:function(b){if(this._supportsValue(b)){var c=b.getValue();
}else if(this.__s(b)){var c=b.getSelection();
}else{throw new Error("Item "+b+" not supported for reseting.");
}this.__a.push({item:b,init:c});
},reset:function(){for(var i=0;i<this.__a.length;i++){var d=this.__a[i];
this.__S(d.item,d.init);
}},resetItem:function(e){var f;

for(var i=0;i<this.__a.length;i++){var g=this.__a[i];

if(g.item===e){f=g.init;
break;
}}if(f===undefined){throw new Error("The given item has not been added.");
}this.__S(e,f);
},__S:function(h,j){if(this._supportsValue(h)){h.setValue(j);
}else if(this.__s(h)){h.setSelection(j);
}},redefine:function(){for(var i=0;i<this.__a.length;i++){var k=this.__a[i].item;
this.__a[i].init=this.__T(k);
}},redefineItem:function(l){var m;

for(var i=0;i<this.__a.length;i++){if(this.__a[i].item===l){m=this.__a[i];
break;
}}if(m===undefined){throw new Error("The given item has not been added.");
}m.init=this.__T(m.item);
},__T:function(n){if(this._supportsValue(n)){return n.getValue();
}else if(this.__s(n)){return n.getSelection();
}},__s:function(o){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.core.ISingleSelection);
},_supportsValue:function(q){var r=q.constructor;
return (qx.Class.hasInterface(r,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(r,qx.ui.form.IColorForm)||qx.Class.hasInterface(r,qx.ui.form.IDateForm)||qx.Class.hasInterface(r,qx.ui.form.INumberForm)||qx.Class.hasInterface(r,qx.ui.form.IStringForm));
}},destruct:function(){this.__a=null;
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.mobile.form.Form";
qx.Class.define(a,{extend:qx.ui.form.Form,construct:function(){qx.ui.form.Form.call(this);
this._resetter=new qx.ui.mobile.form.Resetter();
},members:{__uu:null,setRenderer:function(b){this.__uu=b;
},validate:function(){var f=qx.ui.form.Form.prototype.validate.call(this);

if(this.__uu!=null){this.__uu.resetForm();
}var e=this.getGroups();

for(var i=0;i<e.length;i++){var c=e[i];

for(var j=0;j<c.items.length;j++){var d=c.items[j];

if(!d.isValid()){if(this.__uu!=null){this.__uu.showErrorForItem(d);
}else{alert('error '+d.getInvalidMessage());
}}}}
if(this.__uu!=null){this.__uu._domUpdated();
}return f;
}}});
})();
(function(){var a="qx.ui.mobile.form.Resetter";
qx.Class.define(a,{extend:qx.ui.form.Resetter,members:{_supportsValue:function(b){var c=b.constructor;
return (qx.ui.form.Resetter.prototype._supportsValue.call(this,b)||qx.Class.hasMixin(c,qx.ui.mobile.form.MValue));
}}});
})();
(function(){var u="change",t="input",s="radio",r="password",q="keypress",p="text",n="checkbox",m="textarea",k="engine.version",j="mshtml",c="propertychange",h="webkit",g="browser.documentmode",b="select-multiple",a="browser.version",f="select",d="qx.event.handler.Input";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__c:false,__d:null,__e:null,__f:null,canHandleEvent:function(v,w){var x=v.tagName.toLowerCase();

if(w===t&&(x===t||x===m)){return true;
}
if(w===u&&(x===t||x===m||x===f)){return true;
}return false;
},registerEvent:function(y,z,A){if(h==j&&(qx.core.Environment.get(k)<9||(qx.core.Environment.get(k)>=9&&qx.core.Environment.get(g)<9))){if(!y.__g){var B=y.tagName.toLowerCase();
var C=y.type;

if(C===p||C===r||B===m||C===n||C===s){qx.bom.Event.addNativeListener(y,c,this._onPropertyWrapper);
}
if(C!==n&&C!==s){qx.bom.Event.addNativeListener(y,u,this._onChangeValueWrapper);
}
if(C===p||C===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,y);
qx.bom.Event.addNativeListener(y,q,this._onKeyPressWrapped);
}y.__g=true;
}}else{if(z===t){this.__h(y);
}else if(z===u){if(y.type===s||y.type===n){qx.bom.Event.addNativeListener(y,u,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(y,u,this._onChangeValueWrapper);
}if((false)||(false)){if(y.type===p||y.type===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,y);
qx.bom.Event.addNativeListener(y,q,this._onKeyPressWrapped);
}}}}},__h:function(D){var E=D.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(k))<532&&E==m){qx.bom.Event.addNativeListener(D,q,this._onInputWrapper);
}qx.bom.Event.addNativeListener(D,t,this._onInputWrapper);
},unregisterEvent:function(F,G){if(h==j&&qx.core.Environment.get(k)<9&&qx.core.Environment.get(g)<9){if(F.__g){var H=F.tagName.toLowerCase();
var I=F.type;

if(I===p||I===r||H===m||I===n||I===s){qx.bom.Event.removeNativeListener(F,c,this._onPropertyWrapper);
}
if(I!==n&&I!==s){qx.bom.Event.removeNativeListener(F,u,this._onChangeValueWrapper);
}
if(I===p||I===r){qx.bom.Event.removeNativeListener(F,q,this._onKeyPressWrapped);
}
try{delete F.__g;
}catch(J){F.__g=null;
}}}else{if(G===t){this.__i(F);
}else if(G===u){if(F.type===s||F.type===n){qx.bom.Event.removeNativeListener(F,u,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(F,u,this._onChangeValueWrapper);
}}
if((false)||(false)){if(F.type===p||F.type===r){qx.bom.Event.removeNativeListener(F,q,this._onKeyPressWrapped);
}}}},__i:function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(k))<532&&L==m){qx.bom.Event.removeNativeListener(K,q,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(K,t,this._onInputWrapper);
},_onKeyPress:null,_inputFix:null,_onKeyDown:null,_onKeyUp:null,_onBlur:null,_onInput:qx.event.GlobalError.observeMethod(function(e){var N=qx.bom.Event.getTarget(e);
var M=N.tagName.toLowerCase();
if(!this.__c||M!==t){if((false)&&qx.core.Environment.get(a)<10.6){this.__d=window.setTimeout(function(){qx.event.Registration.fireEvent(N,t,qx.event.type.Data,[N.value]);
},0);
}else{qx.event.Registration.fireEvent(N,t,qx.event.type.Data,[N.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var P=qx.bom.Event.getTarget(e);
var O=P.value;

if(P.type===b){var O=[];

for(var i=0,o=P.options,l=o.length;i<l;i++){if(o[i].selected){O.push(o[i].value);
}}}qx.event.Registration.fireEvent(P,u,qx.event.type.Data,[O]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var Q=qx.bom.Event.getTarget(e);

if(Q.type===s){if(Q.checked){qx.event.Registration.fireEvent(Q,u,qx.event.type.Data,[Q.value]);
}}else{qx.event.Registration.fireEvent(Q,u,qx.event.type.Data,[Q.checked]);
}}),_onProperty:function(){}},defer:function(R){qx.event.Registration.addHandler(R);
}});
})();
(function(){var j="input",i="value",h="qx.event.type.Data",g="Boolean",f="",e='boolean',d="change",c="qx.ui.mobile.form.MValue",b="changeValue",a='number';
qx.Mixin.define(c,{construct:function(k){if(k){this.setValue(k);
}qx.event.Registration.addListener(this.getContentElement(),d,this._onChangeContent,this);
qx.event.Registration.addListener(this.getContentElement(),j,this._onInput,this);
},events:{"input":h,"changeValue":h},properties:{liveUpdate:{check:g,init:false}},members:{__e:null,_convertValue:function(l){if(typeof l===e){return l;
}else if(typeof l===a){return l;
}else{return l||f;
}},setValue:function(m){m=this._convertValue(m);

if(this.__e!=m){if(this._setValue){this._setValue(m);
}else{this._setAttribute(i,m);
}this.__uv(m);
}},getValue:function(){return this._convertValue(this._getValue?this._getValue():this._getAttribute(i));
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(n){this.__uv(this._convertValue(n.getData()));
},_onInput:function(o){this.fireDataEvent(j,o.getData(),true);

if(this.getLiveUpdate()){this.setValue(o.getData());
}},__uv:function(p){if(this.__e!=p){this.__e=p;
this.fireDataEvent(b,p);
}}}});
})();
(function(){var g="_applyAttribute",f="Boolean",e="_applyMaxLength",d="maxlength",c="qx.ui.mobile.form.MText",b="String",a="PositiveInteger";
qx.Mixin.define(c,{construct:function(h){this.initMaxLength();
this.initPlaceholder();
this.initReadOnly();
},properties:{maxLength:{check:a,nullable:true,init:null,apply:e},placeholder:{check:b,nullable:true,init:null,apply:g},readOnly:{check:f,nullable:true,init:null,apply:g}},members:{_applyMaxLength:function(i,j){this._setAttribute(d,i);
}}});
})();
(function(){var a="qx.ui.mobile.form.MState";
qx.Mixin.define(a,{members:{__jx:null,addState:function(b){if(this.__jx===null){this.__jx={};
}this.__jx[b]=true;
this.addCssClass(b);
},hasState:function(c){return this.__jx!==null&&this.__jx[c];
},removeState:function(d){if(this.hasState(d)){delete this.__jx[d];
this.removeCssClass(d);
}},replaceState:function(e,f){if(this.hasState(e)){delete this.__jx[e];
this.__jx[f]=true;
this.removeCssClass(e);
this.addCssClass(f);
}else{this.addState(f);
}}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
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
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var d="qx.ui.mobile.form.Input",c="type",b="abstract",a="input";
qx.Class.define(d,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty,qx.ui.mobile.form.MState,qx.ui.mobile.form.MEnable],implement:[qx.ui.form.IForm,qx.ui.form.IModel],type:b,construct:function(){qx.ui.mobile.core.Widget.call(this);
this._setAttribute(c,this._getType());
},members:{_getTagName:function(){return a;
},_getType:function(){}}});
})();
(function(){var c="text",b="qx.ui.mobile.form.TextField",a="textField";
qx.Class.define(b,{extend:qx.ui.mobile.form.Input,include:[qx.ui.mobile.form.MValue,qx.ui.mobile.form.MText],implement:[qx.ui.form.IStringForm],construct:function(d){qx.ui.mobile.form.Input.call(this);
},properties:{defaultCssClass:{refine:true,init:a}},members:{_getType:function(){return c;
}}});
})();
(function(){var c="passwordField",b="password",a="qx.ui.mobile.form.PasswordField";
qx.Class.define(a,{extend:qx.ui.mobile.form.TextField,properties:{defaultCssClass:{refine:true,init:c}},members:{_getType:function(){return b;
}}});
})();
(function(){var d="checked",c="checkBox",b="qx.ui.mobile.form.CheckBox",a="checkbox";
qx.Class.define(b,{extend:qx.ui.mobile.form.Input,include:[qx.ui.mobile.form.MValue],construct:function(e){qx.ui.mobile.form.Input.call(this);
},properties:{defaultCssClass:{refine:true,init:c}},members:{_getType:function(){return a;
},_setValue:function(f){this._setAttribute(d,f);
},_getValue:function(){return this._getAttribute(d);
}}});
})();
(function(){var e="radio",d="checked",c="_applyGroup",b="qx.ui.form.RadioGroup",a="qx.ui.mobile.form.RadioButton";
qx.Class.define(a,{extend:qx.ui.mobile.form.Input,include:[qx.ui.mobile.form.MValue],construct:function(f){qx.ui.mobile.form.Input.call(this);
},properties:{defaultCssClass:{refine:true,init:e},group:{check:b,nullable:true,apply:c}},members:{_getType:function(){return e;
},_applyGroup:function(g,h){if(h){h.remove(this);
}
if(g){g.add(this);
}},_setValue:function(i){this._setAttribute(d,i);
},_getValue:function(){return this._getAttribute(d);
}}});
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
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
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
(function(){var c="textarea",b="textArea",a="qx.ui.mobile.form.TextArea";
qx.Class.define(a,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.form.MValue,qx.ui.mobile.form.MText,qx.ui.form.MForm,qx.ui.form.MModelProperty,qx.ui.mobile.form.MState,qx.ui.mobile.form.MEnable],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(d){qx.ui.mobile.core.Widget.call(this);
},properties:{defaultCssClass:{refine:true,init:b}},members:{_getTagName:function(){return c;
}}});
})();
(function(){var f="swipe",e="tap",d="checked",c="toggleButton",b="qx.ui.mobile.form.ToggleButton",a='boolean';
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.form.MValue,qx.ui.form.MForm,qx.ui.form.MModelProperty,qx.ui.mobile.form.MState,qx.ui.mobile.form.MEnable],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(g){qx.ui.mobile.core.Widget.call(this);
this.__uw=this._createChild();
this._add(this.__uw);

if(g){this.setValue(g);
}this.addListener(e,this._onTap,this);
this.addListener(f,this._onSwipe,this);
},properties:{defaultCssClass:{refine:true,init:c}},members:{__uw:null,__ux:null,_getChild:function(){return this.__uw;
},_createChild:function(){return new qx.ui.mobile.container.Composite();
},_setValue:function(h){if(typeof h!==a){throw new Error("value for "+this+" should be boolean");
}
if(h){this._getChild().addCssClass(d);
}else{this._getChild().removeCssClass(d);
}this.__ux=h;
},_getValue:function(){return this.__ux;
},toggle:function(){this.setValue(!this.getValue());
},_onTap:function(i){this.toggle();
},_onSwipe:function(j){this.toggle();
}},destruct:function(){this.removeListener(e,this._onTap,this);
this.removeListener(f,this._onSwipe,this);
this.__uw=null;
}});
})();
(function(){var s="-webkit-transition",r="touchstart",q="Integer",p="resize",o="touchmove",n="transitionEnd",m="_setValue",l="slider",k='px 0px, 0px 0px',j="%",d="-",i="margin-left",g="left .15s, margin-left .15s",c="left",b="qx.ui.mobile.form.Slider",f="div",e="background-position .15s",h="px",a="backgroundPosition";
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.form.MValue,qx.ui.form.MForm,qx.ui.form.MModelProperty,qx.ui.mobile.form.MState,qx.ui.mobile.form.MEnable],implement:[qx.ui.form.IForm,qx.ui.form.IModel,qx.ui.form.INumberForm],construct:function(){qx.ui.mobile.core.Widget.call(this);
this._registerEventListener();
},properties:{defaultCssClass:{refine:true,init:l},minimum:{check:q,init:0,apply:m},maximum:{check:q,init:100,apply:m},step:{check:q,init:1}},members:{_isMovingKnob:false,_knobElement:null,_knobWidth:null,_containerElementWidth:null,_containerElementLeft:null,_pixelPerStep:null,__ux:0,nextValue:function(){this.setValue(this.getValue()+this.getStep());
},previousValue:function(){this.setValue(this.getValue()-this.getStep());
},_createContainerElement:function(){var t=qx.ui.mobile.core.Widget.prototype._createContainerElement.call(this);
t.appendChild(this._createKnobElement());
return t;
},_createKnobElement:function(){return qx.bom.Element.create(f);
},_registerEventListener:function(){this.addListener(r,this._onTouchStart,this);
this.addListener(o,this._onTouchMove,this);
qx.bom.Element.addListener(this._getKnobElement(),r,this._onTouchStart,this);
qx.bom.Element.addListener(this._getKnobElement(),n,this._onTransitionEnd,this);
qx.event.Registration.addListener(window,p,this._refresh,this);
},_unregisterEventListener:function(){this.removeListener(r,this._onTouchStart,this);
this.removeListener(o,this._onTouchMove,this);
qx.bom.Element.removeListener(this._getKnobElement(),r,this._onTouchStart,this);
qx.bom.Element.removeListener(this._getKnobElement(),n,this._onTransitionEnd,this);
qx.event.Registration.removeListener(window,p,this._refresh,this);
},_refresh:function(){this._updateSizes();
this._updateKnobPosition();
},_updateSizes:function(){var v=this._getKnobElement();
var u=this.getContainerElement();
this._containerElementWidth=qx.bom.element.Dimension.getWidth(u);
this._containerElementLeft=qx.bom.element.Location.getLeft(u);
this._knobWidth=qx.bom.element.Dimension.getWidth(v);
this._pixelPerStep=this._getPixelPerStep(this._containerElementWidth);
},_onTouchStart:function(w){this._isMovingKnob=false;
this._lastPosition=0;

if(!w.isMultiTouch()){this._updateSizes();
var x=this._lastPosition=this._getPosition(w.getDocumentLeft());
var z=this._getKnobElement();

if(w.getTarget()==z){this._isMovingKnob=true;
w.stopPropagation();
}else{var y=this.getContainerElement();
qx.bom.element.Style.set(z,s,g);
qx.bom.element.Style.set(y,s,e);
this.setValue(this._positionToValue(x));
}}},_onTransitionEnd:function(A){var C=this._getKnobElement();
qx.bom.element.Style.set(C,s,null);
var B=this.getContainerElement();
qx.bom.element.Style.set(B,s,null);
},_onTouchMove:function(D){if(this._isMovingKnob){var E=this._getPosition(D.getDocumentLeft());
if(Math.abs(this._lastPosition-E)>this._pixelPerStep/2){this._lastPosition=E;
this.setValue(this._positionToValue(E));
}D.stopPropagation();
D.preventDefault();
}},_getPosition:function(F){return F-this._containerElementLeft;
},_getKnobElement:function(){if(!this._knobElement){var G=this.getContainerElement();

if(G){this._knobElement=G.childNodes[0];
}}return this._knobElement;
},_setValue:function(H){this.__ux=H;
this._updateKnobPosition();
},_getValue:function(){return this.__ux;
},_updateKnobPosition:function(){var I=this._valueToPercent(this.getValue());
this._setKnobPosition(I);
this._setProgressIndicatorPosition(I);
},_setProgressIndicatorPosition:function(J){var K=this._containerElementWidth;
var O=this._percentToPosition(K,J)+(this._knobWidth/2);
var M=this.getContainerElement();
var N=this._knobWidth*(J/100);
var L=(O-N)+k;
qx.bom.element.Style.set(M,a,L);
},_setKnobPosition:function(P){var R=this._getKnobElement();

if(R){qx.bom.element.Style.set(R,c,P+j);
var Q=this._knobWidth*(P/100);
qx.bom.element.Style.set(R,i,d+Q+h);
}},_valueToPercent:function(S){var T=this.getMinimum();
var S=this._limitValue(S);
return ((S-T)*100)/this._getRange();
},_positionToValue:function(U){var V=this.getMinimum()+(Math.round(U/this._pixelPerStep)*this.getStep());
return this._limitValue(V);
},_percentToPosition:function(W,X){return W*(X/100);
},_limitValue:function(Y){Y=Math.min(Y,this.getMaximum());
Y=Math.max(Y,this.getMinimum());
return Y;
},_getPixelPerStep:function(ba){return ba/this._getOverallSteps();
},_getOverallSteps:function(){return (this._getRange()/this.getStep());
},_getRange:function(){return this.getMaximum()-this.getMinimum();
}},destruct:function(){this._knobElement=null;
this._unregisterEventListener();
}});
})();
(function(){var i="0px",h="mshtml",g="webkit",f="engine.version",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingBottom",a="paddingTop";
qx.Class.define(e,{statics:{getWidth:function(j){return j.offsetWidth;
},getHeight:function(k){return k.offsetHeight;
},getSize:function(l){return {width:this.getWidth(l),height:this.getHeight(l)};
},__ih:{visible:true,hidden:true},getContentWidth:function(m){var n=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getX(m);
var p=parseInt(n.get(m,c)||i,10);
var s=parseInt(n.get(m,d)||i,10);

if(this.__ih[o]){var r=m.clientWidth;
{if(qx.dom.Node.isBlockNode(m)){r=r-p-s;
}};
return r;
}else{if(m.clientWidth>=m.scrollWidth){return Math.max(m.clientWidth,m.scrollWidth)-p-s;
}else{var q=m.scrollWidth-p;
if(g==h&&qx.core.Environment.get(f)>=6){q-=s;
}return q;
}}},getContentHeight:function(t){var u=qx.bom.element.Style;
var x=qx.bom.element.Overflow.getY(t);
var w=parseInt(u.get(t,a)||i,10);
var v=parseInt(u.get(t,b)||i,10);

if(this.__ih[x]){return t.clientHeight-w-v;
}else{if(t.clientHeight>=t.scrollHeight){return Math.max(t.clientHeight,t.scrollHeight)-w-v;
}else{var y=t.scrollHeight-w;
if(g==h&&qx.core.Environment.get(f)==6){y-=v;
}return y;
}}},getContentSize:function(z){return {width:this.getContentWidth(z),height:this.getContentHeight(z)};
}}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="scroll",g="borderBottomWidth",f="borderRightWidth",e="auto",d="marginTop",c="marginLeft",b="padding",a="qx.bom.element.Location",v="engine.version",u="paddingLeft",t="static",s="marginBottom",r="BODY",q="paddingBottom",p="paddingTop",o="marginRight",n="position",m="margin",k="paddingRight",l="border";
qx.Class.define(a,{statics:{__kU:function(w,x){return qx.bom.element.Style.get(w,x,qx.bom.element.Style.COMPUTED_MODE,false);
},__kV:function(y,z){return parseInt(qx.bom.element.Style.get(y,z,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__kW:function(A){var D=0,top=0;
if(A.getBoundingClientRect&&true){var C=qx.dom.Node.getWindow(A);
D-=qx.bom.Viewport.getScrollLeft(C);
top-=qx.bom.Viewport.getScrollTop(C);
}else{var B=qx.dom.Node.getDocument(A).body;
A=A.parentNode;
while(A&&A!=B){D+=A.scrollLeft;
top+=A.scrollTop;
A=A.parentNode;
}}return {left:D,top:top};
},__kX:function(E){var G=qx.dom.Node.getDocument(E);
var F=G.body;
var H=F.offsetLeft;
var top=F.offsetTop;
if(parseFloat(qx.core.Environment.get(v))<530.17){H+=this.__kV(F,i);
top+=this.__kV(F,j);
}return {left:H,top:top};
},__kY:function(I){var K=qx.dom.Node.getDocument(I);
if(I.getBoundingClientRect){var L=I.getBoundingClientRect();
var M=L.left;
var top=L.top;
}else{var M=I.offsetLeft;
var top=I.offsetTop;
I=I.offsetParent;
var J=K.body;
while(I&&I!=J){M+=I.offsetLeft;
top+=I.offsetTop;
M+=this.__kV(I,i);
top+=this.__kV(I,j);
I=I.offsetParent;
}}return {left:M,top:top};
},get:function(N,O){if(N.tagName==r){var location=this.__la(N);
var V=location.left;
var top=location.top;
}else{var P=this.__kX(N);
var U=this.__kY(N);
var scroll=this.__kW(N);
var V=U.left+P.left-scroll.left;
var top=U.top+P.top-scroll.top;
}var Q=V+N.offsetWidth;
var R=top+N.offsetHeight;

if(O){if(O==b||O==h){var S=qx.bom.element.Overflow.getX(N);

if(S==h||S==e){Q+=N.scrollWidth-N.offsetWidth+this.__kV(N,i)+this.__kV(N,f);
}var T=qx.bom.element.Overflow.getY(N);

if(T==h||T==e){R+=N.scrollHeight-N.offsetHeight+this.__kV(N,j)+this.__kV(N,g);
}}
switch(O){case b:V+=this.__kV(N,u);
top+=this.__kV(N,p);
Q-=this.__kV(N,k);
R-=this.__kV(N,q);
case h:V-=N.scrollLeft;
top-=N.scrollTop;
Q-=N.scrollLeft;
R-=N.scrollTop;
case l:V+=this.__kV(N,i);
top+=this.__kV(N,j);
Q-=this.__kV(N,f);
R-=this.__kV(N,g);
break;
case m:V-=this.__kV(N,c);
top-=this.__kV(N,d);
Q+=this.__kV(N,o);
R+=this.__kV(N,s);
break;
}}return {left:V,top:top,right:Q,bottom:R};
},__la:function(W){var top=W.offsetTop+this.__kV(W,d);
var X=W.offsetLeft+this.__kV(W,c);
return {left:X,top:top};
},getLeft:function(Y,ba){return this.get(Y,ba).left;
},getTop:function(bb,bc){return this.get(bb,bc).top;
},getRight:function(bd,be){return this.get(bd,be).right;
},getBottom:function(bf,bg){return this.get(bf,bg).bottom;
},getRelative:function(bh,bi,bj,bk){var bm=this.get(bh,bj);
var bl=this.get(bi,bk);
return {left:bm.left-bl.left,top:bm.top-bl.top,right:bm.right-bl.right,bottom:bm.bottom-bl.bottom};
},getPosition:function(bn){return this.getRelative(bn,this.getOffsetParent(bn));
},getOffsetParent:function(bo){var bq=bo.offsetParent||document.body;
var bp=qx.bom.element.Style;

while(bq&&(!/^body|html$/i.test(bq.tagName)&&bp.get(bq,n)===t)){bq=bq.offsetParent;
}return bq;
}}});
})();
(function(){var n="change",m="changeModel",k="",j="qx.data.Array",h="value",g="true",f="option",e="selectbox",d="select",c="qx.ui.mobile.form.SelectBox",a="selected",b="_applyModel";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.form.MValue,qx.ui.form.MForm,qx.ui.mobile.form.MEnable],implement:[qx.ui.form.IForm,qx.ui.form.IModel],construct:function(){qx.ui.mobile.core.Widget.call(this);
},properties:{defaultCssClass:{refine:true,init:e},model:{check:j,apply:b,event:m,nullable:true,init:null}},members:{__uy:null,_getTagName:function(){return d;
},getSelection:function(){return this.getValue();
},setSelection:function(o){this.setValue(o);
},_setValue:function(p){var q=this.getModel();
this.getContainerElement().selectedIndex=q.indexOf(p);
},_render:function(){this._setHtml(k);
var t=this.getContentElement();

for(var i=0,l=this.getModel().getLength();i<l;i++){var r=this.getModel().getItem(i);
var s=qx.bom.Element.create(f);
qx.bom.element.Attribute.set(s,h,r);
s.appendChild(document.createTextNode(r));
t.appendChild(s);

if(i===this.__uy||(this.__uy==null&&i===0)){qx.bom.element.Attribute.set(s,a,g);
}}this._domUpdated();
},_applyModel:function(u,v){u.addListener(n,this._render,this);

if(v!=null){v.removeListener(n,this._render,this);
}this._render();
}}});
})();
(function(){var j="Cube",i="Slide up",h="Swap",g="dissolve",f="slide",e="fade",d="slideup",c="changeSelection",b="/",a="flip",v="pop",u="Dissolve",t="Slide",s="Back",r="Fade",q="mobileshowcase.page.Animation",p="Flip",o="Pop",n="cube",m="Animation",k="swap",l="/animation/";
qx.Class.define(q,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(m);
this.setShowBackButton(true);
this.setBackButtonText(s);
},members:{_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var x=new qx.ui.mobile.list.List({configureItem:function(y,z,A){y.setTitle(z.title);
y.setShowArrow(true);
}});
var w=[{title:t,animation:f},{title:o,animation:v},{title:r,animation:e},{title:u,animation:g},{title:i,animation:d},{title:p,animation:a},{title:h,animation:k},{title:j,animation:n}];
x.setModel(new qx.data.Array(w));
x.addListener(c,function(B){var C=w[B.getData()].animation;
qx.ui.mobile.navigation.Manager.getInstance().executeGet(l+C);
},this);
this.getContent().add(x);
},_back:function(){qx.ui.mobile.navigation.Manager.getInstance().executeGet(b,{reverse:true});
}}});
})();
(function(){var g="",f="mobileshowcase.page.AnimationLanding",e="Animation",d="/animation",c="Back",b='<strong>Tap "back" button for the reverse animation</strong>',a="String";
qx.Class.define(f,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(e);
this.setShowBackButton(true);
this.setBackButtonText(c);
},properties:{animation:{check:a,init:g}},members:{_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var h=new qx.ui.mobile.embed.Html(b);
this.getContent().add(h);
},_back:function(){qx.ui.mobile.navigation.Manager.getInstance().executeGet(d,{animation:this.getAnimation(),reverse:true});
}}});
})();


qx.$$loader.init();

