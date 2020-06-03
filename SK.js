import { MAX, MIN } from "./constants.js";
import core from "./core.js";
import { makeSu } from "./index.js";
import CONSTANTS from "./constants.js";

const S = {};
const K = {};


const FIRST_PRIME_NUMBER = 2;

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

  const max = n;
  for( let i = max -1; i > 1; i--){
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

  const len = max - min;
  const rand = Math.random();
  return ( rand * len ) + min;
};

K.randomElement = function(array){
  const i = K.random(0, array.length - 1);
  return array[i];
};

K.randomInt = function(min, max){
  if( !S.isNumber(min) || !S.isNumber(max)){
    return "This function has been called with incorrect parameters";
  }
  if(min >= max){
    return "This function has been called with incorrect parameters";
  }

  const arr = [];
  for(let i = min; i <= max; i++){
    arr.push(i);
  }

  const res = K.randomElement(arr);

  return res;
};

K.primeNumbers = function(){
  const arr = [];
  for(let i = FIRST_PRIME_NUMBER; i < MAX; i++){
    if(S.isPrimeNumber(i)){
      arr.push(i);
    }
  }
  return arr;
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
  const arr = [];
  for(let i = 1; i <= n; i++){
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
const makeFibonacciSequence = function(a, b){

  if(!a.isSu() || !b.isSu()){
    return false;
  }

  const MAX = CONSTANTS.MAX;

  const arr = [a, b];
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



export default {
  S: S,
  K: K,
  makeFibonacciSequence: makeFibonacciSequence
};