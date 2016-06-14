(function(){var a="[Class ",
b="toString",
c="qx.Bootstrap",
d="]",
e="Class",
f=".";
qx={Bootstrap:{genericToString:function(){return a+this.classname+d;
},
createNamespace:function(g,
h){var j=g.split(f);
var k=window;
var l=j[0];
for(var m=0,
n=j.length-1;m<n;m++,
l=j[m]){if(!k[l]){k=k[l]={};
}else{k=k[l];
}}k[l]=h;
return l;
},
define:function(g,
o){if(!o){var o={statics:{}};
}var p;
var q=null;
if(o.members){p=o.construct||new Function;
var r=o.statics;
for(var s in r){p[s]=r[s];
}q=p.prototype;
var t=o.members;
for(var s in t){q[s]=t[s];
}}else{p=o.statics||{};
}var u=this.createNamespace(g,
p);
p.name=p.classname=g;
p.basename=u;
p.$$type=e;
if(!p.hasOwnProperty(b)){p.toString=this.genericToString;
}if(o.defer){o.defer(p,
q);
}qx.Bootstrap.$$registry[g]=o.statics;
}}};
qx.Bootstrap.define(c,
{statics:{LOADSTART:new Date,
createNamespace:qx.Bootstrap.createNamespace,
define:qx.Bootstrap.define,
genericToString:qx.Bootstrap.genericToString,
getByName:function(g){return this.$$registry[g];
},
$$registry:{}}});
})();
(function(){var a="qx.allowUrlSettings",
b="&",
c="qx.core.Setting",
d="qx.allowUrlVariants",
e="qxsetting",
f=":",
g=".";
qx.Bootstrap.define(c,
{statics:{__a:{},
define:function(h,
j){if(j===undefined){throw new Error('Default value of setting "'+h+'" must be defined!');
}
if(!this.__a[h]){this.__a[h]={};
}else if(this.__a[h].defaultValue!==undefined){throw new Error('Setting "'+h+'" is already defined!');
}this.__a[h].defaultValue=j;
},
get:function(h){var k=this.__a[h];
if(k===undefined){throw new Error('Setting "'+h+'" is not defined.');
}
if(k.value!==undefined){return k.value;
}return k.defaultValue;
},
__b:function(){if(window.qxsettings){for(var h in qxsettings){if((h.split(g)).length<2){throw new Error('Malformed settings key "'+h+'". Must be following the schema "namespace.key".');
}
if(!this.__a[h]){this.__a[h]={};
}this.__a[h].value=qxsettings[h];
}window.qxsettings=undefined;
try{delete window.qxsettings;
}catch(ex){}this.__c();
}},
__c:function(){if(this.get(a)!=true){return;
}var l=document.location.search.slice(1).split(b);
for(var m=0;m<l.length;m++){var n=l[m].split(f);
if(n.length!=3||n[0]!=e){continue;
}var h=n[1];
if(!this.__a[h]){this.__a[h]={};
}this.__a[h].value=decodeURIComponent(n[2]);
}}},
defer:function(o){o.define(a,
false);
o.define(d,
false);
o.__b();
}});
})();
(function(){var a="gecko",
b="[^\\.0-9]",
c="mshtml",
d="unknown",
e="Adobe Systems Incorporated",
f="webkit",
g="Gecko",
h="opera",
i="Apple Computer, Inc.",
j="0.0.0",
k=".",
l="qx.bom.client.Engine";
qx.Bootstrap.define(l,
{statics:{NAME:"",
FULLVERSION:"0.0.0",
VERSION:0.0,
OPERA:false,
WEBKIT:false,
GECKO:false,
MSHTML:false,
__d:function(){var m=d;
var n=j;
var o=navigator.userAgent;
if(window.opera){m=h;
this.OPERA=true;
if(/Opera[\s\/]([0-9\.]*)/.test(o)){n=RegExp.$1.substring(0,
3)+k+RegExp.$1.substring(3);
}else{throw new Error("Could not detect Opera version: "+o+"!");
}}else if(navigator.vendor&&(navigator.vendor===i||navigator.vendor===e)){m=f;
this.WEBKIT=true;
if(/AppleWebKit\/([^ ]+)/.test(o)){n=RegExp.$1;
var p=RegExp(b).exec(n);
if(p){n=n.slice(0,
p.index);
}}else{throw new Error("Could not detect Webkit version: "+o+"!");
}}else if(window.controllers&&navigator.product===g){m=a;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(o)){n=RegExp.$1;
}else{throw new Error("Could not detect Gecko version: "+o+"!");
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(o)){m=c;
n=RegExp.$1;
this.MSHTML=true;
}else{throw new Error("Unsupported client: "+o+"!");
}this.NAME=m;
this.FULLVERSION=n;
this.VERSION=parseFloat(n);
}},
defer:function(q){q.__d();
}});
})();
(function(){var a="on",
b="off",
c="default",
d="|",
e="object",
f="qxvariant",
g="qx.client",
h="qx.aspects",
j="qx.dynamicLocaleSwitch",
k="qx.debug",
m=":",
n="&",
o="qx.eventMonitorNoListeners",
p="qx.core.Variant",
q="gecko",
r="qx.compatibility",
s="$",
t="qx.allowUrlVariants",
u="qx.deprecationWarnings",
w="webkit",
x="opera",
y="mshtml";
qx.Bootstrap.define(p,
{statics:{__e:{},
__f:{},
compilerIsSet:function(){return true;
},
define:function(z,
A,
B){{};
if(!this.__e[z]){this.__e[z]={};
}else{}this.__e[z].allowedValues=A;
this.__e[z].defaultValue=B;
},
get:function(z){var C=this.__e[z];
{};
if(C.value!==undefined){return C.value;
}return C.defaultValue;
},
__g:function(){if(window.qxvariants){for(var z in qxvariants){{};
if(!this.__e[z]){this.__e[z]={};
}this.__e[z].value=qxvariants[z];
}window.qxvariants=undefined;
try{delete window.qxvariants;
}catch(ex){}this.__h(this.__e);
}},
__h:function(){if(qx.core.Setting.get(t)!=true){return;
}var D=document.location.search.slice(1).split(n);
for(var E=0;E<D.length;E++){var F=D[E].split(m);
if(F.length!=3||F[0]!=f){continue;
}var z=F[1];
if(!this.__e[z]){this.__e[z]={};
}this.__e[z].value=decodeURIComponent(F[2]);
}},
select:function(z,
G){{};
for(var F in G){if(this.isSet(z,
F)){return G[F];
}}
if(G[c]!==undefined){return G[c];
}{};
},
isSet:function(z,
H){var I=z+s+H;
if(this.__f[I]!==undefined){return this.__f[I];
}var J=false;
if(H.indexOf(d)<0){J=this.get(z)===H;
}else{var K=H.split(d);
for(var E=0,
L=K.length;E<L;E++){if(this.get(z)===K[E]){J=true;
break;
}}}this.__f[I]=J;
return J;
},
__i:function(M){return typeof M===e&&M!==null&&M instanceof Array;
},
__j:function(M){return typeof M===e&&M!==null&&!(M instanceof Array);
},
__k:function(N,
O){for(var E=0,
L=N.length;E<L;E++){if(N[E]==O){return true;
}}return false;
}},
defer:function(P){P.define(g,
[q,
y,
x,
w],
qx.bom.client.Engine.NAME);
P.define(k,
[a,
b],
a);
P.define(r,
[a,
b],
a);
P.define(o,
[a,
b],
b);
P.define(h,
[a,
b],
b);
P.define(u,
[a,
b],
a);
P.define(j,
[a,
b],
a);
P.__g();
}});
})();
(function(){var b='"',
c="valueOf",
d="toLocaleString",
e="isPrototypeOf",
f="",
g="toString",
h="qx.client",
j="qx.lang.Object",
k='\", "',
m="hasOwnProperty";
qx.Bootstrap.define(j,
{statics:{isEmpty:function(n){for(var o in n){return false;
}return true;
},
hasMinLength:function(n,
p){var q=0;
for(var o in n){if((++q)>=p){return true;
}}return false;
},
getLength:function(n){var q=0;
for(var o in n){q++;
}return q;
},
_shadowedKeys:[e,
m,
d,
g,
c],
getKeys:qx.core.Variant.select(h,
{"mshtml":function(n){var r=[];
for(var o in n){r.push(o);
}for(var q=0,
s=this._shadowedKeys,
t=s.length;q<t;q++){if(n.hasOwnProperty(s[q])){r.push(s[q]);
}}return r;
},
"default":function(n){var r=[];
for(var o in n){r.push(o);
}return r;
}}),
getKeysAsString:function(n){var u=qx.lang.Object.getKeys(n);
if(u.length==0){return f;
}return b+u.join(k)+b;
},
getValues:function(n){var r=[];
for(var o in n){r.push(n[o]);
}return r;
},
mergeWith:function(v,
w,
x){if(x===undefined){x=true;
}
for(var o in w){if(x||v[o]===undefined){v[o]=w[o];
}}return v;
},
carefullyMergeWith:function(v,
w){return qx.lang.Object.mergeWith(v,
w,
false);
},
merge:function(v,
y){var z=arguments.length;
for(var q=1;q<z;q++){qx.lang.Object.mergeWith(v,
arguments[q]);
}return v;
},
copy:function(w){var A={};
for(var o in w){A[o]=w[o];
}return A;
},
invert:function(n){var B={};
for(var o in n){B[n[o].toString()]=o;
}return B;
},
getKeyFromValue:function(C,
D){for(var o in C){if(C[o]===D){return o;
}}return null;
},
select:function(o,
n){return n[o];
},
fromArray:function(E){var C={};
for(var q=0,
t=E.length;q<t;q++){{};
C[E[q].toString()]=true;
}return C;
}}});
})();
(function(){var a="qx.core.Aspect",
b="before",
c="*",
d="static";
qx.Bootstrap.define(a,
{statics:{__l:[],
wrap:function(e,
f,
g){var h=[];
var j=[];
var k=this.__l;
var l;
for(var m=0;m<k.length;m++){l=k[m];
if((l.type==null||g==l.type||l.type==c)&&(l.name==null||e.match(l.name))){l.pos==-1?h.push(l.fcn):j.push(l.fcn);
}}
if(h.length===0&&j.length===0){return f;
}var n=function(){for(var m=0;m<h.length;m++){h[m].call(this,
e,
f,
g,
arguments);
}var o=f.apply(this,
arguments);
for(var m=0;m<j.length;m++){j[m].call(this,
e,
f,
g,
arguments,
o);
}return o;
};
if(g!==d){n.self=f.self;
n.base=f.base;
}f.wrapper=n;
n.original=f;
return n;
},
addAdvice:function(f,
p,
g,
q){this.__l.push({fcn:f,
pos:p===b?-1:1,
type:g,
name:q});
}}});
})();
(function(){var b="qx.aspects",
c=".",
d="on",
e="static",
f="[Class ",
g="]",
h="toString",
j="member",
k="$$init_",
m="destructor",
n="extend",
o="Class",
p="off",
q="qx.Class",
r="qx.event.type.Data";
qx.Bootstrap.define(q,
{statics:{define:function(s,
t){if(!t){var t={};
}if(t.include&&!(t.include instanceof Array)){t.include=[t.include];
}if(t.implement&&!(t.implement instanceof Array)){t.implement=[t.implement];
}if(!t.hasOwnProperty(n)&&!t.type){t.type=e;
}{};
var u=this.__q(s,
t.type,
t.extend,
t.statics,
t.construct,
t.destruct);
if(t.extend){if(t.properties){this.__s(u,
t.properties,
true);
}if(t.members){this.__u(u,
t.members,
true,
true,
false);
}if(t.events){this.__r(u,
t.events,
true);
}if(t.include){for(var v=0,
w=t.include.length;v<w;v++){this.__x(u,
t.include[v],
false);
}}}if(t.settings){for(var x in t.settings){qx.core.Setting.define(x,
t.settings[x]);
}}if(t.variants){for(var x in t.variants){qx.core.Variant.define(x,
t.variants[x].allowedValues,
t.variants[x].defaultValue);
}}if(t.implement){for(var v=0,
w=t.implement.length;v<w;v++){this.__w(u,
t.implement[v]);
}}{};
if(t.defer){t.defer.self=u;
t.defer(u,
u.prototype,
{add:function(s,
t){var y={};
y[s]=t;
qx.Class.__s(u,
y,
true);
}});
}},
isDefined:function(s){return this.getByName(s)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
getByName:function(s){return this.$$registry[s];
},
include:function(u,
z){{};
qx.Class.__x(u,
z,
false);
},
patch:function(u,
z){{};
qx.Class.__x(u,
z,
true);
},
isSubClassOf:function(u,
A){if(!u){return false;
}
if(u==A){return true;
}
if(u.prototype instanceof A){return true;
}return false;
},
getPropertyDefinition:function(u,
s){while(u){if(u.$$properties&&u.$$properties[s]){return u.$$properties[s];
}u=u.superclass;
}return null;
},
getProperties:function(u){var B=[];
while(u){if(u.$$properties){B.push.apply(B,
qx.lang.Object.getKeys(u.$$properties));
}u=u.superclass;
}return B;
},
getByProperty:function(u,
s){while(u){if(u.$$properties&&u.$$properties[s]){return u;
}u=u.superclass;
}return null;
},
hasProperty:function(u,
s){return !!this.getPropertyDefinition(u,
s);
},
getEventType:function(u,
s){var u=u.constructor;
while(u.superclass){if(u.$$events&&u.$$events[s]!==undefined){return u.$$events[s];
}u=u.superclass;
}return null;
},
supportsEvent:function(u,
s){return !!this.getEventType(u,
s);
},
hasOwnMixin:function(u,
z){return u.$$includes&&u.$$includes.indexOf(z)!==-1;
},
getByMixin:function(u,
z){var B,
v,
w;
while(u){if(u.$$includes){B=u.$$flatIncludes;
for(v=0,
w=B.length;v<w;v++){if(B[v]===z){return u;
}}}u=u.superclass;
}return null;
},
getMixins:function(u){var B=[];
while(u){if(u.$$includes){B.push.apply(B,
u.$$flatIncludes);
}u=u.superclass;
}return B;
},
hasMixin:function(u,
z){return !!this.getByMixin(u,
z);
},
hasOwnInterface:function(u,
C){return u.$$implements&&u.$$implements.indexOf(C)!==-1;
},
getByInterface:function(u,
C){var B,
v,
w;
while(u){if(u.$$implements){B=u.$$flatImplements;
for(v=0,
w=B.length;v<w;v++){if(B[v]===C){return u;
}}}u=u.superclass;
}return null;
},
getInterfaces:function(u){var B=[];
while(u){if(u.$$implements){B.push.apply(B,
u.$$flatImplements);
}u=u.superclass;
}return B;
},
hasInterface:function(u,
C){return !!this.getByInterface(u,
C);
},
implementsInterface:function(u,
C){if(this.hasInterface(u,
C)){return true;
}
try{qx.Interface.assert(u,
C,
false);
return true;
}catch(ex){}return false;
},
getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},
genericToString:function(){return f+this.classname+g;
},
$$registry:qx.Bootstrap.$$registry,
__m:null,
__n:null,
__o:function(){},
__p:function(){},
__q:function(s,
D,
E,
F,
G,
H){var u;
if(!E&&qx.core.Variant.isSet(b,
p)){u=F||{};
}else{u={};
if(E){if(!G){G=this.__y();
}u=this.__A(G,
s,
D);
}if(F){var x;
for(var v=0,
I=qx.lang.Object.getKeys(F),
w=I.length;v<w;v++){x=I[v];
if(qx.core.Variant.isSet(b,
d)){var J=F[x];
if(J instanceof Function){J=qx.core.Aspect.wrap(s+c+x,
J,
e);
}u[x]=J;
}else{u[x]=F[x];
}}}}var K=qx.Bootstrap.createNamespace(s,
u,
false);
u.name=u.classname=s;
u.basename=K;
u.$$type=o;
if(D){u.$$classtype=D;
}if(!u.hasOwnProperty(h)){u.toString=this.genericToString;
}
if(E){var L=E.prototype;
var M=this.__z();
M.prototype=L;
var N=new M;
u.prototype=N;
N.name=N.classname=s;
N.basename=K;
G.base=u.superclass=E;
G.self=u.constructor=N.constructor=u;
if(H){if(qx.core.Variant.isSet(b,
d)){H=qx.core.Aspect.wrap(s,
H,
m);
}u.$$destructor=H;
}}this.$$registry[s]=u;
return u;
},
__r:function(u,
O,
P){var x,
x;
if(u.$$events){for(var x in O){u.$$events[x]=O[x];
}}else{u.$$events=O;
}},
__s:function(u,
y,
P){var t;
if(P===undefined){P=false;
}var Q=!!u.$$propertiesAttached;
for(var s in y){t=y[s];
{};
t.name=s;
if(!t.refine){if(u.$$properties===undefined){u.$$properties={};
}u.$$properties[s]=t;
}if(t.init!==undefined){u.prototype[k+s]=t.init;
}if(t.event!==undefined){var R={};
R[t.event]=r;
this.__r(u,
R,
P);
}if(t.inheritable){qx.core.Property.$$inheritable[s]=true;
}if(Q){qx.core.Property.attachMethods(u,
s,
t);
}}},
__t:null,
__u:function(u,
S,
P,
T,
U){var N=u.prototype;
var x,
V;
for(var v=0,
I=qx.lang.Object.getKeys(S),
w=I.length;v<w;v++){x=I[v];
V=S[x];
{};
if(T!==false&&V instanceof Function&&V.$$type==null){if(U==true){V=this.__v(V,
N[x]);
}else{if(N[x]){V.base=N[x];
}V.self=u;
}
if(qx.core.Variant.isSet(b,
d)){V=qx.core.Aspect.wrap(u.classname+c+x,
V,
j);
}}N[x]=V;
}},
__v:function(V,
T){if(T){return function(){var W=V.base;
V.base=T;
var X=V.apply(this,
arguments);
V.base=W;
return X;
};
}else{return V;
}},
__w:function(u,
C){{};
var B=qx.Interface.flatten([C]);
if(u.$$implements){u.$$implements.push(C);
u.$$flatImplements.push.apply(u.$$flatImplements,
B);
}else{u.$$implements=[C];
u.$$flatImplements=B;
}},
__x:function(u,
z,
P){{};
if(this.hasMixin(u,
z)){qx.log.Logger.warn('Mixin "'+z.name+'" is already included into Class "'+u.classname+'" by class: '+this.getByMixin(u,
z).classname+'!');
return;
}var B=qx.Mixin.flatten([z]);
var Y;
for(var v=0,
w=B.length;v<w;v++){Y=B[v];
if(Y.$$events){this.__r(u,
Y.$$events,
P);
}if(Y.$$properties){this.__s(u,
Y.$$properties,
P);
}if(Y.$$members){this.__u(u,
Y.$$members,
P,
P,
P);
}}if(u.$$includes){u.$$includes.push(z);
u.$$flatIncludes.push.apply(u.$$flatIncludes,
B);
}else{u.$$includes=[z];
u.$$flatIncludes=B;
}},
__y:function(){function ba(){arguments.callee.base.apply(this,
arguments);
}return ba;
},
__z:function(){return function(){};
},
__A:function(G,
s,
D){var bb=function(){var u=arguments.callee.constructor;
{};
if(!u.$$propertiesAttached){qx.core.Property.attach(u);
}var X=u.$$original.apply(this,
arguments);
if(u.$$includes){var bc=u.$$flatIncludes;
for(var v=0,
w=bc.length;v<w;v++){if(bc[v].$$constructor){bc[v].$$constructor.apply(this,
arguments);
}}}if(this.classname===s.classname){this.$$initialized=true;
}return X;
};
if(qx.core.Variant.isSet("qx.aspects",
"on")){var bd=qx.core.Aspect.wrap(s,
bb,
"constructor");
bb.$$original=G;
bb.constructor=bd;
bb=bd;
}if(D==="singleton"){bb.getInstance=this.getInstance;
}bb.$$original=G;
G.wrapper=bb;
return bb;
}},
defer:function(F){for(var be in qx.Bootstrap.$$registry){var F=qx.Bootstrap.$$registry[be];
for(var x in F){if(F[x] instanceof Function){F[x]=qx.core.Aspect.wrap(be+c+x,
F[x],
e);
}}}}});
})();
(function(){var a="qx.client",
b="on",
c="qx.bom.Event",
d="mousedown",
f="mouseover";
qx.Bootstrap.define(c,
{statics:{addNativeListener:qx.core.Variant.select(a,
{"mshtml":function(g,
h,
i){g.attachEvent(b+h,
i);
},
"default":function(g,
h,
i){g.addEventListener(h,
i,
false);
}}),
removeNativeListener:qx.core.Variant.select(a,
{"mshtml":function(g,
h,
i){g.detachEvent(b+h,
i);
},
"default":function(g,
h,
i){g.removeEventListener(h,
i,
false);
}}),
getTarget:function(j){return j.target||j.srcElement;
},
getRelatedTarget:qx.core.Variant.select(a,
{"mshtml":function(j){if(j.type===f){return j.fromEvent;
}else{return j.toElement;
}},
"default":function(j){return j.relatedTarget;
}}),
preventDefault:qx.core.Variant.select(a,
{"gecko":function(j){if(qx.bom.client.Engine.VERSION>=1.9&&j.type==d&&j.button==2){return;
}j.preventDefault();
try{j.keyCode=0;
}catch(j){}},
"mshtml":function(j){try{j.keyCode=0;
}catch(j){}j.returnValue=false;
},
"default":function(j){j.preventDefault();
}}),
stopPropagation:function(j){if(j.stopPropagation){j.stopPropagation();
}j.cancelBubble=true;
}}});
})();
(function(){var a="|bubble",
b="|capture",
c="_",
d="unload",
e="UNKNOWN_",
f="DOM_",
g="capture",
h="WIN_",
j='|',
k="qx.event.Manager",
m="QX_";
qx.Bootstrap.define(k,
{construct:function(n){this.__M=n;
this.__N=qx.lang.Function.bind(this.dispose,
this);
qx.bom.Event.addNativeListener(n,
d,
this.__N);
this.__O={};
this.__P={};
this.__Q={};
this.__R={};
},
members:{dispose:function(){qx.bom.Event.removeNativeListener(this.__M,
d,
this.__N);
qx.event.Registration.removeManager(this);
this.__O=this.__M=this.__P=this.__Q=this.__N=this.__R=null;
},
getWindow:function(){return this.__M;
},
getHandler:function(o){var p=this.__P[o.classname];
if(p){return p;
}return this.__P[o.classname]=new o(this);
},
getDispatcher:function(o){var q=this.__Q[o.classname];
if(q){return q;
}return this.__Q[o.classname]=new o(this);
},
getListeners:function(r,
s,
t){var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__O[u];
if(!v){return null;
}var w=s+(t?b:a);
var x=v[w];
return x?x.concat():null;
},
hasListener:function(r,
s,
t){{};
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__O[u];
if(!v){return false;
}var w=s+(t?b:a);
var x=v[w];
if(!x){return false;
}return x.length>0;
},
importListeners:function(r,
y){{};
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__O[u]={};
for(var z in y){var A=y[z];
var w=A.type+(A.capture?b:a);
var x=v[w];
if(!x){x=v[w]=[];
this.__S(r,
A.type,
A.capture);
}x.push({handler:A.listener,
context:A.self});
}},
addListener:function(r,
s,
B,
C,
t){var D;
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__O[u];
if(!v){v=this.__O[u]={};
}var w=s+(t?b:a);
var x=v[w];
if(!x){x=v[w]=[];
}if(x.length===0){this.__S(r,
s,
t);
}x.push({handler:B,
context:C});
},
_findHandler:function(r,
s){var E;
var F=false;
var G=false;
var H=false;
if(r.nodeType===1){F=true;
E=f+r.tagName.toLowerCase()+c+s;
}else if(r==this.__M){G=true;
E=h+s;
}else if(r.classname){H=true;
E=m+r.classname+c+s;
}else{E=e+r+c+s;
}var I=this.__R;
if(I[E]){return I[E];
}var J=qx.event.Registration.getHandlers();
var K;
for(var L=0,
M=J.length;L<M;L++){var o=J[L];
var N=o.SUPPORTED_TYPES;
if(N&&!N[s]){continue;
}var O=qx.event.IEventHandler;
var P=o.TARGET_CHECK;
if(P){if(P===O.TARGET_DOMNODE&&!F){continue;
}else if(P===O.TARGET_WINDOW&&!G){continue;
}else if(P===O.TARGET_OBJECT&&!H){continue;
}}K=this.getHandler(J[L]);
if(o.IGNORE_CAN_HANDLE||K.canHandleEvent(r,
s)){I[E]=K;
return K;
}}return null;
},
__S:function(r,
s,
t){var p=this._findHandler(r,
s);
if(p){p.registerEvent(r,
s,
t);
return;
}{};
},
removeListener:function(r,
s,
B,
C,
t){var D;
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__O[u];
if(!v){return false;
}var w=s+(t?b:a);
var x=v[w];
if(!x){return false;
}
for(var L=0,
M=x.length;L<M;L++){var Q=x[L];
if(Q.handler===B&&Q.context===C){qx.lang.Array.removeAt(x,
L);
if(x.length==0){this.__T(r,
s,
t);
}return true;
}}return false;
},
removeAllListeners:function(r){var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__O[u];
if(!v){return false;
}var R,
s,
t;
for(var w in v){if(v[w].length>0){R=w.split(j);
s=R[0];
t=R[1]===g;
this.__T(r,
s,
t);
}}delete this.__O[u];
return true;
},
__T:function(r,
s,
t){var p=this._findHandler(r,
s);
if(p){p.unregisterEvent(r,
s,
t);
return;
}{};
},
dispatchEvent:function(r,
S){var D;
var s=S.getType();
if(!S.getBubbles()&&!this.hasListener(r,
s)){qx.event.Pool.getInstance().poolObject(S);
return true;
}
if(!S.getTarget()){S.setTarget(r);
}var J=qx.event.Registration.getDispatchers();
var K;
var T=false;
for(var L=0,
M=J.length;L<M;L++){K=this.getDispatcher(J[L]);
if(K.canDispatchEvent(r,
S,
s)){K.dispatchEvent(r,
S,
s);
T=true;
break;
}}
if(!T){qx.log.Logger.error(this,
"No dispatcher can handle event of type "+s+" on "+r);
return true;
}var U=S.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(S);
return !U;
}}});
})();
(function(){var b="qx.dom.Node",
c="qx.client",
d="",
e="object";
qx.Class.define(b,
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
getDocument:function(f){if(this.isDocument(f)){return f;
}return f.ownerDocument||f.document||null;
},
getWindow:qx.core.Variant.select(c,
{"mshtml":function(f){return this.getDocument(f).parentWindow;
},
"default":function(f){return this.getDocument(f).defaultView;
}}),
getDocumentElement:function(f){return this.getDocument(f).documentElement;
},
getBodyElement:function(f){return this.getDocument(f).body;
},
isElement:function(f){return !!(f&&f.nodeType===qx.dom.Node.ELEMENT);
},
isDocument:function(f){return !!(f&&f.nodeType===qx.dom.Node.DOCUMENT);
},
isText:function(f){return !!(f&&f.nodeType===qx.dom.Node.TEXT);
},
isWindow:function(g){return !!(typeof g===e&&g&&g.Array);
},
getText:function(f){if(!f||!f.nodeType){return null;
}
switch(f.nodeType){case 1:var h,
j=[],
k=f.childNodes,
l=k.length;
for(h=0;h<l;h++){j[h]=this.getText(k[h]);
}return j.join(d);
case 2:return f.nodeValue;
break;
case 3:return f.nodeValue;
break;
}return null;
}}});
})();
(function(){var b="qx.lang.Array",
c="qx.client",
d="mshtml";
qx.Bootstrap.define(b,
{statics:{fromArguments:function(e,
f){return Array.prototype.slice.call(e,
f||0);
},
fromCollection:function(g){if(qx.core.Variant.isSet(c,
d)){if(g.item){var h=[];
for(var j=0,
k=g.length;j<k;j++){h[j]=g[j];
}return h;
}}return Array.prototype.slice.call(g,
0);
},
fromShortHand:function(m){var n=m.length;
var o=qx.lang.Array.copy(m);
switch(n){case 1:o[1]=o[2]=o[3]=o[0];
break;
case 2:o[2]=o[0];
case 3:o[3]=o[1];
}return o;
},
copy:function(h){return h.concat();
},
clone:function(h){return h.concat();
},
getLast:function(h){return h[h.length-1];
},
getFirst:function(h){return h[0];
},
insertAt:function(h,
p,
j){h.splice(j,
0,
p);
return h;
},
insertBefore:function(h,
p,
q){var j=h.indexOf(q);
if(j==-1){h.push(p);
}else{h.splice(j,
0,
p);
}return h;
},
insertAfter:function(h,
p,
q){var j=h.indexOf(q);
if(j==-1||j==(h.length-1)){h.push(p);
}else{h.splice(j+1,
0,
p);
}return h;
},
removeAt:function(h,
j){return h.splice(j,
1)[0];
},
removeAll:function(h){return h.length=0;
},
append:function(h,
r){{};
Array.prototype.push.apply(h,
r);
return h;
},
remove:function(h,
p){var j=h.indexOf(p);
if(j!=-1){h.splice(j,
1);
return p;
}},
contains:function(h,
p){return h.indexOf(p)!==-1;
},
equals:function(s,
t){var u=s.length;
if(u!==t.length){return false;
}
for(var j=0;j<u;j++){if(s[j]!==t[j]){return false;
}}return true;
},
sum:function(h){var o=0;
for(var j=0,
k=h.length;j<k;j++){o+=h[j];
}return o;
},
max:function(h){{};
var j,
n=h.length,
o=h[0];
for(j=1;j<n;j++){if(h[j]>o){o=h[j];
}}return o===undefined?null:o;
},
min:function(h){{};
var j,
n=h.length,
o=h[0];
for(j=1;j<n;j++){if(h[j]<o){o=h[j];
}}return o===undefined?null:o;
}}});
})();
(function(){var a=":",
b=":constructor",
c='anonymous',
d="anonymous: ",
e="qx.lang.Function",
f=":constructor wrapper";
qx.Bootstrap.define(e,
{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},
getName:function(h){if(h.$$original){return h.classname+f;
}
if(h.wrapper){return h.wrapper.classname+b;
}
if(h.classname){return h.classname+b;
}
if(h.mixin){for(var i in h.mixin.$$members){if(h.mixin.$$members[i]==h){return h.mixin.name+a+i;
}}for(var i in h.mixin){if(h.mixin[i]==h){return h.mixin.name+a+i;
}}}
if(h.self){var j=h.self.constructor;
if(j){for(var i in j.prototype){if(j.prototype[i]==h){return j.classname+a+i;
}}for(var i in j){if(j[i]==h){return j.classname+a+i;
}}}}var k=h.toString().match(/(function\s*\w*\(.*?\))/);
if(k&&k.length>=1&&k[1]){return k[1];
}var k=h.toString().match(/(function\s*\(.*?\))/);
if(k&&k.length>=1&&k[1]){return d+k[1];
}return c;
},
globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,
l);
}},
returnTrue:function(){return true;
},
returnFalse:function(){return false;
},
returnNull:function(){return null;
},
returnThis:function(){return this;
},
returnZero:function(){return 0;
},
create:function(m,
n){{};
if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(o){var g=qx.lang.Array.fromArguments(arguments);
if(n.args){g=n.args.concat(g);
}
if(n.delay||n.periodical){var p=function(){return m.apply(n.self||this,
g);
};
if(n.delay){return setTimeout(p,
n.delay);
}
if(n.periodical){return setInterval(p,
n.periodical);
}}else if(n.attempt){var q=false;
try{q=m.apply(n.self||this,
g);
}catch(ex){}return q;
}else{return m.apply(n.self||this,
g);
}};
},
bind:function(m,
r,
s){return this.create(m,
{self:r,
args:s!==undefined?qx.lang.Array.fromArguments(arguments,
2):null});
},
curry:function(m,
s){return this.create(m,
{args:s!==undefined?qx.lang.Array.fromArguments(arguments,
1):null});
},
listener:function(m,
r,
s){if(s===undefined){return function(o){return m.call(r||this,
o||window.event);
};
}else{var t=qx.lang.Array.fromArguments(arguments,
2);
return function(o){var g=[o||window.event];
g.push.apply(g,
t);
m.apply(r||this,
g);
};
}},
attempt:function(m,
r,
s){return this.create(m,
{self:r,
attempt:true,
args:s!==undefined?qx.lang.Array.fromArguments(arguments,
2):null})();
},
delay:function(m,
u,
r,
s){return this.create(m,
{delay:u,
self:r,
args:s!==undefined?qx.lang.Array.fromArguments(arguments,
3):null})();
},
periodical:function(m,
v,
r,
s){return this.create(m,
{periodical:v,
self:r,
args:s!==undefined?qx.lang.Array.fromArguments(arguments,
3):null})();
}}});
})();
(function(){var c="qx.event.Registration";
qx.Bootstrap.define(c,
{statics:{__U:{},
getManager:function(d){if(qx.dom.Node.isWindow(d)){var e=d;
}else if(qx.dom.Node.isElement(d)){var e=qx.dom.Node.getWindow(d);
}else{var e=window;
}var f=qx.core.ObjectRegistry.toHashCode(e);
var g=this.__U[f];
if(!g){g=new qx.event.Manager(e);
this.__U[f]=g;
}return g;
},
removeManager:function(h){var f=qx.core.ObjectRegistry.toHashCode(h.getWindow());
delete this.__U[f];
},
addListener:function(d,
i,
j,
k,
l){this.getManager(d).addListener(d,
i,
j,
k,
l);
},
removeListener:function(d,
i,
j,
k,
l){this.getManager(d).removeListener(d,
i,
j,
k,
l);
},
removeAllListeners:function(d){this.getManager(d).removeAllListeners(d);
},
hasListener:function(d,
i,
l){return this.getManager(d).hasListener(d,
i,
l);
},
createEvent:function(i,
m,
n){{};
if(m==null){m=qx.event.type.Event;
}var o=qx.event.Pool.getInstance().getObject(m);
if(!o){return;
}n?o.init.apply(o,
n):o.init();
if(i){o.setType(i);
}return o;
},
dispatchEvent:function(d,
p){return this.getManager(d).dispatchEvent(d,
p);
},
fireEvent:function(d,
i,
m,
n){var q;
var r=this.createEvent(i,
m||null,
n);
return this.getManager(d).dispatchEvent(d,
r);
},
fireNonBubblingEvent:function(d,
i,
m,
n){{};
var h=this.getManager(d);
if(!h.hasListener(d,
i,
false)){return true;
}var r=this.createEvent(i,
m||null,
n);
return h.dispatchEvent(d,
r);
},
PRIORITY_FIRST:-32000,
PRIORITY_NORMAL:0,
PRIORITY_LAST:32000,
__V:[],
addHandler:function(s){{};
this.__V.push(s);
this.__V.sort(function(t,
u){return t.PRIORITY-u.PRIORITY;
});
},
getHandlers:function(){return this.__V;
},
__W:[],
addDispatcher:function(v,
w){{};
this.__W.push(v);
this.__W.sort(function(t,
u){return t.PRIORITY-u.PRIORITY;
});
},
getDispatchers:function(){return this.__W;
}}});
})();
(function(){var b=';',
c='computed=this.',
d='=value;',
e='this.',
f='if(this.',
g='delete this.',
h='!==undefined)',
j="set",
k="setRuntime",
m="setThemed",
n='}',
o="init",
p='else if(this.',
q='return this.',
r="boolean",
s='!==undefined){',
t="string",
u="resetThemed",
v='=true;',
w="resetRuntime",
x="reset",
y='old=this.',
z="refresh",
A='if(old===undefined)old=null;',
B='else ',
C=' of an instance of ',
D='if(old===computed)return value;',
E='old=computed=this.',
F=' is not (yet) ready!");',
G='!==inherit){',
H=")}",
I="': ",
J=" of class ",
K='if(computed===undefined)computed=null;',
L='return value;',
M='===value)return value;',
N='else{',
O='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',
P='return init;',
Q='var init=this.',
R="')){",
S="if(reg.hasListener(this, '",
T='else this.',
U="Error in property ",
V='value=this.',
W='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',
X='if((computed===undefined||computed===inherit)&&',
Y='if(init==qx.core.Property.$$inherit)init=null;',
ba="reg.fireEvent(this, '",
bb=';}',
bc='===undefined)return;',
bd='if(a[i].',
be="', qx.event.type.Data, [computed, old]",
bf='");',
bg='var computed, old=this.',
bh='(value);',
bi=" in method ",
bj='throw new Error("Property ',
bk='(backup);',
bl='var inherit=prop.$$inherit;',
bm='return null;',
bn="var reg=qx.event.Registration;",
bo='(computed, old, "',
bp='",value);',
bq='computed=value;',
br='if(computed===undefined||computed==inherit)computed=null;',
bs='var prop=qx.core.Property;',
bt=')a[i].',
bu='computed=undefined;delete this.',
bv='if(computed===inherit){',
bw="inherit",
bx='var pa=this.getLayoutParent();if(pa)computed=pa.',
by=" with incoming value '",
bz='){',
bA='!==undefined&&',
bB='else if(computed===undefined)',
bC='if(value===undefined)prop.error(this,2,"',
bD='var computed, old;',
bE='if(computed===undefined||computed===inherit){',
bF='","',
bG='var backup=computed;',
bH='}else{',
bI='=computed;',
bJ="object",
bK="qx.core.Property";
qx.Class.define(bK,
{statics:{__D:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',
"String":'qx.core.Assert.assertString(value, msg) || true',
"Number":'qx.core.Assert.assertNumber(value, msg) || true',
"Integer":'qx.core.Assert.assertInteger(value, msg) || true',
"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',
"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',
"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',
"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',
"Object":'qx.core.Assert.assertObject(value, msg) || true',
"Array":'qx.core.Assert.assertArray(value, msg) || true',
"Map":'qx.core.Assert.assertMap(value, msg) || true',
"Function":'qx.core.Assert.assertFunction(value, msg) || true',
"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',
"Node":'value !== null && value.nodeType !== undefined',
"Element":'value !== null && value.nodeType === 1 && value.attributes',
"Document":'value !== null && value.nodeType === 9 && value.documentElement',
"Window":'value !== null && value.document',
"Event":'value !== null && value.type !== undefined',
"Class":'value !== null && value.$$type === "Class"',
"Mixin":'value !== null && value.$$type === "Mixin"',
"Interface":'value !== null && value.$$type === "Interface"',
"Theme":'value !== null && value.$$type === "Theme"',
"Color":'(typeof value === "string" || value instanceof String) && qx.util.ColorUtil.isValidPropertyValue(value)',
"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',
"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},
__E:{"Object":true,
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
"Font":true,
"Decorator":true},
$$inherit:bw,
$$store:{runtime:{},
user:{},
theme:{},
inherit:{},
init:{},
useinit:{}},
$$method:{get:{},
set:{},
reset:{},
init:{},
refresh:{},
setRuntime:{},
resetRuntime:{},
setThemed:{},
resetThemed:{}},
$$allowedKeys:{name:t,
dispose:r,
inheritable:r,
nullable:r,
themeable:r,
refine:r,
init:null,
apply:t,
event:t,
check:null,
transform:t,
deferredInit:r},
$$allowedGroupKeys:{name:t,
group:bJ,
mode:t,
themeable:r},
$$inheritable:{},
refresh:function(bL){var bM=bL.getLayoutParent();
if(bM){var bN=bL.constructor;
var bO=this.$$store.inherit;
var bP=this.$$store.init;
var bQ=this.$$method.refresh;
var bR;
var bS;
{};
while(bN){bR=bN.$$properties;
if(bR){for(var bT in this.$$inheritable){if(bR[bT]&&bL[bQ[bT]]){bS=bM[bO[bT]];
if(bS===undefined){bS=bM[bP[bT]];
}{};
bL[bQ[bT]](bS);
}}}bN=bN.superclass;
}}},
attach:function(bN){var bR=bN.$$properties;
if(bR){for(var bT in bR){this.attachMethods(bN,
bT,
bR[bT]);
}}bN.$$propertiesAttached=true;
},
attachMethods:function(bN,
bT,
bU){bU.group?this.__F(bN,
bU,
bT):this.__G(bN,
bU,
bT);
},
__F:function(bN,
bU,
bT){var bV=qx.lang.String.firstUp(bT);
var bW=bN.prototype;
var bX=bU.themeable===true;
{};
var bY=[];
var ca=[];
if(bX){var cb=[];
var cc=[];
}var cd="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bY.push(cd);
if(bX){cb.push(cd);
}
if(bU.mode=="shorthand"){var ce="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bY.push(ce);
if(bX){cb.push(ce);
}}
for(var cf=0,
cg=bU.group,
ch=cg.length;cf<ch;cf++){{};
bY.push("this.",
this.$$method.set[cg[cf]],
"(a[",
cf,
"]);");
ca.push("this.",
this.$$method.reset[cg[cf]],
"();");
if(bX){{};
cb.push("this.",
this.$$method.setThemed[cg[cf]],
"(a[",
cf,
"]);");
cc.push("this.",
this.$$method.resetThemed[cg[cf]],
"();");
}}this.$$method.set[bT]="set"+bV;
bW[this.$$method.set[bT]]=new Function(bY.join(""));
this.$$method.reset[bT]="reset"+bV;
bW[this.$$method.reset[bT]]=new Function(ca.join(""));
if(bX){this.$$method.setThemed[bT]="setThemed"+bV;
bW[this.$$method.setThemed[bT]]=new Function(cb.join(""));
this.$$method.resetThemed[bT]="resetThemed"+bV;
bW[this.$$method.resetThemed[bT]]=new Function(cc.join(""));
}},
__G:function(bN,
bU,
bT){var bV=qx.lang.String.firstUp(bT);
var bW=bN.prototype;
{};
if(bU.dispose===undefined&&typeof bU.check==="string"){bU.dispose=this.__E[bU.check]||qx.Class.isDefined(bU.check)||qx.Interface.isDefined(bU.check);
}var ci=this.$$method;
var cj=this.$$store;
cj.runtime[bT]="$$runtime_"+bT;
cj.user[bT]="$$user_"+bT;
cj.theme[bT]="$$theme_"+bT;
cj.init[bT]="$$init_"+bT;
cj.inherit[bT]="$$inherit_"+bT;
cj.useinit[bT]="$$useinit_"+bT;
ci.get[bT]="get"+bV;
bW[ci.get[bT]]=function(){return qx.core.Property.executeOptimizedGetter(this,
bN,
bT,
"get");
};
ci.set[bT]="set"+bV;
bW[ci.set[bT]]=function(bS){return qx.core.Property.executeOptimizedSetter(this,
bN,
bT,
"set",
arguments);
};
ci.reset[bT]="reset"+bV;
bW[ci.reset[bT]]=function(){return qx.core.Property.executeOptimizedSetter(this,
bN,
bT,
"reset");
};
if(bU.inheritable||bU.apply||bU.event||bU.deferredInit){ci.init[bT]="init"+bV;
bW[ci.init[bT]]=function(bS){return qx.core.Property.executeOptimizedSetter(this,
bN,
bT,
"init",
arguments);
};
}
if(bU.inheritable){ci.refresh[bT]="refresh"+bV;
bW[ci.refresh[bT]]=function(bS){return qx.core.Property.executeOptimizedSetter(this,
bN,
bT,
"refresh",
arguments);
};
}ci.setRuntime[bT]="setRuntime"+bV;
bW[ci.setRuntime[bT]]=function(bS){return qx.core.Property.executeOptimizedSetter(this,
bN,
bT,
"setRuntime",
arguments);
};
ci.resetRuntime[bT]="resetRuntime"+bV;
bW[ci.resetRuntime[bT]]=function(){return qx.core.Property.executeOptimizedSetter(this,
bN,
bT,
"resetRuntime");
};
if(bU.themeable){ci.setThemed[bT]="setThemed"+bV;
bW[ci.setThemed[bT]]=function(bS){return qx.core.Property.executeOptimizedSetter(this,
bN,
bT,
"setThemed",
arguments);
};
ci.resetThemed[bT]="resetThemed"+bV;
bW[ci.resetThemed[bT]]=function(){return qx.core.Property.executeOptimizedSetter(this,
bN,
bT,
"resetThemed");
};
}
if(bU.check==="Boolean"){bW["toggle"+bV]=new Function("return this."+ci.set[bT]+"(!this."+ci.get[bT]+"())");
bW["is"+bV]=new Function("return this."+ci.get[bT]+"()");
}},
__H:{0:'Could not change or apply init value after constructing phase!',
1:'Requires exactly one argument!',
2:'Undefined value is not allowed!',
3:'Does not allow any arguments!',
4:'Null value is not allowed!',
5:'Is invalid!'},
error:function(ck,
cl,
cm,
cn,
bS){var co=ck.constructor.classname;
var cp=U+cm+J+co+bi+this.$$method[cn][cm]+by+bS+I;
throw new Error(cp+(this.__H[cl]||"Unknown reason: "+cl));
},
__I:function(cq,
bW,
bT,
cn,
cr,
cs){var cj=this.$$method[cn][bT];
{bW[cj]=new Function("value",
cr.join(""));
};
if(qx.core.Variant.isSet("qx.aspects",
"on")){bW[cj]=qx.core.Aspect.wrap(cq.classname+"."+cj,
bW[cj],
"property");
}if(cs===undefined){return cq[cj]();
}else{return cq[cj](cs[0]);
}},
executeOptimizedGetter:function(cq,
bN,
bT,
cn){var bU=bN.$$properties[bT];
var bW=bN.prototype;
var cr=[];
var cj=this.$$store;
cr.push(f,
cj.runtime[bT],
h);
cr.push(q,
cj.runtime[bT],
b);
if(bU.inheritable){cr.push(p,
cj.inherit[bT],
h);
cr.push(q,
cj.inherit[bT],
b);
cr.push(B);
}cr.push(f,
cj.user[bT],
h);
cr.push(q,
cj.user[bT],
b);
if(bU.themeable){cr.push(p,
cj.theme[bT],
h);
cr.push(q,
cj.theme[bT],
b);
}
if(bU.deferredInit&&bU.init===undefined){cr.push(p,
cj.init[bT],
h);
cr.push(q,
cj.init[bT],
b);
}cr.push(B);
if(bU.init!==undefined){if(bU.inheritable){cr.push(Q,
cj.init[bT],
b);
if(bU.nullable){cr.push(Y);
}else if(bU.init!==undefined){cr.push(q,
cj.init[bT],
b);
}else{cr.push(O,
bT,
C,
bN.classname,
F);
}cr.push(P);
}else{cr.push(q,
cj.init[bT],
b);
}}else if(bU.inheritable||bU.nullable){cr.push(bm);
}else{cr.push(bj,
bT,
C,
bN.classname,
F);
}return this.__I(cq,
bW,
bT,
cn,
cr);
},
executeOptimizedSetter:function(cq,
bN,
bT,
cn,
cs){var bU=bN.$$properties[bT];
var bW=bN.prototype;
var cr=[];
var ct=cn===j||cn===m||cn===k||(cn===o&&bU.init===undefined);
var cu=cn===x||cn===u||cn===w;
var cv=bU.apply||bU.event||bU.inheritable;
if(cn===k||cn===w){var cj=this.$$store.runtime[bT];
}else if(cn===m||cn===u){var cj=this.$$store.theme[bT];
}else if(cn===o){var cj=this.$$store.init[bT];
}else{var cj=this.$$store.user[bT];
}{if(!bU.nullable||bU.check||bU.inheritable){cr.push(bs);
}if(cn===j){cr.push(bC,
bT,
bF,
cn,
bp);
}};
if(ct){if(bU.transform){cr.push(V,
bU.transform,
bh);
}}if(cv){if(ct){cr.push(f,
cj,
M);
}else if(cu){cr.push(f,
cj,
bc);
}}if(bU.inheritable){cr.push(bl);
}{};
if(!cv){if(cn===k){cr.push(e,
this.$$store.runtime[bT],
d);
}else if(cn===w){cr.push(f,
this.$$store.runtime[bT],
h);
cr.push(g,
this.$$store.runtime[bT],
b);
}else if(cn===j){cr.push(e,
this.$$store.user[bT],
d);
}else if(cn===x){cr.push(f,
this.$$store.user[bT],
h);
cr.push(g,
this.$$store.user[bT],
b);
}else if(cn===m){cr.push(e,
this.$$store.theme[bT],
d);
}else if(cn===u){cr.push(f,
this.$$store.theme[bT],
h);
cr.push(g,
this.$$store.theme[bT],
b);
}else if(cn===o&&ct){cr.push(e,
this.$$store.init[bT],
d);
}}else{if(bU.inheritable){cr.push(bg,
this.$$store.inherit[bT],
b);
}else{cr.push(bD);
}cr.push(f,
this.$$store.runtime[bT],
s);
if(cn===k){cr.push(c,
this.$$store.runtime[bT],
d);
}else if(cn===w){cr.push(g,
this.$$store.runtime[bT],
b);
cr.push(f,
this.$$store.user[bT],
h);
cr.push(c,
this.$$store.user[bT],
b);
cr.push(p,
this.$$store.theme[bT],
h);
cr.push(c,
this.$$store.theme[bT],
b);
cr.push(p,
this.$$store.init[bT],
s);
cr.push(c,
this.$$store.init[bT],
b);
cr.push(e,
this.$$store.useinit[bT],
v);
cr.push(n);
}else{cr.push(E,
this.$$store.runtime[bT],
b);
if(cn===j){cr.push(e,
this.$$store.user[bT],
d);
}else if(cn===x){cr.push(g,
this.$$store.user[bT],
b);
}else if(cn===m){cr.push(e,
this.$$store.theme[bT],
d);
}else if(cn===u){cr.push(g,
this.$$store.theme[bT],
b);
}else if(cn===o&&ct){cr.push(e,
this.$$store.init[bT],
d);
}}cr.push(n);
cr.push(p,
this.$$store.user[bT],
s);
if(cn===j){if(!bU.inheritable){cr.push(y,
this.$$store.user[bT],
b);
}cr.push(c,
this.$$store.user[bT],
d);
}else if(cn===x){if(!bU.inheritable){cr.push(y,
this.$$store.user[bT],
b);
}cr.push(g,
this.$$store.user[bT],
b);
cr.push(f,
this.$$store.runtime[bT],
h);
cr.push(c,
this.$$store.runtime[bT],
b);
cr.push(f,
this.$$store.theme[bT],
h);
cr.push(c,
this.$$store.theme[bT],
b);
cr.push(p,
this.$$store.init[bT],
s);
cr.push(c,
this.$$store.init[bT],
b);
cr.push(e,
this.$$store.useinit[bT],
v);
cr.push(n);
}else{if(cn===k){cr.push(c,
this.$$store.runtime[bT],
d);
}else if(bU.inheritable){cr.push(c,
this.$$store.user[bT],
b);
}else{cr.push(E,
this.$$store.user[bT],
b);
}if(cn===m){cr.push(e,
this.$$store.theme[bT],
d);
}else if(cn===u){cr.push(g,
this.$$store.theme[bT],
b);
}else if(cn===o&&ct){cr.push(e,
this.$$store.init[bT],
d);
}}cr.push(n);
if(bU.themeable){cr.push(p,
this.$$store.theme[bT],
s);
if(!bU.inheritable){cr.push(y,
this.$$store.theme[bT],
b);
}
if(cn===k){cr.push(c,
this.$$store.runtime[bT],
d);
}else if(cn===j){cr.push(c,
this.$$store.user[bT],
d);
}else if(cn===m){cr.push(c,
this.$$store.theme[bT],
d);
}else if(cn===u){cr.push(g,
this.$$store.theme[bT],
b);
cr.push(f,
this.$$store.init[bT],
s);
cr.push(c,
this.$$store.init[bT],
b);
cr.push(e,
this.$$store.useinit[bT],
v);
cr.push(n);
}else if(cn===o){if(ct){cr.push(e,
this.$$store.init[bT],
d);
}cr.push(c,
this.$$store.theme[bT],
b);
}else if(cn===z){cr.push(c,
this.$$store.theme[bT],
b);
}cr.push(n);
}cr.push(p,
this.$$store.useinit[bT],
bz);
if(!bU.inheritable){cr.push(y,
this.$$store.init[bT],
b);
}
if(cn===o){if(ct){cr.push(c,
this.$$store.init[bT],
d);
}else{cr.push(c,
this.$$store.init[bT],
b);
}}else if(cn===j||cn===k||cn===m||cn===z){cr.push(g,
this.$$store.useinit[bT],
b);
if(cn===k){cr.push(c,
this.$$store.runtime[bT],
d);
}else if(cn===j){cr.push(c,
this.$$store.user[bT],
d);
}else if(cn===m){cr.push(c,
this.$$store.theme[bT],
d);
}else if(cn===z){cr.push(c,
this.$$store.init[bT],
b);
}}cr.push(n);
if(cn===j||cn===k||cn===m||cn===o){cr.push(N);
if(cn===k){cr.push(c,
this.$$store.runtime[bT],
d);
}else if(cn===j){cr.push(c,
this.$$store.user[bT],
d);
}else if(cn===m){cr.push(c,
this.$$store.theme[bT],
d);
}else if(cn===o){if(ct){cr.push(c,
this.$$store.init[bT],
d);
}else{cr.push(c,
this.$$store.init[bT],
b);
}cr.push(e,
this.$$store.useinit[bT],
v);
}cr.push(n);
}}
if(bU.inheritable){cr.push(bE);
if(cn===z){cr.push(bq);
}else{cr.push(bx,
this.$$store.inherit[bT],
b);
}cr.push(X);
cr.push(e,
this.$$store.init[bT],
bA);
cr.push(e,
this.$$store.init[bT],
G);
cr.push(c,
this.$$store.init[bT],
b);
cr.push(e,
this.$$store.useinit[bT],
v);
cr.push(bH);
cr.push(g,
this.$$store.useinit[bT],
bb);
cr.push(n);
cr.push(D);
cr.push(bv);
cr.push(bu,
this.$$store.inherit[bT],
b);
cr.push(n);
cr.push(bB);
cr.push(g,
this.$$store.inherit[bT],
b);
cr.push(T,
this.$$store.inherit[bT],
bI);
cr.push(bG);
cr.push(A);
cr.push(br);
}else if(cv){if(cn!==j&&cn!==k&&cn!==m){cr.push(K);
}cr.push(D);
cr.push(A);
}if(cv){if(bU.apply){cr.push(e,
bU.apply,
bo,
bT,
bf);
}if(bU.event){cr.push(bn,
S,
bU.event,
R,
ba,
bU.event,
be,
H);
}if(bU.inheritable&&bW._getChildren){cr.push(W);
cr.push(bd,
this.$$method.refresh[bT],
bt,
this.$$method.refresh[bT],
bk);
cr.push(n);
}}if(ct){cr.push(L);
}return this.__I(cq,
bW,
bT,
cn,
cr,
cs);
}},
settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var c="qx.core.ObjectRegistry";
qx.Bootstrap.define(c,
{statics:{__J:{},
__K:0,
inShutDown:false,
__L:[],
register:function(d){var e=this.__J;
if(!e){return;
}var f=d.$$hash;
if(f==null){var g=this.__L;
if(g.length>0){f=g.pop();
}else{f=(this.__K++).toString(36);
}d.$$hash=f;
}{};
e[f]=d;
},
unregister:function(d){var f=d.$$hash;
if(f==null){return;
}var e=this.__J;
if(e&&e[f]){delete e[f];
this.__L.push(f);
}},
toHashCode:function(d){{};
var f=d.$$hash;
if(f!=null){return f;
}var g=this.__L;
if(g.length>0){f=g.pop();
}else{f=(this.__K++).toString(36);
}return d.$$hash=f;
},
fromHashCode:function(f){return this.__J[f]||null;
},
shutdown:function(){this.inShutDown=true;
var e=this.__J;
var h=[];
for(var f in e){h.push(f);
}h.sort(function(j,
k){return parseInt(k,
36)-parseInt(j,
36);
});
var d,
m=0,
n=h.length;
while(true){try{for(;m<n;m++){f=h[m];
d=e[f];
if(d&&d.dispose){d.dispose();
}}}catch(ex){qx.log.Logger.error(this,
"Could not dispose object "+d.toString()+": "+ex);
if(m!==0){continue;
}}break;
}qx.log.Logger.debug(this,
"Disposed "+n+" objects");
delete this.__J;
},
getRegistry:function(){return this.__J;
}}});
})();
(function(){var a="unknown",
b="node",
c="error",
d="...(+",
e="array",
f=")",
g="info",
h="instance",
j="string",
k="null",
m="class",
n="number",
o="stringify",
p="]",
q="function",
r="boolean",
s="qx.deprecationWarnings",
t="map",
u="on",
v="undefined",
w="qx.log.Logger",
x=")}",
y="#",
z="warn",
A="document",
B="{...(",
C="[",
D="text[",
E="[...(",
F="\n",
G="debug",
H=")]",
I="object";
qx.Bootstrap.define(w,
{statics:{__X:50,
__Y:"debug",
setLevel:function(J){this.__Y=J;
},
getLevel:function(){return this.__Y;
},
setTreshold:function(J){this.__X=J;
},
getTreshold:function(){return this.__X;
},
__ba:{},
__bb:0,
register:function(K){if(K.$$id){return;
}var L=this.__bb++;
this.__ba[L]=K;
K.$$id=L;
var M=this.__bc;
for(var N=0,
O=M.length;N<O;N++){K.process(M[N]);
}},
unregister:function(K){var L=K.$$id;
if(L==null){return;
}delete this.__ba[L];
delete K.$$id;
},
debug:function(P,
Q){this.__be(G,
arguments);
},
info:function(P,
Q){this.__be(g,
arguments);
},
warn:function(P,
Q){this.__be(z,
arguments);
},
error:function(P,
Q){this.__be(c,
arguments);
},
trace:function(P){this.__be(g,
[P,
qx.dev.StackTrace.getStackTrace().join(F)]);
},
deprecatedMethodWarning:function(R,
S){if(qx.core.Variant.isSet(s,
u)){var T=qx.lang.Function.getName(R);
var U=R.self?R.self.classname:a;
this.warn("The method '"+T+"' of class '"+U+"' is deprecated: "+S||"Please consult the API documentation of this method for alternatives.");
this.trace();
}},
deprecatedClassWarning:function(V,
S){if(qx.core.Variant.isSet(s,
u)){var U=V.self?V.self.classname:a;
this.warn("The method class '"+U+"' is deprecated: "+S||"Please consult the API documentation of this class for alternatives.");
this.trace();
}},
clear:function(){this.__bc=[];
},
__bc:[],
__bd:{debug:0,
info:1,
warn:2,
error:3},
__be:function(W,
X){var Y=this.__bd;
if(Y[W]<Y[this.__Y]){return;
}var P=X.length<2?null:X[0];
var ba=P?1:0;
var bb=[];
for(var N=ba,
O=X.length;N<O;N++){bb.push(this.__bg(X[N],
true));
}var bc=new Date;
var bd={time:bc,
offset:bc-qx.Bootstrap.LOADSTART,
level:W,
items:bb};
if(P){if(P instanceof qx.core.Object){bd.object=P.$$hash;
}else if(P.$$type){bd.clazz=P;
}}var M=this.__bc;
M.push(bd);
if(M.length>(this.__X+10)){M.splice(this.__X,
M.length);
}var K=this.__ba;
for(var L in K){K[L].process(bd);
}},
__bf:function(J){if(J===undefined){return v;
}else if(J===null){return k;
}
if(J.$$type){return m;
}var be=typeof J;
if(be===q||be==j||be===n||be===r){return be;
}else if(be===I){if(J.nodeType){return b;
}else if(J.classname){return h;
}else if(J instanceof Array){return e;
}else if(J instanceof Error){return c;
}else{return t;
}}
if(J.toString){return o;
}return a;
},
__bg:function(J,
bf){var be=this.__bf(J);
var bg=a;
switch(be){case k:case v:bg=be;
break;
case j:case n:case r:bg=J;
break;
case b:if(J.nodeType===9){bg=A;
}else if(J.nodeType===3){bg=D+J.nodeValue+p;
}else if(J.nodeType===1){bg=J.nodeName.toLowerCase();
if(J.id){bg+=y+J.id;
}}else{bg=b;
}break;
case q:bg=qx.lang.Function.getName(J)||be;
break;
case h:bg=J.basename+C+J.$$hash+p;
break;
case m:case o:case c:bg=J.toString();
break;
case e:if(bf){bg=[];
for(var N=0,
O=J.length;N<O;N++){if(bg.length>20){bg.push(d+(O-N)+f);
break;
}bg.push(this.__bg(J[N],
false));
}}else{bg=E+J.length+H;
}break;
case t:if(bf){var bh;
var bi=[];
for(var bj in J){bi.push(bj);
}bi.sort();
bg=[];
for(var N=0,
O=bi.length;N<O;N++){if(bg.length>20){bg.push(d+(O-N)+f);
break;
}bj=bi[N];
bh=this.__bg(J[bj],
false);
bh.key=bj;
bg.push(bh);
}}else{var bk=0;
for(var bj in J){bk++;
}bg=B+bk+x;
}break;
}return {type:be,
text:bg};
}}});
})();
(function(){var a="qx.core.Object",
b="string",
c="]",
d="[",
f="__bi",
g="Object";
qx.Class.define(a,
{extend:Object,
construct:function(){qx.core.ObjectRegistry.register(this);
},
statics:{$$type:g},
members:{toHashCode:function(){return this.$$hash;
},
toString:function(){return this.classname+d+this.$$hash+c;
},
base:function(h,
j){if(arguments.length===1){return h.callee.base.call(this);
}else{return h.callee.base.apply(this,
Array.prototype.slice.call(arguments,
1));
}},
self:function(h){return h.callee.self;
},
clone:function(){var k=this.constructor;
var m=new k;
var n=qx.Class.getProperties(k);
var o=qx.core.Property.$$store.user;
var p=qx.core.Property.$$method.set;
var q;
for(var r=0,
s=n.length;r<s;r++){q=n[r];
if(this.hasOwnProperty(o[q])){m[p[q]](this[o[q]]);
}}return m;
},
serialize:function(){var k=this.constructor;
var n=qx.Class.getProperties(k);
var o=qx.core.Property.$$store.user;
var p=qx.core.Property.$$method.set;
var q;
var t={classname:k.classname,
properties:{}};
for(var r=0,
s=n.length;r<s;r++){q=n[r];
if(this.hasOwnProperty(o[q])){v=this[o[q]];
if(v instanceof qx.core.Object){t.properties[q]={$$hash:v.$$hash};
}else{t.properties[q]=v;
}}}return t;
},
set:function(u,
v){var p=qx.core.Property.$$method.set;
if(typeof u===b){{};
return this[p[u]](v);
}else{for(var w in u){{};
this[p[w]](u[w]);
}return this;
}},
get:function(w){var x=qx.core.Property.$$method.get;
{};
return this[x[w]]();
},
reset:function(w){var y=qx.core.Property.$$method.reset;
{};
this[y[w]]();
},
__bh:qx.event.Registration,
addListener:function(z,
A,
B,
C){if(!this.$$disposed){this.__bh.addListener(this,
z,
A,
B,
C);
}},
addListenerOnce:function(z,
A,
B,
C){var D=function(E){A.call(B||this,
E);
this.removeListener(z,
D,
this,
C);
};
this.addListener(z,
D,
this,
C);
},
removeListener:function(z,
A,
B,
C){if(!this.$$disposed){this.__bh.removeListener(this,
z,
A,
B,
C);
}},
hasListener:function(z,
C){return this.__bh.hasListener(this,
z,
C);
},
dispatchEvent:function(F){if(!this.$$disposed){return this.__bh.dispatchEvent(this,
F);
}return true;
},
fireEvent:function(z,
k,
h){if(!this.$$disposed){return this.__bh.fireEvent(this,
z,
k,
h);
}return true;
},
fireNonBubblingEvent:function(z,
k,
h){if(!this.$$disposed){return this.__bh.fireNonBubblingEvent(this,
z,
k,
h);
}return true;
},
fireDataEvent:function(z,
u,
G,
H){if(!this.$$disposed){return this.__bh.fireNonBubblingEvent(this,
z,
qx.event.type.Data,
[u,
G||null,
!!H]);
}return true;
},
__bi:null,
setUserData:function(I,
v){if(!this.__bi){this.__bi={};
}this.__bi[I]=v;
},
getUserData:function(I){if(!this.__bi){return null;
}return this.__bi[I];
},
__bj:qx.log.Logger,
debug:function(J){this.__bj.debug(this,
J);
},
info:function(J){this.__bj.info(this,
J);
},
warn:function(J){this.__bj.warn(this,
J);
},
error:function(J){this.__bj.error(this,
J);
},
trace:function(){this.__bj.trace(this);
},
isDisposed:function(){return this.$$disposed||false;
},
dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
{};
var k=this.constructor;
var K;
while(k.superclass){if(k.$$destructor){k.$$destructor.call(this);
}if(k.$$includes){K=k.$$flatIncludes;
for(var r=0,
s=K.length;r<s;r++){if(K[r].$$destructor){K[r].$$destructor.call(this);
}}}k=k.superclass;
}var I,
v;
},
_disposeFields:function(L){qx.util.DisposeUtil.disposeFields(this,
arguments);
},
_disposeObjects:function(L){qx.util.DisposeUtil.disposeObjects(this,
arguments);
},
_disposeArray:function(M){qx.util.DisposeUtil.disposeArray(this,
M);
},
_disposeMap:function(M){qx.util.DisposeUtil.disposeMap(this,
M);
}},
settings:{"qx.disposerDebugLevel":0},
defer:function(N){{};
},
destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(f);
var k=this.constructor;
var O;
var P=qx.core.Property.$$store;
var Q=P.user;
var R=P.theme;
var S=P.inherit;
var T=P.useinit;
var U=P.init;
while(k){O=k.$$properties;
if(O){for(var q in O){if(O[q].dispose){this[Q[q]]=this[R[q]]=this[S[q]]=this[T[q]]=this[U[q]]=undefined;
}}}k=k.superclass;
}}});
})();
(function(){var a="",
b="g",
c="0",
d='\\$1',
e="%",
f='-',
g="qx.lang.String",
h="undefined";
qx.Bootstrap.define(g,
{statics:{camelCase:function(j){return j.replace(/\-([a-z])/g,
function(k,
l){return l.toUpperCase();
});
},
hyphenate:function(j){return j.replace(/[A-Z]/g,
function(k){return (f+k.charAt(0).toLowerCase());
});
},
capitalize:function(j){return j.replace(/\b[a-z]/g,
function(k){return k.toUpperCase();
});
},
trimLeft:function(j){return j.replace(/^\s+/,
a);
},
trimRight:function(j){return j.replace(/\s+$/,
a);
},
trim:function(j){return j.replace(/^\s+|\s+$/g,
a);
},
startsWith:function(m,
n){return m.substring(0,
n.length)===n;
},
endsWith:function(m,
n){return m.substring(m.length-n.length,
m.length)===n;
},
pad:function(j,
o,
p){if(typeof p===h){p=c;
}var q=a;
for(var r=j.length;r<o;r++){q+=p;
}return q+j;
},
firstUp:function(j){return j.charAt(0).toUpperCase()+j.substr(1);
},
firstLow:function(j){return j.charAt(0).toLowerCase()+j.substr(1);
},
contains:function(j,
s){return j.indexOf(s)!=-1;
},
format:function(t,
u){var j=t;
for(var r=0;r<u.length;r++){j=j.replace(new RegExp(e+(r+1),
b),
u[r]);
}return j;
},
escapeRegexpChars:function(j){return j.replace(/([.*+?^${}()|[\]\/\\])/g,
d);
},
toArray:function(j){return j.split(/\B|\b/g);
},
stripTags:function(j){return j.replace(/<\/?[^>]+>/gi,
a);
}}});
})();
(function(){var a="function",
b="]",
c="Interface",
d="[Interface ",
e="qx.Interface";
qx.Class.define(e,
{statics:{define:function(f,
g){if(g){if(g.extend&&!(g.extend instanceof Array)){g.extend=[g.extend];
}{};
var h=g.statics?g.statics:{};
if(g.extend){h.$$extends=g.extend;
}
if(g.properties){h.$$properties=g.properties;
}
if(g.members){h.$$members=g.members;
}
if(g.events){h.$$events=g.events;
}}else{var h={};
}h.$$type=c;
h.name=f;
h.toString=this.genericToString;
h.basename=qx.Bootstrap.createNamespace(f,
h);
qx.Interface.$$registry[f]=h;
return h;
},
getByName:function(f){return this.$$registry[f];
},
isDefined:function(f){return this.getByName(f)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
flatten:function(j){if(!j){return [];
}var k=j.concat();
for(var m=0,
n=j.length;m<n;m++){if(j[m].$$extends){k.push.apply(k,
this.flatten(j[m].$$extends));
}}return k;
},
assert:function(o,
h,
p){var q=h.$$members;
if(q){var r=o.prototype;
for(var s in q){if(typeof q[s]===a){if(typeof r[s]===a){if(p===true&&!qx.Class.hasInterface(o,
h)){r[s]=this.__bX(h,
r[s],
s,
q[s]);
}}else{var t=s.match(/^(get|set|reset)(.*)$/);
if(!t||!qx.Class.hasProperty(o,
qx.lang.String.firstLow(t[2]))){throw new Error('Implementation of method "'+s+'" is missing in class "'+o.classname+'" required by interface "'+h.name+'"');
}}}else{if(typeof r[s]===undefined){if(typeof r[s]!==a){throw new Error('Implementation of member "'+s+'" is missing in class "'+o.classname+'" required by interface "'+h.name+'"');
}}}}}if(h.$$properties){for(var s in h.$$properties){if(!qx.Class.hasProperty(o,
s)){throw new Error('The property "'+s+'" is not supported by Class "'+o.classname+'"!');
}}}if(h.$$events){for(var s in h.$$events){if(!qx.Class.supportsEvent(o,
s)){throw new Error('The event "'+s+'" is not supported by Class "'+o.classname+'"!');
}}}var u=h.$$extends;
if(u){for(var m=0,
n=u.length;m<n;m++){this.assert(o,
u[m],
p);
}}},
genericToString:function(){return d+this.name+b;
},
$$registry:{},
__bX:function(){},
__bY:null,
__ca:function(){}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,
{statics:{TARGET_DOMNODE:1,
TARGET_WINDOW:2,
TARGET_OBJECT:3},
members:{canHandleEvent:function(b,
c){},
registerEvent:function(b,
c,
d){},
unregisterEvent:function(b,
c,
d){}}});
})();
(function(){var a="load",
b="unload",
c="ready",
d="shutdown",
f="qx.event.handler.Application",
g="_window";
qx.Class.define(f,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(h){arguments.callee.base.call(this);
this._window=h.getWindow();
this._initObserver();
qx.event.handler.Application.$$instance=this;
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{ready:1,
shutdown:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,
IGNORE_CAN_HANDLE:true,
ready:function(){var i=qx.event.handler.Application.$$instance;
if(i){i.__cb();
}}},
members:{canHandleEvent:function(j,
k){},
registerEvent:function(j,
k,
l){},
unregisterEvent:function(j,
k,
l){},
__cb:function(){if(!this.__cc){this.__cc=true;
qx.event.Registration.fireEvent(window,
c);
}},
_initObserver:function(){this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,
this);
this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,
this);
qx.bom.Event.addNativeListener(window,
a,
this._onNativeLoadWrapped);
qx.bom.Event.addNativeListener(window,
b,
this._onNativeUnloadWrapped);
},
_stopObserver:function(){qx.bom.Event.removeNativeListener(window,
a,
this._onNativeLoadWrapped);
qx.bom.Event.removeNativeListener(window,
b,
this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},
_onNativeLoad:function(m){if(!window.qxloader){this.__cb();
}},
_onNativeUnload:function(m){if(!this.__cd){this.__cd=true;
qx.event.Registration.fireEvent(window,
d);
qx.core.ObjectRegistry.shutdown();
}}},
destruct:function(){this._stopObserver();
this._disposeFields(g);
},
defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,
{members:{canDispatchEvent:function(b,
c,
d){this.assertInstance(c,
qx.event.type.Event);
this.assertString(d);
},
dispatchEvent:function(b,
c,
d){this.assertInstance(c,
qx.event.type.Event);
this.assertString(d);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventDispatcher,
construct:function(b){this._manager=b;
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},
members:{canDispatchEvent:function(c,
d,
e){return !d.getBubbles();
},
dispatchEvent:function(c,
d,
e){d.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(c,
e,
false);
if(f){for(var g=0,
h=f.length;g<h;g++){var j=f[g].context||c;
f[g].handler.call(j,
d);
}}}},
defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var a="ready",
b="qx.application",
c="qx.core.Init",
d="shutdown";
qx.Class.define(c,
{statics:{getApplication:function(){return this.__eO||null;
},
__eN:function(){qx.log.Logger.debug(this,
"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var e=qx.core.Setting.get(b);
var f=qx.Class.getByName(e);
if(f){this.__eO=new f;
var g=new Date;
this.__eO.main();
qx.log.Logger.debug(this,
"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__eO.finalize();
qx.log.Logger.debug(this,
"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+e);
}},
__eP:function(){var e=this.__eO;
if(e){e.terminate();
}}},
defer:function(h){qx.event.Registration.addListener(window,
a,
h.__eN,
h);
qx.event.Registration.addListener(window,
d,
h.__eP,
h);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,
{members:{main:function(){},
finalize:function(){},
terminate:function(){}}});
})();
(function(){var a="qx.Mixin",
b="]",
c="Mixin",
d="[Mixin ";
qx.Class.define(a,
{statics:{define:function(e,
f){if(f){if(f.include&&!(f.include instanceof Array)){f.include=[f.include];
}{};
var g=f.statics?f.statics:{};
for(var h in g){g[h].mixin=g;
}if(f.construct){g.$$constructor=f.construct;
}
if(f.include){g.$$includes=f.include;
}
if(f.properties){g.$$properties=f.properties;
}
if(f.members){g.$$members=f.members;
}
for(var h in g.$$members){if(g.$$members[h] instanceof Function){g.$$members[h].mixin=g;
}}
if(f.events){g.$$events=f.events;
}
if(f.destruct){g.$$destructor=f.destruct;
}}else{var g={};
}g.$$type=c;
g.name=e;
g.toString=this.genericToString;
g.basename=qx.Bootstrap.createNamespace(e,
g);
this.$$registry[e]=g;
return g;
},
checkCompatibility:function(j){var k=this.flatten(j);
var m=k.length;
if(m<2){return true;
}var n={};
var o={};
var p={};
var g;
for(var q=0;q<m;q++){g=k[q];
for(var h in g.events){if(p[h]){throw new Error('Conflict between mixin "'+g.name+'" and "'+p[h]+'" in member "'+h+'"!');
}p[h]=g.name;
}
for(var h in g.properties){if(n[h]){throw new Error('Conflict between mixin "'+g.name+'" and "'+n[h]+'" in property "'+h+'"!');
}n[h]=g.name;
}
for(var h in g.members){if(o[h]){throw new Error('Conflict between mixin "'+g.name+'" and "'+o[h]+'" in member "'+h+'"!');
}o[h]=g.name;
}}return true;
},
isCompatible:function(g,
r){var k=qx.Class.getMixins(r);
k.push(g);
return qx.Mixin.checkCompatibility(k);
},
getByName:function(e){return this.$$registry[e];
},
isDefined:function(e){return this.getByName(e)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
flatten:function(j){if(!j){return [];
}var k=j.concat();
for(var q=0,
s=j.length;q<s;q++){if(j[q].$$includes){k.push.apply(k,
this.flatten(j[q].$$includes));
}}return k;
},
genericToString:function(){return d+this.name+b;
},
$$registry:{},
__B:null,
__C:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,
{members:{tr:function(b,
c){var d=qx.locale.Manager;
if(d){return d.tr.apply(d,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
trn:function(e,
f,
g,
c){var d=qx.locale.Manager;
if(d){return d.trn.apply(d,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
marktr:function(b){var d=qx.locale.Manager;
if(d){return d.marktr.apply(d,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var a="__lW",
b="abstract",
c="qx.application.AbstractGui";
qx.Class.define(c,
{type:b,
extend:qx.core.Object,
implement:[qx.application.IApplication],
include:qx.locale.MTranslation,
members:{__lW:null,
_createRootWidget:function(){throw new Error("Abstract method call");
},
getRoot:function(){return this.__lW;
},
main:function(){qx.theme.manager.Meta.getInstance().initialize();
this.__lW=this._createRootWidget();
},
finalize:function(){this.render();
},
render:function(){qx.ui.core.queue.Manager.flush();
},
terminate:function(){}},
destruct:function(){this._disposeFields(a);
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,
{extend:qx.application.AbstractGui,
members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var a="static",
b="execute",
c="user",
d="change",
f="north",
g="main",
h="Surfin' Safari",
i="separator-vertical",
j="__tu",
k="_horizontalSplitPane",
l="_applyArticle",
m="Heise",
n="_listView",
o="F1",
p="Mozilla Developer News",
q="Control+A",
r="_treeView",
s="http://my.opera.com/desktopteam/xml/rss/blog/",
t="removeFeed",
u="_verticalSplitPane",
v="http://blogs.msdn.com/jscript/rss.xml",
w="http://feedproxy.feedburner.com/qooxdoo/news/content",
x="http://www.appleinsider.com/appleinsider.rss",
y="Apple Insider",
z="feedreader.model.Feed",
A="Opera Desktop Blog",
B="vertical",
C="http://webkit.org/blog/?feed=rss2",
D="http://www.heise.de/newsticker/heise-atom.xml",
E="http://www.alistapart.com/rss.xml",
F="http://developer.mozilla.org/devnews/index.php/feed/",
G="JScript Team Blog",
H="http://feedproxy.feedburner.com/ajaxian",
I="Control+D",
J="_feedList",
K="Ajaxian",
L="_applyFeed",
M="feedreader.model.Article",
N="feedreader.Application",
O="http://daringfireball.net/index.xml",
P="Control+P",
Q="Control+R",
R="qooxdoo News",
S="_articleView",
T="A List Apart",
U="Daring Fireball",
V="_toolBarView";
qx.Class.define(N,
{extend:qx.application.Standalone,
properties:{feed:{check:z,
nullable:true,
apply:L},
article:{check:M,
nullable:true,
apply:l}},
members:{main:function(){arguments.callee.base.call(this);
{};
this._initializeModel();
this._initializeCommands();
this._createLayout();
this._feedList.addFeed(new feedreader.model.Feed(R,
w,
a));
this._feedList.addFeed(new feedreader.model.Feed(p,
F,
a));
this._feedList.addFeed(new feedreader.model.Feed(G,
v,
a));
this._feedList.addFeed(new feedreader.model.Feed(U,
O,
a));
this._feedList.addFeed(new feedreader.model.Feed(h,
C,
a));
this._feedList.addFeed(new feedreader.model.Feed(K,
H,
a));
this._feedList.addFeed(new feedreader.model.Feed(m,
D,
c));
this._feedList.addFeed(new feedreader.model.Feed(T,
E,
c));
this._feedList.addFeed(new feedreader.model.Feed(y,
x,
c));
this._feedList.addFeed(new feedreader.model.Feed(A,
s,
c));
},
finalize:function(){arguments.callee.base.call(this);
this.reload();
},
_initializeModel:function(){this._feedList=new feedreader.model.FeedList();
this._feedList.addListener(d,
this._onSelectFeed,
this);
},
_onSelectFeed:function(W){var X=W.getData();
var Y=W.getOldData();
if(Y){Y.removeListener(d,
this._onSelectArticle,
this);
}this.setFeed(X);
if(X){X.addListener(d,
this._onSelectArticle,
this);
var ba=X.getSelected();
this.setArticle(ba);
}},
_onSelectArticle:function(W){var bb=W.getData();
this.setArticle(bb);
},
_createLayout:function(){var bc=new qx.ui.layout.Dock();
bc.setSeparatorY(i);
var bd=new qx.ui.container.Composite(bc);
this.getRoot().add(bd,
{edge:0});
this._header=new feedreader.view.Header();
bd.add(this._header,
{edge:f});
this._toolBarView=new feedreader.view.ToolBar(this);
bd.add(this._toolBarView,
{edge:f});
this._horizontalSplitPane=new qx.ui.splitpane.Pane();
bd.add(this._horizontalSplitPane);
this._treeView=new feedreader.view.Tree(this._feedList);
this._treeView.setWidth(250);
this._horizontalSplitPane.add(this._treeView,
0);
this._verticalSplitPane=new qx.ui.splitpane.Pane(B);
this._verticalSplitPane.setDecorator(null);
this._horizontalSplitPane.add(this._verticalSplitPane,
1);
this._listView=new feedreader.view.List(this._feedList);
this._listView.setHeight(200);
this._listView.setDecorator(g);
this._verticalSplitPane.add(this._listView,
0);
this._articleView=new feedreader.view.Article();
this._articleView.setDecorator(g);
this._verticalSplitPane.add(this._articleView,
1);
},
_initializeCommands:function(){var be={};
be.reload=new qx.event.Command(Q);
be.reload.addListener(b,
this.reload,
this);
be.about=new qx.event.Command(o);
be.about.addListener(b,
this.showAbout,
this);
be.preferences=new qx.event.Command(P);
be.preferences.addListener(b,
this.showPreferences,
this);
be.addFeed=new qx.event.Command(q);
be.addFeed.addListener(b,
this.showAddFeed,
this);
be.removeFeed=new qx.event.Command(I);
be.removeFeed.addListener(b,
this.removeFeed,
this);
this.__tu=be;
},
getCommand:function(bf){return this.__tu[bf];
},
addFeed:function(bg,
bh,
bi){var X=new feedreader.model.Feed(bg,
bh,
bi);
this._feedList.addFeed(X);
var bj=feedreader.io.FeedLoader.getInstance();
bj.load(X);
},
removeFeed:function(){var X=this._feedList.getSelected();
if(X&&X.getCategory()!==a){this._feedList.removeFeed(X);
}},
reload:function(){var bj=feedreader.io.FeedLoader.getInstance();
bj.loadAll(this._feedList);
},
showPreferences:function(){if(!this._prefWindow){this._prefWindow=new feedreader.view.PreferenceWindow();
this.getRoot().add(this._prefWindow);
}this._prefWindow.center();
this._prefWindow.open();
},
showAbout:function(){alert(this.tr("FeedReader (qooxdoo powered)"));
},
showAddFeed:function(){if(!this._addFeedWindow){this._addFeedWindow=new feedreader.view.AddFeedWindow(this);
this.getRoot().add(this._addFeedWindow);
}this._addFeedWindow.center();
this._addFeedWindow.open();
},
_applyFeed:function(bk,
bl){this._listView.setFeed(bk);
this.getCommand(t).setEnabled(!!(bk&&bk.getCategory()!==a));
},
_applyArticle:function(bk,
bl){if(bk){this._articleView.setArticle(bk);
}else{this._articleView.resetArticle();
}}},
destruct:function(){this._disposeFields(j);
this._disposeObjects(V,
n,
S,
r,
J,
k,
u);
}});
})();
(function(){var a='"',
b="qx.lang.Core",
c="\\\\",
d="\\\"",
e="[object Error]";
qx.Bootstrap.define(b);
if(!Error.prototype.toString||Error.prototype.toString()==e){Error.prototype.toString=function(){return this.message;
};
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(f,
g){if(g==null){g=0;
}else if(g<0){g=Math.max(0,
this.length+g);
}
for(var h=g;h<this.length;h++){if(this[h]===f){return h;
}}return -1;
};
}
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(f,
g){if(g==null){g=this.length-1;
}else if(g<0){g=Math.max(0,
this.length+g);
}
for(var h=g;h>=0;h--){if(this[h]===f){return h;
}}return -1;
};
}
if(!Array.prototype.forEach){Array.prototype.forEach=function(j,
k){var m=this.length;
for(var h=0;h<m;h++){j.call(k,
this[h],
h,
this);
}};
}
if(!Array.prototype.filter){Array.prototype.filter=function(j,
k){var m=this.length;
var n=[];
for(var h=0;h<m;h++){if(j.call(k,
this[h],
h,
this)){n.push(this[h]);
}}return n;
};
}
if(!Array.prototype.map){Array.prototype.map=function(j,
k){var m=this.length;
var n=[];
for(var h=0;h<m;h++){n.push(j.call(k,
this[h],
h,
this));
}return n;
};
}
if(!Array.prototype.some){Array.prototype.some=function(j,
k){var m=this.length;
for(var h=0;h<m;h++){if(j.call(k,
this[h],
h,
this)){return true;
}}return false;
};
}
if(!Array.prototype.every){Array.prototype.every=function(j,
k){var m=this.length;
for(var h=0;h<m;h++){if(!j.call(k,
this[h],
h,
this)){return false;
}}return true;
};
}if(!String.prototype.quote){String.prototype.quote=function(){return a+this.replace(/\\/g,
c).replace(/\"/g,
d)+a;
};
}})();
(function(){var a="indexOf",
b="lastIndexOf",
c="slice",
d="concat",
e="join",
f="toLocaleUpperCase",
g="shift",
h="substr",
j="filter",
k="unshift",
m="match",
n="quote",
o="qx.lang.Generics",
p="localeCompare",
q="sort",
r="some",
t="charAt",
u="split",
v="substring",
w="pop",
x="toUpperCase",
y="replace",
z="push",
A="charCodeAt",
B="every",
C="reverse",
D="search",
E="forEach",
F="map",
G="toLowerCase",
H="splice",
I="toLocaleLowerCase";
qx.Bootstrap.define(o,
{statics:{__bT:{"Array":[e,
C,
q,
z,
w,
g,
k,
H,
d,
c,
a,
b,
E,
F,
j,
r,
B],
"String":[n,
v,
G,
x,
t,
A,
a,
b,
I,
f,
p,
m,
D,
y,
u,
h,
d,
c]},
__bU:function(J,
K){return function(L){return J.prototype[K].apply(L,
Array.prototype.slice.call(arguments,
1));
};
},
__bV:function(){var M=qx.lang.Generics.__bT;
for(var N in M){var J=window[N];
var O=M[N];
for(var P=0,
Q=O.length;P<Q;P++){var K=O[P];
if(!J[K]){J[K]=qx.lang.Generics.__bU(J,
K);
}}}}},
defer:function(R){R.__bV();
}});
})();
(function(){var a=":",
b="qx.client",
c="anonymous",
d="...",
e="qx.dev.StackTrace",
f="",
g="\n",
h="/source/class/",
j=".";
qx.Class.define(e,
{statics:{getStackTrace:qx.core.Variant.select(b,
{"gecko":function(){try{throw new Error();
}catch(e){var k=this.getStackTraceFromError(e);
qx.lang.Array.removeAt(k,
0);
var l=this.getStackTraceFromCaller(arguments);
var m=l.length>k.length?l:k;
for(var n=0;n<Math.min(l.length,
k.length);n++){var o=l[n];
if(o.indexOf(c)>=0){continue;
}var p=o.split(a);
if(p.length!=2){continue;
}var q=p[0];
var r=p[1];
var s=k[n];
var t=s.split(a);
var u=t[0];
var v=t[1];
if(qx.Class.getByName(u)){var w=u;
}else{w=q;
}var x=w+a;
if(r){x+=r+a;
}x+=v;
m[n]=x;
}return m;
}},
"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},
"opera":function(){var y;
try{y.bar();
}catch(e){var m=this.getStackTraceFromError(e);
qx.lang.Array.removeAt(m,
0);
return m;
}return [];
}}),
getStackTraceFromCaller:qx.core.Variant.select(b,
{"opera":function(z){return [];
},
"default":function(z){var m=[];
var A=qx.lang.Function.getCaller(z);
var B={};
while(A){var C=qx.lang.Function.getName(A);
m.push(C);
try{A=A.caller;
}catch(e){break;
}
if(!A){break;
}var D=qx.core.ObjectRegistry.toHashCode(A);
if(B[D]){m.push(d);
break;
}B[D]=A;
}return m;
}}),
getStackTraceFromError:qx.core.Variant.select(b,
{"gecko":function(E){if(!E.stack){return [];
}var F=/@(.+):(\d+)$/gm;
var G;
var m=[];
while((G=F.exec(E.stack))!=null){var H=G[1];
var v=G[2];
var w=this.__bW(H);
m.push(w+a+v);
}return m;
},
"webkit":function(E){if(E.sourceURL&&E.line){return [this.__bW(E.sourceURL)+a+E.line];
}else{return [];
}},
"opera":function(E){if(E.message.indexOf("Backtrace:")<0){return [];
}var m=[];
var I=qx.lang.String.trim(E.message.split("Backtrace:")[1]);
var J=I.split(g);
for(var n=0;n<J.length;n++){var K=J[n].match(/\s*Line ([0-9]+) of.* (\S.*)/);
if(K&&K.length>=2){var v=K[1];
var L=this.__bW(K[2]);
m.push(L+a+v);
}}return m;
},
"default":function(){return [];
}}),
__bW:function(L){var M=h;
var N=L.indexOf(M);
var w=(N==-1)?L:L.substring(N+M.length).replace(/\//g,
j).replace(/\.js$/,
f);
return w;
}}});
})();
(function(){var a="qx.util.ObjectPool",
b="Integer";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(c){arguments.callee.base.call(this);
this.__ce={};
if(c!==undefined){this.setSize(c);
}},
properties:{size:{check:b,
init:null,
nullable:true}},
members:{getObject:function(d){if(this.$$disposed){return;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__ce[d.classname];
if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},
poolObject:function(e){if(!this.__ce){return;
}var g=e.classname;
var f=this.__ce[g];
if(e.$$pooled){throw new Error("Object is already pooled: "+e);
}
if(!f){this.__ce[g]=f=[];
}var c=this.getSize()||Infinity;
if(f.length>c){this.warn("Cannot pool "+e+" because the pool is already full.");
e.dispose();
return;
}e.$$pooled=true;
f.push(e);
}},
destruct:function(){var f=this.__ce;
var g,
h,
j,
k;
for(g in f){h=f[g];
for(j=0,
k=h.length;j<k;j++){h[j].dispose();
}}delete this.__ce;
}});
})();
(function(){var a="singleton",
b="qx.event.Pool";
qx.Class.define(b,
{extend:qx.util.ObjectPool,
type:a,
construct:function(){arguments.callee.base.call(this,
30);
},
members:{__cf:{"qx.legacy.event.type.DragEvent":1,
"qx.legacy.event.type.MouseEvent":1,
"qx.legacy.event.type.KeyEvent":1},
poolObject:function(c){if(this.__cf[c.classname]){return;
}arguments.callee.base.call(this,
c);
}}});
})();
(function(){var a="_originalTarget",
b="_relatedTarget",
c="qx.event.type.Event",
d="_target",
e="_currentTarget";
qx.Class.define(c,
{extend:qx.core.Object,
statics:{CAPTURING_PHASE:1,
AT_TARGET:2,
BUBBLING_PHASE:3},
members:{init:function(f,
g){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!f;
this._cancelable=!!g;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},
clone:function(h){if(h){var i=h;
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
},
stopPropagation:function(){{};
this._stopPropagation=true;
},
getPropagationStopped:function(){return !!this._stopPropagation;
},
preventDefault:function(){{};
this._preventDefault=true;
},
getDefaultPrevented:function(){return !!this._preventDefault;
},
getType:function(){return this._type;
},
setType:function(j){this._type=j;
},
getEventPhase:function(){return this._eventPhase;
},
setEventPhase:function(k){this._eventPhase=k;
},
getTimeStamp:function(){return this._timeStamp;
},
getTarget:function(){return this._target;
},
setTarget:function(l){this._target=l;
},
getCurrentTarget:function(){return this._currentTarget||this._target;
},
setCurrentTarget:function(m){this._currentTarget=m;
},
getRelatedTarget:function(){return this._relatedTarget;
},
setRelatedTarget:function(n){this._relatedTarget=n;
},
getOriginalTarget:function(){return this._originalTarget;
},
setOriginalTarget:function(o){this._originalTarget=o;
},
getBubbles:function(){return this._bubbles;
},
setBubbles:function(p){this._bubbles=p;
},
isCancelable:function(){return this._cancelable;
},
setCancelable:function(g){this._cancelable=g;
}},
destruct:function(){this._disposeFields(d,
e,
b,
a);
}});
})();
(function(){var a="__cg",
b="Better use 'getData'",
c="__ch",
d="Better use 'getOldData'",
e="qx.event.type.Data";
qx.Class.define(e,
{extend:qx.event.type.Event,
members:{init:function(f,
g,
h){arguments.callee.base.call(this,
false,
h);
this.__cg=f;
this.__ch=g;
return this;
},
clone:function(i){var j=arguments.callee.base.call(this,
i);
j.__cg=this.__cg;
j.__ch=this.__ch;
return j;
},
getData:function(){return this.__cg;
},
getOldData:function(){return this.__ch;
},
getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
b);
return this.__cg;
},
getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
d);
return this.__ch;
}},
destruct:function(){this._disposeFields(a,
c);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,
SUPPORTED_TYPES:null,
TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,
IGNORE_CAN_HANDLE:false},
members:{canHandleEvent:function(b,
c){return qx.Class.supportsEvent(b.constructor,
c);
},
registerEvent:function(b,
c,
d){},
unregisterEvent:function(b,
c,
d){}},
defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,
{statics:{disposeFields:function(b,
c){var d;
for(var e=0,
f=c.length;e<f;e++){var d=c[e];
if(b[d]==null||!b.hasOwnProperty(d)){continue;
}b[d]=null;
}},
disposeObjects:function(b,
c){var d;
for(var e=0,
f=c.length;e<f;e++){d=c[e];
if(b[d]==null||!b.hasOwnProperty(d)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[d].dispose){b[d].dispose();
}else{throw new Error("Has no disposable object under key: "+d+"!");
}}b[d]=null;
}},
disposeArray:function(b,
g){var h=b[g];
if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){b[g]=null;
return;
}try{var j;
for(var e=h.length-1;e>=0;e--){j=h[e];
if(j){j.dispose();
}}}catch(ex){throw new Error("The array field: "+g+" of object: "+b+" has non disposable entries: "+ex);
}h.length=0;
b[g]=null;
},
disposeMap:function(b,
g){var h=b[g];
if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){b[g]=null;
return;
}try{for(var k in h){if(h.hasOwnProperty(k)){h[k].dispose();
}}}catch(ex){throw new Error("The map field: "+g+" of object: "+b+" has non disposable entries: "+ex);
}b[g]=null;
}}});
})();
(function(){var a="_applyTheme",
b="qx.theme",
c="qx.theme.manager.Meta",
d="qx.theme.Classic",
e="Theme",
f="singleton";
qx.Class.define(c,
{type:f,
extend:qx.core.Object,
properties:{theme:{check:e,
nullable:true,
apply:a}},
members:{_applyTheme:function(g,
h){var i=null;
var j=null;
var k=null;
var l=null;
var m=null;
if(g){i=g.meta.color||null;
j=g.meta.decoration||null;
k=g.meta.font||null;
l=g.meta.icon||null;
m=g.meta.appearance||null;
}var n=qx.theme.manager.Color.getInstance();
var o=qx.theme.manager.Decoration.getInstance();
var p=qx.theme.manager.Font.getInstance();
var q=qx.theme.manager.Icon.getInstance();
var r=qx.theme.manager.Appearance.getInstance();
n.setTheme(i);
o.setTheme(j);
p.setTheme(k);
q.setTheme(l);
r.setAppearanceTheme(m);
},
initialize:function(){var s=qx.core.Setting;
var t,
u;
t=s.get(b);
if(t){u=qx.Theme.getByName(t);
if(!u){throw new Error("The theme to use is not available: "+t);
}this.setTheme(u);
}}},
settings:{"qx.theme":d}});
})();
(function(){var a="_dynamic",
b="qx.util.ValueManager",
c="abstract";
qx.Class.define(b,
{type:c,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},
members:{resolveDynamic:function(d){return this._dynamic[d];
},
isDynamic:function(d){return !!this._dynamic[d];
},
resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
}},
destruct:function(){this._disposeFields(a);
}});
})();
(function(){var a="_applyTheme",
b="qx.theme.manager.Color",
c="Theme",
d="changeTheme",
e="string",
f="singleton";
qx.Class.define(b,
{type:f,
extend:qx.util.ValueManager,
properties:{theme:{check:c,
nullable:true,
apply:a,
event:d}},
members:{_applyTheme:function(g){var h=this._dynamic={};
if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;
for(var l in i){k=i[l];
if(typeof k===e){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}}}});
})();
(function(){var a=",",
c="rgb(",
d=")",
e="qx.theme.manager.Color",
h="qx.util.ColorUtil";
qx.Class.define(h,
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
magenta:[255,
0,
255],
orange:[255,
165,
0],
brown:[165,
42,
42]},
isNamedColor:function(j){return this.NAMED[j]!==undefined;
},
isSystemColor:function(j){return this.SYSTEM[j]!==undefined;
},
supportsThemes:function(){return qx.Class.isDefined(e);
},
isThemedColor:function(j){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(j);
},
stringToRgb:function(k){if(this.supportsThemes()&&this.isThemedColor(k)){var k=qx.theme.manager.Color.getInstance().resolveDynamic(k);
}
if(this.isNamedColor(k)){return this.NAMED[k];
}else if(this.isSystemColor(k)){throw new Error("Could not convert system colors to RGB: "+k);
}else if(this.isRgbString(k)){return this.__eY();
}else if(this.isHex3String(k)){return this.__fa();
}else if(this.isHex6String(k)){return this.__fb();
}throw new Error("Could not parse color: "+k);
},
cssStringToRgb:function(k){if(this.isNamedColor(k)){return this.NAMED[k];
}else if(this.isSystemColor(k)){throw new Error("Could not convert system colors to RGB: "+k);
}else if(this.isRgbString(k)){return this.__eY();
}else if(this.isHex3String(k)){return this.__fa();
}else if(this.isHex6String(k)){return this.__fb();
}throw new Error("Could not parse color: "+k);
},
stringToRgbString:function(k){return this.rgbToRgbString(this.stringToRgb(k));
},
rgbToRgbString:function(l){return c+l[0]+a+l[1]+a+l[2]+d;
},
rgbToHexString:function(l){return (qx.lang.String.pad(l[0].toString(16).toUpperCase(),
2)+qx.lang.String.pad(l[1].toString(16).toUpperCase(),
2)+qx.lang.String.pad(l[2].toString(16).toUpperCase(),
2));
},
isValidPropertyValue:function(k){return this.isThemedColor(k)||this.isNamedColor(k)||this.isHex3String(k)||this.isHex6String(k)||this.isRgbString(k);
},
isCssString:function(k){return this.isSystemColor(k)||this.isNamedColor(k)||this.isHex3String(k)||this.isHex6String(k)||this.isRgbString(k);
},
isHex3String:function(k){return this.REGEXP.hex3.test(k);
},
isHex6String:function(k){return this.REGEXP.hex6.test(k);
},
isRgbString:function(k){return this.REGEXP.rgb.test(k);
},
__eY:function(){var m=parseInt(RegExp.$1,
10);
var n=parseInt(RegExp.$2,
10);
var o=parseInt(RegExp.$3,
10);
return [m,
n,
o];
},
__fa:function(){var m=parseInt(RegExp.$1,
16)*17;
var n=parseInt(RegExp.$2,
16)*17;
var o=parseInt(RegExp.$3,
16)*17;
return [m,
n,
o];
},
__fb:function(){var m=(parseInt(RegExp.$1,
16)*16)+parseInt(RegExp.$2,
16);
var n=(parseInt(RegExp.$3,
16)*16)+parseInt(RegExp.$4,
16);
var o=(parseInt(RegExp.$5,
16)*16)+parseInt(RegExp.$6,
16);
return [m,
n,
o];
},
hex3StringToRgb:function(j){if(this.isHex3String(j)){return this.__fa(j);
}throw new Error("Invalid hex3 value: "+j);
},
hex6StringToRgb:function(j){if(this.isHex6String(j)){return this.__fb(j);
}throw new Error("Invalid hex6 value: "+j);
},
hexStringToRgb:function(j){if(this.isHex3String(j)){return this.__fa(j);
}
if(this.isHex6String(j)){return this.__fb(j);
}throw new Error("Invalid hex value: "+j);
},
rgbToHsb:function(l){var s,
u,
v;
var m=l[0];
var n=l[1];
var o=l[2];
var w=(m>n)?m:n;
if(o>w){w=o;
}var x=(m<n)?m:n;
if(o<x){x=o;
}v=w/255.0;
if(w!=0){u=(w-x)/w;
}else{u=0;
}
if(u==0){s=0;
}else{var y=(w-m)/(w-x);
var z=(w-n)/(w-x);
var A=(w-o)/(w-x);
if(m==w){s=A-z;
}else if(n==w){s=2.0+y-A;
}else{s=4.0+z-y;
}s=s/6.0;
if(s<0){s=s+1.0;
}}return [Math.round(s*360),
Math.round(u*100),
Math.round(v*100)];
},
hsbToRgb:function(B){var C,
D,
E,
F,
G;
var s=B[0]/360;
var u=B[1]/100;
var v=B[2]/100;
if(s>=1.0){s%=1.0;
}
if(u>1.0){u=1.0;
}
if(v>1.0){v=1.0;
}var H=Math.floor(255*v);
var l={};
if(u==0.0){l.red=l.green=l.blue=H;
}else{s*=6.0;
C=Math.floor(s);
D=s-C;
E=Math.floor(H*(1.0-u));
F=Math.floor(H*(1.0-(u*D)));
G=Math.floor(H*(1.0-(u*(1.0-D))));
switch(C){case 0:l.red=H;
l.green=G;
l.blue=E;
break;
case 1:l.red=F;
l.green=H;
l.blue=E;
break;
case 2:l.red=E;
l.green=H;
l.blue=G;
break;
case 3:l.red=E;
l.green=F;
l.blue=H;
break;
case 4:l.red=G;
l.green=E;
l.blue=H;
break;
case 5:l.red=H;
l.green=E;
l.blue=F;
break;
}}return l;
},
randomColor:function(){var I=Math.round(Math.random()*255);
var J=Math.round(Math.random()*255);
var K=Math.round(Math.random()*255);
return this.rgbToRgbString([I,
J,
K]);
}}});
})();
(function(){var a="decoration",
b="object",
c="_applyTheme",
d="qx.theme.manager.Decoration",
e="__eT",
f="Theme",
g="string",
h="singleton";
qx.Class.define(d,
{type:h,
extend:qx.core.Object,
properties:{theme:{check:f,
nullable:true,
apply:c}},
members:{resolve:function(i){if(!i){return null;
}
if(typeof i===b){return i;
}var j=this.getTheme();
if(!j){return null;
}var j=this.getTheme();
if(!j){return null;
}var k=this.__eT;
if(!k){k=this.__eT={};
}var l=k[i];
if(l){return l;
}var m=j.decorations[i];
if(!m){return null;
}var n=m.decorator;
if(n==null){throw new Error("Missing definition of which decorator to use in entry: "+i+"!");
}return k[i]=(new n).set(m.style);
},
isValidPropertyValue:function(i){if(typeof i===g){return this.isDynamic(i);
}else if(typeof i===b){var n=i.constructor;
return qx.Class.hasInterface(n,
qx.ui.decoration.IDecorator);
}return false;
},
isDynamic:function(i){if(!i){return false;
}var j=this.getTheme();
if(!j){return false;
}return !!j.decorations[i];
},
_applyTheme:function(i){var o=qx.util.AliasManager.getInstance();
i?o.add(a,
i.resource):o.remove(a);
}},
destruct:function(){this._disposeMap(e);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,
{members:{init:function(b){},
resize:function(b,
c,
d){},
tint:function(b,
e){},
getMarkup:function(){},
getInsets:function(){}}});
})();
(function(){var a="/",
b="_aliases",
c="0",
d="qx/static",
e="http://",
f="https://",
g="file://",
h="qx.util.AliasManager",
i="singleton",
j=".",
k="static";
qx.Class.define(h,
{type:i,
extend:qx.util.ValueManager,
construct:function(){arguments.callee.base.call(this);
this._aliases={};
this.add(k,
d);
},
members:{_preprocess:function(l){var m=this._dynamic;
if(m[l]===false){return l;
}else if(m[l]===undefined){if(l.charAt(0)===a||l.charAt(0)===j||l.indexOf(e)===0||l.indexOf(f)===c||l.indexOf(g)===0){m[l]=false;
return l;
}var n=l.substring(0,
l.indexOf(a));
var o=this._aliases[n];
if(o!==undefined){m[l]=o+l.substring(n.length);
}}return l;
},
add:function(n,
p){this._aliases[n]=p;
var m=this._dynamic;
var q={};
for(var r in m){if(r.substring(0,
r.indexOf(a))===n){m[r]=p+r.substring(n.length);
q[r]=true;
}}},
remove:function(n){delete this._aliases[n];
},
resolve:function(r){if(r!==null){r=this._preprocess(r);
}return this._dynamic[r]||r;
}},
destruct:function(){this._disposeFields(b);
}});
})();
(function(){var a="qx.theme.manager.Font",
b="Theme",
c="changeTheme",
d="_applyTheme",
e="singleton";
qx.Class.define(a,
{type:e,
extend:qx.util.ValueManager,
properties:{theme:{check:b,
nullable:true,
apply:d,
event:c}},
members:{resolveDynamic:function(f){return f instanceof qx.bom.Font?f:this._dynamic[f];
},
isDynamic:function(f){return f&&(f instanceof qx.bom.Font||this._dynamic[f]!==undefined);
},
_applyTheme:function(f){var g=this._dynamic;
for(var h in g){if(g[h].themed){g[h].dispose();
delete g[h];
}}
if(f){var i=f.fonts;
var j=qx.bom.Font;
for(var h in i){g[h]=(new j).set(i[h]);
g[h].themed=true;
}}}}});
})();
(function(){var a="",
b="underline",
c="Boolean",
d="px",
e='"',
f="italic",
g="normal",
h="bold",
j="_applyItalic",
k="_applyBold",
m="Integer",
n="_applyFamily",
o="_applyLineHeight",
p="Array",
q="overline",
r="line-through",
s="qx.bom.Font",
t="Number",
u="_applyDecoration",
v=" ",
w="_applySize",
x=",";
qx.Class.define(s,
{extend:qx.core.Object,
construct:function(y,
z){arguments.callee.base.call(this);
if(y!==undefined){this.setSize(y);
}
if(z!==undefined){this.setFamily(z);
}},
statics:{fromString:function(A){var B=new qx.bom.Font();
var C=A.split(/\s+/);
var D=[];
var E;
for(var F=0;F<C.length;F++){switch(E=C[F]){case h:B.setBold(true);
break;
case f:B.setItalic(true);
break;
case b:B.setDecoration(b);
break;
default:var G=parseInt(E,
10);
if(G==E||qx.lang.String.contains(E,
d)){B.setSize(G);
}else{D.push(E);
}break;
}}
if(D.length>0){B.setFamily(D);
}return B;
},
fromConfig:function(H){var B=new qx.bom.Font;
B.set(H);
return B;
},
__gR:{fontFamily:a,
fontSize:a,
fontWeight:a,
fontStyle:a,
textDecoration:a,
lineHeight:1.2},
getDefaultStyles:function(){return this.__gR;
}},
properties:{size:{check:m,
nullable:true,
apply:w},
lineHeight:{check:t,
nullable:true,
apply:o},
family:{check:p,
nullable:true,
apply:n},
bold:{check:c,
nullable:true,
apply:k},
italic:{check:c,
nullable:true,
apply:j},
decoration:{check:[b,
r,
q],
nullable:true,
apply:u}},
members:{__gS:null,
__gT:null,
__gU:null,
__gV:null,
__gW:null,
__gX:null,
_applySize:function(I,
J){this.__gS=I===null?null:I+d;
},
_applyLineHeight:function(I,
J){this.__gX=I===null?null:I;
},
_applyFamily:function(I,
J){var z=a;
for(var F=0,
K=I.length;F<K;F++){if(I[F].indexOf(v)>0){z+=e+I[F]+e;
}else{z+=I[F];
}
if(F!==K-1){z+=x;
}}this.__gT=z;
},
_applyBold:function(I,
J){this.__gU=I===null?null:I?h:g;
},
_applyItalic:function(I,
J){this.__gV=I===null?null:I?f:g;
},
_applyDecoration:function(I,
J){this.__gW=I===null?null:I;
},
getStyles:function(){return {fontFamily:this.__gT,
fontSize:this.__gS,
fontWeight:this.__gU,
fontStyle:this.__gV,
textDecoration:this.__gW,
lineHeight:this.__gX};
}}});
})();
(function(){var a="icon",
b="qx.theme.manager.Icon",
c="Theme",
d="_applyTheme",
e="singleton";
qx.Class.define(b,
{type:e,
extend:qx.core.Object,
properties:{theme:{check:c,
nullable:true,
apply:d}},
members:{_applyTheme:function(f,
g){var h=qx.util.AliasManager.getInstance();
f?h.add(a,
f.resource):h.remove(a);
}}});
})();
(function(){var a="string",
b="__fc",
c="_applyAppearanceTheme",
d="qx.theme.manager.Appearance",
e=":",
f="changeAppearanceTheme",
g="Theme",
h="/",
i="singleton",
j="__fd";
qx.Class.define(d,
{type:i,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__fc={};
this.__fd={};
},
properties:{appearanceTheme:{check:g,
nullable:true,
apply:c,
event:f}},
members:{__fe:{},
_applyAppearanceTheme:function(k,
l){},
__ff:function(m,
n){var o=n.appearances;
var p=o[m];
if(!p){var q=h;
var r=[];
var s=m.split(q);
var t;
while(!p&&s.length>0){r.unshift(s.pop());
var u=s.join(q);
p=o[u];
if(p){t=p.alias||p;
if(typeof t===a){var v=t+q+r.join(q);
return this.__ff(v,
n);
}}}return null;
}else if(typeof p===a){return this.__ff(p,
n);
}else if(p.include&&!p.style){return this.__ff(p.include,
n);
}return m;
},
styleFrom:function(m,
w,
n){if(!n){n=this.getAppearanceTheme();
}var x=this.__fd;
var y=x[m];
if(!y){y=x[m]=this.__ff(m,
n);
}var p=n.appearances[y];
if(!p){this.warn("Missing appearance: "+m);
return null;
}if(!p.style){return null;
}var z=y;
if(w){var A=p.$$bits;
if(!A){A=p.$$bits={};
p.$$length=0;
}var B=0;
for(var C in w){if(A[C]==null){A[C]=1<<p.$$length++;
}B+=A[C];
}if(B>0){z+=e+B;
}}var D=this.__fc;
if(D[z]!==undefined){return D[z];
}if(!w){w=this.__fe;
}var E;
if(p.include||p.base){var F=p.style(w);
var G;
if(p.include){G=this.styleFrom(p.include,
w,
n);
}E={};
if(p.base){var H=this.styleFrom(y,
w,
p.base);
if(p.include){for(var I in H){if(G[I]===undefined&&F[I]===undefined){E[I]=H[I];
}}}else{for(var I in H){if(F[I]===undefined){E[I]=H[I];
}}}}if(p.include){for(var I in G){if(F[I]===undefined){E[I]=G[I];
}}}for(var I in F){E[I]=F[I];
}}else{E=p.style(w);
}return D[z]=E||null;
}},
destruct:function(){this._disposeFields(b,
j);
}});
})();
(function(){var b="other",
c="widgets",
d="fonts",
e="appearances",
f="qx.Theme",
g="]",
h="[Theme ",
j="colors",
k="decorations",
m="Theme",
n="meta",
o="borders",
p="icons";
qx.Class.define(f,
{statics:{define:function(q,
r){if(!r){var r={};
}
if(r.include&&!(r.include instanceof Array)){r.include=[r.include];
}{};
var s={$$type:m,
name:q,
title:r.title,
toString:this.genericToString};
if(r.extend){s.supertheme=r.extend;
}if(r.resource){s.resource=r.resource;
}s.basename=qx.Bootstrap.createNamespace(q,
s);
this.__lY(s,
r);
this.$$registry[q]=s;
if(r.include){for(var t=0,
u=r.include,
v=u.length;t<v;t++){this.include(s,
u[t]);
}}},
getAll:function(){return this.$$registry;
},
getByName:function(q){return this.$$registry[q];
},
isDefined:function(q){return this.getByName(q)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
genericToString:function(){return h+this.name+g;
},
__lX:function(r){for(var t=0,
w=this.__ma,
v=w.length;t<v;t++){if(r[w[t]]){return w[t];
}}},
__lY:function(s,
r){var x=this.__lX(r);
if(r.extend&&!x){x=r.extend.type;
}s.type=x||b;
if(!x){return;
}var y=function(){};
if(r.extend){y.prototype=new r.extend.$$clazz;
}var z=y.prototype;
var A=r[x];
for(var B in A){z[B]=A[B];
if(z[B].base){{};
z[B].base=r.extend;
}}s.$$clazz=y;
s[x]=new y;
},
$$registry:{},
__ma:[j,
o,
k,
d,
p,
c,
e,
n],
__mb:null,
__mc:null,
__md:function(){},
patch:function(s,
C){var x=this.__lX(C);
if(x!==this.__lX(s)){throw new Error("The mixins '"+s.name+"' are not compatible '"+C.name+"'!");
}var A=C[x];
var z=s[x];
for(var D in A){z[D]=A[D];
}},
include:function(s,
C){var x=C.type;
if(x!==s.type){throw new Error("The mixins '"+s.name+"' are not compatible '"+C.name+"'!");
}var A=C[x];
var z=s[x];
for(var D in A){if(z[D]!==undefined){throw new Error("It is not allowed to overwrite the key '"+D+"' of theme '"+s.name+"' by mixin theme '"+C.name+"'.");
}z[D]=A[D];
}}}});
})();
(function(){var a="qx.event.handler.UserAction",
b="__co",
c="__cn";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(d){arguments.callee.base.call(this);
this.__cn=d;
this.__co=d.getWindow();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{useraction:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(e,
f){},
registerEvent:function(e,
f,
g){},
unregisterEvent:function(e,
f,
g){}},
destruct:function(){this._disposeFields(c,
b);
},
defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var a="__cq",
b="__cp",
c="qx.util.DeferredCallManager",
d="singleton";
qx.Class.define(c,
{extend:qx.core.Object,
type:d,
construct:function(){this.__cp={};
this.__cq=qx.lang.Function.bind(this.__cu,
this);
this.__cr=false;
},
members:{__cs:null,
__ct:null,
__cp:null,
__cr:null,
schedule:function(e){if(this.__cs==null){this.__cs=window.setTimeout(this.__cq,
0);
}var f=e.toHashCode();
if(this.__ct&&this.__ct[f]){return;
}this.__cp[f]=e;
this.__cr=true;
},
cancel:function(e){var f=e.toHashCode();
if(this.__ct&&this.__ct[f]){this.__ct[f]=null;
return;
}delete this.__cp[f];
if(qx.lang.Object.isEmpty(this.__cp)&&this.__cs!=null){window.clearTimeout(this.__cs);
this.__cs=null;
}},
__cu:function(){this.__cs=null;
while(this.__cr){this.__ct=qx.lang.Object.copy(this.__cp);
this.__cp={};
this.__cr=false;
for(var g in this.__ct){var h=this.__ct[g];
if(h){this.__ct[g]=null;
h.call();
}}}this.__ct=null;
}},
destruct:function(){if(this.__cs!=null){window.clearTimeout(this.__cs);
}this._disposeFields(a,
b);
}});
})();
(function(){var a="qx.util.DeferredCall",
b="__cw",
c="__cx",
d="__cv";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(e,
f){arguments.callee.base.call(this);
this.__cv=e;
this.__cw=f||null;
this.__cx=qx.util.DeferredCallManager.getInstance();
},
members:{__cv:null,
__cw:null,
__cx:null,
cancel:function(){this.__cx.cancel(this);
},
schedule:function(){this.__cx.schedule(this);
},
call:function(){this.__cw?this.__cv.apply(this.__cw):this.__cv();
}},
destruct:function(e,
f){this.cancel();
this._disposeFields(b,
d,
c);
}});
})();
(function(){var c="element",
d="qx.client",
e="div",
f="-",
g="",
h="mshtml",
j="qx.html.Element",
k="focus",
m="__cB",
n="__cP",
o="evt-",
p="__cR",
q="capture",
r="__cz",
s="__cL",
t="__cG",
u="__cA",
v="tabIndex",
w="_element",
z="activate",
A="__cK",
B="__cQ",
C="none",
D="__cO",
E="-capture",
F="__cF";
qx.Class.define(j,
{extend:qx.core.Object,
construct:function(G){arguments.callee.base.call(this);
this._nodeName=G||e;
},
statics:{DEBUG:false,
_modified:{},
_visibility:{},
_scroll:{},
_actions:{},
_supportedActions:[z,
k,
q],
_scheduleFlush:function(H){qx.html.Element.__cS.schedule();
},
_mshtmlVisibilitySort:qx.core.Variant.select(d,
{"mshtml":function(I,
J){var K=I._element;
var L=J._element;
if(K.contains(L)){return 1;
}
if(L.contains(K)){return -1;
}return 0;
},
"default":null}),
flush:function(){var M;
{};
var N=[];
var O=this._modified;
for(var P in O){M=O[P];
if(M.__cC()){if(M._element&&qx.dom.Hierarchy.isRendered(M._element)){N.push(M);
}else{{};
M.__cy();
}delete O[P];
}}
for(var Q=0,
R=N.length;Q<R;Q++){M=N[Q];
{};
M.__cy();
}var S=this._visibility;
if(qx.core.Variant.isSet(d,
h)){var T=[];
for(var P in S){T.push(S[P]);
}if(T.length>1){T.sort(this._mshtmlVisibilitySort);
S=this._visibility={};
for(var Q=0;Q<T.length;Q++){M=T[Q];
S[M.$$hash]=M;
}}}
for(var P in S){M=S[P];
{};
M._element.style.display=M._visible?g:C;
delete S[P];
}var U=this._scroll;
for(var P in U){M=U[P];
var V=M._element;
if(V&&V.offsetWidth){var W=true;
if(M.__cM!=null){M._element.scrollLeft=M.__cM;
delete M.__cM;
}if(M.__cN!=null){M._element.scrollTop=M.__cN;
delete M.__cN;
}var X=M.__cK;
if(X!=null){var Y=X.element.getDomElement();
if(Y&&Y.offsetWidth){qx.bom.element.Scroll.intoViewX(Y,
V,
X.align);
delete M.__cK;
}else{W=false;
}}var ba=M.__cL;
if(ba!=null){var Y=ba.element.getDomElement();
if(Y&&Y.offsetWidth){qx.bom.element.Scroll.intoViewY(Y,
V,
ba.align);
delete M.__cL;
}else{W=false;
}}if(W){delete U[P];
}}}var bb=this._actions;
var bc=this._supportedActions;
var bd,
be;
for(var Q=0,
R=bc.length;Q<R;Q++){bd=bc[Q];
if(bb[bd]){be=bb[bd]._element;
if(be){qx.bom.Element[bd](be);
}delete bb[bd];
}}qx.event.handler.Appear.refresh();
}},
members:{_element:null,
_root:false,
_included:true,
_visible:true,
_scheduleChildrenUpdate:function(){if(this._modifiedChildren){return;
}this._modifiedChildren=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
},
_createDomElement:function(){return qx.bom.Element.create(this._nodeName);
},
__cy:function(){{};
var bf=this.__cG;
if(bf){var bg=bf.length;
var Y;
for(var Q=0;Q<bg;Q++){Y=bf[Q];
if(Y._visible&&Y._included&&!Y._element){Y.__cy();
}}}
if(!this._element){this._element=this._createDomElement();
this._element.$$hash=this.$$hash;
this._copyData(false);
if(bf&&bg>0){this._insertChildren();
}}else{this._syncData();
if(this._modifiedChildren){this._syncChildren();
}}delete this._modifiedChildren;
},
_insertChildren:function(){var bf=this.__cG;
var bg=bf.length;
var Y;
if(bg>2){var bh=document.createDocumentFragment();
for(var Q=0;Q<bg;Q++){Y=bf[Q];
if(Y._element&&Y._included){bh.appendChild(Y._element);
}}this._element.appendChild(bh);
}else{var bh=this._element;
for(var Q=0;Q<bg;Q++){Y=bf[Q];
if(Y._element&&Y._included){bh.appendChild(Y._element);
}}}},
_syncChildren:function(){var bi=qx.core.ObjectRegistry;
var bj=this.__cG;
var bk=bj.length;
var bm;
var bn;
var bo=this._element;
var bp=bo.childNodes;
var bq=0;
var br;
var bs;
for(var Q=bp.length-1;Q>=0;Q--){br=bp[Q];
bn=bi.fromHashCode(br.$$hash);
if(!bn||!bn._included||bn.__cF!==this){bo.removeChild(br);
{};
}}for(var Q=0;Q<bk;Q++){bm=bj[Q];
if(bm._included){bn=bm._element;
br=bp[bq];
if(!bn){continue;
}if(bn!=br){if(br){bo.insertBefore(bn,
br);
}else{bo.appendChild(bn);
}{};
}bq++;
}}{};
},
_copyData:function(bt){var V=this._element;
var bu=this.__cP;
if(bu){var bv=qx.bom.element.Attribute;
for(var bw in bu){bv.set(V,
bw,
bu[bw]);
}}var bu=this.__cO;
if(bu){var bx=qx.bom.element.Style;
if(bt){for(var bw in bu){bx.set(V,
bw,
bu[bw]);
}}else{bx.setCss(V,
bx.compile(bu));
}}var bu=this.__cQ;
if(bu){for(var bw in bu){this._applyProperty(bw,
bu[bw]);
}}var bu=this.__cR;
if(bu){qx.event.Registration.getManager(V).importListeners(V,
bu);
delete this.__cR;
}},
_syncData:function(){var V=this._element;
var bv=qx.bom.element.Attribute;
var bx=qx.bom.element.Style;
var by=this.__cz;
if(by){var bu=this.__cP;
if(bu){var bz;
for(var bw in by){bz=bu[bw];
if(bz!==undefined){bv.set(V,
bw,
bz);
}else{bv.reset(V,
bw);
}}}this.__cz=null;
}var by=this.__cA;
if(by){var bu=this.__cO;
if(bu){var bz;
for(var bw in by){bz=bu[bw];
if(bz!==undefined){bx.set(V,
bw,
bz);
}else{bx.reset(V,
bw);
}}}this.__cA=null;
}var by=this.__cB;
if(by){var bu=this.__cQ;
if(bu){var bz;
for(var bw in by){this._applyProperty(bw,
bu[bw]);
}}this.__cB=null;
}},
__cC:function(){var bA=this;
while(bA){if(bA._root){return true;
}
if(!bA._included||!bA._visible){return false;
}bA=bA.__cF;
}return false;
},
__cD:function(bB,
bC,
bD,
bE){var bF=qx.core.ObjectRegistry;
var bG=o+bB+f+bF.toHashCode(bC);
if(bD){bG+=f+bF.toHashCode(bD);
}
if(bE){bG+=E;
}return bG;
},
__cE:function(Y){if(Y.__cF===this){throw new Error("Child is already in: "+Y);
}
if(Y._root){throw new Error("Root elements could not be inserted into other ones.");
}if(Y.__cF){Y.__cF.remove(Y);
}Y.__cF=this;
if(!this.__cG){this.__cG=[];
}if(this._element){this._scheduleChildrenUpdate();
}},
__cH:function(Y){if(Y.__cF!==this){throw new Error("Has no child: "+Y);
}if(this._element){this._scheduleChildrenUpdate();
}delete Y.__cF;
},
__cI:function(Y){if(Y.__cF!==this){throw new Error("Has no child: "+Y);
}if(this._element){this._scheduleChildrenUpdate();
}},
getChildren:function(){return this.__cG||null;
},
getChild:function(bH){var bf=this.__cG;
return bf&&bf[bH]||null;
},
hasChildren:function(){var bf=this.__cG;
return bf&&bf[0]!==undefined;
},
indexOf:function(Y){var bf=this.__cG;
return bf?bf.indexOf(Y):-1;
},
hasChild:function(Y){var bf=this.__cG;
return bf&&bf.indexOf(Y)!==-1;
},
add:function(bI){if(arguments[1]){for(var Q=0,
R=arguments.length;Q<R;Q++){this.__cE(arguments[Q]);
}this.__cG.push.apply(this.__cG,
arguments);
}else{this.__cE(bI);
this.__cG.push(bI);
}return this;
},
addAt:function(Y,
bH){this.__cE(Y);
qx.lang.Array.insertAt(this.__cG,
Y,
bH);
return this;
},
remove:function(bJ){var bf=this.__cG;
if(!bf){return;
}
if(arguments[1]){var Y;
for(var Q=0,
R=arguments.length;Q<R;Q++){Y=arguments[Q];
this.__cH(Y);
qx.lang.Array.remove(bf,
Y);
}}else{this.__cH(bJ);
qx.lang.Array.remove(bf,
bJ);
}return this;
},
removeAt:function(bH){var bf=this.__cG;
if(!bf){throw new Error("Has no children!");
}var Y=bf[bH];
if(!Y){throw new Error("Has no child at this position!");
}this.__cH(Y);
qx.lang.Array.removeAt(this.__cG,
bH);
return this;
},
removeAll:function(){var bf=this.__cG;
if(bf){for(var Q=0,
R=bf.length;Q<R;Q++){this.__cH(bf[Q]);
}bf.length=0;
}return this;
},
getParent:function(){return this.__cF||null;
},
insertInto:function(bK,
bH){bK.__cE(this);
if(bH==null){bK.__cG.push(this);
}else{qx.lang.Array.insertAt(this.__cG,
this,
bH);
}return this;
},
insertBefore:function(bL){var bK=bL.__cF;
bK.__cE(this);
qx.lang.Array.insertBefore(bK.__cG,
this,
bL);
return this;
},
insertAfter:function(bL){var bK=bL.__cF;
bK.__cE(this);
qx.lang.Array.insertAfter(bK.__cG,
this,
bL);
return this;
},
moveTo:function(bH){var bK=this.__cF;
bK.__cI(this);
var bM=bK.__cG.indexOf(this);
if(bM===bH){throw new Error("Could not move to same index!");
}else if(bM<bH){bH--;
}qx.lang.Array.removeAt(bK.__cG,
bM);
qx.lang.Array.insertAt(bK.__cG,
this,
bH);
return this;
},
moveBefore:function(bL){var bK=this.__cF;
return this.moveTo(bK.__cG.indexOf(bL));
},
moveAfter:function(bL){var bK=this.__cF;
return this.moveTo(bK.__cG.indexOf(bL)+1);
},
free:function(){var bK=this.__cF;
if(!bK){throw new Error("Has no parent to remove from.");
}
if(!bK.__cG){return;
}bK.__cH(this);
qx.lang.Array.remove(bK.__cG,
this);
return this;
},
getDomElement:function(){return this._element||null;
},
getNodeName:function(){return this._nodeName;
},
useMarkup:function(bN){if(this._element){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(d,
h)){var bO=document.createElement(e);
}else{var bO=qx.html.Element.__cJ;
if(!bO){bO=qx.html.Element.__cJ=document.createElement(e);
}}bO.innerHTML=bN;
this._element=bO.firstChild;
this._element.$$hash=this.$$hash;
this._copyData(true);
return this._element;
},
useElement:function(V){if(this._element){throw new Error("Could not overwrite existing element!");
}this._element=V;
this._element.$$hash=this.$$hash;
this._copyData(true);
},
isFocusable:function(){var bP=this.getAttribute(v);
if(bP>=1){return true;
}var bQ=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;
if(bP>=0&&bQ[this._nodeName]){return true;
}return false;
},
isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this._nodeName];
},
include:function(){if(this._included){return;
}delete this._included;
if(this.__cF){this.__cF._scheduleChildrenUpdate();
}return this;
},
exclude:function(){if(!this._included){return;
}this._included=false;
if(this.__cF){this.__cF._scheduleChildrenUpdate();
}return this;
},
isIncluded:function(){return this._included===true;
},
show:function(){if(this._visible){return;
}
if(this._element){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}if(this.__cF){this.__cF._scheduleChildrenUpdate();
}delete this._visible;
},
hide:function(){if(!this._visible){return;
}
if(this._element){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}this._visible=false;
},
isVisible:function(){return this._visible===true;
},
scrollChildIntoViewX:function(V,
bR,
bS){var bT=this._element;
var bU=V.getDomElement();
if(bS!==false&&bT&&bT.offsetWidth&&bU&&bU.offsetWidth){qx.bom.element.Scroll.intoViewX(bU,
bT,
bR);
}else{this.__cK={element:V,
align:bR};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__cM;
},
scrollChildIntoViewY:function(V,
bR,
bS){var bT=this._element;
var bU=V.getDomElement();
if(bS!==false&&bT&&bT.offsetWidth&&bU&&bU.offsetWidth){qx.bom.element.Scroll.intoViewY(bU,
bT,
bR);
}else{this.__cL={element:V,
align:bR};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__cN;
},
scrollToX:function(bV,
bW){var bT=this._element;
if(bW!==true&&bT&&bT.offsetWidth){bT.scrollLeft=bV;
}else{this.__cM=bV;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__cK;
},
getScrollX:function(){var bT=this._element;
if(bT){return bT.scrollLeft;
}return this.__cM||0;
},
scrollToY:function(bX,
bW){var bT=this._element;
if(bW!==true&&bT&&bT.offsetWidth){bT.scrollTop=bX;
}else{this.__cN=bX;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__cL;
},
getScrollY:function(){var bT=this._element;
if(bT){return bT.scrollTop;
}return this.__cN||0;
},
getSelection:function(){var bY=this._element;
if(bY){return qx.bom.Selection.get(bY);
}return null;
},
getSelectionLength:function(){var bY=this._element;
if(bY){return qx.bom.Selection.getLength(bY);
}return null;
},
setSelection:function(ca,
cb){var bY=this._element;
if(bY){qx.bom.Selection.set(bY,
ca,
cb);
}},
clearSelection:function(){var bY=this._element;
if(bY){qx.bom.Selection.clear(bY);
}},
focus:function(){var bY=this._element;
if(bY){return qx.bom.Element.focus(bY);
}qx.html.Element._actions.focus=this;
qx.html.Element._scheduleFlush(c);
},
blur:function(){var bY=this._element;
if(bY){qx.bom.Element.blur(bY);
}},
activate:function(){var bY=this._element;
if(bY){return qx.bom.Element.activate(bY);
}qx.html.Element._actions.activate=this;
qx.html.Element._scheduleFlush(c);
},
deactivate:function(){var bY=this._element;
if(bY){qx.bom.Element.deactivate(bY);
}},
capture:function(){var bY=this._element;
if(bY){return qx.bom.Element.capture(bY);
}qx.html.Element._actions.capture=this;
qx.html.Element._scheduleFlush(c);
},
releaseCapture:function(){var bY=this._element;
if(bY){qx.bom.Element.releaseCapture(bY);
}},
setStyle:function(bw,
bz,
bS){if(!this.__cO){this.__cO={};
}
if(this.__cO[bw]==bz){return;
}
if(bz==null){delete this.__cO[bw];
}else{this.__cO[bw]=bz;
}if(this._element){if(bS){qx.bom.element.Style.set(this._element,
bw,
bz);
return this;
}if(!this.__cA){this.__cA={};
}this.__cA[bw]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
setStyles:function(cc,
bS){for(var bw in cc){this.setStyle(bw,
cc[bw],
bS);
}return this;
},
removeStyle:function(bw,
bS){this.setStyle(bw,
null,
bS);
},
getStyle:function(bw){return this.__cO?this.__cO[bw]:null;
},
setAttribute:function(bw,
bz,
bS){if(!this.__cP){this.__cP={};
}
if(this.__cP[bw]==bz){return;
}
if(bz==null){delete this.__cP[bw];
}else{this.__cP[bw]=bz;
}if(this._element){if(bS){qx.bom.element.Attribute.set(this._element,
bw,
bz);
return this;
}if(!this.__cz){this.__cz={};
}this.__cz[bw]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
setAttributes:function(cc,
bS){for(var bw in cc){this.setAttribute(bw,
cc[bw],
bS);
}return this;
},
removeAttribute:function(bw,
bS){this.setAttribute(bw,
null,
bS);
},
getAttribute:function(bw){return this.__cP?this.__cP[bw]:null;
},
_applyProperty:function(cd,
bz){},
_setProperty:function(bw,
bz,
bS){if(!this.__cQ){this.__cQ={};
}
if(this.__cQ[bw]==bz){return;
}
if(bz==null){delete this.__cQ[bw];
}else{this.__cQ[bw]=bz;
}if(this._element){if(bS){this._applyProperty(bw,
bz);
return this;
}if(!this.__cB){this.__cB={};
}this.__cB[bw]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
_removeProperty:function(bw,
bS){this._setProperty(bw,
null,
bS);
},
_getProperty:function(bw){return this.__cQ?this.__cQ[bw]:null;
},
addListener:function(bB,
bC,
bD,
bE){if(this.isDisposed()){return;
}var ce;
if(this._element){qx.event.Registration.addListener(this._element,
bB,
bC,
bD,
bE);
}else{if(!this.__cR){this.__cR={};
}var bw=this.__cD(bB,
bC,
bD,
bE);
if(this.__cR[bw]){this.warn("A listener of this configuration does already exist!");
return false;
}this.__cR[bw]={type:bB,
listener:bC,
self:bD,
capture:bE};
}return this;
},
removeListener:function(bB,
bC,
bD,
bE){if(this.isDisposed()){return;
}var ce;
if(this._element){qx.event.Registration.removeListener(this._element,
bB,
bC,
bD,
bE);
}else{var bw=this.__cD(bB,
bC,
bD,
bE);
if(!this.__cR||!this.__cR[bw]){this.warn("A listener of this configuration does not exist!");
return false;
}delete this.__cR[bw];
}return this;
},
hasListener:function(bB,
bE){throw new Error("hasListener() needs implementation!");
}},
defer:function(cf){cf.__cS=new qx.util.DeferredCall(cf.flush,
cf);
},
destruct:function(){var bY=this._element;
if(bY){qx.event.Registration.getManager(bY).removeAllListeners(bY);
bY.$$hash=g;
}
if(!qx.core.ObjectRegistry.inShutDown){var bK=this.__cF;
if(bK&&!bK.$$disposed){bK.remove(this);
}}this._disposeArray(t);
this._disposeFields(n,
D,
p,
B,
r,
u,
m,
w,
F,
A,
s);
}});
})();
(function(){var a="qx.ui.core.queue.Manager",
b="useraction";
qx.Class.define(a,
{statics:{__cT:false,
__cU:{},
scheduleFlush:function(c){var d=qx.ui.core.queue.Manager;
d.__cU[c]=true;
if(!d.__cT){d.__cW.schedule();
d.__cT=true;
}},
flush:function(){var d=qx.ui.core.queue.Manager;
if(d.__cV){return;
}d.__cV=true;
d.__cW.cancel();
var e=d.__cU;
while(e.widget||e.appearance||e.decorator||e.layout){if(e.widget){delete e.widget;
qx.ui.core.queue.Widget.flush();
if(e.widget){continue;
}}
if(e.appearance){delete e.appearance;
qx.ui.core.queue.Appearance.flush();
if(e.appearance){continue;
}}
if(e.layout){delete e.layout;
qx.ui.core.queue.Layout.flush();
}}qx.ui.core.queue.Manager.__cT=false;
if(e.element){delete e.element;
qx.html.Element.flush();
}
if(e.dispose){delete e.dispose;
qx.ui.core.queue.Dispose.flush();
}d.__cV=false;
}},
defer:function(f){f.__cW=new qx.util.DeferredCall(f.flush);
qx.html.Element._scheduleFlush=f.scheduleFlush;
qx.event.Registration.addListener(window,
b,
f.flush);
}});
})();
(function(){var a="qx.client",
b="qx.dom.Hierarchy",
c="previousSibling",
d="*",
e="nextSibling",
f="parentNode";
qx.Class.define(b,
{statics:{getNodeIndex:function(g){var h=0;
while(g&&(g=g.previousSibling)){h++;
}return h;
},
getElementIndex:function(i){var h=0;
var j=qx.dom.Node.ELEMENT;
while(i&&(i=i.previousSibling)){if(i.nodeType==j){h++;
}}return h;
},
getNextElementSibling:function(i){while(i&&(i=i.nextSibling)&&!qx.dom.Node.isElement(i)){continue;
}return i||null;
},
getPreviousElementSibling:function(i){while(i&&(i=i.previousSibling)&&!qx.dom.Node.isElement(i)){continue;
}return i||null;
},
contains:qx.core.Variant.select(a,
{"webkit|mshtml|opera":function(i,
k){if(qx.dom.Node.isDocument(i)){var l=qx.dom.Node.getDocument(k);
return i&&l==i;
}else if(qx.dom.Node.isDocument(k)){return false;
}else{return i.contains(k);
}},
"gecko":function(i,
k){return !!(i.compareDocumentPosition(k)&16);
},
"default":function(i,
k){while(k){if(i==k){return true;
}k=k.parentNode;
}return false;
}}),
isRendered:function(i){if(!i.offsetParent){return false;
}var l=i.ownerDocument||i.document;
if(l.body.contains){return l.body.contains(i);
}if(l.compareDocumentPosition){return !!(l.compareDocumentPosition(i)&16);
}throw new Error("Missing support for isRendered()!");
},
isDescendantOf:function(i,
m){return this.contains(m,
i);
},
getCommonParent:qx.core.Variant.select(a,
{"mshtml|opera":function(n,
o){if(n===o){return n;
}
while(n){if(n.contains(o)){return n;
}n=n.parentNode;
}return null;
},
"default":function(n,
o){if(n===o){return n;
}var p={};
var q=qx.core.ObjectRegistry;
var r,
s;
while(n||o){if(n){r=q.toHashCode(n);
if(p[r]){return p[r];
}p[r]=n;
n=n.parentNode;
}
if(o){s=q.toHashCode(o);
if(p[s]){return p[s];
}p[s]=o;
o=o.parentNode;
}}return null;
}}),
getAncestors:function(i){return this._recursivelyCollect(i,
f);
},
getChildElements:function(i){i=i.firstChild;
if(!i){return [];
}var t=this.getNextSiblings(i);
t.unshift(i);
return t;
},
getDescendants:function(i){return qx.lang.Array.fromCollection(i.getElementsByTagName(d));
},
getFirstDescendant:function(i){i=i.firstChild;
while(i&&i.nodeType!=1){i=i.nextSibling;
}return i;
},
getLastDescendant:function(i){i=i.lastChild;
while(i&&i.nodeType!=1){i=i.previousSibling;
}return i;
},
getPreviousSiblings:function(i){return this._recursivelyCollect(i,
c);
},
getNextSiblings:function(i){return this._recursivelyCollect(i,
e);
},
_recursivelyCollect:function(i,
u){var v=[];
while(i=i[u]){if(i.nodeType==1){v.push(i);
}}return v;
},
getSiblings:function(i){return this.getPreviousSiblings(i).reverse().concat(this.getNextSiblings(i));
},
isEmpty:function(i){i=i.firstChild;
while(i){if(i.nodeType===qx.dom.Node.ELEMENT||i.nodeType===qx.dom.Node.TEXT){return false;
}i=i.nextSibling;
}return true;
},
cleanWhitespace:function(i){var g=i.firstChild;
while(g){var w=g.nextSibling;
if(g.nodeType==3&&!/\S/.test(g.nodeValue)){i.removeChild(g);
}g=w;
}}}});
})();
(function(){var a="visible",
b="scroll",
c="borderBottomWidth",
d="borderTopWidth",
e="left",
f="borderLeftWidth",
g="bottom",
h="top",
i="right",
j="qx.bom.element.Scroll",
k="borderRightWidth";
qx.Class.define(j,
{statics:{intoViewX:function(l,
m,
n){var o=l.parentNode;
var p=qx.dom.Node.getDocument(l);
var q=p.body;
var r,
s,
t;
var u,
v,
w;
var x,
y,
z;
var A,
B,
C,
D;
var E,
F,
G;
var H=n===e;
var I=n===i;
m=m?m.parentNode:p;
while(o&&o!=m){if(o.scrollWidth>o.clientWidth&&(o===q||qx.bom.element.Overflow.getY(o)!=a)){if(o===q){s=o.scrollLeft;
t=s+qx.bom.Viewport.getWidth();
u=qx.bom.Viewport.getWidth();
v=o.clientWidth;
w=o.scrollWidth;
x=0;
y=0;
z=0;
}else{r=qx.bom.element.Location.get(o);
s=r.left;
t=r.right;
u=o.offsetWidth;
v=o.clientWidth;
w=o.scrollWidth;
x=parseInt(qx.bom.element.Style.get(o,
f),
10)||0;
y=parseInt(qx.bom.element.Style.get(o,
k),
10)||0;
z=u-v-x-y;
}A=qx.bom.element.Location.get(l);
B=A.left;
C=A.right;
D=l.offsetWidth;
E=B-s-x;
F=C-t+y;
G=0;
if(H){G=E;
}else if(I){G=F+z;
}else if(E<0||D>v){G=E;
}else if(F>0){G=F+z;
}o.scrollLeft+=G;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(o,
b);
}}
if(o===q){break;
}o=o.parentNode;
}},
intoViewY:function(l,
m,
n){var o=l.parentNode;
var p=qx.dom.Node.getDocument(l);
var q=p.body;
var r,
J,
K;
var L,
M,
N;
var O,
P,
Q;
var A,
R,
S,
T;
var U,
V,
G;
var W=n===h;
var X=n===g;
m=m?m.parentNode:p;
while(o&&o!=m){if(o.scrollHeight>o.clientHeight&&(o===q||qx.bom.element.Overflow.getY(o)!=a)){if(o===q){J=o.scrollTop;
K=J+qx.bom.Viewport.getHeight();
L=qx.bom.Viewport.getHeight();
M=o.clientHeight;
N=o.scrollHeight;
O=0;
P=0;
Q=0;
}else{r=qx.bom.element.Location.get(o);
J=r.top;
K=r.bottom;
L=o.offsetHeight;
M=o.clientHeight;
N=o.scrollHeight;
O=parseInt(qx.bom.element.Style.get(o,
d),
10)||0;
P=parseInt(qx.bom.element.Style.get(o,
c),
10)||0;
Q=L-M-O-P;
}A=qx.bom.element.Location.get(l);
R=A.top;
S=A.bottom;
T=l.offsetHeight;
U=R-J-O;
V=S-K+P;
G=0;
if(W){G=U;
}else if(X){G=V+Q;
}else if(U<0||T>M){G=U;
}else if(V>0){G=V+Q;
}o.scrollTop+=G;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(o,
b);
}}
if(o===q){break;
}o=o.parentNode;
}},
intoView:function(l,
m,
Y,
ba){this.intoViewX(l,
m,
Y);
this.intoViewY(l,
m,
ba);
}}});
})();
(function(){var a="",
b="qx.client",
d="hidden",
e="-moz-scrollbars-none",
f="overflow",
g=";",
h="overflowY",
i=":",
j="overflowX",
k="overflow:",
l="none",
m="scroll",
n="borderLeftStyle",
o="borderRightStyle",
p="div",
q="borderRightWidth",
r="overflow-y",
u="borderLeftWidth",
v="-moz-scrollbars-vertical",
w="100px",
x="qx.bom.element.Overflow",
y="overflow-x";
qx.Class.define(x,
{statics:{__cX:null,
getScrollbarWidth:function(){if(this.__cX!==null){return this.__cX;
}var z=qx.bom.element.Style;
var A=function(B,
C){return parseInt(z.get(B,
C))||0;
};
var D=function(B){return (z.get(B,
o)==l?0:A(B,
q));
};
var E=function(B){return (z.get(B,
n)==l?0:A(B,
u));
};
var F=qx.core.Variant.select(b,
{"mshtml":function(B){if(z.get(B,
h)==d||B.clientWidth==0){return D(B);
}return Math.max(0,
B.offsetWidth-B.clientLeft-B.clientWidth);
},
"default":function(B){if(B.clientWidth==0){var G=z.get(B,
f);
var H=(G==m||G==v?16:0);
return Math.max(0,
D(B)+H);
}return Math.max(0,
(B.offsetWidth-B.clientWidth-E(B)));
}});
var I=function(B){return F(B)-D(B);
};
var J=document.createElement(p);
var K=J.style;
K.height=K.width=w;
K.overflow=m;
document.body.appendChild(J);
var L=I(J);
this.__cX=L?L:16;
document.body.removeChild(J);
return this.__cX;
},
_compile:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(M,
N){if(N==d){N=e;
}return k+N+g;
}:
function(M,
N){return M+i+N+g;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,
N){return k+N+g;
}:
function(M,
N){return M+i+N+g;
},
"default":function(M,
N){return M+i+N+g;
}}),
compileX:function(N){return this._compile(y,
N);
},
compileY:function(N){return this._compile(r,
N);
},
getX:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,
P){var Q=qx.bom.element.Style.get(O,
f,
P,
false);
if(Q===e){Q=d;
}return Q;
}:
function(O,
P){return qx.bom.element.Style.get(O,
j,
P,
false);
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(O,
P){return qx.bom.element.Style.get(O,
f,
P,
false);
}:
function(O,
P){return qx.bom.element.Style.get(O,
j,
P,
false);
},
"default":function(O,
P){return qx.bom.element.Style.get(O,
j,
P,
false);
}}),
setX:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,
N){if(N==d){N=e;
}O.style.overflow=N;
}:
function(O,
N){O.style.overflowX=N;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(O,
N){O.style.overflow=N;
}:
function(O,
N){O.style.overflowX=N;
},
"default":function(O,
N){O.style.overflowX=N;
}}),
resetX:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O){O.style.overflow=a;
}:
function(O){O.style.overflowX=a;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(O,
N){O.style.overflow=a;
}:
function(O,
N){O.style.overflowX=a;
},
"default":function(O){O.style.overflowX=a;
}}),
getY:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,
P){var Q=qx.bom.element.Style.get(O,
f,
P,
false);
if(Q===e){Q=d;
}return Q;
}:
function(O,
P){return qx.bom.element.Style.get(O,
h,
P,
false);
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(O,
P){return qx.bom.element.Style.get(O,
f,
P,
false);
}:
function(O,
P){return qx.bom.element.Style.get(O,
h,
P,
false);
},
"default":function(O,
P){return qx.bom.element.Style.get(O,
h,
P,
false);
}}),
setY:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O,
N){if(N===d){N=e;
}O.style.overflow=N;
}:
function(O,
N){O.style.overflowY=N;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(O,
N){O.style.overflow=N;
}:
function(O,
N){O.style.overflowY=N;
},
"default":function(O,
N){O.style.overflowY=N;
}}),
resetY:qx.core.Variant.select(b,
{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(O){O.style.overflow=a;
}:
function(O){O.style.overflowY=a;
},
"opera":qx.bom.client.Engine.VERSION<
9.5?
function(O,
N){O.style.overflow=a;
}:
function(O,
N){O.style.overflowY=a;
},
"default":function(O){O.style.overflowY=a;
}})}});
})();
(function(){var a="",
b="qx.client",
c="boxSizing",
d="cursor",
e="opacity",
f="clip",
g="overflowY",
h="overflowX",
i="appearance",
j="style",
k="px",
l="-webkit-appearance",
m="user-select",
n="userSelect",
o="styleFloat",
p="-webkit-user-select",
q="-moz-appearance",
r="pixelHeight",
s="MozAppearance",
t=":",
u="pixelTop",
v="pixelLeft",
w="text-overflow",
x="-moz-user-select",
y="MozUserSelect",
z="qx.bom.element.Style",
A="WebkitUserSelect",
B="-o-text-overflow",
C="pixelRight",
D="pixelWidth",
E="pixelBottom",
F=";",
G="cssFloat",
H="WebkitAppearance";
qx.Class.define(z,
{statics:{__cY:{styleNames:{"float":qx.core.Variant.select(b,
{"mshtml":o,
"default":G}),
"appearance":qx.core.Variant.select(b,
{"gecko":s,
"webkit":H,
"default":i}),
"userSelect":qx.core.Variant.select(b,
{"gecko":y,
"webkit":A,
"default":n})},
cssNames:{"appearance":qx.core.Variant.select(b,
{"gecko":q,
"webkit":l,
"default":i}),
"userSelect":qx.core.Variant.select(b,
{"gecko":x,
"webkit":p,
"default":m}),
"textOverflow":qx.core.Variant.select(b,
{"opera":B,
"default":w})},
mshtmlPixel:{width:D,
height:r,
left:v,
right:C,
top:u,
bottom:E},
special:{clip:1,
cursor:1,
opacity:1,
boxSizing:1,
overflowX:1,
overflowY:1}},
__da:{},
compile:function(I){var J=[];
var K=this.__cY;
var L=K.special;
var M=K.cssNames;
var N=this.__da;
var O=qx.lang.String;
var P,
Q,
R;
for(P in I){R=I[P];
if(R==null){continue;
}P=M[P]||P;
if(L[P]){switch(P){case f:J.push(qx.bom.element.Clip.compile(R));
break;
case d:J.push(qx.bom.element.Cursor.compile(R));
break;
case e:J.push(qx.bom.element.Opacity.compile(R));
break;
case c:J.push(qx.bom.element.BoxSizing.compile(R));
break;
case h:J.push(qx.bom.element.Overflow.compileX(R));
break;
case g:J.push(qx.bom.element.Overflow.compileY(R));
break;
}}else{Q=N[P];
if(!Q){Q=N[P]=O.hyphenate(P);
}J.push(Q,
t,
R,
F);
}}return J.join(a);
},
setCss:qx.core.Variant.select(b,
{"mshtml":function(S,
R){S.style.cssText=R;
},
"default":function(S,
R){S.setAttribute(j,
R);
}}),
getCss:qx.core.Variant.select(b,
{"mshtml":function(S){return S.style.cssText.toLowerCase();
},
"default":function(S){return S.getAttribute(j);
}}),
COMPUTED_MODE:1,
CASCADED_MODE:2,
LOCAL_MODE:3,
set:function(S,
P,
R,
T){{};
var K=this.__cY;
P=K.styleNames[P]||P;
if(T!==false&&K.special[P]){switch(P){case f:return qx.bom.element.Clip.set(S,
R);
case d:return qx.bom.element.Cursor.set(S,
R);
case e:return qx.bom.element.Opacity.set(S,
R);
case c:return qx.bom.element.BoxSizing.set(S,
R);
case h:return qx.bom.element.Overflow.setX(S,
R);
case g:return qx.bom.element.Overflow.setY(S,
R);
}}S.style[P]=R!==null?R:a;
},
setStyles:function(S,
U,
T){{};
for(var P in U){this.set(S,
P,
U[P],
T);
}},
reset:function(S,
P,
T){var K=this.__cY;
P=K.styleNames[P]||P;
if(T!==false&&K.special[P]){switch(P){case f:return qx.bom.element.Clip.reset(S);
case d:return qx.bom.element.Cursor.reset(S);
case e:return qx.bom.element.Opacity.reset(S);
case c:return qx.bom.element.BoxSizing.reset(S);
case h:return qx.bom.element.Overflow.resetX(S);
case g:return qx.bom.element.Overflow.resetY(S);
}}S.style[P]=a;
},
get:qx.core.Variant.select(b,
{"mshtml":function(S,
P,
V,
T){var K=this.__cY;
P=K.styleNames[P]||P;
if(T!==false&&K.special[P]){switch(P){case f:return qx.bom.element.Clip.get(S,
V);
case d:return qx.bom.element.Cursor.get(S,
V);
case e:return qx.bom.element.Opacity.get(S,
V);
case c:return qx.bom.element.BoxSizing.get(S,
V);
case h:return qx.bom.element.Overflow.getX(S,
V);
case g:return qx.bom.element.Overflow.getY(S,
V);
}}if(!S.currentStyle){return S.style[P]||a;
}switch(V){case this.LOCAL_MODE:return S.style[P]||a;
case this.CASCADED_MODE:return S.currentStyle[P]||a;
default:var W=S.currentStyle[P]||a;
if(/^-?[\.\d]+(px)?$/i.test(W)){return W;
}var X=K.mshtmlPixel[P];
if(X){var Y=S.style[P];
S.style[P]=W||0;
var R=S.style[X]+k;
S.style[P]=Y;
return R;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(W)){throw new Error("Untranslated computed property value: "+P+". Only pixel values work well across different clients.");
}return W;
}},
"default":function(S,
P,
V,
T){var K=this.__cY;
P=K.styleNames[P]||P;
if(T!==false&&K.special[P]){switch(P){case f:return qx.bom.element.Clip.get(S,
V);
case d:return qx.bom.element.Cursor.get(S,
V);
case e:return qx.bom.element.Opacity.get(S,
V);
case c:return qx.bom.element.BoxSizing.get(S,
V);
case h:return qx.bom.element.Overflow.getX(S,
V);
case g:return qx.bom.element.Overflow.getY(S,
V);
}}switch(V){case this.LOCAL_MODE:return S.style[P]||a;
case this.CASCADED_MODE:if(S.currentStyle){return S.currentStyle[P]||a;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var ba=qx.dom.Node.getDocument(S);
var bb=ba.defaultView.getComputedStyle(S,
null);
return bb?bb[P]:a;
}}})}});
})();
(function(){var a="auto",
b="px",
c=",",
d="",
e="clip:auto;",
f="rect(",
g=");",
h=")",
i="qx.bom.element.Clip",
j="string",
k="clip:rect(",
l="clip",
m="rect(auto,auto,auto,auto)";
qx.Class.define(i,
{statics:{compile:function(n){if(!n){return e;
}var o=n.left;
var p=n.top;
var q=n.width;
var r=n.height;
var s,
t;
if(o==null){s=(q==null?a:q+b);
o=a;
}else{s=(q==null?a:o+q+b);
o=o+b;
}
if(p==null){t=(r==null?a:r+b);
p=a;
}else{t=(r==null?a:p+r+b);
p=p+b;
}return k+p+c+s+c+t+c+o+g;
},
get:function(u,
v){var w=qx.bom.element.Style.get(u,
l,
v,
false);
var o,
p,
q,
r;
var s,
t;
if(typeof w===j&&w!==a&&w!==d){w=qx.lang.String.trim(w);
if(/\((.*)\)/.test(w)){var x=RegExp.$1.split(c);
p=qx.lang.String.trim(x[0]);
s=qx.lang.String.trim(x[1]);
t=qx.lang.String.trim(x[2]);
o=qx.lang.String.trim(x[3]);
if(o===a){o=null;
}
if(p===a){p=null;
}
if(s===a){s=null;
}
if(t===a){t=null;
}if(p!=null){p=parseInt(p,
10);
}
if(s!=null){s=parseInt(s,
10);
}
if(t!=null){t=parseInt(t,
10);
}
if(o!=null){o=parseInt(o,
10);
}if(s!=null&&o!=null){q=s-o;
}else if(s!=null){q=s;
}
if(t!=null&&p!=null){r=t-p;
}else if(t!=null){r=t;
}}else{throw new Error("Could not parse clip string: "+w);
}}return {left:o||null,
top:p||null,
width:q||null,
height:r||null};
},
set:function(u,
n){if(!n){u.style.clip=m;
return;
}var o=n.left;
var p=n.top;
var q=n.width;
var r=n.height;
var s,
t;
if(o==null){s=(q==null?a:q+b);
o=a;
}else{s=(q==null?a:o+q+b);
o=o+b;
}
if(p==null){t=(r==null?a:r+b);
p=a;
}else{t=(r==null?a:p+r+b);
p=p+b;
}u.style.clip=f+p+c+s+c+t+c+o+h;
},
reset:function(u){u.style.clip=d;
}}});
})();
(function(){var a="n-resize",
b="e-resize",
c="nw-resize",
d="ne-resize",
e="",
f="cursor:",
g="qx.client",
h=";",
i="qx.bom.element.Cursor",
j="cursor",
k="hand";
qx.Class.define(i,
{statics:{__db:qx.core.Variant.select(g,
{"mshtml":{"cursor":k,
"ew-resize":b,
"ns-resize":a,
"nesw-resize":d,
"nwse-resize":c},
"opera":{"col-resize":b,
"row-resize":a,
"ew-resize":b,
"ns-resize":a,
"nesw-resize":d,
"nwse-resize":c},
"default":{}}),
compile:function(l){return f+(this.__db[l]||l)+h;
},
get:function(m,
n){return qx.bom.element.Style.get(m,
j,
n,
false);
},
set:function(m,
o){m.style.cursor=this.__db[o]||o;
},
reset:function(m){m.style.cursor=e;
}}});
})();
(function(){var a="",
b="qx.client",
c=";",
d="filter",
e="opacity:",
f="opacity",
g="MozOpacity",
h=");",
i=")",
j="zoom:1;filter:alpha(opacity=",
k="qx.bom.element.Opacity",
l="alpha(opacity=",
m="-moz-opacity:";
qx.Class.define(k,
{statics:{compile:qx.core.Variant.select(b,
{"mshtml":function(n){if(n>=1){return a;
}
if(n<0.00001){n=0;
}return j+(n*100)+h;
},
"gecko":function(n){if(n==1){n=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return m+n+c;
}else{return e+n+c;
}},
"default":function(n){if(n==1){return a;
}return e+n+c;
}}),
set:qx.core.Variant.select(b,
{"mshtml":function(o,
n){var p=qx.bom.element.Style.get(o,
d,
qx.bom.element.Style.COMPUTED_MODE,
false);
if(n>=1){o.style.filter=p.replace(/alpha\([^\)]*\)/gi,
a);
return;
}
if(n<0.00001){n=0;
}if(!o.currentStyle.hasLayout){o.style.zoom=1;
}o.style.filter=p.replace(/alpha\([^\)]*\)/gi,
a)+l+n*100+i;
},
"gecko":function(o,
n){if(n==1){n=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){o.style.MozOpacity=n;
}else{o.style.opacity=n;
}},
"default":function(o,
n){if(n==1){n=a;
}o.style.opacity=n;
}}),
reset:qx.core.Variant.select(b,
{"mshtml":function(o){var p=qx.bom.element.Style.get(o,
d,
qx.bom.element.Style.COMPUTED_MODE,
false);
o.style.filter=p.replace(/alpha\([^\)]*\)/gi,
a);
},
"gecko":function(o){if(qx.bom.client.Engine.VERSION<1.7){o.style.MozOpacity=a;
}else{o.style.opacity=a;
}},
"default":function(o){o.style.opacity=a;
}}),
get:qx.core.Variant.select(b,
{"mshtml":function(o,
q){var p=qx.bom.element.Style.get(o,
d,
q,
false);
if(p){var n=p.match(/alpha\(opacity=(.*)\)/);
if(n&&n[1]){return parseFloat(n[1])/100;
}}return 1.0;
},
"gecko":function(o,
q){var n=qx.bom.element.Style.get(o,
qx.bom.client.Engine.VERSION<1.7?g:f,
q,
false);
if(n==0.999999){n=1.0;
}
if(n!=null){return parseFloat(n);
}return 1.0;
},
"default":function(o,
q){var n=qx.bom.element.Style.get(o,
f,
q,
false);
if(n!=null){return parseFloat(n);
}return 1.0;
}})}});
})();
(function(){var a="qx.client",
b="",
c="boxSizing",
d="box-sizing",
e=":",
f="border-box",
g="qx.bom.element.BoxSizing",
h="KhtmlBoxSizing",
j="-moz-box-sizing",
k="WebkitBoxSizing",
m=";",
n="-khtml-box-sizing",
o="content-box",
p="-webkit-box-sizing",
q="MozBoxSizing";
qx.Class.define(g,
{statics:{__dc:qx.core.Variant.select(a,
{"mshtml":null,
"webkit":[c,
h,
k],
"gecko":[q],
"opera":[c]}),
__dd:qx.core.Variant.select(a,
{"mshtml":null,
"webkit":[d,
n,
p],
"gecko":[j],
"opera":[d]}),
__de:{tags:{button:true,
select:true},
types:{search:true,
button:true,
submit:true,
reset:true,
checkbox:true,
radio:true}},
__df:function(r){var s=this.__de;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},
compile:qx.core.Variant.select(a,
{"mshtml":function(t){{};
},
"default":function(t){var u=this.__dd;
var v=b;
if(u){for(var w=0,
x=u.length;w<x;w++){v+=u[w]+e+t+m;
}}return v;
}}),
get:qx.core.Variant.select(a,
{"mshtml":function(r){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(r))){if(!this.__df(r)){return o;
}}return f;
},
"default":function(r){var u=this.__dc;
var t;
if(u){for(var w=0,
x=u.length;w<x;w++){t=qx.bom.element.Style.get(r,
u[w],
null,
false);
if(t!=null&&t!==b){return t;
}}}return b;
}}),
set:qx.core.Variant.select(a,
{"mshtml":function(r,
t){{};
},
"default":function(r,
t){var u=this.__dc;
if(u){for(var w=0,
x=u.length;w<x;w++){r.style[u[w]]=t;
}}}}),
reset:function(r){this.set(r,
b);
}}});
})();
(function(){var a="CSS1Compat",
b="qx.bom.Document";
qx.Class.define(b,
{statics:{isQuirksMode:function(c){return (c||window).document.compatMode!==a;
},
isStandardMode:function(c){return (c||window).document.compatMode===a;
},
getWidth:function(c){var d=(c||window).document;
var e=qx.bom.Viewport.getWidth(c);
var f=d.compatMode===a?d.documentElement.scrollWidth:d.body.scrollWidth;
return Math.max(f,
e);
},
getHeight:function(c){var d=(c||window).document;
var e=qx.bom.Viewport.getHeight(c);
var f=d.compatMode===a?d.documentElement.scrollHeight:d.body.scrollHeight;
return Math.max(f,
e);
}}});
})();
(function(){var a="qx.client",
b="CSS1Compat",
c="qx.bom.Viewport";
qx.Class.define(c,
{statics:{getWidth:qx.core.Variant.select(a,
{"opera":function(d){return (d||window).document.body.clientWidth;
},
"webkit":function(d){return (d||window).innerWidth;
},
"default":function(d){var e=(d||window).document;
return e.compatMode===b?e.documentElement.clientWidth:e.body.clientWidth;
}}),
getHeight:qx.core.Variant.select(a,
{"opera":function(d){return (d||window).document.body.clientHeight;
},
"webkit":function(d){return (d||window).innerHeight;
},
"default":function(d){var e=(d||window).document;
return e.compatMode===b?e.documentElement.clientHeight:e.body.clientHeight;
}}),
getScrollLeft:qx.core.Variant.select(a,
{"mshtml":function(d){var e=(d||window).document;
return e.documentElement.scrollLeft||e.body.scrollLeft;
},
"default":function(d){return (d||window).pageXOffset;
}}),
getScrollTop:qx.core.Variant.select(a,
{"mshtml":function(d){var e=(d||window).document;
return e.documentElement.scrollTop||e.body.scrollTop;
},
"default":function(d){return (d||window).pageYOffset;
}})}});
})();
(function(){var a="borderTopWidth",
b="borderLeftWidth",
c="scroll",
d="CSS1Compat",
e="marginTop",
f="marginLeft",
g="border-box",
h="borderBottomWidth",
i="qx.client",
j="borderRightWidth",
k="auto",
l="padding",
m="position",
n="fixed",
o="qx.bom.element.Location",
p="paddingLeft",
q="marginBottom",
r="visible",
s="BODY",
t="paddingBottom",
u="paddingTop",
v="marginRight",
w="margin",
x="overflow",
y="paddingRight",
z="border",
A="absolute";
qx.Class.define(o,
{statics:{__dg:function(B,
C){return qx.bom.element.Style.get(B,
C,
qx.bom.element.Style.COMPUTED_MODE,
false);
},
__dh:function(B,
C){return parseInt(qx.bom.element.Style.get(B,
C,
qx.bom.element.Style.COMPUTED_MODE,
false),
10)||0;
},
__di:function(B){var D=0,
E=0;
if(B.getBoundingClientRect){var F=qx.dom.Node.getWindow(B);
D-=qx.bom.Viewport.getScrollLeft(F);
E-=qx.bom.Viewport.getScrollTop(F);
}else{var G=qx.dom.Node.getDocument(B).body;
B=B.parentNode;
while(B&&B!=G){D+=B.scrollLeft;
E+=B.scrollTop;
B=B.parentNode;
}}return {left:D,
top:E};
},
__dj:qx.core.Variant.select(i,
{"mshtml":function(B){var H=qx.dom.Node.getDocument(B);
var G=H.body;
var D=G.offsetLeft;
var E=G.offsetTop;
D-=G.parentNode.clientLeft;
E-=G.parentNode.clientTop;
if(H.compatMode===d){D+=this.__dh(G,
f);
E+=this.__dh(G,
e);
}return {left:D,
top:E};
},
"webkit":function(B){var H=qx.dom.Node.getDocument(B);
var G=H.body;
var D=G.offsetLeft;
var E=G.offsetTop;
D+=this.__dh(G,
b);
E+=this.__dh(G,
a);
if(H.compatMode===d){D+=this.__dh(G,
f);
E+=this.__dh(G,
e);
}return {left:D,
top:E};
},
"gecko":function(B){var G=qx.dom.Node.getDocument(B).body;
var D=G.offsetLeft;
var E=G.offsetTop;
if(qx.bom.element.BoxSizing.get(G)!==g){D+=this.__dh(G,
b);
E+=this.__dh(G,
a);
if(!B.getBoundingClientRect){var I;
while(B){if(this.__dg(B,
m)===A||this.__dg(B,
m)===n){I=true;
break;
}B=B.offsetParent;
}
if(!I){D+=this.__dh(G,
b);
E+=this.__dh(G,
a);
}}}return {left:D,
top:E};
},
"default":function(B){var G=qx.dom.Node.getDocument(B).body;
var D=G.offsetLeft;
var E=G.offsetTop;
return {left:D,
top:E};
}}),
__dk:qx.core.Variant.select(i,
{"mshtml|webkit":function(B){var H=qx.dom.Node.getDocument(B);
if(B.getBoundingClientRect){var J=B.getBoundingClientRect();
var D=J.left;
var E=J.top;
if(H.compatMode===d){D-=this.__dh(B,
b);
E-=this.__dh(B,
a);
}}else{var D=B.offsetLeft;
var E=B.offsetTop;
B=B.offsetParent;
var G=H.body;
while(B&&B!=G){D+=B.offsetLeft;
E+=B.offsetTop;
D+=this.__dh(B,
b);
E+=this.__dh(B,
a);
B=B.offsetParent;
}}return {left:D,
top:E};
},
"gecko":function(B){if(B.getBoundingClientRect){var J=B.getBoundingClientRect();
var D=Math.round(J.left);
var E=Math.round(J.top);
}else{var D=0;
var E=0;
var G=qx.dom.Node.getDocument(B).body;
var K=qx.bom.element.BoxSizing;
if(K.get(B)!==g){D-=this.__dh(B,
b);
E-=this.__dh(B,
a);
}
while(B&&B!==G){D+=B.offsetLeft;
E+=B.offsetTop;
if(K.get(B)!==g){D+=this.__dh(B,
b);
E+=this.__dh(B,
a);
}if(B.parentNode&&this.__dg(B.parentNode,
x)!=r){D+=this.__dh(B.parentNode,
b);
E+=this.__dh(B.parentNode,
a);
}B=B.offsetParent;
}}return {left:D,
top:E};
},
"default":function(B){var D=0;
var E=0;
var G=qx.dom.Node.getDocument(B).body;
while(B&&B!==G){D+=B.offsetLeft;
E+=B.offsetTop;
B=B.offsetParent;
}return {left:D,
top:E};
}}),
get:function(B,
L){var G=this.__dj(B);
if(B.tagName==s){var D=G.left;
var E=G.top;
}else{var M=this.__dk(B);
var N=this.__di(B);
var D=M.left+G.left-N.left;
var E=M.top+G.top-N.top;
}var O=D+B.offsetWidth;
var P=E+B.offsetHeight;
if(L){if(L==l||L==c){var Q=qx.bom.element.Overflow.getX(B);
if(Q==c||Q==k){O+=B.scrollWidth-B.offsetWidth+this.__dh(B,
b)+this.__dh(B,
j);
}var R=qx.bom.element.Overflow.getY(B);
if(R==c||R==k){P+=B.scrollHeight-B.offsetHeight+this.__dh(B,
a)+this.__dh(B,
h);
}}
switch(L){case l:D+=this.__dh(B,
p);
E+=this.__dh(B,
u);
O-=this.__dh(B,
y);
P-=this.__dh(B,
t);
case c:D-=B.scrollLeft;
E-=B.scrollTop;
O-=B.scrollLeft;
P-=B.scrollTop;
case z:D+=this.__dh(B,
b);
E+=this.__dh(B,
a);
O-=this.__dh(B,
j);
P-=this.__dh(B,
h);
break;
case w:D-=this.__dh(B,
f);
E-=this.__dh(B,
e);
O+=this.__dh(B,
v);
P+=this.__dh(B,
q);
break;
}}return {left:D,
top:E,
right:O,
bottom:P};
},
getLeft:function(B,
L){return this.get(B,
L).left;
},
getTop:function(B,
L){return this.get(B,
L).top;
},
getRight:function(B,
L){return this.get(B,
L).right;
},
getBottom:function(B,
L){return this.get(B,
L).bottom;
},
getRelative:function(S,
T,
U,
V){var W=this.get(S,
U);
var X=this.get(T,
V);
return {left:W.left-X.left,
top:W.top-X.top,
right:W.right-X.right,
bottom:W.bottom-X.bottom};
}}});
})();
(function(){var a="__dl",
b="qx.event.handler.Appear",
c="__dm",
d="disappear",
e="appear";
qx.Class.define(b,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(f){arguments.callee.base.call(this);
this.__dl=f;
this.__dm={};
qx.event.handler.Appear.__dn[this.$$hash]=this;
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{appear:true,
disappear:true},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true,
__dn:{},
refresh:function(){var g=this.__dn;
for(var h in g){g[h].refresh();
}}},
members:{canHandleEvent:function(i,
j){},
registerEvent:function(i,
j,
k){var h=qx.core.ObjectRegistry.toHashCode(i);
var l=this.__dm;
if(l&&!l[h]){l[h]=i;
i.$$displayed=i.offsetWidth>0;
}},
unregisterEvent:function(i,
j,
k){var h=qx.core.ObjectRegistry.toHashCode(i);
var l=this.__dm;
if(!l){return;
}
if(l[h]){delete l[h];
i.$$displayed=null;
}},
refresh:function(){var l=this.__dm;
var m;
for(var h in l){m=l[h];
var n=m.offsetWidth>0;
if((!!m.$$displayed)!==n){m.$$displayed=n;
var o=qx.event.Registration.createEvent(n?e:d);
this.__dl.dispatchEvent(m,
o);
}}}},
destruct:function(){this._disposeFields(a,
c);
delete qx.event.handler.Appear.__dn[this.$$hash];
},
defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var a="abstract",
b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,
{extend:qx.core.Object,
implement:qx.event.IEventDispatcher,
type:a,
construct:function(c){this._manager=c;
},
members:{_getParent:function(d){throw new Error("Missing implementation");
},
canDispatchEvent:function(d,
e,
f){return e.getBubbles();
},
dispatchEvent:function(d,
e,
f){var g=d;
var c=this._manager;
var h,
k;
var l;
var m,
n;
var o;
var p=[];
h=c.getListeners(d,
f,
true);
k=c.getListeners(d,
f,
false);
if(h){p.push(h);
}
if(k){p.push(k);
}var g=this._getParent(d);
var q=[];
var r=[];
var s=[];
var t=[];
while(g!=null){h=c.getListeners(g,
f,
true);
if(h){s.push(h);
t.push(g);
}k=c.getListeners(g,
f,
false);
if(k){q.push(k);
r.push(g);
}g=this._getParent(g);
}e.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);
for(var u=s.length-1;u>=0;u--){o=t[u];
e.setCurrentTarget(o);
l=s[u];
for(var v=0,
w=l.length;v<w;v++){m=l[v];
n=m.context||o;
m.handler.call(n,
e);
}
if(e.getPropagationStopped()){return;
}}e.setEventPhase(qx.event.type.Event.AT_TARGET);
e.setCurrentTarget(d);
for(var u=0,
x=p.length;u<x;u++){l=p[u];
for(var v=0,
w=l.length;v<w;v++){m=l[v];
n=m.context||d;
m.handler.call(n,
e);
}
if(e.getPropagationStopped()){return;
}}e.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);
for(var u=0,
x=q.length;u<x;u++){o=r[u];
e.setCurrentTarget(o);
l=q[u];
for(var v=0,
w=l.length;v<w;v++){m=l[v];
n=m.context||o;
m.handler.call(n,
e);
}
if(e.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,
{extend:qx.event.dispatch.AbstractBubbling,
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},
members:{_getParent:function(b){return b.parentNode;
},
canDispatchEvent:function(b,
c,
d){return b.nodeType!==undefined&&c.getBubbles();
}},
defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var a="keydown",
b="qx.client",
c="keypress",
d="NumLock",
e="keyup",
f="Enter",
g="0",
h="9",
i="-",
j="PageUp",
k="+",
l="PrintScreen",
m="gecko",
n="A",
o="Left",
p="F5",
q="Down",
r="Up",
s="F11",
t="F6",
u="useraction",
v="keyinput",
w="Insert",
x="F8",
y="End",
z="/",
A="Delete",
B="*",
C="F1",
D="F4",
E="Home",
F="F2",
G="F12",
H="PageDown",
I="F7",
J="F9",
K="F10",
L="Right",
M="F3",
N="Z",
O="Escape",
P="webkit",
Q="Space",
R="5",
S="__dq",
T="3",
U="Meta",
V="7",
W="CapsLock",
X="Scroll",
Y="Control",
ba="Tab",
bb="Shift",
bc="Pause",
bd="Unidentified",
be="qx.event.handler.Keyboard",
bf="mshtml|webkit",
bg="6",
bh="Apps",
bi="4",
bj="Alt",
bk="2",
bl="mshtml",
bm="1",
bn="8",
bo="Win",
bp="__dr",
bq="__dp",
br="__do",
bs=",",
bt="Backspace";
qx.Class.define(be,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(bu){arguments.callee.base.call(this);
this.__do=bu;
this.__dp=bu.getWindow();
if(qx.core.Variant.isSet(b,
m)){this.__dq=this.__dp;
}else{this.__dq=this.__dp.document.documentElement;
}this.__dr={};
this._initKeyObserver();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{keyup:1,
keydown:1,
keypress:1,
keyinput:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true,
isValidKeyIdentifier:function(bv){if(this._identifierToKeyCodeMap[bv]){return true;
}
if(bv.length!=1){return false;
}
if(bv>=g&&bv<=h){return true;
}
if(bv>=n&&bv<=N){return true;
}
switch(bv){case k:case i:case B:case z:return true;
default:return false;
}}},
members:{__ds:null,
__do:null,
__dp:null,
__dq:null,
__dr:null,
canHandleEvent:function(bw,
bx){},
registerEvent:function(bw,
bx,
by){},
unregisterEvent:function(bw,
bx,
by){},
_fireInputEvent:function(bz,
bA){var bB=this.__do.getHandler(qx.event.handler.Focus);
var bw=bB.getActive();
if(!bw||bw.offsetWidth==0){bw=bB.getFocus();
}if(bw&&bw.offsetWidth!=0){var bC=qx.event.Registration.createEvent(v,
qx.event.type.KeyInput,
[bz,
bw,
bA]);
this.__do.dispatchEvent(bw,
bC);
}if(this.__dp){qx.event.Registration.fireEvent(this.__dp,
u,
qx.event.type.Data,
[v]);
}},
_fireSequenceEvent:function(bz,
bx,
bv){var bB=this.__do.getHandler(qx.event.handler.Focus);
var bw=bB.getActive();
if(!bw||bw.offsetWidth==0){bw=bB.getFocus();
}if(!bw||bw.offsetWidth==0){bw=this.__do.getWindow().document.body;
}var bC=qx.event.Registration.createEvent(bx,
qx.event.type.KeySequence,
[bz,
bw,
bv]);
this.__do.dispatchEvent(bw,
bC);
if(qx.core.Variant.isSet(b,
bf)){if(bx==a&&bC.getDefaultPrevented()){var bD=bz.keyCode;
if(!(this._isNonPrintableKeyCode(bD)||bD==8||bD==9)){this._fireSequenceEvent(bz,
c,
bv);
}}}if(this.__dp){qx.event.Registration.fireEvent(this.__dp,
u,
qx.event.type.Data,
[bx]);
}},
_initKeyObserver:function(){this.__ds=qx.lang.Function.listener(this._onKeyUpDown,
this);
this._onKeyPressWrapper=qx.lang.Function.listener(this._onKeyPress,
this);
var bE=qx.bom.Event;
bE.addNativeListener(this.__dq,
e,
this.__ds);
bE.addNativeListener(this.__dq,
a,
this.__ds);
bE.addNativeListener(this.__dq,
c,
this._onKeyPressWrapper);
},
_stopKeyObserver:function(){var bE=qx.bom.Event;
bE.removeNativeListener(this.__dq,
e,
this.__ds);
bE.removeNativeListener(this.__dq,
a,
this.__ds);
bE.removeNativeListener(this.__dq,
c,
this._onKeyPressWrapper);
},
_onKeyUpDown:qx.core.Variant.select(b,
{"mshtml":function(bz){bz=window.event||bz;
var bD=bz.keyCode;
var bA=0;
var bx=bz.type;
if(!(this.__dr[bD]==a&&bx==a)){this._idealKeyHandler(bD,
bA,
bx,
bz);
}if(bx==a){if(this._isNonPrintableKeyCode(bD)||bD==8||bD==9){this._idealKeyHandler(bD,
bA,
c,
bz);
}}this.__dr[bD]=bx;
},
"gecko":function(bz){var bD=this._keyCodeFix[bz.keyCode]||bz.keyCode;
var bA=bz.charCode;
var bx=bz.type;
if(qx.bom.client.Platform.WIN){var bv=bD?this._keyCodeToIdentifier(bD):this._charCodeToIdentifier(bA);
if(!(this.__dr[bv]==a&&bx==a)){this._idealKeyHandler(bD,
bA,
bx,
bz);
}this.__dr[bv]=bx;
}else{this._idealKeyHandler(bD,
bA,
bx,
bz);
}},
"webkit":function(bz){var bD=0;
var bA=0;
var bx=bz.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bx==e||bx==a){bD=this._charCode2KeyCode[bz.charCode]||bz.keyCode;
}else{if(this._charCode2KeyCode[bz.charCode]){bD=this._charCode2KeyCode[bz.charCode];
}else{bA=bz.charCode;
}}this._idealKeyHandler(bD,
bA,
bx,
bz);
}else{bD=bz.keyCode;
if(!(this.__dr[bD]==a&&bx==a)){this._idealKeyHandler(bD,
bA,
bx,
bz);
}if(bx==a){if(this._isNonPrintableKeyCode(bD)||bD==8||bD==9){this._idealKeyHandler(bD,
bA,
c,
bz);
}}this.__dr[bD]=bx;
}},
"opera":function(bz){this._idealKeyHandler(bz.keyCode,
0,
bz.type,
bz);
}}),
_onKeyPress:qx.core.Variant.select(b,
{"mshtml":function(bz){bz=window.event||bz;
if(this._charCode2KeyCode[bz.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bz.keyCode],
0,
bz.type,
bz);
}else{this._idealKeyHandler(0,
bz.keyCode,
bz.type,
bz);
}},
"gecko":function(bz){var bD=this._keyCodeFix[bz.keyCode]||bz.keyCode;
var bA=bz.charCode;
var bx=bz.type;
this._idealKeyHandler(bD,
bA,
bx,
bz);
},
"webkit":function(bz){if(qx.bom.client.Engine.VERSION<525.13){var bD=0;
var bA=0;
var bx=bz.type;
if(bx==e||bx==a){bD=this._charCode2KeyCode[bz.charCode]||bz.keyCode;
}else{if(this._charCode2KeyCode[bz.charCode]){bD=this._charCode2KeyCode[bz.charCode];
}else{bA=bz.charCode;
}}this._idealKeyHandler(bD,
bA,
bx,
bz);
}else{if(this._charCode2KeyCode[bz.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bz.keyCode],
0,
bz.type,
bz);
}else{this._idealKeyHandler(0,
bz.keyCode,
bz.type,
bz);
}}},
"opera":function(bz){if(this._keyCodeToIdentifierMap[bz.keyCode]){this._idealKeyHandler(bz.keyCode,
0,
bz.type,
bz);
}else{this._idealKeyHandler(0,
bz.keyCode,
bz.type,
bz);
}}}),
_idealKeyHandler:function(bD,
bA,
bF,
bz){if(!bD&&!bA){return;
}var bv;
if(bD){bv=this._keyCodeToIdentifier(bD);
this._fireSequenceEvent(bz,
bF,
bv);
}else{bv=this._charCodeToIdentifier(bA);
this._fireSequenceEvent(bz,
c,
bv);
this._fireInputEvent(bz,
bA);
}},
_specialCharCodeMap:{8:bt,
9:ba,
13:f,
27:O,
32:Q},
_keyCodeToIdentifierMap:{16:bb,
17:Y,
18:bj,
20:W,
224:U,
37:o,
38:r,
39:L,
40:q,
33:j,
34:H,
35:y,
36:E,
45:w,
46:A,
112:C,
113:F,
114:M,
115:D,
116:p,
117:t,
118:I,
119:x,
120:J,
121:K,
122:s,
123:G,
144:d,
44:l,
145:X,
19:bc,
91:bo,
93:bh},
_numpadToCharCode:{96:g.charCodeAt(0),
97:bm.charCodeAt(0),
98:bk.charCodeAt(0),
99:T.charCodeAt(0),
100:bi.charCodeAt(0),
101:R.charCodeAt(0),
102:bg.charCodeAt(0),
103:V.charCodeAt(0),
104:bn.charCodeAt(0),
105:h.charCodeAt(0),
106:B.charCodeAt(0),
107:k.charCodeAt(0),
109:i.charCodeAt(0),
110:bs.charCodeAt(0),
111:z.charCodeAt(0)},
_charCodeA:n.charCodeAt(0),
_charCodeZ:N.charCodeAt(0),
_charCode0:g.charCodeAt(0),
_charCode9:h.charCodeAt(0),
_isNonPrintableKeyCode:function(bD){return this._keyCodeToIdentifierMap[bD]?true:false;
},
_isIdentifiableKeyCode:function(bD){if(bD>=this._charCodeA&&bD<=this._charCodeZ){return true;
}if(bD>=this._charCode0&&bD<=this._charCode9){return true;
}if(this._specialCharCodeMap[bD]){return true;
}if(this._numpadToCharCode[bD]){return true;
}if(this._isNonPrintableKeyCode(bD)){return true;
}return false;
},
_keyCodeToIdentifier:function(bD){if(this._isIdentifiableKeyCode(bD)){var bG=this._numpadToCharCode[bD];
if(bG){return String.fromCharCode(bG);
}return (this._keyCodeToIdentifierMap[bD]||this._specialCharCodeMap[bD]||String.fromCharCode(bD));
}else{return bd;
}},
_charCodeToIdentifier:function(bA){return this._specialCharCodeMap[bA]||String.fromCharCode(bA).toUpperCase();
},
_identifierToKeyCode:function(bv){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bv]||bv.charCodeAt(0);
}},
destruct:function(){this._stopKeyObserver();
this._disposeFields(br,
bq,
S,
bp);
},
defer:function(bH,
bI,
bJ){qx.event.Registration.addHandler(bH);
if(!bH._identifierToKeyCodeMap){bH._identifierToKeyCodeMap={};
for(var bK in bI._keyCodeToIdentifierMap){bH._identifierToKeyCodeMap[bI._keyCodeToIdentifierMap[bK]]=parseInt(bK,
10);
}
for(var bK in bI._specialCharCodeMap){bH._identifierToKeyCodeMap[bI._specialCharCodeMap[bK]]=parseInt(bK,
10);
}}
if(qx.core.Variant.isSet(b,
bl)){bI._charCode2KeyCode={13:13,
27:27};
}else if(qx.core.Variant.isSet(b,
m)){bI._keyCodeFix={12:bI._identifierToKeyCode(d)};
}else if(qx.core.Variant.isSet(b,
P)){if(qx.bom.client.Engine.VERSION<525.13){bI._charCode2KeyCode={63289:bI._identifierToKeyCode(d),
63276:bI._identifierToKeyCode(j),
63277:bI._identifierToKeyCode(H),
63275:bI._identifierToKeyCode(y),
63273:bI._identifierToKeyCode(E),
63234:bI._identifierToKeyCode(o),
63232:bI._identifierToKeyCode(r),
63235:bI._identifierToKeyCode(L),
63233:bI._identifierToKeyCode(q),
63272:bI._identifierToKeyCode(A),
63302:bI._identifierToKeyCode(w),
63236:bI._identifierToKeyCode(C),
63237:bI._identifierToKeyCode(F),
63238:bI._identifierToKeyCode(M),
63239:bI._identifierToKeyCode(D),
63240:bI._identifierToKeyCode(p),
63241:bI._identifierToKeyCode(t),
63242:bI._identifierToKeyCode(I),
63243:bI._identifierToKeyCode(x),
63244:bI._identifierToKeyCode(J),
63245:bI._identifierToKeyCode(K),
63246:bI._identifierToKeyCode(s),
63247:bI._identifierToKeyCode(G),
63248:bI._identifierToKeyCode(l),
3:bI._identifierToKeyCode(f),
12:bI._identifierToKeyCode(d),
13:bI._identifierToKeyCode(f)};
}else{bI._charCode2KeyCode={13:13,
27:27};
}}}});
})();
(function(){var a="qx.client",
b="mouseup",
c="mousedown",
d="click",
e="contextmenu",
f="dblclick",
g="mousewheel",
h="mouseover",
i="mouseout",
j="DOMMouseScroll",
k="mousemove",
l="mshtml|webkit|opera",
m="useraction",
n="__dA",
o="__dt",
p="__du",
q="qx.event.handler.Mouse",
r="gecko|webkit",
s="__dv";
qx.Class.define(q,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(t){arguments.callee.base.call(this);
this.__dt=t;
this.__du=t.getWindow();
this.__dv=this.__du.document.documentElement;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{mousemove:1,
mouseover:1,
mouseout:1,
mousedown:1,
mouseup:1,
click:1,
dblclick:1,
contextmenu:1,
mousewheel:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true},
members:{__dw:null,
__dx:null,
__dy:null,
__dz:null,
__dA:null,
__dt:null,
__du:null,
__dv:null,
canHandleEvent:function(u,
v){},
registerEvent:function(u,
v,
w){},
unregisterEvent:function(u,
v,
w){},
__dB:function(x,
v,
u){if(!u){u=x.target||x.srcElement;
}qx.event.Registration.fireEvent(u,
v||x.type,
qx.event.type.Mouse,
[x,
u,
null,
true,
true]);
qx.event.Registration.fireEvent(this.__du,
m,
qx.event.type.Data,
[v||x.type]);
},
_initButtonObserver:function(){this.__dw=qx.lang.Function.listener(this._onButtonEvent,
this);
var y=qx.bom.Event;
y.addNativeListener(this.__dv,
c,
this.__dw);
y.addNativeListener(this.__dv,
b,
this.__dw);
y.addNativeListener(this.__dv,
d,
this.__dw);
y.addNativeListener(this.__dv,
f,
this.__dw);
y.addNativeListener(this.__dv,
e,
this.__dw);
},
_initMoveObserver:function(){this.__dx=qx.lang.Function.listener(this._onMoveEvent,
this);
var y=qx.bom.Event;
y.addNativeListener(this.__dv,
k,
this.__dx);
y.addNativeListener(this.__dv,
h,
this.__dx);
y.addNativeListener(this.__dv,
i,
this.__dx);
},
_initWheelObserver:function(){this.__dy=qx.lang.Function.listener(this._onWheelEvent,
this);
var y=qx.bom.Event;
var v=qx.core.Variant.isSet(a,
l)?g:j;
y.addNativeListener(this.__dv,
v,
this.__dy);
},
_stopButtonObserver:function(){var y=qx.bom.Event;
y.removeNativeListener(this.__dv,
c,
this.__dw);
y.removeNativeListener(this.__dv,
b,
this.__dw);
y.removeNativeListener(this.__dv,
d,
this.__dw);
y.removeNativeListener(this.__dv,
f,
this.__dw);
y.removeNativeListener(this.__dv,
e,
this.__dw);
},
_stopMoveObserver:function(){var y=qx.bom.Event;
y.removeNativeListener(this.__dv,
k,
this.__dx);
y.removeNativeListener(this.__dv,
h,
this.__dx);
y.removeNativeListener(this.__dv,
i,
this.__dx);
},
_stopWheelObserver:function(){var y=qx.bom.Event;
var v=qx.core.Variant.isSet(a,
l)?g:j;
y.removeNativeListener(this.__dv,
v,
this.__dy);
},
_onMoveEvent:function(x){this.__dB(x);
},
_onButtonEvent:function(x){var v=x.type;
var u=x.target||x.srcElement;
if(qx.core.Variant.isSet(a,
r)){if(u&&u.nodeType==3){u=u.parentNode;
}}
if(this.__dC){this.__dC(x,
v,
u);
}
if(this.__dE){this.__dE(x,
v,
u);
}this.__dB(x,
v,
u);
if(this.__dD){this.__dD(x,
v,
u);
}
if(this.__dF){this.__dF(x,
v,
u);
}this.__dz=v;
},
_onWheelEvent:function(x){this.__dB(x,
g);
},
__dC:qx.core.Variant.select(a,
{"webkit":function(x,
v,
u){if(v==e){this.__dB(x,
c,
u);
this.__dB(x,
b,
u);
}},
"default":null}),
__dD:qx.core.Variant.select(a,
{"opera":function(x,
v,
u){if(v==b&&x.button==2){this.__dB(x,
e,
u);
}},
"default":null}),
__dE:qx.core.Variant.select(a,
{"mshtml":function(x,
v,
u){if(v==b&&this.__dz==d){this.__dB(x,
c,
u);
}else if(v==f){this.__dB(x,
d,
u);
}},
"default":null}),
__dF:qx.core.Variant.select(a,
{"mshtml":null,
"default":function(x,
v,
u){switch(v){case c:this.__dA=u;
break;
case b:if(u!==this.__dA){var z=qx.dom.Hierarchy.getCommonParent(u,
this.__dA);
this.__dB(x,
d,
z);
}}}})},
destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(o,
p,
s,
n);
},
defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{capture:true,
losecapture:true},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(b,
c){},
registerEvent:function(b,
c,
d){},
unregisterEvent:function(b,
c,
d){}},
defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var a="alias",
b="copy",
c="blur",
d="mousedown",
f="mouseout",
g="keydown",
h="Ctrl",
i="Shift",
j="mousemove",
k="move",
l="mouseover",
m="Alt",
n="keyup",
o="mouseup",
p="dragend",
q="on",
r="qxDraggable",
s="__dM",
t="__dK",
u="drag",
v="drop",
w="__dN",
x="qxDroppable",
y="qx.event.handler.DragDrop",
z="droprequest",
A="__dH",
B="dragstart",
C="__dL",
D="__dU",
E="dragchange",
F="dragleave",
G="__dG",
H="dragover",
I="__dY";
qx.Class.define(y,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(J){arguments.callee.base.call(this);
this.__dG=J;
this.__dH=J.getWindow().document.documentElement;
this.__dG.addListener(this.__dH,
d,
this._onMouseDown,
this);
this.__dJ();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{dragstart:1,
dragend:1,
dragover:1,
dragleave:1,
drop:1,
drag:1,
dragchange:1,
droprequest:1},
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(K,
L){},
registerEvent:function(K,
L,
M){},
unregisterEvent:function(K,
L,
M){},
addType:function(L){this.__dK[L]=true;
},
addAction:function(N){this.__dL[N]=true;
},
supportsType:function(L){return !!this.__dK[L];
},
supportsAction:function(L){return !!this.__dL[L];
},
getData:function(L){if(!this.__dX||!this.__dY){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__dK[L]){throw new Error("Unsupported data type: "+L+"!");
}
if(!this.__dN[L]){this.__dI=L;
this.__dQ(z,
this.__dU,
false);
}
if(!this.__dN[L]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__dN[L]||null;
},
getCurrentAction:function(){return this.__dP;
},
addData:function(L,
O){this.__dN[L]=O;
},
getCurrentType:function(){return this.__dI;
},
__dJ:function(){this.__dK={};
this.__dL={};
this.__dM={};
this.__dN={};
},
__dO:function(){var P=this.__dL;
var Q=this.__dM;
var R=null;
if(this.__dX){if(Q.Shift&&Q.Ctrl&&P.alias){R=a;
}else if(Q.Shift&&Q.Alt&&P.copy){R=b;
}else if(Q.Shift&&P.move){R=k;
}else if(Q.Alt&&P.alias){R=a;
}else if(Q.Ctrl&&P.copy){R=b;
}else if(P.move){R=k;
}else if(P.copy){R=b;
}else if(P.alias){R=a;
}}
if(R!=this.__dP){this.__dP=R;
this.__dQ(E,
this.__dU,
false);
}},
__dQ:function(L,
K,
S,
T){var U=qx.event.Registration;
var V=U.createEvent(L,
qx.event.type.Drag,
[S,
T]);
if(this.__dU!==this.__dY){if(K==this.__dU){V.setRelatedTarget(this.__dY);
}else{V.setRelatedTarget(this.__dU);
}}return U.dispatchEvent(K,
V);
},
__dR:function(W){while(W&&W.nodeType==1){if(W.getAttribute(r)==q){return W;
}W=W.parentNode;
}return null;
},
__dS:function(W){while(W&&W.nodeType==1){if(W.getAttribute(x)==q){return W;
}W=W.parentNode;
}return null;
},
__dT:function(){this.__dU=null;
this.__dG.removeListener(this.__dH,
j,
this._onMouseMove,
this,
true);
this.__dG.removeListener(this.__dH,
o,
this._onMouseUp,
this,
true);
qx.event.Registration.removeListener(window,
c,
this._onWindowBlur,
this);
this.__dJ();
},
__dV:function(){if(this.__dW){this.__dG.removeListener(this.__dH,
l,
this._onMouseOver,
this,
true);
this.__dG.removeListener(this.__dH,
f,
this._onMouseOut,
this,
true);
this.__dG.removeListener(this.__dH,
g,
this._onKeyDown,
this,
true);
this.__dG.removeListener(this.__dH,
n,
this._onKeyUp,
this,
true);
this.__dQ(p,
this.__dU,
false);
this.__dW=false;
}this.__dX=false;
this.__dY=null;
this.__dT();
},
__dX:false,
_onWindowBlur:function(X){this.__dV();
},
_onKeyDown:function(X){var Y=X.getKeyIdentifier();
switch(Y){case m:case h:case i:if(!this.__dM[Y]){this.__dM[Y]=true;
this.__dO();
}}},
_onKeyUp:function(X){var Y=X.getKeyIdentifier();
switch(Y){case m:case h:case i:if(this.__dM[Y]){this.__dM[Y]=false;
this.__dO();
}}},
_onMouseDown:function(X){if(this.__dW){return;
}var ba=this.__dR(X.getTarget());
if(ba){this.__ea=X.getDocumentLeft();
this.__eb=X.getDocumentTop();
this.__dU=ba;
this.__dG.addListener(this.__dH,
j,
this._onMouseMove,
this,
true);
this.__dG.addListener(this.__dH,
o,
this._onMouseUp,
this,
true);
qx.event.Registration.addListener(window,
c,
this._onWindowBlur,
this);
}},
_onMouseUp:function(X){if(this.__dX){this.__dQ(v,
this.__dY,
false,
X);
}if(this.__dW){X.stopPropagation();
}this.__dV();
},
_onMouseMove:function(X){if(this.__dW){if(!this.__dQ(u,
this.__dU,
true,
X)){this.__dV();
}}else{if(Math.abs(X.getDocumentLeft()-this.__ea)>3||Math.abs(X.getDocumentTop()-this.__eb)>3){if(this.__dQ(B,
this.__dU,
true,
X)){this.__dW=true;
this.__dG.addListener(this.__dH,
l,
this._onMouseOver,
this,
true);
this.__dG.addListener(this.__dH,
f,
this._onMouseOut,
this,
true);
this.__dG.addListener(this.__dH,
g,
this._onKeyDown,
this,
true);
this.__dG.addListener(this.__dH,
n,
this._onKeyUp,
this,
true);
var Q=this.__dM;
Q.Ctrl=X.isCtrlPressed();
Q.Shift=X.isShiftPressed();
Q.Alt=X.isAltPressed();
this.__dO();
}else{this.__dQ(p,
this.__dU,
false);
this.__dT();
}}}},
_onMouseOver:function(X){var K=X.getTarget();
var bb=this.__dS(K);
if(bb&&bb!=this.__dY){this.__dX=this.__dQ(H,
bb,
true,
X);
this.__dY=bb;
this.__dO();
}},
_onMouseOut:function(X){var K=X.getTarget();
var bb=this.__dS(K);
if(bb&&bb==this.__dY){this.__dQ(F,
this.__dY,
false,
X);
this.__dY=null;
this.__dX=false;
this.__dO();
}}},
destruct:function(){this.__dV();
this.__dG.removeListener(this.__dH,
d,
this._onMouseDown,
this);
this._disposeFields(D,
I,
G,
A,
t,
C,
s,
w);
},
defer:function(bc){qx.event.Registration.addHandler(bc);
}});
})();
(function(){var a="-",
b="qx.event.handler.Element",
c="_manager",
d="_registeredEvents";
qx.Class.define(b,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(e){arguments.callee.base.call(this);
this._manager=e;
this._registeredEvents={};
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{abort:true,
scroll:true,
select:true,
reset:true,
submit:true},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(f,
g){},
registerEvent:function(f,
g,
h){var i=qx.core.ObjectRegistry.toHashCode(f);
var j=i+a+g;
var k=qx.lang.Function.listener(this._onNative,
this,
j);
qx.bom.Event.addNativeListener(f,
g,
k);
this._registeredEvents[j]={element:f,
type:g,
listener:k};
},
unregisterEvent:function(f,
g,
h){var l=this._registeredEvents;
if(!l){return;
}var i=qx.core.ObjectRegistry.toHashCode(f);
var j=i+a+g;
var m=this._registeredEvents[j];
qx.bom.Event.removeNativeListener(f,
g,
m.listener);
delete this._registeredEvents[j];
},
_onNative:function(n,
j){var l=this._registeredEvents;
if(!l){return;
}var m=l[j];
qx.event.Registration.fireNonBubblingEvent(m.element,
m.type,
qx.event.type.Native,
[n]);
}},
destruct:function(){var o;
var l=this._registeredEvents;
for(var p in l){o=l[p];
qx.bom.Event.removeNativeListener(o.element,
o.type,
o.listener);
}this._disposeFields(c,
d);
},
defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var a="",
b=">",
c="<",
d=" ",
e="='",
f="http://www.w3.org/1999/xhtml",
g="qx.bom.Element",
h="div",
i="' ",
j="></";
qx.Class.define(g,
{statics:{__ec:{"onload":true,
"onpropertychange":true,
"oninput":true,
"onchange":true,
"name":true,
"type":true,
"checked":true,
"disabled":true},
create:function(k,
l,
m,
n){if(!m){m=window;
}
if(!k){throw new Error("The tag name is missing!");
}var o=this.__ec;
var p=a;
for(var q in l){if(o[q]){p+=q+e+l[q]+i;
}}var r;
if(p!=a){if(qx.bom.client.Engine.MSHTML){r=m.document.createElement(c+k+d+p+b);
}else{var s=m.document.createElement(h);
s.innerHTML=c+k+d+p+j+k+b;
r=s.firstChild;
}}else{if(m.document.createElementNS){r=m.document.createElementNS(f,
k);
}else{r=m.document.createElement(k);
}}
for(var q in l){if(!o[q]){qx.bom.element.Attribute.set(r,
q,
l[q]);
}}return r;
},
empty:function(r){return r.innerHTML=a;
},
addListener:function(r,
t,
u,
v,
w){return qx.event.Registration.addListener(r,
t,
u,
v,
w);
},
removeListener:function(r,
t,
u,
v,
w){return qx.event.Registration.removeListener(r,
t,
u,
v,
w);
},
hasListener:function(r,
t,
w){return qx.event.Registration.hasListener(r,
t,
w);
},
focus:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).focus(r);
},
blur:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).blur(r);
},
activate:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).activate(r);
},
deactivate:function(r){qx.event.Registration.getManager(r).getHandler(qx.event.handler.Focus).deactivate(r);
},
capture:function(r){qx.event.Registration.getManager(r).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(r);
},
releaseCapture:function(r){qx.event.Registration.getManager(r).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(r);
}}});
})();
(function(){var a="qx.client",
b="blur",
c="focus",
d="mousedown",
f="on",
g="mouseup",
h="DOMFocusOut",
i="DOMFocusIn",
j="selectstart",
k="onmousedown",
l="onfocusout",
m="onfocusin",
n="onmouseup",
o="onselectstart",
p="draggesture",
q="_document",
r="_root",
s="qx.event.handler.Focus",
t="_applyFocus",
u="_window",
v="deactivate",
w="_applyActive",
x="focusin",
y="",
z="qxSelectable",
A="tabIndex",
B="off",
C="_body",
D="activate",
E="focusout",
F="__mouseActive",
G="_manager",
H="qxKeepFocus",
I="qxKeepActive";
qx.Class.define(s,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(J){arguments.callee.base.call(this);
this._manager=J;
this._window=J.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},
properties:{active:{apply:w,
nullable:true},
focus:{apply:t,
nullable:true}},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{focus:1,
blur:1,
focusin:1,
focusout:1,
activate:1,
deactivate:1},
IGNORE_CAN_HANDLE:true,
FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",
{"mshtml|gecko":{a:1,
body:1,
button:1,
frame:1,
iframe:1,
img:1,
input:1,
object:1,
select:1,
textarea:1},
"opera|webkit":{button:1,
input:1,
select:1,
textarea:1}})},
members:{canHandleEvent:function(K,
L){},
registerEvent:function(K,
L,
M){},
unregisterEvent:function(K,
L,
M){},
focus:function(N){try{N.focus();
}catch(ex){}this.setFocus(N);
this.setActive(N);
},
activate:function(N){this.setActive(N);
},
blur:function(N){try{N.blur();
}catch(ex){}
if(this.getActive()===N){this.resetActive();
}
if(this.getFocus()===N){this.resetFocus();
}},
deactivate:function(N){if(this.getActive()===N){this.resetActive();
}},
tryActivate:function(N){var O=this.__eB(N);
if(O){this.setActive(O);
}},
__ed:function(K,
P,
L,
Q){var R=qx.event.Registration;
var S=R.createEvent(L,
qx.event.type.Focus,
[K,
P,
Q]);
R.dispatchEvent(K,
S);
},
_windowFocused:true,
__ee:function(){if(this._windowFocused){this._windowFocused=false;
this.__ed(this._window,
null,
b,
false);
}},
__ef:function(){if(!this._windowFocused){this._windowFocused=true;
this.__ed(this._window,
null,
c,
false);
}},
_initObserver:qx.core.Variant.select(a,
{"gecko":function(){this.__eg=qx.lang.Function.listener(this.__ev,
this);
this.__eh=qx.lang.Function.listener(this.__ew,
this);
this.__ei=qx.lang.Function.listener(this.__eu,
this);
this.__ej=qx.lang.Function.listener(this.__et,
this);
this.__ek=qx.lang.Function.listener(this.__eo,
this);
this._document.addEventListener(d,
this.__eg,
true);
this._document.addEventListener(g,
this.__eh,
true);
this._window.addEventListener(c,
this.__ei,
true);
this._window.addEventListener(b,
this.__ej,
true);
this._window.addEventListener(p,
this.__ek,
true);
},
"mshtml":function(){this.__eg=qx.lang.Function.listener(this.__ev,
this);
this.__eh=qx.lang.Function.listener(this.__ew,
this);
this.__el=qx.lang.Function.listener(this.__ep,
this);
this.__em=qx.lang.Function.listener(this.__eq,
this);
this.__en=qx.lang.Function.listener(this.__ey,
this);
this._document.attachEvent(k,
this.__eg);
this._document.attachEvent(n,
this.__eh);
this._document.attachEvent(m,
this.__el);
this._document.attachEvent(l,
this.__em);
this._document.attachEvent(o,
this.__en);
},
"webkit":function(){this.__eg=qx.lang.Function.listener(this.__ev,
this);
this.__eh=qx.lang.Function.listener(this.__ew,
this);
this.__em=qx.lang.Function.listener(this.__eq,
this);
this.__ei=qx.lang.Function.listener(this.__eu,
this);
this.__ej=qx.lang.Function.listener(this.__et,
this);
this.__en=qx.lang.Function.listener(this.__ey,
this);
this._document.addEventListener(d,
this.__eg,
true);
this._document.addEventListener(g,
this.__eh,
true);
this._document.addEventListener(j,
this.__en,
false);
this._window.addEventListener(h,
this.__em,
true);
this._window.addEventListener(c,
this.__ei,
true);
this._window.addEventListener(b,
this.__ej,
true);
},
"opera":function(){this.__eg=qx.lang.Function.listener(this.__ev,
this);
this.__eh=qx.lang.Function.listener(this.__ew,
this);
this.__el=qx.lang.Function.listener(this.__ep,
this);
this.__em=qx.lang.Function.listener(this.__eq,
this);
this._document.addEventListener(d,
this.__eg,
true);
this._document.addEventListener(g,
this.__eh,
true);
this._window.addEventListener(i,
this.__el,
true);
this._window.addEventListener(h,
this.__em,
true);
}}),
_stopObserver:qx.core.Variant.select(a,
{"gecko":function(){this._document.removeEventListener(d,
this.__eg,
true);
this._document.removeEventListener(g,
this.__eh,
true);
this._window.removeEventListener(c,
this.__ei,
true);
this._window.removeEventListener(b,
this.__ej,
true);
this._window.removeEventListener(p,
this.__ek,
true);
},
"mshtml":function(){this._document.detachEvent(k,
this.__eg);
this._document.detachEvent(n,
this.__eh);
this._document.detachEvent(m,
this.__el);
this._document.detachEvent(l,
this.__em);
this._document.detachEvent(o,
this.__en);
},
"webkit":function(){this._document.removeEventListener(d,
this.__eg,
true);
this._document.removeEventListener(j,
this.__en,
false);
this._window.removeEventListener(i,
this.__el,
true);
this._window.removeEventListener(h,
this.__em,
true);
this._window.removeEventListener(c,
this.__ei,
true);
this._window.removeEventListener(b,
this.__ej,
true);
},
"opera":function(){this._document.removeEventListener(d,
this.__eg,
true);
this._window.removeEventListener(i,
this.__el,
true);
this._window.removeEventListener(h,
this.__em,
true);
this._window.removeEventListener(c,
this.__ei,
true);
this._window.removeEventListener(b,
this.__ej,
true);
}}),
__eo:qx.core.Variant.select(a,
{"gecko":function(T){if(!this.__eC(T.target)){qx.bom.Event.preventDefault(T);
}},
"default":null}),
__ep:qx.core.Variant.select(a,
{"mshtml":function(T){this.__ef();
var K=T.srcElement;
var U=this.__eA(K);
if(U){this.setFocus(U);
}this.tryActivate(K);
},
"opera":function(T){var K=T.target;
if(K==this._document||K==this._window){this.__ef();
if(this.__er){this.setFocus(this.__er);
delete this.__er;
}
if(this.__es){this.setActive(this.__es);
delete this.__es;
}}else{this.setFocus(K);
this.tryActivate(K);
if(!this.__eC(K)){K.selectionStart=0;
K.selectionEnd=0;
}}},
"default":null}),
__eq:qx.core.Variant.select(a,
{"mshtml":function(T){if(!T.toElement){this.__ee();
this.resetFocus();
this.resetActive();
}},
"webkit":function(T){var K=T.target;
if(K===this.getFocus()){this.resetFocus();
}
if(K===this.getActive()){this.resetActive();
}},
"opera":function(T){var K=T.target;
if(K==this._document){this.__ee();
this.__er=this.getFocus();
this.__es=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(K===this.getFocus()){this.resetFocus();
}
if(K===this.getActive()){this.resetActive();
}}},
"default":null}),
__et:qx.core.Variant.select(a,
{"gecko":function(T){if(T.target===this._window||T.target===this._document){this.__ee();
this.resetActive();
this.resetFocus();
}},
"webkit":function(T){if(T.target===this._window||T.target===this._document){this.__ee();
this.__er=this.getFocus();
this.__es=this.getActive();
this.resetActive();
this.resetFocus();
}},
"default":null}),
__eu:qx.core.Variant.select(a,
{"gecko":function(T){var K=T.target;
if(K===this._window||K===this._document){this.__ef();
K=this._body;
}this.setFocus(K);
this.tryActivate(K);
},
"webkit":function(T){var K=T.target;
if(K===this._window||K===this._document){this.__ef();
if(this.__er){this.setFocus(this.__er);
delete this.__er;
}
if(this.__es){this.setActive(this.__es);
delete this.__es;
}}else{this.setFocus(K);
this.tryActivate(K);
}},
"default":null}),
__ev:qx.core.Variant.select(a,
{"gecko":function(T){var K=T.target;
var U=this.__eA(K);
var V=this.__eC(K);
if(!V){qx.bom.Event.preventDefault(T);
if(U){U.focus();
}}else if(!U){qx.bom.Event.preventDefault(T);
}},
"mshtml":function(T){var K=T.srcElement;
var U=this.__eA(K);
if(U){if(!this.__eC(K)){K.unselectable=f;
document.selection.empty();
U.focus();
}}else{qx.bom.Event.preventDefault(T);
if(!this.__eC(K)){K.unselectable=f;
}}},
"webkit":function(T){var K=T.target;
var U=this.__eA(K);
if(U){this.setFocus(U);
}else{qx.bom.Event.preventDefault(T);
}},
"opera":function(T){var K=T.target;
var U=this.__eA(K);
if(!this.__eC(K)){qx.bom.Event.preventDefault(T);
if(U){var W=this.getFocus();
if(W&&W.selectionEnd){W.selectionStart=0;
W.selectionEnd=0;
W.blur();
}if(U){this.setFocus(U);
}}}else if(U){this.setFocus(U);
}},
"default":null}),
__ew:qx.core.Variant.select(a,
{"mshtml":function(T){var K=T.srcElement;
if(K.unselectable){K.unselectable=B;
}this.tryActivate(K);
},
"gecko":function(T){var K=T.target;
while(K&&K.offsetWidth===undefined){K=K.parentNode;
}
if(K){this.tryActivate(K);
}if(this.__ex){this.__ex.style.MozUserSelect=y;
this.__ex=null;
}},
"webkit|opera":function(T){this.tryActivate(T.target);
},
"default":null}),
__ey:qx.core.Variant.select(a,
{"mshtml|webkit":function(T){if(!this.__eC(T.srcElement)){qx.bom.Event.preventDefault(T);
}},
"default":null}),
__ez:function(X){var Y=qx.bom.element.Attribute.get(X,
A);
if(Y>=1){return true;
}var ba=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;
if(Y>=0&&ba[X.tagName]){return true;
}return false;
},
__eA:function(X){while(X&&X.nodeType===1){if(X.getAttribute(H)==f){return null;
}
if(this.__ez(X)){return X;
}X=X.parentNode;
}return this._body;
},
__eB:function(X){var bb=X;
while(X&&X.nodeType===1){if(X.getAttribute(I)==f){return null;
}X=X.parentNode;
}return bb;
},
__eC:function(bc){while(bc&&bc.nodeType===1){var bd=bc.getAttribute(z);
if(bd!=null){return bd===f;
}bc=bc.parentNode;
}return true;
},
_applyActive:function(be,
bf){if(bf){this.__ed(bf,
be,
v,
true);
}
if(be){this.__ed(be,
bf,
D,
true);
}},
_applyFocus:function(be,
bf){if(bf){this.__ed(bf,
be,
E,
true);
}
if(be){this.__ed(be,
bf,
x,
true);
}if(bf){this.__ed(bf,
be,
b,
false);
}
if(be){this.__ed(be,
bf,
c,
false);
}}},
destruct:function(){this._stopObserver();
this._disposeFields(G,
u,
q,
r,
C,
F);
},
defer:function(bg){qx.event.Registration.addHandler(bg);
var ba=bg.FOCUSABLE_ELEMENTS;
for(var bh in ba){ba[bh.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,
{extend:qx.event.type.Event,
members:{init:function(b,
c,
d){arguments.callee.base.call(this,
d,
false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var a="qx.client",
b="readOnly",
c="accessKey",
d="qx.bom.element.Attribute",
e="rowSpan",
f="vAlign",
g="className",
h="textContent",
i="'",
j="htmlFor",
k="longDesc",
l="cellSpacing",
m="frameBorder",
n="='",
o="",
p="useMap",
q="innerText",
r="innerHTML",
s="tabIndex",
t="dateTime",
u="maxLength",
v="mshtml",
w="cellPadding",
x="colSpan";
qx.Class.define(d,
{statics:{__eD:{names:{"class":g,
"for":j,
html:r,
text:qx.core.Variant.isSet(a,
v)?q:h,
colspan:x,
rowspan:e,
valign:f,
datetime:t,
accesskey:c,
tabindex:s,
maxlength:u,
readonly:b,
longdesc:k,
cellpadding:w,
cellspacing:l,
frameborder:m,
usemap:p},
runtime:{"html":1,
"text":1},
bools:{compact:1,
nowrap:1,
ismap:1,
declare:1,
noshade:1,
checked:1,
disabled:1,
readonly:1,
multiple:1,
selected:1,
noresize:1,
defer:1},
property:{$$html:1,
$$widget:1,
disabled:1,
checked:1,
readOnly:1,
multiple:1,
selected:1,
value:1,
maxLength:1,
className:1,
innerHTML:1,
innerText:1,
textContent:1,
htmlFor:1,
tabIndex:1},
original:{href:1,
src:1,
type:1}},
compile:function(y){var z=[];
var A=this.__eD.runtime;
for(var B in y){if(!A[B]){z.push(B,
n,
y[B],
i);
}}return z.join(o);
},
get:qx.core.Variant.select(a,
{"mshtml":function(C,
D){var E=this.__eD;
var F;
D=E.names[D]||D;
if(E.original[D]){F=C.getAttribute(D,
2);
}else if(E.property[D]){F=C[D];
}else{F=C.getAttribute(D);
}if(E.bools[D]){return !!F;
}return F;
},
"default":function(C,
D){var E=this.__eD;
var F;
D=E.names[D]||D;
if(E.property[D]){F=C[D];
if(F==null){F=C.getAttribute(D);
}}else{F=C.getAttribute(D);
}if(E.bools[D]){return !!F;
}return F;
}}),
set:function(C,
D,
F){var E=this.__eD;
D=E.names[D]||D;
if(E.bools[D]){F=!!F;
}if(E.property[D]){C[D]=F;
}else if(F===true){C.setAttribute(D,
D);
}else if(F===false||F===null){C.removeAttribute(D);
}else{C.setAttribute(D,
F);
}},
reset:function(C,
D){this.set(C,
D,
null);
}}});
})();
(function(){var a="qx.event.type.Native",
b="_native";
qx.Class.define(a,
{extend:qx.event.type.Event,
members:{init:function(c,
d,
e,
f,
g){arguments.callee.base.call(this,
f,
g);
this._target=d||qx.bom.Event.getTarget(c);
this._relatedTarget=e||qx.bom.Event.getRelatedTarget(c);
if(c.timeStamp){this._timeStamp=c.timeStamp;
}this._native=c;
return this;
},
clone:function(h){var i=arguments.callee.base.call(this,
h);
i._native=this._native;
return i;
},
preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},
stop:function(){this.stopPropagation();
this.preventDefault();
},
getNativeEvent:function(){return this._native;
}},
destruct:function(){this._disposeFields(b);
}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,
{extend:qx.event.type.Native,
statics:{SHIFT_MASK:1,
CTRL_MASK:2,
ALT_MASK:4,
META_MASK:8},
members:{getModifiers:function(){if(!this.__modifiers){var b=0;
var c=this._native;
if(c.shiftKey){b|=qx.event.type.Dom.SHIFT_MASK;
}
if(c.ctrlKey){b|=qx.event.type.Dom.CTRL_MASK;
}
if(c.altKey){b|=qx.event.type.Dom.ALT_MASK;
}
if(c.metaKey){b|=qx.event.type.Dom.META_MASK;
}return b;
}return this.__modifiers;
},
isCtrlPressed:function(){return this._native.ctrlKey;
},
isShiftPressed:function(){return this._native.shiftKey;
},
isAltPressed:function(){return this._native.altKey;
},
isMetaPressed:function(){return this._native.metaKey;
},
isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,
{extend:qx.event.type.Dom,
members:{init:function(b,
c,
d){arguments.callee.base.call(this,
b,
c,
null,
true,
true);
this._charCode=d;
return this;
},
clone:function(e){var f=arguments.callee.base.call(this,
e);
f._charCode=this._charCode;
return f;
},
getCharCode:function(){return this._charCode;
},
getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="iPod",
b="Win32",
c="",
d="Win64",
e="Linux",
f="BSD",
g="Macintosh",
h="iPhone",
i="Windows",
j="qx.bom.client.Platform",
k="X11",
l="MacIntel",
m="MacPPC";
qx.Bootstrap.define(j,
{statics:{NAME:"",
WIN:false,
MAC:false,
UNIX:false,
__eE:function(){var n=navigator.platform;
if(n==null||n===c){n=navigator.userAgent;
}
if(n.indexOf(i)!=-1||n.indexOf(b)!=-1||n.indexOf(d)!=-1){this.WIN=true;
this.NAME="win";
}else if(n.indexOf(g)!=-1||n.indexOf(m)!=-1||n.indexOf(l)!=-1||n.indexOf(a)!=-1||n.indexOf(h)!=-1){this.MAC=true;
this.NAME="mac";
}else if(n.indexOf(k)!=-1||n.indexOf(e)!=-1||n.indexOf(f)!=-1){this.UNIX=true;
this.NAME="unix";
}else{throw new Error("Unable to detect platform: "+n);
}}},
defer:function(o){o.__eE();
}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,
{extend:qx.event.type.Dom,
members:{init:function(b,
c,
d){arguments.callee.base.call(this,
b,
c,
null,
true,
true);
this._identifier=d;
return this;
},
clone:function(e){var f=arguments.callee.base.call(this,
e);
f._identifier=this._identifier;
return f;
},
getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var a="qx.client",
b="left",
c="right",
d="middle",
e="dblclick",
f="click",
g="none",
h="contextmenu",
i="qx.event.type.Mouse";
qx.Class.define(i,
{extend:qx.event.type.Dom,
members:{init:function(j,
k,
l,
m,
n){arguments.callee.base.call(this,
j,
k,
l,
m,
n);
if(!l){this._relatedTarget=qx.bom.Event.getRelatedTarget(j);
}return this;
},
__eF:qx.core.Variant.select(a,
{"mshtml":{1:b,
2:c,
4:d},
"default":{0:b,
2:c,
1:d}}),
stop:function(){this.stopPropagation();
},
getButton:function(){switch(this._type){case f:case e:return b;
case h:return c;
default:return this.__eF[this._native.button]||g;
}},
isLeftPressed:function(){return this.getButton()===b;
},
isMiddlePressed:function(){return this.getButton()===d;
},
isRightPressed:function(){return this.getButton()===c;
},
getRelatedTarget:function(){return this._relatedTarget;
},
getViewportLeft:function(){return this._native.clientX;
},
getViewportTop:function(){return this._native.clientY;
},
getDocumentLeft:qx.core.Variant.select(a,
{"mshtml":function(){var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(o);
},
"default":function(){return this._native.pageX;
}}),
getDocumentTop:qx.core.Variant.select(a,
{"mshtml":function(){var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},
"default":function(){return this._native.pageY;
}}),
getScreenLeft:function(){return this._native.screenX;
},
getScreenTop:function(){return this._native.screenY;
},
getWheelDelta:qx.core.Variant.select(a,
{"default":function(){return -(this._native.wheelDelta/40);
},
"gecko":function(){return this._native.detail;
}})}});
})();
(function(){var a="qx.client",
b="qx.event.type.Drag";
qx.Class.define(b,
{extend:qx.event.type.Event,
members:{init:function(c,
d){arguments.callee.base.call(this,
false,
c);
if(d){this._native=d.getNativeEvent()||null;
this._originalTarget=d.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},
clone:function(e){var f=arguments.callee.base.call(this,
e);
f._native=this._native;
return f;
},
getDocumentLeft:qx.core.Variant.select(a,
{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(g);
},
"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),
getDocumentTop:qx.core.Variant.select(a,
{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
},
"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),
getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},
addType:function(h){this.getManager().addType(h);
},
addAction:function(i){this.getManager().addAction(i);
},
supportsType:function(h){return this.getManager().supportsType(h);
},
supportsAction:function(i){return this.getManager().supportsAction(i);
},
addData:function(h,
j){this.getManager().addData(h,
j);
},
getData:function(h){return this.getManager().getData(h);
},
getCurrentType:function(){return this.getManager().getCurrentType();
},
getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var a="__eG",
b="__eI",
c="blur",
d="losecapture",
e="__eH",
f="capture",
g="click",
h="qx.event.dispatch.MouseCapture",
j="focus",
k="scroll";
qx.Class.define(h,
{extend:qx.core.Object,
implement:qx.event.IEventDispatcher,
construct:function(m){arguments.callee.base.call(this);
this.__eG=m;
this.__eH=m.getWindow();
m.addListener(this.__eH,
c,
this.releaseCapture,
this);
m.addListener(this.__eH,
j,
this.releaseCapture,
this);
m.addListener(this.__eH,
k,
this.releaseCapture,
this);
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},
members:{__eI:null,
__eG:null,
__eH:null,
canDispatchEvent:function(n,
o,
p){return this.__eI&&this.__eJ[p];
},
dispatchEvent:function(n,
o,
p){if(p==g){o.stopPropagation();
this.releaseCapture();
return;
}var q=this.__eG.getListeners(this.__eI,
p,
false);
if(q){o.setCurrentTarget(this.__eI);
o.setEventPhase(qx.event.type.Event.AT_TARGET);
for(var r=0,
s=q.length;r<s;r++){var t=q[r].context||o.getCurrentTarget();
q[r].handler.call(t,
o);
}}},
__eJ:{"mouseup":1,
"mousedown":1,
"click":1,
"dblclick":1,
"mousemove":1,
"mouseout":1,
"mouseover":1},
activateCapture:function(u){if(this.__eI===u){return;
}
if(this.__eI){this.releaseCapture();
}this.__eI=u;
qx.event.Registration.fireEvent(u,
f,
qx.event.type.Event,
[true,
false]);
},
releaseCapture:function(){var u=this.__eI;
if(!u){return;
}this.__eI=null;
qx.event.Registration.fireEvent(u,
d,
qx.event.type.Event,
[true,
false]);
}},
destruct:function(){this._disposeFields(b,
a,
e);
},
defer:function(v){qx.event.Registration.addDispatcher(v);
}});
})();
(function(){var a="_window",
b="_manager",
c="qx.event.handler.Window";
qx.Class.define(c,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(d){arguments.callee.base.call(this);
this._manager=d;
this._window=d.getWindow();
this._initWindowObserver();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{error:1,
load:1,
beforeunload:1,
unload:1,
resize:1,
scroll:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,
IGNORE_CAN_HANDLE:true},
members:{canHandleEvent:function(f,
g){},
registerEvent:function(f,
g,
h){},
unregisterEvent:function(f,
g,
h){},
_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,
this);
var i=qx.event.handler.Window.SUPPORTED_TYPES;
for(var j in i){qx.bom.Event.addNativeListener(this._window,
j,
this._onNativeWrapper);
}},
_stopWindowObserver:function(){var i=qx.event.handler.Window.SUPPORTED_TYPES;
for(var j in i){qx.bom.Event.removeNativeListener(this._window,
j,
this._onNativeWrapper);
}},
_onNative:function(k){if(this.isDisposed()){return;
}var l=this._window;
var m=l.document;
var n=m.documentElement;
var f=k.target||k.srcElement;
if(f==null||f===l||f===m||f===n){qx.event.Registration.fireEvent(this._window,
k.type);
}}},
destruct:function(){this._stopWindowObserver();
this._disposeFields(b,
a);
},
defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var a="textarea",
b="input",
c="qx.client",
d="character",
e="qx.bom.Selection",
f="#text",
g="EndToEnd",
h="button",
i="body";
qx.Class.define(e,
{statics:{getSelectionObject:qx.core.Variant.select(c,
{"mshtml":function(j){return j.selection;
},
"default":function(j){return qx.dom.Node.getWindow(j).getSelection();
}}),
get:qx.core.Variant.select(c,
{"mshtml":function(k){var l=qx.bom.Range.get(qx.dom.Node.getDocument(k));
return l.text;
},
"default":function(k){if(qx.dom.Node.isElement(k)&&(k.nodeName.toLowerCase()==b||k.nodeName.toLowerCase()==a)){return k.value.substring(k.selectionStart,
k.selectionEnd);
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(k)).toString();
}return null;
}}),
getLength:qx.core.Variant.select(c,
{"mshtml":function(k){var m=qx.bom.Selection.get(k);
var n=qx.util.StringSplit.split(m,
/\r\n/);
return m.length-(n.length-1);
},
"opera":function(k){var m,
o,
n;
if(qx.dom.Node.isElement(k)&&(k.nodeName.toLowerCase()==b||k.nodeName.toLowerCase()==a)){var p=k.selectionStart;
var q=k.selectionEnd;
m=k.value.substring(p,
q);
o=q-p;
}else{m=qx.bom.Selection.get(k);
o=m.length;
}n=qx.util.StringSplit.split(m,
/\r\n/);
return o-(n.length-1);
},
"default":function(k){if(qx.dom.Node.isElement(k)&&(k.nodeName.toLowerCase()==b||k.nodeName.toLowerCase()==a)){return k.selectionEnd-k.selectionStart;
}else{return qx.bom.Selection.get(k).length;
}return null;
}}),
set:qx.core.Variant.select(c,
{"mshtml":function(k,
p,
q){var l;
if(qx.dom.Node.isDocument(k)){k=k.body;
}
if(qx.dom.Node.isElement(k)||qx.dom.Node.isText(k)){switch(k.nodeName.toLowerCase()){case b:case a:case h:if(q===undefined){q=k.value.length;
}
if(p>=0&&p<=k.value.length&&q>=0&&q<=k.value.length){l=qx.bom.Range.get(k);
l.collapse(true);
l.moveStart(d,
p);
l.moveEnd(d,
q);
l.select();
return true;
}break;
case f:if(q===undefined){q=k.nodeValue.length;
}
if(p>=0&&p<=k.nodeValue.length&&q>=0&&q<=k.nodeValue.length){l=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
l.moveToElementText(k.parentNode);
l.collapse(true);
l.moveStart(d,
p);
l.moveEnd(d,
q);
l.select();
return true;
}break;
default:if(q===undefined){q=k.childNodes.length-1;
}if(k.childNodes[p]&&k.childNodes[q]){l=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
l.moveToElementText(k.childNodes[p]);
l.collapse(true);
var r=qx.bom.Range.get(qx.dom.Node.getBodyElement(k));
r.moveToElementText(k.childNodes[q]);
l.setEndPoint(g,
r);
l.select();
return true;
}}}return false;
},
"default":function(k,
p,
q){var s=k.nodeName.toLowerCase();
if(qx.dom.Node.isElement(k)&&(s==b||s==a)){if(q===undefined){q=k.value.length;
}if(p>=0&&p<=k.value.length&&q>=0&&q<=k.value.length){k.select();
k.setSelectionRange(p,
q);
return true;
}}else{var t=false;
var u=qx.dom.Node.getWindow(k).getSelection();
var l=qx.bom.Range.get(k);
if(qx.dom.Node.isText(k)){if(q===undefined){q=k.length;
}
if(p>=0&&p<k.length&&q>=0&&q<=k.length){t=true;
}}else if(qx.dom.Node.isElement(k)){if(q===undefined){q=k.childNodes.length-1;
}
if(p>=0&&k.childNodes[p]&&q>=0&&k.childNodes[q]){t=true;
}}else if(qx.dom.Node.isDocument(k)){k=k.body;
if(q===undefined){q=k.childNodes.length-1;
}
if(p>=0&&k.childNodes[p]&&q>=0&&k.childNodes[q]){t=true;
}}
if(t){if(!u.isCollapsed){u.collapseToStart();
}l.setStart(k,
p);
if(qx.dom.Node.isText(k)){l.setEnd(k,
q);
}else{l.setEndAfter(k.childNodes[q]);
}if(u.rangeCount>0){u.removeAllRanges();
}u.addRange(l);
return true;
}}return false;
}}),
setAll:function(k){return qx.bom.Selection.set(k,
0);
},
clear:qx.core.Variant.select(c,
{"mshtml":function(k){var u=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(k));
var l=qx.bom.Range.get(k);
var v=l.parentElement();
var w=qx.bom.Range.get(qx.dom.Node.getDocument(k));
if(v==w.parentElement()&&v==k){u.empty();
}},
"default":function(k){var u=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(k));
var s=k.nodeName.toLowerCase();
if(qx.dom.Node.isElement(k)&&(s==b||s==a)){k.setSelectionRange(0,
0);
qx.bom.Element.blur(k);
}else if(qx.dom.Node.isDocument(k)||s==i){u.collapse(k.body?k.body:k,
0);
}else{var l=qx.bom.Range.get(k);
if(!l.collapsed){var x;
var y=l.commonAncestorContainer;
if(qx.dom.Node.isElement(k)&&qx.dom.Node.isText(y)){x=y.parentNode;
}else{x=y;
}
if(x==k){u.collapse(k,
0);
}}}}})}});
})();
(function(){var a="button",
b="qx.bom.Range",
c="text",
d="password",
e="file",
f="submit",
g="reset",
h="textarea",
i="input",
j="hidden",
k="qx.client",
l="body";
qx.Class.define(b,
{statics:{get:qx.core.Variant.select(k,
{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case i:switch(m.type){case c:case d:case j:case a:case g:case e:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case h:case l:case a:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},
"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);
if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
}}})}});
})();
(function(){var a="",
b="g",
c="$",
d="qx.util.StringSplit",
e="\\$&",
f="^";
qx.Bootstrap.define(d,
{statics:{split:function(g,
h,
k){var l=a;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,
e),
b);
}else{l=h.toString().replace(/^[\S\s]+\//,
a);
if(!h.global){h=new RegExp(h.source,
b+l);
}}var m=new RegExp(f+h.source+c,
l);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);
if(!k){return [];
}}var n,
o=[],
p=0,
q=0;
while((k?q++<=k:true)&&(n=h.exec(g))){if((n[0].length===0)&&(h.lastIndex>n.index)){h.lastIndex--;
}
if(h.lastIndex>p){if(n.length>1){n[0].replace(m,
function(){for(var r=1;r<arguments.length-2;r++){if(arguments[r]===undefined){n[r]=undefined;
}}});
}o=o.concat(g.substring(p,
n.index),
(n.index===g.length?[]:n.slice(1)));
p=h.lastIndex;
}
if(n[0].length===0){h.lastIndex++;
}}return (p===g.length)?(h.test(a)?o:o.concat(a)):(k?o:o.concat(g.substring(p)));
}}});
})();
(function(){var a="qx.ui.core.queue.Widget",
b="widget";
qx.Class.define(a,
{statics:{__eK:{},
add:function(c){var d=this.__eK;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},
flush:function(){var d=this.__eK;
var e;
for(var f in d){e=d[f];
delete d[f];
e.syncWidget();
}for(var f in d){return;
}this.__eK={};
}}});
})();
(function(){var a="appearance",
b="qx.ui.core.queue.Appearance";
qx.Class.define(b,
{statics:{__eL:{},
add:function(c){var d=this.__eL;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},
flush:function(){var d=this.__eL;
var e;
for(var f in d){e=d[f];
delete d[f];
e.syncAppearance();
}for(var f in d){return;
}this.__eL={};
}}});
})();
(function(){var a="qx.ui.core.queue.Layout",
b="layout";
qx.Class.define(a,
{statics:{__ci:{},
add:function(c){this.__ci[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},
flush:function(){var d=this.__cm();
for(var e=d.length-1;e>=0;e--){var c=d[e];
if(c.hasValidLayout()){continue;
}if(c.isRootWidget()&&!c.hasUserBounds()){var f=c.getSizeHint();
c.renderLayout(0,
0,
f.width,
f.height);
}else{var g=c.getBounds();
c.renderLayout(g.left,
g.top,
g.width,
g.height);
}}},
getNestingLevel:function(c){var h=this.__cl;
var j=0;
var k=c;
while(true){if(h[k.$$hash]!=null){j+=h[k.$$hash];
break;
}
if(!k.$$parent){break;
}k=k.$$parent;
j+=1;
}var l=j;
while(c&&c!==k){h[c.$$hash]=l--;
c=c.$$parent;
}return j;
},
isWidgetVisible:function(c){var h=this.__ck;
var k=c;
var m=false;
while(k){if(h[k.$$hash]!=null){m=h[k.$$hash];
break;
}if(k.isRootWidget()){m=true;
break;
}if(!k.shouldBeLayouted()){break;
}k=k.$$parent;
}while(c&&c!==k){h[c.$$hash]=m;
c=c.$$parent;
}return m;
},
__cj:function(){this.__ck={};
this.__cl={};
var n=[];
var d=this.__ci;
var c,
j;
for(var o in d){c=d[o];
if(this.isWidgetVisible(c)){j=this.getNestingLevel(c);
if(!n[j]){n[j]={};
}n[j][o]=c;
delete d[o];
}}return n;
},
__cm:function(){var p=[];
var n=this.__cj();
for(var j=n.length-1;j>=0;j--){if(!n[j]){continue;
}
for(var o in n[j]){var c=n[j][o];
if(j==0||c.isRootWidget()||c.hasUserBounds()){p.push(c);
c.invalidateLayoutCache();
continue;
}var q=c.getSizeHint(false);
if(q){c.invalidateLayoutCache();
var r=c.getSizeHint();
var s=(!c.getBounds()||q.minWidth!==r.minWidth||q.width!==r.width||q.maxWidth!==r.maxWidth||q.minHeight!==r.minHeight||q.height!==r.height||q.maxHeight!==r.maxHeight);
}else{s=true;
}
if(s){var k=c.getLayoutParent();
if(!n[j-1]){n[j-1]={};
}n[j-1][k.$$hash]=k;
}else{p.push(c);
}}}return p;
}}});
})();
(function(){var a="dispose",
b="qx.ui.core.queue.Dispose";
qx.Class.define(b,
{statics:{__eM:{},
add:function(c){var d=this.__eM;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},
flush:function(){var d=this.__eM;
for(var e in d){d[e].dispose();
delete d[e];
}for(var e in d){return;
}this.__eM={};
}}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,
{members:{getChildren:function(){return this._getChildren();
},
hasChildren:function(){return this._hasChildren();
},
indexOf:function(b){return this._indexOf(b);
},
add:function(b,
c){this._add(b,
c);
},
addAt:function(b,
d,
c){this._addAt(b,
d,
c);
},
addBefore:function(b,
e,
c){this._addBefore(b,
e,
c);
},
addAfter:function(b,
f,
c){this._addAfter(b,
f,
c);
},
remove:function(b){this._remove(b);
},
removeAt:function(d){this._removeAt(d);
},
removeAll:function(){this._removeAll();
}},
statics:{remap:function(g){g.getChildren=g._getChildren;
g.hasChildren=g._hasChildren;
g.indexOf=g._indexOf;
g.add=g._add;
g.addAt=g._addAt;
g.addBefore=g._addBefore;
g.addAfter=g._addAfter;
g.remove=g._remove;
g.removeAt=g._removeAt;
g.removeAll=g._removeAll;
}}});
})();
(function(){var a="Integer",
b="_applyDimension",
c="Boolean",
d="_applyStretching",
e="_applyMargin",
f="shorthand",
g="_applyAlign",
h="allowShrinkY",
i="bottom",
j="__bn",
k="baseline",
l="marginBottom",
m="qx.ui.core.LayoutItem",
n="center",
o="marginTop",
p="$$subparent",
q="allowGrowX",
r="middle",
s="__bp",
t="marginLeft",
u="__bq",
v="allowShrinkX",
w="$$parent",
x="top",
y="right",
z="marginRight",
A="abstract",
B="__bl",
C="allowGrowY",
D="left";
qx.Class.define(m,
{type:A,
extend:qx.core.Object,
properties:{minWidth:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
width:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
maxWidth:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
minHeight:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
height:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
maxHeight:{check:a,
nullable:true,
apply:b,
init:null,
themeable:true},
allowGrowX:{check:c,
apply:d,
init:true,
themeable:true},
allowShrinkX:{check:c,
apply:d,
init:true,
themeable:true},
allowGrowY:{check:c,
apply:d,
init:true,
themeable:true},
allowShrinkY:{check:c,
apply:d,
init:true,
themeable:true},
allowStretchX:{group:[q,
v],
mode:f,
themeable:true},
allowStretchY:{group:[C,
h],
mode:f,
themeable:true},
marginTop:{check:a,
init:0,
apply:e,
themeable:true},
marginRight:{check:a,
init:0,
apply:e,
themeable:true},
marginBottom:{check:a,
init:0,
apply:e,
themeable:true},
marginLeft:{check:a,
init:0,
apply:e,
themeable:true},
margin:{group:[o,
z,
l,
t],
mode:f,
themeable:true},
alignX:{check:[D,
n,
y],
nullable:true,
apply:g,
themeable:true},
alignY:{check:[x,
r,
i,
k],
nullable:true,
apply:g,
themeable:true}},
members:{__bk:null,
__bl:null,
__bm:null,
__bn:null,
__bo:null,
__bp:null,
__bq:null,
getBounds:function(){return this.__bp||this.__bl||null;
},
clearSeparators:function(){},
renderSeparator:function(E,
F){},
renderLayout:function(G,
H,
I,
J){var K;
var L=null;
if(this.getHeight()==null&&this._hasHeightForWidth()){var L=this._getHeightForWidth(I);
}
if(L!=null&&L!==this.__bk){this.__bk=L;
qx.ui.core.queue.Layout.add(this);
return null;
}var M=this.__bl;
if(!M){M=this.__bl={};
}var N={};
if(G!==M.left||H!==M.top){N.position=true;
M.left=G;
M.top=H;
}
if(I!==M.width||J!==M.height){N.size=true;
M.width=I;
M.height=J;
}if(this.__bm){N.local=true;
delete this.__bm;
}
if(this.__bo){N.margin=true;
delete this.__bo;
}return N;
},
shouldBeLayouted:function(){return true;
},
hasValidLayout:function(){return !this.__bm;
},
scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},
invalidateLayoutCache:function(){this.__bm=true;
this.__bn=null;
},
getSizeHint:function(O){var P=this.__bn;
if(P){return P;
}
if(O===false){return null;
}P=this.__bn=this._computeSizeHint();
if(this.__bk&&this.getHeight()==null){P.height=this.__bk;
}if(!this.getAllowShrinkX()){P.minWidth=P.width;
}else if(P.minWidth>P.width){P.width=P.minWidth;
}
if(!this.getAllowShrinkY()){P.minHeight=P.height;
}else if(P.minHeight>P.height){P.height=P.minHeight;
}if(!this.getAllowGrowX()){P.maxWidth=P.width;
}else if(P.width>P.maxWidth){P.width=P.maxWidth;
}
if(!this.getAllowGrowY()){P.maxHeight=P.height;
}else if(P.height>P.maxHeight){P.height=P.maxHeight;
}return P;
},
_computeSizeHint:function(){var Q=this.getMinWidth()||0;
var R=this.getMinHeight()||0;
var I=this.getWidth()||Q;
var J=this.getHeight()||R;
var S=this.getMaxWidth()||Infinity;
var T=this.getMaxHeight()||Infinity;
return {minWidth:Q,
width:I,
maxWidth:S,
minHeight:R,
height:J,
maxHeight:T};
},
_hasHeightForWidth:function(){return false;
},
_getHeightForWidth:function(I){return null;
},
_applyMargin:function(){this.__bo=true;
var U=this.$$parent;
if(U){U.updateLayoutProperties();
}},
_applyAlign:function(){var U=this.$$parent;
if(U){U.updateLayoutProperties();
}},
_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},
_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},
hasUserBounds:function(){return !!this.__bp;
},
setUserBounds:function(G,
H,
I,
J){this.__bp={left:G,
top:H,
width:I,
height:J};
qx.ui.core.queue.Layout.add(this);
},
resetUserBounds:function(){delete this.__bp;
qx.ui.core.queue.Layout.add(this);
},
__br:{},
setLayoutProperties:function(V){if(V==null){return;
}var W=this.__bq;
if(!W){W=this.__bq={};
}var U=this.getLayoutParent();
if(U){U.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},
getLayoutProperties:function(){return this.__bq||this.__br;
},
clearLayoutProperties:function(){delete this.__bq;
},
updateLayoutProperties:function(V){var Y=this._getLayout();
if(Y){var X;
Y.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},
getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},
getLayoutParent:function(){return this.$$parent||null;
},
setLayoutParent:function(U){this.$$parent=U;
},
isRootWidget:function(){return false;
},
_getRoot:function(){var U=this;
while(U){if(U.isRootWidget()){return U;
}U=U.$$parent;
}return null;
},
clone:function(){var ba=arguments.callee.base.call(this);
var V=this.__bq;
if(V){ba.__bq=qx.lang.Object.copy(V);
}return ba;
},
serialize:function(){var bb=arguments.callee.base.call(this);
var V=this.__bq;
if(V){bb.layoutProperties=qx.lang.Object.copy(V);
}return bb;
}},
destruct:function(){this._disposeFields(w,
p,
u,
B,
s,
j);
}});
})();
(function(){var a="px",
b="qx.event.type.Mouse",
c="Boolean",
d="qx.event.type.Drag",
f="visible",
g="qx.event.type.Focus",
h="excluded",
j="Integer",
k="on",
m="object",
n="_applyPadding",
o="qx.event.type.Event",
p="zIndex",
q="hidden",
r="tabIndex",
s="contextmenu",
t="absolute",
u="backgroundColor",
v="focused",
w="hovered",
x="qx.event.type.KeySequence",
y="qx.client",
z="height",
A="div",
B="qx.event.type.Data",
C="disabled",
D="move",
E="dragstart",
F="dragchange",
G="position",
H="dragend",
I="resize",
J="Decorator",
K="width",
L="$$widget",
M="mshtml",
N="none",
O="default",
P="Color",
Q="top",
R="left",
S="String",
T="drag",
U="_applyBackgroundColor",
V="__bD",
W="_applyFocusable",
X="changeShadow",
Y="qx.event.type.KeyInput",
ba="normal",
bb="Font",
bc="_applyShadow",
bd="_applyEnabled",
be="_applySelectable",
bf="_applyKeepActive",
bg="Number",
bh="_applyVisibility",
bi="__bs",
bj="repeat",
bk="qxDraggable",
bl="paddingLeft",
bm="_applyDroppable",
bn="userSelect",
bo="__bx",
bp="__bt",
bq="_applyCursor",
br="changeVisibility",
bs="_applyDraggable",
bt="changeTextColor",
bu="changeContextMenu",
bv="paddingTop",
bw="opacity",
bx="__bC",
by="hideFocus",
bz="__by",
bA="outline",
bB="_applyAppearance",
bC="overflowX",
bD="__bv",
bE="_applyOpacity",
bF="url(",
bG=")",
bH="qx.ui.core.Widget",
bI="_applyFont",
bJ="cursor",
bK="qxDroppable",
bL="__bA",
bM="changeZIndex",
bN="overflowY",
bO="changeEnabled",
bP="__bw",
bQ="changeFont",
bR="off",
bS="_applyDecorator",
bT="_applyZIndex",
bU="_applyTextColor",
bV="qx.ui.menu.Menu",
bW="__bI",
bX="true",
bY="widget",
ca="changeDecorator",
cb="_applyTabIndex",
cc="changeAppearance",
cd="shorthand",
ce="/",
cf="_applyContextMenu",
cg="qxSelectable",
ch="paddingBottom",
ci="qx.ui.tooltip.ToolTip",
cj="qxKeepActive",
ck="_applyKeepFocus",
cl="webkit",
cm="paddingRight",
cn="changeBackgroundColor",
co="qxKeepFocus",
cp="undefined",
cq="qx/static/blank.gif";
qx.Class.define(bH,
{extend:qx.ui.core.LayoutItem,
include:[qx.locale.MTranslation],
construct:function(){arguments.callee.base.call(this);
this.__bs=this._createContainerElement();
this.__bt=this.__bB();
this.__bs.add(this.__bt);
this.__bs.setAttribute(L,
this.toHashCode());
{};
qx.ui.core.queue.Appearance.add(this);
this.initFocusable();
this.initSelectable();
this.initCursor();
this.initKeepFocus();
this.initKeepActive();
},
events:{appear:o,
disappear:o,
resize:B,
move:B,
mousemove:b,
mouseover:b,
mouseout:b,
mousedown:b,
mouseup:b,
click:b,
dblclick:b,
contextmenu:b,
mousewheel:b,
keyup:x,
keydown:x,
keypress:x,
keyinput:Y,
focus:g,
blur:g,
focusin:g,
focusout:g,
activate:g,
deactivate:g,
capture:o,
losecapture:o,
drop:d,
dragleave:d,
dragover:d,
drag:d,
dragstart:d,
dragend:d,
dragchange:d,
droprequest:d},
properties:{paddingTop:{check:j,
init:0,
apply:n,
themeable:true},
paddingRight:{check:j,
init:0,
apply:n,
themeable:true},
paddingBottom:{check:j,
init:0,
apply:n,
themeable:true},
paddingLeft:{check:j,
init:0,
apply:n,
themeable:true},
padding:{group:[bv,
cm,
ch,
bl],
mode:cd,
themeable:true},
zIndex:{nullable:true,
init:null,
apply:bT,
event:bM,
check:j,
themeable:true},
decorator:{nullable:true,
init:null,
apply:bS,
event:ca,
check:J,
themeable:true},
shadow:{nullable:true,
init:null,
apply:bc,
event:X,
check:J,
themeable:true},
backgroundColor:{nullable:true,
check:P,
apply:U,
event:cn,
themeable:true},
textColor:{nullable:true,
check:P,
apply:bU,
event:bt,
themeable:true,
inheritable:true},
font:{nullable:true,
apply:bI,
check:bb,
event:bQ,
themeable:true,
inheritable:true},
opacity:{check:bg,
apply:bE,
themeable:true,
nullable:true,
init:null},
cursor:{check:S,
apply:bq,
themeable:true,
inheritable:true,
nullable:true,
init:null},
toolTip:{check:ci,
nullable:true},
visibility:{check:[f,
q,
h],
init:f,
apply:bh,
event:br},
enabled:{init:true,
check:c,
inheritable:true,
apply:bd,
event:bO},
anonymous:{init:false,
check:c},
tabIndex:{check:j,
nullable:true,
apply:cb},
focusable:{check:c,
init:false,
apply:W},
keepFocus:{check:c,
init:false,
apply:ck},
keepActive:{check:c,
init:false,
apply:bf},
draggable:{check:c,
init:false,
apply:bs},
droppable:{check:c,
init:false,
apply:bm},
selectable:{check:c,
init:false,
apply:be},
contextMenu:{check:bV,
apply:cf,
nullable:true,
event:bu},
appearance:{check:S,
init:bY,
apply:bB,
event:cc}},
statics:{DEBUG:false,
getWidgetByElement:function(cr){try{while(cr){var cs=cr.$$widget;
if(cs!=null){return qx.core.ObjectRegistry.fromHashCode(cs);
}cr=cr.parentNode;
}}catch(ex){}return null;
},
contains:function(ct,
cu){while(cu){if(ct==cu){return true;
}cu=cu.getLayoutParent();
}return false;
},
__bu:{}},
members:{__bs:null,
__bt:null,
__bv:null,
__bw:null,
__bx:null,
__by:null,
_getLayout:function(){return this.__by;
},
_setLayout:function(cv){{};
if(this.__by){this.__by.connectToWidget(null);
}
if(cv){cv.connectToWidget(this);
}this.__by=cv;
qx.ui.core.queue.Layout.add(this);
},
setLayoutParent:function(ct){if(this.$$parent===ct){return;
}
if(this.$$parent){this.$$parent.getContentElement().remove(this.__bs);
}this.$$parent=ct||null;
if(this.$$parent){this.$$parent.getContentElement().add(this.__bs);
}qx.core.Property.refresh(this);
},
__bz:null,
renderLayout:function(cw,
cx,
cy,
cz){var cA=arguments.callee.base.call(this,
cw,
cx,
cy,
cz);
if(!cA){return;
}var cB=this.__bs;
var cC=this.__bt;
var cD=cA.size||this.__bz;
var cE=a;
if(cA.position){cB.setStyle(R,
cw+cE);
cB.setStyle(Q,
cx+cE);
}if(cA.size){cB.setStyle(K,
cy+cE);
cB.setStyle(z,
cz+cE);
}
if(cD||cA.local||cA.margin){var cF=this.getInsets();
var cG=cy-cF.left-cF.right;
var cH=cz-cF.top-cF.bottom;
}
if(this.__bz){cC.setStyle(R,
cF.left+cE);
cC.setStyle(Q,
cF.top+cE);
}
if(cD){cC.setStyle(K,
cG+cE);
cC.setStyle(z,
cH+cE);
}
if(cA.size){var cI=this.__bx;
if(cI){cI.setStyles({width:cy+a,
height:cz+a});
}}
if(cA.size||this.__bz){var cJ=qx.theme.manager.Decoration.getInstance();
var cK=this.getDecorator();
if(cK){var cr=this.__bv;
var cL=cJ.resolve(cK);
cL.resize(cr,
cy,
cz);
}}
if(cA.size){var cM=this.getShadow();
if(cM){var cr=this.__bw;
var cL=cJ.resolve(cM);
var cF=cL.getInsets();
var cN=cy+cF.left+cF.right;
var cO=cz+cF.top+cF.bottom;
cL.resize(cr,
cN,
cO);
}}
if(cD||cA.local||cA.margin){if(this.__by&&this.hasLayoutChildren()){this.__by.renderLayout(cG,
cH);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cA.position&&this.hasListener(D)){this.fireDataEvent(D,
this.getBounds());
}
if(cA.size&&this.hasListener(I)){this.fireDataEvent(I,
this.getBounds());
}delete this.__bz;
},
__bA:null,
clearSeparators:function(){var cP=this.__bA;
if(!cP){return;
}var cQ=qx.ui.core.Widget.__bu;
var cC=this.__bt;
var cR,
cS;
for(var cT=0,
cU=cP.length;cT<cU;cT++){cS=cP[cT];
cR=cS.$$separator;
if(!cQ[cR]){cQ[cR]=[cS];
}else{cQ[cR].push(cS);
}cC.remove(cS);
}cP.length=0;
},
renderSeparator:function(cR,
cV){var cQ=qx.ui.core.Widget.__bu;
var cW=qx.theme.manager.Decoration.getInstance();
if(typeof cR==m){var cX=cR.toHashCode();
var cL=cR;
}else{var cX=cR;
var cL=cW.resolve(cR);
}var cY=cQ[cR];
if(cY&&cY.length>0){var cS=cY.pop();
}else{var cS=this.__bH(cL);
}this.__bt.add(cS);
cL.resize(cS,
cV.width,
cV.height);
var da=cS.getDomElement().style;
da.left=cV.left+a;
da.top=cV.top+a;
if(!this.__bA){this.__bA=[cS];
}else{this.__bA.push(cS);
}cS.$$separator=cX;
},
_computeSizeHint:function(){var cy=this.getWidth();
var db=this.getMinWidth();
var dc=this.getMaxWidth();
var cz=this.getHeight();
var dd=this.getMinHeight();
var de=this.getMaxHeight();
var df=this._getContentHint();
var cF=this.getInsets();
var dg=cF.left+cF.right;
var dh=cF.top+cF.bottom;
if(cy==null){cy=df.width+dg;
}
if(cz==null){cz=df.height+dh;
}
if(db==null){db=dg;
if(df.minWidth!=null){db+=df.minWidth;
}}
if(dd==null){dd=dh;
if(df.minHeight!=null){dd+=df.minHeight;
}}
if(dc==null){if(df.maxWidth==null){dc=Infinity;
}else{dc=df.maxWidth+dg;
}}
if(de==null){if(df.maxHeight==null){de=Infinity;
}else{de=df.maxHeight+dh;
}}return {width:cy,
minWidth:db,
maxWidth:dc,
height:cz,
minHeight:dd,
maxHeight:de};
},
invalidateLayoutCache:function(){arguments.callee.base.call(this);
if(this.__by){this.__by.invalidateLayoutCache();
}},
_getContentHint:function(){var cv=this.__by;
if(cv){if(this.hasLayoutChildren()){var di=cv.getSizeHint();
var dj;
return di;
}else{return {width:0,
height:0};
}}else{return {width:100,
height:50};
}},
_getHeightForWidth:function(cy){var cF=this.getInsets();
var dg=cF.left+cF.right;
var dh=cF.top+cF.bottom;
var dk=cy-dg;
var dl=this._getContentHeightForWidth(dk);
var cz=dl+dh;
return cz;
},
_getContentHeightForWidth:function(cy){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},
getInsets:function(){var cx=this.getPaddingTop();
var dm=this.getPaddingRight();
var dn=this.getPaddingBottom();
var cw=this.getPaddingLeft();
var cK=this.getDecorator();
if(cK){var cJ=qx.theme.manager.Decoration.getInstance();
var cL=cJ.resolve(cK);
var dp=cL.getInsets();
{};
cx+=dp.top;
dm+=dp.right;
dn+=dp.bottom;
cw+=dp.left;
}return {"top":cx,
"right":dm,
"bottom":dn,
"left":cw};
},
getInnerSize:function(){var dq=this.getBounds();
if(!dq){return null;
}var cF=this.getInsets();
return {width:dq.width-cF.left-cF.right,
height:dq.height-cF.top-cF.bottom};
},
show:function(){this.setVisibility(f);
},
hide:function(){this.setVisibility(q);
},
exclude:function(){this.setVisibility(h);
},
isVisible:function(){return this.getVisibility()===f;
},
isHidden:function(){return this.getVisibility()!==f;
},
isExcluded:function(){return this.getVisibility()===h;
},
_createContainerElement:function(){var dr=new qx.html.Element(A);
{};
dr.setStyle(G,
t);
dr.setStyle(p,
0);
return dr;
},
__bB:function(){var dr=this._createContentElement();
{};
dr.setStyle(G,
t);
dr.setStyle(p,
10);
return dr;
},
_createContentElement:function(){var dr=new qx.html.Element(A);
dr.setStyle(bC,
q);
dr.setStyle(bN,
q);
return dr;
},
getContainerElement:function(){return this.__bs;
},
getContentElement:function(){return this.__bt;
},
getDecoratorElement:function(){return this.__bv;
},
__bC:null,
__bD:null,
getLayoutChildren:function(){var ds=this.__bC;
if(!ds){return this.__bE;
}
if(this.__bD){return this.__bD;
}var dt=[];
for(var cT=0,
cU=ds.length;cT<cU;cT++){var cu=ds[cT];
if(!cu.hasUserBounds()&&cu.shouldBeLayouted()){dt.push(cu);
}}this.__bD=dt;
return dt;
},
scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},
invalidateLayoutChildren:function(){var cv=this.__by;
if(cv){cv.invalidateChildrenCache();
}this.__bD=null;
qx.ui.core.queue.Layout.add(this);
},
shouldBeLayouted:function(){return this.getVisibility()!==h;
},
hasLayoutChildren:function(){var ds=this.getLayoutChildren();
return ds&&ds.length>0;
},
getChildrenContainer:function(){return this;
},
__bE:[],
_getChildren:function(){return this.__bC||this.__bE;
},
_indexOf:function(cu){var ds=this.__bC;
if(!ds){return -1;
}return ds.indexOf(cu);
},
_hasChildren:function(){var ds=this.__bC;
return ds&&(!!ds[0]);
},
_add:function(cu,
du){if(cu.getLayoutParent()==this){qx.lang.Array.remove(this.__bC,
cu);
}
if(this.__bC){this.__bC.push(cu);
}else{this.__bC=[cu];
}this.__bF(cu,
du);
},
_addAt:function(cu,
dv,
du){if(!this.__bC){this.__bC=[];
}if(cu.getLayoutParent()==this){qx.lang.Array.remove(this.__bC,
cu);
}var dw=this.__bC[dv];
if(dw===cu){return cu.setLayoutProperties(du);
}
if(dw){qx.lang.Array.insertBefore(this.__bC,
cu,
dw);
}else{this.__bC.push(cu);
}this.__bF(cu,
du);
},
_addBefore:function(cu,
dx,
du){{};
if(cu==dx){return;
}
if(!this.__bC){this.__bC=[];
}if(cu.getLayoutParent()==this){qx.lang.Array.remove(this.__bC,
cu);
}qx.lang.Array.insertBefore(this.__bC,
cu,
dx);
this.__bF(cu,
du);
},
_addAfter:function(cu,
dy,
du){{};
if(cu==dy){return;
}
if(!this.__bC){this.__bC=[];
}if(cu.getLayoutParent()==this){qx.lang.Array.remove(this.__bC,
cu);
}qx.lang.Array.insertAfter(this.__bC,
cu,
dy);
this.__bF(cu,
du);
},
_remove:function(cu){if(!this.__bC){return;
}qx.lang.Array.remove(this.__bC,
cu);
this.__bG(cu);
},
_removeAt:function(dv){if(!this.__bC){throw new Error("This widget has no children!");
}var cu=this.__bC[dv];
qx.lang.Array.removeAt(this.__bC,
dv);
this.__bG(cu);
},
_removeAll:function(){if(!this.__bC){return;
}var ds=this.__bC.concat();
this.__bC.length=0;
for(var cT=ds.length-1;cT>=0;cT--){ds[cT].setLayoutParent(null);
}qx.ui.core.queue.Layout.add(this);
},
_afterAddChild:null,
_afterRemoveChild:null,
__bF:function(cu,
du){{};
var ct=cu.getLayoutParent();
if(ct&&ct!=this){ct._remove(cu);
}cu.setLayoutParent(this);
if(du){cu.setLayoutProperties(du);
}else{this.updateLayoutProperties();
}this.__bD=null;
if(this._afterAddChild){this._afterAddChild(cu);
}},
__bG:function(cu){{};
cu.setLayoutParent(null);
if(this.__by){this.__by.invalidateChildrenCache();
}this.__bD=null;
qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(cu);
}},
capture:function(){this.__bs.capture();
},
releaseCapture:function(){this.__bs.releaseCapture();
},
_applyPadding:function(dz,
dA,
dB){this.__bz=true;
qx.ui.core.queue.Layout.add(this);
},
_createProtectorElement:function(){if(this.__bx){return;
}var dC=this.__bx=new qx.html.Element;
{};
dC.setStyles({position:t,
top:0,
left:0,
zIndex:7});
if(qx.core.Variant.isSet(y,
M)){dC.setStyles({backgroundImage:bF+qx.util.ResourceManager.toUri(cq)+bG,
backgroundRepeat:bj});
}this.__bs.add(dC);
},
__bH:function(cK){var cr=new qx.html.Element;
cr.setStyles({position:t,
top:0,
left:0});
{};
cK.init(cr);
return cr;
},
_applyDecorator:function(dz,
dA){var cQ=qx.ui.core.Widget.__bu;
var cW=qx.theme.manager.Decoration.getInstance();
var cB=this.__bs;
var cS=this.__bv;
if(!this.__bx){this._createProtectorElement();
}var dD;
if(dA){if(typeof dA===m){dD=dA.toHashCode();
}else{dD=dA;
dA=cW.resolve(dA);
}}var dE;
if(dz){if(typeof dz===m){dE=dz.toHashCode();
{};
}else{dE=dz;
dz=cW.resolve(dz);
}}if(dA){if(!cQ[dD]){cQ[dD]=[];
}cB.remove(cS);
cQ[dD].push(cS);
}if(dz){if(cQ[dE]&&cQ[dE].length>0){cS=cQ[dE].pop();
}else{cS=this.__bH(dz);
cS.setStyle(p,
5);
}var dF=this.getBackgroundColor();
dz.tint(cS,
dF);
cB.add(cS);
this.__bv=cS;
}else{delete this.__bv;
this._applyBackgroundColor(this.getBackgroundColor());
}if(dz&&!dA&&dF){this.getContainerElement().setStyle(u,
null);
}if(qx.ui.decoration.Util.insetsModified(dA,
dz)){this.__bz=true;
qx.ui.core.queue.Layout.add(this);
}else if(dz){var cV=this.getBounds();
if(cV){cW.resolve(dz).resize(cS,
cV.width,
cV.height);
}}},
_applyShadow:function(dz,
dA){var cQ=qx.ui.core.Widget.__bu;
var cW=qx.theme.manager.Decoration.getInstance();
var cB=this.__bs;
var dD;
if(dA){if(typeof dA===m){dD=dA.toHashCode();
}else{dD=dA;
dA=cW.resolve(dA);
}}var dE;
if(dz){if(typeof dz===m){dE=dz.toHashCode();
}else{dE=dz;
dz=cW.resolve(dz);
}}if(dA){if(!cQ[dD]){cQ[dD]=[];
}cB.remove(this.__bw);
cQ[dD].push(this.__bw);
}if(dz){var cS;
if(cQ[dE]&&cQ[dE].length>0){cS=cQ[dE].pop();
}else{cS=this.__bH(dz);
}cB.add(cS);
this.__bw=cS;
var cF=dz.getInsets();
cS.setStyles({left:(-cF.left)+a,
top:(-cF.top)+a});
var cV=this.getBounds();
if(cV){var cN=cV.width+cF.left+cF.right;
var cO=cV.height+cF.top+cF.bottom;
dz.resize(cS,
cN,
cO);
}}else{delete this.__bw;
}},
_applyTextColor:function(dz,
dA){},
_applyZIndex:function(dz,
dA){this.__bs.setStyle(p,
dz==null?0:dz);
},
_applyVisibility:function(dz,
dA){if(dz===f){this.__bs.show();
}else{this.__bs.hide();
}var ct=this.$$parent;
if(ct&&(dA==null||dz==null||dA===h||dz===h)){ct.invalidateLayoutChildren();
}},
_applyOpacity:function(dz,
dA){this.__bs.setStyle(bw,
dz);
},
_applyCursor:function(dz,
dA){if(dz==null&&!this.isSelectable()){dz=O;
}this.__bs.setStyle(bJ,
dz);
},
_applyBackgroundColor:function(dz,
dA){var cK=this.getDecorator();
var cM=this.getShadow();
var dG=this.getBackgroundColor();
var cB=this.__bs;
if(cK||cM){var cS=this.__bv;
if(cS){var cL=qx.theme.manager.Decoration.getInstance().resolve(cK);
cL.tint(this.__bv,
dG);
}cB.setStyle(u,
null);
}else{var dH=qx.theme.manager.Color.getInstance().resolve(dG);
cB.setStyle(u,
dH);
}},
_applyFont:function(dz,
dA){},
hasState:function(dI){var dJ=this.__bI;
return dJ&&dJ[dI];
},
__bI:null,
addState:function(dI){var dJ=this.__bI;
if(!dJ){dJ=this.__bI={};
}
if(dJ[dI]){return;
}this.__bI[dI]=true;
if(dI===w){this.syncAppearance();
}else{qx.ui.core.queue.Appearance.add(this);
}var dK=this._forwardStates;
var dL=this.__bL;
if(dK&&dK[dI]&&dL){var dM;
for(var cX in dL){dM=dL[cX];
if(dM instanceof qx.ui.core.Widget){dL[cX].addState(dI);
}}}},
removeState:function(dI){var dJ=this.__bI;
if(!dJ||!dJ[dI]){return;
}delete this.__bI[dI];
if(dI===w){this.syncAppearance();
}else{qx.ui.core.queue.Appearance.add(this);
}var dK=this._forwardStates;
var dL=this.__bL;
if(dK&&dK[dI]&&dL){for(var cX in dL){var dM=dL[cX];
if(dM instanceof qx.ui.core.Widget){dM.removeState(dI);
}}}},
replaceState:function(dA,
dz){var dJ=this.__bI;
if(!dJ){dJ=this.__bI={};
}
if(!dJ[dz]){dJ[dz]=true;
}
if(dJ[dA]){delete dJ[dA];
}qx.ui.core.queue.Appearance.add(this);
var dK=this._forwardStates;
var dL=this.__bL;
if(dK&&dK[dz]&&dL){for(var cX in dL){var dM=dL[cX];
if(dM instanceof qx.ui.core.Widget){dM.replaceState(dA,
dz);
}}}},
__bJ:null,
__bK:null,
syncAppearance:function(){var dJ=this.__bI;
var dN=this.__bJ;
var cJ=qx.theme.manager.Appearance.getInstance();
var dO=qx.core.Property.$$method.setThemed;
var dP=qx.core.Property.$$method.resetThemed;
if(this.__bK){delete this.__bK;
if(dN){var dQ=cJ.styleFrom(dN,
dJ);
if(dQ){dN=null;
}}}if(!dN){var dR=this;
var cX=[];
do{cX.push(dR.$$subcontrol||dR.getAppearance());
}while(dR=dR.$$subparent);
dN=this.__bJ=cX.reverse().join(ce);
}var dS=cJ.styleFrom(dN,
dJ);
if(dS){if(dQ){for(var dT in dQ){if(dS[dT]===undefined){this[dP[dT]]();
}}}var dT;
var dz;
var dU=cp;
for(var dT in dS){dz=dS[dT];
dz===dU?this[dP[dT]]():this[dO[dT]](dz);
}}else if(dQ){for(var dT in dQ){this[dP[dT]]();
}}},
_applyAppearance:function(dz,
dA){this.updateAppearance();
},
updateAppearance:function(){this.__bK=true;
qx.ui.core.queue.Appearance.add(this);
var dL=this.__bL;
if(dL){var dR;
for(var cX in dL){dR=dL[cX];
if(dR instanceof qx.ui.core.Widget){dR.updateAppearance();
}}}},
syncWidget:function(){},
getEventTarget:function(){var dV=this;
while(dV.getAnonymous()){dV=dV.getLayoutParent();
if(!dV){return null;
}}return dV;
},
getFocusTarget:function(){var dV=this;
if(!dV.getEnabled()){return null;
}
while(dV.getAnonymous()||!dV.getFocusable()){dV=dV.getLayoutParent();
if(!dV||!dV.getEnabled()){return null;
}}return dV;
},
getFocusElement:function(){return this.__bs;
},
isTabable:function(){return this.isFocusable();
},
_applyFocusable:function(dz,
dA){var dV=this.getFocusElement();
if(dz){var dW=this.getTabIndex();
if(dW==null){dW=1;
}dV.setAttribute(r,
dW);
if(qx.core.Variant.isSet(y,
M)){dV.setAttribute(by,
bX);
}else{dV.setStyle(bA,
N);
}}else{if(dV.isNativelyFocusable()){dV.setAttribute(r,
-1);
}else if(dA){dV.setAttribute(r,
null);
}}},
_applyKeepFocus:function(dz){var dV=this.getFocusElement();
dV.setAttribute(co,
dz?k:null);
},
_applyKeepActive:function(dz){var dV=this.getContainerElement();
dV.setAttribute(cj,
dz?k:null);
},
_applyTabIndex:function(dz){if(dz==null){dz=1;
}else if(dz<1||dz>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&dz!=null){this.getFocusElement().setAttribute(r,
dz);
}},
_applySelectable:function(dz){this._applyCursor(this.getCursor());
this.__bs.setAttribute(cg,
dz?k:bR);
if(qx.core.Variant.isSet(y,
cl)){this.__bs.setStyle(bn,
dz?ba:N);
}},
_applyEnabled:function(dz,
dA){if(dz===false){this.addState(C);
this.removeState(w);
if(this.isFocusable()){this.removeState(v);
this._applyFocusable(false,
true);
}}else{this.removeState(C);
if(this.isFocusable()){this._applyFocusable(true,
false);
}}},
_applyContextMenu:function(dz,
dA){if(dA){dA.removeState(s);
if(dA.getOpener()==this){dA.resetOpener();
}
if(!dz){this.removeListener(s,
this._onContextMenuOpen);
}}
if(dz){dz.setOpener(this);
dz.addState(s);
if(!dA){this.addListener(s,
this._onContextMenuOpen);
}}},
_onContextMenuOpen:function(dX){var dY=this.getContextMenu();
dY.placeToMouse(dX);
dY.show();
dX.preventDefault();
},
_onStopEvent:function(dX){dX.stopPropagation();
},
_applyDraggable:function(dz,
dA){qx.ui.core.DragDropCursor.getInstance();
if(dz){this.addListener(E,
this._onDragStart);
this.addListener(T,
this._onDrag);
this.addListener(H,
this._onDragEnd);
this.addListener(F,
this._onDragChange);
}else{this.removeListener(E,
this._onDragStart);
this.removeListener(T,
this._onDrag);
this.removeListener(H,
this._onDragEnd);
this.removeListener(F,
this._onDragChange);
}this.__bs.setAttribute(bk,
dz?k:null);
},
_applyDroppable:function(dz,
dA){this.__bs.setAttribute(bK,
dz?k:null);
},
_onDragStart:function(dX){qx.ui.core.DragDropCursor.getInstance().placeToMouse(dX);
this.getApplicationRoot().setGlobalCursor(O);
},
_onDrag:function(dX){qx.ui.core.DragDropCursor.getInstance().placeToMouse(dX);
},
_onDragEnd:function(dX){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,
-1000);
this.getApplicationRoot().resetGlobalCursor();
},
_onDragChange:function(dX){var ea=qx.ui.core.DragDropCursor.getInstance();
var eb=dX.getCurrentAction();
eb?ea.setAction(eb):ea.resetAction();
},
visualizeFocus:function(){this.addState(v);
},
visualizeBlur:function(){this.removeState(v);
},
scrollChildIntoView:function(cu,
ec,
ed,
ee){this.scrollChildIntoViewX(cu,
ec,
ee);
this.scrollChildIntoViewY(cu,
ed,
ee);
},
scrollChildIntoViewX:function(cu,
ef,
ee){this.__bt.scrollChildIntoViewX(cu.getContainerElement(),
ef,
ee);
},
scrollChildIntoViewY:function(cu,
ef,
ee){this.__bt.scrollChildIntoViewY(cu.getContainerElement(),
ef,
ee);
},
focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},
blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},
activate:function(){this.__bs.activate();
},
deactivate:function(){this.__bs.deactivate();
},
tabFocus:function(){this.getFocusElement().focus();
},
_hasChildControl:function(cX){if(!this.__bL){return false;
}return !!this.__bL[cX];
},
__bL:null,
_getChildControl:function(cX,
eg){if(!this.__bL){if(eg){return null;
}this.__bL={};
}var dM=this.__bL[cX];
if(dM){return dM;
}
if(eg===true){return null;
}return this._createChildControl(cX);
},
_showChildControl:function(cX){var dM=this._getChildControl(cX);
dM.show();
return dM;
},
_excludeChildControl:function(cX){var dM=this._getChildControl(cX,
true);
if(dM){dM.exclude();
}},
_isChildControlVisible:function(cX){var dM=this._getChildControl(cX,
true);
if(dM){return dM.isVisible();
}return false;
},
_createChildControl:function(cX){if(!this.__bL){this.__bL={};
}else if(this.__bL[cX]){throw new Error("Child control '"+cX+"' already created!");
}var dM=this._createChildControlImpl(cX);
if(!dM){throw new Error("Unsupported control: "+cX);
}dM.$$subcontrol=cX;
dM.$$subparent=this;
var dJ=this.__bI;
var dK=this._forwardStates;
if(dJ&&dK&&dM instanceof qx.ui.core.Widget){for(var dI in dJ){if(dK[dI]){dM.addState(dI);
}}}return this.__bL[cX]=dM;
},
_createChildControlImpl:function(cX){return null;
},
_disposeChildControls:function(){var dL=this.__bL;
if(!dL){return;
}var eh=qx.ui.core.Widget;
for(var cX in dL){var dM=dL[cX];
if(!eh.contains(this,
dM)){dM.destroy();
}else{dM.dispose();
}}delete this.__bL;
},
_findTopControl:function(){var dR=this;
while(dR){if(!dR.$$subparent){return dR;
}dR=dR.$$subparent;
}return null;
},
getContainerLocation:function(ei){var ej=this.getContainerElement().getDomElement();
return ej?qx.bom.element.Location.get(ej,
ei):null;
},
getContentLocation:function(ei){var ej=this.getContentElement().getDomElement();
return ej?qx.bom.element.Location.get(ej,
ei):null;
},
setDomLeft:function(dz){var ej=this.getContainerElement().getDomElement();
if(ej){ej.style.left=dz+a;
}else{throw new Error("DOM element is not yet created!");
}},
setDomTop:function(dz){var ej=this.getContainerElement().getDomElement();
if(ej){ej.style.top=dz+a;
}else{throw new Error("DOM element is not yet created!");
}},
setDomPosition:function(cw,
cx){var ej=this.getContainerElement().getDomElement();
if(ej){ej.style.left=cw+a;
ej.style.top=cx+a;
}else{throw new Error("DOM element is not yet created!");
}},
destroy:function(){if(this.$$disposed){return;
}var ct=this.getLayoutParent();
if(ct){ct._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},
clone:function(){var ek=arguments.callee.base.call(this);
if(this.getChildren){var ds=this.getChildren();
for(var cT=0,
cU=ds.length;cT<cU;cT++){ek.add(ds[cT].clone());
}}return ek;
},
serialize:function(){var em=arguments.callee.base.call(this);
if(this.getChildren){var ds=this.getChildren();
if(ds.length>0){em.children=[];
for(var cT=0,
cU=ds.length;cT<cU;cT++){em.children.push(ds[cT].serialize());
}}}
if(this.getLayout){var cv=this.getLayout();
if(cv){em.layout=cv.serialize();
}}return em;
}},
destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){this.__bs.setAttribute(L,
null,
true);
this._disposeChildControls();
}this._disposeArray(bx);
this._disposeArray(V);
this._disposeArray(bL);
this._disposeFields(bW);
this._disposeObjects(bz,
bi,
bp,
bD,
bP,
bo);
}});
})();
(function(){var a="100%",
b="backgroundColor",
c="opacity",
d="_applyBlockerColor",
e="Number",
f="zIndex",
g="qx.ui.core.MBlocker",
h="_applyBlockerOpacity",
j="Color",
k="__ko",
l="absolute";
qx.Mixin.define(g,
{properties:{blockerColor:{check:j,
init:null,
nullable:true,
apply:d,
themeable:true},
blockerOpacity:{check:e,
init:1,
apply:h,
themeable:true}},
members:{__kl:null,
__km:null,
__kn:null,
__ko:null,
__kp:null,
_applyBlockerColor:function(m,
n){var o=[];
this.__kl&&o.push(this.__kl);
this.__ko&&o.push(this.__ko);
for(var p=0;p<o.length;p++){o[p].setStyle(b,
qx.theme.manager.Color.getInstance().resolve(m));
}},
_applyBlockerOpacity:function(m,
n){var o=[];
this.__kl&&o.push(this.__kl);
this.__ko&&o.push(this.__ko);
for(var p=0;p<o.length;p++){o[p].setStyle(c,
m);
}},
__kq:function(){var q=new qx.html.Element().setStyles({position:l,
width:a,
height:a,
opacity:this.getBlockerOpacity(),
backgroundColor:qx.theme.manager.Color.getInstance().resolve(this.getBlockerColor())});
return q;
},
_getBlocker:function(){if(!this.__kl){this.__kl=this.__kq();
this.getContentElement().add(this.__kl);
this.__kl.exclude();
}return this.__kl;
},
block:function(){if(this.__km){return;
}this.__km=true;
this._getBlocker().include();
this.__kn=this.getAnonymous();
this.setAnonymous(true);
},
isBlocked:function(){return !!this.__km;
},
unblock:function(){if(!this.__km){return;
}this.__km=false;
this.setAnonymous(this.__kn);
this._getBlocker().exclude();
},
_getContentBlocker:function(){if(!this.__ko){this.__ko=this.__kq();
this.getContentElement().add(this.__ko);
this.__ko.exclude();
}return this.__ko;
},
blockContent:function(r){var q=this._getContentBlocker();
q.setStyle(f,
r);
if(this.__kp){return;
}this.__kp=true;
q.include();
},
isContentBlocked:function(){return !!this.__kp;
},
unblockContent:function(){if(!this.__kp){return;
}this.__kp=false;
this._getContentBlocker().exclude();
}},
destruct:function(){this._disposeObjects(k);
}});
})();
(function(){var a="qx.ui.window.Window",
b="changeModal",
c="changeVisibility",
d="changeActive",
f="_applyActiveWindow",
g="__me",
h="qx.ui.window.MDesktop",
i="__mf";
qx.Mixin.define(h,
{properties:{activeWindow:{check:a,
apply:f}},
members:{__me:null,
__mf:null,
getWindowManager:function(){if(!this.__mf){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__mf;
},
supportsMaximize:function(){return true;
},
setWindowManager:function(j){if(this.__mf){this.__mf.setDesktop(null);
}j.setDesktop(this);
this.__mf=j;
},
_onChangeActive:function(k){if(k.getData()){this.setActiveWindow(k.getTarget());
}},
_applyActiveWindow:function(l,
m){this.getWindowManager().changeActiveWindow(l,
m);
l.setActive(true);
if(m){m.resetActive();
}},
_onChangeModal:function(k){this.getWindowManager().updateStack();
},
_onChangeVisibility:function(){this.getWindowManager().updateStack();
},
_afterAddChild:function(n){if(qx.Class.isDefined(a)&&n instanceof qx.ui.window.Window){this._addWindow(n);
}},
_addWindow:function(n){this.getWindows().push(n);
n.addListener(d,
this._onChangeActive,
this);
n.addListener(b,
this._onChangeModal,
this);
n.addListener(c,
this._onChangeVisibility,
this);
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},
_afterRemoveChild:function(n){if(qx.Class.isDefined(a)&&n instanceof qx.ui.window.Window){this._removeWindow(n);
}},
_removeWindow:function(n){qx.lang.Array.remove(this.getWindows(),
n);
n.removeListener(d,
this._onChangeActive,
this);
n.removeListener(b,
this._onChangeModal,
this);
n.removeListener(c,
this._onChangeVisibility,
this);
this.getWindowManager().updateStack();
},
getWindows:function(){if(!this.__me){this.__me=[];
}return this.__me;
}},
destruct:function(){this._disposeArray(g);
this._disposeObjects(i);
}});
})();
(function(){var a="contextmenu",
b="changeGlobalCursor",
c="abstract",
d="Boolean",
f="root",
g="",
h="_applyNativeContextMenu",
i=" !important",
j="__mg",
k="_applyGlobalCursor",
l="qx.client",
m=";",
n="qx.ui.root.Abstract",
o="String",
p="*";
qx.Class.define(n,
{type:c,
extend:qx.ui.core.Widget,
include:[qx.ui.core.MChildrenHandling,
qx.ui.core.MBlocker,
qx.ui.window.MDesktop],
construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},
properties:{appearance:{refine:true,
init:f},
enabled:{refine:true,
init:true},
focusable:{refine:true,
init:true},
globalCursor:{check:o,
nullable:true,
themeable:true,
apply:k,
event:b},
nativeContextMenu:{check:d,
nullable:true,
apply:h,
init:true}},
members:{isRootWidget:function(){return true;
},
getLayout:function(){return this._getLayout();
},
_applyGlobalCursor:qx.core.Variant.select(l,
{"mshtml":function(q,
r){},
"default":function(q,
r){var s=qx.bom.Stylesheet;
var t=this.__mg;
if(!t){this.__mg=t=s.createElement();
}s.removeAllRules(t);
if(q){s.addRule(t,
p,
qx.bom.element.Cursor.compile(q).replace(m,
g)+i);
}}}),
_applyNativeContextMenu:function(q,
r){if(q){this.removeListener(a,
this._onNativeContextMenu,
this,
true);
}else{this.addListener(a,
this._onNativeContextMenu,
this,
true);
}},
_onNativeContextMenu:function(u){u.preventDefault();
}},
destruct:function(){this._disposeFields(j);
},
defer:function(v,
w){qx.ui.core.MChildrenHandling.remap(w);
}});
})();
(function(){var a="resize",
b="position",
c="_doc",
d="0px",
f="qx.ui.root.Application",
g="hidden",
h="div",
i="_window",
j="100%",
k="absolute";
qx.Class.define(f,
{extend:qx.ui.root.Abstract,
construct:function(l){this._window=qx.dom.Node.getWindow(l);
this._doc=l;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this._window,
a,
this._onResize,
this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},
members:{_createContainerElement:function(){var l=this._doc;
var m=l.documentElement.style;
var n=l.body.style;
m.overflow=n.overflow=g;
m.padding=m.margin=n.padding=n.margin=d;
m.width=m.height=n.width=n.height=j;
var o=l.createElement(h);
l.body.appendChild(o);
var p=new qx.html.Root(o);
p.setStyle(b,
k);
return p;
},
_onResize:function(q){qx.ui.core.queue.Layout.add(this);
},
_computeSizeHint:function(){var r=qx.bom.Viewport.getWidth(this._window);
var s=qx.bom.Viewport.getHeight(this._window);
return {minWidth:r,
width:r,
maxWidth:r,
minHeight:s,
height:s,
maxHeight:s};
}},
destruct:function(){this._disposeFields(i,
c);
}});
})();
(function(){var a="blur",
b="focus",
c="load",
d="input",
e="qx.ui.core.EventHandler",
f="__eQ";
qx.Class.define(e,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(){arguments.callee.base.call(this);
this.__eQ=qx.event.Registration.getManager();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,
SUPPORTED_TYPES:{mousemove:1,
mouseover:1,
mouseout:1,
mousedown:1,
mouseup:1,
click:1,
dblclick:1,
contextmenu:1,
mousewheel:1,
keyup:1,
keydown:1,
keypress:1,
keyinput:1,
capture:1,
losecapture:1,
focusin:1,
focusout:1,
focus:1,
blur:1,
activate:1,
deactivate:1,
appear:1,
disappear:1,
dragstart:1,
dragend:1,
dragover:1,
dragleave:1,
drop:1,
drag:1,
dragchange:1,
droprequest:1},
IGNORE_CAN_HANDLE:false},
members:{__eQ:null,
__eR:{focusin:1,
focusout:1,
focus:1,
blur:1},
__eS:{mouseover:1,
mouseout:1,
appear:1,
disappear:1},
canHandleEvent:function(g,
h){return g instanceof qx.ui.core.Widget;
},
_dispatchEvent:function(j){var k=j.getTarget();
var m=qx.ui.core.Widget.getWidgetByElement(k,
true);
while(m&&m.isAnonymous()){m=m.getLayoutParent();
}
if(!m){return;
}if(this.__eR[j.getType()]){m=m.getFocusTarget();
if(!m){return;
}}if(j.getRelatedTarget){var n=j.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(n);
while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__eR[j.getType()]){o=o.getFocusTarget();
}if(o===m){return;
}}}var p=j.getCurrentTarget();
var q=qx.ui.core.Widget.getWidgetByElement(p);
if(!q||q.isAnonymous()){return;
}if(this.__eR[j.getType()]){q=q.getFocusTarget();
}var h=j.getType();
if(!(q.isEnabled()||this.__eS[h])){return;
}var r=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var s=this.__eQ.getListeners(q,
h,
r);
if(!s||s.length===0){return;
}var t=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(t);
t.setTarget(m);
t.setRelatedTarget(o||null);
t.setCurrentTarget(m);
var u=j.getOriginalTarget();
if(u){var v=qx.ui.core.Widget.getWidgetByElement(u);
while(v&&v.isAnonymous()){v=v.getLayoutParent();
}t.setOriginalTarget(v);
}else{t.setOriginalTarget(k);
}for(var w=0,
x=s.length;w<x;w++){var y=s[w].context||q;
s[w].handler.call(y,
t);
}if(t.getPropagationStopped()){j.stopPropagation();
}
if(t.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(t);
},
registerEvent:function(g,
h,
r){var z;
if(h===b||h===a){z=g.getFocusElement();
}else if(h===c||h===d){z=g.getContentElement();
}else{z=g.getContainerElement();
}
if(z){z.addListener(h,
this._dispatchEvent,
this,
r);
}},
unregisterEvent:function(g,
h,
r){var z;
if(h===b||h===a){z=g.getFocusElement();
}else if(h===c||h===d){z=g.getContentElement();
}else{z=g.getContainerElement();
}
if(z){z.removeListener(h,
this._dispatchEvent,
this,
r);
}}},
destruct:function(){this._disposeFields(f);
},
defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="/",
b="qx.util.ResourceManager",
c="string";
qx.Bootstrap.define(b,
{statics:{__eU:window.qxresources||{},
has:function(d){return !!this.__eU[d];
},
getData:function(d){return this.__eU[d]||null;
},
getImageWidth:function(d){var e=this.__eU[d];
return e?e[0]:null;
},
getImageHeight:function(d){var e=this.__eU[d];
return e?e[1]:null;
},
getImageFormat:function(d){var e=this.__eU[d];
return e?e[2]:null;
},
isClippedImage:function(d){var e=this.__eU[d];
return e&&e.length>4;
},
toUri:function(d){if(d==null){return d;
}var e=this.__eU[d];
if(!e){return d;
}
if(typeof e===c){var f=e;
}else{var f=e[3];
if(!f){return d;
}}return window.qxlibraries[f].resourceUri+a+d;
}}});
})();
(function(){var c='<div style="',
d='"></div>',
e='"/>',
f="",
g='" style="vertical-align:top;',
h="scale",
i="qx.ui.decoration.Util",
j='<img src="';
qx.Class.define(i,
{statics:{insetsModified:function(k,
l){if(k==l){return false;
}
if(k==null||l==null){return true;
}var m=qx.theme.manager.Decoration.getInstance();
var n=m.resolve(k).getInsets();
var o=m.resolve(l).getInsets();
if(n.top!=o.top||n.right!=o.right||n.bottom!=o.bottom||n.left!=o.left){return true;
}return false;
},
generateBackgroundMarkup:function(p,
q,
r){if(p){var s=qx.util.AliasManager.getInstance().resolve(p);
if(q==h){var t=qx.util.ResourceManager.toUri(s);
return j+t+g+r+e;
}else{var u=qx.bom.element.Background.compile(s,
q,
0,
0);
return c+u+r+d;
}}else{if(r){return c+r+d;
}else{return f;
}}}}});
})();
(function(){var a="px",
b="0px",
c="qx.client",
d="/",
e="mshtml",
f="",
g=" ",
h=";",
i="background-image:url(",
j=");",
k="0 0",
l="url(",
m=")",
n="background-repeat:",
o="qx.bom.element.Background",
p="background-position:",
q="https:";
qx.Class.define(o,
{statics:{__eV:[i,
null,
j,
p,
null,
h,
n,
null,
h],
__eW:{backgroundImage:null,
backgroundPosition:null,
backgroundRepeat:null},
compile:function(r,
s,
t,
u){var v=qx.bom.client.Engine;
if(v.GECKO&&v.VERSION<1.9&&t==u&&t!=null){u+=0.01;
}
if(t!=null||u!=null){var w=(t==null?b:t+a)+g+(u==null?b:u+a);
}else{var w=k;
}var x=qx.util.ResourceManager.toUri(r);
if(qx.core.Variant.isSet(c,
e)){x=this.__eX(x);
}var y=this.__eV;
y[1]=x;
y[4]=w;
y[7]=s;
return y.join(f);
},
getStyles:function(r,
s,
t,
u){if(!r){return this.__eW;
}var v=qx.bom.client.Engine;
if(v.GECKO&&v.VERSION<1.9&&t==u&&t!=null){u+=0.01;
}
if(t!=null||u!=null){var w=(t==null?b:t+a)+g+(u==null?b:u+a);
}var x=qx.util.ResourceManager.toUri(r);
if(qx.core.Variant.isSet(c,
e)){x=this.__eX(x);
}var z={backgroundImage:l+x+m};
if(w!=null){z.backgroundPosition=w;
}
if(s!=null){z.backgroundRepeat=s;
}return z;
},
set:function(A,
r,
s,
t,
u){var B=this.getStyles(r,
s,
t,
u);
for(var C in B){A.style[C]=B[C];
}},
__eX:qx.core.Variant.select(c,
{"mshtml":function(D){var E=f;
if(window.location.protocol===q){if(D.match(/^\/\//)!=null){E=window.location.protocol;
}else if(D.match(/^\.\//)!=null){D=D.substring(D.indexOf(d));
E=document.URL.substring(0,
document.URL.lastIndexOf(d));
}else{E=window.location.href.substring(0,
window.location.href.lastIndexOf(d)+1);
}}return E+D;
},
"default":function(){}})}});
})();
(function(){var a="replacement",
b="Boolean",
c="_applyScale",
d="_applySource",
e="-disabled.$1",
f="changeSource",
g="String",
h="image",
i="qx.ui.basic.Image";
qx.Class.define(i,
{extend:qx.ui.core.Widget,
construct:function(j){arguments.callee.base.call(this);
if(j){this.setSource(j);
}},
properties:{source:{check:g,
init:null,
nullable:true,
event:f,
apply:d,
themeable:true},
scale:{check:b,
init:false,
themeable:true,
apply:c},
appearance:{refine:true,
init:h},
allowShrinkX:{refine:true,
init:false},
allowShrinkY:{refine:true,
init:false},
allowGrowX:{refine:true,
init:false},
allowGrowY:{refine:true,
init:false}},
members:{__fg:null,
__fh:null,
_createContentElement:function(){return new qx.html.Image();
},
_getContentHint:function(){return {width:this.__fg||0,
height:this.__fh||0};
},
_applyEnabled:function(k,
l){arguments.callee.base.call(this,
k,
l);
if(this.getSource()){this._styleSource();
}},
_applySource:function(k){this._styleSource();
},
_applyScale:function(k){var m=this.getContentElement();
m.setScale(k);
},
_styleSource:function(){var j=qx.util.AliasManager.getInstance().resolve(this.getSource());
var m=this.getContentElement();
if(!j){m.resetSource();
return;
}var n=qx.util.ResourceManager;
var o=qx.io2.ImageLoader;
if(n.has(j)){if(!this.getEnabled()){var p=j.replace(/\.([a-z]+)$/,
e);
if(n.has(p)){j=p;
this.addState(a);
}else{this.removeState(a);
}}if(m.getSource()===j){return;
}m.setSource(j);
this._updateSize(n.getImageWidth(j),
n.getImageHeight(j));
}else if(o.isLoaded(j)){m.setSource(j);
var q=o.getWidth(j);
var r=o.getHeight(j);
this._updateSize(q,
r);
}else{var s;
if(!qx.io2.ImageLoader.isFailed(j)){qx.io2.ImageLoader.load(j,
this.__fi,
this);
}}},
__fi:function(j,
t){if(j!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(!t){this.warn("Image could not be loaded: "+j);
return;
}this._styleSource();
},
_updateSize:function(q,
r){if(q!==this.__fg||r!==this.__fh){this.__fg=q;
this.__fh=r;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var a="Integer",
b="Boolean",
c="bottom-left",
d="offsetLeft",
e="offsetRight",
f="right-top",
g="top-right",
h="top-left",
i="bottom-right",
j="right-bottom",
k="offsetBottom",
l="qx.ui.core.MPlacement",
m="left-top",
n="left-bottom",
o="shorthand",
p="offsetTop";
qx.Mixin.define(l,
{properties:{position:{check:[h,
g,
c,
i,
m,
n,
f,
j],
init:c,
themeable:true},
domMove:{check:b,
init:false},
smart:{check:b,
init:true,
themeable:true},
offsetLeft:{check:a,
init:0,
themeable:true},
offsetTop:{check:a,
init:0,
themeable:true},
offsetRight:{check:a,
init:0,
themeable:true},
offsetBottom:{check:a,
init:0,
themeable:true},
offset:{group:[p,
e,
k,
d],
mode:o,
themeable:true}},
members:{getLayoutLocation:function(q){var r,
s,
t,
u;
s=q.getBounds();
t=s.left;
u=s.top;
var v=s;
q=q.getLayoutParent();
while(q&&!q.isRootWidget()){s=q.getBounds();
t+=s.left;
u+=s.top;
r=q.getInsets();
t+=r.left;
u+=r.top;
q=q.getLayoutParent();
}if(q.isRootWidget()){var w=q.getContainerLocation();
if(w){t+=w.left;
u+=w.top;
}}return {left:t,
top:u,
right:t+v.width,
bottom:u+v.height};
},
moveTo:function(t,
u){if(this.getDomMove()){this.setDomPosition(t,
u);
}else{this.setLayoutProperties({left:t,
top:u});
}},
placeToWidget:function(x){var y=x.getContainerLocation()||this.getLayoutLocation(x);
this.__fj(y);
},
placeToMouse:function(z){var t=z.getDocumentLeft();
var u=z.getDocumentTop();
var y={left:t,
top:u,
right:t,
bottom:u};
this.__fj(y);
},
placeToElement:function(A){var B=qx.bom.element.Location.get(A);
var y={left:B.left,
top:B.top,
right:B.left+A.offsetWidth,
bottom:B.top+A.offsetHeight};
this.__fj(y);
},
placeToPoint:function(C){var y={left:C.left,
top:C.top,
right:C.left,
bottom:C.top};
this.__fj(y);
},
__fj:function(y){var v=this.getSizeHint();
var D=this.getLayoutParent().getBounds();
var E=this.getPosition();
var F=this.getSmart();
var G={left:this.getOffsetLeft(),
top:this.getOffsetTop(),
right:this.getOffsetRight(),
bottom:this.getOffsetBottom()};
var H=qx.util.PlaceUtil.compute(v,
D,
y,
E,
F,
G);
this.moveTo(H.left,
H.top);
}}});
})();
(function(){var a="dragdrop-cursor",
b="_applyAction",
c="alias",
d="qx.ui.core.DragDropCursor",
e="move",
f="singleton",
g="copy";
qx.Class.define(d,
{extend:qx.ui.basic.Image,
include:qx.ui.core.MPlacement,
type:f,
construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,
{left:-1000,
top:-1000});
},
properties:{appearance:{refine:true,
init:a},
action:{check:[c,
g,
e],
apply:b,
nullable:true}},
members:{_applyAction:function(i,
j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var a="scale",
b="source",
c="no-repeat",
d="qx.html.Image";
qx.Class.define(d,
{extend:qx.html.Element,
members:{_applyProperty:function(e,
f){arguments.callee.base.call(this,
e,
f);
if(e===b){var g=this._element;
var h=this._getProperty(b);
var i=this._getProperty(a);
var j=i?a:c;
qx.bom.element.Decoration.update(g,
h,
j);
}},
_createDomElement:function(){var i=this._getProperty(a);
var j=i?a:c;
this._nodeName=qx.bom.element.Decoration.getTagName(j);
return arguments.callee.base.call(this);
},
_copyData:function(k){return arguments.callee.base.call(this,
true);
},
setSource:function(f){this._setProperty(b,
f);
return this;
},
getSource:function(){return this._getProperty(b);
},
resetSource:function(){this._removeProperty(b);
return this;
},
setScale:function(f){this._setProperty(a,
f);
return this;
},
getScale:function(){return this._getProperty(a);
}}});
})();
(function(){var a="px",
b="qx.client",
c="div",
d="img",
e="scale-x",
f="",
g="mshtml",
h="no-repeat",
i="scale-y",
j="repeat",
k="scale",
l="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",
m='<div style="',
n="repeat-y",
o='<img src="',
p="qx.bom.element.Decoration",
q="png",
r="', sizingMethod='scale')",
s='"/>',
t='" style="',
u="none",
v="webkit",
w="repeat-x",
x='"></div>',
y="absolute";
qx.Class.define(p,
{statics:{DEBUG:false,
__fk:qx.core.Variant.isSet(b,
g)&&qx.bom.client.Engine.VERSION<8,
__fl:qx.core.Variant.select(b,
{"mshtml":{"scale-x":true,
"scale-y":true,
"scale":true,
"no-repeat":true},
"default":null}),
__fm:{"scale-x":d,
"scale-y":d,
"scale":d,
"repeat":c,
"no-repeat":c,
"repeat-x":c,
"repeat-y":c},
update:function(z,
A,
B,
C){var D=this.getTagName(B);
if(D!=z.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var E=this.getAttributes(A,
B,
C);
if(D===d){z.src=E.src;
}if(z.style.backgroundPosition!=f&&E.style.backgroundPosition===undefined){E.style.backgroundPosition=null;
}if(z.style.clip!=f&&E.style.clip===undefined){E.style.clip=null;
}var F=qx.bom.element.Style;
F.setStyles(z,
E.style);
},
create:function(A,
B,
C){var D=this.getTagName(B);
var E=this.getAttributes(A,
B,
C);
var G=qx.bom.element.Style.compile(E.style);
if(D===d){return o+E.src+t+G+s;
}else{return m+G+x;
}},
getTagName:function(B){if(qx.core.Variant.isSet(b,
g)){if(this.__fk&&this.__fl[B]){return c;
}}return this.__fm[B];
},
getAttributes:function(A,
B,
C){var H=qx.util.ResourceManager;
var I=qx.io2.ImageLoader;
var J=qx.bom.element.Background;
if(!C){C={};
}
if(!C.position){C.position=y;
}
if(qx.core.Variant.isSet(b,
g)){C.fontSize=0;
C.lineHeight=0;
}else if(qx.core.Variant.isSet(b,
v)){C.WebkitUserDrag=u;
}var K=H.getImageWidth(A)||I.getWidth(A);
var L=H.getImageHeight(A)||I.getHeight(A);
var M=H.getImageFormat(A);
if(this.__fk&&this.__fl[B]&&M===q){if(C.width==null){C.width=K==null?K:K+a;
}
if(C.height==null){C.height=L==null?L:L+a;
}C.filter=l+H.toUri(A)+r;
C.backgroundImage=C.backgroundRepeat=f;
return {style:C};
}else{var N=H.isClippedImage(A);
if(B===k){var O=H.toUri(A);
if(!C.width){C.width=K==null?K:K+a;
}
if(!C.height){C.height=L==null?L:L+a;
}return {src:O,
style:C};
}else if(B===e||B===i){if(N){if(B===e){var P=H.getData(A);
var Q=H.getImageHeight(P[4]);
var O=H.toUri(P[4]);
C.clip={top:-P[6],
height:L};
C.height=Q+a;
if(C.top!=null){C.top=(parseInt(C.top)+P[6])+a;
}else if(C.bottom!=null){C.bottom=(parseInt(C.bottom)+L-Q-P[6])+a;
}return {src:O,
style:C};
}else{var P=H.getData(A);
var R=H.getImageWidth(P[4]);
var O=H.toUri(P[4]);
C.clip={left:-P[5],
width:K};
C.width=R+a;
if(C.left!=null){C.left=(parseInt(C.left)+P[5])+a;
}else if(C.right!=null){C.right=(parseInt(C.right)+K-R-P[5])+a;
}return {src:O,
style:C};
}}else{{};
if(B==e){C.height=L==null?null:L+a;
}else if(B==i){C.width=K==null?null:K+a;
}var O=H.toUri(A);
return {src:O,
style:C};
}}else{if(N&&B!==j){var P=H.getData(A);
var S=J.getStyles(P[4],
B,
P[5],
P[6]);
for(var T in S){C[T]=S[T];
}
if(B==n||B===h){C.width=K==null?K:K+a;
}
if(B==w||B===h){C.height=L==null?L:L+a;
}return {style:C};
}else{{};
var S=J.getStyles(A,
B);
for(var T in S){C[T]=S[T];
}C.width=K==null?K:K+a;
C.height=L==null?L:L+a;
return {style:C};
}}}}}});
})();
(function(){var a="qx.client",
b="qx.io2.ImageLoader",
c="load";
qx.Bootstrap.define(b,
{statics:{__fn:{},
__fo:{width:null,
height:null},
isLoaded:function(d){var e=this.__fn[d];
return !!(e&&e.loaded);
},
isFailed:function(d){var e=this.__fn[d];
return !!(e&&e.failed);
},
isLoading:function(d){var e=this.__fn[d];
return !!(e&&e.loading);
},
getSize:function(d){return this.__fn[d]||this.__fo;
},
getWidth:function(d){var e=this.__fn[d];
return e?e.width:null;
},
getHeight:function(d){var e=this.__fn[d];
return e?e.height:null;
},
load:function(d,
f,
g){var e=this.__fn[d];
if(!e){e=this.__fn[d]={};
}if(f&&!g){g=window;
}if(e.loaded||e.loading||e.failed){if(f){if(e.loading){e.callbacks.push(f,
g);
}else{f.call(g,
d,
e);
}}}else{e.loading=true;
e.callbacks=[];
if(f){e.callbacks.push(f,
g);
}var h=new Image();
var j=qx.lang.Function.listener(this.__fp,
this,
h,
d);
h.onload=j;
h.onerror=j;
h.src=d;
}},
__fp:function(k,
m,
d){var e=this.__fn[d];
if(k.type===c){e.loaded=true;
e.width=this.__fq(m);
e.height=this.__fr(m);
}else{e.failed=true;
}m.onload=m.onerror=null;
var n=e.callbacks;
delete e.loading;
delete e.callbacks;
for(var o=0,
p=n.length;o<p;o+=2){n[o].call(n[o+1],
d,
e);
}},
__fq:qx.core.Variant.select(a,
{"gecko":function(m){return m.naturalWidth;
},
"default":function(m){return m.width;
}}),
__fr:qx.core.Variant.select(a,
{"gecko":function(m){return m.naturalHeight;
},
"default":function(m){return m.height;
}})}});
})();
(function(){var a="bottom",
b="top",
c="left",
d="right",
e="-",
f="qx.util.PlaceUtil";
qx.Class.define(f,
{statics:{compute:function(g,
h,
i,
j,
k,
l){var m=0;
var n=0;
var o,
p;
var q=j.split(e);
var r=q[0];
var s=q[1];
var t=0,
u=0,
v=0,
w=0;
if(l){t+=l.left||0;
u+=l.top||0;
v+=l.right||0;
w+=l.bottom||0;
}switch(r){case c:m=i.left-g.width-t;
break;
case b:n=i.top-g.height-u;
break;
case d:m=i.right+v;
break;
case a:n=i.bottom+w;
break;
}switch(s){case c:m=i.left;
break;
case b:n=i.top;
break;
case d:m=i.right-g.width;
break;
case a:n=i.bottom-g.height;
break;
}
if(k===false){return {left:m,
top:n};
}else{var x=Math.min(m,
h.width-m-g.width);
if(x<0){var y=m;
if(m<0){if(r==c){y=i.right+v;
}else if(s==d){y=i.left;
}}else{if(r==d){y=i.left-g.width-t;
}else if(s==c){y=i.right-g.width;
}}o=Math.min(y,
h.width-y-g.width);
if(o>x){m=y;
x=o;
}}var z=Math.min(n,
h.height-n-g.height);
if(z<0){var A=n;
if(n<0){if(r==b){A=i.bottom+w;
}else if(s==a){A=i.top;
}}else{if(r==a){A=i.top-g.height-u;
}else if(s==b){A=i.bottom-g.height;
}}p=Math.min(A,
h.height-A-g.height);
if(p>z){n=A;
z=p;
}}return {left:m,
top:n,
ratingX:x,
ratingY:z};
}}}});
})();
(function(){var a="keypress",
b="focusout",
c="__kw",
d="activate",
f="Tab",
g="__kx",
h="__ku",
j="singleton",
k="deactivate",
m="__kv",
n="focusin",
o="qx.ui.core.FocusHandler";
qx.Class.define(o,
{extend:qx.core.Object,
type:j,
construct:function(){arguments.callee.base.call(this);
this.__ku={};
},
members:{__ku:null,
__kv:null,
__kw:null,
__kx:null,
connectTo:function(p){p.addListener(a,
this.__ky,
this);
p.addListener(n,
this._onFocusIn,
this,
true);
p.addListener(b,
this._onFocusOut,
this,
true);
p.addListener(d,
this._onActivate,
this,
true);
p.addListener(k,
this._onDeactivate,
this,
true);
},
addRoot:function(q){this.__ku[q.$$hash]=q;
},
removeRoot:function(q){delete this.__ku[q.$$hash];
},
isActive:function(q){return this.__kv==q;
},
isFocused:function(q){return this.__kw==q;
},
isFocusRoot:function(q){!!this.__ku[q.$$hash];
},
_onActivate:function(r){var s=r.getTarget();
this.__kv=s;
var p=this.__kz(s);
if(p!=this.__kx){this.__kx=p;
}},
_onDeactivate:function(r){var s=r.getTarget();
if(this.__kv==s){this.__kv=null;
}},
_onFocusIn:function(r){var s=r.getTarget();
if(s!=this.__kw){this.__kw=s;
s.visualizeFocus();
}},
_onFocusOut:function(r){var s=r.getTarget();
if(s==this.__kw){this.__kw=null;
s.visualizeBlur();
}},
__ky:function(r){if(r.getKeyIdentifier()!=f){return;
}
if(!this.__kx){return;
}r.stopPropagation();
r.preventDefault();
var t=this.__kw;
if(!r.isShiftPressed()){var u=t?this.__kD(t):this.__kB();
}else{var u=t?this.__kE(t):this.__kC();
}if(u){u.tabFocus();
}},
__kz:function(q){var v=this.__ku;
while(q){if(v[q.$$hash]){return q;
}q=q.getLayoutParent();
}return null;
},
__kA:function(w,
x){if(w===x){return 0;
}var y=w.getTabIndex()||0;
var z=x.getTabIndex()||0;
if(y!=z){return y-z;
}var A=w.getContainerElement().getDomElement();
var B=x.getContainerElement().getDomElement();
var C=qx.bom.element.Location;
var D=C.get(A);
var E=C.get(B);
if(D.top!=E.top){return D.top-E.top;
}if(D.left!=E.left){return D.left-E.left;
}var F=w.getZIndex();
var G=x.getZIndex();
if(F!=G){return F-G;
}return 0;
},
__kB:function(){return this.__kH(this.__kx,
null);
},
__kC:function(){return this.__kI(this.__kx,
null);
},
__kD:function(q){var p=this.__kx;
if(p==q){return this.__kB();
}
while(q&&q.getAnonymous()){q=q.getLayoutParent();
}
if(q==null){return [];
}var H=[];
this.__kF(p,
q,
H);
H.sort(this.__kA);
var I=H.length;
return I>0?H[0]:this.__kB();
},
__kE:function(q){var p=this.__kx;
if(p==q){return this.__kC();
}
while(q&&q.getAnonymous()){q=q.getLayoutParent();
}
if(q==null){return [];
}var H=[];
this.__kG(p,
q,
H);
H.sort(this.__kA);
var I=H.length;
return I>0?H[I-1]:this.__kC();
},
__kF:function(J,
q,
H){var K=J.getLayoutChildren();
var L;
for(var M=0,
N=K.length;M<N;M++){L=K[M];
if(!(L instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(L)&&L.isEnabled()){if(L.isTabable()&&this.__kA(q,
L)<0){H.push(L);
}this.__kF(L,
q,
H);
}}},
__kG:function(J,
q,
H){var K=J.getLayoutChildren();
var L;
for(var M=0,
N=K.length;M<N;M++){L=K[M];
if(!(L instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(L)&&L.isEnabled()){if(L.isTabable()&&this.__kA(q,
L)>0){H.push(L);
}this.__kG(L,
q,
H);
}}},
__kH:function(J,
O){var K=J.getLayoutChildren();
var L;
for(var M=0,
N=K.length;M<N;M++){L=K[M];
if(!(L instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(L)&&L.isEnabled()){if(L.isTabable()){if(O==null||this.__kA(L,
O)<0){O=L;
}}O=this.__kH(L,
O);
}}return O;
},
__kI:function(J,
P){var K=J.getLayoutChildren();
var L;
for(var M=0,
N=K.length;M<N;M++){L=K[M];
if(!(L instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(L)&&L.isEnabled()){if(L.isTabable()){if(P==null||this.__kA(L,
P)>0){P=L;
}}P=this.__kI(L,
P);
}}return P;
}},
destruct:function(){this._disposeMap(h);
this._disposeFields(c,
m,
g);
}});
})();
(function(){var a="qx.client",
b="head",
c="text/css",
d="stylesheet",
e="}",
f='@import "',
g="{",
h='";',
j="qx.bom.Stylesheet",
k="link",
l="style";
qx.Class.define(j,
{statics:{includeFile:function(m,
n){if(!n){n=document;
}var o=n.createElement(k);
o.type=c;
o.rel=d;
o.href=qx.util.ResourceManager.toUri(m);
var p=n.getElementsByTagName(b)[0];
p.appendChild(o);
},
createElement:qx.core.Variant.select(a,
{"mshtml":function(q){var r=document.createStyleSheet();
if(q){r.cssText=q;
}return r;
},
"default":function(q){var s=document.createElement(l);
s.type=c;
if(q){s.appendChild(document.createTextNode(q));
}document.getElementsByTagName(b)[0].appendChild(s);
return s.sheet;
}}),
addRule:qx.core.Variant.select(a,
{"mshtml":function(r,
t,
u){r.addRule(t,
u);
},
"default":function(r,
t,
u){r.insertRule(t+g+u+e,
r.cssRules.length);
}}),
removeRule:qx.core.Variant.select(a,
{"mshtml":function(r,
t){var v=r.rules;
var w=v.length;
for(var x=w-1;x>=0;--x){if(v[x].selectorText==t){r.removeRule(x);
}}},
"default":function(r,
t){var v=r.cssRules;
var w=v.length;
for(var x=w-1;x>=0;--x){if(v[x].selectorText==t){r.deleteRule(x);
}}}}),
removeAllRules:qx.core.Variant.select(a,
{"mshtml":function(r){var v=r.rules;
var w=v.length;
for(var x=w-1;x>=0;x--){r.removeRule(x);
}},
"default":function(r){var v=r.cssRules;
var w=v.length;
for(var x=w-1;x>=0;x--){r.deleteRule(x);
}}}),
addImport:qx.core.Variant.select(a,
{"mshtml":function(r,
y){r.addImport(y);
},
"default":function(r,
y){r.insertRule(f+y+h,
r.cssRules.length);
}}),
removeImport:qx.core.Variant.select(a,
{"mshtml":function(r,
y){var z=r.imports;
var w=z.length;
for(var x=w-1;x>=0;x--){if(z[x].href==y){r.removeImport(x);
}}},
"default":function(r,
y){var v=r.cssRules;
var w=v.length;
for(var x=w-1;x>=0;x--){if(v[x].href==y){r.deleteRule(x);
}}}}),
removeAllImports:qx.core.Variant.select(a,
{"mshtml":function(r){var z=r.imports;
var w=z.length;
for(var x=w-1;x>=0;x--){r.removeImport(x);
}},
"default":function(r){var v=r.cssRules;
var w=v.length;
for(var x=w-1;x>=0;x--){if(v[x].type==v[x].IMPORT_RULE){r.deleteRule(x);
}}}})}});
})();
(function(){var a="abstract",
b="__ft",
c="__fs",
d="qx.ui.layout.Abstract";
qx.Class.define(d,
{type:a,
extend:qx.core.Object,
members:{__fs:null,
_invalidChildrenCache:null,
__ft:null,
invalidateLayoutCache:function(){this.__fs=null;
},
renderLayout:function(e,
f){this.warn("Missing renderLayout() implementation!");
},
getSizeHint:function(){if(this.__fs){return this.__fs;
}return this.__fs=this._computeSizeHint();
},
_computeSizeHint:function(){return null;
},
invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},
verifyLayoutProperty:null,
_clearSeparators:function(){var g=this.__ft;
if(g instanceof qx.ui.core.LayoutItem){g.clearSeparators();
}},
_renderSeparator:function(h,
i){this.__ft.renderSeparator(h,
i);
},
connectToWidget:function(g){if(g&&this.__ft){throw new Error("It is not possible to manually set the connected widget.");
}this.__ft=g;
this.invalidateChildrenCache();
},
_applyLayoutChange:function(){if(this.__ft){this.__ft.scheduleLayoutUpdate();
}},
_getLayoutChildren:function(){return this.__ft.getLayoutChildren();
}},
destruct:function(){this._disposeFields(b,
c);
}});
})();
(function(){var a="number",
b="string",
c="qx.ui.layout.Canvas";
qx.Class.define(c,
{extend:qx.ui.layout.Abstract,
members:{verifyLayoutProperty:null,
renderLayout:function(d,
e){var f=this._getLayoutChildren();
var g,
h,
j;
var k,
m,
n,
o,
p,
q;
var r,
s,
t,
u;
for(var v=0,
w=f.length;v<w;v++){g=f[v];
h=g.getSizeHint();
j=g.getLayoutProperties();
r=g.getMarginTop();
s=g.getMarginRight();
t=g.getMarginBottom();
u=g.getMarginLeft();
k=j.left!=null?j.left:j.edge;
if(k&&typeof k===b){k=Math.round(parseFloat(k)*d/100);
}n=j.right!=null?j.right:j.edge;
if(n&&typeof n===b){n=Math.round(parseFloat(n)*d/100);
}m=j.top!=null?j.top:j.edge;
if(m&&typeof m===b){m=Math.round(parseFloat(m)*e/100);
}o=j.bottom!=null?j.bottom:j.edge;
if(o&&typeof o===b){o=Math.round(parseFloat(o)*e/100);
}if(k!=null&&n!=null){p=d-k-n-u-s;
if(p<h.minWidth){p=h.minWidth;
}else if(p>h.maxWidth){p=h.maxWidth;
}k+=u;
}else{p=j.width;
if(p==null){p=h.width;
}else{p=Math.round(parseFloat(p)*d/100);
if(p<h.minWidth){p=h.minWidth;
}else if(p>h.maxWidth){p=h.maxWidth;
}}
if(n!=null){k=d-p-n-s-u;
}else if(k==null){k=u;
}else{k+=u;
}}if(m!=null&&o!=null){q=e-m-o-r-t;
if(q<h.minHeight){q=h.minHeight;
}else if(q>h.maxHeight){q=h.maxHeight;
}m+=r;
}else{q=j.height;
if(q==null){q=h.height;
}else{q=Math.round(parseFloat(q)*e/100);
if(q<h.minHeight){q=h.minHeight;
}else if(q>h.maxHeight){q=h.maxHeight;
}}
if(o!=null){m=e-q-o-t-r;
}else if(m==null){m=r;
}else{m+=r;
}}g.renderLayout(k,
m,
p,
q);
}},
_computeSizeHint:function(){var x=0,
y=0;
var z=0,
A=0;
var p,
B;
var q,
C;
var f=this._getLayoutChildren();
var g,
j,
D;
var k,
m,
n,
o;
for(var v=0,
w=f.length;v<w;v++){g=f[v];
j=g.getLayoutProperties();
D=g.getSizeHint();
var E=g.getMarginLeft()+g.getMarginRight();
var F=g.getMarginTop()+g.getMarginBottom();
p=D.width+E;
B=D.minWidth+E;
k=j.left!=null?j.left:j.edge;
if(k&&typeof k===a){p+=k;
B+=k;
}n=j.right!=null?j.right:j.edge;
if(n&&typeof n===a){p+=n;
B+=n;
}x=Math.max(x,
p);
y=Math.max(y,
B);
q=D.height+F;
C=D.minHeight+F;
m=j.top!=null?j.top:j.edge;
if(m&&typeof m===a){q+=m;
C+=m;
}o=j.bottom!=null?j.bottom:j.edge;
if(o&&typeof o===a){q+=o;
C+=o;
}z=Math.max(z,
q);
A=Math.max(A,
C);
}return {width:x,
minWidth:y,
height:z,
minHeight:A};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,
{extend:qx.html.Element,
construct:function(b){arguments.callee.base.call(this);
if(b!=null){this.useElement(b);
}},
members:{useElement:function(b){if(this._element){throw new Error("Elements could not be replaced!");
}b.$$hash=this.$$hash;
this._element=b;
this._root=true;
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var a="dataModified",
b="String",
c="",
d="qx.event.type.DataEvent",
e="new",
f="remove",
g="stateModified",
h="feedreader.model.Article",
j="add",
k="__tv",
m="loaded",
n="loading",
o="change",
p="feedreader.model.Feed",
q="error";
qx.Class.define(p,
{extend:qx.core.Object,
construct:function(r,
s,
t){arguments.callee.base.call(this);
this.set({url:s,
title:r,
category:t||c});
this.__tv=[];
},
events:{"add":d,
"remove":d},
properties:{selected:{check:h,
nullable:true,
init:null,
event:o},
url:{check:b,
event:a},
title:{check:b,
event:a},
category:{check:b,
init:c,
event:a},
state:{check:[e,
n,
m,
q],
init:e,
event:g}},
members:{clearArticles:function(){var u=this.__tv;
for(var v=0,
w=u.length;v<w;v++){this.fireDataEvent(f,
u[v]);
u[v].dispose();
}u.length=0;
this.resetSelected();
},
removeArticles:function(x){qx.lang.Array.remove(this.__tv,
x);
this.fireDataEvent(f,
x);
},
addArticle:function(x){this.__tv.push(x);
this.fireDataEvent(j,
x);
},
getArticles:function(){return this.__tv;
}},
destruct:function(){this._disposeArray(k);
}});
})();
(function(){var a="qx.event.type.DataEvent",
b="feedreader.model.FeedList",
c="add",
d="__tw",
e="change",
f="feedreader.model.Feed",
g="remove";
qx.Class.define(b,
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__tw=[];
},
events:{"add":a,
"remove":a},
properties:{selected:{check:f,
nullable:true,
init:null,
event:e}},
members:{getFeeds:function(){return this.__tw;
},
addFeed:function(h){this.__tw.push(h);
this.fireDataEvent(c,
h);
if(!this.getSelected()){this.setSelected(h);
}},
removeFeed:function(h){qx.lang.Array.remove(this.__tw,
h);
this.fireDataEvent(g,
h);
if(this.getSelected()==h){this.setSelected(null);
}}},
destruct:function(){this._disposeArray(d);
}});
})();
(function(){var a="_applyLayoutChange",
b="left",
c="top",
d="Decorator",
e="Integer",
f="x",
g="y",
h="auto",
j="qx.ui.layout.Dock",
k="_applySort",
l="west",
m="north",
n="south",
o="__of",
p="center",
q="east",
r="Boolean",
s="bottom",
t="right",
u="__og";
qx.Class.define(j,
{extend:qx.ui.layout.Abstract,
construct:function(v,
w,
x,
y){arguments.callee.base.call(this);
if(v){this.setSpacingX(v);
}
if(w){this.setSpacingY(w);
}
if(x){this.setSeparatorX(x);
}
if(y){this.setSeparatorY(y);
}},
properties:{sort:{check:[h,
g,
f],
init:h,
apply:k},
separatorX:{check:d,
nullable:true,
apply:a},
separatorY:{check:d,
nullable:true,
apply:a},
connectSeparators:{check:r,
init:false,
apply:a},
spacingX:{check:e,
init:0,
apply:a},
spacingY:{check:e,
init:0,
apply:a}},
members:{__of:null,
__og:null,
verifyLayoutProperty:null,
_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__oh:{north:1,
south:2,
west:3,
east:4,
center:5},
__oi:{1:c,
2:s,
3:b,
4:t},
__oj:function(){var z=this._getLayoutChildren();
var A,
B;
var C=z.length;
var D=[];
var E=[];
var F=[];
var G=this.getSort()===g;
var H=this.getSort()===f;
for(var I=0;I<C;I++){A=z[I];
F=A.getLayoutProperties().edge;
if(F===p){if(B){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}B=A;
}else if(H||G){if(F===m||F===n){G?D.push(A):E.push(A);
}else if(F===l||F===q){G?E.push(A):D.push(A);
}}else{D.push(A);
}}var J=D.concat(E);
if(B){J.push(B);
}this.__of=J;
var K=[];
for(var I=0;I<C;I++){F=J[I].getLayoutProperties().edge;
K[I]=this.__oh[F]||5;
}this.__og=K;
delete this._invalidChildrenCache;
},
renderLayout:function(L,
M){if(this._invalidChildrenCache){this.__oj();
}var N=qx.ui.layout.Util;
var O=this.__of;
var K=this.__og;
var C=O.length;
var P,
A,
Q,
R,
S,
T,
U,
V,
W;
var X=[];
var Y=[];
var ba=this._getSeparatorWidths();
var v=this.getSpacingX();
var w=this.getSpacingY();
var bb=-v;
var bc=-w;
if(ba.x){bb-=ba.x+v;
}
if(ba.y){bc-=ba.y+w;
}
for(var I=0;I<C;I++){A=O[I];
R=A.getLayoutProperties();
Q=A.getSizeHint();
U=Q.width;
V=Q.height;
if(R.width!=null){U=Math.floor(L*parseFloat(R.width)/100);
if(U<Q.minWidth){U=Q.minWidth;
}else if(U>Q.maxWidth){U=Q.maxWidth;
}}
if(R.height!=null){V=Math.floor(M*parseFloat(R.height)/100);
if(V<Q.minHeight){V=Q.minHeight;
}else if(V>Q.maxHeight){V=Q.maxHeight;
}}X[I]=U;
Y[I]=V;
switch(K[I]){case 1:case 2:bc+=V+A.getMarginTop()+A.getMarginBottom()+w;
if(ba.y){bc+=ba.y+w;
}break;
case 3:case 4:bb+=U+A.getMarginLeft()+A.getMarginRight()+v;
if(ba.x){bb+=ba.x+v;
}break;
default:bb+=U+A.getMarginLeft()+A.getMarginRight()+v;
bc+=V+A.getMarginTop()+A.getMarginBottom()+w;
if(ba.x){bb+=ba.x+v;
}
if(ba.y){bc+=ba.y+w;
}}}if(bb!=L){P={};
T=bb<L;
for(var I=0;I<C;I++){A=O[I];
switch(K[I]){case 3:case 4:case 5:S=A.getLayoutProperties().flex;
if(S==null&&K[I]==5){S=1;
}
if(S>0){Q=A.getSizeHint();
P[I]={min:Q.minWidth,
value:X[I],
max:Q.maxWidth,
flex:S};
}}}var J=N.computeFlexOffsets(P,
L,
bb);
for(var I in J){W=J[I].offset;
X[I]+=W;
bb+=W;
}}if(bc!=M){P=[];
T=bc<M;
for(var I=0;I<C;I++){A=O[I];
switch(K[I]){case 1:case 2:case 5:S=A.getLayoutProperties().flex;
if(S==null&&K[I]==5){S=1;
}
if(S>0){Q=A.getSizeHint();
P[I]={min:Q.minHeight,
value:Y[I],
max:Q.maxHeight,
flex:S};
}}}var J=N.computeFlexOffsets(P,
M,
bc);
for(var I in J){W=J[I].offset;
Y[I]+=W;
bc+=W;
}}this._clearSeparators();
var x=this.getSeparatorX(),
y=this.getSeparatorY();
var bd=this.getConnectSeparators();
var be=0,
bf=0;
var bg,
bh,
U,
V,
bi,
F;
var bj,
bk,
bl,
bm;
var bn,
bo,
bp,
bq;
var br=this.__oi;
for(var I=0;I<C;I++){A=O[I];
F=K[I];
Q=A.getSizeHint();
bn=A.getMarginTop();
bo=A.getMarginBottom();
bp=A.getMarginLeft();
bq=A.getMarginRight();
switch(F){case 1:case 2:U=L-bp-bq;
if(U<Q.minWidth){U=Q.minWidth;
}else if(U>Q.maxWidth){U=Q.maxWidth;
}V=Y[I];
bh=be+N.computeVerticalAlignOffset(br[F],
V,
M,
bn,
bo);
bg=bf+N.computeHorizontalAlignOffset(A.getAlignX()||b,
U,
L,
bp,
bq);
if(ba.y){if(F==1){bk=be+V+bn+w+bo;
}else{bk=be+M-V-bn-w-bo-ba.y;
}bj=bg;
bl=L;
if(bd&&bj>0){bj-=v+bp;
bl+=(v)*2;
}else{bj-=bp;
}this._renderSeparator(y,
{left:bj,
top:bk,
width:bl,
height:ba.y});
}bi=V+bn+bo+w;
if(ba.y){bi+=ba.y+w;
}M-=bi;
if(F==1){be+=bi;
}break;
case 3:case 4:V=M-bn-bo;
if(V<Q.minHeight){V=Q.minHeight;
}else if(V>Q.maxHeight){V=Q.maxHeight;
}U=X[I];
bg=bf+N.computeHorizontalAlignOffset(br[F],
U,
L,
bp,
bq);
bh=be+N.computeVerticalAlignOffset(A.getAlignY()||c,
V,
M,
bn,
bo);
if(ba.x){if(F==3){bj=bf+U+bp+v+bq;
}else{bj=bf+L-U-bp-v-bq-ba.x;
}bk=bh;
bm=M;
if(bd&&bk>0){bk-=w+bn;
bm+=(w)*2;
}else{bk-=bn;
}this._renderSeparator(x,
{left:bj,
top:bk,
width:ba.x,
height:bm});
}bi=U+bp+bq+v;
if(ba.x){bi+=ba.x+v;
}L-=bi;
if(F==3){bf+=bi;
}break;
default:U=L-bp-bq;
V=M-bn-bo;
if(U<Q.minWidth){U=Q.minWidth;
}else if(U>Q.maxWidth){U=Q.maxWidth;
}if(V<Q.minHeight){V=Q.minHeight;
}else if(V>Q.maxHeight){V=Q.maxHeight;
}bg=bf+N.computeHorizontalAlignOffset(A.getAlignX()||b,
U,
L,
bp,
bq);
bh=be+N.computeVerticalAlignOffset(A.getAlignY()||c,
V,
M,
bn,
bo);
}A.renderLayout(bg,
bh,
U,
V);
}},
_getSeparatorWidths:function(){var x=this.getSeparatorX(),
y=this.getSeparatorY();
if(x||y){var bs=qx.theme.manager.Decoration.getInstance();
}
if(x){var bt=bs.resolve(x);
var bu=bt.getInsets();
var bv=bu.left+bu.right;
}
if(y){var bw=bs.resolve(y);
var bx=bw.getInsets();
var by=bx.top+bx.bottom;
}return {x:bv||0,
y:by||0};
},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__oj();
}var O=this.__of;
var K=this.__og;
var C=O.length;
var Q,
A;
var bz,
bA;
var bB=0,
bC=0;
var bD=0,
bE=0;
var bF=0,
bG=0;
var bH=0,
bI=0;
var ba=this._getSeparatorWidths();
var v=this.getSpacingX(),
w=this.getSpacingY();
var bJ=-v,
bK=-w;
if(ba.x){bJ-=ba.x+v;
}
if(ba.y){bK-=ba.y+w;
}for(var I=0;I<C;I++){A=O[I];
Q=A.getSizeHint();
bz=A.getMarginLeft()+A.getMarginRight();
bA=A.getMarginTop()+A.getMarginBottom();
switch(K[I]){case 1:case 2:bF=Math.max(bF,
Q.width+bB+bz);
bG=Math.max(bG,
Q.minWidth+bC+bz);
bH+=Q.height+bA;
bI+=Q.minHeight+bA;
bK+=w;
if(ba.y){bK+=ba.y+w;
}break;
case 3:case 4:bD=Math.max(bD,
Q.height+bH+bA);
bE=Math.max(bE,
Q.minHeight+bI+bA);
bB+=Q.width+bz;
bC+=Q.minWidth+bz;
bJ+=v;
if(ba.x){bJ+=ba.x+v;
}break;
default:bB+=Q.width+bz;
bC+=Q.minWidth+bz;
bH+=Q.height+bA;
bI+=Q.minHeight+bA;
bJ+=v;
if(ba.x){bJ+=ba.x+v;
}bK+=w;
if(ba.y){bK+=ba.y+w;
}}}var bL=Math.max(bC,
bG)+bJ;
var U=Math.max(bB,
bF)+bJ;
var bM=Math.max(bE,
bI)+bK;
var V=Math.max(bD,
bH)+bK;
return {minWidth:bL,
width:U,
minHeight:bM,
height:V};
}},
destruct:function(){this._disposeFields(u,
o);
}});
})();
(function(){var a="middle",
b="qx.ui.layout.Util",
c="left",
d="center",
e="top",
f="bottom",
g="right";
qx.Class.define(b,
{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,
computeFlexOffsets:function(h,
j,
k){var m,
n,
o,
p;
var q=j>k;
var r=Math.abs(j-k);
var s,
t;
var u={};
for(n in h){m=h[n];
u[n]={potential:q?m.max-m.value:m.value-m.min,
flex:q?m.flex:1/m.flex,
offset:0};
}while(r!=0){p=Infinity;
o=0;
for(n in u){m=u[n];
if(m.potential>0){o+=m.flex;
p=Math.min(p,
m.potential/m.flex);
}}if(o==0){break;
}p=Math.min(r,
p*o)/o;
s=0;
for(n in u){m=u[n];
if(m.potential>0){t=Math.min(r,
m.potential,
Math.ceil(p*m.flex));
s+=t-p*m.flex;
if(s>=1){s-=1;
t-=1;
}m.potential-=t;
if(q){m.offset+=t;
}else{m.offset-=t;
}r-=t;
}}}return u;
},
computeHorizontalAlignOffset:function(v,
w,
x,
y,
z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;
switch(v){case c:A=y;
break;
case g:A=x-w-z;
break;
case d:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,
x-w-z);
}break;
}return A;
},
computeVerticalAlignOffset:function(v,
B,
C,
D,
E){if(D==null){D=0;
}
if(E==null){E=0;
}var A=0;
switch(v){case e:A=D;
break;
case f:A=C-B-E;
break;
case a:A=Math.round((C-B)/2);
if(A<D){A=D;
}else if(A<E){A=Math.max(D,
C-B-E);
}break;
}return A;
},
collapseMargins:function(F){var G=0,
H=0;
for(var I=0,
J=arguments.length;I<J;I++){var A=arguments[I];
if(A<0){H=Math.min(H,
A);
}else if(A>0){G=Math.max(G,
A);
}}return G+H;
},
computeHorizontalGaps:function(K,
L,
M){if(L==null){L=0;
}var N=0;
if(M){N+=K[0].getMarginLeft();
for(var I=1,
J=K.length;I<J;I+=1){N+=this.collapseMargins(L,
K[I-1].getMarginRight(),
K[I].getMarginLeft());
}N+=K[J-1].getMarginRight();
}else{for(var I=1,
J=K.length;I<J;I+=1){N+=K[I].getMarginLeft()+K[I].getMarginRight();
}N+=(L*(J-1));
}return N;
},
computeVerticalGaps:function(K,
L,
M){if(L==null){L=0;
}var N=0;
if(M){N+=K[0].getMarginTop();
for(var I=1,
J=K.length;I<J;I+=1){N+=this.collapseMargins(L,
K[I-1].getMarginBottom(),
K[I].getMarginTop());
}N+=K[J-1].getMarginBottom();
}else{for(var I=1,
J=K.length;I<J;I+=1){N+=K[I].getMarginTop()+K[I].getMarginBottom();
}N+=(L*(J-1));
}return N;
},
computeHorizontalSeparatorGaps:function(K,
L,
O){var P=qx.theme.manager.Decoration.getInstance().resolve(O);
var Q=P.getInsets();
var w=Q.left+Q.right;
var N=0;
for(var I=0,
J=K.length;I<J;I++){var m=K[I];
N+=m.getMarginLeft()+m.getMarginRight();
}N+=(L+w+L)*(J-1);
return N;
},
computeVerticalSeparatorGaps:function(K,
L,
O){var P=qx.theme.manager.Decoration.getInstance().resolve(O);
var Q=P.getInsets();
var B=Q.top+Q.bottom;
var N=0;
for(var I=0,
J=K.length;I<J;I++){var m=K[I];
N+=m.getMarginTop()+m.getMarginBottom();
}N+=(L+B+L)*(J-1);
return N;
},
arrangeIdeals:function(R,
S,
T,
U,
V,
W){if(S<R||V<U){if(S<R&&V<U){S=R;
V=U;
}else if(S<R){V-=(R-S);
S=R;
if(V<U){V=U;
}}else if(V<U){S-=(U-V);
V=U;
if(S<R){S=R;
}}}
if(S>T||V>W){if(S>T&&V>W){S=T;
V=W;
}else if(S>T){V+=(S-T);
S=T;
if(V>W){V=W;
}}else if(V>W){S+=(V-W);
V=W;
if(S>T){S=T;
}}}return {begin:S,
end:V};
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,
{members:{setLayout:function(b){return this._setLayout(b);
},
getLayout:function(){return this._getLayout();
}},
statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var a="qx.event.type.Data",
b="qx.ui.container.Composite",
c="addChildWidget",
d="removeChildWidget";
qx.Class.define(b,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MChildrenHandling,
qx.ui.core.MLayoutHandling],
construct:function(e){arguments.callee.base.call(this);
if(e!=null){this._setLayout(e);
}},
events:{addChildWidget:a,
removeChildWidget:a},
members:{_afterAddChild:function(f){this.fireNonBubblingEvent(c,
qx.event.type.Data,
[f]);
},
_afterRemoveChild:function(f){this.fireNonBubblingEvent(d,
qx.event.type.Data,
[f]);
}},
defer:function(g,
h){qx.ui.core.MChildrenHandling.remap(h);
qx.ui.core.MLayoutHandling.remap(h);
}});
})();
(function(){var a="feedreader.view.Header",
b="Feed Reader",
c="app-header",
d="qx.version",
e="qooxdoo ";
qx.Class.define(a,
{extend:qx.ui.container.Composite,
construct:function(){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.HBox);
this.setAppearance(c);
var f=new qx.ui.basic.Label(b);
var g=new qx.ui.basic.Label(e+qx.core.Setting.get(d));
this.add(f);
this.add(new qx.ui.core.Spacer,
{flex:1});
this.add(g);
}});
})();
(function(){var a="_applyLayoutChange",
b="left",
c="center",
d="top",
e="Decorator",
f="middle",
g="baseline",
h="bottom",
j="__hd",
k="__he",
m="Boolean",
n="__hg",
o="right",
p="_applyReversed",
q="Integer",
r="qx.ui.layout.HBox";
qx.Class.define(r,
{extend:qx.ui.layout.Abstract,
construct:function(s,
t,
u){arguments.callee.base.call(this);
if(s){this.setSpacing(s);
}
if(t){this.setAlignX(t);
}
if(u){this.setSeparator(u);
}},
properties:{alignX:{check:[b,
c,
o],
init:b,
apply:a},
alignY:{check:[d,
f,
h,
g],
init:d,
apply:a},
spacing:{check:q,
init:0,
apply:a},
separator:{check:e,
nullable:true,
apply:a},
reversed:{check:m,
init:false,
apply:p}},
members:{__hd:null,
__he:null,
__hf:null,
__hg:null,
_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__hh:function(){var v=this._getLayoutChildren();
var w=v.length;
var x=false;
var y=this.__hd&&this.__hd.length!=w&&this.__he&&this.__hd;
var z;
var A=y?this.__hd:new Array(w);
var B=y?this.__he:new Array(w);
if(this.getReversed()){v=v.concat().reverse();
}for(var C=0;C<w;C++){z=v[C].getLayoutProperties();
if(z.width!=null){A[C]=parseFloat(z.width)/100;
}
if(z.flex!=null){B[C]=z.flex;
x=true;
}}if(!y){this.__hd=A;
this.__he=B;
}this.__hf=x;
this.__hg=v;
delete this._invalidChildrenCache;
},
verifyLayoutProperty:null,
renderLayout:function(D,
E){if(this._invalidChildrenCache){this.__hh();
}var v=this.__hg;
var w=v.length;
var F=qx.ui.layout.Util;
var s=this.getSpacing();
var u=this.getSeparator();
if(u){var G=F.computeHorizontalSeparatorGaps(v,
s,
u);
}else{var G=F.computeHorizontalGaps(v,
s,
true);
}var C,
H,
I,
J;
var A=[];
var K=G;
for(C=0;C<w;C+=1){J=this.__hd[C];
I=J!=null?Math.floor((D-G)*J):v[C].getSizeHint().width;
A.push(I);
K+=I;
}if(this.__hf&&K!=D){var L={};
var M,
N;
for(C=0;C<w;C+=1){M=this.__he[C];
if(M>0){Q=v[C].getSizeHint();
L[C]={min:Q.minWidth,
value:A[C],
max:Q.maxWidth,
flex:M};
}}var O=F.computeFlexOffsets(L,
D,
K);
for(C in O){N=O[C].offset;
A[C]+=N;
K+=N;
}}var P=v[0].getMarginLeft();
if(K<D&&this.getAlignX()!=b){P=D-K;
if(this.getAlignX()===c){P=Math.round(P/2);
}}var Q,
R,
S,
I,
T,
U,
V;
var s=this.getSpacing();
this._clearSeparators();
if(u){var W=qx.theme.manager.Decoration.getInstance().resolve(u).getInsets();
var X=W.left+W.right;
}for(C=0;C<w;C+=1){H=v[C];
I=A[C];
Q=H.getSizeHint();
U=H.getMarginTop();
V=H.getMarginBottom();
S=Math.max(Q.minHeight,
Math.min(E-U-V,
Q.maxHeight));
R=F.computeVerticalAlignOffset(H.getAlignY()||this.getAlignY(),
S,
E,
U,
V);
if(C>0){if(u){P+=T+s;
this._renderSeparator(u,
{left:P,
top:0,
width:X,
height:E});
P+=X+s+H.getMarginLeft();
}else{P+=F.collapseMargins(s,
T,
H.getMarginLeft());
}}H.renderLayout(P,
R,
I,
S);
P+=I;
T=H.getMarginRight();
}},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hh();
}var F=qx.ui.layout.Util;
var v=this.__hg;
var Y=0,
I=0;
var ba=0,
S=0;
var H,
Q,
bb;
for(var C=0,
bc=v.length;C<bc;C+=1){H=v[C];
Q=H.getSizeHint();
I+=Q.width;
Y+=this.__he[C]>0?Q.minWidth:Q.width;
bb=H.getMarginTop()+H.getMarginBottom();
if((Q.height+bb)>S){S=Q.height+bb;
}if((Q.minHeight+bb)>ba){ba=Q.minHeight+bb;
}}var s=this.getSpacing();
var u=this.getSeparator();
if(u){var G=F.computeHorizontalSeparatorGaps(v,
s,
u);
}else{var G=F.computeHorizontalGaps(v,
s,
true);
}return {minWidth:Y+G,
width:I+G,
minHeight:ba,
height:S};
}},
destruct:function(){this._disposeFields(j,
k,
n);
}});
})();
(function(){var a="qx.dynamicLocaleSwitch",
b="changeLocale",
c="on",
d="color",
f="qx.ui.basic.Label",
g="_applyRich",
h="_applyTextAlign",
i="Boolean",
j="_applyContent",
k="label",
l="textAlign",
m="center",
n="__gH",
o="A",
p="changeContent",
q="left",
r="String",
s="right";
qx.Class.define(f,
{extend:qx.ui.core.Widget,
construct:function(t){arguments.callee.base.call(this);
if(t!=null){this.setContent(t);
}
if(qx.core.Variant.isSet(a,
c)){qx.locale.Manager.getInstance().addListener(b,
this._onChangeLocale,
this);
}},
properties:{rich:{check:i,
init:false,
apply:g},
content:{check:r,
apply:j,
event:p,
nullable:true},
textAlign:{check:[q,
m,
s],
nullable:true,
themeable:true,
apply:h},
appearance:{refine:true,
init:k},
allowGrowX:{refine:true,
init:false},
allowGrowY:{refine:true,
init:false}},
members:{__gH:null,
__gI:null,
_getContentHint:function(){if(this.__gI){this.__gK();
delete this.__gI;
}return {width:this.__gJ.width,
height:this.__gJ.height};
},
_hasHeightForWidth:function(){return this.getRich();
},
_getContentHeightForWidth:function(u){if(!this.getRich()){return null;
}var v=this.__gH?this.__gH.getStyles():qx.bom.Font.getDefaultStyles();
return qx.bom.Label.getHtmlSize(this.getContent(),
v,
u).height;
},
_createContentElement:function(){return new qx.html.Label;
},
_applyTextAlign:function(w,
x){this.getContentElement().setStyle(l,
w);
},
_applyTextColor:function(w,
x){if(w){this.getContentElement().setStyle(d,
qx.theme.manager.Color.getInstance().resolve(w));
}else{this.getContentElement().removeStyle(d);
}},
__gJ:{width:0,
height:0},
_applyFont:function(w,
x){var v;
if(w){this.__gH=qx.theme.manager.Font.getInstance().resolve(w);
v=this.__gH.getStyles();
}else{this.__gH=null;
v=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(v);
this.__gI=true;
qx.ui.core.queue.Layout.add(this);
},
__gK:function(){var y=qx.bom.Label;
var z=this.getFont();
var v=z?this.__gH.getStyles():qx.bom.Font.getDefaultStyles();
var t=this.getContent()||o;
var A=this.getRich();
this.__gJ=A?y.getHtmlSize(t,
v):y.getTextSize(t,
v);
},
_applyRich:function(w){this.getContentElement().setRich(w);
this.__gI=true;
qx.ui.core.queue.Layout.add(this);
},
_onChangeLocale:qx.core.Variant.select(a,
{"on":function(B){var t=this.getContent();
if(t.translate){this.setContent(t.translate());
}},
"off":null}),
_applyContent:function(w){this.getContentElement().setContent(w);
this.__gI=true;
qx.ui.core.queue.Layout.add(this);
}},
destruct:function(){if(qx.core.Variant.isSet(a,
c)){qx.locale.Manager.getInstance().removeListener(b,
this._onChangeLocale,
this);
}this._disposeFields(n);
}});
})();
(function(){var a="qx.bom.client.Locale",
b="-",
c="";
qx.Bootstrap.define(a,
{statics:{LOCALE:"",
VARIANT:"",
__gL:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var e=c;
var f=d.indexOf(b);
if(f!=-1){e=d.substr(f+1);
d=d.substr(0,
f);
}this.LOCALE=d;
this.VARIANT=e;
}},
defer:function(g){g.__gL();
}});
})();
(function(){var a="qx.core.BaseString";
qx.Class.define(a,
{extend:String,
construct:function(b){{};
this._txt=b;
},
members:{toString:function(){return this._txt;
},
valueOf:function(){return this._txt;
},
toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},
base:function(c,
d){return qx.core.Object.prototype.base.apply(this,
arguments);
}},
defer:function(e){{};
}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,
{extend:qx.core.BaseString,
construct:function(b,
c,
d){arguments.callee.base.call(this,
b);
this.__gM=c;
this.__gN=d;
},
members:{translate:function(){return qx.locale.Manager.getInstance().translate(this.__gM,
this.__gN);
}}});
})();
(function(){var a="_",
b="",
c="qx.dynamicLocaleSwitch",
d="on",
e="_applyLocale",
f="__gP",
g="changeLocale",
h="C",
j="__gO",
k="qx.locale.Manager",
l="String",
m="singleton";
qx.Class.define(k,
{type:m,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__gO=window.qxtranslations||{};
this.__gP=window.qxlocales||{};
var n=qx.bom.client.Locale;
var o=n.LOCALE;
var p=n.VARIANT;
if(p!==b){o+=a+p;
}this.setLocale(o||this._defaultLocale);
},
statics:{tr:function(q,
r){var s=qx.lang.Array.fromArguments(arguments);
s.splice(0,
1);
return qx.locale.Manager.getInstance().translate(q,
s);
},
trn:function(t,
u,
v,
r){var s=qx.lang.Array.fromArguments(arguments);
s.splice(0,
3);
if(v!=1){return qx.locale.Manager.getInstance().translate(u,
s);
}else{return qx.locale.Manager.getInstance().translate(t,
s);
}},
trc:function(w,
q,
r){var s=qx.lang.Array.fromArguments(arguments);
s.splice(0,
2);
return qx.locale.Manager.getInstance().translate(q,
s);
},
marktr:function(q){return q;
}},
properties:{locale:{check:l,
nullable:true,
apply:e,
event:g}},
members:{_defaultLocale:h,
getLanguage:function(){return this._language;
},
getTerritory:function(){return this.getLocale().split(a)[1]||b;
},
getAvailableLocales:function(){var x=[];
for(var o in this.__gP){if(o!=this._defaultLocale){x.push(o);
}}return x;
},
__gQ:function(o){var y;
var z=o.indexOf(a);
if(z==-1){y=o;
}else{y=o.substring(0,
z);
}return y;
},
_applyLocale:function(A,
B){this._locale=A;
this._language=this.__gQ(A);
},
addTranslation:function(C,
D){var E=this.__gO;
if(E[C]){for(var F in D){E[C][F]=D[F];
}}else{E[C]=D;
}},
translate:function(q,
s,
o){var G;
var E=this.__gO;
if(!E){return q;
}
if(o){var y=this.__gQ(o);
}else{o=this._locale;
y=this._language;
}
if(!G&&E[o]){G=E[o][q];
}
if(!G&&E[y]){G=E[y][q];
}
if(!G&&E[this._defaultLocale]){G=E[this._defaultLocale][q];
}
if(!G){G=q;
}
if(s.length>0){var H=[];
for(var I=0;I<s.length;I++){var J=s[I];
if(J.translate){H[I]=J.translate();
}else{H[I]=J;
}}G=qx.lang.String.format(G,
H);
}
if(qx.core.Variant.isSet(c,
d)){G=new qx.locale.LocalizedString(G,
q,
s);
}return G;
},
localize:function(q,
s,
o){var G;
var E=this.__gP;
if(!E){return q;
}
if(o){var y=this.__gQ(o);
}else{o=this._locale;
y=this._language;
}
if(!G&&E[o]){G=E[o][q];
}
if(!G&&E[y]){G=E[y][q];
}
if(!G&&E[this._defaultLocale]){G=E[this._defaultLocale][q];
}
if(!G){G=q;
}
if(s.length>0){var H=[];
for(var I=0;I<s.length;I++){var J=s[I];
if(J.translate){H[I]=J.translate();
}else{H[I]=J;
}}G=qx.lang.String.format(G,
H);
}
if(qx.core.Variant.isSet(c,
d)){G=new qx.locale.LocalizedString(G,
q,
s);
}return G;
}},
destruct:function(){this._disposeFields(j,
f);
}});
})();
(function(){var a="qx.client",
b="gecko",
c="div",
d="",
e="hidden",
f="auto",
g="value",
h="text",
i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",
j="nowrap",
k="visible",
l="ellipsis",
m="normal",
n="label",
o="-1000px",
p="absolute",
q="px",
r="crop",
s="end",
t="100%",
u="qx.bom.Label",
v="opera",
w="block",
x="inherit",
y="none",
z="mshtml|opera";
qx.Class.define(u,
{statics:{__gY:{fontFamily:1,
fontSize:1,
fontWeight:1,
fontStyle:1,
lineHeight:1},
__ha:function(){var A=document.createElement(c);
var B=A.style;
B.width=B.height=f;
B.left=B.top=o;
B.visibility=e;
B.position=p;
B.overflow=k;
B.whiteSpace=j;
if(qx.core.Variant.isSet(a,
b)){var C=document.createElementNS(i,
n);
A.appendChild(C);
}document.body.insertBefore(A,
document.body.firstChild);
return this._textElement=A;
},
__hb:function(){var A=qx.bom.Element.create(c);
var B=A.style;
B.width=B.height=f;
B.left=B.top=o;
B.visibility=e;
B.position=p;
B.overflow=k;
B.whiteSpace=m;
document.body.insertBefore(A,
document.body.firstChild);
return this._htmlElement=A;
},
create:function(D,
E,
F){if(!F){F=window;
}
if(E){var A=F.document.createElement(c);
A.useHtml=true;
}else if(qx.core.Variant.isSet(a,
b)){var A=F.document.createElement(c);
var G=F.document.createElementNS(i,
n);
G.style.cursor=x;
G.style.overflow=e;
G.style.maxWidth=t;
G.setAttribute(r,
s);
A.appendChild(G);
}else{var A=F.document.createElement(c);
}
if(D){this.setContent(A,
D);
}return A;
},
getStyles:function(E){var H={};
if(E){H.whiteSpace=m;
}else if(qx.core.Variant.isSet(a,
b)){H.display=w;
}else{H.overflow=e;
H.whiteSpace=j;
H.textOverflow=l;
if(qx.core.Variant.isSet(a,
v)){H.OTextOverflow=l;
}}H.userSelect=y;
return H;
},
setContent:function(I,
J){J=J||d;
if(I.useHtml){I.innerHTML=J;
}else if(qx.core.Variant.isSet(a,
b)){I.firstChild.setAttribute(g,
J);
}else{qx.bom.element.Attribute.set(I,
h,
J);
}},
getContent:function(I){if(I.useHtml){return I.innerHTML;
}else if(qx.core.Variant.isSet(a,
b)){return I.firstChild.getAttribute(g)||d;
}else{return qx.bom.element.Attribute.get(I,
h);
}},
getHtmlSize:function(D,
H,
K){var I=this._htmlElement||this.__hb();
var L=this.__gY;
if(!H){H={};
}
for(var M in L){I.style[M]=H[M]||d;
}I.style.width=K!=null?K+q:f;
I.innerHTML=D;
return {width:I.clientWidth,
height:I.clientHeight};
},
getTextSize:function(N,
H){var I=this._textElement||this.__ha();
var L=this.__gY;
if(!H){H={};
}
for(var M in L){I.style[M]=H[M]||d;
}if(qx.core.Variant.isSet(a,
b)){I.firstChild.setAttribute(g,
N);
}else if(qx.core.Variant.isSet(a,
z)){I.innerText=N;
}else{I.textContent=N;
}var K=I.clientWidth;
var O=I.clientHeight;
if(qx.core.Variant.isSet(a,
b)){if(qx.bom.client.Platform.MAC){K++;
}}return {width:K,
height:O};
}}});
})();
(function(){var a="content",
b="qx.html.Label";
qx.Class.define(b,
{extend:qx.html.Element,
members:{_applyProperty:function(c,
d){arguments.callee.base.call(this,
c,
d);
if(c==a){qx.bom.Label.setContent(this._element,
d);
}},
_createDomElement:function(){var e=this.__hc;
var f=qx.bom.Label.create(this._content,
e);
var g=qx.bom.Label.getStyles(e);
for(var h in g){this.setStyle(h,
g[h]);
}return f;
},
setRich:function(d){if(this._element){throw new Error("The label mode cannot be modified after initial creation");
}d=!!d;
if(this.__hc==d){return;
}this.__hc=d;
return this;
},
setContent:function(d){this._setProperty(a,
d);
return this;
},
getContent:function(){return this._getProperty(a);
}}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,
{extend:qx.ui.core.LayoutItem,
construct:function(b,
c){arguments.callee.base.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},
members:{destroy:function(){}}});
})();
(function(){var a="both",
b="qx.ui.menu.Menu",
c="_applySpacing",
d="icon",
e="label",
f="changeShow",
g="Integer",
h="qx.ui.toolbar.ToolBar",
j="toolbar",
k="changeOpenMenu";
qx.Class.define(h,
{extend:qx.ui.core.Widget,
include:qx.ui.core.MChildrenHandling,
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},
properties:{appearance:{refine:true,
init:j},
openMenu:{check:b,
event:k,
nullable:true},
show:{init:a,
check:[a,
e,
d],
inheritable:true,
event:f},
spacing:{nullable:true,
check:g,
themeable:true,
apply:c}},
members:{_applySpacing:function(m,
n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},
addSpacer:function(){var p=new qx.ui.core.Spacer;
this._add(p,
{flex:1});
return p;
},
addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},
getMenuButtons:function(){var q=this.getChildren();
var r=[];
var s;
for(var t=0,
u=q.length;t<u;t++){s=q[t];
if(s instanceof qx.ui.toolbar.MenuButton){r.push(s);
}else if(s instanceof qx.ui.toolbar.Part){r.push.apply(r,
s.getMenuButtons());
}}return r;
}}});
})();
(function(){var a="reload",
b="Add feed",
c="removeFeed",
d="Open preferences window.",
e="Reload",
f="Reload the feeds. (%1)",
g="icon/22/actions/dialog-cancel.png",
h="icon/22/actions/view-refresh.png",
i=")",
j="Remove feed",
k="Preferences",
l="icon/22/actions/dialog-ok.png",
m="preferences",
n="icon/22/apps/preferences-theme.png",
o="icon/22/actions/help-about.png",
p="feedreader.view.ToolBar",
q="about",
r="Help",
s="addFeed",
t="(";
qx.Class.define(p,
{extend:qx.ui.toolbar.ToolBar,
construct:function(u){arguments.callee.base.call(this);
var v=new qx.ui.toolbar.Part;
this.add(v);
var w=new qx.ui.toolbar.Button(this.tr(b),
l);
w.setCommand(u.getCommand(s));
v.add(w);
var x=new qx.ui.toolbar.Button(this.tr(j),
g);
x.setCommand(u.getCommand(c));
v.add(x);
v.addSeparator();
var y=new qx.ui.toolbar.Button(this.tr(e),
h);
var z=u.getCommand(a);
y.setCommand(z);
y.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(f,
z.toString())));
v.add(y);
v.addSeparator();
var A=new qx.ui.toolbar.Button(this.tr(k),
n);
A.setCommand(u.getCommand(m));
A.setToolTip(new qx.ui.tooltip.ToolTip(this.tr(d)));
v.add(A);
this.addSpacer();
var B=new qx.ui.toolbar.Part;
this.add(B);
var C=new qx.ui.toolbar.Button(this.tr(r),
o);
var D=u.getCommand(q);
C.setCommand(D);
C.setToolTip(new qx.ui.tooltip.ToolTip(t+D.toString()+i));
B.add(C);
}});
})();
(function(){var a="toolbar-separator",
b="qx.ui.toolbar.Separator";
qx.Class.define(b,
{extend:qx.ui.core.Widget,
properties:{appearance:{refine:true,
init:a},
width:{refine:true,
init:0},
height:{refine:true,
init:0}}});
})();
(function(){var a="label",
b="icon",
c="Boolean",
d="left",
e="both",
f="String",
g="_applyRich",
h="_applyIcon",
i="changeGap",
j="_applyShow",
k="right",
l="_applyCenter",
m="_applyIconPosition",
n="qx.ui.basic.Atom",
o="top",
p="changeShow",
q="bottom",
r="_applyLabel",
s="Integer",
t="_applyGap",
u="atom";
qx.Class.define(n,
{extend:qx.ui.core.Widget,
construct:function(v,
w){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());
if(v!=null){this.setLabel(v);
}
if(w!=null){this.setIcon(w);
}},
properties:{appearance:{refine:true,
init:u},
label:{apply:r,
nullable:true,
dispose:true,
check:f},
rich:{check:c,
init:false,
apply:g},
icon:{check:f,
apply:h,
nullable:true,
themeable:true},
gap:{check:s,
nullable:false,
event:i,
apply:t,
themeable:true,
init:4},
show:{init:e,
check:[e,
a,
b],
themeable:true,
inheritable:true,
apply:j,
event:p},
iconPosition:{init:d,
check:[o,
k,
q,
d],
themeable:true,
apply:m},
center:{init:false,
check:c,
themeable:true,
apply:l}},
members:{_createChildControlImpl:function(x){var y;
switch(x){case a:y=new qx.ui.basic.Label(this.getLabel());
y.setAnonymous(true);
y.setRich(this.getRich());
this._add(y);
if(this.getLabel()==null||this.getShow()===b){y.exclude();
}break;
case b:y=new qx.ui.basic.Image(this.getIcon());
y.setAnonymous(true);
this._addAt(y,
0);
if(this.getIcon()==null||this.getShow()===a){y.exclude();
}break;
}return y||arguments.callee.base.call(this,
x);
},
_forwardStates:{focused:true,
hovered:true},
_handleLabel:function(){if(this.getLabel()==null||this.getShow()===b){this._excludeChildControl(a);
}else{this._showChildControl(a);
}},
_handleIcon:function(){if(this.getIcon()==null||this.getShow()===a){this._excludeChildControl(b);
}else{this._showChildControl(b);
}},
_applyLabel:function(z,
A){var v=this._getChildControl(a,
true);
if(v){v.setContent(z);
}this._handleLabel();
},
_applyRich:function(z,
A){var v=this._getChildControl(a,
true);
if(v){v.setRich(z);
}},
_applyIcon:function(z,
A){var w=this._getChildControl(b,
true);
if(w){w.setSource(z);
}this._handleIcon();
},
_applyGap:function(z,
A){this._getLayout().setGap(z);
},
_applyShow:function(z,
A){this._handleLabel();
this._handleIcon();
},
_applyIconPosition:function(z,
A){this._getLayout().setIconPosition(z);
},
_applyCenter:function(z,
A){this._getLayout().setCenter(z);
}}});
})();
(function(){var a="changeEnabled",
b="qx.ui.core.MExecutable",
c="qx.event.Command",
d="qx.event.type.Event",
f="changeCommand",
g="_applyCommand",
h="execute";
qx.Mixin.define(b,
{events:{"execute":d},
properties:{command:{check:c,
apply:g,
event:f,
nullable:true}},
members:{execute:function(){var i=this.getCommand();
if(i){i.execute(this);
}this.fireEvent(h);
},
_applyCommand:function(j,
k){if(k){k.removeListener(a,
this._onChangeEnabledCommand,
this);
}
if(j){j.addListener(a,
this._onChangeEnabledCommand,
this);
if(this.getEnabled()===false){j.setEnabled(false);
}else if(j.getEnabled()===false){this.setEnabled(false);
}}},
_onChangeEnabledCommand:function(l){this.setEnabled(l.getData());
}}});
})();
(function(){var a="qx.event.type.Data",
b="string",
c="qx.ui.form.IFormElement",
d="boolean";
qx.Interface.define(c,
{events:{"changeValue":a,
"changeName":a,
"changeEnabled":a},
members:{setEnabled:function(e){this.assertType(e,
d);
},
getEnabled:function(){},
setName:function(e){this.assertType(e,
b);
},
getName:function(){},
setValue:function(e){this.assertType(e,
b);
},
getValue:function(){}}});
})();
(function(){var a="pressed",
b="abandoned",
c="hovered",
d="Enter",
f="Space",
g="String",
h="dblclick",
i="qx.ui.form.Button",
j="mouseup",
k="mousedown",
l="changeName",
m="mouseover",
n="mouseout",
o="changeValue",
p="keydown",
q="button",
r="keyup";
qx.Class.define(i,
{extend:qx.ui.basic.Atom,
include:qx.ui.core.MExecutable,
implement:qx.ui.form.IFormElement,
construct:function(s,
t,
u){arguments.callee.base.call(this,
s,
t);
if(u!=null){this.setCommand(u);
}this.addListener(m,
this._onMouseOver);
this.addListener(n,
this._onMouseOut);
this.addListener(k,
this._onMouseDown);
this.addListener(j,
this._onMouseUp);
this.addListener(p,
this._onKeyDown);
this.addListener(r,
this._onKeyUp);
this.addListener(h,
this._onStopEvent);
},
properties:{name:{check:g,
nullable:true,
event:l},
value:{check:g,
nullable:true,
event:o},
appearance:{refine:true,
init:q},
focusable:{refine:true,
init:true}},
members:{press:function(){if(this.hasState(b)){return;
}this.addState(a);
},
release:function(){if(this.hasState(a)){this.removeState(a);
}},
reset:function(){this.removeState(a);
this.removeState(b);
this.removeState(c);
},
_onMouseOver:function(v){if(!this.isEnabled()||v.getTarget()!==this){return;
}
if(this.hasState(b)){this.removeState(b);
this.addState(a);
}this.addState(c);
},
_onMouseOut:function(v){if(!this.isEnabled()||v.getTarget()!==this){return;
}this.removeState(c);
if(this.hasState(a)){this.removeState(a);
this.addState(b);
}},
_onMouseDown:function(v){if(!v.isLeftPressed()){return;
}v.stopPropagation();
this.capture();
this.removeState(b);
this.addState(a);
},
_onMouseUp:function(v){this.releaseCapture();
var w=this.hasState(a);
var x=this.hasState(b);
if(w){this.removeState(a);
}
if(x){this.removeState(b);
}else{this.addState(c);
if(w){this.execute();
}}v.stopPropagation();
},
_onKeyDown:function(v){switch(v.getKeyIdentifier()){case d:case f:this.removeState(b);
this.addState(a);
v.stopPropagation();
}},
_onKeyUp:function(v){switch(v.getKeyIdentifier()){case d:case f:if(this.hasState(a)){this.removeState(b);
this.removeState(a);
this.execute();
v.stopPropagation();
}}}}});
})();
(function(){var a="pressed",
b="hovered",
c="changeVisibility",
d="qx.ui.menu.Menu",
f="Enter",
g="changeMenu",
h="qx.ui.form.MenuButton",
i="abandoned",
j="_applyMenu";
qx.Class.define(h,
{extend:qx.ui.form.Button,
construct:function(k,
l,
m){arguments.callee.base.call(this,
k,
l);
if(m!=null){this.setMenu(m);
}},
properties:{menu:{check:d,
nullable:true,
apply:j,
event:g}},
members:{_applyMenu:function(n,
o){if(o){o.removeListener(c,
this._onMenuChange,
this);
o.resetOpener();
}
if(n){n.addListener(c,
this._onMenuChange,
this);
n.setOpener(this);
}},
open:function(p){var m=this.getMenu();
if(m){qx.ui.menu.Manager.getInstance().hideAll();
m.open();
if(p){var q=m.getChildren()[0];
if(q){m.setSelectedButton(q);
}}}},
_onMenuChange:function(r){var m=this.getMenu();
if(m.isVisible()){this.addState(a);
}else{this.removeState(a);
}},
_onMouseDown:function(r){var m=this.getMenu();
if(m){if(!m.isVisible()){this.open();
}else{m.exclude();
}r.stopPropagation();
}},
_onMouseUp:function(r){r.stopPropagation();
},
_onMouseOver:function(r){this.addState(b);
},
_onMouseOut:function(r){this.removeState(b);
},
_onKeyDown:function(r){switch(r.getKeyIdentifier()){case f:this.removeState(i);
this.addState(a);
var m=this.getMenu();
if(m){if(!m.isVisible()){this.open();
}else{m.exclude();
}}r.stopPropagation();
}},
_onKeyUp:function(r){}},
destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var a="pressed",
b="hovered",
c="inherit",
d="keydown",
f="qx.ui.toolbar.MenuButton",
g="keyup",
h="toolbar-button";
qx.Class.define(f,
{extend:qx.ui.form.MenuButton,
construct:function(i,
j,
k){arguments.callee.base.call(this,
i,
j,
k);
this.removeListener(d,
this._onKeyDown);
this.removeListener(g,
this._onKeyUp);
},
properties:{appearance:{refine:true,
init:h},
show:{refine:true,
init:c},
focusable:{refine:true,
init:false}},
members:{getToolBar:function(){var l=this;
while(l){if(l instanceof qx.ui.toolbar.ToolBar){return l;
}l=l.getLayoutParent();
}return null;
},
_onMenuChange:function(m){var k=this.getMenu();
var n=this.getToolBar();
if(k.isVisible()){this.addState(a);
if(n){n.setOpenMenu(k);
}}else{this.removeState(a);
if(n&&n.getOpenMenu()==k){n.resetOpenMenu();
}}},
_onMouseOver:function(m){this.addState(b);
if(this.getMenu()){var n=this.getToolBar();
var o=n.getOpenMenu();
if(o&&o!=this.getMenu()){qx.ui.menu.Manager.getInstance().hideAll();
this.open();
}}}}});
})();
(function(){var a="bottom",
b="_applyLayoutChange",
c="top",
d="left",
e="right",
f="middle",
g="center",
h="qx.ui.layout.Atom",
j="Integer",
k="Boolean";
qx.Class.define(h,
{extend:qx.ui.layout.Abstract,
properties:{gap:{check:j,
init:4,
apply:b},
iconPosition:{check:[d,
c,
e,
a],
init:d,
apply:b},
center:{check:k,
init:false,
apply:b}},
members:{verifyLayoutProperty:null,
renderLayout:function(l,
m){var n=qx.ui.layout.Util;
var o=this.getIconPosition();
var p=this._getLayoutChildren();
var q=p.length;
var r,
s,
t,
u;
var v,
w;
var x=this.getGap();
var y=this.getCenter();
if(o===a||o===e){var z=q-1;
var A=-1;
var B=-1;
}else{var z=0;
var A=q;
var B=1;
}if(o==c||o==a){if(y){var C=0;
for(var D=z;D!=A;D+=B){u=p[D].getSizeHint().height;
if(u>0){C+=u;
if(D!=z){C+=x;
}}}s=Math.round((m-C)/2);
}else{s=0;
}
for(var D=z;D!=A;D+=B){v=p[D];
w=v.getSizeHint();
t=Math.min(w.maxWidth,
Math.max(l,
w.minWidth));
u=w.height;
r=n.computeHorizontalAlignOffset(g,
t,
l);
v.renderLayout(r,
s,
t,
u);
if(u>0){s+=u+x;
}}}else{var E=l;
var F=0;
var G=null;
var H=0;
for(var D=z;D!=A;D+=B){v=p[D];
t=v.getSizeHint().width;
if(t>0){if(!G&&v instanceof qx.ui.basic.Label){G=v;
}else{E-=t;
}F+=t;
H++;
}}
if(H>1){var I=(H-1)*x;
E-=I;
F+=I;
}
if(y&&F<l){r=Math.round((l-F)/2);
}else{r=0;
}
for(var D=z;D!=A;D+=B){v=p[D];
w=v.getSizeHint();
u=Math.min(w.maxHeight,
Math.max(m,
w.minHeight));
if(v===G){t=Math.max(w.minWidth,
Math.min(E,
w.width));
}else{t=w.width;
}s=n.computeVerticalAlignOffset(f,
w.height,
m);
v.renderLayout(r,
s,
t,
u);
if(t>0){r+=t+x;
}}}},
_computeSizeHint:function(){var p=this._getLayoutChildren();
var q=p.length;
var w,
J;
if(q===1){var w=p[0].getSizeHint();
J={width:w.width,
height:w.height,
minWidth:w.minWidth,
minHeight:w.minHeight};
}else{var K=0,
t=0;
var L=0,
u=0;
var o=this.getIconPosition();
var x=this.getGap();
if(o===c||o===a){var H=0;
for(var D=0;D<q;D++){w=p[D].getSizeHint();
t=Math.max(t,
w.width);
K=Math.max(K,
w.minWidth);
if(w.height>0){u+=w.height;
L+=w.minHeight;
H++;
}}
if(H>1){var I=(H-1)*x;
u+=I;
L+=I;
}}else{var H=0;
for(var D=0;D<q;D++){w=p[D].getSizeHint();
u=Math.max(u,
w.height);
L=Math.max(L,
w.minHeight);
if(w.width>0){t+=w.width;
K+=w.minWidth;
H++;
}}
if(H>1){var I=(H-1)*x;
t+=I;
K+=I;
}}J={minWidth:K,
width:t,
minHeight:L,
height:u};
}return J;
}}});
})();
(function(){var a="keypress",
b="mouseup",
c="mousedown",
d="interval",
f="keydown",
g="keyup",
h="Enter",
j="__kN",
k="__kL",
l="Up",
m="Escape",
n="blur",
o="qx.ui.menu.Manager",
p="Left",
q="Down",
r="Right",
s="__kM",
t="singleton",
u="Space";
qx.Class.define(o,
{type:t,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__kL=[];
var v=qx.core.Init.getApplication().getRoot();
v.addListener(c,
this._onMouseDown,
this,
true);
v.addListener(b,
this._onMouseUp,
this);
v.addListener(f,
this._onKeyUpDown,
this,
true);
v.addListener(g,
this._onKeyUpDown,
this,
true);
v.addListener(a,
this._onKeyPress,
this,
true);
qx.bom.Element.addListener(window,
n,
this.hideAll,
this);
this.__kM=new qx.event.Timer;
this.__kM.addListener(d,
this._onOpenInterval,
this);
this.__kN=new qx.event.Timer;
this.__kN.addListener(d,
this._onCloseInterval,
this);
},
members:{__kO:null,
__kP:null,
__kM:null,
__kN:null,
__kL:null,
_getChild:function(w,
x,
y,
z){var A=w.getChildren();
var B=A.length;
var C;
for(var D=x;D<B&&D>=0;D+=y){C=A[D];
if(C.isEnabled()&&!C.isAnonymous()){return C;
}}
if(z){D=D==B?0:B-1;
for(;D!=x;D+=y){C=A[D];
if(C.isEnabled()&&!C.isAnonymous()){return C;
}}}return null;
},
_isInMenu:function(E){while(E){if(E instanceof qx.ui.menu.Menu){return true;
}E=E.getLayoutParent();
}return false;
},
add:function(F){{};
var G=this.__kL;
G.push(F);
F.setZIndex(1e6+G.length);
},
remove:function(F){{};
var G=this.__kL;
if(G){qx.lang.Array.remove(G,
F);
}},
hideAll:function(){var G=this.__kL;
if(G){for(var D=G.length-1;D>=0;D--){G[D].exclude();
}}},
getActiveMenu:function(){var G=this.__kL;
return G.length>0?G[G.length-1]:null;
},
scheduleOpen:function(w){this.cancelClose(w);
if(w.isVisible()){if(this.__kO){this.cancelOpen(this.__kO);
}}else if(this.__kO!=w){this.__kO=w;
this.__kM.restartWith(w.getOpenInterval());
}},
scheduleClose:function(w){this.cancelOpen(w);
if(!w.isVisible()){if(this.__kP){this.cancelClose(this.__kP);
}}else if(this.__kP!=w){this.__kP=w;
this.__kN.restartWith(w.getCloseInterval());
}},
cancelOpen:function(w){if(this.__kO==w){this.__kM.stop();
this.__kO=null;
}},
cancelClose:function(w){if(this.__kP==w){this.__kN.stop();
this.__kP=null;
}},
_onOpenInterval:function(H){this.__kM.stop();
this.__kO.open();
this.__kO=null;
},
_onCloseInterval:function(H){this.__kN.stop();
this.__kP.exclude();
this.__kP=null;
},
_onMouseDown:function(H){var I=H.getTarget();
if(I.getMenu&&I.getMenu()&&I.getMenu().isVisible()){return;
}if(!this._isInMenu(I)){this.hideAll();
}},
_onMouseUp:function(H){var I=H.getTarget();
if(!(I instanceof qx.ui.menu.Menu)){this.hideAll();
}},
__kQ:{"Enter":1,
"Space":1},
__kR:{"Escape":1,
"Up":1,
"Down":1,
"Left":1,
"Right":1},
_onKeyUpDown:function(H){var w=this.getActiveMenu();
if(!w){return;
}var J=H.getKeyIdentifier();
if(this.__kR[J]||(this.__kQ[J]&&w.getSelectedButton())){H.stopPropagation();
}},
_onKeyPress:function(H){var w=this.getActiveMenu();
if(!w){return;
}var J=H.getKeyIdentifier();
var K=this.__kR[J];
var L=this.__kQ[J];
if(K){switch(J){case l:this._onKeyPressUp(w);
break;
case q:this._onKeyPressDown(w);
break;
case p:this._onKeyPressLeft(w);
break;
case r:this._onKeyPressRight(w);
break;
case m:this.hideAll();
break;
}H.stopPropagation();
}else if(L){var M=w.getSelectedButton();
if(M){switch(J){case h:this._onKeyPressEnter(w,
M,
H);
break;
case u:this._onKeyPressSpace(w,
M,
H);
break;
}H.stopPropagation();
}}},
_onKeyPressUp:function(w){var N=w.getSelectedButton();
var A=w.getChildren();
var x=N?w.indexOf(N)-1:A.length-1;
var O=this._getChild(w,
x,
-1,
true);
if(O){w.setSelectedButton(O);
}else{w.resetSelectedButton();
}},
_onKeyPressDown:function(w){var N=w.getSelectedButton();
var x=N?w.indexOf(N)+1:0;
var O=this._getChild(w,
x,
1,
true);
if(O){w.setSelectedButton(O);
}else{w.resetSelectedButton();
}},
_onKeyPressLeft:function(w){var P=w.getOpener();
if(!P){return;
}if(P instanceof qx.ui.menu.Button){var Q=P.getLayoutParent();
Q.resetOpenedButton();
Q.setSelectedButton(P);
}else if(P instanceof qx.ui.toolbar.MenuButton){var R=P.getToolBar().getMenuButtons();
var S=R.indexOf(P);
if(S===-1){return;
}var T=S==0?R[R.length-1]:R[S-1];
if(T!=P){T.open(true);
}}},
_onKeyPressRight:function(w){var N=w.getSelectedButton();
if(N){var U=N.getMenu();
if(U){w.setOpenedButton(N);
var V=this._getChild(U,
0,
1);
if(V){U.setSelectedButton(V);
}return;
}}else if(!w.getOpenedButton()){var V=this._getChild(w,
0,
1);
if(V){w.setSelectedButton(V);
if(V.getMenu()){w.setOpenedButton(V);
}return;
}}var P=w.getOpener();
if(P instanceof qx.ui.menu.Button&&N){while(P){P=P.getLayoutParent();
if(P instanceof qx.ui.menu.Menu){P=P.getOpener();
if(P instanceof qx.ui.toolbar.MenuButton){break;
}}else{break;
}}
if(!P){return;
}}if(P instanceof qx.ui.toolbar.MenuButton){var R=P.getToolBar().getMenuButtons();
var S=R.indexOf(P);
if(S===-1){return;
}var W=R[S+1];
if(!W){W=R[0];
}
if(W!=P){W.open(true);
}}},
_onKeyPressEnter:function(w,
M,
H){if(M.hasListener(a)){var X=H.clone();
X.setBubbles(false);
X.setTarget(M);
M.dispatchEvent(X);
}this.hideAll();
},
_onKeyPressSpace:function(w,
M,
H){if(M.hasListener(a)){var X=H.clone();
X.setBubbles(false);
X.setTarget(M);
M.dispatchEvent(X);
}}},
destruct:function(){var v=qx.core.Init.getApplication().getRoot();
if(v){v.removeListener(c,
this._onMouseDown,
this,
true);
v.removeListener(b,
this._onMouseUp,
this);
v.removeListener(f,
this._onKeyUpDown,
this,
true);
v.removeListener(g,
this._onKeyUpDown,
this,
true);
v.removeListener(a,
this._onKeyPress,
this,
true);
}this._disposeObjects(s,
j);
this._disposeArray(k);
}});
})();
(function(){var a="interval",
b="qx.event.Timer",
c="_applyInterval",
d="_applyEnabled",
f="Boolean",
g="qx.event.type.Event",
h="__gA",
i="Integer",
j="__gB";
qx.Class.define(b,
{extend:qx.core.Object,
construct:function(k){arguments.callee.base.call(this);
this.setEnabled(false);
if(k!=null){this.setInterval(k);
}this.__gA=qx.lang.Function.bind(this._oninterval,
this);
},
events:{"interval":g},
statics:{once:function(l,
m,
n){var o=new qx.event.Timer(n);
o.addListener(a,
function(p){l.call(m,
p);
o.dispose();
m=null;
},
m);
o.start();
return o;
}},
properties:{enabled:{init:true,
check:f,
apply:d},
interval:{check:i,
init:1000,
apply:c}},
members:{__gB:null,
_applyInterval:function(q,
r){if(this.getEnabled()){this.restart();
}},
_applyEnabled:function(q,
r){if(r){window.clearInterval(this.__gB);
this.__gB=null;
}else if(q){this.__gB=window.setInterval(this.__gA,
this.getInterval());
}},
start:function(){this.setEnabled(true);
},
startWith:function(k){this.setInterval(k);
this.start();
},
stop:function(){this.setEnabled(false);
},
restart:function(){this.stop();
this.start();
},
restartWith:function(k){this.stop();
this.startWith(k);
},
_oninterval:function(){if(this.getEnabled()){this.fireEvent(a);
}}},
destruct:function(){if(this.__gB){window.clearInterval(this.__gB);
}this._disposeFields(j,
h);
}});
})();
(function(){var a="Integer",
b="qx.ui.core.Widget",
c="visible",
d="selected",
f="qx.ui.menu.Menu",
g="_applyOpenInterval",
h="_applyOpenedButton",
i="_applyArrowColumnWidth",
j="_applyIconColumnWidth",
k="mouseover",
l="mouseout",
m="excluded",
n="_applySpacingX",
o="_applyCloseInterval",
p="_applySelectedButton",
q="menu",
r="_applySpacingY";
qx.Class.define(f,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MPlacement,
qx.ui.core.MChildrenHandling],
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
this.getApplicationRoot().add(this);
this.addListener(k,
this._onMouseOver);
this.addListener(l,
this._onMouseOut);
this.initVisibility();
},
properties:{appearance:{refine:true,
init:q},
allowGrowX:{refine:true,
init:false},
allowGrowY:{refine:true,
init:false},
visibility:{refine:true,
init:m},
keepFocus:{refine:true,
init:true},
keepActive:{refine:true,
init:true},
spacingX:{check:a,
apply:n,
init:0,
themeable:true},
spacingY:{check:a,
apply:r,
init:0,
themeable:true},
iconColumnWidth:{check:a,
init:0,
themeable:true,
apply:j},
arrowColumnWidth:{check:a,
init:0,
themeable:true,
apply:i},
selectedButton:{check:b,
nullable:true,
apply:p},
openedButton:{check:b,
nullable:true,
apply:h},
opener:{check:b,
nullable:true},
openInterval:{check:a,
themeable:true,
init:250,
apply:g},
closeInterval:{check:a,
themeable:true,
init:250,
apply:o}},
members:{__kS:null,
open:function(){this.placeToWidget(this.getOpener());
this.show();
},
addSeparator:function(){this.add(new qx.ui.menu.Separator);
},
getColumnSizes:function(){return this._getLayout().getColumnSizes();
},
_applyIconColumnWidth:function(s,
t){this._getLayout().setIconColumnWidth(s);
},
_applyArrowColumnWidth:function(s,
t){this._getLayout().setArrowColumnWidth(s);
},
_applySpacingX:function(s,
t){this._getLayout().setColumnSpacing(s);
},
_applySpacingY:function(s,
t){this._getLayout().setSpacing(s);
},
_applyVisibility:function(s,
t){arguments.callee.base.call(this,
s,
t);
var u=qx.ui.menu.Manager.getInstance();
if(s===c){u.add(this);
var v=this.getOpener();
var w=v.getLayoutParent();
if(w&&w instanceof qx.ui.menu.Menu){w.setOpenedButton(v);
}}else if(t===c){u.remove(this);
var v=this.getOpener();
var w=v.getLayoutParent();
if(w&&w instanceof qx.ui.menu.Menu&&w.getOpenedButton()==v){w.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}},
_applySelectedButton:function(s,
t){if(t){t.removeState(d);
}
if(s){s.addState(d);
}},
_applyOpenedButton:function(s,
t){if(t){t.getMenu().exclude();
}
if(s){s.getMenu().open();
}},
_onMouseOver:function(x){var u=qx.ui.menu.Manager.getInstance();
u.cancelClose(this);
var y=x.getTarget();
if(y.isEnabled()&&y instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(y);
var z=y.getMenu&&y.getMenu();
if(z){u.scheduleOpen(z);
this.__kS=z;
}else{var A=this.getOpenedButton();
if(A){u.scheduleClose(A.getMenu());
}
if(this.__kS){u.cancelOpen(this.__kS);
this.__kS=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},
_onMouseOut:function(x){var u=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,
x.getRelatedTarget())){var A=this.getOpenedButton();
A?this.setSelectedButton(A):this.resetSelectedButton();
if(A){u.cancelClose(A.getMenu());
}if(this.__kS){u.cancelOpen(this.__kS);
}}}}});
})();
(function(){var a="_applyLayoutChange",
b="top",
c="left",
d="middle",
e="Decorator",
f="__fx",
g="center",
h="baseline",
j="bottom",
k="__fv",
m="qx.ui.layout.VBox",
n="__fu",
o="_applyReversed",
p="Integer",
q="right",
r="Boolean";
qx.Class.define(m,
{extend:qx.ui.layout.Abstract,
construct:function(s,
t,
u){arguments.callee.base.call(this);
if(s){this.setSpacing(s);
}
if(t){this.setAlignY(t);
}
if(u){this.setSeparator(u);
}},
properties:{alignY:{check:[b,
d,
j],
init:b,
apply:a},
alignX:{check:[c,
g,
q,
h],
init:c,
apply:a},
spacing:{check:p,
init:0,
apply:a},
separator:{check:e,
nullable:true,
apply:a},
reversed:{check:r,
init:false,
apply:o}},
members:{__fu:null,
__fv:null,
__fw:null,
__fx:null,
_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__fy:function(){var v=this._getLayoutChildren();
var w=v.length;
var x=false;
var y=this.__fu&&this.__fu.length!=w&&this.__fv&&this.__fu;
var z;
var A=y?this.__fu:new Array(w);
var B=y?this.__fv:new Array(w);
if(this.getReversed()){v=v.concat().reverse();
}for(var C=0;C<w;C++){z=v[C].getLayoutProperties();
if(z.height!=null){A[C]=parseFloat(z.height)/100;
}
if(z.flex!=null){B[C]=z.flex;
x=true;
}}if(!y){this.__fu=A;
this.__fv=B;
}this.__fw=x;
this.__fx=v;
delete this._invalidChildrenCache;
},
verifyLayoutProperty:null,
renderLayout:function(D,
E){if(this._invalidChildrenCache){this.__fy();
}var v=this.__fx;
var w=v.length;
var F=qx.ui.layout.Util;
var s=this.getSpacing();
var u=this.getSeparator();
if(u){var G=F.computeVerticalSeparatorGaps(v,
s,
u);
}else{var G=F.computeVerticalGaps(v,
s,
true);
}var C,
H,
I,
J;
var A=[];
var K=G;
for(C=0;C<w;C+=1){J=this.__fu[C];
I=J!=null?Math.floor((E-G)*J):v[C].getSizeHint().height;
A.push(I);
K+=I;
}if(this.__fw&&K!=E){var L={};
var M,
N;
for(C=0;C<w;C+=1){M=this.__fv[C];
if(M>0){Q=v[C].getSizeHint();
L[C]={min:Q.minHeight,
value:A[C],
max:Q.maxHeight,
flex:M};
}}var O=F.computeFlexOffsets(L,
E,
K);
for(C in O){N=O[C].offset;
A[C]+=N;
K+=N;
}}var P=v[0].getMarginTop();
if(K<E&&this.getAlignY()!=b){P=E-K;
if(this.getAlignY()===d){P=Math.round(P/2);
}}var Q,
R,
S,
I,
T,
U,
V;
var s=this.getSpacing();
this._clearSeparators();
if(u){var W=qx.theme.manager.Decoration.getInstance().resolve(u).getInsets();
var X=W.top+W.bottom;
}for(C=0;C<w;C+=1){H=v[C];
I=A[C];
Q=H.getSizeHint();
U=H.getMarginLeft();
V=H.getMarginRight();
S=Math.max(Q.minWidth,
Math.min(D-U-V,
Q.maxWidth));
R=F.computeHorizontalAlignOffset(H.getAlignX()||this.getAlignX(),
S,
D,
U,
V);
if(C>0){if(u){P+=T+s;
this._renderSeparator(u,
{top:P,
left:0,
height:X,
width:D});
P+=X+s+H.getMarginTop();
}else{P+=F.collapseMargins(s,
T,
H.getMarginTop());
}}H.renderLayout(R,
P,
S,
I);
P+=I;
T=H.getMarginBottom();
}},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fy();
}var F=qx.ui.layout.Util;
var v=this.__fx;
var Y=0,
I=0;
var ba=0,
S=0;
var H,
Q,
bb;
for(var C=0,
bc=v.length;C<bc;C+=1){H=v[C];
Q=H.getSizeHint();
I+=Q.height;
Y+=this.__fv[C]>0?Q.minHeight:Q.height;
bb=H.getMarginLeft()+H.getMarginRight();
if((Q.width+bb)>S){S=Q.width+bb;
}if((Q.minWidth+bb)>ba){ba=Q.minWidth+bb;
}}var s=this.getSpacing();
var u=this.getSeparator();
if(u){var G=F.computeVerticalSeparatorGaps(v,
s,
u);
}else{var G=F.computeVerticalGaps(v,
s,
true);
}return {minHeight:Y+G,
height:I+G,
minWidth:ba,
width:S};
}},
destruct:function(){this._disposeFields(n,
k,
f);
}});
})();
(function(){var a="Integer",
b="_applyLayoutChange",
c="qx.ui.menu.Layout";
qx.Class.define(c,
{extend:qx.ui.layout.VBox,
properties:{columnSpacing:{check:a,
init:0,
apply:b},
spanColumn:{check:a,
init:1,
nullable:true,
apply:b},
iconColumnWidth:{check:a,
init:0,
themeable:true,
apply:b},
arrowColumnWidth:{check:a,
init:0,
themeable:true,
apply:b}},
members:{__kT:null,
_computeSizeHint:function(){var d=this._getLayoutChildren();
var e,
f,
g;
var h=this.getSpanColumn();
var j=this.__kT=[0,
0,
0,
0];
var k=this.getColumnSpacing();
var m=0;
var n=0;
for(var o=0,
p=d.length;o<p;o++){e=d[o];
if(e.isAnonymous()){continue;
}f=e.getChildrenSizes();
for(var q=0;q<f.length;q++){if(h!=null&&q==h&&f[h+1]==0){m=Math.max(m,
f[q]);
}else{j[q]=Math.max(j[q],
f[q]);
}}var r=d[o].getInsets();
n=Math.max(n,
r.left+r.right);
}if(h!=null&&j[h]+k+j[h+1]<m){j[h]=m-j[h+1]-k;
}if(m==0){g=k*2;
}else{g=k*3;
}if(j[0]==0){j[0]=this.getIconColumnWidth();
}if(j[3]==0){j[3]=this.getArrowColumnWidth();
}return {height:arguments.callee.base.call(this).height,
width:qx.lang.Array.sum(j)+n+g};
},
getColumnSizes:function(){return this.__kT||null;
}}});
})();
(function(){var a="menu-separator",
b="qx.ui.menu.Separator";
qx.Class.define(b,
{extend:qx.ui.core.Widget,
properties:{appearance:{refine:true,
init:a},
anonymous:{refine:true,
init:true}}});
})();
(function(){var a="icon",
b="label",
c="arrow",
d="shortcut",
f="submenu",
g="String",
h="qx.ui.menu.Menu",
i="qx.ui.menu.AbstractButton",
j="keypress",
k="_applyIcon",
l="mouseup",
m="abstract",
n="_applyLabel",
o="_applyMenu";
qx.Class.define(i,
{extend:qx.ui.core.Widget,
type:m,
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(l,
this._onMouseUp);
this.addListener(j,
this._onKeyPress);
},
properties:{label:{check:g,
apply:n,
nullable:true},
menu:{check:h,
apply:o,
nullable:true},
icon:{check:g,
apply:k,
themeable:true,
nullable:true}},
members:{_createChildControlImpl:function(p){var q;
switch(p){case a:q=new qx.ui.basic.Image;
q.setAnonymous(true);
this._add(q,
{column:0});
break;
case b:q=new qx.ui.basic.Label;
q.setAnonymous(true);
this._add(q,
{column:1});
break;
case d:q=new qx.ui.basic.Label;
q.setAnonymous(true);
this._add(q,
{column:2});
break;
case c:q=new qx.ui.basic.Image;
q.setAnonymous(true);
this._add(q,
{column:3});
break;
}return q||arguments.callee.base.call(this,
p);
},
_forwardStates:{selected:1},
getChildrenSizes:function(){var r=0,
s=0,
t=0,
u=0;
if(this._isChildControlVisible(a)){var v=this._getChildControl(a);
r=v.getMarginLeft()+v.getSizeHint().width+v.getMarginRight();
}
if(this._isChildControlVisible(b)){var w=this._getChildControl(b);
s=w.getMarginLeft()+w.getSizeHint().width+w.getMarginRight();
}
if(this._isChildControlVisible(d)){var x=this._getChildControl(d);
t=x.getMarginLeft()+x.getSizeHint().width+x.getMarginRight();
}
if(this._isChildControlVisible(c)){var y=this._getChildControl(c);
u=y.getMarginLeft()+y.getSizeHint().width+y.getMarginRight();
}return [r,
s,
t,
u];
},
_onMouseUp:function(z){},
_onKeyPress:function(z){},
_applyIcon:function(A,
B){if(A){this._showChildControl(a).setSource(A);
}else{this._excludeChildControl(a);
}},
_applyLabel:function(A,
B){if(A){this._showChildControl(b).setContent(A);
}else{this._excludeChildControl(b);
}},
_applyMenu:function(A,
B){if(B){B.resetOpener();
B.removeState(f);
}
if(A){this._showChildControl(c);
A.setOpener(this);
A.addState(f);
}else{this._excludeChildControl(c);
}}},
destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var a="middle",
b="qx.ui.menu.ButtonLayout",
c="left";
qx.Class.define(b,
{extend:qx.ui.layout.Abstract,
members:{verifyLayoutProperty:null,
renderLayout:function(d,
e){var f=this._getLayoutChildren();
var g;
var h;
var j=[];
for(var k=0,
m=f.length;k<m;k++){g=f[k];
h=g.getLayoutProperties().column;
j[h]=g;
}var n=f[0].getLayoutParent().getLayoutParent();
var o=n.getColumnSizes();
var p=n.getSpacingX();
var q=0,
r=0;
var s=qx.ui.layout.Util;
for(var k=0,
m=o.length;k<m;k++){g=j[k];
if(g){var t=g.getSizeHint();
var r=s.computeVerticalAlignOffset(g.getAlignY()||a,
t.height,
e,
0,
0);
var u=s.computeHorizontalAlignOffset(g.getAlignX()||c,
t.width,
o[k],
g.getMarginLeft(),
g.getMarginRight());
g.renderLayout(q+u,
r,
t.width,
t.height);
}q+=o[k]+p;
}},
_computeSizeHint:function(){var f=this._getLayoutChildren();
var v=0;
for(var k=0,
m=f.length;k<m;k++){v=Math.max(v,
f[k].getSizeHint().height);
}return {width:0,
height:v};
}}});
})();
(function(){var a="shortcut",
b="qx.ui.menu.Button",
c="changeCommand",
d="menu-button";
qx.Class.define(b,
{extend:qx.ui.menu.AbstractButton,
include:qx.ui.core.MExecutable,
construct:function(f,
g,
h,
i){arguments.callee.base.call(this);
this.addListener(c,
this._onChangeCommand,
this);
if(f!=null){this.setLabel(f);
}
if(g!=null){this.setIcon(g);
}
if(h!=null){this.setCommand(h);
}
if(i!=null){this.setMenu(i);
}},
properties:{appearance:{refine:true,
init:d}},
members:{_onChangeCommand:function(j){this._getChildControl(a).setContent(j.getData().toString());
},
_onMouseUp:function(j){if(j.isLeftPressed()){this.execute();
if(this.getMenu()){j.stopPropagation();
}}},
_onKeyPress:function(j){this.execute();
}}});
})();
(function(){var a="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(a,
{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},
hasChildren:function(){return this.getChildrenContainer().hasChildren();
},
add:function(b,
c){return this.getChildrenContainer().add(b,
c);
},
remove:function(b){return this.getChildrenContainer().remove(b);
},
removeAll:function(){return this.getChildrenContainer().removeAll();
},
indexOf:function(b){return this.getChildrenContainer().indexOf(b);
},
addAt:function(b,
d,
c){return this.getChildrenContainer().addAt(b,
d,
c);
},
addBefore:function(b,
e,
c){return this.getChildrenContainer().addBefore(b,
e,
c);
},
addAfter:function(b,
f,
c){return this.getChildrenContainer().addAfter(b,
f,
c);
},
removeAt:function(d){return this.getChildrenContainer().removeAt(d);
}}});
})();
(function(){var a="container",
b="handle",
c="both",
d="Integer",
e="middle",
f="qx.ui.toolbar.Part",
g="icon",
h="label",
j="changeShow",
k="_applySpacing",
m="toolbar/part";
qx.Class.define(f,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MRemoteChildrenHandling],
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(b);
},
properties:{appearance:{refine:true,
init:m},
show:{init:c,
check:[c,
h,
g],
inheritable:true,
event:j},
spacing:{nullable:true,
check:d,
themeable:true,
apply:k}},
members:{_createChildControlImpl:function(n){var o;
switch(n){case b:o=new qx.ui.basic.Image();
o.setAlignY(e);
this._add(o);
break;
case a:o=new qx.ui.toolbar.PartContainer;
this._add(o);
break;
}return o||arguments.callee.base.call(this,
n);
},
getChildrenContainer:function(){return this._getChildControl(a);
},
_applySpacing:function(p,
q){var r=this._getChildControl(a).getLayout();
p==null?r.resetSpacing():r.setSpacing(p);
},
addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},
getMenuButtons:function(){var s=this.getChildren();
var t=[];
var u;
for(var v=0,
w=s.length;v<w;v++){u=s[v];
if(u instanceof qx.ui.toolbar.MenuButton){t.push(u);
}}return t;
}}});
})();
(function(){var a="both",
b="toolbar/part/container",
c="icon",
d="changeShow",
e="qx.ui.toolbar.PartContainer",
f="label";
qx.Class.define(e,
{extend:qx.ui.container.Composite,
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},
properties:{appearance:{refine:true,
init:b},
show:{init:a,
check:[a,
f,
c],
inheritable:true,
event:d}}});
})();
(function(){var a="inherit",
b="toolbar-button",
c="keydown",
d="qx.ui.toolbar.Button",
e="keyup";
qx.Class.define(d,
{extend:qx.ui.form.Button,
construct:function(f,
g,
h){arguments.callee.base.call(this,
f,
g,
h);
this.removeListener(c,
this._onKeyDown);
this.removeListener(e,
this._onKeyUp);
},
properties:{appearance:{refine:true,
init:b},
show:{refine:true,
init:a},
focusable:{refine:true,
init:false}}});
})();
(function(){var a="qx.ui.popup.Popup",
b="visible",
c="excluded",
d="popup",
e="Boolean";
qx.Class.define(a,
{extend:qx.ui.container.Composite,
include:qx.ui.core.MPlacement,
construct:function(f){arguments.callee.base.call(this,
f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},
properties:{appearance:{refine:true,
init:d},
visibility:{refine:true,
init:c},
autoHide:{check:e,
init:true}},
members:{_applyVisibility:function(g,
h){arguments.callee.base.call(this,
g,
h);
var i=qx.ui.popup.Manager.getInstance();
g===b?i.add(this):i.remove(this);
}},
destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var a="atom",
b="Integer",
c="String",
d="qx.ui.tooltip.ToolTip",
e="_applyIcon",
f="tooltip",
g="_applyLabel";
qx.Class.define(d,
{extend:qx.ui.popup.Popup,
construct:function(h,
i){arguments.callee.base.call(this);
qx.ui.tooltip.Manager.getInstance();
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(a);
if(h!=null){this.setLabel(h);
}
if(i!=null){this.setIcon(i);
}},
properties:{appearance:{refine:true,
init:f},
showTimeout:{check:b,
init:1000,
themeable:true},
hideTimeout:{check:b,
init:4000,
themeable:true},
label:{check:c,
nullable:true,
apply:g},
icon:{check:c,
nullable:true,
apply:e,
themeable:true}},
members:{_createChildControlImpl:function(j){var k;
switch(j){case a:k=new qx.ui.basic.Atom;
this._add(k);
break;
}return k||arguments.callee.base.call(this,
j);
},
_applyIcon:function(l,
m){var n=this._getChildControl(a);
l==null?n.resetIcon:n.setIcon(l);
},
_applyLabel:function(l,
m){var n=this._getChildControl(a);
l==null?n.resetLabel():n.setLabel(l);
}}});
})();
(function(){var a="mousedown",
b="blur",
c="__hR",
d="singleton",
f="qx.ui.popup.Manager";
qx.Class.define(f,
{type:d,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__hR={};
var g=qx.core.Init.getApplication().getRoot();
g.addListener(a,
this.__hT,
this,
true);
qx.bom.Element.addListener(window,
b,
this.hideAll,
this);
},
members:{__hR:null,
add:function(h){{};
this.__hR[h.$$hash]=h;
this.__hS();
},
remove:function(h){{};
var i=this.__hR;
if(i){delete i[h.$$hash];
this.__hS();
}},
hideAll:function(){var i=this.__hR;
if(i){for(var j in i){i[j].exclude();
}}},
__hS:function(){var k=1e6;
var i=this.__hR;
for(var j in i){i[j].setZIndex(k++);
}},
__hT:function(l){var m=l.getTarget();
var i=this.__hR;
for(var j in i){var h=i[j];
if(!h.getAutoHide()||m==h||qx.ui.core.Widget.contains(h,
m)){continue;
}h.exclude();
}}},
destruct:function(){var g=qx.core.Init.getApplication().getRoot();
if(g){g.removeListener(a,
this.__hT,
this,
true);
}this._disposeMap(c);
}});
})();
(function(){var a="focusout",
b="interval",
c="mouseover",
d="mouseout",
f="focusin",
g="mousemove",
h="__hU",
i="qx.ui.tooltip.ToolTip",
j="__hW",
k="_applyCurrent",
l="qx.ui.tooltip.Manager",
m="singleton",
n="__hV";
qx.Class.define(l,
{type:m,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
var o=qx.core.Init.getApplication().getRoot();
o.addListener(c,
this.__ib,
this,
true);
o.addListener(f,
this.__id,
this,
true);
this.__hU=new qx.event.Timer();
this.__hU.addListener(b,
this.__hX,
this);
this.__hV=new qx.event.Timer();
this.__hV.addListener(b,
this.__hY,
this);
this.__hW={left:0,
top:0};
},
properties:{current:{check:i,
nullable:true,
apply:k}},
members:{__hW:null,
__hV:null,
__hU:null,
_applyCurrent:function(p,
q){if(q&&qx.ui.core.Widget.contains(q,
p)){return;
}if(q){q.exclude();
this.__hU.stop();
this.__hV.stop();
}var o=qx.core.Init.getApplication().getRoot();
if(p){this.__hU.startWith(p.getShowTimeout());
o.addListener(d,
this.__ic,
this,
true);
o.addListener(a,
this.__ie,
this,
true);
o.addListener(g,
this.__ia,
this,
true);
}else{o.removeListener(d,
this.__ic,
this,
true);
o.removeListener(a,
this.__ie,
this,
true);
o.removeListener(g,
this.__ia,
this,
true);
}},
__hX:function(r){var s=this.getCurrent();
if(s){this.__hV.startWith(s.getHideTimeout());
s.placeToPoint(this.__hW);
s.show();
}this.__hU.stop();
},
__hY:function(r){var s=this.getCurrent();
if(s){s.exclude();
}this.__hV.stop();
this.resetCurrent();
},
__ia:function(r){var t=this.__hW;
t.left=r.getDocumentLeft();
t.top=r.getDocumentTop();
},
__ib:function(r){var u=r.getTarget();
var v;
while(u!=null){var v=u.getToolTip();
if(v){break;
}u=u.getLayoutParent();
}if(v){this.setCurrent(v);
}},
__ic:function(r){var u=r.getTarget();
var w=r.getRelatedTarget();
var v=this.getCurrent();
if(v&&(w==v||qx.ui.core.Widget.contains(v,
w))){return;
}if(w&&u&&qx.ui.core.Widget.contains(u,
w)){return;
}if(v&&!w){this.setCurrent(null);
}else{this.resetCurrent();
}},
__id:function(r){var u=r.getTarget();
var v=u.getToolTip();
if(v!=null){this.setCurrent(v);
}},
__ie:function(r){var u=r.getTarget();
if(!u){return;
}var v=this.getCurrent();
if(v&&v==u.getToolTip()){this.setCurrent(null);
}}},
destruct:function(){var o=qx.core.Init.getApplication().getRoot();
if(o){o.addListener(c,
this.__ib,
this,
true);
o.addListener(f,
this.__id,
this,
true);
}this._disposeObjects(h,
n);
this._disposeFields(j);
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,
{extend:qx.ui.layout.Abstract,
members:{verifyLayoutProperty:null,
renderLayout:function(b,
c){var d=this._getLayoutChildren();
var e,
f,
g,
h;
for(var j=0,
k=d.length;j<k;j++){e=d[j];
f=e.getSizeHint();
g=b;
if(g<f.minWidth){g=f.minWidth;
}else if(g>f.maxWidth){g=f.maxWidth;
}h=c;
if(h<f.minHeight){h=f.minHeight;
}else if(h>f.maxHeight){h=f.maxHeight;
}e.renderLayout(0,
0,
g,
h);
}},
_computeSizeHint:function(){var d=this._getLayoutChildren();
var e,
f;
var m=0,
n=0;
for(var j=0,
k=d.length;j<k;j++){e=d[j];
f=e.getSizeHint();
m=Math.max(m,
f.width);
n=Math.max(n,
f.height);
}return {width:m,
height:n};
}}});
})();
(function(){var a="slider",
b="splitter",
c="active",
d="horizontal",
f="vertical",
g="mousedown",
h="mouseout",
i="height",
j="row-resize",
k="mousemove",
l="move",
m="maxHeight",
n="width",
o="_applyOrientation",
p="splitpane",
q="qx.ui.splitpane.Pane",
r="minHeight",
s="knob",
t="mouseup",
u="minWidth",
v="losecapture",
w="col-resize",
x="maxWidth";
qx.Class.define(q,
{extend:qx.ui.core.Widget,
construct:function(y){arguments.callee.base.call(this);
if(y){this.setOrientation(y);
}else{this.initOrientation();
}this.addListener(g,
this._onMouseDown);
this.addListener(t,
this._onMouseUp);
this.addListener(k,
this._onMouseMove);
this.addListener(h,
this._onMouseOut);
this.addListener(v,
this._onMouseUp);
},
properties:{appearance:{refine:true,
init:p},
orientation:{init:d,
check:[d,
f],
apply:o}},
members:{__lL:null,
__lM:null,
__lN:null,
__lO:null,
__lP:null,
__lQ:null,
__lR:null,
_createChildControlImpl:function(z){var A;
switch(z){case a:A=new qx.ui.splitpane.Slider(this);
A.exclude();
this._add(A,
{type:z});
break;
case b:A=new qx.ui.splitpane.Splitter(this);
this._add(A,
{type:z});
A.addListener(l,
this._onSplitterMove,
this);
break;
}return A||arguments.callee.base.call(this,
z);
},
_applyOrientation:function(B,
C){var D=this._getChildControl(a);
var E=this._getChildControl(b);
this.__lP=B===d;
var F=this._getLayout();
if(F){F.dispose();
}var G=B===f?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(G);
E.replaceState(C,
B);
E._getChildControl(s).replaceState(C,
B);
D.replaceState(C,
B);
},
add:function(H,
I){if(I==null){this._add(H);
}else{this._add(H,
{flex:I});
}},
remove:function(H){this._remove(H);
},
_onMouseDown:function(J){if(!J.isLeftPressed()){return;
}var E=this._getChildControl(b);
if(!E.hasState(c)){return;
}var K=E.getContainerLocation();
var L=this.getContentLocation();
this.__lL=this.__lP?J.getDocumentLeft()-K.left+L.left:J.getDocumentTop()-K.top+L.top;
var D=this._getChildControl(a);
var M=E.getBounds();
D.setUserBounds(M.left,
M.top,
M.width,
M.height);
D.setZIndex(E.getZIndex()+1);
D.show();
this.__lM=true;
this.capture();
},
_onMouseMove:function(J){this.__lN=J.getDocumentLeft();
this.__lO=J.getDocumentTop();
if(this.__lM){this.__lV();
var D=this._getChildControl(a);
var N=this.__lQ;
if(this.__lP){D.setDomLeft(N);
}else{D.setDomTop(N);
}}else{this.__lU();
}},
_onMouseOut:function(J){this.__lN=-1;
this.__lO=-1;
this.__lU();
},
_onMouseUp:function(J){if(!this.__lM){return;
}this.__lS();
var D=this._getChildControl(a);
D.exclude();
delete this.__lM;
this.releaseCapture();
this.__lU();
},
_onSplitterMove:function(){this.__lU();
},
__lS:function(){var O=this.__lQ;
var P=this.__lR;
if(O==null){return;
}var Q=this._getChildren();
var R=Q[2];
var S=Q[3];
var T=R.getLayoutProperties().flex;
var U=S.getLayoutProperties().flex;
if((T!=0)&&(U!=0)){R.setLayoutProperties({flex:O});
S.setLayoutProperties({flex:P});
}else{if(this.__lP){R.setWidth(O);
S.setWidth(P);
}else{R.setHeight(O);
S.setHeight(P);
}}},
__lT:function(){var E=this._getChildControl(b);
var M=E.getBounds();
var K=E.getContainerLocation();
var V=6;
if(!K){return;
}var W=this.__lN;
var X=M.width;
var N=K.left;
if(X<V){N-=Math.floor((V-X)/2);
X=V;
}
if(W<N||W>(N+X)){return false;
}var W=this.__lO;
var X=M.height;
var N=K.top;
if(X<V){N-=Math.floor((V-X)/2);
X=V;
}
if(W<N||W>(N+X)){return false;
}return true;
},
__lU:function(){var E=this._getChildControl(b);
var Y=this.getApplicationRoot();
if(this.__lM||this.__lT()){var ba=this.__lP?w:j;
this.setCursor(ba);
Y.setGlobalCursor(ba);
E.addState(c);
}else if(E.hasState(c)){this.resetCursor();
Y.resetGlobalCursor();
E.removeState(c);
}},
__lV:function(){if(this.__lP){var V=u,
X=n,
bb=x,
W=this.__lN;
}else{var V=r,
X=i,
bb=m,
W=this.__lO;
}var Q=this._getChildren();
var bc=Q[2].getSizeHint();
var bd=Q[3].getSizeHint();
var be=Q[2].getBounds()[X]+Q[3].getBounds()[X];
var O=W-this.__lL;
var P=be-O;
if(O<bc[V]){P-=bc[V]-O;
O=bc[V];
}else if(P<bd[V]){O-=bd[V]-P;
P=bd[V];
}if(O>bc[bb]){P+=O-bc[bb];
O=bc[bb];
}else if(P>bd[bb]){O+=P-bd[bb];
P=bd[bb];
}this.__lQ=O;
this.__lR=P;
}}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,
{extend:qx.ui.core.Widget,
properties:{allowShrinkX:{refine:true,
init:false},
allowShrinkY:{refine:true,
init:false}}});
})();
(function(){var a="center",
b="knob",
c="middle",
d="qx.ui.splitpane.Splitter",
e="vertical";
qx.Class.define(d,
{extend:qx.ui.core.Widget,
construct:function(f){arguments.callee.base.call(this);
if(f.getOrientation()==e){this._setLayout(new qx.ui.layout.HBox(0,
a));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,
c));
this._getLayout().setAlignX(a);
}this._createChildControl(b);
},
properties:{allowShrinkX:{refine:true,
init:false},
allowShrinkY:{refine:true,
init:false}},
members:{_createChildControlImpl:function(g){var h;
switch(g){case b:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||arguments.callee.base.call(this,
g);
}}});
})();
(function(){var a="slider",
b="splitter",
c="qx.ui.splitpane.VLayout";
qx.Class.define(c,
{extend:qx.ui.layout.Abstract,
members:{verifyLayoutProperty:null,
renderLayout:function(d,
e){var f=this._getLayoutChildren();
var g=f.length;
var h,
j;
var k,
l,
m,
n;
for(var o=0;o<g;o++){h=f[o];
j=h.getLayoutProperties().type;
if(j===b){l=h;
}else if(j===a){m=h;
}else if(!k){k=h;
}else{n=h;
}}
if(k&&n){var p=k.getLayoutProperties().flex;
var q=n.getLayoutProperties().flex;
if(p==null){p=1;
}
if(q==null){q=1;
}var r=k.getSizeHint();
var s=l.getSizeHint();
var t=n.getSizeHint();
var u=r.height;
var v=s.height;
var w=t.height;
if(p>0&&q>0){var x=p+q;
var y=e-v;
var u=Math.round((y/x)*p);
var w=y-u;
var z=qx.ui.layout.Util.arrangeIdeals(r.minHeight,
u,
r.maxHeight,
t.minHeight,
w,
t.maxHeight);
u=z.begin;
w=z.end;
}else if(p>0){u=e-v-w;
if(u<r.minHeight){u=r.minHeight;
}
if(u>r.maxHeight){u=r.maxHeight;
}}else if(q>0){w=e-u-v;
if(w<t.minHeight){w=t.minHeight;
}
if(w>t.maxHeight){w=t.maxHeight;
}}k.renderLayout(0,
0,
d,
u);
l.renderLayout(0,
u,
d,
v);
n.renderLayout(0,
u+v,
d,
w);
}else{l.renderLayout(0,
0,
0,
0);
if(k){k.renderLayout(0,
0,
d,
e);
}else if(n){n.renderLayout(0,
0,
d,
e);
}}},
_computeSizeHint:function(){var f=this._getLayoutChildren();
var g=f.length;
var h,
A,
B;
var C=0,
D=0,
E=0;
var F=0,
G=0,
H=0;
for(var o=0;o<g;o++){h=f[o];
B=h.getLayoutProperties();
if(B.type===a){continue;
}A=h.getSizeHint();
C+=A.minHeight;
D+=A.height;
E+=A.maxHeight;
if(A.minWidth>F){F=A.minWidth;
}
if(A.width>G){G=A.width;
}
if(A.maxWidth>H){H=A.maxWidth;
}}return {minHeight:C,
height:D,
maxHeight:E,
minWidth:F,
width:G,
maxWidth:H};
}}});
})();
(function(){var a="slider",
b="splitter",
c="qx.ui.splitpane.HLayout";
qx.Class.define(c,
{extend:qx.ui.layout.Abstract,
members:{verifyLayoutProperty:null,
renderLayout:function(d,
e){var f=this._getLayoutChildren();
var g=f.length;
var h,
j;
var k,
l,
m,
n;
for(var o=0;o<g;o++){h=f[o];
j=h.getLayoutProperties().type;
if(j===b){l=h;
}else if(j===a){m=h;
}else if(!k){k=h;
}else{n=h;
}}
if(k&&n){var p=k.getLayoutProperties().flex;
var q=n.getLayoutProperties().flex;
if(p==null){p=1;
}
if(q==null){q=1;
}var r=k.getSizeHint();
var s=l.getSizeHint();
var t=n.getSizeHint();
var u=r.width;
var v=s.width;
var w=t.width;
if(p>0&&q>0){var x=p+q;
var y=d-v;
var u=Math.round((y/x)*p);
var w=y-u;
var z=qx.ui.layout.Util.arrangeIdeals(r.minWidth,
u,
r.maxWidth,
t.minWidth,
w,
t.maxWidth);
u=z.begin;
w=z.end;
}else if(p>0){u=d-v-w;
if(u<r.minWidth){u=r.minWidth;
}
if(u>r.maxWidth){u=r.maxWidth;
}}else if(q>0){w=d-u-v;
if(w<t.minWidth){w=t.minWidth;
}
if(w>t.maxWidth){w=t.maxWidth;
}}k.renderLayout(0,
0,
u,
e);
l.renderLayout(u,
0,
v,
e);
n.renderLayout(u+v,
0,
w,
e);
}else{l.renderLayout(0,
0,
0,
0);
if(k){k.renderLayout(0,
0,
d,
e);
}else if(n){n.renderLayout(0,
0,
d,
e);
}}},
_computeSizeHint:function(){var f=this._getLayoutChildren();
var g=f.length;
var h,
A,
B;
var C=0,
D=0,
E=0;
var F=0,
G=0,
H=0;
for(var o=0;o<g;o++){h=f[o];
B=h.getLayoutProperties();
if(B.type===a){continue;
}A=h.getSizeHint();
C+=A.minWidth;
D+=A.width;
E+=A.maxWidth;
if(A.minHeight>F){F=A.minHeight;
}
if(A.height>G){G=A.height;
}
if(A.maxHeight>H){H=A.maxHeight;
}}return {minWidth:C,
width:D,
maxWidth:E,
minHeight:F,
height:G,
maxHeight:H};
}}});
})();
(function(){var a="scrollbar-y",
b="pane",
c="scrollbar-x",
d="auto",
f="corner",
g="on",
h="changeVisibility",
i="scroll",
j="_computeScrollbars",
k="off",
l="scrollY",
m="abstract",
n="update",
o="scrollX",
p="mousewheel",
q="scrollbarY",
r="scrollbarX",
s="horizontal",
t="scrollarea",
u="qx.ui.core.AbstractScrollArea",
v="vertical";
qx.Class.define(u,
{extend:qx.ui.core.Widget,
type:m,
construct:function(){arguments.callee.base.call(this);
var w=new qx.ui.layout.Grid();
w.setColumnFlex(0,
1);
w.setRowFlex(0,
1);
this._setLayout(w);
this.addListener(p,
this._onMouseWheel,
this);
},
properties:{appearance:{refine:true,
init:t},
width:{refine:true,
init:100},
height:{refine:true,
init:200},
scrollbarX:{check:[d,
g,
k],
init:d,
apply:j},
scrollbarY:{check:[d,
g,
k],
init:d,
apply:j},
scrollbar:{group:[r,
q]}},
members:{_createChildControlImpl:function(x){var y;
switch(x){case b:y=new qx.ui.core.ScrollPane();
y.addListener(n,
this._computeScrollbars,
this);
y.addListener(o,
this._onScrollPaneX,
this);
y.addListener(l,
this._onScrollPaneY,
this);
this._add(y,
{row:0,
column:0});
break;
case c:y=new qx.ui.core.ScrollBar(s);
y.exclude();
y.addListener(i,
this._onScrollBarX,
this);
y.addListener(h,
this._onChangeScrollbarXVisibility,
this);
this._add(y,
{row:1,
column:0});
break;
case a:y=new qx.ui.core.ScrollBar(v);
y.exclude();
y.addListener(i,
this._onScrollBarY,
this);
y.addListener(h,
this._onChangeScrollbarYVisibility,
this);
this._add(y,
{row:0,
column:1});
break;
case f:y=new qx.ui.core.Widget();
y.setWidth(0);
y.setHeight(0);
y.exclude();
this._add(y,
{row:1,
column:1});
break;
}return y||arguments.callee.base.call(this,
x);
},
getPaneSize:function(){return this._getChildControl(b).getBounds();
},
getItemTop:function(z){return this._getChildControl(b).getItemTop(z);
},
getItemBottom:function(z){return this._getChildControl(b).getItemBottom(z);
},
getItemLeft:function(z){return this._getChildControl(b).getItemLeft(z);
},
getItemRight:function(z){return this._getChildControl(b).getItemRight(z);
},
scrollToX:function(A){this._getChildControl(c).scrollTo(A);
},
scrollByX:function(A){this._getChildControl(c).scrollBy(A);
},
getScrollX:function(){var B=this._getChildControl(c,
true);
return B?B.getPosition():0;
},
scrollToY:function(A){this._getChildControl(a).scrollTo(A);
},
scrollByY:function(A){this._getChildControl(a).scrollBy(A);
},
getScrollY:function(){var B=this._getChildControl(a,
true);
return B?B.getPosition():0;
},
_onScrollBarX:function(C){this._getChildControl(b).scrollToX(C.getData());
},
_onScrollBarY:function(C){this._getChildControl(b).scrollToY(C.getData());
},
_onScrollPaneX:function(C){this.scrollToX(C.getData());
},
_onScrollPaneY:function(C){this.scrollToY(C.getData());
},
_onMouseWheel:function(C){var B=this._getChildControl(a,
true);
if(B){B.scrollBySteps(C.getWheelDelta());
}C.stop();
},
_onChangeScrollbarXVisibility:function(C){var D=this._isChildControlVisible(c);
var E=this._isChildControlVisible(a);
if(!D){this.scrollToX(0);
}D&&E?this._showChildControl(f):this._excludeChildControl(f);
},
_onChangeScrollbarYVisibility:function(C){var D=this._isChildControlVisible(c);
var E=this._isChildControlVisible(a);
if(!E){this.scrollToY(0);
}D&&E?this._showChildControl(f):this._excludeChildControl(f);
},
_computeScrollbars:function(){var F=this._getChildControl(b);
var G=F.getChild();
if(!G){this._excludeChildControl(c);
this._excludeChildControl(a);
return;
}var H=this.getInnerSize();
var I=F.getBounds();
var J=F.getScrollSize();
if(!I||!J){return;
}var K=this.getScrollbarX();
var L=this.getScrollbarY();
if(K===d&&L===d){var D=J.width>H.width;
var E=J.height>H.height;
if((D||E)&&!(D&&E)){if(D){E=J.height>I.height;
}else if(E){D=J.width>I.width;
}}}else{var D=K===g;
var E=L===g;
if(J.width>(D?I.width:H.width)&&K===d){D=true;
}
if(J.height>(D?I.height:H.height)&&L===d){E=true;
}}if(D){var M=this._getChildControl(c);
M.show();
M.setMaximum(Math.max(0,
J.width-I.width));
M.setKnobFactor(I.width/J.width);
}else{this._excludeChildControl(c);
}
if(E){var N=this._getChildControl(a);
N.show();
N.setMaximum(Math.max(0,
J.height-I.height));
N.setKnobFactor(I.height/J.height);
}else{this._excludeChildControl(a);
}}}});
})();
(function(){var a="Boolean",
b="changeSelection",
c="single",
d="qx.ui.core.MSelectionHandling",
f="mousedown",
g="losecapture",
h="one",
i="multi",
j="_applyQuickSelection",
k="mouseover",
l="_applySelectionMode",
m="_applyDragSelection",
n="mouseup",
o="mousemove",
p="removeItem",
q="__fz",
r="keypress",
s="addItem",
t="additive",
u="qx.event.type.Data";
qx.Mixin.define(d,
{construct:function(){var v=this.SELECTION_MANAGER;
var w=this.__fz=new v(this);
this.addListener(f,
w.handleMouseDown,
w);
this.addListener(n,
w.handleMouseUp,
w);
this.addListener(k,
w.handleMouseOver,
w);
this.addListener(o,
w.handleMouseMove,
w);
this.addListener(g,
w.handleLoseCapture,
w);
this.addListener(r,
w.handleKeyPress,
w);
this.addListener(s,
w.handleAddItem,
w);
this.addListener(p,
w.handleRemoveItem,
w);
w.addListener(b,
this._onSelectionChange,
this);
},
events:{"changeSelection":u},
properties:{selectionMode:{check:[c,
i,
t,
h],
init:c,
apply:l},
dragSelection:{check:a,
init:false,
apply:m},
quickSelection:{check:a,
init:false,
apply:j}},
members:{__fz:null,
selectAll:function(){this.__fz.selectAll();
},
select:function(x){this.__fz.selectItem(x);
},
isSelected:function(x){this.__fz.isSelected(x);
},
addToSelection:function(x){this.__fz.addItem(x);
},
removeFromSelection:function(x){this.__fz.removeItem(x);
},
selectRange:function(y,
z){this.__fz.selectItemRange(y,
z);
},
clearSelection:function(){this.__fz.clearSelection();
},
replaceSelection:function(A){this.__fz.replaceSelection(A);
},
getSelectedItem:function(){return this.__fz.getSelectedItem();
},
getSelection:function(){return this.__fz.getSelection();
},
getSortedSelection:function(){return this.__fz.getSortedSelection();
},
isSelectionEmpty:function(){return this.__fz.isSelectionEmpty();
},
getSelectionContext:function(){return this.__fz.getSelectionContext();
},
_getManager:function(){return this.__fz;
},
_applySelectionMode:function(B,
C){this.__fz.setMode(B);
},
_applyDragSelection:function(B,
C){this.__fz.setDrag(B);
},
_applyQuickSelection:function(B,
C){this.__fz.setQuick(B);
},
_onSelectionChange:function(D){this.fireDataEvent(b,
D.getData());
}},
destruct:function(){this._disposeObjects(q);
}});
})();
(function(){var a="Integer",
b="_applyContentPadding",
c="resetPaddingRight",
d="setPaddingBottom",
e="resetPaddingTop",
f="qx.ui.core.MContentPadding",
g="resetPaddingLeft",
h="setPaddingTop",
i="setPaddingRight",
j="resetPaddingBottom",
k="contentPaddingLeft",
l="setPaddingLeft",
m="contentPaddingTop",
n="shorthand",
o="contentPaddingRight",
p="contentPaddingBottom";
qx.Mixin.define(f,
{properties:{contentPaddingTop:{check:a,
init:0,
apply:b,
themeable:true},
contentPaddingRight:{check:a,
init:0,
apply:b,
themeable:true},
contentPaddingBottom:{check:a,
init:0,
apply:b,
themeable:true},
contentPaddingLeft:{check:a,
init:0,
apply:b,
themeable:true},
contentPadding:{group:[m,
o,
p,
k],
mode:n,
themeable:true}},
members:{__fA:{contentPaddingTop:h,
contentPaddingRight:i,
contentPaddingBottom:d,
contentPaddingLeft:l},
__fB:{contentPaddingTop:e,
contentPaddingRight:c,
contentPaddingBottom:j,
contentPaddingLeft:g},
_applyContentPadding:function(q,
r,
s){var t=this._getContentPaddingTarget();
if(q==null){var u=this.__fB[s];
t[u]();
}else{var v=this.__fA[s];
t[v](q);
}}}});
})();
(function(){var c="one",
d="single",
f="additive",
g="multi",
h="selected",
j="PageUp",
k="under",
m="Left",
n="lead",
o="Down",
p="Up",
q="Boolean",
r="PageDown",
s="anchor",
t="End",
u="Home",
v="Right",
w="right",
x="above",
y="left",
z="Escape",
A="__fT",
B="__fV",
C="A",
D="Space",
E="_applyMode",
F="interval",
G="changeSelection",
H="qx.event.type.Data",
I="quick",
J="key",
K="__fC",
L="__fU",
M="__fF",
N="click",
O="abstract",
P="drag",
Q="qx.ui.core.selection.Abstract";
qx.Class.define(Q,
{type:O,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__fC={};
},
events:{"changeSelection":H},
properties:{mode:{check:[d,
g,
f,
c],
init:d,
apply:E},
drag:{check:q,
init:false},
quick:{check:q,
init:false}},
members:{__fD:0,
__fE:0,
__fF:null,
__fG:null,
__fH:null,
__fI:null,
__fJ:null,
__fK:null,
__fL:null,
__fM:null,
__fN:null,
__fO:null,
__fP:null,
__fQ:null,
__fR:null,
__fS:null,
__fT:null,
__fC:null,
__fU:null,
__fV:null,
getSelectionContext:function(){return this.__fS;
},
selectAll:function(){this._selectAllItems();
this._fireChange();
},
selectItem:function(R){this._setSelectedItem(R);
var S=this.getMode();
if(S!==d&&S!==c){this._setLeadItem(R);
this._setAnchorItem(R);
}this._scrollItemIntoView(R);
this._fireChange();
},
addItem:function(R){var S=this.getMode();
if(S===d||S===c){this._setSelectedItem(R);
}else{if(!this._getAnchorItem()){this._setAnchorItem(R);
}this._setLeadItem(R);
this._addToSelection(R);
}this._scrollItemIntoView(R);
this._fireChange();
},
removeItem:function(R){this._removeFromSelection(R);
if(this.getMode()===c&&this.isSelectionEmpty()){var T=this._getFirstSelectable();
if(T){this.addItem(T);
}}
if(this._getLeadItem()==R){this._setLeadItem(null);
}
if(this._getAnchorItem()==R){this._setAnchorItem(null);
}this._fireChange();
},
selectItemRange:function(U,
V){this._selectItemRange(U,
V);
this._setAnchorItem(U);
this._setLeadItem(V);
this._scrollItemIntoView(V);
this._fireChange();
},
clearSelection:function(){if(this.getMode()==c){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},
replaceSelection:function(W){this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
for(var X=0,
Y=W.length;X<Y;X++){this._addToSelection(W[X]);
}if(Y>0){this._scrollItemIntoView(W[Y-1]);
}else if(this.getMode()==c){var ba=this._getFirstSelectable();
if(ba){this._addToSelection(ba);
}}this._fireChange();
},
getSelectedItem:function(){var S=this.getMode();
if(S===d||S===c){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},
getSelection:function(){return qx.lang.Object.getValues(this.__fC);
},
getSortedSelection:function(){var bb=this._getSelectables();
var bc=qx.lang.Object.getValues(this.__fC);
bc.sort(function(bd,
be){return bb.indexOf(bd)-bb.indexOf(be);
});
return bc;
},
isItemSelected:function(R){var bf=this._selectableToHashCode(R);
return !!this.__fC[bf];
},
isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__fC);
},
_setLeadItem:function(bg){var bh=this.__fT;
if(bh){this._styleSelectable(bh,
n,
false);
}
if(bg){this._styleSelectable(bg,
n,
true);
}this.__fT=bg;
},
_getLeadItem:function(){return this.__fT||null;
},
_setAnchorItem:function(bg){var bh=this.__fU;
if(bh){this._styleSelectable(bh,
s,
false);
}
if(bg){this._styleSelectable(bg,
s,
true);
}this.__fU=bg;
},
_getAnchorItem:function(){return this.__fU||null;
},
_isSelectable:function(R){throw new Error("Abstract method call: _isSelectable()");
},
_getSelectableFromTarget:function(bi){return this._isSelectable(bi)?bi:null;
},
_selectableToHashCode:function(R){throw new Error("Abstract method call: _selectableToHashCode()");
},
_styleSelectable:function(R,
bj,
bk){throw new Error("Abstract method call: _styleSelectable()");
},
_capture:function(){throw new Error("Abstract method call: _capture()");
},
_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},
_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},
_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},
_getSelectableLocationX:function(R){throw new Error("Abstract method call: _getSelectableLocationX()");
},
_getSelectableLocationY:function(R){throw new Error("Abstract method call: _getSelectableLocationY()");
},
_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},
_scrollBy:function(bl,
bm){throw new Error("Abstract method call: _scrollBy()");
},
_scrollItemIntoView:function(R){throw new Error("Abstract method call: _scrollItemIntoView()");
},
_getSelectables:function(){throw new Error("Abstract method call: _getSelectables()");
},
_getSelectableRange:function(bn,
bo){throw new Error("Abstract method call: _getSelectableRange()");
},
_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},
_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},
_getRelatedSelectable:function(R,
bp){throw new Error("Abstract method call: _getRelatedSelectable()");
},
_getPage:function(bq,
br){throw new Error("Abstract method call: _getPage()");
},
_applyMode:function(bg,
bh){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bg===c){var T=this._getFirstSelectable();
if(T){this._setSelectedItem(T);
this._scrollItemIntoView(T);
}}this._fireChange();
},
handleMouseOver:function(bs){if(!this.getQuick()){return;
}var S=this.getMode();
if(S!==c&&S!==d){return;
}var R=this._getSelectableFromTarget(bs.getTarget());
if(!R){return;
}this._setSelectedItem(R);
this._fireChange(I);
},
handleMouseDown:function(bs){var R=this._getSelectableFromTarget(bs.getTarget());
if(!R){return;
}var bt=bs.isCtrlPressed()||(qx.bom.client.Platform.MAC&&bs.isMetaPressed());
var bu=bs.isShiftPressed();
if(this.isItemSelected(R)&&!bu&&!bt){this.__fV=R;
return;
}else{this.__fV=null;
}this._scrollItemIntoView(R);
switch(this.getMode()){case d:case c:this._setSelectedItem(R);
break;
case f:this._setLeadItem(R);
this._setAnchorItem(R);
this._toggleInSelection(R);
break;
case g:this._setLeadItem(R);
if(bu){var bv=this._getAnchorItem();
if(!bv){this._setAnchorItem(bv=this.getFirstItem());
}this._selectItemRange(bv,
R,
bt);
}else if(bt){this._setAnchorItem(R);
this._toggleInSelection(R);
}else{this._setAnchorItem(R);
this._setSelectedItem(R);
}break;
}var S=this.getMode();
if(this.getDrag()&&S!==d&&S!==c&&!bu&&!bt){this.__fJ=this._getLocation();
this.__fG=this._getScroll();
this.__fK=bs.getDocumentLeft()+this.__fG.left;
this.__fL=bs.getDocumentTop()+this.__fG.top;
this.__fM=true;
this._capture();
}this._fireChange(N);
},
handleMouseUp:function(bs){var bt=bs.isCtrlPressed()||(qx.bom.client.Platform.MAC&&bs.isMetaPressed());
var bu=bs.isShiftPressed();
if(!bt&&!bu&&this.__fV){var R=this._getSelectableFromTarget(bs.getTarget());
if(!R||!this.isItemSelected(R)){return;
}var S=this.getMode();
if(S===f){this._removeFromSelection(R);
}else{this._setSelectedItem(R);
if(this.getMode()===g){this._setLeadItem(R);
this._setAnchorItem(R);
}}}this._cleanup();
},
handleLoseCapture:function(bs){this._cleanup();
},
handleMouseMove:function(bs){if(!this.__fM){return;
}this.__fN=bs.getDocumentLeft();
this.__fO=bs.getDocumentTop();
var bw=this.__fN+this.__fG.left;
if(bw>this.__fK){this.__fP=1;
}else if(bw<this.__fK){this.__fP=-1;
}else{this.__fP=0;
}var bx=this.__fO+this.__fG.top;
if(bx>this.__fL){this.__fQ=1;
}else if(bx<this.__fL){this.__fQ=-1;
}else{this.__fQ=0;
}var by=this.__fJ;
if(this.__fN<by.left){this.__fD=this.__fN-by.left;
}else if(this.__fN>by.right){this.__fD=this.__fN-by.right;
}else{this.__fD=0;
}
if(this.__fO<by.top){this.__fE=this.__fO-by.top;
}else if(this.__fO>by.bottom){this.__fE=this.__fO-by.bottom;
}else{this.__fE=0;
}if(!this.__fF){this.__fF=new qx.event.Timer(100);
this.__fF.addListener(F,
this._onInterval,
this);
}this.__fF.start();
this._autoSelect();
},
handleAddItem:function(bz){var R=bz.getData();
if(this.getMode()===c&&this.isSelectionEmpty()){this.addItem(R);
}},
handleRemoveItem:function(bz){this.removeItem(bz.getData());
},
_cleanup:function(){if(!this.getDrag()&&this.__fM){return;
}delete this.__fM;
delete this.__fH;
delete this.__fI;
this._releaseCapture();
if(this.__fF){this.__fF.stop();
}},
_onInterval:function(bz){this._scrollBy(this.__fD,
this.__fE);
this.__fG=this._getScroll();
this._autoSelect();
},
_autoSelect:function(){var bA=this._getDimension();
var bB=Math.max(0,
Math.min(this.__fN-this.__fJ.left,
bA.width))+this.__fG.left;
var bC=Math.max(0,
Math.min(this.__fO-this.__fJ.top,
bA.height))+this.__fG.top;
if(this.__fH===bB&&this.__fI===bC){return;
}this.__fH=bB;
this.__fI=bC;
var bv=this._getAnchorItem();
var bD=this.__fP,
bE=bv;
var bF,
bG,
bH=0;
while(bD!==0){bF=bD>0?this._getRelatedSelectable(bE,
w):this._getRelatedSelectable(bE,
y);
if(bF){bG=this._getSelectableLocationX(bF);
if((bD>0&&bG.left<=bB)||(bD<0&&bG.right>=bB)){bE=bF;
bH++;
continue;
}}break;
}var bI=this.__fQ,
bJ=bv;
var bK,
bL,
bM=0;
while(bI!==0){bK=bI>0?this._getRelatedSelectable(bJ,
k):this._getRelatedSelectable(bJ,
x);
if(bK){bL=this._getSelectableLocationY(bK);
if((bI>0&&bL.top<=bC)||(bI<0&&bL.bottom>=bC)){bJ=bK;
bM++;
continue;
}}break;
}var bq=bH>bM?bE:bJ;
var S=this.getMode();
if(S===g){this._selectItemRange(bv,
bq);
}else if(S===f){if(this.isItemSelected(bv)){this._selectItemRange(bv,
bq,
true);
}else{this._deselectItemRange(bv,
bq);
}this._setAnchorItem(bq);
}this._fireChange(P);
},
__fW:{Home:1,
Down:1,
Right:1,
PageDown:1,
End:1,
Up:1,
Left:1,
PageUp:1},
handleKeyPress:function(bs){var bN,
bO;
var bP=bs.getKeyIdentifier();
var S=this.getMode();
var bt=bs.isCtrlPressed()||(qx.bom.client.Platform.MAC&&bs.isMetaPressed());
var bu=bs.isShiftPressed();
var bQ=false;
if(bP===C&&bt){if(S!==d&&S!==c){this._selectAllItems();
bQ=true;
}}else if(bP===z){if(S!==d&&S!==c){this._clearSelection();
bQ=true;
}}else if(bP===D){var bq=this._getLeadItem();
if(bq&&!bu){if(bt||S===f){this._toggleInSelection(bq);
}else{this._setSelectedItem(bq);
}bQ=true;
}}else if(this.__fW[bP]){bQ=true;
if(S===d||S==c){bN=this._getSelectedItem();
}else{bN=this._getLeadItem();
}var T=this._getFirstSelectable();
var bR=this._getLastSelectable();
if(bN){switch(bP){case u:bO=T;
break;
case t:bO=bR;
break;
case p:bO=this._getRelatedSelectable(bN,
x);
break;
case o:bO=this._getRelatedSelectable(bN,
k);
break;
case m:bO=this._getRelatedSelectable(bN,
y);
break;
case v:bO=this._getRelatedSelectable(bN,
w);
break;
case j:bO=this._getPage(bN,
true);
break;
case r:bO=this._getPage(bN,
false);
break;
}}else{switch(bP){case u:case o:case v:case r:bO=T;
break;
case t:case p:case m:case j:bO=bR;
break;
}}if(bO){switch(S){case d:case c:this._setSelectedItem(bO);
break;
case f:this._setLeadItem(bO);
break;
case g:if(bu){var bv=this._getAnchorItem();
if(!bv){this._setAnchorItem(bv=this._getFirstSelectable());
}this._setLeadItem(bO);
this._selectItemRange(bv,
bO,
bt);
}else{this._setAnchorItem(bO);
this._setLeadItem(bO);
if(!bt){this._setSelectedItem(bO);
}}break;
}this._scrollItemIntoView(bO);
}}
if(bQ){bs.stop();
this._fireChange(J);
}},
_selectAllItems:function(){var bS=this._getSelectables();
for(var X=0,
Y=bS.length;X<Y;X++){this._addToSelection(bS[X]);
}},
_clearSelection:function(){var bT=this.__fC;
for(var bf in bT){this._removeFromSelection(bT[bf]);
}},
_selectItemRange:function(bn,
bo,
bU){var bS=this._getSelectableRange(bn,
bo);
if(!bU){var bV=this.__fC;
var bW=this.__fX(bS);
for(var bf in bV){if(!bW[bf]){this._removeFromSelection(bV[bf]);
}}}for(var X=0,
Y=bS.length;X<Y;X++){this._addToSelection(bS[X]);
}},
_deselectItemRange:function(bn,
bo){var bS=this._getSelectableRange(bn,
bo);
for(var X=0,
Y=bS.length;X<Y;X++){this._removeFromSelection(bS[X]);
}},
__fX:function(bS){var bW={};
var R;
for(var X=0,
Y=bS.length;X<Y;X++){R=bS[X];
bW[this._selectableToHashCode(R)]=R;
}return bW;
},
_getSelectedItem:function(){for(var bf in this.__fC){return this.__fC[bf];
}return null;
},
_setSelectedItem:function(R){this._clearSelection();
this._addToSelection(R);
},
_addToSelection:function(R){var bf=this._selectableToHashCode(R);
if(!this.__fC[bf]){this.__fC[bf]=R;
this._styleSelectable(R,
h,
true);
this.__fR=true;
}},
_toggleInSelection:function(R){var bf=this._selectableToHashCode(R);
if(!this.__fC[bf]){this.__fC[bf]=R;
this._styleSelectable(R,
h,
true);
}else{delete this.__fC[bf];
this._styleSelectable(R,
h,
false);
}this.__fR=true;
},
_removeFromSelection:function(R){var bf=this._selectableToHashCode(R);
if(this.__fC[bf]){delete this.__fC[bf];
this._styleSelectable(R,
h,
false);
this.__fR=true;
}},
_fireChange:function(bX){if(this.__fR){this.__fS=bX||null;
this.fireDataEvent(G,
this.getSelection());
delete this.__fR;
}}},
destruct:function(){this._disposeObjects(M);
this._disposeFields(K,
B,
L,
A);
}});
})();
(function(){var a="vertical",
b="under",
c="_widget",
d="above",
e="qx.ui.core.selection.Widget",
f="left",
g="right";
qx.Class.define(e,
{extend:qx.ui.core.selection.Abstract,
construct:function(h){arguments.callee.base.call(this);
this._widget=h;
},
members:{_isSelectable:function(j){return j.isEnabled()&&j.getLayoutParent()===this._widget;
},
_selectableToHashCode:function(j){return j.$$hash;
},
_styleSelectable:function(j,
k,
m){m?j.addState(k):j.removeState(k);
},
_capture:function(){this._widget.capture();
},
_releaseCapture:function(){this._widget.releaseCapture();
},
_getLocation:function(){var n=this._widget.getContentElement().getDomElement();
return n?qx.bom.element.Location.get(n):null;
},
_getDimension:function(){return this._widget.getInnerSize();
},
_getSelectableLocationX:function(j){var o=j.getBounds();
if(o){return {left:o.left,
right:o.left+o.width};
}},
_getSelectableLocationY:function(j){var o=j.getBounds();
if(o){return {top:o.top,
bottom:o.top+o.height};
}},
_getScroll:function(){return {left:0,
top:0};
},
_scrollBy:function(p,
q){},
_scrollItemIntoView:function(j){this._widget.scrollChildIntoView(j);
},
_getSelectables:function(){var r=this._widget.getChildren();
var s=[];
var t;
for(var u=0,
v=r.length;u<v;u++){t=r[u];
if(t.isEnabled()){s.push(t);
}}return s;
},
_getSelectableRange:function(w,
x){if(w===x){return [w];
}var r=this._widget.getChildren();
var s=[];
var y=false;
var t;
for(var u=0,
v=r.length;u<v;u++){t=r[u];
if(t===w||t===x){if(y){s.push(t);
break;
}else{y=true;
}}
if(y&&t.isEnabled()){s.push(t);
}}return s;
},
_getFirstSelectable:function(){var r=this._widget.getChildren();
for(var u=0,
v=r.length;u<v;u++){if(r[u].isEnabled()){return r[u];
}}return null;
},
_getLastSelectable:function(){var r=this._widget.getChildren();
for(var u=r.length-1;u>0;u--){if(r[u].isEnabled()){return r[u];
}}return null;
},
_getRelatedSelectable:function(j,
z){var A=this._widget.getOrientation()===a;
var r=this._widget.getChildren();
var B=r.indexOf(j);
var C;
if((A&&z===d)||(!A&&z===f)){for(var u=B-1;u>=0;u--){C=r[u];
if(C.isEnabled()){return C;
}}}else if((A&&z===b)||(!A&&z===g)){for(var u=B+1;u<r.length;u++){C=r[u];
if(C.isEnabled()){return C;
}}}return null;
},
_getPage:function(D,
E){if(E){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},
destruct:function(){this._disposeFields(c);
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,
{extend:qx.ui.core.selection.Widget,
members:{_isSelectable:function(b){return b.isEnabled()&&b.getLayoutParent()===this._widget.getChildrenContainer();
},
_getDimension:function(){return this._widget.getPaneSize();
},
_getScroll:function(){var c=this._widget;
return {left:c.getScrollX(),
top:c.getScrollY()};
},
_scrollBy:function(d,
e){var c=this._widget;
c.scrollByX(d);
c.scrollByY(e);
},
_getPage:function(f,
g){var h=this._getSelectables();
var j=h.length;
var k=h.indexOf(f);
if(k===-1){throw new Error("Invalid lead item: "+f);
}var c=this._widget;
var l=c.getScrollY();
var m=c.getInnerSize().height;
var n,
o,
p;
if(g){var q=l;
var r=k;
while(1){for(;r>=0;r--){n=c.getItemTop(h[r]);
if(n<q){p=r+1;
break;
}}if(p==null){var s=this._getFirstSelectable();
return s==f?null:s;
}if(p>=k){q-=m+l-c.getItemBottom(f);
p=null;
continue;
}return h[p];
}}else{var t=m+l;
var r=k;
while(1){for(;r<j;r++){o=c.getItemBottom(h[r]);
if(o>t){p=r-1;
break;
}}if(p==null){var u=this._getLastSelectable();
return u==f?null:u;
}if(p<=k){t+=c.getItemTop(f)-l;
p=null;
continue;
}return h[p];
}}}}});
})();
(function(){var a="right",
b="above",
c="left",
d="under",
e="qx.ui.tree.SelectionManager";
qx.Class.define(e,
{extend:qx.ui.core.selection.ScrollArea,
members:{_getSelectableLocationY:function(f){var g=f.getBounds();
if(g){var h=this._widget.getItemOffset(f);
return {top:h,
bottom:h+g.height};
}},
_isSelectable:function(f){return f instanceof qx.ui.tree.AbstractTreeItem;
},
_getSelectableFromTarget:function(i){return this._widget.getTreeItem(i);
},
_getSelectables:function(){return this._widget.getRoot().getItems(true,
false,
this._widget.getHideRoot());
},
_getSelectableRange:function(j,
k){if(j===k){return [j];
}var l=this._getSelectables();
var m=l.indexOf(j);
var n=l.indexOf(k);
if(m<0||n<0){return [];
}
if(m<n){return l.slice(m,
n+1);
}else{return l.slice(n,
m+1);
}},
_getFirstSelectable:function(){return this._getSelectables()[0]||null;
},
_getLastSelectable:function(){var l=this._getSelectables();
if(l.length>0){return l[l.length-1];
}else{return null;
}},
_getRelatedSelectable:function(f,
o){switch(o){case b:return this._widget.getPreviousSiblingOf(f,
false);
case d:return this._widget.getNextSiblingOf(f,
false);
case c:if(f.isOpenable()&&f.isOpen()){f.setOpen(false);
}break;
case a:if(f.isOpenable()&&!f.isOpen()){f.setOpen(true);
}break;
}return null;
}}});
})();
(function(){var a="dblclick",
b="click",
c="visible",
d="Boolean",
f="excluded",
g="qx.event.type.Data",
h="_applyHideRoot",
i="none",
j="_applyRootOpenClose",
k="_applyOpenMode",
l="changeRoot",
m="changeOpenMode",
n="pane",
o="__fY",
p="_applyRoot",
q="qx.ui.tree.Tree",
r="qx.ui.tree.AbstractTreeItem",
s="tree";
qx.Class.define(q,
{extend:qx.ui.core.AbstractScrollArea,
include:[qx.ui.core.MSelectionHandling,
qx.ui.core.MContentPadding],
construct:function(){arguments.callee.base.call(this);
this.__fY=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,
allowGrowX:true});
this._getChildControl(n).add(this.__fY);
this.initOpenMode();
this.initRootOpenClose();
},
events:{addItem:g,
removeItem:g},
properties:{openMode:{check:[b,
a,
i],
init:a,
apply:k,
event:m,
themeable:true},
root:{check:r,
init:null,
nullable:true,
event:l,
apply:p},
hideRoot:{check:d,
init:false,
apply:h},
rootOpenClose:{check:d,
init:false,
apply:j},
appearance:{refine:true,
init:s},
focusable:{refine:true,
init:true}},
members:{__fY:null,
SELECTION_MANAGER:qx.ui.tree.SelectionManager,
getChildrenContainer:function(){return this.__fY;
},
_applyRoot:function(t,
u){var v=this.getChildrenContainer();
if(u){v.remove(u);
if(u.hasChildren()){v.remove(u.getChildrenContainer());
}}
if(t){v.add(t);
if(t.hasChildren()){v.add(t.getChildrenContainer());
}t.setVisibility(this.getHideRoot()?f:c);
t.recursiveAddToWidgetQueue();
}},
_applyHideRoot:function(t,
u){var w=this.getRoot();
if(!w){return;
}w.setVisibility(t?f:c);
w.recursiveAddToWidgetQueue();
},
_applyRootOpenClose:function(t,
u){var w=this.getRoot();
if(!w){return;
}w.recursiveAddToWidgetQueue();
},
_getContentPaddingTarget:function(){return this.__fY;
},
getNextSiblingOf:function(x,
y){if((y!==false||x.isOpen())&&x.hasChildren()){return x.getChildren()[0];
}
while(x){var z=x.getParent();
if(!z){return null;
}var A=z.getChildren();
var B=A.indexOf(x);
if(B>-1&&B<A.length-1){return A[B+1];
}x=z;
}return null;
},
getPreviousSiblingOf:function(x,
y){var z=x.getParent();
if(!z){return null;
}
if(this.getHideRoot()){if(z==this.getRoot()){if(z.getChildren()[0]==x){return null;
}}}else{if(x==this.getRoot()){return null;
}}var A=z.getChildren();
var B=A.indexOf(x);
if(B>0){var C=A[B-1];
while((y!==false||C.isOpen())&&C.hasChildren()){var D=C.getChildren();
C=D[D.length-1];
}return C;
}else{return z;
}},
getItems:function(E,
y){return this.getRoot().getItems(E,
y,
this.getHideRoot());
},
scrollChildIntoViewY:function(F,
G,
H){if(!this.getNextSiblingOf(F,
false)){this.scrollToY(1000000);
}else{arguments.callee.base.call(this,
F,
G,
H);
}},
getTreeItem:function(I){while(I){if(I==this){return null;
}
if(I instanceof qx.ui.tree.AbstractTreeItem){return I;
}I=I.getLayoutParent();
}return null;
},
_applyOpenMode:function(t,
u){if(u==b){this.removeListener(b,
this._onOpen,
this);
}else if(u==a){this.removeListener(a,
this._onOpen,
this);
}
if(t==b){this.addListener(b,
this._onOpen,
this);
}else if(t==a){this.addListener(a,
this._onOpen,
this);
}},
_onOpen:function(J){var x=this.getTreeItem(J.getTarget());
if(!x||!x.isOpenable()){return;
}x.setOpen(!x.isOpen());
J.stopPropagation();
}},
destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var a="feed",
b="_staticFeedsFolder",
c="add",
d="feedreader/images/loading22.gif",
f="_feedList",
g="icon/22/apps/internet-feed-reader.png",
h="new",
j="change",
k="User Feeds",
l="_root",
m="Static Feeds",
n="loading",
o="feedreader.view.Tree",
p="stateModified",
q="white",
r="changeSelection",
s="remove",
t="icon/22/actions/process-stop.png",
u="_userFeedsFolder",
v="loaded",
w="static";
qx.Class.define(o,
{extend:qx.ui.tree.Tree,
construct:function(x){arguments.callee.base.call(this);
this._feedList=x;
this.setBackgroundColor(q);
this.setWidth(200);
this._root=new qx.ui.tree.TreeFolder;
this._root.setOpen(true);
this.setHideRoot(true);
this.setRootOpenClose(true);
this.setRoot(this._root);
this._staticFeedsFolder=new qx.ui.tree.TreeFolder(this.tr(m));
this._staticFeedsFolder.setOpen(true);
this.getRoot().add(this._staticFeedsFolder);
this._userFeedsFolder=new qx.ui.tree.TreeFolder(this.tr(k));
this._userFeedsFolder.setOpen(true);
this.getRoot().add(this._userFeedsFolder);
this.addListener(r,
this._onChangeSelectionView,
this);
x.addListener(c,
this._onFeedAdded,
this);
x.addListener(s,
this._onFeedRemoved,
this);
x.addListener(j,
this._onFeedSelected,
this);
},
members:{_onFeedAdded:function(y){var z=y.getData();
z.addListener(p,
this._onFeedStateModified,
this);
var A=new qx.ui.tree.TreeFolder(z.getTitle());
this._updateFolderState(A,
z.getState());
A.setUserData(a,
z);
if(z.getCategory()==w){this._staticFeedsFolder.add(A);
}else{this._userFeedsFolder.add(A);
}},
_onFeedRemoved:function(y){var z=y.getData();
this.getFolder(z).destroy();
},
_updateFolderState:function(A,
B){if(B==h||B==n){A.setIcon(d);
A.resetEnabled();
}else if(B==v){A.setIcon(g);
A.resetEnabled();
}else if(A.getParent()){A.setIcon(t);
A.setEnabled(false);
}},
_onFeedStateModified:function(y){var z=y.getTarget();
var A=this.getFolder(z);
var B=y.getData();
if(!A){return;
}this._updateFolderState(A,
B);
},
getFolder:function(z){var C=this.getItems(true);
for(var D=0;D<C.length;D++){var E=C[D].getUserData(a);
if(E==z){return C[D];
}}return null;
},
_onChangeSelectionView:function(y){var F=y.getData()[0];
if(F){var z=F.getUserData(a);
this._feedList.setSelected(z);
}},
_onFeedSelected:function(y){var z=y.getData();
if(!z){if(this.getSelection()[0].getUserData(a)){this.clearSelection();
}return;
}var A=this.getFolder(z);
if(!A){this.clearSelection();
}
if(this.getSelectedItem()!=A){this.addToSelection(A);
}}},
destruct:function(){this._disposeFields(f);
this._disposeObjects(l,
b,
u);
}});
})();
(function(){var a="left",
b="top",
c="_applyLayoutChange",
d="hAlign",
e="flex",
f="vAlign",
g="Integer",
h="__gf",
k="__gd",
m="minWidth",
n="width",
o="__gk",
p="minHeight",
q="__gl",
r="__gh",
s="qx.ui.layout.Grid",
t="__ge",
u="height",
v="__gg",
w="maxHeight",
z="maxWidth";
qx.Class.define(s,
{extend:qx.ui.layout.Abstract,
construct:function(A,
B){arguments.callee.base.call(this);
this.__gd=[];
this.__ge=[];
if(A){this.setSpacingX(A);
}
if(B){this.setSpacingY(B);
}},
properties:{spacingX:{check:g,
init:0,
apply:c},
spacingY:{check:g,
init:0,
apply:c}},
members:{__gf:null,
__gd:null,
__ge:null,
__gg:null,
__gh:null,
__gi:null,
__gj:null,
__gk:null,
__gl:null,
verifyLayoutProperty:null,
__gm:function(){var C=[];
var D=[];
var E=[];
var F=0;
var G=0;
var H=this._getLayoutChildren();
for(var I=0,
J=H.length;I<J;I++){var K=H[I];
var L=K.getLayoutProperties();
var M=L.row;
var N=L.column;
L.colSpan=L.colSpan||1;
L.rowSpan=L.rowSpan||1;
if(M==null||N==null){throw new Error("The layout properties 'row' and 'column' must be defined!");
}
if(C[M]&&C[M][N]){throw new Error("There is already a widget in this cell ("+M+", "+N+")");
}
for(var O=N;O<N+L.colSpan;O++){for(var P=M;P<M+L.rowSpan;P++){if(C[P]==undefined){C[P]=[];
}C[P][O]=K;
G=Math.max(G,
O);
F=Math.max(F,
P);
}}
if(L.rowSpan>1){E.push(K);
}
if(L.colSpan>1){D.push(K);
}}for(var P=0;P<=F;P++){if(C[P]==undefined){C[P]=[];
}}this.__gf=C;
this.__gg=D;
this.__gh=E;
this.__gi=F;
this.__gj=G;
delete this._invalidChildrenCache;
},
_setRowData:function(M,
Q,
R){var S=this.__gd[M];
if(!S){this.__gd[M]={};
this.__gd[M][Q]=R;
}else{S[Q]=R;
}},
_setColumnData:function(N,
Q,
R){var T=this.__ge[N];
if(!T){this.__ge[N]={};
this.__ge[N][Q]=R;
}else{T[Q]=R;
}},
setSpacing:function(U){this.setSpacingY(U);
this.setSpacingX(U);
},
setColumnAlign:function(N,
V,
W){{};
this._setColumnData(N,
d,
V);
this._setColumnData(N,
f,
W);
this._applyLayoutChange();
return this;
},
getColumnAlign:function(N){var T=this.__ge[N]||{};
return {vAlign:T.vAlign||b,
hAlign:T.hAlign||a};
},
setRowAlign:function(M,
V,
W){{};
this._setRowData(M,
d,
V);
this._setRowData(M,
f,
W);
this._applyLayoutChange();
return this;
},
getRowAlign:function(M){var S=this.__gd[M]||{};
return {vAlign:S.vAlign||b,
hAlign:S.hAlign||a};
},
getCellWidget:function(M,
N){if(this._invalidChildrenCache){this.__gm();
}return this.__gf[M][N]||null;
},
getCellAlign:function(M,
N){var W=b;
var V=a;
var S=this.__gd[M];
var T=this.__ge[N];
var X=this.__gf[M][N];
if(X){var Y={vAlign:X.getAlignY(),
hAlign:X.getAlignX()};
}else{Y={};
}if(Y.vAlign){W=Y.vAlign;
}else if(S&&S.vAlign){W=S.vAlign;
}else if(T&&T.vAlign){W=T.vAlign;
}if(Y.hAlign){V=Y.hAlign;
}else if(T&&T.hAlign){V=T.hAlign;
}else if(S&&S.hAlign){V=S.hAlign;
}return {vAlign:W,
hAlign:V};
},
setColumnFlex:function(N,
ba){this._setColumnData(N,
e,
ba);
this._applyLayoutChange();
return this;
},
getColumnFlex:function(N){var T=this.__ge[N]||{};
return T.flex!==undefined?T.flex:0;
},
setRowFlex:function(M,
ba){this._setRowData(M,
e,
ba);
this._applyLayoutChange();
return this;
},
getRowFlex:function(M){var S=this.__gd[M]||{};
var bb=S.flex!==undefined?S.flex:0;
return bb;
},
setColumnMaxWidth:function(N,
bc){this._setColumnData(N,
z,
bc);
this._applyLayoutChange();
return this;
},
getColumnMaxWidth:function(N){var T=this.__ge[N]||{};
return T.maxWidth!==undefined?T.maxWidth:Infinity;
},
setColumnWidth:function(N,
bd){this._setColumnData(N,
n,
bd);
this._applyLayoutChange();
return this;
},
getColumnWidth:function(N){var T=this.__ge[N]||{};
return T.width!==undefined?T.width:null;
},
setColumnMinWidth:function(N,
be){this._setColumnData(N,
m,
be);
this._applyLayoutChange();
return this;
},
getColumnMinWidth:function(N){var T=this.__ge[N]||{};
return T.minWidth||0;
},
setRowMaxHeight:function(M,
bf){this._setRowData(M,
w,
bf);
this._applyLayoutChange();
return this;
},
getRowMaxHeight:function(M){var S=this.__gd[M]||{};
return S.maxHeight||Infinity;
},
setRowHeight:function(M,
bg){this._setRowData(M,
u,
bg);
this._applyLayoutChange();
return this;
},
getRowHeight:function(M){var S=this.__gd[M]||{};
return S.height!==undefined?S.height:null;
},
setRowMinHeight:function(M,
bh){this._setRowData(M,
p,
bh);
this._applyLayoutChange();
return this;
},
getRowMinHeight:function(M){var S=this.__gd[M]||{};
return S.minHeight||0;
},
__gn:function(X){var bi=X.getSizeHint();
var bj=X.getMarginLeft()+X.getMarginRight();
var bk=X.getMarginTop()+X.getMarginBottom();
var bl={height:bi.height+bk,
width:bi.width+bj,
minHeight:bi.minHeight+bk,
minWidth:bi.minWidth+bj,
maxHeight:bi.maxHeight+bk,
maxWidth:bi.maxWidth+bj};
return bl;
},
_fixHeightsRowSpan:function(bm){var bn=this.getSpacingY();
for(var I=0,
J=this.__gh.length;I<J;I++){var X=this.__gh[I];
var bi=this.__gn(X);
var Y=X.getLayoutProperties();
var bo=Y.row;
var bp=bn*(Y.rowSpan-1);
var bq=bp;
var br={};
for(var bs=0;bs<Y.rowSpan;bs++){var M=Y.row+bs;
var bt=bm[M];
var bb=this.getRowFlex(M);
if(bb>0){br[M]={min:bt.minHeight,
value:bt.height,
max:bt.maxHeight,
flex:bb};
}bp+=bt.height;
bq+=bt.minHeight;
}if(bp<bi.height){var bu=qx.ui.layout.Util.computeFlexOffsets(br,
bi.height,
bp);
for(var bs=0;bs<Y.rowSpan;bs++){var bv=bu[bo+bs]?bu[bo+bs].offset:0;
bm[bo+bs].height+=bv;
}}if(bq<bi.minHeight){var bu=qx.ui.layout.Util.computeFlexOffsets(br,
bi.minHeight,
bq);
for(var bs=0;bs<Y.rowSpan;bs++){var bv=bu[bo+bs]?bu[bo+bs].offset:0;
bm[bo+bs].minHeight+=bv;
}}}},
_fixWidthsColSpan:function(bw){var bx=this.getSpacingX();
for(var I=0,
J=this.__gg.length;I<J;I++){var X=this.__gg[I];
var bi=this.__gn(X);
var Y=X.getLayoutProperties();
var by=Y.column;
var bz=bx*(Y.colSpan-1);
var bA=bz;
var bB={};
var bv;
for(var bs=0;bs<Y.colSpan;bs++){var bC=Y.column+bs;
var bD=bw[bC];
var bE=this.getColumnFlex(bC);
if(bE>0){bB[bC]={min:bD.minWidth,
value:bD.width,
max:bD.maxWidth,
flex:bE};
}bz+=bD.width;
bA+=bD.minWidth;
}if(bz<bi.width){var bF=qx.ui.layout.Util.computeFlexOffsets(bB,
bi.width,
bz);
for(var bs=0;bs<Y.colSpan;bs++){bv=bF[by+bs]?bF[by+bs].offset:0;
bw[by+bs].width+=bv;
}}if(bA<bi.minWidth){var bF=qx.ui.layout.Util.computeFlexOffsets(bB,
bi.minWidth,
bA);
for(var bs=0;bs<Y.colSpan;bs++){bv=bF[by+bs]?bF[by+bs].offset:0;
bw[by+bs].minWidth+=bv;
}}}},
_getRowHeights:function(){if(this.__gk!=null){return this.__gk;
}var bm=[];
var F=this.__gi;
var G=this.__gj;
for(var M=0;M<=F;M++){var bh=0;
var bg=0;
var bf=0;
for(var bC=0;bC<=G;bC++){var X=this.__gf[M][bC];
if(!X){continue;
}var bG=X.getLayoutProperties().rowSpan||0;
if(bG>1){continue;
}var bH=this.__gn(X);
if(this.getRowFlex(M)>0){bh=Math.max(bh,
bH.minHeight);
}else{bh=Math.max(bh,
bH.height);
}bg=Math.max(bg,
bH.height);
}var bh=Math.max(bh,
this.getRowMinHeight(M));
var bf=this.getRowMaxHeight(M);
if(this.getRowHeight(M)!==null){var bg=this.getRowHeight(M);
}else{var bg=Math.max(bh,
Math.min(bg,
bf));
}bm[M]={minHeight:bh,
height:bg,
maxHeight:bf};
}
if(this.__gh.length>0){this._fixHeightsRowSpan(bm);
}this.__gk=bm;
return bm;
},
_getColWidths:function(){if(this.__gl!=null){return this.__gl;
}var bw=[];
var G=this.__gj;
var F=this.__gi;
for(var bC=0;bC<=G;bC++){var bd=0;
var be=0;
var bc=Infinity;
for(var M=0;M<=F;M++){var X=this.__gf[M][bC];
if(!X){continue;
}var bI=X.getLayoutProperties().colSpan||0;
if(bI>1){continue;
}var bH=this.__gn(X);
if(this.getColumnFlex(bC)>0){be=Math.max(be,
bH.minWidth);
}else{be=Math.max(be,
bH.width);
}bd=Math.max(bd,
bH.width);
}var be=Math.max(be,
this.getColumnMinWidth(bC));
var bc=this.getColumnMaxWidth(bC);
if(this.getColumnWidth(bC)!==null){var bd=this.getColumnWidth(bC);
}else{var bd=Math.max(be,
Math.min(bd,
bc));
}bw[bC]={minWidth:be,
width:bd,
maxWidth:bc};
}
if(this.__gg.length>0){this._fixWidthsColSpan(bw);
}this.__gl=bw;
return bw;
},
_getColumnFlexOffsets:function(bd){var bi=this.getSizeHint();
var bJ=bd-bi.width;
if(bJ==0){return {};
}var bw=this._getColWidths();
var bK={};
for(var I=0,
J=bw.length;I<J;I++){var bC=bw[I];
var bE=this.getColumnFlex(I);
if((bE<=0)||(bC.width==bC.maxWidth&&bJ>0)||(bC.width==bC.minWidth&&bJ<0)){continue;
}bK[I]={min:bC.minWidth,
value:bC.width,
max:bC.maxWidth,
flex:bE};
}return qx.ui.layout.Util.computeFlexOffsets(bK,
bd,
bi.width);
},
_getRowFlexOffsets:function(bg){var bi=this.getSizeHint();
var bJ=bg-bi.height;
if(bJ==0){return {};
}var bm=this._getRowHeights();
var bK={};
for(var I=0,
J=bm.length;I<J;I++){var M=bm[I];
var bb=this.getRowFlex(I);
if((bb<=0)||(M.height==M.maxHeight&&bJ>0)||(M.height==M.minHeight&&bJ<0)){continue;
}bK[I]={min:M.minHeight,
value:M.height,
max:M.maxHeight,
flex:bb};
}return qx.ui.layout.Util.computeFlexOffsets(bK,
bg,
bi.height);
},
renderLayout:function(bL,
bM){if(this._invalidChildrenCache){this.__gm();
}var bN=qx.ui.layout.Util;
var bx=this.getSpacingX();
var bn=this.getSpacingY();
var bO=this._getColWidths();
var bP=this._getColumnFlexOffsets(bL);
var bw=[];
var G=this.__gj;
var F=this.__gi;
var bv;
for(var bC=0;bC<=G;bC++){bv=bP[bC]?bP[bC].offset:0;
bw[bC]=bO[bC].width+bv;
}var bQ=this._getRowHeights();
var bR=this._getRowFlexOffsets(bM);
var bm=[];
for(var M=0;M<=F;M++){bv=bR[M]?bR[M].offset:0;
bm[M]=bQ[M].height+bv;
}var bS=0;
for(var bC=0;bC<=G;bC++){var bT=0;
for(var M=0;M<=F;M++){var X=this.__gf[M][bC];
if(!X){bT+=bm[M]+bn;
continue;
}var Y=X.getLayoutProperties();
if(Y.row!==M||Y.column!==bC){bT+=bm[M]+bn;
continue;
}var bU=bx*(Y.colSpan-1);
for(var I=0;I<Y.colSpan;I++){bU+=bw[bC+I];
}var bV=bn*(Y.rowSpan-1);
for(var I=0;I<Y.rowSpan;I++){bV+=bm[M+I];
}var bW=X.getSizeHint();
var bX=X.getMarginTop();
var bY=X.getMarginLeft();
var ca=X.getMarginBottom();
var cb=X.getMarginRight();
var cc=Math.max(bW.minWidth,
Math.min(bU-bY-cb,
bW.maxWidth));
var cd=Math.max(bW.minHeight,
Math.min(bV-bX-ca,
bW.maxHeight));
var ce=this.getCellAlign(M,
bC);
var cf=bS+bN.computeHorizontalAlignOffset(ce.hAlign,
cc,
bU,
bY,
cb);
var cg=bT+bN.computeVerticalAlignOffset(ce.vAlign,
cd,
bV,
bX,
ca);
X.renderLayout(cf,
cg,
cc,
cd);
bT+=bm[M]+bn;
}bS+=bw[bC]+bx;
}},
invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__gl=null;
this.__gk=null;
},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__gm();
}var bw=this._getColWidths();
var be=0,
bd=0;
for(var I=0,
J=bw.length;I<J;I++){var bC=bw[I];
if(this.getColumnFlex(I)>0){be+=bC.minWidth;
}else{be+=bC.width;
}bd+=bC.width;
}var bm=this._getRowHeights();
var bh=0,
bg=0;
for(var I=0,
J=bm.length;I<J;I++){var M=bm[I];
if(this.getRowFlex(I)>0){bh+=M.minHeight;
}else{bh+=M.height;
}bg+=M.height;
}var A=this.getSpacingX()*(bw.length-1);
var B=this.getSpacingY()*(bm.length-1);
var bi={minWidth:be+A,
width:bd+A,
minHeight:bh+B,
height:bg+B};
return bi;
}},
destruct:function(){this._disposeFields(h,
k,
t,
v,
r,
q,
o);
}});
})();
(function(){var a="resize",
b="scrollY",
c="typeof value=='number'&&value>=0&&value<=this.getScrollMaxX()",
d="update",
f="scrollX",
g="_applyScrollX",
h="_applyScrollY",
i="appear",
j="qx.ui.core.ScrollPane",
k="qx.event.type.Event",
l="typeof value=='number'&&value>=0&&value<=this.getScrollMaxY()",
m="scroll";
qx.Class.define(j,
{extend:qx.ui.core.Widget,
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow());
this.addListener(a,
this._onUpdate);
var n=this.getContentElement();
n.addListener(m,
this._onScroll,
this);
n.addListener(i,
this._onAppear,
this);
},
events:{update:k},
properties:{scrollX:{check:c,
apply:g,
event:f,
init:0},
scrollY:{check:l,
apply:h,
event:b,
init:0}},
members:{add:function(o){var p=this._getChildren()[0];
if(p){this._remove(p);
p.removeListener(a,
this._onUpdate,
this);
}
if(o){this._add(o);
o.addListener(a,
this._onUpdate,
this);
}},
remove:function(o){if(o){this._remove(o);
o.removeListener(a,
this._onUpdate,
this);
}},
getChild:function(){return this._getChildren()[0]||null;
},
_onUpdate:function(q){this.fireEvent(d);
},
_onScroll:function(q){var n=this.getContentElement();
this.setScrollX(n.getScrollX());
this.setScrollY(n.getScrollY());
},
_onAppear:function(q){var n=this.getContentElement();
var r=this.getScrollX();
var s=n.getScrollX();
if(r!=s){n.scrollToX(r);
}var t=this.getScrollY();
var u=n.getScrollY();
if(t!=u){n.scrollToY(t);
}},
getItemTop:function(v){var w=0;
do{w+=v.getBounds().top;
v=v.getLayoutParent();
}while(v&&v!==this);
return w;
},
getItemBottom:function(v){return this.getItemTop(v)+v.getBounds().height;
},
getItemLeft:function(v){var z=0;
var A;
do{z+=v.getBounds().left;
A=v.getLayoutParent();
if(A){z+=A.getInsets().left;
}v=A;
}while(v&&v!==this);
return z;
},
getItemRight:function(v){return this.getItemLeft(v)+v.getBounds().width;
},
getScrollSize:function(){return this.getChild().getBounds();
},
getScrollMaxX:function(){var B=this.getBounds();
var C=this.getScrollSize();
if(B&&C){return Math.max(0,
C.width-B.width);
}return 0;
},
getScrollMaxY:function(){var B=this.getBounds();
var C=this.getScrollSize();
if(B&&C){return Math.max(0,
C.height-B.height);
}return 0;
},
scrollToX:function(D){var E=this.getScrollMaxX();
if(D<0){D=0;
}else if(D>E){D=E;
}this.setScrollX(D);
},
scrollToY:function(D){var E=this.getScrollMaxY();
if(D<0){D=0;
}else if(D>E){D=E;
}this.setScrollY(D);
},
scrollByX:function(F){this.scrollToX(this.getScrollX()+F);
},
scrollByY:function(G){this.scrollToY(this.getScrollY()+G);
},
_applyScrollX:function(D){this.getContentElement().scrollToX(D);
},
_applyScrollY:function(D){this.getContentElement().scrollToY(D);
}}});
})();
(function(){var a="slider",
b="horizontal",
c="button-begin",
d="button-end",
f="vertical",
g="Integer",
h="execute",
i="right",
j="left",
k="down",
l="up",
m="PositiveNumber",
n="changeValue",
o="typeof value==='number'&&value>=0&&value<=this.getMaximum()",
p="_applyKnobFactor",
q="_applyOrientation",
r="qx.ui.core.ScrollBar",
s="_applyPageStep",
t="PositiveInteger",
u="scroll",
v="_applyPosition",
w="scrollbar",
x="_applyMaximum";
qx.Class.define(r,
{extend:qx.ui.core.Widget,
construct:function(y){arguments.callee.base.call(this);
this._createChildControl(c);
this._createChildControl(a);
this._createChildControl(d);
if(y!=null){this.setOrientation(y);
}else{this.initOrientation();
}},
properties:{appearance:{refine:true,
init:w},
orientation:{check:[b,
f],
init:b,
apply:q},
maximum:{check:t,
apply:x,
init:100},
position:{check:o,
init:0,
apply:v,
event:u},
singleStep:{check:g,
init:20},
pageStep:{check:g,
init:10,
apply:s},
knobFactor:{check:m,
apply:p,
nullable:true}},
members:{_createChildControlImpl:function(z){var A;
switch(z){case a:A=new qx.ui.core.ScrollSlider;
A.setPageStep(100);
A.setFocusable(false);
A.addListener(n,
this._onChangeSliderValue,
this);
this._add(A,
{flex:1});
break;
case c:A=new qx.ui.form.RepeatButton;
A.setFocusable(false);
A.addListener(h,
this._onExecuteBegin,
this);
this._add(A);
break;
case d:A=new qx.ui.form.RepeatButton;
A.setFocusable(false);
A.addListener(h,
this._onExecuteEnd,
this);
this._add(A);
break;
}return A||arguments.callee.base.call(this,
z);
},
_applyMaximum:function(B){this._getChildControl(a).setMaximum(B);
},
_applyPosition:function(B){this._getChildControl(a).setValue(B);
},
_applyKnobFactor:function(B){this._getChildControl(a).setKnobFactor(B);
},
_applyPageStep:function(B){this._getChildControl(a).setPageStep(B);
},
_applyOrientation:function(B,
C){var D=this._getLayout();
if(D){D.dispose();
}if(B===b){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(f,
b);
this._getChildControl(c).replaceState(l,
j);
this._getChildControl(d).replaceState(k,
i);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(b,
f);
this._getChildControl(c).replaceState(j,
l);
this._getChildControl(d).replaceState(i,
k);
}this._getChildControl(a).setOrientation(B);
},
scrollTo:function(E){this._getChildControl(a).slideTo(E);
},
scrollBy:function(F){this._getChildControl(a).slideBy(F);
},
scrollBySteps:function(G){var H=this.getSingleStep();
this._getChildControl(a).slideBy(G*H);
},
_onExecuteBegin:function(I){this.scrollBy(-this.getSingleStep());
},
_onExecuteEnd:function(I){this.scrollBy(this.getSingleStep());
},
_onChangeSliderValue:function(I){this.setPosition(I.getData());
}}});
})();
(function(){var a="knob",
b="horizontal",
c="vertical",
d="Integer",
f="px",
g="mousemove",
h="resize",
i="left",
j="top",
k="mouseup",
l="slider",
m="PageUp",
n="mousedown",
o="height",
p="changeValue",
q="Left",
r="Down",
s="Up",
t="dblclick",
u="qx.ui.form.Slider",
v="PageDown",
w="mousewheel",
x="interval",
y="_applyValue",
z="_applyKnobFactor",
A="End",
B="String",
C="width",
D="_applyOrientation",
E="Home",
F="floor",
G="_applyMinimum",
H="click",
I="Right",
J="keypress",
K="ceil",
L="changeName",
M="losecapture",
N="contextmenu",
O="_applyMaximum",
P="Number",
Q="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(u,
{extend:qx.ui.core.Widget,
implement:qx.ui.form.IFormElement,
construct:function(R){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(J,
this._onKeyPress);
this.addListener(w,
this._onMouseWheel);
this.addListener(n,
this._onMouseDown);
this.addListener(k,
this._onMouseUp);
this.addListener(M,
this._onMouseUp);
this.addListener(h,
this._onUpdate);
this.addListener(N,
this._onStopEvent);
this.addListener(H,
this._onStopEvent);
this.addListener(t,
this._onStopEvent);
if(R!=null){this.setOrientation(R);
}else{this.initOrientation();
}},
properties:{appearance:{refine:true,
init:l},
focusable:{refine:true,
init:true},
orientation:{check:[b,
c],
init:b,
apply:D},
name:{check:B,
nullable:true,
event:L},
value:{check:Q,
init:0,
apply:y,
event:p},
minimum:{check:d,
init:0,
apply:G},
maximum:{check:d,
init:100,
apply:O},
singleStep:{check:d,
init:1},
pageStep:{check:d,
init:10},
knobFactor:{check:P,
apply:z,
nullable:true}},
members:{__go:null,
__gp:null,
__gq:null,
__gr:null,
__gs:null,
__gt:null,
__gu:null,
__gv:null,
__gw:null,
_createChildControlImpl:function(S){var T;
switch(S){case a:T=new qx.ui.core.Widget();
T.addListener(h,
this._onUpdate,
this);
this._add(T);
break;
}return T||arguments.callee.base.call(this,
S);
},
_onMouseWheel:function(U){var V=U.getWheelDelta()>0?1:-1;
this.slideBy(V*this.getSingleStep());
U.stop();
},
_onKeyPress:function(U){var W=this.getOrientation()===b;
var X=W?q:s;
var Y=W?I:r;
switch(U.getKeyIdentifier()){case Y:this.slideForward();
break;
case X:this.slideBack();
break;
case v:this.slidePageForward();
break;
case m:this.slidePageBack();
break;
case E:this.slideToBegin();
break;
case A:this.slideToEnd();
break;
default:return;
}U.stop();
},
_onMouseDown:function(U){var W=this.__gy;
var ba=this._getChildControl(a);
var bb=W?i:j;
var bc=W?U.getDocumentLeft():U.getDocumentTop();
var bd=this.__go=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bb];
var be=this.__gp=qx.bom.element.Location.get(ba.getContainerElement().getDomElement())[bb];
if(U.getTarget()===ba){this.__gr=true;
this.__gs=bc+bd-be;
}else{this.__gt=true;
this.__gu=bc<=be?-1:1;
this.__gz(U);
this._onInterval();
if(!this.__gw){this.__gw=new qx.event.Timer(100);
this.__gw.addListener(x,
this._onInterval,
this);
}this.__gw.start();
}this.addListener(g,
this._onMouseMove);
this.capture();
U.stopPropagation();
},
_onMouseUp:function(U){if(this.__gr){this.releaseCapture();
delete this.__gr;
delete this.__gs;
}else if(this.__gt){this.__gw.stop();
this.releaseCapture();
delete this.__gt;
delete this.__gu;
delete this.__gv;
}this.removeListener(g,
this._onMouseMove);
if(U.getType()===k){U.stopPropagation();
}},
_onMouseMove:function(U){if(this.__gr){var bf=this.__gy?U.getDocumentLeft():U.getDocumentTop();
var bg=bf-this.__gs;
this.slideTo(this._positionToValue(bg));
}else if(this.__gt){this.__gz(U);
}U.stopPropagation();
},
_onInterval:function(U){var bh=this.getValue()+(this.__gu*this.getPageStep());
if(bh<this.getMinimum()){bh=this.getMinimum();
}else if(bh>this.getMaximum()){bh=this.getMaximum();
}var bi=this.__gu==-1;
if((bi&&bh<=this.__gv)||(!bi&&bh>=this.__gv)){bh=this.__gv;
}this.slideTo(bh);
},
_onUpdate:function(U){var bj=this.getInnerSize();
var bk=this._getChildControl(a).getBounds();
var bl=this.__gy?C:o;
this._updateKnobSize();
this.__gx=bj[bl]-bk[bl];
this.__gq=bk[bl];
this._updateKnobPosition();
},
__gy:false,
__gx:0,
__gz:function(U){var W=this.__gy;
var bc=W?U.getDocumentLeft():U.getDocumentTop();
var bd=this.__go;
var be=this.__gp;
var bk=this.__gq;
var bg=bc-bd;
if(bc>=be){bg-=bk;
}var bh=this._positionToValue(bg);
var bm=this.getMinimum();
var bn=this.getMaximum();
if(bh<bm){bh=bm;
}else if(bh>bn){bh=bn;
}else{var bo=this.getValue();
var bp=this.getPageStep();
var bq=this.__gu<0?F:K;
bh=bo+(Math[bq]((bh-bo)/bp)*bp);
}if(this.__gv==null||(this.__gu==-1&&bh<=this.__gv)||(this.__gu==1&&bh>=this.__gv)){this.__gv=bh;
}},
_positionToValue:function(bg){var br=this.__gx;
if(br==null||br==0){return 0;
}var bs=bg/br;
if(bs<0){bs=0;
}else if(bs>1){bs=1;
}var bt=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bt*bs);
},
_valueToPosition:function(bh){var br=this.__gx;
if(br==null){return 0;
}var bt=this.getMaximum()-this.getMinimum();
if(bt==0){return 0;
}var bh=bh-this.getMinimum();
var bs=bh/bt;
if(bs<0){bs=0;
}else if(bs>1){bs=1;
}return Math.round(br*bs);
},
_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},
_setKnobPosition:function(bg){var bu=this._getChildControl(a).getContainerElement();
if(this.__gy){bu.setStyle(i,
bg+f,
true);
}else{bu.setStyle(j,
bg+f,
true);
}},
_updateKnobSize:function(){var bv=this.getKnobFactor();
if(bv==null){return;
}var br=this.getInnerSize();
if(br==null){return;
}if(this.__gy){this._getChildControl(a).setWidth(Math.round(bv*br.width));
}else{this._getChildControl(a).setHeight(Math.round(bv*br.height));
}},
slideToBegin:function(){this.slideTo(this.getMinimum());
},
slideToEnd:function(){this.slideTo(this.getMaximum());
},
slideForward:function(){this.slideBy(this.getSingleStep());
},
slideBack:function(){this.slideBy(-this.getSingleStep());
},
slidePageForward:function(){this.slideBy(this.getPageStep());
},
slidePageBack:function(){this.slideBy(-this.getPageStep());
},
slideBy:function(bw){this.slideTo(this.getValue()+bw);
},
slideTo:function(bh){if(bh<this.getMinimum()){bh=this.getMinimum();
}else if(bh>this.getMaximum()){bh=this.getMaximum();
}else{bh=this.getMinimum()+Math.round((bh-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bh);
},
_applyOrientation:function(bh,
bo){var ba=this._getChildControl(a);
this.__gy=bh===b;
if(this.__gy){this.removeState(c);
ba.removeState(c);
this.addState(b);
ba.addState(b);
ba.setLayoutProperties({top:0,
right:null,
bottom:0});
}else{this.removeState(b);
ba.removeState(b);
this.addState(c);
ba.addState(c);
ba.setLayoutProperties({right:0,
bottom:null,
left:0});
}this._updateKnobPosition();
},
_applyKnobFactor:function(bh,
bo){if(bh!=null){this._updateKnobSize();
}else{if(this.__gy){this._getChildControl(a).resetWidth();
}else{this._getChildControl(a).resetHeight();
}}},
_applyValue:function(bh,
bo){this._updateKnobPosition();
},
_applyMinimum:function(bh,
bo){if(this.getValue()<bh){this.setValue(bh);
}this._updateKnobPosition();
},
_applyMaximum:function(bh,
bo){if(this.getValue()>bh){this.setValue(bh);
}this._updateKnobPosition();
}}});
})();
(function(){var a="mousewheel",
b="qx.ui.core.ScrollSlider",
c="keypress";
qx.Class.define(b,
{extend:qx.ui.form.Slider,
construct:function(d){arguments.callee.base.call(this,
d);
this.removeListener(c,
this._onKeyPress);
this.removeListener(a,
this._onMouseWheel);
}});
})();
(function(){var a="pressed",
b="abandoned",
c="Integer",
d="hovered",
f="qx.event.type.Event",
g="Enter",
h="Space",
i="press",
j="qx.ui.form.RepeatButton",
k="release",
l="interval",
m="__gC",
n="execute";
qx.Class.define(j,
{extend:qx.ui.form.Button,
construct:function(o,
p){arguments.callee.base.call(this,
o,
p);
this.__gC=new qx.event.Timer(this.getInterval());
this.__gC.addListener(l,
this._onInterval,
this);
},
events:{"execute":f,
"press":f,
"release":f},
properties:{interval:{check:c,
init:100},
firstInterval:{check:c,
init:500},
minTimer:{check:c,
init:20},
timerDecrease:{check:c,
init:2}},
members:{__gD:null,
__gE:null,
__gC:null,
press:function(){if(this.isEnabled()){if(!this.hasState(a)){this.__gF();
}this.removeState(b);
this.addState(a);
}},
release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(a)){if(!this.__gE){this.execute();
}}this.removeState(a);
this.removeState(b);
this.__gG();
},
_applyEnabled:function(r,
s){arguments.callee.base.call(this,
r,
s);
if(!r){this.removeState(a);
this.removeState(b);
this.__gG();
}},
_onMouseOver:function(t){if(!this.isEnabled()||t.getTarget()!==this){return;
}
if(this.hasState(b)){this.removeState(b);
this.addState(a);
this.__gC.start();
}this.addState(d);
},
_onMouseOut:function(t){if(!this.isEnabled()||t.getTarget()!==this){return;
}this.removeState(d);
if(this.hasState(a)){this.removeState(a);
this.addState(b);
this.__gC.stop();
this.__gD=this.getInterval();
}},
_onMouseDown:function(t){if(!t.isLeftPressed()){return;
}this.capture();
this.__gF();
t.stopPropagation();
},
_onMouseUp:function(t){this.releaseCapture();
if(!this.hasState(b)){this.addState(d);
if(this.hasState(a)&&!this.__gE){this.execute();
}}this.__gG();
t.stopPropagation();
},
_onKeyUp:function(t){switch(t.getKeyIdentifier()){case g:case h:if(this.hasState(a)){if(!this.__gE){this.execute();
}this.removeState(a);
this.removeState(b);
t.stopPropagation();
this.__gG();
}}},
_onKeyDown:function(t){switch(t.getKeyIdentifier()){case g:case h:this.removeState(b);
this.addState(a);
t.stopPropagation();
this.__gF();
}},
_onInterval:function(t){this.__gC.stop();
if(this.__gD==null){this.__gD=this.getInterval();
}this.__gD=(Math.max(this.getMinTimer(),
this.__gD-this.getTimerDecrease()));
this.__gC.restartWith(this.__gD);
this.__gE=true;
this.fireEvent(n);
},
__gF:function(){this.fireEvent(i);
this.__gE=false;
this.__gC.setInterval(this.getFirstInterval());
this.__gC.start();
this.removeState(b);
this.addState(a);
},
__gG:function(){this.fireEvent(k);
this.__gC.stop();
this.__gD=null;
this.removeState(b);
this.removeState(a);
}},
destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var a="open",
b="auto",
c="icon",
d="middle",
f="label",
g="addItem",
h="changeOpen",
j="excluded",
k="String",
m="visible",
n="opened",
o="always",
p="qx.ui.tree.AbstractTreeItem",
q="Boolean",
r="__hj",
s="Integer",
t="_applyIndent",
u="changeOpenSymbolMode",
v="_applyOpenSymbolMode",
w="-label",
x="-icon",
y="resize",
z="",
A="__hm",
B="__hi",
C="abstract",
D="never",
E="_applyIcon",
F="_applyOpen",
G="_applyLabel";
qx.Class.define(p,
{extend:qx.ui.core.Widget,
type:C,
construct:function(){arguments.callee.base.call(this);
this.__hi=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},
properties:{open:{check:q,
init:false,
event:h,
apply:F},
openSymbolMode:{check:[o,
D,
b],
init:b,
event:u,
apply:v},
indent:{check:s,
init:19,
apply:t,
themeable:true},
parent:{check:p,
nullable:true},
icon:{check:k,
apply:E,
nullable:true,
themeable:true},
label:{check:k,
apply:G,
init:z,
dispose:true}},
members:{__hi:null,
__hj:null,
__hk:null,
__hl:null,
__hm:null,
_addWidgets:function(){throw new Error("Abstract method call.");
},
_createChildControlImpl:function(H){var I;
switch(H){case f:I=new qx.ui.basic.Label().set({appearance:this.getAppearance()+w,
alignY:d});
break;
case c:I=new qx.ui.basic.Image().set({appearance:this.getAppearance()+x,
alignY:d});
break;
case a:I=new qx.ui.tree.FolderOpenButton().set({alignY:d});
I.addListener(h,
this._onChangeOpen,
this);
I.addListener(y,
this._updateIndent,
this);
break;
}return I||arguments.callee.base.call(this,
H);
},
getTree:function(){var J=this;
while(J.getParent()){J=J.getParent();
}var K=J.getLayoutParent()?J.getLayoutParent().getLayoutParent():0;
if(K&&K instanceof qx.ui.core.ScrollPane){return K.getLayoutParent();
}return null;
},
addWidget:function(L,
M){this._add(L,
M);
},
addSpacer:function(){if(!this.__hm){this.__hm=new qx.ui.core.Spacer();
}else{this._remove(this.__hm);
}this._add(this.__hm);
},
addOpenButton:function(){this._add(this._getChildControl(a));
},
_onChangeOpen:function(N){if(this.isOpenable()){this.setOpen(N.getData());
}},
addIcon:function(){var O=this._getChildControl(c);
if(this.__hl){this._remove(O);
}this._add(O);
this.__hl=true;
},
addLabel:function(P){var Q=this._getChildControl(f);
if(this.__hk){this._remove(Q);
}
if(P){this.setLabel(P);
}else{Q.setContent(this.getLabel());
}this._add(Q);
this.__hk=true;
},
addState:function(R){arguments.callee.base.call(this,
R);
var S=this._getChildren();
for(var T=0,
U=S.length;T<U;T++){var V=S[T];
if(V.addState){S[T].addState(R);
}}},
removeState:function(R){arguments.callee.base.call(this,
R);
var S=this._getChildren();
for(var T=0,
U=S.length;T<U;T++){var V=S[T];
if(V.addState){S[T].removeState(R);
}}},
_applyIcon:function(W,
X){this._getChildControl(c).setSource(W);
},
_applyLabel:function(W,
X){this._getChildControl(f).setContent(W);
},
_applyOpen:function(W,
X){if(this.hasChildren()){this.getChildrenContainer().setVisibility(W?m:j);
}var Y=this._getChildControl(a,
true);
if(Y){Y.setOpen(W);
}W?this.addState(n):this.removeState(n);
},
isOpenable:function(){var ba=this.getOpenSymbolMode();
return (ba===o||ba===b&&this.hasChildren());
},
_shouldShowOpenSymbol:function(){var Y=this._getChildControl(a,
true);
if(!Y){return false;
}var K=this.getTree();
if(!K.getRootOpenClose()){if(K.getHideRoot()){if(K.getRoot()==this.getParent()){return false;
}}else{if(K.getRoot()==this){return false;
}}}return this.isOpenable();
},
_applyOpenSymbolMode:function(W,
X){this._updateIndent();
},
_updateIndent:function(){if(!this.getTree()){return;
}var bb=0;
var Y=this._getChildControl(a,
true);
if(Y){if(this._shouldShowOpenSymbol()){Y.show();
bb=Y.getSizeHint().width;
}else{Y.exclude();
}}this.__hm.setWidth((this.getLevel()+1)*this.getIndent()-bb);
},
_applyIndent:function(W,
X){this._updateIndent();
},
getLevel:function(){var K=this.getTree();
if(!K){return;
}var J=this;
var bc=-1;
while(J){J=J.getParent();
bc+=1;
}if(K.getHideRoot()){bc-=1;
}
if(!K.getRootOpenClose()){bc-=1;
}return bc;
},
syncWidget:function(){this._updateIndent();
},
getChildrenContainer:function(){if(!this.__hj){this.__hj=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?m:j});
}return this.__hj;
},
getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},
getChildren:function(){return this.__hi;
},
hasChildren:function(){return this.__hi?this.__hi.length>0:false;
},
getItems:function(bd,
be,
bf){if(bf!==false){var bg=[];
}else{var bg=[this];
}var bh=this.hasChildren()&&(be!==false||this.isOpen());
if(bh){var S=this.getChildren();
if(bd===false){bg=bg.concat(S);
}else{for(var T=0,
bi=S.length;T<bi;T++){bg=bg.concat(S[T].getItems(bd,
be,
false));
}}}return bg;
},
recursiveAddToWidgetQueue:function(){var S=this.getItems(true,
true,
false);
for(var T=0,
U=S.length;T<U;T++){qx.ui.core.queue.Widget.add(S[T]);
}},
__hn:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),
this);
}},
add:function(bj){var bk=this.getChildrenContainer();
var K=this.getTree();
for(var T=0,
U=arguments.length;T<U;T++){var J=arguments[T];
var bl=J.getParent();
if(bl){bl.remove(J);
}J.setParent(this);
var bm=this.hasChildren();
bk.add(J);
if(J.hasChildren()){bk.add(J.getChildrenContainer());
}this.__hi.push(J);
if(!bm){this.__hn();
}
if(K){J.recursiveAddToWidgetQueue();
K.fireNonBubblingEvent(g,
qx.event.type.Data,
[J]);
}}
if(K){qx.ui.core.queue.Widget.add(this);
}},
addAt:function(J,
bn){{};
if(bn==this.__hi.length){this.add(J);
return;
}var bl=J.getParent();
if(bl){bl.remove(J);
}var bk=this.getChildrenContainer();
J.setParent(this);
var bm=this.hasChildren();
var bo=this.__hi[bn];
bk.addBefore(J,
bo);
if(J.hasChildren()){bk.addAfter(J.getChildrenContainer(),
J);
}qx.lang.Array.insertAt(this.__hi,
J,
bn);
if(!bm){this.__hn();
}
if(this.getTree()){J.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},
addBefore:function(J,
bp){{};
this.addAt(J,
this.__hi.indexOf(bp));
},
addAfter:function(J,
bq){{};
this.addAt(J,
this.__hi.indexOf(bq)+1);
},
addAtBegin:function(J){this.addAt(J,
0);
},
remove:function(bj){for(var T=0,
U=arguments.length;T<U;T++){var J=arguments[T];
if(this.__hi.indexOf(J)==-1){this.warn("Cannot remove treeitem '"+J+"'. It is not a child of this tree item.");
return;
}var bk=this.getChildrenContainer();
if(J.hasChildren()){bk.remove(J.getChildrenContainer());
}qx.lang.Array.remove(this.__hi,
J);
J.setParent(null);
bk.remove(J);
}var K=this.getTree();
if(K){K.fireNonBubblingEvent(g,
qx.event.type.Data,
[J]);
}qx.ui.core.queue.Widget.add(this);
},
removeAt:function(bn){var br=this.__hi[bn];
if(br){this.remove(br);
}},
removeAll:function(){for(var T=this.__hi.length-1;T>=0;T--){this.remove(this.__hi[T]);
}}},
destruct:function(){this._disposeArray(B);
this._disposeObjects(A,
r);
}});
})();
(function(){var a="opened",
b="click",
c="mousedown",
d="Boolean",
f="qx.ui.tree.FolderOpenButton",
g="_applyOpen",
h="mouseup",
i="Space",
j="keypress",
k="changeOpen",
l="Enter";
qx.Class.define(f,
{extend:qx.ui.basic.Image,
include:qx.ui.core.MExecutable,
construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(j,
this._onKeyPress);
this.addListener(b,
this._onClick);
this.addListener(c,
this._stopPropagation,
this);
this.addListener(h,
this._stopPropagation,
this);
},
properties:{open:{check:d,
init:false,
event:k,
apply:g}},
members:{_applyOpen:function(m,
n){m?this.addState(a):this.removeState(a);
this.execute();
},
_onKeyPress:function(o){switch(o.getKeyIdentifier()){case l:case i:this.toggleOpen();
o.stopPropagation();
}},
_stopPropagation:function(o){o.stopPropagation();
},
_onClick:function(o){this.toggleOpen();
o.stopPropagation();
}}});
})();
(function(){var a="tree-folder",
b="qx.ui.tree.TreeFolder";
qx.Class.define(b,
{extend:qx.ui.tree.AbstractTreeItem,
construct:function(c){arguments.callee.base.call(this);
if(c){this.setLabel(c);
}},
properties:{appearance:{refine:true,
init:a}},
members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var a="article",
b="stateModified",
c="separator-vertical",
d="background-medium",
f="Posts",
g="bold",
h="_list",
j="loading",
k="_stack",
m="center",
n="feedreader.view.List",
o="_applyFeed",
p="single",
q="feedreader.model.Feed",
r="changeSelection",
s="middle",
t="_listLoadImage",
u="feedreader/images/loading66.gif",
v="loaded";
qx.Class.define(n,
{extend:qx.ui.core.Widget,
construct:function(w){arguments.callee.base.call(this);
var x=new qx.ui.layout.VBox();
x.setSeparator(c);
this._setLayout(x);
var y=new qx.ui.basic.Label(this.tr(f));
y.setBackgroundColor(d);
y.setPadding(5);
y.setAllowGrowX(true);
y.setFont(g);
this._add(y);
this._stack=new qx.ui.container.Stack();
this._add(this._stack,
{flex:1});
this._list=new qx.ui.form.List();
this._list.setDecorator(null);
this._list.setSelectionMode(p);
this._list.addListener(r,
this._onChangeSelectionView,
this);
this._stack.add(this._list);
this._listLoadImage=new qx.ui.container.Composite(new qx.ui.layout.HBox(0,
m));
loadImage=new qx.ui.basic.Image(u);
loadImage.setAlignY(s);
this._listLoadImage.add(loadImage);
this._stack.add(this._listLoadImage);
},
properties:{feed:{check:q,
nullable:true,
apply:o}},
members:{_applyFeed:function(z,
A){this._list.removeAll();
if(A){A.removeListener(b,
this._onFeedStateModified,
this);
}
if(z){z.addListener(b,
this._onFeedStateModified,
this);
this._updateFeedState();
}},
_onFeedStateModified:function(B){this._updateFeedState();
},
_updateFeedState:function(){var C=this.getFeed();
var D=C.getState();
if(D==v){this._list.removeAll();
this._stack.setSelected(this._list);
var E=C.getArticles();
var F=C.getSelected();
for(var G=0,
H=E.length;G<H;G++){var I=E[G];
var J=new qx.ui.form.ListItem(I.getTitle());
J.setUserData(a,
I);
this._list.add(J);
if(I==F){this._list.addToSelection(J);
}}}else if(D==j){this._stack.setSelected(this._listLoadImage);
}},
_onChangeSelectionView:function(B){var K=B.getData()[0];
if(K){var I=K.getUserData(a);
this.getFeed().setSelected(I);
}}},
destruct:function(){this._disposeObjects(h,
k,
t);
}});
})();
(function(){var a="Boolean",
b="qx.ui.container.Stack",
c="change",
d="_applyDynamic",
e="qx.ui.core.Widget",
f="_applySelected";
qx.Class.define(b,
{extend:qx.ui.core.Widget,
construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
},
properties:{dynamic:{check:a,
init:false,
apply:d},
selected:{check:e,
apply:f,
event:c,
nullable:true}},
members:{_applyDynamic:function(g){var h=this._getChildren();
var j=this.getSelected();
var k;
for(var m=0,
n=h.length;m<n;m++){k=h[m];
if(k!=j){if(g){h[m].exclude();
}else{h[m].hide();
}}}},
_applySelected:function(g,
o){if(o){if(this.isDynamic()){o.exclude();
}else{o.hide();
}}
if(g){g.show();
}},
add:function(p){this._add(p);
var j=this.getSelected();
if(!j){this.setSelected(p);
}else if(j!==p){if(this.isDynamic()){p.exclude();
}else{p.hide();
}}},
remove:function(p){this._remove(p);
if(this.getSelected()===p){var q=this._getChildren()[0];
if(q){this.setSelected(q);
}else{this.resetSelected();
}}},
indexOf:function(p){return this._indexOf(p);
},
getChildren:function(){return this._getChildren();
},
previous:function(){var j=this.getSelected();
var r=this._indexOf(j)-1;
var h=this._getChildren();
if(r<0){r=h.length-1;
}var s=h[r];
this.setSelected(s);
},
next:function(){var j=this.getSelected();
var r=this._indexOf(j)+1;
var h=this._getChildren();
var t=h[r]||h[0];
this.setSelected(t);
}}});
})();
(function(){var a="qx.event.type.Data",
b="horizontal",
c="changeValue",
d="vertical",
f="",
g=",",
h="qx.ui.form.List",
j="Boolean",
k="one",
m="action",
n="addChildWidget",
o="_applySpacing",
p="Enter",
q="__nz",
r="Integer",
s="list",
t="keyinput",
u="changeSelection",
v="addItem",
w="removeChildWidget",
x="_applyOrientation",
y="single",
z="keypress",
A="changeName",
B="String",
C="pane",
D="removeItem";
qx.Class.define(h,
{extend:qx.ui.core.AbstractScrollArea,
implement:qx.ui.form.IFormElement,
include:[qx.ui.core.MRemoteChildrenHandling,
qx.ui.core.MSelectionHandling],
construct:function(E){arguments.callee.base.call(this);
this.__nz=new qx.ui.container.Composite();
this.__nz.addListener(n,
this._onAddChild,
this);
this.__nz.addListener(w,
this._onRemoveChild,
this);
this._getChildControl(C).add(this.__nz);
if(E){this.setOrientation(b);
}else{this.initOrientation();
}this.addListener(z,
this._onKeyPress);
this.addListener(t,
this._onKeyInput);
this.addListener(u,
this._onChangeSelection);
this.__nA=f;
},
events:{addItem:a,
removeItem:a,
changeValue:a},
properties:{appearance:{refine:true,
init:s},
focusable:{refine:true,
init:true},
orientation:{check:[b,
d],
init:d,
apply:x},
spacing:{check:r,
init:0,
apply:o,
themeable:true},
enableInlineFind:{check:j,
init:true},
name:{check:B,
nullable:true,
event:A}},
members:{__nA:null,
__nB:null,
__nz:null,
SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,
getChildrenContainer:function(){return this.__nz;
},
_onAddChild:function(F){this.fireDataEvent(v,
F.getData());
},
_onRemoveChild:function(F){this.fireDataEvent(D,
F.getData());
},
getValue:function(){var G=this.getSelection();
var H=[];
var I;
for(var J=0,
K=G.length;J<K;J++){I=G[J].getValue();
if(I==null){I=G[J].getLabel();
}H.push(I);
}return H.join(g);
},
setValue:function(I){var L=I.split(g);
var H=[];
var M;
for(var J=0,
K=L.length;J<K;J++){M=this.findItem(L[J]);
if(M){H.push(M);
}}this.replaceSelection(H);
},
handleKeyPress:function(F){if(!this._onKeyPress(F)){this._getManager().handleKeyPress(F);
}},
_applyOrientation:function(I,
N){var E=I===b;
var O=E?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var P=this.__nz;
P.setLayout(O);
P.setAllowGrowX(!E);
P.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},
_applySpacing:function(I,
N){this.__nz.getLayout().setSpacing(I);
},
_onKeyPress:function(F){if(F.getKeyIdentifier()==p&&!F.isAltPressed()){var Q=this.getSelection();
for(var J=0;J<Q.length;J++){Q[J].fireEvent(m);
}return true;
}return false;
},
_onChangeSelection:function(){if(this.hasListener(c)){this.fireDataEvent(c,
this.getValue());
}},
_onKeyInput:function(F){if(!this.getEnableInlineFind()){return;
}var R=this.getSelectionMode();
if(!(R===y||R===k)){return;
}if(((new Date).valueOf()-this.__nB)>1000){this.__nA=f;
}this.__nA+=F.getChar();
var S=this.findItemByLabelFuzzy(this.__nA);
if(S){this.select(S);
}this.__nB=(new Date).valueOf();
F.preventDefault();
},
findItemByLabelFuzzy:function(T){T=T.toLowerCase();
var Q=this.getChildren();
for(var J=0,
K=Q.length;J<K;J++){var U=Q[J].getLabel();
if(U&&U.toLowerCase().indexOf(T)==0){return Q[J];
}}return null;
},
findItem:function(T){T=T.toLowerCase();
var Q=this.getChildren();
var M;
for(var J=0,
K=Q.length;J<K;J++){M=Q[J];
if(M.getFormValue().toLowerCase()==T){return M;
}}return null;
}},
destruct:function(){this._disposeObjects(q);
}});
})();
(function(){var a="listitem",
b="qx.ui.form.RadioGroup",
c="_applyManager",
d="qx.ui.form.ListItem",
e="qx.event.type.Event",
f="changeValue",
g="String";
qx.Class.define(d,
{extend:qx.ui.basic.Atom,
construct:function(h,
i,
j){arguments.callee.base.call(this,
h,
i);
if(j!=null){this.setValue(j);
}},
events:{"action":e},
properties:{appearance:{refine:true,
init:a},
manager:{check:b,
nullable:true,
apply:c},
value:{check:g,
nullable:true,
event:f}},
members:{_applyManager:function(j,
k){if(k){k.remove(this);
}
if(j){j.add(this);
}},
getFormValue:function(){var j=this.getValue();
if(j==null){j=this.getLabel();
}return j;
}}});
})();
(function(){var a="auto",
b="overflowX",
c="visible",
d="hidden",
e="scroll",
f="overflowY",
g="_applyOverflowX",
h="_applyOverflowY",
i="qx.ui.core.MNativeOverflow";
qx.Mixin.define(i,
{properties:{overflowX:{check:[d,
c,
e,
a],
nullable:true,
apply:g},
overflowY:{check:[d,
c,
e,
a],
nullable:true,
apply:h},
overflow:{group:[b,
f]}},
members:{_applyOverflowX:function(j){this.getContentElement().setStyle(b,
j);
},
_applyOverflowY:function(j){this.getContentElement().setStyle(f,
j);
}}});
})();
(function(){var a="",
b="color",
c="String",
d="none",
e="padding",
f="0px",
g="changeHtml",
h="_applyCssClass",
i="class",
j="qx.ui.embed.Html",
k="_applyHtml",
l="border",
m="html";
qx.Class.define(j,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MNativeOverflow],
construct:function(n){arguments.callee.base.call(this);
if(n!=null){this.setHtml(n);
}},
properties:{html:{check:c,
apply:k,
event:g,
nullable:true},
cssClass:{check:c,
init:a,
apply:h},
selectable:{refine:true,
init:true},
focusable:{refine:true,
init:true}},
members:{getFocusElement:function(){return this.getContentElement();
},
_applyHtml:function(o,
p){var q=this.getContentElement();
q.setAttribute(m,
o||a);
q.setStyle(e,
f);
q.setStyle(l,
d);
},
_applyCssClass:function(o,
p){this.getContentElement().setAttribute(i,
o);
},
_applyFont:function(o,
p){var r=o?qx.theme.manager.Font.getInstance().resolve(o).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(r);
},
_applyTextColor:function(o,
p){if(o){this.getContentElement().setStyle(b,
qx.theme.manager.Color.getInstance().resolve(o));
}else{this.getContentElement().removeStyle(b);
}}}});
})();
(function(){var a="</div>",
b="Verdana",
c="sans-serif",
d="<div class='description'>",
e="",
f="#FFFDED",
g="<a target='_blank' href='",
h="feedreader/css/reader.css",
j="<div class='date'>",
k="feedreader.view.Article",
l="_applyArticle",
m="_blank",
n="blogEntry",
o="<div class='container'>",
p="a",
q="Candara",
r="<h1 class='blog'>",
s="</h1>",
t="auto",
u="'>read more ...</a>",
v="Object";
qx.Class.define(k,
{extend:qx.ui.embed.Html,
construct:function(){arguments.callee.base.call(this);
this.setCssClass(n);
this.setOverflowY(t);
this.setBackgroundColor(f);
var w=new qx.bom.Font(14,
[q,
b,
c]);
w.setLineHeight(1.8);
this.setFont(w);
},
properties:{article:{apply:l,
nullable:true,
check:v}},
members:{_applyArticle:function(x,
y){var z=this.__tx();
this.setHtml(z);
qx.html.Element.flush();
var A=this.getContentElement().getDomElement();
var B=A.getElementsByTagName(p);
for(var C=0;C<B.length;C++){B[C].target=m;
}},
__tx:function(){var D=this.getArticle();
if(!D){return e;
}var z=new qx.util.StringBuilder();
z.add(o);
z.add(r,
D.getTitle(),
s);
z.add(j,
D.getDate(),
a);
z.add(d,
D.getContent(),
a);
z.add(g,
D.getLink(),
u);
z.add(a);
return z.get();
}},
defer:function(){qx.bom.Stylesheet.includeFile(h);
}});
})();
(function(){var a="mshtml",
b="<html><script><",
c="qx.List",
d="[List ",
e="]",
f="/script></html>",
g="qx.client",
h="htmlfile";
qx.Bootstrap.define(c,
{statics:{define:function(i,
j){if(!j){var j={};
}{};
if(qx.core.Variant.isSet(g,
a)){var k=new ActiveXObject(h);
k.open();
k.write(b+f);
k.close();
var l=k.parentWindow.Array;
l.__ls=k;
}else{var l=function(){Array.call(this);
this.push.apply(this,
arguments);
};
l.prototype=new Array;
}var m=qx.Bootstrap.createNamespace(i,
l,
false);
var n=l.prototype;
l.classname=i;
n.basename=l.basename=m;
l.toString=this.genericToString;
var o=j.statics;
if(o){for(var p in o){l[p]=o[p];
}}var q=j.members;
if(q){for(var p in q){n[p]=q[p];
}}if(j.defer){j.defer.self=l;
j.defer(l,
n);
}this.$$registry[i]=l;
},
genericToString:function(){return d+this.classname+e;
},
$$registry:qx.Bootstrap.$$registry,
__lt:null,
__lu:null}});
})();
(function(){var a="qx.util.StringBuilder",
b="";
qx.List.define(a,
{members:{clear:function(){this.length=0;
},
get:function(){return this.join(b);
},
add:null,
isEmpty:function(){return this.length===0;
}},
defer:function(c,
d){d.add=d.push;
d.toString=d.get;
}});
})();
(function(){var b="Unidentified",
c="+",
d="short",
f="keydown",
g="Control",
h="-",
j="PageUp",
k="Escape",
l="Boolean",
m="qx.event.type.Data",
n="_applyShortcut",
o="PrintScreen",
p="__nq",
q="NumLock",
r="5",
s="8",
t="execute",
u="Meta",
v="0",
w="PageDown",
x="Shift",
y="You can only specify one non modifier key!",
z="3",
A="/",
B="Delete",
C="String",
D="changeEnabled",
E="*",
F="__nr",
G="Not a valid key name for a command: ",
H="6",
I="4",
J="Alt",
K="2",
L="_applyEnabled",
M="1",
N="7",
O="qx.event.Command",
P="a",
Q="z",
R="9";
qx.Class.define(O,
{extend:qx.core.Object,
construct:function(S){arguments.callee.base.call(this);
this.__nq={};
this.__nr=null;
if(S!=null){this.setShortcut(S);
}{};
this.initEnabled();
},
events:{"execute":m},
properties:{enabled:{init:true,
check:l,
event:D,
apply:L},
shortcut:{check:C,
apply:n,
nullable:true}},
members:{execute:function(T){this.fireDataEvent(t,
T);
},
__ns:function(U){if(this.getEnabled()&&this.matchesKeyEvent(U)){this.execute(U.getTarget());
U.preventDefault();
U.stopPropagation();
}},
_applyEnabled:function(V,
W){if(V){qx.event.Registration.addListener(document.documentElement,
f,
this.__ns,
this);
}else{qx.event.Registration.removeListener(document.documentElement,
f,
this.__ns,
this);
}},
_applyShortcut:function(V,
W){if(V){this.__nq={};
this.__nr=null;
var X=V.split(/[-+\s]+/);
var Y=X.length;
for(var ba=0;ba<Y;ba++){var bb=this.__nu(X[ba]);
switch(bb){case g:case x:case u:case J:this.__nq[bb]=true;
break;
case b:var bc=G+X[ba];
this.error(bc);
throw bc;
default:if(this.__nr){var bc=y;
this.error(bc);
throw bc;
}this.__nr=bb;
}}}return true;
},
matchesKeyEvent:function(bd){var be=this.__nr;
if(!be){return ;
}if((this.__nq.Shift&&!bd.isShiftPressed())||(this.__nq.Control&&!bd.isCtrlPressed())||(this.__nq.Meta&&!bd.isMetaPressed())||(this.__nq.Alt&&!bd.isAltPressed())){return false;
}
if(be==bd.getKeyIdentifier()){return true;
}return false;
},
__nt:{esc:k,
ctrl:g,
print:o,
del:B,
pageup:j,
pagedown:w,
numlock:q,
numpad_0:v,
numpad_1:M,
numpad_2:K,
numpad_3:z,
numpad_4:I,
numpad_5:r,
numpad_6:H,
numpad_7:N,
numpad_8:s,
numpad_9:R,
numpad_divide:A,
numpad_multiply:E,
numpad_minus:h,
numpad_plus:c},
__nu:function(bf){var bg=qx.event.handler.Keyboard;
var bh=b;
if(bg.isValidKeyIdentifier(bf)){return bf;
}
if(bf.length==1&&bf>=P&&bf<=Q){return bf.toUpperCase();
}bf=bf.toLowerCase();
var bh=this.__nt[bf]||qx.lang.String.firstUp(bf);
if(bg.isValidKeyIdentifier(bh)){return bh;
}else{return b;
}},
toString:function(){var be=this.__nr;
var bi=[];
for(var bj in this.__nq){bi.push(qx.locale.Key.getKeyName(d,
bj));
}
if(be){bi.push(qx.locale.Key.getKeyName(d,
be));
}return bi.join(c);
}},
destruct:function(){this.setEnabled(false);
this._disposeFields(p,
F);
}});
})();
(function(){var a="Left",
b="Meta",
c="Pause",
d="End",
e="Down",
f="Home",
g="Apps",
h="Win",
i="Right",
j="Backspace",
k="Space",
l="Up",
m="Shift",
n="Enter",
o="Scroll",
p="Alt",
q="Escape",
r="key_full_Meta",
s="PrintScreen",
t="NumLock",
u="key_short_Alt",
v="key_short_Insert",
w="Del",
x="key_full_Enter",
y="key_full_Control",
z="qx.locale.Key",
A="Tabulator",
B="key_full_Space",
C="key_short_Meta",
D="key_short_PageUp",
E="key_short_Pause",
F="key_full_Down",
G="key_short_Apps",
H="key_short_Win",
I="key_full_Right",
J="key_short_Up",
K="key_full_PageDown",
L="key_full_Alt",
M="PgDn",
N="Esc",
O="key_full_Insert",
P="Ctrl",
Q="key_short_Space",
R="key_short_Backspace",
S="key_short_Home",
T="key_short_Down",
U="PgUp",
V="key_short_CapsLock",
W="PageUp",
X="key_full_Up",
Y="key_full_Home",
ba="key_full_Backspace",
bb="PageDown",
bc="CapsLock",
bd="Ins",
be="Control",
bf="key_short_PrintScreen",
bg="Tab",
bh="key_full_Apps",
bi="key_short_Tab",
bj="key_short_End",
bk="_",
bl="Caps",
bm="key_short_NumLock",
bn="Num",
bo="key_full_Scroll",
bp="key_short_Left",
bq="key_short_Scroll",
br="key_",
bs="key_full_Pause",
bt="key_short_Right",
bu="key_full_PrintScreen",
bv="key_full_Win",
bw="key_short_Shift",
bx="key_short_PageDown",
by="key_short_Enter",
bz="key_short_Control",
bA="Insert",
bB="key_short_Escape",
bC="key_full_Tab",
bD="Print",
bE="Delete",
bF="key_full_CapsLock",
bG="key_full_Escape",
bH="key_short_Delete",
bI="key_full_PageUp",
bJ="key_full_Shift",
bK="key_full_NumLock",
bL="key_full_Delete",
bM="key_full_End",
bN="key_full_Left";
qx.Class.define(z,
{statics:{getKeyName:function(bO,
bP,
bQ){{};
var bR=br+bO+bk+bP;
var bS=qx.locale.Manager.getInstance().translate(bR,
[],
bQ);
if(bS==bR){return qx.locale.Key._keyNames[bR]||bP;
}else{return bS;
}}},
defer:function(bT,
bU,
bV){var bW={};
var bX=qx.locale.Manager;
bW[bX.marktr(R)]=j;
bW[bX.marktr(bi)]=bg;
bW[bX.marktr(Q)]=k;
bW[bX.marktr(by)]=n;
bW[bX.marktr(bw)]=m;
bW[bX.marktr(bz)]=P;
bW[bX.marktr(u)]=p;
bW[bX.marktr(V)]=bl;
bW[bX.marktr(C)]=b;
bW[bX.marktr(bB)]=N;
bW[bX.marktr(bp)]=a;
bW[bX.marktr(J)]=l;
bW[bX.marktr(bt)]=i;
bW[bX.marktr(T)]=e;
bW[bX.marktr(D)]=U;
bW[bX.marktr(bx)]=M;
bW[bX.marktr(bj)]=d;
bW[bX.marktr(S)]=f;
bW[bX.marktr(v)]=bd;
bW[bX.marktr(bH)]=w;
bW[bX.marktr(bm)]=bn;
bW[bX.marktr(bf)]=bD;
bW[bX.marktr(bq)]=o;
bW[bX.marktr(E)]=c;
bW[bX.marktr(H)]=h;
bW[bX.marktr(G)]=g;
bW[bX.marktr(ba)]=j;
bW[bX.marktr(bC)]=A;
bW[bX.marktr(B)]=k;
bW[bX.marktr(x)]=n;
bW[bX.marktr(bJ)]=m;
bW[bX.marktr(y)]=be;
bW[bX.marktr(L)]=p;
bW[bX.marktr(bF)]=bc;
bW[bX.marktr(r)]=b;
bW[bX.marktr(bG)]=q;
bW[bX.marktr(bN)]=a;
bW[bX.marktr(X)]=l;
bW[bX.marktr(I)]=i;
bW[bX.marktr(F)]=e;
bW[bX.marktr(bI)]=W;
bW[bX.marktr(K)]=bb;
bW[bX.marktr(bM)]=d;
bW[bX.marktr(Y)]=f;
bW[bX.marktr(O)]=bA;
bW[bX.marktr(bL)]=bE;
bW[bX.marktr(bK)]=t;
bW[bX.marktr(bu)]=s;
bW[bX.marktr(bo)]=o;
bW[bX.marktr(bs)]=c;
bW[bX.marktr(bv)]=h;
bW[bX.marktr(bh)]=g;
bT._keyNames=bW;
}});
})();
(function(){var a="error",
b="http://resources.qooxdoo.org/proxy.php?mode=jsonp&proxy=",
c="feedreader.io.FeedLoader",
d="loading",
e="completed",
f="text/plain",
g="GET",
h="loaded",
j="singleton";
qx.Class.define(c,
{extend:qx.core.Object,
type:j,
members:{loadAll:function(k){var l=k.getFeeds();
for(t=0;t<l.length;t++){this.load(l[t]);
}},
load:function(m){m.setState(d);
var n,
o,
p;
n=b+encodeURIComponent(m.getUrl());
p=new qx.io.remote.Request(n,
g,
f);
p.setCrossDomain(true);
p.setTimeout(30000);
p.addListener(e,
this.__ty(m),
this);
p.send();
},
__ty:function(m){return function(q){var r=q.getContent();
if(r==null){this.warn("Empty feed content: "+m.getUrl());
m.setState(a);
}else{try{m.clearArticles();
var s=feedreader.io.FeedParser.parseFeed(r);
for(var t=0;t<s.length;t++){m.addArticle(s[t]);
}m.setState(h);
}catch(ex){m.setState(a);
this.warn("Could not parse feed: "+m.getUrl());
}}};
}}});
})();
(function(){var a="Boolean",
b="qx.event.type.Event",
c="queued",
d="String",
f="sending",
g="qx.io.remote.Response",
h="receiving",
i="aborted",
j="failed",
k="completed",
l="configured",
m="timeout",
n="GET",
o="Pragma",
p="nocache",
q="POST",
r="no-cache",
s="Cache-Control",
t="Content-Type",
u="text/plain",
v="application/xml",
w="application/json",
x="text/html",
y="application/x-www-form-urlencoded",
z="qx.io.remote.Exchange",
A="Integer",
B="X-Qooxdoo-Response-Type",
C="_formFields",
D="HEAD",
E="qx.io.remote.Request",
F="_parameters",
G="_applyResponseType",
H="_applyState",
I="text/javascript",
J="changeState",
K="PUT",
L="_applyProhibitCaching",
M="",
N="_requestHeaders",
O="_applyMethod",
P="DELETE";
qx.Class.define(E,
{extend:qx.core.Object,
construct:function(Q,
R,
S){arguments.callee.base.call(this);
this._requestHeaders={};
this._parameters={};
this._formFields={};
if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this._seqNum=++qx.io.remote.Request._seqNum;
},
events:{"created":b,
"configured":b,
"sending":b,
"receiving":b,
"completed":g,
"aborted":g,
"failed":g,
"timeout":g},
statics:{_seqNum:0},
properties:{url:{check:d,
init:M},
method:{check:[n,
q,
K,
D,
P],
apply:O,
init:n},
asynchronous:{check:a,
init:true},
data:{check:d,
nullable:true},
username:{check:d,
nullable:true},
password:{check:d,
nullable:true},
state:{check:[l,
c,
f,
h,
k,
i,
m,
j],
init:l,
apply:H,
event:J},
responseType:{check:[u,
I,
w,
v,
x],
init:u,
apply:G},
timeout:{check:A,
nullable:true},
prohibitCaching:{check:a,
init:true,
apply:L},
crossDomain:{check:a,
init:false},
fileUpload:{check:a,
init:false},
transport:{check:z,
nullable:true},
useBasicHttpAuth:{check:a,
init:false}},
members:{send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},
abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},
reset:function(){switch(this.getState()){case f:case h:this.error("Aborting already sent request!");
case c:this.abort();
break;
}},
isConfigured:function(){return this.getState()===l;
},
isQueued:function(){return this.getState()===c;
},
isSending:function(){return this.getState()===f;
},
isReceiving:function(){return this.getState()===h;
},
isCompleted:function(){return this.getState()===k;
},
isAborted:function(){return this.getState()===i;
},
isTimeout:function(){return this.getState()===m;
},
isFailed:function(){return this.getState()===j;
},
__lE:function(T){var U=T.clone();
U.setTarget(this);
this.dispatchEvent(U);
},
_onqueued:function(T){this.setState(c);
this.__lE(T);
},
_onsending:function(T){this.setState(f);
this.__lE(T);
},
_onreceiving:function(T){this.setState(h);
this.__lE(T);
},
_oncompleted:function(T){this.setState(k);
this.__lE(T);
this.dispose();
},
_onaborted:function(T){this.setState(i);
this.__lE(T);
this.dispose();
},
_ontimeout:function(T){this.setState(m);
this.__lE(T);
this.dispose();
},
_onfailed:function(T){this.setState(j);
this.__lE(T);
this.dispose();
},
_applyState:function(V,
W){{};
},
_applyProhibitCaching:function(V,
W){if(V){this.setParameter(p,
new Date().valueOf());
this.setRequestHeader(o,
r);
this.setRequestHeader(s,
r);
}else{this.removeParameter(p);
this.removeRequestHeader(o);
this.removeRequestHeader(s);
}},
_applyMethod:function(V,
W){if(V===q){this.setRequestHeader(t,
y);
}else{this.removeRequestHeader(t);
}},
_applyResponseType:function(V,
W){this.setRequestHeader(B,
V);
},
setRequestHeader:function(X,
Y){this._requestHeaders[X]=Y;
},
removeRequestHeader:function(X){delete this._requestHeaders[X];
},
getRequestHeader:function(X){return this._requestHeaders[X]||null;
},
getRequestHeaders:function(){return this._requestHeaders;
},
setParameter:function(X,
Y){this._parameters[X]=Y;
},
removeParameter:function(X){delete this._parameters[X];
},
getParameter:function(X){return this._parameters[X]||null;
},
getParameters:function(){return this._parameters;
},
setFormField:function(X,
Y){this._formFields[X]=Y;
},
removeFormField:function(X){delete this._formFields[X];
},
getFormField:function(X){return this._formFields[X]||null;
},
getFormFields:function(){return this._formFields;
},
getSequenceNumber:function(){return this._seqNum;
}},
destruct:function(){this.setTransport(null);
this._disposeFields(N,
F,
C);
}});
})();
(function(){var a="Integer",
b="sending",
c="failed",
d="timeout",
f="completed",
g="aborted",
h="_active",
j="_queue",
k="_applyEnabled",
l="Boolean",
m="interval",
n="qx.io.remote.RequestQueue",
o="_timer",
p="queued",
q="receiving",
r="singleton";
qx.Class.define(n,
{type:r,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._queue=[];
this._active=[];
this._totalRequests=0;
this._timer=new qx.event.Timer(500);
this._timer.addListener(m,
this._oninterval,
this);
},
properties:{enabled:{init:true,
check:l,
apply:k},
maxTotalRequests:{check:a,
nullable:true},
maxConcurrentRequests:{check:a,
init:3},
defaultTimeout:{check:a,
init:5000}},
members:{_debug:function(){var s;
},
_check:function(){this._debug();
if(this._active.length==0&&this._queue.length==0){this._timer.stop();
}if(!this.getEnabled()){return;
}if(this._active.length>=this.getMaxConcurrentRequests()||this._queue.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this._totalRequests>=this.getMaxTotalRequests()){return;
}var t=this._queue.shift();
var u=new qx.io.remote.Exchange(t);
this._totalRequests++;
this._active.push(u);
this._debug();
u.addListener(b,
t._onsending,
t);
u.addListener(q,
t._onreceiving,
t);
u.addListener(f,
t._oncompleted,
t);
u.addListener(g,
t._onaborted,
t);
u.addListener(d,
t._ontimeout,
t);
u.addListener(c,
t._onfailed,
t);
u.addListener(b,
this._onsending,
this);
u.addListener(f,
this._oncompleted,
this);
u.addListener(g,
this._oncompleted,
this);
u.addListener(d,
this._oncompleted,
this);
u.addListener(c,
this._oncompleted,
this);
u._start=(new Date).valueOf();
u.send();
if(this._queue.length>0){this._check();
}},
_remove:function(u){qx.lang.Array.remove(this._active,
u);
u.dispose();
this._check();
},
_activeCount:0,
_onsending:function(v){{};
},
_oncompleted:function(v){{};
this._remove(v.getTarget());
},
_oninterval:function(v){var w=this._active;
if(w.length==0){this._timer.stop();
return;
}var x=(new Date).valueOf();
var u;
var t;
var y=this.getDefaultTimeout();
var z;
var A;
for(var B=w.length-1;B>=0;B--){u=w[B];
t=u.getRequest();
if(t.isAsynchronous()){z=t.getTimeout();
if(z==0){continue;
}
if(z==null){z=y;
}A=x-u._start;
if(A>z){this.warn("Timeout: transport "+u.toHashCode());
this.warn(A+"ms > "+z+"ms");
u.timeout();
}}}},
_applyEnabled:function(C,
D){if(C){this._check();
}this._timer.setEnabled(C);
},
add:function(t){t.setState(p);
this._queue.push(t);
this._check();
if(this.getEnabled()){this._timer.start();
}},
abort:function(t){var u=t.getTransport();
if(u){u.abort();
}else if(qx.lang.Array.contains(this._queue,
t)){qx.lang.Array.remove(this._queue,
t);
}}},
destruct:function(){this._disposeArray(h);
this._disposeObjects(o);
this._disposeFields(j);
}});
})();
(function(){var a="sending",
b="completed",
c="receiving",
d="aborted",
f="failed",
g="timeout",
h="qx.io.remote.Response",
j="Connection dropped",
k="configured",
m="qx.event.type.Event",
n="Proxy authentication required",
o="qx.io.remote.transport.Abstract",
p="MSHTML-specific HTTP status code",
q="Not available",
r="Precondition failed",
s="Server error",
t="Moved temporarily",
u="qx.io.remote.Exchange",
v="Bad gateway",
w="Gone",
x="See other",
y="Partial content",
z="Server timeout",
A="qx.io.remote.transport.Script",
B="HTTP version not supported",
C="Unauthorized",
D="Multiple choices",
E="Payment required",
F="Not implemented",
G="Request-URL too large",
H="Length required",
I="_applyState",
J="changeState",
K="Not modified",
L="qx.io.remote.Request",
M="Connection closed by server",
N="Moved permanently",
O="_applyImplementation",
P="Method not allowed",
Q="Forbidden",
R="Use proxy",
S="Ok",
T="Not found",
U="Not acceptable",
V="Request time-out",
W="Bad request",
X="Conflict",
Y="No content",
ba="qx.io.remote.transport.XmlHttp",
bb="qx.io.remote.transport.Iframe",
bc="Request entity too large",
bd="Unknown status code",
be="Unsupported media type",
bf="Gateway time-out",
bg="created",
bh="Out of resources",
bi="undefined";
qx.Class.define(u,
{extend:qx.core.Object,
construct:function(bj){arguments.callee.base.call(this);
this.setRequest(bj);
bj.setTransport(this);
},
events:{"sending":m,
"receiving":m,
"completed":h,
"aborted":h,
"failed":h,
"timeout":h},
statics:{typesOrder:[ba,
bb,
A],
typesReady:false,
typesAvailable:{},
typesSupported:{},
registerType:function(bk,
bl){qx.io.remote.Exchange.typesAvailable[bl]=bk;
},
initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bl in qx.io.remote.Exchange.typesAvailable){var bm=qx.io.remote.Exchange.typesAvailable[bl];
if(bm.isSupported()){qx.io.remote.Exchange.typesSupported[bl]=bm;
}}qx.io.remote.Exchange.typesReady=true;
if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},
canHandle:function(bn,
bo,
bp){if(!qx.lang.Array.contains(bn.handles.responseTypes,
bp)){return false;
}
for(var bq in bo){if(!bn.handles[bq]){return false;
}}return true;
},
_nativeMap:{0:bg,
1:k,
2:a,
3:c,
4:b},
wasSuccessful:function(br,
bs,
bt){if(bt){switch(br){case null:case 0:return true;
case -1:return bs<4;
default:return typeof br===bi;
}}else{switch(br){case -1:{};
return bs<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bs!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(br>206&&br<300){return true;
}qx.log.Logger.debug(this,
"Unknown status code: "+br+" ("+bs+")");
return false;
}}},
statusCodeToString:function(br){switch(br){case -1:return q;
case 200:return S;
case 304:return K;
case 206:return y;
case 204:return Y;
case 300:return D;
case 301:return N;
case 302:return t;
case 303:return x;
case 305:return R;
case 400:return W;
case 401:return C;
case 402:return E;
case 403:return Q;
case 404:return T;
case 405:return P;
case 406:return U;
case 407:return n;
case 408:return V;
case 409:return X;
case 410:return w;
case 411:return H;
case 412:return r;
case 413:return bc;
case 414:return G;
case 415:return be;
case 500:return s;
case 501:return F;
case 502:return v;
case 503:return bh;
case 504:return bf;
case 505:return B;
case 12002:return z;
case 12029:return j;
case 12030:return j;
case 12031:return j;
case 12152:return M;
case 13030:return p;
default:return bd;
}}},
properties:{request:{check:L,
nullable:true},
implementation:{check:o,
nullable:true,
apply:O},
state:{check:[k,
a,
c,
b,
d,
g,
f],
init:k,
event:J,
apply:I}},
members:{send:function(){var bj=this.getRequest();
if(!bj){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bu=qx.io.remote.Exchange.typesOrder;
var bv=qx.io.remote.Exchange.typesSupported;
var bp=bj.getResponseType();
var bo={};
if(bj.getAsynchronous()){bo.asynchronous=true;
}else{bo.synchronous=true;
}
if(bj.getCrossDomain()){bo.crossDomain=true;
}
if(bj.getFileUpload()){bo.fileUpload=true;
}for(var bw in bj.getFormFields()){bo.programaticFormFields=true;
break;
}var bx,
by;
for(var bz=0,
bA=bu.length;bz<bA;bz++){bx=bv[bu[bz]];
if(bx){if(!qx.io.remote.Exchange.canHandle(bx,
bo,
bp)){continue;
}
try{{};
by=new bx;
this.setImplementation(by);
by.setUseBasicHttpAuth(bj.getUseBasicHttpAuth());
by.send();
return true;
}catch(ex){this.error("Request handler throws error");
this.error(ex);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bj);
},
abort:function(){var bB=this.getImplementation();
if(bB){{};
bB.abort();
}else{{};
this.setState(d);
}},
timeout:function(){var bB=this.getImplementation();
if(bB){this.warn("Timeout: implementation "+bB.toHashCode());
bB.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(g);
}if(this.getRequest()){this.getRequest().setTimeout(0);
}},
_onsending:function(bC){this.setState(a);
},
_onreceiving:function(bC){this.setState(c);
},
_oncompleted:function(bC){this.setState(b);
},
_onabort:function(bC){this.setState(d);
},
_onfailed:function(bC){this.setState(f);
},
_ontimeout:function(bC){this.setState(g);
},
_applyImplementation:function(bD,
bE){if(bE){bE.removeListener(a,
this._onsending,
this);
bE.removeListener(c,
this._onreceiving,
this);
bE.removeListener(b,
this._oncompleted,
this);
bE.removeListener(d,
this._onabort,
this);
bE.removeListener(g,
this._ontimeout,
this);
bE.removeListener(f,
this._onfailed,
this);
}
if(bD){var bj=this.getRequest();
bD.setUrl(bj.getUrl());
bD.setMethod(bj.getMethod());
bD.setAsynchronous(bj.getAsynchronous());
bD.setUsername(bj.getUsername());
bD.setPassword(bj.getPassword());
bD.setParameters(bj.getParameters());
bD.setFormFields(bj.getFormFields());
bD.setRequestHeaders(bj.getRequestHeaders());
bD.setData(bj.getData());
bD.setResponseType(bj.getResponseType());
bD.addListener(a,
this._onsending,
this);
bD.addListener(c,
this._onreceiving,
this);
bD.addListener(b,
this._oncompleted,
this);
bD.addListener(d,
this._onabort,
this);
bD.addListener(g,
this._ontimeout,
this);
bD.addListener(f,
this._onfailed,
this);
}},
_applyState:function(bD,
bE){{};
switch(bD){case a:this.fireEvent(a);
break;
case c:this.fireEvent(c);
break;
case b:case d:case g:case f:var bn=this.getImplementation();
if(!bn){break;
}
if(this.hasListener(bD)){var bF=qx.event.Registration.createEvent(bD,
qx.io.remote.Response);
if(bD==b){var bG=bn.getResponseContent();
bF.setContent(bG);
if(bG===null){{};
bD=f;
}}bF.setStatusCode(bn.getStatusCode());
bF.setResponseHeaders(bn.getResponseHeaders());
this.dispatchEvent(bF);
}this.setImplementation(null);
bn.dispose();
break;
}}},
settings:{"qx.ioRemoteDebug":false,
"qx.ioRemoteDebugData":false},
destruct:function(){var bn=this.getImplementation();
if(bn){this.setImplementation(null);
bn.dispose();
}this.setRequest(null);
}});
})();
(function(){var a="qx.event.type.Event",
b="String",
c="failed",
d="timeout",
e="created",
f="aborted",
g="sending",
h="configured",
i="receiving",
j="completed",
k="Object",
l="Boolean",
m="abstract",
n="_applyState",
o="changeState",
p="qx.io.remote.transport.Abstract";
qx.Class.define(p,
{type:m,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
events:{"created":a,
"configured":a,
"sending":a,
"receiving":a,
"completed":a,
"aborted":a,
"failed":a,
"timeout":a},
properties:{url:{check:b,
nullable:true},
method:{check:b,
nullable:true},
asynchronous:{check:l,
nullable:true},
data:{check:b,
nullable:true},
username:{check:b,
nullable:true},
password:{check:b,
nullable:true},
state:{check:[e,
h,
g,
i,
j,
f,
d,
c],
init:e,
event:o,
apply:n},
requestHeaders:{check:k,
nullable:true},
parameters:{check:k,
nullable:true},
formFields:{check:k,
nullable:true},
responseType:{check:b,
nullable:true},
useBasicHttpAuth:{check:l,
nullable:true}},
members:{send:function(){throw new Error("send is abstract");
},
abort:function(){{};
this.setState(f);
},
timeout:function(){{};
this.setState(d);
},
failed:function(){{};
this.setState(c);
},
setRequestHeader:function(q,
r){throw new Error("setRequestHeader is abstract");
},
getResponseHeader:function(q){throw new Error("getResponseHeader is abstract");
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
_applyState:function(s,
t){{};
switch(s){case e:this.fireEvent(e);
break;
case h:this.fireEvent(h);
break;
case g:this.fireEvent(g);
break;
case i:this.fireEvent(i);
break;
case j:this.fireEvent(j);
break;
case f:this.fireEvent(f);
break;
case c:this.fireEvent(c);
break;
case d:this.fireEvent(d);
break;
}return true;
}}});
})();
(function(){var a="qx.event.type.Event",
b="completed",
c="failed",
d="aborted",
f="",
g="timeout",
h="application/xml",
j="qx.io.remote.transport.XmlHttp",
k="application/json",
m="text/html",
n="qx.client",
o="receiving",
p="text/plain",
q="text/javascript",
r="sending",
t="&",
u="configured",
v="?",
w="=",
x="created",
y='Referer',
z='Basic ',
A="\n</pre>",
B="string",
C='Authorization',
D="<pre>Could not execute json: \n",
E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
F=':',
G="_req",
H="parseerror",
I="file:",
J="webkit",
K="object";
qx.Class.define(j,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
this._req=qx.io.remote.transport.XmlHttp.createRequestObject();
this._req.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
events:{"created":a,
"configured":a,
"sending":a,
"receiving":a,
"completed":a,
"aborted":a,
"failed":a,
"timeout":a},
statics:{handles:{synchronous:true,
asynchronous:true,
crossDomain:false,
fileUpload:false,
programaticFormFields:false,
responseTypes:[p,
q,
k,
h,
m]},
requestObjects:[],
requestObjectCount:0,
createRequestObject:qx.core.Variant.select(n,
{"default":function(){return new XMLHttpRequest;
},
"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),
isSupported:function(){return !!this.createRequestObject();
},
__lF:function(){}},
members:{_localRequest:false,
_lastReadyState:0,
getRequest:function(){return this._req;
},
send:function(){this._lastReadyState=0;
var L=this.getRequest();
var M=this.getMethod();
var N=this.getAsynchronous();
var O=this.getUrl();
var P=(window.location.protocol===I&&!(/^http(s){0,1}\:/.test(O)));
this._localRequest=P;
var Q=this.getParameters();
var R=[];
for(var S in Q){var T=Q[S];
if(T instanceof Array){for(var U=0;U<T.length;U++){R.push(encodeURIComponent(S)+w+encodeURIComponent(T[U]));
}}else{R.push(encodeURIComponent(S)+w+encodeURIComponent(T));
}}
if(R.length>0){O+=(O.indexOf(v)>=0?t:v)+R.join(t);
}var V=function(W){var X=E;
var Y=f;
var ba,
bb,
bc;
var bd,
be,
bf,
bg;
var U=0;
do{ba=W.charCodeAt(U++);
bb=W.charCodeAt(U++);
bc=W.charCodeAt(U++);
bd=ba>>2;
be=((ba&3)<<4)|(bb>>4);
bf=((bb&15)<<2)|(bc>>6);
bg=bc&63;
if(isNaN(bb)){bf=bg=64;
}else if(isNaN(bc)){bg=64;
}Y+=X.charAt(bd)+X.charAt(be)+X.charAt(bf)+X.charAt(bg);
}while(U<W.length);
return Y;
};
L.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){L.open(M,
O,
N);
L.setRequestHeader(C,
z+V(this.getUsername()+F+this.getPassword()));
}else{L.open(M,
O,
N,
this.getUsername(),
this.getPassword());
}}else{L.open(M,
O,
N);
}}catch(ex){this.error("Failed with exception: "+ex);
this.failed();
return;
}if(!qx.core.Variant.isSet(n,
J)){L.setRequestHeader(y,
window.location.href);
}var bh=this.getRequestHeaders();
for(var S in bh){L.setRequestHeader(S,
bh[S]);
}try{{};
L.send(this.getData());
}catch(ex){if(P){this.failedLocally();
}else{this.error("Failed to send data: "+ex,
"send");
this.failed();
}return;
}if(!N){this._onreadystatechange();
}},
failedLocally:function(){if(this.getState()===c){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},
_onreadystatechange:function(bi){switch(this.getState()){case b:case d:case c:case g:{};
return;
}var bj=this.getReadyState();
if(bj==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),
bj,
this._localRequest)){return this.failed();
}}while(this._lastReadyState<bj){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
getReadyState:function(){var bj=null;
try{bj=this._req.readyState;
}catch(ex){}return bj;
},
setRequestHeader:function(bk,
bl){this._req.setRequestHeader(bk,
bl);
},
getResponseHeader:function(bk){var bm=null;
try{this.getRequest().getResponseHeader(bk)||null;
}catch(ex){}return bm;
},
getStringResponseHeaders:function(){var bn=null;
try{var bo=this._req.getAllResponseHeaders();
if(bo){bn=bo;
}}catch(ex){}return bn;
},
getResponseHeaders:function(){var bn=this.getStringResponseHeaders();
var bp={};
if(bn){var bq=bn.split(/[\r\n]+/g);
for(var U=0,
br=bq.length;U<br;U++){var bs=bq[U].match(/^([^:]+)\s*:\s*(.+)$/i);
if(bs){bp[bs[1]]=bs[2];
}}}return bp;
},
getStatusCode:function(){var bt=-1;
try{bt=this.getRequest().status;
}catch(ex){}return bt;
},
getStatusText:function(){var bu=f;
try{bu=this.getRequest().statusText;
}catch(ex){}return bu;
},
getResponseText:function(){var bv=null;
var bw=this.getStatusCode();
var bj=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful(bw,
bj,
this._localRequest)){try{bv=this.getRequest().responseText;
}catch(ex){}}return bv;
},
getResponseXml:function(){var bx=null;
var bw=this.getStatusCode();
var bj=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful(bw,
bj,
this._localRequest)){try{bx=this.getRequest().responseXML;
}catch(ex){}}if(typeof bx==K&&bx!=null){if(!bx.documentElement){var by=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,
f);
bx.loadXML(by);
}if(!bx.documentElement){throw new Error("Missing Document Element!");
}
if(bx.documentElement.tagName==H){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bx;
},
getFetchedLength:function(){var bz=this.getResponseText();
return typeof bz==B?bz.length:0;
},
getResponseContent:function(){if(this.getState()!==b){{};
return null;
}{};
var bz=this.getResponseText();
switch(this.getResponseType()){case p:case m:{};
return bz;
case k:{};
try{if(bz&&bz.length>0){return qx.util.Json.parseQx(bz)||null;
}else{return null;
}}catch(ex){this.error("Could not execute json: ["+bz+"]",
ex);
return D+bz+A;
}case q:{};
try{if(bz&&bz.length>0){return window.eval(bz)||null;
}else{return null;
}}catch(ex){this.error("Could not execute javascript: ["+bz+"]",
ex);
return null;
}case h:bz=this.getResponseXml();
{};
return bz||null;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},
_applyState:function(T,
bA){{};
switch(T){case x:this.fireEvent(x);
break;
case u:this.fireEvent(u);
break;
case r:this.fireEvent(r);
break;
case o:this.fireEvent(o);
break;
case b:this.fireEvent(b);
break;
case c:this.fireEvent(c);
break;
case d:this.getRequest().abort();
this.fireEvent(d);
break;
case g:this.getRequest().abort();
this.fireEvent(g);
break;
}}},
defer:function(bB,
bC){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,
j);
},
destruct:function(){var L=this.getRequest();
if(L){L.onreadystatechange=qx.io.remote.transport.XmlHttp.__lF;
switch(L.readyState){case 1:case 2:case 3:L.abort();
}}this._disposeFields(G);
}});
})();
(function(){var a="qx.client",
b="",
c="mshtml",
d='<?xml version="1.0" encoding="utf-8"?>\n<',
e="MSXML2.DOMDocument.3.0",
f="qx.xml.Document",
g=" />",
h="SelectionLanguage",
j="'",
k="MSXML2.XMLHTTP.3.0",
m="MSXML2.XMLHTTP.6.0",
n=" xmlns='",
o="text/xml",
p="XPath",
q="MSXML2.DOMDocument.6.0";
qx.Bootstrap.define(f,
{statics:{DOMDOC:null,
XMLHTTP:null,
create:qx.core.Variant.select(a,
{"mshtml":function(r,
s){var t=new ActiveXObject(this.DOMDOC);
t.setProperty(h,
p);
if(s){var u=d;
u+=s;
if(r){u+=n+r+j;
}u+=g;
t.loadXML(u);
}return t;
},
"default":function(r,
s){return document.implementation.createDocument(r||b,
s||b,
null);
}}),
fromString:qx.core.Variant.select(a,
{"mshtml":function(u){var v=qx.xml.Document.create();
v.loadXML(u);
return v;
},
"default":function(u){var w=new DOMParser();
return w.parseFromString(u,
o);
}})},
defer:function(x){if(qx.core.Variant.isSet(a,
c)){var y=[q,
e];
var z=[m,
k];
for(var A=0,
B=y.length;A<B;A++){try{new ActiveXObject(y[A]);
new ActiveXObject(z[A]);
}catch(ex){continue;
}x.DOMDOC=y[A];
x.XMLHTTP=z[A];
break;
}}}});
})();
(function(){var c=",",
d="",
e="string",
f="null",
g='"',
h="qx.jsonDebugging",
j='\\u00',
k="new Date(Date.UTC(",
m="__lj",
n=")",
o='\\\\',
p='\\f',
q="Object",
r='\\"',
s="))",
t="}",
u="__lb",
v='(',
w=":",
x="{",
y='\\r',
z='\\t',
A="(",
B="__kY",
C="__lk",
D="[",
E="Array",
F="]",
G="qx.jsonEncodeUndefined",
H='\\b',
I="qx.util.Json",
J=')',
K='\\n',
L="Date",
M="__la",
N="__lc";
qx.Class.define(I,
{statics:{BEAUTIFYING_INDENT:"  ",
BEAUTIFYING_LINE_END:"\n",
__kX:{"function":B,
"boolean":M,
"number":u,
"string":N,
"object":m,
"undefined":C},
__kY:function(O){return String(O);
},
__la:function(O){return String(O);
},
__lb:function(O){return isFinite(O)?String(O):f;
},
__lc:function(O){var P;
if(/["\\\x00-\x1f]/.test(O)){P=O.replace(/([\x00-\x1f\\"])/g,
qx.util.Json.__le);
}else{P=O;
}return g+P+g;
},
__ld:{'\b':H,
'\t':z,
'\n':K,
'\f':p,
'\r':y,
'"':r,
'\\':o},
__le:function(Q,
R){var P=qx.util.Json.__ld[R];
if(P){return P;
}P=R.charCodeAt();
return j+Math.floor(P/16).toString(16)+(P%16).toString(16);
},
__lf:function(O){var S=[],
T=true,
U,
V;
var W=qx.util.Json.__ll;
S.push(D);
if(W){qx.util.Json.__lg+=qx.util.Json.BEAUTIFYING_INDENT;
S.push(qx.util.Json.__lg);
}
for(var X=0,
Y=O.length;X<Y;X++){V=O[X];
U=this.__kX[typeof V];
if(U){V=this[U](V);
if(typeof V==e){if(!T){S.push(c);
if(W){S.push(qx.util.Json.__lg);
}}S.push(V);
T=false;
}}}
if(W){qx.util.Json.__lg=qx.util.Json.__lg.substring(0,
qx.util.Json.__lg.length-qx.util.Json.BEAUTIFYING_INDENT.length);
S.push(qx.util.Json.__lg);
}S.push(F);
return S.join(d);
},
__lh:function(O){var ba=O.getUTCFullYear()+c+O.getUTCMonth()+c+O.getUTCDate()+c+O.getUTCHours()+c+O.getUTCMinutes()+c+O.getUTCSeconds()+c+O.getUTCMilliseconds();
return k+ba+s;
},
__li:function(O){var S=[],
T=true,
U,
V;
var W=qx.util.Json.__ll;
S.push(x);
if(W){qx.util.Json.__lg+=qx.util.Json.BEAUTIFYING_INDENT;
S.push(qx.util.Json.__lg);
}
for(var bb in O){V=O[bb];
U=this.__kX[typeof V];
if(U){V=this[U](V);
if(typeof V==e){if(!T){S.push(c);
if(W){S.push(qx.util.Json.__lg);
}}S.push(this.__lc(bb),
w,
V);
T=false;
}}}
if(W){qx.util.Json.__lg=qx.util.Json.__lg.substring(0,
qx.util.Json.__lg.length-qx.util.Json.BEAUTIFYING_INDENT.length);
S.push(qx.util.Json.__lg);
}S.push(t);
return S.join(d);
},
__lj:function(O){if(O){var bc=O.constructor.name;
if(O instanceof Array||bc==E){return this.__lf(O);
}else if(O instanceof Date||bc==L){return this.__lh(O);
}else if(O instanceof Object||bc==q){return this.__li(O);
}return d;
}return f;
},
__lk:function(O){if(qx.core.Setting.get(G)){return f;
}},
stringify:function(V,
W){this.__ll=W;
this.__lg=this.BEAUTIFYING_LINE_END;
var P=this[this.__kX[typeof V]](V);
if(typeof P!=e){P=null;
}if(qx.core.Setting.get(h)){qx.log.Logger.debug(this,
"JSON request: "+P);
}return P;
},
parse:function(bd){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bd.replace(/"(\\.|[^"\\])*"/g,
d))){throw new Error("Could not parse JSON string!");
}
try{return eval(A+bd+n);
}catch(ex){throw new Error("Could not evaluate JSON string: "+ex.message);
}},
parseQx:function(bd){if(qx.core.Setting.get(h)){qx.log.Logger.debug(this,
"JSON response: "+bd);
}var V=(bd&&bd.length>0)?eval(v+bd+J):null;
return V;
}},
settings:{"qx.jsonEncodeUndefined":true,
"qx.jsonDebugging":false}});
})();
(function(){var a="application/xml",
b="application/json",
c="text/html",
d="qx.client",
f="textarea",
g="none",
h="text/plain",
j="text/javascript",
k="",
l="completed",
m="?",
n="qx.io.remote.transport.Iframe",
o="&",
p="=",
q="gecko",
r="frame_",
s="aborted",
t="__lG",
u="_data_",
v="pre",
w="javascript:void(0)",
x="sending",
y="form",
z="failed",
A='<iframe name="',
B="mshtml",
C="form_",
D="__lH",
E='"></iframe>',
F="iframe",
G="timeout",
H="qx/static/blank.gif";
qx.Class.define(n,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
var I=(new Date).valueOf();
var J=r+I;
var K=C+I;
if(qx.core.Variant.isSet(d,
B)){this.__lG=document.createElement(A+J+E);
}else{this.__lG=document.createElement(F);
}this.__lG.src=w;
this.__lG.id=this.__lG.name=J;
this.__lG.onload=qx.lang.Function.bind(this._onload,
this);
this.__lG.style.display=g;
document.body.appendChild(this.__lG);
this.__lH=document.createElement(y);
this.__lH.target=J;
this.__lH.id=this.__lH.name=K;
this.__lH.style.display=g;
document.body.appendChild(this.__lH);
this._data=document.createElement(f);
this._data.id=this._data.name=u;
this.__lH.appendChild(this._data);
this.__lG.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
statics:{handles:{synchronous:false,
asynchronous:true,
crossDomain:false,
fileUpload:true,
programaticFormFields:true,
responseTypes:[h,
j,
b,
a,
c]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4}},
members:{__lI:0,
__lH:null,
__lG:null,
send:function(){var L=this.getMethod();
var M=this.getUrl();
var N=this.getParameters();
var O=[];
for(var P in N){var Q=N[P];
if(Q instanceof Array){for(var R=0;R<Q.length;R++){O.push(encodeURIComponent(P)+p+encodeURIComponent(Q[R]));
}}else{O.push(encodeURIComponent(P)+p+encodeURIComponent(Q));
}}
if(O.length>0){M+=(M.indexOf(m)>=0?o:m)+O.join(o);
}var S=this.getFormFields();
for(var P in S){var T=document.createElement(f);
T.name=P;
T.appendChild(document.createTextNode(S[P]));
this.__lH.appendChild(T);
}this.__lH.action=M;
this.__lH.method=L;
this._data.appendChild(document.createTextNode(this.getData()));
this.__lH.submit();
this.setState(x);
},
_onload:function(U){if(this.__lH.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
},
_onreadystatechange:function(U){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__lG.readyState]);
},
_switchReadyState:function(V){switch(this.getState()){case l:case s:case z:case G:this.warn("Ignore Ready State Change");
return;
}while(this.__lI<V){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lI]);
}},
setRequestHeader:function(W,
X){},
getResponseHeader:function(W){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return k;
},
getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__lG);
},
getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__lG);
},
getIframeBody:function(){return qx.bom.Iframe.getBody(this.__lG);
},
getIframeTextContent:function(){var Y=this.getIframeBody();
if(!Y){return null;
}
if(!Y.firstChild){return k;
}if(Y.firstChild.tagName&&Y.firstChild.tagName.toLowerCase()==v){return Y.firstChild.innerHTML;
}else{return Y.innerHTML;
}},
getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!==l){{};
return null;
}{};
var ba=this.getIframeTextContent();
switch(this.getResponseType()){case h:{};
return ba;
break;
case c:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case b:ba=this.getIframeHtmlContent();
{};
try{return ba&&ba.length>0?qx.util.Json.parseQx(ba):null;
}catch(ex){return this.error("Could not execute json: ("+ba+")",
ex);
}case j:ba=this.getIframeHtmlContent();
{};
try{return ba&&ba.length>0?window.eval(ba):null;
}catch(ex){return this.error("Could not execute javascript: ("+ba+")",
ex);
}case a:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function(bb,
bc,
bd){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,
n);
},
destruct:function(){if(this.__lG){this.__lG.onload=null;
this.__lG.onreadystatechange=null;
if(qx.core.Variant.isSet(d,
q)){this.__lG.src=qx.util.ResourceManager.toUri(H);
}document.body.removeChild(this.__lG);
}
if(this.__lH){document.body.removeChild(this.__lH);
}this._disposeFields(t,
D);
}});
})();
(function(){var a="qx.event.handler.Iframe",
b="load",
c="iframe";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{load:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:false,
onevent:function(d){qx.event.Registration.fireEvent(d,
b);
}},
members:{canHandleEvent:function(d,
e){return d.tagName.toLowerCase()===c;
},
registerEvent:function(d,
e,
f){},
unregisterEvent:function(d,
e,
f){}},
defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var a="0",
b="qx.client",
c="qx.bom.Iframe",
d="qx.event.handler.Iframe.onevent(this)",
e="true",
f="iframe",
g="body";
qx.Class.define(c,
{statics:{create:function(h,
i){var h=h?qx.lang.Object.copy(h):{};
h.onload=d;
h.frameBorder=a;
h.frameSpacing=a;
h.marginWidth=a;
h.marginHeight=a;
h.hspace=a;
h.vspace=a;
h.border=a;
h.allowTransparency=e;
return qx.bom.Element.create(f,
h,
i);
},
getWindow:qx.core.Variant.select(b,
{"mshtml|gecko":function(j){try{return j.contentWindow;
}catch(ex){return null;
}},
"default":function(j){try{var k=this.getDocument(j);
return k?k.defaultView:null;
}catch(ex){return null;
}}}),
getDocument:qx.core.Variant.select(b,
{"mshtml":function(j){try{var i=this.getWindow(j);
return i?i.document:null;
}catch(ex){return null;
}},
"default":function(j){try{return j.contentDocument;
}catch(ex){return null;
}}}),
getBody:function(j){var k=this.getDocument(j);
return k?k.getElementsByTagName(g)[0]:null;
},
setSource:function(j,
l){try{if(this.getWindow(j)){try{this.getWindow(j).location.replace(l);
}catch(ex){j.src=l;
}}else{j.src=l;
}}catch(ex){qx.log.Logger.warn("Iframe source could not be set!");
}},
queryCurrentUrl:function(j){var k=this.getDocument(j);
try{if(k&&k.location){return k.location.href;
}}catch(ex){}return null;
}}});
})();
(function(){var a="&",
b="=",
c="?",
d="application/json",
e="completed",
f="text/plain",
g="text/javascript",
h="qx.io.remote.transport.Script",
j="",
k="_ScriptTransport_data",
l="_responseContent",
m="script",
n="timeout",
o="_ScriptTransport_",
p="_element",
q="_ScriptTransport_id",
r="aborted",
s="utf-8",
t="failed";
qx.Class.define(h,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
var u=++qx.io.remote.transport.Script._uniqueId;
if(u>=2000000000){qx.io.remote.transport.Script._uniqueId=u=1;
}this._element=null;
this._uniqueId=u;
},
statics:{_uniqueId:0,
_instanceRegistry:{},
ScriptTransport_PREFIX:o,
ScriptTransport_ID_PARAM:q,
ScriptTransport_DATA_PARAM:k,
handles:{synchronous:false,
asynchronous:true,
crossDomain:true,
fileUpload:false,
programaticFormFields:false,
responseTypes:[f,
g,
d]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4},
_requestFinished:function(v,
w){var x=qx.io.remote.transport.Script._instanceRegistry[v];
if(x==null){{};
}else{x._responseContent=w;
x._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}}},
members:{_lastReadyState:0,
send:function(){var y=this.getUrl();
y+=(y.indexOf(c)>=0?a:c)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+b+this._uniqueId;
var z=this.getParameters();
var A=[];
for(var B in z){if(B.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var C=z[B];
if(C instanceof Array){for(var D=0;D<C.length;D++){A.push(encodeURIComponent(B)+b+encodeURIComponent(C[D]));
}}else{A.push(encodeURIComponent(B)+b+encodeURIComponent(C));
}}
if(A.length>0){y+=a+A.join(a);
}var E=this.getData();
if(E!=null){y+=a+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+b+encodeURIComponent(E);
}qx.io.remote.transport.Script._instanceRegistry[this._uniqueId]=this;
this._element=document.createElement(m);
this._element.charset=s;
this._element.src=y;
{};
document.body.appendChild(this._element);
},
_switchReadyState:function(F){switch(this.getState()){case e:case r:case t:case n:this.warn("Ignore Ready State Change");
return;
}while(this._lastReadyState<F){this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
}},
setRequestHeader:function(G,
H){},
getResponseHeader:function(G){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return j;
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!==e){{};
return null;
}{};
switch(this.getResponseType()){case f:case d:case g:{};
return this._responseContent||null;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function(I,
J,
K){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,
h);
qx.io.remote.ScriptTransport=I;
},
destruct:function(){if(this._element){delete qx.io.remote.transport.Script._instanceRegistry[this._uniqueId];
document.body.removeChild(this._element);
}this._disposeFields(p,
l);
}});
})();
(function(){var a="Integer",
b="Object",
c="qx.io.remote.Response";
qx.Class.define(c,
{extend:qx.event.type.Event,
properties:{state:{check:a,
nullable:true},
statusCode:{check:a,
nullable:true},
content:{nullable:true},
responseHeaders:{check:b,
nullable:true}},
members:{clone:function(d){var e=arguments.callee.base.call(this,
d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},
getResponseHeader:function(){var f=this.getResponseHeaders();
if(f){return f[vHeader]||null;
}return null;
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,
{members:{format:function(b){},
parse:function(c){}}});
})();
(function(){var a="(\\d\\d?)",
b="",
c="(",
d=")",
e="|",
f="abbreviated",
g="wide",
h="wildcard",
j="default",
k="literal",
l="'",
m="hour",
n="(\\d\\d?\\d?)",
o="ms",
p="-",
q="quoted_literal",
r='a',
s="+",
t="HHmmss",
u="long",
v="HH:mm:ss",
w='z',
x="sec",
y="day",
z="narrow",
A='Z',
B="min",
C=" ",
D="SSS",
E="h",
F="SS",
G="Z",
H="00",
I='K',
J="EEEE",
K="^",
L='y',
M="(\\d\\d(\\d\\d)?)",
N="(\\d\\d)",
O="K",
P="((\\+|\\-)\\d\\d:?\\d\\d)",
Q="a",
R="GMT",
S="S",
T="dd",
U="qx.util.format.DateFormat",
V="H",
W="__ij",
X="__ii",
Y="HH",
ba="EE",
bb="mm",
bc='h',
bd='s',
be='A',
bf="__ih",
bg="KK",
bh="ss",
bi='H',
bj='S',
bk="0",
bl="MMMM",
bm="d",
bn="__ip",
bo="([a-zA-Z]+)",
bp='k',
bq="m",
br='D',
bs="__ig",
bt="kk",
bu="hh",
bv="MM",
bw="yy",
bx="yyyy-MM-dd HH:mm:ss",
by="short",
bz='d',
bA="unkown",
bB='m',
bC=":00",
bD="k",
bE='M',
bF="MMM",
bG="s",
bH="M",
bI='w',
bJ="EEE",
bK="$",
bL="?",
bM='E',
bN="z",
bO="yyyy";
qx.Class.define(U,
{extend:qx.core.Object,
implement:qx.util.format.IFormat,
construct:function(bP,
bQ){arguments.callee.base.call(this);
if(!bQ){this.__ig=qx.locale.Manager.getInstance().getLocale();
}else{this.__ig=bQ;
}
if(bP!=null){this.__ih=bP.toString();
}else{this.__ih=qx.locale.Date.getDateFormat(u,
this.__ig)+C+qx.locale.Date.getDateTimeFormat(t,
v,
this.__ig);
}},
statics:{getDateTimeInstance:function(){var bR=qx.util.format.DateFormat;
var bP=qx.locale.Date.getDateFormat(u)+C+qx.locale.Date.getDateTimeFormat(t,
v);
if(bR._dateInstance==null||bR.__ih!=bP){bR._dateTimeInstance=new bR();
}return bR._dateTimeInstance;
},
getDateInstance:function(){var bR=qx.util.format.DateFormat;
var bP=qx.locale.Date.getDateFormat(by)+b;
if(bR._dateInstance==null||bR.__ih!=bP){bR._dateInstance=new bR(bP);
}return bR._dateInstance;
},
ASSUME_YEAR_2000_THRESHOLD:30,
LOGGING_DATE_TIME__format:bx,
AM_MARKER:"am",
PM_MARKER:"pm",
MEDIUM_TIMEZONE_NAMES:["GMT"],
FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},
members:{__ig:null,
__ih:null,
__ii:null,
__ij:null,
__ik:function(bS,
bT){var bU=b+bS;
while(bU.length<bT){bU=bk+bU;
}return bU;
},
__il:function(bV){var bW=new Date(bV.getTime());
var bX=bW.getDate();
while(bW.getMonth()!=0){bW.setDate(-1);
bX+=bW.getDate()+1;
}return bX;
},
__im:function(bV){return new Date(bV.getTime()+(3-((bV.getDay()+6)%7))*86400000);
},
__in:function(bV){var bY=this.__im(bV);
var ca=bY.getFullYear();
var cb=this.__im(new Date(ca,
0,
4));
return Math.floor(1.5+(bY.getTime()-cb.getTime())/86400000/7);
},
format:function(bV){var bR=qx.util.format.DateFormat;
var bQ=this.__ig;
var cc=bV.getFullYear();
var cd=bV.getMonth();
var ce=bV.getDate();
var cf=bV.getDay();
var cg=bV.getHours();
var ch=bV.getMinutes();
var ci=bV.getSeconds();
var cj=bV.getMilliseconds();
var ck=bV.getTimezoneOffset()/60;
this.__io();
var cl=b;
for(var cm=0;cm<this.__ip.length;cm++){var cn=this.__ip[cm];
if(cn.type==k){cl+=cn.text;
}else{var co=cn.character;
var cp=cn.size;
var cq=bL;
switch(co){case L:if(cp==2){cq=this.__ik(cc%100,
2);
}else if(cp==4){cq=cc;
}break;
case br:cq=this.__ik(this.__il(bV),
cp);
break;
case bz:cq=this.__ik(ce,
cp);
break;
case bI:cq=this.__ik(this.__in(bV),
cp);
break;
case bM:if(cp==2){cq=qx.locale.Date.getDayName(z,
cf,
bQ);
}else if(cp==3){cq=qx.locale.Date.getDayName(f,
cf,
bQ);
}else if(cp==4){cq=qx.locale.Date.getDayName(g,
cf,
bQ);
}break;
case bE:if(cp==1||cp==2){cq=this.__ik(cd+1,
cp);
}else if(cp==3){cq=qx.locale.Date.getMonthName(f,
cd,
bQ);
}else if(cp==4){cq=qx.locale.Date.getMonthName(g,
cd,
bQ);
}break;
case r:cq=(cg<12)?qx.locale.Date.getAmMarker(bQ):qx.locale.Date.getPmMarker(bQ);
break;
case bi:cq=this.__ik(cg,
cp);
break;
case bp:cq=this.__ik((cg==0)?24:cg,
cp);
break;
case I:cq=this.__ik(cg%12,
cp);
break;
case bc:cq=this.__ik(((cg%12)==0)?12:(cg%12),
cp);
break;
case bB:cq=this.__ik(ch,
cp);
break;
case bd:cq=this.__ik(ci,
cp);
break;
case bj:cq=this.__ik(cj,
cp);
break;
case w:if(cp==1){cq=R+((ck<0)?p:s)+this.__ik(ck)+bC;
}else if(cp==2){cq=bR.MEDIUM_TIMEZONE_NAMES[ck];
}else if(cp==3){cq=bR.FULL_TIMEZONE_NAMES[ck];
}break;
case A:cq=((ck<0)?p:s)+this.__ik(ck,
2)+H;
}cl+=cq;
}}return cl;
},
parse:function(cr){this.__iq();
var cs=this.__ii.regex.exec(cr);
if(cs==null){throw new Error("Date string '"+cr+"' does not match the date format: "+this.__ih);
}var ct={year:1970,
month:0,
day:1,
hour:0,
ispm:false,
min:0,
sec:0,
ms:0};
var cu=1;
for(var cm=0;cm<this.__ii.usedRules.length;cm++){var cv=this.__ii.usedRules[cm];
var cw=cs[cu];
if(cv.field!=null){ct[cv.field]=parseInt(cw,
10);
}else{cv.manipulator(ct,
cw);
}cu+=(cv.groups==null)?1:cv.groups;
}var bV=new Date(ct.year,
ct.month,
ct.day,
(ct.ispm)?(ct.hour+12):ct.hour,
ct.min,
ct.sec,
ct.ms);
if(ct.month!=bV.getMonth()||ct.year!=bV.getFullYear()){throw new Error("Error parsing date '"+cr+"': the value for day or month is too large");
}return bV;
},
__io:function(){if(this.__ip!=null){return;
}this.__ip=[];
var cx;
var cy=0;
var cz=b;
var bP=this.__ih;
var cA=j;
var cm=0;
while(cm<bP.length){var cB=bP.charAt(cm);
switch(cA){case q:if(cB==l){if(cm+1>=bP.length){cm++;
break;
}var cC=bP.charAt(cm+1);
if(cC==l){cz+=cB;
cm++;
}else{cm++;
cA=bA;
}}else{cz+=cB;
cm++;
}break;
case h:if(cB==cx){cy++;
cm++;
}else{this.__ip.push({type:h,
character:cx,
size:cy});
cx=null;
cy=0;
cA=j;
}break;
default:if((cB>=r&&cB<=w)||(cB>=be&&cB<=A)){cx=cB;
cA=h;
}else if(cB==l){if(cm+1>=bP.length){cz+=cB;
cm++;
break;
}var cC=bP.charAt(cm+1);
if(cC==l){cz+=cB;
cm++;
}cm++;
cA=q;
}else{cA=j;
}
if(cA!=j){if(cz.length>0){this.__ip.push({type:k,
text:cz});
cz=b;
}}else{cz+=cB;
cm++;
}break;
}}if(cx!=null){this.__ip.push({type:h,
character:cx,
size:cy});
}else if(cz.length>0){this.__ip.push({type:k,
text:cz});
}},
__iq:function(){if(this.__ii!=null){return ;
}var bP=this.__ih;
this.__ir();
this.__io();
var cD=[];
var cE=K;
for(var cF=0;cF<this.__ip.length;cF++){var cn=this.__ip[cF];
if(cn.type==k){cE+=qx.lang.String.escapeRegexpChars(cn.text);
}else{var co=cn.character;
var cp=cn.size;
var cG;
for(var cH=0;cH<this.__ij.length;cH++){var cv=this.__ij[cH];
if(co==cv.pattern.charAt(0)&&cp==cv.pattern.length){cG=cv;
break;
}}if(cG==null){var cI=b;
for(var cm=0;cm<cp;cm++){cI+=co;
}throw new Error("Malformed date format: "+bP+". Wildcard "+cI+" is not supported");
}else{cD.push(cG);
cE+=cG.regex;
}}}cE+=bK;
var cJ;
try{cJ=new RegExp(cE);
}catch(exc){throw new Error("Malformed date format: "+bP);
}this.__ii={regex:cJ,
"usedRules":cD,
pattern:cE};
},
__ir:function(){var bR=qx.util.format.DateFormat;
if(this.__ij!=null){return ;
}this.__ij=[];
var cK=function(ct,
cw){cw=parseInt(cw,
10);
if(cw<bR.ASSUME_YEAR_2000_THRESHOLD){cw+=2000;
}else if(cw<100){cw+=1900;
}ct.year=cw;
};
var cL=function(ct,
cw){ct.month=parseInt(cw,
10)-1;
};
var cM=function(ct,
cw){ct.ispm=(cw==bR.PM_MARKER);
};
var cN=function(ct,
cw){ct.hour=parseInt(cw,
10)%24;
};
var cO=function(ct,
cw){ct.hour=parseInt(cw,
10)%12;
};
var cP=function(ct,
cw){return;
};
var cQ=qx.locale.Date.getMonthNames(f,
this.__ig);
for(var cm=0;cm<cQ.length;cm++){cQ[cm]=qx.lang.String.escapeRegexpChars(cQ[cm].toString());
}var cR=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cQ.indexOf(cw);
};
var cS=qx.locale.Date.getMonthNames(g,
this.__ig);
for(var cm=0;cm<cS.length;cm++){cS[cm]=qx.lang.String.escapeRegexpChars(cS[cm].toString());
}var cT=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cS.indexOf(cw);
};
var cU=qx.locale.Date.getDayNames(z,
this.__ig);
for(var cm=0;cm<cU.length;cm++){cU[cm]=qx.lang.String.escapeRegexpChars(cU[cm].toString());
}var cV=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cU.indexOf(cw);
};
var cW=qx.locale.Date.getDayNames(f,
this.__ig);
for(var cm=0;cm<cW.length;cm++){cW[cm]=qx.lang.String.escapeRegexpChars(cW[cm].toString());
}var cX=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cW.indexOf(cw);
};
var cY=qx.locale.Date.getDayNames(g,
this.__ig);
for(var cm=0;cm<cY.length;cm++){cY[cm]=qx.lang.String.escapeRegexpChars(cY[cm].toString());
}var da=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cY.indexOf(cw);
};
this.__ij.push({pattern:bO,
regex:M,
groups:2,
manipulator:cK});
this.__ij.push({pattern:bw,
regex:N,
manipulator:cK});
this.__ij.push({pattern:bH,
regex:a,
manipulator:cL});
this.__ij.push({pattern:bv,
regex:a,
manipulator:cL});
this.__ij.push({pattern:bF,
regex:c+cQ.join(e)+d,
manipulator:cR});
this.__ij.push({pattern:bl,
regex:c+cS.join(e)+d,
manipulator:cT});
this.__ij.push({pattern:T,
regex:a,
field:y});
this.__ij.push({pattern:bm,
regex:a,
field:y});
this.__ij.push({pattern:ba,
regex:c+cU.join(e)+d,
manipulator:cV});
this.__ij.push({pattern:bJ,
regex:c+cW.join(e)+d,
manipulator:cX});
this.__ij.push({pattern:J,
regex:c+cY.join(e)+d,
manipulator:da});
this.__ij.push({pattern:Q,
regex:c+bR.AM_MARKER+e+bR.PM_MARKER+d,
manipulator:cM});
this.__ij.push({pattern:Y,
regex:a,
field:m});
this.__ij.push({pattern:V,
regex:a,
field:m});
this.__ij.push({pattern:bt,
regex:a,
manipulator:cN});
this.__ij.push({pattern:bD,
regex:a,
manipulator:cN});
this.__ij.push({pattern:bg,
regex:a,
field:m});
this.__ij.push({pattern:O,
regex:a,
field:m});
this.__ij.push({pattern:bu,
regex:a,
manipulator:cO});
this.__ij.push({pattern:E,
regex:a,
manipulator:cO});
this.__ij.push({pattern:bb,
regex:a,
field:B});
this.__ij.push({pattern:bq,
regex:a,
field:B});
this.__ij.push({pattern:bh,
regex:a,
field:x});
this.__ij.push({pattern:bG,
regex:a,
field:x});
this.__ij.push({pattern:D,
regex:n,
field:o});
this.__ij.push({pattern:F,
regex:n,
field:o});
this.__ij.push({pattern:S,
regex:n,
field:o});
this.__ij.push({pattern:G,
regex:P,
manipulator:cP});
this.__ij.push({pattern:bN,
regex:bo,
manipulator:cP});
}},
destruct:function(){this._disposeFields(bf,
bs,
bn,
X,
W);
}});
})();
(function(){var b="en_US",
c="@attributes",
d="feedreader.io.FeedParser",
e="",
f="yyyy-MM-d'T'HH:mm:ss'Z'",
g="EEE, d MMM yyyy HH:mm:ss Z",
h="EEE, d MMM yyyy HH:mm:ss z",
j="yyyy-MM-d'T'HH:mm:ssZ";
qx.Class.define(d,
{statics:{_rssDate1:new qx.util.format.DateFormat(g,
b),
_rssDate2:new qx.util.format.DateFormat(h,
b),
_atomDate1:new qx.util.format.DateFormat(f,
b),
_atomDate2:new qx.util.format.DateFormat(j,
b),
parseFeed:function(k){var m=[];
if(k){if(k.channel){m=this._normalizeRssFeed(k);
}else if(k.entry){m=this._normalizeAtomFeed(k);
}else{throw new Error("Unknown feed format!");
}}else{throw new Error("Invalid json: "+k);
}return m;
},
_normalizeRssFeed:function(k){var n=[];
for(var o=0,
p=k.channel.item,
q=p.length;o<q;o++){var r=p[o];
var s=r.pubDate;
try{s=this._rssDate1.parse(s);
}catch(ex){try{s=this._rssDate2.parse(s);
}catch(ex1){}}if(!(s instanceof Date)){throw new Error("RSS Date Error: "+s);
s=null;
}var t=new feedreader.model.Article();
t.set({title:r.title||null,
author:e,
date:s,
content:r.description||null,
link:r.link||null});
n.push(t);
}return n;
},
_normalizeAtomFeed:function(k){var n=[];
for(var o=0,
p=k.entry,
q=p.length;o<q;o++){var r=p[o];
var s=r.updated||r.published||r.created;
try{s=this._atomDate1.parse(s);
}catch(ex){try{s=this._atomDate2.parse(s);
}catch(ex2){}}if(!(s instanceof Date)){throw new Error("Atom Date Error: "+s);
s=null;
}var t=new feedreader.model.Article();
t.set({title:r.title||r.summary||null,
author:r.author?r.author.name||null:null,
date:s,
content:r.content||r.summary||null,
link:r.link[c]?r.link[c].href||null:null});
n.push(t);
}return n;
}}});
})();
(function(){var a="_",
b="thu",
c="sat",
d="cldr_day_",
e="cldr_month_",
f="wed",
g="fri",
h="tue",
j="mon",
k="sun",
l="short",
m="HH:mm",
n="HHmmsszz",
o="HHmm",
p="HHmmss",
q="cldr_date_format_",
r="HH:mm:ss zz",
s="full",
t="cldr_pm",
u="long",
v="medium",
w="cldr_am",
x="qx.locale.Date",
y="cldr_date_time_format_",
z="cldr_time_format_",
A="HH:mm:ss";
qx.Class.define(x,
{statics:{__is:qx.locale.Manager.getInstance(),
getAmMarker:function(B){return this.__is.localize(w,
[],
B);
},
getPmMarker:function(B){return this.__is.localize(t,
[],
B);
},
getDayNames:function(C,
B){{};
var D=[k,
j,
h,
f,
b,
g,
c];
var E=[];
for(var F=0;F<D.length;F++){var G=d+C+a+D[F];
E.push(this.__is.localize(G,
[],
B));
}return E;
},
getDayName:function(C,
H,
B){{};
var D=[k,
j,
h,
f,
b,
g,
c];
var G=d+C+a+D[H];
return this.__is.localize(G,
[],
B);
},
getMonthNames:function(C,
B){{};
var E=[];
for(var F=0;F<12;F++){var G=e+C+a+(F+1);
E.push(this.__is.localize(G,
[],
B));
}return E;
},
getMonthName:function(C,
I,
B){{};
var G=e+C+a+(I+1);
return this.__is.localize(G,
[],
B);
},
getDateFormat:function(J,
B){{};
var G=q+J;
return this.__is.localize(G,
[],
B);
},
getDateTimeFormat:function(K,
L,
B){var G=y+K;
var M=this.__is.localize(G,
[],
B);
if(M==G){M=L;
}return M;
},
getTimeFormat:function(J,
B){{};
var G=z+J;
var M=this.__is.localize(G,
[],
B);
if(M!=G){return M;
}
switch(J){case l:case v:return qx.locale.Date.getDateTimeFormat(o,
m);
case u:return qx.locale.Date.getDateTimeFormat(p,
A);
case s:return qx.locale.Date.getDateTimeFormat(n,
r);
default:throw new Error("This case should never happen.");
}},
getWeekStart:function(B){var N={"MV":5,
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
"MW":0,
"NG":0,
"TJ":0};
var O=qx.locale.Date._getTerritory(B);
return N[O]!=null?N[O]:1;
},
getWeekendStart:function(B){var P={"EG":5,
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
var O=qx.locale.Date._getTerritory(B);
return P[O]!=null?P[O]:6;
},
getWeekendEnd:function(B){var Q={"AE":5,
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
var O=qx.locale.Date._getTerritory(B);
return Q[O]!=null?Q[O]:0;
},
isWeekend:function(H,
B){var P=qx.locale.Date.getWeekendStart(B);
var Q=qx.locale.Date.getWeekendEnd(B);
if(Q>P){return ((H>=P)&&(H<=Q));
}else{return ((H>=P)||(H<=Q));
}},
_getTerritory:function(B){if(B){var O=B.split(a)[1]||B;
}else{O=this.__is.getTerritory()||this.__is.getLanguage();
}return O.toUpperCase();
}}});
})();
(function(){var a="dataModified",
b="String",
c="Date",
d="feedreader.model.Article";
qx.Class.define(d,
{extend:qx.core.Object,
properties:{title:{check:b,
event:a},
author:{check:b,
nullable:true,
event:a},
date:{check:c,
event:a},
content:{check:b,
event:a},
link:{check:b,
event:a}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,
{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},
getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var a="resize",
b="Boolean",
c="nw-resize",
d="mouseup",
f="mousedown",
g="w-resize",
h="__jM",
i="losecapture",
j="se-resize",
k="resize-frame",
l="ne-resize",
m="n-resize",
n="sw-resize",
o="mouseout",
p="s-resize",
q="mousemove",
r="move",
s="maximized",
t="Integer",
u="e-resize",
v="qx.ui.core.MResizable";
qx.Mixin.define(v,
{construct:function(){this.addListener(f,
this.__jW,
this,
true);
this.addListener(d,
this.__jX,
this);
this.addListener(q,
this.__ka,
this);
this.addListener(o,
this.__kb,
this);
this.addListener(i,
this.__jY,
this);
},
properties:{resizable:{check:b,
init:true},
resizeAllEdges:{check:b,
init:true},
resizeSensitivity:{check:t,
init:5},
useResizeFrame:{check:b,
init:true}},
members:{__jM:null,
__jN:null,
__jO:null,
__jP:null,
__jQ:null,
__jR:function(){var w=this.__jM;
if(!w){w=this.__jM=new qx.ui.core.Widget();
w.setAppearance(k);
w.exclude();
qx.core.Init.getApplication().getRoot().add(w);
}return w;
},
__jS:function(){var x=this.__jQ;
var w=this.__jR();
w.setUserBounds(x.left,
x.top,
x.width,
x.height);
w.show();
w.setZIndex(this.getZIndex()+1);
},
__jT:function(y){var z=this.__jN;
var A=this.getSizeHint();
var B=this.__jQ;
var C=B.width;
var D=B.height;
var E=B.left;
var F=B.top;
var G;
if(z&1||z&2){G=y.getDocumentTop()-this.__jP;
if(z&1){D-=G;
}else{D+=G;
}
if(D<A.minHeight){D=A.minHeight;
}else if(D>A.maxHeight){D=A.maxHeight;
}
if(z&1){F+=B.height-D;
}}if(z&4||z&8){G=y.getDocumentLeft()-this.__jO;
if(z&4){C-=G;
}else{C+=G;
}
if(C<A.minWidth){C=A.minWidth;
}else if(C>A.maxWidth){C=A.maxWidth;
}
if(z&4){E+=B.width-C;
}}return {left:E,
top:F,
width:C,
height:D};
},
__jU:{1:m,
2:p,
4:g,
8:u,
5:c,
6:n,
9:l,
10:j},
__jV:function(y){if(!this.getResizable()){return;
}var H=this.getContentLocation();
var I=this.getResizeAllEdges();
var J=this.getResizeSensitivity();
var K=y.getDocumentLeft();
var L=y.getDocumentTop();
var z=0;
if(I&&Math.abs(H.top-L)<J){z+=1;
}else if(Math.abs(H.bottom-L)<J){z+=2;
}
if(I&&Math.abs(H.left-K)<J){z+=4;
}else if(Math.abs(H.right-K)<J){z+=8;
}this.__jN=z;
},
__jW:function(y){if(!this.__jN){return;
}this.addState(a);
this.capture();
this.__jO=y.getDocumentLeft();
this.__jP=y.getDocumentTop();
var M=this.getContainerLocation();
var x=this.getBounds();
this.__jQ={top:M.top,
left:M.left,
width:x.width,
height:x.height};
if(this.getUseResizeFrame()){this.__jS();
}y.stop();
},
__jX:function(y){if(!this.__jN){return;
}if(this.getUseResizeFrame()){this.__jR().exclude();
}var x=this.__jT(y);
this.setWidth(x.width);
this.setHeight(x.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:x.left,
top:x.top});
}this.__jN=0;
this.removeState(a);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
},
__jY:function(y){if(!this.__jN){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(r);
if(this.getUseResizeFrame()){this.__jR().exclude();
}},
__ka:function(y){if(this.hasState(a)){var x=this.__jT(y);
if(this.getUseResizeFrame()){var w=this.__jR();
w.setUserBounds(x.left,
x.top,
x.width,
x.height);
}else{this.setWidth(x.width);
this.setHeight(x.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:x.left,
top:x.top});
}}y.stop();
}else if(!this.hasState(s)){this.__jV(y);
var z=this.__jN;
var N=this.getApplicationRoot();
if(z){var O=this.__jU[z];
this.setCursor(O);
N.setGlobalCursor(O);
}else if(this.getCursor()){this.resetCursor();
N.resetGlobalCursor();
}}},
__kb:function(y){if(this.getCursor()&&!this.hasState(a)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},
destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var a="move",
b="Boolean",
c="__ke",
d="mouseup",
f="mousedown",
g="__kd",
h="losecapture",
i="qx.ui.core.MMovable",
j="mousemove",
k="__kc",
l="maximized",
m="move-frame";
qx.Mixin.define(i,
{properties:{movable:{check:b,
init:true},
useMoveFrame:{check:b,
init:false}},
members:{__kc:null,
__kd:null,
__ke:null,
__kf:null,
__kg:null,
_activateMoveHandle:function(n){if(this.__kc){throw new Error("The move handle could not be redefined!");
}this.__kc=n;
n.addListener(f,
this._onMoveMouseDown,
this);
n.addListener(d,
this._onMoveMouseUp,
this);
n.addListener(j,
this._onMoveMouseMove,
this);
n.addListener(h,
this.__kk,
this);
},
__kh:function(){var o=this.__kd;
if(!o){o=this.__kd=new qx.ui.core.Widget();
o.setAppearance(m);
o.exclude();
qx.core.Init.getApplication().getRoot().add(o);
}return o;
},
__ki:function(){var p=this.getBounds();
var o=this.__kh();
o.setUserBounds(p.left,
p.top,
p.width,
p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},
__kj:function(q){var r=this.__ke;
var s=Math.max(r.left,
Math.min(r.right,
q.getDocumentLeft()));
var t=Math.max(r.top,
Math.min(r.bottom,
q.getDocumentTop()));
return {left:this.__kf+s,
top:this.__kg+t};
},
_onMoveMouseDown:function(q){if(!this.getMovable()||this.hasState(l)){return;
}var u=this.getLayoutParent();
var v=u.getContentLocation();
var w=u.getBounds();
this.__ke={left:v.left,
top:v.top,
right:v.left+w.width,
bottom:v.top+w.height};
var x=this.getContainerLocation();
this.__kf=x.left-q.getDocumentLeft();
this.__kg=x.top-q.getDocumentTop();
this.addState(a);
this.__kc.capture();
if(this.getUseMoveFrame()){this.__ki();
}q.stop();
},
_onMoveMouseMove:function(q){if(!this.hasState(a)){return;
}var y=this.__kj(q);
if(this.getUseMoveFrame()){this.__kh().setDomPosition(y.left,
y.top);
}else{this.setDomPosition(y.left,
y.top);
}},
_onMoveMouseUp:function(q){if(!this.hasState(a)){return;
}this.removeState(a);
this.__kc.releaseCapture();
var y=this.__kj(q);
this.setLayoutProperties({left:y.left,
top:y.top});
if(this.getUseMoveFrame()){this.__kh().exclude();
}},
__kk:function(q){if(!this.hasState(a)){return;
}this.removeState(a);
if(this.getUseMoveFrame()){this.__kh().exclude();
}}},
destruct:function(){this._disposeObjects(g,
k);
this._disposeFields(c);
}});
})();
(function(){var a="qx.ui.window.IWindowManager";
qx.Interface.define(a,
{members:{setDesktop:function(b){this.assertInterface(b,
qx.ui.window.IDesktop);
},
changeActiveWindow:function(c,
d){},
updateStack:function(){},
bringToFront:function(e){this.assertInstance(e,
qx.ui.window.Window);
},
sendToBack:function(e){this.assertInstance(e,
qx.ui.window.Window);
}}});
})();
(function(){var a="__kr",
b="qx.ui.window.Manager";
qx.Class.define(b,
{extend:qx.core.Object,
implement:qx.ui.window.IWindowManager,
members:{__kr:null,
setDesktop:function(c){this.__kr=c;
this.updateStack();
},
changeActiveWindow:function(d,
e){this.bringToFront(d);
},
_minZIndex:1e5,
updateStack:function(){qx.ui.core.queue.Widget.add(this);
},
syncWidget:function(){this.__kr.unblockContent();
var f=this.__kr.getWindows();
var g=this._minZIndex-1;
var h=false;
var j,
k;
for(var m=0,
n=f.length;m<n;m++){j=f[m];
if(!j.isVisible()){continue;
}g+=2;
j.setZIndex(g);
if(j.getModal()){this.__kr.blockContent(g-1);
}h=h||j.isActive();
k=j;
}
if(!h&&k){k.setActive(true);
}},
bringToFront:function(j){var f=this.__kr.getWindows();
var o=qx.lang.Array.remove(f,
j);
if(o){f.push(j);
this.updateStack();
}},
sendToBack:function(j){var f=this.__kr.getWindows();
var o=qx.lang.Array.remove(f,
j);
if(o){f.unshift(j);
this.updateStack();
}}},
destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var a="Boolean",
b="captionbar",
c="qx.event.type.Event",
d="maximized",
f="maximize-button",
g="_applyCaptionBarChange",
h="restore-button",
i="minimize-button",
j="close-button",
k="execute",
l="title",
m="icon",
n="pane",
o="statusbar",
p="statusbar-text",
q="mousedown",
r="String",
s="active",
t="beforeClose",
u="beforeMinimize",
v="changeStatus",
w="changeIcon",
x="excluded",
y="_applyCaption",
z="_applyActive",
A="beforeRestore",
B="minimize",
C="dblclick",
D="changeModal",
E="spacer",
F="_applyShowStatusbar",
G="click",
H="_applyStatus",
I="qx.ui.window.Window",
J="changeCaption",
K="mouseup",
L="_applyIcon",
M="beforeMaximize",
N="maximize",
O="restore",
P="window",
Q="close",
R="changeActive";
qx.Class.define(I,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MRemoteChildrenHandling,
qx.ui.core.MRemoteLayoutHandling,
qx.ui.core.MResizable,
qx.ui.core.MMovable,
qx.ui.core.MBlocker,
qx.ui.core.MContentPadding],
construct:function(S,
T){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(b);
this._createChildControl(n);
if(T!=null){this.setIcon(T);
}
if(S!=null){this.setCaption(S);
}this._updateCaptionBar();
this.addListener(q,
this._onWindowEventStop);
this.addListener(K,
this._onWindowEventStop);
this.addListener(G,
this._onWindowEventStop);
this.addListener(q,
this._onWindowMouseDown,
this,
true);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},
statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},
events:{"beforeClose":c,
"close":c,
"beforeMinimize":c,
"minimize":c,
"beforeMaximize":c,
"maximize":c,
"beforeRestore":c,
"restore":c},
properties:{appearance:{refine:true,
init:P},
visibility:{refine:true,
init:x},
focusable:{refine:true,
init:true},
active:{check:a,
init:false,
apply:z,
event:R},
modal:{check:a,
init:false,
event:D},
caption:{apply:y,
event:J,
nullable:true},
icon:{check:r,
nullable:true,
apply:L,
event:w,
themeable:true},
status:{check:r,
nullable:true,
apply:H,
event:v},
showClose:{check:a,
init:true,
apply:g,
themeable:true},
showMaximize:{check:a,
init:true,
apply:g,
themeable:true},
showMinimize:{check:a,
init:true,
apply:g,
themeable:true},
allowClose:{check:a,
init:true,
apply:g},
allowMaximize:{check:a,
init:true,
apply:g},
allowMinimize:{check:a,
init:true,
apply:g},
showStatusbar:{check:a,
init:false,
apply:F}},
members:{__ks:null,
__kt:null,
getChildrenContainer:function(){return this._getChildControl(n);
},
_forwardStates:{active:true,
maximized:true},
setLayoutParent:function(U){{};
arguments.callee.base.call(this,
U);
},
_createChildControlImpl:function(V){var W;
switch(V){case o:W=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(W);
W.add(this._getChildControl(p));
break;
case p:W=new qx.ui.basic.Label();
W.setContent(this.getStatus());
break;
case n:W=new qx.ui.container.Composite();
this._add(W,
{flex:1});
break;
case b:var X=new qx.ui.layout.Grid();
X.setColumnFlex(2,
1);
X.setRowFlex(0,
1);
W=new qx.ui.container.Composite(X);
this._add(W);
W.addListener(C,
this._onCaptionMouseDblClick,
this);
this._activateMoveHandle(W);
break;
case m:W=new qx.ui.basic.Image(this.getIcon());
this._getChildControl(b).add(W,
{row:0,
column:0});
break;
case l:W=new qx.ui.basic.Label(this.getCaption());
this._getChildControl(b).add(W,
{row:0,
column:1});
break;
case E:W=new qx.ui.core.Spacer();
this._getChildControl(b).add(W,
{row:0,
column:2});
break;
case i:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(k,
this._onMinimizeButtonClick,
this);
this._getChildControl(b).add(W,
{row:0,
column:3});
break;
case h:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(k,
this._onRestoreButtonClick,
this);
this._getChildControl(b).add(W,
{row:0,
column:4});
break;
case f:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(k,
this._onMaximizeButtonClick,
this);
this._getChildControl(b).add(W,
{row:0,
column:5});
break;
case j:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(k,
this._onCloseButtonClick,
this);
this._getChildControl(b).add(W,
{row:0,
column:6});
break;
}return W||arguments.callee.base.call(this,
V);
},
_updateCaptionBar:function(){var Y;
if(this.getIcon()){this._showChildControl(m);
}else{this._excludeChildControl(m);
}
if(this.getCaption()){this._showChildControl(l);
}else{this._excludeChildControl(l);
}
if(this.getShowMinimize()){this._showChildControl(i);
Y=this._getChildControl(i);
this.getAllowMinimize()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(i);
}
if(this.getShowMaximize()){if(this.hasState(d)){this._showChildControl(h);
this._excludeChildControl(f);
}else{this._showChildControl(f);
this._excludeChildControl(h);
}Y=this._getChildControl(f);
this.getAllowMaximize()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(f);
this._excludeChildControl(h);
}
if(this.getShowClose()){this._showChildControl(j);
Y=this._getChildControl(j);
this.getAllowClose()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(j);
}},
close:function(){if(this.fireNonBubblingEvent(t,
qx.event.type.Event,
[false,
true])){this.hide();
this.fireEvent(Q);
}},
open:function(){this.show();
this.setActive(true);
this.focus();
},
center:function(){var U=this.getLayoutParent();
if(U){var ba=U.getBounds();
if(ba){var bb=this.getSizeHint();
var bc=Math.round((ba.width-bb.width)/2);
var bd=Math.round((ba.height-bb.height)/2);
this.moveTo(bc,
bd);
return;
}}this.warn("Centering depends on parent bounds!");
},
maximize:function(){var U=this.getLayoutParent();
if(!U){return;
}
if(U.supportsMaximize()){if(this.fireNonBubblingEvent(M,
qx.event.type.Event,
[false,
true])){var be=this.getLayoutProperties();
this.__kt=be.left;
this.__ks=be.top;
this.setLayoutProperties({left:null,
top:null,
edge:0});
this.addState(d);
this._updateCaptionBar();
this.fireEvent(N);
}}},
minimize:function(){if(this.fireNonBubblingEvent(u,
qx.event.type.Event,
[false,
true])){this.hide();
this.fireEvent(B);
}},
restore:function(){if(!this.hasState(d)){return;
}
if(this.fireNonBubblingEvent(A,
qx.event.type.Event,
[false,
true])){var bc=this.__kt;
var bd=this.__ks;
this.setLayoutProperties({edge:null,
left:bc,
top:bd});
this.removeState(d);
this._updateCaptionBar();
this.fireEvent(O);
}},
moveTo:function(bc,
bd){if(this.hasState(d)){return;
}this.setLayoutProperties({left:bc,
top:bd});
},
_applyActive:function(bf,
bg){if(bg){this.removeState(s);
}else{this.addState(s);
}},
_getContentPaddingTarget:function(){return this._getChildControl(n);
},
_applyShowStatusbar:function(bf,
bg){if(bf){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},
_applyCaptionBarChange:function(bf,
bg){this._updateCaptionBar();
},
_applyStatus:function(bf,
bg){var bh=this._getChildControl(p,
true);
if(bh){bh.setContent(bf);
}},
_applyCaption:function(bf,
bg){this._getChildControl(l).setContent(bf);
},
_applyIcon:function(bf,
bg){this._getChildControl(m).setSource(bf);
},
_onWindowEventStop:function(bi){bi.stopPropagation();
},
_onWindowMouseDown:function(bi){this.setActive(true);
},
_onCaptionMouseDblClick:function(bi){if(this.getAllowMaximize()){this.hasState(d)?this.restore():this.maximize();
}},
_onMinimizeButtonClick:function(bi){this.minimize();
this._getChildControl(i).reset();
},
_onRestoreButtonClick:function(bi){this.restore();
this._getChildControl(h).reset();
},
_onMaximizeButtonClick:function(bi){this.maximize();
this._getChildControl(f).reset();
},
_onCloseButtonClick:function(bi){this.close();
this._getChildControl(j).reset();
}}});
})();
(function(){var a="execute",
b="icon/16/apps/preferences-locale.png",
c="Français",
d="icon/16/apps/preferences-theme.png",
f="feedreader.view.PreferenceWindow",
g="English",
h="Italiano",
i="Language",
j="icon/16/actions/dialog-cancel.png",
k="icon/16/actions/dialog-ok.png",
l="Svenska",
m="Preferences",
n="Cancel",
o="right",
p="Deutsch",
q="OK",
r="Espanol";
qx.Class.define(f,
{extend:qx.ui.window.Window,
construct:function(){arguments.callee.base.call(this,
this.tr(m),
d);
this.set({modal:true,
showMinimize:false,
showMaximize:false,
allowMaximize:false});
this._addContent();
},
members:{_addContent:function(){var s=new qx.ui.layout.VBox(10);
this.setLayout(s);
this.setMinWidth(350);
var t=new qx.ui.groupbox.GroupBox(this.tr(i),
b);
t.setMinWidth(150);
t.setLayout(new qx.ui.layout.VBox());
this.add(t);
var u=new qx.ui.form.RadioGroup();
var v={"en":g,
"de":p,
"es":r,
"fr":c,
"it":h,
"sv":l};
var w=qx.locale.Manager.getInstance();
var x;
for(var y in v){x=new qx.ui.form.RadioButton(v[y]);
x.setValue(y);
u.add(x);
t.add(x);
if(w.getLanguage()==y){u.setSelected(x);
}}var z=new qx.ui.layout.HBox(10,
o);
var A=new qx.ui.container.Composite(z);
var B=new qx.ui.form.Button(this.tr(n),
j);
B.addListener(a,
this.close,
this);
var C=new qx.ui.form.Button(this.tr(q),
k);
C.addListener(a,
function(D){var E=u.getSelected().getValue();
qx.locale.Manager.getInstance().setLocale(E);
this.close();
},
this);
A.add(B);
A.add(C);
this.add(A);
}}});
})();
(function(){var a="qx.ui.window.IDesktop";
qx.Interface.define(a,
{members:{setWindowManager:function(b){this.assertInterface(b,
qx.ui.window.IWindowManager);
},
getWindows:function(){},
supportsMaximize:function(){},
blockContent:function(c){this.assertInteger(c);
},
unblockContent:function(){}}});
})();
(function(){var a="legend",
b="frame",
c="middle",
d="top",
f="resize",
g="qx.ui.groupbox.GroupBox",
h="groupbox",
i="_applyLegendPosition";
qx.Class.define(g,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MRemoteChildrenHandling,
qx.ui.core.MRemoteLayoutHandling,
qx.ui.core.MContentPadding],
construct:function(j,
k){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(b);
this._createChildControl(a);
if(j!=null){this.setLegend(j);
}
if(k!=null){this.setIcon(k);
}},
properties:{appearance:{refine:true,
init:h},
legendPosition:{check:[d,
c],
init:c,
apply:i,
themeable:true}},
members:{_createChildControlImpl:function(l){var m;
switch(l){case b:m=new qx.ui.container.Composite();
this._add(m,
{left:0,
top:6,
right:0,
bottom:0});
break;
case a:m=new qx.ui.basic.Atom();
m.addListener(f,
this._repositionFrame,
this);
this._add(m);
break;
}return m||arguments.callee.base.call(this,
l);
},
_getContentPaddingTarget:function(){return this._getChildControl(b);
},
_applyLegendPosition:function(n){if(this._getChildControl(a).getBounds()){this._repositionFrame();
}},
_repositionFrame:function(){var j=this._getChildControl(a);
var o=this._getChildControl(b);
var p=j.getBounds().height;
if(this.getLegendPosition()==c){o.setLayoutProperties({"top":Math.round(p/2)});
}else if(this.getLegendPosition()==d){o.setLayoutProperties({"top":p});
}},
getChildrenContainer:function(){return this._getChildControl(b);
},
setLegend:function(j){var m=this._getChildControl(a);
if(j!==null){m.setLabel(j);
m.show();
}else{m.exclude();
}},
getLegend:function(){return this._getChildControl(a).getLabel();
},
setIcon:function(k){this._getChildControl(a).setIcon(k);
},
getIcon:function(){this._getChildControl(a).getIcon();
}}});
})();
(function(){var a="Boolean",
b="changeValue",
c="changeChecked",
d="changeSelected",
f="__lK",
g="changeEnabled",
h="qx.ui.form.RadioGroup",
j="changeName",
k="qx.ui.form.IRadioItem",
m="_applySelected",
n="_applyName",
o="_applyEnabled",
p="String",
q="qx.event.type.Data";
qx.Class.define(h,
{extend:qx.core.Object,
implement:qx.ui.form.IFormElement,
construct:function(r){arguments.callee.base.call(this);
this.__lK=[];
if(r!=null){this.add.apply(this,
arguments);
}this.addListener(d,
this._onChangeSelected);
},
properties:{enabled:{check:a,
apply:o,
event:g},
selected:{nullable:true,
apply:m,
event:d,
check:k},
name:{check:p,
nullable:true,
apply:n,
event:j},
wrap:{check:a,
init:true}},
events:{"changeValue":q},
members:{__lK:null,
getItems:function(){return this.__lK;
},
select:function(s){this.setSelected(s);
},
setValue:function(t){var u=this.__lK;
var s;
for(var v=0,
w=u.length;v<w;v++){s=u[v];
if(s.getValue()==t){this.setSelected(s);
break;
}}},
getValue:function(){var x=this.getSelected();
return x?x.getValue():null;
},
add:function(r){var u=this.__lK;
var s;
for(var v=0,
w=arguments.length;v<w;v++){s=arguments[v];
if(s.getGroup()===this){continue;
}s.addListener(c,
this._onItemChangeChecked,
this);
u.push(s);
s.setGroup(this);
if(s.getChecked()){this.setSelected(s);
}}if(u.length>0&&!this.getSelected()){this.setSelected(u[0]);
}},
remove:function(s){if(s.getGroup()===this){qx.lang.Array.remove(this.__lK,
s);
s.resetGroup();
s.removeListener(c,
this._onItemChangeChecked,
this);
if(s.getChecked()){this.resetSelected();
}}},
_onItemChangeChecked:function(y){var s=y.getTarget();
if(s.getChecked()){this.setSelected(s);
}else if(this.getSelected()==s){this.resetSelected();
}},
_onChangeSelected:function(y){var s=y.getData();
var t=null;
if(s){t=s.getValue();
if(t==null){t=s.getLabel();
}}this.fireDataEvent(b,
t);
},
_applySelected:function(t,
z){if(z){z.setChecked(false);
}
if(t){t.setChecked(true);
}var A=z?z.getValue():null;
var B=t?t.getValue():null;
if(A!=B){this.fireNonBubblingEvent(b,
qx.event.type.Data,
[B,
A]);
}},
_applyEnabled:function(t,
z){var u=this.__lK;
if(t==null){for(var v=0,
w=u.length;v<w;v++){u[v].resetEnabled();
}}else{for(var v=0,
w=u.length;v<w;v++){u[v].setEnabled(true);
}}},
_applyName:function(t,
z){var u=this.__lK;
if(t==null){for(var v=0,
w=u.length;v<w;v++){u[v].resetName();
}}else{for(var v=0,
w=u.length;v<w;v++){u[v].setName(t);
}}},
selectNext:function(){var s=this.getSelected();
var u=this.__lK;
var C=u.indexOf(s);
if(C==-1){return;
}var v=0;
var D=u.length;
if(this.getWrap()){C=(C+1)%D;
}else{C=Math.min(C+1,
D-1);
}
while(v<D&&!u[C].getEnabled()){C=(C+1)%D;
v++;
}this.setSelected(u[C]);
},
selectPrevious:function(){var s=this.getSelected();
var u=this.__lK;
var C=u.indexOf(s);
if(C==-1){return;
}var v=0;
var D=u.length;
if(this.getWrap()){C=(C-1+D)%D;
}else{C=Math.max(C-1,
0);
}
while(v<D&&!u[C].getEnabled()){C=(C-1+D)%D;
v++;
}this.setSelected(u[C]);
}},
destruct:function(){this._disposeArray(f);
}});
})();
(function(){var a="qx.ui.form.IRadioItem",
b="boolean",
c="qx.event.type.Data";
qx.Interface.define(a,
{extend:qx.ui.form.IFormElement,
events:{"changeChecked":c},
members:{setChecked:function(d){this.assertType(d,
b);
},
getChecked:function(){},
setGroup:function(d){this.assertInstance(d,
qx.ui.form.RadioGroup);
},
getGroup:function(){}}});
})();
(function(){var a="checked",
b="_applyChecked",
c="keypress",
d="Boolean",
f="Right",
g="changeChecked",
h="qx.ui.form.RadioButton",
i="radiobutton",
j="Left",
k="qx.ui.form.RadioGroup",
l="Down",
m="_applyGroup",
n="Up",
o="execute";
qx.Class.define(h,
{extend:qx.ui.form.Button,
implement:qx.ui.form.IRadioItem,
construct:function(p){{};
arguments.callee.base.call(this,
p);
this.addListener(o,
this._onExecute);
this.addListener(c,
this._onKeyPress);
},
properties:{group:{check:k,
nullable:true,
apply:m},
checked:{check:d,
init:false,
apply:b,
event:g},
appearance:{refine:true,
init:i},
allowGrowX:{refine:true,
init:false}},
members:{isTabable:function(){return this.isFocusable()&&this.isChecked();
},
_applyChecked:function(q,
r){q?this.addState(a):this.removeState(a);
if(q&&this.getFocusable()){this.focus();
}},
_applyGroup:function(q,
r){if(r){r.remove(this);
}
if(q){q.add(this);
}},
_onExecute:function(s){this.setChecked(true);
},
_onKeyPress:function(s){var t=this.getGroup();
if(!t){return;
}
switch(s.getKeyIdentifier()){case j:case n:t.selectPrevious();
break;
case f:case l:t.selectNext();
break;
}}}});
})();
(function(){var a="",
b="Add",
c="Title:",
d="Add a feed",
f="feedreader.view.AddFeedWindow",
g="URL:",
h="icon/16/actions/document-new.png",
i="icon/16/actions/dialog-apply.png",
j="right",
k="Feed Information",
l="execute";
qx.Class.define(f,
{extend:qx.ui.window.Window,
construct:function(m){arguments.callee.base.call(this,
this.tr(d),
h);
this._controller=m;
this.set({modal:true,
showMinimize:false,
showMaximize:false,
allowMaximize:false});
this._addContent();
},
members:{_addContent:function(){this.setLayout(new qx.ui.layout.VBox(10));
var n=new qx.ui.groupbox.GroupBox(this.tr(k));
this.add(n);
var o=new qx.ui.layout.Grid();
o.setSpacing(10);
n.setLayout(o);
var p=new qx.ui.basic.Label(this.tr(c));
var q=this._titleTextfield=new qx.ui.form.TextField();
var r=new qx.ui.basic.Label(this.tr(g));
var s=this._urlTextfield=new qx.ui.form.TextField();
n.add(p,
{row:0,
column:0});
n.add(q,
{row:0,
column:1});
n.add(r,
{row:1,
column:0});
n.add(s,
{row:1,
column:1});
s.setWidth(200);
var t=new qx.ui.form.Button(this.tr(b),
i);
t.set({alignX:j,
allowGrowX:false});
this.add(t);
t.addListener(l,
this._addFeed,
this);
},
_addFeed:function(u){var v=this._titleTextfield.getValue();
if(v==a){alert(this.tr("Please enter a title."));
return;
}var w=this._urlTextfield.getValue();
if(w==a){alert(this.tr("Please enter a url."));
return;
}this._controller.addFeed(v,
w);
this.close();
}}});
})();
(function(){var a="none",
b="qx.client",
c="color",
d="qx.event.type.Data",
f="readonly",
g="changeValue",
h="readOnly",
i="text",
j="_applyTextAlign",
k="Boolean",
l="gecko",
m="A",
n="string",
o="change",
p="textAlign",
q="center",
r="disabled",
s="_applyReadOnly",
t="resize",
u="qx.ui.form.AbstractField",
v="transparent",
w="spellcheck",
x="false",
y="right",
z="abstract",
A="block",
B="changeName",
C="webkit",
D="String",
E="left";
qx.Class.define(u,
{extend:qx.ui.core.Widget,
implement:qx.ui.form.IFormElement,
type:z,
construct:function(F){arguments.callee.base.call(this);
if(F!=null){this.setValue(F);
}this.getContentElement().addListener(o,
this._onChangeContent,
this);
},
events:{"input":d,
"changeValue":d},
properties:{name:{check:D,
nullable:true,
event:B},
textAlign:{check:[E,
q,
y],
nullable:true,
themeable:true,
apply:j},
readOnly:{check:k,
apply:s,
init:false},
selectable:{refine:true,
init:true},
focusable:{refine:true,
init:true}},
members:{getFocusElement:function(){return this.getContentElement();
},
_createInputElement:function(){return new qx.html.Input(i);
},
_createContentElement:function(){var G=this._createInputElement();
if(qx.core.Variant.isSet(b,
l)){G.setAttribute(w,
x);
}G.setStyles({"border":a,
"padding":0,
"margin":0,
"display":A,
"background":v,
"outline":a,
"appearance":a});
if(qx.core.Variant.isSet(b,
C)){G.setStyle(t,
a);
}return G;
},
_applyEnabled:function(F,
H){arguments.callee.base.call(this,
F,
H);
this.getContentElement().setAttribute(r,
F===false);
},
_textSize:{width:16,
height:16},
_getContentHint:function(){return {width:this._textSize.width*10,
height:this._textSize.height||16};
},
_applyFont:function(F,
H){var I;
if(F){var J=qx.theme.manager.Font.getInstance().resolve(F);
I=J.getStyles();
}else{I=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(I);
if(F){this._textSize=qx.bom.Label.getTextSize(m,
I);
}else{delete this._textSize;
}qx.ui.core.queue.Layout.add(this);
},
_applyTextColor:function(F,
H){if(F){this.getContentElement().setStyle(c,
qx.theme.manager.Color.getInstance().resolve(F));
}else{this.getContentElement().removeStyle(c);
}},
tabFocus:function(){arguments.callee.base.call(this);
this.selectAll();
},
setValue:function(F){if(typeof F===n||F instanceof String){var K=this.getContentElement();
if(K.getValue()!=F){K.setValue(F);
this.fireNonBubblingEvent(g,
qx.event.type.Data,
[F]);
}return F;
}throw new Error("Invalid value type: "+F);
},
getValue:function(){return this.getContentElement().getValue();
},
_onChangeContent:function(L){this.fireNonBubblingEvent(g,
qx.event.type.Data,
[L.getData()]);
},
getSelection:function(){return this.getContentElement().getSelection();
},
getSelectionLength:function(){return this.getContentElement().getSelectionLength();
},
setSelection:function(M,
N){this.getContentElement().setSelection(M,
N);
},
clearSelection:function(){this.getContentElement().clearSelection();
},
selectAll:function(){this.setSelection(0);
},
_applyTextAlign:function(F,
H){this.getContentElement().setStyle(p,
F);
},
_applyReadOnly:function(F,
H){this.getContentElement().setAttribute(h,
F);
if(F){this.addState(f);
}else{this.removeState(f);
}}}});
})();
(function(){var a="input",
b="text",
c="qx.ui.form.TextField",
d="",
f="_applyMaxLength",
g="textfield",
h="Integer",
i="maxLength",
j="qx.event.type.Data";
qx.Class.define(c,
{extend:qx.ui.form.AbstractField,
properties:{maxLength:{check:h,
apply:f,
nullable:true},
appearance:{refine:true,
init:g},
allowGrowY:{refine:true,
init:false},
allowShrinkY:{refine:true,
init:false}},
events:{"input":j},
members:{_createInputElement:function(){var k=new qx.html.Input(b);
k.addListener(a,
this._onHtmlInput,
this);
return k;
},
_onHtmlInput:function(l){this.fireDataEvent(a,
l.getData());
},
_applyMaxLength:function(m,
n){this.getContentElement().setAttribute(i,
m==null?d:m);
}}});
})();
(function(){var a="wrap",
b="value",
c="textarea",
d="",
e="input",
f="qx.html.Input",
g="select";
qx.Class.define(f,
{extend:qx.html.Element,
construct:function(h){arguments.callee.base.call(this);
this.__hq=h;
if(h===g||h===c){this._nodeName=h;
}else{this._nodeName=e;
}},
members:{_createDomElement:function(){return qx.bom.Input.create(this.__hq);
},
_applyProperty:function(i,
j){arguments.callee.base.call(this,
i,
j);
if(i===b){qx.bom.Input.setValue(this._element,
j);
}else if(i===a){qx.bom.Input.setWrap(this._element,
j);
}},
setValue:function(j){if(this._element){if(this._element.value!=j){qx.bom.Input.setValue(this._element,
j);
}}else{this._setProperty(b,
j);
}return this;
},
getValue:function(){if(this._element){return qx.bom.Input.getValue(this._element);
}return this._getProperty(b)||d;
},
setWrap:function(k){if(this.__hq===c){this._setProperty(a,
k);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},
getWrap:function(){if(this.__hq===c){return this._getProperty(a);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var a="change",
b="input",
c="checkbox",
d="radio",
f="textarea",
g="text",
h="qx.client",
j="propertychange",
k="select-multiple",
m="checked",
n="value",
p="select",
q="qx.event.handler.Input";
qx.Class.define(q,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,
this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,
this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,
this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,
this);
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{input:1,
change:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:false},
members:{canHandleEvent:function(r,
s){var t=r.tagName.toLowerCase();
if(s===b&&(t===b||t===f)){return true;
}
if(s===a&&(t===b||t===f||t===p)){return true;
}return false;
},
registerEvent:qx.core.Variant.select(h,
{"mshtml":function(r,
s,
u){if(!r.__hr){var v=r.tagName.toLowerCase();
var s=r.type;
if(s===g||v===f||s===c||s===d){qx.bom.Event.addNativeListener(r,
j,
this._onPropertyWrapper);
}
if(s!==c&&s!==d){qx.bom.Event.addNativeListener(r,
a,
this._onChangeValueWrapper);
}r.__hr=true;
}},
"default":function(r,
s,
u){if(s===b){qx.bom.Event.addNativeListener(r,
b,
this._onInputWrapper);
}else if(s===a){if(r.type===d||r.type===c){qx.bom.Event.addNativeListener(r,
a,
this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(r,
a,
this._onChangeValueWrapper);
}}}}),
unregisterEvent:qx.core.Variant.select(h,
{"mshtml":function(r,
s){if(!r.__hr){var v=r.tagName.toLowerCase();
var s=r.type;
if(s===g||v===f||s===c||s===d){qx.bom.Event.removeNativeListener(r,
j,
this._onPropertyWrapper);
}
if(s!==c&&s!==d){qx.bom.Event.removeNativeListener(r,
a,
this._onChangeValueWrapper);
}delete r.__hr;
}},
"default":function(r,
s){if(s===b){qx.bom.Event.removeNativeListener(r,
b,
this._onInputWrapper);
}else if(s===a){if(r.type===d||r.type===c){qx.bom.Event.removeNativeListener(r,
a,
this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(r,
a,
this._onChangeValueWrapper);
}}}}),
_onInput:function(w){var r=w.target;
qx.event.Registration.fireEvent(r,
b,
qx.event.type.Data,
[r.value]);
},
_onChangeValue:function(w){var r=w.target||w.srcElement;
var x=r.value;
if(r.type===k){var x=[];
for(var y=0,
z=r.options,
A=z.length;y<A;y++){if(z[y].selected){x.push(z[y].value);
}}}qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[x]);
},
_onChangeChecked:function(w){var r=w.target;
if(r.type===d){if(r.checked){qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[r.value]);
}}else{qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[r.checked]);
}},
_onProperty:qx.core.Variant.select(h,
{"mshtml":function(w){var r=w.target||w.srcElement;
var B=w.propertyName;
if(B===n&&(r.type===g||r.tagName.toLowerCase()===f)){if(!r.__inValueSet){qx.event.Registration.fireEvent(r,
b,
qx.event.type.Data,
[r.value]);
}}else if(B===m){if(r.type===c){qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[r.checked]);
}else if(r.checked){qx.event.Registration.fireEvent(r,
a,
qx.event.type.Data,
[r.value]);
}}},
"default":function(){}})},
defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var a="soft",
b="qx.client",
c="off",
d="",
e="input",
f="nowrap",
g="select",
h="qx.bom.Input",
i="normal",
j="textarea",
k="auto",
l='wrap';
qx.Class.define(h,
{statics:{__hs:{text:1,
textarea:1,
select:1,
checkbox:1,
radio:1,
password:1,
hidden:1,
submit:1,
image:1,
file:1,
search:1,
reset:1,
button:1},
create:function(m,
n,
o){{};
var n=n?qx.lang.Object.copy(n):{};
var p;
if(m===j||m===g){p=m;
}else{p=e;
n.type=m;
}return qx.bom.Element.create(p,
n,
o);
},
setValue:qx.core.Variant.select(b,
{"mshtml":function(q,
r){q.__ht=true;
q.value=r;
q.__ht=null;
},
"default":function(q,
r){q.value=r;
}}),
getValue:function(q){return q.value;
},
setWrap:qx.core.Variant.select(b,
{"mshtml":function(q,
s){q.wrap=s?a:c;
},
"gecko":function(q,
s){var t=s?a:c;
var u=s?d:k;
q.setAttribute(l,
t);
q.style.overflow=u;
},
"default":function(q,
s){q.style.whiteSpace=s?i:f;
}})}});
})();
(function(){var a="#CCCCCC",
b="#F3F3F3",
c="#E4E4E4",
d="#1a1a1a",
e="#084FAB",
f="gray",
g="#fffefe",
h="white",
i="#4a4a4a",
j="#EEEEEE",
k="#80B4EF",
l="#ffffdd",
m="#334866",
n="#00204D",
o="#666666",
p="#99C3FE",
q="#808080",
r="#F4F4F4",
s="#001533",
t="#909090",
u="#FCFCFC",
v="#314a6e",
w="#0880EF",
x="#4d4d4d",
y="#DFDFDF",
z="#000000",
A="#26364D",
B="#6B6A6E",
C="#AFAFAF",
D="#404955",
E="#AAAAAA",
F="qx.theme.modern.Color";
qx.Theme.define(F,
{colors:{"background-application":y,
"background-pane":b,
"background-light":u,
"background-medium":j,
"background-splitpane":C,
"background-tip":l,
"background-odd":c,
"text-light":t,
"text-gray":i,
"text-label":d,
"text-title":v,
"text-input":z,
"text-hovered":s,
"text-disabled":B,
"text-selected":g,
"text-active":A,
"text-inactive":D,
"border-main":x,
"border-separator":q,
"border-input":m,
"border-pane":n,
"border-button":o,
"border-column":a,
"border-focused":p,
"table-pane":b,
"table-focus-indicator":w,
"table-row-background-focused-selected":e,
"table-row-background-focused":k,
"table-row-background-selected":e,
"table-row-background-even":b,
"table-row-background-odd":c,
"table-row-selected":g,
"table-row":d,
"table-row-line":a,
"table-column-line":a,
"progressive-table-header":E,
"progressive-table-row-background-even":r,
"progressive-table-row-background-odd":c,
"progressive-progressbar-background":f,
"progressive-progressbar-indicator-done":a,
"progressive-progressbar-indicator-undone":h,
"progressive-progressbar-percent-background":f,
"progressive-progressbar-percent-text":h}});
})();
(function(){var a="_applyStyle",
b="repeat",
c="px",
d="scale",
e="solid",
f="Color",
g="double",
h="px ",
i="position:absolute;top:0;left:0;",
j="dotted",
k="__mE",
l="_applyWidth",
m="qx.ui.decoration.Uniform",
n="repeat-y",
o="String",
p="",
q="__mD",
r="PositiveInteger",
s="border:",
t="dashed",
u="no-repeat",
v=" ",
w="repeat-x",
x=";";
qx.Class.define(m,
{extend:qx.core.Object,
implement:[qx.ui.decoration.IDecorator],
construct:function(y,
z,
A){arguments.callee.base.call(this);
if(y!=null){this.setWidth(y);
}
if(z!=null){this.setStyle(z);
}
if(A!=null){this.setColor(A);
}},
properties:{width:{check:r,
init:0,
apply:l},
style:{nullable:true,
check:[e,
j,
t,
g],
init:e,
apply:a},
color:{nullable:true,
check:f,
apply:a},
backgroundImage:{check:o,
nullable:true,
apply:a},
backgroundRepeat:{check:[b,
w,
n,
u,
d],
init:b,
apply:a},
backgroundColor:{check:f,
nullable:true,
apply:a}},
members:{init:function(B){B.useMarkup(this.getMarkup());
},
getMarkup:function(){if(this.__mD){return this.__mD;
}var C=i;
var y=this.getWidth();
{};
var D=qx.theme.manager.Color.getInstance();
C+=s+y+h+this.getStyle()+v+D.resolve(this.getColor())+x;
var E=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),
this.getBackgroundRepeat(),
C);
return this.__mD=E;
},
resize:function(B,
y,
F){var G=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;
if(G||qx.bom.client.Feature.CONTENT_BOX){var H=this.getWidth()*2;
y-=H;
F-=H;
if(y<0){y=0;
}
if(F<0){F=0;
}}var I=B.getDomElement();
I.style.width=y+c;
I.style.height=F+c;
},
tint:function(B,
J){var D=qx.theme.manager.Color.getInstance();
var I=B.getDomElement();
if(J==null){J=this.getBackgroundColor();
}I.style.backgroundColor=D.resolve(J)||p;
},
getInsets:function(){if(this.__mE){return this.__mE;
}var y=this.getWidth();
this.__mE={top:y,
right:y,
bottom:y,
left:y};
return this.__mE;
},
_applyWidth:function(){{};
this.__mE=null;
},
_applyStyle:function(){{};
}},
destruct:function(){this._disposeFields(q,
k);
}});
})();
(function(){var a="_applyStyle",
b="repeat",
c="px",
d="qx.ui.decoration.Background",
e="",
f="scale",
g="no-repeat",
h="position:absolute;top:0;left:0;",
i="repeat-x",
j="repeat-y",
k="Color",
l="String";
qx.Class.define(d,
{extend:qx.core.Object,
implement:[qx.ui.decoration.IDecorator],
construct:function(m){arguments.callee.base.call(this);
if(m!=null){this.setBackgroundColor(m);
}},
properties:{backgroundImage:{check:l,
nullable:true,
apply:a},
backgroundRepeat:{check:[b,
i,
j,
g,
f],
init:b,
apply:a},
backgroundColor:{check:k,
nullable:true,
apply:a}},
members:{init:function(n){n.useMarkup(this.getMarkup());
},
getMarkup:function(){if(this.__mF){return this.__mF;
}var o=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),
this.getBackgroundRepeat(),
h);
return this.__mF=o;
},
resize:function(n,
p,
q){var r=n.getDomElement();
r.style.width=p+c;
r.style.height=q+c;
},
tint:function(n,
s){var t=qx.theme.manager.Color.getInstance();
var r=n.getDomElement();
if(s==null){s=this.getBackgroundColor();
}r.style.backgroundColor=t.resolve(s)||e;
},
__mG:{top:0,
right:0,
bottom:0,
left:0},
getInsets:function(){return this.__mG;
},
_applyStyle:function(){{};
}}});
})();
(function(){var a="px",
b="_applyInsets",
c="Number",
d="no-repeat",
e="scale-x",
f="scale-y",
g="-tr",
h="-l",
i="insetTop",
j='</div>',
k="insetBottom",
l="scale",
m="-br",
n="-t",
o="__mJ",
p="-tl",
q="-r",
r='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',
s="__mI",
t="__mK",
u="_applyBaseImage",
v="-b",
w="shorthand",
x="String",
y="insetRight",
z="",
A="-bl",
B="-c",
C="insetLeft",
D="__mH",
E="qx.ui.decoration.Grid";
qx.Class.define(E,
{extend:qx.core.Object,
implement:[qx.ui.decoration.IDecorator],
construct:function(F,
G){arguments.callee.base.call(this);
if(F!=null){this.setBaseImage(F);
}
if(G!=null){this.setInsets(G);
}},
properties:{baseImage:{check:x,
nullable:true,
apply:u},
insetLeft:{check:c,
init:0,
apply:b},
insetRight:{check:c,
init:0,
apply:b},
insetBottom:{check:c,
init:0,
apply:b},
insetTop:{check:c,
init:0,
apply:b},
insets:{group:[i,
y,
k,
C],
mode:w}},
members:{__mH:null,
__mI:null,
__mJ:null,
__mK:null,
init:function(H){H.useMarkup(this.getMarkup());
},
getMarkup:function(){if(this.__mH){return this.__mH;
}var I=qx.bom.element.Decoration;
var J=this.__mJ;
var K=this.__mK;
var L=[];
L.push(r);
L.push(I.create(J.tl,
d,
{top:0,
left:0}));
L.push(I.create(J.t,
e,
{top:0,
left:K.left+a}));
L.push(I.create(J.tr,
d,
{top:0,
right:0}));
L.push(I.create(J.bl,
d,
{bottom:0,
left:0}));
L.push(I.create(J.b,
e,
{bottom:0,
left:K.left+a}));
L.push(I.create(J.br,
d,
{bottom:0,
right:0}));
L.push(I.create(J.l,
f,
{top:K.top+a,
left:0}));
L.push(I.create(J.c,
l,
{top:K.top+a,
left:K.left+a}));
L.push(I.create(J.r,
f,
{top:K.top+a,
right:0}));
L.push(j);
return this.__mH=L.join(z);
},
resize:function(H,
M,
N){var K=this.__mK;
var O=M-K.left-K.right;
var P=N-K.top-K.bottom;
var Q=H.getDomElement();
Q.style.width=M+a;
Q.style.height=N+a;
Q.childNodes[1].style.width=O+a;
Q.childNodes[4].style.width=O+a;
Q.childNodes[7].style.width=O+a;
Q.childNodes[6].style.height=P+a;
Q.childNodes[7].style.height=P+a;
Q.childNodes[8].style.height=P+a;
},
tint:function(H,
R){},
getInsets:function(){if(this.__mI){return this.__mI;
}return this.__mI={left:this.getInsetLeft(),
right:this.getInsetRight(),
bottom:this.getInsetBottom(),
top:this.getInsetTop()};
},
_applyInsets:function(){{};
this.__mI=null;
},
_applyBaseImage:function(S,
T){{};
var U=qx.util.ResourceManager;
if(S){var V=qx.util.AliasManager.getInstance();
var W=V.resolve(S);
var X=/(.*)(\.[a-z]+)$/.exec(W);
var Y=X[1];
var ba=X[2];
var J=this.__mJ={tl:Y+p+ba,
t:Y+n+ba,
tr:Y+g+ba,
bl:Y+A+ba,
b:Y+v+ba,
br:Y+m+ba,
l:Y+h+ba,
c:Y+B+ba,
r:Y+q+ba};
this.__mK={top:U.getImageHeight(J.t),
bottom:U.getImageHeight(J.b),
left:U.getImageWidth(J.l),
right:U.getImageWidth(J.r)};
}}},
destruct:function(){this._disposeFields(D,
s,
o,
t);
}});
})();
(function(){var a="_applyStyle",
b="solid",
c="Color",
d="double",
e="px ",
f="dotted",
g="_applyWidth",
h="dashed",
i="Number",
j=" ",
k=";",
l="shorthand",
m="repeat",
n="px",
o="widthTop",
p="scale",
q="styleRight",
r="styleBottom",
s="widthLeft",
t="widthBottom",
u="",
v="styleTop",
w="colorBottom",
x="styleLeft",
y="widthRight",
z="colorLeft",
A="colorRight",
B="colorTop",
C="border-left:",
D="position:absolute;top:0;left:0;",
E="repeat-y",
F="String",
G="border-bottom:",
H="border-right:",
I="qx.ui.decoration.Single",
J="border-top:",
K="no-repeat",
L="repeat-x",
M="__mM",
N="__mL";
qx.Class.define(I,
{extend:qx.core.Object,
implement:[qx.ui.decoration.IDecorator],
construct:function(O,
P,
Q){arguments.callee.base.call(this);
if(O!=null){this.setWidth(O);
}
if(P!=null){this.setStyle(P);
}
if(Q!=null){this.setColor(Q);
}},
properties:{widthTop:{check:i,
init:0,
apply:g},
widthRight:{check:i,
init:0,
apply:g},
widthBottom:{check:i,
init:0,
apply:g},
widthLeft:{check:i,
init:0,
apply:g},
styleTop:{nullable:true,
check:[b,
f,
h,
d],
init:b,
apply:a},
styleRight:{nullable:true,
check:[b,
f,
h,
d],
init:b,
apply:a},
styleBottom:{nullable:true,
check:[b,
f,
h,
d],
init:b,
apply:a},
styleLeft:{nullable:true,
check:[b,
f,
h,
d],
init:b,
apply:a},
colorTop:{nullable:true,
check:c,
apply:a},
colorRight:{nullable:true,
check:c,
apply:a},
colorBottom:{nullable:true,
check:c,
apply:a},
colorLeft:{nullable:true,
check:c,
apply:a},
backgroundImage:{check:F,
nullable:true,
apply:a},
backgroundRepeat:{check:[m,
L,
E,
K,
p],
init:m,
apply:a},
backgroundColor:{check:c,
nullable:true,
apply:a},
left:{group:[s,
x,
z]},
right:{group:[y,
q,
A]},
top:{group:[o,
v,
B]},
bottom:{group:[t,
r,
w]},
width:{group:[o,
y,
t,
s],
mode:l},
style:{group:[v,
q,
r,
x],
mode:l},
color:{group:[B,
A,
w,
z],
mode:l}},
members:{init:function(R){R.useMarkup(this.getMarkup());
},
getMarkup:function(R){if(this.__mL){return this.__mL;
}var S=qx.theme.manager.Color.getInstance();
var T=u;
var O=this.getWidthTop();
if(O>0){T+=J+O+e+this.getStyleTop()+j+S.resolve(this.getColorTop())+k;
}var O=this.getWidthRight();
if(O>0){T+=H+O+e+this.getStyleRight()+j+S.resolve(this.getColorRight())+k;
}var O=this.getWidthBottom();
if(O>0){T+=G+O+e+this.getStyleBottom()+j+S.resolve(this.getColorBottom())+k;
}var O=this.getWidthLeft();
if(O>0){T+=C+O+e+this.getStyleLeft()+j+S.resolve(this.getColorLeft())+k;
}{};
T+=D;
var U=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),
this.getBackgroundRepeat(),
T);
return this.__mL=U;
},
resize:function(R,
O,
V){var W=this.getBackgroundImage()&&this.getBackgroundRepeat()==p;
if(W||qx.bom.client.Feature.CONTENT_BOX){var X=this.getInsets();
O-=X.left+X.right;
V-=X.top+X.bottom;
if(O<0){O=0;
}
if(V<0){V=0;
}}var Y=R.getDomElement();
Y.style.width=O+n;
Y.style.height=V+n;
},
tint:function(R,
ba){var S=qx.theme.manager.Color.getInstance();
var Y=R.getDomElement();
if(ba==null){ba=this.getBackgroundColor();
}Y.style.backgroundColor=S.resolve(ba)||u;
},
getInsets:function(){if(this.__mM){return this.__mM;
}this.__mM={top:this.getWidthTop(),
right:this.getWidthRight(),
bottom:this.getWidthBottom(),
left:this.getWidthLeft()};
return this.__mM;
},
_applyWidth:function(){{};
this.__mM=null;
},
_applyStyle:function(){{};
}},
destruct:function(){this._disposeFields(N,
M);
}});
})();
(function(){var a="_applyStyle",
b='"></div>',
c="Color",
d="repeat",
e='<div style="',
f='border:',
g="1px solid ",
h="",
i=";",
j="px",
k="position:absolute;top:1px;left:1px;",
l="qx.ui.decoration.Beveled",
m="scale",
n='<div style="position:absolute;top:1px;left:0px;',
o='<div style="position:absolute;top:1px;left:1px;',
p="repeat-y",
q='border-bottom:',
r="String",
s='border-right:',
t='</div>',
u='border-top:',
v="Number",
w="no-repeat",
x='position:absolute;top:0px;left:1px;',
y="repeat-x",
z='<div style="overflow:hidden;font-size:0;line-height:0;">',
A='border-left:';
qx.Class.define(l,
{extend:qx.core.Object,
implement:[qx.ui.decoration.IDecorator],
construct:function(B,
C,
D){arguments.callee.base.call(this);
if(B!=null){this.setOuterColor(B);
}
if(C!=null){this.setInnerColor(C);
}
if(D!=null){this.setInnerOpacity(D);
}},
properties:{innerColor:{check:c,
nullable:true,
apply:a},
innerOpacity:{check:v,
init:1,
apply:a},
outerColor:{check:c,
nullable:true,
apply:a},
backgroundImage:{check:r,
nullable:true,
apply:a},
backgroundRepeat:{check:[d,
y,
p,
w,
m],
init:d,
apply:a},
backgroundColor:{check:c,
nullable:true,
apply:a}},
members:{__mN:null,
_applyStyle:function(){{};
},
init:function(E){E.useMarkup(this.getMarkup());
},
getMarkup:function(){if(this.__mN){return this.__mN;
}var F=qx.theme.manager.Color.getInstance();
var G=[];
var H=g+F.resolve(this.getOuterColor())+i;
var I=g+F.resolve(this.getInnerColor())+i;
G.push(z);
G.push(e);
G.push(f,
H);
G.push(qx.bom.element.Opacity.compile(0.35));
G.push(b);
G.push(n);
G.push(A,
H);
G.push(s,
H);
G.push(b);
G.push(e);
G.push(x);
G.push(u,
H);
G.push(q,
H);
G.push(b);
var J=k;
G.push(qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),
this.getBackgroundRepeat(),
J));
G.push(o);
G.push(f,
I);
G.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
G.push(b);
G.push(t);
return this.__mN=G.join(h);
},
resize:function(E,
K,
L){if(K<4){K=4;
}
if(L<4){L=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var M=K-2;
var N=L-2;
var O=M;
var P=N;
var Q=K-4;
var R=L-4;
}else{var M=K;
var N=L;
var O=K-2;
var P=L-2;
var Q=O;
var R=P;
}var S=E.getDomElement();
var T=j;
var U=S.childNodes[0].style;
U.width=M+T;
U.height=N+T;
var V=S.childNodes[1].style;
V.width=M+T;
V.height=P+T;
var W=S.childNodes[2].style;
W.width=O+T;
W.height=N+T;
var X=S.childNodes[3].style;
X.width=O+T;
X.height=P+T;
var Y=S.childNodes[4].style;
Y.width=Q+T;
Y.height=R+T;
},
tint:function(E,
ba){var S=E.getDomElement();
var F=qx.theme.manager.Color.getInstance();
if(ba==null){ba=this.getBackgroundColor();
}S.childNodes[3].style.backgroundColor=F.resolve(ba)||h;
},
getInsets:function(){return this.__mO;
},
__mO:{top:2,
right:2,
bottom:2,
left:2}}});
})();
(function(){var a="solid",
b="scale",
c="border-main",
d="border-separator",
e="white",
f="decoration/table/header-cell.png",
g="repeat-x",
h="#f8f8f8",
i="#b6b6b6",
j="background-pane",
k="repeat-y",
l="border-input",
m="background-light",
n="decoration/form/input.png",
o="decoration/tabview/tab-button-top-active.png",
p="decoration/form/button-c.png",
q="decoration/scrollbar/scrollbar-bg-vertical.png",
r="decoration/shadow/shadow-small.png",
s="decoration/form/button-checked.png",
t="decoration/tabview/tab-button-left-inactive.png",
u="decoration/groupbox/groupbox.png",
v="#FAFAFA",
w="decoration/pane/pane.png",
x="decoration/menu/background.png",
y="decoration/toolbar/toolbar-part.png",
z="decoration/window/captionbar-inactive.png",
A="decoration/tabview/tab-button-top-inactive.png",
B="decoration/menu/bar-background.png",
C="decoration/tabview/tab-button-bottom-active.png",
D="decoration/form/button-hovered.png",
E="#b8b8b8",
F="qx/decoration/Modern",
G="decoration/window/statusbar.png",
H="border-focused",
I="decoration/selection.png",
J="table-focus-indicator",
K="#F2F2F2",
L="decoration/form/button-checked-c.png",
M="decoration/scrollbar/scrollbar-bg-horizontal.png",
N="qx.theme.modern.Decoration",
O="#f4f4f4",
P="decoration/form/button.png",
Q="decoration/app-header.png",
R="decoration/tabview/tabview-pane.png",
S="decoration/form/button-focused.png",
T="decoration/tabview/tab-button-bottom-inactive.png",
U="decoration/window/captionbar-active.png",
V="decoration/tabview/tab-button-right-active.png",
W="decoration/form/button-pressed.png",
X="decoration/scrollbar/scrollbar-button-bg-horizontal.png",
Y="decoration/tabview/tab-button-left-active.png",
ba="background-splitpane",
bb="decoration/form/button-checked-focused.png",
bc="#C5C5C5",
bd="decoration/toolbar/toolbar-gradient.png",
be="decoration/tabview/tab-button-right-inactive.png",
bf="decoration/scrollbar/scrollbar-button-bg-vertical.png",
bg="decoration/shadow/shadow.png";
qx.Theme.define(N,
{resource:F,
decorations:{"main":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:c}},
"selected":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:I,
backgroundRepeat:b}},
"pane":{decorator:qx.ui.decoration.Grid,
style:{baseImage:w,
insets:[0,
2,
3,
0]}},
"group":{decorator:qx.ui.decoration.Grid,
style:{baseImage:u}},
"separator-horizontal":{decorator:qx.ui.decoration.Single,
style:{widthLeft:1,
colorLeft:d}},
"separator-vertical":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:d}},
"shadow-window":{decorator:qx.ui.decoration.Grid,
style:{baseImage:bg,
insets:[4,
8,
8,
4]}},
"shadow-popup":{decorator:qx.ui.decoration.Grid,
style:{baseImage:r,
insets:[0,
3,
3,
0]}},
"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:M,
backgroundRepeat:g}},
"scrollbar-vertical":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:q,
backgroundRepeat:k}},
"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,
style:{backgroundImage:X,
backgroundRepeat:b,
outerColor:c,
innerColor:e,
innerOpacity:0.5}},
"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,
style:{backgroundImage:bf,
backgroundRepeat:b,
outerColor:c,
innerColor:e,
innerOpacity:0.5}},
"button":{decorator:qx.ui.decoration.Grid,
style:{baseImage:P,
insets:2}},
"button-focused":{decorator:qx.ui.decoration.Grid,
style:{baseImage:S,
insets:2}},
"button-hovered":{decorator:qx.ui.decoration.Grid,
style:{baseImage:D,
insets:2}},
"button-pressed":{decorator:qx.ui.decoration.Grid,
style:{baseImage:W,
insets:2}},
"button-checked":{decorator:qx.ui.decoration.Grid,
style:{baseImage:s,
insets:2}},
"button-checked-focused":{decorator:qx.ui.decoration.Grid,
style:{baseImage:bb,
insets:2}},
"input":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:l,
innerColor:e,
innerOpacity:0.5,
backgroundImage:n,
backgroundRepeat:g,
backgroundColor:m}},
"input-focused":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:l,
innerColor:H,
backgroundImage:n,
backgroundRepeat:g,
backgroundColor:m}},
"toolbar":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:bd,
backgroundRepeat:b}},
"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:i,
innerColor:h,
backgroundImage:p,
backgroundRepeat:b}},
"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:i,
innerColor:h,
backgroundImage:L,
backgroundRepeat:b}},
"toolbar-separator":{decorator:qx.ui.decoration.Single,
style:{widthLeft:1,
widthRight:1,
colorLeft:E,
colorRight:O,
styleLeft:a,
styleRight:a}},
"toolbar-part":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:y,
backgroundRepeat:k}},
"tabview-pane":{decorator:qx.ui.decoration.Grid,
style:{baseImage:R,
insets:[0,
2,
3,
0]}},
"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:o}},
"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:A}},
"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:C}},
"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:T}},
"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:Y}},
"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:t}},
"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:V}},
"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:be}},
"splitpane":{decorator:qx.ui.decoration.Uniform,
style:{backgroundColor:j,
width:3,
color:ba,
style:a}},
"window":{decorator:qx.ui.decoration.Single,
style:{backgroundColor:j,
width:1,
color:c,
widthTop:0}},
"window-captionbar-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:U}},
"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:z}},
"window-statusbar":{decorator:qx.ui.decoration.Grid,
style:{baseImage:G}},
"table":{decorator:qx.ui.decoration.Single,
style:{width:1,
color:c,
style:a}},
"table-statusbar":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:c,
style:a}},
"table-scroller-header":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:f,
backgroundRepeat:b,
widthBottom:1,
colorBottom:c,
style:a}},
"table-header-cell":{decorator:qx.ui.decoration.Single,
style:{widthRight:1,
colorRight:d,
styleRight:a}},
"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,
style:{widthRight:1,
colorRight:d,
styleRight:a,
widthBottom:1,
colorBottom:e,
styleBottom:a}},
"table-column-button":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:f,
backgroundRepeat:b,
widthBottom:1,
colorBottom:c,
style:a}},
"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,
style:{width:2,
color:J,
style:a}},
"progressive-table-header":{decorator:qx.ui.decoration.Single,
style:{width:1,
color:c,
style:a}},
"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:f,
backgroundRepeat:b,
widthRight:1,
colorRight:K,
style:a}},
"menu":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:x,
backgroundRepeat:b,
width:1,
color:c,
style:a}},
"menu-separator":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:bc,
widthBottom:1,
colorBottom:v}},
"menubar":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:B,
backgroundRepeat:b,
width:1,
color:d,
style:a}},
"app-header":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:Q,
backgroundRepeat:b}}}});
})();
(function(){var a="win98",
b="osx2",
c="osx0",
d="osx4",
e="win95",
f="win2000",
g="osx1",
h="osx5",
i="osx3",
j="Windows NT 5.01",
k=")",
l="winxp",
m="freebsd",
n="sunos",
o="SV1",
p="|",
q="nintendods",
r="winnt4",
s="wince",
t="winme",
u="os9",
v="\.",
w="osx",
x="linux",
y="netbsd",
z="winvista",
A="(",
B="win2003",
C="symbian",
D="g",
E="qx.bom.client.System",
F=" Mobile/";
qx.Bootstrap.define(E,
{statics:{NAME:"",
SP1:false,
SP2:false,
WIN95:false,
WIN98:false,
WINME:false,
WINNT4:false,
WIN2000:false,
WINXP:false,
WIN2003:false,
WINVISTA:false,
WINCE:false,
LINUX:false,
SUNOS:false,
FREEBSD:false,
NETBSD:false,
OSX:false,
OS9:false,
SYMBIAN:false,
NINTENDODS:false,
PSP:false,
IPHONE:false,
__mP:{"Windows NT 6.0":z,
"Windows NT 5.2":B,
"Windows NT 5.1":l,
"Windows NT 5.0":f,
"Windows 2000":f,
"Windows NT 4.0":r,
"Win 9x 4.90":t,
"Windows CE":s,
"Windows 98":a,
"Win98":a,
"Windows 95":e,
"Win95":e,
"Linux":x,
"FreeBSD":m,
"NetBSD":y,
"SunOS":n,
"Symbian System":C,
"Nitro":q,
"PSP":"sonypsp",
"Mac OS X 10_5":h,
"Mac OS X 10.5":h,
"Mac OS X 10_4":d,
"Mac OS X 10.4":d,
"Mac OS X 10_3":i,
"Mac OS X 10.3":i,
"Mac OS X 10_2":b,
"Mac OS X 10.2":b,
"Mac OS X 10_1":g,
"Mac OS X 10.1":g,
"Mac OS X 10_0":c,
"Mac OS X 10.0":c,
"Mac OS X":w,
"Mac OS 9":u},
__mQ:function(){var G=navigator.userAgent;
var H=[];
for(var I in this.__mP){H.push(I);
}var J=new RegExp(A+H.join(p).replace(/\./g,
v)+k,
D);
if(!J.test(G)){throw new Error("Could not detect system: "+G);
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(F).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__mP[RegExp.$1];
this[this.NAME.toUpperCase()]=true;
if(qx.bom.client.Platform.WIN){if(G.indexOf(j)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&G.indexOf(o)!==-1){this.SP2=true;
}}}}},
defer:function(K){K.__mQ();
}});
})();
(function(){var a="Lucida Grande",
b="Liberation Sans",
c="Arial",
d="Tahoma",
e="Candara",
f="Segoe UI",
g="Consolas",
h="monospace",
i="Courier New",
j="qx.theme.modern.Font",
k="DejaVu Sans Mono";
qx.Theme.define(j,
{fonts:{"default":{size:qx.bom.client.System.WINVISTA?12:11,
lineHeight:1.4,
family:qx.bom.client.Platform.MAC?[a]:qx.bom.client.System.WINVISTA?[f,
e]:[d,
b,
c]},
"bold":{size:qx.bom.client.System.WINVISTA?12:11,
lineHeight:1.4,
family:qx.bom.client.Platform.MAC?[a]:qx.bom.client.System.WINVISTA?[f,
e]:[d,
b,
c],
bold:true},
"small":{size:qx.bom.client.System.WINVISTA?11:10,
lineHeight:1.4,
family:qx.bom.client.Platform.MAC?[a]:qx.bom.client.System.WINVISTA?[f,
e]:[d,
b,
c]},
"monospace":{size:11,
lineHeight:1.4,
family:qx.bom.client.Platform.MAC?[a]:qx.bom.client.System.WINVISTA?[g]:[g,
k,
i,
h]}}});
})();
(function(){var a="undefined",
b="button-frame",
c="widget",
d="atom",
e="main",
f="text-label",
g="middle",
h="background-light",
i="groupbox",
j="bold",
k="menu-button",
l="decoration/arrows/down.png",
m="text-selected",
n="button",
o="spinner",
p="input",
q="selected",
r="popup",
s="image",
t="text-disabled",
u="tree-item",
v="treevirtual-contract",
w="scrollbar",
x="datechooser/nav-button",
y="text-hovered",
z="center",
A="toolbar-button",
B="treevirtual-expand",
C="textfield",
D="tooltip",
E="label",
F="input-focused",
G="decoration/arrows/right.png",
H="background-application",
I="radiobutton",
J="list",
K="combobox",
L="checkbox",
M="text-title",
N="scrollbar/button",
O="combobox/button",
P="decoration/tree/closed.png",
Q="scrollbar-slider-horizontal",
R="decoration/arrows/left.png",
S="button-focused",
T="text-light",
U="text-input",
V="icon/16/places/folder.png",
W="slidebar/button-forward",
X="right-top",
Y="background-splitpane",
ba=".png",
bb="decoration/tree/open.png",
bc="datechooser",
bd="slidebar/button-backward",
be="selectbox",
bf="treevirtual-folder",
bg="shadow-popup",
bh="background-medium",
bi="table",
bj="decoration/form/",
bk="icon/16/places/folder-open.png",
bl="icon/16/mimetypes/office-document.png",
bm="qx/static/blank.gif",
bn="button-checked",
bo="decoration/window/maximize-active-hovered.png",
bp="radiobutton-hovered",
bq="decoration/cursors/",
br="slidebar",
bs="menu",
bt="table-scroller-focus-indicator",
bu="move-frame",
bv="nodrop",
bw="table-header-cell",
bx="app-header",
by="text-inactive",
bz="move",
bA="radiobutton-checked-focused",
bB="decoration/window/restore-active-hovered.png",
bC="shadow-window",
bD="table-column-button",
bE="right.png",
bF="tabview-page-button-bottom-inactive",
bG="window-statusbar",
bH="button-hovered",
bI="decoration/scrollbar/scrollbar-",
bJ="background-tip",
bK="table-scroller-header",
bL="radiobutton-disabled",
bM="button-pressed",
bN="table-pane",
bO="white",
bP="decoration/window/close-active.png",
bQ="tabview-page-button-left-active",
bR="checkbox-hovered",
bS="checkbox-checked",
bT="decoration/window/minimize-active-hovered.png",
bU="window-captionbar-active",
bV="menubar",
bW="tabview-page-button-top-inactive",
bX="tabview-page-button-left-inactive",
bY="toolbar-button-checked",
ca="decoration/tree/open-selected.png",
cb="radiobutton-checked",
cc="decoration/window/minimize-inactive.png",
cd="icon/16/apps/office-calendar.png",
ce="group",
cf="tabview-page-button-right-inactive",
cg="decoration/window/minimize-active.png",
ch="decoration/window/restore-inactive.png",
ci="text-active",
cj="checkbox-checked-focused",
ck="splitpane",
cl="toolbar-separator",
cm="button-preselected-focused",
cn="decoration/window/close-active-hovered.png",
co="toolbar",
cp="checkbox-pressed",
cq="border-separator",
cr="decoration/window/maximize-inactive.png",
cs="icon/22/places/folder-open.png",
ct="scrollarea",
cu="scrollbar-vertical",
cv="icon/22/mimetypes/office-document.png",
cw="button-preselected",
cx="static/blank.gif",
cy="button-checked-focused",
cz="up.png",
cA="decoration/tree/closed-selected.png",
cB="qx.theme.modern.Appearance",
cC="default",
cD="checkbox-disabled",
cE="toolbar-button-hovered",
cF="progressive-table-header",
cG="decoration/menu/radiobutton.gif",
cH="decoration/arrows/down-small.png",
cI="decoration/arrows/forward.png",
cJ="decoration/table/descending.png",
cK="checkbox-checked-hovered",
cL="scrollbar-slider-vertical",
cM="alias",
cN="decoration/window/restore-active.png",
cO="checkbox-checked-disabled",
cP="icon/32/mimetypes/office-document.png",
cQ="radiobutton-checked-disabled",
cR="tabview-pane",
cS="decoration/arrows/rewind.png",
cT="checkbox-focused",
cU="top",
cV="right",
cW="radiobutton-checked-hovered",
cX="table-header-cell-hovered",
cY="window",
da="text-gray",
db="decoration/menu/radiobutton-invert.gif",
dc="slider",
dd="decoration/table/select-column-order.png",
de="decoration/toolbar/toolbar-handle-knob.png",
df="down.png",
dg="tabview-page-button-top-active",
dh="icon/32/places/folder-open.png",
di="icon/22/places/folder.png",
dj="decoration/window/maximize-active.png",
dk="checkbox-checked-pressed",
dl="decoration/window/close-inactive.png",
dm="toolbar-part",
dn="decoration/splitpane/knob-vertical.png",
dp="left.png",
dq="decoration/menu/checkbox-invert.gif",
dr="decoration/arrows/up.png",
ds="radiobutton-checked-pressed",
dt="table-statusbar",
du="radiobutton-pressed",
dv="window-captionbar-inactive",
dw="copy",
dx="radiobutton-focused",
dy="decoration/menu/checkbox.gif",
dz="decoration/splitpane/knob-horizontal.png",
dA="icon/32/places/folder.png",
dB="tabview-page-button-bottom-active",
dC="decoration/arrows/up-small.png",
dD="decoration/table/ascending.png",
dE="small",
dF="tabview-page-button-right-active",
dG="scrollbar-horizontal",
dH="progressive-table-header-cell",
dI="menu-separator",
dJ="pane",
dK="decoration/arrows/right-invert.png",
dL=".gif",
dM="icon/16/actions/view-refresh.png";
qx.Theme.define(cB,
{appearances:{"widget":{},
"root":{style:function(dN){return {backgroundColor:H,
textColor:f,
font:cC};
}},
"label":{style:function(dN){return {textColor:dN.disabled?t:a};
}},
"move-frame":{style:function(dN){return {decorator:e};
}},
"resize-frame":bu,
"dragdrop-cursor":{style:function(dN){var dO=bv;
if(dN.copy){dO=dw;
}else if(dN.move){dO=bz;
}else if(dN.alias){dO=cM;
}return {source:bq+dO+dL,
position:X,
offset:[2,
16,
2,
6]};
}},
"image":{style:function(dN){return {opacity:!dN.replacement&&dN.disabled?0.3:1};
}},
"atom":{},
"atom/label":E,
"atom/icon":s,
"popup":{style:function(dN){return {decorator:e,
backgroundColor:h,
shadow:bg};
}},
"button-frame":{alias:d,
style:function(dN){var dP,
dQ;
if(dN.checked&&dN.focused&&!dN.inner){dP=cy;
dQ=f;
}else if(dN.checked){dP=bn;
dQ=f;
}else if(dN.pressed){dP=bM;
dQ=y;
}else if(dN.hovered){dP=bH;
dQ=y;
}else if(dN.preselected&&dN.focused&&!dN.inner){dP=cm;
dQ=y;
}else if(dN.preselected){dP=cw;
dQ=y;
}else if(dN.focused&&!dN.inner){dP=S;
dQ=f;
}else{dP=n;
dQ=f;
}return {decorator:dP,
textColor:dQ};
}},
"button":{alias:b,
include:b,
style:function(dN){return {padding:[2,
8],
center:true};
}},
"splitbutton":{},
"splitbutton/button":n,
"splitbutton/arrow":{alias:n,
include:n,
style:function(dN){return {icon:l,
padding:2,
marginLeft:1};
}},
"checkbox":{alias:d,
style:function(dN){var dO;
if(dN.checked&&dN.focused){dO=cj;
}else if(dN.checked&&dN.disabled){dO=cO;
}else if(dN.checked&&dN.pressed){dO=dk;
}else if(dN.checked&&dN.hovered){dO=cK;
}else if(dN.checked){dO=bS;
}else if(dN.disabled){dO=cD;
}else if(dN.focused){dO=cT;
}else if(dN.pressed){dO=cp;
}else if(dN.hovered){dO=bR;
}else{dO=L;
}return {icon:bj+dO+ba,
gap:6};
}},
"radiobutton":{alias:d,
style:function(dN){var dO;
if(dN.checked&&dN.focused){dO=bA;
}else if(dN.checked&&dN.disabled){dO=cQ;
}else if(dN.checked&&dN.pressed){dO=ds;
}else if(dN.checked&&dN.hovered){dO=cW;
}else if(dN.checked){dO=cb;
}else if(dN.disabled){dO=bL;
}else if(dN.focused){dO=dx;
}else if(dN.pressed){dO=du;
}else if(dN.hovered){dO=bp;
}else{dO=I;
}return {icon:bj+dO+ba,
gap:6};
}},
"textfield":{style:function(dN){return {decorator:dN.focused?F:p,
padding:[2,
4,
1],
textColor:dN.disabled?t:U};
}},
"textarea":{style:function(dN){return {decorator:dN.focused?F:p,
padding:4,
textColor:dN.disabled?t:U};
}},
"spinner":{style:function(dN){return {decorator:dN.focused?F:p};
}},
"spinner/textfield":{include:C,
style:function(dN){return {decorator:a,
padding:[2,
4,
1]};
}},
"spinner/upbutton":{alias:b,
include:b,
style:function(dN){return {icon:dC,
padding:dN.pressed?[2,
2,
0,
4]:[1,
3,
1,
3]};
}},
"spinner/downbutton":{alias:b,
include:b,
style:function(dN){return {icon:cH,
padding:dN.pressed?[2,
2,
0,
4]:[1,
3,
1,
3]};
}},
"datefield":K,
"datefield/button":{alias:O,
include:O,
style:function(dN){return {icon:cd,
padding:[0,
3],
decorator:a};
}},
"datefield/textfield":{style:function(dN){return {padding:[2,
4,
1]};
}},
"datefield/list":{alias:bc,
include:bc,
style:function(dN){return {decorator:a};
}},
"groupbox":{style:function(dN){return {legendPosition:cU};
}},
"groupbox/legend":{alias:d,
style:function(dN){return {padding:[1,
0,
1,
4],
textColor:M,
font:j};
}},
"groupbox/frame":{style:function(dN){return {padding:12,
decorator:ce};
}},
"check-groupbox":i,
"check-groupbox/legend":{alias:L,
include:L,
style:function(dN){return {padding:[1,
0,
1,
4],
textColor:M,
font:j};
}},
"radio-groupbox":i,
"radio-groupbox/legend":{alias:I,
include:I,
style:function(dN){return {padding:[1,
0,
1,
4],
textColor:M};
}},
"scrollarea":c,
"scrollarea/corner":{style:function(dN){return {backgroundColor:H};
}},
"scrollarea/pane":c,
"scrollarea/scrollbar-x":w,
"scrollarea/scrollbar-y":w,
"scrollbar":{style:function(dN){return {width:dN.horizontal?a:16,
height:dN.horizontal?16:a,
decorator:dN.horizontal?dG:cu,
padding:1};
}},
"scrollbar/slider":{alias:dc,
style:function(dN){return {padding:dN.horizontal?[0,
1,
0,
1]:[1,
0,
1,
0]};
}},
"scrollbar/slider/knob":{include:b,
style:function(dN){return {decorator:dN.horizontal?Q:cL,
minHeight:dN.horizontal?a:14,
minWidth:dN.horizontal?14:a};
}},
"scrollbar/button":{alias:b,
include:b,
style:function(dN){var dO=bI;
if(dN.left){dO+=dp;
}else if(dN.right){dO+=bE;
}else if(dN.up){dO+=cz;
}else{dO+=df;
}
if(dN.left||dN.right){return {padding:[0,
0,
0,
dN.left?3:4],
icon:dO,
width:15,
height:14};
}else{return {padding:[0,
0,
0,
2],
icon:dO,
width:14,
height:15};
}}},
"scrollbar/button-begin":N,
"scrollbar/button-end":N,
"slider":{style:function(dN){return {decorator:p};
}},
"slider/knob":{include:b,
style:function(dN){return {decorator:Q,
height:14,
width:14};
}},
"list":{alias:ct,
style:function(dN){return {backgroundColor:h,
decorator:e};
}},
"list/pane":c,
"listitem":{alias:d,
style:function(dN){return {padding:4,
textColor:dN.selected?m:a,
decorator:dN.selected?q:a};
}},
"slidebar":{},
"slidebar/scrollpane":{},
"slidebar/content":{},
"slidebar/button-forward":{alias:b,
include:b,
style:function(dN){return {padding:5,
center:true,
icon:dN.barLeft||dN.barRight?l:G};
}},
"slidebar/button-backward":{alias:b,
include:b,
style:function(dN){return {padding:5,
center:true,
icon:dN.barLeft||dN.barRight?dr:R};
}},
"tabview":{style:function(dN){return {contentPadding:16};
}},
"tabview/bar":{alias:br,
style:function(dN){var dR={marginBottom:dN.barTop?-1:0,
marginTop:dN.barBottom?-4:0,
marginLeft:dN.barRight?-3:0,
marginRight:dN.barLeft?-1:0,
paddingTop:0,
paddingRight:0,
paddingBottom:0,
paddingLeft:0};
if(dN.barTop||dN.barBottom){dR.paddingLeft=5;
dR.paddingRight=7;
}else{dR.paddingTop=5;
dR.paddingBottom=7;
}return dR;
}},
"tabview/bar/button-forward":{include:W,
alias:W,
style:function(dN){if(dN.barTop||dN.barBottom){return {marginTop:2,
marginBottom:2};
}else{return {marginLeft:2,
marginRight:2};
}}},
"tabview/bar/button-backward":{include:bd,
alias:bd,
style:function(dN){if(dN.barTop||dN.barBottom){return {marginTop:2,
marginBottom:2};
}else{return {marginLeft:2,
marginRight:2};
}}},
"tabview/bar/scrollpane":{},
"tabview/pane":{style:function(dN){return {decorator:cR,
minHeight:100,
marginBottom:dN.barBottom?-1:0,
marginTop:dN.barTop?-1:0,
marginLeft:dN.barLeft?-1:0,
marginRight:dN.barRight?-1:0};
}},
"tabview-page":c,
"tabview-page/button":{alias:d,
style:function(dN){var dP,
dS=0;
var dT=0,
dU=0,
dV=0,
dW=0;
if(dN.checked){if(dN.barTop){dP=dg;
dS=[6,
14];
dV=dN.firstTab?0:-5;
dW=dN.lastTab?0:-5;
}else if(dN.barBottom){dP=dB;
dS=[6,
14];
dV=dN.firstTab?0:-5;
dW=dN.lastTab?0:-5;
}else if(dN.barRight){dP=dF;
dS=[6,
13];
dT=dN.firstTab?0:-5;
dU=dN.lastTab?0:-5;
}else{dP=bQ;
dS=[6,
13];
dT=dN.firstTab?0:-5;
dU=dN.lastTab?0:-5;
}}else{if(dN.barTop){dP=bW;
dS=[4,
10];
dT=4;
dV=dN.firstTab?5:1;
dW=1;
}else if(dN.barBottom){dP=bF;
dS=[4,
10];
dU=4;
dV=dN.firstTab?5:1;
dW=1;
}else if(dN.barRight){dP=cf;
dS=[4,
10];
dW=5;
dT=dN.firstTab?5:1;
dU=1;
dV=1;
}else{dP=bX;
dS=[4,
10];
dV=5;
dT=dN.firstTab?5:1;
dU=1;
dW=1;
}}return {zIndex:dN.checked?10:5,
decorator:dP,
padding:dS,
marginTop:dT,
marginBottom:dU,
marginLeft:dV,
marginRight:dW,
textColor:dN.checked?ci:by};
}},
"toolbar":{style:function(dN){return {decorator:co,
spacing:2};
}},
"toolbar/part":{style:function(dN){return {decorator:dm,
spacing:2};
}},
"toolbar/part/container":{style:function(dN){return {paddingLeft:2,
paddingRight:2};
}},
"toolbar/part/handle":{style:function(dN){return {source:de,
marginLeft:3,
marginRight:3};
}},
"toolbar-button":{alias:d,
style:function(dN){return {marginTop:2,
marginBottom:2,
padding:dN.pressed||dN.checked||dN.hovered?3:5,
decorator:dN.pressed||dN.checked?bY:dN.hovered?cE:a,
textColor:dN.disabled?t:a};
}},
"toolbar-splitbutton":{style:function(dN){return {marginTop:2,
marginBottom:2};
}},
"toolbar-splitbutton/button":{alias:A,
include:A,
style:function(dN){return {icon:l,
marginTop:a,
marginBottom:a};
}},
"toolbar-splitbutton/arrow":{alias:A,
include:A,
style:function(dN){return {padding:dN.pressed||dN.checked?1:dN.hovered?1:3,
icon:l,
marginTop:a,
marginBottom:a};
}},
"toolbar-separator":{style:function(dN){return {decorator:cl,
margin:7};
}},
"tree":J,
"tree-item":{style:function(dN){return {padding:[2,
6],
textColor:dN.selected?m:a,
decorator:dN.selected?q:a};
}},
"tree-item/icon":{include:s,
style:function(dN){return {paddingRight:5};
}},
"tree-item/label":E,
"tree-item/open":{include:s,
style:function(dN){var dO;
if(dN.selected&&dN.opened){dO=ca;
}else if(dN.selected&&!dN.opened){dO=cA;
}else if(dN.opened){dO=bb;
}else{dO=P;
}return {padding:[0,
5,
0,
2],
source:dO};
}},
"tree-folder":{include:u,
alias:u,
style:function(dN){var dO;
if(dN.small){dO=dN.opened?bk:V;
}else if(dN.large){dO=dN.opened?dh:dA;
}else{dO=dN.opened?cs:di;
}return {icon:dO};
}},
"tree-file":{include:u,
alias:u,
style:function(dN){return {icon:dN.small?bl:dN.large?cP:cv};
}},
"treevirtual":bi,
"treevirtual-folder":{style:function(dN){return {icon:(dN.opened?bk:V)};
}},
"treevirtual-file":{include:bf,
alias:bf,
style:function(dN){return {icon:bl};
}},
"treevirtual-line":{style:function(dN){return {icon:cx};
}},
"treevirtual-contract":{style:function(dN){return {icon:bb,
paddingLeft:3};
}},
"treevirtual-expand":{style:function(dN){return {icon:P,
paddingLeft:5};
}},
"treevirtual-only-contract":v,
"treevirtual-only-expand":B,
"treevirtual-start-contract":v,
"treevirtual-start-expand":B,
"treevirtual-end-contract":v,
"treevirtual-end-expand":B,
"treevirtual-cross-contract":v,
"treevirtual-cross-expand":B,
"treevirtual-end":{style:function(dN){return {icon:bm};
}},
"treevirtual-cross":{style:function(dN){return {icon:bm};
}},
"tooltip":{include:r,
style:function(dN){return {backgroundColor:bJ,
padding:[1,
3,
2,
3],
offset:[1,
1,
20,
1]};
}},
"tooltip/atom":d,
"window":{style:function(dN){return {shadow:bC,
contentPadding:[10,
10,
10,
10]};
}},
"window/pane":{style:function(dN){return {decorator:cY};
}},
"window/captionbar":{style:function(dN){return {decorator:dN.active?bU:dv,
textColor:dN.active?bO:da,
minHeight:26,
paddingRight:2};
}},
"window/icon":{style:function(dN){return {margin:[5,
0,
3,
6]};
}},
"window/title":{style:function(dN){return {alignY:g,
font:j,
marginLeft:6,
marginRight:12};
}},
"window/minimize-button":{alias:d,
style:function(dN){return {icon:dN.active?dN.hovered?bT:cg:cc,
margin:[4,
8,
2,
0]};
}},
"window/restore-button":{alias:d,
style:function(dN){return {icon:dN.active?dN.hovered?bB:cN:ch,
margin:[5,
8,
2,
0]};
}},
"window/maximize-button":{alias:d,
style:function(dN){return {icon:dN.active?dN.hovered?bo:dj:cr,
margin:[4,
8,
2,
0]};
}},
"window/close-button":{alias:d,
style:function(dN){return {icon:dN.active?dN.hovered?cn:bP:dl,
margin:[4,
8,
2,
0]};
}},
"window/statusbar":{style:function(dN){return {padding:[2,
6],
decorator:bG,
minHeight:18};
}},
"window/statusbar-text":{style:function(dN){return {font:dE,
textColor:f};
}},
"iframe":{style:function(dN){return {decorator:e};
}},
"resizer":{style:function(dN){return {decorator:dJ};
}},
"splitpane":{style:function(dN){return {decorator:ck};
}},
"splitpane/splitter":{style:function(dN){return {width:dN.horizontal?3:a,
height:dN.vertical?3:a,
backgroundColor:Y};
}},
"splitpane/splitter/knob":{style:function(dN){return {source:dN.horizontal?dz:dn};
}},
"splitpane/slider":{style:function(dN){return {width:dN.horizontal?3:a,
height:dN.vertical?3:a,
backgroundColor:Y};
}},
"selectbox":{alias:b,
include:b,
style:function(dN){return {padding:[2,
8]};
}},
"selectbox/atom":d,
"selectbox/popup":r,
"selectbox/list":{alias:J},
"selectbox/arrow":{style:function(dN){return {source:l,
paddingRight:4,
paddingLeft:5};
}},
"datechooser":{style:function(dN){return {padding:2,
decorator:e,
backgroundColor:h};
}},
"datechooser/navigation-bar":{},
"datechooser/nav-button":{include:b,
alias:b,
style:function(dN){var dR={padding:[2,
4]};
if(dN.lastYear){dR.icon=cS;
dR.marginRight=1;
}else if(dN.lastMonth){dR.icon=R;
}else if(dN.nextYear){dR.icon=cI;
dR.marginLeft=1;
}else if(dN.nextMonth){dR.icon=G;
}return dR;
}},
"datechooser/last-year-button-tooltip":D,
"datechooser/last-month-button-tooltip":D,
"datechooser/next-year-button-tooltip":D,
"datechooser/next-month-button-tooltip":D,
"datechooser/last-year-button":x,
"datechooser/last-month-button":x,
"datechooser/next-month-button":x,
"datechooser/next-year-button":x,
"datechooser/month-year-label":{style:function(dN){return {font:j,
textAlign:z};
}},
"datechooser/date-pane":{style:function(dN){return {marginTop:2};
}},
"datechooser-weekday":{style:function(dN){return {textColor:dN.weekend?T:a,
textAlign:z,
paddingTop:2,
backgroundColor:bh};
}},
"datechooser-week":{style:function(dN){return {textAlign:z,
textColor:f,
padding:[2,
4],
backgroundColor:bh};
}},
"datechooser-day":{style:function(dN){return {textAlign:z,
decorator:dN.selected?q:a,
textColor:dN.selected?m:dN.otherMonth?T:a,
font:dN.today?j:a,
padding:[2,
4]};
}},
"combobox":{style:function(dN){return {decorator:dN.focused?F:p};
}},
"combobox/popup":r,
"combobox/list":{alias:J},
"combobox/button":{include:b,
alias:b,
style:function(dN){var dX={icon:l,
padding:2};
if(dN.selected){dX.decorator=S;
}return dX;
}},
"combobox/textfield":{include:C,
style:function(dN){return {decorator:null,
padding:[2,
4,
1]};
}},
"menu":{style:function(dN){var dR={decorator:bs,
shadow:bg,
spacingX:6,
spacingY:1,
iconColumnWidth:16,
arrowColumnWidth:4};
if(dN.submenu){dR.position=X;
dR.offset=[-2,
-3];
}return dR;
}},
"menu-separator":{style:function(dN){return {height:0,
decorator:dI,
margin:[4,
2]};
}},
"menu-button":{alias:d,
style:function(dN){return {decorator:dN.selected?q:a,
textColor:dN.selected?m:a,
padding:[4,
6]};
}},
"menu-button/icon":{include:s,
style:function(dN){return {alignY:g};
}},
"menu-button/label":{include:E,
style:function(dN){return {alignY:g,
padding:1};
}},
"menu-button/shortcut":{include:E,
style:function(dN){return {alignY:g,
marginLeft:14,
padding:1};
}},
"menu-button/arrow":{style:function(dN){return {source:dN.selected?dK:G,
alignY:g};
}},
"menu-checkbox":{alias:k,
include:k,
style:function(dN){return {icon:!dN.checked?a:dN.selected?dq:dy};
}},
"menu-radiobutton":{alias:k,
include:k,
style:function(dN){return {icon:!dN.checked?a:dN.selected?db:cG};
}},
"menubar":{style:function(dN){return {decorator:bV};
}},
"menubar-button":{alias:d,
style:function(dN){return {decorator:dN.pressed||dN.hovered?q:a,
textColor:dN.pressed||dN.hovered?m:f,
padding:[3,
8]};
}},
"colorselector":c,
"colorselector/control-bar":c,
"colorselector/control-pane":c,
"colorselector/visual-pane":i,
"colorselector/preset-grid":c,
"colorselector-colorbucket":{style:function(dN){return {decorator:e,
width:16,
height:16};
}},
"colorselector/preset-field-set":i,
"colorselector/input-field-set":i,
"colorselector/preview-field-set":i,
"colorselector/hex-field-composite":c,
"colorselector/hex-field":C,
"colorselector/rgb-spinner-composite":c,
"colorselector/rgb-spinner-red":o,
"colorselector/rgb-spinner-green":o,
"colorselector/rgb-spinner-blue":o,
"colorselector/hsb-spinner-composite":c,
"colorselector/hsb-spinner-hue":o,
"colorselector/hsb-spinner-saturation":o,
"colorselector/hsb-spinner-brightness":o,
"colorselector/preview-content-old":{style:function(dN){return {decorator:e,
width:50,
height:10};
}},
"colorselector/preview-content-new":{style:function(dN){return {decorator:e,
backgroundColor:h,
width:50,
height:10};
}},
"colorselector/hue-saturation-field":{style:function(dN){return {decorator:e,
margin:5};
}},
"colorselector/brightness-field":{style:function(dN){return {decorator:e,
margin:[5,
7]};
}},
"colorselector/hue-saturation-pane":c,
"colorselector/hue-saturation-handle":c,
"colorselector/brightness-pane":c,
"colorselector/brightness-handle":c,
"colorpopup":{alias:r,
include:r,
style:function(dN){return {padding:5,
backgroundColor:H};
}},
"colorpopup/field":{style:function(dN){return {decorator:e,
margin:2,
width:14,
height:14,
backgroundColor:h};
}},
"colorpopup/selector-button":n,
"colorpopup/auto-button":n,
"colorpopup/preview-pane":i,
"colorpopup/current-preview":{style:function(dY){return {height:20,
padding:4,
marginLeft:4,
decorator:e,
allowGrowX:true};
}},
"colorpopup/selected-preview":{style:function(dY){return {height:20,
padding:4,
marginRight:4,
decorator:e,
allowGrowX:true};
}},
"table":{alias:c,
style:function(dN){return {decorator:bi};
}},
"table-header":{},
"table/statusbar":{style:function(dN){return {decorator:dt,
padding:[0,
2]};
}},
"table/column-button":{alias:b,
style:function(dN){return {decorator:bD,
padding:3,
icon:dd};
}},
"table-column-reset-button":{include:k,
alias:k,
style:function(){return {icon:dM};
}},
"table-scroller":c,
"table-scroller/scrollbar-x":w,
"table-scroller/scrollbar-y":w,
"table-scroller/header":{style:function(dN){return {decorator:bK};
}},
"table-scroller/pane":{style:function(dN){return {backgroundColor:bN};
}},
"table-scroller/focus-indicator":{style:function(dN){return {decorator:bt};
}},
"table-scroller/resize-line":{style:function(dN){return {backgroundColor:cq,
width:2};
}},
"table-header-cell":{alias:d,
style:function(dN){return {minWidth:40,
minHeight:20,
padding:dN.hovered?[3,
4,
2,
4]:[3,
4],
decorator:dN.hovered?cX:bw,
sortIcon:dN.sorted?(dN.sortedAscending?dD:cJ):a};
}},
"table-header-cell/label":{style:function(dN){return {minWidth:0,
alignY:g,
paddingRight:5};
}},
"table-header-cell/sort-icon":{style:function(dN){return {alignY:g,
alignX:cV};
}},
"table-header-cell/icon":{style:function(dN){return {minWidth:0,
alignY:g,
paddingRight:5};
}},
"table-editor-textfield":{include:C,
style:function(dN){return {decorator:a,
padding:[2,
2],
backgroundColor:h};
}},
"table-editor-selectbox":{include:be,
alias:be,
style:function(dN){return {padding:[0,
2],
backgroundColor:h};
}},
"table-editor-combobox":{include:K,
alias:K,
style:function(dN){return {decorator:a,
backgroundColor:h};
}},
"progressive-table-header":{alias:c,
style:function(dN){return {decorator:cF};
}},
"progressive-table-header-cell":{alias:d,
style:function(dN){return {minWidth:40,
minHeight:25,
paddingLeft:6,
decorator:dH};
}},
"app-header":{style:function(dN){return {font:j,
textColor:m,
padding:[8,
12],
decorator:bx};
}}}});
})();
(function(){var a="Tango",
b="qx/icon/Tango",
c="qx.theme.icon.Tango";
qx.Theme.define(c,
{title:a,
resource:b,
icons:{}});
})();
(function(){var a="qx.theme.Modern",
b="Modern";
qx.Theme.define(a,
{title:b,
meta:{color:qx.theme.modern.Color,
decoration:qx.theme.modern.Decoration,
font:qx.theme.modern.Font,
appearance:qx.theme.modern.Appearance,
icon:qx.theme.icon.Tango}});
})();
(function(){var a="qx.bom.client.Feature";
qx.Bootstrap.define(a,
{statics:{STANDARD_MODE:false,
QUIRKS_MODE:false,
CONTENT_BOX:false,
BORDER_BOX:false,
SVG:false,
CANVAS:false,
VML:false,
XPATH:false,
__if:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
this.QUIRKS_MODE=!this.STANDARD_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("org.w3c.dom.svg",
"1.0");
this.CANVAS=!!window.CanvasRenderingContext2D;
this.VML=qx.bom.client.Engine.MSHTML;
this.AIR=navigator.userAgent.indexOf("adobeair")!==-1;
this.GEARS=!!(window.google&&window.google.gears);
this.XPATH=!!document.evaluate;
}},
defer:function(b){b.__if();
}});
})();
