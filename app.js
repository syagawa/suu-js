(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["su"] = factory();
	else
		root["su"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./SK.js":
/*!***************!*\
  !*** ./SK.js ***!
  \***************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./core.js");
/* harmony import */ var _su_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./su.js */ "./su.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./constants.js");



var MAX = _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].MAX;
var MIN = _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].MIN;
var S = {};
var K = {};
var makeSu = _su_js__WEBPACK_IMPORTED_MODULE_1__["default"].makeSu;
var copySu = _su_js__WEBPACK_IMPORTED_MODULE_1__["default"].copySu;
var isSu = _su_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSu;
var Su = _su_js__WEBPACK_IMPORTED_MODULE_1__["default"].Su;
var FIRST_PRIME_NUMBER = 2;

K.random = function (min, max) {
  if (min === undefined) {
    min = makeSu(0);
  }

  if (max === undefined) {
    max = makeSu(1);
  }

  if (!isSu(min)) {
    min = makeSu(min);
  }

  if (!isSu(max)) {
    max = makeSu(max);
  }

  var str = String(Math.random());
  var ran;

  if (str === "0") {
    if (min.isZero()) {
      ran = makeSu(0);
    } else {
      ran = min;
    }
  } else {
    var arr = str.split(".");
    ran = makeSu("0." + arr[1]).multiplication(max);
  }

  return ran;
};

K.randomElement = function (array) {
  var i = K.random(0, array.length).integer;
  return array[i];
};

K.randomInt = function (min, max) {
  if (!isSu(min) || !isSu(max)) {
    return "This function has been called with incorrect parameters";
  }

  if (min.isEqual(max) || min.isLarge(max)) {
    return "This function has been called with incorrect parameters";
  }

  var arr = [];

  for (var i = min.getNumber(); i <= max.getNumber(); i++) {
    var s = makeSu(i);
    arr.push(s);
  }

  var res = K.randomElement(arr);
  return res;
};

K.makePrimeNumbers = function (max) {
  if (max && max.isSu && max.isSu()) {
    max = Number(max.getString());
  }

  var MAX = 100;

  if (!max) {
    max = MAX;
  }

  if (max > MAX) {
    max = MAX;
  }

  var arr = [];

  for (var i = FIRST_PRIME_NUMBER; i < max; i++) {
    var _su = makeSu(i);

    if (_su.isPrimeNumber()) {
      arr.push(_su);
    }
  }

  return arr;
}; // ユークリッドの互除法


K.euclideanAlgorithm = function (a, b) {
  if (!S.isNumber(a) || !S.isNumber(b)) {
    return "This function has been called with incorrect parameters";
  }

  if (a === b) {
    return a;
  }

  var temp;

  if (a < b) {
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

  while (ctemp !== 0) {
    ctemp = atemp % btemp;

    if (ctemp === 0) {
      res = btemp;
      break;
    }

    if (ctemp === 1) {
      res = coprime;
      break;
    }

    if (counter >= MAX) {
      break;
    }

    atemp = btemp;
    btemp = ctemp;
  }

  return res;
};

K.summation = function () {
  var array = [];

  for (var i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }

  if (array.length === 0) {
    return "Argument is not Number";
  }

  var sum = 0;

  for (var j = 0; j < array.length; j++) {
    var elm = array[j];

    if (S.isNumber(elm)) {
      sum += elm;
    } else {
      return "Argument is not Number";
    }
  }

  return sum;
};

K.infiniteProduct = function () {
  var array = [];

  for (var i = 0; i < arguments.length; i++) {
    array.push(arguments[i]);
  }

  if (array.length === 0) {
    return "Argument is empty.";
  }

  var ip = 1;

  for (var _i = 0; _i < array.length; _i++) {
    var elm = array[_i];

    if (S.isNumber(elm)) {
      ip = ip * elm;
    } else {
      return "Argument is not a Number";
    }
  }

  return ip;
};

K.division = function (dividend, divisor) {
  if (dividend === undefined || divisor === undefined) {
    return "This function has been called with incorrect parameters";
  }

  var result = dividend / divisor;
  return {
    integer: {
      remainder: dividend % divisor,
      result: Math.floor(result)
    },
    realNumber: result
  };
};

K.divisorsSummation = function (n) {
  var arr = K.divisors(n);
  var a = 0;

  for (var i = 0; i < arr.length; i++) {
    a += arr[i];
  }

  return a;
};

K.isAbundantNumber = function (n) {
  var sum = K.divisorsSummation(n);

  if (sum > n * 2) {
    return true;
  }

  return false;
};

K.isKaprekarNumberTypeA = function (n) {
  var num = n * n;
  var s = String(num);
  var len = s.length;
  var first_len = 0;
  var after_len = 0;
  var first, after;

  if (S.isOddNumber(len)) {
    first_len = (len - 1) / 2;
    after_len = first_len + 1;
  } else {
    first_len = len / 2;
    after_len = first_len;
  }

  first = Number(s.substr(0, first_len));
  after = Number(s.substr(first_len, after_len));

  if (first + after === n) {
    return true;
  }

  return false;
};

K.isKaprekarNumberTypeB = function (n) {
  var arr = String(n).split("");
  var min = Number(arr.sort().join(""));
  var max = Number(arr.reverse().join(""));

  if (max - min === n) {
    return true;
  }

  return false;
};

K.isKaprekarNumber = function (n) {
  if (K.isKaprekarNumberTypeA(n) || K.isKaprekarNumberTypeB(n)) {
    return true;
  }
};

S.isInteger = function (n) {
  var f = Math.floor(n);

  if (f === n) {
    return true;
  }

  return false;
}; // 調和平均


K.harmonicMean = function (arr) {
  var len = arr.length;
  var sum = 0;

  for (var i = 0; i < len; i++) {
    sum += 1 / arr[i];
  }

  return len / sum;
}; // 調和数かどうか


K.isHarmonicDivisorNumber = function (n) {
  var arr = K.divisors(n);
  var res = K.harmonicMean(arr);

  if (S.isInteger(res)) {
    return true;
  }

  return false;
};

S.isNaturalNumber = function (n) {
  if (n > 0 && S.isInteger(n)) {
    return true;
  }
};

K.collatzhProblem = function (num) {
  var arr = [];

  var calc = function calc(n) {
    var res = n;

    if (S.isOddNumber(n)) {
      res = n * 3 + 1;
    } else if (S.isEvenNumber(n)) {
      res = n / 2;
    }

    return res;
  };

  while (num > 1) {
    num = calc(num);
    arr.push(num);
  }

  return arr;
}; // フェルマーテスト
// JSの扱える範囲を超えていてうまく動かず


K.fermatTest = function (n, max) {
  if (!S.isInteger(n) || S.isZero(n) || n === 1) {
    return "This function has been called with incorrect parameters. " + n + " is incorrect parameter.";
  }

  if (!max) {
    max = 100;
  }

  for (var i = 1; i <= max; i++) {
    var a = K.randomInt(2, n - 1);

    if (K.maxCommonDivisor(a, n) !== 1) {
      return "Composit Number";
    }

    var res = Math.pow(a, n - 1) % n;

    if (res !== 1) {
      return "Composit Number";
    }
  }

  return "Maybe Prime Number";
}; // 組み合わせ数の計算
// K.combinations = function(arr){
// };
// 3 => [0, 3], [1, 2], [2, 1], [3, 0]


K.getIncludesNumbers = function (num) {
  var arr = [];
  var temp = num;
  var bool = true;

  while (bool) {
    var a = temp;
    var b = num - temp;
    var ar = [a, b];
    arr.push(ar);
    temp = temp - 1;

    if (temp < 0) {
      bool = false;
      break;
    }
  }

  return arr;
}; // fibonacci
// todo 0start


var arraySummation = function arraySummation(a, b) {
  if (!(a instanceof Array)) {
    a = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArray(a);
  }

  if (!(b instanceof Array)) {
    b = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].numToArray(b);
  }

  if (!_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isNumArray(a) || !_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isNumArray(b)) {
    return;
  }

  if (_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(a[0]) && _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].isZero(b[0])) {
    return {
      array: [0],
      string: "0",
      number: 0,
      length: 1
    };
  }

  var A = makeSu(a);
  var B = makeSu(b);
  console.log(A, B);
  var res = _core_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLarger(a, b);
  var arr_a = res[0];
  var arr_b = res[1];
  var len = arr_a.length;
  var gap = len - arr_b.length;
  var over = 0,
      arr_c = [];

  for (var i = len - 1; i >= 0; i--) {
    var _res = void 0;

    var elm_a = arr_a[i];
    var elm_b = arr_b[i - gap] || 0;
    _res = elm_a + elm_b + over;

    if (_res >= 10) {
      over = 1;
      _res = _res - 10;
    } else {
      over = 0;
    }

    arr_c.unshift(_res);
  }

  if (over > 0) {
    arr_c.unshift(over);
  }

  var result = makeSu(arr_c);
  return result;
};

var getLarger = function getLarger(a, b) {
  var arr_a = [],
      arr_b = [];

  for (var i = 0; i < a.length; i++) {
    var elm_a = a[i];

    if (elm_a === 0 && arr_a.length === 0) {
      continue;
    }

    if (elm_a >= 0 && elm_a < 10) {
      arr_a.push(elm_a);
    }
  }

  for (var _i2 = 0; _i2 < b.length; _i2++) {
    var elm_b = b[_i2];

    if (elm_b === 0 && arr_b.length === 0) {
      continue;
    }

    if (elm_b >= 0 && elm_b < 10) {
      arr_b.push(elm_b);
    }
  }

  var res;

  if (arr_a.length > arr_b.length) {
    res = [a, b];
  } else if (arr_a.length < arr_b.length) {
    res = [b, a];
  } else {
    for (var _i3 = 0; _i3 < arr_a.length; _i3++) {
      var elm_aa = arr_a[_i3];
      var elm_bb = arr_b[_i3];

      if (elm_aa > elm_bb) {
        res = [a, b];
        break;
      } else if (elm_aa < elm_bb) {
        res = [b, a];
        break;
      } else {
        res = [a, b];
      }
    }
  }

  return res;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  S: S,
  K: K
});

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var core = {};

core.isNumber = function (n) {
  if (typeof n === "number") {
    if (Number.isNaN(n)) {
      return NaN;
    } else {
      return true;
    }
  }
};

core.isZero = function (n) {
  if (n === 0) {
    return true;
  }
}; // 配列での計算


core.numToArray = function (n) {
  var arr = [];
  var str = String(n);
  var len = str.length;

  for (var i = 0; i < len; i++) {
    var elm = Number(str.slice(i, i + 1));

    if (!this.isNumber(elm)) {
      throw new Error("This function has been called with incorrect parameters");
    }

    arr.push(elm);
  }

  return arr;
};

core.numToArrayWithDecimal = function (n) {
  var arr1 = [];
  var arr2 = [];
  var str = String(n);
  var len = str.length;
  var tgt = arr1;

  for (var i = 0; i < len; i++) {
    var elm = Number(str[i]);

    if (!this.isNumber(elm)) {
      if (elm === "." && tgt === arr1) {
        tgt = arr2;
      } else {
        throw new Error("This function has been called with incorrect parameters");
      }
    }

    tgt.push(elm);
  }

  return [].concat(arr1, [".", arr2]);
};

core.isNumArray = function (arr) {
  if (arr instanceof Array) {
    for (var i = 0; i < arr.length; i++) {
      if (!this.isNumber(arr[i])) {
        return false;
      }
    }

    return true;
  }
};

core.add = function (a, b) {
  if (!a && !b) {
    return;
  }

  var a_ = this.numToArray(a).reverse();
  var b_ = this.numToArray(b).reverse();
  var arr = [];
  var arr_a = a_;
  var arr_b = b_;

  if (a_.length < b_.length) {
    arr_a = b_;
    arr_b = a_;
  }

  var carry = 0;

  for (var i = 0; i < arr_a.length; i++) {
    var aa = arr_a[i] ? arr_a[i] : 0;
    var bb = arr_b[i] ? arr_b[i] : 0;
    var res = aa + bb + carry;

    if (res > 9) {
      res = res - 10;
      carry = 1;
    } else {
      carry = 0;
    }

    arr.push(res);
  }

  if (carry > 0) {
    arr.push(carry);
  }

  return arr.reverse();
};

/* harmony default export */ __webpack_exports__["default"] = (core);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _su_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./su.js */ "./su.js");
/* harmony import */ var _SK_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SK.js */ "./SK.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.js */ "./core.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  s: _su_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  S: _SK_js__WEBPACK_IMPORTED_MODULE_1__["default"].S,
  K: _SK_js__WEBPACK_IMPORTED_MODULE_1__["default"].K,
  core: _core_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./su.js":
/*!***************!*\
  !*** ./su.js ***!
  \***************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./core.js");


var MAX = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].MAX;
var MIN = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].MIN;
var DBZ = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].DBZ;
var NAN = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].NAN;
var NOTSU = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].NOTSU;

var Su = function Su(n, option) {
  if (isNaN(n)) {
    throw new Error(NAN);
  }

  if (!n) {
    n = 0;
  }

  if (!option) {
    option = {};
  }

  var str = String(n);
  var negative = false;

  if (str[0] === "-") {
    str = str.slice(1, str.length);
    negative = true;
  }

  if (!negative && option && option.negative) {
    negative = true;
  }

  if (isNaN(Number(str))) {
    str = "0";
  }

  if (str === "0") {
    negative = false;
  }

  var parts = str.split(".");
  var int_str = parts[0];
  var decimal_str = parts[1];

  if (int_str) {
    var int0 = int_str.match(/0/g);

    if (int0 && int0.length === int_str.length) {
      int_str = "0";
    }

    var new_int_str = "";
    var start_zero = true;

    for (var i = 0; i < int_str.length; i++) {
      if (int_str[i] !== "0" || !start_zero) {
        start_zero = false;
        new_int_str += int_str[i];
      }
    }

    if (!new_int_str) {
      int_str = "0";
    } else {
      int_str = new_int_str;
    }
  }

  if (decimal_str) {
    var dec0 = decimal_str.match(/0/g);

    if (dec0 && dec0.length === decimal_str.length) {
      decimal_str = "0";
    }

    var end_zero = true;
    var new_decimal_str = "";

    for (var _i = decimal_str.length - 1; _i >= 0; _i--) {
      if (decimal_str[_i] !== "0" || !end_zero) {
        end_zero = false;
        new_decimal_str = decimal_str[_i] + new_decimal_str;
      }
    }

    if (!new_decimal_str) {
      decimal_str = "0";
    } else {
      decimal_str = new_decimal_str;
    }
  }

  var int_arr;
  var decimal_arr;

  try {
    int_arr = _core_js__WEBPACK_IMPORTED_MODULE_1__["default"].numToArray(int_str);
    decimal_arr = decimal_str ? _core_js__WEBPACK_IMPORTED_MODULE_1__["default"].numToArray(decimal_str) : [0];
  } catch (e) {
    throw new Error(NAN);
  }

  this.integer = int_arr;
  this.decimal = decimal_arr;
  this.negative = negative ? true : false;
  var denominator = [1];

  for (var _i2 = 0; _i2 < this.decimal.length; _i2++) {
    denominator.push(0);
  }

  this.fraction = {
    numerator: this.integer.concat(this.decimal),
    denominator: denominator
  };
};

var makeSu = function makeSu(num, option) {
  var res;

  try {
    res = new Su(num, option);
  } catch (e) {
    res = e.message;
  }

  return res;
};

var isSu = function isSu(su) {
  if (su instanceof Su) {
    return true;
  }
};

var copySu = function copySu(su) {
  var str = su.getString();
  return makeSu(str);
};

var CONSTANTS = {
  ZERO: makeSu(0),
  ONE: makeSu(1),
  FIRST_PRIME_NUMBER: makeSu(2),
  MAX: makeSu(MAX),
  MIN: makeSu(MIN)
};

Su.prototype.getString = function () {
  var str = String(this.integer.join(""));
  var ac = this.decimal.reduce(function (a, e) {
    return a + e;
  });

  if (ac !== 0) {
    str += "." + this.decimal.join("");
  }

  return this.negative ? "-".concat(str) : str;
};

Su.prototype.getNumber = function () {
  var num = Number(this.getString());
  return num;
};

Su.prototype.getInteger = function () {
  var num = Number(this.integer.join(""));
  return num;
};

Su.prototype.getDecimal = function () {
  var num = Number("0." + this.decimal.join(""));
  return num;
};

Su.prototype.clone = function () {
  var str = this.getString();
  return makeSu(str);
};

var getLarge = function getLarge(a, b) {
  var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var negative = false;
  var field = [];

  var _a = makeSu(a.getString());

  var _b = makeSu(b.getString());

  if (absolute) {
    _a.negative = false;
    _b.negative = false;
  }

  if (_a.isZero() && _b.isZero()) {
    return;
  }

  if (!_a.negative && _b.negative) {
    return a;
  } else if (_a.negative && !_b.negative) {
    return b;
  } else if (_a.negative && _b.negative) {
    negative = true;
  }

  if (_a.integer.length > _b.integer.length) {
    if (negative) {
      return b;
    }

    return a;
  } else if (_a.integer.length < _b.integer.length) {
    if (negative) {
      return a;
    }

    return b;
  }

  for (var i = 0; i < _a.integer.length; i++) {
    var elm_a = _a.integer[i];
    var elm_b = _b.integer[i];

    if (elm_a > elm_b) {
      field = [a, b];
      break;
    } else if (elm_a < elm_b) {
      field = [b, a];
      break;
    }
  }

  if (field.length === 0) {
    var len = _a.decimal.length >= _b.decimal.length ? _a.decimal.length : _b.decimal.length;

    for (var _i3 = 0; _i3 < len; _i3++) {
      var _elm_a = _a.decimal[_i3] ? _a.decimal[_i3] : 0;

      var _elm_b = _b.decimal[_i3] ? _b.decimal[_i3] : 0;

      if (_elm_a > _elm_b) {
        field = [a, b];
        break;
      } else if (_elm_a < _elm_b) {
        field = [b, a];
        break;
      }
    }
  }

  if (negative) {
    field = [field[1], field[0]];
  }

  if (field.length === 0) {
    return null;
  }

  return field[0];
};

Su.prototype.isEqual = function (su) {
  if (!isSu(su)) {
    return false;
  }

  var a = this.clone();
  var b = su.clone();
  var i_a = a.integer;
  var i_b = b.integer;
  var d_a = a.decimal;
  var d_b = b.decimal;
  var large = getLarge(a, b);

  if (!large) {
    if (i_a.length === i_b.length) {
      for (var i = 0; i < i_a.length; i++) {
        if (i_a[i] !== i_b[i]) {
          return false;
        }
      }
    } else if (d_a.length === d_b.length) {
      for (var _i4 = 0; _i4 < d_a.length; _i4++) {
        if (d_a[_i4] !== d_b[_i4]) {
          return false;
        }
      }
    } else {
      return false;
    }

    if (a.negative === b.negative) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

Su.prototype.isZero = function () {
  if (this.integer.length === 1 && this.integer[0] === 0 && !this.containDecimal()) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isOne = function () {
  if (this.negative) {
    return false;
  }

  if (this.getString() === "1") {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isLarge = function (su) {
  if (!isSu(su)) {
    return false;
  }

  var a = this.clone();
  var b = su.clone();
  var res = getLarge(a, b);

  if (!res) {
    return false;
  }

  if (res.getString() === a.getString()) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isSmall = function (su) {
  if (!isSu(su)) {
    return false;
  }

  var a = this.clone();
  var b = su.clone();
  var res = getLarge(a, b);

  if (!res) {
    return false;
  }

  if (res.getString() === b.getString()) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isInteger = function () {
  if (this.containDecimal()) {
    return false;
  } else {
    return true;
  }
};

Su.prototype.isNaturalNumber = function () {
  if (this.isPositive() && this.isInteger() && this.isLarge(CONSTANTS.ZERO)) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isNegative = function () {
  if (this.negative) {
    return true;
  }

  return false;
};

Su.prototype.isPositive = function () {
  if (this.negative) {
    return false;
  }

  return true;
};

Su.prototype.containDecimal = function () {
  var res = this.decimal.reduce(function (a, v) {
    return a + v;
  });

  if (res === 0) {
    return false;
  } else {
    return true;
  }
};

Su.prototype.add = function (su) {
  if (!isSu(su)) {
    throw new Error(NOTSU);
  }

  var a = this.clone();
  var b = su.clone();

  if (a.isZero()) {
    return b;
  }

  if (b.isZero()) {
    return a;
  }

  var negative;

  if (a.negative && b.negative) {
    negative = true;
  } else if (!a.negative && !b.negative) {
    negative = false;
  } else if (!a.negative && b.negative) {
    b.makePositive();
    return a.subtract(b);
  } else if (a.negative && !b.negative) {
    a.makePositive();
    return b.subtract(a);
  }

  var res = getLarge(a, b);

  if (!res) {
    res = a;
  }

  var int_a = res.integer;
  var dec_a = res.decimal;
  var int_b, dec_b;

  if (res === a) {
    int_b = b.integer;
    dec_b = b.decimal;
  } else {
    int_b = a.integer;
    dec_b = a.decimal;
  }

  var len_i = int_a.length;
  var len_d = dec_a.length;

  if (dec_b.length > dec_a.length) {
    len_d = dec_b.length;
  }

  var over = 0,
      int_res = [],
      dec_res = [];

  for (var i = len_d - 1; i >= 0; i--) {
    var _res = void 0;

    var elm_a = dec_a[i] || 0;
    var elm_b = dec_b[i] || 0;
    _res = elm_a + elm_b + over;

    if (_res >= 10) {
      over = 1;
      _res = _res - 10;
    } else {
      over = 0;
    }

    dec_res.unshift(_res);
  }

  for (var _i5 = dec_res.length - 1; _i5 >= 0; _i5--) {
    var d = dec_res[_i5];

    if (d === 0) {
      dec_res.pop();
    } else {
      break;
    }
  }

  var gap = len_i - int_b.length;

  for (var _i6 = len_i - 1; _i6 >= 0; _i6--) {
    var _res2 = void 0;

    var _elm_a2 = int_a[_i6];

    var _elm_b2 = int_b[_i6 - gap] || 0;

    _res2 = _elm_a2 + _elm_b2 + over;

    if (_res2 >= 10) {
      over = 1;
      _res2 = _res2 - 10;
    } else {
      over = 0;
    }

    int_res.unshift(_res2);
  }

  if (over > 0) {
    int_res.unshift(over);
  }

  var result = makeSu(int_res.join("") + "." + dec_res.join(""), {
    negative: negative
  });

  if (result.isZero() && result.negative) {
    result.makePositive();
  }

  return result;
};

Su.prototype.subtract = function (su) {
  if (!isSu(su)) {
    throw new Error(NOTSU);
  }

  var a = copySu(this);
  var b = copySu(su);

  if (su.isZero()) {
    return a;
  }

  if (this.isZero()) {
    return b.negate();
  }

  if (a.negative !== b.negative) {
    b.negative = !b.negative;
    return a.add(b);
  }

  var negative = a.negative;
  var res = getLarge(a, b, true);

  if (res !== a) {
    a = su;
    b = this;
    negative = !a.negative;
  }

  var a_id = a.integer.concat(a.decimal);
  var b_id = b.integer.concat(b.decimal);
  var a_i_len = a.integer.length;
  var b_i_len = b.integer.length;
  var a_d_len = a.decimal.length;
  var b_d_len = b.decimal.length;
  var d_gap = Math.abs(a_d_len - b_d_len);
  var len_i = 0;
  var len_d = 0;

  if (a_i_len > b_i_len) {
    len_i += a_i_len;
  } else {
    len_i += b_i_len;
  }

  if (a_d_len > b_d_len) {
    len_d += a_d_len;

    for (var i = 0; i < d_gap; i++) {
      b_id.push(0);
    }
  } else {
    len_d += b_d_len;

    for (var _i7 = 0; _i7 < d_gap; _i7++) {
      a_id.push(0);
    }
  }

  var debt = 0;
  var res_array = [];

  for (var _i8 = 0; _i8 < len_i + len_d; _i8++) {
    var i_a = a_id.length - 1 - _i8;
    var i_b = b_id.length - 1 - _i8;
    var a_elm = (a_id[i_a] ? a_id[i_a] : 0) - debt;
    var b_elm = b_id[i_b] ? b_id[i_b] : 0;

    if (a_elm >= b_elm) {
      debt = 0;
      res_array.unshift(a_elm - b_elm);
    } else {
      debt = 1;
      res_array.unshift(debt * 10 + a_elm - b_elm);
    }
  }

  res_array.splice(res_array.length - len_d, 0, ".");
  var minus = negative ? "-" : "";
  var result = makeSu(minus + res_array.join(""));

  if (result.isZero() && result.negative) {
    result.makePositive();
  }

  return result;
};

Su.prototype.negate = function () {
  if (this.number === 0) {
    return this;
  }

  if (this.negative) {
    this.nevative = false;
  } else {
    this.negative = true;
  }

  return this;
};

Su.prototype.makePositive = function () {
  if (this.number === 0) {
    return this;
  }

  this.negative = false;
  return this;
};

Su.prototype.makeNegative = function () {
  if (this.number === 0) {
    return this;
  }

  this.negative = true;
  return this;
};

Su.prototype.multiplication = function (su) {
  if (!isSu(su)) {
    throw new Error(NOTSU);
  }

  var a = copySu(this);
  var b = copySu(su);

  if (a.isZero() || b.isZero()) {
    return makeSu(0);
  }

  var negative = false;

  if (a.negative === false && b.negative === true) {
    negative = true;
  } else if (a.negative === true && b.negative === false) {
    negative = true;
  }

  var a_id = a.integer.concat(a.decimal);
  var b_id = b.integer.concat(b.decimal);
  var dp_a = a.integer.length;
  var dp_b = b.integer.length;
  var res_arr = [];

  for (var i_a = 0; i_a < a_id.length; i_a++) {
    for (var i_b = 0; i_b < b_id.length; i_b++) {
      var elm_a = a_id[i_a];
      var elm_b = b_id[i_b];
      var pos_a = dp_a - i_a - 1;
      var pos_b = dp_b - i_b - 1;
      var pos = pos_a + pos_b;

      var _res3 = elm_a * elm_b;

      var len = Math.abs(pos);
      var str = void 0;

      if (pos >= 0) {
        len++;

        if (_res3 > 9) {
          str = String(_res3).padEnd(len + 1, "0");
        } else {
          str = String(_res3).padEnd(len, "0");
        }
      } else {
        if (len === 1 && _res3 > 9) {
          str = String(_res3)[0] + "." + String(_res3)[1];
        } else {
          str = "0." + String(_res3).padStart(len, "0");
        }
      }

      res_arr.push(makeSu(str));
    }
  }

  var res = makeSu(0);

  for (var i = 0; i < res_arr.length; i++) {
    res = res.add(res_arr[i]);
  }

  res.negative = negative;
  return res;
};

Su.prototype.division = function (su) {
  if (!isSu(su)) {
    throw new Error(NOTSU);
  }

  var a = copySu(this);
  var b = copySu(su);

  if (a.isZero() && b.isZero()) {
    return NAN;
  } else if (a.isZero()) {
    return makeSu(0);
  } else if (b.isZero()) {
    return DBZ;
  }

  var negative = false;

  if (a.negative === false && b.negative === true) {
    negative = true;
  } else if (a.negative === true && b.negative === false) {
    negative = true;
  }

  var count = makeSu(0);
  var sum = makeSu(0);

  while (a.isLarge(sum) || a.isEqual(sum)) {
    count = count.add(makeSu(1));
    sum = b.multiplication(count);
  }

  count = count.subtract(makeSu(1));
  sum = sum.subtract(b);
  var remain = a.subtract(sum);
  var res = count;
  res.remainder = remain;
  res.negative = negative;
  return res;
};

Su.prototype.plus = function (su) {
  return this.add(su);
};

Su.prototype.tasu = function (su) {
  return this.add(su);
};

Su.prototype.minus = function (su) {
  return this.subtract(su);
};

Su.prototype.hiku = function (su) {
  return this.subtract(su);
};

Su.prototype.multiply = function (su) {
  return this.multiplication(su);
};

Su.prototype.kakeru = function (su) {
  return this.multiplication(su);
};

Su.prototype.waru = function (su) {
  return this.division(su);
};

Su.prototype.next = function () {
  return this.add(makeSu(1));
};

Su.prototype.prev = function () {
  return this.subtract(makeSu(1));
};

Su.prototype.isEvenNumber = function () {
  if (this.isZero()) {
    return true;
  }

  var res = this.division(makeSu(2));

  if (res.remainder.isZero() && res.remainder.decimal[0] === 0 && res.remainder.decimal.length === 1) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isOddNumber = function () {
  if (this.isZero()) {
    return false;
  }

  var res = this.division(makeSu(2));

  if (!res.remainder.isZero() && res.remainder.decimal[0] === 0 && res.remainder.decimal.length === 1) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.getDivisors = function () {
  var arr = [];

  for (var i = 1; this.isLarge(makeSu(i)); i++) {
    var su = makeSu(i);
    var remainder = this.division(su).remainder;

    if (remainder.isZero()) {
      arr.push(su);
    }
  }

  arr.push(this);
  return arr;
};

Su.prototype.getCommonDivisors = function (su) {
  if (!isSu(su)) {
    su = makeSu(su);
  }

  var a = this;
  var b = su;
  var arr_a = a.getDivisors();

  if (a.isEqual(b)) {
    return arr_a;
  }

  var arr_b = b.getDivisors();
  var divs = [];

  for (var i = 0; i < arr_a.length; i++) {
    var elm_a = arr_a[i];

    for (var j = 0; j < arr_b.length; j++) {
      var elm_b = arr_b[j];

      if (elm_a.isEqual(elm_b)) {
        divs.push(elm_a);
      }
    }
  }

  return divs;
};

Su.prototype.getMaxCommonDivisor = function (su) {
  if (!isSu(su)) {
    su = makeSu(su);
  }

  var arr = this.getCommonDivisors(su);
  return arr[arr.length - 1];
};

Su.prototype.multiple = function () {
  if (this.isZero()) {
    return [this];
  }

  var arr = [];
  var count = makeSu("1");

  while (count.isSmall(CONSTANTS.MAX) || count.isEqual(CONSTANTS.MAX)) {
    arr.push(this.multiplication(count));
    count = count.add(makeSu("1"));
  }

  return arr;
};

Su.prototype.getLeastCommonMultiple = function (su) {
  if (!isSu(su)) {
    su = makeSu(su);
  }

  var a = this;
  var b = su;
  var maxCommonDivisor = a.getMaxCommonDivisor(b);
  var multi = a.multiply(b);
  var res = multi.division(maxCommonDivisor);
  return res;
};

var makeFibonacciSequence = function makeFibonacciSequence(a, b) {
  if (!isSu(a) || !isSu(b)) {
    return false;
  }

  var MAX = CONSTANTS.MAX;
  var arr = [a, b];

  var func = function func(arr) {
    if (arr[arr.length - 1].isLarge(MAX)) {
      return arr;
    }

    var a = arr[arr.length - 2];
    var b = arr[arr.length - 1];
    var c = a.add(b);
    arr.push(c);
    return func(arr);
  };

  return func(arr);
};

var makeLucasSequence = function makeLucasSequence() {
  return makeFibonacciSequence(makeSu(2), makeSu(1));
};

Su.prototype.isFibonacciNumber = function () {
  var n = this;

  if (n.isZero()) {
    return true;
  }

  if (n.containDecimal()) {
    return false;
  }

  var zero = makeSu(0);
  var one = makeSu(1);
  var fibs = makeFibonacciSequence(zero, one);

  for (var i = 0; i < fibs.length; i++) {
    var f = fibs[i];

    if (f.isEqual(n)) {
      return true;
    }
  }

  return false;
};

Su.prototype.isLucasNumber = function () {
  var n = this;

  if (n.containDecimal()) {
    return false;
  }

  var lucs = makeLucasSequence();

  for (var i = 0; i < lucs.length; i++) {
    var f = lucs[i];

    if (f.isEqual(n)) {
      return true;
    }
  }

  return false;
};

var makeSequence = function makeSequence(first, others) {
  var array = [first];

  if (!others) {
    return array;
  }

  for (var i = 0; i < others.length; i++) {
    var elm = others[i];

    if (!isSu(elm)) {
      elm = makeSu(elm);
    }

    array.push(elm);
  }

  return array;
};

Su.prototype.getSequence = function () {
  return makeSequence(this, arguments);
};

Su.prototype.summation = function () {
  var arr = makeSequence(this, arguments);
  var sum = makeSu(0);

  for (var i = 0; i < arr.length; i++) {
    sum = sum.add(arr[i]);
  }

  return sum;
};

Su.prototype.infiniteProduct = function () {
  var arr = makeSequence(this, arguments);
  var ip = arr[0];

  for (var i = 1; i < arr.length; i++) {
    ip = ip.multiplication(arr[i]);
  }

  return ip;
};

Su.prototype.digitsum = function () {
  var sum = makeSu(0);

  for (var i = 0; i < this.integer.length; i++) {
    var a = makeSu(this.integer[i]);
    sum = sum.add(a);
  }

  return sum;
};

Su.prototype.square = function () {
  return this.exponentiate(makeSu(2));
};

Su.prototype.cube = function () {
  return this.exponentiate(makeSu(3));
};

Su.prototype.exponentiate = function (su) {
  var one = makeSu("1");

  if (su.isZero()) {
    return one;
  }

  if (su.isEqual(one)) {
    return this;
  }

  var count = one;
  var res = copySu(this);

  while (count.isSmall(su)) {
    res = this.multiplication(res);
    count = count.next();
  }

  return res;
};

Su.prototype.isPrimeNumber = function () {
  if (this.containDecimal()) {
    return false;
  }

  if (this.isOne() || this.isZero()) {
    return false;
  }

  if (this.getString() === "2") {
    return true;
  }

  var counter = this.subtract(makeSu(1));
  var one = makeSu(1);

  while (counter.isLarge(one)) {
    var e = this.division(counter);

    if (e.remainder.isZero()) {
      return false;
    }

    counter = counter.subtract(makeSu(1));
  }

  return true;
};

Su.prototype.divisorsSummation = function () {
  var arr = this.getDivisors();
  var a = makeSu(0);

  for (var i = 0; i < arr.length; i++) {
    a = a.add(arr[i]);
  }

  return a;
};

Su.prototype.isAbundantNumber = function () {
  var sum = this.divisorsSummation();

  if (sum.isLarge(this.multiplication(makeSu(2)))) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isDeficientNumber = function () {
  var sum = this.divisorsSummation();

  if (sum.isSmall(this.multiplication(makeSu(2)))) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.isPerfectNumber = function () {
  var sum = this.divisorsSummation();

  if (sum.subtract(this).isEqual(this)) {
    return true;
  } else {
    return false;
  }
};

Su.prototype.factorial = function () {
  var res = this;
  var counter = this.subtract(makeSu(1));
  var zero = makeSu(0);

  while (counter.isLarge(zero)) {
    res = res.multiplication(counter);
    counter = counter.subtract(makeSu(1));
  }

  return res;
};

var makePolygonalNumbers = function makePolygonalNumbers(n, max) {
  if (!isSu(n)) {
    return;
  }

  if (n.isSmall(makeSu(3))) {
    return [];
  }

  var current = makeSu(1);
  var arr = [];
  var range = current;

  if (!max) {
    max = CONSTANTS.MAX;
  } else {
    max = max.next();
  }

  var increment = n.subtract(makeSu(2));

  while (current.isSmall(max)) {
    arr.push(current);
    range = range.add(increment);
    current = current.add(range);
  }

  return arr;
};

var makeTriangleNumbers = function makeTriangleNumbers(max) {
  return makePolygonalNumbers(makeSu(3), max);
};

var makeSquareNumbers = function makeSquareNumbers(max) {
  return makePolygonalNumbers(makeSu(4), max);
};

Su.prototype.isTriangleNumber = function () {
  var su = this;
  var arr = makeTriangleNumbers(su);
  var res = arr.find(function (elm) {
    return elm.isEqual(su);
  });

  if (res) {
    return true;
  }

  return false;
};

Su.prototype.isSquareNumber = function () {
  var su = this;
  var arr = makeSquareNumbers(su);
  var res = arr.find(function (elm) {
    return elm.isEqual(su);
  });

  if (res) {
    return true;
  }

  return false;
};

var makeMersenneNumbers = function makeMersenneNumbers(max) {
  if (!max) {
    max = CONSTANTS.MAX;
  } else {
    max = max.next();
  }

  var two = makeSu(2);
  var arr = [];
  var current = makeSu(0);
  var ex = makeSu(1);

  while (current.isSmall(max)) {
    current = two.exponentiate(ex).subtract(makeSu(1));
    arr.push(current);
    ex = ex.add(makeSu(1));
  }

  return arr;
};

var makeMersennePrimeNumbers = function makeMersennePrimeNumbers(max) {
  if (!max) {
    max = CONSTANTS.MAX;
  } else {
    max = max.next();
  }

  var marr = makeMersenneNumbers(max);
  var arr = [];

  for (var i = 0; i < marr.length; i++) {
    var n = marr[i];

    if (n.isPrimeNumber()) {
      arr.push(n);
    }
  }

  return arr;
};

Su.prototype.isMersenneNumber = function () {
  var n = this;

  if (n.isZero()) {
    return false;
  }

  if (n.containDecimal()) {
    return false;
  }

  var ms = makeMersenneNumbers(n);

  for (var i = 0; i < ms.length; i++) {
    var m = ms[i];

    if (m.isEqual(n)) {
      return true;
    }
  }

  return false;
};

Su.prototype.isMersennePrimeNumber = function () {
  var n = this;

  if (n.isZero()) {
    return false;
  }

  if (n.containDecimal()) {
    return false;
  }

  var ms = makeMersennePrimeNumbers(n);

  for (var i = 0; i < ms.length; i++) {
    var m = ms[i];

    if (m.isEqual(n)) {
      return true;
    }
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  makeSu: makeSu,
  copySu: copySu,
  isSu: isSu,
  Su: Su
});

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3UvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNPTlNUQU5UUyIsIk1JTiIsIlMiLCJLIiwibWFrZVN1Iiwic3UiLCJjb3B5U3UiLCJpc1N1IiwiU3UiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJ1bmRlZmluZWQiLCJzdHIiLCJTdHJpbmciLCJNYXRoIiwicmFuIiwiaXNaZXJvIiwiYXJyIiwic3BsaXQiLCJtdWx0aXBsaWNhdGlvbiIsInJhbmRvbUVsZW1lbnQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJpbnRlZ2VyIiwicmFuZG9tSW50IiwiaXNFcXVhbCIsImlzTGFyZ2UiLCJnZXROdW1iZXIiLCJzIiwicHVzaCIsInJlcyIsIm1ha2VQcmltZU51bWJlcnMiLCJOdW1iZXIiLCJnZXRTdHJpbmciLCJpc1ByaW1lTnVtYmVyIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwiYSIsImIiLCJpc051bWJlciIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImoiLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJuIiwiZGl2aXNvcnMiLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwibWF4Q29tbW9uRGl2aXNvciIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsImFycmF5U3VtbWF0aW9uIiwiQXJyYXkiLCJjb3JlIiwibnVtVG9BcnJheSIsImlzTnVtQXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJBIiwiQiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXJnZXIiLCJhcnJfYSIsImFycl9iIiwiZ2FwIiwib3ZlciIsImFycl9jIiwiX3JlcyIsImVsbV9hIiwiZWxtX2IiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsIk5hTiIsInNsaWNlIiwiRXJyb3IiLCJudW1Ub0FycmF5V2l0aERlY2ltYWwiLCJhcnIxIiwiYXJyMiIsInRndCIsImFkZCIsImFfIiwiYl8iLCJjYXJyeSIsImFhIiwiYmIiLCJTSyIsImNvbnN0YW50cyIsIm9wdGlvbiIsIm5lZ2F0aXZlIiwicGFydHMiLCJpbnRfc3RyIiwiZGVjaW1hbF9zdHIiLCJpbnQwIiwibWF0Y2giLCJuZXdfaW50X3N0ciIsInN0YXJ0X3plcm8iLCJkZWMwIiwiZW5kX3plcm8iLCJuZXdfZGVjaW1hbF9zdHIiLCJpbnRfYXJyIiwiZGVjaW1hbF9hcnIiLCJlIiwiZGVjaW1hbCIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJtZXNzYWdlIiwiWkVSTyIsIk9ORSIsInByb3RvdHlwZSIsImFjIiwicmVkdWNlIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpX2EiLCJpX2IiLCJkX2EiLCJkX2IiLCJsYXJnZSIsImNvbnRhaW5EZWNpbWFsIiwiaXNPbmUiLCJpc1NtYWxsIiwiaXNQb3NpdGl2ZSIsImlzTmVnYXRpdmUiLCJ2IiwibWFrZVBvc2l0aXZlIiwic3VidHJhY3QiLCJpbnRfYSIsImRlY19hIiwiaW50X2IiLCJkZWNfYiIsImxlbl9pIiwibGVuX2QiLCJpbnRfcmVzIiwiZGVjX3JlcyIsImQiLCJwb3AiLCJuZWdhdGUiLCJhX2lkIiwiYl9pZCIsImFfaV9sZW4iLCJiX2lfbGVuIiwiYV9kX2xlbiIsImJfZF9sZW4iLCJkX2dhcCIsImFicyIsImRlYnQiLCJyZXNfYXJyYXkiLCJhX2VsbSIsImJfZWxtIiwic3BsaWNlIiwibWludXMiLCJuZXZhdGl2ZSIsIm1ha2VOZWdhdGl2ZSIsImRwX2EiLCJkcF9iIiwicmVzX2FyciIsInBvc19hIiwicG9zX2IiLCJwb3MiLCJwYWRFbmQiLCJwYWRTdGFydCIsImNvdW50IiwicmVtYWluIiwicGx1cyIsInRhc3UiLCJoaWt1IiwibXVsdGlwbHkiLCJrYWtlcnUiLCJ3YXJ1IiwibmV4dCIsInByZXYiLCJnZXREaXZpc29ycyIsImdldENvbW1vbkRpdmlzb3JzIiwiZGl2cyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJtdWx0aXBsZSIsImdldExlYXN0Q29tbW9uTXVsdGlwbGUiLCJtdWx0aSIsIm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSIsImZ1bmMiLCJjIiwibWFrZUx1Y2FzU2VxdWVuY2UiLCJpc0ZpYm9uYWNjaU51bWJlciIsInplcm8iLCJvbmUiLCJmaWJzIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJtYWtlU2VxdWVuY2UiLCJvdGhlcnMiLCJnZXRTZXF1ZW5jZSIsImRpZ2l0c3VtIiwic3F1YXJlIiwiZXhwb25lbnRpYXRlIiwiY3ViZSIsImlzRGVmaWNpZW50TnVtYmVyIiwiaXNQZXJmZWN0TnVtYmVyIiwiZmFjdG9yaWFsIiwibWFrZVBvbHlnb25hbE51bWJlcnMiLCJjdXJyZW50IiwicmFuZ2UiLCJpbmNyZW1lbnQiLCJtYWtlVHJpYW5nbGVOdW1iZXJzIiwibWFrZVNxdWFyZU51bWJlcnMiLCJpc1RyaWFuZ2xlTnVtYmVyIiwiZmluZCIsImlzU3F1YXJlTnVtYmVyIiwibWFrZU1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzIiwibWFyciIsImlzTWVyc2VubmVOdW1iZXIiLCJtcyIsIm0iLCJpc01lcnNlbm5lUHJpbWVOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7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QUFFQTtBQUpTLENBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcbmltcG9ydCBzdSBmcm9tIFwiLi9zdS5qc1wiO1xuXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuY29uc3QgTUlOID0gQ09OU1RBTlRTLk1JTjtcblxuY29uc3QgUyA9IHt9O1xuY29uc3QgSyA9IHt9O1xuXG5jb25zdCBtYWtlU3UgPSBzdS5tYWtlU3U7XG5jb25zdCBjb3B5U3UgPSBzdS5jb3B5U3U7XG5jb25zdCBpc1N1ID0gc3UuaXNTdTtcbmNvbnN0IFN1ID0gc3UuU3U7XG5cbmNvbnN0IEZJUlNUX1BSSU1FX05VTUJFUiA9IDI7XG5cblxuSy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSBtYWtlU3UoMCk7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IG1ha2VTdSgxKTtcbiAgfVxuICBpZighaXNTdShtaW4pKXtcbiAgICBtaW4gPSBtYWtlU3UobWluKTtcbiAgfVxuICBpZighaXNTdShtYXgpKXtcbiAgICBtYXggPSBtYWtlU3UobWF4KTtcbiAgfVxuXG4gIGNvbnN0IHN0ciA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IHJhbjtcblxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBpZihtaW4uaXNaZXJvKCkpe1xuICAgICAgcmFuID0gbWFrZVN1KDApO1xuICAgIH1lbHNle1xuICAgICAgcmFuID0gbWluO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgcmFuID0gbWFrZVN1KFwiMC5cIiArIGFyclsxXSkubXVsdGlwbGljYXRpb24obWF4KTtcbiAgfVxuICByZXR1cm4gcmFuO1xufTtcblxuSy5yYW5kb21FbGVtZW50ID0gZnVuY3Rpb24oYXJyYXkpe1xuICBjb25zdCBpID0gSy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKS5pbnRlZ2VyO1xuICByZXR1cm4gYXJyYXlbaV07XG59O1xuXG5LLnJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcblxuICBpZiggIWlzU3UobWluKSB8fCAhaXNTdShtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYobWluLmlzRXF1YWwobWF4KSB8fCBtaW4uaXNMYXJnZShtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gbWluLmdldE51bWJlcigpOyBpIDw9IG1heC5nZXROdW1iZXIoKTsgaSsrKXtcbiAgICBjb25zdCBzID0gbWFrZVN1KGkpO1xuICAgIGFyci5wdXNoKHMpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gSy5yYW5kb21FbGVtZW50KGFycik7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbksubWFrZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKG1heCAmJiBtYXguaXNTdSAmJiBtYXguaXNTdSgpKXtcbiAgICBtYXggPSBOdW1iZXIobWF4LmdldFN0cmluZygpKTtcbiAgfVxuXG4gIGNvbnN0IE1BWCA9IDEwMDtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gTUFYO1xuICB9XG4gIGlmKG1heCA+IE1BWCl7XG4gICAgbWF4ID0gTUFYO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBGSVJTVF9QUklNRV9OVU1CRVI7IGkgPCBtYXg7IGkrKyl7XG4gICAgY29uc3Qgc3UgPSBtYWtlU3UoaSk7XG4gICAgaWYoc3UuaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblxuLy8g44Om44O844Kv44Oq44OD44OJ44Gu5LqS6Zmk5rOVXG5LLmV1Y2xpZGVhbkFsZ29yaXRobSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIVMuaXNOdW1iZXIoYSkgfHwgIVMuaXNOdW1iZXIoYikpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZiggYSA9PT0gYil7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgdGVtcDtcbiAgaWYoIGEgPCBiKXtcbiAgICB0ZW1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdGVtcDtcbiAgfVxuXG4gIGxldCBhdGVtcCA9IGE7XG4gIGxldCBidGVtcCA9IGI7XG4gIGxldCBjdGVtcDtcbiAgbGV0IHJlcztcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBjb3ByaW1lID0gXCJjb3ByaW1lXCI7XG4gIHdoaWxlKGN0ZW1wICE9PTApe1xuICAgIGN0ZW1wID0gYXRlbXAgJSBidGVtcDtcbiAgICBpZihjdGVtcCA9PT0gMCl7XG4gICAgICByZXMgPSBidGVtcDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjdGVtcCA9PT0gMSl7XG4gICAgICByZXMgPSBjb3ByaW1lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGNvdW50ZXIgPj0gTUFYKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBhdGVtcCA9IGJ0ZW1wO1xuICAgIGJ0ZW1wID0gY3RlbXA7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5cblxuSy5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBlbXB0eS5cIjtcbiAgfVxuICBsZXQgaXAgPSAxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2ldO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpcCA9IGlwICogZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IGEgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBpcDtcbn07XG5cbksuZGl2aXNpb24gPSBmdW5jdGlvbihkaXZpZGVuZCwgZGl2aXNvcil7XG4gIGlmKGRpdmlkZW5kID09PSB1bmRlZmluZWQgfHwgZGl2aXNvciA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gZGl2aWRlbmQgLyBkaXZpc29yO1xuICByZXR1cm4ge1xuICAgIGludGVnZXI6IHtcbiAgICAgIHJlbWFpbmRlcjogZGl2aWRlbmQgJSBkaXZpc29yLFxuICAgICAgcmVzdWx0OiBNYXRoLmZsb29yKHJlc3VsdClcbiAgICB9LFxuICAgIHJlYWxOdW1iZXI6IHJlc3VsdFxuICB9O1xufTtcblxuSy5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBsZXQgYSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgKz0gYXJyW2ldO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuSy5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHN1bSA9IEsuZGl2aXNvcnNTdW1tYXRpb24obik7XG4gIGlmKHN1bSA+IG4gKiAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBuICogbjtcbiAgY29uc3QgcyA9IFN0cmluZyhudW0pO1xuICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcbiAgbGV0IGZpcnN0X2xlbiA9IDA7XG4gIGxldCBhZnRlcl9sZW4gPSAwO1xuICBsZXQgZmlyc3QsIGFmdGVyO1xuICBpZihTLmlzT2RkTnVtYmVyKGxlbikpe1xuICAgIGZpcnN0X2xlbiA9IChsZW4gLSAxKSAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuICsgMTtcbiAgfWVsc2V7XG4gICAgZmlyc3RfbGVuID0gbGVuIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW47XG4gIH1cbiAgZmlyc3QgPSBOdW1iZXIocy5zdWJzdHIoMCwgZmlyc3RfbGVuKSk7XG4gIGFmdGVyID0gTnVtYmVyKHMuc3Vic3RyKGZpcnN0X2xlbiwgYWZ0ZXJfbGVuKSk7XG5cbiAgaWYoKCBmaXJzdCArIGFmdGVyICkgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVCID0gZnVuY3Rpb24obil7XG5cbiAgY29uc3QgYXJyID0gU3RyaW5nKG4pLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IG1pbiA9IE51bWJlcihhcnIuc29ydCgpLmpvaW4oXCJcIikpO1xuICBjb25zdCBtYXggPSBOdW1iZXIoYXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcblxuICBpZigobWF4IC0gbWluKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKEsuaXNLYXByZWthck51bWJlclR5cGVBKG4pIHx8IEsuaXNLYXByZWthck51bWJlclR5cGVCKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgZiA9IE1hdGguZmxvb3Iobik7XG4gIGlmKCBmID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyDoqr/lkozlubPlnYdcbksuaGFybW9uaWNNZWFuID0gZnVuY3Rpb24oYXJyKXtcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgc3VtICs9IDEgLyBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGxlbiAvIHN1bTtcbn07XG5cbi8vIOiqv+WSjOaVsOOBi+OBqeOBhuOBi1xuSy5pc0hhcm1vbmljRGl2aXNvck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBjb25zdCByZXMgPSBLLmhhcm1vbmljTWVhbihhcnIpO1xuICBpZihTLmlzSW50ZWdlcihyZXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID4gMCAmJiBTLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuSy5jb2xsYXR6aFByb2JsZW0gPSBmdW5jdGlvbihudW0pe1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihuKXtcbiAgICBsZXQgcmVzID0gbjtcbiAgICBpZihTLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gKiAzICsgMTtcbiAgICB9ZWxzZSBpZihTLmlzRXZlbk51bWJlcihuKSl7XG4gICAgICByZXMgPSBuIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB3aGlsZShudW0gPiAxKXtcbiAgICBudW0gPSBjYWxjKG51bSk7XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44OV44Kn44Or44Oe44O844OG44K544OIXG4vLyBKU+OBruaJseOBiOOCi+evhOWbsuOCkui2heOBiOOBpuOBhOOBpuOBhuOBvuOBj+WLleOBi+OBmlxuSy5mZXJtYXRUZXN0ID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIVMuaXNJbnRlZ2VyKG4pIHx8IFMuaXNaZXJvKG4pIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnMuIFwiICsgbiArIFwiIGlzIGluY29ycmVjdCBwYXJhbWV0ZXIuXCI7XG4gIH1cblxuICBpZighbWF4KXtcbiAgICBtYXggPSAxMDA7XG4gIH1cblxuICBmb3IobGV0IGkgPSAxOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBhID0gSy5yYW5kb21JbnQoMiwgbiAtIDEpO1xuICAgIGlmKEsubWF4Q29tbW9uRGl2aXNvcihhLCBuKSAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gTWF0aC5wb3coYSwgbiAtIDEpICUgbjtcbiAgICBpZihyZXMgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIk1heWJlIFByaW1lIE51bWJlclwiO1xufTtcblxuLy8g57WE44G/5ZCI44KP44Gb5pWw44Gu6KiI566XXG4vLyBLLmNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGFycil7XG4vLyB9O1xuXG4vLyAzID0+IFswLCAzXSwgWzEsIDJdLCBbMiwgMV0sIFszLCAwXVxuSy5nZXRJbmNsdWRlc051bWJlcnMgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHRlbXAgPSBudW07XG4gIGxldCBib29sID0gdHJ1ZTtcbiAgd2hpbGUoYm9vbCl7XG4gICAgY29uc3QgYSA9IHRlbXA7XG4gICAgY29uc3QgYiA9IG51bSAtdGVtcDtcbiAgICBjb25zdCBhciA9IFthLGJdO1xuICAgIGFyci5wdXNoKGFyKTtcbiAgICB0ZW1wID0gdGVtcCAtMTtcbiAgICBpZih0ZW1wIDwgMCl7XG4gICAgICBib29sID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIGZpYm9uYWNjaVxuXG5cblxuXG5cblxuXG4vLyB0b2RvIDBzdGFydFxuY29uc3QgYXJyYXlTdW1tYXRpb24gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICEoYSBpbnN0YW5jZW9mIEFycmF5KSApe1xuICAgIGEgPSBjb3JlLm51bVRvQXJyYXkoYSk7XG4gIH1cbiAgaWYoICEoYiBpbnN0YW5jZW9mIEFycmF5KSApe1xuICAgIGIgPSBjb3JlLm51bVRvQXJyYXkoYik7XG4gIH1cblxuICBpZighY29yZS5pc051bUFycmF5KGEpIHx8ICFjb3JlLmlzTnVtQXJyYXkoYikpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZihjb3JlLmlzWmVybyhhWzBdKSAmJiBjb3JlLmlzWmVybyhiWzBdKSl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFycmF5OiBbMF0sXG4gICAgICBzdHJpbmc6IFwiMFwiLFxuICAgICAgbnVtYmVyOiAwLFxuICAgICAgbGVuZ3RoOiAxXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IEEgPSBtYWtlU3UoYSk7XG4gIGNvbnN0IEIgPSBtYWtlU3UoYik7XG5cbiAgY29uc29sZS5sb2coQSxCKTtcblxuICBjb25zdCByZXMgPSBjb3JlLmdldExhcmdlcihhLCBiKTtcbiAgY29uc3QgYXJyX2EgPSByZXNbMF07XG4gIGNvbnN0IGFycl9iID0gcmVzWzFdO1xuICBjb25zdCBsZW4gPSBhcnJfYS5sZW5ndGg7XG5cbiAgY29uc3QgZ2FwID0gbGVuIC0gYXJyX2IubGVuZ3RoO1xuXG4gIGxldCBvdmVyID0gMCwgYXJyX2MgPSBbXTtcbiAgZm9yKGxldCBpID0gbGVuIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgY29uc3QgZWxtX2IgPSBhcnJfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBhcnJfYy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBhcnJfYy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGFycl9jKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY29uc3QgZ2V0TGFyZ2VyID0gZnVuY3Rpb24oYSwgYil7XG4gIGNvbnN0IGFycl9hID0gW10sIGFycl9iID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFbaV07XG4gICAgaWYoZWxtX2EgPT09IDAgJiYgYXJyX2EubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZihlbG1fYSA+PSAgMCAmJiBlbG1fYSA8IDEwKXtcbiAgICAgIGFycl9hLnB1c2goZWxtX2EpO1xuICAgIH1cbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG1fYiA9IGJbaV07XG4gICAgaWYoZWxtX2IgPT09IDAgJiYgYXJyX2IubGVuZ3RoID09PSAwKXtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZihlbG1fYiA+PSAgMCAmJiBlbG1fYiA8IDEwKXtcbiAgICAgIGFycl9iLnB1c2goZWxtX2IpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXM7XG4gIGlmKGFycl9hLmxlbmd0aCA+IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2EsIGJdO1xuICB9ZWxzZSBpZihhcnJfYS5sZW5ndGggPCBhcnJfYi5sZW5ndGgpe1xuICAgIHJlcyA9IFtiLCBhXTtcbiAgfWVsc2V7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICAgIGNvbnN0IGVsbV9hYSA9IGFycl9hW2ldO1xuICAgICAgY29uc3QgZWxtX2JiID0gYXJyX2JbaV07XG4gICAgICBpZihlbG1fYWEgPiBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2FhIDwgZWxtX2JiKXtcbiAgICAgICAgcmVzID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNle1xuICAgICAgICByZXMgPSBbYSwgYl07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBTOiBTLFxuICBLOiBLXG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYOiAxMDAwMCxcbiAgTUlOOiAtMTAwMDAsXG4gIERCWjogXCJEaXZpc2lvbiBieSBaZXJvXCIsXG4gIE5BTjogXCJOb3QgYSBudW1iZXJcIixcbiAgTk9UU1U6IFwiQXJndW1lbnQgaXMgbm90IFN1LlwiXG59O1xuIiwiY29uc3QgY29yZSA9IHt9O1xuXG5jb3JlLmlzTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKXtcbiAgaWYoIG4gPT09IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vLyDphY3liJfjgafjga7oqIjnrpdcbmNvcmUubnVtVG9BcnJheSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKG4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IE51bWJlcihzdHIuc2xpY2UoaSwgaSArIDEpKTtcbiAgICBpZighdGhpcy5pc051bWJlcihlbG0pKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIik7XG4gICAgfVxuICAgIGFyci5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFycjEgPSBbXTtcbiAgY29uc3QgYXJyMiA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGxldCB0Z3QgPSBhcnIxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IE51bWJlcihzdHJbaV0pO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgaWYoZWxtID09PSBcIi5cIiAmJiB0Z3QgPT09IGFycjEpe1xuICAgICAgICB0Z3QgPSBhcnIyO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIik7XG4gICAgICB9XG4gICAgfVxuICAgIHRndC5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIFsuLi5hcnIxLCBcIi5cIiwgYXJyMl07XG59O1xuXG5jb3JlLmlzTnVtQXJyYXkgPSBmdW5jdGlvbihhcnIpe1xuICBpZiggYXJyIGluc3RhbmNlb2YgQXJyYXkgKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKCAhdGhpcy5pc051bWJlcihhcnJbaV0pICl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvcmUuYWRkID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCFhICYmICFiKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBhXyA9IHRoaXMubnVtVG9BcnJheShhKS5yZXZlcnNlKCk7XG4gIGNvbnN0IGJfID0gdGhpcy5udW1Ub0FycmF5KGIpLnJldmVyc2UoKTtcblxuICBjb25zdCBhcnIgPSBbXTtcblxuICBsZXQgYXJyX2EgPSBhXztcbiAgbGV0IGFycl9iID0gYl87XG4gIGlmKGFfLmxlbmd0aCA8IGJfLmxlbmd0aCl7XG4gICAgYXJyX2EgPSBiXztcbiAgICBhcnJfYiA9IGFfO1xuICB9XG4gIFxuICBcbiAgbGV0IGNhcnJ5ID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgIGNvbnN0IGJiID0gYXJyX2JbaV0gPyBhcnJfYltpXSA6IDA7XG4gICAgbGV0IHJlcyA9IGFhICsgYmIgKyBjYXJyeTtcbiAgICBpZihyZXMgPiA5KXtcbiAgICAgIHJlcyA9IHJlcyAtMTA7XG4gICAgICBjYXJyeSA9IDE7XG4gICAgfWVsc2V7XG4gICAgICBjYXJyeSA9IDA7XG4gICAgfVxuICAgIGFyci5wdXNoKHJlcyk7XG4gIH1cblxuICBpZihjYXJyeSA+IDApe1xuICAgIGFyci5wdXNoKGNhcnJ5KTtcbiAgfVxuXG4gIHJldHVybiBhcnIucmV2ZXJzZSgpO1xuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCJpbXBvcnQgcyBmcm9tIFwiLi9zdS5qc1wiO1xuaW1wb3J0IFNLIGZyb20gXCIuL1NLLmpzXCI7XG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgczogcyxcbiAgUzogU0suUyxcbiAgSzogU0suSyxcbiAgY29yZTogY29yZVxufTsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IE1BWCA9IGNvbnN0YW50cy5NQVg7XG5jb25zdCBNSU4gPSBjb25zdGFudHMuTUlOO1xuY29uc3QgREJaID0gY29uc3RhbnRzLkRCWjtcbmNvbnN0IE5BTiA9IGNvbnN0YW50cy5OQU47XG5jb25zdCBOT1RTVSA9IGNvbnN0YW50cy5OT1RTVTtcblxuXG5jb25zdCBTdSA9IGZ1bmN0aW9uKG4sIG9wdGlvbil7XG4gIGlmKGlzTmFOKG4pKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuICBpZighbil7XG4gICAgbiA9IDA7XG4gIH1cbiAgaWYoIW9wdGlvbil7XG4gICAgb3B0aW9uID0ge307XG4gIH1cblxuICBsZXQgc3RyID0gU3RyaW5nKG4pO1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0gPT09IFwiLVwiKXtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCk7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIGlmKCFuZWdhdGl2ZSAmJiBvcHRpb24gJiYgb3B0aW9uLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihpc05hTihOdW1iZXIoc3RyKSkpe1xuICAgIHN0ciA9IFwiMFwiO1xuICB9XG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICBsZXQgaW50X3N0ciA9IHBhcnRzWzBdO1xuICBsZXQgZGVjaW1hbF9zdHIgPSBwYXJ0c1sxXTtcbiAgaWYoaW50X3N0cil7XG4gICAgY29uc3QgaW50MCA9IGludF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoaW50MCAmJiBpbnQwLmxlbmd0aCA9PT0gaW50X3N0ci5sZW5ndGgpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgbmV3X2ludF9zdHIgPSBcIlwiO1xuICAgIGxldCBzdGFydF96ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDxpbnRfc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKGludF9zdHJbaV0gIT09IFwiMFwiIHx8ICFzdGFydF96ZXJvKXtcbiAgICAgICAgc3RhcnRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfaW50X3N0ciArPSBpbnRfc3RyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2ludF9zdHIpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgaW50X3N0ciA9IG5ld19pbnRfc3RyO1xuICAgIH1cbiAgfVxuXG4gIGlmKGRlY2ltYWxfc3RyKXtcbiAgICBjb25zdCBkZWMwID0gZGVjaW1hbF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoZGVjMCAmJiBkZWMwLmxlbmd0aCA9PT0gZGVjaW1hbF9zdHIubGVuZ3RoKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBlbmRfemVybyA9IHRydWU7XG4gICAgbGV0IG5ld19kZWNpbWFsX3N0ciA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gZGVjaW1hbF9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgaWYoZGVjaW1hbF9zdHJbaV0gIT09IFwiMFwiIHx8ICFlbmRfemVybyl7XG4gICAgICAgIGVuZF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19kZWNpbWFsX3N0ciA9IGRlY2ltYWxfc3RyW2ldICsgbmV3X2RlY2ltYWxfc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2RlY2ltYWxfc3RyKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBkZWNpbWFsX3N0ciA9IG5ld19kZWNpbWFsX3N0cjtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBpbnRfYXJyO1xuICBsZXQgZGVjaW1hbF9hcnI7XG5cblxuICB0cnl7XG4gICAgaW50X2FyciA9IGNvcmUubnVtVG9BcnJheShpbnRfc3RyKTtcbiAgICBkZWNpbWFsX2FyciA9IGRlY2ltYWxfc3RyID8gY29yZS5udW1Ub0FycmF5KGRlY2ltYWxfc3RyKSA6IFswXTtcbiAgfWNhdGNoKGUpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG5cbiAgdGhpcy5pbnRlZ2VyID0gaW50X2FycjtcbiAgdGhpcy5kZWNpbWFsID0gZGVjaW1hbF9hcnI7XG4gIHRoaXMubmVnYXRpdmUgPSBuZWdhdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgXG4gIGxldCBkZW5vbWluYXRvciA9IFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNpbWFsLmxlbmd0aDsgaSsrKXtcbiAgICBkZW5vbWluYXRvci5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5mcmFjdGlvbiA9IHtcbiAgICBudW1lcmF0b3I6IHRoaXMuaW50ZWdlci5jb25jYXQodGhpcy5kZWNpbWFsKSxcbiAgICBkZW5vbWluYXRvcjogZGVub21pbmF0b3JcbiAgfTtcblxufTtcblxuY29uc3QgbWFrZVN1ID0gZnVuY3Rpb24obnVtLCBvcHRpb24pe1xuICBsZXQgcmVzO1xuICB0cnl7XG4gICAgcmVzID0gbmV3IFN1KG51bSwgb3B0aW9uKTtcbiAgfWNhdGNoKGUpe1xuICAgIHJlcyA9IGUubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG5cbn07XG5cbmNvbnN0IGlzU3UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKHN1IGluc3RhbmNlb2YgU3Upe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb3B5U3UgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IHN0ciA9IHN1LmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gIFpFUk86IG1ha2VTdSgwKSxcbiAgT05FOiBtYWtlU3UoMSksXG4gIEZJUlNUX1BSSU1FX05VTUJFUjogbWFrZVN1KDIpLFxuICBNQVg6IG1ha2VTdShNQVgpLFxuICBNSU46IG1ha2VTdShNSU4pXG59O1xuXG5cblN1LnByb3RvdHlwZS5nZXRTdHJpbmcgPSBmdW5jdGlvbigpe1xuICBsZXQgc3RyID0gU3RyaW5nKCB0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIGNvbnN0IGFjID0gdGhpcy5kZWNpbWFsLnJlZHVjZSgoYSxlKSA9PiBhICsgZSk7XG4gIGlmKGFjICE9PSAwKXtcbiAgICBzdHIgKz0gXCIuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gdGhpcy5uZWdhdGl2ZSA/IGAtJHtzdHJ9YCA6IHN0cjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5nZXRTdHJpbmcoKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0SW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcihcIjAuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdHIgPSB0aGlzLmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBnZXRMYXJnZSA9IGZ1bmN0aW9uKGEsIGIsIGFic29sdXRlID0gZmFsc2Upe1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBsZXQgZmllbGQgPSBbXTtcblxuICBjb25zdCBfYSA9IG1ha2VTdShhLmdldFN0cmluZygpKTtcbiAgY29uc3QgX2IgPSBtYWtlU3UoYi5nZXRTdHJpbmcoKSk7XG5cbiAgaWYoYWJzb2x1dGUpe1xuICAgIF9hLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgX2IubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmKF9hLmlzWmVybygpICYmIF9iLmlzWmVybygpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiAhX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBiO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoX2EuaW50ZWdlci5sZW5ndGggPiBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5pbnRlZ2VyLmxlbmd0aCA8IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgX2EuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gX2EuaW50ZWdlcltpXTtcbiAgICBsZXQgZWxtX2IgPSBfYi5pbnRlZ2VyW2ldO1xuICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICBicmVhaztcbiAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICBjb25zdCBsZW4gPSBfYS5kZWNpbWFsLmxlbmd0aCA+PSBfYi5kZWNpbWFsLmxlbmd0aCA/IF9hLmRlY2ltYWwubGVuZ3RoIDogX2IuZGVjaW1hbC5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IF9hLmRlY2ltYWxbaV0gPyBfYS5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGxldCBlbG1fYiA9IF9iLmRlY2ltYWxbaV0gPyBfYi5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKG5lZ2F0aXZlKXtcbiAgICBmaWVsZCA9IFtmaWVsZFsxXSwgZmllbGRbMF1dO1xuICB9XG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZmllbGRbMF07XG5cbn07XG5cblxuU3UucHJvdG90eXBlLmlzRXF1YWwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCBpX2EgPSBhLmludGVnZXI7XG4gIGNvbnN0IGlfYiA9IGIuaW50ZWdlcjtcbiAgY29uc3QgZF9hID0gYS5kZWNpbWFsO1xuICBjb25zdCBkX2IgPSBiLmRlY2ltYWw7XG5cbiAgY29uc3QgbGFyZ2UgPSBnZXRMYXJnZShhLCBiKTtcblxuICBpZighbGFyZ2Upe1xuICAgIGlmKGlfYS5sZW5ndGggPT09IGlfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGlfYVtpXSAhPT0gaV9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZSBpZihkX2EubGVuZ3RoID09PSBkX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihkX2FbaV0gIT09IGRfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoYS5uZWdhdGl2ZSA9PT0gYi5uZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59O1xuXG5TdS5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pbnRlZ2VyLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmludGVnZXJbMF0gPT09IDAgJiYgIXRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT25lID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMVwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMYXJnZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBhLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTbWFsbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBiLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1Bvc2l0aXZlKCkgJiYgdGhpcy5pc0ludGVnZXIoKSAmJiB0aGlzLmlzTGFyZ2UoQ09OU1RBTlRTLlpFUk8pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmNvbnRhaW5EZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdGhpcy5kZWNpbWFsLnJlZHVjZShmdW5jdGlvbihhLCB2KXtcbiAgICAgIHJldHVybiBhICsgdjtcbiAgfSk7XG4gIGlmKHJlcyA9PT0gMCl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gdGhpcy5jbG9uZSgpO1xuICBsZXQgYiA9IHN1LmNsb25lKCk7XG4gIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiO1xuICB9XG4gIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlO1xuICBpZihhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIGIubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGEuc3VidHJhY3QoYik7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIGEubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGIuc3VidHJhY3QoYSk7XG4gIH1cblxuICBsZXQgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJlcyA9IGE7XG4gIH1cbiAgbGV0IGludF9hID0gcmVzLmludGVnZXI7XG4gIGxldCBkZWNfYSA9IHJlcy5kZWNpbWFsO1xuICBsZXQgaW50X2IsIGRlY19iO1xuICBpZihyZXMgPT09IGEpe1xuICAgIGludF9iID0gYi5pbnRlZ2VyO1xuICAgIGRlY19iID0gYi5kZWNpbWFsO1xuICB9ZWxzZXtcbiAgICBpbnRfYiA9IGEuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGEuZGVjaW1hbDtcbiAgfVxuXG4gIGxldCBsZW5faSA9IGludF9hLmxlbmd0aDtcbiAgbGV0IGxlbl9kID0gZGVjX2EubGVuZ3RoO1xuXG4gIGlmKGRlY19iLmxlbmd0aCA+IGRlY19hLmxlbmd0aCl7XG4gICAgbGVuX2QgPSBkZWNfYi5sZW5ndGg7XG4gIH1cbiAgbGV0IG92ZXIgPSAwLFxuICAgICAgaW50X3JlcyA9IFtdLFxuICAgICAgZGVjX3JlcyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IGxlbl9kIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGRlY19hW2ldIHx8IDA7XG4gICAgbGV0IGVsbV9iID0gZGVjX2JbaV0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgZGVjX3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG5cbiAgZm9yKGxldCBpID0gZGVjX3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApe1xuICAgIGxldCBkID0gZGVjX3Jlc1tpXTtcbiAgICBpZihkID09PSAwKXtcbiAgICAgIGRlY19yZXMucG9wKCk7XG4gICAgfWVsc2V7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBnYXAgPSBsZW5faSAtIGludF9iLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gbGVuX2kgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gaW50X2FbaV07XG4gICAgbGV0IGVsbV9iID0gaW50X2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgaW50X3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBpbnRfcmVzLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoaW50X3Jlcy5qb2luKFwiXCIpICsgXCIuXCIgKyBkZWNfcmVzLmpvaW4oXCJcIiksIHtuZWdhdGl2ZTogbmVnYXRpdmV9KTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGIubmVnYXRlKCk7XG4gIH1cblxuICBpZihhLm5lZ2F0aXZlICE9PSBiLm5lZ2F0aXZlKXtcbiAgICBiLm5lZ2F0aXZlID0gIWIubmVnYXRpdmU7XG4gICAgcmV0dXJuIGEuYWRkKGIpO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gYS5uZWdhdGl2ZTtcblxuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiLCB0cnVlKTtcbiAgaWYocmVzICE9PSBhKXtcbiAgICBhID0gc3U7XG4gICAgYiA9IHRoaXM7XG4gICAgbmVnYXRpdmUgPSAhYS5uZWdhdGl2ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgYV9pX2xlbiA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGJfaV9sZW4gPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IGFfZF9sZW4gPSBhLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBiX2RfbGVuID0gYi5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgZF9nYXAgPSBNYXRoLmFicyhhX2RfbGVuIC0gYl9kX2xlbik7XG5cbiAgbGV0IGxlbl9pID0gMDtcbiAgbGV0IGxlbl9kID0gMDtcbiAgaWYoYV9pX2xlbiA+IGJfaV9sZW4pe1xuICAgIGxlbl9pICs9IGFfaV9sZW47XG4gIH1lbHNle1xuICAgIGxlbl9pICs9IGJfaV9sZW47XG4gIH1cbiAgaWYoYV9kX2xlbiA+IGJfZF9sZW4pe1xuICAgIGxlbl9kICs9IGFfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYl9pZC5wdXNoKDApO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGVuX2QgKz0gYl9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBhX2lkLnB1c2goMCk7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgZGVidCA9IDA7XG4gIGNvbnN0IHJlc19hcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuX2kgKyBsZW5fZDsgaSsrKXtcbiAgICBjb25zdCBpX2EgPSBhX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGlfYiA9IGJfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgYV9lbG0gPSAoYV9pZFtpX2FdID8gYV9pZFtpX2FdIDogMCkgLSBkZWJ0O1xuICAgIGNvbnN0IGJfZWxtID0gYl9pZFtpX2JdID8gYl9pZFtpX2JdIDogMDtcbiAgICBpZihhX2VsbSA+PSBiX2VsbSl7XG4gICAgICBkZWJ0ID0gMDtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KGFfZWxtIC0gYl9lbG0pO1xuICAgIH1lbHNle1xuICAgICAgZGVidCA9IDE7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdCgoZGVidCAqIDEwKSArIGFfZWxtIC0gYl9lbG0pO1xuICAgIH1cblxuICB9XG4gIHJlc19hcnJheS5zcGxpY2UocmVzX2FycmF5Lmxlbmd0aCAtIGxlbl9kLCAwLCBcIi5cIik7XG4gIGNvbnN0IG1pbnVzID0gbmVnYXRpdmUgPyBcIi1cIiA6IFwiXCI7XG5cbiAgY29uc3QgcmVzdWx0ID0gIG1ha2VTdShtaW51cyArIHJlc19hcnJheS5qb2luKFwiXCIpKTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICB0aGlzLm5ldmF0aXZlID0gZmFsc2U7XG4gIH1lbHNle1xuICAgIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm1ha2VQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLm5lZ2F0aXZlID0gZmFsc2U7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm1ha2VOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGljYXRpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKGEuaXNaZXJvKCkgfHwgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgZHBfYSA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGRwX2IgPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IHJlc19hcnIgPSBbXTtcbiAgZm9yKGxldCBpX2EgPSAwOyBpX2EgPCBhX2lkLmxlbmd0aDsgaV9hKyspe1xuICAgIGZvcihsZXQgaV9iID0gMDsgaV9iIDwgYl9pZC5sZW5ndGg7IGlfYisrKXtcbiAgICAgIGNvbnN0IGVsbV9hID0gYV9pZFtpX2FdO1xuICAgICAgY29uc3QgZWxtX2IgPSBiX2lkW2lfYl07XG4gICAgICBjb25zdCBwb3NfYSA9IGRwX2EgLSBpX2EgLTE7XG4gICAgICBjb25zdCBwb3NfYiA9IGRwX2IgLSBpX2IgLTE7XG4gICAgICBjb25zdCBwb3MgPSBwb3NfYSArIHBvc19iO1xuICAgICAgbGV0IHJlcyA9IGVsbV9hICogZWxtX2I7XG4gICAgICBsZXQgbGVuID0gTWF0aC5hYnMocG9zKTtcbiAgICAgIGxldCBzdHI7XG4gICAgICBpZihwb3MgPj0gMCl7XG4gICAgICAgIGxlbisrO1xuICAgICAgICBpZihyZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuICsgMSwgXCIwXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICBpZihsZW4gPT09IDEgJiYgcmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcylbMF0gKyBcIi5cIiArIFN0cmluZyhyZXMpWzFdO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBcIjAuXCIgKyBTdHJpbmcocmVzKS5wYWRTdGFydChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzX2Fyci5wdXNoKG1ha2VTdShzdHIpKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgcmVzID0gcmVzLmFkZChyZXNfYXJyW2ldKTtcbiAgfVxuXG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc2lvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcblxuICBpZihhLmlzWmVybygpICYmIGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBOQU47XG4gIH1lbHNlIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1lbHNlIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBEQlo7XG4gIH1cblxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBjb3VudCA9IG1ha2VTdSgwKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoYS5pc0xhcmdlKHN1bSkgfHwgYS5pc0VxdWFsKHN1bSkpe1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdSgxKSk7XG4gICAgc3VtID0gYi5tdWx0aXBsaWNhdGlvbihjb3VudCk7XG4gIH1cblxuICBjb3VudCA9IGNvdW50LnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIHN1bSA9IHN1bS5zdWJ0cmFjdChiKTtcbiAgY29uc3QgcmVtYWluID0gYS5zdWJ0cmFjdChzdW0pO1xuICBjb25zdCByZXMgPSBjb3VudDtcbiAgcmVzLnJlbWFpbmRlciA9IHJlbWFpbjtcbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG4gIHJldHVybiByZXM7XG59O1xuXG5cblN1LnByb3RvdHlwZS5wbHVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLnRhc3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubWludXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5oaWt1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5rYWtlcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS53YXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5kaXZpc2lvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmFkZChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgXG4gIGlmKCByZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPZGROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBpZiggIXJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyB0aGlzLmlzTGFyZ2UobWFrZVN1KGkpKTsgaSsrKXtcbiAgICBsZXQgc3UgPSBtYWtlU3UoaSk7XG4gICAgY29uc3QgcmVtYWluZGVyID0gdGhpcy5kaXZpc2lvbihzdSkucmVtYWluZGVyO1xuICAgIGlmKHJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIGFyci5wdXNoKHRoaXMpO1xuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldENvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGxldCBhID0gdGhpcztcbiAgbGV0IGIgPSBzdTtcblxuICBjb25zdCBhcnJfYSA9IGEuZ2V0RGl2aXNvcnMoKTtcbiAgaWYoYS5pc0VxdWFsKGIpKXtcbiAgICByZXR1cm4gYXJyX2E7XG4gIH1cbiAgY29uc3QgYXJyX2IgPSBiLmdldERpdmlzb3JzKCk7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFycl9iLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBlbG1fYiA9IGFycl9iW2pdO1xuICAgICAgaWYoZWxtX2EuaXNFcXVhbChlbG1fYikpe1xuICAgICAgICBkaXZzLnB1c2goZWxtX2EpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZzO1xufTtcblxuU3UucHJvdG90eXBlLmdldE1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0Q29tbW9uRGl2aXNvcnMoc3UpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBbdGhpc107XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjb3VudCA9IG1ha2VTdShcIjFcIik7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkgfHwgY291bnQuaXNFcXVhbChDT05TVEFOVFMuTUFYKSl7XG4gICAgYXJyLnB1c2godGhpcy5tdWx0aXBsaWNhdGlvbihjb3VudCkpO1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdShcIjFcIikpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuXG4gIGNvbnN0IG1heENvbW1vbkRpdmlzb3IgPSBhLmdldE1heENvbW1vbkRpdmlzb3IoYik7XG5cbiAgY29uc3QgbXVsdGkgPSBhLm11bHRpcGx5KGIpO1xuXG4gIGNvbnN0IHJlcyA9IG11bHRpLmRpdmlzaW9uKG1heENvbW1vbkRpdmlzb3IpO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblxuY29uc3QgbWFrZUZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oYSwgYil7XG5cbiAgaWYoIWlzU3UoYSkgfHwgIWlzU3UoYikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW2EsIGJdO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdLmlzTGFyZ2UoTUFYKSl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gYXJyW2Fyci5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBiID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjID0gYS5hZGQoYik7XG4gICAgYXJyLnB1c2goYyk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblxuY29uc3QgbWFrZUx1Y2FzU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gbWFrZUZpYm9uYWNjaVNlcXVlbmNlKG1ha2VTdSgyKSwgbWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcblxuICBjb25zdCBmaWJzID0gbWFrZUZpYm9uYWNjaVNlcXVlbmNlKHplcm8sIG9uZSk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBmaWJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGZpYnNbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMdWNhc051bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsdWNzID0gbWFrZUx1Y2FzU2VxdWVuY2UoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGx1Y3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gbHVjc1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuY29uc3QgbWFrZVNlcXVlbmNlID0gZnVuY3Rpb24oZmlyc3QsIG90aGVycyl7XG4gIGNvbnN0IGFycmF5ID0gW2ZpcnN0XTtcbiAgaWYoIW90aGVycyl7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBvdGhlcnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG0gPSBvdGhlcnNbaV07XG4gICAgaWYoIWlzU3UoZWxtKSl7XG4gICAgICBlbG0gPSBtYWtlU3UoZWxtKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuU3UucHJvdG90eXBlLmdldFNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuU3UucHJvdG90eXBlLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBzdW0gPSBzdW0uYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IGlwID0gYXJyWzBdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpcCA9IGlwLm11bHRpcGxpY2F0aW9uKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuU3UucHJvdG90eXBlLmRpZ2l0c3VtID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGEgPSBtYWtlU3UodGhpcy5pbnRlZ2VyW2ldKTtcbiAgICBzdW0gPSBzdW0uYWRkKGEpO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgyKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuY3ViZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgb25lID0gbWFrZVN1KFwiMVwiKTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgaWYoc3UuaXNFcXVhbChvbmUpKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsZXQgY291bnQgPSBvbmU7XG4gIGxldCByZXMgPSBjb3B5U3UodGhpcyk7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoc3UpKXtcbiAgICByZXMgPSB0aGlzLm11bHRpcGxpY2F0aW9uKHJlcyk7XG4gICAgY291bnQgPSBjb3VudC5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5pc09uZSgpIHx8IHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjJcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKG9uZSkpe1xuICAgIGxldCBlID0gdGhpcy5kaXZpc2lvbihjb3VudGVyKTtcbiAgICBpZihlLnJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldERpdmlzb3JzKCk7XG4gIGxldCBhID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhID0gYS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNMYXJnZSggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzRGVmaWNpZW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNTbWFsbCggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzUGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLnN1YnRyYWN0KHRoaXMpLmlzRXF1YWwodGhpcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5mYWN0b3JpYWwgPSBmdW5jdGlvbigpe1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZSh6ZXJvKSl7XG4gICAgcmVzID0gcmVzLm11bHRpcGxpY2F0aW9uKGNvdW50ZXIpO1xuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbmNvbnN0IG1ha2VQb2x5Z29uYWxOdW1iZXJzID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIWlzU3Uobikpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZihuLmlzU21hbGwobWFrZVN1KDMpKSl7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDEpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHJhbmdlID0gY3VycmVudDtcblxuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gbi5zdWJ0cmFjdChtYWtlU3UoMikpO1xuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgcmFuZ2UgPSByYW5nZS5hZGQoaW5jcmVtZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5hZGQocmFuZ2UpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBtYWtlVHJpYW5nbGVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgcmV0dXJuIG1ha2VQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSgzKSwgbWF4KTtcbn07XG5cbmNvbnN0IG1ha2VTcXVhcmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgcmV0dXJuIG1ha2VQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSg0KSwgbWF4KTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1RyaWFuZ2xlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3UgPSB0aGlzO1xuICBjb25zdCBhcnIgPSBtYWtlVHJpYW5nbGVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1NxdWFyZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVNxdWFyZU51bWJlcnMoc3UpO1xuICBjb25zdCByZXMgPSBhcnIuZmluZChlbG0gPT57XG4gICAgcmV0dXJuIGVsbS5pc0VxdWFsKHN1KTtcbiAgfSk7XG4gIGlmKHJlcyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cbiAgY29uc3QgdHdvID0gbWFrZVN1KDIpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMCk7XG4gIGxldCBleCA9IG1ha2VTdSgxKTtcbiAgXG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChtYXgpKXtcbiAgICBjdXJyZW50ID0gdHdvLmV4cG9uZW50aWF0ZShleCkuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICBleCA9IGV4LmFkZChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IG1hcnIgPSBtYWtlTWVyc2VubmVOdW1iZXJzKG1heCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbiA9IG1hcnJbaV07XG4gICAgaWYobi5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVOdW1iZXJzKG4pO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IG1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ha2VTdTogbWFrZVN1LFxuICBjb3B5U3U6IGNvcHlTdSxcbiAgaXNTdTogaXNTdSxcbiAgU3U6IFN1XG59OyJdLCJzb3VyY2VSb290IjoiIn0=