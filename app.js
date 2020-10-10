!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return function(r){var e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return r[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var i in r)t.d(n,i,function(e){return r[e]}.bind(null,i));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e,t){r.exports=t(1)},function(r,e,t){"use strict";t.r(e);var n=1e4,i=-1e4,a={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],t=String(r),n=t.length,i=0;i<n;i++){var o=Number(t.slice(i,i+1));if(!a.isNumber(o))throw new Error("This function has been called with incorrect parameters");e.push(o)}return e},numToArrayWithDecimal:function(r){for(var e=[],t=[],n=String(r),i=n.length,o=e,u=0;u<i;u++){var s=Number(n[u]);if(!a.isNumber(s)){if("."!==s||o!==e)throw new Error("This function has been called with incorrect parameters");o=t}o.push(s)}return[].concat(e,[".",t])},numToArrayWithDecimal2:function(r){var e=String(r),t=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),t=!0);for(var n=e.split(""),i=[],o=[],u=!0,s=!1,l=0;l<n.length;l++){var c=Number(n[l]),f=a.isNumber(c);if(f||"."!==n[l]){if(!f)throw new Error("This function has been called with incorrect parameters");u&&0===c&&!s||(u=!1,s?o.push(t?-c:c):i.push(t?-c:c))}else s=!0}for(var h=o.length-1;h>=0;h--){if(0!==o[h])break;o.pop()}return{int:i,decimal:o,negative:t}},numToArrayWithDecimal3:function(r){for(var e=String(r),t=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),t=!t;var n=null,i=e.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length&&(n=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,n);for(var o=[],u=0,s=0;s<e.length;s++){var l=Number(e[s]);if(!a.isNumber(l))throw new Error("This function has been called with incorrect parameters");0===l&&n>s?u++:o.push(l)}for(n-=u;0===o[o.length-1];)o.pop();var c={array:o,negative:t};return(0===n||n>0)&&(c.decimal_index=n),c}},compare:function(r,e){if(r&&e){var t,n;if(t=r instanceof Array?r:a.numToArrayWithDecimal2(r),n=e instanceof Array?e:a.numToArrayWithDecimal2(e),0===t[0]){for(var i=[],o=!0,u=0;u<t.length;u++){var s=t[u];0===s&&o||(i.push(s),o=!1)}t=i}if(0===n[0]){for(var l=[],c=!0,f=0;f<n.length;f++){var h=n[f];0===h&&c||(l.push(h),c=!1)}n=l}var g={equal:!1,large:null,small:null};if(t.length>t.length)return g.large=r,g.small=e,g;if(t.length<t.length)return g.large=e,g.small=r,g;for(var m=0;m<t.length;m++){var v=t[m],p=n[m];if(v>p)return g.large=r,g.small=e,g;if(v<p)return g.large=e,g.small=r,g}return g.equal=!0,g}},getLarge:function(r,e){var t=a.numToArrayWithDecimal2(r),n=a.numToArrayWithDecimal2(e),i=!1;if(t.negative&&!n.negative)return e;if(!t.negative&&n.negative)return r;t.negative&&n.negative&&(i=!0);var o=a.compare(t.int,n.int);if(o.large===t.int)return i?e:r;if(o.large===n.int)return i?r:e;if(t.decimal.length<n.decimal.length)for(var u=n.decimal.length-t.decimal.length,s=0;s<u;s++)t.decimal.push(0);else if(t.decimal.length>n.decimal.length)for(var l=t.decimal.length-n.decimal.length,c=0;c<l;c++)n.decimal.push(0);var f=a.compare(t.decimal,n.decimal);return f.large===t.decimal?i?e:r:f.large===n.decimal?i?r:e:void 0},getSmall:function(r,e){var t=a.getLarge(r,e);return t===r?e:t===e?r:void 0},isEqual:function(r,e){return!!a.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!a.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),console.log(o),console.log("minus",t),{new_array:o,minus:t}},add_and_subtract:function(r,e,t){if((r||e)&&t){var n;if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i=a.numToArrayWithDecimal2(r),o=a.numToArrayWithDecimal2(e),u=i.int,s=o.int,l=i.decimal,c=o.decimal,f=(i.negative,o.negative,l.length);f<c.length&&(f=c.length);for(var h=0;h<f;h++){var g=l[h],m=c[h];a.isNumber(g)||l.push(0),a.isNumber(m)||c.push(0)}var v,p,d,y=function(r,e,t){var n=[],i=r,o=e;r.length<e.length&&(i=e,o=r);for(var u=0;u<i.length;u++){var s=i[u]?i[u]:0,l=o[u]?o[u]:0,c=t?s+l:s-l;n.push(c)}return a.fixCarry(n)},b=(v=l.length<c.length?c.legth:l.length,p=y(l.reverse(),c.reverse(),n),d=0,p.new_array.length>v&&(d=p.new_array.pop()),{dec_arr:p.new_array,dec_carry:d,dec_minus:p.minus}),N=b.dec_arr,S=b.dec_carry,A=b.dec_minus,w=function(r){var e=y(u.reverse(),s.reverse(),n);return 0!==r&&(e=y(e.new_array,[r],!0)),{int_arr:e.new_array}}(S).int_arr;return console.log(w),console.log(N,S,A),{int:w.reverse(),decimal:N.reverse()}}},add:function(r,e){a.numToArrayWithDecimal2(r),a.numToArrayWithDecimal2(e),a.getLarge(r,e)}},o=a,u=n,s=i,l="Division by Zero",c="Not a number",f="Argument is not Su.",h=function(r,e){if(isNaN(r))throw new Error(c);r||(r=0),e||(e={});var t=String(r),n=!1;"-"===t[0]&&(t=t.slice(1,t.length),n=!0),!n&&e&&e.negative&&(n=!0),isNaN(Number(t))&&(t="0"),"0"===t&&(n=!1);var i,a,u=t.split("."),s=u[0],l=u[1];if(s){var f=s.match(/0/g);f&&f.length===s.length&&(s="0");for(var h="",g=!0,m=0;m<s.length;m++)"0"===s[m]&&g||(g=!1,h+=s[m]);s=h||"0"}if(l){var v=l.match(/0/g);v&&v.length===l.length&&(l="0");for(var p=!0,d="",y=l.length-1;y>=0;y--)"0"===l[y]&&p||(p=!1,d=l[y]+d);l=d||"0"}try{i=o.numToArray(s),a=l?o.numToArray(l):[0]}catch(r){throw new Error(c)}this.integer=i,this.decimal=a,this.negative=!!n;for(var b=[1],N=0;N<this.decimal.length;N++)b.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:b}},g=function(r,e){var t;try{t=new h(r,e)}catch(r){t=r.message}return t},m=function(r){if(r instanceof h)return!0},v=function(r){var e=r.getString();return g(e)},p={ZERO:g(0),ONE:g(1),FIRST_PRIME_NUMBER:g(2),MAX:g(u),MIN:g(s)};h.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},h.prototype.getNumber=function(){return Number(this.getString())},h.prototype.getInteger=function(){return Number(this.integer.join(""))},h.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},h.prototype.clone=function(){var r=this.getString();return g(r)};var d=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1,i=[],a=g(r.getString()),o=g(e.getString());if(t&&(a.negative=!1,o.negative=!1),!a.isZero()||!o.isZero()){if(!a.negative&&o.negative)return r;if(a.negative&&!o.negative)return e;if(a.negative&&o.negative&&(n=!0),a.integer.length>o.integer.length)return n?e:r;if(a.integer.length<o.integer.length)return n?r:e;for(var u=0;u<a.integer.length;u++){var s=a.integer[u],l=o.integer[u];if(s>l){i=[r,e];break}if(s<l){i=[e,r];break}}if(0===i.length)for(var c=a.decimal.length>=o.decimal.length?a.decimal.length:o.decimal.length,f=0;f<c;f++){var h=a.decimal[f]?a.decimal[f]:0,m=o.decimal[f]?o.decimal[f]:0;if(h>m){i=[r,e];break}if(h<m){i=[e,r];break}}return n&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};h.prototype.isEqual=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=e.integer,i=t.integer,a=e.decimal,o=t.decimal;if(d(e,t))return!1;if(n.length===i.length){for(var u=0;u<n.length;u++)if(n[u]!==i[u])return!1}else{if(a.length!==o.length)return!1;for(var s=0;s<a.length;s++)if(a[s]!==o[s])return!1}return e.negative===t.negative},h.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},h.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},h.prototype.isLarge=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=d(e,t);return!!n&&n.getString()===e.getString()},h.prototype.isSmall=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=d(e,t);return!!n&&n.getString()===t.getString()},h.prototype.isInteger=function(){return!this.containDecimal()},h.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(p.ZERO))},h.prototype.isNegative=function(){return!!this.negative},h.prototype.isPositive=function(){return!this.negative},h.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},h.prototype.add=function(r){if(!m(r))throw new Error(f);var e,t=this.clone(),n=r.clone();if(t.isZero())return n;if(n.isZero())return t;if(t.negative&&n.negative)e=!0;else if(t.negative||n.negative){if(!t.negative&&n.negative)return n.makePositive(),t.subtract(n);if(t.negative&&!n.negative)return t.makePositive(),n.subtract(t)}else e=!1;var i=d(t,n);i||(i=t);var a,o,u=i.integer,s=i.decimal;i===t?(a=n.integer,o=n.decimal):(a=t.integer,o=t.decimal);var l=u.length,c=s.length;o.length>s.length&&(c=o.length);for(var h=0,v=[],p=[],y=c-1;y>=0;y--){var b=void 0;(b=(s[y]||0)+(o[y]||0)+h)>=10?(h=1,b-=10):h=0,p.unshift(b)}for(var N=p.length-1;N>=0;N--){if(0!==p[N])break;p.pop()}for(var S=l-a.length,A=l-1;A>=0;A--){var w=void 0;(w=u[A]+(a[A-S]||0)+h)>=10?(h=1,w-=10):h=0,v.unshift(w)}h>0&&v.unshift(h);var _=g(v.join("")+"."+p.join(""),{negative:e});return _.isZero()&&_.negative&&_.makePositive(),_},h.prototype.subtract=function(r){if(!m(r))throw new Error(f);var e=v(this),t=v(r);if(r.isZero())return e;if(this.isZero())return t.negate();if(e.negative!==t.negative)return t.negative=!t.negative,e.add(t);var n=e.negative;d(e,t,!0)!==e&&(t=this,n=!(e=r).negative);var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),o=e.integer.length,u=t.integer.length,s=e.decimal.length,l=t.decimal.length,c=Math.abs(s-l),h=0,p=0;if(h+=o>u?o:u,s>l){p+=s;for(var y=0;y<c;y++)a.push(0)}else{p+=l;for(var b=0;b<c;b++)i.push(0)}for(var N=0,S=[],A=0;A<h+p;A++){var w=i.length-1-A,_=a.length-1-A,x=(i[w]?i[w]:0)-N,E=a[_]?a[_]:0;x>=E?(N=0,S.unshift(x-E)):(N=1,S.unshift(10*N+x-E))}S.splice(S.length-p,0,".");var T=g((n?"-":"")+S.join(""));return T.isZero()&&T.negative&&T.makePositive(),T},h.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},h.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},h.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},h.prototype.multiplication=function(r){if(!m(r))throw new Error(f);var e=v(this),t=v(r);if(e.isZero()||t.isZero())return g(0);var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),o=e.integer.length,u=t.integer.length,s=[],l=0;l<i.length;l++)for(var c=0;c<a.length;c++){var h=o-l-1+(u-c-1),p=i[l]*a[c],d=Math.abs(h),y=void 0;h>=0?(d++,y=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):y=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),s.push(g(y))}for(var b=g(0),N=0;N<s.length;N++)b=b.add(s[N]);return b.negative=n,b},h.prototype.division=function(r){if(!m(r))throw new Error(f);var e=v(this),t=v(r);if(e.isZero()&&t.isZero())return c;if(e.isZero())return g(0);if(t.isZero())return l;var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=g(0),a=g(0);e.isLarge(a)||e.isEqual(a);)i=i.add(g(1)),a=t.multiplication(i);i=i.subtract(g(1)),a=a.subtract(t);var o=e.subtract(a),u=i;return u.remainder=o,u.negative=n,u},h.prototype.plus=function(r){return this.add(r)},h.prototype.tasu=function(r){return this.add(r)},h.prototype.minus=function(r){return this.subtract(r)},h.prototype.hiku=function(r){return this.subtract(r)},h.prototype.multiply=function(r){return this.multiplication(r)},h.prototype.kakeru=function(r){return this.multiplication(r)},h.prototype.waru=function(r){return this.division(r)},h.prototype.next=function(){return this.add(g(1))},h.prototype.prev=function(){return this.subtract(g(1))},h.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(g(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},h.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(g(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},h.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(g(e));e++){var t=g(e);this.division(t).remainder.isZero()&&r.push(t)}return r.push(this),r},h.prototype.getCommonDivisors=function(r){m(r)||(r=g(r));var e=r,t=this.getDivisors();if(this.isEqual(e))return t;for(var n=e.getDivisors(),i=[],a=0;a<t.length;a++)for(var o=t[a],u=0;u<n.length;u++){var s=n[u];o.isEqual(s)&&i.push(o)}return i},h.prototype.getMaxCommonDivisor=function(r){m(r)||(r=g(r));var e=this.getCommonDivisors(r);return e[e.length-1]},h.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=g("1");e.isSmall(p.MAX)||e.isEqual(p.MAX);)r.push(this.multiplication(e)),e=e.add(g("1"));return r},h.prototype.getLeastCommonMultiple=function(r){m(r)||(r=g(r));var e=r,t=this.getMaxCommonDivisor(e);return this.multiply(e).division(t)};var y=function(r,e){if(!m(r)||!m(e))return!1;var t=p.MAX;return function r(e){if(e[e.length-1].isLarge(t))return e;var n=e[e.length-2],i=e[e.length-1],a=n.add(i);return e.push(a),r(e)}([r,e])};h.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=g(0),t=g(1),n=y(e,t),i=0;i<n.length;i++){if(n[i].isEqual(r))return!0}return!1},h.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=y(g(2),g(1)),e=0;e<r.length;e++){if(r[e].isEqual(this))return!0}return!1};var b=function(r,e){var t=[r];if(!e)return t;for(var n=0;n<e.length;n++){var i=e[n];m(i)||(i=g(i)),t.push(i)}return t};h.prototype.getSequence=function(){return b(this,arguments)},h.prototype.summation=function(){for(var r=b(this,arguments),e=g(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},h.prototype.infiniteProduct=function(){for(var r=b(this,arguments),e=r[0],t=1;t<r.length;t++)e=e.multiplication(r[t]);return e},h.prototype.digitsum=function(){for(var r=g(0),e=0;e<this.integer.length;e++){var t=g(this.integer[e]);r=r.add(t)}return r},h.prototype.square=function(){return this.exponentiate(g(2))},h.prototype.cube=function(){return this.exponentiate(g(3))},h.prototype.exponentiate=function(r){var e=g("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var t=e,n=v(this);t.isSmall(r);)n=this.multiplication(n),t=t.next();return n},h.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(g(1)),e=g(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(g(1))}return!0},h.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=g(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},h.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(g(2)))},h.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(g(2)))},h.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},h.prototype.factorial=function(){for(var r=this,e=this.subtract(g(1)),t=g(0);e.isLarge(t);)r=r.multiplication(e),e=e.subtract(g(1));return r};var N=function(r,e){if(m(r)){if(r.isSmall(g(3)))return[];var t=g(1),n=[],i=t;e=e?e.next():p.MAX;for(var a=r.subtract(g(2));t.isSmall(e);)n.push(t),i=i.add(a),t=t.add(i);return n}};h.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,N(g(3),r)).find((function(r){return r.isEqual(e)}))},h.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,N(g(4),r)).find((function(r){return r.isEqual(e)}))};var S=function(r){r=r?r.next():p.MAX;for(var e=g(2),t=[],n=g(0),i=g(1);n.isSmall(r);)n=e.exponentiate(i).subtract(g(1)),t.push(n),i=i.add(g(1));return t};h.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=S(r),t=0;t<e.length;t++){if(e[t].isEqual(r))return!0}return!1},h.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():p.MAX;for(var e=S(r),t=[],n=0;n<e.length;n++){var i=e[n];i.isPrimeNumber()&&t.push(i)}return t}(r),t=0;t<e.length;t++){if(e[t].isEqual(r))return!0}return!1};var A={makeSu:g,copySu:v,isSu:m,Su:h},w=n,_={},x={},E=A.makeSu,T=A.isSu;x.random=function(r,e){void 0===r&&(r=E(0)),void 0===e&&(e=E(1)),T(r)||(r=E(r)),T(e)||(e=E(e));var t,n=String(Math.random());if("0"===n)t=r.isZero()?E(0):r;else{var i=n.split(".");t=E("0."+i[1]).multiplication(e)}return t},x.randomElement=function(r){return r[x.random(0,r.length).integer]},x.randomInt=function(r,e){if(!T(r)||!T(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var t=[],n=r.getNumber();n<=e.getNumber();n++){var i=E(n);t.push(i)}return x.randomElement(t)},x.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString()));r||(r=100),r>100&&(r=100);for(var e=[],t=2;t<r;t++){var n=E(t);n.isPrimeNumber()&&e.push(n)}return e},x.euclideanAlgorithm=function(r,e){if(!_.isNumber(r)||!_.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var t;r<e&&(t=r,r=e,e=t);for(var n,i,a=r,o=e;0!==n;){if(0===(n=a%o)){i=o;break}if(1===n){i="coprime";break}if(0>=w)break;a=o,o=n}return i},x.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var t=0,n=0;n<r.length;n++){var i=r[n];if(!_.isNumber(i))return"Argument is not Number";t+=i}return t},x.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var t=1,n=0;n<r.length;n++){var i=r[n];if(!_.isNumber(i))return"Argument is not a Number";t*=i}return t},x.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var t=r/e;return{integer:{remainder:r%e,result:Math.floor(t)},realNumber:t}},x.divisorsSummation=function(r){for(var e=x.divisors(r),t=0,n=0;n<e.length;n++)t+=e[n];return t},x.isAbundantNumber=function(r){return x.divisorsSummation(r)>2*r},x.isKaprekarNumberTypeA=function(r){var e=String(r*r),t=e.length,n=0,i=0;return i=_.isOddNumber(t)?(n=(t-1)/2)+1:n=t/2,Number(e.substr(0,n))+Number(e.substr(n,i))===r},x.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),t=Number(e.sort().join(""));return Number(e.reverse().join(""))-t===r},x.isKaprekarNumber=function(r){if(x.isKaprekarNumberTypeA(r)||x.isKaprekarNumberTypeB(r))return!0},_.isInteger=function(r){return Math.floor(r)===r},x.harmonicMean=function(r){for(var e=r.length,t=0,n=0;n<e;n++)t+=1/r[n];return e/t},x.isHarmonicDivisorNumber=function(r){var e=x.divisors(r),t=x.harmonicMean(e);return!!_.isInteger(t)},_.isNaturalNumber=function(r){if(r>0&&_.isInteger(r))return!0},x.collatzhProblem=function(r){for(var e,t,n=[];r>1;)t=void 0,t=e=r,_.isOddNumber(e)?t=3*e+1:_.isEvenNumber(e)&&(t=e/2),r=t,n.push(r);return n},x.fermatTest=function(r,e){if(!_.isInteger(r)||_.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var t=1;t<=e;t++){var n=x.randomInt(2,r-1);if(1!==x.maxCommonDivisor(n,r))return"Composit Number";if(1!==Math.pow(n,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},x.getIncludesNumbers=function(r){for(var e=[],t=r,n=!0;n;){var i=[t,r-t];if(e.push(i),(t-=1)<0){n=!1;break}}return e};var D={S:_,K:x};function Z(r){return function(r){if(Array.isArray(r))return k(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,e){if(!r)return;if("string"==typeof r)return k(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(r,e)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var M={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},moldNumArray:function(r){for(var e=r.array,t=r.negative,n=r.decimal_index;n<e.length&&0===e[e.length-1];)e.pop();for(;n>1&&0===e[0];)e.shift(),n--;0===e.length&&(e.push(0),n=1);var i={array:e,negative:t};return i.decimal_index=0===n||n>0?n:e.length,i},numToArrayWithDecimal:function(r){for(var e,t=String(r),n=!1;t[0].match(/^-/);)t=t.replace(/^-/,""),n=!n;var i=t.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=t.match(/\./).index,t=t.replace(/\./,"")):e=t.length;for(var a=[],o=0;o<t.length;o++){var u=Number(t[o]);if(!M.isNumber(u))throw new Error("This function has been called with incorrect parameters");a.push(u)}return M.moldNumArray({array:a,negative:n,decimal_index:e})}},numArrayToString:function(r){if(!r.array||!r.decimal_index)return"";var e=Z(r.array);e.splice(r.decimal_index,0,".");var t=e.join("");return r.negative&&(t="-".concat(t)),t.replace(/\.$/,"")},compare:function(r,e){if(r&&e){var t={small:null,large:null,equal:!1},n=r.array,i=e.array,a=n.length,o=i.length,u=n.join(""),s=i.join(""),l=r.decimal_index,c=e.decimal_index,f=a-l,h=o-c;if(1===a&&"0"===u&&1===o&&"0"===s)return t.equal=!0,t;if(!r.negative&&e.negative)return t.small=e,t.large=r,t;if(r.negative&&!e.negative)return t.small=r,t.large=e,t;var g=r.negative,m={large:g?e:r,small:g?r:e,equal:!1},v={large:g?r:e,small:g?e:r,equal:!1};if(l>c)return m;if(l<c)return v;for(var p=0;p<l;p++){if(n[p]>i[p])return m;if(n[p]<i[p])return v}for(var d=f>h?f:h,y=0;y<d;y++){var b=n[l+y]?n[l+y]:0,N=i[c+y]?i[c+y]:0;if(b>N)return m;if(b<N)return v}return t.equal=!0,t}},getLarge:function(r,e){return M.compare(r,e).large},getSmall:function(r,e){return M.compare(r,e).small},isEqual:function(r,e){return!!M.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!M.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),{new_array:o,minus:t}},add_and_subtract:function(r,e,t){if((r||e)&&t){var n;if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i=M.numToArrayWithDecimal(r||0),a=M.numToArrayWithDecimal(e||0),o=i.array,u=a.array,s=i.array.length-i.decimal_index,l=a.array.length-a.decimal_index,c=s-l,f=i.decimal_index>=a.decimal_index?i.decimal_index:a.decimal_index,h=i.array.length>a.array.length?i.array.length:a.array.length;c>0?u.push.apply(u,Z(Array(c).fill(0))):c<0&&o.push.apply(o,Z(Array(Math.abs(c)).fill(0)));var g=function(r){var e,t,n=r.a,i=r.b,a=r.plus,o=[];n.array.length<i.array.length?(e=i,t=n):(e=n,t=i);for(var u=e.array,s=t.array,l=n.negative?-1:1,c=i.negative?-1:1,f=0;f<u.length;f++){var h=u[f]?u[f]*l:0,g=s[f]?s[f]*c:0,m=a?h+g:h-g;o.push(m)}return console.info(o),M.fixCarry(o)}({a:{array:Z(o).reverse(),negative:i.negative},b:{array:Z(u).reverse(),negative:a.negative},plus:n}),m=g.new_array,v=g.minus,p=s>=l?s:l,d=m.length-p;console.info(f,m,h,c);var y=d;return M.moldNumArray({array:Z(m).reverse(),negative:!!v,decimal_index:y})}},add:function(r,e){return M.add_and_subtract(r,e,"+")},subtract:function(r,e){return M.add_and_subtract(r,e,"-")}},q=M;e.default={s:A,S:D.S,K:D.K,core:o,core2:q}}]).default}));