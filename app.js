!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},e={};r.d(e,{default:()=>O});var t={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],n=String(r),i=n.length,a=0;a<i;a++){var u=Number(n.slice(a,a+1));if(!t.isNumber(u))throw new Error("This function has been called with incorrect parameters");e.push(u)}return e},numToArrayWithDecimal:function(r){for(var e=[],n=[],i=String(r),a=i.length,u=e,o=0;o<a;o++){var l=Number(i[o]);if(!t.isNumber(l)){if("."!==l||u!==e)throw new Error("This function has been called with incorrect parameters");u=n}u.push(l)}return[].concat(e,[".",n])},numToArrayWithDecimal2:function(r){var e=String(r),n=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),n=!0);for(var i=e.split(""),a=[],u=[],o=!0,l=!1,s=0;s<i.length;s++){var c=Number(i[s]),f=t.isNumber(c);if(f||"."!==i[s]){if(!f)throw new Error("This function has been called with incorrect parameters");o&&0===c&&!l||(o=!1,l?u.push(n?-c:c):a.push(n?-c:c))}else l=!0}for(var m=u.length-1;m>=0&&0===u[m];m--)u.pop();return{int:a,decimal:u,negative:n}},numToArrayWithDecimal3:function(r){for(var e=String(r),n=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),n=!n;var i=null,a=e.match(/\./g);if(!(a&&a.length>1)){a&&1===a.length&&(i=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,i);for(var u=[],o=0,l=0;l<e.length;l++){var s=Number(e[l]);if(!t.isNumber(s))throw new Error("This function has been called with incorrect parameters");0===s&&i>l?o++:u.push(s)}for(i-=o;0===u[u.length-1];)u.pop();var c={array:u,negative:n};return(0===i||i>0)&&(c.decimal_index=i),c}},compare:function(r,e){if(r&&e){var n,i;if(n=r instanceof Array?r:t.numToArrayWithDecimal2(r),i=e instanceof Array?e:t.numToArrayWithDecimal2(e),0===n[0]){for(var a=[],u=!0,o=0;o<n.length;o++){var l=n[o];0===l&&u||(a.push(l),u=!1)}n=a}if(0===i[0]){for(var s=[],c=!0,f=0;f<i.length;f++){var m=i[f];0===m&&c||(s.push(m),c=!1)}i=s}var g={equal:!1,large:null,small:null};if(n.length>n.length)return g.large=r,g.small=e,g;if(n.length<n.length)return g.large=e,g.small=r,g;for(var v=0;v<n.length;v++){var h=n[v],p=i[v];if(h>p)return g.large=r,g.small=e,g;if(h<p)return g.large=e,g.small=r,g}return g.equal=!0,g}},getLarge:function(r,e){var n=t.numToArrayWithDecimal2(r),i=t.numToArrayWithDecimal2(e),a=!1;if(n.negative&&!i.negative)return e;if(!n.negative&&i.negative)return r;n.negative&&i.negative&&(a=!0);var u=t.compare(n.int,i.int);if(u.large===n.int)return a?e:r;if(u.large===i.int)return a?r:e;if(n.decimal.length<i.decimal.length)for(var o=i.decimal.length-n.decimal.length,l=0;l<o;l++)n.decimal.push(0);else if(n.decimal.length>i.decimal.length)for(var s=n.decimal.length-i.decimal.length,c=0;c<s;c++)i.decimal.push(0);var f=t.compare(n.decimal,i.decimal);return f.large===n.decimal?a?e:r:f.large===i.decimal?a?r:e:void 0},getSmall:function(r,e){var n=t.getLarge(r,e);return n===r?e:n===e?r:void 0},isEqual:function(r,e){return!!t.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!t.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var u=[],o=0,l=0;l<r.length;l++){var s=r[l]+o;s>9?(s-=10,o=1):s>=0&&s<=9?o=0:(s=10+s,o=-1),u.push(s)}return 0!==o&&u.push(o),console.log(u),console.log("minus",t),{new_array:u,minus:t}},add_and_subtract:function(r,e,n){if((r||e)&&n){var i;if("+"===n)i=!0;else{if("-"!==n)return;i=!1}var a=t.numToArrayWithDecimal2(r),u=t.numToArrayWithDecimal2(e),o=a.int,l=u.int,s=a.decimal,c=u.decimal,f=(a.negative,u.negative,s.length);f<c.length&&(f=c.length);for(var m=0;m<f;m++){var g=s[m],v=c[m];t.isNumber(g)||s.push(0),t.isNumber(v)||c.push(0)}var h,p,d,y=function(r,e,n){var i=[],a=r,u=e;r.length<e.length&&(a=e,u=r);for(var o=0;o<a.length;o++){var l=a[o]?a[o]:0,s=u[o]?u[o]:0,c=n?l+s:l-s;i.push(c)}return t.fixCarry(i)},b=(h=s.length<c.length?c.legth:s.length,d=0,(p=y(s.reverse(),c.reverse(),i)).new_array.length>h&&(d=p.new_array.pop()),{dec_arr:p.new_array,dec_carry:d,dec_minus:p.minus}),N=b.dec_arr,_=b.dec_carry,A=b.dec_minus,D=function(r){var e=y(o.reverse(),l.reverse(),i);return 0!==r&&(e=y(e.new_array,[r],!0)),{int_arr:e.new_array}}(_),S=D.int_arr;return console.log(S),console.log(N,_,A),{int:S.reverse(),decimal:N.reverse()}}},add:function(r,e){t.numToArrayWithDecimal2(r),t.numToArrayWithDecimal2(e),t.getLarge(r,e)}};const n=t;var i="Not a number",a="Argument is not Su.",u=function(r,e){if(isNaN(r))throw new Error(i);r||(r=0),e||(e={});var t=String(r),a=!1;"-"===t[0]&&(t=t.slice(1,t.length),a=!0),!a&&e&&e.negative&&(a=!0),isNaN(Number(t))&&(t="0"),"0"===t&&(a=!1);var u,o,l=t.split("."),s=l[0],c=l[1];if(s){var f=s.match(/0/g);f&&f.length===s.length&&(s="0");for(var m="",g=!0,v=0;v<s.length;v++)"0"===s[v]&&g||(g=!1,m+=s[v]);s=m||"0"}if(c){var h=c.match(/0/g);h&&h.length===c.length&&(c="0");for(var p=!0,d="",y=c.length-1;y>=0;y--)"0"===c[y]&&p||(p=!1,d=c[y]+d);c=d||"0"}try{u=n.numToArray(s),o=c?n.numToArray(c):[0]}catch(r){throw new Error(i)}this.integer=u,this.decimal=o,this.negative=!!a;for(var b=[1],N=0;N<this.decimal.length;N++)b.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:b}},o=function(r,e){var t;try{t=new u(r,e)}catch(r){t=r.message}return t},l=function(r){if(r instanceof u)return!0},s=function(r){var e=r.getString();return o(e)},c={ZERO:o(0),ONE:o(1),FIRST_PRIME_NUMBER:o(2),MAX:o(1e4),MIN:o(-1e4)};u.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},u.prototype.getNumber=function(){return Number(this.getString())},u.prototype.getInteger=function(){return Number(this.integer.join(""))},u.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},u.prototype.clone=function(){var r=this.getString();return o(r)};var f=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1,i=[],a=o(r.getString()),u=o(e.getString());if(t&&(a.negative=!1,u.negative=!1),!a.isZero()||!u.isZero()){if(!a.negative&&u.negative)return r;if(a.negative&&!u.negative)return e;if(a.negative&&u.negative&&(n=!0),a.integer.length>u.integer.length)return n?e:r;if(a.integer.length<u.integer.length)return n?r:e;for(var l=0;l<a.integer.length;l++){var s=a.integer[l],c=u.integer[l];if(s>c){i=[r,e];break}if(s<c){i=[e,r];break}}if(0===i.length)for(var f=a.decimal.length>=u.decimal.length?a.decimal.length:u.decimal.length,m=0;m<f;m++){var g=a.decimal[m]?a.decimal[m]:0,v=u.decimal[m]?u.decimal[m]:0;if(g>v){i=[r,e];break}if(g<v){i=[e,r];break}}return n&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};u.prototype.isEqual=function(r){if(!l(r))return!1;var e=this.clone(),t=r.clone(),n=e.integer,i=t.integer,a=e.decimal,u=t.decimal;if(f(e,t))return!1;if(n.length===i.length){for(var o=0;o<n.length;o++)if(n[o]!==i[o])return!1}else{if(a.length!==u.length)return!1;for(var s=0;s<a.length;s++)if(a[s]!==u[s])return!1}return e.negative===t.negative},u.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},u.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},u.prototype.isLarge=function(r){if(!l(r))return!1;var e=this.clone(),t=r.clone(),n=f(e,t);return!!n&&n.getString()===e.getString()},u.prototype.isSmall=function(r){if(!l(r))return!1;var e=this.clone(),t=r.clone(),n=f(e,t);return!!n&&n.getString()===t.getString()},u.prototype.isInteger=function(){return!this.containDecimal()},u.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(c.ZERO))},u.prototype.isNegative=function(){return!!this.negative},u.prototype.isPositive=function(){return!this.negative},u.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},u.prototype.add=function(r){if(!l(r))throw new Error(a);var e,t=this.clone(),n=r.clone();if(t.isZero())return n;if(n.isZero())return t;if(t.negative&&n.negative)e=!0;else if(t.negative||n.negative){if(!t.negative&&n.negative)return n.makePositive(),t.subtract(n);if(t.negative&&!n.negative)return t.makePositive(),n.subtract(t)}else e=!1;var i=f(t,n);i||(i=t);var u,s,c=i.integer,m=i.decimal;i===t?(u=n.integer,s=n.decimal):(u=t.integer,s=t.decimal);var g=c.length,v=m.length;s.length>m.length&&(v=s.length);for(var h=0,p=[],d=[],y=v-1;y>=0;y--){var b=void 0;(b=(m[y]||0)+(s[y]||0)+h)>=10?(h=1,b-=10):h=0,d.unshift(b)}for(var N=d.length-1;N>=0&&0===d[N];N--)d.pop();for(var _=g-u.length,A=g-1;A>=0;A--){var D=void 0;(D=c[A]+(u[A-_]||0)+h)>=10?(h=1,D-=10):h=0,p.unshift(D)}h>0&&p.unshift(h);var S=o(p.join("")+"."+d.join(""),{negative:e});return S.isZero()&&S.negative&&S.makePositive(),S},u.prototype.subtract=function(r){if(!l(r))throw new Error(a);var e=s(this),t=s(r);if(r.isZero())return e;if(this.isZero())return t.negate();if(e.negative!==t.negative)return t.negative=!t.negative,e.add(t);var n=e.negative;f(e,t,!0)!==e&&(t=this,n=!(e=r).negative);var i=e.integer.concat(e.decimal),u=t.integer.concat(t.decimal),c=e.integer.length,m=t.integer.length,g=e.decimal.length,v=t.decimal.length,h=Math.abs(g-v),p=0,d=0;if(p+=c>m?c:m,g>v){d+=g;for(var y=0;y<h;y++)u.push(0)}else{d+=v;for(var b=0;b<h;b++)i.push(0)}for(var N=0,_=[],A=0;A<p+d;A++){var D=i.length-1-A,S=u.length-1-A,Z=(i[D]?i[D]:0)-N,T=u[S]?u[S]:0;Z>=T?(N=0,_.unshift(Z-T)):(N=1,_.unshift(10*N+Z-T))}_.splice(_.length-d,0,".");var E=o((n?"-":"")+_.join(""));return E.isZero()&&E.negative&&E.makePositive(),E},u.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},u.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},u.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},u.prototype.multiplication=function(r){if(!l(r))throw new Error(a);var e=s(this),t=s(r);if(e.isZero()||t.isZero())return o(0);var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=e.integer.concat(e.decimal),u=t.integer.concat(t.decimal),c=e.integer.length,f=t.integer.length,m=[],g=0;g<i.length;g++)for(var v=0;v<u.length;v++){var h=c-g-1+(f-v-1),p=i[g]*u[v],d=Math.abs(h),y=void 0;h>=0?(d++,y=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):y=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),m.push(o(y))}for(var b=o(0),N=0;N<m.length;N++)b=b.add(m[N]);return b.negative=n,b},u.prototype.division=function(r){if(!l(r))throw new Error(a);var e=s(this),t=s(r);if(e.isZero()&&t.isZero())return i;if(e.isZero())return o(0);if(t.isZero())return"Division by Zero";var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var u=o(0),c=o(0);e.isLarge(c)||e.isEqual(c);)u=u.add(o(1)),c=t.multiplication(u);u=u.subtract(o(1)),c=c.subtract(t);var f=e.subtract(c),m=u;return m.remainder=f,m.negative=n,m},u.prototype.plus=function(r){return this.add(r)},u.prototype.tasu=function(r){return this.add(r)},u.prototype.minus=function(r){return this.subtract(r)},u.prototype.hiku=function(r){return this.subtract(r)},u.prototype.multiply=function(r){return this.multiplication(r)},u.prototype.kakeru=function(r){return this.multiplication(r)},u.prototype.waru=function(r){return this.division(r)},u.prototype.next=function(){return this.add(o(1))},u.prototype.prev=function(){return this.subtract(o(1))},u.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(o(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},u.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(o(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},u.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(o(e));e++){var t=o(e);this.division(t).remainder.isZero()&&r.push(t)}return r.push(this),r},u.prototype.getCommonDivisors=function(r){l(r)||(r=o(r));var e=r,t=this.getDivisors();if(this.isEqual(e))return t;for(var n=e.getDivisors(),i=[],a=0;a<t.length;a++)for(var u=t[a],s=0;s<n.length;s++){var c=n[s];u.isEqual(c)&&i.push(u)}return i},u.prototype.getMaxCommonDivisor=function(r){l(r)||(r=o(r));var e=this.getCommonDivisors(r);return e[e.length-1]},u.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=o("1");e.isSmall(c.MAX)||e.isEqual(c.MAX);)r.push(this.multiplication(e)),e=e.add(o("1"));return r},u.prototype.getLeastCommonMultiple=function(r){l(r)||(r=o(r));var e=r,t=this.getMaxCommonDivisor(e);return this.multiply(e).division(t)};var m=function(r,e){if(!l(r)||!l(e))return!1;var t=c.MAX;return function r(e){if(e[e.length-1].isLarge(t))return e;var n=e[e.length-2],i=e[e.length-1],a=n.add(i);return e.push(a),r(e)}([r,e])};u.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=o(0),t=o(1),n=m(e,t),i=0;i<n.length;i++)if(n[i].isEqual(r))return!0;return!1},u.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=m(o(2),o(1)),e=0;e<r.length;e++)if(r[e].isEqual(this))return!0;return!1};var g=function(r,e){var t=[r];if(!e)return t;for(var n=0;n<e.length;n++){var i=e[n];l(i)||(i=o(i)),t.push(i)}return t};u.prototype.getSequence=function(){return g(this,arguments)},u.prototype.summation=function(){for(var r=g(this,arguments),e=o(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},u.prototype.infiniteProduct=function(){for(var r=g(this,arguments),e=r[0],t=1;t<r.length;t++)e=e.multiplication(r[t]);return e},u.prototype.digitsum=function(){for(var r=o(0),e=0;e<this.integer.length;e++){var t=o(this.integer[e]);r=r.add(t)}return r},u.prototype.square=function(){return this.exponentiate(o(2))},u.prototype.cube=function(){return this.exponentiate(o(3))},u.prototype.exponentiate=function(r){var e=o("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var t=e,n=s(this);t.isSmall(r);)n=this.multiplication(n),t=t.next();return n},u.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(o(1)),e=o(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(o(1))}return!0},u.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=o(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},u.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(o(2)))},u.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(o(2)))},u.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},u.prototype.factorial=function(){for(var r=this,e=this.subtract(o(1)),t=o(0);e.isLarge(t);)r=r.multiplication(e),e=e.subtract(o(1));return r};var v=function(r,e){if(l(r)){if(r.isSmall(o(3)))return[];var t=o(1),n=[],i=t;e=e?e.next():c.MAX;for(var a=r.subtract(o(2));t.isSmall(e);)n.push(t),i=i.add(a),t=t.add(i);return n}};u.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,v(o(3),r)).find((function(r){return r.isEqual(e)}))},u.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,v(o(4),r)).find((function(r){return r.isEqual(e)}))};var h=function(r){r=r?r.next():c.MAX;for(var e=o(2),t=[],n=o(0),i=o(1);n.isSmall(r);)n=e.exponentiate(i).subtract(o(1)),t.push(n),i=i.add(o(1));return t};u.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=h(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1},u.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():c.MAX;for(var e=h(r),t=[],n=0;n<e.length;n++){var i=e[n];i.isPrimeNumber()&&t.push(i)}return t}(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1};const p={makeSu:o,copySu:s,isSu:l,Su:u};var d={},y={},b=p.makeSu,N=p.isSu;y.random=function(r,e){void 0===r&&(r=b(0)),void 0===e&&(e=b(1)),N(r)||(r=b(r)),N(e)||(e=b(e));var t,n=String(Math.random());if("0"===n)t=r.isZero()?b(0):r;else{var i=n.split(".");t=b("0."+i[1]).multiplication(e)}return t},y.randomElement=function(r){return r[y.random(0,r.length).integer]},y.randomInt=function(r,e){if(!N(r)||!N(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var t=[],n=r.getNumber();n<=e.getNumber();n++){var i=b(n);t.push(i)}return y.randomElement(t)},y.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString())),r||(r=100),r>100&&(r=100);for(var e=[],t=2;t<r;t++){var n=b(t);n.isPrimeNumber()&&e.push(n)}return e},y.euclideanAlgorithm=function(r,e){if(!d.isNumber(r)||!d.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var t;r<e&&(t=r,r=e,e=t);for(var n,i,a=r,u=e;0!==n;){if(0==(n=a%u)){i=u;break}if(1===n){i="coprime";break}0,a=u,u=n}return i},y.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var t=0,n=0;n<r.length;n++){var i=r[n];if(!d.isNumber(i))return"Argument is not Number";t+=i}return t},y.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var t=1,n=0;n<r.length;n++){var i=r[n];if(!d.isNumber(i))return"Argument is not a Number";t*=i}return t},y.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var t=r/e;return{integer:{remainder:r%e,result:Math.floor(t)},realNumber:t}},y.divisorsSummation=function(r){for(var e=y.divisors(r),t=0,n=0;n<e.length;n++)t+=e[n];return t},y.isAbundantNumber=function(r){return y.divisorsSummation(r)>2*r},y.isKaprekarNumberTypeA=function(r){var e,t=String(r*r),n=t.length,i=0;return e=d.isOddNumber(n)?1+(i=(n-1)/2):i=n/2,Number(t.substr(0,i))+Number(t.substr(i,e))===r},y.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),t=Number(e.sort().join(""));return Number(e.reverse().join(""))-t===r},y.isKaprekarNumber=function(r){if(y.isKaprekarNumberTypeA(r)||y.isKaprekarNumberTypeB(r))return!0},d.isInteger=function(r){return Math.floor(r)===r},y.harmonicMean=function(r){for(var e=r.length,t=0,n=0;n<e;n++)t+=1/r[n];return e/t},y.isHarmonicDivisorNumber=function(r){var e=y.divisors(r),t=y.harmonicMean(e);return!!d.isInteger(t)},d.isNaturalNumber=function(r){if(r>0&&d.isInteger(r))return!0},y.collatzhProblem=function(r){for(var e,t,n=[];r>1;)t=void 0,t=e=r,d.isOddNumber(e)?t=3*e+1:d.isEvenNumber(e)&&(t=e/2),r=t,n.push(r);return n},y.fermatTest=function(r,e){if(!d.isInteger(r)||d.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var t=1;t<=e;t++){var n=y.randomInt(2,r-1);if(1!==y.maxCommonDivisor(n,r))return"Composit Number";if(1!=Math.pow(n,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},y.getIncludesNumbers=function(r){for(var e=[],t=r,n=!0;n;){var i=[t,r-t];if(e.push(i),(t-=1)<0){n=!1;break}}return e};const _={S:d,K:y};function A(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function D(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?A(Object(t),!0).forEach((function(e){S(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function S(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Z(r){return function(r){if(Array.isArray(r))return T(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return T(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function E(r){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},E(r)}var x={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},moldNumArray:function(r){for(var e=r.array,t=r.negative,n=r.decimal_index;n<e.length&&0===e[e.length-1];)e.pop();for(;n>1&&0===e[0];)e.shift(),n--;0===e.length&&(e.push(0),n=1);var i={array:e,negative:t,is_num_array:!0};return i.decimal_index=0===n||n>0?n:e.length,i},numToArrayWithDecimal:function(r){if(r.is_num_array)return x.clone(r);if("object"===E(r))return console.log("Paremeter is object.",r);for(var e,t=String(r),n=!1;t&&t[0].match(/^-/);)t=t.replace(/^-/,""),n=!n;var i=t.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=t.match(/\./).index,t=t.replace(/\./,"")):e=t.length;for(var a=[],u=0;u<t.length;u++){var o=Number(t[u]);if(!x.isNumber(o))throw new Error("This function has been called with incorrect parameters");a.push(o)}return x.moldNumArray({array:a,negative:n,decimal_index:e})}},numArrayToString:function(r){if(!r.is_num_array||!r.array||!r.decimal_index)return"";var e=Z(r.array);e.splice(r.decimal_index,0,".");var t=e.join("");return r.negative&&(t="-".concat(t)),t.replace(/\.$/,"")},compare:function(r,e){var t={small:null,large:null,equal:!1};if(!r||!e)return t;var n=r,i=e;if(!n.is_num_array&&!(n=x.numToArrayWithDecimal(n)))return t;if(!i.is_num_array&&!(i=x.numToArrayWithDecimal(i)))return t;var a=n.array,u=i.array,o=a.length,l=u.length,s=a.join(""),c=u.join(""),f=n.decimal_index,m=i.decimal_index,g=o-f,v=l-m;if(1===o&&"0"===s&&1===l&&"0"===c)return t.equal=!0,t;if(!n.negative&&i.negative)return t.small=i,t.large=n,t;if(n.negative&&!i.negative)return t.small=n,t.large=i,t;var h=n.negative,p={large:h?i:n,small:h?n:i,equal:!1},d={large:h?n:i,small:h?i:n,equal:!1};if(f>m)return p;if(f<m)return d;for(var y=0;y<f;y++){if(a[y]>u[y])return p;if(a[y]<u[y])return d}for(var b=g>v?g:v,N=0;N<b;N++){var _=a[f+N]?a[f+N]:0,A=u[m+N]?u[m+N]:0;if(_>A)return p;if(_<A)return d}return t.equal=!0,t},getLarge:function(r,e){return x.compare(r,e).large},getSmall:function(r,e){return x.compare(r,e).small},isEqual:function(r,e){return!!x.compare(r,e).equal},isSmall:function(r,e){return x.isEqual(x.getSmall(r,e),r)},isLarge:function(r,e){return x.isEqual(x.getLarge(r,e),r)},isZero:function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=x.getZero();return x.isEqual(e,r)},isOne:function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=x.numToArrayWithDecimal("1");return x.isEqual(e,r)},getZero:function(){return x.numToArrayWithDecimal("0")},getOne:function(){return x.numToArrayWithDecimal("1")},fixCarry:function(r,e){for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var u=[],o=0,l=0;l<r.length;l++){var s=r[l]+o;if(s>9){var c=String(s).split("");s=Number(c[c.length-1]);var f=c.slice(0,c.length-1);o=Number(f.join(""))}else s>=0&&s<=9?o=0:(s=10+s,o=-1);u.push(s)}return 0!==o&&u.push(o),{new_array:u,minus:t}},clone:function(r){return r.is_num_array?D(D({},r),{},{array:Z(r.array)}):null},add_and_subtract:function(r,e,t){var n;if((r&&e||0===r||0===e)&&t){if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i,a=null;i=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),a=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0);var u=i.array,o=a.array,l=x.isZero(i),s=x.isZero(a);if(l&&s)return i;if(l)return n||(a.negative=!a.negative),a;if(s)return i;var c=i.array.length-i.decimal_index,f=a.array.length-a.decimal_index,m=c-f;m>0?o.push.apply(o,Z(Array(m).fill(0))):m<0&&u.push.apply(u,Z(Array(Math.abs(m)).fill(0)));var g=function(r){var e=r.a,t=r.b,n=r.plus,i=[],a=e.array.length;e.array.length<t.array.length&&(a=t.array.length);for(var u=e.array,o=t.array,l=e.negative?-1:1,s=t.negative?-1:1,c=0;c<a;c++){var f=u[c]?u[c]*l:0,m=o[c]?o[c]*s:0,g=n?f+m:f-m;i.push(g)}return x.fixCarry(i)}({a:{array:Z(u).reverse(),negative:i.negative},b:{array:Z(o).reverse(),negative:a.negative},plus:n}),v=g.new_array,h=g.minus,p=c>=f?c:f,d=v.length-p;return x.moldNumArray({array:Z(v).reverse(),negative:!!h,decimal_index:d})}},add:function(r,e){return x.add_and_subtract(r,e,"+")},subtract:function(r,e){return x.add_and_subtract(r,e,"-")},multiplication:function(r,e){if(r&&e||0===r||0===e){var t,n;t=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),n=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0);var i=t.array,a=n.array;if(x.isZero(t)||x.isZero(n))return x.numToArrayWithDecimal("0");if(x.isOne(t))return n;if(x.isOne(n))return t;var u,o=t.negative,l=n.negative;u=!(o&&l||!o&&!l);var s=t.array.length-t.decimal_index+(n.array.length-n.decimal_index),c=function(r){for(var e=r.b,t=[],n=r.a.array,i=e.array,a=0;a<n.length;a++){var u=n[a]?n[a]:0,o=new Array(a);o.fill(0,0,a);for(var l=0;l<i.length;l++){var s=u*(i[l]?i[l]:0);o.push(s);var c=a+l,f=t[c];f||(f=0);var m=f+s;t[c]=m}}return x.fixCarry(t)}({a:{array:Z(i).reverse(),negative:t.negative},b:{array:Z(a).reverse(),negative:n.negative}}),f=c.new_array,m=f.length-s;return x.moldNumArray({array:Z(f).reverse(),negative:u,decimal_index:m})}},multiple:function(r,e){return x.multiplication(r,e)},getDecimal:function(r){var e=x.numToArrayWithDecimal(r),t="0.",n=e.array.length-e.decimal_index;if(n>0)for(var i=e.decimal_index;i<=n;i++)t+=String(e.array[i]);else t+="0";return x.numToArrayWithDecimal(t)},division:function(r,e){if(r&&e||0===r||0===e){var t=null,n=null;if(t=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),n=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0),!x.isZero(n)){if(x.isZero(t))return D(D({},x.getZero()),{},{remainder:x.getZero()});if(x.isOne(n))return D(D({},t),{},{remainder:x.getZero()});if(x.isEqual(t,n))return D(D({},x.getOne()),{},{remainder:x.getZero()});var i,a=t.negative,u=n.negative;t.negative&&(t.negative=!1),n.negative&&(n.negative=!1),i=!(a&&u||!a&&!u);var o=function(r){var e,t=r.a,n=r.b,i=r.max,a=[],u=x.getZero(),o=x.clone(t),l=x.clone(n),s=t.decimal_index,c=s,f=x.clone(o);f.decimal_index=f.array.length;var m=0,g=o.array.join("").match(/^0+/);g&&g[0]&&(m=g[0].length,f=x.numToArrayWithDecimal(f.array.slice(m,f.array.length).join("")));var v=x.clone(l);v.decimal_index=v.array.length;var h=0,p=v.array.join("").match(/^0+/);p&&p[0]&&(h=p[0].length,v=x.numToArrayWithDecimal(v.array.slice(h,v.array.length).join("")));for(var d=m-h,y=Z(f.array),b=o.array.length-o.decimal_index-(l.array.length-l.decimal_index),N=Number(x.add(f.array.length,i).array.join("")),_=f.array.length,A=!1,D=[0],S=0,T=0,E=0;E<N;E++){var w=!0,q=x.getZero(),O=x.multiplication(u,"10"),W=String(1===y.slice(E,E+1).length?y.slice(E,E+1)[0]:"0");T=(u=x.add(O,W)).array.length-_;var j=x.getZero();if(E===_){if(s=E,x.isZero(u))break;A=!0,S=S++}else if(E>_&&(S=S++,x.isZero(u)))break;for(var k=i;w;){if(q=x.add(q,"1"),x.isLarge(q,k)){w=!1;break}var P=j;if(j=x.multiplication(v,q),x.isEqual(u,j)){w=!1;var M=q;a.push(M),u=x.subtract(u,j);break}if(x.isLarge(j,u)){w=!1;var L=x.subtract(q,"1");a.push(L),u=x.subtract(u,P),A&&D.push(0);break}}}(e=D).push.apply(e,Z(u.array));var I=a.flatMap((function(r){return r.array}));if(d>0)for(var C=0;C<d;C++)I.unshift(0),s++;if(b<0)for(var K=0;K<Math.abs(b);K++)I.push(0),s++;else if(b>0)for(var X=0;X<Math.abs(b);X++)I.unshift(0);if(T>0)for(var R=0;R<T;R++)0===D[0]?D.shift():c-=T,D.push(0);else if(T<0){var B,F=Math.abs(T),U=Array(F).fill(0);(B=D).unshift.apply(B,Z(U))}return A&&(D=Z(D)),{new_array:I,decimal_index:s,remain_array:D,remain_decimal_index:c}}({a:t,b:n,max:x.numToArrayWithDecimal("10")}),l=o.new_array,s=o.decimal_index,c=o.remain_array,f=o.remain_decimal_index,m=x.moldNumArray({array:Z(c),negative:i,decimal_index:f});return D(D({},x.moldNumArray({array:Z(l),negative:i,decimal_index:s})),{},{remainder:m})}}},divide:function(r,e){return x.division(r,e)},floor:function(r){var e=x.numToArrayWithDecimal(r),t=e.decimal_index<e.array.length,n=e.array.slice(e.decimal_index,e.array.length),i=x.numToArrayWithDecimal(n.join(""));if(x.isZero(i))return e;var a=D(D({},e),{},{array:e.array.slice(0,e.decimal_index)});return e.negative&&t&&(a=x.subtract(a,"1")),a},ceil:function(r){var e=x.numToArrayWithDecimal(r),t=e.decimal_index<e.array.length,n=e.array.slice(e.decimal_index,e.array.length),i=x.numToArrayWithDecimal(n.join(""));if(x.isZero(i))return e;var a=D(D({},e),{},{array:e.array.slice(0,e.decimal_index)});return!e.negative&&t&&(a=x.add(a,"1")),a},modulo:function(r,e){if(r&&e||0===r||0===e){var t,n;if(t=r.is_num_array?x.clone(r):x.numToArrayWithDecimal(r||0),n=e.is_num_array?x.clone(e):x.numToArrayWithDecimal(e||0),!x.isZero(n)){if(x.isZero(t))return D(D({},x.getZero()),{},{remainder:x.getZero()});var i,a=x.clone(t),u=x.clone(n);if(a.negative=!1,u.negative=!1,x.isLarge(u,a))return x.numToArrayWithDecimal(r);if(x.isEqual(t,n))return D(D({},x.getZero()),{},{remainder:x.getZero()});i=!!t.negative;var o=function(r){var e=r.a,t=r.b,n=x.divide(e,t),i=x.floor(n),a=x.multiple(t,i);return x.subtract(e,a)}({a:D(D({},t),{},{negative:!1}),b:D(D({},n),{},{negative:!1})}),l=x.moldNumArray(D(D({},o),{},{negative:i}));return D({},l)}}}};const w=x;var q={getNumber:function(r){return w.numToArrayWithDecimal(r)},copy:function(r){var e=w.clone(r);if(!e){var t=w.numArrayToString(r);return w.numToArrayWithDecimal(t)}return e},getLarge:function(r,e){return w.getLarge(r,e)},getSmall:function(r,e){return w.getSmall(r,e)},isEqual:function(r,e){return w.isEqual(r,e)},getZero:function(){return w.getZero()},getOne:function(){return w.getOne()},isZero:function(r){return w.isZero(r)},isOne:function(r){return w.isOne(r)},square:function(r){return w.multiplication(r,r)},getInteger:function(r){for(var e="",t=0;t<r.decimal_index;t++)e+=String(r.array[t]);return q.getNumber(e)},getDecimal:function(r){return w.getDecimal(r)},isNaturalNumber:function(r){var e=q.getDecimal(r);return!(!q.isZero(e)||r.negative)},includeDecimal:function(r){var e=q.getDecimal(r);return!q.isZero(e)},isNegative:function(r){return w.numToArrayWithDecimal(r).negative},isPositive:function(r){return!w.numToArrayWithDecimal(r).negative},negate:function(r){var e=w.numToArrayWithDecimal(r);return e&&(e.negative=!0),e},makePositive:function(r){var e=w.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNegativeNumber:function(r){return q.negate(r)},getPositiveNumber:function(r){var e=w.numToArrayWithDecimal(r);return e&&(e.negative=!1),e},getNext:function(r){return w.add(r,"1")},getPrev:function(r){return w.subtract(r,"1")},isInteger:function(r){if(q.isZero(r))return!0;var e=q.getDecimal(r);return!!q.isEqual(e,"0")},isEvenNumber:function(r){if(q.isZero(r))return!0;if(!q.isInteger(r))return!1;var e=w.division(r,"2"),t=q.getDecimal(e);return!!q.isZero(t)},isOddNumber:function(r){if(q.isZero(r))return!1;if(!q.isInteger(r))return!1;var e=w.division(r,"2"),t=q.getDecimal(e);return!!w.isEqual("0.5",t)},getDivisors:function(r){var e=[];if(!r&&0!==r)return e;var t=q.getNumber(r);if(!t)return e;if(w.isZero(t))return e;if(q.isNaturalNumber(t))if(w.isOne(t))e.push(t);else for(var n=w.getOne();w.isEqual(t,n)||w.isLarge(t,n);n=w.add(n,"1")){var i=w.division(t,n);if(q.isNaturalNumber(i)){var a=i.remainder;w.isZero(a)&&e.push(q.getNumber(n))}}return e},commonDivisors:function(r,e){var t=[];if(!r&&0!==r)return t;if(!e&&0!==e)return t;var n=q.getNumber(r),i=q.getNumber(e),a=q.getDivisors(n);if(w.isEqual(n,i))return a;for(var u=q.getDivisors(i),o=0;o<a.length;o++)for(var l=a[o],s=0;s<u.length;s++){var c=u[s];w.isEqual(l,c)&&t.push(l)}return t},greatestCommonDivisor:function(r,e){var t=q.commonDivisors(r,e);return t.length?t[t.length-1]:null},commonMultiple:function(r,e,t){var n=t||10,i=[];if(!r&&0!==r)return i;if(!e&&0!==e)return i;var a=q.getNumber(r),u=q.getNumber(e);if(w.isEqual(a,u))return i.push(a),i;for(var o=[],l=[],s=1;s<=n;s++){var c=w.multiple(a,s);o.push(c)}for(var f=1;f<=n;f++){var m=w.multiple(u,f);l.push(m)}return o.forEach((function(r){var e=l.find((function(e){return w.isEqual(r,e)}));e&&i.push(e)})),i},leastCommonMultiple:function(r,e,t){return q.commonMultiple(r,e,t)[0]}};const O={s:p,S:_.S,K:_.K,core:n,core2:w,utils:q};return e.default})()}));