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
(function(){var a="qx.application.Native";
qx.Class.define(a,
{extend:qx.core.Object,
implement:[qx.application.IApplication],
members:{main:function(){},
finalize:function(){},
terminate:function(){}}});
})();
(function(){var a="qx.application.Simple";
qx.Class.define(a,
{extend:qx.application.Native,
members:{main:function(){arguments.callee.base.call(this);
if(window.qxmain){window.qxmain.call(this);
}},
terminate:function(){arguments.callee.base.call(this);
if(window.qxterminate){window.qxterminate.call(this);
}}}});
})();
(function(){var a="mshtml",
b="portal.Application",
c="qx.client";
qx.Class.define(b,
{extend:qx.application.Simple,
members:{main:function(){arguments.callee.base.call(this);
{};
var d=portal.box.Manager.getInstance().load();
var e=portal.dragdrop.Manager.getInstance();
if(qx.core.Variant.isSet(c,
a)){qx.log.appender.Console.init();
}}}});
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
(function(){var a="groupBoxes",
b="boxData",
c="portal.box.Box",
d="__tB",
e="__tz",
f="__tA",
g="portal.box.Manager",
h="qx.event.type.Event",
m="boxes",
n="_applyActiveBox",
o="loaded",
p="singleton";
qx.Class.define(g,
{type:p,
extend:qx.core.Object,
statics:{dataKeyRoot:b,
dataKeyGroupBoxes:a,
dataKeyBoxes:m},
events:{"loaded":h},
properties:{activeBox:{init:null,
check:c,
apply:n}},
members:{__tz:[],
__tA:[],
__tB:{},
_applyActiveBox:function(q,
r){if(r!=null){r.setActive(false);
}q.setActive(true);
},
load:function(){this._init(window[portal.box.Manager.dataKeyRoot]);
qx.event.Registration.fireEvent(this,
o);
},
_init:function(s){var t,
u,
v,
w,
x,
s;
var y=s[portal.box.Manager.dataKeyGroupBoxes];
var z=s[portal.box.Manager.dataKeyBoxes];
for(var u in y){t=y[u];
v=t.boxes;
u=t.id;
w={id:u,
element:document.getElementById(u)};
this.__tA.push(w);
this.__tB[u]=[];
for(var A=0,
B=v.length;A<B;A++){s=z[v[A]];
var C=document.getElementById(s.id);
var x=new portal.box.Box(s,
C,
null,
u);
this.__tz.push(x);
this.__tB[u].push(x);
}}},
getBoxes:function(){return this.__tz;
},
getGroupBoxes:function(){return this.__tA;
},
updateGroupBoxMembers:function(D,
E,
F){var G=qx.dom.Hierarchy.getElementIndex(F.getElement());
qx.lang.Array.remove(this.__tB[E],
F);
qx.lang.Array.insertAt(this.__tB[D],
F,
G);
},
getGroupBoxDataOfBox:function(H){for(var I=0,
J=this.__tA.length,
z;I<J;I++){z=this.__tB[this.__tA[I].id];
for(var A=0,
B=z.length;A<B;A++){if(z[A].getId()===H){return this.__tA[I];
}}}return null;
}},
destruct:function(){this._disposeFields(e,
f,
d);
}});
})();
(function(){var a="Boolean",
b="border",
c="height",
d="accumsan sit amet, nibh. Nam ut est. Nullam ultricies congue ",
f="erat volutpat. Praesent lorem arcu, cursus vel, congue vitae, ",
g="__tE",
h="__tC",
i="div",
j="1px solid orange",
k="orci. Morbi nulla. Donec quis ipsum.",
l="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
m="_applyActive",
n="at, justo. Sed aliquam aliquam orci. Sed in purus. Aliquam ",
o="relative",
p="String",
q="1px solid #444444",
r="width",
s="zIndex",
t="__tF",
u="portal.box.Box",
v="click",
w="position",
x="Sed molestie volutpat lorem. Donec consequat magna ut ipsum. ",
y="Integer enim ligula, placerat et, posuere sit amet, tempor ",
z="box_content";
qx.Class.define(u,
{extend:qx.core.Object,
construct:function(A,
B,
C,
D){arguments.callee.base.call(this);
this.__tC=A;
this.__tD=A.id;
if(B!=null){qx.bom.element.Style.set(B,
r,
A.width);
qx.bom.element.Style.set(B,
c,
A.height);
this.__tG(B,
C);
}this.setElement(B);
this.setGroupBoxId(D);
this.__tE=null;
this.__tF=null;
if(A.resizable){this.setResizable(true);
var E={minWidth:parseInt(A.minWidth),
minHeight:parseInt(A.minHeight),
maxWidth:parseInt(A.maxWidth),
maxHeight:parseInt(A.maxHeight),
handles:A.resizeHandles};
this.__tE=new portal.box.Resizable(this,
E);
}if(A.draggable){this.setDraggable(true);
this.__tF=new portal.box.Draggable(this);
}this.__tH();
},
properties:{element:{init:null},
groupBoxId:{init:null,
check:p},
active:{check:a,
init:false,
apply:m},
resizable:{check:a,
init:false},
draggable:{check:a,
init:false}},
members:{_applyActive:function(F,
G){if(F){qx.bom.element.Style.set(this.getElement(),
b,
j);
}else{qx.bom.element.Style.set(this.getElement(),
b,
q);
}},
getId:function(){return this.getElement()?this.getElement().id:null;
},
getData:function(){return this.__tC;
},
getDraggableComponent:function(){return this.__tF;
},
getResizableComponent:function(){return this.__tE;
},
__tG:function(B,
C){if(C){for(var H in C){qx.bom.element.Style.set(H,
C[H]);
}}qx.bom.element.Style.set(B,
w,
o);
qx.bom.element.Style.set(B,
s,
0);
qx.bom.Element.addListener(B,
v,
this.__tI,
this,
true);
},
__tH:function(){var I=l+x+y+n+f+d+k;
var J=qx.bom.Element.create(i,
{"class":z});
J.innerHTML=I;
qx.dom.Element.insertEnd(J,
this.getElement());
},
__tI:function(K){portal.box.Manager.getInstance().setActiveBox(this);
}},
destruct:function(){this.resetElement();
this._disposeFields(h,
g,
t);
}});
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
(function(){var a="visibility",
b="paddingRight",
c="hidden",
d="mouseout",
f="paddingLeft",
g="qx.client",
h="orientation",
i="borderRightWidth",
j="borderLeftWidth",
k="visible",
l="mousemove",
m="marginLeft",
n="mouseover",
o="marginRight",
p="mshtml",
q="text",
r="mousedown",
s='px',
t="height",
u="px",
v="Handle",
w="div",
x="portal.box.Resizable",
y='paddingBottom',
z='paddingLeft',
A="__tK",
B='paddingTop',
C="_elementProperties",
D='paddingRight',
E="__tN",
F="width",
G="_",
H="southeast",
I="__tL",
J="paddingBottom",
K="paddingTop",
L="east",
M="mouseup",
N="south",
O="__tJ",
P="__tO";
qx.Class.define(x,
{extend:qx.core.Object,
construct:function(Q,
R){arguments.callee.base.call(this);
this.__tJ=Q;
this.__tK=this.__tJ.getElement();
this.__tL={};
this.__tM=false;
this.__tN=null;
this.__tO={minWidth:10,
minHeight:10,
maxWidth:null,
maxHeight:null,
autoHide:true,
handles:3};
for(var S in this.__tO){if(R[S]){this.__tO[S]=R[S];
}}this.__tQ();
},
members:{_elementProperties:null,
__tP:{orientation:null,
lastCoord:{left:null,
top:null}},
getBox:function(){return this.__tJ;
},
__tQ:function(){this._elementProperties={paddingTop:parseInt(qx.bom.element.Style.get(this.__tK,
K)),
paddingRight:parseInt(qx.bom.element.Style.get(this.__tK,
b)),
paddingBottom:parseInt(qx.bom.element.Style.get(this.__tK,
J)),
paddingLeft:parseInt(qx.bom.element.Style.get(this.__tK,
f))};
switch(this.__tO.handles){case 1:this.__tL.east=null;
break;
case 2:this.__tL.south=null;
break;
case 3:this.__tL.south=null;
this.__tL.southeast=null;
this.__tL.east=null;
break;
}for(var T in this.__tL){var U=this.__tL[T]=qx.bom.Element.create(w);
qx.bom.element.Attribute.set(U,
h,
T);
qx.dom.Element.insertEnd(U,
this.__tK);
if(this.__tK.id){U.id=this.__tK.id+G+T;
}this.__tR(T);
this.__tS(T);
}},
__tR:function(T){qx.bom.element.Class.add(this.__tL[T],
T+v);
qx.bom.element.Style.set(this.__tL[T],
a,
this.__tO.autoHide?c:k);
},
__tS:function(T){var U=this.__tL[T];
qx.event.Registration.addListener(U,
r,
this.__tV,
this);
qx.event.Registration.addListener(document.body,
M,
this.__tW,
this);
if(this.__tO.autoHide){qx.event.Registration.addListener(this.__tJ.getElement(),
n,
this.__tT,
this);
qx.event.Registration.addListener(this.__tJ.getElement(),
d,
this.__tU,
this);
}},
__tT:function(V){for(var T in this.__tL){qx.bom.element.Style.set(this.__tL[T],
a,
k);
}},
__tU:function(V){if(!this.__tM){for(var T in this.__tL){qx.bom.element.Style.set(this.__tL[T],
a,
c);
}}},
__tV:function(V){V.stopPropagation();
if(V.isLeftPressed()){qx.event.Registration.addListener(document.body,
l,
this.__tX,
this,
true);
this.__tM=true;
var W=V.getTarget();
this.__tP.orientation=qx.bom.element.Attribute.get(W,
h);
this.__tP.lastCoord.left=V.getDocumentLeft();
this.__tP.lastCoord.top=V.getDocumentTop();
portal.box.Util.bringToFront(this.__tK);
}},
__tW:function(V){V.stopPropagation();
if(this.__tM){qx.event.Registration.removeListener(document.body,
l,
this.__tX,
this,
true);
portal.box.Util.sendToBack(this.__tK);
if(this.__tO.autoHide){for(var T in this.__tL){qx.bom.element.Style.set(this.__tL[T],
a,
c);
}}this.__tM=false;
if(qx.core.Variant.isSet(g,
p)){if(document.selection.type.toLowerCase()==q){document.selection.empty();
}}}},
__tX:function(V){V.stopPropagation();
if(this.__tM){var X={left:null,
top:null};
switch(this.__tP.orientation){case N:X.top=V.getDocumentTop();
break;
case H:X.top=V.getDocumentTop();
X.left=V.getDocumentLeft();
break;
case L:X.left=V.getDocumentLeft();
break;
}this.__tY(X,
this.__tP.lastCoord);
this.__tP.lastCoord.left=V.getDocumentLeft();
this.__tP.lastCoord.top=V.getDocumentTop();
}},
__tY:function(X,
Y){var ba;
var bb=portal.box.Util;
var bc=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__tJ.getId());
var bd=portal.box.Util.getComputedDimension(bc.element);
if(X.left){var ba=X.left-Y.left;
if(ba!==0){var be=qx.bom.element.Dimension.getClientWidth(this.__tK);
var bf=(be+ba)-(this._elementProperties[z]+this._elementProperties[D]);
if((this.__tO.minWidth==null||bf>this.__tO.minWidth)&&(this.__tO.maxWidth==null||bf<=this.__tO.maxWidth)){if(qx.core.Variant.isSet(g,
p)){var bg=bd.width-bb.getStyleProperty(bc.element,
b,
true)-bb.getStyleProperty(this.__tK,
i,
true)-bb.getStyleProperty(this.__tK,
j,
true)-bb.getStyleProperty(this.__tK,
o,
true)-bb.getStyleProperty(this.__tK,
m,
true);
}else{var bg=bd.width-bb.getStyleProperty(bc.element,
b,
true)-bb.getStyleProperty(this.__tK,
b,
true)-bb.getStyleProperty(this.__tK,
f,
true)-bb.getStyleProperty(this.__tK,
i,
true)-bb.getStyleProperty(this.__tK,
j,
true)-bb.getStyleProperty(this.__tK,
o,
true)-bb.getStyleProperty(this.__tK,
m,
true);
}
if(bg>=bf){qx.bom.element.Style.set(this.__tK,
F,
bf+s);
}}}}
if(X.top){var ba=X.top-Y.top;
if(ba!==0){var bh=qx.bom.element.Dimension.getClientHeight(this.__tK);
var bi=(bh+ba)-(this._elementProperties[B]+this._elementProperties[y]);
if((this.__tO.minHeight==null||bi>this.__tO.minHeight)&&(this.__tO.maxHeight==null||bi<=this.__tO.maxHeight)){qx.bom.element.Style.set(this.__tK,
t,
bi+u);
}}}}},
destruct:function(){if(this.__tO.autoHide){qx.event.Registration.removeListener(this.__tJ.getElement(),
n,
this.__tT,
this);
qx.event.Registration.removeListener(this.__tJ.getElement(),
d,
this.__tU,
this);
}this._disposeFields(O,
P,
A,
I,
E,
C);
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
(function(){var a="qx.dom.Element";
qx.Class.define(a,
{statics:{hasChild:function(b,
c){return c.parentNode===b;
},
hasChildren:function(d){return !!d.firstChild;
},
hasChildElements:function(d){d=d.firstChild;
while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},
insertAt:function(e,
b,
f){var g=b.childNodes[f];
if(g){b.insertBefore(e,
g);
}else{b.appendChild(e);
}return true;
},
insertBegin:function(e,
b){if(b.firstChild){this.insertBefore(e,
b.firstChild);
}else{b.appendChild(e);
}},
insertEnd:function(e,
b){b.appendChild(e);
},
insertBefore:function(e,
g){g.parentNode.insertBefore(e,
g);
return true;
},
insertAfter:function(e,
g){var b=g.parentNode;
if(g==b.lastChild){b.appendChild(e);
}else{return this.insertBefore(e,
g.nextSibling);
}return true;
},
remove:function(e){if(!e.parentNode){return false;
}e.parentNode.removeChild(e);
return true;
},
removeChild:function(e,
b){if(e.parentNode!==b){return false;
}b.removeChild(e);
return true;
},
removeChildAt:function(f,
b){var c=b.childNodes[f];
if(!c){return false;
}b.removeChild(c);
return true;
},
replaceChild:function(h,
i){if(!i.parentNode){return false;
}i.parentNode.replaceChild(h,
i);
return true;
},
replaceAt:function(h,
f,
b){var i=b.childNodes[f];
if(!i){return false;
}b.replaceChild(h,
i);
return true;
}}});
})();
(function(){var a="(\\s|$)",
b="(^|\\s)",
c="",
d="qx.bom.element.Class",
e=" ",
f="$2";
qx.Class.define(d,
{statics:{add:function(g,
h){if(!this.has(g,
h)){g.className+=(g.className?e:c)+h;
}return h;
},
get:function(g){return g.className;
},
has:function(g,
h){var i=new RegExp(b+h+a);
return i.test(g.className);
},
remove:function(g,
h){var i=new RegExp(b+h+a);
g.className=g.className.replace(i,
f);
return h;
},
replace:function(g,
j,
k){this.remove(g,
j);
return this.add(g,
k);
},
toggle:function(g,
h){this.has(g,
h)?this.remove(g,
h):this.add(g,
h);
return h;
}}});
})();
(function(){var a="zIndex",
b="mshtml",
c="height",
d="portal.box.Util",
e="width",
f="qx.client",
g="auto";
qx.Class.define(d,
{statics:{__ua:1000,
bringToFront:function(h){var i=this.getStyleProperty(h,
a);
i=i==g?0:i;
qx.bom.element.Style.set(h,
a,
i+portal.box.Util.__ua);
},
sendToBack:function(h){var i=this.getStyleProperty(h,
a);
qx.bom.element.Style.set(h,
a,
i-portal.box.Util.__ua);
},
getStyleProperty:function(h,
j,
k){var l=qx.bom.element.Style.get(h,
j);
return k?parseInt(l):l;
},
getComputedDimension:function(h){var m=portal.box.Util.getStyleProperty(h,
e,
true);
var n=portal.box.Util.getStyleProperty(h,
c,
true);
if(qx.core.Variant.isSet(f,
b)){m=m==0?h.offsetWidth:m;
n=n==0?h.offsetHeight:n;
}return {width:m,
height:n};
}}});
})();
(function(){var a="qx.bom.element.Dimension";
qx.Class.define(a,
{statics:{getWidth:function(b){return b.offsetWidth;
},
getHeight:function(b){return b.offsetHeight;
},
getClientWidth:function(b){return b.clientWidth;
},
getClientHeight:function(b){return b.clientHeight;
},
getScrollWidth:function(b){return b.scrollWidth;
},
getScrollHeight:function(b){return b.scrollHeight;
}}});
})();
(function(){var a="mouseup",
b="dragstart",
c="margin",
d="mousemove",
f="qx.client",
g="mshtml",
h="mousedown",
i="portal.box.Draggable",
j="webkit",
k="borderTopWidth",
l="__uc",
m="mouseover",
n="__ub",
o="paddingTop",
p="drag",
q="dragend",
r="div",
s="move",
t="dragHandle",
u="__ud",
v="cursor";
qx.Class.define(i,
{extend:qx.core.Object,
construct:function(w){arguments.callee.base.call(this);
this.__ub=w;
this.__uc=w.getElement();
this.__ud=null;
this.__ue=null;
this.__uf();
},
members:{getBox:function(){return this.__ub;
},
getElement:function(){return this.__uc;
},
__uf:function(){this.__ug();
this.__uh();
},
__ug:function(){this.__ud=qx.bom.Element.create(r);
qx.bom.element.Class.add(this.__ud,
t);
qx.dom.Element.insertBegin(this.__ud,
this.__uc);
},
__uh:function(){qx.bom.Element.addListener(this.__ud,
h,
this._onMouseDown,
this);
qx.bom.Element.addListener(this.__ud,
m,
function(x){qx.bom.element.Style.set(this,
v,
s);
},
this.__ud);
qx.bom.Element.addListener(this.__ud,
b,
this._onDragStart,
this);
qx.bom.Element.addListener(this.__ud,
q,
portal.dragdrop.Manager.getInstance().stopSession,
portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__ud,
p,
this._onDragMove,
this);
},
_onMouseDown:function(x){if(x.isLeftPressed()){if(qx.core.Variant.isSet(f,
g)){var y=qx.bom.element.Location.getTop(this.__uc,
c)-parseInt(qx.bom.element.Style.get(this.__uc,
o))-parseInt(qx.bom.element.Style.get(this.__uc,
k));
}else if(qx.core.Variant.isSet(f,
j)){var y=qx.bom.element.Location.getTop(this.__uc,
c);
}else{var y=qx.bom.element.Location.getTop(this.__uc);
}this.__ue={left:x.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__uc),
top:x.getDocumentTop()-y};
qx.bom.Element.addListener(document.body,
a,
this._onMouseUp,
this,
true);
qx.event.Registration.fireEvent(this.__ud,
b,
qx.event.type.Event);
}},
_onMouseUp:function(x){x.stopPropagation();
if(portal.dragdrop.Manager.getInstance().isSessionActive()){qx.event.Registration.removeListener(document.body,
d,
this._onDragMove,
this,
true);
}qx.bom.Element.removeListener(document.body,
a,
this._onMouseUp,
this,
true);
portal.dragdrop.Manager.getInstance().stopSession();
},
_onDragStart:function(x){portal.box.Manager.getInstance().setActiveBox(this.__ub);
portal.dragdrop.Manager.getInstance().startSession(this.__ub);
qx.event.Registration.addListener(document.body,
d,
this._onDragMove,
this,
true);
},
_onDragMove:function(x){x.stopPropagation();
var z=x.getDocumentLeft()-this.__ue.left;
var y=x.getDocumentTop()-this.__ue.top;
qx.event.Timer.once(function(){this.checkGroupBox(z);
this.onDragMove(y,
z);
},
portal.dragdrop.Manager.getInstance(),
0);
}},
destruct:function(){this._disposeFields(n,
u,
l);
}});
})();
(function(){var a="margin",
b="qx.client",
c="px",
d="px;",
f="paddingTop",
g="mshtml",
h="webkit",
k="border",
l="Boolean",
m="paddingLeft",
n="__ui",
o="div",
p="absolute",
q="__uo",
r="singleton",
s="top:",
t="__ul",
u="width:",
v="borderTopWidth",
w="height:",
x="spring",
y="paddingBottom",
z="top",
A="__uj",
B="__currentBoxElement",
C="finish",
D="left:",
E="portal.box.Box",
F="__um",
G="opacity:0.5;margin:0;position:absolute;",
H="left",
I="portal.dragdrop.Manager",
J="1px dashed red";
qx.Class.define(I,
{type:r,
extend:qx.core.Object,
properties:{activeBox:{check:E,
init:null,
nullable:true},
sessionActive:{check:l,
init:false}},
members:{__ui:{top:null,
height:null},
__uj:null,
__uk:false,
__ul:{top:0,
left:0},
__um:null,
startSession:function(K){this.setSessionActive(true);
this.setActiveBox(K);
this.__uj=K.getGroupBoxId();
this.__un();
if(this.__um==null){this.__um={};
var L=portal.box.Manager.getInstance().getGroupBoxes();
for(var M=0,
N=L.length;M<N;M++){this.__um[L[M].element.id]={left:qx.bom.element.Location.getLeft(L[M].element),
right:qx.bom.element.Location.getLeft(L[M].element)+qx.bom.element.Dimension.getWidth(L[M].element)};
}}},
__un:function(){if(!this.__uo){this.__uo=qx.bom.Element.create(o);
}var O=this.getActiveBox().getElement();
var P=portal.box.Util.getComputedDimension(O);
this.__up(O,
this.__uo);
qx.bom.element.Class.add(this.__uo,
qx.bom.element.Class.get(O));
if(qx.core.Variant.isSet(b,
g)){var Q=qx.bom.element.Location.getTop(O,
a)-parseInt(qx.bom.element.Style.get(O,
f))-parseInt(qx.bom.element.Style.get(O,
v));
}else if(qx.core.Variant.isSet(b,
h)){var Q=qx.bom.element.Location.getTop(O,
a);
}else{var Q=qx.bom.element.Location.getTop(O);
}var R=G+s+Q+d+D+qx.bom.element.Location.getLeft(O)+d+u+P.width+d+w+P.height+c;
qx.bom.element.Style.setCss(this.__uo,
R);
qx.bom.element.Style.set(O,
k,
J);
qx.dom.Node.getBodyElement(O).appendChild(this.__uo);
portal.box.Util.bringToFront(this.__uo);
},
__up:function(S,
T){while(S.firstChild){T.appendChild(S.firstChild);
}},
stopSession:function(U){this.setSessionActive(false);
var K=this.getActiveBox();
var O=K.getElement();
if(qx.core.Variant.isSet(b,
g)){var Q=qx.bom.element.Location.getTop(O,
a)-parseInt(qx.bom.element.Style.get(O,
f))-parseInt(qx.bom.element.Style.get(O,
y));
var V=qx.bom.element.Location.getLeft(O,
a)-parseInt(qx.bom.element.Style.get(O,
m));
}else if(qx.core.Variant.isSet(b,
h)){var Q=qx.bom.element.Location.getTop(O,
a);
var V=qx.bom.element.Location.getLeft(O,
a);
}else{var Q=qx.bom.element.Location.getTop(O);
var V=qx.bom.element.Location.getLeft(O);
}portal.box.Manager.getInstance().updateGroupBoxMembers(K.getGroupBoxId(),
this.__uj,
K);
K.setGroupBoxId(this.__uj);
var W=new qx.fx.effect.core.Move(this.__uo);
W.set({x:V,
y:Q,
mode:p,
duration:0.5,
transition:x});
W.start();
var X=this;
W.addListener(C,
function(){X.__up(X.__uo,
O);
qx.bom.element.Style.reset(O,
k);
X.__uo.parentNode.removeChild(X.__uo);
if(K.isActive()){K._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(K);
}});
},
onDragMove:function(Q,
V){if(this.__ul.left!=V){qx.bom.element.Style.set(this.__uo,
H,
V+c);
}if(this.__ul.top!=Q){qx.bom.element.Style.set(this.__uo,
z,
Q+c);
}var Y=this.getActiveBox().getElement();
if(this.__ui.top==null){this.__ui.top=qx.bom.element.Location.getTop(Y);
}
if(this.__ui.height==null){this.__ui.height=qx.bom.element.Dimension.getHeight(Y);
}if(this.__uk==false&&Q>=this.__ui.top&&Q<=(this.__ui.top+this.__ui.height)){return;
}var ba;
if(this.__uk){ba=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__uj));
var bb,
bc;
while(ba!=null){if(this.__uq(true,
Q,
Y,
ba)){this.__uk=false;
return;
}ba=qx.dom.Hierarchy.getNextElementSibling(ba);
}}else{ba=Y;
}if(Q-this.__ul.top>0){ba=qx.dom.Hierarchy.getNextElementSibling(ba);
var bb,
bc;
while(ba!=null){if(ba){if(this.__uq(true,
Q,
Y,
ba)){return;
}}ba=qx.dom.Hierarchy.getNextElementSibling(ba);
}}else{var ba=qx.dom.Hierarchy.getPreviousElementSibling(ba);
var bb,
bc;
while(ba!=null){if(ba){if(this.__uq(false,
Q,
Y,
ba)){return;
}}ba=qx.dom.Hierarchy.getPreviousElementSibling(ba);
}}this.__ul.left=V;
this.__ul.top=Q;
},
__uq:function(bd,
Q,
Y,
ba){var bb=qx.bom.element.Location.getTop(ba);
var bc=qx.bom.element.Dimension.getClientHeight(ba);
var be;
if(bd){if(Q>=(bb+(bc/3))){be=qx.dom.Hierarchy.getNextElementSibling(ba);
if(be!=Y||be==null){qx.dom.Element.insertAfter(Y,
ba);
this.__ui.top=qx.bom.element.Location.getTop(Y);
}return true;
}}else{if(Q<=(bb+bc*2/3)){be=qx.dom.Hierarchy.getPreviousElementSibling(ba);
if(be!=Y||be==null){qx.dom.Element.insertBefore(Y,
ba);
this.__ui.top=qx.bom.element.Location.getTop(Y);
}return true;
}}return false;
},
checkGroupBox:function(V){if(this.__um[this.__uj].left<=V&&this.__um[this.__uj].right>=V){return;
}
for(var bf in this.__um){if(bf!=this.__uj){if(this.__um[bf].left<=V&&this.__um[bf].right>=V){this.__uj=bf;
this.__uk=true;
return;
}}}}},
destruct:function(){this._disposeFields(n,
t,
A,
B,
q,
F);
}});
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
(function(){var a="Number",
b="qx.event.type.Event",
c="update",
d="linear",
e="reverse",
f="Boolean",
g="setup",
h="none",
i="qx.fx.Base",
j="sinodial",
k="flicker",
l="__ol",
m="pulse",
n="_applyDuration",
o="easeOutQuad",
p="spring",
q="easeInQuad",
r="full",
s="wobble",
t="finish",
u="Object";
qx.Class.define(i,
{extend:qx.core.Object,
construct:function(v){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__ok=qx.fx.Base.EffectState.IDLE;
this.__ol=v;
},
events:{"setup":b,
"update":b,
"finish":b},
properties:{duration:{init:0.5,
check:a,
apply:n},
fps:{init:100,
check:a},
sync:{init:false,
check:f},
from:{init:0,
check:a},
to:{init:1,
check:a},
delay:{init:0.0,
check:a},
queue:{check:u},
transition:{init:d,
check:[d,
q,
o,
j,
e,
k,
s,
m,
p,
h,
r]}},
statics:{EffectState:{IDLE:'idle',
PREPARING:'preparing',
FINISHED:'finished',
RUNNING:'running'}},
members:{__ok:null,
__om:null,
__on:null,
__oo:null,
__op:null,
__oq:null,
__or:null,
__os:null,
__ol:null,
_getElement:function(){return this.__ol;
},
_setElement:function(v){this.__ol=v;
},
_applyDuration:function(w,
x){},
init:function(){this.__ok=qx.fx.Base.EffectState.PREPARING;
this.__om=0;
this.__on=this.getDelay()*1000+(new Date().getTime());
this.__oo=this.__on+(this.getDuration()*1000);
this.__op=this.getTo()-this.getFrom();
this.__oq=this.__oo-this.__on;
this.__or=this.getFps()*this.getDuration();
},
beforeFinishInternal:function(){},
beforeFinish:function(){},
afterFinishInternal:function(){},
afterFinish:function(){},
beforeSetupInternal:function(){},
beforeSetup:function(){},
afterSetupInternal:function(){},
afertSetup:function(){},
beforeUpdateInternal:function(){},
beforeUpdate:function(){},
afterUpdateInternal:function(){},
afterUpdate:function(){},
beforeStartInternal:function(){},
beforeStart:function(){},
setup:function(){this.fireEvent(g);
},
update:function(y){},
finish:function(){this.fireEvent(t);
},
start:function(){if(this.__ok!=qx.fx.Base.EffectState.IDLE){return false;
}this.init();
this.beforeStartInternal();
this.beforeStart();
if(!this.getSync()){this.getQueue().add(this);
}return true;
},
end:function(){this.render(1.0);
this.cancel();
this.beforeFinishInternal();
this.beforeFinish();
this.finish();
this.afterFinishInternal();
this.afterFinish();
},
render:function(z){if(this.__ok==qx.fx.Base.EffectState.PREPARING){this.__ok=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afertSetup();
}
if(this.__ok==qx.fx.Base.EffectState.RUNNING){this.__os=qx.fx.Transition.get(this.getTransition())(z)*this.__op+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__os);
this.afterUpdateInternal();
this.afterUpdate();
if(this.hasListener(c)){this.fireEvent(c);
}}},
loop:function(A){if(A>=this.__on){if(A>=this.__oo){this.end();
}var z=(A-this.__on)/this.__oq;
var B=Math.round(z*this.__or);
if(B>this.__om){this.render(z);
this.__om=B;
}}},
cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__ok=qx.fx.Base.EffectState.IDLE;
}},
destruct:function(){this._disposeFields(l);
}});
})();
(function(){var a="px",
b="position",
c="relative",
d="Number",
e="top",
f="left",
g='absolute',
h="qx.fx.effect.core.Move",
i="absolute";
qx.Class.define(h,
{extend:qx.fx.Base,
properties:{mode:{init:c,
check:[c,
i]},
x:{init:0,
check:d},
y:{init:0,
check:d}},
members:{__oG:null,
__oH:null,
__oI:null,
__oJ:null,
__oK:null,
setup:function(){var j=this._getElement();
arguments.callee.base.call(this);
if(j.parentNode){this.__oI=qx.bom.element.Location.getLeft(j)-qx.bom.element.Location.getLeft(j.parentNode);
this.__oJ=qx.bom.element.Location.getTop(j)-qx.bom.element.Location.getTop(j.parentNode);
}else{this.__oI=qx.bom.element.Location.getLeft(j);
this.__oJ=qx.bom.element.Location.getTop(j);
}this.__oK=qx.bom.element.Style.get(j,
b);
if(this.getMode()==g){this.__oG=this.getX()-this.__oI;
this.__oH=this.getY()-this.__oJ;
}else{this.__oG=this.getX();
this.__oH=this.getY();
}},
update:function(k){var j=this._getElement();
arguments.callee.base.call(this);
var l=Math.round(this.__oG*k+this.__oI);
var m=Math.round(this.__oH*k+this.__oJ);
qx.bom.element.Style.set(j,
f,
l+a);
qx.bom.element.Style.set(j,
e,
m+a);
},
afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),
b,
this.__oK);
}}});
})();
(function(){var a="__default",
b="qx.fx.queue.Manager",
c="__ot",
d="singleton",
e="object";
qx.Class.define(b,
{extend:qx.core.Object,
type:d,
members:{__ot:{},
getQueue:function(f){if(typeof (this.__ot[f])==e){return this.__ot[f];
}else{return this.__ot[f]=new qx.fx.queue.Queue;
}},
getDefaultQueue:function(){return this.getQueue(a);
}},
destruct:function(){this._disposeMap(c);
}});
})();
(function(){var a="qx.fx.queue.Queue",
b="Number",
c="__ov";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
properties:{limit:{init:Infinity,
check:b}},
members:{__ou:null,
__ov:[],
add:function(d){var e=new Date().getTime();
d._startOn+=e;
d._finishOn+=e;
if(this.__ov.length<this.getLimit()){this.__ov.push(d);
}
if(!this.__ou){this.__ou=qx.lang.Function.periodical(this.loop,
15,
this);
}},
remove:function(d){qx.lang.Array.remove(this.__ov,
d);
if(this.__ov.length==0){window.clearInterval(this.__ou);
delete this.__ou;
}},
loop:function(){var f=new Date().getTime();
for(var g=0,
h=this.__ov.length;g<h;g++){this.__ov[g]&&this.__ov[g].loop(f);
}}},
destruct:function(){this._disposeFields(c);
}});
})();
(function(){var a="Number",
b="static",
c="qx.fx.Transition";
qx.Class.define(c,
{type:b,
statics:{get:function(d){return qx.fx.Transition[d]||false;
},
linear:function(e){return e;
},
easeInQuad:function(e){return Math.pow(2,
10*(e-1));
},
easeOutQuad:function(e){return (-Math.pow(2,
-10*e)+1);
},
sinodial:function(e){return (-Math.cos(e*Math.PI)/2)+0.5;
},
reverse:function(e){return 1-e;
},
flicker:function(e){var e=((-Math.cos(e*Math.PI)/4)+0.75)+Math.random()/4;
return e>1?1:e;
},
wobble:function(e){return (-Math.cos(e*Math.PI*(9*e))/2)+0.5;
},
pulse:function(e,
f){f=(typeof (f)==a)?f:5;
return (Math.round((e%(1/f))*f)==0?Math.floor((e*f*2)-(e*f*2)):1-Math.floor((e*f*2)-(e*f*2)));
},
spring:function(e){return 1-(Math.cos(e*4.5*Math.PI)*Math.exp(-e*6));
},
none:function(e){return 0;
},
full:function(e){return 1;
}}});
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
(function(){var a="",
b='</div>',
c="Up",
d="none",
f="keypress",
g='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',
h="Enter",
i="px",
j='.qxconsole .messages .user-result{background:white}',
k='.qxconsole .messages .level-error{background:#FFE2D5}',
l="div",
m="user-command",
n='<div class="command">',
o='.qxconsole .command input:focus{outline:none;}',
p='.qxconsole .messages .type-key{color:#565656;font-style:italic}',
q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',
r='.qxconsole .messages div{padding:0px 4px;}',
s='.qxconsole .messages .level-debug{background:white}',
t='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',
u="DIV",
v='.qxconsole .messages .level-user{background:#E3EFE9}',
w='<div class="qxconsole">',
x="D",
y='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',
z='.qxconsole .messages .type-string{color:black;font-weight:normal;}',
A='.qxconsole .control a{text-decoration:none;color:black;}',
B='<div class="messages">',
C='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',
D='<input type="text"/>',
E="clear",
F='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',
G='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',
H='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',
I='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',
J='.qxconsole .messages .user-command{color:blue}',
K="F7",
L="qx.log.appender.Console",
M='.qxconsole .messages .level-info{background:#DEEDFA}',
N="block",
O='.qxconsole .messages .level-warn{background:#FFF7D5}',
P='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',
Q='.qxconsole .messages .user-error{background:#FFE2D5}',
R='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',
S='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',
T=">>> ",
U="Down",
V='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(L,
{statics:{init:function(){var W=[H,
R,
A,
g,
r,
J,
j,
Q,
s,
M,
O,
k,
v,
z,
V,
C,
G,
y,
p,
t,
q,
P,
I,
F,
o];
qx.bom.Stylesheet.createElement(W.join(a));
var X=[w,
S,
B,
b,
n,
D,
b,
b];
var Y=document.createElement(u);
Y.innerHTML=X.join(a);
var ba=Y.firstChild;
document.body.appendChild(Y.firstChild);
this.__mX=ba;
this.__mY=ba.childNodes[1];
this.__na=ba.childNodes[2].firstChild;
this.__nf();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},
dispose:function(){qx.event.Registration.removeListener(document.documentElement,
f,
this.__ng,
this);
qx.log.Logger.unregister(this);
},
clear:function(){this.__mY.innerHTML=a;
},
process:function(bb){this.__mY.appendChild(qx.log.appender.Util.toHtml(bb));
this.__nb();
},
__nb:function(){this.__mY.scrollTop=this.__mY.scrollHeight;
},
__nc:true,
toggle:function(){if(!this.__mX){this.init();
}else if(this.__mX.style.display==d){this.__mX.style.display=N;
this.__mY.scrollTop=this.__mY.scrollHeight;
}else{this.__mX.style.display=d;
}},
__nd:[],
execute:function(){var bc=this.__na.value;
if(bc==a){return;
}
if(bc==E){return this.clear();
}var bd=document.createElement(l);
bd.innerHTML=qx.log.appender.Util.escapeHTML(T+bc);
bd.className=m;
this.__nd.push(bc);
this.__ne=this.__nd.length;
this.__mY.appendChild(bd);
this.__nb();
try{var be=window.eval(bc);
}catch(ex){qx.log.Logger.error(ex);
}
if(be!==undefined){qx.log.Logger.debug(be);
}},
__nf:function(bf){this.__mY.style.height=(this.__mX.clientHeight-this.__mX.firstChild.offsetHeight-this.__mX.lastChild.offsetHeight)+i;
},
__ng:function(bf){var bg=bf.getKeyIdentifier();
if((bg==K)||(bg==x&&bf.isCtrlPressed())){this.toggle();
bf.preventDefault();
}if(!this.__mX){return;
}if(!qx.dom.Hierarchy.contains(this.__mX,
bf.getTarget())){return;
}if(bg==h&&this.__na.value!=a){this.execute();
this.__na.value=a;
}if(bg==c||bg==U){this.__ne+=bg==c?-1:1;
this.__ne=Math.min(Math.max(0,
this.__ne),
this.__nd.length);
var bb=this.__nd[this.__ne];
this.__na.value=bb||a;
this.__na.select();
}}},
defer:function(bh){qx.event.Registration.addListener(document.documentElement,
f,
bh.__ng,
bh);
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
(function(){var a="'>",
b="</span>",
c="<span class='type-",
d="</span> ",
e="",
f="[",
g=", ",
h="<span class='object'>",
k="&gt;",
l="<span class='object' title='Object instance with hash code: ",
m="string",
n="level-",
o="0",
p="&lt;",
q="<span class='offset'>",
r="}",
s="qx.log.appender.Util",
t="&amp;",
u="&#39;",
v="DIV",
w="]",
x="<span>",
y="&quot;",
z="<span class='type-key'>",
A="{",
B="</span>:<span class='type-",
C="</span>: ",
D="]</span>: ",
E="map",
F="?";
qx.Class.define(s,
{statics:{toHtml:function(G){var H=[];
var I,
J,
K,
L;
H.push(q,
this.formatOffset(G.offset),
d);
if(G.object){var M=qx.core.ObjectRegistry.fromHashCode(G.object);
if(M){H.push(l+M.$$hash+a,
M.classname,
f,
M.$$hash,
D);
}}else if(G.clazz){H.push(h+G.clazz.classname,
C);
}var N=G.items;
for(var O=0,
P=N.length;O<P;O++){I=N[O];
J=I.text;
if(J instanceof Array){var L=[];
for(var Q=0,
R=J.length;Q<R;Q++){K=J[Q];
if(typeof K===m){L.push(x+this.escapeHTML(K)+b);
}else if(K.key){L.push(z+K.key+B+K.type+a+this.escapeHTML(K.text)+b);
}else{L.push(c+K.type+a+this.escapeHTML(K.text)+b);
}}H.push(c+I.type+a);
if(I.type===E){H.push(A,
L.join(g),
r);
}else{H.push(f,
L.join(g),
w);
}H.push(b);
}else{H.push(c+I.type+a+this.escapeHTML(J)+d);
}}var S=document.createElement(v);
S.innerHTML=H.join(e);
S.className=n+G.level;
return S;
},
formatOffset:function(T,
U){var V=T.toString();
var W=(U||6)-V.length;
var X=e;
for(var O=0;O<W;O++){X+=o;
}return X+V;
},
escapeHTML:function(Y){return String(Y).replace(/[<>&"']/g,
this.__nh);
},
__nh:function(ba){var bb={"<":p,
">":k,
"&":t,
"'":u,
'"':y};
return bb[ba]||F;
}}});
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
(function(){var a="white",
b="black",
c="#3E6CA8",
d="#EBE9ED",
e="#A7A6AA",
f="#EEE",
g="#F3F0F5",
h="gray",
i="#888888",
j="#3E5B97",
k="#FFFFE1",
l="#F3F8FD",
m="#808080",
n="#F4F4F4",
o="#CCCCCC",
p="#DBEAF9",
q="#BCCEE5",
r="#A5BDDE",
s="#7CA0CF",
t="#F6F5F7",
u="qx.theme.classic.Color",
v="#F9F8E9",
w="#DCDFE4",
x="#FAFBFE",
y="#AAAAAA",
z="#85878C";
qx.Theme.define(u,
{colors:{"background":d,
"background-light":g,
"background-focused":l,
"background-focused-inner":p,
"background-disabled":n,
"background-selected":c,
"background-field":a,
"background-pane":x,
"border-lead":i,
"border-light":a,
"border-light-shadow":w,
"border-dark-shadow":e,
"border-dark":z,
"border-focused-light":q,
"border-focused-light-shadow":r,
"border-focused-dark-shadow":s,
"border-focused-dark":c,
"border-separator":m,
"text":b,
"text-disabled":e,
"text-selected":a,
"text-focused":j,
"tooltip":k,
"tooltip-text":b,
"button":d,
"button-hovered":t,
"button-abandoned":v,
"button-checked":g,
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
"date-chooser":a,
"date-chooser-title":[116,
116,
116],
"date-chooser-selected":[52,
52,
52],
"effect":[254,
200,
60],
"table-pane":a,
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
"table-focus-indicator":[179,
217,
255],
"table-row-background-focused-selected":[90,
138,
211],
"table-row-background-focused":[221,
238,
255],
"table-row-background-selected":[51,
94,
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
0],
"table-row-line":f,
"table-column-line":f,
"progressive-table-header":y,
"progressive-table-row-background-even":[250,
248,
243],
"progressive-table-row-background-odd":[255,
255,
255],
"progressive-progressbar-background":h,
"progressive-progressbar-indicator-done":o,
"progressive-progressbar-indicator-undone":a,
"progressive-progressbar-percent-background":h,
"progressive-progressbar-percent-text":a}});
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
(function(){var a="px ",
b=" ",
c=";",
d="Color",
e="Number",
f="border-left:",
g="px",
h="border-bottom:",
i="border-top:",
j="shorthand",
k="border-right:",
l="innerWidthRight",
m='<div style="position:absolute;top:0;left:0;',
n="innerColorBottom",
o='</div>',
p='',
q="scale",
r="__mR",
s="innerColorRight",
t="innerColorTop",
u="innerColorLeft",
v="qx.ui.decoration.Double",
w="",
x='">',
y="innerWidthBottom",
z="__mS",
A="innerWidthLeft",
B="innerWidthTop";
qx.Class.define(v,
{extend:qx.ui.decoration.Single,
construct:function(C,
D,
E,
F,
G){arguments.callee.base.call(this,
C,
D,
E,
F,
G);
if(F!=null){this.setInnerWidth(F);
}
if(G!=null){this.setInnerColor(G);
}},
properties:{innerWidthTop:{check:e,
init:0},
innerWidthRight:{check:e,
init:0},
innerWidthBottom:{check:e,
init:0},
innerWidthLeft:{check:e,
init:0},
innerWidth:{group:[B,
l,
y,
A],
mode:j},
innerColorTop:{nullable:true,
check:d},
innerColorRight:{nullable:true,
check:d},
innerColorBottom:{nullable:true,
check:d},
innerColorLeft:{nullable:true,
check:d},
innerColor:{group:[t,
s,
n,
u],
mode:j}},
members:{__mR:null,
__mS:null,
getMarkup:function(){if(this.__mR){return this.__mR;
}var H=qx.theme.manager.Color.getInstance();
var I=w;
var C=this.getInnerWidthTop();
if(C>0){I+=i+C+a+this.getStyleTop()+b+H.resolve(this.getInnerColorTop())+c;
}var C=this.getInnerWidthRight();
if(C>0){I+=k+C+a+this.getStyleRight()+b+H.resolve(this.getInnerColorRight())+c;
}var C=this.getInnerWidthBottom();
if(C>0){I+=h+C+a+this.getStyleBottom()+b+H.resolve(this.getInnerColorBottom())+c;
}var C=this.getInnerWidthLeft();
if(C>0){I+=f+C+a+this.getStyleLeft()+b+H.resolve(this.getInnerColorLeft())+c;
}{};
var J=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),
this.getBackgroundRepeat(),
I);
var K=p;
var C=this.getWidthTop();
if(C>0){K+=i+C+a+this.getStyleTop()+b+H.resolve(this.getColorTop())+c;
}var C=this.getWidthRight();
if(C>0){K+=k+C+a+this.getStyleRight()+b+H.resolve(this.getColorRight())+c;
}var C=this.getWidthBottom();
if(C>0){K+=h+C+a+this.getStyleBottom()+b+H.resolve(this.getColorBottom())+c;
}var C=this.getWidthLeft();
if(C>0){K+=f+C+a+this.getStyleLeft()+b+H.resolve(this.getColorLeft())+c;
}{};
return this.__mR=m+K+x+J+o;
},
resize:function(L,
C,
M){var N=this.getBackgroundImage()&&this.getBackgroundRepeat()==q;
if(N||qx.bom.client.Feature.CONTENT_BOX){var O=this.getInsets();
var F=C-O.left-O.right;
var P=M-O.top-O.bottom;
}else{var F=C-this.getWidthLeft()-this.getWidthRight();
var P=M-this.getWidthTop()-this.getWidthBottom();
}if(F<0){F=0;
}
if(P<0){P=0;
}var Q=L.getDomElement();
Q.firstChild.style.width=F+g;
Q.firstChild.style.height=P+g;
},
getInsets:function(){if(this.__mS){return this.__mS;
}this.__mS={top:this.getWidthTop()+this.getInnerWidthTop(),
right:this.getWidthRight()+this.getInnerWidthRight(),
bottom:this.getWidthBottom()+this.getInnerWidthBottom(),
left:this.getWidthLeft()+this.getInnerWidthLeft()};
return this.__mS;
}},
destruct:function(){this._disposeFields(r,
z);
}});
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
(function(){var a="border-dark-shadow",
b="border-light",
c="border-dark",
d="border-light-shadow",
e="solid",
f="gray",
g="border-focused-light",
h="border-focused-dark",
i="border-focused-light-shadow",
j="border-focused-dark-shadow",
k="table-header-border",
l="#ffffff",
m="border-separator",
n="#a7a6aa",
o="dotted",
p="effect",
q="tooltip-text",
r="table-focus-indicator",
s="qx/decoration/Classic",
t="border-lead",
u="decoration/shadow/shadow-small.png",
v="qx.theme.classic.Decoration",
w="decoration/shadow/shadow.png";
qx.Theme.define(v,
{resource:s,
decorations:{"main":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:c}},
"inset":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[a,
b,
b,
a],
innerColor:[c,
d,
d,
c]}},
"outset":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[d,
c,
c,
d],
innerColor:[b,
a,
a,
b]}},
"groove":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[a,
b,
b,
a],
innerColor:[b,
a,
a,
b]}},
"ridge":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[b,
a,
a,
b],
innerColor:[a,
b,
b,
a]}},
"inset-thin":{decorator:qx.ui.decoration.Single,
style:{width:1,
color:[a,
b,
b,
a]}},
"outset-thin":{decorator:qx.ui.decoration.Single,
style:{width:1,
color:[b,
a,
a,
b]}},
"focused-inset":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[j,
g,
g,
j],
innerColor:[h,
i,
i,
h]}},
"focused-outset":{decorator:qx.ui.decoration.Double,
style:{width:1,
innerWidth:1,
color:[i,
h,
h,
i],
innerColor:[g,
j,
j,
g]}},
"separator-horizontal":{decorator:qx.ui.decoration.Single,
style:{widthLeft:1,
colorLeft:m}},
"separator-vertical":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:m}},
"shadow":{decorator:qx.ui.decoration.Grid,
style:{baseImage:w,
insets:[4,
8,
8,
4]}},
"shadow-small":{decorator:qx.ui.decoration.Grid,
style:{baseImage:u,
insets:[0,
3,
3,
0]}},
"lead-item":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
style:o,
color:t}},
"tooltip":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:q}},
"toolbar-separator":{decorator:qx.ui.decoration.Single,
style:{widthLeft:1,
colorLeft:a}},
"toolbar-part-handle":{decorator:qx.ui.decoration.Single,
style:{width:1,
style:e,
colorTop:l,
colorLeft:l,
colorRight:n,
colorBottom:n}},
"menu-separator":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
widthBottom:1,
colorTop:c,
colorBottom:b}},
"datechooser-date-pane":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:f,
style:e}},
"datechooser-weekday":{decorator:qx.ui.decoration.Single,
style:{widthBottom:1,
colorBottom:f,
style:e}},
"datechooser-week":{decorator:qx.ui.decoration.Single,
style:{widthRight:1,
colorRight:f,
style:e}},
"datechooser-week-header":{decorator:qx.ui.decoration.Single,
style:{widthBottom:1,
colorBottom:f,
widthRight:1,
colorRight:f,
style:e}},
"tabview-page-button-top":{decorator:qx.ui.decoration.Double,
style:{width:1,
color:[d,
c,
c,
d],
innerWidth:1,
innerColor:[b,
a,
a,
b],
widthBottom:0,
innerWidthBottom:0}},
"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,
style:{width:1,
color:[d,
c,
c,
d],
innerWidth:1,
innerColor:[b,
a,
a,
b],
widthTop:0,
innerWidthTop:0}},
"tabview-page-button-left":{decorator:qx.ui.decoration.Double,
style:{width:1,
color:[d,
c,
c,
d],
innerWidth:1,
innerColor:[b,
a,
a,
b],
widthRight:0,
innerWidthRight:0}},
"tabview-page-button-right":{decorator:qx.ui.decoration.Double,
style:{width:1,
color:[d,
c,
c,
d],
innerWidth:1,
innerColor:[b,
a,
a,
b],
widthLeft:0,
innerWidthLeft:0}},
"table-statusbar":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:a,
styleTop:e}},
"table-scroller-header":{decorator:qx.ui.decoration.Single,
style:{widthBottom:1,
colorBottom:k,
styleBottom:e}},
"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,
style:{width:2,
color:r,
style:e}},
"table-header-cell":{decorator:qx.ui.decoration.Single,
style:{widthRight:1,
colorRight:k,
styleRight:e}},
"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,
style:{widthRight:1,
colorRight:k,
styleRight:e,
widthBottom:2,
colorBottom:p,
styleBottom:e}}}});
})();
(function(){var a="Liberation Sans",
b="Verdana",
c="Bitstream Vera Sans",
d="Lucida Grande",
e="Tahoma",
f="monospace",
g="qx.theme.classic.Font",
h="Courier New",
i="DejaVu Sans Mono";
qx.Theme.define(g,
{fonts:{"default":{size:11,
lineHeight:1.4,
family:[d,
e,
b,
c,
a]},
"bold":{size:11,
lineHeight:1.4,
family:[d,
e,
b,
c,
a],
bold:true},
"small":{size:10,
lineHeight:1.4,
family:[d,
e,
b,
c,
a]},
"monospace":{size:11,
lineHeight:1.4,
family:[i,
h,
f]}}});
})();
(function(){var a="button",
b="undefined",
c="background",
d="widget",
e="inset-thin",
f="atom",
g="outset",
h="inset",
i="groupbox",
j="focused-inset",
k="middle",
l="menu-button",
m="spinner",
n="tooltip",
o="text-disabled",
p="checkbox",
q="text-selected",
r="popup",
s="textfield",
t="list",
u="button-hovered",
v="shadow-small",
w="scrollbar",
x="center",
y="datechooser/button",
z="decoration/arrows/down.gif",
A="main",
B="background-selected",
C="date-chooser",
D="outset-thin",
E="label",
F="date-chooser-title",
G="radiobutton",
H="default",
I="bold",
J="white",
K="combobox",
L="background-focused",
M="toolbar-button",
N="button-abandoned",
O="background-light",
P="background-field",
Q="background-disabled",
R="scrollbar/button",
S="combobox/button",
T="table-header-cell",
U="image",
V="decoration/arrows/right.gif",
W="icon/16/places/folder.png",
X="tree-folder",
Y="icon/16/mimetypes/text-plain.png",
ba="right-top",
bb=".png",
bc="datechooser",
bd="slidebar/button-backward",
be="selectbox",
bf="slidebar/button-forward",
bg="treevirtual-folder",
bh="decoration/form/",
bi="decoration/tree/minus.gif",
bj="icon/16/places/folder-open.png",
bk="decoration/tree/plus.gif",
bl="decoration/arrows/left.gif",
bm="top",
bn="radiobutton-hovered",
bo="decoration/treevirtual/start_plus.gif",
bp="decoration/cursors/",
bq="slidebar",
br="table-scroller-focus-indicator",
bs="move-frame",
bt="nodrop",
bu="tabview-page-button-left",
bv="decoration/arrows/up-small.gif",
bw="move",
bx="radiobutton-checked-focused",
by="#D6D5D9",
bz="qx.theme.classic.Appearance",
bA="decoration/menu/checkbox.gif",
bB="decoration/arrows/rewind.gif",
bC="table-scroller-header",
bD="radiobutton-disabled",
bE="table-pane",
bF="focused-outset",
bG="checkbox-hovered",
bH="text",
bI="datechooser-date-pane",
bJ="background-pane",
bK="decoration/treevirtual/cross_plus.gif",
bL="decoration/arrows/down-small.gif",
bM="datechooser-week",
bN="icon/16/apps/office-calendar.png",
bO="datechooser-weekday",
bP="decoration/treevirtual/end.gif",
bQ="table-header-cell-hover",
bR="window-active-caption-text",
bS="window-active-caption",
bT="icon",
bU="checkbox-checked-focused",
bV="toolbar-separator",
bW="groove",
bX="checkbox-pressed",
bY="decoration/window/restore.gif",
ca="decoration/menu/checkbox-invert.gif",
cb="scrollarea",
cc="window-inactive-caption-text",
cd="button-checked",
ce="up.gif",
cf="tabview-page-button-right",
cg="checkbox-disabled",
ch="tabview-page-button-top",
ci="tabview-page-button-bottom",
cj="decoration/menu/radiobutton.gif",
ck="decoration/arrows/",
cl="decoration/table/descending.png",
cm="tooltip-text",
cn="checkbox-checked-hovered",
co="left.gif",
cp="alias",
cq="checkbox-checked-disabled",
cr="decoration/arrows/right-invert.gif",
cs="radiobutton-checked-disabled",
ct="lead-item",
cu="checkbox-focused",
cv="border-dark",
cw="decoration/treevirtual/end_plus.gif",
cx="decoration/treevirtual/start_minus.gif",
cy="radiobutton-checked-hovered",
cz="decoration/window/minimize.gif",
cA="checkbox-checked",
cB="table-header-cell-hovered",
cC="down.gif",
cD="decoration/treevirtual/cross_minus.gif",
cE="decoration/treevirtual/end_minus.gif",
cF="left",
cG="window-inactive-caption",
cH="decoration/menu/radiobutton-invert.gif",
cI="slider",
cJ="decoration/table/select-column-order.png",
cK="decoration/arrows/next.gif",
cL="decoration/treevirtual/only_minus.gif",
cM="datechooser-week-header",
cN="decoration/window/maximize.gif",
cO="decoration/treevirtual/only_plus.gif",
cP="checkbox-checked-pressed",
cQ="menu-separator",
cR="decoration/splitpane/knob-vertical.png",
cS=".gif",
cT="decoration/arrows/forward.gif",
cU="radiobutton-checked-pressed",
cV="table-statusbar",
cW="radiobutton-pressed",
cX="copy",
cY="radiobutton-focused",
da="decoration/splitpane/knob-horizontal.png",
db="right.gif",
dc="radiobutton-checked",
dd="decoration/treevirtual/cross.gif",
de="decoration/table/ascending.png",
df="decoration/treevirtual/line.gif",
dg="table-header",
dh="date-chooser-selected",
di="toolbar-part-handle",
dj="decoration/window/close.gif",
dk="icon/16/actions/view-refresh.png";
qx.Theme.define(bz,
{appearances:{"widget":{},
"label":{style:function(dl){return {textColor:dl.disabled?o:b};
}},
"image":{style:function(dl){return {opacity:!dl.replacement&&dl.disabled?0.3:b};
}},
"atom":{},
"atom/label":E,
"atom/icon":U,
"root":{style:function(dl){return {backgroundColor:c,
textColor:bH,
font:H};
}},
"popup":{style:function(dl){return {decorator:A,
backgroundColor:bJ,
shadow:v};
}},
"tooltip":{include:r,
style:function(dl){return {backgroundColor:n,
textColor:cm,
decorator:n,
shadow:v,
padding:[1,
3,
2,
3],
offset:[1,
1,
20,
1]};
}},
"tooltip/atom":f,
"iframe":{style:function(dl){return {backgroundColor:J,
decorator:h};
}},
"move-frame":{style:function(dl){return {decorator:A};
}},
"resize-frame":bs,
"dragdrop-cursor":{style:function(dl){var dm=bt;
if(dl.copy){dm=cX;
}else if(dl.move){dm=bw;
}else if(dl.alias){dm=cp;
}return {source:bp+dm+cS,
position:ba,
offset:[2,
16,
2,
6]};
}},
"button":{alias:f,
style:function(dl){if(dl.pressed||dl.abandoned||dl.checked){var dn=!dl.inner&&dl.focused?j:h;
}else{var dn=!dl.inner&&dl.focused?bF:g;
}
if(dl.pressed||dl.abandoned||dl.checked){var dp=[4,
3,
2,
5];
}else{var dp=[3,
4];
}return {backgroundColor:dl.abandoned?N:dl.hovered?u:dl.checked?cd:a,
decorator:dn,
padding:dp};
}},
"splitbutton":{},
"splitbutton/button":a,
"splitbutton/arrow":{alias:a,
include:a,
style:function(dl){return {icon:z};
}},
"scrollarea/corner":{style:function(){return {backgroundColor:c,
width:0,
height:0};
}},
"scrollarea":d,
"scrollarea/pane":d,
"scrollarea/scrollbar-x":w,
"scrollarea/scrollbar-y":w,
"list":{alias:cb,
style:function(dl){return {decorator:dl.focused?j:h,
backgroundColor:dl.focused?L:J};
}},
"listitem":{alias:f,
style:function(dl){return {gap:4,
padding:dl.lead?[2,
4]:[3,
5],
backgroundColor:dl.selected?B:b,
textColor:dl.selected?q:b,
decorator:dl.lead?ct:b};
}},
"textfield":{style:function(dl){return {decorator:dl.focused?j:h,
padding:[2,
3],
textColor:dl.disabled?o:b,
backgroundColor:dl.disabled?Q:dl.focused?L:P};
}},
"textarea":s,
"checkbox":{alias:f,
style:function(dl){var dm;
if(dl.checked&&dl.focused){dm=bU;
}else if(dl.checked&&dl.disabled){dm=cq;
}else if(dl.checked&&dl.pressed){dm=cP;
}else if(dl.checked&&dl.hovered){dm=cn;
}else if(dl.checked){dm=cA;
}else if(dl.disabled){dm=cg;
}else if(dl.focused){dm=cu;
}else if(dl.pressed){dm=bX;
}else if(dl.hovered){dm=bG;
}else{dm=p;
}return {icon:bh+dm+bb,
gap:6};
}},
"radiobutton":{alias:p,
include:p,
style:function(dl){var dm;
if(dl.checked&&dl.focused){dm=bx;
}else if(dl.checked&&dl.disabled){dm=cs;
}else if(dl.checked&&dl.pressed){dm=cU;
}else if(dl.checked&&dl.hovered){dm=cy;
}else if(dl.checked){dm=dc;
}else if(dl.disabled){dm=bD;
}else if(dl.focused){dm=cY;
}else if(dl.pressed){dm=cW;
}else if(dl.hovered){dm=bn;
}else{dm=G;
}return {icon:bh+dm+bb};
}},
"spinner":{style:function(dl){return {decorator:dl.focused?j:h,
textColor:dl.disabled?o:b};
}},
"spinner/textfield":{include:s,
style:function(dl){return {decorator:b,
padding:[2,
3]};
}},
"spinner/upbutton":{alias:a,
include:a,
style:function(dl){return {icon:bv,
padding:dl.pressed?[2,
2,
0,
4]:[1,
3,
1,
3],
backgroundColor:dl.hovered?u:a};
}},
"spinner/downbutton":{alias:a,
include:a,
style:function(dl){return {icon:bL,
padding:dl.pressed?[2,
2,
0,
4]:[1,
3,
1,
3],
backgroundColor:dl.hovered?u:a};
}},
"datefield":K,
"datefield/button":{alias:S,
include:S,
style:function(dl){return {icon:bN,
padding:[0,
3],
backgroundColor:dl.disabled?Q:dl.focused?L:P,
decorator:b};
}},
"datefield/list":{alias:bc,
include:bc,
style:function(dl){return {decorator:dl.focused?j:h};
}},
"groupbox":{style:function(dl){return {backgroundColor:c};
}},
"groupbox/legend":{alias:f,
style:function(dl){return {backgroundColor:c,
paddingRight:4,
paddingLeft:4,
marginRight:10,
marginLeft:10};
}},
"groupbox/frame":{style:function(dl){return {padding:[12,
9],
decorator:bW};
}},
"check-groupbox":i,
"check-groupbox/legend":{alias:p,
include:p,
style:function(dl){return {backgroundColor:c,
paddingRight:3,
paddingLeft:3,
marginRight:10,
marginLeft:10};
}},
"radio-groupbox":i,
"radio-groupbox/legend":{alias:G,
include:G,
style:function(dl){return {backgroundColor:c,
paddingRight:3,
paddingLeft:3,
marginRight:10,
marginLeft:10};
}},
"toolbar":{style:function(dl){return {decorator:D,
backgroundColor:c};
}},
"toolbar/part":{},
"toolbar/part/container":{},
"toolbar/part/handle":{style:function(dl){return {decorator:di,
backgroundColor:c,
width:4,
margin:[3,
2],
allowGrowY:true};
}},
"toolbar-separator":{style:function(dl){return {width:1,
margin:[3,
2],
decorator:bV};
}},
"toolbar-button":{alias:f,
style:function(dl){if(dl.pressed||dl.checked||dl.abandoned){var dq=e;
var dp=[3,
2,
1,
4];
}else if(dl.hovered){var dq=D;
var dp=[2,
3];
}else{var dq=b;
var dp=[3,
4];
}return {cursor:H,
decorator:dq,
padding:dp,
backgroundColor:dl.abandoned?N:dl.checked?O:a};
}},
"toolbar-splitbutton":{},
"toolbar-splitbutton/button":M,
"toolbar-splitbutton/arrow":{alias:M,
include:M,
style:function(dl){return {icon:z};
}},
"slidebar":{},
"slidebar/scrollpane":{},
"slidebar/content":{},
"slidebar/button-forward":{alias:a,
include:a,
style:function(dl){return {icon:cK};
}},
"slidebar/button-backward":{alias:a,
include:a,
style:function(dl){return {icon:bl};
}},
"tabview":{},
"tabview/bar":{alias:bq,
style:function(dl){var dr=0,
ds=0,
dt=0,
du=0;
if(dl.barTop){dt=-2;
}else if(dl.barBottom){dr=-2;
}else if(dl.barRight){du=-2;
}else{ds=-2;
}return {marginBottom:dt,
marginTop:dr,
marginLeft:du,
marginRight:ds};
}},
"tabview/bar/button-forward":{include:bf,
alias:bf,
style:function(dl){if(dl.barTop||dl.barBottom){return {marginTop:2,
marginBottom:2};
}else{return {marginLeft:2,
marginRight:2};
}}},
"tabview/bar/button-backward":{include:bd,
alias:bd,
style:function(dl){if(dl.barTop||dl.barBottom){return {marginTop:2,
marginBottom:2};
}else{return {marginLeft:2,
marginRight:2};
}}},
"tabview/pane":{style:function(dl){return {backgroundColor:c,
decorator:g,
padding:10};
}},
"tabview-page":{},
"tabview-page/button":{alias:a,
style:function(dl){var dn;
var dr=0,
ds=0,
dt=0,
du=0;
if(dl.barTop||dl.barBottom){var dv=2,
dw=2,
dx=6,
dy=6;
}else{var dv=6,
dw=6,
dx=6,
dy=6;
}
if(dl.barTop){dn=ch;
}else if(dl.barRight){dn=cf;
}else if(dl.barBottom){dn=ci;
}else{dn=bu;
}
if(dl.checked){if(dl.barTop||dl.barBottom){dx+=2;
dy+=2;
}else{dv+=2;
dw+=2;
}}else{if(dl.barTop||dl.barBottom){dt+=2;
dr+=2;
}else if(dl.barLeft||dl.barRight){ds+=2;
du+=2;
}}
if(dl.checked){if(!dl.firstTab){if(dl.barTop||dl.barBottom){du=-4;
}else{dr=-4;
}}
if(!dl.lastTab){if(dl.barTop||dl.barBottom){ds=-4;
}else{dt=-4;
}}}return {zIndex:dl.checked?10:5,
decorator:dn,
backgroundColor:c,
iconPosition:dl.barLeft||dl.barRight?bm:cF,
padding:[dv,
dy,
dw,
dx],
margin:[dr,
ds,
dt,
du]};
}},
"scrollbar":{},
"scrollbar/slider":{alias:cI,
style:function(dl){return {backgroundColor:O};
}},
"scrollbar/slider/knob":{include:a,
style:function(dl){return {height:14,
width:14,
minHeight:dl.horizontal?b:14,
minWidth:dl.horizontal?14:b};
}},
"scrollbar/button":{alias:a,
include:a,
style:function(dl){var dp;
if(dl.up||dl.down){if(dl.pressed||dl.abandoned||dl.checked){dp=[5,
2,
3,
4];
}else{dp=[4,
3];
}}else{if(dl.pressed||dl.abandoned||dl.checked){dp=[4,
3,
2,
5];
}else{dp=[3,
4];
}}var dm=ck;
if(dl.left){dm+=co;
}else if(dl.right){dm+=db;
}else if(dl.up){dm+=ce;
}else{dm+=cC;
}return {padding:dp,
icon:dm};
}},
"scrollbar/button-begin":R,
"scrollbar/button-end":R,
"slider":{style:function(dl){return {backgroundColor:O,
decorator:dl.focused?j:h};
}},
"slider/knob":{include:a,
style:function(dl){return {width:14,
height:14,
decorator:g};
}},
"tree-folder/open":{style:function(dl){return {source:dl.opened?bi:bk};
}},
"tree-folder":{style:function(dl){return {padding:[2,
3,
2,
0],
icon:dl.opened?bj:W};
}},
"tree-folder/icon":{style:function(dl){return {padding:[0,
4,
0,
0]};
}},
"tree-folder/label":{style:function(dl){return {padding:[1,
2],
backgroundColor:dl.selected?B:b,
textColor:dl.selected?q:b};
}},
"tree-file":{include:X,
alias:X,
style:function(dl){return {icon:Y};
}},
"tree":{include:t,
alias:t,
style:function(dl){return {contentPadding:[4,
4,
4,
4]};
}},
"treevirtual":{style:function(dl){return {decorator:A};
}},
"treevirtual-folder":{style:function(dl){return {icon:(dl.opened?bj:W)};
}},
"treevirtual-file":{include:bg,
alias:bg,
style:function(dl){return {icon:Y};
}},
"treevirtual-line":{style:function(dl){return {icon:df};
}},
"treevirtual-contract":{style:function(dl){return {icon:bi};
}},
"treevirtual-expand":{style:function(dl){return {icon:bk};
}},
"treevirtual-only-contract":{style:function(dl){return {icon:cL};
}},
"treevirtual-only-expand":{style:function(dl){return {icon:cO};
}},
"treevirtual-start-contract":{style:function(dl){return {icon:cx};
}},
"treevirtual-start-expand":{style:function(dl){return {icon:bo};
}},
"treevirtual-end-contract":{style:function(dl){return {icon:cE};
}},
"treevirtual-end-expand":{style:function(dl){return {icon:cw};
}},
"treevirtual-cross-contract":{style:function(dl){return {icon:cD};
}},
"treevirtual-cross-expand":{style:function(dl){return {icon:bK};
}},
"treevirtual-end":{style:function(dl){return {icon:bP};
}},
"treevirtual-cross":{style:function(dl){return {icon:dd};
}},
"window":{style:function(dl){return {contentPadding:[10,
10,
10,
10],
backgroundColor:c,
decorator:dl.maximized?b:g,
shadow:v};
}},
"window/pane":{},
"window/captionbar":{style:function(dl){return {padding:1,
backgroundColor:dl.active?bS:cG,
textColor:dl.active?bR:cc};
}},
"window/icon":{style:function(dl){return {marginRight:4};
}},
"window/title":{style:function(dl){return {cursor:H,
font:I,
marginRight:20,
alignY:k};
}},
"window/minimize-button":{include:a,
alias:a,
style:function(dl){return {icon:cz,
padding:dl.pressed||dl.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window/restore-button":{include:a,
alias:a,
style:function(dl){return {icon:bY,
padding:dl.pressed||dl.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window/maximize-button":{include:a,
alias:a,
style:function(dl){return {icon:cN,
padding:dl.pressed||dl.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window/close-button":{include:a,
alias:a,
style:function(dl){return {marginLeft:2,
icon:dj,
padding:dl.pressed||dl.abandoned?[2,
1,
0,
3]:[1,
2]};
}},
"window/statusbar":{style:function(dl){return {decorator:e,
padding:[2,
6]};
}},
"window/statusbar-text":E,
"resizer":{style:function(dl){return {decorator:g};
}},
"splitpane":{},
"splitpane/splitter":{style:function(dl){return {backgroundColor:c};
}},
"splitpane/splitter/knob":{style:function(dl){return {source:dl.horizontal?da:cR,
padding:2};
}},
"splitpane/slider":{style:function(dl){return {backgroundColor:cv,
opacity:0.3};
}},
"selectbox":a,
"selectbox/atom":f,
"selectbox/popup":r,
"selectbox/list":t,
"selectbox/arrow":{style:function(dl){return {source:z,
paddingRight:4,
paddingLeft:5};
}},
"datechooser":{style:function(dl){return {decorator:g};
}},
"datechooser/navigation-bar":{style:function(dl){return {backgroundColor:C,
padding:[2,
10]};
}},
"datechooser/last-year-button-tooltip":n,
"datechooser/last-month-button-tooltip":n,
"datechooser/next-year-button-tooltip":n,
"datechooser/next-month-button-tooltip":n,
"datechooser/last-year-button":y,
"datechooser/last-month-button":y,
"datechooser/next-year-button":y,
"datechooser/next-month-button":y,
"datechooser/button/icon":{},
"datechooser/button":{style:function(dl){var dz={width:17,
show:bT};
if(dl.lastYear){dz.icon=bB;
}else if(dl.lastMonth){dz.icon=bl;
}else if(dl.nextYear){dz.icon=cT;
}else if(dl.nextMonth){dz.icon=V;
}
if(dl.pressed||dl.checked||dl.abandoned){dz.decorator=e;
}else if(dl.hovered){dz.decorator=D;
}else{dz.decorator=b;
}
if(dl.pressed||dl.checked||dl.abandoned){dz.padding=[2,
0,
0,
2];
}else if(dl.hovered){dz.padding=1;
}else{dz.padding=2;
}return dz;
}},
"datechooser/month-year-label":{style:function(dl){return {font:I,
textAlign:x};
}},
"datechooser/date-pane":{style:function(dl){return {decorator:bI,
backgroundColor:C};
}},
"datechooser-weekday":{style:function(dl){return {decorator:bO,
font:I,
textAlign:x,
textColor:dl.weekend?F:C,
backgroundColor:dl.weekend?C:F};
}},
"datechooser-day":{style:function(dl){return {textAlign:x,
decorator:dl.today?A:b,
textColor:dl.selected?q:dl.otherMonth?o:b,
backgroundColor:dl.selected?dh:b,
padding:[2,
4]};
}},
"datechooser-week":{style:function(dl){return {textAlign:x,
textColor:F,
padding:[2,
4],
decorator:dl.header?cM:bM};
}},
"combobox":{style:function(dl){return {decorator:dl.focused?j:h,
textColor:dl.disabled?o:b,
backgroundColor:P};
}},
"combobox/button":{alias:a,
include:a,
style:function(dl){return {icon:z,
backgroundColor:dl.hovered?u:a};
}},
"combobox/popup":r,
"combobox/list":t,
"combobox/textfield":{include:s,
style:function(dl){return {decorator:b,
padding:[2,
3]};
}},
"menu":{style:function(dl){var dz={backgroundColor:c,
shadow:v,
decorator:g,
spacingX:6,
spacingY:1,
iconColumnWidth:16,
arrowColumnWidth:4,
padding:1};
if(dl.submenu){dz.position=ba;
dz.offset=[-2,
-3];
}
if(dl.contextmenu){dz.offset=4;
}return dz;
}},
"menu-separator":{style:function(dl){return {height:0,
decorator:cQ,
marginTop:4,
marginBottom:4,
marginLeft:2,
marginRight:2};
}},
"menu-button":{alias:f,
style:function(dl){return {backgroundColor:dl.selected?B:b,
textColor:dl.selected?q:b,
padding:[2,
6]};
}},
"menu-button/icon":{include:U,
style:function(dl){return {alignY:k};
}},
"menu-button/label":{include:E,
style:function(dl){return {alignY:k,
padding:1};
}},
"menu-button/shortcut":{include:E,
style:function(dl){return {alignY:k,
marginLeft:14,
padding:1};
}},
"menu-button/arrow":{style:function(dl){return {source:dl.selected?cr:V,
alignY:k};
}},
"menu-checkbox":{alias:l,
include:l,
style:function(dl){return {icon:!dl.checked?b:dl.selected?ca:bA};
}},
"menu-radiobutton":{alias:l,
include:l,
style:function(dl){return {icon:!dl.checked?b:dl.selected?cH:cj};
}},
"menubar":{style:function(dl){return {backgroundColor:c,
decorator:g};
}},
"menubar-button":{alias:f,
style:function(dl){return {padding:[2,
6],
backgroundColor:dl.pressed||dl.hovered?B:b,
textColor:dl.pressed||dl.hovered?q:b};
}},
"colorselector":d,
"colorselector/control-bar":d,
"colorselector/visual-pane":i,
"colorselector/control-pane":d,
"colorselector/preset-grid":d,
"colorselector-colorbucket":{style:function(dl){return {decorator:e,
width:16,
height:16};
}},
"colorselector/preset-field-set":i,
"colorselector/input-field-set":i,
"colorselector/preview-field-set":i,
"colorselector/hex-field-composite":d,
"colorselector/hex-field":s,
"colorselector/rgb-spinner-composite":d,
"colorselector/rgb-spinner-red":m,
"colorselector/rgb-spinner-green":m,
"colorselector/rgb-spinner-blue":m,
"colorselector/hsb-spinner-composite":d,
"colorselector/hsb-spinner-hue":m,
"colorselector/hsb-spinner-saturation":m,
"colorselector/hsb-spinner-brightness":m,
"colorselector/preview-content-old":{style:function(dl){return {decorator:e,
width:50,
height:10};
}},
"colorselector/preview-content-new":{style:function(dl){return {decorator:e,
backgroundColor:J,
width:50,
height:10};
}},
"colorselector/hue-saturation-field":{style:function(dl){return {decorator:e,
margin:5};
}},
"colorselector/brightness-field":{style:function(dl){return {decorator:e,
margin:[5,
7]};
}},
"colorselector/hue-saturation-pane":d,
"colorselector/hue-saturation-handle":d,
"colorselector/brightness-pane":d,
"colorselector/brightness-handle":d,
"table":d,
"table/statusbar":{style:function(dl){return {decorator:cV,
paddingLeft:2,
paddingRight:2};
}},
"table/column-button":{alias:a,
style:function(dl){var dq,
dp;
if(dl.pressed||dl.checked||dl.abandoned){dq=e;
dp=[3,
2,
1,
4];
}else if(dl.hovered){dq=D;
dp=[2,
3];
}else{dq=b;
dp=[3,
4];
}return {decorator:dq,
padding:dp,
backgroundColor:dl.abandoned?N:a,
icon:cJ};
}},
"table-column-reset-button":{extend:l,
alias:l,
style:function(){return {icon:dk};
}},
"table-scroller/scrollbar-x":w,
"table-scroller/scrollbar-y":w,
"table-scroller":d,
"table-scroller/header":{style:function(dl){return {decorator:bC,
backgroundColor:dg};
}},
"table-scroller/pane":{style:function(dl){return {backgroundColor:bE};
}},
"table-scroller/focus-indicator":{style:function(dl){return {decorator:br};
}},
"table-scroller/resize-line":{style:function(dl){return {backgroundColor:by,
width:3};
}},
"table-header-cell":{alias:f,
style:function(dl){return {paddingLeft:2,
paddingRight:2,
paddingBottom:dl.hovered?0:2,
decorator:dl.hovered?cB:T,
backgroundColor:dl.hovered?bQ:T,
sortIcon:dl.sorted?(dl.sortedAscending?de:cl):b};
}},
"table-header-cell/sort-icon":{style:function(dl){return {alignY:k};
}},
"table-editor-textfield":{include:s,
style:function(dl){return {decorator:b,
padding:[2,
2]};
}},
"table-editor-selectbox":{include:be,
alias:be,
style:function(dl){return {padding:[0,
2]};
}},
"table-editor-combobox":{include:K,
alias:K,
style:function(dl){return {decorator:b};
}},
"colorpopup":{alias:r,
include:r,
style:function(dl){return {decorator:g,
padding:5,
backgroundColor:c};
}},
"colorpopup/field":{style:function(dl){return {decorator:e,
margin:2,
width:14,
height:14,
backgroundColor:c};
}},
"colorpopup/selector-button":a,
"colorpopup/auto-button":a,
"colorpopup/preview-pane":i,
"colorpopup/current-preview":{style:function(dA){return {height:20,
padding:4,
marginLeft:4,
decorator:e,
allowGrowX:true};
}},
"colorpopup/selected-preview":{style:function(dA){return {height:20,
padding:4,
marginRight:4,
decorator:e,
allowGrowX:true};
}}}});
})();
(function(){var a="Oxygen",
b="qx.theme.icon.Oxygen",
c="qx/icon/Oxygen";
qx.Theme.define(b,
{title:a,
resource:c,
icons:{}});
})();
(function(){var a="Classic Windows",
b="qx.theme.Classic";
qx.Theme.define(b,
{title:a,
meta:{color:qx.theme.classic.Color,
decoration:qx.theme.classic.Decoration,
font:qx.theme.classic.Font,
appearance:qx.theme.classic.Appearance,
icon:qx.theme.icon.Oxygen}});
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
