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

/***/ "./corets.ts":
/*!*******************!*\
  !*** ./corets.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var core = {};
core.makeError = function (o) {
    var error = new Error();
    try {
        var v = o.variable ? o.variable.toString() : "";
        var p = o.parameter ? o.parameter.toString() : "";
        var str = o.message;
        if (v) {
            str = "".concat(str, ", ").concat(v ? v : "");
        }
        if (p) {
            str = "".concat(str, ", ").concat(p ? p : "");
        }
        error = new Error(str);
    }
    catch (e) {
        if (e instanceof Error) {
            error = e;
        }
    }
    finally {
        return error;
    }
};
var isNumber = function (n) {
    if (typeof n === "number") {
        if (Number.isNaN(n)) {
            return false;
        }
        else {
            return true;
        }
    }
    return false;
};
core.moldNumArray = function (_a) {
    var array = _a.array, negative = _a.negative, decimal_index = _a.decimal_index;
    if (!array) {
        return core.makeError({ message: "Array is not exists", patameter: array });
    }
    if (typeof decimal_index !== "number" || isNaN(decimal_index)) {
        return core.makeError({ message: "decimal_index is not a number", patameter: decimal_index });
    }
    try {
        while (decimal_index < array.length && array[array.length - 1] === 0) {
            array.pop();
        }
        while (decimal_index > 1 && array[0] === 0) {
            array.shift();
            decimal_index--;
        }
        if (array.length === 0) {
            array.push(0);
            decimal_index = 1;
        }
        var o = {
            array: array,
            negative: !!negative,
            is_num_array: true,
            decimal_index: decimal_index
        };
        if (decimal_index === 0 || decimal_index > 0) {
            o.decimal_index = decimal_index;
        }
        else {
            o.decimal_index = array.length;
        }
        return o;
    }
    catch (e) {
        if (e instanceof Error) {
            return core.makeError({ message: e.message, parameter: array });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: array });
        }
    }
};
core.numToArrayWithDecimal = function (n) {
    if (!n && n !== 0) {
        return core.makeError({ message: "Parameter is undefined, null, or empty.", parameter: n });
    }
    if (n.is_num_array) {
        return core.clone(n);
    }
    if (typeof n === "object") {
        return core.makeError({ message: "Parameter is object.", parameter: n });
    }
    var str = String(n);
    var negative = false;
    while (str && str[0].match(/^-/)) {
        str = str.replace(/^-/, "");
        negative = !negative;
    }
    var dec_index;
    var res = str.match(/\./g);
    if (res && res.length > 1) {
        return core.makeError({ message: "2 or more decimal points", parameter: n });
    }
    if (res && res.length === 1) {
        var res1 = str.match(/\./);
        var first_index = res1 === null || res1 === void 0 ? void 0 : res1.index;
        dec_index = first_index;
        str = str.replace(/\./, "");
    }
    else {
        dec_index = str.length;
    }
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        var num = Number(str[i]);
        if (!isNumber(num)) {
            return core.makeError({ message: "This method has been called with incorrect parameters", parameter: num });
        }
        arr.push(num);
    }
    return core.moldNumArray({ array: arr, negative: negative, decimal_index: dec_index });
};
core.numArrayToString = function (n) {
    if (!n.is_num_array || !n.array || !n.decimal_index) {
        return "";
    }
    try {
        var arr = __spreadArray([], n.array, true);
        arr.splice(n.decimal_index, 0, ".");
        var str = arr.join("");
        if (n.negative) {
            str = "-".concat(str);
        }
        return str.replace(/\.$/, "");
    }
    catch (err) {
        if (err instanceof Error) {
            return core.makeError({ message: err.message, parameter: n });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: n });
        }
    }
};
core.compare = function (a, b) {
    try {
        if (!a || !b) {
            return core.makeError({ message: "Parameters are undefined, null, or empty.", parameter: [a, b] });
        }
        var o = {
            small: null,
            large: null,
            equal: false
        };
        var a_ = a;
        var b_ = b;
        if (!a_.is_num_array) {
            a_ = core.numToArrayWithDecimal(a_);
            if (!a_) {
                return o;
            }
        }
        if (!b_.is_num_array) {
            b_ = core.numToArrayWithDecimal(b_);
            if (!b_) {
                return o;
            }
        }
        var a_array = a_.array;
        var b_array = b_.array;
        var a_len = a_array.length;
        var b_len = b_array.length;
        var a_str = a_array.join("");
        var b_str = b_array.join("");
        var a_int_len = a_.decimal_index;
        var b_int_len = b_.decimal_index;
        var a_dec_len = a_len - a_int_len;
        var b_dec_len = b_len - b_int_len;
        if (a_len === 1 && a_str === "0" && b_len === 1 && b_str === "0") {
            o.equal = true;
            return o;
        }
        if (!a_.negative && b_.negative) {
            o.small = b_;
            o.large = a_;
            return o;
        }
        if (a_.negative && !b_.negative) {
            o.small = a_;
            o.large = b_;
            return o;
        }
        var negative = a_.negative;
        var o_a_b = {
            large: negative ? b_ : a_,
            small: negative ? a_ : b_,
            equal: false,
        };
        var o_b_a = {
            large: negative ? a_ : b_,
            small: negative ? b_ : a_,
            equal: false
        };
        if (a_int_len > b_int_len) {
            return o_a_b;
        }
        if (a_int_len < b_int_len) {
            return o_b_a;
        }
        for (var i = 0; i < a_int_len; i++) {
            if (a_array[i] > b_array[i]) {
                return o_a_b;
            }
            if (a_array[i] < b_array[i]) {
                return o_b_a;
            }
        }
        var dec_len = a_dec_len > b_dec_len ? a_dec_len : b_dec_len;
        for (var i = 0; i < dec_len; i++) {
            var aa = a_array[a_int_len + i] ? a_array[a_int_len + i] : 0;
            var bb = b_array[b_int_len + i] ? b_array[b_int_len + i] : 0;
            if (aa > bb) {
                return o_a_b;
            }
            if (aa < bb) {
                return o_b_a;
            }
        }
        o.equal = true;
        return o;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.getLarge = function (a, b) {
    return core.compare(a, b).large;
};
core.getSmall = function (a, b) {
    return core.compare(a, b).small;
};
core.isEqual = function (a, b) {
    var res = core.compare(a, b);
    if (res.equal) {
        return true;
    }
    return false;
};
core.isSmall = function (a, b) {
    return core.isEqual(core.getSmall(a, b), a);
};
core.isLarge = function (a, b) {
    return core.isEqual(core.getLarge(a, b), a);
};
core.isZero = function (n) {
    if (!n) {
        return false;
    }
    if (!n.is_num_array) {
        return false;
    }
    var zero = core.getZero();
    return core.isEqual(zero, n);
};
core.isOne = function (n) {
    if (!n) {
        return false;
    }
    if (!n.is_num_array) {
        return false;
    }
    var one = core.getOne();
    if (core.isEqual(one, n)) {
        return true;
    }
    else {
        return false;
    }
};
core.getZero = function () {
    return core.numToArrayWithDecimal("0");
};
core.getOne = function () {
    return core.numToArrayWithDecimal("1");
};
core.fixCarry = function (arr, minus) {
    try {
        var minus_ = minus;
        for (var i = arr.length - 1; i >= 0; i--) {
            var elm = arr[i];
            if (elm < 0) {
                minus_ = true;
                break;
            }
            else if (elm === 0) {
                continue;
            }
            else {
                break;
            }
        }
        if (minus_) {
            var cache_1 = [];
            arr.forEach(function (elm) {
                cache_1.push(-elm);
            });
            arr = cache_1;
        }
        var new_arr = [];
        var carry = 0;
        for (var i = 0; i < arr.length; i++) {
            var val = Number(arr[i] + carry);
            if (val > 9) {
                var arr1 = String(val).split("");
                val = Number(arr1[arr1.length - 1]);
                var arr2 = arr1.slice(0, arr1.length - 1);
                carry = Number(arr2.join(""));
            }
            else if (val >= 0 && val <= 9) {
                carry = 0;
            }
            else {
                val = 10 + val;
                carry = -1;
            }
            new_arr.push(val);
        }
        if (carry !== 0) {
            new_arr.push(carry);
        }
        return {
            new_array: new_arr,
            minus: minus_
        };
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [arr, minus] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [arr, minus] });
        }
    }
};
core.clone = function (n) {
    try {
        if (!n) {
            return core.makeError({ message: "Parameter is not exists", parameter: n });
        }
        if (!n.is_num_array) {
            return core.makeError({ message: "Parameter is not compatible", parameter: n });
        }
        var o = __assign(__assign({}, n), { array: __spreadArray([], n.array, true) });
        return o;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [n] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [n] });
        }
    }
};
core.add_and_subtract = function (a, b, mode) {
    if (!a || !b) {
        if (a !== 0 && b !== 0) {
            return core.makeError({ message: "Parameters are must be a Number or a String.", parameter: [a, b] });
        }
    }
    var plus;
    if (!mode) {
        return core.makeError({ message: "Parameters mode is required", parameter: [a, b, mode] });
        ;
    }
    else if (mode === "+") {
        plus = true;
    }
    else if (mode === "-") {
        plus = false;
    }
    else {
        return core.makeError({ message: "mode must be '+' or '-'.", parameter: mode });
    }
    try {
        var a_ = core.getZero();
        var b_ = core.getZero();
        if (a.is_num_array) {
            a_ = core.clone(a);
        }
        else {
            a_ = core.numToArrayWithDecimal(a ? a : 0);
        }
        if (b.is_num_array) {
            b_ = core.clone(b);
        }
        else {
            b_ = core.numToArrayWithDecimal(b ? b : 0);
        }
        var a_arr = a_.array;
        var b_arr = b_.array;
        var a_is_zero = core.isZero(a_);
        var b_is_zero = core.isZero(b_);
        if (a_is_zero && b_is_zero) {
            return a_;
        }
        else if (a_is_zero) {
            if (!plus) {
                b_.negative = !b_.negative;
            }
            return b_;
        }
        else if (b_is_zero) {
            return a_;
        }
        var a_dec_length = a_.array.length - a_.decimal_index;
        var b_dec_length = b_.array.length - b_.decimal_index;
        var dec_gap = a_dec_length - b_dec_length;
        if (dec_gap > 0) {
            b_arr.push.apply(b_arr, Array(dec_gap).fill(0));
        }
        else if (dec_gap < 0) {
            a_arr.push.apply(a_arr, Array(Math.abs(dec_gap)).fill(0));
        }
        var calc = function (_a) {
            var a = _a.a, b = _a.b, plus = _a.plus;
            var arr = [];
            var len = a.array.length;
            if (a.array.length < b.array.length) {
                len = b.array.length;
            }
            var arr_a = a.array;
            var arr_b = b.array;
            var a_one = a.negative ? -1 : 1;
            var b_one = b.negative ? -1 : 1;
            for (var i = 0; i < len; i++) {
                var aa = arr_a[i] ? arr_a[i] * a_one : 0;
                var bb = arr_b[i] ? arr_b[i] * b_one : 0;
                var res = plus ? aa + bb : aa - bb;
                arr.push(res);
            }
            return core.fixCarry(arr);
        };
        var _a = calc({
            a: {
                array: __spreadArray([], a_arr, true).reverse(),
                negative: a_.negative,
            },
            b: {
                array: __spreadArray([], b_arr, true).reverse(),
                negative: b_.negative
            },
            plus: plus
        }), new_array = _a.new_array, minus = _a.minus;
        var dec_length = a_dec_length >= b_dec_length ? a_dec_length : b_dec_length;
        var new_int_length = new_array.length - dec_length;
        var new_decimal_index = new_int_length;
        return core.moldNumArray({
            array: __spreadArray([], new_array, true).reverse(),
            negative: minus ? true : false,
            decimal_index: new_decimal_index
        });
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.add = function (a, b) {
    return core.add_and_subtract(a, b, "+");
};
core.subtract = function (a, b) {
    return core.add_and_subtract(a, b, "-");
};
core.multiplication = function (a, b) {
    if (!a || !b) {
        if (a !== 0 && b !== 0) {
            return core.makeError({ message: "Parameters are not exists", parameter: [a, b] });
        }
    }
    var a_ = core.getZero();
    var b_ = core.getZero();
    if (a.is_num_array) {
        a_ = core.clone(a);
    }
    else {
        a_ = core.numToArrayWithDecimal(a ? a : 0);
    }
    if (b.is_num_array) {
        b_ = core.clone(b);
    }
    else {
        b_ = core.numToArrayWithDecimal(b ? b : 0);
    }
    var a_arr = a_.array;
    var b_arr = b_.array;
    if (core.isZero(a_) || core.isZero(b_)) {
        return core.numToArrayWithDecimal("0");
    }
    if (core.isOne(a_)) {
        return b_;
    }
    if (core.isOne(b_)) {
        return a_;
    }
    try {
        var a_negative = a_.negative;
        var b_negative = b_.negative;
        var negative = void 0;
        if (a_negative && b_negative) {
            negative = false;
        }
        else if (a_negative || b_negative) {
            negative = true;
        }
        else {
            negative = false;
        }
        var a_dec_length = a_.array.length - a_.decimal_index;
        var b_dec_length = b_.array.length - b_.decimal_index;
        var dec_length = a_dec_length + b_dec_length;
        var calc = function (_a) {
            var a = _a.a, b = _a.b;
            var array = [];
            var arr_a = a.array;
            var arr_b = b.array;
            for (var i = 0; i < arr_a.length; i++) {
                var aa = arr_a[i] ? arr_a[i] : 0;
                var arr = new Array(i);
                arr.fill(0, 0, i);
                for (var j = 0; j < arr_b.length; j++) {
                    var bb = arr_b[j] ? arr_b[j] : 0;
                    var res = aa * bb;
                    arr.push(res);
                    var tgt_index = i + j;
                    var tgt = array[tgt_index];
                    if (!tgt) {
                        tgt = 0;
                    }
                    var new_tgt = tgt + res;
                    array[tgt_index] = new_tgt;
                }
            }
            return core.fixCarry(array);
        };
        var new_array = calc({
            a: {
                array: __spreadArray([], a_arr, true).reverse(),
                negative: a_.negative,
            },
            b: {
                array: __spreadArray([], b_arr, true).reverse(),
                negative: b_.negative
            },
        }).new_array;
        var new_decimal_index = new_array.length - dec_length;
        return core.moldNumArray({
            array: __spreadArray([], new_array, true).reverse(),
            negative: negative,
            decimal_index: new_decimal_index
        });
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.multiple = function (a, b) {
    return core.multiplication(a, b);
};
core.getDecimal = function (n) {
    try {
        var n_ = core.numToArrayWithDecimal(n);
        var str = "0.";
        var len = n_.array.length - n_.decimal_index;
        if (len > 0) {
            for (var i = n_.decimal_index; i <= len; i++) {
                var s = String(n_.array[i]);
                str = str + s;
            }
        }
        else {
            str = str + "0";
        }
        var num = core.numToArrayWithDecimal(str);
        return num;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: n });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: n });
        }
    }
};
core.division = function (a, b) {
    try {
        if (!a || !b) {
            if (a !== 0 && b !== 0) {
                return core.makeError({ message: "Parameters are not exists", parameter: [a, b] });
            }
        }
        var a_ = core.getZero();
        var b_ = core.getZero();
        if (a.is_num_array) {
            a_ = core.clone(a);
        }
        else {
            a_ = core.numToArrayWithDecimal(a ? a : 0);
        }
        if (b.is_num_array) {
            b_ = core.clone(b);
        }
        else {
            b_ = core.numToArrayWithDecimal(b ? b : 0);
        }
        if (core.isZero(b_)) {
            if (core.isLarge(a_, "0")) {
                return "Infinity";
            }
            else if (core.isSmall(a_, "0")) {
                return "Negative Infinity";
            }
            return "Not a Number";
        }
        if (core.isZero(a_)) {
            return __assign(__assign({}, core.getZero()), { remainder: core.getZero() });
        }
        if (core.isOne(b_)) {
            return __assign(__assign({}, a_), { remainder: core.getZero() });
        }
        if (core.isEqual(a_, b_)) {
            return __assign(__assign({}, core.getOne()), { remainder: core.getZero() });
        }
        var a_negative = a_.negative;
        var b_negative = b_.negative;
        if (a_.negative) {
            a_.negative = false;
        }
        if (b_.negative) {
            b_.negative = false;
        }
        var negative = void 0;
        if (a_negative && b_negative) {
            negative = false;
        }
        else if (a_negative || b_negative) {
            negative = true;
        }
        else {
            negative = false;
        }
        var calc = function (_a) {
            var a = _a.a, b = _a.b, max = _a.max;
            var result_arr = [];
            var remain = core.getZero();
            var a_ = core.clone(a);
            var b_ = core.clone(b);
            var decimal_index = a.decimal_index;
            var decimal_index_remain = decimal_index;
            var a_int = core.clone(a_);
            a_int.decimal_index = a_int.array.length;
            var a_zero_length = 0;
            var a_zero_res = a_.array.join("").match(/^0+/);
            if (a_zero_res && a_zero_res[0]) {
                a_zero_length = a_zero_res[0].length;
                a_int = core.numToArrayWithDecimal(a_int.array.slice(a_zero_length, a_int.array.length).join(""));
            }
            var b_int = core.clone(b_);
            b_int.decimal_index = b_int.array.length;
            var b_zero_length = 0;
            var b_zero_res = b_int.array.join("").match(/^0+/);
            if (b_zero_res && b_zero_res[0]) {
                b_zero_length = b_zero_res[0].length;
                b_int = core.numToArrayWithDecimal(b_int.array.slice(b_zero_length, b_int.array.length).join(""));
            }
            var zero_gap = a_zero_length - b_zero_length;
            var a_array = __spreadArray([], a_int.array, true);
            var a_decimal_length = a_.array.length - a_.decimal_index;
            var b_decimal_length = b_.array.length - b_.decimal_index;
            var decimal_gap = a_decimal_length - b_decimal_length;
            var times = Number(core.add(a_int.array.length, max).array.join(""));
            var a_len = a_int.array.length;
            var remain_is_decimal = false;
            var remain_arr = [0];
            var decimal_count = 0;
            var remain_and_a_len_gap = 0;
            for (var i = 0; i < times; i++) {
                var is_less = true;
                var count = core.getZero();
                var remain1 = core.multiplication(remain, "10");
                var remain2 = String(a_array.slice(i, i + 1).length === 1 ? a_array.slice(i, i + 1)[0] : "0");
                remain = core.add(remain1, remain2);
                remain_and_a_len_gap = remain.array.length - a_len;
                var product = core.getZero();
                if (i === a_len) {
                    decimal_index = i;
                    if (core.isZero(remain)) {
                        break;
                    }
                    else {
                        remain_is_decimal = true;
                        decimal_count = decimal_count++;
                    }
                }
                else if (i > a_len) {
                    decimal_count = decimal_count++;
                    if (core.isZero(remain)) {
                        break;
                    }
                }
                var max_count = max;
                while (is_less) {
                    count = core.add(count, "1");
                    if (core.isLarge(count, max_count)) {
                        is_less = false;
                        break;
                    }
                    var pre_product = product;
                    product = core.multiplication(b_int, count);
                    if (core.isEqual(remain, product)) {
                        is_less = false;
                        var result = count;
                        result_arr.push(result);
                        remain = core.subtract(remain, product);
                        break;
                    }
                    if (core.isLarge(product, remain)) {
                        is_less = false;
                        var result = core.subtract(count, "1");
                        result_arr.push(result);
                        remain = core.subtract(remain, pre_product);
                        if (remain_is_decimal) {
                            remain_arr.push(0);
                        }
                        break;
                    }
                }
            }
            remain_arr.push.apply(remain_arr, remain.array);
            var new_arr = result_arr.flatMap(function (e) { return e.array; });
            if (zero_gap > 0) {
                for (var i = 0; i < zero_gap; i++) {
                    new_arr.unshift(0);
                    decimal_index++;
                }
            }
            if (decimal_gap < 0) {
                for (var i = 0; i < Math.abs(decimal_gap); i++) {
                    new_arr.push(0);
                    decimal_index++;
                }
            }
            else if (decimal_gap > 0) {
                for (var i = 0; i < Math.abs(decimal_gap); i++) {
                    new_arr.unshift(0);
                }
            }
            if (remain_and_a_len_gap > 0) {
                for (var i = 0; i < remain_and_a_len_gap; i++) {
                    var tgt = remain_arr[0];
                    if (tgt === 0) {
                        remain_arr.shift();
                    }
                    else {
                        decimal_index_remain = decimal_index_remain - remain_and_a_len_gap;
                    }
                    remain_arr.push(0);
                }
            }
            else if (remain_and_a_len_gap < 0) {
                var len = Math.abs(remain_and_a_len_gap);
                var arr = Array(len).fill(0);
                remain_arr.unshift.apply(remain_arr, arr);
            }
            if (remain_is_decimal) {
                remain_arr = __spreadArray([], remain_arr, true);
            }
            return {
                new_array: new_arr,
                decimal_index: decimal_index,
                remain_array: remain_arr,
                remain_decimal_index: decimal_index_remain,
            };
        };
        var max_times_if_not_divisible = core.numToArrayWithDecimal("10");
        var _a = calc({ a: a_, b: b_, max: max_times_if_not_divisible }), new_array = _a.new_array, decimal_index = _a.decimal_index, remain_array = _a.remain_array, remain_decimal_index = _a.remain_decimal_index;
        var remainder = core.moldNumArray({
            array: __spreadArray([], remain_array, true),
            negative: negative,
            decimal_index: remain_decimal_index
        });
        var quotient = core.moldNumArray({
            array: __spreadArray([], new_array, true),
            negative: negative,
            decimal_index: decimal_index
        });
        return __assign(__assign({}, quotient), { remainder: remainder });
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
core.divide = function (a, b) {
    return core.division(a, b);
};
core.floor = function (num) {
    try {
        var n = core.numToArrayWithDecimal(num);
        var is_decimal = n.decimal_index < n.array.length;
        var dec = n.array.slice(n.decimal_index, n.array.length);
        var dec_n = core.numToArrayWithDecimal(dec.join(""));
        if (core.isZero(dec_n)) {
            return n;
        }
        var n_ = __assign(__assign({}, n), { array: n.array.slice(0, n.decimal_index) });
        if (n.negative && is_decimal) {
            n_ = core.subtract(n_, "1");
        }
        return n_;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: num });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: num });
        }
    }
};
core.ceil = function (num) {
    try {
        var n = core.numToArrayWithDecimal(num);
        var is_decimal = n.decimal_index < n.array.length;
        var dec = n.array.slice(n.decimal_index, n.array.length);
        var dec_n = core.numToArrayWithDecimal(dec.join(""));
        if (core.isZero(dec_n)) {
            return n;
        }
        var n_ = __assign(__assign({}, n), { array: n.array.slice(0, n.decimal_index) });
        if (!n.negative && is_decimal) {
            n_ = core.add(n_, "1");
        }
        return n_;
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: num });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: num });
        }
    }
};
core.modulo = function (a, b) {
    try {
        if (!a || !b) {
            if (a !== 0 && b !== 0) {
                return core.makeError({ message: "Parameters are not exists", parameter: [a, b] });
            }
        }
        var a_ = core.getZero();
        var b_ = core.getZero();
        if (a.is_num_array) {
            a_ = core.clone(a);
        }
        else {
            a_ = core.numToArrayWithDecimal(a ? a : 0);
        }
        if (b.is_num_array) {
            b_ = core.clone(b);
        }
        else {
            b_ = core.numToArrayWithDecimal(b ? b : 0);
        }
        if (core.isZero(b_)) {
            if (core.isLarge(a_, "0")) {
                return "Infinity";
            }
            else if (core.isSmall(a_, "0")) {
                return "Negative Infinity";
            }
            return "Not a Number";
        }
        if (core.isZero(a_)) {
            return __assign(__assign({}, core.getZero()), { remainder: core.getZero() });
        }
        var a_posi = core.clone(a_);
        var b_posi = core.clone(b_);
        a_posi.negative = false;
        b_posi.negative = false;
        if (core.isLarge(b_posi, a_posi)) {
            var a_1 = core.numToArrayWithDecimal(a);
            return a_1;
        }
        if (core.isEqual(a_, b_)) {
            return __assign(__assign({}, core.getZero()), { remainder: core.getZero() });
        }
        var negative = void 0;
        if (a_.negative) {
            negative = true;
        }
        else {
            negative = false;
        }
        var calc = function (_a) {
            var a = _a.a, b = _a.b;
            var divided = core.divide(a, b);
            var floored = core.floor(divided);
            var multipled = core.multiple(b, floored);
            var res = core.subtract(a, multipled);
            return res;
        };
        var res = calc({ a: __assign(__assign({}, a_), { negative: false }), b: __assign(__assign({}, b_), { negative: false }) });
        var quotient = core.moldNumArray(__assign(__assign({}, res), { negative: negative }));
        return __assign({}, quotient);
    }
    catch (err) {
        if (err instanceof Error) {
            return this.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return core.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
exports["default"] = core;


/***/ }),

/***/ "./docts.ts":
/*!******************!*\
  !*** ./docts.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var corets_1 = __webpack_require__(/*! ./corets */ "./corets.ts");
var utilsts_1 = __webpack_require__(/*! ./utilsts */ "./utilsts.ts");
var map = {
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
    },
    exponentiate: {
        ja: "冪（べき）乗"
    }
};
var whatIs = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "" : _b, _c = _a.lang, lang = _c === void 0 ? "ja" : _c;
    if (!name) {
        return "";
    }
    var target = utilsts_1.default[name];
    if (!target) {
        target = corets_1.default[name];
    }
    var exists = target ? true : false;
    if (!exists) {
        return "";
    }
    var res = map[name];
    if (res && res[lang]) {
        return res[lang];
    }
    var other_lang = Object.keys(res)[0];
    if (other_lang) {
        return res[other_lang];
    }
    return "";
};
exports["default"] = whatIs;


/***/ }),

/***/ "./utilsts.ts":
/*!********************!*\
  !*** ./utilsts.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var corets_1 = __webpack_require__(/*! ./corets */ "./corets.ts");
var utils = {};
utils.ts = function () { return "ts"; };
utils.getNumber = function (n) {
    return corets_1.default.numToArrayWithDecimal(n);
};
utils.copy = function (n) {
    var c = corets_1.default.clone(n);
    if (!c) {
        var s = corets_1.default.numArrayToString(n);
        return corets_1.default.numToArrayWithDecimal(s);
    }
    return c;
};
utils.getLarge = function (a, b) {
    return corets_1.default.getLarge(a, b);
};
utils.getSmall = function (a, b) {
    return corets_1.default.getSmall(a, b);
};
utils.isSmall = function (a, b) {
    return corets_1.default.isSmall(a, b);
};
utils.isLarge = function (a, b) {
    return corets_1.default.isLarge(a, b);
};
utils.isEqual = function (a, b) {
    return corets_1.default.isEqual(a, b);
};
utils.getZero = function () {
    return corets_1.default.getZero();
};
utils.getOne = function () {
    return corets_1.default.getOne();
};
utils.isZero = function (n) {
    return corets_1.default.isZero(n);
};
utils.isOne = function (n) {
    return corets_1.default.isOne(n);
};
utils.square = function (n) {
    return corets_1.default.multiplication(n, n);
};
utils.getAbsolute = function (n) {
    var num = utils.getNumber(n);
    var clone = corets_1.default.clone(num);
    if (clone.negative) {
        clone = utils.makePositive(clone);
    }
    return clone;
};
utils.exponentiate = function (base, exponent) {
    var b = utils.getNumber(base);
    var exp = utils.getNumber(exponent);
    if (utils.includeDecimal(exp)) {
        return corets_1.default.makeError({ message: "Not supported if exponent is decimal", parameter: [exponent] });
    }
    if (!utils.isInteger(exp)) {
        return corets_1.default.makeError({ message: "Exponent must be integer", parameter: [exponent] });
    }
    if (utils.isZero(exp)) {
        return corets_1.default.getOne();
    }
    if (utils.isOne(exp)) {
        return b;
    }
    var multi = true;
    if (corets_1.default.isSmall(exp, corets_1.default.getZero())) {
        multi = false;
    }
    var count = corets_1.default.getOne();
    var exp_abs = utils.getAbsolute(exp);
    var getBool = function (count) {
        return corets_1.default.isSmall(count, exp_abs);
    };
    var res = b;
    var bool = getBool(count);
    while (bool) {
        if (multi) {
            res = corets_1.default.multiple(res, b);
        }
        else {
            res = corets_1.default.divide(res, b);
        }
        count = corets_1.default.add(count, "1");
        bool = getBool(count);
    }
    return res;
};
utils.getInteger = function (n) {
    var str = "";
    for (var i = 0; i < n.decimal_index; i++) {
        var s = String(n.array[i]);
        str = str + s;
    }
    var num = utils.getNumber(str);
    return num;
};
utils.getDecimal = function (n) {
    return corets_1.default.getDecimal(n);
};
utils.isNaturalNumber = function (n) {
    var decimal = utils.getDecimal(n);
    var is_zero = utils.isZero(decimal);
    if (is_zero && !n.negative) {
        return true;
    }
    return false;
};
utils.includeDecimal = function (n) {
    var decimal = utils.getDecimal(n);
    var is_zero = utils.isZero(decimal);
    if (is_zero) {
        return false;
    }
    return true;
};
utils.isNegative = function (n) {
    var n_ = corets_1.default.numToArrayWithDecimal(n);
    return n_.negative;
};
utils.isPositive = function (n) {
    var n_ = corets_1.default.numToArrayWithDecimal(n);
    return !n_.negative;
};
utils.negate = function (n) {
    var num = corets_1.default.numToArrayWithDecimal(n);
    if (num) {
        num.negative = true;
    }
    return num;
};
utils.makePositive = function (n) {
    var num = corets_1.default.numToArrayWithDecimal(n);
    if (num) {
        num.negative = false;
    }
    return num;
};
utils.getNegativeNumber = function (n) {
    return utils.negate(n);
};
utils.getPositiveNumber = function (n) {
    var num = corets_1.default.numToArrayWithDecimal(n);
    if (num) {
        num.negative = false;
    }
    return num;
};
utils.getNext = function (n) {
    return corets_1.default.add(n, "1");
};
utils.getPrev = function (n) {
    return corets_1.default.subtract(n, "1");
};
utils.isInteger = function (n) {
    if (utils.isZero(n)) {
        return true;
    }
    var decimal = utils.getDecimal(n);
    if (utils.isEqual(decimal, "0")) {
        return true;
    }
    return false;
};
utils.isEvenNumber = function (n) {
    if (utils.isZero(n)) {
        return true;
    }
    if (!utils.isInteger(n)) {
        return false;
    }
    var res = corets_1.default.division(n, "2");
    var decimal = utils.getDecimal(res);
    var is_zero = utils.isZero(decimal);
    if (is_zero) {
        return true;
    }
    return false;
};
utils.isOddNumber = function (n) {
    if (utils.isZero(n)) {
        return false;
    }
    if (!utils.isInteger(n)) {
        return false;
    }
    var res = corets_1.default.division(n, "2");
    var decimal = utils.getDecimal(res);
    var bool = corets_1.default.isEqual("0.5", decimal);
    if (bool) {
        return true;
    }
    return false;
};
utils.getDivisors = function (n) {
    if (!n && n !== 0) {
        return corets_1.default.makeError({ message: "Parameter must be integer", parameter: [n] });
    }
    var arr = [];
    var num = utils.getNumber(n);
    if (!num) {
        return arr;
    }
    if (corets_1.default.isZero(num)) {
        return arr;
    }
    if (utils.isNaturalNumber(num)) {
        if (corets_1.default.isOne(num)) {
            arr.push(num);
        }
        else {
            for (var i = corets_1.default.getOne(); corets_1.default.isEqual(num, i) || corets_1.default.isLarge(num, i); i = corets_1.default.add(i, "1")) {
                var res = corets_1.default.division(num, i);
                if (!utils.isNaturalNumber(res)) {
                    continue;
                }
                var remainder = res.remainder;
                if (corets_1.default.isZero(remainder)) {
                    arr.push(utils.getNumber(i));
                }
            }
        }
    }
    return arr;
};
utils.commonDivisors = function (a, b) {
    var arr = [];
    if (!a && a !== 0) {
        return arr;
    }
    if (!b && b !== 0) {
        return arr;
    }
    try {
        var a_ = utils.getNumber(a);
        var b_ = utils.getNumber(b);
        var a_divisors = utils.getDivisors(a_);
        if (corets_1.default.isEqual(a_, b_)) {
            return a_divisors;
        }
        var b_divisors = utils.getDivisors(b_);
        for (var i = 0; i < a_divisors.length; i++) {
            var a_n = a_divisors[i];
            for (var j = 0; j < b_divisors.length; j++) {
                var b_n = b_divisors[j];
                if (corets_1.default.isEqual(a_n, b_n)) {
                    arr.push(a_n);
                }
            }
        }
        return arr;
    }
    catch (err) {
        if (err instanceof Error) {
            return corets_1.default.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return corets_1.default.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
utils.greatestCommonDivisor = function (a, b) {
    try {
        var arr = utils.commonDivisors(a, b);
        return arr[arr.length - 1];
    }
    catch (err) {
        if (err instanceof Error) {
            return corets_1.default.makeError({ message: err.message, parameter: [a, b] });
        }
        else {
            return corets_1.default.makeError({ message: "unknown error", paramater: [a, b] });
        }
    }
};
utils.commonMultiple = function (a, b, limit) {
    var limit_length = limit ? limit : 10;
    var arr = [];
    if (!a && a !== 0) {
        return arr;
    }
    if (!b && b !== 0) {
        return arr;
    }
    try {
        var a_ = utils.getNumber(a);
        var b_ = utils.getNumber(b);
        if (corets_1.default.isEqual(a_, b_)) {
            arr.push(a_);
            return arr;
        }
        var a_arr = [];
        var b_arr_1 = [];
        for (var i = 1; i <= limit_length; i++) {
            var a_num = corets_1.default.multiple(a_, i);
            a_arr.push(a_num);
        }
        for (var j = 1; j <= limit_length; j++) {
            var b_num = corets_1.default.multiple(b_, j);
            b_arr_1.push(b_num);
        }
        a_arr.forEach(function (a_n) {
            var tgt = b_arr_1.find(function (b_n) { return corets_1.default.isEqual(a_n, b_n); });
            if (tgt) {
                arr.push(tgt);
            }
        });
        return arr;
    }
    catch (err) {
        if (err instanceof Error) {
            return corets_1.default.makeError({ message: err.message, parameter: [a, b, limit] });
        }
        else {
            return corets_1.default.makeError({ message: "unknown error", paramater: [a, b, limit] });
        }
    }
};
utils.leastCommonMultiple = function (a, b, limit) {
    var arr = utils.commonMultiple(a, b, limit);
    return arr[0];
};
var fibonacciReccurenceRelation = function (_a) {
    var array = _a.array, limit = _a.limit;
    var max = limit ? limit : 100;
    var items_length = array.length;
    var func = function (array) {
        if (array.length >= max) {
            return array;
        }
        try {
            var res = utils.getNumber("0");
            for (var i = 0; i < items_length; i++) {
                var index = array.length - (items_length - i);
                var num = array[index];
                res = corets_1.default.add(res, num);
            }
            array.push(res);
            return func(array);
        }
        catch (err) {
            if (err instanceof Error) {
                return corets_1.default.makeError({ message: err.message, parameter: [array, limit] });
            }
            else {
                return corets_1.default.makeError({ message: "unknown error", paramater: [array, limit] });
            }
        }
    };
    return func(array);
};
var makeFibonacciInitialArray = function (_a) {
    var _b = _a.first, first = _b === void 0 ? "0" : _b, _c = _a.last, last = _c === void 0 ? "1" : _c, _d = _a.length, length = _d === void 0 ? 2 : _d;
    var len = length;
    var a = utils.getNumber(first);
    var b = utils.getNumber(last);
    var arr = [];
    try {
        for (var i = 0; i < len; i++) {
            var tgt = a;
            if (i === (len - 1)) {
                tgt = b;
            }
            arr.push(tgt);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            return corets_1.default.makeError({ message: err.message, parameter: [first, last, length] });
        }
        else {
            return corets_1.default.makeError({ message: "unknown error", paramater: [first, last, length] });
        }
    }
    return arr;
};
utils.makeFibonacciSequence = function (first, last) {
    if (first === void 0) { first = "0"; }
    if (last === void 0) { last = "1"; }
    var arr = makeFibonacciInitialArray({ first: first, last: last, length: 2 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeTribonacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 3 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeTetranacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 4 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makePentanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 5 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeHexanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 6 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeHeptanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 7 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeOctanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 8 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeNonanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 9 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeDecanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 10 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeUndecanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 11 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeDodecanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 12 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeIcosanacciSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "0", last: "1", length: 20 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.makeLucaSequence = function () {
    var arr = makeFibonacciInitialArray({ first: "2", last: "1", length: 2 });
    return fibonacciReccurenceRelation({ array: arr, limit: 100 });
};
utils.summation = function (array) {
    if (!array || !Array.isArray(array)) {
        return corets_1.default.makeError({ message: "Parameter must be Array.", parameter: [array] });
    }
    if (array.length === 0) {
        return corets_1.default.makeError({ message: "array length is zero", parameter: [array] });
    }
    var sum = corets_1.default.getZero();
    if (Array.isArray(array)) {
        try {
            for (var i = 0; i < array.length; i++) {
                sum = corets_1.default.add(sum, array[i]);
            }
        }
        catch (err) {
            if (err instanceof Error) {
                return corets_1.default.makeError({ message: err.message, parameter: [array] });
            }
            else {
                return corets_1.default.makeError({ message: "unknown error", paramater: [array] });
            }
        }
    }
    return sum;
};
utils.infiniteProduct = function (array) {
    if (!array || !Array.isArray(array)) {
        return corets_1.default.makeError({ message: "Parameter must be Array.", parameter: [array] });
    }
    if (array.length === 1) {
        return utils.getNumber(array[0]);
    }
    var res = array[0];
    try {
        for (var i = 1; i < array.length; i++) {
            res = corets_1.default.multiple(res, array[i]);
        }
    }
    catch (err) {
        if (err instanceof Error) {
            return corets_1.default.makeError({ message: err.message, parameter: [array] });
        }
        else {
            return corets_1.default.makeError({ message: "unknown error", paramater: [array] });
        }
    }
    return res;
};
utils.digitSum = function (num) {
    var n = utils.getNumber(num);
    if (!n || !Array.isArray(n.array)) {
        return corets_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [num] });
    }
    var res = corets_1.default.getZero();
    if (corets_1.default.isZero(n)) {
        return res;
    }
    try {
        n.array.forEach(function (item) {
            res = corets_1.default.add(res, item);
        });
        return res;
    }
    catch (err) {
        if (err instanceof Error) {
            return corets_1.default.makeError({ message: err.message, parameter: [num] });
        }
        else {
            return corets_1.default.makeError({ message: "unknown error", paramater: [num] });
        }
    }
};
utils.makeTriangleNumber = function (num) {
    var n = utils.getNumber(num);
    if (corets_1.default.isZero(n) || utils.isNegative(n) || !utils.isInteger(n)) {
        return corets_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [num] });
    }
    var res1 = corets_1.default.multiple(n, corets_1.default.add(n, "1"));
    var res2 = corets_1.default.divide(res1, "2");
    return res2;
};
utils.makePronicNumber = function (num) {
    var n = utils.getNumber(num);
    if (corets_1.default.isZero(n)) {
        return corets_1.default.getZero();
    }
    if (utils.isNegative(n) || !utils.isInteger(n)) {
        return corets_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [num] });
    }
    try {
        var res = corets_1.default.multiple(n, corets_1.default.add(n, "1"));
        return res;
    }
    catch (err) {
        if (err instanceof Error) {
            return corets_1.default.makeError({ message: err.message, parameter: [num] });
        }
        else {
            return corets_1.default.makeError({ message: "unknown error", paramater: [num] });
        }
    }
};
utils.factorial = function (num) {
    var n = utils.getNumber(num);
    if (corets_1.default.isZero(n) || corets_1.default.isOne(n)) {
        return corets_1.default.getOne();
    }
    if (utils.isNegative(n) || !utils.isInteger(n)) {
        return corets_1.default.makeError({ message: "Parameter must be a positive integer.", parameter: [num] });
    }
    var go = true;
    var temp = n;
    var current = n;
    var arr = [temp];
    try {
        while (go) {
            var target = corets_1.default.subtract(current, "1");
            arr.push(target);
            current = target;
            if (corets_1.default.isSmall(current, "2")) {
                go = false;
                break;
            }
        }
        return utils.infiniteProduct(arr);
    }
    catch (err) {
        if (err instanceof Error) {
            return corets_1.default.makeError({ message: err.message, parameter: [num] });
        }
        else {
            return corets_1.default.makeError({ message: "unknown error", paramater: [num] });
        }
    }
};
utils.makeMersenneNumbers = function (max) {
    var max_ = utils.getNumber(25);
    if (!max || corets_1.default.isLarge(max, max_)) {
        max = max_;
    }
    max = corets_1.default.add(max, utils.getNumber("1"));
    var two = utils.getNumber(2);
    var arr = [];
    var current = utils.getNumber(0);
    var ex = utils.getNumber(1);
    while (corets_1.default.isSmall(ex, max)) {
        current = utils.exponentiate(two, ex);
        current = corets_1.default.subtract(current, utils.getNumber(1));
        arr.push(current);
        ex = corets_1.default.add(ex, utils.getNumber(1));
    }
    return arr;
};
utils.trialDivision = function (n) {
    var num = utils.getNumber(n);
};
utils.isPrimeNumber = function (n) {
    var num = utils.getNumber(n);
    if (utils.isZero(num) || utils.isOne(num)) {
        console.log("1");
        return false;
    }
    if (utils.isEqual(num, "2")) {
        console.log("2");
        return true;
    }
    if (utils.isEvenNumber(num)) {
        console.log("3");
        return false;
    }
    if (utils.includeDecimal(num)) {
        console.log("4");
        return false;
    }
    if (utils.isSmall(num, utils.getNumber("0"))) {
        console.log("5");
        return false;
    }
    var prev = corets_1.default.subtract(num, utils.getNumber("1"));
    var start = corets_1.default.division(prev, utils.getNumber("2"));
    var current = start;
    var is_prime = true;
    console.log("a", num, current);
    while (is_prime && corets_1.default.isLarge(current, utils.getNumber("2"))) {
        var res = corets_1.default.modulo(num, current);
        console.log("aa", num, current, res);
        if (utils.isZero(res)) {
            is_prime = false;
            break;
        }
        current = corets_1.default.subtract(current, utils.getNumber("1"));
    }
    return is_prime;
};
utils.makePrimeNumbers = function (max) {
    var max_ = utils.getNumber(25);
    if (!max || corets_1.default.isLarge(max, max_)) {
        max = max_;
    }
    console.log("aaa");
    max = corets_1.default.add(max, utils.getNumber("1"));
    var length = utils.getZero();
    var arr = [];
    var num = utils.getNumber("1");
    while (corets_1.default.isSmall(length, max)) {
        console.log("isSmall", corets_1.default.isSmall(length, max));
        console.log("length", length);
        console.log("max", max);
        console.log("num", num);
        if (utils.isPrimeNumber(num)) {
            arr.push(num);
            length = utils.getNumber(arr.length);
        }
        // if(utils.isEqual(num, utils.getNumber("100"))){
        // break;
        // }
        num = corets_1.default.add(num, utils.getNumber("1"));
    }
    return arr;
};
exports["default"] = utils;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/*!********************!*\
  !*** ./indexts.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var su_js_1 = __webpack_require__(/*! ./su.js */ "./su.js");
var SK_js_1 = __webpack_require__(/*! ./SK.js */ "./SK.js");
var corets_1 = __webpack_require__(/*! ./corets */ "./corets.ts");
var utilsts_1 = __webpack_require__(/*! ./utilsts */ "./utilsts.ts");
var docts_1 = __webpack_require__(/*! ./docts */ "./docts.ts");
var constants_js_1 = __webpack_require__(/*! ./constants.js */ "./constants.js");
exports["default"] = {
    s: su_js_1.default,
    S: SK_js_1.default.S,
    K: SK_js_1.default.K,
    core: corets_1.default,
    utils: utilsts_1.default,
    doc: docts_1.default,
    constants: constants_js_1.default,
    ts: true,
};

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMEJBQTBCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFD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QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFFBQVE7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7VUNwcUNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsNERBQXdCO0FBQ3hCLDREQUF5QjtBQUN6QixrRUFBNEI7QUFDNUIscUVBQThCO0FBQzlCLCtEQUEwQjtBQUMxQixpRkFBc0M7QUFFdEMscUJBQWU7SUFDYixDQUFDLEVBQUUsZUFBQztJQUNKLENBQUMsRUFBRSxlQUFFLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxlQUFFLENBQUMsQ0FBQztJQUNQLElBQUksRUFBRSxnQkFBSTtJQUNWLEtBQUssRUFBRSxpQkFBSztJQUNaLEdBQUcsRUFBRSxlQUFHO0lBQ1IsU0FBUyxFQUFFLHNCQUFTO0lBQ3BCLEVBQUUsRUFBRSxJQUFJO0NBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9zdS8uL1NLLmpzIiwid2VicGFjazovL3N1Ly4vY29uc3RhbnRzLmpzIiwid2VicGFjazovL3N1Ly4vY29yZS5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmV0cy50cyIsIndlYnBhY2s6Ly9zdS8uL2RvY3RzLnRzIiwid2VicGFjazovL3N1Ly4vdXRpbHN0cy50cyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIiwid2VicGFjazovL3N1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N1L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcbmltcG9ydCBzdSBmcm9tIFwiLi9zdS5qc1wiO1xuXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuY29uc3QgTUlOID0gQ09OU1RBTlRTLk1JTjtcblxuY29uc3QgUyA9IHt9O1xuY29uc3QgSyA9IHt9O1xuXG5jb25zdCBtYWtlU3UgPSBzdS5tYWtlU3U7XG5jb25zdCBjb3B5U3UgPSBzdS5jb3B5U3U7XG5jb25zdCBpc1N1ID0gc3UuaXNTdTtcbmNvbnN0IFN1ID0gc3UuU3U7XG5cbmNvbnN0IEZJUlNUX1BSSU1FX05VTUJFUiA9IDI7XG5cblxuSy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSBtYWtlU3UoMCk7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IG1ha2VTdSgxKTtcbiAgfVxuICBpZighaXNTdShtaW4pKXtcbiAgICBtaW4gPSBtYWtlU3UobWluKTtcbiAgfVxuICBpZighaXNTdShtYXgpKXtcbiAgICBtYXggPSBtYWtlU3UobWF4KTtcbiAgfVxuXG4gIGNvbnN0IHN0ciA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IHJhbjtcblxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBpZihtaW4uaXNaZXJvKCkpe1xuICAgICAgcmFuID0gbWFrZVN1KDApO1xuICAgIH1lbHNle1xuICAgICAgcmFuID0gbWluO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgcmFuID0gbWFrZVN1KFwiMC5cIiArIGFyclsxXSkubXVsdGlwbGljYXRpb24obWF4KTtcbiAgfVxuICByZXR1cm4gcmFuO1xufTtcblxuSy5yYW5kb21FbGVtZW50ID0gZnVuY3Rpb24oYXJyYXkpe1xuICBjb25zdCBpID0gSy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKS5pbnRlZ2VyO1xuICByZXR1cm4gYXJyYXlbaV07XG59O1xuXG5LLnJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcblxuICBpZiggIWlzU3UobWluKSB8fCAhaXNTdShtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYobWluLmlzRXF1YWwobWF4KSB8fCBtaW4uaXNMYXJnZShtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gbWluLmdldE51bWJlcigpOyBpIDw9IG1heC5nZXROdW1iZXIoKTsgaSsrKXtcbiAgICBjb25zdCBzID0gbWFrZVN1KGkpO1xuICAgIGFyci5wdXNoKHMpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gSy5yYW5kb21FbGVtZW50KGFycik7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbksubWFrZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKG1heCAmJiBtYXguaXNTdSAmJiBtYXguaXNTdSgpKXtcbiAgICBtYXggPSBOdW1iZXIobWF4LmdldFN0cmluZygpKTtcbiAgfVxuXG4gIGNvbnN0IE1BWCA9IDEwMDtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gTUFYO1xuICB9XG4gIGlmKG1heCA+IE1BWCl7XG4gICAgbWF4ID0gTUFYO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBGSVJTVF9QUklNRV9OVU1CRVI7IGkgPCBtYXg7IGkrKyl7XG4gICAgY29uc3Qgc3UgPSBtYWtlU3UoaSk7XG4gICAgaWYoc3UuaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblxuLy8g44Om44O844Kv44Oq44OD44OJ44Gu5LqS6Zmk5rOVXG5LLmV1Y2xpZGVhbkFsZ29yaXRobSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIVMuaXNOdW1iZXIoYSkgfHwgIVMuaXNOdW1iZXIoYikpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZiggYSA9PT0gYil7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgdGVtcDtcbiAgaWYoIGEgPCBiKXtcbiAgICB0ZW1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdGVtcDtcbiAgfVxuXG4gIGxldCBhdGVtcCA9IGE7XG4gIGxldCBidGVtcCA9IGI7XG4gIGxldCBjdGVtcDtcbiAgbGV0IHJlcztcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBjb3ByaW1lID0gXCJjb3ByaW1lXCI7XG4gIHdoaWxlKGN0ZW1wICE9PTApe1xuICAgIGN0ZW1wID0gYXRlbXAgJSBidGVtcDtcbiAgICBpZihjdGVtcCA9PT0gMCl7XG4gICAgICByZXMgPSBidGVtcDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjdGVtcCA9PT0gMSl7XG4gICAgICByZXMgPSBjb3ByaW1lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGNvdW50ZXIgPj0gTUFYKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBhdGVtcCA9IGJ0ZW1wO1xuICAgIGJ0ZW1wID0gY3RlbXA7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5cblxuSy5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBlbXB0eS5cIjtcbiAgfVxuICBsZXQgaXAgPSAxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2ldO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpcCA9IGlwICogZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IGEgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBpcDtcbn07XG5cbksuZGl2aXNpb24gPSBmdW5jdGlvbihkaXZpZGVuZCwgZGl2aXNvcil7XG4gIGlmKGRpdmlkZW5kID09PSB1bmRlZmluZWQgfHwgZGl2aXNvciA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gZGl2aWRlbmQgLyBkaXZpc29yO1xuICByZXR1cm4ge1xuICAgIGludGVnZXI6IHtcbiAgICAgIHJlbWFpbmRlcjogZGl2aWRlbmQgJSBkaXZpc29yLFxuICAgICAgcmVzdWx0OiBNYXRoLmZsb29yKHJlc3VsdClcbiAgICB9LFxuICAgIHJlYWxOdW1iZXI6IHJlc3VsdFxuICB9O1xufTtcblxuSy5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBsZXQgYSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgKz0gYXJyW2ldO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuSy5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHN1bSA9IEsuZGl2aXNvcnNTdW1tYXRpb24obik7XG4gIGlmKHN1bSA+IG4gKiAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBuICogbjtcbiAgY29uc3QgcyA9IFN0cmluZyhudW0pO1xuICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcbiAgbGV0IGZpcnN0X2xlbiA9IDA7XG4gIGxldCBhZnRlcl9sZW4gPSAwO1xuICBsZXQgZmlyc3QsIGFmdGVyO1xuICBpZihTLmlzT2RkTnVtYmVyKGxlbikpe1xuICAgIGZpcnN0X2xlbiA9IChsZW4gLSAxKSAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuICsgMTtcbiAgfWVsc2V7XG4gICAgZmlyc3RfbGVuID0gbGVuIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW47XG4gIH1cbiAgZmlyc3QgPSBOdW1iZXIocy5zdWJzdHIoMCwgZmlyc3RfbGVuKSk7XG4gIGFmdGVyID0gTnVtYmVyKHMuc3Vic3RyKGZpcnN0X2xlbiwgYWZ0ZXJfbGVuKSk7XG5cbiAgaWYoKCBmaXJzdCArIGFmdGVyICkgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVCID0gZnVuY3Rpb24obil7XG5cbiAgY29uc3QgYXJyID0gU3RyaW5nKG4pLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IG1pbiA9IE51bWJlcihhcnIuc29ydCgpLmpvaW4oXCJcIikpO1xuICBjb25zdCBtYXggPSBOdW1iZXIoYXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcblxuICBpZigobWF4IC0gbWluKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKEsuaXNLYXByZWthck51bWJlclR5cGVBKG4pIHx8IEsuaXNLYXByZWthck51bWJlclR5cGVCKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgZiA9IE1hdGguZmxvb3Iobik7XG4gIGlmKCBmID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyDoqr/lkozlubPlnYdcbksuaGFybW9uaWNNZWFuID0gZnVuY3Rpb24oYXJyKXtcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgc3VtICs9IDEgLyBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGxlbiAvIHN1bTtcbn07XG5cbi8vIOiqv+WSjOaVsOOBi+OBqeOBhuOBi1xuSy5pc0hhcm1vbmljRGl2aXNvck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBjb25zdCByZXMgPSBLLmhhcm1vbmljTWVhbihhcnIpO1xuICBpZihTLmlzSW50ZWdlcihyZXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID4gMCAmJiBTLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuSy5jb2xsYXR6aFByb2JsZW0gPSBmdW5jdGlvbihudW0pe1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihuKXtcbiAgICBsZXQgcmVzID0gbjtcbiAgICBpZihTLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gKiAzICsgMTtcbiAgICB9ZWxzZSBpZihTLmlzRXZlbk51bWJlcihuKSl7XG4gICAgICByZXMgPSBuIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB3aGlsZShudW0gPiAxKXtcbiAgICBudW0gPSBjYWxjKG51bSk7XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44OV44Kn44Or44Oe44O844OG44K544OIXG4vLyBKU+OBruaJseOBiOOCi+evhOWbsuOCkui2heOBiOOBpuOBhOOBpuOBhuOBvuOBj+WLleOBi+OBmlxuSy5mZXJtYXRUZXN0ID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIVMuaXNJbnRlZ2VyKG4pIHx8IFMuaXNaZXJvKG4pIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnMuIFwiICsgbiArIFwiIGlzIGluY29ycmVjdCBwYXJhbWV0ZXIuXCI7XG4gIH1cblxuICBpZighbWF4KXtcbiAgICBtYXggPSAxMDA7XG4gIH1cblxuICBmb3IobGV0IGkgPSAxOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBhID0gSy5yYW5kb21JbnQoMiwgbiAtIDEpO1xuICAgIGlmKEsubWF4Q29tbW9uRGl2aXNvcihhLCBuKSAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gTWF0aC5wb3coYSwgbiAtIDEpICUgbjtcbiAgICBpZihyZXMgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIk1heWJlIFByaW1lIE51bWJlclwiO1xufTtcblxuLy8g57WE44G/5ZCI44KP44Gb5pWw44Gu6KiI566XXG4vLyBLLmNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGFycil7XG4vLyB9O1xuXG4vLyAzID0+IFswLCAzXSwgWzEsIDJdLCBbMiwgMV0sIFszLCAwXVxuSy5nZXRJbmNsdWRlc051bWJlcnMgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHRlbXAgPSBudW07XG4gIGxldCBib29sID0gdHJ1ZTtcbiAgd2hpbGUoYm9vbCl7XG4gICAgY29uc3QgYSA9IHRlbXA7XG4gICAgY29uc3QgYiA9IG51bSAtdGVtcDtcbiAgICBjb25zdCBhciA9IFthLGJdO1xuICAgIGFyci5wdXNoKGFyKTtcbiAgICB0ZW1wID0gdGVtcCAtMTtcbiAgICBpZih0ZW1wIDwgMCl7XG4gICAgICBib29sID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIGZpYm9uYWNjaVxuXG5cblxuXG5cblxuXG4vLyB0b2RvIDBzdGFydFxuY29uc3QgYXJyYXlTdW1tYXRpb24gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICEoYSBpbnN0YW5jZW9mIEFycmF5KSApe1xuICAgIGEgPSBjb3JlLm51bVRvQXJyYXkoYSk7XG4gIH1cbiAgaWYoICEoYiBpbnN0YW5jZW9mIEFycmF5KSApe1xuICAgIGIgPSBjb3JlLm51bVRvQXJyYXkoYik7XG4gIH1cblxuICBpZighY29yZS5pc051bUFycmF5KGEpIHx8ICFjb3JlLmlzTnVtQXJyYXkoYikpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZihjb3JlLmlzWmVybyhhWzBdKSAmJiBjb3JlLmlzWmVybyhiWzBdKSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFycmF5OiBbMF0sXG4gICAgICBzdHJpbmc6IFwiMFwiLFxuICAgICAgbnVtYmVyOiAwLFxuICAgICAgbGVuZ3RoOiAxXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IEEgPSBtYWtlU3UoYSk7XG4gIGNvbnN0IEIgPSBtYWtlU3UoYik7XG5cbiAgY29uc29sZS5sb2coQSxCKTtcblxuICBjb25zdCByZXMgPSBjb3JlLmdldExhcmdlcihhLCBiKTtcbiAgY29uc3QgYXJyX2EgPSByZXNbMF07XG4gIGNvbnN0IGFycl9iID0gcmVzWzFdO1xuICBjb25zdCBsZW4gPSBhcnJfYS5sZW5ndGg7XG5cbiAgY29uc3QgZ2FwID0gbGVuIC0gYXJyX2IubGVuZ3RoO1xuXG4gIGxldCBvdmVyID0gMCwgYXJyX2MgPSBbXTtcbiAgZm9yKGxldCBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgY29uc3QgZWxtX2IgPSBhcnJfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBhcnJfYy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBhcnJfYy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGFycl9jKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0TGFyZ2VyID0gZnVuY3Rpb24oYSwgYil7XG4gIGNvbnN0IGFycl9hID0gW10sIGFycl9iID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFbaV07XG4gICAgaWYoZWxtX2EgPT09IDAgJiYgYXJyX2EubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZihlbG1fYSA+PSAgMCAmJiBlbG1fYSA8IDEwKXtcbiAgICAgIGFycl9hLnB1c2goZWxtX2EpO1xuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG1fYiA9IGJbaV07XG4gICAgaWYoZWxtX2IgPT09IDAgJiYgYXJyX2IubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZihlbG1fYiA+PSAgMCAmJiBlbG1fYiA8IDEwKXtcbiAgICAgIGFycl9iLnB1c2goZWxtX2IpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXM7XG4gIGlmKGFycl9hLmxlbmd0aCA+IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2EsIGJdO1xuICB9ZWxzZSBpZihhcnJfYS5sZW5ndGggPCBhcnJfYi5sZW5ndGgpe1xuICAgIHJlcyA9IFtiLCBhXTtcbiAgfWVsc2V7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGVsbV9hYSA9IGFycl9hW2ldO1xuICAgICAgY29uc3QgZWxtX2JiID0gYXJyX2JbaV07XG4gICAgICBpZihlbG1fYWEgPiBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2FhIDwgZWxtX2JiKXtcbiAgICAgICAgcmVzID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNle1xuICAgICAgICByZXMgPSBbYSwgYl07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBTOiBTLFxuICBLOiBLXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYOiAxMDAwMCxcbiAgTUlOOiAtMTAwMDAsXG4gIERCWjogXCJEaXZpc2lvbiBieSBaZXJvXCIsXG4gIE5BTjogXCJOb3QgYSBudW1iZXJcIixcbiAgTk9UU1U6IFwiQXJndW1lbnQgaXMgbm90IFN1LlwiXG59O1xuIiwiY29uc3QgY29yZSA9IHt9O1xuXG5jb3JlLm1ha2VFcnJvciA9IGZ1bmN0aW9uKHttZXNzYWdlLCB2YXJpYWJsZSwgcGFyYW1ldGVyfSl7XG4gIHRyeXtcbiAgICBjb25zdCB2ID0gdmFyaWFibGUudG9TdHJpbmcoKTtcbiAgICBjb25zdCBwID0gcGFyYW1ldGVyLnRvU3RyaW5nKCk7XG4gICAgbGV0IHN0ciA9IG1lc3NhZ2U7XG4gICAgaWYodil7XG4gICAgICBzdHIgPSBgJHtzdHJ9LCAke3YgPyB2IDogXCJcIn1gO1xuICAgIH1cbiAgICBpZihwKXtcbiAgICAgIHN0ciA9IGAke3N0cn0sICR7cCA/IHAgOiBcIlwifWA7XG4gICAgfVxuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHN0cik7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9Y2F0Y2goZSl7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn07XG5cbmNvbnN0IGlzTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUubW9sZE51bUFycmF5ID0gZnVuY3Rpb24oeyBhcnJheSwgbmVnYXRpdmUsIGRlY2ltYWxfaW5kZXggfSl7XG4gIGlmKCFhcnJheSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHsgbWVzc2FnZTogXCJBcnJheSBpcyBub3QgZXhpc3RzXCIsIHBhdGFtZXRlcjogYXJyYXl9KTtcbiAgfVxuXG4gIGlmKHR5cGVvZiBkZWNpbWFsX2luZGV4ICE9PSBcIm51bWJlclwiIHx8IGlzTmFOKGRlY2ltYWxfaW5kZXgpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3IoeyBtZXNzYWdlOiBcImRlY2ltYWxfaW5kZXggaXMgbm90IGEgbnVtYmVyXCIsIHBhdGFtZXRlcjogZGVjaW1hbF9pbmRleH0pO1xuICB9XG4gIHRyeXtcbiAgICB3aGlsZShkZWNpbWFsX2luZGV4IDwgYXJyYXkubGVuZ3RoICYmIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdID09PSAwKXtcbiAgICAgIGFycmF5LnBvcCgpO1xuICAgIH1cbiAgICB3aGlsZShkZWNpbWFsX2luZGV4ID4gMSAmJiBhcnJheVswXSA9PT0gMCl7XG4gICAgICBhcnJheS5zaGlmdCgpO1xuICAgICAgZGVjaW1hbF9pbmRleC0tO1xuICAgIH1cblxuICAgIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgICBhcnJheS5wdXNoKDApO1xuICAgICAgZGVjaW1hbF9pbmRleCA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgbyA9IHtcbiAgICAgIGFycmF5OiBhcnJheSxcbiAgICAgIG5lZ2F0aXZlOiAhIW5lZ2F0aXZlLFxuICAgICAgaXNfbnVtX2FycmF5OiB0cnVlLFxuICAgIH07XG4gICAgaWYoZGVjaW1hbF9pbmRleCA9PT0gMCB8fCBkZWNpbWFsX2luZGV4ID4gMCl7XG4gICAgICBvLmRlY2ltYWxfaW5kZXggPSBkZWNpbWFsX2luZGV4O1xuICAgIH1lbHNle1xuICAgICAgby5kZWNpbWFsX2luZGV4ID0gYXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBvO1xuICB9Y2F0Y2goZSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlLm1lc3NhZ2UsIHBhcmFtZXRlcjogYXJyYXl9KTtcbiAgfVxuXG59O1xuXG5jb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbCA9IGZ1bmN0aW9uKG4pe1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgbnVsbCwgb3IgZW1wdHkuXCIsIHBhcmFtZXRlcjogbn0pO1xuICB9XG5cbiAgaWYobi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBjb3JlLmNsb25lKG4pO1xuICB9XG5cbiAgaWYodHlwZW9mIG4gPT09IFwib2JqZWN0XCIpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgaXMgb2JqZWN0LlwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgfVxuXG4gIGxldCBzdHIgPSBTdHJpbmcobik7XG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICB3aGlsZShzdHIgJiYgc3RyWzBdLm1hdGNoKC9eLS8pKXtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvXi0vLCBcIlwiKTtcbiAgICBuZWdhdGl2ZSA9ICFuZWdhdGl2ZTtcbiAgfVxuXG4gIGxldCBkZWNfaW5kZXg7XG4gIGxldCByZXMgPSBzdHIubWF0Y2goL1xcLi9nKTtcbiAgaWYocmVzICYmIHJlcy5sZW5ndGggPiAxKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYocmVzICYmIHJlcy5sZW5ndGggPT09IDEpe1xuICAgIGRlY19pbmRleCA9IHN0ci5tYXRjaCgvXFwuLykuaW5kZXg7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoL1xcLi8sIFwiXCIpO1xuICB9ZWxzZXtcbiAgICBkZWNfaW5kZXggPSBzdHIubGVuZ3RoO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIWlzTnVtYmVyKG51bSkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlRoaXMgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCIsIHBhcmFtZXRlcjogbnVtfSk7XG4gICAgfVxuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoeyBhcnJheTogYXJyLCBuZWdhdGl2ZTogbmVnYXRpdmUsIGRlY2ltYWxfaW5kZXg6IGRlY19pbmRleH0pO1xuXG59O1xuXG5jb3JlLm51bUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbihuKXtcbiAgaWYoIW4uaXNfbnVtX2FycmF5IHx8ICFuLmFycmF5IHx8ICFuLmRlY2ltYWxfaW5kZXgpe1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHRyeXtcbiAgICBjb25zdCBhcnIgPSBbLi4ubi5hcnJheV07XG4gICAgYXJyLnNwbGljZShuLmRlY2ltYWxfaW5kZXgsIDAsIFwiLlwiKTtcbiAgICBsZXQgc3RyID0gYXJyLmpvaW4oXCJcIik7XG4gICAgaWYobi5uZWdhdGl2ZSl7XG4gICAgICBzdHIgPSBgLSR7c3RyfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXC4kLywgXCJcIik7XG4gIH1jYXRjaChlcnIpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbn0pO1xuICB9XG5cbn07XG5cbmNvcmUuY29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpe1xuICB0cnl7XG4gICAgXG4gICAgaWYoIWEgfHwgIWIpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHsgbWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSB1bmRlZmluZWQsIG51bGwsIG9yIGVtcHR5LlwiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBvID0ge1xuICAgICAgc21hbGw6IG51bGwsXG4gICAgICBsYXJnZTogbnVsbCxcbiAgICAgIGVxdWFsOiBmYWxzZVxuICAgIH07XG4gICAgbGV0IGFfID0gYTtcbiAgICBsZXQgYl8gPSBiO1xuXG4gICAgaWYoIWFfLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGFfKTtcbiAgICAgIGlmKCFhXyl7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighYl8uaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYl8pO1xuICAgICAgaWYoIWJfKXtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnJheSA9IGFfLmFycmF5O1xuICAgIGNvbnN0IGJfYXJyYXkgPSBiXy5hcnJheTtcblxuICAgIGNvbnN0IGFfbGVuID0gYV9hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgYl9sZW4gPSBiX2FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBhX3N0ciA9IGFfYXJyYXkuam9pbihcIlwiKTtcbiAgICBjb25zdCBiX3N0ciA9IGJfYXJyYXkuam9pbihcIlwiKTtcblxuICAgIGNvbnN0IGFfaW50X2xlbiA9IGFfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgYl9pbnRfbGVuID0gYl8uZGVjaW1hbF9pbmRleDtcblxuICAgIGNvbnN0IGFfZGVjX2xlbiA9IGFfbGVuIC0gYV9pbnRfbGVuO1xuICAgIGNvbnN0IGJfZGVjX2xlbiA9IGJfbGVuIC0gYl9pbnRfbGVuO1xuXG4gICAgaWYoYV9sZW4gPT09IDEgJiYgYV9zdHIgPT09IFwiMFwiICYmIGJfbGVuID09PSAxICYmIGJfc3RyID09PSBcIjBcIil7XG4gICAgICBvLmVxdWFsID0gdHJ1ZTtcbiAgICAgIHJldHVybiBvO1xuICAgIH1cbiAgICBpZighYV8ubmVnYXRpdmUgJiYgYl8ubmVnYXRpdmUpe1xuICAgICAgby5zbWFsbCA9IGJfO1xuICAgICAgby5sYXJnZSA9IGFfO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAgIGlmKGFfLm5lZ2F0aXZlICYmICFiXy5uZWdhdGl2ZSl7XG4gICAgICBvLnNtYWxsID0gYV87XG4gICAgICBvLmxhcmdlID0gYl87XG4gICAgICByZXR1cm4gbztcbiAgICB9XG5cbiAgICBjb25zdCBuZWdhdGl2ZSA9IGFfLm5lZ2F0aXZlO1xuXG4gICAgY29uc3Qgb19hX2IgPSB7XG4gICAgICBsYXJnZTogbmVnYXRpdmUgPyBiXyA6IGFfLFxuICAgICAgc21hbGw6IG5lZ2F0aXZlID8gYV8gOiBiXyxcbiAgICAgIGVxdWFsOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbnN0IG9fYl9hID0ge1xuICAgICAgbGFyZ2U6IG5lZ2F0aXZlID8gYV8gOiBiXyxcbiAgICAgIHNtYWxsOiBuZWdhdGl2ZSA/IGJfIDogYV8sXG4gICAgICBlcXVhbDogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYoYV9pbnRfbGVuID4gYl9pbnRfbGVuKXtcbiAgICAgIHJldHVybiBvX2FfYjtcbiAgICB9XG4gICAgXG4gICAgaWYoYV9pbnRfbGVuIDwgYl9pbnRfbGVuKXtcbiAgICAgIHJldHVybiBvX2JfYTtcbiAgICB9XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYV9pbnRfbGVuOyBpKyspe1xuICAgICAgaWYoYV9hcnJheVtpXSA+IGJfYXJyYXlbaV0pe1xuICAgICAgICByZXR1cm4gb19hX2I7XG4gICAgICB9XG4gICAgICBpZihhX2FycmF5W2ldIDwgYl9hcnJheVtpXSl7XG4gICAgICAgIHJldHVybiBvX2JfYTsgIFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlY19sZW4gPSBhX2RlY19sZW4gPiBiX2RlY19sZW4gPyBhX2RlY19sZW4gOiBiX2RlY19sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRlY19sZW47IGkrKyl7XG4gICAgICBjb25zdCBhYSA9IGFfYXJyYXlbYV9pbnRfbGVuICsgaV0gPyBhX2FycmF5W2FfaW50X2xlbiArIGldIDogMDtcbiAgICAgIGNvbnN0IGJiID0gYl9hcnJheVtiX2ludF9sZW4gKyBpXSA/IGJfYXJyYXlbYl9pbnRfbGVuICsgaV0gOiAwO1xuICAgICAgaWYoYWEgPiBiYil7XG4gICAgICAgIHJldHVybiBvX2FfYjtcbiAgICAgIH1cbiAgICAgIGlmKGFhIDwgYmIpe1xuICAgICAgICByZXR1cm4gb19iX2E7XG4gICAgICB9XG4gICAgfVxuXG4gICAgby5lcXVhbCA9IHRydWU7XG4gICAgcmV0dXJuIG87XG4gIH1jYXRjaChlcnIpe1xuICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgfVxuXG59O1xuXG5jb3JlLmdldExhcmdlID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLmNvbXBhcmUoYSwgYikubGFyZ2U7XG59O1xuXG5jb3JlLmdldFNtYWxsID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLmNvbXBhcmUoYSwgYikuc21hbGw7XG59O1xuXG5jb3JlLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgcmVzID0gY29yZS5jb21wYXJlKGEsIGIpO1xuICBpZihyZXMuZXF1YWwpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUuaXNTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpe1xuICByZXR1cm4gY29yZS5pc0VxdWFsKGNvcmUuZ2V0U21hbGwoYSwgYiksIGEpO1xufTtcbmNvcmUuaXNMYXJnZSA9IGZ1bmN0aW9uKGEsIGIpe1xuICByZXR1cm4gY29yZS5pc0VxdWFsKGNvcmUuZ2V0TGFyZ2UoYSwgYiksIGEpO1xufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKXtcbiAgaWYoIW4pe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB6ZXJvID0gY29yZS5nZXRaZXJvKCk7XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoemVybywgbik7XG59O1xuXG5jb3JlLmlzT25lID0gZnVuY3Rpb24obil7XG4gIGlmKCFuKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYoIW4uaXNfbnVtX2FycmF5KXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3Qgb25lID0gY29yZS5nZXRPbmUoKTtcbiAgaWYoY29yZS5pc0VxdWFsKG9uZSwgbikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmNvcmUuZ2V0WmVybyA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjBcIik7XG59O1xuXG5jb3JlLmdldE9uZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjFcIik7XG59O1xuXG5jb3JlLmZpeENhcnJ5ID0gZnVuY3Rpb24oYXJyLCBtaW51cyl7XG4gIHRyeSB7XG4gICAgbGV0IG1pbnVzXyA9IG1pbnVzO1xuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49MDsgaS0tKXtcbiAgICAgIGNvbnN0IGVsbSA9IGFycltpXTtcbiAgICAgIGlmKGVsbSA8IDApe1xuICAgICAgICBtaW51c18gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbSA9PT0gMCl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihtaW51c18pe1xuICAgICAgY29uc3QgY2FjaGUgPSBbXTtcbiAgICAgIGFyci5mb3JFYWNoKCBlbG0gPT4ge1xuICAgICAgICBjYWNoZS5wdXNoKC1lbG0pO1xuICAgICAgfSk7XG4gICAgICBhcnIgPSBjYWNoZTtcbiAgICB9XG4gICAgY29uc3QgbmV3X2FyciA9IFtdO1xuICAgIGxldCBjYXJyeSA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgdmFsID0gYXJyW2ldICsgY2Fycnk7XG4gICAgICBpZih2YWwgPiA5KXtcbiAgICAgICAgY29uc3QgYXJyMSA9IFN0cmluZyh2YWwpLnNwbGl0KFwiXCIpO1xuICAgICAgICB2YWwgPSBOdW1iZXIoYXJyMVthcnIxLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgY29uc3QgYXJyMiA9IGFycjEuc2xpY2UoMCwgYXJyMS5sZW5ndGggLSAxKTtcbiAgICAgICAgY2FycnkgPSBOdW1iZXIoYXJyMi5qb2luKFwiXCIpKTtcbiAgICAgIH1lbHNlIGlmKCB2YWwgPj0gMCAmJiB2YWwgPD0gOSl7XG4gICAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIH1lbHNle1xuICAgICAgICB2YWwgPSAxMCArIHZhbDtcbiAgICAgICAgY2FycnkgPSAtMTtcblxuICAgICAgfVxuICAgICAgbmV3X2Fyci5wdXNoKHZhbCk7XG4gICAgfVxuICAgIGlmKGNhcnJ5ICE9PSAwKXtcbiAgICAgIG5ld19hcnIucHVzaChjYXJyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld19hcnJheTogbmV3X2FycixcbiAgICAgIG1pbnVzOiBtaW51c19cbiAgICB9O1xuICB9Y2F0Y2goZXJyKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthcnIsIG1pbnVzXX0pXG4gIH1cblxufTtcblxuY29yZS5jbG9uZSA9IGZ1bmN0aW9uKG4pe1xuICB0cnl7XG4gICAgaWYoIW4pe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogbn0pO1xuICAgIH1cbiAgICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBpcyBub3QgY29tcGF0aWJsZVwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgICB9XG4gICAgY29uc3QgbyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogWy4uLm4uYXJyYXldLFxuICAgIH07XG4gICAgcmV0dXJuIG87XG4gIH1jYXRjaChlcnIpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbn0pO1xuICB9XG59O1xuXG5jb3JlLmFkZF9hbmRfc3VidHJhY3QgPSBmdW5jdGlvbihhLCBiLCBtb2RlKXtcbiAgaWYoIWEgfHwgIWIpe1xuICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbXVzdCBiZSBhIE51bWJlciBvciBhIFN0cmluZy5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG4gIGxldCBwbHVzO1xuICBpZighbW9kZSl7XG4gICAgcmV0dXJuO1xuICB9ZWxzZSBpZihtb2RlID09PSBcIitcIil7XG4gICAgcGx1cyA9IHRydWU7XG4gIH1lbHNlIGlmKG1vZGUgPT09IFwiLVwiKXtcbiAgICBwbHVzID0gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJtb2RlIG11c3QgYmUgJysnIG9yICctJy5cIiwgcGFyYW1ldGVyOiBtb2RlfSk7XG4gIH1cblxuICB0cnkge1xuICAgIGxldCBhXyA9IG51bGw7XG4gICAgbGV0IGJfID0gbnVsbDtcbiAgICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgfWVsc2V7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gICAgfVxuICAgIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBhX2FyciA9IGFfLmFycmF5O1xuICAgIGNvbnN0IGJfYXJyID0gYl8uYXJyYXk7XG5cblxuICAgIGNvbnN0IGFfaXNfemVybyA9IGNvcmUuaXNaZXJvKGFfKTtcbiAgICBjb25zdCBiX2lzX3plcm8gPSBjb3JlLmlzWmVybyhiXyk7XG5cbiAgICBpZihhX2lzX3plcm8gJiYgYl9pc196ZXJvKXtcbiAgICAgIHJldHVybiBhXztcbiAgICB9ZWxzZSBpZihhX2lzX3plcm8pe1xuICAgICAgaWYoIXBsdXMpe1xuICAgICAgICBiXy5uZWdhdGl2ZSA9ICFiXy5uZWdhdGl2ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiXztcbiAgICB9ZWxzZSBpZihiX2lzX3plcm8pe1xuICAgICAgcmV0dXJuIGFfO1xuICAgIH1cblxuICAgIGNvbnN0IGFfZGVjX2xlbmd0aCA9IGFfLmFycmF5Lmxlbmd0aCAtIGFfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgYl9kZWNfbGVuZ3RoID0gYl8uYXJyYXkubGVuZ3RoIC0gYl8uZGVjaW1hbF9pbmRleDtcblxuICAgIGNvbnN0IGRlY19nYXAgPSBhX2RlY19sZW5ndGggLSBiX2RlY19sZW5ndGg7XG5cbiAgICBpZihkZWNfZ2FwID4gMCl7XG4gICAgICBiX2Fyci5wdXNoKC4uLkFycmF5KGRlY19nYXApLmZpbGwoMCkpO1xuICAgIH1lbHNlIGlmKGRlY19nYXAgPCAwKXtcbiAgICAgIGFfYXJyLnB1c2goLi4uQXJyYXkoTWF0aC5hYnMoZGVjX2dhcCkpLmZpbGwoMCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYiwgcGx1c30pe1xuICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICBsZXQgbGVuID0gYS5hcnJheS5sZW5ndGg7XG4gICAgICBpZihhLmFycmF5Lmxlbmd0aCA8IGIuYXJyYXkubGVuZ3RoKXtcbiAgICAgICAgbGVuID0gYi5hcnJheS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBjb25zdCBhcnJfYSA9IGEuYXJyYXk7XG4gICAgICBjb25zdCBhcnJfYiA9IGIuYXJyYXk7XG4gICAgICBjb25zdCBhX29uZSA9IGEubmVnYXRpdmUgPyAtMSA6IDE7XG4gICAgICBjb25zdCBiX29uZSA9IGIubmVnYXRpdmUgPyAtMSA6IDE7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gKiBhX29uZSA6IDA7XG4gICAgICAgIGNvbnN0IGJiID0gYXJyX2JbaV0gPyBhcnJfYltpXSAqIGJfb25lIDogMDtcbiAgICAgICAgbGV0IHJlcyA9IHBsdXMgPyBhYSArIGJiIDogYWEgLSBiYjtcbiAgICAgICAgYXJyLnB1c2gocmVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3JlLmZpeENhcnJ5KGFycik7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgbmV3X2FycmF5LCBtaW51cyB9ID0gY2FsYyh7XG4gICAgICBhOiB7XG4gICAgICAgIGFycmF5OiBbLi4uYV9hcnJdLnJldmVyc2UoKSxcbiAgICAgICAgbmVnYXRpdmU6IGFfLm5lZ2F0aXZlLFxuICAgICAgfSxcbiAgICAgIGI6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5iX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYl8ubmVnYXRpdmVcbiAgICAgIH0sXG4gICAgICBwbHVzOiBwbHVzXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWNfbGVuZ3RoID0gYV9kZWNfbGVuZ3RoID49IGJfZGVjX2xlbmd0aCA/IGFfZGVjX2xlbmd0aCA6IGJfZGVjX2xlbmd0aDtcbiAgICBjb25zdCBuZXdfaW50X2xlbmd0aCA9IG5ld19hcnJheS5sZW5ndGggLSBkZWNfbGVuZ3RoO1xuXG4gICAgY29uc3QgbmV3X2RlY2ltYWxfaW5kZXggPSBuZXdfaW50X2xlbmd0aDtcblxuICAgIHJldHVybiBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLm5ld19hcnJheV0ucmV2ZXJzZSgpLFxuICAgICAgbmVnYXRpdmU6IG1pbnVzID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgZGVjaW1hbF9pbmRleDogbmV3X2RlY2ltYWxfaW5kZXhcbiAgICB9KTtcbiAgfWNhdGNoKGVycil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgfVxuXG59O1xuXG5jb3JlLmFkZCA9IGZ1bmN0aW9uKGEsIGIpe1xuICByZXR1cm4gY29yZS5hZGRfYW5kX3N1YnRyYWN0KGEsIGIsIFwiK1wiKTtcbn07XG5cbmNvcmUuc3VidHJhY3QgPSBmdW5jdGlvbihhLCBiKXtcbiAgcmV0dXJuIGNvcmUuYWRkX2FuZF9zdWJ0cmFjdChhLCBiLCBcIi1cIik7XG59O1xuXG5cbmNvcmUubXVsdGlwbGljYXRpb24gPSBmdW5jdGlvbihhLCBiKXtcblxuICBpZighYSB8fCAhYil7XG4gICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGFfID0gbnVsbDtcbiAgbGV0IGJfID0gbnVsbDtcbiAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgfWVsc2V7XG4gICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICB9XG4gIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gIH1lbHNle1xuICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgfVxuXG4gIGNvbnN0IGFfYXJyID0gYV8uYXJyYXk7XG4gIGNvbnN0IGJfYXJyID0gYl8uYXJyYXk7XG5cbiAgaWYoY29yZS5pc1plcm8oYV8pIHx8IGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMFwiKTtcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUoYV8pKXtcbiAgICByZXR1cm4gYl87XG4gIH1cblxuICBpZihjb3JlLmlzT25lKGJfKSl7XG4gICAgcmV0dXJuIGFfO1xuICB9XG5cbiAgdHJ5e1xuXG4gICAgY29uc3QgYV9uZWdhdGl2ZSA9IGFfLm5lZ2F0aXZlO1xuICAgIGNvbnN0IGJfbmVnYXRpdmUgPSBiXy5uZWdhdGl2ZTtcbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV9uZWdhdGl2ZSAmJiBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfWVsc2UgaWYoYV9uZWdhdGl2ZSB8fCBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYV9kZWNfbGVuZ3RoID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2RlY19sZW5ndGggPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGRlY19sZW5ndGggPSBhX2RlY19sZW5ndGggKyBiX2RlY19sZW5ndGg7XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGJ9KXtcbiAgICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgICBjb25zdCBhcnJfYSA9IGEuYXJyYXk7XG4gICAgICBjb25zdCBhcnJfYiA9IGIuYXJyYXk7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgICAgICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoaSk7XG4gICAgICAgIGFyci5maWxsKDAsIDAsIGkpO1xuXG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgY29uc3QgYmIgPSBhcnJfYltqXSA/IGFycl9iW2pdIDogMDtcbiAgICAgICAgICBsZXQgcmVzID0gYWEgKiBiYjtcbiAgICAgICAgICBcbiAgICAgICAgICBhcnIucHVzaChyZXMpO1xuXG4gICAgICAgICAgY29uc3QgdGd0X2luZGV4ID0gaSArIGo7XG4gICAgICAgICAgbGV0IHRndCA9IGFycmF5W3RndF9pbmRleF07XG4gICAgICAgICAgaWYoIXRndCl7XG4gICAgICAgICAgICB0Z3QgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdfdGd0ID0gdGd0ICsgcmVzO1xuICAgICAgICAgIGFycmF5W3RndF9pbmRleF0gPSBuZXdfdGd0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29yZS5maXhDYXJyeShhcnJheSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgbmV3X2FycmF5IH0gPSBjYWxjKHtcbiAgICAgIGE6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5hX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYV8ubmVnYXRpdmUsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBhcnJheTogWy4uLmJfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBiXy5uZWdhdGl2ZVxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld19kZWNpbWFsX2luZGV4ID0gbmV3X2FycmF5Lmxlbmd0aCAtIGRlY19sZW5ndGg7XG5cbiAgICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLnJldmVyc2UoKSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IG5ld19kZWNpbWFsX2luZGV4XG4gICAgfSk7XG4gIH1jYXRjaChlcnIpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gIH1cblxufTtcblxuY29yZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIpe1xuICByZXR1cm4gY29yZS5tdWx0aXBsaWNhdGlvbihhLCBiKTtcbn07XG5cbmNvcmUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKG4pe1xuICB0cnl7XG4gICAgY29uc3Qgbl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgICBsZXQgc3RyID0gXCIwLlwiO1xuICAgIGNvbnN0IGxlbiA9IG5fLmFycmF5Lmxlbmd0aCAtIG5fLmRlY2ltYWxfaW5kZXg7XG4gICAgaWYobGVuID4gMCl7XG4gICAgICBmb3IobGV0IGkgPSBuXy5kZWNpbWFsX2luZGV4OyBpIDw9IGxlbjsgaSsrKXtcbiAgICAgICAgY29uc3QgcyA9IFN0cmluZyhuXy5hcnJheVtpXSk7XG4gICAgICAgIHN0ciA9IHN0ciArIHM7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICBzdHIgPSBzdHIgKyBcIjBcIjtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoc3RyKTtcbiAgICByZXR1cm4gbnVtO1xuICB9Y2F0Y2goZXJyKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG59KTtcbiAgfVxufTtcblxuXG5jb3JlLmRpdmlzaW9uID0gZnVuY3Rpb24oYSwgYil7XG5cbiAgdHJ5IHtcbiAgICBpZighYSB8fCAhYil7XG4gICAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbm90IGV4aXN0c1wiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhXyA9IG51bGw7XG4gICAgbGV0IGJfID0gbnVsbDtcbiAgICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgfWVsc2V7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gICAgfVxuICAgIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhiXykpe1xuICAgICAgaWYoY29yZS5pc0xhcmdlKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJJbmZpbml0eVwiO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc1NtYWxsKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJOZWdhdGl2ZSBJbmZpbml0eVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiTm90IGEgTnVtYmVyXCI7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYV8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0WmVybygpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKGNvcmUuaXNPbmUoYl8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFfLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldE9uZSgpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFfbmVnYXRpdmUgPSBhXy5uZWdhdGl2ZTtcbiAgICBjb25zdCBiX25lZ2F0aXZlID0gYl8ubmVnYXRpdmU7XG5cbiAgICBpZihhXy5uZWdhdGl2ZSl7XG4gICAgICBhXy5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGJfLm5lZ2F0aXZlKXtcbiAgICAgIGJfLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IG5lZ2F0aXZlO1xuICAgIGlmKGFfbmVnYXRpdmUgJiYgYl9uZWdhdGl2ZSl7XG4gICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1lbHNlIGlmKGFfbmVnYXRpdmUgfHwgYl9uZWdhdGl2ZSl7XG4gICAgICBuZWdhdGl2ZSA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYiwgbWF4fSl7XG4gICAgICBjb25zdCByZXN1bHRfYXJyID0gW107XG4gICAgICBsZXQgcmVtYWluID0gY29yZS5nZXRaZXJvKCk7XG4gICAgICBjb25zdCBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgICBjb25zdCBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgICBsZXQgZGVjaW1hbF9pbmRleCA9IGEuZGVjaW1hbF9pbmRleDtcbiAgICAgIGxldCBkZWNpbWFsX2luZGV4X3JlbWFpbiA9IGRlY2ltYWxfaW5kZXg7XG5cbiAgICAgIGxldCBhX2ludCA9IGNvcmUuY2xvbmUoYV8pO1xuICAgICAgYV9pbnQuZGVjaW1hbF9pbmRleCA9IGFfaW50LmFycmF5Lmxlbmd0aDtcbiAgICAgIGxldCBhX3plcm9fbGVuZ3RoID0gMDtcbiAgICAgIGNvbnN0IGFfemVyb19yZXMgPSBhXy5hcnJheS5qb2luKFwiXCIpLm1hdGNoKC9eMCsvKTtcbiAgICAgIGlmKGFfemVyb19yZXMgJiYgYV96ZXJvX3Jlc1swXSl7XG4gICAgICAgIGFfemVyb19sZW5ndGggPSBhX3plcm9fcmVzWzBdLmxlbmd0aDtcbiAgICAgICAgYV9pbnQgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhX2ludC5hcnJheS5zbGljZShhX3plcm9fbGVuZ3RoLCBhX2ludC5hcnJheS5sZW5ndGgpLmpvaW4oXCJcIikpO1xuICAgICAgfVxuXG4gICAgICBsZXQgYl9pbnQgPSBjb3JlLmNsb25lKGJfKTtcbiAgICAgIGJfaW50LmRlY2ltYWxfaW5kZXggPSBiX2ludC5hcnJheS5sZW5ndGg7XG4gICAgICBsZXQgYl96ZXJvX2xlbmd0aCA9IDA7XG4gICAgICBjb25zdCBiX3plcm9fcmVzID0gYl9pbnQuYXJyYXkuam9pbihcIlwiKS5tYXRjaCgvXjArLyk7XG4gICAgICBpZihiX3plcm9fcmVzICYmIGJfemVyb19yZXNbMF0pe1xuICAgICAgICBiX3plcm9fbGVuZ3RoID0gYl96ZXJvX3Jlc1swXS5sZW5ndGg7XG4gICAgICAgIGJfaW50ID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYl9pbnQuYXJyYXkuc2xpY2UoYl96ZXJvX2xlbmd0aCwgYl9pbnQuYXJyYXkubGVuZ3RoKS5qb2luKFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgemVyb19nYXAgPSBhX3plcm9fbGVuZ3RoIC0gYl96ZXJvX2xlbmd0aDtcbiAgICAgIGNvbnN0IGFfYXJyYXkgPSBbLi4uYV9pbnQuYXJyYXldO1xuICAgICAgY29uc3QgYV9kZWNpbWFsX2xlbmd0aCA9IGFfLmFycmF5Lmxlbmd0aCAtIGFfLmRlY2ltYWxfaW5kZXg7XG4gICAgICBjb25zdCBiX2RlY2ltYWxfbGVuZ3RoID0gYl8uYXJyYXkubGVuZ3RoIC0gYl8uZGVjaW1hbF9pbmRleDtcbiAgICAgIGNvbnN0IGRlY2ltYWxfZ2FwID0gYV9kZWNpbWFsX2xlbmd0aCAtIGJfZGVjaW1hbF9sZW5ndGg7XG5cbiAgICAgIGNvbnN0IHRpbWVzID0gTnVtYmVyKGNvcmUuYWRkKGFfaW50LmFycmF5Lmxlbmd0aCwgbWF4KS5hcnJheS5qb2luKFwiXCIpKTtcblxuICAgICAgY29uc3QgYV9sZW4gPSBhX2ludC5hcnJheS5sZW5ndGg7XG4gICAgICBsZXQgcmVtYWluX2lzX2RlY2ltYWwgPSBmYWxzZTtcbiAgICAgIGxldCByZW1haW5fYXJyID0gWzBdO1xuXG4gICAgICBsZXQgZGVjaW1hbF9jb3VudCA9IDA7XG4gICAgICBsZXQgcmVtYWluX2FuZF9hX2xlbl9nYXAgPSAwO1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbWVzOyBpKyspe1xuICAgICAgICBsZXQgaXNfbGVzcyA9IHRydWU7XG4gICAgICAgIGxldCBjb3VudCA9IGNvcmUuZ2V0WmVybygpO1xuICAgICAgICBjb25zdCByZW1haW4xID0gY29yZS5tdWx0aXBsaWNhdGlvbihyZW1haW4sIFwiMTBcIik7XG4gICAgICAgIGNvbnN0IHJlbWFpbjIgPSBTdHJpbmcoYV9hcnJheS5zbGljZShpLCBpICsgMSkubGVuZ3RoID09PSAxID8gYV9hcnJheS5zbGljZShpLCBpICsgMSlbMF0gOiBcIjBcIik7XG4gICAgICAgIHJlbWFpbiA9IGNvcmUuYWRkKHJlbWFpbjEsIHJlbWFpbjIpO1xuXG4gICAgICAgIHJlbWFpbl9hbmRfYV9sZW5fZ2FwID0gcmVtYWluLmFycmF5Lmxlbmd0aCAtIGFfbGVuO1xuICAgICAgICBsZXQgcHJvZHVjdCA9IGNvcmUuZ2V0WmVybygpO1xuICAgICAgICBpZihpID09PSBhX2xlbil7XG4gICAgICAgICAgZGVjaW1hbF9pbmRleCA9IGk7XG4gICAgICAgICAgaWYoY29yZS5pc1plcm8ocmVtYWluKSl7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZW1haW5faXNfZGVjaW1hbCA9IHRydWU7XG4gICAgICAgICAgICBkZWNpbWFsX2NvdW50ID0gZGVjaW1hbF9jb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoaSA+IGFfbGVuKXtcbiAgICAgICAgICBkZWNpbWFsX2NvdW50ID0gZGVjaW1hbF9jb3VudCsrO1xuICAgICAgICAgIGlmKGNvcmUuaXNaZXJvKHJlbWFpbikpe1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWF4X2NvdW50ID0gbWF4O1xuICAgICAgICB3aGlsZShpc19sZXNzKXtcbiAgICAgICAgICBjb3VudCA9IGNvcmUuYWRkKGNvdW50LCBcIjFcIik7XG4gICAgICAgICAgaWYoY29yZS5pc0xhcmdlKGNvdW50LCBtYXhfY291bnQpKXtcbiAgICAgICAgICAgIGlzX2xlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmVfcHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgcHJvZHVjdCA9IGNvcmUubXVsdGlwbGljYXRpb24oYl9pbnQsIGNvdW50KTtcblxuICAgICAgICAgIGlmKGNvcmUuaXNFcXVhbChyZW1haW4sIHByb2R1Y3QpKXtcbiAgICAgICAgICAgIGlzX2xlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50O1xuICAgICAgICAgICAgcmVzdWx0X2Fyci5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW4gPSBjb3JlLnN1YnRyYWN0KHJlbWFpbiwgcHJvZHVjdCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoY29yZS5pc0xhcmdlKHByb2R1Y3QsIHJlbWFpbikpe1xuICAgICAgICAgICAgaXNfbGVzcyA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY29yZS5zdWJ0cmFjdChjb3VudCwgXCIxXCIpO1xuICAgICAgICAgICAgcmVzdWx0X2Fyci5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgICByZW1haW4gPSBjb3JlLnN1YnRyYWN0KHJlbWFpbiwgcHJlX3Byb2R1Y3QpO1xuXG4gICAgICAgICAgICBpZihyZW1haW5faXNfZGVjaW1hbCl7XG4gICAgICAgICAgICAgIHJlbWFpbl9hcnIucHVzaCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW1haW5fYXJyLnB1c2goLi4ucmVtYWluLmFycmF5KTtcbiAgICAgIGNvbnN0IG5ld19hcnIgPSByZXN1bHRfYXJyLmZsYXRNYXAoZSA9PiBlLmFycmF5KTtcblxuICAgICAgaWYoemVyb19nYXAgPiAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHplcm9fZ2FwOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIudW5zaGlmdCgwKTtcbiAgICAgICAgICBkZWNpbWFsX2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoZGVjaW1hbF9nYXAgPCAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IE1hdGguYWJzKGRlY2ltYWxfZ2FwKTsgaSsrKXtcbiAgICAgICAgICBuZXdfYXJyLnB1c2goMCk7XG4gICAgICAgICAgZGVjaW1hbF9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihkZWNpbWFsX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgTWF0aC5hYnMoZGVjaW1hbF9nYXApOyBpKyspe1xuICAgICAgICAgIG5ld19hcnIudW5zaGlmdCgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihyZW1haW5fYW5kX2FfbGVuX2dhcCA+IDApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVtYWluX2FuZF9hX2xlbl9nYXA7IGkrKyl7XG4gICAgICAgICAgY29uc3QgdGd0ID0gcmVtYWluX2FyclswXTtcbiAgICAgICAgICBpZih0Z3QgPT09IDApe1xuICAgICAgICAgICAgcmVtYWluX2Fyci5zaGlmdCgpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZGVjaW1hbF9pbmRleF9yZW1haW4gPSBkZWNpbWFsX2luZGV4X3JlbWFpbiAtIHJlbWFpbl9hbmRfYV9sZW5fZ2FwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZW1haW5fYXJyLnB1c2goMCk7XG4gICAgICAgIH1cbiAgICAgIH1lbHNlIGlmKHJlbWFpbl9hbmRfYV9sZW5fZ2FwIDwgMCl7XG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguYWJzKHJlbWFpbl9hbmRfYV9sZW5fZ2FwKTtcbiAgICAgICAgY29uc3QgYXJyID0gQXJyYXkobGVuKS5maWxsKDApO1xuICAgICAgICByZW1haW5fYXJyLnVuc2hpZnQoLi4uYXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYocmVtYWluX2lzX2RlY2ltYWwpe1xuICAgICAgICByZW1haW5fYXJyID0gWy4uLnJlbWFpbl9hcnJdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXdfYXJyYXk6IG5ld19hcnIsXG4gICAgICAgIGRlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXgsXG4gICAgICAgIHJlbWFpbl9hcnJheTogcmVtYWluX2FycixcbiAgICAgICAgcmVtYWluX2RlY2ltYWxfaW5kZXg6IGRlY2ltYWxfaW5kZXhfcmVtYWluLFxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBtYXhfdGltZXNfaWZfbm90X2RpdmlzaWJsZSA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMTBcIik7XG5cbiAgICBjb25zdCB7IG5ld19hcnJheSwgZGVjaW1hbF9pbmRleCwgcmVtYWluX2FycmF5LCByZW1haW5fZGVjaW1hbF9pbmRleH0gPSBjYWxjKHthOiBhXywgYjogYl8sIG1heDogbWF4X3RpbWVzX2lmX25vdF9kaXZpc2libGV9KTtcblxuXG4gICAgY29uc3QgcmVtYWluZGVyID0gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5yZW1haW5fYXJyYXldLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogcmVtYWluX2RlY2ltYWxfaW5kZXhcbiAgICB9KTtcblxuXG4gICAgY29uc3QgcXVvdGllbnQgPSBjb3JlLm1vbGROdW1BcnJheSh7XG4gICAgICBhcnJheTogWy4uLm5ld19hcnJheV0sXG4gICAgICBuZWdhdGl2ZTogbmVnYXRpdmUsXG4gICAgICBkZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ucXVvdGllbnQsXG4gICAgICByZW1haW5kZXI6cmVtYWluZGVyLFxuICAgIH1cbiAgfWNhdGNoKGVycil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgfVxuICBcbn07XG5cbmNvcmUuZGl2aWRlID0gZnVuY3Rpb24oYSwgYil7XG4gIHJldHVybiBjb3JlLmRpdmlzaW9uKGEsIGIpO1xufTtcblxuY29yZS5mbG9vciA9IGZ1bmN0aW9uKG51bSl7XG4gIHRyeXtcbiAgICBjb25zdCBuID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobnVtKTtcbiAgICBjb25zdCBpc19kZWNpbWFsID0gbi5kZWNpbWFsX2luZGV4IDwgbi5hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgZGVjID0gbi5hcnJheS5zbGljZShuLmRlY2ltYWxfaW5kZXgsIG4uYXJyYXkubGVuZ3RoKTtcbiAgICBjb25zdCBkZWNfbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGRlYy5qb2luKFwiXCIpKTtcbiAgICBpZihjb3JlLmlzWmVybyhkZWNfbikpe1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGxldCBuXyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogbi5hcnJheS5zbGljZSgwLCBuLmRlY2ltYWxfaW5kZXgpXG4gICAgfTtcbiAgICBpZihuLm5lZ2F0aXZlICYmIGlzX2RlY2ltYWwpe1xuICAgICAgbl8gPSBjb3JlLnN1YnRyYWN0KG5fLCBcIjFcIik7XG4gICAgfVxuICAgIHJldHVybiBuXztcbiAgfWNhdGNoKGVycil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc3NhZ2UsIHBhcmFtZXRlcjogbnVtfSk7XG4gIH1cbn07XG5cbmNvcmUuY2VpbCA9IGZ1bmN0aW9uKG51bSl7XG4gIHRyeXtcbiAgICBjb25zdCBuID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobnVtKTtcbiAgICBjb25zdCBpc19kZWNpbWFsID0gbi5kZWNpbWFsX2luZGV4IDwgbi5hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgZGVjID0gbi5hcnJheS5zbGljZShuLmRlY2ltYWxfaW5kZXgsIG4uYXJyYXkubGVuZ3RoKTtcbiAgICBjb25zdCBkZWNfbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGRlYy5qb2luKFwiXCIpKTtcbiAgICBpZihjb3JlLmlzWmVybyhkZWNfbikpe1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGxldCBuXyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogbi5hcnJheS5zbGljZSgwLCBuLmRlY2ltYWxfaW5kZXgpXG4gICAgfTtcbiAgICBpZighbi5uZWdhdGl2ZSAmJiBpc19kZWNpbWFsKXtcbiAgICAgIG5fID0gY29yZS5hZGQobl8sIFwiMVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5fO1xuICB9Y2F0Y2goZXJyKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG51bX0pO1xuICB9XG5cbn07XG5cblxuY29yZS5tb2R1bG8gPSBmdW5jdGlvbihhLCBiKXtcbiAgdHJ5e1xuICAgIGlmKCFhIHx8ICFiKXtcbiAgICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGFfID0gbnVsbDtcbiAgICBsZXQgYl8gPSBudWxsO1xuICAgIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgICB9ZWxzZXtcbiAgICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgICB9XG4gICAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgIH1lbHNle1xuICAgICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgICBpZihjb3JlLmlzTGFyZ2UoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIkluZmluaXR5XCI7XG4gICAgICB9ZWxzZSBpZihjb3JlLmlzU21hbGwoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIk5lZ2F0aXZlIEluZmluaXR5XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJOb3QgYSBOdW1iZXJcIjtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhhXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9wb3NpID0gY29yZS5jbG9uZShhXyk7XG4gICAgY29uc3QgYl9wb3NpID0gY29yZS5jbG9uZShiXyk7XG4gICAgYV9wb3NpLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgYl9wb3NpLm5lZ2F0aXZlID0gZmFsc2U7XG5cbiAgICBpZihjb3JlLmlzTGFyZ2UoYl9wb3NpLCBhX3Bvc2kpKXtcbiAgICAgIGNvbnN0IGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSk7XG4gICAgICByZXR1cm4gYV87XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG5lZ2F0aXZlO1xuICAgIGlmKGFfLm5lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKHthLCBifSl7XG4gICAgICBjb25zdCBkaXZpZGVkID0gY29yZS5kaXZpZGUoYSwgYik7XG4gICAgICBjb25zdCBmbG9vcmVkID0gY29yZS5mbG9vcihkaXZpZGVkKTtcbiAgICAgIGNvbnN0IG11bHRpcGxlZCA9IGNvcmUubXVsdGlwbGUoYiwgZmxvb3JlZCk7XG4gICAgICBjb25zdCByZXMgPSBjb3JlLnN1YnRyYWN0KGEsIG11bHRpcGxlZCk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH07XG5cbiAgICBjb25zdCByZXMgPSBjYWxjKHthOiB7Li4uYV8sIG5lZ2F0aXZlOiBmYWxzZX0sIGI6IHsuLi5iXywgbmVnYXRpdmU6IGZhbHNlfSB9KTtcblxuICAgIGNvbnN0IHF1b3RpZW50ID0gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnF1b3RpZW50LFxuICAgIH1cbiAgfWNhdGNoKGVycil7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgfVxuICBcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCB7Q29tcGFyZU9iamVjdCwgU3V1TnVtYmVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5jb25zdCBjb3JlOmFueSA9IHt9O1xuXG5jb3JlLm1ha2VFcnJvciA9IGZ1bmN0aW9uKG86IHttZXNzYWdlOiBzdHJpbmcsIHZhcmlhYmxlOiBhbnksIHBhcmFtZXRlcjogYW55fSk6IEVycm9ye1xuICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiAgdHJ5e1xuICAgIGNvbnN0IHYgPSBvLnZhcmlhYmxlID8gby52YXJpYWJsZS50b1N0cmluZygpIDogXCJcIjtcbiAgICBjb25zdCBwID0gby5wYXJhbWV0ZXIgPyBvLnBhcmFtZXRlci50b1N0cmluZygpIDogXCJcIjtcbiAgICBsZXQgc3RyID0gby5tZXNzYWdlO1xuICAgIGlmKHYpe1xuICAgICAgc3RyID0gYCR7c3RyfSwgJHt2ID8gdiA6IFwiXCJ9YDtcbiAgICB9XG4gICAgaWYocCl7XG4gICAgICBzdHIgPSBgJHtzdHJ9LCAke3AgPyBwIDogXCJcIn1gO1xuICAgIH1cbiAgICBlcnJvciA9IG5ldyBFcnJvcihzdHIpO1xuICB9Y2F0Y2goZTogdW5rbm93bil7XG4gICAgaWYoZSBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG4gIH1maW5hbGx5e1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuY29uc3QgaXNOdW1iZXIgPSBmdW5jdGlvbihuKTogQm9vbGVhbntcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29yZS5tb2xkTnVtQXJyYXkgPSBmdW5jdGlvbih7IGFycmF5LCBuZWdhdGl2ZSwgZGVjaW1hbF9pbmRleCB9KTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBpZighYXJyYXkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiQXJyYXkgaXMgbm90IGV4aXN0c1wiLCBwYXRhbWV0ZXI6IGFycmF5fSk7XG4gIH1cblxuICBpZih0eXBlb2YgZGVjaW1hbF9pbmRleCAhPT0gXCJudW1iZXJcIiB8fCBpc05hTihkZWNpbWFsX2luZGV4KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHsgbWVzc2FnZTogXCJkZWNpbWFsX2luZGV4IGlzIG5vdCBhIG51bWJlclwiLCBwYXRhbWV0ZXI6IGRlY2ltYWxfaW5kZXh9KTtcbiAgfVxuICB0cnl7XG4gICAgd2hpbGUoZGVjaW1hbF9pbmRleCA8IGFycmF5Lmxlbmd0aCAmJiBhcnJheVthcnJheS5sZW5ndGggLSAxXSA9PT0gMCl7XG4gICAgICBhcnJheS5wb3AoKTtcbiAgICB9XG4gICAgd2hpbGUoZGVjaW1hbF9pbmRleCA+IDEgJiYgYXJyYXlbMF0gPT09IDApe1xuICAgICAgYXJyYXkuc2hpZnQoKTtcbiAgICAgIGRlY2ltYWxfaW5kZXgtLTtcbiAgICB9XG5cbiAgICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgICAgYXJyYXkucHVzaCgwKTtcbiAgICAgIGRlY2ltYWxfaW5kZXggPSAxO1xuICAgIH1cblxuICAgIGNvbnN0IG86IFN1dU51bWJlciA9IHtcbiAgICAgIGFycmF5OiBhcnJheSxcbiAgICAgIG5lZ2F0aXZlOiAhIW5lZ2F0aXZlLFxuICAgICAgaXNfbnVtX2FycmF5OiB0cnVlLFxuICAgICAgZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleFxuICAgIH07XG4gICAgaWYoZGVjaW1hbF9pbmRleCA9PT0gMCB8fCBkZWNpbWFsX2luZGV4ID4gMCl7XG4gICAgICBvLmRlY2ltYWxfaW5kZXggPSBkZWNpbWFsX2luZGV4O1xuICAgIH1lbHNle1xuICAgICAgby5kZWNpbWFsX2luZGV4ID0gYXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiBvO1xuICB9Y2F0Y2goZTogdW5rbm93bil7XG4gICAgaWYoZSBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZS5tZXNzYWdlLCBwYXJhbWV0ZXI6IGFycmF5fSk7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IGFycmF5fSk7XG4gICAgfVxuICB9XG5cbn07XG5cbmNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsID0gZnVuY3Rpb24obik6IFN1dU51bWJlciB8IEVycm9ye1xuICBpZighbiAmJiBuICE9PSAwKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIGlzIHVuZGVmaW5lZCwgbnVsbCwgb3IgZW1wdHkuXCIsIHBhcmFtZXRlcjogbn0pO1xuICB9XG5cbiAgaWYobi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBjb3JlLmNsb25lKG4pO1xuICB9XG5cbiAgaWYodHlwZW9mIG4gPT09IFwib2JqZWN0XCIpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgaXMgb2JqZWN0LlwiLCBwYXJhbWV0ZXI6IG59KTtcbiAgfVxuXG4gIGxldCBzdHI6IHN0cmluZyA9IFN0cmluZyhuKTtcbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIHdoaWxlKHN0ciAmJiBzdHJbMF0ubWF0Y2goL14tLykpe1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9eLS8sIFwiXCIpO1xuICAgIG5lZ2F0aXZlID0gIW5lZ2F0aXZlO1xuICB9XG5cbiAgbGV0IGRlY19pbmRleDtcbiAgbGV0IHJlcyA9IHN0ci5tYXRjaCgvXFwuL2cpO1xuICBpZihyZXMgJiYgcmVzLmxlbmd0aCA+IDEpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCIyIG9yIG1vcmUgZGVjaW1hbCBwb2ludHNcIiwgcGFyYW1ldGVyOiBufSk7XG4gIH1cbiAgaWYocmVzICYmIHJlcy5sZW5ndGggPT09IDEpe1xuICAgIGNvbnN0IHJlczEgPSBzdHIubWF0Y2goL1xcLi8pO1xuICAgIGNvbnN0IGZpcnN0X2luZGV4ID0gcmVzMT8uaW5kZXhcbiAgICBkZWNfaW5kZXggPSBmaXJzdF9pbmRleFxuICAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXC4vLCBcIlwiKTtcbiAgfWVsc2V7XG4gICAgZGVjX2luZGV4ID0gc3RyLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IGFycjogbnVtYmVyW10gPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKyl7XG5cbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3RyW2ldKTtcbiAgICBpZighaXNOdW1iZXIobnVtKSl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiVGhpcyBtZXRob2QgaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIiwgcGFyYW1ldGVyOiBudW19KTtcbiAgICB9XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuXG4gIHJldHVybiBjb3JlLm1vbGROdW1BcnJheSh7IGFycmF5OiBhcnIsIG5lZ2F0aXZlOiBuZWdhdGl2ZSwgZGVjaW1hbF9pbmRleDogZGVjX2luZGV4fSk7XG5cbn07XG5cbmNvcmUubnVtQXJyYXlUb1N0cmluZyA9IGZ1bmN0aW9uKG4pOiBzdHJpbmcgfCBFcnJvciB7XG4gIGlmKCFuLmlzX251bV9hcnJheSB8fCAhbi5hcnJheSB8fCAhbi5kZWNpbWFsX2luZGV4KXtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICB0cnl7XG4gICAgY29uc3QgYXJyID0gWy4uLm4uYXJyYXldO1xuICAgIGFyci5zcGxpY2Uobi5kZWNpbWFsX2luZGV4LCAwLCBcIi5cIik7XG4gICAgbGV0IHN0ciA9IGFyci5qb2luKFwiXCIpO1xuICAgIGlmKG4ubmVnYXRpdmUpe1xuICAgICAgc3RyID0gYC0ke3N0cn1gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IG59KTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogbn0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5jb3JlLmNvbXBhcmUgPSBmdW5jdGlvbihhLCBiKTogQ29tcGFyZU9iamVjdCB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIFxuICAgIGlmKCFhIHx8ICFiKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7IG1lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgdW5kZWZpbmVkLCBudWxsLCBvciBlbXB0eS5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbzogQ29tcGFyZU9iamVjdCA9IHtcbiAgICAgIHNtYWxsOiBudWxsLFxuICAgICAgbGFyZ2U6IG51bGwsXG4gICAgICBlcXVhbDogZmFsc2VcbiAgICB9O1xuICAgIGxldCBhXyA9IGE7XG4gICAgbGV0IGJfID0gYjtcblxuICAgIGlmKCFhXy5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhXyk7XG4gICAgICBpZighYV8pe1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIWJfLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGJfKTtcbiAgICAgIGlmKCFiXyl7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFfYXJyYXk6IG51bWJlcltdID0gYV8uYXJyYXk7XG4gICAgY29uc3QgYl9hcnJheTogbnVtYmVyW10gPSBiXy5hcnJheTtcblxuICAgIGNvbnN0IGFfbGVuOiBudW1iZXIgPSBhX2FycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBiX2xlbjogbnVtYmVyID0gYl9hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgYV9zdHI6IHN0cmluZyA9IGFfYXJyYXkuam9pbihcIlwiKTtcbiAgICBjb25zdCBiX3N0cjogc3RyaW5nID0gYl9hcnJheS5qb2luKFwiXCIpO1xuXG4gICAgY29uc3QgYV9pbnRfbGVuID0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2ludF9sZW4gPSBiXy5kZWNpbWFsX2luZGV4O1xuXG4gICAgY29uc3QgYV9kZWNfbGVuID0gYV9sZW4gLSBhX2ludF9sZW47XG4gICAgY29uc3QgYl9kZWNfbGVuID0gYl9sZW4gLSBiX2ludF9sZW47XG5cbiAgICBpZihhX2xlbiA9PT0gMSAmJiBhX3N0ciA9PT0gXCIwXCIgJiYgYl9sZW4gPT09IDEgJiYgYl9zdHIgPT09IFwiMFwiKXtcbiAgICAgIG8uZXF1YWwgPSB0cnVlO1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuICAgIGlmKCFhXy5uZWdhdGl2ZSAmJiBiXy5uZWdhdGl2ZSl7XG4gICAgICBvLnNtYWxsID0gYl87XG4gICAgICBvLmxhcmdlID0gYV87XG4gICAgICByZXR1cm4gbztcbiAgICB9XG4gICAgaWYoYV8ubmVnYXRpdmUgJiYgIWJfLm5lZ2F0aXZlKXtcbiAgICAgIG8uc21hbGwgPSBhXztcbiAgICAgIG8ubGFyZ2UgPSBiXztcbiAgICAgIHJldHVybiBvO1xuICAgIH1cblxuICAgIGNvbnN0IG5lZ2F0aXZlID0gYV8ubmVnYXRpdmU7XG5cbiAgICBjb25zdCBvX2FfYiA9IHtcbiAgICAgIGxhcmdlOiBuZWdhdGl2ZSA/IGJfIDogYV8sXG4gICAgICBzbWFsbDogbmVnYXRpdmUgPyBhXyA6IGJfLFxuICAgICAgZXF1YWw6IGZhbHNlLFxuICAgIH07XG4gICAgY29uc3Qgb19iX2EgPSB7XG4gICAgICBsYXJnZTogbmVnYXRpdmUgPyBhXyA6IGJfLFxuICAgICAgc21hbGw6IG5lZ2F0aXZlID8gYl8gOiBhXyxcbiAgICAgIGVxdWFsOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZihhX2ludF9sZW4gPiBiX2ludF9sZW4pe1xuICAgICAgcmV0dXJuIG9fYV9iO1xuICAgIH1cbiAgICBcbiAgICBpZihhX2ludF9sZW4gPCBiX2ludF9sZW4pe1xuICAgICAgcmV0dXJuIG9fYl9hO1xuICAgIH1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhX2ludF9sZW47IGkrKyl7XG4gICAgICBpZihhX2FycmF5W2ldID4gYl9hcnJheVtpXSl7XG4gICAgICAgIHJldHVybiBvX2FfYjtcbiAgICAgIH1cbiAgICAgIGlmKGFfYXJyYXlbaV0gPCBiX2FycmF5W2ldKXtcbiAgICAgICAgcmV0dXJuIG9fYl9hOyAgXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVjX2xlbiA9IGFfZGVjX2xlbiA+IGJfZGVjX2xlbiA/IGFfZGVjX2xlbiA6IGJfZGVjX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZGVjX2xlbjsgaSsrKXtcbiAgICAgIGNvbnN0IGFhID0gYV9hcnJheVthX2ludF9sZW4gKyBpXSA/IGFfYXJyYXlbYV9pbnRfbGVuICsgaV0gOiAwO1xuICAgICAgY29uc3QgYmIgPSBiX2FycmF5W2JfaW50X2xlbiArIGldID8gYl9hcnJheVtiX2ludF9sZW4gKyBpXSA6IDA7XG4gICAgICBpZihhYSA+IGJiKXtcbiAgICAgICAgcmV0dXJuIG9fYV9iO1xuICAgICAgfVxuICAgICAgaWYoYWEgPCBiYil7XG4gICAgICAgIHJldHVybiBvX2JfYTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBvLmVxdWFsID0gdHJ1ZTtcbiAgICByZXR1cm4gbztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cblxuXG59O1xuXG5jb3JlLmdldExhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW4ge1xuICByZXR1cm4gY29yZS5jb21wYXJlKGEsIGIpLmxhcmdlO1xufTtcblxuY29yZS5nZXRTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvcmUuY29tcGFyZShhLCBiKS5zbWFsbDtcbn07XG5cbmNvcmUuaXNFcXVhbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgY29uc3QgcmVzID0gY29yZS5jb21wYXJlKGEsIGIpO1xuICBpZihyZXMuZXF1YWwpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvcmUuaXNTbWFsbCA9IGZ1bmN0aW9uKGEsIGIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbChjb3JlLmdldFNtYWxsKGEsIGIpLCBhKTtcbn07XG5jb3JlLmlzTGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbiB7XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoY29yZS5nZXRMYXJnZShhLCBiKSwgYSk7XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pOiBib29sZWFuIHtcbiAgaWYoIW4pe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZighbi5pc19udW1fYXJyYXkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB6ZXJvID0gY29yZS5nZXRaZXJvKCk7XG4gIHJldHVybiBjb3JlLmlzRXF1YWwoemVybywgbik7XG59O1xuXG5jb3JlLmlzT25lID0gZnVuY3Rpb24obik6IGJvb2xlYW4ge1xuICBpZighbil7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKCFuLmlzX251bV9hcnJheSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG9uZSA9IGNvcmUuZ2V0T25lKCk7XG4gIGlmKGNvcmUuaXNFcXVhbChvbmUsIG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb3JlLmdldFplcm8gPSBmdW5jdGlvbigpOiBTdXVOdW1iZXIge1xuICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIwXCIpO1xufTtcblxuY29yZS5nZXRPbmUgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXIge1xuICByZXR1cm4gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoXCIxXCIpO1xufTtcblxuY29yZS5maXhDYXJyeSA9IGZ1bmN0aW9uKGFycjogbnVtYmVyW10sIG1pbnVzOiBib29sZWFuKToge25ld19hcnJheTogbnVtYmVyW10sIG1pbnVzOiBib29sZWFufSB7XG4gIHRyeSB7XG4gICAgbGV0IG1pbnVzXyA9IG1pbnVzO1xuICAgIGZvcihsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49MDsgaS0tKXtcbiAgICAgIGNvbnN0IGVsbSA9IGFycltpXTtcbiAgICAgIGlmKGVsbSA8IDApe1xuICAgICAgICBtaW51c18gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbSA9PT0gMCl7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihtaW51c18pe1xuICAgICAgY29uc3QgY2FjaGU6IG51bWJlcltdID0gW107XG4gICAgICBhcnIuZm9yRWFjaCggKGVsbTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNhY2hlLnB1c2goLWVsbSk7XG4gICAgICB9KTtcbiAgICAgIGFyciA9IGNhY2hlO1xuICAgIH1cbiAgICBjb25zdCBuZXdfYXJyOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCBjYXJyeSA9IDA7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBsZXQgdmFsID0gTnVtYmVyKGFycltpXSArIGNhcnJ5KTtcbiAgICAgIGlmKHZhbCA+IDkpe1xuICAgICAgICBjb25zdCBhcnIxID0gU3RyaW5nKHZhbCkuc3BsaXQoXCJcIik7XG4gICAgICAgIHZhbCA9IE51bWJlcihhcnIxW2FycjEubGVuZ3RoIC0gMV0pO1xuICAgICAgICBjb25zdCBhcnIyID0gYXJyMS5zbGljZSgwLCBhcnIxLmxlbmd0aCAtIDEpO1xuICAgICAgICBjYXJyeSA9IE51bWJlcihhcnIyLmpvaW4oXCJcIikpO1xuICAgICAgfWVsc2UgaWYoIHZhbCA+PSAwICYmIHZhbCA8PSA5KXtcbiAgICAgICAgY2FycnkgPSAwO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHZhbCA9IDEwICsgdmFsO1xuICAgICAgICBjYXJyeSA9IC0xO1xuXG4gICAgICB9XG4gICAgICBuZXdfYXJyLnB1c2godmFsKTtcbiAgICB9XG4gICAgaWYoY2FycnkgIT09IDApe1xuICAgICAgbmV3X2Fyci5wdXNoKGNhcnJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmV3X2FycmF5OiBuZXdfYXJyLFxuICAgICAgbWludXM6IG1pbnVzX1xuICAgIH07XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FyciwgbWludXNdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2FyciwgbWludXNdfSk7XG4gICAgfVxuICB9XG5cblxufTtcblxuY29yZS5jbG9uZSA9IGZ1bmN0aW9uKG46IGFueSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgdHJ5e1xuICAgIGlmKCFuKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgaXMgbm90IGV4aXN0c1wiLCBwYXJhbWV0ZXI6IG59KTtcbiAgICB9XG4gICAgaWYoIW4uaXNfbnVtX2FycmF5KXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgaXMgbm90IGNvbXBhdGlibGVcIiwgcGFyYW1ldGVyOiBufSk7XG4gICAgfVxuICAgIGNvbnN0IG8gPSB7XG4gICAgICAuLi5uLFxuICAgICAgYXJyYXk6IFsuLi5uLmFycmF5XSxcbiAgICB9O1xuICAgIHJldHVybiBvO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFtuXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtuXX0pO1xuICAgIH1cbiAgfVxufTtcblxuY29yZS5hZGRfYW5kX3N1YnRyYWN0ID0gZnVuY3Rpb24oYSwgYiwgbW9kZSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgaWYoIWEgfHwgIWIpe1xuICAgIGlmKGEgIT09IDAgJiYgYiAhPT0gMCl7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbXVzdCBiZSBhIE51bWJlciBvciBhIFN0cmluZy5cIiwgcGFyYW1ldGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG4gIGxldCBwbHVzO1xuICBpZighbW9kZSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlcnMgbW9kZSBpcyByZXF1aXJlZFwiLCBwYXJhbWV0ZXI6IFthLCBiLCBtb2RlXX0pOztcbiAgfWVsc2UgaWYobW9kZSA9PT0gXCIrXCIpe1xuICAgIHBsdXMgPSB0cnVlO1xuICB9ZWxzZSBpZihtb2RlID09PSBcIi1cIil7XG4gICAgcGx1cyA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwibW9kZSBtdXN0IGJlICcrJyBvciAnLScuXCIsIHBhcmFtZXRlcjogbW9kZX0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsZXQgYV86IFN1dU51bWJlciA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgICAgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgIH1lbHNle1xuICAgICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICAgIH1cbiAgICBpZihiLmlzX251bV9hcnJheSl7XG4gICAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gICAgfWVsc2V7XG4gICAgICBiXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGIgPyBiIDogMCk7XG4gICAgfVxuXG4gICAgY29uc3QgYV9hcnIgPSBhXy5hcnJheTtcbiAgICBjb25zdCBiX2FyciA9IGJfLmFycmF5O1xuXG5cbiAgICBjb25zdCBhX2lzX3plcm86IGJvb2xlYW4gPSBjb3JlLmlzWmVybyhhXyk7XG4gICAgY29uc3QgYl9pc196ZXJvOiBib29sZWFuID0gY29yZS5pc1plcm8oYl8pO1xuXG4gICAgaWYoYV9pc196ZXJvICYmIGJfaXNfemVybyl7XG4gICAgICByZXR1cm4gYV87XG4gICAgfWVsc2UgaWYoYV9pc196ZXJvKXtcbiAgICAgIGlmKCFwbHVzKXtcbiAgICAgICAgYl8ubmVnYXRpdmUgPSAhYl8ubmVnYXRpdmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYl87XG4gICAgfWVsc2UgaWYoYl9pc196ZXJvKXtcbiAgICAgIHJldHVybiBhXztcbiAgICB9XG5cbiAgICBjb25zdCBhX2RlY19sZW5ndGg6IG51bWJlciA9IGFfLmFycmF5Lmxlbmd0aCAtIGFfLmRlY2ltYWxfaW5kZXg7XG4gICAgY29uc3QgYl9kZWNfbGVuZ3RoOiBudW1iZXIgPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuXG4gICAgY29uc3QgZGVjX2dhcDogbnVtYmVyID0gYV9kZWNfbGVuZ3RoIC0gYl9kZWNfbGVuZ3RoO1xuXG4gICAgaWYoZGVjX2dhcCA+IDApe1xuICAgICAgYl9hcnIucHVzaCguLi5BcnJheShkZWNfZ2FwKS5maWxsKDApKTtcbiAgICB9ZWxzZSBpZihkZWNfZ2FwIDwgMCl7XG4gICAgICBhX2Fyci5wdXNoKC4uLkFycmF5KE1hdGguYWJzKGRlY19nYXApKS5maWxsKDApKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGIsIHBsdXN9KTogeyBuZXdfYXJyYXk6IG51bWJlcltdLCBtaW51czogYm9vbGVhbiB9IHtcbiAgICAgIGNvbnN0IGFycjogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCBsZW4gPSBhLmFycmF5Lmxlbmd0aDtcbiAgICAgIGlmKGEuYXJyYXkubGVuZ3RoIDwgYi5hcnJheS5sZW5ndGgpe1xuICAgICAgICBsZW4gPSBiLmFycmF5Lmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFycl9hOiBudW1iZXJbXSA9IGEuYXJyYXk7XG4gICAgICBjb25zdCBhcnJfYjogbnVtYmVyW10gPSBiLmFycmF5O1xuICAgICAgY29uc3QgYV9vbmU6IG51bWJlciA9IGEubmVnYXRpdmUgPyAtMSA6IDE7XG4gICAgICBjb25zdCBiX29uZTogbnVtYmVyID0gYi5uZWdhdGl2ZSA/IC0xIDogMTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgIGNvbnN0IGFhID0gYXJyX2FbaV0gPyBhcnJfYVtpXSAqIGFfb25lIDogMDtcbiAgICAgICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldICogYl9vbmUgOiAwO1xuICAgICAgICBsZXQgcmVzID0gcGx1cyA/IGFhICsgYmIgOiBhYSAtIGJiO1xuICAgICAgICBhcnIucHVzaChyZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvcmUuZml4Q2FycnkoYXJyKTtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXksIG1pbnVzIH0gPSBjYWxjKHtcbiAgICAgIGE6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5hX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYV8ubmVnYXRpdmUsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBhcnJheTogWy4uLmJfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBiXy5uZWdhdGl2ZVxuICAgICAgfSxcbiAgICAgIHBsdXM6IHBsdXNcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlY19sZW5ndGggPSBhX2RlY19sZW5ndGggPj0gYl9kZWNfbGVuZ3RoID8gYV9kZWNfbGVuZ3RoIDogYl9kZWNfbGVuZ3RoO1xuICAgIGNvbnN0IG5ld19pbnRfbGVuZ3RoID0gbmV3X2FycmF5Lmxlbmd0aCAtIGRlY19sZW5ndGg7XG5cbiAgICBjb25zdCBuZXdfZGVjaW1hbF9pbmRleCA9IG5ld19pbnRfbGVuZ3RoO1xuXG4gICAgcmV0dXJuIGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ubmV3X2FycmF5XS5yZXZlcnNlKCksXG4gICAgICBuZWdhdGl2ZTogbWludXMgPyB0cnVlIDogZmFsc2UsXG4gICAgICBkZWNpbWFsX2luZGV4OiBuZXdfZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gdGhpcy5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxuXG59O1xuXG5jb3JlLmFkZCA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLmFkZF9hbmRfc3VidHJhY3QoYSwgYiwgXCIrXCIpO1xufTtcblxuY29yZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHJldHVybiBjb3JlLmFkZF9hbmRfc3VidHJhY3QoYSwgYiwgXCItXCIpO1xufTtcblxuXG5jb3JlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9yIHtcblxuICBpZighYSB8fCAhYil7XG4gICAgaWYoYSAhPT0gMCAmJiBiICE9PSAwKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXJzIGFyZSBub3QgZXhpc3RzXCIsIHBhcmFtZXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IGFfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgbGV0IGJfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgaWYoYS5pc19udW1fYXJyYXkpe1xuICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgfWVsc2V7XG4gICAgYV8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChhID8gYSA6IDApO1xuICB9XG4gIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICBiXyA9IGNvcmUuY2xvbmUoYik7XG4gIH1lbHNle1xuICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgfVxuXG4gIGNvbnN0IGFfYXJyID0gYV8uYXJyYXk7XG4gIGNvbnN0IGJfYXJyID0gYl8uYXJyYXk7XG5cbiAgaWYoY29yZS5pc1plcm8oYV8pIHx8IGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKFwiMFwiKTtcbiAgfVxuXG4gIGlmKGNvcmUuaXNPbmUoYV8pKXtcbiAgICByZXR1cm4gYl87XG4gIH1cblxuICBpZihjb3JlLmlzT25lKGJfKSl7XG4gICAgcmV0dXJuIGFfO1xuICB9XG5cbiAgdHJ5e1xuXG4gICAgY29uc3QgYV9uZWdhdGl2ZSA9IGFfLm5lZ2F0aXZlO1xuICAgIGNvbnN0IGJfbmVnYXRpdmUgPSBiXy5uZWdhdGl2ZTtcbiAgICBsZXQgbmVnYXRpdmU7XG4gICAgaWYoYV9uZWdhdGl2ZSAmJiBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfWVsc2UgaWYoYV9uZWdhdGl2ZSB8fCBiX25lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgYV9kZWNfbGVuZ3RoID0gYV8uYXJyYXkubGVuZ3RoIC0gYV8uZGVjaW1hbF9pbmRleDtcbiAgICBjb25zdCBiX2RlY19sZW5ndGggPSBiXy5hcnJheS5sZW5ndGggLSBiXy5kZWNpbWFsX2luZGV4O1xuICAgIGNvbnN0IGRlY19sZW5ndGggPSBhX2RlY19sZW5ndGggKyBiX2RlY19sZW5ndGg7XG5cbiAgICBjb25zdCBjYWxjID0gZnVuY3Rpb24oe2EsIGJ9KXtcbiAgICAgIGNvbnN0IGFycmF5OiBudW1iZXJbXSA9IFtdO1xuICAgICAgY29uc3QgYXJyX2EgPSBhLmFycmF5O1xuICAgICAgY29uc3QgYXJyX2IgPSBiLmFycmF5O1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgYWEgPSBhcnJfYVtpXSA/IGFycl9hW2ldIDogMDtcbiAgICAgICAgY29uc3QgYXJyID0gbmV3IEFycmF5KGkpO1xuICAgICAgICBhcnIuZmlsbCgwLCAwLCBpKTtcblxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIGNvbnN0IGJiID0gYXJyX2Jbal0gPyBhcnJfYltqXSA6IDA7XG4gICAgICAgICAgbGV0IHJlcyA9IGFhICogYmI7XG4gICAgICAgICAgXG4gICAgICAgICAgYXJyLnB1c2gocmVzKTtcblxuICAgICAgICAgIGNvbnN0IHRndF9pbmRleCA9IGkgKyBqO1xuICAgICAgICAgIGxldCB0Z3Q6IG51bWJlciA9IGFycmF5W3RndF9pbmRleF07XG4gICAgICAgICAgaWYoIXRndCl7XG4gICAgICAgICAgICB0Z3QgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuZXdfdGd0ID0gdGd0ICsgcmVzO1xuICAgICAgICAgIGFycmF5W3RndF9pbmRleF0gPSBuZXdfdGd0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY29yZS5maXhDYXJyeShhcnJheSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHsgbmV3X2FycmF5IH0gPSBjYWxjKHtcbiAgICAgIGE6IHtcbiAgICAgICAgYXJyYXk6IFsuLi5hX2Fycl0ucmV2ZXJzZSgpLFxuICAgICAgICBuZWdhdGl2ZTogYV8ubmVnYXRpdmUsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBhcnJheTogWy4uLmJfYXJyXS5yZXZlcnNlKCksXG4gICAgICAgIG5lZ2F0aXZlOiBiXy5uZWdhdGl2ZVxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld19kZWNpbWFsX2luZGV4ID0gbmV3X2FycmF5Lmxlbmd0aCAtIGRlY19sZW5ndGg7XG5cbiAgICByZXR1cm4gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLnJldmVyc2UoKSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IG5ld19kZWNpbWFsX2luZGV4XG4gICAgfSk7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG5cbn07XG5cbmNvcmUubXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICByZXR1cm4gY29yZS5tdWx0aXBsaWNhdGlvbihhLCBiKTtcbn07XG5cbmNvcmUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBjb25zdCBuXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICAgIGxldCBzdHIgPSBcIjAuXCI7XG4gICAgY29uc3QgbGVuID0gbl8uYXJyYXkubGVuZ3RoIC0gbl8uZGVjaW1hbF9pbmRleDtcbiAgICBpZihsZW4gPiAwKXtcbiAgICAgIGZvcihsZXQgaSA9IG5fLmRlY2ltYWxfaW5kZXg7IGkgPD0gbGVuOyBpKyspe1xuICAgICAgICBjb25zdCBzID0gU3RyaW5nKG5fLmFycmF5W2ldKTtcbiAgICAgICAgc3RyID0gc3RyICsgcztcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHN0ciA9IHN0ciArIFwiMFwiO1xuICAgIH1cbiAgICBjb25zdCBudW0gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChzdHIpO1xuICAgIHJldHVybiBudW07XG4gIH1jYXRjaChlcnIpe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogbn0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IG59KTtcbiAgICB9XG4gIH1cbn07XG5cblxuY29yZS5kaXZpc2lvbiA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB8IHN0cmluZyB7XG5cbiAgdHJ5IHtcbiAgICBpZighYSB8fCAhYil7XG4gICAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbm90IGV4aXN0c1wiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhXzogU3V1TnVtYmVyID0gY29yZS5nZXRaZXJvKCk7XG4gICAgbGV0IGJfOiBTdXVOdW1iZXIgPSBjb3JlLmdldFplcm8oKTtcbiAgICBpZihhLmlzX251bV9hcnJheSl7XG4gICAgICBhXyA9IGNvcmUuY2xvbmUoYSk7XG4gICAgfWVsc2V7XG4gICAgICBhXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGEgPyBhIDogMCk7XG4gICAgfVxuICAgIGlmKGIuaXNfbnVtX2FycmF5KXtcbiAgICAgIGJfID0gY29yZS5jbG9uZShiKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYiA/IGIgOiAwKTtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhiXykpe1xuICAgICAgaWYoY29yZS5pc0xhcmdlKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJJbmZpbml0eVwiO1xuICAgICAgfWVsc2UgaWYoY29yZS5pc1NtYWxsKGFfLCBcIjBcIikpe1xuICAgICAgICByZXR1cm4gXCJOZWdhdGl2ZSBJbmZpbml0eVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiTm90IGEgTnVtYmVyXCI7XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc1plcm8oYV8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvcmUuZ2V0WmVybygpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmKGNvcmUuaXNPbmUoYl8pKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFfLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzRXF1YWwoYV8sIGJfKSl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb3JlLmdldE9uZSgpLFxuICAgICAgICByZW1haW5kZXI6IGNvcmUuZ2V0WmVybygpLFxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFfbmVnYXRpdmUgPSBhXy5uZWdhdGl2ZTtcbiAgICBjb25zdCBiX25lZ2F0aXZlID0gYl8ubmVnYXRpdmU7XG5cbiAgICBpZihhXy5uZWdhdGl2ZSl7XG4gICAgICBhXy5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGJfLm5lZ2F0aXZlKXtcbiAgICAgIGJfLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IG5lZ2F0aXZlO1xuICAgIGlmKGFfbmVnYXRpdmUgJiYgYl9uZWdhdGl2ZSl7XG4gICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1lbHNlIGlmKGFfbmVnYXRpdmUgfHwgYl9uZWdhdGl2ZSl7XG4gICAgICBuZWdhdGl2ZSA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGMgPSBmdW5jdGlvbih7YSwgYiwgbWF4fSl7XG4gICAgICBjb25zdCByZXN1bHRfYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IHJlbWFpbiA9IGNvcmUuZ2V0WmVybygpO1xuICAgICAgY29uc3QgYV8gPSBjb3JlLmNsb25lKGEpO1xuICAgICAgY29uc3QgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgICAgbGV0IGRlY2ltYWxfaW5kZXggPSBhLmRlY2ltYWxfaW5kZXg7XG4gICAgICBsZXQgZGVjaW1hbF9pbmRleF9yZW1haW4gPSBkZWNpbWFsX2luZGV4O1xuXG4gICAgICBsZXQgYV9pbnQgPSBjb3JlLmNsb25lKGFfKTtcbiAgICAgIGFfaW50LmRlY2ltYWxfaW5kZXggPSBhX2ludC5hcnJheS5sZW5ndGg7XG4gICAgICBsZXQgYV96ZXJvX2xlbmd0aCA9IDA7XG4gICAgICBjb25zdCBhX3plcm9fcmVzID0gYV8uYXJyYXkuam9pbihcIlwiKS5tYXRjaCgvXjArLyk7XG4gICAgICBpZihhX3plcm9fcmVzICYmIGFfemVyb19yZXNbMF0pe1xuICAgICAgICBhX3plcm9fbGVuZ3RoID0gYV96ZXJvX3Jlc1swXS5sZW5ndGg7XG4gICAgICAgIGFfaW50ID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYV9pbnQuYXJyYXkuc2xpY2UoYV96ZXJvX2xlbmd0aCwgYV9pbnQuYXJyYXkubGVuZ3RoKS5qb2luKFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGJfaW50ID0gY29yZS5jbG9uZShiXyk7XG4gICAgICBiX2ludC5kZWNpbWFsX2luZGV4ID0gYl9pbnQuYXJyYXkubGVuZ3RoO1xuICAgICAgbGV0IGJfemVyb19sZW5ndGggPSAwO1xuICAgICAgY29uc3QgYl96ZXJvX3JlcyA9IGJfaW50LmFycmF5LmpvaW4oXCJcIikubWF0Y2goL14wKy8pO1xuICAgICAgaWYoYl96ZXJvX3JlcyAmJiBiX3plcm9fcmVzWzBdKXtcbiAgICAgICAgYl96ZXJvX2xlbmd0aCA9IGJfemVyb19yZXNbMF0ubGVuZ3RoO1xuICAgICAgICBiX2ludCA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGJfaW50LmFycmF5LnNsaWNlKGJfemVyb19sZW5ndGgsIGJfaW50LmFycmF5Lmxlbmd0aCkuam9pbihcIlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHplcm9fZ2FwID0gYV96ZXJvX2xlbmd0aCAtIGJfemVyb19sZW5ndGg7XG4gICAgICBjb25zdCBhX2FycmF5ID0gWy4uLmFfaW50LmFycmF5XTtcbiAgICAgIGNvbnN0IGFfZGVjaW1hbF9sZW5ndGggPSBhXy5hcnJheS5sZW5ndGggLSBhXy5kZWNpbWFsX2luZGV4O1xuICAgICAgY29uc3QgYl9kZWNpbWFsX2xlbmd0aCA9IGJfLmFycmF5Lmxlbmd0aCAtIGJfLmRlY2ltYWxfaW5kZXg7XG4gICAgICBjb25zdCBkZWNpbWFsX2dhcCA9IGFfZGVjaW1hbF9sZW5ndGggLSBiX2RlY2ltYWxfbGVuZ3RoO1xuXG4gICAgICBjb25zdCB0aW1lcyA9IE51bWJlcihjb3JlLmFkZChhX2ludC5hcnJheS5sZW5ndGgsIG1heCkuYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgICAgIGNvbnN0IGFfbGVuID0gYV9pbnQuYXJyYXkubGVuZ3RoO1xuICAgICAgbGV0IHJlbWFpbl9pc19kZWNpbWFsID0gZmFsc2U7XG4gICAgICBsZXQgcmVtYWluX2FyciA9IFswXTtcblxuICAgICAgbGV0IGRlY2ltYWxfY291bnQgPSAwO1xuICAgICAgbGV0IHJlbWFpbl9hbmRfYV9sZW5fZ2FwID0gMDtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aW1lczsgaSsrKXtcbiAgICAgICAgbGV0IGlzX2xlc3MgPSB0cnVlO1xuICAgICAgICBsZXQgY291bnQgPSBjb3JlLmdldFplcm8oKTtcbiAgICAgICAgY29uc3QgcmVtYWluMSA9IGNvcmUubXVsdGlwbGljYXRpb24ocmVtYWluLCBcIjEwXCIpO1xuICAgICAgICBjb25zdCByZW1haW4yID0gU3RyaW5nKGFfYXJyYXkuc2xpY2UoaSwgaSArIDEpLmxlbmd0aCA9PT0gMSA/IGFfYXJyYXkuc2xpY2UoaSwgaSArIDEpWzBdIDogXCIwXCIpO1xuICAgICAgICByZW1haW4gPSBjb3JlLmFkZChyZW1haW4xLCByZW1haW4yKTtcblxuICAgICAgICByZW1haW5fYW5kX2FfbGVuX2dhcCA9IHJlbWFpbi5hcnJheS5sZW5ndGggLSBhX2xlbjtcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBjb3JlLmdldFplcm8oKTtcbiAgICAgICAgaWYoaSA9PT0gYV9sZW4pe1xuICAgICAgICAgIGRlY2ltYWxfaW5kZXggPSBpO1xuICAgICAgICAgIGlmKGNvcmUuaXNaZXJvKHJlbWFpbikpe1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgcmVtYWluX2lzX2RlY2ltYWwgPSB0cnVlO1xuICAgICAgICAgICAgZGVjaW1hbF9jb3VudCA9IGRlY2ltYWxfY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKGkgPiBhX2xlbil7XG4gICAgICAgICAgZGVjaW1hbF9jb3VudCA9IGRlY2ltYWxfY291bnQrKztcbiAgICAgICAgICBpZihjb3JlLmlzWmVybyhyZW1haW4pKXtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1heF9jb3VudCA9IG1heDtcbiAgICAgICAgd2hpbGUoaXNfbGVzcyl7XG4gICAgICAgICAgY291bnQgPSBjb3JlLmFkZChjb3VudCwgXCIxXCIpO1xuICAgICAgICAgIGlmKGNvcmUuaXNMYXJnZShjb3VudCwgbWF4X2NvdW50KSl7XG4gICAgICAgICAgICBpc19sZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcHJlX3Byb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgIHByb2R1Y3QgPSBjb3JlLm11bHRpcGxpY2F0aW9uKGJfaW50LCBjb3VudCk7XG5cbiAgICAgICAgICBpZihjb3JlLmlzRXF1YWwocmVtYWluLCBwcm9kdWN0KSl7XG4gICAgICAgICAgICBpc19sZXNzID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudDtcbiAgICAgICAgICAgIHJlc3VsdF9hcnIucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgcmVtYWluID0gY29yZS5zdWJ0cmFjdChyZW1haW4sIHByb2R1Y3QpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGNvcmUuaXNMYXJnZShwcm9kdWN0LCByZW1haW4pKXtcbiAgICAgICAgICAgIGlzX2xlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvcmUuc3VidHJhY3QoY291bnQsIFwiMVwiKTtcbiAgICAgICAgICAgIHJlc3VsdF9hcnIucHVzaChyZXN1bHQpO1xuICAgICAgICAgICAgcmVtYWluID0gY29yZS5zdWJ0cmFjdChyZW1haW4sIHByZV9wcm9kdWN0KTtcblxuICAgICAgICAgICAgaWYocmVtYWluX2lzX2RlY2ltYWwpe1xuICAgICAgICAgICAgICByZW1haW5fYXJyLnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVtYWluX2Fyci5wdXNoKC4uLnJlbWFpbi5hcnJheSk7XG4gICAgICBjb25zdCBuZXdfYXJyID0gcmVzdWx0X2Fyci5mbGF0TWFwKGUgPT4gZS5hcnJheSk7XG5cbiAgICAgIGlmKHplcm9fZ2FwID4gMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB6ZXJvX2dhcDsgaSsrKXtcbiAgICAgICAgICBuZXdfYXJyLnVuc2hpZnQoMCk7XG4gICAgICAgICAgZGVjaW1hbF9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGRlY2ltYWxfZ2FwIDwgMCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBNYXRoLmFicyhkZWNpbWFsX2dhcCk7IGkrKyl7XG4gICAgICAgICAgbmV3X2Fyci5wdXNoKDApO1xuICAgICAgICAgIGRlY2ltYWxfaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfWVsc2UgaWYoZGVjaW1hbF9nYXAgPiAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IE1hdGguYWJzKGRlY2ltYWxfZ2FwKTsgaSsrKXtcbiAgICAgICAgICBuZXdfYXJyLnVuc2hpZnQoMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYocmVtYWluX2FuZF9hX2xlbl9nYXAgPiAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlbWFpbl9hbmRfYV9sZW5fZ2FwOyBpKyspe1xuICAgICAgICAgIGNvbnN0IHRndCA9IHJlbWFpbl9hcnJbMF07XG4gICAgICAgICAgaWYodGd0ID09PSAwKXtcbiAgICAgICAgICAgIHJlbWFpbl9hcnIuc2hpZnQoKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGRlY2ltYWxfaW5kZXhfcmVtYWluID0gZGVjaW1hbF9pbmRleF9yZW1haW4gLSByZW1haW5fYW5kX2FfbGVuX2dhcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVtYWluX2Fyci5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICB9ZWxzZSBpZihyZW1haW5fYW5kX2FfbGVuX2dhcCA8IDApe1xuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLmFicyhyZW1haW5fYW5kX2FfbGVuX2dhcCk7XG4gICAgICAgIGNvbnN0IGFyciA9IEFycmF5KGxlbikuZmlsbCgwKTtcbiAgICAgICAgcmVtYWluX2Fyci51bnNoaWZ0KC4uLmFycik7XG4gICAgICB9XG5cbiAgICAgIGlmKHJlbWFpbl9pc19kZWNpbWFsKXtcbiAgICAgICAgcmVtYWluX2FyciA9IFsuLi5yZW1haW5fYXJyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV3X2FycmF5OiBuZXdfYXJyLFxuICAgICAgICBkZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4LFxuICAgICAgICByZW1haW5fYXJyYXk6IHJlbWFpbl9hcnIsXG4gICAgICAgIHJlbWFpbl9kZWNpbWFsX2luZGV4OiBkZWNpbWFsX2luZGV4X3JlbWFpbixcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWF4X3RpbWVzX2lmX25vdF9kaXZpc2libGUgPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChcIjEwXCIpO1xuXG4gICAgY29uc3QgeyBuZXdfYXJyYXksIGRlY2ltYWxfaW5kZXgsIHJlbWFpbl9hcnJheSwgcmVtYWluX2RlY2ltYWxfaW5kZXh9ID0gY2FsYyh7YTogYV8sIGI6IGJfLCBtYXg6IG1heF90aW1lc19pZl9ub3RfZGl2aXNpYmxlfSk7XG5cblxuICAgIGNvbnN0IHJlbWFpbmRlciA9IGNvcmUubW9sZE51bUFycmF5KHtcbiAgICAgIGFycmF5OiBbLi4ucmVtYWluX2FycmF5XSxcbiAgICAgIG5lZ2F0aXZlOiBuZWdhdGl2ZSxcbiAgICAgIGRlY2ltYWxfaW5kZXg6IHJlbWFpbl9kZWNpbWFsX2luZGV4XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IHF1b3RpZW50ID0gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgYXJyYXk6IFsuLi5uZXdfYXJyYXldLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgICAgZGVjaW1hbF9pbmRleDogZGVjaW1hbF9pbmRleFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnF1b3RpZW50LFxuICAgICAgcmVtYWluZGVyOnJlbWFpbmRlcixcbiAgICB9XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiB0aGlzLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG4gIFxufTtcblxuY29yZS5kaXZpZGUgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICByZXR1cm4gY29yZS5kaXZpc2lvbihhLCBiKTtcbn07XG5cbmNvcmUuZmxvb3IgPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIHRyeXtcbiAgICBjb25zdCBuID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobnVtKTtcbiAgICBjb25zdCBpc19kZWNpbWFsID0gbi5kZWNpbWFsX2luZGV4IDwgbi5hcnJheS5sZW5ndGg7XG4gICAgY29uc3QgZGVjID0gbi5hcnJheS5zbGljZShuLmRlY2ltYWxfaW5kZXgsIG4uYXJyYXkubGVuZ3RoKTtcbiAgICBjb25zdCBkZWNfbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKGRlYy5qb2luKFwiXCIpKTtcbiAgICBpZihjb3JlLmlzWmVybyhkZWNfbikpe1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICAgIGxldCBuXyA9IHtcbiAgICAgIC4uLm4sXG4gICAgICBhcnJheTogbi5hcnJheS5zbGljZSgwLCBuLmRlY2ltYWxfaW5kZXgpXG4gICAgfTtcbiAgICBpZihuLm5lZ2F0aXZlICYmIGlzX2RlY2ltYWwpe1xuICAgICAgbl8gPSBjb3JlLnN1YnRyYWN0KG5fLCBcIjFcIik7XG4gICAgfVxuICAgIHJldHVybiBuXztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBudW19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBudW19KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvcmUuY2VpbCA9IGZ1bmN0aW9uKG51bTogU3V1TnVtYmVyKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICB0cnl7XG4gICAgY29uc3QgbiA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG51bSk7XG4gICAgY29uc3QgaXNfZGVjaW1hbCA9IG4uZGVjaW1hbF9pbmRleCA8IG4uYXJyYXkubGVuZ3RoO1xuICAgIGNvbnN0IGRlYyA9IG4uYXJyYXkuc2xpY2Uobi5kZWNpbWFsX2luZGV4LCBuLmFycmF5Lmxlbmd0aCk7XG4gICAgY29uc3QgZGVjX24gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChkZWMuam9pbihcIlwiKSk7XG4gICAgaWYoY29yZS5pc1plcm8oZGVjX24pKXtcbiAgICAgIHJldHVybiBuO1xuICAgIH1cbiAgICBsZXQgbl8gPSB7XG4gICAgICAuLi5uLFxuICAgICAgYXJyYXk6IG4uYXJyYXkuc2xpY2UoMCwgbi5kZWNpbWFsX2luZGV4KVxuICAgIH07XG4gICAgaWYoIW4ubmVnYXRpdmUgJiYgaXNfZGVjaW1hbCl7XG4gICAgICBuXyA9IGNvcmUuYWRkKG5fLCBcIjFcIik7XG4gICAgfVxuICAgIHJldHVybiBuXztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBudW19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBudW19KTtcbiAgICB9XG4gIH1cblxufTtcblxuXG5jb3JlLm1vZHVsbyA9IGZ1bmN0aW9uKGEsIGIpOiBTdXVOdW1iZXIgfCBFcnJvciB8IHN0cmluZyB7XG4gIHRyeXtcbiAgICBpZighYSB8fCAhYil7XG4gICAgICBpZihhICE9PSAwICYmIGIgIT09IDApe1xuICAgICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVycyBhcmUgbm90IGV4aXN0c1wiLCBwYXJhbWV0ZXI6IFthLCBiXX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhXyA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGxldCBiXyA9IGNvcmUuZ2V0WmVybygpO1xuICAgIGlmKGEuaXNfbnVtX2FycmF5KXtcbiAgICAgIGFfID0gY29yZS5jbG9uZShhKTtcbiAgICB9ZWxzZXtcbiAgICAgIGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSA/IGEgOiAwKTtcbiAgICB9XG4gICAgaWYoYi5pc19udW1fYXJyYXkpe1xuICAgICAgYl8gPSBjb3JlLmNsb25lKGIpO1xuICAgIH1lbHNle1xuICAgICAgYl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChiID8gYiA6IDApO1xuICAgIH1cblxuICAgIGlmKGNvcmUuaXNaZXJvKGJfKSl7XG4gICAgICBpZihjb3JlLmlzTGFyZ2UoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIkluZmluaXR5XCI7XG4gICAgICB9ZWxzZSBpZihjb3JlLmlzU21hbGwoYV8sIFwiMFwiKSl7XG4gICAgICAgIHJldHVybiBcIk5lZ2F0aXZlIEluZmluaXR5XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJOb3QgYSBOdW1iZXJcIjtcbiAgICB9XG5cbiAgICBpZihjb3JlLmlzWmVybyhhXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYV9wb3NpID0gY29yZS5jbG9uZShhXyk7XG4gICAgY29uc3QgYl9wb3NpID0gY29yZS5jbG9uZShiXyk7XG4gICAgYV9wb3NpLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgYl9wb3NpLm5lZ2F0aXZlID0gZmFsc2U7XG5cbiAgICBpZihjb3JlLmlzTGFyZ2UoYl9wb3NpLCBhX3Bvc2kpKXtcbiAgICAgIGNvbnN0IGFfID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwoYSk7XG4gICAgICByZXR1cm4gYV87XG4gICAgfVxuXG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY29yZS5nZXRaZXJvKCksXG4gICAgICAgIHJlbWFpbmRlcjogY29yZS5nZXRaZXJvKCksXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG5lZ2F0aXZlO1xuICAgIGlmKGFfLm5lZ2F0aXZlKXtcbiAgICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKHthLCBifSl7XG4gICAgICBjb25zdCBkaXZpZGVkID0gY29yZS5kaXZpZGUoYSwgYik7XG4gICAgICBjb25zdCBmbG9vcmVkID0gY29yZS5mbG9vcihkaXZpZGVkKTtcbiAgICAgIGNvbnN0IG11bHRpcGxlZCA9IGNvcmUubXVsdGlwbGUoYiwgZmxvb3JlZCk7XG4gICAgICBjb25zdCByZXMgPSBjb3JlLnN1YnRyYWN0KGEsIG11bHRpcGxlZCk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH07XG5cbiAgICBjb25zdCByZXMgPSBjYWxjKHthOiB7Li4uYV8sIG5lZ2F0aXZlOiBmYWxzZX0sIGI6IHsuLi5iXywgbmVnYXRpdmU6IGZhbHNlfSB9KTtcblxuICAgIGNvbnN0IHF1b3RpZW50ID0gY29yZS5tb2xkTnVtQXJyYXkoe1xuICAgICAgLi4ucmVzLFxuICAgICAgbmVnYXRpdmU6IG5lZ2F0aXZlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnF1b3RpZW50LFxuICAgIH1cbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIHRoaXMubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYl19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYSwgYl19KTtcbiAgICB9XG4gIH1cbiAgXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JldHNcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi91dGlsc3RzXCI7XG5cbmNvbnN0IG1hcDogb2JqZWN0ID0ge1xuICBjb21tb25NdWx0aXBsZToge1xuICAgIGphOiBcIuWFrOWAjeaVsFwiXG4gIH0sXG4gIGdyZWF0ZXN0Q29tbW9uRGl2aXNvcjoge1xuICAgIGphOiBcIuacgOWkp+WFrOe0hOaVsFwiXG4gIH0sXG4gIGNvbW1vbkRpdmlzb3JzOiB7XG4gICAgamE6IFwi5YWs57SE5pWwXCJcbiAgfSxcbiAgbWFrZUZpYm9uYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OV44Kj44Oc44OK44OD44OB5pWw5YiXXCJcbiAgfSxcbiAgbWFrZUx1Y2FTZXF1ZW5jZToge1xuICAgIGphOiBcIuODquODpeOCq+aVsOWIl1wiXG4gIH0sXG4gIG1ha2VUcmlib25hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4jjg6rjg5zjg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBtYWtlVGV0cmFuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OG44OI44Op44OK44OD44OB5pWw5YiXXCJcbiAgfSxcbiAgbWFrZVBlbnRhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODmuODs+OCv+ODiuODg+ODgeaVsOWIl1wiXG4gIH0sXG4gIG1ha2VIZXhhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuODmOOCreOCteODiuODg+ODgeaVsOWIl1wiXG4gIH0sXG4gIG1ha2VIZXB0YW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg5jjg5fjgr/jg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBtYWtlT2N0YW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjgqrjgq/jgr/jg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBtYWtlTm9uYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg47jg4rjg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBtYWtlRGVjYW5hY2NpU2VxdWVuY2U6IHtcbiAgICBqYTogXCLjg4fjgqvjg4rjg4Pjg4HmlbDliJdcIlxuICB9LFxuICBtYWtlVW5kZWNhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuOCpuODs+ODh+OCq+ODiuODg+ODgeaVsOWIl1wiXG4gIH0sXG4gIG1ha2VEb2RlY2FuYWNjaVNlcXVlbmNlOiB7XG4gICAgamE6IFwi44OJ44OH44Kr44OK44OD44OB5pWw5YiXXCJcbiAgfSxcbiAgbWFrZUljb3NhbmFjY2lTZXF1ZW5jZToge1xuICAgIGphOiBcIuOCpOOCs+OCteODiuODg+ODgeaVsOWIl1wiXG4gIH0sXG4gIHN1bW1hdGlvbjoge1xuICAgIGphOiBcIue3j+WSjFwiXG4gIH0sXG4gIGluZmluaXRlUHJvZHVjdDoge1xuICAgIGphOiBcIue3j+S5ly/nt4/nqY1cIlxuICB9LFxuICBkaWdpdFN1bToge1xuICAgIGphOiBcIuaVsOWtl+WSjC/lkITmoYHjga7nt4/lkoxcIlxuICB9LFxuICBtYWtlVHJpYW5nbGVOdW1iZXI6IHtcbiAgICBqYTogXCLkuInop5LmlbBcIlxuICB9LFxuICBtYWtlUHJvbmljTnVtYmVyOiB7XG4gICAgamE6IFwi55+p5b2i5pWwXCJcbiAgfSxcbiAgZmFjdG9yaWFsOiB7XG4gICAgamE6IFwi6ZqO5LmXXCJcbiAgfSxcbiAgbW9kdWxvOiB7XG4gICAgamE6IFwi5Ymw5L2Z5ryU566XXCJcbiAgfSxcbiAgZXhwb25lbnRpYXRlOiB7XG4gICAgamE6IFwi5Yaq77yI44G544GN77yJ5LmXXCJcbiAgfVxufTtcblxuY29uc3Qgd2hhdElzID0gZnVuY3Rpb24oe25hbWU9XCJcIiwgbGFuZz1cImphXCJ9OiB7IG5hbWU6IHN0cmluZywgbGFuZzogc3RyaW5nfSk6IHN0cmluZ3tcbiAgaWYoIW5hbWUpe1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgbGV0IHRhcmdldCA9IHV0aWxzW25hbWVdO1xuICBpZighdGFyZ2V0KXtcbiAgICB0YXJnZXQgPSBjb3JlW25hbWVdO1xuICB9XG5cbiAgY29uc3QgZXhpc3RzID0gdGFyZ2V0ID8gdHJ1ZSA6IGZhbHNlO1xuICBpZighZXhpc3RzKXtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IG1hcFtuYW1lXTtcbiAgaWYocmVzICYmIHJlc1tsYW5nXSl7XG4gICAgcmV0dXJuIHJlc1tsYW5nXTtcbiAgfVxuICBjb25zdCBvdGhlcl9sYW5nID0gT2JqZWN0LmtleXMocmVzKVswXTtcbiAgaWYob3RoZXJfbGFuZyl7XG4gICAgcmV0dXJuIHJlc1tvdGhlcl9sYW5nXTtcbiAgfVxuXG4gIHJldHVybiBcIlwiO1xuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdoYXRJczsiLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JldHNcIjtcblxuaW1wb3J0IHsgU3V1TnVtYmVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5jb25zdCB1dGlsczphbnkgPSB7fTtcblxudXRpbHMudHMgPSAoKSA9PiB7cmV0dXJuIFwidHNcIn07XG5cbnV0aWxzLmdldE51bWJlciA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbn07XG5cbnV0aWxzLmNvcHkgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBjb25zdCBjID0gY29yZS5jbG9uZShuKTtcbiAgaWYoIWMpe1xuICAgIGNvbnN0IHMgPSBjb3JlLm51bUFycmF5VG9TdHJpbmcobik7XG4gICAgcmV0dXJuIGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKHMpO1xuICB9XG4gIHJldHVybiBjO1xufTtcblxudXRpbHMuZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXRMYXJnZShhLCBiKTtcbn07XG5cbnV0aWxzLmdldFNtYWxsID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0U21hbGwoYSwgYik7XG59O1xuXG51dGlscy5pc1NtYWxsID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzU21hbGwoYSwgYik7XG59XG51dGlscy5pc0xhcmdlID0gZnVuY3Rpb24oYSwgYik6IGJvb2xlYW57XG4gIHJldHVybiBjb3JlLmlzTGFyZ2UoYSwgYik7XG59XG5cbnV0aWxzLmlzRXF1YWwgPSBmdW5jdGlvbihhLCBiKTogYm9vbGVhbntcbiAgcmV0dXJuIGNvcmUuaXNFcXVhbChhLCBiKTtcbn1cblxudXRpbHMuZ2V0WmVybyA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0WmVybygpO1xufTtcblxudXRpbHMuZ2V0T25lID0gZnVuY3Rpb24oKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbn07XG5cbnV0aWxzLmlzWmVybyA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc1plcm8obik7XG59XG51dGlscy5pc09uZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICByZXR1cm4gY29yZS5pc09uZShuKTtcbn1cblxudXRpbHMuc3F1YXJlID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUubXVsdGlwbGljYXRpb24obiwgbik7XG59O1xuXG51dGlscy5nZXRBYnNvbHV0ZSA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIGNvbnN0IG51bSA9IHV0aWxzLmdldE51bWJlcihuKTtcbiAgbGV0IGNsb25lID0gY29yZS5jbG9uZShudW0pO1xuICBpZihjbG9uZS5uZWdhdGl2ZSl7XG4gICAgY2xvbmUgPSB1dGlscy5tYWtlUG9zaXRpdmUoY2xvbmUpO1xuICB9XG4gIHJldHVybiBjbG9uZTtcbn07XG5cbnV0aWxzLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKGJhc2UsIGV4cG9uZW50KTogU3V1TnVtYmVye1xuICBjb25zdCBiID0gdXRpbHMuZ2V0TnVtYmVyKGJhc2UpO1xuICBjb25zdCBleHAgPSB1dGlscy5nZXROdW1iZXIoZXhwb25lbnQpO1xuXG4gIGlmKHV0aWxzLmluY2x1ZGVEZWNpbWFsKGV4cCkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJOb3Qgc3VwcG9ydGVkIGlmIGV4cG9uZW50IGlzIGRlY2ltYWxcIiwgcGFyYW1ldGVyOiBbZXhwb25lbnRdfSk7XG4gIH1cblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKGV4cCkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJFeHBvbmVudCBtdXN0IGJlIGludGVnZXJcIiwgcGFyYW1ldGVyOiBbZXhwb25lbnRdfSk7XG4gIH1cbiAgXG4gIGlmKHV0aWxzLmlzWmVybyhleHApKXtcbiAgICByZXR1cm4gY29yZS5nZXRPbmUoKTtcbiAgfVxuICBpZih1dGlscy5pc09uZShleHApKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGxldCBtdWx0aSA9IHRydWU7XG4gIGlmKGNvcmUuaXNTbWFsbChleHAsIGNvcmUuZ2V0WmVybygpKSl7XG4gICAgbXVsdGkgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBjb3VudCA9IGNvcmUuZ2V0T25lKCk7XG4gIGNvbnN0IGV4cF9hYnMgPSB1dGlscy5nZXRBYnNvbHV0ZShleHApO1xuICBjb25zdCBnZXRCb29sID0gKGNvdW50KSA9PiB7XG4gICAgcmV0dXJuIGNvcmUuaXNTbWFsbChjb3VudCwgZXhwX2Ficyk7XG4gIH1cbiAgbGV0IHJlcyA9IGI7XG4gIGxldCBib29sID0gZ2V0Qm9vbChjb3VudCk7XG4gIHdoaWxlKGJvb2wpe1xuICAgIGlmKG11bHRpKXtcbiAgICAgIHJlcyA9IGNvcmUubXVsdGlwbGUocmVzLCBiKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJlcyA9IGNvcmUuZGl2aWRlKHJlcywgYik7XG4gICAgfVxuICAgIGNvdW50ID0gY29yZS5hZGQoY291bnQsIFwiMVwiKTtcbiAgICBib29sID0gZ2V0Qm9vbChjb3VudCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbnV0aWxzLmdldEludGVnZXIgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICBsZXQgc3RyID0gXCJcIjtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG4uZGVjaW1hbF9pbmRleDsgaSsrKXtcbiAgICBjb25zdCBzID0gU3RyaW5nKG4uYXJyYXlbaV0pO1xuICAgIHN0ciA9IHN0ciArIHM7XG4gIH1cbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKHN0cik7XG4gIHJldHVybiBudW07XG59O1xuXG51dGlscy5nZXREZWNpbWFsID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIGNvcmUuZ2V0RGVjaW1hbChuKTtcbn07XG5cbnV0aWxzLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBjb25zdCBkZWNpbWFsID0gdXRpbHMuZ2V0RGVjaW1hbChuKTtcbiAgY29uc3QgaXNfemVybyA9IHV0aWxzLmlzWmVybyhkZWNpbWFsKTtcbiAgaWYoaXNfemVybyAmJiAhbi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudXRpbHMuaW5jbHVkZURlY2ltYWwgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwobik7XG4gIGNvbnN0IGlzX3plcm8gPSB1dGlscy5pc1plcm8oZGVjaW1hbCk7XG4gIGlmKGlzX3plcm8pe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnV0aWxzLmlzTmVnYXRpdmUgPSBmdW5jdGlvbihuKTogYm9vbGVhbntcbiAgY29uc3Qgbl8gPSBjb3JlLm51bVRvQXJyYXlXaXRoRGVjaW1hbChuKTtcbiAgcmV0dXJuIG5fLm5lZ2F0aXZlO1xufTtcblxudXRpbHMuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBjb25zdCBuXyA9IGNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsKG4pO1xuICByZXR1cm4gIW5fLm5lZ2F0aXZlO1xufTtcblxudXRpbHMubmVnYXRlID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgY29uc3QgbnVtID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIGlmKG51bSl7XG4gICAgbnVtLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gbnVtO1xufTtcblxudXRpbHMubWFrZVBvc2l0aXZlID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgY29uc3QgbnVtID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIGlmKG51bSl7XG4gICAgbnVtLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn07XG5cbnV0aWxzLmdldE5lZ2F0aXZlTnVtYmVyID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgcmV0dXJuIHV0aWxzLm5lZ2F0ZShuKTtcbn07XG5cbnV0aWxzLmdldFBvc2l0aXZlTnVtYmVyID0gZnVuY3Rpb24obik6IFN1dU51bWJlcntcbiAgY29uc3QgbnVtID0gY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwobik7XG4gIGlmKG51bSl7XG4gICAgbnVtLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG51bTtcbn07XG5cbnV0aWxzLmdldE5leHQgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVye1xuICByZXR1cm4gY29yZS5hZGQobiwgXCIxXCIpO1xufTtcblxudXRpbHMuZ2V0UHJldiA9IGZ1bmN0aW9uKG4pOiBTdXVOdW1iZXJ7XG4gIHJldHVybiBjb3JlLnN1YnRyYWN0KG4sIFwiMVwiKTtcbn07XG5cbnV0aWxzLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgZGVjaW1hbCA9IHV0aWxzLmdldERlY2ltYWwobik7XG4gIGlmKHV0aWxzLmlzRXF1YWwoZGVjaW1hbCwgXCIwXCIpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG5cbn07XG5cblxudXRpbHMuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24obik6IGJvb2xlYW57XG4gIGlmKHV0aWxzLmlzWmVybyhuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZighdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCByZXMgPSBjb3JlLmRpdmlzaW9uKG4sIFwiMlwiKTtcblxuICBjb25zdCBkZWNpbWFsID0gdXRpbHMuZ2V0RGVjaW1hbChyZXMpO1xuICBjb25zdCBpc196ZXJvID0gdXRpbHMuaXNaZXJvKGRlY2ltYWwpO1xuICBpZihpc196ZXJvKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG51dGlscy5pc09kZE51bWJlciA9IGZ1bmN0aW9uKG4pOiBib29sZWFue1xuICBpZih1dGlscy5pc1plcm8obikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmKCF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IGNvcmUuZGl2aXNpb24obiwgXCIyXCIpO1xuXG4gIGNvbnN0IGRlY2ltYWwgPSB1dGlscy5nZXREZWNpbWFsKHJlcyk7XG4gIGNvbnN0IGJvb2wgPSBjb3JlLmlzRXF1YWwoXCIwLjVcIiwgZGVjaW1hbCk7XG4gIGlmKGJvb2wpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxudXRpbHMuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbihuKTogU3V1TnVtYmVyW10gfCBFcnJvcntcbiAgaWYoIW4gJiYgbiAhPT0gMCl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIGludGVnZXJcIiwgcGFyYW1ldGVyOiBbbl19KTtcbiAgfVxuICBjb25zdCBhcnI6IFN1dU51bWJlcltdID0gW107XG4gIGNvbnN0IG51bTogU3V1TnVtYmVyID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xuXG4gIGlmKCFudW0pe1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgaWYoY29yZS5pc1plcm8obnVtKSl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBpZih1dGlscy5pc05hdHVyYWxOdW1iZXIobnVtKSl7XG4gICAgaWYoY29yZS5pc09uZShudW0pKXtcbiAgICAgIGFyci5wdXNoKG51bSlcbiAgICB9ZWxzZXtcbiAgICAgIGZvcihsZXQgaSA9IGNvcmUuZ2V0T25lKCk7IGNvcmUuaXNFcXVhbChudW0sIGkpIHx8IGNvcmUuaXNMYXJnZShudW0sIGkpOyBpID0gY29yZS5hZGQoaSwgXCIxXCIpKXtcbiAgICAgICAgY29uc3QgcmVzPSBjb3JlLmRpdmlzaW9uKG51bSwgaSk7XG4gICAgICAgIGlmKCF1dGlscy5pc05hdHVyYWxOdW1iZXIocmVzKSl7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtYWluZGVyID0gcmVzLnJlbWFpbmRlcjtcbiAgICAgICAgaWYoY29yZS5pc1plcm8ocmVtYWluZGVyKSl7XG4gICAgICAgICAgYXJyLnB1c2godXRpbHMuZ2V0TnVtYmVyKGkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxudXRpbHMuY29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihhLCBiKTogU3V1TnVtYmVyW10gfCBFcnJvcntcbiAgY29uc3QgYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICBpZighYSAmJiBhICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmKCFiICYmIGIgIT09IDApe1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICB0cnl7XG4gICAgY29uc3QgYV86IFN1dU51bWJlciA9IHV0aWxzLmdldE51bWJlcihhKTtcbiAgICBjb25zdCBiXzogU3V1TnVtYmVyID0gdXRpbHMuZ2V0TnVtYmVyKGIpO1xuICAgIFxuICAgIGNvbnN0IGFfZGl2aXNvcnM6IFN1dU51bWJlcltdID0gdXRpbHMuZ2V0RGl2aXNvcnMoYV8pO1xuICAgIGlmKGNvcmUuaXNFcXVhbChhXywgYl8pKXtcbiAgICAgIHJldHVybiBhX2Rpdmlzb3JzO1xuICAgIH1cbiAgICBjb25zdCBiX2Rpdmlzb3JzOiBTdXVOdW1iZXJbXSA9IHV0aWxzLmdldERpdmlzb3JzKGJfKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYV9kaXZpc29ycy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBhX246IFN1dU51bWJlciA9IGFfZGl2aXNvcnNbaV07XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgYl9kaXZpc29ycy5sZW5ndGg7IGorKyl7XG4gICAgICAgIGNvbnN0IGJfbjogU3V1TnVtYmVyID0gYl9kaXZpc29yc1tqXTtcbiAgICAgICAgaWYoY29yZS5pc0VxdWFsKGFfbiwgYl9uKSl7XG4gICAgICAgICAgYXJyLnB1c2goYV9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthLCBiXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFthLCBiXX0pO1xuICAgIH1cbiAgfVxufTtcblxudXRpbHMuZ3JlYXRlc3RDb21tb25EaXZpc29yID0gZnVuY3Rpb24oYSwgYik6IFN1dU51bWJlciB8IEVycm9ye1xuICB0cnl7XG4gICAgY29uc3QgYXJyID0gdXRpbHMuY29tbW9uRGl2aXNvcnMoYSwgYik7XG4gICAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2EsIGJdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGJdfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5jb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIsIGxpbWl0KTogU3V1TnVtYmVyW10gfCBFcnJvcntcblxuICBjb25zdCBsaW1pdF9sZW5ndGggPSBsaW1pdCA/IGxpbWl0IDogMTA7XG4gIGNvbnN0IGFycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgaWYoIWEgJiYgYSAhPT0gMCl7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBpZighYiAmJiBiICE9PSAwKXtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgdHJ5e1xuICAgIGNvbnN0IGFfID0gdXRpbHMuZ2V0TnVtYmVyKGEpO1xuICAgIGNvbnN0IGJfID0gdXRpbHMuZ2V0TnVtYmVyKGIpO1xuXG4gICAgaWYoY29yZS5pc0VxdWFsKGFfLCBiXykpe1xuICAgICAgYXJyLnB1c2goYV8pO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBjb25zdCBhX2FycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgICBjb25zdCBiX2FycjogU3V1TnVtYmVyW10gPSBbXTtcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGxpbWl0X2xlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGFfbnVtID0gY29yZS5tdWx0aXBsZShhXywgaSk7XG4gICAgICBhX2Fyci5wdXNoKGFfbnVtKTtcbiAgICB9XG4gICAgZm9yKGxldCBqID0gMTsgaiA8PSBsaW1pdF9sZW5ndGg7IGorKyl7XG4gICAgICBjb25zdCBiX251bSA9IGNvcmUubXVsdGlwbGUoYl8sIGopO1xuICAgICAgYl9hcnIucHVzaChiX251bSk7XG4gICAgfVxuXG4gICAgYV9hcnIuZm9yRWFjaChhX24gPT4ge1xuICAgICAgY29uc3QgdGd0ID0gYl9hcnIuZmluZChiX24gPT4gY29yZS5pc0VxdWFsKGFfbiwgYl9uKSk7XG4gICAgICBpZih0Z3Qpe1xuICAgICAgICBhcnIucHVzaCh0Z3QpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYSwgYiwgbGltaXRdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2EsIGIsIGxpbWl0XX0pO1xuICAgIH1cbiAgfVxufTtcblxudXRpbHMubGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIsIGxpbWl0KTogU3V1TnVtYmVyIHtcbiAgY29uc3QgYXJyOiBTdXVOdW1iZXJbXSA9IHV0aWxzLmNvbW1vbk11bHRpcGxlKGEsIGIsIGxpbWl0KTtcbiAgcmV0dXJuIGFyclswXTtcbn07XG5cblxuY29uc3QgZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uID0gZnVuY3Rpb24oe2FycmF5LCBsaW1pdH0pOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcblxuICBjb25zdCBtYXggPSBsaW1pdCA/IGxpbWl0IDogMTAwO1xuXG4gIGNvbnN0IGl0ZW1zX2xlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyYXkpe1xuICAgIGlmKGFycmF5Lmxlbmd0aCA+PSBtYXgpe1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICB0cnl7XG4gICAgICBsZXQgcmVzID0gdXRpbHMuZ2V0TnVtYmVyKFwiMFwiKTtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpdGVtc19sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gYXJyYXkubGVuZ3RoIC0gKGl0ZW1zX2xlbmd0aCAtIGkpO1xuICAgICAgICBjb25zdCBudW0gPSBhcnJheVtpbmRleF07XG4gICAgICAgIHJlcyA9IGNvcmUuYWRkKHJlcywgbnVtKTtcbiAgICAgIH1cbiAgICAgIGFycmF5LnB1c2gocmVzKTtcbiAgICAgIHJldHVybiBmdW5jKGFycmF5KTtcbiAgICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbYXJyYXksIGxpbWl0XX0pXG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYXJyYXksIGxpbWl0XX0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyYXkpO1xufTtcblxuY29uc3QgbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSA9IGZ1bmN0aW9uKHsgZmlyc3Q9XCIwXCIsIGxhc3Q9XCIxXCIsIGxlbmd0aD0yIH0pOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgbGVuID0gbGVuZ3RoO1xuICBjb25zdCBhID0gdXRpbHMuZ2V0TnVtYmVyKGZpcnN0KTtcbiAgY29uc3QgYiA9IHV0aWxzLmdldE51bWJlcihsYXN0KTtcbiAgY29uc3QgYXJyOiBTdXVOdW1iZXJbXSA9IFtdO1xuICB0cnl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIGxldCB0Z3QgPSBhO1xuICAgICAgaWYoaSA9PT0gKGxlbiAtMSkpe1xuICAgICAgICB0Z3QgPSBiO1xuICAgICAgfVxuICAgICAgYXJyLnB1c2godGd0KTtcbiAgICB9XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2ZpcnN0LCBsYXN0LCBsZW5ndGhdfSlcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJ1bmtub3duIGVycm9yXCIsIHBhcmFtYXRlcjogW2ZpcnN0LCBsYXN0LCBsZW5ndGhdfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG51dGlscy5tYWtlRmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihmaXJzdD1cIjBcIiwgbGFzdD1cIjFcIik6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdCwgbGFzdCwgbGVuZ3RoOiAyfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VUcmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAzfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VUZXRyYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA0fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VQZW50YW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA1fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VIZXhhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDZ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUhlcHRhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDd9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZU9jdGFuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogOH0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlTm9uYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiA5fSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VEZWNhbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIwXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDEwfSk7XG4gIHJldHVybiBmaWJvbmFjY2lSZWNjdXJlbmNlUmVsYXRpb24oe2FycmF5OiBhcnIsIGxpbWl0OiAxMDB9KTtcbn07XG5cbnV0aWxzLm1ha2VVbmRlY2FuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMTF9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZURvZGVjYW5hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpOiBTdXVOdW1iZXJbXSB8IEVycm9yIHtcbiAgY29uc3QgYXJyID0gbWFrZUZpYm9uYWNjaUluaXRpYWxBcnJheSh7Zmlyc3Q6IFwiMFwiLCBsYXN0OiBcIjFcIiwgbGVuZ3RoOiAxMn0pO1xuICByZXR1cm4gZmlib25hY2NpUmVjY3VyZW5jZVJlbGF0aW9uKHthcnJheTogYXJyLCBsaW1pdDogMTAwfSk7XG59O1xuXG51dGlscy5tYWtlSWNvc2FuYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKTogU3V1TnVtYmVyW10gfCBFcnJvciB7XG4gIGNvbnN0IGFyciA9IG1ha2VGaWJvbmFjY2lJbml0aWFsQXJyYXkoe2ZpcnN0OiBcIjBcIiwgbGFzdDogXCIxXCIsIGxlbmd0aDogMjB9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMubWFrZUx1Y2FTZXF1ZW5jZSA9IGZ1bmN0aW9uKCk6IFN1dU51bWJlcltdIHwgRXJyb3Ige1xuICBjb25zdCBhcnIgPSBtYWtlRmlib25hY2NpSW5pdGlhbEFycmF5KHtmaXJzdDogXCIyXCIsIGxhc3Q6IFwiMVwiLCBsZW5ndGg6IDJ9KTtcbiAgcmV0dXJuIGZpYm9uYWNjaVJlY2N1cmVuY2VSZWxhdGlvbih7YXJyYXk6IGFyciwgbGltaXQ6IDEwMH0pO1xufTtcblxudXRpbHMuc3VtbWF0aW9uID0gZnVuY3Rpb24oYXJyYXkpOiBTdXVOdW1iZXIgfCBFcnJvciB7XG4gIGlmKCFhcnJheSB8fCAhQXJyYXkuaXNBcnJheShhcnJheSkpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBBcnJheS5cIiwgcGFyYW1ldGVyOiBbYXJyYXldfSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiYXJyYXkgbGVuZ3RoIGlzIHplcm9cIiwgcGFyYW1ldGVyOiBbYXJyYXldfSk7XG4gIH1cbiAgbGV0IHN1bSA9IGNvcmUuZ2V0WmVybygpO1xuICBpZihBcnJheS5pc0FycmF5KGFycmF5KSl7XG4gICAgdHJ5e1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgc3VtID0gY29yZS5hZGQoc3VtLCBhcnJheVtpXSk7XG4gICAgICB9XG4gICAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW2FycmF5XX0pXG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYXJyYXldfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG51dGlscy5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbihhcnJheSk6IFN1dU51bWJlciB8IEVycm9ye1xuICBpZighYXJyYXkgfHwgIUFycmF5LmlzQXJyYXkoYXJyYXkpKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgQXJyYXkuXCIsIHBhcmFtZXRlcjogW2FycmF5XX0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHV0aWxzLmdldE51bWJlcihhcnJheVswXSk7XG4gIH1cbiAgbGV0IHJlcyA9IGFycmF5WzBdO1xuICB0cnl7XG4gICAgZm9yKGxldCBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIHJlcyA9IGNvcmUubXVsdGlwbGUocmVzLCBhcnJheVtpXSk7XG4gICAgfVxuICB9Y2F0Y2goZXJyOiB1bmtub3duKXtcbiAgICBpZihlcnIgaW5zdGFuY2VvZiBFcnJvcil7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IGVyci5tZXNzYWdlLCBwYXJhbWV0ZXI6IFthcnJheV19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbYXJyYXldfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG51dGlscy5kaWdpdFN1bSA9IGZ1bmN0aW9uKG51bSk6IFN1dU51bWJlciB8IEVycm9yIHtcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuICBpZighbiB8fCAhQXJyYXkuaXNBcnJheShuLmFycmF5KSl7XG4gICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcIlBhcmFtZXRlciBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci5cIiwgcGFyYW1ldGVyOiBbbnVtXX0pO1xuICB9XG4gIGxldCByZXMgPSBjb3JlLmdldFplcm8oKTtcbiAgaWYoY29yZS5pc1plcm8obikpe1xuICAgIHJldHVybiByZXM7XG4gIH1cbiAgdHJ5e1xuICAgIG4uYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHJlcyA9IGNvcmUuYWRkKHJlcywgaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5tYWtlVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbihudW0pOiBTdXVOdW1iZXIgfCBFcnJvcntcbiAgY29uc3QgbiA9IHV0aWxzLmdldE51bWJlcihudW0pO1xuICBpZihjb3JlLmlzWmVybyhuKSB8fCB1dGlscy5pc05lZ2F0aXZlKG4pIHx8ICF1dGlscy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogXCJQYXJhbWV0ZXIgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuXCIsIHBhcmFtZXRlcjogW251bV19KTtcbiAgfVxuICBcbiAgY29uc3QgcmVzMSA9IGNvcmUubXVsdGlwbGUobiwgY29yZS5hZGQobiwgXCIxXCIpKTtcbiAgY29uc3QgcmVzMiA9IGNvcmUuZGl2aWRlKHJlczEsIFwiMlwiKTtcbiAgcmV0dXJuIHJlczI7XG59O1xuXG51dGlscy5tYWtlUHJvbmljTnVtYmVyID0gZnVuY3Rpb24obnVtKTogU3V1TnVtYmVyIHwgRXJyb3Ige1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pKXtcbiAgICByZXR1cm4gY29yZS5nZXRaZXJvKCk7XG4gIH1cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShuKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cbiAgdHJ5e1xuICAgIGNvbnN0ICByZXMgPSBjb3JlLm11bHRpcGxlKG4sIGNvcmUuYWRkKG4sIFwiMVwiKSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfWNhdGNoKGVycjogdW5rbm93bil7XG4gICAgaWYoZXJyIGluc3RhbmNlb2YgRXJyb3Ipe1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBlcnIubWVzc2FnZSwgcGFyYW1ldGVyOiBbbnVtXX0pXG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwidW5rbm93biBlcnJvclwiLCBwYXJhbWF0ZXI6IFtudW1dfSk7XG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mYWN0b3JpYWwgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBuID0gdXRpbHMuZ2V0TnVtYmVyKG51bSk7XG4gIGlmKGNvcmUuaXNaZXJvKG4pIHx8IGNvcmUuaXNPbmUobikpe1xuICAgIHJldHVybiBjb3JlLmdldE9uZSgpO1xuICB9XG5cbiAgaWYodXRpbHMuaXNOZWdhdGl2ZShuKSB8fCAhdXRpbHMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gY29yZS5tYWtlRXJyb3Ioe21lc3NhZ2U6IFwiUGFyYW1ldGVyIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLlwiLCBwYXJhbWV0ZXI6IFtudW1dfSk7XG4gIH1cblxuICBsZXQgZ28gPSB0cnVlO1xuICBsZXQgdGVtcCA9IG47XG4gIGxldCBjdXJyZW50ID0gbjtcbiAgY29uc3QgYXJyID0gW3RlbXBdO1xuICB0cnl7XG4gICAgd2hpbGUoZ28pe1xuICAgICAgY29uc3QgdGFyZ2V0ID0gY29yZS5zdWJ0cmFjdChjdXJyZW50LCBcIjFcIik7XG4gICAgICBhcnIucHVzaCh0YXJnZXQpO1xuICAgICAgY3VycmVudCA9IHRhcmdldDtcbiAgICAgIGlmKGNvcmUuaXNTbWFsbChjdXJyZW50LCBcIjJcIikpe1xuICAgICAgICBnbyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdXRpbHMuaW5maW5pdGVQcm9kdWN0KGFycik7XG4gIH1jYXRjaChlcnI6IHVua25vd24pe1xuICAgIGlmKGVyciBpbnN0YW5jZW9mIEVycm9yKXtcbiAgICAgIHJldHVybiBjb3JlLm1ha2VFcnJvcih7bWVzc2FnZTogZXJyLm1lc3NhZ2UsIHBhcmFtZXRlcjogW251bV19KVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGNvcmUubWFrZUVycm9yKHttZXNzYWdlOiBcInVua25vd24gZXJyb3JcIiwgcGFyYW1hdGVyOiBbbnVtXX0pO1xuICAgIH1cbiAgfVxufTtcblxuXG51dGlscy5tYWtlTWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcblxuICBjb25zdCBtYXhfID0gdXRpbHMuZ2V0TnVtYmVyKDI1KTtcblxuICBpZighbWF4IHx8IGNvcmUuaXNMYXJnZShtYXgsIG1heF8pKXtcbiAgICBtYXggPSBtYXhfO1xuICB9XG5cbiAgbWF4ID0gY29yZS5hZGQobWF4LCB1dGlscy5nZXROdW1iZXIoXCIxXCIpKTtcbiAgY29uc3QgdHdvID0gdXRpbHMuZ2V0TnVtYmVyKDIpO1xuICBjb25zdCBhcnI6U3V1TnVtYmVyW10gID0gW107XG4gIGxldCBjdXJyZW50ID0gdXRpbHMuZ2V0TnVtYmVyKDApO1xuICBsZXQgZXggPSB1dGlscy5nZXROdW1iZXIoMSk7XG4gIFxuICB3aGlsZShjb3JlLmlzU21hbGwoZXgsIG1heCkpe1xuICAgIGN1cnJlbnQgPSB1dGlscy5leHBvbmVudGlhdGUodHdvLGV4KTtcbiAgICBjdXJyZW50ID0gY29yZS5zdWJ0cmFjdChjdXJyZW50LCB1dGlscy5nZXROdW1iZXIoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gY29yZS5hZGQoZXgsIHV0aWxzLmdldE51bWJlcigxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbnV0aWxzLnRyaWFsRGl2aXNpb24gPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gdXRpbHMuZ2V0TnVtYmVyKG4pO1xufTtcblxudXRpbHMuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSB1dGlscy5nZXROdW1iZXIobik7XG4gIGlmKHV0aWxzLmlzWmVybyhudW0pIHx8IHV0aWxzLmlzT25lKG51bSkpe1xuICAgIGNvbnNvbGUubG9nKFwiMVwiKVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih1dGlscy5pc0VxdWFsKG51bSwgXCIyXCIpKXtcbiAgICBjb25zb2xlLmxvZyhcIjJcIilcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKHV0aWxzLmlzRXZlbk51bWJlcihudW0pKXtcbiAgICBjb25zb2xlLmxvZyhcIjNcIilcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pbmNsdWRlRGVjaW1hbChudW0pKXtcbiAgICBjb25zb2xlLmxvZyhcIjRcIilcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZih1dGlscy5pc1NtYWxsKG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMFwiKSkpe1xuICAgIGNvbnNvbGUubG9nKFwiNVwiKVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHByZXYgPSBjb3JlLnN1YnRyYWN0KG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSk7XG4gIGNvbnN0IHN0YXJ0ID0gY29yZS5kaXZpc2lvbihwcmV2LCB1dGlscy5nZXROdW1iZXIoXCIyXCIpKTtcblxuICBsZXQgY3VycmVudCA9IHN0YXJ0O1xuXG4gIGxldCBpc19wcmltZSA9IHRydWU7XG5cbiAgY29uc29sZS5sb2coXCJhXCIsbnVtLCBjdXJyZW50KVxuXG4gIHdoaWxlKGlzX3ByaW1lICYmIGNvcmUuaXNMYXJnZShjdXJyZW50LCB1dGlscy5nZXROdW1iZXIoXCIyXCIpKSl7XG5cbiAgICBjb25zdCByZXMgPSBjb3JlLm1vZHVsbyhudW0sIGN1cnJlbnQpO1xuICAgIGNvbnNvbGUubG9nKFwiYWFcIixudW0sIGN1cnJlbnQsIHJlcylcbiAgICBpZih1dGlscy5pc1plcm8ocmVzKSl7XG4gICAgICBpc19wcmltZSA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGN1cnJlbnQgPSBjb3JlLnN1YnRyYWN0KGN1cnJlbnQsIHV0aWxzLmdldE51bWJlcihcIjFcIikpO1xuICB9XG5cbiAgcmV0dXJuIGlzX3ByaW1lO1xuXG59O1xuXG51dGlscy5tYWtlUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgY29uc3QgbWF4XyA9IHV0aWxzLmdldE51bWJlcigyNSk7XG4gIGlmKCFtYXggfHwgY29yZS5pc0xhcmdlKG1heCwgbWF4Xykpe1xuICAgIG1heCA9IG1heF87XG4gIH1cbiAgY29uc29sZS5sb2coXCJhYWFcIilcbiAgbWF4ID0gY29yZS5hZGQobWF4LCB1dGlscy5nZXROdW1iZXIoXCIxXCIpKTtcbiAgbGV0IGxlbmd0aCA9IHV0aWxzLmdldFplcm8oKTtcbiAgY29uc3QgYXJyOlN1dU51bWJlcltdID0gW107XG4gIGxldCBudW0gPSB1dGlscy5nZXROdW1iZXIoXCIxXCIpO1xuXG4gIHdoaWxlKGNvcmUuaXNTbWFsbChsZW5ndGgsIG1heCkpe1xuICAgIGNvbnNvbGUubG9nKFwiaXNTbWFsbFwiLCBjb3JlLmlzU21hbGwobGVuZ3RoLCBtYXgpKVxuICAgIGNvbnNvbGUubG9nKFwibGVuZ3RoXCIsIGxlbmd0aClcbiAgICBjb25zb2xlLmxvZyhcIm1heFwiLCBtYXgpXG4gICAgY29uc29sZS5sb2coXCJudW1cIiwgbnVtKVxuXG4gICAgaWYodXRpbHMuaXNQcmltZU51bWJlcihudW0pKXtcbiAgICAgIFxuICAgICAgYXJyLnB1c2gobnVtKTtcbiAgICAgIGxlbmd0aCA9IHV0aWxzLmdldE51bWJlcihhcnIubGVuZ3RoKTtcbiAgICB9XG4gICAgLy8gaWYodXRpbHMuaXNFcXVhbChudW0sIHV0aWxzLmdldE51bWJlcihcIjEwMFwiKSkpe1xuICAgICAgLy8gYnJlYWs7XG4gICAgLy8gfVxuICAgIG51bSA9IGNvcmUuYWRkKG51bSwgdXRpbHMuZ2V0TnVtYmVyKFwiMVwiKSlcbiAgfVxuICBcblxuICByZXR1cm4gYXJyO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IE1BWCA9IGNvbnN0YW50cy5NQVg7XG5jb25zdCBNSU4gPSBjb25zdGFudHMuTUlOO1xuY29uc3QgREJaID0gY29uc3RhbnRzLkRCWjtcbmNvbnN0IE5BTiA9IGNvbnN0YW50cy5OQU47XG5jb25zdCBOT1RTVSA9IGNvbnN0YW50cy5OT1RTVTtcblxuXG5jb25zdCBTdSA9IGZ1bmN0aW9uKG4sIG9wdGlvbil7XG4gIGlmKGlzTmFOKG4pKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuICBpZighbil7XG4gICAgbiA9IDA7XG4gIH1cbiAgaWYoIW9wdGlvbil7XG4gICAgb3B0aW9uID0ge307XG4gIH1cblxuICBsZXQgc3RyID0gU3RyaW5nKG4pO1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0gPT09IFwiLVwiKXtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCk7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIGlmKCFuZWdhdGl2ZSAmJiBvcHRpb24gJiYgb3B0aW9uLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihpc05hTihOdW1iZXIoc3RyKSkpe1xuICAgIHN0ciA9IFwiMFwiO1xuICB9XG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICBsZXQgaW50X3N0ciA9IHBhcnRzWzBdO1xuICBsZXQgZGVjaW1hbF9zdHIgPSBwYXJ0c1sxXTtcbiAgaWYoaW50X3N0cil7XG4gICAgY29uc3QgaW50MCA9IGludF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoaW50MCAmJiBpbnQwLmxlbmd0aCA9PT0gaW50X3N0ci5sZW5ndGgpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgbmV3X2ludF9zdHIgPSBcIlwiO1xuICAgIGxldCBzdGFydF96ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDxpbnRfc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKGludF9zdHJbaV0gIT09IFwiMFwiIHx8ICFzdGFydF96ZXJvKXtcbiAgICAgICAgc3RhcnRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfaW50X3N0ciArPSBpbnRfc3RyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2ludF9zdHIpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgaW50X3N0ciA9IG5ld19pbnRfc3RyO1xuICAgIH1cbiAgfVxuXG4gIGlmKGRlY2ltYWxfc3RyKXtcbiAgICBjb25zdCBkZWMwID0gZGVjaW1hbF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoZGVjMCAmJiBkZWMwLmxlbmd0aCA9PT0gZGVjaW1hbF9zdHIubGVuZ3RoKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBlbmRfemVybyA9IHRydWU7XG4gICAgbGV0IG5ld19kZWNpbWFsX3N0ciA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gZGVjaW1hbF9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgaWYoZGVjaW1hbF9zdHJbaV0gIT09IFwiMFwiIHx8ICFlbmRfemVybyl7XG4gICAgICAgIGVuZF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19kZWNpbWFsX3N0ciA9IGRlY2ltYWxfc3RyW2ldICsgbmV3X2RlY2ltYWxfc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2RlY2ltYWxfc3RyKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBkZWNpbWFsX3N0ciA9IG5ld19kZWNpbWFsX3N0cjtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBpbnRfYXJyO1xuICBsZXQgZGVjaW1hbF9hcnI7XG5cblxuICB0cnl7XG4gICAgaW50X2FyciA9IGNvcmUubnVtVG9BcnJheShpbnRfc3RyKTtcbiAgICBkZWNpbWFsX2FyciA9IGRlY2ltYWxfc3RyID8gY29yZS5udW1Ub0FycmF5KGRlY2ltYWxfc3RyKSA6IFswXTtcbiAgfWNhdGNoKGUpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG5cbiAgdGhpcy5pbnRlZ2VyID0gaW50X2FycjtcbiAgdGhpcy5kZWNpbWFsID0gZGVjaW1hbF9hcnI7XG4gIHRoaXMubmVnYXRpdmUgPSBuZWdhdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgXG4gIGxldCBkZW5vbWluYXRvciA9IFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNpbWFsLmxlbmd0aDsgaSsrKXtcbiAgICBkZW5vbWluYXRvci5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5mcmFjdGlvbiA9IHtcbiAgICBudW1lcmF0b3I6IHRoaXMuaW50ZWdlci5jb25jYXQodGhpcy5kZWNpbWFsKSxcbiAgICBkZW5vbWluYXRvcjogZGVub21pbmF0b3JcbiAgfTtcblxufTtcblxuY29uc3QgbWFrZVN1ID0gZnVuY3Rpb24obnVtLCBvcHRpb24pe1xuICBsZXQgcmVzO1xuICB0cnl7XG4gICAgcmVzID0gbmV3IFN1KG51bSwgb3B0aW9uKTtcbiAgfWNhdGNoKGUpe1xuICAgIHJlcyA9IGUubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG5cbn07XG5cbmNvbnN0IGlzU3UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKHN1IGluc3RhbmNlb2YgU3Upe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb3B5U3UgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IHN0ciA9IHN1LmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gIFpFUk86IG1ha2VTdSgwKSxcbiAgT05FOiBtYWtlU3UoMSksXG4gIEZJUlNUX1BSSU1FX05VTUJFUjogbWFrZVN1KDIpLFxuICBNQVg6IG1ha2VTdShNQVgpLFxuICBNSU46IG1ha2VTdShNSU4pXG59O1xuXG5cblN1LnByb3RvdHlwZS5nZXRTdHJpbmcgPSBmdW5jdGlvbigpe1xuICBsZXQgc3RyID0gU3RyaW5nKCB0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIGNvbnN0IGFjID0gdGhpcy5kZWNpbWFsLnJlZHVjZSgoYSxlKSA9PiBhICsgZSk7XG4gIGlmKGFjICE9PSAwKXtcbiAgICBzdHIgKz0gXCIuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gdGhpcy5uZWdhdGl2ZSA/IGAtJHtzdHJ9YCA6IHN0cjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5nZXRTdHJpbmcoKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0SW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcihcIjAuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdHIgPSB0aGlzLmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBnZXRMYXJnZSA9IGZ1bmN0aW9uKGEsIGIsIGFic29sdXRlID0gZmFsc2Upe1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBsZXQgZmllbGQgPSBbXTtcblxuICBjb25zdCBfYSA9IG1ha2VTdShhLmdldFN0cmluZygpKTtcbiAgY29uc3QgX2IgPSBtYWtlU3UoYi5nZXRTdHJpbmcoKSk7XG5cbiAgaWYoYWJzb2x1dGUpe1xuICAgIF9hLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgX2IubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmKF9hLmlzWmVybygpICYmIF9iLmlzWmVybygpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiAhX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBiO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoX2EuaW50ZWdlci5sZW5ndGggPiBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5pbnRlZ2VyLmxlbmd0aCA8IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgX2EuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gX2EuaW50ZWdlcltpXTtcbiAgICBsZXQgZWxtX2IgPSBfYi5pbnRlZ2VyW2ldO1xuICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICBicmVhaztcbiAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICBjb25zdCBsZW4gPSBfYS5kZWNpbWFsLmxlbmd0aCA+PSBfYi5kZWNpbWFsLmxlbmd0aCA/IF9hLmRlY2ltYWwubGVuZ3RoIDogX2IuZGVjaW1hbC5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IF9hLmRlY2ltYWxbaV0gPyBfYS5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGxldCBlbG1fYiA9IF9iLmRlY2ltYWxbaV0gPyBfYi5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKG5lZ2F0aXZlKXtcbiAgICBmaWVsZCA9IFtmaWVsZFsxXSwgZmllbGRbMF1dO1xuICB9XG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZmllbGRbMF07XG5cbn07XG5cblxuU3UucHJvdG90eXBlLmlzRXF1YWwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCBpX2EgPSBhLmludGVnZXI7XG4gIGNvbnN0IGlfYiA9IGIuaW50ZWdlcjtcbiAgY29uc3QgZF9hID0gYS5kZWNpbWFsO1xuICBjb25zdCBkX2IgPSBiLmRlY2ltYWw7XG5cbiAgY29uc3QgbGFyZ2UgPSBnZXRMYXJnZShhLCBiKTtcblxuICBpZighbGFyZ2Upe1xuICAgIGlmKGlfYS5sZW5ndGggPT09IGlfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGlfYVtpXSAhPT0gaV9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZSBpZihkX2EubGVuZ3RoID09PSBkX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihkX2FbaV0gIT09IGRfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoYS5uZWdhdGl2ZSA9PT0gYi5uZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59O1xuXG5TdS5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pbnRlZ2VyLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmludGVnZXJbMF0gPT09IDAgJiYgIXRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT25lID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMVwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMYXJnZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBhLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTbWFsbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBiLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1Bvc2l0aXZlKCkgJiYgdGhpcy5pc0ludGVnZXIoKSAmJiB0aGlzLmlzTGFyZ2UoQ09OU1RBTlRTLlpFUk8pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmNvbnRhaW5EZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdGhpcy5kZWNpbWFsLnJlZHVjZShmdW5jdGlvbihhLCB2KXtcbiAgICAgIHJldHVybiBhICsgdjtcbiAgfSk7XG4gIGlmKHJlcyA9PT0gMCl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gdGhpcy5jbG9uZSgpO1xuICBsZXQgYiA9IHN1LmNsb25lKCk7XG4gIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiO1xuICB9XG4gIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlO1xuICBpZihhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIGIubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGEuc3VidHJhY3QoYik7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIGEubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGIuc3VidHJhY3QoYSk7XG4gIH1cblxuICBsZXQgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJlcyA9IGE7XG4gIH1cbiAgbGV0IGludF9hID0gcmVzLmludGVnZXI7XG4gIGxldCBkZWNfYSA9IHJlcy5kZWNpbWFsO1xuICBsZXQgaW50X2IsIGRlY19iO1xuICBpZihyZXMgPT09IGEpe1xuICAgIGludF9iID0gYi5pbnRlZ2VyO1xuICAgIGRlY19iID0gYi5kZWNpbWFsO1xuICB9ZWxzZXtcbiAgICBpbnRfYiA9IGEuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGEuZGVjaW1hbDtcbiAgfVxuXG4gIGxldCBsZW5faSA9IGludF9hLmxlbmd0aDtcbiAgbGV0IGxlbl9kID0gZGVjX2EubGVuZ3RoO1xuXG4gIGlmKGRlY19iLmxlbmd0aCA+IGRlY19hLmxlbmd0aCl7XG4gICAgbGVuX2QgPSBkZWNfYi5sZW5ndGg7XG4gIH1cbiAgbGV0IG92ZXIgPSAwLFxuICAgICAgaW50X3JlcyA9IFtdLFxuICAgICAgZGVjX3JlcyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IGxlbl9kIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGRlY19hW2ldIHx8IDA7XG4gICAgbGV0IGVsbV9iID0gZGVjX2JbaV0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgZGVjX3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG5cbiAgZm9yKGxldCBpID0gZGVjX3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApe1xuICAgIGxldCBkID0gZGVjX3Jlc1tpXTtcbiAgICBpZihkID09PSAwKXtcbiAgICAgIGRlY19yZXMucG9wKCk7XG4gICAgfWVsc2V7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBnYXAgPSBsZW5faSAtIGludF9iLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gbGVuX2kgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gaW50X2FbaV07XG4gICAgbGV0IGVsbV9iID0gaW50X2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgaW50X3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBpbnRfcmVzLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoaW50X3Jlcy5qb2luKFwiXCIpICsgXCIuXCIgKyBkZWNfcmVzLmpvaW4oXCJcIiksIHtuZWdhdGl2ZTogbmVnYXRpdmV9KTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGIubmVnYXRlKCk7XG4gIH1cblxuICBpZihhLm5lZ2F0aXZlICE9PSBiLm5lZ2F0aXZlKXtcbiAgICBiLm5lZ2F0aXZlID0gIWIubmVnYXRpdmU7XG4gICAgcmV0dXJuIGEuYWRkKGIpO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gYS5uZWdhdGl2ZTtcblxuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiLCB0cnVlKTtcbiAgaWYocmVzICE9PSBhKXtcbiAgICBhID0gc3U7XG4gICAgYiA9IHRoaXM7XG4gICAgbmVnYXRpdmUgPSAhYS5uZWdhdGl2ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgYV9pX2xlbiA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGJfaV9sZW4gPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IGFfZF9sZW4gPSBhLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBiX2RfbGVuID0gYi5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgZF9nYXAgPSBNYXRoLmFicyhhX2RfbGVuIC0gYl9kX2xlbik7XG5cbiAgbGV0IGxlbl9pID0gMDtcbiAgbGV0IGxlbl9kID0gMDtcbiAgaWYoYV9pX2xlbiA+IGJfaV9sZW4pe1xuICAgIGxlbl9pICs9IGFfaV9sZW47XG4gIH1lbHNle1xuICAgIGxlbl9pICs9IGJfaV9sZW47XG4gIH1cbiAgaWYoYV9kX2xlbiA+IGJfZF9sZW4pe1xuICAgIGxlbl9kICs9IGFfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYl9pZC5wdXNoKDApO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGVuX2QgKz0gYl9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBhX2lkLnB1c2goMCk7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgZGVidCA9IDA7XG4gIGNvbnN0IHJlc19hcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuX2kgKyBsZW5fZDsgaSsrKXtcbiAgICBjb25zdCBpX2EgPSBhX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGlfYiA9IGJfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgYV9lbG0gPSAoYV9pZFtpX2FdID8gYV9pZFtpX2FdIDogMCkgLSBkZWJ0O1xuICAgIGNvbnN0IGJfZWxtID0gYl9pZFtpX2JdID8gYl9pZFtpX2JdIDogMDtcbiAgICBpZihhX2VsbSA+PSBiX2VsbSl7XG4gICAgICBkZWJ0ID0gMDtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KGFfZWxtIC0gYl9lbG0pO1xuICAgIH1lbHNle1xuICAgICAgZGVidCA9IDE7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdCgoZGVidCAqIDEwKSArIGFfZWxtIC0gYl9lbG0pO1xuICAgIH1cblxuICB9XG4gIHJlc19hcnJheS5zcGxpY2UocmVzX2FycmF5Lmxlbmd0aCAtIGxlbl9kLCAwLCBcIi5cIik7XG4gIGNvbnN0IG1pbnVzID0gbmVnYXRpdmUgPyBcIi1cIiA6IFwiXCI7XG5cbiAgY29uc3QgcmVzdWx0ID0gIG1ha2VTdShtaW51cyArIHJlc19hcnJheS5qb2luKFwiXCIpKTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICB0aGlzLm5ldmF0aXZlID0gZmFsc2U7XG4gIH1lbHNle1xuICAgIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm1ha2VQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLm5lZ2F0aXZlID0gZmFsc2U7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm1ha2VOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGljYXRpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKGEuaXNaZXJvKCkgfHwgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgZHBfYSA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGRwX2IgPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IHJlc19hcnIgPSBbXTtcbiAgZm9yKGxldCBpX2EgPSAwOyBpX2EgPCBhX2lkLmxlbmd0aDsgaV9hKyspe1xuICAgIGZvcihsZXQgaV9iID0gMDsgaV9iIDwgYl9pZC5sZW5ndGg7IGlfYisrKXtcbiAgICAgIGNvbnN0IGVsbV9hID0gYV9pZFtpX2FdO1xuICAgICAgY29uc3QgZWxtX2IgPSBiX2lkW2lfYl07XG4gICAgICBjb25zdCBwb3NfYSA9IGRwX2EgLSBpX2EgLTE7XG4gICAgICBjb25zdCBwb3NfYiA9IGRwX2IgLSBpX2IgLTE7XG4gICAgICBjb25zdCBwb3MgPSBwb3NfYSArIHBvc19iO1xuICAgICAgbGV0IHJlcyA9IGVsbV9hICogZWxtX2I7XG4gICAgICBsZXQgbGVuID0gTWF0aC5hYnMocG9zKTtcbiAgICAgIGxldCBzdHI7XG4gICAgICBpZihwb3MgPj0gMCl7XG4gICAgICAgIGxlbisrO1xuICAgICAgICBpZihyZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuICsgMSwgXCIwXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICBpZihsZW4gPT09IDEgJiYgcmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcylbMF0gKyBcIi5cIiArIFN0cmluZyhyZXMpWzFdO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBcIjAuXCIgKyBTdHJpbmcocmVzKS5wYWRTdGFydChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzX2Fyci5wdXNoKG1ha2VTdShzdHIpKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgcmVzID0gcmVzLmFkZChyZXNfYXJyW2ldKTtcbiAgfVxuXG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc2lvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcblxuICBpZihhLmlzWmVybygpICYmIGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBOQU47XG4gIH1lbHNlIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1lbHNlIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBEQlo7XG4gIH1cblxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBjb3VudCA9IG1ha2VTdSgwKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoYS5pc0xhcmdlKHN1bSkgfHwgYS5pc0VxdWFsKHN1bSkpe1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdSgxKSk7XG4gICAgc3VtID0gYi5tdWx0aXBsaWNhdGlvbihjb3VudCk7XG4gIH1cblxuICBjb3VudCA9IGNvdW50LnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIHN1bSA9IHN1bS5zdWJ0cmFjdChiKTtcbiAgY29uc3QgcmVtYWluID0gYS5zdWJ0cmFjdChzdW0pO1xuICBjb25zdCByZXMgPSBjb3VudDtcbiAgcmVzLnJlbWFpbmRlciA9IHJlbWFpbjtcbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG4gIHJldHVybiByZXM7XG59O1xuXG5cblN1LnByb3RvdHlwZS5wbHVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLnRhc3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubWludXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5oaWt1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5rYWtlcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS53YXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5kaXZpc2lvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmFkZChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgXG4gIGlmKCByZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPZGROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBpZiggIXJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyB0aGlzLmlzTGFyZ2UobWFrZVN1KGkpKTsgaSsrKXtcbiAgICBsZXQgc3UgPSBtYWtlU3UoaSk7XG4gICAgY29uc3QgcmVtYWluZGVyID0gdGhpcy5kaXZpc2lvbihzdSkucmVtYWluZGVyO1xuICAgIGlmKHJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIGFyci5wdXNoKHRoaXMpO1xuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldENvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGxldCBhID0gdGhpcztcbiAgbGV0IGIgPSBzdTtcblxuICBjb25zdCBhcnJfYSA9IGEuZ2V0RGl2aXNvcnMoKTtcbiAgaWYoYS5pc0VxdWFsKGIpKXtcbiAgICByZXR1cm4gYXJyX2E7XG4gIH1cbiAgY29uc3QgYXJyX2IgPSBiLmdldERpdmlzb3JzKCk7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFycl9iLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBlbG1fYiA9IGFycl9iW2pdO1xuICAgICAgaWYoZWxtX2EuaXNFcXVhbChlbG1fYikpe1xuICAgICAgICBkaXZzLnB1c2goZWxtX2EpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZzO1xufTtcblxuU3UucHJvdG90eXBlLmdldE1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0Q29tbW9uRGl2aXNvcnMoc3UpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBbdGhpc107XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjb3VudCA9IG1ha2VTdShcIjFcIik7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkgfHwgY291bnQuaXNFcXVhbChDT05TVEFOVFMuTUFYKSl7XG4gICAgYXJyLnB1c2godGhpcy5tdWx0aXBsaWNhdGlvbihjb3VudCkpO1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdShcIjFcIikpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuXG4gIGNvbnN0IG1heENvbW1vbkRpdmlzb3IgPSBhLmdldE1heENvbW1vbkRpdmlzb3IoYik7XG5cbiAgY29uc3QgbXVsdGkgPSBhLm11bHRpcGx5KGIpO1xuXG4gIGNvbnN0IHJlcyA9IG11bHRpLmRpdmlzaW9uKG1heENvbW1vbkRpdmlzb3IpO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblxuY29uc3QgbWFrZUZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oYSwgYil7XG5cbiAgaWYoIWlzU3UoYSkgfHwgIWlzU3UoYikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW2EsIGJdO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdLmlzTGFyZ2UoTUFYKSl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gYXJyW2Fyci5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBiID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjID0gYS5hZGQoYik7XG4gICAgYXJyLnB1c2goYyk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblxuY29uc3QgbWFrZUx1Y2FzU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gbWFrZUZpYm9uYWNjaVNlcXVlbmNlKG1ha2VTdSgyKSwgbWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcblxuICBjb25zdCBmaWJzID0gbWFrZUZpYm9uYWNjaVNlcXVlbmNlKHplcm8sIG9uZSk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBmaWJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGZpYnNbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMdWNhc051bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsdWNzID0gbWFrZUx1Y2FzU2VxdWVuY2UoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGx1Y3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gbHVjc1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuY29uc3QgbWFrZVNlcXVlbmNlID0gZnVuY3Rpb24oZmlyc3QsIG90aGVycyl7XG4gIGNvbnN0IGFycmF5ID0gW2ZpcnN0XTtcbiAgaWYoIW90aGVycyl7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBvdGhlcnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG0gPSBvdGhlcnNbaV07XG4gICAgaWYoIWlzU3UoZWxtKSl7XG4gICAgICBlbG0gPSBtYWtlU3UoZWxtKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuU3UucHJvdG90eXBlLmdldFNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuU3UucHJvdG90eXBlLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBzdW0gPSBzdW0uYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IGlwID0gYXJyWzBdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpcCA9IGlwLm11bHRpcGxpY2F0aW9uKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuU3UucHJvdG90eXBlLmRpZ2l0c3VtID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGEgPSBtYWtlU3UodGhpcy5pbnRlZ2VyW2ldKTtcbiAgICBzdW0gPSBzdW0uYWRkKGEpO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgyKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuY3ViZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgb25lID0gbWFrZVN1KFwiMVwiKTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgaWYoc3UuaXNFcXVhbChvbmUpKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsZXQgY291bnQgPSBvbmU7XG4gIGxldCByZXMgPSBjb3B5U3UodGhpcyk7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoc3UpKXtcbiAgICByZXMgPSB0aGlzLm11bHRpcGxpY2F0aW9uKHJlcyk7XG4gICAgY291bnQgPSBjb3VudC5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5pc09uZSgpIHx8IHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjJcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKG9uZSkpe1xuICAgIGxldCBlID0gdGhpcy5kaXZpc2lvbihjb3VudGVyKTtcbiAgICBpZihlLnJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldERpdmlzb3JzKCk7XG4gIGxldCBhID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhID0gYS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNMYXJnZSggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzRGVmaWNpZW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNTbWFsbCggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzUGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLnN1YnRyYWN0KHRoaXMpLmlzRXF1YWwodGhpcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5mYWN0b3JpYWwgPSBmdW5jdGlvbigpe1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZSh6ZXJvKSl7XG4gICAgcmVzID0gcmVzLm11bHRpcGxpY2F0aW9uKGNvdW50ZXIpO1xuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbmNvbnN0IG1ha2VQb2x5Z29uYWxOdW1iZXJzID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIWlzU3Uobikpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZihuLmlzU21hbGwobWFrZVN1KDMpKSl7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDEpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHJhbmdlID0gY3VycmVudDtcblxuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gbi5zdWJ0cmFjdChtYWtlU3UoMikpO1xuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgcmFuZ2UgPSByYW5nZS5hZGQoaW5jcmVtZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5hZGQocmFuZ2UpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBtYWtlVHJpYW5nbGVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgcmV0dXJuIG1ha2VQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSgzKSwgbWF4KTtcbn07XG5cbmNvbnN0IG1ha2VTcXVhcmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgcmV0dXJuIG1ha2VQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSg0KSwgbWF4KTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1RyaWFuZ2xlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3UgPSB0aGlzO1xuICBjb25zdCBhcnIgPSBtYWtlVHJpYW5nbGVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1NxdWFyZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVNxdWFyZU51bWJlcnMoc3UpO1xuICBjb25zdCByZXMgPSBhcnIuZmluZChlbG0gPT57XG4gICAgcmV0dXJuIGVsbS5pc0VxdWFsKHN1KTtcbiAgfSk7XG4gIGlmKHJlcyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cbiAgY29uc3QgdHdvID0gbWFrZVN1KDIpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMCk7XG4gIGxldCBleCA9IG1ha2VTdSgxKTtcbiAgXG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChtYXgpKXtcbiAgICBjdXJyZW50ID0gdHdvLmV4cG9uZW50aWF0ZShleCkuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICBleCA9IGV4LmFkZChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IG1hcnIgPSBtYWtlTWVyc2VubmVOdW1iZXJzKG1heCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbiA9IG1hcnJbaV07XG4gICAgaWYobi5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVOdW1iZXJzKG4pO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IG1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ha2VTdTogbWFrZVN1LFxuICBjb3B5U3U6IGNvcHlTdSxcbiAgaXNTdTogaXNTdSxcbiAgU3U6IFN1XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHMgZnJvbSBcIi4vc3UuanNcIjtcbmltcG9ydCBTSyBmcm9tIFwiLi9TSy5qc1wiO1xuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZXRzXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHN0c1wiO1xuaW1wb3J0IGRvYyBmcm9tIFwiLi9kb2N0c1wiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHM6IHMsXG4gIFM6IFNLLlMsXG4gIEs6IFNLLkssXG4gIGNvcmU6IGNvcmUsXG4gIHV0aWxzOiB1dGlscyxcbiAgZG9jOiBkb2MsXG4gIGNvbnN0YW50czogY29uc3RhbnRzLFxuICB0czogdHJ1ZSxcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9