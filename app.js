!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return function(r){var e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return r[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var i in r)t.d(n,i,function(e){return r[e]}.bind(null,i));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="",t(t.s=0)}([function(r,e,t){r.exports=t(1)},function(r,e,t){"use strict";t.r(e);var n=1e4,i=-1e4,a={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],t=String(r),n=t.length,i=0;i<n;i++){var o=Number(t.slice(i,i+1));if(!a.isNumber(o))throw new Error("This function has been called with incorrect parameters");e.push(o)}return e},numToArrayWithDecimal:function(r){for(var e=[],t=[],n=String(r),i=n.length,o=e,u=0;u<i;u++){var s=Number(n[u]);if(!a.isNumber(s)){if("."!==s||o!==e)throw new Error("This function has been called with incorrect parameters");o=t}o.push(s)}return[].concat(e,[".",t])},numToArrayWithDecimal2:function(r){var e=String(r),t=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),t=!0);for(var n=e.split(""),i=[],o=[],u=!0,s=!1,l=0;l<n.length;l++){var c=Number(n[l]),f=a.isNumber(c);if(f||"."!==n[l]){if(!f)throw new Error("This function has been called with incorrect parameters");u&&0===c&&!s||(u=!1,s?o.push(t?-c:c):i.push(t?-c:c))}else s=!0}for(var g=o.length-1;g>=0;g--){if(0!==o[g])break;o.pop()}return{int:i,decimal:o,negative:t}},numToArrayWithDecimal3:function(r){for(var e=String(r),t=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),t=!t;var n=null,i=e.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length&&(n=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,n);for(var o=[],u=0,s=0;s<e.length;s++){var l=Number(e[s]);if(!a.isNumber(l))throw new Error("This function has been called with incorrect parameters");0===l&&n>s?u++:o.push(l)}for(n-=u;0===o[o.length-1];)o.pop();var c={array:o,negative:t};return(0===n||n>0)&&(c.decimal_index=n),c}},compare:function(r,e){if(r&&e){var t,n;if(t=r instanceof Array?r:a.numToArrayWithDecimal2(r),n=e instanceof Array?e:a.numToArrayWithDecimal2(e),0===t[0]){for(var i=[],o=!0,u=0;u<t.length;u++){var s=t[u];0===s&&o||(i.push(s),o=!1)}t=i}if(0===n[0]){for(var l=[],c=!0,f=0;f<n.length;f++){var g=n[f];0===g&&c||(l.push(g),c=!1)}n=l}var h={equal:!1,large:null,small:null};if(t.length>t.length)return h.large=r,h.small=e,h;if(t.length<t.length)return h.large=e,h.small=r,h;for(var m=0;m<t.length;m++){var v=t[m],p=n[m];if(v>p)return h.large=r,h.small=e,h;if(v<p)return h.large=e,h.small=r,h}return h.equal=!0,h}},getLarge:function(r,e){var t=a.numToArrayWithDecimal2(r),n=a.numToArrayWithDecimal2(e),i=!1;if(t.negative&&!n.negative)return e;if(!t.negative&&n.negative)return r;t.negative&&n.negative&&(i=!0);var o=a.compare(t.int,n.int);if(o.large===t.int)return i?e:r;if(o.large===n.int)return i?r:e;if(t.decimal.length<n.decimal.length)for(var u=n.decimal.length-t.decimal.length,s=0;s<u;s++)t.decimal.push(0);else if(t.decimal.length>n.decimal.length)for(var l=t.decimal.length-n.decimal.length,c=0;c<l;c++)n.decimal.push(0);var f=a.compare(t.decimal,n.decimal);return f.large===t.decimal?i?e:r:f.large===n.decimal?i?r:e:void 0},getSmall:function(r,e){var t=a.getLarge(r,e);return t===r?e:t===e?r:void 0},isEqual:function(r,e){return!!a.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!a.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),console.log(o),console.log("minus",t),{new_array:o,minus:t}},add_and_subtract:function(r,e,t){if((r||e)&&t){var n;if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i=a.numToArrayWithDecimal2(r),o=a.numToArrayWithDecimal2(e),u=i.int,s=o.int,l=i.decimal,c=o.decimal,f=(i.negative,o.negative,l.length);f<c.length&&(f=c.length);for(var g=0;g<f;g++){var h=l[g],m=c[g];a.isNumber(h)||l.push(0),a.isNumber(m)||c.push(0)}var v,p,d,b=function(r,e,t){var n=[],i=r,o=e;r.length<e.length&&(i=e,o=r);for(var u=0;u<i.length;u++){var s=i[u]?i[u]:0,l=o[u]?o[u]:0,c=t?s+l:s-l;n.push(c)}return a.fixCarry(n)},y=(v=l.length<c.length?c.legth:l.length,p=b(l.reverse(),c.reverse(),n),d=0,p.new_array.length>v&&(d=p.new_array.pop()),{dec_arr:p.new_array,dec_carry:d,dec_minus:p.minus}),N=y.dec_arr,S=y.dec_carry,w=y.dec_minus,A=function(r){var e=b(u.reverse(),s.reverse(),n);return 0!==r&&(e=b(e.new_array,[r],!0)),{int_arr:e.new_array}}(S).int_arr;return console.log(A),console.log(N,S,w),{int:A.reverse(),decimal:N.reverse()}}},add:function(r,e){a.numToArrayWithDecimal2(r),a.numToArrayWithDecimal2(e),a.getLarge(r,e)}},o=a,u=n,s=i,l="Division by Zero",c="Not a number",f="Argument is not Su.",g=function(r,e){if(isNaN(r))throw new Error(c);r||(r=0),e||(e={});var t=String(r),n=!1;"-"===t[0]&&(t=t.slice(1,t.length),n=!0),!n&&e&&e.negative&&(n=!0),isNaN(Number(t))&&(t="0"),"0"===t&&(n=!1);var i,a,u=t.split("."),s=u[0],l=u[1];if(s){var f=s.match(/0/g);f&&f.length===s.length&&(s="0");for(var g="",h=!0,m=0;m<s.length;m++)"0"===s[m]&&h||(h=!1,g+=s[m]);s=g||"0"}if(l){var v=l.match(/0/g);v&&v.length===l.length&&(l="0");for(var p=!0,d="",b=l.length-1;b>=0;b--)"0"===l[b]&&p||(p=!1,d=l[b]+d);l=d||"0"}try{i=o.numToArray(s),a=l?o.numToArray(l):[0]}catch(r){throw new Error(c)}this.integer=i,this.decimal=a,this.negative=!!n;for(var y=[1],N=0;N<this.decimal.length;N++)y.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:y}},h=function(r,e){var t;try{t=new g(r,e)}catch(r){t=r.message}return t},m=function(r){if(r instanceof g)return!0},v=function(r){var e=r.getString();return h(e)},p={ZERO:h(0),ONE:h(1),FIRST_PRIME_NUMBER:h(2),MAX:h(u),MIN:h(s)};g.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},g.prototype.getNumber=function(){return Number(this.getString())},g.prototype.getInteger=function(){return Number(this.integer.join(""))},g.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},g.prototype.clone=function(){var r=this.getString();return h(r)};var d=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1,i=[],a=h(r.getString()),o=h(e.getString());if(t&&(a.negative=!1,o.negative=!1),!a.isZero()||!o.isZero()){if(!a.negative&&o.negative)return r;if(a.negative&&!o.negative)return e;if(a.negative&&o.negative&&(n=!0),a.integer.length>o.integer.length)return n?e:r;if(a.integer.length<o.integer.length)return n?r:e;for(var u=0;u<a.integer.length;u++){var s=a.integer[u],l=o.integer[u];if(s>l){i=[r,e];break}if(s<l){i=[e,r];break}}if(0===i.length)for(var c=a.decimal.length>=o.decimal.length?a.decimal.length:o.decimal.length,f=0;f<c;f++){var g=a.decimal[f]?a.decimal[f]:0,m=o.decimal[f]?o.decimal[f]:0;if(g>m){i=[r,e];break}if(g<m){i=[e,r];break}}return n&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};g.prototype.isEqual=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=e.integer,i=t.integer,a=e.decimal,o=t.decimal;if(d(e,t))return!1;if(n.length===i.length){for(var u=0;u<n.length;u++)if(n[u]!==i[u])return!1}else{if(a.length!==o.length)return!1;for(var s=0;s<a.length;s++)if(a[s]!==o[s])return!1}return e.negative===t.negative},g.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},g.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},g.prototype.isLarge=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=d(e,t);return!!n&&n.getString()===e.getString()},g.prototype.isSmall=function(r){if(!m(r))return!1;var e=this.clone(),t=r.clone(),n=d(e,t);return!!n&&n.getString()===t.getString()},g.prototype.isInteger=function(){return!this.containDecimal()},g.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(p.ZERO))},g.prototype.isNegative=function(){return!!this.negative},g.prototype.isPositive=function(){return!this.negative},g.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},g.prototype.add=function(r){if(!m(r))throw new Error(f);var e,t=this.clone(),n=r.clone();if(t.isZero())return n;if(n.isZero())return t;if(t.negative&&n.negative)e=!0;else if(t.negative||n.negative){if(!t.negative&&n.negative)return n.makePositive(),t.subtract(n);if(t.negative&&!n.negative)return t.makePositive(),n.subtract(t)}else e=!1;var i=d(t,n);i||(i=t);var a,o,u=i.integer,s=i.decimal;i===t?(a=n.integer,o=n.decimal):(a=t.integer,o=t.decimal);var l=u.length,c=s.length;o.length>s.length&&(c=o.length);for(var g=0,v=[],p=[],b=c-1;b>=0;b--){var y=void 0;(y=(s[b]||0)+(o[b]||0)+g)>=10?(g=1,y-=10):g=0,p.unshift(y)}for(var N=p.length-1;N>=0;N--){if(0!==p[N])break;p.pop()}for(var S=l-a.length,w=l-1;w>=0;w--){var A=void 0;(A=u[w]+(a[w-S]||0)+g)>=10?(g=1,A-=10):g=0,v.unshift(A)}g>0&&v.unshift(g);var _=h(v.join("")+"."+p.join(""),{negative:e});return _.isZero()&&_.negative&&_.makePositive(),_},g.prototype.subtract=function(r){if(!m(r))throw new Error(f);var e=v(this),t=v(r);if(r.isZero())return e;if(this.isZero())return t.negate();if(e.negative!==t.negative)return t.negative=!t.negative,e.add(t);var n=e.negative;d(e,t,!0)!==e&&(t=this,n=!(e=r).negative);var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),o=e.integer.length,u=t.integer.length,s=e.decimal.length,l=t.decimal.length,c=Math.abs(s-l),g=0,p=0;if(g+=o>u?o:u,s>l){p+=s;for(var b=0;b<c;b++)a.push(0)}else{p+=l;for(var y=0;y<c;y++)i.push(0)}for(var N=0,S=[],w=0;w<g+p;w++){var A=i.length-1-w,_=a.length-1-w,E=(i[A]?i[A]:0)-N,T=a[_]?a[_]:0;E>=T?(N=0,S.unshift(E-T)):(N=1,S.unshift(10*N+E-T))}S.splice(S.length-p,0,".");var D=h((n?"-":"")+S.join(""));return D.isZero()&&D.negative&&D.makePositive(),D},g.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},g.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},g.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},g.prototype.multiplication=function(r){if(!m(r))throw new Error(f);var e=v(this),t=v(r);if(e.isZero()||t.isZero())return h(0);var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),o=e.integer.length,u=t.integer.length,s=[],l=0;l<i.length;l++)for(var c=0;c<a.length;c++){var g=o-l-1+(u-c-1),p=i[l]*a[c],d=Math.abs(g),b=void 0;g>=0?(d++,b=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):b=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),s.push(h(b))}for(var y=h(0),N=0;N<s.length;N++)y=y.add(s[N]);return y.negative=n,y},g.prototype.division=function(r){if(!m(r))throw new Error(f);var e=v(this),t=v(r);if(e.isZero()&&t.isZero())return c;if(e.isZero())return h(0);if(t.isZero())return l;var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=h(0),a=h(0);e.isLarge(a)||e.isEqual(a);)i=i.add(h(1)),a=t.multiplication(i);i=i.subtract(h(1)),a=a.subtract(t);var o=e.subtract(a),u=i;return u.remainder=o,u.negative=n,u},g.prototype.plus=function(r){return this.add(r)},g.prototype.tasu=function(r){return this.add(r)},g.prototype.minus=function(r){return this.subtract(r)},g.prototype.hiku=function(r){return this.subtract(r)},g.prototype.multiply=function(r){return this.multiplication(r)},g.prototype.kakeru=function(r){return this.multiplication(r)},g.prototype.waru=function(r){return this.division(r)},g.prototype.next=function(){return this.add(h(1))},g.prototype.prev=function(){return this.subtract(h(1))},g.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(h(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},g.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(h(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},g.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(h(e));e++){var t=h(e);this.division(t).remainder.isZero()&&r.push(t)}return r.push(this),r},g.prototype.getCommonDivisors=function(r){m(r)||(r=h(r));var e=r,t=this.getDivisors();if(this.isEqual(e))return t;for(var n=e.getDivisors(),i=[],a=0;a<t.length;a++)for(var o=t[a],u=0;u<n.length;u++){var s=n[u];o.isEqual(s)&&i.push(o)}return i},g.prototype.getMaxCommonDivisor=function(r){m(r)||(r=h(r));var e=this.getCommonDivisors(r);return e[e.length-1]},g.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=h("1");e.isSmall(p.MAX)||e.isEqual(p.MAX);)r.push(this.multiplication(e)),e=e.add(h("1"));return r},g.prototype.getLeastCommonMultiple=function(r){m(r)||(r=h(r));var e=r,t=this.getMaxCommonDivisor(e);return this.multiply(e).division(t)};var b=function(r,e){if(!m(r)||!m(e))return!1;var t=p.MAX;return function r(e){if(e[e.length-1].isLarge(t))return e;var n=e[e.length-2],i=e[e.length-1],a=n.add(i);return e.push(a),r(e)}([r,e])};g.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=h(0),t=h(1),n=b(e,t),i=0;i<n.length;i++){if(n[i].isEqual(r))return!0}return!1},g.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=b(h(2),h(1)),e=0;e<r.length;e++){if(r[e].isEqual(this))return!0}return!1};var y=function(r,e){var t=[r];if(!e)return t;for(var n=0;n<e.length;n++){var i=e[n];m(i)||(i=h(i)),t.push(i)}return t};g.prototype.getSequence=function(){return y(this,arguments)},g.prototype.summation=function(){for(var r=y(this,arguments),e=h(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},g.prototype.infiniteProduct=function(){for(var r=y(this,arguments),e=r[0],t=1;t<r.length;t++)e=e.multiplication(r[t]);return e},g.prototype.digitsum=function(){for(var r=h(0),e=0;e<this.integer.length;e++){var t=h(this.integer[e]);r=r.add(t)}return r},g.prototype.square=function(){return this.exponentiate(h(2))},g.prototype.cube=function(){return this.exponentiate(h(3))},g.prototype.exponentiate=function(r){var e=h("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var t=e,n=v(this);t.isSmall(r);)n=this.multiplication(n),t=t.next();return n},g.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(h(1)),e=h(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(h(1))}return!0},g.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=h(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},g.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(h(2)))},g.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(h(2)))},g.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},g.prototype.factorial=function(){for(var r=this,e=this.subtract(h(1)),t=h(0);e.isLarge(t);)r=r.multiplication(e),e=e.subtract(h(1));return r};var N=function(r,e){if(m(r)){if(r.isSmall(h(3)))return[];var t=h(1),n=[],i=t;e=e?e.next():p.MAX;for(var a=r.subtract(h(2));t.isSmall(e);)n.push(t),i=i.add(a),t=t.add(i);return n}};g.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,N(h(3),r)).find((function(r){return r.isEqual(e)}))},g.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,N(h(4),r)).find((function(r){return r.isEqual(e)}))};var S=function(r){r=r?r.next():p.MAX;for(var e=h(2),t=[],n=h(0),i=h(1);n.isSmall(r);)n=e.exponentiate(i).subtract(h(1)),t.push(n),i=i.add(h(1));return t};g.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=S(r),t=0;t<e.length;t++){if(e[t].isEqual(r))return!0}return!1},g.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():p.MAX;for(var e=S(r),t=[],n=0;n<e.length;n++){var i=e[n];i.isPrimeNumber()&&t.push(i)}return t}(r),t=0;t<e.length;t++){if(e[t].isEqual(r))return!0}return!1};var w={makeSu:h,copySu:v,isSu:m,Su:g},A=n,_={},E={},T=w.makeSu,D=w.isSu;E.random=function(r,e){void 0===r&&(r=T(0)),void 0===e&&(e=T(1)),D(r)||(r=T(r)),D(e)||(e=T(e));var t,n=String(Math.random());if("0"===n)t=r.isZero()?T(0):r;else{var i=n.split(".");t=T("0."+i[1]).multiplication(e)}return t},E.randomElement=function(r){return r[E.random(0,r.length).integer]},E.randomInt=function(r,e){if(!D(r)||!D(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var t=[],n=r.getNumber();n<=e.getNumber();n++){var i=T(n);t.push(i)}return E.randomElement(t)},E.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString()));r||(r=100),r>100&&(r=100);for(var e=[],t=2;t<r;t++){var n=T(t);n.isPrimeNumber()&&e.push(n)}return e},E.euclideanAlgorithm=function(r,e){if(!_.isNumber(r)||!_.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var t;r<e&&(t=r,r=e,e=t);for(var n,i,a=r,o=e;0!==n;){if(0===(n=a%o)){i=o;break}if(1===n){i="coprime";break}if(0>=A)break;a=o,o=n}return i},E.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var t=0,n=0;n<r.length;n++){var i=r[n];if(!_.isNumber(i))return"Argument is not Number";t+=i}return t},E.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var t=1,n=0;n<r.length;n++){var i=r[n];if(!_.isNumber(i))return"Argument is not a Number";t*=i}return t},E.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var t=r/e;return{integer:{remainder:r%e,result:Math.floor(t)},realNumber:t}},E.divisorsSummation=function(r){for(var e=E.divisors(r),t=0,n=0;n<e.length;n++)t+=e[n];return t},E.isAbundantNumber=function(r){return E.divisorsSummation(r)>2*r},E.isKaprekarNumberTypeA=function(r){var e=String(r*r),t=e.length,n=0,i=0;return i=_.isOddNumber(t)?(n=(t-1)/2)+1:n=t/2,Number(e.substr(0,n))+Number(e.substr(n,i))===r},E.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),t=Number(e.sort().join(""));return Number(e.reverse().join(""))-t===r},E.isKaprekarNumber=function(r){if(E.isKaprekarNumberTypeA(r)||E.isKaprekarNumberTypeB(r))return!0},_.isInteger=function(r){return Math.floor(r)===r},E.harmonicMean=function(r){for(var e=r.length,t=0,n=0;n<e;n++)t+=1/r[n];return e/t},E.isHarmonicDivisorNumber=function(r){var e=E.divisors(r),t=E.harmonicMean(e);return!!_.isInteger(t)},_.isNaturalNumber=function(r){if(r>0&&_.isInteger(r))return!0},E.collatzhProblem=function(r){for(var e,t,n=[];r>1;)t=void 0,t=e=r,_.isOddNumber(e)?t=3*e+1:_.isEvenNumber(e)&&(t=e/2),r=t,n.push(r);return n},E.fermatTest=function(r,e){if(!_.isInteger(r)||_.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var t=1;t<=e;t++){var n=E.randomInt(2,r-1);if(1!==E.maxCommonDivisor(n,r))return"Composit Number";if(1!==Math.pow(n,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},E.getIncludesNumbers=function(r){for(var e=[],t=r,n=!0;n;){var i=[t,r-t];if(e.push(i),(t-=1)<0){n=!1;break}}return e};var Z={S:_,K:E},x={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},numToArrayWithDecimal:function(r){for(var e,t=String(r),n=!1;t[0].match(/^-/);)t=t.replace(/^-/,""),n=!n;var i=t.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=t.match(/\./).index,t=t.replace(/\./,"")):e=t.length,console.info(t,e);for(var a=[],o=0;o<t.length;o++){var u=Number(t[o]);if(!x.isNumber(u))throw new Error("This function has been called with incorrect parameters");a.push(u)}for(;0===a[a.length-1];)a.pop();for(;e>1&&0===a[0];)a.shift(),e--;0===a.length&&(a.push(0),e=1);var s={array:a,negative:n};return s.decimal_index=0===e||e>0?e:a.length,s}},compare:function(r,e){if(r&&e){var t={small:null,large:null,equal:!1},n=r.array,i=e.array,a=n.length,o=i.length,u=n.join(""),s=i.join(""),l=r.decimal_index,c=e.decimal_index,f=a-l,g=o-c;if(1===a&&"0"===u&&1===o&&"0"===s)return t.equal=!0,t;if(!r.negative&&e.negative)return t.small=e,t.large=r,t;if(r.negative&&!e.negative)return t.small=r,t.large=e,t;if(l>c)return t.small=e,t.large=r,t;if(l<c)return t.small=r,t.large=e,t;for(var h=0;h<l;h++){if(n[h]>i[h])return t.small=e,t.large=r,t;if(n[h]<i[h])return t.small=r,t.large=e,t}for(var m=f>g?f:g,v=0;v<m;v++){var p=n[l+v]?n[l+v]:0,d=i[c+v]?i[c+v]:0;if(p>d)return t.small=e,t.large=r,t;if(p<d)return t.small=r,t.large=e,t}return t.equal=!0,t}},getLarge:function(r,e){var t=x.numToArrayWithDecimal2(r),n=x.numToArrayWithDecimal2(e),i=!1;if(t.negative&&!n.negative)return e;if(!t.negative&&n.negative)return r;t.negative&&n.negative&&(i=!0);var a=x.compare(t.int,n.int);if(a.large===t.int)return i?e:r;if(a.large===n.int)return i?r:e;if(t.decimal.length<n.decimal.length)for(var o=n.decimal.length-t.decimal.length,u=0;u<o;u++)t.decimal.push(0);else if(t.decimal.length>n.decimal.length)for(var s=t.decimal.length-n.decimal.length,l=0;l<s;l++)n.decimal.push(0);var c=x.compare(t.decimal,n.decimal);return c.large===t.decimal?i?e:r:c.large===n.decimal?i?r:e:void 0},getSmall:function(r,e){var t=x.getLarge(r,e);return t===r?e:t===e?r:void 0},isEqual:function(r,e){return!!x.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!x.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),console.log(o),console.log("minus",t),{new_array:o,minus:t}},add_and_subtract:function(r,e,t){if((r||e)&&t){var n;if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i=x.numToArrayWithDecimal2(r),a=x.numToArrayWithDecimal2(e),o=i.int,u=a.int,s=i.decimal,l=a.decimal,c=(i.negative,a.negative,s.length);c<l.length&&(c=l.length);for(var f=0;f<c;f++){var g=s[f],h=l[f];x.isNumber(g)||s.push(0),x.isNumber(h)||l.push(0)}var m,v,p,d=function(r,e,t){var n=[],i=r,a=e;r.length<e.length&&(i=e,a=r);for(var o=0;o<i.length;o++){var u=i[o]?i[o]:0,s=a[o]?a[o]:0,l=t?u+s:u-s;n.push(l)}return x.fixCarry(n)},b=(m=s.length<l.length?l.legth:s.length,v=d(s.reverse(),l.reverse(),n),p=0,v.new_array.length>m&&(p=v.new_array.pop()),{dec_arr:v.new_array,dec_carry:p,dec_minus:v.minus}),y=b.dec_arr,N=b.dec_carry,S=b.dec_minus,w=function(r){var e=d(o.reverse(),u.reverse(),n);return 0!==r&&(e=d(e.new_array,[r],!0)),{int_arr:e.new_array}}(N).int_arr;return console.log(w),console.log(y,N,S),{int:w.reverse(),decimal:y.reverse()}}},add:function(r,e){x.numToArrayWithDecimal2(r),x.numToArrayWithDecimal2(e),x.getLarge(r,e)}},k=x;e.default={s:w,S:Z.S,K:Z.K,core:o,core2:k}}]).default}));