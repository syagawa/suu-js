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
      return false;
    } else {
      return true;
    }
  }

  return false;
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

core.numToArrayWithDecimal2 = function (n) {
  var str = String(n);
  var arr = str.split("");
  var _int = [];
  var decimal = [];
  var is_decimal = false;

  for (var i = 0; i < arr.length; i++) {
    var num = Number(arr[i]);
    var isNumber = this.isNumber(num);

    if (!isNumber && arr[i] === ".") {
      is_decimal = true;
      continue;
    } else if (!isNumber) {
      throw new Error("This function has been called with incorrect parameters");
    }

    if (is_decimal) {
      decimal.push(num);
    } else {
      _int.push(num);
    }
  }

  return {
    "int": _int,
    decimal: decimal
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3UvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNPTlNUQU5UUyIsIk1JTiIsIlMiLCJLIiwibWFrZVN1Iiwic3UiLCJjb3B5U3UiLCJpc1N1IiwiU3UiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJ1bmRlZmluZWQiLCJzdHIiLCJTdHJpbmciLCJNYXRoIiwicmFuIiwiaXNaZXJvIiwiYXJyIiwic3BsaXQiLCJtdWx0aXBsaWNhdGlvbiIsInJhbmRvbUVsZW1lbnQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJpbnRlZ2VyIiwicmFuZG9tSW50IiwiaXNFcXVhbCIsImlzTGFyZ2UiLCJnZXROdW1iZXIiLCJzIiwicHVzaCIsInJlcyIsIm1ha2VQcmltZU51bWJlcnMiLCJOdW1iZXIiLCJnZXRTdHJpbmciLCJpc1ByaW1lTnVtYmVyIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwiYSIsImIiLCJpc051bWJlciIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImoiLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJuIiwiZGl2aXNvcnMiLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwibWF4Q29tbW9uRGl2aXNvciIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsImFycmF5U3VtbWF0aW9uIiwiQXJyYXkiLCJjb3JlIiwibnVtVG9BcnJheSIsImlzTnVtQXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJBIiwiQiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXJnZXIiLCJhcnJfYSIsImFycl9iIiwiZ2FwIiwib3ZlciIsImFycl9jIiwiX3JlcyIsImVsbV9hIiwiZWxtX2IiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsInNsaWNlIiwiRXJyb3IiLCJudW1Ub0FycmF5V2l0aERlY2ltYWwiLCJhcnIxIiwiYXJyMiIsInRndCIsIm51bVRvQXJyYXlXaXRoRGVjaW1hbDIiLCJpbnQiLCJkZWNpbWFsIiwiaXNfZGVjaW1hbCIsImFkZCIsImFfIiwiYl8iLCJjYXJyeSIsImFhIiwiYmIiLCJTSyIsImNvbnN0YW50cyIsIm9wdGlvbiIsIm5lZ2F0aXZlIiwicGFydHMiLCJpbnRfc3RyIiwiZGVjaW1hbF9zdHIiLCJpbnQwIiwibWF0Y2giLCJuZXdfaW50X3N0ciIsInN0YXJ0X3plcm8iLCJkZWMwIiwiZW5kX3plcm8iLCJuZXdfZGVjaW1hbF9zdHIiLCJpbnRfYXJyIiwiZGVjaW1hbF9hcnIiLCJlIiwiZGVub21pbmF0b3IiLCJmcmFjdGlvbiIsIm51bWVyYXRvciIsImNvbmNhdCIsIm1lc3NhZ2UiLCJaRVJPIiwiT05FIiwicHJvdG90eXBlIiwiYWMiLCJyZWR1Y2UiLCJnZXRJbnRlZ2VyIiwiZ2V0RGVjaW1hbCIsImNsb25lIiwiZ2V0TGFyZ2UiLCJhYnNvbHV0ZSIsImZpZWxkIiwiX2EiLCJfYiIsImlfYSIsImlfYiIsImRfYSIsImRfYiIsImxhcmdlIiwiY29udGFpbkRlY2ltYWwiLCJpc09uZSIsImlzU21hbGwiLCJpc1Bvc2l0aXZlIiwiaXNOZWdhdGl2ZSIsInYiLCJtYWtlUG9zaXRpdmUiLCJzdWJ0cmFjdCIsImludF9hIiwiZGVjX2EiLCJpbnRfYiIsImRlY19iIiwibGVuX2kiLCJsZW5fZCIsImludF9yZXMiLCJkZWNfcmVzIiwiZCIsInBvcCIsIm5lZ2F0ZSIsImFfaWQiLCJiX2lkIiwiYV9pX2xlbiIsImJfaV9sZW4iLCJhX2RfbGVuIiwiYl9kX2xlbiIsImRfZ2FwIiwiYWJzIiwiZGVidCIsInJlc19hcnJheSIsImFfZWxtIiwiYl9lbG0iLCJzcGxpY2UiLCJtaW51cyIsIm5ldmF0aXZlIiwibWFrZU5lZ2F0aXZlIiwiZHBfYSIsImRwX2IiLCJyZXNfYXJyIiwicG9zX2EiLCJwb3NfYiIsInBvcyIsInBhZEVuZCIsInBhZFN0YXJ0IiwiY291bnQiLCJyZW1haW4iLCJwbHVzIiwidGFzdSIsImhpa3UiLCJtdWx0aXBseSIsImtha2VydSIsIndhcnUiLCJuZXh0IiwicHJldiIsImdldERpdmlzb3JzIiwiZ2V0Q29tbW9uRGl2aXNvcnMiLCJkaXZzIiwiZ2V0TWF4Q29tbW9uRGl2aXNvciIsIm11bHRpcGxlIiwiZ2V0TGVhc3RDb21tb25NdWx0aXBsZSIsIm11bHRpIiwibWFrZUZpYm9uYWNjaVNlcXVlbmNlIiwiZnVuYyIsImMiLCJtYWtlTHVjYXNTZXF1ZW5jZSIsImlzRmlib25hY2NpTnVtYmVyIiwiemVybyIsIm9uZSIsImZpYnMiLCJpc0x1Y2FzTnVtYmVyIiwibHVjcyIsIm1ha2VTZXF1ZW5jZSIsIm90aGVycyIsImdldFNlcXVlbmNlIiwiZGlnaXRzdW0iLCJzcXVhcmUiLCJleHBvbmVudGlhdGUiLCJjdWJlIiwiaXNEZWZpY2llbnROdW1iZXIiLCJpc1BlcmZlY3ROdW1iZXIiLCJmYWN0b3JpYWwiLCJtYWtlUG9seWdvbmFsTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1ha2VUcmlhbmdsZU51bWJlcnMiLCJtYWtlU3F1YXJlTnVtYmVycyIsImlzVHJpYW5nbGVOdW1iZXIiLCJmaW5kIiwiaXNTcXVhcmVOdW1iZXIiLCJtYWtlTWVyc2VubmVOdW1iZXJzIiwidHdvIiwiZXgiLCJtYWtlTWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FB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c0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgc3UgZnJvbSBcIi4vc3UuanNcIjtcblxuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcbmNvbnN0IE1JTiA9IENPTlNUQU5UUy5NSU47XG5cbmNvbnN0IFMgPSB7fTtcbmNvbnN0IEsgPSB7fTtcblxuY29uc3QgbWFrZVN1ID0gc3UubWFrZVN1O1xuY29uc3QgY29weVN1ID0gc3UuY29weVN1O1xuY29uc3QgaXNTdSA9IHN1LmlzU3U7XG5jb25zdCBTdSA9IHN1LlN1O1xuXG5jb25zdCBGSVJTVF9QUklNRV9OVU1CRVIgPSAyO1xuXG5cbksucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gbWFrZVN1KDApO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSBtYWtlU3UoMSk7XG4gIH1cbiAgaWYoIWlzU3UobWluKSl7XG4gICAgbWluID0gbWFrZVN1KG1pbik7XG4gIH1cbiAgaWYoIWlzU3UobWF4KSl7XG4gICAgbWF4ID0gbWFrZVN1KG1heCk7XG4gIH1cblxuICBjb25zdCBzdHIgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gIGxldCByYW47XG5cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgaWYobWluLmlzWmVybygpKXtcbiAgICAgIHJhbiA9IG1ha2VTdSgwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJhbiA9IG1pbjtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICAgIHJhbiA9IG1ha2VTdShcIjAuXCIgKyBhcnJbMV0pLm11bHRpcGxpY2F0aW9uKG1heCk7XG4gIH1cbiAgcmV0dXJuIHJhbjtcbn07XG5cbksucmFuZG9tRWxlbWVudCA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgY29uc3QgaSA9IEsucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCkuaW50ZWdlcjtcbiAgcmV0dXJuIGFycmF5W2ldO1xufTtcblxuSy5yYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYoICFpc1N1KG1pbikgfHwgIWlzU3UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKG1pbi5pc0VxdWFsKG1heCkgfHwgbWluLmlzTGFyZ2UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbi5nZXROdW1iZXIoKTsgaSA8PSBtYXguZ2V0TnVtYmVyKCk7IGkrKyl7XG4gICAgY29uc3QgcyA9IG1ha2VTdShpKTtcbiAgICBhcnIucHVzaChzKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IEsucmFuZG9tRWxlbWVudChhcnIpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG5LLm1ha2VQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZihtYXggJiYgbWF4LmlzU3UgJiYgbWF4LmlzU3UoKSl7XG4gICAgbWF4ID0gTnVtYmVyKG1heC5nZXRTdHJpbmcoKSk7XG4gIH1cblxuICBjb25zdCBNQVggPSAxMDA7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBpZihtYXggPiBNQVgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgbWF4OyBpKyspe1xuICAgIGNvbnN0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGlmKHN1LmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgfVxuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2pdO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBzdW0gKz0gZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuXG5cbksuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgZW1wdHkuXCI7XG4gIH1cbiAgbGV0IGlwID0gMTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtpXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgaXAgPSBpcCAqIGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBhIE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5LLmRpdmlzaW9uID0gZnVuY3Rpb24oZGl2aWRlbmQsIGRpdmlzb3Ipe1xuICBpZihkaXZpZGVuZCA9PT0gdW5kZWZpbmVkIHx8IGRpdmlzb3IgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGRpdmlkZW5kIC8gZGl2aXNvcjtcbiAgcmV0dXJuIHtcbiAgICBpbnRlZ2VyOiB7XG4gICAgICByZW1haW5kZXI6IGRpdmlkZW5kICUgZGl2aXNvcixcbiAgICAgIHJlc3VsdDogTWF0aC5mbG9vcihyZXN1bHQpXG4gICAgfSxcbiAgICByZWFsTnVtYmVyOiByZXN1bHRcbiAgfTtcbn07XG5cbksuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgbGV0IGEgPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhICs9IGFycltpXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbksuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdW0gPSBLLmRpdmlzb3JzU3VtbWF0aW9uKG4pO1xuICBpZihzdW0gPiBuICogMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUEgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gbiAqIG47XG4gIGNvbnN0IHMgPSBTdHJpbmcobnVtKTtcbiAgY29uc3QgbGVuID0gcy5sZW5ndGg7XG4gIGxldCBmaXJzdF9sZW4gPSAwO1xuICBsZXQgYWZ0ZXJfbGVuID0gMDtcbiAgbGV0IGZpcnN0LCBhZnRlcjtcbiAgaWYoUy5pc09kZE51bWJlcihsZW4pKXtcbiAgICBmaXJzdF9sZW4gPSAobGVuIC0gMSkgLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbiArIDE7XG4gIH1lbHNle1xuICAgIGZpcnN0X2xlbiA9IGxlbiAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuO1xuICB9XG4gIGZpcnN0ID0gTnVtYmVyKHMuc3Vic3RyKDAsIGZpcnN0X2xlbikpO1xuICBhZnRlciA9IE51bWJlcihzLnN1YnN0cihmaXJzdF9sZW4sIGFmdGVyX2xlbikpO1xuXG4gIGlmKCggZmlyc3QgKyBhZnRlciApID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQiA9IGZ1bmN0aW9uKG4pe1xuXG4gIGNvbnN0IGFyciA9IFN0cmluZyhuKS5zcGxpdChcIlwiKTtcblxuICBjb25zdCBtaW4gPSBOdW1iZXIoYXJyLnNvcnQoKS5qb2luKFwiXCIpKTtcbiAgY29uc3QgbWF4ID0gTnVtYmVyKGFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG5cbiAgaWYoKG1heCAtIG1pbikgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQShuKSB8fCBLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNJbnRlZ2VyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4pO1xuICBpZiggZiA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8g6Kq/5ZKM5bmz5Z2HXG5LLmhhcm1vbmljTWVhbiA9IGZ1bmN0aW9uKGFycil7XG4gIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIHN1bSArPSAxIC8gYXJyW2ldO1xuICB9XG4gIHJldHVybiBsZW4gLyBzdW07XG59O1xuXG4vLyDoqr/lkozmlbDjgYvjganjgYbjgYtcbksuaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgY29uc3QgcmVzID0gSy5oYXJtb25pY01lYW4oYXJyKTtcbiAgaWYoUy5pc0ludGVnZXIocmVzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuUy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYobiA+IDAgJiYgUy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbksuY29sbGF0emhQcm9ibGVtID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBhcnIgPSBbXTtcblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24obil7XG4gICAgbGV0IHJlcyA9IG47XG4gICAgaWYoUy5pc09kZE51bWJlcihuKSl7XG4gICAgICByZXMgPSBuICogMyArIDE7XG4gICAgfWVsc2UgaWYoUy5pc0V2ZW5OdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAvIDI7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgd2hpbGUobnVtID4gMSl7XG4gICAgbnVtID0gY2FsYyhudW0pO1xuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODleOCp+ODq+ODnuODvOODhuOCueODiFxuLy8gSlPjga7mibHjgYjjgovnr4Tlm7LjgpLotoXjgYjjgabjgYTjgabjgYbjgb7jgY/li5XjgYvjgZpcbksuZmVybWF0VGVzdCA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFTLmlzSW50ZWdlcihuKSB8fCBTLmlzWmVybyhuKSB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzLiBcIiArIG4gKyBcIiBpcyBpbmNvcnJlY3QgcGFyYW1ldGVyLlwiO1xuICB9XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gMTAwO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMTsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgYSA9IEsucmFuZG9tSW50KDIsIG4gLSAxKTtcbiAgICBpZihLLm1heENvbW1vbkRpdmlzb3IoYSwgbikgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IE1hdGgucG93KGEsIG4gLSAxKSAlIG47XG4gICAgaWYocmVzICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCJNYXliZSBQcmltZSBOdW1iZXJcIjtcbn07XG5cbi8vIOe1hOOBv+WQiOOCj+OBm+aVsOOBruioiOeul1xuLy8gSy5jb21iaW5hdGlvbnMgPSBmdW5jdGlvbihhcnIpe1xuLy8gfTtcblxuLy8gMyA9PiBbMCwgM10sIFsxLCAyXSwgWzIsIDFdLCBbMywgMF1cbksuZ2V0SW5jbHVkZXNOdW1iZXJzID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCB0ZW1wID0gbnVtO1xuICBsZXQgYm9vbCA9IHRydWU7XG4gIHdoaWxlKGJvb2wpe1xuICAgIGNvbnN0IGEgPSB0ZW1wO1xuICAgIGNvbnN0IGIgPSBudW0gLXRlbXA7XG4gICAgY29uc3QgYXIgPSBbYSxiXTtcbiAgICBhcnIucHVzaChhcik7XG4gICAgdGVtcCA9IHRlbXAgLTE7XG4gICAgaWYodGVtcCA8IDApe1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyBmaWJvbmFjY2lcblxuXG5cblxuXG5cblxuLy8gdG9kbyAwc3RhcnRcbmNvbnN0IGFycmF5U3VtbWF0aW9uID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhKGEgaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICBhID0gY29yZS5udW1Ub0FycmF5KGEpO1xuICB9XG4gIGlmKCAhKGIgaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICBiID0gY29yZS5udW1Ub0FycmF5KGIpO1xuICB9XG5cbiAgaWYoIWNvcmUuaXNOdW1BcnJheShhKSB8fCAhY29yZS5pc051bUFycmF5KGIpKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYoY29yZS5pc1plcm8oYVswXSkgJiYgY29yZS5pc1plcm8oYlswXSkpe1xuICAgIHJldHVybiB7XG4gICAgICBhcnJheTogWzBdLFxuICAgICAgc3RyaW5nOiBcIjBcIixcbiAgICAgIG51bWJlcjogMCxcbiAgICAgIGxlbmd0aDogMVxuICAgIH07XG4gIH1cblxuICBjb25zdCBBID0gbWFrZVN1KGEpO1xuICBjb25zdCBCID0gbWFrZVN1KGIpO1xuXG4gIGNvbnNvbGUubG9nKEEsQik7XG5cbiAgY29uc3QgcmVzID0gY29yZS5nZXRMYXJnZXIoYSwgYik7XG4gIGNvbnN0IGFycl9hID0gcmVzWzBdO1xuICBjb25zdCBhcnJfYiA9IHJlc1sxXTtcbiAgY29uc3QgbGVuID0gYXJyX2EubGVuZ3RoO1xuXG4gIGNvbnN0IGdhcCA9IGxlbiAtIGFycl9iLmxlbmd0aDtcblxuICBsZXQgb3ZlciA9IDAsIGFycl9jID0gW107XG4gIGZvcihsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgYXJyX2MudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgYXJyX2MudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShhcnJfYyk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldExhcmdlciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnJfYSA9IFtdLCBhcnJfYiA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhW2ldO1xuICAgIGlmKGVsbV9hID09PSAwICYmIGFycl9hLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoZWxtX2EgPj0gIDAgJiYgZWxtX2EgPCAxMCl7XG4gICAgICBhcnJfYS5wdXNoKGVsbV9hKTtcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtX2IgPSBiW2ldO1xuICAgIGlmKGVsbV9iID09PSAwICYmIGFycl9iLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoZWxtX2IgPj0gIDAgJiYgZWxtX2IgPCAxMCl7XG4gICAgICBhcnJfYi5wdXNoKGVsbV9iKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzO1xuICBpZihhcnJfYS5sZW5ndGggPiBhcnJfYi5sZW5ndGgpe1xuICAgIHJlcyA9IFthLCBiXTtcbiAgfWVsc2UgaWYoYXJyX2EubGVuZ3RoIDwgYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYiwgYV07XG4gIH1lbHNle1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBlbG1fYWEgPSBhcnJfYVtpXTtcbiAgICAgIGNvbnN0IGVsbV9iYiA9IGFycl9iW2ldO1xuICAgICAgaWYoZWxtX2FhID4gZWxtX2JiKXtcbiAgICAgICAgcmVzID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hYSA8IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzID0gW2EsIGJdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogS1xufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWDogMTAwMDAsXG4gIE1JTjogLTEwMDAwLFxuICBEQlo6IFwiRGl2aXNpb24gYnkgWmVyb1wiLFxuICBOQU46IFwiTm90IGEgbnVtYmVyXCIsXG4gIE5PVFNVOiBcIkFyZ3VtZW50IGlzIG5vdCBTdS5cIlxufTtcbiIsImNvbnN0IGNvcmUgPSB7fTtcblxuY29yZS5pc051bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG4gICAgYXJyLnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyMSA9IFtdO1xuICBjb25zdCBhcnIyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgbGV0IHRndCA9IGFycjE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpZihlbG0gPT09IFwiLlwiICYmIHRndCA9PT0gYXJyMSl7XG4gICAgICAgIHRndCA9IGFycjI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGd0LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gWy4uLmFycjEsIFwiLlwiLCBhcnIyXTtcbn07XG5cbmNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGFyciA9IHN0ci5zcGxpdChcIlwiKTtcblxuICBjb25zdCBpbnQgPSBbXTtcbiAgY29uc3QgZGVjaW1hbCA9IFtdO1xuXG4gIGxldCBpc19kZWNpbWFsID0gZmFsc2U7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKGFycltpXSk7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0aGlzLmlzTnVtYmVyKG51bSk7XG4gICAgaWYoIWlzTnVtYmVyICYmIGFycltpXSA9PT0gXCIuXCIpe1xuICAgICAgaXNfZGVjaW1hbCA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9ZWxzZSBpZighaXNOdW1iZXIpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG5cbiAgICBpZihpc19kZWNpbWFsKXtcbiAgICAgIGRlY2ltYWwucHVzaChudW0pO1xuICAgIH1lbHNle1xuICAgICAgaW50LnB1c2gobnVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGludDogaW50LFxuICAgIGRlY2ltYWw6IGRlY2ltYWxcbiAgfTtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29yZS5hZGQgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoIWEgJiYgIWIpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGFfID0gdGhpcy5udW1Ub0FycmF5KGEpLnJldmVyc2UoKTtcbiAgY29uc3QgYl8gPSB0aGlzLm51bVRvQXJyYXkoYikucmV2ZXJzZSgpO1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGxldCBhcnJfYSA9IGFfO1xuICBsZXQgYXJyX2IgPSBiXztcbiAgaWYoYV8ubGVuZ3RoIDwgYl8ubGVuZ3RoKXtcbiAgICBhcnJfYSA9IGJfO1xuICAgIGFycl9iID0gYV87XG4gIH1cbiAgXG4gIFxuICBsZXQgY2FycnkgPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGFhID0gYXJyX2FbaV0gPyBhcnJfYVtpXSA6IDA7XG4gICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldIDogMDtcbiAgICBsZXQgcmVzID0gYWEgKyBiYiArIGNhcnJ5O1xuICAgIGlmKHJlcyA+IDkpe1xuICAgICAgcmVzID0gcmVzIC0xMDtcbiAgICAgIGNhcnJ5ID0gMTtcbiAgICB9ZWxzZXtcbiAgICAgIGNhcnJ5ID0gMDtcbiAgICB9XG4gICAgYXJyLnB1c2gocmVzKTtcbiAgfVxuXG4gIGlmKGNhcnJ5ID4gMCl7XG4gICAgYXJyLnB1c2goY2FycnkpO1xuICB9XG5cbiAgcmV0dXJuIGFyci5yZXZlcnNlKCk7XG5cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBzIGZyb20gXCIuL3N1LmpzXCI7XG5pbXBvcnQgU0sgZnJvbSBcIi4vU0suanNcIjtcbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzOiBzLFxuICBTOiBTSy5TLFxuICBLOiBTSy5LLFxuICBjb3JlOiBjb3JlXG59OyIsImltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuY29uc3QgTUFYID0gY29uc3RhbnRzLk1BWDtcbmNvbnN0IE1JTiA9IGNvbnN0YW50cy5NSU47XG5jb25zdCBEQlogPSBjb25zdGFudHMuREJaO1xuY29uc3QgTkFOID0gY29uc3RhbnRzLk5BTjtcbmNvbnN0IE5PVFNVID0gY29uc3RhbnRzLk5PVFNVO1xuXG5cbmNvbnN0IFN1ID0gZnVuY3Rpb24obiwgb3B0aW9uKXtcbiAgaWYoaXNOYU4obikpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG4gIGlmKCFuKXtcbiAgICBuID0gMDtcbiAgfVxuICBpZighb3B0aW9uKXtcbiAgICBvcHRpb24gPSB7fTtcbiAgfVxuXG4gIGxldCBzdHIgPSBTdHJpbmcobik7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKHN0clswXSA9PT0gXCItXCIpe1xuICAgIHN0ciA9IHN0ci5zbGljZSgxLCBzdHIubGVuZ3RoKTtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgaWYoIW5lZ2F0aXZlICYmIG9wdGlvbiAmJiBvcHRpb24ubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKGlzTmFOKE51bWJlcihzdHIpKSl7XG4gICAgc3RyID0gXCIwXCI7XG4gIH1cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IHN0ci5zcGxpdChcIi5cIik7XG4gIGxldCBpbnRfc3RyID0gcGFydHNbMF07XG4gIGxldCBkZWNpbWFsX3N0ciA9IHBhcnRzWzFdO1xuICBpZihpbnRfc3RyKXtcbiAgICBjb25zdCBpbnQwID0gaW50X3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihpbnQwICYmIGludDAubGVuZ3RoID09PSBpbnRfc3RyLmxlbmd0aCl7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBuZXdfaW50X3N0ciA9IFwiXCI7XG4gICAgbGV0IHN0YXJ0X3plcm8gPSB0cnVlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPGludF9zdHIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoaW50X3N0cltpXSAhPT0gXCIwXCIgfHwgIXN0YXJ0X3plcm8pe1xuICAgICAgICBzdGFydF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19pbnRfc3RyICs9IGludF9zdHJbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfaW50X3N0cil7XG4gICAgICBpbnRfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBpbnRfc3RyID0gbmV3X2ludF9zdHI7XG4gICAgfVxuICB9XG5cbiAgaWYoZGVjaW1hbF9zdHIpe1xuICAgIGNvbnN0IGRlYzAgPSBkZWNpbWFsX3N0ci5tYXRjaCgvMC9nKTtcbiAgICBpZihkZWMwICYmIGRlYzAubGVuZ3RoID09PSBkZWNpbWFsX3N0ci5sZW5ndGgpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IGVuZF96ZXJvID0gdHJ1ZTtcbiAgICBsZXQgbmV3X2RlY2ltYWxfc3RyID0gXCJcIjtcbiAgICBmb3IobGV0IGkgPSBkZWNpbWFsX3N0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSl7XG4gICAgICBpZihkZWNpbWFsX3N0cltpXSAhPT0gXCIwXCIgfHwgIWVuZF96ZXJvKXtcbiAgICAgICAgZW5kX3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2RlY2ltYWxfc3RyID0gZGVjaW1hbF9zdHJbaV0gKyBuZXdfZGVjaW1hbF9zdHI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKCFuZXdfZGVjaW1hbF9zdHIpe1xuICAgICAgZGVjaW1hbF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGRlY2ltYWxfc3RyID0gbmV3X2RlY2ltYWxfc3RyO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGludF9hcnI7XG4gIGxldCBkZWNpbWFsX2FycjtcblxuXG4gIHRyeXtcbiAgICBpbnRfYXJyID0gY29yZS5udW1Ub0FycmF5KGludF9zdHIpO1xuICAgIGRlY2ltYWxfYXJyID0gZGVjaW1hbF9zdHIgPyBjb3JlLm51bVRvQXJyYXkoZGVjaW1hbF9zdHIpIDogWzBdO1xuICB9Y2F0Y2goZSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cblxuICB0aGlzLmludGVnZXIgPSBpbnRfYXJyO1xuICB0aGlzLmRlY2ltYWwgPSBkZWNpbWFsX2FycjtcbiAgdGhpcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlID8gdHJ1ZSA6IGZhbHNlO1xuICBcbiAgbGV0IGRlbm9taW5hdG9yID0gWzFdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmRlY2ltYWwubGVuZ3RoOyBpKyspe1xuICAgIGRlbm9taW5hdG9yLnB1c2goMCk7XG4gIH1cblxuICB0aGlzLmZyYWN0aW9uID0ge1xuICAgIG51bWVyYXRvcjogdGhpcy5pbnRlZ2VyLmNvbmNhdCh0aGlzLmRlY2ltYWwpLFxuICAgIGRlbm9taW5hdG9yOiBkZW5vbWluYXRvclxuICB9O1xuXG59O1xuXG5jb25zdCBtYWtlU3UgPSBmdW5jdGlvbihudW0sIG9wdGlvbil7XG4gIGxldCByZXM7XG4gIHRyeXtcbiAgICByZXMgPSBuZXcgU3UobnVtLCBvcHRpb24pO1xuICB9Y2F0Y2goZSl7XG4gICAgcmVzID0gZS5tZXNzYWdlO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuY29uc3QgaXNTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoc3UgaW5zdGFuY2VvZiBTdSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGNvcHlTdSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgc3RyID0gc3UuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgWkVSTzogbWFrZVN1KDApLFxuICBPTkU6IG1ha2VTdSgxKSxcbiAgRklSU1RfUFJJTUVfTlVNQkVSOiBtYWtlU3UoMiksXG4gIE1BWDogbWFrZVN1KE1BWCksXG4gIE1JTjogbWFrZVN1KE1JTilcbn07XG5cblxuU3UucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdHIgPSBTdHJpbmcoIHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgY29uc3QgYWMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKChhLGUpID0+IGEgKyBlKTtcbiAgaWYoYWMgIT09IDApe1xuICAgIHN0ciArPSBcIi5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLm5lZ2F0aXZlID8gYC0ke3N0cn1gIDogc3RyO1xufTtcblxuU3UucHJvdG90eXBlLmdldE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmdldFN0cmluZygpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXREZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKFwiMC5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldExhcmdlID0gZnVuY3Rpb24oYSwgYiwgYWJzb2x1dGUgPSBmYWxzZSl7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGxldCBmaWVsZCA9IFtdO1xuXG4gIGNvbnN0IF9hID0gbWFrZVN1KGEuZ2V0U3RyaW5nKCkpO1xuICBjb25zdCBfYiA9IG1ha2VTdShiLmdldFN0cmluZygpKTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgX2EubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBfYi5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYoX2EuaXNaZXJvKCkgJiYgX2IuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmICFfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGI7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihfYS5pbnRlZ2VyLmxlbmd0aCA+IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLmludGVnZXIubGVuZ3RoIDwgX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBfYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBfYS5pbnRlZ2VyW2ldO1xuICAgIGxldCBlbG1fYiA9IF9iLmludGVnZXJbaV07XG4gICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIGNvbnN0IGxlbiA9IF9hLmRlY2ltYWwubGVuZ3RoID49IF9iLmRlY2ltYWwubGVuZ3RoID8gX2EuZGVjaW1hbC5sZW5ndGggOiBfYi5kZWNpbWFsLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGVsbV9hID0gX2EuZGVjaW1hbFtpXSA/IF9hLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgbGV0IGVsbV9iID0gX2IuZGVjaW1hbFtpXSA/IF9iLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZFswXTtcblxufTtcblxuXG5TdS5wcm90b3R5cGUuaXNFcXVhbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGEuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1NtYWxsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGIuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzUG9zaXRpdmUoKSAmJiB0aGlzLmlzSW50ZWdlcigpICYmIHRoaXMuaXNMYXJnZShDT05TVEFOVFMuWkVSTykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuY29udGFpbkRlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKGZ1bmN0aW9uKGEsIHYpe1xuICAgICAgcmV0dXJuIGEgKyB2O1xuICB9KTtcbiAgaWYocmVzID09PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGxldCBiID0gc3UuY2xvbmUoKTtcbiAgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgbmVnYXRpdmU7XG4gIGlmKGEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgYi5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYS5zdWJ0cmFjdChiKTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgYS5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYi5zdWJ0cmFjdChhKTtcbiAgfVxuXG4gIGxldCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmVzID0gYTtcbiAgfVxuICBsZXQgaW50X2EgPSByZXMuaW50ZWdlcjtcbiAgbGV0IGRlY19hID0gcmVzLmRlY2ltYWw7XG4gIGxldCBpbnRfYiwgZGVjX2I7XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgaW50X2IgPSBiLmludGVnZXI7XG4gICAgZGVjX2IgPSBiLmRlY2ltYWw7XG4gIH1lbHNle1xuICAgIGludF9iID0gYS5pbnRlZ2VyO1xuICAgIGRlY19iID0gYS5kZWNpbWFsO1xuICB9XG5cbiAgbGV0IGxlbl9pID0gaW50X2EubGVuZ3RoO1xuICBsZXQgbGVuX2QgPSBkZWNfYS5sZW5ndGg7XG5cbiAgaWYoZGVjX2IubGVuZ3RoID4gZGVjX2EubGVuZ3RoKXtcbiAgICBsZW5fZCA9IGRlY19iLmxlbmd0aDtcbiAgfVxuICBsZXQgb3ZlciA9IDAsXG4gICAgICBpbnRfcmVzID0gW10sXG4gICAgICBkZWNfcmVzID0gW107XG5cbiAgZm9yKGxldCBpID0gbGVuX2QgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gZGVjX2FbaV0gfHwgMDtcbiAgICBsZXQgZWxtX2IgPSBkZWNfYltpXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBkZWNfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cblxuICBmb3IobGV0IGkgPSBkZWNfcmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICl7XG4gICAgbGV0IGQgPSBkZWNfcmVzW2ldO1xuICAgIGlmKGQgPT09IDApe1xuICAgICAgZGVjX3Jlcy5wb3AoKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdhcCA9IGxlbl9pIC0gaW50X2IubGVuZ3RoO1xuICBmb3IobGV0IGkgPSBsZW5faSAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBpbnRfYVtpXTtcbiAgICBsZXQgZWxtX2IgPSBpbnRfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBpbnRfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGludF9yZXMudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShpbnRfcmVzLmpvaW4oXCJcIikgKyBcIi5cIiArIGRlY19yZXMuam9pbihcIlwiKSwge25lZ2F0aXZlOiBuZWdhdGl2ZX0pO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcblxuICBjb25zdCByZXN1bHQgPSAgbWFrZVN1KG1pbnVzICsgcmVzX2FycmF5LmpvaW4oXCJcIikpO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHRoaXMubmV2YXRpdmUgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZVBvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZU5lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuXG4gIGlmKGEuaXNaZXJvKCkgJiYgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIE5BTjtcbiAgfWVsc2UgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfWVsc2UgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIERCWjtcbiAgfVxuXG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gbWFrZVN1KDApO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICB3aGlsZShhLmlzTGFyZ2Uoc3VtKSB8fCBhLmlzRXF1YWwoc3VtKSl7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KDEpKTtcbiAgICBzdW0gPSBiLm11bHRpcGxpY2F0aW9uKGNvdW50KTtcbiAgfVxuXG4gIGNvdW50ID0gY291bnQuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgc3VtID0gc3VtLnN1YnRyYWN0KGIpO1xuICBjb25zdCByZW1haW4gPSBhLnN1YnRyYWN0KHN1bSk7XG4gIGNvbnN0IHJlcyA9IGNvdW50O1xuICByZXMucmVtYWluZGVyID0gcmVtYWluO1xuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuU3UucHJvdG90eXBlLnBsdXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUudGFzdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmhpa3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmtha2VydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLndhcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmRpdmlzaW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuYWRkKG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBcbiAgaWYoIHJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09kZE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIGlmKCAhcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldERpdmlzb3JzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IHRoaXMuaXNMYXJnZShtYWtlU3UoaSkpOyBpKyspe1xuICAgIGxldCBzdSA9IG1ha2VTdShpKTtcbiAgICBjb25zdCByZW1haW5kZXIgPSB0aGlzLmRpdmlzaW9uKHN1KS5yZW1haW5kZXI7XG4gICAgaWYocmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgYXJyLnB1c2godGhpcyk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0Q29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgbGV0IGEgPSB0aGlzO1xuICBsZXQgYiA9IHN1O1xuXG4gIGNvbnN0IGFycl9hID0gYS5nZXREaXZpc29ycygpO1xuICBpZihhLmlzRXF1YWwoYikpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IGIuZ2V0RGl2aXNvcnMoKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGVsbV9iID0gYXJyX2Jbal07XG4gICAgICBpZihlbG1fYS5pc0VxdWFsKGVsbV9iKSl7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cbiAgY29uc3QgYXJyID0gdGhpcy5nZXRDb21tb25EaXZpc29ycyhzdSk7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGNvdW50ID0gbWFrZVN1KFwiMVwiKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSB8fCBjb3VudC5pc0VxdWFsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBhcnIucHVzaCh0aGlzLm11bHRpcGxpY2F0aW9uKGNvdW50KSk7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KFwiMVwiKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRMZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG5cbiAgY29uc3QgbWF4Q29tbW9uRGl2aXNvciA9IGEuZ2V0TWF4Q29tbW9uRGl2aXNvcihiKTtcblxuICBjb25zdCBtdWx0aSA9IGEubXVsdGlwbHkoYik7XG5cbiAgY29uc3QgcmVzID0gbXVsdGkuZGl2aXNpb24obWF4Q29tbW9uRGl2aXNvcik7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuXG5jb25zdCBtYWtlRmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihhLCBiKXtcblxuICBpZighaXNTdShhKSB8fCAhaXNTdShiKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbYSwgYl07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuXG5jb25zdCBtYWtlTHVjYXNTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlRmlib25hY2NpU2VxdWVuY2UobWFrZVN1KDIpLCBtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuXG4gIGNvbnN0IGZpYnMgPSBtYWtlRmlib25hY2NpU2VxdWVuY2UoemVybywgb25lKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGZpYnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gZmlic1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0x1Y2FzTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGx1Y3MgPSBtYWtlTHVjYXNTZXF1ZW5jZSgpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbHVjcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBsdWNzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5jb25zdCBtYWtlU2VxdWVuY2UgPSBmdW5jdGlvbihmaXJzdCwgb3RoZXJzKXtcbiAgY29uc3QgYXJyYXkgPSBbZmlyc3RdO1xuICBpZighb3RoZXJzKXtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgZm9yKGxldCBpID0gMDsgaSA8IG90aGVycy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbSA9IG90aGVyc1tpXTtcbiAgICBpZighaXNTdShlbG0pKXtcbiAgICAgIGVsbSA9IG1ha2VTdShlbG0pO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5TdS5wcm90b3R5cGUuZ2V0U2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIHN1bSA9IHN1bS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xuICBsZXQgaXAgPSBhcnJbMF07XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGlwID0gaXAubXVsdGlwbGljYXRpb24oYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5TdS5wcm90b3R5cGUuZGlnaXRzdW0gPSBmdW5jdGlvbigpe1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYSA9IG1ha2VTdSh0aGlzLmludGVnZXJbaV0pO1xuICAgIHN1bSA9IHN1bS5hZGQoYSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDIpKTtcbn07XG5cblN1LnByb3RvdHlwZS5jdWJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgzKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBvbmUgPSBtYWtlU3UoXCIxXCIpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuICBpZihzdS5pc0VxdWFsKG9uZSkpe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGxldCBjb3VudCA9IG9uZTtcbiAgbGV0IHJlcyA9IGNvcHlTdSh0aGlzKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChzdSkpe1xuICAgIHJlcyA9IHRoaXMubXVsdGlwbGljYXRpb24ocmVzKTtcbiAgICBjb3VudCA9IGNvdW50Lm5leHQoKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuU3UucHJvdG90eXBlLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmlzT25lKCkgfHwgdGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMlwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2Uob25lKSl7XG4gICAgbGV0IGUgPSB0aGlzLmRpdmlzaW9uKGNvdW50ZXIpO1xuICAgIGlmKGUucmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0RGl2aXNvcnMoKTtcbiAgbGV0IGEgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgPSBhLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuU3UucHJvdG90eXBlLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc0xhcmdlKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNEZWZpY2llbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc1NtYWxsKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQZXJmZWN0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uc3VidHJhY3QodGhpcykuaXNFcXVhbCh0aGlzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmZhY3RvcmlhbCA9IGZ1bmN0aW9uKCl7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKHplcm8pKXtcbiAgICByZXMgPSByZXMubXVsdGlwbGljYXRpb24oY291bnRlcik7XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuY29uc3QgbWFrZVBvbHlnb25hbE51bWJlcnMgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighaXNTdShuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKG4uaXNTbWFsbChtYWtlU3UoMykpKXtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgcmFuZ2UgPSBjdXJyZW50O1xuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cblxuICBjb25zdCBpbmNyZW1lbnQgPSBuLnN1YnRyYWN0KG1ha2VTdSgyKSk7XG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChtYXgpKXtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICByYW5nZSA9IHJhbmdlLmFkZChpbmNyZW1lbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LmFkZChyYW5nZSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IG1ha2VUcmlhbmdsZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICByZXR1cm4gbWFrZVBvbHlnb25hbE51bWJlcnMobWFrZVN1KDMpLCBtYXgpO1xufTtcblxuY29uc3QgbWFrZVNxdWFyZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICByZXR1cm4gbWFrZVBvbHlnb25hbE51bWJlcnMobWFrZVN1KDQpLCBtYXgpO1xufTtcblxuU3UucHJvdG90eXBlLmlzVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VUcmlhbmdsZU51bWJlcnMoc3UpO1xuICBjb25zdCByZXMgPSBhcnIuZmluZChlbG0gPT57XG4gICAgcmV0dXJuIGVsbS5pc0VxdWFsKHN1KTtcbiAgfSk7XG4gIGlmKHJlcyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzU3F1YXJlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3UgPSB0aGlzO1xuICBjb25zdCBhcnIgPSBtYWtlU3F1YXJlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBtYWtlTWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCB0d28gPSBtYWtlU3UoMik7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY3VycmVudCA9IG1ha2VTdSgwKTtcbiAgbGV0IGV4ID0gbWFrZVN1KDEpO1xuICBcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGN1cnJlbnQgPSB0d28uZXhwb25lbnRpYXRlKGV4KS5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gZXguYWRkKG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cbiAgY29uc3QgbWFyciA9IG1ha2VNZXJzZW5uZU51bWJlcnMobWF4KTtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBuID0gbWFycltpXTtcbiAgICBpZihuLmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChuKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IG1ha2VNZXJzZW5uZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzKG4pO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWFrZVN1OiBtYWtlU3UsXG4gIGNvcHlTdTogY29weVN1LFxuICBpc1N1OiBpc1N1LFxuICBTdTogU3Vcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==