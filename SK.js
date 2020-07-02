import core from "./core.js";
import su from "./su.js";

import CONSTANTS from "./constants.js";

const MAX = CONSTANTS.MAX;
const MIN = CONSTANTS.MIN;

const S = {};
const K = {};

const makeSu = su.makeSu;
const copySu = su.copySu;
const isSu = su.isSu;
const Su = su.Su;

const FIRST_PRIME_NUMBER = 2;


K.random = function(min, max){
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
    if(min.isZero()){
      ran = makeSu(0);
    }else{
      ran = min;
    }
  }else{
    let arr = str.split(".");
    ran = makeSu("0." + arr[1]).multiplication(max);
  }
  return ran;
};

K.randomElement = function(array){
  const i = K.random(0, array.length).integer;
  return array[i];
};

K.randomInt = function(min, max){

  if( !isSu(min) || !isSu(max)){
    return "This function has been called with incorrect parameters";
  }
  if(min.isEqual(max) || min.isLarge(max)){
    return "This function has been called with incorrect parameters";
  }

  const arr = [];
  for(let i = min.getNumber(); i <= max.getNumber(); i++){
    const s = makeSu(i);
    arr.push(s);
  }

  const res = K.randomElement(arr);

  return res;
};

K.makePrimeNumbers = function(max){
  const MAX = 100;
  if(!max){
    max = MAX;
  }
  if(max > MAX){
    max = MAX;
  }
  const arr = [];
  for(let i = FIRST_PRIME_NUMBER; i < max; i++){
    const su = makeSu(i);
    if(su.isPrimeNumber()){
      arr.push(su);
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

  let temp;
  if( a < b){
    temp = a;
    a = b;
    b = temp;
  }

  let atemp = a;
  let btemp = b;
  let ctemp;
  let res;
  let counter = 0;
  const coprime = "coprime";
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

  const arr_a = K.divisors(a);
  if(a === b){
    return arr_a;
  }
  const arr_b = K.divisors(b);

  const divs = [];

  for(let k = 0; k < arr_a.length; k++){
    const elm_a = arr_a[k];
    for(let l = 0; l < arr_b.length; l++){
      const elm_b = arr_b[l];
      if(elm_a === elm_b){
        divs.push(elm_a);
      }
    }
  }

  return divs;
};

K.maxCommonDivisor = function(a, b){
  const arr = K.commonDivisors(a, b);
  return arr[arr.length - 1];
};

K.multiple = function(n){
  const arr = [];
  for(let i = 1; i < MAX; i++){
    arr.push(n * i);
  }
  return arr;
};

K.leastCommonMultiple = function(a, b){
  if(a === undefined || b === undefined){
    return "This function has been called with incorrect parameters";
  }

  let big;
  if( a < b){
    big = b;
  }else{
    big = a;
  }
  const arr_a = [];
  const arr_b = [];

  let i =1;
  while(i <= big){
    arr_a.push( a * i);
    i++;
  }
  let j =1;
  while(j <= big){
    arr_b.push( b * j);
    j++;
  }

  for(let k = 0; k < arr_a.length; k++){
    const elm_a = arr_a[k];
    for(let l = 0; l < arr_b.length; l++){
      const elm_b = arr_b[l];
      if(elm_a === elm_b){
        return elm_a;
      }
    }
  }
};

K.summation = function(){
  const array = [];
  for(let i = 0; i < arguments.length; i++){
    array.push(arguments[i]);
  }
  if(array.length === 0){
    return "Argument is not Number";
  }

  let sum = 0;
  for(let j = 0; j < array.length; j++){
    const elm = array[j];
    if(S.isNumber(elm)){
      sum += elm;
    }else{
      return "Argument is not Number";
    }
  }
  return sum;
};

K.infiniteProduct = function(){
  const array = [];
  for(let i = 0; i < arguments.length; i++){
    array.push(arguments[i]);
  }
  if(array.length === 0){
    return "Argument is empty.";
  }
  let ip = 1;
  for(let i = 0; i < array.length; i++){
    const elm = array[i];
    if(S.isNumber(elm)){
      ip = ip * elm;
    }else{
      return "Argument is not a Number";
    }
  }
  return ip;
};

K.division = function(dividend, divisor){
  if(dividend === undefined || divisor === undefined){
    return "This function has been called with incorrect parameters";
  }
  const result = dividend / divisor;
  return {
    integer: {
      remainder: dividend % divisor,
      result: Math.floor(result)
    },
    realNumber: result
  };
};

K.divisorsSummation = function(n){
  const arr = K.divisors(n);
  let a = 0;
  for(let i = 0; i < arr.length; i++){
    a += arr[i];
  }
  return a;
};

K.isAbundantNumber = function(n){
  const sum = K.divisorsSummation(n);
  if(sum > n * 2){
    return true;
  }
  return false;
};

K.isKaprekarNumberTypeA = function(n){
  const num = n * n;
  const s = String(num);
  const len = s.length;
  let first_len = 0;
  let after_len = 0;
  let first, after;
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
  return false;
};

K.isKaprekarNumberTypeB = function(n){

  const arr = String(n).split("");

  const min = Number(arr.sort().join(""));
  const max = Number(arr.reverse().join(""));

  if((max - min) === n){
    return true;
  }
  return false;
};

K.isKaprekarNumber = function(n){
  if(K.isKaprekarNumberTypeA(n) || K.isKaprekarNumberTypeB(n)){
    return true;
  }
};

S.isInteger = function(n){
  const f = Math.floor(n);
  if( f === n){
    return true;
  }
  return false;
};

// 調和平均
K.harmonicMean = function(arr){
  const len = arr.length;
  let sum = 0;
  for(let i = 0; i < len; i++){
    sum += 1 / arr[i];
  }
  return len / sum;
};

// 調和数かどうか
K.isHarmonicDivisorNumber = function(n){
  const arr = K.divisors(n);
  const res = K.harmonicMean(arr);
  if(S.isInteger(res)){
    return true;
  }
  return false;
};

S.isNaturalNumber = function(n){
  if(n > 0 && S.isInteger(n)){
    return true;
  }
};


K.collatzhProblem = function(num){

  const arr = [];

  const calc = function(n){
    let res = n;
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
    return "This function has been called with incorrect parameters. " + n + " is incorrect parameter.";
  }

  if(!max){
    max = 100;
  }

  for(let i = 1; i <= max; i++){
    const a = K.randomInt(2, n - 1);
    if(K.maxCommonDivisor(a, n) !== 1){
      return "Composit Number";
    }
    const res = Math.pow(a, n - 1) % n;
    if(res !== 1){
      return "Composit Number";
    }
  }
  return "Maybe Prime Number";
};

// 組み合わせ数の計算
// K.combinations = function(arr){
// };

// 3 => [0, 3], [1, 2], [2, 1], [3, 0]
K.getIncludesNumbers = function(num){
  const arr = [];
  let temp = num;
  let bool = true;
  while(bool){
    const a = temp;
    const b = num -temp;
    const ar = [a,b];
    arr.push(ar);
    temp = temp -1;
    if(temp < 0){
      bool = false;
      break;
    }
  }
  return arr;
};

// fibonacci







// todo 0start
const arraySummation = function(a, b){
  if( !(a instanceof Array) ){
    a = core.numToArray(a);
  }
  if( !(b instanceof Array) ){
    b = core.numToArray(b);
  }

  if(!core.isNumArray(a) || !core.isNumArray(b)){
    return;
  }
  if(core.isZero(a[0]) && core.isZero(b[0])){
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

  const res = core.getLarger(a, b);
  const arr_a = res[0];
  const arr_b = res[1];
  const len = arr_a.length;

  const gap = len - arr_b.length;

  let over = 0, arr_c = [];
  for(let i = len - 1; i >= 0; i--){
    let _res;
    const elm_a = arr_a[i];
    const elm_b = arr_b[i - gap] || 0;
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

const getLarger = function(a, b){
  const arr_a = [], arr_b = [];
  for(let i = 0; i < a.length; i++){
    const elm_a = a[i];
    if(elm_a === 0 && arr_a.length === 0){
      continue;
    }
    if(elm_a >=  0 && elm_a < 10){
      arr_a.push(elm_a);
    }
  }

  for(let i = 0; i < b.length; i++){
    const elm_b = b[i];
    if(elm_b === 0 && arr_b.length === 0){
      continue;
    }
    if(elm_b >=  0 && elm_b < 10){
      arr_b.push(elm_b);
    }
  }

  let res;
  if(arr_a.length > arr_b.length){
    res = [a, b];
  }else if(arr_a.length < arr_b.length){
    res = [b, a];
  }else{
    for(let i = 0; i < arr_a.length; i++){
      const elm_aa = arr_a[i];
      const elm_bb = arr_b[i];
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






export default {
  S: S,
  K: K
};