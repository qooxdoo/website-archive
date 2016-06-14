qx.$$packageData['475783c6750e']={"resources":{}};
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(Q){arguments.callee.base.call(this);
this.__lm=Q;
},statics:{getIntegerInstance:function(){var D=qx.util.format.NumberFormat;

if(D._integerInstance==null){D._integerInstance=new D();
D._integerInstance.setMaximumFractionDigits(0);
}return D._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__lm:null,format:function(E){switch(E){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var I=(E<0);

if(I){E=-E;
}
if(this.getMaximumFractionDigits()!=null){var P=Math.pow(10,this.getMaximumFractionDigits());
E=Math.round(E*P)/P;
}var O=String(Math.floor(E)).length;
var F=t+E;
var L=F.substring(0,O);

while(L.length<this.getMinimumIntegerDigits()){L=q+L;
}
if(this.getMaximumIntegerDigits()!=null&&L.length>this.getMaximumIntegerDigits()){L=L.substring(L.length-this.getMaximumIntegerDigits());
}var K=F.substring(O+1);

while(K.length<this.getMinimumFractionDigits()){K+=q;
}
if(this.getMaximumFractionDigits()!=null&&K.length>this.getMaximumFractionDigits()){K=K.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var H=L;
L=t;
var N;

for(N=H.length;N>3;N-=3){L=t+qx.locale.Number.getGroupSeparator(this.__lm)+H.substring(N-3,N)+L;
}L=H.substring(0,N)+L;
}var J=this.getPrefix()?this.getPrefix():t;
var G=this.getPostfix()?this.getPostfix():t;
var M=J+(I?r:t)+L;

if(K.length>0){M+=t+qx.locale.Number.getDecimalSeparator(this.__lm)+K;
}M+=G;
return M;
},parse:function(u){var z=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__lm)+t);
var x=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__lm)+t);
var v=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+z+g+n+x+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var y=v.exec(u);

if(y==null){throw new Error("Number string '"+u+"' does not match the number format");
}var A=(y[1]==r);
var C=y[2];
var B=y[3];
C=C.replace(new RegExp(z,m),t);
var w=(A?r:t)+C;

if(B!=null&&B.length!=0){B=B.replace(new RegExp(x),t);
w+=h+B;
}return parseFloat(w);
}}});
})();
