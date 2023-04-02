(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["su"] = factory();
	else
		root["su"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./SK.js":
/*!***************!*\
  !*** ./SK.js ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./core.js");
/* harmony import */ var _su_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./su.js */ "./su.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./constants.js");





const MAX = _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].MAX;
const MIN = _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].MIN;

const S = {};
const K = {};

const makeSu = _su_js__WEBPACK_IMPORTED_MODULE_1__["default"].makeSu;
const copySu = _su_js__WEBPACK_IMPORTED_MODULE_1__["default"].copySu;
const isSu = _su_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSu;
const Su = _su_js__WEBPACK_IMPORTED_MODULE_1__["default"].Su;

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
  if(max && max.isSu && max.isSu()){
    max = Number(max.getString());
  }

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
    a = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArray(a);
  }
  if( !(b instanceof Array) ){
    b = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArray(b);
  }

  if(!_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isNumArray(a) || !_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isNumArray(b)){
    return;
  }
  if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(a[0]) && _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(b[0])){
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

  const res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLarger(a, b);
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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  S: S,
  K: K
});

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  MAX: 10000,
  MIN: -10000,
  DBZ: "Division by Zero",
  NAN: "Not a number",
  NOTSU: "Argument is not Su."
});


/***/ }),

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const core = {};

core.makeError = function({message, variable, parameter}){
  try{
    const v = variable.toString();
    const p = parameter.toString();
    let str = message;
    if(v){
      str = `${str}, ${v ? v : ""}`;
    }
    if(p){
      str = `${str}, ${p ? p : ""}`;
    }
    const error = new Error(str);
    return error;
  }catch(e){
    return e;
  }
};

const isNumber = function(n){
  if(typeof n === "number"){
    if(Number.isNaN(n)){
      return false;
    }else{
      return true;
    }
  }
  return false;
};

core.moldNumArray = function({ array, negative, decimal_index }){
  if(!array){
    return core.makeError({ message: "Array is not exists", patameter: array});
  }

  if(typeof decimal_index !== "number" || isNaN(decimal_index)){
    return core.makeError({ message: "decimal_index is not a number", patameter: decimal_index});
  }
  try{
    while(decimal_index < array.length && array[array.length - 1] === 0){
      array.pop();
    }
    while(decimal_index > 1 && array[0] === 0){
      array.shift();
      decimal_index--;
    }

    if(array.length === 0){
      array.push(0);
      decimal_index = 1;
    }

    const o = {
      array: array,
      negative: !!negative,
      is_num_array: true,
    };
    if(decimal_index === 0 || decimal_index > 0){
      o.decimal_index = decimal_index;
    }else{
      o.decimal_index = array.length;
    }

    return o;
  }catch(e){
    return core.makeError({message: e.message, parameter: array});
  }

};

core.numToArrayWithDecimal = function(n){
  if(!n && n !== 0){
    return core.makeError({message: "Parameter is undefined, null, or empty.", parameter: n});
  }

  if(n.is_num_array){
    return core.clone(n);
  }

  if(typeof n === "object"){
    return core.makeError({message: "Parameter is object.", parameter: n});
  }

  let str = String(n);
  let negative = false;
  while(str && str[0].match(/^-/)){
    str = str.replace(/^-/, "");
    negative = !negative;
  }

  let dec_index;
  let res = str.match(/\./g);
  if(res && res.length > 1){
    return;
  }
  if(res && res.length === 1){
    dec_index = str.match(/\./).index;
    str = str.replace(/\./, "");
  }else{
    dec_index = str.length;
  }

  const arr = [];
  for(let i = 0; i < str.length; i++){

    const num = Number(str[i]);
    if(!isNumber(num)){
      return core.makeError({message: "This method has been called with incorrect parameters", parameter: num});
    }
    arr.push(num);
  }

  return core.moldNumArray({ array: arr, negative: negative, decimal_index: dec_index});

};

core.numArrayToString = function(n){
  if(!n.is_num_array || !n.array || !n.decimal_index){
    return "";
  }
  try{
    const arr = [...n.array];
    arr.splice(n.decimal_index, 0, ".");
    let str = arr.join("");
    if(n.negative){
      str = `-${str}`;
    }

    return str.replace(/\.$/, "");
  }catch(err){
    return core.makeError({message: err.message, parameter: n});
  }

};

core.compare = function(a, b){
  try{
    
    if(!a || !b){
      return core.makeError({ message: "Parameters are undefined, null, or empty.", parameter: [a, b]});
    }
    
    const o = {
      small: null,
      large: null,
      equal: false
    };
    let a_ = a;
    let b_ = b;

    if(!a_.is_num_array){
      a_ = core.numToArrayWithDecimal(a_);
      if(!a_){
        return o;
      }
    }
    if(!b_.is_num_array){
      b_ = core.numToArrayWithDecimal(b_);
      if(!b_){
        return o;
      }
    }

    const a_array = a_.array;
    const b_array = b_.array;

    const a_len = a_array.length;
    const b_len = b_array.length;
    const a_str = a_array.join("");
    const b_str = b_array.join("");

    const a_int_len = a_.decimal_index;
    const b_int_len = b_.decimal_index;

    const a_dec_len = a_len - a_int_len;
    const b_dec_len = b_len - b_int_len;

    if(a_len === 1 && a_str === "0" && b_len === 1 && b_str === "0"){
      o.equal = true;
      return o;
    }
    if(!a_.negative && b_.negative){
      o.small = b_;
      o.large = a_;
      return o;
    }
    if(a_.negative && !b_.negative){
      o.small = a_;
      o.large = b_;
      return o;
    }

    const negative = a_.negative;

    const o_a_b = {
      large: negative ? b_ : a_,
      small: negative ? a_ : b_,
      equal: false,
    };
    const o_b_a = {
      large: negative ? a_ : b_,
      small: negative ? b_ : a_,
      equal: false
    };

    if(a_int_len > b_int_len){
      return o_a_b;
    }
    
    if(a_int_len < b_int_len){
      return o_b_a;
    }

    for(let i = 0; i < a_int_len; i++){
      if(a_array[i] > b_array[i]){
        return o_a_b;
      }
      if(a_array[i] < b_array[i]){
        return o_b_a;  
      }
    }

    const dec_len = a_dec_len > b_dec_len ? a_dec_len : b_dec_len;
    for(let i = 0; i < dec_len; i++){
      const aa = a_array[a_int_len + i] ? a_array[a_int_len + i] : 0;
      const bb = b_array[b_int_len + i] ? b_array[b_int_len + i] : 0;
      if(aa > bb){
        return o_a_b;
      }
      if(aa < bb){
        return o_b_a;
      }
    }

    o.equal = true;
    return o;
  }catch(err){
    return this.makeError({message: err.message, parameter: [a, b]})
  }

};

core.getLarge = function(a, b){
  return core.compare(a, b).large;
};

core.getSmall = function(a, b){
  return core.compare(a, b).small;
};

core.isEqual = function(a, b){
  const res = core.compare(a, b);
  if(res.equal){
    return true;
  }
  return false;
};

core.isSmall = function(a, b){
  return core.isEqual(core.getSmall(a, b), a);
};
core.isLarge = function(a, b){
  return core.isEqual(core.getLarge(a, b), a);
};

core.isZero = function(n){
  if(!n){
    return false;
  }
  if(!n.is_num_array){
    return false;
  }
  const zero = core.getZero();
  return core.isEqual(zero, n);
};

core.isOne = function(n){
  if(!n){
    return false;
  }
  if(!n.is_num_array){
    return false;
  }
  const one = core.getOne();
  if(core.isEqual(one, n)){
    return true;
  }else{
    return false;
  }
};

core.getZero = function(){
  return core.numToArrayWithDecimal("0");
};

core.getOne = function(){
  return core.numToArrayWithDecimal("1");
};

core.fixCarry = function(arr, minus){
  try {
    let minus_ = minus;
    for(let i = arr.length - 1; i >=0; i--){
      const elm = arr[i];
      if(elm < 0){
        minus_ = true;
        break;
      }else if(elm === 0){
        continue;
      }else{
        break;
      }
    }
    if(minus_){
      const cache = [];
      arr.forEach( elm => {
        cache.push(-elm);
      });
      arr = cache;
    }
    const new_arr = [];
    let carry = 0;
    for(let i = 0; i < arr.length; i++){
      let val = arr[i] + carry;
      if(val > 9){
        const arr1 = String(val).split("");
        val = Number(arr1[arr1.length - 1]);
        const arr2 = arr1.slice(0, arr1.length - 1);
        carry = Number(arr2.join(""));
      }else if( val >= 0 && val <= 9){
        carry = 0;
      }else{
        val = 10 + val;
        carry = -1;

      }
      new_arr.push(val);
    }
    if(carry !== 0){
      new_arr.push(carry);
    }

    return {
      new_array: new_arr,
      minus: minus_
    };
  }catch(err){
    return core.makeError({message: err.message, parameter: [arr, minus]})
  }

};

core.clone = function(n){
  try{
    if(!n){
      return core.makeError({message: "Parameter is not exists", parameter: n});
    }
    if(!n.is_num_array){
      return core.makeError({message: "Parameter is not compatible", parameter: n});
    }
    const o = {
      ...n,
      array: [...n.array],
    };
    return o;
  }catch(err){
    return core.makeError({message: err.message, parameter: n});
  }
};

core.add_and_subtract = function(a, b, mode){
  if(!a || !b){
    if(a !== 0 && b !== 0){
      return core.makeError({message: "Parameters are must be a Number or a String.", parameter: [a, b]});
    }
  }
  
  let plus;
  if(!mode){
    return;
  }else if(mode === "+"){
    plus = true;
  }else if(mode === "-"){
    plus = false;
  }else{
    return core.makeError({message: "mode must be '+' or '-'.", parameter: mode});
  }

  try {
    let a_ = null;
    let b_ = null;
    if(a.is_num_array){
      a_ = core.clone(a);
    }else{
      a_ = core.numToArrayWithDecimal(a ? a : 0);
    }
    if(b.is_num_array){
      b_ = core.clone(b);
    }else{
      b_ = core.numToArrayWithDecimal(b ? b : 0);
    }

    const a_arr = a_.array;
    const b_arr = b_.array;


    const a_is_zero = core.isZero(a_);
    const b_is_zero = core.isZero(b_);

    if(a_is_zero && b_is_zero){
      return a_;
    }else if(a_is_zero){
      if(!plus){
        b_.negative = !b_.negative;
      }
      return b_;
    }else if(b_is_zero){
      return a_;
    }

    const a_dec_length = a_.array.length - a_.decimal_index;
    const b_dec_length = b_.array.length - b_.decimal_index;

    const dec_gap = a_dec_length - b_dec_length;

    if(dec_gap > 0){
      b_arr.push(...Array(dec_gap).fill(0));
    }else if(dec_gap < 0){
      a_arr.push(...Array(Math.abs(dec_gap)).fill(0));
    }

    const calc = function({a, b, plus}){
      const arr = [];
      let len = a.array.length;
      if(a.array.length < b.array.length){
        len = b.array.length;
      }
      const arr_a = a.array;
      const arr_b = b.array;
      const a_one = a.negative ? -1 : 1;
      const b_one = b.negative ? -1 : 1;
      for(let i = 0; i < len; i++){
        const aa = arr_a[i] ? arr_a[i] * a_one : 0;
        const bb = arr_b[i] ? arr_b[i] * b_one : 0;
        let res = plus ? aa + bb : aa - bb;
        arr.push(res);
      }
      return core.fixCarry(arr);
    };

    const { new_array, minus } = calc({
      a: {
        array: [...a_arr].reverse(),
        negative: a_.negative,
      },
      b: {
        array: [...b_arr].reverse(),
        negative: b_.negative
      },
      plus: plus
    });

    const dec_length = a_dec_length >= b_dec_length ? a_dec_length : b_dec_length;
    const new_int_length = new_array.length - dec_length;

    const new_decimal_index = new_int_length;

    return core.moldNumArray({
      array: [...new_array].reverse(),
      negative: minus ? true : false,
      decimal_index: new_decimal_index
    });
  }catch(err){
    return core.makeError({message: err.message, parameter: [a, b]});
  }

};

core.add = function(a, b){
  return core.add_and_subtract(a, b, "+");
};

core.subtract = function(a, b){
  return core.add_and_subtract(a, b, "-");
};


core.multiplication = function(a, b){

  if(!a || !b){
    if(a !== 0 && b !== 0){
      return core.makeError({message: "Parameters are not exists", parameter: [a, b]});
    }
  }

  let a_ = null;
  let b_ = null;
  if(a.is_num_array){
    a_ = core.clone(a);
  }else{
    a_ = core.numToArrayWithDecimal(a ? a : 0);
  }
  if(b.is_num_array){
    b_ = core.clone(b);
  }else{
    b_ = core.numToArrayWithDecimal(b ? b : 0);
  }

  const a_arr = a_.array;
  const b_arr = b_.array;

  if(core.isZero(a_) || core.isZero(b_)){
    return core.numToArrayWithDecimal("0");
  }

  if(core.isOne(a_)){
    return b_;
  }

  if(core.isOne(b_)){
    return a_;
  }

  try{

    const a_negative = a_.negative;
    const b_negative = b_.negative;
    let negative;
    if(a_negative && b_negative){
      negative = false;
    }else if(a_negative || b_negative){
      negative = true;
    }else{
      negative = false;
    }

    const a_dec_length = a_.array.length - a_.decimal_index;
    const b_dec_length = b_.array.length - b_.decimal_index;
    const dec_length = a_dec_length + b_dec_length;

    const calc = function({a, b}){
      const array = [];
      const arr_a = a.array;
      const arr_b = b.array;
      for(let i = 0; i < arr_a.length; i++){
        const aa = arr_a[i] ? arr_a[i] : 0;
        const arr = new Array(i);
        arr.fill(0, 0, i);

        for(let j = 0; j < arr_b.length; j++){
          const bb = arr_b[j] ? arr_b[j] : 0;
          let res = aa * bb;
          
          arr.push(res);

          const tgt_index = i + j;
          let tgt = array[tgt_index];
          if(!tgt){
            tgt = 0;
          }
          const new_tgt = tgt + res;
          array[tgt_index] = new_tgt;
        }
      }
      return core.fixCarry(array);
    };

    const { new_array } = calc({
      a: {
        array: [...a_arr].reverse(),
        negative: a_.negative,
      },
      b: {
        array: [...b_arr].reverse(),
        negative: b_.negative
      },
    });

    const new_decimal_index = new_array.length - dec_length;

    return core.moldNumArray({
      array: [...new_array].reverse(),
      negative: negative,
      decimal_index: new_decimal_index
    });
  }catch(err){
    return core.makeError({message: err.message, parameter: [a, b]});
  }

};

core.multiple = function(a, b){
  return core.multiplication(a, b);
};

core.getDecimal = function(n){
  try{
    const n_ = core.numToArrayWithDecimal(n);
    let str = "0.";
    const len = n_.array.length - n_.decimal_index;
    if(len > 0){
      for(let i = n_.decimal_index; i <= len; i++){
        const s = String(n_.array[i]);
        str = str + s;
      }
    }else{
      str = str + "0";
    }
    const num = core.numToArrayWithDecimal(str);
    return num;
  }catch(err){
    return core.makeError({message: err.message, parameter: n});
  }
};


core.division = function(a, b){

  try {
    if(!a || !b){
      if(a !== 0 && b !== 0){
        return core.makeError({message: "Parameters are not exists", parameter: [a, b]});
      }
    }

    let a_ = null;
    let b_ = null;
    if(a.is_num_array){
      a_ = core.clone(a);
    }else{
      a_ = core.numToArrayWithDecimal(a ? a : 0);
    }
    if(b.is_num_array){
      b_ = core.clone(b);
    }else{
      b_ = core.numToArrayWithDecimal(b ? b : 0);
    }

    if(core.isZero(b_)){
      if(core.isLarge(a_, "0")){
        return "Infinity";
      }else if(core.isSmall(a_, "0")){
        return "Negative Infinity";
      }
      return "Not a Number";
    }

    if(core.isZero(a_)){
      return {
        ...core.getZero(),
        remainder: core.getZero(),
      }
    }

    if(core.isOne(b_)){
      return {
        ...a_,
        remainder: core.getZero(),
      };
    }

    if(core.isEqual(a_, b_)){
      return {
        ...core.getOne(),
        remainder: core.getZero(),
      }
    }

    const a_negative = a_.negative;
    const b_negative = b_.negative;

    if(a_.negative){
      a_.negative = false;
    }

    if(b_.negative){
      b_.negative = false;
    }

    let negative;
    if(a_negative && b_negative){
      negative = false;
    }else if(a_negative || b_negative){
      negative = true;
    }else{
      negative = false;
    }

    const calc = function({a, b, max}){
      const result_arr = [];
      let remain = core.getZero();
      const a_ = core.clone(a);
      const b_ = core.clone(b);
      let decimal_index = a.decimal_index;
      let decimal_index_remain = decimal_index;

      let a_int = core.clone(a_);
      a_int.decimal_index = a_int.array.length;
      let a_zero_length = 0;
      const a_zero_res = a_.array.join("").match(/^0+/);
      if(a_zero_res && a_zero_res[0]){
        a_zero_length = a_zero_res[0].length;
        a_int = core.numToArrayWithDecimal(a_int.array.slice(a_zero_length, a_int.array.length).join(""));
      }

      let b_int = core.clone(b_);
      b_int.decimal_index = b_int.array.length;
      let b_zero_length = 0;
      const b_zero_res = b_int.array.join("").match(/^0+/);
      if(b_zero_res && b_zero_res[0]){
        b_zero_length = b_zero_res[0].length;
        b_int = core.numToArrayWithDecimal(b_int.array.slice(b_zero_length, b_int.array.length).join(""));
      }

      const zero_gap = a_zero_length - b_zero_length;
      const a_array = [...a_int.array];
      const a_decimal_length = a_.array.length - a_.decimal_index;
      const b_decimal_length = b_.array.length - b_.decimal_index;
      const decimal_gap = a_decimal_length - b_decimal_length;

      const times = Number(core.add(a_int.array.length, max).array.join(""));

      const a_len = a_int.array.length;
      let remain_is_decimal = false;
      let remain_arr = [0];

      let decimal_count = 0;
      let remain_and_a_len_gap = 0;
      for(let i = 0; i < times; i++){
        let is_less = true;
        let count = core.getZero();
        const remain1 = core.multiplication(remain, "10");
        const remain2 = String(a_array.slice(i, i + 1).length === 1 ? a_array.slice(i, i + 1)[0] : "0");
        remain = core.add(remain1, remain2);

        remain_and_a_len_gap = remain.array.length - a_len;
        let product = core.getZero();
        if(i === a_len){
          decimal_index = i;
          if(core.isZero(remain)){
            break;
          }else {
            remain_is_decimal = true;
            decimal_count = decimal_count++;
          }
        }else if(i > a_len){
          decimal_count = decimal_count++;
          if(core.isZero(remain)){
            break;
          }
        }

        const max_count = max;
        while(is_less){
          count = core.add(count, "1");
          if(core.isLarge(count, max_count)){
            is_less = false;
            break;
          }
          const pre_product = product;
          product = core.multiplication(b_int, count);

          if(core.isEqual(remain, product)){
            is_less = false;
            const result = count;
            result_arr.push(result);
            remain = core.subtract(remain, product);
            break;
          }
          if(core.isLarge(product, remain)){
            is_less = false;
            const result = core.subtract(count, "1");
            result_arr.push(result);
            remain = core.subtract(remain, pre_product);

            if(remain_is_decimal){
              remain_arr.push(0);
            }
            break;
          }
        }
      }

      remain_arr.push(...remain.array);
      const new_arr = result_arr.flatMap(e => e.array);

      if(zero_gap > 0){
        for(let i = 0; i < zero_gap; i++){
          new_arr.unshift(0);
          decimal_index++;
        }
      }

      if(decimal_gap < 0){
        for(let i = 0; i < Math.abs(decimal_gap); i++){
          new_arr.push(0);
          decimal_index++;
        }
      }else if(decimal_gap > 0){
        for(let i = 0; i < Math.abs(decimal_gap); i++){
          new_arr.unshift(0);
        }
      }

      if(remain_and_a_len_gap > 0){
        for(let i = 0; i < remain_and_a_len_gap; i++){
          const tgt = remain_arr[0];
          if(tgt === 0){
            remain_arr.shift();
          }else{
            decimal_index_remain = decimal_index_remain - remain_and_a_len_gap;
          }
          remain_arr.push(0);
        }
      }else if(remain_and_a_len_gap < 0){
        const len = Math.abs(remain_and_a_len_gap);
        const arr = Array(len).fill(0);
        remain_arr.unshift(...arr);
      }

      if(remain_is_decimal){
        remain_arr = [...remain_arr];
      }

      return {
        new_array: new_arr,
        decimal_index: decimal_index,
        remain_array: remain_arr,
        remain_decimal_index: decimal_index_remain,
      }
    };

    const max_times_if_not_divisible = core.numToArrayWithDecimal("10");

    const { new_array, decimal_index, remain_array, remain_decimal_index} = calc({a: a_, b: b_, max: max_times_if_not_divisible});


    const remainder = core.moldNumArray({
      array: [...remain_array],
      negative: negative,
      decimal_index: remain_decimal_index
    });


    const quotient = core.moldNumArray({
      array: [...new_array],
      negative: negative,
      decimal_index: decimal_index
    });

    return {
      ...quotient,
      remainder:remainder,
    }
  }catch(err){
    return core.makeError({message: err.message, parameter: [a, b]});
  }
  
};

core.divide = function(a, b){
  return core.division(a, b);
};

core.floor = function(num){
  try{
    const n = core.numToArrayWithDecimal(num);
    const is_decimal = n.decimal_index < n.array.length;
    const dec = n.array.slice(n.decimal_index, n.array.length);
    const dec_n = core.numToArrayWithDecimal(dec.join(""));
    if(core.isZero(dec_n)){
      return n;
    }
    let n_ = {
      ...n,
      array: n.array.slice(0, n.decimal_index)
    };
    if(n.negative && is_decimal){
      n_ = core.subtract(n_, "1");
    }
    return n_;
  }catch(err){
    return core.makeError({message: err.messsage, parameter: num});
  }
};

core.ceil = function(num){
  try{
    const n = core.numToArrayWithDecimal(num);
    const is_decimal = n.decimal_index < n.array.length;
    const dec = n.array.slice(n.decimal_index, n.array.length);
    const dec_n = core.numToArrayWithDecimal(dec.join(""));
    if(core.isZero(dec_n)){
      return n;
    }
    let n_ = {
      ...n,
      array: n.array.slice(0, n.decimal_index)
    };
    if(!n.negative && is_decimal){
      n_ = core.add(n_, "1");
    }
    return n_;
  }catch(err){
    return core.makeError({message: err.message, parameter: num});
  }

};


core.modulo = function(a, b){
  try{
    if(!a || !b){
      if(a !== 0 && b !== 0){
        return core.makeError({message: "Parameters are not exists", parameter: [a, b]});
      }
    }

    let a_ = null;
    let b_ = null;
    if(a.is_num_array){
      a_ = core.clone(a);
    }else{
      a_ = core.numToArrayWithDecimal(a ? a : 0);
    }
    if(b.is_num_array){
      b_ = core.clone(b);
    }else{
      b_ = core.numToArrayWithDecimal(b ? b : 0);
    }

    if(core.isZero(b_)){
      if(core.isLarge(a_, "0")){
        return "Infinity";
      }else if(core.isSmall(a_, "0")){
        return "Negative Infinity";
      }
      return "Not a Number";
    }

    if(core.isZero(a_)){
      return {
        ...core.getZero(),
        remainder: core.getZero(),
      }
    }

    const a_posi = core.clone(a_);
    const b_posi = core.clone(b_);
    a_posi.negative = false;
    b_posi.negative = false;

    if(core.isLarge(b_posi, a_posi)){
      const a_ = core.numToArrayWithDecimal(a);
      return a_;
    }

    if(core.isEqual(a_, b_)){
      return {
        ...core.getZero(),
        remainder: core.getZero(),
      }
    }

    let negative;
    if(a_.negative){
      negative = true;
    }else{
      negative = false;
    }

    const calc = function({a, b}){
      const divided = core.divide(a, b);
      const floored = core.floor(divided);
      const multipled = core.multiple(b, floored);
      const res = core.subtract(a, multipled);
      return res;
    };

    const res = calc({a: {...a_, negative: false}, b: {...b_, negative: false} });

    const quotient = core.moldNumArray({
      ...res,
      negative: negative,
    });

    return {
      ...quotient,
    }
  }catch(err){
    return core.makeError({message: err.message, parameter: [a, b]});
  }
  
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (core);


/***/ }),

/***/ "./doc.js":
/*!****************!*\
  !*** ./doc.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./core.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./utils.js");



const map = {
  commonMultiple: {
    ja: "公倍数"
  },
  greatestCommonDivisor: {
    ja: "最大公約数"
  },
  commonDivisors: {
    ja: "公約数"
  },
  makeFibonacciSequence: {
    ja: "フィボナッチ数列"
  },
  makeLucaSequence: {
    ja: "リュカ数列"
  },
  makeTribonacciSequence: {
    ja: "トリボナッチ数列"
  },
  makeTetranacciSequence: {
    ja: "テトラナッチ数列"
  },
  makePentanacciSequence: {
    ja: "ペンタナッチ数列"
  },
  makeHexanacciSequence: {
    ja: "ヘキサナッチ数列"
  },
  makeHeptanacciSequence: {
    ja: "ヘプタナッチ数列"
  },
  makeOctanacciSequence: {
    ja: "オクタナッチ数列"
  },
  makeNonanacciSequence: {
    ja: "ノナナッチ数列"
  },
  makeDecanacciSequence: {
    ja: "デカナッチ数列"
  },
  makeUndecanacciSequence: {
    ja: "ウンデカナッチ数列"
  },
  makeDodecanacciSequence: {
    ja: "ドデカナッチ数列"
  },
  makeIcosanacciSequence: {
    ja: "イコサナッチ数列"
  },
  summation: {
    ja: "総和"
  },
  infiniteProduct: {
    ja: "総乗/総積"
  },
  digitSum: {
    ja: "数字和/各桁の総和"
  },
  makeTriangleNumber: {
    ja: "三角数"
  },
  makePronicNumber: {
    ja: "矩形数"
  },
  factorial: {
    ja: "階乗"
  },
  modulo: {
    ja: "剰余演算"
  }
};

const whatIs = function({name="", lang="ja"}){
  if(!name){
    return "";
  }

  let target = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"][name];
  if(!target){
    target = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"][name];
  }

  const exists = target ? true : false;
  if(!exists){
    return "";
  }

  const res = map[name];
  if(res && res[lang]){
    return res[lang];
  }
  const other_lang = Object.keys(res)[0];
  if(other_lang){
    return res[other_lang];
  }

  return "";

};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (whatIs);

/***/ }),

/***/ "./su.js":
/*!***************!*\
  !*** ./su.js ***!
  \***************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./core.js");




const MAX = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].MAX;
const MIN = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN;
const DBZ = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].DBZ;
const NAN = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].NAN;
const NOTSU = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].NOTSU;


const Su = function(n, option){
  if(isNaN(n)){
    throw new Error(NAN);
  }
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
  if(int_str){
    const int0 = int_str.match(/0/g);
    if(int0 && int0.length === int_str.length){
      int_str = "0";
    }
    let new_int_str = "";
    let start_zero = true;
    for(let i = 0; i <int_str.length; i++){
      if(int_str[i] !== "0" || !start_zero){
        start_zero = false;
        new_int_str += int_str[i];
      }
    }
    if(!new_int_str){
      int_str = "0";
    }else{
      int_str = new_int_str;
    }
  }

  if(decimal_str){
    const dec0 = decimal_str.match(/0/g);
    if(dec0 && dec0.length === decimal_str.length){
      decimal_str = "0";
    }
    let end_zero = true;
    let new_decimal_str = "";
    for(let i = decimal_str.length - 1; i >= 0; i--){
      if(decimal_str[i] !== "0" || !end_zero){
        end_zero = false;
        new_decimal_str = decimal_str[i] + new_decimal_str;
      }
    }
    if(!new_decimal_str){
      decimal_str = "0";
    }else{
      decimal_str = new_decimal_str;
    }

  }

  let int_arr;
  let decimal_arr;


  try{
    int_arr = _core_js__WEBPACK_IMPORTED_MODULE_1__["default"].numToArray(int_str);
    decimal_arr = decimal_str ? _core_js__WEBPACK_IMPORTED_MODULE_1__["default"].numToArray(decimal_str) : [0];
  }catch(e){
    throw new Error(NAN);
  }

  this.integer = int_arr;
  this.decimal = decimal_arr;
  this.negative = negative ? true : false;
  
  let denominator = [1];

  for(let i = 0; i < this.decimal.length; i++){
    denominator.push(0);
  }

  this.fraction = {
    numerator: this.integer.concat(this.decimal),
    denominator: denominator
  };

};

const makeSu = function(num, option){
  let res;
  try{
    res = new Su(num, option);
  }catch(e){
    res = e.message;
  }

  return res;

};

const isSu = function(su){
  if(su instanceof Su){
    return true;
  }
};

const copySu = function(su){
  const str = su.getString();
  return makeSu(str);
};

const CONSTANTS = {
  ZERO: makeSu(0),
  ONE: makeSu(1),
  FIRST_PRIME_NUMBER: makeSu(2),
  MAX: makeSu(MAX),
  MIN: makeSu(MIN)
};


Su.prototype.getString = function(){
  let str = String( this.integer.join(""));
  const ac = this.decimal.reduce((a,e) => a + e);
  if(ac !== 0){
    str += "." + this.decimal.join("");
  }
  return this.negative ? `-${str}` : str;
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

Su.prototype.clone = function(){
  const str = this.getString();
  return makeSu(str);
};

const getLarge = function(a, b, absolute = false){

  let negative = false;
  let field = [];

  const _a = makeSu(a.getString());
  const _b = makeSu(b.getString());

  if(absolute){
    _a.negative = false;
    _b.negative = false;
  }

  if(_a.isZero() && _b.isZero()){
    return;
  }

  if(!_a.negative && _b.negative){
    return a;
  }else if(_a.negative && !_b.negative){
    return b;
  }else if(_a.negative && _b.negative){
    negative = true;
  }

  if(_a.integer.length > _b.integer.length){
    if(negative){
      return b;
    }
    return a;
  }else if(_a.integer.length < _b.integer.length){
    if(negative){
      return a;
    }
    return b;
  }

  for(let i = 0; i < _a.integer.length; i++){
    let elm_a = _a.integer[i];
    let elm_b = _b.integer[i];
    if(elm_a > elm_b){
      field = [a, b];
      break;
    }else if(elm_a < elm_b){
      field = [b, a];
      break;
    }
  }

  if(field.length === 0){
    const len = _a.decimal.length >= _b.decimal.length ? _a.decimal.length : _b.decimal.length;
    for(let i = 0; i < len; i++){
      let elm_a = _a.decimal[i] ? _a.decimal[i] : 0;
      let elm_b = _b.decimal[i] ? _b.decimal[i] : 0;
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
  }

  return field[0];

};


Su.prototype.isEqual = function(su){
  if(!isSu(su)){
    return false;
  }
  const a = this.clone();
  const b = su.clone();
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
  if(this.integer.length === 1 && this.integer[0] === 0 && !this.containDecimal()){
    return true;
  }else{
    return false;
  }
};

Su.prototype.isOne = function(){
  if(this.negative){
    return false;
  }
  if(this.getString() === "1"){
    return true;
  }else{
    return false;
  }
};

Su.prototype.isLarge = function(su){
  if(!isSu(su)){
    return false;
  }
  const a = this.clone();
  const b = su.clone();
  const res = getLarge(a, b);
  if(!res){
    return false;
  }
  if(res.getString() === a.getString()){
    return true;
  }else{
    return false;
  }
};

Su.prototype.isSmall = function(su){
  if(!isSu(su)){
    return false;
  }
  const a = this.clone();
  const b = su.clone();
  const res = getLarge(a, b);
  if(!res){
    return false;
  }
  if(res.getString() === b.getString()){
    return true;
  }else{
    return false;
  }
};

Su.prototype.isInteger = function(){
  if(this.containDecimal()){
    return false;
  }else{
    return true;
  }
};

Su.prototype.isNaturalNumber = function(){
  if(this.isPositive() && this.isInteger() && this.isLarge(CONSTANTS.ZERO)){
    return true;
  }else{
    return false;
  }
};

Su.prototype.isNegative = function(){
  if(this.negative){
    return true;
  }
  return false;
};

Su.prototype.isPositive = function(){
  if(this.negative){
    return false;
  }
  return true;
};

Su.prototype.containDecimal = function(){
  const res = this.decimal.reduce(function(a, v){
      return a + v;
  });
  if(res === 0){
    return false;
  }else{
    return true;
  }
};

Su.prototype.add = function(su){
  if(!isSu(su)){
    throw new Error(NOTSU);
  }
  let a = this.clone();
  let b = su.clone();
  if(a.isZero()){
    return b;
  }
  if(b.isZero()){
    return a;
  }

  let negative;
  if(a.negative && b.negative){
    negative = true;
  }else if(!a.negative && !b.negative){
    negative = false;
  }else if(!a.negative && b.negative){
    b.makePositive();
    return a.subtract(b);
  }else if(a.negative && !b.negative){
    a.makePositive();
    return b.subtract(a);
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

  if(result.isZero() && result.negative){
    result.makePositive();
  }

  return result;
};

Su.prototype.subtract = function(su){
  if(!isSu(su)){
    throw new Error(NOTSU);
  }
  let a = copySu(this);
  let b = copySu(su);
  if(su.isZero()){
    return a;
  }

  if(this.isZero()){
    return b.negate();
  }

  if(a.negative !== b.negative){
    b.negative = !b.negative;
    return a.add(b);
  }

  let negative = a.negative;

  const res = getLarge(a, b, true);
  if(res !== a){
    a = su;
    b = this;
    negative = !a.negative;
  }

  const a_id = a.integer.concat(a.decimal);
  const b_id = b.integer.concat(b.decimal);

  const a_i_len = a.integer.length;
  const b_i_len = b.integer.length;

  const a_d_len = a.decimal.length;
  const b_d_len = b.decimal.length;
  const d_gap = Math.abs(a_d_len - b_d_len);

  let len_i = 0;
  let len_d = 0;
  if(a_i_len > b_i_len){
    len_i += a_i_len;
  }else{
    len_i += b_i_len;
  }
  if(a_d_len > b_d_len){
    len_d += a_d_len;
    for(let i = 0; i < d_gap; i++){
      b_id.push(0);
    }
  }else{
    len_d += b_d_len;
    for(let i = 0; i < d_gap; i++){
      a_id.push(0);
    }

  }

  let debt = 0;
  const res_array = [];
  for(let i = 0; i < len_i + len_d; i++){
    const i_a = a_id.length - 1 - i;
    const i_b = b_id.length - 1 - i;
    const a_elm = (a_id[i_a] ? a_id[i_a] : 0) - debt;
    const b_elm = b_id[i_b] ? b_id[i_b] : 0;
    if(a_elm >= b_elm){
      debt = 0;
      res_array.unshift(a_elm - b_elm);
    }else{
      debt = 1;
      res_array.unshift((debt * 10) + a_elm - b_elm);
    }

  }
  res_array.splice(res_array.length - len_d, 0, ".");
  const minus = negative ? "-" : "";

  const result =  makeSu(minus + res_array.join(""));

  if(result.isZero() && result.negative){
    result.makePositive();
  }

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

Su.prototype.makePositive = function(){
  if(this.number === 0){
    return this;
  }
  this.negative = false;
  return this;
};

Su.prototype.makeNegative = function(){
  if(this.number === 0){
    return this;
  }
  this.negative = true;
  return this;
};

Su.prototype.multiplication = function(su){
  if(!isSu(su)){
    throw new Error(NOTSU);
  }

  let a = copySu(this);
  let b = copySu(su);
  if(a.isZero() || b.isZero()){
    return makeSu(0);
  }

  let negative = false;
  if(a.negative === false && b.negative === true){
    negative = true;
  }else if(a.negative === true && b.negative === false){
    negative = true;
  }

  const a_id = a.integer.concat(a.decimal);
  const b_id = b.integer.concat(b.decimal);

  const dp_a = a.integer.length;
  const dp_b = b.integer.length;

  const res_arr = [];
  for(let i_a = 0; i_a < a_id.length; i_a++){
    for(let i_b = 0; i_b < b_id.length; i_b++){
      const elm_a = a_id[i_a];
      const elm_b = b_id[i_b];
      const pos_a = dp_a - i_a -1;
      const pos_b = dp_b - i_b -1;
      const pos = pos_a + pos_b;
      let res = elm_a * elm_b;
      let len = Math.abs(pos);
      let str;
      if(pos >= 0){
        len++;
        if(res > 9){
          str = String(res).padEnd(len + 1, "0");
        }else{
          str = String(res).padEnd(len, "0");
        }
      }else{
        if(len === 1 && res > 9){
          str = String(res)[0] + "." + String(res)[1];
        }else{
          str = "0." + String(res).padStart(len, "0");
        }
      }
      res_arr.push(makeSu(str));
    }
  }

  let res = makeSu(0);
  for(let i = 0; i < res_arr.length; i++){
    res = res.add(res_arr[i]);
  }

  res.negative = negative;

  return res;

};

Su.prototype.division = function(su){
  if(!isSu(su)){
    throw new Error(NOTSU);
  }

  let a = copySu(this);
  let b = copySu(su);

  if(a.isZero() && b.isZero()){
    return NAN;
  }else if(a.isZero()){
    return makeSu(0);
  }else if(b.isZero()){
    return DBZ;
  }


  let negative = false;
  if(a.negative === false && b.negative === true){
    negative = true;
  }else if(a.negative === true && b.negative === false){
    negative = true;
  }

  let count = makeSu(0);
  let sum = makeSu(0);
  while(a.isLarge(sum) || a.isEqual(sum)){
    count = count.add(makeSu(1));
    sum = b.multiplication(count);
  }

  count = count.subtract(makeSu(1));
  sum = sum.subtract(b);
  const remain = a.subtract(sum);
  const res = count;
  res.remainder = remain;
  res.negative = negative;
  return res;
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
  if(this.isZero()){
    return true;
  }
  const res = this.division(makeSu(2));
  
  if( res.remainder.isZero() && res.remainder.decimal[0] === 0 && res.remainder.decimal.length === 1){
    return true;
  }else{
    return false;
  }
};

Su.prototype.isOddNumber = function(){
  if(this.isZero()){
    return false;
  }
  const res = this.division(makeSu(2));
  if( !res.remainder.isZero() && res.remainder.decimal[0] === 0 && res.remainder.decimal.length === 1){
    return true;
  }else{
    return false;
  }
};

Su.prototype.getDivisors = function(){
  const arr = [];
  for(let i = 1; this.isLarge(makeSu(i)); i++){
    let su = makeSu(i);
    const remainder = this.division(su).remainder;
    if(remainder.isZero()){
      arr.push(su);
    }
  }
  arr.push(this);
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
  let count = makeSu("1");
  while(count.isSmall(CONSTANTS.MAX) || count.isEqual(CONSTANTS.MAX)){
    arr.push(this.multiplication(count));
    count = count.add(makeSu("1"));
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


const makeFibonacciSequence = function(a, b){

  if(!isSu(a) || !isSu(b)){
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


const makeLucasSequence = function(){
  return makeFibonacciSequence(makeSu(2), makeSu(1));
};

Su.prototype.isFibonacciNumber = function(){
  const n = this;
  if(n.isZero()){
    return true;
  }
  if(n.containDecimal()){
    return false;
  }

  const zero = makeSu(0);
  const one = makeSu(1);

  const fibs = makeFibonacciSequence(zero, one);
  for(let i = 0; i < fibs.length; i++){
    let f = fibs[i];
    if(f.isEqual(n)){
      return true;
    }
  }
  return false;
};

Su.prototype.isLucasNumber = function(){
  const n = this;
  if(n.containDecimal()){
    return false;
  }
  const lucs = makeLucasSequence();
  for(let i = 0; i < lucs.length; i++){
    let f = lucs[i];
    if(f.isEqual(n)){
      return true;
    }
  }
  return false;
};


const makeSequence = function(first, others){
  const array = [first];
  if(!others){
    return array;
  }
  for(let i = 0; i < others.length; i++){
    let elm = others[i];
    if(!isSu(elm)){
      elm = makeSu(elm);
    }
    array.push(elm);
  }
  return array;
}

Su.prototype.getSequence = function(){
  return makeSequence(this, arguments);
};

Su.prototype.summation = function(){
  const arr = makeSequence(this, arguments);
  let sum = makeSu(0);
  for(let i = 0; i < arr.length; i++){
    sum = sum.add(arr[i]);
  }
  return sum;
};

Su.prototype.infiniteProduct = function(){
  const arr = makeSequence(this, arguments);
  let ip = arr[0];
  for(let i = 1; i < arr.length; i++){
    ip = ip.multiplication(arr[i]);
  }
  return ip;
};

Su.prototype.digitsum = function(){
  let sum = makeSu(0);
  for(let i = 0; i < this.integer.length; i++){
    let a = makeSu(this.integer[i]);
    sum = sum.add(a);
  }
  return sum;
};

Su.prototype.square = function(){
  return this.exponentiate(makeSu(2));
};

Su.prototype.cube = function(){
  return this.exponentiate(makeSu(3));
};

Su.prototype.exponentiate = function(su){
  const one = makeSu("1");
  if(su.isZero()){
    return one;
  }
  if(su.isEqual(one)){
    return this;
  }
  let count = one;
  let res = copySu(this);
  while(count.isSmall(su)){
    res = this.multiplication(res);
    count = count.next();
  }
  return res;
};

Su.prototype.isPrimeNumber = function(){
  if(this.containDecimal()){
    return false;
  }
  if(this.isOne() || this.isZero()){
    return false;
  }
  if(this.getString() === "2"){
    return true;
  }
  let counter = this.subtract(makeSu(1));
  const one = makeSu(1);
  while(counter.isLarge(one)){
    let e = this.division(counter);
    if(e.remainder.isZero()){
      return false;
    }
    counter = counter.subtract(makeSu(1));
  }
  return true;
};

Su.prototype.divisorsSummation = function(){
  const arr = this.getDivisors();
  let a = makeSu(0);
  for(let i = 0; i < arr.length; i++){
    a = a.add(arr[i]);
  }
  return a;
};

Su.prototype.isAbundantNumber = function(){
  const sum = this.divisorsSummation();
  if(sum.isLarge( this.multiplication(makeSu(2)))){
    return true;
  }else{
    return false;
  }
};

Su.prototype.isDeficientNumber = function(){
  const sum = this.divisorsSummation();
  if(sum.isSmall( this.multiplication(makeSu(2)))){
    return true;
  }else{
    return false;
  }
};

Su.prototype.isPerfectNumber = function(){
  const sum = this.divisorsSummation();
  if(sum.subtract(this).isEqual(this)){
    return true;
  }else{
    return false;
  }
};

Su.prototype.factorial = function(){
  let res = this;
  let counter = this.subtract(makeSu(1));
  const zero = makeSu(0);
  while(counter.isLarge(zero)){
    res = res.multiplication(counter);
    counter = counter.subtract(makeSu(1));
  }
  return res;
};

const makePolygonalNumbers = function(n, max){
  if(!isSu(n)){
    return;
  }
  if(n.isSmall(makeSu(3))){
    return [];
  }
  let current = makeSu(1);
  const arr = [];
  let range = current;

  if(!max){
    max = CONSTANTS.MAX;
  }else{
    max = max.next();
  }

  const increment = n.subtract(makeSu(2));
  while(current.isSmall(max)){
    arr.push(current);
    range = range.add(increment);
    current = current.add(range);
  }
  return arr;
};

const makeTriangleNumbers = function(max){
  return makePolygonalNumbers(makeSu(3), max);
};

const makeSquareNumbers = function(max){
  return makePolygonalNumbers(makeSu(4), max);
};

Su.prototype.isTriangleNumber = function(){
  const su = this;
  const arr = makeTriangleNumbers(su);
  const res = arr.find(elm =>{
    return elm.isEqual(su);
  });
  if(res){
    return true;
  }
  return false;
};

Su.prototype.isSquareNumber = function(){
  const su = this;
  const arr = makeSquareNumbers(su);
  const res = arr.find(elm =>{
    return elm.isEqual(su);
  });
  if(res){
    return true;
  }
  return false;
};

const makeMersenneNumbers = function(max){
  if(!max){
    max = CONSTANTS.MAX;
  }else{
    max = max.next();
  }
  const two = makeSu(2);
  const arr = [];
  let current = makeSu(0);
  let ex = makeSu(1);
  
  while(current.isSmall(max)){
    current = two.exponentiate(ex).subtract(makeSu(1));
    arr.push(current);
    ex = ex.add(makeSu(1));
  }
  return arr;
};

const makeMersennePrimeNumbers = function(max){
  if(!max){
    max = CONSTANTS.MAX;
  }else{
    max = max.next();
  }
  const marr = makeMersenneNumbers(max);
  const arr = [];
  for(let i = 0; i < marr.length; i++){
    const n = marr[i];
    if(n.isPrimeNumber()){
      arr.push(n);
    }
  }
  return arr;
};

Su.prototype.isMersenneNumber = function(){
  const n = this;
  if(n.isZero()){
    return false;
  }
  if(n.containDecimal()){
    return false;
  }
  const ms = makeMersenneNumbers(n);
  for(let i = 0; i < ms.length; i++){
    let m = ms[i];
    if(m.isEqual(n)){
      return true;
    }
  }
  return false;
};

Su.prototype.isMersennePrimeNumber = function(){
  const n = this;
  if(n.isZero()){
    return false;
  }
  if(n.containDecimal()){
    return false;
  }
  const ms = makeMersennePrimeNumbers(n);
  for(let i = 0; i < ms.length; i++){
    let m = ms[i];
    if(m.isEqual(n)){
      return true;
    }
  }
  return false;
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  makeSu: makeSu,
  copySu: copySu,
  isSu: isSu,
  Su: Su
});

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./core.js");


const utils = {};


utils.getNumber = function(n){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArrayWithDecimal(n);
};

utils.copy = function(n){
  const c = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].clone(n);
  if(!c){
    const s = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numArrayToString(n);
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArrayWithDecimal(s);
  }
  return c;
};

utils.getLarge = function(a, b){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLarge(a, b);
};

utils.getSmall = function(a, b){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getSmall(a, b);
};

utils.isEqual = function(a, b){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual(a, b);
}

utils.getZero = function(){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getZero();
};

utils.getOne = function(){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getOne();
};

utils.isZero = function(n){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(n);
}
utils.isOne = function(n){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isOne(n);
}

utils.square = function(n){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].multiplication(n, n);
};

utils.getInteger = function(n){
  let str = "";
  for(let i = 0; i < n.decimal_index; i++){
    const s = String(n.array[i]);
    str = str + s;
  }
  const num = utils.getNumber(str);
  return num;
};

utils.getDecimal = function(n){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDecimal(n);
};

utils.isNaturalNumber = function(n){
  const decimal = utils.getDecimal(n);
  const is_zero = utils.isZero(decimal);
  if(is_zero && !n.negative){
    return true;
  }
  return false;
};

utils.includeDecimal = function(n){
  const decimal = utils.getDecimal(n);
  const is_zero = utils.isZero(decimal);
  if(is_zero){
    return false;
  }
  return true;
};

utils.isNegative = function(n){
  const n_ = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArrayWithDecimal(n);
  return n_.negative;
};

utils.isPositive = function(n){
  const n_ = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArrayWithDecimal(n);
  return !n_.negative;
};

utils.negate = function(n){
  const num = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArrayWithDecimal(n);
  if(num){
    num.negative = true;
  }
  return num;
};

utils.makePositive = function(n){
  const num = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArrayWithDecimal(n);
  if(num){
    num.negative = false;
  }
  return num;
};

utils.getNegativeNumber = function(n){
  return utils.negate(n);
};

utils.getPositiveNumber = function(n){
  const num = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArrayWithDecimal(n);
  if(num){
    num.negative = false;
  }
  return num;
};

utils.getNext = function(n){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(n, "1");
};

utils.getPrev = function(n){
  return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].subtract(n, "1");
};

utils.isInteger = function(n){
  if(utils.isZero(n)){
    return true;
  }

  const decimal = utils.getDecimal(n);
  if(utils.isEqual(decimal, "0")){
    return true;
  }
  return false;

};


utils.isEvenNumber = function(n){
  if(utils.isZero(n)){
    return true;
  }

  if(!utils.isInteger(n)){
    return false;
  }

  const res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].division(n, "2");

  const decimal = utils.getDecimal(res);
  const is_zero = utils.isZero(decimal);
  if(is_zero){
    return true;
  }
  return false;
};

utils.isOddNumber = function(n){
  if(utils.isZero(n)){
    return false;
  }

  if(!utils.isInteger(n)){
    return false;
  }

  const res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].division(n, "2");

  const decimal = utils.getDecimal(res);
  const bool = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual("0.5", decimal);
  if(bool){
    return true;
  }
  return false;
};


utils.getDivisors = function(n){
  if(!n && n !== 0){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: "Parameter must be integer", parameter: [n]});
  }
  const arr = [];
  const num = utils.getNumber(n);

  if(!num){
    return arr;
  }
  if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(num)){
    return arr;
  }
  if(utils.isNaturalNumber(num)){
    if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isOne(num)){
      arr.push(num)
    }else{
      for(let i = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getOne(); _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual(num, i) || _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isLarge(num, i); i = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(i, "1")){
        const res= _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].division(num, i);
        if(!utils.isNaturalNumber(res)){
          continue;
        }
        const remainder = res.remainder;
        if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(remainder)){
          arr.push(utils.getNumber(i));
        }
      }
    }
  }
  return arr;
};

utils.commonDivisors = function(a, b){
  const arr = [];
  if(!a && a !== 0){
    return arr;
  }
  if(!b && b !== 0){
    return arr;
  }

  try{
    const a_ = utils.getNumber(a);
    const b_ = utils.getNumber(b);
    
    const a_divisors = utils.getDivisors(a_);
    if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual(a_, b_)){
      return a_divisors;
    }
    const b_divisors = utils.getDivisors(b_);
    for(let i = 0; i < a_divisors.length; i++){
      const a_n = a_divisors[i];
      for(let j = 0; j < b_divisors.length; j++){
        const b_n = b_divisors[j];
        if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual(a_n, b_n)){
          arr.push(a_n);
        }
      }
    }
    return arr;
  }catch(e){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: [a, b]});
  }
};

utils.greatestCommonDivisor = function(a, b){
  try{
    const arr = utils.commonDivisors(a, b);
    return arr[arr.length - 1];
  }catch(e){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: [a, b]});
  }
};

utils.commonMultiple = function(a, b, limit){

  const limit_length = limit ? limit : 10;
  const arr = [];
  if(!a && a !== 0){
    return arr;
  }
  if(!b && b !== 0){
    return arr;
  }

  try{
    const a_ = utils.getNumber(a);
    const b_ = utils.getNumber(b);

    if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual(a_, b_)){
      arr.push(a_);
      return arr;
    }

    const a_arr = [];
    const b_arr = [];
    for(let i = 1; i <= limit_length; i++){
      const a_num = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].multiple(a_, i);
      a_arr.push(a_num);
    }
    for(let j = 1; j <= limit_length; j++){
      const b_num = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].multiple(b_, j);
      b_arr.push(b_num);
    }

    a_arr.forEach(a_n => {
      const tgt = b_arr.find(b_n => _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isEqual(a_n, b_n));
      if(tgt){
        arr.push(tgt);
      }
    });

    return arr;
  }catch(e){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: [a, b, limit]});
  }
};

utils.leastCommonMultiple = function(a, b, limit){
  const arr = utils.commonMultiple(a, b, limit);
  return arr[0];
};


const fibonacciReccurenceRelation = function({array, limit}){

  const max = limit ? limit : 100;

  const items_length = array.length;

  const func = function(array){
    if(array.length >= max){
      return array;
    }
    try{
      let res = utils.getNumber("0");
      for(let i = 0; i < items_length; i++){
        const index = array.length - (items_length - i);
        const num = array[index];
        res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(res, num);
      }
      array.push(res);
      return func(array);
    }catch(e){
      return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: [array, limit]});
    }
  };
  return func(array);
};

const makeFibonacciInitialArray = function({ first="0", last="1", length=2 }){
  const len = length;
  const a = utils.getNumber(first);
  const b = utils.getNumber(last);
  const arr = [];
  try{
    for(let i = 0; i < len; i++){
      let tgt = a;
      if(i === (len -1)){
        tgt = b;
      }
      arr.push(tgt);
    }
  }catch(e){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: [first, last, length]});
  }
  return arr;
};

utils.makeFibonacciSequence = function(first="0", last="1"){
  const arr = makeFibonacciInitialArray({first, last, length: 2});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeTribonacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 3});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeTetranacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 4});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makePentanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 5});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeHexanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 6});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeHeptanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 7});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeOctanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 8});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeNonanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 9});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeDecanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 10});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeUndecanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 11});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeDodecanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 12});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeIcosanacciSequence = function(){
  const arr = makeFibonacciInitialArray({first: "0", last: "1", length: 20});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.makeLucaSequence = function(){
  const arr = makeFibonacciInitialArray({first: "2", last: "1", length: 2});
  return fibonacciReccurenceRelation({array: arr, limit: 100});
};

utils.summation = function(array){
  if(!array || !Array.isArray(array)){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: "Parameter must be Array.", parameter: [array]});
  }
  if(array.length === 0){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: "array length is zero", parameter: [array]});
  }
  let sum = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getZero();
  if(Array.isArray(array)){
    try{
      for(let i = 0; i < array.length; i++){
        sum = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(sum, array[i]);
      }
    }catch(e){
      return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: array});
    }
  }
  return sum;
};

utils.infiniteProduct = function(array){
  if(!array || !Array.isArray(array)){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: "Parameter must be Array.", parameter: [array]});
  }
  if(array.length === 1){
    return utils.getNumber(array[0]);
  }
  let res = array[0];
  try{
    for(let i = 1; i < array.length; i++){
      res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].multiple(res, array[i]);
    }
  }catch(e){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: array});
  }
  return res;
};

utils.digitSum = function(num){
  const n = utils.getNumber(num);
  if(!n || !Array.isArray(n.array)){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: "Parameter must be a positive integer.", parameter: [num]});
  }
  let res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getZero();
  if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(n)){
    return res;
  }
  try{
    n.array.forEach(item => {
      res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(res, item);
    });
    return res;
  }catch(e){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: [num]});
  }
};

utils.makeTriangleNumber = function(num){
  const n = utils.getNumber(num);
  if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(n) || utils.isNegative(n) || !utils.isInteger(n)){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: "Parameter must be a positive integer.", parameter: [num]});
  }
  
  const res1 = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].multiple(n, _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(n, "1"));
  const res2 = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].divide(res1, "2");
  return res2;
};

utils.makePronicNumber = function(num){
  const n = utils.getNumber(num);
  if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(n)){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getZero();
  }
  if(utils.isNegative(n) || !utils.isInteger(n)){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: "Parameter must be a positive integer.", parameter: [num]});
  }
  try{
    const  res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].multiple(n, _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].add(n, "1"));
    return res;
  }catch(e){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: [num]});
  }
};

utils.factorial = function(num){
  const n = utils.getNumber(num);
  if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(n) || _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isOne(n)){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getOne();
  }

  if(utils.isNegative(n) || !utils.isInteger(n)){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: "Parameter must be a positive integer.", parameter: [num]});
  }

  let go = true;
  let temp = n;
  let current = n;
  const arr = [temp];
  try{
    while(go){
      const target = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].subtract(current, "1");
      arr.push(target);
      current = target;
      if(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSmall(current, "2")){
        go = false;
        break;
      }
    }

    return utils.infiniteProduct(arr);
  }catch(e){
    return _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeError({message: e.message, parameter: [num]});
  }
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var su_js_1 = __webpack_require__(/*! ./su.js */ "./su.js");
var SK_js_1 = __webpack_require__(/*! ./SK.js */ "./SK.js");
var core_1 = __webpack_require__(/*! ./core */ "./core.js");
var utils_js_1 = __webpack_require__(/*! ./utils.js */ "./utils.js");
var doc_1 = __webpack_require__(/*! ./doc */ "./doc.js");
var constants_1 = __webpack_require__(/*! ./constants */ "./constants.js");
exports["default"] = {
    s: su_js_1.default,
    S: SK_js_1.default.S,
    K: SK_js_1.default.K,
    core: core_1.default,
    utils: utils_js_1.default,
    doc: doc_1.default,
    constants: constants_1.default,
};

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFD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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFD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O0FBQ0EsV0FBVywwREFBYyxFQUFFLG1FQUFtRTtBQUM5Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseURBQWE7QUFDbEM7QUFDQTtBQUNBLFNBQVMsd0RBQVk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsV0FBVywwREFBYyxFQUFFLHFDQUFxQztBQUNoRTtBQUNBOzs7O0FBSUEsaUVBQWUsS0FBSzs7Ozs7O1VDbmhCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSw0REFBd0I7QUFDeEIsNERBQXlCO0FBQ3pCLDREQUEwQjtBQUMxQixxRUFBK0I7QUFDL0IseURBQXdCO0FBQ3hCLDJFQUFtQztBQUVuQyxxQkFBZTtJQUNiLENBQUMsRUFBRSxlQUFDO0lBQ0osQ0FBQyxFQUFFLGVBQUUsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxFQUFFLGVBQUUsQ0FBQyxDQUFDO0lBQ1AsSUFBSSxFQUFFLGNBQUk7SUFDVixLQUFLLEVBQUUsa0JBQUs7SUFDWixHQUFHLEVBQUUsYUFBRztJQUNSLFNBQVMsRUFBRSxtQkFBUztDQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Uvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3N1Ly4vU0suanMiLCJ3ZWJwYWNrOi8vc3UvLi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3UvLi9jb3JlLmpzIiwid2VicGFjazovL3N1Ly4vZG9jLmpzIiwid2VicGFjazovL3N1Ly4vc3UuanMiLCJ3ZWJwYWNrOi8vc3UvLi91dGlscy5qcyIsIndlYnBhY2s6Ly9zdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N1Ly4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCAoKSA9PiB7XG5yZXR1cm4gIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0IHN1IGZyb20gXCIuL3N1LmpzXCI7XG5cbmltcG9ydCBDT05TVEFOVFMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5jb25zdCBNSU4gPSBDT05TVEFOVFMuTUlOO1xuXG5jb25zdCBTID0ge307XG5jb25zdCBLID0ge307XG5cbmNvbnN0IG1ha2VTdSA9IHN1Lm1ha2VTdTtcbmNvbnN0IGNvcHlTdSA9IHN1LmNvcHlTdTtcbmNvbnN0IGlzU3UgPSBzdS5pc1N1O1xuY29uc3QgU3UgPSBzdS5TdTtcblxuY29uc3QgRklSU1RfUFJJTUVfTlVNQkVSID0gMjtcblxuXG5LLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IG1ha2VTdSgwKTtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gbWFrZVN1KDEpO1xuICB9XG4gIGlmKCFpc1N1KG1pbikpe1xuICAgIG1pbiA9IG1ha2VTdShtaW4pO1xuICB9XG4gIGlmKCFpc1N1KG1heCkpe1xuICAgIG1heCA9IG1ha2VTdShtYXgpO1xuICB9XG5cbiAgY29uc3Qgc3RyID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBsZXQgcmFuO1xuXG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIGlmKG1pbi5pc1plcm8oKSl7XG4gICAgICByYW4gPSBtYWtlU3UoMCk7XG4gICAgfWVsc2V7XG4gICAgICByYW4gPSBtaW47XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByYW4gPSBtYWtlU3UoXCIwLlwiICsgYXJyWzFdKS5tdWx0aXBsaWNhdGlvbihtYXgpO1xuICB9XG4gIHJldHVybiByYW47XG59O1xuXG5LLnJhbmRvbUVsZW1lbnQgPSBmdW5jdGlvbihhcnJheSl7XG4gIGNvbnN0IGkgPSBLLnJhbmRvbSgwLCBhcnJheS5sZW5ndGgpLmludGVnZXI7XG4gIHJldHVybiBhcnJheVtpXTtcbn07XG5cbksucmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpe1xuXG4gIGlmKCAhaXNTdShtaW4pIHx8ICFpc1N1KG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZihtaW4uaXNFcXVhbChtYXgpIHx8IG1pbi5pc0xhcmdlKG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBtaW4uZ2V0TnVtYmVyKCk7IGkgPD0gbWF4LmdldE51bWJlcigpOyBpKyspe1xuICAgIGNvbnN0IHMgPSBtYWtlU3UoaSk7XG4gICAgYXJyLnB1c2gocyk7XG4gIH1cblxuICBjb25zdCByZXMgPSBLLnJhbmRvbUVsZW1lbnQoYXJyKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuSy5tYWtlUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYobWF4ICYmIG1heC5pc1N1ICYmIG1heC5pc1N1KCkpe1xuICAgIG1heCA9IE51bWJlcihtYXguZ2V0U3RyaW5nKCkpO1xuICB9XG5cbiAgY29uc3QgTUFYID0gMTAwO1xuICBpZighbWF4KXtcbiAgICBtYXggPSBNQVg7XG4gIH1cbiAgaWYobWF4ID4gTUFYKXtcbiAgICBtYXggPSBNQVg7XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IEZJUlNUX1BSSU1FX05VTUJFUjsgaSA8IG1heDsgaSsrKXtcbiAgICBjb25zdCBzdSA9IG1ha2VTdShpKTtcbiAgICBpZihzdS5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG4vLyDjg6bjg7zjgq/jg6rjg4Pjg4njga7kupLpmaTms5VcbksuZXVjbGlkZWFuQWxnb3JpdGhtID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhUy5pc051bWJlcihhKSB8fCAhUy5pc051bWJlcihiKSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKCBhID09PSBiKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCB0ZW1wO1xuICBpZiggYSA8IGIpe1xuICAgIHRlbXAgPSBhO1xuICAgIGEgPSBiO1xuICAgIGIgPSB0ZW1wO1xuICB9XG5cbiAgbGV0IGF0ZW1wID0gYTtcbiAgbGV0IGJ0ZW1wID0gYjtcbiAgbGV0IGN0ZW1wO1xuICBsZXQgcmVzO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGNvcHJpbWUgPSBcImNvcHJpbWVcIjtcbiAgd2hpbGUoY3RlbXAgIT09MCl7XG4gICAgY3RlbXAgPSBhdGVtcCAlIGJ0ZW1wO1xuICAgIGlmKGN0ZW1wID09PSAwKXtcbiAgICAgIHJlcyA9IGJ0ZW1wO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGN0ZW1wID09PSAxKXtcbiAgICAgIHJlcyA9IGNvcHJpbWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY291bnRlciA+PSBNQVgpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGF0ZW1wID0gYnRlbXA7XG4gICAgYnRlbXAgPSBjdGVtcDtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuSy5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gIH1cblxuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtqXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgc3VtICs9IGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblxuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gZmlib25hY2NpXG5cblxuXG5cblxuXG5cbi8vIHRvZG8gMHN0YXJ0XG5jb25zdCBhcnJheVN1bW1hdGlvbiA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIShhIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYSA9IGNvcmUubnVtVG9BcnJheShhKTtcbiAgfVxuICBpZiggIShiIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYiA9IGNvcmUubnVtVG9BcnJheShiKTtcbiAgfVxuXG4gIGlmKCFjb3JlLmlzTnVtQXJyYXkoYSkgfHwgIWNvcmUuaXNOdW1BcnJheShiKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKGFbMF0pICYmIGNvcmUuaXNaZXJvKGJbMF0pKXtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyYXk6IFswXSxcbiAgICAgIHN0cmluZzogXCIwXCIsXG4gICAgICBudW1iZXI6IDAsXG4gICAgICBsZW5ndGg6IDFcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgQSA9IG1ha2VTdShhKTtcbiAgY29uc3QgQiA9IG1ha2VTdShiKTtcblxuICBjb25zb2xlLmxvZyhBLEIpO1xuXG4gIGNvbnN0IHJlcyA9IGNvcmUuZ2V0TGFyZ2VyKGEsIGIpO1xuICBjb25zdCBhcnJfYSA9IHJlc1swXTtcbiAgY29uc3QgYXJyX2IgPSByZXNbMV07XG4gIGNvbnN0IGxlbiA9IGFycl9hLmxlbmd0aDtcblxuICBjb25zdCBnYXAgPSBsZW4gLSBhcnJfYi5sZW5ndGg7XG5cbiAgbGV0IG92ZXIgPSAwLCBhcnJfYyA9IFtdO1xuICBmb3IobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBjb25zdCBlbG1fYiA9IGFycl9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGFycl9jLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGFycl9jLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoYXJyX2MpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRMYXJnZXIgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyX2EgPSBbXSwgYXJyX2IgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYVtpXTtcbiAgICBpZihlbG1fYSA9PT0gMCAmJiBhcnJfYS5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9hID49ICAwICYmIGVsbV9hIDwgMTApe1xuICAgICAgYXJyX2EucHVzaChlbG1fYSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9iID0gYltpXTtcbiAgICBpZihlbG1fYiA9PT0gMCAmJiBhcnJfYi5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9iID49ICAwICYmIGVsbV9iIDwgMTApe1xuICAgICAgYXJyX2IucHVzaChlbG1fYik7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcztcbiAgaWYoYXJyX2EubGVuZ3RoID4gYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYSwgYl07XG4gIH1lbHNlIGlmKGFycl9hLmxlbmd0aCA8IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2IsIGFdO1xuICB9ZWxzZXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtX2FhID0gYXJyX2FbaV07XG4gICAgICBjb25zdCBlbG1fYmIgPSBhcnJfYltpXTtcbiAgICAgIGlmKGVsbV9hYSA+IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYWEgPCBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFM6IFMsXG4gIEs6IEtcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUubWFrZUVycm9yID0gZnVuY3Rpb24oe21lc3NhZ2UsIHZhcmlhYmxlLCBwYXJhbWV0ZXJ9KXtcbiAgdHJ5e1xuICAgIGNvbnN0IHYgPSB2YXJpYWJsZS50b1N0cmluZygpO1xuICAgIGNvbnN0IHAgPSBwYXJhbWV0ZXIudG9TdHJpbmcoKTtcbiAgICBsZXQgc3RyID0gbWVzc2FnZTtcbiAgICBpZih2KXtcbiAgICAgIHN0ciA9IGAke3N0cn0sICR7diA/IHYgOiBcIlwifWA7XG4gICAgfVxuICAgIGlmKHApe1xuICAgICAgc3RyID0gYCR7c3RyfSwgJHtwID8gcCA6IFwiXCJ9YDtcbiAgICB9XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3Ioc3RyKTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1jYXRjaChlKXtcbiAgICByZXR1cm4gZTtcbiAgfVxufTtcblxuY29uc3QgaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29yZS5tb2xkTnVtQXJyYXkgPSBmdW5jdGlvbih7IGFycmF5LCBuZWdhdGl2ZSwgZGVjaW1hbF9pbmRleCB9KXtcbiAgaWYoIWFycmF5KXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3IoeyBtZXNzYWdlOiBcIkFycmF5IGlzIG5vdCBleGlzdHNcIiwgcGF0YW1ldGVyOiBhcnJheX0pO1xuICB9XG5cbiAgaWYodHlwZW9mIGRlY2ltYWxfaW5kZXggIT09IFwibnVtYmVyXCIgfHwgaXNOYU4oZGVjaW1hbF9pbmRleCkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiZGVjaW1hbF9pbmRleCBpcyBub3QgYSBudW1iZXJcIiwgcGF0YW1ldGVyOiBkZWNpbWFsX2luZGV4fSk7XG4gIH1cbiAgdHJ5e1xuICAgIHdoaWxlKGRlY2ltYWxfaW5kZXggPCBhcnJheS5sZW5ndGggJiYgYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV0gPT09IDApe1xuICAgICAgYXJyYXkucG9wKCk7XG4gICAgfVxuICAgIHdoaWxlKGRlY2ltYWxfaW5kZXggPiAxICYmIGFycmF5WzBdID09PSAwKXtcbiAgICAgIGFycmF5LnNoaWZ0KCk7XG4gICAgICBkZWNpbWFsX2luZGV4LS07XG4gICAgfVxuXG4gICAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICAgIGFycmF5LnB1c2goMCk7XG4gICAgICBkZWNpbWFsX2luZGV4ID0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBvID0ge1xuICAgICAgYXJyYXk6IGFycmF5LFxuICAgICAgbmVnYXRpdmU6ICEhbmVnYXRpdmUsXG4gICAgICBpc19udW1fYXJyYXk6IHRydWUsXG4gICAgfTtcbiAgICBpZihkZWNpbWFsX2luZGV4ID09PSAwIHx8IGRlY2ltYWxfaW5kZXggPiAwKXtcbiAgICAgIG8uZGVjaW1hbF9pbmRleCA9IGRlY2ltYWxfaW5kZXg7XG4gICAgfWVsc2V7XG4gICAgICBvLmRlY2ltYWxfaW5kZXggPSBhcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIG87XG4gIH1jYXRjaChlKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGUubWVzc2FnZSwgcGFyYW1ldGVyOiBhcnJheX0pO1xuICB9XG5cbn07XG5cbmNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsID0gZnVuY3Rpb24obil7XG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBufSk7XG4gIH1cblxuICBpZihuLmlzX251bV9hcnJheSl7XG4gICAgcmV0dXJuIGNvcmUuY2xvbmUobik7XG4gIH1cblxuICBpZih0eXBlb2YgbiA9PT0gXCJvYmplY3RcIil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBvYmplY3QuXCIsIHBhcmFtZXRlcjogbn0pO1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIHdoaWxlKHN0ciAmJiBzdHJbMF0ubWF0Y2goL14tLykpe1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9eLS8sIFwiXCIpO1xuICAgIG5lZ2F0aXZlID0gIW5lZ2F0aXZlO1xuICB9XG5cbiAgbGV0IGRlY19pbmRleDtcbiAgbGV0IHJlcyA9IHN0ci5tYXRjaCgvXFwuL2cpO1xuICBpZihyZXMgJiYgcmVzLmxlbmd0aCA+IDEpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZihyZXMgJiYgcmVzLmxlbmd0aCA9PT0gMSl7XG4gICAgZGVjX2luZGV4ID0gc3RyLm1hdGNoKC9cXC4vKS5pbmRleDtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXFwuLywgXCJcIik7XG4gIH1lbHNle1xuICAgIGRlY19pbmRleCA9IHN0ci5sZW5ndGg7XG4gIH1cblxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG5cbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3RyW2ldKTtcbiAgICBpZighaXNOdW1iZXIobnVtKSl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIiwgcGFyYW1ldGVyOiBudW19KTtcbiAgICB9XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuXG4gIHJldHVybiBjb3JlLm1vbGROdW1BcnJheSh7IGFycmF5OiBhcnIsIG5lZ2F0aXZlOiBuZWdhdGl2ZSwgZGVjaW1hbF9pbmRleDogZGVjX2luZGV4fSk7XG5cbn07XG5cbmNvcmUubnVtQXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uKG4pe1xuICBpZighbi5pc19udW1fYXJyYXkgfHwgIW4uYXJyYXkgfHwgIW4uZGVjaW1hbF9pbmRleCl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0IGFyciA9IFsuLi5uLmFycmF5XTtcbiAgICBhcnIuc3BsaWNlKG4uZGVjaW1hbF9pbmRleCwgMCwgXCIuXCIpO1xuICAgIGxldCBzdHIgPSBhcnIuam9pbihcIlwiKTtcbiAgICBpZihuLm5lZ2F0aXZlKXtcbiAgICAgIHN0ciA9IGAtJHtzdHJ9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgfWNhdGNoKGVycil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBufSk7XG4gIH1cblxufTtcblxuY29yZS5jb21wYXJlID0gZnVuY3Rpb24oYSwgYil7XG4gIHRyeXtcbiAgICBcbiAgICBpZighYSB8fCAhYil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3IoeyBtZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIHVuZGVmaW5lZCwgbnVsbCwgb3IgZW1wdHkuXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG8gPSB7XG4gICAgICBzbWFsbDogbnVsbCxcbiAgICAgIGxhcmdlOiBudWxsLFxuICAgICAgZXF1YWw6IGZhbHNlXG4gICAgfTtcbiAgICBsZXQgYV8gPSBhO1xuICAgIGxldCBiXyA9IGI7XG5cbiAgICBpZighYV8uaXNfbnVtX2FycmF5KXtcbiAgICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYV8pO1xuICAgICAgaWYoIWFfKXtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFiXy5pc19udW1fYXJyYXkpe1xuICAgICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiXyk7XG4gICAgICBpZighYl8pe1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhX2FycmF5ID0gYV8uYXJyYXk7XG4gICAgY29uc3QgYl9hcnJheSA9IGJfLmFycmF5O1xuXG4gICAgY29uc3QgYV9sZW4gPSBhX2FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBiX2xlbiA9IGJfYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGFfc3RyID0gYV9hcnJheS5qb2luKFwiXCIpO1xuICAgIGNvbnN0IGJfc3RyID0gYl9hcnJheS5qb2luKFwiXCIpO1xuXG4gICAgY29uc3QgYV9pbnRfbGVuID0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2ludF9sZW4gPSBiXy5kZWNpbWFsX2luZGV4O1xuXG4gICAgY29uc3QgYV9kZWNfbGVuID0gYV9sZW4gLSBhX2ludF9sZW47XG4gICAgY29uc3QgYl9kZWNfbGVuID0gYl9sZW4gLSBiX2ludF9sZW47XG5cbiAgICBpZihhX2xlbiA9PT0gMSAmJiBhX3N0ciA9PT0gXCIwXCIgJiYgYl9sZW4gPT09IDEgJiYgYl9zdHIgPT09IFwiMFwiKXtcbiAgICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAgIGlmKCFhXy5uZWdhdGl2ZSAmJiBiXy5uZWdhdGl2ZSl7XG4gICAgICBvLnNtYWxsID0gYl87XG4gICAgICBvLmxhcmdlID0gYV87XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoYV8ubmVnYXRpdmUgJiYgIWJfLm5lZ2F0aXZlKXtcbiAgICAgIG8uc21hbGwgPSBhXztcbiAgICAgIG8ubGFyZ2UgPSBiXztcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGNvbnN0IG5lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG5cbiAgICBjb25zdCBvX2FfYiA9IHtcbiAgICAgIGxhcmdlOiBuZWdhdGl2ZSA/IGJfIDogYV8sXG4gICAgICBzbWFsbDogbmVnYXRpdmUgPyBhXyA6IGJfLFxuICAgICAgZXF1YWw6IGZhbHNlLFxuICAgIH07XG4gICAgY29uc3Qgb19iX2EgPSB7XG4gICAgICBsYXJnZTogbmVnYXRpdmUgPyBhXyA6IGJfLFxuICAgICAgc21hbGw6IG5lZ2F0aXZlID8gYl8gOiBhXyxcbiAgICAgIGVxdWFsOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZihhX2ludF9sZW4gPiBiX2ludF9sZW4pe1xuICAgICAgcmV0dXJuIG9fYV9iO1xuICAgIH1cbiAgICBcbiAgICBpZihhX2ludF9sZW4gPCBiX2ludF9sZW4pe1xuICAgICAgcmV0dXJuIG9fYl9hO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhX2ludF9sZW47IGkrKyl7XG4gICAgICBpZihhX2FycmF5W2ldID4gYl9hcnJheVtpXSl7XG4gICAgICAgIHJldHVybiBvX2FfYjtcbiAgICAgIH1cbiAgICAgIGlmKGFfYXJyYXlbaV0gPCBiX2FycmF5W2ldKXtcbiAgICAgICAgcmV0dXJuIG9fYl9hOyAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVjX2xlbiA9IGFfZGVjX2xlbiA+IGJfZGVjX2xlbiA/IGFfZGVjX2xlbiA6IGJfZGVjX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGVjX2xlbjsgaSsrKXtcbiAgICAgIGNvbnN0IGFhID0gYV9hcnJheVthX2ludF9sZW4gKyBpXSA/IGFfYXJyYXlbYV9pbnRfbGVuICsgaV0gOiAwO1xuICAgICAgY29uc3QgYmIgPSBiX2FycmF5W2JfaW50X2xlbiArIGldID8gYl9hcnJheVtiX2ludF9sZW4gKyBpXSA6IDA7XG4gICAgICBpZihhYSA+IGJiKXtcbiAgICAgICAgcmV0dXJuIG9fYV9iO1xuICAgICAgfVxuICAgICAgaWYoYWEgPCBiYil7XG4gICAgICAgIHJldHVybiBvX2JfYTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvLmVxdWFsID0gdHJ1ZTtcbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGVycil7XG4gICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICB9XG5cbn07XG5cbmNvcmUuZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiKXtcbiAgcmV0dXJuIGNvcmUuY29tcGFyZShhLCBiKS5sYXJnZTtcbn07XG5cbmNvcmUuZ2V0U21hbGwgPSBmdW5jdGlvbihhLCBiKXtcbiAgcmV0dXJuIGNvcmUuY29tcGFyZShhLCBiKS5zbWFsbDtcbn07XG5cbmNvcmUuaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCByZXMgPSBjb3JlLmNvbXBhcmUoYSwgYik7XG4gIGlmKHJlcy5lcXVhbCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29yZS5pc1NtYWxsID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoY29yZS5nZXRTbWFsbChhLCBiKSwgYSk7XG59O1xuY29yZS5pc0xhcmdlID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoY29yZS5nZXRMYXJnZShhLCBiKSwgYSk7XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZighbil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKCFuLmlzX251bV9hcnJheSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHplcm8gPSBjb3JlLmdldFplcm8oKTtcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbCh6ZXJvLCBuKTtcbn07XG5cbmNvcmUuaXNPbmUgPSBmdW5jdGlvbihuKXtcbiAgaWYoIW4pe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBvbmUgPSBjb3JlLmdldE9uZSgpO1xuICBpZihjb3JlLmlzRXF1YWwob25lLCBuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29yZS5nZXRaZXJvID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMFwiKTtcbn07XG5cbmNvcmUuZ2V0T25lID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMVwiKTtcbn07XG5cbmNvcmUuZml4Q2FycnkgPSBmdW5jdGlvbihhcnIsIG1pbnVzKXtcbiAgdHJ5IHtcbiAgICBsZXQgbWludXNfID0gbWludXM7XG4gICAgZm9yKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0wOyBpLS0pe1xuICAgICAgY29uc3QgZWxtID0gYXJyW2ldO1xuICAgICAgaWYoZWxtIDwgMCl7XG4gICAgICAgIG1pbnVzXyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtID09PSAwKXtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKG1pbnVzXyl7XG4gICAgICBjb25zdCBjYWNoZSA9IFtdO1xuICAgICAgYXJyLmZvckVhY2goIGVsbSA9PiB7XG4gICAgICAgIGNhY2hlLnB1c2goLWVsbSk7XG4gICAgICB9KTtcbiAgICAgIGFyciA9IGNhY2hlO1xuICAgIH1cbiAgICBjb25zdCBuZXdfYXJyID0gW107XG4gICAgbGV0IGNhcnJ5ID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGxldCB2YWwgPSBhcnJbaV0gKyBjYXJyeTtcbiAgICAgIGlmKHZhbCA+IDkpe1xuICAgICAgICBjb25zdCBhcnIxID0gU3RyaW5nKHZhbCkuc3BsaXQoXCJcIik7XG4gICAgICAgIHZhbCA9IE51bWJlcihhcnIxW2FycjEubGVuZ3RoIC0gMV0pO1xuICAgICAgICBjb25zdCBhcnIyID0gYXJyMS5zbGljZSgwLCBhcnIxLmxlbmd0aCAtIDEpO1xuICAgICAgICBjYXJyeSA9IE51bWJlcihhcnIyLmpvaW4oXCJcIikpO1xuICAgICAgfWVsc2UgaWYoIHZhbCA+PSAwICYmIHZhbCA8PSA5KXtcbiAgICAgICAgY2FycnkgPSAwO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhbCA9IDEwICsgdmFsO1xuICAgICAgICBjYXJyeSA9IC0xO1xuXG4gICAgICB9XG4gICAgICBuZXdfYXJyLnB1c2godmFsKTtcbiAgICB9XG4gICAgaWYoY2FycnkgIT09IDApe1xuICAgICAgbmV3X2Fyci5wdXNoKGNhcnJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmV3X2FycmF5OiBuZXdfYXJyLFxuICAgICAgbWludXM6IG1pbnVzX1xuICAgIH07XG4gIH1jYXRjaChlcnIpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FyciwgbWludXNdfSlcbiAgfVxuXG59O1xuXG5jb3JlLmNsb25lID0gZnVuY3Rpb24obil7XG4gIHRyeXtcbiAgICBpZighbil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBufSk7XG4gICAgfVxuICAgIGlmKCFuLmlzX251bV9hcnJheSl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIG5vdCBjb21wYXRpYmxlXCIsIHBhcmFtZXRlcjogbn0pO1xuICAgIH1cbiAgICBjb25zdCBvID0ge1xuICAgICAgLi4ubixcbiAgICAgIGFycmF5OiBbLi4ubi5hcnJheV0sXG4gICAgfTtcbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGVycil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBufSk7XG4gIH1cbn07XG5cbmNvcmUuYWRkX2FuZF9zdWJ0cmFjdCA9IGZ1bmN0aW9uKGEsIGIsIG1vZGUpe1xuICBpZighYSB8fCAhYil7XG4gICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBtdXN0IGJlIGEgTnVtYmVyIG9yIGEgU3RyaW5nLlwiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuICBcbiAgbGV0IHBsdXM7XG4gIGlmKCFtb2RlKXtcbiAgICByZXR1cm47XG4gIH1lbHNlIGlmKG1vZGUgPT09IFwiK1wiKXtcbiAgICBwbHVzID0gdHJ1ZTtcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCItXCIpe1xuICAgIHBsdXMgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIm1vZGUgbXVzdCBiZSAnKycgb3IgJy0nLlwiLCBwYXJhbWV0ZXI6IG1vZGV9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgbGV0IGFfID0gbnVsbDtcbiAgICBsZXQgYl8gPSBudWxsO1xuICAgIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgICB9ZWxzZXtcbiAgICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgICB9XG4gICAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgIH1lbHNle1xuICAgICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyID0gYV8uYXJyYXk7XG4gICAgY29uc3QgYl9hcnIgPSBiXy5hcnJheTtcblxuXG4gICAgY29uc3QgYV9pc196ZXJvID0gY29yZS5pc1plcm8oYV8pO1xuICAgIGNvbnN0IGJfaXNfemVybyA9IGNvcmUuaXNaZXJvKGJfKTtcblxuICAgIGlmKGFfaXNfemVybyAmJiBiX2lzX3plcm8pe1xuICAgICAgcmV0dXJuIGFfO1xuICAgIH1lbHNlIGlmKGFfaXNfemVybyl7XG4gICAgICBpZighcGx1cyl7XG4gICAgICAgIGJfLm5lZ2F0aXZlID0gIWJfLm5lZ2F0aXZlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJfO1xuICAgIH1lbHNlIGlmKGJfaXNfemVybyl7XG4gICAgICByZXR1cm4gYV87XG4gICAgfVxuXG4gICAgY29uc3QgYV9kZWNfbGVuZ3RoID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2RlY19sZW5ndGggPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuXG4gICAgY29uc3QgZGVjX2dhcCA9IGFfZGVjX2xlbmd0aCAtIGJfZGVjX2xlbmd0aDtcblxuICAgIGlmKGRlY19nYXAgPiAwKXtcbiAgICAgIGJfYXJyLnB1c2goLi4uQXJyYXkoZGVjX2dhcCkuZmlsbCgwKSk7XG4gICAgfWVsc2UgaWYoZGVjX2dhcCA8IDApe1xuICAgICAgYV9hcnIucHVzaCguLi5BcnJheShNYXRoLmFicyhkZWNfZ2FwKSkuZmlsbCgwKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKHthLCBiLCBwbHVzfSl7XG4gICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgIGxldCBsZW4gPSBhLmFycmF5Lmxlbmd0aDtcbiAgICAgIGlmKGEuYXJyYXkubGVuZ3RoIDwgYi5hcnJheS5sZW5ndGgpe1xuICAgICAgICBsZW4gPSBiLmFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFycl9hID0gYS5hcnJheTtcbiAgICAgIGNvbnN0IGFycl9iID0gYi5hcnJheTtcbiAgICAgIGNvbnN0IGFfb25lID0gYS5uZWdhdGl2ZSA/IC0xIDogMTtcbiAgICAgIGNvbnN0IGJfb25lID0gYi5uZWdhdGl2ZSA/IC0xIDogMTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgIGNvbnN0IGFhID0gYXJyX2FbaV0gPyBhcnJfYVtpXSAqIGFfb25lIDogMDtcbiAgICAgICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldICogYl9vbmUgOiAwO1xuICAgICAgICBsZXQgcmVzID0gcGx1cyA/IGFhICsgYmIgOiBhYSAtIGJiO1xuICAgICAgICBhcnIucHVzaChyZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcmUuZml4Q2FycnkoYXJyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXksIG1pbnVzIH0gPSBjYWxjKHtcbiAgICAgIGE6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5hX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYV8ubmVnYXRpdmUsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBhcnJheTogWy4uLmJfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBiXy5uZWdhdGl2ZVxuICAgICAgfSxcbiAgICAgIHBsdXM6IHBsdXNcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlY19sZW5ndGggPSBhX2RlY19sZW5ndGggPj0gYl9kZWNfbGVuZ3RoID8gYV9kZWNfbGVuZ3RoIDogYl9kZWNfbGVuZ3RoO1xuICAgIGNvbnN0IG5ld19pbnRfbGVuZ3RoID0gbmV3X2FycmF5Lmxlbmd0aCAtIGRlY19sZW5ndGg7XG5cbiAgICBjb25zdCBuZXdfZGVjaW1hbF9pbmRleCA9IG5ld19pbnRfbGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ubmV3X2FycmF5XS5yZXZlcnNlKCksXG4gICAgICBuZWdhdGl2ZTogbWludXMgPyB0cnVlIDogZmFsc2UsXG4gICAgICBkZWNpbWFsX2luZGV4OiBuZXdfZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuICB9Y2F0Y2goZXJyKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICB9XG5cbn07XG5cbmNvcmUuYWRkID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLmFkZF9hbmRfc3VidHJhY3QoYSwgYiwgXCIrXCIpO1xufTtcblxuY29yZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKGEsIGIpe1xuICByZXR1cm4gY29yZS5hZGRfYW5kX3N1YnRyYWN0KGEsIGIsIFwiLVwiKTtcbn07XG5cblxuY29yZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKGEsIGIpe1xuXG4gIGlmKCFhIHx8ICFiKXtcbiAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxuICBsZXQgYV8gPSBudWxsO1xuICBsZXQgYl8gPSBudWxsO1xuICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICB9ZWxzZXtcbiAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gIH1cbiAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgfWVsc2V7XG4gICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICB9XG5cbiAgY29uc3QgYV9hcnIgPSBhXy5hcnJheTtcbiAgY29uc3QgYl9hcnIgPSBiXy5hcnJheTtcblxuICBpZihjb3JlLmlzWmVybyhhXykgfHwgY29yZS5pc1plcm8oYl8pKXtcbiAgICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIwXCIpO1xuICB9XG5cbiAgaWYoY29yZS5pc09uZShhXykpe1xuICAgIHJldHVybiBiXztcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUoYl8pKXtcbiAgICByZXR1cm4gYV87XG4gIH1cblxuICB0cnl7XG5cbiAgICBjb25zdCBhX25lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG4gICAgY29uc3QgYl9uZWdhdGl2ZSA9IGJfLm5lZ2F0aXZlO1xuICAgIGxldCBuZWdhdGl2ZTtcbiAgICBpZihhX25lZ2F0aXZlICYmIGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9ZWxzZSBpZihhX25lZ2F0aXZlIHx8IGJfbmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBhX2RlY19sZW5ndGggPSBhXy5hcnJheS5sZW5ndGggLSBhXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGJfZGVjX2xlbmd0aCA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgZGVjX2xlbmd0aCA9IGFfZGVjX2xlbmd0aCArIGJfZGVjX2xlbmd0aDtcblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYn0pe1xuICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgIGNvbnN0IGFycl9hID0gYS5hcnJheTtcbiAgICAgIGNvbnN0IGFycl9iID0gYi5hcnJheTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGFhID0gYXJyX2FbaV0gPyBhcnJfYVtpXSA6IDA7XG4gICAgICAgIGNvbnN0IGFyciA9IG5ldyBBcnJheShpKTtcbiAgICAgICAgYXJyLmZpbGwoMCwgMCwgaSk7XG5cbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGFycl9iLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICBjb25zdCBiYiA9IGFycl9iW2pdID8gYXJyX2Jbal0gOiAwO1xuICAgICAgICAgIGxldCByZXMgPSBhYSAqIGJiO1xuICAgICAgICAgIFxuICAgICAgICAgIGFyci5wdXNoKHJlcyk7XG5cbiAgICAgICAgICBjb25zdCB0Z3RfaW5kZXggPSBpICsgajtcbiAgICAgICAgICBsZXQgdGd0ID0gYXJyYXlbdGd0X2luZGV4XTtcbiAgICAgICAgICBpZighdGd0KXtcbiAgICAgICAgICAgIHRndCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG5ld190Z3QgPSB0Z3QgKyByZXM7XG4gICAgICAgICAgYXJyYXlbdGd0X2luZGV4XSA9IG5ld190Z3Q7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3JlLmZpeENhcnJ5KGFycmF5KTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXkgfSA9IGNhbGMoe1xuICAgICAgYToge1xuICAgICAgICBhcnJheTogWy4uLmFfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBhXy5uZWdhdGl2ZSxcbiAgICAgIH0sXG4gICAgICBiOiB7XG4gICAgICAgIGFycmF5OiBbLi4uYl9hcnJdLnJldmVyc2UoKSxcbiAgICAgICAgbmVnYXRpdmU6IGJfLm5lZ2F0aXZlXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3X2RlY2ltYWxfaW5kZXggPSBuZXdfYXJyYXkubGVuZ3RoIC0gZGVjX2xlbmd0aDtcblxuICAgIHJldHVybiBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLm5ld19hcnJheV0ucmV2ZXJzZSgpLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogbmV3X2RlY2ltYWxfaW5kZXhcbiAgICB9KTtcbiAgfWNhdGNoKGVycil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgfVxuXG59O1xuXG5jb3JlLm11bHRpcGxlID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLm11bHRpcGxpY2F0aW9uKGEsIGIpO1xufTtcblxuY29yZS5nZXREZWNpbWFsID0gZnVuY3Rpb24obil7XG4gIHRyeXtcbiAgICBjb25zdCBuXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICAgIGxldCBzdHIgPSBcIjAuXCI7XG4gICAgY29uc3QgbGVuID0gbl8uYXJyYXkubGVuZ3RoIC0gbl8uZGVjaW1hbF9pbmRleDtcbiAgICBpZihsZW4gPiAwKXtcbiAgICAgIGZvcihsZXQgaSA9IG5fLmRlY2ltYWxfaW5kZXg7IGkgPD0gbGVuOyBpKyspe1xuICAgICAgICBjb25zdCBzID0gU3RyaW5nKG5fLmFycmF5W2ldKTtcbiAgICAgICAgc3RyID0gc3RyICsgcztcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHN0ciA9IHN0ciArIFwiMFwiO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChzdHIpO1xuICAgIHJldHVybiBudW07XG4gIH1jYXRjaChlcnIpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbn0pO1xuICB9XG59O1xuXG5cbmNvcmUuZGl2aXNpb24gPSBmdW5jdGlvbihhLCBiKXtcblxuICB0cnkge1xuICAgIGlmKCFhIHx8ICFiKXtcbiAgICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFfID0gbnVsbDtcbiAgICBsZXQgYl8gPSBudWxsO1xuICAgIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgICB9ZWxzZXtcbiAgICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgICB9XG4gICAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgIH1lbHNle1xuICAgICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgICBpZihjb3JlLmlzTGFyZ2UoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIkluZmluaXR5XCI7XG4gICAgICB9ZWxzZSBpZihjb3JlLmlzU21hbGwoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIk5lZ2F0aXZlIEluZmluaXR5XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJOb3QgYSBOdW1iZXJcIjtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhhXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc09uZShiXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYV8sXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNFcXVhbChhXywgYl8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0T25lKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9uZWdhdGl2ZSA9IGFfLm5lZ2F0aXZlO1xuICAgIGNvbnN0IGJfbmVnYXRpdmUgPSBiXy5uZWdhdGl2ZTtcblxuICAgIGlmKGFfLm5lZ2F0aXZlKXtcbiAgICAgIGFfLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoYl8ubmVnYXRpdmUpe1xuICAgICAgYl8ubmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV9uZWdhdGl2ZSAmJiBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfWVsc2UgaWYoYV9uZWdhdGl2ZSB8fCBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKHthLCBiLCBtYXh9KXtcbiAgICAgIGNvbnN0IHJlc3VsdF9hcnIgPSBbXTtcbiAgICAgIGxldCByZW1haW4gPSBjb3JlLmdldFplcm8oKTtcbiAgICAgIGNvbnN0IGFfID0gY29yZS5jbG9uZShhKTtcbiAgICAgIGNvbnN0IGJfID0gY29yZS5jbG9uZShiKTtcbiAgICAgIGxldCBkZWNpbWFsX2luZGV4ID0gYS5kZWNpbWFsX2luZGV4O1xuICAgICAgbGV0IGRlY2ltYWxfaW5kZXhfcmVtYWluID0gZGVjaW1hbF9pbmRleDtcblxuICAgICAgbGV0IGFfaW50ID0gY29yZS5jbG9uZShhXyk7XG4gICAgICBhX2ludC5kZWNpbWFsX2luZGV4ID0gYV9pbnQuYXJyYXkubGVuZ3RoO1xuICAgICAgbGV0IGFfemVyb19sZW5ndGggPSAwO1xuICAgICAgY29uc3QgYV96ZXJvX3JlcyA9IGFfLmFycmF5LmpvaW4oXCJcIikubWF0Y2goL14wKy8pO1xuICAgICAgaWYoYV96ZXJvX3JlcyAmJiBhX3plcm9fcmVzWzBdKXtcbiAgICAgICAgYV96ZXJvX2xlbmd0aCA9IGFfemVyb19yZXNbMF0ubGVuZ3RoO1xuICAgICAgICBhX2ludCA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGFfaW50LmFycmF5LnNsaWNlKGFfemVyb19sZW5ndGgsIGFfaW50LmFycmF5Lmxlbmd0aCkuam9pbihcIlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBiX2ludCA9IGNvcmUuY2xvbmUoYl8pO1xuICAgICAgYl9pbnQuZGVjaW1hbF9pbmRleCA9IGJfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCBiX3plcm9fbGVuZ3RoID0gMDtcbiAgICAgIGNvbnN0IGJfemVyb19yZXMgPSBiX2ludC5hcnJheS5qb2luKFwiXCIpLm1hdGNoKC9eMCsvKTtcbiAgICAgIGlmKGJfemVyb19yZXMgJiYgYl96ZXJvX3Jlc1swXSl7XG4gICAgICAgIGJfemVyb19sZW5ndGggPSBiX3plcm9fcmVzWzBdLmxlbmd0aDtcbiAgICAgICAgYl9pbnQgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiX2ludC5hcnJheS5zbGljZShiX3plcm9fbGVuZ3RoLCBiX2ludC5hcnJheS5sZW5ndGgpLmpvaW4oXCJcIikpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB6ZXJvX2dhcCA9IGFfemVyb19sZW5ndGggLSBiX3plcm9fbGVuZ3RoO1xuICAgICAgY29uc3QgYV9hcnJheSA9IFsuLi5hX2ludC5hcnJheV07XG4gICAgICBjb25zdCBhX2RlY2ltYWxfbGVuZ3RoID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICAgIGNvbnN0IGJfZGVjaW1hbF9sZW5ndGggPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuICAgICAgY29uc3QgZGVjaW1hbF9nYXAgPSBhX2RlY2ltYWxfbGVuZ3RoIC0gYl9kZWNpbWFsX2xlbmd0aDtcblxuICAgICAgY29uc3QgdGltZXMgPSBOdW1iZXIoY29yZS5hZGQoYV9pbnQuYXJyYXkubGVuZ3RoLCBtYXgpLmFycmF5LmpvaW4oXCJcIikpO1xuXG4gICAgICBjb25zdCBhX2xlbiA9IGFfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCByZW1haW5faXNfZGVjaW1hbCA9IGZhbHNlO1xuICAgICAgbGV0IHJlbWFpbl9hcnIgPSBbMF07XG5cbiAgICAgIGxldCBkZWNpbWFsX2NvdW50ID0gMDtcbiAgICAgIGxldCByZW1haW5fYW5kX2FfbGVuX2dhcCA9IDA7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGltZXM7IGkrKyl7XG4gICAgICAgIGxldCBpc19sZXNzID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNvdW50ID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbjEgPSBjb3JlLm11bHRpcGxpY2F0aW9uKHJlbWFpbiwgXCIxMFwiKTtcbiAgICAgICAgY29uc3QgcmVtYWluMiA9IFN0cmluZyhhX2FycmF5LnNsaWNlKGksIGkgKyAxKS5sZW5ndGggPT09IDEgPyBhX2FycmF5LnNsaWNlKGksIGkgKyAxKVswXSA6IFwiMFwiKTtcbiAgICAgICAgcmVtYWluID0gY29yZS5hZGQocmVtYWluMSwgcmVtYWluMik7XG5cbiAgICAgICAgcmVtYWluX2FuZF9hX2xlbl9nYXAgPSByZW1haW4uYXJyYXkubGVuZ3RoIC0gYV9sZW47XG4gICAgICAgIGxldCBwcm9kdWN0ID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICAgIGlmKGkgPT09IGFfbGVuKXtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4ID0gaTtcbiAgICAgICAgICBpZihjb3JlLmlzWmVybyhyZW1haW4pKXtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHJlbWFpbl9pc19kZWNpbWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlY2ltYWxfY291bnQgPSBkZWNpbWFsX2NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZihpID4gYV9sZW4pe1xuICAgICAgICAgIGRlY2ltYWxfY291bnQgPSBkZWNpbWFsX2NvdW50Kys7XG4gICAgICAgICAgaWYoY29yZS5pc1plcm8ocmVtYWluKSl7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXhfY291bnQgPSBtYXg7XG4gICAgICAgIHdoaWxlKGlzX2xlc3Mpe1xuICAgICAgICAgIGNvdW50ID0gY29yZS5hZGQoY291bnQsIFwiMVwiKTtcbiAgICAgICAgICBpZihjb3JlLmlzTGFyZ2UoY291bnQsIG1heF9jb3VudCkpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHByZV9wcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICBwcm9kdWN0ID0gY29yZS5tdWx0aXBsaWNhdGlvbihiX2ludCwgY291bnQpO1xuXG4gICAgICAgICAgaWYoY29yZS5pc0VxdWFsKHJlbWFpbiwgcHJvZHVjdCkpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnQ7XG4gICAgICAgICAgICByZXN1bHRfYXJyLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbiA9IGNvcmUuc3VidHJhY3QocmVtYWluLCBwcm9kdWN0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihjb3JlLmlzTGFyZ2UocHJvZHVjdCwgcmVtYWluKSl7XG4gICAgICAgICAgICBpc19sZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3JlLnN1YnRyYWN0KGNvdW50LCBcIjFcIik7XG4gICAgICAgICAgICByZXN1bHRfYXJyLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICAgIHJlbWFpbiA9IGNvcmUuc3VidHJhY3QocmVtYWluLCBwcmVfcHJvZHVjdCk7XG5cbiAgICAgICAgICAgIGlmKHJlbWFpbl9pc19kZWNpbWFsKXtcbiAgICAgICAgICAgICAgcmVtYWluX2Fyci5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlbWFpbl9hcnIucHVzaCguLi5yZW1haW4uYXJyYXkpO1xuICAgICAgY29uc3QgbmV3X2FyciA9IHJlc3VsdF9hcnIuZmxhdE1hcChlID0+IGUuYXJyYXkpO1xuXG4gICAgICBpZih6ZXJvX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgemVyb19nYXA7IGkrKyl7XG4gICAgICAgICAgbmV3X2Fyci51bnNoaWZ0KDApO1xuICAgICAgICAgIGRlY2ltYWxfaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihkZWNpbWFsX2dhcCA8IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5hYnMoZGVjaW1hbF9nYXApOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIucHVzaCgwKTtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKGRlY2ltYWxfZ2FwID4gMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBNYXRoLmFicyhkZWNpbWFsX2dhcCk7IGkrKyl7XG4gICAgICAgICAgbmV3X2Fyci51bnNoaWZ0KDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHJlbWFpbl9hbmRfYV9sZW5fZ2FwID4gMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZW1haW5fYW5kX2FfbGVuX2dhcDsgaSsrKXtcbiAgICAgICAgICBjb25zdCB0Z3QgPSByZW1haW5fYXJyWzBdO1xuICAgICAgICAgIGlmKHRndCA9PT0gMCl7XG4gICAgICAgICAgICByZW1haW5fYXJyLnNoaWZ0KCk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkZWNpbWFsX2luZGV4X3JlbWFpbiA9IGRlY2ltYWxfaW5kZXhfcmVtYWluIC0gcmVtYWluX2FuZF9hX2xlbl9nYXA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbWFpbl9hcnIucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYocmVtYWluX2FuZF9hX2xlbl9nYXAgPCAwKXtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5hYnMocmVtYWluX2FuZF9hX2xlbl9nYXApO1xuICAgICAgICBjb25zdCBhcnIgPSBBcnJheShsZW4pLmZpbGwoMCk7XG4gICAgICAgIHJlbWFpbl9hcnIudW5zaGlmdCguLi5hcnIpO1xuICAgICAgfVxuXG4gICAgICBpZihyZW1haW5faXNfZGVjaW1hbCl7XG4gICAgICAgIHJlbWFpbl9hcnIgPSBbLi4ucmVtYWluX2Fycl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5ld19hcnJheTogbmV3X2FycixcbiAgICAgICAgZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleCxcbiAgICAgICAgcmVtYWluX2FycmF5OiByZW1haW5fYXJyLFxuICAgICAgICByZW1haW5fZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleF9yZW1haW4sXG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1heF90aW1lc19pZl9ub3RfZGl2aXNpYmxlID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIxMFwiKTtcblxuICAgIGNvbnN0IHsgbmV3X2FycmF5LCBkZWNpbWFsX2luZGV4LCByZW1haW5fYXJyYXksIHJlbWFpbl9kZWNpbWFsX2luZGV4fSA9IGNhbGMoe2E6IGFfLCBiOiBiXywgbWF4OiBtYXhfdGltZXNfaWZfbm90X2RpdmlzaWJsZX0pO1xuXG5cbiAgICBjb25zdCByZW1haW5kZXIgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLnJlbWFpbl9hcnJheV0sXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgICBkZWNpbWFsX2luZGV4OiByZW1haW5fZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBxdW90aWVudCA9IGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ubmV3X2FycmF5XSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXhcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5xdW90aWVudCxcbiAgICAgIHJlbWFpbmRlcjpyZW1haW5kZXIsXG4gICAgfVxuICB9Y2F0Y2goZXJyKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICB9XG4gIFxufTtcblxuY29yZS5kaXZpZGUgPSBmdW5jdGlvbihhLCBiKXtcbiAgcmV0dXJuIGNvcmUuZGl2aXNpb24oYSwgYik7XG59O1xuXG5jb3JlLmZsb29yID0gZnVuY3Rpb24obnVtKXtcbiAgdHJ5e1xuICAgIGNvbnN0IG4gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChudW0pO1xuICAgIGNvbnN0IGlzX2RlY2ltYWwgPSBuLmRlY2ltYWxfaW5kZXggPCBuLmFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBkZWMgPSBuLmFycmF5LnNsaWNlKG4uZGVjaW1hbF9pbmRleCwgbi5hcnJheS5sZW5ndGgpO1xuICAgIGNvbnN0IGRlY19uID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoZGVjLmpvaW4oXCJcIikpO1xuICAgIGlmKGNvcmUuaXNaZXJvKGRlY19uKSl7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgbGV0IG5fID0ge1xuICAgICAgLi4ubixcbiAgICAgIGFycmF5OiBuLmFycmF5LnNsaWNlKDAsIG4uZGVjaW1hbF9pbmRleClcbiAgICB9O1xuICAgIGlmKG4ubmVnYXRpdmUgJiYgaXNfZGVjaW1hbCl7XG4gICAgICBuXyA9IGNvcmUuc3VidHJhY3Qobl8sIFwiMVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5fO1xuICB9Y2F0Y2goZXJyKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzc2FnZSwgcGFyYW1ldGVyOiBudW19KTtcbiAgfVxufTtcblxuY29yZS5jZWlsID0gZnVuY3Rpb24obnVtKXtcbiAgdHJ5e1xuICAgIGNvbnN0IG4gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChudW0pO1xuICAgIGNvbnN0IGlzX2RlY2ltYWwgPSBuLmRlY2ltYWxfaW5kZXggPCBuLmFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBkZWMgPSBuLmFycmF5LnNsaWNlKG4uZGVjaW1hbF9pbmRleCwgbi5hcnJheS5sZW5ndGgpO1xuICAgIGNvbnN0IGRlY19uID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoZGVjLmpvaW4oXCJcIikpO1xuICAgIGlmKGNvcmUuaXNaZXJvKGRlY19uKSl7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gICAgbGV0IG5fID0ge1xuICAgICAgLi4ubixcbiAgICAgIGFycmF5OiBuLmFycmF5LnNsaWNlKDAsIG4uZGVjaW1hbF9pbmRleClcbiAgICB9O1xuICAgIGlmKCFuLm5lZ2F0aXZlICYmIGlzX2RlY2ltYWwpe1xuICAgICAgbl8gPSBjb3JlLmFkZChuXywgXCIxXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbl87XG4gIH1jYXRjaChlcnIpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbnVtfSk7XG4gIH1cblxufTtcblxuXG5jb3JlLm1vZHVsbyA9IGZ1bmN0aW9uKGEsIGIpe1xuICB0cnl7XG4gICAgaWYoIWEgfHwgIWIpe1xuICAgICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgYXJlIG5vdCBleGlzdHNcIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYV8gPSBudWxsO1xuICAgIGxldCBiXyA9IG51bGw7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYl8pKXtcbiAgICAgIGlmKGNvcmUuaXNMYXJnZShhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiSW5maW5pdHlcIjtcbiAgICAgIH1lbHNlIGlmKGNvcmUuaXNTbWFsbChhXywgXCIwXCIpKXtcbiAgICAgICAgcmV0dXJuIFwiTmVnYXRpdmUgSW5maW5pdHlcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcIk5vdCBhIE51bWJlclwiO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGFfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldFplcm8oKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhX3Bvc2kgPSBjb3JlLmNsb25lKGFfKTtcbiAgICBjb25zdCBiX3Bvc2kgPSBjb3JlLmNsb25lKGJfKTtcbiAgICBhX3Bvc2kubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBiX3Bvc2kubmVnYXRpdmUgPSBmYWxzZTtcblxuICAgIGlmKGNvcmUuaXNMYXJnZShiX3Bvc2ksIGFfcG9zaSkpe1xuICAgICAgY29uc3QgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhKTtcbiAgICAgIHJldHVybiBhXztcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldFplcm8oKSxcbiAgICAgICAgcmVtYWluZGVyOiBjb3JlLmdldFplcm8oKSxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV8ubmVnYXRpdmUpe1xuICAgICAgbmVnYXRpdmUgPSB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGJ9KXtcbiAgICAgIGNvbnN0IGRpdmlkZWQgPSBjb3JlLmRpdmlkZShhLCBiKTtcbiAgICAgIGNvbnN0IGZsb29yZWQgPSBjb3JlLmZsb29yKGRpdmlkZWQpO1xuICAgICAgY29uc3QgbXVsdGlwbGVkID0gY29yZS5tdWx0aXBsZShiLCBmbG9vcmVkKTtcbiAgICAgIGNvbnN0IHJlcyA9IGNvcmUuc3VidHJhY3QoYSwgbXVsdGlwbGVkKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlcyA9IGNhbGMoe2E6IHsuLi5hXywgbmVnYXRpdmU6IGZhbHNlfSwgYjogey4uLmJfLCBuZWdhdGl2ZTogZmFsc2V9IH0pO1xuXG4gICAgY29uc3QgcXVvdGllbnQgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICAuLi5yZXMsXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVvdGllbnQsXG4gICAgfVxuICB9Y2F0Y2goZXJyKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICB9XG4gIFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XG5cbmNvbnN0IG1hcCA9IHtcbiAgY29tbW9uTXVsdGlwbGU6IHtcbiAgICBqYTogXCLlhazlgI3mlbBcIlxuICB9LFxuICBncmVhdGVzdENvbW1vbkRpdmlzb3I6IHtcbiAgICBqYTogXCLmnIDlpKflhazntITmlbBcIlxuICB9LFxuICBjb21tb25EaXZpc29yczoge1xuICAgIGphOiBcIuWFrOe0hOaVsFwiXG4gIH0sXG4gIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODleOCo+ODnOODiuODg+ODgeaVsOWIl1wiXG4gIH0sXG4gIG1ha2VMdWNhU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg6rjg6XjgqvmlbDliJdcIlxuICB9LFxuICBtYWtlVHJpYm9uYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OI44Oq44Oc44OK44OD44OB5pWw5YiXXCJcbiAgfSxcbiAgbWFrZVRldHJhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODhuODiOODqeODiuODg+ODgeaVsOWIl1wiXG4gIH0sXG4gIG1ha2VQZW50YW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5rjg7Pjgr/jg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBtYWtlSGV4YW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5jjgq3jgrXjg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBtYWtlSGVwdGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OY44OX44K/44OK44OD44OB5pWw5YiXXCJcbiAgfSxcbiAgbWFrZU9jdGFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44Kq44Kv44K/44OK44OD44OB5pWw5YiXXCJcbiAgfSxcbiAgbWFrZU5vbmFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OO44OK44OK44OD44OB5pWw5YiXXCJcbiAgfSxcbiAgbWFrZURlY2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OH44Kr44OK44OD44OB5pWw5YiXXCJcbiAgfSxcbiAgbWFrZVVuZGVjYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjgqbjg7Pjg4fjgqvjg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBtYWtlRG9kZWNhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODieODh+OCq+ODiuODg+ODgeaVsOWIl1wiXG4gIH0sXG4gIG1ha2VJY29zYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjgqTjgrPjgrXjg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBzdW1tYXRpb246IHtcbiAgICBqYTogXCLnt4/lkoxcIlxuICB9LFxuICBpbmZpbml0ZVByb2R1Y3Q6IHtcbiAgICBqYTogXCLnt4/kuZcv57eP56mNXCJcbiAgfSxcbiAgZGlnaXRTdW06IHtcbiAgICBqYTogXCLmlbDlrZflkowv5ZCE5qGB44Gu57eP5ZKMXCJcbiAgfSxcbiAgbWFrZVRyaWFuZ2xlTnVtYmVyOiB7XG4gICAgamE6IFwi5LiJ6KeS5pWwXCJcbiAgfSxcbiAgbWFrZVByb25pY051bWJlcjoge1xuICAgIGphOiBcIuefqeW9ouaVsFwiXG4gIH0sXG4gIGZhY3RvcmlhbDoge1xuICAgIGphOiBcIumajuS5l1wiXG4gIH0sXG4gIG1vZHVsbzoge1xuICAgIGphOiBcIuWJsOS9mea8lOeul1wiXG4gIH1cbn07XG5cbmNvbnN0IHdoYXRJcyA9IGZ1bmN0aW9uKHtuYW1lPVwiXCIsIGxhbmc9XCJqYVwifSl7XG4gIGlmKCFuYW1lKXtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGxldCB0YXJnZXQgPSB1dGlsc1tuYW1lXTtcbiAgaWYoIXRhcmdldCl7XG4gICAgdGFyZ2V0ID0gY29yZVtuYW1lXTtcbiAgfVxuXG4gIGNvbnN0IGV4aXN0cyA9IHRhcmdldCA/IHRydWUgOiBmYWxzZTtcbiAgaWYoIWV4aXN0cyl7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBjb25zdCByZXMgPSBtYXBbbmFtZV07XG4gIGlmKHJlcyAmJiByZXNbbGFuZ10pe1xuICAgIHJldHVybiByZXNbbGFuZ107XG4gIH1cbiAgY29uc3Qgb3RoZXJfbGFuZyA9IE9iamVjdC5rZXlzKHJlcylbMF07XG4gIGlmKG90aGVyX2xhbmcpe1xuICAgIHJldHVybiByZXNbb3RoZXJfbGFuZ107XG4gIH1cblxuICByZXR1cm4gXCJcIjtcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aGF0SXM7IiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBNQVggPSBjb25zdGFudHMuTUFYO1xuY29uc3QgTUlOID0gY29uc3RhbnRzLk1JTjtcbmNvbnN0IERCWiA9IGNvbnN0YW50cy5EQlo7XG5jb25zdCBOQU4gPSBjb25zdGFudHMuTkFOO1xuY29uc3QgTk9UU1UgPSBjb25zdGFudHMuTk9UU1U7XG5cblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZihpc05hTihuKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FycjtcbiAgbGV0IGRlY2ltYWxfYXJyO1xuXG5cbiAgdHJ5e1xuICAgIGludF9hcnIgPSBjb3JlLm51bVRvQXJyYXkoaW50X3N0cik7XG4gICAgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG4gIH1jYXRjaChlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgbGV0IHJlcztcbiAgdHJ5e1xuICAgIHJlcyA9IG5ldyBTdShudW0sIG9wdGlvbik7XG4gIH1jYXRjaChlKXtcbiAgICByZXMgPSBlLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmUgPyBgLSR7c3RyfWAgOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgY29uc3QgX2EgPSBtYWtlU3UoYS5nZXRTdHJpbmcoKSk7XG4gIGNvbnN0IF9iID0gbWFrZVN1KGIuZ2V0U3RyaW5nKCkpO1xuXG4gIGlmKGFic29sdXRlKXtcbiAgICBfYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIF9iLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihfYS5pc1plcm8oKSAmJiBfYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgIV9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKF9hLmludGVnZXIubGVuZ3RoID4gX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EuaW50ZWdlci5sZW5ndGggPCBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IF9hLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IF9hLmludGVnZXJbaV07XG4gICAgbGV0IGVsbV9iID0gX2IuaW50ZWdlcltpXTtcbiAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gX2EuZGVjaW1hbC5sZW5ndGggPj0gX2IuZGVjaW1hbC5sZW5ndGggPyBfYS5kZWNpbWFsLmxlbmd0aCA6IF9iLmRlY2ltYWwubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgZWxtX2EgPSBfYS5kZWNpbWFsW2ldID8gX2EuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBfYi5kZWNpbWFsW2ldID8gX2IuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZihuZWdhdGl2ZSl7XG4gICAgZmllbGQgPSBbZmllbGRbMV0sIGZpZWxkWzBdXTtcbiAgfVxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkWzBdO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgaV9hID0gYS5pbnRlZ2VyO1xuICBjb25zdCBpX2IgPSBiLmludGVnZXI7XG4gIGNvbnN0IGRfYSA9IGEuZGVjaW1hbDtcbiAgY29uc3QgZF9iID0gYi5kZWNpbWFsO1xuXG4gIGNvbnN0IGxhcmdlID0gZ2V0TGFyZ2UoYSwgYik7XG5cbiAgaWYoIWxhcmdlKXtcbiAgICBpZihpX2EubGVuZ3RoID09PSBpX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpX2FbaV0gIT09IGlfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2UgaWYoZF9hLmxlbmd0aCA9PT0gZF9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZF9hW2ldICE9PSBkX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGEubmVnYXRpdmUgPT09IGIubmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuU3UucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaW50ZWdlci5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnRlZ2VyWzBdID09PSAwICYmICF0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09uZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjFcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTGFyZ2UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYS5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYi5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNQb3NpdGl2ZSgpICYmIHRoaXMuaXNJbnRlZ2VyKCkgJiYgdGhpcy5pc0xhcmdlKENPTlNUQU5UUy5aRVJPKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGRwX2EgPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBkcF9iID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCByZXNfYXJyID0gW107XG4gIGZvcihsZXQgaV9hID0gMDsgaV9hIDwgYV9pZC5sZW5ndGg7IGlfYSsrKXtcbiAgICBmb3IobGV0IGlfYiA9IDA7IGlfYiA8IGJfaWQubGVuZ3RoOyBpX2IrKyl7XG4gICAgICBjb25zdCBlbG1fYSA9IGFfaWRbaV9hXTtcbiAgICAgIGNvbnN0IGVsbV9iID0gYl9pZFtpX2JdO1xuICAgICAgY29uc3QgcG9zX2EgPSBkcF9hIC0gaV9hIC0xO1xuICAgICAgY29uc3QgcG9zX2IgPSBkcF9iIC0gaV9iIC0xO1xuICAgICAgY29uc3QgcG9zID0gcG9zX2EgKyBwb3NfYjtcbiAgICAgIGxldCByZXMgPSBlbG1fYSAqIGVsbV9iO1xuICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHBvcyk7XG4gICAgICBsZXQgc3RyO1xuICAgICAgaWYocG9zID49IDApe1xuICAgICAgICBsZW4rKztcbiAgICAgICAgaWYocmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiArIDEsIFwiMFwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobGVuID09PSAxICYmIHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpWzBdICsgXCIuXCIgKyBTdHJpbmcocmVzKVsxXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gXCIwLlwiICsgU3RyaW5nKHJlcykucGFkU3RhcnQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc19hcnIucHVzaChtYWtlU3Uoc3RyKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcyA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc19hcnIubGVuZ3RoOyBpKyspe1xuICAgIHJlcyA9IHJlcy5hZGQocmVzX2FycltpXSk7XG4gIH1cblxuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY291bnQgPSBtYWtlU3UoXCIxXCIpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpIHx8IGNvdW50LmlzRXF1YWwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oY291bnQpKTtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoXCIxXCIpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGEsIGIpe1xuXG4gIGlmKCFpc1N1KGEpIHx8ICFpc1N1KGIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFthLCBiXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5cbmNvbnN0IG1ha2VMdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZShtYWtlU3UoMiksIG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG5cbiAgY29uc3QgZmlicyA9IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSh6ZXJvLCBvbmUpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IG1ha2VMdWNhc1NlcXVlbmNlKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsdWNzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGx1Y3NbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmNvbnN0IG1ha2VTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0LCBvdGhlcnMpe1xuICBjb25zdCBhcnJheSA9IFtmaXJzdF07XG4gIGlmKCFvdGhlcnMpe1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgb3RoZXJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gb3RoZXJzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblN1LnByb3RvdHlwZS5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBhID0gbWFrZVN1KHRoaXMuaW50ZWdlcltpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBtYWtlUG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFpc1N1KG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IGluY3JlbWVudCA9IG4uc3VidHJhY3QobWFrZVN1KDIpKTtcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZVRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMyksIG1heCk7XG59O1xuXG5jb25zdCBtYWtlU3F1YXJlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCksIG1heCk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVRyaWFuZ2xlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTcXVhcmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VTcXVhcmVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCBtYXJyID0gbWFrZU1lcnNlbm5lTnVtYmVycyhtYXgpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIFN1OiBTdVxufTsiLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IHV0aWxzID0ge307XG5cblxudXRpbHMuZ2V0TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbn07XG5cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYyA9IGNvcmUuY2xvbmUobik7XG4gIGlmKCFjKXtcbiAgICBjb25zdCBzID0gY29yZS5udW1BcnJheVRvU3RyaW5nKG4pO1xuICAgIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChzKTtcbiAgfVxuICByZXR1cm4gYztcbn07XG5cbnV0aWxzLmdldExhcmdlID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLmdldExhcmdlKGEsIGIpO1xufTtcblxudXRpbHMuZ2V0U21hbGwgPSBmdW5jdGlvbihhLCBiKXtcbiAgcmV0dXJuIGNvcmUuZ2V0U21hbGwoYSwgYik7XG59O1xuXG51dGlscy5pc0VxdWFsID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoYSwgYik7XG59XG5cbnV0aWxzLmdldFplcm8gPSBmdW5jdGlvbigpe1xuICByZXR1cm4gY29yZS5nZXRaZXJvKCk7XG59O1xuXG51dGlscy5nZXRPbmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbn07XG5cbnV0aWxzLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gY29yZS5pc1plcm8obik7XG59XG51dGlscy5pc09uZSA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gY29yZS5pc09uZShuKTtcbn1cblxudXRpbHMuc3F1YXJlID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBjb3JlLm11bHRpcGxpY2F0aW9uKG4sIG4pO1xufTtcblxudXRpbHMuZ2V0SW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBsZXQgc3RyID0gXCJcIjtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG4uZGVjaW1hbF9pbmRleDsgaSsrKXtcbiAgICBjb25zdCBzID0gU3RyaW5nKG4uYXJyYXlbaV0pO1xuICAgIHN0ciA9IHN0ciArIHM7XG4gIH1cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKHN0cik7XG4gIHJldHVybiBudW07XG59O1xuXG51dGlscy5nZXREZWNpbWFsID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBjb3JlLmdldERlY2ltYWwobik7XG59O1xuXG51dGlscy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwobik7XG4gIGNvbnN0IGlzX3plcm8gPSB1dGlscy5pc1plcm8oZGVjaW1hbCk7XG4gIGlmKGlzX3plcm8gJiYgIW4ubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnV0aWxzLmluY2x1ZGVEZWNpbWFsID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKGRlY2ltYWwpO1xuICBpZihpc196ZXJvKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG51dGlscy5pc05lZ2F0aXZlID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG5fID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIHJldHVybiBuXy5uZWdhdGl2ZTtcbn07XG5cbnV0aWxzLmlzUG9zaXRpdmUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgbl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgcmV0dXJuICFuXy5uZWdhdGl2ZTtcbn07XG5cbnV0aWxzLm5lZ2F0ZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgaWYobnVtKXtcbiAgICBudW0ubmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBudW07XG59O1xuXG51dGlscy5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIGlmKG51bSl7XG4gICAgbnVtLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn07XG5cbnV0aWxzLmdldE5lZ2F0aXZlTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIHJldHVybiB1dGlscy5uZWdhdGUobik7XG59O1xuXG51dGlscy5nZXRQb3NpdGl2ZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgaWYobnVtKXtcbiAgICBudW0ubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gbnVtO1xufTtcblxudXRpbHMuZ2V0TmV4dCA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gY29yZS5hZGQobiwgXCIxXCIpO1xufTtcblxudXRpbHMuZ2V0UHJldiA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gY29yZS5zdWJ0cmFjdChuLCBcIjFcIik7XG59O1xuXG51dGlscy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKG4pO1xuICBpZih1dGlscy5pc0VxdWFsKGRlY2ltYWwsIFwiMFwiKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xuXG59O1xuXG5cbnV0aWxzLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYoIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcmVzID0gY29yZS5kaXZpc2lvbihuLCBcIjJcIik7XG5cbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwocmVzKTtcbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhkZWNpbWFsKTtcbiAgaWYoaXNfemVybyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaXNPZGROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodXRpbHMuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZXMgPSBjb3JlLmRpdmlzaW9uKG4sIFwiMlwiKTtcblxuICBjb25zdCBkZWNpbWFsID0gdXRpbHMuZ2V0RGVjaW1hbChyZXMpO1xuICBjb25zdCBib29sID0gY29yZS5pc0VxdWFsKFwiMC41XCIsIGRlY2ltYWwpO1xuICBpZihib29sKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbnV0aWxzLmdldERpdmlzb3JzID0gZnVuY3Rpb24obil7XG4gIGlmKCFuICYmIG4gIT09IDApe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBpbnRlZ2VyXCIsIHBhcmFtZXRlcjogW25dfSk7XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcblxuICBpZighbnVtKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKG51bSkpe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYodXRpbHMuaXNOYXR1cmFsTnVtYmVyKG51bSkpe1xuICAgIGlmKGNvcmUuaXNPbmUobnVtKSl7XG4gICAgICBhcnIucHVzaChudW0pXG4gICAgfWVsc2V7XG4gICAgICBmb3IobGV0IGkgPSBjb3JlLmdldE9uZSgpOyBjb3JlLmlzRXF1YWwobnVtLCBpKSB8fCBjb3JlLmlzTGFyZ2UobnVtLCBpKTsgaSA9IGNvcmUuYWRkKGksIFwiMVwiKSl7XG4gICAgICAgIGNvbnN0IHJlcz0gY29yZS5kaXZpc2lvbihudW0sIGkpO1xuICAgICAgICBpZighdXRpbHMuaXNOYXR1cmFsTnVtYmVyKHJlcykpe1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbWFpbmRlciA9IHJlcy5yZW1haW5kZXI7XG4gICAgICAgIGlmKGNvcmUuaXNaZXJvKHJlbWFpbmRlcikpe1xuICAgICAgICAgIGFyci5wdXNoKHV0aWxzLmdldE51bWJlcihpKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbnV0aWxzLmNvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oYSwgYil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBpZighYSAmJiBhICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKCFiICYmIGIgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICB0cnl7XG4gICAgY29uc3QgYV8gPSB1dGlscy5nZXROdW1iZXIoYSk7XG4gICAgY29uc3QgYl8gPSB1dGlscy5nZXROdW1iZXIoYik7XG4gICAgXG4gICAgY29uc3QgYV9kaXZpc29ycyA9IHV0aWxzLmdldERpdmlzb3JzKGFfKTtcbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4gYV9kaXZpc29ycztcbiAgICB9XG4gICAgY29uc3QgYl9kaXZpc29ycyA9IHV0aWxzLmdldERpdmlzb3JzKGJfKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYV9kaXZpc29ycy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBhX24gPSBhX2Rpdmlzb3JzW2ldO1xuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGJfZGl2aXNvcnMubGVuZ3RoOyBqKyspe1xuICAgICAgICBjb25zdCBiX24gPSBiX2Rpdmlzb3JzW2pdO1xuICAgICAgICBpZihjb3JlLmlzRXF1YWwoYV9uLCBiX24pKXtcbiAgICAgICAgICBhcnIucHVzaChhX24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1jYXRjaChlKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGUubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgfVxufTtcblxudXRpbHMuZ3JlYXRlc3RDb21tb25EaXZpc29yID0gZnVuY3Rpb24oYSwgYil7XG4gIHRyeXtcbiAgICBjb25zdCBhcnIgPSB1dGlscy5jb21tb25EaXZpc29ycyhhLCBiKTtcbiAgICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgfWNhdGNoKGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZS5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICB9XG59O1xuXG51dGlscy5jb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIsIGxpbWl0KXtcblxuICBjb25zdCBsaW1pdF9sZW5ndGggPSBsaW1pdCA/IGxpbWl0IDogMTA7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBpZighYSAmJiBhICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKCFiICYmIGIgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICB0cnl7XG4gICAgY29uc3QgYV8gPSB1dGlscy5nZXROdW1iZXIoYSk7XG4gICAgY29uc3QgYl8gPSB1dGlscy5nZXROdW1iZXIoYik7XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICBhcnIucHVzaChhXyk7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyID0gW107XG4gICAgY29uc3QgYl9hcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGxpbWl0X2xlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGFfbnVtID0gY29yZS5tdWx0aXBsZShhXywgaSk7XG4gICAgICBhX2Fyci5wdXNoKGFfbnVtKTtcbiAgICB9XG4gICAgZm9yKGxldCBqID0gMTsgaiA8PSBsaW1pdF9sZW5ndGg7IGorKyl7XG4gICAgICBjb25zdCBiX251bSA9IGNvcmUubXVsdGlwbGUoYl8sIGopO1xuICAgICAgYl9hcnIucHVzaChiX251bSk7XG4gICAgfVxuXG4gICAgYV9hcnIuZm9yRWFjaChhX24gPT4ge1xuICAgICAgY29uc3QgdGd0ID0gYl9hcnIuZmluZChiX24gPT4gY29yZS5pc0VxdWFsKGFfbiwgYl9uKSk7XG4gICAgICBpZih0Z3Qpe1xuICAgICAgICBhcnIucHVzaCh0Z3QpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfWNhdGNoKGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZS5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiLCBsaW1pdF19KTtcbiAgfVxufTtcblxudXRpbHMubGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIsIGxpbWl0KXtcbiAgY29uc3QgYXJyID0gdXRpbHMuY29tbW9uTXVsdGlwbGUoYSwgYiwgbGltaXQpO1xuICByZXR1cm4gYXJyWzBdO1xufTtcblxuXG5jb25zdCBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24gPSBmdW5jdGlvbih7YXJyYXksIGxpbWl0fSl7XG5cbiAgY29uc3QgbWF4ID0gbGltaXQgPyBsaW1pdCA6IDEwMDtcblxuICBjb25zdCBpdGVtc19sZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgICBpZihhcnJheS5sZW5ndGggPj0gbWF4KXtcbiAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgdHJ5e1xuICAgICAgbGV0IHJlcyA9IHV0aWxzLmdldE51bWJlcihcIjBcIik7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaXRlbXNfbGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5Lmxlbmd0aCAtIChpdGVtc19sZW5ndGggLSBpKTtcbiAgICAgICAgY29uc3QgbnVtID0gYXJyYXlbaW5kZXhdO1xuICAgICAgICByZXMgPSBjb3JlLmFkZChyZXMsIG51bSk7XG4gICAgICB9XG4gICAgICBhcnJheS5wdXNoKHJlcyk7XG4gICAgICByZXR1cm4gZnVuYyhhcnJheSk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FycmF5LCBsaW1pdF19KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBmdW5jKGFycmF5KTtcbn07XG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkgPSBmdW5jdGlvbih7IGZpcnN0PVwiMFwiLCBsYXN0PVwiMVwiLCBsZW5ndGg9MiB9KXtcbiAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICBjb25zdCBhID0gdXRpbHMuZ2V0TnVtYmVyKGZpcnN0KTtcbiAgY29uc3QgYiA9IHV0aWxzLmdldE51bWJlcihsYXN0KTtcbiAgY29uc3QgYXJyID0gW107XG4gIHRyeXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IHRndCA9IGE7XG4gICAgICBpZihpID09PSAobGVuIC0xKSl7XG4gICAgICAgIHRndCA9IGI7XG4gICAgICB9XG4gICAgICBhcnIucHVzaCh0Z3QpO1xuICAgIH1cbiAgfWNhdGNoKGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZS5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtmaXJzdCwgbGFzdCwgbGVuZ3RoXX0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5tYWtlRmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihmaXJzdD1cIjBcIiwgbGFzdD1cIjFcIil7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0LCBsYXN0LCBsZW5ndGg6IDJ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZVRyaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogM30pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlVGV0cmFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA0fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VQZW50YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDV9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUhleGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA2fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VIZXB0YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDd9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZU9jdGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA4fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VOb25hbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogOX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlRGVjYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDEwfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VVbmRlY2FuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAxMX0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlRG9kZWNhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMTJ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUljb3NhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMjB9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUx1Y2FTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjJcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5zdW1tYXRpb24gPSBmdW5jdGlvbihhcnJheSl7XG4gIGlmKCFhcnJheSB8fCAhQXJyYXkuaXNBcnJheShhcnJheSkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBBcnJheS5cIiwgcGFyYW1ldGVyOiBbYXJyYXldfSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiYXJyYXkgbGVuZ3RoIGlzIHplcm9cIiwgcGFyYW1ldGVyOiBbYXJyYXldfSk7XG4gIH1cbiAgbGV0IHN1bSA9IGNvcmUuZ2V0WmVybygpO1xuICBpZihBcnJheS5pc0FycmF5KGFycmF5KSl7XG4gICAgdHJ5e1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc3VtID0gY29yZS5hZGQoc3VtLCBhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlLm1lc3NhZ2UsIHBhcmFtZXRlcjogYXJyYXl9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cbnV0aWxzLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgaWYoIWFycmF5IHx8ICFBcnJheS5pc0FycmF5KGFycmF5KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIEFycmF5LlwiLCBwYXJhbWV0ZXI6IFthcnJheV19KTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB1dGlscy5nZXROdW1iZXIoYXJyYXlbMF0pO1xuICB9XG4gIGxldCByZXMgPSBhcnJheVswXTtcbiAgdHJ5e1xuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICByZXMgPSBjb3JlLm11bHRpcGxlKHJlcywgYXJyYXlbaV0pO1xuICAgIH1cbiAgfWNhdGNoKGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZS5tZXNzYWdlLCBwYXJhbWV0ZXI6IGFycmF5fSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbnV0aWxzLmRpZ2l0U3VtID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuICBpZighbiB8fCAhQXJyYXkuaXNBcnJheShuLmFycmF5KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIiwgcGFyYW1ldGVyOiBbbnVtXX0pO1xuICB9XG4gIGxldCByZXMgPSBjb3JlLmdldFplcm8oKTtcbiAgaWYoY29yZS5pc1plcm8obikpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgdHJ5e1xuICAgIG4uYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHJlcyA9IGNvcmUuYWRkKHJlcywgaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGUpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZS5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbn07XG5cbnV0aWxzLm1ha2VUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IG4gPSB1dGlscy5nZXROdW1iZXIobnVtKTtcbiAgaWYoY29yZS5pc1plcm8obikgfHwgdXRpbHMuaXNOZWdhdGl2ZShuKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbiAgXG4gIGNvbnN0IHJlczEgPSBjb3JlLm11bHRpcGxlKG4sIGNvcmUuYWRkKG4sIFwiMVwiKSk7XG4gIGNvbnN0IHJlczIgPSBjb3JlLmRpdmlkZShyZXMxLCBcIjJcIik7XG4gIHJldHVybiByZXMyO1xufTtcblxudXRpbHMubWFrZVByb25pY051bWJlciA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IG4gPSB1dGlscy5nZXROdW1iZXIobnVtKTtcbiAgaWYoY29yZS5pc1plcm8obikpe1xuICAgIHJldHVybiBjb3JlLmdldFplcm8oKTtcbiAgfVxuICBpZih1dGlscy5pc05lZ2F0aXZlKG4pIHx8ICF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuICB0cnl7XG4gICAgY29uc3QgIHJlcyA9IGNvcmUubXVsdGlwbGUobiwgY29yZS5hZGQobiwgXCIxXCIpKTtcbiAgICByZXR1cm4gcmVzO1xuICB9Y2F0Y2goZSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlLm1lc3NhZ2UsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxufTtcblxudXRpbHMuZmFjdG9yaWFsID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuICBpZihjb3JlLmlzWmVybyhuKSB8fCBjb3JlLmlzT25lKG4pKXtcbiAgICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzTmVnYXRpdmUobikgfHwgIXV0aWxzLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIiwgcGFyYW1ldGVyOiBbbnVtXX0pO1xuICB9XG5cbiAgbGV0IGdvID0gdHJ1ZTtcbiAgbGV0IHRlbXAgPSBuO1xuICBsZXQgY3VycmVudCA9IG47XG4gIGNvbnN0IGFyciA9IFt0ZW1wXTtcbiAgdHJ5e1xuICAgIHdoaWxlKGdvKXtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGNvcmUuc3VidHJhY3QoY3VycmVudCwgXCIxXCIpO1xuICAgICAgYXJyLnB1c2godGFyZ2V0KTtcbiAgICAgIGN1cnJlbnQgPSB0YXJnZXQ7XG4gICAgICBpZihjb3JlLmlzU21hbGwoY3VycmVudCwgXCIyXCIpKXtcbiAgICAgICAgZ28gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLmluZmluaXRlUHJvZHVjdChhcnIpO1xuICB9Y2F0Y2goZSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlLm1lc3NhZ2UsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHV0aWxzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHMgZnJvbSBcIi4vc3UuanNcIjtcbmltcG9ydCBTSyBmcm9tIFwiLi9TSy5qc1wiO1xuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgZG9jIGZyb20gXCIuL2RvY1wiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHM6IHMsXG4gIFM6IFNLLlMsXG4gIEs6IFNLLkssXG4gIGNvcmU6IGNvcmUsXG4gIHV0aWxzOiB1dGlscyxcbiAgZG9jOiBkb2MsXG4gIGNvbnN0YW50czogY29uc3RhbnRzLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=