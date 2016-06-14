(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"locale":"en","locale.variant":"US","qx.allowUrlSettings":true,"qx.allowUrlVariants":true,"qx.application":"demobrowser.demo.test.io_ImageLoader","qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.theme":"qx.theme.Simple"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"../../script"},"demobrowser.demo":{"resourceUri":"../../resource","sourceUri":"../../script"},"qx":{"resourceUri":"../../resource","sourceUri":"../../script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$locales = {"C":null,"de":null,"de_DE":null,"en":null,"en_US":null,"fr":null,"fr_FR":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:demobrowser.demo.test.io_ImageLoader-qx.theme.Simple.f3fb0e91c110.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : true,
  
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

qx.$$packageData['0']={"locales":{},"resources":{"qx/decoration/Simple/arrows/down-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/down-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/down.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/forward.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/left-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/left.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/rewind.gif":[8,7,"gif","qx"],"qx/decoration/Simple/arrows/right-invert.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/right.gif":[4,7,"gif","qx"],"qx/decoration/Simple/arrows/up-invert.gif":[7,4,"gif","qx"],"qx/decoration/Simple/arrows/up-small.gif":[5,3,"gif","qx"],"qx/decoration/Simple/arrows/up.gif":[7,4,"gif","qx"],"qx/decoration/Simple/checkbox/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/checked.png":[6,6,"png","qx"],"qx/decoration/Simple/checkbox/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Simple/checkbox/undetermined.png":[6,2,"png","qx"],"qx/decoration/Simple/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Simple/colorselector/brightness-handle.gif":[35,11,"gif","qx"],"qx/decoration/Simple/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Simple/colorselector/huesaturation-handle.gif":[11,11,"gif","qx"],"qx/decoration/Simple/cursors/alias.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/copy.gif":[19,15,"gif","qx"],"qx/decoration/Simple/cursors/move.gif":[13,9,"gif","qx"],"qx/decoration/Simple/cursors/nodrop.gif":[20,20,"gif","qx"],"qx/decoration/Simple/menu/checkbox-invert.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/checkbox.gif":[16,7,"gif","qx"],"qx/decoration/Simple/menu/radiobutton-invert.gif":[16,5,"gif","qx"],"qx/decoration/Simple/menu/radiobutton.gif":[16,5,"gif","qx"],"qx/decoration/Simple/splitpane/knob-horizontal.png":[1,8,"png","qx"],"qx/decoration/Simple/splitpane/knob-vertical.png":[8,1,"png","qx"],"qx/decoration/Simple/table/ascending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/ascending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/boolean-false.png":[11,11,"png","qx"],"qx/decoration/Simple/table/boolean-true.png":[11,11,"png","qx"],"qx/decoration/Simple/table/descending-invert.png":[10,10,"png","qx"],"qx/decoration/Simple/table/descending.png":[10,10,"png","qx"],"qx/decoration/Simple/table/select-column-order.png":[10,9,"png","qx"],"qx/decoration/Simple/tabview/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Simple/window/close.gif":[10,9,"gif","qx"],"qx/decoration/Simple/window/maximize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/minimize.gif":[9,9,"gif","qx"],"qx/decoration/Simple/window/restore.gif":[8,9,"gif","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"]},"translations":{}};
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
(function(){var t="object",s="qx.debug",r="function",q="Array",p="Mixin",o="qx.Mixin",n=".prototype",m="constructor",k="[Mixin ",j="]",d="RegExp",h="members",g="destruct",c="properties",b="Date",f="events",e="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,u){if(u){if(u.include&&!(qx.Bootstrap.getClass(u.include)===q)){u.include=[u.include];
}if(qx.core.Environment.get(s)){this.__d(name,u);
}var w=u.statics?u.statics:{};
qx.Bootstrap.setDisplayNames(w,name);

for(var v in w){if(w[v] instanceof Function){w[v].$$mixin=w;
}}if(u.construct){w.$$constructor=u.construct;
qx.Bootstrap.setDisplayName(u.construct,name,m);
}
if(u.include){w.$$includes=u.include;
}
if(u.properties){w.$$properties=u.properties;
}
if(u.members){w.$$members=u.members;
qx.Bootstrap.setDisplayNames(u.members,name+n);
}
for(var v in w.$$members){if(w.$$members[v] instanceof Function){w.$$members[v].$$mixin=w;
}}
if(u.events){w.$$events=u.events;
}
if(u.destruct){w.$$destructor=u.destruct;
qx.Bootstrap.setDisplayName(u.destruct,name,g);
}}else{var w={};
}w.$$type=p;
w.name=name;
w.toString=this.genericToString;
w.basename=qx.Bootstrap.createNamespace(name,w);
this.$$registry[name]=w;
return w;
},checkCompatibility:function(x){var A=this.flatten(x);
var B=A.length;

if(B<2){return true;
}var E={};
var D={};
var C={};
var z;

for(var i=0;i<B;i++){z=A[i];

for(var y in z.events){if(C[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+C[y]+'" in member "'+y+'"!');
}C[y]=z.name;
}
for(var y in z.properties){if(E[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+E[y]+'" in property "'+y+'"!');
}E[y]=z.name;
}
for(var y in z.members){if(D[y]){throw new Error('Conflict between mixin "'+z.name+'" and "'+D[y]+'" in member "'+y+'"!');
}D[y]=z.name;
}}return true;
},isCompatible:function(F,G){var H=qx.util.OOUtil.getMixins(G);
H.push(F);
return qx.Mixin.checkCompatibility(H);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(I){if(!I){return [];
}var J=I.concat();

for(var i=0,l=I.length;i<l;i++){if(I[i].$$includes){J.push.apply(J,this.flatten(I[i].$$includes));
}}return J;
},genericToString:function(){return k+this.name+j;
},$$registry:{},__c:qx.core.Environment.select(s,{"true":{"include":t,"statics":t,"members":t,"properties":t,"events":t,"destruct":r,"construct":r},"default":null}),__d:qx.core.Environment.select(s,{"true":function(name,K){var N=this.__c;

for(var M in K){if(!N[M]){throw new Error('The configuration key "'+M+'" in mixin "'+name+'" is not allowed!');
}
if(K[M]==null){throw new Error('Invalid key "'+M+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(N[M]!==null&&typeof K[M]!==N[M]){throw new Error('Invalid type of key "'+M+'" in mixin "'+name+'"! The type of the key must be "'+N[M]+'"!');
}}var L=[e,h,c,f];

for(var i=0,l=L.length;i<l;i++){var M=L[i];

if(K[M]!==undefined&&([q,d,b].indexOf(qx.Bootstrap.getClass(K[M]))!=-1||K[M].classname!==undefined)){throw new Error('Invalid key "'+M+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(K.include){for(var i=0,a=K.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==p){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(K.include);
}},"default":function(){}})}});
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
(function(){var w="qx.debug",v="object",u="Array",t="Interface",s="string",r="number",q="function",p="Boolean",o="qx.Interface",n="events",e="[Interface ",m="]",h="members",d="properties",c="Date",g="RegExp",f="toggle",j="boolean",b="is",k="statics";
qx.Bootstrap.define(o,{statics:{define:function(name,x){if(x){if(x.extend&&!(qx.Bootstrap.getClass(x.extend)===u)){x.extend=[x.extend];
}if(qx.core.Environment.get(w)){this.__d(name,x);
}var y=x.statics?x.statics:{};
if(x.extend){y.$$extends=x.extend;
}
if(x.properties){y.$$properties=x.properties;
}
if(x.members){y.$$members=x.members;
}
if(x.events){y.$$events=x.events;
}}else{var y={};
}y.$$type=t;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
qx.Interface.$$registry[name]=y;
return y;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(z){if(!z){return [];
}var A=z.concat();

for(var i=0,l=z.length;i<l;i++){if(z[i].$$extends){A.push.apply(A,this.flatten(z[i].$$extends));
}}return A;
},__j:function(B,C,D,E){var I=D.$$members;

if(I){for(var H in I){if(qx.Bootstrap.isFunction(I[H])){var G=this.__k(C,H);
var F=G||qx.Bootstrap.isFunction(B[H]);

if(!F){throw new Error('Implementation of method "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}var J=E===true&&!G&&!qx.util.OOUtil.hasInterface(C,D);

if(J){B[H]=this.__n(D,B[H],H,I[H]);
}}else{if(typeof B[H]===undefined){if(typeof B[H]!==q){throw new Error('Implementation of member "'+H+'" is missing in class "'+C.classname+'" required by interface "'+D.name+'"');
}}}}}},__k:function(K,L){var P=L.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!P){return false;
}var M=qx.Bootstrap.firstLow(P[2]);
var N=qx.util.OOUtil.getPropertyDefinition(K,M);

if(!N){return false;
}var O=P[0]==b||P[0]==f;

if(O){return qx.util.OOUtil.getPropertyDefinition(K,M).check==p;
}return true;
},__l:function(Q,R){if(R.$$properties){for(var S in R.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(Q,S)){throw new Error('The property "'+S+'" is not supported by Class "'+Q.classname+'"!');
}}}},__m:function(T,U){if(U.$$events){for(var V in U.$$events){if(!qx.util.OOUtil.supportsEvent(T,V)){throw new Error('The event "'+V+'" is not supported by Class "'+T.classname+'"!');
}}}},assertObject:function(W,X){var ba=W.constructor;
this.__j(W,ba,X,false);
this.__l(ba,X);
this.__m(ba,X);
var Y=X.$$extends;

if(Y){for(var i=0,l=Y.length;i<l;i++){this.assertObject(W,Y[i]);
}}},assert:function(bb,bc,bd){this.__j(bb.prototype,bb,bc,bd);
this.__l(bb,bc);
this.__m(bb,bc);
var be=bc.$$extends;

if(be){for(var i=0,l=be.length;i<l;i++){this.assert(bb,be[i],bd);
}}},genericToString:function(){return e+this.name+m;
},$$registry:{},__n:qx.core.Environment.select(w,{"true":function(bf,bg,bh,bi){function bj(){bi.apply(this,arguments);
return bg.apply(this,arguments);
}bg.wrapper=bj;
return bj;
},"default":function(){}}),__c:qx.core.Environment.select(w,{"true":{"extend":v,"statics":v,"members":v,"properties":v,"events":v},"default":null}),__d:qx.core.Environment.select(w,{"true":function(name,bk){if(qx.core.Environment.get(w)){var bn=this.__c;

for(var bm in bk){if(bn[bm]===undefined){throw new Error('The configuration key "'+bm+'" in class "'+name+'" is not allowed!');
}
if(bk[bm]==null){throw new Error("Invalid key '"+bm+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bn[bm]!==null&&typeof bk[bm]!==bn[bm]){throw new Error('Invalid type of key "'+bm+'" in interface "'+name+'"! The type of the key must be "'+bn[bm]+'"!');
}}var bl=[k,h,d,n];

for(var i=0,l=bl.length;i<l;i++){var bm=bl[i];

if(bk[bm]!==undefined&&([u,g,c].indexOf(qx.Bootstrap.getClass(bk[bm]))!=-1||bk[bm].classname!==undefined)){throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! The value needs to be a map!');
}}if(bk.extend){for(var i=0,a=bk.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==t){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(bk.statics){for(var bm in bk.statics){if(bm.toUpperCase()!==bm){throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof bk.statics[bm]){case j:case s:case r:break;
default:throw new Error('Invalid key "'+bm+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
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
(function(){var bI=';',bH='return this.',bG="string",bF="qx.debug",bE="",bD="boolean",bC='!==undefined)',bB="this.",bA="set",bz="setThemed",bo="resetThemed",bn="qx.propertyDebugLevel",bm='else if(this.',bl="reset",bk="setRuntime",bj="init",bi="();",bh='else ',bg='if(this.',bf="resetRuntime",bP="return this.",bQ="get",bN=";",bO="(a[",bL="value",bM=' of an instance of ',bJ="refresh",bK=' is not (yet) ready!");',bR="]);",bS='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bs='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',br='value !== null && value.nodeType === 9 && value.documentElement',bu='value !== null && value.$$type === "Mixin"',bt='return init;',bw='var init=this.',bv='value !== null && value.nodeType === 1 && value.attributes',by="var parent = this.getLayoutParent();",bx="Error in property ",bq="property",bp='qx.core.Assert.assertInstance(value, Date, msg) || true',b="if (!parent) return;",c=" in method ",d='qx.core.Assert.assertInstance(value, Error, msg) || true',e='Undefined value is not allowed!',f="inherit",g='Is invalid!',h="MSIE 6.0",j="': ",k=" of class ",m='value !== null && value.nodeType !== undefined',bW='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bV="module.events",bU='qx.core.Assert.assertPositiveInteger(value, msg) || true',bT='if(init==qx.core.Property.$$inherit)init=null;',cb='value !== null && value.$$type === "Interface"',ca='var inherit=prop.$$inherit;',bY="var value = parent.",bX="$$useinit_",cd="(value);",cc='Requires exactly one argument!',L="$$runtime_",M="$$user_",J='qx.core.Assert.assertArray(value, msg) || true',K='qx.core.Assert.assertPositiveNumber(value, msg) || true',P=".prototype",Q="Boolean",N='return value;',O='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',H='Does not allow any arguments!',I="()",u="var a=arguments[0] instanceof Array?arguments[0]:arguments;",t='value !== null && value.$$type === "Theme"',w="())",v='return null;',q='qx.core.Assert.assertObject(value, msg) || true',p='qx.core.Assert.assertString(value, msg) || true',s="if (value===undefined) value = parent.",r='value !== null && value.$$type === "Class"',o='qx.core.Assert.assertFunction(value, msg) || true',n=".",V="object",W="$$init_",X="$$theme_",Y='qx.core.Assert.assertMap(value, msg) || true',R="qx.aspects",S='qx.core.Assert.assertNumber(value, msg) || true',T='Null value is not allowed!',U='qx.core.Assert.assertInteger(value, msg) || true',ba="rv:1.8.1",bb="shorthand",E='qx.core.Assert.assertInstance(value, RegExp, msg) || true',D='value !== null && value.type !== undefined',C='value !== null && value.document',B='throw new Error("Property ',A="(!this.",z='qx.core.Assert.assertBoolean(value, msg) || true',y="toggle",x="$$inherit_",G=" with incoming value '",F="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bc="qx.core.Property",bd="is",be='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bc,{statics:{__o:function(){if(qx.core.Environment.get(bV)){qx.event.type.Data;
qx.event.dispatch.Direct;
}},__p:{"Boolean":z,"String":p,"Number":S,"Integer":U,"PositiveNumber":K,"PositiveInteger":bU,"Error":d,"RegExp":E,"Object":q,"Array":J,"Map":Y,"Function":o,"Date":bp,"Node":m,"Element":bv,"Document":br,"Window":C,"Event":D,"Class":r,"Mixin":bu,"Interface":cb,"Theme":t,"Color":bS,"Decorator":bW,"Font":bs},__q:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:f,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bG,dereference:bD,inheritable:bD,nullable:bD,themeable:bD,refine:bD,init:null,apply:bG,event:bG,check:null,transform:bG,deferredInit:bD,validate:null},$$allowedGroupKeys:{name:bG,group:V,mode:bG,themeable:bD},$$inheritable:{},__r:function(ce){var cf=this.__s(ce);

if(!cf.length){var cg=function(){};
}else{cg=this.__t(cf);
}ce.prototype.$$refreshInheritables=cg;
},__s:function(ch){var cj=[];

while(ch){var ci=ch.$$properties;

if(ci){for(var name in this.$$inheritable){if(ci[name]&&ci[name].inheritable){cj.push(name);
}}}ch=ch.superclass;
}return cj;
},__t:function(ck){var co=this.$$store.inherit;
var cn=this.$$store.init;
var cm=this.$$method.refresh;
var cl=[by,b];

for(var i=0,l=ck.length;i<l;i++){var name=ck[i];
cl.push(bY,co[name],bN,s,cn[name],bN,bB,cm[name],cd);
}return new Function(cl.join(bE));
},attachRefreshInheritables:function(cp){cp.prototype.$$refreshInheritables=function(){qx.core.Property.__r(cp);
return this.$$refreshInheritables();
};
},attachMethods:function(cq,name,cr){cr.group?this.__u(cq,cr,name):this.__v(cq,cr,name);
},__u:function(cs,ct,name){var cA=qx.Bootstrap.firstUp(name);
var cz=cs.prototype;
var cB=ct.themeable===true;

if(qx.core.Environment.get(bF)){if(qx.core.Environment.get(bn)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var cC=[];
var cw=[];

if(cB){var cu=[];
var cy=[];
}var cx=u;
cC.push(cx);

if(cB){cu.push(cx);
}
if(ct.mode==bb){var cv=F;
cC.push(cv);

if(cB){cu.push(cv);
}}
for(var i=0,a=ct.group,l=a.length;i<l;i++){if(qx.core.Environment.get(bF)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}cC.push(bB,this.$$method.set[a[i]],bO,i,bR);
cw.push(bB,this.$$method.reset[a[i]],bi);

if(cB){if(qx.core.Environment.get(bF)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}cu.push(bB,this.$$method.setThemed[a[i]],bO,i,bR);
cy.push(bB,this.$$method.resetThemed[a[i]],bi);
}}this.$$method.set[name]=bA+cA;
cz[this.$$method.set[name]]=new Function(cC.join(bE));
this.$$method.reset[name]=bl+cA;
cz[this.$$method.reset[name]]=new Function(cw.join(bE));

if(cB){this.$$method.setThemed[name]=bz+cA;
cz[this.$$method.setThemed[name]]=new Function(cu.join(bE));
this.$$method.resetThemed[name]=bo+cA;
cz[this.$$method.resetThemed[name]]=new Function(cy.join(bE));
}},__v:function(cD,cE,name){var cG=qx.Bootstrap.firstUp(name);
var cI=cD.prototype;

if(qx.core.Environment.get(bF)){if(qx.core.Environment.get(bn)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(cE.dereference===undefined&&typeof cE.check===bG){cE.dereference=this.__w(cE.check);
}var cH=this.$$method;
var cF=this.$$store;
cF.runtime[name]=L+name;
cF.user[name]=M+name;
cF.theme[name]=X+name;
cF.init[name]=W+name;
cF.inherit[name]=x+name;
cF.useinit[name]=bX+name;
cH.get[name]=bQ+cG;
cI[cH.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cD,name,bQ);
};
cH.set[name]=bA+cG;
cI[cH.set[name]]=function(cJ){return qx.core.Property.executeOptimizedSetter(this,cD,name,bA,arguments);
};
cH.reset[name]=bl+cG;
cI[cH.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cD,name,bl);
};

if(cE.inheritable||cE.apply||cE.event||cE.deferredInit){cH.init[name]=bj+cG;
cI[cH.init[name]]=function(cK){return qx.core.Property.executeOptimizedSetter(this,cD,name,bj,arguments);
};
}
if(cE.inheritable){cH.refresh[name]=bJ+cG;
cI[cH.refresh[name]]=function(cL){return qx.core.Property.executeOptimizedSetter(this,cD,name,bJ,arguments);
};
}cH.setRuntime[name]=bk+cG;
cI[cH.setRuntime[name]]=function(cM){return qx.core.Property.executeOptimizedSetter(this,cD,name,bk,arguments);
};
cH.resetRuntime[name]=bf+cG;
cI[cH.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cD,name,bf);
};

if(cE.themeable){cH.setThemed[name]=bz+cG;
cI[cH.setThemed[name]]=function(cN){return qx.core.Property.executeOptimizedSetter(this,cD,name,bz,arguments);
};
cH.resetThemed[name]=bo+cG;
cI[cH.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cD,name,bo);
};
}
if(cE.check===Q){cI[y+cG]=new Function(bP+cH.set[name]+A+cH.get[name]+w);
cI[bd+cG]=new Function(bP+cH.get[name]+I);
}},__w:function(cO){return !!this.__q[cO];
},__x:function(cP){return this.__q[cP]||qx.util.OOUtil.classIsDefined(cP)||(qx.Interface&&qx.Interface.isDefined(cP));
},__y:{0:be,1:cc,2:e,3:H,4:T,5:g},error:function(cQ,cR,cS,cT,cU){var cV=cQ.constructor.classname;
var cW=bx+cS+k+cV+c+this.$$method[cT][cS]+G+cU+j;
throw new Error(cW+(this.__y[cR]||"Unknown reason: "+cR));
},__z:function(cX,cY,name,da,db,dc){var dd=this.$$method[da][name];
if(qx.core.Environment.get(bF)){if(qx.core.Environment.get(bn)>1){qx.Bootstrap.debug("Code["+this.$$method[da][name]+"]: "+db.join(""));
}try{cY[dd]=new Function(bL,db.join(bE));
}catch(de){throw new Error("Malformed generated code to unwrap method: "+this.$$method[da][name]+"\n"+db.join(""));
}}else{cY[dd]=new Function(bL,db.join(bE));
}if(qx.core.Environment.get(R)){cY[dd]=qx.core.Aspect.wrap(cX.classname+n+dd,cY[dd],bq);
}qx.Bootstrap.setDisplayName(cY[dd],cX.classname+P,dd);
if(dc===undefined){return cX[dd]();
}else if(qx.core.Environment.get(bF)){return cX[dd].apply(cX,dc);
}else{return cX[dd](dc[0]);
}},executeOptimizedGetter:function(df,dg,name,dh){var dj=dg.$$properties[name];
var dl=dg.prototype;
var di=[];
var dk=this.$$store;
di.push(bg,dk.runtime[name],bC);
di.push(bH,dk.runtime[name],bI);

if(dj.inheritable){di.push(bm,dk.inherit[name],bC);
di.push(bH,dk.inherit[name],bI);
di.push(bh);
}di.push(bg,dk.user[name],bC);
di.push(bH,dk.user[name],bI);

if(dj.themeable){di.push(bm,dk.theme[name],bC);
di.push(bH,dk.theme[name],bI);
}
if(dj.deferredInit&&dj.init===undefined){di.push(bm,dk.init[name],bC);
di.push(bH,dk.init[name],bI);
}di.push(bh);

if(dj.init!==undefined){if(dj.inheritable){di.push(bw,dk.init[name],bI);

if(dj.nullable){di.push(bT);
}else if(dj.init!==undefined){di.push(bH,dk.init[name],bI);
}else{di.push(O,name,bM,dg.classname,bK);
}di.push(bt);
}else{di.push(bH,dk.init[name],bI);
}}else if(dj.inheritable||dj.nullable){di.push(v);
}else{di.push(B,name,bM,dg.classname,bK);
}return this.__z(df,dl,name,dh,di);
},executeOptimizedSetter:function(dm,dn,name,dp,dq){var dv=dn.$$properties[name];
var du=dn.prototype;
var ds=[];
var dr=dp===bA||dp===bz||dp===bk||(dp===bj&&dv.init===undefined);
var dt=dv.apply||dv.event||dv.inheritable;
var dw=this.__A(dp,name);
this.__B(ds,dv,name,dp,dr);

if(dr){this.__C(ds,dn,dv,name);
}
if(dt){this.__D(ds,dr,dw,dp);
}
if(dv.inheritable){ds.push(ca);
}
if(qx.core.Environment.get(bF)){if(dr){this.__E(ds,dv,dn,name,dp);
}}
if(!dt){this.__F(ds,name,dp,dr);
}else{this.__G(ds,dv,name,dp,dr);
}
if(dv.inheritable){this.__H(ds,dv,name,dp);
}else if(dt){this.__I(ds,dv,name,dp);
}
if(dt){this.__J(ds,dv,name);
if(dv.inheritable&&du._getChildren){this.__K(ds,name);
}}if(dr){ds.push(N);
}return this.__z(dm,du,name,dp,ds,dq);
},__A:function(dx,name){if(dx==="setRuntime"||dx==="resetRuntime"){var dy=this.$$store.runtime[name];
}else if(dx==="setThemed"||dx==="resetThemed"){dy=this.$$store.theme[name];
}else if(dx==="init"){dy=this.$$store.init[name];
}else{dy=this.$$store.user[name];
}return dy;
},__B:function(dz,dA,name,dB,dC){if(qx.core.Environment.get("qx.debug")){dz.push('var prop=qx.core.Property;');

if(dB==="init"){dz.push('if(this.$$initialized)prop.error(this,0,"',name,'","',dB,'",value);');
}
if(dB==="refresh"){}else if(dC){dz.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',dB,'",value);');
dz.push('if(value===undefined)prop.error(this,2,"',name,'","',dB,'",value);');
}else{dz.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',dB,'",value);');
}}else{if(!dA.nullable||dA.check||dA.inheritable){dz.push('var prop=qx.core.Property;');
}if(dB==="set"){dz.push('if(value===undefined)prop.error(this,2,"',name,'","',dB,'",value);');
}}},__C:function(dD,dE,dF,name){if(dF.transform){dD.push('value=this.',dF.transform,'(value);');
}if(dF.validate){if(typeof dF.validate==="string"){dD.push('this.',dF.validate,'(value);');
}else if(dF.validate instanceof Function){dD.push(dE.classname,'.$$properties.',name);
dD.push('.validate.call(this, value);');
}}},__D:function(dG,dH,dI,dJ){var dK=(dJ==="reset"||dJ==="resetThemed"||dJ==="resetRuntime");

if(dH){dG.push('if(this.',dI,'===value)return value;');
}else if(dK){dG.push('if(this.',dI,'===undefined)return;');
}},__E:qx.core.Environment.select("qx.debug",{"true":function(dL,dM,dN,name,dO){if(!dM.nullable){dL.push('if(value===null)prop.error(this,4,"',name,'","',dO,'",value);');
}if(dM.check!==undefined){dL.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+dN.classname+'\'";');
if(dM.nullable){dL.push('if(value!==null)');
}if(dM.inheritable){dL.push('if(value!==inherit)');
}dL.push('if(');

if(this.__p[dM.check]!==undefined){dL.push('!(',this.__p[dM.check],')');
}else if(qx.Class.isDefined(dM.check)){dL.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',dM.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(dM.check)){dL.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dM.check,'"), msg)');
}else if(typeof dM.check==="function"){dL.push('!',dN.classname,'.$$properties.',name);
dL.push('.check.call(this, value)');
}else if(typeof dM.check==="string"){dL.push('!(',dM.check,')');
}else if(dM.check instanceof Array){dL.push('qx.core.Assert.assertInArray(value, ',dN.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+dN.classname);
}dL.push(')prop.error(this,5,"',name,'","',dO,'",value);');
}},"false":undefined}),__F:function(dP,name,dQ,dR){if(dQ==="setRuntime"){dP.push('this.',this.$$store.runtime[name],'=value;');
}else if(dQ==="resetRuntime"){dP.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dP.push('delete this.',this.$$store.runtime[name],';');
}else if(dQ==="set"){dP.push('this.',this.$$store.user[name],'=value;');
}else if(dQ==="reset"){dP.push('if(this.',this.$$store.user[name],'!==undefined)');
dP.push('delete this.',this.$$store.user[name],';');
}else if(dQ==="setThemed"){dP.push('this.',this.$$store.theme[name],'=value;');
}else if(dQ==="resetThemed"){dP.push('if(this.',this.$$store.theme[name],'!==undefined)');
dP.push('delete this.',this.$$store.theme[name],';');
}else if(dQ==="init"&&dR){dP.push('this.',this.$$store.init[name],'=value;');
}},__G:function(dS,dT,name,dU,dV){if(dT.inheritable){dS.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dS.push('var computed, old;');
}dS.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU==="resetRuntime"){dS.push('delete this.',this.$$store.runtime[name],';');
dS.push('if(this.',this.$$store.user[name],'!==undefined)');
dS.push('computed=this.',this.$$store.user[name],';');
dS.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dS.push('computed=this.',this.$$store.theme[name],';');
dS.push('else if(this.',this.$$store.init[name],'!==undefined){');
dS.push('computed=this.',this.$$store.init[name],';');
dS.push('this.',this.$$store.useinit[name],'=true;');
dS.push('}');
}else{dS.push('old=computed=this.',this.$$store.runtime[name],';');
if(dU==="set"){dS.push('this.',this.$$store.user[name],'=value;');
}else if(dU==="reset"){dS.push('delete this.',this.$$store.user[name],';');
}else if(dU==="setThemed"){dS.push('this.',this.$$store.theme[name],'=value;');
}else if(dU==="resetThemed"){dS.push('delete this.',this.$$store.theme[name],';');
}else if(dU==="init"&&dV){dS.push('this.',this.$$store.init[name],'=value;');
}}dS.push('}');
dS.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dU==="set"){if(!dT.inheritable){dS.push('old=this.',this.$$store.user[name],';');
}dS.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dU==="reset"){if(!dT.inheritable){dS.push('old=this.',this.$$store.user[name],';');
}dS.push('delete this.',this.$$store.user[name],';');
dS.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dS.push('computed=this.',this.$$store.runtime[name],';');
dS.push('if(this.',this.$$store.theme[name],'!==undefined)');
dS.push('computed=this.',this.$$store.theme[name],';');
dS.push('else if(this.',this.$$store.init[name],'!==undefined){');
dS.push('computed=this.',this.$$store.init[name],';');
dS.push('this.',this.$$store.useinit[name],'=true;');
dS.push('}');
}else{if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dT.inheritable){dS.push('computed=this.',this.$$store.user[name],';');
}else{dS.push('old=computed=this.',this.$$store.user[name],';');
}if(dU==="setThemed"){dS.push('this.',this.$$store.theme[name],'=value;');
}else if(dU==="resetThemed"){dS.push('delete this.',this.$$store.theme[name],';');
}else if(dU==="init"&&dV){dS.push('this.',this.$$store.init[name],'=value;');
}}dS.push('}');
if(dT.themeable){dS.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dT.inheritable){dS.push('old=this.',this.$$store.theme[name],';');
}
if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU==="set"){dS.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dU==="setThemed"){dS.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dU==="resetThemed"){dS.push('delete this.',this.$$store.theme[name],';');
dS.push('if(this.',this.$$store.init[name],'!==undefined){');
dS.push('computed=this.',this.$$store.init[name],';');
dS.push('this.',this.$$store.useinit[name],'=true;');
dS.push('}');
}else if(dU==="init"){if(dV){dS.push('this.',this.$$store.init[name],'=value;');
}dS.push('computed=this.',this.$$store.theme[name],';');
}else if(dU==="refresh"){dS.push('computed=this.',this.$$store.theme[name],';');
}dS.push('}');
}dS.push('else if(this.',this.$$store.useinit[name],'){');

if(!dT.inheritable){dS.push('old=this.',this.$$store.init[name],';');
}
if(dU==="init"){if(dV){dS.push('computed=this.',this.$$store.init[name],'=value;');
}else{dS.push('computed=this.',this.$$store.init[name],';');
}}else if(dU==="set"||dU==="setRuntime"||dU==="setThemed"||dU==="refresh"){dS.push('delete this.',this.$$store.useinit[name],';');

if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU==="set"){dS.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dU==="setThemed"){dS.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dU==="refresh"){dS.push('computed=this.',this.$$store.init[name],';');
}}dS.push('}');
if(dU==="set"||dU==="setRuntime"||dU==="setThemed"||dU==="init"){dS.push('else{');

if(dU==="setRuntime"){dS.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dU==="set"){dS.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dU==="setThemed"){dS.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dU==="init"){if(dV){dS.push('computed=this.',this.$$store.init[name],'=value;');
}else{dS.push('computed=this.',this.$$store.init[name],';');
}dS.push('this.',this.$$store.useinit[name],'=true;');
}dS.push('}');
}},__H:function(dW,dX,name,dY){dW.push('if(computed===undefined||computed===inherit){');

if(dY==="refresh"){dW.push('computed=value;');
}else{dW.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dW.push('if((computed===undefined||computed===inherit)&&');
dW.push('this.',this.$$store.init[name],'!==undefined&&');
dW.push('this.',this.$$store.init[name],'!==inherit){');
dW.push('computed=this.',this.$$store.init[name],';');
dW.push('this.',this.$$store.useinit[name],'=true;');
dW.push('}else{');
dW.push('delete this.',this.$$store.useinit[name],';}');
dW.push('}');
dW.push('if(old===computed)return value;');
dW.push('if(computed===inherit){');
dW.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dW.push('}');
dW.push('else if(computed===undefined)');
dW.push('delete this.',this.$$store.inherit[name],';');
dW.push('else this.',this.$$store.inherit[name],'=computed;');
dW.push('var backup=computed;');
if(dX.init!==undefined&&dY!=="init"){dW.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dW.push('if(old===undefined)old=null;');
}dW.push('if(computed===undefined||computed==inherit)computed=null;');
},__I:function(ea,eb,name,ec){if(ec!=="set"&&ec!=="setRuntime"&&ec!=="setThemed"){ea.push('if(computed===undefined)computed=null;');
}ea.push('if(old===computed)return value;');
if(eb.init!==undefined&&ec!=="init"){ea.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{ea.push('if(old===undefined)old=null;');
}},__J:function(ed,ee,name){if(ee.apply){ed.push('this.',ee.apply,'(computed, old, "',name,'");');
}if(ee.event){ed.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",ee.event,"')){","reg.fireEvent(this, '",ee.event,"', qx.event.type.Data, [computed, old]",")}");
}},__K:function(ef,name){ef.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
ef.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
ef.push('}');
}},defer:function(eg){var ei=navigator.userAgent.indexOf(h)!=-1;
var eh=navigator.userAgent.indexOf(ba)!=-1;
if(ei||eh){eg.__w=eg.__x;
}}});
})();
(function(){var m="qx.debug",k=".",j="object",h="static",g="function",f="Array",e="singleton",d="qx.aspects",c="abstract",b="constructor",B="environment",A="extend",z="string",y="members",x="variants",w="properties",v="statics",u="events",t="]",s="Interface",q="qx.Class",r="Mixin",o="settings",p='Assumed static class because no "extend" key was found. ',n="[Class ";
qx.Bootstrap.define(q,{statics:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,C){if(!C){var C={};
}if(C.include&&!(qx.Bootstrap.getClass(C.include)===f)){C.include=[C.include];
}if(C.implement&&!(qx.Bootstrap.getClass(C.implement)===f)){C.implement=[C.implement];
}var D=false;

if(!C.hasOwnProperty(A)&&!C.type){C.type=h;
D=true;
}if(qx.core.Environment.get(m)){try{this.__d(name,C);
}catch(G){if(D){G.message=p+G.message;
}throw G;
}}var E=this.__O(name,C.type,C.extend,C.statics,C.construct,C.destruct,C.include);
if(C.extend){if(C.properties){this.__Q(E,C.properties,true);
}if(C.members){this.__S(E,C.members,true,true,false);
}if(C.events){this.__P(E,C.events,true);
}if(C.include){for(var i=0,l=C.include.length;i<l;i++){this.__W(E,C.include[i],false);
}}}if(C.environment){for(var F in C.environment){qx.core.Environment.add(F,C.environment[F]);
}}if(C.implement){for(var i=0,l=C.implement.length;i<l;i++){this.__U(E,C.implement[i]);
}}
if(qx.core.Environment.get(m)){this.__N(E);
}if(C.defer){C.defer.self=E;
C.defer(E,E.prototype,{add:function(name,H){var I={};
I[name]=H;
qx.Class.__Q(E,I,true);
}});
}return E;
},undefine:function(name){delete this.$$registry[name];
var J=name.split(k);
var L=[window];

for(var i=0;i<J.length;i++){L.push(L[i][J[i]]);
}for(var i=L.length-1;i>=1;i--){var K=L[i];
var parent=L[i-1];

if(qx.Bootstrap.isFunction(K)||qx.Bootstrap.objectGetLength(K)===0){delete parent[J[i-1]];
}else{break;
}}},isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(M,N){if(qx.core.Environment.get(m)){if(!N){throw new Error("The mixin to include into class '"+M.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(N,M);
}qx.Class.__W(M,N,false);
},patch:function(O,P){if(qx.core.Environment.get(m)){if(!P){throw new Error("The mixin to patch class '"+O.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(P,O);
}qx.Class.__W(O,P,true);
},isSubClassOf:function(Q,R){if(!Q){return false;
}
if(Q==R){return true;
}
if(Q.prototype instanceof R){return true;
}return false;
},getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(S){var T=[];

while(S){if(S.$$properties){T.push.apply(T,qx.Bootstrap.getKeys(S.$$properties));
}S=S.superclass;
}return T;
},getByProperty:function(U,name){while(U){if(U.$$properties&&U.$$properties[name]){return U;
}U=U.superclass;
}return null;
},hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(V,W){return V.$$includes&&V.$$includes.indexOf(W)!==-1;
},getByMixin:function(X,Y){var ba,i,l;

while(X){if(X.$$includes){ba=X.$$flatIncludes;

for(i=0,l=ba.length;i<l;i++){if(ba[i]===Y){return X;
}}}X=X.superclass;
}return null;
},getMixins:qx.util.OOUtil.getMixins,hasMixin:function(bb,bc){return !!this.getByMixin(bb,bc);
},hasOwnInterface:function(bd,be){return bd.$$implements&&bd.$$implements.indexOf(be)!==-1;
},getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(bf){var bg=[];

while(bf){if(bf.$$implements){bg.push.apply(bg,bf.$$flatImplements);
}bf=bf.superclass;
}return bg;
},hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(bh,bi){var bj=bh.constructor;

if(this.hasInterface(bj,bi)){return true;
}
try{qx.Interface.assertObject(bh,bi);
return true;
}catch(bk){}
try{qx.Interface.assert(bj,bi,false);
return true;
}catch(bl){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return n+this.classname+t;
},$$registry:qx.Bootstrap.$$registry,__c:qx.core.Environment.select(m,{"true":{"type":z,"extend":g,"implement":j,"include":j,"construct":g,"statics":j,"properties":j,"members":j,"environment":j,"events":j,"defer":g,"destruct":g},"default":null}),__M:qx.core.Environment.select("qx.debug",{"true":{"type":"string","statics":"object","environment":"object","defer":"function"},"default":null}),__d:qx.core.Environment.select(m,{"true":function(name,bm){if(bm.type&&!(bm.type===h||bm.type===c||bm.type===e)){throw new Error('Invalid type "'+bm.type+'" definition for class "'+name+'"!');
}if(bm.type&&bm.type!==h&&!bm.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bp=bm.type===h?this.__M:this.__c;

for(var bo in bm){if(!bp[bo]){throw new Error('The configuration key "'+bo+'" in class "'+name+'" is not allowed!');
}
if(bm[bo]==null){throw new Error('Invalid key "'+bo+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof bm[bo]!==bp[bo]){throw new Error('Invalid type of key "'+bo+'" in class "'+name+'"! The type of the key must be "'+bp[bo]+'"!');
}}var bn=[v,w,y,B,o,x,u];

for(var i=0,l=bn.length;i<l;i++){var bo=bn[i];

if(bm[bo]!==undefined&&(bm[bo].$$hash!==undefined||!qx.Bootstrap.isObject(bm[bo]))){throw new Error('Invalid key "'+bo+'" in class "'+name+'"! The value needs to be a map!');
}}if(bm.include){if(qx.Bootstrap.getClass(bm.include)===f){for(var i=0,a=bm.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==r){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(bm.implement){if(qx.Bootstrap.getClass(bm.implement)===f){for(var i=0,a=bm.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==s){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(bm.include){try{qx.Mixin.checkCompatibility(bm.include);
}catch(bq){throw new Error('Error in include definition of class "'+name+'"! '+bq.message);
}}if(bm.environment){for(var bo in bm.environment){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden environment setting "'+bo+'" found in "'+name+'". It is forbidden to define a '+'environment setting for an external namespace!');
}}}if(bm.settings){for(var bo in bm.settings){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden setting "'+bo+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(bm.variants){for(var bo in bm.variants){if(bo.substr(0,bo.indexOf(k))!=name.substr(0,name.indexOf(k))){throw new Error('Forbidden variant "'+bo+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__N:qx.core.Environment.select("qx.debug",{"true":function(br){var bt=br.superclass;

while(bt){if(bt.$$classtype!=="abstract"){break;
}var bs=bt.$$implements;

if(bs){for(var i=0;i<bs.length;i++){qx.Interface.assert(br,bs[i],true);
}}bt=bt.superclass;
}},"default":function(){}}),__O:function(name,bu,bv,bw,bx,by,bz){var bC;

if(!bv&&qx.core.Environment.get("qx.aspects")==false){bC=bw||{};
qx.Bootstrap.setDisplayNames(bC,name);
}else{var bC={};

if(bv){if(!bx){bx=this.__X();
}
if(this.__ba(bv,bz)){bC=this.__bb(bx,name,bu);
}else{bC=bx;
}if(bu==="singleton"){bC.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bx,name,"constructor");
}if(bw){qx.Bootstrap.setDisplayNames(bw,name);
var bD;

for(var i=0,a=qx.Bootstrap.getKeys(bw),l=a.length;i<l;i++){bD=a[i];
var bA=bw[bD];

if(qx.core.Environment.get("qx.aspects")){if(bA instanceof Function){bA=qx.core.Aspect.wrap(name+"."+bD,bA,"static");
}bC[bD]=bA;
}else{bC[bD]=bA;
}}}}var bB=qx.Bootstrap.createNamespace(name,bC);
bC.name=bC.classname=name;
bC.basename=bB;
bC.$$type="Class";

if(bu){bC.$$classtype=bu;
}if(!bC.hasOwnProperty("toString")){bC.toString=this.genericToString;
}
if(bv){qx.Bootstrap.extendClass(bC,bx,bv,name,bB);
if(by){if(qx.core.Environment.get("qx.aspects")){by=qx.core.Aspect.wrap(name,by,"destructor");
}bC.$$destructor=by;
qx.Bootstrap.setDisplayName(by,name,"destruct");
}}this.$$registry[name]=bC;
return bC;
},__P:function(bE,bF,bG){if(qx.core.Environment.get("qx.debug")){if(typeof bF!=="object"||qx.Bootstrap.getClass(bF)==="Array"){throw new Error(bE.classname+": the events must be defined as map!");
}
for(var bH in bF){if(typeof bF[bH]!=="string"){throw new Error(bE.classname+"/"+bH+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bE.$$events&&bG!==true){for(var bH in bF){if(bE.$$events[bH]!==undefined&&bE.$$events[bH]!==bF[bH]){throw new Error(bE.classname+"/"+bH+": the event value/type cannot be changed from "+bE.$$events[bH]+" to "+bF[bH]);
}}}}
if(bE.$$events){for(var bH in bF){bE.$$events[bH]=bF[bH];
}}else{bE.$$events=bF;
}},__Q:function(bI,bJ,bK){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bL;

if(bK===undefined){bK=false;
}var bM=bI.prototype;

for(var name in bJ){bL=bJ[name];
if(qx.core.Environment.get("qx.debug")){this.__R(bI,name,bL,bK);
}bL.name=name;
if(!bL.refine){if(bI.$$properties===undefined){bI.$$properties={};
}bI.$$properties[name]=bL;
}if(bL.init!==undefined){bI.prototype["$$init_"+name]=bL.init;
}if(bL.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");
}var event={};
event[bL.event]="qx.event.type.Data";
this.__P(bI,event,bK);
}if(bL.inheritable){this.__L.$$inheritable[name]=true;

if(!bM.$$refreshInheritables){this.__L.attachRefreshInheritables(bI);
}}
if(!bL.refine){this.__L.attachMethods(bI,name,bL);
}}},__R:qx.core.Environment.select("qx.debug",{"true":function(bN,name,bO,bP){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bR=this.hasProperty(bN,name);

if(bR){var bQ=this.getPropertyDefinition(bN,name);

if(bO.refine&&bQ.init===undefined){throw new Error("Could not refine an init value if there was previously no init value defined. Property '"+name+"' of class '"+bN.classname+"'.");
}}
if(!bR&&bO.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bN.classname+"'!");
}
if(bR&&!bP){throw new Error("Class "+bN.classname+" already has a property: "+name+"!");
}
if(bR&&bP){if(!bO.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bN.classname+', original class: '+this.getByProperty(bN,name).classname+'.');
}
for(var bS in bO){if(bS!=="init"&&bS!=="refine"){throw new Error("Class "+bN.classname+" could not refine property: "+name+"! Key: "+bS+" could not be refined!");
}}}var bT=bO.group?this.__L.$$allowedGroupKeys:this.__L.$$allowedKeys;

for(var bS in bO){if(bT[bS]===undefined){throw new Error('The configuration key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'" is not allowed!');
}
if(bO[bS]===undefined){throw new Error('Invalid key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The value is undefined: '+bO[bS]);
}
if(bT[bS]!==null&&typeof bO[bS]!==bT[bS]){throw new Error('Invalid type of key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The type of the key must be "'+bT[bS]+'"!');
}}
if(bO.transform!=null){if(!(typeof bO.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String.');
}}
if(bO.check!=null){if(!qx.Bootstrap.isString(bO.check)&&!qx.Bootstrap.isArray(bO.check)&&!qx.Bootstrap.isFunction(bO.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__S:function(bU,bV,bW,bX,bY){var ca=bU.prototype;
var cc,cb;
qx.Bootstrap.setDisplayNames(bV,bU.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bV),l=a.length;i<l;i++){cc=a[i];
cb=bV[cc];

if(qx.core.Environment.get("qx.debug")){if(ca[cc]!==undefined&&cc.charAt(0)=="_"&&cc.charAt(1)=="_"){throw new Error('Overwriting private member "'+cc+'" of Class "'+bU.classname+'" is not allowed!');
}
if(bW!==true&&ca.hasOwnProperty(cc)){throw new Error('Overwriting member "'+cc+'" of Class "'+bU.classname+'" is not allowed!');
}}if(bX!==false&&cb instanceof Function&&cb.$$type==null){if(bY==true){cb=this.__T(cb,ca[cc]);
}else{if(ca[cc]){cb.base=ca[cc];
}cb.self=bU;
}
if(qx.core.Environment.get("qx.aspects")){cb=qx.core.Aspect.wrap(bU.classname+"."+cc,cb,"member");
}}ca[cc]=cb;
}},__T:function(cd,ce){if(ce){return function(){var cg=cd.base;
cd.base=ce;
var cf=cd.apply(this,arguments);
cd.base=cg;
return cf;
};
}else{return cd;
}},__U:function(ch,ci){if(qx.core.Environment.get("qx.debug")){if(!ch||!ci){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(ch,ci)){throw new Error('Interface "'+ci.name+'" is already used by Class "'+ch.classname+'!');
}if(ch.$$classtype!=="abstract"){qx.Interface.assert(ch,ci,true);
}}var cj=qx.Interface.flatten([ci]);

if(ch.$$implements){ch.$$implements.push(ci);
ch.$$flatImplements.push.apply(ch.$$flatImplements,cj);
}else{ch.$$implements=[ci];
ch.$$flatImplements=cj;
}},__V:function(ck){var name=ck.classname;
var cl=this.__bb(ck,name,ck.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(ck),l=a.length;i<l;i++){cm=a[i];
cl[cm]=ck[cm];
}cl.prototype=ck.prototype;
var co=ck.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(co),l=a.length;i<l;i++){cm=a[i];
var cp=co[cm];
if(cp&&cp.self==ck){cp.self=cl;
}}for(var cm in this.$$registry){var cn=this.$$registry[cm];

if(!cn){continue;
}
if(cn.base==ck){cn.base=cl;
}
if(cn.superclass==ck){cn.superclass=cl;
}
if(cn.$$original){if(cn.$$original.base==ck){cn.$$original.base=cl;
}
if(cn.$$original.superclass==ck){cn.$$original.superclass=cl;
}}}qx.Bootstrap.createNamespace(name,cl);
this.$$registry[name]=cl;
return cl;
},__W:function(cq,cr,cs){if(qx.core.Environment.get("qx.debug")){if(!cq||!cr){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cq,cr)){return;
}var cv=cq.$$original;

if(cr.$$constructor&&!cv){cq=this.__V(cq);
}var cu=qx.Mixin.flatten([cr]);
var ct;

for(var i=0,l=cu.length;i<l;i++){ct=cu[i];
if(ct.$$events){this.__P(cq,ct.$$events,cs);
}if(ct.$$properties){this.__Q(cq,ct.$$properties,cs);
}if(ct.$$members){this.__S(cq,ct.$$members,cs,cs,cs);
}}if(cq.$$includes){cq.$$includes.push(cr);
cq.$$flatIncludes.push.apply(cq.$$flatIncludes,cu);
}else{cq.$$includes=[cr];
cq.$$flatIncludes=cu;
}},__X:function(){function cw(){cw.base.apply(this,arguments);
}return cw;
},__Y:function(){return function(){};
},__ba:function(cx,cy){if(qx.core.Environment.get(m)){return true;
}if(cx&&cx.$$includes){var cz=cx.$$flatIncludes;

for(var i=0,l=cz.length;i<l;i++){if(cz[i].$$constructor){return true;
}}}if(cy){var cA=qx.Mixin.flatten(cy);

for(var i=0,l=cA.length;i<l;i++){if(cA[i].$$constructor){return true;
}}}return false;
},__bb:function(cB,name,cC){var cE=function(){var cH=cE;

if(qx.core.Environment.get(m)){if(!(this instanceof cH)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cC===c){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cC===e){if(!cH.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var cG=cH.$$original.apply(this,arguments);
if(cH.$$includes){var cF=cH.$$flatIncludes;

for(var i=0,l=cF.length;i<l;i++){if(cF[i].$$constructor){cF[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Environment.get(m)){if(this.classname===name){this.$$initialized=true;
}}return cG;
};

if(qx.core.Environment.get(d)){var cD=qx.core.Aspect.wrap(name,cE,b);
cE.$$original=cB;
cE.constructor=cD;
cE=cD;
}cE.$$original=cB;
cB.wrapper=cE;
return cE;
}},defer:function(){if(qx.core.Environment.get(d)){for(var cI in qx.Bootstrap.$$registry){var cJ=qx.Bootstrap.$$registry[cI];

for(var cK in cJ){if(cJ[cK] instanceof Function){cJ[cK]=qx.core.Aspect.wrap(cI+k+cK,cJ[cK],h);
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
(function(){var m="get",l="",k="[",h=".",g="last",f="change",d="]",c="Number",b="String",a="qx.debug.databinding",J="set",I="deepBinding",H="item",G="reset",F="qx.debug",E="' (",D="Boolean",C=") to the object '",B="Integer",A=" of object ",u="qx.event.type.Data",v="qx.data.SingleValueBinding",s="Binding property ",t="Can not remove the bindings for null object!",q="Binding from '",r="PositiveNumber",n="PositiveInteger",p="Binding does not exist!",w=" is not an data (qx.event.type.Data) event on ",x=").",z="Date",y=" not possible: No event available. ";
qx.Class.define(v,{statics:{__bg:{},bind:function(K,L,M,N,O){var ba=this.__bi(K,L,M,N,O);
var U=L.split(h);
var Q=this.__bo(U);
var Y=[];
var V=[];
var W=[];
var S=[];
var T=K;
try{for(var i=0;i<U.length;i++){if(Q[i]!==l){S.push(f);
}else{S.push(this.__bj(T,U[i]));
}Y[i]=T;
if(i==U.length-1){if(Q[i]!==l){var be=Q[i]===g?T.length-1:Q[i];
var P=T.getItem(be);
this.__bn(P,M,N,O,K);
W[i]=this.__bp(T,S[i],M,N,O,Q[i]);
}else{if(U[i]!=null&&T[m+qx.lang.String.firstUp(U[i])]!=null){var P=T[m+qx.lang.String.firstUp(U[i])]();
this.__bn(P,M,N,O,K);
}W[i]=this.__bp(T,S[i],M,N,O);
}}else{var bb={index:i,propertyNames:U,sources:Y,listenerIds:W,arrayIndexValues:Q,targetObject:M,targetPropertyChain:N,options:O,listeners:V};
var X=qx.lang.Function.bind(this.__bh,this,bb);
V.push(X);
W[i]=T.addListener(S[i],X);
}if(T[m+qx.lang.String.firstUp(U[i])]==null){T=null;
}else if(Q[i]!==l){T=T[m+qx.lang.String.firstUp(U[i])](Q[i]);
}else{T=T[m+qx.lang.String.firstUp(U[i])]();
}
if(!T){break;
}}}catch(bf){for(var i=0;i<Y.length;i++){if(Y[i]&&W[i]){Y[i].removeListenerById(W[i]);
}}var bd=ba.targets;
var R=ba.listenerIds[i];
for(var i=0;i<bd.length;i++){if(bd[i]&&R[i]){bd[i].removeListenerById(R[i]);
}}throw bf;
}var bc={type:I,listenerIds:W,sources:Y,targetListenerIds:ba.listenerIds,targets:ba.targets};
this.__bq(bc,K,L,M,N);
return bc;
},__bh:function(bg){if(bg.options&&bg.options.onUpdate){bg.options.onUpdate(bg.sources[bg.index],bg.targetObject);
}for(var j=bg.index+1;j<bg.propertyNames.length;j++){var bk=bg.sources[j];
bg.sources[j]=null;

if(!bk){continue;
}bk.removeListenerById(bg.listenerIds[j]);
}var bk=bg.sources[bg.index];
for(var j=bg.index+1;j<bg.propertyNames.length;j++){if(bg.arrayIndexValues[j-1]!==l){bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])](bg.arrayIndexValues[j-1]);
}else{bk=bk[m+qx.lang.String.firstUp(bg.propertyNames[j-1])]();
}bg.sources[j]=bk;
if(!bk){this.__bk(bg.targetObject,bg.targetPropertyChain);
break;
}if(j==bg.propertyNames.length-1){if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bl=bg.arrayIndexValues[j]===g?bk.length-1:bg.arrayIndexValues[j];
var bi=bk.getItem(bl);
this.__bn(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
bg.listenerIds[j]=this.__bp(bk,f,bg.targetObject,bg.targetPropertyChain,bg.options,bg.arrayIndexValues[j]);
}else{if(bg.propertyNames[j]!=null&&bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]!=null){var bi=bk[m+qx.lang.String.firstUp(bg.propertyNames[j])]();
this.__bn(bi,bg.targetObject,bg.targetPropertyChain,bg.options,bg.sources[bg.index]);
}var bj=this.__bj(bk,bg.propertyNames[j]);
bg.listenerIds[j]=this.__bp(bk,bj,bg.targetObject,bg.targetPropertyChain,bg.options);
}}else{if(bg.listeners[j]==null){var bh=qx.lang.Function.bind(this.__bh,this,bg);
bg.listeners.push(bh);
}if(qx.Class.implementsInterface(bk,qx.data.IListData)){var bj=f;
}else{var bj=this.__bj(bk,bg.propertyNames[j]);
}bg.listenerIds[j]=bk.addListener(bj,bg.listeners[j]);
}}},__bi:function(bm,bn,bo,bp,bq){var bu=bp.split(h);
var bs=this.__bo(bu);
var bz=[];
var by=[];
var bw=[];
var bv=[];
var bt=bo;
for(var i=0;i<bu.length-1;i++){if(bs[i]!==l){bv.push(f);
}else{try{bv.push(this.__bj(bt,bu[i]));
}catch(e){break;
}}bz[i]=bt;
var bx=function(){for(var j=i+1;j<bu.length-1;j++){var bC=bz[j];
bz[j]=null;

if(!bC){continue;
}bC.removeListenerById(bw[j]);
}var bC=bz[i];
for(var j=i+1;j<bu.length-1;j++){var bA=qx.lang.String.firstUp(bu[j-1]);
if(bs[j-1]!==l){var bD=bs[j-1]===g?bC.getLength()-1:bs[j-1];
bC=bC[m+bA](bD);
}else{bC=bC[m+bA]();
}bz[j]=bC;
if(by[j]==null){by.push(bx);
}if(qx.Class.implementsInterface(bC,qx.data.IListData)){var bB=f;
}else{try{var bB=qx.data.SingleValueBinding.__bj(bC,bu[j]);
}catch(e){break;
}}bw[j]=bC.addListener(bB,by[j]);
}qx.data.SingleValueBinding.updateTarget(bm,bn,bo,bp,bq);
};
by.push(bx);
bw[i]=bt.addListener(bv[i],bx);
var br=qx.lang.String.firstUp(bu[i]);
if(bt[m+br]==null){bt=null;
}else if(bs[i]!==l){bt=bt[m+br](bs[i]);
}else{bt=bt[m+br]();
}
if(!bt){break;
}}return {listenerIds:bw,targets:bz};
},updateTarget:function(bE,bF,bG,bH,bI){var bJ=this.getValueFromObject(bE,bF);
bJ=qx.data.SingleValueBinding.__br(bJ,bG,bH,bI,bE);
this.__bl(bG,bH,bJ);
},getValueFromObject:function(o,bK){var bO=this.__bm(o,bK);
var bM;

if(bO!=null){var bQ=bK.substring(bK.lastIndexOf(h)+1,bK.length);
if(bQ.charAt(bQ.length-1)==d){var bL=bQ.substring(bQ.lastIndexOf(k)+1,bQ.length-1);
var bN=bQ.substring(0,bQ.lastIndexOf(k));
var bP=bO[m+qx.lang.String.firstUp(bN)]();

if(bL==g){bL=bP.length-1;
}
if(bP!=null){bM=bP.getItem(bL);
}}else{bM=bO[m+qx.lang.String.firstUp(bQ)]();
}}return bM;
},__bj:function(bR,bS){var bT=this.__bs(bR,bS);
if(bT==null){if(qx.Class.supportsEvent(bR.constructor,bS)){bT=bS;
}else if(qx.Class.supportsEvent(bR.constructor,f+qx.lang.String.firstUp(bS))){bT=f+qx.lang.String.firstUp(bS);
}else{throw new qx.core.AssertionError(s+bS+A+bR+y);
}}return bT;
},__bk:function(bU,bV){var bW=this.__bm(bU,bV);

if(bW!=null){var bX=bV.substring(bV.lastIndexOf(h)+1,bV.length);
if(bX.charAt(bX.length-1)==d){this.__bl(bU,bV,null);
return;
}if(bW[G+qx.lang.String.firstUp(bX)]!=undefined){bW[G+qx.lang.String.firstUp(bX)]();
}else{bW[J+qx.lang.String.firstUp(bX)](null);
}}},__bl:function(bY,ca,cb){var cf=this.__bm(bY,ca);

if(cf!=null){var cg=ca.substring(ca.lastIndexOf(h)+1,ca.length);
if(cg.charAt(cg.length-1)==d){var cc=cg.substring(cg.lastIndexOf(k)+1,cg.length-1);
var ce=cg.substring(0,cg.lastIndexOf(k));
var cd=bY;

if(!qx.Class.implementsInterface(cd,qx.data.IListData)){cd=cf[m+qx.lang.String.firstUp(ce)]();
}
if(cc==g){cc=cd.length-1;
}
if(cd!=null){cd.setItem(cc,cb);
}}else{cf[J+qx.lang.String.firstUp(cg)](cb);
}}},__bm:function(ch,ci){var cl=ci.split(h);
var cm=ch;
for(var i=0;i<cl.length-1;i++){try{var ck=cl[i];
if(ck.indexOf(d)==ck.length-1){var cj=ck.substring(ck.indexOf(k)+1,ck.length-1);
ck=ck.substring(0,ck.indexOf(k));
}if(ck!=l){cm=cm[m+qx.lang.String.firstUp(ck)]();
}if(cj!=null){if(cj==g){cj=cm.length-1;
}cm=cm.getItem(cj);
cj=null;
}}catch(cn){return null;
}}return cm;
},__bn:function(co,cp,cq,cr,cs){co=this.__br(co,cp,cq,cr,cs);
if(co===undefined){this.__bk(cp,cq);
}if(co!==undefined){try{this.__bl(cp,cq,co);
if(cr&&cr.onUpdate){cr.onUpdate(cs,cp,co);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cr&&cr.onSetFail){cr.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+co+" on "+cp+". Error message: "+e);
}}}},__bo:function(ct){var cu=[];
for(var i=0;i<ct.length;i++){var name=ct[i];
if(qx.lang.String.endsWith(name,d)){var cv=name.substring(name.indexOf(k)+1,name.indexOf(d));
if(name.indexOf(d)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cv!==g){if(cv==l||isNaN(parseInt(cv,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){ct[i]=name.substring(0,name.indexOf(k));
cu[i]=l;
cu[i+1]=cv;
ct.splice(i+1,0,H);
i++;
}else{cu[i]=cv;
ct.splice(i,1,H);
}}else{cu[i]=l;
}}return cu;
},__bp:function(cw,cx,cy,cz,cA,cB){if(qx.core.Environment.get(F)){var cC=qx.Class.getEventType(cw.constructor,cx);
qx.core.Assert.assertEquals(u,cC,cx+w+cw+h);
}var cE=function(cF,e){if(cF!==l){if(cF===g){cF=cw.length-1;
}var cI=cw.getItem(cF);
if(cI===undefined){qx.data.SingleValueBinding.__bk(cy,cz);
}var cG=e.getData().start;
var cH=e.getData().end;

if(cF<cG||cF>cH){return;
}}else{var cI=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cw+" by "+cx+" to "+cy+" ("+cz+")");
qx.log.Logger.debug("Data before conversion: "+cI);
}cI=qx.data.SingleValueBinding.__br(cI,cy,cz,cA,cw);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cI);
}try{if(cI!==undefined){qx.data.SingleValueBinding.__bl(cy,cz,cI);
}else{qx.data.SingleValueBinding.__bk(cy,cz);
}if(cA&&cA.onUpdate){cA.onUpdate(cw,cy,cI);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cA&&cA.onSetFail){cA.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cI+" on "+cy+". Error message: "+e);
}}};
if(!cB){cB=l;
}cE=qx.lang.Function.bind(cE,cw,cB);
var cD=cw.addListener(cx,cE);
return cD;
},__bq:function(cJ,cK,cL,cM,cN){if(this.__bg[cK.toHashCode()]===undefined){this.__bg[cK.toHashCode()]=[];
}this.__bg[cK.toHashCode()].push([cJ,cK,cL,cM,cN]);
},__br:function(cO,cP,cQ,cR,cS){if(cR&&cR.converter){var cU;

if(cP.getModel){cU=cP.getModel();
}return cR.converter(cO,cU,cS,cP);
}else{var cW=this.__bm(cP,cQ);
var cX=cQ.substring(cQ.lastIndexOf(h)+1,cQ.length);
if(cW==null){return cO;
}var cV=qx.Class.getPropertyDefinition(cW.constructor,cX);
var cT=cV==null?l:cV.check;
return this.__bt(cO,cT);
}},__bs:function(cY,da){var db=qx.Class.getPropertyDefinition(cY.constructor,da);

if(db==null){return null;
}return db.event;
},__bt:function(dc,dd){var de=qx.lang.Type.getClass(dc);
if((de==c||de==b)&&(dd==B||dd==n)){dc=parseInt(dc,10);
}if((de==D||de==c||de==z)&&dd==b){dc=dc+l;
}if((de==c||de==b)&&(dd==c||dd==r)){dc=parseFloat(dc);
}return dc;
},removeBindingFromObject:function(df,dg){if(dg.type==I){for(var i=0;i<dg.sources.length;i++){if(dg.sources[i]){dg.sources[i].removeListenerById(dg.listenerIds[i]);
}}for(var i=0;i<dg.targets.length;i++){if(dg.targets[i]){dg.targets[i].removeListenerById(dg.targetListenerIds[i]);
}}}else{df.removeListenerById(dg);
}var dh=this.__bg[df.toHashCode()];
if(dh!=undefined){for(var i=0;i<dh.length;i++){if(dh[i][0]==dg){qx.lang.Array.remove(dh,dh[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(di){if(qx.core.Environment.get(F)){qx.core.Assert.assertNotNull(di,t);
}var dj=this.__bg[di.toHashCode()];

if(dj!=undefined){for(var i=dj.length-1;i>=0;i--){this.removeBindingFromObject(di,dj[i][0]);
}}},getAllBindingsForObject:function(dk){if(this.__bg[dk.toHashCode()]===undefined){this.__bg[dk.toHashCode()]=[];
}return this.__bg[dk.toHashCode()];
},removeAllBindings:function(){for(var dm in this.__bg){var dl=qx.core.ObjectRegistry.fromHashCode(dm);
if(dl==null){delete this.__bg[dm];
continue;
}this.removeAllBindingsForObject(dl);
}this.__bg={};
},getAllBindings:function(){return this.__bg;
},showBindingInLog:function(dn,dp){var dr;
for(var i=0;i<this.__bg[dn.toHashCode()].length;i++){if(this.__bg[dn.toHashCode()][i][0]==dp){dr=this.__bg[dn.toHashCode()][i];
break;
}}
if(dr===undefined){var dq=p;
}else{var dq=q+dr[1]+E+dr[2]+C+dr[3]+E+dr[4]+x;
}qx.log.Logger.debug(dq);
},showAllBindingsInLog:function(){for(var dt in this.__bg){var ds=qx.core.ObjectRegistry.fromHashCode(dt);

for(var i=0;i<this.__bg[dt].length;i++){this.showBindingInLog(ds,this.__bg[dt][i][0]);
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
(function(){var m="qx.debug",k="The second parameter must be an array.",j="mshtml",h="engine.name",g="The first parameter must be an array.",f="Parameter must be an array.",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Bootstrap.define(d,{statics:{toArray:function(n,o){return this.cast(n,Array,o);
},cast:function(p,q,r){if(p.constructor===q){return p;
}
if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(p,qx.data.IListData)){var p=p.toArray();
}}var s=new q;
if((qx.core.Environment.get(h)==j)){if(p.item){for(var i=r||0,l=p.length;i<l;i++){s.push(p[i]);
}return s;
}}if(Object.prototype.toString.call(p)===e&&r==null){s.push.apply(s,p);
}else{s.push.apply(s,Array.prototype.slice.call(p,r||0));
}return s;
},fromArguments:function(t,u){return Array.prototype.slice.call(t,u||0);
},fromCollection:function(v){if((qx.core.Environment.get(h)==j)){if(v.item){var w=[];

for(var i=0,l=v.length;i<l;i++){w[i]=v[i];
}return w;
}}return Array.prototype.slice.call(v,0);
},fromShortHand:function(x){var z=x.length;
var y=qx.lang.Array.clone(x);
switch(z){case 1:y[1]=y[2]=y[3]=y[0];
break;
case 2:y[2]=y[0];
case 3:y[3]=y[1];
}return y;
},clone:function(A){return A.concat();
},insertAt:function(B,C,i){B.splice(i,0,C);
return B;
},insertBefore:function(D,E,F){var i=D.indexOf(F);

if(i==-1){D.push(E);
}else{D.splice(i,0,E);
}return D;
},insertAfter:function(G,H,I){var i=G.indexOf(I);

if(i==-1||i==(G.length-1)){G.push(H);
}else{G.splice(i+1,0,H);
}return G;
},removeAt:function(J,i){return J.splice(i,1)[0];
},removeAll:function(K){K.length=0;
return this;
},append:function(L,M){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(L,g);
qx.core.Assert&&qx.core.Assert.assertArray(M,k);
}Array.prototype.push.apply(L,M);
return L;
},exclude:function(N,O){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(N,g);
qx.core.Assert&&qx.core.Assert.assertArray(O,k);
}
for(var i=0,Q=O.length,P;i<Q;i++){P=N.indexOf(O[i]);

if(P!=-1){N.splice(P,1);
}}return N;
},remove:function(R,S){var i=R.indexOf(S);

if(i!=-1){R.splice(i,1);
return S;
}},contains:function(T,U){return T.indexOf(U)!==-1;
},equals:function(V,W){var length=V.length;

if(length!==W.length){return false;
}
for(var i=0;i<length;i++){if(V[i]!==W[i]){return false;
}}return true;
},sum:function(X){var Y=0;

for(var i=0,l=X.length;i<l;i++){Y+=X[i];
}return Y;
},max:function(ba){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(ba,f);
}var i,bc=ba.length,bb=ba[0];

for(i=1;i<bc;i++){if(ba[i]>bb){bb=ba[i];
}}return bb===undefined?null:bb;
},min:function(bd){if(qx.core.Environment.get(m)){qx.core.Assert&&qx.core.Assert.assertArray(bd,f);
}var i,bf=bd.length,be=bd[0];

for(i=1;i<bf;i++){if(bd[i]<be){be=bd[i];
}}return be===undefined?null:be;
},unique:function(bg){var bq=[],bi={},bl={},bn={};
var bm,bh=0;
var br=c+qx.lang.Date.now();
var bj=false,bp=false,bs=false;
for(var i=0,bo=bg.length;i<bo;i++){bm=bg[i];
if(bm===null){if(!bj){bj=true;
bq.push(bm);
}}else if(bm===undefined){}else if(bm===false){if(!bp){bp=true;
bq.push(bm);
}}else if(bm===true){if(!bs){bs=true;
bq.push(bm);
}}else if(typeof bm===a){if(!bi[bm]){bi[bm]=1;
bq.push(bm);
}}else if(typeof bm===b){if(!bl[bm]){bl[bm]=1;
bq.push(bm);
}}else{var bk=bm[br];

if(bk==null){bk=bm[br]=bh++;
}
if(!bn[bk]){bn[bk]=bm;
bq.push(bm);
}}}for(var bk in bn){try{delete bn[bk][br];
}catch(bt){try{bn[bk][br]=null;
}catch(bu){throw new Error("Cannot clean-up map entry doneObjects["+bk+"]["+br+"]");
}}}return bq;
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
(function(){var q=":",p="ecmascript.stacktrace",o="qx.debug",n="Error created at",m="function",l="engine.name",k="...",j="qx.dev.StackTrace",h="",g="\n",c="/source/class/",f="anonymous",e="stack",b=".",a="?",d="stacktrace";
qx.Bootstrap.define(j,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(E){var y=this.getStackTraceFromError(E);
qx.lang.Array.removeAt(y,0);
var w=this.getStackTraceFromCaller(arguments);
var u=w.length>y.length?w:y;

for(var i=0;i<Math.min(w.length,y.length);i++){var v=w[i];

if(v.indexOf(f)>=0){continue;
}var C=v.split(q);

if(C.length!=2){continue;
}var A=C[0];
var t=C[1];
var s=y[i];
var D=s.split(q);
var z=D[0];
var r=D[1];

if(qx.Class.getByName(z)){var x=z;
}else{x=A;
}var B=x+q;

if(t){B+=t+q;
}B+=r;
u[i]=B;
}return u;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var F;

try{F.bar();
}catch(H){var G=this.getStackTraceFromError(H);
qx.lang.Array.removeAt(G,0);
return G;
}return [];
}}),getStackTraceFromCaller:function(I){var N=[];
var M=qx.lang.Function.getCaller(I);
var J={};

while(M){var K=qx.lang.Function.getName(M);
N.push(K);

try{M=M.caller;
}catch(O){break;
}
if(!M){break;
}var L=qx.core.ObjectRegistry.toHashCode(M);

if(J[L]){N.push(k);
break;
}J[L]=M;
}return N;
},getStackTraceFromError:function(P){var T=[];

if(qx.core.Environment.get(p)===e){if(!P.stack){return T;
}var bf=/@(.+):(\d+)$/gm;
var S;

while((S=bf.exec(P.stack))!=null){var V=S[1];
var bd=S[2];
var bb=this.__bS(V);
T.push(bb+q+bd);
}
if(T.length>0){return this.__bU(T);
}var bf=/at (.*)/gm;
var be=/\((.*?)(:[^\/].*)\)/;
var ba=/(.*?)(:[^\/].*)/;
var S;

while((S=bf.exec(P.stack))!=null){var Y=be.exec(S[1]);

if(!Y){Y=ba.exec(S[1]);
}
if(Y){var bb=this.__bS(Y[1]);
T.push(bb+Y[2]);
}else{T.push(S[1]);
}}}else if(qx.core.Environment.get(p)===d){var R=P.stacktrace;

if(!R){return T;
}
if(R.indexOf(n)>=0){R=R.split(n)[0];
}var bf=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var S;

while((S=bf.exec(R))!=null){var bd=S[1];
var U=S[2];
var V=S[3];
var bb=this.__bS(V);
T.push(bb+q+bd+q+U);
}
if(T.length>0){return this.__bU(T);
}var bf=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var S;

while((S=bf.exec(R))!=null){var bd=S[1];
var V=S[2];
var bb=this.__bS(V);
T.push(bb+q+bd);
}}else if(P.message&&P.message.indexOf("Backtrace:")>=0){var X=qx.lang.String.trim(P.message.split("Backtrace:")[1]);
var W=X.split(g);

for(var i=0;i<W.length;i++){var Q=W[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(Q&&Q.length>=2){var bd=Q[1];
var bc=this.__bS(Q[2]);
T.push(bc+q+bd);
}}}else if(P.sourceURL&&P.line){T.push(this.__bS(P.sourceURL)+q+P.line);
}return this.__bU(T);
},__bS:function(bg){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==m){var bh=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bg);

if(qx.core.Environment.get(o)&&!qx.lang.Type.isString(bh)){throw new Error("FILENAME_TO_CLASSNAME must return a string!");
}return bh;
}return qx.dev.StackTrace.__bT(bg);
},__bT:function(bi){var bm=c;
var bj=bi.indexOf(bm);
var bl=bi.indexOf(a);

if(bl>=0){bi=bi.substring(0,bl);
}var bk=(bj==-1)?bi:bi.substring(bj+bm.length).replace(/\//g,b).replace(/\.js$/,h);
return bk;
},__bU:function(bn){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==m){bn=qx.dev.StackTrace.FORMAT_STACKTRACE(bn);
if(qx.core.Environment.get(o)&&!qx.lang.Type.isArray(bn)){throw new Error("FORMAT_STACKTRACE must return an array of strings!");
}}return bn;
}}});
})();
(function(){var j="()",i="qx.debug",h=".",g=".prototype.",f="Invalid parameter 'func'.",e='anonymous()',d="Trying to call a bound function with a disposed object as context: ",c=" :: ",b="qx.lang.Function",a=".constructor()";
qx.Bootstrap.define(b,{statics:{getCaller:function(k){return k.caller?k.caller.callee:k.callee.caller;
},getName:function(l){if(l.displayName){return l.displayName;
}
if(l.$$original||l.wrapper||l.classname){return l.classname+a;
}
if(l.$$mixin){for(var n in l.$$mixin.$$members){if(l.$$mixin.$$members[n]==l){return l.$$mixin.name+g+n+j;
}}for(var n in l.$$mixin){if(l.$$mixin[n]==l){return l.$$mixin.name+h+n+j;
}}}
if(l.self){var o=l.self.constructor;

if(o){for(var n in o.prototype){if(o.prototype[n]==l){return o.classname+g+n+j;
}}for(var n in o){if(o[n]==l){return o.classname+h+n+j;
}}}}var m=l.toString().match(/function\s*(\w*)\s*\(.*/);

if(m&&m.length>=1&&m[1]){return m[1]+j;
}return e;
},globalEval:function(p){if(window.execScript){return window.execScript(p);
}else{return eval.call(window,p);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(q,r){if(qx.core.Environment.get(i)){qx.core.Assert&&qx.core.Assert.assertFunction(q,f);
}if(!r){return q;
}if(!(r.self||r.args||r.delay!=null||r.periodical!=null||r.attempt)){return q;
}return function(event){if(qx.core.Environment.get(i)){if(qx.core&&qx.core.Object&&r.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(r.self.isDisposed(),d+r.self.toString()+c+qx.lang.Function.getName(q));
}}var t=qx.lang.Array.fromArguments(arguments);
if(r.args){t=r.args.concat(t);
}
if(r.delay||r.periodical){var s=qx.event.GlobalError.observeMethod(function(){return q.apply(r.self||this,t);
});

if(r.delay){return window.setTimeout(s,r.delay);
}
if(r.periodical){return window.setInterval(s,r.periodical);
}}else if(r.attempt){var u=false;

try{u=q.apply(r.self||this,t);
}catch(v){}return u;
}else{return q.apply(r.self||this,t);
}};
},bind:function(w,self,x){return this.create(w,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(y,z){return this.create(y,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(A,self,B){if(arguments.length<3){return function(event){return A.call(self||this,event||window.event);
};
}else{var C=qx.lang.Array.fromArguments(arguments,2);
return function(event){var D=[event||window.event];
D.push.apply(D,C);
A.apply(self||this,D);
};
}},attempt:function(E,self,F){return this.create(E,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(G,H,self,I){return this.create(G,{delay:H,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(J,K,self,L){return this.create(J,{periodical:K,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
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
(function(){var j="qx.debug",h="qx.debug.dispose",g="$$hash",f="-",e="",d="qx.core.ObjectRegistry",c="-0";
qx.Class.define(d,{statics:{inShutDown:false,__bc:{},__bV:0,__bW:[],__bX:e,__bY:{},register:function(k){var o=this.__bc;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__bW;

if(m.length>0&&!qx.core.Environment.get(h)){n=m.pop();
}else{n=(this.__bV++)+this.__bX;
}k.$$hash=n;

if(qx.core.Environment.get(h)){if(qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__bY[n]=qx.dev.StackTrace.getStackTrace();
}}}
if(qx.core.Environment.get(j)){if(!k.dispose){throw new Error("Invalid object: "+k);
}}o[n]=k;
},unregister:function(p){var q=p.$$hash;

if(q==null){return;
}var r=this.__bc;

if(r&&r[q]){delete r[q];
this.__bW.push(q);
}try{delete p.$$hash;
}catch(s){if(p.removeAttribute){p.removeAttribute(g);
}}},toHashCode:function(t){if(qx.core.Environment.get(j)){if(t==null){throw new Error("Invalid object: "+t);
}}var v=t.$$hash;

if(v!=null){return v;
}var u=this.__bW;

if(u.length>0){v=u.pop();
}else{v=(this.__bV++)+this.__bX;
}return t.$$hash=v;
},clearHashCode:function(w){if(qx.core.Environment.get(j)){if(w==null){throw new Error("Invalid object: "+w);
}}var x=w.$$hash;

if(x!=null){this.__bW.push(x);
try{delete w.$$hash;
}catch(y){if(w.removeAttribute){w.removeAttribute(g);
}}}},fromHashCode:function(z){return this.__bc[z]||null;
},shutdown:function(){this.inShutDown=true;
var B=this.__bc;
var D=[];

for(var C in B){D.push(C);
}D.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var A,i=0,l=D.length;

while(true){try{for(;i<l;i++){C=D[i];
A=B[C];

if(A&&A.dispose){A.dispose();
}}}catch(E){qx.Bootstrap.error(this,"Could not dispose object "+A.toString()+": "+E,E);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
},getNextHash:function(){return this.__bV;
},getPostId:function(){return this.__bX;
},getStackTraces:function(){return this.__bY;
}},defer:function(F){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){F.__bX=f+(i+1);
return;
}}}F.__bX=c;
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
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
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
(function(){var k="qx.debug",j="unknown",h="node",g="error",f="...(+",e="array",d=")",c="info",b="instance",a="string",I="null",H="class",G="number",F="stringify",E="]",D="date",C="function",B="boolean",A="debug",z="map",s="undefined",t="qx.log.Logger",q="[",r="#",o="warn",p="document",m="{...(",n="text[",u="[...(",v="\n",x=")}",w=")]",y="object";
qx.Class.define(t,{statics:{__co:A,setLevel:function(J){this.__co=J;
},getLevel:function(){return this.__co;
},setTreshold:function(K){this.__cr.setMaxMessages(K);
},getTreshold:function(){return this.__cr.getMaxMessages();
},__cp:{},__cq:0,register:function(L){if(L.$$id){return;
}var N=this.__cq++;
this.__cp[N]=L;
L.$$id=N;
var M=this.__cs;
var O=this.__cr.getAllLogEvents();

for(var i=0,l=O.length;i<l;i++){if(M[O[i].level]>=M[this.__co]){L.process(O[i]);
}}},unregister:function(P){var Q=P.$$id;

if(Q==null){return;
}delete this.__cp[Q];
delete P.$$id;
},debug:function(R,S){qx.log.Logger.__ct(A,arguments);
},info:function(T,U){qx.log.Logger.__ct(c,arguments);
},warn:function(V,W){qx.log.Logger.__ct(o,arguments);
},error:function(X,Y){qx.log.Logger.__ct(g,arguments);
},trace:function(ba){qx.log.Logger.__ct(c,[ba,qx.dev.StackTrace.getStackTrace().join(v)]);
},deprecatedMethodWarning:function(bb,bc){if(qx.core.Environment.get(k)){var bd=qx.lang.Function.getName(bb);
this.warn("The method '"+bd+"' is deprecated: "+(bc||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(be,bf){if(qx.core.Environment.get(k)){var bg=be.classname||j;
this.warn("The class '"+bg+"' is deprecated: "+(bf||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bh,event,bi){if(qx.core.Environment.get(k)){var bj=bh.self?bh.self.classname:j;
this.warn("The event '"+(event||"unknown")+"' from class '"+bj+"' is deprecated: "+(bi||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bk,bl){if(qx.core.Environment.get(k)){var bm=bk?bk.name:j;
this.warn("The mixin '"+bm+"' is deprecated: "+(bl||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(bn,bo,bp){if(qx.core.Environment.get(k)){if(bn.__defineGetter__){var self=this;
var bq=bn[bo];
bn.__defineGetter__(bo,function(){self.warn("The constant '"+bo+"' is deprecated: "+(bp||"Please consult the API documentation for alternatives."));
self.trace();
return bq;
});
}}},deprecateMethodOverriding:function(br,bs,bt,bu){if(qx.core.Environment.get(k)){var bv=br.constructor;

while(bv.classname!==bs.classname){if(bv.prototype.hasOwnProperty(bt)){this.warn("The method '"+qx.lang.Function.getName(br[bt])+"' overrides a deprecated method: "+(bu||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bv=bv.superclass;
}}},clear:function(){this.__cr.clearHistory();
},__cr:new qx.log.appender.RingBuffer(50),__cs:{debug:0,info:1,warn:2,error:3},__ct:function(bw,bx){var bC=this.__cs;

if(bC[bw]<bC[this.__co]){return;
}var bz=bx.length<2?null:bx[0];
var bB=bz?1:0;
var by=[];

for(var i=bB,l=bx.length;i<l;i++){by.push(this.__cv(bx[i],true));
}var bD=new Date;
var bE={time:bD,offset:bD-qx.Bootstrap.LOADSTART,level:bw,items:by,win:window};
if(bz){if(bz.$$hash!==undefined){bE.object=bz.$$hash;
}else if(bz.$$type){bE.clazz=bz;
}}this.__cr.process(bE);
var bF=this.__cp;

for(var bA in bF){bF[bA].process(bE);
}},__cu:function(bG){if(bG===undefined){return s;
}else if(bG===null){return I;
}
if(bG.$$type){return H;
}var bH=typeof bG;

if(bH===C||bH==a||bH===G||bH===B){return bH;
}else if(bH===y){if(bG.nodeType){return h;
}else if(bG.classname){return b;
}else if(bG instanceof Array){return e;
}else if(bG instanceof Error){return g;
}else if(bG instanceof Date){return D;
}else{return z;
}}
if(bG.toString){return F;
}return j;
},__cv:function(bI,bJ){var bQ=this.__cu(bI);
var bM=j;
var bL=[];

switch(bQ){case I:case s:bM=bQ;
break;
case a:case G:case B:case D:bM=bI;
break;
case h:if(bI.nodeType===9){bM=p;
}else if(bI.nodeType===3){bM=n+bI.nodeValue+E;
}else if(bI.nodeType===1){bM=bI.nodeName.toLowerCase();

if(bI.id){bM+=r+bI.id;
}}else{bM=h;
}break;
case C:bM=qx.lang.Function.getName(bI)||bQ;
break;
case b:bM=bI.basename+q+bI.$$hash+E;
break;
case H:case F:bM=bI.toString();
break;
case g:bL=qx.dev.StackTrace.getStackTraceFromError(bI);
bM=bI.toString();
break;
case e:if(bJ){bM=[];

for(var i=0,l=bI.length;i<l;i++){if(bM.length>20){bM.push(f+(l-i)+d);
break;
}bM.push(this.__cv(bI[i],false));
}}else{bM=u+bI.length+w;
}break;
case z:if(bJ){var bK;
var bP=[];

for(var bO in bI){bP.push(bO);
}bP.sort();
bM=[];

for(var i=0,l=bP.length;i<l;i++){if(bM.length>20){bM.push(f+(l-i)+d);
break;
}bO=bP[i];
bK=this.__cv(bI[bO],false);
bK.key=bO;
bM.push(bK);
}}else{var bN=0;

for(var bO in bI){bN++;
}bM=m+bN+x;
}break;
}return {type:bQ,text:bM,trace:bL};
}},defer:function(bR){var bS=qx.Bootstrap.$$logs;

for(var i=0;i<bS.length;i++){bR.__ct(bS[i][0],bS[i][1]);
}qx.Bootstrap.debug=bR.debug;
qx.Bootstrap.info=bR.info;
qx.Bootstrap.warn=bR.warn;
qx.Bootstrap.error=bR.error;
qx.Bootstrap.trace=bR.trace;
}});
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
(function(){var m="on",l="engine.name",k="gecko",j="engine.version",i="qx.debug",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="mouseover",a="HTMLEvents",b="return;";
qx.Bootstrap.define(d,{statics:{addNativeListener:function(n,o,p,q){if(n.addEventListener){n.addEventListener(o,p,!!q);
}else if(n.attachEvent){n.attachEvent(m+o,p);
}else if(typeof n[m+o]!=g){n[m+o]=p;
}else{if(qx.core.Environment.get(i)){qx.log.Logger.warn("No method available to add native listener to "+n);
}}},removeNativeListener:function(r,s,t,u){if(r.removeEventListener){r.removeEventListener(s,t,!!u);
}else if(r.detachEvent){try{r.detachEvent(m+s,t);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof r[m+s]!=g){r[m+s]=null;
}else{if(qx.core.Environment.get(i)){qx.log.Logger.warn("No method available to remove native listener from "+r);
}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(l)==k)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===c){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(l)==k)&&parseFloat(qx.core.Environment.get(j))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(l)==k)&&parseFloat(qx.core.Environment.get(j))<1.9){try{e.keyCode=0;
}catch(v){}}}else{try{e.keyCode=0;
}catch(w){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(x,y){if(document.createEvent){var z=document.createEvent(a);
z.initEvent(y,true,true);
return !x.dispatchEvent(z);
}else{var z=document.createEventObject();
return x.fireEvent(m+y,z);
}},supportsEvent:function(A,B){var C=m+B;
var D=(C in A);

if(!D){D=typeof A[C]==h;

if(!D&&A.setAttribute){A.setAttribute(C,b);
D=typeof A[C]==h;
A.removeAttribute(C);
}}return D;
}}});
})();
(function(){var k="qx.debug",j="|bubble",h="|capture",g="|",f="': ",e="'",d="",c="_",b="Invalid Target.",a="Invalid capture flag.",J="Invalid event type.",I=" from the target '",H="Invalid callback function",G="Invalid event target.",F="unload",E="Failed to remove event listener for id '",D="Invalid context for callback.",C="__cD",B="Failed to add event listener for type '",A="UNKNOWN_",s="capture",t="qx.event.Manager",q="' on target '",r="Could not dispatch event '",o="DOM_",p="__cC",m="QX_",n=" to the target '",u="Failed to remove event listener for type '",v="Invalid id type.",x="c",w="DOCUMENT_",z="WIN_",y="Invalid event object.";
qx.Class.define(t,{extend:Object,construct:function(K,L){this.__cy=K;
this.__cz=qx.core.ObjectRegistry.toHashCode(K);
this.__cA=L;
if(K.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(K,F,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(K,F,arguments.callee);
self.dispose();
}));
}this.__cB={};
this.__cC={};
this.__cD={};
this.__cE={};
},statics:{__cF:0,getNextUniqueId:function(){return (this.__cF++)+d;
}},members:{__cA:null,__cB:null,__cD:null,__cG:null,__cC:null,__cE:null,__cy:null,__cz:null,getWindow:function(){return this.__cy;
},getWindowId:function(){return this.__cz;
},getHandler:function(M){var N=this.__cC[M.classname];

if(N){return N;
}return this.__cC[M.classname]=new M(this);
},getDispatcher:function(O){var P=this.__cD[O.classname];

if(P){return P;
}return this.__cD[O.classname]=new O(this,this.__cA);
},getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__cB[T];

if(!V){return null;
}var W=R+(S?h:j);
var U=V[W];
return U?U.concat():null;
},getAllListeners:function(){return this.__cB;
},serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bh=this.__cB[bf];
var bd=[];

if(bh){var bb,bg,Y,bc,be;

for(var ba in bh){bb=ba.indexOf(g);
bg=ba.substring(0,bb);
Y=ba.charAt(bb+1)==x;
bc=bh[ba];

for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bd.push({self:be.context,handler:be.handler,type:bg,capture:Y});
}}}return bd;
},toggleAttachedEvents:function(bi,bj){var bo=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bq=this.__cB[bo];

if(bq){var bl,bp,bk,bm;

for(var bn in bq){bl=bn.indexOf(g);
bp=bn.substring(0,bl);
bk=bn.charCodeAt(bl+1)===99;
bm=bq[bn];

if(bj){this.__cH(bi,bp,bk);
}else{this.__cI(bi,bp,bk);
}}}},hasListener:function(br,bs,bt){if(qx.core.Environment.get(k)){if(br==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+br);
}}var bu=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);
var bw=this.__cB[bu];

if(!bw){return false;
}var bx=bs+(bt?h:j);
var bv=bw[bx];
return !!(bv&&bv.length>0);
},importListeners:function(by,bz){if(qx.core.Environment.get(k)){if(by==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+by);
}}var bF=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bG=this.__cB[bF]={};
var bC=qx.event.Manager;

for(var bA in bz){var bD=bz[bA];
var bE=bD.type+(bD.capture?h:j);
var bB=bG[bE];

if(!bB){bB=bG[bE]=[];
this.__cH(by,bD.type,bD.capture);
}bB.push({handler:bD.listener,context:bD.self,unique:bD.unique||(bC.__cF++)+d});
}},addListener:function(bH,bI,bJ,self,bK){if(qx.core.Environment.get(k)){var bO=B+bI+e+n+bH.classname+f;
qx.core.Assert.assertObject(bH,bO+b);
qx.core.Assert.assertString(bI,bO+J);
qx.core.Assert.assertFunction(bJ,bO+H);

if(bK!==undefined){qx.core.Assert.assertBoolean(bK,a);
}}var bP=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bR=this.__cB[bP];

if(!bR){bR=this.__cB[bP]={};
}var bN=bI+(bK?h:j);
var bM=bR[bN];

if(!bM){bM=bR[bN]=[];
}if(bM.length===0){this.__cH(bH,bI,bK);
}var bQ=(qx.event.Manager.__cF++)+d;
var bL={handler:bJ,context:self,unique:bQ};
bM.push(bL);
return bN+g+bQ;
},findHandler:function(bS,bT){var cg=false,bX=false,ch=false,bU=false;
var ce;

if(bS.nodeType===1){cg=true;
ce=o+bS.tagName.toLowerCase()+c+bT;
}else if(bS.nodeType===9){bU=true;
ce=w+bT;
}else if(bS==this.__cy){bX=true;
ce=z+bT;
}else if(bS.classname){ch=true;
ce=m+bS.classname+c+bT;
}else{ce=A+bS+c+bT;
}var ca=this.__cE;

if(ca[ce]){return ca[ce];
}var cd=this.__cA.getHandlers();
var bY=qx.event.IEventHandler;
var cb,cc,bW,bV;

for(var i=0,l=cd.length;i<l;i++){cb=cd[i];
bW=cb.SUPPORTED_TYPES;

if(bW&&!bW[bT]){continue;
}bV=cb.TARGET_CHECK;

if(bV){var cf=false;

if(cg&&((bV&bY.TARGET_DOMNODE)!=0)){cf=true;
}else if(bX&&((bV&bY.TARGET_WINDOW)!=0)){cf=true;
}else if(ch&&((bV&bY.TARGET_OBJECT)!=0)){cf=true;
}else if(bU&&((bV&bY.TARGET_DOCUMENT)!=0)){cf=true;
}
if(!cf){continue;
}}cc=this.getHandler(cd[i]);

if(cb.IGNORE_CAN_HANDLE||cc.canHandleEvent(bS,bT)){ca[ce]=cc;
return cc;
}}return null;
},__cH:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

if(cl){cl.registerEvent(ci,cj,ck);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cj+"' on target '"+ci+"'!");
}},removeListener:function(cm,cn,co,self,cp){if(qx.core.Environment.get(k)){var ct=u+cn+e+I+cm.classname+f;
qx.core.Assert.assertObject(cm,ct+b);
qx.core.Assert.assertString(cn,ct+J);
qx.core.Assert.assertFunction(co,ct+H);

if(self!==undefined){qx.core.Assert.assertObject(self,D);
}
if(cp!==undefined){qx.core.Assert.assertBoolean(cp,a);
}}var cu=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cv=this.__cB[cu];

if(!cv){return false;
}var cq=cn+(cp?h:j);
var cr=cv[cq];

if(!cr){return false;
}var cs;

for(var i=0,l=cr.length;i<l;i++){cs=cr[i];

if(cs.handler===co&&cs.context===self){qx.lang.Array.removeAt(cr,i);

if(cr.length==0){this.__cI(cm,cn,cp);
}return true;
}}return false;
},removeListenerById:function(cw,cx){if(qx.core.Environment.get(k)){var cD=E+cx+e+I+cw.classname+f;
qx.core.Assert.assertObject(cw,cD+b);
qx.core.Assert.assertString(cx,cD+v);
}var cB=cx.split(g);
var cG=cB[0];
var cy=cB[1].charCodeAt(0)==99;
var cF=cB[2];
var cE=cw.$$hash||qx.core.ObjectRegistry.toHashCode(cw);
var cH=this.__cB[cE];

if(!cH){return false;
}var cC=cG+(cy?h:j);
var cA=cH[cC];

if(!cA){return false;
}var cz;

for(var i=0,l=cA.length;i<l;i++){cz=cA[i];

if(cz.unique===cF){qx.lang.Array.removeAt(cA,i);

if(cA.length==0){this.__cI(cw,cG,cy);
}return true;
}}return false;
},removeAllListeners:function(cI){var cM=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);
var cO=this.__cB[cM];

if(!cO){return false;
}var cK,cN,cJ;

for(var cL in cO){if(cO[cL].length>0){cK=cL.split(g);
cN=cK[0];
cJ=cK[1]===s;
this.__cI(cI,cN,cJ);
}}delete this.__cB[cM];
return true;
},deleteAllListeners:function(cP){delete this.__cB[cP];
},__cI:function(cQ,cR,cS){var cT=this.findHandler(cQ,cR);

if(cT){cT.unregisterEvent(cQ,cR,cS);
return;
}
if(qx.core.Environment.get(k)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cR+"' on target '"+cQ+"'!");
}},dispatchEvent:function(cU,event){if(qx.core.Environment.get(k)){var da=r+event+q+cU.classname+f;
qx.core.Assert.assertNotUndefined(cU,da+G);
qx.core.Assert.assertNotNull(cU,da+G);
qx.core.Assert.assertInstance(event,qx.event.type.Event,da+y);
}var db=event.getType();

if(!event.getBubbles()&&!this.hasListener(cU,db)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cU);
}var cY=this.__cA.getDispatchers();
var cX;
var cW=false;

for(var i=0,l=cY.length;i<l;i++){cX=this.getDispatcher(cY[i]);
if(cX.canDispatchEvent(cU,event,db)){cX.dispatchEvent(cU,event,db);
cW=true;
break;
}}
if(!cW){if(qx.core.Environment.get(k)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+db+" on "+cU);
}return true;
}var cV=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cV;
},dispose:function(){this.__cA.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,p);
qx.util.DisposeUtil.disposeMap(this,C);
this.__cB=this.__cy=this.__cG=null;
this.__cA=this.__cE=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var k="qx.debug",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__cJ:{},getManager:function(l){if(l==null){if(qx.core.Environment.get(k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__cJ[n];

if(!m){m=new qx.event.Manager(l,this);
this.__cJ[n]=m;
}return m;
},removeManager:function(o){var p=o.getWindowId();
delete this.__cJ[p];
},addListener:function(q,r,s,self,t){return this.getManager(q).addListener(q,r,s,self,t);
},removeListener:function(u,v,w,self,x){return this.getManager(u).removeListener(u,v,w,self,x);
},removeListenerById:function(y,z){return this.getManager(y).removeListenerById(y,z);
},removeAllListeners:function(A){return this.getManager(A).removeAllListeners(A);
},deleteAllListeners:function(B){var C=B.$$hash;

if(C){this.getManager(B).deleteAllListeners(C);
}},hasListener:function(D,E,F){return this.getManager(D).hasListener(D,E,F);
},serializeListeners:function(G){return this.getManager(G).serializeListeners(G);
},createEvent:function(H,I,J){if(qx.core.Environment.get(k)){if(arguments.length>1&&I===undefined){throw new Error("Create event of type "+H+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);
J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(L,event){return this.getManager(L).dispatchEvent(L,event);
},fireEvent:function(M,N,O,P){if(qx.core.Environment.get(k)){if(arguments.length>2&&O===undefined&&P!==undefined){throw new Error("Create event of type "+N+" with undefined class. Please use null to explicit fallback to default event type!");
}var Q=e+N+f+(M?M.classname:d)+h;
qx.core.Assert.assertNotUndefined(M,Q+j);
qx.core.Assert.assertNotNull(M,Q+j);
}var R=this.createEvent(N,O||null,P);
return this.getManager(M).dispatchEvent(M,R);
},fireNonBubblingEvent:function(S,T,U,V){if(qx.core.Environment.get(k)){if(arguments.length>2&&U===undefined&&V!==undefined){throw new Error("Create event of type "+T+" with undefined class. Please use null to explicit fallback to default event type!");
}}var W=this.getManager(S);

if(!W.hasListener(S,T,false)){return true;
}var X=this.createEvent(T,U||null,V);
return W.dispatchEvent(S,X);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cC:[],addHandler:function(Y){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(Y,qx.event.IEventHandler,g);
}this.__cC.push(Y);
this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cC;
},__cD:[],addDispatcher:function(ba,bb){if(qx.core.Environment.get(k)){qx.core.Assert.assertInterface(ba,qx.event.IEventDispatcher,i);
}this.__cD.push(ba);
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
(function(){var e="qx.debug",d="set",c="reset",b="get",a="qx.core.MProperty";
qx.Mixin.define(a,{members:{set:function(f,g){var i=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(f)){if(!this[i[f]]){if(this[d+qx.Bootstrap.firstUp(f)]!=undefined){this[d+qx.Bootstrap.firstUp(f)](g);
return this;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+f));
return this;
}}return this[i[f]](g);
}else{for(var h in f){if(!this[i[h]]){if(this[d+qx.Bootstrap.firstUp(h)]!=undefined){this[d+qx.Bootstrap.firstUp(h)](f[h]);
continue;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+h));
return this;
}}this[i[h]](f[h]);
}return this;
}},get:function(j){var k=qx.core.Property.$$method.get;

if(!this[k[j]]){if(this[b+qx.Bootstrap.firstUp(j)]!=undefined){return this[b+qx.Bootstrap.firstUp(j)]();
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+j));
return this;
}}return this[k[j]]();
},reset:function(l){var m=qx.core.Property.$$method.reset;

if(!this[m[l]]){if(this[c+qx.Bootstrap.firstUp(l)]!=undefined){this[c+qx.Bootstrap.firstUp(l)]();
return;
}
if(qx.core.Environment.get(e)){qx.Bootstrap.error(new Error("No such property: "+l));
return;
}}this[m[l]]();
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
(function(){var n="qx.disposerDebugLevel",m="qx.debug",k="rv:1.8.1",j="module.property",h="MSIE 6.0",g="module.events",f="qx.core.Object",e="[",d="$$user_",c="]",a="object",b="Object";
qx.Class.define(f,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvents,"module.property":qx.core.MProperty,"qx.debug":qx.core.MAssert}),construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:b},members:{__L:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+e+this.$$hash+c;
},base:function(o,p){if(qx.core.Environment.get(m)){if(!qx.Bootstrap.isFunction(o.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+o.callee.displayName);
}}
if(arguments.length===1){return o.callee.base.call(this);
}else{return o.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(q){return q.callee.self;
},clone:function(){if(!qx.core.Environment.get(j)){throw new Error("Cloning only possible with properties.");
}var s=this.constructor;
var r=new s;
var u=qx.Class.getProperties(s);
var t=this.__L.$$store.user;
var v=this.__L.$$method.set;
var name;
for(var i=0,l=u.length;i<l;i++){name=u[i];

if(this.hasOwnProperty(t[name])){r[v[name]](this[t[name]]);
}}return r;
},__cL:null,setUserData:function(w,x){if(!this.__cL){this.__cL={};
}this.__cL[w]=x;
},getUserData:function(y){if(!this.__cL){return null;
}var z=this.__cL[y];
return z===undefined?null:z;
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Environment.get(m)){if(qx.core.Environment.get(n)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var C=this.constructor;
var A;

while(C.superclass){if(C.$$destructor){C.$$destructor.call(this);
}if(C.$$includes){A=C.$$flatIncludes;

for(var i=0,l=A.length;i<l;i++){if(A[i].$$destructor){A[i].$$destructor.call(this);
}}}C=C.superclass;
}if(this.__cM){this.__cM();
}if(qx.core.Environment.get(m)){if(qx.core.Environment.get(n)>0){var D,B;

for(D in this){B=this[D];
if(B!==null&&typeof B===a&&!(qx.Bootstrap.isString(B))){if(this.constructor.prototype[D]!=null){continue;
}var F=navigator.userAgent.indexOf(k)!=-1;
var E=navigator.userAgent.indexOf(h)!=-1;
if(F||E){if(B instanceof qx.core.Object||qx.core.Environment.get(n)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+D+"' in "+this.classname+"["+this.toHashCode()+"]: "+B);
delete this[D];
}}else{if(qx.core.Environment.get(n)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+D+"' in "+this.classname+"["+this.toHashCode()+"]: "+B);
delete this[D];
}}}}}}},__cM:null,__cN:function(){var G=qx.Class.getProperties(this.constructor);

for(var i=0,l=G.length;i<l;i++){delete this[d+G[i]];
}},_disposeObjects:function(H){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(I){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(J){qx.util.DisposeUtil.disposeArray(this,J);
},_disposeMap:function(K){qx.util.DisposeUtil.disposeMap(this,K);
}},environment:{"qx.disposerDebugLevel":0},defer:function(L,M){var O=navigator.userAgent.indexOf(h)!=-1;
var N=navigator.userAgent.indexOf(k)!=-1;
if(O||N){M.__cM=M.__cN;
}},destruct:function(){if(qx.core.Environment.get(g)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}}qx.core.ObjectRegistry.unregister(this);
this.__cL=null;
if(qx.core.Environment.get(j)){var R=this.constructor;
var V;
var W=this.__L.$$store;
var T=W.user;
var U=W.theme;
var P=W.inherit;
var S=W.useinit;
var Q=W.init;

while(R){V=R.$$properties;

if(V){for(var name in V){if(V[name].dereference){this[T[name]]=this[U[name]]=this[P[name]]=this[S[name]]=this[Q[name]]=undefined;
}}}R=R.superclass;
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
(function(){var f="qx.debug",e="Cannot stop propagation on a non bubbling event: ",d="Invalid argument value 'cancelable'.",c="Cannot prevent default action on a non cancelable event: ",b="Invalid argument value 'canBubble'.",a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(g,h){if(qx.core.Environment.get(f)){if(g!==undefined){qx.core.Assert.assertBoolean(g,b);
}
if(h!==undefined){qx.core.Assert.assertBoolean(h,d);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!g;
this._cancelable=!!h;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(i){if(i){var j=i;
}else{var j=qx.event.Pool.getInstance().getObject(this.constructor);
}j._type=this._type;
j._target=this._target;
j._currentTarget=this._currentTarget;
j._relatedTarget=this._relatedTarget;
j._originalTarget=this._originalTarget;
j._stopPropagation=this._stopPropagation;
j._bubbles=this._bubbles;
j._preventDefault=this._preventDefault;
j._cancelable=this._cancelable;
return j;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){if(qx.core.Environment.get(f)){this.assertTrue(this._bubbles,e+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Environment.get(f)){this.assertTrue(this._cancelable,c+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(k){this._type=k;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(l){this._eventPhase=l;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(n){this._currentTarget=n;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(o){this._relatedTarget=o;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(p){this._originalTarget=p;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(q){this._bubbles=q;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(r){this._cancelable=r;
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
(function(){var b="qx.debug",a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(c){this._manager=c;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,e){return !event.getBubbles();
},dispatchEvent:function(f,event,g){if(qx.core.Environment.get(b)){if(f instanceof qx.core.Object){var k=qx.Class.getEventType(f.constructor,g);
var h=qx.Class.getByName(k);

if(!h){this.error("The event type '"+g+"' declared in the class '"+f.constructor+" is not an available class': "+k);
}else if(!(event instanceof h)){this.error("Expected event type to be instanceof '"+k+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;

if(qx.core.Environment.get(b)){if(j&&j.isDisposed&&j.isDisposed()){this.warn("The context object '"+j+"' for the event '"+g+"' of '"+f+"'is already disposed.");
}}m[i].handler.call(j,event);
}}}},defer:function(n){qx.event.Registration.addDispatcher(n);
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
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="qx.application",b="os.name",a="engine.version";
qx.Class.define(f,{statics:{getApplication:function(){return this.__gM||null;
},ready:function(){if(this.__gM){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Environment.get(c);
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
(function(){var e="100px",d="img",c="absolute",b="demobrowser.demo.test.io_ImageLoader",a="http://resources.qooxdoo.org/images/logo.gif";
qx.Class.define(b,{extend:qx.application.Native,members:{main:function(){qx.application.Native.prototype.main.call(this);
qx.io.ImageLoader.load(a,function(f,g){qx.log.Logger.debug("Image loaded ("+g.width+"x"+g.height+")");
var h=document.createElement(d);
h.src=f;
h.width=Math.round(g.width*1.5);
h.height=Math.round(g.height*1.5);
h.style.position=c;
h.style.left=e;
h.style.top=e;
document.body.appendChild(h);
});
}}});
})();
(function(){var c="html.image.naturaldimensions",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cP:{},__hT:{width:null,height:null},__hU:/\.(png|gif|jpg|jpeg|bmp)\b/i,__hV:/^data:image\/(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cP[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cP[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cP[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cP[k];

if(!m||!m.format){var o=this.__hV.exec(k);

if(o!=null){var p=(m&&qx.lang.Type.isNumber(m.width)?m.width:this.__hT.width);
var n=(m&&qx.lang.Type.isNumber(m.height)?m.height:this.__hT.height);
m={loaded:true,format:o[1],width:p,height:n};
}}return m?m.format:null;
},getSize:function(q){var r=this.__cP[q];
return r?{width:r.width,height:r.height}:this.__hT;
},getWidth:function(s){var t=this.__cP[s];
return t?t.width:null;
},getHeight:function(u){var v=this.__cP[u];
return v?v.height:null;
},load:function(w,x,y){var z=this.__cP[w];

if(!z){z=this.__cP[w]={};
}if(x&&!y){y=window;
}if(z.loaded||z.loading||z.failed){if(x){if(z.loading){z.callbacks.push(x,y);
}else{x.call(y,w,z);
}}}else{z.loading=true;
z.callbacks=[];

if(x){z.callbacks.push(x,y);
}var B=new Image();
var A=qx.lang.Function.listener(this.__hW,this,B,w);
B.onload=A;
B.onerror=A;
B.src=w;
z.element=B;
}},abort:function(C){var D=this.__cP[C];

if(D&&!D.loaded){D.aborted=true;
var F=D.callbacks;
var E=D.element;
E.onload=E.onerror=null;
delete D.callbacks;
delete D.element;
delete D.loading;

for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);
}}this.__cP[C]=null;
},__hW:qx.event.GlobalError.observeMethod(function(event,G,H){var I=this.__cP[H];
if(event.type===b){I.loaded=true;
I.width=this.__hX(G);
I.height=this.__hY(G);
var J=this.__hU.exec(H);

if(J!=null){I.format=J[1];
}}else{I.failed=true;
}G.onload=G.onerror=null;
var K=I.callbacks;
delete I.loading;
delete I.callbacks;
delete I.element;
for(var i=0,l=K.length;i<l;i+=2){K[i].call(K[i+1],H,I);
}}),__hX:function(L){return qx.core.Environment.get(c)?L.naturalWidth:L.width;
},__hY:function(M){return qx.core.Environment.get(c)?M.naturalHeight:M.height;
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
(function(){var t="object",s="qx.debug",r="Theme",q="undefined",p="widgets",o="fonts",n="string",m="colors",k="decorations",j="meta",d="appearances",h="borders",g="icons",c="other",b="qx.Theme",f="]",e="[Theme ";
qx.Bootstrap.define(b,{statics:{define:function(name,u){if(!u){var u={};
}u.include=this.__qT(u.include);
u.patch=this.__qT(u.patch);
if(qx.core.Environment.get(s)){this.__d(name,u);
}var v={$$type:r,name:name,title:u.title,toString:this.genericToString};
if(u.extend){v.supertheme=u.extend;
}v.basename=qx.Bootstrap.createNamespace(name,v);
this.__qW(v,u);
this.__qU(v,u);
this.$$registry[name]=v;
for(var i=0,a=u.include,l=a.length;i<l;i++){this.include(v,a[i]);
}
for(var i=0,a=u.patch,l=a.length;i<l;i++){this.patch(v,a[i]);
}},__qT:function(w){if(!w){return [];
}
if(qx.Bootstrap.isArray(w)){return w;
}else{return [w];
}},__qU:function(x,y){var z=y.aliases||{};

if(y.extend&&y.extend.aliases){qx.Bootstrap.objectMergeWith(z,y.extend.aliases,false);
}x.aliases=z;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return e+this.name+f;
},__qV:function(A){for(var i=0,B=this.__qX,l=B.length;i<l;i++){if(A[B[i]]){return B[i];
}}},__qW:function(C,D){var G=this.__qV(D);
if(D.extend&&!G){G=D.extend.type;
}C.type=G||c;
var I=function(){};
if(D.extend){I.prototype=new D.extend.$$clazz;
}var H=I.prototype;
var F=D[G];
for(var E in F){H[E]=F[E];
if(H[E].base){if(qx.core.Environment.get(s)){if(!D.extend){throw new Error("Found base flag in entry '"+E+"' of theme '"+D.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}H[E].base=D.extend;
}}C.$$clazz=I;
C[G]=new I;
},$$registry:{},__qX:[m,h,k,o,g,p,d,j],__c:qx.core.Environment.select(s,{"true":{"title":n,"aliases":t,"type":n,"extend":t,"colors":t,"borders":t,"decorations":t,"fonts":t,"icons":t,"widgets":t,"appearances":t,"meta":t,"include":t,"patch":t},"default":null}),__qY:qx.core.Environment.select(s,{"true":{"color":t,"border":t,"decoration":t,"font":t,"icon":t,"appearance":t,"widget":t},"default":null}),__d:qx.core.Environment.select(s,{"true":function(name,J){var O=this.__c;

for(var N in J){if(O[N]===undefined){throw new Error('The configuration key "'+N+'" in theme "'+name+'" is not allowed!');
}
if(J[N]==null){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value is undefined/null!');
}
if(O[N]!==null&&typeof J[N]!==O[N]){throw new Error('Invalid type of key "'+N+'" in theme "'+name+'"! The type of the key must be "'+O[N]+'"!');
}}var M=[m,h,k,o,g,p,d,j];

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]!==undefined&&(J[N] instanceof Array||J[N] instanceof RegExp||J[N] instanceof Date||J[N].classname!==undefined)){throw new Error('Invalid key "'+N+'" in theme "'+name+'"! The value needs to be a map!');
}}var K=0;

for(var i=0,l=M.length;i<l;i++){var N=M[i];

if(J[N]){K++;
}
if(K>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(J.meta){var L;

for(var N in J.meta){L=J.meta[N];

if(this.__qY[N]===undefined){throw new Error('The key "'+N+'" is not allowed inside a meta theme block.');
}
if(typeof L!==this.__qY[N]){throw new Error('The type of the key "'+N+'" inside the meta block is wrong.');
}
if(!(typeof L===t&&L!==null&&L.$$type===r)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+N+'" in theme "'+name+'" is invalid: '+L);
}}}if(J.extend&&J.extend.$$type!==r){throw new Error('Invalid extend in theme "'+name+'": '+J.extend);
}if(J.include){for(var i=0,l=J.include.length;i<l;i++){if(typeof (J.include[i])==q||J.include[i].$$type!==r){throw new Error('Invalid include in theme "'+name+'": '+J.include[i]);
}}}if(J.patch){for(var i=0,l=J.patch.length;i<l;i++){if(typeof (J.patch[i])==q||J.patch[i].$$type!==r){throw new Error('Invalid patch in theme "'+name+'": '+J.patch[i]);
}}}},"default":function(){}}),patch:function(P,Q){this.__ra(Q);
var S=this.__qV(Q);

if(S!==this.__qV(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");
}var R=Q[S];
var T=P.$$clazz.prototype;

for(var U in R){T[U]=R[U];
}},include:function(V,W){this.__ra(W);
var Y=W.type;

if(Y!==V.type){throw new Error("The mixins '"+V.name+"' are not compatible '"+W.name+"'!");
}var X=W[Y];
var ba=V.$$clazz.prototype;

for(var bb in X){if(ba[bb]!==undefined){continue;
}ba[bb]=X[bb];
}},__ra:function(bc){if(typeof bc===q||bc==null){var bd=new Error("Mixin theme is not a valid theme!");

if(qx.core.Environment.get(s)){var be=qx.dev.StackTrace.getStackTraceFromError(bd);
qx.Bootstrap.error(this,be);
}throw bd;
}}}});
})();
(function(){var f="",e="qx.debug",d="qx.theme",c="qx.ui.decoration.MBackgroundColor",b="Color",a="_applyBackgroundColor";
qx.Mixin.define(c,{properties:{backgroundColor:{check:b,nullable:true,apply:a}},members:{_tintBackgroundColor:function(g,h,i){if(h==null){h=this.getBackgroundColor();
}
if(qx.core.Environment.get(d)){h=qx.theme.manager.Color.getInstance().resolve(h);
}i.backgroundColor=h||f;
},_resizeBackgroundColor:function(j,k,l){var m=this.getInsets();
k-=m.left+m.right;
l-=m.top+m.bottom;
return {left:m.left,top:m.top,width:k,height:l};
},_applyBackgroundColor:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
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
}else if(this.isRgbString(m)){return this.__ie();
}else if(this.isHex3String(m)){return this.__ig();
}else if(this.isHex6String(m)){return this.__ih();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__ie();
}else if(this.isRgbaString(n)){return this.__if();
}else if(this.isHex3String(n)){return this.__ig();
}else if(this.isHex6String(n)){return this.__ih();
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
},__ie:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__if:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__ig:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__ih:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__ig(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__ih(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__ig(P);
}
if(this.isHex6String(P)){return this.__ih(P);
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
(function(){var u="_applyBackgroundImage",t="repeat",s="",r="mshtml",q="engine.name",p="backgroundPositionX",o='<div style="',n="backgroundPositionY",m="qx.debug",l='</div>',e="no-repeat",k="engine.version",h="scale",c='">',b=" ",g="repeat-x",f="repeat-y",i="hidden",a="qx.ui.decoration.MBackgroundImage",j="String",d="browser.quirksmode";
qx.Mixin.define(a,{properties:{backgroundImage:{check:j,nullable:true,apply:u},backgroundRepeat:{check:[t,g,f,e,h],init:t,apply:u},backgroundPositionX:{nullable:true,apply:u},backgroundPositionY:{nullable:true,apply:u},backgroundPosition:{group:[n,p]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(v,content){var z=s;
var y=this.getBackgroundImage();
var x=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var A=this.getBackgroundPositionX();

if(A==null){A=0;
}v.backgroundPosition=A+b+top;
if(y){var w=qx.util.AliasManager.getInstance().resolve(y);
z=qx.bom.element.Decoration.create(w,x,v);
}else{if((qx.core.Environment.get(q)==r)){if(parseFloat(qx.core.Environment.get(k))<7||qx.core.Environment.get(d)){v.overflow=i;
}}
if(!content){content=s;
}z=o+qx.bom.element.Style.compile(v)+c+content+l;
}return z;
},_applyBackgroundImage:function(){if(qx.core.Environment.get(m)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__do={};
this.add(a,h);
},members:{__do:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__do[k]){return this.__do[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__do[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__do[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__do[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__do){v[w]=this.__do[w];
}return v;
}},destruct:function(){this.__do=null;
}});
})();
(function(){var k="px",j="div",i="img",h="",g="engine.name",f="no-repeat",d="qx.debug",c="scale-x",b="repeat",a="scale",J="mshtml",I="b64",H="scale-y",G="qx/icon",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",r='<img src="',s="qx.bom.element.Decoration",p="', sizingMethod='",q='"/>',n="png",o="')",l='"></div>',m='" style="',t="none",u="webkit",w=" ",v="repeat-x",y="DXImageTransform.Microsoft.AlphaImageLoader",x="qx/static/blank.gif",z="absolute";
qx.Class.define(s,{statics:{DEBUG:false,__hF:{},__hG:(qx.core.Environment.get(g)==J)&&qx.core.Environment.get(D)<9,__hH:qx.core.Environment.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hI:{"scale-x":i,"scale-y":i,"scale":i,"repeat":j,"no-repeat":j,"repeat-x":j,"repeat-y":j},update:function(K,L,M,N){var P=this.getTagName(M,L);

if(P!=K.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var Q=this.getAttributes(L,M,N);

if(P===i){K.src=Q.src||qx.util.ResourceManager.getInstance().toUri(x);
}if(K.style.backgroundPosition!=h&&Q.style.backgroundPosition===undefined){Q.style.backgroundPosition=null;
}if(K.style.clip!=h&&Q.style.clip===undefined){Q.style.clip=null;
}var O=qx.bom.element.Style;
O.setStyles(K,Q.style);
if(this.__hG){try{K.filters[y].apply();
}catch(e){}}},create:function(R,S,T){var U=this.getTagName(S,R);
var W=this.getAttributes(R,S,T);
var V=qx.bom.element.Style.compile(W.style);

if(U===i){return r+W.src+m+V+q;
}else{return B+V+l;
}},getTagName:function(X,Y){if(Y&&this.__hG&&this.__hH[X]&&qx.lang.String.endsWith(Y,F)){return j;
}return this.__hI[X];
},getAttributes:function(ba,bb,bc){if(!bc){bc={};
}
if(!bc.position){bc.position=z;
}
if((qx.core.Environment.get(g)==J)){bc.fontSize=0;
bc.lineHeight=0;
}else if((qx.core.Environment.get(g)==u)){bc.WebkitUserDrag=t;
}var be=qx.util.ResourceManager.getInstance().getImageFormat(ba)||qx.io.ImageLoader.getFormat(ba);

if(qx.core.Environment.get(d)){if(ba!=null&&be==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+ba+"'!");
}}var bd;
if(this.__hG&&this.__hH[bb]&&be===n){bd=this.__hL(bc,bb,ba);
}else{if(bb===a){bd=this.__hM(bc,bb,ba);
}else if(bb===c||bb===H){bd=this.__hN(bc,bb,ba);
}else{bd=this.__hQ(bc,bb,ba);
}}return bd;
},__hJ:function(bf,bh,bi){if(bf.width==null&&bh!=null){bf.width=bh+k;
}
if(bf.height==null&&bi!=null){bf.height=bi+k;
}return bf;
},__hK:function(bj){var bk=qx.util.ResourceManager.getInstance().getImageWidth(bj)||qx.io.ImageLoader.getWidth(bj);
var bl=qx.util.ResourceManager.getInstance().getImageHeight(bj)||qx.io.ImageLoader.getHeight(bj);
return {width:bk,height:bl};
},__hL:function(bm,bn,bo){var br=this.__hK(bo);
bm=this.__hJ(bm,br.width,br.height);
var bq=bn==f?E:a;
var bp=C+qx.util.ResourceManager.getInstance().toUri(bo)+p+bq+o;
bm.filter=bp;
bm.backgroundImage=bm.backgroundRepeat=h;
return {style:bm};
},__hM:function(bs,bt,bu){var bv=qx.util.ResourceManager.getInstance().toUri(bu);
var bw=this.__hK(bu);
bs=this.__hJ(bs,bw.width,bw.height);
return {src:bv,style:bs};
},__hN:function(bx,by,bz){var bA=qx.util.ResourceManager.getInstance();
var bD=bA.getCombinedFormat(bz);
var bF=this.__hK(bz);
var bB;

if(bD){var bE=bA.getData(bz);
var bC=bE[4];

if(bD==I){bB=bA.toDataUri(bz);
}else{bB=bA.toUri(bC);
}
if(by===c){bx=this.__hO(bx,bE,bF.height);
}else{bx=this.__hP(bx,bE,bF.width);
}return {src:bB,style:bx};
}else{if(qx.core.Environment.get(d)){this.__hS(bz);
}
if(by==c){bx.height=bF.height==null?null:bF.height+k;
}else if(by==H){bx.width=bF.width==null?null:bF.width+k;
}bB=bA.toUri(bz);
return {src:bB,style:bx};
}},__hO:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH[4]);
bG.clip={top:-bH[6],height:bI};
bG.height=bJ+k;
if(bG.top!=null){bG.top=(parseInt(bG.top,10)+bH[6])+k;
}else if(bG.bottom!=null){bG.bottom=(parseInt(bG.bottom,10)+bI-bJ-bH[6])+k;
}return bG;
},__hP:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().getImageWidth(bL[4]);
bK.clip={left:-bL[5],width:bM};
bK.width=bN+k;
if(bK.left!=null){bK.left=(parseInt(bK.left,10)+bL[5])+k;
}else if(bK.right!=null){bK.right=(parseInt(bK.right,10)+bM-bN-bL[5])+k;
}return bK;
},__hQ:function(bO,bP,bQ){var bT=qx.util.ResourceManager.getInstance();
var bY=bT.getCombinedFormat(bQ);
var cb=this.__hK(bQ);
if(bY&&bP!==b){var ca=bT.getData(bQ);
var bX=ca[4];

if(bY==I){var bW=bT.toDataUri(bQ);
var bV=0;
var bU=0;
}else{var bW=bT.toUri(bX);
var bV=ca[5];
var bU=ca[6];
}var bR=qx.bom.element.Background.getStyles(bW,bP,bV,bU);

for(var bS in bR){bO[bS]=bR[bS];
}
if(cb.width!=null&&bO.width==null&&(bP==A||bP===f)){bO.width=cb.width+k;
}
if(cb.height!=null&&bO.height==null&&(bP==v||bP===f)){bO.height=cb.height+k;
}return {style:bO};
}else{if(qx.core.Environment.get(d)){if(bP!==b){this.__hS(bQ);
}}bO=this.__hJ(bO,cb.width,cb.height);
bO=this.__hR(bO,bQ,bP);
return {style:bO};
}},__hR:function(cc,cd,ce){var top=null;
var ci=null;

if(cc.backgroundPosition){var cf=cc.backgroundPosition.split(w);
ci=parseInt(cf[0],10);

if(isNaN(ci)){ci=cf[0];
}top=parseInt(cf[1],10);

if(isNaN(top)){top=cf[1];
}}var ch=qx.bom.element.Background.getStyles(cd,ce,ci,top);

for(var cg in ch){cc[cg]=ch[cg];
}if(cc.filter){cc.filter=h;
}return cc;
},__hS:function(cj){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(cj)&&cj.indexOf(G)==-1){if(!this.__hF[cj]){qx.log.Logger.debug("Potential clipped image candidate: "+cj);
this.__hF[cj]=true;
}}},isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__hG;
}}});
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
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bd:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bd[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bd[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var o="qx.debug",n="Invalid argument 'map'",m="+",k="Invalid argument 'source'",j="Invalid argument 'target'",h="=",g="&",f="function",e="Invalid argument 'array'",d="Invalid argument 'minLength'",a="qx.lang.Object",c="undefined",b="object";
qx.Class.define(a,{statics:{empty:function(p){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(p,n);
}
for(var q in p){if(p.hasOwnProperty(q)){delete p[q];
}}},isEmpty:function(r){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(r,n);
}
for(var s in r){return false;
}return true;
},hasMinLength:function(t,u){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(t,n);
qx.core.Assert&&qx.core.Assert.assertInteger(u,d);
}
if(u<=0){return true;
}var length=0;

for(var v in t){if((++length)>=u){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(w){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(w,n);
}var y=[];
var x=this.getKeys(w);

for(var i=0,l=x.length;i<l;i++){y.push(w[x[i]]);
}return y;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(z,A){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(z,j);
qx.core.Assert&&qx.core.Assert.assertMap(A,k);
}return qx.lang.Object.mergeWith(z,A,false);
},merge:function(B,C){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(B,j);
}var D=arguments.length;

for(var i=1;i<D;i++){qx.lang.Object.mergeWith(B,arguments[i]);
}return B;
},clone:function(E){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(E,k);
}var F={};

for(var G in E){F[G]=E[G];
}return F;
},invert:function(H){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(H,n);
}var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(K,L){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(K,n);
}
for(var M in K){if(K.hasOwnProperty(M)&&K[M]===L){return M;
}}return null;
},contains:function(N,O){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(N,n);
}return this.getKeyFromValue(N,O)!==null;
},select:function(P,Q){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertMap(Q,n);
}return Q[P];
},fromArray:function(R){if(qx.core.Environment.get(o)){qx.core.Assert&&qx.core.Assert.assertArray(R,e);
}var S={};

for(var i=0,l=R.length;i<l;i++){if(qx.core.Environment.get(o)){switch(typeof R[i]){case b:case f:case c:throw new Error("Could not convert complex objects like "+R[i]+" at array index "+i+" to map syntax");
}}S[R[i].toString()]=true;
}return S;
},toUriParameter:function(T,U){var X,V=[];

for(X in T){if(T.hasOwnProperty(X)){var W=T[X];

if(W instanceof Array){for(var i=0;i<W.length;i++){this.__da(X,W[i],V,U);
}}else{this.__da(X,W,V,U);
}}}return V.join(g);
},__da:function(Y,ba,bb,bc){var bd=window.encodeURIComponent;

if(bc){bb.push(bd(Y).replace(/%20/g,m)+h+bd(ba).replace(/%20/g,m));
}else{bb.push(bd(Y)+h+bd(ba));
}}}});
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
(function(){var j="",i="engine.name",h="float",g="qx.debug",f="browser.documentmode",e="mshtml",d="Invalid argument 'smart'",c="Invalid argument 'element'",b="style",a="css.float",B="px",A="css.appearance",z="pixelRight",y="css.userselect",x="css.boxsizing",w="css.textoverflow",v="pixelHeight",u=":",t="pixelTop",s="css.borderimage",q="Invalid argument 'name'",r="pixelLeft",o="css.usermodify",p="qx.bom.element.Style",m="pixelBottom",n="Invalid argument 'styles'",k="pixelWidth",l=";";
qx.Class.define(p,{statics:{__dh:function(){var D={"appearance":qx.core.Environment.get(A),"userSelect":qx.core.Environment.get(y),"textOverflow":qx.core.Environment.get(w),"borderImage":qx.core.Environment.get(s),"float":qx.core.Environment.get(a),"userModify":qx.core.Environment.get(o),"boxSizing":qx.core.Environment.get(x)};
this.__di={};

for(var C in qx.lang.Object.clone(D)){if(!D[C]){delete D[C];
}else{this.__di[C]=C==h?h:qx.lang.String.hyphenate(D[C]);
}}this.__dj=D;
},__dk:{width:k,height:v,left:r,right:z,top:t,bottom:m},__dl:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(E){var G=[];
var I=this.__dl;
var H=this.__di;
var name,F;

for(name in E){F=E[name];

if(F==null){continue;
}name=H[name]||name;
if(I[name]){G.push(I[name].compile(F));
}else{G.push(qx.lang.String.hyphenate(name),u,F,l);
}}return G.join(j);
},setCss:function(J,K){if(qx.core.Environment.get(i)===e&&parseInt(qx.core.Environment.get(f),10)<8){J.style.cssText=K;
}else{J.setAttribute(b,K);
}},getCss:function(L){if(qx.core.Environment.get(i)===e&&parseInt(qx.core.Environment.get(f),10)<8){return L.style.cssText.toLowerCase();
}else{return L.getAttribute(b);
}},isPropertySupported:function(M){return (this.__dl[M]||this.__dj[M]||M in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(N,name,O,P){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(N,c);
qx.core.Assert.assertString(name,q);

if(P!==undefined){qx.core.Assert.assertBoolean(P,d);
}}name=this.__dj[name]||name;
if(P!==false&&this.__dl[name]){return this.__dl[name].set(N,O);
}else{N.style[name]=O!==null?O:j;
}},setStyles:function(Q,R,S){if(qx.core.Environment.get(g)){qx.core.Assert.assertElement(Q,c);
qx.core.Assert.assertMap(R,n);

if(S!==undefined){qx.core.Assert.assertBoolean(S,d);
}}var V=this.__dj;
var X=this.__dl;
var T=Q.style;

for(var W in R){var U=R[W];
var name=V[W]||W;

if(U===undefined){if(S!==false&&X[name]){X[name].reset(Q);
}else{T[name]=j;
}}else{if(S!==false&&X[name]){X[name].set(Q,U);
}else{T[name]=U!==null?U:j;
}}}},reset:function(Y,name,ba){name=this.__dj[name]||name;
if(ba!==false&&this.__dl[name]){return this.__dl[name].reset(Y);
}else{Y.style[name]=j;
}},get:qx.core.Environment.select(i,{"mshtml":function(bb,name,bc,bd){name=this.__dj[name]||name;
if(bd!==false&&this.__dl[name]){return this.__dl[name].get(bb,bc);
}if(!bb.currentStyle){return bb.style[name]||j;
}switch(bc){case this.LOCAL_MODE:return bb.style[name]||j;
case this.CASCADED_MODE:return bb.currentStyle[name]||j;
default:var bh=bb.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bh)){return bh;
}var bg=this.__dk[name];

if(bg){var be=bb.style[name];
bb.style[name]=bh||0;
var bf=bb.style[bg]+B;
bb.style[name]=be;
return bf;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bh)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bh;
}},"default":function(bi,name,bj,bk){name=this.__dj[name]||name;
if(bk!==false&&this.__dl[name]){return this.__dl[name].get(bi,bj);
}switch(bj){case this.LOCAL_MODE:return bi.style[name]||j;
case this.CASCADED_MODE:if(bi.currentStyle){return bi.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bl=qx.dom.Node.getDocument(bi);
var bm=bl.defaultView.getComputedStyle(bi,null);
return bm?bm[name]:j;
}}})},defer:function(bn){bn.__dh();
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
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__ia:[n,null,m,i,null,r,k,null,r],__ib:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ic:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__id:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__ic(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__id(G)){G=q+G+q;
}var H=this.__ia;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__ib;
}var L=this.__ic(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__id(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",F=" ",E="shorthand",D="widthTop",C="styleRight",B="styleBottom",A="qx.debug",z="widthBottom",y="widthLeft",x="styleTop",w="colorBottom",q="styleLeft",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="qx.theme",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.MSingleBorder",v="border-bottom",u="absolute";
qx.Mixin.define(t,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[y,q,o]},right:{group:[r,C,p]},top:{group:[D,x,m]},bottom:{group:[z,B,w]},width:{group:[D,r,z,y],mode:E},style:{group:[x,C,B,q],mode:E},color:{group:[m,p,w,o],mode:E}},members:{_styleBorder:function(G){if(qx.core.Environment.get(n)){var I=qx.theme.manager.Color.getInstance();
var M=I.resolve(this.getColorTop());
var J=I.resolve(this.getColorRight());
var H=I.resolve(this.getColorBottom());
var L=I.resolve(this.getColorLeft());
}else{var M=this.getColorTop();
var J=this.getColorRight();
var H=this.getColorBottom();
var L=this.getColorLeft();
}var K=this.getWidthTop();

if(K>0){G[k]=K+g+this.getStyleTop()+F+(M||c);
}var K=this.getWidthRight();

if(K>0){G[s]=K+g+this.getStyleRight()+F+(J||c);
}var K=this.getWidthBottom();

if(K>0){G[v]=K+g+this.getStyleBottom()+F+(H||c);
}var K=this.getWidthLeft();

if(K>0){G[l]=K+g+this.getStyleLeft()+F+(L||c);
}if(qx.core.Environment.get(A)){if(G.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}G.position=u;
G.top=0;
G.left=0;
},_resizeBorder:function(N,O,P){var Q=this.getInsets();
O-=Q.left+Q.right;
P-=Q.top+Q.bottom;
if(O<0){O=0;
}
if(P<0){P=0;
}return {left:Q.left-this.getWidthLeft(),top:Q.top-this.getWidthTop(),width:O,height:P};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){if(qx.core.Environment.get(A)){if(this._markup){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="qx.debug",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,d,a],mode:b}},members:{__cY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__cY=null;
},getInsets:function(){if(this.__cY){return this.__cY;
}var k=this._getDefaultInsets();
return this.__cY={left:this.getInsetLeft()==null?k.left:this.getInsetLeft(),right:this.getInsetRight()==null?k.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?k.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?k.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Environment.get(e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__cY=null;
}},destruct:function(){this.__cY=null;
}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(){if(this._markup){return this._markup;
}var f={};
this._styleBorder(f);
var g=this._generateBackgroundMarkup(f);
return this._markup=g;
},resize:function(h,i,j){var k=this._resizeBorder(h,i,j);
h.style.width=k.width+b;
h.style.height=k.height+b;
h.style.left=k.left+b;
h.style.top=k.top+b;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",x="qx.debug",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",m="-moz-border-radius-topright",n="-webkit-border-top-right-radius",k="-moz-border-radius-topleft",l="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(y){y[d]=q;
var z=this.getRadiusTopLeft();

if(z>0){y[k]=z+j;
y[t]=z+j;
y[a]=z+j;
}z=this.getRadiusTopRight();

if(z>0){y[m]=z+j;
y[n]=z+j;
y[w]=z+j;
}z=this.getRadiusBottomLeft();

if(z>0){y[l]=z+j;
y[e]=z+j;
y[v]=z+j;
}z=this.getRadiusBottomRight();

if(z>0){y[r]=z+j;
y[b]=z+j;
y[p]=z+j;
}},_applyBorderRadius:function(){if(qx.core.Environment.get(x)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var m="_applyBoxShadow",l="px ",k="Integer",j="box-shadow",i="shadowHorizontalLength",h="-webkit-box-shadow",g="qx.debug",f="qx.theme",e="shadowVerticalLength",d="-moz-box-shadow",a="shorthand",c="qx.ui.decoration.MBoxShadow",b="Color";
qx.Mixin.define(c,{properties:{shadowHorizontalLength:{nullable:true,check:k,apply:m},shadowVerticalLength:{nullable:true,check:k,apply:m},shadowBlurRadius:{nullable:true,check:k,apply:m},shadowColor:{nullable:true,check:b,apply:m},shadowLength:{group:[i,e],mode:a}},members:{_styleBoxShadow:function(n){if(qx.core.Environment.get(f)){var o=qx.theme.manager.Color.getInstance();
var r=o.resolve(this.getShadowColor());
}else{var r=this.getShadowColor();
}
if(r!=null){var s=this.getShadowVerticalLength()||0;
var p=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var q=p+l+s+l+blur+l+r;
n[d]=q;
n[h]=q;
n[j]=q;
}},_applyBoxShadow:function(){if(qx.core.Environment.get(g)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
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
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="horizontal",f=",",e=" 0",d="px",c="0",b="shorthand",a="Color",F="vertical",E="Number",D="%",C="),to(",B="from(",A="qx.theme",z="background-image",y="background",x="browser.name",w="-webkit-gradient(linear,",q="startColorPosition",r="qx.debug",o="deg, ",p="css.gradient.legacywebkit",m="startColor",n="ie",k="",l="qx.ui.decoration.MLinearBackgroundGradient",s="(",t="endColorPosition",v="css.gradient.linear",u="endColor";
qx.Mixin.define(l,{properties:{startColor:{check:a,nullable:true,apply:j},endColor:{check:a,nullable:true,apply:j},orientation:{check:[g,F],init:F,apply:j},startColorPosition:{check:E,init:0,apply:j},endColorPosition:{check:E,init:100,apply:j},colorPositionUnit:{check:[d,D],init:D,apply:j},gradientStart:{group:[m,q],mode:b},gradientEnd:{group:[u,t],mode:b}},members:{_styleLinearBackgroundGradient:function(G){if(qx.core.Environment.get(A)){var J=qx.theme.manager.Color.getInstance();
var Q=J.resolve(this.getStartColor());
var L=J.resolve(this.getEndColor());
}else{var Q=this.getStartColor();
var L=this.getEndColor();
}var R=this.getColorPositionUnit();
if(qx.core.Environment.get(p)){R=R===d?k:R;

if(this.getOrientation()==g){var P=this.getStartColorPosition()+R+e+R;
var N=this.getEndColorPosition()+R+e+R;
}else{var P=c+R+i+this.getStartColorPosition()+R;
var N=c+R+i+this.getEndColorPosition()+R;
}var M=B+Q+C+L+h;
var K=w+P+f+N+f+M+h;
G[y]=K;
}else{var S=this.getOrientation()==g?0:270;
if(qx.core.Environment.get(x)==n){S=S-90;
}var I=Q+i+this.getStartColorPosition()+R;
var H=L+i+this.getEndColorPosition()+R;
var O=qx.core.Environment.get(v);
G[z]=O+s+S+o+I+f+H+h;
}},_resizeLinearBackgroundGradient:function(T,U,V){var W=this.getInsets();
U-=W.left+W.right;
V-=W.top+W.bottom;
return {left:W.left,top:W.top,width:U,height:V};
},_applyLinearBackgroundGradient:function(){if(qx.core.Environment.get(r)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var j='',i="px ",h=" ",g="border-top",f="border-left",e="border-bottom",d="border-right",c="Color",b="Number",a="qx.theme",E="qx.debug",D="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",q="innerColorTop",r="relative",o="browser.documentmode",p="innerColorLeft",m="qx.ui.decoration.MDoubleBorder",n="left",k="engine.version",l="innerWidthBottom",s="innerWidthLeft",t="position",u="absolute";
qx.Mixin.define(m,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__sb;
this._resizeBorder=this.__sa;
this._styleBorder=this.__rX;
this._generateMarkup=this.__rY;
},properties:{innerWidthTop:{check:b,init:0},innerWidthRight:{check:b,init:0},innerWidthBottom:{check:b,init:0},innerWidthLeft:{check:b,init:0},innerWidth:{group:[w,z,l,s],mode:D},innerColorTop:{nullable:true,check:c},innerColorRight:{nullable:true,check:c},innerColorBottom:{nullable:true,check:c},innerColorLeft:{nullable:true,check:c},innerColor:{group:[q,v,x,p],mode:D}},members:{__rW:null,__rX:function(F){if(qx.core.Environment.get(a)){var H=qx.theme.manager.Color.getInstance();
var I=H.resolve(this.getInnerColorTop());
var L=H.resolve(this.getInnerColorRight());
var J=H.resolve(this.getInnerColorBottom());
var K=H.resolve(this.getInnerColorLeft());
}else{var I=this.getInnerColorTop();
var L=this.getInnerColorRight();
var J=this.getInnerColorBottom();
var K=this.getInnerColorLeft();
}F.position=r;
var G=this.getInnerWidthTop();

if(G>0){F[g]=G+i+this.getStyleTop()+h+I;
}var G=this.getInnerWidthRight();

if(G>0){F[d]=G+i+this.getStyleRight()+h+L;
}var G=this.getInnerWidthBottom();

if(G>0){F[e]=G+i+this.getStyleBottom()+h+J;
}var G=this.getInnerWidthLeft();

if(G>0){F[f]=G+i+this.getStyleLeft()+h+K;
}
if(qx.core.Environment.get(E)){if(!F[g]&&!F[d]&&!F[e]&&!F[f]){throw new Error("Invalid Double decorator (zero inner border width). Use qx.ui.decoration.Single instead!");
}}},__rY:function(M){var Q=this._generateBackgroundMarkup(M);

if(qx.core.Environment.get(a)){var O=qx.theme.manager.Color.getInstance();
var T=O.resolve(this.getColorTop());
var P=O.resolve(this.getColorRight());
var N=O.resolve(this.getColorBottom());
var S=O.resolve(this.getColorLeft());
}else{var T=this.getColorTop();
var P=this.getColorRight();
var N=this.getColorBottom();
var S=this.getColorLeft();
}M[g]=j;
M[d]=j;
M[e]=j;
M[f]=j;
M[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(k))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(o)<8)){M[C]=j;
}var R=this.getWidthTop();

if(R>0){M[g]=R+i+this.getStyleTop()+h+T;
}var R=this.getWidthRight();

if(R>0){M[d]=R+i+this.getStyleRight()+h+P;
}var R=this.getWidthBottom();

if(R>0){M[e]=R+i+this.getStyleBottom()+h+N;
}var R=this.getWidthLeft();

if(R>0){M[f]=R+i+this.getStyleLeft()+h+S;
}
if(qx.core.Environment.get(E)){if(M[g]==j&&M[d]==j&&M[e]==j&&M[f]==j){throw new Error("Invalid Double decorator (zero outer border width). Use qx.ui.decoration.Single instead!");
}}M[t]=u;
M[y]=0;
M[n]=0;
return this.__rW=this._generateBackgroundMarkup(M,Q);
},__sa:function(U,V,W){var X=this.getInsets();
V-=X.left+X.right;
W-=X.top+X.bottom;
var Y=X.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=X.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:Y,top:top,width:V,height:W,elementToApplyDimensions:U.firstChild};
},__sb:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var j="tabview-button-border",i="button-box",h="button-box-pressed",g="background-selected",f="button-border",e="button-box-hovered",d="button-box-pressed-hovered",c="solid",b="invalid",a="gray",X="button-border-hovered",W="tabview-unselected",V="shadow",U="border-separator",T="button-box-focused",S="border-light",R="checkbox",Q="tabview-page-button-top-bottom",P="window-border",O="radiobutton",q="scroll-knob",r="tabview-page-button-right-left",o="background",p="button-box-bright",m="window-border-inner",n="white",k="button-box-bright-pressed",l="button-box-dark-pressed",u="table-header",v="button-box-invalid",C="menubar-button-hovered",A="button-box-dark",G="#999999",E="qx/decoration/Simple",K="dotted",I="button",x="tooltip-text",N="table-focus-indicator",M="button-box-pressed-invalid",L="scrollbar-dark",w="qx.theme.simple.Decoration",y="table-header-cell",z="border-lead",B="#FFF",D="button-box-pressed-focused",F="scrollbar-bright",H="border-light-shadow",J="white-box-border",s="window",t="scroll-knob-pressed";
qx.Theme.define(w,{aliases:{decoration:E},decorations:{"border-blue":{decorator:qx.ui.decoration.Uniform,style:{width:4,color:g}},"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:g}},"main-dark":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:f}},"popup":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,shadowLength:2,shadowBlurRadius:5,shadowColor:V}},"button-box":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,gradientStart:[p,40],gradientEnd:[A,70],backgroundColor:p}},"button-box-pressed":{include:i,style:{gradientStart:[k,40],gradientEnd:[l,70],backgroundColor:k}},"button-box-pressed-hovered":{include:h,style:{color:X}},"button-box-hovered":{include:i,style:{color:X}},"button-box-invalid":{include:i,style:{color:b}},"button-box-pressed-invalid":{include:h,style:{color:b}},"button-box-hovered-invalid":{include:v},"button-box-pressed-hovered-invalid":{include:M},"button-box-focused":{include:i,style:{color:g}},"button-box-pressed-focused":{include:h,style:{color:g}},"button-box-hovered-focused":{include:T},"button-box-pressed-hovered-focused":{include:D},"button-box-right":{include:i,style:{radius:[0,3,3,0]}},"button-box-pressed-right":{include:h,style:{radius:[0,3,3,0]}},"button-box-pressed-hovered-right":{include:d,style:{radius:[0,3,3,0]}},"button-box-hovered-right":{include:e,style:{radius:[0,3,3,0]}},"button-box-focused-right":{include:T,style:{radius:[0,3,3,0]}},"button-box-right-borderless":{include:i,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-right-borderless":{include:h,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-pressed-hovered-right-borderless":{include:d,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-hovered-right-borderless":{include:e,style:{radius:[0,3,3,0],width:[1,1,1,0]}},"button-box-top-right":{include:i,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-top-right":{include:h,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-pressed-hovered-top-right":{include:d,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-hovered-top-right":{include:e,style:{radius:[0,3,0,0],width:[1,1,1,0]}},"button-box-bottom-right":{include:i,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-bottom-right":{include:h,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-pressed-hovered-bottom-right":{include:d,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-hovered-bottom-right":{include:e,style:{radius:[0,0,3,0],width:[0,1,1,0]}},"button-box-bottom-left":{include:i,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-bottom-left":{include:h,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-pressed-hovered-bottom-left":{include:d,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-hovered-bottom-left":{include:e,style:{radius:[0,0,0,3],width:[0,0,1,1]}},"button-box-top-left":{include:i,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-top-left":{include:h,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-pressed-hovered-top-left":{include:d,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-hovered-top-left":{include:e,style:{radius:[3,0,0,0],width:[1,0,0,1]}},"button-box-middle":{include:i,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-middle":{include:h,style:{radius:0,width:[1,0,1,1]}},"button-box-pressed-hovered-middle":{include:d,style:{radius:0,width:[1,0,1,1]}},"button-box-hovered-middle":{include:e,style:{radius:0,width:[1,0,1,1]}},"button-box-left":{include:i,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-left":{include:h,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-pressed-hovered-left":{include:d,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-hovered-left":{include:e,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"button-box-focused-left":{include:T,style:{radius:[3,0,0,3],width:[1,0,1,1]}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:U}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:U}},"scroll-knob":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:3,width:1,color:f,backgroundColor:F}},"scroll-knob-pressed":{include:q,style:{backgroundColor:L}},"scroll-knob-hovered":{include:q,style:{color:X}},"scroll-knob-pressed-hovered":{include:t,style:{color:X}},"button-hover":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius],style:{backgroundColor:I,radius:3}},"window":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:P,innerWidth:4,innerColor:m,shadowLength:1,shadowBlurRadius:3,shadowColor:V,backgroundColor:o}},"window-active":{include:s,style:{shadowLength:2,shadowBlurRadius:5}},"window-caption":{decorator:qx.ui.decoration.Single,style:{width:[0,0,2,0],color:m}},"white-box":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:J,shadowBlurRadius:2,shadowColor:G,radius:7,backgroundColor:n}},"inset":{decorator:qx.ui.decoration.Single,style:{width:1,color:[H,S,S,S]}},"focused-inset":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:g}},"border-invalid":{decorator:qx.ui.decoration.Uniform,style:{width:2,color:b}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:K,color:z}},"tooltip":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{width:1,color:x,shadowLength:1,shadowBlurRadius:2,shadowColor:V}},"tooltip-error":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{radius:5,backgroundColor:b}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:f}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g}},"menubar-button-hovered":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBackgroundColor],style:{width:1,color:g,radius:3,backgroundColor:n}},"menubar-button-pressed":{include:C,style:{radius:[3,3,0,0],width:[1,1,0,1]}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:a,style:c}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,style:c}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:a,style:c}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:a,widthRight:1,colorRight:a,style:c}},"tabview-page-button-top-bottom":{decorator:qx.ui.decoration.Single,style:{width:[0,1],color:j}},"tabview-page-button-top-bottom-first":{include:Q,style:{color:[j,j,j,W]}},"tabview-page-button-top-bottom-last":{include:Q,style:{color:[j,W,j,j]}},"tabview-page-button-right-left":{decorator:qx.ui.decoration.Single,style:{width:[1,0],color:j}},"tabview-page-button-right-left-first":{include:r,style:{color:[W,j,j,j]}},"tabview-page-button-right-left-last":{include:r,style:{color:[j,j,W,j]}},"statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:g,styleTop:c}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:N,style:c}},"table-header":{include:i,style:{radius:0,width:[1,0,1,0]}},"table-header-column-button":{include:u,style:{width:1,color:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,color:f}},"table-header-cell-first":{include:y,style:{widthLeft:1}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:B,width:1,color:U}},"radiobutton":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor],style:{radius:10,width:1,color:f,innerColor:o,innerWidth:2}},"radiobutton-focused":{include:O,style:{color:g}},"radiobutton-invalid":{include:O,style:{color:b}},"checkbox":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{width:1,color:f}},"checkbox-focused":{include:R,style:{color:g}},"checkbox-invalid":{include:R,style:{color:b}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b}});
})();
(function(){var dl="widget",dk="button",dj="pointer",di="button-box",dh="atom",dg="background",df="main-dark",de="bold",dd="text-disabled",dc="image",ca="white",bY="background-selected",bX="popup",bW="button-box-hovered",bV="",bU="button-box-pressed-hovered",bT="label",bS="button-box-pressed",bR="arrow-down",bQ="groupbox",dt="text-selected",du="cell",dr="textfield",ds="tooltip",dp="combobox/button",dq="list",dm="middle",dn="menu-button",dv="toolbar-button",dw="spinner",cK="button-frame",cJ="-middle",cM="-invert",cL="background-selected-dark",cO="invalid",cN="combobox",cQ="scrollbar",cP="inset",cI="center",cH="datechooser/button",k="right",l="main",m="light-background",n="background-disabled",o="-right",p="radiobutton",q="arrow-",r="checkbox",s="-left",t="tree-folder",dK="selectbox",dJ="-invalid",dI="icon/16/places/folder-open.png",dH="menu-slidebar-button",dO="scrollbar/button",dN="border-invalid",dM="tree-minus",dL="statusbar",dQ="down",dP="text",bg="background-disabled-checked",bh="tree",be="slidebar/button-forward",bf="icon/16/places/folder.png",bk="icon/16/mimetypes/text-plain.png",bl="tree-plus",bi="default",bj="-top-left",bc="datechooser",bd="button-box-focused",L="blank",K="treevirtual-folder",N="-bottom-right",M="virtual-list",H="-top-right",G="arrow-right",J="left",I="up",F="right-top",E="focused-inset",bq="slidebar/button-backward",br="-bottom-left",bs="table-row-background-even",bt="button-box-pressed-top-right",bm="arrow-left",bn="datechooser-weekday",bo="arrow-up",bp="icon/16/actions/dialog-ok.png",bu="button-box-top-right",bv="slidebar",W="#BABABA",V="button-box-hovered-bottom-right",U="tabview-page-button-top-bottom",T="move-frame",S="nodrop",R="window-caption",Q="table-header-cell",P="button-box-hovered-top-right",bb="row-layer",ba="treevirtual-plus-only",bw="move",bx="treevirtual-plus-end",by="-last",bz="vertical",bA="arrow-down-small",bB="tooltip-error",bC="window-restore",bD="resize-frame",bE="scroll-knob",bF="tabview-close",ci="atom/label",ch="button-box-pressed-bottom-right",cg="button-box-pressed-hovered-bottom-right",cf="icon/16/actions/dialog-cancel.png",cm="qx.theme.simple.Appearance",cl="menu-slidebar",ck="treevirtual-minus-cross",cj="background-pane",cp="table-",co="scroll-knob-pressed",cD="icon",cE="arrow-rewind",cB="icon/16/apps/office-calendar.png",cC="headline",cz="treevirtual-plus-start",cA="treevirtual-minus-end",cx="checkbox-undetermined",cy="button-box-bottom-right",cF="datechooser-week",cG="descending",cU="toolbar-separator",cT="arrow-up-small",cW="horizontal",cV="border-light-shadow",cY="text-placeholder",cX="treevirtual-plus-cross",db="scrollarea",da="treevirtual-line",cS="tabview-page-button-right-left",cR="menu-checkbox",dD="best-fit",dE="button-border",dF="treevirtual-cross",dG="button-hover",dz="menubar-button-pressed",dA="progressbar",dB="tree-file",dC="tooltip-text",dx="keep-align",dy="-first",j="alias",i="ascending",h="button-box-hovered-right-borderless",g="button-box-right-borderless",f="lead-item",e="checkbox-focused",d="border-blue",c="window-minimize",b="button-box-pressed-hovered-top-right",a="knob-",w="treevirtual-minus-only",x="treevirtual-minus-start",u="checkbox-checked",v="window",A="window-active",B="table-header-cell-first",y="button-box-pressed-right-borderless",z="scroll-knob-hovered",C="tabview-label-active-disabled",D="select-column-order",cq="button-box-pressed-hovered-right-borderless",cn="scroll-knob-pressed-hovered",cv="white-box",cr="datechooser-week-header",cd="menubar-button-hovered",cb="table-header-column-button",O="window-close",ce="datechooser-date-pane",Y="tabview-unselected",X="cursor-",bI="-focused",bJ="menu-radiobutton",bK="window-maximize",bL="treevirtual-end",bM="table",bN="arrow-forward",bO="copy",bP="table-row-background-selected",bG="radiobutton-focused",bH="scrollbar/slider/knob",cc="atom/icon",cu="table-header",ct="menu-separator",cs="link",cw="icon/16/actions/view-refresh.png";
qx.Theme.define(cm,{appearances:{"widget":{},"label":{style:function(dR){return {textColor:dR.disabled?dd:undefined};
}},"image":{style:function(dS){return {opacity:!dS.replacement&&dS.disabled?0.3:undefined};
}},"atom":{},"atom/label":bT,"atom/icon":dc,"root":{style:function(dT){return {backgroundColor:dg,textColor:dP,font:bi};
}},"popup":{style:function(dU){return {decorator:bX,backgroundColor:cj};
}},"tooltip":{include:bX,style:function(dV){return {backgroundColor:ds,textColor:dC,decorator:ds,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":dh,"tooltip-error":{include:ds,style:function(dW){return {textColor:dt,showTimeout:100,hideTimeout:10000,decorator:bB,font:de,backgroundColor:undefined};
}},"tooltip-error/atom":dh,"iframe":{style:function(dX){return {backgroundColor:ca,decorator:df};
}},"move-frame":{style:function(dY){return {decorator:df};
}},"resize-frame":T,"dragdrop-cursor":{style:function(ea){var eb=S;

if(ea.copy){eb=bO;
}else if(ea.move){eb=bw;
}else if(ea.alias){eb=j;
}return {source:qx.theme.simple.Image.URLS[X+eb],position:F,offset:[2,16,2,6]};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dk,include:dk,style:function(ec){return {icon:qx.theme.simple.Image.URLS[q+(ec.vertical?dQ:k)]};
}},"slidebar/button-backward":{alias:dk,include:dk,style:function(ed){return {icon:qx.theme.simple.Image.URLS[q+(ed.vertical?I:J)]};
}},"table":dl,"table/statusbar":{style:function(ee){return {decorator:dL,padding:[2,5]};
}},"table/column-button":{alias:dk,style:function(ef){return {decorator:cb,padding:3,icon:qx.theme.simple.Image.URLS[D]};
}},"table-column-reset-button":{include:dn,alias:dn,style:function(){return {icon:cw};
}},"table-scroller/scrollbar-x":cQ,"table-scroller/scrollbar-y":cQ,"table-scroller":dl,"table-scroller/header":{style:function(){return {decorator:cu};
}},"table-scroller/pane":{},"table-scroller/focus-indicator":{style:function(eg){return {decorator:l};
}},"table-scroller/resize-line":{style:function(eh){return {backgroundColor:dE,width:3};
}},"table-header-cell":{alias:dh,style:function(ei){return {decorator:ei.first?B:Q,minWidth:13,font:de,paddingTop:3,paddingLeft:5,cursor:ei.disabled?undefined:dj,sortIcon:ei.sorted?(qx.theme.simple.Image.URLS[cp+(ei.sortedAscending?i:cG)]):undefined};
}},"table-header-cell/icon":{include:cc,style:function(ej){return {paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ek){return {alignY:dm,alignX:k,paddingRight:5};
}},"table-editor-textfield":{include:dr,style:function(el){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:dK,alias:dK,style:function(em){return {padding:[0,2]};
}},"table-editor-combobox":{include:cN,alias:cN,style:function(en){return {decorator:undefined};
}},"treevirtual":{include:dr,alias:bM,style:function(eo,ep){return {padding:[ep.padding[0]+2,ep.padding[1]+1]};
}},"treevirtual-folder":{style:function(eq){return {icon:(eq.opened?dI:bf)};
}},"treevirtual-file":{include:K,alias:K,style:function(er){return {icon:bk};
}},"treevirtual-line":{style:function(es){return {icon:qx.theme.simple.Image.URLS[da]};
}},"treevirtual-contract":{style:function(et){return {icon:qx.theme.simple.Image.URLS[dM]};
}},"treevirtual-expand":{style:function(eu){return {icon:qx.theme.simple.Image.URLS[bl]};
}},"treevirtual-only-contract":{style:function(ev){return {icon:qx.theme.simple.Image.URLS[w]};
}},"treevirtual-only-expand":{style:function(ew){return {icon:qx.theme.simple.Image.URLS[ba]};
}},"treevirtual-start-contract":{style:function(ex){return {icon:qx.theme.simple.Image.URLS[x]};
}},"treevirtual-start-expand":{style:function(ey){return {icon:qx.theme.simple.Image.URLS[cz]};
}},"treevirtual-end-contract":{style:function(ez){return {icon:qx.theme.simple.Image.URLS[cA]};
}},"treevirtual-end-expand":{style:function(eA){return {icon:qx.theme.simple.Image.URLS[bx]};
}},"treevirtual-cross-contract":{style:function(eB){return {icon:qx.theme.simple.Image.URLS[ck]};
}},"treevirtual-cross-expand":{style:function(eC){return {icon:qx.theme.simple.Image.URLS[cX]};
}},"treevirtual-end":{style:function(eD){return {icon:qx.theme.simple.Image.URLS[bL]};
}},"treevirtual-cross":{style:function(eE){return {icon:qx.theme.simple.Image.URLS[dF]};
}},"resizer":{style:function(eF){return {decorator:df};
}},"splitpane":{},"splitpane/splitter":{style:function(eG){return {backgroundColor:m};
}},"splitpane/splitter/knob":{style:function(eH){return {source:qx.theme.simple.Image.URLS[a+(eH.horizontal?cW:bz)],padding:2};
}},"splitpane/slider":{style:function(eI){return {backgroundColor:cV,opacity:0.3};
}},"menu":{style:function(eJ){var eK={backgroundColor:dg,decorator:l,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:eJ.submenu||eJ.contextmenu?dD:dx};

if(eJ.submenu){eK.position=F;
eK.offset=[-2,-3];
}
if(eJ.contextmenu){eK.offset=4;
}return eK;
}},"menu/slidebar":cl,"menu-slidebar":dl,"menu-slidebar-button":{style:function(eL){return {backgroundColor:eL.hovered?bY:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:dH,style:function(eM){return {icon:qx.theme.simple.Image.URLS[bo+(eM.hovered?cM:bV)]};
}},"menu-slidebar/button-forward":{include:dH,style:function(eN){return {icon:qx.theme.simple.Image.URLS[bR+(eN.hovered?cM:bV)]};
}},"menu-separator":{style:function(eO){return {height:0,decorator:ct,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:dh,style:function(eP){return {backgroundColor:eP.selected?bY:undefined,textColor:eP.selected?dt:undefined,padding:[2,6]};
}},"menu-button/icon":{include:dc,style:function(eQ){return {alignY:dm};
}},"menu-button/label":{include:bT,style:function(eR){return {alignY:dm,padding:1};
}},"menu-button/shortcut":{include:bT,style:function(eS){return {alignY:dm,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dc,style:function(eT){return {source:qx.theme.simple.Image.URLS[G+(eT.selected?cM:bV)],alignY:dm};
}},"menu-checkbox":{alias:dn,include:dn,style:function(eU){return {icon:!eU.checked?undefined:qx.theme.simple.Image.URLS[cR+(eU.selected?cM:bV)]};
}},"menu-radiobutton":{alias:dn,include:dn,style:function(eV){return {icon:!eV.checked?undefined:qx.theme.simple.Image.URLS[bJ+(eV.selected?cM:bV)]};
}},"menubar":{style:function(eW){return {backgroundColor:m,padding:[4,2]};
}},"menubar-button":{style:function(eX){var fa;
var eY=[2,6];

if(!eX.disabled){if(eX.pressed){fa=dz;
eY=[1,5,2,5];
}else if(eX.hovered){fa=cd;
eY=[1,5];
}}return {padding:eY,cursor:eX.disabled?undefined:dj,textColor:cs,decorator:fa};
}},"virtual-list":dq,"virtual-list/row-layer":bb,"row-layer":dl,"column-layer":dl,"group-item":{include:bT,alias:bT,style:function(fb){return {padding:4,backgroundColor:W,textColor:ca,font:de};
}},"virtual-selectbox":dK,"virtual-selectbox/dropdown":bX,"virtual-selectbox/dropdown/list":{alias:M},"virtual-combobox":cN,"virtual-combobox/dropdown":bX,"virtual-combobox/dropdown/list":{alias:M},"virtual-tree":{include:bh,alias:bh,style:function(fc){return {itemHeight:21};
}},"virtual-tree-folder":t,"virtual-tree-file":dB,"cell":{style:function(fd){return {backgroundColor:fd.selected?bP:bs,textColor:fd.selected?dt:dP,padding:[3,6]};
}},"cell-string":du,"cell-number":{include:du,style:function(fe){return {textAlign:k};
}},"cell-image":du,"cell-boolean":du,"cell-atom":du,"cell-date":du,"cell-html":du,"htmlarea":{"include":dl,style:function(ff){return {backgroundColor:ca};
}},"scrollbar":{},"scrollbar/slider":{},"scrollbar/slider/knob":{style:function(fg){var fh=bE;

if(!fg.disabled){if(fg.hovered&&!fg.pressed&&!fg.checked){fh=z;
}else if(fg.hovered&&(fg.pressed||fg.checked)){fh=cn;
}else if(fg.pressed||fg.checked){fh=co;
}}return {height:14,width:14,cursor:fg.disabled?undefined:dj,decorator:fh,minHeight:fg.horizontal?undefined:20,minWidth:fg.horizontal?20:undefined};
}},"scrollbar/button":{style:function(fi){var fj={};
fj.padding=4;
var fk=bV;

if(fi.left){fk=J;
fj.marginRight=2;
}else if(fi.right){fk+=k;
fj.marginLeft=2;
}else if(fi.up){fk+=I;
fj.marginBottom=2;
}else{fk+=dQ;
fj.marginTop=2;
}fj.icon=qx.theme.simple.Image.URLS[q+fk];
fj.cursor=dj;
fj.decorator=di;
return fj;
}},"scrollbar/button-begin":dO,"scrollbar/button-end":dO,"scrollarea/corner":{style:function(fl){return {backgroundColor:dg};
}},"scrollarea":dl,"scrollarea/pane":dl,"scrollarea/scrollbar-x":cQ,"scrollarea/scrollbar-y":cQ,"textfield":{style:function(fm){var fo;

if(fm.disabled){fo=dd;
}else if(fm.showingPlaceholder){fo=cY;
}else{fo=undefined;
}var fp;
var fn;

if(fm.disabled){fp=cP;
fn=[2,3];
}else if(fm.invalid){fp=dN;
fn=[1,2];
}else if(fm.focused){fp=E;
fn=[1,2];
}else{fn=[2,3];
fp=cP;
}return {decorator:fp,padding:fn,textColor:fo,backgroundColor:fm.disabled?n:ca};
}},"textarea":dr,"radiobutton/icon":{style:function(fq){var fs=p;

if(fq.focused&&!fq.invalid){fs=bG;
}fs+=fq.invalid&&!fq.disabled?dJ:bV;
var fr;

if(fq.disabled&&fq.checked){fr=bg;
}else if(fq.disabled){fr=n;
}else if(fq.checked){fr=bY;
}return {decorator:fs,width:12,height:12,backgroundColor:fr};
}},"radiobutton":{style:function(ft){return {icon:qx.theme.simple.Image.URLS[L]};
}},"form-renderer-label":{include:bT,style:function(){return {paddingTop:3};
}},"checkbox":{alias:dh,style:function(fu){var fv;
if(fu.checked){fv=qx.theme.simple.Image.URLS[u];
}else if(fu.undetermined){fv=qx.theme.simple.Image.URLS[cx];
}else{fv=qx.theme.simple.Image.URLS[L];
}return {icon:fv,gap:6};
}},"checkbox/icon":{style:function(fw){var fy=r;

if(fw.focused&&!fw.invalid){fy=e;
}fy+=fw.invalid&&!fw.disabled?dJ:bV;
var fx;
if(fw.checked){fx=2;
}else if(fw.undetermined){fx=[4,2];
}return {decorator:fy,width:12,height:12,padding:fx,backgroundColor:ca};
}},"spinner":{style:function(fz){return {textColor:fz.disabled?dd:undefined};
}},"spinner/textfield":dr,"spinner/upbutton":{alias:dp,include:dp,style:function(fA){var fB=bu;

if(fA.hovered&&!fA.pressed&&!fA.checked){fB=P;
}else if(fA.hovered&&(fA.pressed||fA.checked)){fB=b;
}else if(fA.pressed||fA.checked){fB=bt;
}return {icon:qx.theme.simple.Image.URLS[cT],decorator:fB,width:17};
}},"spinner/downbutton":{alias:dp,include:dp,style:function(fC){var fD=cy;

if(fC.hovered&&!fC.pressed&&!fC.checked){fD=V;
}else if(fC.hovered&&(fC.pressed||fC.checked)){fD=cg;
}else if(fC.pressed||fC.checked){fD=ch;
}return {icon:qx.theme.simple.Image.URLS[bA],decorator:fD,width:17};
}},"selectbox":cK,"selectbox/atom":dh,"selectbox/popup":bX,"selectbox/list":{alias:dq,include:dq,style:function(){return {decorator:undefined};
}},"selectbox/arrow":{include:dc,style:function(fE){return {source:qx.theme.simple.Image.URLS[bR],paddingRight:4,paddingLeft:5};
}},"combobox":{},"combobox/button":{alias:cK,include:cK,style:function(fF){var fG=g;

if(fF.hovered&&!fF.pressed&&!fF.checked){fG=h;
}else if(fF.hovered&&(fF.pressed||fF.checked)){fG=cq;
}else if(fF.pressed||fF.checked){fG=y;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:fG,padding:[0,5],width:19};
}},"combobox/popup":bX,"combobox/list":{alias:dq},"combobox/textfield":dr,"datefield":cN,"datefield/button":{alias:dp,include:dp,style:function(fH){return {icon:cB,padding:[0,0,0,3],backgroundColor:undefined,decorator:undefined,width:19};
}},"datefield/list":{alias:bc,include:bc,style:function(fI){return {decorator:undefined};
}},"list":{alias:db,include:dr},"listitem":{alias:dh,style:function(fJ){return {gap:4,padding:fJ.lead?[2,4]:[3,5],backgroundColor:fJ.selected?bY:undefined,textColor:fJ.selected?dt:undefined,decorator:fJ.lead?f:undefined};
}},"slider":{style:function(fK){var fM;
var fL;

if(fK.disabled){fM=cP;
fL=[2,3];
}else if(fK.invalid){fM=dN;
fL=[1,2];
}else if(fK.focused){fM=E;
fL=[1,2];
}else{fL=[2,3];
fM=cP;
}return {decorator:fM,padding:fL};
}},"slider/knob":bH,"button-frame":{alias:dh,style:function(fN){var fO=di;

if(!fN.disabled){if(fN.hovered&&!fN.pressed&&!fN.checked){fO=bW;
}else if(fN.hovered&&(fN.pressed||fN.checked)){fO=bU;
}else if(fN.pressed||fN.checked){fO=bS;
}}
if(fN.invalid&&!fN.disabled){fO+=dJ;
}else if(fN.focused){fO+=bI;
}return {decorator:fO,padding:[3,8],cursor:fN.disabled?undefined:dj,minWidth:5,minHeight:5};
}},"button-frame/label":{alias:ci,style:function(fP){return {textColor:fP.disabled?dd:undefined};
}},"button":{alias:cK,include:cK,style:function(fQ){return {center:true};
}},"hover-button":{alias:dk,include:dk,style:function(fR){return {decorator:fR.hovered?dG:undefined};
}},"splitbutton":{},"splitbutton/button":{alias:dh,style:function(fS){var fT=di;

if(fS.disabled){fT=di;
}else if(fS.focused){fT=bd;
}else if(fS.hovered&&!fS.pressed&&!fS.checked){fT=bW;
}else if(fS.hovered&&(fS.pressed||fS.checked)){fT=bU;
}else if(fS.pressed||fS.checked){fT=bS;
}fT+=s;
return {decorator:fT,padding:[3,8],cursor:fS.disabled?undefined:dj};
}},"splitbutton/arrow":{style:function(fU){var fV=di;

if(fU.disabled){fV=di;
}else if(fU.focused){fV=bd;
}else if(fU.hovered&&!fU.pressed&&!fU.checked){fV=bW;
}else if(fU.hovered&&(fU.pressed||fU.checked)){fV=bU;
}else if(fU.pressed||fU.checked){fV=bS;
}fV+=o;
return {icon:qx.theme.simple.Image.URLS[bR],decorator:fV,cursor:fU.disabled?undefined:dj,padding:[3,4]};
}},"groupbox":{},"groupbox/legend":{alias:dh,style:function(fW){return {textColor:fW.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"groupbox/frame":{style:function(fX){return {backgroundColor:dg,padding:[6,9],margin:[18,2,2,2],decorator:cv};
}},"check-groupbox":bQ,"check-groupbox/legend":{alias:r,include:r,style:function(fY){return {textColor:fY.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"radio-groupbox":bQ,"radio-groupbox/legend":{alias:p,include:p,style:function(ga){return {textColor:ga.invalid?cO:undefined,padding:5,margin:4,font:de};
}},"tree-folder/open":{include:dc,style:function(gb){return {source:gb.opened?qx.theme.simple.Image.URLS[dM]:qx.theme.simple.Image.URLS[bl]};
}},"tree-folder":{style:function(gc){return {padding:[2,8,2,5],icon:gc.opened?dI:bf,backgroundColor:gc.selected?bY:undefined,iconOpened:dI};
}},"tree-folder/icon":{include:dc,style:function(gd){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(ge){return {padding:[1,2],textColor:ge.selected?dt:undefined};
}},"tree-file":{include:t,alias:t,style:function(gf){return {icon:bk};
}},"tree":{include:dq,alias:dq,style:function(gg){return {contentPadding:gg.invalid&&!gg.disabled?[3,0]:[4,1],padding:gg.focused?0:1};
}},"window":{style:function(gh){return {contentPadding:[10,10,10,10],backgroundColor:dg,decorator:gh.maximized?undefined:gh.active?A:v};
}},"window-resize-frame":bD,"window/pane":{},"window/captionbar":{style:function(gi){return {backgroundColor:gi.active?m:n,padding:8,font:de,decorator:R};
}},"window/icon":{style:function(gj){return {marginRight:4};
}},"window/title":{style:function(gk){return {cursor:bi,font:de,marginRight:20,alignY:dm};
}},"window/minimize-button":{alias:dk,style:function(gl){return {icon:qx.theme.simple.Image.URLS[c],padding:[1,2],cursor:gl.disabled?undefined:dj};
}},"window/restore-button":{alias:dk,style:function(gm){return {icon:qx.theme.simple.Image.URLS[bC],padding:[1,2],cursor:gm.disabled?undefined:dj};
}},"window/maximize-button":{alias:dk,style:function(gn){return {icon:qx.theme.simple.Image.URLS[bK],padding:[1,2],cursor:gn.disabled?undefined:dj};
}},"window/close-button":{alias:dk,style:function(go){return {marginLeft:2,icon:qx.theme.simple.Image.URLS[O],padding:[1,2],cursor:go.disabled?undefined:dj};
}},"window/statusbar":{style:function(gp){return {decorator:dL,padding:[2,6]};
}},"window/statusbar-text":bT,"datechooser":{style:function(gq){return {decorator:l};
}},"datechooser/navigation-bar":{style:function(gr){return {backgroundColor:dg,textColor:gr.disabled?dd:gr.invalid?cO:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":ds,"datechooser/last-month-button-tooltip":ds,"datechooser/next-year-button-tooltip":ds,"datechooser/next-month-button-tooltip":ds,"datechooser/last-year-button":cH,"datechooser/last-month-button":cH,"datechooser/next-year-button":cH,"datechooser/next-month-button":cH,"datechooser/button/icon":{},"datechooser/button":{style:function(gs){var gt={width:17,show:cD,cursor:gs.disabled?undefined:dj};

if(gs.lastYear){gt.icon=qx.theme.simple.Image.URLS[cE];
}else if(gs.lastMonth){gt.icon=qx.theme.simple.Image.URLS[bm];
}else if(gs.nextYear){gt.icon=qx.theme.simple.Image.URLS[bN];
}else if(gs.nextMonth){gt.icon=qx.theme.simple.Image.URLS[G];
}return gt;
}},"datechooser/month-year-label":{style:function(gu){return {font:de,textAlign:cI};
}},"datechooser/date-pane":{style:function(gv){return {decorator:ce,backgroundColor:dg};
}},"datechooser/weekday":{style:function(gw){return {decorator:bn,font:de,textAlign:cI,textColor:gw.disabled?dd:gw.weekend?cL:dg,backgroundColor:gw.weekend?dg:cL,paddingTop:2};
}},"datechooser/day":{style:function(gx){return {textAlign:cI,decorator:gx.today?l:undefined,textColor:gx.disabled?dd:gx.selected?dt:gx.otherMonth?dd:undefined,backgroundColor:gx.disabled?undefined:gx.selected?bY:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gy){return {textAlign:cI,textColor:cL,padding:[2,4],decorator:gy.header?cr:cF};
}},"progressbar":{style:function(gz){return {decorator:dA,padding:1,backgroundColor:ca,width:200,height:20};
}},"progressbar/progress":{style:function(gA){return {backgroundColor:gA.disabled?bg:bY};
}},"toolbar":{style:function(gB){return {backgroundColor:m,padding:0};
}},"toolbar/part":{style:function(gC){return {margin:[0,15]};
}},"toolbar/part/container":{},"toolbar/part/handle":{},"toolbar-separator":{style:function(gD){return {decorator:cU,margin:[7,0],width:4};
}},"toolbar-button":{alias:dh,style:function(gE){var gG=di;

if(gE.disabled){gG=di;
}else if(gE.hovered&&!gE.pressed&&!gE.checked){gG=bW;
}else if(gE.hovered&&(gE.pressed||gE.checked)){gG=bU;
}else if(gE.pressed||gE.checked){gG=bS;
}if(gE.left){gG+=s;
}else if(gE.right){gG+=o;
}else if(gE.middle){gG+=cJ;
}var gF=[7,10];

if(gE.left||gE.middle||gE.right){gF=[7,0];
}return {cursor:gE.disabled?undefined:dj,decorator:gG,margin:gF,padding:[3,5]};
}},"toolbar-menubutton":{alias:dv,include:dv,style:function(gH){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dc,include:dc,style:function(gI){return {source:qx.theme.simple.Image.URLS[bR],cursor:gI.disabled?undefined:dj,padding:[0,5],marginLeft:2};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":{alias:dv,include:dv,style:function(gJ){var gK=di;

if(gJ.disabled){gK=di;
}else if(gJ.hovered&&!gJ.pressed&&!gJ.checked){gK=bW;
}else if(gJ.hovered&&(gJ.pressed||gJ.checked)){gK=bU;
}else if(gJ.pressed||gJ.checked){gK=bS;
}if(gJ.left){gK+=s;
}else if(gJ.right){gK+=cJ;
}else if(gJ.middle){gK+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gK};
}},"toolbar-splitbutton/arrow":{alias:dv,include:dv,style:function(gL){var gM=di;

if(gL.disabled){gM=di;
}else if(gL.hovered&&!gL.pressed&&!gL.checked){gM=bW;
}else if(gL.hovered&&(gL.pressed||gL.checked)){gM=bU;
}else if(gL.pressed||gL.checked){gM=bS;
}if(gL.left){gM+=cJ;
}else if(gL.right){gM+=o;
}else if(gL.middle){gM+=cJ;
}return {icon:qx.theme.simple.Image.URLS[bR],decorator:gM};
}},"tabview":{},"tabview/bar":{alias:bv,style:function(gN){var gO=0,gR=0,gP=0,gQ=0;

if(gN.barTop){gP-=2;
}else if(gN.barBottom){gO-=2;
}else if(gN.barRight){gQ-=2;
}else{gR-=2;
}return {marginBottom:gP,marginTop:gO,marginLeft:gQ,marginRight:gR};
}},"tabview/bar/button-forward":{include:be,alias:be,style:function(gS){var gT=di;

if(gS.hovered&&!gS.pressed&&!gS.checked){gT=bW;
}else if(gS.hovered&&(gS.pressed||gS.checked)){gT=bU;
}else if(gS.pressed||gS.checked){gT=bS;
}
if(gS.barTop){return {marginTop:4,marginBottom:2,decorator:gT+H};
}else if(gS.barBottom){return {marginTop:2,marginBottom:4,decorator:gT+N};
}else if(gS.barLeft){return {marginLeft:4,marginRight:2,decorator:gT+br};
}else{return {marginLeft:2,marginRight:4,decorator:gT+N};
}}},"tabview/bar/button-backward":{include:bq,alias:bq,style:function(gU){var gV=di;

if(gU.hovered&&!gU.pressed&&!gU.checked){gV=bW;
}else if(gU.hovered&&(gU.pressed||gU.checked)){gV=bU;
}else if(gU.pressed||gU.checked){gV=bS;
}
if(gU.barTop){return {marginTop:4,marginBottom:2,decorator:gV+bj};
}else if(gU.barBottom){return {marginTop:2,marginBottom:4,decorator:gV+br};
}else if(gU.barLeft){return {marginLeft:4,marginRight:2,decorator:gV+bj};
}else{return {marginLeft:2,marginRight:4,decorator:gV+H};
}}},"tabview/pane":{style:function(gW){return {backgroundColor:dg,decorator:d,padding:10};
}},"tabview-page":dl,"tabview-page/button":{style:function(gX){var hh;
var hf=0,hd=0,ha=0,hc=0;
if(gX.barTop||gX.barBottom){var hb=5,gY=5,he=9,hg=9;
}else{var hb=8,gY=8,he=4,hg=4;
}if(gX.barTop||gX.barBottom){hh=U;
}else if(gX.barRight||gX.barLeft){hh=cS;
}if(gX.checked){if(gX.barTop){he+=1;
hg+=1;
hb+=4;
}else if(gX.barBottom){he+=1;
hg+=1;
hb+=2;
}else if(gX.barLeft){hb+=1;
gY+=1;
he+=4;
hg+=2;
}else if(gX.barRight){hb+=1;
gY+=1;
he+=2;
hg+=4;
}}else{if(gX.barTop){ha+=2;
hf+=4;
}else if(gX.barBottom){ha+=4;
hf+=2;
}else if(gX.barLeft){hd+=2;
hc+=4;
}else if(gX.barRight){hd+=4;
hc+=2;
}}
if(gX.firstTab&&!gX.checked){hh+=dy;
}else if(gX.lastTab&&!gX.checked){hh+=by;
}return {zIndex:gX.checked?10:5,decorator:gX.checked?undefined:hh,backgroundColor:gX.checked?bY:Y,textColor:gX.disabled?gX.checked?C:dd:ca,padding:[hb,hg,gY,he],margin:[hf,hd,ha,hc]};
}},"tabview-page/button/label":{alias:bT,style:function(hi){return {padding:[0,1,0,1]};
}},"tabview-page/button/icon":dc,"tabview-page/button/close-button":{alias:dh,style:function(hj){return {cursor:hj.disabled?undefined:dj,icon:qx.theme.simple.Image.URLS[bF]};
}},"colorpopup":{alias:bX,include:bX,style:function(hk){return {padding:5};
}},"colorpopup/field":{style:function(hl){return {margin:2,width:14,height:14,backgroundColor:dg,decorator:df};
}},"colorpopup/selector-button":dk,"colorpopup/auto-button":dk,"colorpopup/preview-pane":bQ,"colorpopup/current-preview":{style:function(hm){return {height:20,padding:4,marginLeft:4,decorator:df,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hn){return {height:20,padding:4,marginRight:4,decorator:df,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dk,include:dk,style:function(ho){return {icon:bp};
}},"colorpopup/colorselector-cancelbutton":{alias:dk,include:dk,style:function(hp){return {icon:cf};
}},"colorselector":dl,"colorselector/control-bar":dl,"colorselector/visual-pane":bQ,"colorselector/control-pane":dl,"colorselector/preset-grid":dl,"colorselector/colorbucket":{style:function(hq){return {decorator:df,width:16,height:16};
}},"colorselector/preset-field-set":bQ,"colorselector/input-field-set":bQ,"colorselector/preview-field-set":bQ,"colorselector/hex-field-composite":dl,"colorselector/hex-field":dr,"colorselector/rgb-spinner-composite":dl,"colorselector/rgb-spinner-red":dw,"colorselector/rgb-spinner-green":dw,"colorselector/rgb-spinner-blue":dw,"colorselector/hsb-spinner-composite":dl,"colorselector/hsb-spinner-hue":dw,"colorselector/hsb-spinner-saturation":dw,"colorselector/hsb-spinner-brightness":dw,"colorselector/preview-content-old":{style:function(hr){return {decorator:df,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hs){return {decorator:df,backgroundColor:ca,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ht){return {decorator:df,margin:5};
}},"colorselector/brightness-field":{style:function(hu){return {decorator:df,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dl,"colorselector/hue-saturation-handle":dl,"colorselector/brightness-pane":dl,"colorselector/brightness-handle":dl,"app-header":{style:function(hv){return {font:cC,textColor:dt,backgroundColor:cL,padding:[8,12]};
}},"app-header-label":{style:function(hw){return {paddingTop:5};
}}}});
})();
(function(){var a="qx.theme.simple.Image";
qx.Class.define(a,{extend:qx.core.Object,statics:{URLS:{"blank":"qx/static/blank.gif","checkbox-checked":"decoration/checkbox/checked.png","checkbox-undetermined":"decoration/checkbox/undetermined.png","window-minimize":"decoration/window/minimize.gif","window-maximize":"decoration/window/maximize.gif","window-restore":"decoration/window/restore.gif","window-close":"decoration/window/close.gif","cursor-copy":"decoration/cursors/copy.gif","cursor-move":"decoration/cursors/move.gif","cursor-alias":"decoration/cursors/alias.gif","cursor-nodrop":"decoration/cursors/nodrop.gif","arrow-right":"decoration/arrows/right.gif","arrow-left":"decoration/arrows/left.gif","arrow-up":"decoration/arrows/up.gif","arrow-down":"decoration/arrows/down.gif","arrow-forward":"decoration/arrows/forward.gif","arrow-rewind":"decoration/arrows/rewind.gif","arrow-down-small":"decoration/arrows/down-small.gif","arrow-up-small":"decoration/arrows/up-small.gif","arrow-up-invert":"decoration/arrows/up-invert.gif","arrow-down-invert":"decoration/arrows/down-invert.gif","arrow-right-invert":"decoration/arrows/right-invert.gif","knob-horizontal":"decoration/splitpane/knob-horizontal.png","knob-vertical":"decoration/splitpane/knob-vertical.png","tree-minus":"decoration/tree/minus.gif","tree-plus":"decoration/tree/plus.gif","select-column-order":"decoration/table/select-column-order.png","table-ascending":"decoration/table/ascending.png","table-descending":"decoration/table/descending.png","treevirtual-line":"decoration/treevirtual/line.gif","treevirtual-minus-only":"decoration/treevirtual/only_minus.gif","treevirtual-plus-only":"decoration/treevirtual/only_plus.gif","treevirtual-minus-start":"decoration/treevirtual/start_minus.gif","treevirtual-plus-start":"decoration/treevirtual/start_plus.gif","treevirtual-minus-end":"decoration/treevirtual/end_minus.gif","treevirtual-plus-end":"decoration/treevirtual/end_plus.gif","treevirtual-minus-cross":"decoration/treevirtual/cross_minus.gif","treevirtual-plus-cross":"decoration/treevirtual/cross_plus.gif","treevirtual-end":"decoration/treevirtual/end.gif","treevirtual-cross":"decoration/treevirtual/cross.gif","menu-checkbox":"decoration/menu/checkbox.gif","menu-checkbox-invert":"decoration/menu/checkbox-invert.gif","menu-radiobutton-invert":"decoration/menu/radiobutton-invert.gif","menu-radiobutton":"decoration/menu/radiobutton.gif","tabview-close":"decoration/tabview/close.gif"}}});
})();
(function(){var f="sans-serif",e="arial",d="monospace",c="Courier New",b="qx.theme.simple.Font",a="DejaVu Sans Mono";
qx.Theme.define(b,{fonts:{"default":{size:13,family:[e,f]},"bold":{size:13,family:[e,f],bold:true},"headline":{size:24,family:[f,e]},"small":{size:11,family:[e,f]},"monospace":{size:11,family:[a,c,d]}}});
})();
(function(){var j="white",i="#5685D6",h="black",g="#6694E3",f="#EEE",e="gray",d="#D9D9D9",c="#1866B5",b="#24B",a="#FF0000",N="#CCCCCC",M="rgba(0, 0, 0, 0.4)",L="#FFFFE1",K="#B7B7B7",J="#BBBBBB",I="#9DCBFE",H="#A7A6AA",G="#EBEBEB",F="#666666",E="#CBC8CD",q="#F9F9F9",r="#F7F7F7",o="#808080",p="#686868",m="#888888",n="#E0ECFF",k="#2E3A46",l="css.rgba",s="#F5F5F5",t="#E3E3E3",w="#DDDDDD",v="#BBB",y="qx.theme.simple.Color",x="#F1F1F1",A="#939393",z="#BCBCBC",u="#134983",D="#E8F0E3",C="#FAFBFE",B="#AAAAAA";
qx.Theme.define(y,{colors:{"background":j,"dark-blue":i,"light-background":n,"background-selected":g,"background-selected-dark":i,"background-disabled":r,"background-disabled-checked":J,"background-pane":C,"tabview-unselected":c,"tabview-button-border":u,"tabview-label-active-disabled":d,"link":b,"scrollbar-bright":x,"scrollbar-dark":G,"button":D,"button-border":v,"button-border-hovered":A,"invalid":a,"button-box-bright":q,"button-box-dark":t,"button-box-bright-pressed":w,"button-box-dark-pressed":s,"border-lead":m,"window-border":k,"window-border-inner":I,"white-box-border":z,"shadow":qx.core.Environment.get(l)?M:F,"border-main":g,"border-light":K,"border-light-shadow":p,"border-separator":o,"text":h,"text-disabled":H,"text-selected":j,"text-placeholder":E,"tooltip":L,"tooltip-text":h,"table-header":[242,242,242],"table-focus-indicator":[179,217,255],"table-header-cell":[235,234,219],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":j,"table-row-background-odd":j,"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":f,"table-column-line":f,"progressive-table-header":B,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":N,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":j}});
})();
(function(){var b="Simple",a="qx.theme.Simple";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.simple.Color,decoration:qx.theme.simple.Decoration,font:qx.theme.simple.Font,appearance:qx.theme.simple.Appearance,icon:qx.theme.icon.Tango}});
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
(function(){var c="html.console",b="qx.log.appender.Native",a="log";
qx.Class.define(b,{statics:{process:function(d){if(qx.core.Environment.get(c)){var f=console[d.level]?d.level:a;

if(console[f]){var e=qx.log.appender.Util.toText(d);
console[f](e);
}}}},defer:function(g){qx.log.Logger.register(g);
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
(function(){var c="qx.debug",b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(d){this._manager=d;
},members:{_getParent:function(e){throw new Error("Missing implementation");
},canDispatchEvent:function(f,event,g){return event.getBubbles();
},dispatchEvent:function(h,event,k){var parent=h;
var t=this._manager;
var q,x;
var o;
var s,v;
var u;
var w=[];
q=t.getListeners(h,k,true);
x=t.getListeners(h,k,false);

if(q){w.push(q);
}
if(x){w.push(x);
}var parent=this._getParent(h);
var m=[];
var l=[];
var n=[];
var r=[];
while(parent!=null){q=t.getListeners(parent,k,true);

if(q){n.push(q);
r.push(parent);
}x=t.getListeners(parent,k,false);

if(x){m.push(x);
l.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=n.length-1;i>=0;i--){u=r[i];
event.setCurrentTarget(u);
o=n[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||u;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(h);

for(var i=0,y=w.length;i<y;i++){o=w[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||h;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+h+"'is already disposed.");
}}s.handler.call(v,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,y=m.length;i<y;i++){u=l[i];
event.setCurrentTarget(u);
o=m[i];

for(var j=0,p=o.length;j<p;j++){s=o[j];
v=s.context||u;

if(qx.core.Environment.get(c)){if(v&&v.isDisposed&&v.isDisposed()){this.warn("The context object '"+v+"' for the event '"+k+"' of '"+u+"'is already disposed.");
}}s.handler.call(v,event);
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
(function(){var k="interval",j="qx.event.Timer",i="_applyInterval",h="func is not a function",g="Boolean",f="qx.debug",d="No timeout given",c="Integer",b="qx.event.type.Event",a="_applyEnabled";
qx.Class.define(j,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.setEnabled(false);

if(l!=null){this.setInterval(l);
}var self=this;
this.__fX=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(m,n,o){if(qx.core.Environment.get(f)){qx.core.Assert.assertFunction(m,h);
qx.core.Assert.assertNotUndefined(o,d);
}var p=new qx.event.Timer(o);
p.__fY=m;
p.addListener(k,function(e){p.stop();
m.call(n,e);
p.dispose();
n=null;
},n);
p.start();
return p;
}},properties:{enabled:{init:true,check:g,apply:a},interval:{check:c,init:1000,apply:i}},members:{__ga:null,__fX:null,_applyInterval:function(q,r){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(s,t){if(t){window.clearInterval(this.__ga);
this.__ga=null;
}else if(s){this.__ga=window.setInterval(this.__fX,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(u){this.setInterval(u);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(v){this.stop();
this.startWith(v);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(k);
}})},destruct:function(){if(this.__ga){window.clearInterval(this.__ga);
}this.__ga=this.__fX=null;
}});
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
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var W=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(W.join(k));
var Y=[s,A,l,j,T,t,j,j];
var ba=document.createElement(M);
ba.innerHTML=Y.join(k);
var X=ba.firstChild;
document.body.appendChild(ba.firstChild);
this.__Il=X;
this.__ct=X.childNodes[1];
this.__Im=X.childNodes[2].firstChild;
this.__jC();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__eF,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__ct.innerHTML=k;
},process:function(bb){this.__ct.appendChild(qx.log.appender.Util.toHtml(bb));
this.__In();
},__In:function(){this.__ct.scrollTop=this.__ct.scrollHeight;
},__dI:true,toggle:function(){if(!this.__Il){this.init();
}else if(this.__Il.style.display==h){this.show();
}else{this.__Il.style.display=h;
}},show:function(){if(!this.__Il){this.init();
}else{this.__Il.style.display=K;
this.__ct.scrollTop=this.__ct.scrollHeight;
}},__CQ:[],execute:function(){var be=this.__Im.value;

if(be==k){return;
}
if(be==u){return this.clear();
}var bc=document.createElement(V);
bc.innerHTML=qx.log.appender.Util.escapeHTML(C+be);
bc.className=U;
this.__CQ.push(be);
this.__Io=this.__CQ.length;
this.__ct.appendChild(bc);
this.__In();

try{var bd=window.eval(be);
}catch(bf){qx.log.Logger.error(bf);
}
if(bd!==undefined){qx.log.Logger.debug(bd);
}},__jC:function(e){this.__ct.style.height=(this.__Il.clientHeight-this.__Il.firstChild.offsetHeight-this.__Il.lastChild.offsetHeight)+c;
},__eF:function(e){var bh=e.getKeyIdentifier();
if((bh==H)||(bh==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Il){return;
}if(!qx.dom.Hierarchy.contains(this.__Il,e.getTarget())){return;
}if(bh==d&&this.__Im.value!=k){this.execute();
this.__Im.value=k;
}if(bh==i||bh==E){this.__Io+=bh==i?-1:1;
this.__Io=Math.min(Math.max(0,this.__Io),this.__CQ.length);
var bg=this.__CQ[this.__Io];
this.__Im.value=bg||k;
this.__Im.select();
}}},defer:function(bi){qx.event.Registration.addListener(document.documentElement,g,bi.__eF,bi);
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
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="qx.debug",B="user",A="directory",z="loose",y="relative",x="queryKey",w="qx.util.Uri",v="",u="path",t="authority",s='">0</a>',q="&",r="port",n='<a href="',p="userInfo",l="?";
qx.Class.define(w,{statics:{parseUri:function(C,D){var E={key:[e,b,t,p,B,d,c,r,y,u,A,k,f,h],q:{name:x,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=E,m=E.parser[D?j:z].exec(C),F={},i=14;

while(i--){F[o.key[i]]=m[i]||v;
}F[o.q.name]={};
F[o.key[12]].replace(o.q.parser,function(G,H,I){if(H){F[o.q.name][H]=I;
}});
return F;
},appendParamsToUrl:function(J,K){if(K===undefined){return J;
}
if(qx.core.Environment.get(a)){if(!(qx.lang.Type.isString(K)||qx.lang.Type.isObject(K))){throw new Error("params must be either string or object");
}}
if(qx.lang.Type.isObject(K)){K=qx.lang.Object.toUriParameter(K);
}
if(!K){return J;
}return J+=(/\?/).test(J)?q+K:l+K;
},getAbsolute:function(L){var M=document.createElement(g);
M.innerHTML=n+L+s;
return M.firstChild.href;
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


qx.$$loader.init();

