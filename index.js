// (function(global){

  const MAX = 10000;

  const S = {};
  const K = {};

  const FIRST_PRIME_NUMBER = 2;

  S.isNumber = function(n){
    if(typeof n === "number"){
      if(Number.isNaN(n)){
        return NaN;
      }else{
        return true;
      }
    }
  };

  S.isPrimeNumber = function(n){
    if(!S.isNumber(n)){
      return false;
    }
    if(n === 0 || n === 1){
      return false;
    }
    if(n === 2){
      return true;
    }

    if(n >= MAX){
      return `Argument exceeds maximum value(${MAX})`;
    }

    let max = n;
    for( var i = max -1; i > 1; i--){
      if( (max % i) === 0 ){
        return false;
      }
    }
    return true;
  };

  S.nextNumber = function(n){
    if(!S.isNumber(n)){
      return;
    }
    return ++n;
  };

  S.prevNumber = function(n){
    if(!S.isNumber(n)){
      return;
    }
    return --n;
  };

  K.random = function(min, max){

    if(min instanceof Array && min.length > 0){
      return K.randomElement(min);
    }

    if(min === undefined){
      min = 0;
    }
    if(max === undefined){
      max = 1;
    }

    var len = max - min;
    var rand = Math.random();
    var res = ( rand * len ) + min;

    return res;
  };

  K.randomElement = function(array){
    var len = array.length;
    var rand = Math.random();

    var i = Math.floor(rand * len);

    return array[i];

  };

  K.randomInt = function(min, max){
    if( !S.isNumber(min) || !S.isNumber(max)){
      return "This function has been called with incorrect parameters";
    }
    if(min >= max){
      return "This function has been called with incorrect parameters";
    }

    var arr = [];
    for(var i = min; i <= max; i++){
      arr.push(i);
    }

    var res = K.randomElement(arr);

    return res;
  };

  K.primeNumbers = function(){
    var arr = [];
    for(var i = FIRST_PRIME_NUMBER; i < MAX; i++){
      if(S.isPrimeNumber(i)){
        arr.push(i);
      }
    }
    return arr;
  };

  K.fibonacciSequence = function(start){
    if(start === undefined){
      start = 0;
    }
    var arr = [start, start + 1];
    var func = function(arr){
      if(arr[arr.length - 1] >= MAX){
        return arr;
      }
      var a = Number(arr[arr.length - 2]);
      var b = Number(arr[arr.length - 1]);
      var c = Number(a + b);
      arr.push(c);
      return func(arr);
    };
    return func(arr);
  };

  S.isFibonacciNumber = function(n){
    if(n === 0){
      return true;
    }
    var fib = K.fibonacciSequence(0);
    var ind = fib.indexOf(n);
    if(ind >= 0){
      return true;
    }
  };

  S.isEvenNumber = function(n){
    if( S.isNumber(n) && n % 2 === 0 ){
      return true;
    }
  };

  S.isOddNumber = function(n){
    if( S.isNumber(n) && n % 2 !== 0 ){
      return true;
    }
  };

  K.divisors = function(n){
    var arr = [];
    for(var i = 1; i <= n; i++){
      if(n % i === 0){
        arr.push(i);
      }
    }
    return arr;
  };

  // ユークリッドの互除法
  K.euclideanAlgorithm = function(a, b){
    if( !S.isNumber(a) || !S.isNumber(b)){
      return "This function has been called with incorrect parameters";
    }
    if( a === b){
      return a;
    }

    var temp;
    if( a < b){
      temp = a;
      a = b;
      b = temp;
    }

    var atemp = a;
    var btemp = b;
    var ctemp;
    var res;
    var counter = 0;
    var coprime = "coprime";
    while(ctemp !==0){
      ctemp = atemp % btemp;
      if(ctemp === 0){
        res = btemp;
        break;
      }
      if(ctemp === 1){
        res = coprime;
        break;
      }
      if(counter >= MAX){
        break;
      }
      atemp = btemp;
      btemp = ctemp;
    }
    return res;
  };

  K.commonDivisors = function(a, b){
    if(a === undefined || b === undefined){
      return "This function has been called with incorrect parameters";
    }

    var arr_a = K.divisors(a);
    if(a === b){
      return arr_a;
    }
    var arr_b = K.divisors(b);

    var divs = [];

    for(var k = 0; k < arr_a.length; k++){
      var elm_a = arr_a[k];
      for(var l = 0; l < arr_b.length; l++){
        var elm_b = arr_b[l];
        if(elm_a === elm_b){
          divs.push(elm_a);
        }
      }
    }

    return divs;
  };

  K.maxCommonDivisor = function(a, b){
    var arr = K.commonDivisors(a, b);
    return arr[arr.length - 1];
  };

  K.multiple = function(n){
    var arr = [];
    for(var i = 1; i < MAX; i++){
      arr.push(n * i);
    }
    return arr;
  };

  K.leastCommonMultiple = function(a, b){
    if(a === undefined || b === undefined){
      return "This function has been called with incorrect parameters";
    }

    var big;
    if( a < b){
      big = b;
    }else{
      big = a;
    }
    var arr_a = [];
    var arr_b = [];

    var i =1;
    while(i <= big){
      arr_a.push( a * i);
      i++;
    }
    var j =1;
    while(j <= big){
      arr_b.push( b * j);
      j++;
    }

    for(var k = 0; k < arr_a.length; k++){
      var elm_a = arr_a[k];
      for(var l = 0; l < arr_b.length; l++){
        var elm_b = arr_b[l];
        if(elm_a === elm_b){
          return elm_a;
        }
      }
    }
  };

  K.summation = function(){
    var array = [];
    for(var i = 0; i < arguments.length; i++){
      array.push(arguments[i]);
    }
    if(array.length === 0){
      return "Argument is not Number";
    }

    var sum = 0;
    for(var j = 0; j < array.length; j++){
      var elm = array[j];
      if(S.isNumber(elm)){
        sum += elm;
      }else{
        return "Argument is not Number";
      }
    }
    return sum;
  };

  K.infiniteProduct = function(){
    var array = [];
    for(var i = 0; i < arguments.length; i++){
      array.push(arguments[i]);
    }
    if(array.length === 0){
      return "Argument is not Number";
    }
    var ip = 1;
    for(var j = 0; j < array.length; j++){
      var elm = array[j];
      if(S.isNumber(elm)){
        ip = ip * elm;
      }else{
        return "Argument is not Number";
      }
    }

    return ip;
  };

  K.division = function(dividend, divisor){
    if(dividend === undefined || divisor === undefined){
      return "This function has been called with incorrect parameters";
    }

    var remainder = dividend % divisor;
    var result = dividend / divisor;
    var result_int = Math.floor(result);
    return {
      integer: {
        remainder: remainder,
        result: result_int
      },
      realNumber: result
    };
  };

  K.divisorsSummation = function(n){
    var arr = K.divisors(n);
    var a = 0;
    for(var i = 0; i < arr.length; i++){
      a += arr[i];
    }
    return a;
  };

  K.isAbundantNumber = function(n){
    var sum = K.divisorsSummation(n);
    if(sum > n * 2){
      return true;
    }
  };

  K.isKaprekarNumberTypeA = function(n){
    var num = n * n;
    var s = String(num);
    var len = s.length;
    var first_len = 0;
    var after_len = 0;
    var first, after;
    if(S.isOddNumber(len)){
      first_len = (len - 1) / 2;
      after_len = first_len + 1;
    }else{
      first_len = len / 2;
      after_len = first_len;
    }
    first = Number(s.substr(0, first_len));
    after = Number(s.substr(first_len, after_len));

    if(( first + after ) === n){
      return true;
    }

  };

  K.isKaprekarNumberTypeB = function(n){

    var arr = String(n).split("");

    var min = Number(arr.sort().join(""));
    var max = Number(arr.reverse().join(""));

    if((max - min) === n){
      return true;
    }

  };

  K.isKaprekarNumber = function(n){
    if(K.isKaprekarNumberTypeA(n) || K.isKaprekarNumberTypeB(n)){
      return true;
    }
  };

  S.isInteger = function(n){
    var f = Math.floor(n);
    if( f === n){
      return true;
    }
  };

  // 調和平均
  K.harmonicMean = function(arr){
    var len = arr.length;
    var sum = 0;
    for(var i = 0; i < len; i++){
      sum += 1 / arr[i];
    }
    return len / sum;
  };

  // 調和数かどうか
  K.isHarmonicDivisorNumber = function(n){
    var arr = K.divisors(n);
    var res = K.harmonicMean(arr);
    if(S.isInteger(res)){
      return true;
    }
  };

  S.isNaturalNumber = function(n){
    if(n > 0 && S.isInteger(n)){
      return true;
    }
  };

  S.isZero = function(n){
    if( n === 0){
      return true;
    }
  };

  K.collatzhProbrem = function(num){

    var arr = [];

    var calc = function(n){
      var res = n;
      if(S.isOddNumber(n)){
        res = n * 3 + 1;
      }else if(S.isEvenNumber(n)){
        res = n / 2;
      }
      return res;
    };

    while(num > 1){
      num = calc(num);
      arr.push(num);
    }

    return arr;

  };

  // フェルマーテスト
  // JSの扱える範囲を超えていてうまく動かず
  K.fermatTest = function(n, max){
    if(!S.isInteger(n) || S.isZero(n) || n === 1){
      return "This function has been called with incorrect parameters";
    }

    if(!max){
      max = 100;
    }

    for( var i = 1; i <= max; i++){
      var a = K.randomInt(2, n - 1);
      if(K.maxCommonDivisor(a, n) !== 1){
        console.log(a, n);
        return "Composit Number";
      }
      var res = Math.pow(a, n - 1) % n;
      console.log(i, n, a, res);
      if(res !== 1){
        return "Composit Number";
      }
    }
    return "Maybe Prime Number";
  };

  // 組み合わせ数の計算
  // K.combinations = function(arr){
  // };

  // 配列での計算
  K.numToArray = function(n){

    var arr = [];
    var str = String(n);
    var len = str.length;
    for(var i = 0; i < len; i++){
      var elm = Number(str.slice(i, i + 1));
      if(!S.isNumber(elm)){
        return "This function has been called with incorrect parameters";
      }
      arr.push(elm);
    }

    return arr;

  };

  K.isNumArray = function(arr){
    if( arr instanceof Array ){
      for(var i = 0; i < arr.length; i++){
        if( !S.isNumber(arr[i]) ){
          return false;
        }
      }
      return true;
    }
  };

  // todo 0start
  K.arraySummation = function(a, b){
    if( !(a instanceof Array) ){
      a = K.numToArray(a);
    }
    if( !(b instanceof Array) ){
      b = K.numToArray(b);
    }

    if(!K.isNumArray(a) || !K.isNumArray(b)){
      return;
    }
    if(S.isZero(a[0]) && S.isZero(b[0])){
      return {
        array: [0],
        string: "0",
        number: 0,
        length: 1
      };
    }

    const A = makeSu(a);
    const B = makeSu(b);

    console.log(A,B);

    var res = K.getLarger(a, b);
    var arr_a = res[0];
    var arr_b = res[1];
    var len = arr_a.length;

    var gap = len - arr_b.length;

    var over = 0, arr_c = [];
    for(var i = len - 1; i >= 0; i--){
      var _res;
      var elm_a = arr_a[i];
      var elm_b = arr_b[i - gap] || 0;
      _res = elm_a + elm_b + over;
      if(_res >= 10){
        over = 1;
        _res = _res - 10;
      }else{
        over = 0;
      }
      arr_c.unshift(_res);
    }
    if(over > 0){
      arr_c.unshift(over);
    }

    var str = arr_c.join("");
    var num = Number(str);
    var leng = arr_c.length;

    const result = makeSu(arr_c);

    return result;
  };

  K.getLarger = function(a, b){
    var arr_a = [], arr_b = [];
    for(var i = 0; i < a.length; i++){
      var elm_a = a[i];
      if(elm_a === 0 && arr_a.length === 0){
        continue;
      }
      if(elm_a >=  0 && elm_a < 10){
        arr_a.push(elm_a);
      }
    }

    for(var j = 0; j < b.length; j++){
      var elm_b = b[j];
      if(elm_b === 0 && arr_b.length === 0){
        continue;
      }
      if(elm_b >=  0 && elm_b < 10){
        arr_b.push(elm_b);
      }
    }

    var res;
    if(arr_a.length > arr_b.length){
      res = [a, b];
    }else if(arr_a.length < arr_b.length){
      res = [b, a];
    }else{
      for(var k = 0; k < arr_a.length; k++){
        var elm_aa = arr_a[k];
        var elm_bb = arr_b[k];
        if(elm_aa > elm_bb){
          res = [a, b];
          break;
        }else if(elm_aa < elm_bb){
          res = [b, a];
          break;
        }else{
          res = [a, b];
        }
      }
    }
    return res;
  };

  K.isLarge = function(a, b){
    if(K.isEqual(a, b)){
      return false;
    }
    var res = K.getLarger(a, b);
    if(res[0] === a){
      return true;
    }else{
      return false;
    }
  };

  K.isEqual = function(a, b){
    if(!K.isNumArray(a) || !K.isNumArray(b)){
      return;
    }
    if(a.length === b.length){
      for(var i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
          return false;
        }
      }
      return true;
    }

  };


  K.arraySubtraction = function(a, b){
    if( !(a instanceof Array) ){
      a = K.numToArray(a);
    }
    if( !(b instanceof Array) ){
      b = K.numToArray(b);
    }

    if(!K.isNumArray(a) || !K.isNumArray(b)){
      return;
    }
    if(S.isZero(a[0]) || S.isZero(b[0])){
      return;
    }

    var negative = false;
    var res = K.getLarger(a, b);
    if(res[0] === b){
      negative = true;
    }

    var arr_a = res[0];
    var arr_b = res[1];
    var len = arr_b.length;

    var gap = arr_a.length - len;

    var arr_c = [];

    for(var i = 0; i < gap; i++){
      arr_c.push(arr_a[i]);
    }

    for(var j = 0; j < len; j++){
      var elm_b = arr_b[j];
      var elm_a = arr_a[j + gap];
      var higher_digit = arr_c[arr_c.length - 1];
      if(elm_b <= elm_a){
        arr_c.push( elm_a - elm_b );
      }else{
        arr_c[arr_c.length - 1] = higher_digit - 1;
        arr_c.push( 10 + elm_a - elm_b);
      }
    }

    var str = arr_c.join("");
    var m = str.match(/[^0+?]/);
    if(m){
      str = str.slice(m.index);
      arr_c = arr_c.slice(m.index);
    }else{
      str = "0";
    }
    var num = Number(str);
    var leng = arr_c.length;

    return {
      array: arr_c,
      string: negative ? "-" + str : str,
      number: negative ? -num : num,
      length: leng,
      negative: negative
    };

  };

  K.arrayMultiplication = function(a, b){
    if( !(a instanceof Array) ){
      a = K.numToArray(a);
    }
    if( !(b instanceof Array) ){
      b = K.numToArray(b);
    }

    if(!K.isNumArray(a) || !K.isNumArray(b)){
      return;
    }
    if(S.isZero(a[0]) || S.isZero(b[0])){
      return;
    }

    var res_arrs = [],
        len_a = a.length,
        len_b = b.length;

    for(var i = len_a - 1; i >= 0; i--){
      var elm_a = a[i];
      var over = 0;
      var res_arr = [];
      for(var j = len_b - 1; j >= 0; j--){
        var elm_b = b[j];
        var res = (elm_a * elm_b) + over;
        over = 0;
        var arr = String(res).split("");
        if(arr.length === 2){
          res = Number(arr[1]);
          over = Number(arr[0]);
        }
        res_arr.unshift(res);
      }
      if(over > 0){
        res_arr.unshift(over);
      }
      var pad = len_a -i - 1;
      for(var k = 0; k < pad; k++){
        res_arr.push(0);
      }
      // console.log(res_arr);
      res_arrs.push(res_arr);
    }

    var before = [0];
    var r = "";
    for(var l = 0; l < res_arrs.length; l++){
       r = K.arraySummation(res_arrs[l], before).array;
      before = r;
    }

    var str = r.join("");
    var num = Number(str);
    var leng = r.length;

    return {
      array: r,
      string: str,
      number: num,
      length: leng
    };

  };

  K.arrayDivision = function(a, b){
    if( !(a instanceof Array) ){
      a = K.numToArray(a);
    }
    if( !(b instanceof Array) ){
      b = K.numToArray(b);
    }
    if(!K.isNumArray(a) || !K.isNumArray(b)){
      return;
    }
    if(S.isZero(a[0]) || S.isZero(b[0])){
      return;
    }

    var temp = [0];
    var sum = [0];
    while(K.isLarge(a, sum) || K.isEqual(a, sum)){
      // K.getLarger(sum, a);
      temp = K.arraySummation(temp, [1]).array;
      // console.log(temp);
      sum = K.arrayMultiplication(b,temp).array;
      // console.log(a, sum, K.isLarge(a, sum));

    }

    var res;
    var remainder = 0;
    if(K.isEqual(a, sum)){
      res = temp;
    }else{
      res = K.arraySubtraction(temp, [1]);
      sum = K.arraySubtraction(sum, b).array;
      remainder = K.arraySubtraction(a, sum).array;
    }

    res.remainder = remainder;

    return res;

  };

  const Su = function(num, negative){
    if(!num){
      num = 0;
    }
    if(!negative && num < 0){
      negative = true;
      num = num * -1;
    }

    let arr,
        str,
        leng;
    if(K.isNumArray(num)){
      num = Number(num.join(""));
    }

    num = Number(num);
    if(isNaN(num)){
      num = 0;
    }

    if(num === 0){
      negative = false;
    }


    arr = K.numToArray(num);
    str = arr.join("");
    leng = arr.length;

    this.array = arr;
    this.number = negative ? -num : num;
    this.string = negative ? "-" + str : str;
    this.length = leng;
    this.negative = negative ? true : false;
  };

  const makeSu = function(num, negative){
    return new Su(num, negative);
  };

  const isSu = function(su){
    if(su instanceof Su){
      return true;
    }
  };

  const getLarge = function(a, b){
    let aa = a.array;
    let bb = b.array;
    let arr_a = [], arr_b = [];
    for(var i = 0; i < aa.length; i++){
      var elm_a = aa[i];
      if(elm_a === 0 && arr_a.length === 0){
        continue;
      }
      if(elm_a >=  0 && elm_a < 10){
        arr_a.push(elm_a);
      }
    }

    for(var j = 0; j < b.length; j++){
      var elm_b = bb[j];
      if(elm_b === 0 && arr_b.length === 0){
        continue;
      }
      if(elm_b >=  0 && elm_b < 10){
        arr_b.push(elm_b);
      }
    }

    var res = [a, b];
    if(arr_a.length > arr_b.length){
      res = [a, b];
    }else if(arr_a.length < arr_b.length){
      res = [b, a];
    }else{
      for(var k = 0; k < arr_a.length; k++){
        var elm_aa = arr_a[k];
        var elm_bb = arr_b[k];
        if(elm_aa > elm_bb){
          res = [a, b];
          break;
        }else if(elm_aa < elm_bb){
          res = [b, a];
          break;
        }else{
          res = [a, b];
        }
      }
    }
    return res;
  };

  Su.prototype.add = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }

    const a = this;
    const b = su;

    const res = getLarge(a, b);
    const arr_a = res[0].array;
    const arr_b = res[1].array;
    const len = arr_a.length;

    const gap = len - arr_b.length;

    let over = 0, arr_c = [];
    for(let i = len - 1; i >= 0; i--){
      let _res;
      let elm_a = arr_a[i];
      let elm_b = arr_b[i - gap] || 0;
      _res = elm_a + elm_b + over;
      if(_res >= 10){
        over = 1;
        _res = _res - 10;
      }else{
        over = 0;
      }
      arr_c.unshift(_res);
    }
    if(over > 0){
      arr_c.unshift(over);
    }

    const result = makeSu(arr_c);

    return result;
  };

  Su.prototype.sum = function(su){
    return this.add(su);
  };

  Su.prototype.plus = function(su){
    return this.add(su);
  };

  Su.prototype.subtract = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }

    const a = this;
    const b = su;

    let negative = false;
    const res = getLarge(a, b);
    if(res[0] === b){
      negative = true;
    }

    const arr_a = res[0].array;
    const arr_b = res[1].array;
    const len = arr_b.length;

    const gap = arr_a.length - len;

    let arr_c = [];

    for(let i = 0; i < gap; i++){
      arr_c.push(arr_a[i]);
    }

    for(let j = 0; j < len; j++){
      let elm_b = arr_b[j];
      let elm_a = arr_a[j + gap];
      let higher_digit = arr_c[arr_c.length - 1];
      if(elm_b <= elm_a){
        arr_c.push( elm_a - elm_b );
      }else{
        arr_c[arr_c.length - 1] = higher_digit - 1;
        arr_c.push( 10 + elm_a - elm_b);
      }
    }

    const result = makeSu(arr_c, negative);

    return result;

  };

  Su.prototype.minus = function(su){
    return this.subtract(su);
  };

  Su.prototype.multiplication = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }

    const a = this;
    const b = su;

    var res_arrs = [],
        len_a = a.length,
        len_b = b.length;

    for(var i = len_a - 1; i >= 0; i--){
      var elm_a = a.array[i];
      var over = 0;
      var res_arr = [];
      for(var j = len_b - 1; j >= 0; j--){
        var elm_b = b.array[j];
        var res = (elm_a * elm_b) + over;
        over = 0;
        var arr = String(res).split("");
        if(arr.length === 2){
          res = Number(arr[1]);
          over = Number(arr[0]);
        }
        res_arr.unshift(res);
      }
      if(over > 0){
        res_arr.unshift(over);
      }
      var pad = len_a -i - 1;
      for(var k = 0; k < pad; k++){
        res_arr.push(0);
      }
      // console.log(res_arr);
      res_arrs.push(res_arr);
    }

    var before = [0];
    var r = "";
    console.log(res_arrs);
    for(var l = 0; l < res_arrs.length; l++){
      r = res_arrs[1].add(before);
      before = r;
    }

    var str = r.join("");
    var num = Number(str);
    var leng = r.length;

    return {
      array: r,
      string: str,
      number: num,
      length: leng
    };

  };


// })(window);
