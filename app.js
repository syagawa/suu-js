!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.suapp=t():r.suapp=t()}(this,(function(){return function(r){var t={};function e(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return r[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=r,e.c=t,e.d=function(r,t,i){e.o(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:i})},e.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},e.t=function(r,t){if(1&t&&(r=e(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)e.d(i,n,function(t){return r[t]}.bind(null,n));return i},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},e.p="",e(e.s=4)}([function(r,t,e){"use strict";t.b={MAX:1e4,MIN:-1e4,DBZ:"Division by Zero",NAN:"Not a number",NOTSU:"Argument is not Su."}},function(r,t,e){"use strict";var i={isNumber:function(r){if("number"==typeof r)return!Number.isNaN(r)||NaN},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var t=[],e=String(r),i=e.length,n=0;n<i;n++){var o=Number(e.slice(n,n+1));if(!this.isNumber(o))throw new Error("This function has been called with incorrect parameters");t.push(o)}return t},isNumArray:function(r){if(r instanceof Array){for(var t=0;t<r.length;t++)if(!this.isNumber(r[t]))return!1;return!0}}};t.a=i},function(r,t,e){"use strict";var i=e(0),n=e(1),o=i.b.MAX,u=i.b.MIN,a=i.b.DBZ,s=i.b.NAN,f=i.b.NOTSU,c=function(r,t){if(isNaN(r))throw new Error(s);r||(r=0),t||(t={});var e=String(r),i=!1;"-"===e[0]&&(e=e.slice(1,e.length),i=!0),!i&&t&&t.negative&&(i=!0),isNaN(Number(e))&&(e="0"),"0"===e&&(i=!1);var o,u,a=e.split("."),f=a[0],c=a[1];if(f){var h=f.match(/0/g);h&&h.length===f.length&&(f="0");for(var l="",v=!0,g=0;g<f.length;g++)"0"===f[g]&&v||(v=!1,l+=f[g]);f=l||"0"}if(c){var m=c.match(/0/g);m&&m.length===c.length&&(c="0");for(var p=!0,d="",b=c.length-1;b>=0;b--)"0"===c[b]&&p||(p=!1,d=c[b]+d);c=d||"0"}try{o=n.a.numToArray(f),u=c?n.a.numToArray(c):[0]}catch(r){throw new Error(s)}this.integer=o,this.decimal=u,this.negative=!!i;for(var y=[1],N=0;N<this.decimal.length;N++)y.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:y}},h=function(r,t){var e;try{e=new c(r,t)}catch(r){e=r.message}return e},l=function(r){if(r instanceof c)return!0},v=function(r){var t=r.getString();return h(t)},g={ZERO:h(0),ONE:h(1),FIRST_PRIME_NUMBER:h(2),MAX:h(o),MIN:h(u)};c.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,t){return r+t}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},c.prototype.getNumber=function(){return Number(this.getString())},c.prototype.getInteger=function(){return Number(this.integer.join(""))},c.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},c.prototype.clone=function(){var r=this.getString();return h(r)};var m=function(r,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=!1,n=[],o=h(r.getString()),u=h(t.getString());if(e&&(o.negative=!1,u.negative=!1),!o.isZero()||!u.isZero()){if(!o.negative&&u.negative)return r;if(o.negative&&!u.negative)return t;if(o.negative&&u.negative&&(i=!0),o.integer.length>u.integer.length)return i?t:r;if(o.integer.length<u.integer.length)return i?r:t;for(var a=0;a<o.integer.length;a++){var s=o.integer[a],f=u.integer[a];if(s>f){n=[r,t];break}if(s<f){n=[t,r];break}}if(0===n.length)for(var c=o.decimal.length>=u.decimal.length?o.decimal.length:u.decimal.length,l=0;l<c;l++){var v=o.decimal[l]?o.decimal[l]:0,g=u.decimal[l]?u.decimal[l]:0;if(v>g){n=[r,t];break}if(v<g){n=[t,r];break}}return i&&(n=[n[1],n[0]]),0===n.length?null:n[0]}};c.prototype.isEqual=function(r){if(!l(r))return!1;var t=this.clone(),e=r.clone(),i=t.integer,n=e.integer,o=t.decimal,u=e.decimal;if(m(t,e))return!1;if(i.length===n.length){for(var a=0;a<i.length;a++)if(i[a]!==n[a])return!1}else{if(o.length!==u.length)return!1;for(var s=0;s<o.length;s++)if(o[s]!==u[s])return!1}return t.negative===e.negative},c.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},c.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},c.prototype.isLarge=function(r){if(!l(r))return!1;var t=this.clone(),e=r.clone(),i=m(t,e);return!!i&&i.getString()===t.getString()},c.prototype.isSmall=function(r){if(!l(r))return!1;var t=this.clone(),e=r.clone(),i=m(t,e);return!!i&&i.getString()===e.getString()},c.prototype.isInteger=function(){return!this.containDecimal()},c.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(g.ZERO))},c.prototype.isNegative=function(){return!!this.negative},c.prototype.isPositive=function(){return!this.negative},c.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,t){return r+t}))},c.prototype.add=function(r){if(!l(r))throw new Error(f);var t,e=this.clone(),i=r.clone();if(e.isZero())return i;if(i.isZero())return e;if(e.negative&&i.negative)t=!0;else if(e.negative||i.negative){if(!e.negative&&i.negative)return i.makePositive(),e.subtract(i);if(e.negative&&!i.negative)return e.makePositive(),i.subtract(e)}else t=!1;var n=m(e,i);n||(n=e);var o,u,a=n.integer,s=n.decimal;n===e?(o=i.integer,u=i.decimal):(o=e.integer,u=e.decimal);var c=a.length,v=s.length;u.length>s.length&&(v=u.length);for(var g=0,p=[],d=[],b=v-1;b>=0;b--){var y=void 0;(y=(s[b]||0)+(u[b]||0)+g)>=10?(g=1,y-=10):g=0,d.unshift(y)}for(var N=d.length-1;N>=0;N--){if(0!==d[N])break;d.pop()}for(var S=c-o.length,M=c-1;M>=0;M--){var Z=void 0;(Z=a[M]+(o[M-S]||0)+g)>=10?(g=1,Z-=10):g=0,p.unshift(Z)}g>0&&p.unshift(g);var E=h(p.join("")+"."+d.join(""),{negative:t});return E.isZero()&&E.negative&&E.makePositive(),E},c.prototype.subtract=function(r){if(!l(r))throw new Error(f);var t=v(this),e=v(r);if(r.isZero())return t;if(this.isZero())return e.negate();if(t.negative!==e.negative)return e.negative=!e.negative,t.add(e);var i=t.negative;m(t,e,!0)!==t&&(e=this,i=!(t=r).negative);var n=t.integer.concat(t.decimal),o=e.integer.concat(e.decimal),u=t.integer.length,a=e.integer.length,s=t.decimal.length,c=e.decimal.length,g=Math.abs(s-c),p=0,d=0;if(p+=u>a?u:a,s>c){d+=s;for(var b=0;b<g;b++)o.push(0)}else{d+=c;for(var y=0;y<g;y++)n.push(0)}for(var N=0,S=[],M=0;M<p+d;M++){var Z=n.length-1-M,E=o.length-1-M,w=(n[Z]?n[Z]:0)-N,A=o[E]?o[E]:0;w>=A?(N=0,S.unshift(w-A)):(N=1,S.unshift(10*N+w-A))}S.splice(S.length-d,0,".");var D=h((i?"-":"")+S.join(""));return D.isZero()&&D.negative&&D.makePositive(),D},c.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},c.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},c.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},c.prototype.multiplication=function(r){if(!l(r))throw new Error(f);var t=v(this),e=v(r);if(t.isZero()||e.isZero())return h(0);var i=!1;(!1===t.negative&&!0===e.negative||!0===t.negative&&!1===e.negative)&&(i=!0);for(var n=t.integer.concat(t.decimal),o=e.integer.concat(e.decimal),u=t.integer.length,a=e.integer.length,s=[],c=0;c<n.length;c++)for(var g=0;g<o.length;g++){var m=u-c-1+(a-g-1),p=n[c]*o[g],d=Math.abs(m),b=void 0;m>=0?(d++,b=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):b=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),s.push(h(b))}for(var y=h(0),N=0;N<s.length;N++)y=y.add(s[N]);return y.negative=i,y},c.prototype.division=function(r){if(!l(r))throw new Error(f);var t=v(this),e=v(r);if(t.isZero()&&e.isZero())return s;if(t.isZero())return h(0);if(e.isZero())return a;var i=!1;(!1===t.negative&&!0===e.negative||!0===t.negative&&!1===e.negative)&&(i=!0);for(var n=h(0),o=h(0);t.isLarge(o)||t.isEqual(o);)n=n.add(h(1)),o=e.multiplication(n);n=n.subtract(h(1)),o=o.subtract(e);var u=t.subtract(o),c=n;return c.remainder=u,c.negative=i,c},c.prototype.plus=function(r){return this.add(r)},c.prototype.tasu=function(r){return this.add(r)},c.prototype.minus=function(r){return this.subtract(r)},c.prototype.hiku=function(r){return this.subtract(r)},c.prototype.multiply=function(r){return this.multiplication(r)},c.prototype.kakeru=function(r){return this.multiplication(r)},c.prototype.waru=function(r){return this.division(r)},c.prototype.next=function(){return this.add(h(1))},c.prototype.prev=function(){return this.subtract(h(1))},c.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(h(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},c.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(h(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},c.prototype.getDivisors=function(){for(var r=[],t=1;this.isLarge(h(t));t++){var e=h(t);this.division(e).remainder.isZero()&&r.push(e)}return r.push(this),r},c.prototype.getCommonDivisors=function(r){l(r)||(r=h(r));var t=r,e=this.getDivisors();if(this.isEqual(t))return e;for(var i=t.getDivisors(),n=[],o=0;o<e.length;o++)for(var u=e[o],a=0;a<i.length;a++){var s=i[a];u.isEqual(s)&&n.push(u)}return n},c.prototype.getMaxCommonDivisor=function(r){l(r)||(r=h(r));var t=this.getCommonDivisors(r);return t[t.length-1]},c.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],t=h("1");t.isSmall(g.MAX)||t.isEqual(g.MAX);)r.push(this.multiplication(t)),t=t.add(h("1"));return r},c.prototype.getLeastCommonMultiple=function(r){l(r)||(r=h(r));var t=r,e=this.getMaxCommonDivisor(t);return this.multiply(t).division(e)};var p=function(r,t){if(!l(r)||!l(t))return!1;var e=g.MAX;return function r(t){if(t[t.length-1].isLarge(e))return t;var i=t[t.length-2],n=t[t.length-1],o=i.add(n);return t.push(o),r(t)}([r,t])};c.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var t=h(0),e=h(1),i=p(t,e),n=0;n<i.length;n++){if(i[n].isEqual(r))return!0}return!1},c.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=p(h(2),h(1)),t=0;t<r.length;t++){if(r[t].isEqual(this))return!0}return!1};var d=function(r,t){var e=[r];if(!t)return e;for(var i=0;i<t.length;i++){var n=t[i];l(n)||(n=h(n)),e.push(n)}return e};c.prototype.getSequence=function(){return d(this,arguments)},c.prototype.summation=function(){for(var r=d(this,arguments),t=h(0),e=0;e<r.length;e++)t=t.add(r[e]);return t},c.prototype.infiniteProduct=function(){for(var r=d(this,arguments),t=r[0],e=1;e<r.length;e++)t=t.multiplication(r[e]);return t},c.prototype.digitsum=function(){for(var r=h(0),t=0;t<this.integer.length;t++){var e=h(this.integer[t]);r=r.add(e)}return r},c.prototype.square=function(){return this.exponentiate(h(2))},c.prototype.cube=function(){return this.exponentiate(h(3))},c.prototype.exponentiate=function(r){var t=h("1");if(r.isZero())return t;if(r.isEqual(t))return this;for(var e=t,i=v(this);e.isSmall(r);)i=this.multiplication(i),e=e.next();return i},c.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(h(1)),t=h(1);r.isLarge(t);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(h(1))}return!0},c.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),t=h(0),e=0;e<r.length;e++)t=t.add(r[e]);return t},c.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(h(2)))},c.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(h(2)))},c.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},c.prototype.factorial=function(){for(var r=this,t=this.subtract(h(1)),e=h(0);t.isLarge(e);)r=r.multiplication(t),t=t.subtract(h(1));return r};var b=function(r,t){if(l(r)){if(r.isSmall(h(3)))return[];var e=h(1),i=[],n=e;t=t?t.next():g.MAX;for(var o=r.subtract(h(2));e.isSmall(t);)i.push(e),n=n.add(o),e=e.add(n);return i}};c.prototype.isTriangleNumber=function(){var r,t=this;return!!(r=t,b(h(3),r)).find((function(r){return r.isEqual(t)}))},c.prototype.isSquareNumber=function(){var r,t=this;return!!(r=t,b(h(4),r)).find((function(r){return r.isEqual(t)}))};var y=function(r){r=r?r.next():g.MAX;for(var t=h(2),e=[],i=h(0),n=h(1);i.isSmall(r);)i=t.exponentiate(n).subtract(h(1)),e.push(i),n=n.add(h(1));return e};c.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var t=y(r),e=0;e<t.length;e++){if(t[e].isEqual(r))return!0}return!1},c.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var t=function(r){r=r?r.next():g.MAX;for(var t=y(r),e=[],i=0;i<t.length;i++){var n=t[i];n.isPrimeNumber()&&e.push(n)}return e}(r),e=0;e<t.length;e++){if(t[e].isEqual(r))return!0}return!1},t.a={makeSu:h,copySu:v,isSu:l,Su:c}},function(r,t,e){"use strict";var i=e(0),n=(e(1),e(2)),o={},u={},a=n.a.makeSu,s=(n.a.copySu,n.a.isSu);n.a.Su;u.random=function(r,t){void 0===r&&(r=a(0)),void 0===t&&(t=a(1)),s(r)||(r=a(r)),s(t)||(t=a(t));var e,i=String(Math.random());if("0"===i)e=r.isZero()?a(0):r;else{var n=i.split(".");e=a("0."+n[1]).multiplication(t)}return e},u.randomElement=function(r){return r[u.random(0,r.length).integer]},u.randomInt=function(r,t){if(!o.isNumber(r)||!o.isNumber(t))return"This function has been called with incorrect parameters";if(r>=t)return"This function has been called with incorrect parameters";for(var e=[],i=r;i<=t;i++)e.push(i);return u.randomElement(e)},u.primeNumbers=function(){for(var r=[],t=2;t<i.MAX;t++)o.isPrimeNumber(t)&&r.push(t);return r},o.isEvenNumber=function(r){if(o.isNumber(r)&&r%2==0)return!0},o.isOddNumber=function(r){if(o.isNumber(r)&&r%2!=0)return!0},u.divisors=function(r){for(var t=[],e=1;e<=r;e++)r%e==0&&t.push(e);return t},u.euclideanAlgorithm=function(r,t){if(!o.isNumber(r)||!o.isNumber(t))return"This function has been called with incorrect parameters";if(r===t)return r;var e;r<t&&(e=r,r=t,t=e);for(var n,u,a=r,s=t;0!==n;){if(0===(n=a%s)){u=s;break}if(1===n){u="coprime";break}if(0>=i.MAX)break;a=s,s=n}return u},u.commonDivisors=function(r,t){if(void 0===r||void 0===t)return"This function has been called with incorrect parameters";var e=u.divisors(r);if(r===t)return e;for(var i=u.divisors(t),n=[],o=0;o<e.length;o++)for(var a=e[o],s=0;s<i.length;s++){a===i[s]&&n.push(a)}return n},u.maxCommonDivisor=function(r,t){var e=u.commonDivisors(r,t);return e[e.length-1]},u.multiple=function(r){for(var t=[],e=1;e<i.MAX;e++)t.push(r*e);return t},u.leastCommonMultiple=function(r,t){if(void 0===r||void 0===t)return"This function has been called with incorrect parameters";var e;e=r<t?t:r;for(var i=[],n=[],o=1;o<=e;)i.push(r*o),o++;for(var u=1;u<=e;)n.push(t*u),u++;for(var a=0;a<i.length;a++)for(var s=i[a],f=0;f<n.length;f++){if(s===n[f])return s}},u.summation=function(){for(var r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);if(0===r.length)return"Argument is not Number";for(var e=0,i=0;i<r.length;i++){var n=r[i];if(!o.isNumber(n))return"Argument is not Number";e+=n}return e},u.infiniteProduct=function(){for(var r=[],t=0;t<arguments.length;t++)r.push(arguments[t]);if(0===r.length)return"Argument is empty.";for(var e=1,i=0;i<r.length;i++){var n=r[i];if(!o.isNumber(n))return"Argument is not a Number";e*=n}return e},u.division=function(r,t){if(void 0===r||void 0===t)return"This function has been called with incorrect parameters";var e=r/t;return{integer:{remainder:r%t,result:Math.floor(e)},realNumber:e}},u.divisorsSummation=function(r){for(var t=u.divisors(r),e=0,i=0;i<t.length;i++)e+=t[i];return e},u.isAbundantNumber=function(r){return u.divisorsSummation(r)>2*r},u.isKaprekarNumberTypeA=function(r){var t=String(r*r),e=t.length,i=0,n=0;return n=o.isOddNumber(e)?(i=(e-1)/2)+1:i=e/2,Number(t.substr(0,i))+Number(t.substr(i,n))===r},u.isKaprekarNumberTypeB=function(r){var t=String(r).split(""),e=Number(t.sort().join(""));return Number(t.reverse().join(""))-e===r},u.isKaprekarNumber=function(r){if(u.isKaprekarNumberTypeA(r)||u.isKaprekarNumberTypeB(r))return!0},o.isInteger=function(r){return Math.floor(r)===r},u.harmonicMean=function(r){for(var t=r.length,e=0,i=0;i<t;i++)e+=1/r[i];return t/e},u.isHarmonicDivisorNumber=function(r){var t=u.divisors(r),e=u.harmonicMean(t);return!!o.isInteger(e)},o.isNaturalNumber=function(r){if(r>0&&o.isInteger(r))return!0},u.collatzhProblem=function(r){for(var t,e,i=[];r>1;)e=void 0,e=t=r,o.isOddNumber(t)?e=3*t+1:o.isEvenNumber(t)&&(e=t/2),r=e,i.push(r);return i},u.fermatTest=function(r,t){if(!o.isInteger(r)||o.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";t||(t=100);for(var e=1;e<=t;e++){var i=u.randomInt(2,r-1);if(1!==u.maxCommonDivisor(i,r))return"Composit Number";if(1!==Math.pow(i,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},u.getIncludesNumbers=function(r){for(var t=[],e=r,i=!0;i;){var n=[e,r-e];if(t.push(n),(e-=1)<0){i=!1;break}}return t};t.a={S:o,K:u}},function(r,t,e){r.exports=e(5)},function(r,t,e){"use strict";e.r(t),function(r){var t=e(2),i=e(3);!function(r,t){r.s=t,r.K=i.a.K}(r||self,t.a)}.call(this,e(6))},function(r,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"==typeof window&&(e=window)}r.exports=e}]).default}));