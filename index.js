// (function(global){

  const MAX = 10000;
  const MIN = -10000;

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

    let temp = [0];
    let sum = [0];
    while(K.isLarge(a, sum) || K.isEqual(a, sum)){
      // K.getLarger(sum, a);
      temp = K.arraySummation(temp, [1]).array;
      // console.log(temp);
      sum = K.arrayMultiplication(b,temp).array;
      // console.log(a, sum, K.isLarge(a, sum));

    }

    let res;
    let remainder = 0;
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



  const Su = function(n, option){
    if(!n){
      n = 0;
    }
    if(!option){
      option = {};
    }

    let str = String(n);

    let negative = false;
    if(str[0] === "-"){
      str = str.slice(1, str.length);
      negative = true;
    }
    if(!negative && option && option.negative){
      negative = true;
    }

    if(isNaN(Number(str))){
      str = "0";
    }
    if(str === "0"){
      negative = false;
    }

    let parts = str.split(".");
    let int_str = parts[0];
    let decimal_str = parts[1];

    let denominator = [1];
    if(option.denominator){
      denominator = option.denominator;
    }

    let int_arr = K.numToArray(int_str);
    let decimal_arr = decimal_str ? K.numToArray(decimal_str) : [0];

    this.integer = int_arr;
    this.decimal = decimal_arr;
    this.negative = negative ? true : false;
    this.fraction = {
      numerator: this.integer,
      denominator: denominator
    };
  };

  const makeSu = function(num, option){
    return new Su(num, option);
  };

  const isSu = function(su){
    if(su instanceof Su){
      return true;
    }
  };

  Su.prototype.getString = function(){
    let str = String( this.integer.join(""));
    const ac = this.decimal.reduce((a,e) => a + e);
    if(ac !== 0){
      str += "." + this.decimal.join("");
    }
    return this.negative? "-" + str: str;
  };

  Su.prototype.getNumber = function(){
    const num = Number(this.getString());
    return num;
  };

  Su.prototype.getInteger = function(){
    const num = Number(this.integer.join(""));
    return num;
  };

  Su.prototype.getDecimal = function(){
    const num = Number("0." + this.decimal.join(""));
    return num;
  };


  const getLarge = function(a, b, absolute = false){

    let negative = false;
    let field = [];

    if(absolute){
      a.negative = false;
      b.negative = false;
    }

    if(!a.negative && b.negative){
      return a;
    }else if(a.negative && !b.negative){
      return b;
    }else if(a.negative && b.negative){
      negative = true;
    }

    if(a.integer.length > b.integer.length){
      if(negative){
        return b;
      }
      return a;
    }else if(a.integer.length < b.integer.length){
      if(negative){
        return a;
      }
      return b;
    }else{
      for(let i = 0; i < a.integer.length; i++){
        let elm_a = a.integer[i];
        let elm_b = b.integer[i];
        if(elm_a > elm_b){
          field = [a, b];
          break;
        }else if(elm_a < elm_b){
          field = [b, a];
          break;
        }
      }
    }

    if(field.length === 0){
      const len = a.decimal.length >= b.decimal.length ? a.decimal.length : b.decimal.length;
      for(let i = 0; i < len; i++){
        let elm_a = a.decimal[i] ? a.decimal[i] : 0;
        let elm_b = b.decimal[i] ? b.decimal[i] : 0;
        if(elm_a > elm_b){
          field = [a, b];
          break;
        }else if(elm_a < elm_b){
          field = [b, a];
          break;
        }
      }
    }

    if(negative){
      field = [field[1], field[0]];
    }
    if(field.length === 0){
      return null;
    }else{
      return field[0];
    }

  };

  Su.prototype.CONSTANT = {
    MAX: makeSu(MAX),
    MIN: makeSu(MIN)
  };

  Su.prototype.isEqual = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }
    const a = this;
    const b = su;
    const i_a = a.integer;
    const i_b = b.integer;
    const d_a = a.decimal;
    const d_b = b.decimal;

    const large = getLarge(a, b);

    if(!large){
      if(i_a.length === i_b.length){
        for(let i = 0; i < i_a.length; i++){
          if(i_a[i] !== i_b[i]){
            return false;
          }
        }
      }else if(d_a.length === d_b.length){
        for(let i = 0; i < d_a.length; i++){
          if(d_a[i] !== d_b[i]){
            return false;
          }
        }
      }else{
        return false;
      }

      if(a.negative === b.negative){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }

  };

  Su.prototype.isZero = function(){
    if(this.integer.length === 1 && this.integer[0] === 0 && this.decimal.length === 1 && this.decimal[0] === 0){
      return true;
    }else{
      return false;
    }
  };

  Su.prototype.isOne = function(){
    if(this.getString() === "1"){
      return true;
    }else{
      return false;
    }
  };

  Su.prototype.isLarge = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }
    const a = this;
    const b = su;
    const res = getLarge(a, b);
    if(!res){
      return false;
    }
    if(res === a){
      return true;
    }else{
      return false;
    }
  };

  Su.prototype.isInteger = function(){
    const denominator = this.fraction.denominator;
    if(denominator.length === 1 && denominator[0] === 1){
      return true;
    }
  };

  Su.prototype.isNaturalNumber = function(){
    if(!this.negative && this.isInteger() && this.isLarge(0)){
      return true;
    }
  };

  Su.prototype.concatIntegerAndDecimal = function(){
    return this.integer.concat(this.decimal);
  };

  Su.prototype.add = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }

    if(su.isZero()){
      return this;
    }

    const a = this;
    const b = su;

    let negative;
    if(a.negative && b.negative){
      negative = true;
    }else if(!a.negative && !b.negative){
      negative = false;
    }else{
      return a.subtract(b);
    }

    let res = getLarge(a, b);
    if(!res){
      res = a;
    }
    let int_a = res.integer;
    let dec_a = res.decimal;
    let int_b, dec_b;
    if(res === a){
      int_b = b.integer;
      dec_b = b.decimal;
    }else{
      int_b = a.integer;
      dec_b = a.decimal;
    }

    let len_i = int_a.length;
    let len_d = dec_a.length;

    if(dec_b.length > dec_a.length){
      len_d = dec_b.length;
    }
    let over = 0,
        int_res = [],
        dec_res = [];


    for(let i = len_d - 1; i >= 0; i--){
      let _res;
      let elm_a = dec_a[i] || 0;
      let elm_b = dec_b[i] || 0;
      _res = elm_a + elm_b + over;
      if(_res >= 10){
        over = 1;
        _res = _res - 10;
      }else{
        over = 0;
      }
      dec_res.unshift(_res);
    }

    for(let i = dec_res.length - 1; i >= 0; i-- ){
      let d = dec_res[i];
      if(d === 0){
        dec_res.pop();
      }else{
        break;
      }
    }

    const gap = len_i - int_b.length;
    for(let i = len_i - 1; i >= 0; i--){
      let _res;
      let elm_a = int_a[i];
      let elm_b = int_b[i - gap] || 0;
      _res = elm_a + elm_b + over;
      if(_res >= 10){
        over = 1;
        _res = _res - 10;
      }else{
        over = 0;
      }
      int_res.unshift(_res);
    }
    if(over > 0){
      int_res.unshift(over);
    }

    const result = makeSu(int_res.join("") + "." + dec_res.join(""), {negative: negative});

    return result;
  };

  Su.prototype.subtract = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }

    if(su.isZero()){
      return this;
    }

    let a = this;
    let b = su;

    if(a.negative !== b.negative){
      b.negative = !b.negative;
      return a.add(b);
    }

    let negative = a.negative;

    const res = getLarge(a, b, true);
    if(res !== a){
      a = su;
      b = this;
      negative = a.negative;
    }

    const int_a = a.integer;
    const int_b = b.integer;
    const len_i = int_a.length;
    const gap_i = int_a.length - int_b.length;

    let int = [];
    for(let i = 0; i < gap_i; i++){
      int.push(int_a[i]);
    }
    for(let j = 0; j < int_b.length; j++){
      let elm_b = int_b[j];
      let elm_a = int_a[j + gap_i];
      let higher_digit = int[int.length - 1];
      if(elm_b <= elm_a){
        int.push( elm_a - elm_b );
      }else{
        int[int.length - 1] = higher_digit - 1;
        int.push( 10 + elm_a - elm_b);
      }
    }

    const dec_a = a.decimal;
    const dec_b = b.decimal;
    const len_d = ( (dec_a.length - dec_b.length) >= 0 ) ? dec_a.length : dec_b.length;

    let dec = [];
    for(let k = 0; k < len_d; k++){
      let elm_b = dec_b[k] ? dec_b[k] : 0;
      let elm_a = dec_a[k] ? dec_a[k] : 0;
      let higher_digit = dec[k -1] ? dec[k - 1] : int[int.length -1];
      if(elm_b <= elm_a){
        dec.push( elm_a - elm_b );
      }else{
        if(dec[dec.length - 1]){
          dec[dec.length - 1] = higher_digit - 1;
        }else{
          int[int.length -1] = higher_digit - 1;
        }
        dec.push( 10 + elm_a - elm_b);
      }

    }

    for(let l = dec.length - 1; l >= 0; l--){
      let d = dec[l];
      if(d === 0){
        dec.pop();
      }else{
        break;
      }
    }

    const result = makeSu(int.join("") + "." + dec.join(""), { negative: negative });

    return result;

  };

  Su.prototype.negate = function(){
    if(this.number === 0){
      return this;
    }
    if(this.negative){
      this.nevative = false;
    }else{
      this.negative = true;
    }
    return this;
  };

  Su.prototype.multiplication = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }

    const a = this;
    const b = su;

    if(a.isZero() || a.isZero()){
      return makeSu(0);
    }

    let negative = false;
    if(a.negative === false && b.negative === true){
      negative = true;
    }else if(a.negative === true && b.negative === false){
      negative = true;
    }

    const dec_a = a.decimal;
    const dec_b = b.decimal;
    const len_d_a = dec_a.length;
    const len_d_b = dec_b.length;

    const aa = a.concatIntegerAndDecimal();
    const bb = b.concatIntegerAndDecimal();

    const gap_dec = len_d_a - len_d_b;
    let len_dec = len_d_a;
    if(gap_dec < 0){
      for(let i = 0; i < Math.abs(gap_dec); i++){
        aa.push(0);
      }
      len_dec = len_d_b;
    }else if(gap_dec > 0){
      for(let i = 0; i < Math.abs(gap_dec); i++){
        bb.push(0);
      }
    }

    let counter_i_a = a.integer.length;
    let counter_d_a = a.decimal.length;

    const results = [makeSu(0)];

    while(counter_i_a > 0 || counter_d_a > 0){
      let elm_a;
      let is_dec_a;
      if(counter_d_a > 0){
        counter_d_a--;
        elm_a = a.decimal[counter_d_a];
        is_dec_a = true;
      }else{
        counter_i_a--;
        elm_a = a.integer[counter_i_a];
        is_dec_a = false;
      }
      let is_int_a = !is_dec_a;
      let counter_i_b = b.integer.length;
      let counter_d_b = b.decimal.length;

      while(counter_i_b > 0 || counter_d_b > 0){
        let elm_b;
        let is_dec_b = false;
        if(counter_d_b > 0){
          counter_d_b--;
          elm_b = b.decimal[counter_d_b];
          is_dec_b = true;
        }else{
          counter_i_b--;
          elm_b = b.integer[counter_i_b];
          is_dec_b = false;
        }
        let is_int_b = !is_dec_b;

        const mult = elm_a * elm_b;
        const dis_a = is_int_a ? a.integer.length - counter_i_a : -(counter_d_a + 1);
        const dis_b = is_int_b ? b.integer.length - counter_i_b : -(counter_d_b + 1);


        const mult_res = String(mult).split("");
        let dis = dis_a + dis_b;

        if(dis_a < 0 && dis_b > 0){
          dis = dis_a;
        }else if(dis_a > 0 && dis_b < 0){
          dis = dis_b;
        }


        let res;
        if(dis === 0){
          if(mult_res.length === 2){
            res = mult_res[0], ".", mult_res[1];
          }else{
            res = "0." + mult_res[0];
          }
        }else if(dis > 0){
          res = mult_res.join("").padEnd(dis - mult_res.length, "0");
        }else{
          if(mult_res.length === 2 && dis === -1){
            res = mult_res[0] + "." + mult_res[1];
          }else{
            res = "0." + mult_res.join("").padStart(Math.abs(dis), "0");
          }
        }
        results[0] = results[0].add(makeSu(res));
      }
    }

    const r = results[0];

    if(negative){
      r.negate();
    }

    return r;
  };


  Su.prototype.division = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }
    const a = this;
    const b = su;

    if( a.isZero() || b.isZero()){
      return makeSu(0);
    }

    let negative = false;
    if(a.negative === false && b.negative === true){
      negative = true;
    }else if(a.negative === true && b.negative === false){
      negative = true;
    }

    const dec_a = a.decimal;
    const dec_b = b.decimal;
    const len_d_a = dec_a.length;
    const len_d_b = dec_b.length;


    // let temp = makeSu(0);
    // let sum = makeSu(0);
    // while(a.isLarge(sum) || a.isEqual(sum)){
    //   temp = temp.sum(makeSu(1));
    //   sum = b.multiply(temp);
    // }

    // let res;
    // let remainder = 0;
    // if(a.isEqual(sum)){
    //   res = temp;
    // }else{
    //   res = temp.subtract([1]);
    //   sum = sum.subtract(b);
    //   remainder = a.subtract(sum);
    // }

    // res.remainder = remainder;

    // return res;

  };


  Su.prototype.sum = function(su){
    return this.add(su);
  };

  Su.prototype.plus = function(su){
    return this.add(su);
  };

  Su.prototype.tasu = function(su){
    return this.add(su);
  };

  Su.prototype.minus = function(su){
    return this.subtract(su);
  };

  Su.prototype.hiku = function(su){
    return this.subtract(su);
  };

  Su.prototype.multiply = function(su){
    return this.multiplication(su);
  };

  Su.prototype.kakeru = function(su){
    return this.multiplication(su);
  };

  Su.prototype.waru = function(su){
    return this.division(su);
  };

  Su.prototype.next = function(){
    return this.add(makeSu(1));
  };

  Su.prototype.prev = function(){
    return this.subtract(makeSu(1));
  };

  Su.prototype.isEvenNumber = function(){
    if( this.division(2).remainder.number === 0 ){
      return true;
    }
  };

  Su.prototype.isOddNumber = function(){
    if( this.division(2).remainder.number !== 0 ){
      return true;
    }
  };

  Su.prototype.getDivisors = function(){
    const arr = [];
    for(let i = 1; this.isLarge(makeSu(i)); i++){
      let su = makeSu(i);
      if(this.division(su).remainder.isEqual(0)){
        arr.push(su);
      }
    }
    return arr;
  };

  Su.prototype.getCommonDivisors = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }

    let a = this;
    let b = su;

    const arr_a = a.getDivisors();
    if(a.isEqual(b)){
      return arr_a;
    }
    const arr_b = b.getDivisors();

    const divs = [];

    for(let i = 0; i < arr_a.length; i++){
      let elm_a = arr_a[i];
      for(let j = 0; j < arr_b.length; j++){
        let elm_b = arr_b[j];
        if(elm_a.isEqual(elm_b)){
          divs.push(elm_a);
        }
      }
    }

    return divs;
  };

  Su.prototype.getMaxCommonDivisor = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }
    const arr = this.getCommonDivisors(su);
    return arr[arr.length - 1];
  };

  Su.prototype.multiple = function(){
    if(this.isZero()){
      return [this];
    }
    const arr = [];
    for(let i = 1; i < this.CONSTANT.MAX.number; i++){
      arr.push(this.multiplication(i));
    }
    return arr;
  };

  Su.prototype.getLeastCommonMultiple = function(su){
    if(!isSu(su)){
      su = makeSu(su);
    }

    const a = this;
    const b = su;

    const maxCommonDivisor = a.getMaxCommonDivisor(b);

    const multi = a.multiply(b);

    const res = multi.division(maxCommonDivisor);

    return res;

  };

  Su.prototype.fibonacciSequence = function(start){
    if(!isSu(start)){
      start = makeSu(start);
    }

    const self = this;
    const MAX = self.CONSTANT.MAX;

    const arr = [start, start.add(1)];
    const func = function(arr){
      if(arr[arr.length - 1].isLarge(MAX)){
        return arr;
      }
      const a = arr[arr.length - 2];
      const b = arr[arr.length - 1];
      const c = a.add(b);
      arr.push(c);
      return func(arr);
    };
    return func(arr);
  };

  Su.prototype.isFibonacciNumber = function(){
    const n = this;
    if(n.isZero()){
      return true;
    }
    const fibs = this.fibonacciSequence(0);
    for(let i = 0; i < fibs.length; i++){
      let f = fibs[i];
      if(f.isEqual(n)){
        return true;
      }
    }

  };

  Su.prototype.getSequence = function(){
    const array = [this];
    for(let i = 0; i < arguments.length; i++){
      let elm = arguments[i];
      if(!isSu(elm)){
        elm = makeSu(elm);
      }
      array.push(elm);
    }
    return array;
  };

  Su.prototype.summation = function(){
    const arr = this.getSequence(...arguments);
    let sum = makeSu(0);
    for(let i = 0; i < arr.length; i++){
      sum = sum.add(arr[i]);
    }
    return sum;
  };

  Su.prototype.infiniteProduct = function(){
    const arr = this.getSequence(...arguments);
    let ip = arr[0];
    for(let i = 1; i < arr.length; i++){
      ip = ip.multiplication(arr[i]);
    }
    return ip;
  };

  Su.prototype.digitsum = function(){
    let sum = makeSu(0);
    for(let i = 0; i < this.array.length; i++){
      let a = makeSu(this.array[i]);
      sum = sum.add(a);
    }
    return sum;
  };

  Su.prototype.random = function(min, max){
    if(min === undefined){
      min = makeSu(0);
    }
    if(max === undefined){
      max = makeSu(1);
    }
    if(!isSu(min)){
      min = makeSu(min);
    }
    if(!isSu(max)){
      max = makeSu(max);
    }

    const str = String(Math.random());
    let ran;

    if(str === "0"){
      ran = makeSu(0);
    }else{
      let arr = str.split(".");
      let decimal_part = arr[1];
      let denominator = [1];
      for(let i = 0; i < decimal_part.length; i++){
        denominator.push(0);
      }
      ran = makeSu(arr[1], { denominator: denominator });
    }
    return ran;
  };




// })(window);
