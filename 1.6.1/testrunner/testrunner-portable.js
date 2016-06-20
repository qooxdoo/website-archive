(function(){

if (!window.qx) window.qx = {};

if (!window.testrunner) window.testrunner = {};
if (!testrunner.testDefinitions) testrunner.testDefinitions = [];
if (!testrunner.define) testrunner.define = function(testDefinition) {
  testrunner.testDefinitions.push(testDefinition);
}

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"testrunner.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"","qx.testNameSpace":"","qx.theme":"qx.theme.Modern","qx.version":"1.6.1","testrunner.reportServer":null,"testrunner.testOrigin":"external","testrunner.testParts":false,"testrunner.title":"testrunner","testrunner.view":"testrunner.view.Html"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script"},"testrunner":{"resourceUri":"resource","sourceUri":"script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:testrunner-portable.97f6a4638603.js"]}},
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

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"}},"resources":{"qx/test/xmlhttp/php_version.php":"qx","testrunner/view/html/css/testrunner.css":"testrunner"},"translations":{"C":{},"en":{}}};
(function(){var m="toString",k=".",j="Object",h='"',g="Array",f="()",e="String",d="Function",c=".prototype",b="function",K="Boolean",J="Error",I="constructor",H="warn",G="default",F="hasOwnProperty",E="string",D="toLocaleString",C="RegExp",B='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="debug",z="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,L){var N=name.split(k);
var parent=window;
var M=N[0];

for(var i=0,O=N.length-1;i<O;i++,M=N[i]){if(!parent[M]){parent=parent[M]={};
}else{parent=parent[M];
}}parent[M]=L;
return M;
},setDisplayName:function(P,Q,name){P.displayName=Q+k+name+f;
},setDisplayNames:function(R,S){for(var name in R){var T=R[name];

if(T instanceof Function){T.displayName=S+k+name+f;
}}},define:function(name,U){if(!U){var U={statics:{}};
}var ba;
var X=null;
qx.Bootstrap.setDisplayNames(U.statics,name);

if(U.members||U.extend){qx.Bootstrap.setDisplayNames(U.members,name+c);
ba=U.construct||new Function;

if(U.extend){this.extendClass(ba,ba,U.extend,name,Y);
}var V=U.statics||{};
for(var i=0,bb=qx.Bootstrap.getKeys(V),l=bb.length;i<l;i++){var bc=bb[i];
ba[bc]=V[bc];
}X=ba.prototype;
var W=U.members||{};
for(var i=0,bb=qx.Bootstrap.getKeys(W),l=bb.length;i<l;i++){var bc=bb[i];
X[bc]=W[bc];
}}else{ba=U.statics||{};
}var Y=this.createNamespace(name,ba);
ba.name=ba.classname=name;
ba.basename=Y;
ba.$$type=o;
if(!ba.hasOwnProperty(m)){ba.toString=this.genericToString;
}if(U.defer){U.defer(ba,X);
}qx.Bootstrap.$$registry[name]=ba;
return ba;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bd=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){bd=false;
}return bd;
})(),getEnvironmentSetting:function(be){if(qx.$$environment){return qx.$$environment[be];
}},setEnvironmentSetting:function(bf,bg){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bf]===undefined){qx.$$environment[bf]=bg;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bh,bi,bj,name,bk){var bn=bj.prototype;
var bm=new Function;
bm.prototype=bn;
var bl=new bm;
bh.prototype=bl;
bl.name=bl.classname=name;
bl.basename=bk;
bi.base=bh.superclass=bj;
bi.self=bh.constructor=bl.constructor=bh;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:function(bo){var length=0;

for(var bp in bo){length++;
}return length;
},objectMergeWith:function(bq,br,bs){if(bs===undefined){bs=true;
}
for(var bt in br){if(bs||bq[bt]===undefined){bq[bt]=br[bt];
}}return bq;
},__a:[r,F,D,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bu){var bv=[];
var bx=Object.prototype.hasOwnProperty;

for(var by in bu){if(bx.call(bu,by)){bv.push(by);
}}var bw=qx.Bootstrap.__a;

for(var i=0,a=bw,l=a.length;i<l;i++){if(bx.call(bu,a[i])){bv.push(a[i]);
}}return bv;
},"default":function(bz){var bA=[];
var bB=Object.prototype.hasOwnProperty;

for(var bC in bz){if(bB.call(bz,bC)){bA.push(bC);
}}return bA;
}})[typeof (Object.keys)==b?z:(function(){for(var bD in {toString:1}){return bD;
}})()!==m?u:G],getKeysAsString:function(bE){var bF=qx.Bootstrap.getKeys(bE);

if(bF.length==0){return p;
}return h+bF.join(B)+h;
},__b:{"[object String]":e,"[object Array]":g,"[object Object]":j,"[object RegExp]":C,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":d,"[object Error]":J},bind:function(bG,self,bH){var bI=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bJ=Array.prototype.slice.call(arguments,0,arguments.length);
return bG.apply(self,bI.concat(bJ));
};
},firstUp:function(bK){return bK.charAt(0).toUpperCase()+bK.substr(1);
},firstLow:function(bL){return bL.charAt(0).toLowerCase()+bL.substr(1);
},getClass:function(bM){var bN=Object.prototype.toString.call(bM);
return (qx.Bootstrap.__b[bN]||bN.slice(8,-1));
},isString:function(bO){return (bO!==null&&(typeof bO===E||qx.Bootstrap.getClass(bO)==e||bO instanceof String||(!!bO&&!!bO.$$isString)));
},isArray:function(bP){return (bP!==null&&(bP instanceof Array||(bP&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(bP.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bP)==g||(!!bP&&!!bP.$$isArray)));
},isObject:function(bQ){return (bQ!==undefined&&bQ!==null&&qx.Bootstrap.getClass(bQ)==j);
},isFunction:function(bR){return qx.Bootstrap.getClass(bR)==d;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bS,name){while(bS){if(bS.$$properties&&bS.$$properties[name]){return bS.$$properties[name];
}bS=bS.superclass;
}return null;
},hasProperty:function(bT,name){return !!qx.Bootstrap.getPropertyDefinition(bT,name);
},getEventType:function(bU,name){var bU=bU.constructor;

while(bU.superclass){if(bU.$$events&&bU.$$events[name]!==undefined){return bU.$$events[name];
}bU=bU.superclass;
}return null;
},supportsEvent:function(bV,name){return !!qx.Bootstrap.getEventType(bV,name);
},getByInterface:function(bW,bX){var bY,i,l;

while(bW){if(bW.$$implements){bY=bW.$$flatImplements;

for(i=0,l=bY.length;i<l;i++){if(bY[i]===bX){return bW;
}}}bW=bW.superclass;
}return null;
},hasInterface:function(ca,cb){return !!qx.Bootstrap.getByInterface(ca,cb);
},getMixins:function(cc){var cd=[];

while(cc){if(cc.$$includes){cd.push.apply(cd,cc.$$flatIncludes);
}cc=cc.superclass;
}return cd;
},$$logs:[],debug:function(ce,cf){qx.Bootstrap.$$logs.push([A,arguments]);
},info:function(cg,ch){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ci,cj){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(ck,cl){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cm){}}});
})();
(function(){var a="qx.util.OOUtil";
qx.Bootstrap.define(a,{statics:{classIsDefined:qx.Bootstrap.classIsDefined,getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,getByInterface:qx.Bootstrap.getByInterface,hasInterface:qx.Bootstrap.hasInterface,getMixins:qx.Bootstrap.getMixins}});
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
},isCompatible:function(v,w){var x=qx.util.OOUtil.getMixins(w);
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
},$$registry:{},__c:null,__d:function(){}}});
})();
(function(){var cs="qx.bom.client.CssTransform.get3D",cr="default",cq="|",cp="qx.allowUrlSettings",co="qx.bom.client.Stylesheet.getInsertRule",cn="css.transform.3d",cm="qx.bom.client.Html.getDataset",cl="qx.bom.client.PhoneGap.getPhoneGap",ck="qx.bom.client.Html.getAudioAif",cj="qx.debug.dispose",bt="qx.bom.client.Xml.getAttributeNS",bs="qx.bom.client.Stylesheet.getRemoveImport",br="qx.bom.client.Css.getUserModify",bq="qx.bom.client.Css.getBoxShadow",bp="qx.bom.client.Event.getHashChange",bo="qx.bom.client.Plugin.getWindowsMedia",bn="qx.bom.client.Html.getVideo",bm="qx.bom.client.Device.getName",bl="qx.bom.client.Event.getTouch",bk="qx.optimization.strings",cz="qx.optimization.variables",cA="qx.bom.client.EcmaScript.getStackTrace",cx="qx.bom.client.EcmaScript.getObjectCount",cy="qx.bom.client.Xml.getSelectSingleNode",cv="css.gradient.linear",cw="qx.bom.client.Xml.getImplementation",ct="qx.bom.client.Html.getConsole",cu="qx.bom.client.Engine.getVersion",cB="qx.bom.client.Plugin.getQuicktime",cC="qx.propertyDebugLevel",bR="qx.bom.client.Html.getNaturalDimensions",bQ="qx.bom.client.Xml.getSelectNodes",bT="qx.bom.client.Xml.getElementsByTagNameNS",bS="qx.bom.client.Html.getDataUrl",bV="qx.bom.client.Flash.isAvailable",bU="qx.bom.client.Html.getCanvas",bX="qx.bom.client.Css.getBoxModel",bW="qx.bom.client.Plugin.getSilverlight",bP="qx.bom.client.Css.getUserSelect",bO="qx.bom.client.Css.getRadialGradient",a="module.property",b="qx.bom.client.Plugin.getWindowsMediaVersion",c="qx.bom.client.Stylesheet.getCreateStyleSheet",d="qx.bom.client.Locale.getLocale",e="module.events",f="module.databinding",g="qx.bom.client.Html.getFileReader",h="qx.bom.client.Css.getBorderImage",j="qx.bom.client.Stylesheet.getDeleteRule",k="qx.bom.client.Plugin.getDivXVersion",cG="qx.bom.client.Scroll.scrollBarOverlayed",cF="qx.bom.client.Plugin.getPdfVersion",cE=":",cD="qx.bom.client.Css.getLinearGradient",cK="qx.bom.client.Transport.getXmlHttpRequest",cJ="qx.bom.client.Css.getBorderImageSyntax",cI="qx.bom.client.Html.getClassList",cH="qx.bom.client.Event.getHelp",cM="qx.optimization.comments",cL="qx.bom.client.Locale.getVariant",J="qx.bom.client.Css.getBoxSizing",K="qx.bom.client.OperatingSystem.getName",H="module.logger",I="qx.bom.client.Css.getOverflowXY",N="qx.mobile.emulatetouch",O="qx.bom.client.Html.getAudioWav",L="qx.bom.client.Browser.getName",M="qx.bom.client.Css.getInlineBlock",F="qx.bom.client.Plugin.getPdf",G="qx.dynlocale",s="qx.bom.client.Html.getAudio",r="qx.core.Environment",u="qx.bom.client.CssTransform.getSupport",t="qx.bom.client.Html.getTextContent",o="qx.bom.client.Css.getPlaceholder",n="qx.bom.client.Css.getFloat",q="false",p="qx.bom.client.Html.getXul",m="qx.bom.client.Xml.getCreateNode",l="qxenv",T="qx.bom.client.Html.getSessionStorage",U="qx.bom.client.Html.getAudioAu",V="qx.bom.client.Css.getOpacity",W="qx.bom.client.Html.getVml",P="qx.bom.client.Css.getRgba",Q="qx.bom.client.Transport.getMaxConcurrentRequestCount",R="qx.bom.client.Css.getBorderRadius",S="qx.bom.client.Event.getPointer",X="qx.bom.client.Css.getGradients",Y="qx.bom.client.Transport.getSsl",C="qx.bom.client.Html.getWebWorker",B="qx.bom.client.Json.getJson",A="qx.bom.client.Browser.getQuirksMode",z="qx.bom.client.Css.getTextOverflow",y="qx.bom.client.Xml.getQualifiedItem",x="qx.bom.client.Html.getVideoOgg",w="&",v="qx.bom.client.Browser.getDocumentMode",E="qx.allowUrlVariants",D="qx.bom.client.Html.getContains",ba="qx.bom.client.Plugin.getActiveX",bb=".",bc="qx.bom.client.Xml.getDomProperties",bd="qx.bom.client.CssAnimation.getSupport",be="qx.debug.databinding",bf="qx.optimization.basecalls",bg="qx.bom.client.Browser.getVersion",bh="qx.bom.client.Css.getUserSelectNone",bi="true",bj="qx.bom.client.Html.getSvg",bx="qx.optimization.privates",bw="qx.bom.client.Plugin.getDivX",bv="qx.bom.client.Runtime.getName",bu="qx.bom.client.Html.getLocalStorage",bB="qx.bom.client.Flash.getStrictSecurityModel",bA="qx.aspects",bz="qx.debug",by="qx.dynamicmousewheel",bD="qx.bom.client.Html.getAudioMp3",bC="qx.bom.client.Engine.getName",bK="qx.bom.client.Plugin.getGears",bL="qx.bom.client.Plugin.getQuicktimeVersion",bI="qx.bom.client.Html.getAudioOgg",bJ="qx.bom.client.Plugin.getSilverlightVersion",bG="qx.bom.client.Html.getCompareDocumentPosition",bH="qx.bom.client.Flash.getExpressInstall",bE="qx.bom.client.OperatingSystem.getVersion",bF="qx.bom.client.Html.getXPath",bM="qx.bom.client.Html.getGeoLocation",bN="qx.bom.client.Css.getAppearance",cc="qx.mobile.nativescroll",cb="qx.bom.client.Xml.getDomParser",ce="qx.bom.client.Stylesheet.getAddImport",cd="qx.optimization.variants",cg="qx.bom.client.Html.getVideoWebm",cf="qx.bom.client.Flash.getVersion",ci="qx.bom.client.Css.getLegacyWebkitGradient",ch="qx.bom.client.PhoneGap.getNotification",ca="qx.bom.client.Html.getVideoH264",bY="qx.bom.client.Xml.getCreateElementNS";
qx.Bootstrap.define(r,{statics:{_checks:{},_asyncChecks:{},__e:{},_checksMap:{"engine.version":cu,"engine.name":bC,"browser.name":L,"browser.version":bg,"browser.documentmode":v,"browser.quirksmode":A,"runtime.name":bv,"device.name":bm,"locale":d,"locale.variant":cL,"os.name":K,"os.version":bE,"os.scrollBarOverlayed":cG,"plugin.gears":bK,"plugin.activex":ba,"plugin.quicktime":cB,"plugin.quicktime.version":bL,"plugin.windowsmedia":bo,"plugin.windowsmedia.version":b,"plugin.divx":bw,"plugin.divx.version":k,"plugin.silverlight":bW,"plugin.silverlight.version":bJ,"plugin.flash":bV,"plugin.flash.version":cf,"plugin.flash.express":bH,"plugin.flash.strictsecurity":bB,"plugin.pdf":F,"plugin.pdf.version":cF,"io.maxrequests":Q,"io.ssl":Y,"io.xhr":cK,"event.touch":bl,"event.pointer":S,"event.help":cH,"event.hashchange":bp,"ecmascript.objectcount":cx,"ecmascript.stacktrace":cA,"html.webworker":C,"html.filereader":g,"html.geolocation":bM,"html.audio":s,"html.audio.ogg":bI,"html.audio.mp3":bD,"html.audio.wav":O,"html.audio.au":U,"html.audio.aif":ck,"html.video":bn,"html.video.ogg":x,"html.video.h264":ca,"html.video.webm":cg,"html.storage.local":bu,"html.storage.session":T,"html.classlist":cI,"html.xpath":bF,"html.xul":p,"html.canvas":bU,"html.svg":bj,"html.vml":W,"html.dataset":cm,"html.dataurl":bS,"html.console":ct,"html.stylesheet.createstylesheet":c,"html.stylesheet.insertrule":co,"html.stylesheet.deleterule":j,"html.stylesheet.addimport":ce,"html.stylesheet.removeimport":bs,"html.element.contains":D,"html.element.compareDocumentPosition":bG,"html.element.textcontent":t,"html.image.naturaldimensions":bR,"json":B,"css.textoverflow":z,"css.placeholder":o,"css.borderradius":R,"css.borderimage":h,"css.borderimage.standardsyntax":cJ,"css.boxshadow":bq,"css.gradients":X,"css.gradient.linear":cD,"css.gradient.radial":bO,"css.gradient.legacywebkit":ci,"css.boxmodel":bX,"css.rgba":P,"css.userselect":bP,"css.userselect.none":bh,"css.usermodify":br,"css.appearance":bN,"css.float":n,"css.boxsizing":J,"css.translate3d":cs,"css.animation":bd,"css.transform":u,"css.transform.3d":cs,"css.inlineblock":M,"css.opacity":V,"css.overflowxy":I,"phonegap":cl,"phonegap.notification":ch,"xml.implementation":cw,"xml.domparser":cb,"xml.selectsinglenode":cy,"xml.selectnodes":bQ,"xml.getelementsbytagnamens":bT,"xml.domproperties":bc,"xml.attributens":bt,"xml.createnode":m,"xml.getqualifieditem":y,"xml.createelementns":bY},get:function(cN){if(qx.Bootstrap.DEBUG){var cP={"css.translate3d":cn,"css.gradients":cv,"ecmascript.objectcount":null};

if(cN in cP){qx.Bootstrap.warn("The key '"+cN+"' is deprecated."+(cP[cN]?" Please use '"+cP[cN]+"' instead.":""));
}}if(this.__e[cN]!=undefined){return this.__e[cN];
}var cR=this._checks[cN];

if(cR){var cQ=cR();
this.__e[cN]=cQ;
return cQ;
}var cO=this._getClassNameFromEnvKey(cN);

if(cO[0]!=undefined){var cS=cO[0];
var cT=cO[1];
var cQ=cS[cT]();
this.__e[cN]=cQ;
return cQ;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(cN+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},_getClassNameFromEnvKey:function(cU){var db=this._checksMap;

if(db[cU]!=undefined){var cW=db[cU];
var da=cW.lastIndexOf(bb);

if(da>-1){var cY=cW.slice(0,da);
var cV=cW.slice(da+1);
var cX=qx.Bootstrap.getByName(cY);

if(cX!=undefined){return [cX,cV];
}}}return [undefined,undefined];
},getAsync:function(dc,dd,self){var dh=this;

if(this.__e[dc]!=undefined){window.setTimeout(function(){dd.call(self,dh.__e[dc]);
},0);
return;
}var dg=this._asyncChecks[dc];

if(dg){dg(function(dj){dh.__e[dc]=dj;
dd.call(self,dj);
});
return;
}var df=this._getClassNameFromEnvKey(dc);

if(df[0]!=undefined){var di=df[0];
var de=df[1];
di[de](function(dk){dh.__e[dc]=dk;
dd.call(self,dk);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(dc+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(dl,dm){return this.__f(this.get(dl),dm);
},selectAsync:function(dn,dp,self){this.getAsync(dn,function(dq){var dr=this.__f(dn,dp);
dr.call(self,dq);
},this);
},__f:function(ds,dt){var dv=dt[ds];

if(dt.hasOwnProperty(ds)){return dv;
}for(var du in dt){if(du.indexOf(cq)!=-1){var dw=du.split(cq);

for(var i=0;i<dw.length;i++){if(dw[i]==ds){return dt[du];
}}}}
if(dt[cr]!==undefined){return dt[cr];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+ds+'" ('+(typeof ds)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(dt)+'] found, and no default ("default") given');
}},filter:function(dx){var dz=[];

for(var dy in dx){if(this.get(dy)){dz.push(dx[dy]);
}}return dz;
},invalidateCacheKey:function(dA){delete this.__e[dA];
},add:function(dB,dC){if(this._checks[dB]==undefined){if(dC instanceof Function){this._checks[dB]=dC;
}else{this._checks[dB]=this.__i(dC);
}}},addAsync:function(dD,dE){if(this._checks[dD]==undefined){this._asyncChecks[dD]=dE;
}},getChecks:function(){return this._checks;
},getAsyncChecks:function(){return this._asyncChecks;
},_initDefaultQxValues:function(){this.add(cp,function(){return false;
});
this.add(E,function(){return false;
});
this.add(cC,function(){return 0;
});
this.add(bz,function(){return true;
});
this.add(bA,function(){return false;
});
this.add(G,function(){return true;
});
this.add(N,function(){return false;
});
this.add(cc,function(){return false;
});
this.add(by,function(){return true;
});
this.add(be,function(){return false;
});
this.add(cj,function(){return false;
});
this.add(bf,function(){return false;
});
this.add(cM,function(){return false;
});
this.add(bx,function(){return false;
});
this.add(bk,function(){return false;
});
this.add(cz,function(){return false;
});
this.add(cd,function(){return false;
});
this.add(f,function(){return true;
});
this.add(H,function(){return true;
});
this.add(a,function(){return true;
});
this.add(e,function(){return true;
});
},__g:function(){if(qx&&qx.$$environment){for(var dG in qx.$$environment){var dF=qx.$$environment[dG];
this._checks[dG]=this.__i(dF);
}}},__h:function(){if(window.document&&window.document.location){var dH=window.document.location.search.slice(1).split(w);

for(var i=0;i<dH.length;i++){var dJ=dH[i].split(cE);

if(dJ.length!=3||dJ[0]!=l){continue;
}var dK=dJ[1];
var dI=decodeURIComponent(dJ[2]);
if(dI==bi){dI=true;
}else if(dI==q){dI=false;
}else if(/^(\d|\.)+$/.test(dI)){dI=parseFloat(dI);
}this._checks[dK]=this.__i(dI);
}}},__i:function(dL){return qx.Bootstrap.bind(function(dM){return dM;
},null,dL);
}},defer:function(dN){dN._initDefaultQxValues();
dN.__g();
if(dN.get(cp)===true){dN.__h();
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__bc:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__bc;
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
},addAdvice:function(o,p,q,name){this.__bc.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
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
},__j:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__k(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.util.OOUtil.hasInterface(q,r);

if(x){p[v]=this.__n(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__k:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.util.OOUtil.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.util.OOUtil.getPropertyDefinition(y,A).check==h;
}return true;
},__l:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__m:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.util.OOUtil.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__j(K,N,L,false);
this.__l(N,L);
this.__m(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__j(O.prototype,O,P,Q);
this.__l(O,P);
this.__m(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__n:function(){},__c:null,__d:function(){}}});
})();
(function(){var g="emulated",f="native",e='"',d="[object Error]",c="qx.lang.Core",b="\\\\",a="\\\"";
qx.Bootstrap.define(c,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==d)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
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
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,b).replace(/\"/g,a)+e;
}}[String.prototype.quote?f:g]}});
if(!Error.prototype.toString||Error.prototype.toString()==d){Error.prototype.toString=qx.lang.Core.errorToString;
}if(!Array.prototype.indexOf){Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
}
if(!Array.prototype.forEach){Array.prototype.forEach=qx.lang.Core.arrayForEach;
}
if(!Array.prototype.filter){Array.prototype.filter=qx.lang.Core.arrayFilter;
}
if(!Array.prototype.map){Array.prototype.map=qx.lang.Core.arrayMap;
}
if(!Array.prototype.some){Array.prototype.some=qx.lang.Core.arraySome;
}
if(!Array.prototype.every){Array.prototype.every=qx.lang.Core.arrayEvery;
}if(!String.prototype.quote){String.prototype.quote=qx.lang.Core.stringQuote;
}})();
(function(){var bG=';',bF='return this.',bE="string",bD="boolean",bC="",bB='!==undefined)',bA="this.",bz="set",by="setThemed",bx="resetThemed",bm='else if(this.',bl="reset",bk="setRuntime",bj="init",bi="();",bh='else ',bg='if(this.',bf="resetRuntime",be="return this.",bd="get",bN=";",bO="(a[",bL=' of an instance of ',bM="refresh",bJ=' is not (yet) ready!");',bK="]);",bH='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bI='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bP='value !== null && value.nodeType === 9 && value.documentElement',bQ='value !== null && value.$$type === "Mixin"',bq='return init;',bp='var init=this.',bs='value !== null && value.nodeType === 1 && value.attributes',br="var parent = this.getLayoutParent();",bu="Error in property ",bt="property",bw='qx.core.Assert.assertInstance(value, Date, msg) || true',bv="if (!parent) return;",bo=" in method ",bn='qx.core.Assert.assertInstance(value, Error, msg) || true',b='Undefined value is not allowed!',c="inherit",d='Is invalid!',e="MSIE 6.0",f="': ",g=" of class ",h='value !== null && value.nodeType !== undefined',j='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',k="module.events",m='qx.core.Assert.assertPositiveInteger(value, msg) || true',bU='if(init==qx.core.Property.$$inherit)init=null;',bT='value !== null && value.$$type === "Interface"',bS='var inherit=prop.$$inherit;',bR="var value = parent.",bY="$$useinit_",bX="(value);",bW='Requires exactly one argument!',bV="$$runtime_",cb="$$user_",ca='qx.core.Assert.assertArray(value, msg) || true',L='qx.core.Assert.assertPositiveNumber(value, msg) || true',M=".prototype",J="Boolean",K='return value;',P='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',Q='Does not allow any arguments!',N="()",O="var a=arguments[0] instanceof Array?arguments[0]:arguments;",H='value !== null && value.$$type === "Theme"',I="())",u='return null;',t='qx.core.Assert.assertObject(value, msg) || true',w='qx.core.Assert.assertString(value, msg) || true',v="if (value===undefined) value = parent.",q='value !== null && value.$$type === "Class"',p='qx.core.Assert.assertFunction(value, msg) || true',s=".",r="object",o="$$init_",n="$$theme_",V='qx.core.Assert.assertMap(value, msg) || true',W="qx.aspects",X='qx.core.Assert.assertNumber(value, msg) || true',Y='Null value is not allowed!',R='qx.core.Assert.assertInteger(value, msg) || true',S="value",T="rv:1.8.1",U="shorthand",ba='qx.core.Assert.assertInstance(value, RegExp, msg) || true',bb='value !== null && value.type !== undefined',E='value !== null && value.document',D='throw new Error("Property ',C="(!this.",B='qx.core.Assert.assertBoolean(value, msg) || true',A="toggle",z="$$inherit_",y=" with incoming value '",x="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",G="qx.core.Property",F="is",bc='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(G,{statics:{__o:function(){if(qx.core.Environment.get(k)){qx.event.type.Data;
qx.event.dispatch.Direct;
}},__p:{"Boolean":B,"String":w,"Number":X,"Integer":R,"PositiveNumber":L,"PositiveInteger":m,"Error":bn,"RegExp":ba,"Object":t,"Array":ca,"Map":V,"Function":p,"Date":bw,"Node":h,"Element":bs,"Document":bP,"Window":E,"Event":bb,"Class":q,"Mixin":bQ,"Interface":bT,"Theme":H,"Color":bH,"Decorator":j,"Font":bI},__q:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:c,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bE,dereference:bD,inheritable:bD,nullable:bD,themeable:bD,refine:bD,init:null,apply:bE,event:bE,check:null,transform:bE,deferredInit:bD,validate:null},$$allowedGroupKeys:{name:bE,group:r,mode:bE,themeable:bD},$$inheritable:{},__r:function(cc){var cd=this.__s(cc);

if(!cd.length){var ce=function(){};
}else{ce=this.__t(cd);
}cc.prototype.$$refreshInheritables=ce;
},__s:function(cf){var ch=[];

while(cf){var cg=cf.$$properties;

if(cg){for(var name in this.$$inheritable){if(cg[name]&&cg[name].inheritable){ch.push(name);
}}}cf=cf.superclass;
}return ch;
},__t:function(ci){var cm=this.$$store.inherit;
var cl=this.$$store.init;
var ck=this.$$method.refresh;
var cj=[br,bv];

for(var i=0,l=ci.length;i<l;i++){var name=ci[i];
cj.push(bR,cm[name],bN,v,cl[name],bN,bA,ck[name],bX);
}return new Function(cj.join(bC));
},attachRefreshInheritables:function(cn){cn.prototype.$$refreshInheritables=function(){qx.core.Property.__r(cn);
return this.$$refreshInheritables();
};
},attachMethods:function(co,name,cp){cp.group?this.__u(co,cp,name):this.__v(co,cp,name);
},__u:function(cq,cr,name){var cy=qx.Bootstrap.firstUp(name);
var cx=cq.prototype;
var cz=cr.themeable===true;
var cA=[];
var cu=[];

if(cz){var cs=[];
var cw=[];
}var cv=O;
cA.push(cv);

if(cz){cs.push(cv);
}
if(cr.mode==U){var ct=x;
cA.push(ct);

if(cz){cs.push(ct);
}}
for(var i=0,a=cr.group,l=a.length;i<l;i++){cA.push(bA,this.$$method.set[a[i]],bO,i,bK);
cu.push(bA,this.$$method.reset[a[i]],bi);

if(cz){cs.push(bA,this.$$method.setThemed[a[i]],bO,i,bK);
cw.push(bA,this.$$method.resetThemed[a[i]],bi);
}}this.$$method.set[name]=bz+cy;
cx[this.$$method.set[name]]=new Function(cA.join(bC));
this.$$method.reset[name]=bl+cy;
cx[this.$$method.reset[name]]=new Function(cu.join(bC));

if(cz){this.$$method.setThemed[name]=by+cy;
cx[this.$$method.setThemed[name]]=new Function(cs.join(bC));
this.$$method.resetThemed[name]=bx+cy;
cx[this.$$method.resetThemed[name]]=new Function(cw.join(bC));
}},__v:function(cB,cC,name){var cE=qx.Bootstrap.firstUp(name);
var cG=cB.prototype;
if(cC.dereference===undefined&&typeof cC.check===bE){cC.dereference=this.__w(cC.check);
}var cF=this.$$method;
var cD=this.$$store;
cD.runtime[name]=bV+name;
cD.user[name]=cb+name;
cD.theme[name]=n+name;
cD.init[name]=o+name;
cD.inherit[name]=z+name;
cD.useinit[name]=bY+name;
cF.get[name]=bd+cE;
cG[cF.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cB,name,bd);
};
cF.set[name]=bz+cE;
cG[cF.set[name]]=function(cH){return qx.core.Property.executeOptimizedSetter(this,cB,name,bz,arguments);
};
cF.reset[name]=bl+cE;
cG[cF.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bl);
};

if(cC.inheritable||cC.apply||cC.event||cC.deferredInit){cF.init[name]=bj+cE;
cG[cF.init[name]]=function(cI){return qx.core.Property.executeOptimizedSetter(this,cB,name,bj,arguments);
};
}
if(cC.inheritable){cF.refresh[name]=bM+cE;
cG[cF.refresh[name]]=function(cJ){return qx.core.Property.executeOptimizedSetter(this,cB,name,bM,arguments);
};
}cF.setRuntime[name]=bk+cE;
cG[cF.setRuntime[name]]=function(cK){return qx.core.Property.executeOptimizedSetter(this,cB,name,bk,arguments);
};
cF.resetRuntime[name]=bf+cE;
cG[cF.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bf);
};

if(cC.themeable){cF.setThemed[name]=by+cE;
cG[cF.setThemed[name]]=function(cL){return qx.core.Property.executeOptimizedSetter(this,cB,name,by,arguments);
};
cF.resetThemed[name]=bx+cE;
cG[cF.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cB,name,bx);
};
}
if(cC.check===J){cG[A+cE]=new Function(be+cF.set[name]+C+cF.get[name]+I);
cG[F+cE]=new Function(be+cF.get[name]+N);
}},__w:function(cM){return !!this.__q[cM];
},__x:function(cN){return this.__q[cN]||qx.util.OOUtil.classIsDefined(cN)||(qx.Interface&&qx.Interface.isDefined(cN));
},__y:{0:bc,1:bW,2:b,3:Q,4:Y,5:d},error:function(cO,cP,cQ,cR,cS){var cT=cO.constructor.classname;
var cU=bu+cQ+g+cT+bo+this.$$method[cR][cQ]+y+cS+f;
throw new Error(cU+(this.__y[cP]||"Unknown reason: "+cP));
},__z:function(cV,cW,name,cX,cY,da){var db=this.$$method[cX][name];
{cW[db]=new Function(S,cY.join(bC));
};
if(qx.core.Environment.get(W)){cW[db]=qx.core.Aspect.wrap(cV.classname+s+db,cW[db],bt);
}qx.Bootstrap.setDisplayName(cW[db],cV.classname+M,db);
if(da===undefined){return cV[db]();
}else{return cV[db](da[0]);
}},executeOptimizedGetter:function(dc,dd,name,de){var dg=dd.$$properties[name];
var di=dd.prototype;
var df=[];
var dh=this.$$store;
df.push(bg,dh.runtime[name],bB);
df.push(bF,dh.runtime[name],bG);

if(dg.inheritable){df.push(bm,dh.inherit[name],bB);
df.push(bF,dh.inherit[name],bG);
df.push(bh);
}df.push(bg,dh.user[name],bB);
df.push(bF,dh.user[name],bG);

if(dg.themeable){df.push(bm,dh.theme[name],bB);
df.push(bF,dh.theme[name],bG);
}
if(dg.deferredInit&&dg.init===undefined){df.push(bm,dh.init[name],bB);
df.push(bF,dh.init[name],bG);
}df.push(bh);

if(dg.init!==undefined){if(dg.inheritable){df.push(bp,dh.init[name],bG);

if(dg.nullable){df.push(bU);
}else if(dg.init!==undefined){df.push(bF,dh.init[name],bG);
}else{df.push(P,name,bL,dd.classname,bJ);
}df.push(bq);
}else{df.push(bF,dh.init[name],bG);
}}else if(dg.inheritable||dg.nullable){df.push(u);
}else{df.push(D,name,bL,dd.classname,bJ);
}return this.__z(dc,di,name,de,df);
},executeOptimizedSetter:function(dj,dk,name,dl,dm){var ds=dk.$$properties[name];
var dr=dk.prototype;
var dp=[];
var dn=dl===bz||dl===by||dl===bk||(dl===bj&&ds.init===undefined);
var dq=ds.apply||ds.event||ds.inheritable;
var dt=this.__A(dl,name);
this.__B(dp,ds,name,dl,dn);

if(dn){this.__C(dp,dk,ds,name);
}
if(dq){this.__D(dp,dn,dt,dl);
}
if(ds.inheritable){dp.push(bS);
}
if(!dq){this.__F(dp,name,dl,dn);
}else{this.__G(dp,ds,name,dl,dn);
}
if(ds.inheritable){this.__H(dp,ds,name,dl);
}else if(dq){this.__I(dp,ds,name,dl);
}
if(dq){this.__J(dp,ds,name);
if(ds.inheritable&&dr._getChildren){this.__K(dp,name);
}}if(dn){dp.push(K);
}return this.__z(dj,dr,name,dl,dp,dm);
},__A:function(du,name){if(du==="setRuntime"||du==="resetRuntime"){var dv=this.$$store.runtime[name];
}else if(du==="setThemed"||du==="resetThemed"){dv=this.$$store.theme[name];
}else if(du==="init"){dv=this.$$store.init[name];
}else{dv=this.$$store.user[name];
}return dv;
},__B:function(dw,dx,name,dy,dz){{if(!dx.nullable||dx.check||dx.inheritable){dw.push('var prop=qx.core.Property;');
}if(dy==="set"){dw.push('if(value===undefined)prop.error(this,2,"',name,'","',dy,'",value);');
}};
},__C:function(dA,dB,dC,name){if(dC.transform){dA.push('value=this.',dC.transform,'(value);');
}if(dC.validate){if(typeof dC.validate==="string"){dA.push('this.',dC.validate,'(value);');
}else if(dC.validate instanceof Function){dA.push(dB.classname,'.$$properties.',name);
dA.push('.validate.call(this, value);');
}}},__D:function(dD,dE,dF,dG){var dH=(dG==="reset"||dG==="resetThemed"||dG==="resetRuntime");

if(dE){dD.push('if(this.',dF,'===value)return value;');
}else if(dH){dD.push('if(this.',dF,'===undefined)return;');
}},__E:undefined,__F:function(dI,name,dJ,dK){if(dJ==="setRuntime"){dI.push('this.',this.$$store.runtime[name],'=value;');
}else if(dJ==="resetRuntime"){dI.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dI.push('delete this.',this.$$store.runtime[name],';');
}else if(dJ==="set"){dI.push('this.',this.$$store.user[name],'=value;');
}else if(dJ==="reset"){dI.push('if(this.',this.$$store.user[name],'!==undefined)');
dI.push('delete this.',this.$$store.user[name],';');
}else if(dJ==="setThemed"){dI.push('this.',this.$$store.theme[name],'=value;');
}else if(dJ==="resetThemed"){dI.push('if(this.',this.$$store.theme[name],'!==undefined)');
dI.push('delete this.',this.$$store.theme[name],';');
}else if(dJ==="init"&&dK){dI.push('this.',this.$$store.init[name],'=value;');
}},__G:function(dL,dM,name,dN,dO){if(dM.inheritable){dL.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dL.push('var computed, old;');
}dL.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="resetRuntime"){dL.push('delete this.',this.$$store.runtime[name],';');
dL.push('if(this.',this.$$store.user[name],'!==undefined)');
dL.push('computed=this.',this.$$store.user[name],';');
dL.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dL.push('computed=this.',this.$$store.theme[name],';');
dL.push('else if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else{dL.push('old=computed=this.',this.$$store.runtime[name],';');
if(dN==="set"){dL.push('this.',this.$$store.user[name],'=value;');
}else if(dN==="reset"){dL.push('delete this.',this.$$store.user[name],';');
}else if(dN==="setThemed"){dL.push('this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
}else if(dN==="init"&&dO){dL.push('this.',this.$$store.init[name],'=value;');
}}dL.push('}');
dL.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dN==="set"){if(!dM.inheritable){dL.push('old=this.',this.$$store.user[name],';');
}dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="reset"){if(!dM.inheritable){dL.push('old=this.',this.$$store.user[name],';');
}dL.push('delete this.',this.$$store.user[name],';');
dL.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dL.push('computed=this.',this.$$store.runtime[name],';');
dL.push('if(this.',this.$$store.theme[name],'!==undefined)');
dL.push('computed=this.',this.$$store.theme[name],';');
dL.push('else if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else{if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dM.inheritable){dL.push('computed=this.',this.$$store.user[name],';');
}else{dL.push('old=computed=this.',this.$$store.user[name],';');
}if(dN==="setThemed"){dL.push('this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
}else if(dN==="init"&&dO){dL.push('this.',this.$$store.init[name],'=value;');
}}dL.push('}');
if(dM.themeable){dL.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dM.inheritable){dL.push('old=this.',this.$$store.theme[name],';');
}
if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="resetThemed"){dL.push('delete this.',this.$$store.theme[name],';');
dL.push('if(this.',this.$$store.init[name],'!==undefined){');
dL.push('computed=this.',this.$$store.init[name],';');
dL.push('this.',this.$$store.useinit[name],'=true;');
dL.push('}');
}else if(dN==="init"){if(dO){dL.push('this.',this.$$store.init[name],'=value;');
}dL.push('computed=this.',this.$$store.theme[name],';');
}else if(dN==="refresh"){dL.push('computed=this.',this.$$store.theme[name],';');
}dL.push('}');
}dL.push('else if(this.',this.$$store.useinit[name],'){');

if(!dM.inheritable){dL.push('old=this.',this.$$store.init[name],';');
}
if(dN==="init"){if(dO){dL.push('computed=this.',this.$$store.init[name],'=value;');
}else{dL.push('computed=this.',this.$$store.init[name],';');
}}else if(dN==="set"||dN==="setRuntime"||dN==="setThemed"||dN==="refresh"){dL.push('delete this.',this.$$store.useinit[name],';');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="refresh"){dL.push('computed=this.',this.$$store.init[name],';');
}}dL.push('}');
if(dN==="set"||dN==="setRuntime"||dN==="setThemed"||dN==="init"){dL.push('else{');

if(dN==="setRuntime"){dL.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dN==="set"){dL.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dN==="setThemed"){dL.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dN==="init"){if(dO){dL.push('computed=this.',this.$$store.init[name],'=value;');
}else{dL.push('computed=this.',this.$$store.init[name],';');
}dL.push('this.',this.$$store.useinit[name],'=true;');
}dL.push('}');
}},__H:function(dP,dQ,name,dR){dP.push('if(computed===undefined||computed===inherit){');

if(dR==="refresh"){dP.push('computed=value;');
}else{dP.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dP.push('if((computed===undefined||computed===inherit)&&');
dP.push('this.',this.$$store.init[name],'!==undefined&&');
dP.push('this.',this.$$store.init[name],'!==inherit){');
dP.push('computed=this.',this.$$store.init[name],';');
dP.push('this.',this.$$store.useinit[name],'=true;');
dP.push('}else{');
dP.push('delete this.',this.$$store.useinit[name],';}');
dP.push('}');
dP.push('if(old===computed)return value;');
dP.push('if(computed===inherit){');
dP.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dP.push('}');
dP.push('else if(computed===undefined)');
dP.push('delete this.',this.$$store.inherit[name],';');
dP.push('else this.',this.$$store.inherit[name],'=computed;');
dP.push('var backup=computed;');
if(dQ.init!==undefined&&dR!=="init"){dP.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dP.push('if(old===undefined)old=null;');
}dP.push('if(computed===undefined||computed==inherit)computed=null;');
},__I:function(dS,dT,name,dU){if(dU!=="set"&&dU!=="setRuntime"&&dU!=="setThemed"){dS.push('if(computed===undefined)computed=null;');
}dS.push('if(old===computed)return value;');
if(dT.init!==undefined&&dU!=="init"){dS.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dS.push('if(old===undefined)old=null;');
}},__J:function(dV,dW,name){if(dW.apply){dV.push('this.',dW.apply,'(computed, old, "',name,'");');
}if(dW.event){dV.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dW.event,"')){","reg.fireEvent(this, '",dW.event,"', qx.event.type.Data, [computed, old]",")}");
}},__K:function(dX,name){dX.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dX.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dX.push('}');
}},defer:function(dY){var eb=navigator.userAgent.indexOf(e)!=-1;
var ea=navigator.userAgent.indexOf(T)!=-1;
if(eb||ea){dY.__w=dY.__x;
}}});
})();
(function(){var k="qx.aspects",j="Array",h=".",g="static",f="[Class ",e="]",d="constructor",c="extend",b="qx.Class";
qx.Bootstrap.define(b,{statics:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,m){if(!m){var m={};
}if(m.include&&!(qx.Bootstrap.getClass(m.include)===j)){m.include=[m.include];
}if(m.implement&&!(qx.Bootstrap.getClass(m.implement)===j)){m.implement=[m.implement];
}var n=false;

if(!m.hasOwnProperty(c)&&!m.type){m.type=g;
n=true;
}var o=this.__O(name,m.type,m.extend,m.statics,m.construct,m.destruct,m.include);
if(m.extend){if(m.properties){this.__Q(o,m.properties,true);
}if(m.members){this.__S(o,m.members,true,true,false);
}if(m.events){this.__P(o,m.events,true);
}if(m.include){for(var i=0,l=m.include.length;i<l;i++){this.__W(o,m.include[i],false);
}}}if(m.environment){for(var p in m.environment){qx.core.Environment.add(p,m.environment[p]);
}}if(m.implement){for(var i=0,l=m.implement.length;i<l;i++){this.__U(o,m.implement[i]);
}}if(m.defer){m.defer.self=o;
m.defer(o,o.prototype,{add:function(name,q){var r={};
r[name]=q;
qx.Class.__Q(o,r,true);
}});
}return o;
},undefine:function(name){delete this.$$registry[name];
var s=name.split(h);
var u=[window];

for(var i=0;i<s.length;i++){u.push(u[i][s[i]]);
}for(var i=u.length-1;i>=1;i--){var t=u[i];
var parent=u[i-1];

if(qx.Bootstrap.isFunction(t)||qx.Bootstrap.objectGetLength(t)===0){delete parent[s[i-1]];
}else{break;
}}},isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(v,w){qx.Class.__W(v,w,false);
},patch:function(x,y){qx.Class.__W(x,y,true);
},isSubClassOf:function(z,A){if(!z){return false;
}
if(z==A){return true;
}
if(z.prototype instanceof A){return true;
}return false;
},getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(B){var C=[];

while(B){if(B.$$properties){C.push.apply(C,qx.Bootstrap.getKeys(B.$$properties));
}B=B.superclass;
}return C;
},getByProperty:function(D,name){while(D){if(D.$$properties&&D.$$properties[name]){return D;
}D=D.superclass;
}return null;
},hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(E,F){return E.$$includes&&E.$$includes.indexOf(F)!==-1;
},getByMixin:function(G,H){var I,i,l;

while(G){if(G.$$includes){I=G.$$flatIncludes;

for(i=0,l=I.length;i<l;i++){if(I[i]===H){return G;
}}}G=G.superclass;
}return null;
},getMixins:qx.util.OOUtil.getMixins,hasMixin:function(J,K){return !!this.getByMixin(J,K);
},hasOwnInterface:function(L,M){return L.$$implements&&L.$$implements.indexOf(M)!==-1;
},getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(N){var O=[];

while(N){if(N.$$implements){O.push.apply(O,N.$$flatImplements);
}N=N.superclass;
}return O;
},hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(P,Q){var R=P.constructor;

if(this.hasInterface(R,Q)){return true;
}
try{qx.Interface.assertObject(P,Q);
return true;
}catch(S){}
try{qx.Interface.assert(R,Q,false);
return true;
}catch(T){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return f+this.classname+e;
},$$registry:qx.Bootstrap.$$registry,__c:null,__M:null,__d:function(){},__N:function(){},__O:function(name,U,V,W,X,Y,ba){var bd;

if(!V&&qx.core.Environment.get("qx.aspects")==false){bd=W||{};
qx.Bootstrap.setDisplayNames(bd,name);
}else{var bd={};

if(V){if(!X){X=this.__X();
}
if(this.__ba(V,ba)){bd=this.__bb(X,name,U);
}else{bd=X;
}if(U==="singleton"){bd.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(X,name,"constructor");
}if(W){qx.Bootstrap.setDisplayNames(W,name);
var be;

for(var i=0,a=qx.Bootstrap.getKeys(W),l=a.length;i<l;i++){be=a[i];
var bb=W[be];

if(qx.core.Environment.get("qx.aspects")){if(bb instanceof Function){bb=qx.core.Aspect.wrap(name+"."+be,bb,"static");
}bd[be]=bb;
}else{bd[be]=bb;
}}}}var bc=qx.Bootstrap.createNamespace(name,bd);
bd.name=bd.classname=name;
bd.basename=bc;
bd.$$type="Class";

if(U){bd.$$classtype=U;
}if(!bd.hasOwnProperty("toString")){bd.toString=this.genericToString;
}
if(V){qx.Bootstrap.extendClass(bd,X,V,name,bc);
if(Y){if(qx.core.Environment.get("qx.aspects")){Y=qx.core.Aspect.wrap(name,Y,"destructor");
}bd.$$destructor=Y;
qx.Bootstrap.setDisplayName(Y,name,"destruct");
}}this.$$registry[name]=bd;
return bd;
},__P:function(bf,bg,bh){var bi,bi;

if(bf.$$events){for(var bi in bg){bf.$$events[bi]=bg[bi];
}}else{bf.$$events=bg;
}},__Q:function(bj,bk,bl){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bm;

if(bl===undefined){bl=false;
}var bn=bj.prototype;

for(var name in bk){bm=bk[name];
bm.name=name;
if(!bm.refine){if(bj.$$properties===undefined){bj.$$properties={};
}bj.$$properties[name]=bm;
}if(bm.init!==undefined){bj.prototype["$$init_"+name]=bm.init;
}if(bm.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");
}var event={};
event[bm.event]="qx.event.type.Data";
this.__P(bj,event,bl);
}if(bm.inheritable){this.__L.$$inheritable[name]=true;

if(!bn.$$refreshInheritables){this.__L.attachRefreshInheritables(bj);
}}
if(!bm.refine){this.__L.attachMethods(bj,name,bm);
}}},__R:null,__S:function(bo,bp,bq,br,bs){var bt=bo.prototype;
var bv,bu;
qx.Bootstrap.setDisplayNames(bp,bo.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bp),l=a.length;i<l;i++){bv=a[i];
bu=bp[bv];
if(br!==false&&bu instanceof Function&&bu.$$type==null){if(bs==true){bu=this.__T(bu,bt[bv]);
}else{if(bt[bv]){bu.base=bt[bv];
}bu.self=bo;
}
if(qx.core.Environment.get("qx.aspects")){bu=qx.core.Aspect.wrap(bo.classname+"."+bv,bu,"member");
}}bt[bv]=bu;
}},__T:function(bw,bx){if(bx){return function(){var bz=bw.base;
bw.base=bx;
var by=bw.apply(this,arguments);
bw.base=bz;
return by;
};
}else{return bw;
}},__U:function(bA,bB){var bC=qx.Interface.flatten([bB]);

if(bA.$$implements){bA.$$implements.push(bB);
bA.$$flatImplements.push.apply(bA.$$flatImplements,bC);
}else{bA.$$implements=[bB];
bA.$$flatImplements=bC;
}},__V:function(bD){var name=bD.classname;
var bE=this.__bb(bD,name,bD.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bD),l=a.length;i<l;i++){bF=a[i];
bE[bF]=bD[bF];
}bE.prototype=bD.prototype;
var bH=bD.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bF=a[i];
var bI=bH[bF];
if(bI&&bI.self==bD){bI.self=bE;
}}for(var bF in this.$$registry){var bG=this.$$registry[bF];

if(!bG){continue;
}
if(bG.base==bD){bG.base=bE;
}
if(bG.superclass==bD){bG.superclass=bE;
}
if(bG.$$original){if(bG.$$original.base==bD){bG.$$original.base=bE;
}
if(bG.$$original.superclass==bD){bG.$$original.superclass=bE;
}}}qx.Bootstrap.createNamespace(name,bE);
this.$$registry[name]=bE;
return bE;
},__W:function(bJ,bK,bL){if(this.hasMixin(bJ,bK)){return;
}var bO=bJ.$$original;

if(bK.$$constructor&&!bO){bJ=this.__V(bJ);
}var bN=qx.Mixin.flatten([bK]);
var bM;

for(var i=0,l=bN.length;i<l;i++){bM=bN[i];
if(bM.$$events){this.__P(bJ,bM.$$events,bL);
}if(bM.$$properties){this.__Q(bJ,bM.$$properties,bL);
}if(bM.$$members){this.__S(bJ,bM.$$members,bL,bL,bL);
}}if(bJ.$$includes){bJ.$$includes.push(bK);
bJ.$$flatIncludes.push.apply(bJ.$$flatIncludes,bN);
}else{bJ.$$includes=[bK];
bJ.$$flatIncludes=bN;
}},__X:function(){function bP(){bP.base.apply(this,arguments);
}return bP;
},__Y:function(){return function(){};
},__ba:function(bQ,bR){if(bQ&&bQ.$$includes){var bS=bQ.$$flatIncludes;

for(var i=0,l=bS.length;i<l;i++){if(bS[i].$$constructor){return true;
}}}if(bR){var bT=qx.Mixin.flatten(bR);

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){return true;
}}}return false;
},__bb:function(bU,name,bV){var bX=function(){var cb=bX;
var ca=cb.$$original.apply(this,arguments);
if(cb.$$includes){var bY=cb.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){bY[i].$$constructor.apply(this,arguments);
}}}return ca;
};

if(qx.core.Environment.get(k)){var bW=qx.core.Aspect.wrap(name,bX,d);
bX.$$original=bU;
bX.constructor=bW;
bX=bW;
}bX.$$original=bU;
bU.wrapper=bX;
return bX;
}},defer:function(){if(qx.core.Environment.get(k)){for(var cc in qx.Bootstrap.$$registry){var cd=qx.Bootstrap.$$registry[cc];

for(var ce in cd){if(cd[ce] instanceof Function){cd[ce]=qx.core.Aspect.wrap(cc+h+ce,cd[ce],g);
}}}}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__bd:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__be:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bf:function(){var L=qx.lang.Generics.__bd;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__be(N,O);
}}}}},defer:function(Q){Q.__bf();
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",w="qx.data.SingleValueBinding",v="Binding property ",t="Binding from '",u="PositiveNumber",r="PositiveInteger",s="Binding does not exist!",p=").",q="Date",n=" not possible: No event available. ";
qx.Class.define(w,{statics:{__bg:{},bind:function(F,G,H,I,J){var U=this.__bi(F,G,H,I,J);
var P=G.split(d);
var L=this.__bo(P);
var T=[];
var Q=[];
var R=[];
var N=[];
var O=F;
try{for(var i=0;i<P.length;i++){if(L[i]!==l){N.push(g);
}else{N.push(this.__bj(O,P[i]));
}T[i]=O;
if(i==P.length-1){if(L[i]!==l){var Y=L[i]===h?O.length-1:L[i];
var K=O.getItem(Y);
this.__bn(K,H,I,J,F);
R[i]=this.__bp(O,N[i],H,I,J,L[i]);
}else{if(P[i]!=null&&O[m+qx.lang.String.firstUp(P[i])]!=null){var K=O[m+qx.lang.String.firstUp(P[i])]();
this.__bn(K,H,I,J,F);
}R[i]=this.__bp(O,N[i],H,I,J);
}}else{var V={index:i,propertyNames:P,sources:T,listenerIds:R,arrayIndexValues:L,targetObject:H,targetPropertyChain:I,options:J,listeners:Q};
var S=qx.lang.Function.bind(this.__bh,this,V);
Q.push(S);
R[i]=O.addListener(N[i],S);
}if(O[m+qx.lang.String.firstUp(P[i])]==null){O=null;
}else if(L[i]!==l){O=O[m+qx.lang.String.firstUp(P[i])](L[i]);
}else{O=O[m+qx.lang.String.firstUp(P[i])]();
}
if(!O){break;
}}}catch(ba){for(var i=0;i<T.length;i++){if(T[i]&&R[i]){T[i].removeListenerById(R[i]);
}}var X=U.targets;
var M=U.listenerIds[i];
for(var i=0;i<X.length;i++){if(X[i]&&M[i]){X[i].removeListenerById(M[i]);
}}throw ba;
}var W={type:E,listenerIds:R,sources:T,targetListenerIds:U.listenerIds,targets:U.targets};
this.__bq(W,F,G,H,I);
return W;
},__bh:function(bb){if(bb.options&&bb.options.onUpdate){bb.options.onUpdate(bb.sources[bb.index],bb.targetObject);
}for(var j=bb.index+1;j<bb.propertyNames.length;j++){var bf=bb.sources[j];
bb.sources[j]=null;

if(!bf){continue;
}bf.removeListenerById(bb.listenerIds[j]);
}var bf=bb.sources[bb.index];
for(var j=bb.index+1;j<bb.propertyNames.length;j++){if(bb.arrayIndexValues[j-1]!==l){bf=bf[m+qx.lang.String.firstUp(bb.propertyNames[j-1])](bb.arrayIndexValues[j-1]);
}else{bf=bf[m+qx.lang.String.firstUp(bb.propertyNames[j-1])]();
}bb.sources[j]=bf;
if(!bf){this.__bk(bb.targetObject,bb.targetPropertyChain);
break;
}if(j==bb.propertyNames.length-1){if(qx.Class.implementsInterface(bf,qx.data.IListData)){var bg=bb.arrayIndexValues[j]===h?bf.length-1:bb.arrayIndexValues[j];
var bd=bf.getItem(bg);
this.__bn(bd,bb.targetObject,bb.targetPropertyChain,bb.options,bb.sources[bb.index]);
bb.listenerIds[j]=this.__bp(bf,g,bb.targetObject,bb.targetPropertyChain,bb.options,bb.arrayIndexValues[j]);
}else{if(bb.propertyNames[j]!=null&&bf[m+qx.lang.String.firstUp(bb.propertyNames[j])]!=null){var bd=bf[m+qx.lang.String.firstUp(bb.propertyNames[j])]();
this.__bn(bd,bb.targetObject,bb.targetPropertyChain,bb.options,bb.sources[bb.index]);
}var be=this.__bj(bf,bb.propertyNames[j]);
bb.listenerIds[j]=this.__bp(bf,be,bb.targetObject,bb.targetPropertyChain,bb.options);
}}else{if(bb.listeners[j]==null){var bc=qx.lang.Function.bind(this.__bh,this,bb);
bb.listeners.push(bc);
}if(qx.Class.implementsInterface(bf,qx.data.IListData)){var be=g;
}else{var be=this.__bj(bf,bb.propertyNames[j]);
}bb.listenerIds[j]=bf.addListener(be,bb.listeners[j]);
}}},__bi:function(bh,bi,bj,bk,bl){var bp=bk.split(d);
var bn=this.__bo(bp);
var bu=[];
var bt=[];
var br=[];
var bq=[];
var bo=bj;
for(var i=0;i<bp.length-1;i++){if(bn[i]!==l){bq.push(g);
}else{try{bq.push(this.__bj(bo,bp[i]));
}catch(e){break;
}}bu[i]=bo;
var bs=function(){for(var j=i+1;j<bp.length-1;j++){var bx=bu[j];
bu[j]=null;

if(!bx){continue;
}bx.removeListenerById(br[j]);
}var bx=bu[i];
for(var j=i+1;j<bp.length-1;j++){var bv=qx.lang.String.firstUp(bp[j-1]);
if(bn[j-1]!==l){var by=bn[j-1]===h?bx.getLength()-1:bn[j-1];
bx=bx[m+bv](by);
}else{bx=bx[m+bv]();
}bu[j]=bx;
if(bt[j]==null){bt.push(bs);
}if(qx.Class.implementsInterface(bx,qx.data.IListData)){var bw=g;
}else{try{var bw=qx.data.SingleValueBinding.__bj(bx,bp[j]);
}catch(e){break;
}}br[j]=bx.addListener(bw,bt[j]);
}qx.data.SingleValueBinding.updateTarget(bh,bi,bj,bk,bl);
};
bt.push(bs);
br[i]=bo.addListener(bq[i],bs);
var bm=qx.lang.String.firstUp(bp[i]);
if(bo[m+bm]==null){bo=null;
}else if(bn[i]!==l){bo=bo[m+bm](bn[i]);
}else{bo=bo[m+bm]();
}
if(!bo){break;
}}return {listenerIds:br,targets:bu};
},updateTarget:function(bz,bA,bB,bC,bD){var bE=this.getValueFromObject(bz,bA);
bE=qx.data.SingleValueBinding.__br(bE,bB,bC,bD,bz);
this.__bl(bB,bC,bE);
},getValueFromObject:function(o,bF){var bJ=this.__bm(o,bF);
var bH;

if(bJ!=null){var bL=bF.substring(bF.lastIndexOf(d)+1,bF.length);
if(bL.charAt(bL.length-1)==f){var bG=bL.substring(bL.lastIndexOf(k)+1,bL.length-1);
var bI=bL.substring(0,bL.lastIndexOf(k));
var bK=bJ[m+qx.lang.String.firstUp(bI)]();

if(bG==h){bG=bK.length-1;
}
if(bK!=null){bH=bK.getItem(bG);
}}else{bH=bJ[m+qx.lang.String.firstUp(bL)]();
}}return bH;
},__bj:function(bM,bN){var bO=this.__bs(bM,bN);
if(bO==null){if(qx.Class.supportsEvent(bM.constructor,bN)){bO=bN;
}else if(qx.Class.supportsEvent(bM.constructor,g+qx.lang.String.firstUp(bN))){bO=g+qx.lang.String.firstUp(bN);
}else{throw new qx.core.AssertionError(v+bN+x+bM+n);
}}return bO;
},__bk:function(bP,bQ){var bR=this.__bm(bP,bQ);

if(bR!=null){var bS=bQ.substring(bQ.lastIndexOf(d)+1,bQ.length);
if(bS.charAt(bS.length-1)==f){this.__bl(bP,bQ,null);
return;
}if(bR[C+qx.lang.String.firstUp(bS)]!=undefined){bR[C+qx.lang.String.firstUp(bS)]();
}else{bR[a+qx.lang.String.firstUp(bS)](null);
}}},__bl:function(bT,bU,bV){var ca=this.__bm(bT,bU);

if(ca!=null){var cb=bU.substring(bU.lastIndexOf(d)+1,bU.length);
if(cb.charAt(cb.length-1)==f){var bW=cb.substring(cb.lastIndexOf(k)+1,cb.length-1);
var bY=cb.substring(0,cb.lastIndexOf(k));
var bX=bT;

if(!qx.Class.implementsInterface(bX,qx.data.IListData)){bX=ca[m+qx.lang.String.firstUp(bY)]();
}
if(bW==h){bW=bX.length-1;
}
if(bX!=null){bX.setItem(bW,bV);
}}else{ca[a+qx.lang.String.firstUp(cb)](bV);
}}},__bm:function(cc,cd){var cg=cd.split(d);
var ch=cc;
for(var i=0;i<cg.length-1;i++){try{var cf=cg[i];
if(cf.indexOf(f)==cf.length-1){var ce=cf.substring(cf.indexOf(k)+1,cf.length-1);
cf=cf.substring(0,cf.indexOf(k));
}if(cf!=l){ch=ch[m+qx.lang.String.firstUp(cf)]();
}if(ce!=null){if(ce==h){ce=ch.length-1;
}ch=ch.getItem(ce);
ce=null;
}}catch(ci){return null;
}}return ch;
},__bn:function(cj,ck,cl,cm,cn){cj=this.__br(cj,ck,cl,cm,cn);
if(cj===undefined){this.__bk(ck,cl);
}if(cj!==undefined){try{this.__bl(ck,cl,cj);
if(cm&&cm.onUpdate){cm.onUpdate(cn,ck,cj);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cm&&cm.onSetFail){cm.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cj+" on "+ck+". Error message: "+e);
}}}},__bo:function(co){var cp=[];
for(var i=0;i<co.length;i++){var name=co[i];
if(qx.lang.String.endsWith(name,f)){var cq=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cq!==h){if(cq==l||isNaN(parseInt(cq,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){co[i]=name.substring(0,name.indexOf(k));
cp[i]=l;
cp[i+1]=cq;
co.splice(i+1,0,D);
i++;
}else{cp[i]=cq;
co.splice(i,1,D);
}}else{cp[i]=l;
}}return cp;
},__bp:function(cr,cs,ct,cu,cv,cw){var cx;
var cz=function(cA,e){if(cA!==l){if(cA===h){cA=cr.length-1;
}var cD=cr.getItem(cA);
if(cD===undefined){qx.data.SingleValueBinding.__bk(ct,cu);
}var cB=e.getData().start;
var cC=e.getData().end;

if(cA<cB||cA>cC){return;
}}else{var cD=e.getData();
}cD=qx.data.SingleValueBinding.__br(cD,ct,cu,cv,cr);
try{if(cD!==undefined){qx.data.SingleValueBinding.__bl(ct,cu,cD);
}else{qx.data.SingleValueBinding.__bk(ct,cu);
}if(cv&&cv.onUpdate){cv.onUpdate(cr,ct,cD);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cv&&cv.onSetFail){cv.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cD+" on "+ct+". Error message: "+e);
}}};
if(!cw){cw=l;
}cz=qx.lang.Function.bind(cz,cr,cw);
var cy=cr.addListener(cs,cz);
return cy;
},__bq:function(cE,cF,cG,cH,cI){if(this.__bg[cF.toHashCode()]===undefined){this.__bg[cF.toHashCode()]=[];
}this.__bg[cF.toHashCode()].push([cE,cF,cG,cH,cI]);
},__br:function(cJ,cK,cL,cM,cN){if(cM&&cM.converter){var cP;

if(cK.getModel){cP=cK.getModel();
}return cM.converter(cJ,cP,cN,cK);
}else{var cR=this.__bm(cK,cL);
var cS=cL.substring(cL.lastIndexOf(d)+1,cL.length);
if(cR==null){return cJ;
}var cQ=qx.Class.getPropertyDefinition(cR.constructor,cS);
var cO=cQ==null?l:cQ.check;
return this.__bt(cJ,cO);
}},__bs:function(cT,cU){var cV=qx.Class.getPropertyDefinition(cT.constructor,cU);

if(cV==null){return null;
}return cV.event;
},__bt:function(cW,cX){var cY=qx.lang.Type.getClass(cW);
if((cY==c||cY==b)&&(cX==y||cX==r)){cW=parseInt(cW,10);
}if((cY==A||cY==c||cY==q)&&cX==b){cW=cW+l;
}if((cY==c||cY==b)&&(cX==c||cX==u)){cW=parseFloat(cW);
}return cW;
},removeBindingFromObject:function(da,db){if(db.type==E){for(var i=0;i<db.sources.length;i++){if(db.sources[i]){db.sources[i].removeListenerById(db.listenerIds[i]);
}}for(var i=0;i<db.targets.length;i++){if(db.targets[i]){db.targets[i].removeListenerById(db.targetListenerIds[i]);
}}}else{da.removeListenerById(db);
}var dc=this.__bg[da.toHashCode()];
if(dc!=undefined){for(var i=0;i<dc.length;i++){if(dc[i][0]==db){qx.lang.Array.remove(dc,dc[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dd){var de=this.__bg[dd.toHashCode()];

if(de!=undefined){for(var i=de.length-1;i>=0;i--){this.removeBindingFromObject(dd,de[i][0]);
}}},getAllBindingsForObject:function(df){if(this.__bg[df.toHashCode()]===undefined){this.__bg[df.toHashCode()]=[];
}return this.__bg[df.toHashCode()];
},removeAllBindings:function(){for(var dh in this.__bg){var dg=qx.core.ObjectRegistry.fromHashCode(dh);
if(dg==null){delete this.__bg[dh];
continue;
}this.removeAllBindingsForObject(dg);
}this.__bg={};
},getAllBindings:function(){return this.__bg;
},showBindingInLog:function(di,dj){var dl;
for(var i=0;i<this.__bg[di.toHashCode()].length;i++){if(this.__bg[di.toHashCode()][i][0]==dj){dl=this.__bg[di.toHashCode()][i];
break;
}}
if(dl===undefined){var dk=s;
}else{var dk=t+dl[1]+B+dl[2]+z+dl[3]+B+dl[4]+p;
}qx.log.Logger.debug(dk);
},showAllBindingsInLog:function(){for(var dn in this.__bg){var dm=qx.core.ObjectRegistry.fromHashCode(dn);

for(var i=0;i<this.__bg[dn].length;i++){this.showBindingInLog(dm,this.__bg[dn][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Bootstrap.define(g,{statics:{__bu:j,__bv:null,__bw:{},camelCase:function(q){var r=this.__bw[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
this.__bw[q]=r;
}return r;
},hyphenate:function(u){var v=this.__bw[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
this.__bw[u]=v;
}return v;
},capitalize:function(x){if(this.__bv===null){var y=m;
this.__bv=new RegExp(f+this.__bu.replace(/[0-9A-F]{4}/g,function(z){return y+z;
})+a+this.__bu.replace(/[0-9A-F]{4}/g,function(A){return y+A;
})+n,o);
}return x.replace(this.__bv,function(B){return B.toUpperCase();
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
qx.Bootstrap.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}}var o=new m;
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
}}else{var bg=bi[bn];

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
(function(){var u=".",t="function",s="",r="gecko",q="Maple",p="[object Opera]",o="mshtml",n="8.0",m="AppleWebKit/",l="9.0",e="[^\\.0-9]",k="Gecko",h="webkit",c="4.0",b="1.9.0.0",g="opera",f="Version/",i="5.0",a="engine.version",j="qx.bom.client.Engine",d="engine.name";
qx.Bootstrap.define(j,{statics:{getVersion:function(){var y=window.navigator.userAgent;
var w=s;

if(qx.bom.client.Engine.__bx()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(y)){if(y.indexOf(f)!=-1){var x=y.match(/Version\/(\d+)\.(\d+)/);
w=x[1]+u+x[2].charAt(0)+u+x[2].substring(1,x[2].length);
}else{w=RegExp.$1+u+RegExp.$2;

if(RegExp.$3!=s){w+=u+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__by()){if(/AppleWebKit\/([^ ]+)/.test(y)){w=RegExp.$1;
var z=RegExp(e).exec(w);

if(z){w=w.slice(0,z.index);
}}}else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){if(/rv\:([^\);]+)(\)|;)/.test(y)){w=RegExp.$1;
}}else if(qx.bom.client.Engine.__bB()){if(/MSIE\s+([^\);]+)(\)|;)/.test(y)){w=RegExp.$1;
if(w<8&&/Trident\/([^\);]+)(\)|;)/.test(y)){if(RegExp.$1==c){w=n;
}else if(RegExp.$1==i){w=l;
}}}}else{var v=window.qxFail;

if(v&&typeof v===t){w=v().FULLVERSION;
}else{w=b;
qx.Bootstrap.warn("Unsupported client: "+y+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return w;
},getName:function(){var name;

if(qx.bom.client.Engine.__bx()){name=g;
}else if(qx.bom.client.Engine.__by()){name=h;
}else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){name=r;
}else if(qx.bom.client.Engine.__bB()){name=o;
}else{var A=window.qxFail;

if(A&&typeof A===t){name=A().NAME;
}else{name=r;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__bx:function(){return window.opera&&Object.prototype.toString.call(window.opera)==p;
},__by:function(){return window.navigator.userAgent.indexOf(m)!=-1;
},__bz:function(){return window.navigator.userAgent.indexOf(q)!=-1;
},__bA:function(){return window.controllers&&window.navigator.product===k&&window.navigator.userAgent.indexOf(q)==-1;
},__bB:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(B){qx.core.Environment.add(a,B.getVersion);
qx.core.Environment.add(d,B.getName);
}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Bootstrap.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
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
qx.Bootstrap.define(a,{statics:{__bC:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(b);
}else{return !!qx.Bootstrap.getEnvironmentSetting(b);
}},setErrorHandler:function(c,d){this.__bD=c||null;
this.__bE=d||window;

if(this.__bC()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bG,this);

if(this.__bF==null){this.__bF=window.onerror;
}var self=this;
window.onerror=function(f,g,h){self.__bF(f,g,h);
e(f,g,h);
};
}
if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bG,this);
}if(this.__bD==null){if(this.__bF!=null){window.onerror=this.__bF;
this.__bF=null;
}else{window.onerror=null;
}}}},__bG:function(i,j,k){if(this.__bD){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(l){if(this.__bC()){var self=this;
return function(){if(!self.__bD){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(m){self.handleError(new qx.core.GlobalError(m,arguments));
}};
}else{return l;
}},handleError:function(n){if(this.__bD){this.__bD.call(this.__bE,n);
}}},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(b,true);
}else{qx.Bootstrap.setEnvironmentSetting(b,true);
}o.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bH=c;
this.__bI=d||b;
this.__bJ=e===undefined?-1:e;
},members:{__bH:null,__bI:null,__bJ:null,toString:function(){return this.__bH;
},getUri:function(){return this.__bI;
},getLineNumber:function(){return this.__bJ;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);
}this.__bH=b+(c&&c.message?c.message:c);
Error.call(this,this.__bH);
this.__bK=d;
this.__bL=c;
},members:{__bL:null,__bK:null,__bH:null,toString:function(){return this.__bH;
},getArguments:function(){return this.__bK;
},getSourceException:function(){return this.__bL;
}},destruct:function(){this.__bL=null;
this.__bK=null;
this.__bH=null;
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Bootstrap.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g="Event (",f="Expected value to be the CSS color '",d="' but found ",bA="]",bz=", ",by="The value '",bx=")), but found value '",bw=" != ",bv="qx.core.Object",bu="Expected value to be an array but found ",bt=") was fired.",bs="Expected value to be an integer >= 0 but found ",br="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",T="Invalid argument 'type'",P="Called assert with 'false'",bc="Assertion error! ",W="null",bn="' but found '",bh="'undefined'",K="' must must be a key of the map '",bq="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",I="qx.util.ColorUtil",M=": ",O="The raised exception does not have the expected type! ",R=") not fired.",U="qx.core.Assert",X="Expected value to be typeof object but found ",be="' (identical) but found '",bj="' must have any of the values defined in the array '",y="Expected value to be a number but found ",z="Called assertFalse with '",L="qx.ui.core.Widget",bb="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",bg="Array[",bf="' does not match the regular expression '",V="' to be not identical with '",bd="Expected [",a="' arguments but found '",bi="', which cannot be converted to a CSS color!",A="qx.core.AssertionError",B="Expected value to be a boolean but found ",Q="Expected value not to be null but found null!",b="))!",c="Expected value to be a qooxdoo widget but found ",H="Expected value to be typeof '",C="Expected value to be typeof function but found ",D="Expected value to be an integer but found ",G="Called fail().",S="The parameter 're' must be a string or a regular expression.",bl="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",N="], but found [",bm="Wrong number of arguments given. Expected '",J="object";
qx.Class.define(U,{statics:{__bM:true,__bN:function(bB,bC){var bG=p;

for(var i=1,l=arguments.length;i<l;i++){bG=bG+this.__bO(arguments[i]===undefined?bh:arguments[i]);
}var bF=p;

if(bG){bF=bB+M+bG;
}else{bF=bB;
}var bE=bc+bF;

if(qx.Class.isDefined(A)){var bD=new qx.core.AssertionError(bB,bG);

if(this.__bM){qx.Bootstrap.error(bE+"\n Stack trace: \n"+bD.getStackTrace());
}throw bD;
}else{if(this.__bM){qx.Bootstrap.error(bE);
}throw new Error(bE);
}},__bO:function(bH){var bI;

if(bH===null){bI=W;
}else if(qx.lang.Type.isArray(bH)&&bH.length>10){bI=bg+bH.length+bA;
}else if((bH instanceof Object)&&(bH.toString==null)){bI=qx.lang.Json.stringify(bH,null,2);
}else{try{bI=bH.toString();
}catch(e){bI=p;
}}return bI;
},assert:function(bJ,bK){bJ==true||this.__bN(bK||p,P);
},fail:function(bL,bM){var bN=bM?p:G;
this.__bN(bL||p,bN);
},assertTrue:function(bO,bP){(bO===true)||this.__bN(bP||p,u,bO,m);
},assertFalse:function(bQ,bR){(bQ===false)||this.__bN(bR||p,z,bQ,m);
},assertEquals:function(bS,bT,bU){bS==bT||this.__bN(bU||p,k,bS,bn,bT,n);
},assertNotEquals:function(bV,bW,bX){bV!=bW||this.__bN(bX||p,k,bV,br,bW,n);
},assertIdentical:function(bY,ca,cb){bY===ca||this.__bN(cb||p,k,bY,be,ca,n);
},assertNotIdentical:function(cc,cd,ce){cc!==cd||this.__bN(ce||p,k,cc,V,cd,n);
},assertNotUndefined:function(cf,cg){cf!==undefined||this.__bN(cg||p,bo);
},assertUndefined:function(ch,ci){ch===undefined||this.__bN(ci||p,t,ch,o);
},assertNotNull:function(cj,ck){cj!==null||this.__bN(ck||p,Q);
},assertNull:function(cl,cm){cl===null||this.__bN(cm||p,F,cl,o);
},assertJsonEquals:function(cn,co,cp){this.assertEquals(qx.lang.Json.stringify(cn),qx.lang.Json.stringify(co),cp);
},assertMatch:function(cq,cr,cs){this.assertString(cq);
this.assert(qx.lang.Type.isRegExp(cr)||qx.lang.Type.isString(cr),S);
cq.search(cr)>=0||this.__bN(cs||p,bq,cq,bf,cr.toString(),n);
},assertArgumentsCount:function(ct,cu,cv,cw){var cx=ct.length;
(cx>=cu&&cx<=cv)||this.__bN(cw||p,bm,cu,w,cv,a,arguments.length,ba);
},assertEventFired:function(cy,event,cz,cA,cB){var cD=false;
var cC=function(e){if(cA){cA.call(cy,e);
}cD=true;
};
var cE;

try{cE=cy.addListener(event,cC,cy);
cz.call();
}catch(cF){throw cF;
}finally{try{cy.removeListenerById(cE);
}catch(cG){}}cD===true||this.__bN(cB||p,g,event,R);
},assertEventNotFired:function(cH,event,cI,cJ){var cL=false;
var cK=function(e){cL=true;
};
var cM=cH.addListener(event,cK,cH);
cI.call();
cL===false||this.__bN(cJ||p,g,event,bt);
cH.removeListenerById(cM);
},assertException:function(cN,cO,cP,cQ){var cO=cO||Error;
var cR;

try{this.__bM=false;
cN();
}catch(cS){cR=cS;
}finally{this.__bM=true;
}
if(cR==null){this.__bN(cQ||p,s);
}cR instanceof cO||this.__bN(cQ||p,O,cO,bw,cR);

if(cP){this.assertMatch(cR.toString(),cP,cQ);
}},assertInArray:function(cT,cU,cV){cU.indexOf(cT)!==-1||this.__bN(cV||p,by,cT,bj,cU,m);
},assertArrayEquals:function(cW,cX,cY){this.assertArray(cW,cY);
this.assertArray(cX,cY);
cY=cY||bd+cW.join(bz)+N+cX.join(bz)+bA;

if(cW.length!==cX.length){this.fail(cY,true);
}
for(var i=0;i<cW.length;i++){if(cW[i]!==cX[i]){this.fail(cY,true);
}}},assertKeyInMap:function(da,db,dc){db[da]!==undefined||this.__bN(dc||p,by,da,K,db,m);
},assertFunction:function(dd,de){qx.lang.Type.isFunction(dd)||this.__bN(de||p,C,dd,o);
},assertString:function(df,dg){qx.lang.Type.isString(df)||this.__bN(dg||p,bp,df,o);
},assertBoolean:function(dh,di){qx.lang.Type.isBoolean(dh)||this.__bN(di||p,B,dh,o);
},assertNumber:function(dj,dk){(qx.lang.Type.isNumber(dj)&&isFinite(dj))||this.__bN(dk||p,y,dj,o);
},assertPositiveNumber:function(dl,dm){(qx.lang.Type.isNumber(dl)&&isFinite(dl)&&dl>=0)||this.__bN(dm||p,bl,dl,o);
},assertInteger:function(dn,dp){(qx.lang.Type.isNumber(dn)&&isFinite(dn)&&dn%1===0)||this.__bN(dp||p,D,dn,o);
},assertPositiveInteger:function(dq,dr){var ds=(qx.lang.Type.isNumber(dq)&&isFinite(dq)&&dq%1===0&&dq>=0);
ds||this.__bN(dr||p,bs,dq,o);
},assertInRange:function(dt,du,dv,dw){(dt>=du&&dt<=dv)||this.__bN(dw||p,qx.lang.String.format(Y,[dt,du,dv]));
},assertObject:function(dx,dy){var dz=dx!==null&&(qx.lang.Type.isObject(dx)||typeof dx===J);
dz||this.__bN(dy||p,X,(dx),o);
},assertArray:function(dA,dB){qx.lang.Type.isArray(dA)||this.__bN(dB||p,bu,dA,o);
},assertMap:function(dC,dD){qx.lang.Type.isObject(dC)||this.__bN(dD||p,v,dC,o);
},assertRegExp:function(dE,dF){qx.lang.Type.isRegExp(dE)||this.__bN(dF||p,r,dE,o);
},assertType:function(dG,dH,dI){this.assertString(dH,T);
typeof (dG)===dH||this.__bN(dI||p,H,dH,d,dG,o);
},assertInstance:function(dJ,dK,dL){var dM=dK.classname||dK+p;
dJ instanceof dK||this.__bN(dL||p,bk,dM,d,dJ,o);
},assertInterface:function(dN,dO,dP){qx.Class.implementsInterface(dN,dO)||this.__bN(dP||p,x,dN,E,dO,n);
},assertCssColor:function(dQ,dR,dS){var dT=qx.Class.getByName(I);

if(!dT){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dV=dT.stringToRgb(dQ);

try{var dU=dT.stringToRgb(dR);
}catch(dX){this.__bN(dS||p,f,dQ,j,dV.join(h),bx,dR,bi);
}var dW=dV[0]==dU[0]&&dV[1]==dU[1]&&dV[2]==dU[2];
dW||this.__bN(dS||p,f,dV,j,dV.join(h),bx,dR,j,dU.join(h),b);
},assertElement:function(dY,ea){!!(dY&&dY.nodeType===1)||this.__bN(ea||p,q,dY,n);
},assertQxObject:function(eb,ec){this.__bP(eb,bv)||this.__bN(ec||p,bb,eb,o);
},assertQxWidget:function(ed,ee){this.__bP(ed,L)||this.__bN(ee||p,c,ed,o);
},__bP:function(ef,eg){if(!ef){return false;
}var eh=ef.constructor;

while(eh){if(eh.classname===eg){return true;
}eh=eh.superclass;
}return false;
}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bQ=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bQ:null,message:null,getComment:function(){return this.__bQ;
},toString:function(){return this.__bQ+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bR=qx.dev.StackTrace.getStackTrace();
},members:{__bR:null,getStackTrace:function(){return this.__bR;
}}});
})();
(function(){var p=":",o="ecmascript.stacktrace",n="Error created at",m="function",l="engine.name",k="...",j="qx.dev.StackTrace",h="",g="\n",f="?",c="/source/class/",e="anonymous",d="stack",b=".",a="stacktrace";
qx.Bootstrap.define(j,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(D){var x=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(x,0);
var v=this.getStackTraceFromCaller(arguments);
var t=v.length>x.length?v:x;

for(var i=0;i<Math.min(v.length,x.length);i++){var u=v[i];

if(u.indexOf(e)>=0){continue;
}var B=u.split(p);

if(B.length!=2){continue;
}var z=B[0];
var s=B[1];
var r=x[i];
var C=r.split(p);
var y=C[0];
var q=C[1];

if(qx.Class.getByName(y)){var w=y;
}else{w=z;
}var A=w+p;

if(s){A+=s+p;
}A+=q;
t[i]=A;
}return t;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var E;

try{E.bar();
}catch(G){var F=this.getStackTraceFromError(G);
qx.lang.Array.removeAt(F,0);
return F;
}return [];
}}),getStackTraceFromCaller:function(H){var M=[];
var L=qx.lang.Function.getCaller(H);
var I={};

while(L){var J=qx.lang.Function.getName(L);
M.push(J);

try{L=L.caller;
}catch(N){break;
}
if(!L){break;
}var K=qx.core.ObjectRegistry.toHashCode(L);

if(I[K]){M.push(k);
break;
}I[K]=L;
}return M;
},getStackTraceFromError:function(O){var S=[];

if(qx.core.Environment.get(o)===d){if(!O.stack){return S;
}var be=/@(.+):(\d+)$/gm;
var R;

while((R=be.exec(O.stack))!=null){var U=R[1];
var bc=R[2];
var ba=this.__bS(U);
S.push(ba+p+bc);
}
if(S.length>0){return this.__bU(S);
}var be=/at (.*)/gm;
var bd=/\((.*?)(:[^\/].*)\)/;
var Y=/(.*?)(:[^\/].*)/;
var R;

while((R=be.exec(O.stack))!=null){var X=bd.exec(R[1]);

if(!X){X=Y.exec(R[1]);
}
if(X){var ba=this.__bS(X[1]);
S.push(ba+X[2]);
}else{S.push(R[1]);
}}}else if(qx.core.Environment.get(o)===a){var Q=O.stacktrace;

if(!Q){return S;
}
if(Q.indexOf(n)>=0){Q=Q.split(n)[0];
}var be=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var R;

while((R=be.exec(Q))!=null){var bc=R[1];
var T=R[2];
var U=R[3];
var ba=this.__bS(U);
S.push(ba+p+bc+p+T);
}
if(S.length>0){return this.__bU(S);
}var be=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var R;

while((R=be.exec(Q))!=null){var bc=R[1];
var U=R[2];
var ba=this.__bS(U);
S.push(ba+p+bc);
}}else if(O.message&&O.message.indexOf("Backtrace:")>=0){var W=qx.lang.String.trim(O.message.split("Backtrace:")[1]);
var V=W.split(g);

for(var i=0;i<V.length;i++){var P=V[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(P&&P.length>=2){var bc=P[1];
var bb=this.__bS(P[2]);
S.push(bb+p+bc);
}}}else if(O.sourceURL&&O.line){S.push(this.__bS(O.sourceURL)+p+O.line);
}return this.__bU(S);
},__bS:function(bf){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==m){var bg=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bf);

if(false&&!qx.lang.Type.isString(bg)){throw new Error("FILENAME_TO_CLASSNAME must return a string!");
}return bg;
}return qx.dev.StackTrace.__bT(bf);
},__bT:function(bh){var bl=c;
var bi=bh.indexOf(bl);
var bk=bh.indexOf(f);

if(bk>=0){bh=bh.substring(0,bk);
}var bj=(bi==-1)?bh:bh.substring(bi+bl.length).replace(/\//g,b).replace(/\.js$/,h);
return bj;
},__bU:function(bm){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==m){bm=qx.dev.StackTrace.FORMAT_STACKTRACE(bm);
if(false&&!qx.lang.Type.isArray(bm)){throw new Error("FORMAT_STACKTRACE must return an array of strings!");
}}return bm;
}}});
})();
(function(){var g="$$hash",f="qx.core.ObjectRegistry",e="-",d="",c="-0";
qx.Class.define(f,{statics:{inShutDown:false,__bc:{},__bV:0,__bW:[],__bX:d,__bY:{},register:function(h){var m=this.__bc;

if(!m){return;
}var k=h.$$hash;

if(k==null){var j=this.__bW;

if(j.length>0&&true){k=j.pop();
}else{k=(this.__bV++)+this.__bX;
}h.$$hash=k;
}m[k]=h;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__bc;

if(p&&p[o]){delete p[o];
this.__bW.push(o);
}try{delete n.$$hash;
}catch(q){if(n.removeAttribute){n.removeAttribute(g);
}}},toHashCode:function(r){var t=r.$$hash;

if(t!=null){return t;
}var s=this.__bW;

if(s.length>0){t=s.pop();
}else{t=(this.__bV++)+this.__bX;
}return r.$$hash=t;
},clearHashCode:function(u){var v=u.$$hash;

if(v!=null){this.__bW.push(v);
try{delete u.$$hash;
}catch(w){if(u.removeAttribute){u.removeAttribute(g);
}}}},fromHashCode:function(x){return this.__bc[x]||null;
},shutdown:function(){this.inShutDown=true;
var z=this.__bc;
var B=[];

for(var A in z){B.push(A);
}B.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var y,i=0,l=B.length;

while(true){try{for(;i<l;i++){A=B[i];
y=z[A];

if(y&&y.dispose){y.dispose();
}}}catch(C){qx.Bootstrap.error(this,"Could not dispose object "+y.toString()+": "+C,C);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
},getNextHash:function(){return this.__bV;
},getPostId:function(){return this.__bX;
},getStackTraces:function(){return this.__bY;
}},defer:function(D){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){D.__bX=e+(i+1);
return;
}}}D.__bX=c;
}});
})();
(function(){var f="ecmascript.objectcount",d="stack",c="ecmascript.stacktrace",b="stacktrace",a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
},getStackTrace:function(){var e=new Error();
return e.stacktrace?b:e.stack?d:null;
}},defer:function(g){qx.core.Environment.add(f,g.getObjectCount);
qx.core.Environment.add(c,g.getStackTrace);
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__ca:null,__cb:null,__cc:null,__cd:null,stringify:function(bb,bc,bd){this.__ca=p;
this.__cb=p;
this.__cd=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__cb+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__cb=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__cc=bc;
}else{this.__cc=null;
}return this.__ce(p,{'':bb});
},__ce:function(be,bf){var bi=this.__ca,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__cc===e){bj=this.__cc.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__cf(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__ca+=this.__cb;
bg=[];

if(this.__cd.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cd.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__ce(i,bj)||h;
}this.__cd.pop();
if(bg.length===0){var bh=s;
}else if(this.__ca){bh=E+this.__ca+bg.join(Y+this.__ca)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__ca=bi;
return bh;
case z:this.__ca+=this.__cb;
bg=[];

if(this.__cd.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cd.push(bj);
if(this.__cc&&typeof this.__cc===f){var length=this.__cc.length;

for(var i=0;i<length;i+=1){var k=this.__cc[i];

if(typeof k===W){var v=this.__ce(k,bj);

if(v){bg.push(this.__cf(k)+(this.__ca?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__ce(k,bj);

if(v){bg.push(this.__cf(k)+(this.__ca?g:m)+v);
}}}}this.__cd.pop();
if(bg.length===0){var bh=A;
}else if(this.__ca){bh=w+this.__ca+bg.join(Y+this.__ca)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__ca=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__cf:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
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
return typeof bs===e?this.__cg({'':j},p,bs):j;
}throw new SyntaxError(P);
},__cg:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cg(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var g="repl",f="prop",e="qx.bom.client.Json",d="JSON",c='{"x":1}',b="json",a="val";
qx.Bootstrap.define(e,{statics:{getJson:function(){return (qx.Bootstrap.getClass(window.JSON)==d&&JSON.parse(c).x===1&&JSON.stringify({"prop":a},function(k,v){return k===f?g:v;
}).indexOf(g)>0);
}},defer:function(h){qx.core.Environment.add(b,h.getJson);
}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:qx.core.Environment.get("json")?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__ch:0,__ci:0,__cj:false,__ck:0,__cl:null,__cm:null,setMaxEntries:function(c){this.__cm=c;
this.clear();
},getMaxEntries:function(){return this.__cm;
},addEntry:function(d){this.__cl[this.__ch]=d;
this.__ch=this.__cn(this.__ch,1);
var e=this.getMaxEntries();

if(this.__ci<e){this.__ci++;
}if(this.__cj&&(this.__ck<e)){this.__ck++;
}},mark:function(){this.__cj=true;
this.__ck=0;
},clearMark:function(){this.__cj=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__ci){f=this.__ci;
}if(g&&this.__cj&&(f>this.__ck)){f=this.__ck;
}
if(f>0){var i=this.__cn(this.__ch,-1);
var h=this.__cn(i,-f+1);
var j;

if(h<=i){j=this.__cl.slice(h,i+1);
}else{j=this.__cl.slice(h,this.__ci).concat(this.__cl.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__cl=new Array(this.getMaxEntries());
this.__ci=0;
this.__ck=0;
this.__ch=0;
},__cn:function(k,l){var m=this.getMaxEntries();
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
qx.Class.define(s,{statics:{__co:A,setLevel:function(I){this.__co=I;
},getLevel:function(){return this.__co;
},setTreshold:function(J){this.__cr.setMaxMessages(J);
},getTreshold:function(){return this.__cr.getMaxMessages();
},__cp:{},__cq:0,register:function(K){if(K.$$id){return;
}var M=this.__cq++;
this.__cp[M]=K;
K.$$id=M;
var L=this.__cs;
var N=this.__cr.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__co]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__cp[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__ct(A,arguments);
},info:function(S,T){qx.log.Logger.__ct(e,arguments);
},warn:function(U,V){qx.log.Logger.__ct(r,arguments);
},error:function(W,X){qx.log.Logger.__ct(j,arguments);
},trace:function(Y){qx.log.Logger.__ct(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cr.clearHistory();
},__cr:new qx.log.appender.RingBuffer(50),__cs:{debug:0,info:1,warn:2,error:3},__ct:function(bv,bw){var bB=this.__cs;

if(bB[bv]<bB[this.__co]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__cv(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cr.process(bD);
var bE=this.__cp;

for(var bz in bE){bE[bz].process(bD);
}},__cu:function(bF){if(bF===undefined){return y;
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
},__cv:function(bH,bI){var bP=this.__cu(bH);
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
}bL.push(this.__cv(bH[i],false));
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
bJ=this.__cv(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__ct(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var d="set",c="reset",b="get",a="qx.core.MProperty";
qx.Mixin.define(a,{members:{set:function(e,f){var h=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(e)){if(!this[h[e]]){if(this[d+qx.Bootstrap.firstUp(e)]!=undefined){this[d+qx.Bootstrap.firstUp(e)](f);
return this;
}}return this[h[e]](f);
}else{for(var g in e){if(!this[h[g]]){if(this[d+qx.Bootstrap.firstUp(g)]!=undefined){this[d+qx.Bootstrap.firstUp(g)](e[g]);
continue;
}}this[h[g]](e[g]);
}return this;
}},get:function(i){var j=qx.core.Property.$$method.get;

if(!this[j[i]]){if(this[b+qx.Bootstrap.firstUp(i)]!=undefined){return this[b+qx.Bootstrap.firstUp(i)]();
}}return this[j[i]]();
},reset:function(k){var l=qx.core.Property.$$method.reset;

if(!this[l[k]]){if(this[c+qx.Bootstrap.firstUp(k)]!=undefined){this[c+qx.Bootstrap.firstUp(k)]();
return;
}}this[l[k]]();
}}});
})();
(function(){var e="info",d="debug",c="warn",b="qx.core.MLogging",a="error";
qx.Mixin.define(b,{members:{__cw:qx.log.Logger,debug:function(f){this.__cx(d,arguments);
},info:function(g){this.__cx(e,arguments);
},warn:function(h){this.__cx(c,arguments);
},error:function(i){this.__cx(a,arguments);
},trace:function(){this.__cw.trace(this);
},__cx:function(j,k){var l=qx.lang.Array.fromArguments(k);
l.unshift(this);
this.__cw[j].apply(this.__cw,l);
}}});
})();
(function(){var c="qx.dom.Node",b="";
qx.Class.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;
},getWindow:function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView||e.parentWindow;
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
(function(){var l="on",k="engine.name",j="gecko",i="engine.version",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Bootstrap.define(d,{statics:{addNativeListener:function(m,n,o,p){if(m.addEventListener){m.addEventListener(n,o,!!p);
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
}},supportsEvent:function(z,A){var B=l+A;
var C=(B in z);

if(!C){C=typeof z[B]==h;

if(!C&&z.setAttribute){z.setAttribute(B,c);
C=typeof z[B]==h;
z.removeAttribute(B);
}}return C;
}}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="__cD",j="UNKNOWN_",h="c",g="DOM_",c="WIN_",f="QX_",e="qx.event.Manager",b="capture",a="__cC",d="DOCUMENT_";
qx.Class.define(e,{extend:Object,construct:function(s,t){this.__cy=s;
this.__cz=qx.core.ObjectRegistry.toHashCode(s);
this.__cA=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__cB={};
this.__cC={};
this.__cD={};
this.__cE={};
},statics:{__cF:0,getNextUniqueId:function(){return (this.__cF++)+o;
}},members:{__cA:null,__cB:null,__cD:null,__cG:null,__cC:null,__cE:null,__cy:null,__cz:null,getWindow:function(){return this.__cy;
},getWindowId:function(){return this.__cz;
},getHandler:function(u){var v=this.__cC[u.classname];

if(v){return v;
}return this.__cC[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__cD[w.classname];

if(x){return x;
}return this.__cD[w.classname]=new w(this,this.__cA);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__cB[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},getAllListeners:function(){return this.__cB;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__cB[M];
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
var X=this.__cB[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__cH(P,W,R);
}else{this.__cI(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__cB[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__cB[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__cH(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__cF++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__cB[bx];

if(!bz){bz=this.__cB[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__cH(bp,bq,bs);
}var by=(qx.event.Manager.__cF++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__cy){bF=true;
bL=c+bB;
}else if(bA.classname){bO=true;
bL=f+bA.classname+n+bB;
}else{bL=j+bA+n+bB;
}var bH=this.__cE;

if(bH[bL]){return bH[bL];
}var bK=this.__cA.getHandlers();
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
},__cH:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__cB[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__cI(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__cB[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__cI(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__cB[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===b;
this.__cI(cq,cv,cr);
}}delete this.__cB[cu];
return true;
},deleteAllListeners:function(cx){delete this.__cB[cx];
},__cI:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__cA.getDispatchers();
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
},dispose:function(){this.__cA.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,a);
qx.util.DisposeUtil.disposeMap(this,k);
this.__cB=this.__cy=this.__cG=null;
this.__cA=this.__cE=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__cJ:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__cJ[f];

if(!e){e=new qx.event.Manager(d,this);
this.__cJ[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__cJ[h];
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
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cC:[],addHandler:function(Q){this.__cC.push(Q);
this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cC;
},__cD:[],addDispatcher:function(R,S){this.__cD.push(R);
this.__cD.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__cD;
}}});
})();
(function(){var a="qx.core.MEvents";
qx.Mixin.define(a,{members:{__cK:qx.event.Registration,addListener:function(b,c,self,d){if(!this.$$disposed){return this.__cK.addListener(this,b,c,self,d);
}return null;
},addListenerOnce:function(f,g,self,h){var i=function(e){this.removeListener(f,i,this,h);
g.call(self||this,e);
};
return this.addListener(f,i,this,h);
},removeListener:function(j,k,self,l){if(!this.$$disposed){return this.__cK.removeListener(this,j,k,self,l);
}return false;
},removeListenerById:function(m){if(!this.$$disposed){return this.__cK.removeListenerById(this,m);
}return false;
},hasListener:function(n,o){return this.__cK.hasListener(this,n,o);
},dispatchEvent:function(p){if(!this.$$disposed){return this.__cK.dispatchEvent(this,p);
}return true;
},fireEvent:function(q,r,s){if(!this.$$disposed){return this.__cK.fireEvent(this,q,r,s);
}return true;
},fireNonBubblingEvent:function(t,u,v){if(!this.$$disposed){return this.__cK.fireNonBubblingEvent(this,t,u,v);
}return true;
},fireDataEvent:function(w,x,y,z){if(!this.$$disposed){if(y===undefined){y=null;
}return this.__cK.fireNonBubblingEvent(this,w,qx.event.type.Data,[x,y,!!z]);
}return true;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var j="module.property",h="module.events",g="qx.core.Object",f="[",e="$$user_",d="]",c="rv:1.8.1",b="MSIE 6.0",a="Object";
qx.Class.define(g,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvents,"module.property":qx.core.MProperty}),construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+f+this.$$hash+d;
},base:function(k,m){if(arguments.length===1){return k.callee.base.call(this);
}else{return k.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(n){return n.callee.self;
},clone:function(){if(!qx.core.Environment.get(j)){throw new Error("Cloning only possible with properties.");
}var p=this.constructor;
var o=new p;
var r=qx.Class.getProperties(p);
var q=this.__L.$$store.user;
var s=this.__L.$$method.set;
var name;
for(var i=0,l=r.length;i<l;i++){name=r[i];

if(this.hasOwnProperty(q[name])){o[s[name]](this[q[name]]);
}}return o;
},__cL:null,setUserData:function(t,u){if(!this.__cL){this.__cL={};
}this.__cL[t]=u;
},getUserData:function(v){if(!this.__cL){return null;
}var w=this.__cL[v];
return w===undefined?null:w;
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var B,z,y,C;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var A=this.constructor;
var x;

while(A.superclass){if(A.$$destructor){A.$$destructor.call(this);
}if(A.$$includes){x=A.$$flatIncludes;

for(var i=0,l=x.length;i<l;i++){if(x[i].$$destructor){x[i].$$destructor.call(this);
}}}A=A.superclass;
}if(this.__cM){this.__cM();
}},__cM:null,__cN:function(){var D=qx.Class.getProperties(this.constructor);

for(var i=0,l=D.length;i<l;i++){delete this[e+D[i]];
}},_disposeObjects:function(E){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(F){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(G){qx.util.DisposeUtil.disposeArray(this,G);
},_disposeMap:function(H){qx.util.DisposeUtil.disposeMap(this,H);
}},environment:{"qx.disposerDebugLevel":0},defer:function(I,J){var L=navigator.userAgent.indexOf(b)!=-1;
var K=navigator.userAgent.indexOf(c)!=-1;
if(L||K){J.__cM=J.__cN;
}},destruct:function(){if(qx.core.Environment.get(h)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}}qx.core.ObjectRegistry.unregister(this);
this.__cL=null;
if(qx.core.Environment.get(j)){var O=this.constructor;
var S;
var T=this.__L.$$store;
var Q=T.user;
var R=T.theme;
var M=T.inherit;
var P=T.useinit;
var N=T.init;

while(O){S=O.$$properties;

if(S){for(var name in S){if(S[name].dereference){this[Q[name]]=this[R[name]]=this[M[name]]=this[P[name]]=this[N[name]]=undefined;
}}}O=O.superclass;
}}}});
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
this.__cO={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cO:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cO[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cO){return;
}var h=g.classname;
var j=this.__cO[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cO[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cO;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cO;
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
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cP:null,__cQ:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cP=b;
this.__cQ=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cP=this.__cP;
f.__cQ=this.__cQ;
return f;
},getData:function(){return this.__cP;
},getOldData:function(){return this.__cQ;
}},destruct:function(){this.__cP=this.__cQ=null;
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="os.name",b="engine.version",a="testrunner.Application";
qx.Class.define(f,{statics:{getApplication:function(){return this.__gM||null;
},ready:function(){if(this.__gM){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(c)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=a;
var j=qx.Class.getByName(i);

if(j){this.__gM=new j;
var h=new Date;
this.__gM.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__gM.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__gN:function(e){var k=this.__gM;

if(k){k.close();
}},__gO:function(){var l=this.__gM;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",bf="10.0",be="10.4",bd="rim_tabletos",bc="Darwin",bb="os.version",ba="2003",Y=")",X="iPhone",W="android",V="unix",q="ce",r="7",o="SymbianOS",p="os.name",m="|",n="MacPPC",k="iPod",l="\.",u="Win64",v="linux",D="me",B="Macintosh",L="Android",G="Windows",R="ios",P="vista",x="8",U="blackberry",T="(",S="win",w="Linux",z="BSD",A="Mac OS X",C="iPad",E="X11",H="xp",M="symbian",Q="qx.bom.client.OperatingSystem",s="g",t="Win32",y="osx",K="webOS",J="RIM Tablet OS",I="BlackBerry",O="nt4",N="MacIntel",F="webos";
qx.Bootstrap.define(Q,{statics:{getName:function(){if(!navigator){return j;
}var bg=navigator.platform||j;
var bh=navigator.userAgent||j;

if(bg.indexOf(G)!=-1||bg.indexOf(t)!=-1||bg.indexOf(u)!=-1){return S;
}else if(bg.indexOf(B)!=-1||bg.indexOf(n)!=-1||bg.indexOf(N)!=-1||bg.indexOf(A)!=-1){return y;
}else if(bh.indexOf(J)!=-1){return bd;
}else if(bh.indexOf(K)!=-1){return F;
}else if(bg.indexOf(k)!=-1||bg.indexOf(X)!=-1||bg.indexOf(C)!=-1){return R;
}else if(bh.indexOf(L)!=-1){return W;
}else if(bg.indexOf(w)!=-1){return v;
}else if(bg.indexOf(E)!=-1||bg.indexOf(z)!=-1||bg.indexOf(bc)!=-1){return V;
}else if(bg.indexOf(o)!=-1){return M;
}else if(bg.indexOf(I)!=-1){return U;
}return j;
},__dd:{"Windows NT 6.2":x,"Windows NT 6.1":r,"Windows NT 6.0":P,"Windows NT 5.2":ba,"Windows NT 5.1":H,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":O,"Win 9x 4.90":D,"Windows CE":q,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":be,"Mac OS X 10.4":be,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":bf,"Mac OS X 10.0":bf},getVersion:function(){var bk=[];

for(var bj in qx.bom.client.OperatingSystem.__dd){bk.push(bj);
}var bl=new RegExp(T+bk.join(m).replace(/\./g,l)+Y,s);
var bi=bl.exec(navigator.userAgent);

if(bi&&bi[1]){return qx.bom.client.OperatingSystem.__dd[bi[1]];
}return j;
}},defer:function(bm){qx.core.Environment.add(p,bm.getName);
qx.core.Environment.add(bb,bm.getVersion);
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
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__gP=false;
this.__gQ=false;
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gT();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__gR:null,__gP:null,__gQ:null,__gS:null,__gT:function(){if(!this.__gR&&this.__gP&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__gR=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gR=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gR;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__gP=true;
this.__gT();
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
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gP=true;
this.__gT();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gS){this.__gS=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__gN:function(e){var f=this.getApplication();

if(f){e.setReturnValue(f.close());
}},__gO:function(){var g=this.getApplication();

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__gO,h);
qx.event.Registration.addListener(window,b,h.__gN,h);
}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var b="testrunner.Application",a="runner";
qx.Class.define(b,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
this.runner=new testrunner.runner.TestRunner();
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var o="error",n="aborted",k="loading",h="ready",g="finished",f="stopTests",d="skip",c="testSuiteState",b="testCount",a="init",bb="external",ba="change",Y="failure",X="runTests",W="test",V="running",U="testModel",T="selectedTests",S='var argumentsArray = qx.lang.Array.fromArguments(arguments);',R="function",v='try {',w="_applySelectedTests",t="changeTestModel",u='this[arguments.callee.originalName].apply(this, argumentsArray);',r="currentTestData",s="view",p="Integer",q="testsInView",x="wait",y="loader",F="fail",D='this.fireDataEvent("assertionFailed", ex);',J="type",H="__",N="testrunner.runner.TestRunnerBasic",L="start",A="",Q="test.TestClass",P="testList",O="testrunner.view.Html",z="success",B="changeTestCount",C="qx.globalErrorHandling",E="assert",G="changeTestSuiteState",I="testPackageList",K='}',M='} catch(ex) {';
qx.Class.define(N,{extend:qx.core.Object,statics:{start:function(){qx.core.Init.getApplication().runner._loadExternalTests();
}},construct:function(){if(qx.core.Environment.get(C)){qx.event.GlobalError.setErrorHandler(this._handleGlobalError,this);
}this.__RU=[];
var be=O;
var bc=qx.Class.getByName(be);
this.view=new bc();
this.view.addListener(X,this._runTests,this);
this.view.addListener(f,this._stopTests,this);
this.bind(c,this.view,c);
this.bind(b,this.view,b);
this.bind(U,this.view,U);
qx.data.SingleValueBinding.bind(this.view,T,this,T);
this._testNameSpace=this._getTestNameSpace();
this._loadTests();
this._testParts=[];
var bd=null;

if(bd){this._testParts=this._testParts.concat(bd);
}},properties:{testSuiteState:{init:a,check:[a,k,h,V,g,n,o],event:G},testCount:{init:null,nullable:true,check:p,event:B},testModel:{init:null,nullable:true,event:t},selectedTests:{nullable:true,init:null,apply:w}},members:{loader:null,_testParts:null,__RU:null,_testNameSpace:null,_externalTestClasses:0,_getTestNameSpace:function(){return A;
},_loadTests:function(){var bf=bb;

switch(bf){case bb:break;
default:this._loadInlineTests(this._testNameSpace);
}},_loadInlineTests:function(bg){this.setTestSuiteState(k);
this.loader=new qx.dev.unit.TestLoaderBasic(bg);
this._wrapAssertions();
this._getTestModel();
},_addTestClass:function(bh){this.setTestSuiteState(k);
var bj=qx.Class;
var bi=bj.define(Q+(this._externalTestClasses+=1),{extend:qx.dev.unit.TestCase,members:bh});

if(this.loader){this.loader.getSuite().add(bi);
}else{this.loader=new qx.dev.unit.TestLoaderBasic(W);
}},define:function(bk){this._addTestClass(bk);
this._getTestModel();
},_loadExternalTests:function(){if(window.testrunner.testDefinitions instanceof Array){for(var i=0,l=testrunner.testDefinitions.length;i<l;i++){this._addTestClass(testrunner.testDefinitions[i]);
}
if(this.loader){this._getTestModel();
}}},__RV:function(){var bl=this.loader.getTestDescriptions();

if(!bl){this.error("Couldn't get test descriptions from loader!");
return null;
}return qx.lang.Json.parse(bl);
},_getTestModel:function(){if(this.currentTestData){this.currentTestData=null;
delete this.currentTestData;
}var bm=this.getTestModel();

if(bm){this.getTestModel().dispose();
this.__RU=[];
}this.setTestModel(null);
var bn=this.__RV();

if(!bn||bn.length===0||(bn.length===1&&bn[0].tests.length===0)){this.setTestSuiteState(o);
return;
}var bp=testrunner.runner.ModelUtil.createModelData(bn);
var bo={getModelSuperClass:function(bs){return testrunner.runner.TestItem;
}};
var br=new qx.data.marshal.Json(bo);
br.toClass(bp.children[0],true);
var bq=br.toModel(bp.children[0]);
testrunner.runner.ModelUtil.addDataFields(bq);
this.setTestModel(bq);
this.setTestSuiteState(h);
},_wrapAssertions:function(bt){var bv=bt||window;
var bx=bv.qx.dev.unit.TestCase.prototype;

for(var by in bx){if((by.indexOf(E)==0||by===F)&&typeof bx[by]==R){var bu=H+by;
bx[bu]=bx[by];
var bw=S+v+u+M+D+K;
bx[by]=new bv.Function(bw);
bx[by].originalName=bu;
}}},_runTests:function(){if(this.getTestSuiteState()===n){this.setTestSuiteState(h);
}this.runTests();
},_stopTests:function(){this.setTestSuiteState(n);
},runTests:function(){var bC=this.getTestSuiteState();

switch(bC){case k:this.__RU=[];
break;
case h:case g:if(this.testList.length>0){this.setTestSuiteState(V);
break;
}else{return;
}case n:case o:return;
}
if(this.testList.length==0){var self=this;
window.setTimeout(function(){self.setTestSuiteState(g);
},250);
return;
}var bA=this.currentTestData=this.testList.shift();
bA.resetState();
this.setTestCount(this.testList.length);
var bB=bA.parent.fullName;
var bz=bA.getName();
var bD=this.__RW(bA);
var self=this;
window.setTimeout(function(){self.loader.runTests(bD,bB,bz);
},0);
},_getTestResult:function(){return new qx.dev.unit.TestResult();
},__RW:function(){var bE=this._getTestResult();
bE.addListener("startTest",function(e){var bF=e.getData();

if(this.currentTestData&&this.currentTestData.fullName===bF.getFullName()&&this.currentTestData.getState()=="wait"){this.currentTestData.setState(this.currentTestData.getPreviousState()||"start");
return;
}
if(!qx.lang.Array.contains(this.__RU,this.currentTestData.fullName)){this.view.addTestResult(this.currentTestData);
this.__RU.push(this.currentTestData.fullName);
}},this);
bE.addListener("wait",this._onTestWait,this);
bE.addListener("failure",this._onTestFailure,this);
bE.addListener("error",this._onTestError,this);
bE.addListener("skip",this._onTestSkip,this);
bE.addListener("endTest",this._onTestEnd,this);
return bE;
},_onTestWait:function(bG){this.currentTestData.setState(x);
},_onTestFailure:function(bH){this.__RX(this.currentTestData,bH.getData());

if(this.currentTestData.getState()===Y){this.currentTestData.resetState();
}this.currentTestData.setState(Y);
},_onTestError:function(bI){this.__RX(this.currentTestData,bI.getData());

if(this.currentTestData.getState()===o){this.currentTestData.resetState();
}this.currentTestData.setState(o);
},_onTestSkip:function(bJ){this.__RX(this.currentTestData,bJ.getData());

if(this.currentTestData.getState()===d){this.currentTestData.resetState();
}this.currentTestData.setState(d);
},_onTestEnd:function(bK){var bL=this.currentTestData.getState();

if(bL==L){this.currentTestData.setState(z);
}qx.event.Timer.once(this.runTests,this,0);
},__RX:function(bM,bN){var bQ=bM.getExceptions();
var bS=bQ.concat();

for(var i=0,l=bN.length;i<l;i++){var bP=bN[i].exception.toString();
var bR=false;

for(var j=0,m=bQ.length;j<m;j++){var bO=bQ[j].exception.toString();

if(bP===bO){bR=true;
break;
}}
if(!bR){bS.push(bN[i]);
}}bM.setExceptions(bS);
},_applySelectedTests:function(bT,bU){if(!bT){return;
}
if(bU){bU.removeListener(ba,this._onChangeTestSelection,this);
}bT.addListener(ba,this._onChangeTestSelection,this);
this._onChangeTestSelection();
},_onChangeTestSelection:function(){this.testList=this._getFlatTestList();
if(this.testList.length==this.getTestCount()){this.resetTestCount();
}this.setTestCount(this.testList.length);
},_getFlatTestList:function(){var bV=this.getSelectedTests();

if(bV.length==0){return new qx.data.Array();
}var bW=[];

for(var i=0,l=bV.length;i<l;i++){var bY=bV.getItem(i);
var bX=testrunner.runner.ModelUtil.getItemsByProperty(bY,J,W);
bW=bW.concat(bX);
}return bW;
},_handleGlobalError:function(ca){this.error(ca);
}},destruct:function(){this.view.removeListener(X,this._runTests,this);
this.view.removeListener(f,this._stopTests,this);
this.removeAllBindings();

if(this.getTestModel()){this.getTestModel().dispose();
}this._disposeArray(q);
this._disposeArray(P);
this._disposeArray(I);
this._disposeObjects(s,r,y);
}});
})();
(function(){var f="qx.dev.unit.TestSuite",d="__unknown_class__",c="failure",b="error",a="qx.dev.unit.MTestLoader";
qx.Mixin.define(a,{properties:{suite:{check:f}},members:{_getClassNameFromUrl:function(){var h=window.location.search;
var g=h.match(/[\?&]testclass=([A-Za-z0-9_\.]+)/);

if(g){g=g[1];
}else{g=d;
}return g;
},setTestNamespace:function(k){var l=new qx.dev.unit.TestSuite();
l.add(k);
this.setSuite(l);
},runJsUnit:function(){var m=new qx.dev.unit.JsUnitTestResult();
this.getSuite().run(m);
m.exportToJsUnit();
},runStandAlone:function(){var n=new qx.dev.unit.TestResult();
n.addListener(c,function(e){var p=e.getData()[0].exception;
var o=e.getData()[0].test;
this.error("Test '"+o.getFullName()+"' failed: "+p.message+" - "+p.getComment());

if(p.getStackTrace){this.error("Stack trace: "+p.getStackTrace().join("\n"));
}},this);
n.addListener(b,function(e){var r=e.getData()[0].exception;
var q=e.getData()[0].test;
this.error("The test '"+q.getFullName()+"' had an error: "+r,r);
},this);
this.getSuite().run(n);
},getTestDescriptions:function(){var v=[];
var u=this.getSuite().getTestClasses();

for(var i=0;i<u.length;i++){var w=u[i];
var s={};
s.classname=w.getName();
s.tests=[];
var t=w.getTestMethods();

for(var j=0;j<t.length;j++){s.tests.push(t[j].getName());
}v.push(s);
}return qx.lang.Json.stringify(v);
},runTests:function(x,y,z){var A=this.getSuite().getTestClasses();

for(var i=0;i<A.length;i++){if(y==A[i].getName()){var B=A[i].getTestMethods();

for(var j=0;j<B.length;j++){if(z&&B[j].getName()!=z){continue;
}B[j].run(x);
}return;
}}},runTestsFromNamespace:function(C,D){var E=this.getSuite().getTestClasses();

for(var i=0;i<E.length;i++){if(E[i].getName().indexOf(D)==0){E[i].run(C);
}}}}});
})();
(function(){var c="qx.dev.unit.AbstractTestSuite",b="abstract",a="_tests";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
this._tests=[];
},members:{_tests:null,addTestFunction:function(name,d){this._tests.push(new qx.dev.unit.TestFunction(null,name,d));
},addTestMethod:function(e,f){this._tests.push(new qx.dev.unit.TestFunction(e,f));
},addFail:function(g,h){this.addTestFunction(g,function(){this.fail(h);
});
},run:function(j){for(var i=0;i<this._tests.length;i++){(this._tests[i]).run(j);
}},getTestMethods:function(){var l=[];

for(var i=0;i<this._tests.length;i++){var k=this._tests[i];

if(k instanceof qx.dev.unit.TestFunction){l.push(k);
}}return l;
}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var f="String",e="qx.dev.unit.TestFunction",d="Function",c="",b=":",a="qx.dev.unit.TestCase";
qx.Class.define(e,{extend:qx.core.Object,construct:function(g,h,i){if(i){this.setTestFunction(i);
}
if(g){this.setClassName(g.classname);
this.setTestClass(g);
}this.setName(h);
},properties:{testFunction:{check:d},name:{check:f},className:{check:f,init:c},testClass:{check:a,init:null}},members:{run:function(j){var k=this.getTestClass();
var l=this.getName();
var m=this;
j.run(this,function(){k.setTestFunc(m);
k.setTestResult(j);

try{k[l]();
}catch(n){throw n;
}});
},setUp:function(){var o=this.getTestClass();

if(qx.lang.Type.isFunction(o.setUp)){o.setUp();
}},tearDown:function(){var p=this.getTestClass();

if(qx.lang.Type.isFunction(p.tearDown)){p.tearDown();
}},getFullName:function(){return [this.getClassName(),this.getName()].join(b);
}}});
})();
(function(){var g="'!",f="qx.dev.unit.TestSuite",e="' is undefined!",d="abstract",c="existsCheck",b="Unknown test class '",a="The class/namespace '";
qx.Class.define(f,{extend:qx.dev.unit.AbstractTestSuite,construct:function(h){qx.dev.unit.AbstractTestSuite.call(this);
this._tests=[];

if(h){this.add(h);
}},members:{add:function(j){if(qx.lang.Type.isString(j)){var k=eval(j);

if(!k){this.addFail(j,a+j+e);
}j=k;
}
if(qx.lang.Type.isFunction(j)){this.addTestClass(j);
}else if(qx.lang.Type.isObject(j)){this.addTestNamespace(j);
}else{this.addFail(c,b+j+g);
return;
}},addTestNamespace:function(l){if(qx.lang.Type.isFunction(l)&&l.classname){if(qx.Class.isSubClassOf(l,qx.dev.unit.TestCase)){if(l.$$classtype!==d){this.addTestClass(l);
}return;
}}else if(qx.lang.Type.isObject(l)&&!(l instanceof Array)){for(var m in l){this.addTestNamespace(l[m]);
}}},addTestClass:function(n){this._tests.push(new qx.dev.unit.TestClass(n));
},getTestClasses:function(){var p=[];

for(var i=0;i<this._tests.length;i++){var o=this._tests[i];

if(o instanceof qx.dev.unit.TestClass){p.push(o);
}}return p;
}}});
})();
(function(){var a="qx.core.MAssert";
qx.Mixin.define(a,{members:{assert:function(b,c){qx.core.Assert.assert(b,c);
},fail:function(d,e){qx.core.Assert.fail(d,e);
},assertTrue:function(f,g){qx.core.Assert.assertTrue(f,g);
},assertFalse:function(h,i){qx.core.Assert.assertFalse(h,i);
},assertEquals:function(j,k,l){qx.core.Assert.assertEquals(j,k,l);
},assertNotEquals:function(m,n,o){qx.core.Assert.assertNotEquals(m,n,o);
},assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);
},assertNotIdentical:function(s,t,u){qx.core.Assert.assertNotIdentical(s,t,u);
},assertNotUndefined:function(v,w){qx.core.Assert.assertNotUndefined(v,w);
},assertUndefined:function(x,y){qx.core.Assert.assertUndefined(x,y);
},assertNotNull:function(z,A){qx.core.Assert.assertNotNull(z,A);
},assertNull:function(B,C){qx.core.Assert.assertNull(B,C);
},assertJsonEquals:function(D,E,F){qx.core.Assert.assertJsonEquals(D,E,F);
},assertMatch:function(G,H,I){qx.core.Assert.assertMatch(G,H,I);
},assertArgumentsCount:function(J,K,L,M){qx.core.Assert.assertArgumentsCount(J,K,L,M);
},assertEventFired:function(N,event,O,P,Q){qx.core.Assert.assertEventFired(N,event,O,P,Q);
},assertEventNotFired:function(R,event,S,T){qx.core.Assert.assertEventNotFired(R,event,S,T);
},assertException:function(U,V,W,X){qx.core.Assert.assertException(U,V,W,X);
},assertInArray:function(Y,ba,bb){qx.core.Assert.assertInArray(Y,ba,bb);
},assertArrayEquals:function(bc,bd,be){qx.core.Assert.assertArrayEquals(bc,bd,be);
},assertKeyInMap:function(bf,bg,bh){qx.core.Assert.assertKeyInMap(bf,bg,bh);
},assertFunction:function(bi,bj){qx.core.Assert.assertFunction(bi,bj);
},assertString:function(bk,bl){qx.core.Assert.assertString(bk,bl);
},assertBoolean:function(bm,bn){qx.core.Assert.assertBoolean(bm,bn);
},assertNumber:function(bo,bp){qx.core.Assert.assertNumber(bo,bp);
},assertPositiveNumber:function(bq,br){qx.core.Assert.assertPositiveNumber(bq,br);
},assertInteger:function(bs,bt){qx.core.Assert.assertInteger(bs,bt);
},assertPositiveInteger:function(bu,bv){qx.core.Assert.assertPositiveInteger(bu,bv);
},assertInRange:function(bw,bx,by,bz){qx.core.Assert.assertInRange(bw,bx,by,bz);
},assertObject:function(bA,bB){qx.core.Assert.assertObject(bA,bB);
},assertArray:function(bC,bD){qx.core.Assert.assertArray(bC,bD);
},assertMap:function(bE,bF){qx.core.Assert.assertMap(bE,bF);
},assertRegExp:function(bG,bH){qx.core.Assert.assertRegExp(bG,bH);
},assertType:function(bI,bJ,bK){qx.core.Assert.assertType(bI,bJ,bK);
},assertInstance:function(bL,bM,bN){qx.core.Assert.assertInstance(bL,bM,bN);
},assertInterface:function(bO,bP,bQ){qx.core.Assert.assertInterface(bO,bP,bQ);
},assertCssColor:function(bR,bS,bT){qx.core.Assert.assertCssColor(bR,bS,bT);
},assertElement:function(bU,bV){qx.core.Assert.assertElement(bU,bV);
},assertQxObject:function(bW,bX){qx.core.Assert.assertQxObject(bW,bX);
},assertQxWidget:function(bY,ca){qx.core.Assert.assertQxWidget(bY,ca);
}}});
})();
(function(){var b="qx.dev.unit.TestCase",a="qx.event.type.Data";
qx.Class.define(b,{extend:qx.core.Object,include:[qx.core.MAssert],events:{assertionFailed:a},properties:{testResult:{init:null},testFunc:{init:null}},members:{isDebugOn:function(){return false;
},wait:function(c,d,e){throw new qx.dev.unit.AsyncWrapper(c,d,e);
},resume:function(f,self){this.getTestResult().run(this.getTestFunc(),f||qx.lang.Function.empty,self||this,true);
}}});
})();
(function(){var d="Function",c="qx.dev.unit.AsyncWrapper",b="Integer",a="Object";
qx.Class.define(c,{extend:qx.core.Object,construct:function(e,f,g){for(var i=0;i<2;i++){if(qx.lang.Type.isFunction(arguments[i])){this.setDeferredFunction(arguments[i]);
}else if(qx.lang.Type.isNumber(arguments[i])){this.setDelay(arguments[i]);
}}
if(g){this.setContext(g);
}},properties:{deferredFunction:{check:d,init:false},context:{check:a,init:null},delay:{check:b,nullable:false,init:5000}}});
})();
(function(){var h="existsCheck",g="test",f="Unknown test class!",e="Sub class check.",d="String",c="'is not a sub class of 'qx.dev.unit.TestCase'",b="The test class '",a="qx.dev.unit.TestClass";
qx.Class.define(a,{extend:qx.dev.unit.AbstractTestSuite,construct:function(i){qx.dev.unit.AbstractTestSuite.call(this);

if(!i){this.addFail(h,f);
return;
}
if(!qx.Class.isSubClassOf(i,qx.dev.unit.TestCase)){this.addFail(e,b+i.classname+c);
return;
}var l=i.prototype;
var j=new i;

for(var k in l){if(qx.lang.Type.isFunction(l[k])&&k.indexOf(g)==0){this.addTestMethod(j,k);
}}this.setName(i.classname);
},properties:{name:{check:d}}});
})();
(function(){var v="qx.event.type.Data",u="error",t="failure",s="assertionFailed",r="skip",q="qx.dev.unit.RequirementError",p="endTest",o="failed",n="Error in asynchronous test",m="qx.dev.unit.TestResult",d="Asynchronous Test Error",k="Error setting up test: ",g="Error tearing down test: ",c="startTest",b="tearDown",f="qx.core.AssertionError",e="\n",h="resume() called before wait()",a="Timeout reached before resume() was called.",j="wait";
qx.Class.define(m,{extend:qx.core.Object,events:{startTest:v,endTest:v,error:v,failure:v,wait:v,skip:v},statics:{run:function(w,x,y){w.run(x,y);
}},members:{_timeout:null,run:function(z,A,self,B){if(!this._timeout){this._timeout={};
}var D=z.getTestClass();

if(!D.hasListener(s)){D.addListener(s,function(J){var K=[{exception:J.getData(),test:z}];
this.fireDataEvent(t,K);
},this);
}
if(B&&!this._timeout[z.getFullName()]){this._timeout[z.getFullName()]=o;
var E=new qx.type.BaseError(n,h);
this._createError(t,[E],z);
return ;
}this.fireDataEvent(c,z);

if(this._timeout[z.getFullName()]){if(this._timeout[z.getFullName()]!==o){this._timeout[z.getFullName()].stop();
this._timeout[z.getFullName()].dispose();
}delete this._timeout[z.getFullName()];
}else{try{z.setUp();
}catch(L){try{this.tearDown(z);
}catch(M){}if(L.classname==q){this._createError(r,[L],z);
}else{var E=new qx.type.BaseError(k+L.name,L.message);
this._createError(u,[E],z);
}return ;
}}
try{A.call(self||window);
}catch(N){var G=true;

if(N instanceof qx.dev.unit.AsyncWrapper){if(this._timeout[z.getFullName()]){return ;
}
if(N.getDelay()){var C=this;
var I=function(){throw new qx.core.AssertionError(d,a);
};
var H=(N.getDeferredFunction()?N.getDeferredFunction():I);
var F=(N.getContext()?N.getContext():window);
this._timeout[z.getFullName()]=qx.event.Timer.once(function(){this.run(z,H,F);
},C,N.getDelay());
this.fireDataEvent(j,z);
}}else{try{this.tearDown(z);
}catch(O){}
if(N.classname==f){this._createError(t,[N],z);
}else if(N.classname==q){this._createError(r,[N],z);
}else{this._createError(u,[N],z);
}}}
if(!G){try{this.tearDown(z);
this.fireDataEvent(p,z);
}catch(P){var E=new qx.type.BaseError(g+P.name,P.message);
this._createError(u,[E],z);
}}},_createError:function(Q,R,S){var T=[];

for(var i=0,l=R.length;i<l;i++){T.push({exception:R[i],test:S});
}this.fireDataEvent(Q,T);
this.fireDataEvent(p,S);
},__RY:function(U){U._addedListeners=[];

if(!qx.event.Registration.addListenerOriginal){qx.event.Registration.addListenerOriginal=qx.event.Registration.addListener;
qx.event.Registration.addListener=function(V,W,X,self,Y){var ba=qx.event.Registration.addListenerOriginal(V,W,X,self,Y);
var bb=true;

if((V.classname&&V.classname.indexOf("testrunner.unit")==0)||(self&&self.classname&&self.classname.indexOf("testrunner.unit")==0)){bb=false;
}
if(bb){U._addedListeners.push([V,ba]);
}return ba;
};
}},__Sa:function(bc){if(bc._addedListeners){var bd=bc._addedListeners;

for(var i=0,l=bd.length;i<l;i++){var bf=bd[i][0];
var be=bd[i][1];

try{qx.event.Registration.removeListenerById(bf,be);
}catch(bg){}}}},tearDown:function(bh){bh.tearDown();
var bl=bh.getTestClass();
var bj=b+qx.lang.String.firstUp(bh.getName());

if(bl[bj]){bl[bj]();
}
if(false&&qx.dev.Debug.disposeProfilingActive){var bm=bh.getFullName();
var bk=qx.dev.Debug.stopDisposeProfiling();

for(var i=0;i<bk.length;i++){var bi;

if(bk[i].stackTrace){bi=bk[i].stackTrace.join(e);
}window.top.qx.log.Logger.warn("Undisposed object in "+bm+": "+bk[i].object.classname+"["+bk[i].object.toHashCode()+"]"+"\n"+bi);
}}}},destruct:function(){this._timeout=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__fX=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__fY=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__ga:null,__fX:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__ga);
this.__ga=null;
}else if(p){this.__ga=window.setInterval(this.__fX,this.getInterval());
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
}})},destruct:function(){if(this.__ga){window.clearInterval(this.__ga);
}this.__ga=this.__fX=null;
}});
})();
(function(){var m=": ",l="",k="construct",h="object",g="-",f=":",d=") ***",c="\r\n",b="px;'>",a="): ",I="</span><br>",H="*** EXCEPTION (",G="============================================================",F="Object",E="<br>",D="null",C="Array",B="members",A="statics",z="get",t="qx.dev.Debug",u=": EXCEPTION expanding property",r="\n",s="*** TOO MUCH RECURSION: not displaying ***",p="Object, count=",q="  ",n="<span style='padding-left:",o=" ",v="------------------------------------------------------------",w="Array, length=",y="undefined",x="index(";
qx.Class.define(t,{statics:{disposeProfilingActive:false,debugObject:function(J,K,L){qx.log.Logger.debug(this,qx.dev.Debug.debugObjectToString(J,K,L,false));
},debugObjectToString:function(M,N,O,P){if(!O){O=10;
}var V=(P?I:r);
var S=function(W){var X;

if(!P){X=l;

for(var i=0;i<W;i++){X+=q;
}}else{X=n+(W*8)+b;
}return X;
};
var U=l;
var R=function(Y,ba,bb){if(ba>bb){U+=(S(ba)+s+V);
return;
}if(typeof (Y)!=h){U+=S(ba)+Y+V;
return;
}for(var bc in Y){if(typeof (Y[bc])==h){try{if(Y[bc] instanceof Array){U+=S(ba)+bc+m+C+V;
}else if(Y[bc]===null){U+=S(ba)+bc+m+D+V;
continue;
}else if(Y[bc]===undefined){U+=S(ba)+bc+m+y+V;
continue;
}else{U+=S(ba)+bc+m+F+V;
}R(Y[bc],ba+1,bb);
}catch(e){U+=S(ba)+bc+u+V;
}}else{U+=S(ba)+bc+m+Y[bc]+V;
}}};
if(N){U+=S(0)+N+V;
}
if(M instanceof Array){U+=S(0)+w+M.length+f+V;
}else if(typeof (M)==h){var Q=0;

for(var T in M){Q++;
}U+=S(0)+p+Q+f+V;
}U+=S(0)+v+V;

try{R(M,0,O);
}catch(bd){U+=S(0)+H+bd+d+V;
}U+=S(0)+G+V;
return U;
},getFunctionName:function(be,bf){var bg=be.self;

if(!bg){return null;
}while(be.wrapper){be=be.wrapper;
}
switch(bf){case k:return be==bg?k:null;
case B:return qx.lang.Object.getKeyFromValue(bg,be);
case A:return qx.lang.Object.getKeyFromValue(bg.prototype,be);
default:if(be==bg){return k;
}return (qx.lang.Object.getKeyFromValue(bg.prototype,be)||qx.lang.Object.getKeyFromValue(bg,be)||null);
}},debugProperties:function(bh,bi,bj,bk){if(bi==null){bi=10;
}if(bk==null){bk=1;
}var bl=l;
bj?bl=E:bl=c;
var bn=l;

if(qx.lang.Type.isNumber(bh)||qx.lang.Type.isString(bh)||qx.lang.Type.isBoolean(bh)||bh==null||bi<=0){return bh;
}else if(qx.Class.hasInterface(bh.constructor,qx.data.IListData)){for(var i=0;i<bh.length;i++){for(var j=0;j<bk;j++){bn+=g;
}bn+=x+i+a+this.debugProperties(bh.getItem(i),bi-1,bj,bk+1)+bl;
}return bn+bl;
}else if(bh.constructor!=null){var bo=bh.constructor.$$properties;

for(var bm in bo){bn+=bl;
for(var j=0;j<bk;j++){bn+=g;
}bn+=o+bm+m+this.debugProperties(bh[z+qx.lang.String.firstUp(bm)](),bi-1,bj,bk+1);
}return bn;
}return l;
},startDisposeProfiling:qx.lang.Function.empty,stopDisposeProfiling:qx.lang.Function.empty}});
})();
(function(){var d="=",c="+",b="&",a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(e){for(var f in e){if(e.hasOwnProperty(f)){delete e[f];
}}},isEmpty:function(g){for(var h in g){return false;
}return true;
},hasMinLength:function(j,k){if(k<=0){return true;
}var length=0;

for(var m in j){if((++length)>=k){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(n){var p=[];
var o=this.getKeys(n);

for(var i=0,l=o.length;i<l;i++){p.push(n[o[i]]);
}return p;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(q,r){return qx.lang.Object.mergeWith(q,r,false);
},merge:function(s,t){var u=arguments.length;

for(var i=1;i<u;i++){qx.lang.Object.mergeWith(s,arguments[i]);
}return s;
},clone:function(v){var w={};

for(var x in v){w[x]=v[x];
}return w;
},invert:function(y){var z={};

for(var A in y){z[y[A].toString()]=A;
}return z;
},getKeyFromValue:function(B,C){for(var D in B){if(B.hasOwnProperty(D)&&B[D]===C){return D;
}}return null;
},contains:function(E,F){return this.getKeyFromValue(E,F)!==null;
},select:function(G,H){return H[G];
},fromArray:function(I){var J={};

for(var i=0,l=I.length;i<l;i++){J[I[i].toString()]=true;
}return J;
},toUriParameter:function(K,L){var O,M=[];

for(O in K){if(K.hasOwnProperty(O)){var N=K[O];

if(N instanceof Array){for(var i=0;i<N.length;i++){this.__da(O,N[i],M,L);
}}else{this.__da(O,N,M,L);
}}}return M.join(b);
},__da:function(P,Q,R,S){var T=window.encodeURIComponent;

if(S){R.push(T(P).replace(/%20/g,c)+d+T(Q).replace(/%20/g,c));
}else{R.push(T(P)+d+T(Q));
}}}});
})();
(function(){var c="$test_",b="_",a="qx.dev.unit.JsUnitTestResult";
qx.Class.define(a,{extend:qx.dev.unit.TestResult,construct:function(){qx.dev.unit.TestResult.call(this);
this.__Sb=[];
},members:{__Sb:null,run:function(d,e){var f=c+d.getFullName().replace(/\W/g,b);
this.__Sb.push(f);
window[f]=e;
},exportToJsUnit:function(){var self=this;
window.exposeTestFunctionNames=function(){return self.__Sb;
};
window.isTestPageLoaded=true;
}}});
})();
(function(){var a="qx.dev.unit.TestLoaderBasic";
qx.Class.define(a,{extend:qx.core.Object,include:[qx.dev.unit.MTestLoader],construct:function(b){if(b){this.setTestNamespace(b);
}}});
})();
(function(){var r="state",q="get",p=".",o="start",n="error",m="wait",k="ie",j="class",h="browser.version",g="failure",c="testrunner.runner.ModelUtil",f="test",e="browser.name",b="package",a="static",d=":";
qx.Class.define(c,{type:a,statics:{createModelData:function(s){var v={};

for(var i=0,l=s.length;i<l;i++){var u=s[i].classname.split(p);
var t=s[i].tests;
t.sort();

for(var x=0,y=t.length;x<y;x++){testrunner.runner.ModelUtil.addChainToMap(u.concat(t[x]),v);
}}return v;
},getItemsByProperty:function(w,z,A){var C=qx.lang.String.firstUp(z);
var D=[];

if(w[q+C]&&w[q+C]()===A){D.push(w);
}
if(!w.getChildren){return D;
}var B=w.getChildren();

for(var i=0,l=B.length;i<l;i++){var E=B.getItem(i);
D=D.concat(arguments.callee(E,z,A));
}return D;
},getItemByFullName:function(F,G){if(F.fullName==G){return F;
}
if(F.getChildren){var I=F.getChildren();

for(var i=0,l=I.length;i<l;i++){var J=I.getItem(i);
var H=arguments.callee(J,G);

if(H){return H;
}}}return null;
},addDataFields:function(K){if(!K.parent){K.fullName=K.getName();
}
if(K.getChildren){var L=K.getType();

if(L==b||L==j){K.sortChildren();
}var M=K.getChildren();

for(var i=0,l=M.length;i<l;i++){var N=M.getItem(i);
N.parent=K;

if(N.getType()==f){N.fullName=K.fullName+d+N.getName();
}else{N.fullName=K.fullName+p+N.getName();
}arguments.callee(N);
if(!(qx.core.Environment.get(e)===k&&qx.core.Environment.get(h)<9)){N.bind(r,K,r,{converter:function(O,P){if(P.getState()==g||P.getState()==n||O==o||O==m){return P.getState();
}return O;
}});
}}}},addChainToMap:function(Q,R){if(Q.length==0){return;
}var T=Q.concat();
var U=T.shift();

if(!R.children){R.children=[];
}var S=false;

for(var i=0,l=R.children.length;i<l;i++){if(R.children[i].name===U){S=R.children[i];
break;
}}
if(!S){S={name:U};
R.children.push(S);
}arguments.callee(T,S);
},getNextSiblingOf:function(V){if(!V.parent){return null;
}var W=V.parent.getChildren();

if(!W){return null;
}var X=W.indexOf(V);

if(X<W.length-1){return W.getItem(X+1);
}return null;
}}});
})();
(function(){var j="",i="mshtml",h="msie",g="maple",f=")(/| )([0-9]+\.[0-9])",e="(",d="ce",c="CSS1Compat",b="android",a="operamini",H="gecko",G="browser.quirksmode",F="browser.name",E="mobile chrome",D="iemobile",C="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",B="opera mobi",A="Mobile Safari",z="Maple",y="operamobile",q="ie",r="mobile safari",o="IEMobile|Maxthon|MSIE",p="qx.bom.client.Browser",m="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",n="opera mini",k="browser.version",l="opera",s="Opera Mini|Opera Mobi|Opera",t="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",v="webkit",u="browser.documentmode",x="5.0",w="Mobile/";
qx.Bootstrap.define(p,{statics:{getName:function(){var L=navigator.userAgent;
var K=new RegExp(e+qx.bom.client.Browser.__dc+f);
var J=L.match(K);

if(!J){return j;
}var name=J[1].toLowerCase();
var I=qx.bom.client.Engine.getName();

if(I===v){if(name===b){name=E;
}else if(L.indexOf(A)!==-1||L.indexOf(w)!==-1){name=r;
}}else if(I===i){if(name===h){name=q;
if(qx.bom.client.OperatingSystem.getVersion()===d){name=D;
}}}else if(I===l){if(name===B){name=y;
}else if(name===n){name=a;
}}else if(I===H){if(L.indexOf(z)!==-1){name=g;
}}return name;
},getVersion:function(){var P=navigator.userAgent;
var O=new RegExp(e+qx.bom.client.Browser.__dc+f);
var N=P.match(O);

if(!N){return j;
}var name=N[1].toLowerCase();
var M=N[3];
if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){M=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==i){M=qx.bom.client.Engine.getVersion();

if(name===h&&qx.bom.client.OperatingSystem.getVersion()==d){M=x;
}}
if(qx.bom.client.Browser.getName()==g){O=new RegExp(m);
N=P.match(O);

if(!N){return j;
}M=N[2];
}return M;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==i&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==c;
}},__dc:{"webkit":t,"gecko":C,"mshtml":o,"opera":s}[qx.bom.client.Engine.getName()]},defer:function(Q){qx.core.Environment.add(F,Q.getName),qx.core.Environment.add(k,Q.getVersion),qx.core.Environment.add(u,Q.getDocumentMode),qx.core.Environment.add(G,Q.getQuirksMode);
}});
})();
(function(){var v="",u="package",t="class",s="Backtrace:",r="test",q="<br>",p="engine.name",o="start",n="changeExceptions",m="qx.dev.unit.MAssert",e="function",k="script",h="qx.dev.unit.AssertionError",d="_applyState",c="testrunner.runner.TestItem",g="qx.Class",f=" ",j="changeState";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.$$test=this;
},properties:{state:{init:o,event:j,apply:d},previousState:{nullable:true,init:null},exceptions:{init:[],nullable:true,event:n}},statics:{sortFunction:function(w,x){var y=w.getType();
var z=x.getType();
if(y==u&&z==t){return -1;
}
if(y==t&&z==u){return 1;
}var a=w.getName();
var b=x.getName();

if(a<b){return -1;
}
if(a>b){return 1;
}return 0;
}},members:{getModel:function(){return this.$$test;
},getFullName:function(){return this.fullName;
},getType:function(){var A=this.getName();

if(A.indexOf(r)===0&&A.length>4){if(this.getChildren){return u;
}return r;
}
if(A.substr(0,1)===A.substr(0,1).toUpperCase()){return t;
}return u;
},sortChildren:function(){this.getChildren().sort(testrunner.runner.TestItem.sortFunction);
},getMessage:qx.core.Environment.select(p,{"default":function(){if(this.getExceptions()&&this.getExceptions().length>0){var B=this.getExceptions();
var C=v;

for(var i=0,l=B.length;i<l;i++){C+=B[i].exception.toString()+f;
}return C;
}else{return v;
}},"opera":function(){if(this.getExceptions()&&this.getExceptions().length>0){var D=this.getExceptions();
var E=v;

for(var i=0,l=D.length;i<l;i++){var F=D[i].exception.message+v;

if(F.indexOf(s)<0){E+=D[i].exception.toString();
}else{E+=qx.lang.String.trim(F.split(s)[0]);
}}return E;
}else{return v;
}}}),getStackTrace:function(G){var H=[];

if(typeof (G.getStackTrace)==e){H=G.getStackTrace();
}else{H=qx.dev.StackTrace.getStackTraceFromError(G);
}while(H.length>0){var I=H[0];

if(I.indexOf(h)==0||I.indexOf(g)==0||I.indexOf(m)==0||I.indexOf(k)==0){H.shift();
}else{break;
}}return H.join(q);
},_applyState:function(J,K){if(K){this.setPreviousState(K);
}}}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var j="qx.data.model.",h="",g="Array",f="_validate",e='"',d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(k){qx.core.Object.call(this);
this.__zI=k;
},statics:{$$instance:null,createModel:function(l,m){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();
}this.$$instance.toClass(l,m);
return this.$$instance.toModel(l);
}},members:{__zI:null,__zJ:function(n){return qx.Bootstrap.getKeys(n).sort().join(e);
},toClass:function(o,p){if(!qx.lang.Type.isObject(o)||!!o.$$isString||o instanceof qx.core.Object){if(o instanceof Array||qx.Bootstrap.getClass(o)==g){for(var i=0;i<o.length;i++){this.toClass(o[i],p);
}}return ;
}var r=this.__zJ(o);
for(var s in o){this.toClass(o[s],p);
}if(qx.Class.isDefined(j+r)){return;
}if(this.__zI&&this.__zI.getModelClass&&this.__zI.getModelClass(r)!=null){return;
}var y={};
var x={__zK:this.__zK};

for(var s in o){s=s.replace(/-|\.|\s+/g,h);
y[s]={};
y[s].nullable=true;
y[s].event=d+qx.lang.String.firstUp(s);
if(p){y[s].apply=a;
}if(this.__zI&&this.__zI.getValidationRule){var u=this.__zI.getValidationRule(r,s);

if(u){y[s].validate=f+s;
x[f+s]=u;
}}}if(this.__zI&&this.__zI.getModelSuperClass){var w=this.__zI.getModelSuperClass(r)||qx.core.Object;
}else{var w=qx.core.Object;
}var t=[];

if(this.__zI&&this.__zI.getModelMixins){var v=this.__zI.getModelMixins(r);
if(!qx.lang.Type.isArray(v)){if(v!=null){t=[v];
}}else{t=v;
}}if(p){t.push(qx.data.marshal.MEventBubbling);
}var q={extend:w,include:t,properties:y,members:x,destruct:this.__zL};
qx.Class.define(j+r,q);
},__zL:function(){var z=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var A in z){this.__zK(this.get(z[A].name));
}},__zK:function(B){if(!(B instanceof qx.core.Object)){return ;
}if(B.isDisposed()){return;
}B.dispose();
},__zM:function(C){var D;
if(this.__zI&&this.__zI.getModelClass){D=this.__zI.getModelClass(C);
}
if(D!=null){return (new D());
}else{var E=qx.Class.getByName(j+C);
return (new E());
}},toModel:function(F){var J=qx.lang.Type.isObject(F);
var G=F instanceof Array||qx.Bootstrap.getClass(F)==g;

if((!J&&!G)||!!F.$$isString||F instanceof qx.core.Object){return F;
}else if(G){var L=new qx.data.Array();
L.setAutoDisposeItems(true);

for(var i=0;i<F.length;i++){L.push(this.toModel(F[i]));
}return L;
}else if(J){var H=this.__zJ(F);
var M=this.__zM(H);
for(var K in F){var I=K.replace(/-|\.|\s+/g,h);
if((false)&&false){if(K!=I){this.warn("The model contained an illegal name: '"+K+"'. Replaced it with '"+I+"'.");
}}M[b+qx.lang.String.firstUp(I)](this.toModel(F[K]));
}return M;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__zI=null;
}});
})();
(function(){var j="[",h="]",g="idBubble-",f=".",d="changeBubble",c="qx.data.marshal.MEventBubbling",b="",a="qx.event.type.Data";
qx.Mixin.define(c,{events:{"changeBubble":a},members:{_applyEventPropagation:function(k,l,name){this.fireDataEvent(d,{value:k,name:name,old:l});
this._registerEventChaining(k,l,name);
},_registerEventChaining:function(m,n,name){if((m instanceof qx.core.Object)&&qx.Class.hasMixin(m.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__lI,this,name);
var q=m.addListener(d,o,this);
var p=m.getUserData(g+this.$$hash);

if(p==null){p=[];
m.setUserData(g+this.$$hash,p);
}p.push(q);
}if(n!=null&&n.getUserData&&n.getUserData(g+this.$$hash)!=null){var p=n.getUserData(g+this.$$hash);

for(var i=0;i<p.length;i++){n.removeListenerById(p[i]);
}n.setUserData(g+this.$$hash,null);
}},__lI:function(name,e){var y=e.getData();
var u=y.value;
var s=y.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;
var v=y.name.indexOf(j)!=-1?y.name.indexOf(j):y.name.length;
if(v==0){var t=name+y.name;
}else if(x<v){var r=y.name.substring(0,x);
var w=y.name.substring(x+1,y.name.length);

if(w[0]!=j){w=f+w;
}var t=name+j+r+h+w;
}else if(v<x){var r=y.name.substring(0,v);
var w=y.name.substring(v,y.name.length);
var t=name+j+r+h+w;
}else{var t=name+j+y.name+h;
}}else{var t=name+j+y.name+h;
}}else{if(parseInt(name)==name&&name!==b){name=j+name+h;
}var t=name+f+y.name;
}this.fireDataEvent(d,{value:u,name:t,old:s});
}}});
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
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__lJ=[];
}else if(arguments.length>1){this.__lJ=[];

for(var i=0;i<arguments.length;i++){this.__lJ.push(arguments[i]);
}}else if(typeof p==c){this.__lJ=new Array(p);
}else if(p instanceof Array){this.__lJ=qx.lang.Array.clone(p);
}else{this.__lJ=[];
this.dispose();
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lJ.length;i++){this._applyEventPropagation(this.__lJ[i],null,i);
}this.__lK();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__lJ:null,concat:function(q){if(q){var r=this.__lJ.concat(q);
}else{var r=this.__lJ.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__lJ.join(s);
},pop:function(){var t=this.__lJ.pop();
this.__lK();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__lJ.push(arguments[i]);
this.__lK();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__lJ.concat();
this.__lJ.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lJ,name:k+(this.__lJ.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__lJ.shift();
this.__lK();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__lJ.slice(x,y));
},splice:function(z,A,B){var J=this.__lJ.length;
var F=this.__lJ.splice.apply(this.__lJ,arguments);
if(this.__lJ.length!=J){this.__lK();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__lJ.length>J){var I=m;
E=qx.lang.Array.fromArguments(arguments,2);
}else if(this.__lJ.length<J){var I=l;
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
}var L=this.__lJ.concat();
this.__lJ.sort.apply(this.__lJ,arguments);
if(qx.lang.Array.equals(this.__lJ,L)===true){return;
}this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__lJ,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__lJ.unshift(arguments[i]);
this.__lK();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__lJ[0]],name:g,old:[this.__lJ[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lJ;
},getItem:function(N){return this.__lJ[N];
},setItem:function(O,P){var Q=this.__lJ[O];
if(Q===P){return;
}this.__lJ[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__lJ.length){this.__lK();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__lJ.indexOf(R);
},toString:function(){if(this.__lJ!=null){return this.__lJ.toString();
}return b;
},contains:function(S){return this.__lJ.indexOf(S)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U).dispose();
},insertBefore:function(V,W){var X=this.indexOf(V);

if(X==-1){this.push(W);
}else{this.splice(X,0,W).dispose();
}},insertAfter:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1||bb==(this.length-1)){this.push(ba);
}else{this.splice(bb+1,0,ba).dispose();
}},removeAt:function(bc){var be=this.splice(bc,1);
var bd=be.getItem(0);
be.dispose();
return bd;
},removeAll:function(){for(var i=0;i<this.__lJ.length;i++){this._registerEventChaining(null,this.__lJ[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__lJ.concat();
this.__lJ.length=0;
this.__lK();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__lJ,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__lJ.length+i);
}var bi=this.length;
this.__lK();
this.fireDataEvent(n,{value:bh,name:bi==(this.length-1)?bi:bi+h+(this.length-1),old:[]});
this.fireDataEvent(o,{start:bi,end:this.length-1,type:m,items:bh},null);
},remove:function(bj){var bk=this.indexOf(bj);

if(bk!=-1){this.splice(bk,1).dispose();
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
},forEach:function(bp,bq){for(var i=0;i<this.__lJ.length;i++){bp.call(bq,this.__lJ[i],i,this);
}},__lK:function(){var br=this.length;
this.length=this.__lJ.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__lJ.length;i++){var bs=this.__lJ[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__lJ=null;
}});
})();
(function(){var s="loading",r="load",q="testclass=",p="external",o="file:",n="testrunner.testParts",m="error",l="",k="inline",j="?testclass=",c="__Hd",h="test.TestClass",f="iframe",b="testrunner.runner.TestRunner",a="test",e="qx.testPageUri",d="testrunner.performance",g="__Sd";
qx.Class.define(b,{extend:testrunner.runner.TestRunnerBasic,construct:function(){this.TEST_MIXINS=[qx.dev.unit.MMock,qx.dev.unit.MRequirements];

if(qx.core.Environment.get(d)){this.TEST_MIXINS.push(qx.dev.unit.MMeasure);
}testrunner.runner.TestRunnerBasic.call(this);
if(this.view.getLogAppenderElement){this.__Hd=new qx.log.appender.Element();
qx.log.Logger.unregister(this.__Hd);
this.__Hd.setElement(this.view.getLogAppenderElement());
{qx.log.Logger.register(this.__Hd);
};
}},members:{__rG:null,frameWindow:null,__Sc:null,__Sd:null,__Hd:null,_externalTestClasses:null,_getTestNameSpace:function(){var t=location.search;

if(t.indexOf(q)>0){return t.substr(t.indexOf(q)+10);
}return l;
},_loadTests:function(){var u=p;

switch(u){case f:this.__rG=this.view.getIframe();
qx.event.Registration.addListener(this.__rG,r,this._onLoadIframe,this);
var v=qx.core.Environment.get(e);
v+=j+this._testNameSpace;
this.setTestSuiteState(s);
this.view.setAutUri(v);
break;
case k:this._loadInlineTests();
break;
case p:this._loadExternalTests();
break;
}},_loadInlineTests:function(x){x=x||this._testNameSpace;
this.setTestSuiteState(s);
this.loader=new qx.dev.unit.TestLoaderInline();
this.loader.setTestNamespace(x);
this._wrapAssertions();
this._getTestModel();
},_addTestClass:function(y){this.setTestSuiteState(s);
var A=qx.Class;
var z=A.define(h+(this._externalTestClasses+=1),{extend:qx.dev.unit.TestCase,include:[qx.dev.unit.MMock,qx.dev.unit.MRequirements],members:y});

if(this.loader){this.loader.getSuite().add(z);
}else{this.loader=new qx.dev.unit.TestLoaderBasic(a);
}},_runTests:function(){if(this.__Hd){this.__Hd.clear();
}testrunner.runner.TestRunnerBasic.prototype._runTests.call(this);
},_getTestResult:function(){var B;
{var C=new qx.dev.unit.TestResult();
};
return C;
},_onTestEnd:function(D){testrunner.runner.TestRunnerBasic.prototype._onTestEnd.call(this);
},_onLoadIframe:function(E){if(E&&E.getType()==r){this.setTestSuiteState(s);
}
if(!this.__Sc){this.__Sc=0;
}this.__Sc++;
this.frameWindow=qx.bom.Iframe.getWindow(this.__rG);

if(this.__Sd){this.__Sd.stop();
this.__Sd=null;
}
if(this.__Sc<=300){if(!this.frameWindow.body){if(this.__Sc>=20&&window.location.protocol==o){alert("Failed to load application from the file system.\n\n"+"The security settings of your browser may prohibit to access "+"frames loaded using the file protocol. Please try the http "+"protocol instead.");
return ;
}}if(!this.frameWindow.testrunner){this.__Sd=qx.event.Timer.once(this._onLoadIframe,this,100);
return;
}this.loader=this.frameWindow.testrunner.TestLoader.getInstance();
if(!this.loader){this.__Sd=qx.event.Timer.once(this._onLoadIframe,this,100);
return;
}
if(!this.loader.getSuite()){this.__Sd=qx.event.Timer.once(this._onLoadIframe,this,100);
return;
}}else{this.setTestSuiteState(m);
this.__Sc=0;
return;
}this.__Sc=0;
var F=this.frameWindow.qx.core.Environment.get(n);

if(F instanceof this.frameWindow.Boolean){F=F.valueOf();
}
if(F){for(var i=0;i<F.length;i++){this._testParts.push(F[i]);
}}
if(this.__Hd){this.__Hd.clear();
}this._wrapAssertions(this.frameWindow);
this._getTestModel();
},__Se:function(){var w=qx.bom.Iframe.getWindow(this.__rG);
var G;

if(w.qx&&w.qx.log&&w.qx.log.Logger){G=w.qx.log.Logger;

if(this.view.getLogLevel){G.setLevel(this.view.getLogLevel());
}G.register(this.__Hd);
G.clear();
G.unregister(this.__Hd);
}}},destruct:function(){this._disposeObjects(c,g);
this.__rG=null;
delete this.__rG;
this.frameWindow=null;
delete this.frameWindow;
}});
})();
(function(){var c="constructor",b="function",a="qx.dev.unit.MMock";
qx.Mixin.define(a,{construct:function(){var d=this.__Sh();
d.assert.expose(this,{includeFail:false});
this.__Sf=d.sandbox;
},members:{__Sf:null,__Sg:null,__Sh:function(){return qx.dev.unit.Sinon.getSinon();
},spy:function(e,f){return this.__Sf.spy.apply(this.__Sf,arguments);
},stub:function(g,h){return this.__Sf.stub.apply(this.__Sf,arguments);
},mock:function(i){var j=this.__Sh();
return j.mock.apply(j,arguments);
},useFakeXMLHttpRequest:function(){return this.__Sg=this.__Sf.useFakeXMLHttpRequest();
},getRequests:function(){return this.__Sg.requests;
},useFakeServer:function(){return this.__Sg=this.__Sf.useFakeServer();
},getServer:function(){return this.__Sf.server;
},getSandbox:function(){return this.__Sf;
},deepStub:function(k){this.__Sj(k).forEach(function(l){this.__Sk(k,l);
},this);
return k;
},shallowStub:function(m,n){this.__Sj(m,n).forEach(function(o){this.__Sk(m,o);
},this);
return m;
},injectStub:function(p,q,r){var s=r||this.deepStub(new p[q]);
this.stub(p,q).returns(s);
return s;
},revealMock:function(t,u,v){var w=v||this.__Si(new t[u]);
this.stub(t,u).returns(w);
return this.mock(w);
},__Si:function(x){var y={};
for(var z in x){y[z]=x[z];
}return y;
},__Sj:function(A,B){var G=A.constructor,F=[],D=[];
if(B){while(G.superclass){F.push(G);
G=G.superclass;

if(G==B.superclass){break;
}}}for(var E in A){if(F.length){var C=F.some(function(H){return H.prototype.hasOwnProperty(E);
});

if(!C){continue;
}}D.push(E);
}return D;
},__Sk:function(I,J){if(J===c||typeof I[J]!==b){return;
}this.stub(I,J);
}}});
})();
(function(){var r="function",q="object",p="undefined",n="../sinon",m="",k="Attempted to wrap ",j="./sinon/assert",g="sandbox",f="spy",d="requests",bp="^",bo="stub",bn="_",bm="clock",bl="server",bk="[object Array]",bj="mock",bi="test",bh="Fake server response body should be string, but was ",bg="./sinon/mock",y="Cannot stub non-existent own property ",z="./sinon/collection",w="Method wrapper should be function",x="use strict",u="./util/fake_timers",v="div",s="once",t="string",C="static",D="toString",M="restore",K=" times",U="Should wrap property of object",P=" as function",bc="twice",ba="setInterval",G="qx.dev.unit.Sinon",bf="//",be="clearInterval",bd="sinon fake",E="number",I="sinon.test needs to wrap a test function, got ",J=" which is already ",L="Microsoft.XMLHTTP",N="thrice",Q="clearTimeout",W="./sinon/sandbox",bb="./sinon/stub",A="spied on",B="stubbed",H="./sinon/spy",T=" property ",S="verify",R=" which is already wrapped",Y="./sinon/test_case",X="Date",O="setTimeout",V="sinon.testCase needs an object with test functions",c="./sinon/test";
qx.Class.define(G,{type:C,statics:{getSinon:null}});
(function(){x;
var br=(function(){var bz=typeof document!=p&&document.createElement(v);
function bA(bC){var bD=false;

try{bC.appendChild(bz);
bD=bz.parentNode==bC;
}catch(e){return false;
}finally{try{bC.removeChild(bz);
}catch(e){}}return bD;
}function by(bE){return bz&&bE&&bE.nodeType===1&&bA(bE);
}return {wrapMethod:function bs(bF,bG,bH){if(!bF){throw new TypeError(U);
}
if(typeof bH!=r){throw new TypeError(w);
}var bK=bF[bG];
var bJ=typeof bK;

if(bJ!=r){throw new TypeError(k+bJ+T+bG+P);
}
if(bK.restore&&bK.restore.sinon){throw new TypeError(k+bG+R);
}
if(bK.calledBefore){var bI=!!bK.returns?B:A;
throw new TypeError(k+bG+J+bI);
}var bL=bF.hasOwnProperty(bG);
bF[bG]=bH;
bH.displayName=bG;
bH.restore=function(){if(bL){bF[bG]=bK;
}else{delete bF[bG];
}};
bH.restore.sinon=true;
return bH;
},extend:function bt(bM){for(var i=1,l=arguments.length;i<l;i+=1){for(var bN in arguments[i]){if(arguments[i].hasOwnProperty(bN)){bM[bN]=arguments[i][bN];
}if(arguments[i].hasOwnProperty(D)&&arguments[i].toString!=bM.toString){bM.toString=arguments[i].toString;
}}}return bM;
},create:function bu(bO){var F=function(){};
F.prototype=bO;
return new F();
},deepEqual:function bB(a,b){if(typeof a!=q||typeof b!=q){return a===b;
}
if(by(a)||by(b)){return a===b;
}
if(a===b){return true;
}
if(Object.prototype.toString.call(a)==bk){if(a.length!==b.length){return false;
}
for(var i=0,l=a.length;i<l;i+=1){if(!bB(a[i],b[i])){return false;
}}return true;
}var bR,bQ=0,bP=0;

for(bR in a){bQ+=1;

if(!bB(a[bR],b[bR])){return false;
}}
for(bR in b){bP+=1;
}
if(bQ!=bP){return false;
}return true;
},functionName:function bw(bS){var name=bS.displayName||bS.name;
if(!name){var bT=bS.toString().match(/function ([^\s\(]+)/);
name=bT&&bT[1];
}return name;
},functionToString:function bx(){if(this.getCall&&this.callCount){var bU,bV,i=this.callCount;

while(i--){bU=this.getCall(i).thisValue;

for(bV in bU){if(bU[bV]===this){return bV;
}}}}return this.displayName||bd;
},getConfig:function(bW){var bX={};
bW=bW||{};
var bY=br.defaultConfig;

for(var ca in bY){if(bY.hasOwnProperty(ca)){bX[ca]=bW.hasOwnProperty(ca)?bW[ca]:bY[ca];
}}return bX;
},format:function(cb){return m+cb;
},defaultConfig:{injectIntoThis:true,injectInto:null,properties:[f,bo,bj,bm,bl,d],useFakeTimers:true,useFakeServer:true},timesInWords:function bv(cc){return cc==1&&s||cc==2&&bc||cc==3&&N||(cc||0)+K;
},calledInOrder:function(cd){for(var i=1,l=cd.length;i<l;i++){if(!cd[i-1].calledBefore(cd[i])){return false;
}}return true;
},orderByFirstCall:function(ce){return ce.sort(function(a,b){return a.getCall(0).callId<b.getCall(0).callId?-1:1;
});
}};
}());

if(typeof module==q&&typeof require==r){module.exports=br;
module.exports.spy=require(H);
module.exports.stub=require(bb);
module.exports.mock=require(bg);
module.exports.collection=require(z);
module.exports.assert=require(j);
module.exports.sandbox=require(W);
module.exports.test=require(c);
module.exports.testCase=require(Y);
module.exports.assert=require(j);
}(function(cf){var cg=typeof module=="object"&&typeof require=="function";
var ch;
var ck=0;
var cj=[].push;

if(!cf&&cg){cf=require("../sinon");
}
if(!cf){return;
}function ci(cl,cm){if(!cm&&typeof cl=="function"){return ci.create(cl);
}
if(!cl||!cm){return ci.create(function(){});
}var cn=cl[cm];
return cf.wrapMethod(cl,cm,ci.create(cn));
}cf.extend(ci,(function(){var cq=Array.prototype.slice;
function cx(cy,cz,cA,cB,cC){cy[cz]=function(){if(!this.called){return !!cC;
}var cD;
var cE=0;

for(var i=0,l=this.callCount;i<l;i+=1){cD=this.getCall(i);

if(cD[cB||cz].apply(cD,arguments)){cE+=1;

if(cA){return true;
}}}return cE===this.callCount;
};
}function cw(cF,cG,cH){if(!cF){return;
}var cI=cG.length;

for(var i=0,l=cF.length;i<l;i++){if(cF[i].matches(cG,cH)){return cF[i];
}}}var cr=0;
var co={reset:function(){this.called=false;
this.calledOnce=false;
this.calledTwice=false;
this.calledThrice=false;
this.callCount=0;
this.args=[];
this.returnValues=[];
this.thisValues=[];
this.exceptions=[];
this.callIds=[];
},create:function ct(cJ){var name;

if(typeof cJ!="function"){cJ=function(){};
}else{name=cf.functionName(cJ);
}function cK(){return cK.invoke(cJ,this,cq.call(arguments));
}cf.extend(cK,ci);
delete cK.create;
cf.extend(cK,cJ);
cK.reset();
cK.prototype=cJ.prototype;
cK.displayName=name||"spy";
cK.toString=cf.functionToString;
cK._create=cf.spy.create;
cK.id="spy#"+cr++;
return cK;
},invoke:function cs(cL,cM,cN){var cP=cw(this.fakes,cN);
var cO,cQ;
this.called=true;
this.callCount+=1;
this.calledOnce=this.callCount==1;
this.calledTwice=this.callCount==2;
this.calledThrice=this.callCount==3;
cj.call(this.thisValues,cM);
cj.call(this.args,cN);
cj.call(this.callIds,ck++);

try{if(cP){cQ=cP.invoke(cL,cM,cN);
}else{cQ=(this.func||cL).apply(cM,cN);
}}catch(e){cj.call(this.returnValues,undefined);
cO=e;
throw e;
}finally{cj.call(this.exceptions,cO);
}cj.call(this.returnValues,cQ);
return cQ;
},getCall:function cv(i){if(i<0||i>=this.callCount){return null;
}return ch.create(this,this.thisValues[i],this.args[i],this.returnValues[i],this.exceptions[i],this.callIds[i]);
},calledBefore:function cp(cR){if(!this.called){return false;
}
if(!cR.called){return true;
}return this.callIds[0]<cR.callIds[0];
},calledAfter:function cu(cS){if(!this.called||!cS.called){return false;
}return this.callIds[this.callCount-1]>cS.callIds[cS.callCount-1];
},withArgs:function(){var cT=cq.call(arguments);

if(this.fakes){var cV=cw(this.fakes,cT,true);

if(cV){return cV;
}}else{this.fakes=[];
}var cU=this;
var cW=this._create();
cW.matchingAguments=cT;
cj.call(this.fakes,cW);
cW.withArgs=function(){return cU.withArgs.apply(cU,arguments);
};
return cW;
},matches:function(cX,cY){var da=this.matchingAguments;

if(da.length<=cX.length&&cf.deepEqual(da,cX.slice(0,da.length))){return !cY||da.length==cX.length;
}},printf:function(db){var dc=this;
var dd=[].slice.call(arguments,1);
var de;
return (db||"").replace(/%(.)/g,function(df,dg){de=co.formatters[dg];

if(typeof de=="function"){return de.call(null,dc,dd);
}else if(!isNaN(parseInt(dg),10)){return cf.format(dd[dg-1]);
}return "%"+dg;
});
}};
cx(co,"calledOn",true);
cx(co,"alwaysCalledOn",false,"calledOn");
cx(co,"calledWith",true);
cx(co,"alwaysCalledWith",false,"calledWith");
cx(co,"calledWithExactly",true);
cx(co,"alwaysCalledWithExactly",false,"calledWithExactly");
cx(co,"neverCalledWith",false,"notCalledWith",true);
cx(co,"threw",true);
cx(co,"alwaysThrew",false,"threw");
cx(co,"returned",true);
cx(co,"alwaysReturned",false,"returned");
cx(co,"calledWithNew",true);
cx(co,"alwaysCalledWithNew",false,"calledWithNew");
co.formatters={"c":function(dh){return cf.timesInWords(dh.callCount);
},"n":function(di){return di.toString();
},"C":function(dj){var dk=[];

for(var i=0,l=dj.callCount;i<l;++i){cj.call(dk,"    "+dj.getCall(i).toString());
}return dk.length>0?"\n"+dk.join("\n"):"";
},"t":function(dl){var dm=[];

for(var i=0,l=dl.callCount;i<l;++i){cj.call(dm,cf.format(dl.thisValues[i]));
}return dm.join(", ");
},"*":function(dn,dp){return dp.join(", ");
}};
return co;
}()));
ch=(function(){return {create:function ds(dy,dz,dA,dB,dC,dD){var dE=cf.create(ch);
delete dE.create;
dE.proxy=dy;
dE.thisValue=dz;
dE.args=dA;
dE.returnValue=dB;
dE.exception=dC;
dE.callId=typeof dD=="number"&&dD||ck++;
return dE;
},calledOn:function dw(dF){return this.thisValue===dF;
},calledWith:function dt(){for(var i=0,l=arguments.length;i<l;i+=1){if(!cf.deepEqual(arguments[i],this.args[i])){return false;
}}return true;
},calledWithExactly:function du(){return arguments.length==this.args.length&&this.calledWith.apply(this,arguments);
},notCalledWith:function dv(){for(var i=0,l=arguments.length;i<l;i+=1){if(!cf.deepEqual(arguments[i],this.args[i])){return true;
}}return false;
},returned:function dq(dG){return this.returnValue===dG;
},threw:function dx(dH){if(typeof dH=="undefined"||!this.exception){return !!this.exception;
}
if(typeof dH=="string"){return this.exception.name==dH;
}return this.exception===dH;
},calledWithNew:function dr(dI){return this.thisValue instanceof this.proxy;
},calledBefore:function(dJ){return this.callId<dJ.callId;
},calledAfter:function(dK){return this.callId>dK.callId;
},toString:function(){var dL=this.proxy.toString()+"(";
var dM=[];

for(var i=0,l=this.args.length;i<l;++i){cj.call(dM,cf.format(this.args[i]));
}dL=dL+dM.join(", ")+")";

if(typeof this.returnValue!="undefined"){dL+=" => "+cf.format(this.returnValue);
}
if(this.exception){dL+=" !"+this.exception.name;

if(this.exception.message){dL+="("+this.exception.message+")";
}}return dL;
}};
}());
ci.spyCall=ch;
cf.spyCall=ch;

if(cg){module.exports=ci;
}else{cf.spy=ci;
}}(typeof br=="object"&&br||null));
(function(dN){var dO=typeof module=="object"&&typeof require=="function";

if(!dN&&dO){dN=require("../sinon");
}
if(!dN){return;
}function dR(dV,dW,dX){if(!!dX&&typeof dX!="function"){throw new TypeError("Custom stub should be function");
}var dY;

if(dX){dY=dN.spy&&dN.spy.create?dN.spy.create(dX):dX;
}else{dY=dR.create();
}
if(!dV&&!dW){return dN.stub.create();
}
if(!dW&&!!dV&&typeof dV=="object"){for(var ea in dV){if(dV.hasOwnProperty(ea)&&typeof dV[ea]=="function"){dR(dV,ea);
}}return dV;
}return dN.wrapMethod(dV,dW,dY);
}function dS(eb,ec){if(eb.callArgAt<0){for(var i=0,l=ec.length;i<l;++i){if(!eb.callArgProp&&typeof ec[i]=="function"){return ec[i];
}
if(eb.callArgProp&&ec[i]&&typeof ec[i][eb.callArgProp]=="function"){return ec[i][eb.callArgProp];
}}return null;
}return ec[eb.callArgAt];
}var dP=Array.prototype.join;
function dT(ed,ee,ef){if(ed.callArgAt<0){var eg;

if(ed.callArgProp){eg=dN.functionName(ed)+" expected to yield to '"+ed.callArgProp+"', but no object with such a property was passed.";
}else{eg=dN.functionName(ed)+" expected to yield, but no callback was passed.";
}
if(ef.length>0){eg+=" Received ["+dP.call(ef,", ")+"]";
}return eg;
}return "argument at index "+ed.callArgAt+" is not a function: "+ee;
}function dQ(eh,ei){if(typeof eh.callArgAt=="number"){var ej=dS(eh,ei);

if(typeof ej!="function"){throw new TypeError(dT(eh,ej,ei));
}ej.apply(null,eh.callbackArguments);
}}var dU=0;
dN.extend(dR,(function(){var ek=Array.prototype.slice;
function ep(eq,er){if(typeof eq=="string"){this.exception=new Error(er||"");
this.exception.name=eq;
}else if(!eq){this.exception=new Error("Error");
}else{this.exception=eq;
}return this;
}return {create:function el(){var es=function(){if(es.exception){throw es.exception;
}dQ(es,arguments);
return es.returnValue;
};
es.id="stub#"+dU++;
var et=es;
es=dN.spy.create(es);
es.func=et;
dN.extend(es,dR);
es._create=dN.stub.create;
es.displayName="stub";
es.toString=dN.functionToString;
return es;
},returns:function eo(eu){this.returnValue=eu;
return this;
},"throws":ep,throwsException:ep,callsArg:function en(ev){if(typeof ev!="number"){throw new TypeError("argument index is not number");
}this.callArgAt=ev;
this.callbackArguments=[];
return this;
},callsArgWith:function em(ew){if(typeof ew!="number"){throw new TypeError("argument index is not number");
}this.callArgAt=ew;
this.callbackArguments=ek.call(arguments,1);
return this;
},yields:function(){this.callArgAt=-1;
this.callbackArguments=ek.call(arguments,0);
return this;
},yieldsTo:function(ex){this.callArgAt=-1;
this.callArgProp=ex;
this.callbackArguments=ek.call(arguments,1);
return this;
}};
}()));

if(dO){module.exports=dR;
}else{dN.stub=dR;
}}(typeof br=="object"&&br||null));
(function(ey){var ez=typeof module=="object"&&typeof require=="function";
var eA=[].push;

if(!ey&&ez){ey=require("../sinon");
}
if(!ey){return;
}function eB(eD){if(!eD){return ey.expectation.create("Anonymous mock");
}return eB.create(eD);
}ey.mock=eB;
ey.extend(eB,(function(){function eH(eK,eL){if(!eK){return;
}
for(var i=0,l=eK.length;i<l;i+=1){eL(eK[i]);
}}return {create:function eG(eM){if(!eM){throw new TypeError("object is null");
}var eN=ey.extend({},eB);
eN.object=eM;
delete eN.create;
return eN;
},expects:function eI(eO){if(!eO){throw new TypeError("method is falsy");
}
if(!this.expectations){this.expectations={};
this.proxies=[];
}
if(!this.expectations[eO]){this.expectations[eO]=[];
var eP=this;
ey.wrapMethod(this.object,eO,function(){return eP.invokeMethod(eO,this,arguments);
});
eA.call(this.proxies,eO);
}var eQ=ey.expectation.create(eO);
eA.call(this.expectations[eO],eQ);
return eQ;
},restore:function eE(){var eR=this.object;
eH(this.proxies,function(eS){if(typeof eR[eS].restore=="function"){eR[eS].restore();
}});
},verify:function eF(){var eV=this.expectations||{};
var eU=[],eT=[];
eH(this.proxies,function(eW){eH(eV[eW],function(eX){if(!eX.met()){eA.call(eU,eX.toString());
}else{eA.call(eT,eX.toString());
}});
});
this.restore();

if(eU.length>0){ey.expectation.fail(eU.concat(eT).join("\n"));
}return true;
},invokeMethod:function eJ(eY,fa,fb){var fd=this.expectations&&this.expectations[eY];
var length=fd&&fd.length||0;

for(var i=0;i<length;i+=1){if(!fd[i].met()&&fd[i].allowsCall(fa,fb)){return fd[i].apply(fa,fb);
}}var fc=[];

for(i=0;i<length;i+=1){eA.call(fc,"    "+fd[i].toString());
}fc.unshift("Unexpected call: "+ey.spyCall.toString.call({proxy:eY,args:fb}));
ey.expectation.fail(fc.join("\n"));
}};
}()));
var eC=ey.timesInWords;
ey.expectation=(function(){var fi=Array.prototype.slice;
var fg=ey.spy.invoke;
function ff(fB){if(fB==0){return "never called";
}else{return "called "+eC(fB);
}}function fx(fC){var fF=fC.minCalls;
var fD=fC.maxCalls;

if(typeof fF=="number"&&typeof fD=="number"){var fE=eC(fF);

if(fF!=fD){fE="at least "+fE+" and at most "+eC(fD);
}return fE;
}
if(typeof fF=="number"){return "at least "+eC(fF);
}return "at most "+eC(fD);
}function fh(fG){var fH=typeof fG.minCalls=="number";
return !fH||fG.callCount>=fG.minCalls;
}function fy(fI){if(typeof fI.maxCalls!="number"){return false;
}return fI.callCount==fI.maxCalls;
}return {minCalls:1,maxCalls:1,create:function fk(fJ){var fK=ey.extend(ey.stub.create(),ey.expectation);
delete fK.create;
fK.method=fJ;
return fK;
},invoke:function fs(fL,fM,fN){this.verifyCallAllowed(fM,fN);
return fg.apply(this,arguments);
},atLeast:function fv(fO){if(typeof fO!="number"){throw new TypeError("'"+fO+"' is not number");
}
if(!this.limitsSet){this.maxCalls=null;
this.limitsSet=true;
}this.minCalls=fO;
return this;
},atMost:function fo(fP){if(typeof fP!="number"){throw new TypeError("'"+fP+"' is not number");
}
if(!this.limitsSet){this.minCalls=null;
this.limitsSet=true;
}this.maxCalls=fP;
return this;
},never:function ft(){return this.exactly(0);
},once:function fA(){return this.exactly(1);
},twice:function fz(){return this.exactly(2);
},thrice:function fp(){return this.exactly(3);
},exactly:function fr(fQ){if(typeof fQ!="number"){throw new TypeError("'"+fQ+"' is not a number");
}this.atLeast(fQ);
return this.atMost(fQ);
},met:function fu(){return !this.failed&&fh(this);
},verifyCallAllowed:function fe(fR,fS){if(fy(this)){this.failed=true;
ey.expectation.fail(this.method+" already called "+eC(this.maxCalls));
}
if("expectedThis" in this&&this.expectedThis!==fR){ey.expectation.fail(this.method+" called with "+fR+" as thisValue, expected "+this.expectedThis);
}
if(!("expectedArguments" in this)){return;
}
if(!fS||fS.length===0){ey.expectation.fail(this.method+" received no arguments, expected "+this.expectedArguments.join());
}
if(fS.length<this.expectedArguments.length){ey.expectation.fail(this.method+" received too few arguments ("+fS.join()+"), expected "+this.expectedArguments.join());
}
if(this.expectsExactArgCount&&fS.length!=this.expectedArguments.length){ey.expectation.fail(this.method+" received too many arguments ("+fS.join()+"), expected "+this.expectedArguments.join());
}
for(var i=0,l=this.expectedArguments.length;i<l;i+=1){if(!ey.deepEqual(this.expectedArguments[i],fS[i])){ey.expectation.fail(this.method+" received wrong arguments ("+fS.join()+"), expected "+this.expectedArguments.join());
}}},allowsCall:function fl(fT,fU){if(this.met()){return false;
}
if("expectedThis" in this&&this.expectedThis!==fT){return false;
}
if(!("expectedArguments" in this)){return true;
}fU=fU||[];

if(fU.length<this.expectedArguments.length){return false;
}
if(this.expectsExactArgCount&&fU.length!=this.expectedArguments.length){return false;
}
for(var i=0,l=this.expectedArguments.length;i<l;i+=1){if(!ey.deepEqual(this.expectedArguments[i],fU[i])){return false;
}}return true;
},withArgs:function fm(){this.expectedArguments=fi.call(arguments);
return this;
},withExactArgs:function fq(){this.withArgs.apply(this,arguments);
this.expectsExactArgCount=true;
return this;
},on:function fw(fV){this.expectedThis=fV;
return this;
},toString:function(){var fX=(this.expectedArguments||[]).slice();

if(!this.expectsExactArgCount){eA.call(fX,"[...]");
}var fW=ey.spyCall.toString.call({proxy:this.method,args:fX});
var fY=fW.replace(", [...","[, ...")+" "+fx(this);

if(this.met()){return "Expectation met: "+fY;
}return "Expected "+fY+" ("+ff(this.callCount)+")";
},verify:function fj(){if(!this.met()){ey.expectation.fail(this.toString());
}return true;
},fail:function(ga){var gb=new Error(ga);
gb.name="ExpectationError";
throw gb;
}};
}());

if(ez){module.exports=eB;
}else{ey.mock=eB;
}}(typeof br=="object"&&br||null));
(function(gc){var gd=typeof module==q&&typeof require==r;
var gn=[].push;

if(!gc&&gd){gc=require(n);
}
if(!gc){return;
}function gl(gr){if(!gr.fakes){gr.fakes=[];
}return gr.fakes;
}function gm(gs,gt){var gu=gl(gs);

for(var i=0,l=gu.length;i<l;i+=1){if(typeof gu[i][gt]==r){gu[i][gt]();
}}}function ge(gv){var gw=gl(gv);
var i=0;

while(i<gw.length){gw.splice(i,1);
}}var gh={verify:function gf(){gm(this,S);
},restore:function gg(){gm(this,M);
ge(this);
},verifyAndRestore:function gk(){var gx;

try{this.verify();
}catch(e){gx=e;
}this.restore();

if(gx){throw gx;
}},add:function gj(gy){gn.call(gl(this),gy);
return gy;
},spy:function gi(){return this.add(gc.spy.apply(gc,arguments));
},stub:function go(gz,gA,gB){if(gA){var gC=gz[gA];

if(typeof gC!=r){if(!gz.hasOwnProperty(gA)){throw new TypeError(y+gA);
}gz[gA]=gB;
return this.add({restore:function(){gz[gA]=gC;
}});
}}return this.add(gc.stub.apply(gc,arguments));
},mock:function gp(){return this.add(gc.mock.apply(gc,arguments));
},inject:function gq(gD){var gE=this;
gD.spy=function(){return gE.spy.apply(gE,arguments);
};
gD.stub=function(){return gE.stub.apply(gE,arguments);
};
gD.mock=function(){return gE.mock.apply(gE,arguments);
};
return gD;
}};

if(gd){module.exports=gh;
}else{gc.collection=gh;
}}(typeof br==q&&br||null));
if(typeof br==p){var br={};
}br.clock=(function(){var gL=0;
function gJ(gM,gN){if(gM.length===0){throw new Error("Function requires at least 1 parameter");
}var gO=gL++;
var gP=gM[1]||0;

if(!this.timeouts){this.timeouts={};
}this.timeouts[gO]={id:gO,func:gM[0],callAt:this.now+gP};

if(gN===true){this.timeouts[gO].interval=gP;
}return gO;
}function gK(gQ){if(!gQ){return 0;
}var gS=gQ.split(":");
var l=gS.length,i=l;
var gT=0,gR;

if(l>3||!/^(\d\d:){0,2}\d\d?$/.test(gQ)){throw new Error("tick only understands numbers and 'h:m:s'");
}
while(i--){gR=parseInt(gS[i],10);

if(gR>=60){throw new Error("Invalid time "+gQ);
}gT+=gR*Math.pow(60,(l-i-1));
}return gT*1000;
}function gI(gU){var gV;

if(Object.create){gV=Object.create(gU);
}else{var F=function(){};
F.prototype=gU;
gV=new F();
}gV.Date.clock=gV;
return gV;
}return {now:0,create:function gH(gW){var gX=gI(this);

if(typeof gW=="number"){this.now=gW;
}return gX;
},setTimeout:function setTimeout(gY,ha){return gJ.call(this,arguments,false);
},clearTimeout:function clearTimeout(hb){if(!this.timeouts){this.timeouts=[];
}delete this.timeouts[hb];
},setInterval:function setInterval(hc,hd){return gJ.call(this,arguments,true);
},clearInterval:function clearInterval(he){this.clearTimeout(he);
},tick:function gG(hf){hf=typeof hf=="number"?hf:gK(hf);
var hj=this.now,hg=this.now+hf,hh=this.now;
var hi=this.firstTimerInRange(hj,hg);

while(hi&&hj<=hg){if(this.timeouts[hi.id]){hj=this.now=hi.callAt;
this.callTimer(hi);
}hi=this.firstTimerInRange(hh,hg);
hh=hj;
}this.now=hg;
},firstTimerInRange:function(hk,hl){var hp,hn,hm;

for(var ho in this.timeouts){if(this.timeouts.hasOwnProperty(ho)){if(this.timeouts[ho].callAt<hk||this.timeouts[ho].callAt>hl){continue;
}
if(!hn||this.timeouts[ho].callAt<hn){hm=this.timeouts[ho];
hn=this.timeouts[ho].callAt;
hp={func:this.timeouts[ho].func,callAt:this.timeouts[ho].callAt,interval:this.timeouts[ho].interval,id:this.timeouts[ho].id};
}}}return hp||null;
},callTimer:function(hq){try{if(typeof hq.func=="function"){hq.func.call(null);
}else{eval(hq.func);
}}catch(e){}
if(!this.timeouts[hq.id]){return;
}
if(typeof hq.interval=="number"){this.timeouts[hq.id].callAt+=hq.interval;
}else{delete this.timeouts[hq.id];
}},reset:function gF(){this.timeouts={};
},Date:(function(){var hv=Date;
function ht(hw,hx,hy,hz,hA,hB,hC){switch(arguments.length){case 0:return new hv(ht.clock.now);
case 1:return new hv(hw);
case 2:return new hv(hw,hx);
case 3:return new hv(hw,hx,hy);
case 4:return new hv(hw,hx,hy,hz);
case 5:return new hv(hw,hx,hy,hz,hA);
case 6:return new hv(hw,hx,hy,hz,hA,hB);
default:return new hv(hw,hx,hy,hz,hA,hB,hC);
}}
if(hv.now){ht.now=function hs(){return ht.clock.now;
};
}
if(hv.toSource){ht.toSource=function hu(){return hv.toSource();
};
}ht.toString=function hr(){return hv.toString();
};
ht.prototype=hv.prototype;
ht.parse=hv.parse;
ht.UTC=hv.UTC;
return ht;
}())};
}());
br.timers={setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval,Date:Date};
br.useFakeTimers=(function(hD){var hG=[X,O,ba,Q,be];
function hE(){var hI;

for(var i=0,l=this.methods.length;i<l;i++){hI=this.methods[i];
hD[hI]=this[bn+hI];
}}function hF(hJ,hK){hK[bn+hJ]=hD[hJ];
hD[hJ]=function(){return hK[hJ].apply(hK,arguments);
};

for(var hL in hK[hJ]){if(hK[hJ].hasOwnProperty(hL)){hD[hJ][hL]=hK[hJ][hL];
}}hD[hJ].clock=hK;
}return function hH(hM){var hN=br.clock.create(hM);
hN.restore=hE;
hN.methods=Array.prototype.slice.call(arguments,typeof hM==E?1:0);

if(hN.methods.length===0){hN.methods=hG;
}
for(var i=0,l=hN.methods.length;i<l;i++){hF(hN.methods[i],hN);
}return hN;
};
}(typeof global!=p?global:this));

if(typeof module==q&&typeof require==r){module.exports=br;
}if(typeof br==p){this.sinon={};
}(function(){var hO=[].push;
br.Event=function Event(hP,hQ,hR){this.initEvent(hP,hQ,hR);
};
br.Event.prototype={initEvent:function(hS,hT,hU){this.type=hS;
this.bubbles=hT;
this.cancelable=hU;
},stopPropagation:function(){},preventDefault:function(){this.defaultPrevented=true;
}};
br.EventTarget={addEventListener:function addEventListener(event,hV,hW){this.eventListeners=this.eventListeners||{};
this.eventListeners[event]=this.eventListeners[event]||[];
hO.call(this.eventListeners[event],hV);
},removeEventListener:function removeEventListener(event,hX,hY){var ia=this.eventListeners&&this.eventListeners[event]||[];

for(var i=0,l=ia.length;i<l;++i){if(ia[i]==hX){return ia.splice(i,1);
}}},dispatchEvent:function dispatchEvent(event){var ic=event.type;
var ib=this.eventListeners&&this.eventListeners[ic]||[];

for(var i=0;i<ib.length;i++){if(typeof ib[i]==r){ib[i].call(this,event);
}else{ib[i].handleEvent(event);
}}return !!event.defaultPrevented;
}};
}());
if(typeof br==p){this.sinon={};
}br.xhr={XMLHttpRequest:this.XMLHttpRequest};
br.FakeXMLHttpRequest=(function(){var ig={"Accept-Charset":true,"Accept-Encoding":true,"Connection":true,"Content-Length":true,"Cookie":true,"Cookie2":true,"Content-Transfer-Encoding":true,"Date":true,"Expect":true,"Host":true,"Keep-Alive":true,"Referer":true,"TE":true,"Trailer":true,"Transfer-Encoding":true,"Upgrade":true,"User-Agent":true,"Via":true};
function im(){this.readyState=im.UNSENT;
this.requestHeaders={};
this.requestBody=null;
this.status=0;
this.statusText="";

if(typeof im.onCreate=="function"){im.onCreate(this);
}}function ip(it){if(it.readyState!==im.OPENED){throw new Error("INVALID_STATE_ERR");
}
if(it.sendFlag){throw new Error("INVALID_STATE_ERR");
}}br.extend(im.prototype,br.EventTarget,{async:true,open:function open(iu,iv,iw,ix,iy){this.method=iu;
this.url=iv;
this.async=typeof iw=="boolean"?iw:true;
this.username=ix;
this.password=iy;
this.responseText=null;
this.responseXML=null;
this.requestHeaders={};
this.sendFlag=false;
this.readyStateChange(im.OPENED);
},readyStateChange:function io(iz){this.readyState=iz;

if(typeof this.onreadystatechange=="function"){this.onreadystatechange();
}this.dispatchEvent(new br.Event("readystatechange"));
},setRequestHeader:function ik(iA,iB){ip(this);

if(ig[iA]||/^(Sec-|Proxy-)/.test(iA)){throw new Error("Refused to set unsafe header \""+iA+"\"");
}
if(this.requestHeaders[iA]){this.requestHeaders[iA]+=","+iB;
}else{this.requestHeaders[iA]=iB;
}},setResponseHeaders:function ih(iC){this.responseHeaders={};

for(var iD in iC){if(iC.hasOwnProperty(iD)){this.responseHeaders[iD]=iC[iD];
}}
if(this.async){this.readyStateChange(im.HEADERS_RECEIVED);
}},send:function il(iE){ip(this);

if(!/^(get|head)$/i.test(this.method)){if(this.requestHeaders["Content-Type"]){var iF=this.requestHeaders["Content-Type"].split(";");
this.requestHeaders["Content-Type"]=iF[0]+";charset=utf-8";
}else{this.requestHeaders["Content-Type"]="text/plain;charset=utf-8";
}this.requestBody=iE;
}this.errorFlag=false;
this.sendFlag=this.async;
this.readyStateChange(im.OPENED);

if(typeof this.onSend=="function"){this.onSend(this);
}},abort:function ir(){this.aborted=true;
this.responseText=null;
this.errorFlag=true;
this.requestHeaders={};

if(this.readyState>br.FakeXMLHttpRequest.UNSENT&&this.sendFlag){this.readyStateChange(br.FakeXMLHttpRequest.DONE);
this.sendFlag=false;
}this.readyState=br.FakeXMLHttpRequest.UNSENT;
},getResponseHeader:function is(iG){if(this.readyState<im.HEADERS_RECEIVED){return null;
}
if(/^Set-Cookie2?$/i.test(iG)){return null;
}iG=iG.toLowerCase();

for(var h in this.responseHeaders){if(h.toLowerCase()==iG){return this.responseHeaders[h];
}}return null;
},getAllResponseHeaders:function ij(){if(this.readyState<im.HEADERS_RECEIVED){return "";
}var iH="";

for(var iI in this.responseHeaders){if(this.responseHeaders.hasOwnProperty(iI)&&!/^Set-Cookie2?$/i.test(iI)){iH+=iI+": "+this.responseHeaders[iI]+"\r\n";
}}return iH;
},setResponseBody:function iq(iJ){if(this.readyState==im.DONE){throw new Error("Request done");
}
if(this.async&&this.readyState!=im.HEADERS_RECEIVED){throw new Error("No headers received");
}var iM=this.chunkSize||10;
var iK=0;
this.responseText="";

do{if(this.async){this.readyStateChange(im.LOADING);
}this.responseText+=iJ.substring(iK,iK+iM);
iK+=iM;
}while(iK<iJ.length);
var iL=this.getResponseHeader("Content-Type");

if(this.responseText&&(!iL||/(text\/xml)|(application\/xml)|(\+xml)/.test(iL))){try{this.responseXML=im.parseXML(this.responseText);
}catch(e){}}
if(this.async){this.readyStateChange(im.DONE);
}else{this.readyState=im.DONE;
}},respond:function ie(status,iN,iO){this.setResponseHeaders(iN||{});
this.status=typeof status=="number"?status:200;
this.statusText=im.statusCodes[this.status];
this.setResponseBody(iO||"");
}});
br.extend(im,{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4});
im.parseXML=function ii(iP){var iR;

if(typeof DOMParser!="undefined"){var iQ=new DOMParser();
iR=iQ.parseFromString(iP,"text/xml");
}else{iR=new ActiveXObject("Microsoft.XMLDOM");
iR.async="false";
iR.loadXML(iP);
}return iR;
};
im.statusCodes={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"};
return im;
}());
(function(iS){var iU=iS.XMLHttpRequest;
var iT=iS.ActiveXObject;
var iW=typeof ActiveXObject!=p;
var iV=typeof XMLHttpRequest!=p;
br.useFakeXMLHttpRequest=function(){br.FakeXMLHttpRequest.restore=function iX(iY){if(iV){iS.XMLHttpRequest=iU;
}
if(iW){iS.ActiveXObject=iT;
}delete br.FakeXMLHttpRequest.restore;

if(iY!==true){delete br.FakeXMLHttpRequest.onCreate;
}};

if(iV){iS.XMLHttpRequest=br.FakeXMLHttpRequest;
}
if(iW){iS.ActiveXObject=function ActiveXObject(ja){if(ja==L||/^Msxml2\.XMLHTTP/i.test(ja)){return new br.FakeXMLHttpRequest();
}return new iT(ja);
};
}return br.FakeXMLHttpRequest;
};
}(this));

if(typeof module==q&&typeof require==r){module.exports=br;
}if(typeof br==p){var br={};
}br.fakeServer=(function(){var jl=[].push;
function F(){}function jg(jp){F.prototype=jp;
return new F();
}function jf(jq){var jr=jq;

if(Object.prototype.toString.call(jq)!=bk){jr=[200,{},jq];
}
if(typeof jr[2]!=t){throw new TypeError(bh+typeof jr[2]);
}return jr;
}var jm=window.location;
var jd=new RegExp(bp+jm.protocol+bf+jm.host);
function ji(js,jt,ju){var jw=js.method;
var jy=!jw||jw.toLowerCase()==jt.toLowerCase();
var jv=js.url;
var jx=!jv||jv==ju||(typeof jv.test==r&&jv.test(ju));
return jy&&jx;
}function jo(jz,jA){var jB=this.getHTTPMethod(jA);
var jD=jA.url;

if(!/^https?:\/\//.test(jD)||jd.test(jD)){jD=jD.replace(jd,m);
}
if(ji(jz,this.getHTTPMethod(jA),jD)){if(typeof jz.response==r){var jC=[jA].concat(jD.match(jz.url).slice(1));
return jz.response.apply(jz,jC);
}return true;
}return false;
}return {create:function(){var jE=jg(this);
this.xhr=br.useFakeXMLHttpRequest();
jE.requests=[];
this.xhr.onCreate=function(jF){jE.addRequest(jF);
};
return jE;
},addRequest:function jk(jG){var jH=this;
jl.call(this.requests,jG);
jG.onSend=function(){jH.handleRequest(this);
};

if(this.autoRespond&&!this.responding){setTimeout(function(){jH.responding=false;
jH.respond();
},this.autoRespondAfter||10);
this.responding=true;
}},getHTTPMethod:function jn(jI){if(this.fakeHTTPMethods&&/post/i.test(jI.method)){var jJ=(jI.requestBody||m).match(/_method=([^\b;]+)/);
return !!jJ?jJ[1]:jI.method;
}return jI.method;
},handleRequest:function jj(jK){if(jK.async){if(!this.queue){this.queue=[];
}jl.call(this.queue,jK);
}else{this.processRequest(jK);
}},respondWith:function je(jL,jM,jN){if(arguments.length==1){this.response=jf(jL);
}else{if(!this.responses){this.responses=[];
}
if(arguments.length==2){jN=jM;
jM=jL;
jL=null;
}jl.call(this.responses,{method:jL,url:jM,response:typeof jN==r?jN:jf(jN)});
}},respond:function jb(){var jO=this.queue||[];
var jP;

while(jP=jO.shift()){this.processRequest(jP);
}},processRequest:function jh(jQ){try{if(jQ.aborted){return;
}var jR=this.response||[404,{},m];

if(this.responses){for(var i=0,l=this.responses.length;i<l;i++){if(jo.call(this,this.responses[i],jQ)){jR=this.responses[i].response;
break;
}}}
if(jQ.readyState!=4){jQ.respond(jR[0],jR[1],jR[2]);
}}catch(e){}},restore:function jc(){return this.xhr.restore&&this.xhr.restore.apply(this.xhr,arguments);
}};
}());

if(typeof module==q&&typeof require==r){module.exports=br;
}(function(){function jV(){}jV.prototype=br.fakeServer;
br.fakeServerWithClock=new jV();
br.fakeServerWithClock.addRequest=function jU(jW){if(jW.async){if(typeof setTimeout.clock==q){this.clock=setTimeout.clock;
}else{this.clock=br.useFakeTimers();
this.resetClock=true;
}
if(!this.longestTimeout){var jY=this.clock.setTimeout;
var jX=this.clock.setInterval;
var ka=this;
this.clock.setTimeout=function(kb,kc){ka.longestTimeout=Math.max(kc,ka.longestTimeout||0);
return jY.apply(this,arguments);
};
this.clock.setInterval=function(kd,ke){ka.longestTimeout=Math.max(ke,ka.longestTimeout||0);
return jX.apply(this,arguments);
};
}}return br.fakeServer.addRequest.call(this,jW);
};
br.fakeServerWithClock.respond=function jS(){var kf=br.fakeServer.respond.apply(this,arguments);

if(this.clock){this.clock.tick(this.longestTimeout||0);
this.longestTimeout=0;

if(this.resetClock){this.clock.restore();
this.resetClock=false;
}}return kf;
};
br.fakeServerWithClock.restore=function jT(){if(this.clock){this.clock.restore();
}return br.fakeServer.restore.apply(this,arguments);
};
}());
if(typeof module==q&&typeof require==r){var br=require(n);
br.extend(br,require(u));
}(function(){var kg=[].push;
function kj(kl,km,kn,ko){if(!ko){return;
}
if(km.injectInto){km.injectInto[kn]=ko;
}else{kg.call(kl.args,ko);
}}function kh(kp){var kq=br.create(br.sandbox);

if(kp.useFakeServer){if(typeof kp.useFakeServer==q){kq.serverPrototype=kp.useFakeServer;
}kq.useFakeServer();
}
if(kp.useFakeTimers){if(typeof kp.useFakeTimers==q){kq.useFakeTimers.apply(kq,kp.useFakeTimers);
}else{kq.useFakeTimers();
}}return kq;
}br.sandbox=br.extend(br.create(br.collection),{useFakeTimers:function kk(){this.clock=br.useFakeTimers.apply(br,arguments);
return this.add(this.clock);
},serverPrototype:br.fakeServer,useFakeServer:function ki(){var kr=this.serverPrototype||br.fakeServer;

if(!kr||!kr.create){return null;
}this.server=kr.create();
return this.add(this.server);
},inject:function(ks){br.collection.inject.call(this,ks);

if(this.clock){ks.clock=this.clock;
}
if(this.server){ks.server=this.server;
ks.requests=this.server.requests;
}return ks;
},create:function(kt){if(!kt){return br.create(br.sandbox);
}var kx=kh(kt);
kx.args=kx.args||[];
var kw,kv,ku=kx.inject({});

if(kt.properties){for(var i=0,l=kt.properties.length;i<l;i++){kw=kt.properties[i];
kv=ku[kw]||kw==g&&kx;
kj(kx,kt,kw,kv);
}}else{kj(kx,kt,g,kv);
}return kx;
}});
br.sandbox.useFakeXMLHttpRequest=br.sandbox.useFakeServer;

if(typeof module!=p){module.exports=br.sandbox;
}}());
(function(ky){var kz=typeof module==q&&typeof require==r;

if(!ky&&kz){ky=require(n);
}
if(!ky){return;
}function kA(kB){var kC=typeof kB;

if(kC!=r){throw new TypeError(I+kC);
}return function(){var kF=ky.getConfig(ky.config);
kF.injectInto=kF.injectIntoThis&&this||kF.injectInto;
var kD=ky.sandbox.create(kF);
var kG,kH;
var kE=Array.prototype.slice.call(arguments).concat(kD.args);

try{kH=kB.apply(this,kE);
}catch(e){kG=e;
}kD.verifyAndRestore();

if(kG){throw kG;
}return kH;
};
}kA.config={injectIntoThis:true,injectInto:null,properties:[f,bo,bj,bm,bl,d],useFakeTimers:true,useFakeServer:true};

if(kz){module.exports=kA;
}else{ky.test=kA;
}}(typeof br==q&&br||null));
(function(kI){var kJ=typeof module==q&&typeof require==r;

if(!kI&&kJ){kI=require(n);
}
if(!kI||!Object.prototype.hasOwnProperty){return;
}function kL(kM,kN,kO){return function(){if(kN){kN.apply(this,arguments);
}var kP,kQ;

try{kQ=kM.apply(this,arguments);
}catch(e){kP=e;
}
if(kO){kO.apply(this,arguments);
}
if(kP){throw kP;
}return kQ;
};
}function kK(kR,kS){if(!kR||typeof kR!=q){throw new TypeError(V);
}kS=kS||bi;
var kV=new RegExp(bp+kS);
var kT={},kX,kY,la;
var kW=kR.setUp;
var kU=kR.tearDown;

for(kX in kR){if(kR.hasOwnProperty(kX)){kY=kR[kX];

if(/^(setUp|tearDown)$/.test(kX)){continue;
}
if(typeof kY==r&&kV.test(kX)){la=kY;

if(kW||kU){la=kL(kY,kW,kU);
}kT[kX]=kI.test(la);
}else{kT[kX]=kR[kX];
}}}return kT;
}
if(kJ){module.exports=kK;
}else{kI.testCase=kK;
}}(typeof br==q&&br||null));
(function(lb){var lc=typeof module=="object"&&typeof require=="function";
var ld=Array.prototype.slice;
var lh;

if(!lb&&lc){lb=require("../sinon");
}
if(!lb){return;
}function lj(){var lo;

for(var i=0,l=arguments.length;i<l;++i){lo=arguments[i];

if(!lo){lh.fail("fake is not a spy");
}
if(typeof lo!="function"){lh.fail(lo+" is not a function");
}
if(typeof lo.getCall!="function"){lh.fail(lo+" is not stubbed");
}}}function le(lp,lq){var lr=lp.fail||lh.fail;
lr.call(lp,lq);
}function lk(name,ls,lt){if(arguments.length==2){lt=ls;
ls=name;
}lh[name]=function(lu){lj(lu);
var lw=ld.call(arguments,1);
var lv=false;

if(typeof ls=="function"){lv=!ls(lu);
}else{lv=typeof lu[ls]=="function"?!lu[ls].apply(lu,lw):!lu[ls];
}
if(lv){le(this,lu.printf.apply(lu,[lt].concat(lw)));
}else{lh.pass(name);
}};
}function lf(lx,ly){return !lx||/^fail/.test(ly)?ly:lx+ly.slice(0,1).toUpperCase()+ly.slice(1);
}lh={failException:"AssertError",fail:function ll(lz){var lA=new Error(lz);
lA.name=this.failException||lh.failException;
throw lA;
},pass:function lg(lB){},callOrder:function ln(){lj.apply(null,arguments);
var lC="",lD="";

if(!lb.calledInOrder(arguments)){try{lC=[].join.call(arguments,", ");
lD=lb.orderByFirstCall(ld.call(arguments)).join(", ");
}catch(e){}le(this,"expected "+lC+" to be "+"called in order but were called as "+lD);
}else{lh.pass("callOrder");
}},callCount:function li(lE,lF){lj(lE);

if(lE.callCount!=lF){var lG="expected %n to be called "+lb.timesInWords(lF)+" but was called %c%C";
le(this,lE.printf(lG));
}else{lh.pass("callCount");
}},expose:function lm(lH,lI){if(!lH){throw new TypeError("target is null or undefined");
}var o=lI||{};
var lJ=typeof o.prefix=="undefined"&&"assert"||o.prefix;
var lK=typeof o.includeFail=="undefined"||!!o.includeFail;

for(var lL in this){if(lL!="export"&&(lK||!/^(fail)/.test(lL))){lH[lf(lJ,lL)]=this[lL];
}}return lH;
}};
lk("called","expected %n to have been called at least once but was never called");
lk("notCalled",function(lM){return !lM.called;
},"expected %n to not have been called but was called %c%C");
lk("calledOnce","expected %n to be called once but was called %c%C");
lk("calledTwice","expected %n to be called twice but was called %c%C");
lk("calledThrice","expected %n to be called thrice but was called %c%C");
lk("calledOn","expected %n to be called with %1 as this but was called with %t");
lk("alwaysCalledOn","expected %n to always be called with %1 as this but was called with %t");
lk("calledWith","expected %n to be called with arguments %*%C");
lk("alwaysCalledWith","expected %n to always be called with arguments %*%C");
lk("calledWithExactly","expected %n to be called with exact arguments %*%C");
lk("alwaysCalledWithExactly","expected %n to always be called with exact arguments %*%C");
lk("neverCalledWith","expected %n to never be called with arguments %*%C");
lk("threw","%n did not throw exception%C");
lk("alwaysThrew","%n did not always throw exception%C");

if(lc){module.exports=lh;
}else{lb.assert=lh;
}}(typeof br=="object"&&br||null));
var bq=qx.dev.unit.Sinon;
bq.getSinon=function(){return br;
};
br.assert.fail=function(lN){this.fail(lN,true);
};
}).call(this);
})();
(function(){var k="engine.name",j="browser.name",h="use require([\"io.ssl\"]) instead.",g="selenium",f="use require([\"event.touch\"]) instead.",e="qx.dev.unit.MRequirements",d="http",c="gecko",b="use require([\"plugin.flash\"]) instead.",a="plugin.flash",x="io.ssl",w="chrome",v="firefox",u="event.touch",t="ie",s="has",r="opera",q="POST",p="mshtml",o="webkit",m="undefined",n="qx/test/xmlhttp/php_version.php";
qx.Mixin.define(e,{statics:{__Sl:null},members:{require:function(y){for(var i=0,l=y.length;i<l;i++){var B=y[i];
var z=s+qx.lang.String.capitalize(B);

if(this[z]){if(this[z]()===true){continue;
}else{throw new qx.dev.unit.RequirementError(B);
}}
if(qx.core.Environment.getChecks()[B]){var A=qx.core.Environment.get(B);

if(A===true){continue;
}
if(A===false){throw new qx.dev.unit.RequirementError(B);
}else{throw new Error("The Environment key "+B+" cannot be used"+" as a Test Requirement since its value is not boolean!");
}}
if(qx.core.Environment.getAsyncChecks()[B]){throw new Error('Unable to verify requirement '+B+': '+'Asynchronous environment checks are not supported!');
}throw new Error('Unable to verify requirement: No method "'+z+'" or valid Environment key "'+B+'" found');
}},hasSsl:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.require([x]);
},hasHttp:function(){return document.location.protocol.indexOf(d)==0;
},hasPhp:function(){if(qx.dev.unit.MRequirements.__Sl!=null){return qx.dev.unit.MRequirements.__Sl;
}var C=qx.util.ResourceManager.getInstance().toUri(n);
var D=new qx.bom.request.Xhr();
D.onload=qx.lang.Function.bind(function(){try{qx.lang.Json.parse(D.responseText);
qx.dev.unit.MRequirements.__Sl=true;
}catch(E){qx.dev.unit.MRequirements.__Sl=false;
}},this);
D.onerror=D.abort=qx.lang.Function.bind(function(){qx.dev.unit.MRequirements.__Sl=false;
},this);
D.open(q,C,false);

try{D.send();
}catch(F){qx.dev.unit.MRequirements.__Sl=false;
}return qx.dev.unit.MRequirements.__Sl;
},hasGuiApp:function(){try{return qx.core.Init.getApplication() instanceof qx.application.Standalone;
}catch(G){return false;
}},hasInlineApp:function(){try{return qx.core.Init.getApplication() instanceof qx.application.Inline;
}catch(H){return false;
}},hasNativeApp:function(){try{return qx.core.Init.getApplication() instanceof qx.application.Native;
}catch(I){return false;
}},hasTouch:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.require([u]);
},hasFlash:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.require([a]);
},hasChrome:function(){return qx.core.Environment.get(j)===w;
},hasFirefox:function(){return qx.core.Environment.get(j)===v;
},hasGecko:function(){return qx.core.Environment.get(k)==c;
},hasIe:function(){return qx.core.Environment.get(j)===t;
},hasMshtml:function(){return qx.core.Environment.get(k)==p;
},hasOpera:function(){return qx.core.Environment.get(k)==r;
},hasWebkit:function(){return qx.core.Environment.get(k)==o;
},hasNoSelenium:function(){var J=window.top||window;
var opener=J.opener||J;

try{return typeof opener.selenium==m;
}catch(K){return J.name.indexOf(g)<0;
}}}});
})();
(function(){var h="object",g="function",f="qx.bom.client.Stylesheet",e="html.stylesheet.deleterule",d="html.stylesheet.insertrule",c="html.stylesheet.createstylesheet",b="html.stylesheet.addimport",a="html.stylesheet.removeimport";
qx.Bootstrap.define(f,{statics:{__jk:function(){if(!qx.bom.client.Stylesheet.__jl){qx.bom.client.Stylesheet.__jl=qx.bom.Stylesheet.createElement();
}return qx.bom.client.Stylesheet.__jl;
},getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;
},getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__jk().insertRule===g;
},getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__jk().deleteRule===g;
},getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__jk().addImport===h);
},getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__jk().removeImport===h);
}},defer:function(i){qx.core.Environment.add(c,i.getCreateStyleSheet);
qx.core.Environment.add(d,i.getInsertRule);
qx.core.Environment.add(e,i.getDeleteRule);
qx.core.Environment.add(b,i.getAddImport);
qx.core.Environment.add(a,i.getRemoveImport);
}});
})();
(function(){var p="head",o="text/css",n="html.stylesheet.removeimport",m="html.stylesheet.deleterule",l="stylesheet",k="html.stylesheet.addimport",j="html.stylesheet.insertrule",h="}",g="html.stylesheet.createstylesheet",f='@import "',c="{",e='";',d="qx.bom.Stylesheet",b="link",a="style";
qx.Bootstrap.define(d,{statics:{includeFile:function(q,r){if(!r){r=document;
}var s=r.createElement(b);
s.type=o;
s.rel=l;
var u=qx.util.ResourceManager.getInstance().toUri(q);

if(u!==q){qx.log.Logger.warn("qx.bom.Stylesheet.includeFile: Resource IDs will no "+"longer be resolved, please call this method "+"with a valid URI as the first argument!");
}s.href=u;
var t=r.getElementsByTagName(p)[0];
t.appendChild(s);
},createElement:function(v){if(qx.core.Environment.get(g)){var w=document.createStyleSheet();

if(v){w.cssText=v;
}return w;
}else{var x=document.createElement(a);
x.type=o;

if(v){x.appendChild(document.createTextNode(v));
}document.getElementsByTagName(p)[0].appendChild(x);
return x.sheet;
}},addRule:function(y,z,A){if(qx.core.Environment.get(j)){y.insertRule(z+c+A+h,y.cssRules.length);
}else{y.addRule(z,A);
}},removeRule:function(B,C){if(qx.core.Environment.get(m)){var D=B.cssRules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.deleteRule(i);
}}}else{var D=B.rules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.removeRule(i);
}}}},removeAllRules:function(F){if(qx.core.Environment.get(m)){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.deleteRule(i);
}}else{var G=F.rules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.removeRule(i);
}}},addImport:function(I,J){if(qx.core.Environment.get(k)){I.addImport(J);
}else{I.insertRule(f+J+e,I.cssRules.length);
}},removeImport:function(K,L){if(qx.core.Environment.get(n)){var M=K.imports;
var O=M.length;

for(var i=O-1;i>=0;i--){if(M[i].href==L||M[i].href==qx.util.Uri.getAbsolute(L)){K.removeImport(i);
}}}else{var N=K.cssRules;
var O=N.length;

for(var i=O-1;i>=0;i--){if(N[i].href==L){K.deleteRule(i);
}}}},removeAllImports:function(P){if(qx.core.Environment.get(n)){var Q=P.imports;
var S=Q.length;

for(var i=S-1;i>=0;i--){P.removeImport(i);
}}else{var R=P.cssRules;
var S=R.length;

for(var i=S-1;i>=0;i--){if(R[i].type==R[i].IMPORT_RULE){P.deleteRule(i);
}}}}}});
})();
(function(){var n="xhr",m="Microsoft.XMLHTTP",l="io.ssl",k="io.xhr",j="",i="file:",h="https:",g="webkit",f="gecko",e="activex",b="opera",d=".",c="io.maxrequests",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var o;
var r=qx.bom.client.Engine.getVersion().split(d);
var p=0;
var s=0;
var q=0;
if(r[0]){p=r[0];
}if(r[1]){s=r[1];
}if(r[2]){q=r[2];
}if(window.maxConnectionsPerServer){o=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==b){o=8;
}else if(qx.bom.client.Engine.getName()==g){o=4;
}else if(qx.bom.client.Engine.getName()==f&&((p>1)||((p==1)&&(s>9))||((p==1)&&(s==9)&&(q>=1)))){o=6;
}else{o=2;
}return o;
},getSsl:function(){return window.location.protocol===h;
},getXmlHttpRequest:function(){var t=window.ActiveXObject?(function(){if(window.location.protocol!==i){try{new window.XMLHttpRequest();
return n;
}catch(u){}}
try{new window.ActiveXObject(m);
return e;
}catch(v){}})():(function(){try{new window.XMLHttpRequest();
return n;
}catch(w){}})();
return t||j;
}},defer:function(x){qx.core.Environment.add(c,x.getMaxConcurrentRequestCount);
qx.core.Environment.add(l,x.getSsl);
qx.core.Environment.add(k,x.getXmlHttpRequest);
}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__bc:qx.$$resources||{},__hs:{}},members:{has:function(q){return !!this.self(arguments).__bc[q];
},getData:function(r){return this.self(arguments).__bc[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__bc[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__bc[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__bc[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__bc[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__bc[A[4]];

if(z){var D=A[4];
var C=this.constructor.__bc[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__bc[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__hs[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__bc[I];
var L=this.constructor.__bc[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__hs[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__hs[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__hs[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__hs[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__hs[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__hs[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="user",A="directory",z="loose",y="relative",x="queryKey",w="qx.util.Uri",v="",u="path",t="authority",s='">0</a>',r="&",p="port",q='<a href="',l="userInfo",n="?";
qx.Class.define(w,{statics:{parseUri:function(B,C){var D={key:[e,b,t,l,a,d,c,p,y,u,A,k,f,h],q:{name:x,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=D,m=D.parser[C?j:z].exec(B),E={},i=14;

while(i--){E[o.key[i]]=m[i]||v;
}E[o.q.name]={};
E[o.key[12]].replace(o.q.parser,function(F,G,H){if(G){E[o.q.name][G]=H;
}});
return E;
},appendParamsToUrl:function(I,J){if(J===undefined){return I;
}
if(qx.lang.Type.isObject(J)){J=qx.lang.Object.toUriParameter(J);
}
if(!J){return I;
}return I+=(/\?/).test(I)?r+J:n+J;
},getAbsolute:function(K){var L=document.createElement(g);
L.innerHTML=q+K+s;
return L.firstChild.href;
}}});
})();
(function(){var s="undefined",r="function",q="<a></a>",p="xml.implementation",o="xml.attributens",n="xml.selectnodes",m="xml.getqualifieditem",l="SelectionLanguage",k="xml.getelementsbytagnamens",j="qx.bom.client.Xml",d="xml.domproperties",i="xml.selectsinglenode",g="1.0",c="xml.createnode",b="xml.domparser",f="getProperty",e="XML",h="string",a="xml.createelementns";
qx.Bootstrap.define(j,{statics:{getImplementation:function(){return document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature(e,g);
},getDomParser:function(){return typeof window.DOMParser!==s;
},getSelectSingleNode:function(){return typeof qx.xml.Document.create().selectSingleNode!==s;
},getSelectNodes:function(){return typeof qx.xml.Document.create().selectNodes!==s;
},getElementsByTagNameNS:function(){return typeof qx.xml.Document.create().getElementsByTagNameNS!==s;
},getDomProperties:function(){var t=qx.xml.Document.create();
return (f in t&&typeof t.getProperty(l)===h);
},getAttributeNS:function(){var u=qx.xml.Document.fromString(q).documentElement;
return typeof u.getAttributeNS===r&&typeof u.setAttributeNS===r;
},getCreateElementNS:function(){return typeof qx.xml.Document.create().createElementNS===r;
},getCreateNode:function(){return typeof qx.xml.Document.create().createNode!==s;
},getQualifiedItem:function(){var v=qx.xml.Document.fromString(q).documentElement;
return typeof v.attributes.getQualifiedItem!==s;
}},defer:function(w){qx.core.Environment.add(p,w.getImplementation);
qx.core.Environment.add(b,w.getDomParser);
qx.core.Environment.add(i,w.getSelectSingleNode);
qx.core.Environment.add(n,w.getSelectNodes);
qx.core.Environment.add(k,w.getElementsByTagNameNS);
qx.core.Environment.add(d,w.getDomProperties);
qx.core.Environment.add(o,w.getAttributeNS);
qx.core.Environment.add(a,w.getCreateElementNS);
qx.core.Environment.add(c,w.getCreateNode);
qx.core.Environment.add(m,w.getQualifiedItem);
}});
})();
(function(){var l="",k="pdf",h="wmv",g="divx",f="quicktime",e="mshtml",d="silverlight",c="Silverlight",b="plugin.silverlight.version",a="function",H="QuickTimeCheckObject.QuickTimeCheck.1",G="Adobe Acrobat",F="plugin.windowsmedia",E="QuickTime",D="plugin.silverlight",C="qx.bom.client.Plugin",B="plugin.divx",A="Chrome PDF Viewer",z="Windows Media",y="plugin.gears",s="plugin.quicktime",t="plugin.windowsmedia.version",q="DivX Web Player",r="AgControl.AgControl",o="plugin.pdf",p="plugin.pdf.version",m="plugin.divx.version",n="WMPlayer.OCX.7",u="AcroPDF.PDF",v="plugin.activex",x="plugin.quicktime.version",w="npdivx.DivXBrowserPlugin.1";
qx.Bootstrap.define(C,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},getActiveX:function(){return (typeof window.ActiveXObject===a);
},__gi:{quicktime:{plugin:[E],control:H},wmv:{plugin:[z],control:n},divx:{plugin:[q],control:w},silverlight:{plugin:[c],control:r},pdf:{plugin:[A,G],control:u}},getQuicktimeVersion:function(){var I=qx.bom.client.Plugin.__gi[f];
return qx.bom.client.Plugin.__gj(I.control,I.plugin);
},getWindowsMediaVersion:function(){var J=qx.bom.client.Plugin.__gi[h];
return qx.bom.client.Plugin.__gj(J.control,J.plugin);
},getDivXVersion:function(){var K=qx.bom.client.Plugin.__gi[g];
return qx.bom.client.Plugin.__gj(K.control,K.plugin);
},getSilverlightVersion:function(){var L=qx.bom.client.Plugin.__gi[d];
return qx.bom.client.Plugin.__gj(L.control,L.plugin);
},getPdfVersion:function(){var M=qx.bom.client.Plugin.__gi[k];
return qx.bom.client.Plugin.__gj(M.control,M.plugin);
},getQuicktime:function(){var N=qx.bom.client.Plugin.__gi[f];
return qx.bom.client.Plugin.__gk(N.control,N.plugin);
},getWindowsMedia:function(){var O=qx.bom.client.Plugin.__gi[h];
return qx.bom.client.Plugin.__gk(O.control,O.plugin);
},getDivX:function(){var P=qx.bom.client.Plugin.__gi[g];
return qx.bom.client.Plugin.__gk(P.control,P.plugin);
},getSilverlight:function(){var Q=qx.bom.client.Plugin.__gi[d];
return qx.bom.client.Plugin.__gk(Q.control,Q.plugin);
},getPdf:function(){var R=qx.bom.client.Plugin.__gi[k];
return qx.bom.client.Plugin.__gk(R.control,R.plugin);
},__gj:function(S,T){var U=qx.bom.client.Plugin.__gk(S,T);
if(!U){return l;
}if(qx.bom.client.Engine.getName()==e){var V=new ActiveXObject(S);

try{var Y=V.versionInfo;

if(Y!=undefined){return Y;
}Y=V.version;

if(Y!=undefined){return Y;
}Y=V.settings.version;

if(Y!=undefined){return Y;
}}catch(bb){return l;
}return l;
}else{var ba=navigator.plugins;
var X=/([0-9]\.[0-9])/g;

for(var i=0;i<ba.length;i++){var W=ba[i];

for(var j=0;j<T.length;j++){if(W.name.indexOf(T[j])!==-1){if(X.test(W.name)||X.test(W.description)){return RegExp.$1;
}}}}return l;
}},__gk:function(bc,bd){if(qx.bom.client.Engine.getName()==e){var be=window.ActiveXObject;

if(!be){return false;
}
try{new ActiveXObject(bc);
}catch(bg){return false;
}return true;
}else{var bf=navigator.plugins;

if(!bf){return false;
}var name;

for(var i=0;i<bf.length;i++){name=bf[i].name;

for(var j=0;j<bd.length;j++){if(name.indexOf(bd[j])!==-1){return true;
}}}return false;
}}},defer:function(bh){qx.core.Environment.add(y,bh.getGears);
qx.core.Environment.add(s,bh.getQuicktime);
qx.core.Environment.add(x,bh.getQuicktimeVersion);
qx.core.Environment.add(F,bh.getWindowsMedia);
qx.core.Environment.add(t,bh.getWindowsMediaVersion);
qx.core.Environment.add(B,bh.getDivX);
qx.core.Environment.add(m,bh.getDivXVersion);
qx.core.Environment.add(D,bh.getSilverlight);
qx.core.Environment.add(b,bh.getSilverlightVersion);
qx.core.Environment.add(o,bh.getPdf);
qx.core.Environment.add(p,bh.getPdfVersion);
qx.core.Environment.add(v,bh.getActiveX);
}});
})();
(function(){var s="plugin.activex",r="MSXML2.DOMDocument.3.0",q="",p='<\?xml version="1.0" encoding="utf-8"?>\n<',o="qx.xml.Document",n=" />",m="xml.domparser",k="SelectionLanguage",j="'",h="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",g="xml.implementation",f=" xmlns='",b="text/xml",a="XPath",e="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(t){if(t.nodeType===9){return t.documentElement.nodeName!==d;
}else if(t.ownerDocument){return this.isXmlDocument(t.ownerDocument);
}else{return false;
}},create:function(u,v){if(qx.core.Environment.get(s)){var w=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==r){w.setProperty(k,a);
}
if(v){var x=p;
x+=v;

if(u){x+=f+u+j;
}x+=n;
w.loadXML(x);
}return w;
}
if(qx.core.Environment.get(g)){return document.implementation.createDocument(u||q,v||q,null);
}throw new Error("No XML implementation available!");
},fromString:function(y){if(qx.core.Environment.get(s)){var A=qx.xml.Document.create();
A.loadXML(y);
return A;
}
if(qx.core.Environment.get(m)){var z=new DOMParser();
return z.parseFromString(y,b);
}throw new Error("No XML implementation available!");
}},defer:function(B){if(qx.core.Environment.get(s)){var C=[e,r];
var D=[c,h];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(E){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var l="mshtml",k="event.pointer",j="onhashchange",i="event.help",h="event.touch",g="opera",f="event.hashchange",e="onhelp",d="pointerEvents",c="documentMode",a="qx.bom.client.Event",b="ontouchstart";
qx.Bootstrap.define(a,{statics:{getTouch:function(){return (b in window);
},getPointer:function(){if(d in document.documentElement.style){var m=qx.bom.client.Engine.getName();
return m!=g&&m!=l;
}return false;
},getHelp:function(){return (e in document);
},getHashChange:function(){var n=qx.bom.client.Engine.getName();
var o=j in window;
return (n!==l&&o)||(n===l&&c in document&&document.documentMode>=8&&o);
}},defer:function(p){qx.core.Environment.add(h,p.getTouch);
qx.core.Environment.add(k,p.getPointer);
qx.core.Environment.add(i,p.getHelp);
qx.core.Environment.add(f,p.getHashChange);
}});
})();
(function(){var k="div",j="string",h="-moz-none",g="backgroundImage",f="inline-block",e="-moz-inline-box",d="color",c="span",b="css.float",a="css.borderimage.standardsyntax",bg="borderRadius",bf="boxSizing",be='m11',bd="content",bc="css.inlineblock",bb="css.appearance",ba="css.gradient.radial",Y="input",X="borderImage",W="userSelect",s="css.overflowxy",t="styleFloat",q="css.usermodify",r="css.boxsizing",o='url("foo.png") 4 4 4 4 fill stretch',p="css.boxmodel",m="qx.bom.client.Css",n="appearance",w="placeholder",x="css.boxshadow",F="css.gradient.legacywebkit",D="css.borderradius",M="linear-gradient(0deg, #fff, #000)",H="css.opacity",S="css.borderimage",Q="rgba(1, 2, 3, 0.5)",z="radial-gradient(0px 0px, cover, red 50%, blue 100%)",V="rgba",U="css.gradients",T='url("foo.png") 4 4 4 4 stretch',y="css.gradient.linear",B="css.userselect",C="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",E="mshtml",G="css.rgba",I="4 fill",N='WebKitCSSMatrix',R="none",u="css.placeholder",v="css.userselect.none",A="css.textoverflow",L="textOverflow",K="userModify",J="boxShadow",P="cssFloat",O="border";
qx.Bootstrap.define(m,{statics:{__db:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==E||!qx.bom.client.Browser.getQuirksMode();
return content?bd:O;
},getTextOverflow:function(){return qx.bom.Style.getPropertyName(L);
},getPlaceholder:function(){var i=document.createElement(Y);
return w in i;
},getAppearance:function(){return qx.bom.Style.getPropertyName(n);
},getBorderRadius:function(){return qx.bom.Style.getPropertyName(bg);
},getBoxShadow:function(){return qx.bom.Style.getPropertyName(J);
},getBorderImage:function(){return qx.bom.Style.getPropertyName(X);
},getBorderImageSyntax:function(){var bj=qx.bom.client.Css.getBorderImage();

if(!bj){return null;
}var bi=[{standard:true,syntax:o,regEx:/foo\.png.*?4.*?fill.*?stretch/},{standard:false,syntax:T,regEx:/foo\.png.*?4 4 4 4 stretch/}];

for(var i=0,l=bi.length;i<l;i++){var bh=document.createElement(k);
bh.style[bj]=bi[i].syntax;

if(bi[i].regEx.exec(bh.style[bj])||bh.style.borderImageSlice&&bh.style.borderImageSlice==I){return bi[i].standard;
}}return null;
},getUserSelect:function(){return qx.bom.Style.getPropertyName(W);
},getUserSelectNone:function(){var bl=qx.bom.client.Css.getUserSelect();

if(bl){var bk=document.createElement(c);
bk.style[bl]=h;
return bk.style[bl]===h?h:R;
}return null;
},getUserModify:function(){return qx.bom.Style.getPropertyName(K);
},getFloat:function(){var bm=document.documentElement.style;
return bm.cssFloat!==undefined?P:bm.styleFloat!==undefined?t:null;
},getTranslate3d:function(){return N in window&&be in new WebKitCSSMatrix();
},getGradients:function(){return !!(qx.bom.client.Css.getLinearGradient());
},getLinearGradient:function(){qx.bom.client.Css.__db=false;
var bq=M;
var bn=document.createElement(k);
var bo=qx.bom.Style.getAppliedStyle(bn,g,bq);

if(!bo){bq=C;
var bo=qx.bom.Style.getAppliedStyle(bn,g,bq,false);

if(bo){qx.bom.client.Css.__db=true;
}}if(!bo){return null;
}var bp=/(.*?)\(/.exec(bo);
return bp?bp[1]:null;
},getRadialGradient:function(){var bu=z;
var br=document.createElement(k);
var bs=qx.bom.Style.getAppliedStyle(br,g,bu);

if(!bs){return null;
}var bt=/(.*?)\(/.exec(bs);
return bt?bt[1]:null;
},getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__db===null){qx.bom.client.Css.getLinearGradient();
}return qx.bom.client.Css.__db;
},getRgba:function(){var bv;

try{bv=document.createElement(k);
}catch(bw){bv=document.createElement();
}try{bv.style[d]=Q;

if(bv.style[d].indexOf(V)!=-1){return true;
}}catch(bx){}return false;
},getBoxSizing:function(){return qx.bom.Style.getPropertyName(bf);
},getInlineBlock:function(){var by=document.createElement(c);
by.style.display=f;

if(by.style.display==f){return f;
}by.style.display=e;

if(by.style.display!==e){return e;
}return null;
},getOpacity:function(){return (typeof document.documentElement.style.opacity==j);
},getOverflowXY:function(){return (typeof document.documentElement.style.overflowX==j)&&(typeof document.documentElement.style.overflowY==j);
}},defer:function(bz){qx.core.Environment.add(A,bz.getTextOverflow);
qx.core.Environment.add(u,bz.getPlaceholder);
qx.core.Environment.add(D,bz.getBorderRadius);
qx.core.Environment.add(x,bz.getBoxShadow);
qx.core.Environment.add(U,bz.getGradients);
qx.core.Environment.add(y,bz.getLinearGradient);
qx.core.Environment.add(ba,bz.getRadialGradient);
qx.core.Environment.add(F,bz.getLegacyWebkitGradient);
qx.core.Environment.add(p,bz.getBoxModel);
qx.core.Environment.add(G,bz.getRgba);
qx.core.Environment.add(S,bz.getBorderImage);
qx.core.Environment.add(a,bz.getBorderImageSyntax);
qx.core.Environment.add(q,bz.getUserModify);
qx.core.Environment.add(B,bz.getUserSelect);
qx.core.Environment.add(v,bz.getUserSelectNone);
qx.core.Environment.add(bb,bz.getAppearance);
qx.core.Environment.add(b,bz.getFloat);
qx.core.Environment.add(r,bz.getBoxSizing);
qx.core.Environment.add(bc,bz.getInlineBlock);
qx.core.Environment.add(H,bz.getOpacity);
qx.core.Environment.add(s,bz.getOverflowXY);
}});
})();
(function(){var d="-",c="qx.bom.Style",b="string",a="";
qx.Bootstrap.define(c,{statics:{VENDOR_PREFIXES:["Webkit","Moz","O","ms","Khtml"],getPropertyName:function(e){var f=document.documentElement.style;

if(f[e]!==undefined){return e;
}
for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++){var g=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(e);

if(f[g]!==undefined){return g;
}}return null;
},getAppliedStyle:function(h,j,k,m){var n=(m!==false)?[null].concat(this.VENDOR_PREFIXES):[null];

for(var i=0,l=n.length;i<l;i++){var o=n[i]?d+n[i].toLowerCase()+d+k:k;
try{h.style[j]=o;

if(typeof h.style[j]==b&&h.style[j]!==a){return o;
}}catch(p){}}return null;
}}});
})();
(function(){var m="",l="audio",k="video",j="undefined",i="number",h="function",g="html.video.h264",f="html.element.contains",d='video/ogg; codecs="theora, vorbis"',c="html.console",bk="html.xul",bj="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",bi="html.video.ogg",bh="http://www.w3.org/TR/SVG11/feature#BasicStructure",bg="html.storage.local",bf="div",be='audio',bd='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',bc="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",bb="html.audio",t="url(#default#VML)",u="audio/mpeg",r="org.w3c.dom.svg",s="html.classlist",p="html.video",q="html.geolocation",n="DOMTokenList",o="html.storage.session",y="1.1",z="html.image.naturaldimensions",H="html.audio.aif",F="audio/x-wav",P='<v:shape id="vml_flag1" adj="1" />',K="html.canvas",W="audio/ogg",U="html.element.compareDocumentPosition",B="audio/x-aiff",ba="html.audio.au",Y="img",X="html.xpath",A="qx.bom.client.Html",D='video',E="span",G="html.element.textcontent",I="html.audio.mp3",L="html.vml",R="html.svg",V="html.audio.ogg",w="label",x='video/webm; codecs="vp8, vorbis"',C="html.dataurl",O="html.webworker",N="html.dataset",M="1.0",T="html.audio.wav",S="html.filereader",J="audio/basic",Q="html.video.webm",b="object";
qx.Bootstrap.define(A,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(be).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(W);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(u);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(F);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(J);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return m;
}var a=document.createElement(l);
return a.canPlayType(B);
},getVideo:function(){return !!document.createElement(D).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(d);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(bd);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return m;
}var v=document.createElement(k);
return v.canPlayType(x);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(bl){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(bm){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===n);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(bj,w);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(r,M)||document.implementation.hasFeature(bh,y));
},getVml:function(){var bn=document.createElement(bf);
document.body.appendChild(bn);
bn.innerHTML=P;
bn.firstChild.style.behavior=t;
var bo=typeof bn.firstChild.adj==b;
document.body.removeChild(bn);
return bo;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(bp){var bq=new Image();
bq.onload=bq.onerror=function(){window.setTimeout(function(){bp.call(null,(bq.width==1&&bq.height==1));
},0);
};
bq.src=bc;
},getDataset:function(){return !!document.documentElement.dataset;
},getContains:function(){return (typeof document.documentElement.contains!==j);
},getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===h);
},getTextContent:function(){var br=document.createElement(E);
return (typeof br.textContent!==j);
},getConsole:function(){return typeof window.console!==j;
},getNaturalDimensions:function(){var bs=document.createElement(Y);
return typeof bs.naturalHeight===i&&typeof bs.naturalWidth===i;
}},defer:function(bt){qx.core.Environment.add(O,bt.getWebWorker);
qx.core.Environment.add(S,bt.getFileReader);
qx.core.Environment.add(q,bt.getGeoLocation);
qx.core.Environment.add(bb,bt.getAudio);
qx.core.Environment.add(V,bt.getAudioOgg);
qx.core.Environment.add(I,bt.getAudioMp3);
qx.core.Environment.add(T,bt.getAudioWav);
qx.core.Environment.add(ba,bt.getAudioAu);
qx.core.Environment.add(H,bt.getAudioAif);
qx.core.Environment.add(p,bt.getVideo);
qx.core.Environment.add(bi,bt.getVideoOgg);
qx.core.Environment.add(g,bt.getVideoH264);
qx.core.Environment.add(Q,bt.getVideoWebm);
qx.core.Environment.add(bg,bt.getLocalStorage);
qx.core.Environment.add(o,bt.getSessionStorage);
qx.core.Environment.add(s,bt.getClassList);
qx.core.Environment.add(X,bt.getXPath);
qx.core.Environment.add(bk,bt.getXul);
qx.core.Environment.add(K,bt.getCanvas);
qx.core.Environment.add(R,bt.getSvg);
qx.core.Environment.add(L,bt.getVml);
qx.core.Environment.add(N,bt.getDataset);
qx.core.Environment.addAsync(C,bt.getDataUrl);
qx.core.Environment.add(f,bt.getContains);
qx.core.Environment.add(U,bt.getCompareDocumentPosition);
qx.core.Environment.add(G,bt.getTextContent);
qx.core.Environment.add(c,bt.getConsole);
qx.core.Environment.add(z,bt.getNaturalDimensions);
}});
})();
(function(){var o="animationend",n="css.animation",m="",l="MSAnimationEnd",k="-keyframes",j="animation",h="oAnimationEnd",g="@",f="@keyframes",d="webkitAnimationEnd",a="qx.bom.client.CssAnimation",c=" name",b="AnimationPlayState";
qx.Bootstrap.define(a,{statics:{getSupport:function(){var name=qx.bom.client.CssAnimation.getName();

if(name!=null){return {"name":name,"play-state":qx.bom.client.CssAnimation.getPlayState(),"end-event":qx.bom.client.CssAnimation.getAnimationEnd(),"keyframes":qx.bom.client.CssAnimation.getKeyFrames()};
}return null;
},getPlayState:function(){return qx.bom.Style.getPropertyName(b);
},getName:function(){return qx.bom.Style.getPropertyName(j);
},getAnimationEnd:function(){var p={"MsAnimation":l,"WebkitAnimation":d,"MozAnimation":o,"OAnimation":h,"animation":o};
return p[this.getName()];
},getKeyFrames:function(){var q=qx.bom.Style.VENDOR_PREFIXES;
var s=[];

for(var i=0;i<q.length;i++){s.push(g+qx.lang.String.hyphenate(q[i])+k);
}s.unshift(f);
var r=qx.bom.Stylesheet.createElement();

for(var i=0;i<s.length;i++){try{qx.bom.Stylesheet.addRule(r,s[i]+c,m);
return s[i];
}catch(e){}}return null;
}},defer:function(t){qx.core.Environment.add(n,t.getSupport);
}});
})();
(function(){var k=".",j="$1",h="",g="object",f="Shockwave Flash",e="undefined",d="qx.bom.client.Flash",c="ShockwaveFlash.ShockwaveFlash.7",b="plugin.flash.express",a="plugin.flash.version",w="plugin.flash",v="osx",u="10.0.12",t="win",s="ShockwaveFlash.ShockwaveFlash.6",r="$version",q="plugin.flash.strictsecurity",p="6.0.65",o="always",n="9.0.151",l="ShockwaveFlash.ShockwaveFlash",m=",";
qx.Bootstrap.define(d,{statics:{isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(navigator.plugins&&typeof navigator.plugins[f]===g){var z=[0,0,0];
var B=navigator.plugins[f].description;

if(typeof B!=e){B=B.replace(/^.*\s+(\S+\s+\S+$)/,j);
z[0]=parseInt(B.replace(/^(.*)\..*$/,j),10);
z[1]=parseInt(B.replace(/^.*\.(.*)\s.*$/,j),10);
z[2]=/r/.test(B)?parseInt(B.replace(/^.*r(.*)$/,j),10):0;
}return z.join(k);
}else if(window.ActiveXObject){var z=[0,0,0];
var y=false;

try{var A=new ActiveXObject(c);
}catch(C){try{var A=new ActiveXObject(s);
z=[6,0,21];
A.AllowScriptAccess=o;
}catch(D){if(z[0]==6){y=true;
}}
if(!y){try{A=new ActiveXObject(l);
}catch(E){}}}
if(!y&&typeof A==g){var x=A.GetVariable(r);

if(typeof x!=e){x=x.split(" ")[1].split(m);
z[0]=parseInt(x[0],10);
z[1]=parseInt(x[1],10);
z[2]=parseInt(x[2],10);
}}return z.join(k);
}else{return h;
}},getExpressInstall:function(){var G=qx.bom.client.Flash.getVersion();

if(G==h){return false;
}var F=qx.bom.client.OperatingSystem.getName();
return (F==t||F==v)&&qx.bom.client.Flash.__Iy(p,G);
},getStrictSecurityModel:function(){var H=qx.bom.client.Flash.getVersion();

if(H==h){return false;
}var I=H.split(k);

if(I[0]<10){return qx.bom.client.Flash.__Iy(n,H);
}else{return qx.bom.client.Flash.__Iy(u,H);
}},_cachedSupportsVersion:{},__Iy:function(J,K){var N=J.split(k);
var M=K||qx.bom.client.Flash.getVersion();
M=M.split(k);

for(var i=0;i<N.length;i++){var L=parseInt(M[i],10)-parseInt(N[i],10);

if(L>0){return true;
}else if(L<0){return false;
}}return true;
}},defer:function(O){qx.core.Environment.add(w,O.isAvailable);
qx.core.Environment.add(a,O.getVersion);
qx.core.Environment.add(b,O.getExpressInstall);
qx.core.Environment.add(q,O.getStrictSecurityModel);
}});
})();
(function(){var f="-",e="",d="qx.bom.client.Locale",c="locale",b="android",a="locale.variant";
qx.Bootstrap.define(d,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__hE();
var h=g.indexOf(f);

if(h!=-1){g=g.substr(0,h);
}return g;
},getVariant:function(){var i=qx.bom.client.Locale.__hE();
var k=e;
var j=i.indexOf(f);

if(j!=-1){k=i.substr(j+1);
}return k;
},__hE:function(){var l=(navigator.userLanguage||navigator.language||e);
if(qx.bom.client.OperatingSystem.getName()==b){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(m){l=m[0];
}}return l.toLowerCase();
}},defer:function(n){qx.core.Environment.add(c,n.getLocale);
qx.core.Environment.add(a,n.getVariant);
}});
})();
(function(){var f="undefined",e="",d="runtime.name",c="node.js",b="rhino",a="qx.bom.client.Runtime";
qx.Bootstrap.define(a,{statics:{getName:function(){var name=e;
if(typeof environment!==f){name=b;
}else if(typeof process!==f){name=c;
}else{name=qx.bom.client.Browser.getName();
}return name;
}},defer:function(g){qx.core.Environment.add(d,g.getName);
}});
})();
(function(){var e="notification",d="PhoneGap",c="qx.bom.client.PhoneGap",b="phonegap",a="phonegap.notification";
qx.Bootstrap.define(c,{statics:{getPhoneGap:function(){return d in window;
},getNotification:function(){return e in navigator;
}},defer:function(f){qx.core.Environment.add(b,f.getPhoneGap);
qx.core.Environment.add(a,f.getNotification);
}});
})();
(function(){var n="perspectiveProperty",m="css.transform.3d",l="BackfaceVisibility",k="TransformStyle",j="WebkitPerspective",h='div',g="TransformOrigin",f="qx.bom.client.CssTransform",e="Transform",d="MozPerspective",a="Perspective",c="css.transform",b="PerspectiveOrigin";
qx.Bootstrap.define(f,{statics:{getSupport:function(){var name=qx.bom.client.CssTransform.getName();

if(name!=null){return {"name":name,"style":qx.bom.client.CssTransform.getStyle(),"origin":qx.bom.client.CssTransform.getOrigin(),"3d":qx.bom.client.CssTransform.get3D(),"perspective":qx.bom.client.CssTransform.getPerspective(),"perspective-origin":qx.bom.client.CssTransform.getPerspectiveOrigin(),"backface-visibility":qx.bom.client.CssTransform.getBackFaceVisibility()};
}return null;
},getStyle:function(){return qx.bom.Style.getPropertyName(k);
},getPerspective:function(){return qx.bom.Style.getPropertyName(a);
},getPerspectiveOrigin:function(){return qx.bom.Style.getPropertyName(b);
},getBackFaceVisibility:function(){return qx.bom.Style.getPropertyName(l);
},getOrigin:function(){return qx.bom.Style.getPropertyName(g);
},getName:function(){return qx.bom.Style.getPropertyName(e);
},get3D:function(){var o=document.createElement(h);
var q=false;
var p=[n,j,d];

for(var i=p.length-1;i>=0;i--){q=q?q:o.style[p[i]]!=undefined;
}return q;
}},defer:function(r){qx.core.Environment.add(c,r.getSupport);
qx.core.Environment.add(m,r.get3D);
}});
})();
(function(){var d="qx.nativeScrollBars",c="os.scrollBarOverlayed",b="osx",a="qx.bom.client.Scroll";
qx.Bootstrap.define(a,{statics:{scrollBarOverlayed:function(){var e=qx.bom.element.Overflow.getScrollbarWidth();
var f=qx.bom.client.OperatingSystem.getName()===b;
var g=qx.core.Environment.get(d);
return e==0&&f&&g;
}},defer:function(h){qx.core.Environment.add(c,h.scrollBarOverlayed);
}});
})();
(function(){var k="css.overflowxy",j="hidden",i="-moz-scrollbars-none",h="",g="engine.name",f="gecko",e="overflow",d="overflowY",b="engine.version",a="none",B="scroll",A="borderLeftStyle",z="borderRightStyle",y="div",x="borderRightWidth",w="overflow-y",v="borderLeftWidth",u="-moz-scrollbars-vertical",r=":",q="100px",o="overflow:",p="qx.bom.element.Overflow",m="overflow-x",n="overflowX",l=";";
qx.Class.define(p,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__de:null,getScrollbarWidth:function(){if(this.__de!==null){return this.__de;
}var C=qx.bom.element.Style;
var E=function(I,J){return parseInt(C.get(I,J),10)||0;
};
var F=function(K){return (C.get(K,z)==a?0:E(K,x));
};
var D=function(L){return (C.get(L,A)==a?0:E(L,v));
};
var H=qx.core.Environment.select(g,{"mshtml":function(M){if(C.get(M,d)==j||M.clientWidth==0){return F(M);
}return Math.max(0,M.offsetWidth-M.clientLeft-M.clientWidth);
},"default":function(N){if(N.clientWidth==0){var O=C.get(N,e);
var P=(O==B||O==u?16:0);
return Math.max(0,F(N)+P);
}return Math.max(0,(N.offsetWidth-N.clientWidth-D(N)));
}});
var G=function(Q){return H(Q)-F(Q);
};
var t=document.createElement(y);
var s=t.style;
s.height=s.width=q;
s.overflow=B;
document.body.appendChild(t);
var c=G(t);
this.__de=c;
document.body.removeChild(t);
return this.__de;
},_compile:function(R,S){if(!qx.core.Environment.get(k)){R=o;

if(qx.core.Environment.get(g)===f&&S==j){S=i;
}}return R+r+S+l;
},compileX:function(T){return this._compile(m,T);
},compileY:function(U){return this._compile(w,U);
},getX:function(V,W){if(qx.core.Environment.get(k)){return qx.bom.element.Style.get(V,n,W,false);
}var X=qx.bom.element.Style.get(V,e,W,false);

if(X===i){X=j;
}return X;
},setX:function(Y,ba){if(qx.core.Environment.get(k)){Y.style.overflowX=ba;
}else{if(ba===j&&qx.core.Environment.get(g)===f&&parseFloat(qx.core.Environment.get(b))<1.8){ba=i;
}Y.style.overflow=ba;
}},resetX:function(bb){if(qx.core.Environment.get(k)){bb.style.overflowX=h;
}else{bb.style.overflow=h;
}},getY:function(bc,bd){if(qx.core.Environment.get(k)){return qx.bom.element.Style.get(bc,d,bd,false);
}var be=qx.bom.element.Style.get(bc,e,bd,false);

if(be===i){be=j;
}return be;
},setY:function(bf,bg){if(qx.core.Environment.get(k)){bf.style.overflowY=bg;
}else{if(bg===j&&qx.core.Environment.get(g)===f&&parseFloat(qx.core.Environment.get(b))<1.8){bg=i;
}bf.style.overflow=bg;
}},resetY:function(bh){if(qx.core.Environment.get(k)){bh.style.overflowY=h;
}else{bh.style.overflow=h;
}}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bd:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bd[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bd[p]||p;
},reset:function(q){q.style.cursor=f;
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
(function(){var h="css.boxsizing",g="",f="border-box",e="qx.bom.element.BoxSizing",d="boxSizing",c="content-box",b=":",a=";";
qx.Class.define(e,{statics:{__df:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dg:function(i){var j=this.__df;
return j.tags[i.tagName.toLowerCase()]||j.types[i.type];
},compile:function(k){if(qx.core.Environment.get(h)){var l=qx.lang.String.hyphenate(qx.core.Environment.get(h));
return l+b+k+a;
}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
qx.log.Logger.trace();
}},get:function(m){if(qx.core.Environment.get(h)){return qx.bom.element.Style.get(m,d,null,false)||g;
}
if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(m))){if(!this.__dg(m)){return c;
}}return f;
},set:function(n,o){if(qx.core.Environment.get(h)){try{n.style[qx.core.Environment.get(h)]=o;
}catch(p){qx.log.Logger.warn(this,"This client does not support the boxSizing value",o);
}}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
}},reset:function(q){this.set(q,g);
}}});
})();
(function(){var l="",k="engine.name",j=";",i="opacity:",h="opacity",g="filter",f="MozOpacity",e=");",d=")",c="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",b="alpha(opacity=";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(k,{"mshtml":function(m){if(m>=1){m=1;
}
if(m<0.00001){m=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return i+m+j;
}else{return c+(m*100)+e;
}},"gecko":function(n){if(n>=1){n=0.999999;
}return i+n+j;
},"default":function(o){if(o>=1){return l;
}return i+o+j;
}}),set:qx.core.Environment.select(k,{"mshtml":function(p,q){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(q>=1){q=l;
}p.style.opacity=q;
}else{var r=qx.bom.element.Style.get(p,g,qx.bom.element.Style.COMPUTED_MODE,false);

if(q>=1){q=1;
}
if(q<0.00001){q=0;
}if(!p.currentStyle||!p.currentStyle.hasLayout){p.style.zoom=1;
}p.style.filter=r.replace(/alpha\([^\)]*\)/gi,l)+b+q*100+d;
}},"gecko":function(s,t){if(t>=1){t=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){s.style.MozOpacity=t;
}else{s.style.opacity=t;
}},"default":function(u,v){if(v>=1){v=l;
}u.style.opacity=v;
}}),reset:qx.core.Environment.select(k,{"mshtml":function(w){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){w.style.opacity=l;
}else{var x=qx.bom.element.Style.get(w,g,qx.bom.element.Style.COMPUTED_MODE,false);
w.style.filter=x.replace(/alpha\([^\)]*\)/gi,l);
}},"gecko":function(y){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){y.style.MozOpacity=l;
}else{y.style.opacity=l;
}},"default":function(z){z.style.opacity=l;
}}),get:qx.core.Environment.select(k,{"mshtml":function(A,B){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var C=qx.bom.element.Style.get(A,h,B,false);

if(C!=null){return parseFloat(C);
}return 1.0;
}else{var D=qx.bom.element.Style.get(A,g,B,false);

if(D){var C=D.match(/alpha\(opacity=(.*)\)/);

if(C&&C[1]){return parseFloat(C[1])/100;
}}return 1.0;
}},"gecko":function(E,F){var G=qx.bom.element.Style.get(E,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?f:h,F,false);

if(G==0.999999){G=1.0;
}
if(G!=null){return parseFloat(G);
}return 1.0;
},"default":function(H,I){var J=qx.bom.element.Style.get(H,h,I,false);

if(J!=null){return parseFloat(J);
}return 1.0;
}})},defer:function(K){K.SUPPORT_CSS3_OPACITY=qx.core.Environment.get("css.opacity");
}});
})();
(function(){var j="",i="engine.name",h="float",g="browser.documentmode",f="mshtml",e="style",d="css.float",c="px",b="css.appearance",a="pixelRight",w="css.userselect",v="css.boxsizing",u="css.textoverflow",t="pixelHeight",s=":",r="pixelTop",q="css.borderimage",p="pixelLeft",o="css.usermodify",n="qx.bom.element.Style",l="pixelBottom",m="pixelWidth",k=";";
qx.Class.define(n,{statics:{__dh:function(){var y={"appearance":qx.core.Environment.get(b),"userSelect":qx.core.Environment.get(w),"textOverflow":qx.core.Environment.get(u),"borderImage":qx.core.Environment.get(q),"float":qx.core.Environment.get(d),"userModify":qx.core.Environment.get(o),"boxSizing":qx.core.Environment.get(v)};
this.__di={};

for(var x in qx.lang.Object.clone(y)){if(!y[x]){delete y[x];
}else{this.__di[x]=x==h?h:qx.lang.String.hyphenate(y[x]);
}}this.__dj=y;
},__dk:{width:m,height:t,left:p,right:a,top:r,bottom:l},__dl:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(z){var B=[];
var D=this.__dl;
var C=this.__di;
var name,A;

for(name in z){A=z[name];

if(A==null){continue;
}name=C[name]||name;
if(D[name]){B.push(D[name].compile(A));
}else{B.push(qx.lang.String.hyphenate(name),s,A,k);
}}return B.join(j);
},setCss:function(E,F){if(qx.core.Environment.get(i)===f&&parseInt(qx.core.Environment.get(g),10)<8){E.style.cssText=F;
}else{E.setAttribute(e,F);
}},getCss:function(G){if(qx.core.Environment.get(i)===f&&parseInt(qx.core.Environment.get(g),10)<8){return G.style.cssText.toLowerCase();
}else{return G.getAttribute(e);
}},isPropertySupported:function(H){return (this.__dl[H]||this.__dj[H]||H in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(I,name,J,K){name=this.__dj[name]||name;
if(K!==false&&this.__dl[name]){return this.__dl[name].set(I,J);
}else{I.style[name]=J!==null?J:j;
}},setStyles:function(L,M,N){var Q=this.__dj;
var S=this.__dl;
var O=L.style;

for(var R in M){var P=M[R];
var name=Q[R]||R;

if(P===undefined){if(N!==false&&S[name]){S[name].reset(L);
}else{O[name]=j;
}}else{if(N!==false&&S[name]){S[name].set(L,P);
}else{O[name]=P!==null?P:j;
}}}},reset:function(T,name,U){name=this.__dj[name]||name;
if(U!==false&&this.__dl[name]){return this.__dl[name].reset(T);
}else{T.style[name]=j;
}},get:qx.core.Environment.select(i,{"mshtml":function(V,name,W,X){name=this.__dj[name]||name;
if(X!==false&&this.__dl[name]){return this.__dl[name].get(V,W);
}if(!V.currentStyle){return V.style[name]||j;
}switch(W){case this.LOCAL_MODE:return V.style[name]||j;
case this.CASCADED_MODE:return V.currentStyle[name]||j;
default:var bc=V.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bc)){return bc;
}var bb=this.__dk[name];

if(bb){var Y=V.style[name];
V.style[name]=bc||0;
var ba=V.style[bb]+c;
V.style[name]=Y;
return ba;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bc)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bc;
}},"default":function(bd,name,be,bf){name=this.__dj[name]||name;
if(bf!==false&&this.__dl[name]){return this.__dl[name].get(bd,be);
}switch(be){case this.LOCAL_MODE:return bd.style[name]||j;
case this.CASCADED_MODE:if(bd.currentStyle){return bd.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bg=qx.dom.Node.getDocument(bd);
var bh=bg.defaultView.getComputedStyle(bd,null);
return bh?bh[name]:j;
}}})},defer:function(bi){bi.__dh();
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
(function(){var d="engine.version",c="engine.name",b="undefined",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(c,{"opera":function(e){if(parseFloat(qx.core.Environment.get(d))<9.5){return (e||window).document.body.clientWidth;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientWidth:f.body.clientWidth;
}},"webkit":function(g){if(parseFloat(qx.core.Environment.get(d))<523.15){return (g||window).innerWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Environment.select(c,{"opera":function(k){if(parseFloat(qx.core.Environment.get(d))<9.5){return (k||window).document.body.clientHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"webkit":function(m){if(parseFloat(qx.core.Environment.get(d))<523.15){return (m||window).innerHeight;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}},"default":function(o){var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}}),getScrollLeft:function(q){var q=q?q:window;

if(typeof q.pageXOffset!==b){return q.pageXOffset;
}var r=q.document;
return r.documentElement.scrollLeft||r.body.scrollLeft;
},getScrollTop:function(s){var s=s?s:window;

if(typeof s.pageYOffeset!==b){return s.pageYOffset;
}var t=s.document;
return t.documentElement.scrollTop||t.body.scrollTop;
},__dm:function(){var u=this.getWidth()>this.getHeight()?90:0;
var v=window.orientation;

if(v==null||Math.abs(v%180)==u){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dn:null,getOrientation:function(w){var x=(w||window).orientation;

if(x==null){x=this.getWidth(w)>this.getHeight(w)?90:0;
}else{x=this.__dn[x];
}return x;
},isLandscape:function(y){return Math.abs(this.getOrientation(y))==90;
},isPortrait:function(z){return Math.abs(this.getOrientation(z))!==90;
}},defer:function(A){A.__dn=A.__dm();
}});
})();
(function(){var n="ipod",m="g",l="xbox",k="pc",j="\.",i="(",h=")",g="iPhone",f="|",e="qx.bom.client.Device",b="wii",d="ipad",c="device.name",a="ds";
qx.Bootstrap.define(e,{statics:{__dd:{"iPod":n,"iPad":d,"iPhone":g,"PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":b,"Nintendo DS":a,"XBOX":"xbox","Xbox":l},getName:function(){var q=[];

for(var p in this.__dd){q.push(p);
}var r=new RegExp(i+q.join(f).replace(/\./g,j)+h,m);
var o=r.exec(navigator.userAgent);

if(o&&o[1]){return qx.bom.client.Device.__dd[o[1]];
}return k;
}},defer:function(s){qx.core.Environment.add(c,s.getName);
}});
})();
(function(){var c=": ",b="qx.dev.unit.RequirementError",a="Requirement not met";
qx.Class.define(b,{extend:Error,construct:function(d,e){this.__Sm=e||a;
this.__Sn=d;
Error.call(this,this.__Sm);
},members:{__Sm:null,__Sn:null,getRequirement:function(){return this.__Sn;
},toString:function(){return this.__Sm+c+this.__Sn;
}}});
})();
(function(){var k="engine.name",j="qx.debug.io",i="",h="mshtml",g="undefined",f="opera",d="gecko",c="file:",b="If-Modified-Since",a="onunload",y="browser.documentmode",x="activex",w="If-None-Match",v="xhr",u="engine.version",t="-1",s="If-Match",r="Microsoft.XMLHTTP",q="browser.version",p="qx.bom.request.Xhr",n="Microsoft.XMLDOM",o="If-Range",l="Content-Type",m="io.xhr";
qx.Bootstrap.define(p,{construct:function(){this.__sQ=qx.Bootstrap.bind(this.__tc,this);
this.__sR=qx.Bootstrap.bind(this.__tb,this);
this.__sq=qx.Bootstrap.bind(this.__tf,this);
this.__ta();
if(window.attachEvent){this.__sS=qx.Bootstrap.bind(this.__ti,this);
window.attachEvent(a,this.__sS);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:i,responseXML:null,status:0,statusText:i,timeout:0,open:function(z,A,B,C,D){this.__tk();
if(typeof z===g||typeof A===g){throw new Error("Not enough arguments");
}this.__st=false;
this.__sT=false;
this.__sU=false;
this.__su=A;

if(typeof B==g){B=true;
}this.__sV=B;
if(!this.__tj()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__ta();
}this.__sX.onreadystatechange=this.__sQ;

try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+z+", url: "+A+", async: "+B);
}this.__sX.open(z,A,B,C,D);
}catch(E){if(!qx.util.Request.isCrossDomain(A)){throw E;
}
if(!this.__sV){this.__sW=E;
}
if(this.__sV){if(window.XDomainRequest){this.readyState=4;
this.__sX=new XDomainRequest();
this.__sX.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+z+", url: "+A+", async: "+B);
}this.__sX.open(z,A,B,C,D);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){if(this.__sv){return;
}this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(k)===h&&qx.core.Environment.get(y)<9&&this.__sX.readyState>0){this.__sX.setRequestHeader(b,t);
}if(qx.core.Environment.get(k)===d&&parseInt(qx.core.Environment.get(u),10)<2&&!this.__sV){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(F,G){this.__tk();
if(F==s||F==b||F==w||F==o){this.__sU=true;
}this.__sX.setRequestHeader(F,G);
},send:function(H){this.__tk();
if(!this.__sV&&this.__sW){throw this.__sW;
}if(qx.core.Environment.get(k)===f&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__sY=window.setTimeout(this.__sq,this.timeout);
}H=typeof H==g?null:H;
try{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__sX.send(H);
}catch(J){if(!this.__sV){throw J;
}if(this._getProtocol()===c){this.readyState=2;
this.__sy();
var I=this;
window.setTimeout(function(){if(I.__sv){return;
}I.readyState=3;
I.__sy();
I.readyState=4;
I.__sy();
});
}}if(qx.core.Environment.get(k)===d&&!this.__sV){this.__tc();
}this.__sT=true;
},abort:function(){this.__tk();
this.__st=true;
this.__sX.abort();

if(this.__sX){this.readyState=this.__sX.readyState;
}},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(K){this.__tk();
return this.__sX.getResponseHeader(K);
},getAllResponseHeaders:function(){this.__tk();
return this.__sX.getAllResponseHeaders();
},getRequest:function(){return this.__sX;
},dispose:function(){if(this.__sv){return false;
}window.clearTimeout(this.__sY);
if(window.detachEvent){window.detachEvent(a,this.__sS);
}try{this.__sX.onreadystatechange;
}catch(M){return;
}var L=function(){};
this.__sX.onreadystatechange=L;
this.__sX.onload=L;
this.__sX.onerror=L;
this.abort();
this.__sX=null;
this.__sv=true;
return true;
},_createNativeXhr:function(){var N=qx.core.Environment.get(m);

if(N===v){return new XMLHttpRequest();
}
if(N==x){return new window.ActiveXObject(r);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){var O=this.__su;
var P=/^(\w+:)\/\//;
if(O!==null&&O.match){var Q=O.match(P);

if(Q&&Q[1]){return Q[1];
}}return window.location.protocol;
},__sX:null,__sV:null,__sQ:null,__sR:null,__sS:null,__sq:null,__sT:null,__su:null,__st:null,__du:null,__sv:null,__sY:null,__sW:null,__sU:null,__ta:function(){this.__sX=this._createNativeXhr();
this.__sX.onreadystatechange=this.__sQ;
if(this.__sX.onabort){this.__sX.onabort=this.__sR;
}this.__sv=this.__sT=this.__st=false;
},__tb:function(){if(!this.__st){this.abort();
}},__tc:function(){var R=this.__sX,S=true;

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+R.readyState);
}if(this.readyState==R.readyState){return;
}this.readyState=R.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__st&&!this.__sT){return;
}if(!this.__sV&&(R.readyState==2||R.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=i;
this.responseXML=null;

if(this.readyState>=qx.bom.request.Xhr.HEADERS_RECEIVED){try{this.status=R.status;
this.statusText=R.statusText;
this.responseText=R.responseText;
this.responseXML=R.responseXML;
}catch(T){S=false;
}
if(S){this.__tg();
this.__th();
}}this.__sy();
if(this.readyState==qx.bom.request.Xhr.DONE){if(R){R.onreadystatechange=function(){};
}}},__sy:function(){var U=this;
if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__sY);
}if(qx.core.Environment.get(k)==h&&qx.core.Environment.get(y)<8){if(this.__sV&&!this.__sT&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){if(U.__sv){return;
}U.readyState=3;
U.onreadystatechange();
U.readyState=4;
U.onreadystatechange();
U.__td();
});
return;
}}}this.onreadystatechange();

if(this.readyState===qx.bom.request.Xhr.DONE){this.__td();
}},__td:function(){if(this.__du){this.ontimeout();
if(qx.core.Environment.get(k)===f){this.onerror();
}this.__du=false;
}else{if(this.__st){this.onabort();
}else{this.__te()?this.onerror():this.onload();
}}this.onloadend();
},__te:function(){var V;
if(this._getProtocol()===c){V=!this.responseText;
}else{V=!this.statusText;
}return V;
},__tf:function(){var W=this.__sX;
this.readyState=qx.bom.request.Xhr.DONE;
this.__du=true;
W.abort();
this.responseText=i;
this.responseXML=null;
this.__sy();
},__tg:function(){var X=this.readyState===qx.bom.request.Xhr.DONE;
if(this._getProtocol()===c&&this.status===0&&X){if(!this.__te()){this.status=200;
}}if(this.status===1223){this.status=204;
}if(qx.core.Environment.get(k)===f){if(X&&this.__sU&&!this.__st&&this.status===0){this.status=304;
}}},__th:function(){if(qx.core.Environment.get(k)==h&&(this.getResponseHeader(l)||i).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var Y=new window.ActiveXObject(n);
Y.async=false;
Y.validateOnParse=false;
Y.loadXML(this.responseText);
this.responseXML=Y;
}},__ti:function(){try{if(this){this.dispose();
}}catch(e){}},__tj:function(){var name=qx.core.Environment.get(k);
var ba=qx.core.Environment.get(q);
return !(name==h&&ba<9||name==d&&ba<3.5);
},__tk:function(){if(this.__sv){throw new Error("Already disposed");
}}},defer:function(){qx.core.Environment.add(j,false);
}});
})();
(function(){var b="//",a="qx.util.Request";
qx.Class.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location,d=location.protocol;
if(!(c.indexOf(b)!==-1)){return false;
}
if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
},methodAllowsRequestBody:function(f){return !((/^(GET)|(HEAD)$/).test(f));
}}});
})();
(function(){var q="",p='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',o='.qxappender .type-instance{color:#565656;font-weight:bold}',n="qx.log.appender.Element",m='.qxappender .level-info{background:#DEEDFA}',l='.qxappender .type-stringify{color:#565656;font-weight:bold}',k='.qxappender .type-number{color:#155791;font-weight:normal;}',j="qxappender",i='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',h='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',c='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',g='.qxappender .level-error{background:#FFE2D5}',f='.qxappender .level-debug{background:white}',b='.qxappender .type-key{color:#565656;font-style:italic}',a='.qxappender .level-user{background:#E3EFE9}',e='.qxappender .level-warn{background:#FFF7D5}',d='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(n,{extend:qx.core.Object,construct:function(r){qx.core.Object.call(this);
var s=[f,m,e,g,a,d,k,c,p,i,b,h,o,l];
qx.bom.Stylesheet.createElement(s.join(q));
qx.log.Logger.register(this);
},members:{__dF:null,setElement:function(t){this.clear();
if(t){qx.bom.element.Class.add(t,j);
}this.__dF=t;
},clear:function(){var u=this.__dF;
if(u){u.innerHTML=q;
}},process:function(v){var w=this.__dF;

if(!w){return;
}w.appendChild(qx.log.appender.Util.toHtml(v));
w.scrollTop=w.scrollHeight;
}},destruct:function(){this.__dF=null;
}});
})();
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__ko:/\s+/g,__kp:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__ko);

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
return M.className=M.className.replace(O,p).replace(this.__kp,p).replace(this.__ko,o);
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
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="\n",M="{",L="map",K="Use qx.dev.StackTrace.FORMAT_STACKTRACE instead",J="function",I="<span class='object'>",H="]:",G="&gt;",F="<span class='object' title='Object instance with hash code: ",E="FORMAT_STACK",D="string",s="level-",t="0",q="&lt;",r="<span class='offset'>",o=":",p="qx.log.appender.Util",m="&amp;",n="&#39;",u="DIV",v="<span>",y="&quot;",x="<span class='type-key'>",A="</span>:<span class='type-",z="</span>: ",C=" ",B="]</span>: ",w="?";
qx.Class.define(p,{statics:{toHtml:function(N){var X=[];
var U,W,P,R;
X.push(r,this.formatOffset(N.offset,6),e);

if(N.object){var O=N.win.qx.core.ObjectRegistry.fromHashCode(N.object);

if(O){X.push(F+O.$$hash+l,O.classname,k,O.$$hash,B);
}}else if(N.clazz){X.push(I+N.clazz.classname,z);
}var Q=N.items;

for(var i=0,V=Q.length;i<V;i++){U=Q[i];
W=U.text;

if(W instanceof Array){var R=[];

for(var j=0,T=W.length;j<T;j++){P=W[j];

if(typeof P===D){R.push(v+this.escapeHTML(P)+g);
}else if(P.key){R.push(x+P.key+A+P.type+l+this.escapeHTML(P.text)+g);
}else{R.push(f+P.type+l+this.escapeHTML(P.text)+g);
}}X.push(f+U.type+l);

if(U.type===L){X.push(M,R.join(h),d);
}else{X.push(k,R.join(h),b);
}X.push(g);
}else{X.push(f+U.type+l+this.escapeHTML(W)+e);
}}var S=document.createElement(u);
S.innerHTML=X.join(c);
S.className=s+N.level;
return S;
},formatOffset:function(Y,length){var bc=Y.toString();
var ba=(length||6)-bc.length;
var bb=c;

for(var i=0;i<ba;i++){bb+=t;
}return bb+bc;
},FORMAT_STACK:null,escapeHTML:function(bd){return String(bd).replace(/[<>&"']/g,this.__Hh);
},__Hh:function(be){var bf={"<":q,">":G,"&":m,"'":n,'"':y};
return bf[be]||w;
},toText:function(bg){return this.toTextArray(bg).join(C);
},toTextArray:function(bh){var bp=[];
bp.push(this.formatOffset(bh.offset,6));

if(bh.object){var bi=bh.win.qx.core.ObjectRegistry.fromHashCode(bh.object);

if(bi){bp.push(bi.classname+k+bi.$$hash+H);
}}else if(bh.clazz){bp.push(bh.clazz.classname+o);
}var bj=bh.items;
var bm,bo;

for(var i=0,bn=bj.length;i<bn;i++){bm=bj[i];
bo=bm.text;

if(bm.trace&&bm.trace.length>0){if(typeof (this.FORMAT_STACK)==J){qx.log.Logger.deprecatedConstantWarning(qx.log.appender.Util,E,K);
bo+=a+this.FORMAT_STACK(bm.trace);
}else{bo+=a+bm.trace;
}}
if(bo instanceof Array){var bk=[];

for(var j=0,bl=bo.length;j<bl;j++){bk.push(bo[j].text);
}
if(bm.type===L){bp.push(M,bk.join(h),d);
}else{bp.push(k,bk.join(h),b);
}}else{bp.push(bo);
}}return bp;
}}});
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
(function(){var j="load",i="contentDocument",h="engine.name",g="",f="qx.bom.Iframe",e="osx",d="os.name",c="webkit",b="iframe",a="body";
qx.Class.define(f,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(k,l){var k=k?qx.lang.Object.clone(k):{};
var m=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var n in m){if(k[n]==null){k[n]=m[n];
}}return qx.bom.Element.create(b,k,l);
},getWindow:function(o){try{return o.contentWindow;
}catch(p){return null;
}},getDocument:function(q){if(i in q){try{return q.contentDocument;
}catch(s){return null;
}}
try{var r=this.getWindow(q);
return r?r.document:null;
}catch(t){return null;
}},getBody:function(u){try{var v=this.getDocument(u);
return v?v.getElementsByTagName(a)[0]:null;
}catch(w){return null;
}},setSource:function(x,y){try{if(this.getWindow(x)&&qx.dom.Hierarchy.isRendered(x)){try{if((qx.core.Environment.get(h)==c)&&qx.core.Environment.get(d)==e){var z=this.getWindow(x);

if(z){z.stop();
}}this.getWindow(x).location.replace(y);
}catch(A){x.src=y;
}}else{x.src=y;
}this.__qz(x);
}catch(B){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(C){var D=this.getDocument(C);

try{if(D&&D.location){return D.location.href;
}}catch(E){}return g;
},__qz:function(F){var G=function(){qx.bom.Event.removeNativeListener(F,j,G);
F.$$url=qx.bom.Iframe.queryCurrentUrl(F);
};
qx.bom.Event.addNativeListener(F,j,G);
}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dv=d;
this.__ef={};
qx.event.handler.Appear.__eg[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__eg:{},refresh:function(){var e=this.__eg;

for(var f in e){e[f].refresh();
}}},members:{__dv:null,__ef:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__ef;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__ef;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__ef;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__dv.dispatchEvent(w,t);
}}}},destruct:function(){this.__dv=this.__ef=null;
delete qx.event.handler.Appear.__eg[this.$$hash];
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
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__dv=b;
this.__cy=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__dv=this.__cy=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dv=u;
this.__cy=u.getWindow();
this.__dG=this.__cy.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eh:null,__ei:null,__ej:null,__ek:null,__el:null,__dv:null,__cy:null,__dG:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__em:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,b,qx.event.type.Data,[E||D.type]);
},__en:function(){var H=[this.__cy,this.__dG,this.__dG.body];
var I=this.__cy;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__eh=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,q,this.__eh);
Event.addNativeListener(this.__dG,t,this.__eh);
Event.addNativeListener(this.__dG,r,this.__eh);
Event.addNativeListener(this.__dG,n,this.__eh);
Event.addNativeListener(this.__dG,p,this.__eh);
},_initMoveObserver:function(){this.__ei=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,j,this.__ei);
Event.addNativeListener(this.__dG,l,this.__ei);
Event.addNativeListener(this.__dG,k,this.__ei);
},_initWheelObserver:function(){this.__ej=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__en();
qx.bom.Event.addNativeListener(J.target,J.type,this.__ej);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,q,this.__eh);
Event.removeNativeListener(this.__dG,t,this.__eh);
Event.removeNativeListener(this.__dG,r,this.__eh);
Event.removeNativeListener(this.__dG,n,this.__eh);
Event.removeNativeListener(this.__dG,p,this.__eh);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,j,this.__ei);
Event.removeNativeListener(this.__dG,l,this.__ei);
Event.removeNativeListener(this.__dG,k,this.__ei);
},_stopWheelObserver:function(){var K=this.__en();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__ej);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__em(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__eo){this.__eo(M,N,O);
}
if(this.__eq){this.__eq(M,N,O);
}this.__em(M,N,O);

if(this.__ep){this.__ep(M,N,O);
}
if(this.__er){this.__er(M,N,O);
}this.__ek=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__em(P,o);
}),__eo:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__em(Q,t,S);
}}},"default":null}),__ep:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__em(T,p,V);
}},"default":null}),__eq:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__ek==r){this.__em(W,q,Y);
}else if(X==n){this.__em(W,r,Y);
}},"default":null}),__er:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__el=bc;
break;
case t:if(bc!==this.__el){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__el);
this.__em(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dv=this.__cy=this.__dG=this.__el=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var e="os.name",d="opera",c="engine.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(f,g){var g=qx.event.type.Native.prototype._cloneNativeEvent.call(this,f,g);
g.shiftKey=f.shiftKey;
g.ctrlKey=f.ctrlKey;
g.altKey=f.altKey;
g.metaKey=f.metaKey;
return g;
},getModifiers:function(){var i=0;
var h=this._native;

if(h.shiftKey){i|=qx.event.type.Dom.SHIFT_MASK;
}
if(h.ctrlKey){i|=qx.event.type.Dom.CTRL_MASK;
}
if(h.altKey){i|=qx.event.type.Dom.ALT_MASK;
}
if(h.metaKey){i|=qx.event.type.Dom.META_MASK;
}return i;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(e)==a&&qx.core.Environment.get(c)!=d){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
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
},__es:{0:j,2:i,1:h},__et:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__es[this._native.button]||g;
}else{return this.__et[this._native.button]||g;
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
},__eu:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__ev();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__ev();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__ev:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__ew(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__ew(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__ew(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__ew(-e.wheelDeltaY):0;
}else{y=this.__ew(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__ew(e.detail);
}}return y;
}return 0;
},__ew:function(w){if(qx.core.Environment.get(f)){return this.__eu(w);
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
(function(){var g="html.element.contains",f="html.element.compareDocumentPosition",e="qx.dom.Hierarchy",d="previousSibling",c="nextSibling",b="parentNode",a="*";
qx.Class.define(e,{statics:{getNodeIndex:function(h){var i=0;

while(h&&(h=h.previousSibling)){i++;
}return i;
},getElementIndex:function(j){var k=0;
var l=qx.dom.Node.ELEMENT;

while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++;
}}return k;
},getNextElementSibling:function(m){while(m&&(m=m.nextSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;
}return n||null;
},contains:function(o,p){if(qx.core.Environment.get(g)){if(qx.dom.Node.isDocument(o)){var q=qx.dom.Node.getDocument(p);
return o&&q==o;
}else if(qx.dom.Node.isDocument(p)){return false;
}else{return o.contains(p);
}}else if(qx.core.Environment.get(f)){return !!(o.compareDocumentPosition(p)&16);
}else{while(p){if(o==p){return true;
}p=p.parentNode;
}return false;
}},isRendered:function(r){var s=r.ownerDocument||r.document;

if(qx.core.Environment.get(g)){if(!r.parentNode||!r.offsetParent){return false;
}return s.body.contains(r);
}else if(qx.core.Environment.get(f)){return !!(s.compareDocumentPosition(r)&16);
}else{while(r){if(r==s.body){return true;
}r=r.parentNode;
}return false;
}},isDescendantOf:function(t,u){return this.contains(u,t);
},getCommonParent:function(v,w){if(v===w){return v;
}
if(qx.core.Environment.get(g)){while(v&&qx.dom.Node.isElement(v)){if(v.contains(w)){return v;
}v=v.parentNode;
}return null;
}else{var x={};
var A=qx.core.ObjectRegistry;
var z,y;

while(v||w){if(v){z=A.toHashCode(v);

if(x[z]){return x[z];
}x[z]=v;
v=v.parentNode;
}
if(w){y=A.toHashCode(w);

if(x[y]){return x[y];
}x[y]=w;
w=w.parentNode;
}}return null;
}},getAncestors:function(B){return this._recursivelyCollect(B,b);
},getChildElements:function(C){C=C.firstChild;

if(!C){return [];
}var D=this.getNextSiblings(C);

if(C.nodeType===1){D.unshift(C);
}return D;
},getDescendants:function(E){return qx.lang.Array.fromCollection(E.getElementsByTagName(a));
},getFirstDescendant:function(F){F=F.firstChild;

while(F&&F.nodeType!=1){F=F.nextSibling;
}return F;
},getLastDescendant:function(G){G=G.lastChild;

while(G&&G.nodeType!=1){G=G.previousSibling;
}return G;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,d);
},getNextSiblings:function(I){return this._recursivelyCollect(I,c);
},_recursivelyCollect:function(J,K){var L=[];

while(J=J[K]){if(J.nodeType==1){L.push(J);
}}return L;
},getSiblings:function(M){return this.getPreviousSiblings(M).reverse().concat(this.getNextSiblings(M));
},isEmpty:function(N){N=N.firstChild;

while(N){if(N.nodeType===qx.dom.Node.ELEMENT||N.nodeType===qx.dom.Node.TEXT){return false;
}N=N.nextSibling;
}return true;
},cleanWhitespace:function(O){var P=O.firstChild;

while(P){var Q=P.nextSibling;

if(P.nodeType==3&&!/\S/.test(P.nodeValue)){O.removeChild(P);
}P=Q;
}}}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__dv=by;
this.__cy=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__dG=this.__cy;
}else{this.__dG=this.__cy.document.documentElement;
}this.__ex={};
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
}}},members:{__ey:null,__dv:null,__cy:null,__dG:null,__ex:null,__ez:null,__eA:null,__eB:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__eC();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__dv.dispatchEvent(bL,event);
}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__eC();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__dv.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[bN]);
}},__eC:function(){var bR=this.__dv.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__dv.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ey=qx.lang.Function.listener(this.__eD,this);
this.__eB=qx.lang.Function.listener(this.__eF,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,i,this.__ey);
Event.addNativeListener(this.__dG,m,this.__ey);
Event.addNativeListener(this.__dG,k,this.__eB);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,i,this.__ey);
Event.removeNativeListener(this.__dG,m,this.__ey);
Event.removeNativeListener(this.__dG,k,this.__eB);

for(var bU in (this.__eA||{})){var bT=this.__eA[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__eA);
},__eD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__ex[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__ex[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__ex[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__ex[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__eE(ca.target,cd,ce);
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
}}this.__ex[ci]=ch;
}},"opera":function(cj){this.__ez=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__eE:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__eA){this.__eA={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__eA[co]){return;
}var self=this;
this.__eA[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__eF(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__eA[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__eF:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

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
if(cB!=this.__ez){this._idealKeyHandler(0,this.__ez,cA,cz);
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
this.__ez=this.__dv=this.__cy=this.__dG=this.__ex=null;
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
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eG:null,__eH:null,__eI:null,__eJ:null,__eK:null,__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
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
}},tryActivate:function(S){var T=this.__fe(S);

if(T){this.setActive(T);
}},__em:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__eQ:function(){if(this._windowFocused){this._windowFocused=false;
this.__em(this._window,null,g,false);
}},__eR:function(){if(!this._windowFocused){this._windowFocused=true;
this.__em(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eI=qx.lang.Function.listener(this.__eW,this);
this.__eJ=qx.lang.Function.listener(this.__eV,this);
this.__eK=qx.lang.Function.listener(this.__eS,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eJ,true);
qx.bom.Event.addNativeListener(this._window,y,this.__eK,true);
},"mshtml":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eT,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
this.__eL=qx.lang.Function.listener(this.__fb,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG);
qx.bom.Event.addNativeListener(this._document,h,this.__eH);
qx.bom.Event.addNativeListener(this._document,b,this.__eM);
qx.bom.Event.addNativeListener(this._document,a,this.__eN);
qx.bom.Event.addNativeListener(this._document,d,this.__eL);
},"webkit":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
this.__eI=qx.lang.Function.listener(this.__eW,this);
this.__eJ=qx.lang.Function.listener(this.__eV,this);
this.__eL=qx.lang.Function.listener(this.__fb,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._document,d,this.__eL,false);
qx.bom.Event.addNativeListener(this._window,c,this.__eN,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.addNativeListener(this._window,g,this.__eJ,true);
},"opera":function(){this.__eG=qx.lang.Function.listener(this.__eX,this);
this.__eH=qx.lang.Function.listener(this.__eY,this);
this.__eM=qx.lang.Function.listener(this.__eT,this);
this.__eN=qx.lang.Function.listener(this.__eU,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.addNativeListener(this._window,z,this.__eM,true);
qx.bom.Event.addNativeListener(this._window,c,this.__eN,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eJ,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__eK,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH);
qx.bom.Event.removeNativeListener(this._document,b,this.__eM);
qx.bom.Event.removeNativeListener(this._document,a,this.__eN);
qx.bom.Event.removeNativeListener(this._document,d,this.__eL);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__eL,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__eN,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eI,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__eJ,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eG,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eH,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__eM,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__eN,true);
}}),__eS:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__ff(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__eT:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__eR();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__fd(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__eR();

if(this.__eO){this.setFocus(this.__eO);
delete this.__eO;
}
if(this.__eP){this.setActive(this.__eP);
delete this.__eP;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__ff(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__eU:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__eQ();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__eQ();
this.__eO=this.getFocus();
this.__eP=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__eV:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__eQ();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__eQ();
this.__eO=this.getFocus();
this.__eP=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__eW:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__eR();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__eR();

if(this.__eO){this.setFocus(this.__eO);
delete this.__eO;
}
if(this.__eP){this.setActive(this.__eP);
delete this.__eP;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__eX:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__fd(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__fd(bB);

if(bA){if(!this.__ff(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__ff(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__fd(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__fd(bK);

if(!this.__ff(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__eY:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__fa(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__fa(bQ));
},"default":null})),__fa:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__fb:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__ff(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__fc:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__fd:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__fc(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__fe:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__ff:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__em(cg,cf,v,true);
}
if(cf){this.__em(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__em(ci,ch,a,true);
}
if(ch){this.__em(ch,ci,b,true);
}if(ci){this.__em(ci,ch,g,false);
}
if(ch){this.__em(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fg=null;
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
},"default":function(p){if(this.__fh(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__fh(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__fh(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__fh(A)){var F=qx.bom.Range.get();
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
}},"gecko|webkit":function(K){if(this.__fh(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__fh(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__fh(O)){var T=qx.bom.Range.get();
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
}},"gecko|webkit":function(Y){if(this.__fh(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__fh(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__fh:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
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
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__dv=f;
this.__cy=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,__fi:null,__fj:null,__fk:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
this.__fi=qx.bom.Event.supportsEvent(this.__cy,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cy,this.__fi,this.__fk);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cy,this.__fi,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__fj!=p){this.__fj=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cy,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__dv=this.__cy=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__fl:null,__fm:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__fl=d;
this.__fm=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__fl=this.__fl;
g.__fm=this.__fm;
return g;
},getOrientation:function(){return this.__fl;
},isLandscape:function(){return this.__fm==c;
},isPortrait:function(){return this.__fm==a;
}}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dv=u;
this.__cy=u.getWindow();
this.__dG=this.__cy.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__fn:null,__fo:null,__dv:null,__cy:null,__dG:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:false,__fu:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__fv:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__em:function(F,G,H,I){if(!H){H=this.__fv(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,h,qx.event.type.Data,[G]);
},__fw:function(J,K,L){if(!L){L=this.__fv(J);
}var K=K||J.type;

if(K==r){this.__fx(J,L);
}else if(K==q){this.__fy(J,L);
}else if(K==s){this.__fz(J,L);
}},__fx:function(M,N){var O=M.changedTouches[0];
this.__fp=O.screenX;
this.__fq=O.screenY;
this.__fr=new Date().getTime();
this.__fs=M.changedTouches.length===1;
},__fy:function(P,Q){if(this.__fs&&P.changedTouches.length>1){this.__fs=false;
}},__fz:function(R,S){if(this.__fs){var T=R.changedTouches[0];
var V={x:T.screenX-this.__fp,y:T.screenY-this.__fq};
var W=qx.event.handler.Touch;

if(this.__fu==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__em(R,f,S,qx.event.type.Tap);
}else{var U=this.__fA(R,S,V);

if(U){R.swipe=U;
this.__em(R,c,S,qx.event.type.Swipe);
}}}},__fA:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__fr;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__fr,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fB:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fC(bi)){this.__ft=true;
}else if(bj==s){this.__ft=false;
}var bm=this.__fD(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fC:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fD:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__fv(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__fn=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,r,this.__fn);
Event.addNativeListener(this.__dG,q,this.__fn);
Event.addNativeListener(this.__dG,s,this.__fn);
Event.addNativeListener(this.__dG,m,this.__fn);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__fo=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,k,this.__fo);
Event.addNativeListener(this.__dG,o,this.__fo);
Event.addNativeListener(this.__dG,l,this.__fo);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,r,this.__fn);
Event.removeNativeListener(this.__dG,q,this.__fn);
Event.removeNativeListener(this.__dG,s,this.__fn);
Event.removeNativeListener(this.__dG,m,this.__fn);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,k,this.__fo);
Event.removeNativeListener(this.__dG,o,this.__fo);
Event.removeNativeListener(this.__dG,l,this.__fo);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__ft){return;
}var bt=this.__fB(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__fu=this.__fv(bu);
}this.__em(bu,bv);
this.__fw(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__dv=this.__cy=this.__dG=this.__fu=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.offsetX=d.offsetX;
e.offsetY=d.offsetY;
e.layerX=(d.offsetX||d.layerX);
e.layerY=(d.offsetY||d.layerY);
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__fF().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__fE(f).pageX;
},getDocumentTop:function(g){return this.__fE(g).pageY;
},getScreenLeft:function(h){return this.__fE(h).screenX;
},getScreenTop:function(j){return this.__fE(j).screenY;
},getViewportLeft:function(k){return this.__fE(k).clientX;
},getViewportTop:function(l){return this.__fE(l).clientY;
},getIdentifier:function(m){return this.__fE(m).identifier;
},__fE:function(n){n=n==null?0:n;
return this.__fF()[n];
},__fF:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
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
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",D="Alt",C="keyup",B="mouseup",A="keypress",z="dragend",y="on",x="mousedown",w="qxDraggable",v="Escape",u="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover",t="left";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);
this.__dv=E;
this.__dG=E.getWindow().document.documentElement;
this.__dv.addListener(this.__dG,x,this._onMouseDown,this);
this.__fQ();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__dv:null,__dG:null,__fG:null,__fH:null,__fI:null,__fJ:null,__fK:null,__e:null,__fL:null,__fM:null,__fN:false,__fO:0,__fP:0,canHandleEvent:function(F,G){},registerEvent:function(H,I,J){},unregisterEvent:function(K,L,M){},addType:function(N){this.__fI[N]=true;
},addAction:function(O){this.__fJ[O]=true;
},supportsType:function(P){return !!this.__fI[P];
},supportsAction:function(Q){return !!this.__fJ[Q];
},getData:function(R){if(!this.__fW||!this.__fG){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fI[R]){throw new Error("Unsupported data type: "+R+"!");
}
if(!this.__e[R]){this.__fL=R;
this.__em(q,this.__fH,this.__fG,false);
}
if(!this.__e[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__e[R]||null;
},getCurrentAction:function(){return this.__fM;
},addData:function(S,T){this.__e[S]=T;
},getCurrentType:function(){return this.__fL;
},isSessionActive:function(){return this.__fN;
},__fQ:function(){this.__fI={};
this.__fJ={};
this.__fK={};
this.__e={};
},__fR:function(){if(this.__fH==null){return;
}var W=this.__fJ;
var U=this.__fK;
var V=null;

if(this.__fW){if(U.Shift&&U.Control&&W.alias){V=k;
}else if(U.Shift&&U.Alt&&W.copy){V=j;
}else if(U.Shift&&W.move){V=b;
}else if(U.Alt&&W.alias){V=k;
}else if(U.Control&&W.copy){V=j;
}else if(W.move){V=b;
}else if(W.copy){V=j;
}else if(W.alias){V=k;
}}
if(V!=this.__fM){this.__fM=V;
this.__em(o,this.__fH,this.__fG,false);
}},__em:function(X,Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(X,qx.event.type.Drag,[bb,bc]);

if(Y!==ba){bd.setRelatedTarget(ba);
}return be.dispatchEvent(Y,bd);
},__fS:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(w)==y){return bf;
}bf=bf.parentNode;
}return null;
},__fT:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(s)==y){return bg;
}bg=bg.parentNode;
}return null;
},__fU:function(){this.__fH=null;
this.__dv.removeListener(this.__dG,c,this._onMouseMove,this,true);
this.__dv.removeListener(this.__dG,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__fQ();
},__fV:function(){if(this.__fN){this.__dv.removeListener(this.__dG,a,this._onMouseOver,this,true);
this.__dv.removeListener(this.__dG,h,this._onMouseOut,this,true);
this.__dv.removeListener(this.__dG,g,this._onKeyDown,this,true);
this.__dv.removeListener(this.__dG,C,this._onKeyUp,this,true);
this.__dv.removeListener(this.__dG,A,this._onKeyPress,this,true);
this.__em(z,this.__fH,this.__fG,false);
this.__fN=false;
}this.__fW=false;
this.__fG=null;
this.__fU();
},__fW:false,_onWindowBlur:function(e){this.__fV();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case D:case f:case d:if(!this.__fK[bh]){this.__fK[bh]=true;
this.__fR();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case D:case f:case d:if(this.__fK[bi]){this.__fK[bi]=false;
this.__fR();
}}},_onKeyPress:function(e){var bj=e.getKeyIdentifier();

switch(bj){case v:this.__fV();
}},_onMouseDown:function(e){if(this.__fN||e.getButton()!==t){return;
}var bk=this.__fS(e.getTarget());

if(bk){this.__fO=e.getDocumentLeft();
this.__fP=e.getDocumentTop();
this.__fH=bk;
this.__dv.addListener(this.__dG,c,this._onMouseMove,this,true);
this.__dv.addListener(this.__dG,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fW){this.__em(r,this.__fG,this.__fH,false,e);
}if(this.__fN){e.stopPropagation();
}this.__fV();
},_onMouseMove:function(e){if(this.__fN){if(!this.__em(u,this.__fH,this.__fG,true,e)){this.__fV();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fO)>3||Math.abs(e.getDocumentTop()-this.__fP)>3){if(this.__em(n,this.__fH,this.__fG,true,e)){this.__fN=true;
this.__dv.addListener(this.__dG,a,this._onMouseOver,this,true);
this.__dv.addListener(this.__dG,h,this._onMouseOut,this,true);
this.__dv.addListener(this.__dG,g,this._onKeyDown,this,true);
this.__dv.addListener(this.__dG,C,this._onKeyUp,this,true);
this.__dv.addListener(this.__dG,A,this._onKeyPress,this,true);
var bl=this.__fK;
bl.Control=e.isCtrlPressed();
bl.Shift=e.isShiftPressed();
bl.Alt=e.isAltPressed();
this.__fR();
}else{this.__em(z,this.__fH,this.__fG,false);
this.__fU();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__fT(bm);

if(bn&&bn!=this.__fG){this.__fW=this.__em(m,bn,this.__fH,true,e);
this.__fG=bn;
this.__fR();
}},_onMouseOut:function(e){var bp=this.__fT(e.getTarget());
var bo=this.__fT(e.getRelatedTarget());

if(bp&&bp!==bo&&bp==this.__fG){this.__em(l,this.__fG,bo,false,e);
this.__fG=null;
this.__fW=false;
qx.event.Timer.once(this.__fR,this,0);
}}},destruct:function(){this.__fH=this.__fG=this.__dv=this.__dG=this.__fI=this.__fJ=this.__fK=this.__e=null;
},defer:function(bq){qx.event.Registration.addHandler(bq);
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
(function(){var c="offline",b="online",a="qx.event.handler.Offline";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dv=d;
this.__cy=d.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dv:null,__cy:null,__fk:null,canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initObserver:function(){this.__fk=qx.lang.Function.listener(this._onNative,this);
qx.bom.Event.addNativeListener(this.__cy,c,this.__fk);
qx.bom.Event.addNativeListener(this.__cy,b,this.__fk);
},_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cy,c,this.__fk);
qx.bom.Event.removeNativeListener(this.__cy,b,this.__fk);
},_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cy,m.type,qx.event.type.Event,[]);
}),isOnline:function(){return !!this.__cy.navigator.onLine;
}},destruct:function(){this.__dv=null;
this._stopObserver();
delete qx.event.handler.Appear.__instances[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__gb:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__gc:{},__gd:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__gd[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__gd[t]=true;
}catch(e){qx.bom.Element.__gd[t]=false;
}}return qx.bom.Element.__gd[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__gc[w]){var v=qx.bom.Element.__gc[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__gc[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__gb;
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
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",A="'",z="htmlFor",y="longDesc",x="cellSpacing",w="frameBorder",v="='",u="useMap",t="innerText",s="innerHTML",r="tabIndex",p="dateTime",q="maxLength",n="html.element.textcontent",o="mshtml",l="cellPadding",m="browser.documentmode",k="colSpan";
qx.Class.define(e,{statics:{__ge:{names:{"class":b,"for":z,html:s,text:qx.core.Environment.get(n)?a:t,colspan:k,rowspan:d,valign:c,datetime:p,accesskey:f,tabindex:r,maxlength:q,readonly:g,longdesc:y,cellpadding:l,cellspacing:x,frameborder:w,usemap:u},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];
var E=this.__ge.runtime;

for(var D in B){if(!E[D]){C.push(D,v,B[D],A);
}}return C.join(j);
},get:function(F,name){var H=this.__ge;
var G;
name=H.names[name]||name;
if(qx.core.Environment.get(h)==o&&parseInt(qx.core.Environment.get(m),10)<8&&H.original[name]){G=F.getAttribute(name,2);
}else if(H.property[name]){G=F[name];

if(typeof H.propertyDefault[name]!==i&&G==H.propertyDefault[name]){if(typeof H.bools[name]===i){return null;
}else{return G;
}}}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
},set:function(I,name,J){if(typeof J===i){return;
}var K=this.__ge;
name=K.names[name]||name;
if(K.bools[name]){J=!!J;
}if(K.property[name]&&(!(I[name]===undefined)||K.qxProperties[name])){if(J==null){if(K.removeableProperties[name]){I.removeAttribute(name);
return;
}else if(typeof K.propertyDefault[name]!==i){J=K.propertyDefault[name];
}}I[name]=J;
}else{if(J===true){I.setAttribute(name,name);
}else if(J===false||J===null){I.removeAttribute(name);
}else{I.setAttribute(name,J);
}}},reset:function(L,name){this.set(L,name,null);
}}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cy=j.getWindow();
this.__cA=k;
j.addListener(this.__cy,f,this.releaseCapture,this);
j.addListener(this.__cy,e,this.releaseCapture,this);
j.addListener(this.__cy,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cA:null,__gf:null,__gg:true,__cy:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__gf&&this.__gh[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gg||!qx.dom.Hierarchy.contains(this.__gf,o)){o=this.__gf;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__gh:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__gf===q&&this.__gg==r){return;
}
if(this.__gf){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__gg=r;
this.__gf=q;
this.__cA.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gf;
},releaseCapture:function(){var s=this.__gf;

if(!s){return;
}this.__gf=null;
this.__cA.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gf=this.__cy=this.__cA=null;
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
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var p="String",o="qx.event.type.Event",n="_applyAutUri",m="changeSelectedTests",l="abstract",k="changeAutUri",j="",i="_applyTestCount",h="changeTestCount",g="changeState",c="_applyTestModel",f="changeTestSuiteState",e="init",b="_applyStatus",a="_applyTestSuiteState",d="testrunner.view.Abstract";
qx.Class.define(d,{type:l,extend:qx.core.Object,events:{runTests:o,stopTests:o},properties:{status:{init:j,check:p,apply:b},testSuiteState:{init:e,apply:a,event:f},testCount:{init:null,nullable:true,apply:i,event:h},testModel:{init:null,nullable:true,apply:c},selectedTests:{init:null,nullable:true,event:m},autUri:{check:p,nullable:true,event:k,apply:n}},members:{addTestResult:function(q){q.addListener(g,function(r){this._onTestChangeState(q);
},this);
},_onTestChangeState:function(s){this.error("Missing implementation of _onTestChangeState!");
},_applyStatus:function(t,u){this.info(t);
},_applyTestSuiteState:function(v,w){this.info("Test suite state: "+v);
},_applyTestCount:function(x,y){this.info(x+" tests pending.");
},_applyTestModel:function(z,A){this.error("Missing implementation of _applyTestModel!");
},_applyAutUri:function(B,C){}},destruct:function(){this.removeAllBindings();
}});
})();
(function(){var b="Boolean",a="testrunner.view.MAutoRun";
qx.Mixin.define(a,{construct:function(){var c=qx.util.Uri.parseUri(location.href,true);

if(c.queryKey&&c.queryKey.autorun){this.setAutoRun(true);
}},properties:{autoRun:{check:b,init:false}}});
})();
(function(){var bQ="div",bP="",bO="none",bN="disabled",bM="checked",bL="framelogcontainer",bK="display",bJ="change",bI="block",bH="checkbox",bu="testscontainer",bt="li",bs="input",br="cb_",bq="execute",bp="error",bo="class",bn="click",bm="controls",bl="Integer",bX="#stop",bY="ul",bV="test",bW="ready",bT="testFilter",bU="togglealltests",bR="#",bS="type",ca="success",cb="togglestack",bA="#testfilter,",bz="Boolean",bC="finished",bB="failure",bE="#togglealltests, ",bD="running",bG="togglepassed",bF="selectedTests",by='<p id="status"></p>',bx="skip",a="^.*",b="iframesrc",c='<label for="togglestack">Show stack trace</label>',d="loading",e="<h1>qooxdoo Test Runner</h1>",f="Test suite finished. ",g="testfilter",h="footer",j=" Passed: ",k="testcontrols",cf="t_",ce=" Skipped: ",cd="Invalid test file selected!",cc="resultslist",cj='<label for="togglepassed">Show successful tests</label>',ci='<label for="togglealltests">Select/deselect all listed tests</label>',ch="Running tests...",cg='<ul id="testlist"></ul>',cl='<input type="text" id="iframesrc"></input>',ck='<input type="submit" title="Reload the test suite (Ctrl+Shift+R)" id="setiframesrc" value="Reload"></input>',K='body{margin:0;padding:0;font-family:Verdana,Arial,"sans-serif"}div{margin:0;padding:0}h1{font-size:1.1em;padding:8px 10px;margin:0 0 15px 0;background-color:#E8E8E8;border-bottom:1px solid #B5B5B5;color:#000;font-weight:bold;text-shadow:0 1px 1px #fff}input[type=submit]{color:#fff;background-color:#B5B5B5;font-weight:bold;padding:6px;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;border-width:0}input[type=text]{border:1px solid #B5B5B5;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;padding:2px}input[type=checkbox]{margin:5px 8px}label{font-size:.9em}#controls{margin:0 10px 15px 10px}#run{margin-right:10px;background-color:#007F00}#run:disabled{background-color:#659E67;color:#fff!important}#stop{margin-right:10px;background-color:#9E0000}#stop:disabled{background-color:#9E5E5E;color:#fff!important}#framelogcontainer{height:150px;margin:0 10px 10px 10px}#framecontainer{height:150px;float:left;width:50%}#log{width:49%;height:150px;float:right;overflow:auto;font-family:Courier,monotype;font-size:.8em;border:1px solid #B5B5B5}#autframe{display:inline-block;border:1px solid #B5B5B5;margin-top:5px;max-height:120px;width:99%}#iframesrc{width:83%;margin-right:10px}#setiframesrc{background-color:#777;padding-top:2px;padding-bottom:2px}#testcontrols{clear:both;font-size:1em;padding:0 10px 0 10px;margin-bottom:10px}#testcontrols input{margin-left:10px}#testscontainer{}#tests{float:left;width:50%;padding-bottom:30px;font-size:.9em}#tests ul{border-top:1px solid #E5E5E5;margin:0;padding:0;list-style-type:none}#tests ul li{border-bottom:1px solid #E5E5E5;border-top:1px solid #fff;background-color:#F4F4F4}#results{float:right;width:49%;margin:0 0 30px 0;font-size:.9em}#results ul{margin:0;padding:0;list-style-type:none}#results ul li{margin:0 0 2px 0;padding:2px;font-family:"Consolas","Courier New",monospace;font-weight:bold;font-size:1em;color:#134275}#results ul li ul li{margin:3px 0 3px 10px}.stacktrace{font-weight:normal}.success{background-color:#FAFFED;border-left:2px solid #DEFF83}.t_success{color:#007F00}.wait{background-color:#FFFBC4;border-left:2px solid #FFFFD8}.t_wait{color:#FF7F00}.skip{background-color:#F4F4F4;border-left:2px solid #E5E5E5;color:#6EA4BC}.t_skip{color:#666}.failure,.error{background-color:#FEF4F4;border-left:2px solid #9D1111}.t_failure,.t_error{color:#9E0000}#aut iframe{width:100%}#footer{position:fixed;bottom:0;width:100%;background-color:#E8E8E8;border-top:1px solid #B5B5B5;color:#000}#status{margin:6px 8px;font-size:.9em}#status .error{color:#F00}',L="#testlist ",I="autframe",J="aborted",O="results",P='<label for="testfilter">Filter tests</label>',M=".success",N="_applyShowStack",G="#testlist input:checkbox",H="ig",t="[for=cb_",s="framecontainer",v="#testlist li label",u="testlist",p="stopTests",o="Ctrl+Shift+R",r=".*",q="Test run stopped",n="testrunner/view/html/css/testrunner.css",m="aut",U="stop",V="run",W="tests",X=".stacktrace",Q="runTests",R=" tests pending",S="#cb_",T="testrunner.view.Html",Y="#run",ba="status",D="Test suite ready",C="log",B="Ctrl+R",A='<input type="submit" title="Run selected tests (Ctrl+R)" id="run" value="Run Tests"></input>',z="_applyShowPassed",y="init",x=" tests ready to run",w="interval",F="#run, ",E="setiframesrc",bb='<input type="submit" title="Stop the test suite (Ctrl+S)" id="stop" value="Stop Tests"></input>',bc="]",bd="stacktrace",be="Ctrl+S",bf=" Failed: ",bg='<input type="text" id="testfilter" />',bh='<li><input checked="checked" type="checkbox" id="{{id}}"><label for="{{id}}">{{name}}</label></li>',bi='<ul id="resultslist"></ul>',bj='Stack Trace:<br/>',bk="fullName",bw="Waiting for tests",bv="Loading tests...";
qx.Class.define(T,{extend:testrunner.view.Abstract,include:[testrunner.view.MAutoRun],construct:function(cm){this.__So={rootElement:cm||document.body};
if(!false&&true){qx.bom.Stylesheet.createElement(K);
}else{var cn=qx.util.ResourceManager.getInstance().toUri(n);
qx.bom.Stylesheet.includeFile(cn);
}this._attachHeader();
this._attachMainControls();
this._attachTestControls();
this._attachTestList();
this._attachResultsList();
this._attachFooter();
this._makeCommands();
this.__Sp={};
},properties:{showStack:{check:bz,init:true,apply:N},showPassed:{check:bz,init:null,nullable:true,apply:z},failedTestCount:{check:bl,init:0},successfulTestCount:{check:bl,init:0},skippedTestCount:{check:bl,init:0}},members:{__So:null,__Sq:null,__Sr:null,__Ss:null,__St:null,__Sp:null,_attachHeader:function(){this.__So.rootElement.innerHTML+=e;
},_attachMainControls:function(){var cp=document.createElement(bQ);
cp.id=bm;
cp.innerHTML=A;
cp.innerHTML+=bb;
var cq=qx.bom.Input.create(bH,{id:cb,checked:bM});
cp.appendChild(cq);
cp.innerHTML+=c;
var co=qx.bom.Input.create(bH,{id:bG,checked:bM});
cp.appendChild(co);
cp.innerHTML+=cj;
this.__So.rootElement.appendChild(cp);
this.__So.runButton=document.getElementById(V);
qx.event.Registration.addListener(this.__So.runButton,bn,this.__Su,this);
this.__So.stopButton=document.getElementById(U);
qx.event.Registration.addListener(this.__So.stopButton,bn,this.__Sv,this);
var cq=document.getElementById(cb);
qx.event.Registration.addListener(cq,bJ,function(cr){this.setShowStack(cr.getData());
},this);
var co=document.getElementById(bG);
qx.event.Registration.addListener(co,bJ,function(cs){this.setShowPassed(cs.getData());
},this);
},_attachTestControls:function(){var ct=document.createElement(bQ);
ct.id=k;
var cu=qx.bom.Input.create(bH,{id:bU,checked:bM});
ct.innerHTML+=P;
ct.innerHTML+=bg;
ct.appendChild(cu);
ct.innerHTML+=ci;
this.__So.rootElement.appendChild(ct);
this.__So.allTestsToggle=document.getElementById(bU);
qx.event.Registration.addListener(this.__So.allTestsToggle,bJ,function(cv){var cw=cv.getTarget().checked;
this.toggleAllTests(cw,true);
},this);
this.__Sr=new qx.event.Timer(500);
this.__Sr.addListener(w,function(cx){var cy=this.__So.filterInput.value;
this.__Sr.stop();
this.filterTests(cy);
},this);
this.__So.filterInput=document.getElementById(g);
qx.event.Registration.addListener(this.__So.filterInput,bs,function(cz){this.__Sr.restart();
},this);
},_attachTestList:function(){var parent=document.getElementById(bu);

if(!parent){parent=document.createElement(bQ);
parent.id=bu;
this.__So.rootElement.appendChild(parent);
}var cA=document.createElement(bQ);
cA.id=W;
cA.innerHTML+=cg;
parent.appendChild(cA);
this.__So.elemTestList=document.getElementById(u);
},_attachResultsList:function(){var parent=document.getElementById(bu);

if(!parent){parent=document.createElement(bQ);
parent.id=bu;
this.__So.rootElement.appendChild(parent);
}var cB=document.createElement(bQ);
cB.id=O;
cB.innerHTML=bi;
parent.appendChild(cB);
this.__So.elemResultsList=document.getElementById(cc);
},_attachFooter:function(){var cC=document.createElement(bQ);
cC.id=h;
cC.innerHTML=by;
this.__So.rootElement.appendChild(cC);
this.__So.elemStatus=document.getElementById(ba);
},clearResults:function(){this.__So.elemResultsList.innerHTML=bP;
$(v).setAttribute(bo,bP);
},clearTestList:function(){this.__So.elemTestList.innerHTML=bP;
},__Su:function(){if(this.getTestSuiteState()==bC){this.reset();
}this.fireEvent(Q);
},__Sv:function(){this.fireEvent(p);
},__Sw:function(){var cD=this.__So.iframeSourceInput.value;
this.resetAutUri();
this.setAutUri(cD);
},getIframe:function(){if(this.__So.elemIframe){return this.__So.elemIframe;
}var parent=document.getElementById(bL);

if(!parent){parent=document.createElement(bQ);
parent.id=bL;
var cH=document.getElementById(bm);
qx.dom.Element.insertAfter(parent,cH);
}var cE=document.createElement(bQ);
cE.id=s;
parent.appendChild(cE);
cE.innerHTML+=cl;
cE.innerHTML+=ck;
var cF=document.createElement(bQ);
cF.id=m;
this.__So.elemIframe=qx.bom.Iframe.create({id:I});
cE.appendChild(this.__So.elemIframe);
this.__So.iframeSourceInput=document.getElementById(b);
var cG=document.getElementById(E);
qx.event.Registration.addListener(cG,bn,this.__Sw,this);
return this.__So.elemIframe;
},getLogAppenderElement:function(){if(this.__So.elemLogAppender){return this.__So.elemLogAppender;
}var parent=document.getElementById(bL);

if(!parent){parent=document.createElement(bQ);
parent.id=bL;
var cJ=document.getElementById(bm);
qx.dom.Element.insertAfter(parent,cJ);
}var cI=this.__So.elemLogAppender=document.createElement(bQ);
cI.id=C;
parent.appendChild(cI);
return this.__So.elemLogAppender;
},toggleAllTests:function(cK,cL){var cN=[];
var cM=document.getElementsByTagName(bs);

for(var i=0,l=cM.length;i<l;i++){if(cM[i].type==bH&&cM[i].id.indexOf(br)==0){if(cL&&cM[i].parentNode.style.display==bO){continue;
}cM[i].checked=cK;
var cO=this.__Sq[cM[i].id.substr(3)];
cN.push(cO);
}}this.__Sz(cN,cK);
},filterTests:function(cP){var cU=new RegExp(a+cP+r,H);
var cS=[];

for(var i=0,l=this.__St.length;i<l;i++){if(this.__St[i].match(cU)){cS.push(this.__St[i]);
}}this.toggleAllTests(false,false);
this.hideAllTestListEntries();

if(cS.length>0){var cV=[];

for(var i=0,l=cS.length;i<l;i++){var cT=this.__Sx(cS[i]);
var cR=br+cT;
var cQ=document.getElementById(cR);
cQ.parentNode.style.display=bI;

if(this.__So.allTestsToggle.checked){cQ.checked=true;
cV.push(cS[i]);
}}this.__Sz(cV,true);
}qx.bom.Cookie.set(bT,cP);
},hideAllTestListEntries:function(){var cW=qx.bom.Selector.query(bt,this.__So.elemTestList);

for(var i=0,l=cW.length;i<l;i++){cW[i].style.display=bO;
}},__Sx:function(cX){var cY=cX.replace(/[\W]/ig,bP);
return cY;
},reset:function(){this.resetFailedTestCount();
this.resetSuccessfulTestCount();
this.resetSkippedTestCount();
this.clearResults();
this.__Sp={};
var da=this.getSelectedTests();
if(da.length>0){da.push(da.pop());
}},_onTestChangeState:function(db){var dd=db.getFullName();
var dg=db.getState();

switch(dg){case bx:if(!this.__Sp[dd]){this.__Sp[dd]=dg;
this.setSkippedTestCount(this.getSkippedTestCount()+1);
}break;
case bp:case bB:if(!this.__Sp[dd]){this.__Sp[dd]=dg;
this.setFailedTestCount(this.getFailedTestCount()+1);
}break;
case ca:if(!this.__Sp[dd]){this.__Sp[dd]=dg;
this.setSuccessfulTestCount(this.getSuccessfulTestCount()+1);
}}var dk=db.getExceptions();
var di=this.__Sx(dd);
this._markTestInList(dd,dg);
var dh=document.getElementById(di);

if(dh){qx.bom.element.Attribute.set(dh,bo,dg);
qx.bom.Collection.create(dh).children(bY).destroy();
}else{var df=qx.bom.Element.create(bt,{id:di,"class":dg});

if(this.__So.elemResultsList.firstChild){qx.dom.Element.insertBefore(df,this.__So.elemResultsList.firstChild);
}else{this.__So.elemResultsList.appendChild(df);
}df.innerHTML=dd;
dh=document.getElementById(di);
}
if(dg==ca&&this.getShowPassed()===false){qx.bom.element.Style.set(dh,bK,bO);
}
if((dg==bp||dg==bB)&&dk&&dk.length>0){var de=document.createElement(bY);

for(var i=0,l=dk.length;i<l;i++){var dj=dk[i].exception;
var dn=document.createElement(bt);
dn.innerHTML+=dj;
var dc=db.getStackTrace(dj);

if(dc.length>0){var dl=document.createElement(bQ);
qx.bom.element.Class.add(dl,bd);
dl.innerHTML=bj+dc;
var dm=this.getShowStack()?bI:bO;
qx.bom.element.Style.set(dl,bK,dm);
dn.appendChild(dl);
}de.appendChild(dn);
}dh.appendChild(de);
}},_markTestInList:function(dp,dq){var dr=this.__Sx(dp);
var ds=t+dr+bc;
$(ds).setAttribute(bo,bP);
$(ds).addClass(cf+dq);
},__Sy:function(dt){var dv=this.__Sq[dt.getTarget().id.substr(3)];
var du=dt.getTarget().checked;
this.__Sz([dv],du);
},__Sz:function(dw,dx){var dB=this.getSelectedTests().copy();

for(var i=0,l=dw.length;i<l;i++){var dz=dw[i];
var dA=this._listContainsTest(dB,dz);

if(dx&&!dA){var dy=testrunner.runner.ModelUtil.getItemsByProperty(this.__Ss,bk,dz)[0];
dB.push(dy);
}else if(!dx&&dA){this._removeTestFromList(dB,dz);
}}this.setSelectedTests(dB);
this._writeCookie();
},_writeCookie:function(){var dC=this.getSelectedTests();
var dD=[];

for(var i=0,l=dC.length;i<l;i++){dD.push(dC.getItem(i).getFullName());
}qx.bom.Cookie.set(bF,dD.join(bR));
},_applyStatus:function(dE,dF){if(!dE[0]||(dE===dF)){return;
}this.__So.elemStatus.innerHTML=dE;
},_applyTestSuiteState:function(dG,dH){switch(dG){case y:this.setStatus(bw);
break;
case d:this.setStatus(bv);
$(bA+bE+F+bX).setAttribute(bN,bN);
break;
case bW:this.setStatus(D);
var dJ=qx.bom.Cookie.get(bT);

if(dJ){this.__So.filterInput.value=dJ;
this.filterTests(dJ);
}else{this._applyTestCount(this.getTestCount());
}$(bA+bE+Y).setAttribute(bN,bP);
$(bX).setAttribute(bN,bN);
this.setFailedTestCount(0);
this.setSuccessfulTestCount(0);

if(this.getAutoRun()){this.__Su();
}break;
case bD:this.setStatus(ch);
this.__So.filterInput.disabled=true;
this.__So.allTestsToggle.disabled=true;
this.__So.runButton.disabled=true;
this.__So.stopButton.disabled=false;
break;
case bC:var dI=f;
dI+=j+this.getSuccessfulTestCount();
dI+=bf+this.getFailedTestCount();
dI+=ce+this.getSkippedTestCount();
this.setStatus(dI);
this.__So.filterInput.disabled=false;
this.__So.allTestsToggle.disabled=false;
this.__So.runButton.disabled=false;
this.__So.stopButton.disabled=true;
break;
case J:this.setStatus(q);
this.__So.filterInput.disabled=false;
this.__So.allTestsToggle.disabled=false;
this.__So.runButton.disabled=false;
this.__So.stopButton.disabled=true;
break;
case bp:this.setStatus(cd);
this.__So.filterInput.disabled=false;
this.__So.allTestsToggle.disabled=false;
this.__So.runButton.disabled=false;
this.__So.stopButton.disabled=true;
break;
}},_applyTestModel:function(dK,dL){if(dK==null){return;
}this.__Ss=dK;
var dM=testrunner.runner.ModelUtil.getItemsByProperty(dK,bS,bV);
this.setSelectedTests(new qx.data.Array());
this.__Sq={};
this.clearTestList();
this.clearResults();
this.__St=[];

for(var i=0,l=dM.length;i<l;i++){this.__St.push(dM[i].getFullName());
}this._createTestList(this.__St);
this._applyCookieSelection();
},_applyCookieSelection:function(){var dO=qx.bom.Cookie.get(bF);

if(dO){var dO=dO.split(bR);
var dQ=[];

for(var i=0,l=dO.length;i<l;i++){var dP=testrunner.runner.ModelUtil.getItemByFullName(this.__Ss,dO[i]);

if(dP){dQ.push(dP.getFullName());
}}
if(dQ.length>0){this.toggleAllTests(false);
this.__Sz(dQ,true);

for(var i=0,l=dQ.length;i<l;i++){this._setTestChecked(dQ[i],true);
}}}else{var dN=testrunner.runner.ModelUtil.getItemsByProperty(this.__Ss,bS,bV);
this.getSelectedTests().append(dN);
}},_setTestChecked:function(dR,dS){var dU=dS?bM:bP;
var dT=dR?S+this.__Sx(dR):bs;
qx.bom.Collection.query(L+dT).setAttribute(bM,dU);
},_removeTestFromList:function(dV,dW){for(var i=0,l=dV.length;i<l;i++){if(dV.getItem(i).getFullName()===dW){dV.remove(dV.getItem(i));
return;
}}},_listContainsTest:function(dX,dY){for(var i=0,l=dX.length;i<l;i++){if(dX.getItem(i).getFullName()===dY){return true;
}}return false;
},_createTestList:function(ea){var eb=bh;

for(var i=0,l=ea.length;i<l;i++){var ec=ea[i];
var ed=this.__Sx(ec);
this.__Sq[ed]=ec;
var ee=qx.bom.Template.toHtml(eb,{id:br+ed,name:ec});
this.__So.elemTestList.innerHTML+=ee;
}$(G).addListener(bJ,this.__Sy,this);
},_applyTestCount:function(ef,eg){if(ef==null){return;
}var eh=this.getTestSuiteState();

switch(eh){case bW:this.setStatus(ef+x);
break;
case bD:this.setStatus(ef+R);
break;
}},_applyAutUri:function(ei,ej){if(!ei||ei==ej){return;
}this.__So.iframeSourceInput.value=ei;
qx.bom.Iframe.setSource(this.__So.elemIframe,ei);
},_applyShowStack:function(ek,el){if(ek==el){return;
}$(X).setStyle(bK,ek?bI:bO);
},_applyShowPassed:function(em,en){if(em===null||em===en){return;
}$(M).setStyle(bK,em?bI:bO);
},_makeCommands:function(){var eq=new qx.ui.core.Command(B);
eq.addListener(bq,this.__Su,this);
var ep=new qx.ui.core.Command(be);
ep.addListener(bq,this.__Sv,this);
var eo=new qx.ui.core.Command(o);
eo.addListener(bq,this.__Sw,this);
}}});
})();
(function(){var m="input",k="engine.name",j="change",h="text",g="textarea",f="password",d="engine.version",c="radio",b="checkbox",a="keypress",A="browser.documentmode",z="opera",y="keyup",x="mshtml",w="blur",v="keydown",u="propertychange",t="browser.version",s="select-multiple",r="value",p="select",q="qx.event.handler.Input",n="checked";
qx.Class.define(q,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get(k)==z)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__my:false,__mz:null,__mq:null,__mr:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===m&&(D===m||D===g)){return true;
}
if(C===j&&(D===m||D===g||D===p)){return true;
}return false;
},registerEvent:function(E,F,G){if(qx.core.Environment.get(k)==x&&(qx.core.Environment.get(d)<9||(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)<9))){if(!E.__mA){var H=E.tagName.toLowerCase();
var I=E.type;

if(I===h||I===f||H===g||I===b||I===c){qx.bom.Event.addNativeListener(E,u,this._onPropertyWrapper);
}
if(I!==b&&I!==c){qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}
if(I===h||I===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}E.__mA=true;
}}else{if(F===m){this.__mB(E);
}else if(F===j){if(E.type===c||E.type===b){qx.bom.Event.addNativeListener(E,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(E,j,this._onChangeValueWrapper);
}if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(E.type===h||E.type===f){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,E);
qx.bom.Event.addNativeListener(E,a,this._onKeyPressWrapped);
}}}}},__mB:qx.core.Environment.select(k,{"mshtml":function(J){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.addNativeListener(J,m,this._onInputWrapper);

if(J.type===h||J.type===f||J.type===g){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,J);
qx.bom.Event.addNativeListener(J,y,this._inputFixWrapper);
}}},"webkit":function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&L==g){qx.bom.Event.addNativeListener(K,a,this._onInputWrapper);
}qx.bom.Event.addNativeListener(K,m,this._onInputWrapper);
},"opera":function(M){qx.bom.Event.addNativeListener(M,y,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(M,v,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(M,w,this._onBlurWrapper);
qx.bom.Event.addNativeListener(M,m,this._onInputWrapper);
},"default":function(N){qx.bom.Event.addNativeListener(N,m,this._onInputWrapper);
}}),unregisterEvent:function(O,P){if(qx.core.Environment.get(k)==x&&qx.core.Environment.get(d)<9&&qx.core.Environment.get(A)<9){if(O.__mA){var Q=O.tagName.toLowerCase();
var R=O.type;

if(R===h||R===f||Q===g||R===b||R===c){qx.bom.Event.removeNativeListener(O,u,this._onPropertyWrapper);
}
if(R!==b&&R!==c){qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}
if(R===h||R===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}
try{delete O.__mA;
}catch(S){O.__mA=null;
}}}else{if(P===m){this.__mC(O);
}else if(P===j){if(O.type===c||O.type===b){qx.bom.Event.removeNativeListener(O,j,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(O,j,this._onChangeValueWrapper);
}}
if((qx.core.Environment.get(k)==z)||(qx.core.Environment.get(k)==x)){if(O.type===h||O.type===f){qx.bom.Event.removeNativeListener(O,a,this._onKeyPressWrapped);
}}}},__mC:qx.core.Environment.select(k,{"mshtml":function(T){if(qx.core.Environment.get(d)>=9&&qx.core.Environment.get(A)>=9){qx.bom.Event.removeNativeListener(T,m,this._onInputWrapper);

if(T.type===h||T.type===f||T.type===g){qx.bom.Event.removeNativeListener(T,y,this._inputFixWrapper);
}}},"webkit":function(U){var V=U.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(d))<532&&V==g){qx.bom.Event.removeNativeListener(U,a,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(U,m,this._onInputWrapper);
},"opera":function(W){qx.bom.Event.removeNativeListener(W,y,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(W,v,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(W,w,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(W,m,this._onInputWrapper);
},"default":function(X){qx.bom.Event.removeNativeListener(X,m,this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select(k,{"mshtml|opera":function(e,Y){if(e.keyCode===13){if(Y.value!==this.__mq){this.__mq=Y.value;
qx.event.Registration.fireEvent(Y,j,qx.event.type.Data,[Y.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select(k,{"mshtml":function(e,ba){if(e.keyCode===46||e.keyCode===8){if(ba.value!==this.__mr){this.__mr=ba.value;
qx.event.Registration.fireEvent(ba,m,qx.event.type.Data,[ba.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__my=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select(k,{"opera":function(e){if(e.keyCode===13){this.__my=false;
}},"default":null}),_onBlur:qx.core.Environment.select(k,{"opera":function(e){if(this.__mz&&qx.core.Environment.get(t)<10.6){window.clearTimeout(this.__mz);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bc=qx.bom.Event.getTarget(e);
var bb=bc.tagName.toLowerCase();
if(!this.__my||bb!==m){if((qx.core.Environment.get(k)==z)&&qx.core.Environment.get(t)<10.6){this.__mz=window.setTimeout(function(){qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
},0);
}else{qx.event.Registration.fireEvent(bc,m,qx.event.type.Data,[bc.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var be=qx.bom.Event.getTarget(e);
var bd=be.value;

if(be.type===s){var bd=[];

for(var i=0,o=be.options,l=o.length;i<l;i++){if(o[i].selected){bd.push(o[i].value);
}}}qx.event.Registration.fireEvent(be,j,qx.event.type.Data,[bd]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var bf=qx.bom.Event.getTarget(e);

if(bf.type===c){if(bf.checked){qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.value]);
}}else{qx.event.Registration.fireEvent(bf,j,qx.event.type.Data,[bf.checked]);
}}),_onProperty:qx.core.Environment.select(k,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var bg=qx.bom.Event.getTarget(e);
var bh=e.propertyName;

if(bh===r&&(bg.type===h||bg.type===f||bg.tagName.toLowerCase()===g)){if(!bg.$$inValueSet){qx.event.Registration.fireEvent(bg,m,qx.event.type.Data,[bg.value]);
}}else if(bh===n){if(bg.type===b){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.checked]);
}else if(bg.checked){qx.event.Registration.fireEvent(bg,j,qx.event.type.Data,[bg.value]);
}}}),"default":function(){}})},defer:function(bi){qx.event.Registration.addHandler(bi);
}});
})();
(function(){var v="",u="select",t="engine.name",s="soft",r="off",q="textarea",p="auto",o="wrap",n="text",m="mshtml",d="number",k="checkbox",g="select-one",c="input",b="option",f="value",e="radio",h="qx.bom.Input",a="nowrap",j="normal";
qx.Class.define(h,{statics:{__fI:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(w,x,y){var x=x?qx.lang.Object.clone(x):{};
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
(function(){var j="borderTopWidth",i="borderLeftWidth",h="engine.name",g="scroll",f="engine.version",e="marginTop",d="marginLeft",c="border-box",b="borderBottomWidth",a="borderRightWidth",D="auto",C="padding",B="browser.quirksmode",A="qx.bom.element.Location",z="paddingLeft",y="static",x="marginBottom",w="visible",v="BODY",u="paddingBottom",q="paddingTop",r="gecko",o="marginRight",p="mshtml",m="position",n="margin",k="overflow",l="paddingRight",s="browser.documentmode",t="border";
qx.Class.define(A,{statics:{__gl:function(E,F){return qx.bom.element.Style.get(E,F,qx.bom.element.Style.COMPUTED_MODE,false);
},__gm:function(G,H){return parseInt(qx.bom.element.Style.get(G,H,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gn:function(I){var K=0,top=0;
var J=qx.dom.Node.getWindow(I);
K-=qx.bom.Viewport.getScrollLeft(J);
top-=qx.bom.Viewport.getScrollTop(J);
return {left:K,top:top};
},__go:qx.core.Environment.select(h,{"mshtml":function(L){var N=qx.dom.Node.getDocument(L);
var M=N.body;
var O=0;
var top=0;
O-=M.clientLeft+N.documentElement.clientLeft;
top-=M.clientTop+N.documentElement.clientTop;

if(!qx.core.Environment.get(B)){O+=this.__gm(M,i);
top+=this.__gm(M,j);
}return {left:O,top:top};
},"webkit":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=Q.offsetLeft;
var top=Q.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<530.17){S+=this.__gm(Q,i);
top+=this.__gm(Q,j);
}return {left:S,top:top};
},"gecko":function(T){var U=qx.dom.Node.getDocument(T).body;
var V=U.offsetLeft;
var top=U.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<1.9){V+=this.__gm(U,d);
top+=this.__gm(U,e);
}if(qx.bom.element.BoxSizing.get(U)!==c){V+=this.__gm(U,i);
top+=this.__gm(U,j);
}return {left:V,top:top};
},"default":function(W){var X=qx.dom.Node.getDocument(W).body;
var Y=X.offsetLeft;
var top=X.offsetTop;
return {left:Y,top:top};
}}),__gp:qx.core.Environment.select(h,{"gecko":function(ba){if(ba.getBoundingClientRect){var bd=ba.getBoundingClientRect();
var be=Math.round(bd.left);
var top=Math.round(bd.top);
}else{var be=0;
var top=0;
var bb=qx.dom.Node.getDocument(ba).body;
var bc=qx.bom.element.BoxSizing;

if(bc.get(ba)!==c){be-=this.__gm(ba,i);
top-=this.__gm(ba,j);
}
while(ba&&ba!==bb){be+=ba.offsetLeft;
top+=ba.offsetTop;
if(bc.get(ba)!==c){be+=this.__gm(ba,i);
top+=this.__gm(ba,j);
}if(ba.parentNode&&this.__gl(ba.parentNode,k)!=w){be+=this.__gm(ba.parentNode,i);
top+=this.__gm(ba.parentNode,j);
}ba=ba.offsetParent;
}}return {left:be,top:top};
},"default":function(bf){var bh=qx.dom.Node.getDocument(bf);
if(bf.getBoundingClientRect){var bi=bf.getBoundingClientRect();
var bj=bi.left;
var top=bi.top;
}else{var bj=bf.offsetLeft;
var top=bf.offsetTop;
bf=bf.offsetParent;
var bg=bh.body;
while(bf&&bf!=bg){bj+=bf.offsetLeft;
top+=bf.offsetTop;
bj+=this.__gm(bf,i);
top+=this.__gm(bf,j);
bf=bf.offsetParent;
}}return {left:bj,top:top};
}}),get:function(bk,bl){if(bk.tagName==v){var location=this.__gq(bk);
var bs=location.left;
var top=location.top;
}else{var bm=this.__go(bk);
var br=this.__gp(bk);
var scroll=this.__gn(bk);
var bs=br.left+bm.left-scroll.left;
var top=br.top+bm.top-scroll.top;
}var bn=bs+bk.offsetWidth;
var bo=top+bk.offsetHeight;

if(bl){if(bl==C||bl==g){var bp=qx.bom.element.Overflow.getX(bk);

if(bp==g||bp==D){bn+=bk.scrollWidth-bk.offsetWidth+this.__gm(bk,i)+this.__gm(bk,a);
}var bq=qx.bom.element.Overflow.getY(bk);

if(bq==g||bq==D){bo+=bk.scrollHeight-bk.offsetHeight+this.__gm(bk,j)+this.__gm(bk,b);
}}
switch(bl){case C:bs+=this.__gm(bk,z);
top+=this.__gm(bk,q);
bn-=this.__gm(bk,l);
bo-=this.__gm(bk,u);
case g:bs-=bk.scrollLeft;
top-=bk.scrollTop;
bn-=bk.scrollLeft;
bo-=bk.scrollTop;
case t:bs+=this.__gm(bk,i);
top+=this.__gm(bk,j);
bn-=this.__gm(bk,a);
bo-=this.__gm(bk,b);
break;
case n:bs-=this.__gm(bk,d);
top-=this.__gm(bk,e);
bn+=this.__gm(bk,o);
bo+=this.__gm(bk,x);
break;
}}return {left:bs,top:top,right:bn,bottom:bo};
},__gq:function(bt){var top=bt.offsetTop;
var bu=bt.offsetLeft;

if(qx.core.Environment.get(h)!==p||!((parseFloat(qx.core.Environment.get(f))<8||qx.core.Environment.get(s)<8)&&!qx.core.Environment.get(B))){top+=this.__gm(bt,e);
bu+=this.__gm(bt,d);
}
if(qx.core.Environment.get(h)===r){top+=this.__gm(bt,i);
bu+=this.__gm(bt,j);
}return {left:bu,top:top};
},getLeft:function(bv,bw){return this.get(bv,bw).left;
},getTop:function(bx,by){return this.get(bx,by).top;
},getRight:function(bz,bA){return this.get(bz,bA).right;
},getBottom:function(bB,bC){return this.get(bB,bC).bottom;
},getRelative:function(bD,bE,bF,bG){var bI=this.get(bD,bF);
var bH=this.get(bE,bG);
return {left:bI.left-bH.left,top:bI.top-bH.top,right:bI.right-bH.right,bottom:bI.bottom-bH.bottom};
},getPosition:function(bJ){return this.getRelative(bJ,this.getOffsetParent(bJ));
},getOffsetParent:function(bK){var bM=bK.offsetParent||document.body;
var bL=qx.bom.element.Style;

while(bM&&(!/^body|html$/i.test(bM.tagName)&&bL.get(bM,m)===y)){bM=bM.offsetParent;
}return bM;
}}});
})();
(function(){var m="get",k="set",h="reset",g=":not(",f="getValue",e="append",d=")",c="getPreviousSiblings",b="#",a="qx.bom.Collection",K="setValue",J="prepend",I="string",H="getAncestors",G="getOffsetParent",F="remove",E=">*",D="add",C="*",B="",t="addListener",u="has",r="toggle",s="getSiblings",p="replace",q="after",n="replaceWith",o="setCss",v="setStyles",w="before",y="getNextSiblings",x="getPosition",A="getCss",z="removeListener";
(function(){var M=function(N,O){return function(P,Q,R,S,T,U){var length=this.length;

if(length>0){var V=N[O];

for(var i=0;i<length;i++){if(this[i].nodeType===1){V.call(N,this[i],P,Q,R,S,T,U);
}}}return this;
};
};
var L=function(W,X){return function(Y,ba,bb,bc,bd,be){if(this.length>0){var bf=this[0].nodeType===1?W[X](this[0],Y,ba,bb,bc,bd,be):null;

if(bf&&bf.nodeType){return this.__xx([bf]);
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
},__xt:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(bp,bq){var bs=qx.bom.Collection;
if(bp.nodeType){return new bs(bp);
}else if(typeof bp===I){var br=bs.__xt.exec(bp);

if(br){return br[1]?bs.html(br[1],bq):bs.id(br[3]);
}else{return bs.query(bp,bq);
}}else{return qx.lang.Array.cast(bp,qx.bom.Collection);
}}},members:{__xu:null,setAttribute:M(qx.bom.element.Attribute,k),resetAttribute:M(qx.bom.element.Attribute,h),getAttribute:L(qx.bom.element.Attribute,m),addClass:M(qx.bom.element.Class,D),getClass:L(qx.bom.element.Class,m),hasClass:L(qx.bom.element.Class,u),removeClass:M(qx.bom.element.Class,F),replaceClass:M(qx.bom.element.Class,p),toggleClass:M(qx.bom.element.Class,r),setValue:M(qx.bom.Input,K),getValue:L(qx.bom.Input,f),setStyle:M(qx.bom.element.Style,k),setStyles:M(qx.bom.element.Style,v),resetStyle:M(qx.bom.element.Style,h),getStyle:L(qx.bom.element.Style,m),setCss:M(qx.bom.element.Style,o),getCss:L(qx.bom.element.Style,A),getOffset:L(qx.bom.element.Location,m),getPosition:L(qx.bom.element.Location,x),getOffsetParent:L(qx.bom.element.Location,G),setScrollLeft:function(bt){var Node=qx.dom.Node;

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
}return this.__xx(bG);
},is:function(bH){return !!bH&&qx.bom.Selector.matches(bH,this).length>0;
},__xv:/^.[^:#\[\.,]*$/,not:function(bI){if(this.__xv.test(bI)){var bJ=qx.bom.Selector.matches(g+bI+d,this);
return this.__xx(bJ);
}var bJ=qx.bom.Selector.matches(bI,this);
return this.filter(function(bK){return bJ.indexOf(bK)===-1;
});
},add:function(bL,bM){var bN=qx.bom.Selector.query(bL,bM);
var bO=qx.lang.Array.unique(this.concat(bN));
return this.__xx(bO);
},children:function(bP){var bQ=[];

for(var i=0,l=this.length;i<l;i++){bQ.push.apply(bQ,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(bP){bQ=qx.bom.Selector.matches(bP,bQ);
}return this.__xx(bQ);
},closest:function(bR){var bS=new qx.bom.Collection(1);
var bU=qx.bom.Selector;
var bT=this.map(function(bV){while(bV&&bV.ownerDocument){bS[0]=bV;

if(bU.matches(bR,bS).length>0){return bV;
}bV=bV.parentNode;
}});
return this.__xx(qx.lang.Array.unique(bT));
},contents:function(){var bX=[];
var bW=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){bX.push.apply(bX,bW.fromCollection(this[i].childNodes));
}return this.__xx(bX);
},find:function(bY){var cb=qx.bom.Selector;
if(this.length===1){return this.__xx(cb.query(bY,this[0]));
}else{var ca=[];

for(var i=0,l=this.length;i<l;i++){ca.push.apply(ca,cb.query(bY,this[i]));
}return this.__xx(qx.lang.Array.unique(ca));
}},next:function(cc){var cd=qx.dom.Hierarchy;
var ce=this.map(cd.getNextElementSibling,cd);
if(cc){ce=qx.bom.Selector.matches(cc,ce);
}return this.__xx(ce);
},nextAll:function(cf){return this.__xw(y,cf);
},prev:function(cg){var ch=qx.dom.Hierarchy;
var ci=this.map(ch.getPreviousElementSibling,ch);
if(cg){ci=qx.bom.Selector.matches(cg,ci);
}return this.__xx(ci);
},prevAll:function(cj){return this.__xw(c,cj);
},parent:function(ck){var Element=qx.dom.Element;
var cl=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(ck){cl=qx.bom.Selector.matches(ck,cl);
}return this.__xx(cl);
},parents:function(cm){return this.__xw(H,cm);
},siblings:function(cn){return this.__xw(s,cn);
},__xw:function(co,cp){var cr=[];
var cq=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){cr.push.apply(cr,cq[co](this[i]));
}var cs=qx.lang.Array.unique(cr);
if(cp){cs=qx.bom.Selector.matches(cp,cs);
}return this.__xx(cs);
},__xx:function(ct){var cu=new qx.bom.Collection;
cu.__xu=this;
ct=Array.prototype.slice.call(ct,0);
cu.push.apply(cu,ct);
return cu;
},andSelf:function(){return this.add(this.__xu);
},end:function(){return this.__xu||new qx.bom.Collection();
},__xy:function(cv,cw){var cB=this[0];
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
if(cy.src){(new cE()).load(cy.src);
}else{cC.globalEval(cy.text||cy.textContent||cy.innerHTML||B);
}if(cy.parentNode){cy.parentNode.removeChild(cy);
}}}return this;
},__xz:function(cG,cH){var cJ=qx.bom.Selector;
var cI=qx.lang.Array;
var cL=[];

for(var i=0,l=cG.length;i<l;i++){cL.push.apply(cL,cJ.query(cG[i]));
}cL=cI.cast(cI.unique(cL),qx.bom.Collection);
for(var i=0,cK=this.length;i<cK;i++){cL[cH](this[i]);
}return this;
},append:function(cM){return this.__xy(arguments,this.__xA);
},prepend:function(cN){return this.__xy(arguments,this.__xB);
},__xA:function(cO,cP){cO.appendChild(cP);
},__xB:function(cQ,cR){cQ.insertBefore(cR,cQ.firstChild);
},appendTo:function(cS){return this.__xz(arguments,e);
},prependTo:function(cT){return this.__xz(arguments,J);
},before:function(cU){return this.__xy(arguments,this.__xC);
},after:function(cV){return this.__xy(arguments,this.__xD);
},__xC:function(cW,cX){cW.parentNode.insertBefore(cX,cW);
},__xD:function(cY,da){cY.parentNode.insertBefore(da,cY.nextSibling);
},insertBefore:function(db){return this.__xz(arguments,w);
},insertAfter:function(dc){return this.__xz(arguments,q);
},wrapAll:function(content){var de=this[0];

if(de){var dd=qx.bom.Collection.create(content,de.ownerDocument).clone();
if(de.parentNode){de.parentNode.insertBefore(dd[0],de);
}dd.map(this.__xE).append(this);
}return this;
},__xE:function(df){while(df.firstChild){df=df.firstChild;
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
},replaceAll:function(di){return this.__xz(arguments,n);
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
qx.Class.define(n,{statics:{__xl:function(K,L,M){return M.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?K:L+z+M+H;
},__xm:{opt:[1,e,c],leg:[1,f,u],table:[1,h,y],tr:[2,r,E],td:[3,I,b],col:[2,G,C],def:qx.core.Environment.select(g,{"mshtml":[1,s,d],"default":null})},__xn:function(N,O){var U=O.createElement(J);
N=N.replace(/(<(\w+)[^>]*?)\/>/g,this.__xl);
var Q=N.replace(/^\s+/,t).substring(0,5).toLowerCase();
var T,P=this.__xm;

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
if(typeof ba===m){ba=this.__xn(ba,X);
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
},__js:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__js[t]){var w=r.clientWidth;

if((qx.core.Environment.get(j)==c)||qx.dom.Node.isBlockNode(r)){w=w-u-x;
}return w;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;
}else{var v=r.scrollWidth-u;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)>=6){v-=x;
}return v;
}}},getContentHeight:function(y){var z=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var B=parseInt(z.get(y,a)||i,10);
var A=parseInt(z.get(y,b)||i,10);

if(this.__js[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__zP=qx.Bootstrap.bind(this.__zS,this);
this.__zQ=document.createElement(f);
},statics:{TIMEOUT:15},members:{__zR:null,__sv:null,__bD:null,__bE:null,__zP:null,__zQ:null,load:function(q,r,s){if(this.__zR){throw new Error("Another request is still running!");
}this.__zR=true;
this.__sv=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__zQ;
this.__bD=r||null;
this.__bE=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__zP;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__zR){this.dispose(a);
}},dispose:function(status){if(this.__sv){return;
}this.__sv=true;
var x=this.__zQ;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__zR;
if(this.__bD){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__bD.call(self.__bE,status);
delete self.__bD;
}),0);
}else{this.__bD.call(this.__bE,status);
delete this.__bD;
}}},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__zS:qx.event.GlobalError.observeMethod(function(e){var y=qx.bom.client.Engine.getName();
if(y==n){var z=this.__zQ.readyState;

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
(function(){var n="",m="function",k="\n",j="g",h="^",g="#",f="IMPLICIT-ITERATOR",e=')',d="'",c=">",bp='.',bo="=",bn="object",bm='\\',bl="+",bk="&gt;",bj="render_tags",bi='[object Array]',bh='&#39;',bg="div",w=']',x="This implementation of mustache doesn't understand the '",u="unknown_partial '",v='|\\',q="%",t='&quot;',o="render_pragmas",p="<",C='(',D="!",L="^([\\s\\S]*?)",J="qx.bom.Template",T="\n*([\\s\\S]*?)",O='?',bc='*',Y="{",F='"',bf="{{",be='{',bd='g',E="(\\^|\\#)\\s*(.+)\\s*",H="render_section",I="&amp;",K="mustache.js",M="&lt;",P="&",V="}}",bb='\\$1',y="\\/\\s*\\3\\s*",z="(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?",G='/',S="%([\\w-]+) ?([\\w]+=[\\w]+)?",R='[',Q="' pragma",X="\\s*([\\s\\S]*)$",W=" ",N='(\\',U="0.4.0-dev",b=".",ba='|',A='}',B='+';
qx.Class.define(J,{statics:{version:null,toHtml:null,get:function(bq,br,bs){var bv=document.getElementById(bq);
var bu=bv.innerHTML;
bu=this.toHtml(bu,br,bs);
if(bu.search(/<|>/)===-1){return bu;
}var bt=qx.bom.Element.create(bg);
bt.innerHTML=bu;
return bt.children[0];
}}});
(function(){var bw=function(){var bx={};
var by=function(){};
by.prototype={otag:bf,ctag:V,pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":true},context:{},render:function(bz,bA,bB,bC){if(!bC){this.context=bA;
this.buffer=[];
}if(!this.includes(n,bz)){if(bC){return bz;
}else{this.send(bz);
return;
}}bz=this.render_pragmas(bz);
var bD=this.render_section(bz,bA,bB);
if(bD===false){bD=this.render_tags(bz,bA,bB,bC);
}
if(bC){return bD;
}else{this.sendLines(bD);
}},send:function(bE){if(bE!==n){this.buffer.push(bE);
}},sendLines:function(bF){if(bF){var bG=bF.split(k);

for(var i=0;i<bG.length;i++){this.send(bG[i]);
}}},render_pragmas:function(bH){if(!this.includes(q,bH)){return bH;
}var bJ=this;
var bI=this.getCachedRegex(o,function(bK,bL){return new RegExp(bK+S+bL,j);
});
return bH.replace(bI,function(bM,bN,bO){if(!bJ.pragmas_implemented[bN]){throw ({message:x+bN+Q});
}bJ.pragmas[bN]={};

if(bO){var bP=bO.split(bo);
bJ.pragmas[bN][bP[0]]=bP[1];
}return n;
});
},render_partial:function(name,bQ,bR){name=this.trim(name);

if(!bR||bR[name]===undefined){throw ({message:u+name+d});
}
if(typeof (bQ[name])!=bn){return this.render(bR[name],bQ,bR,true);
}return this.render(bR[name],bQ[name],bR,true);
},render_section:function(bS,bT,bU){if(!this.includes(g,bS)&&!this.includes(h,bS)){return false;
}var bW=this;
var bV=this.getCachedRegex(H,function(bX,bY){return new RegExp(L+bX+E+bY+T+bX+y+bY+X,j);
});
return bS.replace(bV,function(ca,cb,cc,name,content,cd){var ce=cb?bW.render_tags(cb,bT,bU,true):n,cf=cd?bW.render(cd,bT,bU,true):n,cg,ch=bW.find(name,bT);

if(cc===h){if(!ch||bW.is_array(ch)&&ch.length===0){cg=bW.render(content,bT,bU,true);
}else{cg=n;
}}else if(cc===g){if(bW.is_array(ch)){cg=bW.map(ch,function(ci){return bW.render(content,bW.create_context(ci),bU,true);
}).join(n);
}else if(bW.is_object(ch)){cg=bW.render(content,bW.create_context(ch),bU,true);
}else if(typeof ch===m){cg=ch.call(bT,content,function(cj){return bW.render(cj,bT,bU,true);
});
}else if(ch){cg=bW.render(content,bT,bU,true);
}else{cg=n;
}}return ce+cg+cf;
});
},render_tags:function(ck,cl,cm,cn){var cp=this;
var cs=function(){return cp.getCachedRegex(bj,function(ct,cu){return new RegExp(ct+z+cu+bl,j);
});
};
var co=cs();
var cq=function(cv,cw,name){switch(cw){case D:return n;
case bo:cp.set_delimiters(name);
co=cs();
return n;
case c:return cp.render_partial(name,cl,cm);
case Y:return cp.find(name,cl);
default:return cp.escape(cp.find(name,cl));
}};
var cr=ck.split(k);

for(var i=0;i<cr.length;i++){cr[i]=cr[i].replace(co,cq,this);

if(!cn){this.send(cr[i]);
}}
if(cn){return cr.join(k);
}},set_delimiters:function(cx){var cy=cx.split(W);
this.otag=this.escape_regex(cy[0]);
this.ctag=this.escape_regex(cy[1]);
},escape_regex:function(cz){if(!arguments.callee.sRE){var cA=[G,bp,bc,B,O,ba,C,e,R,w,be,A,bm];
arguments.callee.sRE=new RegExp(N+cA.join(v)+e,bd);
}return cz.replace(arguments.callee.sRE,bb);
},find:function(name,cB){name=this.trim(name);
function cC(cF){return cF===false||cF===0||cF;
}var cD;
if(name.match(/([a-z_]+)\./ig)){var cE=this.walk_context(name,cB);

if(cC(cE)){cD=cE;
}}else{if(cC(cB[name])){cD=cB[name];
}else if(cC(this.context[name])){cD=this.context[name];
}}
if(typeof cD===m){return cD.apply(cB);
}
if(cD!==undefined){return cD;
}return n;
},walk_context:function(name,cG){var cH=name.split(bp);
var cI=(cG[cH[0]]!=undefined)?cG:this.context;
var cJ=cI[cH.shift()];

while(cJ!=undefined&&cH.length>0){cI=cJ;
cJ=cJ[cH.shift()];
}if(typeof cJ===m){return cJ.apply(cI);
}return cJ;
},includes:function(cK,cL){return cL.indexOf(this.otag+cK)!=-1;
},escape:function(s){s=String(s===null?n:s);
return s.replace(/&(?!\w+;)|["'<>\\]/g,function(s){switch(s){case P:return I;
case F:return t;
case d:return bh;
case p:return M;
case c:return bk;
default:return s;
}});
},create_context:function(cM){if(this.is_object(cM)){return cM;
}else{var cO=b;

if(this.pragmas[f]){cO=this.pragmas[f].iterator;
}var cN={};
cN[cO]=cM;
return cN;
}},is_object:function(a){return a&&typeof a==bn;
},is_array:function(a){return Object.prototype.toString.call(a)===bi;
},trim:function(s){return s.replace(/^\s*|\s*$/g,n);
},map:function(cP,cQ){if(typeof cP.map==m){return cP.map(cQ);
}else{var r=[];
var l=cP.length;

for(var i=0;i<l;i++){r.push(cQ(cP[i]));
}return r;
}},getCachedRegex:function(name,cR){var cU=bx[this.otag];

if(!cU){cU=bx[this.otag]={};
}var cS=cU[this.ctag];

if(!cS){cS=cU[this.ctag]={};
}var cT=cS[name];

if(!cT){cT=cS[name]=cR(this.otag,this.ctag);
}return cT;
}};
return ({name:K,version:U,to_html:function(cV,cW,cX,cY){var da=new by();

if(cY){da.send=cY;
}da.render(cV,cW||{},cX);

if(!cY){return da.buffer.join(k);
}}});
}();
qx.bom.Template.version=bw.version;
qx.bom.Template.toHtml=bw.to_html;
})();
})();
(function(){var o="String",n="execute",m="qx.ui.menu.Menu",l="_shortcut",k="changeEnabled",j="changeToolTipText",i="Boolean",h="qx.ui.core.Command",g="changeLabel",f="changeMenu",c="changeIcon",e="changeValue",d="_applyShortcut",b="_applyEnabled",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(p){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(p);
this._shortcut.addListener(n,this.execute,this);
},events:{"execute":a},properties:{enabled:{init:true,check:i,event:k,apply:b},shortcut:{check:o,apply:d,nullable:true},label:{check:o,nullable:true,event:g},icon:{check:o,nullable:true,event:c},toolTipText:{check:o,nullable:true,event:j},value:{nullable:true,event:e},menu:{check:m,nullable:true,event:f}},members:{_shortcut:null,_applyEnabled:function(q){this._shortcut.setEnabled(q);
},_applyShortcut:function(r){this._shortcut.setShortcut(r);
},execute:function(s){this.fireDataEvent(n,s);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(l);
this.removeListener(n,this.execute,this);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",S="Escape",R="qx.event.type.Data",Q="_applyShortcut",P="PrintScreen",O="NumLock",N="5",M="8",L="execute",K="Meta",J="0",t="2",u="Shift",r="You can only specify one non modifier key!",s="3",p="/",q="Delete",n="String",o="changeEnabled",v="*",w="qx.bom.Shortcut",B="6",A="4",D="1",C="Alt",F="Not a valid key name for a shortcut: ",E="PageDown",y="Whitespaces are not allowed within shortcuts",I="_applyEnabled",H="7",G="a",x="z",z="9";
qx.Class.define(w,{extend:qx.core.Object,construct:function(T){qx.core.Object.call(this);
this.__zu={};
this.__zv=null;

if(T!=null){this.setShortcut(T);
}this.initEnabled();
},events:{"execute":R},properties:{enabled:{init:true,check:l,event:o,apply:I},shortcut:{check:n,apply:Q,nullable:true},autoRepeat:{check:l,init:false}},members:{__zu:g,__zv:g,execute:function(U){this.fireDataEvent(L,U);
},__zw:function(event){if(this.getEnabled()&&this.__zx(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__eF:function(event){if(this.getEnabled()&&this.__zx(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(V,W){if(V){qx.event.Registration.addListener(document.documentElement,h,this.__zw,this);
qx.event.Registration.addListener(document.documentElement,d,this.__eF,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__zw,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__eF,this);
}},_applyShortcut:function(X,Y){if(X){if(X.search(/[\s]+/)!=-1){var bc=y;
this.error(bc);
throw new Error(bc);
}this.__zu={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__zv=null;
var ba;
var a=[];

while(X.length>0&&ba!=-1){ba=X.search(/[-+]+/);
a.push((X.length==1||ba==-1)?X:X.substring(0,ba));
X=X.substring(ba+1);
}var bb=a.length;

for(var i=0;i<bb;i++){var bd=this.__zz(a[i]);

switch(bd){case f:case u:case K:case C:this.__zu[bd]=true;
break;
case m:var bc=F+a[i];
this.error(bc);
throw bc;
default:if(this.__zv){var bc=r;
this.error(bc);
throw bc;
}this.__zv=bd;
}}}return true;
},__zx:function(e){var be=this.__zv;

if(!be){return ;
}if((!this.__zu.Shift&&e.isShiftPressed())||(this.__zu.Shift&&!e.isShiftPressed())||(!this.__zu.Control&&e.isCtrlPressed())||(this.__zu.Control&&!e.isCtrlPressed())||(!this.__zu.Meta&&e.isMetaPressed())||(this.__zu.Meta&&!e.isMetaPressed())||(!this.__zu.Alt&&e.isAltPressed())||(this.__zu.Alt&&!e.isAltPressed())){return false;
}
if(be==e.getKeyIdentifier()){return true;
}return false;
},__zy:{esc:S,ctrl:f,print:P,del:q,pageup:b,pagedown:E,numlock:O,numpad_0:J,numpad_1:D,numpad_2:t,numpad_3:s,numpad_4:A,numpad_5:N,numpad_6:B,numpad_7:H,numpad_8:M,numpad_9:z,numpad_divide:p,numpad_multiply:v,numpad_minus:c,numpad_plus:k},__zz:function(bf){var bg=qx.event.handler.Keyboard;
var bh=m;

if(bg.isValidKeyIdentifier(bf)){return bf;
}
if(bf.length==1&&bf>=G&&bf<=x){return bf.toUpperCase();
}bf=bf.toLowerCase();
var bh=this.__zy[bf]||qx.lang.String.firstUp(bf);

if(bg.isValidKeyIdentifier(bh)){return bh;
}else{return m;
}},toString:function(){var bk=this.__zv;
var bj=[];

for(var bi in this.__zu){if(this.__zu[bi]){bj.push(qx.locale.Key.getKeyName(j,bi));
}}
if(bk){bj.push(qx.locale.Key.getKeyName(j,bk));
}return bj.join(k);
}},destruct:function(){this.setEnabled(false);
this.__zu=this.__zv=null;
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__ht=u;
this.length=u.length;
},members:{$$isString:true,length:0,__ht:null,toString:function(){return this.__ht;
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
this.__hu=c;
this.__hv=d;
},members:{__hu:null,__hv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hu,this.__hv);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hw=qx.$$translations||{};
this.__hx=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__hy=m;
this.setLocale(m||this.__hz);
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
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hz:f,__hA:null,__hB:null,__hw:null,__hx:null,__hy:null,getLanguage:function(){return this.__hB;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(B){var D=[];

for(var C in this.__hx){if(C!=this.__hz){if(this.__hx[C]===null&&!B){continue;
}D.push(C);
}}return D;
},__hC:function(E){var G;

if(E==null){return null;
}var F=E.indexOf(l);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(H,I){this.__hA=H;
this.__hB=this.__hC(H);
},addTranslation:function(J,K){var L=this.__hw;

if(L[J]){for(var M in K){L[J][M]=K[M];
}}else{L[J]=K;
}},addLocale:function(N,O){var P=this.__hx;

if(P[N]){for(var Q in O){P[N][Q]=O[Q];
}}else{P[N]=O;
}},translate:function(R,S,T){var U=this.__hw;
return this.__hD(U,R,S,T);
},localize:function(V,W,X){var Y=this.__hx;
return this.__hD(Y,V,W,X);
},__hD:function(ba,bb,bc,bd){var be;

if(!ba){return bb;
}
if(bd){var bg=this.__hC(bd);
}else{bd=this.__hA;
bg=this.__hB;
}if(!be&&ba[bd]){be=ba[bd][bb];
}if(!be&&ba[bg]){be=ba[bg][bb];
}if(!be&&ba[this.__hz]){be=ba[this.__hz][bb];
}
if(!be){be=bb;
}
if(bc.length>0){var bf=[];

for(var i=0;i<bc.length;i++){var bh=bc[i];

if(bh&&bh.translate){bf[i]=bh.translate();
}else{bf[i]=bh;
}}be=qx.lang.String.format(be,bf);
}
if(qx.core.Environment.get(d)){be=new qx.locale.LocalizedString(be,bb,bc);
}return be;
}},destruct:function(){this.__hw=this.__hx=null;
}});
})();
(function(){var by="Control",bx="Left",bw="Meta",bv="Pause",bu="End",bt="Down",bs="Ctrl",br="Home",bq="Apps",bp="Win",be="Right",bd="Backspace",bc="Space",bb="Up",ba="Shift",Y="Enter",X="Scroll",W="Alt",V="Escape",U="key_full_Meta",bF="PrintScreen",bG="NumLock",bD="key_short_Alt",bE="key_short_Control_Mac",bB="key_short_Insert",bC="Del",bz="key_full_Enter",bA="key_full_Control",bH="qx.locale.Key",bI="Tabulator",bi="key_full_Space",bh="key_short_Meta",bk="key_short_PageUp",bj="key_short_Pause",bm="key_full_Down",bl="key_short_Apps",bo="key_short_Win",bn="key_full_Right",bg="os.name",bf="key_short_Up",a="key_full_PageDown",b="key_full_Alt",c="PgDn",d="Esc",e="key_full_Insert",f="osx",g="key_short_Space",h="key_short_Backspace",i="key_short_Home",j="key_short_Down",bM="PgUp",bL="_Mac",bK="key_short_CapsLock",bJ="PageUp",bQ="key_full_Up",bP="key_full_Home",bO="key_full_Backspace",bN="PageDown",bS="CapsLock",bR="Ins",E="key_short_PrintScreen",F="Tab",C="key_full_Apps",D="key_short_Tab",I="key_short_End",J="_",G="Caps",H="key_short_NumLock",A="Num",B="key_full_Scroll",r="key_short_Left",q="key_short_Scroll",t="key_",s="key_full_Pause",n="key_short_Right",m="key_full_PrintScreen",p="key_full_Win",o="key_full_Control_Mac",l="key_short_Shift",k="key_short_PageDown",O="key_short_Enter",P="key_short_Control",Q="Insert",R="key_short_Escape",K="key_full_Tab",L="Print",M="Delete",N="key_full_CapsLock",S="key_full_Escape",T="key_short_Delete",z="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bH,{statics:{getKeyName:function(bT,bU,bV){var bX=t+bT+J+bU;
if(qx.core.Environment.get(bg)==f&&bU==by){bX+=bL;
}var bW=qx.locale.Manager.getInstance().translate(bX,[],bV);

if(bW==bX){return qx.locale.Key._keyNames[bX]||bU;
}else{return bW;
}}},defer:function(bY){var cb={};
var ca=qx.locale.Manager;
cb[ca.marktr(h)]=bd;
cb[ca.marktr(D)]=F;
cb[ca.marktr(g)]=bc;
cb[ca.marktr(O)]=Y;
cb[ca.marktr(l)]=ba;
cb[ca.marktr(P)]=bs;
cb[ca.marktr(bE)]=bs;
cb[ca.marktr(bD)]=W;
cb[ca.marktr(bK)]=G;
cb[ca.marktr(bh)]=bw;
cb[ca.marktr(R)]=d;
cb[ca.marktr(r)]=bx;
cb[ca.marktr(bf)]=bb;
cb[ca.marktr(n)]=be;
cb[ca.marktr(j)]=bt;
cb[ca.marktr(bk)]=bM;
cb[ca.marktr(k)]=c;
cb[ca.marktr(I)]=bu;
cb[ca.marktr(i)]=br;
cb[ca.marktr(bB)]=bR;
cb[ca.marktr(T)]=bC;
cb[ca.marktr(H)]=A;
cb[ca.marktr(E)]=L;
cb[ca.marktr(q)]=X;
cb[ca.marktr(bj)]=bv;
cb[ca.marktr(bo)]=bp;
cb[ca.marktr(bl)]=bq;
cb[ca.marktr(bO)]=bd;
cb[ca.marktr(K)]=bI;
cb[ca.marktr(bi)]=bc;
cb[ca.marktr(bz)]=Y;
cb[ca.marktr(y)]=ba;
cb[ca.marktr(bA)]=by;
cb[ca.marktr(o)]=by;
cb[ca.marktr(b)]=W;
cb[ca.marktr(N)]=bS;
cb[ca.marktr(U)]=bw;
cb[ca.marktr(S)]=V;
cb[ca.marktr(u)]=bx;
cb[ca.marktr(bQ)]=bb;
cb[ca.marktr(bn)]=be;
cb[ca.marktr(bm)]=bt;
cb[ca.marktr(z)]=bJ;
cb[ca.marktr(a)]=bN;
cb[ca.marktr(v)]=bu;
cb[ca.marktr(bP)]=br;
cb[ca.marktr(e)]=Q;
cb[ca.marktr(w)]=M;
cb[ca.marktr(x)]=bG;
cb[ca.marktr(m)]=bF;
cb[ca.marktr(B)]=X;
cb[ca.marktr(s)]=bv;
cb[ca.marktr(p)]=bp;
cb[ca.marktr(C)]=bq;
bY._keyNames=cb;
}});
})();


qx.$$loader.init();

