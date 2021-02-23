!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return(()=>{"use strict";var r={297:(r,e,t)=>{t.d(e,{default:()=>T});var n={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],t=String(r),i=t.length,a=0;a<i;a++){var o=Number(t.slice(a,a+1));if(!n.isNumber(o))throw new Error("This function has been called with incorrect parameters");e.push(o)}return e},numToArrayWithDecimal:function(r){for(var e=[],t=[],i=String(r),a=i.length,o=e,u=0;u<a;u++){var s=Number(i[u]);if(!n.isNumber(s)){if("."!==s||o!==e)throw new Error("This function has been called with incorrect parameters");o=t}o.push(s)}return[].concat(e,[".",t])},numToArrayWithDecimal2:function(r){var e=String(r),t=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),t=!0);for(var i=e.split(""),a=[],o=[],u=!0,s=!1,l=0;l<i.length;l++){var c=Number(i[l]),f=n.isNumber(c);if(f||"."!==i[l]){if(!f)throw new Error("This function has been called with incorrect parameters");u&&0===c&&!s||(u=!1,s?o.push(t?-c:c):a.push(t?-c:c))}else s=!0}for(var h=o.length-1;h>=0&&0===o[h];h--)o.pop();return{int:a,decimal:o,negative:t}},numToArrayWithDecimal3:function(r){for(var e=String(r),t=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),t=!t;var i=null,a=e.match(/\./g);if(!(a&&a.length>1)){a&&1===a.length&&(i=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,i);for(var o=[],u=0,s=0;s<e.length;s++){var l=Number(e[s]);if(!n.isNumber(l))throw new Error("This function has been called with incorrect parameters");0===l&&i>s?u++:o.push(l)}for(i-=u;0===o[o.length-1];)o.pop();var c={array:o,negative:t};return(0===i||i>0)&&(c.decimal_index=i),c}},compare:function(r,e){if(r&&e){var t,i;if(t=r instanceof Array?r:n.numToArrayWithDecimal2(r),i=e instanceof Array?e:n.numToArrayWithDecimal2(e),0===t[0]){for(var a=[],o=!0,u=0;u<t.length;u++){var s=t[u];0===s&&o||(a.push(s),o=!1)}t=a}if(0===i[0]){for(var l=[],c=!0,f=0;f<i.length;f++){var h=i[f];0===h&&c||(l.push(h),c=!1)}i=l}var g={equal:!1,large:null,small:null};if(t.length>t.length)return g.large=r,g.small=e,g;if(t.length<t.length)return g.large=e,g.small=r,g;for(var m=0;m<t.length;m++){var v=t[m],p=i[m];if(v>p)return g.large=r,g.small=e,g;if(v<p)return g.large=e,g.small=r,g}return g.equal=!0,g}},getLarge:function(r,e){var t=n.numToArrayWithDecimal2(r),i=n.numToArrayWithDecimal2(e),a=!1;if(t.negative&&!i.negative)return e;if(!t.negative&&i.negative)return r;t.negative&&i.negative&&(a=!0);var o=n.compare(t.int,i.int);if(o.large===t.int)return a?e:r;if(o.large===i.int)return a?r:e;if(t.decimal.length<i.decimal.length)for(var u=i.decimal.length-t.decimal.length,s=0;s<u;s++)t.decimal.push(0);else if(t.decimal.length>i.decimal.length)for(var l=t.decimal.length-i.decimal.length,c=0;c<l;c++)i.decimal.push(0);var f=n.compare(t.decimal,i.decimal);return f.large===t.decimal?a?e:r:f.large===i.decimal?a?r:e:void 0},getSmall:function(r,e){var t=n.getLarge(r,e);return t===r?e:t===e?r:void 0},isEqual:function(r,e){return!!n.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!n.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;l>9?(l-=10,u=1):l>=0&&l<=9?u=0:(l=10+l,u=-1),o.push(l)}return 0!==u&&o.push(u),console.log(o),console.log("minus",t),{new_array:o,minus:t}},add_and_subtract:function(r,e,t){if((r||e)&&t){var i;if("+"===t)i=!0;else{if("-"!==t)return;i=!1}var a=n.numToArrayWithDecimal2(r),o=n.numToArrayWithDecimal2(e),u=a.int,s=o.int,l=a.decimal,c=o.decimal,f=(a.negative,o.negative,l.length);f<c.length&&(f=c.length);for(var h=0;h<f;h++){var g=l[h],m=c[h];n.isNumber(g)||l.push(0),n.isNumber(m)||c.push(0)}var v,p,d,y=function(r,e,t){var i=[],a=r,o=e;r.length<e.length&&(a=e,o=r);for(var u=0;u<a.length;u++){var s=a[u]?a[u]:0,l=o[u]?o[u]:0,c=t?s+l:s-l;i.push(c)}return n.fixCarry(i)},b=(v=l.length<c.length?c.legth:l.length,d=0,(p=y(l.reverse(),c.reverse(),i)).new_array.length>v&&(d=p.new_array.pop()),{dec_arr:p.new_array,dec_carry:d,dec_minus:p.minus}),N=b.dec_arr,S=b.dec_carry,A=b.dec_minus,w=function(r){var e=y(u.reverse(),s.reverse(),i);return 0!==r&&(e=y(e.new_array,[r],!0)),{int_arr:e.new_array}}(S).int_arr;return console.log(w),console.log(N,S,A),{int:w.reverse(),decimal:N.reverse()}}},add:function(r,e){n.numToArrayWithDecimal2(r),n.numToArrayWithDecimal2(e),n.getLarge(r,e)}};const i=n;var a="Not a number",o="Argument is not Su.",u=function(r,e){if(isNaN(r))throw new Error(a);r||(r=0),e||(e={});var t=String(r),n=!1;"-"===t[0]&&(t=t.slice(1,t.length),n=!0),!n&&e&&e.negative&&(n=!0),isNaN(Number(t))&&(t="0"),"0"===t&&(n=!1);var o,u,s=t.split("."),l=s[0],c=s[1];if(l){var f=l.match(/0/g);f&&f.length===l.length&&(l="0");for(var h="",g=!0,m=0;m<l.length;m++)"0"===l[m]&&g||(g=!1,h+=l[m]);l=h||"0"}if(c){var v=c.match(/0/g);v&&v.length===c.length&&(c="0");for(var p=!0,d="",y=c.length-1;y>=0;y--)"0"===c[y]&&p||(p=!1,d=c[y]+d);c=d||"0"}try{o=i.numToArray(l),u=c?i.numToArray(c):[0]}catch(r){throw new Error(a)}this.integer=o,this.decimal=u,this.negative=!!n;for(var b=[1],N=0;N<this.decimal.length;N++)b.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:b}},s=function(r,e){var t;try{t=new u(r,e)}catch(r){t=r.message}return t},l=function(r){if(r instanceof u)return!0},c=function(r){var e=r.getString();return s(e)},f={ZERO:s(0),ONE:s(1),FIRST_PRIME_NUMBER:s(2),MAX:s(1e4),MIN:s(-1e4)};u.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},u.prototype.getNumber=function(){return Number(this.getString())},u.prototype.getInteger=function(){return Number(this.integer.join(""))},u.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},u.prototype.clone=function(){var r=this.getString();return s(r)};var h=function(r,e){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=!1,i=[],a=s(r.getString()),o=s(e.getString());if(t&&(a.negative=!1,o.negative=!1),!a.isZero()||!o.isZero()){if(!a.negative&&o.negative)return r;if(a.negative&&!o.negative)return e;if(a.negative&&o.negative&&(n=!0),a.integer.length>o.integer.length)return n?e:r;if(a.integer.length<o.integer.length)return n?r:e;for(var u=0;u<a.integer.length;u++){var l=a.integer[u],c=o.integer[u];if(l>c){i=[r,e];break}if(l<c){i=[e,r];break}}if(0===i.length)for(var f=a.decimal.length>=o.decimal.length?a.decimal.length:o.decimal.length,h=0;h<f;h++){var g=a.decimal[h]?a.decimal[h]:0,m=o.decimal[h]?o.decimal[h]:0;if(g>m){i=[r,e];break}if(g<m){i=[e,r];break}}return n&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};u.prototype.isEqual=function(r){if(!l(r))return!1;var e=this.clone(),t=r.clone(),n=e.integer,i=t.integer,a=e.decimal,o=t.decimal;if(h(e,t))return!1;if(n.length===i.length){for(var u=0;u<n.length;u++)if(n[u]!==i[u])return!1}else{if(a.length!==o.length)return!1;for(var s=0;s<a.length;s++)if(a[s]!==o[s])return!1}return e.negative===t.negative},u.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},u.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},u.prototype.isLarge=function(r){if(!l(r))return!1;var e=this.clone(),t=r.clone(),n=h(e,t);return!!n&&n.getString()===e.getString()},u.prototype.isSmall=function(r){if(!l(r))return!1;var e=this.clone(),t=r.clone(),n=h(e,t);return!!n&&n.getString()===t.getString()},u.prototype.isInteger=function(){return!this.containDecimal()},u.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(f.ZERO))},u.prototype.isNegative=function(){return!!this.negative},u.prototype.isPositive=function(){return!this.negative},u.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},u.prototype.add=function(r){if(!l(r))throw new Error(o);var e,t=this.clone(),n=r.clone();if(t.isZero())return n;if(n.isZero())return t;if(t.negative&&n.negative)e=!0;else if(t.negative||n.negative){if(!t.negative&&n.negative)return n.makePositive(),t.subtract(n);if(t.negative&&!n.negative)return t.makePositive(),n.subtract(t)}else e=!1;var i=h(t,n);i||(i=t);var a,u,c=i.integer,f=i.decimal;i===t?(a=n.integer,u=n.decimal):(a=t.integer,u=t.decimal);var g=c.length,m=f.length;u.length>f.length&&(m=u.length);for(var v=0,p=[],d=[],y=m-1;y>=0;y--){var b=void 0;(b=(f[y]||0)+(u[y]||0)+v)>=10?(v=1,b-=10):v=0,d.unshift(b)}for(var N=d.length-1;N>=0&&0===d[N];N--)d.pop();for(var S=g-a.length,A=g-1;A>=0;A--){var w=void 0;(w=c[A]+(a[A-S]||0)+v)>=10?(v=1,w-=10):v=0,p.unshift(w)}v>0&&p.unshift(v);var x=s(p.join("")+"."+d.join(""),{negative:e});return x.isZero()&&x.negative&&x.makePositive(),x},u.prototype.subtract=function(r){if(!l(r))throw new Error(o);var e=c(this),t=c(r);if(r.isZero())return e;if(this.isZero())return t.negate();if(e.negative!==t.negative)return t.negative=!t.negative,e.add(t);var n=e.negative;h(e,t,!0)!==e&&(t=this,n=!(e=r).negative);var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),u=e.integer.length,f=t.integer.length,g=e.decimal.length,m=t.decimal.length,v=Math.abs(g-m),p=0,d=0;if(p+=u>f?u:f,g>m){d+=g;for(var y=0;y<v;y++)a.push(0)}else{d+=m;for(var b=0;b<v;b++)i.push(0)}for(var N=0,S=[],A=0;A<p+d;A++){var w=i.length-1-A,x=a.length-1-A,_=(i[w]?i[w]:0)-N,T=a[x]?a[x]:0;_>=T?(N=0,S.unshift(_-T)):(N=1,S.unshift(10*N+_-T))}S.splice(S.length-d,0,".");var D=s((n?"-":"")+S.join(""));return D.isZero()&&D.negative&&D.makePositive(),D},u.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},u.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},u.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},u.prototype.multiplication=function(r){if(!l(r))throw new Error(o);var e=c(this),t=c(r);if(e.isZero()||t.isZero())return s(0);var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=e.integer.concat(e.decimal),a=t.integer.concat(t.decimal),u=e.integer.length,f=t.integer.length,h=[],g=0;g<i.length;g++)for(var m=0;m<a.length;m++){var v=u-g-1+(f-m-1),p=i[g]*a[m],d=Math.abs(v),y=void 0;v>=0?(d++,y=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):y=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),h.push(s(y))}for(var b=s(0),N=0;N<h.length;N++)b=b.add(h[N]);return b.negative=n,b},u.prototype.division=function(r){if(!l(r))throw new Error(o);var e=c(this),t=c(r);if(e.isZero()&&t.isZero())return a;if(e.isZero())return s(0);if(t.isZero())return"Division by Zero";var n=!1;(!1===e.negative&&!0===t.negative||!0===e.negative&&!1===t.negative)&&(n=!0);for(var i=s(0),u=s(0);e.isLarge(u)||e.isEqual(u);)i=i.add(s(1)),u=t.multiplication(i);i=i.subtract(s(1)),u=u.subtract(t);var f=e.subtract(u),h=i;return h.remainder=f,h.negative=n,h},u.prototype.plus=function(r){return this.add(r)},u.prototype.tasu=function(r){return this.add(r)},u.prototype.minus=function(r){return this.subtract(r)},u.prototype.hiku=function(r){return this.subtract(r)},u.prototype.multiply=function(r){return this.multiplication(r)},u.prototype.kakeru=function(r){return this.multiplication(r)},u.prototype.waru=function(r){return this.division(r)},u.prototype.next=function(){return this.add(s(1))},u.prototype.prev=function(){return this.subtract(s(1))},u.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(s(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},u.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(s(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},u.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(s(e));e++){var t=s(e);this.division(t).remainder.isZero()&&r.push(t)}return r.push(this),r},u.prototype.getCommonDivisors=function(r){l(r)||(r=s(r));var e=r,t=this.getDivisors();if(this.isEqual(e))return t;for(var n=e.getDivisors(),i=[],a=0;a<t.length;a++)for(var o=t[a],u=0;u<n.length;u++){var c=n[u];o.isEqual(c)&&i.push(o)}return i},u.prototype.getMaxCommonDivisor=function(r){l(r)||(r=s(r));var e=this.getCommonDivisors(r);return e[e.length-1]},u.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=s("1");e.isSmall(f.MAX)||e.isEqual(f.MAX);)r.push(this.multiplication(e)),e=e.add(s("1"));return r},u.prototype.getLeastCommonMultiple=function(r){l(r)||(r=s(r));var e=r,t=this.getMaxCommonDivisor(e);return this.multiply(e).division(t)};var g=function(r,e){if(!l(r)||!l(e))return!1;var t=f.MAX;return function r(e){if(e[e.length-1].isLarge(t))return e;var n=e[e.length-2],i=e[e.length-1],a=n.add(i);return e.push(a),r(e)}([r,e])};u.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=s(0),t=s(1),n=g(e,t),i=0;i<n.length;i++)if(n[i].isEqual(r))return!0;return!1},u.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=g(s(2),s(1)),e=0;e<r.length;e++)if(r[e].isEqual(this))return!0;return!1};var m=function(r,e){var t=[r];if(!e)return t;for(var n=0;n<e.length;n++){var i=e[n];l(i)||(i=s(i)),t.push(i)}return t};u.prototype.getSequence=function(){return m(this,arguments)},u.prototype.summation=function(){for(var r=m(this,arguments),e=s(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},u.prototype.infiniteProduct=function(){for(var r=m(this,arguments),e=r[0],t=1;t<r.length;t++)e=e.multiplication(r[t]);return e},u.prototype.digitsum=function(){for(var r=s(0),e=0;e<this.integer.length;e++){var t=s(this.integer[e]);r=r.add(t)}return r},u.prototype.square=function(){return this.exponentiate(s(2))},u.prototype.cube=function(){return this.exponentiate(s(3))},u.prototype.exponentiate=function(r){var e=s("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var t=e,n=c(this);t.isSmall(r);)n=this.multiplication(n),t=t.next();return n},u.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(s(1)),e=s(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(s(1))}return!0},u.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=s(0),t=0;t<r.length;t++)e=e.add(r[t]);return e},u.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(s(2)))},u.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(s(2)))},u.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},u.prototype.factorial=function(){for(var r=this,e=this.subtract(s(1)),t=s(0);e.isLarge(t);)r=r.multiplication(e),e=e.subtract(s(1));return r};var v=function(r,e){if(l(r)){if(r.isSmall(s(3)))return[];var t=s(1),n=[],i=t;e=e?e.next():f.MAX;for(var a=r.subtract(s(2));t.isSmall(e);)n.push(t),i=i.add(a),t=t.add(i);return n}};u.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,v(s(3),r)).find((function(r){return r.isEqual(e)}))},u.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,v(s(4),r)).find((function(r){return r.isEqual(e)}))};var p=function(r){r=r?r.next():f.MAX;for(var e=s(2),t=[],n=s(0),i=s(1);n.isSmall(r);)n=e.exponentiate(i).subtract(s(1)),t.push(n),i=i.add(s(1));return t};u.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=p(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1},u.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():f.MAX;for(var e=p(r),t=[],n=0;n<e.length;n++){var i=e[n];i.isPrimeNumber()&&t.push(i)}return t}(r),t=0;t<e.length;t++)if(e[t].isEqual(r))return!0;return!1};const d={makeSu:s,copySu:c,isSu:l,Su:u};var y={},b={},N=d.makeSu,S=d.isSu;b.random=function(r,e){void 0===r&&(r=N(0)),void 0===e&&(e=N(1)),S(r)||(r=N(r)),S(e)||(e=N(e));var t,n=String(Math.random());if("0"===n)t=r.isZero()?N(0):r;else{var i=n.split(".");t=N("0."+i[1]).multiplication(e)}return t},b.randomElement=function(r){return r[b.random(0,r.length).integer]},b.randomInt=function(r,e){if(!S(r)||!S(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var t=[],n=r.getNumber();n<=e.getNumber();n++){var i=N(n);t.push(i)}return b.randomElement(t)},b.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString())),r||(r=100),r>100&&(r=100);for(var e=[],t=2;t<r;t++){var n=N(t);n.isPrimeNumber()&&e.push(n)}return e},b.euclideanAlgorithm=function(r,e){if(!y.isNumber(r)||!y.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var t;r<e&&(t=r,r=e,e=t);for(var n,i,a=r,o=e;0!==n;){if(0==(n=a%o)){i=o;break}if(1===n){i="coprime";break}0,a=o,o=n}return i},b.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var t=0,n=0;n<r.length;n++){var i=r[n];if(!y.isNumber(i))return"Argument is not Number";t+=i}return t},b.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var t=1,n=0;n<r.length;n++){var i=r[n];if(!y.isNumber(i))return"Argument is not a Number";t*=i}return t},b.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var t=r/e;return{integer:{remainder:r%e,result:Math.floor(t)},realNumber:t}},b.divisorsSummation=function(r){for(var e=b.divisors(r),t=0,n=0;n<e.length;n++)t+=e[n];return t},b.isAbundantNumber=function(r){return b.divisorsSummation(r)>2*r},b.isKaprekarNumberTypeA=function(r){var e,t=String(r*r),n=t.length,i=0;return e=y.isOddNumber(n)?1+(i=(n-1)/2):i=n/2,Number(t.substr(0,i))+Number(t.substr(i,e))===r},b.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),t=Number(e.sort().join(""));return Number(e.reverse().join(""))-t===r},b.isKaprekarNumber=function(r){if(b.isKaprekarNumberTypeA(r)||b.isKaprekarNumberTypeB(r))return!0},y.isInteger=function(r){return Math.floor(r)===r},b.harmonicMean=function(r){for(var e=r.length,t=0,n=0;n<e;n++)t+=1/r[n];return e/t},b.isHarmonicDivisorNumber=function(r){var e=b.divisors(r),t=b.harmonicMean(e);return!!y.isInteger(t)},y.isNaturalNumber=function(r){if(r>0&&y.isInteger(r))return!0},b.collatzhProblem=function(r){for(var e,t,n=[];r>1;)t=void 0,t=e=r,y.isOddNumber(e)?t=3*e+1:y.isEvenNumber(e)&&(t=e/2),r=t,n.push(r);return n},b.fermatTest=function(r,e){if(!y.isInteger(r)||y.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var t=1;t<=e;t++){var n=b.randomInt(2,r-1);if(1!==b.maxCommonDivisor(n,r))return"Composit Number";if(1!=Math.pow(n,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},b.getIncludesNumbers=function(r){for(var e=[],t=r,n=!0;n;){var i=[t,r-t];if(e.push(i),(t-=1)<0){n=!1;break}}return e};const A={S:y,K:b};function w(r){return function(r){if(Array.isArray(r))return x(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return x(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?x(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var _={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},moldNumArray:function(r){for(var e=r.array,t=r.negative,n=r.decimal_index;n<e.length&&0===e[e.length-1];)e.pop();for(;n>1&&0===e[0];)e.shift(),n--;0===e.length&&(e.push(0),n=1);var i={array:e,negative:t};return i.decimal_index=0===n||n>0?n:e.length,i},numToArrayWithDecimal:function(r){for(var e,t=String(r),n=!1;t[0].match(/^-/);)t=t.replace(/^-/,""),n=!n;var i=t.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=t.match(/\./).index,t=t.replace(/\./,"")):e=t.length;for(var a=[],o=0;o<t.length;o++){var u=Number(t[o]);if(!_.isNumber(u))throw new Error("This function has been called with incorrect parameters");a.push(u)}return _.moldNumArray({array:a,negative:n,decimal_index:e})}},numArrayToString:function(r){if(!r.array||!r.decimal_index)return"";var e=w(r.array);e.splice(r.decimal_index,0,".");var t=e.join("");return r.negative&&(t="-".concat(t)),t.replace(/\.$/,"")},compare:function(r,e){if(r&&e){var t={small:null,large:null,equal:!1},n=r.array,i=e.array,a=n.length,o=i.length,u=n.join(""),s=i.join(""),l=r.decimal_index,c=e.decimal_index,f=a-l,h=o-c;if(1===a&&"0"===u&&1===o&&"0"===s)return t.equal=!0,t;if(!r.negative&&e.negative)return t.small=e,t.large=r,t;if(r.negative&&!e.negative)return t.small=r,t.large=e,t;var g=r.negative,m={large:g?e:r,small:g?r:e,equal:!1},v={large:g?r:e,small:g?e:r,equal:!1};if(l>c)return m;if(l<c)return v;for(var p=0;p<l;p++){if(n[p]>i[p])return m;if(n[p]<i[p])return v}for(var d=f>h?f:h,y=0;y<d;y++){var b=n[l+y]?n[l+y]:0,N=i[c+y]?i[c+y]:0;if(b>N)return m;if(b<N)return v}return t.equal=!0,t}},getLarge:function(r,e){return _.compare(r,e).large},getSmall:function(r,e){return _.compare(r,e).small},isEqual:function(r,e){return!!_.compare(r,e).equal},isZero:function(r){if(!r)return!1;var e=_.numToArrayWithDecimal("0");return _.isEqual(e,r)},isOne:function(r){if(!r)return!1;var e=_.numToArrayWithDecimal("1");return _.isEqual(e,r)},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!_.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){for(var t=e,n=r.length-1;n>=0;n--){var i=r[n];if(i<0){t=!0;break}if(0!==i)break}if(t){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,s=0;s<r.length;s++){var l=r[s]+u;if(l>9){var c=String(l).split("");l=Number(c[c.length-1]);var f=c.slice(0,c.length-1);u=Number(f.join(""))}else l>=0&&l<=9?u=0:(l=10+l,u=-1);o.push(l)}return 0!==u&&o.push(u),{new_array:o,minus:t}},add_and_subtract:function(r,e,t){var n;if((r&&e||0===r||0===e)&&t){if("+"===t)n=!0;else{if("-"!==t)return;n=!1}var i=_.numToArrayWithDecimal(r||0),a=_.numToArrayWithDecimal(e||0),o=i.array,u=a.array,s=_.isZero(i),l=_.isZero(a);if(s&&l)return i;if(s)return n||(a.negative=!a.negative),a;if(l)return i;var c=i.array.length-i.decimal_index,f=a.array.length-a.decimal_index,h=c-f;i.decimal_index>=a.decimal_index?i.decimal_index:a.decimal_index,i.array.length>a.array.length?i.array.length:a.array.length,h>0?u.push.apply(u,w(Array(h).fill(0))):h<0&&o.push.apply(o,w(Array(Math.abs(h)).fill(0)));var g=function(r){var e=r.a,t=r.b,n=r.plus,i=[],a=e.array.length;e.array.length<t.array.length&&(a=t.array.length);for(var o=e.array,u=t.array,s=e.negative?-1:1,l=t.negative?-1:1,c=0;c<a;c++){var f=o[c]?o[c]*s:0,h=u[c]?u[c]*l:0,g=n?f+h:f-h;i.push(g)}return _.fixCarry(i)}({a:{array:w(o).reverse(),negative:i.negative},b:{array:w(u).reverse(),negative:a.negative},plus:n}),m=g.new_array,v=g.minus,p=c>=f?c:f,d=m.length-p;return _.moldNumArray({array:w(m).reverse(),negative:!!v,decimal_index:d})}},add:function(r,e){return _.add_and_subtract(r,e,"+")},subtract:function(r,e){return _.add_and_subtract(r,e,"-")},multiplication:function(r,e){if(r&&e||0===r||0===e){var t=_.numToArrayWithDecimal(r||0),n=_.numToArrayWithDecimal(e||0),i=t.array,a=n.array;if(_.isZero(t)||_.isZero(n))return _.numToArrayWithDecimal("0");if(_.isOne(t))return n;if(_.isOne(n))return t;var o,u=t.negative,s=n.negative;o=!(u&&s||!u&&!s);var l=t.array.length-t.decimal_index+(n.array.length-n.decimal_index),c=function(r){for(var e=r.b,t=[],n=r.a.array,i=e.array,a=0;a<n.length;a++){var o=n[a]?n[a]:0,u=new Array(a);u.fill(0,0,a);for(var s=0;s<i.length;s++){var l=o*(i[s]?i[s]:0);u.push(l);var c=a+s,f=t[c];f||(f=0);var h=f+l;t[c]=h}}return _.fixCarry(t)}({a:{array:w(i).reverse(),negative:t.negative},b:{array:w(a).reverse(),negative:n.negative}}).new_array,f=c.length-l;return _.moldNumArray({array:w(c).reverse(),negative:o,decimal_index:f})}},multiple:function(r,e){return _.multiplication(r,e)},division:function(r,e){if(r&&e||0===r||0===e){var t=_.numToArrayWithDecimal(r||0),n=_.numToArrayWithDecimal(e||0);if(t.array,n.array,!_.isZero(n))return _.isZero(t)?_.numToArrayWithDecimal("0"):_.isOne(t)?n:_.isOne(n)?t:void 0}}};const T={s:d,S:A.S,K:A.K,core:i,core2:_}}},e={};function t(n){if(e[n])return e[n].exports;var i=e[n]={exports:{}};return r[n](i,i.exports,t),i.exports}return t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t(297)})().default}));