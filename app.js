!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.su=e():r.su=e()}(this,(function(){return(()=>{"use strict";var r={d:(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o:(r,e)=>Object.prototype.hasOwnProperty.call(r,e)},e={};r.d(e,{default:()=>Z});var n={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},isZero:function(r){if(0===r)return!0},numToArray:function(r){for(var e=[],t=String(r),i=t.length,a=0;a<i;a++){var o=Number(t.slice(a,a+1));if(!n.isNumber(o))throw new Error("This function has been called with incorrect parameters");e.push(o)}return e},numToArrayWithDecimal:function(r){for(var e=[],t=[],i=String(r),a=i.length,o=e,u=0;u<a;u++){var l=Number(i[u]);if(!n.isNumber(l)){if("."!==l||o!==e)throw new Error("This function has been called with incorrect parameters");o=t}o.push(l)}return[].concat(e,[".",t])},numToArrayWithDecimal2:function(r){var e=String(r),t=!1;e[0].match(/-/)&&(e=e.replace(/^-/,""),t=!0);for(var i=e.split(""),a=[],o=[],u=!0,l=!1,s=0;s<i.length;s++){var c=Number(i[s]),f=n.isNumber(c);if(f||"."!==i[s]){if(!f)throw new Error("This function has been called with incorrect parameters");u&&0===c&&!l||(u=!1,l?o.push(t?-c:c):a.push(t?-c:c))}else l=!0}for(var m=o.length-1;m>=0&&0===o[m];m--)o.pop();return{int:a,decimal:o,negative:t}},numToArrayWithDecimal3:function(r){for(var e=String(r),t=!1;e[0].match(/^-/);)e=e.replace(/^-/,""),t=!t;var i=null,a=e.match(/\./g);if(!(a&&a.length>1)){a&&1===a.length&&(i=e.match(/\./).index,e=e.replace(/\./,"")),console.info(e,i);for(var o=[],u=0,l=0;l<e.length;l++){var s=Number(e[l]);if(!n.isNumber(s))throw new Error("This function has been called with incorrect parameters");0===s&&i>l?u++:o.push(s)}for(i-=u;0===o[o.length-1];)o.pop();var c={array:o,negative:t};return(0===i||i>0)&&(c.decimal_index=i),c}},compare:function(r,e){if(r&&e){var t,i;if(t=r instanceof Array?r:n.numToArrayWithDecimal2(r),i=e instanceof Array?e:n.numToArrayWithDecimal2(e),0===t[0]){for(var a=[],o=!0,u=0;u<t.length;u++){var l=t[u];0===l&&o||(a.push(l),o=!1)}t=a}if(0===i[0]){for(var s=[],c=!0,f=0;f<i.length;f++){var m=i[f];0===m&&c||(s.push(m),c=!1)}i=s}var g={equal:!1,large:null,small:null};if(t.length>t.length)return g.large=r,g.small=e,g;if(t.length<t.length)return g.large=e,g.small=r,g;for(var h=0;h<t.length;h++){var v=t[h],p=i[h];if(v>p)return g.large=r,g.small=e,g;if(v<p)return g.large=e,g.small=r,g}return g.equal=!0,g}},getLarge:function(r,e){var t=n.numToArrayWithDecimal2(r),i=n.numToArrayWithDecimal2(e),a=!1;if(t.negative&&!i.negative)return e;if(!t.negative&&i.negative)return r;t.negative&&i.negative&&(a=!0);var o=n.compare(t.int,i.int);if(o.large===t.int)return a?e:r;if(o.large===i.int)return a?r:e;if(t.decimal.length<i.decimal.length)for(var u=i.decimal.length-t.decimal.length,l=0;l<u;l++)t.decimal.push(0);else if(t.decimal.length>i.decimal.length)for(var s=t.decimal.length-i.decimal.length,c=0;c<s;c++)i.decimal.push(0);var f=n.compare(t.decimal,i.decimal);return f.large===t.decimal?a?e:r:f.large===i.decimal?a?r:e:void 0},getSmall:function(r,e){var t=n.getLarge(r,e);return t===r?e:t===e?r:void 0},isEqual:function(r,e){return!!n.compare(r,e).equal},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!n.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){console.log(r);for(var n=e,t=r.length-1;t>=0;t--){var i=r[t];if(i<0){n=!0;break}if(0!==i)break}if(n){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,l=0;l<r.length;l++){var s=r[l]+u;s>9?(s-=10,u=1):s>=0&&s<=9?u=0:(s=10+s,u=-1),o.push(s)}return 0!==u&&o.push(u),console.log(o),console.log("minus",n),{new_array:o,minus:n}},add_and_subtract:function(r,e,t){if((r||e)&&t){var i;if("+"===t)i=!0;else{if("-"!==t)return;i=!1}var a=n.numToArrayWithDecimal2(r),o=n.numToArrayWithDecimal2(e),u=a.int,l=o.int,s=a.decimal,c=o.decimal,f=(a.negative,o.negative,s.length);f<c.length&&(f=c.length);for(var m=0;m<f;m++){var g=s[m],h=c[m];n.isNumber(g)||s.push(0),n.isNumber(h)||c.push(0)}var v,p,d,y=function(r,e,t){var i=[],a=r,o=e;r.length<e.length&&(a=e,o=r);for(var u=0;u<a.length;u++){var l=a[u]?a[u]:0,s=o[u]?o[u]:0,c=t?l+s:l-s;i.push(c)}return n.fixCarry(i)},b=(v=s.length<c.length?c.legth:s.length,d=0,(p=y(s.reverse(),c.reverse(),i)).new_array.length>v&&(d=p.new_array.pop()),{dec_arr:p.new_array,dec_carry:d,dec_minus:p.minus}),_=b.dec_arr,N=b.dec_carry,A=b.dec_minus,x=function(r){var e=y(u.reverse(),l.reverse(),i);return 0!==r&&(e=y(e.new_array,[r],!0)),{int_arr:e.new_array}}(N).int_arr;return console.log(x),console.log(_,N,A),{int:x.reverse(),decimal:_.reverse()}}},add:function(r,e){n.numToArrayWithDecimal2(r),n.numToArrayWithDecimal2(e),n.getLarge(r,e)}};const t=n;var i="Not a number",a="Argument is not Su.",o=function(r,e){if(isNaN(r))throw new Error(i);r||(r=0),e||(e={});var n=String(r),a=!1;"-"===n[0]&&(n=n.slice(1,n.length),a=!0),!a&&e&&e.negative&&(a=!0),isNaN(Number(n))&&(n="0"),"0"===n&&(a=!1);var o,u,l=n.split("."),s=l[0],c=l[1];if(s){var f=s.match(/0/g);f&&f.length===s.length&&(s="0");for(var m="",g=!0,h=0;h<s.length;h++)"0"===s[h]&&g||(g=!1,m+=s[h]);s=m||"0"}if(c){var v=c.match(/0/g);v&&v.length===c.length&&(c="0");for(var p=!0,d="",y=c.length-1;y>=0;y--)"0"===c[y]&&p||(p=!1,d=c[y]+d);c=d||"0"}try{o=t.numToArray(s),u=c?t.numToArray(c):[0]}catch(r){throw new Error(i)}this.integer=o,this.decimal=u,this.negative=!!a;for(var b=[1],_=0;_<this.decimal.length;_++)b.push(0);this.fraction={numerator:this.integer.concat(this.decimal),denominator:b}},u=function(r,e){var n;try{n=new o(r,e)}catch(r){n=r.message}return n},l=function(r){if(r instanceof o)return!0},s=function(r){var e=r.getString();return u(e)},c={ZERO:u(0),ONE:u(1),FIRST_PRIME_NUMBER:u(2),MAX:u(1e4),MIN:u(-1e4)};o.prototype.getString=function(){var r=String(this.integer.join(""));return 0!==this.decimal.reduce((function(r,e){return r+e}))&&(r+="."+this.decimal.join("")),this.negative?"-".concat(r):r},o.prototype.getNumber=function(){return Number(this.getString())},o.prototype.getInteger=function(){return Number(this.integer.join(""))},o.prototype.getDecimal=function(){return Number("0."+this.decimal.join(""))},o.prototype.clone=function(){var r=this.getString();return u(r)};var f=function(r,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=!1,i=[],a=u(r.getString()),o=u(e.getString());if(n&&(a.negative=!1,o.negative=!1),!a.isZero()||!o.isZero()){if(!a.negative&&o.negative)return r;if(a.negative&&!o.negative)return e;if(a.negative&&o.negative&&(t=!0),a.integer.length>o.integer.length)return t?e:r;if(a.integer.length<o.integer.length)return t?r:e;for(var l=0;l<a.integer.length;l++){var s=a.integer[l],c=o.integer[l];if(s>c){i=[r,e];break}if(s<c){i=[e,r];break}}if(0===i.length)for(var f=a.decimal.length>=o.decimal.length?a.decimal.length:o.decimal.length,m=0;m<f;m++){var g=a.decimal[m]?a.decimal[m]:0,h=o.decimal[m]?o.decimal[m]:0;if(g>h){i=[r,e];break}if(g<h){i=[e,r];break}}return t&&(i=[i[1],i[0]]),0===i.length?null:i[0]}};o.prototype.isEqual=function(r){if(!l(r))return!1;var e=this.clone(),n=r.clone(),t=e.integer,i=n.integer,a=e.decimal,o=n.decimal;if(f(e,n))return!1;if(t.length===i.length){for(var u=0;u<t.length;u++)if(t[u]!==i[u])return!1}else{if(a.length!==o.length)return!1;for(var s=0;s<a.length;s++)if(a[s]!==o[s])return!1}return e.negative===n.negative},o.prototype.isZero=function(){return 1===this.integer.length&&0===this.integer[0]&&!this.containDecimal()},o.prototype.isOne=function(){return!this.negative&&"1"===this.getString()},o.prototype.isLarge=function(r){if(!l(r))return!1;var e=this.clone(),n=r.clone(),t=f(e,n);return!!t&&t.getString()===e.getString()},o.prototype.isSmall=function(r){if(!l(r))return!1;var e=this.clone(),n=r.clone(),t=f(e,n);return!!t&&t.getString()===n.getString()},o.prototype.isInteger=function(){return!this.containDecimal()},o.prototype.isNaturalNumber=function(){return!!(this.isPositive()&&this.isInteger()&&this.isLarge(c.ZERO))},o.prototype.isNegative=function(){return!!this.negative},o.prototype.isPositive=function(){return!this.negative},o.prototype.containDecimal=function(){return 0!==this.decimal.reduce((function(r,e){return r+e}))},o.prototype.add=function(r){if(!l(r))throw new Error(a);var e,n=this.clone(),t=r.clone();if(n.isZero())return t;if(t.isZero())return n;if(n.negative&&t.negative)e=!0;else if(n.negative||t.negative){if(!n.negative&&t.negative)return t.makePositive(),n.subtract(t);if(n.negative&&!t.negative)return n.makePositive(),t.subtract(n)}else e=!1;var i=f(n,t);i||(i=n);var o,s,c=i.integer,m=i.decimal;i===n?(o=t.integer,s=t.decimal):(o=n.integer,s=n.decimal);var g=c.length,h=m.length;s.length>m.length&&(h=s.length);for(var v=0,p=[],d=[],y=h-1;y>=0;y--){var b=void 0;(b=(m[y]||0)+(s[y]||0)+v)>=10?(v=1,b-=10):v=0,d.unshift(b)}for(var _=d.length-1;_>=0&&0===d[_];_--)d.pop();for(var N=g-o.length,A=g-1;A>=0;A--){var x=void 0;(x=c[A]+(o[A-N]||0)+v)>=10?(v=1,x-=10):v=0,p.unshift(x)}v>0&&p.unshift(v);var S=u(p.join("")+"."+d.join(""),{negative:e});return S.isZero()&&S.negative&&S.makePositive(),S},o.prototype.subtract=function(r){if(!l(r))throw new Error(a);var e=s(this),n=s(r);if(r.isZero())return e;if(this.isZero())return n.negate();if(e.negative!==n.negative)return n.negative=!n.negative,e.add(n);var t=e.negative;f(e,n,!0)!==e&&(n=this,t=!(e=r).negative);var i=e.integer.concat(e.decimal),o=n.integer.concat(n.decimal),c=e.integer.length,m=n.integer.length,g=e.decimal.length,h=n.decimal.length,v=Math.abs(g-h),p=0,d=0;if(p+=c>m?c:m,g>h){d+=g;for(var y=0;y<v;y++)o.push(0)}else{d+=h;for(var b=0;b<v;b++)i.push(0)}for(var _=0,N=[],A=0;A<p+d;A++){var x=i.length-1-A,S=o.length-1-A,w=(i[x]?i[x]:0)-_,D=o[S]?o[S]:0;w>=D?(_=0,N.unshift(w-D)):(_=1,N.unshift(10*_+w-D))}N.splice(N.length-d,0,".");var E=u((t?"-":"")+N.join(""));return E.isZero()&&E.negative&&E.makePositive(),E},o.prototype.negate=function(){return 0===this.number||(this.negative?this.nevative=!1:this.negative=!0),this},o.prototype.makePositive=function(){return 0===this.number||(this.negative=!1),this},o.prototype.makeNegative=function(){return 0===this.number||(this.negative=!0),this},o.prototype.multiplication=function(r){if(!l(r))throw new Error(a);var e=s(this),n=s(r);if(e.isZero()||n.isZero())return u(0);var t=!1;(!1===e.negative&&!0===n.negative||!0===e.negative&&!1===n.negative)&&(t=!0);for(var i=e.integer.concat(e.decimal),o=n.integer.concat(n.decimal),c=e.integer.length,f=n.integer.length,m=[],g=0;g<i.length;g++)for(var h=0;h<o.length;h++){var v=c-g-1+(f-h-1),p=i[g]*o[h],d=Math.abs(v),y=void 0;v>=0?(d++,y=p>9?String(p).padEnd(d+1,"0"):String(p).padEnd(d,"0")):y=1===d&&p>9?String(p)[0]+"."+String(p)[1]:"0."+String(p).padStart(d,"0"),m.push(u(y))}for(var b=u(0),_=0;_<m.length;_++)b=b.add(m[_]);return b.negative=t,b},o.prototype.division=function(r){if(!l(r))throw new Error(a);var e=s(this),n=s(r);if(e.isZero()&&n.isZero())return i;if(e.isZero())return u(0);if(n.isZero())return"Division by Zero";var t=!1;(!1===e.negative&&!0===n.negative||!0===e.negative&&!1===n.negative)&&(t=!0);for(var o=u(0),c=u(0);e.isLarge(c)||e.isEqual(c);)o=o.add(u(1)),c=n.multiplication(o);o=o.subtract(u(1)),c=c.subtract(n);var f=e.subtract(c),m=o;return m.remainder=f,m.negative=t,m},o.prototype.plus=function(r){return this.add(r)},o.prototype.tasu=function(r){return this.add(r)},o.prototype.minus=function(r){return this.subtract(r)},o.prototype.hiku=function(r){return this.subtract(r)},o.prototype.multiply=function(r){return this.multiplication(r)},o.prototype.kakeru=function(r){return this.multiplication(r)},o.prototype.waru=function(r){return this.division(r)},o.prototype.next=function(){return this.add(u(1))},o.prototype.prev=function(){return this.subtract(u(1))},o.prototype.isEvenNumber=function(){if(this.isZero())return!0;var r=this.division(u(2));return!(!r.remainder.isZero()||0!==r.remainder.decimal[0]||1!==r.remainder.decimal.length)},o.prototype.isOddNumber=function(){if(this.isZero())return!1;var r=this.division(u(2));return!r.remainder.isZero()&&0===r.remainder.decimal[0]&&1===r.remainder.decimal.length},o.prototype.getDivisors=function(){for(var r=[],e=1;this.isLarge(u(e));e++){var n=u(e);this.division(n).remainder.isZero()&&r.push(n)}return r.push(this),r},o.prototype.getCommonDivisors=function(r){l(r)||(r=u(r));var e=r,n=this.getDivisors();if(this.isEqual(e))return n;for(var t=e.getDivisors(),i=[],a=0;a<n.length;a++)for(var o=n[a],s=0;s<t.length;s++){var c=t[s];o.isEqual(c)&&i.push(o)}return i},o.prototype.getMaxCommonDivisor=function(r){l(r)||(r=u(r));var e=this.getCommonDivisors(r);return e[e.length-1]},o.prototype.multiple=function(){if(this.isZero())return[this];for(var r=[],e=u("1");e.isSmall(c.MAX)||e.isEqual(c.MAX);)r.push(this.multiplication(e)),e=e.add(u("1"));return r},o.prototype.getLeastCommonMultiple=function(r){l(r)||(r=u(r));var e=r,n=this.getMaxCommonDivisor(e);return this.multiply(e).division(n)};var m=function(r,e){if(!l(r)||!l(e))return!1;var n=c.MAX;return function r(e){if(e[e.length-1].isLarge(n))return e;var t=e[e.length-2],i=e[e.length-1],a=t.add(i);return e.push(a),r(e)}([r,e])};o.prototype.isFibonacciNumber=function(){var r=this;if(r.isZero())return!0;if(r.containDecimal())return!1;for(var e=u(0),n=u(1),t=m(e,n),i=0;i<t.length;i++)if(t[i].isEqual(r))return!0;return!1},o.prototype.isLucasNumber=function(){if(this.containDecimal())return!1;for(var r=m(u(2),u(1)),e=0;e<r.length;e++)if(r[e].isEqual(this))return!0;return!1};var g=function(r,e){var n=[r];if(!e)return n;for(var t=0;t<e.length;t++){var i=e[t];l(i)||(i=u(i)),n.push(i)}return n};o.prototype.getSequence=function(){return g(this,arguments)},o.prototype.summation=function(){for(var r=g(this,arguments),e=u(0),n=0;n<r.length;n++)e=e.add(r[n]);return e},o.prototype.infiniteProduct=function(){for(var r=g(this,arguments),e=r[0],n=1;n<r.length;n++)e=e.multiplication(r[n]);return e},o.prototype.digitsum=function(){for(var r=u(0),e=0;e<this.integer.length;e++){var n=u(this.integer[e]);r=r.add(n)}return r},o.prototype.square=function(){return this.exponentiate(u(2))},o.prototype.cube=function(){return this.exponentiate(u(3))},o.prototype.exponentiate=function(r){var e=u("1");if(r.isZero())return e;if(r.isEqual(e))return this;for(var n=e,t=s(this);n.isSmall(r);)t=this.multiplication(t),n=n.next();return t},o.prototype.isPrimeNumber=function(){if(this.containDecimal())return!1;if(this.isOne()||this.isZero())return!1;if("2"===this.getString())return!0;for(var r=this.subtract(u(1)),e=u(1);r.isLarge(e);){if(this.division(r).remainder.isZero())return!1;r=r.subtract(u(1))}return!0},o.prototype.divisorsSummation=function(){for(var r=this.getDivisors(),e=u(0),n=0;n<r.length;n++)e=e.add(r[n]);return e},o.prototype.isAbundantNumber=function(){return!!this.divisorsSummation().isLarge(this.multiplication(u(2)))},o.prototype.isDeficientNumber=function(){return!!this.divisorsSummation().isSmall(this.multiplication(u(2)))},o.prototype.isPerfectNumber=function(){return!!this.divisorsSummation().subtract(this).isEqual(this)},o.prototype.factorial=function(){for(var r=this,e=this.subtract(u(1)),n=u(0);e.isLarge(n);)r=r.multiplication(e),e=e.subtract(u(1));return r};var h=function(r,e){if(l(r)){if(r.isSmall(u(3)))return[];var n=u(1),t=[],i=n;e=e?e.next():c.MAX;for(var a=r.subtract(u(2));n.isSmall(e);)t.push(n),i=i.add(a),n=n.add(i);return t}};o.prototype.isTriangleNumber=function(){var r,e=this;return!!(r=e,h(u(3),r)).find((function(r){return r.isEqual(e)}))},o.prototype.isSquareNumber=function(){var r,e=this;return!!(r=e,h(u(4),r)).find((function(r){return r.isEqual(e)}))};var v=function(r){r=r?r.next():c.MAX;for(var e=u(2),n=[],t=u(0),i=u(1);t.isSmall(r);)t=e.exponentiate(i).subtract(u(1)),n.push(t),i=i.add(u(1));return n};o.prototype.isMersenneNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=v(r),n=0;n<e.length;n++)if(e[n].isEqual(r))return!0;return!1},o.prototype.isMersennePrimeNumber=function(){var r=this;if(r.isZero())return!1;if(r.containDecimal())return!1;for(var e=function(r){r=r?r.next():c.MAX;for(var e=v(r),n=[],t=0;t<e.length;t++){var i=e[t];i.isPrimeNumber()&&n.push(i)}return n}(r),n=0;n<e.length;n++)if(e[n].isEqual(r))return!0;return!1};const p={makeSu:u,copySu:s,isSu:l,Su:o};var d={},y={},b=p.makeSu,_=p.isSu;y.random=function(r,e){void 0===r&&(r=b(0)),void 0===e&&(e=b(1)),_(r)||(r=b(r)),_(e)||(e=b(e));var n,t=String(Math.random());if("0"===t)n=r.isZero()?b(0):r;else{var i=t.split(".");n=b("0."+i[1]).multiplication(e)}return n},y.randomElement=function(r){return r[y.random(0,r.length).integer]},y.randomInt=function(r,e){if(!_(r)||!_(e))return"This function has been called with incorrect parameters";if(r.isEqual(e)||r.isLarge(e))return"This function has been called with incorrect parameters";for(var n=[],t=r.getNumber();t<=e.getNumber();t++){var i=b(t);n.push(i)}return y.randomElement(n)},y.makePrimeNumbers=function(r){r&&r.isSu&&r.isSu()&&(r=Number(r.getString())),r||(r=100),r>100&&(r=100);for(var e=[],n=2;n<r;n++){var t=b(n);t.isPrimeNumber()&&e.push(t)}return e},y.euclideanAlgorithm=function(r,e){if(!d.isNumber(r)||!d.isNumber(e))return"This function has been called with incorrect parameters";if(r===e)return r;var n;r<e&&(n=r,r=e,e=n);for(var t,i,a=r,o=e;0!==t;){if(0==(t=a%o)){i=o;break}if(1===t){i="coprime";break}0,a=o,o=t}return i},y.summation=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is not Number";for(var n=0,t=0;t<r.length;t++){var i=r[t];if(!d.isNumber(i))return"Argument is not Number";n+=i}return n},y.infiniteProduct=function(){for(var r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(0===r.length)return"Argument is empty.";for(var n=1,t=0;t<r.length;t++){var i=r[t];if(!d.isNumber(i))return"Argument is not a Number";n*=i}return n},y.division=function(r,e){if(void 0===r||void 0===e)return"This function has been called with incorrect parameters";var n=r/e;return{integer:{remainder:r%e,result:Math.floor(n)},realNumber:n}},y.divisorsSummation=function(r){for(var e=y.divisors(r),n=0,t=0;t<e.length;t++)n+=e[t];return n},y.isAbundantNumber=function(r){return y.divisorsSummation(r)>2*r},y.isKaprekarNumberTypeA=function(r){var e,n=String(r*r),t=n.length,i=0;return e=d.isOddNumber(t)?1+(i=(t-1)/2):i=t/2,Number(n.substr(0,i))+Number(n.substr(i,e))===r},y.isKaprekarNumberTypeB=function(r){var e=String(r).split(""),n=Number(e.sort().join(""));return Number(e.reverse().join(""))-n===r},y.isKaprekarNumber=function(r){if(y.isKaprekarNumberTypeA(r)||y.isKaprekarNumberTypeB(r))return!0},d.isInteger=function(r){return Math.floor(r)===r},y.harmonicMean=function(r){for(var e=r.length,n=0,t=0;t<e;t++)n+=1/r[t];return e/n},y.isHarmonicDivisorNumber=function(r){var e=y.divisors(r),n=y.harmonicMean(e);return!!d.isInteger(n)},d.isNaturalNumber=function(r){if(r>0&&d.isInteger(r))return!0},y.collatzhProblem=function(r){for(var e,n,t=[];r>1;)n=void 0,n=e=r,d.isOddNumber(e)?n=3*e+1:d.isEvenNumber(e)&&(n=e/2),r=n,t.push(r);return t},y.fermatTest=function(r,e){if(!d.isInteger(r)||d.isZero(r)||1===r)return"This function has been called with incorrect parameters. "+r+" is incorrect parameter.";e||(e=100);for(var n=1;n<=e;n++){var t=y.randomInt(2,r-1);if(1!==y.maxCommonDivisor(t,r))return"Composit Number";if(1!=Math.pow(t,r-1)%r)return"Composit Number"}return"Maybe Prime Number"},y.getIncludesNumbers=function(r){for(var e=[],n=r,t=!0;t;){var i=[n,r-n];if(e.push(i),(n-=1)<0){t=!1;break}}return e};const N={S:d,K:y};function A(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function x(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){S(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function S(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function w(r){return function(r){if(Array.isArray(r))return D(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return D(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function E(r){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}var T={isNumber:function(r){return"number"==typeof r&&!Number.isNaN(r)},moldNumArray:function(r){for(var e=r.array,n=r.negative,t=r.decimal_index;t<e.length&&0===e[e.length-1];)e.pop();for(;t>1&&0===e[0];)e.shift(),t--;0===e.length&&(e.push(0),t=1);var i={array:e,negative:n,is_num_array:!0};return i.decimal_index=0===t||t>0?t:e.length,i},numToArrayWithDecimal:function(r){if("object"===E(r))return console.info("Paremeter is object.",r);for(var e,n=String(r),t=!1;n[0].match(/^-/);)n=n.replace(/^-/,""),t=!t;var i=n.match(/\./g);if(!(i&&i.length>1)){i&&1===i.length?(e=n.match(/\./).index,n=n.replace(/\./,"")):e=n.length;for(var a=[],o=0;o<n.length;o++){var u=Number(n[o]);if(!T.isNumber(u))throw new Error("This function has been called with incorrect parameters");a.push(u)}return T.moldNumArray({array:a,negative:t,decimal_index:e})}},numArrayToString:function(r){if(!r.is_num_array||!r.array||!r.decimal_index)return"";var e=w(r.array);e.splice(r.decimal_index,0,".");var n=e.join("");return r.negative&&(n="-".concat(n)),n.replace(/\.$/,"")},compare:function(r,e){var n={small:null,large:null,equal:!1};if(!r||!e)return n;var t=r,i=e;if(!t.is_num_array&&!(t=T.numToArrayWithDecimal(t)))return n;if(!i.is_num_array&&!(i=T.numToArrayWithDecimal(i)))return n;var a=t.array,o=i.array,u=a.length,l=o.length,s=a.join(""),c=o.join(""),f=t.decimal_index,m=i.decimal_index,g=u-f,h=l-m;if(1===u&&"0"===s&&1===l&&"0"===c)return n.equal=!0,n;if(!t.negative&&i.negative)return n.small=i,n.large=t,n;if(t.negative&&!i.negative)return n.small=t,n.large=i,n;var v=t.negative,p={large:v?i:t,small:v?t:i,equal:!1},d={large:v?t:i,small:v?i:t,equal:!1};if(f>m)return p;if(f<m)return d;for(var y=0;y<f;y++){if(a[y]>o[y])return p;if(a[y]<o[y])return d}for(var b=g>h?g:h,_=0;_<b;_++){var N=a[f+_]?a[f+_]:0,A=o[m+_]?o[m+_]:0;if(N>A)return p;if(N<A)return d}return n.equal=!0,n},getLarge:function(r,e){return T.compare(r,e).large},getSmall:function(r,e){return T.compare(r,e).small},isEqual:function(r,e){return!!T.compare(r,e).equal},isSmall:function(r,e){return T.isEqual(T.getSmall(r,e),r)},isLarge:function(r,e){return T.isEqual(T.getLarge(r,e),r)},isZero:function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=T.getZero();return T.isEqual(e,r)},isOne:function(r){if(!r)return!1;if(!r.is_num_array)return!1;var e=T.numToArrayWithDecimal("1");return T.isEqual(e,r)},getZero:function(){return T.numToArrayWithDecimal("0")},getOne:function(){return T.numToArrayWithDecimal("1")},isNumArray:function(r){if(r instanceof Array){for(var e=0;e<r.length;e++)if(!T.isNumber(r[e]))return!1;return!0}},fixCarry:function(r,e){for(var n=e,t=r.length-1;t>=0;t--){var i=r[t];if(i<0){n=!0;break}if(0!==i)break}if(n){var a=[];r.forEach((function(r){a.push(-r)})),r=a}for(var o=[],u=0,l=0;l<r.length;l++){var s=r[l]+u;if(s>9){var c=String(s).split("");s=Number(c[c.length-1]);var f=c.slice(0,c.length-1);u=Number(f.join(""))}else s>=0&&s<=9?u=0:(s=10+s,u=-1);o.push(s)}return 0!==u&&o.push(u),{new_array:o,minus:n}},clone:function(r){return r.is_num_array?x(x({},r),{},{array:w(r.array)}):null},add_and_subtract:function(r,e,n){var t;if((r&&e||0===r||0===e)&&n){if("+"===n)t=!0;else{if("-"!==n)return;t=!1}var i,a=null;i=r.is_num_array?T.clone(r):T.numToArrayWithDecimal(r||0),a=e.is_num_array?T.clone(e):T.numToArrayWithDecimal(e||0);var o=i.array,u=a.array,l=T.isZero(i),s=T.isZero(a);if(l&&s)return i;if(l)return t||(a.negative=!a.negative),a;if(s)return i;var c=i.array.length-i.decimal_index,f=a.array.length-a.decimal_index,m=c-f;i.decimal_index>=a.decimal_index?i.decimal_index:a.decimal_index,i.array.length>a.array.length?i.array.length:a.array.length,m>0?u.push.apply(u,w(Array(m).fill(0))):m<0&&o.push.apply(o,w(Array(Math.abs(m)).fill(0)));var g=function(r){var e=r.a,n=r.b,t=r.plus,i=[],a=e.array.length;e.array.length<n.array.length&&(a=n.array.length);for(var o=e.array,u=n.array,l=e.negative?-1:1,s=n.negative?-1:1,c=0;c<a;c++){var f=o[c]?o[c]*l:0,m=u[c]?u[c]*s:0,g=t?f+m:f-m;i.push(g)}return T.fixCarry(i)}({a:{array:w(o).reverse(),negative:i.negative},b:{array:w(u).reverse(),negative:a.negative},plus:t}),h=g.new_array,v=g.minus,p=c>=f?c:f,d=h.length-p;return T.moldNumArray({array:w(h).reverse(),negative:!!v,decimal_index:d})}},add:function(r,e){return T.add_and_subtract(r,e,"+")},subtract:function(r,e){return T.add_and_subtract(r,e,"-")},multiplication:function(r,e){if(r&&e||0===r||0===e){var n,t;n=r.is_num_array?T.clone(r):T.numToArrayWithDecimal(r||0),t=e.is_num_array?T.clone(e):T.numToArrayWithDecimal(e||0);var i=n.array,a=t.array;if(T.isZero(n)||T.isZero(t))return T.numToArrayWithDecimal("0");if(T.isOne(n))return t;if(T.isOne(t))return n;var o,u=n.negative,l=t.negative;o=!(u&&l||!u&&!l);var s=n.array.length-n.decimal_index+(t.array.length-t.decimal_index),c=function(r){for(var e=r.b,n=[],t=r.a.array,i=e.array,a=0;a<t.length;a++){var o=t[a]?t[a]:0,u=new Array(a);u.fill(0,0,a);for(var l=0;l<i.length;l++){var s=o*(i[l]?i[l]:0);u.push(s);var c=a+l,f=n[c];f||(f=0);var m=f+s;n[c]=m}}return T.fixCarry(n)}({a:{array:w(i).reverse(),negative:n.negative},b:{array:w(a).reverse(),negative:t.negative}}).new_array,f=c.length-s;return T.moldNumArray({array:w(c).reverse(),negative:o,decimal_index:f})}},multiple:function(r,e){return T.multiplication(r,e)},division:function(r,e){if(r&&e||0===r||0===e){var n=null,t=null;if(n=r.is_num_array?T.clone(r):T.numToArrayWithDecimal(r||0),t=e.is_num_array?T.clone(e):T.numToArrayWithDecimal(e||0),!T.isZero(t)){if(T.isZero(n))return T.numToArrayWithDecimal("0");if(T.isOne(t))return n;if(T.isEqual(n,t))return T.numToArrayWithDecimal("1");var i,a=n.negative,o=t.negative;n.negative&&(n.negative=!1),t.negative&&(t.negative=!1),i=!(a&&o||!a&&!o);var u=T.numToArrayWithDecimal("10"),l=function(r){var e=r.a,i=r.b,a=r.max,o=[],u=e.array.length,l=T.getZero();console.info(e,i);var s=u,c=s,f=T.clone(e),m=0,g=e.array.join("").match(/^0+/);g&&g[0]&&(m=g[0].length,f=T.numToArrayWithDecimal(f.array.slice(m,f.array.length).join("")));var h=T.clone(i),v=0,p=h.array.join("").match(/^0+/);p&&p[0]&&(v=p[0].length,h=T.numToArrayWithDecimal(h.array.slice(v,h.array.length).join("")));var d=m-v,y=f.array.slice(m,e.array.length),b=n.array.length-n.decimal_index,_=t.array.length-t.decimal_index,N=b-m+1,A=_-v+1,x=e.decimal_index,S=i.decimal_index,D=b-_;console.info("zero_gap",d),console.info("decimal_gap",D),console.info("a_array",y),console.info("a.array",e.array),console.info("b.array",i.array),console.info("a_clone",f),console.info("b_clone",h),console.info("a_zero_length",m),console.info("b_zero_length",v),console.info("a_decimal_length",b),console.info("b_decimal_length",_),console.info("a_dec_num_length",N),console.info("b_dec_num_length",A),console.info("a_decimal_index",x),console.info("b_decimal_index",S);var E=u+a;console.info("length for For",E);for(var Z=[0],j=!1,q=0,k=0,O=0;O<E;O++){var M=!0,W=T.getZero(),P=null,L=f.array.length,I=T.multiplication(l,"10"),z=String(1===y.slice(O,O+1).length?y.slice(O,O+1)[0]:"0");l=T.add(I,z);var C=T.getZero();if(console.info("remain",l.array.join("")),O===L){if(T.isZero(l))break;j=!0,q++}O>L&&(Z.push(0),q++);for(var K=[1].concat(w(new Array(a).fill("0"))).join("");M;){if(k++,W=T.add(W,"1"),T.isEqual(K,W)){M=!1;break}var X=C;if(C=T.multiplication(h,W),T.isEqual(l,C)){M=!1,P=W,o.push(P),l=T.subtract(l,C);break}var R=T.getLarge(l,C);if(T.isEqual(C,R)){M=!1,P=T.subtract(W,"1"),o.push(P),l=T.subtract(l,X);break}}}console.info("countcount: ",k),console.info("decimal_count: ",q);var F=o.flatMap((function(r){return r.array}));console.info("res new_arr",F),console.info("res decimal_index",s);var B=!1,U=!1;m>0&&(B=!0),v>0&&(U=!0,F.push.apply(F,w(new Array(v).fill(0,0,v))));var $=Math.abs(d);d>0&&(console.info("zero_gap",d),console.info("new_arr",F),s-=m,F.unshift.apply(F,w(new Array($).fill(0,0,$)))),d<0&&(console.info("zero_gap",d),console.info("decimal_index",s),s+=$,F.push.apply(F,w(new Array($).fill(0,0,$)))),0===d&&(s-=m),b>0&&(s=s-b+m),v>0&&(s=s+_-v),N>A&&(s-=N-A),console.info("decimal_index",s),console.info("a_exists_zero",B),console.info("b_exists_zero",U),d>0&&(c-=Math.abs(d)),d<0&&(c+=Math.abs(d)),D>0&&(c-=Math.abs(D)),D<0&&(c+=Math.abs(D)),console.info("decimal_test_index",c);var H=l.array;return j&&(H=[].concat(Z,w(H))),{new_array:F,decimal_index:s,remain_array:H,remain_decimal_index:1}}({a:n,b:t,max:10}),s=l.new_array,c=l.decimal_index,f=l.remain_array,m=l.remain_decimal_index,g=function(r){var e=r.a,n=r.b,t=r.max,i=[],a=T.getZero(),o=T.clone(e),u=T.clone(n),l=e.decimal_index,s=T.clone(o);s.decimal_index=s.array.length;var c=0,f=o.array.join("").match(/^0+/);f&&f[0]&&(c=f[0].length,s=T.numToArrayWithDecimal(s.array.slice(c,s.array.length).join("")));var m=T.clone(u);m.decimal_index=m.array.length;var g=0,h=m.array.join("").match(/^0+/);h&&h[0]&&(g=h[0].length,m=T.numToArrayWithDecimal(m.array.slice(g,m.array.length).join("")));var v=c-g,p=w(s.array),d=o.array.length-o.decimal_index,y=u.array.length-u.decimal_index,b=d-c+1,_=y-g+1,N=o.decimal_index,A=u.decimal_index,x=d-y;console.info("zero_gap",v),console.info("decimal_gap",x),console.info("a_array",p),console.info("a.array",e.array),console.info("b.array",n.array),console.info("a_int",s),console.info("b_int",m),console.info("a_zero_length",c),console.info("b_zero_length",g),console.info("a_decimal_length",d),console.info("b_decimal_length",y),console.info("a_dec_num_length",b),console.info("b_dec_num_length",_),console.info("a_decimal_index",N),console.info("b_decimal_index",A);var S=s.array.length+t;console.info("length for For",S);for(var D=s.array.length,E=[0],Z=!1,j=0,q=0,k=0;k<S;k++){var O=!0,M=T.getZero(),W=null,P=T.multiplication(a,"10"),L=String(1===p.slice(k,k+1).length?p.slice(k,k+1)[0]:"0");a=T.add(P,L);var I=T.getZero();if(console.info("res_arr for",i.map((function(r){return r.array.join("")}))),console.info("remain for",a.array.join("")),k===D){if(T.isZero(a))break;Z=!0,j++}k>D&&(E.push(0),j++);for(var z=T.isSmall(t,1)?T.getOne():t;O;){if(q++,M=T.add(M,"1"),T.isLarge(M,z)){O=!1;break}var C=I;if(I=T.multiplication(m,M),T.isEqual(a,I)){O=!1,W=M,i.push(W),a=T.subtract(a,I);break}var K=T.getLarge(a,I);if(T.isEqual(I,K)){O=!1,W=T.subtract(M,"1"),i.push(W),a=T.subtract(a,C);break}}}console.info("countcount: ",q),console.info("decimal_count: ",j);var X=i.flatMap((function(r){return r.array}));console.info("res new_arr",X),console.info("res decimal_index",l);var R=!1,F=!1;c>0&&(R=!0),g>0&&(F=!0,X.push.apply(X,w(new Array(g).fill(0,0,g))));var B=Math.abs(v);v>0&&(console.info("zero_gap",v),console.info("new_arr",X),l-=c,X.unshift.apply(X,w(new Array(B).fill(0,0,B)))),v<0&&(console.info("zero_gap",v),console.info("decimal_index",l),l+=B,X.push.apply(X,w(new Array(B).fill(0,0,B)))),0===v&&(l-=c),d>0&&(l=l-d+c),g>0&&(l=l+y-g),b>_&&(l-=b-_),console.info("decimal_index",l),console.info("a_exists_zero",R),console.info("b_exists_zero",F);var U=a.array;return Z&&(U=[].concat(E,w(U))),{new_array:X,decimal_index:l,remain_array:U}}({a:n,b:t,max:u});console.info(g);var h=T.moldNumArray({array:w(f),negative:i,decimal_index:m}),v=T.moldNumArray({array:w(s),negative:i,decimal_index:c});return console.info(v),x(x({},v),{},{remainder:h})}}},divide:function(r,e){return T.division(r,e)}};const Z={s:p,S:N.S,K:N.K,core:t,core2:T};return e.default})()}));