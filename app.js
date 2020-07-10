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

  var a_ = this.numToArrayWithDecimal2(a);
  var b_ = this.numToArrayWithDecimal2(b);
  var a_int = a_["int"].reverse();
  var b_int = b_["int"].reverse();
  var a_dec = a_.decimal;
  var b_dec = b_.decimal;

  var calc = function calc(a, b) {
    var arr = [];
    var arr_a = a;
    var arr_b = b;

    if (a.length < b.length) {
      arr_a = b;
      arr_b = a;
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

    return arr;
  };

  var int_arr = calc(a_int, b_int).reverse();
  return int_arr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3UvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdS8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3UvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdS8uL3N1LmpzIl0sIm5hbWVzIjpbIk1BWCIsIkNPTlNUQU5UUyIsIk1JTiIsIlMiLCJLIiwibWFrZVN1Iiwic3UiLCJjb3B5U3UiLCJpc1N1IiwiU3UiLCJGSVJTVF9QUklNRV9OVU1CRVIiLCJyYW5kb20iLCJtaW4iLCJtYXgiLCJ1bmRlZmluZWQiLCJzdHIiLCJTdHJpbmciLCJNYXRoIiwicmFuIiwiaXNaZXJvIiwiYXJyIiwic3BsaXQiLCJtdWx0aXBsaWNhdGlvbiIsInJhbmRvbUVsZW1lbnQiLCJhcnJheSIsImkiLCJsZW5ndGgiLCJpbnRlZ2VyIiwicmFuZG9tSW50IiwiaXNFcXVhbCIsImlzTGFyZ2UiLCJnZXROdW1iZXIiLCJzIiwicHVzaCIsInJlcyIsIm1ha2VQcmltZU51bWJlcnMiLCJOdW1iZXIiLCJnZXRTdHJpbmciLCJpc1ByaW1lTnVtYmVyIiwiZXVjbGlkZWFuQWxnb3JpdGhtIiwiYSIsImIiLCJpc051bWJlciIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImoiLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJuIiwiZGl2aXNvcnMiLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwibGVuIiwiZmlyc3RfbGVuIiwiYWZ0ZXJfbGVuIiwiZmlyc3QiLCJhZnRlciIsImlzT2RkTnVtYmVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic29ydCIsImpvaW4iLCJyZXZlcnNlIiwiaXNLYXByZWthck51bWJlciIsImlzSW50ZWdlciIsImYiLCJoYXJtb25pY01lYW4iLCJpc0hhcm1vbmljRGl2aXNvck51bWJlciIsImlzTmF0dXJhbE51bWJlciIsImNvbGxhdHpoUHJvYmxlbSIsImNhbGMiLCJpc0V2ZW5OdW1iZXIiLCJmZXJtYXRUZXN0IiwibWF4Q29tbW9uRGl2aXNvciIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsImFycmF5U3VtbWF0aW9uIiwiQXJyYXkiLCJjb3JlIiwibnVtVG9BcnJheSIsImlzTnVtQXJyYXkiLCJzdHJpbmciLCJudW1iZXIiLCJBIiwiQiIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXJnZXIiLCJhcnJfYSIsImFycl9iIiwiZ2FwIiwib3ZlciIsImFycl9jIiwiX3JlcyIsImVsbV9hIiwiZWxtX2IiLCJ1bnNoaWZ0IiwiZWxtX2FhIiwiZWxtX2JiIiwiREJaIiwiTkFOIiwiTk9UU1UiLCJpc05hTiIsInNsaWNlIiwiRXJyb3IiLCJudW1Ub0FycmF5V2l0aERlY2ltYWwiLCJhcnIxIiwiYXJyMiIsInRndCIsIm51bVRvQXJyYXlXaXRoRGVjaW1hbDIiLCJpbnQiLCJkZWNpbWFsIiwiaXNfZGVjaW1hbCIsImFkZCIsImFfIiwiYl8iLCJhX2ludCIsImJfaW50IiwiYV9kZWMiLCJiX2RlYyIsImNhcnJ5IiwiYWEiLCJiYiIsImludF9hcnIiLCJTSyIsImNvbnN0YW50cyIsIm9wdGlvbiIsIm5lZ2F0aXZlIiwicGFydHMiLCJpbnRfc3RyIiwiZGVjaW1hbF9zdHIiLCJpbnQwIiwibWF0Y2giLCJuZXdfaW50X3N0ciIsInN0YXJ0X3plcm8iLCJkZWMwIiwiZW5kX3plcm8iLCJuZXdfZGVjaW1hbF9zdHIiLCJkZWNpbWFsX2FyciIsImUiLCJkZW5vbWluYXRvciIsImZyYWN0aW9uIiwibnVtZXJhdG9yIiwiY29uY2F0IiwibWVzc2FnZSIsIlpFUk8iLCJPTkUiLCJwcm90b3R5cGUiLCJhYyIsInJlZHVjZSIsImdldEludGVnZXIiLCJnZXREZWNpbWFsIiwiY2xvbmUiLCJnZXRMYXJnZSIsImFic29sdXRlIiwiZmllbGQiLCJfYSIsIl9iIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwibGFyZ2UiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNTbWFsbCIsImlzUG9zaXRpdmUiLCJpc05lZ2F0aXZlIiwidiIsIm1ha2VQb3NpdGl2ZSIsInN1YnRyYWN0IiwiaW50X2EiLCJkZWNfYSIsImludF9iIiwiZGVjX2IiLCJsZW5faSIsImxlbl9kIiwiaW50X3JlcyIsImRlY19yZXMiLCJkIiwicG9wIiwibmVnYXRlIiwiYV9pZCIsImJfaWQiLCJhX2lfbGVuIiwiYl9pX2xlbiIsImFfZF9sZW4iLCJiX2RfbGVuIiwiZF9nYXAiLCJhYnMiLCJkZWJ0IiwicmVzX2FycmF5IiwiYV9lbG0iLCJiX2VsbSIsInNwbGljZSIsIm1pbnVzIiwibmV2YXRpdmUiLCJtYWtlTmVnYXRpdmUiLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImRpdnMiLCJnZXRNYXhDb21tb25EaXZpc29yIiwibXVsdGlwbGUiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJtYWtlRmlib25hY2NpU2VxdWVuY2UiLCJmdW5jIiwiYyIsIm1ha2VMdWNhc1NlcXVlbmNlIiwiaXNGaWJvbmFjY2lOdW1iZXIiLCJ6ZXJvIiwib25lIiwiZmlicyIsImlzTHVjYXNOdW1iZXIiLCJsdWNzIiwibWFrZVNlcXVlbmNlIiwib3RoZXJzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsIm1ha2VQb2x5Z29uYWxOdW1iZXJzIiwiY3VycmVudCIsInJhbmdlIiwiaW5jcmVtZW50IiwibWFrZVRyaWFuZ2xlTnVtYmVycyIsIm1ha2VTcXVhcmVOdW1iZXJzIiwiaXNUcmlhbmdsZU51bWJlciIsImZpbmQiLCJpc1NxdWFyZU51bWJlciIsIm1ha2VNZXJzZW5uZU51bWJlcnMiLCJ0d28iLCJleCIsIm1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyIsIm1hcnIiLCJpc01lcnNlbm5lTnVtYmVyIiwibXMiLCJtIiwiaXNNZXJzZW5uZVByaW1lTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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LENBQUMsR0FBRzRQLEVBQUUsQ0FBQzNQLE1BQXRCLEVBQThCRCxDQUFDLEVBQS9CLEVBQWtDO0FBQ2hDLFFBQUk2UCxDQUFDLEdBQUdELEVBQUUsQ0FBQzVQLENBQUQsQ0FBVjs7QUFDQSxRQUFHNlAsQ0FBQyxDQUFDelAsT0FBRixDQUFVbUMsQ0FBVixDQUFILEVBQWdCO0FBQ2QsYUFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLEtBQVA7QUFDRCxDQWhCRDs7QUFtQmU7QUFDYjNELFFBQU0sRUFBRUEsTUFESztBQUViRSxRQUFNLEVBQUVBLE1BRks7QUFHYkMsTUFBSSxFQUFFQSxJQUhPO0FBSWJDLElBQUUsRUFBRUE7QUFKUyxDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgc3UgZnJvbSBcIi4vc3UuanNcIjtcblxuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcbmNvbnN0IE1JTiA9IENPTlNUQU5UUy5NSU47XG5cbmNvbnN0IFMgPSB7fTtcbmNvbnN0IEsgPSB7fTtcblxuY29uc3QgbWFrZVN1ID0gc3UubWFrZVN1O1xuY29uc3QgY29weVN1ID0gc3UuY29weVN1O1xuY29uc3QgaXNTdSA9IHN1LmlzU3U7XG5jb25zdCBTdSA9IHN1LlN1O1xuXG5jb25zdCBGSVJTVF9QUklNRV9OVU1CRVIgPSAyO1xuXG5cbksucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gbWFrZVN1KDApO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSBtYWtlU3UoMSk7XG4gIH1cbiAgaWYoIWlzU3UobWluKSl7XG4gICAgbWluID0gbWFrZVN1KG1pbik7XG4gIH1cbiAgaWYoIWlzU3UobWF4KSl7XG4gICAgbWF4ID0gbWFrZVN1KG1heCk7XG4gIH1cblxuICBjb25zdCBzdHIgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gIGxldCByYW47XG5cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgaWYobWluLmlzWmVybygpKXtcbiAgICAgIHJhbiA9IG1ha2VTdSgwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJhbiA9IG1pbjtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICAgIHJhbiA9IG1ha2VTdShcIjAuXCIgKyBhcnJbMV0pLm11bHRpcGxpY2F0aW9uKG1heCk7XG4gIH1cbiAgcmV0dXJuIHJhbjtcbn07XG5cbksucmFuZG9tRWxlbWVudCA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgY29uc3QgaSA9IEsucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCkuaW50ZWdlcjtcbiAgcmV0dXJuIGFycmF5W2ldO1xufTtcblxuSy5yYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYoICFpc1N1KG1pbikgfHwgIWlzU3UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKG1pbi5pc0VxdWFsKG1heCkgfHwgbWluLmlzTGFyZ2UobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbi5nZXROdW1iZXIoKTsgaSA8PSBtYXguZ2V0TnVtYmVyKCk7IGkrKyl7XG4gICAgY29uc3QgcyA9IG1ha2VTdShpKTtcbiAgICBhcnIucHVzaChzKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IEsucmFuZG9tRWxlbWVudChhcnIpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG5LLm1ha2VQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZihtYXggJiYgbWF4LmlzU3UgJiYgbWF4LmlzU3UoKSl7XG4gICAgbWF4ID0gTnVtYmVyKG1heC5nZXRTdHJpbmcoKSk7XG4gIH1cblxuICBjb25zdCBNQVggPSAxMDA7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBpZihtYXggPiBNQVgpe1xuICAgIG1heCA9IE1BWDtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgbWF4OyBpKyspe1xuICAgIGNvbnN0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGlmKHN1LmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgfVxuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2pdO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBzdW0gKz0gZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuXG5cbksuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgZW1wdHkuXCI7XG4gIH1cbiAgbGV0IGlwID0gMTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtpXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgaXAgPSBpcCAqIGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBhIE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5LLmRpdmlzaW9uID0gZnVuY3Rpb24oZGl2aWRlbmQsIGRpdmlzb3Ipe1xuICBpZihkaXZpZGVuZCA9PT0gdW5kZWZpbmVkIHx8IGRpdmlzb3IgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGRpdmlkZW5kIC8gZGl2aXNvcjtcbiAgcmV0dXJuIHtcbiAgICBpbnRlZ2VyOiB7XG4gICAgICByZW1haW5kZXI6IGRpdmlkZW5kICUgZGl2aXNvcixcbiAgICAgIHJlc3VsdDogTWF0aC5mbG9vcihyZXN1bHQpXG4gICAgfSxcbiAgICByZWFsTnVtYmVyOiByZXN1bHRcbiAgfTtcbn07XG5cbksuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgbGV0IGEgPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhICs9IGFycltpXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbksuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdW0gPSBLLmRpdmlzb3JzU3VtbWF0aW9uKG4pO1xuICBpZihzdW0gPiBuICogMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUEgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gbiAqIG47XG4gIGNvbnN0IHMgPSBTdHJpbmcobnVtKTtcbiAgY29uc3QgbGVuID0gcy5sZW5ndGg7XG4gIGxldCBmaXJzdF9sZW4gPSAwO1xuICBsZXQgYWZ0ZXJfbGVuID0gMDtcbiAgbGV0IGZpcnN0LCBhZnRlcjtcbiAgaWYoUy5pc09kZE51bWJlcihsZW4pKXtcbiAgICBmaXJzdF9sZW4gPSAobGVuIC0gMSkgLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbiArIDE7XG4gIH1lbHNle1xuICAgIGZpcnN0X2xlbiA9IGxlbiAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuO1xuICB9XG4gIGZpcnN0ID0gTnVtYmVyKHMuc3Vic3RyKDAsIGZpcnN0X2xlbikpO1xuICBhZnRlciA9IE51bWJlcihzLnN1YnN0cihmaXJzdF9sZW4sIGFmdGVyX2xlbikpO1xuXG4gIGlmKCggZmlyc3QgKyBhZnRlciApID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQiA9IGZ1bmN0aW9uKG4pe1xuXG4gIGNvbnN0IGFyciA9IFN0cmluZyhuKS5zcGxpdChcIlwiKTtcblxuICBjb25zdCBtaW4gPSBOdW1iZXIoYXJyLnNvcnQoKS5qb2luKFwiXCIpKTtcbiAgY29uc3QgbWF4ID0gTnVtYmVyKGFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG5cbiAgaWYoKG1heCAtIG1pbikgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQShuKSB8fCBLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNJbnRlZ2VyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4pO1xuICBpZiggZiA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8g6Kq/5ZKM5bmz5Z2HXG5LLmhhcm1vbmljTWVhbiA9IGZ1bmN0aW9uKGFycil7XG4gIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIHN1bSArPSAxIC8gYXJyW2ldO1xuICB9XG4gIHJldHVybiBsZW4gLyBzdW07XG59O1xuXG4vLyDoqr/lkozmlbDjgYvjganjgYbjgYtcbksuaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgY29uc3QgcmVzID0gSy5oYXJtb25pY01lYW4oYXJyKTtcbiAgaWYoUy5pc0ludGVnZXIocmVzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuUy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYobiA+IDAgJiYgUy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbksuY29sbGF0emhQcm9ibGVtID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBhcnIgPSBbXTtcblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24obil7XG4gICAgbGV0IHJlcyA9IG47XG4gICAgaWYoUy5pc09kZE51bWJlcihuKSl7XG4gICAgICByZXMgPSBuICogMyArIDE7XG4gICAgfWVsc2UgaWYoUy5pc0V2ZW5OdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAvIDI7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgd2hpbGUobnVtID4gMSl7XG4gICAgbnVtID0gY2FsYyhudW0pO1xuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODleOCp+ODq+ODnuODvOODhuOCueODiFxuLy8gSlPjga7mibHjgYjjgovnr4Tlm7LjgpLotoXjgYjjgabjgYTjgabjgYbjgb7jgY/li5XjgYvjgZpcbksuZmVybWF0VGVzdCA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFTLmlzSW50ZWdlcihuKSB8fCBTLmlzWmVybyhuKSB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzLiBcIiArIG4gKyBcIiBpcyBpbmNvcnJlY3QgcGFyYW1ldGVyLlwiO1xuICB9XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gMTAwO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMTsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgYSA9IEsucmFuZG9tSW50KDIsIG4gLSAxKTtcbiAgICBpZihLLm1heENvbW1vbkRpdmlzb3IoYSwgbikgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IE1hdGgucG93KGEsIG4gLSAxKSAlIG47XG4gICAgaWYocmVzICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCJNYXliZSBQcmltZSBOdW1iZXJcIjtcbn07XG5cbi8vIOe1hOOBv+WQiOOCj+OBm+aVsOOBruioiOeul1xuLy8gSy5jb21iaW5hdGlvbnMgPSBmdW5jdGlvbihhcnIpe1xuLy8gfTtcblxuLy8gMyA9PiBbMCwgM10sIFsxLCAyXSwgWzIsIDFdLCBbMywgMF1cbksuZ2V0SW5jbHVkZXNOdW1iZXJzID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCB0ZW1wID0gbnVtO1xuICBsZXQgYm9vbCA9IHRydWU7XG4gIHdoaWxlKGJvb2wpe1xuICAgIGNvbnN0IGEgPSB0ZW1wO1xuICAgIGNvbnN0IGIgPSBudW0gLXRlbXA7XG4gICAgY29uc3QgYXIgPSBbYSxiXTtcbiAgICBhcnIucHVzaChhcik7XG4gICAgdGVtcCA9IHRlbXAgLTE7XG4gICAgaWYodGVtcCA8IDApe1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyBmaWJvbmFjY2lcblxuXG5cblxuXG5cblxuLy8gdG9kbyAwc3RhcnRcbmNvbnN0IGFycmF5U3VtbWF0aW9uID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhKGEgaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICBhID0gY29yZS5udW1Ub0FycmF5KGEpO1xuICB9XG4gIGlmKCAhKGIgaW5zdGFuY2VvZiBBcnJheSkgKXtcbiAgICBiID0gY29yZS5udW1Ub0FycmF5KGIpO1xuICB9XG5cbiAgaWYoIWNvcmUuaXNOdW1BcnJheShhKSB8fCAhY29yZS5pc051bUFycmF5KGIpKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYoY29yZS5pc1plcm8oYVswXSkgJiYgY29yZS5pc1plcm8oYlswXSkpe1xuICAgIHJldHVybiB7XG4gICAgICBhcnJheTogWzBdLFxuICAgICAgc3RyaW5nOiBcIjBcIixcbiAgICAgIG51bWJlcjogMCxcbiAgICAgIGxlbmd0aDogMVxuICAgIH07XG4gIH1cblxuICBjb25zdCBBID0gbWFrZVN1KGEpO1xuICBjb25zdCBCID0gbWFrZVN1KGIpO1xuXG4gIGNvbnNvbGUubG9nKEEsQik7XG5cbiAgY29uc3QgcmVzID0gY29yZS5nZXRMYXJnZXIoYSwgYik7XG4gIGNvbnN0IGFycl9hID0gcmVzWzBdO1xuICBjb25zdCBhcnJfYiA9IHJlc1sxXTtcbiAgY29uc3QgbGVuID0gYXJyX2EubGVuZ3RoO1xuXG4gIGNvbnN0IGdhcCA9IGxlbiAtIGFycl9iLmxlbmd0aDtcblxuICBsZXQgb3ZlciA9IDAsIGFycl9jID0gW107XG4gIGZvcihsZXQgaSA9IGxlbiAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgYXJyX2MudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgYXJyX2MudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShhcnJfYyk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGdldExhcmdlciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnJfYSA9IFtdLCBhcnJfYiA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhW2ldO1xuICAgIGlmKGVsbV9hID09PSAwICYmIGFycl9hLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoZWxtX2EgPj0gIDAgJiYgZWxtX2EgPCAxMCl7XG4gICAgICBhcnJfYS5wdXNoKGVsbV9hKTtcbiAgICB9XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtX2IgPSBiW2ldO1xuICAgIGlmKGVsbV9iID09PSAwICYmIGFycl9iLmxlbmd0aCA9PT0gMCl7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYoZWxtX2IgPj0gIDAgJiYgZWxtX2IgPCAxMCl7XG4gICAgICBhcnJfYi5wdXNoKGVsbV9iKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzO1xuICBpZihhcnJfYS5sZW5ndGggPiBhcnJfYi5sZW5ndGgpe1xuICAgIHJlcyA9IFthLCBiXTtcbiAgfWVsc2UgaWYoYXJyX2EubGVuZ3RoIDwgYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYiwgYV07XG4gIH1lbHNle1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBlbG1fYWEgPSBhcnJfYVtpXTtcbiAgICAgIGNvbnN0IGVsbV9iYiA9IGFycl9iW2ldO1xuICAgICAgaWYoZWxtX2FhID4gZWxtX2JiKXtcbiAgICAgICAgcmVzID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hYSA8IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgcmVzID0gW2EsIGJdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogS1xufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWDogMTAwMDAsXG4gIE1JTjogLTEwMDAwLFxuICBEQlo6IFwiRGl2aXNpb24gYnkgWmVyb1wiLFxuICBOQU46IFwiTm90IGEgbnVtYmVyXCIsXG4gIE5PVFNVOiBcIkFyZ3VtZW50IGlzIG5vdCBTdS5cIlxufTtcbiIsImNvbnN0IGNvcmUgPSB7fTtcblxuY29yZS5pc051bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG4gICAgYXJyLnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29yZS5udW1Ub0FycmF5V2l0aERlY2ltYWwgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyMSA9IFtdO1xuICBjb25zdCBhcnIyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgbGV0IHRndCA9IGFycjE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0cltpXSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpZihlbG0gPT09IFwiLlwiICYmIHRndCA9PT0gYXJyMSl7XG4gICAgICAgIHRndCA9IGFycjI7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGd0LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gWy4uLmFycjEsIFwiLlwiLCBhcnIyXTtcbn07XG5cbmNvcmUubnVtVG9BcnJheVdpdGhEZWNpbWFsMiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGFyciA9IHN0ci5zcGxpdChcIlwiKTtcblxuICBjb25zdCBpbnQgPSBbXTtcbiAgY29uc3QgZGVjaW1hbCA9IFtdO1xuXG4gIGxldCBpc19kZWNpbWFsID0gZmFsc2U7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKGFycltpXSk7XG4gICAgY29uc3QgaXNOdW1iZXIgPSB0aGlzLmlzTnVtYmVyKG51bSk7XG4gICAgaWYoIWlzTnVtYmVyICYmIGFycltpXSA9PT0gXCIuXCIpe1xuICAgICAgaXNfZGVjaW1hbCA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9ZWxzZSBpZighaXNOdW1iZXIpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG5cbiAgICBpZihpc19kZWNpbWFsKXtcbiAgICAgIGRlY2ltYWwucHVzaChudW0pO1xuICAgIH1lbHNle1xuICAgICAgaW50LnB1c2gobnVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGludDogaW50LFxuICAgIGRlY2ltYWw6IGRlY2ltYWxcbiAgfTtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29yZS5hZGQgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoIWEgJiYgIWIpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGFfID0gdGhpcy5udW1Ub0FycmF5V2l0aERlY2ltYWwyKGEpO1xuICBjb25zdCBiXyA9IHRoaXMubnVtVG9BcnJheVdpdGhEZWNpbWFsMihiKTtcblxuICBjb25zdCBhX2ludCA9IGFfLmludC5yZXZlcnNlKCk7XG4gIGNvbnN0IGJfaW50ID0gYl8uaW50LnJldmVyc2UoKTtcblxuICBjb25zdCBhX2RlYyA9IGFfLmRlY2ltYWw7XG4gIGNvbnN0IGJfZGVjID0gYl8uZGVjaW1hbDtcblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24oYSwgYil7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgbGV0IGFycl9hID0gYTtcbiAgICBsZXQgYXJyX2IgPSBiO1xuICAgIGlmKGEubGVuZ3RoIDwgYi5sZW5ndGgpe1xuICAgICAgYXJyX2EgPSBiO1xuICAgICAgYXJyX2IgPSBhO1xuICAgIH1cbiAgICBsZXQgY2FycnkgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBhYSA9IGFycl9hW2ldID8gYXJyX2FbaV0gOiAwO1xuICAgICAgY29uc3QgYmIgPSBhcnJfYltpXSA/IGFycl9iW2ldIDogMDtcbiAgICAgIGxldCByZXMgPSBhYSArIGJiICsgY2Fycnk7XG4gICAgICBpZihyZXMgPiA5KXtcbiAgICAgICAgcmVzID0gcmVzIC0xMDtcbiAgICAgICAgY2FycnkgPSAxO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGNhcnJ5ID0gMDtcbiAgICAgIH1cbiAgICAgIGFyci5wdXNoKHJlcyk7XG4gICAgfVxuXG4gICAgaWYoY2FycnkgPiAwKXtcbiAgICAgIGFyci5wdXNoKGNhcnJ5KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNvbnN0IGludF9hcnIgPSBjYWxjKGFfaW50LCBiX2ludCkucmV2ZXJzZSgpO1xuXG4gIHJldHVybiBpbnRfYXJyO1xuXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCJpbXBvcnQgcyBmcm9tIFwiLi9zdS5qc1wiO1xuaW1wb3J0IFNLIGZyb20gXCIuL1NLLmpzXCI7XG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgczogcyxcbiAgUzogU0suUyxcbiAgSzogU0suSyxcbiAgY29yZTogY29yZVxufTsiLCJpbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IE1BWCA9IGNvbnN0YW50cy5NQVg7XG5jb25zdCBNSU4gPSBjb25zdGFudHMuTUlOO1xuY29uc3QgREJaID0gY29uc3RhbnRzLkRCWjtcbmNvbnN0IE5BTiA9IGNvbnN0YW50cy5OQU47XG5jb25zdCBOT1RTVSA9IGNvbnN0YW50cy5OT1RTVTtcblxuXG5jb25zdCBTdSA9IGZ1bmN0aW9uKG4sIG9wdGlvbil7XG4gIGlmKGlzTmFOKG4pKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuICBpZighbil7XG4gICAgbiA9IDA7XG4gIH1cbiAgaWYoIW9wdGlvbil7XG4gICAgb3B0aW9uID0ge307XG4gIH1cblxuICBsZXQgc3RyID0gU3RyaW5nKG4pO1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0gPT09IFwiLVwiKXtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCk7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIGlmKCFuZWdhdGl2ZSAmJiBvcHRpb24gJiYgb3B0aW9uLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihpc05hTihOdW1iZXIoc3RyKSkpe1xuICAgIHN0ciA9IFwiMFwiO1xuICB9XG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICBsZXQgaW50X3N0ciA9IHBhcnRzWzBdO1xuICBsZXQgZGVjaW1hbF9zdHIgPSBwYXJ0c1sxXTtcbiAgaWYoaW50X3N0cil7XG4gICAgY29uc3QgaW50MCA9IGludF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoaW50MCAmJiBpbnQwLmxlbmd0aCA9PT0gaW50X3N0ci5sZW5ndGgpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgbmV3X2ludF9zdHIgPSBcIlwiO1xuICAgIGxldCBzdGFydF96ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDxpbnRfc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKGludF9zdHJbaV0gIT09IFwiMFwiIHx8ICFzdGFydF96ZXJvKXtcbiAgICAgICAgc3RhcnRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfaW50X3N0ciArPSBpbnRfc3RyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2ludF9zdHIpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgaW50X3N0ciA9IG5ld19pbnRfc3RyO1xuICAgIH1cbiAgfVxuXG4gIGlmKGRlY2ltYWxfc3RyKXtcbiAgICBjb25zdCBkZWMwID0gZGVjaW1hbF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoZGVjMCAmJiBkZWMwLmxlbmd0aCA9PT0gZGVjaW1hbF9zdHIubGVuZ3RoKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBlbmRfemVybyA9IHRydWU7XG4gICAgbGV0IG5ld19kZWNpbWFsX3N0ciA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gZGVjaW1hbF9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgaWYoZGVjaW1hbF9zdHJbaV0gIT09IFwiMFwiIHx8ICFlbmRfemVybyl7XG4gICAgICAgIGVuZF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19kZWNpbWFsX3N0ciA9IGRlY2ltYWxfc3RyW2ldICsgbmV3X2RlY2ltYWxfc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2RlY2ltYWxfc3RyKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBkZWNpbWFsX3N0ciA9IG5ld19kZWNpbWFsX3N0cjtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBpbnRfYXJyO1xuICBsZXQgZGVjaW1hbF9hcnI7XG5cblxuICB0cnl7XG4gICAgaW50X2FyciA9IGNvcmUubnVtVG9BcnJheShpbnRfc3RyKTtcbiAgICBkZWNpbWFsX2FyciA9IGRlY2ltYWxfc3RyID8gY29yZS5udW1Ub0FycmF5KGRlY2ltYWxfc3RyKSA6IFswXTtcbiAgfWNhdGNoKGUpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG5cbiAgdGhpcy5pbnRlZ2VyID0gaW50X2FycjtcbiAgdGhpcy5kZWNpbWFsID0gZGVjaW1hbF9hcnI7XG4gIHRoaXMubmVnYXRpdmUgPSBuZWdhdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgXG4gIGxldCBkZW5vbWluYXRvciA9IFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNpbWFsLmxlbmd0aDsgaSsrKXtcbiAgICBkZW5vbWluYXRvci5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5mcmFjdGlvbiA9IHtcbiAgICBudW1lcmF0b3I6IHRoaXMuaW50ZWdlci5jb25jYXQodGhpcy5kZWNpbWFsKSxcbiAgICBkZW5vbWluYXRvcjogZGVub21pbmF0b3JcbiAgfTtcblxufTtcblxuY29uc3QgbWFrZVN1ID0gZnVuY3Rpb24obnVtLCBvcHRpb24pe1xuICBsZXQgcmVzO1xuICB0cnl7XG4gICAgcmVzID0gbmV3IFN1KG51bSwgb3B0aW9uKTtcbiAgfWNhdGNoKGUpe1xuICAgIHJlcyA9IGUubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG5cbn07XG5cbmNvbnN0IGlzU3UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKHN1IGluc3RhbmNlb2YgU3Upe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb3B5U3UgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IHN0ciA9IHN1LmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gIFpFUk86IG1ha2VTdSgwKSxcbiAgT05FOiBtYWtlU3UoMSksXG4gIEZJUlNUX1BSSU1FX05VTUJFUjogbWFrZVN1KDIpLFxuICBNQVg6IG1ha2VTdShNQVgpLFxuICBNSU46IG1ha2VTdShNSU4pXG59O1xuXG5cblN1LnByb3RvdHlwZS5nZXRTdHJpbmcgPSBmdW5jdGlvbigpe1xuICBsZXQgc3RyID0gU3RyaW5nKCB0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIGNvbnN0IGFjID0gdGhpcy5kZWNpbWFsLnJlZHVjZSgoYSxlKSA9PiBhICsgZSk7XG4gIGlmKGFjICE9PSAwKXtcbiAgICBzdHIgKz0gXCIuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gdGhpcy5uZWdhdGl2ZSA/IGAtJHtzdHJ9YCA6IHN0cjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5nZXRTdHJpbmcoKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0SW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcihcIjAuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdHIgPSB0aGlzLmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBnZXRMYXJnZSA9IGZ1bmN0aW9uKGEsIGIsIGFic29sdXRlID0gZmFsc2Upe1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBsZXQgZmllbGQgPSBbXTtcblxuICBjb25zdCBfYSA9IG1ha2VTdShhLmdldFN0cmluZygpKTtcbiAgY29uc3QgX2IgPSBtYWtlU3UoYi5nZXRTdHJpbmcoKSk7XG5cbiAgaWYoYWJzb2x1dGUpe1xuICAgIF9hLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgX2IubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmKF9hLmlzWmVybygpICYmIF9iLmlzWmVybygpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiAhX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBiO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoX2EuaW50ZWdlci5sZW5ndGggPiBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5pbnRlZ2VyLmxlbmd0aCA8IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgX2EuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gX2EuaW50ZWdlcltpXTtcbiAgICBsZXQgZWxtX2IgPSBfYi5pbnRlZ2VyW2ldO1xuICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICBicmVhaztcbiAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICBjb25zdCBsZW4gPSBfYS5kZWNpbWFsLmxlbmd0aCA+PSBfYi5kZWNpbWFsLmxlbmd0aCA/IF9hLmRlY2ltYWwubGVuZ3RoIDogX2IuZGVjaW1hbC5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IF9hLmRlY2ltYWxbaV0gPyBfYS5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGxldCBlbG1fYiA9IF9iLmRlY2ltYWxbaV0gPyBfYi5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKG5lZ2F0aXZlKXtcbiAgICBmaWVsZCA9IFtmaWVsZFsxXSwgZmllbGRbMF1dO1xuICB9XG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZmllbGRbMF07XG5cbn07XG5cblxuU3UucHJvdG90eXBlLmlzRXF1YWwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCBpX2EgPSBhLmludGVnZXI7XG4gIGNvbnN0IGlfYiA9IGIuaW50ZWdlcjtcbiAgY29uc3QgZF9hID0gYS5kZWNpbWFsO1xuICBjb25zdCBkX2IgPSBiLmRlY2ltYWw7XG5cbiAgY29uc3QgbGFyZ2UgPSBnZXRMYXJnZShhLCBiKTtcblxuICBpZighbGFyZ2Upe1xuICAgIGlmKGlfYS5sZW5ndGggPT09IGlfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGlfYVtpXSAhPT0gaV9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZSBpZihkX2EubGVuZ3RoID09PSBkX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihkX2FbaV0gIT09IGRfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoYS5uZWdhdGl2ZSA9PT0gYi5uZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59O1xuXG5TdS5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pbnRlZ2VyLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmludGVnZXJbMF0gPT09IDAgJiYgIXRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT25lID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMVwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMYXJnZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBhLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTbWFsbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBiLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1Bvc2l0aXZlKCkgJiYgdGhpcy5pc0ludGVnZXIoKSAmJiB0aGlzLmlzTGFyZ2UoQ09OU1RBTlRTLlpFUk8pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmNvbnRhaW5EZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdGhpcy5kZWNpbWFsLnJlZHVjZShmdW5jdGlvbihhLCB2KXtcbiAgICAgIHJldHVybiBhICsgdjtcbiAgfSk7XG4gIGlmKHJlcyA9PT0gMCl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gdGhpcy5jbG9uZSgpO1xuICBsZXQgYiA9IHN1LmNsb25lKCk7XG4gIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiO1xuICB9XG4gIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlO1xuICBpZihhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIGIubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGEuc3VidHJhY3QoYik7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIGEubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGIuc3VidHJhY3QoYSk7XG4gIH1cblxuICBsZXQgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJlcyA9IGE7XG4gIH1cbiAgbGV0IGludF9hID0gcmVzLmludGVnZXI7XG4gIGxldCBkZWNfYSA9IHJlcy5kZWNpbWFsO1xuICBsZXQgaW50X2IsIGRlY19iO1xuICBpZihyZXMgPT09IGEpe1xuICAgIGludF9iID0gYi5pbnRlZ2VyO1xuICAgIGRlY19iID0gYi5kZWNpbWFsO1xuICB9ZWxzZXtcbiAgICBpbnRfYiA9IGEuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGEuZGVjaW1hbDtcbiAgfVxuXG4gIGxldCBsZW5faSA9IGludF9hLmxlbmd0aDtcbiAgbGV0IGxlbl9kID0gZGVjX2EubGVuZ3RoO1xuXG4gIGlmKGRlY19iLmxlbmd0aCA+IGRlY19hLmxlbmd0aCl7XG4gICAgbGVuX2QgPSBkZWNfYi5sZW5ndGg7XG4gIH1cbiAgbGV0IG92ZXIgPSAwLFxuICAgICAgaW50X3JlcyA9IFtdLFxuICAgICAgZGVjX3JlcyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IGxlbl9kIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGRlY19hW2ldIHx8IDA7XG4gICAgbGV0IGVsbV9iID0gZGVjX2JbaV0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgZGVjX3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG5cbiAgZm9yKGxldCBpID0gZGVjX3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApe1xuICAgIGxldCBkID0gZGVjX3Jlc1tpXTtcbiAgICBpZihkID09PSAwKXtcbiAgICAgIGRlY19yZXMucG9wKCk7XG4gICAgfWVsc2V7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBnYXAgPSBsZW5faSAtIGludF9iLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gbGVuX2kgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gaW50X2FbaV07XG4gICAgbGV0IGVsbV9iID0gaW50X2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgaW50X3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBpbnRfcmVzLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoaW50X3Jlcy5qb2luKFwiXCIpICsgXCIuXCIgKyBkZWNfcmVzLmpvaW4oXCJcIiksIHtuZWdhdGl2ZTogbmVnYXRpdmV9KTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGIubmVnYXRlKCk7XG4gIH1cblxuICBpZihhLm5lZ2F0aXZlICE9PSBiLm5lZ2F0aXZlKXtcbiAgICBiLm5lZ2F0aXZlID0gIWIubmVnYXRpdmU7XG4gICAgcmV0dXJuIGEuYWRkKGIpO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gYS5uZWdhdGl2ZTtcblxuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiLCB0cnVlKTtcbiAgaWYocmVzICE9PSBhKXtcbiAgICBhID0gc3U7XG4gICAgYiA9IHRoaXM7XG4gICAgbmVnYXRpdmUgPSAhYS5uZWdhdGl2ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgYV9pX2xlbiA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGJfaV9sZW4gPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IGFfZF9sZW4gPSBhLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBiX2RfbGVuID0gYi5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgZF9nYXAgPSBNYXRoLmFicyhhX2RfbGVuIC0gYl9kX2xlbik7XG5cbiAgbGV0IGxlbl9pID0gMDtcbiAgbGV0IGxlbl9kID0gMDtcbiAgaWYoYV9pX2xlbiA+IGJfaV9sZW4pe1xuICAgIGxlbl9pICs9IGFfaV9sZW47XG4gIH1lbHNle1xuICAgIGxlbl9pICs9IGJfaV9sZW47XG4gIH1cbiAgaWYoYV9kX2xlbiA+IGJfZF9sZW4pe1xuICAgIGxlbl9kICs9IGFfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYl9pZC5wdXNoKDApO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGVuX2QgKz0gYl9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBhX2lkLnB1c2goMCk7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgZGVidCA9IDA7XG4gIGNvbnN0IHJlc19hcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuX2kgKyBsZW5fZDsgaSsrKXtcbiAgICBjb25zdCBpX2EgPSBhX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGlfYiA9IGJfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgYV9lbG0gPSAoYV9pZFtpX2FdID8gYV9pZFtpX2FdIDogMCkgLSBkZWJ0O1xuICAgIGNvbnN0IGJfZWxtID0gYl9pZFtpX2JdID8gYl9pZFtpX2JdIDogMDtcbiAgICBpZihhX2VsbSA+PSBiX2VsbSl7XG4gICAgICBkZWJ0ID0gMDtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KGFfZWxtIC0gYl9lbG0pO1xuICAgIH1lbHNle1xuICAgICAgZGVidCA9IDE7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdCgoZGVidCAqIDEwKSArIGFfZWxtIC0gYl9lbG0pO1xuICAgIH1cblxuICB9XG4gIHJlc19hcnJheS5zcGxpY2UocmVzX2FycmF5Lmxlbmd0aCAtIGxlbl9kLCAwLCBcIi5cIik7XG4gIGNvbnN0IG1pbnVzID0gbmVnYXRpdmUgPyBcIi1cIiA6IFwiXCI7XG5cbiAgY29uc3QgcmVzdWx0ID0gIG1ha2VTdShtaW51cyArIHJlc19hcnJheS5qb2luKFwiXCIpKTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICB0aGlzLm5ldmF0aXZlID0gZmFsc2U7XG4gIH1lbHNle1xuICAgIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm1ha2VQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLm5lZ2F0aXZlID0gZmFsc2U7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm1ha2VOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubnVtYmVyID09PSAwKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGljYXRpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKGEuaXNaZXJvKCkgfHwgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgZHBfYSA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGRwX2IgPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IHJlc19hcnIgPSBbXTtcbiAgZm9yKGxldCBpX2EgPSAwOyBpX2EgPCBhX2lkLmxlbmd0aDsgaV9hKyspe1xuICAgIGZvcihsZXQgaV9iID0gMDsgaV9iIDwgYl9pZC5sZW5ndGg7IGlfYisrKXtcbiAgICAgIGNvbnN0IGVsbV9hID0gYV9pZFtpX2FdO1xuICAgICAgY29uc3QgZWxtX2IgPSBiX2lkW2lfYl07XG4gICAgICBjb25zdCBwb3NfYSA9IGRwX2EgLSBpX2EgLTE7XG4gICAgICBjb25zdCBwb3NfYiA9IGRwX2IgLSBpX2IgLTE7XG4gICAgICBjb25zdCBwb3MgPSBwb3NfYSArIHBvc19iO1xuICAgICAgbGV0IHJlcyA9IGVsbV9hICogZWxtX2I7XG4gICAgICBsZXQgbGVuID0gTWF0aC5hYnMocG9zKTtcbiAgICAgIGxldCBzdHI7XG4gICAgICBpZihwb3MgPj0gMCl7XG4gICAgICAgIGxlbisrO1xuICAgICAgICBpZihyZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuICsgMSwgXCIwXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICBpZihsZW4gPT09IDEgJiYgcmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcylbMF0gKyBcIi5cIiArIFN0cmluZyhyZXMpWzFdO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBcIjAuXCIgKyBTdHJpbmcocmVzKS5wYWRTdGFydChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzX2Fyci5wdXNoKG1ha2VTdShzdHIpKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgcmVzID0gcmVzLmFkZChyZXNfYXJyW2ldKTtcbiAgfVxuXG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc2lvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcblxuICBpZihhLmlzWmVybygpICYmIGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBOQU47XG4gIH1lbHNlIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1lbHNlIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBEQlo7XG4gIH1cblxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBjb3VudCA9IG1ha2VTdSgwKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoYS5pc0xhcmdlKHN1bSkgfHwgYS5pc0VxdWFsKHN1bSkpe1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdSgxKSk7XG4gICAgc3VtID0gYi5tdWx0aXBsaWNhdGlvbihjb3VudCk7XG4gIH1cblxuICBjb3VudCA9IGNvdW50LnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIHN1bSA9IHN1bS5zdWJ0cmFjdChiKTtcbiAgY29uc3QgcmVtYWluID0gYS5zdWJ0cmFjdChzdW0pO1xuICBjb25zdCByZXMgPSBjb3VudDtcbiAgcmVzLnJlbWFpbmRlciA9IHJlbWFpbjtcbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG4gIHJldHVybiByZXM7XG59O1xuXG5cblN1LnByb3RvdHlwZS5wbHVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLnRhc3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubWludXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5oaWt1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5rYWtlcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS53YXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5kaXZpc2lvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmFkZChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgXG4gIGlmKCByZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPZGROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBpZiggIXJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyB0aGlzLmlzTGFyZ2UobWFrZVN1KGkpKTsgaSsrKXtcbiAgICBsZXQgc3UgPSBtYWtlU3UoaSk7XG4gICAgY29uc3QgcmVtYWluZGVyID0gdGhpcy5kaXZpc2lvbihzdSkucmVtYWluZGVyO1xuICAgIGlmKHJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIGFyci5wdXNoKHRoaXMpO1xuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldENvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGxldCBhID0gdGhpcztcbiAgbGV0IGIgPSBzdTtcblxuICBjb25zdCBhcnJfYSA9IGEuZ2V0RGl2aXNvcnMoKTtcbiAgaWYoYS5pc0VxdWFsKGIpKXtcbiAgICByZXR1cm4gYXJyX2E7XG4gIH1cbiAgY29uc3QgYXJyX2IgPSBiLmdldERpdmlzb3JzKCk7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFycl9iLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBlbG1fYiA9IGFycl9iW2pdO1xuICAgICAgaWYoZWxtX2EuaXNFcXVhbChlbG1fYikpe1xuICAgICAgICBkaXZzLnB1c2goZWxtX2EpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZzO1xufTtcblxuU3UucHJvdG90eXBlLmdldE1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0Q29tbW9uRGl2aXNvcnMoc3UpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBbdGhpc107XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjb3VudCA9IG1ha2VTdShcIjFcIik7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkgfHwgY291bnQuaXNFcXVhbChDT05TVEFOVFMuTUFYKSl7XG4gICAgYXJyLnB1c2godGhpcy5tdWx0aXBsaWNhdGlvbihjb3VudCkpO1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdShcIjFcIikpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuXG4gIGNvbnN0IG1heENvbW1vbkRpdmlzb3IgPSBhLmdldE1heENvbW1vbkRpdmlzb3IoYik7XG5cbiAgY29uc3QgbXVsdGkgPSBhLm11bHRpcGx5KGIpO1xuXG4gIGNvbnN0IHJlcyA9IG11bHRpLmRpdmlzaW9uKG1heENvbW1vbkRpdmlzb3IpO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblxuY29uc3QgbWFrZUZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oYSwgYil7XG5cbiAgaWYoIWlzU3UoYSkgfHwgIWlzU3UoYikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW2EsIGJdO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdLmlzTGFyZ2UoTUFYKSl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gYXJyW2Fyci5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBiID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjID0gYS5hZGQoYik7XG4gICAgYXJyLnB1c2goYyk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblxuY29uc3QgbWFrZUx1Y2FzU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gbWFrZUZpYm9uYWNjaVNlcXVlbmNlKG1ha2VTdSgyKSwgbWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcblxuICBjb25zdCBmaWJzID0gbWFrZUZpYm9uYWNjaVNlcXVlbmNlKHplcm8sIG9uZSk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBmaWJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGZpYnNbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMdWNhc051bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsdWNzID0gbWFrZUx1Y2FzU2VxdWVuY2UoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGx1Y3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gbHVjc1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuY29uc3QgbWFrZVNlcXVlbmNlID0gZnVuY3Rpb24oZmlyc3QsIG90aGVycyl7XG4gIGNvbnN0IGFycmF5ID0gW2ZpcnN0XTtcbiAgaWYoIW90aGVycyl7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBvdGhlcnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG0gPSBvdGhlcnNbaV07XG4gICAgaWYoIWlzU3UoZWxtKSl7XG4gICAgICBlbG0gPSBtYWtlU3UoZWxtKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuU3UucHJvdG90eXBlLmdldFNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xufTtcblxuU3UucHJvdG90eXBlLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IG1ha2VTZXF1ZW5jZSh0aGlzLCBhcmd1bWVudHMpO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBzdW0gPSBzdW0uYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IGlwID0gYXJyWzBdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpcCA9IGlwLm11bHRpcGxpY2F0aW9uKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuU3UucHJvdG90eXBlLmRpZ2l0c3VtID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGEgPSBtYWtlU3UodGhpcy5pbnRlZ2VyW2ldKTtcbiAgICBzdW0gPSBzdW0uYWRkKGEpO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgyKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuY3ViZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgb25lID0gbWFrZVN1KFwiMVwiKTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgaWYoc3UuaXNFcXVhbChvbmUpKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsZXQgY291bnQgPSBvbmU7XG4gIGxldCByZXMgPSBjb3B5U3UodGhpcyk7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoc3UpKXtcbiAgICByZXMgPSB0aGlzLm11bHRpcGxpY2F0aW9uKHJlcyk7XG4gICAgY291bnQgPSBjb3VudC5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5pc09uZSgpIHx8IHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjJcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKG9uZSkpe1xuICAgIGxldCBlID0gdGhpcy5kaXZpc2lvbihjb3VudGVyKTtcbiAgICBpZihlLnJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldERpdmlzb3JzKCk7XG4gIGxldCBhID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhID0gYS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNMYXJnZSggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzRGVmaWNpZW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNTbWFsbCggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzUGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLnN1YnRyYWN0KHRoaXMpLmlzRXF1YWwodGhpcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5mYWN0b3JpYWwgPSBmdW5jdGlvbigpe1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZSh6ZXJvKSl7XG4gICAgcmVzID0gcmVzLm11bHRpcGxpY2F0aW9uKGNvdW50ZXIpO1xuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbmNvbnN0IG1ha2VQb2x5Z29uYWxOdW1iZXJzID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIWlzU3Uobikpe1xuICAgIHJldHVybjtcbiAgfVxuICBpZihuLmlzU21hbGwobWFrZVN1KDMpKSl7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDEpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHJhbmdlID0gY3VycmVudDtcblxuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gbi5zdWJ0cmFjdChtYWtlU3UoMikpO1xuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgcmFuZ2UgPSByYW5nZS5hZGQoaW5jcmVtZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5hZGQocmFuZ2UpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBtYWtlVHJpYW5nbGVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgcmV0dXJuIG1ha2VQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSgzKSwgbWF4KTtcbn07XG5cbmNvbnN0IG1ha2VTcXVhcmVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgcmV0dXJuIG1ha2VQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSg0KSwgbWF4KTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1RyaWFuZ2xlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3UgPSB0aGlzO1xuICBjb25zdCBhcnIgPSBtYWtlVHJpYW5nbGVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1NxdWFyZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVNxdWFyZU51bWJlcnMoc3UpO1xuICBjb25zdCByZXMgPSBhcnIuZmluZChlbG0gPT57XG4gICAgcmV0dXJuIGVsbS5pc0VxdWFsKHN1KTtcbiAgfSk7XG4gIGlmKHJlcyl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IENPTlNUQU5UUy5NQVg7XG4gIH1lbHNle1xuICAgIG1heCA9IG1heC5uZXh0KCk7XG4gIH1cbiAgY29uc3QgdHdvID0gbWFrZVN1KDIpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMCk7XG4gIGxldCBleCA9IG1ha2VTdSgxKTtcbiAgXG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChtYXgpKXtcbiAgICBjdXJyZW50ID0gdHdvLmV4cG9uZW50aWF0ZShleCkuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICBleCA9IGV4LmFkZChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb25zdCBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IG1hcnIgPSBtYWtlTWVyc2VubmVOdW1iZXJzKG1heCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbiA9IG1hcnJbaV07XG4gICAgaWYobi5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVOdW1iZXJzKG4pO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IG1ha2VNZXJzZW5uZVByaW1lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ha2VTdTogbWFrZVN1LFxuICBjb3B5U3U6IGNvcHlTdSxcbiAgaXNTdTogaXNTdSxcbiAgU3U6IFN1XG59OyJdLCJzb3VyY2VSb290IjoiIn0=