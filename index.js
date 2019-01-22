// (function(global){

  const MAX = 10000;

  const S = {};
  const K = {};

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

    var max = n;
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

  K.primeNumbers = function(){
    var arr = [];
    for(var i = 2; i < MAX; i++){
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
  // K.isHarmonicDivisorNumber = function(n){

  // };

  // 組み合わせ数の計算
  // K.combinations = function(arr){
  // };


// })(window);