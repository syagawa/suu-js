!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.suapp=t():r.suapp=t()}(this,(function(){return function(r){var t={};function e(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return r[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=r,e.c=t,e.d=function(r,t,i){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:i})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)e.d(i,n,function(t){return r[t]}.bind(null,n));return i},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=2)}([function(r,t,e){"use strict";e.r(t),function(r){var t=e(1);!function(r,t){r.s=t}(r||self,t.a)}.call(this,e(3))},function(r,t,e){"use strict";var i=1e4,n=-1e4,o="Division by Zero",u="Not a number",a="Argument is not Su.",s={isNumber:function(r){if("number"==typeof r)return!Number.isNaN(r)||NaN},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var t=[],e=String(r),i=e.length,n=0;n<i;n++){var o=Number(e.slice(n,n+1));if(!this.isNumber(o))throw new Error("This function has been called with incorrect parameters");t.push(o)}return t},isNumArray:function(r){if(r instanceof Array){for(var t=0;t<r.length;t++)if(!this.isNumber(r[t]))return!1;return!0}}},f=s,c=(e(0),{}),h={};c.isPrimeNumber=function(r){if(!c.isNumber(r))return!1;if(0===r||1===r)return!1;if(2===r)return!0;if(r>=void 0)return"Argument exceeds maximum value(".concat(void 0,")");for(var t=r,e=t-1;e>1;e--)if(t%e==0)return!1;return!0},c.nextNumber=function(r){if(c.isNumber(r))return++r},c.prevNumber=function(r){if(c.isNumber(r))return--r},h.random=function(r,t){if(r instanceof Array&&r.length>0)return h.randomElement(r);void 0===r&&(r=0),void 0===t&&(t=1);var e=t-r;return Math.random()*e+r},h.randomElement=function(r){return r[h.random(0,r.length-1)]},h.randomInt=function(r,t){if(!c.isNumber(r)||!c.isNumber(t))return"This function has been called with incorrect parameters";if(r>=t)return"This function has been called with incorrect parameters";for(var e=[],i=r;i<=t;i++)e.push(i);return h.randomElement(e)},h.primeNumbers=function(){for(var r=[],t=2;t<void 0;t++)c.isPrimeNumber(t)&&r.push(t);return r},c.isEvenNumber=function(r){if(c.isNumber(r)&&r%2==0)return!0},c.isOddNumber=function(r){if(c.isNumber(r)&&r%2!=0)return!0},h.divisors=function(r){for(var t=[],e=1;e<=r;e++)r%e==0&&t.push(e);return t},h.euclideanAlgorithm=function(r,t){if(!c.isNumber(r)||!c.isNumber(t))return"This function has been called with incorrect parameters";if(r===t)return r;var e;r<t&&(e=r,r=t,t=e);for(var i,n,o=r,u=t;0!==i;){if(0===(i=o%u)){n=u;break}if(1===i){n="coprime";break}0,o=u,u=i}return n},h.commonDivisors=function(r,t){if(void 0===r||void 0===t)return"This function has been called with incorrect parameters";var e=h.divisors(r);if(r===t)return e;for(var i=h.divisors(t),n=[],o=0;o<e.length;o++)for(var u=e[o],a=0;a<i.length;a++){u===i[a]&&n.push(u)}return n},h.maxCommonDivisor=function(r,t){var e=h.commonDivisors(r,t);return e[e.length-1]},h.multiple=function(r){for(var t=[],e=1;e<void 0;e++)t.push(r*e);return t},h.leastCommonMultiple=function(r,t){if(void 0===r||void 0===t)return"This function has been called with incorrect parameters";var e;e=r<t?t:r;for(var i=[],n=[],o=1;o<=e;)i.push(r*o),o++;for(var u=1;u<=e;)n.push(t*u),u++;for(var a=0;a<i.length;a++)for(var s=i[a],f=0;f<n.length;f++){if(s===n[f])return s}},h.summation=function(){for(var r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);if(0===r.length)return"Argument is not Number";for(var e=0,i=0;i<r.length;i++){var n=r[i];if(!c.isNumber(n))return"Argument is not Number";e+=n}return e},h.infiniteProduct=function(){for(var r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);if(0===r.length)return"Argument is empty.";for(var e=1,i=0;i<r.length;i++){var n=r[i];if(!c.isNumber(n))return"Argument is not a Number";e*=n}return e},h.division=function(r,t){if(void 0===r||void 0===t)return"This function has been called with incorrect parameters";var e=r/t;return{integer:{remainder:r%t,result:Math.floor(e)},realNumber:e}},h.divisorsSummation=function(r){for(var t=h.divisors(r),e=0,i=0;i<t.length;i++)e+=t[i];return e},h.isAbundantNumber=function(r){return h.divisorsSummation(r)>2*r},h.isKaprekarNumberTypeA=function(r){var t=String(r*r),e=t.length,i=0,n=0;return n=c.isOddNumber(e)?(i=(e-1)/2)+1:i=e/2,Number(t.substr(0,i))+Number(t.substr(i,n))===r},h.isKaprekarNumberTypeB=function(r){var t=String(r).split(""),e=Number(t.sort().join(""));return Number(t.reverse().join(""))-e===r},h.isKaprekarNumber=function(r){if(h.isKaprekarNumberTypeA(r)||h.isKaprekarNumberTypeB(r))return!0},c.isInteger=function(r){return Math.floor(r)===r},h.harmonicMean=function(r){for(var t=r.length,e=0,i=0;i<t;i++)e+=1/r[i];return t/e},h.isHarmonicDivisorNumber=function(r){var t=h.divisors(r),e=h.harmonicMean(t);return!!c.isInteger(e)},c.isNaturalNumber=function(r){if(r>0&&c.isInteger(r))return!0},h.collatzhProblem=function(r){for(var t,e,i=[];r>1;)e=void 0,e=t=r,c.isOddNumber(t)?e=3*t+1:c.isEvenNumber(t)&&(e=t/2),r=e,i.push(r);return i},h.fermatTest=function(r,t){if(!c.isInteger(r)||c.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";t||(t=100);for(var e=1;e<=t;e++){var i=h.randomInt(2,r-1);if(1!==h.maxCommonDivisor(i,r))return"Composit Number";if(1!==Math.pow(i,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},h.getIncludesNumbers=function(r){for(var t=[],e=r,i=!0;i;){var n=[e,r-e];if(t.push(n),(e-=1)<0){i=!1;break}}return t};var l={S:c,K:h},v=i,m=n,g=o,p=u,d=a,b=l.K,y=function(r,t){if(isNaN(r))throw new Error(p);r||(r=0),t||(t={});var e=String(r),i=!1;"-"===e[0]&&(e=e.slice(1,e.length),i=!0),!i&&t&&t.negative&&(i=!0),isNaN(Number(e))&&(e="0"),"0"===e&&(i=!1);var n,o,u=e.split("."),a=u[0],s=u[1];if(a){var c=a.match(/0/g);c&&c.length===a.length&&(a="0");for(var h="",l=!0,v=0;v<a.length;v++)"0"===a[v]&&l||(l=!1,h+=a[v]);a=h||"0"}if(s){var m=s.match(/0/g);m&&m.length===s.length&&(s="0");for(var g=!0,d="",b=s.length-1;b>=0;b--)"0"===s[b]&&g||(g=!1,d=s[b]+d);s=d||"0"}try{n=f.numToArray(a),o=s?f.numToArray(s):[0]}catch(r){throw new Error(p)}this.integer=n,this.decimal=o,this.negative=!!i;for(var y=[1],N=0;N<this.decimal.length;N++)y.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:y}},N=function(r,t){var e;try{e=new y(r,t)}catch(r){e=r.message}return e},S=function(r){if(r instanceof y)return!0},E=function(r){var t=r.getString();return N(t)},Z={ZERO:N(0),ONE:N(1),FIRST_PRIME_NUMBER:N(2),MAX:N(v),MIN:N(m)};y.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,t){return r+t}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},y.prototype.getNumber=function(){return Number(this.getString())},y.prototype.getInteger=function(){return Number(this.integer.join(""))},y.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},y.prototype.clone=function(){var r=this.getString();return N(r)};var w=function(r,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!1,n=[],o=N(r.getString()),u=N(t.getString());if(e&&(o.negative=!1,u.negative=!1),!o.isZero()||!u.isZero()){if(!o.negative&&u.negative)return r;if(o.negative&&!u.negative)return t;if(o.negative&&u.negative&&(i=!0),o.integer.length>u.integer.length)return i?t:r;if(o.integer.length<u.integer.length)return i?r:t;for(var a=0;a<o.integer.length;a++){var s=o.integer[a],f=u.integer[a];if(s>f){n=[r,t];break}if(s<f){n=[t,r];break}}if(0===n.length)for(var c=o.decimal.length>=u.decimal.length?o.decimal.length:u.decimal.length,h=0;h<c;h++){var l=o.decimal[h]?o.decimal[h]:0,v=u.decimal[h]?u.decimal[h]:0;if(l>v){n=[r,t];break}if(l<v){n=[t,r];break}}return i&&(n=[n[1],n[0]]),0===n.length?null:n[0]}};y.prototype.isEqual=function(r){if(!S(r))return!1;var t=this.clone(),e=r.clone(),i=t.integer,n=e.integer,o=t.decimal,u=e.decimal;if(w(t,e))return!1;if(i.length===n.length){for(var a=0;a<i.length;a++)if(i[a]!==n[a])return!1}else{if(o.length!==u.length)return!1;for(var s=0;s<o.length;s++)if(o[s]!==u[s])return!1}return t.negative===e.negative},y.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},y.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},y.prototype.isLarge=function(r){if(!S(r))return!1;var t=this.clone(),e=r.clone(),i=w(t,e);return!!i&&i.getString()===t.getString()},y.prototype.isSmall=function(r){if(!S(r))return!1;var t=this.clone(),e=r.clone(),i=w(t,e);return!!i&&i.getString()===e.getString()},y.prototype.isInteger=function(){return!this.containDecimal()},y.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(Z.ZERO))},y.prototype.isNegative=function(){return!!this.negative},y.prototype.isPositive=function(){return!this.negative},y.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,t){return r+t}))},y.prototype.add=function(r){if(!S(r))throw new Error(d);var t,e=this.clone(),i=r.clone();if(e.isZero())return i;if(i.isZero())return e;if(e.negative&&i.negative)t=!0;else if(e.negative||i.negative){if(!e.negative&&i.negative)return i.makePositive(),e.subtract(i);if(e.negative&&!i.negative)return e.makePositive(),i.subtract(e)}else t=!1;var n=w(e,i);n||(n=e);var o,u,a=n.integer,s=n.decimal;n===e?(o=i.integer,u=i.decimal):(o=e.integer,u=e.decimal);var f=a.length,c=s.length;u.length>s.length&&(c=u.length);for(var h=0,l=[],v=[],m=c-1;m>=0;m--){var g=void 0;(g=(s[m]||0)+(u[m]||0)+h)>=10?(h=1,g-=10):h=0,v.unshift(g)}for(var p=v.length-1;p>=0;p--){if(0!==v[p])break;v.pop()}for(var b=f-o.length,y=f-1;y>=0;y--){var E=void 0;(E=a[y]+(o[y-b]||0)+h)>=10?(h=1,E-=10):h=0,l.unshift(E)}h>0&&l.unshift(h);var Z=N(l.join("")+"."+v.join(""),{negative:t});return Z.isZero()&&Z.negative&&Z.makePositive(),Z},y.prototype.subtract=function(r){if(!S(r))throw new Error(d);var t=E(this),e=E(r);if(r.isZero())return t;if(this.isZero())return e.negate();if(t.negative!==e.negative)return e.negative=!e.negative,t.add(e);var i=t.negative;w(t,e,!0)!==t&&(e=this,i=!(t=r).negative);var n=t.integer.concat(t.decimal),o=e.integer.concat(e.decimal),u=t.integer.length,a=e.integer.length,s=t.decimal.length,f=e.decimal.length,c=Math.abs(s-f),h=0,l=0;if(h+=u>a?u:a,s>f){l+=s;for(var v=0;v<c;v++)o.push(0)}else{l+=f;for(var m=0;m<c;m++)n.push(0)}for(var g=0,p=[],b=0;b<h+l;b++){var y=n.length-1-b,Z=o.length-1-b,M=(n[y]?n[y]:0)-g,x=o[Z]?o[Z]:0;M>=x?(g=0,p.unshift(M-x)):(g=1,p.unshift(10*g+M-x))}p.splice(p.length-l,0,".");var A=N((i?"-":"")+p.join(""));return A.isZero()&&A.negative&&A.makePositive(),A},y.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},y.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},y.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},y.prototype.multiplication=function(r){if(!S(r))throw new Error(d);var t=E(this),e=E(r);if(t.isZero()||e.isZero())return N(0);var i=!1;(!1===t.negative&&!0===e.negative||!0===t.negative&&!1===e.negative)&&(i=!0);for(var n=t.integer.concat(t.decimal),o=e.integer.concat(e.decimal),u=t.integer.length,a=e.integer.length,s=[],f=0;f<n.length;f++)for(var c=0;c<o.length;c++){var h=u-f-1+(a-c-1),l=n[f]*o[c],v=Math.abs(h),m=void 0;h>=0?(v++,m=l>9?String(l).padEnd(v+1,"0"):String(l).padEnd(v,"0")):m=1===v&&l>9?String(l)[0]+"."+String(l)[1]:"0."+String(l).padStart(v,"0"),s.push(N(m))}for(var g=N(0),p=0;p<s.length;p++)g=g.add(s[p]);return g.negative=i,g},y.prototype.division=function(r){if(!S(r))throw new Error(d);var t=E(this),e=E(r);if(t.isZero()&&e.isZero())return p;if(t.isZero())return N(0);if(e.isZero())return g;var i=!1;(!1===t.negative&&!0===e.negative||!0===t.negative&&!1===e.negative)&&(i=!0);for(var n=N(0),o=N(0);t.isLarge(o)||t.isEqual(o);)n=n.add(N(1)),o=e.multiplication(n);n=n.subtract(N(1)),o=o.subtract(e);var u=t.subtract(o),a=n;return a.remainder=u,a.negative=i,a},y.prototype.plus=function(r){return this.add(r)},y.prototype.tasu=function(r){return this.add(r)},y.prototype.minus=function(r){return this.subtract(r)},y.prototype.hiku=function(r){return this.subtract(r)},y.prototype.multiply=function(r){return this.multiplication(r)},y.prototype.kakeru=function(r){return this.multiplication(r)},y.prototype.waru=function(r){return this.division(r)},y.prototype.next=function(){return this.add(N(1))},y.prototype.prev=function(){return this.subtract(N(1))},y.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(N(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},y.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(N(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},y.prototype.getDivisors=function(){for(var r=[],t=1;this.isLarge(N(t));t++){var e=N(t);this.division(e).remainder.isZero()&&r.push(e)}return r.push(this),r},y.prototype.getCommonDivisors=function(r){S(r)||(r=N(r));var t=r,e=this.getDivisors();if(this.isEqual(t))return e;for(var i=t.getDivisors(),n=[],o=0;o<e.length;o++)for(var u=e[o],a=0;a<i.length;a++){var s=i[a];u.isEqual(s)&&n.push(u)}return n},y.prototype.getMaxCommonDivisor=function(r){S(r)||(r=N(r));var t=this.getCommonDivisors(r);return t[t.length-1]},y.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],t=N("1");t.isSmall(Z.MAX)||t.isEqual(Z.MAX);)r.push(this.multiplication(t)),t=t.add(N("1"));return r},y.prototype.getLeastCommonMultiple=function(r){S(r)||(r=N(r));var t=r,e=this.getMaxCommonDivisor(t);return this.multiply(t).division(e)};var M=function(r,t){if(!S(r)||!S(t))return!1;var e=Z.MAX;return function r(t){if(t[t.length-1].isLarge(e))return t;var i=t[t.length-2],n=t[t.length-1],o=i.add(n);return t.push(o),r(t)}([r,t])};y.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var t=N(0),e=N(1),i=M(t,e),n=0;n<i.length;n++){if(i[n].isEqual(r))return!0}return!1},y.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=M(N(2),N(1)),t=0;t<r.length;t++){if(r[t].isEqual(this))return!0}return!1};var x=function(r,t){var e=[r];if(!t)return e;for(var i=0;i<t.length;i++){var n=t[i];S(n)||(n=N(n)),e.push(n)}return e};y.prototype.getSequence=function(){return x(this,arguments)},y.prototype.summation=function(){for(var r=x(this,arguments),t=N(0),e=0;e<r.length;e++)t=t.add(r[e]);return t},y.prototype.infiniteProduct=function(){for(var r=x(this,arguments),t=r[0],e=1;e<r.length;e++)t=t.multiplication(r[e]);return t},y.prototype.digitsum=function(){for(var r=N(0),t=0;t<this.integer.length;t++){var e=N(this.integer[t]);r=r.add(e)}return r},y.prototype.square=function(){return this.exponentiate(N(2))},y.prototype.cube=function(){return this.exponentiate(N(3))},y.prototype.exponentiate=function(r){var t=N("1");if(r.isZero())return t;if(r.isEqual(t))return this;for(var e=t,i=E(this);e.isSmall(r);)i=this.multiplication(i),e=e.next();return i},y.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(N(1)),t=N(1);r.isLarge(t);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(N(1))}return!0},y.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),t=N(0),e=0;e<r.length;e++)t=t.add(r[e]);return t},y.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(N(2)))},y.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(N(2)))},y.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},y.prototype.factorial=function(){for(var r=this,t=this.subtract(N(1)),e=N(0);t.isLarge(e);)r=r.multiplication(t),t=t.subtract(N(1));return r};var A=function(r,t){if(S(r)){if(r.isSmall(N(3)))return[];var e=N(1),i=[],n=e;t=t?t.next():Z.MAX;for(var o=r.subtract(N(2));e.isSmall(t);)i.push(e),n=n.add(o),e=e.add(n);return i}};y.prototype.isTriangleNumber=function(){var r,t=this;return!!(r=t,A(N(3),r)).find((function(r){return r.isEqual(t)}))},y.prototype.isSquareNumber=function(){var r,t=this;return!!(r=t,A(N(4),r)).find((function(r){return r.isEqual(t)}))};var D=function(r){r=r?r.next():Z.MAX;for(var t=N(2),e=[],i=N(0),n=N(1);i.isSmall(r);)i=t.exponentiate(n).subtract(N(1)),e.push(i),n=n.add(N(1));return e};y.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var t=D(r),e=0;e<t.length;e++){if(t[e].isEqual(r))return!0}return!1},y.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var t=function(r){r=r?r.next():Z.MAX;for(var t=D(r),e=[],i=0;i<t.length;i++){var n=t[i];n.isPrimeNumber()&&e.push(n)}return e}(r),e=0;e<t.length;e++){if(t[e].isEqual(r))return!0}return!1};t.a={makeSu:N,copySu:E,isSu:S,Kei:b,Su:y,getLarge:w}},function(r,t,e){r.exports=e(0)},function(r,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"==typeof window&&(e=window)}r.exports=e}]).default}));