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
b="1.9.0.0",
c="function",
d="[^\\.0-9]",
e="525.26",
f="mshtml",
g="AppleWebKit/",
h="unknown",
i="9.6.0",
j="Gecko",
k="7.0",
l="opera",
m="webkit",
n="0.0.0",
o=".",
p="qx.bom.client.Engine";
qx.Bootstrap.define(p,
{statics:{NAME:"",
FULLVERSION:"0.0.0",
VERSION:0.0,
OPERA:false,
WEBKIT:false,
GECKO:false,
MSHTML:false,
UNKNOWN_ENGINE:false,
UNKNOWN_VERSION:false,
__d:function(){var q=h;
var r=n;
var s=navigator.userAgent;
var t=false;
var u=false;
if(window.opera){q=l;
this.OPERA=true;
if(/Opera[\s\/]([0-9\.]*)/.test(s)){r=RegExp.$1.substring(0,
3)+o+RegExp.$1.substring(3);
}else{u=true;
r=i;
}}else if(navigator.userAgent.indexOf(g)!=-1){q=m;
this.WEBKIT=true;
if(/AppleWebKit\/([^ ]+)/.test(s)){r=RegExp.$1;
var v=RegExp(d).exec(r);
if(v){r=r.slice(0,
v.index);
}}else{u=true;
r=e;
}}else if(window.controllers&&navigator.product===j){q=a;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(s)){r=RegExp.$1;
}else{u=true;
r=b;
}}else if(navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(s)){q=f;
r=RegExp.$1;
if(r>=8&&document.documentMode<8){r=k;
}this.MSHTML=true;
}else{var w=window.qxFail;
if(w&&typeof w===c){var q=w();
if(q.NAME&&q.FULLVERSION){q=q.NAME;
this[q.toUpperCase()]=true;
r=q.FULLVERSION;
}}else{t=true;
u=true;
r=b;
q=a;
this.GECKO=true;
alert("Unsupported client: "+s+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=t;
this.UNKNOWN_VERSION=u;
this.NAME=q;
this.FULLVERSION=r;
this.VERSION=parseFloat(r);
}},
defer:function(x){x.__d();
}});
})();
(function(){var a="on",
b="off",
c="|",
d="default",
e="object",
f="&",
g="qx.aspects",
h="$",
j="qx.allowUrlVariants",
k="qx.debug",
m="qx.client",
n="qx.dynlocale",
o="webkit",
p="qxvariant",
q="opera",
r=":",
s="qx.core.Variant",
t="mshtml",
u="gecko";
qx.Bootstrap.define(s,
{statics:{__e:{},
__f:{},
compilerIsSet:function(){return true;
},
define:function(w,
x,
y){{};
if(!this.__e[w]){this.__e[w]={};
}else{}this.__e[w].allowedValues=x;
this.__e[w].defaultValue=y;
},
get:function(w){var z=this.__e[w];
{};
if(z.value!==undefined){return z.value;
}return z.defaultValue;
},
__g:function(){if(window.qxvariants){for(var w in qxvariants){{};
if(!this.__e[w]){this.__e[w]={};
}this.__e[w].value=qxvariants[w];
}window.qxvariants=undefined;
try{delete window.qxvariants;
}catch(ex){}this.__h(this.__e);
}},
__h:function(){if(qx.core.Setting.get(j)!=true){return;
}var A=document.location.search.slice(1).split(f);
for(var B=0;B<A.length;B++){var C=A[B].split(r);
if(C.length!=3||C[0]!=p){continue;
}var w=C[1];
if(!this.__e[w]){this.__e[w]={};
}this.__e[w].value=decodeURIComponent(C[2]);
}},
select:function(w,
D){{};
for(var C in D){if(this.isSet(w,
C)){return D[C];
}}
if(D[d]!==undefined){return D[d];
}{};
},
isSet:function(w,
E){var F=w+h+E;
if(this.__f[F]!==undefined){return this.__f[F];
}var G=false;
if(E.indexOf(c)<0){G=this.get(w)===E;
}else{var H=E.split(c);
for(var B=0,
I=H.length;B<I;B++){if(this.get(w)===H[B]){G=true;
break;
}}}this.__f[F]=G;
return G;
},
__i:function(J){return typeof J===e&&J!==null&&J instanceof Array;
},
__j:function(J){return typeof J===e&&J!==null&&!(J instanceof Array);
},
__k:function(K,
L){for(var B=0,
I=K.length;B<I;B++){if(K[B]==L){return true;
}}return false;
}},
defer:function(M){M.define(m,
[u,
t,
q,
o],
qx.bom.client.Engine.NAME);
M.define(k,
[a,
b],
a);
M.define(g,
[a,
b],
b);
M.define(n,
[a,
b],
a);
M.__g();
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
{statics:{__tS:[],
wrap:function(e,
f,
g){var h=[];
var j=[];
var k=this.__tS;
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
q){this.__tS.push({fcn:f,
pos:p===b?-1:1,
type:g,
name:q});
}}});
})();
(function(){var b="qx.aspects",
c="on",
d=".",
e="static",
f="[Class ",
g="]",
h="toString",
j="constructor",
k="member",
m="$$init_",
n="destructor",
o="extend",
p="Class",
q="off",
r="qx.Class",
s="singleton",
t="qx.event.type.Data";
qx.Bootstrap.define(r,
{statics:{define:function(u,
v){if(!v){var v={};
}if(v.include&&!(v.include instanceof Array)){v.include=[v.include];
}if(v.implement&&!(v.implement instanceof Array)){v.implement=[v.implement];
}if(!v.hasOwnProperty(o)&&!v.type){v.type=e;
}{};
var w=this.__p(u,
v.type,
v.extend,
v.statics,
v.construct,
v.destruct);
if(v.extend){if(v.properties){this.__r(w,
v.properties,
true);
}if(v.members){this.__t(w,
v.members,
true,
true,
false);
}if(v.events){this.__q(w,
v.events,
true);
}if(v.include){for(var x=0,
y=v.include.length;x<y;x++){this.__w(w,
v.include[x],
false);
}}}if(v.settings){for(var z in v.settings){qx.core.Setting.define(z,
v.settings[z]);
}}if(v.variants){for(var z in v.variants){qx.core.Variant.define(z,
v.variants[z].allowedValues,
v.variants[z].defaultValue);
}}if(v.implement){for(var x=0,
y=v.implement.length;x<y;x++){this.__v(w,
v.implement[x]);
}}{};
if(v.defer){v.defer.self=w;
v.defer(w,
w.prototype,
{add:function(u,
v){var A={};
A[u]=v;
qx.Class.__r(w,
A,
true);
}});
}},
isDefined:function(u){return this.getByName(u)!==undefined;
},
getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},
getByName:function(u){return this.$$registry[u];
},
include:function(w,
B){{};
qx.Class.__w(w,
B,
false);
},
patch:function(w,
B){{};
qx.Class.__w(w,
B,
true);
},
isSubClassOf:function(w,
C){if(!w){return false;
}
if(w==C){return true;
}
if(w.prototype instanceof C){return true;
}return false;
},
getPropertyDefinition:function(w,
u){while(w){if(w.$$properties&&w.$$properties[u]){return w.$$properties[u];
}w=w.superclass;
}return null;
},
getProperties:function(w){var D=[];
while(w){if(w.$$properties){D.push.apply(D,
qx.lang.Object.getKeys(w.$$properties));
}w=w.superclass;
}return D;
},
getByProperty:function(w,
u){while(w){if(w.$$properties&&w.$$properties[u]){return w;
}w=w.superclass;
}return null;
},
hasProperty:function(w,
u){return !!this.getPropertyDefinition(w,
u);
},
getEventType:function(w,
u){var w=w.constructor;
while(w.superclass){if(w.$$events&&w.$$events[u]!==undefined){return w.$$events[u];
}w=w.superclass;
}return null;
},
supportsEvent:function(w,
u){return !!this.getEventType(w,
u);
},
hasOwnMixin:function(w,
B){return w.$$includes&&w.$$includes.indexOf(B)!==-1;
},
getByMixin:function(w,
B){var D,
x,
y;
while(w){if(w.$$includes){D=w.$$flatIncludes;
for(x=0,
y=D.length;x<y;x++){if(D[x]===B){return w;
}}}w=w.superclass;
}return null;
},
getMixins:function(w){var D=[];
while(w){if(w.$$includes){D.push.apply(D,
w.$$flatIncludes);
}w=w.superclass;
}return D;
},
hasMixin:function(w,
B){return !!this.getByMixin(w,
B);
},
hasOwnInterface:function(w,
E){return w.$$implements&&w.$$implements.indexOf(E)!==-1;
},
getByInterface:function(w,
E){var D,
x,
y;
while(w){if(w.$$implements){D=w.$$flatImplements;
for(x=0,
y=D.length;x<y;x++){if(D[x]===E){return w;
}}}w=w.superclass;
}return null;
},
getInterfaces:function(w){var D=[];
while(w){if(w.$$implements){D.push.apply(D,
w.$$flatImplements);
}w=w.superclass;
}return D;
},
hasInterface:function(w,
E){return !!this.getByInterface(w,
E);
},
implementsInterface:function(w,
E){if(this.hasInterface(w,
E)){return true;
}
try{qx.Interface.assert(w,
E,
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
__l:null,
__m:null,
__n:function(){},
__o:function(){},
__p:function(u,
F,
G,
H,
I,
J){var w;
if(!G&&qx.core.Variant.isSet(b,
q)){w=H||{};
}else{w={};
if(G){if(!I){I=this.__x();
}w=this.__z(I,
u,
F);
}if(H){var z;
for(var x=0,
K=qx.lang.Object.getKeys(H),
y=K.length;x<y;x++){z=K[x];
if(qx.core.Variant.isSet(b,
c)){var L=H[z];
if(L instanceof Function){L=qx.core.Aspect.wrap(u+d+z,
L,
e);
}w[z]=L;
}else{w[z]=H[z];
}}}}var M=qx.Bootstrap.createNamespace(u,
w,
false);
w.name=w.classname=u;
w.basename=M;
w.$$type=p;
if(F){w.$$classtype=F;
}if(!w.hasOwnProperty(h)){w.toString=this.genericToString;
}
if(G){var N=G.prototype;
var O=this.__y();
O.prototype=N;
var P=new O;
w.prototype=P;
P.name=P.classname=u;
P.basename=M;
I.base=w.superclass=G;
I.self=w.constructor=P.constructor=w;
if(J){if(qx.core.Variant.isSet(b,
c)){J=qx.core.Aspect.wrap(u,
J,
n);
}w.$$destructor=J;
}}this.$$registry[u]=w;
return w;
},
__q:function(w,
Q,
R){var z,
z;
if(w.$$events){for(var z in Q){w.$$events[z]=Q[z];
}}else{w.$$events=Q;
}},
__r:function(w,
A,
R){var v;
if(R===undefined){R=false;
}var S=!!w.$$propertiesAttached;
for(var u in A){v=A[u];
{};
v.name=u;
if(!v.refine){if(w.$$properties===undefined){w.$$properties={};
}w.$$properties[u]=v;
}if(v.init!==undefined){w.prototype[m+u]=v.init;
}if(v.event!==undefined){var T={};
T[v.event]=t;
this.__q(w,
T,
R);
}if(v.inheritable){qx.core.Property.$$inheritable[u]=true;
}if(S){qx.core.Property.attachMethods(w,
u,
v);
}}},
__s:null,
__t:function(w,
U,
R,
V,
W){var P=w.prototype;
var z,
X;
for(var x=0,
K=qx.lang.Object.getKeys(U),
y=K.length;x<y;x++){z=K[x];
X=U[z];
{};
if(V!==false&&X instanceof Function&&X.$$type==null){if(W==true){X=this.__u(X,
P[z]);
}else{if(P[z]){X.base=P[z];
}X.self=w;
}
if(qx.core.Variant.isSet(b,
c)){X=qx.core.Aspect.wrap(w.classname+d+z,
X,
k);
}}P[z]=X;
}},
__u:function(X,
V){if(V){return function(){var Y=X.base;
X.base=V;
var ba=X.apply(this,
arguments);
X.base=Y;
return ba;
};
}else{return X;
}},
__v:function(w,
E){{};
var D=qx.Interface.flatten([E]);
if(w.$$implements){w.$$implements.push(E);
w.$$flatImplements.push.apply(w.$$flatImplements,
D);
}else{w.$$implements=[E];
w.$$flatImplements=D;
}},
__w:function(w,
B,
R){{};
if(this.hasMixin(w,
B)){qx.log.Logger.warn('Mixin "'+B.name+'" is already included into Class "'+w.classname+'" by class: '+this.getByMixin(w,
B).classname+'!');
return;
}var D=qx.Mixin.flatten([B]);
var bb;
for(var x=0,
y=D.length;x<y;x++){bb=D[x];
if(bb.$$events){this.__q(w,
bb.$$events,
R);
}if(bb.$$properties){this.__r(w,
bb.$$properties,
R);
}if(bb.$$members){this.__t(w,
bb.$$members,
R,
R,
R);
}}if(w.$$includes){w.$$includes.push(B);
w.$$flatIncludes.push.apply(w.$$flatIncludes,
D);
}else{w.$$includes=[B];
w.$$flatIncludes=D;
}},
__x:function(){function bc(){arguments.callee.base.apply(this,
arguments);
}return bc;
},
__y:function(){return function(){};
},
__z:function(I,
u,
F){var bd=function(){var w=arguments.callee.constructor;
{};
if(!w.$$propertiesAttached){qx.core.Property.attach(w);
}var ba=w.$$original.apply(this,
arguments);
if(w.$$includes){var be=w.$$flatIncludes;
for(var x=0,
y=be.length;x<y;x++){if(be[x].$$constructor){be[x].$$constructor.apply(this,
arguments);
}}}if(this.classname===u.classname){this.$$initialized=true;
}return ba;
};
if(qx.core.Variant.isSet(b,
c)){var bf=qx.core.Aspect.wrap(u,
bd,
j);
bd.$$original=I;
bd.constructor=bf;
bd=bf;
}if(F===s){bd.getInstance=this.getInstance;
}bd.$$original=I;
I.wrapper=bd;
return bd;
}},
defer:function(H){if(qx.core.Variant.isSet(b,
c)){for(var bg in qx.Bootstrap.$$registry){var H=qx.Bootstrap.$$registry[bg];
for(var z in H){if(H[z] instanceof Function){H[z]=qx.core.Aspect.wrap(bg+d+z,
H[z],
e);
}}}}}});
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
}else if(r.extend&&r.extend.resource){s.resource=r.extend.resource;
}s.basename=qx.Bootstrap.createNamespace(q,
s);
this.__bX(s,
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
__bW:function(r){for(var t=0,
w=this.__bY,
v=w.length;t<v;t++){if(r[w[t]]){return w[t];
}}},
__bX:function(s,
r){var x=this.__bW(r);
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
__bY:[j,
o,
k,
d,
p,
c,
e,
n],
__ca:null,
__cb:null,
__cc:function(){},
patch:function(s,
C){var x=this.__bW(C);
if(x!==this.__bW(s)){throw new Error("The mixins '"+s.name+"' are not compatible '"+C.name+"'!");
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
o="#969696",
p="#666666",
q="#99C3FE",
r="#808080",
s="#F4F4F4",
t="#001533",
u="#909090",
v="#FCFCFC",
w="#314a6e",
x="#0880EF",
y="#4d4d4d",
z="#DFDFDF",
A="#000000",
B="#26364D",
C="#6B6A6E",
D="#AFAFAF",
E="#404955",
F="#AAAAAA",
G="qx.theme.modern.Color";
qx.Theme.define(G,
{colors:{"background-application":z,
"background-pane":b,
"background-light":v,
"background-medium":j,
"background-splitpane":D,
"background-tip":l,
"background-odd":c,
"text-light":u,
"text-gray":i,
"text-label":d,
"text-title":w,
"text-input":A,
"text-hovered":t,
"text-disabled":C,
"text-selected":g,
"text-active":B,
"text-inactive":E,
"border-main":y,
"border-separator":r,
"border-input":m,
"border-disabled":o,
"border-pane":n,
"border-button":p,
"border-column":a,
"border-focused":q,
"table-pane":b,
"table-focus-indicator":x,
"table-row-background-focused-selected":e,
"table-row-background-focused":k,
"table-row-background-selected":e,
"table-row-background-even":b,
"table-row-background-odd":c,
"table-row-selected":g,
"table-row":d,
"table-row-line":a,
"table-column-line":a,
"progressive-table-header":F,
"progressive-table-row-background-even":s,
"progressive-table-row-background-odd":c,
"progressive-progressbar-background":f,
"progressive-progressbar-indicator-done":a,
"progressive-progressbar-indicator-undone":h,
"progressive-progressbar-percent-background":f,
"progressive-progressbar-percent-text":h}});
})();
(function(){var b=';',
c='computed=this.',
d='=value;',
e='this.',
f='if(this.',
g='!==undefined)',
h='delete this.',
j="set",
k="setThemed",
m='}',
n="setRuntime",
o='else if(this.',
p="init",
q='return this.',
r="string",
s="boolean",
t="resetThemed",
u='!==undefined){',
v='=true;',
w="resetRuntime",
x="reset",
y="refresh",
z='old=this.',
A='else ',
B='old=computed=this.',
C=' of an instance of ',
D='if(old===computed)return value;',
E='if(old===undefined)old=null;',
F='(value);',
G=' is not (yet) ready!");',
H='===value)return value;',
I='return init;',
J='var init=this.',
K="Error in property ",
L='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',
M='.validate.call(this, value);',
N='else{',
O=" in method ",
P='=computed;',
Q='(backup);',
R='if(computed===inherit){',
S="inherit",
T='if(value===undefined)prop.error(this,2,"',
U='var computed, old=this.',
V='else if(computed===undefined)',
W="': ",
X=" of class ",
Y='===undefined)return;',
ba="')){",
bb='else this.',
bc='value=this.',
bd='","',
be='if(init==qx.core.Property.$$inherit)init=null;',
bf='var inherit=prop.$$inherit;',
bg='var computed, old;',
bh='computed=undefined;delete this.',
bi='",value);',
bj='computed=value;',
bk=';}',
bl='){',
bm='if(computed===undefined||computed===inherit){',
bn='!==inherit){',
bo='(computed, old, "',
bp='return value;',
bq='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',
br="if(reg.hasListener(this, '",
bs=')a[i].',
bt='.$$properties.',
bu="var reg=qx.event.Registration;",
bv='return null;',
bw='");',
bx='var pa=this.getLayoutParent();if(pa)computed=pa.',
by='!==undefined&&',
bz="', qx.event.type.Data, [computed, old]",
bA='var backup=computed;',
bB='}else{',
bC="object",
bD='if(computed===undefined)computed=null;',
bE='if(a[i].',
bF='throw new Error("Property ',
bG=")}",
bH='var prop=qx.core.Property;',
bI=" with incoming value '",
bJ='if(computed===undefined||computed==inherit)computed=null;',
bK='if((computed===undefined||computed===inherit)&&',
bL="reg.fireEvent(this, '",
bM="qx.core.Property";
qx.Class.define(bM,
{statics:{__L:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',
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
__M:{"Object":true,
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
$$inherit:S,
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
$$allowedKeys:{name:r,
dispose:s,
inheritable:s,
nullable:s,
themeable:s,
refine:s,
init:null,
apply:r,
event:r,
check:null,
transform:r,
deferredInit:s,
validate:null},
$$allowedGroupKeys:{name:r,
group:bC,
mode:r,
themeable:s},
$$inheritable:{},
refresh:function(bN){var bO=bN.getLayoutParent();
if(bO){var bP=bN.constructor;
var bQ=this.$$store.inherit;
var bR=this.$$store.init;
var bS=this.$$method.refresh;
var bT;
var bU;
{};
while(bP){bT=bP.$$properties;
if(bT){for(var bV in this.$$inheritable){if(bT[bV]&&bN[bS[bV]]){bU=bO[bQ[bV]];
if(bU===undefined){bU=bO[bR[bV]];
}{};
bN[bS[bV]](bU);
}}}bP=bP.superclass;
}}},
attach:function(bP){var bT=bP.$$properties;
if(bT){for(var bV in bT){this.attachMethods(bP,
bV,
bT[bV]);
}}bP.$$propertiesAttached=true;
},
attachMethods:function(bP,
bV,
bW){bW.group?this.__N(bP,
bW,
bV):this.__O(bP,
bW,
bV);
},
__N:function(bP,
bW,
bV){var bX=qx.lang.String.firstUp(bV);
var bY=bP.prototype;
var ca=bW.themeable===true;
{};
var cb=[];
var cc=[];
if(ca){var cd=[];
var ce=[];
}var cf="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
cb.push(cf);
if(ca){cd.push(cf);
}
if(bW.mode=="shorthand"){var cg="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
cb.push(cg);
if(ca){cd.push(cg);
}}
for(var ch=0,
ci=bW.group,
cj=ci.length;ch<cj;ch++){{};
cb.push("this.",
this.$$method.set[ci[ch]],
"(a[",
ch,
"]);");
cc.push("this.",
this.$$method.reset[ci[ch]],
"();");
if(ca){{};
cd.push("this.",
this.$$method.setThemed[ci[ch]],
"(a[",
ch,
"]);");
ce.push("this.",
this.$$method.resetThemed[ci[ch]],
"();");
}}this.$$method.set[bV]="set"+bX;
bY[this.$$method.set[bV]]=new Function(cb.join(""));
this.$$method.reset[bV]="reset"+bX;
bY[this.$$method.reset[bV]]=new Function(cc.join(""));
if(ca){this.$$method.setThemed[bV]="setThemed"+bX;
bY[this.$$method.setThemed[bV]]=new Function(cd.join(""));
this.$$method.resetThemed[bV]="resetThemed"+bX;
bY[this.$$method.resetThemed[bV]]=new Function(ce.join(""));
}},
__O:function(bP,
bW,
bV){var bX=qx.lang.String.firstUp(bV);
var bY=bP.prototype;
{};
if(bW.dispose===undefined&&typeof bW.check==="string"){bW.dispose=this.__M[bW.check]||qx.Class.isDefined(bW.check)||qx.Interface.isDefined(bW.check);
}var ck=this.$$method;
var cl=this.$$store;
cl.runtime[bV]="$$runtime_"+bV;
cl.user[bV]="$$user_"+bV;
cl.theme[bV]="$$theme_"+bV;
cl.init[bV]="$$init_"+bV;
cl.inherit[bV]="$$inherit_"+bV;
cl.useinit[bV]="$$useinit_"+bV;
ck.get[bV]="get"+bX;
bY[ck.get[bV]]=function(){return qx.core.Property.executeOptimizedGetter(this,
bP,
bV,
"get");
};
ck.set[bV]="set"+bX;
bY[ck.set[bV]]=function(bU){return qx.core.Property.executeOptimizedSetter(this,
bP,
bV,
"set",
arguments);
};
ck.reset[bV]="reset"+bX;
bY[ck.reset[bV]]=function(){return qx.core.Property.executeOptimizedSetter(this,
bP,
bV,
"reset");
};
if(bW.inheritable||bW.apply||bW.event||bW.deferredInit){ck.init[bV]="init"+bX;
bY[ck.init[bV]]=function(bU){return qx.core.Property.executeOptimizedSetter(this,
bP,
bV,
"init",
arguments);
};
}
if(bW.inheritable){ck.refresh[bV]="refresh"+bX;
bY[ck.refresh[bV]]=function(bU){return qx.core.Property.executeOptimizedSetter(this,
bP,
bV,
"refresh",
arguments);
};
}ck.setRuntime[bV]="setRuntime"+bX;
bY[ck.setRuntime[bV]]=function(bU){return qx.core.Property.executeOptimizedSetter(this,
bP,
bV,
"setRuntime",
arguments);
};
ck.resetRuntime[bV]="resetRuntime"+bX;
bY[ck.resetRuntime[bV]]=function(){return qx.core.Property.executeOptimizedSetter(this,
bP,
bV,
"resetRuntime");
};
if(bW.themeable){ck.setThemed[bV]="setThemed"+bX;
bY[ck.setThemed[bV]]=function(bU){return qx.core.Property.executeOptimizedSetter(this,
bP,
bV,
"setThemed",
arguments);
};
ck.resetThemed[bV]="resetThemed"+bX;
bY[ck.resetThemed[bV]]=function(){return qx.core.Property.executeOptimizedSetter(this,
bP,
bV,
"resetThemed");
};
}
if(bW.check==="Boolean"){bY["toggle"+bX]=new Function("return this."+ck.set[bV]+"(!this."+ck.get[bV]+"())");
bY["is"+bX]=new Function("return this."+ck.get[bV]+"()");
}},
__P:{0:'Could not change or apply init value after constructing phase!',
1:'Requires exactly one argument!',
2:'Undefined value is not allowed!',
3:'Does not allow any arguments!',
4:'Null value is not allowed!',
5:'Is invalid!'},
error:function(cm,
cn,
co,
cp,
bU){var cq=cm.constructor.classname;
var cr=K+co+X+cq+O+this.$$method[cp][co]+bI+bU+W;
throw new Error(cr+(this.__P[cn]||"Unknown reason: "+cn));
},
__Q:function(cs,
bY,
bV,
cp,
ct,
cu){var cl=this.$$method[cp][bV];
{bY[cl]=new Function("value",
ct.join(""));
};
if(qx.core.Variant.isSet("qx.aspects",
"on")){bY[cl]=qx.core.Aspect.wrap(cs.classname+"."+cl,
bY[cl],
"property");
}if(cu===undefined){return cs[cl]();
}else{return cs[cl](cu[0]);
}},
executeOptimizedGetter:function(cs,
bP,
bV,
cp){var bW=bP.$$properties[bV];
var bY=bP.prototype;
var ct=[];
var cl=this.$$store;
ct.push(f,
cl.runtime[bV],
g);
ct.push(q,
cl.runtime[bV],
b);
if(bW.inheritable){ct.push(o,
cl.inherit[bV],
g);
ct.push(q,
cl.inherit[bV],
b);
ct.push(A);
}ct.push(f,
cl.user[bV],
g);
ct.push(q,
cl.user[bV],
b);
if(bW.themeable){ct.push(o,
cl.theme[bV],
g);
ct.push(q,
cl.theme[bV],
b);
}
if(bW.deferredInit&&bW.init===undefined){ct.push(o,
cl.init[bV],
g);
ct.push(q,
cl.init[bV],
b);
}ct.push(A);
if(bW.init!==undefined){if(bW.inheritable){ct.push(J,
cl.init[bV],
b);
if(bW.nullable){ct.push(be);
}else if(bW.init!==undefined){ct.push(q,
cl.init[bV],
b);
}else{ct.push(bq,
bV,
C,
bP.classname,
G);
}ct.push(I);
}else{ct.push(q,
cl.init[bV],
b);
}}else if(bW.inheritable||bW.nullable){ct.push(bv);
}else{ct.push(bF,
bV,
C,
bP.classname,
G);
}return this.__Q(cs,
bY,
bV,
cp,
ct);
},
executeOptimizedSetter:function(cs,
bP,
bV,
cp,
cu){var bW=bP.$$properties[bV];
var bY=bP.prototype;
var ct=[];
var cv=cp===j||cp===k||cp===n||(cp===p&&bW.init===undefined);
var cw=cp===x||cp===t||cp===w;
var cx=bW.apply||bW.event||bW.inheritable;
if(cp===n||cp===w){var cl=this.$$store.runtime[bV];
}else if(cp===k||cp===t){var cl=this.$$store.theme[bV];
}else if(cp===p){var cl=this.$$store.init[bV];
}else{var cl=this.$$store.user[bV];
}{if(!bW.nullable||bW.check||bW.inheritable){ct.push(bH);
}if(cp===j){ct.push(T,
bV,
bd,
cp,
bi);
}};
if(cv){if(bW.transform){ct.push(bc,
bW.transform,
F);
}if(bW.validate){if(typeof bW.validate===r){ct.push(e,
bW.validate,
F);
}else if(bW.validate instanceof Function){ct.push(bP.classname,
bt,
bV);
ct.push(M);
}}}if(cx){if(cv){ct.push(f,
cl,
H);
}else if(cw){ct.push(f,
cl,
Y);
}}if(bW.inheritable){ct.push(bf);
}{};
if(!cx){if(cp===n){ct.push(e,
this.$$store.runtime[bV],
d);
}else if(cp===w){ct.push(f,
this.$$store.runtime[bV],
g);
ct.push(h,
this.$$store.runtime[bV],
b);
}else if(cp===j){ct.push(e,
this.$$store.user[bV],
d);
}else if(cp===x){ct.push(f,
this.$$store.user[bV],
g);
ct.push(h,
this.$$store.user[bV],
b);
}else if(cp===k){ct.push(e,
this.$$store.theme[bV],
d);
}else if(cp===t){ct.push(f,
this.$$store.theme[bV],
g);
ct.push(h,
this.$$store.theme[bV],
b);
}else if(cp===p&&cv){ct.push(e,
this.$$store.init[bV],
d);
}}else{if(bW.inheritable){ct.push(U,
this.$$store.inherit[bV],
b);
}else{ct.push(bg);
}ct.push(f,
this.$$store.runtime[bV],
u);
if(cp===n){ct.push(c,
this.$$store.runtime[bV],
d);
}else if(cp===w){ct.push(h,
this.$$store.runtime[bV],
b);
ct.push(f,
this.$$store.user[bV],
g);
ct.push(c,
this.$$store.user[bV],
b);
ct.push(o,
this.$$store.theme[bV],
g);
ct.push(c,
this.$$store.theme[bV],
b);
ct.push(o,
this.$$store.init[bV],
u);
ct.push(c,
this.$$store.init[bV],
b);
ct.push(e,
this.$$store.useinit[bV],
v);
ct.push(m);
}else{ct.push(B,
this.$$store.runtime[bV],
b);
if(cp===j){ct.push(e,
this.$$store.user[bV],
d);
}else if(cp===x){ct.push(h,
this.$$store.user[bV],
b);
}else if(cp===k){ct.push(e,
this.$$store.theme[bV],
d);
}else if(cp===t){ct.push(h,
this.$$store.theme[bV],
b);
}else if(cp===p&&cv){ct.push(e,
this.$$store.init[bV],
d);
}}ct.push(m);
ct.push(o,
this.$$store.user[bV],
u);
if(cp===j){if(!bW.inheritable){ct.push(z,
this.$$store.user[bV],
b);
}ct.push(c,
this.$$store.user[bV],
d);
}else if(cp===x){if(!bW.inheritable){ct.push(z,
this.$$store.user[bV],
b);
}ct.push(h,
this.$$store.user[bV],
b);
ct.push(f,
this.$$store.runtime[bV],
g);
ct.push(c,
this.$$store.runtime[bV],
b);
ct.push(f,
this.$$store.theme[bV],
g);
ct.push(c,
this.$$store.theme[bV],
b);
ct.push(o,
this.$$store.init[bV],
u);
ct.push(c,
this.$$store.init[bV],
b);
ct.push(e,
this.$$store.useinit[bV],
v);
ct.push(m);
}else{if(cp===n){ct.push(c,
this.$$store.runtime[bV],
d);
}else if(bW.inheritable){ct.push(c,
this.$$store.user[bV],
b);
}else{ct.push(B,
this.$$store.user[bV],
b);
}if(cp===k){ct.push(e,
this.$$store.theme[bV],
d);
}else if(cp===t){ct.push(h,
this.$$store.theme[bV],
b);
}else if(cp===p&&cv){ct.push(e,
this.$$store.init[bV],
d);
}}ct.push(m);
if(bW.themeable){ct.push(o,
this.$$store.theme[bV],
u);
if(!bW.inheritable){ct.push(z,
this.$$store.theme[bV],
b);
}
if(cp===n){ct.push(c,
this.$$store.runtime[bV],
d);
}else if(cp===j){ct.push(c,
this.$$store.user[bV],
d);
}else if(cp===k){ct.push(c,
this.$$store.theme[bV],
d);
}else if(cp===t){ct.push(h,
this.$$store.theme[bV],
b);
ct.push(f,
this.$$store.init[bV],
u);
ct.push(c,
this.$$store.init[bV],
b);
ct.push(e,
this.$$store.useinit[bV],
v);
ct.push(m);
}else if(cp===p){if(cv){ct.push(e,
this.$$store.init[bV],
d);
}ct.push(c,
this.$$store.theme[bV],
b);
}else if(cp===y){ct.push(c,
this.$$store.theme[bV],
b);
}ct.push(m);
}ct.push(o,
this.$$store.useinit[bV],
bl);
if(!bW.inheritable){ct.push(z,
this.$$store.init[bV],
b);
}
if(cp===p){if(cv){ct.push(c,
this.$$store.init[bV],
d);
}else{ct.push(c,
this.$$store.init[bV],
b);
}}else if(cp===j||cp===n||cp===k||cp===y){ct.push(h,
this.$$store.useinit[bV],
b);
if(cp===n){ct.push(c,
this.$$store.runtime[bV],
d);
}else if(cp===j){ct.push(c,
this.$$store.user[bV],
d);
}else if(cp===k){ct.push(c,
this.$$store.theme[bV],
d);
}else if(cp===y){ct.push(c,
this.$$store.init[bV],
b);
}}ct.push(m);
if(cp===j||cp===n||cp===k||cp===p){ct.push(N);
if(cp===n){ct.push(c,
this.$$store.runtime[bV],
d);
}else if(cp===j){ct.push(c,
this.$$store.user[bV],
d);
}else if(cp===k){ct.push(c,
this.$$store.theme[bV],
d);
}else if(cp===p){if(cv){ct.push(c,
this.$$store.init[bV],
d);
}else{ct.push(c,
this.$$store.init[bV],
b);
}ct.push(e,
this.$$store.useinit[bV],
v);
}ct.push(m);
}}
if(bW.inheritable){ct.push(bm);
if(cp===y){ct.push(bj);
}else{ct.push(bx,
this.$$store.inherit[bV],
b);
}ct.push(bK);
ct.push(e,
this.$$store.init[bV],
by);
ct.push(e,
this.$$store.init[bV],
bn);
ct.push(c,
this.$$store.init[bV],
b);
ct.push(e,
this.$$store.useinit[bV],
v);
ct.push(bB);
ct.push(h,
this.$$store.useinit[bV],
bk);
ct.push(m);
ct.push(D);
ct.push(R);
ct.push(bh,
this.$$store.inherit[bV],
b);
ct.push(m);
ct.push(V);
ct.push(h,
this.$$store.inherit[bV],
b);
ct.push(bb,
this.$$store.inherit[bV],
P);
ct.push(bA);
ct.push(E);
ct.push(bJ);
}else if(cx){if(cp!==j&&cp!==n&&cp!==k){ct.push(bD);
}ct.push(D);
ct.push(E);
}if(cx){if(bW.apply){ct.push(e,
bW.apply,
bo,
bV,
bw);
}if(bW.event){ct.push(bu,
br,
bW.event,
ba,
bL,
bW.event,
bz,
bG);
}if(bW.inheritable&&bY._getChildren){ct.push(L);
ct.push(bE,
this.$$method.refresh[bV],
bs,
this.$$method.refresh[bV],
Q);
ct.push(m);
}}if(cv){ct.push(bp);
}return this.__Q(cs,
bY,
bV,
cp,
ct,
cu);
}},
settings:{"qx.propertyDebugLevel":0}});
})();
(function(){var c="qx.core.ObjectRegistry";
qx.Bootstrap.define(c,
{statics:{inShutDown:false,
__R:{},
__S:0,
__T:[],
register:function(d){var e=this.__R;
if(!e){return;
}var f=d.$$hash;
if(f==null){var g=this.__T;
if(g.length>0){f=g.pop();
}else{f=(this.__S++).toString(36);
}d.$$hash=f;
}{};
e[f]=d;
},
unregister:function(d){var f=d.$$hash;
if(f==null){return;
}var e=this.__R;
if(e&&e[f]){delete e[f];
this.__T.push(f);
}},
toHashCode:function(d){{};
var f=d.$$hash;
if(f!=null){return f;
}var g=this.__T;
if(g.length>0){f=g.pop();
}else{f=(this.__S++).toString(36);
}return d.$$hash=f;
},
fromHashCode:function(f){return this.__R[f]||null;
},
shutdown:function(){this.inShutDown=true;
var e=this.__R;
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
delete this.__R;
},
getRegistry:function(){return this.__R;
}}});
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
}catch(ex){}},
"mshtml":function(j){try{j.keyCode=0;
}catch(ex){}j.returnValue=false;
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
{construct:function(n){this.__A=n;
this.__B=qx.lang.Function.bind(this.dispose,
this);
qx.bom.Event.addNativeListener(n,
d,
this.__B);
this.__C={};
this.__D={};
this.__E={};
this.__F={};
},
members:{dispose:function(){qx.bom.Event.removeNativeListener(this.__A,
d,
this.__B);
qx.event.Registration.removeManager(this);
this.__C=this.__A=this.__D=this.__E=this.__B=this.__F=null;
},
getWindow:function(){return this.__A;
},
getHandler:function(o){var p=this.__D[o.classname];
if(p){return p;
}return this.__D[o.classname]=new o(this);
},
getDispatcher:function(o){var q=this.__E[o.classname];
if(q){return q;
}return this.__E[o.classname]=new o(this);
},
getListeners:function(r,
s,
t){var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__C[u];
if(!v){return null;
}var w=s+(t?b:a);
var x=v[w];
return x?x.concat():null;
},
hasListener:function(r,
s,
t){{};
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__C[u];
if(!v){return false;
}var w=s+(t?b:a);
var x=v[w];
if(!x){return false;
}return x.length>0;
},
importListeners:function(r,
y){{};
var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__C[u]={};
for(var z in y){var A=y[z];
var w=A.type+(A.capture?b:a);
var x=v[w];
if(!x){x=v[w]=[];
this.__G(r,
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
var v=this.__C[u];
if(!v){v=this.__C[u]={};
}var w=s+(t?b:a);
var x=v[w];
if(!x){x=v[w]=[];
}if(x.length===0){this.__G(r,
s,
t);
}var E={handler:B,
context:C};
x.push(E);
return [x,
E,
s,
t];
},
findHandler:function(r,
s){var F;
var G=false;
var H=false;
var I=false;
if(r.nodeType===1){G=true;
F=f+r.tagName.toLowerCase()+c+s;
}else if(r==this.__A){H=true;
F=h+s;
}else if(r.classname){I=true;
F=m+r.classname+c+s;
}else{F=e+r+c+s;
}var J=this.__F;
if(J[F]){return J[F];
}var K=qx.event.Registration.getHandlers();
var L;
for(var M=0,
N=K.length;M<N;M++){var o=K[M];
var O=o.SUPPORTED_TYPES;
if(O&&!O[s]){continue;
}var P=qx.event.IEventHandler;
var Q=o.TARGET_CHECK;
if(Q){if(Q===P.TARGET_DOMNODE&&!G){continue;
}else if(Q===P.TARGET_WINDOW&&!H){continue;
}else if(Q===P.TARGET_OBJECT&&!I){continue;
}}L=this.getHandler(K[M]);
if(o.IGNORE_CAN_HANDLE||L.canHandleEvent(r,
s)){J[F]=L;
return L;
}}return null;
},
__G:function(r,
s,
t){var p=this.findHandler(r,
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
var v=this.__C[u];
if(!v){return false;
}var w=s+(t?b:a);
var x=v[w];
if(!x){return false;
}
for(var M=0,
N=x.length;M<N;M++){var E=x[M];
if(E.handler===B&&E.context===C){qx.lang.Array.removeAt(x,
M);
if(x.length==0){this.__H(r,
s,
t);
}return true;
}}return false;
},
removeListenerById:function(r,
R){var x=R[0];
var E=R[1];
var s=R[2];
var t=R[3];
qx.lang.Array.remove(x,
E);
if(x.length==0){this.__H(r,
s,
t);
}},
removeAllListeners:function(r){var u=qx.core.ObjectRegistry.toHashCode(r);
var v=this.__C[u];
if(!v){return false;
}var S,
s,
t;
for(var w in v){if(v[w].length>0){S=w.split(j);
s=S[0];
t=S[1]===g;
this.__H(r,
s,
t);
}}delete this.__C[u];
return true;
},
__H:function(r,
s,
t){var p=this.findHandler(r,
s);
if(p){p.unregisterEvent(r,
s,
t);
return;
}{};
},
dispatchEvent:function(r,
T){var D;
var s=T.getType();
if(!T.getBubbles()&&!this.hasListener(r,
s)){qx.event.Pool.getInstance().poolObject(T);
return true;
}
if(!T.getTarget()){T.setTarget(r);
}var K=qx.event.Registration.getDispatchers();
var L;
var U=false;
for(var M=0,
N=K.length;M<N;M++){L=this.getDispatcher(K[M]);
if(L.canDispatchEvent(r,
T,
s)){L.dispatchEvent(r,
T,
s);
U=true;
break;
}}
if(!U){qx.log.Logger.error(this,
"No dispatcher can handle event of type "+s+" on "+r);
return true;
}var V=T.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(T);
return !V;
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
{statics:{__I:{},
getManager:function(d){if(qx.dom.Node.isWindow(d)){var e=d;
}else if(qx.dom.Node.isElement(d)){var e=qx.dom.Node.getWindow(d);
}else{var e=window;
}var f=qx.core.ObjectRegistry.toHashCode(e);
var g=this.__I[f];
if(!g){g=new qx.event.Manager(e);
this.__I[f]=g;
}return g;
},
removeManager:function(h){var f=qx.core.ObjectRegistry.toHashCode(h.getWindow());
delete this.__I[f];
},
addListener:function(d,
i,
j,
k,
l){return this.getManager(d).addListener(d,
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
removeListenerById:function(d,
f){this.getManager(d).removeListenerById(d,
f);
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
__J:[],
addHandler:function(s){{};
this.__J.push(s);
this.__J.sort(function(t,
u){return t.PRIORITY-u.PRIORITY;
});
},
getHandlers:function(){return this.__J;
},
__K:[],
addDispatcher:function(v,
w){{};
this.__K.push(v);
this.__K.sort(function(t,
u){return t.PRIORITY-u.PRIORITY;
});
},
getDispatchers:function(){return this.__K;
}}});
})();
(function(){var a="node",
b="error",
c="...(+",
d="array",
e=")",
f="info",
g="instance",
h="string",
j="null",
k="class",
m="number",
n="stringify",
o="]",
p="unknown",
q="function",
r="boolean",
s="map",
t="undefined",
u="qx.log.Logger",
v=")}",
w="#",
x="warn",
y="document",
z="{...(",
A="[",
B="text[",
C="[...(",
D="\n",
E="debug",
F=")]",
G="object";
qx.Bootstrap.define(u,
{statics:{__U:50,
__V:"debug",
setLevel:function(H){this.__V=H;
},
getLevel:function(){return this.__V;
},
setTreshold:function(H){this.__U=H;
},
getTreshold:function(){return this.__U;
},
__W:{},
__X:0,
register:function(I){if(I.$$id){return;
}var J=this.__X++;
this.__W[J]=I;
I.$$id=J;
var K=this.__Y;
for(var L=0,
M=K.length;L<M;L++){I.process(K[L]);
}},
unregister:function(I){var J=I.$$id;
if(J==null){return;
}delete this.__W[J];
delete I.$$id;
},
debug:function(N,
O){this.__bb(E,
arguments);
},
info:function(N,
O){this.__bb(f,
arguments);
},
warn:function(N,
O){this.__bb(x,
arguments);
},
error:function(N,
O){this.__bb(b,
arguments);
},
trace:function(N){this.__bb(f,
[N,
qx.dev.StackTrace.getStackTrace().join(D)]);
},
deprecatedMethodWarning:function(P,
Q){var R,
S;
},
deprecatedClassWarning:function(T,
Q){var S;
},
clear:function(){this.__Y=[];
},
__Y:[],
__ba:{debug:0,
info:1,
warn:2,
error:3},
__bb:function(U,
V){var W=this.__ba;
if(W[U]<W[this.__V]){return;
}var N=V.length<2?null:V[0];
var X=N?1:0;
var Y=[];
for(var L=X,
M=V.length;L<M;L++){Y.push(this.__bd(V[L],
true));
}var ba=new Date;
var bb={time:ba,
offset:ba-qx.Bootstrap.LOADSTART,
level:U,
items:Y};
if(N){if(N instanceof qx.core.Object){bb.object=N.$$hash;
}else if(N.$$type){bb.clazz=N;
}}var K=this.__Y;
K.push(bb);
if(K.length>(this.__U+10)){K.splice(this.__U,
K.length);
}var I=this.__W;
for(var J in I){I[J].process(bb);
}},
__bc:function(H){if(H===undefined){return t;
}else if(H===null){return j;
}
if(H.$$type){return k;
}var bc=typeof H;
if(bc===q||bc==h||bc===m||bc===r){return bc;
}else if(bc===G){if(H.nodeType){return a;
}else if(H.classname){return g;
}else if(H instanceof Array){return d;
}else if(H instanceof Error){return b;
}else{return s;
}}
if(H.toString){return n;
}return p;
},
__bd:function(H,
bd){var bc=this.__bc(H);
var be=p;
switch(bc){case j:case t:be=bc;
break;
case h:case m:case r:be=H;
break;
case a:if(H.nodeType===9){be=y;
}else if(H.nodeType===3){be=B+H.nodeValue+o;
}else if(H.nodeType===1){be=H.nodeName.toLowerCase();
if(H.id){be+=w+H.id;
}}else{be=a;
}break;
case q:be=qx.lang.Function.getName(H)||bc;
break;
case g:be=H.basename+A+H.$$hash+o;
break;
case k:case n:case b:be=H.toString();
break;
case d:if(bd){be=[];
for(var L=0,
M=H.length;L<M;L++){if(be.length>20){be.push(c+(M-L)+e);
break;
}be.push(this.__bd(H[L],
false));
}}else{be=C+H.length+F;
}break;
case s:if(bd){var bf;
var bg=[];
for(var bh in H){bg.push(bh);
}bg.sort();
be=[];
for(var L=0,
M=bg.length;L<M;L++){if(be.length>20){be.push(c+(M-L)+e);
break;
}bh=bg[L];
bf=this.__bd(H[bh],
false);
bf.key=bh;
be.push(bf);
}}else{var bi=0;
for(var bh in H){bi++;
}be=z+bi+v;
}break;
}return {type:bc,
text:be};
}}});
})();
(function(){var a="__bf",
b="qx.core.Object",
c="]",
d="[",
f="string",
g="Object";
qx.Class.define(b,
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
var q,
t;
var u={classname:k.classname,
properties:{}};
for(var r=0,
s=n.length;r<s;r++){q=n[r];
if(this.hasOwnProperty(o[q])){t=this[o[q]];
if(t instanceof qx.core.Object){u.properties[q]={$$hash:t.$$hash};
}else{u.properties[q]=t;
}}}return u;
},
set:function(v,
t){var p=qx.core.Property.$$method.set;
if(typeof v===f){{};
return this[p[v]](t);
}else{for(var w in v){{};
this[p[w]](v[w]);
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
__be:qx.event.Registration,
addListener:function(z,
A,
B,
C){if(!this.$$disposed){return this.__be.addListener(this,
z,
A,
B,
C);
}return null;
},
addListenerOnce:function(z,
A,
B,
C){var D=function(E){A.call(B||this,
E);
this.removeListenerById(F);
};
var F=this.addListener(z,
D,
this,
C);
return F;
},
removeListener:function(z,
A,
B,
C){if(!this.$$disposed){this.__be.removeListener(this,
z,
A,
B,
C);
}},
removeListenerById:function(F){this.__be.removeListenerById(this,
F);
},
hasListener:function(z,
C){return this.__be.hasListener(this,
z,
C);
},
dispatchEvent:function(G){if(!this.$$disposed){return this.__be.dispatchEvent(this,
G);
}return true;
},
fireEvent:function(z,
k,
h){if(!this.$$disposed){return this.__be.fireEvent(this,
z,
k,
h);
}return true;
},
fireNonBubblingEvent:function(z,
k,
h){if(!this.$$disposed){return this.__be.fireNonBubblingEvent(this,
z,
k,
h);
}return true;
},
fireDataEvent:function(z,
v,
H,
I){if(!this.$$disposed){return this.__be.fireNonBubblingEvent(this,
z,
qx.event.type.Data,
[v,
H||null,
!!I]);
}return true;
},
__bf:null,
setUserData:function(J,
t){if(!this.__bf){this.__bf={};
}this.__bf[J]=t;
},
getUserData:function(J){if(!this.__bf){return null;
}return this.__bf[J];
},
__bg:qx.log.Logger,
debug:function(K){this.__bg.debug(this,
K);
},
info:function(K){this.__bg.info(this,
K);
},
warn:function(K){this.__bg.warn(this,
K);
},
error:function(K){this.__bg.error(this,
K);
},
trace:function(){this.__bg.trace(this);
},
isDisposed:function(){return this.$$disposed||false;
},
dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
{};
var k=this.constructor;
var L;
while(k.superclass){if(k.$$destructor){k.$$destructor.call(this);
}if(k.$$includes){L=k.$$flatIncludes;
for(var r=0,
s=L.length;r<s;r++){if(L[r].$$destructor){L[r].$$destructor.call(this);
}}}k=k.superclass;
}var J,
t;
},
_disposeFields:function(M){qx.util.DisposeUtil.disposeFields(this,
arguments);
},
_disposeObjects:function(M){qx.util.DisposeUtil.disposeObjects(this,
arguments);
},
_disposeArray:function(N){qx.util.DisposeUtil.disposeArray(this,
N);
},
_disposeMap:function(N){qx.util.DisposeUtil.disposeMap(this,
N);
}},
settings:{"qx.disposerDebugLevel":0},
defer:function(O){{};
},
destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this._disposeFields(a);
var k=this.constructor;
var P;
var Q=qx.core.Property.$$store;
var R=Q.user;
var S=Q.theme;
var T=Q.inherit;
var U=Q.useinit;
var V=Q.init;
while(k){P=k.$$properties;
if(P){for(var q in P){if(P[q].dispose){this[R[q]]=this[S[q]]=this[T[q]]=this[U[q]]=this[V[q]]=undefined;
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
h)){r[s]=this.__bh(h,
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
__bh:function(){},
__bi:null,
__bj:function(){}}});
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
k="_applyWidth",
l="qx.ui.decoration.Uniform",
m="repeat-y",
n="__fd",
o="String",
p="__fc",
q="",
r="PositiveInteger",
s="border:",
t="dashed",
u="no-repeat",
v=" ",
w="repeat-x",
x=";";
qx.Class.define(l,
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
apply:k},
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
m,
u,
d],
init:b,
apply:a},
backgroundColor:{check:f,
nullable:true,
apply:a}},
members:{__fc:null,
__fd:null,
init:function(B){B.useMarkup(this.getMarkup());
},
getMarkup:function(){if(this.__fc){return this.__fc;
}var C=i;
var y=this.getWidth();
{};
var D=qx.theme.manager.Color.getInstance();
C+=s+y+h+this.getStyle()+v+D.resolve(this.getColor())+x;
var E=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),
this.getBackgroundRepeat(),
C);
return this.__fc=E;
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
}I.style.backgroundColor=D.resolve(J)||q;
},
getInsets:function(){if(this.__fd){return this.__fd;
}var y=this.getWidth();
this.__fd={top:y,
right:y,
bottom:y,
left:y};
return this.__fd;
},
_applyWidth:function(){{};
this.__fd=null;
},
_applyStyle:function(){{};
}},
destruct:function(){this._disposeFields(p,
n);
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
members:{__fm:null,
init:function(n){n.useMarkup(this.getMarkup());
},
getMarkup:function(){if(this.__fm){return this.__fm;
}var o=qx.ui.decoration.Util.generateBackgroundMarkup(this.getBackgroundImage(),
this.getBackgroundRepeat(),
h);
return this.__fm=o;
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
__fn:{top:0,
right:0,
bottom:0,
left:0},
getInsets:function(){return this.__fn;
},
_applyStyle:function(){{};
}}});
})();
(function(){var a="px",
b="0px",
c="-1px",
d="_applyInsets",
e="Number",
f="no-repeat",
g="scale-x",
h="scale-y",
i="-tr",
j="-l",
k="insetTop",
l='</div>',
m="insetBottom",
n="scale",
o="qx.client",
p="-br",
q="-t",
r="-tl",
s="-r",
t="__fl",
u="__fj",
v='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',
w="_applyBaseImage",
x="-b",
y="shorthand",
z="String",
A="insetRight",
B="",
C="-bl",
D="-c",
E="mshtml",
F="__fk",
G="insetLeft",
H="__fi",
I="qx.ui.decoration.Grid";
qx.Class.define(I,
{extend:qx.core.Object,
implement:[qx.ui.decoration.IDecorator],
construct:function(J,
K){arguments.callee.base.call(this);
if(J!=null){this.setBaseImage(J);
}
if(K!=null){this.setInsets(K);
}},
properties:{baseImage:{check:z,
nullable:true,
apply:w},
insetLeft:{check:e,
init:0,
apply:d},
insetRight:{check:e,
init:0,
apply:d},
insetBottom:{check:e,
init:0,
apply:d},
insetTop:{check:e,
init:0,
apply:d},
insets:{group:[k,
A,
m,
G],
mode:y}},
members:{__fi:null,
__fj:null,
__fk:null,
__fl:null,
init:function(L){L.useMarkup(this.getMarkup());
},
getMarkup:function(){if(this.__fi){return this.__fi;
}var M=qx.bom.element.Decoration;
var N=this.__fk;
var O=this.__fl;
var P=[];
P.push(v);
P.push(M.create(N.tl,
f,
{top:0,
left:0}));
P.push(M.create(N.t,
g,
{top:0,
left:O.left+a}));
P.push(M.create(N.tr,
f,
{top:0,
right:0}));
P.push(M.create(N.bl,
f,
{bottom:0,
left:0}));
P.push(M.create(N.b,
g,
{bottom:0,
left:O.left+a}));
P.push(M.create(N.br,
f,
{bottom:0,
right:0}));
P.push(M.create(N.l,
h,
{top:O.top+a,
left:0}));
P.push(M.create(N.c,
n,
{top:O.top+a,
left:O.left+a}));
P.push(M.create(N.r,
h,
{top:O.top+a,
right:0}));
P.push(l);
return this.__fi=P.join(B);
},
resize:function(L,
Q,
R){var O=this.__fl;
var S=Q-O.left-O.right;
var T=R-O.top-O.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}var U=L.getDomElement();
U.style.width=Q+a;
U.style.height=R+a;
U.childNodes[1].style.width=S+a;
U.childNodes[4].style.width=S+a;
U.childNodes[7].style.width=S+a;
U.childNodes[6].style.height=T+a;
U.childNodes[7].style.height=T+a;
U.childNodes[8].style.height=T+a;
if(qx.core.Variant.isSet(o,
E)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){if(Q%2==1){U.childNodes[2].style.marginRight=c;
U.childNodes[5].style.marginRight=c;
U.childNodes[8].style.marginRight=c;
}else{U.childNodes[2].style.marginRight=b;
U.childNodes[5].style.marginRight=b;
U.childNodes[8].style.marginRight=b;
}
if(R%2==1){U.childNodes[3].style.marginBottom=c;
U.childNodes[4].style.marginBottom=c;
U.childNodes[5].style.marginBottom=c;
}else{U.childNodes[3].style.marginBottom=b;
U.childNodes[4].style.marginBottom=b;
U.childNodes[5].style.marginBottom=b;
}}}},
tint:function(L,
V){},
getInsets:function(){if(this.__fj){return this.__fj;
}return this.__fj={left:this.getInsetLeft(),
right:this.getInsetRight(),
bottom:this.getInsetBottom(),
top:this.getInsetTop()};
},
_applyInsets:function(){{};
this.__fj=null;
},
_applyBaseImage:function(W,
X){{};
var Y=qx.util.ResourceManager;
if(W){var ba=qx.util.AliasManager.getInstance();
var bb=ba.resolve(W);
var bc=/(.*)(\.[a-z]+)$/.exec(bb);
var bd=bc[1];
var be=bc[2];
var N=this.__fk={tl:bd+r+be,
t:bd+q+be,
tr:bd+i+be,
bl:bd+C+be,
b:bd+x+be,
br:bd+p+be,
l:bd+j+be,
c:bd+D+be,
r:bd+s+be};
this.__fl={top:Y.getImageHeight(N.t),
bottom:Y.getImageHeight(N.b),
left:Y.getImageWidth(N.l),
right:Y.getImageWidth(N.r)};
}}},
destruct:function(){this._disposeFields(H,
u,
F,
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
J="__fe",
K="border-top:",
L="__ff",
M="no-repeat",
N="repeat-x";
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
N,
E,
M,
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
members:{__fe:null,
__ff:null,
init:function(R){R.useMarkup(this.getMarkup());
},
getMarkup:function(R){if(this.__fe){return this.__fe;
}var S=qx.theme.manager.Color.getInstance();
var T=u;
var O=this.getWidthTop();
if(O>0){T+=K+O+e+this.getStyleTop()+j+S.resolve(this.getColorTop())+k;
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
return this.__fe=U;
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
getInsets:function(){if(this.__ff){return this.__ff;
}this.__ff={top:this.getWidthTop(),
right:this.getWidthRight(),
bottom:this.getWidthBottom(),
left:this.getWidthLeft()};
return this.__ff;
},
_applyWidth:function(){{};
this.__ff=null;
},
_applyStyle:function(){{};
}},
destruct:function(){this._disposeFields(J,
L);
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
members:{__fo:null,
_applyStyle:function(){{};
},
init:function(E){E.useMarkup(this.getMarkup());
},
getMarkup:function(){if(this.__fo){return this.__fo;
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
return this.__fo=G.join(h);
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
getInsets:function(){return this.__fp;
},
__fp:{top:2,
right:2,
bottom:2,
left:2}}});
})();
(function(){var a="solid",
b="scale",
c="border-main",
d="border-separator",
e="white",
f="repeat-x",
g="background-light",
h="decoration/table/header-cell.png",
i="#f8f8f8",
j="#b6b6b6",
k="background-pane",
l="repeat-y",
m="border-input",
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
y="decoration/toolbar/toolbar-part.gif",
z="decoration/tabview/tab-button-top-inactive.png",
A="decoration/menu/bar-background.png",
B="decoration/tabview/tab-button-bottom-active.png",
C="decoration/form/button-hovered.png",
D="#b8b8b8",
E="decoration/form/input-focused.png",
F="decoration/window/captionbar-inactive.png",
G="qx/decoration/Modern",
H="decoration/window/statusbar.png",
I="border-focused",
J="decoration/selection.png",
K="table-focus-indicator",
L="#F2F2F2",
M="decoration/form/button-checked-c.png",
N="decoration/scrollbar/scrollbar-bg-horizontal.png",
O="qx.theme.modern.Decoration",
P="#f4f4f4",
Q="decoration/form/button.png",
R="decoration/app-header.png",
S="decoration/tabview/tabview-pane.png",
T="decoration/form/button-focused.png",
U="decoration/tabview/tab-button-bottom-inactive.png",
V="decoration/form/button-disabled.png",
W="border-disabled",
X="decoration/tabview/tab-button-right-active.png",
Y="decoration/form/button-pressed.png",
ba="decoration/scrollbar/scrollbar-button-bg-horizontal.png",
bb="decoration/window/captionbar-active.png",
bc="decoration/tabview/tab-button-left-active.png",
bd="background-splitpane",
be="decoration/form/button-checked-focused.png",
bf="#C5C5C5",
bg="decoration/toolbar/toolbar-gradient.png",
bh="decoration/tabview/tab-button-right-inactive.png",
bi="decoration/scrollbar/scrollbar-button-bg-vertical.png",
bj="decoration/shadow/shadow.png";
qx.Theme.define(O,
{resource:G,
decorations:{"main":{decorator:qx.ui.decoration.Uniform,
style:{width:1,
color:c}},
"selected":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:J,
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
style:{baseImage:bj,
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
style:{backgroundImage:N,
backgroundRepeat:f}},
"scrollbar-vertical":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:q,
backgroundRepeat:l}},
"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,
style:{backgroundImage:ba,
backgroundRepeat:b,
outerColor:c,
innerColor:e,
innerOpacity:0.5}},
"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,
style:{backgroundImage:bi,
backgroundRepeat:b,
outerColor:c,
innerColor:e,
innerOpacity:0.5}},
"button":{decorator:qx.ui.decoration.Grid,
style:{baseImage:Q,
insets:2}},
"button-disabled":{decorator:qx.ui.decoration.Grid,
style:{baseImage:V,
insets:2}},
"button-focused":{decorator:qx.ui.decoration.Grid,
style:{baseImage:T,
insets:2}},
"button-hovered":{decorator:qx.ui.decoration.Grid,
style:{baseImage:C,
insets:2}},
"button-pressed":{decorator:qx.ui.decoration.Grid,
style:{baseImage:Y,
insets:2}},
"button-checked":{decorator:qx.ui.decoration.Grid,
style:{baseImage:s,
insets:2}},
"button-checked-focused":{decorator:qx.ui.decoration.Grid,
style:{baseImage:be,
insets:2}},
"input":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:m,
innerColor:e,
innerOpacity:0.5,
backgroundImage:n,
backgroundRepeat:f,
backgroundColor:g}},
"input-focused":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:m,
innerColor:I,
backgroundImage:E,
backgroundRepeat:f,
backgroundColor:g}},
"input-disabled":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:W,
innerColor:e,
innerOpacity:0.5,
backgroundImage:n,
backgroundRepeat:f,
backgroundColor:g}},
"toolbar":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:bg,
backgroundRepeat:b}},
"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:j,
innerColor:i,
backgroundImage:p,
backgroundRepeat:b}},
"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,
style:{outerColor:j,
innerColor:i,
backgroundImage:M,
backgroundRepeat:b}},
"toolbar-separator":{decorator:qx.ui.decoration.Single,
style:{widthLeft:1,
widthRight:1,
colorLeft:D,
colorRight:P,
styleLeft:a,
styleRight:a}},
"toolbar-part":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:y,
backgroundRepeat:l}},
"tabview-pane":{decorator:qx.ui.decoration.Grid,
style:{baseImage:S,
insets:[0,
2,
3,
0]}},
"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:o}},
"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:z}},
"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:B}},
"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:U}},
"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:bc}},
"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:t}},
"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:X}},
"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:bh}},
"splitpane":{decorator:qx.ui.decoration.Uniform,
style:{backgroundColor:k,
width:3,
color:bd,
style:a}},
"window":{decorator:qx.ui.decoration.Single,
style:{backgroundColor:k,
width:1,
color:c,
widthTop:0}},
"window-captionbar-active":{decorator:qx.ui.decoration.Grid,
style:{baseImage:bb}},
"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,
style:{baseImage:F}},
"window-statusbar":{decorator:qx.ui.decoration.Grid,
style:{baseImage:H}},
"table":{decorator:qx.ui.decoration.Single,
style:{width:1,
color:c,
style:a}},
"table-statusbar":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:c,
style:a}},
"table-scroller-header":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:h,
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
style:{backgroundImage:h,
backgroundRepeat:b,
widthBottom:1,
colorBottom:c,
style:a}},
"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,
style:{width:2,
color:K,
style:a}},
"progressive-table-header":{decorator:qx.ui.decoration.Single,
style:{width:1,
color:c,
style:a}},
"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:h,
backgroundRepeat:b,
widthRight:1,
colorRight:L,
style:a}},
"menu":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:x,
backgroundRepeat:b,
width:1,
color:c,
style:a}},
"menu-separator":{decorator:qx.ui.decoration.Single,
style:{widthTop:1,
colorTop:bf,
widthBottom:1,
colorBottom:v}},
"menubar":{decorator:qx.ui.decoration.Single,
style:{backgroundImage:A,
backgroundRepeat:b,
width:1,
color:d,
style:a}},
"app-header":{decorator:qx.ui.decoration.Background,
style:{backgroundImage:R,
backgroundRepeat:b}}}});
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
UNKNOWN_PLATFORM:false,
__bD:function(){var n=navigator.platform;
if(n==null||n===c){n=navigator.userAgent;
}
if(n.indexOf(i)!=-1||n.indexOf(b)!=-1||n.indexOf(d)!=-1){this.WIN=true;
this.NAME="win";
}else if(n.indexOf(g)!=-1||n.indexOf(m)!=-1||n.indexOf(l)!=-1||n.indexOf(a)!=-1||n.indexOf(h)!=-1){this.MAC=true;
this.NAME="mac";
}else if(n.indexOf(k)!=-1||n.indexOf(e)!=-1||n.indexOf(f)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},
defer:function(o){o.__bD();
}});
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
A="openbsd",
B="(",
C="win2003",
D="symbian",
E="g",
F="qx.bom.client.System",
G=" Mobile/";
qx.Bootstrap.define(F,
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
OPENBSD:false,
OSX:false,
OS9:false,
SYMBIAN:false,
NINTENDODS:false,
PSP:false,
IPHONE:false,
UNKNOWN_SYSTEM:false,
__bE:{"Windows NT 6.0":z,
"Windows NT 5.2":C,
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
"OpenBSD":A,
"SunOS":n,
"Symbian System":D,
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
__bF:function(){var H=navigator.userAgent;
var I=[];
for(var J in this.__bE){I.push(J);
}var K=new RegExp(B+I.join(p).replace(/\./g,
v)+k,
E);
if(!K.test(H)){this.UNKNOWN_SYSTEM=true;
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
if(qx.bom.client.Engine.WEBKIT&&RegExp(G).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__bE[RegExp.$1];
this[this.NAME.toUpperCase()]=true;
if(qx.bom.client.Platform.WIN){if(H.indexOf(j)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&H.indexOf(o)!==-1){this.SP2=true;
}}}}},
defer:function(L){L.__bF();
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
(function(){var a="button-frame",
b="widget",
c="atom",
d="main",
e="button",
f="middle",
g="background-light",
h="groupbox",
i="image",
j="bold",
k="menu-button",
l="decoration/arrows/down.png",
m="text-selected",
n="toolbar-button",
o="spinner",
p="selected",
q="popup",
r="textfield",
s="input",
t="tree-item",
u="treevirtual-contract",
v="scrollbar",
w="datechooser/nav-button",
x="text-hovered",
y="center",
z="treevirtual-expand",
A="tooltip",
B="label",
C="decoration/arrows/right.png",
D="background-application",
E="radiobutton",
F="list",
G="combobox",
H="checkbox",
I="text-title",
J="qx/static/blank.gif",
K="input-focused",
L="scrollbar/button",
M="combobox/button",
N="decoration/tree/closed.png",
O="text-disabled",
P="scrollbar-slider-horizontal",
Q="input-disabled",
R="decoration/arrows/left.png",
S="button-focused",
T="text-light",
U="icon/16/places/folder.png",
V="slidebar/button-forward",
W="right-top",
X="background-splitpane",
Y=".png",
ba="decoration/tree/open.png",
bb="decoration/arrows/down-small.png",
bc="datechooser",
bd="slidebar/button-backward",
be="selectbox",
bf="treevirtual-folder",
bg="shadow-popup",
bh="background-medium",
bi="table",
bj="decoration/form/",
bk="icon/16/mimetypes/office-document.png",
bl="icon/16/places/folder-open.png",
bm="button-checked",
bn="decoration/window/maximize-active-hovered.png",
bo="radiobutton-hovered",
bp="decoration/cursors/",
bq="right",
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
bD="text-label",
bE="table-column-button",
bF="right.png",
bG="tabview-page-button-bottom-inactive",
bH="window-statusbar",
bI="button-hovered",
bJ="decoration/scrollbar/scrollbar-",
bK="background-tip",
bL="table-scroller-header",
bM="radiobutton-disabled",
bN="button-pressed",
bO="table-pane",
bP="white",
bQ="decoration/window/close-active.png",
bR="tabview-page-button-left-active",
bS="checkbox-hovered",
bT="checkbox-checked",
bU="decoration/window/minimize-active-hovered.png",
bV="menubar",
bW="icon/16/actions/dialog-cancel.png",
bX="tabview-page-button-top-inactive",
bY="tabview-page-button-left-inactive",
ca="toolbar-button-checked",
cb="decoration/tree/open-selected.png",
cc="radiobutton-checked",
cd="decoration/window/minimize-inactive.png",
ce="icon/16/apps/office-calendar.png",
cf="group",
cg="tabview-page-button-right-inactive",
ch="decoration/window/minimize-active.png",
ci="decoration/window/restore-inactive.png",
cj="text-active",
ck="checkbox-checked-focused",
cl="splitpane",
cm="text-input",
cn="toolbar-separator",
co="button-preselected-focused",
cp="decoration/window/close-active-hovered.png",
cq="toolbar",
cr="checkbox-pressed",
cs="button-disabled",
ct="border-separator",
cu="decoration/window/maximize-inactive.png",
cv="icon/22/places/folder-open.png",
cw="scrollarea",
cx="scrollbar-vertical",
cy="decoration/toolbar/toolbar-handle-knob.gif",
cz="icon/22/mimetypes/office-document.png",
cA="button-preselected",
cB="button-checked-focused",
cC="up.png",
cD="decoration/tree/closed-selected.png",
cE="qx.theme.modern.Appearance",
cF="default",
cG="checkbox-disabled",
cH="toolbar-button-hovered",
cI="progressive-table-header",
cJ="decoration/menu/radiobutton.gif",
cK="decoration/arrows/forward.png",
cL="decoration/table/descending.png",
cM="window-captionbar-active",
cN="checkbox-checked-hovered",
cO="scrollbar-slider-vertical",
cP="alias",
cQ="decoration/window/restore-active.png",
cR="checkbox-checked-disabled",
cS="icon/32/mimetypes/office-document.png",
cT="radiobutton-checked-disabled",
cU="tabview-pane",
cV="decoration/arrows/rewind.png",
cW="checkbox-focused",
cX="top",
cY="icon/16/actions/dialog-ok.png",
da="radiobutton-checked-hovered",
db="table-header-cell-hovered",
dc="window",
dd="text-gray",
de="decoration/menu/radiobutton-invert.gif",
df="slider",
dg="decoration/table/select-column-order.png",
dh="down.png",
di="tabview-page-button-top-active",
dj="icon/32/places/folder-open.png",
dk="icon/22/places/folder.png",
dl="decoration/window/maximize-active.png",
dm="checkbox-checked-pressed",
dn="decoration/window/close-inactive.png",
dp="toolbar-part",
dq="decoration/splitpane/knob-vertical.png",
dr="left.png",
ds="decoration/menu/checkbox-invert.gif",
dt="decoration/arrows/up.png",
du="radiobutton-checked-pressed",
dv="table-statusbar",
dw="radiobutton-pressed",
dx="window-captionbar-inactive",
dy="copy",
dz="radiobutton-focused",
dA="decoration/menu/checkbox.gif",
dB="decoration/splitpane/knob-horizontal.png",
dC="icon/32/places/folder.png",
dD="tabview-page-button-bottom-active",
dE="decoration/arrows/up-small.png",
dF="decoration/table/ascending.png",
dG="small",
dH="tabview-page-button-right-active",
dI="scrollbar-horizontal",
dJ="progressive-table-header-cell",
dK="menu-separator",
dL="pane",
dM="decoration/arrows/right-invert.png",
dN=".gif",
dO="icon/16/actions/view-refresh.png";
qx.Theme.define(cE,
{appearances:{"widget":{},
"root":{style:function(dP){return {backgroundColor:D,
textColor:bD,
font:cF};
}},
"label":{style:function(dP){return {textColor:dP.disabled?O:undefined};
}},
"move-frame":{style:function(dP){return {decorator:d};
}},
"resize-frame":bu,
"dragdrop-cursor":{style:function(dP){var dQ=bv;
if(dP.copy){dQ=dy;
}else if(dP.move){dQ=bz;
}else if(dP.alias){dQ=cP;
}return {source:bp+dQ+dN,
position:W,
offset:[2,
16,
2,
6]};
}},
"image":{style:function(dP){return {opacity:!dP.replacement&&dP.disabled?0.3:1};
}},
"atom":{},
"atom/label":B,
"atom/icon":i,
"popup":{style:function(dP){return {decorator:d,
backgroundColor:g,
shadow:bg};
}},
"button-frame":{alias:c,
style:function(dP){var dR,
dS;
if(dP.checked&&dP.focused&&!dP.inner){dR=cB;
dS=undefined;
}else if(dP.disabled){dR=cs;
dS=undefined;
}else if(dP.pressed){dR=bN;
dS=x;
}else if(dP.checked){dR=bm;
dS=undefined;
}else if(dP.hovered){dR=bI;
dS=x;
}else if(dP.preselected&&dP.focused&&!dP.inner){dR=co;
dS=x;
}else if(dP.preselected){dR=cA;
dS=x;
}else if(dP.focused&&!dP.inner){dR=S;
dS=undefined;
}else{dR=e;
dS=undefined;
}return {decorator:dR,
textColor:dS};
}},
"button-frame/image":{style:function(dP){return {opacity:!dP.replacement&&dP.disabled?0.5:1};
}},
"button":{alias:a,
include:a,
style:function(dP){return {padding:[2,
8],
center:true};
}},
"splitbutton":{},
"splitbutton/button":e,
"splitbutton/arrow":{alias:e,
include:e,
style:function(dP){return {icon:l,
padding:2,
marginLeft:1};
}},
"checkbox":{alias:c,
style:function(dP){var dQ;
if(dP.checked&&dP.focused){dQ=ck;
}else if(dP.checked&&dP.disabled){dQ=cR;
}else if(dP.checked&&dP.pressed){dQ=dm;
}else if(dP.checked&&dP.hovered){dQ=cN;
}else if(dP.checked){dQ=bT;
}else if(dP.disabled){dQ=cG;
}else if(dP.focused){dQ=cW;
}else if(dP.pressed){dQ=cr;
}else if(dP.hovered){dQ=bS;
}else{dQ=H;
}return {icon:bj+dQ+Y,
gap:6};
}},
"radiobutton":{alias:c,
style:function(dP){var dQ;
if(dP.checked&&dP.focused){dQ=bA;
}else if(dP.checked&&dP.disabled){dQ=cT;
}else if(dP.checked&&dP.pressed){dQ=du;
}else if(dP.checked&&dP.hovered){dQ=da;
}else if(dP.checked){dQ=cc;
}else if(dP.disabled){dQ=bM;
}else if(dP.focused){dQ=dz;
}else if(dP.pressed){dQ=dw;
}else if(dP.hovered){dQ=bo;
}else{dQ=E;
}return {icon:bj+dQ+Y,
gap:6};
}},
"textfield":{style:function(dP){return {decorator:dP.focused?K:dP.disabled?Q:s,
padding:[2,
4,
1],
textColor:dP.disabled?O:cm};
}},
"textarea":{include:r,
style:function(dP){return {padding:4};
}},
"spinner":{style:function(dP){return {decorator:dP.focused?K:dP.disabled?Q:s};
}},
"spinner/textfield":{include:r,
style:function(dP){return {decorator:undefined};
}},
"spinner/upbutton":{alias:a,
include:a,
style:function(dP){return {icon:dE,
padding:dP.pressed?[2,
2,
0,
4]:[1,
3,
1,
3]};
}},
"spinner/downbutton":{alias:a,
include:a,
style:function(dP){return {icon:bb,
padding:dP.pressed?[2,
2,
0,
4]:[1,
3,
1,
3]};
}},
"datefield":G,
"datefield/button":{alias:M,
include:M,
style:function(dP){return {icon:ce,
padding:[0,
3],
decorator:undefined};
}},
"datefield/textfield":{style:function(dP){return {padding:[2,
4,
1]};
}},
"datefield/list":{alias:bc,
include:bc,
style:function(dP){return {decorator:undefined};
}},
"groupbox":{style:function(dP){return {legendPosition:cX};
}},
"groupbox/legend":{alias:c,
style:function(dP){return {padding:[1,
0,
1,
4],
textColor:I,
font:j};
}},
"groupbox/frame":{style:function(dP){return {padding:12,
decorator:cf};
}},
"check-groupbox":h,
"check-groupbox/legend":{alias:H,
include:H,
style:function(dP){return {padding:[1,
0,
1,
4],
textColor:I,
font:j};
}},
"radio-groupbox":h,
"radio-groupbox/legend":{alias:E,
include:E,
style:function(dP){return {padding:[1,
0,
1,
4],
textColor:I};
}},
"scrollarea":b,
"scrollarea/corner":{style:function(dP){return {backgroundColor:D};
}},
"scrollarea/pane":b,
"scrollarea/scrollbar-x":v,
"scrollarea/scrollbar-y":v,
"scrollbar":{style:function(dP){return {width:dP.horizontal?undefined:16,
height:dP.horizontal?16:undefined,
decorator:dP.horizontal?dI:cx,
padding:1};
}},
"scrollbar/slider":{alias:df,
style:function(dP){return {padding:dP.horizontal?[0,
1,
0,
1]:[1,
0,
1,
0]};
}},
"scrollbar/slider/knob":{include:a,
style:function(dP){return {decorator:dP.horizontal?P:cO,
minHeight:dP.horizontal?undefined:14,
minWidth:dP.horizontal?14:undefined};
}},
"scrollbar/button":{alias:a,
include:a,
style:function(dP){var dQ=bJ;
if(dP.left){dQ+=dr;
}else if(dP.right){dQ+=bF;
}else if(dP.up){dQ+=cC;
}else{dQ+=dh;
}
if(dP.left||dP.right){return {padding:[0,
0,
0,
dP.left?3:4],
icon:dQ,
width:15,
height:14};
}else{return {padding:[0,
0,
0,
2],
icon:dQ,
width:14,
height:15};
}}},
"scrollbar/button-begin":L,
"scrollbar/button-end":L,
"slider":{style:function(dP){return {decorator:s};
}},
"slider/knob":{include:a,
style:function(dP){return {decorator:P,
height:14,
width:14};
}},
"list":{alias:cw,
style:function(dP){return {backgroundColor:g,
decorator:d};
}},
"list/pane":b,
"listitem":{alias:c,
style:function(dP){return {padding:4,
textColor:dP.selected?m:undefined,
decorator:dP.selected?p:undefined};
}},
"slidebar":{},
"slidebar/scrollpane":{},
"slidebar/content":{},
"slidebar/button-forward":{alias:a,
include:a,
style:function(dP){return {padding:5,
center:true,
icon:dP.barLeft||dP.barRight?l:C};
}},
"slidebar/button-backward":{alias:a,
include:a,
style:function(dP){return {padding:5,
center:true,
icon:dP.barLeft||dP.barRight?dt:R};
}},
"tabview":{style:function(dP){return {contentPadding:16};
}},
"tabview/bar":{alias:br,
style:function(dP){var dT={marginBottom:dP.barTop?-1:0,
marginTop:dP.barBottom?-4:0,
marginLeft:dP.barRight?-3:0,
marginRight:dP.barLeft?-1:0,
paddingTop:0,
paddingRight:0,
paddingBottom:0,
paddingLeft:0};
if(dP.barTop||dP.barBottom){dT.paddingLeft=5;
dT.paddingRight=7;
}else{dT.paddingTop=5;
dT.paddingBottom=7;
}return dT;
}},
"tabview/bar/button-forward":{include:V,
alias:V,
style:function(dP){if(dP.barTop||dP.barBottom){return {marginTop:2,
marginBottom:2};
}else{return {marginLeft:2,
marginRight:2};
}}},
"tabview/bar/button-backward":{include:bd,
alias:bd,
style:function(dP){if(dP.barTop||dP.barBottom){return {marginTop:2,
marginBottom:2};
}else{return {marginLeft:2,
marginRight:2};
}}},
"tabview/bar/scrollpane":{},
"tabview/pane":{style:function(dP){return {decorator:cU,
minHeight:100,
marginBottom:dP.barBottom?-1:0,
marginTop:dP.barTop?-1:0,
marginLeft:dP.barLeft?-1:0,
marginRight:dP.barRight?-1:0};
}},
"tabview-page":b,
"tabview-page/button":{alias:c,
style:function(dP){var dR,
dU=0;
var dV=0,
dW=0,
dX=0,
dY=0;
if(dP.checked){if(dP.barTop){dR=di;
dU=[6,
14];
dX=dP.firstTab?0:-5;
dY=dP.lastTab?0:-5;
}else if(dP.barBottom){dR=dD;
dU=[6,
14];
dX=dP.firstTab?0:-5;
dY=dP.lastTab?0:-5;
}else if(dP.barRight){dR=dH;
dU=[6,
13];
dV=dP.firstTab?0:-5;
dW=dP.lastTab?0:-5;
}else{dR=bR;
dU=[6,
13];
dV=dP.firstTab?0:-5;
dW=dP.lastTab?0:-5;
}}else{if(dP.barTop){dR=bX;
dU=[4,
10];
dV=4;
dX=dP.firstTab?5:1;
dY=1;
}else if(dP.barBottom){dR=bG;
dU=[4,
10];
dW=4;
dX=dP.firstTab?5:1;
dY=1;
}else if(dP.barRight){dR=cg;
dU=[4,
10];
dY=5;
dV=dP.firstTab?5:1;
dW=1;
dX=1;
}else{dR=bY;
dU=[4,
10];
dX=5;
dV=dP.firstTab?5:1;
dW=1;
dY=1;
}}return {zIndex:dP.checked?10:5,
decorator:dR,
padding:dU,
marginTop:dV,
marginBottom:dW,
marginLeft:dX,
marginRight:dY,
textColor:dP.checked?cj:by};
}},
"toolbar":{style:function(dP){return {decorator:cq,
spacing:2};
}},
"toolbar/part":{style:function(dP){return {decorator:dp,
spacing:2};
}},
"toolbar/part/container":{style:function(dP){return {paddingLeft:2,
paddingRight:2};
}},
"toolbar/part/handle":{style:function(dP){return {source:cy,
marginLeft:3,
marginRight:3};
}},
"toolbar-button":{alias:c,
style:function(dP){return {marginTop:2,
marginBottom:2,
padding:(dP.pressed||dP.checked||dP.hovered)&&!dP.disabled||(dP.disabled&&dP.checked)?3:5,
decorator:dP.pressed||(dP.checked&&!dP.hovered)||(dP.checked&&dP.disabled)?ca:dP.hovered&&!dP.disabled?cH:undefined};
}},
"toolbar-menubutton":{alias:n,
include:n,
style:function(dP){return {showArrow:true};
}},
"toolbar-menubutton/arrow":{alias:i,
include:i,
style:function(dP){return {source:bb};
}},
"toolbar-splitbutton":{style:function(dP){return {marginTop:2,
marginBottom:2};
}},
"toolbar-splitbutton/button":{alias:n,
include:n,
style:function(dP){return {icon:l,
marginTop:undefined,
marginBottom:undefined};
}},
"toolbar-splitbutton/arrow":{alias:n,
include:n,
style:function(dP){return {padding:dP.pressed||dP.checked?1:dP.hovered?1:3,
icon:l,
marginTop:undefined,
marginBottom:undefined};
}},
"toolbar-separator":{style:function(dP){return {decorator:cn,
margin:7};
}},
"tree":F,
"tree-item":{style:function(dP){return {padding:[2,
6],
textColor:dP.selected?m:undefined,
decorator:dP.selected?p:undefined};
}},
"tree-item/icon":{include:i,
style:function(dP){return {paddingRight:5};
}},
"tree-item/label":B,
"tree-item/open":{include:i,
style:function(dP){var dQ;
if(dP.selected&&dP.opened){dQ=cb;
}else if(dP.selected&&!dP.opened){dQ=cD;
}else if(dP.opened){dQ=ba;
}else{dQ=N;
}return {padding:[0,
5,
0,
2],
source:dQ};
}},
"tree-folder":{include:t,
alias:t,
style:function(dP){var dQ;
if(dP.small){dQ=dP.opened?bl:U;
}else if(dP.large){dQ=dP.opened?dj:dC;
}else{dQ=dP.opened?cv:dk;
}return {icon:dQ};
}},
"tree-file":{include:t,
alias:t,
style:function(dP){return {icon:dP.small?bk:dP.large?cS:cz};
}},
"treevirtual":bi,
"treevirtual-folder":{style:function(dP){return {icon:dP.opened?bl:U};
}},
"treevirtual-file":{include:bf,
alias:bf,
style:function(dP){return {icon:bk};
}},
"treevirtual-line":{style:function(dP){return {icon:J};
}},
"treevirtual-contract":{style:function(dP){return {icon:ba,
paddingLeft:5,
paddingTop:2};
}},
"treevirtual-expand":{style:function(dP){return {icon:N,
paddingLeft:5,
paddingTop:2};
}},
"treevirtual-only-contract":u,
"treevirtual-only-expand":z,
"treevirtual-start-contract":u,
"treevirtual-start-expand":z,
"treevirtual-end-contract":u,
"treevirtual-end-expand":z,
"treevirtual-cross-contract":u,
"treevirtual-cross-expand":z,
"treevirtual-end":{style:function(dP){return {icon:J};
}},
"treevirtual-cross":{style:function(dP){return {icon:J};
}},
"tooltip":{include:q,
style:function(dP){return {backgroundColor:bK,
padding:[1,
3,
2,
3],
offset:[1,
1,
20,
1]};
}},
"tooltip/atom":c,
"window":{style:function(dP){return {shadow:bC,
contentPadding:[10,
10,
10,
10]};
}},
"window/pane":{style:function(dP){return {decorator:dc};
}},
"window/captionbar":{style:function(dP){return {decorator:dP.active?cM:dx,
textColor:dP.active?bP:dd,
minHeight:26,
paddingRight:2};
}},
"window/icon":{style:function(dP){return {margin:[5,
0,
3,
6]};
}},
"window/title":{style:function(dP){return {alignY:f,
font:j,
marginLeft:6,
marginRight:12};
}},
"window/minimize-button":{alias:c,
style:function(dP){return {icon:dP.active?dP.hovered?bU:ch:cd,
margin:[4,
8,
2,
0]};
}},
"window/restore-button":{alias:c,
style:function(dP){return {icon:dP.active?dP.hovered?bB:cQ:ci,
margin:[5,
8,
2,
0]};
}},
"window/maximize-button":{alias:c,
style:function(dP){return {icon:dP.active?dP.hovered?bn:dl:cu,
margin:[4,
8,
2,
0]};
}},
"window/close-button":{alias:c,
style:function(dP){return {icon:dP.active?dP.hovered?cp:bQ:dn,
margin:[4,
8,
2,
0]};
}},
"window/statusbar":{style:function(dP){return {padding:[2,
6],
decorator:bH,
minHeight:18};
}},
"window/statusbar-text":{style:function(dP){return {font:dG};
}},
"iframe":{style:function(dP){return {decorator:d};
}},
"resizer":{style:function(dP){return {decorator:dL};
}},
"splitpane":{style:function(dP){return {decorator:cl};
}},
"splitpane/splitter":{style:function(dP){return {width:dP.horizontal?3:undefined,
height:dP.vertical?3:undefined,
backgroundColor:X};
}},
"splitpane/splitter/knob":{style:function(dP){return {source:dP.horizontal?dB:dq};
}},
"splitpane/slider":{style:function(dP){return {width:dP.horizontal?3:undefined,
height:dP.vertical?3:undefined,
backgroundColor:X};
}},
"selectbox":{alias:a,
include:a,
style:function(dP){return {padding:[2,
8]};
}},
"selectbox/atom":c,
"selectbox/popup":q,
"selectbox/list":{alias:F},
"selectbox/arrow":{style:function(dP){return {source:l,
paddingLeft:5};
}},
"datechooser":{style:function(dP){return {padding:2,
decorator:d,
backgroundColor:g};
}},
"datechooser/navigation-bar":{},
"datechooser/nav-button":{include:a,
alias:a,
style:function(dP){var dT={padding:[2,
4]};
if(dP.lastYear){dT.icon=cV;
dT.marginRight=1;
}else if(dP.lastMonth){dT.icon=R;
}else if(dP.nextYear){dT.icon=cK;
dT.marginLeft=1;
}else if(dP.nextMonth){dT.icon=C;
}return dT;
}},
"datechooser/last-year-button-tooltip":A,
"datechooser/last-month-button-tooltip":A,
"datechooser/next-year-button-tooltip":A,
"datechooser/next-month-button-tooltip":A,
"datechooser/last-year-button":w,
"datechooser/last-month-button":w,
"datechooser/next-month-button":w,
"datechooser/next-year-button":w,
"datechooser/month-year-label":{style:function(dP){return {font:j,
textAlign:y};
}},
"datechooser/date-pane":{style:function(dP){return {marginTop:2};
}},
"datechooser/weekday":{style:function(dP){return {textColor:dP.weekend?T:undefined,
textAlign:y,
paddingTop:2,
backgroundColor:bh};
}},
"datechooser/week":{style:function(dP){return {textAlign:y,
padding:[2,
4],
backgroundColor:bh};
}},
"datechooser/day":{style:function(dP){return {textAlign:y,
decorator:dP.selected?p:undefined,
textColor:dP.selected?m:dP.otherMonth?T:undefined,
font:dP.today?j:undefined,
padding:[2,
4]};
}},
"combobox":{style:function(dP){return {decorator:dP.focused?K:s};
}},
"combobox/popup":q,
"combobox/list":{alias:F},
"combobox/button":{include:a,
alias:a,
style:function(dP){var ea={icon:l,
padding:2};
if(dP.selected){ea.decorator=S;
}return ea;
}},
"combobox/textfield":{include:r,
style:function(dP){return {decorator:undefined};
}},
"menu":{style:function(dP){var dT={decorator:bs,
shadow:bg,
spacingX:6,
spacingY:1,
iconColumnWidth:16,
arrowColumnWidth:4};
if(dP.submenu){dT.position=W;
dT.offset=[-2,
-3];
}return dT;
}},
"menu-separator":{style:function(dP){return {height:0,
decorator:dK,
margin:[4,
2]};
}},
"menu-button":{alias:c,
style:function(dP){return {decorator:dP.selected?p:undefined,
textColor:dP.selected?m:undefined,
padding:[4,
6]};
}},
"menu-button/icon":{include:i,
style:function(dP){return {alignY:f};
}},
"menu-button/label":{include:B,
style:function(dP){return {alignY:f,
padding:1};
}},
"menu-button/shortcut":{include:B,
style:function(dP){return {alignY:f,
marginLeft:14,
padding:1};
}},
"menu-button/arrow":{style:function(dP){return {source:dP.selected?dM:C,
alignY:f};
}},
"menu-checkbox":{alias:k,
include:k,
style:function(dP){return {icon:!dP.checked?undefined:dP.selected?ds:dA};
}},
"menu-radiobutton":{alias:k,
include:k,
style:function(dP){return {icon:!dP.checked?undefined:dP.selected?de:cJ};
}},
"menubar":{style:function(dP){return {decorator:bV};
}},
"menubar-button":{alias:c,
style:function(dP){return {decorator:dP.pressed||dP.hovered?p:undefined,
textColor:dP.pressed||dP.hovered?m:undefined,
padding:[3,
8]};
}},
"colorselector":b,
"colorselector/control-bar":b,
"colorselector/control-pane":b,
"colorselector/visual-pane":h,
"colorselector/preset-grid":b,
"colorselector/colorbucket":{style:function(dP){return {decorator:d,
width:16,
height:16};
}},
"colorselector/preset-field-set":h,
"colorselector/input-field-set":h,
"colorselector/preview-field-set":h,
"colorselector/hex-field-composite":b,
"colorselector/hex-field":r,
"colorselector/rgb-spinner-composite":b,
"colorselector/rgb-spinner-red":o,
"colorselector/rgb-spinner-green":o,
"colorselector/rgb-spinner-blue":o,
"colorselector/hsb-spinner-composite":b,
"colorselector/hsb-spinner-hue":o,
"colorselector/hsb-spinner-saturation":o,
"colorselector/hsb-spinner-brightness":o,
"colorselector/preview-content-old":{style:function(dP){return {decorator:d,
width:50,
height:10};
}},
"colorselector/preview-content-new":{style:function(dP){return {decorator:d,
backgroundColor:g,
width:50,
height:10};
}},
"colorselector/hue-saturation-field":{style:function(dP){return {decorator:d,
margin:5};
}},
"colorselector/brightness-field":{style:function(dP){return {decorator:d,
margin:[5,
7]};
}},
"colorselector/hue-saturation-pane":b,
"colorselector/hue-saturation-handle":b,
"colorselector/brightness-pane":b,
"colorselector/brightness-handle":b,
"colorpopup":{alias:q,
include:q,
style:function(dP){return {padding:5,
backgroundColor:D};
}},
"colorpopup/field":{style:function(dP){return {decorator:d,
margin:2,
width:14,
height:14,
backgroundColor:g};
}},
"colorpopup/selector-button":e,
"colorpopup/auto-button":e,
"colorpopup/preview-pane":h,
"colorpopup/current-preview":{style:function(eb){return {height:20,
padding:4,
marginLeft:4,
decorator:d,
allowGrowX:true};
}},
"colorpopup/selected-preview":{style:function(eb){return {height:20,
padding:4,
marginRight:4,
decorator:d,
allowGrowX:true};
}},
"colorpopup/colorselector-okbutton":{alias:e,
include:e,
style:function(dP){return {icon:cY};
}},
"colorpopup/colorselector-cancelbutton":{alias:e,
include:e,
style:function(dP){return {icon:bW};
}},
"table":{alias:b,
style:function(dP){return {decorator:bi};
}},
"table-header":{},
"table/statusbar":{style:function(dP){return {decorator:dv,
padding:[0,
2]};
}},
"table/column-button":{alias:a,
style:function(dP){return {decorator:bE,
padding:3,
icon:dg};
}},
"table-column-reset-button":{include:k,
alias:k,
style:function(){return {icon:dO};
}},
"table-scroller":b,
"table-scroller/scrollbar-x":v,
"table-scroller/scrollbar-y":v,
"table-scroller/header":{style:function(dP){return {decorator:bL};
}},
"table-scroller/pane":{style:function(dP){return {backgroundColor:bO};
}},
"table-scroller/focus-indicator":{style:function(dP){return {decorator:bt};
}},
"table-scroller/resize-line":{style:function(dP){return {backgroundColor:ct,
width:2};
}},
"table-header-cell":{alias:c,
style:function(dP){return {minWidth:40,
minHeight:20,
padding:dP.hovered?[3,
4,
2,
4]:[3,
4],
decorator:dP.hovered?db:bw,
sortIcon:dP.sorted?(dP.sortedAscending?dF:cL):undefined};
}},
"table-header-cell/label":{style:function(dP){return {minWidth:0,
alignY:f,
paddingRight:5};
}},
"table-header-cell/sort-icon":{style:function(dP){return {alignY:f,
alignX:bq};
}},
"table-header-cell/icon":{style:function(dP){return {minWidth:0,
alignY:f,
paddingRight:5};
}},
"table-editor-textfield":{include:r,
style:function(dP){return {decorator:undefined,
padding:[2,
2],
backgroundColor:g};
}},
"table-editor-selectbox":{include:be,
alias:be,
style:function(dP){return {padding:[0,
2],
backgroundColor:g};
}},
"table-editor-combobox":{include:G,
alias:G,
style:function(dP){return {decorator:undefined,
backgroundColor:g};
}},
"progressive-table-header":{alias:b,
style:function(dP){return {decorator:cI};
}},
"progressive-table-header-cell":{alias:c,
style:function(dP){return {minWidth:40,
minHeight:25,
paddingLeft:6,
decorator:dJ};
}},
"app-header":{style:function(dP){return {font:j,
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
{statics:{__bv:{"Array":[e,
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
__bw:function(J,
K){return function(L){return J.prototype[K].apply(L,
Array.prototype.slice.call(arguments,
1));
};
},
__bx:function(){var M=qx.lang.Generics.__bv;
for(var N in M){var J=window[N];
var O=M[N];
for(var P=0,
Q=O.length;P<Q;P++){var K=O[P];
if(!J[K]){J[K]=qx.lang.Generics.__bw(J,
K);
}}}}},
defer:function(R){R.__bx();
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
}catch(ex){var k=this.getStackTraceFromError(ex);
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
}catch(ex){var m=this.getStackTraceFromError(ex);
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
}catch(ex){break;
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
var w=this.__by(H);
m.push(w+a+v);
}return m;
},
"webkit":function(E){if(E.sourceURL&&E.line){return [this.__by(E.sourceURL)+a+E.line];
}else{return [];
}},
"opera":function(E){if(E.message.indexOf("Backtrace:")<0){return [];
}var m=[];
var I=qx.lang.String.trim(E.message.split("Backtrace:")[1]);
var J=I.split(g);
for(var n=0;n<J.length;n++){var K=J[n].match(/\s*Line ([0-9]+) of.* (\S.*)/);
if(K&&K.length>=2){var v=K[1];
var L=this.__by(K[2]);
m.push(L+a+v);
}}return m;
},
"default":function(){return [];
}}),
__by:function(L){var M=h;
var N=L.indexOf(M);
var w=(N==-1)?L:L.substring(N+M.length).replace(/\//g,
j).replace(/\.js$/,
f);
return w;
}}});
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
if(i){i.__bk();
}}},
members:{canHandleEvent:function(j,
k){},
registerEvent:function(j,
k,
l){},
unregisterEvent:function(j,
k,
l){},
__bk:function(){if(!this.__bl){this.__bl=true;
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
_onNativeLoad:function(m){if(!window.qxloader){this.__bk();
}},
_onNativeUnload:function(m){if(!this.__bm){this.__bm=true;
try{qx.event.Registration.fireEvent(window,
d);
}finally{qx.core.ObjectRegistry.shutdown();
}}}},
destruct:function(){this._stopObserver();
this._disposeFields(g);
},
defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var a="qx.util.ObjectPool",
b="Integer";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(c){arguments.callee.base.call(this);
this.__bz={};
if(c!==undefined){this.setSize(c);
}},
properties:{size:{check:b,
init:null,
nullable:true}},
members:{__bz:null,
getObject:function(d){if(this.$$disposed){return;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__bz[d.classname];
if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},
poolObject:function(e){if(!this.__bz){return;
}var g=e.classname;
var f=this.__bz[g];
if(e.$$pooled){throw new Error("Object is already pooled: "+e);
}
if(!f){this.__bz[g]=f=[];
}var c=this.getSize()||Infinity;
if(f.length>c){this.warn("Cannot pool "+e+" because the pool is already full.");
e.dispose();
return;
}e.$$pooled=true;
f.push(e);
}},
destruct:function(){var f=this.__bz;
var g,
h,
j,
k;
for(g in f){h=f[g];
for(j=0,
k=h.length;j<k;j++){h[j].dispose();
}}delete this.__bz;
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
members:{__bA:{"qx.legacy.event.type.DragEvent":1,
"qx.legacy.event.type.MouseEvent":1,
"qx.legacy.event.type.KeyEvent":1},
poolObject:function(c){if(this.__bA[c.classname]){return;
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
(function(){var a="Better use 'getData'",
b="__bB",
c="Better use 'getOldData'",
d="__bC",
e="qx.event.type.Data";
qx.Class.define(e,
{extend:qx.event.type.Event,
members:{init:function(f,
g,
h){arguments.callee.base.call(this,
false,
h);
this.__bB=f;
this.__bC=g;
return this;
},
clone:function(i){var j=arguments.callee.base.call(this,
i);
j.__bB=this.__bB;
j.__bC=this.__bC;
return j;
},
getData:function(){return this.__bB;
},
getOldData:function(){return this.__bC;
},
getValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
a);
return this.__bB;
},
getOldValue:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
c);
return this.__bC;
}},
destruct:function(){this._disposeFields(b,
d);
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
(function(){var a="_dynamic",
b="qx.util.ValueManager",
c="abstract";
qx.Class.define(b,
{type:c,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},
members:{_dynamic:null,
resolveDynamic:function(d){return this._dynamic[d];
},
isDynamic:function(d){return !!this._dynamic[d];
},
resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
},
_setDynamic:function(d){this._dynamic=d;
},
_getDynamic:function(){return this._dynamic;
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
members:{_applyTheme:function(g){var h={};
if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;
for(var l in i){k=i[l];
if(typeof k===e){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},
resolve:function(g){var m=this._dynamic;
var n=m[g];
if(n){return n;
}var o=this.getTheme();
if(o!==null&&o.colors[g]){return m[g]=o.colors[g];
}return g;
},
isDynamic:function(g){var m=this._dynamic;
if(g&&(m[g]!==undefined)){return true;
}var o=this.getTheme();
if(o!==null&&g&&(o.colors[g]!==undefined)){m[g]=o.colors[g];
return true;
}return false;
}}});
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
42],
grey:[128,
128,
128]},
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
}else if(this.isRgbString(k)){return this.__bG();
}else if(this.isHex3String(k)){return this.__bH();
}else if(this.isHex6String(k)){return this.__bI();
}throw new Error("Could not parse color: "+k);
},
cssStringToRgb:function(k){if(this.isNamedColor(k)){return this.NAMED[k];
}else if(this.isSystemColor(k)){throw new Error("Could not convert system colors to RGB: "+k);
}else if(this.isRgbString(k)){return this.__bG();
}else if(this.isHex3String(k)){return this.__bH();
}else if(this.isHex6String(k)){return this.__bI();
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
__bG:function(){var m=parseInt(RegExp.$1,
10);
var n=parseInt(RegExp.$2,
10);
var o=parseInt(RegExp.$3,
10);
return [m,
n,
o];
},
__bH:function(){var m=parseInt(RegExp.$1,
16)*17;
var n=parseInt(RegExp.$2,
16)*17;
var o=parseInt(RegExp.$3,
16)*17;
return [m,
n,
o];
},
__bI:function(){var m=(parseInt(RegExp.$1,
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
hex3StringToRgb:function(j){if(this.isHex3String(j)){return this.__bH(j);
}throw new Error("Invalid hex3 value: "+j);
},
hex6StringToRgb:function(j){if(this.isHex6String(j)){return this.__bI(j);
}throw new Error("Invalid hex6 value: "+j);
},
hexStringToRgb:function(j){if(this.isHex3String(j)){return this.__bH(j);
}
if(this.isHex6String(j)){return this.__bI(j);
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
e="mshtml",
f='"/>',
g="",
h='" style="vertical-align:top;',
i="scale",
j="qx.client",
k="qx.ui.decoration.Util",
l='<img src="',
m="overflow:hidden;";
qx.Class.define(k,
{statics:{insetsModified:function(n,
o){if(n==o){return false;
}
if(n==null||o==null){return true;
}var p=qx.theme.manager.Decoration.getInstance();
var q=p.resolve(n).getInsets();
var r=p.resolve(o).getInsets();
if(q.top!=r.top||q.right!=r.right||q.bottom!=r.bottom||q.left!=r.left){return true;
}return false;
},
generateBackgroundMarkup:function(s,
t,
u){if(s){var v=qx.util.AliasManager.getInstance().resolve(s);
if(t==i){var w=qx.util.ResourceManager.toUri(v);
return l+w+h+u+f;
}else{var x=qx.bom.element.Background.compile(v,
t,
0,
0);
return c+x+u+d;
}}else{if(u){if(qx.core.Variant.isSet(j,
e)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){u+=m;
}}return c+u+d;
}else{return g;
}}}}});
})();
(function(){var a="decoration",
b="object",
c="_applyTheme",
d="__bJ",
e="qx.theme.manager.Decoration",
f="Theme",
g="string",
h="singleton";
qx.Class.define(e,
{type:h,
extend:qx.core.Object,
properties:{theme:{check:f,
nullable:true,
apply:c}},
members:{__bJ:null,
resolve:function(i){if(!i){return null;
}
if(typeof i===b){return i;
}var j=this.getTheme();
if(!j){return null;
}var j=this.getTheme();
if(!j){return null;
}var k=this.__bJ;
if(!k){k=this.__bJ={};
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
destruct:function(){this._disposeMap(d);
}});
})();
(function(){var a="/",
b="0",
c="qx/static",
d="http://",
e="https://",
f="file://",
g="qx.util.AliasManager",
h="singleton",
i="__bK",
j=".",
k="static";
qx.Class.define(g,
{type:h,
extend:qx.util.ValueManager,
construct:function(){arguments.callee.base.call(this);
this.__bK={};
this.add(k,
c);
},
members:{__bK:null,
_preprocess:function(l){var m=this._getDynamic();
if(m[l]===false){return l;
}else if(m[l]===undefined){if(l.charAt(0)===a||l.charAt(0)===j||l.indexOf(d)===0||l.indexOf(e)===b||l.indexOf(f)===0){m[l]=false;
return l;
}var n=l.substring(0,
l.indexOf(a));
var o=this.__bK[n];
if(o!==undefined){m[l]=o+l.substring(n.length);
}}return l;
},
add:function(n,
p){this.__bK[n]=p;
var m=this._getDynamic();
var q={};
for(var r in m){if(r.substring(0,
r.indexOf(a))===n){m[r]=p+r.substring(n.length);
q[r]=true;
}}},
remove:function(n){delete this.__bK[n];
},
resolve:function(r){var s=this._getDynamic();
if(r!==null){r=this._preprocess(r);
}return s[r]||r;
}},
destruct:function(){this._disposeFields(i);
}});
})();
(function(){var a="/",
b="qx.util.ResourceManager",
c="string";
qx.Bootstrap.define(b,
{statics:{__fV:window.qxresources||{},
has:function(d){return !!this.__fV[d];
},
getData:function(d){return this.__fV[d]||null;
},
getImageWidth:function(d){var e=this.__fV[d];
return e?e[0]:null;
},
getImageHeight:function(d){var e=this.__fV[d];
return e?e[1]:null;
},
getImageFormat:function(d){var e=this.__fV[d];
return e?e[2]:null;
},
isClippedImage:function(d){var e=this.__fV[d];
return e&&e.length>4;
},
toUri:function(d){if(d==null){return d;
}var e=this.__fV[d];
if(!e){return d;
}
if(typeof e===c){var f=e;
}else{var f=e[3];
if(!f){return d;
}}return window.qxlibraries[f].resourceUri+a+d;
}}});
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
{statics:{__fW:[i,
null,
j,
p,
null,
h,
n,
null,
h],
__fX:{backgroundImage:null,
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
e)){x=this.__fY(x);
}var y=this.__fW;
y[1]=x;
y[4]=w;
y[7]=s;
return y.join(f);
},
getStyles:function(r,
s,
t,
u){if(!r){return this.__fX;
}var v=qx.bom.client.Engine;
if(v.GECKO&&v.VERSION<1.9&&t==u&&t!=null){u+=0.01;
}
if(t!=null||u!=null){var w=(t==null?b:t+a)+g+(u==null?b:u+a);
}var x=qx.util.ResourceManager.toUri(r);
if(qx.core.Variant.isSet(c,
e)){x=this.__fY(x);
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
__fY:qx.core.Variant.select(c,
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
__di:function(){this.STANDARD_MODE=document.compatMode==="CSS1Compat";
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
defer:function(b){b.__di();
}});
})();
(function(){var a="px",
b="div",
c="img",
d="qx.client",
e="scale-x",
f="",
g="mshtml",
h="no-repeat",
i="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",
j="scale-y",
k="repeat",
l=".png",
m="scale",
n="webkit",
o='<div style="',
p="repeat-y",
q='<img src="',
r="qx.bom.element.Decoration",
s="png",
t="', sizingMethod='scale')",
u="', sizingMethod='crop')",
v='"/>',
w='" style="',
x="none",
y="repeat-x",
z='"></div>',
A="absolute";
qx.Class.define(r,
{statics:{DEBUG:false,
__ga:qx.core.Variant.isSet(d,
g)&&qx.bom.client.Engine.VERSION<8,
__gb:qx.core.Variant.select(d,
{"mshtml":{"scale-x":true,
"scale-y":true,
"scale":true,
"no-repeat":true},
"default":null}),
__gc:{"scale-x":c,
"scale-y":c,
"scale":c,
"repeat":b,
"no-repeat":b,
"repeat-x":b,
"repeat-y":b},
update:function(B,
C,
D,
E){var F=this.getTagName(D,
C);
if(F!=B.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var G=this.getAttributes(C,
D,
E);
if(F===c){B.src=G.src;
}if(B.style.backgroundPosition!=f&&G.style.backgroundPosition===undefined){G.style.backgroundPosition=null;
}if(B.style.clip!=f&&G.style.clip===undefined){G.style.clip=null;
}var H=qx.bom.element.Style;
H.setStyles(B,
G.style);
},
create:function(C,
D,
E){var F=this.getTagName(D,
C);
var G=this.getAttributes(C,
D,
E);
var I=qx.bom.element.Style.compile(G.style);
if(F===c){return q+G.src+w+I+v;
}else{return o+I+z;
}},
getTagName:function(D,
C){if(qx.core.Variant.isSet(d,
g)){if(C&&this.__ga&&this.__gb[D]&&qx.lang.String.endsWith(C,
l)){return b;
}}return this.__gc[D];
},
getAttributes:function(C,
D,
E){var J=qx.util.ResourceManager;
var K=qx.io2.ImageLoader;
var L=qx.bom.element.Background;
if(!E){E={};
}
if(!E.position){E.position=A;
}
if(qx.core.Variant.isSet(d,
g)){E.fontSize=0;
E.lineHeight=0;
}else if(qx.core.Variant.isSet(d,
n)){E.WebkitUserDrag=x;
}var M=J.getImageWidth(C)||K.getWidth(C);
var N=J.getImageHeight(C)||K.getHeight(C);
var O=J.getImageFormat(C);
if(this.__ga&&this.__gb[D]&&O===s){if(E.width==null&&M!=null){E.width=M+a;
}
if(E.height==null&&N!=null){E.height=N+a;
}
if(D==h){E.filter=i+J.toUri(C)+u;
}else{E.filter=i+J.toUri(C)+t;
}E.backgroundImage=E.backgroundRepeat=f;
return {style:E};
}else{if(D===m){var P=J.toUri(C);
if(E.width==null&&M!=null){E.width=M+a;
}
if(E.height==null&&N!=null){E.height=N+a;
}return {src:P,
style:E};
}var Q=J.isClippedImage(C);
if(D===e||D===j){if(Q){if(D===e){var R=J.getData(C);
var S=J.getImageHeight(R[4]);
var P=J.toUri(R[4]);
E.clip={top:-R[6],
height:N};
E.height=S+a;
if(E.top!=null){E.top=(parseInt(E.top,
10)+R[6])+a;
}else if(E.bottom!=null){E.bottom=(parseInt(E.bottom,
10)+N-S-R[6])+a;
}return {src:P,
style:E};
}else{var R=J.getData(C);
var T=J.getImageWidth(R[4]);
var P=J.toUri(R[4]);
E.clip={left:-R[5],
width:M};
E.width=T+a;
if(E.left!=null){E.left=(parseInt(E.left,
10)+R[5])+a;
}else if(E.right!=null){E.right=(parseInt(E.right,
10)+M-T-R[5])+a;
}return {src:P,
style:E};
}}else{{};
if(D==e){E.height=N==null?null:N+a;
}else if(D==j){E.width=M==null?null:M+a;
}var P=J.toUri(C);
return {src:P,
style:E};
}}else{if(Q&&D!==k){var R=J.getData(C);
var U=L.getStyles(R[4],
D,
R[5],
R[6]);
for(var V in U){E[V]=U[V];
}
if(M!=null&&E.width==null&&(D==p||D===h)){E.width=M+a;
}
if(N!=null&&E.height==null&&(D==y||D===h)){E.height=N+a;
}return {style:E};
}else{{};
var U=L.getStyles(C,
D);
for(var V in U){E[V]=U[V];
}
if(M!=null&&E.width==null){E.width=M+a;
}
if(N!=null&&E.height==null){E.height=N+a;
}return {style:E};
}}}}}});
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
{statics:{__cV:{styleNames:{"float":qx.core.Variant.select(b,
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
__cW:{},
compile:function(I){var J=[];
var K=this.__cV;
var L=K.special;
var M=K.cssNames;
var N=this.__cW;
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
var K=this.__cV;
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
T){var K=this.__cV;
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
T){var K=this.__cV;
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
T){var K=this.__cV;
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
d="clip:auto;",
e="rect(",
f=");",
g="",
h=")",
i="qx.bom.element.Clip",
j="string",
k="rect(auto)",
l="clip:rect(",
m="clip",
n="rect(auto,auto,auto,auto)";
qx.Class.define(i,
{statics:{compile:function(o){if(!o){return d;
}var p=o.left;
var q=o.top;
var r=o.width;
var s=o.height;
var t,
u;
if(p==null){t=(r==null?a:r+b);
p=a;
}else{t=(r==null?a:p+r+b);
p=p+b;
}
if(q==null){u=(s==null?a:s+b);
q=a;
}else{u=(s==null?a:q+s+b);
q=q+b;
}return l+q+c+t+c+u+c+p+f;
},
get:function(v,
w){var x=qx.bom.element.Style.get(v,
m,
w,
false);
var p,
q,
r,
s;
var t,
u;
if(typeof x===j&&x!==a&&x!==g){x=qx.lang.String.trim(x);
if(/\((.*)\)/.test(x)){var y=RegExp.$1.split(c);
q=qx.lang.String.trim(y[0]);
t=qx.lang.String.trim(y[1]);
u=qx.lang.String.trim(y[2]);
p=qx.lang.String.trim(y[3]);
if(p===a){p=null;
}
if(q===a){q=null;
}
if(t===a){t=null;
}
if(u===a){u=null;
}if(q!=null){q=parseInt(q,
10);
}
if(t!=null){t=parseInt(t,
10);
}
if(u!=null){u=parseInt(u,
10);
}
if(p!=null){p=parseInt(p,
10);
}if(t!=null&&p!=null){r=t-p;
}else if(t!=null){r=t;
}
if(u!=null&&q!=null){s=u-q;
}else if(u!=null){s=u;
}}else{throw new Error("Could not parse clip string: "+x);
}}return {left:p||null,
top:q||null,
width:r||null,
height:s||null};
},
set:function(v,
o){if(!o){v.style.clip=n;
return;
}var p=o.left;
var q=o.top;
var r=o.width;
var s=o.height;
var t,
u;
if(p==null){t=(r==null?a:r+b);
p=a;
}else{t=(r==null?a:p+r+b);
p=p+b;
}
if(q==null){u=(s==null?a:s+b);
q=a;
}else{u=(s==null?a:q+s+b);
q=q+b;
}v.style.clip=e+q+c+t+c+u+c+p+h;
},
reset:function(v){v.style.clip=qx.bom.client.Engine.MSHTML?k:a;
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
{statics:{__cX:qx.core.Variant.select(g,
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
compile:function(l){return f+(this.__cX[l]||l)+h;
},
get:function(m,
n){return qx.bom.element.Style.get(m,
j,
n,
false);
},
set:function(m,
o){m.style.cursor=this.__cX[o]||o;
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
{statics:{__cY:qx.core.Variant.select(a,
{"mshtml":null,
"webkit":[c,
h,
k],
"gecko":[q],
"opera":[c]}),
__da:qx.core.Variant.select(a,
{"mshtml":null,
"webkit":[d,
n,
p],
"gecko":[j],
"opera":[d]}),
__db:{tags:{button:true,
select:true},
types:{search:true,
button:true,
submit:true,
reset:true,
checkbox:true,
radio:true}},
__dc:function(r){var s=this.__db;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},
compile:qx.core.Variant.select(a,
{"mshtml":function(t){{};
},
"default":function(t){var u=this.__da;
var v=b;
if(u){for(var w=0,
x=u.length;w<x;w++){v+=u[w]+e+t+m;
}}return v;
}}),
get:qx.core.Variant.select(a,
{"mshtml":function(r){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(r))){if(!this.__dc(r)){return o;
}}return f;
},
"default":function(r){var u=this.__cY;
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
t){var u=this.__cY;
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
{statics:{__cU:null,
getScrollbarWidth:function(){if(this.__cU!==null){return this.__cU;
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
this.__cU=L?L:16;
document.body.removeChild(J);
return this.__cU;
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
(function(){var a="qx.client",
b="qx.io2.ImageLoader",
c="load";
qx.Bootstrap.define(b,
{statics:{__gd:{},
__ge:{width:null,
height:null},
isLoaded:function(d){var e=this.__gd[d];
return !!(e&&e.loaded);
},
isFailed:function(d){var e=this.__gd[d];
return !!(e&&e.failed);
},
isLoading:function(d){var e=this.__gd[d];
return !!(e&&e.loading);
},
getSize:function(d){return this.__gd[d]||this.__ge;
},
getWidth:function(d){var e=this.__gd[d];
return e?e.width:null;
},
getHeight:function(d){var e=this.__gd[d];
return e?e.height:null;
},
load:function(d,
f,
g){var e=this.__gd[d];
if(!e){e=this.__gd[d]={};
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
var j=qx.lang.Function.listener(this.__gf,
this,
h,
d);
h.onload=j;
h.onerror=j;
h.src=d;
}},
__gf:function(k,
m,
d){var e=this.__gd[d];
if(k.type===c){e.loaded=true;
e.width=this.__gg(m);
e.height=this.__gh(m);
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
__gg:qx.core.Variant.select(a,
{"gecko":function(m){return m.naturalWidth;
},
"default":function(m){return m.width;
}}),
__gh:qx.core.Variant.select(a,
{"gecko":function(m){return m.naturalHeight;
},
"default":function(m){return m.height;
}})}});
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
scroll:1,
beforeshutdown:1},
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
if(f==null||f===l||f===m||f===n){var o=qx.event.Registration.createEvent(k.type,
qx.event.type.Native,
[k,
l]);
qx.event.Registration.dispatchEvent(l,
o);
var p=o.getReturnValue();
if(p!=null){k.returnValue=p;
return p;
}}}},
destruct:function(){this._stopWindowObserver();
this._disposeFields(b,
a);
},
defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var a="ready",
b="qx.application",
c="beforeunload",
d="qx.core.Init",
f="shutdown";
qx.Class.define(d,
{statics:{getApplication:function(){return this.__bo||null;
},
__bn:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,
"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var g=qx.core.Setting.get(b);
var h=qx.Class.getByName(g);
if(h){this.__bo=new h;
var i=new Date;
this.__bo.main();
qx.log.Logger.debug(this,
"Main runtime: "+(new Date-i)+"ms");
var i=new Date;
this.__bo.finalize();
qx.log.Logger.debug(this,
"Finalize runtime: "+(new Date-i)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+g);
}},
__bp:function(j){var g=this.__bo;
if(g){j.setReturnValue(g.close());
}},
__bq:function(){var g=this.__bo;
if(g){g.terminate();
}}},
defer:function(k){qx.event.Registration.addListener(window,
a,
k.__bn,
k);
qx.event.Registration.addListener(window,
f,
k.__bq,
k);
qx.event.Registration.addListener(window,
c,
k.__bp,
k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,
{members:{main:function(){},
finalize:function(){},
close:function(){},
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
__br:null,
__bs:function(){}}});
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
trc:function(h,
b,
c){var d=qx.locale.Manager;
if(d){return d.trc.apply(d,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},
marktr:function(b){var d=qx.locale.Manager;
if(d){return d.marktr.apply(d,
arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var a="abstract",
b="__bt",
c="qx.application.AbstractGui";
qx.Class.define(c,
{type:a,
extend:qx.core.Object,
implement:[qx.application.IApplication],
include:qx.locale.MTranslation,
members:{__bt:null,
_createRootWidget:function(){throw new Error("Abstract method call");
},
getRoot:function(){return this.__bt;
},
main:function(){qx.theme.manager.Meta.getInstance().initialize();
this.__bt=this._createRootWidget();
},
finalize:function(){this.render();
},
render:function(){qx.ui.core.queue.Manager.flush();
},
close:function(d){},
terminate:function(){}},
destruct:function(){this._disposeFields(b);
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
j="_horizontalSplitPane",
k="_applyArticle",
l="Heise",
m="_listView",
n="F1",
o="Control+A",
p="_treeView",
q="http://my.opera.com/desktopteam/xml/rss/blog/",
r="removeFeed",
s="_verticalSplitPane",
t="http://blogs.msdn.com/jscript/rss.xml",
u="http://feedproxy.feedburner.com/qooxdoo/news/content",
v="http://www.appleinsider.com/appleinsider.rss",
w="Apple Insider",
x="feedreader.model.Feed",
y="Opera Desktop Blog",
z="vertical",
A="http://webkit.org/blog/?feed=rss2",
B="http://www.heise.de/newsticker/heise-atom.xml",
C="http://www.alistapart.com/rss.xml",
D="JScript Team Blog",
E="http://feedproxy.feedburner.com/ajaxian",
F="Control+D",
G="_feedList",
H="Ajaxian",
I="__tT",
J="_applyFeed",
K="feedreader.model.Article",
L="feedreader.Application",
M="http://daringfireball.net/index.xml",
N="Control+P",
O="Control+R",
P="qooxdoo News",
Q="_articleView",
R="A List Apart",
S="Daring Fireball",
T="_toolBarView";
qx.Class.define(L,
{extend:qx.application.Standalone,
properties:{feed:{check:x,
nullable:true,
apply:J},
article:{check:K,
nullable:true,
apply:k}},
members:{main:function(){arguments.callee.base.call(this);
{};
this._initializeModel();
this._initializeCommands();
this._createLayout();
this._feedList.addFeed(new feedreader.model.Feed(P,
u,
a));
this._feedList.addFeed(new feedreader.model.Feed(D,
t,
a));
this._feedList.addFeed(new feedreader.model.Feed(S,
M,
a));
this._feedList.addFeed(new feedreader.model.Feed(h,
A,
a));
this._feedList.addFeed(new feedreader.model.Feed(H,
E,
a));
this._feedList.addFeed(new feedreader.model.Feed(l,
B,
c));
this._feedList.addFeed(new feedreader.model.Feed(R,
C,
c));
this._feedList.addFeed(new feedreader.model.Feed(w,
v,
c));
this._feedList.addFeed(new feedreader.model.Feed(y,
q,
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
_onSelectFeed:function(U){var V=U.getData();
var W=U.getOldData();
if(W){W.removeListener(d,
this._onSelectArticle,
this);
}this.setFeed(V);
if(V){V.addListener(d,
this._onSelectArticle,
this);
var X=V.getSelected();
this.setArticle(X);
}},
_onSelectArticle:function(U){var Y=U.getData();
this.setArticle(Y);
},
_createLayout:function(){var ba=new qx.ui.layout.Dock();
ba.setSeparatorY(i);
var bb=new qx.ui.container.Composite(ba);
this.getRoot().add(bb,
{edge:0});
this._header=new feedreader.view.Header();
bb.add(this._header,
{edge:f});
this._toolBarView=new feedreader.view.ToolBar(this);
bb.add(this._toolBarView,
{edge:f});
this._horizontalSplitPane=new qx.ui.splitpane.Pane();
bb.add(this._horizontalSplitPane);
this._treeView=new feedreader.view.Tree(this._feedList);
this._treeView.setWidth(250);
this._horizontalSplitPane.add(this._treeView,
0);
this._verticalSplitPane=new qx.ui.splitpane.Pane(z);
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
_initializeCommands:function(){var bc={};
bc.reload=new qx.event.Command(O);
bc.reload.addListener(b,
this.reload,
this);
bc.about=new qx.event.Command(n);
bc.about.addListener(b,
this.showAbout,
this);
bc.preferences=new qx.event.Command(N);
bc.preferences.addListener(b,
this.showPreferences,
this);
bc.addFeed=new qx.event.Command(o);
bc.addFeed.addListener(b,
this.showAddFeed,
this);
bc.removeFeed=new qx.event.Command(F);
bc.removeFeed.addListener(b,
this.removeFeed,
this);
this.__tT=bc;
},
getCommand:function(bd){return this.__tT[bd];
},
addFeed:function(be,
bf,
bg){var V=new feedreader.model.Feed(be,
bf,
bg);
this._feedList.addFeed(V);
var bh=feedreader.io.FeedLoader.getInstance();
bh.load(V);
},
removeFeed:function(){var V=this._feedList.getSelected();
if(V&&V.getCategory()!==a){this._feedList.removeFeed(V);
}},
reload:function(){var bh=feedreader.io.FeedLoader.getInstance();
bh.loadAll(this._feedList);
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
_applyFeed:function(bi,
bj){this._listView.setFeed(bi);
this.getCommand(r).setEnabled(!!(bi&&bi.getCategory()!==a));
},
_applyArticle:function(bi,
bj){if(bi){this._articleView.setArticle(bi);
}else{this._articleView.resetArticle();
}}},
destruct:function(){this._disposeFields(I);
this._disposeObjects(T,
m,
Q,
p,
G,
j,
s);
}});
})();
(function(){var a="qx.event.type.Native",
b="_native",
c="_returnValue";
qx.Class.define(a,
{extend:qx.event.type.Event,
members:{init:function(d,
e,
f,
g,
h){arguments.callee.base.call(this,
g,
h);
this._target=e||qx.bom.Event.getTarget(d);
this._relatedTarget=f||qx.bom.Event.getRelatedTarget(d);
if(d.timeStamp){this._timeStamp=d.timeStamp;
}this._native=d;
return this;
},
clone:function(i){var j=arguments.callee.base.call(this,
i);
j._native=this._native;
j._returnValue=this._returnValue;
return j;
},
preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},
stop:function(){this.stopPropagation();
this.preventDefault();
},
getNativeEvent:function(){return this._native;
},
setReturnValue:function(k){this._returnValue=k;
},
getReturnValue:function(){return this._returnValue;
}},
destruct:function(){this._disposeFields(b,
c);
}});
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
r.setTheme(m);
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
members:{resolveDynamic:function(f){var g=this._dynamic;
return f instanceof qx.bom.Font?f:g[f];
},
resolve:function(f){var h=this._dynamic;
var i=h[f];
if(i){return i;
}var j=this.getTheme();
if(j!==null&&j.fonts[f]){return h[f]=(new qx.bom.Font).set(j.colors[f]);
}return f;
},
isDynamic:function(f){var h=this._dynamic;
if(f&&(f instanceof qx.bom.Font||h[f]!==undefined)){return true;
}var j=this.getTheme();
if(j!==null&&f&&j.fonts[f]){h[f]=(new qx.bom.Font).set(j.fonts[f]);
return true;
}return false;
},
_applyTheme:function(f){var k=this._getDynamic();
for(var l in k){if(k[l].themed){k[l].dispose();
delete k[l];
}}
if(f){var m=f.fonts;
var n=qx.bom.Font;
for(var l in m){k[l]=(new n).set(m[l]);
k[l].themed=true;
}}this._setDynamic(k);
}}});
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
__bL:{fontFamily:a,
fontSize:a,
fontWeight:a,
fontStyle:a,
textDecoration:a,
lineHeight:1.2},
getDefaultStyles:function(){return this.__bL;
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
members:{__bM:null,
__bN:null,
__bO:null,
__bP:null,
__bQ:null,
__bR:null,
_applySize:function(I,
J){this.__bM=I===null?null:I+d;
},
_applyLineHeight:function(I,
J){this.__bR=I===null?null:I;
},
_applyFamily:function(I,
J){var z=a;
for(var F=0,
K=I.length;F<K;F++){if(I[F].indexOf(v)>0){z+=e+I[F]+e;
}else{z+=I[F];
}
if(F!==K-1){z+=x;
}}this.__bN=z;
},
_applyBold:function(I,
J){this.__bO=I===null?null:I?h:g;
},
_applyItalic:function(I,
J){this.__bP=I===null?null:I?f:g;
},
_applyDecoration:function(I,
J){this.__bQ=I===null?null:I;
},
getStyles:function(){return {fontFamily:this.__bN,
fontSize:this.__bM,
fontWeight:this.__bO,
fontStyle:this.__bP,
textDecoration:this.__bQ,
lineHeight:this.__bR};
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
b="Theme",
c="_applyTheme",
d="_applyAppearanceTheme",
e="__bT",
f="qx.theme.manager.Appearance",
g=":",
h="changeAppearanceTheme",
i="changeTheme",
j="/",
k="singleton",
l="__bS";
qx.Class.define(f,
{type:k,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__bS={};
this.__bT={};
},
properties:{appearanceTheme:{check:b,
nullable:true,
apply:d,
event:h},
theme:{check:b,
nullable:true,
apply:c,
event:i}},
members:{__bU:{},
__bS:null,
__bT:null,
_applyAppearanceTheme:function(m,
n){},
_applyTheme:function(m,
n){},
__bV:function(o,
p){var q=p.appearances;
var r=q[o];
if(!r){var s=j;
var t=[];
var u=o.split(s);
var v;
while(!r&&u.length>0){t.unshift(u.pop());
var w=u.join(s);
r=q[w];
if(r){v=r.alias||r;
if(typeof v===a){var x=v+s+t.join(s);
return this.__bV(x,
p);
}}}return null;
}else if(typeof r===a){return this.__bV(r,
p);
}else if(r.include&&!r.style){return this.__bV(r.include,
p);
}return o;
},
styleFrom:function(o,
y,
p){if(!p){p=this.getTheme();
}var z=this.__bT;
var A=z[o];
if(!A){A=z[o]=this.__bV(o,
p);
}var r=p.appearances[A];
if(!r){this.warn("Missing appearance: "+o);
return null;
}if(!r.style){return null;
}var B=A;
if(y){var C=r.$$bits;
if(!C){C=r.$$bits={};
r.$$length=0;
}var D=0;
for(var E in y){if(C[E]==null){C[E]=1<<r.$$length++;
}D+=C[E];
}if(D>0){B+=g+D;
}}var F=this.__bS;
if(F[B]!==undefined){return F[B];
}if(!y){y=this.__bU;
}var G;
if(r.include||r.base){var H=r.style(y);
var I;
if(r.include){I=this.styleFrom(r.include,
y,
p);
}G={};
if(r.base){var J=this.styleFrom(A,
y,
r.base);
if(r.include){for(var K in J){if(!I.hasOwnProperty(K)&&!H.hasOwnProperty(K)){G[K]=J[K];
}}}else{for(var K in J){if(!H.hasOwnProperty(K)){G[K]=J[K];
}}}}if(r.include){for(var K in I){if(!H.hasOwnProperty(K)){G[K]=I[K];
}}}for(var K in H){G[K]=H[K];
}}else{G=r.style(y);
}return F[B]=G||null;
}},
destruct:function(){this._disposeFields(l,
e);
}});
})();
(function(){var a="qx.event.handler.UserAction",
b="__ce",
c="__cd";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(d){arguments.callee.base.call(this);
this.__cd=d;
this.__ce=d.getWindow();
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
(function(){var a="__cg",
b="qx.util.DeferredCallManager",
c="__cf",
d="singleton";
qx.Class.define(b,
{extend:qx.core.Object,
type:d,
construct:function(){this.__cf={};
this.__cg=qx.lang.Function.bind(this.__ck,
this);
this.__ch=false;
},
members:{__ci:null,
__cj:null,
__cf:null,
__ch:null,
__cg:null,
schedule:function(e){if(this.__ci==null){this.__ci=window.setTimeout(this.__cg,
0);
}var f=e.toHashCode();
if(this.__cj&&this.__cj[f]){return;
}this.__cf[f]=e;
this.__ch=true;
},
cancel:function(e){var f=e.toHashCode();
if(this.__cj&&this.__cj[f]){this.__cj[f]=null;
return;
}delete this.__cf[f];
if(qx.lang.Object.isEmpty(this.__cf)&&this.__ci!=null){window.clearTimeout(this.__ci);
this.__ci=null;
}},
__ck:function(){this.__ci=null;
while(this.__ch){this.__cj=qx.lang.Object.copy(this.__cf);
this.__cf={};
this.__ch=false;
for(var g in this.__cj){var h=this.__cj[g];
if(h){this.__cj[g]=null;
h.call();
}}}this.__cj=null;
}},
destruct:function(){if(this.__ci!=null){window.clearTimeout(this.__ci);
}this._disposeFields(a,
c);
}});
})();
(function(){var a="qx.util.DeferredCall",
b="__cm",
c="__cn",
d="__cl";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(e,
f){arguments.callee.base.call(this);
this.__cl=e;
this.__cm=f||null;
this.__cn=qx.util.DeferredCallManager.getInstance();
},
members:{__cl:null,
__cm:null,
__cn:null,
cancel:function(){this.__cn.cancel(this);
},
schedule:function(){this.__cn.schedule(this);
},
call:function(){this.__cm?this.__cl.apply(this.__cm):this.__cl();
}},
destruct:function(e,
f){this.cancel();
this._disposeFields(b,
d,
c);
}});
})();
(function(){var c="element",
d="\000",
e="qx.client",
f="div",
g="capture",
h="",
j="mshtml",
k="qx.html.Element",
m="__cD",
n="blur",
o="activate",
p="__cB",
q="deactivate",
r="__cp",
s="__cK",
t="__cx",
u="evt\000",
v="__cz",
w="releaseCapture",
z="__ct",
A="__cE",
B="__cA",
C="tabIndex",
D="focus",
E="__cC",
F="none",
G="__cy",
H="\000capture",
I="__cu";
qx.Class.define(k,
{extend:qx.core.Object,
construct:function(J){arguments.callee.base.call(this);
this.__co=J||f;
},
statics:{DEBUG:false,
_modified:{},
_visibility:{},
_scroll:{},
_actions:[],
_scheduleFlush:function(K){qx.html.Element.__cP.schedule();
},
_mshtmlVisibilitySort:qx.core.Variant.select(e,
{"mshtml":function(L,
M){var N=L.__cp;
var O=M.__cp;
if(N.contains(O)){return 1;
}
if(O.contains(N)){return -1;
}return 0;
},
"default":null}),
flush:function(){var P;
{};
var Q=[];
var R=this._modified;
for(var S in R){P=R[S];
if(P.__cH()){if(P.__cp&&qx.dom.Hierarchy.isRendered(P.__cp)){Q.push(P);
}else{{};
P.__cG();
}delete R[S];
}}
for(var T=0,
U=Q.length;T<U;T++){P=Q[T];
{};
P.__cG();
}var V=this._visibility;
if(qx.core.Variant.isSet(e,
j)){var W=[];
for(var S in V){W.push(V[S]);
}if(W.length>1){W.sort(this._mshtmlVisibilitySort);
V=this._visibility={};
for(var T=0;T<W.length;T++){P=W[T];
V[P.$$hash]=P;
}}}
for(var S in V){P=V[S];
{};
P.__cp.style.display=P.__cs?h:F;
delete V[S];
}var X=this._scroll;
for(var S in X){P=X[S];
var Y=P.__cp;
if(Y&&Y.offsetWidth){var ba=true;
if(P.__cv!=null){P.__cp.scrollLeft=P.__cv;
delete P.__cv;
}if(P.__cw!=null){P.__cp.scrollTop=P.__cw;
delete P.__cw;
}var bb=P.__ct;
if(bb!=null){var bc=bb.element.getDomElement();
if(bc&&bc.offsetWidth){qx.bom.element.Scroll.intoViewX(bc,
Y,
bb.align);
delete P.__ct;
}else{ba=false;
}}var bd=P.__cu;
if(bd!=null){var bc=bd.element.getDomElement();
if(bc&&bc.offsetWidth){qx.bom.element.Scroll.intoViewY(bc,
Y,
bd.align);
delete P.__cu;
}else{ba=false;
}}if(ba){delete X[S];
}}}for(var T=0;T<this._actions.length;T++){var be=this._actions[T];
var bf=be.element.__cp;
qx.bom.Element[be.type](bf);
}this._actions=[];
qx.event.handler.Appear.refresh();
}},
members:{__co:null,
__cp:null,
__cq:false,
__cr:true,
__cs:true,
__ct:null,
__cu:null,
__cv:null,
__cw:null,
__cx:null,
__cy:null,
__cz:null,
__cA:null,
__cB:null,
__cC:null,
__cD:null,
__cE:null,
__cF:null,
_scheduleChildrenUpdate:function(){if(this.__cF){return;
}this.__cF=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
},
_createDomElement:function(){return qx.bom.Element.create(this.__co);
},
__cG:function(){{};
var bg=this.__cE;
if(bg){var bh=bg.length;
var bc;
for(var T=0;T<bh;T++){bc=bg[T];
if(bc.__cs&&bc.__cr&&!bc.__cp){bc.__cG();
}}}
if(!this.__cp){this.__cp=this._createDomElement();
this.__cp.$$hash=this.$$hash;
this._copyData(false);
if(bg&&bh>0){this._insertChildren();
}}else{this._syncData();
if(this.__cF){this._syncChildren();
}}delete this.__cF;
},
_insertChildren:function(){var bg=this.__cE;
var bh=bg.length;
var bc;
if(bh>2){var bi=document.createDocumentFragment();
for(var T=0;T<bh;T++){bc=bg[T];
if(bc.__cp&&bc.__cr){bi.appendChild(bc.__cp);
}}this.__cp.appendChild(bi);
}else{var bi=this.__cp;
for(var T=0;T<bh;T++){bc=bg[T];
if(bc.__cp&&bc.__cr){bi.appendChild(bc.__cp);
}}}},
_syncChildren:function(){var bj=qx.core.ObjectRegistry;
var bk=this.__cE;
var bm=bk.length;
var bn;
var bo;
var bp=this.__cp;
var bq=bp.childNodes;
var br=0;
var bs;
var bt;
for(var T=bq.length-1;T>=0;T--){bs=bq[T];
bo=bj.fromHashCode(bs.$$hash);
if(!bo||!bo.__cr||bo.__cK!==this){bp.removeChild(bs);
{};
}}for(var T=0;T<bm;T++){bn=bk[T];
if(bn.__cr){bo=bn.__cp;
bs=bq[br];
if(!bo){continue;
}if(bo!=bs){if(bs){bp.insertBefore(bo,
bs);
}else{bp.appendChild(bo);
}{};
}br++;
}}{};
},
_copyData:function(bu){var Y=this.__cp;
var bv=this.__cB;
if(bv){var bw=qx.bom.element.Attribute;
for(var bx in bv){bw.set(Y,
bx,
bv[bx]);
}}var bv=this.__cA;
if(bv){var by=qx.bom.element.Style;
if(bu){for(var bx in bv){by.set(Y,
bx,
bv[bx]);
}}else{by.setCss(Y,
by.compile(bv));
}}var bv=this.__cC;
if(bv){for(var bx in bv){this._applyProperty(bx,
bv[bx]);
}}var bv=this.__cD;
if(bv){qx.event.Registration.getManager(Y).importListeners(Y,
bv);
delete this.__cD;
}},
_syncData:function(){var Y=this.__cp;
var bw=qx.bom.element.Attribute;
var by=qx.bom.element.Style;
var bz=this.__cy;
if(bz){var bv=this.__cB;
if(bv){var bA;
for(var bx in bz){bA=bv[bx];
if(bA!==undefined){bw.set(Y,
bx,
bA);
}else{bw.reset(Y,
bx);
}}}this.__cy=null;
}var bz=this.__cx;
if(bz){var bv=this.__cA;
if(bv){var bA;
for(var bx in bz){bA=bv[bx];
if(bA!==undefined){by.set(Y,
bx,
bA);
}else{by.reset(Y,
bx);
}}}this.__cx=null;
}var bz=this.__cz;
if(bz){var bv=this.__cC;
if(bv){var bA;
for(var bx in bz){this._applyProperty(bx,
bv[bx]);
}}this.__cz=null;
}},
__cH:function(){var bB=this;
while(bB){if(bB.__cq){return true;
}
if(!bB.__cr||!bB.__cs){return false;
}bB=bB.__cK;
}return false;
},
__cI:function(bC,
bD,
bE,
bF){var bG=qx.core.ObjectRegistry;
var bH=u+bC+d+bG.toHashCode(bD);
if(bE){bH+=d+bG.toHashCode(bE);
}
if(bF){bH+=H;
}return bH;
},
__cJ:function(bc){if(bc.__cK===this){throw new Error("Child is already in: "+bc);
}
if(bc.__cq){throw new Error("Root elements could not be inserted into other ones.");
}if(bc.__cK){bc.__cK.remove(bc);
}bc.__cK=this;
if(!this.__cE){this.__cE=[];
}if(this.__cp){this._scheduleChildrenUpdate();
}},
__cL:function(bc){if(bc.__cK!==this){throw new Error("Has no child: "+bc);
}if(this.__cp){this._scheduleChildrenUpdate();
}delete bc.__cK;
},
__cM:function(bc){if(bc.__cK!==this){throw new Error("Has no child: "+bc);
}if(this.__cp){this._scheduleChildrenUpdate();
}},
getChildren:function(){return this.__cE||null;
},
getChild:function(bI){var bg=this.__cE;
return bg&&bg[bI]||null;
},
hasChildren:function(){var bg=this.__cE;
return bg&&bg[0]!==undefined;
},
indexOf:function(bc){var bg=this.__cE;
return bg?bg.indexOf(bc):-1;
},
hasChild:function(bc){var bg=this.__cE;
return bg&&bg.indexOf(bc)!==-1;
},
add:function(bJ){if(arguments[1]){for(var T=0,
U=arguments.length;T<U;T++){this.__cJ(arguments[T]);
}this.__cE.push.apply(this.__cE,
arguments);
}else{this.__cJ(bJ);
this.__cE.push(bJ);
}return this;
},
addAt:function(bc,
bI){this.__cJ(bc);
qx.lang.Array.insertAt(this.__cE,
bc,
bI);
return this;
},
remove:function(bK){var bg=this.__cE;
if(!bg){return;
}
if(arguments[1]){var bc;
for(var T=0,
U=arguments.length;T<U;T++){bc=arguments[T];
this.__cL(bc);
qx.lang.Array.remove(bg,
bc);
}}else{this.__cL(bK);
qx.lang.Array.remove(bg,
bK);
}return this;
},
removeAt:function(bI){var bg=this.__cE;
if(!bg){throw new Error("Has no children!");
}var bc=bg[bI];
if(!bc){throw new Error("Has no child at this position!");
}this.__cL(bc);
qx.lang.Array.removeAt(this.__cE,
bI);
return this;
},
removeAll:function(){var bg=this.__cE;
if(bg){for(var T=0,
U=bg.length;T<U;T++){this.__cL(bg[T]);
}bg.length=0;
}return this;
},
getParent:function(){return this.__cK||null;
},
insertInto:function(bL,
bI){bL.__cJ(this);
if(bI==null){bL.__cE.push(this);
}else{qx.lang.Array.insertAt(this.__cE,
this,
bI);
}return this;
},
insertBefore:function(bM){var bL=bM.__cK;
bL.__cJ(this);
qx.lang.Array.insertBefore(bL.__cE,
this,
bM);
return this;
},
insertAfter:function(bM){var bL=bM.__cK;
bL.__cJ(this);
qx.lang.Array.insertAfter(bL.__cE,
this,
bM);
return this;
},
moveTo:function(bI){var bL=this.__cK;
bL.__cM(this);
var bN=bL.__cE.indexOf(this);
if(bN===bI){throw new Error("Could not move to same index!");
}else if(bN<bI){bI--;
}qx.lang.Array.removeAt(bL.__cE,
bN);
qx.lang.Array.insertAt(bL.__cE,
this,
bI);
return this;
},
moveBefore:function(bM){var bL=this.__cK;
return this.moveTo(bL.__cE.indexOf(bM));
},
moveAfter:function(bM){var bL=this.__cK;
return this.moveTo(bL.__cE.indexOf(bM)+1);
},
free:function(){var bL=this.__cK;
if(!bL){throw new Error("Has no parent to remove from.");
}
if(!bL.__cE){return;
}bL.__cL(this);
qx.lang.Array.remove(bL.__cE,
this);
return this;
},
getDomElement:function(){return this.__cp||null;
},
getNodeName:function(){return this.__co;
},
setNodeName:function(bO){this.__co=bO;
},
setRoot:function(bP){this.__cq=bP;
},
useMarkup:function(bQ){if(this.__cp){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(e,
j)){var bR=document.createElement(f);
}else{var bR=qx.html.Element.__cN;
if(!bR){bR=qx.html.Element.__cN=document.createElement(f);
}}bR.innerHTML=bQ;
this.__cp=bR.firstChild;
this.__cp.$$hash=this.$$hash;
this._copyData(true);
return this.__cp;
},
useElement:function(Y){if(this.__cp){throw new Error("Could not overwrite existing element!");
}this.__cp=Y;
this.__cp.$$hash=this.$$hash;
this._copyData(true);
},
isFocusable:function(){var bS=this.getAttribute(C);
if(bS>=1){return true;
}var bT=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;
if(bS>=0&&bT[this.__co]){return true;
}return false;
},
isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__co];
},
include:function(){if(this.__cr){return;
}delete this.__cr;
if(this.__cK){this.__cK._scheduleChildrenUpdate();
}return this;
},
exclude:function(){if(!this.__cr){return;
}this.__cr=false;
if(this.__cK){this.__cK._scheduleChildrenUpdate();
}return this;
},
isIncluded:function(){return this.__cr===true;
},
show:function(){if(this.__cs){return;
}
if(this.__cp){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}if(this.__cK){this.__cK._scheduleChildrenUpdate();
}delete this.__cs;
},
hide:function(){if(!this.__cs){return;
}
if(this.__cp){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}this.__cs=false;
},
isVisible:function(){return this.__cs===true;
},
scrollChildIntoViewX:function(Y,
bU,
bV){var bW=this.__cp;
var bX=Y.getDomElement();
if(bV!==false&&bW&&bW.offsetWidth&&bX&&bX.offsetWidth){qx.bom.element.Scroll.intoViewX(bX,
bW,
bU);
}else{this.__ct={element:Y,
align:bU};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__cv;
},
scrollChildIntoViewY:function(Y,
bU,
bV){var bW=this.__cp;
var bX=Y.getDomElement();
if(bV!==false&&bW&&bW.offsetWidth&&bX&&bX.offsetWidth){qx.bom.element.Scroll.intoViewY(bX,
bW,
bU);
}else{this.__cu={element:Y,
align:bU};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__cw;
},
scrollToX:function(bY,
ca){var bW=this.__cp;
if(ca!==true&&bW&&bW.offsetWidth){bW.scrollLeft=bY;
}else{this.__cv=bY;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__ct;
},
getScrollX:function(){var bW=this.__cp;
if(bW){return bW.scrollLeft;
}return this.__cv||0;
},
scrollToY:function(cb,
ca){var bW=this.__cp;
if(ca!==true&&bW&&bW.offsetWidth){bW.scrollTop=cb;
}else{this.__cw=cb;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}delete this.__cu;
},
getScrollY:function(){var bW=this.__cp;
if(bW){return bW.scrollTop;
}return this.__cw||0;
},
getSelection:function(){var cc=this.__cp;
if(cc){return qx.bom.Selection.get(cc);
}return null;
},
getSelectionLength:function(){var cc=this.__cp;
if(cc){return qx.bom.Selection.getLength(cc);
}return null;
},
setSelection:function(cd,
ce){var cc=this.__cp;
if(cc){qx.bom.Selection.set(cc,
cd,
ce);
}},
clearSelection:function(){var cc=this.__cp;
if(cc){qx.bom.Selection.clear(cc);
}},
__cO:function(be){var cc=this.__cp;
var cf=qx.html.Element._actions;
if(cc&&cf.length==0){return qx.bom.Element[be](cc);
}cf.push({type:be,
element:this});
qx.html.Element._scheduleFlush(c);
},
focus:function(){this.__cO(D);
},
blur:function(){this.__cO(n);
},
activate:function(){this.__cO(o);
},
deactivate:function(){this.__cO(q);
},
capture:function(){this.__cO(g);
},
releaseCapture:function(){this.__cO(w);
},
setStyle:function(bx,
bA,
bV){if(!this.__cA){this.__cA={};
}
if(this.__cA[bx]==bA){return;
}
if(bA==null){delete this.__cA[bx];
}else{this.__cA[bx]=bA;
}if(this.__cp){if(bV){qx.bom.element.Style.set(this.__cp,
bx,
bA);
return this;
}if(!this.__cx){this.__cx={};
}this.__cx[bx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
setStyles:function(cg,
bV){for(var bx in cg){this.setStyle(bx,
cg[bx],
bV);
}return this;
},
removeStyle:function(bx,
bV){this.setStyle(bx,
null,
bV);
},
getStyle:function(bx){return this.__cA?this.__cA[bx]:null;
},
getAllStyles:function(){return this.__cA||null;
},
setAttribute:function(bx,
bA,
bV){if(!this.__cB){this.__cB={};
}
if(this.__cB[bx]==bA){return;
}
if(bA==null){delete this.__cB[bx];
}else{this.__cB[bx]=bA;
}if(this.__cp){if(bV){qx.bom.element.Attribute.set(this.__cp,
bx,
bA);
return this;
}if(!this.__cy){this.__cy={};
}this.__cy[bx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
setAttributes:function(cg,
bV){for(var bx in cg){this.setAttribute(bx,
cg[bx],
bV);
}return this;
},
removeAttribute:function(bx,
bV){this.setAttribute(bx,
null,
bV);
},
getAttribute:function(bx){return this.__cB?this.__cB[bx]:null;
},
_applyProperty:function(bO,
bA){},
_setProperty:function(bx,
bA,
bV){if(!this.__cC){this.__cC={};
}
if(this.__cC[bx]==bA){return;
}
if(bA==null){delete this.__cC[bx];
}else{this.__cC[bx]=bA;
}if(this.__cp){if(bV){this._applyProperty(bx,
bA);
return this;
}if(!this.__cz){this.__cz={};
}this.__cz[bx]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(c);
}return this;
},
_removeProperty:function(bx,
bV){this._setProperty(bx,
null,
bV);
},
_getProperty:function(bx){var ch=this.__cC;
if(!ch){return null;
}var bA=ch[bx];
return bA==null?null:bA;
},
addListener:function(bC,
bD,
bE,
bF){if(this.isDisposed()){return null;
}var ci;
if(this.__cp){return qx.event.Registration.addListener(this.__cp,
bC,
bD,
bE,
bF);
}
if(!this.__cD){this.__cD={};
}var bx=this.__cI(bC,
bD,
bE,
bF);
if(this.__cD[bx]){this.warn("A listener of this configuration does already exist!");
return this.__cD[bx];
}var cj={type:bC,
listener:bD,
self:bE,
capture:bF};
this.__cD[bx]=cj;
return cj;
},
removeListener:function(bC,
bD,
bE,
bF){if(this.isDisposed()){return;
}var ci;
if(this.__cp){qx.event.Registration.removeListener(this.__cp,
bC,
bD,
bE,
bF);
}else{var bx=this.__cI(bC,
bD,
bE,
bF);
if(!this.__cD||!this.__cD[bx]){this.warn("A listener of this configuration does not exist!");
return false;
}delete this.__cD[bx];
}return this;
},
removeListenerById:function(bH){if(this.__cp){if(bH.type){qx.event.Registration.removeListener(bH.type,
bH.listener,
bH.self,
bH.capture);
}else{qx.event.Registration.removeListenerById(this.__cp,
bH);
}return;
}this.removeListener(bH.type,
bH.listener,
bH.self,
bH.capture);
},
hasListener:function(bC,
bF){if(this.__cp){return qx.event.Registration.hasListener(this.__cp,
bC,
bF);
}
for(var bx in this.__cD){bx=bx.split(d);
var ck=bx[4]==g;
if(bF==ck&&bC==bx[1]){return true;
}}return false;
}},
defer:function(cl){cl.__cP=new qx.util.DeferredCall(cl.flush,
cl);
},
destruct:function(){var cc=this.__cp;
if(cc){qx.event.Registration.getManager(cc).removeAllListeners(cc);
cc.$$hash=h;
}
if(!qx.core.ObjectRegistry.inShutDown){var bL=this.__cK;
if(bL&&!bL.$$disposed){bL.remove(this);
}}this._disposeArray(A);
this._disposeFields(p,
B,
m,
E,
G,
t,
v,
r,
s,
z,
I);
}});
})();
(function(){var a="qx.ui.core.queue.Manager",
b="useraction";
qx.Class.define(a,
{statics:{__cQ:false,
__cR:{},
scheduleFlush:function(c){var d=qx.ui.core.queue.Manager;
d.__cR[c]=true;
if(!d.__cQ){d.__cT.schedule();
d.__cQ=true;
}},
flush:function(){var d=qx.ui.core.queue.Manager;
if(d.__cS){return;
}d.__cS=true;
d.__cT.cancel();
var e=d.__cR;
while(e.visibility||e.widget||e.appearance||e.layout){if(e.widget){delete e.widget;
qx.ui.core.queue.Widget.flush();
}
if(e.visibility){delete e.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(e.appearance){delete e.appearance;
qx.ui.core.queue.Appearance.flush();
}if(e.widget||e.visibility||e.appearance){continue;
}
if(e.layout){delete e.layout;
qx.ui.core.queue.Layout.flush();
}}qx.ui.core.queue.Manager.__cQ=false;
if(e.element){delete e.element;
qx.html.Element.flush();
}
if(e.dispose){delete e.dispose;
qx.ui.core.queue.Dispose.flush();
}d.__cS=false;
}},
defer:function(f){f.__cT=new qx.util.DeferredCall(f.flush);
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
(function(){var a="borderTopWidth",
b="borderLeftWidth",
c="scroll",
d="border-box",
e="borderBottomWidth",
f="qx.client",
g="borderRightWidth",
h="auto",
i="marginTop",
j="marginLeft",
k="padding",
l="position",
m="fixed",
n="CSS1Compat",
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
{statics:{__dd:function(B,
C){return qx.bom.element.Style.get(B,
C,
qx.bom.element.Style.COMPUTED_MODE,
false);
},
__de:function(B,
C){return parseInt(qx.bom.element.Style.get(B,
C,
qx.bom.element.Style.COMPUTED_MODE,
false),
10)||0;
},
__df:function(B){var D=0,
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
__dg:qx.core.Variant.select(f,
{"mshtml":function(B){var H=qx.dom.Node.getDocument(B);
var G=H.body;
var D=0;
var E=0;
D-=G.clientLeft+H.documentElement.clientLeft;
E-=G.clientTop+H.documentElement.clientTop;
if(qx.bom.client.Feature.STANDARD_MODE){D+=this.__de(G,
b);
E+=this.__de(G,
a);
}return {left:D,
top:E};
},
"webkit":function(B){var H=qx.dom.Node.getDocument(B);
var G=H.body;
var D=G.offsetLeft;
var E=G.offsetTop;
D+=this.__de(G,
b);
E+=this.__de(G,
a);
if(H.compatMode===n){D+=this.__de(G,
j);
E+=this.__de(G,
i);
}return {left:D,
top:E};
},
"gecko":function(B){var G=qx.dom.Node.getDocument(B).body;
var D=G.offsetLeft;
var E=G.offsetTop;
if(qx.bom.element.BoxSizing.get(G)!==d){D+=this.__de(G,
b);
E+=this.__de(G,
a);
if(!B.getBoundingClientRect){var I;
while(B){if(this.__dd(B,
l)===A||this.__dd(B,
l)===m){I=true;
break;
}B=B.offsetParent;
}
if(!I){D+=this.__de(G,
b);
E+=this.__de(G,
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
__dh:qx.core.Variant.select(f,
{"mshtml|webkit":function(B){var H=qx.dom.Node.getDocument(B);
if(B.getBoundingClientRect){var J=B.getBoundingClientRect();
var D=J.left;
var E=J.top;
}else{var D=B.offsetLeft;
var E=B.offsetTop;
B=B.offsetParent;
var G=H.body;
while(B&&B!=G){D+=B.offsetLeft;
E+=B.offsetTop;
D+=this.__de(B,
b);
E+=this.__de(B,
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
if(K.get(B)!==d){D-=this.__de(B,
b);
E-=this.__de(B,
a);
}
while(B&&B!==G){D+=B.offsetLeft;
E+=B.offsetTop;
if(K.get(B)!==d){D+=this.__de(B,
b);
E+=this.__de(B,
a);
}if(B.parentNode&&this.__dd(B.parentNode,
x)!=r){D+=this.__de(B.parentNode,
b);
E+=this.__de(B.parentNode,
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
L){var G=this.__dg(B);
if(B.tagName==s){var D=G.left;
var E=G.top;
}else{var M=this.__dh(B);
var N=this.__df(B);
var D=M.left+G.left-N.left;
var E=M.top+G.top-N.top;
}var O=D+B.offsetWidth;
var P=E+B.offsetHeight;
if(L){if(L==k||L==c){var Q=qx.bom.element.Overflow.getX(B);
if(Q==c||Q==h){O+=B.scrollWidth-B.offsetWidth+this.__de(B,
b)+this.__de(B,
g);
}var R=qx.bom.element.Overflow.getY(B);
if(R==c||R==h){P+=B.scrollHeight-B.offsetHeight+this.__de(B,
a)+this.__de(B,
e);
}}
switch(L){case k:D+=this.__de(B,
p);
E+=this.__de(B,
u);
O-=this.__de(B,
y);
P-=this.__de(B,
t);
case c:D-=B.scrollLeft;
E-=B.scrollTop;
O-=B.scrollLeft;
P-=B.scrollTop;
case z:D+=this.__de(B,
b);
E+=this.__de(B,
a);
O-=this.__de(B,
g);
P-=this.__de(B,
e);
break;
case w:D-=this.__de(B,
j);
E-=this.__de(B,
i);
O+=this.__de(B,
v);
P+=this.__de(B,
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
(function(){var a="qx.event.handler.Appear",
b="__dj",
c="__dk",
d="disappear",
e="appear";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(f){arguments.callee.base.call(this);
this.__dj=f;
this.__dk={};
qx.event.handler.Appear.__dl[this.$$hash]=this;
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{appear:true,
disappear:true},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true,
__dl:{},
refresh:function(){var g=this.__dl;
for(var h in g){g[h].refresh();
}}},
members:{canHandleEvent:function(i,
j){},
registerEvent:function(i,
j,
k){var h=qx.core.ObjectRegistry.toHashCode(i);
var l=this.__dk;
if(l&&!l[h]){l[h]=i;
i.$$displayed=i.offsetWidth>0;
}},
unregisterEvent:function(i,
j,
k){var h=qx.core.ObjectRegistry.toHashCode(i);
var l=this.__dk;
if(!l){return;
}
if(l[h]){delete l[h];
i.$$displayed=null;
}},
refresh:function(){var l=this.__dk;
var m;
for(var h in l){m=l[h];
var n=m.offsetWidth>0;
if((!!m.$$displayed)!==n){m.$$displayed=n;
var o=qx.event.Registration.createEvent(n?e:d);
this.__dj.dispatchEvent(m,
o);
}}}},
destruct:function(){this._disposeFields(b,
c);
delete qx.event.handler.Appear.__dl[this.$$hash];
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
b="keypress",
c="qx.client",
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
o="Z",
p="Left",
q="F5",
r="Down",
s="Up",
t="F11",
u="F6",
v="useraction",
w="keyinput",
x="Insert",
y="F8",
z="End",
A="/",
B="Delete",
C="*",
D="F1",
E="F4",
F="Home",
G="F2",
H="F12",
I="PageDown",
J="F7",
K="F9",
L="F10",
M="Right",
N="F3",
O="text",
P="Escape",
Q="webkit",
R="5",
S="3",
T="Meta",
U="7",
V="CapsLock",
W="input",
X="Control",
Y="Space",
ba="Tab",
bb="Shift",
bc="Pause",
bd="__dn",
be="Unidentified",
bf="qx.event.handler.Keyboard",
bg="mshtml",
bh="mshtml|webkit",
bi="6",
bj="Apps",
bk="4",
bl="Alt",
bm="2",
bn="Scroll",
bo="1",
bp="8",
bq="Win",
br="__dm",
bs="__dp",
bt="__do",
bu=",",
bv="Backspace";
qx.Class.define(bf,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(bw){arguments.callee.base.call(this);
this.__dm=bw;
this.__dn=bw.getWindow();
if(qx.core.Variant.isSet(c,
m)){this.__do=this.__dn;
}else{this.__do=this.__dn.document.documentElement;
}this.__dp={};
this._initKeyObserver();
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,
SUPPORTED_TYPES:{keyup:1,
keydown:1,
keypress:1,
keyinput:1},
TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,
IGNORE_CAN_HANDLE:true,
isValidKeyIdentifier:function(bx){if(this._identifierToKeyCodeMap[bx]){return true;
}
if(bx.length!=1){return false;
}
if(bx>=g&&bx<=h){return true;
}
if(bx>=n&&bx<=o){return true;
}
switch(bx){case k:case i:case C:case A:return true;
default:return false;
}}},
members:{__dq:null,
__dm:null,
__dn:null,
__do:null,
__dp:null,
canHandleEvent:function(by,
bz){},
registerEvent:function(by,
bz,
bA){},
unregisterEvent:function(by,
bz,
bA){},
_fireInputEvent:function(bB,
bC){var bD=this.__dm.getHandler(qx.event.handler.Focus);
var by=bD.getActive();
if(!by||by.offsetWidth==0){by=bD.getFocus();
}if(by&&by.offsetWidth!=0){var bE=qx.event.Registration.createEvent(w,
qx.event.type.KeyInput,
[bB,
by,
bC]);
this.__dm.dispatchEvent(by,
bE);
}if(this.__dn){qx.event.Registration.fireEvent(this.__dn,
v,
qx.event.type.Data,
[w]);
}},
_fireSequenceEvent:function(bB,
bz,
bx){var bD=this.__dm.getHandler(qx.event.handler.Focus);
var by=bD.getActive();
if(!by||by.offsetWidth==0){by=bD.getFocus();
}if(!by||by.offsetWidth==0){by=this.__dm.getWindow().document.body;
}var bE=qx.event.Registration.createEvent(bz,
qx.event.type.KeySequence,
[bB,
by,
bx]);
this.__dm.dispatchEvent(by,
bE);
if(qx.core.Variant.isSet(c,
bh)){if(bz==a&&bE.getDefaultPrevented()){var bF=bB.keyCode;
if(!(this._isNonPrintableKeyCode(bF)||bF==8||bF==9)){this._fireSequenceEvent(bB,
b,
bx);
}}}if(this.__dn){qx.event.Registration.fireEvent(this.__dn,
v,
qx.event.type.Data,
[bz]);
}},
_initKeyObserver:function(){this.__dq=qx.lang.Function.listener(this.__ds,
this);
this.__dr=qx.lang.Function.listener(this.__dt,
this);
var bG=qx.bom.Event;
bG.addNativeListener(this.__do,
e,
this.__dq);
bG.addNativeListener(this.__do,
a,
this.__dq);
bG.addNativeListener(this.__do,
b,
this.__dr);
},
_stopKeyObserver:function(){var bG=qx.bom.Event;
bG.removeNativeListener(this.__do,
e,
this.__dq);
bG.removeNativeListener(this.__do,
a,
this.__dq);
bG.removeNativeListener(this.__do,
b,
this.__dr);
},
__ds:qx.core.Variant.select(c,
{"mshtml":function(bB){bB=window.event||bB;
var bF=bB.keyCode;
var bC=0;
var bz=bB.type;
if(!(this.__dp[bF]==a&&bz==a)){this._idealKeyHandler(bF,
bC,
bz,
bB);
}if(bz==a){if(this._isNonPrintableKeyCode(bF)||bF==8||bF==9){this._idealKeyHandler(bF,
bC,
b,
bB);
}}this.__dp[bF]=bz;
},
"gecko":function(bB){var bF=this._keyCodeFix[bB.keyCode]||bB.keyCode;
var bC=bB.charCode;
var bz=bB.type;
if(qx.bom.client.Platform.WIN){var bx=bF?this._keyCodeToIdentifier(bF):this._charCodeToIdentifier(bC);
if(!(this.__dp[bx]==a&&bz==a)){this._idealKeyHandler(bF,
bC,
bz,
bB);
}this.__dp[bx]=bz;
}else{this._idealKeyHandler(bF,
bC,
bz,
bB);
}if(bz===a&&(bF==33||bF==34||bF==38||bF==40)){var by=bB.target;
if(by.nodeType==1&&by.type==O&&by.tagName.toLowerCase()===W){this._idealKeyHandler(bF,
bC,
b,
bB);
}}},
"webkit":function(bB){var bF=0;
var bC=0;
var bz=bB.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bz==e||bz==a){bF=this._charCode2KeyCode[bB.charCode]||bB.keyCode;
}else{if(this._charCode2KeyCode[bB.charCode]){bF=this._charCode2KeyCode[bB.charCode];
}else{bC=bB.charCode;
}}this._idealKeyHandler(bF,
bC,
bz,
bB);
}else{bF=bB.keyCode;
if(!(this.__dp[bF]==a&&bz==a)){this._idealKeyHandler(bF,
bC,
bz,
bB);
}if(bz==a){if(this._isNonPrintableKeyCode(bF)||bF==8||bF==9){this._idealKeyHandler(bF,
bC,
b,
bB);
}}this.__dp[bF]=bz;
}},
"opera":function(bB){this._idealKeyHandler(bB.keyCode,
0,
bB.type,
bB);
}}),
__dt:qx.core.Variant.select(c,
{"mshtml":function(bB){bB=window.event||bB;
if(this._charCode2KeyCode[bB.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bB.keyCode],
0,
bB.type,
bB);
}else{this._idealKeyHandler(0,
bB.keyCode,
bB.type,
bB);
}},
"gecko":function(bB){var bF=this._keyCodeFix[bB.keyCode]||bB.keyCode;
var bC=bB.charCode;
var bz=bB.type;
this._idealKeyHandler(bF,
bC,
bz,
bB);
},
"webkit":function(bB){if(qx.bom.client.Engine.VERSION<525.13){var bF=0;
var bC=0;
var bz=bB.type;
if(bz==e||bz==a){bF=this._charCode2KeyCode[bB.charCode]||bB.keyCode;
}else{if(this._charCode2KeyCode[bB.charCode]){bF=this._charCode2KeyCode[bB.charCode];
}else{bC=bB.charCode;
}}this._idealKeyHandler(bF,
bC,
bz,
bB);
}else{if(this._charCode2KeyCode[bB.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bB.keyCode],
0,
bB.type,
bB);
}else{this._idealKeyHandler(0,
bB.keyCode,
bB.type,
bB);
}}},
"opera":function(bB){if(this._keyCodeToIdentifierMap[bB.keyCode]){this._idealKeyHandler(bB.keyCode,
0,
bB.type,
bB);
}else{this._idealKeyHandler(0,
bB.keyCode,
bB.type,
bB);
}}}),
_idealKeyHandler:function(bF,
bC,
bH,
bB){if(!bF&&!bC){return;
}var bx;
if(bF){bx=this._keyCodeToIdentifier(bF);
this._fireSequenceEvent(bB,
bH,
bx);
}else{bx=this._charCodeToIdentifier(bC);
this._fireSequenceEvent(bB,
b,
bx);
this._fireInputEvent(bB,
bC);
}},
_specialCharCodeMap:{8:bv,
9:ba,
13:f,
27:P,
32:Y},
_keyCodeToIdentifierMap:{16:bb,
17:X,
18:bl,
20:V,
224:T,
37:p,
38:s,
39:M,
40:r,
33:j,
34:I,
35:z,
36:F,
45:x,
46:B,
112:D,
113:G,
114:N,
115:E,
116:q,
117:u,
118:J,
119:y,
120:K,
121:L,
122:t,
123:H,
144:d,
44:l,
145:bn,
19:bc,
91:bq,
93:bj},
_numpadToCharCode:{96:g.charCodeAt(0),
97:bo.charCodeAt(0),
98:bm.charCodeAt(0),
99:S.charCodeAt(0),
100:bk.charCodeAt(0),
101:R.charCodeAt(0),
102:bi.charCodeAt(0),
103:U.charCodeAt(0),
104:bp.charCodeAt(0),
105:h.charCodeAt(0),
106:C.charCodeAt(0),
107:k.charCodeAt(0),
109:i.charCodeAt(0),
110:bu.charCodeAt(0),
111:A.charCodeAt(0)},
_charCodeA:n.charCodeAt(0),
_charCodeZ:o.charCodeAt(0),
_charCode0:g.charCodeAt(0),
_charCode9:h.charCodeAt(0),
_isNonPrintableKeyCode:function(bF){return this._keyCodeToIdentifierMap[bF]?true:false;
},
_isIdentifiableKeyCode:function(bF){if(bF>=this._charCodeA&&bF<=this._charCodeZ){return true;
}if(bF>=this._charCode0&&bF<=this._charCode9){return true;
}if(this._specialCharCodeMap[bF]){return true;
}if(this._numpadToCharCode[bF]){return true;
}if(this._isNonPrintableKeyCode(bF)){return true;
}return false;
},
_keyCodeToIdentifier:function(bF){if(this._isIdentifiableKeyCode(bF)){var bI=this._numpadToCharCode[bF];
if(bI){return String.fromCharCode(bI);
}return (this._keyCodeToIdentifierMap[bF]||this._specialCharCodeMap[bF]||String.fromCharCode(bF));
}else{return be;
}},
_charCodeToIdentifier:function(bC){return this._specialCharCodeMap[bC]||String.fromCharCode(bC).toUpperCase();
},
_identifierToKeyCode:function(bx){return qx.event.handler.Keyboard._identifierToKeyCodeMap[bx]||bx.charCodeAt(0);
}},
destruct:function(){this._stopKeyObserver();
this._disposeFields(br,
bd,
bt,
bs);
},
defer:function(bJ,
bK,
bL){qx.event.Registration.addHandler(bJ);
if(!bJ._identifierToKeyCodeMap){bJ._identifierToKeyCodeMap={};
for(var bM in bK._keyCodeToIdentifierMap){bJ._identifierToKeyCodeMap[bK._keyCodeToIdentifierMap[bM]]=parseInt(bM,
10);
}
for(var bM in bK._specialCharCodeMap){bJ._identifierToKeyCodeMap[bK._specialCharCodeMap[bM]]=parseInt(bM,
10);
}}
if(qx.core.Variant.isSet(c,
bg)){bK._charCode2KeyCode={13:13,
27:27};
}else if(qx.core.Variant.isSet(c,
m)){bK._keyCodeFix={12:bK._identifierToKeyCode(d)};
}else if(qx.core.Variant.isSet(c,
Q)){if(qx.bom.client.Engine.VERSION<525.13){bK._charCode2KeyCode={63289:bK._identifierToKeyCode(d),
63276:bK._identifierToKeyCode(j),
63277:bK._identifierToKeyCode(I),
63275:bK._identifierToKeyCode(z),
63273:bK._identifierToKeyCode(F),
63234:bK._identifierToKeyCode(p),
63232:bK._identifierToKeyCode(s),
63235:bK._identifierToKeyCode(M),
63233:bK._identifierToKeyCode(r),
63272:bK._identifierToKeyCode(B),
63302:bK._identifierToKeyCode(x),
63236:bK._identifierToKeyCode(D),
63237:bK._identifierToKeyCode(G),
63238:bK._identifierToKeyCode(N),
63239:bK._identifierToKeyCode(E),
63240:bK._identifierToKeyCode(q),
63241:bK._identifierToKeyCode(u),
63242:bK._identifierToKeyCode(J),
63243:bK._identifierToKeyCode(y),
63244:bK._identifierToKeyCode(K),
63245:bK._identifierToKeyCode(L),
63246:bK._identifierToKeyCode(t),
63247:bK._identifierToKeyCode(H),
63248:bK._identifierToKeyCode(l),
3:bK._identifierToKeyCode(f),
12:bK._identifierToKeyCode(d),
13:bK._identifierToKeyCode(f)};
}else{bK._charCode2KeyCode={13:13,
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
n="__du",
o="__dw",
p="qx.event.handler.Mouse",
q="gecko|webkit",
r="__dB",
s="__dv";
qx.Class.define(p,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(t){arguments.callee.base.call(this);
this.__du=t;
this.__dv=t.getWindow();
this.__dw=this.__dv.document.documentElement;
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
members:{__dx:null,
__dy:null,
__dz:null,
__dA:null,
__dB:null,
__du:null,
__dv:null,
__dw:null,
canHandleEvent:function(u,
v){},
registerEvent:function(u,
v,
w){},
unregisterEvent:function(u,
v,
w){},
__dC:function(x,
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
qx.event.Registration.fireEvent(this.__dv,
m,
qx.event.type.Data,
[v||x.type]);
},
_initButtonObserver:function(){this.__dx=qx.lang.Function.listener(this._onButtonEvent,
this);
var y=qx.bom.Event;
y.addNativeListener(this.__dw,
c,
this.__dx);
y.addNativeListener(this.__dw,
b,
this.__dx);
y.addNativeListener(this.__dw,
d,
this.__dx);
y.addNativeListener(this.__dw,
f,
this.__dx);
y.addNativeListener(this.__dw,
e,
this.__dx);
},
_initMoveObserver:function(){this.__dy=qx.lang.Function.listener(this._onMoveEvent,
this);
var y=qx.bom.Event;
y.addNativeListener(this.__dw,
k,
this.__dy);
y.addNativeListener(this.__dw,
h,
this.__dy);
y.addNativeListener(this.__dw,
i,
this.__dy);
},
_initWheelObserver:function(){this.__dz=qx.lang.Function.listener(this._onWheelEvent,
this);
var y=qx.bom.Event;
var v=qx.core.Variant.isSet(a,
l)?g:j;
y.addNativeListener(this.__dw,
v,
this.__dz);
},
_stopButtonObserver:function(){var y=qx.bom.Event;
y.removeNativeListener(this.__dw,
c,
this.__dx);
y.removeNativeListener(this.__dw,
b,
this.__dx);
y.removeNativeListener(this.__dw,
d,
this.__dx);
y.removeNativeListener(this.__dw,
f,
this.__dx);
y.removeNativeListener(this.__dw,
e,
this.__dx);
},
_stopMoveObserver:function(){var y=qx.bom.Event;
y.removeNativeListener(this.__dw,
k,
this.__dy);
y.removeNativeListener(this.__dw,
h,
this.__dy);
y.removeNativeListener(this.__dw,
i,
this.__dy);
},
_stopWheelObserver:function(){var y=qx.bom.Event;
var v=qx.core.Variant.isSet(a,
l)?g:j;
y.removeNativeListener(this.__dw,
v,
this.__dz);
},
_onMoveEvent:function(x){this.__dC(x);
},
_onButtonEvent:function(x){var v=x.type;
var u=x.target||x.srcElement;
if(qx.core.Variant.isSet(a,
q)){if(u&&u.nodeType==3){u=u.parentNode;
}}
if(this.__dD){this.__dD(x,
v,
u);
}
if(this.__dF){this.__dF(x,
v,
u);
}this.__dC(x,
v,
u);
if(this.__dE){this.__dE(x,
v,
u);
}
if(this.__dG){this.__dG(x,
v,
u);
}this.__dA=v;
},
_onWheelEvent:function(x){this.__dC(x,
g);
},
__dD:qx.core.Variant.select(a,
{"webkit":function(x,
v,
u){if(v==e){this.__dC(x,
c,
u);
this.__dC(x,
b,
u);
}},
"default":null}),
__dE:qx.core.Variant.select(a,
{"opera":function(x,
v,
u){if(v==b&&x.button==2){this.__dC(x,
e,
u);
}},
"default":null}),
__dF:qx.core.Variant.select(a,
{"mshtml":function(x,
v,
u){if(v==b&&this.__dA==d){this.__dC(x,
c,
u);
}else if(v==f){this.__dC(x,
d,
u);
}},
"default":null}),
__dG:qx.core.Variant.select(a,
{"mshtml":null,
"default":function(x,
v,
u){switch(v){case c:this.__dB=u;
break;
case b:if(u!==this.__dB){var z=qx.dom.Hierarchy.getCommonParent(u,
this.__dB);
this.__dC(x,
d,
z);
}}}})},
destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this._disposeFields(n,
s,
o,
r);
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
d="mouseout",
f="keydown",
g="Ctrl",
h="Shift",
i="mousemove",
j="move",
k="mouseover",
l="Alt",
m="keyup",
n="mouseup",
o="dragend",
p="on",
q="mousedown",
r="qxDraggable",
s="__dI",
t="__dM",
u="__dO",
v="drag",
w="__dV",
x="drop",
y="__dN",
z="qxDroppable",
A="qx.event.handler.DragDrop",
B="droprequest",
C="__dH",
D="dragstart",
E="__dL",
F="dragchange",
G="dragleave",
H="dragover",
I="__ea";
qx.Class.define(A,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(J){arguments.callee.base.call(this);
this.__dH=J;
this.__dI=J.getWindow().document.documentElement;
this.__dH.addListener(this.__dI,
q,
this._onMouseDown,
this);
this.__dK();
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
addType:function(L){this.__dL[L]=true;
},
addAction:function(N){this.__dM[N]=true;
},
supportsType:function(L){return !!this.__dL[L];
},
supportsAction:function(L){return !!this.__dM[L];
},
getData:function(L){if(!this.__dY||!this.__ea){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__dL[L]){throw new Error("Unsupported data type: "+L+"!");
}
if(!this.__dO[L]){this.__dJ=L;
this.__dR(B,
this.__dV,
false);
}
if(!this.__dO[L]){throw new Error("Please use a dragrequest listener to the drag target to fill the manager with data!");
}return this.__dO[L]||null;
},
getCurrentAction:function(){return this.__dQ;
},
addData:function(L,
O){this.__dO[L]=O;
},
getCurrentType:function(){return this.__dJ;
},
__dK:function(){this.__dL={};
this.__dM={};
this.__dN={};
this.__dO={};
},
__dP:function(){var P=this.__dM;
var Q=this.__dN;
var R=null;
if(this.__dY){if(Q.Shift&&Q.Ctrl&&P.alias){R=a;
}else if(Q.Shift&&Q.Alt&&P.copy){R=b;
}else if(Q.Shift&&P.move){R=j;
}else if(Q.Alt&&P.alias){R=a;
}else if(Q.Ctrl&&P.copy){R=b;
}else if(P.move){R=j;
}else if(P.copy){R=b;
}else if(P.alias){R=a;
}}
if(R!=this.__dQ){this.__dQ=R;
this.__dR(F,
this.__dV,
false);
}},
__dR:function(L,
K,
S,
T){var U=qx.event.Registration;
var V=U.createEvent(L,
qx.event.type.Drag,
[S,
T]);
if(this.__dV!==this.__ea){if(K==this.__dV){V.setRelatedTarget(this.__ea);
}else{V.setRelatedTarget(this.__dV);
}}return U.dispatchEvent(K,
V);
},
__dS:function(W){while(W&&W.nodeType==1){if(W.getAttribute(r)==p){return W;
}W=W.parentNode;
}return null;
},
__dT:function(W){while(W&&W.nodeType==1){if(W.getAttribute(z)==p){return W;
}W=W.parentNode;
}return null;
},
__dU:function(){this.__dV=null;
this.__dH.removeListener(this.__dI,
i,
this._onMouseMove,
this,
true);
this.__dH.removeListener(this.__dI,
n,
this._onMouseUp,
this,
true);
qx.event.Registration.removeListener(window,
c,
this._onWindowBlur,
this);
this.__dK();
},
__dW:function(){if(this.__dX){this.__dH.removeListener(this.__dI,
k,
this._onMouseOver,
this,
true);
this.__dH.removeListener(this.__dI,
d,
this._onMouseOut,
this,
true);
this.__dH.removeListener(this.__dI,
f,
this._onKeyDown,
this,
true);
this.__dH.removeListener(this.__dI,
m,
this._onKeyUp,
this,
true);
this.__dR(o,
this.__dV,
false);
this.__dX=false;
}this.__dY=false;
this.__ea=null;
this.__dU();
},
__dY:false,
_onWindowBlur:function(X){this.__dW();
},
_onKeyDown:function(X){var Y=X.getKeyIdentifier();
switch(Y){case l:case g:case h:if(!this.__dN[Y]){this.__dN[Y]=true;
this.__dP();
}}},
_onKeyUp:function(X){var Y=X.getKeyIdentifier();
switch(Y){case l:case g:case h:if(this.__dN[Y]){this.__dN[Y]=false;
this.__dP();
}}},
_onMouseDown:function(X){if(this.__dX){return;
}var ba=this.__dS(X.getTarget());
if(ba){this.__eb=X.getDocumentLeft();
this.__ec=X.getDocumentTop();
this.__dV=ba;
this.__dH.addListener(this.__dI,
i,
this._onMouseMove,
this,
true);
this.__dH.addListener(this.__dI,
n,
this._onMouseUp,
this,
true);
qx.event.Registration.addListener(window,
c,
this._onWindowBlur,
this);
}},
_onMouseUp:function(X){if(this.__dY){this.__dR(x,
this.__ea,
false,
X);
}if(this.__dX){X.stopPropagation();
}this.__dW();
},
_onMouseMove:function(X){if(this.__dX){if(!this.__dR(v,
this.__dV,
true,
X)){this.__dW();
}}else{if(Math.abs(X.getDocumentLeft()-this.__eb)>3||Math.abs(X.getDocumentTop()-this.__ec)>3){if(this.__dR(D,
this.__dV,
true,
X)){this.__dX=true;
this.__dH.addListener(this.__dI,
k,
this._onMouseOver,
this,
true);
this.__dH.addListener(this.__dI,
d,
this._onMouseOut,
this,
true);
this.__dH.addListener(this.__dI,
f,
this._onKeyDown,
this,
true);
this.__dH.addListener(this.__dI,
m,
this._onKeyUp,
this,
true);
var Q=this.__dN;
Q.Ctrl=X.isCtrlPressed();
Q.Shift=X.isShiftPressed();
Q.Alt=X.isAltPressed();
this.__dP();
}else{this.__dR(o,
this.__dV,
false);
this.__dU();
}}}},
_onMouseOver:function(X){var K=X.getTarget();
var bb=this.__dT(K);
if(bb&&bb!=this.__ea){this.__dY=this.__dR(H,
bb,
true,
X);
this.__ea=bb;
this.__dP();
}},
_onMouseOut:function(X){var K=X.getTarget();
var bb=this.__dT(K);
if(bb&&bb==this.__ea){this.__dR(G,
this.__ea,
false,
X);
this.__ea=null;
this.__dY=false;
this.__dP();
}}},
destruct:function(){this._disposeFields(w,
I,
C,
s,
E,
t,
y,
u);
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
{statics:{__ed:{"onload":true,
"onpropertychange":true,
"oninput":true,
"onchange":true,
"name":true,
"type":true,
"checked":true,
"disabled":true},
create:function(k,
l,
m){if(!m){m=window;
}
if(!k){throw new Error("The tag name is missing!");
}var n=this.__ed;
var o=a;
for(var p in l){if(n[p]){o+=p+e+l[p]+i;
}}var q;
if(o!=a){if(qx.bom.client.Engine.MSHTML){q=m.document.createElement(c+k+d+o+b);
}else{var r=m.document.createElement(h);
r.innerHTML=c+k+d+o+j+k+b;
q=r.firstChild;
}}else{if(m.document.createElementNS){q=m.document.createElementNS(f,
k);
}else{q=m.document.createElement(k);
}}
for(var p in l){if(!n[p]){qx.bom.element.Attribute.set(q,
p,
l[p]);
}}return q;
},
empty:function(q){return q.innerHTML=a;
},
addListener:function(q,
s,
t,
u,
v){return qx.event.Registration.addListener(q,
s,
t,
u,
v);
},
removeListener:function(q,
s,
t,
u,
v){return qx.event.Registration.removeListener(q,
s,
t,
u,
v);
},
removeListenerById:function(w,
x){qx.event.Registration.removeListenerById(w,
x);
},
hasListener:function(q,
s,
v){return qx.event.Registration.hasListener(q,
s,
v);
},
focus:function(q){qx.event.Registration.getManager(q).getHandler(qx.event.handler.Focus).focus(q);
},
blur:function(q){qx.event.Registration.getManager(q).getHandler(qx.event.handler.Focus).blur(q);
},
activate:function(q){qx.event.Registration.getManager(q).getHandler(qx.event.handler.Focus).activate(q);
},
deactivate:function(q){qx.event.Registration.getManager(q).getHandler(qx.event.handler.Focus).deactivate(q);
},
capture:function(q){qx.event.Registration.getManager(q).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(q);
},
releaseCapture:function(q){qx.event.Registration.getManager(q).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(q);
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
y="qxSelectable",
z="tabIndex",
A="off",
B="_body",
C="activate",
D="focusout",
E="__mouseActive",
F="_manager",
G="qxKeepFocus",
H="qxKeepActive";
qx.Class.define(s,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(I){arguments.callee.base.call(this);
this._manager=I;
this._window=I.getWindow();
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
members:{canHandleEvent:function(J,
K){},
registerEvent:function(J,
K,
L){},
unregisterEvent:function(J,
K,
L){},
focus:function(M){try{M.focus();
}catch(ex){}this.setFocus(M);
this.setActive(M);
},
activate:function(M){this.setActive(M);
},
blur:function(M){try{M.blur();
}catch(ex){}
if(this.getActive()===M){this.resetActive();
}
if(this.getFocus()===M){this.resetFocus();
}},
deactivate:function(M){if(this.getActive()===M){this.resetActive();
}},
tryActivate:function(M){var N=this.__eB(M);
if(N){this.setActive(N);
}},
__ee:function(J,
O,
K,
P){var Q=qx.event.Registration;
var R=Q.createEvent(K,
qx.event.type.Focus,
[J,
O,
P]);
Q.dispatchEvent(J,
R);
},
_windowFocused:true,
__ef:function(){if(this._windowFocused){this._windowFocused=false;
this.__ee(this._window,
null,
b,
false);
}},
__eg:function(){if(!this._windowFocused){this._windowFocused=true;
this.__ee(this._window,
null,
c,
false);
}},
_initObserver:qx.core.Variant.select(a,
{"gecko":function(){this.__eh=qx.lang.Function.listener(this.__ew,
this);
this.__ei=qx.lang.Function.listener(this.__ex,
this);
this.__ej=qx.lang.Function.listener(this.__ev,
this);
this.__ek=qx.lang.Function.listener(this.__eu,
this);
this.__el=qx.lang.Function.listener(this.__ep,
this);
this._document.addEventListener(d,
this.__eh,
true);
this._document.addEventListener(g,
this.__ei,
true);
this._window.addEventListener(c,
this.__ej,
true);
this._window.addEventListener(b,
this.__ek,
true);
this._window.addEventListener(p,
this.__el,
true);
},
"mshtml":function(){this.__eh=qx.lang.Function.listener(this.__ew,
this);
this.__ei=qx.lang.Function.listener(this.__ex,
this);
this.__em=qx.lang.Function.listener(this.__eq,
this);
this.__en=qx.lang.Function.listener(this.__er,
this);
this.__eo=qx.lang.Function.listener(this.__ey,
this);
this._document.attachEvent(k,
this.__eh);
this._document.attachEvent(n,
this.__ei);
this._document.attachEvent(m,
this.__em);
this._document.attachEvent(l,
this.__en);
this._document.attachEvent(o,
this.__eo);
},
"webkit":function(){this.__eh=qx.lang.Function.listener(this.__ew,
this);
this.__ei=qx.lang.Function.listener(this.__ex,
this);
this.__en=qx.lang.Function.listener(this.__er,
this);
this.__ej=qx.lang.Function.listener(this.__ev,
this);
this.__ek=qx.lang.Function.listener(this.__eu,
this);
this.__eo=qx.lang.Function.listener(this.__ey,
this);
this._document.addEventListener(d,
this.__eh,
true);
this._document.addEventListener(g,
this.__ei,
true);
this._document.addEventListener(j,
this.__eo,
false);
this._window.addEventListener(h,
this.__en,
true);
this._window.addEventListener(c,
this.__ej,
true);
this._window.addEventListener(b,
this.__ek,
true);
},
"opera":function(){this.__eh=qx.lang.Function.listener(this.__ew,
this);
this.__ei=qx.lang.Function.listener(this.__ex,
this);
this.__em=qx.lang.Function.listener(this.__eq,
this);
this.__en=qx.lang.Function.listener(this.__er,
this);
this._document.addEventListener(d,
this.__eh,
true);
this._document.addEventListener(g,
this.__ei,
true);
this._window.addEventListener(i,
this.__em,
true);
this._window.addEventListener(h,
this.__en,
true);
}}),
_stopObserver:qx.core.Variant.select(a,
{"gecko":function(){this._document.removeEventListener(d,
this.__eh,
true);
this._document.removeEventListener(g,
this.__ei,
true);
this._window.removeEventListener(c,
this.__ej,
true);
this._window.removeEventListener(b,
this.__ek,
true);
this._window.removeEventListener(p,
this.__el,
true);
},
"mshtml":function(){this._document.detachEvent(k,
this.__eh);
this._document.detachEvent(n,
this.__ei);
this._document.detachEvent(m,
this.__em);
this._document.detachEvent(l,
this.__en);
this._document.detachEvent(o,
this.__eo);
},
"webkit":function(){this._document.removeEventListener(d,
this.__eh,
true);
this._document.removeEventListener(j,
this.__eo,
false);
this._window.removeEventListener(i,
this.__em,
true);
this._window.removeEventListener(h,
this.__en,
true);
this._window.removeEventListener(c,
this.__ej,
true);
this._window.removeEventListener(b,
this.__ek,
true);
},
"opera":function(){this._document.removeEventListener(d,
this.__eh,
true);
this._window.removeEventListener(i,
this.__em,
true);
this._window.removeEventListener(h,
this.__en,
true);
this._window.removeEventListener(c,
this.__ej,
true);
this._window.removeEventListener(b,
this.__ek,
true);
}}),
__ep:qx.core.Variant.select(a,
{"gecko":function(S){if(!this.__eC(S.target)){qx.bom.Event.preventDefault(S);
}},
"default":null}),
__eq:qx.core.Variant.select(a,
{"mshtml":function(S){this.__eg();
var J=S.srcElement;
var T=this.__eA(J);
if(T){this.setFocus(T);
}this.tryActivate(J);
},
"opera":function(S){var J=S.target;
if(J==this._document||J==this._window){this.__eg();
if(this.__es){this.setFocus(this.__es);
delete this.__es;
}
if(this.__et){this.setActive(this.__et);
delete this.__et;
}}else{this.setFocus(J);
this.tryActivate(J);
if(!this.__eC(J)){J.selectionStart=0;
J.selectionEnd=0;
}}},
"default":null}),
__er:qx.core.Variant.select(a,
{"mshtml":function(S){if(!S.toElement){this.__ef();
this.resetFocus();
this.resetActive();
}},
"webkit":function(S){var J=S.target;
if(J===this.getFocus()){this.resetFocus();
}
if(J===this.getActive()){this.resetActive();
}},
"opera":function(S){var J=S.target;
if(J==this._document){this.__ef();
this.__es=this.getFocus();
this.__et=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(J===this.getFocus()){this.resetFocus();
}
if(J===this.getActive()){this.resetActive();
}}},
"default":null}),
__eu:qx.core.Variant.select(a,
{"gecko":function(S){if(S.target===this._window||S.target===this._document){this.__ef();
this.resetActive();
this.resetFocus();
}},
"webkit":function(S){if(S.target===this._window||S.target===this._document){this.__ef();
this.__es=this.getFocus();
this.__et=this.getActive();
this.resetActive();
this.resetFocus();
}},
"default":null}),
__ev:qx.core.Variant.select(a,
{"gecko":function(S){var J=S.target;
if(J===this._window||J===this._document){this.__eg();
J=this._body;
}this.setFocus(J);
this.tryActivate(J);
},
"webkit":function(S){var J=S.target;
if(J===this._window||J===this._document){this.__eg();
if(this.__es){this.setFocus(this.__es);
delete this.__es;
}
if(this.__et){this.setActive(this.__et);
delete this.__et;
}}else{this.setFocus(J);
this.tryActivate(J);
}},
"default":null}),
__ew:qx.core.Variant.select(a,
{"gecko":function(S){var J=S.target;
var T=this.__eA(J);
var U=this.__eC(J);
if(!U){qx.bom.Event.preventDefault(S);
if(T){T.focus();
}}else if(!T){qx.bom.Event.preventDefault(S);
}},
"mshtml":function(S){var J=S.srcElement;
var T=this.__eA(J);
if(T){if(!this.__eC(J)){J.unselectable=f;
document.selection.empty();
T.focus();
}}else{qx.bom.Event.preventDefault(S);
if(!this.__eC(J)){J.unselectable=f;
}}},
"webkit":function(S){var J=S.target;
var T=this.__eA(J);
if(T){this.setFocus(T);
}else{qx.bom.Event.preventDefault(S);
}},
"opera":function(S){var J=S.target;
var T=this.__eA(J);
if(!this.__eC(J)){qx.bom.Event.preventDefault(S);
if(T){var V=this.getFocus();
if(V&&V.selectionEnd){V.selectionStart=0;
V.selectionEnd=0;
V.blur();
}if(T){this.setFocus(T);
}}}else if(T){this.setFocus(T);
}},
"default":null}),
__ex:qx.core.Variant.select(a,
{"mshtml":function(S){var J=S.srcElement;
if(J.unselectable){J.unselectable=A;
}this.tryActivate(J);
},
"gecko":function(S){var J=S.target;
while(J&&J.offsetWidth===undefined){J=J.parentNode;
}
if(J){this.tryActivate(J);
}},
"webkit|opera":function(S){this.tryActivate(S.target);
},
"default":null}),
__ey:qx.core.Variant.select(a,
{"mshtml|webkit":function(S){if(!this.__eC(S.srcElement)){qx.bom.Event.preventDefault(S);
}},
"default":null}),
__ez:function(W){var X=qx.bom.element.Attribute.get(W,
z);
if(X>=1){return true;
}var Y=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;
if(X>=0&&Y[W.tagName]){return true;
}return false;
},
__eA:function(W){while(W&&W.nodeType===1){if(W.getAttribute(G)==f){return null;
}
if(this.__ez(W)){return W;
}W=W.parentNode;
}return this._body;
},
__eB:function(W){var ba=W;
while(W&&W.nodeType===1){if(W.getAttribute(H)==f){return null;
}W=W.parentNode;
}return ba;
},
__eC:function(bb){while(bb&&bb.nodeType===1){var bc=bb.getAttribute(y);
if(bc!=null){return bc===f;
}bb=bb.parentNode;
}return true;
},
_applyActive:function(bd,
be){if(be){this.__ee(be,
bd,
v,
true);
}
if(bd){this.__ee(bd,
be,
C,
true);
}},
_applyFocus:function(bd,
be){if(be){this.__ee(be,
bd,
D,
true);
}
if(bd){this.__ee(bd,
be,
x,
true);
}if(be){this.__ee(be,
bd,
b,
false);
}
if(bd){this.__ee(bd,
be,
c,
false);
}}},
destruct:function(){this._stopObserver();
this._disposeFields(F,
u,
q,
r,
B,
E);
},
defer:function(bf){qx.event.Registration.addHandler(bf);
var Y=bf.FOCUSABLE_ELEMENTS;
for(var bg in Y){Y[bg.toUpperCase()]=1;
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
b="mshtml",
c="readOnly",
d="accessKey",
e="qx.bom.element.Attribute",
f="rowSpan",
g="vAlign",
h="className",
i="textContent",
j="'",
k="htmlFor",
l="longDesc",
m="cellSpacing",
n="frameBorder",
o="='",
p="",
q="useMap",
r="innerText",
s="innerHTML",
t="tabIndex",
u="cssText",
v="dateTime",
w="maxLength",
x="cellPadding",
y="colSpan",
z="style";
qx.Class.define(e,
{statics:{__eD:{names:{"class":h,
"for":k,
html:s,
text:qx.core.Variant.isSet(a,
b)?r:i,
colspan:y,
rowspan:f,
valign:g,
datetime:v,
accesskey:d,
tabindex:t,
maxlength:w,
readonly:c,
longdesc:l,
cellpadding:x,
cellspacing:m,
frameborder:n,
usemap:q},
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
compile:function(A){var B=[];
var C=this.__eD.runtime;
for(var D in A){if(!C[D]){B.push(D,
o,
A[D],
j);
}}return B.join(p);
},
get:qx.core.Variant.select(a,
{"mshtml":function(E,
F){var G=this.__eD;
var H;
F=G.names[F]||F;
if(G.original[F]){H=E.getAttribute(F,
2);
}else if(G.property[F]){H=E[F];
}else{H=E.getAttribute(F);
}if(G.bools[F]){return !!H;
}return H;
},
"default":function(E,
F){var G=this.__eD;
var H;
F=G.names[F]||F;
if(G.property[F]){H=E[F];
if(H==null){H=E.getAttribute(F);
}}else{H=E.getAttribute(F);
}if(G.bools[F]){return !!H;
}return H;
}}),
set:function(E,
F,
H){var G=this.__eD;
F=G.names[F]||F;
if(G.bools[F]){H=!!H;
}if(G.property[F]){E[F]=H;
}else if(H===true){E.setAttribute(F,
F);
}else if(H===false||H===null){E.removeAttribute(F);
}else if(qx.core.Variant.isSet(a,
b)&&F==z){E.style.setAttribute(u,
H);
}else{E.setAttribute(F,
H);
}},
reset:function(E,
F){this.set(E,
F,
null);
}}});
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
__eE:qx.core.Variant.select(a,
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
default:return this.__eE[this._native.button]||g;
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
b="blur",
c="losecapture",
d="__eH",
e="capture",
f="click",
g="qx.event.dispatch.MouseCapture",
h="focus",
j="scroll",
k="__eF";
qx.Class.define(g,
{extend:qx.core.Object,
implement:qx.event.IEventDispatcher,
construct:function(m){arguments.callee.base.call(this);
this.__eF=m;
this.__eG=m.getWindow();
m.addListener(this.__eG,
b,
this.releaseCapture,
this);
m.addListener(this.__eG,
h,
this.releaseCapture,
this);
m.addListener(this.__eG,
j,
this.releaseCapture,
this);
},
statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},
members:{__eH:null,
__eF:null,
__eG:null,
canDispatchEvent:function(n,
o,
p){return this.__eH&&this.__eI[p];
},
dispatchEvent:function(n,
o,
p){if(p==f){o.stopPropagation();
this.releaseCapture();
return;
}var q=this.__eF.getListeners(this.__eH,
p,
false);
if(q){o.setCurrentTarget(this.__eH);
o.setEventPhase(qx.event.type.Event.AT_TARGET);
for(var r=0,
s=q.length;r<s;r++){var t=q[r].context||o.getCurrentTarget();
q[r].handler.call(t,
o);
}}},
__eI:{"mouseup":1,
"mousedown":1,
"click":1,
"dblclick":1,
"mousemove":1,
"mouseout":1,
"mouseover":1},
activateCapture:function(u){if(this.__eH===u){return;
}
if(this.__eH){this.releaseCapture();
}this.__eH=u;
qx.event.Registration.fireEvent(u,
e,
qx.event.type.Event,
[true,
false]);
},
releaseCapture:function(){var u=this.__eH;
if(!u){return;
}this.__eH=null;
qx.event.Registration.fireEvent(u,
c,
qx.event.type.Event,
[true,
false]);
}},
destruct:function(){this._disposeFields(d,
k,
a);
},
defer:function(v){qx.event.Registration.addDispatcher(v);
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
{statics:{__eJ:{},
remove:function(c){delete this.__eJ[c.$$hash];
},
add:function(c){var d=this.__eJ;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},
flush:function(){var d=this.__eJ;
var e;
for(var f in d){e=d[f];
delete d[f];
e.syncWidget();
}for(var f in d){return;
}this.__eJ={};
}}});
})();
(function(){var a="qx.ui.core.queue.Visibility",
b="visibility";
qx.Class.define(a,
{statics:{__eK:{},
__eL:{},
remove:function(c){var d=c.$$hash;
delete this.__eL[d];
delete this.__eK[d];
},
isVisible:function(c){return this.__eL[c.$$hash]||false;
},
__eM:function(c){var e=this.__eL;
var d=c.$$hash;
var f;
if(c.isExcluded()){f=false;
}else{var g=c.$$parent;
if(g){f=this.__eM(g);
}else{f=c.isRootWidget();
}}return e[d]=f;
},
add:function(c){var h=this.__eK;
if(h[c.$$hash]){return;
}h[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},
flush:function(){var h=this.__eK;
var e=this.__eL;
for(var d in h){if(e[d]!=null){h[d].addChildrenToQueue(h);
}}var i={};
for(var d in h){i[d]=e[d];
e[d]=null;
}for(var d in h){if(e[d]==null){this.__eM(h[d]);
}if(e[d]&&e[d]!=i[d]){h[d].checkAppearanceNeeds();
}}this.__eK={};
}}});
})();
(function(){var a="appearance",
b="qx.ui.core.queue.Appearance";
qx.Class.define(b,
{statics:{__eN:{},
remove:function(c){delete this.__eN[c.$$hash];
},
add:function(c){var d=this.__eN;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},
has:function(c){return !!this.__eN[c.$$hash];
},
flush:function(){var e=qx.ui.core.queue.Visibility;
var d=this.__eN;
var f;
for(var g in d){f=d[g];
delete d[g];
if(e.isVisible(f)){f.syncAppearance();
}else{f.$$stateChanges=true;
}}}}});
})();
(function(){var a="qx.ui.core.queue.Layout",
b="layout";
qx.Class.define(a,
{statics:{__eO:{},
remove:function(c){delete this.__eO[c.$$hash];
},
add:function(c){this.__eO[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},
flush:function(){var d=this.__eR();
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
getNestingLevel:function(c){var h=this.__eQ;
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
__eP:function(){var m=qx.ui.core.queue.Visibility;
this.__eQ={};
var n=[];
var d=this.__eO;
var c,
j;
for(var o in d){c=d[o];
if(m.isVisible(c)){j=this.getNestingLevel(c);
if(!n[j]){n[j]={};
}n[j][o]=c;
delete d[o];
}}return n;
},
__eR:function(){var p=[];
var n=this.__eP();
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
{statics:{__eS:{},
add:function(c){var d=this.__eS;
if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},
flush:function(){var d=this.__eS;
for(var e in d){d[e].dispose();
delete d[e];
}for(var e in d){return;
}this.__eS={};
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
j="baseline",
k="marginBottom",
l="qx.ui.core.LayoutItem",
m="center",
n="marginTop",
o="$$subparent",
p="allowGrowX",
q="middle",
r="marginLeft",
s="allowShrinkX",
t="__fa",
u="__eW",
v="$$parent",
w="top",
x="right",
y="marginRight",
z="__eU",
A="abstract",
B="__eY",
C="allowGrowY",
D="left";
qx.Class.define(l,
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
allowStretchX:{group:[p,
s],
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
margin:{group:[n,
y,
k,
r],
mode:f,
themeable:true},
alignX:{check:[D,
m,
x],
nullable:true,
apply:g,
themeable:true},
alignY:{check:[w,
q,
i,
j],
nullable:true,
apply:g,
themeable:true}},
members:{__eT:null,
__eU:null,
__eV:null,
__eW:null,
__eX:null,
__eY:null,
__fa:null,
getBounds:function(){return this.__eY||this.__eU||null;
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
if(L!=null&&L!==this.__eT){this.__eT=L;
qx.ui.core.queue.Layout.add(this);
return null;
}var M=this.__eU;
if(!M){M=this.__eU={};
}var N={};
if(G!==M.left||H!==M.top){N.position=true;
M.left=G;
M.top=H;
}
if(I!==M.width||J!==M.height){N.size=true;
M.width=I;
M.height=J;
}if(this.__eV){N.local=true;
delete this.__eV;
}
if(this.__eX){N.margin=true;
delete this.__eX;
}return N;
},
isExcluded:function(){return false;
},
hasValidLayout:function(){return !this.__eV;
},
scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},
invalidateLayoutCache:function(){this.__eV=true;
this.__eW=null;
},
getSizeHint:function(O){var P=this.__eW;
if(P){return P;
}
if(O===false){return null;
}P=this.__eW=this._computeSizeHint();
if(this.__eT&&this.getHeight()==null){P.height=this.__eT;
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
_hasHeightForWidth:function(){var U=this._getLayout();
if(U){return U.hasHeightForWidth();
}return false;
},
_getHeightForWidth:function(I){var U=this._getLayout();
if(U&&U.hasHeightForWidth()){return U.getHeightForWidth(I);
}return null;
},
_applyMargin:function(){this.__eX=true;
var V=this.$$parent;
if(V){V.updateLayoutProperties();
}},
_applyAlign:function(){var V=this.$$parent;
if(V){V.updateLayoutProperties();
}},
_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},
_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},
hasUserBounds:function(){return !!this.__eY;
},
setUserBounds:function(G,
H,
I,
J){this.__eY={left:G,
top:H,
width:I,
height:J};
qx.ui.core.queue.Layout.add(this);
},
resetUserBounds:function(){delete this.__eY;
qx.ui.core.queue.Layout.add(this);
},
__fb:{},
setLayoutProperties:function(W){if(W==null){return;
}var X=this.__fa;
if(!X){X=this.__fa={};
}var V=this.getLayoutParent();
if(V){V.updateLayoutProperties(W);
}for(var Y in W){if(W[Y]==null){delete X[Y];
}else{X[Y]=W[Y];
}}},
getLayoutProperties:function(){return this.__fa||this.__fb;
},
clearLayoutProperties:function(){delete this.__fa;
},
updateLayoutProperties:function(W){var U=this._getLayout();
if(U){var Y;
U.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},
getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},
getLayoutParent:function(){return this.$$parent||null;
},
setLayoutParent:function(V){this.$$parent=V||null;
qx.ui.core.queue.Visibility.add(this);
},
isRootWidget:function(){return false;
},
_getRoot:function(){var V=this;
while(V){if(V.isRootWidget()){return V;
}V=V.$$parent;
}return null;
},
clone:function(){var ba=arguments.callee.base.call(this);
var W=this.__fa;
if(W){ba.__fa=qx.lang.Object.copy(W);
}return ba;
},
serialize:function(){var bb=arguments.callee.base.call(this);
var W=this.__fa;
if(W){bb.layoutProperties=qx.lang.Object.copy(W);
}return bb;
}},
destruct:function(){this._disposeFields(v,
o,
t,
z,
B,
u);
}});
})();
(function(){var a="px",
b="qx.event.type.Mouse",
c="Boolean",
d="qx.event.type.Drag",
f="visible",
g="qx.event.type.Focus",
h="Integer",
j="on",
k="excluded",
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
U="Use public 'getChildControl' instead!",
V="__fz",
W="_applyBackgroundColor",
X="_applyFocusable",
Y="changeShadow",
ba="qx.event.type.KeyInput",
bb="__fu",
bc="normal",
bd="Font",
be="_applyShadow",
bf="_applyEnabled",
bg="_applySelectable",
bh="_applyKeepActive",
bi="__fr",
bj="Number",
bk="_applyVisibility",
bl="repeat",
bm="qxDraggable",
bn="paddingLeft",
bo="_applyDroppable",
bp="userSelect",
bq="__fB",
br="#",
bs="_applyCursor",
bt="changeVisibility",
bu="_applyDraggable",
bv="changeTextColor",
bw="changeContextMenu",
bx="paddingTop",
by="opacity",
bz="hideFocus",
bA="__fx",
bB="outline",
bC="_applyAppearance",
bD="overflowX",
bE="_applyOpacity",
bF="url(",
bG=")",
bH="qx.ui.core.Widget",
bI="_applyFont",
bJ="cursor",
bK="qxDroppable",
bL="changeZIndex",
bM="__fq",
bN="overflowY",
bO="changeEnabled",
bP="changeFont",
bQ="off",
bR="_applyDecorator",
bS="_applyZIndex",
bT="_applyTextColor",
bU="qx.ui.menu.Menu",
bV="__fv",
bW="Use public 'hasChildControl' instead!",
bX="true",
bY="widget",
ca="changeDecorator",
cb="__fG",
cc="_applyTabIndex",
cd="changeAppearance",
ce="shorthand",
cf="/",
cg="",
ch="_applyContextMenu",
ci="qxSelectable",
cj="paddingBottom",
ck="qx.ui.tooltip.ToolTip",
cl="qxKeepActive",
cm="__ft",
cn="_applyKeepFocus",
co="webkit",
cp="paddingRight",
cq="changeBackgroundColor",
cr="qxKeepFocus",
cs="qx/static/blank.gif";
qx.Class.define(bH,
{extend:qx.ui.core.LayoutItem,
include:[qx.locale.MTranslation],
construct:function(){arguments.callee.base.call(this);
this.__fq=this._createContainerElement();
this.__fr=this.__fA();
this.__fq.add(this.__fr);
this.initFocusable();
this.initSelectable();
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
keyinput:ba,
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
properties:{paddingTop:{check:h,
init:0,
apply:n,
themeable:true},
paddingRight:{check:h,
init:0,
apply:n,
themeable:true},
paddingBottom:{check:h,
init:0,
apply:n,
themeable:true},
paddingLeft:{check:h,
init:0,
apply:n,
themeable:true},
padding:{group:[bx,
cp,
cj,
bn],
mode:ce,
themeable:true},
zIndex:{nullable:true,
init:null,
apply:bS,
event:bL,
check:h,
themeable:true},
decorator:{nullable:true,
init:null,
apply:bR,
event:ca,
check:J,
themeable:true},
shadow:{nullable:true,
init:null,
apply:be,
event:Y,
check:J,
themeable:true},
backgroundColor:{nullable:true,
check:P,
apply:W,
event:cq,
themeable:true},
textColor:{nullable:true,
check:P,
apply:bT,
event:bv,
themeable:true,
inheritable:true},
font:{nullable:true,
apply:bI,
check:bd,
event:bP,
themeable:true,
inheritable:true},
opacity:{check:bj,
apply:bE,
themeable:true,
nullable:true,
init:null},
cursor:{check:S,
apply:bs,
themeable:true,
inheritable:true,
nullable:true,
init:null},
toolTip:{check:ck,
nullable:true},
visibility:{check:[f,
q,
k],
init:f,
apply:bk,
event:bt},
enabled:{init:true,
check:c,
inheritable:true,
apply:bf,
event:bO},
anonymous:{init:false,
check:c},
tabIndex:{check:h,
nullable:true,
apply:cc},
focusable:{check:c,
init:false,
apply:X},
keepFocus:{check:c,
init:false,
apply:cn},
keepActive:{check:c,
init:false,
apply:bh},
draggable:{check:c,
init:false,
apply:bu},
droppable:{check:c,
init:false,
apply:bo},
selectable:{check:c,
init:false,
apply:bg},
contextMenu:{check:bU,
apply:ch,
nullable:true,
event:bw},
appearance:{check:S,
init:bY,
apply:bC,
event:cd}},
statics:{DEBUG:false,
getWidgetByElement:function(ct){try{while(ct){var cu=ct.$$widget;
if(cu!=null){return qx.core.ObjectRegistry.fromHashCode(cu);
}ct=ct.parentNode;
}}catch(ex){}return null;
},
contains:function(cv,
cw){while(cw){if(cv==cw){return true;
}cw=cw.getLayoutParent();
}return false;
},
__fs:{}},
members:{__fq:null,
__fr:null,
__ft:null,
__fu:null,
__fv:null,
__fw:null,
__fx:null,
_getLayout:function(){return this.__fx;
},
_setLayout:function(cx){{};
if(this.__fx){this.__fx.connectToWidget(null);
}
if(cx){cx.connectToWidget(this);
}this.__fx=cx;
qx.ui.core.queue.Layout.add(this);
},
setLayoutParent:function(cv){if(this.$$parent===cv){return;
}
if(this.$$parent){this.$$parent.getContentElement().remove(this.__fq);
}this.$$parent=cv||null;
if(cv){this.$$parent.getContentElement().add(this.__fq);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},
__fy:null,
renderLayout:function(cy,
cz,
cA,
cB){var cC=arguments.callee.base.call(this,
cy,
cz,
cA,
cB);
if(!cC){return;
}var cD=this.__fq;
var cE=this.__fr;
var cF=cC.size||this.__fy;
var cG=a;
if(cC.position){cD.setStyle(R,
cy+cG);
cD.setStyle(Q,
cz+cG);
}if(cC.size){cD.setStyle(K,
cA+cG);
cD.setStyle(z,
cB+cG);
}
if(cF||cC.local||cC.margin){var cH=this.getInsets();
var cI=cA-cH.left-cH.right;
var cJ=cB-cH.top-cH.bottom;
}
if(this.__fy){cE.setStyle(R,
cH.left+cG);
cE.setStyle(Q,
cH.top+cG);
}
if(cF){cE.setStyle(K,
cI+cG);
cE.setStyle(z,
cJ+cG);
}
if(cC.size){var cK=this.__fv;
if(cK){cK.setStyles({width:cA+a,
height:cB+a});
}}
if(cC.size||this.__fy){var cL=qx.theme.manager.Decoration.getInstance();
var cM=this.getDecorator();
if(cM){var ct=this.__ft;
var cN=cL.resolve(cM);
cN.resize(ct,
cA,
cB);
}}
if(cC.size){var cO=this.getShadow();
if(cO){var ct=this.__fu;
var cN=cL.resolve(cO);
var cH=cN.getInsets();
var cP=cA+cH.left+cH.right;
var cQ=cB+cH.top+cH.bottom;
cN.resize(ct,
cP,
cQ);
}}
if(cF||cC.local||cC.margin){if(this.__fx&&this.hasLayoutChildren()){this.__fx.renderLayout(cI,
cJ);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cC.position&&this.hasListener(D)){this.fireDataEvent(D,
this.getBounds());
}
if(cC.size&&this.hasListener(I)){this.fireDataEvent(I,
this.getBounds());
}delete this.__fy;
},
__fz:null,
clearSeparators:function(){var cR=this.__fz;
if(!cR){return;
}var cS=qx.ui.core.Widget.__fs;
var cE=this.__fr;
var cT,
cU;
for(var cV=0,
cW=cR.length;cV<cW;cV++){cU=cR[cV];
cT=cU.$$separator;
if(!cS[cT]){cS[cT]=[cU];
}else{cS[cT].push(cU);
}cE.remove(cU);
}cR.length=0;
},
renderSeparator:function(cT,
cX){var cS=qx.ui.core.Widget.__fs;
var cY=qx.theme.manager.Decoration.getInstance();
if(typeof cT==m){var da=cT.toHashCode();
var cN=cT;
}else{var da=cT;
var cN=cY.resolve(cT);
}var db=cS[cT];
if(db&&db.length>0){var cU=db.pop();
}else{var cU=this.__fF(cN);
}this.__fr.add(cU);
cN.resize(cU,
cX.width,
cX.height);
var dc=cU.getDomElement().style;
dc.left=cX.left+a;
dc.top=cX.top+a;
if(!this.__fz){this.__fz=[cU];
}else{this.__fz.push(cU);
}cU.$$separator=da;
},
_computeSizeHint:function(){var cA=this.getWidth();
var dd=this.getMinWidth();
var de=this.getMaxWidth();
var cB=this.getHeight();
var df=this.getMinHeight();
var dg=this.getMaxHeight();
var dh=this._getContentHint();
var cH=this.getInsets();
var di=cH.left+cH.right;
var dj=cH.top+cH.bottom;
if(cA==null){cA=dh.width+di;
}
if(cB==null){cB=dh.height+dj;
}
if(dd==null){dd=di;
if(dh.minWidth!=null){dd+=dh.minWidth;
}}
if(df==null){df=dj;
if(dh.minHeight!=null){df+=dh.minHeight;
}}
if(de==null){if(dh.maxWidth==null){de=Infinity;
}else{de=dh.maxWidth+di;
}}
if(dg==null){if(dh.maxHeight==null){dg=Infinity;
}else{dg=dh.maxHeight+dj;
}}return {width:cA,
minWidth:dd,
maxWidth:de,
height:cB,
minHeight:df,
maxHeight:dg};
},
invalidateLayoutCache:function(){arguments.callee.base.call(this);
if(this.__fx){this.__fx.invalidateLayoutCache();
}},
_getContentHint:function(){var cx=this.__fx;
if(cx){if(this.hasLayoutChildren()){var dk=cx.getSizeHint();
var dl;
return dk;
}else{return {width:0,
height:0};
}}else{return {width:100,
height:50};
}},
_getHeightForWidth:function(cA){var cH=this.getInsets();
var di=cH.left+cH.right;
var dj=cH.top+cH.bottom;
var dm=cA-di;
var cx=this._getLayout();
if(cx&&cx.hasHeightForWidth()){var dn=cx.getHeightForWidth(cA);
}else{dn=this._getContentHeightForWidth(dm);
}var cB=dn+dj;
return cB;
},
_getContentHeightForWidth:function(cA){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},
getInsets:function(){var cz=this.getPaddingTop();
var dp=this.getPaddingRight();
var dq=this.getPaddingBottom();
var cy=this.getPaddingLeft();
var cM=this.getDecorator();
if(cM){var cL=qx.theme.manager.Decoration.getInstance();
var cN=cL.resolve(cM);
var dr=cN.getInsets();
{};
cz+=dr.top;
dp+=dr.right;
dq+=dr.bottom;
cy+=dr.left;
}return {"top":cz,
"right":dp,
"bottom":dq,
"left":cy};
},
getInnerSize:function(){var ds=this.getBounds();
if(!ds){return null;
}var cH=this.getInsets();
return {width:ds.width-cH.left-cH.right,
height:ds.height-cH.top-cH.bottom};
},
show:function(){this.setVisibility(f);
},
hide:function(){this.setVisibility(q);
},
exclude:function(){this.setVisibility(k);
},
isVisible:function(){return this.getVisibility()===f;
},
isHidden:function(){return this.getVisibility()!==f;
},
isExcluded:function(){return this.getVisibility()===k;
},
_createContainerElement:function(){var dt=new qx.html.Element(A);
{};
dt.setStyle(G,
t);
dt.setStyle(p,
0);
dt.setAttribute(L,
this.toHashCode());
{};
return dt;
},
__fA:function(){var dt=this._createContentElement();
{};
dt.setStyle(G,
t);
dt.setStyle(p,
10);
return dt;
},
_createContentElement:function(){var dt=new qx.html.Element(A);
dt.setStyle(bD,
q);
dt.setStyle(bN,
q);
return dt;
},
getContainerElement:function(){return this.__fq;
},
getContentElement:function(){return this.__fr;
},
getDecoratorElement:function(){return this.__ft;
},
__fB:null,
getLayoutChildren:function(){var du=this.__fB;
if(!du){return this.__fC;
}var dv;
for(var cV=0,
cW=du.length;cV<cW;cV++){var cw=du[cV];
if(cw.hasUserBounds()||cw.isExcluded()){if(dv==null){dv=du.concat();
}qx.lang.Array.remove(dv,
cw);
}}return dv||du;
},
scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},
invalidateLayoutChildren:function(){var cx=this.__fx;
if(cx){cx.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},
hasLayoutChildren:function(){var du=this.__fB;
if(!du){return false;
}var cw;
for(var cV=0,
cW=du.length;cV<cW;cV++){cw=du[cV];
if(!cw.hasUserBounds()&&!cw.isExcluded()){return true;
}}return false;
},
getChildrenContainer:function(){return this;
},
__fC:[],
_getChildren:function(){return this.__fB||this.__fC;
},
_indexOf:function(cw){var du=this.__fB;
if(!du){return -1;
}return du.indexOf(cw);
},
_hasChildren:function(){var du=this.__fB;
return du!=null&&(!!du[0]);
},
addChildrenToQueue:function(dw){var du=this.__fB;
if(!du){return;
}var cw;
for(var cV=0,
cW=du.length;cV<cW;cV++){cw=du[cV];
dw[cw.$$hash]=cw;
cw.addChildrenToQueue(dw);
}},
_add:function(cw,
dx){if(cw.getLayoutParent()==this){qx.lang.Array.remove(this.__fB,
cw);
}
if(this.__fB){this.__fB.push(cw);
}else{this.__fB=[cw];
}this.__fD(cw,
dx);
},
_addAt:function(cw,
dy,
dx){if(!this.__fB){this.__fB=[];
}if(cw.getLayoutParent()==this){qx.lang.Array.remove(this.__fB,
cw);
}var dz=this.__fB[dy];
if(dz===cw){return cw.setLayoutProperties(dx);
}
if(dz){qx.lang.Array.insertBefore(this.__fB,
cw,
dz);
}else{this.__fB.push(cw);
}this.__fD(cw,
dx);
},
_addBefore:function(cw,
dA,
dx){{};
if(cw==dA){return;
}
if(!this.__fB){this.__fB=[];
}if(cw.getLayoutParent()==this){qx.lang.Array.remove(this.__fB,
cw);
}qx.lang.Array.insertBefore(this.__fB,
cw,
dA);
this.__fD(cw,
dx);
},
_addAfter:function(cw,
dB,
dx){{};
if(cw==dB){return;
}
if(!this.__fB){this.__fB=[];
}if(cw.getLayoutParent()==this){qx.lang.Array.remove(this.__fB,
cw);
}qx.lang.Array.insertAfter(this.__fB,
cw,
dB);
this.__fD(cw,
dx);
},
_remove:function(cw){if(!this.__fB){return;
}qx.lang.Array.remove(this.__fB,
cw);
this.__fE(cw);
},
_removeAt:function(dy){if(!this.__fB){throw new Error("This widget has no children!");
}var cw=this.__fB[dy];
qx.lang.Array.removeAt(this.__fB,
dy);
this.__fE(cw);
},
_removeAll:function(){if(!this.__fB){return;
}var du=this.__fB.concat();
this.__fB.length=0;
for(var cV=du.length-1;cV>=0;cV--){this.__fE(du[cV]);
}qx.ui.core.queue.Layout.add(this);
},
_afterAddChild:null,
_afterRemoveChild:null,
__fD:function(cw,
dx){{};
var cv=cw.getLayoutParent();
if(cv&&cv!=this){cv._remove(cw);
}cw.setLayoutParent(this);
if(dx){cw.setLayoutProperties(dx);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(cw);
}},
__fE:function(cw){{};
cw.setLayoutParent(null);
if(this.__fx){this.__fx.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(cw);
}},
capture:function(){this.__fq.capture();
},
releaseCapture:function(){this.__fq.releaseCapture();
},
_applyPadding:function(dC,
dD,
dE){this.__fy=true;
qx.ui.core.queue.Layout.add(this);
},
_createProtectorElement:function(){if(this.__fv){return;
}var dF=this.__fv=new qx.html.Element;
{};
dF.setStyles({position:t,
top:0,
left:0,
zIndex:7});
var cX=this.getBounds();
if(cX){this.__fv.setStyles({width:cX.width+a,
height:cX.height+a});
}if(qx.core.Variant.isSet(y,
M)){dF.setStyles({backgroundImage:bF+qx.util.ResourceManager.toUri(cs)+bG,
backgroundRepeat:bl});
}this.__fq.add(dF);
},
__fF:function(cM){var ct=new qx.html.Element;
ct.setStyles({position:t,
top:0,
left:0});
{};
cM.init(ct);
return ct;
},
_applyDecorator:function(dC,
dD){var cS=qx.ui.core.Widget.__fs;
var cY=qx.theme.manager.Decoration.getInstance();
var cD=this.__fq;
var cU=this.__ft;
if(!this.__fv){this._createProtectorElement();
}var dG;
if(dD){if(typeof dD===m){dG=dD.toHashCode();
}else{dG=dD;
dD=cY.resolve(dD);
}}var dH;
if(dC){if(typeof dC===m){dH=dC.toHashCode();
{};
}else{dH=dC;
dC=cY.resolve(dC);
}}if(dD){if(!cS[dG]){cS[dG]=[];
}cD.remove(cU);
cS[dG].push(cU);
}if(dC){if(cS[dH]&&cS[dH].length>0){cU=cS[dH].pop();
}else{cU=this.__fF(dC);
cU.setStyle(p,
5);
}var dI=this.getBackgroundColor();
dC.tint(cU,
dI);
cD.add(cU);
this.__ft=cU;
}else{delete this.__ft;
this._applyBackgroundColor(this.getBackgroundColor());
}if(dC&&!dD&&dI){this.getContainerElement().setStyle(u,
null);
}if(qx.ui.decoration.Util.insetsModified(dD,
dC)){this.__fy=true;
qx.ui.core.queue.Layout.add(this);
}else if(dC){var cX=this.getBounds();
if(cX){cY.resolve(dC).resize(cU,
cX.width,
cX.height);
this.__fv.setStyles({width:cX.width+a,
height:cX.height+a});
}}},
_applyShadow:function(dC,
dD){var cS=qx.ui.core.Widget.__fs;
var cY=qx.theme.manager.Decoration.getInstance();
var cD=this.__fq;
var dG;
if(dD){if(typeof dD===m){dG=dD.toHashCode();
}else{dG=dD;
dD=cY.resolve(dD);
}}var dH;
if(dC){if(typeof dC===m){dH=dC.toHashCode();
}else{dH=dC;
dC=cY.resolve(dC);
}}if(dD){if(!cS[dG]){cS[dG]=[];
}cD.remove(this.__fu);
cS[dG].push(this.__fu);
}if(dC){var cU;
if(cS[dH]&&cS[dH].length>0){cU=cS[dH].pop();
}else{cU=this.__fF(dC);
}cD.add(cU);
this.__fu=cU;
var cH=dC.getInsets();
cU.setStyles({left:(-cH.left)+a,
top:(-cH.top)+a});
var cX=this.getBounds();
if(cX){var cP=cX.width+cH.left+cH.right;
var cQ=cX.height+cH.top+cH.bottom;
dC.resize(cU,
cP,
cQ);
}}else{delete this.__fu;
}},
_applyTextColor:function(dC,
dD){},
_applyZIndex:function(dC,
dD){this.__fq.setStyle(p,
dC==null?0:dC);
},
_applyVisibility:function(dC,
dD){if(dC===f){this.__fq.show();
}else{this.__fq.hide();
}var cv=this.$$parent;
if(cv&&(dD==null||dC==null||dD===k||dC===k)){cv.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},
_applyOpacity:function(dC,
dD){this.__fq.setStyle(by,
dC==1?null:dC);
},
_applyCursor:function(dC,
dD){if(dC==null&&!this.isSelectable()){dC=O;
}this.__fq.setStyle(bJ,
dC);
},
_applyBackgroundColor:function(dC,
dD){var cM=this.getDecorator();
var cO=this.getShadow();
var dJ=this.getBackgroundColor();
var cD=this.__fq;
if(cM||cO){var cU=this.__ft;
if(cU){var cN=qx.theme.manager.Decoration.getInstance().resolve(cM);
cN.tint(this.__ft,
dJ);
}cD.setStyle(u,
null);
}else{var dK=qx.theme.manager.Color.getInstance().resolve(dJ);
cD.setStyle(u,
dK);
}},
_applyFont:function(dC,
dD){},
__fG:null,
$$stateChanges:null,
_forwardStates:null,
hasState:function(dL){var dM=this.__fG;
return dM&&dM[dL];
},
addState:function(dL){var dM=this.__fG;
if(!dM){dM=this.__fG={};
}
if(dM[dL]){return;
}this.__fG[dL]=true;
if(dL===w){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var dN=this._forwardStates;
var dO=this.__fJ;
if(dN&&dN[dL]&&dO){var dP;
for(var da in dO){dP=dO[da];
if(dP instanceof qx.ui.core.Widget){dO[da].addState(dL);
}}}},
removeState:function(dL){var dM=this.__fG;
if(!dM||!dM[dL]){return;
}delete this.__fG[dL];
if(dL===w){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var dN=this._forwardStates;
var dO=this.__fJ;
if(dN&&dN[dL]&&dO){for(var da in dO){var dP=dO[da];
if(dP instanceof qx.ui.core.Widget){dP.removeState(dL);
}}}},
replaceState:function(dD,
dC){var dM=this.__fG;
if(!dM){dM=this.__fG={};
}
if(!dM[dC]){dM[dC]=true;
}
if(dM[dD]){delete dM[dD];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var dN=this._forwardStates;
var dO=this.__fJ;
if(dN&&dN[dC]&&dO){for(var da in dO){var dP=dO[da];
if(dP instanceof qx.ui.core.Widget){dP.replaceState(dD,
dC);
}}}},
__fH:null,
__fI:null,
syncAppearance:function(){var dM=this.__fG;
var dQ=this.__fH;
var cL=qx.theme.manager.Appearance.getInstance();
var dR=qx.core.Property.$$method.setThemed;
var dS=qx.core.Property.$$method.resetThemed;
if(this.__fI){delete this.__fI;
if(dQ){var dT=cL.styleFrom(dQ,
dM);
if(dT){dQ=null;
}}}if(!dQ){var dU=this;
var da=[];
do{da.push(dU.$$subcontrol||dU.getAppearance());
}while(dU=dU.$$subparent);
dQ=this.__fH=da.reverse().join(cf).replace(/#[0-9]+/g,
cg);
}var dV=cL.styleFrom(dQ,
dM);
if(dV){if(dT){for(var dW in dT){if(dV[dW]===undefined){this[dS[dW]]();
}}}var dW;
var dW;
for(var dW in dV){dV[dW]===undefined?this[dS[dW]]():this[dR[dW]](dV[dW]);
}}else if(dT){for(var dW in dT){this[dS[dW]]();
}}},
_applyAppearance:function(dC,
dD){this.updateAppearance();
},
checkAppearanceNeeds:function(){if(!this.__fw){qx.ui.core.queue.Appearance.add(this);
this.__fw=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},
updateAppearance:function(){this.__fI=true;
qx.ui.core.queue.Appearance.add(this);
var dO=this.__fJ;
if(dO){var dU;
for(var da in dO){dU=dO[da];
if(dU instanceof qx.ui.core.Widget){dU.updateAppearance();
}}}},
syncWidget:function(){},
getEventTarget:function(){var dX=this;
while(dX.getAnonymous()){dX=dX.getLayoutParent();
if(!dX){return null;
}}return dX;
},
getFocusTarget:function(){var dX=this;
if(!dX.getEnabled()){return null;
}
while(dX.getAnonymous()||!dX.getFocusable()){dX=dX.getLayoutParent();
if(!dX||!dX.getEnabled()){return null;
}}return dX;
},
getFocusElement:function(){return this.__fq;
},
isTabable:function(){return this.getContainerElement().getDomElement()&&this.isFocusable();
},
_applyFocusable:function(dC,
dD){var dX=this.getFocusElement();
if(dC){var dY=this.getTabIndex();
if(dY==null){dY=1;
}dX.setAttribute(r,
dY);
if(qx.core.Variant.isSet(y,
M)){dX.setAttribute(bz,
bX);
}else{dX.setStyle(bB,
N);
}}else{if(dX.isNativelyFocusable()){dX.setAttribute(r,
-1);
}else if(dD){dX.setAttribute(r,
null);
}}},
_applyKeepFocus:function(dC){var dX=this.getFocusElement();
dX.setAttribute(cr,
dC?j:null);
},
_applyKeepActive:function(dC){var dX=this.getContainerElement();
dX.setAttribute(cl,
dC?j:null);
},
_applyTabIndex:function(dC){if(dC==null){dC=1;
}else if(dC<1||dC>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&dC!=null){this.getFocusElement().setAttribute(r,
dC);
}},
_applySelectable:function(dC){this._applyCursor(this.getCursor());
this.__fq.setAttribute(ci,
dC?j:bQ);
if(qx.core.Variant.isSet(y,
co)){this.__fq.setStyle(bp,
dC?bc:N);
}},
_applyEnabled:function(dC,
dD){if(dC===false){this.addState(C);
this.removeState(w);
if(this.isFocusable()){this.removeState(v);
this._applyFocusable(false,
true);
}}else{this.removeState(C);
if(this.isFocusable()){this._applyFocusable(true,
false);
}}},
_applyContextMenu:function(dC,
dD){if(dD){dD.removeState(s);
if(dD.getOpener()==this){dD.resetOpener();
}
if(!dC){this.removeListener(s,
this._onContextMenuOpen);
}}
if(dC){dC.setOpener(this);
dC.addState(s);
if(!dD){this.addListener(s,
this._onContextMenuOpen);
}}},
_onContextMenuOpen:function(ea){var eb=this.getContextMenu();
eb.placeToMouse(ea);
eb.show();
ea.preventDefault();
},
_onStopEvent:function(ea){ea.stopPropagation();
},
_applyDraggable:function(dC,
dD){qx.ui.core.DragDropCursor.getInstance();
if(dC){this.addListener(E,
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
}this.__fq.setAttribute(bm,
dC?j:null);
},
_applyDroppable:function(dC,
dD){this.__fq.setAttribute(bK,
dC?j:null);
},
_onDragStart:function(ea){qx.ui.core.DragDropCursor.getInstance().placeToMouse(ea);
this.getApplicationRoot().setGlobalCursor(O);
},
_onDrag:function(ea){qx.ui.core.DragDropCursor.getInstance().placeToMouse(ea);
},
_onDragEnd:function(ea){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,
-1000);
this.getApplicationRoot().resetGlobalCursor();
},
_onDragChange:function(ea){var ec=qx.ui.core.DragDropCursor.getInstance();
var ed=ea.getCurrentAction();
ed?ec.setAction(ed):ec.resetAction();
},
visualizeFocus:function(){this.addState(v);
},
visualizeBlur:function(){this.removeState(v);
},
scrollChildIntoView:function(cw,
ee,
ef,
eg){this.scrollChildIntoViewX(cw,
ee,
eg);
this.scrollChildIntoViewY(cw,
ef,
eg);
},
scrollChildIntoViewX:function(cw,
eh,
eg){this.__fr.scrollChildIntoViewX(cw.getContainerElement(),
eh,
eg);
},
scrollChildIntoViewY:function(cw,
eh,
eg){this.__fr.scrollChildIntoViewY(cw.getContainerElement(),
eh,
eg);
},
focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},
blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},
activate:function(){this.__fq.activate();
},
deactivate:function(){this.__fq.deactivate();
},
tabFocus:function(){this.getFocusElement().focus();
},
_hasChildControl:function(da){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
bW);
return this.hasChildControl(da);
},
hasChildControl:function(da){if(!this.__fJ){return false;
}return !!this.__fJ[da];
},
__fJ:null,
_getChildControl:function(da,
ei){qx.log.Logger.deprecatedMethodWarning(arguments.callee,
U);
return this.getChildControl(da,
ei);
},
getChildControl:function(da,
ei){if(!this.__fJ){if(ei){return null;
}this.__fJ={};
}var dP=this.__fJ[da];
if(dP){return dP;
}
if(ei===true){return null;
}return this._createChildControl(da);
},
_showChildControl:function(da){var dP=this.getChildControl(da);
dP.show();
return dP;
},
_excludeChildControl:function(da){var dP=this.getChildControl(da,
true);
if(dP){dP.exclude();
}},
_isChildControlVisible:function(da){var dP=this.getChildControl(da,
true);
if(dP){return dP.isVisible();
}return false;
},
_createChildControl:function(da){if(!this.__fJ){this.__fJ={};
}else if(this.__fJ[da]){throw new Error("Child control '"+da+"' already created!");
}var ej=da.indexOf(br);
if(ej==-1){var dP=this._createChildControlImpl(da);
}else{var dP=this._createChildControlImpl(da.substring(0,
ej));
}
if(!dP){throw new Error("Unsupported control: "+da);
}dP.$$subcontrol=da;
dP.$$subparent=this;
var dM=this.__fG;
var dN=this._forwardStates;
if(dM&&dN&&dP instanceof qx.ui.core.Widget){for(var dL in dM){if(dN[dL]){dP.addState(dL);
}}}return this.__fJ[da]=dP;
},
_createChildControlImpl:function(da){return null;
},
_disposeChildControls:function(){var dO=this.__fJ;
if(!dO){return;
}var ek=qx.ui.core.Widget;
for(var da in dO){var dP=dO[da];
if(!ek.contains(this,
dP)){dP.destroy();
}else{dP.dispose();
}}delete this.__fJ;
},
_findTopControl:function(){var dU=this;
while(dU){if(!dU.$$subparent){return dU;
}dU=dU.$$subparent;
}return null;
},
getContainerLocation:function(em){var en=this.getContainerElement().getDomElement();
return en?qx.bom.element.Location.get(en,
em):null;
},
getContentLocation:function(em){var en=this.getContentElement().getDomElement();
return en?qx.bom.element.Location.get(en,
em):null;
},
setDomLeft:function(dC){var en=this.getContainerElement().getDomElement();
if(en){en.style.left=dC+a;
}else{throw new Error("DOM element is not yet created!");
}},
setDomTop:function(dC){var en=this.getContainerElement().getDomElement();
if(en){en.style.top=dC+a;
}else{throw new Error("DOM element is not yet created!");
}},
setDomPosition:function(cy,
cz){var en=this.getContainerElement().getDomElement();
if(en){en.style.left=cy+a;
en.style.top=cz+a;
}else{throw new Error("DOM element is not yet created!");
}},
destroy:function(){if(this.$$disposed){return;
}var cv=this.$$parent;
if(cv){cv._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},
clone:function(){var eo=arguments.callee.base.call(this);
if(this.getChildren){var du=this.getChildren();
for(var cV=0,
cW=du.length;cV<cW;cV++){eo.add(du[cV].clone());
}}return eo;
},
serialize:function(){var ep=arguments.callee.base.call(this);
if(this.getChildren){var du=this.getChildren();
if(du.length>0){ep.children=[];
for(var cV=0,
cW=du.length;cV<cW;cV++){ep.children.push(du[cV].serialize());
}}}
if(this.getLayout){var cx=this.getLayout();
if(cx){ep.layout=cx.serialize();
}}return ep;
}},
destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){this.__fq.setAttribute(L,
null,
true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}this._disposeArray(bq);
this._disposeArray(V);
this._disposeFields(cb);
this._disposeObjects(bA,
bM,
bi,
cm,
bb,
bV);
}});
})();
(function(){var a="100%",
b="mshtml",
c="backgroundColor",
d="repeat",
e="opacity",
f="_applyBlockerColor",
g="Number",
h="zIndex",
j=")",
k="qx.client",
l="url(",
m="qx.ui.core.MBlocker",
n="__fN",
o="_applyBlockerOpacity",
p="Color",
q="qx/static/blank.gif",
r="absolute";
qx.Mixin.define(m,
{properties:{blockerColor:{check:p,
init:null,
nullable:true,
apply:f,
themeable:true},
blockerOpacity:{check:g,
init:1,
apply:o,
themeable:true}},
members:{__fK:null,
__fL:null,
__fM:null,
__fN:null,
__fO:null,
_applyBlockerColor:function(s,
t){var u=[];
this.__fK&&u.push(this.__fK);
this.__fN&&u.push(this.__fN);
for(var v=0;v<u.length;v++){u[v].setStyle(c,
qx.theme.manager.Color.getInstance().resolve(s));
}},
_applyBlockerOpacity:function(s,
t){var u=[];
this.__fK&&u.push(this.__fK);
this.__fN&&u.push(this.__fN);
for(var v=0;v<u.length;v++){u[v].setStyle(e,
s);
}},
__fP:function(){var w=new qx.html.Element().setStyles({position:r,
width:a,
height:a,
opacity:this.getBlockerOpacity(),
backgroundColor:qx.theme.manager.Color.getInstance().resolve(this.getBlockerColor())});
if(qx.core.Variant.isSet(k,
b)){w.setStyles({backgroundImage:l+qx.util.ResourceManager.toUri(q)+j,
backgroundRepeat:d});
}return w;
},
_getBlocker:function(){if(!this.__fK){this.__fK=this.__fP();
this.getContentElement().add(this.__fK);
this.__fK.exclude();
}return this.__fK;
},
block:function(){if(this.__fL){return;
}this.__fL=true;
this._getBlocker().include();
this.__fM=this.getAnonymous();
this.setAnonymous(true);
},
isBlocked:function(){return !!this.__fL;
},
unblock:function(){if(!this.__fL){return;
}this.__fL=false;
this.setAnonymous(this.__fM);
this._getBlocker().exclude();
},
_getContentBlocker:function(){if(!this.__fN){this.__fN=this.__fP();
this.getContentElement().add(this.__fN);
this.__fN.exclude();
}return this.__fN;
},
blockContent:function(x){var w=this._getContentBlocker();
w.setStyle(h,
x);
if(this.__fO){return;
}this.__fO=true;
w.include();
},
isContentBlocked:function(){return !!this.__fO;
},
unblockContent:function(){if(!this.__fO){return;
}this.__fO=false;
this._getContentBlocker().exclude();
}},
destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var a="qx.ui.window.Window",
b="changeModal",
c="changeVisibility",
d="changeActive",
f="_applyActiveWindow",
g="__fR",
h="__fQ",
i="qx.ui.window.MDesktop";
qx.Mixin.define(i,
{properties:{activeWindow:{check:a,
apply:f}},
members:{__fQ:null,
__fR:null,
getWindowManager:function(){if(!this.__fR){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__fR;
},
supportsMaximize:function(){return true;
},
setWindowManager:function(j){if(this.__fR){this.__fR.setDesktop(null);
}j.setDesktop(this);
this.__fR=j;
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
getWindows:function(){if(!this.__fQ){this.__fQ=[];
}return this.__fQ;
}},
destruct:function(){this._disposeArray(h);
this._disposeObjects(g);
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
j="_applyGlobalCursor",
k="__fS",
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
qx.ui.core.queue.Visibility.add(this);
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
apply:j,
event:b},
nativeContextMenu:{check:d,
nullable:true,
apply:h,
init:true}},
members:{__fS:null,
isRootWidget:function(){return true;
},
getLayout:function(){return this._getLayout();
},
_applyGlobalCursor:qx.core.Variant.select(l,
{"mshtml":function(q,
r){},
"default":function(q,
r){var s=qx.bom.Stylesheet;
var t=this.__fS;
if(!t){this.__fS=t=s.createElement();
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
destruct:function(){this._disposeFields(k);
},
defer:function(v,
w){qx.ui.core.MChildrenHandling.remap(w);
}});
})();
(function(){var a="resize",
b="position",
c="__fT",
d="0px",
f="$$widget",
g="qx.ui.root.Application",
h="hidden",
i="__fU",
j="div",
k="100%",
l="absolute";
qx.Class.define(g,
{extend:qx.ui.root.Abstract,
construct:function(m){this.__fT=qx.dom.Node.getWindow(m);
this.__fU=m;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__fT,
a,
this._onResize,
this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},
members:{__fT:null,
__fU:null,
_createContainerElement:function(){var m=this.__fU;
var n=m.documentElement.style;
var o=m.body.style;
n.overflow=o.overflow=h;
n.padding=n.margin=o.padding=o.margin=d;
n.width=n.height=o.width=o.height=k;
var p=m.createElement(j);
m.body.appendChild(p);
var q=new qx.html.Root(p);
q.setStyle(b,
l);
q.setAttribute(f,
this.toHashCode());
return q;
},
_onResize:function(r){qx.ui.core.queue.Layout.add(this);
},
_computeSizeHint:function(){var s=qx.bom.Viewport.getWidth(this.__fT);
var t=qx.bom.Viewport.getHeight(this.__fT);
return {minWidth:s,
width:s,
maxWidth:s,
minHeight:t,
height:t,
maxHeight:t};
}},
destruct:function(){this._disposeFields(c,
i);
}});
})();
(function(){var a="blur",
b="focus",
c="load",
d="input",
e="qx.ui.core.EventHandler",
f="__gi";
qx.Class.define(e,
{extend:qx.core.Object,
implement:qx.event.IEventHandler,
construct:function(){arguments.callee.base.call(this);
this.__gi=qx.event.Registration.getManager();
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
members:{__gi:null,
__gj:{focusin:1,
focusout:1,
focus:1,
blur:1},
__gk:{mouseover:1,
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
}if(this.__gj[j.getType()]){m=m&&m.getFocusTarget();
if(!m){return;
}}if(j.getRelatedTarget){var n=j.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(n);
while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__gj[j.getType()]){o=o.getFocusTarget();
}if(o===m){return;
}}}var p=j.getCurrentTarget();
var q=qx.ui.core.Widget.getWidgetByElement(p);
if(!q||q.isAnonymous()){return;
}if(this.__gj[j.getType()]){q=q.getFocusTarget();
}var h=j.getType();
if(!(q.isEnabled()||this.__gk[h])){return;
}var r=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var s=this.__gi.getListeners(q,
h,
r);
if(!s||s.length===0){return;
}var t=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(t);
t.setTarget(m);
t.setRelatedTarget(o||null);
t.setCurrentTarget(q);
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
members:{__gl:null,
__gm:null,
_createContentElement:function(){return new qx.html.Image();
},
_getContentHint:function(){return {width:this.__gl||0,
height:this.__gm||0};
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
this.__go(n.getImageWidth(j),
n.getImageHeight(j));
}else if(o.isLoaded(j)){m.setSource(j);
var q=o.getWidth(j);
var r=o.getHeight(j);
this.__go(q,
r);
}else{var s;
if(!qx.io2.ImageLoader.isFailed(j)){qx.io2.ImageLoader.load(j,
this.__gn,
this);
}}},
__gn:function(j,
t){if(j!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(!t){this.warn("Image could not be loaded: "+j);
return;
}this._styleSource();
},
__go:function(q,
r){if(q!==this.__gl||r!==this.__gm){this.__gl=q;
this.__gm=r;
qx.ui.core.queue.Layout.add(this);
}}}});
})();
(function(){var a="interval",
b="Integer",
c="resize",
d="Boolean",
e="disappear",
f="bottom-left",
g="offsetLeft",
h="offsetRight",
i="right-top",
j="top-right",
k="top-left",
l="bottom-right",
m="right-bottom",
n="offsetBottom",
o="qx.ui.core.MPlacement",
p="left-top",
q="left-bottom",
r="shorthand",
s="offsetTop";
qx.Mixin.define(o,
{properties:{position:{check:[k,
j,
f,
l,
p,
q,
i,
m],
init:f,
themeable:true},
domMove:{check:d,
init:false},
smart:{check:d,
init:true,
themeable:true},
offsetLeft:{check:b,
init:0,
themeable:true},
offsetTop:{check:b,
init:0,
themeable:true},
offsetRight:{check:b,
init:0,
themeable:true},
offsetBottom:{check:b,
init:0,
themeable:true},
offset:{group:[s,
h,
n,
g],
mode:r,
themeable:true}},
members:{__gp:null,
__gq:null,
getLayoutLocation:function(t){var u,
v,
w,
x;
v=t.getBounds();
w=v.left;
x=v.top;
var y=v;
t=t.getLayoutParent();
while(t&&!t.isRootWidget()){v=t.getBounds();
w+=v.left;
x+=v.top;
u=t.getInsets();
w+=u.left;
x+=u.top;
t=t.getLayoutParent();
}if(t.isRootWidget()){var z=t.getContainerLocation();
if(z){w+=z.left;
x+=z.top;
}}return {left:w,
top:x,
right:w+y.width,
bottom:x+y.height};
},
moveTo:function(w,
x){if(this.getDomMove()){this.setDomPosition(w,
x);
}else{this.setLayoutProperties({left:w,
top:x});
}},
placeToWidget:function(A,
B){if(B){this.__gq=qx.lang.Function.bind(this.placeToWidget,
this,
A,
false);
qx.event.Idle.getInstance().addListener(a,
this.__gq);
this.addListener(e,
function(){if(this.__gq){qx.event.Idle.getInstance().removeListener(a,
this.__gq);
this.__gq=null;
}},
this);
}var C=A.getContainerLocation()||this.getLayoutLocation(A);
this.__gr(C);
},
placeToMouse:function(D){var w=D.getDocumentLeft();
var x=D.getDocumentTop();
var C={left:w,
top:x,
right:w,
bottom:x};
this.__gr(C);
},
placeToElement:function(E,
B){var F=qx.bom.element.Location.get(E);
var C={left:F.left,
top:F.top,
right:F.left+E.offsetWidth,
bottom:F.top+E.offsetHeight};
if(B){this.__gq=qx.lang.Function.bind(this.placeToElement,
this,
E,
false);
qx.event.Idle.getInstance().addListener(a,
this.__gq);
this.addListener(e,
function(){if(this.__gq){qx.event.Idle.getInstance().removeListener(a,
this.__gq);
this.__gq=null;
}},
this);
}this.__gr(C);
},
placeToPoint:function(G){var C={left:G.left,
top:G.top,
right:G.left,
bottom:G.top};
this.__gr(C);
},
__gr:function(C){var y=this.getBounds();
if(y==null){if(!this.__gp){this.addListener(c,
this.__gr);
}this.__gp=C;
return;
}else if(this.__gp){C=this.__gp;
delete this.__gp;
this.removeListener(c,
this.__gr);
}var H=this.getLayoutParent().getBounds();
var I=this.getPosition();
var J=this.getSmart();
var K={left:this.getOffsetLeft(),
top:this.getOffsetTop(),
right:this.getOffsetRight(),
bottom:this.getOffsetBottom()};
var L=qx.util.PlaceUtil.compute(y,
H,
C,
I,
J,
K);
this.moveTo(L.left,
L.top);
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
(function(){var a="source",
b="scale",
c="no-repeat",
d="mshtml",
e="qx.client",
f="qx.html.Image";
qx.Class.define(f,
{extend:qx.html.Element,
members:{_applyProperty:function(g,
h){arguments.callee.base.call(this,
g,
h);
if(g===a){var i=this.getDomElement();
var j=this.getAllStyles();
var k=this._getProperty(a);
var l=this._getProperty(b);
var m=l?b:c;
qx.bom.element.Decoration.update(i,
k,
m,
j);
}},
_createDomElement:function(){var l=this._getProperty(b);
var m=l?b:c;
if(qx.core.Variant.isSet(e,
d)){var k=this._getProperty(a);
this.setNodeName(qx.bom.element.Decoration.getTagName(m,
k));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(m));
}return arguments.callee.base.call(this);
},
_copyData:function(n){return arguments.callee.base.call(this,
true);
},
setSource:function(h){this._setProperty(a,
h);
return this;
},
getSource:function(){return this._getProperty(a);
},
resetSource:function(){this._removeProperty(a);
return this;
},
setScale:function(h){this._setProperty(b,
h);
return this;
},
getScale:function(){return this._getProperty(b);
}}});
})();
(function(){var a="interval",
b="__gs",
c="Number",
d="_applyTimeoutInterval",
e="qx.event.type.Event",
f="qx.event.Idle",
g="singleton";
qx.Class.define(f,
{extend:qx.core.Object,
type:g,
construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(a,
this._onInterval,
this);
h.start();
this.__gs=h;
},
events:{"interval":e},
properties:{timeoutInterval:{check:c,
init:100,
apply:d}},
members:{__gs:null,
_applyTimeoutInterval:function(i){this.__gs.setInterval(i);
},
_onInterval:function(){this.fireEvent(a);
}},
destruct:function(){if(this.__gs){this.__gs.stop();
}this._disposeFields(b);
}});
})();
(function(){var a="interval",
b="qx.event.Timer",
c="_applyInterval",
d="_applyEnabled",
f="Boolean",
g="__gu",
h="qx.event.type.Event",
i="Integer",
j="__gt";
qx.Class.define(b,
{extend:qx.core.Object,
construct:function(k){arguments.callee.base.call(this);
this.setEnabled(false);
if(k!=null){this.setInterval(k);
}this.__gt=qx.lang.Function.bind(this._oninterval,
this);
},
events:{"interval":h},
statics:{once:function(l,
m,
n){var o=new qx.event.Timer(n);
o.addListener(a,
function(p){o.stop();
l.call(m,
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
members:{__gu:null,
_applyInterval:function(q,
r){if(this.getEnabled()){this.restart();
}},
_applyEnabled:function(q,
r){if(r){window.clearInterval(this.__gu);
this.__gu=null;
}else if(q){this.__gu=window.setInterval(this.__gt,
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
destruct:function(){if(this.__gu){window.clearInterval(this.__gu);
}this._disposeFields(g,
j);
}});
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
c="activate",
d="__gv",
f="Tab",
g="singleton",
h="__gw",
j="deactivate",
k="__gx",
m="__gy",
n="focusin",
o="qx.ui.core.FocusHandler";
qx.Class.define(o,
{extend:qx.core.Object,
type:g,
construct:function(){arguments.callee.base.call(this);
this.__gv={};
},
members:{__gv:null,
__gw:null,
__gx:null,
__gy:null,
connectTo:function(p){p.addListener(a,
this.__gz,
this);
p.addListener(n,
this._onFocusIn,
this,
true);
p.addListener(b,
this._onFocusOut,
this,
true);
p.addListener(c,
this._onActivate,
this,
true);
p.addListener(j,
this._onDeactivate,
this,
true);
},
addRoot:function(q){this.__gv[q.$$hash]=q;
},
removeRoot:function(q){delete this.__gv[q.$$hash];
},
getActiveWidget:function(){return this.__gw;
},
isActive:function(q){return this.__gw==q;
},
getFocusedWidget:function(){return this.__gx;
},
isFocused:function(q){return this.__gx==q;
},
isFocusRoot:function(q){return !!this.__gv[q.$$hash];
},
_onActivate:function(r){var s=r.getTarget();
this.__gw=s;
var p=this.__gA(s);
if(p!=this.__gy){this.__gy=p;
}},
_onDeactivate:function(r){var s=r.getTarget();
if(this.__gw==s){this.__gw=null;
}},
_onFocusIn:function(r){var s=r.getTarget();
if(s!=this.__gx){this.__gx=s;
s.visualizeFocus();
}},
_onFocusOut:function(r){var s=r.getTarget();
if(s==this.__gx){this.__gx=null;
s.visualizeBlur();
}},
__gz:function(r){if(r.getKeyIdentifier()!=f){return;
}
if(!this.__gy){return;
}r.stopPropagation();
r.preventDefault();
var t=this.__gx;
if(!r.isShiftPressed()){var u=t?this.__gE(t):this.__gC();
}else{var u=t?this.__gF(t):this.__gD();
}if(u){u.tabFocus();
}},
__gA:function(q){var v=this.__gv;
while(q){if(v[q.$$hash]){return q;
}q=q.getLayoutParent();
}return null;
},
__gB:function(w,
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
__gC:function(){return this.__gI(this.__gy,
null);
},
__gD:function(){return this.__gJ(this.__gy,
null);
},
__gE:function(q){var p=this.__gy;
if(p==q){return this.__gC();
}
while(q&&q.getAnonymous()){q=q.getLayoutParent();
}
if(q==null){return [];
}var H=[];
this.__gG(p,
q,
H);
H.sort(this.__gB);
var I=H.length;
return I>0?H[0]:this.__gC();
},
__gF:function(q){var p=this.__gy;
if(p==q){return this.__gD();
}
while(q&&q.getAnonymous()){q=q.getLayoutParent();
}
if(q==null){return [];
}var H=[];
this.__gH(p,
q,
H);
H.sort(this.__gB);
var I=H.length;
return I>0?H[I-1]:this.__gD();
},
__gG:function(J,
q,
H){var K=J.getLayoutChildren();
var L;
for(var M=0,
N=K.length;M<N;M++){L=K[M];
if(!(L instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(L)&&L.isEnabled()){if(L.isTabable()&&this.__gB(q,
L)<0){H.push(L);
}this.__gG(L,
q,
H);
}}},
__gH:function(J,
q,
H){var K=J.getLayoutChildren();
var L;
for(var M=0,
N=K.length;M<N;M++){L=K[M];
if(!(L instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(L)&&L.isEnabled()){if(L.isTabable()&&this.__gB(q,
L)>0){H.push(L);
}this.__gH(L,
q,
H);
}}},
__gI:function(J,
O){var K=J.getLayoutChildren();
var L;
for(var M=0,
N=K.length;M<N;M++){L=K[M];
if(!(L instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(L)&&L.isEnabled()){if(L.isTabable()){if(O==null||this.__gB(L,
O)<0){O=L;
}}O=this.__gI(L,
O);
}}return O;
},
__gJ:function(J,
P){var K=J.getLayoutChildren();
var L;
for(var M=0,
N=K.length;M<N;M++){L=K[M];
if(!(L instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(L)&&L.isEnabled()){if(L.isTabable()){if(P==null||this.__gB(L,
P)>0){P=L;
}}P=this.__gJ(L,
P);
}}return P;
}},
destruct:function(){this._disposeMap(d);
this._disposeFields(k,
h,
m);
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
b="__gK",
c="__gL",
d="qx.ui.layout.Abstract";
qx.Class.define(d,
{type:a,
extend:qx.core.Object,
members:{__gK:null,
_invalidChildrenCache:null,
__gL:null,
invalidateLayoutCache:function(){this.__gK=null;
},
renderLayout:function(e,
f){this.warn("Missing renderLayout() implementation!");
},
getSizeHint:function(){if(this.__gK){return this.__gK;
}return this.__gK=this._computeSizeHint();
},
hasHeightForWidth:function(){return false;
},
getHeightForWidth:function(g){this.warn("Missing getHeightForWidth() implementation!");
return null;
},
_computeSizeHint:function(){return null;
},
invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},
verifyLayoutProperty:null,
_clearSeparators:function(){var h=this.__gL;
if(h instanceof qx.ui.core.LayoutItem){h.clearSeparators();
}},
_renderSeparator:function(i,
j){this.__gL.renderSeparator(i,
j);
},
connectToWidget:function(h){if(h&&this.__gL){throw new Error("It is not possible to manually set the connected widget.");
}this.__gL=h;
this.invalidateChildrenCache();
},
_applyLayoutChange:function(){if(this.__gL){this.__gL.scheduleLayoutUpdate();
}},
_getLayoutChildren:function(){return this.__gL.getLayoutChildren();
}},
destruct:function(){this._disposeFields(c,
b);
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
members:{useElement:function(b){arguments.callee.base.call(this,
b);
this.setRoot(true);
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
h="__tU",
j="feedreader.model.Article",
k="add",
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
this.__tU=[];
},
events:{"add":d,
"remove":d},
properties:{selected:{check:j,
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
members:{clearArticles:function(){var u=this.__tU;
for(var v=0,
w=u.length;v<w;v++){this.fireDataEvent(f,
u[v]);
u[v].dispose();
}u.length=0;
this.resetSelected();
},
removeArticles:function(x){qx.lang.Array.remove(this.__tU,
x);
this.fireDataEvent(f,
x);
},
addArticle:function(x){this.__tU.push(x);
this.fireDataEvent(k,
x);
},
getArticles:function(){return this.__tU;
}},
destruct:function(){this._disposeArray(h);
}});
})();
(function(){var a="qx.event.type.DataEvent",
b="feedreader.model.FeedList",
c="add",
d="__tV",
e="change",
f="feedreader.model.Feed",
g="remove";
qx.Class.define(b,
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__tV=[];
},
events:{"add":a,
"remove":a},
properties:{selected:{check:f,
nullable:true,
init:null,
event:e}},
members:{getFeeds:function(){return this.__tV;
},
addFeed:function(h){this.__tV.push(h);
this.fireDataEvent(c,
h);
if(!this.getSelected()){this.setSelected(h);
}},
removeFeed:function(h){qx.lang.Array.remove(this.__tV,
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
j="__lY",
k="qx.ui.layout.Dock",
l="_applySort",
m="west",
n="__ma",
o="north",
p="south",
q="center",
r="east",
s="Boolean",
t="bottom",
u="right";
qx.Class.define(k,
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
apply:l},
separatorX:{check:d,
nullable:true,
apply:a},
separatorY:{check:d,
nullable:true,
apply:a},
connectSeparators:{check:s,
init:false,
apply:a},
spacingX:{check:e,
init:0,
apply:a},
spacingY:{check:e,
init:0,
apply:a}},
members:{__lY:null,
__ma:null,
verifyLayoutProperty:null,
_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__mb:{north:1,
south:2,
west:3,
east:4,
center:5},
__mc:{1:c,
2:t,
3:b,
4:u},
__md:function(){var z=this._getLayoutChildren();
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
if(F===q){if(B){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}B=A;
}else if(H||G){if(F===o||F===p){G?D.push(A):E.push(A);
}else if(F===m||F===r){G?E.push(A):D.push(A);
}}else{D.push(A);
}}var J=D.concat(E);
if(B){J.push(B);
}this.__lY=J;
var K=[];
for(var I=0;I<C;I++){F=J[I].getLayoutProperties().edge;
K[I]=this.__mb[F]||5;
}this.__ma=K;
delete this._invalidChildrenCache;
},
renderLayout:function(L,
M){if(this._invalidChildrenCache){this.__md();
}var N=qx.ui.layout.Util;
var O=this.__lY;
var K=this.__ma;
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
var br=this.__mc;
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
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__md();
}var O=this.__lY;
var K=this.__ma;
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
destruct:function(){this._disposeFields(n,
j);
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
e="__hP",
f="Decorator",
g="__hQ",
h="middle",
j="baseline",
k="bottom",
m="Boolean",
n="__hS",
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
h,
k,
j],
init:d,
apply:a},
spacing:{check:q,
init:0,
apply:a},
separator:{check:f,
nullable:true,
apply:a},
reversed:{check:m,
init:false,
apply:p}},
members:{__hP:null,
__hQ:null,
__hR:null,
__hS:null,
_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__hT:function(){var v=this._getLayoutChildren();
var w=v.length;
var x=false;
var y=this.__hP&&this.__hP.length!=w&&this.__hQ&&this.__hP;
var z;
var A=y?this.__hP:new Array(w);
var B=y?this.__hQ:new Array(w);
if(this.getReversed()){v=v.concat().reverse();
}for(var C=0;C<w;C++){z=v[C].getLayoutProperties();
if(z.width!=null){A[C]=parseFloat(z.width)/100;
}
if(z.flex!=null){B[C]=z.flex;
x=true;
}}if(!y){this.__hP=A;
this.__hQ=B;
}this.__hR=x;
this.__hS=v;
delete this._invalidChildrenCache;
},
verifyLayoutProperty:null,
renderLayout:function(D,
E){if(this._invalidChildrenCache){this.__hT();
}var v=this.__hS;
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
for(C=0;C<w;C+=1){J=this.__hP[C];
I=J!=null?Math.floor((D-G)*J):v[C].getSizeHint().width;
A.push(I);
K+=I;
}if(this.__hR&&K!=D){var L={};
var M,
N;
for(C=0;C<w;C+=1){M=this.__hQ[C];
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
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hT();
}var F=qx.ui.layout.Util;
var v=this.__hS;
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
Y+=this.__hQ[C]>0?Q.minWidth:Q.width;
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
destruct:function(){this._disposeFields(e,
g,
n);
}});
})();
(function(){var a="qx.dynlocale",
b="changeLocale",
c="on",
d="color",
f="qx.ui.basic.Label",
g="_applyRich",
h="A",
i="_applyTextAlign",
j="Boolean",
k="_applyContent",
l="label",
m="textAlign",
n="center",
o="__gO",
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
properties:{rich:{check:j,
init:false,
apply:g},
content:{check:r,
apply:k,
event:p,
nullable:true},
textAlign:{check:[q,
n,
s],
nullable:true,
themeable:true,
apply:i},
appearance:{refine:true,
init:l},
selectable:{refine:true,
init:false},
allowGrowX:{refine:true,
init:false},
allowGrowY:{refine:true,
init:false},
allowShrinkY:{refine:true,
init:false}},
members:{__gO:null,
__gP:null,
_getContentHint:function(){if(this.__gP){this.__gR();
delete this.__gP;
}return {width:this.__gQ.width,
height:this.__gQ.height};
},
_hasHeightForWidth:function(){return this.getRich();
},
_getContentHeightForWidth:function(u){if(!this.getRich()){return null;
}var v=this.__gO?this.__gO.getStyles():qx.bom.Font.getDefaultStyles();
return qx.bom.Label.getHtmlSize(this.getContent(),
v,
u).height;
},
_createContentElement:function(){return new qx.html.Label;
},
_applyTextAlign:function(w,
x){this.getContentElement().setStyle(m,
w);
},
_applyTextColor:function(w,
x){if(w){this.getContentElement().setStyle(d,
qx.theme.manager.Color.getInstance().resolve(w));
}else{this.getContentElement().removeStyle(d);
}},
__gQ:{width:0,
height:0},
_applyFont:function(w,
x){var v;
if(w){this.__gO=qx.theme.manager.Font.getInstance().resolve(w);
v=this.__gO.getStyles();
}else{this.__gO=null;
v=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(v);
this.__gP=true;
qx.ui.core.queue.Layout.add(this);
},
__gR:function(){var y=qx.bom.Label;
var z=this.getFont();
var v=z?this.__gO.getStyles():qx.bom.Font.getDefaultStyles();
var t=this.getContent()||h;
var A=this.getRich();
this.__gQ=A?y.getHtmlSize(t,
v):y.getTextSize(t,
v);
},
_applyRich:function(w){this.getContentElement().setRich(w);
this.__gP=true;
qx.ui.core.queue.Layout.add(this);
},
_onChangeLocale:qx.core.Variant.select(a,
{"on":function(B){var t=this.getContent();
if(t.translate){this.setContent(t.translate());
}},
"off":null}),
_applyContent:function(w){this.getContentElement().setContent(w);
this.__gP=true;
qx.ui.core.queue.Layout.add(this);
}},
destruct:function(){if(qx.core.Variant.isSet(a,
c)){qx.locale.Manager.getInstance().removeListener(b,
this._onChangeLocale,
this);
}this._disposeFields(o);
}});
})();
(function(){var a="qx.bom.client.Locale",
b="-",
c="";
qx.Bootstrap.define(a,
{statics:{LOCALE:"",
VARIANT:"",
__gS:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var e=c;
var f=d.indexOf(b);
if(f!=-1){e=d.substr(f+1);
d=d.substr(0,
f);
}this.LOCALE=d;
this.VARIANT=e;
}},
defer:function(g){g.__gS();
}});
})();
(function(){var a="qx.core.BaseString";
qx.Class.define(a,
{extend:String,
construct:function(b){{};
this.__gT=b;
},
members:{__gT:null,
toString:function(){return this.__gT;
},
valueOf:function(){return this.__gT;
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
this.__gU=c;
this.__gV=d;
},
members:{__gU:null,
__gV:null,
translate:function(){return qx.locale.Manager.getInstance().translate(this.__gU,
this.__gV);
}}});
})();
(function(){var a="_",
b="",
c="qx.dynlocale",
d="on",
e="_applyLocale",
f="changeLocale",
g="C",
h="__gW",
j="qx.locale.Manager",
k="String",
l="singleton",
m="__gX";
qx.Class.define(j,
{type:l,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__gW=window.qxtranslations||{};
this.__gX=window.qxlocales||{};
var n=qx.bom.client.Locale;
var o=n.LOCALE;
var p=n.VARIANT;
if(p!==b){o+=a+p;
}this.setLocale(o||this.__gY);
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
properties:{locale:{check:k,
nullable:true,
apply:e,
event:f}},
members:{__gY:g,
__ha:null,
__hb:null,
__gW:null,
__gX:null,
getLanguage:function(){return this.__hb;
},
getTerritory:function(){return this.getLocale().split(a)[1]||b;
},
getAvailableLocales:function(){var x=[];
for(var o in this.__gX){if(o!=this.__gY){x.push(o);
}}return x;
},
__hc:function(o){var y;
var z=o.indexOf(a);
if(z==-1){y=o;
}else{y=o.substring(0,
z);
}return y;
},
_applyLocale:function(A,
B){this.__ha=A;
this.__hb=this.__hc(A);
},
addTranslation:function(C,
D){var E=this.__gW;
if(E[C]){for(var F in D){E[C][F]=D[F];
}}else{E[C]=D;
}},
translate:function(q,
s,
o){var G;
var E=this.__gW;
if(!E){return q;
}
if(o){var y=this.__hc(o);
}else{o=this.__ha;
y=this.__hb;
}
if(!G&&E[o]){G=E[o][q];
}
if(!G&&E[y]){G=E[y][q];
}
if(!G&&E[this.__gY]){G=E[this.__gY][q];
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
var E=this.__gX;
if(!E){return q;
}
if(o){var y=this.__hc(o);
}else{o=this.__ha;
y=this.__hb;
}
if(!G&&E[o]){G=E[o][q];
}
if(!G&&E[y]){G=E[y][q];
}
if(!G&&E[this.__gY]){G=E[this.__gY][q];
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
destruct:function(){this._disposeFields(h,
m);
}});
})();
(function(){var a="qx.client",
b="gecko",
c="div",
d="",
e="hidden",
f="auto",
g="value",
h="inherit",
i="text",
j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",
k="nowrap",
l="visible",
m="ellipsis",
n="normal",
o="label",
p="-1000px",
q="absolute",
r="px",
s="crop",
t="end",
u="100%",
v="qx.bom.Label",
w="opera",
x="block",
y="none",
z="mshtml|opera";
qx.Class.define(v,
{statics:{__hd:{fontFamily:1,
fontSize:1,
fontWeight:1,
fontStyle:1,
lineHeight:1},
__he:function(){var A=document.createElement(c);
var B=A.style;
B.width=B.height=f;
B.left=B.top=p;
B.visibility=e;
B.position=q;
B.overflow=l;
B.whiteSpace=k;
if(qx.core.Variant.isSet(a,
b)){var C=document.createElementNS(j,
o);
for(var D in this.__hd){C.style[D]=h;
}A.appendChild(C);
}document.body.insertBefore(A,
document.body.firstChild);
return this._textElement=A;
},
__hf:function(){var A=qx.bom.Element.create(c);
var B=A.style;
B.width=B.height=f;
B.left=B.top=p;
B.visibility=e;
B.position=q;
B.overflow=l;
B.whiteSpace=n;
document.body.insertBefore(A,
document.body.firstChild);
return this._htmlElement=A;
},
__hg:function(E){var F={};
if(E){F.whiteSpace=n;
}else if(qx.core.Variant.isSet(a,
b)){F.display=x;
}else{F.overflow=e;
F.whiteSpace=k;
F.textOverflow=m;
if(qx.core.Variant.isSet(a,
w)){F.OTextOverflow=m;
}}F.userSelect=y;
return F;
},
create:function(G,
E,
H){if(!H){H=window;
}
if(E){var A=H.document.createElement(c);
A.useHtml=true;
}else if(qx.core.Variant.isSet(a,
b)){var A=H.document.createElement(c);
var I=H.document.createElementNS(j,
o);
I.style.cursor=h;
I.style.overflow=e;
I.style.maxWidth=u;
for(var D in this.__hd){I.style[D]=h;
}I.setAttribute(s,
t);
A.appendChild(I);
}else{var A=H.document.createElement(c);
qx.bom.element.Style.setStyles(A,
this.__hg(false));
}
if(G){this.setContent(A,
G);
}return A;
},
setContent:function(J,
K){K=K||d;
if(J.useHtml){J.innerHTML=K;
}else if(qx.core.Variant.isSet(a,
b)){J.firstChild.setAttribute(g,
K);
}else{qx.bom.element.Attribute.set(J,
i,
K);
}},
getContent:function(J){if(J.useHtml){return J.innerHTML;
}else if(qx.core.Variant.isSet(a,
b)){return J.firstChild.getAttribute(g)||d;
}else{return qx.bom.element.Attribute.get(J,
i);
}},
getHtmlSize:function(G,
F,
L){var J=this._htmlElement||this.__hf();
var M=this.__hd;
if(!F){F={};
}
for(var D in M){J.style[D]=F[D]||d;
}J.style.width=L!=null?L+r:f;
J.innerHTML=G;
return qx.bom.element.Dimension.getSize(J);
},
getTextSize:function(N,
F){var J=this._textElement||this.__he();
var M=this.__hd;
if(!F){F={};
}
for(var D in M){J.style[D]=F[D]||d;
}if(qx.core.Variant.isSet(a,
b)){J.firstChild.setAttribute(g,
N);
}else if(qx.core.Variant.isSet(a,
z)){J.innerText=N;
}else{J.textContent=N;
}var O=qx.bom.element.Dimension.getSize(J);
if(qx.core.Variant.isSet(a,
b)){if(!qx.bom.client.Platform.WIN){O.width++;
}}return O;
}}});
})();
(function(){var a="qx.client",
b="qx.bom.element.Dimension";
qx.Class.define(b,
{statics:{getWidth:qx.core.Variant.select(a,
{"gecko":function(c){if(c.getBoundingClientRect){var d=c.getBoundingClientRect();
return Math.round(d.right)-Math.round(d.left);
}else{return c.offsetWidth;
}},
"default":function(c){return c.offsetWidth;
}}),
getHeight:qx.core.Variant.select(a,
{"gecko":function(c){if(c.getBoundingClientRect){var d=c.getBoundingClientRect();
return Math.round(d.bottom)-Math.round(d.top);
}else{return c.offsetHeight;
}},
"default":function(c){return c.offsetHeight;
}}),
getSize:qx.core.Variant.select(a,
{"gecko":function(c){if(c.getBoundingClientRect){var d=c.getBoundingClientRect();
return {width:Math.round(d.right)-Math.round(d.left),
height:Math.round(d.bottom)-Math.round(d.top)};
}else{return {width:c.offsetWidth,
height:c.offsetHeight};
}},
"default":function(c){return {width:c.offsetWidth,
height:c.offsetHeight};
}}),
getClientWidth:function(c){return c.clientWidth;
},
getClientHeight:function(c){return c.clientHeight;
},
getScrollWidth:function(c){return c.scrollWidth;
},
getScrollHeight:function(c){return c.scrollHeight;
}}});
})();
(function(){var a="content",
b="qx.html.Label";
qx.Class.define(b,
{extend:qx.html.Element,
members:{__hh:null,
_applyProperty:function(c,
d){arguments.callee.base.call(this,
c,
d);
if(c==a){var e=this.getDomElement();
qx.bom.Label.setContent(e,
d);
}},
_createDomElement:function(){var f=this.__hh;
var g=qx.bom.Label.create(this._content,
f);
return g;
},
_copyData:function(h){return arguments.callee.base.call(this,
true);
},
setRich:function(d){var e=this.getDomElement();
if(e){throw new Error("The label mode cannot be modified after initial creation");
}d=!!d;
if(this.__hh==d){return;
}this.__hh=d;
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
members:{checkAppearanceNeeds:function(){},
addChildrenToQueue:function(d){},
destroy:function(){if(this.$$disposed){return;
}var e=this.$$parent;
if(e){e._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
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
if(s instanceof qx.ui.menubar.Button){r.push(s);
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
A){var v=this.getChildControl(a,
true);
if(v){v.setContent(z);
}this._handleLabel();
},
_applyRich:function(z,
A){var v=this.getChildControl(a,
true);
if(v){v.setRich(z);
}},
_applyIcon:function(z,
A){var w=this.getChildControl(b,
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
d="qx.ui.menubar.Button",
f="keydown",
g="menubar-button",
h="keyup";
qx.Class.define(d,
{extend:qx.ui.form.MenuButton,
construct:function(i,
j,
k){arguments.callee.base.call(this,
i,
j,
k);
this.removeListener(f,
this._onKeyDown);
this.removeListener(h,
this._onKeyUp);
},
properties:{appearance:{refine:true,
init:g},
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
h="__iJ",
j="Enter",
k="__iI",
l="Up",
m="Escape",
n="blur",
o="qx.ui.menu.Manager",
p="Left",
q="__iK",
r="Down",
s="Right",
t="singleton",
u="Space";
qx.Class.define(o,
{type:t,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__iI=[];
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
this.__iJ=new qx.event.Timer;
this.__iJ.addListener(d,
this._onOpenInterval,
this);
this.__iK=new qx.event.Timer;
this.__iK.addListener(d,
this._onCloseInterval,
this);
},
members:{__iL:null,
__iM:null,
__iJ:null,
__iK:null,
__iI:null,
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
var G=this.__iI;
G.push(F);
F.setZIndex(1e6+G.length);
},
remove:function(F){{};
var G=this.__iI;
if(G){qx.lang.Array.remove(G,
F);
}},
hideAll:function(){var G=this.__iI;
if(G){for(var D=G.length-1;D>=0;D--){G[D].exclude();
}}},
getActiveMenu:function(){var G=this.__iI;
return G.length>0?G[G.length-1]:null;
},
scheduleOpen:function(w){this.cancelClose(w);
if(w.isVisible()){if(this.__iL){this.cancelOpen(this.__iL);
}}else if(this.__iL!=w){this.__iL=w;
this.__iJ.restartWith(w.getOpenInterval());
}},
scheduleClose:function(w){this.cancelOpen(w);
if(!w.isVisible()){if(this.__iM){this.cancelClose(this.__iM);
}}else if(this.__iM!=w){this.__iM=w;
this.__iK.restartWith(w.getCloseInterval());
}},
cancelOpen:function(w){if(this.__iL==w){this.__iJ.stop();
this.__iL=null;
}},
cancelClose:function(w){if(this.__iM==w){this.__iK.stop();
this.__iM=null;
}},
_onOpenInterval:function(H){this.__iJ.stop();
this.__iL.open();
this.__iL=null;
},
_onCloseInterval:function(H){this.__iK.stop();
this.__iM.exclude();
this.__iM=null;
},
_onMouseDown:function(H){var I=H.getTarget();
if(I.getMenu&&I.getMenu()&&I.getMenu().isVisible()){return;
}if(this.__iI.length>0&&!this._isInMenu(I)){this.hideAll();
}},
_onMouseUp:function(H){var I=H.getTarget();
if(!(I instanceof qx.ui.menu.Menu)){this.hideAll();
}},
__iN:{"Enter":1,
"Space":1},
__iO:{"Escape":1,
"Up":1,
"Down":1,
"Left":1,
"Right":1},
_onKeyUpDown:function(H){var w=this.getActiveMenu();
if(!w){return;
}var J=H.getKeyIdentifier();
if(this.__iO[J]||(this.__iN[J]&&w.getSelectedButton())){H.stopPropagation();
}},
_onKeyPress:function(H){var w=this.getActiveMenu();
if(!w){return;
}var J=H.getKeyIdentifier();
var K=this.__iO[J];
var L=this.__iN[J];
if(K){switch(J){case l:this._onKeyPressUp(w);
break;
case r:this._onKeyPressDown(w);
break;
case p:this._onKeyPressLeft(w);
break;
case s:this._onKeyPressRight(w);
break;
case m:this.hideAll();
break;
}H.stopPropagation();
}else if(L){var M=w.getSelectedButton();
if(M){switch(J){case j:this._onKeyPressEnter(w,
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
}else if(P instanceof qx.ui.menubar.Button){var R=P.getToolBar().getMenuButtons();
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
if(P instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!P){return;
}}if(P instanceof qx.ui.menubar.Button){var R=P.getToolBar().getMenuButtons();
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
}this._disposeObjects(h,
q);
this._disposeArray(k);
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
this.initKeepFocus();
this.initKeepActive();
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
members:{__iP:null,
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
this.__iP=z;
}else{var A=this.getOpenedButton();
if(A){u.scheduleClose(A.getMenu());
}
if(this.__iP){u.cancelOpen(this.__iP);
this.__iP=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},
_onMouseOut:function(x){var u=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,
x.getRelatedTarget())){var A=this.getOpenedButton();
A?this.setSelectedButton(A):this.resetSelectedButton();
if(A){u.cancelClose(A.getMenu());
}if(this.__iP){u.cancelOpen(this.__iP);
}}}}});
})();
(function(){var a="_applyLayoutChange",
b="top",
c="left",
d="middle",
e="__hU",
f="Decorator",
g="center",
h="__hX",
j="baseline",
k="bottom",
m="qx.ui.layout.VBox",
n="_applyReversed",
o="Integer",
p="__hV",
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
k],
init:b,
apply:a},
alignX:{check:[c,
g,
q,
j],
init:c,
apply:a},
spacing:{check:o,
init:0,
apply:a},
separator:{check:f,
nullable:true,
apply:a},
reversed:{check:r,
init:false,
apply:n}},
members:{__hU:null,
__hV:null,
__hW:null,
__hX:null,
_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},
__hY:function(){var v=this._getLayoutChildren();
var w=v.length;
var x=false;
var y=this.__hU&&this.__hU.length!=w&&this.__hV&&this.__hU;
var z;
var A=y?this.__hU:new Array(w);
var B=y?this.__hV:new Array(w);
if(this.getReversed()){v=v.concat().reverse();
}for(var C=0;C<w;C++){z=v[C].getLayoutProperties();
if(z.height!=null){A[C]=parseFloat(z.height)/100;
}
if(z.flex!=null){B[C]=z.flex;
x=true;
}}if(!y){this.__hU=A;
this.__hV=B;
}this.__hW=x;
this.__hX=v;
delete this._invalidChildrenCache;
},
verifyLayoutProperty:null,
renderLayout:function(D,
E){if(this._invalidChildrenCache){this.__hY();
}var v=this.__hX;
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
for(C=0;C<w;C+=1){J=this.__hU[C];
I=J!=null?Math.floor((E-G)*J):v[C].getSizeHint().height;
A.push(I);
K+=I;
}if(this.__hW&&K!=E){var L={};
var M,
N;
for(C=0;C<w;C+=1){M=this.__hV[C];
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
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hY();
}var F=qx.ui.layout.Util;
var v=this.__hX;
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
Y+=this.__hV[C]>0?Q.minHeight:Q.height;
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
destruct:function(){this._disposeFields(e,
p,
h);
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
members:{__iQ:null,
_computeSizeHint:function(){var d=this._getLayoutChildren();
var e,
f,
g;
var h=this.getSpanColumn();
var j=this.__iQ=[0,
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
getColumnSizes:function(){return this.__iQ||null;
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
if(this._isChildControlVisible(a)){var v=this.getChildControl(a);
r=v.getMarginLeft()+v.getSizeHint().width+v.getMarginRight();
}
if(this._isChildControlVisible(b)){var w=this.getChildControl(b);
s=w.getMarginLeft()+w.getSizeHint().width+w.getMarginRight();
}
if(this._isChildControlVisible(d)){var x=this.getChildControl(d);
t=x.getMarginLeft()+x.getSizeHint().width+x.getMarginRight();
}
if(this._isChildControlVisible(c)){var y=this.getChildControl(c);
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
members:{_onChangeCommand:function(j){this.getChildControl(a).setContent(j.getData().toString());
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
getChildrenContainer:function(){return this.getChildControl(a);
},
_applySpacing:function(p,
q){var r=this.getChildControl(a).getLayout();
p==null?r.resetSpacing():r.setSpacing(p);
},
addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},
getMenuButtons:function(){var s=this.getChildren();
var t=[];
var u;
for(var v=0,
w=s.length;v<w;v++){u=s[v];
if(u instanceof qx.ui.menubar.Button){t.push(u);
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
d="_applyRich",
e="qx.ui.tooltip.ToolTip",
f="_applyIcon",
g="tooltip",
h="Boolean",
i="_applyLabel";
qx.Class.define(e,
{extend:qx.ui.popup.Popup,
construct:function(j,
k){arguments.callee.base.call(this);
qx.ui.tooltip.Manager.getInstance();
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(a);
if(j!=null){this.setLabel(j);
}
if(k!=null){this.setIcon(k);
}},
properties:{appearance:{refine:true,
init:g},
showTimeout:{check:b,
init:1000,
themeable:true},
hideTimeout:{check:b,
init:4000,
themeable:true},
label:{check:c,
nullable:true,
apply:i},
icon:{check:c,
nullable:true,
apply:f,
themeable:true},
rich:{check:h,
init:false,
apply:d}},
members:{_createChildControlImpl:function(l){var m;
switch(l){case a:m=new qx.ui.basic.Atom;
this._add(m);
break;
}return m||arguments.callee.base.call(this,
l);
},
_applyIcon:function(n,
o){var p=this.getChildControl(a);
n==null?p.resetIcon:p.setIcon(n);
},
_applyLabel:function(n,
o){var p=this.getChildControl(a);
n==null?p.resetLabel():p.setLabel(n);
},
_applyRich:function(n,
o){var p=this.getChildControl(a);
p.setRich(n);
}}});
})();
(function(){var a="mousedown",
b="__iR",
c="blur",
d="singleton",
f="qx.ui.popup.Manager";
qx.Class.define(f,
{type:d,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__iR={};
var g=qx.core.Init.getApplication().getRoot();
g.addListener(a,
this.__iT,
this,
true);
qx.bom.Element.addListener(window,
c,
this.hideAll,
this);
},
members:{__iR:null,
add:function(h){{};
this.__iR[h.$$hash]=h;
this.__iS();
},
remove:function(h){{};
var i=this.__iR;
if(i){delete i[h.$$hash];
this.__iS();
}},
hideAll:function(){var i=this.__iR;
if(i){for(var j in i){i[j].exclude();
}}},
__iS:function(){var k=1e6;
var i=this.__iR;
for(var j in i){i[j].setZIndex(k++);
}},
__iT:function(l){var m=l.getTarget();
var i=this.__iR;
for(var j in i){var h=i[j];
if(!h.getAutoHide()||m==h||qx.ui.core.Widget.contains(h,
m)){continue;
}h.exclude();
}}},
destruct:function(){var g=qx.core.Init.getApplication().getRoot();
if(g){g.removeListener(a,
this.__iT,
this,
true);
}this._disposeMap(b);
}});
})();
(function(){var a="focusout",
b="interval",
c="mouseover",
d="mousemove",
f="mouseout",
g="qx.ui.tooltip.ToolTip",
h="_applyCurrent",
i="qx.ui.tooltip.Manager",
j="__iU",
k="__iW",
l="singleton",
m="__iV";
qx.Class.define(i,
{type:l,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
var n=qx.core.Init.getApplication().getRoot();
n.addListener(c,
this.__jb,
this,
true);
this.__iU=new qx.event.Timer();
this.__iU.addListener(b,
this.__iX,
this);
this.__iV=new qx.event.Timer();
this.__iV.addListener(b,
this.__iY,
this);
this.__iW={left:0,
top:0};
},
properties:{current:{check:g,
nullable:true,
apply:h}},
members:{__iW:null,
__iV:null,
__iU:null,
_applyCurrent:function(o,
p){if(p&&qx.ui.core.Widget.contains(p,
o)){return;
}if(p){p.exclude();
this.__iU.stop();
this.__iV.stop();
}var n=qx.core.Init.getApplication().getRoot();
if(o){this.__iU.startWith(o.getShowTimeout());
n.addListener(f,
this.__jc,
this,
true);
n.addListener(a,
this.__jd,
this,
true);
n.addListener(d,
this.__ja,
this,
true);
}else{n.removeListener(f,
this.__jc,
this,
true);
n.removeListener(a,
this.__jd,
this,
true);
n.removeListener(d,
this.__ja,
this,
true);
}},
__iX:function(q){var r=this.getCurrent();
if(r){this.__iV.startWith(r.getHideTimeout());
r.placeToPoint(this.__iW);
r.show();
}this.__iU.stop();
},
__iY:function(q){var r=this.getCurrent();
if(r){r.exclude();
}this.__iV.stop();
this.resetCurrent();
},
__ja:function(q){var s=this.__iW;
s.left=q.getDocumentLeft();
s.top=q.getDocumentTop();
},
__jb:function(q){var t=q.getTarget();
var u;
while(t!=null){var u=t.getToolTip();
if(u){break;
}t=t.getLayoutParent();
}if(u){this.setCurrent(u);
}},
__jc:function(q){var t=q.getTarget();
var v=q.getRelatedTarget();
var u=this.getCurrent();
if(u&&(v==u||qx.ui.core.Widget.contains(u,
v))){return;
}if(v&&t&&qx.ui.core.Widget.contains(t,
v)){return;
}if(u&&!v){this.setCurrent(null);
}else{this.resetCurrent();
}},
__jd:function(q){var t=q.getTarget();
if(!t){return;
}var u=this.getCurrent();
if(u&&u==t.getToolTip()){this.setCurrent(null);
}}},
destruct:function(){var n=qx.core.Init.getApplication().getRoot();
if(n){n.addListener(c,
this.__jb,
this,
true);
}this._disposeObjects(j,
m);
this._disposeFields(k);
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
members:{__lx:null,
__ly:null,
__lz:null,
__lA:null,
__lB:null,
__lC:null,
__lD:null,
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
C){var D=this.getChildControl(a);
var E=this.getChildControl(b);
this.__lB=B===d;
var F=this._getLayout();
if(F){F.dispose();
}var G=B===f?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(G);
E.replaceState(C,
B);
E.getChildControl(s).replaceState(C,
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
}var E=this.getChildControl(b);
if(!E.hasState(c)){return;
}var K=E.getContainerLocation();
var L=this.getContentLocation();
this.__lx=this.__lB?J.getDocumentLeft()-K.left+L.left:J.getDocumentTop()-K.top+L.top;
var D=this.getChildControl(a);
var M=E.getBounds();
D.setUserBounds(M.left,
M.top,
M.width,
M.height);
D.setZIndex(E.getZIndex()+1);
D.show();
this.__ly=true;
this.capture();
},
_onMouseMove:function(J){this.__lz=J.getDocumentLeft();
this.__lA=J.getDocumentTop();
if(this.__ly){this.__lH();
var D=this.getChildControl(a);
var N=this.__lC;
if(this.__lB){D.setDomLeft(N);
}else{D.setDomTop(N);
}}else{this.__lG();
}},
_onMouseOut:function(J){this.__lz=-1;
this.__lA=-1;
this.__lG();
},
_onMouseUp:function(J){if(!this.__ly){return;
}this.__lE();
var D=this.getChildControl(a);
D.exclude();
delete this.__ly;
this.releaseCapture();
this.__lG();
},
_onSplitterMove:function(){this.__lG();
},
__lE:function(){var O=this.__lC;
var P=this.__lD;
if(O==null){return;
}var Q=this._getChildren();
var R=Q[2];
var S=Q[3];
var T=R.getLayoutProperties().flex;
var U=S.getLayoutProperties().flex;
if((T!=0)&&(U!=0)){R.setLayoutProperties({flex:O});
S.setLayoutProperties({flex:P});
}else{if(this.__lB){R.setWidth(O);
S.setWidth(P);
}else{R.setHeight(O);
S.setHeight(P);
}}},
__lF:function(){var E=this.getChildControl(b);
var M=E.getBounds();
var K=E.getContainerLocation();
var V=6;
if(!K){return;
}var W=this.__lz;
var X=M.width;
var N=K.left;
if(X<V){N-=Math.floor((V-X)/2);
X=V;
}
if(W<N||W>(N+X)){return false;
}var W=this.__lA;
var X=M.height;
var N=K.top;
if(X<V){N-=Math.floor((V-X)/2);
X=V;
}
if(W<N||W>(N+X)){return false;
}return true;
},
__lG:function(){var E=this.getChildControl(b);
var Y=this.getApplicationRoot();
if(this.__ly||this.__lF()){var ba=this.__lB?w:j;
this.setCursor(ba);
Y.setGlobalCursor(ba);
E.addState(c);
}else if(E.hasState(c)){this.resetCursor();
Y.resetGlobalCursor();
E.removeState(c);
}},
__lH:function(){if(this.__lB){var V=u,
X=n,
bb=x,
W=this.__lz;
}else{var V=r,
X=i,
bb=m,
W=this.__lA;
}var Q=this._getChildren();
var bc=Q[2].getSizeHint();
var bd=Q[3].getSizeHint();
var be=Q[2].getBounds()[X]+Q[3].getBounds()[X];
var O=W-this.__lx;
var P=be-O;
if(O<bc[V]){P-=bc[V]-O;
O=bc[V];
}else if(P<bd[V]){O-=bd[V]-P;
P=bd[V];
}if(O>bc[bb]){P+=O-bc[bb];
O=bc[bb];
}else if(P>bd[bb]){O+=P-bd[bb];
P=bd[bb];
}this.__lC=O;
this.__lD=P;
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
b="scrollbar-x",
c="pane",
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
switch(x){case c:y=new qx.ui.core.ScrollPane();
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
case b:y=new qx.ui.core.ScrollBar(s);
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
getPaneSize:function(){return this.getChildControl(c).getBounds();
},
getItemTop:function(z){return this.getChildControl(c).getItemTop(z);
},
getItemBottom:function(z){return this.getChildControl(c).getItemBottom(z);
},
getItemLeft:function(z){return this.getChildControl(c).getItemLeft(z);
},
getItemRight:function(z){return this.getChildControl(c).getItemRight(z);
},
scrollToX:function(A){qx.ui.core.queue.Manager.flush();
this.getChildControl(b).scrollTo(A);
},
scrollByX:function(A){qx.ui.core.queue.Manager.flush();
this.getChildControl(b).scrollBy(A);
},
getScrollX:function(){var B=this.getChildControl(b,
true);
return B?B.getPosition():0;
},
scrollToY:function(A){qx.ui.core.queue.Manager.flush();
this.getChildControl(a).scrollTo(A);
},
scrollByY:function(A){qx.ui.core.queue.Manager.flush();
this.getChildControl(a).scrollBy(A);
},
getScrollY:function(){var B=this.getChildControl(a,
true);
return B?B.getPosition():0;
},
_onScrollBarX:function(C){this.getChildControl(c).scrollToX(C.getData());
},
_onScrollBarY:function(C){this.getChildControl(c).scrollToY(C.getData());
},
_onScrollPaneX:function(C){this.scrollToX(C.getData());
},
_onScrollPaneY:function(C){this.scrollToY(C.getData());
},
_onMouseWheel:function(C){var D=this._isChildControlVisible(b);
var E=this._isChildControlVisible(a);
var B=(E)?this.getChildControl(a,
true):(D?this.getChildControl(b,
true):null);
if(B){B.scrollBySteps(C.getWheelDelta());
}C.stop();
},
_onChangeScrollbarXVisibility:function(C){var D=this._isChildControlVisible(b);
var E=this._isChildControlVisible(a);
if(!D){this.scrollToX(0);
}D&&E?this._showChildControl(f):this._excludeChildControl(f);
},
_onChangeScrollbarYVisibility:function(C){var D=this._isChildControlVisible(b);
var E=this._isChildControlVisible(a);
if(!E){this.scrollToY(0);
}D&&E?this._showChildControl(f):this._excludeChildControl(f);
},
_computeScrollbars:function(){var F=this.getChildControl(c);
var G=F.getChild();
if(!G){this._excludeChildControl(b);
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
}}if(D){var M=this.getChildControl(b);
M.show();
M.setMaximum(Math.max(0,
J.width-I.width));
M.setKnobFactor(I.width/J.width);
}else{this._excludeChildControl(b);
}
if(E){var N=this.getChildControl(a);
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
d="__jm",
f="qx.ui.core.MSelectionHandling",
g="mousedown",
h="losecapture",
i="one",
j="multi",
k="_applyQuickSelection",
l="mouseover",
m="_applySelectionMode",
n="_applyDragSelection",
o="mouseup",
p="mousemove",
q="removeItem",
r="keypress",
s="addItem",
t="additive",
u="qx.event.type.Data";
qx.Mixin.define(f,
{construct:function(){var v=this.SELECTION_MANAGER;
var w=this.__jm=new v(this);
this.addListener(g,
w.handleMouseDown,
w);
this.addListener(o,
w.handleMouseUp,
w);
this.addListener(l,
w.handleMouseOver,
w);
this.addListener(p,
w.handleMouseMove,
w);
this.addListener(h,
w.handleLoseCapture,
w);
this.addListener(r,
w.handleKeyPress,
w);
this.addListener(s,
w.handleAddItem,
w);
this.addListener(q,
w.handleRemoveItem,
w);
w.addListener(b,
this._onSelectionChange,
this);
},
events:{"changeSelection":u},
properties:{selectionMode:{check:[c,
j,
t,
i],
init:c,
apply:m},
dragSelection:{check:a,
init:false,
apply:n},
quickSelection:{check:a,
init:false,
apply:k}},
members:{__jm:null,
selectAll:function(){this.__jm.selectAll();
},
select:function(x){this.__jm.selectItem(x);
},
isSelected:function(x){this.__jm.isSelected(x);
},
addToSelection:function(x){this.__jm.addItem(x);
},
removeFromSelection:function(x){this.__jm.removeItem(x);
},
selectRange:function(y,
z){this.__jm.selectItemRange(y,
z);
},
clearSelection:function(){this.__jm.clearSelection();
},
replaceSelection:function(A){this.__jm.replaceSelection(A);
},
getSelectedItem:function(){return this.__jm.getSelectedItem();
},
getSelection:function(){return this.__jm.getSelection();
},
getSortedSelection:function(){return this.__jm.getSortedSelection();
},
isSelectionEmpty:function(){return this.__jm.isSelectionEmpty();
},
getSelectionContext:function(){return this.__jm.getSelectionContext();
},
_getManager:function(){return this.__jm;
},
_applySelectionMode:function(B,
C){this.__jm.setMode(B);
},
_applyDragSelection:function(B,
C){this.__jm.setDrag(B);
},
_applyQuickSelection:function(B,
C){this.__jm.setQuick(B);
},
_onSelectionChange:function(D){this.fireDataEvent(b,
D.getData());
}},
destruct:function(){this._disposeObjects(d);
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
members:{__hE:{contentPaddingTop:h,
contentPaddingRight:i,
contentPaddingBottom:d,
contentPaddingLeft:l},
__hF:{contentPaddingTop:e,
contentPaddingRight:c,
contentPaddingBottom:j,
contentPaddingLeft:g},
_applyContentPadding:function(q,
r,
s){var t=this._getContentPaddingTarget();
if(q==null){var u=this.__hF[s];
t[u]();
}else{var v=this.__hE[s];
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
x="click",
y="above",
z="left",
A="__jn",
B="Escape",
C="__jE",
D="A",
E="Space",
F="_applyMode",
G="interval",
H="changeSelection",
I="qx.event.type.Data",
J="quick",
K="key",
L="__jG",
M="__jF",
N="__jq",
O="abstract",
P="drag",
Q="qx.ui.core.selection.Abstract";
qx.Class.define(Q,
{type:O,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__jn={};
},
events:{"changeSelection":I},
properties:{mode:{check:[d,
g,
f,
c],
init:d,
apply:F},
drag:{check:q,
init:false},
quick:{check:q,
init:false}},
members:{__jo:0,
__jp:0,
__jq:null,
__jr:null,
__js:null,
__jt:null,
__ju:null,
__jv:null,
__jw:null,
__jx:null,
__jy:null,
__jz:null,
__jA:null,
__jB:null,
__jC:null,
__jD:null,
__jE:null,
__jn:null,
__jF:null,
__jG:null,
getSelectionContext:function(){return this.__jD;
},
selectAll:function(){var R=this.getMode();
if(R==d||R==c){throw new Error("Can not select all items in selection mode: "+R);
}this._selectAllItems();
this._fireChange();
},
selectItem:function(S){this._setSelectedItem(S);
var R=this.getMode();
if(R!==d&&R!==c){this._setLeadItem(S);
this._setAnchorItem(S);
}this._scrollItemIntoView(S);
this._fireChange();
},
addItem:function(S){var R=this.getMode();
if(R===d||R===c){this._setSelectedItem(S);
}else{if(!this._getAnchorItem()){this._setAnchorItem(S);
}this._setLeadItem(S);
this._addToSelection(S);
}this._scrollItemIntoView(S);
this._fireChange();
},
removeItem:function(S){this._removeFromSelection(S);
if(this.getMode()===c&&this.isSelectionEmpty()){var T=this._getFirstSelectable();
if(T){this.addItem(T);
}}
if(this._getLeadItem()==S){this._setLeadItem(null);
}
if(this._getAnchorItem()==S){this._setAnchorItem(null);
}this._fireChange();
},
selectItemRange:function(U,
V){var R=this.getMode();
if(R==d||R==c){throw new Error("Can not select items in selection mode: "+R);
}this._selectItemRange(U,
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
getSelectedItem:function(){var R=this.getMode();
if(R===d||R===c){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},
getSelection:function(){return qx.lang.Object.getValues(this.__jn);
},
getSortedSelection:function(){var bb=this._getSelectables();
var bc=qx.lang.Object.getValues(this.__jn);
bc.sort(function(bd,
be){return bb.indexOf(bd)-bb.indexOf(be);
});
return bc;
},
isItemSelected:function(S){var bf=this._selectableToHashCode(S);
return !!this.__jn[bf];
},
isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__jn);
},
_setLeadItem:function(bg){var bh=this.__jE;
if(bh){this._styleSelectable(bh,
n,
false);
}
if(bg){this._styleSelectable(bg,
n,
true);
}this.__jE=bg;
},
_getLeadItem:function(){return this.__jE||null;
},
_setAnchorItem:function(bg){var bh=this.__jF;
if(bh){this._styleSelectable(bh,
s,
false);
}
if(bg){this._styleSelectable(bg,
s,
true);
}this.__jF=bg;
},
_getAnchorItem:function(){return this.__jF||null;
},
_isSelectable:function(S){throw new Error("Abstract method call: _isSelectable()");
},
_getSelectableFromTarget:function(bi){return this._isSelectable(bi)?bi:null;
},
_selectableToHashCode:function(S){throw new Error("Abstract method call: _selectableToHashCode()");
},
_styleSelectable:function(S,
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
_getSelectableLocationX:function(S){throw new Error("Abstract method call: _getSelectableLocationX()");
},
_getSelectableLocationY:function(S){throw new Error("Abstract method call: _getSelectableLocationY()");
},
_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},
_scrollBy:function(bl,
bm){throw new Error("Abstract method call: _scrollBy()");
},
_scrollItemIntoView:function(S){throw new Error("Abstract method call: _scrollItemIntoView()");
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
_getRelatedSelectable:function(S,
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
}var R=this.getMode();
if(R!==c&&R!==d){return;
}var S=this._getSelectableFromTarget(bs.getTarget());
if(!S){return;
}this._setSelectedItem(S);
this._fireChange(J);
},
handleMouseDown:function(bs){var S=this._getSelectableFromTarget(bs.getTarget());
if(!S){return;
}var bt=bs.isCtrlPressed()||(qx.bom.client.Platform.MAC&&bs.isMetaPressed());
var bu=bs.isShiftPressed();
if(this.isItemSelected(S)&&!bu&&!bt&&!this.getDrag()){this.__jG=S;
return;
}else{this.__jG=null;
}this._scrollItemIntoView(S);
switch(this.getMode()){case d:case c:this._setSelectedItem(S);
break;
case f:this._setLeadItem(S);
this._setAnchorItem(S);
this._toggleInSelection(S);
break;
case g:this._setLeadItem(S);
if(bu){var bv=this._getAnchorItem();
if(!bv){this._setAnchorItem(bv=this.getFirstItem());
}this._selectItemRange(bv,
S,
bt);
}else if(bt){this._setAnchorItem(S);
this._toggleInSelection(S);
}else{this._setAnchorItem(S);
this._setSelectedItem(S);
}break;
}var R=this.getMode();
if(this.getDrag()&&R!==d&&R!==c&&!bu&&!bt){this.__ju=this._getLocation();
this.__jr=this._getScroll();
this.__jv=bs.getDocumentLeft()+this.__jr.left;
this.__jw=bs.getDocumentTop()+this.__jr.top;
this.__jx=true;
this._capture();
}this._fireChange(x);
},
handleMouseUp:function(bs){var bt=bs.isCtrlPressed()||(qx.bom.client.Platform.MAC&&bs.isMetaPressed());
var bu=bs.isShiftPressed();
if(!bt&&!bu&&this.__jG){var S=this._getSelectableFromTarget(bs.getTarget());
if(!S||!this.isItemSelected(S)){return;
}var R=this.getMode();
if(R===f){this._removeFromSelection(S);
}else{this._setSelectedItem(S);
if(this.getMode()===g){this._setLeadItem(S);
this._setAnchorItem(S);
}}}this._cleanup();
},
handleLoseCapture:function(bs){this._cleanup();
},
handleMouseMove:function(bs){if(!this.__jx){return;
}this.__jy=bs.getDocumentLeft();
this.__jz=bs.getDocumentTop();
var bw=this.__jy+this.__jr.left;
if(bw>this.__jv){this.__jA=1;
}else if(bw<this.__jv){this.__jA=-1;
}else{this.__jA=0;
}var bx=this.__jz+this.__jr.top;
if(bx>this.__jw){this.__jB=1;
}else if(bx<this.__jw){this.__jB=-1;
}else{this.__jB=0;
}var by=this.__ju;
if(this.__jy<by.left){this.__jo=this.__jy-by.left;
}else if(this.__jy>by.right){this.__jo=this.__jy-by.right;
}else{this.__jo=0;
}
if(this.__jz<by.top){this.__jp=this.__jz-by.top;
}else if(this.__jz>by.bottom){this.__jp=this.__jz-by.bottom;
}else{this.__jp=0;
}if(!this.__jq){this.__jq=new qx.event.Timer(100);
this.__jq.addListener(G,
this._onInterval,
this);
}this.__jq.start();
this._autoSelect();
},
handleAddItem:function(bz){var S=bz.getData();
if(this.getMode()===c&&this.isSelectionEmpty()){this.addItem(S);
}},
handleRemoveItem:function(bz){this.removeItem(bz.getData());
},
_cleanup:function(){if(!this.getDrag()&&this.__jx){return;
}if(this.__jC){this._fireChange(x);
}delete this.__jx;
delete this.__js;
delete this.__jt;
this._releaseCapture();
if(this.__jq){this.__jq.stop();
}},
_onInterval:function(bz){this._scrollBy(this.__jo,
this.__jp);
this.__jr=this._getScroll();
this._autoSelect();
},
_autoSelect:function(){var bA=this._getDimension();
var bB=Math.max(0,
Math.min(this.__jy-this.__ju.left,
bA.width))+this.__jr.left;
var bC=Math.max(0,
Math.min(this.__jz-this.__ju.top,
bA.height))+this.__jr.top;
if(this.__js===bB&&this.__jt===bC){return;
}this.__js=bB;
this.__jt=bC;
var bv=this._getAnchorItem();
var bD=this.__jA,
bE=bv;
var bF,
bG,
bH=0;
while(bD!==0){bF=bD>0?this._getRelatedSelectable(bE,
w):this._getRelatedSelectable(bE,
z);
if(bF){bG=this._getSelectableLocationX(bF);
if((bD>0&&bG.left<=bB)||(bD<0&&bG.right>=bB)){bE=bF;
bH++;
continue;
}}break;
}var bI=this.__jB,
bJ=bv;
var bK,
bL,
bM=0;
while(bI!==0){bK=bI>0?this._getRelatedSelectable(bJ,
k):this._getRelatedSelectable(bJ,
y);
if(bK){bL=this._getSelectableLocationY(bK);
if((bI>0&&bL.top<=bC)||(bI<0&&bL.bottom>=bC)){bJ=bK;
bM++;
continue;
}}break;
}var bq=bH>bM?bE:bJ;
var R=this.getMode();
if(R===g){this._selectItemRange(bv,
bq);
}else if(R===f){if(this.isItemSelected(bv)){this._selectItemRange(bv,
bq,
true);
}else{this._deselectItemRange(bv,
bq);
}this._setAnchorItem(bq);
}this._fireChange(P);
},
__jH:{Home:1,
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
var R=this.getMode();
var bt=bs.isCtrlPressed()||(qx.bom.client.Platform.MAC&&bs.isMetaPressed());
var bu=bs.isShiftPressed();
var bQ=false;
if(bP===D&&bt){if(R!==d&&R!==c){this._selectAllItems();
bQ=true;
}}else if(bP===B){if(R!==d&&R!==c){this._clearSelection();
bQ=true;
}}else if(bP===E){var bq=this._getLeadItem();
if(bq&&!bu){if(bt||R===f){this._toggleInSelection(bq);
}else{this._setSelectedItem(bq);
}bQ=true;
}}else if(this.__jH[bP]){bQ=true;
if(R===d||R==c){bN=this._getSelectedItem();
}else{bN=this._getLeadItem();
}var T=this._getFirstSelectable();
var bR=this._getLastSelectable();
if(bN){switch(bP){case u:bO=T;
break;
case t:bO=bR;
break;
case p:bO=this._getRelatedSelectable(bN,
y);
break;
case o:bO=this._getRelatedSelectable(bN,
k);
break;
case m:bO=this._getRelatedSelectable(bN,
z);
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
}}if(bO){switch(R){case d:case c:this._setSelectedItem(bO);
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
this._fireChange(K);
}},
_selectAllItems:function(){var bS=this._getSelectables();
for(var X=0,
Y=bS.length;X<Y;X++){this._addToSelection(bS[X]);
}},
_clearSelection:function(){var bT=this.__jn;
for(var bf in bT){this._removeFromSelection(bT[bf]);
}},
_selectItemRange:function(bn,
bo,
bU){var bS=this._getSelectableRange(bn,
bo);
if(!bU){var bV=this.__jn;
var bW=this.__jI(bS);
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
__jI:function(bS){var bW={};
var S;
for(var X=0,
Y=bS.length;X<Y;X++){S=bS[X];
bW[this._selectableToHashCode(S)]=S;
}return bW;
},
_getSelectedItem:function(){for(var bf in this.__jn){return this.__jn[bf];
}return null;
},
_setSelectedItem:function(S){this._clearSelection();
this._addToSelection(S);
},
_addToSelection:function(S){var bf=this._selectableToHashCode(S);
if(!this.__jn[bf]){this.__jn[bf]=S;
this._styleSelectable(S,
h,
true);
this.__jC=true;
}},
_toggleInSelection:function(S){var bf=this._selectableToHashCode(S);
if(!this.__jn[bf]){this.__jn[bf]=S;
this._styleSelectable(S,
h,
true);
}else{delete this.__jn[bf];
this._styleSelectable(S,
h,
false);
}this.__jC=true;
},
_removeFromSelection:function(S){var bf=this._selectableToHashCode(S);
if(this.__jn[bf]){delete this.__jn[bf];
this._styleSelectable(S,
h,
false);
this.__jC=true;
}},
_fireChange:function(bX){if(this.__jC){this.__jD=bX||null;
this.fireDataEvent(H,
this.getSelection());
delete this.__jC;
}}},
destruct:function(){this._disposeObjects(N);
this._disposeFields(A,
L,
M,
C);
}});
})();
(function(){var a="vertical",
b="under",
c="above",
d="qx.ui.core.selection.Widget",
e="left",
f="right",
g="__jJ";
qx.Class.define(d,
{extend:qx.ui.core.selection.Abstract,
construct:function(h){arguments.callee.base.call(this);
this.__jJ=h;
},
members:{__jJ:null,
_isSelectable:function(j){return j.isEnabled()&&j.getLayoutParent()===this.__jJ;
},
_selectableToHashCode:function(j){return j.$$hash;
},
_styleSelectable:function(j,
k,
m){m?j.addState(k):j.removeState(k);
},
_capture:function(){this.__jJ.capture();
},
_releaseCapture:function(){this.__jJ.releaseCapture();
},
_getWidget:function(){return this.__jJ;
},
_getLocation:function(){var n=this.__jJ.getContentElement().getDomElement();
return n?qx.bom.element.Location.get(n):null;
},
_getDimension:function(){return this.__jJ.getInnerSize();
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
_scrollItemIntoView:function(j){this.__jJ.scrollChildIntoView(j);
},
_getSelectables:function(){var r=this.__jJ.getChildren();
var s=[];
var t;
for(var u=0,
v=r.length;u<v;u++){t=r[u];
if(t.isEnabled()){s.push(t);
}}return s;
},
_getSelectableRange:function(w,
x){if(w===x){return [w];
}var r=this.__jJ.getChildren();
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
_getFirstSelectable:function(){var r=this.__jJ.getChildren();
for(var u=0,
v=r.length;u<v;u++){if(r[u].isEnabled()){return r[u];
}}return null;
},
_getLastSelectable:function(){var r=this.__jJ.getChildren();
for(var u=r.length-1;u>0;u--){if(r[u].isEnabled()){return r[u];
}}return null;
},
_getRelatedSelectable:function(j,
z){var A=this.__jJ.getOrientation()===a;
var r=this.__jJ.getChildren();
var B=r.indexOf(j);
var C;
if((A&&z===c)||(!A&&z===e)){for(var u=B-1;u>=0;u--){C=r[u];
if(C.isEnabled()){return C;
}}}else if((A&&z===b)||(!A&&z===f)){for(var u=B+1;u<r.length;u++){C=r[u];
if(C.isEnabled()){return C;
}}}return null;
},
_getPage:function(D,
E){if(E){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},
destruct:function(){this._disposeFields(g);
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,
{extend:qx.ui.core.selection.Widget,
members:{_isSelectable:function(b){return b.isEnabled()&&b.getLayoutParent()===this._getWidget().getChildrenContainer();
},
_getDimension:function(){return this._getWidget().getPaneSize();
},
_getScroll:function(){var c=this._getWidget();
return {left:c.getScrollX(),
top:c.getScrollY()};
},
_scrollBy:function(d,
e){var c=this._getWidget();
c.scrollByX(d);
c.scrollByY(e);
},
_getPage:function(f,
g){var h=this._getSelectables();
var j=h.length;
var k=h.indexOf(f);
if(k===-1){throw new Error("Invalid lead item: "+f);
}var c=this._getWidget();
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
if(g){var h=this._getWidget().getItemTop(f);
return {top:h,
bottom:h+g.height};
}},
_isSelectable:function(f){return f instanceof qx.ui.tree.AbstractTreeItem;
},
_getSelectableFromTarget:function(i){return this._getWidget().getTreeItem(i);
},
_getSelectables:function(){var j=this._getWidget();
return j.getRoot().getItems(true,
false,
j.getHideRoot());
},
_getSelectableRange:function(k,
l){if(k===l){return [k];
}var m=this._getSelectables();
var n=m.indexOf(k);
var o=m.indexOf(l);
if(n<0||o<0){return [];
}
if(n<o){return m.slice(n,
o+1);
}else{return m.slice(o,
n+1);
}},
_getFirstSelectable:function(){return this._getSelectables()[0]||null;
},
_getLastSelectable:function(){var m=this._getSelectables();
if(m.length>0){return m[m.length-1];
}else{return null;
}},
_getRelatedSelectable:function(f,
p){var j=this._getWidget();
switch(p){case b:return j.getPreviousSiblingOf(f,
false);
case d:return j.getNextSiblingOf(f,
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
o="__lo",
p="_applyRoot",
q="qx.ui.tree.Tree",
r="qx.ui.tree.AbstractTreeItem",
s="tree";
qx.Class.define(q,
{extend:qx.ui.core.AbstractScrollArea,
include:[qx.ui.core.MSelectionHandling,
qx.ui.core.MContentPadding],
construct:function(){arguments.callee.base.call(this);
this.__lo=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,
allowGrowX:true});
this.getChildControl(n).add(this.__lo);
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
members:{__lo:null,
SELECTION_MANAGER:qx.ui.tree.SelectionManager,
getChildrenContainer:function(){return this.__lo;
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
_getContentPaddingTarget:function(){return this.__lo;
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
h="__hA",
k="minWidth",
m="width",
n="__hx",
o="__ht",
p="minHeight",
q="__hw",
r="qx.ui.layout.Grid",
s="height",
t="maxHeight",
u="maxWidth",
v="__hv",
w="__hB",
z="__hu";
qx.Class.define(r,
{extend:qx.ui.layout.Abstract,
construct:function(A,
B){arguments.callee.base.call(this);
this.__ht=[];
this.__hu=[];
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
members:{__hv:null,
__ht:null,
__hu:null,
__hw:null,
__hx:null,
__hy:null,
__hz:null,
__hA:null,
__hB:null,
verifyLayoutProperty:null,
__hC:function(){var C=[];
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
}}this.__hv=C;
this.__hw=D;
this.__hx=E;
this.__hy=F;
this.__hz=G;
delete this._invalidChildrenCache;
},
_setRowData:function(M,
Q,
R){var S=this.__ht[M];
if(!S){this.__ht[M]={};
this.__ht[M][Q]=R;
}else{S[Q]=R;
}},
_setColumnData:function(N,
Q,
R){var T=this.__hu[N];
if(!T){this.__hu[N]={};
this.__hu[N][Q]=R;
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
getColumnAlign:function(N){var T=this.__hu[N]||{};
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
getRowAlign:function(M){var S=this.__ht[M]||{};
return {vAlign:S.vAlign||b,
hAlign:S.hAlign||a};
},
getCellWidget:function(M,
N){if(this._invalidChildrenCache){this.__hC();
}return this.__hv[M][N]||null;
},
getCellAlign:function(M,
N){var W=b;
var V=a;
var S=this.__ht[M];
var T=this.__hu[N];
var X=this.__hv[M][N];
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
getColumnFlex:function(N){var T=this.__hu[N]||{};
return T.flex!==undefined?T.flex:0;
},
setRowFlex:function(M,
ba){this._setRowData(M,
e,
ba);
this._applyLayoutChange();
return this;
},
getRowFlex:function(M){var S=this.__ht[M]||{};
var bb=S.flex!==undefined?S.flex:0;
return bb;
},
setColumnMaxWidth:function(N,
bc){this._setColumnData(N,
u,
bc);
this._applyLayoutChange();
return this;
},
getColumnMaxWidth:function(N){var T=this.__hu[N]||{};
return T.maxWidth!==undefined?T.maxWidth:Infinity;
},
setColumnWidth:function(N,
bd){this._setColumnData(N,
m,
bd);
this._applyLayoutChange();
return this;
},
getColumnWidth:function(N){var T=this.__hu[N]||{};
return T.width!==undefined?T.width:null;
},
setColumnMinWidth:function(N,
be){this._setColumnData(N,
k,
be);
this._applyLayoutChange();
return this;
},
getColumnMinWidth:function(N){var T=this.__hu[N]||{};
return T.minWidth||0;
},
setRowMaxHeight:function(M,
bf){this._setRowData(M,
t,
bf);
this._applyLayoutChange();
return this;
},
getRowMaxHeight:function(M){var S=this.__ht[M]||{};
return S.maxHeight||Infinity;
},
setRowHeight:function(M,
bg){this._setRowData(M,
s,
bg);
this._applyLayoutChange();
return this;
},
getRowHeight:function(M){var S=this.__ht[M]||{};
return S.height!==undefined?S.height:null;
},
setRowMinHeight:function(M,
bh){this._setRowData(M,
p,
bh);
this._applyLayoutChange();
return this;
},
getRowMinHeight:function(M){var S=this.__ht[M]||{};
return S.minHeight||0;
},
__hD:function(X){var bi=X.getSizeHint();
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
J=this.__hx.length;I<J;I++){var X=this.__hx[I];
var bi=this.__hD(X);
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
J=this.__hw.length;I<J;I++){var X=this.__hw[I];
var bi=this.__hD(X);
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
_getRowHeights:function(){if(this.__hA!=null){return this.__hA;
}var bm=[];
var F=this.__hy;
var G=this.__hz;
for(var M=0;M<=F;M++){var bh=0;
var bg=0;
var bf=0;
for(var bC=0;bC<=G;bC++){var X=this.__hv[M][bC];
if(!X){continue;
}var bG=X.getLayoutProperties().rowSpan||0;
if(bG>1){continue;
}var bH=this.__hD(X);
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
if(this.__hx.length>0){this._fixHeightsRowSpan(bm);
}this.__hA=bm;
return bm;
},
_getColWidths:function(){if(this.__hB!=null){return this.__hB;
}var bw=[];
var G=this.__hz;
var F=this.__hy;
for(var bC=0;bC<=G;bC++){var bd=0;
var be=0;
var bc=Infinity;
for(var M=0;M<=F;M++){var X=this.__hv[M][bC];
if(!X){continue;
}var bI=X.getLayoutProperties().colSpan||0;
if(bI>1){continue;
}var bH=this.__hD(X);
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
if(this.__hw.length>0){this._fixWidthsColSpan(bw);
}this.__hB=bw;
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
bM){if(this._invalidChildrenCache){this.__hC();
}var bN=qx.ui.layout.Util;
var bx=this.getSpacingX();
var bn=this.getSpacingY();
var bO=this._getColWidths();
var bP=this._getColumnFlexOffsets(bL);
var bw=[];
var G=this.__hz;
var F=this.__hy;
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
for(var M=0;M<=F;M++){var X=this.__hv[M][bC];
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
this.__hB=null;
this.__hA=null;
},
_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hC();
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
destruct:function(){this._disposeFields(v,
o,
z,
q,
n,
w,
h);
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
_applyMaximum:function(B){this.getChildControl(a).setMaximum(B);
},
_applyPosition:function(B){this.getChildControl(a).setValue(B);
},
_applyKnobFactor:function(B){this.getChildControl(a).setKnobFactor(B);
},
_applyPageStep:function(B){this.getChildControl(a).setPageStep(B);
},
_applyOrientation:function(B,
C){var D=this._getLayout();
if(D){D.dispose();
}if(B===b){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(f,
b);
this.getChildControl(c).replaceState(l,
j);
this.getChildControl(d).replaceState(k,
i);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(b,
f);
this.getChildControl(c).replaceState(j,
l);
this.getChildControl(d).replaceState(i,
k);
}this.getChildControl(a).setOrientation(B);
},
scrollTo:function(E){this.getChildControl(a).slideTo(E);
},
scrollBy:function(F){this.getChildControl(a).slideBy(F);
},
scrollBySteps:function(G){var H=this.getSingleStep();
this.getChildControl(a).slideBy(G*H);
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
members:{__jN:null,
__jO:null,
__jP:null,
__jQ:null,
__jR:null,
__jS:null,
__jT:null,
__jU:null,
__jV:null,
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
_onMouseDown:function(U){if(this.__jQ){return;
}var W=this.__jX;
var ba=this.getChildControl(a);
var bb=W?i:j;
var bc=W?U.getDocumentLeft():U.getDocumentTop();
var bd=this.__jN=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bb];
var be=this.__jO=qx.bom.element.Location.get(ba.getContainerElement().getDomElement())[bb];
if(U.getTarget()===ba){this.__jQ=true;
this.__jR=bc+bd-be;
}else{this.__jS=true;
this.__jT=bc<=be?-1:1;
this.__jY(U);
this._onInterval();
if(!this.__jV){this.__jV=new qx.event.Timer(100);
this.__jV.addListener(x,
this._onInterval,
this);
}this.__jV.start();
}this.addListener(g,
this._onMouseMove);
this.capture();
U.stopPropagation();
},
_onMouseUp:function(U){if(this.__jQ){this.releaseCapture();
delete this.__jQ;
delete this.__jR;
}else if(this.__jS){this.__jV.stop();
this.releaseCapture();
delete this.__jS;
delete this.__jT;
delete this.__jU;
}this.removeListener(g,
this._onMouseMove);
if(U.getType()===k){U.stopPropagation();
}},
_onMouseMove:function(U){if(this.__jQ){var bf=this.__jX?U.getDocumentLeft():U.getDocumentTop();
var bg=bf-this.__jR;
this.slideTo(this._positionToValue(bg));
}else if(this.__jS){this.__jY(U);
}U.stopPropagation();
},
_onInterval:function(U){var bh=this.getValue()+(this.__jT*this.getPageStep());
if(bh<this.getMinimum()){bh=this.getMinimum();
}else if(bh>this.getMaximum()){bh=this.getMaximum();
}var bi=this.__jT==-1;
if((bi&&bh<=this.__jU)||(!bi&&bh>=this.__jU)){bh=this.__jU;
}this.slideTo(bh);
},
_onUpdate:function(U){var bj=this.getInnerSize();
var bk=this.getChildControl(a).getBounds();
var bl=this.__jX?C:o;
this._updateKnobSize();
this.__jW=bj[bl]-bk[bl];
this.__jP=bk[bl];
this._updateKnobPosition();
},
__jX:false,
__jW:0,
__jY:function(U){var W=this.__jX;
var bc=W?U.getDocumentLeft():U.getDocumentTop();
var bd=this.__jN;
var be=this.__jO;
var bk=this.__jP;
var bg=bc-bd;
if(bc>=be){bg-=bk;
}var bh=this._positionToValue(bg);
var bm=this.getMinimum();
var bn=this.getMaximum();
if(bh<bm){bh=bm;
}else if(bh>bn){bh=bn;
}else{var bo=this.getValue();
var bp=this.getPageStep();
var bq=this.__jT<0?F:K;
bh=bo+(Math[bq]((bh-bo)/bp)*bp);
}if(this.__jU==null||(this.__jT==-1&&bh<=this.__jU)||(this.__jT==1&&bh>=this.__jU)){this.__jU=bh;
}},
_positionToValue:function(bg){var br=this.__jW;
if(br==null||br==0){return 0;
}var bs=bg/br;
if(bs<0){bs=0;
}else if(bs>1){bs=1;
}var bt=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bt*bs);
},
_valueToPosition:function(bh){var br=this.__jW;
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
_setKnobPosition:function(bg){var bu=this.getChildControl(a).getContainerElement();
if(this.__jX){bu.setStyle(i,
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
}if(this.__jX){this.getChildControl(a).setWidth(Math.round(bv*br.width));
}else{this.getChildControl(a).setHeight(Math.round(bv*br.height));
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
bo){var ba=this.getChildControl(a);
this.__jX=bh===b;
if(this.__jX){this.removeState(c);
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
}else{if(this.__jX){this.getChildControl(a).resetWidth();
}else{this.getChildControl(a).resetHeight();
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
j="__hK",
k="qx.ui.form.RepeatButton",
l="release",
m="interval",
n="execute";
qx.Class.define(k,
{extend:qx.ui.form.Button,
construct:function(o,
p){arguments.callee.base.call(this,
o,
p);
this.__hK=new qx.event.Timer(this.getInterval());
this.__hK.addListener(m,
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
members:{__hL:null,
__hM:null,
__hK:null,
press:function(){if(this.isEnabled()){if(!this.hasState(a)){this.__hN();
}this.removeState(b);
this.addState(a);
}},
release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(a)){if(!this.__hM){this.execute();
}}this.removeState(a);
this.removeState(b);
this.__hO();
},
_applyEnabled:function(r,
s){arguments.callee.base.call(this,
r,
s);
if(!r){this.removeState(a);
this.removeState(b);
this.__hO();
}},
_onMouseOver:function(t){if(!this.isEnabled()||t.getTarget()!==this){return;
}
if(this.hasState(b)){this.removeState(b);
this.addState(a);
this.__hK.start();
}this.addState(d);
},
_onMouseOut:function(t){if(!this.isEnabled()||t.getTarget()!==this){return;
}this.removeState(d);
if(this.hasState(a)){this.removeState(a);
this.addState(b);
this.__hK.stop();
this.__hL=this.getInterval();
}},
_onMouseDown:function(t){if(!t.isLeftPressed()){return;
}this.capture();
this.__hN();
t.stopPropagation();
},
_onMouseUp:function(t){this.releaseCapture();
if(!this.hasState(b)){this.addState(d);
if(this.hasState(a)&&!this.__hM){this.execute();
}}this.__hO();
t.stopPropagation();
},
_onKeyUp:function(t){switch(t.getKeyIdentifier()){case g:case h:if(this.hasState(a)){if(!this.__hM){this.execute();
}this.removeState(a);
this.removeState(b);
t.stopPropagation();
this.__hO();
}}},
_onKeyDown:function(t){switch(t.getKeyIdentifier()){case g:case h:this.removeState(b);
this.addState(a);
t.stopPropagation();
this.__hN();
}},
_onInterval:function(t){this.__hK.stop();
if(this.__hL==null){this.__hL=this.getInterval();
}this.__hL=(Math.max(this.getMinTimer(),
this.__hL-this.getTimerDecrease()));
this.__hK.restartWith(this.__hL);
this.__hM=true;
this.fireEvent(n);
},
__hN:function(){this.fireEvent(i);
this.__hM=false;
this.__hK.setInterval(this.getFirstInterval());
this.__hK.start();
this.removeState(b);
this.addState(a);
},
__hO:function(){this.fireEvent(l);
this.__hK.stop();
this.__hL=null;
this.removeState(b);
this.removeState(a);
}},
destruct:function(){this._disposeObjects(j);
}});
})();
(function(){var a="open",
b="auto",
c="icon",
d="middle",
f="label",
g="changeOpen",
h="excluded",
j="String",
k="visible",
m="opened",
n="always",
o="qx.ui.tree.AbstractTreeItem",
p="addItem",
q="Boolean",
r="__lq",
s="Integer",
t="_applyIndent",
u="changeOpenSymbolMode",
v="_applyOpenSymbolMode",
w="-label",
x="-icon",
y="resize",
z="__lp",
A="",
B="__lt",
C="removeItem",
D="abstract",
E="never",
F="_applyIcon",
G="_applyOpen",
H="_applyLabel";
qx.Class.define(o,
{extend:qx.ui.core.Widget,
type:D,
construct:function(){arguments.callee.base.call(this);
this.__lp=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},
properties:{open:{check:q,
init:false,
event:g,
apply:G},
openSymbolMode:{check:[n,
E,
b],
init:b,
event:u,
apply:v},
indent:{check:s,
init:19,
apply:t,
themeable:true},
parent:{check:o,
nullable:true},
icon:{check:j,
apply:F,
nullable:true,
themeable:true},
label:{check:j,
apply:H,
init:A,
dispose:true}},
members:{__lp:null,
__lq:null,
__lr:null,
__ls:null,
__lt:null,
_addWidgets:function(){throw new Error("Abstract method call.");
},
_createChildControlImpl:function(I){var J;
switch(I){case f:J=new qx.ui.basic.Label().set({appearance:this.getAppearance()+w,
alignY:d});
break;
case c:J=new qx.ui.basic.Image().set({appearance:this.getAppearance()+x,
alignY:d});
break;
case a:J=new qx.ui.tree.FolderOpenButton().set({alignY:d});
J.addListener(g,
this._onChangeOpen,
this);
J.addListener(y,
this._updateIndent,
this);
break;
}return J||arguments.callee.base.call(this,
I);
},
getTree:function(){var K=this;
while(K.getParent()){K=K.getParent();
}var L=K.getLayoutParent()?K.getLayoutParent().getLayoutParent():0;
if(L&&L instanceof qx.ui.core.ScrollPane){return L.getLayoutParent();
}return null;
},
addWidget:function(M,
N){this._add(M,
N);
},
addSpacer:function(){if(!this.__lt){this.__lt=new qx.ui.core.Spacer();
}else{this._remove(this.__lt);
}this._add(this.__lt);
},
addOpenButton:function(){this._add(this.getChildControl(a));
},
_onChangeOpen:function(O){if(this.isOpenable()){this.setOpen(O.getData());
}},
addIcon:function(){var P=this.getChildControl(c);
if(this.__ls){this._remove(P);
}this._add(P);
this.__ls=true;
},
addLabel:function(Q){var R=this.getChildControl(f);
if(this.__lr){this._remove(R);
}
if(Q){this.setLabel(Q);
}else{R.setContent(this.getLabel());
}this._add(R);
this.__lr=true;
},
addState:function(S){arguments.callee.base.call(this,
S);
var T=this._getChildren();
for(var U=0,
V=T.length;U<V;U++){var W=T[U];
if(W.addState){T[U].addState(S);
}}},
removeState:function(S){arguments.callee.base.call(this,
S);
var T=this._getChildren();
for(var U=0,
V=T.length;U<V;U++){var W=T[U];
if(W.addState){T[U].removeState(S);
}}},
_applyIcon:function(X,
Y){this.getChildControl(c).setSource(X);
},
_applyLabel:function(X,
Y){this.getChildControl(f).setContent(X);
},
_applyOpen:function(X,
Y){if(this.hasChildren()){this.getChildrenContainer().setVisibility(X?k:h);
}var ba=this.getChildControl(a,
true);
if(ba){ba.setOpen(X);
}X?this.addState(m):this.removeState(m);
},
isOpenable:function(){var bb=this.getOpenSymbolMode();
return (bb===n||bb===b&&this.hasChildren());
},
_shouldShowOpenSymbol:function(){var ba=this.getChildControl(a,
true);
if(!ba){return false;
}var L=this.getTree();
if(!L.getRootOpenClose()){if(L.getHideRoot()){if(L.getRoot()==this.getParent()){return false;
}}else{if(L.getRoot()==this){return false;
}}}return this.isOpenable();
},
_applyOpenSymbolMode:function(X,
Y){this._updateIndent();
},
_updateIndent:function(){if(!this.getTree()){return;
}var bc=0;
var ba=this.getChildControl(a,
true);
if(ba){if(this._shouldShowOpenSymbol()){ba.show();
var bd=ba.getBounds();
if(bd){bc=bd.width;
}else{return;
}}else{ba.exclude();
}}this.__lt.setWidth((this.getLevel()+1)*this.getIndent()-bc);
},
_applyIndent:function(X,
Y){this._updateIndent();
},
getLevel:function(){var L=this.getTree();
if(!L){return;
}var K=this;
var be=-1;
while(K){K=K.getParent();
be+=1;
}if(L.getHideRoot()){be-=1;
}
if(!L.getRootOpenClose()){be-=1;
}return be;
},
syncWidget:function(){this._updateIndent();
},
getChildrenContainer:function(){if(!this.__lq){this.__lq=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?k:h});
}return this.__lq;
},
getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},
getChildren:function(){return this.__lp;
},
hasChildren:function(){return this.__lp?this.__lp.length>0:false;
},
getItems:function(bf,
bg,
bh){if(bh!==false){var bi=[];
}else{var bi=[this];
}var bj=this.hasChildren()&&(bg!==false||this.isOpen());
if(bj){var T=this.getChildren();
if(bf===false){bi=bi.concat(T);
}else{for(var U=0,
bk=T.length;U<bk;U++){bi=bi.concat(T[U].getItems(bf,
bg,
false));
}}}return bi;
},
recursiveAddToWidgetQueue:function(){var T=this.getItems(true,
true,
false);
for(var U=0,
V=T.length;U<V;U++){qx.ui.core.queue.Widget.add(T[U]);
}},
__lu:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),
this);
}},
add:function(bl){var bm=this.getChildrenContainer();
var L=this.getTree();
for(var U=0,
V=arguments.length;U<V;U++){var K=arguments[U];
var bn=K.getParent();
if(bn){bn.remove(K);
}K.setParent(this);
var bo=this.hasChildren();
bm.add(K);
if(K.hasChildren()){bm.add(K.getChildrenContainer());
}this.__lp.push(K);
if(!bo){this.__lu();
}
if(L){K.recursiveAddToWidgetQueue();
L.fireNonBubblingEvent(p,
qx.event.type.Data,
[K]);
}}
if(L){qx.ui.core.queue.Widget.add(this);
}},
addAt:function(K,
bp){{};
if(bp==this.__lp.length){this.add(K);
return;
}var bn=K.getParent();
if(bn){bn.remove(K);
}var bm=this.getChildrenContainer();
K.setParent(this);
var bo=this.hasChildren();
var bq=this.__lp[bp];
bm.addBefore(K,
bq);
if(K.hasChildren()){bm.addAfter(K.getChildrenContainer(),
K);
}qx.lang.Array.insertAt(this.__lp,
K,
bp);
if(!bo){this.__lu();
}
if(this.getTree()){K.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},
addBefore:function(K,
br){{};
this.addAt(K,
this.__lp.indexOf(br));
},
addAfter:function(K,
bs){{};
this.addAt(K,
this.__lp.indexOf(bs)+1);
},
addAtBegin:function(K){this.addAt(K,
0);
},
remove:function(bl){for(var U=0,
V=arguments.length;U<V;U++){var K=arguments[U];
if(this.__lp.indexOf(K)==-1){this.warn("Cannot remove treeitem '"+K+"'. It is not a child of this tree item.");
return;
}var bm=this.getChildrenContainer();
if(K.hasChildren()){bm.remove(K.getChildrenContainer());
}qx.lang.Array.remove(this.__lp,
K);
K.setParent(null);
bm.remove(K);
}var L=this.getTree();
if(L){L.fireNonBubblingEvent(C,
qx.event.type.Data,
[K]);
}qx.ui.core.queue.Widget.add(this);
},
removeAt:function(bp){var bt=this.__lp[bp];
if(bt){this.remove(bt);
}},
removeAll:function(){for(var U=this.__lp.length-1;U>=0;U--){this.remove(this.__lp[U]);
}}},
destruct:function(){this._disposeArray(z);
this._disposeObjects(B,
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
q="Integer",
r="list",
s="keyinput",
t="changeSelection",
u="addItem",
v="removeChildWidget",
w="_applyOrientation",
x="single",
y="keypress",
z="changeName",
A="__jK",
B="String",
C="pane",
D="removeItem";
qx.Class.define(h,
{extend:qx.ui.core.AbstractScrollArea,
implement:qx.ui.form.IFormElement,
include:[qx.ui.core.MRemoteChildrenHandling,
qx.ui.core.MSelectionHandling],
construct:function(E){arguments.callee.base.call(this);
this.__jK=new qx.ui.container.Composite();
this.__jK.addListener(n,
this._onAddChild,
this);
this.__jK.addListener(v,
this._onRemoveChild,
this);
this.getChildControl(C).add(this.__jK);
if(E){this.setOrientation(b);
}else{this.initOrientation();
}this.addListener(y,
this._onKeyPress);
this.addListener(s,
this._onKeyInput);
this.addListener(t,
this._onChangeSelection);
this.__jL=f;
},
events:{addItem:a,
removeItem:a,
changeValue:a},
properties:{appearance:{refine:true,
init:r},
focusable:{refine:true,
init:true},
orientation:{check:[b,
d],
init:d,
apply:w},
spacing:{check:q,
init:0,
apply:o,
themeable:true},
enableInlineFind:{check:j,
init:true},
name:{check:B,
nullable:true,
event:z}},
members:{__jL:null,
__jM:null,
__jK:null,
SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,
getChildrenContainer:function(){return this.__jK;
},
_onAddChild:function(F){this.fireDataEvent(u,
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
var P=this.__jK;
P.setLayout(O);
P.setAllowGrowX(!E);
P.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},
_applySpacing:function(I,
N){this.__jK.getLayout().setSpacing(I);
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
if(!(R===x||R===k)){return;
}if(((new Date).valueOf()-this.__jM)>1000){this.__jL=f;
}this.__jL+=F.getChar();
var S=this.findItemByLabelFuzzy(this.__jL);
if(S){this.select(S);
}this.__jM=(new Date).valueOf();
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
destruct:function(){this._disposeObjects(A);
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
y){var z=this.__tW();
this.setHtml(z);
qx.html.Element.flush();
var A=this.getContentElement().getDomElement();
var B=A.getElementsByTagName(p);
for(var C=0;C<B.length;C++){B[C].target=m;
}},
__tW:function(){var D=this.getArticle();
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
b="pop",
c="reverse",
d="join",
e="unshift",
f="[List ",
g="qx.List",
h="number",
j="]",
k="slice",
l="sort",
m="shift",
n="qx.client",
o="push",
p="splice";
qx.Bootstrap.define(g,
{statics:{define:function(q,
r){if(!r){var r={};
}{};
function s(t){if(arguments.length==1&&typeof (t)==h){var u=(t%1===0);
if(t>0&&u){this.length=t;
}else{this.length=this.push(arguments[0]);
}}else if(arguments.length){this.push.apply(this,
arguments);
}}var v=function(){};
v.prototype=[];
s.prototype=new v();
var w=s.prototype;
if(qx.core.Variant.isSet(n,
a)){s.prototype={$$isArray:true};
var w=s.prototype;
var x=[b,
o,
c,
m,
l,
p,
e,
d,
k];
for(var y=0;y<x.length;y++){var z=x[y];
w[z]=window.Array.prototype[z];
}}w.length=0;
w.constructor=s;
w.toString=w.join;
w.toLocaleString=this.__sw;
s.prototype.concat=this.__sv;
var A=qx.Bootstrap.createNamespace(q,
s,
false);
s.classname=q;
w.classname=q;
w.basename=s.basename=A;
s.toString=this.genericToString;
var B=r.statics;
if(B){for(var C in B){s[C]=B[C];
}}var D=r.members;
if(D){for(var C in D){w[C]=D[C];
}}if(r.defer){r.defer.self=s;
r.defer(s,
w);
}this.$$registry[q]=s;
},
genericToString:function(){return f+this.classname+j;
},
__sv:function(){var E=this.slice(0,
this.length);
return E.concat.apply(E,
arguments);
},
__sw:function(){return this.slice(0).toLocaleString();
},
$$registry:qx.Bootstrap.$$registry,
__sx:null,
__sy:null}});
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
p="NumLock",
q="5",
r="8",
s="__kO",
t="__kP",
u="execute",
v="Meta",
w="0",
x="PageDown",
y="Shift",
z="You can only specify one non modifier key!",
A="3",
B="/",
C="Delete",
D="String",
E="changeEnabled",
F="*",
G="Not a valid key name for a command: ",
H="6",
I="4",
J="Alt",
K="2",
L="Whitespaces are not allowed within shortcuts",
M="_applyEnabled",
N="1",
O="7",
P="qx.event.Command",
Q="a",
R="z",
S="9";
qx.Class.define(P,
{extend:qx.core.Object,
construct:function(T){arguments.callee.base.call(this);
this.__kO={};
this.__kP=null;
if(T!=null){this.setShortcut(T);
}{};
this.initEnabled();
},
events:{"execute":m},
properties:{enabled:{init:true,
check:l,
event:E,
apply:M},
shortcut:{check:D,
apply:n,
nullable:true}},
members:{execute:function(U){this.fireDataEvent(u,
U);
},
__kQ:function(V){if(this.getEnabled()&&this.matchesKeyEvent(V)){this.execute(V.getTarget());
V.preventDefault();
V.stopPropagation();
}},
_applyEnabled:function(W,
X){if(W){qx.event.Registration.addListener(document.documentElement,
f,
this.__kQ,
this);
}else{qx.event.Registration.removeListener(document.documentElement,
f,
this.__kQ,
this);
}},
_applyShortcut:function(W,
X){if(W){if(W.search(/[\s]+/)!=-1){var Y=L;
this.error(Y);
throw Y;
}this.__kO={"Control":false,
"Shift":false,
"Meta":false,
"Alt":false};
this.__kP=null;
var ba;
var bb=[];
while(W.length>0&&ba!=-1){ba=W.search(/[-+]+/);
bb.push((W.length==1||ba==-1)?W:W.substring(0,
ba));
W=W.substring(ba+1);
}var bc=bb.length;
for(var bd=0;bd<bc;bd++){var be=this.__kS(bb[bd]);
switch(be){case g:case y:case v:case J:this.__kO[be]=true;
break;
case b:var Y=G+bb[bd];
this.error(Y);
throw Y;
default:if(this.__kP){var Y=z;
this.error(Y);
throw Y;
}this.__kP=be;
}}}return true;
},
matchesKeyEvent:function(bf){var bg=this.__kP;
if(!bg){return ;
}if((!this.__kO.Shift&&bf.isShiftPressed())||(this.__kO.Shift&&!bf.isShiftPressed())||(!this.__kO.Control&&bf.isCtrlPressed())||(this.__kO.Control&&!bf.isCtrlPressed())||(!this.__kO.Meta&&bf.isMetaPressed())||(this.__kO.Meta&&!bf.isMetaPressed())||(!this.__kO.Alt&&bf.isAltPressed())||(this.__kO.Alt&&!bf.isAltPressed())){return false;
}
if(bg==bf.getKeyIdentifier()){return true;
}return false;
},
__kR:{esc:k,
ctrl:g,
print:o,
del:C,
pageup:j,
pagedown:x,
numlock:p,
numpad_0:w,
numpad_1:N,
numpad_2:K,
numpad_3:A,
numpad_4:I,
numpad_5:q,
numpad_6:H,
numpad_7:O,
numpad_8:r,
numpad_9:S,
numpad_divide:B,
numpad_multiply:F,
numpad_minus:h,
numpad_plus:c},
__kS:function(bh){var bi=qx.event.handler.Keyboard;
var bj=b;
if(bi.isValidKeyIdentifier(bh)){return bh;
}
if(bh.length==1&&bh>=Q&&bh<=R){return bh.toUpperCase();
}bh=bh.toLowerCase();
var bj=this.__kR[bh]||qx.lang.String.firstUp(bh);
if(bi.isValidKeyIdentifier(bj)){return bj;
}else{return b;
}},
toString:function(){var bg=this.__kP;
var bk=[];
for(var bl in this.__kO){if(this.__kO[bl]){bk.push(qx.locale.Key.getKeyName(d,
bl));
}}
if(bg){bk.push(qx.locale.Key.getKeyName(d,
bg));
}return bk.join(c);
}},
destruct:function(){this.setEnabled(false);
this._disposeFields(s,
t);
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
this.__tX(m),
this);
p.send();
},
__tX:function(m){return function(q){var r=q.getContent();
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
k="nocache",
l="completed",
m="configured",
n="timeout",
o="GET",
p="Pragma",
q="no-url-params-on-post",
r="POST",
s="no-cache",
t="Cache-Control",
u="Content-Type",
w="text/plain",
x="application/xml",
y="application/json",
z="text/html",
A="application/x-www-form-urlencoded",
B="qx.io.remote.Exchange",
C="Integer",
D="X-Qooxdoo-Response-Type",
E="HEAD",
F="qx.io.remote.Request",
G="__tY",
H="_applyResponseType",
I="_applyState",
J="text/javascript",
K="changeState",
L="PUT",
M="_applyProhibitCaching",
N="",
O="_applyMethod",
P="DELETE",
Q="boolean",
R="__uc",
S="__ua";
qx.Class.define(F,
{extend:qx.core.Object,
construct:function(T,
U,
V){arguments.callee.base.call(this);
this.__tY={};
this.__ua={};
this.__ub={};
this.__uc={};
if(T!==undefined){this.setUrl(T);
}
if(U!==undefined){this.setMethod(U);
}
if(V!==undefined){this.setResponseType(V);
}this.setProhibitCaching(true);
this.__ud=++qx.io.remote.Request.__ud;
},
events:{"created":b,
"configured":b,
"sending":b,
"receiving":b,
"completed":g,
"aborted":g,
"failed":g,
"timeout":g},
statics:{__ud:0},
properties:{url:{check:d,
init:N},
method:{check:[o,
r,
L,
E,
P],
apply:O,
init:o},
asynchronous:{check:a,
init:true},
data:{check:d,
nullable:true},
username:{check:d,
nullable:true},
password:{check:d,
nullable:true},
state:{check:[m,
c,
f,
h,
l,
i,
n,
j],
init:m,
apply:I,
event:K},
responseType:{check:[w,
J,
y,
x,
z],
init:w,
apply:H},
timeout:{check:C,
nullable:true},
prohibitCaching:{check:function(W){return typeof W==Q||W===q;
},
init:true,
apply:M},
crossDomain:{check:a,
init:false},
fileUpload:{check:a,
init:false},
transport:{check:B,
nullable:true},
useBasicHttpAuth:{check:a,
init:false}},
members:{__tY:null,
__ua:null,
__ub:null,
__uc:null,
__ud:null,
send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},
abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},
reset:function(){switch(this.getState()){case f:case h:this.error("Aborting already sent request!");
case c:this.abort();
break;
}},
isConfigured:function(){return this.getState()===m;
},
isQueued:function(){return this.getState()===c;
},
isSending:function(){return this.getState()===f;
},
isReceiving:function(){return this.getState()===h;
},
isCompleted:function(){return this.getState()===l;
},
isAborted:function(){return this.getState()===i;
},
isTimeout:function(){return this.getState()===n;
},
isFailed:function(){return this.getState()===j;
},
__ue:function(X){var Y=X.clone();
Y.setTarget(this);
this.dispatchEvent(Y);
},
_onqueued:function(X){this.setState(c);
this.__ue(X);
},
_onsending:function(X){this.setState(f);
this.__ue(X);
},
_onreceiving:function(X){this.setState(h);
this.__ue(X);
},
_oncompleted:function(X){this.setState(l);
this.__ue(X);
this.dispose();
},
_onaborted:function(X){this.setState(i);
this.__ue(X);
this.dispose();
},
_ontimeout:function(X){this.setState(n);
this.__ue(X);
this.dispose();
},
_onfailed:function(X){this.setState(j);
this.__ue(X);
this.dispose();
},
_applyState:function(ba,
bb){{};
},
_applyProhibitCaching:function(ba,
bb){if(!ba){this.removeParameter(k);
this.removeRequestHeader(p);
this.removeRequestHeader(t);
return;
}if(ba!==q||this.getMethod()!=qx.net.Http.METHOD_POST){this.setParameter(k,
new Date().valueOf());
}else{this.removeParameter(k);
}this.setRequestHeader(p,
s);
this.setRequestHeader(t,
s);
},
_applyMethod:function(ba,
bb){if(ba===r){this.setRequestHeader(u,
A);
}else{this.removeRequestHeader(u);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,
bc);
},
_applyResponseType:function(ba,
bb){this.setRequestHeader(D,
ba);
},
setRequestHeader:function(bd,
be){this.__tY[bd]=be;
},
removeRequestHeader:function(bd){delete this.__tY[bd];
},
getRequestHeader:function(bd){return this.__tY[bd]||null;
},
getRequestHeaders:function(){return this.__tY;
},
setParameter:function(bd,
be,
bf){if(bf){this.__ub[bd]=be;
}else{this.__ua[bd]=be;
}},
removeParameter:function(bd,
bg){if(bg){delete this.__ub[bd];
}else{delete this.__ua[bd];
}},
getParameter:function(bd,
bg){if(bg){return this.__ub[bd]||null;
}else{return this.__ua[bd]||null;
}},
getParameters:function(bg){return (bg?this.__ub:this.__ua);
},
setFormField:function(bd,
be){this.__uc[bd]=be;
},
removeFormField:function(bd){delete this.__uc[bd];
},
getFormField:function(bd){return this.__uc[bd]||null;
},
getFormFields:function(){return this.__uc;
},
getSequenceNumber:function(){return this.__ud;
}},
destruct:function(){this.setTransport(null);
this._disposeFields(G,
S,
R);
}});
})();
(function(){var a="Integer",
b="sending",
c="failed",
d="timeout",
f="completed",
g="aborted",
h="__ug",
j="_applyEnabled",
k="Boolean",
l="interval",
m="__ui",
n="qx.io.remote.RequestQueue",
o="__uf",
p="queued",
q="receiving",
r="singleton";
qx.Class.define(n,
{type:r,
extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
this.__uf=[];
this.__ug=[];
this.__uh=0;
this.__ui=new qx.event.Timer(500);
this.__ui.addListener(l,
this._oninterval,
this);
},
properties:{enabled:{init:true,
check:k,
apply:j},
maxTotalRequests:{check:a,
nullable:true},
maxConcurrentRequests:{check:a,
init:3},
defaultTimeout:{check:a,
init:5000}},
members:{__uf:null,
__ug:null,
__uh:null,
__ui:null,
_debug:function(){var s;
},
_check:function(){this._debug();
if(this.__ug.length==0&&this.__uf.length==0){this.__ui.stop();
}if(!this.getEnabled()){return;
}if(this.__ug.length>=this.getMaxConcurrentRequests()||this.__uf.length==0){return;
}if(this.getMaxTotalRequests()!=null&&this.__uh>=this.getMaxTotalRequests()){return;
}var t=this.__uf.shift();
var u=new qx.io.remote.Exchange(t);
this.__uh++;
this.__ug.push(u);
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
if(this.__uf.length>0){this._check();
}},
_remove:function(u){qx.lang.Array.remove(this.__ug,
u);
u.dispose();
this._check();
},
__uj:0,
_onsending:function(v){{};
},
_oncompleted:function(v){{};
this._remove(v.getTarget());
},
_oninterval:function(v){var w=this.__ug;
if(w.length==0){this.__ui.stop();
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
}this.__ui.setEnabled(C);
},
add:function(t){t.setState(p);
this.__uf.push(t);
this._check();
if(this.getEnabled()){this.__ui.start();
}},
abort:function(t){var u=t.getTransport();
if(u){u.abort();
}else if(qx.lang.Array.contains(this.__uf,
t)){qx.lang.Array.remove(this.__uf,
t);
}}},
destruct:function(){this._disposeArray(h);
this._disposeObjects(m);
this._disposeFields(o);
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
(function(){var a="completed",
b="failed",
c="=",
d="aborted",
f="",
g="&",
h="timeout",
j="application/xml",
k="qx.io.remote.transport.XmlHttp",
m="application/json",
n="text/html",
o="qx.client",
p="receiving",
q="text/plain",
r="text/javascript",
t="sending",
u="configured",
v="?",
w="created",
x='Referer',
y="__uk",
z='Basic ',
A="\n</pre>",
B="string",
C='Authorization',
D="<pre>Could not execute json: \n",
E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
F=':',
G="parseerror",
H="file:",
I="webkit",
J="object";
qx.Class.define(k,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
this.__uk=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__uk.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
statics:{handles:{synchronous:true,
asynchronous:true,
crossDomain:false,
fileUpload:false,
programaticFormFields:false,
responseTypes:[q,
r,
m,
j,
n]},
requestObjects:[],
requestObjectCount:0,
createRequestObject:qx.core.Variant.select(o,
{"default":function(){return new XMLHttpRequest;
},
"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),
isSupported:function(){return !!this.createRequestObject();
},
__ul:function(){}},
members:{__um:false,
__un:0,
__uk:null,
getRequest:function(){return this.__uk;
},
send:function(){this.__un=0;
var K=this.getRequest();
var L=this.getMethod();
var M=this.getAsynchronous();
var N=this.getUrl();
var O=(window.location.protocol===H&&!(/^http(s){0,1}\:/.test(N)));
this.__um=O;
var P=this.getParameters(false);
var Q=[];
for(var R in P){var S=P[R];
if(S instanceof Array){for(var T=0;T<S.length;T++){Q.push(encodeURIComponent(R)+c+encodeURIComponent(S[T]));
}}else{Q.push(encodeURIComponent(R)+c+encodeURIComponent(S));
}}
if(Q.length>0){N+=(N.indexOf(v)>=0?g:v)+Q.join(g);
}if(this.getData()===null){var P=this.getParameters(true);
var Q=[];
for(var R in P){var S=P[R];
if(S instanceof Array){for(var T=0;T<S.length;T++){Q.push(encodeURIComponent(R)+c+encodeURIComponent(S[T]));
}}else{Q.push(encodeURIComponent(R)+c+encodeURIComponent(S));
}}
if(Q.length>0){this.setData(Q.join(g));
}}var U=function(V){var W=E;
var X=f;
var Y,
ba,
bb;
var bc,
bd,
be,
bf;
var T=0;
do{Y=V.charCodeAt(T++);
ba=V.charCodeAt(T++);
bb=V.charCodeAt(T++);
bc=Y>>2;
bd=((Y&3)<<4)|(ba>>4);
be=((ba&15)<<2)|(bb>>6);
bf=bb&63;
if(isNaN(ba)){be=bf=64;
}else if(isNaN(bb)){bf=64;
}X+=W.charAt(bc)+W.charAt(bd)+W.charAt(be)+W.charAt(bf);
}while(T<V.length);
return X;
};
K.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){K.open(L,
N,
M);
K.setRequestHeader(C,
z+U(this.getUsername()+F+this.getPassword()));
}else{K.open(L,
N,
M,
this.getUsername(),
this.getPassword());
}}else{K.open(L,
N,
M);
}}catch(ex){this.error("Failed with exception: "+ex);
this.failed();
return;
}if(!qx.core.Variant.isSet(o,
I)){K.setRequestHeader(x,
window.location.href);
}var bg=this.getRequestHeaders();
for(var R in bg){K.setRequestHeader(R,
bg[R]);
}try{{};
K.send(this.getData());
}catch(ex){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+ex,
"send");
this.failed();
}return;
}if(!M){this._onreadystatechange();
}},
failedLocally:function(){if(this.getState()===b){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},
_onreadystatechange:function(bh){switch(this.getState()){case a:case d:case b:case h:{};
return;
}var bi=this.getReadyState();
if(bi==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),
bi,
this.__um)){return this.failed();
}}while(this.__un<bi){this.setState(qx.io.remote.Exchange._nativeMap[++this.__un]);
}},
getReadyState:function(){var bi=null;
try{bi=this.__uk.readyState;
}catch(ex){}return bi;
},
setRequestHeader:function(bj,
bk){this.__uk.setRequestHeader(bj,
bk);
},
getResponseHeader:function(bj){var bl=null;
try{this.getRequest().getResponseHeader(bj)||null;
}catch(ex){}return bl;
},
getStringResponseHeaders:function(){var bm=null;
try{var bn=this.__uk.getAllResponseHeaders();
if(bn){bm=bn;
}}catch(ex){}return bm;
},
getResponseHeaders:function(){var bm=this.getStringResponseHeaders();
var bo={};
if(bm){var bp=bm.split(/[\r\n]+/g);
for(var T=0,
bq=bp.length;T<bq;T++){var br=bp[T].match(/^([^:]+)\s*:\s*(.+)$/i);
if(br){bo[br[1]]=br[2];
}}}return bo;
},
getStatusCode:function(){var bs=-1;
try{bs=this.getRequest().status;
}catch(ex){}return bs;
},
getStatusText:function(){var bt=f;
try{bt=this.getRequest().statusText;
}catch(ex){}return bt;
},
getResponseText:function(){var bu=null;
var bv=this.getStatusCode();
var bi=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful(bv,
bi,
this.__um)){try{bu=this.getRequest().responseText;
}catch(ex){}}return bu;
},
getResponseXml:function(){var bw=null;
var bv=this.getStatusCode();
var bi=this.getReadyState();
if(qx.io.remote.Exchange.wasSuccessful(bv,
bi,
this.__um)){try{bw=this.getRequest().responseXML;
}catch(ex){}}if(typeof bw==J&&bw!=null){if(!bw.documentElement){var bx=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,
f);
bw.loadXML(bx);
}if(!bw.documentElement){throw new Error("Missing Document Element!");
}
if(bw.documentElement.tagName==G){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bw;
},
getFetchedLength:function(){var by=this.getResponseText();
return typeof by==B?by.length:0;
},
getResponseContent:function(){if(this.getState()!==a){{};
return null;
}{};
var by=this.getResponseText();
switch(this.getResponseType()){case q:case n:{};
return by;
case m:{};
try{if(by&&by.length>0){var bz=qx.util.Json.parseQx(by);
return (bz===0?0:(bz||null));
}else{return null;
}}catch(ex){this.error("Could not execute json: ["+by+"]",
ex);
return D+by+A;
}case r:{};
try{if(by&&by.length>0){var bz=window.eval(by);
return (bz===0?0:(bz||null));
}else{return null;
}}catch(ex){this.error("Could not execute javascript: ["+by+"]",
ex);
return null;
}case j:by=this.getResponseXml();
{};
return (by===0?0:(by||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},
_applyState:function(S,
bA){{};
switch(S){case w:this.fireEvent(w);
break;
case u:this.fireEvent(u);
break;
case t:this.fireEvent(t);
break;
case p:this.fireEvent(p);
break;
case a:this.fireEvent(a);
break;
case b:this.fireEvent(b);
break;
case d:this.getRequest().abort();
this.fireEvent(d);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
}}},
defer:function(bB,
bC){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,
k);
},
destruct:function(){var K=this.getRequest();
if(K){K.onreadystatechange=qx.io.remote.transport.XmlHttp.__ul;
switch(K.readyState){case 1:case 2:case 3:K.abort();
}}this._disposeFields(y);
}});
})();
(function(){var a="qx.client",
b="",
c="mshtml",
d="'",
e="SelectionLanguage",
f="qx.xml.Document",
g=" />",
h="MSXML2.DOMDocument.3.0",
j='<\?xml version="1.0" encoding="utf-8"?>\n<',
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
t.setProperty(e,
p);
if(s){var u=j;
u+=s;
if(r){u+=n+r+d;
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
h];
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
m="__si",
n=")",
o='\\\\',
p="__sr",
q="__sg",
r='\\f',
s="Object",
t='\\"',
u="))",
v="}",
w='(',
x=":",
y="{",
z='\\r',
A="(",
B='\\t',
C="__sh",
D="]",
E="__sj",
F="[",
G="__sq",
H="qx.jsonEncodeUndefined",
I='\\b',
J="qx.util.Json",
K=')',
L='\\n',
M="Date",
N="Array";
qx.Class.define(J,
{statics:{BEAUTIFYING_INDENT:"  ",
BEAUTIFYING_LINE_END:"\n",
__sf:{"function":q,
"boolean":C,
"number":m,
"string":E,
"object":G,
"undefined":p},
__sg:function(O){return String(O);
},
__sh:function(O){return String(O);
},
__si:function(O){return isFinite(O)?String(O):f;
},
__sj:function(O){var P;
if(/["\\\x00-\x1f]/.test(O)){P=O.replace(/([\x00-\x1f\\"])/g,
qx.util.Json.__sl);
}else{P=O;
}return g+P+g;
},
__sk:{'\b':I,
'\t':B,
'\n':L,
'\f':r,
'\r':z,
'"':t,
'\\':o},
__sl:function(Q,
R){var P=qx.util.Json.__sk[R];
if(P){return P;
}P=R.charCodeAt();
return j+Math.floor(P/16).toString(16)+(P%16).toString(16);
},
__sm:function(O){var S=[],
T=true,
U,
V;
var W=qx.util.Json.__ss;
S.push(F);
if(W){qx.util.Json.__sn+=qx.util.Json.BEAUTIFYING_INDENT;
S.push(qx.util.Json.__sn);
}
for(var X=0,
Y=O.length;X<Y;X++){V=O[X];
U=this.__sf[typeof V];
if(U){V=this[U](V);
if(typeof V==e){if(!T){S.push(c);
if(W){S.push(qx.util.Json.__sn);
}}S.push(V);
T=false;
}}}
if(W){qx.util.Json.__sn=qx.util.Json.__sn.substring(0,
qx.util.Json.__sn.length-qx.util.Json.BEAUTIFYING_INDENT.length);
S.push(qx.util.Json.__sn);
}S.push(D);
return S.join(d);
},
__so:function(O){var ba=O.getUTCFullYear()+c+O.getUTCMonth()+c+O.getUTCDate()+c+O.getUTCHours()+c+O.getUTCMinutes()+c+O.getUTCSeconds()+c+O.getUTCMilliseconds();
return k+ba+u;
},
__sp:function(O){var S=[],
T=true,
U,
V;
var W=qx.util.Json.__ss;
S.push(y);
if(W){qx.util.Json.__sn+=qx.util.Json.BEAUTIFYING_INDENT;
S.push(qx.util.Json.__sn);
}
for(var bb in O){V=O[bb];
U=this.__sf[typeof V];
if(U){V=this[U](V);
if(typeof V==e){if(!T){S.push(c);
if(W){S.push(qx.util.Json.__sn);
}}S.push(this.__sj(bb),
x,
V);
T=false;
}}}
if(W){qx.util.Json.__sn=qx.util.Json.__sn.substring(0,
qx.util.Json.__sn.length-qx.util.Json.BEAUTIFYING_INDENT.length);
S.push(qx.util.Json.__sn);
}S.push(v);
return S.join(d);
},
__sq:function(O){if(O){var bc=O.constructor.name;
if(O instanceof Array||bc==N){return this.__sm(O);
}else if(O instanceof Date||bc==M){return this.__so(O);
}else if(O instanceof Object||bc==s){return this.__sp(O);
}return d;
}return f;
},
__sr:function(O){if(qx.core.Setting.get(H)){return f;
}},
stringify:function(V,
W){this.__ss=W;
this.__sn=this.BEAUTIFYING_LINE_END;
var P=this[this.__sf[typeof V]](V);
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
}var V=(bd&&bd.length>0)?eval(w+bd+K):null;
return V;
}},
settings:{"qx.jsonEncodeUndefined":true,
"qx.jsonDebugging":false}});
})();
(function(){var a="=",
b="&",
c="application/xml",
d="application/json",
f="text/html",
g="qx.client",
h="textarea",
j="none",
k="text/plain",
l="text/javascript",
m="",
n="completed",
o="?",
p="qx.io.remote.transport.Iframe",
q="gecko",
r="frame_",
s="__uo",
t="aborted",
u="_data_",
v="pre",
w="javascript:void(0)",
x="__up",
y="sending",
z="form",
A="failed",
B='<iframe name="',
C="mshtml",
D="form_",
E='"></iframe>',
F="iframe",
G="timeout",
H="qx/static/blank.gif";
qx.Class.define(p,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
var I=(new Date).valueOf();
var J=r+I;
var K=D+I;
if(qx.core.Variant.isSet(g,
C)){this.__uo=document.createElement(B+J+E);
}else{this.__uo=document.createElement(F);
}this.__uo.src=w;
this.__uo.id=this.__uo.name=J;
this.__uo.onload=qx.lang.Function.bind(this._onload,
this);
this.__uo.style.display=j;
document.body.appendChild(this.__uo);
this.__up=document.createElement(z);
this.__up.target=J;
this.__up.id=this.__up.name=K;
this.__up.style.display=j;
document.body.appendChild(this.__up);
this.__uq=document.createElement(h);
this.__uq.id=this.__uq.name=u;
this.__up.appendChild(this.__uq);
this.__uo.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,
this);
},
statics:{handles:{synchronous:false,
asynchronous:true,
crossDomain:false,
fileUpload:true,
programaticFormFields:true,
responseTypes:[k,
l,
d,
c,
f]},
isSupported:function(){return true;
},
_numericMap:{"uninitialized":1,
"loading":2,
"loaded":2,
"interactive":3,
"complete":4}},
members:{__uq:null,
__ur:0,
__up:null,
__uo:null,
send:function(){var L=this.getMethod();
var M=this.getUrl();
var N=this.getParameters(false);
var O=[];
for(var P in N){var Q=N[P];
if(Q instanceof Array){for(var R=0;R<Q.length;R++){O.push(encodeURIComponent(P)+a+encodeURIComponent(Q[R]));
}}else{O.push(encodeURIComponent(P)+a+encodeURIComponent(Q));
}}
if(O.length>0){M+=(M.indexOf(o)>=0?b:o)+O.join(b);
}if(this.getData()===null){var N=this.getParameters(true);
var O=[];
for(var P in N){var Q=N[P];
if(Q instanceof Array){for(var R=0;R<Q.length;R++){O.push(encodeURIComponent(P)+a+encodeURIComponent(Q[R]));
}}else{O.push(encodeURIComponent(P)+a+encodeURIComponent(Q));
}}
if(O.length>0){this.setData(O.join(b));
}}var S=this.getFormFields();
for(var P in S){var T=document.createElement(h);
T.name=P;
T.appendChild(document.createTextNode(S[P]));
this.__up.appendChild(T);
}this.__up.action=M;
this.__up.method=L;
this.__uq.appendChild(document.createTextNode(this.getData()));
this.__up.submit();
this.setState(y);
},
_onload:function(U){if(this.__up.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
},
_onreadystatechange:function(U){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__uo.readyState]);
},
_switchReadyState:function(V){switch(this.getState()){case n:case t:case A:case G:this.warn("Ignore Ready State Change");
return;
}while(this.__ur<V){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ur]);
}},
setRequestHeader:function(W,
X){},
getResponseHeader:function(W){return null;
},
getResponseHeaders:function(){return {};
},
getStatusCode:function(){return 200;
},
getStatusText:function(){return m;
},
getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__uo);
},
getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__uo);
},
getIframeBody:function(){return qx.bom.Iframe.getBody(this.__uo);
},
getIframeTextContent:function(){var Y=this.getIframeBody();
if(!Y){return null;
}
if(!Y.firstChild){return m;
}if(Y.firstChild.tagName&&Y.firstChild.tagName.toLowerCase()==v){return Y.firstChild.innerHTML;
}else{return Y.innerHTML;
}},
getIframeHtmlContent:function(){var Y=this.getIframeBody();
return Y?Y.innerHTML:null;
},
getFetchedLength:function(){return 0;
},
getResponseContent:function(){if(this.getState()!==n){{};
return null;
}{};
var ba=this.getIframeTextContent();
switch(this.getResponseType()){case k:{};
return ba;
break;
case f:ba=this.getIframeHtmlContent();
{};
return ba;
break;
case d:ba=this.getIframeHtmlContent();
{};
try{return ba&&ba.length>0?qx.util.Json.parseQx(ba):null;
}catch(ex){return this.error("Could not execute json: ("+ba+")",
ex);
}case l:ba=this.getIframeHtmlContent();
{};
try{return ba&&ba.length>0?window.eval(ba):null;
}catch(ex){return this.error("Could not execute javascript: ("+ba+")",
ex);
}case c:ba=this.getIframeDocument();
{};
return ba;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function(bb,
bc,
bd){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,
p);
},
destruct:function(){if(this.__uo){this.__uo.onload=null;
this.__uo.onreadystatechange=null;
if(qx.core.Variant.isSet(g,
q)){this.__uo.src=qx.util.ResourceManager.toUri(H);
}document.body.removeChild(this.__uo);
}
if(this.__up){document.body.removeChild(this.__up);
}this._disposeFields(s,
x);
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
l="__ut",
m="_responseContent",
n="script",
o="timeout",
p="_ScriptTransport_",
q="_ScriptTransport_id",
r="aborted",
s="utf-8",
t="failed";
qx.Class.define(h,
{extend:qx.io.remote.transport.Abstract,
construct:function(){arguments.callee.base.call(this);
var u=++qx.io.remote.transport.Script.__us;
if(u>=2000000000){qx.io.remote.transport.Script.__us=u=1;
}this.__ut=null;
this.__us=u;
},
statics:{__us:0,
_instanceRegistry:{},
ScriptTransport_PREFIX:p,
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
members:{__uu:0,
__ut:null,
__us:null,
send:function(){var y=this.getUrl();
y+=(y.indexOf(c)>=0?a:c)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+b+this.__us;
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
}qx.io.remote.transport.Script._instanceRegistry[this.__us]=this;
this.__ut=document.createElement(n);
this.__ut.charset=s;
this.__ut.src=y;
{};
document.body.appendChild(this.__ut);
},
_switchReadyState:function(F){switch(this.getState()){case e:case r:case t:case o:this.warn("Ignore Ready State Change");
return;
}while(this.__uu<F){this.setState(qx.io.remote.Exchange._nativeMap[++this.__uu]);
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
var I=this._responseContent;
return (I===0?0:(I||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},
defer:function(J,
K,
L){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,
h);
qx.io.remote.ScriptTransport=J;
},
destruct:function(){if(this.__ut){delete qx.io.remote.transport.Script._instanceRegistry[this.__us];
document.body.removeChild(this.__ut);
}this._disposeFields(l,
m);
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
getResponseHeader:function(f){var g=this.getResponseHeaders();
if(g){return g[f]||null;
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
I="__kb",
J='K',
K="EEEE",
L="^",
M='y',
N="(\\d\\d(\\d\\d)?)",
O="(\\d\\d)",
P="__ke",
Q="K",
R="__kc",
S="((\\+|\\-)\\d\\d:?\\d\\d)",
T="a",
U="GMT",
V="S",
W="dd",
X="qx.util.format.DateFormat",
Y="__kd",
ba="H",
bb="HH",
bc="EE",
bd="mm",
be='h',
bf='s',
bg='A',
bh="KK",
bi="ss",
bj="__kf",
bk='H',
bl='S',
bm="0",
bn="MMMM",
bo="d",
bp="([a-zA-Z]+)",
bq='k',
br="m",
bs='D',
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
qx.Class.define(X,
{extend:qx.core.Object,
implement:qx.util.format.IFormat,
construct:function(bP,
bQ){arguments.callee.base.call(this);
if(!bQ){this.__kb=qx.locale.Manager.getInstance().getLocale();
}else{this.__kb=bQ;
}
if(bP!=null){this.__kc=bP.toString();
}else{this.__kc=qx.locale.Date.getDateFormat(u,
this.__kb)+C+qx.locale.Date.getDateTimeFormat(t,
v,
this.__kb);
}},
statics:{getDateTimeInstance:function(){var bR=qx.util.format.DateFormat;
var bP=qx.locale.Date.getDateFormat(u)+C+qx.locale.Date.getDateTimeFormat(t,
v);
if(bR._dateInstance==null||bR.__kc!=bP){bR._dateTimeInstance=new bR();
}return bR._dateTimeInstance;
},
getDateInstance:function(){var bR=qx.util.format.DateFormat;
var bP=qx.locale.Date.getDateFormat(by)+b;
if(bR._dateInstance==null||bR.__kc!=bP){bR._dateInstance=new bR(bP);
}return bR._dateInstance;
},
ASSUME_YEAR_2000_THRESHOLD:30,
LOGGING_DATE_TIME__format:bx,
AM_MARKER:"am",
PM_MARKER:"pm",
MEDIUM_TIMEZONE_NAMES:["GMT"],
FULL_TIMEZONE_NAMES:["Greenwich Mean Time"]},
members:{__kb:null,
__kc:null,
__kd:null,
__ke:null,
__kf:null,
__kg:function(bS,
bT){var bU=b+bS;
while(bU.length<bT){bU=bm+bU;
}return bU;
},
__kh:function(bV){var bW=new Date(bV.getTime());
var bX=bW.getDate();
while(bW.getMonth()!=0){bW.setDate(-1);
bX+=bW.getDate()+1;
}return bX;
},
__ki:function(bV){return new Date(bV.getTime()+(3-((bV.getDay()+6)%7))*86400000);
},
__kj:function(bV){var bY=this.__ki(bV);
var ca=bY.getFullYear();
var cb=this.__ki(new Date(ca,
0,
4));
return Math.floor(1.5+(bY.getTime()-cb.getTime())/86400000/7);
},
format:function(bV){var bR=qx.util.format.DateFormat;
var bQ=this.__kb;
var cc=bV.getFullYear();
var cd=bV.getMonth();
var ce=bV.getDate();
var cf=bV.getDay();
var cg=bV.getHours();
var ch=bV.getMinutes();
var ci=bV.getSeconds();
var cj=bV.getMilliseconds();
var ck=bV.getTimezoneOffset()/60;
this.__kk();
var cl=b;
for(var cm=0;cm<this.__kf.length;cm++){var cn=this.__kf[cm];
if(cn.type==k){cl+=cn.text;
}else{var co=cn.character;
var cp=cn.size;
var cq=bL;
switch(co){case M:if(cp==2){cq=this.__kg(cc%100,
2);
}else if(cp==4){cq=cc;
}break;
case bs:cq=this.__kg(this.__kh(bV),
cp);
break;
case bz:cq=this.__kg(ce,
cp);
break;
case bI:cq=this.__kg(this.__kj(bV),
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
case bE:if(cp==1||cp==2){cq=this.__kg(cd+1,
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
case bk:cq=this.__kg(cg,
cp);
break;
case bq:cq=this.__kg((cg==0)?24:cg,
cp);
break;
case J:cq=this.__kg(cg%12,
cp);
break;
case be:cq=this.__kg(((cg%12)==0)?12:(cg%12),
cp);
break;
case bB:cq=this.__kg(ch,
cp);
break;
case bf:cq=this.__kg(ci,
cp);
break;
case bl:cq=this.__kg(cj,
cp);
break;
case w:if(cp==1){cq=U+((ck<0)?p:s)+this.__kg(ck)+bC;
}else if(cp==2){cq=bR.MEDIUM_TIMEZONE_NAMES[ck];
}else if(cp==3){cq=bR.FULL_TIMEZONE_NAMES[ck];
}break;
case A:cq=((ck<0)?p:s)+this.__kg(ck,
2)+H;
}cl+=cq;
}}return cl;
},
parse:function(cr){this.__kl();
var cs=this.__kd.regex.exec(cr);
if(cs==null){throw new Error("Date string '"+cr+"' does not match the date format: "+this.__kc);
}var ct={year:1970,
month:0,
day:1,
hour:0,
ispm:false,
min:0,
sec:0,
ms:0};
var cu=1;
for(var cm=0;cm<this.__kd.usedRules.length;cm++){var cv=this.__kd.usedRules[cm];
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
__kk:function(){if(this.__kf!=null){return;
}this.__kf=[];
var cx;
var cy=0;
var cz=b;
var bP=this.__kc;
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
}else{this.__kf.push({type:h,
character:cx,
size:cy});
cx=null;
cy=0;
cA=j;
}break;
default:if((cB>=r&&cB<=w)||(cB>=bg&&cB<=A)){cx=cB;
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
if(cA!=j){if(cz.length>0){this.__kf.push({type:k,
text:cz});
cz=b;
}}else{cz+=cB;
cm++;
}break;
}}if(cx!=null){this.__kf.push({type:h,
character:cx,
size:cy});
}else if(cz.length>0){this.__kf.push({type:k,
text:cz});
}},
__kl:function(){if(this.__kd!=null){return ;
}var bP=this.__kc;
this.__km();
this.__kk();
var cD=[];
var cE=L;
for(var cF=0;cF<this.__kf.length;cF++){var cn=this.__kf[cF];
if(cn.type==k){cE+=qx.lang.String.escapeRegexpChars(cn.text);
}else{var co=cn.character;
var cp=cn.size;
var cG;
for(var cH=0;cH<this.__ke.length;cH++){var cv=this.__ke[cH];
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
}this.__kd={regex:cJ,
"usedRules":cD,
pattern:cE};
},
__km:function(){var bR=qx.util.format.DateFormat;
if(this.__ke!=null){return ;
}this.__ke=[];
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
this.__kb);
for(var cm=0;cm<cQ.length;cm++){cQ[cm]=qx.lang.String.escapeRegexpChars(cQ[cm].toString());
}var cR=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cQ.indexOf(cw);
};
var cS=qx.locale.Date.getMonthNames(g,
this.__kb);
for(var cm=0;cm<cS.length;cm++){cS[cm]=qx.lang.String.escapeRegexpChars(cS[cm].toString());
}var cT=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cS.indexOf(cw);
};
var cU=qx.locale.Date.getDayNames(z,
this.__kb);
for(var cm=0;cm<cU.length;cm++){cU[cm]=qx.lang.String.escapeRegexpChars(cU[cm].toString());
}var cV=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cU.indexOf(cw);
};
var cW=qx.locale.Date.getDayNames(f,
this.__kb);
for(var cm=0;cm<cW.length;cm++){cW[cm]=qx.lang.String.escapeRegexpChars(cW[cm].toString());
}var cX=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cW.indexOf(cw);
};
var cY=qx.locale.Date.getDayNames(g,
this.__kb);
for(var cm=0;cm<cY.length;cm++){cY[cm]=qx.lang.String.escapeRegexpChars(cY[cm].toString());
}var da=function(ct,
cw){cw=qx.lang.String.escapeRegexpChars(cw);
ct.month=cY.indexOf(cw);
};
this.__ke.push({pattern:bO,
regex:N,
groups:2,
manipulator:cK});
this.__ke.push({pattern:bw,
regex:O,
manipulator:cK});
this.__ke.push({pattern:bH,
regex:a,
manipulator:cL});
this.__ke.push({pattern:bv,
regex:a,
manipulator:cL});
this.__ke.push({pattern:bF,
regex:c+cQ.join(e)+d,
manipulator:cR});
this.__ke.push({pattern:bn,
regex:c+cS.join(e)+d,
manipulator:cT});
this.__ke.push({pattern:W,
regex:a,
field:y});
this.__ke.push({pattern:bo,
regex:a,
field:y});
this.__ke.push({pattern:bc,
regex:c+cU.join(e)+d,
manipulator:cV});
this.__ke.push({pattern:bJ,
regex:c+cW.join(e)+d,
manipulator:cX});
this.__ke.push({pattern:K,
regex:c+cY.join(e)+d,
manipulator:da});
this.__ke.push({pattern:T,
regex:c+bR.AM_MARKER+e+bR.PM_MARKER+d,
manipulator:cM});
this.__ke.push({pattern:bb,
regex:a,
field:m});
this.__ke.push({pattern:ba,
regex:a,
field:m});
this.__ke.push({pattern:bt,
regex:a,
manipulator:cN});
this.__ke.push({pattern:bD,
regex:a,
manipulator:cN});
this.__ke.push({pattern:bh,
regex:a,
field:m});
this.__ke.push({pattern:Q,
regex:a,
field:m});
this.__ke.push({pattern:bu,
regex:a,
manipulator:cO});
this.__ke.push({pattern:E,
regex:a,
manipulator:cO});
this.__ke.push({pattern:bd,
regex:a,
field:B});
this.__ke.push({pattern:br,
regex:a,
field:B});
this.__ke.push({pattern:bi,
regex:a,
field:x});
this.__ke.push({pattern:bG,
regex:a,
field:x});
this.__ke.push({pattern:D,
regex:n,
field:o});
this.__ke.push({pattern:F,
regex:n,
field:o});
this.__ke.push({pattern:V,
regex:n,
field:o});
this.__ke.push({pattern:G,
regex:S,
manipulator:cP});
this.__ke.push({pattern:bN,
regex:bp,
manipulator:cP});
}},
destruct:function(){this._disposeFields(R,
I,
bj,
Y,
P);
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
{statics:{__ka:qx.locale.Manager.getInstance(),
getAmMarker:function(B){return this.__ka.localize(w,
[],
B);
},
getPmMarker:function(B){return this.__ka.localize(t,
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
E.push(this.__ka.localize(G,
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
return this.__ka.localize(G,
[],
B);
},
getMonthNames:function(C,
B){{};
var E=[];
for(var F=0;F<12;F++){var G=e+C+a+(F+1);
E.push(this.__ka.localize(G,
[],
B));
}return E;
},
getMonthName:function(C,
I,
B){{};
var G=e+C+a+(I+1);
return this.__ka.localize(G,
[],
B);
},
getDateFormat:function(J,
B){{};
var G=q+J;
return this.__ka.localize(G,
[],
B);
},
getDateTimeFormat:function(K,
L,
B){var G=y+K;
var M=this.__ka.localize(G,
[],
B);
if(M==G){M=L;
}return M;
},
getTimeFormat:function(J,
B){{};
var G=z+J;
var M=this.__ka.localize(G,
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
}else{O=this.__ka.getTerritory()||this.__ka.getLanguage();
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
h="losecapture",
i="se-resize",
j="resize-frame",
k="ne-resize",
l="n-resize",
m="sw-resize",
n="mouseout",
o="s-resize",
p="mousemove",
q="move",
r="maximized",
s="Integer",
t="e-resize",
u="qx.ui.core.MResizable",
v="__if";
qx.Mixin.define(u,
{construct:function(){this.addListener(f,
this.__ip,
this,
true);
this.addListener(d,
this.__iq,
this);
this.addListener(p,
this.__is,
this);
this.addListener(n,
this.__it,
this);
this.addListener(h,
this.__ir,
this);
},
properties:{resizable:{check:b,
init:true},
resizeAllEdges:{check:b,
init:true},
resizeSensitivity:{check:s,
init:5},
useResizeFrame:{check:b,
init:true}},
members:{__if:null,
__ig:null,
__ih:null,
__ii:null,
__ij:null,
__ik:function(){var w=this.__if;
if(!w){w=this.__if=new qx.ui.core.Widget();
w.setAppearance(j);
w.exclude();
qx.core.Init.getApplication().getRoot().add(w);
}return w;
},
__il:function(){var x=this.__ij;
var w=this.__ik();
w.setUserBounds(x.left,
x.top,
x.width,
x.height);
w.show();
w.setZIndex(this.getZIndex()+1);
},
__im:function(y){var z=this.__ig;
var A=this.getSizeHint();
var B=this.__ij;
var C=B.width;
var D=B.height;
var E=B.left;
var F=B.top;
var G;
if(z&1||z&2){G=y.getDocumentTop()-this.__ii;
if(z&1){D-=G;
}else{D+=G;
}
if(D<A.minHeight){D=A.minHeight;
}else if(D>A.maxHeight){D=A.maxHeight;
}
if(z&1){F+=B.height-D;
}}if(z&4||z&8){G=y.getDocumentLeft()-this.__ih;
if(z&4){C-=G;
}else{C+=G;
}
if(C<A.minWidth){C=A.minWidth;
}else if(C>A.maxWidth){C=A.maxWidth;
}
if(z&4){E+=B.width-C;
}}var x=this.getBounds();
return {viewportLeft:E,
viewportTop:F,
parentLeft:x.left+E-B.left,
parentTop:x.top+F-B.top,
width:C,
height:D};
},
__in:{1:l,
2:o,
4:g,
8:t,
5:c,
6:m,
9:k,
10:i},
__io:function(y){if(!this.getResizable()){return;
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
}this.__ig=z;
},
__ip:function(y){if(!this.__ig){return;
}this.addState(a);
this.capture();
this.__ih=y.getDocumentLeft();
this.__ii=y.getDocumentTop();
var M=this.getContainerLocation();
var x=this.getBounds();
this.__ij={top:M.top,
left:M.left,
width:x.width,
height:x.height};
if(this.getUseResizeFrame()){this.__il();
}y.stop();
},
__iq:function(y){if(!this.__ig){return;
}if(this.getUseResizeFrame()){this.__ik().exclude();
}var x=this.__im(y);
this.setWidth(x.width);
this.setHeight(x.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:x.parentLeft,
top:x.parentTop});
}this.__ig=0;
this.removeState(a);
this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.releaseCapture();
},
__ir:function(y){if(!this.__ig){return;
}this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
this.removeState(q);
if(this.getUseResizeFrame()){this.__ik().exclude();
}},
__is:function(y){if(this.hasState(a)){var x=this.__im(y);
if(this.getUseResizeFrame()){var w=this.__ik();
w.setUserBounds(x.viewportLeft,
x.viewportTop,
x.width,
x.height);
}else{this.setWidth(x.width);
this.setHeight(x.height);
if(this.getResizeAllEdges()){this.setLayoutProperties({left:x.parentLeft,
top:x.parentTop});
}}y.stop();
}else if(!this.hasState(r)){this.__io(y);
var z=this.__ig;
var N=this.getApplicationRoot();
if(z){var O=this.__in[z];
this.setCursor(O);
N.setGlobalCursor(O);
}else if(this.getCursor()){this.resetCursor();
N.resetGlobalCursor();
}}},
__it:function(y){if(this.getCursor()&&!this.hasState(a)){this.resetCursor();
this.getApplicationRoot().resetGlobalCursor();
}}},
destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var a="move",
b="Boolean",
c="mouseup",
d="mousedown",
f="losecapture",
g="qx.ui.core.MMovable",
h="mousemove",
i="maximized",
j="__iu",
k="__iv",
l="__iw",
m="move-frame";
qx.Mixin.define(g,
{properties:{movable:{check:b,
init:true},
useMoveFrame:{check:b,
init:false}},
members:{__iu:null,
__iv:null,
__iw:null,
__ix:null,
__iy:null,
__iz:null,
__iA:null,
_activateMoveHandle:function(n){if(this.__iu){throw new Error("The move handle could not be redefined!");
}this.__iu=n;
n.addListener(d,
this._onMoveMouseDown,
this);
n.addListener(c,
this._onMoveMouseUp,
this);
n.addListener(h,
this._onMoveMouseMove,
this);
n.addListener(f,
this.__iE,
this);
},
__iB:function(){var o=this.__iv;
if(!o){o=this.__iv=new qx.ui.core.Widget();
o.setAppearance(m);
o.exclude();
qx.core.Init.getApplication().getRoot().add(o);
}return o;
},
__iC:function(){var p=this.getBounds();
var o=this.__iB();
o.setUserBounds(p.left,
p.top,
p.width,
p.height);
o.show();
o.setZIndex(this.getZIndex()+1);
},
__iD:function(q){var r=this.__iw;
var s=Math.max(r.left,
Math.min(r.right,
q.getDocumentLeft()));
var t=Math.max(r.top,
Math.min(r.bottom,
q.getDocumentTop()));
var u=this.__ix+s;
var v=this.__iy+t;
return {viewportLeft:u,
viewportTop:v,
parentLeft:u-this.__iz,
parentTop:v-this.__iA};
},
_onMoveMouseDown:function(q){if(!this.getMovable()||this.hasState(i)){return;
}var w=this.getLayoutParent();
var x=w.getContentLocation();
var y=w.getBounds();
this.__iw={left:x.left,
top:x.top,
right:x.left+y.width,
bottom:x.top+y.height};
var z=this.getContainerLocation();
this.__iz=x.left;
this.__iA=x.top;
this.__ix=z.left-q.getDocumentLeft();
this.__iy=z.top-q.getDocumentTop();
this.addState(a);
this.__iu.capture();
if(this.getUseMoveFrame()){this.__iC();
}q.stop();
},
_onMoveMouseMove:function(q){if(!this.hasState(a)){return;
}var A=this.__iD(q);
if(this.getUseMoveFrame()){this.__iB().setDomPosition(A.viewportLeft,
A.viewportTop);
}else{this.setDomPosition(A.parentLeft,
A.parentTop);
}},
_onMoveMouseUp:function(q){if(!this.hasState(a)){return;
}this.removeState(a);
this.__iu.releaseCapture();
var A=this.__iD(q);
this.setLayoutProperties({left:A.parentLeft,
top:A.parentTop});
if(this.getUseMoveFrame()){this.__iB().exclude();
}},
__iE:function(q){if(!this.hasState(a)){return;
}this.removeState(a);
if(this.getUseMoveFrame()){this.__iB().exclude();
}}},
destruct:function(){this._disposeObjects(k,
j);
this._disposeFields(l);
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
(function(){var a="qx.ui.window.Manager",
b="__iF";
qx.Class.define(a,
{extend:qx.core.Object,
implement:qx.ui.window.IWindowManager,
members:{__iF:null,
setDesktop:function(c){this.__iF=c;
this.updateStack();
},
changeActiveWindow:function(d,
e){this.bringToFront(d);
},
_minZIndex:1e5,
updateStack:function(){qx.ui.core.queue.Widget.add(this);
},
syncWidget:function(){this.__iF.unblockContent();
var f=this.__iF.getWindows();
var g=this._minZIndex-1;
var h=false;
var j,
k;
for(var m=0,
n=f.length;m<n;m++){j=f[m];
if(!j.isVisible()){continue;
}g+=2;
j.setZIndex(g);
if(j.getModal()){this.__iF.blockContent(g-1);
}h=h||j.isActive();
k=j;
}
if(!h&&k){k.setActive(true);
}},
bringToFront:function(j){var f=this.__iF.getWindows();
var o=qx.lang.Array.remove(f,
j);
if(o){f.push(j);
this.updateStack();
}},
sendToBack:function(j){var f=this.__iF.getWindows();
var o=qx.lang.Array.remove(f,
j);
if(o){f.unshift(j);
this.updateStack();
}}},
destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var a="Boolean",
b="qx.event.type.Event",
c="captionbar",
d="maximize-button",
f="_applyCaptionBarChange",
g="restore-button",
h="minimize-button",
i="close-button",
j="execute",
k="pane",
l="title",
m="icon",
n="maximized",
o="statusbar-text",
p="statusbar",
q="String",
r="active",
s="beforeClose",
t="beforeMinimize",
u="mousedown",
v="changeStatus",
w="changeIcon",
x="excluded",
y="_applyCaption",
z="_applyActive",
A="beforeRestore",
B="normal",
C="minimize",
D="dblclick",
E="changeModal",
F="_applyShowStatusbar",
G="_applyStatus",
H="qx.ui.window.Window",
I="changeCaption",
J="_applyIcon",
K="focusout",
L="beforeMaximize",
M="maximize",
N="restore",
O="window",
P="close",
Q="changeActive",
R="minimized";
qx.Class.define(H,
{extend:qx.ui.core.Widget,
include:[qx.ui.core.MRemoteChildrenHandling,
qx.ui.core.MRemoteLayoutHandling,
qx.ui.core.MResizable,
qx.ui.core.MMovable,
qx.ui.core.MContentPadding],
construct:function(S,
T){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.VBox());
this._createChildControl(c);
this._createChildControl(k);
if(T!=null){this.setIcon(T);
}
if(S!=null){this.setCaption(S);
}this._updateCaptionBar();
this.addListener(u,
this._onWindowMouseDown,
this,
true);
this.addListener(K,
this._onWindowFocusOut,
this);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
qx.ui.core.FocusHandler.getInstance().addRoot(this);
},
statics:{DEFAULT_MANAGER_CLASS:qx.ui.window.Manager},
events:{"beforeClose":b,
"close":b,
"beforeMinimize":b,
"minimize":b,
"beforeMaximize":b,
"maximize":b,
"beforeRestore":b,
"restore":b},
properties:{appearance:{refine:true,
init:O},
visibility:{refine:true,
init:x},
focusable:{refine:true,
init:true},
active:{check:a,
init:false,
apply:z,
event:Q},
modal:{check:a,
init:false,
event:E},
caption:{apply:y,
event:I,
nullable:true},
icon:{check:q,
nullable:true,
apply:J,
event:w,
themeable:true},
status:{check:q,
nullable:true,
apply:G,
event:v},
showClose:{check:a,
init:true,
apply:f,
themeable:true},
showMaximize:{check:a,
init:true,
apply:f,
themeable:true},
showMinimize:{check:a,
init:true,
apply:f,
themeable:true},
allowClose:{check:a,
init:true,
apply:f},
allowMaximize:{check:a,
init:true,
apply:f},
allowMinimize:{check:a,
init:true,
apply:f},
showStatusbar:{check:a,
init:false,
apply:F}},
members:{__iG:null,
__iH:null,
getChildrenContainer:function(){return this.getChildControl(k);
},
_forwardStates:{active:true,
maximized:true},
setLayoutParent:function(U){{};
arguments.callee.base.call(this,
U);
},
_createChildControlImpl:function(V){var W;
switch(V){case p:W=new qx.ui.container.Composite(new qx.ui.layout.HBox());
this._add(W);
W.add(this.getChildControl(o));
break;
case o:W=new qx.ui.basic.Label();
W.setContent(this.getStatus());
break;
case k:W=new qx.ui.container.Composite();
this._add(W,
{flex:1});
break;
case c:var X=new qx.ui.layout.Grid();
X.setColumnFlex(1,
1);
X.setRowFlex(0,
1);
W=new qx.ui.container.Composite(X);
this._add(W);
W.addListener(D,
this._onCaptionMouseDblClick,
this);
this._activateMoveHandle(W);
break;
case m:W=new qx.ui.basic.Image(this.getIcon());
this.getChildControl(c).add(W,
{row:0,
column:0});
break;
case l:W=new qx.ui.basic.Label(this.getCaption());
W.setWidth(0);
W.setAllowGrowX(true);
this.getChildControl(c).add(W,
{row:0,
column:1});
break;
case h:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(j,
this._onMinimizeButtonClick,
this);
this.getChildControl(c).add(W,
{row:0,
column:2});
break;
case g:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(j,
this._onRestoreButtonClick,
this);
this.getChildControl(c).add(W,
{row:0,
column:3});
break;
case d:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(j,
this._onMaximizeButtonClick,
this);
this.getChildControl(c).add(W,
{row:0,
column:4});
break;
case i:W=new qx.ui.form.Button();
W.setFocusable(false);
W.addListener(j,
this._onCloseButtonClick,
this);
this.getChildControl(c).add(W,
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
if(this.getShowMinimize()){this._showChildControl(h);
Y=this.getChildControl(h);
this.getAllowMinimize()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(h);
}
if(this.getShowMaximize()){if(this.isMaximized()){this._showChildControl(g);
this._excludeChildControl(d);
}else{this._showChildControl(d);
this._excludeChildControl(g);
}Y=this.getChildControl(d);
this.getAllowMaximize()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(d);
this._excludeChildControl(g);
}
if(this.getShowClose()){this._showChildControl(i);
Y=this.getChildControl(i);
this.getAllowClose()?Y.resetEnabled():Y.setEnabled(false);
}else{this._excludeChildControl(i);
}},
close:function(){if(this.fireNonBubblingEvent(s,
qx.event.type.Event,
[false,
true])){this.hide();
this.fireEvent(P);
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
if(bd<0){bd=0;
}this.moveTo(bc,
bd);
return;
}}{};
},
maximize:function(){if(this.isMaximized()){return;
}var U=this.getLayoutParent();
if(!U){return;
}
if(U.supportsMaximize()){if(this.fireNonBubblingEvent(L,
qx.event.type.Event,
[false,
true])){var be=this.getLayoutProperties();
this.__iH=be.left===undefined?0:be.left;
this.__iG=be.top===undefined?0:be.top;
this.setLayoutProperties({left:null,
top:null,
edge:0});
this.addState(n);
this._updateCaptionBar();
this.fireEvent(M);
}}},
minimize:function(){if(this.fireNonBubblingEvent(t,
qx.event.type.Event,
[false,
true])){this.hide();
this.fireEvent(C);
}},
restore:function(){if(!this.isMaximized()){return;
}
if(this.fireNonBubblingEvent(A,
qx.event.type.Event,
[false,
true])){var bc=this.__iH;
var bd=this.__iG;
this.setLayoutProperties({edge:null,
left:bc,
top:bd});
this.removeState(n);
this._updateCaptionBar();
this.fireEvent(N);
}},
moveTo:function(bc,
bd){if(this.isMaximized()){return;
}this.setLayoutProperties({left:bc,
top:bd});
},
isMaximized:function(){return this.hasState(n);
},
getMode:function(){if(!this.isVisible()){return R;
}else{if(this.isMaximized()){return n;
}else{return B;
}}},
_applyActive:function(bf,
bg){if(bg){this.removeState(r);
}else{this.addState(r);
}},
_getContentPaddingTarget:function(){return this.getChildControl(k);
},
_applyShowStatusbar:function(bf,
bg){if(bf){this._showChildControl(p);
}else{this._excludeChildControl(p);
}},
_applyCaptionBarChange:function(bf,
bg){this._updateCaptionBar();
},
_applyStatus:function(bf,
bg){var bh=this.getChildControl(o,
true);
if(bh){bh.setContent(bf);
}},
_applyCaption:function(bf,
bg){this.getChildControl(l).setContent(bf);
},
_applyIcon:function(bf,
bg){this.getChildControl(m).setSource(bf);
},
_onWindowEventStop:function(bi){bi.stopPropagation();
},
_onWindowMouseDown:function(bi){this.setActive(true);
},
_onWindowFocusOut:function(bi){if(this.getModal()){return;
}var bj=bi.getRelatedTarget();
if(bj!=null&&!qx.ui.core.Widget.contains(this,
bj)){this.setActive(false);
}},
_onCaptionMouseDblClick:function(bi){if(this.getAllowMaximize()){this.isMaximized()?this.restore():this.maximize();
}},
_onMinimizeButtonClick:function(bi){this.minimize();
this.getChildControl(h).reset();
},
_onRestoreButtonClick:function(bi){this.restore();
this.getChildControl(g).reset();
},
_onMaximizeButtonClick:function(bi){this.maximize();
this.getChildControl(d).reset();
},
_onCloseButtonClick:function(bi){this.close();
this.getChildControl(i).reset();
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
_getContentPaddingTarget:function(){return this.getChildControl(b);
},
_applyLegendPosition:function(n){if(this.getChildControl(a).getBounds()){this._repositionFrame();
}},
_repositionFrame:function(){var j=this.getChildControl(a);
var o=this.getChildControl(b);
var p=j.getBounds().height;
if(this.getLegendPosition()==c){o.setLayoutProperties({"top":Math.round(p/2)});
}else if(this.getLegendPosition()==d){o.setLayoutProperties({"top":p});
}},
getChildrenContainer:function(){return this.getChildControl(b);
},
setLegend:function(j){var m=this.getChildControl(a);
if(j!==null){m.setLabel(j);
m.show();
}else{m.exclude();
}},
getLegend:function(){return this.getChildControl(a).getLabel();
},
setIcon:function(k){this.getChildControl(a).setIcon(k);
},
getIcon:function(){this.getChildControl(a).getIcon();
}}});
})();
(function(){var a="Boolean",
b="changeValue",
c="changeChecked",
d="changeSelected",
f="changeEnabled",
g="__hI",
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
this.__hI=[];
if(r!=null){this.add.apply(this,
arguments);
}this.addListener(d,
this._onChangeSelected);
},
properties:{enabled:{check:a,
apply:o,
event:f},
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
members:{__hI:null,
getItems:function(){return this.__hI;
},
select:function(s){this.setSelected(s);
},
setValue:function(t){var u=this.__hI;
var s;
for(var v=0,
w=u.length;v<w;v++){s=u[v];
if(s.getValue()==t){this.setSelected(s);
break;
}}},
getValue:function(){var x=this.getSelected();
return x?x.getValue():null;
},
add:function(r){var u=this.__hI;
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
remove:function(s){if(s.getGroup()===this){qx.lang.Array.remove(this.__hI,
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
z){var u=this.__hI;
if(t==null){for(var v=0,
w=u.length;v<w;v++){u[v].resetEnabled();
}}else{for(var v=0,
w=u.length;v<w;v++){u[v].setEnabled(true);
}}},
_applyName:function(t,
z){var u=this.__hI;
if(t==null){for(var v=0,
w=u.length;v<w;v++){u[v].resetName();
}}else{for(var v=0,
w=u.length;v<w;v++){u[v].setName(t);
}}},
selectNext:function(){var s=this.getSelected();
var u=this.__hI;
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
var u=this.__hI;
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
destruct:function(){this._disposeArray(g);
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
b="changeValue",
c="qx.client",
d="color",
f="readonly",
g="qx.event.type.Data",
h="readOnly",
i="text",
j="_applyTextAlign",
k="Enter",
l="gecko",
m="right",
n="string",
o="Boolean",
p="change",
q="textAlign",
r="center",
s="disabled",
t="_applyReadOnly",
u="resize",
v="qx.ui.form.AbstractField",
w="transparent",
x="off",
y="spellcheck",
z="on",
A="false",
B="keypress",
C="mshtml",
D="abstract",
E="block",
F="changeName",
G="webkit",
H="String",
I="qxKeepFocus",
J="left",
K="A";
qx.Class.define(v,
{extend:qx.ui.core.Widget,
implement:qx.ui.form.IFormElement,
type:D,
construct:function(L){arguments.callee.base.call(this);
if(L!=null){this.setValue(L);
}this.getContentElement().addListener(p,
this._onChangeContent,
this);
if(qx.core.Variant.isSet(c,
C)){this.addListener(B,
function(M){if(M.getKeyIdentifier()===k){this.fireNonBubblingEvent(b,
qx.event.type.Data,
[this.getValue()]);
}},
this);
}},
events:{"input":g,
"changeValue":g},
properties:{name:{check:H,
nullable:true,
event:F},
textAlign:{check:[J,
r,
m],
nullable:true,
themeable:true,
apply:j},
readOnly:{check:o,
apply:t,
init:false},
selectable:{refine:true,
init:true},
focusable:{refine:true,
init:true}},
members:{getFocusElement:function(){return this.getContentElement();
},
_createInputElement:function(){return new qx.html.Input(i);
},
_createContentElement:function(){var N=this._createInputElement();
if(qx.core.Variant.isSet(c,
l)){N.setAttribute(y,
A);
}N.setStyles({"border":a,
"padding":0,
"margin":0,
"display":E,
"background":w,
"outline":a,
"appearance":a});
if(qx.core.Variant.isSet(c,
G)){N.setStyle(u,
a);
}return N;
},
_applyEnabled:function(L,
O){arguments.callee.base.call(this,
L,
O);
this.getContentElement().setAttribute(s,
L===false);
},
__ia:{width:16,
height:16},
_getContentHint:function(){return {width:this.__ia.width*10,
height:this.__ia.height||16};
},
_applyFont:function(L,
O){var P;
if(L){var Q=qx.theme.manager.Font.getInstance().resolve(L);
P=Q.getStyles();
}else{P=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(P);
if(L){this.__ia=qx.bom.Label.getTextSize(K,
P);
}else{delete this.__ia;
}qx.ui.core.queue.Layout.add(this);
},
_applyTextColor:function(L,
O){if(L){this.getContentElement().setStyle(d,
qx.theme.manager.Color.getInstance().resolve(L));
}else{this.getContentElement().removeStyle(d);
}},
tabFocus:function(){arguments.callee.base.call(this);
this.selectAll();
},
_getTextSize:function(){return this.__ia;
},
setValue:function(L){if(typeof L===n||L instanceof String){var R=this.getContentElement();
if(R.getValue()!=L){R.setValue(L);
this.fireNonBubblingEvent(b,
qx.event.type.Data,
[L]);
}return L;
}throw new Error("Invalid value type: "+L);
},
getValue:function(){return this.getContentElement().getValue();
},
_onChangeContent:function(M){this.fireNonBubblingEvent(b,
qx.event.type.Data,
[M.getData()]);
},
getSelection:function(){return this.getContentElement().getSelection();
},
getSelectionLength:function(){return this.getContentElement().getSelectionLength();
},
setSelection:function(S,
T){this.getContentElement().setSelection(S,
T);
},
clearSelection:function(){this.getContentElement().clearSelection();
},
selectAll:function(){this.setSelection(0);
},
_applyTextAlign:function(L,
O){this.getContentElement().setStyle(q,
L);
},
_applyReadOnly:function(L,
O){var U=this.getContentElement();
U.setAttribute(h,
L);
U.setAttribute(I,
L?z:x);
if(L){this.addState(f);
this.setFocusable(false);
}else{this.removeState(f);
this.setFocusable(true);
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
this.__ib=h;
if(h===g||h===c){this.setNodeName(h);
}else{this.setNodeName(e);
}},
members:{__ib:null,
_createDomElement:function(){return qx.bom.Input.create(this.__ib);
},
_applyProperty:function(i,
j){arguments.callee.base.call(this,
i,
j);
var k=this.getDomElement();
if(i===b){qx.bom.Input.setValue(k,
j);
}else if(i===a){qx.bom.Input.setWrap(k,
j);
}},
setValue:function(j){var k=this.getDomElement();
if(k){if(k.value!=j){qx.bom.Input.setValue(k,
j);
}}else{this._setProperty(b,
j);
}return this;
},
getValue:function(){var k=this.getDomElement();
if(k){return qx.bom.Input.getValue(k);
}return this._getProperty(b)||d;
},
setWrap:function(l){if(this.__ib===c){this._setProperty(a,
l);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},
getWrap:function(){if(this.__ib===c){return this._getProperty(a);
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
u){if(!r.__ic){var v=r.tagName.toLowerCase();
var s=r.type;
if(s===g||v===f||s===c||s===d){qx.bom.Event.addNativeListener(r,
j,
this._onPropertyWrapper);
}
if(s!==c&&s!==d){qx.bom.Event.addNativeListener(r,
a,
this._onChangeValueWrapper);
}r.__ic=true;
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
s){if(!r.__ic){var v=r.tagName.toLowerCase();
var s=r.type;
if(s===g||v===f||s===c||s===d){qx.bom.Event.removeNativeListener(r,
j,
this._onPropertyWrapper);
}
if(s!==c&&s!==d){qx.bom.Event.removeNativeListener(r,
a,
this._onChangeValueWrapper);
}delete r.__ic;
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
{statics:{__id:{text:1,
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
r){q.__ie=true;
q.value=r;
q.__ie=null;
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
