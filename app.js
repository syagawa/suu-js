!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},e={};r.d(e,{default:()=>M});function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){i(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function i(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function a(r){return function(r){if(Array.isArray(r))return u(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return u(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function o(r){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o(r)}var s={makeError:function(r){var e=r.message,t=r.variable,n=r.parameter;try{var i=t.toString(),a=n.toString(),u=e;return i&&(u="".concat(u,", ").concat(i||"")),a&&(u="".concat(u,", ").concat(a||"")),new Error(u)}catch(r){return r}}},l=function(r){return"number"==typeof r&&!Number.isNaN(r)};s.moldNumArray=function(r){var e=r.array,t=r.negative,n=r.decimal_index;if(!e)return s.makeError({message:"array is not exists",patameter:e});if("number"!=typeof n||isNaN(n))return s.makeError({message:"decimal_index is not number",patameter:n});try{for(;n<e.length&&0===e[e.length-1];)e.pop();for(;n>1&&0===e[0];)e.shift(),n--;0===e.length&&(e.push(0),n=1);var i={array:e,negative:!!t,is_num_array:!0};return i.decimal_index=0===n||n>0?n:e.length,i}catch(r){return s.makeError({message:r.message,paramter:e})}},s.numToArrayWithDecimal=function(r){if(!r&&0!==r)return s.makeError({message:"Paremeter is undefined, null, or empty.",variable:r});if(r.is_num_array)return s.clone(r);if("object"===o(r))return s.makeError({message:"Paremeter is object.",variable:r});for(var e,t=String(r),n=!1;t&&t[0].match(/^-/);)t=t.replace(/^-/,""),n=!n;var i=t.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=t.match(/\./).index,t=t.replace(/\./,"")):e=t.length;for(var a=[],u=0;u<t.length;u++){var c=Number(t[u]);if(!l(c))return s.makeError("This function has been called with incorrect parameters",c);a.push(c)}return s.moldNumArray({array:a,negative:n,decimal_index:e})}},s.numArrayToString=function(r){if(!r.is_num_array||!r.array||!r.decimal_index)return"";try{var e=a(r.array);e.splice(r.decimal_index,0,".");var t=e.join("");return r.negative&&(t="-".concat(t)),t.replace(/\.$/,"")}catch(r){return""}},s.compare=function(r,e){try{if(!r||!e)return s.makeError({message:"Paremeters are undefined, null, or empty.",variable:[r,e]});var t={small:null,large:null,equal:!1},n=r,i=e;if(!n.is_num_array&&!(n=s.numToArrayWithDecimal(n)))return t;if(!i.is_num_array&&!(i=s.numToArrayWithDecimal(i)))return t;var a=n.array,u=i.array,o=a.length,l=u.length,c=a.join(""),m=u.join(""),f=n.decimal_index,g=i.decimal_index,v=o-f,h=l-g;if(1===o&&"0"===c&&1===l&&"0"===m)return t.equal=!0,t;if(!n.negative&&i.negative)return t.small=i,t.large=n,t;if(n.negative&&!i.negative)return t.small=n,t.large=i,t;var d=n.negative,p={large:d?i:n,small:d?n:i,equal:!1},y={large:d?n:i,small:d?i:n,equal:!1};if(f>g)return p;if(f<g)return y;for(var b=0;b<f;b++){if(a[b]>u[b])return p;if(a[b]<u[b])return y}for(var N=v>h?v:h,S=0;S<N;S++){var _=a[f+S]?a[f+S]:0,k=u[g+S]?u[g+S]:0;if(_>k)return p;if(_<k)return y}return t.equal=!0,t}catch(t){return this.makeError({message:t.message,variable:[r,e]})}},s.getLarge=function(r,e){return s.compare(r,e).large},s.getSmall=function(r,e){return s.compare(r,e).small},s.isEqual=function(r,e){return!!s.compare(r,e).equal},s.isSmall=function(r,e){return s.isEqual(s.getSmall(r,e),r)},s.isLarge=function(r,e){return s.isEqual(s.getLarge(r,e),r)},s.isZero=function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=s.getZero();return s.isEqual(e,r)},s.isOne=function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=s.getOne();return!!s.isEqual(e,r)},s.getZero=function(){return s.numToArrayWithDecimal("0")},s.getOne=function(){return s.numToArrayWithDecimal("1")},s.fixCarry=function(r,e){try{for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var u=[],o=0,l=0;l<r.length;l++){var c=r[l]+o;if(c>9){var m=String(c).split("");c=Number(m[m.length-1]);var f=m.slice(0,m.length-1);o=Number(f.join(""))}else c>=0&&c<=9?o=0:(c=10+c,o=-1);u.push(c)}return 0!==o&&u.push(o),{new_array:u,minus:t}}catch(t){return s.makeError({message:t.message,variable:[r,e]})}},s.clone=function(r){try{return r?r.is_num_array?n(n({},r),{},{array:a(r.array)}):s.makeError({message:"Paremeter is not compatible",variable:r}):s.makeError({message:"variable is not exists",variable:r})}catch(e){return s.makeError({message:e.message,variable:r})}},s.add_and_subtract=function(r,e,t){if(!(r&&e||0===r||0===e))return s.makeError({message:"Parameters are must be a Number or a String.",variable:[r,e]});var n;if(t){if("+"===t)n=!0;else{if("-"!==t)return s.makeError({message:"mode must be '+' or '-'.",variable:t});n=!1}try{var i,u=null;i=r.is_num_array?s.clone(r):s.numToArrayWithDecimal(r||0),u=e.is_num_array?s.clone(e):s.numToArrayWithDecimal(e||0);var o=i.array,l=u.array,c=s.isZero(i),m=s.isZero(u);if(c&&m)return i;if(c)return n||(u.negative=!u.negative),u;if(m)return i;var f=i.array.length-i.decimal_index,g=u.array.length-u.decimal_index,v=f-g;v>0?l.push.apply(l,a(Array(v).fill(0))):v<0&&o.push.apply(o,a(Array(Math.abs(v)).fill(0)));var h=function(r){var e=r.a,t=r.b,n=r.plus,i=[],a=e.array.length;e.array.length<t.array.length&&(a=t.array.length);for(var u=e.array,o=t.array,l=e.negative?-1:1,c=t.negative?-1:1,m=0;m<a;m++){var f=u[m]?u[m]*l:0,g=o[m]?o[m]*c:0,v=n?f+g:f-g;i.push(v)}return s.fixCarry(i)}({a:{array:a(o).reverse(),negative:i.negative},b:{array:a(l).reverse(),negative:u.negative},plus:n}),d=h.new_array,p=h.minus,y=f>=g?f:g,b=d.length-y;return s.moldNumArray({array:a(d).reverse(),negative:!!p,decimal_index:b})}catch(t){return s.makeError({message:t.message,variable:[r,e]})}}},s.add=function(r,e){return s.add_and_subtract(r,e,"+")},s.subtract=function(r,e){return s.add_and_subtract(r,e,"-")},s.multiplication=function(r,e){if(!(r&&e||0===r||0===e))return s.makeError({message:"variables is not exists",variable:[r,e]});var t,n;t=r.is_num_array?s.clone(r):s.numToArrayWithDecimal(r||0),n=e.is_num_array?s.clone(e):s.numToArrayWithDecimal(e||0);var i=t.array,u=n.array;if(s.isZero(t)||s.isZero(n))return s.numToArrayWithDecimal("0");if(s.isOne(t))return n;if(s.isOne(n))return t;try{var o,l=t.negative,c=n.negative;o=!(l&&c||!l&&!c);var m=t.array.length-t.decimal_index+(n.array.length-n.decimal_index),f=function(r){for(var e=r.b,t=[],n=r.a.array,i=e.array,a=0;a<n.length;a++){var u=n[a]?n[a]:0,o=new Array(a);o.fill(0,0,a);for(var l=0;l<i.length;l++){var c=u*(i[l]?i[l]:0);o.push(c);var m=a+l,f=t[m];f||(f=0);var g=f+c;t[m]=g}}return s.fixCarry(t)}({a:{array:a(i).reverse(),negative:t.negative},b:{array:a(u).reverse(),negative:n.negative}}),g=f.new_array,v=g.length-m;return s.moldNumArray({array:a(g).reverse(),negative:o,decimal_index:v})}catch(t){return s.makeError({message:t.message,variable:[r,e]})}},s.multiple=function(r,e){return s.multiplication(r,e)},s.getDecimal=function(r){try{var e=s.numToArrayWithDecimal(r),t="0.",n=e.array.length-e.decimal_index;if(n>0)for(var i=e.decimal_index;i<=n;i++)t+=String(e.array[i]);else t+="0";return s.numToArrayWithDecimal(t)}catch(e){return s.makeError({message:e.message,variable:r})}},s.division=function(r,e){try{if(!(r&&e||0===r||0===e))return s.makeError({message:"variables is not exists",variable:[r,e]});var t=null,i=null;if(t=r.is_num_array?s.clone(r):s.numToArrayWithDecimal(r||0),i=e.is_num_array?s.clone(e):s.numToArrayWithDecimal(e||0),s.isZero(i))return s.isLarge(t,"0")?"Infinity":s.isSmall(t,"0")?"Negative Infinity":"Not a Number";if(s.isZero(t))return n(n({},s.getZero()),{},{remainder:s.getZero()});if(s.isOne(i))return n(n({},t),{},{remainder:s.getZero()});if(s.isEqual(t,i))return n(n({},s.getOne()),{},{remainder:s.getZero()});var u,o=t.negative,l=i.negative;t.negative&&(t.negative=!1),i.negative&&(i.negative=!1),u=!(o&&l||!o&&!l);var c=function(r){var e,t=r.a,n=r.b,i=r.max,u=[],o=s.getZero(),l=s.clone(t),c=s.clone(n),m=t.decimal_index,f=m,g=s.clone(l);g.decimal_index=g.array.length;var v=0,h=l.array.join("").match(/^0+/);h&&h[0]&&(v=h[0].length,g=s.numToArrayWithDecimal(g.array.slice(v,g.array.length).join("")));var d=s.clone(c);d.decimal_index=d.array.length;var p=0,y=d.array.join("").match(/^0+/);y&&y[0]&&(p=y[0].length,d=s.numToArrayWithDecimal(d.array.slice(p,d.array.length).join("")));for(var b=v-p,N=a(g.array),S=l.array.length-l.decimal_index-(c.array.length-c.decimal_index),_=Number(s.add(g.array.length,i).array.join("")),k=g.array.length,A=!1,D=[0],E=0,Z=0,q=0;q<_;q++){var T=!0,x=s.getZero(),j=s.multiplication(o,"10"),w=String(1===N.slice(q,q+1).length?N.slice(q,q+1)[0]:"0");Z=(o=s.add(j,w)).array.length-k;var O=s.getZero();if(q===k){if(m=q,s.isZero(o))break;A=!0,E=E++}else if(q>k&&(E=E++,s.isZero(o)))break;for(var P=i;T;){if(x=s.add(x,"1"),s.isLarge(x,P)){T=!1;break}var W=O;if(O=s.multiplication(d,x),s.isEqual(o,O)){T=!1;var M=x;u.push(M),o=s.subtract(o,O);break}if(s.isLarge(O,o)){T=!1;var I=s.subtract(x,"1");u.push(I),o=s.subtract(o,W),A&&D.push(0);break}}}(e=D).push.apply(e,a(o.array));var L=u.flatMap((function(r){return r.array}));if(b>0)for(var C=0;C<b;C++)L.unshift(0),m++;if(S<0)for(var K=0;K<Math.abs(S);K++)L.push(0),m++;else if(S>0)for(var X=0;X<Math.abs(S);X++)L.unshift(0);if(Z>0)for(var H=0;H<Z;H++)0===D[0]?D.shift():f-=Z,D.push(0);else if(Z<0){var R,F=Math.abs(Z),U=Array(F).fill(0);(R=D).unshift.apply(R,a(U))}return A&&(D=a(D)),{new_array:L,decimal_index:m,remain_array:D,remain_decimal_index:f}}({a:t,b:i,max:s.numToArrayWithDecimal("10")}),m=c.new_array,f=c.decimal_index,g=c.remain_array,v=c.remain_decimal_index,h=s.moldNumArray({array:a(g),negative:u,decimal_index:v});return n(n({},s.moldNumArray({array:a(m),negative:u,decimal_index:f})),{},{remainder:h})}catch(t){return s.makeError({message:t.message,variable:[r,e]})}},s.divide=function(r,e){return s.division(r,e)},s.floor=function(r){try{var e=s.numToArrayWithDecimal(r),t=e.decimal_index<e.array.length,i=e.array.slice(e.decimal_index,e.array.length),a=s.numToArrayWithDecimal(i.join(""));if(s.isZero(a))return e;var u=n(n({},e),{},{array:e.array.slice(0,e.decimal_index)});return e.negative&&t&&(u=s.subtract(u,"1")),u}catch(e){return s.makeError({message:e.messsage,variable:r})}},s.ceil=function(r){try{var e=s.numToArrayWithDecimal(r),t=e.decimal_index<e.array.length,i=e.array.slice(e.decimal_index,e.array.length),a=s.numToArrayWithDecimal(i.join(""));if(s.isZero(a))return e;var u=n(n({},e),{},{array:e.array.slice(0,e.decimal_index)});return!e.negative&&t&&(u=s.add(u,"1")),u}catch(e){return s.makeError({message:e.message,variable:r})}},s.modulo=function(r,e){try{if(!(r&&e||0===r||0===e))return s.makeError({message:"variables is not exists",variable:[r,e]});var t,i;if(t=r.is_num_array?s.clone(r):s.numToArrayWithDecimal(r||0),i=e.is_num_array?s.clone(e):s.numToArrayWithDecimal(e||0),s.isZero(i))return s.isLarge(t,"0")?"Infinity":s.isSmall(t,"0")?"Negative Infinity":"Not a Number";if(s.isZero(t))return n(n({},s.getZero()),{},{remainder:s.getZero()});var a,u=s.clone(t),o=s.clone(i);if(u.negative=!1,o.negative=!1,s.isLarge(o,u))return s.numToArrayWithDecimal(r);if(s.isEqual(t,i))return n(n({},s.getZero()),{},{remainder:s.getZero()});a=!!t.negative;var l=function(r){var e=r.a,t=r.b,n=s.divide(e,t),i=s.floor(n),a=s.multiple(t,i);return s.subtract(e,a)}({a:n(n({},t),{},{negative:!1}),b:n(n({},i),{},{negative:!1})}),c=s.moldNumArray(n(n({},l),{},{negative:a}));return n({},c)}catch(t){return s.makeError({message:t.message,variable:[r,e]})}};const c=s;var m="Not a number",f="Argument is not Su.",g=function(r,e){if(isNaN(r))throw new Error(m);r||(r=0),e||(e={});var t=String(r),n=!1;"-"===t[0]&&(t=t.slice(1,t.length),n=!0),!n&&e&&e.negative&&(n=!0),isNaN(Number(t))&&(t="0"),"0"===t&&(n=!1);var i,a,u=t.split("."),o=u[0],s=u[1];if(o){var l=o.match(/0/g);l&&l.length===o.length&&(o="0");for(var f="",g=!0,v=0;v<o.length;v++)"0"===o[v]&&g||(g=!1,f+=o[v]);o=f||"0"}if(s){var h=s.match(/0/g);h&&h.length===s.length&&(s="0");for(var d=!0,p="",y=s.length-1;y>=0;y--)"0"===s[y]&&d||(d=!1,p=s[y]+p);s=p||"0"}try{i=c.numToArray(o),a=s?c.numToArray(s):[0]}catch(r){throw new Error(m)}this.integer=i,this.decimal=a,this.negative=!!n;for(var b=[1],N=0;N<this.decimal.length;N++)b.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:b}},v=function(r,e){var t;try{t=new g(r,e)}catch(r){t=r.message}return t},h=function(r){if(r instanceof g)return!0},d=function(r){var e=r.getString();return v(e)},p={ZERO:v(0),ONE:v(1),FIRST_PRIME_NUMBER:v(2),MAX:v(1e4),MIN:v(-1e4)};g.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},g.prototype.getNumber=function(){return Number(this.getString())},g.prototype.getInteger=function(){return Number(this.integer.join(""))},g.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},g.prototype.clone=function(){var r=this.getString();return v(r)};var y=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1,i=[],a=v(r.getString()),u=v(e.getString());if(t&&(a.negative=!1,u.negative=!1),!a.isZero()||!u.isZero()){if(!a.negative&&u.negative)return r;if(a.negative&&!u.negative)return e;if(a.negative&&u.negative&&(n=!0),a.integer.length>u.integer.length)return n?e:r;if(a.integer.length<u.integer.length)return n?r:e;for(var o=0;o<a.integer.length;o++){var s=a.integer[o],l=u.integer[o];if(s>l){i=[r,e];break}if(s<l){i=[e,r];break}}if(0===i.length)for(var c=a.decimal.length>=u.decimal.length?a.decimal.length:u.decimal.length,m=0;m<c;m++){var f=a.decimal[m]?a.decimal[m]:0,g=u.decimal[m]?u.decimal[m]:0;if(f>g){i=[r,e];break}if(f<g){i=[e,r];break}}return n&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};g.prototype.isEqual=function(r){if(!h(r))return!1;var e=this.clone(),t=r.clone(),n=e.integer,i=t.integer,a=e.decimal,u=t.decimal;if(y(e,t))return!1;if(n.length===i.length){for(var o=0;o<n.length;o++)if(n[o]!==i[o])return!1}else{if(a.length!==u.length)return!1;for(var s=0;s<a.length;s++)if(a[s]!==u[s])return!1}return e.negative===t.negative},g.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},g.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},g.prototype.isLarge=function(r){if(!h(r))return!1;var e=this.clone(),t=r.clone(),n=y(e,t);return!!n&&n.getString()===e.getString()},g.prototype.isSmall=function(r){if(!h(r))return!1;var e=this.clone(),t=r.clone(),n=y(e,t);return!!n&&n.getString()===t.getString()},g.prototype.isInteger=function(){return!this.containDecimal()},g.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(p.ZERO))},g.prototype.isNegative=function(){return!!this.negative},g.prototype.isPositive=function(){return!this.negative},g.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},g.prototype.add=function(r){if(!h(r))throw new Error(f);var e,t=this.clone(),n=r.clone();if(t.isZero())return n;if(n.isZero())return t;if(t.negative&&n.negative)e=!0;else if(t.negative||n.negative){if(!t.negative&&n.negative)return n.makePositive(),t.subtract(n);if(t.negative&&!n.negative)return t.makePositive(),n.subtract(t)}else e=!1;var i=y(t,n);i||(i=t);var a,u,o=i.integer,s=i.decimal;i===t?(a=n.integer,u=n.decimal):(a=t.integer,u=t.decimal);var l=o.length,c=s.length;u.length>s.length&&(c=u.length);for(var m=0,g=[],d=[],p=c-1;p>=0;p--){var b=void 0;(b=(s[p]||0)+(u[p]||0)+m)>=10?(m=1,b-=10):m=0,d.unshift(b)}for(var N=d.length-1;N>=0&&0===d[N];N--)d.pop();for(var S=l-a.length,_=l-1;_>=0;_--){var k=void 0;(k=o[_]+(a[_-S]||0)+m)>=10?(m=1,k-=10):m=0,g.unshift(k)}m>0&&g.unshift(m);var A=v(g.join("")+"."+d.join(""),{negative:e});return A.isZero()&&A.negative&&A.makePositive(),A},g.prototype.subtract=function(r){if(!h(r))throw new Error(f);var e=d(this),t=d(r);if(r.isZero())return e;if(this.isZero())return t.negate();if(e.negative!==t.negative)return t.negative=!t.negative,e.add(t);var n=e.negative;y(e,t,!0)!==e&&(t=this,n=!(e=r).negative);var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),u=e.integer.length,o=t.integer.length,s=e.decimal.length,l=t.decimal.length,c=Math.abs(s-l),m=0,g=0;if(m+=u>o?u:o,s>l){g+=s;for(var p=0;p<c;p++)a.push(0)}else{g+=l;for(var b=0;b<c;b++)i.push(0)}for(var N=0,S=[],_=0;_<m+g;_++){var k=i.length-1-_,A=a.length-1-_,D=(i[k]?i[k]:0)-N,E=a[A]?a[A]:0;D>=E?(N=0,S.unshift(D-E)):(N=1,S.unshift(10*N+D-E))}S.splice(S.length-g,0,".");var Z=v((n?"-":"")+S.join(""));return Z.isZero()&&Z.negative&&Z.makePositive(),Z},g.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},g.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},g.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},g.prototype.multiplication=function(r){if(!h(r))throw new Error(f);var e=d(this),t=d(r);if(e.isZero()||t.isZero())return v(0);var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),u=e.integer.length,o=t.integer.length,s=[],l=0;l<i.length;l++)for(var c=0;c<a.length;c++){var m=u-l-1+(o-c-1),g=i[l]*a[c],p=Math.abs(m),y=void 0;m>=0?(p++,y=g>9?String(g).padEnd(p+1,"0"):String(g).padEnd(p,"0")):y=1===p&&g>9?String(g)[0]+"."+String(g)[1]:"0."+String(g).padStart(p,"0"),s.push(v(y))}for(var b=v(0),N=0;N<s.length;N++)b=b.add(s[N]);return b.negative=n,b},g.prototype.division=function(r){if(!h(r))throw new Error(f);var e=d(this),t=d(r);if(e.isZero()&&t.isZero())return m;if(e.isZero())return v(0);if(t.isZero())return"Division by Zero";var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=v(0),a=v(0);e.isLarge(a)||e.isEqual(a);)i=i.add(v(1)),a=t.multiplication(i);i=i.subtract(v(1)),a=a.subtract(t);var u=e.subtract(a),o=i;return o.remainder=u,o.negative=n,o},g.prototype.plus=function(r){return this.add(r)},g.prototype.tasu=function(r){return this.add(r)},g.prototype.minus=function(r){return this.subtract(r)},g.prototype.hiku=function(r){return this.subtract(r)},g.prototype.multiply=function(r){return this.multiplication(r)},g.prototype.kakeru=function(r){return this.multiplication(r)},g.prototype.waru=function(r){return this.division(r)},g.prototype.next=function(){return this.add(v(1))},g.prototype.prev=function(){return this.subtract(v(1))},g.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(v(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},g.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(v(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},g.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(v(e));e++){var t=v(e);this.division(t).remainder.isZero()&&r.push(t)}return r.push(this),r},g.prototype.getCommonDivisors=function(r){h(r)||(r=v(r));var e=r,t=this.getDivisors();if(this.isEqual(e))return t;for(var n=e.getDivisors(),i=[],a=0;a<t.length;a++)for(var u=t[a],o=0;o<n.length;o++){var s=n[o];u.isEqual(s)&&i.push(u)}return i},g.prototype.getMaxCommonDivisor=function(r){h(r)||(r=v(r));var e=this.getCommonDivisors(r);return e[e.length-1]},g.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=v("1");e.isSmall(p.MAX)||e.isEqual(p.MAX);)r.push(this.multiplication(e)),e=e.add(v("1"));return r},g.prototype.getLeastCommonMultiple=function(r){h(r)||(r=v(r));var e=r,t=this.getMaxCommonDivisor(e);return this.multiply(e).division(t)};var b=function(r,e){if(!h(r)||!h(e))return!1;var t=p.MAX;return function r(e){if(e[e.length-1].isLarge(t))return e;var n=e[e.length-2],i=e[e.length-1],a=n.add(i);return e.push(a),r(e)}([r,e])};g.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=v(0),t=v(1),n=b(e,t),i=0;i<n.length;i++)if(n[i].isEqual(r))return!0;return!1},g.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=b(v(2),v(1)),e=0;e<r.length;e++)if(r[e].isEqual(this))return!0;return!1};var N=function(r,e){var t=[r];if(!e)return t;for(var n=0;n<e.length;n++){var i=e[n];h(i)||(i=v(i)),t.push(i)}return t};g.prototype.getSequence=function(){return N(this,arguments)},g.prototype.summation=function(){for(var r=N(this,arguments),e=v(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},g.prototype.infiniteProduct=function(){for(var r=N(this,arguments),e=r[0],t=1;t<r.length;t++)e=e.multiplication(r[t]);return e},g.prototype.digitsum=function(){for(var r=v(0),e=0;e<this.integer.length;e++){var t=v(this.integer[e]);r=r.add(t)}return r},g.prototype.square=function(){return this.exponentiate(v(2))},g.prototype.cube=function(){return this.exponentiate(v(3))},g.prototype.exponentiate=function(r){var e=v("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var t=e,n=d(this);t.isSmall(r);)n=this.multiplication(n),t=t.next();return n},g.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(v(1)),e=v(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(v(1))}return!0},g.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=v(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},g.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(v(2)))},g.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(v(2)))},g.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},g.prototype.factorial=function(){for(var r=this,e=this.subtract(v(1)),t=v(0);e.isLarge(t);)r=r.multiplication(e),e=e.subtract(v(1));return r};var S=function(r,e){if(h(r)){if(r.isSmall(v(3)))return[];var t=v(1),n=[],i=t;e=e?e.next():p.MAX;for(var a=r.subtract(v(2));t.isSmall(e);)n.push(t),i=i.add(a),t=t.add(i);return n}};g.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,S(v(3),r)).find((function(r){return r.isEqual(e)}))},g.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,S(v(4),r)).find((function(r){return r.isEqual(e)}))};var _=function(r){r=r?r.next():p.MAX;for(var e=v(2),t=[],n=v(0),i=v(1);n.isSmall(r);)n=e.exponentiate(i).subtract(v(1)),t.push(n),i=i.add(v(1));return t};g.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=_(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1},g.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():p.MAX;for(var e=_(r),t=[],n=0;n<e.length;n++){var i=e[n];i.isPrimeNumber()&&t.push(i)}return t}(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1};const k={makeSu:v,copySu:d,isSu:h,Su:g};var A={},D={},E=k.makeSu,Z=k.isSu;D.random=function(r,e){void 0===r&&(r=E(0)),void 0===e&&(e=E(1)),Z(r)||(r=E(r)),Z(e)||(e=E(e));var t,n=String(Math.random());if("0"===n)t=r.isZero()?E(0):r;else{var i=n.split(".");t=E("0."+i[1]).multiplication(e)}return t},D.randomElement=function(r){return r[D.random(0,r.length).integer]},D.randomInt=function(r,e){if(!Z(r)||!Z(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var t=[],n=r.getNumber();n<=e.getNumber();n++){var i=E(n);t.push(i)}return D.randomElement(t)},D.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString())),r||(r=100),r>100&&(r=100);for(var e=[],t=2;t<r;t++){var n=E(t);n.isPrimeNumber()&&e.push(n)}return e},D.euclideanAlgorithm=function(r,e){if(!A.isNumber(r)||!A.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var t;r<e&&(t=r,r=e,e=t);for(var n,i,a=r,u=e;0!==n;){if(0==(n=a%u)){i=u;break}if(1===n){i="coprime";break}0,a=u,u=n}return i},D.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var t=0,n=0;n<r.length;n++){var i=r[n];if(!A.isNumber(i))return"Argument is not Number";t+=i}return t},D.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var t=1,n=0;n<r.length;n++){var i=r[n];if(!A.isNumber(i))return"Argument is not a Number";t*=i}return t},D.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var t=r/e;return{integer:{remainder:r%e,result:Math.floor(t)},realNumber:t}},D.divisorsSummation=function(r){for(var e=D.divisors(r),t=0,n=0;n<e.length;n++)t+=e[n];return t},D.isAbundantNumber=function(r){return D.divisorsSummation(r)>2*r},D.isKaprekarNumberTypeA=function(r){var e,t=String(r*r),n=t.length,i=0;return e=A.isOddNumber(n)?1+(i=(n-1)/2):i=n/2,Number(t.substr(0,i))+Number(t.substr(i,e))===r},D.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),t=Number(e.sort().join(""));return Number(e.reverse().join(""))-t===r},D.isKaprekarNumber=function(r){if(D.isKaprekarNumberTypeA(r)||D.isKaprekarNumberTypeB(r))return!0},A.isInteger=function(r){return Math.floor(r)===r},D.harmonicMean=function(r){for(var e=r.length,t=0,n=0;n<e;n++)t+=1/r[n];return e/t},D.isHarmonicDivisorNumber=function(r){var e=D.divisors(r),t=D.harmonicMean(e);return!!A.isInteger(t)},A.isNaturalNumber=function(r){if(r>0&&A.isInteger(r))return!0},D.collatzhProblem=function(r){for(var e,t,n=[];r>1;)t=void 0,t=e=r,A.isOddNumber(e)?t=3*e+1:A.isEvenNumber(e)&&(t=e/2),r=t,n.push(r);return n},D.fermatTest=function(r,e){if(!A.isInteger(r)||A.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var t=1;t<=e;t++){var n=D.randomInt(2,r-1);if(1!==D.maxCommonDivisor(n,r))return"Composit Number";if(1!=Math.pow(n,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},D.getIncludesNumbers=function(r){for(var e=[],t=r,n=!0;n;){var i=[t,r-t];if(e.push(i),(t-=1)<0){n=!1;break}}return e};const q={S:A,K:D};var T={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],t=String(r),n=t.length,i=0;i<n;i++){var a=Number(t.slice(i,i+1));if(!T.isNumber(a))throw new Error("This function has been called with incorrect parameters");e.push(a)}return e},numToArrayWithDecimal:function(r){for(var e=[],t=[],n=String(r),i=n.length,a=e,u=0;u<i;u++){var o=Number(n[u]);if(!T.isNumber(o)){if("."!==o||a!==e)throw new Error("This function has been called with incorrect parameters");a=t}a.push(o)}return[].concat(e,[".",t])},numToArrayWithDecimal2:function(r){var e=String(r),t=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),t=!0);for(var n=e.split(""),i=[],a=[],u=!0,o=!1,s=0;s<n.length;s++){var l=Number(n[s]),c=T.isNumber(l);if(c||"."!==n[s]){if(!c)throw new Error("This function has been called with incorrect parameters");u&&0===l&&!o||(u=!1,o?a.push(t?-l:l):i.push(t?-l:l))}else o=!0}for(var m=a.length-1;m>=0&&0===a[m];m--)a.pop();return{int:i,decimal:a,negative:t}},numToArrayWithDecimal3:function(r){for(var e=String(r),t=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),t=!t;var n=null,i=e.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length&&(n=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,n);for(var a=[],u=0,o=0;o<e.length;o++){var s=Number(e[o]);if(!T.isNumber(s))throw new Error("This function has been called with incorrect parameters");0===s&&n>o?u++:a.push(s)}for(n-=u;0===a[a.length-1];)a.pop();var l={array:a,negative:t};return(0===n||n>0)&&(l.decimal_index=n),l}},compare:function(r,e){if(r&&e){var t,n;if(t=r instanceof Array?r:T.numToArrayWithDecimal2(r),n=e instanceof Array?e:T.numToArrayWithDecimal2(e),0===t[0]){for(var i=[],a=!0,u=0;u<t.length;u++){var o=t[u];0===o&&a||(i.push(o),a=!1)}t=i}if(0===n[0]){for(var s=[],l=!0,c=0;c<n.length;c++){var m=n[c];0===m&&l||(s.push(m),l=!1)}n=s}var f={equal:!1,large:null,small:null};if(t.length>t.length)return f.large=r,f.small=e,f;if(t.length<t.length)return f.large=e,f.small=r,f;for(var g=0;g<t.length;g++){var v=t[g],h=n[g];if(v>h)return f.large=r,f.small=e,f;if(v<h)return f.large=e,f.small=r,f}return f.equal=!0,f}},getLarge:function(r,e){var t=T.numToArrayWithDecimal2(r),n=T.numToArrayWithDecimal2(e),i=!1;if(t.negative&&!n.negative)return e;if(!t.negative&&n.negative)return r;t.negative&&n.negative&&(i=!0);var a=T.compare(t.int,n.int);if(a.large===t.int)return i?e:r;if(a.large===n.int)return i?r:e;if(t.decimal.length<n.decimal.length)for(var u=n.decimal.length-t.decimal.length,o=0;o<u;o++)t.decimal.push(0);else if(t.decimal.length>n.decimal.length)for(var s=t.decimal.length-n.decimal.length,l=0;l<s;l++)n.decimal.push(0);var c=T.compare(t.decimal,n.decimal);return c.large===t.decimal?i?e:r:c.large===n.decimal?i?r:e:void 0},getSmall:function(r,e){var t=T.getLarge(r,e);return t===r?e:t===e?r:void 0},isEqual:function(r,e){return!!T.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!T.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var u=[],o=0,s=0;s<r.length;s++){var l=r[s]+o;l>9?(l-=10,o=1):l>=0&&l<=9?o=0:(l=10+l,o=-1),u.push(l)}return 0!==o&&u.push(o),console.log(u),console.log("minus",t),{new_array:u,minus:t}},add_and_subtract:function(r,e,t){if((r||e)&&t){var n;if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i=T.numToArrayWithDecimal2(r),a=T.numToArrayWithDecimal2(e),u=i.int,o=a.int,s=i.decimal,l=a.decimal,c=(i.negative,a.negative,s.length);c<l.length&&(c=l.length);for(var m=0;m<c;m++){var f=s[m],g=l[m];T.isNumber(f)||s.push(0),T.isNumber(g)||l.push(0)}var v,h,d,p=function(r,e,t){var n=[],i=r,a=e;r.length<e.length&&(i=e,a=r);for(var u=0;u<i.length;u++){var o=i[u]?i[u]:0,s=a[u]?a[u]:0,l=t?o+s:o-s;n.push(l)}return T.fixCarry(n)},y=(v=s.length<l.length?l.legth:s.length,d=0,(h=p(s.reverse(),l.reverse(),n)).new_array.length>v&&(d=h.new_array.pop()),{dec_arr:h.new_array,dec_carry:d,dec_minus:h.minus}),b=y.dec_arr,N=y.dec_carry,S=y.dec_minus,_=function(r){var e=p(u.reverse(),o.reverse(),n);return 0!==r&&(e=p(e.new_array,[r],!0)),{int_arr:e.new_array}}(N),k=_.int_arr;return console.log(k),console.log(b,N,S),{int:k.reverse(),decimal:b.reverse()}}},add:function(r,e){T.numToArrayWithDecimal2(r),T.numToArrayWithDecimal2(e),T.getLarge(r,e)}};const x=T;var j={getNumber:function(r){return c.numToArrayWithDecimal(r)},copy:function(r){var e=c.clone(r);if(!e){var t=c.numArrayToString(r);return c.numToArrayWithDecimal(t)}return e},getLarge:function(r,e){return c.getLarge(r,e)},getSmall:function(r,e){return c.getSmall(r,e)},isEqual:function(r,e){return c.isEqual(r,e)},getZero:function(){return c.getZero()},getOne:function(){return c.getOne()},isZero:function(r){return c.isZero(r)},isOne:function(r){return c.isOne(r)},square:function(r){return c.multiplication(r,r)},getInteger:function(r){for(var e="",t=0;t<r.decimal_index;t++)e+=String(r.array[t]);return j.getNumber(e)},getDecimal:function(r){return c.getDecimal(r)},isNaturalNumber:function(r){var e=j.getDecimal(r);return!(!j.isZero(e)||r.negative)},includeDecimal:function(r){var e=j.getDecimal(r);return!j.isZero(e)},isNegative:function(r){return c.numToArrayWithDecimal(r).negative},isPositive:function(r){return!c.numToArrayWithDecimal(r).negative},negate:function(r){var e=c.numToArrayWithDecimal(r);return e&&(e.negative=!0),e},makePositive:function(r){var e=c.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNegativeNumber:function(r){return j.negate(r)},getPositiveNumber:function(r){var e=c.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNext:function(r){return c.add(r,"1")},getPrev:function(r){return c.subtract(r,"1")},isInteger:function(r){if(j.isZero(r))return!0;var e=j.getDecimal(r);return!!j.isEqual(e,"0")},isEvenNumber:function(r){if(j.isZero(r))return!0;if(!j.isInteger(r))return!1;var e=c.division(r,"2"),t=j.getDecimal(e);return!!j.isZero(t)},isOddNumber:function(r){if(j.isZero(r))return!1;if(!j.isInteger(r))return!1;var e=c.division(r,"2"),t=j.getDecimal(e);return!!c.isEqual("0.5",t)},getDivisors:function(r){var e=[];if(!r&&0!==r)return e;var t=j.getNumber(r);if(!t)return e;if(c.isZero(t))return e;if(j.isNaturalNumber(t))if(c.isOne(t))e.push(t);else for(var n=c.getOne();c.isEqual(t,n)||c.isLarge(t,n);n=c.add(n,"1")){var i=c.division(t,n);if(j.isNaturalNumber(i)){var a=i.remainder;c.isZero(a)&&e.push(j.getNumber(n))}}return e},commonDivisors:function(r,e){var t=[];if(!r&&0!==r)return t;if(!e&&0!==e)return t;var n=j.getNumber(r),i=j.getNumber(e),a=j.getDivisors(n);if(c.isEqual(n,i))return a;for(var u=j.getDivisors(i),o=0;o<a.length;o++)for(var s=a[o],l=0;l<u.length;l++){var m=u[l];c.isEqual(s,m)&&t.push(s)}return t},greatestCommonDivisor:function(r,e){var t=j.commonDivisors(r,e);return t.length?t[t.length-1]:null},commonMultiple:function(r,e,t){var n=t||10,i=[];if(!r&&0!==r)return i;if(!e&&0!==e)return i;var a=j.getNumber(r),u=j.getNumber(e);if(c.isEqual(a,u))return i.push(a),i;for(var o=[],s=[],l=1;l<=n;l++){var m=c.multiple(a,l);o.push(m)}for(var f=1;f<=n;f++){var g=c.multiple(u,f);s.push(g)}return o.forEach((function(r){var e=s.find((function(e){return c.isEqual(r,e)}));e&&i.push(e)})),i},leastCommonMultiple:function(r,e,t){return j.commonMultiple(r,e,t)[0]}},w=function(r){var e=r.array,t=r.limit||100,n=e.length;return function r(e){if(e.length>=t)return e;for(var i=j.getNumber("0"),a=0;a<n;a++){var u=e[e.length-(n-a)];i=c.add(i,u)}return e.push(i),r(e)}(e)},O=function(r){for(var e=r.first,t=void 0===e?"0":e,n=r.last,i=void 0===n?"1":n,a=r.length,u=void 0===a?2:a,o=j.getNumber(t),s=j.getNumber(i),l=[],c=0;c<u;c++){var m=o;c===u-1&&(m=s),l.push(m)}return l};j.makeFibonacciSequence=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",t=O({first:r,last:e,length:2});return w({array:t,limit:100})},j.makeTribonacciSequence=function(){var r=O({first:"0",last:"1",length:3});return w({array:r,limit:100})},j.makeTetranacciSequence=function(){var r=O({first:"0",last:"1",length:4});return w({array:r,limit:100})},j.makePentanacciSequence=function(){var r=O({first:"0",last:"1",length:5});return w({array:r,limit:100})},j.makeHexanacciSequence=function(){var r=O({first:"0",last:"1",length:6});return w({array:r,limit:100})},j.makeHeptanacciSequence=function(){var r=O({first:"0",last:"1",length:7});return w({array:r,limit:100})},j.makeOctanacciSequence=function(){var r=O({first:"0",last:"1",length:8});return w({array:r,limit:100})},j.makeNonanacciSequence=function(){var r=O({first:"0",last:"1",length:9});return w({array:r,limit:100})},j.makeDecanacciSequence=function(){var r=O({first:"0",last:"1",length:10});return w({array:r,limit:100})},j.makeUndecanacciSequence=function(){var r=O({first:"0",last:"1",length:11});return w({array:r,limit:100})},j.makeDodecanacciSequence=function(){var r=O({first:"0",last:"1",length:12});return w({array:r,limit:100})},j.makeIcosanacciSequence=function(){var r=O({first:"0",last:"1",length:20});return w({array:r,limit:100})},j.makeLucaSequence=function(){var r=O({first:"2",last:"1",length:2});return w({array:r,limit:100})},j.summation=function(r){var e=r.array,t=j.getNumber("0");if(Array.isArray(e))for(var n=0;n<e.length;n++)t=c.add(t,e[n]);return t},j.infiniteProduct=function(r){var e=r.array;if(!e||!Array.isArray(e))return c.getZero();if(1===e.length)return j.getNumber(e[0]);for(var t=e[0],n=1;n<e.length;n++)t=c.multiple(t,e[n]);return t},j.digitSum=function(r){var e=j.getNumber(r),t=j.getNumber("0");return e&&Array.isArray(e.array)?(e.array.forEach((function(r){t=c.add(t,r)})),t):t},j.makeTriangleNumber=function(r){var e=j.getNumber(r);if(c.isZero(e))return null;if(j.isNegative(e))return null;if(!j.isInteger(e))return null;var t=c.multiple(e,c.add(r,"1"));return c.divide(t,"2")},j.makePronicNumber=function(r){var e=j.getNumber(r);return c.isZero(e)||j.isNegative(e)?null:j.isInteger(e)?c.multiple(e,c.add(r,"1")):null},j.factorial=function(r){var e=j.getNumber(r);if(c.isZero(e))return c.getZero();if(j.isNegative(e))return null;if(!j.isInteger(e))return null;if(c.isOne(e))return c.getOne();for(var t=!0,n=e,i=[e];t;){var a=c.subtract(n,"1");if(i.push(a),n=a,c.isSmall(n,"2")){t=!1;break}}return j.infiniteProduct({array:i})};const P=j;var W={commonMultiple:{ja:"公倍数"},greatestCommonDivisor:{ja:"最大公約数"},commonDivisors:{ja:"公約数"},makeFibonacciSequence:{ja:"フィボナッチ数列"},makeLucaSequence:{ja:"リュカ数列"},makeTribonacciSequence:{ja:"トリボナッチ数列"},makeTetranacciSequence:{ja:"テトラナッチ数列"},makePentanacciSequence:{ja:"ペンタナッチ数列"},makeHexanacciSequence:{ja:"ヘキサナッチ数列"},makeHeptanacciSequence:{ja:"ヘプタナッチ数列"},makeOctanacciSequence:{ja:"オクタナッチ数列"},makeNonanacciSequence:{ja:"ノナナッチ数列"},makeDecanacciSequence:{ja:"デカナッチ数列"},makeUndecanacciSequence:{ja:"ウンデカナッチ数列"},makeDodecanacciSequence:{ja:"ドデカナッチ数列"},makeIcosanacciSequence:{ja:"イコサナッチ数列"},summation:{ja:"総和"},infiniteProduct:{ja:"総乗/総積"},digitSum:{ja:"数字和/各桁の総和"},makeTriangleNumber:{ja:"三角数"},makePronicNumber:{ja:"矩形数"},factorial:{ja:"階乗"},modulo:{ja:"剰余演算"}};const M={s:k,S:q.S,K:q.K,core:c,core_old:x,utils:P,doc:function(r){var e=r.name,t=void 0===e?"":e,n=r.lang,i=void 0===n?"ja":n;if(!t)return"";var a=P[t];if(a||(a=c[t]),!a)return"";var u=W[t];if(u&&u[i])return u[i];var o=Object.keys(u)[0];return o?u[o]:""}};return e.default})()}));