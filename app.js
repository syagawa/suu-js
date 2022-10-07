!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(()=>(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},e={};r.d(e,{default:()=>M});var t={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],n=String(r),i=n.length,a=0;a<i;a++){var u=Number(n.slice(a,a+1));if(!t.isNumber(u))throw new Error("This function has been called with incorrect parameters");e.push(u)}return e},numToArrayWithDecimal:function(r){for(var e=[],n=[],i=String(r),a=i.length,u=e,o=0;o<a;o++){var s=Number(i[o]);if(!t.isNumber(s)){if("."!==s||u!==e)throw new Error("This function has been called with incorrect parameters");u=n}u.push(s)}return[].concat(e,[".",n])},numToArrayWithDecimal2:function(r){var e=String(r),n=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),n=!0);for(var i=e.split(""),a=[],u=[],o=!0,s=!1,l=0;l<i.length;l++){var c=Number(i[l]),m=t.isNumber(c);if(m||"."!==i[l]){if(!m)throw new Error("This function has been called with incorrect parameters");o&&0===c&&!s||(o=!1,s?u.push(n?-c:c):a.push(n?-c:c))}else s=!0}for(var f=u.length-1;f>=0&&0===u[f];f--)u.pop();return{int:a,decimal:u,negative:n}},numToArrayWithDecimal3:function(r){for(var e=String(r),n=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),n=!n;var i=null,a=e.match(/\./g);if(!(a&&a.length>1)){a&&1===a.length&&(i=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,i);for(var u=[],o=0,s=0;s<e.length;s++){var l=Number(e[s]);if(!t.isNumber(l))throw new Error("This function has been called with incorrect parameters");0===l&&i>s?o++:u.push(l)}for(i-=o;0===u[u.length-1];)u.pop();var c={array:u,negative:n};return(0===i||i>0)&&(c.decimal_index=i),c}},compare:function(r,e){if(r&&e){var n,i;if(n=r instanceof Array?r:t.numToArrayWithDecimal2(r),i=e instanceof Array?e:t.numToArrayWithDecimal2(e),0===n[0]){for(var a=[],u=!0,o=0;o<n.length;o++){var s=n[o];0===s&&u||(a.push(s),u=!1)}n=a}if(0===i[0]){for(var l=[],c=!0,m=0;m<i.length;m++){var f=i[m];0===f&&c||(l.push(f),c=!1)}i=l}var g={equal:!1,large:null,small:null};if(n.length>n.length)return g.large=r,g.small=e,g;if(n.length<n.length)return g.large=e,g.small=r,g;for(var v=0;v<n.length;v++){var h=n[v],d=i[v];if(h>d)return g.large=r,g.small=e,g;if(h<d)return g.large=e,g.small=r,g}return g.equal=!0,g}},getLarge:function(r,e){var n=t.numToArrayWithDecimal2(r),i=t.numToArrayWithDecimal2(e),a=!1;if(n.negative&&!i.negative)return e;if(!n.negative&&i.negative)return r;n.negative&&i.negative&&(a=!0);var u=t.compare(n.int,i.int);if(u.large===n.int)return a?e:r;if(u.large===i.int)return a?r:e;if(n.decimal.length<i.decimal.length)for(var o=i.decimal.length-n.decimal.length,s=0;s<o;s++)n.decimal.push(0);else if(n.decimal.length>i.decimal.length)for(var l=n.decimal.length-i.decimal.length,c=0;c<l;c++)i.decimal.push(0);var m=t.compare(n.decimal,i.decimal);return m.large===n.decimal?a?e:r:m.large===i.decimal?a?r:e:void 0},getSmall:function(r,e){var n=t.getLarge(r,e);return n===r?e:n===e?r:void 0},isEqual:function(r,e){return!!t.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!t.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var u=[],o=0,s=0;s<r.length;s++){var l=r[s]+o;l>9?(l-=10,o=1):l>=0&&l<=9?o=0:(l=10+l,o=-1),u.push(l)}return 0!==o&&u.push(o),console.log(u),console.log("minus",t),{new_array:u,minus:t}},add_and_subtract:function(r,e,n){if((r||e)&&n){var i;if("+"===n)i=!0;else{if("-"!==n)return;i=!1}var a=t.numToArrayWithDecimal2(r),u=t.numToArrayWithDecimal2(e),o=a.int,s=u.int,l=a.decimal,c=u.decimal,m=(a.negative,u.negative,l.length);m<c.length&&(m=c.length);for(var f=0;f<m;f++){var g=l[f],v=c[f];t.isNumber(g)||l.push(0),t.isNumber(v)||c.push(0)}var h,d,p,y=function(r,e,n){var i=[],a=r,u=e;r.length<e.length&&(a=e,u=r);for(var o=0;o<a.length;o++){var s=a[o]?a[o]:0,l=u[o]?u[o]:0,c=n?s+l:s-l;i.push(c)}return t.fixCarry(i)},b=(h=l.length<c.length?c.legth:l.length,p=0,(d=y(l.reverse(),c.reverse(),i)).new_array.length>h&&(p=d.new_array.pop()),{dec_arr:d.new_array,dec_carry:p,dec_minus:d.minus}),N=b.dec_arr,_=b.dec_carry,S=b.dec_minus,A=function(r){var e=y(o.reverse(),s.reverse(),i);return 0!==r&&(e=y(e.new_array,[r],!0)),{int_arr:e.new_array}}(_),D=A.int_arr;return console.log(D),console.log(N,_,S),{int:D.reverse(),decimal:N.reverse()}}},add:function(r,e){t.numToArrayWithDecimal2(r),t.numToArrayWithDecimal2(e),t.getLarge(r,e)}};const n=t;var i="Not a number",a="Argument is not Su.",u=function(r,e){if(isNaN(r))throw new Error(i);r||(r=0),e||(e={});var t=String(r),a=!1;"-"===t[0]&&(t=t.slice(1,t.length),a=!0),!a&&e&&e.negative&&(a=!0),isNaN(Number(t))&&(t="0"),"0"===t&&(a=!1);var u,o,s=t.split("."),l=s[0],c=s[1];if(l){var m=l.match(/0/g);m&&m.length===l.length&&(l="0");for(var f="",g=!0,v=0;v<l.length;v++)"0"===l[v]&&g||(g=!1,f+=l[v]);l=f||"0"}if(c){var h=c.match(/0/g);h&&h.length===c.length&&(c="0");for(var d=!0,p="",y=c.length-1;y>=0;y--)"0"===c[y]&&d||(d=!1,p=c[y]+p);c=p||"0"}try{u=n.numToArray(l),o=c?n.numToArray(c):[0]}catch(r){throw new Error(i)}this.integer=u,this.decimal=o,this.negative=!!a;for(var b=[1],N=0;N<this.decimal.length;N++)b.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:b}},o=function(r,e){var t;try{t=new u(r,e)}catch(r){t=r.message}return t},s=function(r){if(r instanceof u)return!0},l=function(r){var e=r.getString();return o(e)},c={ZERO:o(0),ONE:o(1),FIRST_PRIME_NUMBER:o(2),MAX:o(1e4),MIN:o(-1e4)};u.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},u.prototype.getNumber=function(){return Number(this.getString())},u.prototype.getInteger=function(){return Number(this.integer.join(""))},u.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},u.prototype.clone=function(){var r=this.getString();return o(r)};var m=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1,i=[],a=o(r.getString()),u=o(e.getString());if(t&&(a.negative=!1,u.negative=!1),!a.isZero()||!u.isZero()){if(!a.negative&&u.negative)return r;if(a.negative&&!u.negative)return e;if(a.negative&&u.negative&&(n=!0),a.integer.length>u.integer.length)return n?e:r;if(a.integer.length<u.integer.length)return n?r:e;for(var s=0;s<a.integer.length;s++){var l=a.integer[s],c=u.integer[s];if(l>c){i=[r,e];break}if(l<c){i=[e,r];break}}if(0===i.length)for(var m=a.decimal.length>=u.decimal.length?a.decimal.length:u.decimal.length,f=0;f<m;f++){var g=a.decimal[f]?a.decimal[f]:0,v=u.decimal[f]?u.decimal[f]:0;if(g>v){i=[r,e];break}if(g<v){i=[e,r];break}}return n&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};u.prototype.isEqual=function(r){if(!s(r))return!1;var e=this.clone(),t=r.clone(),n=e.integer,i=t.integer,a=e.decimal,u=t.decimal;if(m(e,t))return!1;if(n.length===i.length){for(var o=0;o<n.length;o++)if(n[o]!==i[o])return!1}else{if(a.length!==u.length)return!1;for(var l=0;l<a.length;l++)if(a[l]!==u[l])return!1}return e.negative===t.negative},u.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},u.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},u.prototype.isLarge=function(r){if(!s(r))return!1;var e=this.clone(),t=r.clone(),n=m(e,t);return!!n&&n.getString()===e.getString()},u.prototype.isSmall=function(r){if(!s(r))return!1;var e=this.clone(),t=r.clone(),n=m(e,t);return!!n&&n.getString()===t.getString()},u.prototype.isInteger=function(){return!this.containDecimal()},u.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(c.ZERO))},u.prototype.isNegative=function(){return!!this.negative},u.prototype.isPositive=function(){return!this.negative},u.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},u.prototype.add=function(r){if(!s(r))throw new Error(a);var e,t=this.clone(),n=r.clone();if(t.isZero())return n;if(n.isZero())return t;if(t.negative&&n.negative)e=!0;else if(t.negative||n.negative){if(!t.negative&&n.negative)return n.makePositive(),t.subtract(n);if(t.negative&&!n.negative)return t.makePositive(),n.subtract(t)}else e=!1;var i=m(t,n);i||(i=t);var u,l,c=i.integer,f=i.decimal;i===t?(u=n.integer,l=n.decimal):(u=t.integer,l=t.decimal);var g=c.length,v=f.length;l.length>f.length&&(v=l.length);for(var h=0,d=[],p=[],y=v-1;y>=0;y--){var b=void 0;(b=(f[y]||0)+(l[y]||0)+h)>=10?(h=1,b-=10):h=0,p.unshift(b)}for(var N=p.length-1;N>=0&&0===p[N];N--)p.pop();for(var _=g-u.length,S=g-1;S>=0;S--){var A=void 0;(A=c[S]+(u[S-_]||0)+h)>=10?(h=1,A-=10):h=0,d.unshift(A)}h>0&&d.unshift(h);var D=o(d.join("")+"."+p.join(""),{negative:e});return D.isZero()&&D.negative&&D.makePositive(),D},u.prototype.subtract=function(r){if(!s(r))throw new Error(a);var e=l(this),t=l(r);if(r.isZero())return e;if(this.isZero())return t.negate();if(e.negative!==t.negative)return t.negative=!t.negative,e.add(t);var n=e.negative;m(e,t,!0)!==e&&(t=this,n=!(e=r).negative);var i=e.integer.concat(e.decimal),u=t.integer.concat(t.decimal),c=e.integer.length,f=t.integer.length,g=e.decimal.length,v=t.decimal.length,h=Math.abs(g-v),d=0,p=0;if(d+=c>f?c:f,g>v){p+=g;for(var y=0;y<h;y++)u.push(0)}else{p+=v;for(var b=0;b<h;b++)i.push(0)}for(var N=0,_=[],S=0;S<d+p;S++){var A=i.length-1-S,D=u.length-1-S,E=(i[A]?i[A]:0)-N,k=u[D]?u[D]:0;E>=k?(N=0,_.unshift(E-k)):(N=1,_.unshift(10*N+E-k))}_.splice(_.length-p,0,".");var Z=o((n?"-":"")+_.join(""));return Z.isZero()&&Z.negative&&Z.makePositive(),Z},u.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},u.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},u.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},u.prototype.multiplication=function(r){if(!s(r))throw new Error(a);var e=l(this),t=l(r);if(e.isZero()||t.isZero())return o(0);var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=e.integer.concat(e.decimal),u=t.integer.concat(t.decimal),c=e.integer.length,m=t.integer.length,f=[],g=0;g<i.length;g++)for(var v=0;v<u.length;v++){var h=c-g-1+(m-v-1),d=i[g]*u[v],p=Math.abs(h),y=void 0;h>=0?(p++,y=d>9?String(d).padEnd(p+1,"0"):String(d).padEnd(p,"0")):y=1===p&&d>9?String(d)[0]+"."+String(d)[1]:"0."+String(d).padStart(p,"0"),f.push(o(y))}for(var b=o(0),N=0;N<f.length;N++)b=b.add(f[N]);return b.negative=n,b},u.prototype.division=function(r){if(!s(r))throw new Error(a);var e=l(this),t=l(r);if(e.isZero()&&t.isZero())return i;if(e.isZero())return o(0);if(t.isZero())return"Division by Zero";var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var u=o(0),c=o(0);e.isLarge(c)||e.isEqual(c);)u=u.add(o(1)),c=t.multiplication(u);u=u.subtract(o(1)),c=c.subtract(t);var m=e.subtract(c),f=u;return f.remainder=m,f.negative=n,f},u.prototype.plus=function(r){return this.add(r)},u.prototype.tasu=function(r){return this.add(r)},u.prototype.minus=function(r){return this.subtract(r)},u.prototype.hiku=function(r){return this.subtract(r)},u.prototype.multiply=function(r){return this.multiplication(r)},u.prototype.kakeru=function(r){return this.multiplication(r)},u.prototype.waru=function(r){return this.division(r)},u.prototype.next=function(){return this.add(o(1))},u.prototype.prev=function(){return this.subtract(o(1))},u.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(o(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},u.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(o(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},u.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(o(e));e++){var t=o(e);this.division(t).remainder.isZero()&&r.push(t)}return r.push(this),r},u.prototype.getCommonDivisors=function(r){s(r)||(r=o(r));var e=r,t=this.getDivisors();if(this.isEqual(e))return t;for(var n=e.getDivisors(),i=[],a=0;a<t.length;a++)for(var u=t[a],l=0;l<n.length;l++){var c=n[l];u.isEqual(c)&&i.push(u)}return i},u.prototype.getMaxCommonDivisor=function(r){s(r)||(r=o(r));var e=this.getCommonDivisors(r);return e[e.length-1]},u.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=o("1");e.isSmall(c.MAX)||e.isEqual(c.MAX);)r.push(this.multiplication(e)),e=e.add(o("1"));return r},u.prototype.getLeastCommonMultiple=function(r){s(r)||(r=o(r));var e=r,t=this.getMaxCommonDivisor(e);return this.multiply(e).division(t)};var f=function(r,e){if(!s(r)||!s(e))return!1;var t=c.MAX;return function r(e){if(e[e.length-1].isLarge(t))return e;var n=e[e.length-2],i=e[e.length-1],a=n.add(i);return e.push(a),r(e)}([r,e])};u.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=o(0),t=o(1),n=f(e,t),i=0;i<n.length;i++)if(n[i].isEqual(r))return!0;return!1},u.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=f(o(2),o(1)),e=0;e<r.length;e++)if(r[e].isEqual(this))return!0;return!1};var g=function(r,e){var t=[r];if(!e)return t;for(var n=0;n<e.length;n++){var i=e[n];s(i)||(i=o(i)),t.push(i)}return t};u.prototype.getSequence=function(){return g(this,arguments)},u.prototype.summation=function(){for(var r=g(this,arguments),e=o(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},u.prototype.infiniteProduct=function(){for(var r=g(this,arguments),e=r[0],t=1;t<r.length;t++)e=e.multiplication(r[t]);return e},u.prototype.digitsum=function(){for(var r=o(0),e=0;e<this.integer.length;e++){var t=o(this.integer[e]);r=r.add(t)}return r},u.prototype.square=function(){return this.exponentiate(o(2))},u.prototype.cube=function(){return this.exponentiate(o(3))},u.prototype.exponentiate=function(r){var e=o("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var t=e,n=l(this);t.isSmall(r);)n=this.multiplication(n),t=t.next();return n},u.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(o(1)),e=o(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(o(1))}return!0},u.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=o(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},u.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(o(2)))},u.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(o(2)))},u.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},u.prototype.factorial=function(){for(var r=this,e=this.subtract(o(1)),t=o(0);e.isLarge(t);)r=r.multiplication(e),e=e.subtract(o(1));return r};var v=function(r,e){if(s(r)){if(r.isSmall(o(3)))return[];var t=o(1),n=[],i=t;e=e?e.next():c.MAX;for(var a=r.subtract(o(2));t.isSmall(e);)n.push(t),i=i.add(a),t=t.add(i);return n}};u.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,v(o(3),r)).find((function(r){return r.isEqual(e)}))},u.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,v(o(4),r)).find((function(r){return r.isEqual(e)}))};var h=function(r){r=r?r.next():c.MAX;for(var e=o(2),t=[],n=o(0),i=o(1);n.isSmall(r);)n=e.exponentiate(i).subtract(o(1)),t.push(n),i=i.add(o(1));return t};u.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=h(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1},u.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():c.MAX;for(var e=h(r),t=[],n=0;n<e.length;n++){var i=e[n];i.isPrimeNumber()&&t.push(i)}return t}(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1};const d={makeSu:o,copySu:l,isSu:s,Su:u};var p={},y={},b=d.makeSu,N=d.isSu;y.random=function(r,e){void 0===r&&(r=b(0)),void 0===e&&(e=b(1)),N(r)||(r=b(r)),N(e)||(e=b(e));var t,n=String(Math.random());if("0"===n)t=r.isZero()?b(0):r;else{var i=n.split(".");t=b("0."+i[1]).multiplication(e)}return t},y.randomElement=function(r){return r[y.random(0,r.length).integer]},y.randomInt=function(r,e){if(!N(r)||!N(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var t=[],n=r.getNumber();n<=e.getNumber();n++){var i=b(n);t.push(i)}return y.randomElement(t)},y.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString())),r||(r=100),r>100&&(r=100);for(var e=[],t=2;t<r;t++){var n=b(t);n.isPrimeNumber()&&e.push(n)}return e},y.euclideanAlgorithm=function(r,e){if(!p.isNumber(r)||!p.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var t;r<e&&(t=r,r=e,e=t);for(var n,i,a=r,u=e;0!==n;){if(0==(n=a%u)){i=u;break}if(1===n){i="coprime";break}0,a=u,u=n}return i},y.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var t=0,n=0;n<r.length;n++){var i=r[n];if(!p.isNumber(i))return"Argument is not Number";t+=i}return t},y.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var t=1,n=0;n<r.length;n++){var i=r[n];if(!p.isNumber(i))return"Argument is not a Number";t*=i}return t},y.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var t=r/e;return{integer:{remainder:r%e,result:Math.floor(t)},realNumber:t}},y.divisorsSummation=function(r){for(var e=y.divisors(r),t=0,n=0;n<e.length;n++)t+=e[n];return t},y.isAbundantNumber=function(r){return y.divisorsSummation(r)>2*r},y.isKaprekarNumberTypeA=function(r){var e,t=String(r*r),n=t.length,i=0;return e=p.isOddNumber(n)?1+(i=(n-1)/2):i=n/2,Number(t.substr(0,i))+Number(t.substr(i,e))===r},y.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),t=Number(e.sort().join(""));return Number(e.reverse().join(""))-t===r},y.isKaprekarNumber=function(r){if(y.isKaprekarNumberTypeA(r)||y.isKaprekarNumberTypeB(r))return!0},p.isInteger=function(r){return Math.floor(r)===r},y.harmonicMean=function(r){for(var e=r.length,t=0,n=0;n<e;n++)t+=1/r[n];return e/t},y.isHarmonicDivisorNumber=function(r){var e=y.divisors(r),t=y.harmonicMean(e);return!!p.isInteger(t)},p.isNaturalNumber=function(r){if(r>0&&p.isInteger(r))return!0},y.collatzhProblem=function(r){for(var e,t,n=[];r>1;)t=void 0,t=e=r,p.isOddNumber(e)?t=3*e+1:p.isEvenNumber(e)&&(t=e/2),r=t,n.push(r);return n},y.fermatTest=function(r,e){if(!p.isInteger(r)||p.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var t=1;t<=e;t++){var n=y.randomInt(2,r-1);if(1!==y.maxCommonDivisor(n,r))return"Composit Number";if(1!=Math.pow(n,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},y.getIncludesNumbers=function(r){for(var e=[],t=r,n=!0;n;){var i=[t,r-t];if(e.push(i),(t-=1)<0){n=!1;break}}return e};const _={S:p,K:y};function S(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function A(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?S(Object(t),!0).forEach((function(e){D(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function D(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function E(r){return function(r){if(Array.isArray(r))return k(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return k(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?k(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Z(r){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Z(r)}var T={makeError:function(r){var e=r.message,t=r.variable;try{var n="".concat(e,", ").concat(t.toString());return new Error(n)}catch(r){return r}}},x=function(r){return"number"==typeof r&&!Number.isNaN(r)};T.moldNumArray=function(r){var e=r.array,t=r.negative,n=r.decimal_index;if(!e)return T.makeError({message:"array is not exists",variable:e});if("number"!=typeof n||isNaN(n))return T.makeError({message:"decimal_index is not number",variable:n});try{for(;n<e.length&&0===e[e.length-1];)e.pop();for(;n>1&&0===e[0];)e.shift(),n--;0===e.length&&(e.push(0),n=1);var i={array:e,negative:!!t,is_num_array:!0};return i.decimal_index=0===n||n>0?n:e.length,i}catch(r){return T.makeError({message:r.message,variable:e})}},T.numToArrayWithDecimal=function(r){if(r.is_num_array)return T.clone(r);if("object"===Z(r))return T.makeError({message:"Paremeter is object.",variable:r});if(!r&&0!==r)return T.makeError({message:"Paremeter is undefined, null, or empty.",variable:r});for(var e,t=String(r),n=!1;t&&t[0].match(/^-/);)t=t.replace(/^-/,""),n=!n;var i=t.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=t.match(/\./).index,t=t.replace(/\./,"")):e=t.length;for(var a=[],u=0;u<t.length;u++){var o=Number(t[u]);if(!x(o))return T.makeError("This function has been called with incorrect parameters",o);a.push(o)}return T.moldNumArray({array:a,negative:n,decimal_index:e})}},T.numArrayToString=function(r){if(!r.is_num_array||!r.array||!r.decimal_index)return"";try{var e=E(r.array);e.splice(r.decimal_index,0,".");var t=e.join("");return r.negative&&(t="-".concat(t)),t.replace(/\.$/,"")}catch(r){return""}},T.compare=function(r,e){try{var t={small:null,large:null,equal:!1};if(!r||!e)return t;var n=r,i=e;if(!n.is_num_array&&!(n=T.numToArrayWithDecimal(n)))return t;if(!i.is_num_array&&!(i=T.numToArrayWithDecimal(i)))return t;var a=n.array,u=i.array,o=a.length,s=u.length,l=a.join(""),c=u.join(""),m=n.decimal_index,f=i.decimal_index,g=o-m,v=s-f;if(1===o&&"0"===l&&1===s&&"0"===c)return t.equal=!0,t;if(!n.negative&&i.negative)return t.small=i,t.large=n,t;if(n.negative&&!i.negative)return t.small=n,t.large=i,t;var h=n.negative,d={large:h?i:n,small:h?n:i,equal:!1},p={large:h?n:i,small:h?i:n,equal:!1};if(m>f)return d;if(m<f)return p;for(var y=0;y<m;y++){if(a[y]>u[y])return d;if(a[y]<u[y])return p}for(var b=g>v?g:v,N=0;N<b;N++){var _=a[m+N]?a[m+N]:0,S=u[f+N]?u[f+N]:0;if(_>S)return d;if(_<S)return p}return t.equal=!0,t}catch(t){return this.makeError({message:t.message,variable:[r,e]})}},T.getLarge=function(r,e){return T.compare(r,e).large},T.getSmall=function(r,e){return T.compare(r,e).small},T.isEqual=function(r,e){return!!T.compare(r,e).equal},T.isSmall=function(r,e){return T.isEqual(T.getSmall(r,e),r)},T.isLarge=function(r,e){return T.isEqual(T.getLarge(r,e),r)},T.isZero=function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=T.getZero();return T.isEqual(e,r)},T.isOne=function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=T.getOne();return!!T.isEqual(e,r)},T.getZero=function(){return T.numToArrayWithDecimal("0")},T.getOne=function(){return T.numToArrayWithDecimal("1")},T.fixCarry=function(r,e){try{for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var u=[],o=0,s=0;s<r.length;s++){var l=r[s]+o;if(l>9){var c=String(l).split("");l=Number(c[c.length-1]);var m=c.slice(0,c.length-1);o=Number(m.join(""))}else l>=0&&l<=9?o=0:(l=10+l,o=-1);u.push(l)}return 0!==o&&u.push(o),{new_array:u,minus:t}}catch(t){return T.makeError({message:t.message,variable:[r,e]})}},T.clone=function(r){try{return r?r.is_num_array?A(A({},r),{},{array:E(r.array)}):T.makeError({message:"Paremeter is not compatible",variable:r}):T.makeError({message:"variable is not exists",variable:r})}catch(e){return T.makeError({message:e.message,variable:r})}},T.add_and_subtract=function(r,e,t){if(!(r&&e||0===r||0===e))return T.makeError({message:"variables are not exists",variable:[r,e]});var n;if(t){if("+"===t)n=!0;else{if("-"!==t)return T.makeError({message:"mode must be '+' or '-'.",variable:t});n=!1}try{var i,a=null;i=r.is_num_array?T.clone(r):T.numToArrayWithDecimal(r||0),a=e.is_num_array?T.clone(e):T.numToArrayWithDecimal(e||0);var u=i.array,o=a.array,s=T.isZero(i),l=T.isZero(a);if(s&&l)return i;if(s)return n||(a.negative=!a.negative),a;if(l)return i;var c=i.array.length-i.decimal_index,m=a.array.length-a.decimal_index,f=c-m;f>0?o.push.apply(o,E(Array(f).fill(0))):f<0&&u.push.apply(u,E(Array(Math.abs(f)).fill(0)));var g=function(r){var e=r.a,t=r.b,n=r.plus,i=[],a=e.array.length;e.array.length<t.array.length&&(a=t.array.length);for(var u=e.array,o=t.array,s=e.negative?-1:1,l=t.negative?-1:1,c=0;c<a;c++){var m=u[c]?u[c]*s:0,f=o[c]?o[c]*l:0,g=n?m+f:m-f;i.push(g)}return T.fixCarry(i)}({a:{array:E(u).reverse(),negative:i.negative},b:{array:E(o).reverse(),negative:a.negative},plus:n}),v=g.new_array,h=g.minus,d=c>=m?c:m,p=v.length-d;return T.moldNumArray({array:E(v).reverse(),negative:!!h,decimal_index:p})}catch(t){return T.makeError({message:t.message,variable:[r,e]})}}},T.add=function(r,e){return T.add_and_subtract(r,e,"+")},T.subtract=function(r,e){return T.add_and_subtract(r,e,"-")},T.multiplication=function(r,e){if(!(r&&e||0===r||0===e))return T.makeError({message:"variables is not exists",variable:[r,e]});var t,n;t=r.is_num_array?T.clone(r):T.numToArrayWithDecimal(r||0),n=e.is_num_array?T.clone(e):T.numToArrayWithDecimal(e||0);var i=t.array,a=n.array;if(T.isZero(t)||T.isZero(n))return T.numToArrayWithDecimal("0");if(T.isOne(t))return n;if(T.isOne(n))return t;try{var u,o=t.negative,s=n.negative;u=!(o&&s||!o&&!s);var l=t.array.length-t.decimal_index+(n.array.length-n.decimal_index),c=function(r){for(var e=r.b,t=[],n=r.a.array,i=e.array,a=0;a<n.length;a++){var u=n[a]?n[a]:0,o=new Array(a);o.fill(0,0,a);for(var s=0;s<i.length;s++){var l=u*(i[s]?i[s]:0);o.push(l);var c=a+s,m=t[c];m||(m=0);var f=m+l;t[c]=f}}return T.fixCarry(t)}({a:{array:E(i).reverse(),negative:t.negative},b:{array:E(a).reverse(),negative:n.negative}}),m=c.new_array,f=m.length-l;return T.moldNumArray({array:E(m).reverse(),negative:u,decimal_index:f})}catch(t){return T.makeError({message:t.message,variable:[r,e]})}},T.multiple=function(r,e){return T.multiplication(r,e)},T.getDecimal=function(r){try{var e=T.numToArrayWithDecimal(r),t="0.",n=e.array.length-e.decimal_index;if(n>0)for(var i=e.decimal_index;i<=n;i++)t+=String(e.array[i]);else t+="0";return T.numToArrayWithDecimal(t)}catch(e){return T.makeError({message:e.message,variable:r})}},T.division=function(r,e){try{if(!(r&&e||0===r||0===e))return;var t=null,n=null;if(t=r.is_num_array?T.clone(r):T.numToArrayWithDecimal(r||0),n=e.is_num_array?T.clone(e):T.numToArrayWithDecimal(e||0),T.isZero(n))return;if(T.isZero(t))return A(A({},T.getZero()),{},{remainder:T.getZero()});if(T.isOne(n))return A(A({},t),{},{remainder:T.getZero()});if(T.isEqual(t,n))return A(A({},T.getOne()),{},{remainder:T.getZero()});var i,a=t.negative,u=n.negative;t.negative&&(t.negative=!1),n.negative&&(n.negative=!1),i=!(a&&u||!a&&!u);var o=function(r){var e,t=r.a,n=r.b,i=r.max,a=[],u=T.getZero(),o=T.clone(t),s=T.clone(n),l=t.decimal_index,c=l,m=T.clone(o);m.decimal_index=m.array.length;var f=0,g=o.array.join("").match(/^0+/);g&&g[0]&&(f=g[0].length,m=T.numToArrayWithDecimal(m.array.slice(f,m.array.length).join("")));var v=T.clone(s);v.decimal_index=v.array.length;var h=0,d=v.array.join("").match(/^0+/);d&&d[0]&&(h=d[0].length,v=T.numToArrayWithDecimal(v.array.slice(h,v.array.length).join("")));for(var p=f-h,y=E(m.array),b=o.array.length-o.decimal_index-(s.array.length-s.decimal_index),N=Number(T.add(m.array.length,i).array.join("")),_=m.array.length,S=!1,A=[0],D=0,k=0,Z=0;Z<N;Z++){var x=!0,q=T.getZero(),w=T.multiplication(u,"10"),j=String(1===y.slice(Z,Z+1).length?y.slice(Z,Z+1)[0]:"0");k=(u=T.add(w,j)).array.length-_;var O=T.getZero();if(Z===_){if(l=Z,T.isZero(u))break;S=!0,D=D++}else if(Z>_&&(D=D++,T.isZero(u)))break;for(var P=i;x;){if(q=T.add(q,"1"),T.isLarge(q,P)){x=!1;break}var W=O;if(O=T.multiplication(v,q),T.isEqual(u,O)){x=!1;var M=q;a.push(M),u=T.subtract(u,O);break}if(T.isLarge(O,u)){x=!1;var L=T.subtract(q,"1");a.push(L),u=T.subtract(u,W),S&&A.push(0);break}}}(e=A).push.apply(e,E(u.array));var I=a.flatMap((function(r){return r.array}));if(p>0)for(var C=0;C<p;C++)I.unshift(0),l++;if(b<0)for(var K=0;K<Math.abs(b);K++)I.push(0),l++;else if(b>0)for(var X=0;X<Math.abs(b);X++)I.unshift(0);if(k>0)for(var R=0;R<k;R++)0===A[0]?A.shift():c-=k,A.push(0);else if(k<0){var F,B=Math.abs(k),H=Array(B).fill(0);(F=A).unshift.apply(F,E(H))}return S&&(A=E(A)),{new_array:I,decimal_index:l,remain_array:A,remain_decimal_index:c}}({a:t,b:n,max:T.numToArrayWithDecimal("10")}),s=o.new_array,l=o.decimal_index,c=o.remain_array,m=o.remain_decimal_index,f=T.moldNumArray({array:E(c),negative:i,decimal_index:m});return A(A({},T.moldNumArray({array:E(s),negative:i,decimal_index:l})),{},{remainder:f})}catch(t){return T.makeError({message:t.message,variable:[r,e]})}},T.divide=function(r,e){return T.division(r,e)},T.floor=function(r){try{var e=T.numToArrayWithDecimal(r),t=e.decimal_index<e.array.length,n=e.array.slice(e.decimal_index,e.array.length),i=T.numToArrayWithDecimal(n.join(""));if(T.isZero(i))return e;var a=A(A({},e),{},{array:e.array.slice(0,e.decimal_index)});return e.negative&&t&&(a=T.subtract(a,"1")),a}catch(e){return T.makeError({message:e.messsage,variable:r})}},T.ceil=function(r){try{var e=T.numToArrayWithDecimal(r),t=e.decimal_index<e.array.length,n=e.array.slice(e.decimal_index,e.array.length),i=T.numToArrayWithDecimal(n.join(""));if(T.isZero(i))return e;var a=A(A({},e),{},{array:e.array.slice(0,e.decimal_index)});return!e.negative&&t&&(a=T.add(a,"1")),a}catch(e){return T.makeError({message:e.message,variable:r})}},T.modulo=function(r,e){try{if(!(r&&e||0===r||0===e))return;var t,n;if(t=r.is_num_array?T.clone(r):T.numToArrayWithDecimal(r||0),n=e.is_num_array?T.clone(e):T.numToArrayWithDecimal(e||0),T.isZero(n))return;if(T.isZero(t))return A(A({},T.getZero()),{},{remainder:T.getZero()});var i,a=T.clone(t),u=T.clone(n);if(a.negative=!1,u.negative=!1,T.isLarge(u,a))return T.numToArrayWithDecimal(r);if(T.isEqual(t,n))return A(A({},T.getZero()),{},{remainder:T.getZero()});i=!!t.negative;var o=function(r){var e=r.a,t=r.b,n=T.divide(e,t),i=T.floor(n),a=T.multiple(t,i);return T.subtract(e,a)}({a:A(A({},t),{},{negative:!1}),b:A(A({},n),{},{negative:!1})}),s=T.moldNumArray(A(A({},o),{},{negative:i}));return A({},s)}catch(t){return T.makeError({message:t.message,variable:[r,e]})}};const q=T;var w={getNumber:function(r){return q.numToArrayWithDecimal(r)},copy:function(r){var e=q.clone(r);if(!e){var t=q.numArrayToString(r);return q.numToArrayWithDecimal(t)}return e},getLarge:function(r,e){return q.getLarge(r,e)},getSmall:function(r,e){return q.getSmall(r,e)},isEqual:function(r,e){return q.isEqual(r,e)},getZero:function(){return q.getZero()},getOne:function(){return q.getOne()},isZero:function(r){return q.isZero(r)},isOne:function(r){return q.isOne(r)},square:function(r){return q.multiplication(r,r)},getInteger:function(r){for(var e="",t=0;t<r.decimal_index;t++)e+=String(r.array[t]);return w.getNumber(e)},getDecimal:function(r){return q.getDecimal(r)},isNaturalNumber:function(r){var e=w.getDecimal(r);return!(!w.isZero(e)||r.negative)},includeDecimal:function(r){var e=w.getDecimal(r);return!w.isZero(e)},isNegative:function(r){return q.numToArrayWithDecimal(r).negative},isPositive:function(r){return!q.numToArrayWithDecimal(r).negative},negate:function(r){var e=q.numToArrayWithDecimal(r);return e&&(e.negative=!0),e},makePositive:function(r){var e=q.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNegativeNumber:function(r){return w.negate(r)},getPositiveNumber:function(r){var e=q.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNext:function(r){return q.add(r,"1")},getPrev:function(r){return q.subtract(r,"1")},isInteger:function(r){if(w.isZero(r))return!0;var e=w.getDecimal(r);return!!w.isEqual(e,"0")},isEvenNumber:function(r){if(w.isZero(r))return!0;if(!w.isInteger(r))return!1;var e=q.division(r,"2"),t=w.getDecimal(e);return!!w.isZero(t)},isOddNumber:function(r){if(w.isZero(r))return!1;if(!w.isInteger(r))return!1;var e=q.division(r,"2"),t=w.getDecimal(e);return!!q.isEqual("0.5",t)},getDivisors:function(r){var e=[];if(!r&&0!==r)return e;var t=w.getNumber(r);if(!t)return e;if(q.isZero(t))return e;if(w.isNaturalNumber(t))if(q.isOne(t))e.push(t);else for(var n=q.getOne();q.isEqual(t,n)||q.isLarge(t,n);n=q.add(n,"1")){var i=q.division(t,n);if(w.isNaturalNumber(i)){var a=i.remainder;q.isZero(a)&&e.push(w.getNumber(n))}}return e},commonDivisors:function(r,e){var t=[];if(!r&&0!==r)return t;if(!e&&0!==e)return t;var n=w.getNumber(r),i=w.getNumber(e),a=w.getDivisors(n);if(q.isEqual(n,i))return a;for(var u=w.getDivisors(i),o=0;o<a.length;o++)for(var s=a[o],l=0;l<u.length;l++){var c=u[l];q.isEqual(s,c)&&t.push(s)}return t},greatestCommonDivisor:function(r,e){var t=w.commonDivisors(r,e);return t.length?t[t.length-1]:null},commonMultiple:function(r,e,t){var n=t||10,i=[];if(!r&&0!==r)return i;if(!e&&0!==e)return i;var a=w.getNumber(r),u=w.getNumber(e);if(q.isEqual(a,u))return i.push(a),i;for(var o=[],s=[],l=1;l<=n;l++){var c=q.multiple(a,l);o.push(c)}for(var m=1;m<=n;m++){var f=q.multiple(u,m);s.push(f)}return o.forEach((function(r){var e=s.find((function(e){return q.isEqual(r,e)}));e&&i.push(e)})),i},leastCommonMultiple:function(r,e,t){return w.commonMultiple(r,e,t)[0]}},j=function(r){var e=r.array,t=r.limit||100,n=e.length;return function r(e){if(e.length>=t)return e;for(var i=w.getNumber("0"),a=0;a<n;a++){var u=e[e.length-(n-a)];i=q.add(i,u)}return e.push(i),r(e)}(e)},O=function(r){for(var e=r.first,t=void 0===e?"0":e,n=r.last,i=void 0===n?"1":n,a=r.length,u=void 0===a?2:a,o=w.getNumber(t),s=w.getNumber(i),l=[],c=0;c<u;c++){var m=o;c===u-1&&(m=s),l.push(m)}return l};w.makeFibonacciSequence=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",t=O({first:r,last:e,length:2});return j({array:t,limit:100})},w.makeTribonacciSequence=function(){var r=O({first:"0",last:"1",length:3});return j({array:r,limit:100})},w.makeTetranacciSequence=function(){var r=O({first:"0",last:"1",length:4});return j({array:r,limit:100})},w.makePentanacciSequence=function(){var r=O({first:"0",last:"1",length:5});return j({array:r,limit:100})},w.makeHexanacciSequence=function(){var r=O({first:"0",last:"1",length:6});return j({array:r,limit:100})},w.makeHeptanacciSequence=function(){var r=O({first:"0",last:"1",length:7});return j({array:r,limit:100})},w.makeOctanacciSequence=function(){var r=O({first:"0",last:"1",length:8});return j({array:r,limit:100})},w.makeNonanacciSequence=function(){var r=O({first:"0",last:"1",length:9});return j({array:r,limit:100})},w.makeDecanacciSequence=function(){var r=O({first:"0",last:"1",length:10});return j({array:r,limit:100})},w.makeUndecanacciSequence=function(){var r=O({first:"0",last:"1",length:11});return j({array:r,limit:100})},w.makeDodecanacciSequence=function(){var r=O({first:"0",last:"1",length:12});return j({array:r,limit:100})},w.makeIcosanacciSequence=function(){var r=O({first:"0",last:"1",length:20});return j({array:r,limit:100})},w.makeLucaSequence=function(){var r=O({first:"2",last:"1",length:2});return j({array:r,limit:100})},w.summation=function(r){var e=r.array,t=w.getNumber("0");if(Array.isArray(e))for(var n=0;n<e.length;n++)t=q.add(t,e[n]);return t},w.infiniteProduct=function(r){var e=r.array,t=e[0];if(Array.isArray(e))for(var n=1;n<e.length;n++)t=q.multiple(t,e[n]);return t},w.digitSum=function(r){var e=w.getNumber(r),t=w.getNumber("0");return e.array.forEach((function(r){t=q.add(t,r)})),t},w.makeTriangleNumber=function(r){var e=w.getNumber(r);if(q.isZero(e))return null;if(w.isNegative(e))return null;var t=q.multiple(e,q.add(r,"1"));return q.divide(t,"2")},w.makePronicNumber=function(r){var e=w.getNumber(r);return q.isZero(e)||w.isNegative(e)?null:w.isInteger(e)?q.multiple(e,q.add(r,"1")):null},w.factorial=function(r){var e=w.getNumber(r);if(q.isZero(e))return q.getZero();if(w.isNegative(e))return null;if(!w.isInteger(e))return null;if(q.isOne(e))return q.getOne();for(var t=!0,n=e,i=[e];t;){var a=q.subtract(n,"1");if(i.push(a),n=a,q.isSmall(n,"2")){t=!1;break}}return w.infiniteProduct({array:i})};const P=w;var W={commonMultiple:{ja:"公倍数"},greatestCommonDivisor:{ja:"最大公約数"},commonDivisors:{ja:"公約数"},makeFibonacciSequence:{ja:"フィボナッチ数列"},summation:{ja:"総和"},infiniteProduct:{ja:"総乗/総積"},digitSum:{ja:"数字和/各桁の総和"},makeTriangleNumber:{ja:"三角数"},makePronicNumber:{ja:"矩形数"},factorial:{ja:"階乗"}};const M={s:d,S:_.S,K:_.K,core:n,core2:q,utils:P,doc:function(r){var e=r.name,t=void 0===e?"":e,n=r.lang,i=void 0===n?"ja":n;if(!t)return"";if(!P[t])return"";var a=W[t];if(a&&a[i])return a[i];var u=Object.keys(a)[0];return u?a[u]:""}};return e.default})()));