if(!window.qxsettings)qxsettings={};
if(qxsettings["qx.resourceUri"]==undefined)qxsettings["qx.resourceUri"]="../resource/qx";
if(qxsettings["testrunner.resourceUri"]==undefined)qxsettings["testrunner.resourceUri"]="../resource/testrunner";
if(qxsettings["qx.theme"]==undefined)qxsettings["qx.theme"]="qx.theme.ClassicRoyale";
if(qxsettings["qx.minLogLevel"]==undefined)qxsettings["qx.minLogLevel"]=200;
if(qxsettings["qx.logAppender"]==undefined)qxsettings["qx.logAppender"]="qx.log.appender.Native";
if(qxsettings["qx.application"]==undefined)qxsettings["qx.application"]="testrunner.TestLoader";
if(qxsettings["qx.version"]==undefined)qxsettings["qx.version"]="0.7.2 (r10074) [release_0_7_2]";
if(qxsettings["qx.isSource"]==undefined)qxsettings["qx.isSource"]=false;
if(!window.qxvariants)qxvariants={};
qxvariants["qx.deprecationWarnings"]="off";
qxvariants["qx.debug"]="off";
qxvariants["qx.compatibility"]="on";
qxvariants["qx.aspects"]="off";



/* ID: qx.core.Bootstrap */
qx={Class:{createNamespace:function(name,
object){var splits=name.split(".");
var parent=window;
var part=splits[0];
for(var i=0,
len=splits.length-1;i<len;i++,
part=splits[i]){if(!parent[part]){parent=parent[part]={};
}else{parent=parent[part];
}}parent[part]=object;
return part;
},
define:function(name,
config){if(!config){var config={statics:{}};
}this.createNamespace(name,
config.statics);
if(config.defer){config.defer(config.statics);
}qx.core.Bootstrap.__registry[name]=config.statics;
}}};
qx.Class.define("qx.core.Bootstrap",
{statics:{LOADSTART:new Date,
time:function(){return new Date().getTime();
},
since:function(){return this.time()-this.LOADSTART;
},
__registry:{}}});




/* ID: qx.lang.Core */
qx.Class.define("qx.lang.Core");
if(!Error.prototype.toString||Error.prototype.toString()=="[object Error]"){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(searchElement,
fromIndex){if(fromIndex==null){fromIndex=0;
}else if(fromIndex<0){fromIndex=Math.max(0,
this.length+fromIndex);
}
for(var i=fromIndex;i<this.length;i++){if(this[i]===searchElement){return i;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(searchElement,
fromIndex){if(fromIndex==null){fromIndex=this.length-1;
}else if(fromIndex<0){fromIndex=Math.max(0,
this.length+fromIndex);
}
for(var i=fromIndex;i>=0;i--){if(this[i]===searchElement){return i;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function(callback,
obj){var l=this.length;
for(var i=0;i<l;i++){callback.call(obj,
this[i],
i,
this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function(callback,
obj){var l=this.length;
var res=[];
for(var i=0;i<l;i++){if(callback.call(obj,
this[i],
i,
this)){res.push(this[i]);
}}return res;
};
}
if(!Array.prototype.map){Array.prototype.map=function(callback,
obj){var l=this.length;
var res=[];
for(var i=0;i<l;i++){res.push(callback.call(obj,
this[i],
i,
this));
}return res;
};
}
if(!Array.prototype.some){Array.prototype.some=function(callback,
obj){var l=this.length;
for(var i=0;i<l;i++){if(callback.call(obj,
this[i],
i,
this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(callback,
obj){var l=this.length;
for(var i=0;i<l;i++){if(!callback.call(obj,
this[i],
i,
this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return '"'+this.replace(/\\/g,
"\\\\").replace(/\"/g,
"\\\"")+'"';
};
}




/* ID: qx.lang.Generics */
qx.Class.define("qx.lang.Generics",
{statics:{__map:{"Array":["join",
"reverse",
"sort",
"push",
"pop",
"shift",
"unshift",
"splice",
"concat",
"slice",
"indexOf",
"lastIndexOf",
"forEach",
"map",
"filter",
"some",
"every"],
"String":["quote",
"substring",
"toLowerCase",
"toUpperCase",
"charAt",
"charCodeAt",
"indexOf",
"lastIndexOf",
"toLocaleLowerCase",
"toLocaleUpperCase",
"localeCompare",
"match",
"search",
"replace",
"split",
"substr",
"concat",
"slice"]},
__wrap:function(obj,
func){return function(s){return obj.prototype[func].apply(s,
Array.prototype.slice.call(arguments,
1));
};
},
__init:function(){var map=qx.lang.Generics.__map;
for(var key in map){var obj=window[key];
var arr=map[key];
for(var i=0,
l=arr.length;i<l;i++){var func=arr[i];
if(!obj[func]){obj[func]=qx.lang.Generics.__wrap(obj,
func);
}}}}},
defer:function(statics){statics.__init();
}});




/* ID: qx.core.Log */
qx.Class.define("qx.core.Log",
{statics:{log:function(varargs){this._write(arguments,
"");
},
debug:function(varargs){this._write(arguments,
"debug");
},
info:function(varargs){this._write(arguments,
"info");
},
warn:function(varargs){this._write(arguments,
"warning");
},
error:function(varargs){this._write(arguments,
"error");
},
clear:function(){if(this._frame){this._frame.innerHTML="";
}},
open:function(){if(!this._frame){this._create();
}this._frame.style.display="";
},
close:function(){if(!this._frame){this._create();
}this._frame.style.display="none";
},
emu:true,
_unsupported:function(){this.warn("This method is not supported.");
},
_map:{debug:"blue",
info:"green",
warning:"orange",
error:"red"},
_cache:[],
_write:function(args,
level){if(!this._frame){this._create();
}
if(!this._frame){this._cache.push(arguments);
return;
}var important=level=="warning"||level=="error";
var node=document.createElement("div");
var sty=node.style;
sty.borderBottom="1px solid #CCC";
sty.padding="1px 8px";
sty.margin="1px 0";
sty.color=this._map[level]||"blue";
if(important){sty.background="#FFFFE0";
}
for(var i=0,
l=args.length;i<l;i++){node.appendChild(document.createTextNode(args[i]));
if(i<l-1){node.appendChild(document.createTextNode(", "));
}}this._frame.appendChild(node);
this._frame.scrollTop=this._frame.scrollHeight;
if(important){this.open();
}},
_create:function(){if(!document.body){return;
}var frame=this._frame=document.createElement("div");
frame.className="console";
var sty=frame.style;
sty.zIndex="2147483647";
sty.background="white";
sty.position="absolute";
sty.display="none";
sty.width="100%";
sty.height="200px";
sty.left=sty.right=sty.bottom=0;
sty.borderTop="3px solid #134275";
sty.overflow="auto";
sty.font='10px normal Consolas, "Bitstream Vera Sans Mono", "Courier New", monospace';
sty.color="blue";
document.body.appendChild(frame);
if(this._cache){for(var i=0,
c=this._cache,
l=c.length;i<l;i++){this._write(c[i][0],
c[i][1]);
}this._cache=null;
}}},
defer:function(statics,
members,
properties){statics.assert=statics.dir=statics.dirxml=statics.group=statics.groupEnd=statics.time=statics.timeEnd=statics.count=statics.trance=statics.profile=statics.profileEnd=statics._unsupported;
if(!window.console){window.console=statics;
}else if(window.console&&(!console.debug||!console.trace||!console.group)){window.console=statics;
}}});




/* ID: qx.core.Setting */
qx.Class.define("qx.core.Setting",
{statics:{__settings:{},
define:function(key,
defaultValue){if(defaultValue===undefined){throw new Error('Default value of setting "'+key+'" must be defined!');
}
if(!this.__settings[key]){this.__settings[key]={};
}else if(this.__settings[key].defaultValue!==undefined){throw new Error('Setting "'+key+'" is already defined!');
}this.__settings[key].defaultValue=defaultValue;
},
get:function(key){var cache=this.__settings[key];
if(cache===undefined){throw new Error('Setting "'+key+'" is not defined.');
}
if(cache.defaultValue===undefined){throw new Error('Setting "'+key+'" is not supported by API.');
}
if(cache.value!==undefined){return cache.value;
}return cache.defaultValue;
},
__init:function(){if(window.qxsettings){for(var key in qxsettings){if((key.split(".")).length!==2){throw new Error('Malformed settings key "'+key+'". Must be following the schema "namespace.key".');
}
if(!this.__settings[key]){this.__settings[key]={};
}this.__settings[key].value=qxsettings[key];
}window.qxsettings=undefined;
try{delete window.qxsettings;
}catch(ex){}this.__loadUrlSettings();
}},
__loadUrlSettings:function(){if(this.get("qx.allowUrlSettings")!=true){return;
}var urlSettings=document.location.search.slice(1).split("&");
for(var i=0;i<urlSettings.length;i++){var setting=urlSettings[i].split(":");
if(setting.length!=3||setting[0]!="qxsetting"){continue;
}var key=setting[1];
if(!this.__settings[key]){this.__settings[key]={};
}this.__settings[key].value=decodeURIComponent(setting[2]);
}}},
defer:function(statics){statics.define("qx.allowUrlSettings",
true);
statics.__init();
}});




/* ID: qx.lang.Array */
qx.Class.define("qx.lang.Array",
{statics:{fromArguments:function(args){return Array.prototype.slice.call(args,
0);
},
fromCollection:function(coll){return Array.prototype.slice.call(coll,
0);
},
fromShortHand:function(input){var len=input.length;
if(len>4||len==0){this.error("Invalid number of arguments!");
}var result=qx.lang.Array.copy(input);
switch(len){case 1:result[1]=result[2]=result[3]=result[0];
break;
case 2:result[2]=result[0];
case 3:result[3]=result[1];
}return result;
},
copy:function(arr){return arr.concat();
},
clone:function(arr){return arr.concat();
},
getLast:function(arr){return arr[arr.length-1];
},
getFirst:function(arr){return arr[0];
},
insertAt:function(arr,
obj,
i){arr.splice(i,
0,
obj);
return arr;
},
insertBefore:function(arr,
obj,
obj2){var i=arr.indexOf(obj2);
if(i==-1){arr.push(obj);
}else{arr.splice(i,
0,
obj);
}return arr;
},
insertAfter:function(arr,
obj,
obj2){var i=arr.indexOf(obj2);
if(i==-1||i==(arr.length-1)){arr.push(obj);
}else{arr.splice(i+1,
0,
obj);
}return arr;
},
removeAt:function(arr,
i){return arr.splice(i,
1)[0];
},
removeAll:function(arr){return arr.length=0;
},
append:function(arr,
a){{};
Array.prototype.push.apply(arr,
a);
return arr;
},
remove:function(arr,
obj){var i=arr.indexOf(obj);
if(i!=-1){arr.splice(i,
1);
return obj;
}},
contains:function(arr,
obj){return arr.indexOf(obj)!=-1;
}}});




/* ID: qx.core.Variant */
qx.Class.define("qx.core.Variant",
{statics:{__variants:{},
__cache:{},
compilerIsSet:function(){return true;
},
define:function(key,
allowedValues,
defaultValue){{};
if(!this.__variants[key]){this.__variants[key]={};
}else{}this.__variants[key].allowedValues=allowedValues;
this.__variants[key].defaultValue=defaultValue;
},
get:function(key){var data=this.__variants[key];
{};
if(data.value!==undefined){return data.value;
}return data.defaultValue;
},
__init:function(){if(window.qxvariants){for(var key in qxvariants){{};
if(!this.__variants[key]){this.__variants[key]={};
}this.__variants[key].value=qxvariants[key];
}window.qxvariants=undefined;
try{delete window.qxvariants;
}catch(ex){}this.__loadUrlVariants(this.__variants);
}},
__loadUrlVariants:function(){if(qx.core.Setting.get("qx.allowUrlSettings")!=true){return;
}var urlVariants=document.location.search.slice(1).split("&");
for(var i=0;i<urlVariants.length;i++){var variant=urlVariants[i].split(":");
if(variant.length!=3||variant[0]!="qxvariant"){continue;
}var key=variant[1];
if(!this.__variants[key]){this.__variants[key]={};
}this.__variants[key].value=decodeURIComponent(variant[2]);
}},
select:function(key,
variantFunctionMap){{};
for(var variant in variantFunctionMap){if(this.isSet(key,
variant)){return variantFunctionMap[variant];
}}
if(variantFunctionMap["default"]!==undefined){return variantFunctionMap["default"];
}{};
},
isSet:function(key,
variants){var access=key+"$"+variants;
if(this.__cache[access]!==undefined){return this.__cache[access];
}var retval=false;
if(variants.indexOf("|")<0){retval=this.get(key)===variants;
}else{var keyParts=variants.split("|");
for(var i=0,
l=keyParts.length;i<l;i++){if(this.get(key)===keyParts[i]){retval=true;
break;
}}}this.__cache[access]=retval;
return retval;
},
__isValidArray:function(v){return typeof v==="object"&&v!==null&&v instanceof Array;
},
__isValidObject:function(v){return typeof v==="object"&&v!==null&&!(v instanceof Array);
},
__arrayContains:function(arr,
obj){for(var i=0,
l=arr.length;i<l;i++){if(arr[i]==obj){return true;
}}return false;
}},
defer:function(statics){statics.define("qx.debug",
["on",
"off"],
"on");
statics.define("qx.compatibility",
["on",
"off"],
"on");
statics.define("qx.eventMonitorNoListeners",
["on",
"off"],
"off");
statics.define("qx.aspects",
["on",
"off"],
"off");
statics.define("qx.deprecationWarnings",
["on",
"off"],
"on");
statics.__init();
}});




/* ID: qx.core.Client */
qx.Class.define("qx.core.Client",
{statics:{__init:function(){var vRunsLocally=window.location.protocol==="file:";
var vBrowserUserAgent=navigator.userAgent;
var vBrowserVendor=navigator.vendor;
var vBrowserProduct=navigator.product;
var vBrowserPlatform=navigator.platform;
var vBrowserModeHta=false;
var vBrowser;
var vEngine=null;
var vEngineVersion=null;
var vEngineVersionMajor=0;
var vEngineVersionMinor=0;
var vEngineVersionRevision=0;
var vEngineVersionBuild=0;
var vEngineEmulation=null;
var vEngineNightly=null;
var vVersionHelper;
if(window.opera&&/Opera[\s\/]([0-9\.]*)/.test(vBrowserUserAgent)){vEngine="opera";
vEngineVersion=RegExp.$1;
vBrowser="opera";
vEngineVersion=vEngineVersion.substring(0,
3)+"."+vEngineVersion.substring(3);
vEngineEmulation=vBrowserUserAgent.indexOf("MSIE")!==-1?"mshtml":vBrowserUserAgent.indexOf("Mozilla")!==-1?"gecko":null;
}else if(typeof vBrowserVendor==="string"&&vBrowserVendor==="KDE"&&/KHTML\/([0-9-\.]*)/.test(vBrowserUserAgent)){vEngine="khtml";
vBrowser="konqueror";
vEngineVersion=RegExp.$1;
}else if(vBrowserUserAgent.indexOf("AppleWebKit")!=-1&&/AppleWebKit\/([^ ]+)/.test(vBrowserUserAgent)){vEngine="webkit";
vEngineVersion=RegExp.$1;
vEngineNightly=vEngineVersion.indexOf("+")!=-1;
var invalidCharacter=RegExp("[^\\.0-9]").exec(vEngineVersion);
if(invalidCharacter){vEngineVersion=vEngineVersion.slice(0,
invalidCharacter.index);
}
if(vBrowserUserAgent.indexOf("Safari")!=-1){vBrowser="safari";
}else if(vBrowserUserAgent.indexOf("OmniWeb")!=-1){vBrowser="omniweb";
}else if(vBrowserUserAgent.indexOf("Shiira")!=-1){vBrowser="shiira";
}else if(vBrowserUserAgent.indexOf("NetNewsWire")!=-1){vBrowser="netnewswire";
}else if(vBrowserUserAgent.indexOf("RealPlayer")!=-1){vBrowser="realplayer";
}else{vBrowser="other webkit";
}
if(vEngineNightly){vBrowser+=" (nightly)";
}}else if(window.controllers&&typeof vBrowserProduct==="string"&&vBrowserProduct==="Gecko"&&/rv\:([^\);]+)(\)|;)/.test(vBrowserUserAgent)){vEngine="gecko";
vEngineVersion=RegExp.$1;
if(vBrowserUserAgent.indexOf("Firefox")!=-1){vBrowser="firefox";
}else if(vBrowserUserAgent.indexOf("Camino")!=-1){vBrowser="camino";
}else if(vBrowserUserAgent.indexOf("Galeon")!=-1){vBrowser="galeon";
}else{vBrowser="other gecko";
}}else if(/MSIE\s+([^\);]+)(\)|;)/.test(vBrowserUserAgent)){vEngine="mshtml";
vEngineVersion=RegExp.$1;
vBrowser="explorer";
vBrowserModeHta=!window.external;
}
if(vEngineVersion){vVersionHelper=vEngineVersion.split(".");
vEngineVersionMajor=vVersionHelper[0]||0;
vEngineVersionMinor=vVersionHelper[1]||0;
vEngineVersionRevision=vVersionHelper[2]||0;
vEngineVersionBuild=vVersionHelper[3]||0;
}var vEngineBoxSizingAttr=[];
switch(vEngine){case "gecko":vEngineBoxSizingAttr.push("-moz-box-sizing");
break;
case "khtml":vEngineBoxSizingAttr.push("-khtml-box-sizing");
break;
case "webkit":vEngineBoxSizingAttr.push("-khtml-box-sizing");
vEngineBoxSizingAttr.push("-webkit-box-sizing");
break;
case "mshtml":break;
default:break;
}vEngineBoxSizingAttr.push("box-sizing");
var vEngineQuirksMode=document.compatMode!=="CSS1Compat";
var vDefaultLocale="en";
var vBrowserLocale=(vEngine=="mshtml"?navigator.userLanguage:navigator.language).toLowerCase();
var vBrowserLocaleVariant=null;
var vBrowserLocaleVariantIndex=vBrowserLocale.indexOf("-");
if(vBrowserLocaleVariantIndex!=-1){vBrowserLocaleVariant=vBrowserLocale.substr(vBrowserLocaleVariantIndex+1);
vBrowserLocale=vBrowserLocale.substr(0,
vBrowserLocaleVariantIndex);
}var vPlatform="none";
var vPlatformWindows=false;
var vPlatformMacintosh=false;
var vPlatformUnix=false;
var vPlatformOther=false;
if(vBrowserPlatform.indexOf("Windows")!=-1||vBrowserPlatform.indexOf("Win32")!=-1||vBrowserPlatform.indexOf("Win64")!=-1){vPlatformWindows=true;
vPlatform="win";
}else if(vBrowserPlatform.indexOf("Macintosh")!=-1||vBrowserPlatform.indexOf("MacPPC")!=-1||vBrowserPlatform.indexOf("MacIntel")!=-1){vPlatformMacintosh=true;
vPlatform="mac";
}else if(vBrowserPlatform.indexOf("X11")!=-1||vBrowserPlatform.indexOf("Linux")!=-1||vBrowserPlatform.indexOf("BSD")!=-1){vPlatformUnix=true;
vPlatform="unix";
}else{vPlatformOther=true;
vPlatform="other";
}var vGfxVml=false;
var vGfxSvg=false;
var vGfxSvgBuiltin=false;
var vGfxSvgPlugin=false;
if(vEngine=="mshtml"){vGfxVml=true;
}if(document.implementation&&document.implementation.hasFeature){if(document.implementation.hasFeature("org.w3c.dom.svg",
"1.0")){vGfxSvg=vGfxSvgBuiltin=true;
}}this._runsLocally=vRunsLocally;
this._engineName=vEngine;
this._engineNameMshtml=vEngine==="mshtml";
this._engineNameGecko=vEngine==="gecko";
this._engineNameOpera=vEngine==="opera";
this._engineNameKhtml=vEngine==="khtml";
this._engineNameWebkit=vEngine==="webkit";
this._engineVersion=parseFloat(vEngineVersion);
this._engineVersionMajor=parseInt(vEngineVersionMajor);
this._engineVersionMinor=parseInt(vEngineVersionMinor);
this._engineVersionRevision=parseInt(vEngineVersionRevision);
this._engineVersionBuild=parseInt(vEngineVersionBuild);
this._engineQuirksMode=vEngineQuirksMode;
this._engineBoxSizingAttributes=vEngineBoxSizingAttr;
this._engineEmulation=vEngineEmulation;
this._browserName=vBrowser;
this._defaultLocale=vDefaultLocale;
this._browserPlatform=vPlatform;
this._browserPlatformWindows=vPlatformWindows;
this._browserPlatformMacintosh=vPlatformMacintosh;
this._browserPlatformUnix=vPlatformUnix;
this._browserPlatformOther=vPlatformOther;
this._browserModeHta=vBrowserModeHta;
this._browserLocale=vBrowserLocale;
this._browserLocaleVariant=vBrowserLocaleVariant;
this._gfxVml=vGfxVml;
this._gfxSvg=vGfxSvg;
this._gfxSvgBuiltin=vGfxSvgBuiltin;
this._gfxSvgPlugin=vGfxSvgPlugin;
this._fireBugActive=(window.console&&console.log&&console.debug&&console.assert);
this._supportsTextContent=(document.documentElement.textContent!==undefined);
this._supportsInnerText=(document.documentElement.innerText!==undefined);
this._supportsXPath=!!document.evaluate;
this._supportsElementExtensions=!!window.HTMLElement;
},
getRunsLocally:function(){return this._runsLocally;
},
getEngine:function(){return this._engineName;
},
getBrowser:function(){return this._browserName;
},
getVersion:function(){return this._engineVersion;
},
getMajor:function(){return this._engineVersionMajor;
},
getMinor:function(){return this._engineVersionMinor;
},
getRevision:function(){return this._engineVersionRevision;
},
getBuild:function(){return this._engineVersionBuild;
},
getEmulation:function(){return this._engineEmulation;
},
isMshtml:function(){return this._engineNameMshtml;
},
isGecko:function(){return this._engineNameGecko;
},
isOpera:function(){return this._engineNameOpera;
},
isKhtml:function(){return this._engineNameKhtml;
},
isWebkit:function(){return this._engineNameWebkit;
},
isSafari2:function(){return this._engineNameWebkit&&(this._engineVersion<420);
},
isInQuirksMode:function(){return this._engineQuirksMode;
},
getLocale:function(){return this._browserLocale;
},
getLocaleVariant:function(){return this._browserLocaleVariant;
},
getDefaultLocale:function(){return this._defaultLocale;
},
usesDefaultLocale:function(){return this._browserLocale===this._defaultLocale;
},
getEngineBoxSizingAttributes:function(){return this._engineBoxSizingAttributes;
},
getPlatform:function(){return this._browserPlatform;
},
runsOnWindows:function(){return this._browserPlatformWindows;
},
runsOnMacintosh:function(){return this._browserPlatformMacintosh;
},
runsOnUnix:function(){return this._browserPlatformUnix;
},
supportsVml:function(){return this._gfxVml;
},
supportsSvg:function(){return this._gfxSvg;
},
usesSvgBuiltin:function(){return this._gfxSvgBuiltin;
},
usesSvgPlugin:function(){return this._gfxSvgPlugin;
},
isFireBugActive:function(){return this._fireBugActive;
},
supportsTextContent:function(){return this._supportsTextContent;
},
supportsInnerText:function(){return this._supportsInnerText;
},
getInstance:function(){return this;
}},
defer:function(statics,
members,
properties){statics.__init();
qx.core.Variant.define("qx.client",
["gecko",
"mshtml",
"opera",
"webkit",
"khtml"],
qx.core.Client.getInstance().getEngine());
}});




/* ID: qx.lang.Object */
qx.Class.define("qx.lang.Object",
{statics:{isEmpty:function(map){for(var key in map){return false;
}return true;
},
hasMinLength:function(map,
length){var i=0;
for(var key in map){if((++i)>=length){return true;
}}return false;
},
getLength:function(map){var i=0;
for(var key in map){i++;
}return i;
},
_shadowedKeys:["isPrototypeOf",
"hasOwnProperty",
"toLocaleString",
"toString",
"valueOf"],
getKeys:qx.core.Variant.select("qx.client",
{"mshtml":function(map){var arr=[];
for(var key in map){arr.push(key);
}for(var i=0,
a=this._shadowedKeys,
l=a.length;i<l;i++){if(map.hasOwnProperty(a[i])){arr.push(a[i]);
}}return arr;
},
"default":function(map){var arr=[];
for(var key in map){arr.push(key);
}return arr;
}}),
getKeysAsString:function(map){var keys=qx.lang.Object.getKeys(map);
if(keys.length==0){return "";
}return '"'+keys.join('\", "')+'"';
},
getValues:function(map){var arr=[];
for(var key in map){arr.push(map[key]);
}return arr;
},
mergeWith:function(target,
source,
overwrite){if(overwrite===undefined){overwrite=true;
}
for(var key in source){if(overwrite||target[key]===undefined){target[key]=source[key];
}}return target;
},
carefullyMergeWith:function(target,
source){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return qx.lang.Object.mergeWith(target,
source,
false);
},
merge:function(target,
varargs){var len=arguments.length;
for(var i=1;i<len;i++){qx.lang.Object.mergeWith(target,
arguments[i]);
}return target;
},
copy:function(source){var clone={};
for(var key in source){clone[key]=source[key];
}return clone;
},
invert:function(map){var result={};
for(var key in map){result[map[key].toString()]=key;
}return result;
},
getKeyFromValue:function(obj,
value){for(var key in obj){if(obj[key]===value){return key;
}}return null;
},
select:function(key,
map){return map[key];
},
fromArray:function(array){var obj={};
for(var i=0,
l=array.length;i<l;i++){{};
obj[array[i].toString()]=true;
}return obj;
}}});




/* ID: qx.core.Aspect */
qx.Class.define("qx.core.Aspect",
{statics:{__registry:[],
wrap:function(fullName,
fcn,
type){if(!qx.core.Setting.get("qx.enableAspect")){return fcn;
}var before=[];
var after=[];
for(var i=0;i<this.__registry.length;i++){var aspect=this.__registry[i];
if(fullName.match(aspect.re)&&(type==aspect.type||aspect.type=="*")){var pos=aspect.pos;
if(pos=="before"){before.push(aspect.fcn);
}else{after.push(aspect.fcn);
}}}
if(before.length==0&&after.length==0){return fcn;
}var wrapper=function(){for(var i=0;i<before.length;i++){before[i].call(this,
fullName,
fcn,
type,
arguments);
}var ret=fcn.apply(this,
arguments);
for(var i=0;i<after.length;i++){after[i].call(this,
fullName,
fcn,
type,
arguments,
ret);
}return ret;
};
if(type!="static"){wrapper.self=fcn.self;
wrapper.base=fcn.base;
}fcn.wrapper=wrapper;
return wrapper;
},
addAdvice:function(position,
type,
nameRegExp,
fcn){if(position!="before"&&position!="after"){throw new Error("Unknown position: '"+position+"'");
}this.__registry.push({pos:position,
type:type,
re:nameRegExp,
fcn:fcn});
}},
defer:function(){qx.core.Setting.define("qx.enableAspect",
false);
}});




/* ID: qx.Class */
qx.Class.define("qx.Class",
{statics:{define:function(name,
config){if(!config){var config={};
}if(config.include&&!(config.include instanceof Array)){config.include=[config.include];
}if(config.implement&&!(config.implement instanceof Array)){config.implement=[config.implement];
}if(!config.hasOwnProperty("extend")&&!config.type){config.type="static";
}{};
var clazz=this.__createClass(name,
config.type,
config.extend,
config.statics,
config.construct,
config.destruct);
if(config.extend){var superclass=config.extend;
if(config.properties){this.__addProperties(clazz,
config.properties,
true);
}if(config.members){this.__addMembers(clazz,
config.members,
true,
true);
}if(config.events){this.__addEvents(clazz,
config.events,
true);
}if(config.include){for(var i=0,
l=config.include.length;i<l;i++){this.__addMixin(clazz,
config.include[i],
false);
}}}if(config.settings){for(var key in config.settings){qx.core.Setting.define(key,
config.settings[key]);
}}if(config.variants){for(var key in config.variants){qx.core.Variant.define(key,
config.variants[key].allowedValues,
config.variants[key].defaultValue);
}}if(config.defer){config.defer.self=clazz;
config.defer(clazz,
clazz.prototype,
{add:function(name,
config){var properties={};
properties[name]=config;
qx.Class.__addProperties(clazz,
properties,
true);
}});
}if(config.implement){for(var i=0,
l=config.implement.length;i<l;i++){this.__addInterface(clazz,
config.implement[i]);
}}},
createNamespace:function(name,
object){var splits=name.split(".");
var parent=window;
var part=splits[0];
for(var i=0,
l=splits.length-1;i<l;i++,
part=splits[i]){if(!parent[part]){parent=parent[part]={};
}else{parent=parent[part];
}}{};
parent[part]=object;
return part;
},
isDefined:function(name){return this.getByName(name)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.__registry);
},
getByName:function(name){return this.__registry[name];
},
include:function(clazz,
mixin){{};
qx.Class.__addMixin(clazz,
mixin,
false);
},
patch:function(clazz,
mixin){{};
qx.Class.__addMixin(clazz,
mixin,
true);
},
isSubClassOf:function(clazz,
superClass){if(!clazz){return false;
}
if(clazz==superClass){return true;
}
if(clazz.prototype instanceof superClass){return true;
}return false;
},
getPropertyDefinition:function(clazz,
name){while(clazz){if(clazz.$$properties&&clazz.$$properties[name]){return clazz.$$properties[name];
}clazz=clazz.superclass;
}return null;
},
getByProperty:function(clazz,
name){while(clazz){if(clazz.$$properties&&clazz.$$properties[name]){return clazz;
}clazz=clazz.superclass;
}return null;
},
hasProperty:function(clazz,
name){return !!this.getPropertyDefinition(clazz,
name);
},
getEventType:function(clazz,
name){var clazz=clazz.constructor;
while(clazz.superclass){if(clazz.$$events&&clazz.$$events[name]!==undefined){return clazz.$$events[name];
}clazz=clazz.superclass;
}return null;
},
supportsEvent:function(clazz,
name){return !!this.getEventType(clazz,
name);
},
hasOwnMixin:function(clazz,
mixin){return clazz.$$includes&&clazz.$$includes.indexOf(mixin)!==-1;
},
getByMixin:function(clazz,
mixin){var list,
i,
l;
while(clazz){if(clazz.$$includes){list=clazz.$$flatIncludes;
for(i=0,
l=list.length;i<l;i++){if(list[i]===mixin){return clazz;
}}}clazz=clazz.superclass;
}return null;
},
getMixins:function(clazz){var list=[];
while(clazz){if(clazz.$$includes){list.push.apply(list,
clazz.$$flatIncludes);
}clazz=clazz.superclass;
}return list;
},
hasMixin:function(clazz,
mixin){return !!this.getByMixin(clazz,
mixin);
},
hasOwnInterface:function(clazz,
iface){return clazz.$$implements&&clazz.$$implements.indexOf(iface)!==-1;
},
getByInterface:function(clazz,
iface){var list,
i,
l;
while(clazz){if(clazz.$$implements){list=clazz.$$flatImplements;
for(i=0,
l=list.length;i<l;i++){if(list[i]===iface){return clazz;
}}}clazz=clazz.superclass;
}return null;
},
getInterfaces:function(clazz){var list=[];
while(clazz){if(clazz.$$implements){list.push.apply(list,
clazz.$$flatImplements);
}clazz=clazz.superclass;
}return list;
},
hasInterface:function(clazz,
iface){return !!this.getByInterface(clazz,
iface);
},
implementsInterface:function(clazz,
iface){if(this.hasInterface(clazz,
iface)){return true;
}
try{qx.Interface.assert(clazz,
iface,
false);
return true;
}catch(ex){}return false;
},
getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},
genericToString:function(){return "[Class "+this.classname+"]";
},
__registry:qx.core.Bootstrap.__registry,
__allowedKeys:null,
__staticAllowedKeys:null,
__validateConfig:function(){},
__createClass:function(name,
type,
extend,
statics,
construct,
destruct){var clazz;
if(!extend&&true){clazz=statics||{};
}else{clazz={};
if(extend){if(!construct){construct=this.__createDefaultConstructor();
}clazz=this.__wrapConstructor(construct,
name,
type);
}if(statics){var key;
for(var i=0,
a=qx.lang.Object.getKeys(statics),
l=a.length;i<l;i++){key=a[i];
{clazz[key]=statics[key];
};
var staticValue;
}}}var basename=this.createNamespace(name,
clazz,
false);
clazz.name=clazz.classname=name;
clazz.basename=basename;
if(!clazz.hasOwnProperty("toString")){clazz.toString=this.genericToString;
}
if(extend){var superproto=extend.prototype;
var helper=this.__createEmptyFunction();
helper.prototype=superproto;
var proto=new helper;
clazz.prototype=proto;
proto.name=proto.classname=name;
proto.basename=basename;
construct.base=clazz.superclass=extend;
construct.self=clazz.constructor=proto.constructor=clazz;
if(destruct){{};
clazz.$$destructor=destruct;
}}{qx.Clazz=clazz;
qx.Proto=proto||null;
qx.Super=extend||null;
};
this.__registry[name]=clazz;
return clazz;
},
__addEvents:function(clazz,
events,
patch){var key,
key;
if(clazz.$$events){for(var key in events){clazz.$$events[key]=events[key];
}}else{clazz.$$events=events;
}},
__addProperties:function(clazz,
properties,
patch){var config;
if(patch===undefined){patch=false;
}var attach=!!clazz.$$propertiesAttached;
for(var name in properties){config=properties[name];
{};
config.name=name;
if(!config.refine){if(clazz.$$properties===undefined){clazz.$$properties={};
}clazz.$$properties[name]=config;
}if(config.init!==undefined){clazz.prototype["__init$"+name]=config.init;
}if(config.event!==undefined){var event={};
event[config.event]="qx.event.type.ChangeEvent";
this.__addEvents(clazz,
event,
patch);
}if(config.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(attach){qx.core.Property.attachMethods(clazz,
name,
config);
}if(config._fast){qx.core.LegacyProperty.addFastProperty(config,
clazz.prototype);
}else if(config._cached){qx.core.LegacyProperty.addCachedProperty(config,
clazz.prototype);
}else if(config._legacy){qx.core.LegacyProperty.addProperty(config,
clazz.prototype);
}}},
__validateProperty:null,
__addMembers:function(clazz,
members,
patch,
base){var superproto=clazz.superclass.prototype;
var proto=clazz.prototype;
var key,
member;
for(var i=0,
a=qx.lang.Object.getKeys(members),
l=a.length;i<l;i++){key=a[i];
member=members[key];
{};
if(base!==false&&member instanceof Function){if(superproto[key]){member.base=superproto[key];
}member.self=clazz;
{};
}proto[key]=member;
}},
__addInterface:function(clazz,
iface){{};
var list=qx.Interface.flatten([iface]);
if(clazz.$$implements){clazz.$$implements.push(iface);
clazz.$$flatImplements.push.apply(clazz.$$flatImplements,
list);
}else{clazz.$$implements=[iface];
clazz.$$flatImplements=list;
}},
__addMixin:function(clazz,
mixin,
patch){{};
var list=qx.Mixin.flatten([mixin]);
var entry;
for(var i=0,
l=list.length;i<l;i++){entry=list[i];
if(entry.$$events){this.__addEvents(clazz,
entry.$$events,
patch);
}if(entry.$$properties){this.__addProperties(clazz,
entry.$$properties,
patch);
}if(entry.$$members){this.__addMembers(clazz,
entry.$$members,
patch,
false);
}}if(clazz.$$includes){clazz.$$includes.push(mixin);
clazz.$$flatIncludes.push.apply(clazz.$$flatIncludes,
list);
}else{clazz.$$includes=[mixin];
clazz.$$flatIncludes=list;
}},
__createDefaultConstructor:function(){function defaultConstructor(){arguments.callee.base.apply(this,
arguments);
}return defaultConstructor;
},
__createEmptyFunction:function(){return function(){};
},
__wrapConstructor:function(construct,
name,
type){var code=[];
code.push('var clazz=arguments.callee.constructor;');
{};
code.push('if(!clazz.$$propertiesAttached)qx.core.Property.attach(clazz);');
code.push('var retval=clazz.$$original.apply(this,arguments);');
code.push('if(clazz.$$includes){var mixins=clazz.$$flatIncludes;');
code.push('for(var i=0,l=mixins.length;i<l;i++){');
code.push('if(mixins[i].$$constructor){mixins[i].$$constructor.apply(this,arguments);}}}');
code.push('if(this.classname===',
name,
'.classname)this.$$initialized=true;');
code.push('return retval;');
var wrapper=new Function(code.join(""));
var aspectWrapper;
if(type==="singleton"){wrapper.getInstance=this.getInstance;
}wrapper.$$original=construct;
construct.wrapper=wrapper;
return wrapper;
}},
defer:function(statics){var key;
}});




/* ID: qx.Mixin */
qx.Class.define("qx.Mixin",
{statics:{define:function(name,
config){if(config){if(config.include&&!(config.include instanceof Array)){config.include=[config.include];
}{};
var mixin=config.statics?config.statics:{};
for(var key in mixin){mixin[key].mixin=mixin;
}if(config.construct){mixin.$$constructor=config.construct;
}
if(config.include){mixin.$$includes=config.include;
}
if(config.properties){mixin.$$properties=config.properties;
}
if(config.members){mixin.$$members=config.members;
}
for(var key in mixin.$$members){mixin.$$members[key].mixin=mixin;
}
if(config.events){mixin.$$events=config.events;
}
if(config.destruct){mixin.$$destructor=config.destruct;
}}else{var mixin={};
}mixin.$$type="Mixin";
mixin.name=name;
mixin.toString=this.genericToString;
mixin.basename=qx.Class.createNamespace(name,
mixin);
this.__registry[name]=mixin;
return mixin;
},
checkCompatibility:function(mixins){var list=this.flatten(mixins);
var len=list.length;
if(len<2){return true;
}var properties={};
var members={};
var events={};
var mixin;
for(var i=0;i<len;i++){mixin=list[i];
for(var key in mixin.events){if(events[key]){throw new Error('Conflict between mixin "'+mixin.name+'" and "'+events[key]+'" in member "'+key+'"!');
}events[key]=mixin.name;
}
for(var key in mixin.properties){if(properties[key]){throw new Error('Conflict between mixin "'+mixin.name+'" and "'+properties[key]+'" in property "'+key+'"!');
}properties[key]=mixin.name;
}
for(var key in mixin.members){if(members[key]){throw new Error('Conflict between mixin "'+mixin.name+'" and "'+members[key]+'" in member "'+key+'"!');
}members[key]=mixin.name;
}}return true;
},
isCompatible:function(mixin,
clazz){var list=qx.Class.getMixins(clazz);
list.push(mixin);
return qx.Mixin.checkCompatibility(list);
},
getByName:function(name){return this.__registry[name];
},
isDefined:function(name){return this.getByName(name)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.__registry);
},
flatten:function(mixins){if(!mixins){return [];
}var list=mixins.concat();
for(var i=0,
l=mixins.length;i<l;i++){if(mixins[i].$$includes){list.push.apply(list,
this.flatten(mixins[i].$$includes));
}}return list;
},
genericToString:function(){return "[Mixin "+this.name+"]";
},
__registry:{},
__allowedKeys:null,
__validateConfig:function(){}}});




/* ID: qx.Interface */
qx.Class.define("qx.Interface",
{statics:{define:function(name,
config){if(config){if(config.extend&&!(config.extend instanceof Array)){config.extend=[config.extend];
}{};
var iface=config.statics?config.statics:{};
if(config.extend){iface.$$extends=config.extend;
}
if(config.properties){iface.$$properties=config.properties;
}
if(config.members){iface.$$members=config.members;
}
if(config.events){iface.$$events=config.events;
}}else{var iface={};
}iface.$$type="Interface";
iface.name=name;
iface.toString=this.genericToString;
iface.basename=qx.Class.createNamespace(name,
iface);
qx.Interface.__registry[name]=iface;
return iface;
},
getByName:function(name){return this.__registry[name];
},
isDefined:function(name){return this.getByName(name)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.__registry);
},
flatten:function(ifaces){if(!ifaces){return [];
}var list=ifaces.concat();
for(var i=0,
l=ifaces.length;i<l;i++){if(ifaces[i].$$extends){list.push.apply(list,
this.flatten(ifaces[i].$$extends));
}}return list;
},
assert:function(clazz,
iface,
wrap){var members=iface.$$members;
if(members){var proto=clazz.prototype;
for(var key in members){if(typeof members[key]==="function"){if(typeof proto[key]!=="function"){throw new Error('Implementation of method "'+key+'" is missing in class "'+clazz.classname+'" required by interface "'+iface.name+'"');
}if(wrap===true&&!qx.Class.hasInterface(clazz,
iface)){proto[key]=this.__wrapInterfaceMember(iface,
proto[key],
key,
members[key]);
}}else{if(typeof proto[key]===undefined){if(typeof proto[key]!=="function"){throw new Error('Implementation of member "'+key+'" is missing in class "'+clazz.classname+'" required by interface "'+iface.name+'"');
}}}}}if(iface.$$properties){for(var key in iface.$$properties){if(!qx.Class.hasProperty(clazz,
key)){throw new Error('The property "'+key+'" is not supported by Class "'+clazz.classname+'"!');
}}}if(iface.$$events){for(var key in iface.$$events){if(!qx.Class.supportsEvent(clazz,
key)){throw new Error('The event "'+key+'" is not supported by Class "'+clazz.classname+'"!');
}}}var extend=iface.$$extends;
if(extend){for(var i=0,
l=extend.length;i<l;i++){this.assert(clazz,
extend[i],
wrap);
}}},
genericToString:function(){return "[Interface "+this.name+"]";
},
__registry:{},
__wrapInterfaceMember:function(){},
__allowedKeys:null,
__validateConfig:function(){}}});




/* ID: qx.locale.MTranslation */
qx.Mixin.define("qx.locale.MTranslation",
{members:{tr:function(messageId,
varargs){var localeManager=qx.locale.Manager;
if(localeManager){return localeManager.tr.apply(localeManager,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
trn:function(singularMessageId,
pluralMessageId,
count,
varargs){var localeManager=qx.locale.Manager;
if(localeManager){return localeManager.trn.apply(localeManager,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
marktr:function(messageId){var localeManager=qx.locale.Manager;
if(localeManager){return localeManager.marktr.apply(localeManager,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});




/* ID: qx.log.MLogging */
qx.Mixin.define("qx.log.MLogging",
{members:{getLogger:function(){if(qx.log.Logger){return qx.log.Logger.getClassLogger(this.constructor);
}throw new Error("To enable logging please include qx.log.Logger into your build!");
},
debug:function(msg,
exc){this.getLogger().debug(msg,
this.toHashCode(),
exc);
},
info:function(msg,
exc){this.getLogger().info(msg,
this.toHashCode(),
exc);
},
warn:function(msg,
exc){this.getLogger().warn(msg,
this.toHashCode(),
exc);
},
error:function(msg,
exc){this.getLogger().error(msg,
this.toHashCode(),
exc);
},
printStackTrace:function(){this.getLogger().printStackTrace();
}}});




/* ID: qx.core.MUserData */
qx.Mixin.define("qx.core.MUserData",
{members:{setUserData:function(key,
value){if(!this.__userData){this.__userData={};
}this.__userData[key]=value;
},
getUserData:function(key){if(!this.__userData){return null;
}return this.__userData[key];
}},
destruct:function(){this._disposeFields("__userData");
}});




/* ID: qx.core.LegacyProperty */
qx.Class.define("qx.core.LegacyProperty",
{statics:{getSetterName:function(name){return qx.core.Property.$$method.set[name];
},
getGetterName:function(name){return qx.core.Property.$$method.get[name];
},
getResetterName:function(name){return qx.core.Property.$$method.reset[name];
},
addFastProperty:function(config,
proto){var vName=config.name;
var vUpName=qx.lang.String.toFirstUp(vName);
var vStorageField="_value"+vUpName;
var vGetterName="get"+vUpName;
var vSetterName="set"+vUpName;
var vComputerName="_compute"+vUpName;
proto[vStorageField]=typeof config.defaultValue!=="undefined"?config.defaultValue:null;
if(config.noCompute){proto[vGetterName]=function(){return this[vStorageField];
};
}else{proto[vGetterName]=function(){return this[vStorageField]==null?this[vStorageField]=this[vComputerName]():this[vStorageField];
};
}proto[vGetterName].self=proto.constructor;
if(config.setOnlyOnce){proto[vSetterName]=function(vValue){this[vStorageField]=vValue;
this[vSetterName]=null;
return vValue;
};
}else{proto[vSetterName]=function(vValue){return this[vStorageField]=vValue;
};
}proto[vSetterName].self=proto.constructor;
if(!config.noCompute){proto[vComputerName]=function(){return null;
};
proto[vComputerName].self=proto.constructor;
}},
addCachedProperty:function(config,
proto){var vName=config.name;
var vUpName=qx.lang.String.toFirstUp(vName);
var vStorageField="_cached"+vUpName;
var vComputerName="_compute"+vUpName;
var vChangeName="_change"+vUpName;
if(typeof config.defaultValue!=="undefined"){proto[vStorageField]=config.defaultValue;
}proto["get"+vUpName]=function(){if(this[vStorageField]==null){this[vStorageField]=this[vComputerName]();
}return this[vStorageField];
};
proto["_invalidate"+vUpName]=function(){if(this[vStorageField]!=null){this[vStorageField]=null;
if(config.addToQueueRuntime){this.addToQueueRuntime(config.name);
}}};
proto["_recompute"+vUpName]=function(){var vOld=this[vStorageField];
var vNew=this[vComputerName]();
if(vNew!=vOld){this[vStorageField]=vNew;
this[vChangeName](vNew,
vOld);
return true;
}return false;
};
proto[vChangeName]=function(vNew,
vOld){};
proto[vComputerName]=function(){return null;
};
proto["get"+vUpName].self=proto.constructor;
proto["_invalidate"+vUpName].self=proto.constructor;
proto["_recompute"+vUpName].self=proto.constructor;
},
addProperty:function(config,
proto){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Legacy properties are deprecated");
if(typeof config!=="object"){throw new Error("AddProperty: Param should be an object!");
}
if(typeof config.name!=="string"){throw new Error("AddProperty: Malformed input parameters: name needed!");
}if(config.dispose===undefined&&(config.type=="function"||config.type=="object")){config.dispose=true;
}config.method=qx.lang.String.toFirstUp(config.name);
config.implMethod=config.impl?qx.lang.String.toFirstUp(config.impl):config.method;
if(config.defaultValue==undefined){config.defaultValue=null;
}config.allowNull=config.allowNull!==false;
config.allowMultipleArguments=config.allowMultipleArguments===true;
if(typeof config.type==="string"){config.hasType=true;
}else if(typeof config.type!=="undefined"){throw new Error("AddProperty: Invalid type definition for property "+config.name+": "+config.type);
}else{config.hasType=false;
}
if(typeof config.instance==="string"){config.hasInstance=true;
}else if(typeof config.instance!=="undefined"){throw new Error("AddProperty: Invalid instance definition for property "+config.name+": "+config.instance);
}else{config.hasInstance=false;
}
if(typeof config.classname==="string"){config.hasClassName=true;
}else if(typeof config.classname!=="undefined"){throw new Error("AddProperty: Invalid classname definition for property "+config.name+": "+config.classname);
}else{config.hasClassName=false;
}config.hasConvert=config.convert!=null;
config.hasPossibleValues=config.possibleValues!=null;
config.addToQueue=config.addToQueue||false;
config.addToQueueRuntime=config.addToQueueRuntime||false;
config.up=config.name.toUpperCase();
var valueKey=qx.core.Property.$$store.user[config.name]="__user$"+config.name;
var changeKey="change"+config.method;
var modifyKey="_modify"+config.implMethod;
var checkKey="_check"+config.implMethod;
var method=qx.core.Property.$$method;
if(!method.set[config.name]){method.set[config.name]="set"+config.method;
method.get[config.name]="get"+config.method;
method.reset[config.name]="reset"+config.method;
}proto[valueKey]=config.defaultValue;
proto["get"+config.method]=function(){return this[valueKey];
};
proto["force"+config.method]=function(newValue){return this[valueKey]=newValue;
};
proto["reset"+config.method]=function(){return this["set"+config.method](config.defaultValue);
};
if(config.type==="boolean"){proto["toggle"+config.method]=function(newValue){return this["set"+config.method](!this[valueKey]);
};
}
if(config.allowMultipleArguments||config.hasConvert||config.hasInstance||config.hasClassName||config.hasPossibleValues||config.hasUnitDetection||config.addToQueue||config.addToQueueRuntime||config.addToStateQueue){proto["set"+config.method]=function(newValue){if(config.allowMultipleArguments&&arguments.length>1){newValue=qx.lang.Array.fromArguments(arguments);
}if(config.hasConvert){try{newValue=config.convert.call(this,
newValue,
config);
}catch(ex){throw new Error("Attention! Could not convert new value for "+config.name+": "+newValue+": "+ex);
}}var oldValue=this[valueKey];
if(newValue===oldValue){return newValue;
}
if(!(config.allowNull&&newValue==null)){if(config.hasType&&typeof newValue!==config.type){throw new Error("Attention! The value \""+newValue+"\" is an invalid value for the property \""+config.name+"\" which must be typeof \""+config.type+"\" but is typeof \""+typeof newValue+"\"!");
}
if(qx.Class.getByName(config.instance)){if(config.hasInstance&&!(newValue instanceof qx.Class.getByName(config.instance))){throw new Error("Attention! The value \""+newValue+"\" is an invalid value for the property \""+config.name+"\" which must be an instance of \""+config.instance+"\"!");
}}else{if(config.hasInstance&&!(newValue instanceof qx.OO.classes[config.instance])){throw new Error("Attention! The value \""+newValue+"\" is an invalid value for the property \""+config.name+"\" which must be an instance of \""+config.instance+"\"!");
}}
if(config.hasClassName&&newValue.classname!=config.classname){throw new Error("Attention! The value \""+newValue+"\" is an invalid value for the property \""+config.name+"\" which must be an object with the classname \""+config.classname+"\"!");
}
if(config.hasPossibleValues&&newValue!=null&&!qx.lang.Array.contains(config.possibleValues,
newValue)){throw new Error("Failed to save value for "+config.name+". '"+newValue+"' is not a possible value!");
}}if(this[checkKey]){try{newValue=this[checkKey](newValue,
config);
if(newValue===oldValue){return newValue;
}}catch(ex){return this.error("Failed to check property "+config.name,
ex);
}}this[valueKey]=newValue;
if(this[modifyKey]){try{this[modifyKey](newValue,
oldValue,
config);
}catch(ex){return this.error("Modification of property \""+config.name+"\" failed with exception",
ex);
}}if(config.addToQueue){this.addToQueue(config.name);
}
if(config.addToQueueRuntime){this.addToQueueRuntime(config.name);
}if(config.addToStateQueue){this.addToStateQueue();
}if(this.hasEventListeners&&this.hasEventListeners(changeKey)){try{this.createDispatchDataEvent(changeKey,
newValue);
}catch(ex){throw new Error("Property "+config.name+" modified: Failed to dispatch change event: "+ex);
}}return newValue;
};
}else{proto["set"+config.method]=function(newValue){var oldValue=this[valueKey];
if(newValue===oldValue){return newValue;
}
if(!(config.allowNull&&newValue==null)){if(config.hasType&&typeof newValue!==config.type){throw new Error("Attention! The value \""+newValue+"\" is an invalid value for the property \""+config.name+"\" which must be typeof \""+config.type+"\" but is typeof \""+typeof newValue+"\"!");
}}if(this[checkKey]){try{newValue=this[checkKey](newValue,
config);
if(newValue===oldValue){return newValue;
}}catch(ex){return this.error("Failed to check property "+config.name,
ex);
}}this[valueKey]=newValue;
if(this[modifyKey]){try{this[modifyKey](newValue,
oldValue,
config);
}catch(ex){var valueStr=new String(newValue).substring(0,
50);
this.error("Setting property \""+config.name+"\" to \""+valueStr+"\" failed with exception",
ex);
}}if(this.hasEventListeners&&this.hasEventListeners(changeKey)){var vEvent=new qx.event.type.DataEvent(changeKey,
newValue,
oldValue,
false);
vEvent.setTarget(this);
try{this.dispatchEvent(vEvent,
true);
}catch(ex){throw new Error("Property "+config.name+" modified: Failed to dispatch change event: "+ex);
}}return newValue;
};
}proto["set"+config.method].self=proto.constructor;
if(typeof config.getAlias==="string"){proto[config.getAlias]=proto["get"+config.method];
}if(typeof config.setAlias==="string"){proto[config.setAlias]=proto["set"+config.method];
}}}});




/* ID: qx.core.Property */
qx.Class.define("qx.core.Property",
{statics:{__checks:{"Boolean":'typeof value === "boolean"',
"String":'typeof value === "string"',
"NonEmptyString":'typeof value === "string" && value.length > 0',
"Number":'typeof value === "number" && isFinite(value)',
"Integer":'typeof value === "number" && isFinite(value) && value%1 === 0',
"Float":'typeof value === "number" && isFinite(value)',
"Double":'typeof value === "number" && isFinite(value)',
"Error":'value instanceof Error',
"RegExp":'value instanceof RegExp',
"Object":'value !== null && typeof value === "object"',
"Array":'value instanceof Array',
"Map":'value !== null && typeof value === "object" && !(value instanceof Array) && !(value instanceof qx.core.Object)',
"Function":'value instanceof Function',
"Date":'value instanceof Date',
"Node":'value !== null && value.nodeType !== undefined',
"Element":'value !== null && value.nodeType === 1 && value.attributes',
"Document":'value !== null && value.nodeType === 9 && value.documentElement',
"Window":'value !== null && window.document',
"Event":'value !== null && value.type !== undefined',
"Class":'value !== null && value.$$type === "Class"',
"Mixin":'value !== null && value.$$type === "Mixin"',
"Interface":'value !== null && value.$$type === "Interface"',
"Theme":'value !== null && value.$$type === "Theme"',
"Color":'typeof value === "string" && qx.util.ColorUtil.isValid(value)',
"Border":'value !== null && qx.theme.manager.Border.getInstance().isDynamic(value)',
"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',
"Label":'value !== null && (qx.locale.Manager.getInstance().isDynamic(value) || typeof value === "string")'},
__dispose:{"Object":true,
"Array":true,
"Map":true,
"Function":true,
"Date":true,
"Node":true,
"Element":true,
"Document":true,
"Window":true,
"Event":true,
"Class":true,
"Mixin":true,
"Interface":true,
"Theme":true,
"Border":true,
"Font":true},
$$inherit:"inherit",
$$idcounter:0,
$$store:{user:{},
theme:{},
inherit:{},
init:{},
useinit:{}},
$$method:{get:{},
set:{},
reset:{},
init:{},
refresh:{},
style:{},
unstyle:{}},
$$allowedKeys:{name:"string",
dispose:"boolean",
inheritable:"boolean",
nullable:"boolean",
themeable:"boolean",
refine:"boolean",
init:null,
apply:"string",
event:"string",
check:null,
transform:"string"},
$$allowedGroupKeys:{name:"string",
group:"object",
mode:"string",
themeable:"boolean"},
$$inheritable:{},
refresh:function(widget){var parent=widget.getParent();
if(parent){var clazz=widget.constructor;
var inherit=this.$$store.inherit;
var refresh=this.$$method.refresh;
var properties;
{};
while(clazz){properties=clazz.$$properties;
if(properties){for(var name in this.$$inheritable){if(properties[name]){{};
widget[refresh[name]](parent[inherit[name]]);
}}}clazz=clazz.superclass;
}}},
attach:function(clazz){var properties=clazz.$$properties;
if(properties){for(var name in properties){this.attachMethods(clazz,
name,
properties[name]);
}}clazz.$$propertiesAttached=true;
},
attachMethods:function(clazz,
name,
config){if(config._legacy||config._fast||config._cached){return;
}var prefix,
postfix;
if(name.charAt(0)==="_"){if(name.charAt(1)==="_"){prefix="__";
postfix=qx.lang.String.toFirstUp(name.substring(2));
}else{prefix="_";
postfix=qx.lang.String.toFirstUp(name.substring(1));
}}else{prefix="";
postfix=qx.lang.String.toFirstUp(name);
}config.group?this.__attachGroupMethods(clazz,
config,
prefix,
postfix):this.__attachPropertyMethods(clazz,
config,
prefix,
postfix);
},
__attachGroupMethods:function(clazz,
config,
prefix,
postfix){var members=clazz.prototype;
var name=config.name;
var themeable=config.themeable===true;
{};
var setter=[];
var resetter=[];
if(themeable){var styler=[];
var unstyler=[];
}var argHandler="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
setter.push(argHandler);
if(themeable){styler.push(argHandler);
}
if(config.mode=="shorthand"){var shorthand="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
setter.push(shorthand);
if(themeable){styler.push(shorthand);
}}
for(var i=0,
a=config.group,
l=a.length;i<l;i++){{};
setter.push("this.",
this.$$method.set[a[i]],
"(a[",
i,
"]);");
resetter.push("this.",
this.$$method.reset[a[i]],
"();");
if(themeable){styler.push("this.",
this.$$method.style[a[i]],
"(a[",
i,
"]);");
unstyler.push("this.",
this.$$method.unstyle[a[i]],
"();");
}}this.$$method.set[name]=prefix+"set"+postfix;
members[this.$$method.set[name]]=new Function(setter.join(""));
this.$$method.reset[name]=prefix+"reset"+postfix;
members[this.$$method.reset[name]]=new Function(resetter.join(""));
if(themeable){this.$$method.style[name]=prefix+"style"+postfix;
members[this.$$method.style[name]]=new Function(styler.join(""));
this.$$method.unstyle[name]=prefix+"unstyle"+postfix;
members[this.$$method.unstyle[name]]=new Function(unstyler.join(""));
}},
__attachPropertyMethods:function(clazz,
config,
prefix,
postfix){var members=clazz.prototype;
var name=config.name;
{};
if(config.dispose===undefined&&typeof config.check==="string"){config.dispose=this.__dispose[config.check]||qx.Class.isDefined(config.check);
}var method=this.$$method;
var store=this.$$store;
store.user[name]="__user$"+name;
store.theme[name]="__theme$"+name;
store.init[name]="__init$"+name;
store.inherit[name]="__inherit$"+name;
store.useinit[name]="__useinit$"+name;
method.get[name]=prefix+"get"+postfix;
members[method.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,
clazz,
name,
"get");
};
method.set[name]=prefix+"set"+postfix;
members[method.set[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,
clazz,
name,
"set",
arguments);
};
method.reset[name]=prefix+"reset"+postfix;
members[method.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,
clazz,
name,
"reset");
};
if(config.inheritable||config.apply||config.event){method.init[name]=prefix+"init"+postfix;
members[method.init[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,
clazz,
name,
"init",
arguments);
};
}
if(config.inheritable){method.refresh[name]=prefix+"refresh"+postfix;
members[method.refresh[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,
clazz,
name,
"refresh",
arguments);
};
}
if(config.themeable){method.style[name]=prefix+"style"+postfix;
members[method.style[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,
clazz,
name,
"style",
arguments);
};
method.unstyle[name]=prefix+"unstyle"+postfix;
members[method.unstyle[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,
clazz,
name,
"unstyle");
};
}
if(config.check==="Boolean"){members[prefix+"toggle"+postfix]=new Function("return this."+method.set[name]+"(!this."+method.get[name]+"())");
members[prefix+"is"+postfix]=new Function("return this."+method.get[name]+"()");
}},
__errors:{0:'Could not change or apply init value after constructing phase!',
1:'Requires exactly one argument!',
2:'Undefined value is not allowed!',
3:'Does not allow any arguments!',
4:'Null value is not allowed!',
5:'Is invalid!'},
error:function(obj,
id,
property,
variant,
value){var classname=obj.constructor.classname;
var msg="Error in property "+property+" of class "+classname+" in method "+this.$$method[variant][property]+" with incoming value '"+value+"': ";
obj.printStackTrace();
throw new Error(msg+(this.__errors[id]||"Unknown reason: "+id));
},
__unwrapFunctionFromCode:function(instance,
members,
name,
variant,
code,
args){var store=this.$$method[variant][name];
{members[store]=new Function("value",
code.join(""));
};
{};
if(args===undefined){return instance[store]();
}else{return instance[store](args[0]);
}},
executeOptimizedGetter:function(instance,
clazz,
name,
variant){var config=clazz.$$properties[name];
var members=clazz.prototype;
var code=[];
if(config.inheritable){code.push('if(this.',
this.$$store.inherit[name],
'!==undefined)');
code.push('return this.',
this.$$store.inherit[name],
';');
code.push('else ');
}code.push('if(this.',
this.$$store.user[name],
'!==undefined)');
code.push('return this.',
this.$$store.user[name],
';');
if(config.themeable){code.push('else if(this.',
this.$$store.theme[name],
'!==undefined)');
code.push('return this.',
this.$$store.theme[name],
';');
}
if(config.deferredInit&&config.init===undefined){code.push('else if(this.',
this.$$store.init[name],
'!==undefined)');
code.push('return this.',
this.$$store.init[name],
';');
}code.push('else ');
if(config.init!==undefined){code.push('return this.',
this.$$store.init[name],
';');
}else if(config.inheritable||config.nullable){code.push('return null;');
}else{code.push('throw new Error("Property ',
name,
' of an instance of ',
clazz.classname,
' is not (yet) ready!");');
}return this.__unwrapFunctionFromCode(instance,
members,
name,
variant,
code);
},
executeOptimizedSetter:function(instance,
clazz,
name,
variant,
args){var config=clazz.$$properties[name];
var members=clazz.prototype;
var value=args?args[0]:undefined;
var code=[];
var incomingValue=variant==="set"||variant==="style"||(variant==="init"&&config.init===undefined);
var resetValue=variant==="reset"||variant==="unstyle";
var hasCallback=config.apply||config.event||config.inheritable;
if(variant==="style"||variant==="unstyle"){var store=this.$$store.theme[name];
}else if(variant==="init"){var store=this.$$store.init[name];
}else{var store=this.$$store.user[name];
}{if(!config.nullable||config.check||config.inheritable){code.push('var prop=qx.core.Property;');
}if(variant==="set"){code.push('if(value===undefined)prop.error(this,2,"'+name+'","'+variant+'",value);');
}};
if(incomingValue){if(config.transform){code.push('value=this.',
config.transform,
'(value);');
}}if(hasCallback){if(incomingValue){code.push('if(this.',
store,
'===value)return value;');
}else if(resetValue){code.push('if(this.',
store,
'===undefined)return;');
}}if(config.inheritable){code.push('var inherit=prop.$$inherit;');
}if(incomingValue&&(false||variant==="set")){if(!config.nullable){code.push('if(value===null)prop.error(this,4,"'+name+'","'+variant+'",value);');
}if(config.check!==undefined){if(config.nullable){code.push('if(value!==null)');
}if(config.inheritable){code.push('if(value!==inherit)');
}code.push('if(');
if(this.__checks[config.check]!==undefined){code.push('!(',
this.__checks[config.check],
')');
}else if(qx.Class.isDefined(config.check)){code.push('!(value instanceof ',
config.check,
')');
}else if(qx.Interface.isDefined(config.check)){code.push('!(value && qx.Class.hasInterface(value.constructor, ',
config.check,
'))');
}else if(typeof config.check==="function"){code.push('!',
clazz.classname,
'.$$properties.',
name);
code.push('.check.call(this, value)');
}else if(typeof config.check==="string"){code.push('!(',
config.check,
')');
}else if(config.check instanceof Array){config.checkMap=qx.lang.Object.fromArray(config.check);
code.push(clazz.classname,
'.$$properties.',
name);
code.push('.checkMap[value]===undefined');
}else{throw new Error("Could not add check to property "+name+" of class "+clazz.classname);
}code.push(')prop.error(this,5,"'+name+'","'+variant+'",value);');
}}
if(!hasCallback){if(variant==="set"){code.push('this.',
this.$$store.user[name],
'=value;');
}else if(variant==="reset"){code.push('if(this.',
this.$$store.user[name],
'!==undefined)');
code.push('delete this.',
this.$$store.user[name],
';');
}else if(variant==="style"){code.push('this.',
this.$$store.theme[name],
'=value;');
}else if(variant==="unstyle"){code.push('if(this.',
this.$$store.theme[name],
'!==undefined)');
code.push('delete this.',
this.$$store.theme[name],
';');
}else if(variant==="init"&&incomingValue){code.push('this.',
this.$$store.init[name],
'=value;');
}}else{if(config.inheritable){code.push('var computed, old=this.',
this.$$store.inherit[name],
';');
}else{code.push('var computed, old;');
}code.push('if(this.',
this.$$store.user[name],
'!==undefined){');
if(variant==="set"){if(!config.inheritable){code.push('old=this.',
this.$$store.user[name],
';');
}code.push('computed=this.',
this.$$store.user[name],
'=value;');
}else if(variant==="reset"){if(!config.inheritable){code.push('old=this.',
this.$$store.user[name],
';');
}code.push('delete this.',
this.$$store.user[name],
';');
code.push('if(this.',
this.$$store.theme[name],
'!==undefined)');
code.push('computed=this.',
this.$$store.theme[name],
';');
code.push('else if(this.',
this.$$store.init[name],
'!==undefined){');
code.push('computed=this.',
this.$$store.init[name],
';');
code.push('this.',
this.$$store.useinit[name],
'=true;');
code.push('}');
}else{if(config.inheritable){code.push('computed=this.',
this.$$store.user[name],
';');
}else{code.push('old=computed=this.',
this.$$store.user[name],
';');
}if(variant==="style"){code.push('this.',
this.$$store.theme[name],
'=value;');
}else if(variant==="unstyle"){code.push('delete this.',
this.$$store.theme[name],
';');
}else if(variant==="init"&&incomingValue){code.push('this.',
this.$$store.init[name],
'=value;');
}}code.push('}');
if(config.themeable){code.push('else if(this.',
this.$$store.theme[name],
'!==undefined){');
if(!config.inheritable){code.push('old=this.',
this.$$store.theme[name],
';');
}
if(variant==="set"){code.push('computed=this.',
this.$$store.user[name],
'=value;');
}else if(variant==="style"){code.push('computed=this.',
this.$$store.theme[name],
'=value;');
}else if(variant==="unstyle"){code.push('delete this.',
this.$$store.theme[name],
';');
code.push('if(this.',
this.$$store.init[name],
'!==undefined){');
code.push('computed=this.',
this.$$store.init[name],
';');
code.push('this.',
this.$$store.useinit[name],
'=true;');
code.push('}');
}else if(variant==="init"){if(incomingValue){code.push('this.',
this.$$store.init[name],
'=value;');
}code.push('computed=this.',
this.$$store.theme[name],
';');
}else if(variant==="refresh"){code.push('computed=this.',
this.$$store.theme[name],
';');
}code.push('}');
}code.push('else if(this.',
this.$$store.useinit[name],
'){');
if(!config.inheritable){code.push('old=this.',
this.$$store.init[name],
';');
}
if(variant==="init"){if(incomingValue){code.push('computed=this.',
this.$$store.init[name],
'=value;');
}else{code.push('computed=this.',
this.$$store.init[name],
';');
}}else if(variant==="set"||variant==="style"||variant==="refresh"){code.push('delete this.',
this.$$store.useinit[name],
';');
if(variant==="set"){code.push('computed=this.',
this.$$store.user[name],
'=value;');
}else if(variant==="style"){code.push('computed=this.',
this.$$store.theme[name],
'=value;');
}else if(variant==="refresh"){code.push('computed=this.',
this.$$store.init[name],
';');
}}code.push('}');
if(variant==="set"||variant==="style"||variant==="init"){code.push('else{');
if(variant==="set"){code.push('computed=this.',
this.$$store.user[name],
'=value;');
}else if(variant==="style"){code.push('computed=this.',
this.$$store.theme[name],
'=value;');
}else if(variant==="init"){if(incomingValue){code.push('computed=this.',
this.$$store.init[name],
'=value;');
}else{code.push('computed=this.',
this.$$store.init[name],
';');
}code.push('this.',
this.$$store.useinit[name],
'=true;');
}code.push('}');
}}
if(config.inheritable){code.push('if(computed===undefined||computed===inherit){');
if(variant==="refresh"){code.push('computed=value;');
}else{code.push('var pa=this.getParent();if(pa)computed=pa.',
this.$$store.inherit[name],
';');
}code.push('if((computed===undefined||computed===inherit)&&');
code.push('this.',
this.$$store.init[name],
'!==undefined&&');
code.push('this.',
this.$$store.init[name],
'!==inherit){');
code.push('computed=this.',
this.$$store.init[name],
';');
code.push('this.',
this.$$store.useinit[name],
'=true;');
code.push('}else{');
code.push('delete this.',
this.$$store.useinit[name],
';}');
code.push('}');
code.push('if(old===computed)return value;');
code.push('if(computed===inherit){');
code.push('computed=undefined;delete this.',
this.$$store.inherit[name],
';');
code.push('}');
code.push('else if(computed===undefined)');
code.push('delete this.',
this.$$store.inherit[name],
';');
code.push('else this.',
this.$$store.inherit[name],
'=computed;');
code.push('var backup=computed;');
code.push('if(computed===undefined)computed=null;');
code.push('if(old===undefined)old=null;');
}else if(hasCallback){if(variant!=="set"&&variant!=="style"){code.push('if(computed===undefined)computed=null;');
}code.push('if(old===computed)return value;');
code.push('if(old===undefined)old=null;');
}if(hasCallback){if(config.apply){code.push('this.',
config.apply,
'(computed, old);');
}if(config.event){code.push('this.createDispatchChangeEvent("',
config.event,
'", computed, old);');
}if(config.inheritable&&members.getChildren){code.push('var a=this.getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
code.push('if(a[i].',
this.$$method.refresh[name],
')a[i].',
this.$$method.refresh[name],
'(backup);');
code.push('}');
}}if(incomingValue){code.push('return value;');
}return this.__unwrapFunctionFromCode(instance,
members,
name,
variant,
code,
args);
}},
settings:{"qx.propertyDebugLevel":0}});




/* ID: qx.lang.String */
qx.Class.define("qx.lang.String",
{statics:{toCamelCase:function(string){return string.replace(/\-([a-z])/g,
function(match,
chr){return chr.toUpperCase();
});
},
trimLeft:function(str){return str.replace(/^\s+/,
"");
},
trimRight:function(str){return str.replace(/\s+$/,
"");
},
trim:function(str){return str.replace(/^\s+|\s+$/g,
"");
},
startsWith:function(fullstr,
substr){return !fullstr.indexOf(substr);
},
startsWithAlternate:function(fullstr,
substr){return fullstr.substring(0,
substr.length)===substr;
},
endsWith:function(fullstr,
substr){return fullstr.lastIndexOf(substr)===fullstr.length-substr.length;
},
endsWithAlternate:function(fullstr,
substr){return fullstr.substring(fullstr.length-substr.length,
fullstr.length)===substr;
},
pad:function(str,
length,
ch,
addRight){if(typeof ch==="undefined"){ch="0";
}var temp="";
for(var i=str.length;i<length;i++){temp+=ch;
}
if(addRight==true){return str+temp;
}else{return temp+str;
}},
toFirstUp:function(str){return str.charAt(0).toUpperCase()+str.substr(1);
},
toFirstLower:function(str){return str.charAt(0).toLowerCase()+str.substr(1);
},
addListItem:function(str,
item,
sep){if(str==item||str==""){return item;
}
if(sep==null){sep=",";
}var a=str.split(sep);
if(a.indexOf(item)==-1){a.push(item);
return a.join(sep);
}else{return str;
}},
removeListItem:function(str,
item,
sep){if(str==item||str==""){return "";
}else{if(sep==null){sep=",";
}var a=str.split(sep);
var p=a.indexOf(item);
if(p===-1){return str;
}
do{a.splice(p,
1);
}while((p=a.indexOf(item))!=-1);
return a.join(sep);
}},
contains:function(str,
substring){return str.indexOf(substring)!=-1;
},
format:function(pattern,
args){var str=pattern;
for(var i=0;i<args.length;i++){str=str.replace(new RegExp("%"+(i+1),
"g"),
args[i]);
}return str;
},
escapeRegexpChars:function(str){return str.replace(/([\\\.\(\)\[\]\{\}\^\$\?\+\*])/g,
"\\$1");
},
toArray:function(str){return str.split(/\B|\b/g);
}}});




/* ID: qx.core.Object */
qx.Class.define("qx.core.Object",
{extend:Object,
include:[qx.locale.MTranslation,
qx.log.MLogging,
qx.core.MUserData],
construct:function(){this._hashCode=qx.core.Object.__availableHashCode++;
if(this._autoDispose){this.__dbKey=qx.core.Object.__db.length;
qx.core.Object.__db.push(this);
}},
statics:{__availableHashCode:0,
__db:[],
__disposeAll:false,
$$type:"Object",
toHashCode:function(obj){if(obj._hashCode!=null){return obj._hashCode;
}return obj._hashCode=this.__availableHashCode++;
},
getDb:function(){return this.__db;
},
dispose:function(){if(this.__disposed){return;
}this.__disposed=true;
var disposeStart;
var vObject,
vObjectDb=this.__db;
for(var i=vObjectDb.length-1;i>=0;i--){vObject=vObjectDb[i];
if(vObject&&vObject.__disposed===false){try{vObject.dispose();
}catch(ex){try{console.warn("Could not dispose: "+vObject+": "+ex);
}catch(exc){throw new Error("Could not dispose: "+vObject+": "+ex);
}}}}var elems,
i,
l,
elem,
key,
name;
},
inGlobalDispose:function(){return this.__disposed;
}},
members:{_autoDispose:true,
toHashCode:function(){return this._hashCode;
},
toString:function(){if(this.classname){return "[object "+this.classname+"]";
}return "[object Object]";
},
base:function(args,
varags){if(arguments.length===1){return args.callee.base.call(this);
}else{return args.callee.base.apply(this,
Array.prototype.slice.call(arguments,
1));
}},
self:function(args){return args.callee.self;
},
getDbKey:function(){return this.__dbKey;
},
set:function(data,
value){var setter=qx.core.Property.$$method.set;
if(typeof data==="string"){{};
return this[setter[data]](value);
}else{for(var prop in data){{};
this[setter[prop]](data[prop]);
}return this;
}},
get:function(prop){var getter=qx.core.Property.$$method.get;
{};
return this[getter[prop]]();
},
reset:function(prop){var resetter=qx.core.Property.$$method.reset;
{};
this[resetter[prop]]();
},
__disposed:false,
getDisposed:function(){return this.__disposed;
},
isDisposed:function(){return this.__disposed;
},
dispose:function(){if(this.__disposed){return;
}this.__disposed=true;
{};
var clazz=this.constructor;
var mixins;
while(clazz.superclass){if(clazz.$$destructor){clazz.$$destructor.call(this);
}if(clazz.$$includes){mixins=clazz.$$flatIncludes;
for(var i=0,
l=mixins.length;i<l;i++){if(mixins[i].$$destructor){mixins[i].$$destructor.call(this);
}}}clazz=clazz.superclass;
}var vKey;
},
_disposeFields:function(varargs){var name;
for(var i=0,
l=arguments.length;i<l;i++){var name=arguments[i];
if(this[name]==null){continue;
}
if(!this.hasOwnProperty(name)){{};
continue;
}this[name]=null;
}},
_disposeObjects:function(varargs){var name;
for(var i=0,
l=arguments.length;i<l;i++){var name=arguments[i];
if(this[name]==null){continue;
}
if(!this.hasOwnProperty(name)){{};
continue;
}
if(!this[name].dispose){throw new Error(this.classname+" has no own object "+name);
}this[name].dispose();
this[name]=null;
}},
_disposeObjectDeep:function(name,
deep){var name;
if(this[name]==null){return;
}
if(!this.hasOwnProperty(name)){{};
return;
}{};
this.__disposeObjectsDeepRecurser(this[name],
deep||0);
this[name]=null;
},
__disposeObjectsDeepRecurser:function(obj,
deep){if(obj instanceof qx.core.Object){{};
obj.dispose();
}else if(obj instanceof Array){for(var i=0,
l=obj.length;i<l;i++){var entry=obj[i];
if(entry==null){continue;
}
if(typeof entry=="object"){if(deep>0){{};
this.__disposeObjectsDeepRecurser(entry,
deep-1);
}{};
obj[i]=null;
}else if(typeof entry=="function"){{};
obj[i]=null;
}}}else if(obj instanceof Object){for(var key in obj){if(obj[key]==null||!obj.hasOwnProperty(key)){continue;
}var entry=obj[key];
if(typeof entry=="object"){if(deep>0){{};
this.__disposeObjectsDeepRecurser(entry,
deep-1);
}{};
obj[key]=null;
}else if(typeof entry=="function"){{};
obj[key]=null;
}}}}},
settings:{"qx.disposerDebugLevel":0},
destruct:function(){var clazz=this.constructor;
var properties;
var store=qx.core.Property.$$store;
var storeUser=store.user;
var storeTheme=store.theme;
var storeInherit=store.inherit;
var storeUseinit=store.useinit;
var storeInit=store.init;
while(clazz){properties=clazz.$$properties;
if(properties){for(var name in properties){if(properties[name].dispose){this[storeUser[name]]=this[storeTheme[name]]=this[storeInherit[name]]=this[storeUseinit[name]]=this[storeInit[name]]=undefined;
}}}clazz=clazz.superclass;
}if(this.__dbKey!=null){if(qx.core.Object.__disposeAll){qx.core.Object.__db[this.__dbKey]=null;
}else{delete qx.core.Object.__db[this.__dbKey];
}}}});




/* ID: qx.core.Target */
qx.Class.define("qx.core.Target",
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
members:{addEventListener:function(type,
func,
obj){if(this.getDisposed()){return;
}{};
if(this.__listeners===undefined){this.__listeners={};
}
if(this.__listeners[type]===undefined){this.__listeners[type]={};
}var key="event"+qx.core.Object.toHashCode(func)+(obj?"$"+qx.core.Object.toHashCode(obj):"");
this.__listeners[type][key]={handler:func,
object:obj};
},
removeEventListener:function(type,
func,
obj){if(this.getDisposed()){return;
}var listeners=this.__listeners;
if(!listeners||listeners[type]===undefined){return;
}
if(typeof func!=="function"){throw new Error("qx.core.Target: removeEventListener("+type+"): '"+func+"' is not a function!");
}var key="event"+qx.core.Object.toHashCode(func)+(obj?"$"+qx.core.Object.toHashCode(obj):"");
delete this.__listeners[type][key];
},
hasEventListeners:function(type){return this.__listeners&&this.__listeners[type]!==undefined&&!qx.lang.Object.isEmpty(this.__listeners[type]);
},
createDispatchEvent:function(type){if(this.hasEventListeners(type)){this.dispatchEvent(new qx.event.type.Event(type),
true);
}},
createDispatchDataEvent:function(type,
data){if(this.hasEventListeners(type)){this.dispatchEvent(new qx.event.type.DataEvent(type,
data),
true);
}},
createDispatchChangeEvent:function(type,
value,
old){if(this.hasEventListeners(type)){this.dispatchEvent(new qx.event.type.ChangeEvent(type,
value,
old),
true);
}},
dispatchEvent:function(evt,
dispose){if(this.getDisposed()){return;
}
if(evt.getTarget()==null){evt.setTarget(this);
}
if(evt.getCurrentTarget()==null){evt.setCurrentTarget(this);
}this._dispatchEvent(evt,
dispose);
var defaultPrevented=evt._defaultPrevented;
dispose&&evt.dispose();
return !defaultPrevented;
},
_dispatchEvent:function(evt){var listeners=this.__listeners;
if(listeners){evt.setCurrentTarget(this);
var typeListeners=listeners[evt.getType()];
if(typeListeners){var func,
obj;
for(var vHashCode in typeListeners){func=typeListeners[vHashCode].handler;
obj=typeListeners[vHashCode].object||this;
func.call(obj,
evt);
}}}if(evt.getBubbles()&&!evt.getPropagationStopped()&&typeof (this.getParent)=="function"){var parent=this.getParent();
if(parent&&!parent.getDisposed()&&parent.getEnabled()){parent._dispatchEvent(evt);
}}}},
destruct:function(){this._disposeObjectDeep("__listeners",
2);
}});




/* ID: qx.event.type.Event */
qx.Class.define("qx.event.type.Event",
{extend:qx.core.Object,
construct:function(vType){arguments.callee.base.call(this);
this.setType(vType);
},
properties:{type:{_fast:true,
setOnlyOnce:true},
originalTarget:{_fast:true,
setOnlyOnce:true},
target:{_fast:true,
setOnlyOnce:true},
relatedTarget:{_fast:true,
setOnlyOnce:true},
currentTarget:{_fast:true},
bubbles:{_fast:true,
defaultValue:false,
noCompute:true},
propagationStopped:{_fast:true,
defaultValue:true,
noCompute:true},
defaultPrevented:{_fast:true,
defaultValue:false,
noCompute:true}},
members:{_autoDispose:false,
preventDefault:function(){this.setDefaultPrevented(true);
},
stopPropagation:function(){this.setPropagationStopped(true);
}},
destruct:function(){this._disposeFields("_valueOriginalTarget",
"_valueTarget",
"_valueRelatedTarget",
"_valueCurrentTarget");
}});




/* ID: qx.event.type.DataEvent */
qx.Class.define("qx.event.type.DataEvent",
{extend:qx.event.type.Event,
construct:function(vType,
vData){arguments.callee.base.call(this,
vType);
this.setData(vData);
},
properties:{propagationStopped:{_fast:true,
defaultValue:false},
data:{_fast:true}},
destruct:function(){this._disposeFields("_valueData");
}});




/* ID: qx.event.type.ChangeEvent */
qx.Class.define("qx.event.type.ChangeEvent",
{extend:qx.event.type.Event,
construct:function(type,
value,
old){arguments.callee.base.call(this,
type);
this.setValue(value);
this.setOldValue(old);
},
properties:{value:{_fast:true},
oldValue:{_fast:true}},
members:{getData:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use getValue() instead!");
return this.getValue();
}},
destruct:function(){this._disposeFields("_valueValue",
"_valueOldValue");
}});




/* ID: qx.log.Filter */
qx.Class.define("qx.log.Filter",
{extend:qx.core.Object,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
},
statics:{ACCEPT:1,
DENY:2,
NEUTRAL:3},
members:{decide:function(evt){throw new Error("decide is abstract");
}}});




/* ID: qx.log.DefaultFilter */
qx.Class.define("qx.log.DefaultFilter",
{extend:qx.log.Filter,
construct:function(){arguments.callee.base.call(this);
},
properties:{enabled:{check:"Boolean",
init:true},
minLevel:{check:"Number",
nullable:true}},
members:{decide:function(evt){var Filter=qx.log.Filter;
if(!this.getEnabled()){return Filter.DENY;
}else if(this.getMinLevel()==null){return Filter.NEUTRAL;
}else{return (evt.level>=this.getMinLevel())?Filter.ACCEPT:Filter.DENY;
}}}});




/* ID: qx.log.LogEventProcessor */
qx.Class.define("qx.log.LogEventProcessor",
{extend:qx.core.Object,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
},
members:{addFilter:function(filter){if(this._filterArr==null){this._filterArr=[];
}this._filterArr.push(filter);
},
clearFilters:function(){this._filterArr=null;
},
getHeadFilter:function(){return (this._filterArr==null||this._filterArr.length==0)?null:this._filterArr[0];
},
_getDefaultFilter:function(){var headFilter=this.getHeadFilter();
if(!(headFilter instanceof qx.log.DefaultFilter)){this.clearFilters();
headFilter=new qx.log.DefaultFilter();
this.addFilter(headFilter);
}return headFilter;
},
setEnabled:function(enabled){this._getDefaultFilter().setEnabled(enabled);
},
setMinLevel:function(minLevel){this._getDefaultFilter().setMinLevel(minLevel);
},
decideLogEvent:function(evt){var NEUTRAL=qx.log.Filter.NEUTRAL;
if(this._filterArr!=null){for(var i=0;i<this._filterArr.length;i++){var decision=this._filterArr[i].decide(evt);
if(decision!=NEUTRAL){return decision;
}}}return NEUTRAL;
},
handleLogEvent:function(evt){throw new Error("handleLogEvent is abstract");
}},
destruct:function(){this._disposeFields("_filterArr");
}});




/* ID: qx.log.appender.Abstract */
qx.Class.define("qx.log.appender.Abstract",
{extend:qx.log.LogEventProcessor,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
},
properties:{useLongFormat:{check:"Boolean",
init:true}},
members:{handleLogEvent:function(evt){if(this.decideLogEvent(evt)!=qx.log.Filter.DENY){this.appendLogEvent(evt);
}},
appendLogEvent:function(evt){throw new Error("appendLogEvent is abstract");
},
formatLogEvent:function(evt){var Logger=qx.log.Logger;
var text="";
var time=new String(new Date().getTime()-qx.core.Bootstrap.LOADSTART);
while(time.length<6){time="0"+time;
}text+=time;
if(this.getUseLongFormat()){switch(evt.level){case Logger.LEVEL_DEBUG:text+=" DEBUG: ";
break;
case Logger.LEVEL_INFO:text+=" INFO:  ";
break;
case Logger.LEVEL_WARN:text+=" WARN:  ";
break;
case Logger.LEVEL_ERROR:text+=" ERROR: ";
break;
case Logger.LEVEL_FATAL:text+=" FATAL: ";
break;
}}else{text+=": ";
}var indent="";
for(var i=0;i<evt.indent;i++){indent+="  ";
}text+=indent;
if(this.getUseLongFormat()){text+=evt.logger.getName();
if(evt.instanceId!=null){text+="["+evt.instanceId+"]";
}text+=": ";
}if(typeof evt.message=="string"){text+=evt.message;
}else{var obj=evt.message;
if(obj==null){text+="Object is null";
}else{text+="--- Object: "+obj+" ---\n";
var attrArr=new Array();
try{for(var attr in obj){attrArr.push(attr);
}}catch(exc){text+=indent+"  [not readable: "+exc+"]\n";
}attrArr.sort();
for(var i=0;i<attrArr.length;i++){try{text+=indent+"  "+attrArr[i]+"="+obj[attrArr[i]]+"\n";
}catch(exc){text+=indent+"  "+attrArr[i]+"=[not readable: "+exc+"]\n";
}}text+=indent+"--- End of object ---";
}}if(evt.throwable!=null){var thr=evt.throwable;
if(thr.name==null){text+=": "+thr;
}else{text+=": "+thr.name;
}
if(thr.message!=null){text+=" - "+thr.message;
}
if(thr.number!=null){text+=" (#"+thr.number+")";
}var trace=qx.dev.StackTrace.getStackTraceFromError(thr);
}
if(evt.trace){var trace=evt.trace;
}
if(trace&&trace.length>0){text+="\n";
for(var i=0;i<trace.length;i++){text+="  at "+trace[i]+"\n";
}}return text;
}}});




/* ID: qx.log.appender.Window */
qx.Class.define("qx.log.appender.Window",
{extend:qx.log.appender.Abstract,
construct:function(name){arguments.callee.base.call(this);
this._id=qx.log.appender.Window.register(this);
this._name=name;
if(this._name==null){var url=window.location.href;
var hash=0;
for(var i=0;i<url.length;i++){hash=(hash+url.charCodeAt(i))%10000000;
}this._name="qx_log_"+hash;
}this._errorsPreventingAutoCloseCount=0;
this._divDataSets=[];
this._filterTextWords=[];
this._filterText="";
},
statics:{_nextId:1,
_registeredAppenders:{},
register:function(appender){var WindowAppender=qx.log.appender.Window;
var id=WindowAppender._nextId++;
WindowAppender._registeredAppenders[id]=appender;
return id;
},
getAppender:function(id){return qx.log.appender.Window._registeredAppenders[id];
}},
properties:{maxMessages:{check:"Integer",
init:500},
popUnder:{check:"Boolean",
init:false},
autoCloseWithErrors:{check:"Boolean",
init:true,
apply:"_applyAutoCloseWithErrors"},
windowWidth:{check:"Integer",
init:600},
windowHeight:{check:"Integer",
init:350},
windowLeft:{check:"Integer",
nullable:true},
windowTop:{check:"Integer",
nullable:true}},
members:{openWindow:function(){if(this._logWindow&&!this._logWindow.closed){return ;
}var winWidth=this.getWindowWidth();
var winHeight=this.getWindowHeight();
var winLeft=this.getWindowLeft();
if(winLeft===null){winLeft=window.screen.width-winWidth;
}var winTop=this.getWindowTop();
if(winTop===null){winTop=window.screen.height-winHeight;
}var params="toolbar=no,scrollbars=no,resizable=yes,"+"width="+winWidth+",height="+winHeight+",left="+winLeft+",top="+winTop;
this._logWindow=window.open("",
this._name,
params);
if(!this._logWindow||this._logWindow.closed){if(this._popupBlockerWarning){return;
}alert("Could not open log window. Please disable your popup blocker!");
this._popupBlockerWarning=true;
return;
}this._popupBlockerWarning=false;
if(this.getPopUnder()){this._logWindow.blur();
window.focus();
}var logDocument=this._logWindow.document;
var logFix=qx.core.Variant.isSet("qx.client",
"mshtml")?'#lines { width: 100%; height: expression((document.body.offsetHeight - 30) + "px"); }':'';
logDocument.open();
logDocument.write("<html><head><title>"+this._name+"</title></head>"+'<body onload="qx = opener.qx;" onunload="try{qx.log.WindowAppender._registeredAppenders['+this._id+']._autoCloseWindow()}catch(e){}">'+'  <style type="text/css">'+'    html, body, input, pre{ font-size: 11px; font-family: Tahoma, sans-serif; line-height : 1 }'+'    html, body{ padding: 0; margin: 0; border : 0 none; }'+'    * { box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box }'+'    #lines{ top: 30px; left: 0; right: 0; bottom: 0; position: absolute; overflow: auto; }'+'    #control { top: 0; left: 0; right: 0; padding: 4px 8px; background: #eee; border-bottom: 1px solid #ccc; height: 30px }'+'    pre { margin: 0; padding: 4px 8px; font-family: Consolas, "Bitstream Vera Sans Mono", monospace; }'+'    hr { border: 0 none; border-bottom: 1px solid #ccc; margin: 8px 0; padding: 0; height: 1px }'+logFix+'  </style>'+'  <div id="control">'+'    <input id="marker" type="button" value="Add divider"/> &#160; &#160; Filter: <input name="filter" id="filter" type="text" value="'+this._filterText+'">'+'  </div>'+'  <div id="lines">'+'    <pre id="log" wrap="wrap"></pre>'+'  </div>'+'</body></html>');
logDocument.close();
this._logElem=logDocument.getElementById("log");
this._markerBtn=logDocument.getElementById("marker");
this._filterInput=logDocument.getElementById("filter");
this._logLinesDiv=logDocument.getElementById("lines");
var self=this;
this._markerBtn.onclick=function(){self._showMessageInLog("<hr/>");
};
this._filterInput.onkeyup=function(){self.setFilterText(self._filterInput.value);
};
if(this._logEventQueue!=null){for(var i=0;i<this._logEventQueue.length;i++){this.appendLogEvent(this._logEventQueue[i]);
}this._logEventQueue.length=0;
}},
closeWindow:function(){if(this._logWindow!=null){this._logWindow.close();
this._logWindow=null;
this._logElem=null;
}},
_autoCloseWindow:function(){if(this.getAutoCloseWithErrors()||this._errorsPreventingAutoCloseCount==0){this.closeWindow();
}else{this._showMessageInLog("Log window message: <b>Note: "+this._errorsPreventingAutoCloseCount+" errors have been recorded, keeping log window open.</b>");
}},
_showMessageInLog:function(msg){var dummyEvent={message:msg,
isDummyEventForMessage:true};
this.appendLogEvent(dummyEvent);
},
appendLogEvent:function(evt){if(!this._logWindow||this._logWindow.closed){if(!this._logWindow||!this._logEventQueue){this._logEventQueue=[];
}this._logEventQueue.push(evt);
this.openWindow();
}else if(this._logElem==null){this._logEventQueue.push(evt);
}else{var divElem=this._logWindow.document.createElement("div");
if(evt.level>=qx.log.Logger.LEVEL_ERROR){divElem.style.backgroundColor="#FFEEEE";
if(!this.getAutoCloseWithErrors()){this._errorsPreventingAutoCloseCount+=1;
}}else if(evt.level==qx.log.Logger.LEVEL_DEBUG){divElem.style.color="gray";
}var txt;
if(evt.isDummyEventForMessage){txt=evt.message;
}else{txt=qx.html.String.fromText(this.formatLogEvent(evt));
}divElem.innerHTML=txt;
this._logElem.appendChild(divElem);
var divDataSet={txt:txt.toUpperCase(),
elem:divElem};
this._divDataSets.push(divDataSet);
this._setDivVisibility(divDataSet);
while(this._logElem.childNodes.length>this.getMaxMessages()){this._logElem.removeChild(this._logElem.firstChild);
if(this._removedMessageCount==null){this._removedMessageCount=1;
}else{this._removedMessageCount++;
}}
if(this._removedMessageCount!=null){this._logElem.firstChild.innerHTML="("+this._removedMessageCount+" messages removed)";
}this._logLinesDiv.scrollTop=this._logLinesDiv.scrollHeight;
}},
setFilterText:function(text){if(text==null){text="";
}this._filterText=text;
text=text.toUpperCase();
this._filterTextWords=text.split(" ");
for(var divIdx=0;divIdx<this._divDataSets.length;divIdx++){this._setDivVisibility(this._divDataSets[divIdx]);
}},
_setDivVisibility:function(divDataSet){var visible=true;
for(var txtIndex=0;visible&&(txtIndex<this._filterTextWords.length);txtIndex++){visible=divDataSet.txt.indexOf(this._filterTextWords[txtIndex])>=0;
}divDataSet.elem.style["display"]=(visible?"":"none");
},
_applyAutoCloseWithErrors:function(value,
old){if(!value&&old){this._errorsPreventingAutoCloseCount=0;
this._showMessageInLog("Log window message: Starting error recording, any errors below this line will prevent the log window from closing");
}else if(value&&!old){this._showMessageInLog("Log window message: Stopping error recording, discarding "+this._errorsPreventingAutoCloseCount+" errors.");
}}},
destruct:function(){try{if(this._markerBtn){this._markerBtn.onclick=null;
}
if(this._filterInput){this._filterInput.onkeyup=null;
}}catch(ex){}this._autoCloseWindow();
}});




/* ID: qx.log.appender.FireBug */
qx.Class.define("qx.log.appender.FireBug",
{extend:qx.log.appender.Abstract,
construct:function(){arguments.callee.base.call(this);
},
members:{appendLogEvent:function(evt){if(typeof console!='undefined'){var log=qx.log.Logger;
var msg=this.formatLogEvent(evt);
switch(evt.level){case log.LEVEL_DEBUG:if(console.debug){console.debug(msg);
}break;
case log.LEVEL_INFO:if(console.info){console.info(msg);
}break;
case log.LEVEL_WARN:if(console.warn){console.warn(msg);
}break;
default:if(console.error){console.error(msg);
}break;
}if(evt.level>=log.LEVEL_WARN&&(!evt.throwable||!evt.throwable.stack)&&console.trace){console.trace();
}}}}});




/* ID: qx.log.appender.Native */
qx.Class.define("qx.log.appender.Native",
{extend:qx.log.appender.Abstract,
construct:function(){arguments.callee.base.call(this);
if(typeof console!='undefined'&&console.debug&&!console.emu){this._appender=new qx.log.appender.FireBug;
}else{this._appender=new qx.log.appender.Window;
}},
members:{appendLogEvent:function(evt){if(this._appender){return this._appender.appendLogEvent(evt);
}}},
destruct:function(){this._disposeObjects("_appender");
}});




/* ID: qx.log.Logger */
qx.Class.define("qx.log.Logger",
{extend:qx.log.LogEventProcessor,
construct:function(name,
parentLogger){arguments.callee.base.call(this);
this._name=name;
this._parentLogger=parentLogger;
},
statics:{deprecatedMethodWarning:function(fcn,
msg){var logger,
functionName,
className;
},
deprecatedClassWarning:function(clazz){var logger,
functionName,
className;
},
getClassLogger:function(clazz){var logger=clazz._logger;
if(logger==null){var classname=clazz.classname;
var splits=classname.split(".");
var currPackage=window;
var currPackageName="";
var parentLogger=qx.log.Logger.ROOT_LOGGER;
for(var i=0;i<splits.length-1;i++){currPackage=currPackage[splits[i]];
currPackageName+=((i!=0)?".":"")+splits[i];
if(currPackage._logger==null){currPackage._logger=new qx.log.Logger(currPackageName,
parentLogger);
}parentLogger=currPackage._logger;
}logger=new qx.log.Logger(classname,
parentLogger);
clazz._logger=logger;
}return logger;
},
_indent:0,
LEVEL_ALL:0,
LEVEL_DEBUG:200,
LEVEL_INFO:500,
LEVEL_WARN:600,
LEVEL_ERROR:700,
LEVEL_FATAL:800,
LEVEL_OFF:1000,
ROOT_LOGGER:null},
members:{getName:function(){return this._name;
},
getParentLogger:function(){return this._parentLogger;
},
indent:function(){qx.log.Logger._indent++;
},
unindent:function(){qx.log.Logger._indent--;
},
addAppender:function(appender){if(this._appenderArr==null){this._appenderArr=[];
}this._appenderArr.push(appender);
},
removeAppender:function(appender){if(this._appenderArr!=null){this._appenderArr.remove(appender);
}},
removeAllAppenders:function(){this._appenderArr=null;
},
handleLogEvent:function(evt){var Filter=qx.log.Filter;
var decision=Filter.NEUTRAL;
var logger=this;
while(decision==Filter.NEUTRAL&&logger!=null){decision=logger.decideLogEvent(evt);
logger=logger.getParentLogger();
}
if(decision!=Filter.DENY){this.appendLogEvent(evt);
}},
appendLogEvent:function(evt){if(this._appenderArr!=null&&this._appenderArr.length!=0){for(var i=0;i<this._appenderArr.length;i++){this._appenderArr[i].handleLogEvent(evt);
}}else if(this._parentLogger!=null){this._parentLogger.appendLogEvent(evt);
}},
log:function(level,
msg,
instanceId,
exc,
trace){var evt={logger:this,
level:level,
message:msg,
throwable:exc,
trace:trace,
indent:qx.log.Logger._indent,
instanceId:instanceId};
this.handleLogEvent(evt);
},
debug:function(msg,
instanceId,
exc){this.log(qx.log.Logger.LEVEL_DEBUG,
msg,
instanceId,
exc);
},
info:function(msg,
instanceId,
exc){this.log(qx.log.Logger.LEVEL_INFO,
msg,
instanceId,
exc);
},
warn:function(msg,
instanceId,
exc){this.log(qx.log.Logger.LEVEL_WARN,
msg,
instanceId,
exc);
},
error:function(msg,
instanceId,
exc){this.log(qx.log.Logger.LEVEL_ERROR,
msg,
instanceId,
exc);
},
fatal:function(msg,
instanceId,
exc){this.log(qx.log.Logger.LEVEL_FATAL,
msg,
instanceId,
exc);
},
measureReset:function(){if(this._totalMeasureTime!=null){this.debug("Measure reset. Total measure time: "+this._totalMeasureTime+" ms");
}this._lastMeasureTime=null;
this._totalMeasureTime=null;
},
measure:function(msg,
instanceId,
exc){if(this._lastMeasureTime==null){msg="(measure start) "+msg;
}else{var delta=new Date().getTime()-this._lastMeasureTime;
if(this._totalMeasureTime==null){this._totalMeasureTime=0;
}this._totalMeasureTime+=delta;
msg="(passed time: "+delta+" ms) "+msg;
}this.debug(msg,
instanceId,
exc);
this._lastMeasureTime=new Date().getTime();
},
printStackTrace:function(){var trace=qx.dev.StackTrace.getStackTrace();
qx.lang.Array.removeAt(trace,
0);
this.log(qx.log.Logger.LEVEL_DEBUG,
"Current stack trace",
"",
null,
trace);
}},
settings:{"qx.logAppender":"qx.log.appender.Native",
"qx.minLogLevel":200},
defer:function(statics){statics.ROOT_LOGGER=new statics("root",
null);
statics.ROOT_LOGGER.setMinLevel(qx.core.Setting.get("qx.minLogLevel"));
statics.ROOT_LOGGER.addAppender(new (qx.Class.getByName(qx.core.Setting.get("qx.logAppender"))));
},
destruct:function(){this._disposeFields("_parentLogger",
"_appenderArr");
}});




/* ID: qx.dev.StackTrace */
qx.Class.define("qx.dev.StackTrace",
{statics:{getStackTrace:qx.core.Variant.select("qx.client",
{"gecko":function(){try{throw new Error();
}catch(e){var errorTrace=this.getStackTraceFromError(e);
qx.lang.Array.removeAt(errorTrace,
0);
var callerTrace=this.getStackTraceFromCaller(arguments);
var trace=callerTrace.length>errorTrace.length?callerTrace:errorTrace;
for(var i=0;i<Math.min(callerTrace.length,
errorTrace.length);i++){callerCall=callerTrace[i];
if(callerCall.indexOf("anonymous")>=0){continue;
}callerArr=callerCall.split(":");
if(callerArr.length!=2){continue;
}var callerClassName=callerArr[0];
var methodName=callerArr[1];
var errorCall=errorTrace[i];
var errorArr=errorCall.split(":");
var errorClassName=errorArr[0];
var lineNumber=errorArr[1];
if(qx.Class.getByName(errorClassName)){var className=errorClassName;
}else{className=callerClassName;
}var line=className+":";
if(methodName){line+=methodName+":";
}line+=lineNumber;
trace[i]=line;
}return trace;
}},
"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},
"opera":function(){var foo;
try{foo.bar();
}catch(e){var trace=this.getStackTraceFromError(e);
qx.lang.Array.removeAt(trace,
0);
return trace;
}return [];
}}),
getStackTraceFromCaller:qx.core.Variant.select("qx.client",
{"opera":function(args){return [];
},
"default":function(args){var trace=[];
var fcn=qx.lang.Function.getCaller(args);
var i=0;
var knownFunction={};
while(fcn){var fcnName=this.getFunctionName(fcn);
trace.push(fcnName);
fcn=fcn.caller;
if(!fcn){break;
}var hash=qx.core.Object.toHashCode(fcn);
if(knownFunction[hash]){trace.push("...");
break;
}knownFunction[hash]=fcn;
}return trace;
}}),
getStackTraceFromError:qx.core.Variant.select("qx.client",
{"gecko":function(error){if(!error.stack){return [];
}var lineRe=/@(.+):(\d+)$/gm;
var hit;
var trace=[];
while((hit=lineRe.exec(error.stack))!=null){var url=hit[1];
var lineNumber=hit[2];
var className=this.__fileNameToClassName(url);
trace.push(className+":"+lineNumber);
}return trace;
},
"webkit":function(error){if(error.sourceURL&&error.line){return [this.__fileNameToClassName(error.sourceURL)+":"+error.line];
}},
"opera":function(error){if(error.message.indexOf("Backtrace:")<0){return [];
}var trace=[];
var traceString=qx.lang.String.trim(error.message.split("Backtrace:")[1]);
var lines=traceString.split("\n");
for(var i=0;i<lines.length;i++){var reResult=lines[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);
if(reResult&&reResult.length>=2){var lineNumber=reResult[1];
var fileName=this.__fileNameToClassName(reResult[2]);
trace.push(fileName+":"+lineNumber);
}}return trace;
},
"default":function(){return [];
}}),
getFunctionName:function(fcn){if(fcn.$$original){return fcn.classname+":constructor wrapper";
}
if(fcn.wrapper){return fcn.wrapper.classname+":constructor";
}
if(fcn.classname){return fcn.classname+":constructor";
}
if(fcn.mixin){for(var key in fcn.mixin.$$members){if(fcn.mixin.$$members[key]==fcn){return fcn.mixin.name+":"+key;
}}for(var key in fcn.mixin){if(fcn.mixin[key]==fcn){return fcn.mixin.name+":"+key;
}}}
if(fcn.self){var clazz=fcn.self.constructor;
if(clazz){for(var key in clazz.prototype){if(clazz.prototype[key]==fcn){return clazz.classname+":"+key;
}}for(var key in clazz){if(clazz[key]==fcn){return clazz.classname+":"+key;
}}}}var fcnReResult=fcn.toString().match(/(function\s*\w*\(.*?\))/);
if(fcnReResult&&fcnReResult.length>=1&&fcnReResult[1]){return fcnReResult[1];
}var fcnReResult=fcn.toString().match(/(function\s*\(.*?\))/);
if(fcnReResult&&fcnReResult.length>=1&&fcnReResult[1]){return "anonymous: "+fcnReResult[1];
}return 'anonymous';
},
__fileNameToClassName:function(fileName){var scriptDir="/source/class/";
var jsPos=fileName.indexOf(scriptDir);
var className=(jsPos==-1)?fileName:fileName.substring(jsPos+scriptDir.length).replace(/\//g,
".").replace(/\.js$/,
"");
return className;
}}});




/* ID: qx.lang.Function */
qx.Class.define("qx.lang.Function",
{statics:{globalEval:function(data){if(window.execScript){window.execScript(data);
}else{eval.call(window,
data);
}},
returnTrue:function(){return true;
},
returnFalse:function(){return false;
},
returnNull:function(){return null;
},
returnThis:function(){return this;
},
returnInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
},
returnZero:function(){return 0;
},
returnNegativeIndex:function(){return -1;
},
bind:function(fcn,
self,
varargs){{};
if(arguments.length>2){var args=Array.prototype.slice.call(arguments,
2);
var wrap=function(){fcn.context=self;
var ret=fcn.apply(self,
args.concat(qx.lang.Array.fromArguments(arguments)));
fcn.context=null;
return ret;
};
}else{var wrap=function(){fcn.context=self;
var ret=fcn.apply(self,
arguments);
fcn.context=null;
return ret;
};
}wrap.self=fcn.self?fcn.self.constructor:self;
return wrap;
},
bindEvent:function(fcn,
self){{};
var wrap=function(event){fcn.context=self;
var ret=fcn.call(self,
event||window.event);
fcn.context=null;
return ret;
};
wrap.self=fcn.self?fcn.self.constructor:self;
return wrap;
},
getCaller:function(args){return args.caller?args.caller.callee:args.callee.caller;
}}});




/* ID: qx.html.String */
qx.Class.define("qx.html.String",
{statics:{escape:function(str){return qx.dom.String.escapeEntities(str,
qx.html.Entity.FROM_CHARCODE);
},
unescape:function(str){return qx.dom.String.unescapeEntities(str,
qx.html.Entity.TO_CHARCODE);
},
fromText:function(str){return qx.html.String.escape(str).replace(/(  |\n)/g,
function(chr){var map={"  ":" &nbsp;",
"\n":"<br>"};
return map[chr]||chr;
});
},
toText:function(str){return qx.html.String.unescape(str.replace(/\s+|<([^>])+>/gi,
function(chr){if(/\s+/.test(chr)){return " ";
}else if(/^<BR|^<br/gi.test(chr)){return "\n";
}else{return "";
}}));
}}});




/* ID: qx.dom.String */
qx.Class.define("qx.dom.String",
{statics:{escapeEntities:qx.core.Variant.select("qx.client",
{"mshtml":function(str,
charCodeToEntities){var entity,
result=[];
for(var i=0,
l=str.length;i<l;i++){var chr=str.charAt(i);
var code=chr.charCodeAt(0);
if(charCodeToEntities[code]){entity="&"+charCodeToEntities[code]+";";
}else{if(code>0x7F){entity="&#"+code+";";
}else{entity=chr;
}}result[result.length]=entity;
}return result.join("");
},
"default":function(str,
charCodeToEntities){var entity,
result="";
for(var i=0,
l=str.length;i<l;i++){var chr=str.charAt(i);
var code=chr.charCodeAt(0);
if(charCodeToEntities[code]){entity="&"+charCodeToEntities[code]+";";
}else{if(code>0x7F){entity="&#"+code+";";
}else{entity=chr;
}}result+=entity;
}return result;
}}),
unescapeEntities:function(str,
entitiesToCharCode){return str.replace(/&[#\w]+;/gi,
function(entity){var chr=entity;
var entity=entity.substring(1,
entity.length-1);
var code=entitiesToCharCode[entity];
if(code){chr=String.fromCharCode(code);
}else{if(entity.charAt(0)=='#'){if(entity.charAt(1).toUpperCase()=='X'){code=entity.substring(2);
if(code.match(/^[0-9A-Fa-f]+$/gi)){chr=String.fromCharCode(parseInt("0x"+code));
}}else{code=entity.substring(1);
if(code.match(/^\d+$/gi)){chr=String.fromCharCode(parseInt(code));
}}}}return chr;
});
},
stripTags:function(str){return str.replace(/<\/?[^>]+>/gi,
"");
}}});




/* ID: qx.html.Entity */
qx.Class.define("qx.html.Entity",
{statics:{TO_CHARCODE:{"quot":34,
"amp":38,
"lt":60,
"gt":62,
"nbsp":160,
"iexcl":161,
"cent":162,
"pound":163,
"curren":164,
"yen":165,
"brvbar":166,
"sect":167,
"uml":168,
"copy":169,
"ordf":170,
"laquo":171,
"not":172,
"shy":173,
"reg":174,
"macr":175,
"deg":176,
"plusmn":177,
"sup2":178,
"sup3":179,
"acute":180,
"micro":181,
"para":182,
"middot":183,
"cedil":184,
"sup1":185,
"ordm":186,
"raquo":187,
"frac14":188,
"frac12":189,
"frac34":190,
"iquest":191,
"Agrave":192,
"Aacute":193,
"Acirc":194,
"Atilde":195,
"Auml":196,
"Aring":197,
"AElig":198,
"Ccedil":199,
"Egrave":200,
"Eacute":201,
"Ecirc":202,
"Euml":203,
"Igrave":204,
"Iacute":205,
"Icirc":206,
"Iuml":207,
"ETH":208,
"Ntilde":209,
"Ograve":210,
"Oacute":211,
"Ocirc":212,
"Otilde":213,
"Ouml":214,
"times":215,
"Oslash":216,
"Ugrave":217,
"Uacute":218,
"Ucirc":219,
"Uuml":220,
"Yacute":221,
"THORN":222,
"szlig":223,
"agrave":224,
"aacute":225,
"acirc":226,
"atilde":227,
"auml":228,
"aring":229,
"aelig":230,
"ccedil":231,
"egrave":232,
"eacute":233,
"ecirc":234,
"euml":235,
"igrave":236,
"iacute":237,
"icirc":238,
"iuml":239,
"eth":240,
"ntilde":241,
"ograve":242,
"oacute":243,
"ocirc":244,
"otilde":245,
"ouml":246,
"divide":247,
"oslash":248,
"ugrave":249,
"uacute":250,
"ucirc":251,
"uuml":252,
"yacute":253,
"thorn":254,
"yuml":255,
"fnof":402,
"Alpha":913,
"Beta":914,
"Gamma":915,
"Delta":916,
"Epsilon":917,
"Zeta":918,
"Eta":919,
"Theta":920,
"Iota":921,
"Kappa":922,
"Lambda":923,
"Mu":924,
"Nu":925,
"Xi":926,
"Omicron":927,
"Pi":928,
"Rho":929,
"Sigma":931,
"Tau":932,
"Upsilon":933,
"Phi":934,
"Chi":935,
"Psi":936,
"Omega":937,
"alpha":945,
"beta":946,
"gamma":947,
"delta":948,
"epsilon":949,
"zeta":950,
"eta":951,
"theta":952,
"iota":953,
"kappa":954,
"lambda":955,
"mu":956,
"nu":957,
"xi":958,
"omicron":959,
"pi":960,
"rho":961,
"sigmaf":962,
"sigma":963,
"tau":964,
"upsilon":965,
"phi":966,
"chi":967,
"psi":968,
"omega":969,
"thetasym":977,
"upsih":978,
"piv":982,
"bull":8226,
"hellip":8230,
"prime":8242,
"Prime":8243,
"oline":8254,
"frasl":8260,
"weierp":8472,
"image":8465,
"real":8476,
"trade":8482,
"alefsym":8501,
"larr":8592,
"uarr":8593,
"rarr":8594,
"darr":8595,
"harr":8596,
"crarr":8629,
"lArr":8656,
"uArr":8657,
"rArr":8658,
"dArr":8659,
"hArr":8660,
"forall":8704,
"part":8706,
"exist":8707,
"empty":8709,
"nabla":8711,
"isin":8712,
"notin":8713,
"ni":8715,
"prod":8719,
"sum":8721,
"minus":8722,
"lowast":8727,
"radic":8730,
"prop":8733,
"infin":8734,
"ang":8736,
"and":8743,
"or":8744,
"cap":8745,
"cup":8746,
"int":8747,
"there4":8756,
"sim":8764,
"cong":8773,
"asymp":8776,
"ne":8800,
"equiv":8801,
"le":8804,
"ge":8805,
"sub":8834,
"sup":8835,
"sube":8838,
"supe":8839,
"oplus":8853,
"otimes":8855,
"perp":8869,
"sdot":8901,
"lceil":8968,
"rceil":8969,
"lfloor":8970,
"rfloor":8971,
"lang":9001,
"rang":9002,
"loz":9674,
"spades":9824,
"clubs":9827,
"hearts":9829,
"diams":9830,
"OElig":338,
"oelig":339,
"Scaron":352,
"scaron":353,
"Yuml":376,
"circ":710,
"tilde":732,
"ensp":8194,
"emsp":8195,
"thinsp":8201,
"zwnj":8204,
"zwj":8205,
"lrm":8206,
"rlm":8207,
"ndash":8211,
"mdash":8212,
"lsquo":8216,
"rsquo":8217,
"sbquo":8218,
"ldquo":8220,
"rdquo":8221,
"bdquo":8222,
"dagger":8224,
"Dagger":8225,
"permil":8240,
"lsaquo":8249,
"rsaquo":8250,
"euro":8364}},
defer:function(statics,
members,
properties){statics.FROM_CHARCODE=qx.lang.Object.invert(statics.TO_CHARCODE);
}});




/* ID: qx.html.EventRegistration */
qx.Class.define("qx.html.EventRegistration",
{statics:{addEventListener:qx.core.Variant.select("qx.client",
{"mshtml":function(vElement,
vType,
vFunction){vElement.attachEvent("on"+vType,
vFunction);
},
"default":function(vElement,
vType,
vFunction){vElement.addEventListener(vType,
vFunction,
false);
}}),
removeEventListener:qx.core.Variant.select("qx.client",
{"mshtml":function(vElement,
vType,
vFunction){vElement.detachEvent("on"+vType,
vFunction);
},
"default":function(vElement,
vType,
vFunction){vElement.removeEventListener(vType,
vFunction,
false);
}})}});




/* ID: qx.core.Init */
qx.Class.define("qx.core.Init",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
qx.html.EventRegistration.addEventListener(window,
"load",
qx.lang.Function.bind(this._onload,
this));
qx.html.EventRegistration.addEventListener(window,
"beforeunload",
qx.lang.Function.bind(this._onbeforeunload,
this));
qx.html.EventRegistration.addEventListener(window,
"unload",
qx.lang.Function.bind(this._onunload,
this));
},
events:{"load":"qx.event.type.Event",
"beforeunload":"qx.event.type.Event",
"unload":"qx.event.type.Event"},
properties:{application:{nullable:true,
check:function(value){if(typeof value=="function"){throw new Error("The application property takes an application instance as parameter "+"and no longer a class/constructor. You may have to fix your 'index.html'.");
}return value&&qx.Class.hasInterface(value.constructor,
qx.application.IApplication);
}}},
members:{_autoDispose:false,
_onload:function(e){this.createDispatchEvent("load");
this.debug("qooxdoo "+qx.core.Version.toString());
{this.debug("loaded "+qx.lang.Object.getLength(qx.OO.classes)+" old classes");
};
this.debug("loaded "+qx.Class.getTotalNumber()+" classes");
this.debug("loaded "+qx.Interface.getTotalNumber()+" interfaces");
this.debug("loaded "+qx.Mixin.getTotalNumber()+" mixins");
if(qx.Theme){this.debug("loaded "+qx.Theme.getTotalNumber()+" themes");
}
if(qx.locale&&qx.locale.Manager){this.debug("loaded "+qx.locale.Manager.getInstance().getAvailableLocales().length+" locales");
}var cl=qx.core.Client.getInstance();
this.debug("client: "+cl.getEngine()+"-"+cl.getMajor()+"."+cl.getMinor()+"/"+cl.getPlatform()+"/"+cl.getLocale());
this.debug("browser: "+cl.getBrowser()+"/"+(cl.supportsSvg()?"svg":cl.supportsVml()?"vml":"none"));
{};
if(!this.getApplication()){var clazz=qx.Class.getByName(qx.core.Setting.get("qx.application"));
if(clazz){this.setApplication(new clazz(this));
}}
if(!this.getApplication()){return;
}this.debug("application: "+this.getApplication().classname+"["+this.getApplication().toHashCode()+"]");
var start=new Date;
{this.getApplication().main();
};
var app,
msg,
exception;
this.info("main runtime: "+(new Date-start)+"ms");
},
_onbeforeunload:function(e){this.createDispatchEvent("beforeunload");
if(this.getApplication()){var result=this.getApplication().close();
if(result!=null){e.returnValue=result;
}}},
_onunload:function(e){this.createDispatchEvent("unload");
if(this.getApplication()){this.getApplication().terminate();
}qx.core.Object.dispose();
}},
settings:{"qx.application":"qx.application.Gui",
"qx.isSource":true},
defer:function(statics,
proto,
properties){statics.getInstance();
}});




/* ID: qx.application.IApplication */
qx.Interface.define("qx.application.IApplication",
{members:{main:function(){return true;
},
close:function(){return true;
},
terminate:function(){return true;
}}});




/* ID: qx.core.Version */
qx.Class.define("qx.core.Version",
{statics:{major:0,
minor:0,
revision:0,
state:"",
svn:0,
folder:"",
toString:function(){return this.major+"."+this.minor+(this.revision==0?"":"."+this.revision)+(this.state==""?"":"-"+this.state)+(this.svn==0?"":" (r"+this.svn+")")+(this.folder==""?"":" ["+this.folder+"]");
},
__init:function(){var vSplit=qx.core.Setting.get("qx.version").split(" ");
var vVersion=vSplit.shift();
var vInfos=vSplit.join(" ");
if(/([0-9]+)\.([0-9]+)(\.([0-9]))?(-([a-z0-9]+))?/.test(vVersion)){this.major=(RegExp.$1!=""?parseInt(RegExp.$1):0);
this.minor=(RegExp.$2!=""?parseInt(RegExp.$2):0);
this.revision=(RegExp.$4!=""?parseInt(RegExp.$4):0);
this.state=typeof RegExp.$6=="string"?RegExp.$6:"";
}
if(/(\(r([0-9]+)\))?(\s\[([a-zA-Z0-9_-]+)\])?/.test(vInfos)){this.svn=(RegExp.$2!=""?parseInt(RegExp.$2):0);
this.folder=typeof RegExp.$4=="string"?RegExp.$4:"";
}}},
settings:{"qx.version":"0.0"},
defer:function(statics){statics.__init();
}});




/* ID: qx.OO */
{qx.Class.define("qx.OO",
{statics:{classes:{},
defineClass:function(vClassName,
vSuper,
vConstructor){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use qx.Class.define instead");
var vSplitName=vClassName.split(".");
var vNameLength=vSplitName.length-1;
var vTempObject=window;
for(var i=0;i<vNameLength;i++){if(typeof vTempObject[vSplitName[i]]==="undefined"){vTempObject[vSplitName[i]]={};
}vTempObject=vTempObject[vSplitName[i]];
}if(typeof vSuper==="undefined"){if(typeof vConstructor!=="undefined"){throw new Error("SuperClass is undefined, but constructor was given for class: "+vClassName);
}qx.Clazz=vTempObject[vSplitName[i]]={};
qx.Proto=null;
qx.Super=null;
}else if(typeof vConstructor==="undefined"){qx.Clazz=vTempObject[vSplitName[i]]=vSuper;
qx.Proto=null;
qx.Super=vSuper;
}else{qx.Clazz=vTempObject[vSplitName[i]]=vConstructor;
var vHelperConstructor=function(){};
vHelperConstructor.prototype=vSuper.prototype;
qx.Proto=vConstructor.prototype=new vHelperConstructor;
qx.Super=vConstructor.superclass=vSuper;
qx.Proto.classname=vConstructor.classname=vClassName;
qx.Proto.constructor=vConstructor;
}qx.OO.classes[vClassName]=qx.Class;
},
isAvailable:function(vClassName){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return qx.OO.classes[vClassName]!=null;
},
addFastProperty:function(config){{};
return qx.core.LegacyProperty.addFastProperty(config,
qx.Proto);
},
addCachedProperty:function(config){{};
return qx.core.LegacyProperty.addCachedProperty(config,
qx.Proto);
},
addPropertyGroup:function(config){{};
return qx.Class.addPropertyGroup(config,
qx.Proto);
},
removeProperty:function(config){{};
return qx.core.LegacyProperty.removeProperty(config,
qx.Proto);
},
changeProperty:function(config){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return qx.core.LegacyProperty.addProperty(config,
qx.Proto);
},
addProperty:function(config){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
return qx.core.LegacyProperty.addProperty(config,
qx.Proto);
}}});
};




/* ID: qx.Theme */
qx.Class.define("qx.Theme",
{statics:{define:function(name,
config){if(!config){var config={};
}
if(config.include&&!(config.include instanceof Array)){config.include=[config.include];
}{};
var theme={$$type:"Theme",
name:name,
title:config.title,
type:config.type||"normal",
toString:this.genericToString};
if(config.extend){theme.supertheme=config.extend;
}theme.basename=qx.Class.createNamespace(name,
theme);
this.__convert(theme,
config);
this.__registry[name]=theme;
if(config.include){for(var i=0,
a=config.include,
l=a.length;i<l;i++){this.include(theme,
a[i]);
}}},
getAll:function(){return this.__registry;
},
getByName:function(name){return this.__registry[name];
},
isDefined:function(name){return this.getByName(name)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.__registry);
},
genericToString:function(){return "[Theme "+this.name+"]";
},
__extractInheritableKey:function(config){for(var i=0,
keys=this.__inheritableKeys,
l=keys.length;i<l;i++){if(config[keys[i]]){return keys[i];
}}},
__convert:function(theme,
config){var keyCurrent=this.__extractInheritableKey(config);
if(config.extend){var keyExtended=this.__extractInheritableKey(config.extend);
if(!keyCurrent){keyCurrent=keyExtended;
}}if(!keyCurrent){return;
}var clazz=function(){};
if(config.extend){clazz.prototype=new config.extend.$$clazz;
}var target=clazz.prototype;
var source=config[keyCurrent];
for(var id in source){target[id]=source[id];
}theme.$$clazz=clazz;
theme[keyCurrent]=new clazz;
},
__registry:{},
__inheritableKeys:["colors",
"borders",
"fonts",
"icons",
"widgets",
"appearances",
"meta"],
__allowedKeys:null,
__metaKeys:null,
__validateConfig:function(){},
patch:function(theme,
mixinTheme){var keyCurrent=this.__extractInheritableKey(mixinTheme);
if(keyCurrent!==this.__extractInheritableKey(theme)){throw new Error("The mixins '"+theme.name+"' are not compatible '"+mixinTheme.name+"'!");
}var source=mixinTheme[keyCurrent];
var target=theme[keyCurrent];
for(var key in source){target[key]=source[key];
}},
include:function(theme,
mixinTheme){var keyCurrent=this.__extractInheritableKey(mixinTheme);
if(keyCurrent!==this.__extractInheritableKey(theme)){throw new Error("The mixins '"+theme.name+"' are not compatible '"+mixinTheme.name+"'!");
}var source=mixinTheme[keyCurrent];
var target=theme[keyCurrent];
for(var key in source){if(target[key]!==undefined){throw new Error("It is not allowed to overwrite the key '"+key+"' of theme '"+theme.name+"' by mixin theme '"+mixinTheme.name+"'.");
}target[key]=source[key];
}}}});




/* ID: qx.theme.classic.color.Royale */
qx.Theme.define("qx.theme.classic.color.Royale",
{title:"Windows Royale",
colors:{"background":[235,
233,
237],
"border-light":"white",
"border-light-shadow":[220,
223,
228],
"border-dark":[133,
135,
140],
"border-dark-shadow":[167,
166,
170],
"effect":[254,
200,
60],
"selected":[51,
94,
168],
"text":"black",
"text-disabled":[167,
166,
170],
"text-selected":"white",
"tooltip":[255,
255,
225],
"tooltip-text":"black",
"menu":"white",
"list":"white",
"field":"white",
"button":[235,
233,
237],
"button-hover":[246,
245,
247],
"button-abandoned":[235,
233,
237],
"window-active-caption-text":[255,
255,
255],
"window-inactive-caption-text":[255,
255,
255],
"window-active-caption":[51,
94,
168],
"window-inactive-caption":[111,
161,
217],
"button-view-pane":[250,
251,
254],
"button-view-bar":[225,
238,
255],
"tab-view-pane":[250,
251,
254],
"tab-view-border":[145,
165,
189],
"tab-view-button":[225,
238,
255],
"tab-view-button-hover":[250,
251,
254],
"tab-view-button-checked":[250,
251,
254],
"radio-view-pane":[250,
251,
254],
"radio-view-bar":[225,
238,
255],
"radio-view-button-checked":[250,
251,
254],
"list-view":"white",
"list-view-border":[167,
166,
170],
"list-view-header":[242,
242,
242],
"list-view-header-border":[214,
213,
217],
"list-view-header-cell-hover":"white",
"date-chooser":"white",
"date-chooser-title":[98,
133,
186],
"table-pane":"white",
"table-header":[242,
242,
242],
"table-header-border":[214,
213,
217],
"table-header-cell":[235,
234,
219],
"table-header-cell-hover":[255,
255,
255],
"table-focus-indicator":[197,
200,
202],
"table-focus-indicator-active":[179,
217,
255],
"table-row-background-focused-selected":[90,
138,
211],
"table-row-background-focused-selected-blur":[179,
186,
198],
"table-row-background-focused":[221,
238,
255],
"table-row-background-focused-blur":[218,
224,
231],
"table-row-background-selected":[51,
94,
168],
"table-row-background-selected-blur":[152,
158,
168],
"table-row-background-even":[250,
248,
243],
"table-row-background-odd":[255,
255,
255],
"table-row-selected":[255,
255,
255],
"table-row":[0,
0,
0]}});




/* ID: qx.theme.classic.Border */
qx.Theme.define("qx.theme.classic.Border",
{title:"Classic",
borders:{"black":{width:1,
color:"black"},
"white":{width:1,
color:"white"},
"dark-shadow":{width:1,
color:"border-dark-shadow"},
"light-shadow":{width:1,
color:"border-light-shadow"},
"light":{width:1,
color:"border-light"},
"dark":{width:1,
color:"border-dark"},
"tooltip":{width:1,
color:"tooltip-text"},
"inset":{width:2,
color:["border-dark-shadow",
"border-light",
"border-light",
"border-dark-shadow"],
innerColor:["border-dark",
"border-light-shadow",
"border-light-shadow",
"border-dark"]},
"outset":{width:2,
color:["border-light-shadow",
"border-dark",
"border-dark",
"border-light-shadow"],
innerColor:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"]},
"groove":{width:2,
color:["border-dark-shadow",
"border-light",
"border-light",
"border-dark-shadow"],
innerColor:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"]},
"ridge":{width:2,
color:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"],
innerColor:["border-dark-shadow",
"border-light",
"border-light",
"border-dark-shadow"]},
"inset-thin":{width:1,
color:["border-dark-shadow",
"border-light",
"border-light",
"border-dark-shadow"]},
"outset-thin":{width:1,
color:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"]},
"resizer":{width:[1,
3,
3,
1],
color:["border-light",
"border-dark-shadow",
"border-dark-shadow",
"border-light"],
innerColor:["border-light-shadow",
"border-dark",
"border-dark",
"border-light-shadow"]},
"line-left":{widthLeft:1,
colorLeft:"border-dark-shadow"},
"line-right":{widthRight:1,
colorRight:"border-dark-shadow"},
"line-top":{widthTop:1,
colorTop:"border-dark-shadow"},
"line-bottom":{widthBottom:1,
colorBottom:"border-dark-shadow"},
"divider-vertical":{widthTop:1,
colorTop:"border-dark-shadow"},
"divider-horizontal":{widthLeft:1,
colorLeft:"border-dark-shadow"}}});




/* ID: qx.theme.classic.font.Default */
qx.Theme.define("qx.theme.classic.font.Default",
{title:"Classic",
fonts:{"default":{size:11,
family:["Lucida Grande",
"Tahoma",
"Verdana",
"Bitstream Vera Sans",
"Liberation Sans"]},
"bold":{size:11,
family:["Lucida Grande",
"Tahoma",
"Verdana",
"Bitstream Vera Sans",
"Liberation Sans"],
bold:true},
"large":{size:13,
family:["Lucida Grande",
"Tahoma",
"Verdana",
"Bitstream Vera Sans",
"Liberation Sans"]},
"bold-large":{size:13,
family:["Lucida Grande",
"Tahoma",
"Verdana",
"Bitstream Vera Sans",
"Liberation Sans"],
bold:true},
"monospace":{size:11,
family:["Consolas",
"Bitstream Vera Sans Mono",
"Courier New",
"monospace"]}}});




/* ID: qx.util.manager.Value */
qx.Class.define("qx.util.manager.Value",
{type:"abstract",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this._registry={};
this._dynamic={};
},
members:{connect:function(callback,
obj,
value){{};
var key="v"+obj.toHashCode()+"$"+qx.core.Object.toHashCode(callback);
var reg=this._registry;
if(value!==null&&this._preprocess){value=this._preprocess(value);
}if(this.isDynamic(value)){reg[key]={callback:callback,
object:obj,
value:value};
}else if(reg[key]){delete reg[key];
}callback.call(obj,
this.resolveDynamic(value)||value);
},
resolveDynamic:function(value){return this._dynamic[value];
},
isDynamic:function(value){return this._dynamic[value]!==undefined;
},
_updateObjects:function(){var reg=this._registry;
var entry;
for(var key in reg){entry=reg[key];
entry.callback.call(entry.object,
this.resolveDynamic(entry.value));
}}},
destruct:function(){this._disposeFields("_registry",
"_dynamic");
}});




/* ID: qx.io.Alias */
qx.Class.define("qx.io.Alias",
{type:"singleton",
extend:qx.util.manager.Value,
construct:function(){arguments.callee.base.call(this);
this._aliases={};
this.add("static",
qx.core.Setting.get("qx.resourceUri")+"/static");
},
members:{_preprocess:function(value){var dynamics=this._dynamic;
if(dynamics[value]===false){return value;
}else if(dynamics[value]===undefined){if(value.charAt(0)==="/"||value.charAt(0)==="."||value.indexOf("http://")===0||value.indexOf("https://")==="0"||value.indexOf("file://")===0){dynamics[value]=false;
return value;
}var alias=value.substring(0,
value.indexOf("/"));
var resolved=this._aliases[alias];
if(resolved!==undefined){dynamics[value]=resolved+value.substring(alias.length);
}}return value;
},
add:function(alias,
base){this._aliases[alias]=base;
var dynamics=this._dynamic;
var reg=this._registry;
var entry;
var paths={};
for(var path in dynamics){if(path.substring(0,
path.indexOf("/"))===alias){dynamics[path]=base+path.substring(alias.length);
paths[path]=true;
}}for(var key in reg){entry=reg[key];
if(paths[entry.value]){entry.callback.call(entry.object,
dynamics[entry.value]);
}}},
remove:function(alias){delete this._aliases[alias];
},
resolve:function(path){if(path!==null){path=this._preprocess(path);
}return this._dynamic[path]||path;
}},
settings:{"qx.resourceUri":"./resource"},
destruct:function(){this._disposeFields("_aliases");
}});




/* ID: qx.theme.classic.Widget */
qx.Theme.define("qx.theme.classic.Widget",
{title:"Windows",
widgets:{uri:qx.core.Setting.get("qx.resourceUri")+"/widget/Windows"}});




/* ID: qx.theme.classic.Appearance */
qx.Theme.define("qx.theme.classic.Appearance",
{title:"Classic",
appearances:{"empty":{},
"widget":{},
"image":{},
"atom":{},
"popup":{},
"cursor-dnd-move":{style:function(states){return {source:"widget/cursors/move.gif"};
}},
"cursor-dnd-copy":{style:function(states){return {source:"widget/cursors/copy.gif"};
}},
"cursor-dnd-alias":{style:function(states){return {source:"widget/cursors/alias.gif"};
}},
"cursor-dnd-nodrop":{style:function(states){return {source:"widget/cursors/nodrop.gif"};
}},
"label":{style:function(states){return {textColor:states.disabled?"text-disabled":"undefined"};
}},
"client-document":{style:function(states){return {backgroundColor:"background",
textColor:"text",
font:"default"};
}},
"client-document-blocker":{style:function(states){return {cursor:"default",
backgroundImage:"static/image/blank.gif"};
}},
"tool-tip":{include:"popup",
style:function(states){return {backgroundColor:"tooltip",
textColor:"tooltip-text",
border:"tooltip",
padding:[1,
3,
2,
3]};
}},
"iframe":{style:function(states){return {border:"inset"};
}},
"check-box":{style:function(states){return {padding:[2,
3]};
}},
"radio-button":{include:"check-box"},
"button":{style:function(states){if(states.pressed||states.checked||states.abandoned){var border="inset";
}else{var border="outset";
}
if(states.pressed||states.abandoned){var padding=[4,
3,
2,
5];
}else{var padding=[3,
4];
}return {backgroundColor:states.abandoned?"button-abandoned":states.over?"button-hover":"button",
border:border,
padding:padding};
}},
"toolbar":{style:function(states){return {border:"outset-thin",
backgroundColor:"background"};
}},
"toolbar-part":{},
"toolbar-part-handle":{style:function(states){return {width:10};
}},
"toolbar-part-handle-line":{style:function(states){return {top:2,
left:3,
bottom:2,
width:4,
border:"outset-thin"};
}},
"toolbar-separator":{style:function(states){return {width:8};
}},
"toolbar-separator-line":{style:function(states){return {top:2,
left:3,
width:"auto",
bottom:2,
border:"divider-horizontal"};
}},
"toolbar-button":{style:function(states){if(states.pressed||states.checked||states.abandoned){var border="inset-thin";
var padding=[3,
2,
1,
4];
}else if(states.over){var border="outset-thin";
var padding=[2,
3];
}else{var border="undefined";
var padding=[3,
4];
}return {cursor:"default",
spacing:4,
width:"auto",
border:border,
padding:padding,
verticalChildrenAlign:"middle",
backgroundColor:states.abandoned?"button-abandoned":"button",
backgroundImage:states.checked&&!states.over?"static/image/dotted_white.gif":null};
}},
"button-view":{style:function(states){return {border:"dark-shadow"};
}},
"button-view-pane":{style:function(states){return {backgroundColor:"button-view-pane",
padding:10};
}},
"button-view-page":{},
"button-view-bar":{style:function(states){var padding="undefined";
var border="undefined";
var clazz=qx.ui.core.Border;
if(states.barTop){padding=[1,
0];
border=clazz.fromConfig({bottom:[1,
"solid",
"border-dark-shadow"]});
}else if(states.barBottom){padding=[1,
0];
border=clazz.fromConfig({top:[1,
"solid",
"border-dark-shadow"]});
}else if(states.barLeft){padding=[0,
1];
border=clazz.fromConfig({right:[1,
"solid",
"border-dark-shadow"]});
}else if(states.barRight){padding=[0,
1];
border=clazz.fromConfig({left:[1,
"solid",
"border-dark-shadow"]});
}return {backgroundColor:"button-view-bar",
padding:padding||"undefined",
border:border||"undefined"};
}},
"button-view-button":{style:function(states){var margin,
width,
height,
padding,
border;
var clazz=qx.ui.core.Border;
if(states.checked||states.over){border=new qx.ui.core.Border(1,
"solid",
"border-dark-shadow");
if(states.barTop){border.setBottom(3,
"solid",
"effect");
padding=[3,
6,
1,
6];
}else if(states.barBottom){border.setTop(3,
"solid",
"effect");
padding=[1,
6,
3,
6];
}else if(states.barLeft){border.setRight(3,
"solid",
"effect");
padding=[3,
4,
3,
6];
}else{border.setLeft(3,
"solid",
"effect");
padding=[3,
6,
3,
4];
}}else{border="undefined";
padding=[4,
7];
}
if(states.barTop||states.barBottom){margin=[0,
1];
width="auto";
height=null;
}else{margin=[1,
0];
height="auto";
width=null;
}return {backgroundColor:states.checked?"button-view-pane":"undefined",
iconPosition:"top",
margin:margin,
width:width,
height:height,
border:border,
padding:padding||"undefined"};
}},
"tab-view":{style:function(states){return {spacing:-1};
}},
"tab-view-bar":{},
"tab-view-pane":{style:function(states){return {backgroundColor:"tab-view-pane",
border:new qx.ui.core.Border(1,
"solid",
"tab-view-border"),
padding:10};
}},
"tab-view-page":{},
"tab-view-button":{style:function(states){var paddingTop,
paddingBottom,
paddingLeft,
paddingRight;
var marginTop,
marginBottom,
marginRight,
marginLeft;
var backgroundColor,
zIndex,
border;
marginTop=0;
marginBottom=0;
border=new qx.ui.core.Border(1,
"solid",
"tab-view-border");
if(states.checked){paddingTop=2;
paddingBottom=4;
paddingLeft=7;
paddingRight=8;
marginRight=-1;
marginLeft=-2;
backgroundColor="tab-view-button-checked";
if(states.barTop){border.setWidthBottom(0);
border.setTop(3,
"solid",
"effect");
}else{border.setWidthTop(0);
border.setBottom(3,
"solid",
"effect");
}
if(states.alignLeft){if(states.firstChild){paddingLeft=6;
paddingRight=7;
marginLeft=0;
}}else{if(states.lastChild){paddingLeft=8;
paddingRight=5;
marginRight=0;
}}}else{paddingTop=2;
paddingBottom=2;
paddingLeft=5;
paddingRight=6;
marginRight=1;
marginLeft=0;
backgroundColor=states.over?"tab-view-button-hover":"tab-view-button";
if(states.barTop){border.setWidthBottom(0);
marginTop=3;
marginBottom=1;
}else{border.setWidthTop(0);
marginTop=1;
marginBottom=3;
}
if(states.alignLeft){if(states.firstChild){paddingLeft=6;
paddingRight=5;
}}else{if(states.lastChild){paddingLeft=6;
paddingRight=5;
marginRight=0;
}}}return {padding:[paddingTop,
paddingRight,
paddingBottom,
paddingLeft],
margin:[marginTop,
marginRight,
marginBottom,
marginLeft],
border:border,
backgroundColor:backgroundColor};
}},
"radio-view":{include:"button-view"},
"radio-view-pane":{style:function(states){return {backgroundColor:"radio-view-pane"};
}},
"radio-view-page":{},
"radio-view-bar":{style:function(states){return {backgroundColor:"radio-view-bar",
padding:[1,
0],
border:states.barTop?qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"border-dark-shadow"]}):qx.ui.core.Border.fromConfig({top:[1,
"solid",
"border-dark-shadow"]})};
}},
"radio-view-button":{style:function(states){var border,
padding;
if(states.checked||states.over){border=new qx.ui.core.Border(1,
"solid",
"border-dark-shadow");
border.setLeft(3,
"solid",
"effect");
padding=[2,
6,
2,
4];
}else{border="undefined";
padding=[3,
7];
}return {backgroundColor:states.checked?"radio-view-button-checked":"undefined",
iconPosition:"left",
margin:[0,
1],
width:"auto",
opacity:states.checked?1.0:0.3,
border:border,
padding:padding};
}},
"window":{style:function(states){return {backgroundColor:"background",
padding:1,
border:states.maximized?"undefined":"outset"};
}},
"window-captionbar":{style:function(states){return {padding:[1,
2,
2],
verticalChildrenAlign:"middle",
backgroundColor:states.active?"window-active-caption":"window-inactive-caption",
textColor:states.active?"window-active-caption-text":"window-inactive-caption-text"};
}},
"window-resize-frame":{style:function(states){return {border:"dark-shadow"};
}},
"window-captionbar-icon":{style:function(states){return {marginRight:2};
}},
"window-captionbar-title":{style:function(states){return {cursor:"default",
font:"bold",
marginRight:2};
}},
"window-captionbar-button":{include:"button",
style:function(states){return {padding:states.pressed||states.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window-captionbar-minimize-button":{include:"window-captionbar-button",
style:function(states){return {icon:"widget/window/minimize.gif"};
}},
"window-captionbar-restore-button":{include:"window-captionbar-button",
style:function(states){return {icon:"widget/window/restore.gif"};
}},
"window-captionbar-maximize-button":{include:"window-captionbar-button",
style:function(states){return {icon:"widget/window/maximize.gif"};
}},
"window-captionbar-close-button":{include:"window-captionbar-button",
style:function(states){return {marginLeft:2,
icon:"widget/window/close.gif"};
}},
"window-statusbar":{style:function(states){return {border:"inset-thin"};
}},
"window-statusbar-text":{style:function(states){return {padding:[1,
4]};
}},
"color-popup":{style:function(states){return {padding:4,
border:"outset",
backgroundColor:"background"};
}},
"resizer":{style:function(states){return {border:"outset"};
}},
"resizer-frame":{style:function(states){return {border:"dark-shadow"};
}},
"menu":{style:function(states){return {backgroundColor:"menu",
border:"outset",
padding:1};
}},
"menu-layout":{},
"menu-button":{style:function(states){return {spacing:2,
padding:[2,
4],
verticalChildrenAlign:"middle",
backgroundColor:states.over?"selected":"undefined",
textColor:states.over?"text-selected":"undefined"};
}},
"menu-button-arrow":{style:function(states){return {source:"widget/arrows/next.gif"};
}},
"menu-check-box":{include:"menu-button",
style:function(states){return {icon:states.checked?"widget/menu/checkbox.gif":"static/image/blank.gif"};
}},
"menu-radio-button":{include:"menu-button",
style:function(states){return {icon:states.checked?"widget/menu/radiobutton.gif":"static/image/blank.gif"};
}},
"menu-separator":{style:function(states){return {marginTop:3,
marginBottom:2,
paddingLeft:3,
paddingRight:3};
}},
"menu-separator-line":{style:function(states){return {right:0,
left:0,
height:"auto",
border:"divider-vertical"};
}},
"list":{style:function(states){return {border:"inset-thin",
backgroundColor:"list"};
}},
"list-item":{style:function(states){return {horizontalChildrenAlign:"left",
verticalChildrenAlign:"middle",
spacing:4,
padding:[3,
5],
backgroundColor:states.selected?"selected":"undefined",
textColor:states.selected?"text-selected":"undefined"};
}},
"text-field":{style:function(states){return {border:"inset",
padding:[1,
3],
textColor:states.disabled?"text-disabled":"undefined",
backgroundColor:"field"};
}},
"text-area":{include:"text-field"},
"combo-box":{style:function(states){return {border:"inset",
backgroundColor:"field"};
}},
"combo-box-list":{include:"list",
style:function(states){return {border:"undefined",
overflow:"scrollY"};
}},
"combo-box-popup":{include:"list",
style:function(states){return {maxHeight:150,
border:"dark-shadow"};
}},
"combo-box-text-field":{include:"text-field",
style:function(states){return {border:"undefined",
backgroundColor:"transparent"};
}},
"combo-box-button":{include:"button",
style:function(states){return {padding:[0,
3,
0,
2],
icon:"widget/arrows/down.gif"};
}},
"combo-box-ex":{style:function(states){return {border:"inset",
backgroundColor:"field"};
}},
"combo-box-ex-list":{include:"list",
style:function(states){return {border:"undefined",
edge:0};
}},
"combo-box-ex-text-field":{include:"text-field",
style:function(states){return {border:"undefined",
minWidth:30,
width:100,
backgroundColor:"transparent"};
}},
"combo-box-ex-popup":{include:"list",
style:function(states){return {border:"resizer"};
}},
"combo-box-ex-button":{include:"combo-box-button"},
"treevirtual-focus-indicator":{include:"empty"},
"tree-element":{style:function(states){return {height:16,
verticalChildrenAlign:"middle"};
}},
"tree-element-icon":{style:function(states){return {width:16,
height:16};
}},
"tree-element-label":{include:"label",
style:function(states){return {marginLeft:3,
height:15,
padding:2,
backgroundColor:states.selected?"selected":"undefined",
textColor:states.selected?"text-selected":"undefined"};
}},
"tree-folder":{include:"tree-element"},
"tree-folder-icon":{include:"tree-element-icon"},
"tree-folder-label":{include:"tree-element-label"},
"tree":{include:"tree-folder"},
"tree-icon":{include:"tree-folder-icon"},
"tree-label":{include:"tree-folder-label"},
"list-view":{style:function(states){return {border:new qx.ui.core.Border(1,
"solid",
"list-view-border"),
backgroundColor:"list-view"};
}},
"list-view-pane":{style:function(states){return {horizontalSpacing:1};
}},
"list-view-header":{style:function(states){return {border:qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"list-view-header-border"]}),
backgroundColor:"list-view-header"};
}},
"list-view-header-cell":{style:function(states){return {padding:[2,
6],
spacing:4,
backgroundColor:states.over?"list-view-header-cell-hover":"undefined",
paddingBottom:states.over?0:2,
border:states.over?new qx.ui.core.Border.fromConfig({bottom:[2,
"solid",
"effect"]}):"undefined"};
}},
"list-view-header-cell-arrow-up":{style:function(states){return {source:"widget/arrows/up.gif"};
}},
"list-view-header-cell-arrow-down":{style:function(states){return {source:"widget/arrows/down.gif"};
}},
"list-view-header-separator":{style:function(states){return {backgroundColor:"list-view-header-border",
width:1,
marginTop:1,
marginBottom:1};
}},
"list-view-content-cell":{style:function(states){return {cursor:"default",
backgroundColor:states.selected?"selected":"undefined",
textColor:states.selected?"text-selected":"undefined",
border:states.lead&&
!states.selected?
new qx.ui.core.Border.fromConfig({top:[1,
"solid",
"effect"],
bottom:[1,
"solid",
"effect"]}):"undefined",
marginTop:states.lead&&!states.selected?0:1,
marginBottom:states.lead&&!states.selected?0:1};
}},
"list-view-content-cell-image":{include:"list-view-content-cell",
style:function(states){return {paddingLeft:6,
paddingRight:6};
}},
"list-view-content-cell-text":{include:"list-view-content-cell",
style:function(states){return {overflow:"hidden",
paddingLeft:6,
paddingRight:6};
}},
"list-view-content-cell-html":{include:"list-view-content-cell-text"},
"list-view-content-cell-icon-html":{include:"list-view-content-cell-text"},
"list-view-content-cell-link":{include:"list-view-content-cell-text"},
"group-box":{style:function(states){return {backgroundColor:"background"};
}},
"group-box-legend":{style:function(states){return {location:[10,
1],
backgroundColor:"background",
paddingRight:3,
paddingLeft:4,
marginRight:10};
}},
"group-box-frame":{style:function(states){return {edge:[8,
0,
0],
padding:[12,
9],
border:"groove"};
}},
"check-box-group-box-legend":{style:function(states){return {location:[10,
1],
backgroundColor:"background",
paddingRight:3};
}},
"radio-button-group-box-legend":{include:"check-box-group-box-legend"},
"spinner":{style:function(states){return {border:"inset",
backgroundColor:"field"};
}},
"spinner-text-field":{include:"text-field",
style:function(states){return {backgroundColor:"transparent"};
}},
"spinner-button":{style:function(states){return {width:16,
backgroundColor:"background",
paddingLeft:3,
border:states.pressed||states.checked||states.abandoned?"inset":"outset"};
}},
"spinner-button-up":{include:"spinner-button",
style:function(states){return {source:"widget/arrows/up_small.gif"};
}},
"spinner-button-down":{include:"spinner-button",
style:function(states){return {paddingTop:1,
source:"widget/arrows/down_small.gif"};
}},
"colorselector":{style:function(states){return {backgroundColor:"background",
border:"outset"};
}},
"datechooser-toolbar-button":{style:function(states){var result={backgroundColor:states.abandoned?"button-abandoned":"button",
backgroundImage:(states.checked&&!states.over)?"static/image/dotted_white.gif":null,
spacing:4,
width:"auto",
verticalChildrenAlign:"middle"};
if(states.pressed||states.checked||states.abandoned){result.border="inset-thin";
}else if(states.over){result.border="outset-thin";
}else{result.border="undefined";
}
if(states.pressed||states.checked||states.abandoned){result.padding=[2,
0,
0,
2];
}else if(states.over){result.padding=1;
}else{result.padding=2;
}return result;
}},
"datechooser-monthyear":{style:function(states){return {font:"large",
textAlign:"center",
verticalAlign:"middle"};
}},
"datechooser-datepane":{style:function(states){return {border:new qx.ui.core.Border(1,
"solid",
"gray"),
backgroundColor:"date-chooser"};
}},
"datechooser-weekday":{style:function(states){var border=qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"gray"]});
return {border:border,
font:"bold-large",
textAlign:"center",
textColor:states.weekend?"date-chooser-title":"date-chooser",
backgroundColor:states.weekend?"date-chooser":"date-chooser-title"};
}},
"datechooser-day":{style:function(states){return {textAlign:"center",
verticalAlign:"middle",
border:states.today?"black":"undefined",
textColor:states.selected?"text-selected":states.otherMonth?"text-disabled":"undefined",
backgroundColor:states.selected?"selected":"undefined",
padding:[2,
4]};
}},
"datechooser-week":{style:function(states){if(states.header){var border=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"gray"],
bottom:[1,
"solid",
"gray"]});
}else{var border=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"gray"]});
}return {textAlign:"center",
textColor:"date-chooser-title",
padding:[2,
4],
border:border};
}},
"table-focus-statusbar":{style:function(states){return {border:qx.ui.core.Border.fromConfig({top:[1,
"solid",
"border-dark-shadow"]}),
paddingLeft:2,
paddingRight:2};
}},
"table-focus-indicator":{style:function(states){var border;
if(states.editing){border=new qx.ui.core.Border(2,
"solid",
"table-focus-indicator-active");
}else if(states.tableHasFocus){border=new qx.ui.core.Border(3,
"solid",
"table-focus-indicator-active");
}else{border=new qx.ui.core.Border(3,
"solid",
"table-focus-indicator");
}return {border:border};
}},
"table-editor-textfield":{include:"text-field",
style:function(states){return {border:"undefined",
padding:[0,
2]};
}},
"table-pane":{style:function(states){return {backgroundColor:"table-pane"};
}},
"table-header":{style:function(states){return {border:qx.ui.core.Border.fromConfig({bottom:[1,
"solid",
"table-header-border"]}),
backgroundColor:"table-header"};
}},
"table-menubar-button":{style:function(states){if(states.pressed||states.checked||states.abandoned){var border="inset-thin";
var padding=[3,
2,
1,
4];
}else if(states.over){var border="outset-thin";
var padding=[2,
3];
}else{var border="undefined";
var padding=[3,
4];
}return {cursor:"default",
spacing:4,
width:"auto",
border:border,
padding:padding,
verticalChildrenAlign:"middle",
backgroundColor:states.abandoned?"button-abandoned":"button",
icon:"widget/table/selectColumnOrder.png"};
}},
"table-header-cell":{style:function(states){var border,
backgroundColor,
paddingBottom;
if(states.mouseover){border=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"table-header-border"],
bottom:[2,
"solid",
"effect"]});
paddingBottom=0;
backgroundColor="table-header-cell-hover";
}else{border=qx.ui.core.Border.fromConfig({right:[1,
"solid",
"table-header-border"]});
paddingBottom=2;
backgroundColor="table-header-cell";
}return {paddingLeft:2,
paddingRight:2,
paddingBottom:paddingBottom,
spacing:2,
overflow:"hidden",
iconPosition:"right",
verticalChildrenAlign:"middle",
border:border,
backgroundColor:backgroundColor,
icon:states.sorted?(states.sortedAscending?"widget/table/ascending.png":"widget/table/descending.png"):null,
horizontalChildrenAlign:"left"};
}},
"table-row":{style:function(states){return {font:"default",
bgcolFocusedSelected:"table-row-background-focused-selected",
bgcolFocusedSelectedBlur:"table-row-background-focused-selected-blur",
bgcolFocused:"table-row-background-focused",
bgcolFocusedBlur:"table-row-background-focused-blur",
bgcolSelected:"table-row-background-selected",
bgcolSelectedBlur:"table-row-background-selected-blur",
bgcolEven:"table-row-background-even",
bgcolOdd:"table-row-background-odd",
colSelected:"table-row-selected",
colNormal:"table-row"};
}},
"splitpane":{style:function(states){return {overflow:"hidden",
splitterSize:8,
backgroundColor:"background"};
}},
"splitpane-splitter":{style:function(states){return {cursor:states.horizontal?"col-resize":"row-resize"};
}},
"splitpane-slider":{style:function(states){return {opacity:0.5,
backgroundColor:"background"};
}},
"splitpane-knob":{style:function(states){if(states.horizontal){return {opacity:states.dragging?0.5:1.0,
top:"50%",
left:"50%",
cursor:"col-resize",
source:"widget/splitpane/knob-horizontal.png",
marginLeft:-2,
marginTop:-7};
}else{return {opacity:states.dragging?0.5:1.0,
top:"50%",
left:"50%",
source:"widget/splitpane/knob-vertical.png",
marginTop:-2,
marginLeft:-7,
cursor:"row-resize"};
}}},
"scrollbar-blocker":{style:function(states){return {backgroundColor:"black",
opacity:0.2};
}}}});




/* ID: qx.theme.icon.Nuvola */
qx.Theme.define("qx.theme.icon.Nuvola",
{title:"Nuvola",
icons:{uri:qx.core.Setting.get("qx.resourceUri")+"/icon/Nuvola"}});




/* ID: qx.theme.ClassicRoyale */
qx.Theme.define("qx.theme.ClassicRoyale",
{title:"Classic Royale",
meta:{color:qx.theme.classic.color.Royale,
border:qx.theme.classic.Border,
font:qx.theme.classic.font.Default,
widget:qx.theme.classic.Widget,
appearance:qx.theme.classic.Appearance,
icon:qx.theme.icon.Nuvola}});




/* ID: qx.application.Gui */
qx.Class.define("qx.application.Gui",
{extend:qx.core.Target,
implement:qx.application.IApplication,
properties:{uiReady:{check:"Boolean",
init:false}},
members:{main:function(){this._initializedMain=true;
qx.ui.core.Widget.initScrollbarWidth();
qx.theme.manager.Meta.getInstance().initialize();
qx.event.handler.EventHandler.getInstance();
qx.ui.core.ClientDocument.getInstance();
qx.client.Timer.once(this._preload,
this,
0);
},
close:function(){},
terminate:function(){},
_preload:function(){this.debug("preloading visible images...");
this.__preloader=new qx.io.image.PreloaderSystem(qx.io.image.Manager.getInstance().getVisibleImages(),
this._preloaderDone,
this);
this.__preloader.start();
},
_preloaderDone:function(){this.setUiReady(true);
this.__preloader.dispose();
this.__preloader=null;
var start=(new Date).valueOf();
qx.ui.core.Widget.flushGlobalQueues();
this.info("render runtime: "+(new Date-start)+"ms");
qx.event.handler.EventHandler.getInstance().attachEvents();
qx.client.Timer.once(this._postload,
this,
100);
},
_postload:function(){this.debug("preloading hidden images...");
this.__postloader=new qx.io.image.PreloaderSystem(qx.io.image.Manager.getInstance().getHiddenImages(),
this._postloaderDone,
this);
this.__postloader.start();
},
_postloaderDone:function(){this.__postloader.dispose();
this.__postloader=null;
}}});




/* ID: qx.ui.core.Widget */
qx.Class.define("qx.ui.core.Widget",
{extend:qx.core.Target,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
this._layoutChanges={};
},
events:{"beforeAppear":"qx.event.type.Event",
"appear":"qx.event.type.Event",
"beforeDisappear":"qx.event.type.Event",
"disappear":"qx.event.type.Event",
"beforeInsertDom":"qx.event.type.Event",
"insertDom":"qx.event.type.Event",
"beforeRemoveDom":"qx.event.type.Event",
"removeDom":"qx.event.type.Event",
"create":"qx.event.type.Event",
"execute":"qx.event.type.Event",
"mouseover":"qx.event.type.MouseEvent",
"mousemove":"qx.event.type.MouseEvent",
"mouseout":"qx.event.type.MouseEvent",
"mousedown":"qx.event.type.MouseEvent",
"mouseup":"qx.event.type.MouseEvent",
"mousewheel":"qx.event.type.MouseEvent",
"click":"qx.event.type.MouseEvent",
"dblclick":"qx.event.type.MouseEvent",
"contextmenu":"qx.event.type.MouseEvent",
"keydown":"qx.event.type.KeyEvent",
"keypress":"qx.event.type.KeyEvent",
"keyinput":"qx.event.type.KeyEvent",
"keyup":"qx.event.type.KeyEvent",
"focusout":"qx.event.type.FocusEvent",
"focusin":"qx.event.type.FocusEvent",
"blur":"qx.event.type.FocusEvent",
"focus":"qx.event.type.FocusEvent",
"dragdrop":"qx.event.type.DragEvent",
"dragout":"qx.event.type.DragEvent",
"dragover":"qx.event.type.DragEvent",
"dragmove":"qx.event.type.DragEvent",
"dragstart":"qx.event.type.DragEvent",
"dragend":"qx.event.type.DragEvent"},
statics:{create:function(clazz,
appearance){clazz._appearance=appearance;
return new clazz;
},
SCROLLBAR_SIZE:null,
_autoFlushTimeout:null,
_initAutoFlush:function(){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._autoFlushTimeout=window.setTimeout(qx.ui.core.Widget._autoFlushHelper,
0);
}},
_removeAutoFlush:function(){if(qx.ui.core.Widget._autoFlushTimeout!=null){window.clearTimeout(qx.ui.core.Widget._autoFlushTimeout);
qx.ui.core.Widget._autoFlushTimeout=null;
}},
_autoFlushHelper:function(){qx.ui.core.Widget._autoFlushTimeout=null;
if(!qx.core.Object.inGlobalDispose()){qx.ui.core.Widget.flushGlobalQueues();
}},
flushGlobalQueues:function(){if(qx.ui.core.Widget._autoFlushTimeout!=null){qx.ui.core.Widget._removeAutoFlush();
}
if(qx.ui.core.Widget._inFlushGlobalQueues||!qx.core.Init.getInstance().getApplication().getUiReady()){return;
}qx.ui.core.Widget._inFlushGlobalQueues=true;
qx.ui.core.Widget.flushGlobalWidgetQueue();
qx.ui.core.Widget.flushGlobalStateQueue();
qx.ui.core.Widget.flushGlobalElementQueue();
qx.ui.core.Widget.flushGlobalJobQueue();
qx.ui.core.Widget.flushGlobalLayoutQueue();
qx.ui.core.Widget.flushGlobalDisplayQueue();
delete qx.ui.core.Widget._inFlushGlobalQueues;
},
_globalWidgetQueue:[],
addToGlobalWidgetQueue:function(vWidget){if(!vWidget._isInGlobalWidgetQueue&&vWidget._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalWidgetQueue.push(vWidget);
vWidget._isInGlobalWidgetQueue=true;
}},
removeFromGlobalWidgetQueue:function(vWidget){if(vWidget._isInGlobalWidgetQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalWidgetQueue,
vWidget);
delete vWidget._isInGlobalWidgetQueue;
}},
flushGlobalWidgetQueue:function(){var vQueue=qx.ui.core.Widget._globalWidgetQueue,
vLength,
vWidget;
while((vLength=vQueue.length)>0){for(var i=0;i<vLength;i++){vWidget=vQueue[i];
vWidget.flushWidgetQueue();
delete vWidget._isInGlobalWidgetQueue;
}vQueue.splice(0,
vLength);
}},
_globalElementQueue:[],
addToGlobalElementQueue:function(vWidget){if(!vWidget._isInGlobalElementQueue&&vWidget._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalElementQueue.push(vWidget);
vWidget._isInGlobalElementQueue=true;
}},
removeFromGlobalElementQueue:function(vWidget){if(vWidget._isInGlobalElementQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalElementQueue,
vWidget);
delete vWidget._isInGlobalElementQueue;
}},
flushGlobalElementQueue:function(){var vQueue=qx.ui.core.Widget._globalElementQueue,
vLength,
vWidget;
while((vLength=vQueue.length)>0){for(var i=0;i<vLength;i++){vWidget=vQueue[i];
vWidget._createElementImpl();
delete vWidget._isInGlobalElementQueue;
}vQueue.splice(0,
vLength);
}},
_globalStateQueue:[],
addToGlobalStateQueue:function(vWidget){if(!vWidget._isInGlobalStateQueue&&vWidget._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalStateQueue.push(vWidget);
vWidget._isInGlobalStateQueue=true;
}},
removeFromGlobalStateQueue:function(vWidget){if(vWidget._isInGlobalStateQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalStateQueue,
vWidget);
delete vWidget._isInGlobalStateQueue;
}},
flushGlobalStateQueue:function(){var vQueue=qx.ui.core.Widget._globalStateQueue,
vLength,
vWidget;
while((vLength=vQueue.length)>0){for(var i=0;i<vLength;i++){vWidget=vQueue[i];
vWidget._renderAppearance();
delete vWidget._isInGlobalStateQueue;
}vQueue.splice(0,
vLength);
}},
_globalJobQueue:[],
addToGlobalJobQueue:function(vWidget){if(!vWidget._isInGlobalJobQueue&&vWidget._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalJobQueue.push(vWidget);
vWidget._isInGlobalJobQueue=true;
}},
removeFromGlobalJobQueue:function(vWidget){if(vWidget._isInGlobalJobQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalJobQueue,
vWidget);
delete vWidget._isInGlobalJobQueue;
}},
flushGlobalJobQueue:function(){var vQueue=qx.ui.core.Widget._globalJobQueue,
vLength,
vWidget;
while((vLength=vQueue.length)>0){for(var i=0;i<vLength;i++){vWidget=vQueue[i];
vWidget._flushJobQueue(vWidget._jobQueue);
delete vWidget._isInGlobalJobQueue;
}vQueue.splice(0,
vLength);
}},
_globalLayoutQueue:[],
addToGlobalLayoutQueue:function(vParent){if(!vParent._isInGlobalLayoutQueue&&vParent._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}qx.ui.core.Widget._globalLayoutQueue.push(vParent);
vParent._isInGlobalLayoutQueue=true;
}},
removeFromGlobalLayoutQueue:function(vParent){if(vParent._isInGlobalLayoutQueue){qx.lang.Array.remove(qx.ui.core.Widget._globalLayoutQueue,
vParent);
delete vParent._isInGlobalLayoutQueue;
}},
flushGlobalLayoutQueue:function(){var vQueue=qx.ui.core.Widget._globalLayoutQueue,
vLength,
vParent;
while((vLength=vQueue.length)>0){for(var i=0;i<vLength;i++){vParent=vQueue[i];
vParent._flushChildrenQueue();
delete vParent._isInGlobalLayoutQueue;
}vQueue.splice(0,
vLength);
}},
_fastGlobalDisplayQueue:[],
_lazyGlobalDisplayQueues:{},
addToGlobalDisplayQueue:function(vWidget){if(!vWidget._isInGlobalDisplayQueue&&vWidget._isDisplayable){if(qx.ui.core.Widget._autoFlushTimeout==null){qx.ui.core.Widget._initAutoFlush();
}var vParent=vWidget.getParent();
if(vParent.isSeeable()){var vKey=vParent.toHashCode();
if(qx.ui.core.Widget._lazyGlobalDisplayQueues[vKey]){qx.ui.core.Widget._lazyGlobalDisplayQueues[vKey].push(vWidget);
}else{qx.ui.core.Widget._lazyGlobalDisplayQueues[vKey]=[vWidget];
}}else{qx.ui.core.Widget._fastGlobalDisplayQueue.push(vWidget);
}vWidget._isInGlobalDisplayQueue=true;
}},
removeFromGlobalDisplayQueue:function(vWidget){},
flushGlobalDisplayQueue:function(){var vKey,
vLazyQueue,
vWidget,
vFragment;
var vFastQueue=qx.ui.core.Widget._fastGlobalDisplayQueue;
var vLazyQueues=qx.ui.core.Widget._lazyGlobalDisplayQueues;
for(var i=0,
l=vFastQueue.length;i<l;i++){vWidget=vFastQueue[i];
vWidget.getParent()._getTargetNode().appendChild(vWidget.getElement());
}if(qx.Class.isDefined("qx.ui.basic.Inline")){for(vKey in vLazyQueues){vLazyQueue=vLazyQueues[vKey];
for(var i=0;i<vLazyQueue.length;i++){vWidget=vLazyQueue[i];
if(vWidget instanceof qx.ui.basic.Inline){vWidget._beforeInsertDom();
try{document.getElementById(vWidget.getInlineNodeId()).appendChild(vWidget.getElement());
}catch(ex){vWidget.debug("Could not append to inline id: "+vWidget.getInlineNodeId(),
ex);
}vWidget._afterInsertDom();
vWidget._afterAppear();
qx.lang.Array.remove(vLazyQueue,
vWidget);
i--;
delete vWidget._isInGlobalDisplayQueue;
}}}}for(vKey in vLazyQueues){vLazyQueue=vLazyQueues[vKey];
if(document.createDocumentFragment&&vLazyQueue.length>=3){vFragment=document.createDocumentFragment();
for(var i=0,
l=vLazyQueue.length;i<l;i++){vWidget=vLazyQueue[i];
vWidget._beforeInsertDom();
vFragment.appendChild(vWidget.getElement());
}vLazyQueue[0].getParent()._getTargetNode().appendChild(vFragment);
for(var i=0,
l=vLazyQueue.length;i<l;i++){vWidget=vLazyQueue[i];
vWidget._afterInsertDom();
}}else{for(var i=0,
l=vLazyQueue.length;i<l;i++){vWidget=vLazyQueue[i];
vWidget._beforeInsertDom();
vWidget.getParent()._getTargetNode().appendChild(vWidget.getElement());
vWidget._afterInsertDom();
}}}for(vKey in vLazyQueues){vLazyQueue=vLazyQueues[vKey];
for(var i=0,
l=vLazyQueue.length;i<l;i++){vWidget=vLazyQueue[i];
if(vWidget.getVisibility()){vWidget._afterAppear();
}delete vWidget._isInGlobalDisplayQueue;
}delete vLazyQueues[vKey];
}for(var i=0,
l=vFastQueue.length;i<l;i++){delete vFastQueue[i]._isInGlobalDisplayQueue;
}qx.lang.Array.removeAll(vFastQueue);
},
getActiveSiblingHelperIgnore:function(vIgnoreClasses,
vInstance){for(var j=0;j<vIgnoreClasses.length;j++){if(vInstance instanceof vIgnoreClasses[j]){return true;
}}return false;
},
getActiveSiblingHelper:function(vObject,
vParent,
vCalc,
vIgnoreClasses,
vMode){if(!vIgnoreClasses){vIgnoreClasses=[];
}var vChilds=vParent.getChildren();
var vPosition=vMode==null?vChilds.indexOf(vObject)+vCalc:vMode==="first"?0:vChilds.length-1;
var vInstance=vChilds[vPosition];
while(vInstance&&(!vInstance.getEnabled()||qx.ui.core.Widget.getActiveSiblingHelperIgnore(vIgnoreClasses,
vInstance))){vPosition+=vCalc;
vInstance=vChilds[vPosition];
if(!vInstance){return null;
}}return vInstance;
},
__initApplyMethods:function(members){var applyRuntime="_renderRuntime";
var resetRuntime="_resetRuntime";
var style="this._style.";
var cssValue="=((v==null)?0:v)+'px'";
var parameter="v";
var properties=["left",
"right",
"top",
"bottom",
"width",
"height",
"minWidth",
"maxWidth",
"minHeight",
"maxHeight"];
var propertiesUpper=["Left",
"Right",
"Top",
"Bottom",
"Width",
"Height",
"MinWidth",
"MaxWidth",
"MinHeight",
"MaxHeight"];
var applyMargin=applyRuntime+"Margin";
var resetMargin=resetRuntime+"Margin";
var styleMargin=style+"margin";
for(var i=0;i<4;i++){members[applyMargin+propertiesUpper[i]]=new Function(parameter,
styleMargin+propertiesUpper[i]+cssValue);
members[resetMargin+propertiesUpper[i]]=new Function(styleMargin+propertiesUpper[i]+"=''");
}var applyPadding=applyRuntime+"Padding";
var resetPadding=resetRuntime+"Padding";
var stylePadding=style+"padding";
if(qx.core.Variant.isSet("qx.client",
"gecko")){for(var i=0;i<4;i++){members[applyPadding+propertiesUpper[i]]=new Function(parameter,
stylePadding+propertiesUpper[i]+cssValue);
members[resetPadding+propertiesUpper[i]]=new Function(stylePadding+propertiesUpper[i]+"=''");
}}else{for(var i=0;i<4;i++){members[applyPadding+propertiesUpper[i]]=new Function(parameter,
"this.setStyleProperty('padding"+propertiesUpper[i]+"', ((v==null)?0:v)+'px')");
members[resetPadding+propertiesUpper[i]]=new Function("this.removeStyleProperty('padding"+propertiesUpper[i]+"')");
}}for(var i=0;i<properties.length;i++){members[applyRuntime+propertiesUpper[i]]=new Function(parameter,
style+properties[i]+cssValue);
members[resetRuntime+propertiesUpper[i]]=new Function(style+properties[i]+"=''");
}},
TYPE_NULL:0,
TYPE_PIXEL:1,
TYPE_PERCENT:2,
TYPE_AUTO:3,
TYPE_FLEX:4,
layoutPropertyTypes:{},
__initLayoutProperties:function(statics){var a=["width",
"height",
"minWidth",
"maxWidth",
"minHeight",
"maxHeight",
"left",
"right",
"top",
"bottom"];
for(var i=0,
l=a.length,
p,
b,
t;i<l;i++){p=a[i];
b="_computed"+qx.lang.String.toFirstUp(p);
t=b+"Type";
statics.layoutPropertyTypes[p]={dataType:t,
dataParsed:b+"Parsed",
dataValue:b+"Value",
typePixel:t+"Pixel",
typePercent:t+"Percent",
typeAuto:t+"Auto",
typeFlex:t+"Flex",
typeNull:t+"Null"};
}},
initScrollbarWidth:function(){var t=document.createElement("div");
var s=t.style;
s.height=s.width="100px";
s.overflow="scroll";
document.body.appendChild(t);
var c=qx.html.Dimension.getScrollBarSizeRight(t);
qx.ui.core.Widget.SCROLLBAR_SIZE=c?c:16;
document.body.removeChild(t);
}},
properties:{enabled:{init:"inherit",
check:"Boolean",
inheritable:true,
apply:"_applyEnabled",
event:"changeEnabled"},
parent:{check:"qx.ui.core.Parent",
nullable:true,
event:"changeParent",
apply:"_applyParent"},
element:{check:"Element",
nullable:true,
apply:"_applyElement",
event:"changeElement"},
visibility:{check:"Boolean",
init:true,
apply:"_applyVisibility",
event:"changeVisibility"},
display:{check:"Boolean",
init:true,
apply:"_applyDisplay",
event:"changeDisplay"},
anonymous:{check:"Boolean",
init:false,
event:"changeAnonymous"},
horizontalAlign:{check:["left",
"center",
"right"],
themeable:true,
nullable:true},
verticalAlign:{check:["top",
"middle",
"bottom"],
themeable:true,
nullable:true},
allowStretchX:{check:"Boolean",
init:true},
allowStretchY:{check:"Boolean",
init:true},
zIndex:{check:"Number",
apply:"_applyZIndex",
event:"changeZIndex",
themeable:true,
nullable:true,
init:null},
backgroundColor:{nullable:true,
init:null,
check:"Color",
apply:"_applyBackgroundColor",
event:"changeBackgroundColor",
themeable:true},
textColor:{nullable:true,
init:"inherit",
check:"Color",
apply:"_applyTextColor",
event:"changeTextColor",
themeable:true,
inheritable:true},
border:{nullable:true,
init:null,
apply:"_applyBorder",
event:"changeBorder",
check:"Border",
themeable:true},
font:{nullable:true,
init:"inherit",
apply:"_applyFont",
check:"Font",
event:"changeFont",
themeable:true,
inheritable:true},
opacity:{check:"Number",
apply:"_applyOpacity",
themeable:true,
nullable:true,
init:null},
cursor:{check:"String",
apply:"_applyCursor",
themeable:true,
nullable:true,
init:null},
backgroundImage:{check:"String",
nullable:true,
apply:"_applyBackgroundImage",
themeable:true},
overflow:{check:["hidden",
"auto",
"scroll",
"scrollX",
"scrollY"],
nullable:true,
apply:"_applyOverflow",
event:"changeOverflow",
themeable:true,
init:null},
clipLeft:{check:"Integer",
apply:"_applyClip",
themeable:true,
nullable:true},
clipTop:{check:"Integer",
apply:"_applyClip",
themeable:true,
nullable:true},
clipWidth:{check:"Integer",
apply:"_applyClip",
themeable:true,
nullable:true},
clipHeight:{check:"Integer",
apply:"_applyClip",
themeable:true,
nullable:true},
tabIndex:{check:"Integer",
nullable:true,
init:null,
apply:"_applyTabIndex",
event:"changeTabIndex"},
hideFocus:{check:"Boolean",
init:false,
apply:"_applyHideFocus",
themeable:true},
enableElementFocus:{check:"Boolean",
init:true},
focused:{check:"Boolean",
init:false,
apply:"_applyFocused",
event:"changeFocused"},
selectable:{check:"Boolean",
init:null,
nullable:true,
apply:"_applySelectable"},
toolTip:{check:"qx.ui.popup.ToolTip",
nullable:true},
contextMenu:{check:"qx.ui.menu.Menu",
nullable:true},
capture:{check:"Boolean",
init:false,
apply:"_applyCapture",
event:"changeCapture"},
dropDataTypes:{nullable:true},
command:{check:"qx.client.Command",
nullable:true,
apply:"_applyCommand"},
appearance:{check:"String",
init:"widget",
apply:"_applyAppearance",
event:"changeAppearance"},
supportsDropMethod:{check:"Function",
nullable:true,
init:null},
marginTop:{check:"Number",
apply:"_applyMarginTop",
nullable:true,
themeable:true},
marginRight:{check:"Number",
apply:"_applyMarginRight",
nullable:true,
themeable:true},
marginBottom:{check:"Number",
apply:"_applyMarginBottom",
nullable:true,
themeable:true},
marginLeft:{check:"Number",
apply:"_applyMarginLeft",
nullable:true,
themeable:true},
paddingTop:{check:"Number",
apply:"_applyPaddingTop",
nullable:true,
themeable:true},
paddingRight:{check:"Number",
apply:"_applyPaddingRight",
nullable:true,
themeable:true},
paddingBottom:{check:"Number",
apply:"_applyPaddingBottom",
nullable:true,
themeable:true},
paddingLeft:{check:"Number",
apply:"_applyPaddingLeft",
nullable:true,
themeable:true},
left:{apply:"_applyLeft",
event:"changeLeft",
nullable:true,
themeable:true,
init:null},
right:{apply:"_applyRight",
event:"changeRight",
nullable:true,
themeable:true,
init:null},
width:{apply:"_applyWidth",
event:"changeWidth",
nullable:true,
themeable:true,
init:null},
minWidth:{apply:"_applyMinWidth",
event:"changeMinWidth",
nullable:true,
themeable:true,
init:null},
maxWidth:{apply:"_applyMaxWidth",
event:"changeMaxWidth",
nullable:true,
themeable:true,
init:null},
top:{apply:"_applyTop",
event:"changeTop",
nullable:true,
themeable:true,
init:null},
bottom:{apply:"_applyBottom",
event:"changeBottom",
nullable:true,
themeable:true,
init:null},
height:{apply:"_applyHeight",
event:"changeHeight",
nullable:true,
themeable:true,
init:null},
minHeight:{apply:"_applyMinHeight",
event:"changeMinHeight",
nullable:true,
themeable:true,
init:null},
maxHeight:{apply:"_applyMaxHeight",
event:"changeMaxHeight",
nullable:true,
themeable:true,
init:null},
location:{group:["left",
"top"],
themeable:true},
dimension:{group:["width",
"height"],
themeable:true},
space:{group:["left",
"width",
"top",
"height"],
themeable:true},
edge:{group:["top",
"right",
"bottom",
"left"],
themeable:true,
mode:"shorthand"},
padding:{group:["paddingTop",
"paddingRight",
"paddingBottom",
"paddingLeft"],
mode:"shorthand",
themeable:true},
margin:{group:["marginTop",
"marginRight",
"marginBottom",
"marginLeft"],
mode:"shorthand",
themeable:true},
heights:{group:["minHeight",
"height",
"maxHeight"],
themeable:true},
widths:{group:["minWidth",
"width",
"maxWidth"],
themeable:true},
align:{group:["horizontalAlign",
"verticalAlign"],
themeable:true},
clipLocation:{group:["clipLeft",
"clipTop"]},
clipDimension:{group:["clipWidth",
"clipHeight"]},
clip:{group:["clipLeft",
"clipTop",
"clipWidth",
"clipHeight"]},
innerWidth:{_cached:true,
defaultValue:null},
innerHeight:{_cached:true,
defaultValue:null},
boxWidth:{_cached:true,
defaultValue:null},
boxHeight:{_cached:true,
defaultValue:null},
outerWidth:{_cached:true,
defaultValue:null},
outerHeight:{_cached:true,
defaultValue:null},
frameWidth:{_cached:true,
defaultValue:null,
addToQueueRuntime:true},
frameHeight:{_cached:true,
defaultValue:null,
addToQueueRuntime:true},
preferredInnerWidth:{_cached:true,
defaultValue:null,
addToQueueRuntime:true},
preferredInnerHeight:{_cached:true,
defaultValue:null,
addToQueueRuntime:true},
preferredBoxWidth:{_cached:true,
defaultValue:null},
preferredBoxHeight:{_cached:true,
defaultValue:null},
hasPercentX:{_cached:true,
defaultValue:false},
hasPercentY:{_cached:true,
defaultValue:false},
hasAutoX:{_cached:true,
defaultValue:false},
hasAutoY:{_cached:true,
defaultValue:false},
hasFlexX:{_cached:true,
defaultValue:false},
hasFlexY:{_cached:true,
defaultValue:false}},
members:{_computedLeftValue:null,
_computedLeftParsed:null,
_computedLeftType:null,
_computedLeftTypeNull:true,
_computedLeftTypePixel:false,
_computedLeftTypePercent:false,
_computedLeftTypeAuto:false,
_computedLeftTypeFlex:false,
_computedRightValue:null,
_computedRightParsed:null,
_computedRightType:null,
_computedRightTypeNull:true,
_computedRightTypePixel:false,
_computedRightTypePercent:false,
_computedRightTypeAuto:false,
_computedRightTypeFlex:false,
_computedTopValue:null,
_computedTopParsed:null,
_computedTopType:null,
_computedTopTypeNull:true,
_computedTopTypePixel:false,
_computedTopTypePercent:false,
_computedTopTypeAuto:false,
_computedTopTypeFlex:false,
_computedBottomValue:null,
_computedBottomParsed:null,
_computedBottomType:null,
_computedBottomTypeNull:true,
_computedBottomTypePixel:false,
_computedBottomTypePercent:false,
_computedBottomTypeAuto:false,
_computedBottomTypeFlex:false,
_computedWidthValue:null,
_computedWidthParsed:null,
_computedWidthType:null,
_computedWidthTypeNull:true,
_computedWidthTypePixel:false,
_computedWidthTypePercent:false,
_computedWidthTypeAuto:false,
_computedWidthTypeFlex:false,
_computedMinWidthValue:null,
_computedMinWidthParsed:null,
_computedMinWidthType:null,
_computedMinWidthTypeNull:true,
_computedMinWidthTypePixel:false,
_computedMinWidthTypePercent:false,
_computedMinWidthTypeAuto:false,
_computedMinWidthTypeFlex:false,
_computedMaxWidthValue:null,
_computedMaxWidthParsed:null,
_computedMaxWidthType:null,
_computedMaxWidthTypeNull:true,
_computedMaxWidthTypePixel:false,
_computedMaxWidthTypePercent:false,
_computedMaxWidthTypeAuto:false,
_computedMaxWidthTypeFlex:false,
_computedHeightValue:null,
_computedHeightParsed:null,
_computedHeightType:null,
_computedHeightTypeNull:true,
_computedHeightTypePixel:false,
_computedHeightTypePercent:false,
_computedHeightTypeAuto:false,
_computedHeightTypeFlex:false,
_computedMinHeightValue:null,
_computedMinHeightParsed:null,
_computedMinHeightType:null,
_computedMinHeightTypeNull:true,
_computedMinHeightTypePixel:false,
_computedMinHeightTypePercent:false,
_computedMinHeightTypeAuto:false,
_computedMinHeightTypeFlex:false,
_computedMaxHeightValue:null,
_computedMaxHeightParsed:null,
_computedMaxHeightType:null,
_computedMaxHeightTypeNull:true,
_computedMaxHeightTypePixel:false,
_computedMaxHeightTypePercent:false,
_computedMaxHeightTypeAuto:false,
_computedMaxHeightTypeFlex:false,
_applyLeft:function(value,
old){this._unitDetectionPixelPercent("left",
value);
this.addToQueue("left");
},
_applyRight:function(value,
old){this._unitDetectionPixelPercent("right",
value);
this.addToQueue("right");
},
_applyTop:function(value,
old){this._unitDetectionPixelPercent("top",
value);
this.addToQueue("top");
},
_applyBottom:function(value,
old){this._unitDetectionPixelPercent("bottom",
value);
this.addToQueue("bottom");
},
_applyWidth:function(value,
old){this._unitDetectionPixelPercentAutoFlex("width",
value);
this.addToQueue("width");
},
_applyMinWidth:function(value,
old){this._unitDetectionPixelPercentAuto("minWidth",
value);
this.addToQueue("minWidth");
},
_applyMaxWidth:function(value,
old){this._unitDetectionPixelPercentAuto("maxWidth",
value);
this.addToQueue("maxWidth");
},
_applyHeight:function(value,
old){this._unitDetectionPixelPercentAutoFlex("height",
value);
this.addToQueue("height");
},
_applyMinHeight:function(value,
old){this._unitDetectionPixelPercentAuto("minHeight",
value);
this.addToQueue("minHeight");
},
_applyMaxHeight:function(value,
old){this._unitDetectionPixelPercentAuto("maxHeight",
value);
this.addToQueue("maxHeight");
},
isMaterialized:function(){var elem=this._element;
return (this._initialLayoutDone&&this._isDisplayable&&qx.html.Style.getStyleProperty(elem,
"display")!="none"&&qx.html.Style.getStyleProperty(elem,
"visibility")!="hidden"&&elem.offsetWidth>0&&elem.offsetHeight>0);
},
pack:function(){this.setWidth(this.getPreferredBoxWidth());
this.setHeight(this.getPreferredBoxHeight());
},
auto:function(){this.setWidth("auto");
this.setHeight("auto");
},
getChildren:qx.lang.Function.returnNull,
getChildrenLength:qx.lang.Function.returnZero,
hasChildren:qx.lang.Function.returnFalse,
isEmpty:qx.lang.Function.returnTrue,
indexOf:qx.lang.Function.returnNegativeIndex,
contains:qx.lang.Function.returnFalse,
getVisibleChildren:qx.lang.Function.returnNull,
getVisibleChildrenLength:qx.lang.Function.returnZero,
hasVisibleChildren:qx.lang.Function.returnFalse,
isVisibleEmpty:qx.lang.Function.returnTrue,
_hasParent:false,
_isDisplayable:false,
isDisplayable:function(){return this._isDisplayable;
},
_checkParent:function(value,
old){if(this.contains(value)){throw new Error("Could not insert myself into a child "+value+"!");
}return value;
},
_applyParent:function(value,
old){if(old){var vOldIndex=old.getChildren().indexOf(this);
this._computedWidthValue=this._computedMinWidthValue=this._computedMaxWidthValue=this._computedLeftValue=this._computedRightValue=null;
this._computedHeightValue=this._computedMinHeightValue=this._computedMaxHeightValue=this._computedTopValue=this._computedBottomValue=null;
this._cachedBoxWidth=this._cachedInnerWidth=this._cachedOuterWidth=null;
this._cachedBoxHeight=this._cachedInnerHeight=this._cachedOuterHeight=null;
qx.lang.Array.removeAt(old.getChildren(),
vOldIndex);
old._invalidateVisibleChildren();
old._removeChildFromChildrenQueue(this);
old.getLayoutImpl().updateChildrenOnRemoveChild(this,
vOldIndex);
old.addToJobQueue("removeChild");
old._invalidatePreferredInnerDimensions();
this._oldParent=old;
}
if(value){this._hasParent=true;
if(typeof this._insertIndex=="number"){qx.lang.Array.insertAt(value.getChildren(),
this,
this._insertIndex);
delete this._insertIndex;
}else{value.getChildren().push(this);
}}else{this._hasParent=false;
}qx.core.Property.refresh(this);
return this._handleDisplayable("parent");
},
_applyDisplay:function(value,
old){return this._handleDisplayable("display");
},
_handleDisplayable:function(vHint){var vDisplayable=this._computeDisplayable();
if(this._isDisplayable==vDisplayable&&!(vDisplayable&&vHint=="parent")){return true;
}this._isDisplayable=vDisplayable;
var vParent=this.getParent();
if(vParent){vParent._invalidateVisibleChildren();
vParent._invalidatePreferredInnerDimensions();
}if(vHint&&this._oldParent&&this._oldParent._initialLayoutDone){var elem=this.getElement();
if(elem){if(this.getVisibility()){this._beforeDisappear();
}this._beforeRemoveDom();
this._oldParent._getTargetNode().removeChild(elem);
this._afterRemoveDom();
if(this.getVisibility()){this._afterDisappear();
}}delete this._oldParent;
}if(vDisplayable){if(vParent._initialLayoutDone){vParent.getLayoutImpl().updateChildrenOnAddChild(this,
vParent.getChildren().indexOf(this));
vParent.addToJobQueue("addChild");
}this.addToLayoutChanges("initial");
this.addToCustomQueues(vHint);
if(this.getVisibility()){this._beforeAppear();
}if(!this._isCreated){qx.ui.core.Widget.addToGlobalElementQueue(this);
}qx.ui.core.Widget.addToGlobalStateQueue(this);
if(!qx.lang.Object.isEmpty(this._jobQueue)){qx.ui.core.Widget.addToGlobalJobQueue(this);
}
if(!qx.lang.Object.isEmpty(this._childrenQueue)){qx.ui.core.Widget.addToGlobalLayoutQueue(this);
}}else{qx.ui.core.Widget.removeFromGlobalElementQueue(this);
qx.ui.core.Widget.removeFromGlobalStateQueue(this);
qx.ui.core.Widget.removeFromGlobalJobQueue(this);
qx.ui.core.Widget.removeFromGlobalLayoutQueue(this);
this.removeFromCustomQueues(vHint);
if(vParent&&vHint){if(this.getVisibility()){this._beforeDisappear();
}if(vParent._initialLayoutDone&&this._initialLayoutDone){vParent.getLayoutImpl().updateChildrenOnRemoveChild(this,
vParent.getChildren().indexOf(this));
vParent.addToJobQueue("removeChild");
this._beforeRemoveDom();
vParent._getTargetNode().removeChild(this.getElement());
this._afterRemoveDom();
}vParent._removeChildFromChildrenQueue(this);
if(this.getVisibility()){this._afterDisappear();
}}}this._handleDisplayableCustom(vDisplayable,
vParent,
vHint);
return true;
},
addToCustomQueues:qx.lang.Function.returnTrue,
removeFromCustomQueues:qx.lang.Function.returnTrue,
_handleDisplayableCustom:qx.lang.Function.returnTrue,
_computeDisplayable:function(){return this.getDisplay()&&this._hasParent&&this.getParent()._isDisplayable?true:false;
},
_beforeAppear:function(){this.createDispatchEvent("beforeAppear");
},
_afterAppear:function(){this._isSeeable=true;
this.createDispatchEvent("appear");
},
_beforeDisappear:function(){this.removeState("over");
if(qx.Class.isDefined("qx.ui.form.Button")){this.removeState("pressed");
this.removeState("abandoned");
}this.createDispatchEvent("beforeDisappear");
},
_afterDisappear:function(){this._isSeeable=false;
this.createDispatchEvent("disappear");
},
_isSeeable:false,
isSeeable:function(){return this._isSeeable;
},
isAppearRelevant:function(){return this.getVisibility()&&this._isDisplayable;
},
_beforeInsertDom:function(){this.createDispatchEvent("beforeInsertDom");
},
_afterInsertDom:function(){this.createDispatchEvent("insertDom");
},
_beforeRemoveDom:function(){this.createDispatchEvent("beforeRemoveDom");
},
_afterRemoveDom:function(){this.createDispatchEvent("removeDom");
},
_applyVisibility:function(value,
old){if(value){if(this._isDisplayable){this._beforeAppear();
}this.removeStyleProperty("display");
if(this._isDisplayable){this._afterAppear();
}}else{if(this._isDisplayable){this._beforeDisappear();
}this.setStyleProperty("display",
"none");
if(this._isDisplayable){this._afterDisappear();
}}},
show:function(){this.setVisibility(true);
this.setDisplay(true);
},
hide:function(){this.setVisibility(false);
},
connect:function(){this.setDisplay(true);
},
disconnect:function(){this.setDisplay(false);
},
_isCreated:false,
_getTargetNode:qx.core.Variant.select("qx.client",
{"gecko":function(){return this._element;
},
"default":function(){return this._borderElement||this._element;
}}),
addToDocument:function(){qx.ui.core.ClientDocument.getInstance().add(this);
},
isCreated:function(){return this._isCreated;
},
_createElementImpl:function(){this.setElement(this.getTopLevelWidget().getDocumentElement().createElement("div"));
},
_applyElement:function(value,
old){this._isCreated=value!=null;
if(old){old.qx_Widget=null;
}
if(value){value.qx_Widget=this;
value.style.position="absolute";
this._element=value;
this._style=value.style;
this._applyStyleProperties(value);
this._applyHtmlProperties(value);
this._applyHtmlAttributes(value);
this._applyElementData(value);
this.createDispatchEvent("create");
this.addToStateQueue();
}else{this._element=this._style=null;
}},
addToJobQueue:function(p){if(this._hasParent){qx.ui.core.Widget.addToGlobalJobQueue(this);
}
if(!this._jobQueue){this._jobQueue={};
}this._jobQueue[p]=true;
return true;
},
_flushJobQueue:function(q){try{var vQueue=this._jobQueue;
var vParent=this.getParent();
if(!vParent||qx.lang.Object.isEmpty(vQueue)){return;
}var vLayoutImpl=this instanceof qx.ui.core.Parent?this.getLayoutImpl():null;
if(vLayoutImpl){vLayoutImpl.updateSelfOnJobQueueFlush(vQueue);
}}catch(ex){this.error("Flushing job queue (prechecks#1) failed",
ex);
}try{var vFlushParentJobQueue=false;
var vRecomputeOuterWidth=vQueue.marginLeft||vQueue.marginRight;
var vRecomputeOuterHeight=vQueue.marginTop||vQueue.marginBottom;
var vRecomputeInnerWidth=vQueue.frameWidth;
var vRecomputeInnerHeight=vQueue.frameHeight;
var vRecomputeParentPreferredInnerWidth=(vQueue.frameWidth||vQueue.preferredInnerWidth)&&this._recomputePreferredBoxWidth();
var vRecomputeParentPreferredInnerHeight=(vQueue.frameHeight||vQueue.preferredInnerHeight)&&this._recomputePreferredBoxHeight();
if(vRecomputeParentPreferredInnerWidth){var vPref=this.getPreferredBoxWidth();
if(this._computedWidthTypeAuto){this._computedWidthValue=vPref;
vQueue.width=true;
}
if(this._computedMinWidthTypeAuto){this._computedMinWidthValue=vPref;
vQueue.minWidth=true;
}
if(this._computedMaxWidthTypeAuto){this._computedMaxWidthValue=vPref;
vQueue.maxWidth=true;
}}
if(vRecomputeParentPreferredInnerHeight){var vPref=this.getPreferredBoxHeight();
if(this._computedHeightTypeAuto){this._computedHeightValue=vPref;
vQueue.height=true;
}
if(this._computedMinHeightTypeAuto){this._computedMinHeightValue=vPref;
vQueue.minHeight=true;
}
if(this._computedMaxHeightTypeAuto){this._computedMaxHeightValue=vPref;
vQueue.maxHeight=true;
}}
if((vQueue.width||vQueue.minWidth||vQueue.maxWidth||vQueue.left||vQueue.right)&&this._recomputeBoxWidth()){vRecomputeOuterWidth=vRecomputeInnerWidth=true;
}
if((vQueue.height||vQueue.minHeight||vQueue.maxHeight||vQueue.top||vQueue.bottom)&&this._recomputeBoxHeight()){vRecomputeOuterHeight=vRecomputeInnerHeight=true;
}}catch(ex){this.error("Flushing job queue (recompute#2) failed",
ex);
}try{if((vRecomputeOuterWidth&&this._recomputeOuterWidth())||vRecomputeParentPreferredInnerWidth){vParent._invalidatePreferredInnerWidth();
vParent.getLayoutImpl().updateSelfOnChildOuterWidthChange(this);
vFlushParentJobQueue=true;
}
if((vRecomputeOuterHeight&&this._recomputeOuterHeight())||vRecomputeParentPreferredInnerHeight){vParent._invalidatePreferredInnerHeight();
vParent.getLayoutImpl().updateSelfOnChildOuterHeightChange(this);
vFlushParentJobQueue=true;
}
if(vFlushParentJobQueue){vParent._flushJobQueue();
}}catch(ex){this.error("Flushing job queue (parentsignals#3) failed",
ex);
}try{vParent._addChildToChildrenQueue(this);
for(var i in vQueue){this._layoutChanges[i]=true;
}}catch(ex){this.error("Flushing job queue (addjobs#4) failed",
ex);
}try{if(this instanceof qx.ui.core.Parent&&(vQueue.paddingLeft||vQueue.paddingRight||vQueue.paddingTop||vQueue.paddingBottom)){var ch=this.getChildren(),
chl=ch.length;
if(vQueue.paddingLeft){for(var i=0;i<chl;i++){ch[i].addToLayoutChanges("parentPaddingLeft");
}}
if(vQueue.paddingRight){for(var i=0;i<chl;i++){ch[i].addToLayoutChanges("parentPaddingRight");
}}
if(vQueue.paddingTop){for(var i=0;i<chl;i++){ch[i].addToLayoutChanges("parentPaddingTop");
}}
if(vQueue.paddingBottom){for(var i=0;i<chl;i++){ch[i].addToLayoutChanges("parentPaddingBottom");
}}}
if(vRecomputeInnerWidth){this._recomputeInnerWidth();
}
if(vRecomputeInnerHeight){this._recomputeInnerHeight();
}
if(this._initialLayoutDone){if(vLayoutImpl){vLayoutImpl.updateChildrenOnJobQueueFlush(vQueue);
}}}catch(ex){this.error("Flushing job queue (childrensignals#5) failed",
ex);
}delete this._jobQueue;
},
_isWidthEssential:qx.lang.Function.returnTrue,
_isHeightEssential:qx.lang.Function.returnTrue,
_computeBoxWidthFallback:function(){return 0;
},
_computeBoxHeightFallback:function(){return 0;
},
_computeBoxWidth:function(){var vLayoutImpl=this.getParent().getLayoutImpl();
return Math.max(0,
qx.lang.Number.limit(vLayoutImpl.computeChildBoxWidth(this),
this.getMinWidthValue(),
this.getMaxWidthValue()));
},
_computeBoxHeight:function(){var vLayoutImpl=this.getParent().getLayoutImpl();
return Math.max(0,
qx.lang.Number.limit(vLayoutImpl.computeChildBoxHeight(this),
this.getMinHeightValue(),
this.getMaxHeightValue()));
},
_computeOuterWidth:function(){return Math.max(0,
(this.getMarginLeft()+this.getBoxWidth()+this.getMarginRight()));
},
_computeOuterHeight:function(){return Math.max(0,
(this.getMarginTop()+this.getBoxHeight()+this.getMarginBottom()));
},
_computeInnerWidth:function(){return Math.max(0,
this.getBoxWidth()-this.getFrameWidth());
},
_computeInnerHeight:function(){return Math.max(0,
this.getBoxHeight()-this.getFrameHeight());
},
getNeededWidth:function(){var vLayoutImpl=this.getParent().getLayoutImpl();
return Math.max(0,
vLayoutImpl.computeChildNeededWidth(this));
},
getNeededHeight:function(){var vLayoutImpl=this.getParent().getLayoutImpl();
return Math.max(0,
vLayoutImpl.computeChildNeededHeight(this));
},
_recomputeFlexX:function(){if(!this.getHasFlexX()){return false;
}
if(this._computedWidthTypeFlex){this._computedWidthValue=null;
this.addToLayoutChanges("width");
}return true;
},
_recomputeFlexY:function(){if(!this.getHasFlexY()){return false;
}
if(this._computedHeightTypeFlex){this._computedHeightValue=null;
this.addToLayoutChanges("height");
}return true;
},
_recomputePercentX:function(){if(!this.getHasPercentX()){return false;
}
if(this._computedWidthTypePercent){this._computedWidthValue=null;
this.addToLayoutChanges("width");
}
if(this._computedMinWidthTypePercent){this._computedMinWidthValue=null;
this.addToLayoutChanges("minWidth");
}
if(this._computedMaxWidthTypePercent){this._computedMaxWidthValue=null;
this.addToLayoutChanges("maxWidth");
}
if(this._computedLeftTypePercent){this._computedLeftValue=null;
this.addToLayoutChanges("left");
}
if(this._computedRightTypePercent){this._computedRightValue=null;
this.addToLayoutChanges("right");
}return true;
},
_recomputePercentY:function(){if(!this.getHasPercentY()){return false;
}
if(this._computedHeightTypePercent){this._computedHeightValue=null;
this.addToLayoutChanges("height");
}
if(this._computedMinHeightTypePercent){this._computedMinHeightValue=null;
this.addToLayoutChanges("minHeight");
}
if(this._computedMaxHeightTypePercent){this._computedMaxHeightValue=null;
this.addToLayoutChanges("maxHeight");
}
if(this._computedTopTypePercent){this._computedTopValue=null;
this.addToLayoutChanges("top");
}
if(this._computedBottomTypePercent){this._computedBottomValue=null;
this.addToLayoutChanges("bottom");
}return true;
},
_recomputeRangeX:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(){if(this._computedLeftTypeNull||this._computedRightTypeNull){return false;
}this.addToLayoutChanges("width");
return true;
},
"default":function(){return !(this._computedLeftTypeNull||this._computedRightTypeNull);
}}),
_recomputeRangeY:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(){if(this._computedTopTypeNull||this._computedBottomTypeNull){return false;
}this.addToLayoutChanges("height");
return true;
},
"default":function(){return !(this._computedTopTypeNull||this._computedBottomTypeNull);
}}),
_recomputeStretchingX:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(){if(this.getAllowStretchX()&&this._computedWidthTypeNull){this._computedWidthValue=null;
this.addToLayoutChanges("width");
return true;
}return false;
},
"default":function(){if(this.getAllowStretchX()&&this._computedWidthTypeNull){return true;
}return false;
}}),
_recomputeStretchingY:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(){if(this.getAllowStretchY()&&this._computedHeightTypeNull){this._computedHeightValue=null;
this.addToLayoutChanges("height");
return true;
}return false;
},
"default":function(){if(this.getAllowStretchY()&&this._computedHeightTypeNull){return true;
}return false;
}}),
_computeValuePixel:function(v){return Math.round(v);
},
_computeValuePixelLimit:function(v){return Math.max(0,
this._computeValuePixel(v));
},
_computeValuePercentX:function(v){return Math.round(this.getParent().getInnerWidthForChild(this)*v*0.01);
},
_computeValuePercentXLimit:function(v){return Math.max(0,
this._computeValuePercentX(v));
},
_computeValuePercentY:function(v){return Math.round(this.getParent().getInnerHeightForChild(this)*v*0.01);
},
_computeValuePercentYLimit:function(v){return Math.max(0,
this._computeValuePercentY(v));
},
getWidthValue:function(){if(this._computedWidthValue!=null){return this._computedWidthValue;
}
switch(this._computedWidthType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedWidthParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedWidthParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedWidthValue=this.getPreferredBoxWidth();
case qx.ui.core.Widget.TYPE_FLEX:if(this.getParent().getLayoutImpl().computeChildrenFlexWidth===undefined){throw new Error("Widget "+this+": having horizontal flex size (width="+this.getWidth()+") but parent layout "+this.getParent()+" does not support it");
}this.getParent().getLayoutImpl().computeChildrenFlexWidth();
return this._computedWidthValue=this._computedWidthFlexValue;
}return null;
},
getMinWidthValue:function(){if(this._computedMinWidthValue!=null){return this._computedMinWidthValue;
}
switch(this._computedMinWidthType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedMinWidthParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedMinWidthParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedMinWidthValue=this.getPreferredBoxWidth();
}return null;
},
getMaxWidthValue:function(){if(this._computedMaxWidthValue!=null){return this._computedMaxWidthValue;
}
switch(this._computedMaxWidthType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedWidthValue=this._computeValuePixelLimit(this._computedMaxWidthParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedWidthValue=this._computeValuePercentXLimit(this._computedMaxWidthParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedMaxWidthValue=this.getPreferredBoxWidth();
}return null;
},
getLeftValue:function(){if(this._computedLeftValue!=null){return this._computedLeftValue;
}
switch(this._computedLeftType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedLeftValue=this._computeValuePixel(this._computedLeftParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedLeftValue=this._computeValuePercentX(this._computedLeftParsed);
}return null;
},
getRightValue:function(){if(this._computedRightValue!=null){return this._computedRightValue;
}
switch(this._computedRightType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedRightValue=this._computeValuePixel(this._computedRightParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedRightValue=this._computeValuePercentX(this._computedRightParsed);
}return null;
},
getHeightValue:function(){if(this._computedHeightValue!=null){return this._computedHeightValue;
}
switch(this._computedHeightType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedHeightValue=this._computeValuePixelLimit(this._computedHeightParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedHeightValue=this._computeValuePercentYLimit(this._computedHeightParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedHeightValue=this.getPreferredBoxHeight();
case qx.ui.core.Widget.TYPE_FLEX:if(this.getParent().getLayoutImpl().computeChildrenFlexHeight===undefined){throw new Error("Widget "+this+": having vertical flex size (height="+this.getHeight()+") but parent layout "+this.getParent()+" does not support it");
}this.getParent().getLayoutImpl().computeChildrenFlexHeight();
return this._computedHeightValue=this._computedHeightFlexValue;
}return null;
},
getMinHeightValue:function(){if(this._computedMinHeightValue!=null){return this._computedMinHeightValue;
}
switch(this._computedMinHeightType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedMinHeightValue=this._computeValuePixelLimit(this._computedMinHeightParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedMinHeightValue=this._computeValuePercentYLimit(this._computedMinHeightParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedMinHeightValue=this.getPreferredBoxHeight();
}return null;
},
getMaxHeightValue:function(){if(this._computedMaxHeightValue!=null){return this._computedMaxHeightValue;
}
switch(this._computedMaxHeightType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedMaxHeightValue=this._computeValuePixelLimit(this._computedMaxHeightParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedMaxHeightValue=this._computeValuePercentYLimit(this._computedMaxHeightParsed);
case qx.ui.core.Widget.TYPE_AUTO:return this._computedMaxHeightValue=this.getPreferredBoxHeight();
}return null;
},
getTopValue:function(){if(this._computedTopValue!=null){return this._computedTopValue;
}
switch(this._computedTopType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedTopValue=this._computeValuePixel(this._computedTopParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedTopValue=this._computeValuePercentY(this._computedTopParsed);
}return null;
},
getBottomValue:function(){if(this._computedBottomValue!=null){return this._computedBottomValue;
}
switch(this._computedBottomType){case qx.ui.core.Widget.TYPE_PIXEL:return this._computedBottomValue=this._computeValuePixel(this._computedBottomParsed);
case qx.ui.core.Widget.TYPE_PERCENT:return this._computedBottomValue=this._computeValuePercentY(this._computedBottomParsed);
}return null;
},
_computeFrameWidth:function(){var fw=this._cachedBorderLeft+this.getPaddingLeft()+this.getPaddingRight()+this._cachedBorderRight;
switch(this.getOverflow()){case "scroll":case "scrollY":fw+=qx.ui.core.Widget.SCROLLBAR_SIZE;
break;
case "auto":break;
}return fw;
},
_computeFrameHeight:function(){var fh=this._cachedBorderTop+this.getPaddingTop()+this.getPaddingBottom()+this._cachedBorderBottom;
switch(this.getOverflow()){case "scroll":case "scrollX":fh+=qx.ui.core.Widget.SCROLLBAR_SIZE;
break;
case "auto":break;
}return fh;
},
_invalidateFrameDimensions:function(){this._invalidateFrameWidth();
this._invalidateFrameHeight();
},
_invalidatePreferredInnerDimensions:function(){this._invalidatePreferredInnerWidth();
this._invalidatePreferredInnerHeight();
},
_computePreferredBoxWidth:function(){try{return Math.max(0,
this.getPreferredInnerWidth()+this.getFrameWidth());
}catch(ex){this.error("_computePreferredBoxWidth failed",
ex);
}},
_computePreferredBoxHeight:function(){try{return Math.max(0,
this.getPreferredInnerHeight()+this.getFrameHeight());
}catch(ex){this.error("_computePreferredBoxHeight failed",
ex);
}},
_initialLayoutDone:false,
addToLayoutChanges:function(p){if(this._isDisplayable){this.getParent()._addChildToChildrenQueue(this);
}return this._layoutChanges[p]=true;
},
addToQueue:function(p){this._initialLayoutDone?this.addToJobQueue(p):this.addToLayoutChanges(p);
},
addToQueueRuntime:function(p){return !this._initialLayoutDone||this.addToJobQueue(p);
},
_computeHasPercentX:function(){return (this._computedLeftTypePercent||this._computedWidthTypePercent||this._computedMinWidthTypePercent||this._computedMaxWidthTypePercent||this._computedRightTypePercent);
},
_computeHasPercentY:function(){return (this._computedTopTypePercent||this._computedHeightTypePercent||this._computedMinHeightTypePercent||this._computedMaxHeightTypePercent||this._computedBottomTypePercent);
},
_computeHasAutoX:function(){return (this._computedWidthTypeAuto||this._computedMinWidthTypeAuto||this._computedMaxWidthTypeAuto);
},
_computeHasAutoY:function(){return (this._computedHeightTypeAuto||this._computedMinHeightTypeAuto||this._computedMaxHeightTypeAuto);
},
_computeHasFlexX:function(){return this._computedWidthTypeFlex;
},
_computeHasFlexY:function(){return this._computedHeightTypeFlex;
},
_evalUnitsPixelPercentAutoFlex:function(value){switch(value){case "auto":return qx.ui.core.Widget.TYPE_AUTO;
case Infinity:case -Infinity:return qx.ui.core.Widget.TYPE_NULL;
}
switch(typeof value){case "number":return isNaN(value)?qx.ui.core.Widget.TYPE_NULL:qx.ui.core.Widget.TYPE_PIXEL;
case "string":return value.indexOf("%")!=-1?qx.ui.core.Widget.TYPE_PERCENT:value.indexOf("*")!=-1?qx.ui.core.Widget.TYPE_FLEX:qx.ui.core.Widget.TYPE_NULL;
}return qx.ui.core.Widget.TYPE_NULL;
},
_evalUnitsPixelPercentAuto:function(value){switch(value){case "auto":return qx.ui.core.Widget.TYPE_AUTO;
case Infinity:case -Infinity:return qx.ui.core.Widget.TYPE_NULL;
}
switch(typeof value){case "number":return isNaN(value)?qx.ui.core.Widget.TYPE_NULL:qx.ui.core.Widget.TYPE_PIXEL;
case "string":return value.indexOf("%")!=-1?qx.ui.core.Widget.TYPE_PERCENT:qx.ui.core.Widget.TYPE_NULL;
}return qx.ui.core.Widget.TYPE_NULL;
},
_evalUnitsPixelPercent:function(value){switch(value){case Infinity:case -Infinity:return qx.ui.core.Widget.TYPE_NULL;
}
switch(typeof value){case "number":return isNaN(value)?qx.ui.core.Widget.TYPE_NULL:qx.ui.core.Widget.TYPE_PIXEL;
case "string":return value.indexOf("%")!=-1?qx.ui.core.Widget.TYPE_PERCENT:qx.ui.core.Widget.TYPE_NULL;
}return qx.ui.core.Widget.TYPE_NULL;
},
_unitDetectionPixelPercentAutoFlex:function(name,
value){var r=qx.ui.core.Widget.layoutPropertyTypes[name];
var s=r.dataType;
var p=r.dataParsed;
var v=r.dataValue;
var s1=r.typePixel;
var s2=r.typePercent;
var s3=r.typeAuto;
var s4=r.typeFlex;
var s5=r.typeNull;
var wasPercent=this[s2];
var wasAuto=this[s3];
var wasFlex=this[s4];
switch(this[s]=this._evalUnitsPixelPercentAutoFlex(value)){case qx.ui.core.Widget.TYPE_PIXEL:this[s1]=true;
this[s2]=this[s3]=this[s4]=this[s5]=false;
this[p]=this[v]=Math.round(value);
break;
case qx.ui.core.Widget.TYPE_PERCENT:this[s2]=true;
this[s1]=this[s3]=this[s4]=this[s5]=false;
this[p]=parseFloat(value);
this[v]=null;
break;
case qx.ui.core.Widget.TYPE_AUTO:this[s3]=true;
this[s1]=this[s2]=this[s4]=this[s5]=false;
this[p]=this[v]=null;
break;
case qx.ui.core.Widget.TYPE_FLEX:this[s4]=true;
this[s1]=this[s2]=this[s3]=this[s5]=false;
this[p]=parseFloat(value);
this[v]=null;
break;
default:this[s5]=true;
this[s1]=this[s2]=this[s3]=this[s4]=false;
this[p]=this[v]=null;
break;
}
if(wasPercent!=this[s2]){switch(name){case "minWidth":case "maxWidth":case "width":case "left":case "right":this._invalidateHasPercentX();
break;
case "maxHeight":case "minHeight":case "height":case "top":case "bottom":this._invalidateHasPercentY();
break;
}}if(wasAuto!=this[s3]){switch(name){case "minWidth":case "maxWidth":case "width":this._invalidateHasAutoX();
break;
case "minHeight":case "maxHeight":case "height":this._invalidateHasAutoY();
break;
}}if(wasFlex!=this[s4]){switch(name){case "width":this._invalidateHasFlexX();
break;
case "height":this._invalidateHasFlexY();
break;
}}},
_unitDetectionPixelPercentAuto:function(name,
value){var r=qx.ui.core.Widget.layoutPropertyTypes[name];
var s=r.dataType;
var p=r.dataParsed;
var v=r.dataValue;
var s1=r.typePixel;
var s2=r.typePercent;
var s3=r.typeAuto;
var s4=r.typeNull;
var wasPercent=this[s2];
var wasAuto=this[s3];
switch(this[s]=this._evalUnitsPixelPercentAuto(value)){case qx.ui.core.Widget.TYPE_PIXEL:this[s1]=true;
this[s2]=this[s3]=this[s4]=false;
this[p]=this[v]=Math.round(value);
break;
case qx.ui.core.Widget.TYPE_PERCENT:this[s2]=true;
this[s1]=this[s3]=this[s4]=false;
this[p]=parseFloat(value);
this[v]=null;
break;
case qx.ui.core.Widget.TYPE_AUTO:this[s3]=true;
this[s1]=this[s2]=this[s4]=false;
this[p]=this[v]=null;
break;
default:this[s4]=true;
this[s1]=this[s2]=this[s3]=false;
this[p]=this[v]=null;
break;
}
if(wasPercent!=this[s2]){switch(name){case "minWidth":case "maxWidth":case "width":case "left":case "right":this._invalidateHasPercentX();
break;
case "minHeight":case "maxHeight":case "height":case "top":case "bottom":this._invalidateHasPercentY();
break;
}}if(wasAuto!=this[s3]){switch(name){case "minWidth":case "maxWidth":case "width":this._invalidateHasAutoX();
break;
case "minHeight":case "maxHeight":case "height":this._invalidateHasAutoY();
break;
}}},
_unitDetectionPixelPercent:function(name,
value){var r=qx.ui.core.Widget.layoutPropertyTypes[name];
var s=r.dataType;
var p=r.dataParsed;
var v=r.dataValue;
var s1=r.typePixel;
var s2=r.typePercent;
var s3=r.typeNull;
var wasPercent=this[s2];
switch(this[s]=this._evalUnitsPixelPercent(value)){case qx.ui.core.Widget.TYPE_PIXEL:this[s1]=true;
this[s2]=this[s3]=false;
this[p]=this[v]=Math.round(value);
break;
case qx.ui.core.Widget.TYPE_PERCENT:this[s2]=true;
this[s1]=this[s3]=false;
this[p]=parseFloat(value);
this[v]=null;
break;
default:this[s3]=true;
this[s1]=this[s2]=false;
this[p]=this[v]=null;
break;
}
if(wasPercent!=this[s2]){switch(name){case "minWidth":case "maxWidth":case "width":case "left":case "right":this._invalidateHasPercentX();
break;
case "minHeight":case "maxHeight":case "height":case "top":case "bottom":this._invalidateHasPercentY();
break;
}}},
getTopLevelWidget:function(){return this._hasParent?this.getParent().getTopLevelWidget():null;
},
moveSelfBefore:function(vBefore){this.getParent().addBefore(this,
vBefore);
},
moveSelfAfter:function(vAfter){this.getParent().addAfter(this,
vAfter);
},
moveSelfToBegin:function(){this.getParent().addAtBegin(this);
},
moveSelfToEnd:function(){this.getParent().addAtEnd(this);
},
getPreviousSibling:function(){var p=this.getParent();
if(p==null){return null;
}var cs=p.getChildren();
return cs[cs.indexOf(this)-1];
},
getNextSibling:function(){var p=this.getParent();
if(p==null){return null;
}var cs=p.getChildren();
return cs[cs.indexOf(this)+1];
},
getPreviousVisibleSibling:function(){if(!this._hasParent){return null;
}var vChildren=this.getParent().getVisibleChildren();
return vChildren[vChildren.indexOf(this)-1];
},
getNextVisibleSibling:function(){if(!this._hasParent){return null;
}var vChildren=this.getParent().getVisibleChildren();
return vChildren[vChildren.indexOf(this)+1];
},
getPreviousActiveSibling:function(vIgnoreClasses){var vPrev=qx.ui.core.Widget.getActiveSiblingHelper(this,
this.getParent(),
-1,
vIgnoreClasses,
null);
return vPrev?vPrev:this.getParent().getLastActiveChild();
},
getNextActiveSibling:function(vIgnoreClasses){var vNext=qx.ui.core.Widget.getActiveSiblingHelper(this,
this.getParent(),
1,
vIgnoreClasses,
null);
return vNext?vNext:this.getParent().getFirstActiveChild();
},
isFirstChild:function(){return this._hasParent&&this.getParent().getFirstChild()==this;
},
isLastChild:function(){return this._hasParent&&this.getParent().getLastChild()==this;
},
isFirstVisibleChild:function(){return this._hasParent&&this.getParent().getFirstVisibleChild()==this;
},
isLastVisibleChild:function(){return this._hasParent&&this.getParent().getLastVisibleChild()==this;
},
hasState:function(vState){return this.__states&&this.__states[vState]?true:false;
},
addState:function(vState){if(!this.__states){this.__states={};
}
if(!this.__states[vState]){this.__states[vState]=true;
if(this._hasParent){qx.ui.core.Widget.addToGlobalStateQueue(this);
}}},
removeState:function(vState){if(this.__states&&this.__states[vState]){delete this.__states[vState];
if(this._hasParent){qx.ui.core.Widget.addToGlobalStateQueue(this);
}}},
_styleFromMap:function(data){var styler=qx.core.Property.$$method.style;
var unstyler=qx.core.Property.$$method.unstyle;
var value;
var prop;
for(var prop in data){value=data[prop];
value==="undefined"?this[unstyler[prop]]():this[styler[prop]](value);
}},
_unstyleFromArray:function(data){var unstyler=qx.core.Property.$$method.unstyle;
var i,
l;
for(var i=0,
l=data.length;i<l;i++){this[unstyler[data[i]]]();
}},
_renderAppearance:function(){if(!this.__states){this.__states={};
}this._applyStateStyleFocus(this.__states);
var vAppearance=this.getAppearance();
if(vAppearance){try{var r=qx.theme.manager.Appearance.getInstance().styleFrom(vAppearance,
this.__states);
if(r){this._styleFromMap(r);
}}catch(ex){this.error("Could not apply state appearance",
ex);
}}},
_resetAppearanceThemeWrapper:function(vNewAppearanceTheme,
vOldAppearanceTheme){var vAppearance=this.getAppearance();
if(vAppearance){var vAppearanceManager=qx.theme.manager.Appearance.getInstance();
var vOldAppearanceProperties=vAppearanceManager.styleFromTheme(vOldAppearanceTheme,
vAppearance,
this.__states);
var vNewAppearanceProperties=vAppearanceManager.styleFromTheme(vNewAppearanceTheme,
vAppearance,
this.__states);
var vUnstyleList=[];
for(var prop in vOldAppearanceProperties){if(vNewAppearanceProperties[prop]===undefined){vUnstyleList.push(prop);
}}this._unstyleFromArray(vUnstyleList);
this._styleFromMap(vNewAppearanceProperties);
}},
_applyStateStyleFocus:qx.core.Variant.select("qx.client",
{"mshtml":function(vStates){},
"gecko":function(vStates){if(vStates.focused){if(!qx.event.handler.FocusHandler.mouseFocus&&!this.getHideFocus()){this.setStyleProperty("MozOutline",
"1px dotted invert");
}}else{this.removeStyleProperty("MozOutline");
}},
"default":function(vStates){if(vStates.focused){if(!qx.event.handler.FocusHandler.mouseFocus&&!this.getHideFocus()){this.setStyleProperty("outline",
"1px dotted invert");
}}else{this.removeStyleProperty("outline");
}}}),
addToStateQueue:function(){qx.ui.core.Widget.addToGlobalStateQueue(this);
},
recursiveAddToStateQueue:function(){this.addToStateQueue();
},
_applyAppearance:function(value,
old){if(!this.__states){this.__states={};
}var vAppearanceManager=qx.theme.manager.Appearance.getInstance();
if(value){var vNewAppearanceProperties=vAppearanceManager.styleFrom(value,
this.__states)||{};
}
if(old){var vOldAppearanceProperties=vAppearanceManager.styleFrom(old,
this.__states)||{};
var vUnstyleList=[];
for(var prop in vOldAppearanceProperties){if(!vNewAppearanceProperties||!(prop in vNewAppearanceProperties)){vUnstyleList.push(prop);
}}}
if(vUnstyleList){this._unstyleFromArray(vUnstyleList);
}
if(vNewAppearanceProperties){this._styleFromMap(vNewAppearanceProperties);
}},
_recursiveAppearanceThemeUpdate:function(vNewAppearanceTheme,
vOldAppearanceTheme){try{this._resetAppearanceThemeWrapper(vNewAppearanceTheme,
vOldAppearanceTheme);
}catch(ex){this.error("Failed to update appearance theme",
ex);
}},
_applyElementData:function(elem){},
setHtmlProperty:function(propName,
value){if(!this._htmlProperties){this._htmlProperties={};
}this._htmlProperties[propName]=value;
if(this._isCreated&&this.getElement()[propName]!=value){this.getElement()[propName]=value;
}return true;
},
removeHtmlProperty:qx.core.Variant.select("qx.client",
{"mshtml":function(propName){if(!this._htmlProperties){return;
}delete this._htmlProperties[propName];
if(this._isCreated){this.getElement().removeAttribute(propName);
}return true;
},
"default":function(propName){if(!this._htmlProperties){return;
}delete this._htmlProperties[propName];
if(this._isCreated){this.getElement().removeAttribute(propName);
delete this.getElement()[propName];
}return true;
}}),
getHtmlProperty:function(propName){if(!this._htmlProperties){return "";
}return this._htmlProperties[propName]||"";
},
_applyHtmlProperties:function(elem){var vProperties=this._htmlProperties;
if(vProperties){var propName;
for(propName in vProperties){elem[propName]=vProperties[propName];
}}},
setHtmlAttribute:function(propName,
value){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use setHtmlProperty instead");
if(!this._htmlAttributes){this._htmlAttributes={};
}this._htmlAttributes[propName]=value;
if(this._isCreated){this.getElement().setAttribute(propName,
value);
}return true;
},
removeHtmlAttribute:function(propName){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Use removeHtmlProperty instead");
if(!this._htmlAttributes){return;
}delete this._htmlAttributes[propName];
if(this._isCreated){this.getElement().removeAttribute(propName);
}return true;
},
getHtmlAttribute:function(propName){if(!this._htmlAttributes){return "";
}return this._htmlAttributes[propName]||"";
},
_applyHtmlAttributes:function(elem){var vAttributes=this._htmlAttributes;
if(vAttributes){var propName;
for(propName in vAttributes){elem.setAttribute(propName,
vAttributes[propName]);
}}},
getStyleProperty:function(propName){if(!this._styleProperties){return "";
}return this._styleProperties[propName]||"";
},
__outerElementStyleProperties:{cursor:true,
zIndex:true,
filter:true,
display:true,
visibility:true},
setStyleProperty:function(propName,
value){if(!this._styleProperties){this._styleProperties={};
}this._styleProperties[propName]=value;
if(this._isCreated){var elem=this.__outerElementStyleProperties[propName]?this.getElement():this._getTargetNode();
if(elem){elem.style[propName]=(value==null)?"":value;
}}},
removeStyleProperty:function(propName){if(!this._styleProperties){return;
}delete this._styleProperties[propName];
if(this._isCreated){var elem=this.__outerElementStyleProperties[propName]?this.getElement():this._getTargetNode();
if(elem){elem.style[propName]="";
}}},
_applyStyleProperties:function(elem){var vProperties=this._styleProperties;
if(!vProperties){return;
}var propName;
var vBaseElement=elem;
var vTargetElement=this._getTargetNode();
var elem;
var value;
for(propName in vProperties){elem=this.__outerElementStyleProperties[propName]?vBaseElement:vTargetElement;
value=vProperties[propName];
elem.style[propName]=(value==null)?"":value;
}},
_applyEnabled:function(value,
old){if(value===false){this.addState("disabled");
this.removeState("over");
if(qx.Class.isDefined("qx.ui.form.Button")){this.removeState("abandoned");
this.removeState("pressed");
}}else{this.removeState("disabled");
}},
isFocusable:function(){return this.getEnabled()&&this.isSeeable()&&this.getTabIndex()>=0&&this.getTabIndex()!=null;
},
isFocusRoot:function(){return false;
},
getFocusRoot:function(){if(this._hasParent){return this.getParent().getFocusRoot();
}return null;
},
getActiveChild:function(){var vRoot=this.getFocusRoot();
if(vRoot){return vRoot.getActiveChild();
}return null;
},
_ontabfocus:qx.lang.Function.returnTrue,
_applyFocused:function(value,
old){if(!this.isCreated()){return;
}var vFocusRoot=this.getFocusRoot();
if(vFocusRoot){if(value){vFocusRoot.setFocusedChild(this);
this._visualizeFocus();
}else{if(vFocusRoot.getFocusedChild()==this){vFocusRoot.setFocusedChild(null);
}this._visualizeBlur();
}}},
_applyHideFocus:qx.core.Variant.select("qx.client",
{"mshtml":function(value,
old){this.setHtmlProperty("hideFocus",
value);
},
"default":qx.lang.Function.returnTrue}),
_visualizeBlur:function(){if(this.getEnableElementFocus()&&(!this.getFocusRoot().getFocusedChild()||(this.getFocusRoot().getFocusedChild()&&this.getFocusRoot().getFocusedChild().getEnableElementFocus()))){try{this.getElement().blur();
}catch(ex){}}this.removeState("focused");
},
_visualizeFocus:function(){if(!qx.event.handler.FocusHandler.mouseFocus&&this.getEnableElementFocus()){try{this.getElement().focus();
}catch(ex){}}this.addState("focused");
},
focus:function(){delete qx.event.handler.FocusHandler.mouseFocus;
this.setFocused(true);
},
blur:function(){delete qx.event.handler.FocusHandler.mouseFocus;
this.setFocused(false);
},
_applyCapture:function(value,
old){var vMgr=qx.event.handler.EventHandler.getInstance();
if(old){vMgr.setCaptureWidget(null);
}else if(value){vMgr.setCaptureWidget(this);
}},
_applyZIndex:function(value,
old){if(value==null){this.removeStyleProperty("zIndex");
}else{this.setStyleProperty("zIndex",
value);
}},
_applyTabIndex:qx.core.Variant.select("qx.client",
{"mshtml":function(value,
old){this.setHtmlProperty("tabIndex",
value<0?-1:1);
},
"gecko":function(value,
old){this.setStyleProperty("MozUserFocus",
(value<0?"ignore":"normal"));
},
"default":function(value,
old){this.setStyleProperty("userFocus",
(value<0?"ignore":"normal"));
this.setHtmlProperty("tabIndex",
value<0?-1:1);
}}),
_applySelectable:qx.core.Variant.select("qx.client",
{"mshtml":function(value,
old){},
"gecko":function(value,
old){if(value){this.removeStyleProperty("MozUserSelect");
}else{this.setStyleProperty("MozUserSelect",
"none");
}},
"webkit":function(value,
old){if(value){this.removeStyleProperty("WebkitUserSelect");
}else{this.setStyleProperty("WebkitUserSelect",
"none");
}},
"khtml":function(value,
old){if(value){this.removeStyleProperty("KhtmlUserSelect");
}else{this.setStyleProperty("KhtmlUserSelect",
"none");
}},
"default":function(value,
old){if(value){return this.removeStyleProperty("userSelect");
}else{this.setStyleProperty("userSelect",
"none");
}}}),
_applyOpacity:qx.core.Variant.select("qx.client",
{"mshtml":function(value,
old){if(value==null||value>=1||value<0){this.removeStyleProperty("filter");
}else{this.setStyleProperty("filter",
("Alpha(Opacity="+Math.round(value*100)+")"));
}},
"default":function(value,
old){if(value==null||value>1){if(qx.core.Variant.isSet("qx.client",
"gecko")){this.removeStyleProperty("MozOpacity");
}else if(qx.core.Variant.isSet("qx.client",
"khtml")){this.removeStyleProperty("KhtmlOpacity");
}this.removeStyleProperty("opacity");
}else{value=qx.lang.Number.limit(value,
0,
1);
if(qx.core.Variant.isSet("qx.client",
"gecko")){this.setStyleProperty("MozOpacity",
value);
}else if(qx.core.Variant.isSet("qx.client",
"khtml")){this.setStyleProperty("KhtmlOpacity",
value);
}this.setStyleProperty("opacity",
value);
}}}),
__cursorMap:qx.core.Variant.select("qx.client",
{"mshtml":{"cursor":"hand",
"ew-resize":"e-resize",
"ns-resize":"n-resize",
"nesw-resize":"ne-resize",
"nwse-resize":"nw-resize"},
"opera":{"col-resize":"e-resize",
"row-resize":"n-resize",
"ew-resize":"e-resize",
"ns-resize":"n-resize",
"nesw-resize":"ne-resize",
"nwse-resize":"nw-resize"},
"default":{}}),
_applyCursor:function(value,
old){if(value){this.setStyleProperty("cursor",
this.__cursorMap[value]||value);
}else{this.removeStyleProperty("cursor");
}},
_applyCommand:function(value,
old){},
_applyBackgroundImage:function(value,
old){var imageMgr=qx.io.image.Manager.getInstance();
var aliasMgr=qx.io.Alias.getInstance();
if(old){imageMgr.hide(old);
}
if(value){imageMgr.show(value);
}aliasMgr.connect(this._styleBackgroundImage,
this,
value);
},
_styleBackgroundImage:function(value){value?this.setStyleProperty("backgroundImage",
"url("+value+")"):this.removeStyleProperty("backgroundImage");
},
_applyClip:function(value,
old){return this._compileClipString();
},
_compileClipString:function(){var vLeft=this.getClipLeft();
var vTop=this.getClipTop();
var vWidth=this.getClipWidth();
var vHeight=this.getClipHeight();
var vRight,
vBottom;
if(vLeft==null){vRight=(vWidth==null?"auto":vWidth+"px");
vLeft="auto";
}else{vRight=(vWidth==null?"auto":vLeft+vWidth+"px");
vLeft=vLeft+"px";
}
if(vTop==null){vBottom=(vHeight==null?"auto":vHeight+"px");
vTop="auto";
}else{vBottom=(vHeight==null?"auto":vTop+vHeight+"px");
vTop=vTop+"px";
}return this.setStyleProperty("clip",
("rect("+vTop+","+vRight+","+vBottom+","+vLeft+")"));
},
_applyOverflow:qx.core.Variant.select("qx.client",
{"default":function(value,
old){var pv=value;
var pn="overflow";
switch(value){case "scrollX":pn="overflowX";
pv="scroll";
break;
case "scrollY":pn="overflowY";
pv="scroll";
break;
}var a=["overflow",
"overflowX",
"overflowY"];
for(var i=0;i<a.length;i++){if(a[i]!=pn){this.removeStyleProperty(a[i]);
}}
switch(value){case "scrollX":this.setStyleProperty("overflowY",
"hidden");
break;
case "scrollY":this.setStyleProperty("overflowX",
"hidden");
break;
}this._renderOverflow(pn,
pv,
value,
old);
this.addToQueue("overflow");
},
"gecko":function(value,
old){var pv=value;
var pn="overflow";
switch(pv){case "hidden":pv="-moz-scrollbars-none";
break;
case "scrollX":pv="-moz-scrollbars-horizontal";
break;
case "scrollY":pv="-moz-scrollbars-vertical";
break;
}this._renderOverflow(pn,
pv,
value,
old);
this.addToQueue("overflow");
},
"opera":function(value,
old){var pv=value;
var pn="overflow";
switch(pv){case "scrollX":case "scrollY":pv="scroll";
break;
}this._renderOverflow(pn,
pv,
value,
old);
this.addToQueue("overflow");
}}),
_renderOverflow:function(pn,
pv,
value,
old){this.setStyleProperty(pn,
pv||"");
this._invalidateFrameWidth();
this._invalidateFrameHeight();
},
getOverflowX:function(){var vOverflow=this.getOverflow();
return vOverflow=="scrollY"?"hidden":vOverflow;
},
getOverflowY:function(){var vOverflow=this.getOverflow();
return vOverflow=="scrollX"?"hidden":vOverflow;
},
_applyBackgroundColor:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._styleBackgroundColor,
this,
value);
},
_styleBackgroundColor:function(value){value?this.setStyleProperty("backgroundColor",
value):this.removeStyleProperty("backgroundColor");
},
_applyTextColor:function(value,
old){},
_applyFont:function(value,
old){},
_cachedBorderTop:0,
_cachedBorderRight:0,
_cachedBorderBottom:0,
_cachedBorderLeft:0,
_applyBorder:function(value,
old){qx.theme.manager.Border.getInstance().connect(this._queueBorder,
this,
value);
},
__borderJobs:{top:"borderTop",
right:"borderRight",
bottom:"borderBottom",
left:"borderLeft"},
_queueBorder:function(value,
edge){if(!edge){var jobs=this.__borderJobs;
for(var entry in jobs){this.addToQueue(jobs[entry]);
}this.__reflowBorderX(value);
this.__reflowBorderY(value);
}else{if(edge==="left"||edge==="right"){this.__reflowBorderX(value);
}else{this.__reflowBorderY(value);
}this.addToQueue(this.__borderJobs[edge]);
}this.__borderObject=value;
},
__reflowBorderX:function(value){var oldLeftWidth=this._cachedBorderLeft;
var oldRightWidth=this._cachedBorderRight;
this._cachedBorderLeft=value?value.getWidthLeft():0;
this._cachedBorderRight=value?value.getWidthRight():0;
if((oldLeftWidth+oldRightWidth)!=(this._cachedBorderLeft+this._cachedBorderRight)){this._invalidateFrameWidth();
}},
__reflowBorderY:function(value){var oldTopWidth=this._cachedBorderTop;
var oldBottomWidth=this._cachedBorderBottom;
this._cachedBorderTop=value?value.getWidthTop():0;
this._cachedBorderBottom=value?value.getWidthBottom():0;
if((oldTopWidth+oldBottomWidth)!=(this._cachedBorderTop+this._cachedBorderBottom)){this._invalidateFrameHeight();
}},
renderBorder:function(changes){var value=this.__borderObject;
var mgr=qx.theme.manager.Border.getInstance();
if(value){if(changes.borderTop){value.renderTop(this);
}
if(changes.borderRight){value.renderRight(this);
}
if(changes.borderBottom){value.renderBottom(this);
}
if(changes.borderLeft){value.renderLeft(this);
}}else{var border=qx.ui.core.Border;
if(changes.borderTop){border.resetTop(this);
}
if(changes.borderRight){border.resetRight(this);
}
if(changes.borderBottom){border.resetBottom(this);
}
if(changes.borderLeft){border.resetLeft(this);
}}},
prepareEnhancedBorder:qx.core.Variant.select("qx.client",
{"gecko":qx.lang.Function.returnTrue,
"default":function(){var elem=this.getElement();
var cl=this._borderElement=document.createElement("div");
var es=elem.style;
var cs=this._innerStyle=cl.style;
if(qx.core.Variant.isSet("qx.client",
"mshtml")){}else{cs.width=cs.height="100%";
}cs.position="absolute";
for(var i in this._styleProperties){switch(i){case "zIndex":case "filter":case "display":break;
default:cs[i]=es[i];
es[i]="";
}}
for(var i in this._htmlProperties){switch(i){case "unselectable":cl.unselectable=this._htmlProperties[i];
}}while(elem.firstChild){cl.appendChild(elem.firstChild);
}elem.appendChild(cl);
}}),
_applyPaddingTop:function(value,
old){this.addToQueue("paddingTop");
this._invalidateFrameHeight();
},
_applyPaddingRight:function(value,
old){this.addToQueue("paddingRight");
this._invalidateFrameWidth();
},
_applyPaddingBottom:function(value,
old){this.addToQueue("paddingBottom");
this._invalidateFrameHeight();
},
_applyPaddingLeft:function(value,
old){this.addToQueue("paddingLeft");
this._invalidateFrameWidth();
},
renderPadding:function(changes){},
_applyMarginLeft:function(value,
old){this.addToQueue("marginLeft");
},
_applyMarginRight:function(value,
old){this.addToQueue("marginRight");
},
_applyMarginTop:function(value,
old){this.addToQueue("marginTop");
},
_applyMarginBottom:function(value,
old){this.addToQueue("marginBottom");
},
execute:function(){var cmd=this.getCommand();
if(cmd){cmd.execute(this);
}this.createDispatchEvent("execute");
},
_visualPropertyCheck:function(){if(!this.isCreated()){throw new Error(this.classname+": Element must be created previously!");
}},
setScrollLeft:function(nScrollLeft){this._visualPropertyCheck();
this._getTargetNode().scrollLeft=nScrollLeft;
},
setScrollTop:function(nScrollTop){this._visualPropertyCheck();
this._getTargetNode().scrollTop=nScrollTop;
},
getOffsetLeft:function(){this._visualPropertyCheck();
return qx.html.Offset.getLeft(this.getElement());
},
getOffsetTop:function(){this._visualPropertyCheck();
return qx.html.Offset.getTop(this.getElement());
},
getScrollLeft:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollLeft;
},
getScrollTop:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollTop;
},
getClientWidth:function(){this._visualPropertyCheck();
return this._getTargetNode().clientWidth;
},
getClientHeight:function(){this._visualPropertyCheck();
return this._getTargetNode().clientHeight;
},
getOffsetWidth:function(){this._visualPropertyCheck();
return this.getElement().offsetWidth;
},
getOffsetHeight:function(){this._visualPropertyCheck();
return this.getElement().offsetHeight;
},
getScrollWidth:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollWidth;
},
getScrollHeight:function(){this._visualPropertyCheck();
return this._getTargetNode().scrollHeight;
},
scrollIntoView:function(alignTopLeft){this.scrollIntoViewX(alignTopLeft);
this.scrollIntoViewY(alignTopLeft);
},
scrollIntoViewX:function(alignLeft){if(!this._isCreated||!this._isDisplayable){this.warn("The function scrollIntoViewX can only be called after the widget is created!");
return false;
}return qx.html.ScrollIntoView.scrollX(this.getElement(),
alignLeft);
},
scrollIntoViewY:function(alignTop){if(!this._isCreated||!this._isDisplayable){this.warn("The function scrollIntoViewY can only be called after the widget is created!");
return false;
}return qx.html.ScrollIntoView.scrollY(this.getElement(),
alignTop);
},
supportsDrop:function(dragCache){var supportsDropMethod=this.getSupportsDropMethod();
if(supportsDropMethod!==null){return supportsDropMethod.call(this,
dragCache);
}return (this!=dragCache.sourceWidget);
}},
settings:{"qx.widgetQueueDebugging":false},
defer:function(statics,
members){statics.__initApplyMethods(members);
if(qx.core.Variant.isSet("qx.client",
"mshtml")){members._renderRuntimeWidth=function(v){this._style.pixelWidth=(v==null)?0:v;
if(this._innerStyle){this._innerStyle.pixelWidth=(v==null)?0:v-2;
}};
members._renderRuntimeHeight=function(v){this._style.pixelHeight=(v==null)?0:v;
if(this._innerStyle){this._innerStyle.pixelHeight=(v==null)?0:v-2;
}};
members._resetRuntimeWidth=function(){this._style.width="";
if(this._innerStyle){this._innerStyle.width="";
}};
members._resetRuntimeHeight=function(){this._style.height="";
if(this._innerStyle){this._innerStyle.height="";
}};
}statics.__initLayoutProperties(statics);
{};
},
destruct:function(){var elem=this.getElement();
if(elem){elem.qx_Widget=null;
}this._disposeFields("_isCreated",
"_inlineEvents",
"_element",
"_style",
"_borderElement",
"_innerStyle",
"_oldParent",
"_styleProperties",
"_htmlProperties",
"_htmlAttributes",
"__states",
"_jobQueue",
"_layoutChanges",
"__borderObject");
}});




/* ID: qx.html.Dimension */
qx.Class.define("qx.html.Dimension",
{statics:{getOuterWidth:function(el){return qx.html.Dimension.getBoxWidth(el)+qx.html.Style.getMarginLeft(el)+qx.html.Style.getMarginRight(el);
},
getOuterHeight:function(el){return qx.html.Dimension.getBoxHeight(el)+qx.html.Style.getMarginTop(el)+qx.html.Style.getMarginBottom(el);
},
getBoxWidthForZeroHeight:function(el){var h=el.offsetHeight;
if(h==0){var o=el.style.height;
el.style.height="1px";
}var v=el.offsetWidth;
if(h==0){el.style.height=o;
}return v;
},
getBoxHeightForZeroWidth:function(el){var w=el.offsetWidth;
if(w==0){var o=el.style.width;
el.style.width="1px";
}var v=el.offsetHeight;
if(w==0){el.style.width=o;
}return v;
},
getBoxWidth:function(el){return el.offsetWidth;
},
getBoxHeight:function(el){return el.offsetHeight;
},
getAreaWidth:qx.core.Variant.select("qx.client",
{"gecko":function(el){if(el.clientWidth!=0&&el.clientWidth!=(qx.html.Style.getBorderLeft(el)+qx.html.Style.getBorderRight(el))){return el.clientWidth;
}else{return qx.html.Dimension.getBoxWidth(el)-qx.html.Dimension.getInsetLeft(el)-qx.html.Dimension.getInsetRight(el);
}},
"default":function(el){return el.clientWidth!=0?el.clientWidth:(qx.html.Dimension.getBoxWidth(el)-qx.html.Dimension.getInsetLeft(el)-qx.html.Dimension.getInsetRight(el));
}}),
getAreaHeight:qx.core.Variant.select("qx.client",
{"gecko":function(el){if(el.clientHeight!=0&&el.clientHeight!=(qx.html.Style.getBorderTop(el)+qx.html.Style.getBorderBottom(el))){return el.clientHeight;
}else{return qx.html.Dimension.getBoxHeight(el)-qx.html.Dimension.getInsetTop(el)-qx.html.Dimension.getInsetBottom(el);
}},
"default":function(el){return el.clientHeight!=0?el.clientHeight:(qx.html.Dimension.getBoxHeight(el)-qx.html.Dimension.getInsetTop(el)-qx.html.Dimension.getInsetBottom(el));
}}),
getInnerWidth:function(el){return qx.html.Dimension.getAreaWidth(el)-qx.html.Style.getPaddingLeft(el)-qx.html.Style.getPaddingRight(el);
},
getInnerHeight:function(el){return qx.html.Dimension.getAreaHeight(el)-qx.html.Style.getPaddingTop(el)-qx.html.Style.getPaddingBottom(el);
},
getInsetLeft:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return el.clientLeft;
},
"default":function(el){return qx.html.Style.getBorderLeft(el);
}}),
getInsetTop:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return el.clientTop;
},
"default":function(el){return qx.html.Style.getBorderTop(el);
}}),
getInsetRight:qx.core.Variant.select("qx.client",
{"mshtml":function(el){if(qx.html.Style.getStyleProperty(el,
"overflowY")=="hidden"||el.clientWidth==0){return qx.html.Style.getBorderRight(el);
}return Math.max(0,
el.offsetWidth-el.clientLeft-el.clientWidth);
},
"default":function(el){if(el.clientWidth==0){var ov=qx.html.Style.getStyleProperty(el,
"overflow");
var sbv=ov=="scroll"||ov=="-moz-scrollbars-vertical"?16:0;
return Math.max(0,
qx.html.Style.getBorderRight(el)+sbv);
}return Math.max(0,
el.offsetWidth-el.clientWidth-qx.html.Style.getBorderLeft(el));
}}),
getInsetBottom:qx.core.Variant.select("qx.client",
{"mshtml":function(el){if(qx.html.Style.getStyleProperty(el,
"overflowX")=="hidden"||el.clientHeight==0){return qx.html.Style.getBorderBottom(el);
}return Math.max(0,
el.offsetHeight-el.clientTop-el.clientHeight);
},
"default":function(el){if(el.clientHeight==0){var ov=qx.html.Style.getStyleProperty(el,
"overflow");
var sbv=ov=="scroll"||ov=="-moz-scrollbars-horizontal"?16:0;
return Math.max(0,
qx.html.Style.getBorderBottom(el)+sbv);
}return Math.max(0,
el.offsetHeight-el.clientHeight-qx.html.Style.getBorderTop(el));
}}),
getScrollBarSizeLeft:function(el){return 0;
},
getScrollBarSizeTop:function(el){return 0;
},
getScrollBarSizeRight:function(el){return qx.html.Dimension.getInsetRight(el)-qx.html.Style.getBorderRight(el);
},
getScrollBarSizeBottom:function(el){return qx.html.Dimension.getInsetBottom(el)-qx.html.Style.getBorderBottom(el);
},
getScrollBarVisibleX:function(el){return qx.html.Dimension.getScrollBarSizeRight(el)>0;
},
getScrollBarVisibleY:function(el){return qx.html.Dimension.getScrollBarSizeBottom(el)>0;
}}});




/* ID: qx.html.Style */
qx.Class.define("qx.html.Style",
{statics:{getStylePropertySure:qx.lang.Object.select((document.defaultView&&document.defaultView.getComputedStyle)?"hasComputed":"noComputed",
{"hasComputed":function(el,
prop){return !el?null:el.ownerDocument?el.ownerDocument.defaultView.getComputedStyle(el,
"")[prop]:el.style[prop];
},
"noComputed":qx.core.Variant.select("qx.client",
{"mshtml":function(el,
prop){try{if(!el){return null;
}
if(el.parentNode&&el.currentStyle){return el.currentStyle[prop];
}else{var v1=el.runtimeStyle[prop];
if(v1!=null&&typeof v1!="undefined"&&v1!=""){return v1;
}return el.style[prop];
}}catch(ex){throw new Error("Could not evaluate computed style: "+el+"["+prop+"]: "+ex);
}},
"default":function(el,
prop){return !el?null:el.style[prop];
}})}),
getStyleProperty:qx.lang.Object.select((document.defaultView&&document.defaultView.getComputedStyle)?"hasComputed":"noComputed",
{"hasComputed":function(el,
prop){try{return el.ownerDocument.defaultView.getComputedStyle(el,
"")[prop];
}catch(ex){throw new Error("Could not evaluate computed style: "+el+"["+prop+"]: "+ex);
}},
"noComputed":qx.core.Variant.select("qx.client",
{"mshtml":function(el,
prop){try{return el.currentStyle[prop];
}catch(ex){throw new Error("Could not evaluate computed style: "+el+"["+prop+"]: "+ex);
}},
"default":function(el,
prop){try{return el.style[prop];
}catch(ex){throw new Error("Could not evaluate computed style: "+el+"["+prop+"]");
}}})}),
getStyleSize:function(vElement,
propertyName){return parseInt(qx.html.Style.getStyleProperty(vElement,
propertyName))||0;
},
getMarginLeft:function(vElement){return qx.html.Style.getStyleSize(vElement,
"marginLeft");
},
getMarginTop:function(vElement){return qx.html.Style.getStyleSize(vElement,
"marginTop");
},
getMarginRight:function(vElement){return qx.html.Style.getStyleSize(vElement,
"marginRight");
},
getMarginBottom:function(vElement){return qx.html.Style.getStyleSize(vElement,
"marginBottom");
},
getPaddingLeft:function(vElement){return qx.html.Style.getStyleSize(vElement,
"paddingLeft");
},
getPaddingTop:function(vElement){return qx.html.Style.getStyleSize(vElement,
"paddingTop");
},
getPaddingRight:function(vElement){return qx.html.Style.getStyleSize(vElement,
"paddingRight");
},
getPaddingBottom:function(vElement){return qx.html.Style.getStyleSize(vElement,
"paddingBottom");
},
getBorderLeft:function(vElement){return qx.html.Style.getStyleProperty(vElement,
"borderLeftStyle")=="none"?0:qx.html.Style.getStyleSize(vElement,
"borderLeftWidth");
},
getBorderTop:function(vElement){return qx.html.Style.getStyleProperty(vElement,
"borderTopStyle")=="none"?0:qx.html.Style.getStyleSize(vElement,
"borderTopWidth");
},
getBorderRight:function(vElement){return qx.html.Style.getStyleProperty(vElement,
"borderRightStyle")=="none"?0:qx.html.Style.getStyleSize(vElement,
"borderRightWidth");
},
getBorderBottom:function(vElement){return qx.html.Style.getStyleProperty(vElement,
"borderBottomStyle")=="none"?0:qx.html.Style.getStyleSize(vElement,
"borderBottomWidth");
}}});




/* ID: qx.html.StyleSheet */
qx.Class.define("qx.html.StyleSheet",
{statics:{includeFile:function(vHref){var el=document.createElement("link");
el.type="text/css";
el.rel="stylesheet";
el.href=vHref;
var head=document.getElementsByTagName("head")[0];
head.appendChild(el);
},
createElement:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function(vCssText){var vSheet=document.createStyleSheet();
if(vCssText){vSheet.cssText=vCssText;
}return vSheet;
},
"other":function(vCssText){var vElement=document.createElement("style");
vElement.type="text/css";
vElement.appendChild(document.createTextNode(vCssText||"body {}"));
document.getElementsByTagName("head")[0].appendChild(vElement);
if(vElement.sheet){return vElement.sheet;
}else{var styles=document.styleSheets;
for(var i=styles.length-1;i>=0;i--){if(styles[i].ownerNode==vElement){return styles[i];
}}}throw "Error: Could not get a reference to the sheet object";
}}),
addRule:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function(vSheet,
vSelector,
vStyle){vSheet.addRule(vSelector,
vStyle);
},
"other":qx.lang.Object.select(qx.core.Client.getInstance().isSafari2()?"safari2":"other",
{"safari2+":function(vSheet,
vSelector,
vStyle){if(!vSheet._qxRules){vSheet._qxRules={};
}
if(!vSheet._qxRules[vSelector]){var ruleNode=document.createTextNode(vSelector+"{"+vStyle+"}");
vSheet.ownerNode.appendChild(ruleNode);
vSheet._qxRules[vSelector]=ruleNode;
}},
"other":function(vSheet,
vSelector,
vStyle){vSheet.insertRule(vSelector+"{"+vStyle+"}",
vSheet.cssRules.length);
}})}),
removeRule:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function(vSheet,
vSelector){var vRules=vSheet.rules;
var vLength=vRules.length;
for(var i=vLength-1;i>=0;i--){if(vRules[i].selectorText==vSelector){vSheet.removeRule(i);
}}},
"other":qx.lang.Object.select(qx.core.Client.getInstance().isSafari2()?"safari2":"other",
{"safari2+":function(vSheet,
vSelector){var warn=function(){qx.log.Logger.ROOT_LOGGER.warn("In Safari/Webkit you can only remove rules that are created using qx.html.StyleSheet.addRule");
};
if(!vSheet._qxRules){warn();
}var ruleNode=vSheet._qxRules[vSelector];
if(ruleNode){vSheet.ownerNode.removeChild(ruleNode);
vSheet._qxRules[vSelector]=null;
}else{warn();
}},
"other":function(vSheet,
vSelector){var vRules=vSheet.cssRules;
var vLength=vRules.length;
for(var i=vLength-1;i>=0;i--){if(vRules[i].selectorText==vSelector){vSheet.deleteRule(i);
}}}})}),
removeAllRules:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function(vSheet){var vRules=vSheet.rules;
var vLength=vRules.length;
for(var i=vLength-1;i>=0;i--){vSheet.removeRule(i);
}},
"other":qx.lang.Object.select(qx.core.Client.getInstance().isSafari2()?"safari2":"other",
{"safari2+":function(vSheet){var node=vSheet.ownerNode;
var rules=node.childNodes;
while(rules.length>0){node.removeChild(rules[0]);
}},
"other":function(vSheet){var vRules=vSheet.cssRules;
var vLength=vRules.length;
for(var i=vLength-1;i>=0;i--){vSheet.deleteRule(i);
}}})}),
addImport:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function(vSheet,
vUrl){vSheet.addImport(vUrl);
},
"other":qx.lang.Object.select(qx.core.Client.getInstance().isSafari2()?"safari2":"other",
{"safari2+":function(vSheet,
vUrl){vSheet.ownerNode.appendChild(document.createTextNode('@import "'+vUrl+'";'));
},
"other":function(vSheet,
vUrl){vSheet.insertRule('@import "'+vUrl+'";',
vSheet.cssRules.length);
}})}),
removeImport:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function(vSheet,
vUrl){var vImports=vSheet.imports;
var vLength=vImports.length;
for(var i=vLength-1;i>=0;i--){if(vImports[i].href==vUrl){vSheet.removeImport(i);
}}},
"other":function(vSheet,
vUrl){var vRules=vSheet.cssRules;
var vLength=vRules.length;
for(var i=vLength-1;i>=0;i--){if(vRules[i].href==vUrl){vSheet.deleteRule(i);
}}}}),
removeAllImports:qx.lang.Object.select(document.createStyleSheet?"ie4+":"other",
{"ie4+":function(vSheet){var vImports=vSheet.imports;
var vLength=vImports.length;
for(var i=vLength-1;i>=0;i--){vSheet.removeImport(i);
}},
"other":function(vSheet){var vRules=vSheet.cssRules;
var vLength=vRules.length;
for(var i=vLength-1;i>=0;i--){if(vRules[i].type==vRules[i].IMPORT_RULE){vSheet.deleteRule(i);
}}}})}});




/* ID: qx.ui.core.Parent */
qx.Class.define("qx.ui.core.Parent",
{extend:qx.ui.core.Widget,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
this._children=[];
this._layoutImpl=this._createLayoutImpl();
},
properties:{focusHandler:{check:"qx.event.handler.FocusHandler",
apply:"_applyFocusHandler",
nullable:true},
activeChild:{check:"qx.ui.core.Widget",
apply:"_applyActiveChild",
event:"changeActiveChild",
nullable:true},
focusedChild:{check:"qx.ui.core.Widget",
apply:"_applyFocusedChild",
event:"changeFocusedChild",
nullable:true},
visibleChildren:{_cached:true,
defaultValue:null}},
members:{isFocusRoot:function(){return this.getFocusHandler()!=null;
},
getFocusRoot:function(){if(this.isFocusRoot()){return this;
}
if(this._hasParent){return this.getParent().getFocusRoot();
}return null;
},
activateFocusRoot:function(){this.setFocusHandler(new qx.event.handler.FocusHandler(this));
},
_onfocuskeyevent:function(e){this.getFocusHandler()._onkeyevent(this,
e);
},
_applyFocusHandler:function(value,
old){if(value){this.addEventListener("keypress",
this._onfocuskeyevent);
if(this.getTabIndex()<1){this.setTabIndex(1);
}this.setHideFocus(true);
this.setActiveChild(this);
}else{this.removeEventListener("keydown",
this._onfocuskeyevent);
this.removeEventListener("keypress",
this._onfocuskeyevent);
this.setTabIndex(-1);
this.setHideFocus(false);
}},
_applyActiveChild:function(value,
old){},
_applyFocusedChild:function(value,
old){var vFocusValid=value!=null;
var vBlurValid=old!=null;
if(qx.Class.isDefined("qx.ui.popup.PopupManager")&&vFocusValid){var vMgr=qx.ui.popup.PopupManager.getInstance();
if(vMgr){vMgr.update(value);
}}
if(vBlurValid){if(old.hasEventListeners("focusout")){var vEventObject=new qx.event.type.FocusEvent("focusout",
old);
if(vFocusValid){vEventObject.setRelatedTarget(value);
}old.dispatchEvent(vEventObject);
vEventObject.dispose();
}}
if(vFocusValid){if(value.hasEventListeners("focusin")){var vEventObject=new qx.event.type.FocusEvent("focusin",
value);
if(vBlurValid){vEventObject.setRelatedTarget(old);
}value.dispatchEvent(vEventObject);
vEventObject.dispose();
}}
if(vBlurValid){if(this.getActiveChild()==old&&!vFocusValid){this.setActiveChild(null);
}old.setFocused(false);
var vEventObject=new qx.event.type.FocusEvent("blur",
old);
if(vFocusValid){vEventObject.setRelatedTarget(value);
}old.dispatchEvent(vEventObject);
if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){var vMgr=qx.ui.popup.ToolTipManager.getInstance();
if(vMgr){vMgr.handleBlur(vEventObject);
}}vEventObject.dispose();
}
if(vFocusValid){this.setActiveChild(value);
value.setFocused(true);
qx.event.handler.EventHandler.getInstance().setFocusRoot(this);
var vEventObject=new qx.event.type.FocusEvent("focus",
value);
if(vBlurValid){vEventObject.setRelatedTarget(old);
}value.dispatchEvent(vEventObject);
if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){var vMgr=qx.ui.popup.ToolTipManager.getInstance();
if(vMgr){vMgr.handleFocus(vEventObject);
}}vEventObject.dispose();
}},
_layoutImpl:null,
_createLayoutImpl:function(){return null;
},
getLayoutImpl:function(){return this._layoutImpl;
},
getChildren:function(){return this._children;
},
getChildrenLength:function(){return this.getChildren().length;
},
hasChildren:function(){return this.getChildrenLength()>0;
},
isEmpty:function(){return this.getChildrenLength()==0;
},
indexOf:function(vChild){return this.getChildren().indexOf(vChild);
},
contains:function(vWidget){switch(vWidget){case null:return false;
case this:return true;
default:return this.contains(vWidget.getParent());
}},
_computeVisibleChildren:function(){var vVisible=[];
var vChildren=this.getChildren();
if(!vChildren){return 0;
}var vLength=vChildren.length;
for(var i=0;i<vLength;i++){var vChild=vChildren[i];
if(vChild._isDisplayable){vVisible.push(vChild);
}}return vVisible;
},
getVisibleChildrenLength:function(){return this.getVisibleChildren().length;
},
hasVisibleChildren:function(){return this.getVisibleChildrenLength()>0;
},
isVisibleEmpty:function(){return this.getVisibleChildrenLength()==0;
},
add:function(varargs){var vWidget;
for(var i=0,
l=arguments.length;i<l;i++){vWidget=arguments[i];
if(!(vWidget instanceof qx.ui.core.Parent)&&!(vWidget instanceof qx.ui.basic.Terminator)){throw new Error("Invalid Widget: "+vWidget);
}else{vWidget.setParent(this);
}}return this;
},
addAt:function(vChild,
vIndex){if(vIndex==null||vIndex<0){throw new Error("Not a valid index for addAt(): "+vIndex);
}
if(vChild.getParent()==this){var vChildren=this.getChildren();
var vOldIndex=vChildren.indexOf(vChild);
if(vOldIndex!=vIndex){if(vOldIndex!=-1){qx.lang.Array.removeAt(vChildren,
vOldIndex);
}qx.lang.Array.insertAt(vChildren,
vChild,
vIndex);
if(this._initialLayoutDone){this._invalidateVisibleChildren();
this.getLayoutImpl().updateChildrenOnMoveChild(vChild,
vIndex,
vOldIndex);
}}}else{vChild._insertIndex=vIndex;
vChild.setParent(this);
}},
addAtBegin:function(vChild){return this.addAt(vChild,
0);
},
addAtEnd:function(vChild){var vLength=this.getChildrenLength();
return this.addAt(vChild,
vChild.getParent()==this?vLength-1:vLength);
},
addBefore:function(vChild,
vBefore){var vChildren=this.getChildren();
var vTargetIndex=vChildren.indexOf(vBefore);
if(vTargetIndex==-1){throw new Error("Child to add before: "+vBefore+" is not inside this parent.");
}var vSourceIndex=vChildren.indexOf(vChild);
if(vSourceIndex==-1||vSourceIndex>vTargetIndex){vTargetIndex++;
}return this.addAt(vChild,
Math.max(0,
vTargetIndex-1));
},
addAfter:function(vChild,
vAfter){var vChildren=this.getChildren();
var vTargetIndex=vChildren.indexOf(vAfter);
if(vTargetIndex==-1){throw new Error("Child to add after: "+vAfter+" is not inside this parent.");
}var vSourceIndex=vChildren.indexOf(vChild);
if(vSourceIndex!=-1&&vSourceIndex<vTargetIndex){vTargetIndex--;
}return this.addAt(vChild,
Math.min(vChildren.length,
vTargetIndex+1));
},
remove:function(varargs){var vWidget;
for(var i=0,
l=arguments.length;i<l;i++){vWidget=arguments[i];
if(!(vWidget instanceof qx.ui.core.Parent)&&!(vWidget instanceof qx.ui.basic.Terminator)){throw new Error("Invalid Widget: "+vWidget);
}else if(vWidget.getParent()==this){vWidget.setParent(null);
}}},
removeAt:function(vIndex){var vChild=this.getChildren()[vIndex];
if(vChild){delete vChild._insertIndex;
vChild.setParent(null);
}},
removeAll:function(){var cs=this.getChildren();
var co=cs[0];
while(co){this.remove(co);
co=cs[0];
}},
getFirstChild:function(){return qx.lang.Array.getFirst(this.getChildren())||null;
},
getFirstVisibleChild:function(){return qx.lang.Array.getFirst(this.getVisibleChildren())||null;
},
getFirstActiveChild:function(vIgnoreClasses){return qx.ui.core.Widget.getActiveSiblingHelper(null,
this,
1,
vIgnoreClasses,
"first")||null;
},
getLastChild:function(){return qx.lang.Array.getLast(this.getChildren())||null;
},
getLastVisibleChild:function(){return qx.lang.Array.getLast(this.getVisibleChildren())||null;
},
getLastActiveChild:function(vIgnoreClasses){return qx.ui.core.Widget.getActiveSiblingHelper(null,
this,
-1,
vIgnoreClasses,
"last")||null;
},
forEachChild:function(vFunc){var ch=this.getChildren(),
chc,
i=-1;
if(!ch){return;
}
while(chc=ch[++i]){vFunc.call(chc,
i);
}},
forEachVisibleChild:function(vFunc){var ch=this.getVisibleChildren(),
chc,
i=-1;
if(!ch){return;
}
while(chc=ch[++i]){vFunc.call(chc,
i);
}},
_beforeAppear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeAppear();
}});
},
_afterAppear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterAppear();
}});
},
_beforeDisappear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeDisappear();
}});
},
_afterDisappear:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterDisappear();
}});
},
_beforeInsertDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeInsertDom();
}});
},
_afterInsertDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterInsertDom();
}});
},
_beforeRemoveDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._beforeRemoveDom();
}});
},
_afterRemoveDom:function(){arguments.callee.base.call(this);
this.forEachVisibleChild(function(){if(this.isAppearRelevant()){this._afterRemoveDom();
}});
},
_handleDisplayableCustom:function(vDisplayable,
vParent,
vHint){this.forEachChild(function(){this._handleDisplayable();
});
},
_addChildrenToStateQueue:function(){this.forEachVisibleChild(function(){this.addToStateQueue();
});
},
recursiveAddToStateQueue:function(){this.addToStateQueue();
this.forEachVisibleChild(function(){this.recursiveAddToStateQueue();
});
},
_recursiveAppearanceThemeUpdate:function(vNewAppearanceTheme,
vOldAppearanceTheme){arguments.callee.base.call(this,
vNewAppearanceTheme,
vOldAppearanceTheme);
this.forEachVisibleChild(function(){this._recursiveAppearanceThemeUpdate(vNewAppearanceTheme,
vOldAppearanceTheme);
});
},
_addChildToChildrenQueue:function(vChild){if(!vChild._isInParentChildrenQueue&&!vChild._isDisplayable){this.warn("Ignoring invisible child: "+vChild);
}
if(!vChild._isInParentChildrenQueue&&vChild._isDisplayable){qx.ui.core.Widget.addToGlobalLayoutQueue(this);
if(!this._childrenQueue){this._childrenQueue={};
}this._childrenQueue[vChild.toHashCode()]=vChild;
}},
_removeChildFromChildrenQueue:function(vChild){if(this._childrenQueue&&vChild._isInParentChildrenQueue){delete this._childrenQueue[vChild.toHashCode()];
if(qx.lang.Object.isEmpty(this._childrenQueue)){qx.ui.core.Widget.removeFromGlobalLayoutQueue(this);
}}},
_flushChildrenQueue:function(){if(!qx.lang.Object.isEmpty(this._childrenQueue)){this.getLayoutImpl().flushChildrenQueue(this._childrenQueue);
delete this._childrenQueue;
}},
_addChildrenToLayoutQueue:function(p){this.forEachChild(function(){this.addToLayoutChanges(p);
});
},
_layoutChild:function(vChild){if(!vChild._isDisplayable){return ;
}var vChanges=vChild._layoutChanges;
try{if(vChild.renderBorder){if(vChanges.borderTop||vChanges.borderRight||vChanges.borderBottom||vChanges.borderLeft){vChild.renderBorder(vChanges);
}}}catch(ex){this.error("Could not apply border to child "+vChild,
ex);
}
try{if(vChild.renderPadding){if(vChanges.paddingLeft||vChanges.paddingRight||vChanges.paddingTop||vChanges.paddingBottom){vChild.renderPadding(vChanges);
}}}catch(ex){this.error("Could not apply padding to child "+vChild,
ex);
}try{this.getLayoutImpl().layoutChild(vChild,
vChanges);
}catch(ex){this.error("Could not layout child "+vChild+" through layout handler",
ex);
}try{vChild._layoutPost(vChanges);
}catch(ex){this.error("Could not post layout child "+vChild,
ex);
}try{if(vChanges.initial){vChild._initialLayoutDone=true;
qx.ui.core.Widget.addToGlobalDisplayQueue(vChild);
}}catch(ex){this.error("Could not handle display updates from layout flush for child "+vChild,
ex);
}vChild._layoutChanges={};
delete vChild._isInParentLayoutQueue;
delete this._childrenQueue[vChild.toHashCode()];
},
_layoutPost:qx.lang.Function.returnTrue,
_computePreferredInnerWidth:function(){return this.getLayoutImpl().computeChildrenNeededWidth();
},
_computePreferredInnerHeight:function(){return this.getLayoutImpl().computeChildrenNeededHeight();
},
_changeInnerWidth:function(vNew,
vOld){var vLayout=this.getLayoutImpl();
if(vLayout.invalidateChildrenFlexWidth){vLayout.invalidateChildrenFlexWidth();
}this.forEachVisibleChild(function(){if(vLayout.updateChildOnInnerWidthChange(this)&&this._recomputeBoxWidth()){this._recomputeOuterWidth();
this._recomputeInnerWidth();
}});
},
_changeInnerHeight:function(vNew,
vOld){var vLayout=this.getLayoutImpl();
if(vLayout.invalidateChildrenFlexHeight){vLayout.invalidateChildrenFlexHeight();
}this.forEachVisibleChild(function(){if(vLayout.updateChildOnInnerHeightChange(this)&&this._recomputeBoxHeight()){this._recomputeOuterHeight();
this._recomputeInnerHeight();
}});
},
getInnerWidthForChild:function(vChild){return this.getInnerWidth();
},
getInnerHeightForChild:function(vChild){return this.getInnerHeight();
},
_remappingChildTable:["add",
"remove",
"addAt",
"addAtBegin",
"addAtEnd",
"removeAt",
"addBefore",
"addAfter",
"removeAll"],
_remapStart:"return this._remappingChildTarget.",
_remapStop:".apply(this._remappingChildTarget, arguments)",
remapChildrenHandlingTo:function(vTarget){var t=this._remappingChildTable;
this._remappingChildTarget=vTarget;
for(var i=0,
l=t.length,
s;i<l;i++){s=t[i];
this[s]=new Function(qx.ui.core.Parent.prototype._remapStart+s+qx.ui.core.Parent.prototype._remapStop);
}}},
defer:function(statics,
members,
properties){if(qx.core.Variant.isSet("qx.client",
"opera")){members._layoutChildOrig=members._layoutChild;
members._layoutChild=function(vChild){if(!vChild._initialLayoutDone||!vChild._layoutChanges.border){return this._layoutChildOrig(vChild);
}var vStyle=vChild.getElement().style;
var vOldDisplay=vStyle.display;
vStyle.display="none";
var vRet=this._layoutChildOrig(vChild);
vStyle.display=vOldDisplay;
return vRet;
};
}},
destruct:function(){this._disposeObjectDeep("_children",
1);
this._disposeObjects("_layoutImpl");
this._disposeFields("_childrenQueue",
"_childrenQueue",
"_remappingChildTable",
"_remappingChildTarget",
"_cachedVisibleChildren");
}});




/* ID: qx.event.type.FocusEvent */
qx.Class.define("qx.event.type.FocusEvent",
{extend:qx.event.type.Event,
construct:function(type,
target){arguments.callee.base.call(this,
type);
this.setTarget(target);
switch(type){case "focusin":case "focusout":this.setBubbles(true);
this.setPropagationStopped(false);
}}});




/* ID: qx.event.handler.EventHandler */
qx.Class.define("qx.event.handler.EventHandler",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this.__onmouseevent=qx.lang.Function.bind(this._onmouseevent,
this);
this.__ondragevent=qx.lang.Function.bind(this._ondragevent,
this);
this.__onselectevent=qx.lang.Function.bind(this._onselectevent,
this);
this.__onwindowblur=qx.lang.Function.bind(this._onwindowblur,
this);
this.__onwindowfocus=qx.lang.Function.bind(this._onwindowfocus,
this);
this.__onwindowresize=qx.lang.Function.bind(this._onwindowresize,
this);
this._commands={};
},
events:{"error":"qx.event.type.DataEvent"},
statics:{mouseEventTypes:["mouseover",
"mousemove",
"mouseout",
"mousedown",
"mouseup",
"click",
"dblclick",
"contextmenu",
qx.core.Variant.isSet("qx.client",
"gecko")?"DOMMouseScroll":"mousewheel"],
keyEventTypes:["keydown",
"keypress",
"keyup"],
dragEventTypes:qx.core.Variant.select("qx.client",
{"gecko":["dragdrop",
"dragover",
"dragenter",
"dragexit",
"draggesture"],
"mshtml":["dragend",
"dragover",
"dragstart",
"drag",
"dragenter",
"dragleave"],
"default":["dragstart",
"dragdrop",
"dragover",
"drag",
"dragleave",
"dragenter",
"dragexit",
"draggesture"]}),
getDomTarget:qx.core.Variant.select("qx.client",
{"mshtml":function(vDomEvent){return vDomEvent.target||vDomEvent.srcElement;
},
"webkit":function(vDomEvent){var vNode=vDomEvent.target||vDomEvent.srcElement;
if(vNode&&(vNode.nodeType==qx.dom.Node.TEXT)){vNode=vNode.parentNode;
}return vNode;
},
"default":function(vDomEvent){return vDomEvent.target;
}}),
stopDomEvent:function(vDomEvent){if(vDomEvent.preventDefault){vDomEvent.preventDefault();
}vDomEvent.returnValue=false;
},
getOriginalTargetObject:function(vNode){if(vNode==document.documentElement){vNode=document.body;
}while(vNode!=null&&vNode.qx_Widget==null){try{vNode=vNode.parentNode;
}catch(vDomEvent){vNode=null;
}}return vNode?vNode.qx_Widget:null;
},
getOriginalTargetObjectFromEvent:function(vDomEvent,
vWindow){var vNode=qx.event.handler.EventHandler.getDomTarget(vDomEvent);
if(vWindow){var vDocument=vWindow.document;
if(vNode==vWindow||vNode==vDocument||vNode==vDocument.documentElement||vNode==vDocument.body){return vDocument.body.qx_Widget;
}}return qx.event.handler.EventHandler.getOriginalTargetObject(vNode);
},
getRelatedOriginalTargetObjectFromEvent:function(vDomEvent){return qx.event.handler.EventHandler.getOriginalTargetObject(vDomEvent.relatedTarget||(vDomEvent.type=="mouseover"?vDomEvent.fromElement:vDomEvent.toElement));
},
getTargetObject:function(vNode,
vObject,
allowDisabled){if(!vObject){var vObject=qx.event.handler.EventHandler.getOriginalTargetObject(vNode);
if(!vObject){return null;
}}while(vObject){if(!allowDisabled&&!vObject.getEnabled()){return null;
}if(!vObject.getAnonymous()){break;
}vObject=vObject.getParent();
}return vObject;
},
getTargetObjectFromEvent:function(vDomEvent){return qx.event.handler.EventHandler.getTargetObject(qx.event.handler.EventHandler.getDomTarget(vDomEvent));
},
getRelatedTargetObjectFromEvent:function(vDomEvent){var target=vDomEvent.relatedTarget;
if(!target){if(vDomEvent.type=="mouseover"){target=vDomEvent.fromElement;
}else{target=vDomEvent.toElement;
}}return qx.event.handler.EventHandler.getTargetObject(target);
}},
properties:{allowClientContextMenu:{check:"Boolean",
init:false},
allowClientSelectAll:{check:"Boolean",
init:false},
captureWidget:{check:"qx.ui.core.Widget",
nullable:true,
apply:"_applyCaptureWidget"},
focusRoot:{check:"qx.ui.core.Parent",
nullable:true,
apply:"_applyFocusRoot"}},
members:{_lastMouseEventType:null,
_lastMouseDown:false,
_lastMouseEventDate:0,
_applyCaptureWidget:function(value,
old){if(old){old.setCapture(false);
}
if(value){value.setCapture(true);
}},
_applyFocusRoot:function(value,
old){if(old){old.setFocusedChild(null);
}
if(value&&value.getFocusedChild()==null){value.setFocusedChild(value);
}},
addCommand:function(vCommand){this._commands[vCommand.toHashCode()]=vCommand;
},
removeCommand:function(vCommand){delete this._commands[vCommand.toHashCode()];
},
_checkKeyEventMatch:function(e){var vCommand;
for(var vHash in this._commands){vCommand=this._commands[vHash];
if(vCommand.getEnabled()&&vCommand.matchesKeyEvent(e)){if(!vCommand.execute(e.getTarget())){e.preventDefault();
}break;
}}},
attachEvents:function(){this.attachEventTypes(qx.event.handler.EventHandler.mouseEventTypes,
this.__onmouseevent);
this.attachEventTypes(qx.event.handler.EventHandler.dragEventTypes,
this.__ondragevent);
qx.event.handler.KeyEventHandler.getInstance()._attachEvents();
qx.html.EventRegistration.addEventListener(window,
"blur",
this.__onwindowblur);
qx.html.EventRegistration.addEventListener(window,
"focus",
this.__onwindowfocus);
qx.html.EventRegistration.addEventListener(window,
"resize",
this.__onwindowresize);
document.body.onselect=document.onselectstart=document.onselectionchange=this.__onselectevent;
},
detachEvents:function(){this.detachEventTypes(qx.event.handler.EventHandler.mouseEventTypes,
this.__onmouseevent);
this.detachEventTypes(qx.event.handler.EventHandler.dragEventTypes,
this.__ondragevent);
qx.event.handler.KeyEventHandler.getInstance()._detachEvents();
qx.html.EventRegistration.removeEventListener(window,
"blur",
this.__onwindowblur);
qx.html.EventRegistration.removeEventListener(window,
"focus",
this.__onwindowfocus);
qx.html.EventRegistration.removeEventListener(window,
"resize",
this.__onwindowresize);
document.body.onselect=document.onselectstart=document.onselectionchange=null;
},
attachEventTypes:function(vEventTypes,
vFunctionPointer){try{var el=qx.core.Variant.isSet("qx.client",
"gecko")?window:document.body;
for(var i=0,
l=vEventTypes.length;i<l;i++){qx.html.EventRegistration.addEventListener(el,
vEventTypes[i],
vFunctionPointer);
}}catch(ex){throw new Error("qx.event.handler.EventHandler: Failed to attach window event types: "+vEventTypes+": "+ex);
}},
detachEventTypes:function(vEventTypes,
vFunctionPointer){try{var el=qx.core.Variant.isSet("qx.client",
"gecko")?window:document.body;
for(var i=0,
l=vEventTypes.length;i<l;i++){qx.html.EventRegistration.removeEventListener(el,
vEventTypes[i],
vFunctionPointer);
}}catch(ex){throw new Error("qx.event.handler.EventHandler: Failed to detach window event types: "+vEventTypes+": "+ex);
}},
_onkeyevent_post:function(vDomEvent,
vType,
vKeyCode,
vCharCode,
vKeyIdentifier){var vDomTarget=qx.event.handler.EventHandler.getDomTarget(vDomEvent);
var vFocusRoot=this.getFocusRoot();
var vTarget=this.getCaptureWidget()||(vFocusRoot==null?null:vFocusRoot.getActiveChild());
var vKeyEventObject=new qx.event.type.KeyEvent(vType,
vDomEvent,
vDomTarget,
vTarget,
null,
vKeyCode,
vCharCode,
vKeyIdentifier);
if(vType=="keydown"){this._checkKeyEventMatch(vKeyEventObject);
}
if(vTarget!=null&&vTarget.getEnabled()){switch(vKeyIdentifier){case "Escape":case "Tab":if(qx.Class.isDefined("qx.ui.menu.Manager")){qx.ui.menu.Manager.getInstance().update(vTarget,
vType);
}break;
}if(!this.getAllowClientSelectAll()){if(vDomEvent.ctrlKey&&vKeyIdentifier=="A"){switch(vDomTarget.tagName.toLowerCase()){case "input":case "textarea":case "iframe":break;
default:qx.event.handler.EventHandler.stopDomEvent(vDomEvent);
}}}
try{vTarget.dispatchEvent(vKeyEventObject);
if(qx.Class.isDefined("qx.event.handler.DragAndDropHandler")){qx.event.handler.DragAndDropHandler.getInstance().handleKeyEvent(vKeyEventObject);
}}catch(ex){this.error("Failed to dispatch key event",
ex);
this.createDispatchDataEvent("error",
ex);
}}vKeyEventObject.dispose();
},
_onmouseevent:qx.core.Variant.select("qx.client",
{"mshtml":function(vDomEvent){if(!vDomEvent){vDomEvent=window.event;
}var vDomTarget=qx.event.handler.EventHandler.getDomTarget(vDomEvent);
var vType=vDomEvent.type;
if(vType=="mousemove"){if(this._mouseIsDown&&vDomEvent.button==0){this._onmouseevent_post(vDomEvent,
"mouseup");
this._mouseIsDown=false;
}}else{if(vType=="mousedown"){this._mouseIsDown=true;
}else if(vType=="mouseup"){this._mouseIsDown=false;
}if(vType=="mouseup"&&!this._lastMouseDown&&((new Date).valueOf()-this._lastMouseEventDate)<250){this._onmouseevent_post(vDomEvent,
"mousedown");
}else if(vType=="dblclick"&&this._lastMouseEventType=="mouseup"&&((new Date).valueOf()-this._lastMouseEventDate)<250){this._onmouseevent_post(vDomEvent,
"click");
}
switch(vType){case "mousedown":case "mouseup":case "click":case "dblclick":case "contextmenu":this._lastMouseEventType=vType;
this._lastMouseEventDate=(new Date).valueOf();
this._lastMouseDown=vType=="mousedown";
}}this._onmouseevent_post(vDomEvent,
vType,
vDomTarget);
},
"default":function(vDomEvent){var vDomTarget=qx.event.handler.EventHandler.getDomTarget(vDomEvent);
var vType=vDomEvent.type;
switch(vType){case "DOMMouseScroll":vType="mousewheel";
break;
case "click":case "dblclick":if(vDomEvent.which!==1){return;
}}this._onmouseevent_post(vDomEvent,
vType,
vDomTarget);
}}),
_onmouseevent_click_fix:qx.core.Variant.select("qx.client",
{"gecko":function(vDomTarget,
vType,
vDispatchTarget){var vReturn=false;
switch(vType){case "mousedown":this._lastMouseDownDomTarget=vDomTarget;
this._lastMouseDownDispatchTarget=vDispatchTarget;
break;
case "mouseup":if(this._lastMouseDownDispatchTarget===vDispatchTarget&&vDomTarget!==this._lastMouseDownDomTarget){vReturn=true;
}else{this._lastMouseDownDomTarget=null;
this._lastMouseDownDispatchTarget=null;
}}return vReturn;
},
"default":null}),
_onmouseevent_post:function(vDomEvent,
vType,
vDomTarget){var vEventObject,
vCaptureTarget,
vDispatchTarget,
vTarget,
vOriginalTarget,
vRelatedTarget,
vFixClick,
vTargetIsEnabled;
vCaptureTarget=this.getCaptureWidget();
vOriginalTarget=qx.event.handler.EventHandler.getOriginalTargetObject(vDomTarget);
if(!vCaptureTarget){vDispatchTarget=vTarget=qx.event.handler.EventHandler.getTargetObject(null,
vOriginalTarget,
true);
}else{vDispatchTarget=vCaptureTarget;
vTarget=qx.event.handler.EventHandler.getTargetObject(null,
vOriginalTarget,
true);
}if(!vTarget){return;
}vTargetIsEnabled=vTarget.getEnabled();
if(qx.core.Variant.isSet("qx.client",
"gecko")){vFixClick=this._onmouseevent_click_fix(vDomTarget,
vType,
vDispatchTarget);
}if(vType=="contextmenu"&&!this.getAllowClientContextMenu()){qx.event.handler.EventHandler.stopDomEvent(vDomEvent);
}if(vTargetIsEnabled&&vType=="mousedown"){qx.event.handler.FocusHandler.mouseFocus=true;
var vRoot=vTarget.getFocusRoot();
if(vRoot){this.setFocusRoot(vRoot);
var vFocusTarget=vTarget;
while(!vFocusTarget.isFocusable()&&vFocusTarget!=vRoot){vFocusTarget=vFocusTarget.getParent();
}vRoot.setFocusedChild(vFocusTarget);
vRoot.setActiveChild(vTarget);
}}switch(vType){case "mouseover":case "mouseout":vRelatedTarget=qx.event.handler.EventHandler.getRelatedTargetObjectFromEvent(vDomEvent);
if(vRelatedTarget==vTarget){return;
}}vEventObject=new qx.event.type.MouseEvent(vType,
vDomEvent,
vDomTarget,
vTarget,
vOriginalTarget,
vRelatedTarget);
qx.event.type.MouseEvent.storeEventState(vEventObject);
if(vTargetIsEnabled){var vEventWasProcessed=false;
vEventWasProcessed=vDispatchTarget?vDispatchTarget.dispatchEvent(vEventObject):true;
this._onmouseevent_special_post(vType,
vTarget,
vOriginalTarget,
vDispatchTarget,
vEventWasProcessed,
vEventObject,
vDomEvent);
}else{if(vType=="mouseover"){if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){qx.ui.popup.ToolTipManager.getInstance().handleMouseOver(vEventObject);
}}}vEventObject.dispose();
vEventObject=null;
qx.ui.core.Widget.flushGlobalQueues();
if(vFixClick){this._onmouseevent_post(vDomEvent,
"click",
this._lastMouseDownDomTarget);
this._lastMouseDownDomTarget=null;
this._lastMouseDownDispatchTarget=null;
}},
_onmouseevent_special_post:function(vType,
vTarget,
vOriginalTarget,
vDispatchTarget,
vEventWasProcessed,
vEventObject,
vDomEvent){switch(vType){case "mousedown":if(qx.Class.isDefined("qx.ui.popup.PopupManager")){qx.ui.popup.PopupManager.getInstance().update(vTarget);
}
if(qx.Class.isDefined("qx.ui.menu.Manager")){qx.ui.menu.Manager.getInstance().update(vTarget,
vType);
}
if(qx.Class.isDefined("qx.ui.embed.IframeManager")){qx.ui.embed.IframeManager.getInstance().handleMouseDown(vEventObject);
}break;
case "mouseup":if(qx.Class.isDefined("qx.ui.menu.Manager")){qx.ui.menu.Manager.getInstance().update(vTarget,
vType);
}
if(qx.Class.isDefined("qx.ui.embed.IframeManager")){qx.ui.embed.IframeManager.getInstance().handleMouseUp(vEventObject);
}break;
case "mouseover":if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){qx.ui.popup.ToolTipManager.getInstance().handleMouseOver(vEventObject);
}break;
case "mouseout":if(qx.Class.isDefined("qx.ui.popup.ToolTipManager")){qx.ui.popup.ToolTipManager.getInstance().handleMouseOut(vEventObject);
}break;
}this._ignoreWindowBlur=vType==="mousedown";
if(qx.Class.isDefined("qx.event.handler.DragAndDropHandler")&&vTarget){qx.event.handler.DragAndDropHandler.getInstance().handleMouseEvent(vEventObject);
}},
_ondragevent:function(vEvent){if(!vEvent){vEvent=window.event;
}qx.event.handler.EventHandler.stopDomEvent(vEvent);
},
_onselectevent:function(e){if(!e){e=window.event;
}var target=qx.event.handler.EventHandler.getOriginalTargetObjectFromEvent(e);
while(target){if(target.getSelectable()!=null){if(!target.getSelectable()){qx.event.handler.EventHandler.stopDomEvent(e);
}break;
}target=target.getParent();
}},
_focused:false,
_onwindowblur:function(e){if(!this._focused||this._ignoreWindowBlur){return;
}this._focused=false;
this.setCaptureWidget(null);
if(qx.Class.isDefined("qx.ui.popup.PopupManager")){qx.ui.popup.PopupManager.getInstance().update();
}if(qx.Class.isDefined("qx.ui.menu.Manager")){qx.ui.menu.Manager.getInstance().update();
}if(qx.Class.isDefined("qx.event.handler.DragAndDropHandler")){qx.event.handler.DragAndDropHandler.getInstance().globalCancelDrag();
}qx.ui.core.ClientDocument.getInstance().createDispatchEvent("windowblur");
},
_onwindowfocus:function(e){if(this._focused){return;
}this._focused=true;
qx.ui.core.ClientDocument.getInstance().createDispatchEvent("windowfocus");
},
_onwindowresize:function(e){qx.ui.core.ClientDocument.getInstance().createDispatchEvent("windowresize");
}},
destruct:function(){this.detachEvents();
this._disposeObjectDeep("_commands",
1);
this._disposeFields("__onmouseevent",
"__ondragevent",
"__onselectevent",
"__onwindowblur",
"__onwindowfocus",
"__onwindowresize");
this._disposeFields("_lastMouseEventType",
"_lastMouseDown",
"_lastMouseEventDate",
"_lastMouseDownDomTarget",
"_lastMouseDownDispatchTarget");
}});




/* ID: qx.dom.Node */
qx.Class.define("qx.dom.Node",
{statics:{ELEMENT:1,
ATTRIBUTE:2,
TEXT:3,
CDATA_SECTION:4,
ENTITY_REFERENCE:5,
ENTITY:6,
PROCESSING_INSTRUCTION:7,
COMMENT:8,
DOCUMENT:9,
DOCUMENT_TYPE:10,
DOCUMENT_FRAGMENT:11,
NOTATION:12,
getDocument:function(node){if(this.isDocument(node)){return node;
}return node.ownerDocument||node.document||null;
},
getWindow:qx.core.Variant.select("qx.client",
{"mshtml":function(node){return this.getDocument(node).parentWindow;
},
"default":function(node){return this.getDocument(node).defaultView;
}}),
getDocumentElement:function(node){return this.getDocument(node).documentElement;
},
getBodyElement:function(node){return this.getDocument(node).body;
},
isElement:function(node){return !!(node&&node.nodeType===qx.dom.Node.ELEMENT);
},
isDocument:function(node){return !!(node&&node.nodeType===qx.dom.Node.DOCUMENT);
},
isText:function(node){return !!(node&&node.nodeType===qx.dom.Node.TEXT);
},
isWindow:function(node){return node.document&&this.getWindow(node.document)==node;
},
getText:function(node){if(!node||!node.nodeType){return null;
}
switch(node.nodeType){case 1:var i,
a=[],
nodes=node.childNodes,
length=nodes.length;
for(i=0;i<length;i++){a[i]=this.getText(nodes[i]);
}return a.join("");
case 2:return node.nodeValue;
break;
case 3:return node.nodeValue;
break;
}return null;
}}});




/* ID: qx.event.handler.KeyEventHandler */
qx.Class.define("qx.event.handler.KeyEventHandler",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this.__onkeypress=qx.lang.Function.bind(this._onkeypress,
this);
this.__onkeyupdown=qx.lang.Function.bind(this._onkeyupdown,
this);
},
members:{_attachEvents:function(){var el=qx.core.Variant.isSet("qx.client",
"gecko")?window:document.body;
qx.html.EventRegistration.addEventListener(el,
"keypress",
this.__onkeypress);
qx.html.EventRegistration.addEventListener(el,
"keyup",
this.__onkeyupdown);
qx.html.EventRegistration.addEventListener(el,
"keydown",
this.__onkeyupdown);
},
_detachEvents:function(){var el=qx.core.Variant.isSet("qx.client",
"gecko")?window:document.body;
qx.html.EventRegistration.removeEventListener(el,
"keypress",
this.__onkeypress);
qx.html.EventRegistration.removeEventListener(el,
"keyup",
this.__onkeyupdown);
qx.html.EventRegistration.removeEventListener(el,
"keydown",
this.__onkeyupdown);
},
_onkeyupdown:qx.core.Variant.select("qx.client",
{"mshtml":function(domEvent){domEvent=window.event||domEvent;
var keyCode=domEvent.keyCode;
var charcode=0;
var type=domEvent.type;
if(!(this._lastUpDownType[keyCode]=="keydown"&&type=="keydown")){this._idealKeyHandler(keyCode,
charcode,
type,
domEvent);
}if(type=="keydown"){if(this._isNonPrintableKeyCode(keyCode)||
keyCode==
8||keyCode==9){this._idealKeyHandler(keyCode,
charcode,
"keypress",
domEvent);
}}this._lastUpDownType[keyCode]=type;
},
"gecko":function(domEvent){var keyCode=this._keyCodeFix[domEvent.keyCode]||domEvent.keyCode;
var charCode=domEvent.charCode;
var type=domEvent.type;
if(qx.core.Client.getInstance().runsOnWindows()){var keyIdentifier=keyCode?this._keyCodeToIdentifier(keyCode):this._charCodeToIdentifier(charCode);
if(!(this._lastUpDownType[keyIdentifier]=="keypress"&&type=="keydown")){this._idealKeyHandler(keyCode,
charCode,
type,
domEvent);
}this._lastUpDownType[keyIdentifier]=type;
}else{this._idealKeyHandler(keyCode,
charCode,
type,
domEvent);
}},
"webkit":function(domEvent){var keyCode=0;
var charCode=0;
var type=domEvent.type;
if(qx.core.Client.getInstance().getVersion()<420){if(!this._lastCharCodeForType){this._lastCharCodeForType={};
}var isSafariSpecialKey=this._lastCharCodeForType[type]>63000;
if(isSafariSpecialKey){this._lastCharCodeForType[type]=null;
return;
}this._lastCharCodeForType[type]=domEvent.charCode;
}
if(type=="keyup"||type=="keydown"){keyCode=this._charCode2KeyCode[domEvent.charCode]||domEvent.keyCode;
}else{if(this._charCode2KeyCode[domEvent.charCode]){keyCode=this._charCode2KeyCode[domEvent.charCode];
}else{charCode=domEvent.charCode;
}}this._idealKeyHandler(keyCode,
charCode,
type,
domEvent);
},
"opera":function(domEvent){this._idealKeyHandler(domEvent.keyCode,
0,
domEvent.type,
domEvent);
},
"default":function(){throw new Error("Unsupported browser for key event handler!");
}}),
_onkeypress:qx.core.Variant.select("qx.client",
{"mshtml":function(domEvent){var domEvent=window.event||domEvent;
if(this._charCode2KeyCode[domEvent.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[domEvent.keyCode],
0,
domEvent.type,
domEvent);
}else{this._idealKeyHandler(0,
domEvent.keyCode,
domEvent.type,
domEvent);
}},
"gecko":function(domEvent){var keyCode=this._keyCodeFix[domEvent.keyCode]||domEvent.keyCode;
var charCode=domEvent.charCode;
var type=domEvent.type;
if(qx.core.Client.getInstance().runsOnWindows()){var keyIdentifier=keyCode?this._keyCodeToIdentifier(keyCode):this._charCodeToIdentifier(charCode);
if(!(this._lastUpDownType[keyIdentifier]=="keypress"&&type=="keydown")){this._idealKeyHandler(keyCode,
charCode,
type,
domEvent);
}this._lastUpDownType[keyIdentifier]=type;
}else{this._idealKeyHandler(keyCode,
charCode,
type,
domEvent);
}},
"webkit":function(domEvent){var keyCode=0;
var charCode=0;
var type=domEvent.type;
if(qx.core.Client.getInstance().getVersion()<420){if(!this._lastCharCodeForType){this._lastCharCodeForType={};
}var isSafariSpecialKey=this._lastCharCodeForType[type]>63000;
if(isSafariSpecialKey){this._lastCharCodeForType[type]=null;
return;
}this._lastCharCodeForType[type]=domEvent.charCode;
}
if(type=="keyup"||type=="keydown"){keyCode=this._charCode2KeyCode[domEvent.charCode]||domEvent.keyCode;
}else{if(this._charCode2KeyCode[domEvent.charCode]){keyCode=this._charCode2KeyCode[domEvent.charCode];
}else{charCode=domEvent.charCode;
}}this._idealKeyHandler(keyCode,
charCode,
type,
domEvent);
},
"opera":function(domEvent){if(this._keyCodeToIdentifierMap[domEvent.keyCode]){this._idealKeyHandler(domEvent.keyCode,
0,
domEvent.type,
domEvent);
}else{this._idealKeyHandler(0,
domEvent.keyCode,
domEvent.type,
domEvent);
}},
"default":function(){throw new Error("Unsupported browser for key event handler!");
}}),
_specialCharCodeMap:{8:"Backspace",
9:"Tab",
13:"Enter",
27:"Escape",
32:"Space"},
_keyCodeToIdentifierMap:{16:"Shift",
17:"Control",
18:"Alt",
20:"CapsLock",
224:"Meta",
37:"Left",
38:"Up",
39:"Right",
40:"Down",
33:"PageUp",
34:"PageDown",
35:"End",
36:"Home",
45:"Insert",
46:"Delete",
112:"F1",
113:"F2",
114:"F3",
115:"F4",
116:"F5",
117:"F6",
118:"F7",
119:"F8",
120:"F9",
121:"F10",
122:"F11",
123:"F12",
144:"NumLock",
44:"PrintScreen",
145:"Scroll",
19:"Pause",
91:"Win",
93:"Apps"},
_numpadToCharCode:{96:"0".charCodeAt(0),
97:"1".charCodeAt(0),
98:"2".charCodeAt(0),
99:"3".charCodeAt(0),
100:"4".charCodeAt(0),
101:"5".charCodeAt(0),
102:"6".charCodeAt(0),
103:"7".charCodeAt(0),
104:"8".charCodeAt(0),
105:"9".charCodeAt(0),
106:"*".charCodeAt(0),
107:"+".charCodeAt(0),
109:"-".charCodeAt(0),
110:",".charCodeAt(0),
111:"/".charCodeAt(0)},
_charCodeA:"A".charCodeAt(0),
_charCodeZ:"Z".charCodeAt(0),
_charCode0:"0".charCodeAt(0),
_charCode9:"9".charCodeAt(0),
_isNonPrintableKeyCode:function(keyCode){return this._keyCodeToIdentifierMap[keyCode]?true:false;
},
_isIdentifiableKeyCode:function(keyCode){if(keyCode>=this._charCodeA&&keyCode<=this._charCodeZ){return true;
}if(keyCode>=this._charCode0&&keyCode<=this._charCode9){return true;
}if(this._specialCharCodeMap[keyCode]){return true;
}if(this._numpadToCharCode[keyCode]){return true;
}if(this._isNonPrintableKeyCode(keyCode)){return true;
}return false;
},
isValidKeyIdentifier:function(keyIdentifier){if(this._identifierToKeyCodeMap[keyIdentifier]){return true;
}
if(keyIdentifier.length!=1){return false;
}
if(keyIdentifier>="0"&&keyIdentifier<="9"){return true;
}
if(keyIdentifier>="A"&&keyIdentifier<="Z"){return true;
}
switch(keyIdentifier){case "+":case "-":case "*":case "/":return true;
default:return false;
}},
_keyCodeToIdentifier:function(keyCode){if(this._isIdentifiableKeyCode(keyCode)){var numPadKeyCode=this._numpadToCharCode[keyCode];
if(numPadKeyCode){return String.fromCharCode(numPadKeyCode);
}return (this._keyCodeToIdentifierMap[keyCode]||this._specialCharCodeMap[keyCode]||String.fromCharCode(keyCode));
}else{return "Unidentified";
}},
_charCodeToIdentifier:function(charCode){return this._specialCharCodeMap[charCode]||String.fromCharCode(charCode).toUpperCase();
},
_identifierToKeyCode:function(keyIdentifier){return this._identifierToKeyCodeMap[keyIdentifier]||keyIdentifier.charCodeAt(0);
},
_idealKeyHandler:function(keyCode,
charCode,
eventType,
domEvent){if(!keyCode&&!charCode){return;
}var keyIdentifier;
if(keyCode){keyIdentifier=this._keyCodeToIdentifier(keyCode);
qx.event.handler.EventHandler.getInstance()._onkeyevent_post(domEvent,
eventType,
keyCode,
charCode,
keyIdentifier);
}else{keyIdentifier=this._charCodeToIdentifier(charCode);
qx.event.handler.EventHandler.getInstance()._onkeyevent_post(domEvent,
"keypress",
keyCode,
charCode,
keyIdentifier);
qx.event.handler.EventHandler.getInstance()._onkeyevent_post(domEvent,
"keyinput",
keyCode,
charCode,
keyIdentifier);
}}},
defer:function(statics,
members,
properties){if(!members._identifierToKeyCodeMap){members._identifierToKeyCodeMap={};
for(var key in members._keyCodeToIdentifierMap){members._identifierToKeyCodeMap[members._keyCodeToIdentifierMap[key]]=parseInt(key);
}
for(var key in members._specialCharCodeMap){members._identifierToKeyCodeMap[members._specialCharCodeMap[key]]=parseInt(key);
}}
if(qx.core.Variant.isSet("qx.client",
"mshtml")){members._lastUpDownType={};
members._charCode2KeyCode={13:13,
27:27};
}else if(qx.core.Variant.isSet("qx.client",
"gecko")){members._lastUpDownType={};
members._keyCodeFix={12:members._identifierToKeyCode("NumLock")};
}else if(qx.core.Variant.isSet("qx.client",
"webkit")){members._charCode2KeyCode={63289:members._identifierToKeyCode("NumLock"),
63276:members._identifierToKeyCode("PageUp"),
63277:members._identifierToKeyCode("PageDown"),
63275:members._identifierToKeyCode("End"),
63273:members._identifierToKeyCode("Home"),
63234:members._identifierToKeyCode("Left"),
63232:members._identifierToKeyCode("Up"),
63235:members._identifierToKeyCode("Right"),
63233:members._identifierToKeyCode("Down"),
63272:members._identifierToKeyCode("Delete"),
63302:members._identifierToKeyCode("Insert"),
63236:members._identifierToKeyCode("F1"),
63237:members._identifierToKeyCode("F2"),
63238:members._identifierToKeyCode("F3"),
63239:members._identifierToKeyCode("F4"),
63240:members._identifierToKeyCode("F5"),
63241:members._identifierToKeyCode("F6"),
63242:members._identifierToKeyCode("F7"),
63243:members._identifierToKeyCode("F8"),
63244:members._identifierToKeyCode("F9"),
63245:members._identifierToKeyCode("F10"),
63246:members._identifierToKeyCode("F11"),
63247:members._identifierToKeyCode("F12"),
63248:members._identifierToKeyCode("PrintScreen"),
3:members._identifierToKeyCode("Enter"),
12:members._identifierToKeyCode("NumLock"),
13:members._identifierToKeyCode("Enter")};
}},
destruct:function(){this._detachEvents();
this._disposeFields("_lastUpDownType");
}});




/* ID: qx.event.type.DomEvent */
qx.Class.define("qx.event.type.DomEvent",
{extend:qx.event.type.Event,
construct:function(vType,
vDomEvent,
vDomTarget,
vTarget,
vOriginalTarget){arguments.callee.base.call(this,
vType);
this.setDomEvent(vDomEvent);
this.setDomTarget(vDomTarget);
this.setTarget(vTarget);
this.setOriginalTarget(vOriginalTarget);
},
statics:{SHIFT_MASK:1,
CTRL_MASK:2,
ALT_MASK:4,
META_MASK:8},
properties:{bubbles:{_fast:true,
defaultValue:true,
noCompute:true},
propagationStopped:{_fast:true,
defaultValue:false,
noCompute:true},
domEvent:{_fast:true,
setOnlyOnce:true,
noCompute:true},
domTarget:{_fast:true,
setOnlyOnce:true,
noCompute:true},
modifiers:{_cached:true,
defaultValue:null}},
members:{_computeModifiers:function(){var mask=0;
var evt=this.getDomEvent();
if(evt.shiftKey)mask|=qx.event.type.DomEvent.SHIFT_MASK;
if(evt.ctrlKey)mask|=qx.event.type.DomEvent.CTRL_MASK;
if(evt.altKey)mask|=qx.event.type.DomEvent.ALT_MASK;
if(evt.metaKey)mask|=qx.event.type.DomEvent.META_MASK;
return mask;
},
isCtrlPressed:function(){return this.getDomEvent().ctrlKey;
},
isShiftPressed:function(){return this.getDomEvent().shiftKey;
},
isAltPressed:function(){return this.getDomEvent().altKey;
},
isMetaPressed:function(){return this.getDomEvent().metaKey;
},
isCtrlOrCommandPressed:function(){if(qx.core.Client.getInstance().runsOnMacintosh()){return this.getDomEvent().metaKey;
}else{return this.getDomEvent().ctrlKey;
}},
setDefaultPrevented:qx.core.Variant.select("qx.client",
{"mshtml":function(vValue){if(!vValue){return this.error("It is not possible to set preventDefault to false if it was true before!",
"setDefaultPrevented");
}this.getDomEvent().returnValue=false;
arguments.callee.base.call(this,
vValue);
},
"default":function(vValue){if(!vValue){return this.error("It is not possible to set preventDefault to false if it was true before!",
"setDefaultPrevented");
}this.getDomEvent().preventDefault();
this.getDomEvent().returnValue=false;
arguments.callee.base.call(this,
vValue);
}})},
destruct:function(){this._disposeFields("_valueDomEvent",
"_valueDomTarget");
}});




/* ID: qx.event.type.KeyEvent */
qx.Class.define("qx.event.type.KeyEvent",
{extend:qx.event.type.DomEvent,
construct:function(vType,
vDomEvent,
vDomTarget,
vTarget,
vOriginalTarget,
vKeyCode,
vCharCode,
vKeyIdentifier){arguments.callee.base.call(this,
vType,
vDomEvent,
vDomTarget,
vTarget,
vOriginalTarget);
this._keyCode=vKeyCode;
this.setCharCode(vCharCode);
this.setKeyIdentifier(vKeyIdentifier);
},
statics:{keys:{esc:27,
enter:13,
tab:9,
space:32,
up:38,
down:40,
left:37,
right:39,
shift:16,
ctrl:17,
alt:18,
f1:112,
f2:113,
f3:114,
f4:115,
f5:116,
f6:117,
f7:118,
f8:119,
f9:120,
f10:121,
f11:122,
f12:123,
print:124,
del:46,
backspace:8,
insert:45,
home:36,
end:35,
pageup:33,
pagedown:34,
numlock:144,
numpad_0:96,
numpad_1:97,
numpad_2:98,
numpad_3:99,
numpad_4:100,
numpad_5:101,
numpad_6:102,
numpad_7:103,
numpad_8:104,
numpad_9:105,
numpad_divide:111,
numpad_multiply:106,
numpad_minus:109,
numpad_plus:107},
codes:{}},
properties:{charCode:{_fast:true,
setOnlyOnce:true,
noCompute:true},
keyIdentifier:{_fast:true,
setOnlyOnce:true,
noCompute:true}},
members:{getKeyCode:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"Please use getKeyIdentifier() instead.");
return this._keyCode;
}},
defer:function(statics){for(var i in statics.keys){statics.codes[statics.keys[i]]=i;
}}});




/* ID: qx.event.type.MouseEvent */
qx.Class.define("qx.event.type.MouseEvent",
{extend:qx.event.type.DomEvent,
construct:function(vType,
vDomEvent,
vDomTarget,
vTarget,
vOriginalTarget,
vRelatedTarget){arguments.callee.base.call(this,
vType,
vDomEvent,
vDomTarget,
vTarget,
vOriginalTarget);
if(vRelatedTarget){this.setRelatedTarget(vRelatedTarget);
}},
statics:{C_BUTTON_LEFT:"left",
C_BUTTON_MIDDLE:"middle",
C_BUTTON_RIGHT:"right",
C_BUTTON_NONE:"none",
_screenX:0,
_screenY:0,
_clientX:0,
_clientY:0,
_pageX:0,
_pageY:0,
_button:null,
buttons:qx.core.Variant.select("qx.client",
{"mshtml":{left:1,
right:2,
middle:4},
"default":{left:0,
right:2,
middle:1}}),
storeEventState:function(e){this._screenX=e.getScreenX();
this._screenY=e.getScreenY();
this._clientX=e.getClientX();
this._clientY=e.getClientY();
this._pageX=e.getPageX();
this._pageY=e.getPageY();
this._button=e.getButton();
},
getScreenX:function(){return this._screenX;
},
getScreenY:function(){return this._screenY;
},
getClientX:function(){return this._clientX;
},
getClientY:function(){return this._clientY;
},
getPageX:function(){return this._pageX;
},
getPageY:function(){return this._pageY;
},
getButton:function(){return this._button;
}},
properties:{button:{_fast:true,
readOnly:true},
wheelDelta:{_fast:true,
readOnly:true}},
members:{getPageX:qx.core.Variant.select("qx.client",
{"mshtml":function(){return this.getDomEvent().clientX+qx.bom.Viewport.getScrollLeft(window);
},
"default":function(){return this.getDomEvent().pageX;
}}),
getPageY:qx.core.Variant.select("qx.client",
{"mshtml":function(){return this.getDomEvent().clientY+qx.bom.Viewport.getScrollTop(window);
},
"default":function(){return this.getDomEvent().pageY;
}}),
getClientX:function(){return this.getDomEvent().clientX;
},
getClientY:function(){return this.getDomEvent().clientY;
},
getScreenX:function(){return this.getDomEvent().screenX;
},
getScreenY:function(){return this.getDomEvent().screenY;
},
isLeftButtonPressed:qx.core.Variant.select("qx.client",
{"mshtml":function(){if(this.getType()=="click"){return true;
}else{return this.getButton()===qx.event.type.MouseEvent.C_BUTTON_LEFT;
}},
"default":function(){return this.getButton()===qx.event.type.MouseEvent.C_BUTTON_LEFT;
}}),
isMiddleButtonPressed:function(){return this.getButton()===qx.event.type.MouseEvent.C_BUTTON_MIDDLE;
},
isRightButtonPressed:function(){return this.getButton()===qx.event.type.MouseEvent.C_BUTTON_RIGHT;
},
__buttons:qx.core.Variant.select("qx.client",
{"mshtml":{1:"left",
2:"right",
4:"middle"},
"default":{0:"left",
2:"right",
1:"middle"}}),
_computeButton:function(){switch(this.getDomEvent().type){case "click":case "dblclick":return "left";
case "contextmenu":return "right";
default:return this.__buttons[this.getDomEvent().button]||"none";
}},
_computeWheelDelta:qx.core.Variant.select("qx.client",
{"default":function(){return this.getDomEvent().wheelDelta/120;
},
"gecko":function(){return -(this.getDomEvent().detail/3);
}})}});




/* ID: qx.bom.Viewport */
qx.Class.define("qx.bom.Viewport",
{statics:{getWidth:qx.core.Variant.select("qx.client",
{"opera":function(win){return (win||window).document.body.clientWidth;
},
"webkit":function(win){return (win||window).innerWidth;
},
"default":function(win){var doc=(win||window).document;
return doc.compatMode==="CSS1Compat"?doc.documentElement.clientWidth:doc.body.clientWidth;
}}),
getHeight:qx.core.Variant.select("qx.client",
{"opera":function(win){return (win||window).document.body.clientHeight;
},
"webkit":function(win){return (win||window).innerHeight;
},
"default":function(win){var doc=(win||window).document;
return doc.compatMode==="CSS1Compat"?doc.documentElement.clientHeight:doc.body.clientHeight;
}}),
getScrollLeft:qx.core.Variant.select("qx.client",
{"mshtml":function(win){var doc=(win||window).document;
return doc.documentElement.scrollLeft||doc.body.scrollLeft;
},
"default":function(win){return (win||window).pageXOffset;
}}),
getScrollTop:qx.core.Variant.select("qx.client",
{"mshtml":function(win){var doc=(win||window).document;
return doc.documentElement.scrollTop||doc.body.scrollTop;
},
"default":function(win){return (win||window).pageYOffset;
}})}});




/* ID: qx.util.manager.Object */
qx.Class.define("qx.util.manager.Object",
{extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this._objects={};
},
members:{add:function(vObject){if(this.getDisposed()){return;
}this._objects[vObject.toHashCode()]=vObject;
},
remove:function(vObject){if(this.getDisposed()){return false;
}delete this._objects[vObject.toHashCode()];
},
has:function(vObject){return this._objects[vObject.toHashCode()]!=null;
},
get:function(vObject){return this._objects[vObject.toHashCode()];
},
getAll:function(){return this._objects;
},
enableAll:function(){for(var vHashCode in this._objects){this._objects[vHashCode].setEnabled(true);
}},
disableAll:function(){for(var vHashCode in this._objects){this._objects[vHashCode].setEnabled(false);
}}},
destruct:function(){this._disposeObjectDeep("_objects");
}});




/* ID: qx.ui.embed.IframeManager */
qx.Class.define("qx.ui.embed.IframeManager",
{type:"singleton",
extend:qx.util.manager.Object,
construct:function(){arguments.callee.base.call(this);
},
members:{handleMouseDown:function(evt){var iframeMap=this.getAll();
for(var key in iframeMap){var iframe=iframeMap[key];
iframe.block();
}},
handleMouseUp:function(evt){var iframeMap=this.getAll();
for(var key in iframeMap){var iframe=iframeMap[key];
iframe.release();
}}}});




/* ID: qx.ui.layout.CanvasLayout */
qx.Class.define("qx.ui.layout.CanvasLayout",
{extend:qx.ui.core.Parent,
construct:function(){arguments.callee.base.call(this);
},
members:{_createLayoutImpl:function(){return new qx.ui.layout.impl.CanvasLayoutImpl(this);
}}});




/* ID: qx.ui.layout.impl.LayoutImpl */
qx.Class.define("qx.ui.layout.impl.LayoutImpl",
{extend:qx.core.Object,
construct:function(vWidget){arguments.callee.base.call(this);
this._widget=vWidget;
},
members:{getWidget:function(){return this._widget;
},
computeChildBoxWidth:function(vChild){return vChild.getWidthValue()||vChild._computeBoxWidthFallback();
},
computeChildBoxHeight:function(vChild){return vChild.getHeightValue()||vChild._computeBoxHeightFallback();
},
computeChildNeededWidth:function(vChild){var vMinBox=vChild._computedMinWidthTypePercent?null:vChild.getMinWidthValue();
var vMaxBox=vChild._computedMaxWidthTypePercent?null:vChild.getMaxWidthValue();
var vBox=(vChild._computedWidthTypePercent||vChild._computedWidthTypeFlex?null:vChild.getWidthValue())||vChild.getPreferredBoxWidth()||0;
return qx.lang.Number.limit(vBox,
vMinBox,
vMaxBox)+vChild.getMarginLeft()+vChild.getMarginRight();
},
computeChildNeededHeight:function(vChild){var vMinBox=vChild._computedMinHeightTypePercent?null:vChild.getMinHeightValue();
var vMaxBox=vChild._computedMaxHeightTypePercent?null:vChild.getMaxHeightValue();
var vBox=(vChild._computedHeightTypePercent||vChild._computedHeightTypeFlex?null:vChild.getHeightValue())||vChild.getPreferredBoxHeight()||0;
return qx.lang.Number.limit(vBox,
vMinBox,
vMaxBox)+vChild.getMarginTop()+vChild.getMarginBottom();
},
computeChildrenNeededWidth_max:function(){for(var i=0,
ch=this.getWidget().getVisibleChildren(),
chl=ch.length,
maxv=0;i<chl;i++){maxv=Math.max(maxv,
ch[i].getNeededWidth());
}return maxv;
},
computeChildrenNeededHeight_max:function(){for(var i=0,
ch=this.getWidget().getVisibleChildren(),
chl=ch.length,
maxv=0;i<chl;i++){maxv=Math.max(maxv,
ch[i].getNeededHeight());
}return maxv;
},
computeChildrenNeededWidth_sum:function(){for(var i=0,
ch=this.getWidget().getVisibleChildren(),
chl=ch.length,
sumv=0;i<chl;i++){sumv+=ch[i].getNeededWidth();
}return sumv;
},
computeChildrenNeededHeight_sum:function(){for(var i=0,
ch=this.getWidget().getVisibleChildren(),
chl=ch.length,
sumv=0;i<chl;i++){sumv+=ch[i].getNeededHeight();
}return sumv;
},
computeChildrenNeededWidth:null,
computeChildrenNeededHeight:null,
updateSelfOnChildOuterWidthChange:function(vChild){},
updateSelfOnChildOuterHeightChange:function(vChild){},
updateChildOnInnerWidthChange:function(vChild){},
updateChildOnInnerHeightChange:function(vChild){},
updateSelfOnJobQueueFlush:function(vJobQueue){},
updateChildrenOnJobQueueFlush:function(vJobQueue){},
updateChildrenOnAddChild:function(vChild,
vIndex){},
updateChildrenOnRemoveChild:function(vChild,
vIndex){},
updateChildrenOnMoveChild:function(vChild,
vIndex,
vOldIndex){},
flushChildrenQueue:function(vChildrenQueue){var vWidget=this.getWidget();
for(var vHashCode in vChildrenQueue){vWidget._layoutChild(vChildrenQueue[vHashCode]);
}},
layoutChild:function(vChild,
vJobs){},
layoutChild_sizeLimitX:qx.core.Variant.select("qx.client",
{"mshtml":qx.lang.Function.returnTrue,
"default":function(vChild,
vJobs){if(vJobs.minWidth){vChild._computedMinWidthTypeNull?vChild._resetRuntimeMinWidth():vChild._renderRuntimeMinWidth(vChild.getMinWidthValue());
}else if(vJobs.initial&&!vChild._computedMinWidthTypeNull){vChild._renderRuntimeMinWidth(vChild.getMinWidthValue());
}
if(vJobs.maxWidth){vChild._computedMaxWidthTypeNull?vChild._resetRuntimeMaxWidth():vChild._renderRuntimeMaxWidth(vChild.getMaxWidthValue());
}else if(vJobs.initial&&!vChild._computedMaxWidthTypeNull){vChild._renderRuntimeMaxWidth(vChild.getMaxWidthValue());
}}}),
layoutChild_sizeLimitY:qx.core.Variant.select("qx.client",
{"mshtml":qx.lang.Function.returnTrue,
"default":function(vChild,
vJobs){if(vJobs.minHeight){vChild._computedMinHeightTypeNull?vChild._resetRuntimeMinHeight():vChild._renderRuntimeMinHeight(vChild.getMinHeightValue());
}else if(vJobs.initial&&!vChild._computedMinHeightTypeNull){vChild._renderRuntimeMinHeight(vChild.getMinHeightValue());
}
if(vJobs.maxHeight){vChild._computedMaxHeightTypeNull?vChild._resetRuntimeMaxHeight():vChild._renderRuntimeMaxHeight(vChild.getMaxHeightValue());
}else if(vJobs.initial&&!vChild._computedMaxHeightTypeNull){vChild._renderRuntimeMaxHeight(vChild.getMaxHeightValue());
}}}),
layoutChild_marginX:function(vChild,
vJobs){if(vJobs.marginLeft||vJobs.initial){var vValueLeft=vChild.getMarginLeft();
vValueLeft!=null?vChild._renderRuntimeMarginLeft(vValueLeft):vChild._resetRuntimeMarginLeft();
}
if(vJobs.marginRight||vJobs.initial){var vValueRight=vChild.getMarginRight();
vValueRight!=null?vChild._renderRuntimeMarginRight(vValueRight):vChild._resetRuntimeMarginRight();
}},
layoutChild_marginY:function(vChild,
vJobs){if(vJobs.marginTop||vJobs.initial){var vValueTop=vChild.getMarginTop();
vValueTop!=null?vChild._renderRuntimeMarginTop(vValueTop):vChild._resetRuntimeMarginTop();
}
if(vJobs.marginBottom||vJobs.initial){var vValueBottom=vChild.getMarginBottom();
vValueBottom!=null?vChild._renderRuntimeMarginBottom(vValueBottom):vChild._resetRuntimeMarginBottom();
}},
layoutChild_sizeX_essentialWrapper:function(vChild,
vJobs){return vChild._isWidthEssential()?this.layoutChild_sizeX(vChild,
vJobs):vChild._resetRuntimeWidth();
},
layoutChild_sizeY_essentialWrapper:function(vChild,
vJobs){return vChild._isHeightEssential()?this.layoutChild_sizeY(vChild,
vJobs):vChild._resetRuntimeHeight();
}},
defer:function(statics,
members){members.computeChildrenNeededWidth=members.computeChildrenNeededWidth_max;
members.computeChildrenNeededHeight=members.computeChildrenNeededHeight_max;
},
destruct:function(){this._disposeFields("_widget");
}});




/* ID: qx.lang.Number */
qx.Class.define("qx.lang.Number",
{statics:{isInRange:function(nr,
vmin,
vmax){return nr>=vmin&&nr<=vmax;
},
isBetweenRange:function(nr,
vmin,
vmax){return nr>vmin&&nr<vmax;
},
limit:function(nr,
vmin,
vmax){if(typeof vmax==="number"&&nr>vmax){return vmax;
}else if(typeof vmin==="number"&&nr<vmin){return vmin;
}else{return nr;
}}}});




/* ID: qx.ui.layout.impl.CanvasLayoutImpl */
qx.Class.define("qx.ui.layout.impl.CanvasLayoutImpl",
{extend:qx.ui.layout.impl.LayoutImpl,
construct:function(vWidget){arguments.callee.base.call(this,
vWidget);
},
members:{computeChildBoxWidth:function(vChild){var vValue=null;
if(vChild._computedLeftTypeNull||vChild._computedRightTypeNull){vValue=vChild.getWidthValue();
}else if(vChild._hasParent){vValue=this.getWidget().getInnerWidth()-vChild.getLeftValue()-vChild.getRightValue();
}return vValue||vChild._computeBoxWidthFallback();
},
computeChildBoxHeight:function(vChild){var vValue=null;
if(vChild._computedTopTypeNull||vChild._computedBottomTypeNull){vValue=vChild.getHeightValue();
}else if(vChild._hasParent){vValue=this.getWidget().getInnerHeight()-vChild.getTopValue()-vChild.getBottomValue();
}return vValue||vChild._computeBoxHeightFallback();
},
computeChildNeededWidth:function(vChild){var vLeft=vChild._computedLeftTypePercent?null:vChild.getLeftValue();
var vRight=vChild._computedRightTypePercent?null:vChild.getRightValue();
var vMinBox=vChild._computedMinWidthTypePercent?null:vChild.getMinWidthValue();
var vMaxBox=vChild._computedMaxWidthTypePercent?null:vChild.getMaxWidthValue();
if(vLeft!=null&&vRight!=null){var vBox=vChild.getPreferredBoxWidth()||0;
}else{var vBox=(vChild._computedWidthTypePercent?null:vChild.getWidthValue())||vChild.getPreferredBoxWidth()||0;
}return qx.lang.Number.limit(vBox,
vMinBox,
vMaxBox)+vLeft+vRight+vChild.getMarginLeft()+vChild.getMarginRight();
},
computeChildNeededHeight:function(vChild){var vTop=vChild._computedTopTypePercent?null:vChild.getTopValue();
var vBottom=vChild._computedBottomTypePercent?null:vChild.getBottomValue();
var vMinBox=vChild._computedMinHeightTypePercent?null:vChild.getMinHeightValue();
var vMaxBox=vChild._computedMaxHeightTypePercent?null:vChild.getMaxHeightValue();
if(vTop!=null&&vBottom!=null){var vBox=vChild.getPreferredBoxHeight()||0;
}else{var vBox=(vChild._computedHeightTypePercent?null:vChild.getHeightValue())||vChild.getPreferredBoxHeight()||0;
}return qx.lang.Number.limit(vBox,
vMinBox,
vMaxBox)+vTop+vBottom+vChild.getMarginTop()+vChild.getMarginBottom();
},
updateChildOnInnerWidthChange:function(vChild){var vUpdatePercent=vChild._recomputePercentX();
var vUpdateRange=vChild._recomputeRangeX();
return vUpdatePercent||vUpdateRange;
},
updateChildOnInnerHeightChange:function(vChild){var vUpdatePercent=vChild._recomputePercentY();
var vUpdateRange=vChild._recomputeRangeY();
return vUpdatePercent||vUpdateRange;
},
layoutChild:function(vChild,
vJobs){this.layoutChild_sizeX_essentialWrapper(vChild,
vJobs);
this.layoutChild_sizeY_essentialWrapper(vChild,
vJobs);
this.layoutChild_sizeLimitX(vChild,
vJobs);
this.layoutChild_sizeLimitY(vChild,
vJobs);
this.layoutChild_locationX(vChild,
vJobs);
this.layoutChild_locationY(vChild,
vJobs);
this.layoutChild_marginX(vChild,
vJobs);
this.layoutChild_marginY(vChild,
vJobs);
},
layoutChild_sizeX:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(vChild,
vJobs){if(vJobs.initial||vJobs.width||vJobs.minWidth||vJobs.maxWidth||vJobs.left||vJobs.right){if(vChild._computedMinWidthTypeNull&&vChild._computedWidthTypeNull&&vChild._computedMaxWidthTypeNull&&!(!vChild._computedLeftTypeNull&&!vChild._computedRightTypeNull)){vChild._resetRuntimeWidth();
}else{vChild._renderRuntimeWidth(vChild.getBoxWidth());
}}},
"default":function(vChild,
vJobs){if(vJobs.initial||vJobs.width){vChild._computedWidthTypeNull?vChild._resetRuntimeWidth():vChild._renderRuntimeWidth(vChild.getWidthValue());
}}}),
layoutChild_sizeY:qx.core.Variant.select("qx.client",
{"mshtml|opera|webkit":function(vChild,
vJobs){if(vJobs.initial||vJobs.height||vJobs.minHeight||vJobs.maxHeight||vJobs.top||vJobs.bottom){if(vChild._computedMinHeightTypeNull&&vChild._computedHeightTypeNull&&vChild._computedMaxHeightTypeNull&&!(!vChild._computedTopTypeNull&&!vChild._computedBottomTypeNull)){vChild._resetRuntimeHeight();
}else{vChild._renderRuntimeHeight(vChild.getBoxHeight());
}}},
"default":function(vChild,
vJobs){if(vJobs.initial||vJobs.height){vChild._computedHeightTypeNull?vChild._resetRuntimeHeight():vChild._renderRuntimeHeight(vChild.getHeightValue());
}}}),
layoutChild_locationX:function(vChild,
vJobs){var vWidget=this.getWidget();
if(vJobs.initial||vJobs.left||vJobs.parentPaddingLeft){vChild._computedLeftTypeNull?vChild._computedRightTypeNull&&vWidget.getPaddingLeft()>0?vChild._renderRuntimeLeft(vWidget.getPaddingLeft()):vChild._resetRuntimeLeft():vChild._renderRuntimeLeft(vChild.getLeftValue()+vWidget.getPaddingLeft());
}
if(vJobs.initial||vJobs.right||vJobs.parentPaddingRight){vChild._computedRightTypeNull?vChild._computedLeftTypeNull&&vWidget.getPaddingRight()>0?vChild._renderRuntimeRight(vWidget.getPaddingRight()):vChild._resetRuntimeRight():vChild._renderRuntimeRight(vChild.getRightValue()+vWidget.getPaddingRight());
}},
layoutChild_locationY:function(vChild,
vJobs){var vWidget=this.getWidget();
if(vJobs.initial||vJobs.top||vJobs.parentPaddingTop){vChild._computedTopTypeNull?vChild._computedBottomTypeNull&&vWidget.getPaddingTop()>0?vChild._renderRuntimeTop(vWidget.getPaddingTop()):vChild._resetRuntimeTop():vChild._renderRuntimeTop(vChild.getTopValue()+vWidget.getPaddingTop());
}
if(vJobs.initial||vJobs.bottom||vJobs.parentPaddingBottom){vChild._computedBottomTypeNull?vChild._computedTopTypeNull&&vWidget.getPaddingBottom()>0?vChild._renderRuntimeBottom(vWidget.getPaddingBottom()):vChild._resetRuntimeBottom():vChild._renderRuntimeBottom(vChild.getBottomValue()+vWidget.getPaddingBottom());
}}}});




/* ID: qx.ui.core.ClientDocument */
qx.Class.define("qx.ui.core.ClientDocument",
{type:"singleton",
extend:qx.ui.layout.CanvasLayout,
construct:function(){arguments.callee.base.call(this);
this._window=window;
this._document=window.document;
this.setElement(this._document.body);
this._document.body.style.position="";
try{document.execCommand("BackgroundImageCache",
false,
true);
}catch(err){}this._cachedInnerWidth=this._document.body.offsetWidth;
this._cachedInnerHeight=this._document.body.offsetHeight;
this.addEventListener("windowresize",
this._onwindowresize);
this._modalWidgets=[];
this._modalNativeWindow=null;
this.activateFocusRoot();
this.initHideFocus();
this.initSelectable();
qx.event.handler.EventHandler.getInstance().setFocusRoot(this);
},
events:{"focus":"qx.event.type.Event",
"windowblur":"qx.event.type.Event",
"windowfocus":"qx.event.type.Event",
"windowresize":"qx.event.type.Event"},
properties:{appearance:{refine:true,
init:"client-document"},
enableElementFocus:{refine:true,
init:false},
enabled:{refine:true,
init:true},
selectable:{refine:true,
init:false},
hideFocus:{refine:true,
init:true},
globalCursor:{check:"String",
nullable:true,
themeable:true,
apply:"_applyGlobalCursor",
event:"changeGlobalCursor"}},
members:{_applyParent:qx.lang.Function.returnTrue,
getTopLevelWidget:qx.lang.Function.returnThis,
getWindowElement:function(){return this._window;
},
getDocumentElement:function(){return this._document;
},
getParent:qx.lang.Function.returnNull,
getToolTip:qx.lang.Function.returnNull,
isMaterialized:qx.lang.Function.returnTrue,
isSeeable:qx.lang.Function.returnTrue,
_isDisplayable:true,
_hasParent:false,
_initialLayoutDone:true,
_getBlocker:function(){if(!this._blocker){this._blocker=new qx.ui.core.ClientDocumentBlocker;
this._blocker.addEventListener("mousedown",
this.blockHelper,
this);
this._blocker.addEventListener("mouseup",
this.blockHelper,
this);
this.add(this._blocker);
}return this._blocker;
},
blockHelper:function(e){if(this._modalNativeWindow){if(!this._modalNativeWindow.isClosed()){this._modalNativeWindow.focus();
}else{this.debug("Window seems to be closed already! => Releasing Blocker");
this.release(this._modalNativeWindow);
}}},
block:function(vActiveChild){this._getBlocker().show();
if(qx.Class.isDefined("qx.ui.window.Window")&&vActiveChild instanceof qx.ui.window.Window){this._modalWidgets.push(vActiveChild);
var vOrigIndex=vActiveChild.getZIndex();
this._getBlocker().setZIndex(vOrigIndex);
vActiveChild.setZIndex(vOrigIndex+1);
}else if(qx.Class.isDefined("qx.client.NativeWindow")&&vActiveChild instanceof qx.client.NativeWindow){this._modalNativeWindow=vActiveChild;
this._getBlocker().setZIndex(1e7);
}},
release:function(vActiveChild){if(vActiveChild){if(qx.Class.isDefined("qx.client.NativeWindow")&&vActiveChild instanceof qx.client.NativeWindow){this._modalNativeWindow=null;
}else{qx.lang.Array.remove(this._modalWidgets,
vActiveChild);
}}var l=this._modalWidgets.length;
if(l==0){this._getBlocker().hide();
}else{var oldActiveChild=this._modalWidgets[l-1];
var o=oldActiveChild.getZIndex();
this._getBlocker().setZIndex(o);
oldActiveChild.setZIndex(o+1);
}},
createStyleElement:function(vCssText){return qx.html.StyleSheet.createElement(vCssText);
},
addCssRule:function(vSheet,
vSelector,
vStyle){return qx.html.StyleSheet.addRule(vSheet,
vSelector,
vStyle);
},
removeCssRule:function(vSheet,
vSelector){return qx.html.StyleSheet.removeRule(vSheet,
vSelector);
},
removeAllCssRules:function(vSheet){return qx.html.StyleSheet.removeAllRules(vSheet);
},
_applyGlobalCursor:qx.core.Variant.select("qx.client",
{"mshtml":function(value,
old){if(value=="pointer"){value="hand";
}
if(old=="pointer"){old="hand";
}var elem,
current;
var list=this._cursorElements;
if(list){for(var i=0,
l=list.length;i<l;i++){elem=list[i];
if(elem.style.cursor==old){elem.style.cursor=elem._oldCursor;
elem._oldCursor=null;
}}}var all=document.all;
var list=this._cursorElements=[];
if(value!=null&&value!=""&&value!="auto"){for(var i=0,
l=all.length;i<l;i++){elem=all[i];
current=elem.style.cursor;
if(current!=null&&current!=""&&current!="auto"){elem._oldCursor=current;
elem.style.cursor=value;
list.push(elem);
}}document.body.style.cursor=value;
}else{document.body.style.cursor="";
}},
"default":function(value,
old){if(!this._globalCursorStyleSheet){this._globalCursorStyleSheet=this.createStyleElement();
}this.removeCssRule(this._globalCursorStyleSheet,
"*");
if(value){this.addCssRule(this._globalCursorStyleSheet,
"*",
"cursor:"+value+" !important");
}}}),
_onwindowresize:function(e){if(qx.Class.isDefined("qx.ui.popup.PopupManager")){qx.ui.popup.PopupManager.getInstance().update();
}this._recomputeInnerWidth();
this._recomputeInnerHeight();
qx.ui.core.Widget.flushGlobalQueues();
},
_computeInnerWidth:function(){return this._document.body.offsetWidth;
},
_computeInnerHeight:function(){return this._document.body.offsetHeight;
}},
settings:{"qx.enableApplicationLayout":true,
"qx.boxModelCorrection":true},
defer:function(){if(qx.core.Setting.get("qx.boxModelCorrection")){var boxSizingAttr=qx.core.Client.getInstance().getEngineBoxSizingAttributes();
var borderBoxCss=boxSizingAttr.join(":border-box;")+":border-box;";
var contentBoxCss=boxSizingAttr.join(":content-box;")+":content-box;";
qx.html.StyleSheet.createElement("html,body { margin:0;border:0;padding:0; } "+"html { border:0 none; } "+"*{"+borderBoxCss+"} "+"img{"+contentBoxCss+"}");
}
if(qx.core.Setting.get("qx.enableApplicationLayout")){qx.html.StyleSheet.createElement("html,body{width:100%;height:100%;overflow:hidden;}");
}},
destruct:function(){this._disposeObjects("_blocker");
this._disposeFields("_window",
"_document",
"_modalWidgets",
"_modalNativeWindow",
"_globalCursorStyleSheet");
}});




/* ID: qx.ui.basic.Terminator */
qx.Class.define("qx.ui.basic.Terminator",
{extend:qx.ui.core.Widget,
members:{renderPadding:function(changes){if(changes.paddingLeft){this._renderRuntimePaddingLeft(this.getPaddingLeft());
}
if(changes.paddingRight){this._renderRuntimePaddingRight(this.getPaddingRight());
}
if(changes.paddingTop){this._renderRuntimePaddingTop(this.getPaddingTop());
}
if(changes.paddingBottom){this._renderRuntimePaddingBottom(this.getPaddingBottom());
}},
_renderContent:function(){if(this._computedWidthTypePixel){this._cachedPreferredInnerWidth=null;
}else{this._invalidatePreferredInnerWidth();
}if(this._computedHeightTypePixel){this._cachedPreferredInnerHeight=null;
}else{this._invalidatePreferredInnerHeight();
}if(this._initialLayoutDone){this.addToJobQueue("load");
}},
_layoutPost:function(changes){if(changes.initial||changes.load||changes.width||changes.height){this._postApply();
}},
_postApply:qx.lang.Function.returnTrue,
_computeBoxWidthFallback:function(){return this.getPreferredBoxWidth();
},
_computeBoxHeightFallback:function(){return this.getPreferredBoxHeight();
},
_computePreferredInnerWidth:qx.lang.Function.returnZero,
_computePreferredInnerHeight:qx.lang.Function.returnZero,
_isWidthEssential:function(){if(!this._computedLeftTypeNull&&!this._computedRightTypeNull){return true;
}
if(!this._computedWidthTypeNull&&!this._computedWidthTypeAuto){return true;
}
if(!this._computedMinWidthTypeNull&&!this._computedMinWidthTypeAuto){return true;
}
if(!this._computedMaxWidthTypeNull&&!this._computedMaxWidthTypeAuto){return true;
}
if(this._borderElement){return true;
}return false;
},
_isHeightEssential:function(){if(!this._computedTopTypeNull&&!this._computedBottomTypeNull){return true;
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




/* ID: qx.ui.core.ClientDocumentBlocker */
qx.Class.define("qx.ui.core.ClientDocumentBlocker",
{extend:qx.ui.basic.Terminator,
construct:function(){arguments.callee.base.call(this);
this.initTop();
this.initRight();
this.initBottom();
this.initLeft();
this.initZIndex();
},
properties:{appearance:{refine:true,
init:"client-document-blocker"},
zIndex:{refine:true,
init:1e8},
top:{refine:true,
init:0},
right:{refine:true,
init:0},
bottom:{refine:true,
init:0},
left:{refine:true,
init:0},
display:{refine:true,
init:false}},
members:{getFocusRoot:function(){return null;
}}});




/* ID: qx.theme.manager.Appearance */
qx.Class.define("qx.theme.manager.Appearance",
{type:"singleton",
extend:qx.util.manager.Object,
construct:function(){arguments.callee.base.call(this);
this.__cache={};
this.__stateMap={};
this.__stateMapLength=1;
},
properties:{appearanceTheme:{check:"Theme",
nullable:true,
apply:"_applyAppearanceTheme",
event:"changeAppearanceTheme"}},
members:{_applyAppearanceTheme:function(value,
old){this._currentTheme=value;
this._oldTheme=old;
if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncAppearanceTheme();
}},
syncAppearanceTheme:function(){if(!this._currentTheme&&!this._oldTheme){return;
}
if(this._currentTheme){this.__cache[this._currentTheme.name]={};
}var app=qx.core.Init.getInstance().getApplication();
if(app&&app.getUiReady()){qx.ui.core.ClientDocument.getInstance()._recursiveAppearanceThemeUpdate(this._currentTheme,
this._oldTheme);
}
if(this._oldTheme){delete this.__cache[this._oldTheme.name];
}delete this._currentTheme;
delete this._oldTheme;
},
styleFrom:function(id,
states){var theme=this.getAppearanceTheme();
if(!theme){return;
}return this.styleFromTheme(theme,
id,
states);
},
styleFromTheme:function(theme,
id,
states){var entry=theme.appearances[id];
if(!entry){{};
return null;
}if(!entry.style){if(entry.include){return this.styleFromTheme(theme,
entry.include,
states);
}else{return null;
}}var map=this.__stateMap;
var helper=[id];
for(var state in states){if(!map[state]){map[state]=this.__stateMapLength++;
}helper[map[state]]=true;
}var unique=helper.join();
var cache=this.__cache[theme.name];
if(cache&&cache[unique]!==undefined){return cache[unique];
}var result;
if(entry.include||entry.base){var local=entry.style(states);
var incl;
if(entry.include){incl=this.styleFromTheme(theme,
entry.include,
states);
}result={};
if(entry.base&&theme.supertheme){var base=this.styleFromTheme(theme.supertheme,
id,
states);
if(entry.include){for(var key in base){if(incl[key]===undefined&&local[key]===undefined){result[key]=base[key];
}}}else{for(var key in base){if(local[key]===undefined){result[key]=base[key];
}}}}if(entry.include){for(var key in incl){if(local[key]===undefined){result[key]=incl[key];
}}}for(var key in local){result[key]=local[key];
}}else{result=entry.style(states);
}if(cache){cache[unique]=result||null;
}return result||null;
}},
destruct:function(){this._disposeFields("__cache",
"__stateMap");
}});




/* ID: qx.theme.manager.Meta */
qx.Class.define("qx.theme.manager.Meta",
{type:"singleton",
extend:qx.core.Target,
properties:{theme:{check:"Theme",
nullable:true,
apply:"_applyTheme",
event:"changeTheme"},
autoSync:{check:"Boolean",
init:true,
apply:"_applyAutoSync"}},
members:{_applyTheme:function(value,
old){var color=null;
var border=null;
var font=null;
var widget=null;
var icon=null;
var appearance=null;
if(value){color=value.meta.color||null;
border=value.meta.border||null;
font=value.meta.font||null;
widget=value.meta.widget||null;
icon=value.meta.icon||null;
appearance=value.meta.appearance||null;
}
if(old){this.setAutoSync(false);
}var colorMgr=qx.theme.manager.Color.getInstance();
var borderMgr=qx.theme.manager.Border.getInstance();
var fontMgr=qx.theme.manager.Font.getInstance();
var iconMgr=qx.theme.manager.Icon.getInstance();
var widgetMgr=qx.theme.manager.Widget.getInstance();
var appearanceMgr=qx.theme.manager.Appearance.getInstance();
colorMgr.setColorTheme(color);
borderMgr.setBorderTheme(border);
fontMgr.setFontTheme(font);
widgetMgr.setWidgetTheme(widget);
iconMgr.setIconTheme(icon);
appearanceMgr.setAppearanceTheme(appearance);
if(old){this.setAutoSync(true);
}},
_applyAutoSync:function(value,
old){if(value){qx.theme.manager.Appearance.getInstance().syncAppearanceTheme();
qx.theme.manager.Icon.getInstance().syncIconTheme();
qx.theme.manager.Widget.getInstance().syncWidgetTheme();
qx.theme.manager.Font.getInstance().syncFontTheme();
qx.theme.manager.Border.getInstance().syncBorderTheme();
qx.theme.manager.Color.getInstance().syncColorTheme();
}},
initialize:function(){var setting=qx.core.Setting;
var theme,
obj;
theme=setting.get("qx.theme");
if(theme){obj=qx.Theme.getByName(theme);
if(!obj){throw new Error("The meta theme to use is not available: "+theme);
}this.setTheme(obj);
}theme=setting.get("qx.colorTheme");
if(theme){obj=qx.Theme.getByName(theme);
if(!obj){throw new Error("The color theme to use is not available: "+theme);
}qx.theme.manager.Color.getInstance().setColorTheme(obj);
}theme=setting.get("qx.borderTheme");
if(theme){obj=qx.Theme.getByName(theme);
if(!obj){throw new Error("The border theme to use is not available: "+theme);
}qx.theme.manager.Border.getInstance().setBorderTheme(obj);
}theme=setting.get("qx.fontTheme");
if(theme){obj=qx.Theme.getByName(theme);
if(!obj){throw new Error("The font theme to use is not available: "+theme);
}qx.theme.manager.Font.getInstance().setFontTheme(obj);
}theme=setting.get("qx.widgetTheme");
if(theme){obj=qx.Theme.getByName(theme);
if(!obj){throw new Error("The widget theme to use is not available: "+theme);
}qx.theme.manager.Widget.getInstance().setWidgetTheme(obj);
}theme=setting.get("qx.iconTheme");
if(theme){obj=qx.Theme.getByName(theme);
if(!obj){throw new Error("The icon theme to use is not available: "+theme);
}qx.theme.manager.Icon.getInstance().setIconTheme(obj);
}theme=setting.get("qx.appearanceTheme");
if(theme){obj=qx.Theme.getByName(theme);
if(!obj){throw new Error("The appearance theme to use is not available: "+theme);
}qx.theme.manager.Appearance.getInstance().setAppearanceTheme(obj);
}},
__queryThemes:function(key){var reg=qx.Theme.getAll();
var theme;
var list=[];
for(var name in reg){theme=reg[name];
if(theme[key]){list.push(theme);
}}return list;
},
getMetaThemes:function(){return this.__queryThemes("meta");
},
getColorThemes:function(){return this.__queryThemes("colors");
},
getBorderThemes:function(){return this.__queryThemes("borders");
},
getFontThemes:function(){return this.__queryThemes("fonts");
},
getWidgetThemes:function(){return this.__queryThemes("widgets");
},
getIconThemes:function(){return this.__queryThemes("icons");
},
getAppearanceThemes:function(){return this.__queryThemes("appearances");
}},
settings:{"qx.theme":"qx.theme.ClassicRoyale",
"qx.colorTheme":null,
"qx.borderTheme":null,
"qx.fontTheme":null,
"qx.widgetTheme":null,
"qx.appearanceTheme":null,
"qx.iconTheme":null}});




/* ID: qx.theme.manager.Color */
qx.Class.define("qx.theme.manager.Color",
{type:"singleton",
extend:qx.util.manager.Value,
properties:{colorTheme:{check:"Theme",
nullable:true,
apply:"_applyColorTheme",
event:"changeColorTheme"}},
members:{_applyColorTheme:function(value){var dest=this._dynamic={};
if(value){var source=value.colors;
var util=qx.util.ColorUtil;
var temp;
for(var key in source){temp=source[key];
if(typeof temp==="string"){if(!util.isCssString(temp)){throw new Error("Could not parse color: "+temp);
}}else if(temp instanceof Array){temp=util.rgbToRgbString(temp);
}else{throw new Error("Could not parse color: "+temp);
}dest[key]=temp;
}}
if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncColorTheme();
}},
syncColorTheme:function(){this._updateObjects();
}}});




/* ID: qx.util.ColorUtil */
qx.Class.define("qx.util.ColorUtil",
{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},
SYSTEM:{activeborder:true,
activecaption:true,
appworkspace:true,
background:true,
buttonface:true,
buttonhighlight:true,
buttonshadow:true,
buttontext:true,
captiontext:true,
graytext:true,
highlight:true,
highlighttext:true,
inactiveborder:true,
inactivecaption:true,
inactivecaptiontext:true,
infobackground:true,
infotext:true,
menu:true,
menutext:true,
scrollbar:true,
threeddarkshadow:true,
threedface:true,
threedhighlight:true,
threedlightshadow:true,
threedshadow:true,
window:true,
windowframe:true,
windowtext:true},
NAMED:{black:[0,
0,
0],
silver:[192,
192,
192],
gray:[128,
128,
128],
white:[255,
255,
255],
maroon:[128,
0,
0],
red:[255,
0,
0],
purple:[128,
0,
128],
fuchsia:[255,
0,
255],
green:[0,
128,
0],
lime:[0,
255,
0],
olive:[128,
128,
0],
yellow:[255,
255,
0],
navy:[0,
0,
128],
blue:[0,
0,
255],
teal:[0,
128,
128],
aqua:[0,
255,
255],
transparent:[-1,
-1,
-1],
grey:[128,
128,
128],
magenta:[255,
0,
255],
orange:[255,
165,
0],
brown:[165,
42,
42]},
isNamedColor:function(value){return this.NAMED[value]!==undefined;
},
isSystemColor:function(value){return this.SYSTEM[value]!==undefined;
},
isThemedColor:function(value){return qx.theme.manager.Color.getInstance().isDynamic(value);
},
stringToRgb:function(str){if(this.isThemedColor(str)){var str=qx.theme.manager.Color.getInstance().resolveDynamic(str);
}
if(this.isNamedColor(str)){return this.NAMED[str];
}else if(this.isSystemColor(str)){throw new Error("Could not convert system colors to RGB: "+str);
}else if(this.isRgbString(str)){return this.__rgbStringToRgb();
}else if(this.isHex3String(str)){return this.__hex3StringToRgb();
}else if(this.isHex6String(str)){return this.__hex6StringToRgb();
}throw new Error("Could not parse color: "+str);
},
cssStringToRgb:function(str){if(this.isNamedColor(str)){return this.NAMED[str];
}else if(this.isSystemColor(str)){throw new Error("Could not convert system colors to RGB: "+str);
}else if(this.isRgbString(str)){return this.__rgbStringToRgb();
}else if(this.isHex3String(str)){return this.__hex3StringToRgb();
}else if(this.isHex6String(str)){return this.__hex6StringToRgb();
}throw new Error("Could not parse color: "+str);
},
stringToRgbString:function(str){return this.rgbToRgbString(this.stringToRgb(str));
},
rgbToRgbString:function(rgb){return "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
},
rgbToHexString:function(rgb){return (qx.lang.String.pad(rgb[0].toString(16).toUpperCase(),
2)+qx.lang.String.pad(rgb[1].toString(16).toUpperCase(),
2)+qx.lang.String.pad(rgb[2].toString(16).toUpperCase(),
2));
},
isValid:function(str){return this.isThemedColor(str)||this.isCssString(str);
},
isCssString:function(str){return this.isSystemColor(str)||this.isNamedColor(str)||this.isHex3String(str)||this.isHex6String(str)||this.isRgbString(str);
},
isHex3String:function(str){return this.REGEXP.hex3.test(str);
},
isHex6String:function(str){return this.REGEXP.hex6.test(str);
},
isRgbString:function(str){return this.REGEXP.rgb.test(str);
},
__rgbStringToRgb:function(){var red=parseInt(RegExp.$1);
var green=parseInt(RegExp.$2);
var blue=parseInt(RegExp.$3);
return [red,
green,
blue];
},
__hex3StringToRgb:function(){var red=parseInt(RegExp.$1,
16)*17;
var green=parseInt(RegExp.$2,
16)*17;
var blue=parseInt(RegExp.$3,
16)*17;
return [red,
green,
blue];
},
__hex6StringToRgb:function(){var red=(parseInt(RegExp.$1,
16)*16)+parseInt(RegExp.$2,
16);
var green=(parseInt(RegExp.$3,
16)*16)+parseInt(RegExp.$4,
16);
var blue=(parseInt(RegExp.$5,
16)*16)+parseInt(RegExp.$6,
16);
return [red,
green,
blue];
},
hex3StringToRgb:function(value){if(this.isHex3String(value)){return this.__hex3StringToRgb(value);
}throw new Error("Invalid hex3 value: "+value);
},
hex6StringToRgb:function(value){if(this.isHex6String(value)){return this.__hex6StringToRgb(value);
}throw new Error("Invalid hex6 value: "+value);
},
hexStringToRgb:function(value){if(this.isHex3String(value)){return this.__hex3StringToRgb(value);
}
if(this.isHex6String(value)){return this.__hex6StringToRgb(value);
}throw new Error("Invalid hex value: "+value);
},
rgbToHsb:function(rgb){var hue,
saturation,
brightness;
var red=rgb[0];
var green=rgb[1];
var blue=rgb[2];
var cmax=(red>green)?red:green;
if(blue>cmax){cmax=blue;
}var cmin=(red<green)?red:green;
if(blue<cmin){cmin=blue;
}brightness=cmax/255.0;
if(cmax!=0){saturation=(cmax-cmin)/cmax;
}else{saturation=0;
}
if(saturation==0){hue=0;
}else{var redc=(cmax-red)/(cmax-cmin);
var greenc=(cmax-green)/(cmax-cmin);
var bluec=(cmax-blue)/(cmax-cmin);
if(red==cmax){hue=bluec-greenc;
}else if(green==cmax){hue=2.0+redc-bluec;
}else{hue=4.0+greenc-redc;
}hue=hue/6.0;
if(hue<0){hue=hue+1.0;
}}return [Math.round(hue*360),
Math.round(saturation*100),
Math.round(brightness*100)];
},
hsbToRgb:function(hsb){var i,
f,
p,
q,
t;
var hue=hsb[0]/360;
var saturation=hsb[1]/100;
var brightness=hsb[2]/100;
if(hue>=1.0){hue%=1.0;
}
if(saturation>1.0){saturation=1.0;
}
if(brightness>1.0){brightness=1.0;
}var tov=Math.floor(255*brightness);
var rgb={};
if(saturation==0.0){rgb.red=rgb.green=rgb.blue=tov;
}else{hue*=6.0;
i=Math.floor(hue);
f=hue-i;
p=Math.floor(tov*(1.0-saturation));
q=Math.floor(tov*(1.0-(saturation*f)));
t=Math.floor(tov*(1.0-(saturation*(1.0-f))));
switch(i){case 0:rgb.red=tov;
rgb.green=t;
rgb.blue=p;
break;
case 1:rgb.red=q;
rgb.green=tov;
rgb.blue=p;
break;
case 2:rgb.red=p;
rgb.green=tov;
rgb.blue=t;
break;
case 3:rgb.red=p;
rgb.green=q;
rgb.blue=tov;
break;
case 4:rgb.red=t;
rgb.green=p;
rgb.blue=tov;
break;
case 5:rgb.red=tov;
rgb.green=p;
rgb.blue=q;
break;
}}return rgb;
},
randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,
g,
b]);
}}});




/* ID: qx.theme.manager.Border */
qx.Class.define("qx.theme.manager.Border",
{type:"singleton",
extend:qx.util.manager.Value,
properties:{borderTheme:{check:"Theme",
nullable:true,
apply:"_applyBorderTheme",
event:"changeBorderTheme"}},
members:{resolveDynamic:function(value){return value instanceof qx.ui.core.Border?value:this._dynamic[value];
},
isDynamic:function(value){return value&&(value instanceof qx.ui.core.Border||this._dynamic[value]!==undefined);
},
syncBorderTheme:function(){this._updateObjects();
},
updateObjectsEdge:function(border,
edge){var reg=this._registry;
var dynamics=this._dynamic;
var entry;
for(var key in reg){entry=reg[key];
if(entry.value===border||dynamics[entry.value]===border){entry.callback.call(entry.object,
border,
edge);
}}},
_applyBorderTheme:function(value){var dest=this._dynamic;
for(var key in dest){if(dest[key].themed){dest[key].dispose();
delete dest[key];
}}
if(value){var source=value.borders;
var border=qx.ui.core.Border;
for(var key in source){dest[key]=(new border).set(source[key]);
dest[key].themed=true;
}}
if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncBorderTheme();
}}}});




/* ID: qx.ui.core.Border */
qx.Class.define("qx.ui.core.Border",
{extend:qx.core.Object,
construct:function(width,
style,
color){arguments.callee.base.call(this);
if(width!==undefined){this.setWidth(width);
}
if(style!==undefined){this.setStyle(style);
}
if(color!==undefined){this.setColor(color);
}},
statics:{fromString:function(str){var border=new qx.ui.core.Border;
var parts=str.split(/\s+/);
var part,
temp;
for(var i=0,
l=parts.length;i<l;i++){part=parts[i];
switch(part){case "groove":case "ridge":case "inset":case "outset":case "solid":case "dotted":case "dashed":case "double":case "none":border.setStyle(part);
break;
default:temp=parseInt(part);
if(temp===part||qx.lang.String.contains(part,
"px")){border.setWidth(temp);
}else{border.setColor(part);
}break;
}}return border;
},
fromConfig:function(config){var border=new qx.ui.core.Border;
border.set(config);
return border;
},
resetTop:qx.core.Variant.select("qx.client",
{"gecko":function(widget){var style=widget._style;
if(style){style.borderTopWidth=style.borderTopStyle=style.borderTopColor=style.MozBorderTopColors="";
}},
"default":function(widget){var style=widget._style;
if(style){style.borderTopWidth=style.borderTopStyle=style.borderTopColor="";
}style=widget._innerStyle;
if(style){style.borderTopWidth=style.borderTopStyle=style.borderTopColor="";
}}}),
resetRight:qx.core.Variant.select("qx.client",
{"gecko":function(widget){var style=widget._style;
if(style){style.borderRightWidth=style.borderRightStyle=style.borderRightColor=style.MozBorderRightColors="";
}},
"default":function(widget){var style=widget._style;
if(style){style.borderRightWidth=style.borderRightStyle=style.borderRightColor="";
}style=widget._innerStyle;
if(style){style.borderRightWidth=style.borderRightStyle=style.borderRightColor="";
}}}),
resetBottom:qx.core.Variant.select("qx.client",
{"gecko":function(widget){var style=widget._style;
if(style){style.borderBottomWidth=style.borderBottomStyle=style.borderBottomColor=style.MozBorderBottomColors="";
}},
"default":function(widget){var style=widget._style;
if(style){style.borderBottomWidth=style.borderBottomStyle=style.borderBottomColor="";
}style=widget._innerStyle;
if(style){style.borderBottomWidth=style.borderBottomStyle=style.borderBottomColor="";
}}}),
resetLeft:qx.core.Variant.select("qx.client",
{"gecko":function(widget){var style=widget._style;
if(style){style.borderLeftWidth=style.borderLeftStyle=style.borderLeftColor=style.MozBorderLeftColors="";
}},
"default":function(widget){var style=widget._style;
if(style){style.borderLeftWidth=style.borderLeftStyle=style.borderLeftColor="";
}style=widget._innerStyle;
if(style){style.borderLeftWidth=style.borderLeftStyle=style.borderLeftColor="";
}}})},
properties:{widthTop:{check:"Number",
init:0,
apply:"_applyWidthTop"},
widthRight:{check:"Number",
init:0,
apply:"_applyWidthRight"},
widthBottom:{check:"Number",
init:0,
apply:"_applyWidthBottom"},
widthLeft:{check:"Number",
init:0,
apply:"_applyWidthLeft"},
styleTop:{nullable:true,
check:["solid",
"dotted",
"dashed",
"double",
"outset",
"inset",
"ridge",
"groove"],
init:"solid",
apply:"_applyStyleTop"},
styleRight:{nullable:true,
check:["solid",
"dotted",
"dashed",
"double",
"outset",
"inset",
"ridge",
"groove"],
init:"solid",
apply:"_applyStyleRight"},
styleBottom:{nullable:true,
check:["solid",
"dotted",
"dashed",
"double",
"outset",
"inset",
"ridge",
"groove"],
init:"solid",
apply:"_applyStyleBottom"},
styleLeft:{nullable:true,
check:["solid",
"dotted",
"dashed",
"double",
"outset",
"inset",
"ridge",
"groove"],
init:"solid",
apply:"_applyStyleLeft"},
colorTop:{nullable:true,
check:"Color",
apply:"_applyColorTop"},
colorRight:{nullable:true,
check:"Color",
apply:"_applyColorRight"},
colorBottom:{nullable:true,
check:"Color",
apply:"_applyColorBottom"},
colorLeft:{nullable:true,
check:"Color",
apply:"_applyColorLeft"},
colorInnerTop:{nullable:true,
check:"Color",
apply:"_applyColorInnerTop"},
colorInnerRight:{nullable:true,
check:"Color",
apply:"_applyColorInnerRight"},
colorInnerBottom:{nullable:true,
check:"Color",
apply:"_applyColorInnerBottom"},
colorInnerLeft:{nullable:true,
check:"Color",
apply:"_applyColorInnerLeft"},
left:{group:["widthLeft",
"styleLeft",
"colorLeft"]},
right:{group:["widthRight",
"styleRight",
"colorRight"]},
top:{group:["widthTop",
"styleTop",
"colorTop"]},
bottom:{group:["widthBottom",
"styleBottom",
"colorBottom"]},
width:{group:["widthTop",
"widthRight",
"widthBottom",
"widthLeft"],
mode:"shorthand"},
style:{group:["styleTop",
"styleRight",
"styleBottom",
"styleLeft"],
mode:"shorthand"},
color:{group:["colorTop",
"colorRight",
"colorBottom",
"colorLeft"],
mode:"shorthand"},
innerColor:{group:["colorInnerTop",
"colorInnerRight",
"colorInnerBottom",
"colorInnerLeft"],
mode:"shorthand"}},
members:{_applyWidthTop:function(value,
old){this.__widthTop=value==null?"0px":value+"px";
this.__computeComplexTop();
this.__informManager("top");
},
_applyWidthRight:function(value,
old){this.__widthRight=value==null?"0px":value+"px";
this.__computeComplexRight();
this.__informManager("right");
},
_applyWidthBottom:function(value,
old){this.__widthBottom=value==null?"0px":value+"px";
this.__computeComplexBottom();
this.__informManager("bottom");
},
_applyWidthLeft:function(value,
old){this.__widthLeft=value==null?"0px":value+"px";
this.__computeComplexLeft();
this.__informManager("left");
},
_applyColorTop:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._changeColorTop,
this,
value);
},
_applyColorRight:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._changeColorRight,
this,
value);
},
_applyColorBottom:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._changeColorBottom,
this,
value);
},
_applyColorLeft:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._changeColorLeft,
this,
value);
},
_applyColorInnerTop:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._changeColorInnerTop,
this,
value);
},
_applyColorInnerRight:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._changeColorInnerRight,
this,
value);
},
_applyColorInnerBottom:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._changeColorInnerBottom,
this,
value);
},
_applyColorInnerLeft:function(value,
old){qx.theme.manager.Color.getInstance().connect(this._changeColorInnerLeft,
this,
value);
},
_applyStyleTop:function(){this.__informManager("top");
},
_applyStyleRight:function(){this.__informManager("right");
},
_applyStyleBottom:function(){this.__informManager("bottom");
},
_applyStyleLeft:function(){this.__informManager("left");
},
_changeColorTop:function(value){this.__colorTop=value;
this.__computeComplexTop();
this.__informManager("top");
},
_changeColorInnerTop:function(value){this.__colorInnerTop=value;
this.__computeComplexTop();
this.__informManager("top");
},
_changeColorRight:function(value){this.__colorRight=value;
this.__computeComplexRight();
this.__informManager("right");
},
_changeColorInnerRight:function(value){this.__colorInnerRight=value;
this.__computeComplexRight();
this.__informManager("right");
},
_changeColorBottom:function(value){this.__colorBottom=value;
this.__computeComplexBottom();
this.__informManager("bottom");
},
_changeColorInnerBottom:function(value){this.__colorInnerBottom=value;
this.__computeComplexBottom();
this.__informManager("bottom");
},
_changeColorLeft:function(value){this.__colorLeft=value;
this.__computeComplexLeft();
this.__informManager("left");
},
_changeColorInnerLeft:function(value){this.__colorInnerLeft=value;
this.__computeComplexLeft();
this.__informManager("left");
},
__computeComplexTop:function(){this.__complexTop=this.getWidthTop()===2&&this.__colorInnerTop!=null&&this.__colorTop!=this.__colorInnerTop;
},
__computeComplexRight:function(){this.__complexRight=this.getWidthRight()===2&&this.__colorInnerRight!=null&&this.__colorRight!=this.__colorInnerRight;
},
__computeComplexBottom:function(){this.__complexBottom=this.getWidthBottom()===2&&this.__colorInnerBottom!=null&&this.__colorBottom!=this.__colorInnerBottom;
},
__computeComplexLeft:function(){this.__complexLeft=this.getWidthLeft()===2&&this.__colorInnerLeft!=null&&this.__colorLeft!=this.__colorInnerLeft;
},
__informManager:function(edge){qx.theme.manager.Border.getInstance().updateObjectsEdge(this,
edge);
},
renderTop:qx.core.Variant.select("qx.client",
{"gecko":function(obj){var style=obj._style;
style.borderTopWidth=this.__widthTop||"0px";
style.borderTopColor=this.__colorTop||"";
if(this.__complexTop){style.borderTopStyle="solid";
style.MozBorderTopColors=this.__colorTop+" "+this.__colorInnerTop;
}else{style.borderTopStyle=this.getStyleTop()||"none";
style.MozBorderTopColors="";
}},
"default":function(obj){var outer=obj._style;
var inner=obj._innerStyle;
if(this.__complexTop){if(!inner){obj.prepareEnhancedBorder();
inner=obj._innerStyle;
}outer.borderTopWidth=inner.borderTopWidth="1px";
outer.borderTopStyle=inner.borderTopStyle="solid";
outer.borderTopColor=this.__colorTop;
inner.borderTopColor=this.__colorInnerTop;
}else{outer.borderTopWidth=this.__widthTop||"0px";
outer.borderTopStyle=this.getStyleTop()||"none";
outer.borderTopColor=this.__colorTop||"";
if(inner){inner.borderTopWidth=inner.borderTopStyle=inner.borderTopColor="";
}}}}),
renderRight:qx.core.Variant.select("qx.client",
{"gecko":function(obj){var style=obj._style;
style.borderRightWidth=this.__widthRight||"0px";
style.borderRightColor=this.__colorRight||"";
if(this.__complexRight){style.borderRightStyle="solid";
style.MozBorderRightColors=this.__colorRight+" "+this.__colorInnerRight;
}else{style.borderRightStyle=this.getStyleRight()||"none";
style.MozBorderRightColors="";
}},
"default":function(obj){var outer=obj._style;
var inner=obj._innerStyle;
if(this.__complexRight){if(!inner){obj.prepareEnhancedBorder();
inner=obj._innerStyle;
}outer.borderRightWidth=inner.borderRightWidth="1px";
outer.borderRightStyle=inner.borderRightStyle="solid";
outer.borderRightColor=this.__colorRight;
inner.borderRightColor=this.__colorInnerRight;
}else{outer.borderRightWidth=this.__widthRight||"0px";
outer.borderRightStyle=this.getStyleRight()||"none";
outer.borderRightColor=this.__colorRight||"";
if(inner){inner.borderRightWidth=inner.borderRightStyle=inner.borderRightColor="";
}}}}),
renderBottom:qx.core.Variant.select("qx.client",
{"gecko":function(obj){var style=obj._style;
style.borderBottomWidth=this.__widthBottom||"0px";
style.borderBottomColor=this.__colorBottom||"";
if(this.__complexBottom){style.borderBottomStyle="solid";
style.MozBorderBottomColors=this.__colorBottom+" "+this.__colorInnerBottom;
}else{style.borderBottomStyle=this.getStyleBottom()||"none";
style.MozBorderBottomColors="";
}},
"default":function(obj){var outer=obj._style;
var inner=obj._innerStyle;
if(this.__complexBottom){if(!inner){obj.prepareEnhancedBorder();
inner=obj._innerStyle;
}outer.borderBottomWidth=inner.borderBottomWidth="1px";
outer.borderBottomStyle=inner.borderBottomStyle="solid";
outer.borderBottomColor=this.__colorBottom;
inner.borderBottomColor=this.__colorInnerBottom;
}else{outer.borderBottomWidth=this.__widthBottom||"0px";
outer.borderBottomStyle=this.getStyleBottom()||"none";
outer.borderBottomColor=this.__colorBottom||"";
if(inner){inner.borderBottomWidth=inner.borderBottomStyle=inner.borderBottomColor="";
}}}}),
renderLeft:qx.core.Variant.select("qx.client",
{"gecko":function(obj){var style=obj._style;
style.borderLeftWidth=this.__widthLeft||"0px";
style.borderLeftColor=this.__colorLeft||"";
if(this.__complexLeft){style.borderLeftStyle="solid";
style.MozBorderLeftColors=this.__colorLeft+" "+this.__colorInnerLeft;
}else{style.borderLeftStyle=this.getStyleLeft()||"none";
style.MozBorderLeftColors="";
}},
"default":function(obj){var outer=obj._style;
var inner=obj._innerStyle;
if(this.__complexLeft){if(!inner){obj.prepareEnhancedBorder();
inner=obj._innerStyle;
}outer.borderLeftWidth=inner.borderLeftWidth="1px";
outer.borderLeftStyle=inner.borderLeftStyle="solid";
outer.borderLeftColor=this.__colorLeft;
inner.borderLeftColor=this.__colorInnerLeft;
}else{outer.borderLeftWidth=this.__widthLeft||"0px";
outer.borderLeftStyle=this.getStyleLeft()||"none";
outer.borderLeftColor=this.__colorLeft||"";
if(inner){inner.borderLeftWidth=inner.borderLeftStyle=inner.borderLeftColor="";
}}}})}});




/* ID: qx.theme.manager.Font */
qx.Class.define("qx.theme.manager.Font",
{type:"singleton",
extend:qx.util.manager.Value,
properties:{fontTheme:{check:"Theme",
nullable:true,
apply:"_applyFontTheme",
event:"changeFontTheme"}},
members:{resolveDynamic:function(value){return value instanceof qx.ui.core.Font?value:this._dynamic[value];
},
isDynamic:function(value){return value&&(value instanceof qx.ui.core.Font||this._dynamic[value]!==undefined);
},
syncFontTheme:function(){this._updateObjects();
},
_applyFontTheme:function(value){var dest=this._dynamic;
for(var key in dest){if(dest[key].themed){dest[key].dispose();
delete dest[key];
}}
if(value){var source=value.fonts;
var font=qx.ui.core.Font;
for(var key in source){dest[key]=(new font).set(source[key]);
dest[key].themed=true;
}}
if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncFontTheme();
}}}});




/* ID: qx.ui.core.Font */
qx.Class.define("qx.ui.core.Font",
{extend:qx.core.Object,
construct:function(size,
family){arguments.callee.base.call(this);
if(size!==undefined){this.setSize(size);
}
if(family!==undefined){this.setFamily(family);
}},
statics:{fromString:function(str){var font=new qx.ui.core.Font;
var parts=str.split(/\s+/);
var name=[];
var part;
for(var i=0;i<parts.length;i++){switch(part=parts[i]){case "bold":font.setBold(true);
break;
case "italic":font.setItalic(true);
break;
case "underline":font.setDecoration("underline");
break;
default:var temp=parseInt(part);
if(temp==part||qx.lang.String.contains(part,
"px")){font.setSize(temp);
}else{name.push(part);
}break;
}}
if(name.length>0){font.setFamily(name);
}return font;
},
fromConfig:function(config){var font=new qx.ui.core.Font;
font.set(config);
return font;
},
reset:function(widget){widget.removeStyleProperty("fontFamily");
widget.removeStyleProperty("fontSize");
widget.removeStyleProperty("fontWeight");
widget.removeStyleProperty("fontStyle");
widget.removeStyleProperty("textDecoration");
},
resetElement:function(element){var style=element.style;
style.fontFamily="";
style.fontSize="";
style.fontWeight="";
style.fontStyle="";
style.textDecoration="";
},
resetStyle:function(style){style.fontFamily="";
style.fontSize="";
style.fontWeight="";
style.fontStyle="";
style.textDecoration="";
}},
properties:{size:{check:"Integer",
nullable:true,
apply:"_applySize"},
family:{check:"Array",
nullable:true,
apply:"_applyFamily"},
bold:{check:"Boolean",
nullable:true,
apply:"_applyBold"},
italic:{check:"Boolean",
nullable:true,
apply:"_applyItalic"},
decoration:{check:["underline",
"line-through",
"overline"],
nullable:true,
apply:"_applyDecoration"}},
members:{__size:null,
__family:null,
__bold:null,
__italic:null,
__decoration:null,
_applySize:function(value,
old){this.__size=value===null?null:value+"px";
},
_applyFamily:function(value,
old){var family="";
for(var i=0,
l=value.length;i<l;i++){if(value[i].indexOf(" ")>0){family+='"'+value[i]+'"';
}else{family+=value[i];
}
if(i!=l-1){family+=",";
}}this.__family=family;
},
_applyBold:function(value,
old){this.__bold=value===null?null:value?"bold":"normal";
},
_applyItalic:function(value,
old){this.__italic=value===null?null:value?"italic":"normal";
},
_applyDecoration:function(value,
old){this.__decoration=value===null?null:value;
},
render:function(widget){widget.setStyleProperty("fontFamily",
this.__family);
widget.setStyleProperty("fontSize",
this.__size);
widget.setStyleProperty("fontWeight",
this.__bold);
widget.setStyleProperty("fontStyle",
this.__italic);
widget.setStyleProperty("textDecoration",
this.__decoration);
},
renderStyle:function(style){style.fontFamily=this.__family||"";
style.fontSize=this.__size||"";
style.fontWeight=this.__bold||"";
style.fontStyle=this.__italic||"";
style.textDecoration=this.__decoration||"";
},
renderElement:function(element){var style=element.style;
style.fontFamily=this.__family||"";
style.fontSize=this.__size||"";
style.fontWeight=this.__bold||"";
style.fontStyle=this.__italic||"";
style.textDecoration=this.__decoration||"";
},
generateStyle:function(){return (this.__family?"font-family:"+this.__family.replace(/\"/g,
"'")+";":"")+(this.__size?"font-size:"+this.__size+";":"")+(this.__weight?"font-weight:"+this.__weight+";":"")+(this.__style?"font-style:"+this.__style+";":"")+(this.__decoration?"text-decoration:"+this.__decoration+";":"");
}}});




/* ID: qx.theme.manager.Icon */
qx.Class.define("qx.theme.manager.Icon",
{type:"singleton",
extend:qx.core.Target,
properties:{iconTheme:{check:"Theme",
nullable:true,
apply:"_applyIconTheme",
event:"changeIconTheme"}},
members:{_applyIconTheme:function(value,
old){if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncIconTheme();
}},
syncIconTheme:function(){var value=this.getIconTheme();
var alias=qx.io.Alias.getInstance();
value?alias.add("icon",
value.icons.uri):alias.remove("icon");
}}});




/* ID: qx.theme.manager.Widget */
qx.Class.define("qx.theme.manager.Widget",
{type:"singleton",
extend:qx.core.Target,
properties:{widgetTheme:{check:"Theme",
nullable:true,
apply:"_applyWidgetTheme",
event:"changeWidgetTheme"}},
members:{_applyWidgetTheme:function(value,
old){if(qx.theme.manager.Meta.getInstance().getAutoSync()){this.syncWidgetTheme();
}},
syncWidgetTheme:function(){var value=this.getWidgetTheme();
var alias=qx.io.Alias.getInstance();
value?alias.add("widget",
value.widgets.uri):alias.remove("widget");
}}});




/* ID: qx.event.handler.FocusHandler */
qx.Class.define("qx.event.handler.FocusHandler",
{extend:qx.core.Target,
construct:function(widget){arguments.callee.base.call(this);
if(widget!=null){this._attachedWidget=widget;
}},
statics:{mouseFocus:false},
members:{getAttachedWidget:function(){return this._attachedWidget;
},
_onkeyevent:function(container,
ev){if(ev.getKeyIdentifier()!="Tab"){return;
}ev.stopPropagation();
ev.preventDefault();
qx.event.handler.FocusHandler.mouseFocus=false;
var vCurrent=this.getAttachedWidget().getFocusedChild();
if(!ev.isShiftPressed()){var vNext=vCurrent?this.getWidgetAfter(container,
vCurrent):this.getFirstWidget(container);
}else{var vNext=vCurrent?this.getWidgetBefore(container,
vCurrent):this.getLastWidget(container);
}if(vNext){vNext.setFocused(true);
vNext._ontabfocus();
}},
compareTabOrder:function(c1,
c2){if(c1==c2){return 0;
}var t1=c1.getTabIndex();
var t2=c2.getTabIndex();
if(t1!=t2){return t1-t2;
}var y1=qx.html.Location.getPageBoxTop(c1.getElement());
var y2=qx.html.Location.getPageBoxTop(c2.getElement());
if(y1!=y2){return y1-y2;
}var x1=qx.html.Location.getPageBoxLeft(c1.getElement());
var x2=qx.html.Location.getPageBoxLeft(c2.getElement());
if(x1!=x2){return x1-x2;
}var z1=c1.getZIndex();
var z2=c2.getZIndex();
if(z1!=z2){return z1-z2;
}return 0;
},
getFirstWidget:function(parentContainer){return this._getFirst(parentContainer,
null);
},
getLastWidget:function(parentContainer){return this._getLast(parentContainer,
null);
},
getWidgetAfter:function(parentContainer,
widget){if(parentContainer==widget){return this.getFirstWidget(parentContainer);
}
if(widget.getAnonymous()){widget=widget.getParent();
}
if(widget==null){return [];
}var vAll=[];
this._getAllAfter(parentContainer,
widget,
vAll);
vAll.sort(this.compareTabOrder);
return vAll.length>0?vAll[0]:this.getFirstWidget(parentContainer);
},
getWidgetBefore:function(parentContainer,
widget){if(parentContainer==widget){return this.getLastWidget(parentContainer);
}
if(widget.getAnonymous()){widget=widget.getParent();
}
if(widget==null){return [];
}var vAll=[];
this._getAllBefore(parentContainer,
widget,
vAll);
vAll.sort(this.compareTabOrder);
var len=vAll.length;
return len>0?vAll[len-1]:this.getLastWidget(parentContainer);
},
_getAllAfter:function(parent,
widget,
arr){var children=parent.getChildren();
var child;
var len=children.length;
for(var i=0;i<len;i++){child=children[i];
if(!(child instanceof qx.ui.core.Parent)&&!(child instanceof qx.ui.basic.Terminator)){continue;
}
if(child.isFocusable()&&child.getTabIndex()>0&&this.compareTabOrder(widget,
child)<0){arr.push(children[i]);
}
if(!child.isFocusRoot()&&child instanceof qx.ui.core.Parent){this._getAllAfter(child,
widget,
arr);
}}},
_getAllBefore:function(parent,
widget,
arr){var children=parent.getChildren();
var child;
var len=children.length;
for(var i=0;i<len;i++){child=children[i];
if(!(child instanceof qx.ui.core.Parent)&&!(child instanceof qx.ui.basic.Terminator)){continue;
}
if(child.isFocusable()&&child.getTabIndex()>0&&this.compareTabOrder(widget,
child)>0){arr.push(child);
}
if(!child.isFocusRoot()&&child instanceof qx.ui.core.Parent){this._getAllBefore(child,
widget,
arr);
}}},
_getFirst:function(parent,
firstWidget){var children=parent.getChildren();
var child;
var len=children.length;
for(var i=0;i<len;i++){child=children[i];
if(!(child instanceof qx.ui.core.Parent)&&!(child instanceof qx.ui.basic.Terminator)){continue;
}
if(child.isFocusable()&&child.getTabIndex()>0){if(firstWidget==null||this.compareTabOrder(child,
firstWidget)<0){firstWidget=child;
}}
if(!child.isFocusRoot()&&child instanceof qx.ui.core.Parent){firstWidget=this._getFirst(child,
firstWidget);
}}return firstWidget;
},
_getLast:function(parent,
lastWidget){var children=parent.getChildren();
var child;
var len=children.length;
for(var i=0;i<len;i++){child=children[i];
if(!(child instanceof qx.ui.core.Parent)&&!(child instanceof qx.ui.basic.Terminator)){continue;
}
if(child.isFocusable()&&child.getTabIndex()>0){if(lastWidget==null||this.compareTabOrder(child,
lastWidget)>0){lastWidget=child;
}}
if(!child.isFocusRoot()&&child instanceof qx.ui.core.Parent){lastWidget=this._getLast(child,
lastWidget);
}}return lastWidget;
}},
destruct:function(){this._disposeFields("_attachedWidget");
}});




/* ID: qx.html.Location */
qx.Class.define("qx.html.Location",
{statics:{getPageOuterLeft:function(el){return qx.html.Location.getPageBoxLeft(el)-qx.html.Style.getMarginLeft(el);
},
getPageOuterTop:function(el){return qx.html.Location.getPageBoxTop(el)-qx.html.Style.getMarginTop(el);
},
getPageOuterRight:function(el){return qx.html.Location.getPageBoxRight(el)+qx.html.Style.getMarginRight(el);
},
getPageOuterBottom:function(el){return qx.html.Location.getPageBoxBottom(el)+qx.html.Style.getMarginBottom(el);
},
getClientOuterLeft:function(el){return qx.html.Location.getClientBoxLeft(el)-qx.html.Style.getMarginLeft(el);
},
getClientOuterTop:function(el){return qx.html.Location.getClientBoxTop(el)-qx.html.Style.getMarginTop(el);
},
getClientOuterRight:function(el){return qx.html.Location.getClientBoxRight(el)+qx.html.Style.getMarginRight(el);
},
getClientOuterBottom:function(el){return qx.html.Location.getClientBoxBottom(el)+qx.html.Style.getMarginBottom(el);
},
getClientBoxLeft:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return el.getBoundingClientRect().left;
},
"gecko":function(el){return qx.html.Location.getClientAreaLeft(el)-qx.html.Style.getBorderLeft(el);
},
"default":function(el){var sum=el.offsetLeft;
while(el.tagName.toLowerCase()!="body"){el=el.offsetParent;
sum+=el.offsetLeft-el.scrollLeft;
}return sum;
}}),
getClientBoxTop:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return el.getBoundingClientRect().top;
},
"gecko":function(el){return qx.html.Location.getClientAreaTop(el)-qx.html.Style.getBorderTop(el);
},
"default":function(el){var sum=el.offsetTop;
while(el.tagName.toLowerCase()!="body"){el=el.offsetParent;
sum+=el.offsetTop-el.scrollTop;
}return sum;
}}),
getClientBoxRight:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return el.getBoundingClientRect().right;
},
"default":function(el){return qx.html.Location.getClientBoxLeft(el)+qx.html.Dimension.getBoxWidth(el);
}}),
getClientBoxBottom:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return el.getBoundingClientRect().bottom;
},
"default":function(el){return qx.html.Location.getClientBoxTop(el)+qx.html.Dimension.getBoxHeight(el);
}}),
getPageBoxLeft:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return qx.html.Location.getClientBoxLeft(el)+qx.html.Scroll.getLeftSum(el);
},
"gecko":function(el){return qx.html.Location.getPageAreaLeft(el)-qx.html.Style.getBorderLeft(el);
},
"default":function(el){var sum=el.offsetLeft;
while(el.tagName.toLowerCase()!="body"){el=el.offsetParent;
sum+=el.offsetLeft;
}return sum;
}}),
getPageBoxTop:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return qx.html.Location.getClientBoxTop(el)+qx.html.Scroll.getTopSum(el);
},
"gecko":function(el){return qx.html.Location.getPageAreaTop(el)-qx.html.Style.getBorderTop(el);
},
"default":function(el){var sum=el.offsetTop;
while(el.tagName.toLowerCase()!="body"){el=el.offsetParent;
sum+=el.offsetTop;
}return sum;
}}),
getPageBoxRight:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return qx.html.Location.getClientBoxRight(el)+qx.html.Scroll.getLeftSum(el);
},
"default":function(el){return qx.html.Location.getPageBoxLeft(el)+qx.html.Dimension.getBoxWidth(el);
}}),
getPageBoxBottom:qx.core.Variant.select("qx.client",
{"mshtml":function(el){return qx.html.Location.getClientBoxBottom(el)+qx.html.Scroll.getTopSum(el);
},
"default":function(el){return qx.html.Location.getPageBoxTop(el)+qx.html.Dimension.getBoxHeight(el);
}}),
getClientAreaLeft:qx.core.Variant.select("qx.client",
{"gecko":function(el){return qx.html.Location.getPageAreaLeft(el)-qx.html.Scroll.getLeftSum(el);
},
"default":function(el){return qx.html.Location.getClientBoxLeft(el)+qx.html.Style.getBorderLeft(el);
}}),
getClientAreaTop:qx.core.Variant.select("qx.client",
{"gecko":function(el){return qx.html.Location.getPageAreaTop(el)-qx.html.Scroll.getTopSum(el);
},
"default":function(el){return qx.html.Location.getClientBoxTop(el)+qx.html.Style.getBorderTop(el);
}}),
getClientAreaRight:function(el){return qx.html.Location.getClientAreaLeft(el)+qx.html.Dimension.getAreaWidth(el);
},
getClientAreaBottom:function(el){return qx.html.Location.getClientAreaTop(el)+qx.html.Dimension.getAreaHeight(el);
},
getPageAreaLeft:qx.core.Variant.select("qx.client",
{"gecko":function(el){return el.ownerDocument.getBoxObjectFor(el).x;
},
"default":function(el){return qx.html.Location.getPageBoxLeft(el)+qx.html.Style.getBorderLeft(el);
}}),
getPageAreaTop:qx.core.Variant.select("qx.client",
{"gecko":function(el){return el.ownerDocument.getBoxObjectFor(el).y;
},
"default":function(el){return qx.html.Location.getPageBoxTop(el)+qx.html.Style.getBorderTop(el);
}}),
getPageAreaRight:function(el){return qx.html.Location.getPageAreaLeft(el)+qx.html.Dimension.getAreaWidth(el);
},
getPageAreaBottom:function(el){return qx.html.Location.getPageAreaTop(el)+qx.html.Dimension.getAreaHeight(el);
},
getClientInnerLeft:function(el){return qx.html.Location.getClientAreaLeft(el)+qx.html.Style.getPaddingLeft(el);
},
getClientInnerTop:function(el){return qx.html.Location.getClientAreaTop(el)+qx.html.Style.getPaddingTop(el);
},
getClientInnerRight:function(el){return qx.html.Location.getClientInnerLeft(el)+qx.html.Dimension.getInnerWidth(el);
},
getClientInnerBottom:function(el){return qx.html.Location.getClientInnerTop(el)+qx.html.Dimension.getInnerHeight(el);
},
getPageInnerLeft:function(el){return qx.html.Location.getPageAreaLeft(el)+qx.html.Style.getPaddingLeft(el);
},
getPageInnerTop:function(el){return qx.html.Location.getPageAreaTop(el)+qx.html.Style.getPaddingTop(el);
},
getPageInnerRight:function(el){return qx.html.Location.getPageInnerLeft(el)+qx.html.Dimension.getInnerWidth(el);
},
getPageInnerBottom:function(el){return qx.html.Location.getPageInnerTop(el)+qx.html.Dimension.getInnerHeight(el);
},
getScreenBoxLeft:qx.core.Variant.select("qx.client",
{"gecko":function(el){var sum=0;
var p=el.parentNode;
while(p.nodeType==1){sum+=p.scrollLeft;
p=p.parentNode;
}return el.ownerDocument.getBoxObjectFor(el).screenX-sum;
},
"default":function(el){return qx.html.Location.getScreenDocumentLeft(el)+qx.html.Location.getPageBoxLeft(el);
}}),
getScreenBoxTop:qx.core.Variant.select("qx.client",
{"gecko":function(el){var sum=0;
var p=el.parentNode;
while(p.nodeType==1){sum+=p.scrollTop;
p=p.parentNode;
}return el.ownerDocument.getBoxObjectFor(el).screenY-sum;
},
"default":function(el){return qx.html.Location.getScreenDocumentTop(el)+qx.html.Location.getPageBoxTop(el);
}}),
getScreenBoxRight:function(el){return qx.html.Location.getScreenBoxLeft(el)+qx.html.Dimension.getBoxWidth(el);
},
getScreenBoxBottom:function(el){return qx.html.Location.getScreenBoxTop(el)+qx.html.Dimension.getBoxHeight(el);
},
getScreenOuterLeft:function(el){return qx.html.Location.getScreenBoxLeft(el)-qx.html.Style.getMarginLeft(el);
},
getScreenOuterTop:function(el){return qx.html.Location.getScreenBoxTop(el)-qx.html.Style.getMarginTop(el);
},
getScreenOuterRight:function(el){return qx.html.Location.getScreenBoxRight(el)+qx.html.Style.getMarginRight(el);
},
getScreenOuterBottom:function(el){return qx.html.Location.getScreenBoxBottom(el)+qx.html.Style.getMarginBottom(el);
},
getScreenAreaLeft:function(el){return qx.html.Location.getScreenBoxLeft(el)+qx.html.Dimension.getInsetLeft(el);
},
getScreenAreaTop:function(el){return qx.html.Location.getScreenBoxTop(el)+qx.html.Dimension.getInsetTop(el);
},
getScreenAreaRight:function(el){return qx.html.Location.getScreenBoxRight(el)-qx.html.Dimension.getInsetRight(el);
},
getScreenAreaBottom:function(el){return qx.html.Location.getScreenBoxBottom(el)-qx.html.Dimension.getInsetBottom(el);
},
getScreenInnerLeft:function(el){return qx.html.Location.getScreenAreaLeft(el)+qx.html.Style.getPaddingLeft(el);
},
getScreenInnerTop:function(el){return qx.html.Location.getScreenAreaTop(el)+qx.html.Style.getPaddingTop(el);
},
getScreenInnerRight:function(el){return qx.html.Location.getScreenAreaRight(el)-qx.html.Style.getPaddingRight(el);
},
getScreenInnerBottom:function(el){return qx.html.Location.getScreenAreaBottom(el)-qx.html.Style.getPaddingBottom(el);
},
getScreenDocumentLeft:qx.core.Variant.select("qx.client",
{"gecko":function(el){return qx.html.Location.getScreenOuterLeft(el.ownerDocument.body);
},
"default":function(el){return el.document.parentWindow.screenLeft;
}}),
getScreenDocumentTop:qx.core.Variant.select("qx.client",
{"gecko":function(el){return qx.html.Location.getScreenOuterTop(el.ownerDocument.body);
},
"default":function(el){return el.document.parentWindow.screenTop;
}}),
getScreenDocumentRight:qx.core.Variant.select("qx.client",
{"gecko":function(el){return qx.html.Location.getScreenOuterRight(el.ownerDocument.body);
},
"default":function(el){}}),
getScreenDocumentBottom:qx.core.Variant.select("qx.client",
{"gecko":function(el){return qx.html.Location.getScreenOuterBottom(el.ownerDocument.body);
},
"default":function(el){}})}});




/* ID: qx.html.Scroll */
qx.Class.define("qx.html.Scroll",
{statics:{getLeftSum:function(el){var sum=0;
var p=el.parentNode;
while(p.nodeType==1){sum+=p.scrollLeft;
p=p.parentNode;
}return sum;
},
getTopSum:function(el){var sum=0;
var p=el.parentNode;
while(p.nodeType==1){sum+=p.scrollTop;
p=p.parentNode;
}return sum;
}}});




/* ID: qx.io.image.Manager */
qx.Class.define("qx.io.image.Manager",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this.__visible={};
this.__all={};
},
members:{add:function(source){var data=this.__all;
if(data[source]===undefined){data[source]=1;
}else{data[source]++;
}},
remove:function(source){var data=this.__all;
if(data[source]!==undefined){data[source]--;
}
if(data[source]<=0){delete data[source];
}},
show:function(source){var data=this.__visible;
if(data[source]===undefined){data[source]=1;
}else{data[source]++;
}},
hide:function(source){var data=this.__visible;
if(data[source]!==undefined){data[source]--;
}
if(data[source]<=0){delete data[source];
}},
getVisibleImages:function(){var visible=this.__visible;
var list={};
for(var source in visible){if(visible[source]>0){list[source]=true;
}}return list;
},
getHiddenImages:function(){var visible=this.__visible;
var all=this.__all;
var list={};
for(var source in all){if(visible[source]===undefined){list[source]=true;
}}return list;
}},
destruct:function(){this._disposeFields("__all",
"__visible");
}});




/* ID: qx.html.Offset */
qx.Class.define("qx.html.Offset",
{statics:{getLeft:qx.core.Variant.select("qx.client",
{"gecko":function(el){var val=el.offsetLeft;
var pa=el.parentNode;
var pose=qx.html.Style.getStyleProperty(el,
"position");
var posp=qx.html.Style.getStyleProperty(pa,
"position");
if(pose!="absolute"&&pose!="fixed"){val-=qx.html.Style.getBorderLeft(pa);
}if(posp!="absolute"&&posp!="fixed"){while(pa){pa=pa.parentNode;
if(!pa||typeof pa.tagName!=="string"){break;
}var posi=qx.html.Style.getStyleProperty(pa,
"position");
if(posi=="absolute"||posi=="fixed"){val-=qx.html.Style.getBorderLeft(pa)+qx.html.Style.getPaddingLeft(pa);
break;
}}}return val;
},
"default":function(el){return el.offsetLeft;
}}),
getTop:qx.core.Variant.select("qx.client",
{"gecko":function(el){var val=el.offsetTop;
var pa=el.parentNode;
var pose=qx.html.Style.getStyleProperty(el,
"position");
var posp=qx.html.Style.getStyleProperty(pa,
"position");
if(pose!="absolute"&&pose!="fixed"){val-=qx.html.Style.getBorderTop(pa);
}if(posp!="absolute"&&posp!="fixed"){while(pa){pa=pa.parentNode;
if(!pa||typeof pa.tagName!=="string"){break;
}var posi=qx.html.Style.getStyleProperty(pa,
"position");
if(posi=="absolute"||posi=="fixed"){val-=qx.html.Style.getBorderTop(pa)+qx.html.Style.getPaddingTop(pa);
break;
}}}return val;
},
"default":function(el){return el.offsetTop;
}})}});




/* ID: qx.html.ScrollIntoView */
qx.Class.define("qx.html.ScrollIntoView",
{statics:{scrollX:function(vElement,
vAlignLeft){var vParentWidth,
vParentScrollLeft,
vWidth,
vHasScroll;
var vParent=vElement.parentNode;
var vOffset=vElement.offsetLeft;
var vWidth=vElement.offsetWidth;
while(vParent){switch(qx.html.Style.getStyleProperty(vParent,
"overflow")){case "scroll":case "auto":case "-moz-scrollbars-horizontal":vHasScroll=true;
break;
default:switch(qx.html.Style.getStyleProperty(vParent,
"overflowX")){case "scroll":case "auto":vHasScroll=true;
break;
default:vHasScroll=false;
}}
if(vHasScroll){vParentWidth=vParent.clientWidth;
vParentScrollLeft=vParent.scrollLeft;
if(vAlignLeft){vParent.scrollLeft=vOffset;
}else if(vAlignLeft==false){vParent.scrollLeft=vOffset+vWidth-vParentWidth;
}else if(vWidth>vParentWidth||vOffset<vParentScrollLeft){vParent.scrollLeft=vOffset;
}else if((vOffset+vWidth)>(vParentScrollLeft+vParentWidth)){vParent.scrollLeft=vOffset+vWidth-vParentWidth;
}vOffset=vParent.offsetLeft;
vWidth=vParent.offsetWidth;
}else{vOffset+=vParent.offsetLeft;
}
if(vParent.tagName.toLowerCase()=="body"){break;
}vParent=vParent.offsetParent;
}return true;
},
scrollY:function(vElement,
vAlignTop){var vParentHeight,
vParentScrollTop,
vHeight,
vHasScroll;
var vParent=vElement.parentNode;
var vOffset=vElement.offsetTop;
var vHeight=vElement.offsetHeight;
while(vParent){switch(qx.html.Style.getStyleProperty(vParent,
"overflow")){case "scroll":case "auto":case "-moz-scrollbars-vertical":vHasScroll=true;
break;
default:switch(qx.html.Style.getStyleProperty(vParent,
"overflowY")){case "scroll":case "auto":vHasScroll=true;
break;
default:vHasScroll=false;
}}
if(vHasScroll){vParentHeight=vParent.clientHeight;
vParentScrollTop=vParent.scrollTop;
if(vAlignTop){vParent.scrollTop=vOffset;
}else if(vAlignTop==false){vParent.scrollTop=vOffset+vHeight-vParentHeight;
}else if(vHeight>vParentHeight||vOffset<vParentScrollTop){vParent.scrollTop=vOffset;
}else if((vOffset+vHeight)>(vParentScrollTop+vParentHeight)){vParent.scrollTop=vOffset+vHeight-vParentHeight;
}vOffset=vParent.offsetTop;
vHeight=vParent.offsetHeight;
}else{vOffset+=vParent.offsetTop;
}
if(vParent.tagName.toLowerCase()=="body"){break;
}vParent=vParent.offsetParent;
}return true;
}}});




/* ID: qx.client.Timer */
qx.Class.define("qx.client.Timer",
{extend:qx.core.Target,
construct:function(interval){arguments.callee.base.call(this);
this.setEnabled(false);
if(interval!=null){this.setInterval(interval);
}this.__oninterval=qx.lang.Function.bind(this._oninterval,
this);
},
events:{"interval":"qx.event.type.Event"},
statics:{once:function(func,
obj,
timeout){var timer=new qx.client.Timer(timeout);
timer.addEventListener("interval",
function(e){timer.dispose();
func.call(obj,
e);
obj=null;
},
obj);
timer.start();
}},
properties:{enabled:{init:true,
check:"Boolean",
apply:"_applyEnabled"},
interval:{check:"Integer",
init:1000,
apply:"_applyInterval"}},
members:{__intervalHandler:null,
_applyInterval:function(value,
old){if(this.getEnabled()){this.restart();
}},
_applyEnabled:function(value,
old){if(old){window.clearInterval(this.__intervalHandler);
this.__intervalHandler=null;
}else if(value){this.__intervalHandler=window.setInterval(this.__oninterval,
this.getInterval());
}},
start:function(){this.setEnabled(true);
},
startWith:function(interval){this.setInterval(interval);
this.start();
},
stop:function(){this.setEnabled(false);
},
restart:function(){this.stop();
this.start();
},
restartWith:function(interval){this.stop();
this.startWith(interval);
},
_oninterval:function(){if(this.getEnabled()){this.createDispatchEvent("interval");
}}},
destruct:function(){if(this.__intervalHandler){window.clearInterval(this.__intervalHandler);
}this._disposeFields("__intervalHandler",
"__oninterval");
}});




/* ID: qx.io.image.PreloaderSystem */
qx.Class.define("qx.io.image.PreloaderSystem",
{extend:qx.core.Target,
construct:function(vPreloadList,
vCallBack,
vCallBackScope){arguments.callee.base.call(this);
if(vPreloadList instanceof Array){this._list=qx.lang.Object.fromArray(vPreloadList);
}else{this._list=vPreloadList;
}this._timer=new qx.client.Timer(qx.core.Setting.get("qx.preloaderTimeout"));
this._timer.addEventListener("interval",
this.__oninterval,
this);
if(vCallBack){this.addEventListener("completed",
vCallBack,
vCallBackScope||null);
}},
events:{"completed":"qx.event.type.Event"},
members:{_stopped:false,
start:function(){if(qx.lang.Object.isEmpty(this._list)){this.createDispatchEvent("completed");
return;
}
for(var vSource in this._list){var vPreloader=qx.io.image.PreloaderManager.getInstance().create(qx.io.Alias.getInstance().resolve(vSource));
if(vPreloader.isErroneous()||vPreloader.isLoaded()){delete this._list[vSource];
}else{vPreloader._origSource=vSource;
vPreloader.addEventListener("load",
this.__onload,
this);
vPreloader.addEventListener("error",
this.__onerror,
this);
}}this._check();
},
__onload:function(e){if(this.getDisposed()){return;
}delete this._list[e.getTarget()._origSource];
this._check();
},
__onerror:function(e){if(this.getDisposed()){return;
}delete this._list[e.getTarget()._origSource];
this._check();
},
__oninterval:function(e){this.debug("Cannot preload: "+qx.lang.Object.getKeysAsString(this._list));
this._stopped=true;
this._timer.stop();
this.createDispatchEvent("completed");
},
_check:function(){if(this._stopped){return;
}if(qx.lang.Object.isEmpty(this._list)){this._timer.stop();
this.createDispatchEvent("completed");
}else{this._timer.restart();
}}},
settings:{"qx.preloaderTimeout":3000},
destruct:function(){if(this._timer){this._timer.removeEventListener("interval",
this.__oninterval,
this);
this._disposeObjects("_timer");
}this._disposeFields("_list");
}});




/* ID: qx.io.image.PreloaderManager */
qx.Class.define("qx.io.image.PreloaderManager",
{type:"singleton",
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._objects={};
},
members:{add:function(vObject){this._objects[vObject.getUri()]=vObject;
},
remove:function(vObject){delete this._objects[vObject.getUri()];
},
has:function(vSource){return this._objects[vSource]!=null;
},
get:function(vSource){return this._objects[vSource];
},
create:function(vSource){if(this._objects[vSource]){return this._objects[vSource];
}return new qx.io.image.Preloader(vSource);
}},
destruct:function(){this._disposeFields("_objects");
}});




/* ID: qx.io.image.Preloader */
qx.Class.define("qx.io.image.Preloader",
{extend:qx.core.Target,
events:{"load":"qx.event.type.Event",
"error":"qx.event.type.Event"},
construct:function(imageUrl){if(qx.io.image.PreloaderManager.getInstance().has(imageUrl)){this.debug("Reuse qx.io.image.Preloader in old-style!");
this.debug("Please use qx.io.image.PreloaderManager.getInstance().create(source) instead!");
return qx.io.image.PreloaderManager.getInstance().get(imageUrl);
}arguments.callee.base.call(this);
this._element=new Image;
this._element.onload=qx.lang.Function.bind(this.__onload,
this);
this._element.onerror=qx.lang.Function.bind(this.__onerror,
this);
this._source=imageUrl;
this._element.src=imageUrl;
if(qx.core.Variant.isSet("qx.client",
"mshtml")){this._isPng=/\.png$/i.test(this._element.nameProp);
}qx.io.image.PreloaderManager.getInstance().add(this);
},
members:{_source:null,
_isLoaded:false,
_isErroneous:false,
getUri:function(){return this._source;
},
getSource:function(){return this._source;
},
isLoaded:function(){return this._isLoaded;
},
isErroneous:function(){return this._isErroneous;
},
_isPng:false,
getIsPng:function(){return this._isPng;
},
getWidth:qx.core.Variant.select("qx.client",
{"gecko":function(){return this._element.naturalWidth;
},
"default":function(){return this._element.width;
}}),
getHeight:qx.core.Variant.select("qx.client",
{"gecko":function(){return this._element.naturalHeight;
},
"default":function(){return this._element.height;
}}),
__onload:function(){if(this._isLoaded||this._isErroneous){return;
}this._isLoaded=true;
this._isErroneous=false;
if(this.hasEventListeners("load")){this.dispatchEvent(new qx.event.type.Event("load"),
true);
}},
__onerror:function(){if(this._isLoaded||this._isErroneous){return;
}this.debug("Could not load: "+this._source);
this._isLoaded=false;
this._isErroneous=true;
if(this.hasEventListeners("error")){this.dispatchEvent(new qx.event.type.Event("error"),
true);
}}},
destruct:function(){if(this._element){this._element.onload=this._element.onerror=null;
}this._disposeFields("_element",
"_isLoaded",
"_isErroneous",
"_isPng");
}});




/* ID: testrunner.TestLoader */
qx.Class.define("testrunner.TestLoader",
{extend:qx.application.Gui,
construct:function(){arguments.callee.base.call(this);
qx.io.Alias.getInstance().add("testrunner",
qx.core.Setting.get("testrunner.resourceUri"));
},
statics:{getInstance:function(){return this.instance;
}},
properties:{suite:{check:"testrunner.TestSuite",
nullable:true}},
members:{main:function(){arguments.callee.base.call(this);
testrunner.TestLoader.instance=this;
this.setTestNamespace(this.__getClassNameFromUrl());
if(window.top.jsUnitTestSuite){this.runJsUnit();
return;
}
if(window==window.top){this.runStandAlone();
return;
}},
__getClassNameFromUrl:function(){var params=window.location.search;
var className=params.match(/[\?&]testclass=([A-Za-z0-9_\.]+)/);
if(className){className=className[1];
}else{className="__unknown_class__";
}return className;
},
setTestNamespace:function(namespace){var suite=new testrunner.TestSuite();
suite.add(namespace);
this.setSuite(suite);
},
runJsUnit:function(){var testResult=new testrunner.JsUnitTestResult();
this.getSuite().run(testResult);
testResult.exportToJsUnit();
},
runStandAlone:function(){console.log(this.getTestDescriptions());
var testResult=new testrunner.TestResult();
testResult.addEventListener("failure",
function(e){var ex=e.getData().exception;
var test=e.getData().test;
this.error("Test '"+test.getFullName()+"' failed: "+ex.getMessage()+" - "+ex.getComment());
this.error("Stack trace: "+ex.getStackTrace().join("\n"));
});
testResult.addEventListener("error",
function(e){var ex=e.getData().exception;
this.error("The test '"+e.getData().test.getFullName()+"' had an error: "+ex,
ex);
});
this.getSuite().run(testResult);
},
getTestDescriptions:function(){var desc=[];
var classes=this.getSuite().getTestClasses();
for(var i=0;i<classes.length;i++){var cls=classes[i];
var clsDesc={};
clsDesc.classname=cls.getName();
clsDesc.tests=[];
var methods=cls.getTestMethods();
for(var j=0;j<methods.length;j++){clsDesc.tests.push(methods[j].getName());
}desc.push(clsDesc);
}return qx.io.Json.stringify(desc);
},
runTests:function(testResult,
className,
methodName){var classes=this.getSuite().getTestClasses();
for(var i=0;i<classes.length;i++){if(className==classes[i].getName()){var methods=classes[i].getTestMethods();
for(var j=0;j<methods.length;j++){if(methodName&&methods[j].getName()!=methodName){continue;
}methods[j].run(testResult);
}return;
}}},
runTestsFromNamespace:function(testResult,
namespaceName){var classes=this.getSuite().getTestClasses();
for(var i=0;i<classes.length;i++){if(classes[i].getName().indexOf(namespaceName)==0){classes[i].run(testResult);
}}}},
settings:{"testrunner.resourceUri":"./resource"}});




/* ID: testrunner.TestSuite */
qx.Class.define("testrunner.TestSuite",
{extend:qx.core.Object,
construct:function(testClassOrNamespace){arguments.callee.base.call(this);
this.__tests=[];
if(testClassOrNamespace){this.add(testClassOrNamespace);
}},
members:{add:function(testClassOrNamespace){if(typeof (testClassOrNamespace)=="string"){var evalTestClassOrNamespace=eval(testClassOrNamespace);
if(!evalTestClassOrNamespace){this.addFail(testClassOrNamespace,
"The class/namespace '"+testClassOrNamespace+"' is undefined!");
}testClassOrNamespace=evalTestClassOrNamespace;
}
if(typeof (testClassOrNamespace)=="function"){this.addTestClass(testClassOrNamespace);
}else if(typeof (testClassOrNamespace)=="object"){this.addTestNamespace(testClassOrNamespace);
}else{this.addFail("exsitsCheck",
"Unkown test class '"+testClassOrNamespace+"'!");
return;
}},
addTestNamespace:function(namespace){if(typeof (namespace)=="function"&&namespace.classname){if(qx.Class.isSubClassOf(namespace,
testrunner.TestCase)){this.addTestClass(namespace);
return;
}}else if(typeof (namespace)=="object"&&!(namespace instanceof Array)){for(var key in namespace){this.addTestNamespace(namespace[key]);
}}},
addTestFunction:function(name,
fcn){this.__tests.push(new testrunner.TestFunction(null,
name,
fcn));
},
addTestMethod:function(clazz,
functionName){this.__tests.push(new testrunner.TestFunction(clazz,
functionName));
},
addTestClass:function(clazz){this.__tests.push(new testrunner.TestClass(clazz));
},
addFail:function(functionName,
message){this.addTestFunction(functionName,
function(){fail(message);
});
},
run:function(testResult){for(var i=0;i<this.__tests.length;i++){(this.__tests[i]).run(testResult);
}},
getTestClasses:function(){var classes=[];
for(var i=0;i<this.__tests.length;i++){var test=this.__tests[i];
if(test instanceof testrunner.TestClass){classes.push(test);
}}return classes;
},
getTestMethods:function(){var methods=[];
for(var i=0;i<this.__tests.length;i++){var test=this.__tests[i];
if(test instanceof testrunner.TestFunction){methods.push(test);
}}return methods;
},
addPollutionCheck:function(){},
__pollutionCheck:function(){var testFunctionNames=qx.lang.Object.getKeys(this.__tests);
qx.lang.Array.append(qx.dev.Pollution.ignore.window,
testFunctionNames);
qx.lang.Array.append(qx.dev.Pollution.ignore.window,
["jsUnitSetOnLoad",
"newOnLoadEvent",
"jsUnitGetParm",
"setJsUnitTracer",
"JsUnitException",
"parseErrorStack",
"getStackTrace",
"tearDown",
"setUp",
"assertContains",
"assertRoughlyEquals",
"assertHashEquals",
"assertHTMLEquals",
"assertEvaluatesToFalse",
"assertEvaluatesToTrue",
"assertArrayEquals",
"assertObjectEquals",
"assertNotNaN",
"assertNaN",
"assertNotUndefined",
"assertUndefined",
"assertNotNull",
"assertNull",
"assertNotEquals",
"assertEquals",
"assertFalse",
"assertTrue",
"assert",
"_assert",
"_validateArguments",
"nonCommentArg",
"commentArg",
"argumentsIncludeComments",
"error",
"fail",
"_displayStringForValue",
"_trueTypeOf",
"jsUnitFixTop",
"isTestPageLoaded",
"JSUNIT_VERSION",
"standardizeHTML",
"isLoaded",
"getFunctionName",
"warn",
"info",
"inform",
"debug",
"trim",
"push",
"pop",
"isBlank"]);
qx.lang.Array.append(qx.dev.Pollution.ignore.window,
this.__testClassNames.map(function(name){return name.split(".")[0];
}));
qx.lang.Array.append(qx.dev.Pollution.ignore.window,
["exposeTestFunctionNames"]);
var pollution=qx.dev.Pollution.extract("window");
new testrunner.TestCase().assertJsonEquals([],
pollution);
}}});




/* ID: testrunner.MAssert */
qx.Mixin.define("testrunner.MAssert",
{members:{assertJsonEquals:function(){if(arguments.length==3){this.assertEquals(arguments[0],
qx.io.Json.stringify(arguments[1]),
qx.io.Json.stringify(arguments[2]));
}else{this.assertEquals(qx.io.Json.stringify(arguments[0]),
qx.io.Json.stringify(arguments[1]));
}},
assertMatch:function(str,
re,
msg){this.__assert(str.search(re)>=0?true:false,
msg||"",
"The String '"+str+"' does not match the regular expression '"+re.toString()+"'!");
},
assertException:function(callback,
exception,
re,
msg){var exception=exception||Error;
var error;
try{callback();
}catch(e){error=e;
}
if(error==null){this.__assert(false,
msg||"",
"The function did not raise an exception!");
}this.__assert(error instanceof exception,
msg||"",
"The raised exception does not have the expected type!");
if(re){this.assertMatch(error.toString(),
re,
msg);
}},
__assert:function(condition,
comment,
failMsg){if(!condition){throw new testrunner.AssertionError(comment,
failMsg);
}},
assert:function(bool,
msg){this.__assert(bool==true,
msg||"",
"Called assert with 'false'");
},
fail:function(msg){this.__assert(false,
msg||"",
"Called fail().");
},
assertTrue:function(bool,
msg){this.__assert(bool===true,
msg||"",
"Called assertTrue with 'false'");
},
assertFalse:function(bool,
msg){this.__assert(bool===false,
msg||"",
"Called assertFalse with 'true'");
},
assertEquals:function(expected,
found,
msg){this.__assert(expected==found,
msg||"",
"Expected '"+expected+"' but found '"+found+"'!");
},
assertIdentical:function(expected,
found,
msg){this.__assert(expected===found,
msg||"",
"Expected '"+expected+"' (identical) but found '"+found+"'!");
},
assertNotUndefined:function(value,
msg){this.__assert(value!==undefined,
msg||"",
"Expected value not to be undefined but found "+qx.io.Json.stringify(value)+"!");
},
assertUndefined:function(value,
msg){this.__assert(value===undefined,
msg||"",
"Expected value to be undefined but found "+qx.io.Json.stringify(value)+"!");
},
assertNotNull:function(value,
msg){this.__assert(value!==null,
msg||"",
"Expected value not to be null but found "+qx.io.Json.stringify(value)+"!");
},
assertNull:function(value,
msg){this.__assert(value===null,
msg||"",
"Expected value to be null but found "+qx.io.Json.stringify(value)+"!");
},
assertFunction:function(value,
msg){this.__assert(typeof value==="function",
msg||"",
"Expected value to be typeof function but found "+qx.io.Json.stringify(value)+"!");
},
assertString:function(value,
msg){this.__assert(typeof value==="string",
msg||"",
"Expected value to be typeof string but found "+qx.io.Json.stringify(value)+"!");
},
assertNumber:function(value,
msg){this.__assert(typeof value==="number",
msg||"",
"Expected value to be typeof number but found "+qx.io.Json.stringify(value)+"!");
},
assertObject:function(value,
msg){this.__assert(typeof value==="object"&&value!==null,
msg||"",
"Expected value to be typeof object but found "+qx.io.Json.stringify(value)+"!");
},
assertArray:function(value,
msg){this.__assert(value instanceof Array,
msg||"",
"Expected value to be an array but found "+qx.io.Json.stringify(value)+"!");
},
assertMap:function(value,
msg){this.__assert(typeof value==="object"&&!(value instanceof Array)&&!(value instanceof qx.core.Object),
msg||"",
"Expected value to be a map but found "+qx.io.Json.stringify(value)+"!");
},
assertQxObject:function(value,
msg){this.__assert(value instanceof qx.core.Object,
msg||"",
"Expected value to be a qooxdoo object but found "+qx.io.Json.stringify(value)+"!");
},
assertQxWidget:function(value,
msg){this.__assert(value instanceof qx.ui.core.Widget,
msg||"",
"Expected value to be a qooxdoo widget but found "+qx.io.Json.stringify(value)+"!");
},
assertJsonEqualsDebugOn:function(){},
assertMatchDebugOn:function(){},
assertExceptionDebugOn:function(){},
assertDebugOn:function(){},
assertTrueDebugOn:function(){},
assertEqualsDebugOn:function(){},
assertNotUndefinedDebugOn:function(){},
assertUndefinedDebugOn:function(){},
assertNotNullDebugOn:function(){},
assertNullDebugOn:function(){}}});




/* ID: qx.io.Json */
qx.Class.define("qx.io.Json",
{statics:{BEAUTIFYING_INDENT:"  ",
BEAUTIFYING_LINE_END:"\n",
__map:{"function":"__convertFunction",
"boolean":"__convertBoolean",
"number":"__convertNumber",
"string":"__convertString",
"object":"__convertObject",
"undefined":"__convertUndefined"},
__convertFunction:function(incoming){return String(incoming);
},
__convertBoolean:function(incoming){return String(incoming);
},
__convertNumber:function(incoming){return isFinite(incoming)?String(incoming):"null";
},
__convertString:function(incoming){var result;
if(/["\\\x00-\x1f]/.test(incoming)){result=incoming.replace(/([\x00-\x1f\\"])/g,
qx.io.Json.__convertStringHelper);
}else{result=incoming;
}return '"'+result+'"';
},
__convertStringEscape:{'\b':'\\b',
'\t':'\\t',
'\n':'\\n',
'\f':'\\f',
'\r':'\\r',
'"':'\\"',
'\\':'\\\\'},
__convertStringHelper:function(a,
b){var result=qx.io.Json.__convertStringEscape[b];
if(result){return result;
}result=b.charCodeAt();
return '\\u00'+Math.floor(result/16).toString(16)+(result%16).toString(16);
},
__convertArray:function(incoming){var stringBuilder=[],
first=true,
func,
obj;
var beautify=qx.io.Json.__beautify;
stringBuilder.push("[");
if(beautify){qx.io.Json.__indent+=qx.io.Json.BEAUTIFYING_INDENT;
stringBuilder.push(qx.io.Json.__indent);
}
for(var i=0,
l=incoming.length;i<l;i++){obj=incoming[i];
func=this.__map[typeof obj];
if(func){obj=this[func](obj);
if(typeof obj=="string"){if(!first){stringBuilder.push(",");
if(beautify){stringBuilder.push(qx.io.Json.__indent);
}}stringBuilder.push(obj);
first=false;
}}}
if(beautify){qx.io.Json.__indent=qx.io.Json.__indent.substring(0,
qx.io.Json.__indent.length-qx.io.Json.BEAUTIFYING_INDENT.length);
stringBuilder.push(qx.io.Json.__indent);
}stringBuilder.push("]");
return stringBuilder.join("");
},
__convertDate:function(incoming){var dateParams=incoming.getUTCFullYear()+","+incoming.getUTCMonth()+","+incoming.getUTCDate()+","+incoming.getUTCHours()+","+incoming.getUTCMinutes()+","+incoming.getUTCSeconds()+","+incoming.getUTCMilliseconds();
return "new Date(Date.UTC("+dateParams+"))";
},
__convertMap:function(incoming){var stringBuilder=[],
first=true,
func,
obj;
var beautify=qx.io.Json.__beautify;
stringBuilder.push("{");
if(beautify){qx.io.Json.__indent+=qx.io.Json.BEAUTIFYING_INDENT;
stringBuilder.push(qx.io.Json.__indent);
}
for(var key in incoming){obj=incoming[key];
func=this.__map[typeof obj];
if(func){obj=this[func](obj);
if(typeof obj=="string"){if(!first){stringBuilder.push(",");
if(beautify){stringBuilder.push(qx.io.Json.__indent);
}}stringBuilder.push(this.__convertString(key),
":",
obj);
first=false;
}}}
if(beautify){qx.io.Json.__indent=qx.io.Json.__indent.substring(0,
qx.io.Json.__indent.length-qx.io.Json.BEAUTIFYING_INDENT.length);
stringBuilder.push(qx.io.Json.__indent);
}stringBuilder.push("}");
return stringBuilder.join("");
},
__convertObject:function(incoming){if(incoming){var constructorName=incoming.constructor.name;
if(incoming instanceof Array||constructorName=="Array"){return this.__convertArray(incoming);
}else if(incoming instanceof Date||constructorName=="Date"){return this.__convertDate(incoming);
}else if(incoming instanceof Object||constructorName=="Object"){return this.__convertMap(incoming);
}return "";
}return "null";
},
__convertUndefined:function(incoming){if(qx.core.Setting.get("qx.jsonEncodeUndefined")){return "null";
}},
stringify:function(obj,
beautify){this.__beautify=beautify;
this.__indent=this.BEAUTIFYING_LINE_END;
var result=this[this.__map[typeof obj]](obj);
if(typeof result!="string"){result=null;
}if(qx.core.Setting.get("qx.jsonDebugging")){qx.log.Logger.getClassLogger(qx.io.Json).debug("JSON request: "+result);
}return result;
},
parse:function(text){if(!(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(text.replace(/"(\\.|[^"\\])*"/g,
"")))){throw new Error("Could not parse JSON string!");
}
try{return eval("("+text+")");
}catch(ex){throw new Error("Could not evaluate JSON string: "+ex.message);
}},
parseQx:function(text){if(qx.core.Setting.get("qx.jsonDebugging")){qx.log.Logger.getClassLogger(qx.io.Json).debug("JSON response: "+text);
}var obj=(text&&text.length>0)?eval('('+text+')'):null;
return obj;
}},
settings:{"qx.jsonEncodeUndefined":true,
"qx.jsonDebugging":false}});




/* ID: testrunner.AssertionError */
qx.Class.define("testrunner.AssertionError",
{extend:Error,
construct:function(comment,
failMessage){Error.call(this,
failMessage);
this.setComment(comment||"");
this.setMessage(failMessage||"");
this._trace=qx.dev.StackTrace.getStackTrace();
},
properties:{comment:{check:"String",
init:""},
message:{check:"String",
init:""}},
members:{toString:function(){return this.getComment()+": "+this.getMessage();
},
getStackTrace:function(){return this._trace;
}}});




/* ID: testrunner.TestCase */
qx.Class.define("testrunner.TestCase",
{extend:qx.core.Object,
include:testrunner.MAssert});




/* ID: testrunner.TestFunction */
qx.Class.define("testrunner.TestFunction",
{extend:qx.core.Object,
construct:function(clazz,
methodName,
testFunction){if(testFunction){this.setTestFunction(testFunction);
}else{this.setTestFunction(function(){var cls=new clazz;
if(typeof (cls.setUp)=="function"){cls.setUp();
}cls[methodName]();
if(typeof (cls.tearDown)=="function"){cls.tearDown();
}});
}
if(clazz){this.setClassName(clazz.classname);
}this.setName(methodName);
},
properties:{testFunction:{check:"Function"},
name:{check:"String"},
className:{check:"String",
init:""}},
members:{run:function(testResult){testResult.run(this,
this.getTestFunction());
},
getFullName:function(){return [this.getClassName(),
this.getName()].join(":");
}}});




/* ID: testrunner.TestClass */
qx.Class.define("testrunner.TestClass",
{extend:testrunner.TestSuite,
construct:function(clazz){arguments.callee.base.call(this);
if(!clazz){this.addFail("exsitsCheck"+this.__testClassNames.length,
"Unkown test class!");
return;
}
if(!qx.Class.isSubClassOf(clazz,
testrunner.TestCase)){this.addFail("Sub class check.",
"The test class '"+clazz.classname+"'is not a sub class of 'testrunner.TestCase'");
return;
}var proto=clazz.prototype;
var classname=clazz.classname;
for(var test in proto){if(proto.hasOwnProperty(test)){if(typeof (proto[test])=="function"&&test.indexOf("test")==0){this.addTestMethod(clazz,
test);
}}}this.setName(clazz.classname);
},
properties:{name:{check:"String"}}});




/* ID: qx.dev.Pollution */
qx.Class.define("qx.dev.Pollution",
{statics:{names:{"window":window,
"document":document,
"body":document.body},
ignore:{"window":["qx",
"java",
"sun",
"Packages",
"__firebug__",
"Components",
"controllers",
"sessionStorage",
"globalStorage",
"console",
"event",
"offscreenBuffering",
"clipboardData",
"clientInformation",
"Option",
"Image",
"external",
"screenTop",
"screenLeft",
"length",
"window",
"document",
"location",
"navigator",
"netscape",
"parent",
"frames",
"top",
"scrollbars",
"name",
"scrollX",
"scrollY",
"self",
"screen",
"history",
"content",
"menubar",
"toolbar",
"locationbar",
"personalbar",
"statusbar",
"directories",
"closed",
"crypto",
"pkcs11",
"opener",
"status",
"defaultStatus",
"innerWidth",
"innerHeight",
"outerWidth",
"outerHeight",
"screenX",
"screenY",
"pageXOffset",
"pageYOffset",
"scrollMaxX",
"scrollMaxY",
"fullScreen",
"frameElement",
"XMLHttpRequest"],
"document":["domConfig",
"location",
"compatMode",
"implementation",
"defaultView",
"title",
"body",
"styleSheets",
"documentElement",
"nodeName",
"nodeType",
"firstChild",
"lastChild",
"doctype",
"images",
"applets",
"links",
"forms",
"anchors",
"cookie",
"embeds",
"plugins",
"designMode",
"childNodes"],
"body":["textContent",
"innerHTML",
"outerHTML",
"innerText",
"outerText",
"scopeName",
"parentElement",
"tagName",
"filters",
"contentEditable",
"document",
"currentStyle",
"isMultiLine",
"clientHeight",
"clientWidth",
"lastChild",
"firstChild",
"offsetTop",
"offsetLeft",
"offsetWidth",
"offsetHeight",
"tabIndex",
"className",
"attributes",
"previousSibling",
"nextSibling",
"ownerDocument",
"localName",
"childNodes",
"parentNode",
"nodeType",
"nodeName",
"style",
"scrollTop",
"scrollLeft",
"scrollWidth",
"scrollHeight"]},
getInfo:function(objectName){var msg=qx.dev.Pollution.getTextList(objectName||"window");
if(msg){return "Global namespace is polluted by the following unknown objects:\n\n"+msg;
}else{return "Global namespace is not polluted by any unknown objects.";
}},
extract:function(objectName){var ext=[];
var ign=qx.dev.Pollution.ignore[objectName];
if(qx.core.Variant.isSet("qx.client",
"mshtml")){if(objectName=="window"){ign=ign.slice();
for(var frameIndex=0;frameIndex<window.length;frameIndex++){ign.push(""+frameIndex);
}}}var obj=qx.dev.Pollution.names[objectName];
for(var key in obj){try{if(qx.core.Variant.isSet("qx.client",
"mshtml|opera")){if((clientInfos.getMajor()>=7)&&(objectName=="window")&&(key=="external")){continue;
}}if(typeof obj[key]=="undefined"||obj[key]===null){continue;
}if(typeof obj[key]=="function"&&obj[key].toString().indexOf("[native code]")!=-1){continue;
}if(typeof obj[key].constructor=="function"){if((obj[key].constructor.toString().indexOf("[native code]")!=-1)||(obj[key].constructor.toString().indexOf("[function]")!=-1)){continue;
}}if(qx.lang.Array.contains(ign,
key)){continue;
}}catch(ex){continue;
}ext.push({"key":key,
"value":obj[key]});
}return ext;
},
getHtmlTable:function(objectName){var all=[];
var rowStart="<tr style='vertical-align:top'><td>";
var cellSplit="</td><td>";
var rowEnd="</td></tr>";
all.push("<table>");
var ext=this.extract(objectName);
for(var i=0;i<ext.length;i++){all.push(rowStart+ext[i].key+cellSplit+ext[i].value+rowEnd);
}all.push("</table>");
return all.join("");
},
getTextList:function(objectName){var all=[];
var cellSplit=": ";
var rowEnd="\n";
var ext=this.extract(objectName);
for(var i=0;i<ext.length;i++){all.push(ext[i].key+cellSplit+ext[i].value+rowEnd);
}return all.join("");
}}});




/* ID: testrunner.TestResult */
qx.Class.define("testrunner.TestResult",
{extend:qx.core.Target,
events:{startTest:"qx.event.type.DataEvent",
endTest:"qx.event.type.DataEvent",
error:"qx.event.type.DataEvent",
failure:"qx.event.type.DataEvent"},
statics:{run:function(testResult,
test,
testFunction){testResult.run(test,
testFunction);
}},
members:{run:function(test,
testFunction){this.createDispatchDataEvent("startTest",
test);
try{testFunction();
}catch(e){var error=true;
if(e.classname=="testrunner.AssertionError"){this.__createError("failure",
e,
test);
}else{this.__createError("error",
e,
test);
}}
if(!error){this.createDispatchDataEvent("endTest",
test);
}},
__createError:function(eventName,
exception,
test){var error={exception:exception,
test:test};
this.createDispatchDataEvent(eventName,
error);
this.createDispatchDataEvent("endTest",
test);
}}});




/* ID: testrunner.JsUnitTestResult */
qx.Class.define("testrunner.JsUnitTestResult",
{extend:testrunner.TestResult,
construct:function(){arguments.callee.base.call(this);
this._testFunctionNames=[];
},
members:{run:function(test,
testFunction){var testFunctionName="$test_"+test.getFullName().replace(/\W/g,
"_");
this._testFunctionNames.push(testFunctionName);
window[testFunctionName]=testFunction;
},
exportToJsUnit:function(){var self=this;
window.exposeTestFunctionNames=function(){return self._testFunctionNames;
};
window.isTestPageLoaded=true;
}}});




/* ID: qx.locale.Locale */
qx.Class.define("qx.locale.Locale",
{statics:{define:function(name,
config){qx.locale.Manager.getInstance().addTranslationFromClass(name,
config);
}}});




/* ID: qx.locale.Manager */
qx.Class.define("qx.locale.Manager",
{type:"singleton",
extend:qx.util.manager.Value,
construct:function(){arguments.callee.base.call(this);
this._translationCatalog={};
this.setLocale(qx.core.Client.getInstance().getLocale()||this._defaultLocale);
},
statics:{tr:function(messageId,
varargs){var args=qx.lang.Array.fromArguments(arguments);
args.splice(0,
1);
return new qx.locale.LocalizedString(messageId,
args);
},
trn:function(singularMessageId,
pluralMessageId,
count,
varargs){var args=qx.lang.Array.fromArguments(arguments);
args.splice(0,
3);
if(count>1){return new qx.locale.LocalizedString(pluralMessageId,
args);
}else{return new qx.locale.LocalizedString(singularMessageId,
args);
}},
trc:function(hint,
messageId,
varargs){var args=qx.lang.Array.fromArguments(arguments);
args.splice(0,
2);
return new qx.locale.LocalizedString(messageId,
args);
},
marktr:function(messageId){return messageId;
}},
properties:{locale:{check:"String",
nullable:true,
apply:"_applyLocale",
event:"changeLocale"}},
members:{_defaultLocale:"C",
getLanguage:function(){return this._language;
},
getTerritory:function(){return this.getLocale().split("_")[1]||"";
},
getAvailableLocales:function(){var locales=[];
for(var locale in this._translationCatalog){if(locale!=this._defaultLocale){locales.push(locale);
}}return locales;
},
_extractLanguage:function(locale){var language;
var pos=locale.indexOf("_");
if(pos==-1){language=locale;
}else{language=locale.substring(0,
pos);
}return language;
},
_applyLocale:function(value,
old){this._locale=value;
var pos=value.indexOf("_");
this._language=this._extractLanguage(value);
this._updateObjects();
},
addTranslation:function(languageCode,
translationMap){if(this._translationCatalog[languageCode]){for(var key in translationMap){this._translationCatalog[languageCode][key]=translationMap[key];
}}else{this._translationCatalog[languageCode]=translationMap;
}},
addTranslationFromClass:function(classname,
translationMap){this.addTranslation(classname.substring(classname.lastIndexOf(".")+1),
translationMap);
},
translate:function(messageId,
args,
locale){var txt;
if(locale){var language=this._extractLanguage(locale);
}else{locale=this._locale;
language=this._language;
}
if(!txt&&this._translationCatalog[locale]){txt=this._translationCatalog[locale][messageId];
}
if(!txt&&this._translationCatalog[language]){txt=this._translationCatalog[language][messageId];
}
if(!txt&&this._translationCatalog[this._defaultLocale]){txt=this._translationCatalog[this._defaultLocale][messageId];
}
if(!txt){txt=messageId;
}
if(args.length>0){txt=qx.lang.String.format(txt,
args);
}return txt;
},
isDynamic:function(text){return text instanceof qx.locale.LocalizedString;
},
resolveDynamic:function(text){return text.toString();
}},
destruct:function(){this._disposeFields("_translationCatalog");
}});




/* ID: qx.locale.LocalizedString */
qx.Class.define("qx.locale.LocalizedString",
{extend:qx.core.Object,
construct:function(messageId,
args,
locale){arguments.callee.base.call(this);
this.setId(messageId);
this._locale=locale;
var storedArguments=[];
for(var i=0;i<args.length;i++){var arg=args[i];
if(arg instanceof qx.locale.LocalizedString){storedArguments.push(arg);
}else{storedArguments.push(arg+"");
}}this.setArgs(storedArguments);
},
properties:{id:{check:"String",
nullable:true},
args:{nullable:true,
dispose:true}},
members:{_autoDispose:false,
toString:function(){return qx.locale.Manager.getInstance().translate(this.getId(),
this.getArgs(),
this._locale);
}}});




/* ID: qx.locale.data.C */
qx.locale.Locale.define("qx.locale.data.C",
{cldr_alternateQuotationEnd:"”",
cldr_alternateQuotationStart:"“",
cldr_am:"am",
cldr_date_format_full:"EEEE, MMMM d, yyyy",
cldr_date_format_long:"MMMM d, yyyy",
cldr_date_format_medium:"MMM d, yyyy",
cldr_date_format_short:"M/d/yy",
cldr_date_time_format_HHmm:"HH:mm",
cldr_date_time_format_HHmmss:"HH:mm:ss",
cldr_date_time_format_MMMMd:"MMMM d",
cldr_date_time_format_Md:"M/d",
cldr_date_time_format_mmss:"mm:ss",
cldr_date_time_format_yyMM:"MM/yy",
cldr_date_time_format_yyQQQQ:"QQQQ yy",
cldr_date_time_format_yyyyMMM:"MMM yyyy",
cldr_day_abbreviated_fri:"Fri",
cldr_day_abbreviated_mon:"Mon",
cldr_day_abbreviated_sat:"Sat",
cldr_day_abbreviated_sun:"Sun",
cldr_day_abbreviated_thu:"Thu",
cldr_day_abbreviated_tue:"Tue",
cldr_day_abbreviated_wed:"Wed",
cldr_day_narrow_fri:"F",
cldr_day_narrow_mon:"M",
cldr_day_narrow_sat:"S",
cldr_day_narrow_sun:"S",
cldr_day_narrow_thu:"T",
cldr_day_narrow_tue:"T",
cldr_day_narrow_wed:"W",
cldr_day_wide_fri:"Friday",
cldr_day_wide_mon:"Monday",
cldr_day_wide_sat:"Saturday",
cldr_day_wide_sun:"Sunday",
cldr_day_wide_thu:"Thursday",
cldr_day_wide_tue:"Tuesday",
cldr_day_wide_wed:"Wednesday",
cldr_month_abbreviated_1:"Jan",
cldr_month_abbreviated_10:"Oct",
cldr_month_abbreviated_11:"Nov",
cldr_month_abbreviated_12:"Dec",
cldr_month_abbreviated_2:"Feb",
cldr_month_abbreviated_3:"Mar",
cldr_month_abbreviated_4:"Apr",
cldr_month_abbreviated_5:"May",
cldr_month_abbreviated_6:"Jun",
cldr_month_abbreviated_7:"Jul",
cldr_month_abbreviated_8:"Aug",
cldr_month_abbreviated_9:"Sep",
cldr_month_narrow_1:"J",
cldr_month_narrow_10:"O",
cldr_month_narrow_11:"N",
cldr_month_narrow_12:"D",
cldr_month_narrow_2:"F",
cldr_month_narrow_3:"M",
cldr_month_narrow_4:"A",
cldr_month_narrow_5:"M",
cldr_month_narrow_6:"J",
cldr_month_narrow_7:"J",
cldr_month_narrow_8:"A",
cldr_month_narrow_9:"S",
cldr_month_wide_1:"January",
cldr_month_wide_10:"October",
cldr_month_wide_11:"November",
cldr_month_wide_12:"December",
cldr_month_wide_2:"February",
cldr_month_wide_3:"March",
cldr_month_wide_4:"April",
cldr_month_wide_5:"May",
cldr_month_wide_6:"June",
cldr_month_wide_7:"July",
cldr_month_wide_8:"August",
cldr_month_wide_9:"September",
cldr_number_decimal_separator:".",
cldr_number_group_separator:",",
cldr_pm:"pm",
cldr_quotationEnd:"’",
cldr_quotationStart:"‘",
cldr_time_format_full:"h:mm:ss a v",
cldr_time_format_long:"h:mm:ss a z",
cldr_time_format_medium:"h:mm:ss a",
cldr_time_format_short:"h:mm a"});




/* ID: qx.locale.data.de */
qx.locale.Locale.define("qx.locale.data.de",
{cldr_alternateQuotationEnd:"“",
cldr_alternateQuotationStart:"„",
cldr_am:"vorm.",
cldr_date_format_full:"EEEE, d. MMMM yyyy",
cldr_date_format_long:"d. MMMM yyyy",
cldr_date_format_medium:"dd.MM.yyyy",
cldr_date_format_short:"dd.MM.yy",
cldr_date_time_format_HHmm:"HH:mm",
cldr_date_time_format_HHmmss:"HH:mm:ss",
cldr_date_time_format_MMMMd:"d. MMMM",
cldr_date_time_format_MMdd:"dd.MM",
cldr_date_time_format_hhmm:"hh:mm a",
cldr_date_time_format_hhmmss:"hh:mm:ss a",
cldr_date_time_format_yyMM:"MM.yy",
cldr_date_time_format_yyQQQQ:"QQQQ yy",
cldr_date_time_format_yyyyMMMM:"MMMM yyyy",
cldr_day_abbreviated_fri:"Fr",
cldr_day_abbreviated_mon:"Mo",
cldr_day_abbreviated_sat:"Sa",
cldr_day_abbreviated_sun:"So",
cldr_day_abbreviated_thu:"Do",
cldr_day_abbreviated_tue:"Di",
cldr_day_abbreviated_wed:"Mi",
cldr_day_narrow_fri:"F",
cldr_day_narrow_mon:"M",
cldr_day_narrow_sat:"S",
cldr_day_narrow_sun:"S",
cldr_day_narrow_thu:"D",
cldr_day_narrow_tue:"D",
cldr_day_narrow_wed:"M",
cldr_day_wide_fri:"Freitag",
cldr_day_wide_mon:"Montag",
cldr_day_wide_sat:"Samstag",
cldr_day_wide_sun:"Sonntag",
cldr_day_wide_thu:"Donnerstag",
cldr_day_wide_tue:"Dienstag",
cldr_day_wide_wed:"Mittwoch",
cldr_month_abbreviated_1:"Jan",
cldr_month_abbreviated_10:"Okt",
cldr_month_abbreviated_11:"Nov",
cldr_month_abbreviated_12:"Dez",
cldr_month_abbreviated_2:"Feb",
cldr_month_abbreviated_3:"Mrz",
cldr_month_abbreviated_4:"Apr",
cldr_month_abbreviated_5:"Mai",
cldr_month_abbreviated_6:"Jun",
cldr_month_abbreviated_7:"Jul",
cldr_month_abbreviated_8:"Aug",
cldr_month_abbreviated_9:"Sep",
cldr_month_narrow_1:"J",
cldr_month_narrow_10:"O",
cldr_month_narrow_11:"N",
cldr_month_narrow_12:"D",
cldr_month_narrow_2:"F",
cldr_month_narrow_3:"M",
cldr_month_narrow_4:"A",
cldr_month_narrow_5:"M",
cldr_month_narrow_6:"J",
cldr_month_narrow_7:"J",
cldr_month_narrow_8:"A",
cldr_month_narrow_9:"S",
cldr_month_wide_1:"Januar",
cldr_month_wide_10:"Oktober",
cldr_month_wide_11:"November",
cldr_month_wide_12:"Dezember",
cldr_month_wide_2:"Februar",
cldr_month_wide_3:"März",
cldr_month_wide_4:"April",
cldr_month_wide_5:"Mai",
cldr_month_wide_6:"Juni",
cldr_month_wide_7:"Juli",
cldr_month_wide_8:"August",
cldr_month_wide_9:"September",
cldr_number_decimal_separator:",",
cldr_number_group_separator:".",
cldr_number_percent_format:"#,##0 %",
cldr_pm:"nachm.",
cldr_quotationEnd:"‘",
cldr_quotationStart:"‚",
cldr_time_format_full:"H:mm' Uhr 'z"});




/* ID: qx.locale.data.de_DE */
qx.locale.Locale.define("qx.locale.data.de_DE",
{});




/* ID: qx.locale.data.fr */
qx.locale.Locale.define("qx.locale.data.fr",
{cldr_alternateQuotationEnd:"”",
cldr_alternateQuotationStart:"“",
cldr_date_format_full:"EEEE d MMMM yyyy",
cldr_date_format_long:"d MMMM yyyy",
cldr_date_format_medium:"d MMM yy",
cldr_date_format_short:"dd/MM/yy",
cldr_date_time_format_HHmm:"HH:mm",
cldr_date_time_format_HHmmss:"HH:mm:ss",
cldr_date_time_format_MMMMd:"d MMMM",
cldr_date_time_format_MMdd:"dd/MM",
cldr_date_time_format_hhmm:"hh:mm a",
cldr_date_time_format_hhmmss:"hh:mm:ss a",
cldr_date_time_format_yyMM:"MM/yy",
cldr_date_time_format_yyQQQQ:"QQQQ yy",
cldr_date_time_format_yyyyMMMM:"MMMM yyyy",
cldr_day_abbreviated_fri:"ven.",
cldr_day_abbreviated_mon:"lun.",
cldr_day_abbreviated_sat:"sam.",
cldr_day_abbreviated_sun:"dim.",
cldr_day_abbreviated_thu:"jeu.",
cldr_day_abbreviated_tue:"mar.",
cldr_day_abbreviated_wed:"mer.",
cldr_day_narrow_fri:"V",
cldr_day_narrow_mon:"L",
cldr_day_narrow_sat:"S",
cldr_day_narrow_sun:"D",
cldr_day_narrow_thu:"J",
cldr_day_narrow_tue:"M",
cldr_day_narrow_wed:"M",
cldr_day_wide_fri:"vendredi",
cldr_day_wide_mon:"lundi",
cldr_day_wide_sat:"samedi",
cldr_day_wide_sun:"dimanche",
cldr_day_wide_thu:"jeudi",
cldr_day_wide_tue:"mardi",
cldr_day_wide_wed:"mercredi",
cldr_month_abbreviated_1:"janv.",
cldr_month_abbreviated_10:"oct.",
cldr_month_abbreviated_11:"nov.",
cldr_month_abbreviated_12:"déc.",
cldr_month_abbreviated_2:"févr.",
cldr_month_abbreviated_3:"mars",
cldr_month_abbreviated_4:"avr.",
cldr_month_abbreviated_5:"mai",
cldr_month_abbreviated_6:"juin",
cldr_month_abbreviated_7:"juil.",
cldr_month_abbreviated_8:"août",
cldr_month_abbreviated_9:"sept.",
cldr_month_narrow_1:"J",
cldr_month_narrow_10:"O",
cldr_month_narrow_11:"N",
cldr_month_narrow_12:"D",
cldr_month_narrow_2:"F",
cldr_month_narrow_3:"M",
cldr_month_narrow_4:"A",
cldr_month_narrow_5:"M",
cldr_month_narrow_6:"J",
cldr_month_narrow_7:"J",
cldr_month_narrow_8:"A",
cldr_month_narrow_9:"S",
cldr_month_wide_1:"janvier",
cldr_month_wide_10:"octobre",
cldr_month_wide_11:"novembre",
cldr_month_wide_12:"décembre",
cldr_month_wide_2:"février",
cldr_month_wide_3:"mars",
cldr_month_wide_4:"avril",
cldr_month_wide_5:"mai",
cldr_month_wide_6:"juin",
cldr_month_wide_7:"juillet",
cldr_month_wide_8:"août",
cldr_month_wide_9:"septembre",
cldr_number_decimal_separator:",",
cldr_number_group_separator:" ",
cldr_number_percent_format:"#,##0 %",
cldr_quotationEnd:"»",
cldr_quotationStart:"«",
cldr_time_format_full:"HH' h 'mm z"});




/* ID: qx.locale.data.fr_FR */
qx.locale.Locale.define("qx.locale.data.fr_FR",
{});




/* ID: qx.locale.translation.C */
qx.locale.Locale.define("qx.locale.translation.C",
{});




/* ID: qx.locale.translation.de */
qx.locale.Locale.define("qx.locale.translation.de",
{"key_short_Meta":"Meta",
"key_short_Scroll":"Rollen",
"key_full_NumLock":"NumLock",
"key_full_Left":"Pfeil links",
"Choose a date":"Datum auswählen",
"key_short_Control":"Strg",
"key_short_Home":"Pos1",
"Hex":"Hex",
"key_short_Space":"Leer",
"key_full_PageUp":"Bild hoch",
"key_short_Shift":"Umschalt",
"key_full_Control":"Steuerung",
"RGB":"RGB",
"key_short_Up":"Hoch",
"Details":"Details",
"Last year":"Vorheriges Jahr",
"key_full_Insert":"Einfügen",
"key_short_Apps":"Kontext",
"Open ColorSelector":"Öffne Farbauswahl",
"key_short_Backspace":"Rück",
"key_short_Alt":"Alt",
"key_full_Shift":"Umschalttaste",
"Description":"Beschreibung",
"key_full_Space":"Leertaste",
"key_short_PageDown":"Bild runter",
"Presets":"Voreinstellungen",
"key_full_Up":"Pfeil hoch",
"key_short_CapsLock":"Feststell",
"key_full_Backspace":"Rücktaste",
"key_full_Tab":"Tabulator",
"key_full_End":"Ende",
"key_short_Escape":"Esc",
"key_short_Tab":"Tab",
"key_full_Apps":"Kontextmenü",
"key_full_Delete":"Entfernen",
"Case sensitive":"Groß-/Kleinschreibung",
"HSB":"HSB",
"Search":"Suchen",
"key_short_PageUp":"Bild hoch",
"Next month":"Nächster Monat",
"key_short_Win":"Win",
"key_full_Enter":"Enter",
"key_full_Alt":"Alt",
"key_short_Pause":"Pause",
"key_short_Down":"Runter",
"key_full_Win":"Windowstaste",
"key_short_Right":"Rechts ",
"key_short_NumLock":"Num",
"key_full_Escape":"Escape",
"Automatic":"Automatisch",
"ID":"ID",
"key_short_Enter":"Enter",
"Last month":"Vorheriger Monat",
"key_full_Right":"Pfeil rechts",
"OK":"OK",
"key_full_PageDown":"Bild runter ",
"key_full_Pause":"Pause",
"key_full_CapsLock":"Feststelltaste",
"Color Selector":"Farbauswahl",
"Search next occurrence":"Weiter suchen",
"Preview (Old/New)":"Vorschau (alt/neu)",
"key_short_Left":"Links",
"Search items in list":"Liste durchsuchen",
"key_short_End":"Ende",
"key_full_Meta":"Meta",
"key_full_Home":"Position 1",
"Cancel":"Abbruch",
"key_full_Scroll":"Rollen",
"Next year":"Nächstes Jahr",
"key_short_Delete":"Entf",
"key_short_Insert":"Einfg",
"key_full_Down":"Pfeil runter"});




/* ID: qx.locale.translation.de_DE */
qx.locale.Locale.define("qx.locale.translation.de_DE",
{});




/* ID: qx.locale.translation.fr */
qx.locale.Locale.define("qx.locale.translation.fr",
{"Open ColorSelector":"Ouvrir le sélecteur de couleurs",
"Search":"Chercher",
"Presets":"Pré-réglages",
"OK":"OK",
"HSB":"TSL",
"Preview (Old/New)":"Aperçu (Nouveau/Ancien)",
"Color Selector":"Sélecteur de couleur",
"Choose a date":"Choisissez une date",
"Hex":"HEX",
"RGB":"RVB",
"Next month":"Mois suivant",
"Details":"Détails",
"Cancel":"Annuller",
"Last month":"Mois précédant",
"Last year":"Année précédente",
"Next year":"Année suivante",
"Automatic":"Automatique"});




/* ID: qx.locale.translation.fr_FR */
qx.locale.Locale.define("qx.locale.translation.fr_FR",
{});




/* ID: testrunner.translation.C */
qx.locale.Locale.define("testrunner.translation.C",
{});




/* ID: testrunner.translation.de */
qx.locale.Locale.define("testrunner.translation.de",
{});




/* ID: testrunner.translation.de_DE */
qx.locale.Locale.define("testrunner.translation.de_DE",
{});




/* ID: testrunner.translation.fr */
qx.locale.Locale.define("testrunner.translation.fr",
{});




/* ID: testrunner.translation.fr_FR */
qx.locale.Locale.define("testrunner.translation.fr_FR",
{});




/* ID: testrunner.test.Lang */
qx.Class.define("testrunner.test.Lang",
{extend:testrunner.TestCase,
members:{testString:function(){this.assertNotUndefined(qx.lang.String);
},
testFormat:function(){this.assertNotUndefined(qx.lang.String.format);
var Str=qx.lang.String;
this.assertEquals("1-2",
Str.format("%1-%2",
[1,
2]));
this.assertEquals("2-1",
Str.format("%2-%1",
[1,
2]));
this.assertEquals("1-2",
Str.format("%1-%2",
["1",
"2"]));
this.assertEquals("2-1",
Str.format("%2-%1",
["1",
"2"]));
},
testPad:function(){this.assertNotUndefined(qx.lang.String.pad);
var Str=qx.lang.String;
this.assertEquals("------",
Str.pad("",
6,
'-'));
this.assertEquals("---123",
Str.pad("123",
6,
'-'));
this.assertEquals("----123",
Str.pad("123",
7,
'-'));
this.assertEquals("    123",
Str.pad("123",
7,
' '));
this.assertEquals("0000123",
Str.pad("123",
7));
this.assertEquals("123",
Str.pad("123",
2,
'-'));
this.assertEquals("123",
Str.pad("123",
3,
'-'));
},
testAddRemovelistItem:function(){this.assertNotUndefined(qx.lang.String.pad);
var Str=qx.lang.String;
this.assertEquals("a",
Str.addListItem("a",
"a",
", "));
this.assertEquals("a",
Str.addListItem("",
"a",
", "));
this.assertEquals("a, b",
Str.addListItem("a",
"b",
", "));
this.assertEquals("a, b",
Str.addListItem("a, b",
"b",
", "));
this.assertEquals("a,b",
Str.addListItem("a",
"b"));
this.assertEquals("a,b",
Str.addListItem("a,b",
"b"));
this.assertEquals("a,b",
Str.removeListItem("a,b,c",
"c"));
this.assertEquals("a,b",
Str.removeListItem("a,c,b",
"c"));
this.assertEquals("a,b",
Str.removeListItem("c,a,b",
"c"));
this.assertEquals("a, b",
Str.removeListItem("a, b, c",
"c",
", "));
this.assertEquals("a, b",
Str.removeListItem("a, c, b",
"c",
", "));
this.assertEquals("a, b",
Str.removeListItem("c, a, b",
"c",
", "));
this.assertEquals("a, b",
Str.removeListItem("a, b",
"c",
", "));
this.assertEquals("",
Str.removeListItem("",
"c"));
},
testAppend:function(){this.assertNotUndefined(qx.lang.Array.append);
var a=[1,
2,
3];
qx.lang.Array.append(a,
[4,
5,
6]);
this.assertJsonEquals(a,
[1,
2,
3,
4,
5,
6]);
var error=false;
try{qx.lang.Array.append(a,
1);
}catch(ex){error=true;
}this.assert(error);
},
testObject:function(){this.assertNotUndefined(qx.lang.Object);
},
testInvert:function(){this.assertNotUndefined(qx.lang.Object.invert);
var Obj=qx.lang.Object;
this.assertJsonEquals({a:"1",
"2":"b"},
Obj.invert({1:"a",
b:2}));
},
testEscape:function(){this.assertEquals("\n",
qx.html.String.escape("\n"));
this.assertEquals("Hello",
qx.html.String.escape("Hello"));
this.assertEquals("juhu &lt;&gt;",
qx.html.String.escape("juhu <>"));
this.assertEquals("&lt;div id='1'&gt;&amp;nbsp; &euro;&lt;/div&gt;",
qx.html.String.escape("<div id='1'>&nbsp; €</div>"));
this.assertEquals("&lt;div id='1'&gt;<br> &nbsp;&amp;nbsp; &euro;&lt;/div&gt;",
qx.html.String.fromText("<div id='1'>\n  &nbsp; €</div>"));
this.assertEquals("<div id='1'>\n \u00A0&nbsp; €</div>",
qx.html.String.toText("&lt;div id='1'&gt;<br> &nbsp;&amp;nbsp;  \n   &euro;&lt;/div&gt;"));
this.assertEquals("\n",
qx.html.String.unescape("\n"));
this.assertEquals("Hello",
qx.html.String.unescape("Hello"));
this.assertEquals("juhu <>",
qx.html.String.unescape("juhu &lt;&gt;"));
this.assertEquals("<div id='1'>&nbsp; €</div>",
qx.html.String.unescape("&lt;div id='1'&gt;&amp;nbsp; &euro;&lt;/div&gt;"));
this.assertEquals(">&zzzz;x",
qx.html.String.unescape("&gt;&zzzz;x"));
this.assertEquals("€",
qx.html.String.unescape("&#x20AC;"));
this.assertEquals("€",
qx.html.String.unescape("&#X20AC;"));
this.assertEquals("\n",
qx.xml.String.escape("\n"));
this.assertEquals("Hello",
qx.xml.String.escape("Hello"));
this.assertEquals("juhu &lt;&gt;",
qx.xml.String.escape("juhu <>"));
this.assertEquals("&lt;div id=&apos;1&apos;&gt;&amp;nbsp; &#8364;&lt;/div&gt;",
qx.xml.String.escape("<div id='1'>&nbsp; €</div>"));
this.assertEquals("&quot;bread&quot; &amp; &quot;butter&quot;",
qx.xml.String.escape('"bread" & "butter"'));
this.assertEquals("\n",
qx.xml.String.unescape("\n"));
this.assertEquals("Hello",
qx.xml.String.unescape("Hello"));
this.assertEquals("juhu <>",
qx.xml.String.unescape("juhu &lt;&gt;"));
this.assertEquals("<div id='1'>&nbsp; €</div>",
qx.xml.String.unescape("&lt;div id=&apos;1&apos;&gt;&amp;nbsp; &#8364;&lt;/div&gt;"));
this.assertEquals('"bread" & "butter"',
qx.xml.String.unescape("&quot;bread&quot; &amp; &quot;butter&quot;"));
},
testFunctionWrap:function(){var context=null;
var result=0;
var add=function(a,
b){context=this;
return a+b;
};
context=null;
result=add(1,
2);
this.assertEquals(context,
window);
this.assertEquals(3,
result);
context=null;
var boundAdd=qx.lang.Function.bind(add,
this);
result=boundAdd(1,
3);
this.assertEquals(context,
this);
this.assertEquals(4,
result);
context=null;
var addOne=qx.lang.Function.bind(add,
this,
1);
result=addOne(4);
this.assertEquals(context,
this);
this.assertEquals(5,
result);
}}});




/* ID: qx.xml.String */
qx.Class.define("qx.xml.String",
{statics:{escape:function(str){return qx.dom.String.escapeEntities(str,
qx.xml.Entity.FROM_CHARCODE);
},
unescape:function(str){return qx.dom.String.unescapeEntities(str,
qx.xml.Entity.TO_CHARCODE);
}}});




/* ID: qx.xml.Entity */
qx.Class.define("qx.xml.Entity",
{statics:{TO_CHARCODE:{"quot":34,
"amp":38,
"lt":60,
"gt":62,
"apos":39},
FROM_CHARCODE:{34:"quot",
38:"amp",
60:"lt",
62:"gt",
39:"apos"}}});




/* ID: testrunner.test.Io */
qx.Class.define("testrunner.test.Io",
{extend:testrunner.TestCase,
members:{testIO:function(){this.assertNotUndefined(qx.io);
},
testJson:function(){this.assertEquals('{"test":123}',
qx.io.Json.stringify({test:123},
false));
}}});




/* ID: testrunner.test.EditDistance */
qx.Class.define("testrunner.test.EditDistance",
{extend:testrunner.TestCase,
members:{assertTransform:function(strA,
strB){arrA=qx.lang.String.toArray(strA);
arrB=qx.lang.String.toArray(strB);
var operations=qx.util.EditDistance.getEditOperations(arrA,
arrB);
for(var i=0,
l=operations.length;i<l;i++){job=operations[i];
switch(job.operation){case qx.util.EditDistance.OPERATION_DELETE:qx.lang.Array.removeAt(arrA,
job.pos);
break;
case qx.util.EditDistance.OPERATION_REPLACE:arrA[job.pos]=job.value;
break;
case qx.util.EditDistance.OPERATION_INSERT:qx.lang.Array.insertAt(arrA,
job.value,
job.pos);
break;
default:throw new Error("Invalid operation: "+job.operation);
}}result=arrA.join("");
if(result!==strB){throw new Error("Implementation could not transform: "+strA+" to "+strB+"! Result was: "+result);
}console.debug("Successfully transformed: "+strA+" to "+strB+".");
},
testBasics:function(){this.assertTransform("hello world",
"hallo welt");
this.assertTransform("abcdef",
"abdcef");
this.assertTransform("abcdef",
"fedcba");
this.assertTransform("abcdef",
"abc");
this.assertTransform("abcdef",
"def");
this.assertTransform("abcdef",
"bcef");
this.assertTransform("abcdef",
"abcghi");
this.assertTransform("abcdef",
"abcstudef");
}}});




/* ID: qx.util.EditDistance */
qx.Class.define("qx.util.EditDistance",
{statics:{OPERATION_DELETE:1,
OPERATION_INSERT:2,
OPERATION_REPLACE:3,
__computeLevenshteinDistance:function(dataA,
dataB){var distance=[];
var posA,
posB,
cost;
for(posA=0;posA<=dataA.length;posA++){distance[posA]=[];
distance[posA][0]=posA;
}
for(posB=1;posB<=dataB.length;posB++){distance[0][posB]=posB;
}
for(posA=1;posA<=dataA.length;posA++){for(posB=1;posB<=dataB.length;posB++){cost=dataA[posA-1]===dataB[posB-1]?0:1;
if(distance[posA]===undefined){distance[posA]=[];
}distance[posA][posB]=Math.min(distance[posA-1][posB]+1,
distance[posA][posB-1]+1,
distance[posA-1][posB-1]+
cost);
}}return distance;
},
__computeEditOperations:function(distance,
dataA,
dataB){var operations=[];
var posA=dataA.length;
var posB=dataB.length;
if(posA===0){for(var i=0;i<posB;i++){operations.push({operation:this.OPERATION_INSERT,
pos:i,
old:null,
value:dataB[i]});
}return operations;
}
if(posB===0){for(var i=posA-1;i>=0;i--){operations.push({operation:this.OPERATION_DELETE,
pos:i,
old:dataA[i],
value:null});
}return operations;
}
while(posA!==0||posB!==0){if(posA!=0&&distance[posA][posB]==distance[posA-1][posB]+1){operations.push({operation:this.OPERATION_DELETE,
pos:posA-1,
old:dataA[posA-1],
value:null});
posA-=1;
}else if(posB!=0&&distance[posA][posB]==distance[posA][posB-1]+1){operations.push({operation:this.OPERATION_INSERT,
pos:posA,
old:null,
value:dataB[posB-1]});
posB-=1;
}else{if(dataA[posA-1]!==dataB[posB-1]){operations.push({operation:this.OPERATION_REPLACE,
pos:posA-1,
old:dataA[posA-1],
value:dataB[posB-1]});
}posA-=1;
posB-=1;
}}return operations;
},
getEditOperations:function(dataA,
dataB){var distance=this.__computeLevenshteinDistance(dataA,
dataB);
var operations=this.__computeEditOperations(distance,
dataA,
dataB);
return operations;
}}});




/* ID: testrunner.test.core.Variants */
qx.Class.define("testrunner.test.core.Variants",
{extend:testrunner.TestCase,
members:{testBrowserAllDefined:function(){this.debug("test testBrowserAllDefined");
qx.Class.define("qx.test.Browser1",
{extend:Object,
construct:function(){},
members:{getName:qx.core.Variant.select("qx.client",
{"default":function(){return "unknown browser";
},
"gecko":function(){return "Gecko";
},
"mshtml":function(){return "Internet Explorer";
},
"webkit":function(){return "Webkit";
},
"opera":function(){return "Opera";
}})}});
var b=new qx.test.Browser1();
if(qx.core.Client.getInstance().isGecko()){this.assertEquals("Gecko",
b.getName());
}else if(qx.core.Client.getInstance().isMshtml()){this.assertEquals("Internet Explorer",
b.getName());
}else if(qx.core.Client.getInstance().isWebkit()){this.assertEquals("Webkit",
b.getName());
}else if(qx.core.Client.getInstance().isOpera()){this.assertEquals("Opera",
b.getName());
}},
testBrowserOrDefined:function(){this.debug("test testBrowserOrDefined");
qx.Class.define("qx.test.Browser2",
{extend:Object,
construct:function(){},
members:{getName:qx.core.Variant.select("qx.client",
{"default":function(){return "unknown browser";
},
"gecko|mshtml|webkit|opera":function(){return "known browser";
}})}});
var b=new qx.test.Browser2();
this.assertEquals("known browser",
b.getName());
},
testBrowserOneDefined:function(){this.debug("test testBrowserOneDefined");
qx.Class.define("qx.test.Browser3",
{extend:Object,
construct:function(){},
members:{getName:qx.core.Variant.select("qx.client",
{"default":function(){return "default browser";
},
"unknown":function(){return "unknown browser";
}})}});
var b=new qx.test.Browser3();
this.assertEquals("default browser",
b.getName());
},
testInlineSwitch:function(){this.debug("test testInlineSwitch");
qx.core.Variant.define("test.animal",
["dog",
"cat",
"snake"],
"snake");
this.assertEquals("snake",
qx.core.Variant.get("test.animal"));
var c;
if(qx.core.Variant.isSet("test.animal",
"dog|snake")){if(qx.core.Variant.isSet("test.animal",
"dog")){c="dog";
}else{c="snake";
}}else if(qx.core.Variant.isSet("test.animal",
"cat")){c="cat";
}
if(qx.core.Variant.isSet("test.animal",
"default")){c="snake";
}this.assertEquals(qx.core.Variant.get("test.animal"),
c);
},
testIfWithComment:function(){this.debug("test testIfWithComment");
var b;
if(qx.core.Variant.isSet("qx.client",
"mshtml")){b="mshtml";
}else if(qx.core.Variant.isSet("qx.client",
"gecko")){b="gecko";
}else if(qx.core.Variant.isSet("qx.client",
"webkit")){b="webkit";
}else if(qx.core.Variant.isSet("qx.client",
"opera")){b="opera";
}this.assertEquals(qx.core.Variant.get("qx.client"),
b);
if(qx.core.Variant.isSet("qx.client",
"mshtml")){b="mshtml";
}else{b="other";
}
if(qx.core.Client.getInstance().isMshtml()){this.assertEquals("mshtml",
b);
}else{this.assertEquals("other",
b);
}},
testInlineOr:function(){this.debug("test testInlineOr");
var c;
if(qx.core.Variant.isSet("qx.client",
"mshtml|opera|webkit|gecko")){c="all";
}else{c="unknown";
}this.assertEquals("all",
c);
},
testTernary:function(){var a=qx.core.Variant.isSet("qx.client",
"mshtml")?"mshtml":"other";
if(qx.core.Client.getInstance().isMshtml()){this.assertEquals("mshtml",
a);
}else{this.assertEquals("other",
a);
}},
testScope:function(){this.assertUndefined(window.abcdef);
if(qx.core.Variant.isSet("qx.client",
"mshtml|opera|webkit|gecko")){abcdef="mshtml";
var g;
}else{var abcdef="other";
var f=function(){var y;
};
var g,
gh;
}this.assertUndefined(window.abcdef);
},
testVariantInElse:function(){var i=1;
if(true){var i=3;
}else if(qx.core.Variant.isSet("qx.client",
"mshtml")){debug("");
}i=2;
this.assertEquals(2,
i);
}}});




/* ID: testrunner.test.Mixin */
qx.Class.define("testrunner.test.Mixin",
{extend:testrunner.TestCase,
members:{testMixinBasic:function(){qx.Mixin.define("testrunner.MMix1",
{statics:{foo:function(){return "foo";
}},
members:{bar:function(){return "bar";
}},
properties:{color:{_legacy:true}}});
qx.Mixin.define("testrunner.MMix2",
{members:{bar:function(){return "bar";
}}});
qx.Class.define("testrunner.Mix",
{extend:Object,
include:testrunner.MMix1,
construct:function(){}});
this.assertEquals("foo",
testrunner.MMix1.foo());
this.assertEquals("bar",
new testrunner.Mix().bar());
var mix=new testrunner.Mix();
mix.setColor("red");
this.assertEquals("red",
mix.getColor());
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Mix1",
{extend:Object,
include:[testrunner.MMix1,
testrunner.MMix2],
construct:function(){}});
},
Error,
"Overwriting member",
"t1");
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Mix2",
{extend:Object,
include:testrunner.MMix1,
construct:function(){},
members:{bar:function(){return "bar";
}}});
},
Error,
"Overwriting member",
"t2");
qx.Class.define("testrunner.Mix3",
{extend:Object,
include:testrunner.MMix1,
construct:function(){},
statics:{foo:function(){return "foo";
}}});
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Mix4",
{extend:Object,
include:testrunner.MMix1,
construct:function(){},
properties:{color:{_legacy:true}}});
},
Error,
"already has a property",
"t3");
},
testInclude:function(){qx.Mixin.define("testrunner.MLogger",
{members:{log:function(msg){return msg;
}}});
qx.Class.define("testrunner.UseLog1",
{extend:Object,
construct:function(){}});
qx.Class.include(testrunner.UseLog1,
testrunner.MLogger);
this.assertEquals("Juhu",
new testrunner.UseLog1().log("Juhu"));
qx.Class.define("testrunner.UseLog2",
{extend:Object,
construct:function(){},
members:{log:function(){return "foo";
}}});
this.assertExceptionDebugOn(function(){qx.Class.include(testrunner.UseLog2,
testrunner.MLogger);
},
Error,
"Overwriting member");
qx.Class.define("testrunner.UseLog3",
{extend:Object,
construct:function(){},
members:{log:function(){return "foo";
}}});
this.assertEquals("foo",
new testrunner.UseLog3().log("Juhu"));
qx.Class.patch(testrunner.UseLog3,
testrunner.MLogger);
this.assertEquals("Juhu",
new testrunner.UseLog3().log("Juhu"));
qx.Class.define("testrunner.ExtendUseLog1",
{extend:testrunner.UseLog1});
this.assertEquals("Juhu",
new testrunner.ExtendUseLog1().log("Juhu"));
}}});




/* ID: testrunner.test.core.Property */
qx.Class.define("testrunner.test.core.Property",
{extend:testrunner.TestCase,
members:{testInherited:function(){qx.Class.define("testrunner.Node",
{extend:qx.core.Target,
construct:function(){this._children=[];
},
properties:{parent:{apply:"applyParent"},
color:{inheritable:true}},
members:{applyParent:function(parent){parent._children.push(this);
qx.core.Property.refresh(this);
},
getChildren:function(){return this._children;
}}});
var root=new testrunner.Node();
root.setColor("red");
var child1=new testrunner.Node();
var child2=new testrunner.Node();
child2.setParent(child1);
child1.setParent(root);
this.debug("child2: "+child1.getColor());
this.debug("child1: "+child2.getColor());
this.debug("root: "+root.getColor());
}}});




/* ID: testrunner.test.core.Target */
qx.Class.define("testrunner.test.core.Target",
{extend:testrunner.TestCase,
members:{testEvents:function(){qx.Class.define("testrunner.Event",
{extend:qx.core.Target,
events:{"click":"qx.event.type.Event"}});
var target=new testrunner.Event();
target.addEventListener("click",
function(){});
}}});




/* ID: testrunner.test.Xml */
qx.Class.define("testrunner.test.Xml",
{extend:testrunner.TestCase,
members:{serializeArray:function(arr){var ser=[];
for(var i=0;i<arr.length;i++){ser[i]=qx.xml.Element.serialize(arr[i]);
}return ser.join(", ");
},
testParseSerializeXml:function(){var doc=qx.xml.Document.create();
this.assertTrue(qx.xml.Document.isDocument(doc));
var div=doc.createElement("div");
this.assertEquals("div",
div.tagName);
var xmlStr='<html>'+'<body>Juhu <em id="toll">Kinners</em>. Wie geht es <em>Euch</em>?</body>'+'</html>';
var doc2=qx.xml.Document.fromString(xmlStr);
this.assertTrue(qx.xml.Document.isDocument(doc2));
this.assertEquals(xmlStr,
qx.xml.Element.serialize(doc2));
},
testFromString:function(){data="<Root><Row>test1</Row><Row>test2</Row><Row>test3</Row></Root>";
var xml=qx.xml.Document.fromString(data);
this.debug("Converted to XML Document "+xml);
},
testCreateDocument:function(){var doc=qx.xml.Document.create("",
"rss");
this.assertEquals('rss',
doc.documentElement.tagName);
this.assertEquals(0,
doc.documentElement.childNodes.length);
var doc=qx.xml.Document.create("http://www.w3.org/1999/xhtml",
"html");
this.assertEquals('http://www.w3.org/1999/xhtml',
doc.documentElement.namespaceURI);
this.assertEquals('html',
doc.documentElement.tagName);
this.assertEquals(0,
doc.documentElement.childNodes.length);
},
testXPath:function(){var xmlStr='<html><body>Juhu <em id="toll">Kinners</em>. Wie geht es <em>Euch</em>?</body></html>';
var doc2=qx.xml.Document.fromString(xmlStr);
var em=doc2.getElementsByTagName("em")[0];
this.assertEquals('<em id="toll">Kinners</em>',
qx.xml.Element.serialize(em));
this.assertEquals(qx.xml.Element.serialize(em),
qx.xml.Element.serialize(qx.xml.Element.selectSingleNode(doc2,
'//*[@id="toll"]')));
this.assertEquals(qx.xml.Element.serialize(doc2.getElementsByTagName("body")[0]),
qx.xml.Element.serialize(qx.xml.Element.selectSingleNode(doc2,
'//body')));
this.assertEquals(this.serializeArray(doc2.getElementsByTagName("em")),
this.serializeArray(qx.xml.Element.selectNodes(doc2,
'//em')));
this.assertEquals(this.serializeArray(doc2.getElementsByTagName("em")),
this.serializeArray(qx.xml.Element.selectNodes(doc2.documentElement,
'//em')));
},
__testXHR:function(){function error(msg){return function(){failed=msg;
};
}var req=new qx.io.remote.Request(qx.io.Alias.getInstance().resolve("testrunner/data/qooxdoo-blog.xml"),
qx.net.Http.METHOD_GET,
qx.util.Mime.XML);
req.setAsynchronous(false);
var failed="";
var xmlDocument;
req.addEventListener("aborted",
error("aborted"));
req.addEventListener("failed",
error("failed"));
req.addEventListener("timeout",
error("timeout"));
req.addEventListener("completed",
function(e){xmlDocument=e.getData().getContent();
});
req.send();
this.assertEquals("",
failed);
this.assertTrue(qx.xml.Document.isDocument(xmlDocument));
this.assertEquals("rss",
xmlDocument.documentElement.tagName);
},
testGetElementsByTagNameNS:function(){var xmlStr="<?xml version='1.0' encoding='UTF-8'?>"+"<xsl:stylesheet version='1.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>"+"<xsl:output method='xml' version='1.0' encoding='UTF-8' indent='yes'/>"+"<xsl:template match='*'></xsl:template><xsl:template match='@*'>"+"</xsl:template></xsl:stylesheet>";
var nsDoc=qx.xml.Document.fromString(xmlStr);
var templates=qx.xml.Element.getElementsByTagNameNS(nsDoc,
"http://www.w3.org/1999/XSL/Transform",
"template");
this.debug(qx.xml.String.escape(this.serializeArray(templates)));
this.assertEquals(2,
templates.length,
"getElementsByTagNameNS for XML documents failed!");
this.assertEquals("xsl:template",
templates[0].tagName,
"getElementsByTagNameNS for XML documents failed!");
var templates=qx.xml.Element.getElementsByTagNameNS(nsDoc.documentElement,
"http://www.w3.org/1999/XSL/Transform",
"template");
this.assertEquals(2,
templates.length,
"getElementsByTagNameNS for element nodes failed!");
this.assertEquals("xsl:template",
templates[0].tagName,
"getElementsByTagNameNS for element nodes failed!");
}}});




/* ID: qx.xml.Element */
qx.Class.define("qx.xml.Element",
{statics:{serialize:qx.lang.Object.select(window.XMLSerializer?"hasXMLSerializer":"noXMLSerializer",
{"hasXMLSerializer":function(element){var element=qx.xml.Document.isDocument(element)?element.documentElement:element;
return (new XMLSerializer()).serializeToString(element);
},
"noXMLSerializer":function(element){var element=qx.xml.Document.isDocument(element)?element.documentElement:element;
return element.xml||element.outerHTML;
}}),
selectSingleNode:qx.core.Variant.select("qx.client",
{"default":qx.lang.Object.select(window.XPathEvaluator?"hasXPath":"noXPath",
{"hasXPath":function(element,
query){if(!this.__xpe){this.__xpe=new XPathEvaluator();
}var xpe=this.__xpe;
return xpe.evaluate(query,
element,
xpe.createNSResolver(element),
XPathResult.FIRST_ORDERED_NODE_TYPE,
null).singleNodeValue;
},
"noXPath":function(){throw new Error("The browser does not support 'window.XPathEvaluator'");
}}),
"mshtml|opera":function(element,
query){return element.selectSingleNode(query);
}}),
selectNodes:qx.core.Variant.select("qx.client",
{"default":qx.lang.Object.select(window.XPathEvaluator?"hasXPath":"noXPath",
{"hasXPath":function(element,
query){if(!this.__xpe){this.__xpe=new XPathEvaluator();
}var xpe=this.__xpe;
var result=xpe.evaluate(query,
element,
xpe.createNSResolver(element),
XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
null);
var nodes=[];
for(var i=0;i<result.snapshotLength;i++){nodes[i]=result.snapshotItem(i);
}return nodes;
},
"noXPath":function(){throw new Error("The browser does not support 'window.XPathEvaluator'");
}}),
"mshtml|opera":function(element,
query){return element.selectNodes(query);
}}),
getElementsByTagNameNS:qx.core.Variant.select("qx.client",
{"default":qx.lang.Object.select(document.getElementsByTagNameNS?"hasGetByNs":"noGetByNs",
{"hasGetByNs":function(element,
namespaceURI,
tagname){return element.getElementsByTagNameNS(namespaceURI,
tagname);
},
"noGetByNs":function(){throw new Error("The browser does not support 'document.getElementsByTagNameNS'");
}}),
"mshtml":function(element,
namespaceURI,
tagname){var doc=element.ownerDocument||element;
doc.setProperty("SelectionLanguage",
"XPath");
doc.setProperty("SelectionNamespaces",
"xmlns:ns='"+namespaceURI+"'");
return qx.xml.Element.selectNodes(element,
'//ns:'+tagname);
}}),
getText:function(element){if(!element||!element.nodeType){return null;
}
switch(element.nodeType){case 1:var i,
a=[],
nodes=element.childNodes,
length=nodes.length;
for(i=0;i<length;i++){a[i]=this.getText(nodes[i]);
}return a.join("");
break;
case 2:return element.nodeValue;
break;
case 3:return element.nodeValue;
break;
}return null;
},
getSingleNodeText:function(element,
query){var node=this.selectSingleNode(element,
query);
return this.getText(node);
}}});




/* ID: qx.xml.Document */
qx.Class.define("qx.xml.Document",
{statics:{create:qx.core.Variant.select("qx.client",
{"default":qx.lang.Object.select((document.implementation&&document.implementation.createDocument)?"hasDom2":"noDom2",
{"hasDom2":function(namespaceUri,
qualifiedName){return document.implementation.createDocument(namespaceUri||"",
qualifiedName||"",
null);
},
"noDom2":function(namespaceUri,
qualifiedName){throw new Error("This browser does not support xml dom creation.");
}}),
"mshtml":function(namespaceUri,
qualifiedName){var vServers=["MSXML2.DOMDocument.3.0",
"MSXML2.DOMDocument.6.0",
"MSXML2.DOMDocument.4.0",
"MSXML2.DOMDocument",
"MSXML.DOMDocument",
"Microsoft.XMLDOM"];
var vObject;
for(var i=0,
l=vServers.length;i<l;i++){try{vObject=new ActiveXObject(vServers[i]);
break;
}catch(ex){vObject=null;
}}
if(qualifiedName&&vObject){xmlStr=new qx.util.StringBuilder();
xmlStr.add("<?xml version='1.0' encoding='UTF-8'?>\n<");
xmlStr.add(qualifiedName);
if(namespaceUri){xmlStr.add(" xmlns='");
xmlStr.add(namespaceUri);
xmlStr.add("'");
}xmlStr.add(" />");
vObject.loadXML(xmlStr.toString());
}return vObject;
}}),
fromString:qx.core.Variant.select("qx.client",
{"default":qx.lang.Object.select(window.DOMParser?"hasDomParser":"noDomParser",
{"hasDomParser":function(str){var dom=(new DOMParser()).parseFromString(str,
"text/xml");
return dom;
},
"noDomParser":function(str){throw new Error("This browser does not support xml dom creation from string.");
}}),
"mshtml":function(str){var dom=qx.xml.Document.create();
dom.loadXML(str);
return dom;
}}),
isDocument:function(obj){return (obj.nodeType==qx.dom.Node.DOCUMENT);
}}});




/* ID: qx.util.StringBuilder */
qx.Class.define("qx.util.StringBuilder",
{extend:Array,
construct:function(varargs){Array.call(this);
this.init();
if(varargs!=null){this.add.apply(this,
arguments);
}},
statics:{__init:qx.core.Variant.select("qx.client",
{"mshtml":function(){qx.core.Init.getInstance().addEventListener("load",
this.__onload,
this);
},
"default":null}),
__onload:qx.core.Variant.select("qx.client",
{"mshtml":function(){this._frame=document.createElement("iframe");
this._frame.style.visibility="hidden";
this._frame.src=qx.io.Alias.getInstance().resolve("static/stringbuilder/helper.html");
document.body.appendChild(this._frame);
},
"default":null}),
rebuild:qx.core.Variant.select("qx.client",
{"mshtml":function(arr){var prot=arr.prototype;
prot.add=prot.push;
prot.toString=prot.get=new Function("return this.join('');");
prot.clear=prot.init=new Function("this.length = 0;");
prot.isEmpty=new Function("return this.length === 0;");
qx.util.StringBuilder=arr;
document.body.removeChild(this._frame);
},
"default":null})},
members:{clear:qx.core.Variant.select("qx.client",
{"default":function(){this.length=0;
},
"mshtml":function(){this._array=[];
}}),
get:qx.core.Variant.select("qx.client",
{"default":function(){return this.join("");
},
"mshtml":function(){return this._array.join("");
}}),
add:qx.core.Variant.select("qx.client",
{"default":function(){},
"mshtml":function(){this._array.push.apply(this._array,
arguments);
}}),
init:qx.core.Variant.select("qx.client",
{"default":function(){this.length=0;
},
"mshtml":function(){this._array=[];
}}),
isEmpty:qx.core.Variant.select("qx.client",
{"default":function(){return this.length==0;
},
"mshtml":function(){if(this._array.length==0){return true;
}
for(var i=0;i<this._array.length;i++){if(this._array[i]!=""){return false;
}}return true;
}}),
toString:function(){}},
defer:qx.core.Variant.select("qx.client",
{"default":function(statics,
members){members.add=Array.prototype.push;
members.toString=members.get;
},
"mshtml":function(statics,
members){members.toString=members.get;
statics.__init();
}})});




/* ID: qx.net.Http */
qx.Class.define("qx.net.Http",
{statics:{METHOD_GET:"GET",
METHOD_POST:"POST",
METHOD_PUT:"PUT",
METHOD_HEAD:"HEAD",
METHOD_DELETE:"DELETE"}});




/* ID: qx.util.Mime */
qx.Class.define("qx.util.Mime",
{statics:{JAVASCRIPT:"text/javascript",
JSON:"application/json",
XML:"application/xml",
TEXT:"text/plain",
HTML:"text/html"}});




/* ID: qx.io.remote.Request */
qx.Class.define("qx.io.remote.Request",
{extend:qx.core.Target,
construct:function(vUrl,
vMethod,
vResponseType){arguments.callee.base.call(this);
this._requestHeaders={};
this._parameters={};
this._formFields={};
if(vUrl!==undefined){this.setUrl(vUrl);
}
if(vMethod!==undefined){this.setMethod(vMethod);
}
if(vResponseType!==undefined){this.setResponseType(vResponseType);
}this.setProhibitCaching(true);
this.setRequestHeader("X-Requested-With",
"qooxdoo");
this.setRequestHeader("X-Qooxdoo-Version",
qx.core.Version.toString());
this._seqNum=++qx.io.remote.Request._seqNum;
},
events:{"created":"qx.event.type.Event",
"configured":"qx.event.type.Event",
"sending":"qx.event.type.Event",
"receiving":"qx.event.type.Event",
"completed":"qx.io.remote.Response",
"aborted":"qx.io.remote.Response",
"failed":"qx.io.remote.Response",
"timeout":"qx.io.remote.Response"},
statics:{_seqNum:0},
properties:{url:{check:"String",
init:""},
method:{check:[qx.net.Http.METHOD_GET,
qx.net.Http.METHOD_POST,
qx.net.Http.METHOD_PUT,
qx.net.Http.METHOD_HEAD,
qx.net.Http.METHOD_DELETE],
apply:"_applyMethod",
init:qx.net.Http.METHOD_GET},
asynchronous:{check:"Boolean",
init:true},
data:{check:"String",
nullable:true},
username:{check:"String",
nullable:true},
password:{check:"String",
nullable:true},
state:{check:["configured",
"queued",
"sending",
"receiving",
"completed",
"aborted",
"timeout",
"failed"],
init:"configured",
apply:"_applyState",
event:"changeState"},
responseType:{check:[qx.util.Mime.TEXT,
qx.util.Mime.JAVASCRIPT,
qx.util.Mime.JSON,
qx.util.Mime.XML,
qx.util.Mime.HTML],
init:qx.util.Mime.TEXT,
apply:"_applyResponseType"},
timeout:{check:"Integer",
nullable:true},
prohibitCaching:{check:"Boolean",
init:true,
apply:"_applyProhibitCaching"},
crossDomain:{check:"Boolean",
init:false},
fileUpload:{check:"Boolean",
init:false},
transport:{check:"qx.io.remote.Exchange",
nullable:true},
useBasicHttpAuth:{check:"Boolean",
init:false}},
members:{send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},
abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},
reset:function(){switch(this.getState()){case "sending":case "receiving":this.error("Aborting already sent request!");
case "queued":this.abort();
break;
}},
isConfigured:function(){return this.getState()==="configured";
},
isQueued:function(){return this.getState()==="queued";
},
isSending:function(){return this.getState()==="sending";
},
isReceiving:function(){return this.getState()==="receiving";
},
isCompleted:function(){return this.getState()==="completed";
},
isAborted:function(){return this.getState()==="aborted";
},
isTimeout:function(){return this.getState()==="timeout";
},
isFailed:function(){return this.getState()==="failed";
},
_onqueued:function(e){this.setState("queued");
this.dispatchEvent(e);
},
_onsending:function(e){this.setState("sending");
this.dispatchEvent(e);
},
_onreceiving:function(e){this.setState("receiving");
this.dispatchEvent(e);
},
_oncompleted:function(e){this.setState("completed");
this.dispatchEvent(e);
this.dispose();
},
_onaborted:function(e){this.setState("aborted");
this.dispatchEvent(e);
this.dispose();
},
_ontimeout:function(e){this.setState("timeout");
this.dispatchEvent(e);
this.dispose();
},
_onfailed:function(e){this.setState("failed");
this.dispatchEvent(e);
this.dispose();
},
_applyState:function(value,
old){{};
},
_applyProhibitCaching:function(value,
old){if(value){this.setParameter("nocache",
new Date().valueOf());
this.setRequestHeader("Pragma",
"no-cache");
this.setRequestHeader("Cache-Control",
"no-cache");
}else{this.removeParameter("nocache");
this.removeRequestHeader("Pragma");
this.removeRequestHeader("Cache-Control");
}},
_applyMethod:function(value,
old){if(value===qx.net.Http.METHOD_POST){this.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded");
}else{this.removeRequestHeader("Content-Type");
}},
_applyResponseType:function(value,
old){this.setRequestHeader("X-Qooxdoo-Response-Type",
value);
},
setRequestHeader:function(vId,
vValue){this._requestHeaders[vId]=vValue;
},
removeRequestHeader:function(vId){delete this._requestHeaders[vId];
},
getRequestHeader:function(vId){return this._requestHeaders[vId]||null;
},
getRequestHeaders:function(){return this._requestHeaders;
},
setParameter:function(vId,
vValue){this._parameters[vId]=vValue;
},
removeParameter:function(vId){delete this._parameters[vId];
},
getParameter:function(vId){return this._parameters[vId]||null;
},
getParameters:function(){return this._parameters;
},
setFormField:function(vId,
vValue){this._formFields[vId]=vValue;
},
removeFormField:function(vId){delete this._formFields[vId];
},
getFormField:function(vId){return this._formFields[vId]||null;
},
getFormFields:function(){return this._formFields;
},
getSequenceNumber:function(){return this._seqNum;
}},
destruct:function(){this.setTransport(null);
this._disposeFields("_requestHeaders",
"_parameters",
"_formFields");
}});




/* ID: qx.io.remote.RequestQueue */
qx.Class.define("qx.io.remote.RequestQueue",
{type:"singleton",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
this._queue=[];
this._active=[];
this._totalRequests=0;
this._timer=new qx.client.Timer(500);
this._timer.addEventListener("interval",
this._oninterval,
this);
},
properties:{enabled:{init:true,
check:"Boolean",
apply:"_applyEnabled"},
maxTotalRequests:{check:"Integer",
nullable:true},
maxConcurrentRequests:{check:"Integer",
init:3},
defaultTimeout:{check:"Integer",
init:5000}},
members:{_debug:function(){var vText=this._active.length+"/"+(this._queue.length+this._active.length);
{};
},
_check:function(){this._debug();
if(this._active.length==0&&this._queue.length==0){this._timer.stop();
}if(!this.getEnabled()){return;
}if(this._active.length>=this.getMaxConcurrentRequests()||this._queue.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this._totalRequests>=this.getMaxTotalRequests()){return;
}var vRequest=this._queue.shift();
var vTransport=new qx.io.remote.Exchange(vRequest);
this._totalRequests++;
this._active.push(vTransport);
this._debug();
vTransport.addEventListener("sending",
vRequest._onsending,
vRequest);
vTransport.addEventListener("receiving",
vRequest._onreceiving,
vRequest);
vTransport.addEventListener("completed",
vRequest._oncompleted,
vRequest);
vTransport.addEventListener("aborted",
vRequest._onaborted,
vRequest);
vTransport.addEventListener("timeout",
vRequest._ontimeout,
vRequest);
vTransport.addEventListener("failed",
vRequest._onfailed,
vRequest);
vTransport.addEventListener("sending",
this._onsending,
this);
vTransport.addEventListener("completed",
this._oncompleted,
this);
vTransport.addEventListener("aborted",
this._oncompleted,
this);
vTransport.addEventListener("timeout",
this._oncompleted,
this);
vTransport.addEventListener("failed",
this._oncompleted,
this);
vTransport._start=(new Date).valueOf();
vTransport.send();
if(this._queue.length>0){this._check();
}},
_remove:function(vTransport){qx.lang.Array.remove(this._active,
vTransport);
vTransport.dispose();
this._check();
},
_activeCount:0,
_onsending:function(e){{};
},
_oncompleted:function(e){{};
this._remove(e.getTarget());
},
_oninterval:function(e){var vActive=this._active;
if(vActive.length==0){return;
}var vCurrent=(new Date).valueOf();
var vTransport;
var vRequest;
var vDefaultTimeout=this.getDefaultTimeout();
var vTimeout;
var vTime;
for(var i=vActive.length-1;i>=0;i--){vTransport=vActive[i];
vRequest=vTransport.getRequest();
if(vRequest.isAsynchronous()){vTimeout=vRequest.getTimeout();
if(vTimeout==0){continue;
}
if(vTimeout==null){vTimeout=vDefaultTimeout;
}vTime=vCurrent-vTransport._start;
if(vTime>vTimeout){this.warn("Timeout: transport "+vTransport.toHashCode());
this.warn(vTime+"ms > "+vTimeout+"ms");
vTransport.timeout();
}}}},
_applyEnabled:function(value,
old){if(value){this._check();
}this._timer.setEnabled(value);
},
add:function(vRequest){vRequest.setState("queued");
this._queue.push(vRequest);
this._check();
if(this.getEnabled()){this._timer.start();
}},
abort:function(vRequest){var vTransport=vRequest.getTransport();
if(vTransport){vTransport.abort();
}else if(qx.lang.Array.contains(this._queue,
vRequest)){qx.lang.Array.remove(this._queue,
vRequest);
}}},
destruct:function(){this._disposeObjectDeep("_active",
1);
this._disposeObjects("_timer");
this._disposeFields("_queue");
}});




/* ID: qx.io.remote.Exchange */
qx.Class.define("qx.io.remote.Exchange",
{extend:qx.core.Target,
construct:function(vRequest){arguments.callee.base.call(this);
this.setRequest(vRequest);
vRequest.setTransport(this);
},
events:{"sending":"qx.event.type.Event",
"receiving":"qx.event.type.Event",
"completed":"qx.io.remote.Response",
"aborted":"qx.io.remote.Response",
"failed":"qx.io.remote.Response",
"timeout":"qx.io.remote.Response"},
statics:{typesOrder:["qx.io.remote.XmlHttpTransport",
"qx.io.remote.IframeTransport",
"qx.io.remote.ScriptTransport"],
typesReady:false,
typesAvailable:{},
typesSupported:{},
registerType:function(vClass,
vId){qx.io.remote.Exchange.typesAvailable[vId]=vClass;
},
initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var vId in qx.io.remote.Exchange.typesAvailable){var vTransporterImpl=qx.io.remote.Exchange.typesAvailable[vId];
if(vTransporterImpl.isSupported()){qx.io.remote.Exchange.typesSupported[vId]=vTransporterImpl;
}}qx.io.remote.Exchange.typesReady=true;
if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},
canHandle:function(vImpl,
vNeeds,
vResponseType){if(!qx.lang.Array.contains(vImpl.handles.responseTypes,
vResponseType)){return false;
}
for(var vKey in vNeeds){if(!vImpl.handles[vKey]){return false;
}}return true;
},
_nativeMap:{0:"created",
1:"configured",
2:"sending",
3:"receiving",
4:"completed"},
wasSuccessful:function(vStatusCode,
vReadyState,
vIsLocal){if(vIsLocal){switch(vStatusCode){case null:case 0:return true;
case -1:return vReadyState<4;
default:return typeof vStatusCode==="undefined";
}}else{switch(vStatusCode){case -1:{};
return vReadyState<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return vReadyState!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(vStatusCode>206&&vStatusCode<300){return true;
}qx.log.Logger.getClassLogger(qx.io.remote.Exchange).debug("Unknown status code: "+vStatusCode+" ("+vReadyState+")");
return false;
}}},
statusCodeToString:function(vStatusCode){switch(vStatusCode){case -1:return "Not available";
case 200:return "Ok";
case 304:return "Not modified";
case 206:return "Partial content";
case 204:return "No content";
case 300:return "Multiple choices";
case 301:return "Moved permanently";
case 302:return "Moved temporarily";
case 303:return "See other";
case 305:return "Use proxy";
case 400:return "Bad request";
case 401:return "Unauthorized";
case 402:return "Payment required";
case 403:return "Forbidden";
case 404:return "Not found";
case 405:return "Method not allowed";
case 406:return "Not acceptable";
case 407:return "Proxy authentication required";
case 408:return "Request time-out";
case 409:return "Conflict";
case 410:return "Gone";
case 411:return "Length required";
case 412:return "Precondition failed";
case 413:return "Request entity too large";
case 414:return "Request-URL too large";
case 415:return "Unsupported media type";
case 500:return "Server error";
case 501:return "Not implemented";
case 502:return "Bad gateway";
case 503:return "Out of resources";
case 504:return "Gateway time-out";
case 505:return "HTTP version not supported";
case 12002:return "Server timeout";
case 12029:return "Connection dropped";
case 12030:return "Connection dropped";
case 12031:return "Connection dropped";
case 12152:return "Connection closed by server";
case 13030:return "MSHTML-specific HTTP status code";
default:return "Unknown status code";
}}},
properties:{request:{check:"qx.io.remote.Request",
nullable:true},
implementation:{check:"qx.io.remote.AbstractRemoteTransport",
nullable:true,
apply:"_applyImplementation"},
state:{check:["configured",
"sending",
"receiving",
"completed",
"aborted",
"timeout",
"failed"],
init:"configured",
event:"changeState",
apply:"_applyState"}},
members:{send:function(){var vRequest=this.getRequest();
if(!vRequest){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var vUsage=qx.io.remote.Exchange.typesOrder;
var vSupported=qx.io.remote.Exchange.typesSupported;
var vResponseType=vRequest.getResponseType();
var vNeeds={};
if(vRequest.getAsynchronous()){vNeeds.asynchronous=true;
}else{vNeeds.synchronous=true;
}
if(vRequest.getCrossDomain()){vNeeds.crossDomain=true;
}
if(vRequest.getFileUpload()){vNeeds.fileUpload=true;
}for(var field in vRequest.getFormFields()){vNeeds.programaticFormFields=true;
break;
}var vTransportImpl,
vTransport;
for(var i=0,
l=vUsage.length;i<l;i++){vTransportImpl=vSupported[vUsage[i]];
if(vTransportImpl){if(!qx.io.remote.Exchange.canHandle(vTransportImpl,
vNeeds,
vResponseType)){continue;
}
try{{};
vTransport=new vTransportImpl;
this.setImplementation(vTransport);
vTransport.setUseBasicHttpAuth(vRequest.getUseBasicHttpAuth());
vTransport.send();
return true;
}catch(ex){return this.error("Request handler throws error",
ex);
}}}this.error("There is no transport implementation available to handle this request: "+vRequest);
},
abort:function(){var vImplementation=this.getImplementation();
if(vImplementation){{};
vImplementation.abort();
}else{{};
this.setState("aborted");
}},
timeout:function(){var vImplementation=this.getImplementation();
if(vImplementation){this.warn("Timeout: implementation "+vImplementation.toHashCode());
vImplementation.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState("timeout");
}if(this.getRequest()){this.getRequest().setTimeout(0);
}},
_onsending:function(e){this.setState("sending");
},
_onreceiving:function(e){this.setState("receiving");
},
_oncompleted:function(e){this.setState("completed");
},
_onabort:function(e){this.setState("aborted");
},
_onfailed:function(e){this.setState("failed");
},
_ontimeout:function(e){this.setState("timeout");
},
_applyImplementation:function(value,
old){if(old){old.removeEventListener("sending",
this._onsending,
this);
old.removeEventListener("receiving",
this._onreceiving,
this);
old.removeEventListener("completed",
this._oncompleted,
this);
old.removeEventListener("aborted",
this._onabort,
this);
old.removeEventListener("timeout",
this._ontimeout,
this);
old.removeEventListener("failed",
this._onfailed,
this);
}
if(value){var vRequest=this.getRequest();
value.setUrl(vRequest.getUrl());
value.setMethod(vRequest.getMethod());
value.setAsynchronous(vRequest.getAsynchronous());
value.setUsername(vRequest.getUsername());
value.setPassword(vRequest.getPassword());
value.setParameters(vRequest.getParameters());
value.setFormFields(vRequest.getFormFields());
value.setRequestHeaders(vRequest.getRequestHeaders());
value.setData(vRequest.getData());
value.setResponseType(vRequest.getResponseType());
value.addEventListener("sending",
this._onsending,
this);
value.addEventListener("receiving",
this._onreceiving,
this);
value.addEventListener("completed",
this._oncompleted,
this);
value.addEventListener("aborted",
this._onabort,
this);
value.addEventListener("timeout",
this._ontimeout,
this);
value.addEventListener("failed",
this._onfailed,
this);
}},
_applyState:function(value,
old){var vRequest=this.getRequest();
{};
switch(value){case "sending":this.createDispatchEvent("sending");
break;
case "receiving":this.createDispatchEvent("receiving");
break;
case "completed":case "aborted":case "timeout":case "failed":var vImpl=this.getImplementation();
if(!vImpl){break;
}
if(this.hasEventListeners(value)){var vResponse=new qx.io.remote.Response(value);
if(value=="completed"){var vContent=vImpl.getResponseContent();
vResponse.setContent(vContent);
if(vContent===null){{};
value="failed";
}}vResponse.setStatusCode(vImpl.getStatusCode());
vResponse.setResponseHeaders(vImpl.getResponseHeaders());
this.dispatchEvent(vResponse);
}this.setImplementation(null);
vImpl.dispose();
break;
}}},
settings:{"qx.ioRemoteDebug":false,
"qx.ioRemoteDebugData":false},
destruct:function(){var vImpl=this.getImplementation();
if(vImpl){this.setImplementation(null);
vImpl.dispose();
}this.setRequest(null);
}});




/* ID: qx.io.remote.Response */
qx.Class.define("qx.io.remote.Response",
{extend:qx.event.type.Event,
construct:function(eventType){arguments.callee.base.call(this,
eventType);
},
properties:{state:{check:"Integer",
nullable:true},
statusCode:{check:"Integer",
nullable:true},
content:{nullable:true},
responseHeaders:{check:"Object",
nullable:true}},
members:{getResponseHeader:function(vHeader){var vAll=this.getResponseHeaders();
if(vAll){return vAll[vHeader]||null;
}return null;
},
getData:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
"This method is no longer needed since the event object is now an instance of the Response class.");
return this;
}}});




/* ID: qx.io.remote.AbstractRemoteTransport */
qx.Class.define("qx.io.remote.AbstractRemoteTransport",
{type:"abstract",
extend:qx.core.Target,
construct:function(){arguments.callee.base.call(this);
},
events:{"created":"qx.event.type.Event",
"configured":"qx.event.type.Event",
"sending":"qx.event.type.Event",
"receiving":"qx.event.type.Event",
"completed":"qx.event.type.Event",
"aborted":"qx.event.type.Event",
"failed":"qx.event.type.Event",
"timeout":"qx.event.type.Event"},
properties:{url:{check:"String",
nullable:true},
method:{check:"String",
nullable:true},
asynchronous:{check:"Boolean",
nullable:true},
data:{check:"String",
nullable:true},
username:{check:"String",
nullable:true},
password:{check:"String",
nullable:true},
state:{check:["created",
"configured",
"sending",
"receiving",
"completed",
"aborted",
"timeout",
"failed"],
init:"created",
event:"changeState",
apply:"_applyState"},
requestHeaders:{check:"Object",
nullable:true},
parameters:{check:"Object",
nullable:true},
formFields:{check:"Object",
nullable:true},
responseType:{check:"String",
nullable:true},
useBasicHttpAuth:{check:"Boolean",
nullable:true}},
members:{send:function(){throw new Error("send is abstract");
},
abort:function(){{};
this.setState("aborted");
},
timeout:function(){{};
this.setState("timeout");
},
failed:function(){{};
this.setState("failed");
},
setRequestHeader:function(vLabel,
vValue){throw new Error("setRequestHeader is abstract");
},
getResponseHeader:function(vLabel){throw new Error("getResponseHeader is abstract");
},
getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},
getStatusCode:function(){throw new Error("getStatusCode is abstract");
},
getStatusText:function(){throw new Error("getStatusText is abstract");
},
getResponseText:function(){throw new Error("getResponseText is abstract");
},
getResponseXml:function(){throw new Error("getResponseXml is abstract");
},
getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},
_applyState:function(value,
old){{};
switch(value){case "created":this.createDispatchEvent("created");
break;
case "configured":this.createDispatchEvent("configured");
break;
case "sending":this.createDispatchEvent("sending");
break;
case "receiving":this.createDispatchEvent("receiving");
break;
case "completed":this.createDispatchEvent("completed");
break;
case "aborted":this.createDispatchEvent("aborted");
break;
case "failed":this.createDispatchEvent("failed");
break;
case "timeout":this.createDispatchEvent("timeout");
break;
}return true;
}}});




/* ID: qx.io.remote.XmlHttpTransport */
qx.Class.define("qx.io.remote.XmlHttpTransport",
{extend:qx.io.remote.AbstractRemoteTransport,
construct:function(){arguments.callee.base.call(this);
this._req=qx.io.remote.XmlHttpTransport.createRequestObject();
this._req.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
events:{"created":"qx.event.type.Event",
"configured":"qx.event.type.Event",
"sending":"qx.event.type.Event",
"receiving":"qx.event.type.Event",
"completed":"qx.event.type.Event",
"aborted":"qx.event.type.Event",
"failed":"qx.event.type.Event",
"timeout":"qx.event.type.Event"},
statics:{handles:{synchronous:true,
asynchronous:true,
crossDomain:false,
fileUpload:false,
programaticFormFields:false,
responseTypes:[qx.util.Mime.TEXT,
qx.util.Mime.JAVASCRIPT,
qx.util.Mime.JSON,
qx.util.Mime.XML,
qx.util.Mime.HTML]},
requestObjects:[],
requestObjectCount:0,
isSupported:function(){return qx.net.HttpRequest.create()!=null?true:false;
},
createRequestObject:function(){return qx.net.HttpRequest.create();
},
__dummy:function(){}},
members:{_localRequest:false,
_lastReadyState:0,
getRequest:function(){return this._req;
},
send:function(){this._lastReadyState=0;
var vRequest=this.getRequest();
var vMethod=this.getMethod();
var vAsynchronous=this.getAsynchronous();
var vUrl=this.getUrl();
var vLocalRequest=(qx.core.Client.getInstance().getRunsLocally()&&!(/^http(s){0,1}\:/.test(vUrl)));
this._localRequest=vLocalRequest;
var vParameters=this.getParameters();
var vParametersList=[];
for(var vId in vParameters){var value=vParameters[vId];
if(value instanceof Array){for(var i=0;i<value.length;i++){vParametersList.push(encodeURIComponent(vId)+"="+encodeURIComponent(value[i]));
}}else{vParametersList.push(encodeURIComponent(vId)+"="+encodeURIComponent(value));
}}
if(vParametersList.length>0){vUrl+=(vUrl.indexOf("?")>=0?"&":"?")+vParametersList.join("&");
}var encode64=function(input){var keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var output="";
var chr1,
chr2,
chr3;
var enc1,
enc2,
enc3,
enc4;
var i=0;
do{chr1=input.charCodeAt(i++);
chr2=input.charCodeAt(i++);
chr3=input.charCodeAt(i++);
enc1=chr1>>2;
enc2=((chr1&3)<<4)|(chr2>>4);
enc3=((chr2&15)<<2)|(chr3>>6);
enc4=chr3&63;
if(isNaN(chr2)){enc3=enc4=64;
}else if(isNaN(chr3)){enc4=64;
}output+=keyStr.charAt(enc1)+keyStr.charAt(enc2)+keyStr.charAt(enc3)+keyStr.charAt(enc4);
}while(i<input.length);
return output;
};
var onreadyStateChangeCallback=qx.lang.Function.bind(this._onreadystatechange,
this);
if(qx.core.Variant.isSet("qx.client",
"mshtml")&&this.getAsynchronous()){vRequest.onreadystatechange=function(e){var self=this;
window.setTimeout(function(e){onreadyStateChangeCallback(e);
},
0);
};
}else{vRequest.onreadystatechange=onreadyStateChangeCallback;
}if(this.getUsername()){if(this.getUseBasicHttpAuth()){vRequest.open(vMethod,
vUrl,
vAsynchronous);
vRequest.setRequestHeader('Authorization',
'Basic '+encode64(this.getUsername()+':'+this.getPassword()));
}else{vRequest.open(vMethod,
vUrl,
vAsynchronous,
this.getUsername(),
this.getPassword());
}}else{vRequest.open(vMethod,
vUrl,
vAsynchronous);
}vRequest.setRequestHeader('Referer',
window.location.href);
var vRequestHeaders=this.getRequestHeaders();
for(var vId in vRequestHeaders){vRequest.setRequestHeader(vId,
vRequestHeaders[vId]);
}try{{};
vRequest.send(this.getData());
}catch(ex){if(vLocalRequest){this.failedLocally();
}else{this.error("Failed to send data: "+ex,
"send");
this.failed();
}return;
}if(!vAsynchronous){this._onreadystatechange();
}},
failedLocally:function(){if(this.getState()==="failed"){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},
_onreadystatechange:function(e){switch(this.getState()){case "completed":case "aborted":case "failed":case "timeout":{};
return;
}var vReadyState=this.getReadyState();
if(vReadyState==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),
vReadyState,
this._localRequest)){return this.failed();
}}while(this._lastReadyState<vReadyState){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
getReadyState:function(){var vReadyState=null;
try{vReadyState=this._req.readyState;
}catch(ex){}return vReadyState;
},
setRequestHeader:function(vLabel,
vValue){this._req.setRequestHeader(vLabel,
vValue);
},
getResponseHeader:function(vLabel){var vResponseHeader=null;
try{this.getRequest().getResponseHeader(vLabel)||null;
}catch(ex){}return vResponseHeader;
},
getStringResponseHeaders:function(){var vSourceHeader=null;
try{var vLoadHeader=this._req.getAllResponseHeaders();
if(vLoadHeader){vSourceHeader=vLoadHeader;
}}catch(ex){}return vSourceHeader;
},
getResponseHeaders:function(){var vSourceHeader=this.getStringResponseHeaders();
var vHeader={};
if(vSourceHeader){var vValues=vSourceHeader.split(/[\r\n]+/g);
for(var i=0,
l=vValues.length;i<l;i++){var vPair=vValues[i].match(/^([^:]+)\s*:\s*(.+)$/i);
if(vPair){vHeader[vPair[1]]=vPair[2];
}}}return vHeader;
},
getStatusCode:function(){var vStatusCode=-1;
try{vStatusCode=this.getRequest().status;
}catch(ex){}return vStatusCode;
},
getStatusText:function(){var vStatusText="";
try{vStatusText=this.getRequest().statusText;
}catch(ex){}return vStatusText;
},
getResponseText:function(){var vResponseText=null;
var vStatus=this.getStatusCode();
var vReadyState=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful(vStatus,
vReadyState,
this._localRequest)){try{vResponseText=this.getRequest().responseText;
}catch(ex){}}return vResponseText;
},
getResponseXml:function(){var vResponseXML=null;
var vStatus=this.getStatusCode();
var vReadyState=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful(vStatus,
vReadyState,
this._localRequest)){try{vResponseXML=this.getRequest().responseXML;
}catch(ex){}}if(typeof vResponseXML=="object"&&vResponseXML!=null){if(!vResponseXML.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,
"");
vResponseXML.loadXML(s);
}if(!vResponseXML.documentElement){throw new Error("Missing Document Element!");
}
if(vResponseXML.documentElement.tagName=="parseerror"){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return vResponseXML;
},
getFetchedLength:function(){var vText=this.getResponseText();
return typeof vText=="string"?vText.length:0;
},
getResponseContent:function(){if(this.getState()!=="completed"){{};
return null;
}{};
var vText=this.getResponseText();
switch(this.getResponseType()){case qx.util.Mime.TEXT:case qx.util.Mime.HTML:{};
return vText;
case qx.util.Mime.JSON:{};
try{if(vText&&vText.length>0){return qx.io.Json.parseQx(vText)||null;
}else{return null;
}}catch(ex){this.error("Could not execute json: ["+vText+"]",
ex);
return "<pre>Could not execute json: \n"+vText+"\n</pre>";
}case qx.util.Mime.JAVASCRIPT:{};
try{if(vText&&vText.length>0){return window.eval(vText)||null;
}else{return null;
}}catch(ex){this.error("Could not execute javascript: ["+vText+"]",
ex);
return null;
}case qx.util.Mime.XML:vText=this.getResponseXml();
{};
return vText||null;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},
_applyState:function(value,
old){{};
switch(value){case "created":this.createDispatchEvent("created");
break;
case "configured":this.createDispatchEvent("configured");
break;
case "sending":this.createDispatchEvent("sending");
break;
case "receiving":this.createDispatchEvent("receiving");
break;
case "completed":this.createDispatchEvent("completed");
break;
case "failed":this.createDispatchEvent("failed");
break;
case "aborted":this.getRequest().abort();
this.createDispatchEvent("aborted");
break;
case "timeout":this.getRequest().abort();
this.createDispatchEvent("timeout");
break;
}}},
defer:function(statics,
members){qx.io.remote.Exchange.registerType(qx.io.remote.XmlHttpTransport,
"qx.io.remote.XmlHttpTransport");
},
destruct:function(){var vRequest=this.getRequest();
if(vRequest){vRequest.onreadystatechange=qx.io.remote.XmlHttpTransport.__dummy;
switch(vRequest.readyState){case 1:case 2:case 3:vRequest.abort();
}}this._disposeFields("_req");
}});




/* ID: qx.net.HttpRequest */
qx.Class.define("qx.net.HttpRequest",
{statics:{create:qx.core.Variant.select("qx.client",
{"default":function(){return new XMLHttpRequest;
},
"mshtml":qx.lang.Object.select(location.protocol!=="file:"&&window.XMLHttpRequest?"native":"activeX",
{"native":function(){return new XMLHttpRequest;
},
"activeX":function(){if(this.__server){return new ActiveXObject(this.__server);
}var servers=["MSXML2.XMLHTTP.3.0",
"MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.4.0",
"MSXML2.XMLHTTP",
"Microsoft.XMLHTTP"];
var obj;
var server;
for(var i=0,
l=servers.length;i<l;i++){server=servers[i];
try{obj=new ActiveXObject(server);
break;
}catch(ex){obj=null;
}}
if(obj){this.__server=server;
}return obj;
}})})}});




/* ID: qx.io.remote.IframeTransport */
qx.Class.define("qx.io.remote.IframeTransport",
{extend:qx.io.remote.AbstractRemoteTransport,
construct:function(){arguments.callee.base.call(this);
var vUniqueId=(new Date).valueOf();
var vFrameName="frame_"+vUniqueId;
var vFormName="form_"+vUniqueId;
if(qx.core.Variant.isSet("qx.client",
"mshtml")){this._frame=document.createElement('<iframe name="'+vFrameName+'"></iframe>');
}else{this._frame=document.createElement("iframe");
}this._frame.src="javascript:void(0)";
this._frame.id=this._frame.name=vFrameName;
this._frame.onload=qx.lang.Function.bind(this._onload,
this);
this._frame.style.display="none";
document.body.appendChild(this._frame);
this._form=document.createElement("form");
this._form.target=vFrameName;
this._form.id=this._form.name=vFormName;
this._form.style.display="none";
document.body.appendChild(this._form);
this._data=document.createElement("textarea");
this._data.id=this._data.name="_data_";
this._form.appendChild(this._data);
this._frame.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
statics:{handles:{synchronous:false,
asynchronous:true,
crossDomain:false,
fileUpload:true,
programaticFormFields:true,
responseTypes:[qx.util.Mime.TEXT,
qx.util.Mime.JAVASCRIPT,
qx.util.Mime.JSON,
qx.util.Mime.XML,
qx.util.Mime.HTML]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4}},
members:{_lastReadyState:0,
send:function(){var vMethod=this.getMethod();
var vUrl=this.getUrl();
var vParameters=this.getParameters();
var vParametersList=[];
for(var vId in vParameters){var value=vParameters[vId];
if(value instanceof Array){for(var i=0;i<value.length;i++){vParametersList.push(encodeURIComponent(vId)+"="+encodeURIComponent(value[i]));
}}else{vParametersList.push(encodeURIComponent(vId)+"="+encodeURIComponent(value));
}}
if(vParametersList.length>0){vUrl+=(vUrl.indexOf("?")>=0?"&":"?")+vParametersList.join("&");
}var vFormFields=this.getFormFields();
for(var vId in vFormFields){var vField=document.createElement("textarea");
vField.name=vId;
vField.appendChild(document.createTextNode(vFormFields[vId]));
this._form.appendChild(vField);
}this._form.action=vUrl;
this._form.method=vMethod;
this._data.appendChild(document.createTextNode(this.getData()));
this._form.submit();
this.setState("sending");
},
_onload:function(e){if(this._form.src){return;
}this._switchReadyState(qx.io.remote.IframeTransport._numericMap.complete);
},
_onreadystatechange:function(e){this._switchReadyState(qx.io.remote.IframeTransport._numericMap[this._frame.readyState]);
},
_switchReadyState:function(vReadyState){switch(this.getState()){case "completed":case "aborted":case "failed":case "timeout":this.warn("Ignore Ready State Change");
return;
}while(this._lastReadyState<vReadyState){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
setRequestHeader:function(vLabel,
vValue){},
getResponseHeader:function(vLabel){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return "";
},
getIframeWindow:function(){return qx.html.Iframe.getWindow(this._frame);
},
getIframeDocument:function(){return qx.html.Iframe.getDocument(this._frame);
},
getIframeBody:function(){return qx.html.Iframe.getBody(this._frame);
},
getIframeTextContent:function(){var vBody=this.getIframeBody();
if(!vBody){return null;
}
if(!vBody.firstChild){return "";
}if(vBody.firstChild.tagName&&vBody.firstChild.tagName.toLowerCase()=="pre"){return vBody.firstChild.innerHTML;
}else{return vBody.innerHTML;
}},
getIframeHtmlContent:function(){var vBody=this.getIframeBody();
return vBody?vBody.innerHTML:null;
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!=="completed"){{};
return null;
}{};
var vText=this.getIframeTextContent();
switch(this.getResponseType()){case qx.util.Mime.TEXT:{};
return vText;
break;
case qx.util.Mime.HTML:vText=this.getIframeHtmlContent();
{};
return vText();
break;
case qx.util.Mime.JSON:vText=this.getIframeHtmlContent();
{};
try{return vText&&vText.length>0?qx.io.Json.parseQx(vText):null;
}catch(ex){return this.error("Could not execute json: ("+vText+")",
ex);
}case qx.util.Mime.JAVASCRIPT:vText=this.getIframeHtmlContent();
{};
try{return vText&&vText.length>0?window.eval(vText):null;
}catch(ex){return this.error("Could not execute javascript: ("+vText+")",
ex);
}case qx.util.Mime.XML:vText=this.getIframeDocument();
{};
return vText;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function(statics,
members,
properties){qx.io.remote.Exchange.registerType(qx.io.remote.IframeTransport,
"qx.io.remote.IframeTransport");
},
destruct:function(){if(this._frame){this._frame.onload=null;
this._frame.onreadystatechange=null;
if(qx.core.Variant.isSet("qx.client",
"gecko")){this._frame.src=qx.io.Alias.getInstance().resolve("static/image/blank.gif");
}document.body.removeChild(this._frame);
}
if(this._form){document.body.removeChild(this._form);
}this._disposeFields("_frame",
"_form");
}});




/* ID: qx.html.Iframe */
qx.Class.define("qx.html.Iframe",
{statics:{getWindow:qx.core.Variant.select("qx.client",
{"mshtml":function(vIframe){try{return vIframe.contentWindow;
}catch(ex){return null;
}},
"default":function(vIframe){try{var vDoc=qx.html.Iframe.getDocument(vIframe);
return vDoc?vDoc.defaultView:null;
}catch(ex){return null;
}}}),
getDocument:qx.core.Variant.select("qx.client",
{"mshtml":function(vIframe){try{var vWin=qx.html.Iframe.getWindow(vIframe);
return vWin?vWin.document:null;
}catch(ex){return null;
}},
"default":function(vIframe){try{return vIframe.contentDocument;
}catch(ex){return null;
}}}),
getBody:function(vIframe){var vDoc=qx.html.Iframe.getDocument(vIframe);
return vDoc?vDoc.getElementsByTagName("body")[0]:null;
}}});




/* ID: qx.io.remote.ScriptTransport */
qx.Class.define("qx.io.remote.ScriptTransport",
{extend:qx.io.remote.AbstractRemoteTransport,
construct:function(){arguments.callee.base.call(this);
var vUniqueId=++qx.io.remote.ScriptTransport._uniqueId;
if(vUniqueId>=2000000000){qx.io.remote.ScriptTransport._uniqueId=vUniqueId=1;
}this._element=null;
this._uniqueId=vUniqueId;
},
statics:{_uniqueId:0,
_instanceRegistry:{},
ScriptTransport_PREFIX:"_ScriptTransport_",
ScriptTransport_ID_PARAM:"_ScriptTransport_id",
ScriptTransport_DATA_PARAM:"_ScriptTransport_data",
handles:{synchronous:false,
asynchronous:true,
crossDomain:true,
fileUpload:false,
programaticFormFields:false,
responseTypes:[qx.util.Mime.TEXT,
qx.util.Mime.JAVASCRIPT,
qx.util.Mime.JSON]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4},
_requestFinished:function(id,
content){var vInstance=qx.io.remote.ScriptTransport._instanceRegistry[id];
if(vInstance==null){{};
}else{vInstance._responseContent=content;
vInstance._switchReadyState(qx.io.remote.ScriptTransport._numericMap.complete);
}}},
members:{_lastReadyState:0,
send:function(){var vUrl=this.getUrl();
vUrl+=(vUrl.indexOf("?")>=0?"&":"?")+qx.io.remote.ScriptTransport.ScriptTransport_ID_PARAM+"="+this._uniqueId;
var vParameters=this.getParameters();
var vParametersList=[];
for(var vId in vParameters){if(vId.indexOf(qx.io.remote.ScriptTransport.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.ScriptTransport.ScriptTransport_PREFIX);
}var value=vParameters[vId];
if(value instanceof Array){for(var i=0;i<value.length;i++){vParametersList.push(encodeURIComponent(vId)+"="+encodeURIComponent(value[i]));
}}else{vParametersList.push(encodeURIComponent(vId)+"="+encodeURIComponent(value));
}}
if(vParametersList.length>0){vUrl+="&"+vParametersList.join("&");
}vData=this.getData();
if(vData!=null){vUrl+="&"+qx.io.remote.ScriptTransport.ScriptTransport_DATA_PARAM+"="+encodeURIComponent(vData);
}qx.io.remote.ScriptTransport._instanceRegistry[this._uniqueId]=this;
this._element=document.createElement("script");
this._element.charset="utf-8";
this._element.src=vUrl;
{};
document.body.appendChild(this._element);
},
_switchReadyState:function(vReadyState){switch(this.getState()){case "completed":case "aborted":case "failed":case "timeout":this.warn("Ignore Ready State Change");
return;
}while(this._lastReadyState<vReadyState){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
setRequestHeader:function(vLabel,
vValue){},
getResponseHeader:function(vLabel){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return "";
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!=="completed"){{};
return null;
}{};
switch(this.getResponseType()){case qx.util.Mime.TEXT:case qx.util.Mime.JSON:case qx.util.Mime.JAVASCRIPT:{};
return this._responseContent||null;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function(statics,
members,
properties){qx.io.remote.Exchange.registerType(qx.io.remote.ScriptTransport,
"qx.io.remote.ScriptTransport");
},
destruct:function(){if(this._element){delete qx.io.remote.ScriptTransport._instanceRegistry[this._uniqueId];
document.body.removeChild(this._element);
}this._disposeFields("_element");
}});




/* ID: testrunner.test.util.DateFormat */
qx.Class.define("testrunner.test.util.DateFormat",
{extend:testrunner.TestCase,
members:{testDateParse:function(){var date=new Date(2006,
2,
14);
var formatStr="EEEE dd. MMM yyyy";
this.debug("Format string:"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"de_DE");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr="EEE dd. MM yyyy";
this.debug("Format string:"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"de_DE");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr="EE dd. M yyyy";
this.debug("Format string:"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"de_DE");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr="EEEE dd. MMM yyyy";
this.debug("Format string:"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"fr_FR");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr=qx.locale.Date.getDateFormat("medium",
"fr_FR");
this.debug("Format string 'fr_FR' 'medium':"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"fr_FR");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var date=new Date(2007,
3,
14);
this.debug('testing date format size on date '+date);
var formatStr=qx.locale.Date.getDateFormat("short",
"fr_FR");
this.debug("Format string 'fr_FR' 'short':"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"fr_FR");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr=qx.locale.Date.getDateFormat("medium",
"fr_FR");
this.debug("Format string 'fr_FR' 'medium':"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"fr_FR");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr=qx.locale.Date.getDateFormat("long",
"fr_FR");
this.debug("Format string: 'fr_FR' 'long'"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"fr_FR");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr=qx.locale.Date.getDateFormat("full",
"fr_FR");
this.debug("Format string: 'fr_FR' 'full'"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"fr_FR");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr=qx.locale.Date.getDateFormat("short",
"de_DE");
this.debug("Format string: 'de_DE' 'short'"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"de_DE");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr=qx.locale.Date.getDateFormat("medium",
"de_DE");
this.debug("Format string: 'de_DE' 'medium'"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"de_DE");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr=qx.locale.Date.getDateFormat("long",
"de_DE");
this.debug("Format string: 'de_DE' 'long'"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"de_DE");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
var formatStr=qx.locale.Date.getDateFormat("full",
"de_DE");
this.debug("Format string: 'de_DE' 'full'"+formatStr.toString());
var dateFmt=new qx.util.format.DateFormat(formatStr,
"de_DE");
dateStr=dateFmt.format(date);
this.debug("Formatted Date: "+dateStr);
var parsedDate=dateFmt.parse(dateStr);
this.debug(date+" "+parsedDate);
this.assertEquals(date.getTime(),
parsedDate.getTime());
}}});




/* ID: qx.util.format.Format */
qx.Class.define("qx.util.format.Format",
{extend:qx.core.Object,
type:"abstract",
construct:function(){arguments.callee.base.call(this);
},
members:{format:function(obj){throw new Error("format is abstract");
},
parse:function(str){throw new Error("parse is abstract");
}}});




/* ID: qx.util.format.DateFormat */
qx.Class.define("qx.util.format.DateFormat",
{extend:qx.util.format.Format,
construct:function(format,
locale){arguments.callee.base.call(this);
if(!locale){this._locale=qx.locale.Manager.getInstance().getLocale();
}else{this._locale=locale;
}
if(format!=null){this._format=format.toString();
}else{this._format=qx.locale.Date.getDateFormat("long",
this._locale)+" "+qx.locale.Date.getDateTimeFormat("HHmmss",
"HH:mm:ss",
this._locale);
}},
statics:{getDateTimeInstance:function(){var DateFormat=qx.util.format.DateFormat;
var format=qx.locale.Date.getDateFormat("long")+" "+qx.locale.Date.getDateTimeFormat("HHmmss",
"HH:mm:ss");
if(DateFormat._dateInstance==null||DateFormat._format!=format){DateFormat._dateTimeInstance=new DateFormat();
}return DateFormat._dateTimeInstance;
},
getDateInstance:function(){var DateFormat=qx.util.format.DateFormat;
var format=qx.locale.Date.getDateFormat("short")+"";
if(DateFormat._dateInstance==null||DateFormat._format!=format){DateFormat._dateInstance=new DateFormat(format);
}return DateFormat._dateInstance;
},
ASSUME_YEAR_2000_THRESHOLD:30,
LOGGING_DATE_TIME_FORMAT:"yyyy-MM-dd HH:mm:ss",
AM_MARKER:"am",
PM_MARKER:"pm",
MEDIUM_TIMEZONE_NAMES:["GMT"],
FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},
members:{__fillNumber:function(number,
minSize){var str=""+number;
while(str.length<minSize){str="0"+str;
}return str;
},
__getDayInYear:function(date){var helpDate=new Date(date.getTime());
var day=helpDate.getDate();
while(helpDate.getMonth()!=0){helpDate.setDate(-1);
day+=helpDate.getDate()+1;
}return day;
},
__thursdayOfSameWeek:function(date){return new Date(date.getTime()+(3-((date.getDay()+6)%7))*86400000);
},
__getWeekInYear:function(date){var thursdayDate=this.__thursdayOfSameWeek(date);
var weekYear=thursdayDate.getFullYear();
var thursdayWeek1=this.__thursdayOfSameWeek(new Date(weekYear,
0,
4));
return Math.floor(1.5+(thursdayDate.getTime()-thursdayWeek1.getTime())/86400000/7);
},
format:function(date){var DateFormat=qx.util.format.DateFormat;
var locale=this._locale;
var fullYear=date.getFullYear();
var month=date.getMonth();
var dayOfMonth=date.getDate();
var dayOfWeek=date.getDay();
var hours=date.getHours();
var minutes=date.getMinutes();
var seconds=date.getSeconds();
var ms=date.getMilliseconds();
var timezone=date.getTimezoneOffset()/60;
this.__initFormatTree();
var output="";
for(var i=0;i<this.__formatTree.length;i++){var currAtom=this.__formatTree[i];
if(currAtom.type=="literal"){output+=currAtom.text;
}else{var wildcardChar=currAtom.character;
var wildcardSize=currAtom.size;
var replacement="?";
switch(wildcardChar){case 'y':if(wildcardSize==2){replacement=this.__fillNumber(fullYear%100,
2);
}else if(wildcardSize==4){replacement=fullYear;
}break;
case 'D':replacement=this.__fillNumber(this.__getDayInYear(date),
wildcardSize);
break;
case 'd':replacement=this.__fillNumber(dayOfMonth,
wildcardSize);
break;
case 'w':replacement=this.__fillNumber(this.__getWeekInYear(date),
wildcardSize);
break;
case 'E':if(wildcardSize==2){replacement=qx.locale.Date.getDayName("narrow",
dayOfWeek,
locale);
}else if(wildcardSize==3){replacement=qx.locale.Date.getDayName("abbreviated",
dayOfWeek,
locale);
}else if(wildcardSize==4){replacement=qx.locale.Date.getDayName("wide",
dayOfWeek,
locale);
}break;
case 'M':if(wildcardSize==1||wildcardSize==2){replacement=this.__fillNumber(month+1,
wildcardSize);
}else if(wildcardSize==3){replacement=qx.locale.Date.getMonthName("abbreviated",
month,
locale);
}else if(wildcardSize==4){replacement=qx.locale.Date.getMonthName("wide",
month,
locale);
}break;
case 'a':replacement=(hours<12)?qx.locale.Date.getAmMarker(locale):qx.locale.Date.getPmMarker(locale);
break;
case 'H':replacement=this.__fillNumber(hours,
wildcardSize);
break;
case 'k':replacement=this.__fillNumber((hours==0)?24:hours,
wildcardSize);
break;
case 'K':replacement=this.__fillNumber(hours%12,
wildcardSize);
break;
case 'h':replacement=this.__fillNumber(((hours%12)==0)?12:(hours%12),
wildcardSize);
break;
case 'm':replacement=this.__fillNumber(minutes,
wildcardSize);
break;
case 's':replacement=this.__fillNumber(seconds,
wildcardSize);
break;
case 'S':replacement=this.__fillNumber(ms,
wildcardSize);
break;
case 'z':if(wildcardSize==1){replacement="GMT"+((timezone<0)?"-":"+")+this.__fillNumber(timezone)+":00";
}else if(wildcardSize==2){replacement=DateFormat.MEDIUM_TIMEZONE_NAMES[timezone];
}else if(wildcardSize==3){replacement=DateFormat.FULL_TIMEZONE_NAMES[timezone];
}break;
case 'Z':replacement=((timezone<0)?"-":"+")+this.__fillNumber(timezone,
2)+"00";
}output+=replacement;
}}return output;
},
parse:function(dateStr){this.__initParseFeed();
var hit=this._parseFeed.regex.exec(dateStr);
if(hit==null){throw new Error("Date string '"+dateStr+"' does not match the date format: "+this._format);
}var dateValues={year:1970,
month:0,
day:1,
hour:0,
ispm:false,
min:0,
sec:0,
ms:0};
var currGroup=1;
for(var i=0;i<this._parseFeed.usedRules.length;i++){var rule=this._parseFeed.usedRules[i];
var value=hit[currGroup];
if(rule.field!=null){dateValues[rule.field]=parseInt(value,
10);
}else{rule.manipulator(dateValues,
value);
}currGroup+=(rule.groups==null)?1:rule.groups;
}var date=new Date(dateValues.year,
dateValues.month,
dateValues.day,
(dateValues.ispm)?(dateValues.hour+12):dateValues.hour,
dateValues.min,
dateValues.sec,
dateValues.ms);
if(dateValues.month!=date.getMonth()||dateValues.year!=date.getFullYear()){throw new Error("Error parsing date '"+dateStr+"': the value for day or month is too large");
}return date;
},
__initFormatTree:function(){if(this.__formatTree!=null){return;
}this.__formatTree=[];
var currWildcardChar;
var currWildcardSize=0;
var currLiteral="";
var format=this._format;
var state="default";
var i=0;
while(i<format.length){var currChar=format.charAt(i);
switch(state){case "quoted_literal":if(currChar=="'"){if(i+1>=format.length){i++;
break;
}var lookAhead=format.charAt(i+1);
if(lookAhead=="'"){currLiteral+=currChar;
i++;
}else{i++;
state="unkown";
}}else{currLiteral+=currChar;
i++;
}break;
case "wildcard":if(currChar==currWildcardChar){currWildcardSize++;
i++;
}else{this.__formatTree.push({type:"wildcard",
character:currWildcardChar,
size:currWildcardSize});
currWildcardChar=null;
currWildcardSize=0;
state="default";
}break;
default:if((currChar>='a'&&currChar<='z')||(currChar>='A'&&currChar<='Z')){currWildcardChar=currChar;
state="wildcard";
}else if(currChar=="'"){if(i+1>=format.length){currLiteral+=currChar;
i++;
break;
}var lookAhead=format.charAt(i+1);
if(lookAhead=="'"){currLiteral+=currChar;
i++;
}i++;
state="quoted_literal";
}else{state="default";
}
if(state!="default"){if(currLiteral.length>0){this.__formatTree.push({type:"literal",
text:currLiteral});
currLiteral="";
}}else{currLiteral+=currChar;
i++;
}break;
}}if(currWildcardChar!=null){this.__formatTree.push({type:"wildcard",
character:currWildcardChar,
size:currWildcardSize});
}else if(currLiteral.length>0){this.__formatTree.push({type:"literal",
text:currLiteral});
}},
__initParseFeed:function(){if(this._parseFeed!=null){return ;
}var DateFormat=qx.util.format.DateFormat;
var format=this._format;
this.__initParseRules();
this.__initFormatTree();
var usedRules=[];
var pattern="^";
for(var atomIdx=0;atomIdx<this.__formatTree.length;atomIdx++){var currAtom=this.__formatTree[atomIdx];
if(currAtom.type=="literal"){pattern+=qx.lang.String.escapeRegexpChars(currAtom.text);
}else{var wildcardChar=currAtom.character;
var wildcardSize=currAtom.size;
var wildcardRule;
for(var ruleIdx=0;ruleIdx<this._parseRules.length;ruleIdx++){var rule=this._parseRules[ruleIdx];
if(wildcardChar==rule.pattern.charAt(0)&&wildcardSize==rule.pattern.length){wildcardRule=rule;
break;
}}if(wildcardRule==null){var wildcardStr="";
for(var i=0;i<wildcardSize;i++){wildcardStr+=wildcardChar;
}throw new Error("Malformed date format: "+format+". Wildcard "+wildcardStr+" is not supported");
}else{usedRules.push(wildcardRule);
pattern+=wildcardRule.regex;
}}}pattern+="$";
var regex;
try{regex=new RegExp(pattern);
}catch(exc){throw new Error("Malformed date format: "+format);
}this._parseFeed={regex:regex,
"usedRules":usedRules,
pattern:pattern};
},
__initParseRules:function(){var DateFormat=qx.util.format.DateFormat;
if(this._parseRules!=null){return ;
}this._parseRules=[];
var yearManipulator=function(dateValues,
value){value=parseInt(value,
10);
if(value<DateFormat.ASSUME_YEAR_2000_THRESHOLD){value+=2000;
}else if(value<100){value+=1900;
}dateValues.year=value;
};
var monthManipulator=function(dateValues,
value){dateValues.month=parseInt(value,
10)-1;
};
var ampmManipulator=function(dateValues,
value){dateValues.ispm=(value==DateFormat.PM_MARKER);
};
var noZeroHourManipulator=function(dateValues,
value){dateValues.hour=parseInt(value,
10)%24;
};
var noZeroAmPmHourManipulator=function(dateValues,
value){dateValues.hour=parseInt(value,
10)%12;
};
var shortMonthNames=qx.locale.Date.getMonthNames("abbreviated",
this._locale);
for(var i=0;i<shortMonthNames.length;i++){shortMonthNames[i]=qx.lang.String.escapeRegexpChars(shortMonthNames[i].toString());
}var self=this;
var shortMonthNamesManipulator=function(dateValues,
value){value=qx.lang.String.escapeRegexpChars(value);
dateValues.month=shortMonthNames.indexOf(value);
};
var fullMonthNames=qx.locale.Date.getMonthNames("wide",
this._locale);
for(var i=0;i<fullMonthNames.length;i++){fullMonthNames[i]=qx.lang.String.escapeRegexpChars(fullMonthNames[i].toString());
}var fullMonthNamesManipulator=function(dateValues,
value){value=qx.lang.String.escapeRegexpChars(value);
dateValues.month=fullMonthNames.indexOf(value);
};
var narrowDayNames=qx.locale.Date.getDayNames("narrow",
this._locale);
for(var i=0;i<narrowDayNames.length;i++){narrowDayNames[i]=qx.lang.String.escapeRegexpChars(narrowDayNames[i].toString());
}var narrowDayNamesManipulator=function(dateValues,
value){value=qx.lang.String.escapeRegexpChars(value);
dateValues.month=narrowDayNames.indexOf(value);
};
var abbrDayNames=qx.locale.Date.getDayNames("abbreviated",
this._locale);
for(var i=0;i<abbrDayNames.length;i++){abbrDayNames[i]=qx.lang.String.escapeRegexpChars(abbrDayNames[i].toString());
}var abbrDayNamesManipulator=function(dateValues,
value){value=qx.lang.String.escapeRegexpChars(value);
dateValues.month=abbrDayNames.indexOf(value);
};
var fullDayNames=qx.locale.Date.getDayNames("wide",
this._locale);
for(var i=0;i<fullDayNames.length;i++){fullDayNames[i]=qx.lang.String.escapeRegexpChars(fullDayNames[i].toString());
}var fullDayNamesManipulator=function(dateValues,
value){value=qx.lang.String.escapeRegexpChars(value);
dateValues.month=fullDayNames.indexOf(value);
};
this._parseRules.push({pattern:"yyyy",
regex:"(\\d\\d(\\d\\d)?)",
groups:2,
manipulator:yearManipulator});
this._parseRules.push({pattern:"yy",
regex:"(\\d\\d)",
manipulator:yearManipulator});
this._parseRules.push({pattern:"M",
regex:"(\\d\\d?)",
manipulator:monthManipulator});
this._parseRules.push({pattern:"MM",
regex:"(\\d\\d?)",
manipulator:monthManipulator});
this._parseRules.push({pattern:"MMM",
regex:"("+shortMonthNames.join("|")+")",
manipulator:shortMonthNamesManipulator});
this._parseRules.push({pattern:"MMMM",
regex:"("+fullMonthNames.join("|")+")",
manipulator:fullMonthNamesManipulator});
this._parseRules.push({pattern:"dd",
regex:"(\\d\\d?)",
field:"day"});
this._parseRules.push({pattern:"d",
regex:"(\\d\\d?)",
field:"day"});
this._parseRules.push({pattern:"EE",
regex:"("+narrowDayNames.join("|")+")",
manipulator:narrowDayNamesManipulator});
this._parseRules.push({pattern:"EEE",
regex:"("+abbrDayNames.join("|")+")",
manipulator:abbrDayNamesManipulator});
this._parseRules.push({pattern:"EEEE",
regex:"("+fullDayNames.join("|")+")",
manipulator:fullDayNamesManipulator});
this._parseRules.push({pattern:"a",
regex:"("+DateFormat.AM_MARKER+"|"+DateFormat.PM_MARKER+")",
manipulator:ampmManipulator});
this._parseRules.push({pattern:"HH",
regex:"(\\d\\d?)",
field:"hour"});
this._parseRules.push({pattern:"H",
regex:"(\\d\\d?)",
field:"hour"});
this._parseRules.push({pattern:"kk",
regex:"(\\d\\d?)",
manipulator:noZeroHourManipulator});
this._parseRules.push({pattern:"k",
regex:"(\\d\\d?)",
manipulator:noZeroHourManipulator});
this._parseRules.push({pattern:"KK",
regex:"(\\d\\d?)",
field:"hour"});
this._parseRules.push({pattern:"K",
regex:"(\\d\\d?)",
field:"hour"});
this._parseRules.push({pattern:"hh",
regex:"(\\d\\d?)",
manipulator:noZeroAmPmHourManipulator});
this._parseRules.push({pattern:"h",
regex:"(\\d\\d?)",
manipulator:noZeroAmPmHourManipulator});
this._parseRules.push({pattern:"mm",
regex:"(\\d\\d?)",
field:"min"});
this._parseRules.push({pattern:"m",
regex:"(\\d\\d?)",
field:"min"});
this._parseRules.push({pattern:"ss",
regex:"(\\d\\d?)",
field:"sec"});
this._parseRules.push({pattern:"s",
regex:"(\\d\\d?)",
field:"sec"});
this._parseRules.push({pattern:"SSS",
regex:"(\\d\\d?\\d?)",
field:"ms"});
this._parseRules.push({pattern:"SS",
regex:"(\\d\\d?\\d?)",
field:"ms"});
this._parseRules.push({pattern:"S",
regex:"(\\d\\d?\\d?)",
field:"ms"});
}},
destruct:function(){this._disposeFields("_format",
"_locale",
"__formatTree",
"_parseFeed");
}});




/* ID: qx.locale.Date */
qx.Class.define("qx.locale.Date",
{statics:{getAmMarker:function(locale){return new qx.locale.LocalizedString("cldr_am",
[],
locale);
},
getPmMarker:function(locale){return new qx.locale.LocalizedString("cldr_pm",
[],
locale);
},
getDayNames:function(length,
locale){if(length!="abbreviated"&&length!="narrow"&&length!="wide"){throw new Error('format must be one of "abbreviated", "narrow", "wide"');
}var days=["sun",
"mon",
"tue",
"wed",
"thu",
"fri",
"sat"];
var names=[];
for(var i=0;i<days.length;i++){var key="cldr_day_"+length+"_"+days[i];
names.push(new qx.locale.LocalizedString(key,
[],
locale));
}return names;
},
getDayName:function(length,
day,
locale){if(length!="abbreviated"&&length!="narrow"&&length!="wide"){throw new Error('format must be one of "abbreviated", "narrow", "wide"');
}var days=["sun",
"mon",
"tue",
"wed",
"thu",
"fri",
"sat"];
var key="cldr_day_"+length+"_"+days[day];
return new qx.locale.LocalizedString(key,
[],
locale);
},
getMonthNames:function(length,
locale){if(length!="abbreviated"&&length!="narrow"&&length!="wide"){throw new Error('format must be one of "abbreviated", "narrow", "wide"');
}var names=[];
for(var i=0;i<12;i++){var key="cldr_month_"+length+"_"+(i+1);
names.push(new qx.locale.LocalizedString(key,
[],
locale));
}return names;
},
getMonthName:function(length,
month,
locale){if(length!="abbreviated"&&length!="narrow"&&length!="wide"){throw new Error('format must be one of "abbreviated", "narrow", "wide"');
}var key="cldr_month_"+length+"_"+(month+1);
return new qx.locale.LocalizedString(key,
[],
locale);
},
getDateFormat:function(size,
locale){if(size!="short"&&size!="medium"&&size!="long"&&size!="full"){throw new Error('format must be one of "short", "medium", "long", "full"');
}var key="cldr_date_format_"+size;
return new qx.locale.LocalizedString(key,
[],
locale);
},
getDateTimeFormat:function(canonical,
fallback,
locale){var key="cldr_date_time_format_"+canonical;
var localizedFormat=qx.locale.Manager.getInstance().translate(key,
[],
locale);
if(localizedFormat==key){localizedFormat=fallback;
}return localizedFormat;
},
getTimeFormat:function(size,
locale){if(size!="short"&&size!="medium"&&size!="long"&&size!="full"){throw new Error('format must be one of "short", "medium", "long", "full"');
}var key="cldr_time_format_"+size;
var localizedFormat=qx.locale.Manager.getInstance().translate(key,
[],
locale);
if(localizedFormat!=key){return localizedFormat;
}
switch(size){case "short":case "medium":return qx.locale.Date.getDateTimeFormat("HHmm",
"HH:mm");
case "long":return qx.locale.Date.getDateTimeFormat("HHmmss",
"HH:mm:ss");
case "full":return qx.locale.Date.getDateTimeFormat("HHmmsszz",
"HH:mm:ss zz");
default:throw new Error("This case should never happen.");
}},
getWeekStart:function(locale){var weekStart={"MV":5,
"AE":6,
"AF":6,
"BH":6,
"DJ":6,
"DZ":6,
"EG":6,
"ER":6,
"ET":6,
"IQ":6,
"IR":6,
"JO":6,
"KE":6,
"KW":6,
"LB":6,
"LY":6,
"MA":6,
"OM":6,
"QA":6,
"SA":6,
"SD":6,
"SO":6,
"TN":6,
"YE":6,
"AS":0,
"AU":0,
"AZ":0,
"BW":0,
"CA":0,
"CN":0,
"FO":0,
"GE":0,
"GL":0,
"GU":0,
"HK":0,
"IE":0,
"IL":0,
"IS":0,
"JM":0,
"JP":0,
"KG":0,
"KR":0,
"LA":0,
"MH":0,
"MN":0,
"MO":0,
"MP":0,
"MT":0,
"NZ":0,
"PH":0,
"PK":0,
"SG":0,
"TH":0,
"TT":0,
"TW":0,
"UM":0,
"US":0,
"UZ":0,
"VI":0,
"ZA":0,
"ZW":0,
"ET":0,
"MW":0,
"NG":0,
"TJ":0};
var territory=qx.locale.Date._getTerritory(locale);
return weekStart[territory]!=null?weekStart[territory]:1;
},
getWeekendStart:function(locale){var weekendStart={"EG":5,
"IL":5,
"SY":5,
"IN":0,
"AE":4,
"BH":4,
"DZ":4,
"IQ":4,
"JO":4,
"KW":4,
"LB":4,
"LY":4,
"MA":4,
"OM":4,
"QA":4,
"SA":4,
"SD":4,
"TN":4,
"YE":4};
var territory=qx.locale.Date._getTerritory(locale);
return weekendStart[territory]!=null?weekendStart[territory]:6;
},
getWeekendEnd:function(locale){var weekendEnd={"AE":5,
"BH":5,
"DZ":5,
"IQ":5,
"JO":5,
"KW":5,
"LB":5,
"LY":5,
"MA":5,
"OM":5,
"QA":5,
"SA":5,
"SD":5,
"TN":5,
"YE":5,
"AF":5,
"IR":5,
"EG":6,
"IL":6,
"SY":6};
var territory=qx.locale.Date._getTerritory(locale);
return weekendEnd[territory]!=null?weekendEnd[territory]:0;
},
isWeekend:function(day,
locale){var weekendStart=qx.locale.Date.getWeekendStart(locale);
var weekendEnd=qx.locale.Date.getWeekendEnd(locale);
if(weekendEnd>weekendStart){return ((day>=weekendStart)&&(day<=weekendEnd));
}else{return ((day>=weekendStart)||(day<=weekendEnd));
}},
_getTerritory:function(locale){if(locale){var territory=locale.split("_")[1]||locale;
}else{territory=qx.locale.Manager.getInstance().getTerritory()||qx.locale.Manager.getInstance().getLanguage();
}return territory.toUpperCase();
}}});




/* ID: testrunner.test.util.NumberFormat */
qx.Class.define("testrunner.test.util.NumberFormat",
{extend:testrunner.TestCase,
members:{testNumberFormat:function(){this.assertNotUndefined(qx.util.format.NumberFormat);
qx.locale.Manager.getInstance().setLocale("de_DE");
var nf=qx.util.format.NumberFormat.getInstance();
this.assertEquals("1.000.000",
nf.format(1000000));
this.assertEquals("-1.000.000",
nf.format(-1000000));
this.assertEquals("-1.000.000",
nf.format(-1000000));
this.assertEquals("0",
nf.format(0));
this.assertEquals("0",
nf.format(-0));
this.assertEquals("12,12",
nf.format(12.12));
var ninfinity=-1/0;
this.assertEquals("-Infinity",
nf.format(ninfinity));
var infinity=1/0;
this.assertEquals("Infinity",
nf.format(infinity));
var nan=Math.sqrt(-1);
this.assertEquals("NaN",
nf.format(nan));
},
testNumberParse:function(){qx.locale.Manager.getInstance().setLocale("de_DE");
var nf=qx.util.format.NumberFormat.getInstance();
var goodNumbers={"1000":1000,
"-1.000.000":-1000000,
"+1.000,12":1000.12};
for(var number in goodNumbers){this.assertEquals(nf.parse(number),
goodNumbers[number]);
}var badNumberStrings=["2hastalavista",
"2.3.4.5.6",
"12.10,10",
"10,1,12"];
for(var i=0;i<badNumberStrings.length;i++){badNumberStr=badNumberStrings[i];
this.assertException(function(){nf.format(nf.parse(badNumberStr));
},
Error,
"does not match the number format",
"testing if parsing fails on string '"+badNumberStr+"'");
}}}});




/* ID: qx.util.format.NumberFormat */
qx.Class.define("qx.util.format.NumberFormat",
{extend:qx.util.format.Format,
construct:function(locale){arguments.callee.base.call(this);
this._locale=locale;
},
statics:{getIntegerInstance:function(){var NumberFormat=qx.util.format.NumberFormat;
if(NumberFormat._integerInstance==null){NumberFormat._integerInstance=new NumberFormat();
NumberFormat._integerInstance.setMaximumFractionDigits(0);
}return NumberFormat._integerInstance;
},
getInstance:qx.lang.Function.returnInstance},
properties:{minimumIntegerDigits:{check:"Number",
init:0},
maximumIntegerDigits:{check:"Number",
nullable:true},
minimumFractionDigits:{check:"Number",
init:0},
maximumFractionDigits:{check:"Number",
nullable:true},
groupingUsed:{check:"Boolean",
init:true},
prefix:{check:"String",
init:""},
postfix:{check:"String",
init:""}},
members:{format:function(num){var NumberFormat=qx.util.format.NumberFormat;
switch(num){case Infinity:return "Infinity";
case -Infinity:return "-Infinity";
case NaN:return "NaN";
}var negative=(num<0);
if(negative){num=-num;
}
if(this.getMaximumFractionDigits()!=null){var mover=Math.pow(10,
this.getMaximumFractionDigits());
num=Math.round(num*mover)/mover;
}var integerDigits=String(Math.floor(num)).length;
var numStr=""+num;
var integerStr=numStr.substring(0,
integerDigits);
while(integerStr.length<this.getMinimumIntegerDigits()){integerStr="0"+integerStr;
}
if(this.getMaximumIntegerDigits()!=null&&integerStr.length>this.getMaximumIntegerDigits()){integerStr=integerStr.substring(integerStr.length-this.getMaximumIntegerDigits());
}var fractionStr=numStr.substring(integerDigits+1);
while(fractionStr.length<this.getMinimumFractionDigits()){fractionStr+="0";
}
if(this.getMaximumFractionDigits()!=null&&fractionStr.length>this.getMaximumFractionDigits()){fractionStr=fractionStr.substring(0,
this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var origIntegerStr=integerStr;
integerStr="";
var groupPos;
for(groupPos=origIntegerStr.length;groupPos>3;groupPos-=3){integerStr=""+qx.locale.Number.getGroupSeparator(this._locale)+origIntegerStr.substring(groupPos-3,
groupPos)+integerStr;
}integerStr=origIntegerStr.substring(0,
groupPos)+integerStr;
}var prefix=this.getPrefix()?this.getPrefix():"";
var postfix=this.getPostfix()?this.getPostfix():"";
var str=prefix+(negative?"-":"")+integerStr;
if(fractionStr.length>0){str+=""+qx.locale.Number.getDecimalSeparator(this._locale)+fractionStr;
}str+=postfix;
return str;
},
parse:function(str){var NumberFormat=qx.util.format.NumberFormat;
var groupSepEsc=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this._locale)+"");
var decimalSepEsc=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this._locale)+"");
var regex=new RegExp("^"+qx.lang.String.escapeRegexpChars(this.getPrefix())+'([-+]){0,1}'+'([0-9]{1,3}(?:'+groupSepEsc+'{0,1}[0-9]{3}){0,})'+'('+decimalSepEsc+'\\d+){0,1}'+qx.lang.String.escapeRegexpChars(this.getPostfix())+"$");
var hit=regex.exec(str);
if(hit==null){throw new Error("Number string '"+str+"' does not match the number format");
}var negative=(hit[1]=="-");
var integerStr=hit[2];
var fractionStr=hit[3];
integerStr=integerStr.replace(new RegExp(groupSepEsc,
"g"),
"");
var asStr=(negative?"-":"")+integerStr;
if(fractionStr!=null&&fractionStr.length!=0){fractionStr=fractionStr.replace(new RegExp(decimalSepEsc),
"");
asStr+="."+fractionStr;
}return parseFloat(asStr);
}}});




/* ID: qx.locale.Number */
qx.Class.define("qx.locale.Number",
{statics:{getDecimalSeparator:function(locale){return new qx.locale.LocalizedString("cldr_number_decimal_separator",
[],
locale);
},
getGroupSeparator:function(locale){return new qx.locale.LocalizedString("cldr_number_group_separator",
[],
locale);
},
getPercentFormat:function(locale){return new qx.locale.LocalizedString("cldr_number_percent_format",
[],
locale);
}}});




/* ID: testrunner.test.Property */
qx.Class.define("testrunner.test.Property",
{extend:testrunner.TestCase,
members:{testBasic:function(){this.debug("Exec: testBasic");
this.assertNotUndefined(qx.core.Property);
var inst=new testrunner.test.PropertyHelper;
this.assertNotUndefined(inst,
"instance");
this.assertFunction(inst.setPublicProp,
"public setter");
this.assertFunction(inst.getPublicProp,
"public getter");
this.assertFunction(inst.resetPublicProp,
"public reset");
this.assertUndefined(inst.togglePublicProp,
"public toggler");
this.assertUndefined(inst.stylePublicProp,
"public style");
this.assertFunction(inst._setProtectedProp,
"protected setter");
this.assertFunction(inst._getProtectedProp,
"protected getter");
this.assertFunction(inst._resetProtectedProp,
"protected reset");
this.assertUndefined(inst._toggleProtectedProp,
"protected toggler");
this.assertUndefined(inst._styleProtectedProp,
"protected style");
this.assertFunction(inst.__setPrivateProp,
"private setter");
this.assertFunction(inst.__getPrivateProp,
"private getter");
this.assertFunction(inst.__resetPrivateProp,
"private reset");
this.assertUndefined(inst.__togglePrivateProp,
"private toggler");
this.assertUndefined(inst.__stylePrivateProp,
"private style");
this.assertFunction(inst.toggleBooleanProp,
"boolean toggler");
this.debug("Done: testBasic");
},
testBuiltinTypes:function(){this.debug("Exec: testBuiltinTypes");
this.assertNotUndefined(qx.core.Property);
var inst=new testrunner.test.PropertyHelper;
this.assertNotUndefined(inst,
"instance");
this.assertIdentical("Hello",
inst.setStringProp("Hello"),
"string property, set");
this.assertIdentical("Hello",
inst.getStringProp(),
"string property, get");
this.assertIdentical(true,
inst.setBooleanProp(true),
"boolean property, set");
this.assertIdentical(true,
inst.getBooleanProp(),
"boolean property, get");
this.assertIdentical(false,
inst.setBooleanProp(false),
"boolean property, set");
this.assertIdentical(false,
inst.getBooleanProp(),
"boolean property, get");
this.assertIdentical(3,
inst.setNumberProp(3),
"number property, set");
this.assertIdentical(3,
inst.getNumberProp(),
"number property, get");
this.assertIdentical(3.14,
inst.setNumberProp(3.14),
"number property, set");
this.assertIdentical(3.14,
inst.getNumberProp(),
"number property, get");
var obj={};
this.assertIdentical(obj,
inst.setObjectProp(obj),
"object property, set");
this.assertIdentical(obj,
inst.getObjectProp(),
"object property, get");
var obj=new Object;
this.assertIdentical(obj,
inst.setObjectProp(obj),
"object property, set");
this.assertIdentical(obj,
inst.getObjectProp(),
"object property, get");
var arr=[];
this.assertIdentical(arr,
inst.setArrayProp(arr),
"array property, set");
this.assertIdentical(arr,
inst.getArrayProp(),
"array property, get");
var arr=new Array;
this.assertIdentical(arr,
inst.setArrayProp(arr),
"array property, set");
this.assertIdentical(arr,
inst.getArrayProp(),
"array property, get");
this.debug("Done: testBuiltinTypes");
},
testInheritance:function(){this.debug("Exec: testInheritance");
this.assertNotUndefined(qx.core.Property);
var pa=new testrunner.test.Layout;
var ch1=new testrunner.test.Layout;
var ch2=new testrunner.test.Layout;
var ch3=new testrunner.test.Layout;
var chh1=new testrunner.test.Layout;
var chh2=new testrunner.test.Layout;
var chh3=new testrunner.test.Layout;
pa.add(ch1,
ch2,
ch3);
ch2.add(chh1,
chh2,
chh3);
this.assertTrue(pa._setEnabled(true),
"a1");
this.assertTrue(pa._getEnabled(),
"a2");
this.assertTrue(ch1._getEnabled(),
"a3");
this.assertTrue(ch2._getEnabled(),
"a4");
this.assertTrue(ch3._getEnabled(),
"a5");
this.assertTrue(chh1._getEnabled(),
"a6");
this.assertTrue(chh2._getEnabled(),
"a7");
this.assertTrue(chh3._getEnabled(),
"a8");
this.assertFalse(ch2._setEnabled(false),
"b1");
this.assertFalse(ch2._getEnabled(),
"b2");
this.assertFalse(chh1._getEnabled(),
"b3");
this.assertFalse(chh2._getEnabled(),
"b4");
this.assertFalse(chh3._getEnabled(),
"b5");
this.assertUndefined(ch2._resetEnabled(),
"c1");
this.assertTrue(ch2._getEnabled(),
"c2");
this.assertTrue(chh1._getEnabled(),
"c3");
this.assertTrue(chh2._getEnabled(),
"c4");
this.assertTrue(chh3._getEnabled(),
"c5");
this.debug("Done: testInheritance");
},
testParent:function(){var pa=new testrunner.test.Layout;
var ch1=new testrunner.test.Layout;
var ch2=new testrunner.test.Layout;
var ch3=new testrunner.test.Layout;
this.assertIdentical(pa._getEnabled(),
null,
"d1");
this.assertIdentical(ch1._getEnabled(),
null,
"d2");
this.assertIdentical(ch2._getEnabled(),
null,
"d3");
this.assertIdentical(ch3._getEnabled(),
null,
"d4");
ch1.setParent(pa);
this.assertTrue(pa._setEnabled(true),
"a1");
this.assertFalse(ch3._setEnabled(false),
"a2");
this.assertTrue(pa._getEnabled(),
"b1");
this.assertTrue(ch1._getEnabled(),
"b2");
this.assertIdentical(ch2._getEnabled(),
null,
"b3");
this.assertFalse(ch3._getEnabled(),
"b4");
ch2.setParent(pa);
ch3.setParent(pa);
this.assertTrue(pa._getEnabled(),
"c1");
this.assertTrue(ch1._getEnabled(),
"c2");
this.assertTrue(ch2._getEnabled(),
"c3");
this.assertFalse(ch3._getEnabled(),
"c4");
},
testMultiValues:function(){this.debug("Exec: testMultiValues");
this.assertNotUndefined(qx.core.Property);
var inst=new testrunner.test.PropertyHelper;
this.assertNotUndefined(inst,
"instance");
this.assertIdentical(inst.getInitProp(),
"foo",
"a1");
this.assertIdentical(inst.setInitProp("hello"),
"hello",
"a2");
this.assertIdentical(inst.getInitProp(),
"hello",
"a3");
this.assertIdentical(inst.resetInitProp(),
undefined,
"a4");
this.assertIdentical(inst.getInitProp(),
"foo",
"a5");
this.assertIdentical(inst.getNullProp(),
"bar",
"b1");
this.assertIdentical(inst.setNullProp("hello"),
"hello",
"b2");
this.assertIdentical(inst.getNullProp(),
"hello",
"b3");
this.assertIdentical(inst.setNullProp(null),
null,
"b4");
this.assertIdentical(inst.getNullProp(),
null,
"b5");
this.assertIdentical(inst.resetNullProp(),
undefined,
"b6");
this.assertIdentical(inst.getNullProp(),
"bar",
"b7");
this.assertIdentical(inst.styleAppearanceProp("black"),
"black",
"c1");
this.assertIdentical(inst.getAppearanceProp(),
"black",
"c2");
this.assertIdentical(inst.setAppearanceProp("white"),
"white",
"c3");
this.assertIdentical(inst.getAppearanceProp(),
"white",
"c4");
this.assertIdentical(inst.resetAppearanceProp(),
undefined,
"c5");
this.assertIdentical(inst.getAppearanceProp(),
"black",
"c6");
this.assertIdentical(inst.getNoProp(),
null,
"c1");
this.debug("Done: testMultiValues");
}}});
qx.Class.define("testrunner.test.PropertyHelper",
{extend:qx.core.Target,
properties:{legacyPure:{_legacy:true},
legacyString:{_legacy:true,
type:"string"},
legacyArray:{_legacy:true,
type:"object",
instance:"Array"},
publicProp:{nullable:true},
_protectedProp:{nullable:true},
__privateProp:{nullable:true},
stringProp:{check:"String",
nullable:true},
booleanProp:{check:"Boolean",
nullable:true},
numberProp:{check:"Number",
nullable:true},
objectProp:{check:"Object",
nullable:true},
arrayProp:{check:"Array",
nullable:true},
mapProp:{check:"Map",
nullable:true},
noProp:{check:"String",
nullable:true},
initProp:{init:"foo"},
nullProp:{init:"bar",
nullable:true},
appearanceProp:{themeable:true,
nullable:true},
fullProp:{init:100,
themeable:true}}});
qx.Class.define("testrunner.test.Layout",
{extend:qx.ui.layout.CanvasLayout,
properties:{_enabled:{inheritable:true},
_width:{inheritable:true,
themeable:true},
_height:{inheritable:true,
themeable:true},
_left:{inheritable:true,
themeable:true},
_top:{inheritable:true,
themeable:true}}});




/* ID: testrunner.test.Interface */
qx.Class.define("testrunner.test.Interface",
{extend:testrunner.TestCase,
members:{testInterface:function(){qx.Interface.define("testrunner.ICar",
{members:{startEngine:function(){return true;
}},
properties:{color:{}}});
this.assertExceptionDebugOn(function(){var i=new testrunner.ICar();
},
Error);
qx.Class.define("testrunner.Audi",
{extend:Object,
construct:function(){},
implement:[testrunner.ICar],
members:{startEngine:function(){return "start";
}},
statics:{honk:function(){return "honk";
}},
properties:{color:{_legacy:true}}});
var audi=new testrunner.Audi("audi");
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Audi1",
{extend:Object,
construct:function(){},
implement:[testrunner.ICar]});
},
Error,
new RegExp('Implementation of method .* is missing'));
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Audi2",
{extend:Object,
construct:function(){},
implement:[testrunner.ICar],
statics:{honk:function(){return "honk";
}},
properties:{color:{_legacy:true}}});
},
Error,
'Implementation of method "startEngine" is missing');
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Audi4",
{extend:Object,
construct:function(){},
implement:[testrunner.ICar],
members:{startEngine:function(){return "start";
}},
statics:{honk:function(){return "honk";
}}});
},
Error,
new RegExp("property .* not supported"));
},
testAssertions:function(){qx.Interface.define("testrunner.IComplex",
{members:{add:function(a){return (arguments.length==1&&qx.Class.implementsInterface(a.constructor,
testrunner.IComplex));
},
setReal:function(r){return arguments.length==1&&typeof (r)=="number";
},
abs:function(){return arguments[0]==undefined;
}}});
qx.Class.define("testrunner.Complex",
{extend:Object,
implement:testrunner.IComplex,
construct:function(real,
imag){this._real=real;
this._imag=imag;
},
members:{add:function(a){this._real+=a._real;
this._imag+=a._imag;
},
setReal:function(r){this._real=r;
},
abs:function(){return Math.sqrt((this._real*this._real)+(this._imag+this._imag));
},
toString:function(){return this._real+"+"+this._imag+"i";
}}});
var a=new testrunner.Complex(1,
1);
var b=new testrunner.Complex(2,
-3.4);
a.add(b);
a.setReal(20);
a.abs();
this.assertExceptionDebugOn(function(){a.add(b,
b);
},
Error,
"Pre condition of method",
"a");
this.assertExceptionDebugOn(function(){a.setReal();
},
Error,
"Pre condition of method",
"b");
this.assertExceptionDebugOn(function(){a.setReal(1,
2);
},
Error,
"Pre condition of method",
"c");
this.assertExceptionDebugOn(function(){a.setReal("Juhu");
},
Error,
"Pre condition of method",
"d");
this.assertExceptionDebugOn(function(){a.abs({});
},
Error,
"Pre condition of method",
"e");
this.assertExceptionDebugOn(function(){a.add("Juhu");
},
Error,
"Pre condition of method",
"f");
},
testIncludes:function(){qx.Interface.define("testrunner.IMember",
{members:{sayJuhu:function(){return true;
}}});
qx.Interface.define("testrunner.IProperties",
{properties:{"color":{},
"name":{}}});
qx.Interface.define("testrunner.IAll",
{extend:[testrunner.IMember,
testrunner.IProperties]});
qx.Interface.define("testrunner.IOther",
{members:{bar:function(){return true;
}}});
var classDef={extend:Object,
implement:testrunner.IAll,
members:{sayJuhu:function(){}},
statics:{sayHello:function(){return true;
}},
properties:{"color":{_legacy:true},
"name":{_legacy:true}}};
var def=qx.lang.Object.copy(classDef);
qx.Class.define("testrunner.Implement1",
def);
this.assertTrue(qx.Class.implementsInterface(testrunner.Implement1,
testrunner.IAll),
"implements IAll");
this.assertTrue(qx.Class.implementsInterface(testrunner.Implement1,
testrunner.IMember),
"implements IMember");
this.assertTrue(qx.Class.implementsInterface(testrunner.Implement1,
testrunner.IProperties),
"implements IProperties");
this.assertFalse(qx.Class.implementsInterface(testrunner.Implement1,
testrunner.IOther),
"not implements IOther");
var def=qx.lang.Object.copy(classDef);
delete (def.members);
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Implement2",
def);
},
Error,
"Implementation of method",
"No members defined.");
var def=qx.lang.Object.copy(classDef);
delete (def.properties);
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Implement4",
def);
},
Error,
new RegExp("property .* is not supported"),
"No properties defined.");
}}});




/* ID: testrunner.test.Class */
qx.Class.define("testrunner.test.Class",
{extend:testrunner.TestCase,
members:{testEmptyClass:function(){qx.Class.define("testrunner.Empty",
{extend:Object,
construct:function(){}});
var empty=new testrunner.Empty();
this.assertEquals("object",
typeof (empty));
this.assertTrue(empty instanceof testrunner.Empty);
},
testSameNameClasses:function(){qx.Class.define("testrunner.Same",
{extend:Object,
construct:function(){}});
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Same",
{extend:Object,
construct:function(){}});
},
Error,
"An object of the name 'testrunner.Same' already exists and overwriting is not allowed!");
},
testSuperClassCall:function(){qx.Class.define("testrunner.Car",
{extend:qx.core.Object,
construct:function(name){this._name=name;
},
members:{startEngine:function(){return "start";
},
stopEngine:function(){return "stop";
},
getName:function(){return this._name;
}}});
var car=new testrunner.Car("Audi");
this.assertEquals("start",
car.startEngine());
this.assertEquals("stop",
car.stopEngine());
this.assertEquals("Audi",
car.getName());
qx.Class.define("testrunner.Bmw",
{extend:testrunner.Car,
construct:function(name,
prize){arguments.callee.base.call(this,
name);
},
members:{startEngine:function(){var ret=arguments.callee.base.call(this);
return "brrr "+ret;
},
stopEngine:function(){var ret=arguments.callee.base.call();
return "brrr "+ret;
},
getWheels:function(){return arguments.callee.self.WHEELS;
}},
statics:{WHEELS:4}});
var bmw=new testrunner.Bmw("bmw",
44000);
this.assertEquals("bmw",
bmw.getName());
this.assertEquals("brrr start",
bmw.startEngine());
this.assertEquals("brrr stop",
bmw.stopEngine());
this.assertEquals(4,
bmw.getWheels());
},
testAbstract:function(){qx.Class.define("testrunner.AbstractCar",
{extend:Object,
type:"abstract",
construct:function(color){this._color=color;
},
members:{startEngine:function(){}}});
this.assertExceptionDebugOn(function(){var car=new testrunner.AbstractCar("blue");
},
Error,
new RegExp("The class .* is abstract"));
qx.Class.define("testrunner.ConcreteCar",
{extend:testrunner.AbstractCar,
construct:function(color){arguments.callee.base.apply(this,
arguments);
}});
var car=new testrunner.ConcreteCar("red");
this.assertNotUndefined(car);
this.assertEquals("red",
car._color);
},
testSingleton:function(){qx.Class.define("testrunner.Single1",
{extend:Object,
type:"singleton",
construct:function(name){this._name=name;
this._date=new Date().toString();
}});
this.assertEquals(testrunner.Single1.getInstance()._date,
testrunner.Single1.getInstance()._date,
"getInstance sould always return the same object!");
this.assertExceptionDebugOn(function(){var s=new testrunner.Single1();
},
Error,
new RegExp("The class .* is a singleton"));
},
testSetting:function(){qx.Class.define("testrunner.Setting1",
{settings:{"testrunner.juhu":"kinners"}});
this.assertEquals("kinners",
qx.core.Setting.get("testrunner.juhu"));
},
testVariant:function(){qx.Class.define("testrunner.Variant1",
{variants:{"testrunner.juhu":{allowedValues:["kinners",
"juhu"],
defaultValue:"kinners"}}});
this.assertEquals("kinners",
qx.core.Variant.get("testrunner.juhu"));
this.assertExceptionDebugOn(function(){qx.Class.define("testrunner.Variant2",
{variants:{"foo.juhu":{allowedValues:["kinners",
"juhu"],
defaultValue:"kinners"}}});
},
Error,
"Forbidden variant");
},
testDefer:function(){qx.Class.define("testrunner.Defer",
{extend:qx.core.Object,
defer:function(statics,
prot,
properties){statics.FOO=12;
statics.sayHello=function(){return "Hello";
};
prot.sayJuhu=function(){return "Juhu";
};
properties.add("color",
{});
}});
this.assertEquals(12,
testrunner.Defer.FOO);
this.assertEquals("Hello",
testrunner.Defer.sayHello());
var defer=new testrunner.Defer();
this.assertEquals("Juhu",
defer.sayJuhu());
defer.setColor("red");
this.assertEquals("red",
defer.getColor());
},
__testCaller:function(){qx.Class.define("testrunner.CallerSuper",
{extend:qx.core.Object,
members:{__foo:function(){this.debug("foo");
},
_bar:function(){console.log("%o",
arguments.callee.context);
this.__foo();
},
juhu:function(){this._bar();
}},
statics:{sayFoo:function(){this.__staticFoo();
},
__staticFoo:function(){new qx.core.Object().debug("static foo");
}}});
testrunner.CallerSuper.sayFoo();
this.assertException(function(){testrunner.CallerSuper.__staticFoo();
},
Error,
"Private method",
"call private static");
var caller=new testrunner.CallerSuper();
this.assertException(function(){caller._bar();
},
Error,
"Protected method",
"call protected member");
this.assertException(function(){caller.__foo();
},
Error,
"Private method",
"call private member");
qx.Class.define("testrunner.CallerChild",
{extend:testrunner.CallerSuper,
members:{__foo:function(){this.debug("child foo");
},
kinners:function(){this.__foo();
}}});
var caller=new testrunner.CallerChild();
caller.juhu();
this.assertException(function(){caller.kinners();
},
Error,
"Private method",
"call private member of super class");
},
__testWrappedPrivate:function(){qx.Interface.define("testrunner.IWrappedPrivate",
{members:{__foo:function(){return true;
}}});
qx.Class.define("testrunner.WrappedPrivate",
{extend:qx.core.Object,
implement:[testrunner.IWrappedPrivate],
members:{__foo:function(){this.debug("foo");
},
sayFoo:function(){this.__foo();
}}});
var wp=new testrunner.WrappedPrivate();
this.assertException(function(){wp.__foo();
},
Error,
"Private method");
wp.sayFoo();
},
testGetFunctionName:function(){var self=this;
qx.Class.define("testrunner.FuncName",
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
self.assertEquals("construct",
qx.dev.Debug.getFunctionName(arguments.callee));
},
members:{__foo:function(){self.assertEqualsDebugOn("__foo",
qx.dev.Debug.getFunctionName(arguments.callee));
},
_bar:function(){self.assertEquals("_bar",
qx.dev.Debug.getFunctionName(arguments.callee));
},
sayFooBar:function(){self.assertEquals("sayFooBar",
qx.dev.Debug.getFunctionName(arguments.callee));
this.__foo();
this._bar();
}}});
var funcName=new testrunner.FuncName();
funcName.sayFooBar();
this.assertNull(qx.dev.Debug.getFunctionName(function(){}));
}}});




/* ID: qx.dev.Debug */
qx.Class.define("qx.dev.Debug",
{statics:{debugObject:function(obj,
initialMessage,
maxLevel,
appender){logger=new qx.log.Logger("Debug",
qx.log.Logger.ROOT_LOGGER);
if(!maxLevel){maxLevel=10;
}if(appender){logger.removeAllAppenders();
logger.addAppender(appender);
}var message="";
var displayObj=function(obj,
level,
maxLevel){var indentStr="";
for(var i=0;i<level;i++){indentStr+="  ";
}if(level>maxLevel){message+=indentStr+"*** TOO MUCH RECURSION: not displaying ***\n";
return;
}if(typeof (obj)!="object"){message+=indentStr+obj+"\n";
return;
}for(var prop in obj){if(typeof (obj[prop])=="object"){if(obj[prop] instanceof Array){message+=indentStr+prop+": "+"Array"+"\n";
}else{message+=indentStr+prop+": "+"Object"+"\n";
}displayObj(obj[prop],
level+1,
maxLevel);
}else{message+=indentStr+prop+": "+obj[prop]+"\n";
}}};
if(initialMessage){message+=initialMessage+"\n";
}
if(obj instanceof Array){message+="Array, length="+obj.length+":\n";
}else if(typeof (obj)=="object"){var count=0;
for(prop in obj){count++;
}message+="Object, count="+count+":\n";
}message+="------------------------------------------------------------\n";
try{displayObj(obj,
0,
maxLevel);
}catch(ex){message+="*** EXCEPTION ("+ex+") ***\n";
}message+="============================================================\n";
logger.debug(message);
},
getFunctionName:function(func,
functionType){var clazz=func.self;
if(!clazz){return null;
}while(func.wrapper){func=func.wrapper;
}
switch(functionType){case "construct":return func==clazz?"construct":null;
case "members":return qx.lang.Object.getKeyFromValue(clazz,
func);
case "statics":return qx.lang.Object.getKeyFromValue(clazz.prototype,
func);
default:if(func==clazz){return "construct";
}return (qx.lang.Object.getKeyFromValue(clazz.prototype,
func)||qx.lang.Object.getKeyFromValue(clazz,
func)||null);
}}}});




/* ID: testrunner.test.renderer.Color */
qx.Class.define("testrunner.test.renderer.Color",
{extend:testrunner.TestCase,
members:{__testColor:function(){this.assertNotUndefined(qx.renderer.color.Color);
var Color=qx.renderer.color.Color;
var c=new Color("red");
this.assertEquals("red",
c.getStyle());
this.assertEquals("red",
c.getValue());
this.assertEquals(255,
c.getRed());
this.assertEquals(0,
c.getGreen());
this.assertEquals(0,
c.getBlue());
var c=new Color("sienna");
this.assertEquals("sienna",
c.getStyle());
this.assertEquals("sienna",
c.getValue());
this.assertEquals("#a0522d",
c.getHex());
this.assertEquals(160,
c.getRed());
this.assertEquals(82,
c.getGreen());
this.assertEquals(45,
c.getBlue());
var c=new Color("#a0522d");
this.assertTrue(("rgb(160,82,45)"==c.getStyle())||("#a0522d"==c.getStyle()));
this.assertEquals("#a0522d",
c.getValue());
this.assertEquals("#a0522d",
c.getHex());
this.assertEquals(160,
c.getRed());
this.assertEquals(82,
c.getGreen());
this.assertEquals(45,
c.getBlue());
var c=new Color("rgb(160,82,45)");
this.assertEquals("rgb(160,82,45)",
c.getStyle());
this.assertEquals("rgb(160,82,45)",
c.getValue());
this.assertEquals("#a0522d",
c.getHex());
this.assertEquals(160,
c.getRed());
this.assertEquals(82,
c.getGreen());
this.assertEquals(45,
c.getBlue());
var c=new Color([160,
82,
45]);
this.assertEquals("rgb(160,82,45)",
c.getStyle());
this.assertEquals("#a0522d",
c.getHex());
this.assertEquals(160,
c.getRed());
this.assertEquals(82,
c.getGreen());
this.assertEquals(45,
c.getBlue());
var c=new Color("#FF0101");
this.assertTrue(("rgb(255,1,1)"==c.getStyle())||("#FF0101"==c.getStyle()));
this.assertEquals("#ff0101",
c.getHex().toLowerCase());
this.assertEquals(255,
c.getRed());
this.assertEquals(1,
c.getGreen());
this.assertEquals(1,
c.getBlue());
var c=new Color("#FED");
this.assertTrue(("rgb(255,238,221)"==c.getStyle())||("#FED"==c.getStyle()));
this.assertEquals(255,
c.getRed());
this.assertEquals(238,
c.getGreen());
this.assertEquals(221,
c.getBlue());
var error=false;
try{var c=new Color("activeborder");
}catch(e){error=true;
}this.assertTrue(error);
var error=false;
try{var c=new Color("#FFGFF");
}catch(e){error=true;
}this.assertTrue(error);
var error=false;
try{var c=new Color("bla");
}catch(e){error=true;
}this.assertTrue(error);
var error=false;
try{var c=new Color([1,
2]);
}catch(e){error=true;
}this.assertTrue(error);
var error=false;
try{var c=new Color([1,
2,
3,
4]);
}catch(e){error=true;
}this.assertTrue(error);
var error=false;
try{var c=new Color([1,
2,
300]);
}catch(e){error=true;
}this.assertTrue(error);
var c=Color.fromRandom();
this.assertTrue(c instanceof Color);
var c=Color.fromString("#123");
this.assertTrue(c instanceof Color);
this.assertEquals("rgb(1,2,3)",
Color.rgb2style(1,
2,
3));
}}});




/* ID: testrunner.test.util.Validation */
qx.Class.define("testrunner.test.util.Validation",
{extend:testrunner.TestCase,
members:{testUmlauts:function(){this.assertEquals("aouAOUs",
qx.util.Normalization.umlautsShort("äöüÄÖÜß"));
this.assertEquals("aeoeueAeOeUess",
qx.util.Normalization.umlautsLong("äöüÄÖÜß"));
}}});




/* ID: qx.util.Normalization */
qx.Class.define("qx.util.Normalization",
{statics:{__umlautsRegExp:new RegExp("[\xE4\xF6\xFC\xDF\xC4\xD6\xDC]",
"g"),
__umlautsShortData:{"\xC4":"A",
"\xD6":"O",
"\xDC":"U",
"\xE4":"a",
"\xF6":"o",
"\xFC":"u",
"\xDF":"s"},
__umlautsShort:function(vChar){return qx.util.Normalization.__umlautsShortData[vChar];
},
umlautsShort:function(vString){return vString.replace(qx.util.Normalization.__umlautsRegExp,
qx.lang.Function.bind(this.__umlautsShort,
this));
},
__umlautsLongData:{"\xC4":"Ae",
"\xD6":"Oe",
"\xDC":"Ue",
"\xE4":"ae",
"\xF6":"oe",
"\xFC":"ue",
"\xDF":"ss"},
__umlautsLong:function(vChar){return qx.util.Normalization.__umlautsLongData[vChar];
},
umlautsLong:function(vString){return vString.replace(qx.util.Normalization.__umlautsRegExp,
qx.lang.Function.bind(this.__umlautsLong,
this));
}}});

