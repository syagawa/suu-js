!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return function(r){var e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return r[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var i in r)t.d(n,i,function(e){return r[e]}.bind(null,i));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e,t){r.exports=t(1)},function(r,e,t){"use strict";t.r(e);var n=1e4,i=-1e4,a={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],t=String(r),n=t.length,i=0;i<n;i++){var o=Number(t.slice(i,i+1));if(!a.isNumber(o))throw new Error("This function has been called with incorrect parameters");e.push(o)}return e},numToArrayWithDecimal:function(r){for(var e=[],t=[],n=String(r),i=n.length,o=e,u=0;u<i;u++){var s=Number(n[u]);if(!a.isNumber(s)){if("."!==s||o!==e)throw new Error("This function has been called with incorrect parameters");o=t}o.push(s)}return[].concat(e,[".",t])},numToArrayWithDecimal2:function(r){var e=String(r),t=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),t=!0);for(var n=e.split(""),i=[],o=[],u=!0,s=!1,l=0;l<n.length;l++){var f=Number(n[l]),c=a.isNumber(f);if(c||"."!==n[l]){if(!c)throw new Error("This function has been called with incorrect parameters");u&&0===f&&!s||(u=!1,s?o.push(t?-f:f):i.push(t?-f:f))}else s=!0}for(var h=o.length-1;h>=0;h--){if(0!==o[h])break;o.pop()}return{int:i,decimal:o,negative:t}},numToArrayWithDecimal3:function(r){for(var e=String(r),t=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),t=!t;var n=null,i=e.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length&&(n=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,n);for(var o=[],u=0,s=0;s<e.length;s++){var l=Number(e[s]);if(!a.isNumber(l))throw new Error("This function has been called with incorrect parameters");0===l&&n>s?u++:o.push(l)}for(n-=u;0===o[o.length-1];)o.pop();var f={array:o,negative:t};return(0===n||n>0)&&(f.decimal_index=n),f}},compare:function(r,e){if(r&&e){var t,n;if(t=r instanceof Array?r:a.numToArrayWithDecimal2(r),n=e instanceof Array?e:a.numToArrayWithDecimal2(e),0===t[0]){for(var i=[],o=!0,u=0;u<t.length;u++){var s=t[u];0===s&&o||(i.push(s),o=!1)}t=i}if(0===n[0]){for(var l=[],f=!0,c=0;c<n.length;c++){var h=n[c];0===h&&f||(l.push(h),f=!1)}n=l}var g={equal:!1,large:null,small:null};if(t.length>t.length)return g.large=r,g.small=e,g;if(t.length<t.length)return g.large=e,g.small=r,g;for(var m=0;m<t.length;m++){var v=t[m],p=n[m];if(v>p)return g.large=r,g.small=e,g;if(v<p)return g.large=e,g.small=r,g}return g.equal=!0,g}},getLarge:function(r,e){var t=a.numToArrayWithDecimal2(r),n=a.numToArrayWithDecimal2(e),i=!1;if(t.negative&&!n.negative)return e;if(!t.negative&&n.negative)return r;t.negative&&n.negative&&(i=!0);var o=a.compare(t.int,n.int);if(o.large===t.int)return i?e:r;if(o.large===n.int)return i?r:e;if(t.decimal.length<n.decimal.length)for(var u=n.decimal.length-t.decimal.length,s=0;s<u;s++)t.decimal.push(0);else if(t.decimal.length>n.decimal.length)for(var l=t.decimal.length-n.decimal.length,f=0;f<l;f++)n.decimal.push(0);var c=a.compare(t.decimal,n.decimal);return c.large===t.decimal?i?e:r:c.large===n.decimal?i?r:e:void 0},getSmall:function(r,e){var t=a.getLarge(r,e);return t===r?e:t===e?r:void 0},isEqual:function(r,e){return!!a.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!a.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),console.log(o),console.log("minus",t),{new_array:o,minus:t}},add_and_subtract:function(r,e,t){if((r||e)&&t){var n;if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i=a.numToArrayWithDecimal2(r),o=a.numToArrayWithDecimal2(e),u=i.int,s=o.int,l=i.decimal,f=o.decimal,c=(i.negative,o.negative,l.length);c<f.length&&(c=f.length);for(var h=0;h<c;h++){var g=l[h],m=f[h];a.isNumber(g)||l.push(0),a.isNumber(m)||f.push(0)}var v,p,d,b=function(r,e,t){var n=[],i=r,o=e;r.length<e.length&&(i=e,o=r);for(var u=0;u<i.length;u++){var s=i[u]?i[u]:0,l=o[u]?o[u]:0,f=t?s+l:s-l;n.push(f)}return a.fixCarry(n)},y=(v=l.length<f.length?f.legth:l.length,p=b(l.reverse(),f.reverse(),n),d=0,p.new_array.length>v&&(d=p.new_array.pop()),{dec_arr:p.new_array,dec_carry:d,dec_minus:p.minus}),N=y.dec_arr,S=y.dec_carry,w=y.dec_minus,A=function(r){var e=b(u.reverse(),s.reverse(),n);return 0!==r&&(e=b(e.new_array,[r],!0)),{int_arr:e.new_array}}(S).int_arr;return console.log(A),console.log(N,S,w),{int:A.reverse(),decimal:N.reverse()}}},add:function(r,e){a.numToArrayWithDecimal2(r),a.numToArrayWithDecimal2(e),a.getLarge(r,e)}},o=a,u=n,s=i,l="Division by Zero",f="Not a number",c="Argument is not Su.",h=function(r,e){if(isNaN(r))throw new Error(f);r||(r=0),e||(e={});var t=String(r),n=!1;"-"===t[0]&&(t=t.slice(1,t.length),n=!0),!n&&e&&e.negative&&(n=!0),isNaN(Number(t))&&(t="0"),"0"===t&&(n=!1);var i,a,u=t.split("."),s=u[0],l=u[1];if(s){var c=s.match(/0/g);c&&c.length===s.length&&(s="0");for(var h="",g=!0,m=0;m<s.length;m++)"0"===s[m]&&g||(g=!1,h+=s[m]);s=h||"0"}if(l){var v=l.match(/0/g);v&&v.length===l.length&&(l="0");for(var p=!0,d="",b=l.length-1;b>=0;b--)"0"===l[b]&&p||(p=!1,d=l[b]+d);l=d||"0"}try{i=o.numToArray(s),a=l?o.numToArray(l):[0]}catch(r){throw new Error(f)}this.integer=i,this.decimal=a,this.negative=!!n;for(var y=[1],N=0;N<this.decimal.length;N++)y.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:y}},g=function(r,e){var t;try{t=new h(r,e)}catch(r){t=r.message}return t},m=function(r){if(r instanceof h)return!0},v=function(r){var e=r.getString();return g(e)},p={ZERO:g(0),ONE:g(1),FIRST_PRIME_NUMBER:g(2),MAX:g(u),MIN:g(s)};h.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},h.prototype.getNumber=function(){return Number(this.getString())},h.prototype.getInteger=function(){return Number(this.integer.join(""))},h.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},h.prototype.clone=function(){var r=this.getString();return g(r)};var d=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1,i=[],a=g(r.getString()),o=g(e.getString());if(t&&(a.negative=!1,o.negative=!1),!a.isZero()||!o.isZero()){if(!a.negative&&o.negative)return r;if(a.negative&&!o.negative)return e;if(a.negative&&o.negative&&(n=!0),a.integer.length>o.integer.length)return n?e:r;if(a.integer.length<o.integer.length)return n?r:e;for(var u=0;u<a.integer.length;u++){var s=a.integer[u],l=o.integer[u];if(s>l){i=[r,e];break}if(s<l){i=[e,r];break}}if(0===i.length)for(var f=a.decimal.length>=o.decimal.length?a.decimal.length:o.decimal.length,c=0;c<f;c++){var h=a.decimal[c]?a.decimal[c]:0,m=o.decimal[c]?o.decimal[c]:0;if(h>m){i=[r,e];break}if(h<m){i=[e,r];break}}return n&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};h.prototype.isEqual=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=e.integer,i=t.integer,a=e.decimal,o=t.decimal;if(d(e,t))return!1;if(n.length===i.length){for(var u=0;u<n.length;u++)if(n[u]!==i[u])return!1}else{if(a.length!==o.length)return!1;for(var s=0;s<a.length;s++)if(a[s]!==o[s])return!1}return e.negative===t.negative},h.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},h.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},h.prototype.isLarge=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=d(e,t);return!!n&&n.getString()===e.getString()},h.prototype.isSmall=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=d(e,t);return!!n&&n.getString()===t.getString()},h.prototype.isInteger=function(){return!this.containDecimal()},h.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(p.ZERO))},h.prototype.isNegative=function(){return!!this.negative},h.prototype.isPositive=function(){return!this.negative},h.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},h.prototype.add=function(r){if(!m(r))throw new Error(c);var e,t=this.clone(),n=r.clone();if(t.isZero())return n;if(n.isZero())return t;if(t.negative&&n.negative)e=!0;else if(t.negative||n.negative){if(!t.negative&&n.negative)return n.makePositive(),t.subtract(n);if(t.negative&&!n.negative)return t.makePositive(),n.subtract(t)}else e=!1;var i=d(t,n);i||(i=t);var a,o,u=i.integer,s=i.decimal;i===t?(a=n.integer,o=n.decimal):(a=t.integer,o=t.decimal);var l=u.length,f=s.length;o.length>s.length&&(f=o.length);for(var h=0,v=[],p=[],b=f-1;b>=0;b--){var y=void 0;(y=(s[b]||0)+(o[b]||0)+h)>=10?(h=1,y-=10):h=0,p.unshift(y)}for(var N=p.length-1;N>=0;N--){if(0!==p[N])break;p.pop()}for(var S=l-a.length,w=l-1;w>=0;w--){var A=void 0;(A=u[w]+(a[w-S]||0)+h)>=10?(h=1,A-=10):h=0,v.unshift(A)}h>0&&v.unshift(h);var E=g(v.join("")+"."+p.join(""),{negative:e});return E.isZero()&&E.negative&&E.makePositive(),E},h.prototype.subtract=function(r){if(!m(r))throw new Error(c);var e=v(this),t=v(r);if(r.isZero())return e;if(this.isZero())return t.negate();if(e.negative!==t.negative)return t.negative=!t.negative,e.add(t);var n=e.negative;d(e,t,!0)!==e&&(t=this,n=!(e=r).negative);var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),o=e.integer.length,u=t.integer.length,s=e.decimal.length,l=t.decimal.length,f=Math.abs(s-l),h=0,p=0;if(h+=o>u?o:u,s>l){p+=s;for(var b=0;b<f;b++)a.push(0)}else{p+=l;for(var y=0;y<f;y++)i.push(0)}for(var N=0,S=[],w=0;w<h+p;w++){var A=i.length-1-w,E=a.length-1-w,T=(i[A]?i[A]:0)-N,D=a[E]?a[E]:0;T>=D?(N=0,S.unshift(T-D)):(N=1,S.unshift(10*N+T-D))}S.splice(S.length-p,0,".");var _=g((n?"-":"")+S.join(""));return _.isZero()&&_.negative&&_.makePositive(),_},h.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},h.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},h.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},h.prototype.multiplication=function(r){if(!m(r))throw new Error(c);var e=v(this),t=v(r);if(e.isZero()||t.isZero())return g(0);var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),o=e.integer.length,u=t.integer.length,s=[],l=0;l<i.length;l++)for(var f=0;f<a.length;f++){var h=o-l-1+(u-f-1),p=i[l]*a[f],d=Math.abs(h),b=void 0;h>=0?(d++,b=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):b=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),s.push(g(b))}for(var y=g(0),N=0;N<s.length;N++)y=y.add(s[N]);return y.negative=n,y},h.prototype.division=function(r){if(!m(r))throw new Error(c);var e=v(this),t=v(r);if(e.isZero()&&t.isZero())return f;if(e.isZero())return g(0);if(t.isZero())return l;var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=g(0),a=g(0);e.isLarge(a)||e.isEqual(a);)i=i.add(g(1)),a=t.multiplication(i);i=i.subtract(g(1)),a=a.subtract(t);var o=e.subtract(a),u=i;return u.remainder=o,u.negative=n,u},h.prototype.plus=function(r){return this.add(r)},h.prototype.tasu=function(r){return this.add(r)},h.prototype.minus=function(r){return this.subtract(r)},h.prototype.hiku=function(r){return this.subtract(r)},h.prototype.multiply=function(r){return this.multiplication(r)},h.prototype.kakeru=function(r){return this.multiplication(r)},h.prototype.waru=function(r){return this.division(r)},h.prototype.next=function(){return this.add(g(1))},h.prototype.prev=function(){return this.subtract(g(1))},h.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(g(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},h.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(g(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},h.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(g(e));e++){var t=g(e);this.division(t).remainder.isZero()&&r.push(t)}return r.push(this),r},h.prototype.getCommonDivisors=function(r){m(r)||(r=g(r));var e=r,t=this.getDivisors();if(this.isEqual(e))return t;for(var n=e.getDivisors(),i=[],a=0;a<t.length;a++)for(var o=t[a],u=0;u<n.length;u++){var s=n[u];o.isEqual(s)&&i.push(o)}return i},h.prototype.getMaxCommonDivisor=function(r){m(r)||(r=g(r));var e=this.getCommonDivisors(r);return e[e.length-1]},h.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=g("1");e.isSmall(p.MAX)||e.isEqual(p.MAX);)r.push(this.multiplication(e)),e=e.add(g("1"));return r},h.prototype.getLeastCommonMultiple=function(r){m(r)||(r=g(r));var e=r,t=this.getMaxCommonDivisor(e);return this.multiply(e).division(t)};var b=function(r,e){if(!m(r)||!m(e))return!1;var t=p.MAX;return function r(e){if(e[e.length-1].isLarge(t))return e;var n=e[e.length-2],i=e[e.length-1],a=n.add(i);return e.push(a),r(e)}([r,e])};h.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=g(0),t=g(1),n=b(e,t),i=0;i<n.length;i++){if(n[i].isEqual(r))return!0}return!1},h.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=b(g(2),g(1)),e=0;e<r.length;e++){if(r[e].isEqual(this))return!0}return!1};var y=function(r,e){var t=[r];if(!e)return t;for(var n=0;n<e.length;n++){var i=e[n];m(i)||(i=g(i)),t.push(i)}return t};h.prototype.getSequence=function(){return y(this,arguments)},h.prototype.summation=function(){for(var r=y(this,arguments),e=g(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},h.prototype.infiniteProduct=function(){for(var r=y(this,arguments),e=r[0],t=1;t<r.length;t++)e=e.multiplication(r[t]);return e},h.prototype.digitsum=function(){for(var r=g(0),e=0;e<this.integer.length;e++){var t=g(this.integer[e]);r=r.add(t)}return r},h.prototype.square=function(){return this.exponentiate(g(2))},h.prototype.cube=function(){return this.exponentiate(g(3))},h.prototype.exponentiate=function(r){var e=g("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var t=e,n=v(this);t.isSmall(r);)n=this.multiplication(n),t=t.next();return n},h.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(g(1)),e=g(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(g(1))}return!0},h.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=g(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},h.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(g(2)))},h.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(g(2)))},h.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},h.prototype.factorial=function(){for(var r=this,e=this.subtract(g(1)),t=g(0);e.isLarge(t);)r=r.multiplication(e),e=e.subtract(g(1));return r};var N=function(r,e){if(m(r)){if(r.isSmall(g(3)))return[];var t=g(1),n=[],i=t;e=e?e.next():p.MAX;for(var a=r.subtract(g(2));t.isSmall(e);)n.push(t),i=i.add(a),t=t.add(i);return n}};h.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,N(g(3),r)).find((function(r){return r.isEqual(e)}))},h.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,N(g(4),r)).find((function(r){return r.isEqual(e)}))};var S=function(r){r=r?r.next():p.MAX;for(var e=g(2),t=[],n=g(0),i=g(1);n.isSmall(r);)n=e.exponentiate(i).subtract(g(1)),t.push(n),i=i.add(g(1));return t};h.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=S(r),t=0;t<e.length;t++){if(e[t].isEqual(r))return!0}return!1},h.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():p.MAX;for(var e=S(r),t=[],n=0;n<e.length;n++){var i=e[n];i.isPrimeNumber()&&t.push(i)}return t}(r),t=0;t<e.length;t++){if(e[t].isEqual(r))return!0}return!1};var w={makeSu:g,copySu:v,isSu:m,Su:h},A=n,E={},T={},D=w.makeSu,_=w.isSu;T.random=function(r,e){void 0===r&&(r=D(0)),void 0===e&&(e=D(1)),_(r)||(r=D(r)),_(e)||(e=D(e));var t,n=String(Math.random());if("0"===n)t=r.isZero()?D(0):r;else{var i=n.split(".");t=D("0."+i[1]).multiplication(e)}return t},T.randomElement=function(r){return r[T.random(0,r.length).integer]},T.randomInt=function(r,e){if(!_(r)||!_(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var t=[],n=r.getNumber();n<=e.getNumber();n++){var i=D(n);t.push(i)}return T.randomElement(t)},T.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString()));r||(r=100),r>100&&(r=100);for(var e=[],t=2;t<r;t++){var n=D(t);n.isPrimeNumber()&&e.push(n)}return e},T.euclideanAlgorithm=function(r,e){if(!E.isNumber(r)||!E.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var t;r<e&&(t=r,r=e,e=t);for(var n,i,a=r,o=e;0!==n;){if(0===(n=a%o)){i=o;break}if(1===n){i="coprime";break}if(0>=A)break;a=o,o=n}return i},T.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var t=0,n=0;n<r.length;n++){var i=r[n];if(!E.isNumber(i))return"Argument is not Number";t+=i}return t},T.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var t=1,n=0;n<r.length;n++){var i=r[n];if(!E.isNumber(i))return"Argument is not a Number";t*=i}return t},T.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var t=r/e;return{integer:{remainder:r%e,result:Math.floor(t)},realNumber:t}},T.divisorsSummation=function(r){for(var e=T.divisors(r),t=0,n=0;n<e.length;n++)t+=e[n];return t},T.isAbundantNumber=function(r){return T.divisorsSummation(r)>2*r},T.isKaprekarNumberTypeA=function(r){var e=String(r*r),t=e.length,n=0,i=0;return i=E.isOddNumber(t)?(n=(t-1)/2)+1:n=t/2,Number(e.substr(0,n))+Number(e.substr(n,i))===r},T.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),t=Number(e.sort().join(""));return Number(e.reverse().join(""))-t===r},T.isKaprekarNumber=function(r){if(T.isKaprekarNumberTypeA(r)||T.isKaprekarNumberTypeB(r))return!0},E.isInteger=function(r){return Math.floor(r)===r},T.harmonicMean=function(r){for(var e=r.length,t=0,n=0;n<e;n++)t+=1/r[n];return e/t},T.isHarmonicDivisorNumber=function(r){var e=T.divisors(r),t=T.harmonicMean(e);return!!E.isInteger(t)},E.isNaturalNumber=function(r){if(r>0&&E.isInteger(r))return!0},T.collatzhProblem=function(r){for(var e,t,n=[];r>1;)t=void 0,t=e=r,E.isOddNumber(e)?t=3*e+1:E.isEvenNumber(e)&&(t=e/2),r=t,n.push(r);return n},T.fermatTest=function(r,e){if(!E.isInteger(r)||E.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var t=1;t<=e;t++){var n=T.randomInt(2,r-1);if(1!==T.maxCommonDivisor(n,r))return"Composit Number";if(1!==Math.pow(n,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},T.getIncludesNumbers=function(r){for(var e=[],t=r,n=!0;n;){var i=[t,r-t];if(e.push(i),(t-=1)<0){n=!1;break}}return e};var Z={S:E,K:T},x={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},numToArrayWithDecimal:function(r){for(var e,t=String(r),n=!1;t[0].match(/^-/);)t=t.replace(/^-/,""),n=!n;var i=t.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=t.match(/\./).index,t=t.replace(/\./,"")):e=t.length;for(var a=[],o=0;o<t.length;o++){var u=Number(t[o]);if(!x.isNumber(u))throw new Error("This function has been called with incorrect parameters");a.push(u)}for(;e<a.length&&0===a[a.length-1];)a.pop();for(;e>1&&0===a[0];)a.shift(),e--;0===a.length&&(a.push(0),e=1);var s={array:a,negative:n};return s.decimal_index=0===e||e>0?e:a.length,s}},compare:function(r,e){if(r&&e){var t={small:null,large:null,equal:!1},n=r.array,i=e.array,a=n.length,o=i.length,u=n.join(""),s=i.join(""),l=r.decimal_index,f=e.decimal_index,c=a-l,h=o-f;if(1===a&&"0"===u&&1===o&&"0"===s)return t.equal=!0,t;if(!r.negative&&e.negative)return t.small=e,t.large=r,t;if(r.negative&&!e.negative)return t.small=r,t.large=e,t;var g=r.negative,m={large:g?e:r,small:g?r:e,equal:!1},v={large:g?r:e,small:g?e:r,equal:!1};if(l>f)return m;if(l<f)return v;for(var p=0;p<l;p++){if(n[p]>i[p])return m;if(n[p]<i[p])return v}for(var d=c>h?c:h,b=0;b<d;b++){var y=n[l+b]?n[l+b]:0,N=i[f+b]?i[f+b]:0;if(y>N)return m;if(y<N)return v}return t.equal=!0,t}},getLarge:function(r,e){return x.compare(r,e).large},getSmall:function(r,e){return x.compare(r,e).small},isEqual:function(r,e){return!!x.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!x.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),console.log(o),console.log("minus",t),{new_array:o,minus:t}},add_and_subtract:function(r,e,t){if((r||e)&&t){var n;if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i,a=x.numToArrayWithDecimal(r||0),o=x.numToArrayWithDecimal(e||0),u=a.int,s=o.int,l=function(r,e,t){var n=[],i=r,a=e;r.length<e.length&&(i=e,a=r);for(var o=0;o<i.length;o++){var u=i[o]?i[o]:0,s=a[o]?a[o]:0,l=t?u+s:u-s;n.push(l)}return x.fixCarry(n)},f=(i=l(u.reverse(),s.reverse(),n),{int_arr:(i=l(i.new_array,[void 0],!0)).new_array}).int_arr;return console.log(f),{int:f.reverse()}}},add:function(r,e){x.numToArrayWithDecimal(r),x.numToArrayWithDecimal(e),x.getLarge(r,e)}},k=x;e.default={s:w,S:Z.S,K:Z.K,core:o,core2:k}}]).default}));