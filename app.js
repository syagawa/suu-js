!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},e={};r.d(e,{default:()=>j});var t={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],n=String(r),i=n.length,a=0;a<i;a++){var o=Number(n.slice(a,a+1));if(!t.isNumber(o))throw new Error("This function has been called with incorrect parameters");e.push(o)}return e},numToArrayWithDecimal:function(r){for(var e=[],n=[],i=String(r),a=i.length,o=e,u=0;u<a;u++){var s=Number(i[u]);if(!t.isNumber(s)){if("."!==s||o!==e)throw new Error("This function has been called with incorrect parameters");o=n}o.push(s)}return[].concat(e,[".",n])},numToArrayWithDecimal2:function(r){var e=String(r),n=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),n=!0);for(var i=e.split(""),a=[],o=[],u=!0,s=!1,l=0;l<i.length;l++){var c=Number(i[l]),f=t.isNumber(c);if(f||"."!==i[l]){if(!f)throw new Error("This function has been called with incorrect parameters");u&&0===c&&!s||(u=!1,s?o.push(n?-c:c):a.push(n?-c:c))}else s=!0}for(var m=o.length-1;m>=0&&0===o[m];m--)o.pop();return{int:a,decimal:o,negative:n}},numToArrayWithDecimal3:function(r){for(var e=String(r),n=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),n=!n;var i=null,a=e.match(/\./g);if(!(a&&a.length>1)){a&&1===a.length&&(i=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,i);for(var o=[],u=0,s=0;s<e.length;s++){var l=Number(e[s]);if(!t.isNumber(l))throw new Error("This function has been called with incorrect parameters");0===l&&i>s?u++:o.push(l)}for(i-=u;0===o[o.length-1];)o.pop();var c={array:o,negative:n};return(0===i||i>0)&&(c.decimal_index=i),c}},compare:function(r,e){if(r&&e){var n,i;if(n=r instanceof Array?r:t.numToArrayWithDecimal2(r),i=e instanceof Array?e:t.numToArrayWithDecimal2(e),0===n[0]){for(var a=[],o=!0,u=0;u<n.length;u++){var s=n[u];0===s&&o||(a.push(s),o=!1)}n=a}if(0===i[0]){for(var l=[],c=!0,f=0;f<i.length;f++){var m=i[f];0===m&&c||(l.push(m),c=!1)}i=l}var g={equal:!1,large:null,small:null};if(n.length>n.length)return g.large=r,g.small=e,g;if(n.length<n.length)return g.large=e,g.small=r,g;for(var h=0;h<n.length;h++){var v=n[h],p=i[h];if(v>p)return g.large=r,g.small=e,g;if(v<p)return g.large=e,g.small=r,g}return g.equal=!0,g}},getLarge:function(r,e){var n=t.numToArrayWithDecimal2(r),i=t.numToArrayWithDecimal2(e),a=!1;if(n.negative&&!i.negative)return e;if(!n.negative&&i.negative)return r;n.negative&&i.negative&&(a=!0);var o=t.compare(n.int,i.int);if(o.large===n.int)return a?e:r;if(o.large===i.int)return a?r:e;if(n.decimal.length<i.decimal.length)for(var u=i.decimal.length-n.decimal.length,s=0;s<u;s++)n.decimal.push(0);else if(n.decimal.length>i.decimal.length)for(var l=n.decimal.length-i.decimal.length,c=0;c<l;c++)i.decimal.push(0);var f=t.compare(n.decimal,i.decimal);return f.large===n.decimal?a?e:r:f.large===i.decimal?a?r:e:void 0},getSmall:function(r,e){var n=t.getLarge(r,e);return n===r?e:n===e?r:void 0},isEqual:function(r,e){return!!t.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!t.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),console.log(o),console.log("minus",t),{new_array:o,minus:t}},add_and_subtract:function(r,e,n){if((r||e)&&n){var i;if("+"===n)i=!0;else{if("-"!==n)return;i=!1}var a=t.numToArrayWithDecimal2(r),o=t.numToArrayWithDecimal2(e),u=a.int,s=o.int,l=a.decimal,c=o.decimal,f=(a.negative,o.negative,l.length);f<c.length&&(f=c.length);for(var m=0;m<f;m++){var g=l[m],h=c[m];t.isNumber(g)||l.push(0),t.isNumber(h)||c.push(0)}var v,p,d,y=function(r,e,n){var i=[],a=r,o=e;r.length<e.length&&(a=e,o=r);for(var u=0;u<a.length;u++){var s=a[u]?a[u]:0,l=o[u]?o[u]:0,c=n?s+l:s-l;i.push(c)}return t.fixCarry(i)},b=(v=l.length<c.length?c.legth:l.length,d=0,(p=y(l.reverse(),c.reverse(),i)).new_array.length>v&&(d=p.new_array.pop()),{dec_arr:p.new_array,dec_carry:d,dec_minus:p.minus}),N=b.dec_arr,_=b.dec_carry,A=b.dec_minus,S=function(r){var e=y(u.reverse(),s.reverse(),i);return 0!==r&&(e=y(e.new_array,[r],!0)),{int_arr:e.new_array}}(_),D=S.int_arr;return console.log(D),console.log(N,_,A),{int:D.reverse(),decimal:N.reverse()}}},add:function(r,e){t.numToArrayWithDecimal2(r),t.numToArrayWithDecimal2(e),t.getLarge(r,e)}};const n=t;var i="Not a number",a="Argument is not Su.",o=function(r,e){if(isNaN(r))throw new Error(i);r||(r=0),e||(e={});var t=String(r),a=!1;"-"===t[0]&&(t=t.slice(1,t.length),a=!0),!a&&e&&e.negative&&(a=!0),isNaN(Number(t))&&(t="0"),"0"===t&&(a=!1);var o,u,s=t.split("."),l=s[0],c=s[1];if(l){var f=l.match(/0/g);f&&f.length===l.length&&(l="0");for(var m="",g=!0,h=0;h<l.length;h++)"0"===l[h]&&g||(g=!1,m+=l[h]);l=m||"0"}if(c){var v=c.match(/0/g);v&&v.length===c.length&&(c="0");for(var p=!0,d="",y=c.length-1;y>=0;y--)"0"===c[y]&&p||(p=!1,d=c[y]+d);c=d||"0"}try{o=n.numToArray(l),u=c?n.numToArray(c):[0]}catch(r){throw new Error(i)}this.integer=o,this.decimal=u,this.negative=!!a;for(var b=[1],N=0;N<this.decimal.length;N++)b.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:b}},u=function(r,e){var t;try{t=new o(r,e)}catch(r){t=r.message}return t},s=function(r){if(r instanceof o)return!0},l=function(r){var e=r.getString();return u(e)},c={ZERO:u(0),ONE:u(1),FIRST_PRIME_NUMBER:u(2),MAX:u(1e4),MIN:u(-1e4)};o.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},o.prototype.getNumber=function(){return Number(this.getString())},o.prototype.getInteger=function(){return Number(this.integer.join(""))},o.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},o.prototype.clone=function(){var r=this.getString();return u(r)};var f=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1,i=[],a=u(r.getString()),o=u(e.getString());if(t&&(a.negative=!1,o.negative=!1),!a.isZero()||!o.isZero()){if(!a.negative&&o.negative)return r;if(a.negative&&!o.negative)return e;if(a.negative&&o.negative&&(n=!0),a.integer.length>o.integer.length)return n?e:r;if(a.integer.length<o.integer.length)return n?r:e;for(var s=0;s<a.integer.length;s++){var l=a.integer[s],c=o.integer[s];if(l>c){i=[r,e];break}if(l<c){i=[e,r];break}}if(0===i.length)for(var f=a.decimal.length>=o.decimal.length?a.decimal.length:o.decimal.length,m=0;m<f;m++){var g=a.decimal[m]?a.decimal[m]:0,h=o.decimal[m]?o.decimal[m]:0;if(g>h){i=[r,e];break}if(g<h){i=[e,r];break}}return n&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};o.prototype.isEqual=function(r){if(!s(r))return!1;var e=this.clone(),t=r.clone(),n=e.integer,i=t.integer,a=e.decimal,o=t.decimal;if(f(e,t))return!1;if(n.length===i.length){for(var u=0;u<n.length;u++)if(n[u]!==i[u])return!1}else{if(a.length!==o.length)return!1;for(var l=0;l<a.length;l++)if(a[l]!==o[l])return!1}return e.negative===t.negative},o.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},o.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},o.prototype.isLarge=function(r){if(!s(r))return!1;var e=this.clone(),t=r.clone(),n=f(e,t);return!!n&&n.getString()===e.getString()},o.prototype.isSmall=function(r){if(!s(r))return!1;var e=this.clone(),t=r.clone(),n=f(e,t);return!!n&&n.getString()===t.getString()},o.prototype.isInteger=function(){return!this.containDecimal()},o.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(c.ZERO))},o.prototype.isNegative=function(){return!!this.negative},o.prototype.isPositive=function(){return!this.negative},o.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},o.prototype.add=function(r){if(!s(r))throw new Error(a);var e,t=this.clone(),n=r.clone();if(t.isZero())return n;if(n.isZero())return t;if(t.negative&&n.negative)e=!0;else if(t.negative||n.negative){if(!t.negative&&n.negative)return n.makePositive(),t.subtract(n);if(t.negative&&!n.negative)return t.makePositive(),n.subtract(t)}else e=!1;var i=f(t,n);i||(i=t);var o,l,c=i.integer,m=i.decimal;i===t?(o=n.integer,l=n.decimal):(o=t.integer,l=t.decimal);var g=c.length,h=m.length;l.length>m.length&&(h=l.length);for(var v=0,p=[],d=[],y=h-1;y>=0;y--){var b=void 0;(b=(m[y]||0)+(l[y]||0)+v)>=10?(v=1,b-=10):v=0,d.unshift(b)}for(var N=d.length-1;N>=0&&0===d[N];N--)d.pop();for(var _=g-o.length,A=g-1;A>=0;A--){var S=void 0;(S=c[A]+(o[A-_]||0)+v)>=10?(v=1,S-=10):v=0,p.unshift(S)}v>0&&p.unshift(v);var D=u(p.join("")+"."+d.join(""),{negative:e});return D.isZero()&&D.negative&&D.makePositive(),D},o.prototype.subtract=function(r){if(!s(r))throw new Error(a);var e=l(this),t=l(r);if(r.isZero())return e;if(this.isZero())return t.negate();if(e.negative!==t.negative)return t.negative=!t.negative,e.add(t);var n=e.negative;f(e,t,!0)!==e&&(t=this,n=!(e=r).negative);var i=e.integer.concat(e.decimal),o=t.integer.concat(t.decimal),c=e.integer.length,m=t.integer.length,g=e.decimal.length,h=t.decimal.length,v=Math.abs(g-h),p=0,d=0;if(p+=c>m?c:m,g>h){d+=g;for(var y=0;y<v;y++)o.push(0)}else{d+=h;for(var b=0;b<v;b++)i.push(0)}for(var N=0,_=[],A=0;A<p+d;A++){var S=i.length-1-A,D=o.length-1-A,Z=(i[S]?i[S]:0)-N,T=o[D]?o[D]:0;Z>=T?(N=0,_.unshift(Z-T)):(N=1,_.unshift(10*N+Z-T))}_.splice(_.length-d,0,".");var w=u((n?"-":"")+_.join(""));return w.isZero()&&w.negative&&w.makePositive(),w},o.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},o.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},o.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},o.prototype.multiplication=function(r){if(!s(r))throw new Error(a);var e=l(this),t=l(r);if(e.isZero()||t.isZero())return u(0);var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=e.integer.concat(e.decimal),o=t.integer.concat(t.decimal),c=e.integer.length,f=t.integer.length,m=[],g=0;g<i.length;g++)for(var h=0;h<o.length;h++){var v=c-g-1+(f-h-1),p=i[g]*o[h],d=Math.abs(v),y=void 0;v>=0?(d++,y=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):y=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),m.push(u(y))}for(var b=u(0),N=0;N<m.length;N++)b=b.add(m[N]);return b.negative=n,b},o.prototype.division=function(r){if(!s(r))throw new Error(a);var e=l(this),t=l(r);if(e.isZero()&&t.isZero())return i;if(e.isZero())return u(0);if(t.isZero())return"Division by Zero";var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var o=u(0),c=u(0);e.isLarge(c)||e.isEqual(c);)o=o.add(u(1)),c=t.multiplication(o);o=o.subtract(u(1)),c=c.subtract(t);var f=e.subtract(c),m=o;return m.remainder=f,m.negative=n,m},o.prototype.plus=function(r){return this.add(r)},o.prototype.tasu=function(r){return this.add(r)},o.prototype.minus=function(r){return this.subtract(r)},o.prototype.hiku=function(r){return this.subtract(r)},o.prototype.multiply=function(r){return this.multiplication(r)},o.prototype.kakeru=function(r){return this.multiplication(r)},o.prototype.waru=function(r){return this.division(r)},o.prototype.next=function(){return this.add(u(1))},o.prototype.prev=function(){return this.subtract(u(1))},o.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(u(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},o.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(u(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},o.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(u(e));e++){var t=u(e);this.division(t).remainder.isZero()&&r.push(t)}return r.push(this),r},o.prototype.getCommonDivisors=function(r){s(r)||(r=u(r));var e=r,t=this.getDivisors();if(this.isEqual(e))return t;for(var n=e.getDivisors(),i=[],a=0;a<t.length;a++)for(var o=t[a],l=0;l<n.length;l++){var c=n[l];o.isEqual(c)&&i.push(o)}return i},o.prototype.getMaxCommonDivisor=function(r){s(r)||(r=u(r));var e=this.getCommonDivisors(r);return e[e.length-1]},o.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=u("1");e.isSmall(c.MAX)||e.isEqual(c.MAX);)r.push(this.multiplication(e)),e=e.add(u("1"));return r},o.prototype.getLeastCommonMultiple=function(r){s(r)||(r=u(r));var e=r,t=this.getMaxCommonDivisor(e);return this.multiply(e).division(t)};var m=function(r,e){if(!s(r)||!s(e))return!1;var t=c.MAX;return function r(e){if(e[e.length-1].isLarge(t))return e;var n=e[e.length-2],i=e[e.length-1],a=n.add(i);return e.push(a),r(e)}([r,e])};o.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=u(0),t=u(1),n=m(e,t),i=0;i<n.length;i++)if(n[i].isEqual(r))return!0;return!1},o.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=m(u(2),u(1)),e=0;e<r.length;e++)if(r[e].isEqual(this))return!0;return!1};var g=function(r,e){var t=[r];if(!e)return t;for(var n=0;n<e.length;n++){var i=e[n];s(i)||(i=u(i)),t.push(i)}return t};o.prototype.getSequence=function(){return g(this,arguments)},o.prototype.summation=function(){for(var r=g(this,arguments),e=u(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},o.prototype.infiniteProduct=function(){for(var r=g(this,arguments),e=r[0],t=1;t<r.length;t++)e=e.multiplication(r[t]);return e},o.prototype.digitsum=function(){for(var r=u(0),e=0;e<this.integer.length;e++){var t=u(this.integer[e]);r=r.add(t)}return r},o.prototype.square=function(){return this.exponentiate(u(2))},o.prototype.cube=function(){return this.exponentiate(u(3))},o.prototype.exponentiate=function(r){var e=u("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var t=e,n=l(this);t.isSmall(r);)n=this.multiplication(n),t=t.next();return n},o.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(u(1)),e=u(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(u(1))}return!0},o.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=u(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},o.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(u(2)))},o.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(u(2)))},o.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},o.prototype.factorial=function(){for(var r=this,e=this.subtract(u(1)),t=u(0);e.isLarge(t);)r=r.multiplication(e),e=e.subtract(u(1));return r};var h=function(r,e){if(s(r)){if(r.isSmall(u(3)))return[];var t=u(1),n=[],i=t;e=e?e.next():c.MAX;for(var a=r.subtract(u(2));t.isSmall(e);)n.push(t),i=i.add(a),t=t.add(i);return n}};o.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,h(u(3),r)).find((function(r){return r.isEqual(e)}))},o.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,h(u(4),r)).find((function(r){return r.isEqual(e)}))};var v=function(r){r=r?r.next():c.MAX;for(var e=u(2),t=[],n=u(0),i=u(1);n.isSmall(r);)n=e.exponentiate(i).subtract(u(1)),t.push(n),i=i.add(u(1));return t};o.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=v(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1},o.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():c.MAX;for(var e=v(r),t=[],n=0;n<e.length;n++){var i=e[n];i.isPrimeNumber()&&t.push(i)}return t}(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1};const p={makeSu:u,copySu:l,isSu:s,Su:o};var d={},y={},b=p.makeSu,N=p.isSu;y.random=function(r,e){void 0===r&&(r=b(0)),void 0===e&&(e=b(1)),N(r)||(r=b(r)),N(e)||(e=b(e));var t,n=String(Math.random());if("0"===n)t=r.isZero()?b(0):r;else{var i=n.split(".");t=b("0."+i[1]).multiplication(e)}return t},y.randomElement=function(r){return r[y.random(0,r.length).integer]},y.randomInt=function(r,e){if(!N(r)||!N(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var t=[],n=r.getNumber();n<=e.getNumber();n++){var i=b(n);t.push(i)}return y.randomElement(t)},y.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString())),r||(r=100),r>100&&(r=100);for(var e=[],t=2;t<r;t++){var n=b(t);n.isPrimeNumber()&&e.push(n)}return e},y.euclideanAlgorithm=function(r,e){if(!d.isNumber(r)||!d.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var t;r<e&&(t=r,r=e,e=t);for(var n,i,a=r,o=e;0!==n;){if(0==(n=a%o)){i=o;break}if(1===n){i="coprime";break}0,a=o,o=n}return i},y.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var t=0,n=0;n<r.length;n++){var i=r[n];if(!d.isNumber(i))return"Argument is not Number";t+=i}return t},y.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var t=1,n=0;n<r.length;n++){var i=r[n];if(!d.isNumber(i))return"Argument is not a Number";t*=i}return t},y.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var t=r/e;return{integer:{remainder:r%e,result:Math.floor(t)},realNumber:t}},y.divisorsSummation=function(r){for(var e=y.divisors(r),t=0,n=0;n<e.length;n++)t+=e[n];return t},y.isAbundantNumber=function(r){return y.divisorsSummation(r)>2*r},y.isKaprekarNumberTypeA=function(r){var e,t=String(r*r),n=t.length,i=0;return e=d.isOddNumber(n)?1+(i=(n-1)/2):i=n/2,Number(t.substr(0,i))+Number(t.substr(i,e))===r},y.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),t=Number(e.sort().join(""));return Number(e.reverse().join(""))-t===r},y.isKaprekarNumber=function(r){if(y.isKaprekarNumberTypeA(r)||y.isKaprekarNumberTypeB(r))return!0},d.isInteger=function(r){return Math.floor(r)===r},y.harmonicMean=function(r){for(var e=r.length,t=0,n=0;n<e;n++)t+=1/r[n];return e/t},y.isHarmonicDivisorNumber=function(r){var e=y.divisors(r),t=y.harmonicMean(e);return!!d.isInteger(t)},d.isNaturalNumber=function(r){if(r>0&&d.isInteger(r))return!0},y.collatzhProblem=function(r){for(var e,t,n=[];r>1;)t=void 0,t=e=r,d.isOddNumber(e)?t=3*e+1:d.isEvenNumber(e)&&(t=e/2),r=t,n.push(r);return n},y.fermatTest=function(r,e){if(!d.isInteger(r)||d.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var t=1;t<=e;t++){var n=y.randomInt(2,r-1);if(1!==y.maxCommonDivisor(n,r))return"Composit Number";if(1!=Math.pow(n,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},y.getIncludesNumbers=function(r){for(var e=[],t=r,n=!0;n;){var i=[t,r-t];if(e.push(i),(t-=1)<0){n=!1;break}}return e};const _={S:d,K:y};function A(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function S(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?A(Object(t),!0).forEach((function(e){D(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function D(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Z(r){return function(r){if(Array.isArray(r))return T(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return T(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function w(r){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},w(r)}var x={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},moldNumArray:function(r){for(var e=r.array,t=r.negative,n=r.decimal_index;n<e.length&&0===e[e.length-1];)e.pop();for(;n>1&&0===e[0];)e.shift(),n--;0===e.length&&(e.push(0),n=1);var i={array:e,negative:t,is_num_array:!0};return i.decimal_index=0===n||n>0?n:e.length,i},numToArrayWithDecimal:function(r){if(r.is_num_array)return x.clone(r);if("object"===w(r))return console.log("Paremeter is object.",r);for(var e,t=String(r),n=!1;t[0].match(/^-/);)t=t.replace(/^-/,""),n=!n;var i=t.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=t.match(/\./).index,t=t.replace(/\./,"")):e=t.length;for(var a=[],o=0;o<t.length;o++){var u=Number(t[o]);if(!x.isNumber(u))throw new Error("This function has been called with incorrect parameters");a.push(u)}return x.moldNumArray({array:a,negative:n,decimal_index:e})}},numArrayToString:function(r){if(!r.is_num_array||!r.array||!r.decimal_index)return"";var e=Z(r.array);e.splice(r.decimal_index,0,".");var t=e.join("");return r.negative&&(t="-".concat(t)),t.replace(/\.$/,"")},compare:function(r,e){var t={small:null,large:null,equal:!1};if(!r||!e)return t;var n=r,i=e;if(!n.is_num_array&&!(n=x.numToArrayWithDecimal(n)))return t;if(!i.is_num_array&&!(i=x.numToArrayWithDecimal(i)))return t;var a=n.array,o=i.array,u=a.length,s=o.length,l=a.join(""),c=o.join(""),f=n.decimal_index,m=i.decimal_index,g=u-f,h=s-m;if(1===u&&"0"===l&&1===s&&"0"===c)return t.equal=!0,t;if(!n.negative&&i.negative)return t.small=i,t.large=n,t;if(n.negative&&!i.negative)return t.small=n,t.large=i,t;var v=n.negative,p={large:v?i:n,small:v?n:i,equal:!1},d={large:v?n:i,small:v?i:n,equal:!1};if(f>m)return p;if(f<m)return d;for(var y=0;y<f;y++){if(a[y]>o[y])return p;if(a[y]<o[y])return d}for(var b=g>h?g:h,N=0;N<b;N++){var _=a[f+N]?a[f+N]:0,A=o[m+N]?o[m+N]:0;if(_>A)return p;if(_<A)return d}return t.equal=!0,t},getLarge:function(r,e){return x.compare(r,e).large},getSmall:function(r,e){return x.compare(r,e).small},isEqual:function(r,e){return!!x.compare(r,e).equal},isSmall:function(r,e){return x.isEqual(x.getSmall(r,e),r)},isLarge:function(r,e){return x.isEqual(x.getLarge(r,e),r)},isZero:function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=x.getZero();return x.isEqual(e,r)},isOne:function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=x.numToArrayWithDecimal("1");return x.isEqual(e,r)},getZero:function(){return x.numToArrayWithDecimal("0")},getOne:function(){return x.numToArrayWithDecimal("1")},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!x.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;if(l>9){var c=String(l).split("");l=Number(c[c.length-1]);var f=c.slice(0,c.length-1);u=Number(f.join(""))}else l>=0&&l<=9?u=0:(l=10+l,u=-1);o.push(l)}return 0!==u&&o.push(u),{new_array:o,minus:t}},clone:function(r){return r.is_num_array?S(S({},r),{},{array:Z(r.array)}):null},add_and_subtract:function(r,e,t){var n;if((r&&e||0===r||0===e)&&t){if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i,a=null;i=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),a=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0);var o=i.array,u=a.array,s=x.isZero(i),l=x.isZero(a);if(s&&l)return i;if(s)return n||(a.negative=!a.negative),a;if(l)return i;var c=i.array.length-i.decimal_index,f=a.array.length-a.decimal_index,m=c-f;m>0?u.push.apply(u,Z(Array(m).fill(0))):m<0&&o.push.apply(o,Z(Array(Math.abs(m)).fill(0)));var g=function(r){var e=r.a,t=r.b,n=r.plus,i=[],a=e.array.length;e.array.length<t.array.length&&(a=t.array.length);for(var o=e.array,u=t.array,s=e.negative?-1:1,l=t.negative?-1:1,c=0;c<a;c++){var f=o[c]?o[c]*s:0,m=u[c]?u[c]*l:0,g=n?f+m:f-m;i.push(g)}return x.fixCarry(i)}({a:{array:Z(o).reverse(),negative:i.negative},b:{array:Z(u).reverse(),negative:a.negative},plus:n}),h=g.new_array,v=g.minus,p=c>=f?c:f,d=h.length-p;return x.moldNumArray({array:Z(h).reverse(),negative:!!v,decimal_index:d})}},add:function(r,e){return x.add_and_subtract(r,e,"+")},subtract:function(r,e){return x.add_and_subtract(r,e,"-")},multiplication:function(r,e){if(r&&e||0===r||0===e){var t,n;t=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),n=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0);var i=t.array,a=n.array;if(x.isZero(t)||x.isZero(n))return x.numToArrayWithDecimal("0");if(x.isOne(t))return n;if(x.isOne(n))return t;var o,u=t.negative,s=n.negative;o=!(u&&s||!u&&!s);var l=t.array.length-t.decimal_index+(n.array.length-n.decimal_index),c=function(r){for(var e=r.b,t=[],n=r.a.array,i=e.array,a=0;a<n.length;a++){var o=n[a]?n[a]:0,u=new Array(a);u.fill(0,0,a);for(var s=0;s<i.length;s++){var l=o*(i[s]?i[s]:0);u.push(l);var c=a+s,f=t[c];f||(f=0);var m=f+l;t[c]=m}}return x.fixCarry(t)}({a:{array:Z(i).reverse(),negative:t.negative},b:{array:Z(a).reverse(),negative:n.negative}}),f=c.new_array,m=f.length-l;return x.moldNumArray({array:Z(f).reverse(),negative:o,decimal_index:m})}},multiple:function(r,e){return x.multiplication(r,e)},getDecimal:function(r){var e=x.numToArrayWithDecimal(r),t="0.",n=e.array.length-e.decimal_index;if(n>0)for(var i=e.decimal_index;i<=n;i++)t+=String(e.array[i]);else t+="0";return x.numToArrayWithDecimal(t)},division:function(r,e,t){if(r&&e||0===r||0===e){var n=null,i=null;if(n=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),i=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0),!x.isZero(i)){if(x.isZero(n))return S(S({},x.getZero()),{},{remainder:x.getZero()});if(x.isOne(i))return S(S({},n),{},{remainder:x.getZero()});if(x.isEqual(n,i))return S(S({},x.getOne()),{},{remainder:x.getZero()});var a,o=n.negative,u=i.negative;n.negative&&(n.negative=!1),i.negative&&(i.negative=!1),a=!(o&&u||!o&&!u);var s=function(r){var e,t=r.a,n=r.b,i=r.max,a=r.is_modulo,o=[],u=x.getZero(),s=x.clone(t),l=x.clone(n),c=t.decimal_index,f=c,m=x.clone(s);m.decimal_index=m.array.length;var g=0,h=s.array.join("").match(/^0+/);h&&h[0]&&(console.info("if(a_zero_res && a_zero_res[0])"),g=h[0].length,m=x.numToArrayWithDecimal(m.array.slice(g,m.array.length).join("")));var v=x.clone(l);v.decimal_index=v.array.length;var p=0,d=v.array.join("").match(/^0+/);d&&d[0]&&(console.info("if(b_zero_res && b_zero_res[0])"),p=d[0].length,v=x.numToArrayWithDecimal(v.array.slice(p,v.array.length).join("")));for(var y=g-p,b=Z(m.array),N=s.array.length-s.decimal_index-(l.array.length-l.decimal_index),_=Number(x.add(m.array.length,i).array.join("")),A=m.array.length,S=!1,D=[0],T=0,w=0,E=0;E<_;E++){var O=!0,j=x.getZero(),q=x.multiplication(u,"10"),W=String(1===b.slice(E,E+1).length?b.slice(E,E+1)[0]:"0");w=(u=x.add(q,W)).array.length-A;var k=x.getZero();if(E===A){if(console.info("if(i === a_len)"),c=E,x.isZero(u))break;S=!0,T=T++}else if(E>A&&(console.info("}else if(i > a_len){"),T=T++,x.isZero(u)))break;for(var P=i;O;){if(j=x.add(j,"1"),x.isLarge(j,P)&&!a){console.info("if(core.isLarge(count, max_count) && !is_modulo){"),O=!1;break}var M=k;if(k=x.multiplication(v,j),x.isEqual(u,k)){console.info("if(core.isEqual(remain, product)){"),O=!1;var L=j;o.push(L),u=x.subtract(u,k);break}if(x.isLarge(k,u)){console.info("if(core.isLarge(product, remain))0"),O=!1;var I=x.subtract(j,"1");o.push(I),u=x.subtract(u,M),console.info("if(core.isLarge(product, remain))1 result_arr",o),console.info("if(core.isLarge(product, remain))1 remain",u),S&&(console.info("if(remain_is_decimal){"),D.push(0));break}}}(e=D).push.apply(e,Z(u.array));var C=o.flatMap((function(r){return r.array}));if(y>0)for(var K=0;K<y;K++)C.unshift(0),c++;if(N<0)for(var X=0;X<Math.abs(N);X++)C.push(0),c++;else if(N>0)for(var z=0;z<Math.abs(N);z++)C.unshift(0);if(w>0)for(var R=0;R<w;R++)0===D[0]?D.shift():f-=w,D.push(0);else if(w<0){var B,F=Math.abs(w),U=Array(F).fill(0);(B=D).unshift.apply(B,Z(U))}return S&&(D=Z(D)),a&&(f++,console.info("a_",s)),{new_array:C,decimal_index:c,remain_array:D,remain_decimal_index:f}}({a:n,b:i,max:t?x.getZero():x.numToArrayWithDecimal("10"),is_modulo:t}),l=s.new_array,c=s.decimal_index,f=s.remain_array,m=s.remain_decimal_index,g=x.moldNumArray({array:Z(f),negative:a,decimal_index:m});return S(S({},x.moldNumArray({array:Z(l),negative:a,decimal_index:c})),{},{remainder:g})}}},divide:function(r,e,t){return x.division(r,e,t)},modulo:function(r,e){return x.division(r,e,!0).remainder}};const E=x;var O={getNumber:function(r){return E.numToArrayWithDecimal(r)},copy:function(r){var e=E.clone(r);if(!e){var t=E.numArrayToString(r);return E.numToArrayWithDecimal(t)}return e},getLarge:function(r,e){return E.getLarge(r,e)},getSmall:function(r,e){return E.getSmall(r,e)},isEqual:function(r,e){return E.isEqual(r,e)},getZero:function(){return E.getZero()},getOne:function(){return E.getOne()},isZero:function(r){return E.isZero(r)},isOne:function(r){return E.isOne(r)},square:function(r){return E.multiplication(r,r)},getInteger:function(r){for(var e="",t=0;t<r.decimal_index;t++)e+=String(r.array[t]);return O.getNumber(e)},getDecimal:function(r){return E.getDecimal(r)},isNaturalNumber:function(r){var e=O.getDecimal(r);return!(!O.isZero(e)||r.negative)},includeDecimal:function(r){var e=O.getDecimal(r);return!O.isZero(e)},isNegative:function(r){return E.numToArrayWithDecimal(r).negative},isPositive:function(r){return!E.numToArrayWithDecimal(r).negative},negate:function(r){var e=E.numToArrayWithDecimal(r);return e&&(e.negative=!0),e},makePositive:function(r){var e=E.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNegativeNumber:function(r){return O.negate(r)},getPositiveNumber:function(r){var e=E.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNext:function(r){return E.add(r,"1")},getPrev:function(r){return E.subtract(r,"1")},isInteger:function(r){if(O.isZero(r))return!0;var e=O.getDecimal(r);return!!O.isEqual(e,"0")},isEvenNumber:function(r){if(O.isZero(r))return!0;if(!O.isInteger(r))return!1;var e=E.division(r,"2"),t=O.getDecimal(e);return!!O.isZero(t)},isOddNumber:function(r){if(O.isZero(r))return!1;if(!O.isInteger(r))return!1;var e=E.division(r,"2"),t=O.getDecimal(e);return!!E.isEqual("0.5",t)},getDivisors:function(r){var e=O.getNumber(r),t=[];if(!e)return t.push(e),t;for(var n=1;E.isLarge(e,n);n++){var i=E.division(e,n).remainder;E.isZero(i)&&t.push(O.getNumber(n))}return t.push(e),t}};const j={s:p,S:_.S,K:_.K,core:n,core2:E,utils:O};return e.default})()}));