!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return(()=>{"use strict";var r={d:(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},e={};r.d(e,{default:()=>j});var n={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],t=String(r),i=t.length,a=0;a<i;a++){var o=Number(t.slice(a,a+1));if(!n.isNumber(o))throw new Error("This function has been called with incorrect parameters");e.push(o)}return e},numToArrayWithDecimal:function(r){for(var e=[],t=[],i=String(r),a=i.length,o=e,u=0;u<a;u++){var s=Number(i[u]);if(!n.isNumber(s)){if("."!==s||o!==e)throw new Error("This function has been called with incorrect parameters");o=t}o.push(s)}return[].concat(e,[".",t])},numToArrayWithDecimal2:function(r){var e=String(r),t=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),t=!0);for(var i=e.split(""),a=[],o=[],u=!0,s=!1,l=0;l<i.length;l++){var c=Number(i[l]),f=n.isNumber(c);if(f||"."!==i[l]){if(!f)throw new Error("This function has been called with incorrect parameters");u&&0===c&&!s||(u=!1,s?o.push(t?-c:c):a.push(t?-c:c))}else s=!0}for(var m=o.length-1;m>=0&&0===o[m];m--)o.pop();return{int:a,decimal:o,negative:t}},numToArrayWithDecimal3:function(r){for(var e=String(r),t=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),t=!t;var i=null,a=e.match(/\./g);if(!(a&&a.length>1)){a&&1===a.length&&(i=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,i);for(var o=[],u=0,s=0;s<e.length;s++){var l=Number(e[s]);if(!n.isNumber(l))throw new Error("This function has been called with incorrect parameters");0===l&&i>s?u++:o.push(l)}for(i-=u;0===o[o.length-1];)o.pop();var c={array:o,negative:t};return(0===i||i>0)&&(c.decimal_index=i),c}},compare:function(r,e){if(r&&e){var t,i;if(t=r instanceof Array?r:n.numToArrayWithDecimal2(r),i=e instanceof Array?e:n.numToArrayWithDecimal2(e),0===t[0]){for(var a=[],o=!0,u=0;u<t.length;u++){var s=t[u];0===s&&o||(a.push(s),o=!1)}t=a}if(0===i[0]){for(var l=[],c=!0,f=0;f<i.length;f++){var m=i[f];0===m&&c||(l.push(m),c=!1)}i=l}var g={equal:!1,large:null,small:null};if(t.length>t.length)return g.large=r,g.small=e,g;if(t.length<t.length)return g.large=e,g.small=r,g;for(var h=0;h<t.length;h++){var v=t[h],p=i[h];if(v>p)return g.large=r,g.small=e,g;if(v<p)return g.large=e,g.small=r,g}return g.equal=!0,g}},getLarge:function(r,e){var t=n.numToArrayWithDecimal2(r),i=n.numToArrayWithDecimal2(e),a=!1;if(t.negative&&!i.negative)return e;if(!t.negative&&i.negative)return r;t.negative&&i.negative&&(a=!0);var o=n.compare(t.int,i.int);if(o.large===t.int)return a?e:r;if(o.large===i.int)return a?r:e;if(t.decimal.length<i.decimal.length)for(var u=i.decimal.length-t.decimal.length,s=0;s<u;s++)t.decimal.push(0);else if(t.decimal.length>i.decimal.length)for(var l=t.decimal.length-i.decimal.length,c=0;c<l;c++)i.decimal.push(0);var f=n.compare(t.decimal,i.decimal);return f.large===t.decimal?a?e:r:f.large===i.decimal?a?r:e:void 0},getSmall:function(r,e){var t=n.getLarge(r,e);return t===r?e:t===e?r:void 0},isEqual:function(r,e){return!!n.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!n.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var n=e,t=r.length-1;t>=0;t--){var i=r[t];if(i<0){n=!0;break}if(0!==i)break}if(n){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),console.log(o),console.log("minus",n),{new_array:o,minus:n}},add_and_subtract:function(r,e,t){if((r||e)&&t){var i;if("+"===t)i=!0;else{if("-"!==t)return;i=!1}var a=n.numToArrayWithDecimal2(r),o=n.numToArrayWithDecimal2(e),u=a.int,s=o.int,l=a.decimal,c=o.decimal,f=(a.negative,o.negative,l.length);f<c.length&&(f=c.length);for(var m=0;m<f;m++){var g=l[m],h=c[m];n.isNumber(g)||l.push(0),n.isNumber(h)||c.push(0)}var v,p,d,y=function(r,e,t){var i=[],a=r,o=e;r.length<e.length&&(a=e,o=r);for(var u=0;u<a.length;u++){var s=a[u]?a[u]:0,l=o[u]?o[u]:0,c=t?s+l:s-l;i.push(c)}return n.fixCarry(i)},b=(v=l.length<c.length?c.legth:l.length,d=0,(p=y(l.reverse(),c.reverse(),i)).new_array.length>v&&(d=p.new_array.pop()),{dec_arr:p.new_array,dec_carry:d,dec_minus:p.minus}),_=b.dec_arr,N=b.dec_carry,A=b.dec_minus,S=function(r){var e=y(u.reverse(),s.reverse(),i);return 0!==r&&(e=y(e.new_array,[r],!0)),{int_arr:e.new_array}}(N),D=S.int_arr;return console.log(D),console.log(_,N,A),{int:D.reverse(),decimal:_.reverse()}}},add:function(r,e){n.numToArrayWithDecimal2(r),n.numToArrayWithDecimal2(e),n.getLarge(r,e)}};const t=n;var i="Not a number",a="Argument is not Su.",o=function(r,e){if(isNaN(r))throw new Error(i);r||(r=0),e||(e={});var n=String(r),a=!1;"-"===n[0]&&(n=n.slice(1,n.length),a=!0),!a&&e&&e.negative&&(a=!0),isNaN(Number(n))&&(n="0"),"0"===n&&(a=!1);var o,u,s=n.split("."),l=s[0],c=s[1];if(l){var f=l.match(/0/g);f&&f.length===l.length&&(l="0");for(var m="",g=!0,h=0;h<l.length;h++)"0"===l[h]&&g||(g=!1,m+=l[h]);l=m||"0"}if(c){var v=c.match(/0/g);v&&v.length===c.length&&(c="0");for(var p=!0,d="",y=c.length-1;y>=0;y--)"0"===c[y]&&p||(p=!1,d=c[y]+d);c=d||"0"}try{o=t.numToArray(l),u=c?t.numToArray(c):[0]}catch(r){throw new Error(i)}this.integer=o,this.decimal=u,this.negative=!!a;for(var b=[1],_=0;_<this.decimal.length;_++)b.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:b}},u=function(r,e){var n;try{n=new o(r,e)}catch(r){n=r.message}return n},s=function(r){if(r instanceof o)return!0},l=function(r){var e=r.getString();return u(e)},c={ZERO:u(0),ONE:u(1),FIRST_PRIME_NUMBER:u(2),MAX:u(1e4),MIN:u(-1e4)};o.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},o.prototype.getNumber=function(){return Number(this.getString())},o.prototype.getInteger=function(){return Number(this.integer.join(""))},o.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},o.prototype.clone=function(){var r=this.getString();return u(r)};var f=function(r,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=!1,i=[],a=u(r.getString()),o=u(e.getString());if(n&&(a.negative=!1,o.negative=!1),!a.isZero()||!o.isZero()){if(!a.negative&&o.negative)return r;if(a.negative&&!o.negative)return e;if(a.negative&&o.negative&&(t=!0),a.integer.length>o.integer.length)return t?e:r;if(a.integer.length<o.integer.length)return t?r:e;for(var s=0;s<a.integer.length;s++){var l=a.integer[s],c=o.integer[s];if(l>c){i=[r,e];break}if(l<c){i=[e,r];break}}if(0===i.length)for(var f=a.decimal.length>=o.decimal.length?a.decimal.length:o.decimal.length,m=0;m<f;m++){var g=a.decimal[m]?a.decimal[m]:0,h=o.decimal[m]?o.decimal[m]:0;if(g>h){i=[r,e];break}if(g<h){i=[e,r];break}}return t&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};o.prototype.isEqual=function(r){if(!s(r))return!1;var e=this.clone(),n=r.clone(),t=e.integer,i=n.integer,a=e.decimal,o=n.decimal;if(f(e,n))return!1;if(t.length===i.length){for(var u=0;u<t.length;u++)if(t[u]!==i[u])return!1}else{if(a.length!==o.length)return!1;for(var l=0;l<a.length;l++)if(a[l]!==o[l])return!1}return e.negative===n.negative},o.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},o.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},o.prototype.isLarge=function(r){if(!s(r))return!1;var e=this.clone(),n=r.clone(),t=f(e,n);return!!t&&t.getString()===e.getString()},o.prototype.isSmall=function(r){if(!s(r))return!1;var e=this.clone(),n=r.clone(),t=f(e,n);return!!t&&t.getString()===n.getString()},o.prototype.isInteger=function(){return!this.containDecimal()},o.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(c.ZERO))},o.prototype.isNegative=function(){return!!this.negative},o.prototype.isPositive=function(){return!this.negative},o.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},o.prototype.add=function(r){if(!s(r))throw new Error(a);var e,n=this.clone(),t=r.clone();if(n.isZero())return t;if(t.isZero())return n;if(n.negative&&t.negative)e=!0;else if(n.negative||t.negative){if(!n.negative&&t.negative)return t.makePositive(),n.subtract(t);if(n.negative&&!t.negative)return n.makePositive(),t.subtract(n)}else e=!1;var i=f(n,t);i||(i=n);var o,l,c=i.integer,m=i.decimal;i===n?(o=t.integer,l=t.decimal):(o=n.integer,l=n.decimal);var g=c.length,h=m.length;l.length>m.length&&(h=l.length);for(var v=0,p=[],d=[],y=h-1;y>=0;y--){var b=void 0;(b=(m[y]||0)+(l[y]||0)+v)>=10?(v=1,b-=10):v=0,d.unshift(b)}for(var _=d.length-1;_>=0&&0===d[_];_--)d.pop();for(var N=g-o.length,A=g-1;A>=0;A--){var S=void 0;(S=c[A]+(o[A-N]||0)+v)>=10?(v=1,S-=10):v=0,p.unshift(S)}v>0&&p.unshift(v);var D=u(p.join("")+"."+d.join(""),{negative:e});return D.isZero()&&D.negative&&D.makePositive(),D},o.prototype.subtract=function(r){if(!s(r))throw new Error(a);var e=l(this),n=l(r);if(r.isZero())return e;if(this.isZero())return n.negate();if(e.negative!==n.negative)return n.negative=!n.negative,e.add(n);var t=e.negative;f(e,n,!0)!==e&&(n=this,t=!(e=r).negative);var i=e.integer.concat(e.decimal),o=n.integer.concat(n.decimal),c=e.integer.length,m=n.integer.length,g=e.decimal.length,h=n.decimal.length,v=Math.abs(g-h),p=0,d=0;if(p+=c>m?c:m,g>h){d+=g;for(var y=0;y<v;y++)o.push(0)}else{d+=h;for(var b=0;b<v;b++)i.push(0)}for(var _=0,N=[],A=0;A<p+d;A++){var S=i.length-1-A,D=o.length-1-A,T=(i[S]?i[S]:0)-_,Z=o[D]?o[D]:0;T>=Z?(_=0,N.unshift(T-Z)):(_=1,N.unshift(10*_+T-Z))}N.splice(N.length-d,0,".");var w=u((t?"-":"")+N.join(""));return w.isZero()&&w.negative&&w.makePositive(),w},o.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},o.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},o.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},o.prototype.multiplication=function(r){if(!s(r))throw new Error(a);var e=l(this),n=l(r);if(e.isZero()||n.isZero())return u(0);var t=!1;(!1===e.negative&&!0===n.negative||!0===e.negative&&!1===n.negative)&&(t=!0);for(var i=e.integer.concat(e.decimal),o=n.integer.concat(n.decimal),c=e.integer.length,f=n.integer.length,m=[],g=0;g<i.length;g++)for(var h=0;h<o.length;h++){var v=c-g-1+(f-h-1),p=i[g]*o[h],d=Math.abs(v),y=void 0;v>=0?(d++,y=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):y=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),m.push(u(y))}for(var b=u(0),_=0;_<m.length;_++)b=b.add(m[_]);return b.negative=t,b},o.prototype.division=function(r){if(!s(r))throw new Error(a);var e=l(this),n=l(r);if(e.isZero()&&n.isZero())return i;if(e.isZero())return u(0);if(n.isZero())return"Division by Zero";var t=!1;(!1===e.negative&&!0===n.negative||!0===e.negative&&!1===n.negative)&&(t=!0);for(var o=u(0),c=u(0);e.isLarge(c)||e.isEqual(c);)o=o.add(u(1)),c=n.multiplication(o);o=o.subtract(u(1)),c=c.subtract(n);var f=e.subtract(c),m=o;return m.remainder=f,m.negative=t,m},o.prototype.plus=function(r){return this.add(r)},o.prototype.tasu=function(r){return this.add(r)},o.prototype.minus=function(r){return this.subtract(r)},o.prototype.hiku=function(r){return this.subtract(r)},o.prototype.multiply=function(r){return this.multiplication(r)},o.prototype.kakeru=function(r){return this.multiplication(r)},o.prototype.waru=function(r){return this.division(r)},o.prototype.next=function(){return this.add(u(1))},o.prototype.prev=function(){return this.subtract(u(1))},o.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(u(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},o.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(u(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},o.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(u(e));e++){var n=u(e);this.division(n).remainder.isZero()&&r.push(n)}return r.push(this),r},o.prototype.getCommonDivisors=function(r){s(r)||(r=u(r));var e=r,n=this.getDivisors();if(this.isEqual(e))return n;for(var t=e.getDivisors(),i=[],a=0;a<n.length;a++)for(var o=n[a],l=0;l<t.length;l++){var c=t[l];o.isEqual(c)&&i.push(o)}return i},o.prototype.getMaxCommonDivisor=function(r){s(r)||(r=u(r));var e=this.getCommonDivisors(r);return e[e.length-1]},o.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=u("1");e.isSmall(c.MAX)||e.isEqual(c.MAX);)r.push(this.multiplication(e)),e=e.add(u("1"));return r},o.prototype.getLeastCommonMultiple=function(r){s(r)||(r=u(r));var e=r,n=this.getMaxCommonDivisor(e);return this.multiply(e).division(n)};var m=function(r,e){if(!s(r)||!s(e))return!1;var n=c.MAX;return function r(e){if(e[e.length-1].isLarge(n))return e;var t=e[e.length-2],i=e[e.length-1],a=t.add(i);return e.push(a),r(e)}([r,e])};o.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=u(0),n=u(1),t=m(e,n),i=0;i<t.length;i++)if(t[i].isEqual(r))return!0;return!1},o.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=m(u(2),u(1)),e=0;e<r.length;e++)if(r[e].isEqual(this))return!0;return!1};var g=function(r,e){var n=[r];if(!e)return n;for(var t=0;t<e.length;t++){var i=e[t];s(i)||(i=u(i)),n.push(i)}return n};o.prototype.getSequence=function(){return g(this,arguments)},o.prototype.summation=function(){for(var r=g(this,arguments),e=u(0),n=0;n<r.length;n++)e=e.add(r[n]);return e},o.prototype.infiniteProduct=function(){for(var r=g(this,arguments),e=r[0],n=1;n<r.length;n++)e=e.multiplication(r[n]);return e},o.prototype.digitsum=function(){for(var r=u(0),e=0;e<this.integer.length;e++){var n=u(this.integer[e]);r=r.add(n)}return r},o.prototype.square=function(){return this.exponentiate(u(2))},o.prototype.cube=function(){return this.exponentiate(u(3))},o.prototype.exponentiate=function(r){var e=u("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var n=e,t=l(this);n.isSmall(r);)t=this.multiplication(t),n=n.next();return t},o.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(u(1)),e=u(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(u(1))}return!0},o.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=u(0),n=0;n<r.length;n++)e=e.add(r[n]);return e},o.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(u(2)))},o.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(u(2)))},o.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},o.prototype.factorial=function(){for(var r=this,e=this.subtract(u(1)),n=u(0);e.isLarge(n);)r=r.multiplication(e),e=e.subtract(u(1));return r};var h=function(r,e){if(s(r)){if(r.isSmall(u(3)))return[];var n=u(1),t=[],i=n;e=e?e.next():c.MAX;for(var a=r.subtract(u(2));n.isSmall(e);)t.push(n),i=i.add(a),n=n.add(i);return t}};o.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,h(u(3),r)).find((function(r){return r.isEqual(e)}))},o.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,h(u(4),r)).find((function(r){return r.isEqual(e)}))};var v=function(r){r=r?r.next():c.MAX;for(var e=u(2),n=[],t=u(0),i=u(1);t.isSmall(r);)t=e.exponentiate(i).subtract(u(1)),n.push(t),i=i.add(u(1));return n};o.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=v(r),n=0;n<e.length;n++)if(e[n].isEqual(r))return!0;return!1},o.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():c.MAX;for(var e=v(r),n=[],t=0;t<e.length;t++){var i=e[t];i.isPrimeNumber()&&n.push(i)}return n}(r),n=0;n<e.length;n++)if(e[n].isEqual(r))return!0;return!1};const p={makeSu:u,copySu:l,isSu:s,Su:o};var d={},y={},b=p.makeSu,_=p.isSu;y.random=function(r,e){void 0===r&&(r=b(0)),void 0===e&&(e=b(1)),_(r)||(r=b(r)),_(e)||(e=b(e));var n,t=String(Math.random());if("0"===t)n=r.isZero()?b(0):r;else{var i=t.split(".");n=b("0."+i[1]).multiplication(e)}return n},y.randomElement=function(r){return r[y.random(0,r.length).integer]},y.randomInt=function(r,e){if(!_(r)||!_(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var n=[],t=r.getNumber();t<=e.getNumber();t++){var i=b(t);n.push(i)}return y.randomElement(n)},y.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString())),r||(r=100),r>100&&(r=100);for(var e=[],n=2;n<r;n++){var t=b(n);t.isPrimeNumber()&&e.push(t)}return e},y.euclideanAlgorithm=function(r,e){if(!d.isNumber(r)||!d.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var n;r<e&&(n=r,r=e,e=n);for(var t,i,a=r,o=e;0!==t;){if(0==(t=a%o)){i=o;break}if(1===t){i="coprime";break}0,a=o,o=t}return i},y.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var n=0,t=0;t<r.length;t++){var i=r[t];if(!d.isNumber(i))return"Argument is not Number";n+=i}return n},y.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var n=1,t=0;t<r.length;t++){var i=r[t];if(!d.isNumber(i))return"Argument is not a Number";n*=i}return n},y.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var n=r/e;return{integer:{remainder:r%e,result:Math.floor(n)},realNumber:n}},y.divisorsSummation=function(r){for(var e=y.divisors(r),n=0,t=0;t<e.length;t++)n+=e[t];return n},y.isAbundantNumber=function(r){return y.divisorsSummation(r)>2*r},y.isKaprekarNumberTypeA=function(r){var e,n=String(r*r),t=n.length,i=0;return e=d.isOddNumber(t)?1+(i=(t-1)/2):i=t/2,Number(n.substr(0,i))+Number(n.substr(i,e))===r},y.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),n=Number(e.sort().join(""));return Number(e.reverse().join(""))-n===r},y.isKaprekarNumber=function(r){if(y.isKaprekarNumberTypeA(r)||y.isKaprekarNumberTypeB(r))return!0},d.isInteger=function(r){return Math.floor(r)===r},y.harmonicMean=function(r){for(var e=r.length,n=0,t=0;t<e;t++)n+=1/r[t];return e/n},y.isHarmonicDivisorNumber=function(r){var e=y.divisors(r),n=y.harmonicMean(e);return!!d.isInteger(n)},d.isNaturalNumber=function(r){if(r>0&&d.isInteger(r))return!0},y.collatzhProblem=function(r){for(var e,n,t=[];r>1;)n=void 0,n=e=r,d.isOddNumber(e)?n=3*e+1:d.isEvenNumber(e)&&(n=e/2),r=n,t.push(r);return t},y.fermatTest=function(r,e){if(!d.isInteger(r)||d.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var n=1;n<=e;n++){var t=y.randomInt(2,r-1);if(1!==y.maxCommonDivisor(t,r))return"Composit Number";if(1!=Math.pow(t,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},y.getIncludesNumbers=function(r){for(var e=[],n=r,t=!0;t;){var i=[n,r-n];if(e.push(i),(n-=1)<0){t=!1;break}}return e};const N={S:d,K:y};function A(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function S(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){D(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function D(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function T(r){return function(r){if(Array.isArray(r))return Z(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return Z(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function w(r){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},w(r)}var x={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},moldNumArray:function(r){for(var e=r.array,n=r.negative,t=r.decimal_index;t<e.length&&0===e[e.length-1];)e.pop();for(;t>1&&0===e[0];)e.shift(),t--;0===e.length&&(e.push(0),t=1);var i={array:e,negative:n,is_num_array:!0};return i.decimal_index=0===t||t>0?t:e.length,i},numToArrayWithDecimal:function(r){if(r.is_num_array)return x.clone(r);if("object"===w(r))return console.log("Paremeter is object.",r);for(var e,n=String(r),t=!1;n[0].match(/^-/);)n=n.replace(/^-/,""),t=!t;var i=n.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=n.match(/\./).index,n=n.replace(/\./,"")):e=n.length;for(var a=[],o=0;o<n.length;o++){var u=Number(n[o]);if(!x.isNumber(u))throw new Error("This function has been called with incorrect parameters");a.push(u)}return x.moldNumArray({array:a,negative:t,decimal_index:e})}},numArrayToString:function(r){if(!r.is_num_array||!r.array||!r.decimal_index)return"";var e=T(r.array);e.splice(r.decimal_index,0,".");var n=e.join("");return r.negative&&(n="-".concat(n)),n.replace(/\.$/,"")},compare:function(r,e){var n={small:null,large:null,equal:!1};if(!r||!e)return n;var t=r,i=e;if(!t.is_num_array&&!(t=x.numToArrayWithDecimal(t)))return n;if(!i.is_num_array&&!(i=x.numToArrayWithDecimal(i)))return n;var a=t.array,o=i.array,u=a.length,s=o.length,l=a.join(""),c=o.join(""),f=t.decimal_index,m=i.decimal_index,g=u-f,h=s-m;if(1===u&&"0"===l&&1===s&&"0"===c)return n.equal=!0,n;if(!t.negative&&i.negative)return n.small=i,n.large=t,n;if(t.negative&&!i.negative)return n.small=t,n.large=i,n;var v=t.negative,p={large:v?i:t,small:v?t:i,equal:!1},d={large:v?t:i,small:v?i:t,equal:!1};if(f>m)return p;if(f<m)return d;for(var y=0;y<f;y++){if(a[y]>o[y])return p;if(a[y]<o[y])return d}for(var b=g>h?g:h,_=0;_<b;_++){var N=a[f+_]?a[f+_]:0,A=o[m+_]?o[m+_]:0;if(N>A)return p;if(N<A)return d}return n.equal=!0,n},getLarge:function(r,e){return x.compare(r,e).large},getSmall:function(r,e){return x.compare(r,e).small},isEqual:function(r,e){return!!x.compare(r,e).equal},isSmall:function(r,e){return x.isEqual(x.getSmall(r,e),r)},isLarge:function(r,e){return x.isEqual(x.getLarge(r,e),r)},isZero:function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=x.getZero();return x.isEqual(e,r)},isOne:function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=x.numToArrayWithDecimal("1");return x.isEqual(e,r)},getZero:function(){return x.numToArrayWithDecimal("0")},getOne:function(){return x.numToArrayWithDecimal("1")},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!x.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){for(var n=e,t=r.length-1;t>=0;t--){var i=r[t];if(i<0){n=!0;break}if(0!==i)break}if(n){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;if(l>9){var c=String(l).split("");l=Number(c[c.length-1]);var f=c.slice(0,c.length-1);u=Number(f.join(""))}else l>=0&&l<=9?u=0:(l=10+l,u=-1);o.push(l)}return 0!==u&&o.push(u),{new_array:o,minus:n}},clone:function(r){return r.is_num_array?S(S({},r),{},{array:T(r.array)}):null},add_and_subtract:function(r,e,n){var t;if((r&&e||0===r||0===e)&&n){if("+"===n)t=!0;else{if("-"!==n)return;t=!1}var i,a=null;i=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),a=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0);var o=i.array,u=a.array,s=x.isZero(i),l=x.isZero(a);if(s&&l)return i;if(s)return t||(a.negative=!a.negative),a;if(l)return i;var c=i.array.length-i.decimal_index,f=a.array.length-a.decimal_index,m=c-f;m>0?u.push.apply(u,T(Array(m).fill(0))):m<0&&o.push.apply(o,T(Array(Math.abs(m)).fill(0)));var g=function(r){var e=r.a,n=r.b,t=r.plus,i=[],a=e.array.length;e.array.length<n.array.length&&(a=n.array.length);for(var o=e.array,u=n.array,s=e.negative?-1:1,l=n.negative?-1:1,c=0;c<a;c++){var f=o[c]?o[c]*s:0,m=u[c]?u[c]*l:0,g=t?f+m:f-m;i.push(g)}return x.fixCarry(i)}({a:{array:T(o).reverse(),negative:i.negative},b:{array:T(u).reverse(),negative:a.negative},plus:t}),h=g.new_array,v=g.minus,p=c>=f?c:f,d=h.length-p;return x.moldNumArray({array:T(h).reverse(),negative:!!v,decimal_index:d})}},add:function(r,e){return x.add_and_subtract(r,e,"+")},subtract:function(r,e){return x.add_and_subtract(r,e,"-")},multiplication:function(r,e){if(r&&e||0===r||0===e){var n,t;n=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),t=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0);var i=n.array,a=t.array;if(x.isZero(n)||x.isZero(t))return x.numToArrayWithDecimal("0");if(x.isOne(n))return t;if(x.isOne(t))return n;var o,u=n.negative,s=t.negative;o=!(u&&s||!u&&!s);var l=n.array.length-n.decimal_index+(t.array.length-t.decimal_index),c=function(r){for(var e=r.b,n=[],t=r.a.array,i=e.array,a=0;a<t.length;a++){var o=t[a]?t[a]:0,u=new Array(a);u.fill(0,0,a);for(var s=0;s<i.length;s++){var l=o*(i[s]?i[s]:0);u.push(l);var c=a+s,f=n[c];f||(f=0);var m=f+l;n[c]=m}}return x.fixCarry(n)}({a:{array:T(i).reverse(),negative:n.negative},b:{array:T(a).reverse(),negative:t.negative}}),f=c.new_array,m=f.length-l;return x.moldNumArray({array:T(f).reverse(),negative:o,decimal_index:m})}},multiple:function(r,e){return x.multiplication(r,e)},getDecimal:function(r){var e=x.numToArrayWithDecimal(r),n="0.",t=e.array.length-e.decimal_index;if(t>0)for(var i=e.decimal_index;i<=t;i++)n+=String(e.array[i]);else n+="0";return x.numToArrayWithDecimal(n)},division:function(r,e,n){if(r&&e||0===r||0===e){var t=null,i=null;if(t=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),i=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0),!x.isZero(i)){if(x.isZero(t))return S(S({},x.getZero()),{},{remainder:x.getZero()});if(x.isOne(i))return S(S({},t),{},{remainder:x.getZero()});if(x.isEqual(t,i))return S(S({},x.getOne()),{},{remainder:x.getZero()});var a,o=t.negative,u=i.negative;t.negative&&(t.negative=!1),i.negative&&(i.negative=!1),a=!(o&&u||!o&&!u);var s=function(r){var e,n=r.a,t=r.b,i=r.max,a=r.need_remain,o=[],u=x.getZero(),s=x.clone(n),l=x.clone(t),c=n.decimal_index,f=c;console.log("first calc","remain: ",u,"decimal_index: ",c,"decimal_index_remain: ",f);var m=x.clone(s);m.decimal_index=m.array.length;var g=0,h=s.array.join("").match(/^0+/);h&&h[0]&&(console.info("if(a_zero_res && a_zero_res[0])"),g=h[0].length,m=x.numToArrayWithDecimal(m.array.slice(g,m.array.length).join("")));var v=x.clone(l);v.decimal_index=v.array.length;var p=0,d=v.array.join("").match(/^0+/);d&&d[0]&&(console.info("if(b_zero_res && b_zero_res[0])"),p=d[0].length,v=x.numToArrayWithDecimal(v.array.slice(p,v.array.length).join("")));var y=g-p,b=T(m.array),_=s.array.length-s.decimal_index-(l.array.length-l.decimal_index);console.log("a_int: ",m),console.log("b_int: ",v),console.log("decimal_gap: ",_);for(var N=Number(x.add(m.array.length,i).array.join("")),A=m.array.length,S=!1,D=[0],Z=[],w=0,E=0,O=0,j=0;j<N;j++){O++;var q=!0,k=x.getZero(),W=x.multiplication(u,"10"),P=String(1===b.slice(j,j+1).length?b.slice(j,j+1)[0]:"0");u=x.add(W,P),console.info("remain1 in for",x.numArrayToString(W)),console.info("remain2 in for",P),console.info("remain in for",x.numArrayToString(u)),console.info("decimal_index_remain in for",f),console.info("remain_arr in for",D),console.info("decimal_count in for",w),console.info("remain_and_a_len_gap in for",E),console.info("remain_for_modulo in for",Z),console.info("c in for",O),E=u.array.length-A;var M=x.getZero();if(j===A){if(console.info("if(i === a_len)"),c=j,x.isZero(u))break;S=!0,w=w++}else if(j>A&&(console.info("}else if(i > a_len){"),w=w++,x.isZero(u)))break;for(var L=i;q;){if(k=x.add(k,"1"),x.isLarge(k,L)&&!a){console.info("if(core.isLarge(count, max_count) && !need_remain){"),q=!1;break}var I=M;if(M=x.multiplication(v,k),x.isEqual(u,M)){console.info("if(core.isEqual(remain, product)){"),q=!1;var C=k;o.push(C),u=a?x.subtract(u,I):x.subtract(u,M);break}if(x.isLarge(M,u)){if(console.info("if(core.isLarge(product, remain))0"),q=!1,x.isLarge(I,n)&&a)break;var K=x.subtract(k,"1");o.push(K),u=x.subtract(u,I),console.info("if(core.isLarge(product, remain))1 pre_product",x.numArrayToString(I)),console.info("if(core.isLarge(product, remain))1 result_arr",o.map((function(r){return r.array[0]}))),console.info("if(core.isLarge(product, remain))1 remain",x.numArrayToString(u)),console.info("if(core.isLarge(product, remain))1 product",x.numArrayToString(M)),S&&(console.info("if(remain_is_decimal){"),D.push(0));break}}}console.info("cccc c",O),console.info("cccc remain",u),(e=D).push.apply(e,T(u.array));var X=o.flatMap((function(r){return r.array}));if(y>0)for(var z=0;z<y;z++)X.unshift(0),c++;if(_<0)for(var R=0;R<Math.abs(_);R++)X.push(0),c++;else if(_>0)for(var B=0;B<Math.abs(_);B++)X.unshift(0);if(E>0)for(var F=0;F<E;F++)0===D[0]?D.shift():f-=E,D.push(0);else if(E<0){var U,$=Math.abs(E),H=Array($).fill(0);(U=D).unshift.apply(U,T(H))}return S&&(D=T(D)),a&&(f++,console.info("a_",s)),{new_array:X,decimal_index:c,remain_array:D,remain_decimal_index:f}}({a:t,b:i,max:n?x.getZero():x.numToArrayWithDecimal("10"),need_remain:n}),l=s.new_array,c=s.decimal_index,f=s.remain_array,m=s.remain_decimal_index,g=x.moldNumArray({array:T(f),negative:a,decimal_index:m});return S(S({},x.moldNumArray({array:T(l),negative:a,decimal_index:c})),{},{remainder:g})}}},divide:function(r,e,n){return x.division(r,e,n)},modulo:function(r,e){return x.division(r,e,!0).remainder}};const E=x;var O={getNumber:function(r){return E.numToArrayWithDecimal(r)},copy:function(r){var e=E.clone(r);if(!e){var n=E.numArrayToString(r);return E.numToArrayWithDecimal(n)}return e},getLarge:function(r,e){return E.getLarge(r,e)},getSmall:function(r,e){return E.getSmall(r,e)},isEqual:function(r,e){return E.isEqual(r,e)},getZero:function(){return E.getZero()},getOne:function(){return E.getOne()},isZero:function(r){return E.isZero(r)},isOne:function(r){return E.isOne(r)},square:function(r){return E.multiplication(r,r)},getInteger:function(r){for(var e="",n=0;n<r.decimal_index;n++)e+=String(r.array[n]);return O.getNumber(e)},getDecimal:function(r){return E.getDecimal(r)},isNaturalNumber:function(r){var e=O.getDecimal(r);return!(!O.isZero(e)||r.negative)},includeDecimal:function(r){var e=O.getDecimal(r);return!O.isZero(e)},isNegative:function(r){return E.numToArrayWithDecimal(r).negative},isPositive:function(r){return!E.numToArrayWithDecimal(r).negative},negate:function(r){var e=E.numToArrayWithDecimal(r);return e&&(e.negative=!0),e},makePositive:function(r){var e=E.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNegativeNumber:function(r){return O.negate(r)},getPositiveNumber:function(r){var e=E.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNext:function(r){return E.add(r,"1")},getPrev:function(r){return E.subtract(r,"1")},isInteger:function(r){if(O.isZero(r))return!0;var e=O.getDecimal(r);return!!O.isEqual(e,"0")},isEvenNumber:function(r){if(O.isZero(r))return!0;if(!O.isInteger(r))return!1;var e=E.division(r,"2"),n=O.getDecimal(e);return!!O.isZero(n)},isOddNumber:function(r){if(O.isZero(r))return!1;if(!O.isInteger(r))return!1;var e=E.division(r,"2"),n=O.getDecimal(e);return!!E.isEqual("0.5",n)},getDivisors:function(r){var e=O.getNumber(r),n=[];if(!e)return n.push(e),n;for(var t=1;E.isLarge(e,t);t++){var i=E.division(e,t).remainder;E.isZero(i)&&n.push(O.getNumber(t))}return n.push(e),n}};const j={s:p,S:N.S,K:N.K,core:t,core2:E,utils:O};return e.default})()}));