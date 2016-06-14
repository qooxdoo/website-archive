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
(function(){var a="qx.application.Native";
qx.Class.define(a,
{extend:qx.core.Object,
implement:[qx.application.IApplication],
members:{main:function(){},
finalize:function(){},
close:function(){},
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
(function(){var a="portal.Application";
qx.Class.define(a,
{extend:qx.application.Simple,
members:{main:function(){arguments.callee.base.call(this);
{};
var b=portal.box.Manager.getInstance().load();
var c=portal.dragdrop.Manager.getInstance();
}}});
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
(function(){var a="groupBoxes",
b="boxData",
c="portal.box.Box",
d="__uv",
e="__ux",
f="portal.box.Manager",
g="qx.event.type.Event",
h="boxes",
m="__uw",
n="_applyActiveBox",
o="loaded",
p="singleton";
qx.Class.define(f,
{type:p,
extend:qx.core.Object,
statics:{dataKeyRoot:b,
dataKeyGroupBoxes:a,
dataKeyBoxes:h},
events:{"loaded":g},
properties:{activeBox:{init:null,
check:c,
apply:n}},
members:{__uv:[],
__uw:[],
__ux:{},
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
this.__uw.push(w);
this.__ux[u]=[];
for(var A=0,
B=v.length;A<B;A++){s=z[v[A]];
var C=document.getElementById(s.id);
var x=new portal.box.Box(s,
C,
null,
u);
this.__uv.push(x);
this.__ux[u].push(x);
}}},
getBoxes:function(){return this.__uv;
},
getGroupBoxes:function(){return this.__uw;
},
updateGroupBoxMembers:function(D,
E,
F){var G=qx.dom.Hierarchy.getElementIndex(F.getElement());
qx.lang.Array.remove(this.__ux[E],
F);
qx.lang.Array.insertAt(this.__ux[D],
F,
G);
},
getGroupBoxDataOfBox:function(H){for(var I=0,
J=this.__uw.length,
z;I<J;I++){z=this.__ux[this.__uw[I].id];
for(var A=0,
B=z.length;A<B;A++){if(z[A].getId()===H){return this.__uw[I];
}}}return null;
}},
destruct:function(){this._disposeFields(d,
m,
e);
}});
})();
(function(){var a="Boolean",
b="border",
c="height",
d="__uA",
f="accumsan sit amet, nibh. Nam ut est. Nullam ultricies congue ",
g="erat volutpat. Praesent lorem arcu, cursus vel, congue vitae, ",
h="div",
i="1px solid orange",
j="orci. Morbi nulla. Donec quis ipsum.",
k="__uy",
l="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",
m="_applyActive",
n="at, justo. Sed aliquam aliquam orci. Sed in purus. Aliquam ",
o="relative",
p="String",
q="1px solid #444444",
r="width",
s="zIndex",
t="__uB",
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
this.__uy=A;
this.__uz=A.id;
if(B!=null){qx.bom.element.Style.set(B,
r,
A.width);
qx.bom.element.Style.set(B,
c,
A.height);
this.__uC(B,
C);
}this.setElement(B);
this.setGroupBoxId(D);
this.__uA=null;
this.__uB=null;
if(A.resizable){this.setResizable(true);
var E={minWidth:parseInt(A.minWidth),
minHeight:parseInt(A.minHeight),
maxWidth:parseInt(A.maxWidth),
maxHeight:parseInt(A.maxHeight),
handles:A.resizeHandles};
this.__uA=new portal.box.Resizable(this,
E);
}if(A.draggable){this.setDraggable(true);
this.__uB=new portal.box.Draggable(this);
}this.__uD();
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
i);
}else{qx.bom.element.Style.set(this.getElement(),
b,
q);
}},
getId:function(){return this.getElement()?this.getElement().id:null;
},
getData:function(){return this.__uy;
},
getDraggableComponent:function(){return this.__uB;
},
getResizableComponent:function(){return this.__uA;
},
__uC:function(B,
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
this.__uE,
this,
true);
},
__uD:function(){var I=l+x+y+n+g+f+j;
var J=qx.bom.Element.create(h,
{"class":z});
J.innerHTML=I;
qx.dom.Element.insertEnd(J,
this.getElement());
},
__uE:function(K){portal.box.Manager.getInstance().setActiveBox(this);
}},
destruct:function(){this.resetElement();
this._disposeFields(k,
d,
t);
}});
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
w="__uG",
x="div",
y="portal.box.Resizable",
z='paddingBottom',
A='paddingLeft',
B="__uK",
C='paddingTop',
D="_elementProperties",
E='paddingRight',
F="width",
G="_",
H="southeast",
I="__uF",
J="paddingBottom",
K="paddingTop",
L="east",
M="mouseup",
N="south",
O="__uJ",
P="__uH";
qx.Class.define(y,
{extend:qx.core.Object,
construct:function(Q,
R){arguments.callee.base.call(this);
this.__uF=Q;
this.__uG=this.__uF.getElement();
this.__uH={};
this.__uI=false;
this.__uJ=null;
this.__uK={minWidth:10,
minHeight:10,
maxWidth:null,
maxHeight:null,
autoHide:true,
handles:3};
for(var S in this.__uK){if(R[S]){this.__uK[S]=R[S];
}}this.__uM();
},
members:{_elementProperties:null,
__uL:{orientation:null,
lastCoord:{left:null,
top:null}},
getBox:function(){return this.__uF;
},
__uM:function(){this._elementProperties={paddingTop:parseInt(qx.bom.element.Style.get(this.__uG,
K)),
paddingRight:parseInt(qx.bom.element.Style.get(this.__uG,
b)),
paddingBottom:parseInt(qx.bom.element.Style.get(this.__uG,
J)),
paddingLeft:parseInt(qx.bom.element.Style.get(this.__uG,
f))};
switch(this.__uK.handles){case 1:this.__uH.east=null;
break;
case 2:this.__uH.south=null;
break;
case 3:this.__uH.south=null;
this.__uH.southeast=null;
this.__uH.east=null;
break;
}for(var T in this.__uH){var U=this.__uH[T]=qx.bom.Element.create(x);
qx.bom.element.Attribute.set(U,
h,
T);
qx.dom.Element.insertEnd(U,
this.__uG);
if(this.__uG.id){U.id=this.__uG.id+G+T;
}this.__uN(T);
this.__uO(T);
}},
__uN:function(T){qx.bom.element.Class.add(this.__uH[T],
T+v);
qx.bom.element.Style.set(this.__uH[T],
a,
this.__uK.autoHide?c:k);
},
__uO:function(T){var U=this.__uH[T];
qx.event.Registration.addListener(U,
r,
this.__uR,
this);
qx.event.Registration.addListener(document.body,
M,
this.__uS,
this);
if(this.__uK.autoHide){qx.event.Registration.addListener(this.__uF.getElement(),
n,
this.__uP,
this);
qx.event.Registration.addListener(this.__uF.getElement(),
d,
this.__uQ,
this);
}},
__uP:function(V){for(var T in this.__uH){qx.bom.element.Style.set(this.__uH[T],
a,
k);
}},
__uQ:function(V){if(!this.__uI){for(var T in this.__uH){qx.bom.element.Style.set(this.__uH[T],
a,
c);
}}},
__uR:function(V){V.stopPropagation();
if(V.isLeftPressed()){qx.event.Registration.addListener(document.body,
l,
this.__uT,
this,
true);
this.__uI=true;
var W=V.getTarget();
this.__uL.orientation=qx.bom.element.Attribute.get(W,
h);
this.__uL.lastCoord.left=V.getDocumentLeft();
this.__uL.lastCoord.top=V.getDocumentTop();
portal.box.Util.bringToFront(this.__uG);
}},
__uS:function(V){V.stopPropagation();
if(this.__uI){qx.event.Registration.removeListener(document.body,
l,
this.__uT,
this,
true);
portal.box.Util.sendToBack(this.__uG);
if(this.__uK.autoHide){for(var T in this.__uH){qx.bom.element.Style.set(this.__uH[T],
a,
c);
}}this.__uI=false;
if(qx.core.Variant.isSet(g,
p)){if(document.selection.type.toLowerCase()==q){document.selection.empty();
}}}},
__uT:function(V){V.stopPropagation();
if(this.__uI){var X={left:null,
top:null};
switch(this.__uL.orientation){case N:X.top=V.getDocumentTop();
break;
case H:X.top=V.getDocumentTop();
X.left=V.getDocumentLeft();
break;
case L:X.left=V.getDocumentLeft();
break;
}this.__uU(X,
this.__uL.lastCoord);
this.__uL.lastCoord.left=V.getDocumentLeft();
this.__uL.lastCoord.top=V.getDocumentTop();
}},
__uU:function(X,
Y){var ba;
var bb=portal.box.Util;
var bc=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__uF.getId());
var bd=portal.box.Util.getComputedDimension(bc.element);
if(X.left){var ba=X.left-Y.left;
if(ba!==0){var be=qx.bom.element.Dimension.getClientWidth(this.__uG);
var bf=(be+ba)-(this._elementProperties[A]+this._elementProperties[E]);
if((this.__uK.minWidth==null||bf>this.__uK.minWidth)&&(this.__uK.maxWidth==null||bf<=this.__uK.maxWidth)){if(qx.core.Variant.isSet(g,
p)){var bg=bd.width-bb.getStyleProperty(bc.element,
b,
true)-bb.getStyleProperty(this.__uG,
i,
true)-bb.getStyleProperty(this.__uG,
j,
true)-bb.getStyleProperty(this.__uG,
o,
true)-bb.getStyleProperty(this.__uG,
m,
true);
}else{var bg=bd.width-bb.getStyleProperty(bc.element,
b,
true)-bb.getStyleProperty(this.__uG,
b,
true)-bb.getStyleProperty(this.__uG,
f,
true)-bb.getStyleProperty(this.__uG,
i,
true)-bb.getStyleProperty(this.__uG,
j,
true)-bb.getStyleProperty(this.__uG,
o,
true)-bb.getStyleProperty(this.__uG,
m,
true);
}
if(bg>=bf){qx.bom.element.Style.set(this.__uG,
F,
bf+s);
}}}}
if(X.top){var ba=X.top-Y.top;
if(ba!==0){var bh=qx.bom.element.Dimension.getClientHeight(this.__uG);
var bi=(bh+ba)-(this._elementProperties[C]+this._elementProperties[z]);
if((this.__uK.minHeight==null||bi>this.__uK.minHeight)&&(this.__uK.maxHeight==null||bi<=this.__uK.maxHeight)){qx.bom.element.Style.set(this.__uG,
t,
bi+u);
}}}}},
destruct:function(){if(this.__uK.autoHide){qx.event.Registration.removeListener(this.__uF.getElement(),
n,
this.__uP,
this);
qx.event.Registration.removeListener(this.__uF.getElement(),
d,
this.__uQ,
this);
}this._disposeFields(I,
B,
w,
P,
O,
D);
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
isInDom:function(d,
e){var f=e.document.getElementsByTagName(d.nodeName);
for(var g=0;g<f.length;g++){if(f[g]===d){return true;
}}return false;
},
insertAt:function(h,
b,
j){var k=b.childNodes[j];
if(k){b.insertBefore(h,
k);
}else{b.appendChild(h);
}return true;
},
insertBegin:function(h,
b){if(b.firstChild){this.insertBefore(h,
b.firstChild);
}else{b.appendChild(h);
}},
insertEnd:function(h,
b){b.appendChild(h);
},
insertBefore:function(h,
k){k.parentNode.insertBefore(h,
k);
return true;
},
insertAfter:function(h,
k){var b=k.parentNode;
if(k==b.lastChild){b.appendChild(h);
}else{return this.insertBefore(h,
k.nextSibling);
}return true;
},
remove:function(h){if(!h.parentNode){return false;
}h.parentNode.removeChild(h);
return true;
},
removeChild:function(h,
b){if(h.parentNode!==b){return false;
}b.removeChild(h);
return true;
},
removeChildAt:function(j,
b){var c=b.childNodes[j];
if(!c){return false;
}b.removeChild(c);
return true;
},
replaceChild:function(l,
m){if(!m.parentNode){return false;
}m.parentNode.replaceChild(l,
m);
return true;
},
replaceAt:function(l,
j,
b){var m=b.childNodes[j];
if(!m){return false;
}b.replaceChild(l,
m);
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
{statics:{__uV:1000,
bringToFront:function(h){var i=this.getStyleProperty(h,
a);
i=i==g?0:i;
qx.bom.element.Style.set(h,
a,
i+portal.box.Util.__uV);
},
sendToBack:function(h){var i=this.getStyleProperty(h,
a);
qx.bom.element.Style.set(h,
a,
i-portal.box.Util.__uV);
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
(function(){var a="mouseup",
b="dragstart",
c="margin",
d="mousemove",
f="qx.client",
g="__uW",
h="mshtml",
i="__uY",
j="mousedown",
k="portal.box.Draggable",
l="webkit",
m="borderTopWidth",
n="__uX",
o="mouseover",
p="paddingTop",
q="drag",
r="dragend",
s="div",
t="move",
u="dragHandle",
v="cursor";
qx.Class.define(k,
{extend:qx.core.Object,
construct:function(w){arguments.callee.base.call(this);
this.__uW=w;
this.__uX=w.getElement();
this.__uY=null;
this.__va=null;
this.__vb();
},
members:{getBox:function(){return this.__uW;
},
getElement:function(){return this.__uX;
},
__vb:function(){this.__vc();
this.__vd();
},
__vc:function(){this.__uY=qx.bom.Element.create(s);
qx.bom.element.Class.add(this.__uY,
u);
qx.dom.Element.insertBegin(this.__uY,
this.__uX);
},
__vd:function(){qx.bom.Element.addListener(this.__uY,
j,
this._onMouseDown,
this);
qx.bom.Element.addListener(this.__uY,
o,
function(x){qx.bom.element.Style.set(this,
v,
t);
},
this.__uY);
qx.bom.Element.addListener(this.__uY,
b,
this._onDragStart,
this);
qx.bom.Element.addListener(this.__uY,
r,
portal.dragdrop.Manager.getInstance().stopSession,
portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__uY,
q,
this._onDragMove,
this);
},
_onMouseDown:function(x){if(x.isLeftPressed()){if(qx.core.Variant.isSet(f,
h)){var y=qx.bom.element.Location.getTop(this.__uX,
c)-parseInt(qx.bom.element.Style.get(this.__uX,
p))-parseInt(qx.bom.element.Style.get(this.__uX,
m));
}else if(qx.core.Variant.isSet(f,
l)){var y=qx.bom.element.Location.getTop(this.__uX,
c);
}else{var y=qx.bom.element.Location.getTop(this.__uX);
}this.__va={left:x.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__uX),
top:x.getDocumentTop()-y};
qx.bom.Element.addListener(document.body,
a,
this._onMouseUp,
this,
true);
qx.event.Registration.fireEvent(this.__uY,
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
_onDragStart:function(x){portal.box.Manager.getInstance().setActiveBox(this.__uW);
portal.dragdrop.Manager.getInstance().startSession(this.__uW);
qx.event.Registration.addListener(document.body,
d,
this._onDragMove,
this,
true);
},
_onDragMove:function(x){x.stopPropagation();
var z=x.getDocumentLeft()-this.__va.left;
var y=x.getDocumentTop()-this.__va.top;
qx.event.Timer.once(function(){this.checkGroupBox(z);
this.onDragMove(y,
z);
},
portal.dragdrop.Manager.getInstance(),
0);
}},
destruct:function(){this._disposeFields(g,
i,
n);
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
n="div",
o="absolute",
p="__vk",
q="singleton",
r="top:",
s="width:",
t="__vh",
u="borderTopWidth",
v="__vf",
w="height:",
x="spring",
y="__vi",
z="paddingBottom",
A="top",
B="__currentBoxElement",
C="finish",
D="left:",
E="portal.box.Box",
F="opacity:0.5;margin:0;position:absolute;",
G="__ve",
H="left",
I="portal.dragdrop.Manager",
J="1px dashed red";
qx.Class.define(I,
{type:q,
extend:qx.core.Object,
properties:{activeBox:{check:E,
init:null,
nullable:true},
sessionActive:{check:l,
init:false}},
members:{__ve:{top:null,
height:null},
__vf:null,
__vg:false,
__vh:{top:0,
left:0},
__vi:null,
startSession:function(K){this.setSessionActive(true);
this.setActiveBox(K);
this.__vf=K.getGroupBoxId();
this.__vj();
if(this.__vi==null){this.__vi={};
var L=portal.box.Manager.getInstance().getGroupBoxes();
for(var M=0,
N=L.length;M<N;M++){this.__vi[L[M].element.id]={left:qx.bom.element.Location.getLeft(L[M].element),
right:qx.bom.element.Location.getLeft(L[M].element)+qx.bom.element.Dimension.getWidth(L[M].element)};
}}},
__vj:function(){if(!this.__vk){this.__vk=qx.bom.Element.create(n);
}var O=this.getActiveBox().getElement();
var P=portal.box.Util.getComputedDimension(O);
this.__vl(O,
this.__vk);
qx.bom.element.Class.add(this.__vk,
qx.bom.element.Class.get(O));
if(qx.core.Variant.isSet(b,
g)){var Q=qx.bom.element.Location.getTop(O,
a)-parseInt(qx.bom.element.Style.get(O,
f))-parseInt(qx.bom.element.Style.get(O,
u));
}else if(qx.core.Variant.isSet(b,
h)){var Q=qx.bom.element.Location.getTop(O,
a);
}else{var Q=qx.bom.element.Location.getTop(O);
}var R=F+r+Q+d+D+qx.bom.element.Location.getLeft(O)+d+s+P.width+d+w+P.height+c;
qx.bom.element.Style.setCss(this.__vk,
R);
qx.bom.element.Style.set(O,
k,
J);
qx.dom.Node.getBodyElement(O).appendChild(this.__vk);
portal.box.Util.bringToFront(this.__vk);
},
__vl:function(S,
T){while(S.firstChild){T.appendChild(S.firstChild);
}},
stopSession:function(U){this.setSessionActive(false);
var K=this.getActiveBox();
var O=K.getElement();
if(qx.core.Variant.isSet(b,
g)){var Q=qx.bom.element.Location.getTop(O,
a)-parseInt(qx.bom.element.Style.get(O,
f))-parseInt(qx.bom.element.Style.get(O,
z));
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
this.__vf,
K);
K.setGroupBoxId(this.__vf);
var W=new qx.fx.effect.core.Move(this.__vk);
W.set({x:V,
y:Q,
mode:o,
duration:0.5,
transition:x});
W.start();
var X=this;
W.addListener(C,
function(){X.__vl(X.__vk,
O);
qx.bom.element.Style.reset(O,
k);
X.__vk.parentNode.removeChild(X.__vk);
if(K.isActive()){K._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(K);
}});
},
onDragMove:function(Q,
V){if(this.__vh.left!=V){qx.bom.element.Style.set(this.__vk,
H,
V+c);
}if(this.__vh.top!=Q){qx.bom.element.Style.set(this.__vk,
A,
Q+c);
}var Y=this.getActiveBox().getElement();
if(this.__ve.top==null){this.__ve.top=qx.bom.element.Location.getTop(Y);
}
if(this.__ve.height==null){this.__ve.height=qx.bom.element.Dimension.getHeight(Y);
}if(this.__vg==false&&Q>=this.__ve.top&&Q<=(this.__ve.top+this.__ve.height)){return;
}var ba;
if(this.__vg){ba=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__vf));
var bb,
bc;
while(ba!=null){if(this.__vm(true,
Q,
Y,
ba)){this.__vg=false;
return;
}ba=qx.dom.Hierarchy.getNextElementSibling(ba);
}}else{ba=Y;
}if(Q-this.__vh.top>0){ba=qx.dom.Hierarchy.getNextElementSibling(ba);
var bb,
bc;
while(ba!=null){if(ba){if(this.__vm(true,
Q,
Y,
ba)){return;
}}ba=qx.dom.Hierarchy.getNextElementSibling(ba);
}}else{var ba=qx.dom.Hierarchy.getPreviousElementSibling(ba);
var bb,
bc;
while(ba!=null){if(ba){if(this.__vm(false,
Q,
Y,
ba)){return;
}}ba=qx.dom.Hierarchy.getPreviousElementSibling(ba);
}}this.__vh.left=V;
this.__vh.top=Q;
},
__vm:function(bd,
Q,
Y,
ba){var bb=qx.bom.element.Location.getTop(ba);
var bc=qx.bom.element.Dimension.getClientHeight(ba);
var be;
if(bd){if(Q>=(bb+(bc/3))){be=qx.dom.Hierarchy.getNextElementSibling(ba);
if(be!=Y||be==null){qx.dom.Element.insertAfter(Y,
ba);
this.__ve.top=qx.bom.element.Location.getTop(Y);
}return true;
}}else{if(Q<=(bb+bc*2/3)){be=qx.dom.Hierarchy.getPreviousElementSibling(ba);
if(be!=Y||be==null){qx.dom.Element.insertBefore(Y,
ba);
this.__ve.top=qx.bom.element.Location.getTop(Y);
}return true;
}}return false;
},
checkGroupBox:function(V){if(this.__vi[this.__vf].left<=V&&this.__vi[this.__vf].right>=V){return;
}
for(var bf in this.__vi){if(bf!=this.__vf){if(this.__vi[bf].left<=V&&this.__vi[bf].right>=V){this.__vf=bf;
this.__vg=true;
return;
}}}}},
destruct:function(){this._disposeFields(G,
t,
v,
B,
p,
y);
}});
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
l="pulse",
m="__mf",
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
this.__me=qx.fx.Base.EffectState.IDLE;
this.__mf=v;
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
l,
p,
h,
r]}},
statics:{EffectState:{IDLE:'idle',
PREPARING:'preparing',
FINISHED:'finished',
RUNNING:'running'}},
members:{__me:null,
__mg:null,
__mh:null,
__mi:null,
__mj:null,
__mk:null,
__ml:null,
__mm:null,
__mf:null,
_getElement:function(){return this.__mf;
},
_setElement:function(v){this.__mf=v;
},
_applyDuration:function(w,
x){},
init:function(){this.__me=qx.fx.Base.EffectState.PREPARING;
this.__mg=0;
this.__mh=this.getDelay()*1000+(new Date().getTime());
this.__mi=this.__mh+(this.getDuration()*1000);
this.__mj=this.getTo()-this.getFrom();
this.__mk=this.__mi-this.__mh;
this.__ml=this.getFps()*this.getDuration();
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
start:function(){if(this.__me!=qx.fx.Base.EffectState.IDLE){return false;
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
render:function(z){if(this.__me==qx.fx.Base.EffectState.PREPARING){this.__me=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afertSetup();
}
if(this.__me==qx.fx.Base.EffectState.RUNNING){this.__mm=qx.fx.Transition.get(this.getTransition())(z)*this.__mj+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__mm);
this.afterUpdateInternal();
this.afterUpdate();
if(this.hasListener(c)){this.fireEvent(c);
}}},
loop:function(A){if(A>=this.__mh){if(A>=this.__mi){this.end();
}var z=(A-this.__mh)/this.__mk;
var B=Math.round(z*this.__ml);
if(B>this.__mg){this.render(z);
this.__mg=B;
}}},
cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__me=qx.fx.Base.EffectState.IDLE;
}},
destruct:function(){this._disposeFields(m);
}});
})();
(function(){var a="position",
b="px",
c="relative",
d="Number",
e="absolute",
f="top",
g="left",
h='absolute',
i="qx.fx.effect.core.Move";
qx.Class.define(i,
{extend:qx.fx.Base,
properties:{mode:{init:c,
check:[c,
e]},
x:{init:0,
check:d},
y:{init:0,
check:d}},
members:{__mA:null,
__mB:null,
__mC:null,
__mD:null,
__mE:null,
setup:function(){var j=this._getElement();
arguments.callee.base.call(this);
if(j.parentNode){this.__mC=qx.bom.element.Location.getLeft(j)-qx.bom.element.Location.getLeft(j.parentNode);
this.__mD=qx.bom.element.Location.getTop(j)-qx.bom.element.Location.getTop(j.parentNode);
}else{this.__mC=qx.bom.element.Location.getLeft(j);
this.__mD=qx.bom.element.Location.getTop(j);
}this.__mE=qx.bom.element.Style.get(j,
a);
qx.bom.element.Style.set(j,
a,
e);
if(this.getMode()==h){this.__mA=this.getX()-this.__mC;
this.__mB=this.getY()-this.__mD;
}else{this.__mA=this.getX();
this.__mB=this.getY();
}},
update:function(k){var j=this._getElement();
arguments.callee.base.call(this);
var l=Math.round(this.__mA*k+this.__mC);
var m=Math.round(this.__mB*k+this.__mD);
qx.bom.element.Style.set(j,
g,
l+b);
qx.bom.element.Style.set(j,
f,
m+b);
},
afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),
a,
this.__mE);
}}});
})();
(function(){var a="__default",
b="qx.fx.queue.Manager",
c="__mn",
d="singleton",
e="object";
qx.Class.define(b,
{extend:qx.core.Object,
type:d,
members:{__mn:{},
getQueue:function(f){if(typeof (this.__mn[f])==e){return this.__mn[f];
}else{return this.__mn[f]=new qx.fx.queue.Queue;
}},
getDefaultQueue:function(){return this.getQueue(a);
}},
destruct:function(){this._disposeMap(c);
}});
})();
(function(){var a="qx.fx.queue.Queue",
b="Number",
c="__mp";
qx.Class.define(a,
{extend:qx.core.Object,
construct:function(){arguments.callee.base.call(this);
},
properties:{limit:{init:Infinity,
check:b}},
members:{__mo:null,
__mp:[],
add:function(d){var e=new Date().getTime();
d._startOn+=e;
d._finishOn+=e;
if(this.__mp.length<this.getLimit()){this.__mp.push(d);
}
if(!this.__mo){this.__mo=qx.lang.Function.periodical(this.loop,
15,
this);
}},
remove:function(d){qx.lang.Array.remove(this.__mp,
d);
if(this.__mp.length==0){window.clearInterval(this.__mo);
delete this.__mo;
}},
loop:function(){var f=new Date().getTime();
for(var g=0,
h=this.__mp.length;g<h;g++){this.__mp[g]&&this.__mp[g].loop(f);
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
