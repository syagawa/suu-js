(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["suapp"] = factory();
	else
		root["suapp"] = factory();
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
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.js */ "./core.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./index.js");



var S = {};
var K = {};
var FIRST_PRIME_NUMBER = 2;

S.isPrimeNumber = function (n) {
  if (!S.isNumber(n)) {
    return false;
  }

  if (n === 0 || n === 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n >= _constants_js__WEBPACK_IMPORTED_MODULE_0__["MAX"]) {
    return "Argument exceeds maximum value(".concat(_constants_js__WEBPACK_IMPORTED_MODULE_0__["MAX"], ")");
  }

  var max = n;

  for (var i = max - 1; i > 1; i--) {
    if (max % i === 0) {
      return false;
    }
  }

  return true;
};

S.nextNumber = function (n) {
  if (!S.isNumber(n)) {
    return;
  }

  return ++n;
};

S.prevNumber = function (n) {
  if (!S.isNumber(n)) {
    return;
  }

  return --n;
};

K.random = function (min, max) {
  if (min instanceof Array && min.length > 0) {
    return K.randomElement(min);
  }

  if (min === undefined) {
    min = 0;
  }

  if (max === undefined) {
    max = 1;
  }

  var len = max - min;
  var rand = Math.random();
  return rand * len + min;
};

K.randomElement = function (array) {
  var i = K.random(0, array.length - 1);
  return array[i];
};

K.randomInt = function (min, max) {
  if (!S.isNumber(min) || !S.isNumber(max)) {
    return "This function has been called with incorrect parameters";
  }

  if (min >= max) {
    return "This function has been called with incorrect parameters";
  }

  var arr = [];

  for (var i = min; i <= max; i++) {
    arr.push(i);
  }

  var res = K.randomElement(arr);
  return res;
};

K.primeNumbers = function () {
  var arr = [];

  for (var i = FIRST_PRIME_NUMBER; i < _constants_js__WEBPACK_IMPORTED_MODULE_0__["MAX"]; i++) {
    if (S.isPrimeNumber(i)) {
      arr.push(i);
    }
  }

  return arr;
};

K.fibonacciSequence = function (start) {
  if (start === undefined) {
    start = 0;
  }

  var arr = [start, start + 1];

  var func = function func(arr) {
    if (arr[arr.length - 1] >= _constants_js__WEBPACK_IMPORTED_MODULE_0__["MAX"]) {
      return arr;
    }

    var a = Number(arr[arr.length - 2]);
    var b = Number(arr[arr.length - 1]);
    arr.push(Number(a + b));
    return func(arr);
  };

  return func(arr);
};

S.isFibonacciNumber = function (n) {
  if (n === 0) {
    return true;
  }

  var fib = K.fibonacciSequence(0);
  var index = fib.indexOf(n);

  if (index >= 0) {
    return true;
  }
};

S.isEvenNumber = function (n) {
  if (S.isNumber(n) && n % 2 === 0) {
    return true;
  }
};

S.isOddNumber = function (n) {
  if (S.isNumber(n) && n % 2 !== 0) {
    return true;
  }
};

K.divisors = function (n) {
  var arr = [];

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
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

    if (counter >= _constants_js__WEBPACK_IMPORTED_MODULE_0__["MAX"]) {
      break;
    }

    atemp = btemp;
    btemp = ctemp;
  }

  return res;
};

K.commonDivisors = function (a, b) {
  if (a === undefined || b === undefined) {
    return "This function has been called with incorrect parameters";
  }

  var arr_a = K.divisors(a);

  if (a === b) {
    return arr_a;
  }

  var arr_b = K.divisors(b);
  var divs = [];

  for (var k = 0; k < arr_a.length; k++) {
    var elm_a = arr_a[k];

    for (var l = 0; l < arr_b.length; l++) {
      var elm_b = arr_b[l];

      if (elm_a === elm_b) {
        divs.push(elm_a);
      }
    }
  }

  return divs;
};

K.maxCommonDivisor = function (a, b) {
  var arr = K.commonDivisors(a, b);
  return arr[arr.length - 1];
};

K.multiple = function (n) {
  var arr = [];

  for (var i = 1; i < _constants_js__WEBPACK_IMPORTED_MODULE_0__["MAX"]; i++) {
    arr.push(n * i);
  }

  return arr;
};

K.leastCommonMultiple = function (a, b) {
  if (a === undefined || b === undefined) {
    return "This function has been called with incorrect parameters";
  }

  var big;

  if (a < b) {
    big = b;
  } else {
    big = a;
  }

  var arr_a = [];
  var arr_b = [];
  var i = 1;

  while (i <= big) {
    arr_a.push(a * i);
    i++;
  }

  var j = 1;

  while (j <= big) {
    arr_b.push(b * j);
    j++;
  }

  for (var k = 0; k < arr_a.length; k++) {
    var elm_a = arr_a[k];

    for (var l = 0; l < arr_b.length; l++) {
      var elm_b = arr_b[l];

      if (elm_a === elm_b) {
        return elm_a;
      }
    }
  }
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
  NAN: "Not a number"
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
      return "This function has been called with incorrect parameters";
    }

    arr.push(elm);
  }

  return arr;
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

/* harmony default export */ __webpack_exports__["default"] = (core);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _su_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./su.js */ "./su.js");


(function (global, s) {
  global.s = s;
})(global || self, _su_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./su.js":
/*!***************!*\
  !*** ./su.js ***!
  \***************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SK_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SK.js */ "./SK.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./constants.js");
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.js */ "./core.js");



var MAX = _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].MAX;
var MIN = _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].MIN;
var DBZ = _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].DBZ;
var NAN = _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].NAN;

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

  var int_arr = _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].numToArray(int_str);
  var decimal_arr = decimal_str ? _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].numToArray(decimal_str) : [0];
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

var getMessage = function getMessage(type) {
  if (type === "notsu") {
    return "Argument is not Su.";
  }

  return "";
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
    throw new Error(getMessage("notsu"));
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
    throw new Error(getMessage("notsu"));
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
    throw new Error(getMessage("notsu"));
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
    throw new Error(getMessage("notsu"));
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

  for (var i = 1; i < CONSTANTS.MAX.number; i++) {
    arr.push(this.multiplication(i));
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

Su.prototype.fibonacciSequence = function () {
  var zero = makeSu(0);
  var one = makeSu(1);
  var MAX = CONSTANTS.MAX;
  var arr = [zero, one];

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

Su.prototype.isFibonacciNumber = function () {
  var n = this;

  if (n.isZero()) {
    return true;
  }

  if (n.containDecimal()) {
    return false;
  }

  var fibs = this.fibonacciSequence(0);

  for (var i = 0; i < fibs.length; i++) {
    var f = fibs[i];

    if (f.isEqual(n)) {
      return true;
    }
  }

  return false;
};

Su.prototype.lucasSequence = function () {
  var MAX = CONSTANTS.MAX;
  var arr = [makeSu(2), makeSu(1)];

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

Su.prototype.isLucasNumber = function () {
  var n = this;

  if (n.containDecimal()) {
    return false;
  }

  var lucs = this.lucasSequence(0);

  for (var i = 0; i < lucs.length; i++) {
    var f = lucs[i];

    if (f.isEqual(n)) {
      return true;
    }
  }

  return false;
};

Su.prototype.lucasPrimeNumbers = function () {
  var ls = this.lucasSequence();
  var arr = [];

  for (var i = 0; i < ls.length; i++) {
    var l = ls[i];

    if (l.isPrimeNumber()) {
      arr.push(l);
    }
  }

  return arr;
};

Su.prototype.getSequence = function () {
  var array = [this];

  for (var i = 0; i < arguments.length; i++) {
    var elm = arguments[i];

    if (!isSu(elm)) {
      elm = makeSu(elm);
    }

    array.push(elm);
  }

  return array;
};

Su.prototype.summation = function () {
  var arr = this.getSequence.apply(this, arguments);
  var sum = makeSu(0);

  for (var i = 0; i < arr.length; i++) {
    sum = sum.add(arr[i]);
  }

  return sum;
};

Su.prototype.infiniteProduct = function () {
  var arr = this.getSequence.apply(this, arguments);
  var ip = arr[0];

  for (var i = 1; i < arr.length; i++) {
    ip = ip.multiplication(arr[i]);
  }

  return ip;
};

Su.prototype.digitsum = function () {
  var sum = makeSu(0);

  for (var i = 0; i < this.array.length; i++) {
    var a = makeSu(this.array[i]);
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

Su.prototype.isTriangleNumber = function () {
  var elm = makeSu(1);
  var res = this;
  var b = true;

  while (b) {
    res = res.subtract(elm);

    if (res.isZero()) {
      return true;
    }

    if (res.isSmall(makeSu(0))) {
      return false;
    }

    elm = elm.add(makeSu(1));
  }
};

Su.prototype.getTriangleNumbers = function () {
  return this.getPolygonalNumbers(makeSu(3));
};

Su.prototype.getSquareNumbers = function () {
  return this.getPolygonalNumbers(makeSu(4));
};

Su.prototype.getPolygonalNumbers = function (n) {
  if (!isSu(n)) {
    n = makeSu(n);
  }

  if (n.isSmall(makeSu(3))) {
    return [];
  }

  var current = makeSu(1);
  var arr = [];
  var range = current;
  var increment = n.subtract(makeSu(2));

  while (current.isSmall(CONSTANTS.MAX)) {
    arr.push(current);
    range = range.add(increment);
    current = current.add(range);
  }

  return arr;
};

Su.prototype.mersenneNumbers = function () {
  var two = makeSu(2);
  var arr = [];
  var current = makeSu(0);
  var ex = makeSu(1);

  while (current.isSmall(CONSTANTS.MAX)) {
    current = two.exponentiate(ex).subtract(makeSu(1));
    arr.push(current);
    ex = ex.add(makeSu(1));
  }

  return arr;
};

Su.prototype.mersennePrimeNumbers = function () {
  var marr = this.mersenneNumbers();
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

  var ms = this.mersenneNumbers();

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

  var ms = this.mersennePrimeNumbers();

  for (var i = 0; i < ms.length; i++) {
    var m = ms[i];

    if (m.isEqual(n)) {
      return true;
    }
  }

  return false;
};

Su.prototype.random = function (min, max) {
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

/* harmony default export */ __webpack_exports__["default"] = ({
  makeSu: makeSu,
  copySu: copySu,
  isSu: isSu,
  Kei: _SK_js__WEBPACK_IMPORTED_MODULE_0__["K"],
  Su: Su,
  getLarge: getLarge
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJTIiwiSyIsIkZJUlNUX1BSSU1FX05VTUJFUiIsImlzUHJpbWVOdW1iZXIiLCJuIiwiaXNOdW1iZXIiLCJNQVgiLCJtYXgiLCJpIiwibmV4dE51bWJlciIsInByZXZOdW1iZXIiLCJyYW5kb20iLCJtaW4iLCJBcnJheSIsImxlbmd0aCIsInJhbmRvbUVsZW1lbnQiLCJ1bmRlZmluZWQiLCJsZW4iLCJyYW5kIiwiTWF0aCIsImFycmF5IiwicmFuZG9tSW50IiwiYXJyIiwicHVzaCIsInJlcyIsInByaW1lTnVtYmVycyIsImZpYm9uYWNjaVNlcXVlbmNlIiwic3RhcnQiLCJmdW5jIiwiYSIsIk51bWJlciIsImIiLCJpc0ZpYm9uYWNjaU51bWJlciIsImZpYiIsImluZGV4IiwiaW5kZXhPZiIsImlzRXZlbk51bWJlciIsImlzT2RkTnVtYmVyIiwiZGl2aXNvcnMiLCJldWNsaWRlYW5BbGdvcml0aG0iLCJ0ZW1wIiwiYXRlbXAiLCJidGVtcCIsImN0ZW1wIiwiY291bnRlciIsImNvcHJpbWUiLCJjb21tb25EaXZpc29ycyIsImFycl9hIiwiYXJyX2IiLCJkaXZzIiwiayIsImVsbV9hIiwibCIsImVsbV9iIiwibWF4Q29tbW9uRGl2aXNvciIsIm11bHRpcGxlIiwibGVhc3RDb21tb25NdWx0aXBsZSIsImJpZyIsImoiLCJzdW1tYXRpb24iLCJhcmd1bWVudHMiLCJzdW0iLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwiaW50ZWdlciIsInJlbWFpbmRlciIsImZsb29yIiwicmVhbE51bWJlciIsImRpdmlzb3JzU3VtbWF0aW9uIiwiaXNBYnVuZGFudE51bWJlciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQSIsIm51bSIsInMiLCJTdHJpbmciLCJmaXJzdF9sZW4iLCJhZnRlcl9sZW4iLCJmaXJzdCIsImFmdGVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic3BsaXQiLCJzb3J0Iiwiam9pbiIsInJldmVyc2UiLCJpc0thcHJla2FyTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZiIsImhhcm1vbmljTWVhbiIsImlzSGFybW9uaWNEaXZpc29yTnVtYmVyIiwiaXNOYXR1cmFsTnVtYmVyIiwiY29sbGF0emhQcm9ibGVtIiwiY2FsYyIsImZlcm1hdFRlc3QiLCJpc1plcm8iLCJwb3ciLCJnZXRJbmNsdWRlc051bWJlcnMiLCJib29sIiwiYXIiLCJNSU4iLCJEQloiLCJOQU4iLCJjb3JlIiwiaXNOYU4iLCJOYU4iLCJudW1Ub0FycmF5Iiwic3RyIiwic2xpY2UiLCJpc051bUFycmF5IiwiZ2xvYmFsIiwic2VsZiIsImNvbnN0YW50cyIsIlN1Iiwib3B0aW9uIiwiRXJyb3IiLCJuZWdhdGl2ZSIsInBhcnRzIiwiaW50X3N0ciIsImRlY2ltYWxfc3RyIiwiaW50MCIsIm1hdGNoIiwibmV3X2ludF9zdHIiLCJzdGFydF96ZXJvIiwiZGVjMCIsImVuZF96ZXJvIiwibmV3X2RlY2ltYWxfc3RyIiwiaW50X2FyciIsImRlY2ltYWxfYXJyIiwiZGVjaW1hbCIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJtYWtlU3UiLCJlIiwibWVzc2FnZSIsImlzU3UiLCJzdSIsImNvcHlTdSIsImdldFN0cmluZyIsImdldE1lc3NhZ2UiLCJ0eXBlIiwiQ09OU1RBTlRTIiwiWkVSTyIsIk9ORSIsInByb3RvdHlwZSIsImFjIiwicmVkdWNlIiwiZ2V0TnVtYmVyIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpc0VxdWFsIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwibGFyZ2UiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNMYXJnZSIsImlzU21hbGwiLCJpc1Bvc2l0aXZlIiwiaXNOZWdhdGl2ZSIsInYiLCJhZGQiLCJtYWtlUG9zaXRpdmUiLCJzdWJ0cmFjdCIsImludF9hIiwiZGVjX2EiLCJpbnRfYiIsImRlY19iIiwibGVuX2kiLCJsZW5fZCIsIm92ZXIiLCJpbnRfcmVzIiwiZGVjX3JlcyIsIl9yZXMiLCJ1bnNoaWZ0IiwiZCIsInBvcCIsImdhcCIsIm5lZ2F0ZSIsImFfaWQiLCJiX2lkIiwiYV9pX2xlbiIsImJfaV9sZW4iLCJhX2RfbGVuIiwiYl9kX2xlbiIsImRfZ2FwIiwiYWJzIiwiZGVidCIsInJlc19hcnJheSIsImFfZWxtIiwiYl9lbG0iLCJzcGxpY2UiLCJtaW51cyIsIm51bWJlciIsIm5ldmF0aXZlIiwibWFrZU5lZ2F0aXZlIiwibXVsdGlwbGljYXRpb24iLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJ6ZXJvIiwib25lIiwiYyIsImZpYnMiLCJsdWNhc1NlcXVlbmNlIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJsdWNhc1ByaW1lTnVtYmVycyIsImxzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsImlzVHJpYW5nbGVOdW1iZXIiLCJnZXRUcmlhbmdsZU51bWJlcnMiLCJnZXRQb2x5Z29uYWxOdW1iZXJzIiwiZ2V0U3F1YXJlTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciIsInJhbiIsIktlaSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNs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QXFMLE9BQUcsR0FBR2pJLE1BQU0sQ0FBQyxPQUFPbkgsR0FBRyxDQUFDLENBQUQsQ0FBWCxDQUFOLENBQXNCMkwsY0FBdEIsQ0FBcUMxTSxHQUFyQyxDQUFOO0FBQ0Q7O0FBQ0QsU0FBT21RLEdBQVA7QUFDRCxDQTVCRDs7QUE4QmU7QUFDYmpJLFFBQU0sRUFBRUEsTUFESztBQUViSyxRQUFNLEVBQUVBLE1BRks7QUFHYkYsTUFBSSxFQUFFQSxJQUhPO0FBSWIrSCxLQUFHLEVBQUUxUSx3Q0FKUTtBQUtibUgsSUFBRSxFQUFFQSxFQUxTO0FBTWJ3QyxVQUFRLEVBQUVBO0FBTkcsQ0FBZixFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInN1YXBwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgTUFYLCBNSU4gfSBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcbmltcG9ydCB7IG1ha2VTdSB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IFMgPSB7fTtcbmNvbnN0IEsgPSB7fTtcblxuXG5jb25zdCBGSVJTVF9QUklNRV9OVU1CRVIgPSAyO1xuXG5TLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIVMuaXNOdW1iZXIobikpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuID09PSAwIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuID09PSAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmKG4gPj0gTUFYKXtcbiAgICByZXR1cm4gYEFyZ3VtZW50IGV4Y2VlZHMgbWF4aW11bSB2YWx1ZSgke01BWH0pYDtcbiAgfVxuXG4gIGNvbnN0IG1heCA9IG47XG4gIGZvciggbGV0IGkgPSBtYXggLTE7IGkgPiAxOyBpLS0pe1xuICAgIGlmKCAobWF4ICUgaSkgPT09IDAgKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TLm5leHROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIVMuaXNOdW1iZXIobikpe1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gKytuO1xufTtcblxuUy5wcmV2TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFTLmlzTnVtYmVyKG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIC0tbjtcbn07XG5cbksucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuXG4gIGlmKG1pbiBpbnN0YW5jZW9mIEFycmF5ICYmIG1pbi5sZW5ndGggPiAwKXtcbiAgICByZXR1cm4gSy5yYW5kb21FbGVtZW50KG1pbik7XG4gIH1cblxuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gMDtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gMTtcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IG1heCAtIG1pbjtcbiAgY29uc3QgcmFuZCA9IE1hdGgucmFuZG9tKCk7XG4gIHJldHVybiAoIHJhbmQgKiBsZW4gKSArIG1pbjtcbn07XG5cbksucmFuZG9tRWxlbWVudCA9IGZ1bmN0aW9uKGFycmF5KXtcbiAgY29uc3QgaSA9IEsucmFuZG9tKDAsIGFycmF5Lmxlbmd0aCAtIDEpO1xuICByZXR1cm4gYXJyYXlbaV07XG59O1xuXG5LLnJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYoICFTLmlzTnVtYmVyKG1pbikgfHwgIVMuaXNOdW1iZXIobWF4KSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKG1pbiA+PSBtYXgpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBtaW47IGkgPD0gbWF4OyBpKyspe1xuICAgIGFyci5wdXNoKGkpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gSy5yYW5kb21FbGVtZW50KGFycik7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbksucHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IEZJUlNUX1BSSU1FX05VTUJFUjsgaSA8IE1BWDsgaSsrKXtcbiAgICBpZihTLmlzUHJpbWVOdW1iZXIoaSkpe1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5LLmZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oc3RhcnQpe1xuICBpZihzdGFydCA9PT0gdW5kZWZpbmVkKXtcbiAgICBzdGFydCA9IDA7XG4gIH1cbiAgY29uc3QgYXJyID0gW3N0YXJ0LCBzdGFydCArIDFdO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdID49IE1BWCl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gTnVtYmVyKGFyclthcnIubGVuZ3RoIC0gMl0pO1xuICAgIGNvbnN0IGIgPSBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAxXSk7XG4gICAgYXJyLnB1c2goTnVtYmVyKGEgKyBiKSk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblMuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYobiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgZmliID0gSy5maWJvbmFjY2lTZXF1ZW5jZSgwKTtcbiAgY29uc3QgaW5kZXggPSBmaWIuaW5kZXhPZihuKTtcbiAgaWYoaW5kZXggPj0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCBTLmlzTnVtYmVyKG4pICYmIG4gJSAyID09PSAwICl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNPZGROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIFMuaXNOdW1iZXIobikgJiYgbiAlIDIgIT09IDAgKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuSy5kaXZpc29ycyA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8PSBuOyBpKyspe1xuICAgIGlmKG4gJSBpID09PSAwKXtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44Om44O844Kv44Oq44OD44OJ44Gu5LqS6Zmk5rOVXG5LLmV1Y2xpZGVhbkFsZ29yaXRobSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIVMuaXNOdW1iZXIoYSkgfHwgIVMuaXNOdW1iZXIoYikpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZiggYSA9PT0gYil7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgdGVtcDtcbiAgaWYoIGEgPCBiKXtcbiAgICB0ZW1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdGVtcDtcbiAgfVxuXG4gIGxldCBhdGVtcCA9IGE7XG4gIGxldCBidGVtcCA9IGI7XG4gIGxldCBjdGVtcDtcbiAgbGV0IHJlcztcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBjb3ByaW1lID0gXCJjb3ByaW1lXCI7XG4gIHdoaWxlKGN0ZW1wICE9PTApe1xuICAgIGN0ZW1wID0gYXRlbXAgJSBidGVtcDtcbiAgICBpZihjdGVtcCA9PT0gMCl7XG4gICAgICByZXMgPSBidGVtcDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjdGVtcCA9PT0gMSl7XG4gICAgICByZXMgPSBjb3ByaW1lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGNvdW50ZXIgPj0gTUFYKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBhdGVtcCA9IGJ0ZW1wO1xuICAgIGJ0ZW1wID0gY3RlbXA7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbksuY29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyX2EgPSBLLmRpdmlzb3JzKGEpO1xuICBpZihhID09PSBiKXtcbiAgICByZXR1cm4gYXJyX2E7XG4gIH1cbiAgY29uc3QgYXJyX2IgPSBLLmRpdmlzb3JzKGIpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGsgPSAwOyBrIDwgYXJyX2EubGVuZ3RoOyBrKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2Fba107XG4gICAgZm9yKGxldCBsID0gMDsgbCA8IGFycl9iLmxlbmd0aDsgbCsrKXtcbiAgICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbbF07XG4gICAgICBpZihlbG1fYSA9PT0gZWxtX2Ipe1xuICAgICAgICBkaXZzLnB1c2goZWxtX2EpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZzO1xufTtcblxuSy5tYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oYSwgYil7XG4gIGNvbnN0IGFyciA9IEsuY29tbW9uRGl2aXNvcnMoYSwgYik7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuSy5tdWx0aXBsZSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IE1BWDsgaSsrKXtcbiAgICBhcnIucHVzaChuICogaSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbksubGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZihhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBsZXQgYmlnO1xuICBpZiggYSA8IGIpe1xuICAgIGJpZyA9IGI7XG4gIH1lbHNle1xuICAgIGJpZyA9IGE7XG4gIH1cbiAgY29uc3QgYXJyX2EgPSBbXTtcbiAgY29uc3QgYXJyX2IgPSBbXTtcblxuICBsZXQgaSA9MTtcbiAgd2hpbGUoaSA8PSBiaWcpe1xuICAgIGFycl9hLnB1c2goIGEgKiBpKTtcbiAgICBpKys7XG4gIH1cbiAgbGV0IGogPTE7XG4gIHdoaWxlKGogPD0gYmlnKXtcbiAgICBhcnJfYi5wdXNoKCBiICogaik7XG4gICAgaisrO1xuICB9XG5cbiAgZm9yKGxldCBrID0gMDsgayA8IGFycl9hLmxlbmd0aDsgaysrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2tdO1xuICAgIGZvcihsZXQgbCA9IDA7IGwgPCBhcnJfYi5sZW5ndGg7IGwrKyl7XG4gICAgICBjb25zdCBlbG1fYiA9IGFycl9iW2xdO1xuICAgICAgaWYoZWxtX2EgPT09IGVsbV9iKXtcbiAgICAgICAgcmV0dXJuIGVsbV9hO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuSy5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gIH1cblxuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtqXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgc3VtICs9IGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cbksuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgZW1wdHkuXCI7XG4gIH1cbiAgbGV0IGlwID0gMTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBhcnJheVtpXTtcbiAgICBpZihTLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgaXAgPSBpcCAqIGVsbTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBhIE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5LLmRpdmlzaW9uID0gZnVuY3Rpb24oZGl2aWRlbmQsIGRpdmlzb3Ipe1xuICBpZihkaXZpZGVuZCA9PT0gdW5kZWZpbmVkIHx8IGRpdmlzb3IgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGRpdmlkZW5kIC8gZGl2aXNvcjtcbiAgcmV0dXJuIHtcbiAgICBpbnRlZ2VyOiB7XG4gICAgICByZW1haW5kZXI6IGRpdmlkZW5kICUgZGl2aXNvcixcbiAgICAgIHJlc3VsdDogTWF0aC5mbG9vcihyZXN1bHQpXG4gICAgfSxcbiAgICByZWFsTnVtYmVyOiByZXN1bHRcbiAgfTtcbn07XG5cbksuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgbGV0IGEgPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhICs9IGFycltpXTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cbksuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBzdW0gPSBLLmRpdmlzb3JzU3VtbWF0aW9uKG4pO1xuICBpZihzdW0gPiBuICogMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUEgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgbnVtID0gbiAqIG47XG4gIGNvbnN0IHMgPSBTdHJpbmcobnVtKTtcbiAgY29uc3QgbGVuID0gcy5sZW5ndGg7XG4gIGxldCBmaXJzdF9sZW4gPSAwO1xuICBsZXQgYWZ0ZXJfbGVuID0gMDtcbiAgbGV0IGZpcnN0LCBhZnRlcjtcbiAgaWYoUy5pc09kZE51bWJlcihsZW4pKXtcbiAgICBmaXJzdF9sZW4gPSAobGVuIC0gMSkgLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbiArIDE7XG4gIH1lbHNle1xuICAgIGZpcnN0X2xlbiA9IGxlbiAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuO1xuICB9XG4gIGZpcnN0ID0gTnVtYmVyKHMuc3Vic3RyKDAsIGZpcnN0X2xlbikpO1xuICBhZnRlciA9IE51bWJlcihzLnN1YnN0cihmaXJzdF9sZW4sIGFmdGVyX2xlbikpO1xuXG4gIGlmKCggZmlyc3QgKyBhZnRlciApID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQiA9IGZ1bmN0aW9uKG4pe1xuXG4gIGNvbnN0IGFyciA9IFN0cmluZyhuKS5zcGxpdChcIlwiKTtcblxuICBjb25zdCBtaW4gPSBOdW1iZXIoYXJyLnNvcnQoKS5qb2luKFwiXCIpKTtcbiAgY29uc3QgbWF4ID0gTnVtYmVyKGFyci5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG5cbiAgaWYoKG1heCAtIG1pbikgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQShuKSB8fCBLLmlzS2FwcmVrYXJOdW1iZXJUeXBlQihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblMuaXNJbnRlZ2VyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4pO1xuICBpZiggZiA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8g6Kq/5ZKM5bmz5Z2HXG5LLmhhcm1vbmljTWVhbiA9IGZ1bmN0aW9uKGFycil7XG4gIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIHN1bSArPSAxIC8gYXJyW2ldO1xuICB9XG4gIHJldHVybiBsZW4gLyBzdW07XG59O1xuXG4vLyDoqr/lkozmlbDjgYvjganjgYbjgYtcbksuaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gSy5kaXZpc29ycyhuKTtcbiAgY29uc3QgcmVzID0gSy5oYXJtb25pY01lYW4oYXJyKTtcbiAgaWYoUy5pc0ludGVnZXIocmVzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuUy5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYobiA+IDAgJiYgUy5pc0ludGVnZXIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbksuY29sbGF0emhQcm9ibGVtID0gZnVuY3Rpb24obnVtKXtcblxuICBjb25zdCBhcnIgPSBbXTtcblxuICBjb25zdCBjYWxjID0gZnVuY3Rpb24obil7XG4gICAgbGV0IHJlcyA9IG47XG4gICAgaWYoUy5pc09kZE51bWJlcihuKSl7XG4gICAgICByZXMgPSBuICogMyArIDE7XG4gICAgfWVsc2UgaWYoUy5pc0V2ZW5OdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAvIDI7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH07XG5cbiAgd2hpbGUobnVtID4gMSl7XG4gICAgbnVtID0gY2FsYyhudW0pO1xuICAgIGFyci5wdXNoKG51bSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODleOCp+ODq+ODnuODvOODhuOCueODiFxuLy8gSlPjga7mibHjgYjjgovnr4Tlm7LjgpLotoXjgYjjgabjgYTjgabjgYbjgb7jgY/li5XjgYvjgZpcbksuZmVybWF0VGVzdCA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFTLmlzSW50ZWdlcihuKSB8fCBTLmlzWmVybyhuKSB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzLiBcIiArIG4gKyBcIiBpcyBpbmNvcnJlY3QgcGFyYW1ldGVyLlwiO1xuICB9XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gMTAwO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMTsgaSA8PSBtYXg7IGkrKyl7XG4gICAgY29uc3QgYSA9IEsucmFuZG9tSW50KDIsIG4gLSAxKTtcbiAgICBpZihLLm1heENvbW1vbkRpdmlzb3IoYSwgbikgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IE1hdGgucG93KGEsIG4gLSAxKSAlIG47XG4gICAgaWYocmVzICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gXCJNYXliZSBQcmltZSBOdW1iZXJcIjtcbn07XG5cbi8vIOe1hOOBv+WQiOOCj+OBm+aVsOOBruioiOeul1xuLy8gSy5jb21iaW5hdGlvbnMgPSBmdW5jdGlvbihhcnIpe1xuLy8gfTtcblxuLy8gMyA9PiBbMCwgM10sIFsxLCAyXSwgWzIsIDFdLCBbMywgMF1cbksuZ2V0SW5jbHVkZXNOdW1iZXJzID0gZnVuY3Rpb24obnVtKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCB0ZW1wID0gbnVtO1xuICBsZXQgYm9vbCA9IHRydWU7XG4gIHdoaWxlKGJvb2wpe1xuICAgIGNvbnN0IGEgPSB0ZW1wO1xuICAgIGNvbnN0IGIgPSBudW0gLXRlbXA7XG4gICAgY29uc3QgYXIgPSBbYSxiXTtcbiAgICBhcnIucHVzaChhcik7XG4gICAgdGVtcCA9IHRlbXAgLTE7XG4gICAgaWYodGVtcCA8IDApe1xuICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBTOiBTLFxuICBLOiBLXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiXG59XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUuaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICAgIH1cbiAgICBhcnIucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5jb3JlLmlzTnVtQXJyYXkgPSBmdW5jdGlvbihhcnIpe1xuICBpZiggYXJyIGluc3RhbmNlb2YgQXJyYXkgKXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKCAhdGhpcy5pc051bWJlcihhcnJbaV0pICl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcmU7XG4iLCJpbXBvcnQgcyBmcm9tIFwiLi9zdS5qc1wiO1xuXG4oZnVuY3Rpb24oZ2xvYmFsLCBzKXtcbiAgZ2xvYmFsLnMgPSBzO1xufSkoZ2xvYmFsIHx8IHNlbGYsIHMpOyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IEssIFMgfSBmcm9tIFwiLi9TSy5qc1wiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBNQVggPSBjb25zdGFudHMuTUFYO1xuY29uc3QgTUlOID0gY29uc3RhbnRzLk1JTjtcbmNvbnN0IERCWiA9IGNvbnN0YW50cy5EQlo7XG5jb25zdCBOQU4gPSBjb25zdGFudHMuTkFOO1xuXG5jb25zdCBTdSA9IGZ1bmN0aW9uKG4sIG9wdGlvbil7XG4gIGlmKGlzTmFOKG4pKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuICBpZighbil7XG4gICAgbiA9IDA7XG4gIH1cbiAgaWYoIW9wdGlvbil7XG4gICAgb3B0aW9uID0ge307XG4gIH1cblxuICBsZXQgc3RyID0gU3RyaW5nKG4pO1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0gPT09IFwiLVwiKXtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCk7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIGlmKCFuZWdhdGl2ZSAmJiBvcHRpb24gJiYgb3B0aW9uLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihpc05hTihOdW1iZXIoc3RyKSkpe1xuICAgIHN0ciA9IFwiMFwiO1xuICB9XG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICBsZXQgaW50X3N0ciA9IHBhcnRzWzBdO1xuICBsZXQgZGVjaW1hbF9zdHIgPSBwYXJ0c1sxXTtcbiAgaWYoaW50X3N0cil7XG4gICAgY29uc3QgaW50MCA9IGludF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoaW50MCAmJiBpbnQwLmxlbmd0aCA9PT0gaW50X3N0ci5sZW5ndGgpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgbmV3X2ludF9zdHIgPSBcIlwiO1xuICAgIGxldCBzdGFydF96ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDxpbnRfc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKGludF9zdHJbaV0gIT09IFwiMFwiIHx8ICFzdGFydF96ZXJvKXtcbiAgICAgICAgc3RhcnRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfaW50X3N0ciArPSBpbnRfc3RyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2ludF9zdHIpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgaW50X3N0ciA9IG5ld19pbnRfc3RyO1xuICAgIH1cbiAgfVxuXG4gIGlmKGRlY2ltYWxfc3RyKXtcbiAgICBjb25zdCBkZWMwID0gZGVjaW1hbF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoZGVjMCAmJiBkZWMwLmxlbmd0aCA9PT0gZGVjaW1hbF9zdHIubGVuZ3RoKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBlbmRfemVybyA9IHRydWU7XG4gICAgbGV0IG5ld19kZWNpbWFsX3N0ciA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gZGVjaW1hbF9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgaWYoZGVjaW1hbF9zdHJbaV0gIT09IFwiMFwiIHx8ICFlbmRfemVybyl7XG4gICAgICAgIGVuZF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19kZWNpbWFsX3N0ciA9IGRlY2ltYWxfc3RyW2ldICsgbmV3X2RlY2ltYWxfc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2RlY2ltYWxfc3RyKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBkZWNpbWFsX3N0ciA9IG5ld19kZWNpbWFsX3N0cjtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBpbnRfYXJyID0gY29yZS5udW1Ub0FycmF5KGludF9zdHIpO1xuICBsZXQgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG5cbiAgdGhpcy5pbnRlZ2VyID0gaW50X2FycjtcbiAgdGhpcy5kZWNpbWFsID0gZGVjaW1hbF9hcnI7XG4gIHRoaXMubmVnYXRpdmUgPSBuZWdhdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgXG4gIGxldCBkZW5vbWluYXRvciA9IFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNpbWFsLmxlbmd0aDsgaSsrKXtcbiAgICBkZW5vbWluYXRvci5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5mcmFjdGlvbiA9IHtcbiAgICBudW1lcmF0b3I6IHRoaXMuaW50ZWdlci5jb25jYXQodGhpcy5kZWNpbWFsKSxcbiAgICBkZW5vbWluYXRvcjogZGVub21pbmF0b3JcbiAgfTtcblxufTtcblxuY29uc3QgbWFrZVN1ID0gZnVuY3Rpb24obnVtLCBvcHRpb24pe1xuICBsZXQgcmVzO1xuICB0cnl7XG4gICAgcmVzID0gbmV3IFN1KG51bSwgb3B0aW9uKTtcbiAgfWNhdGNoKGUpe1xuICAgIHJlcyA9IGUubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG5cbn07XG5cbmNvbnN0IGlzU3UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKHN1IGluc3RhbmNlb2YgU3Upe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb3B5U3UgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IHN0ciA9IHN1LmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBnZXRNZXNzYWdlID0gZnVuY3Rpb24odHlwZSl7XG4gIGlmKHR5cGUgPT09IFwibm90c3VcIil7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IFN1LlwiO1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuU3UucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdHIgPSBTdHJpbmcoIHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgY29uc3QgYWMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKChhLGUpID0+IGEgKyBlKTtcbiAgaWYoYWMgIT09IDApe1xuICAgIHN0ciArPSBcIi5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLm5lZ2F0aXZlID8gYC0ke3N0cn1gIDogc3RyO1xufTtcblxuU3UucHJvdG90eXBlLmdldE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmdldFN0cmluZygpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXREZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKFwiMC5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldExhcmdlID0gZnVuY3Rpb24oYSwgYiwgYWJzb2x1dGUgPSBmYWxzZSl7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGxldCBmaWVsZCA9IFtdO1xuXG4gIGNvbnN0IF9hID0gbWFrZVN1KGEuZ2V0U3RyaW5nKCkpO1xuICBjb25zdCBfYiA9IG1ha2VTdShiLmdldFN0cmluZygpKTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgX2EubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBfYi5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYoX2EuaXNaZXJvKCkgJiYgX2IuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmICFfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGI7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihfYS5pbnRlZ2VyLmxlbmd0aCA+IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLmludGVnZXIubGVuZ3RoIDwgX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBfYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBfYS5pbnRlZ2VyW2ldO1xuICAgIGxldCBlbG1fYiA9IF9iLmludGVnZXJbaV07XG4gICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIGNvbnN0IGxlbiA9IF9hLmRlY2ltYWwubGVuZ3RoID49IF9iLmRlY2ltYWwubGVuZ3RoID8gX2EuZGVjaW1hbC5sZW5ndGggOiBfYi5kZWNpbWFsLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGVsbV9hID0gX2EuZGVjaW1hbFtpXSA/IF9hLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgbGV0IGVsbV9iID0gX2IuZGVjaW1hbFtpXSA/IF9iLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZFswXTtcblxufTtcblxuXG5TdS5wcm90b3R5cGUuaXNFcXVhbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGEuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1NtYWxsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGIuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzUG9zaXRpdmUoKSAmJiB0aGlzLmlzSW50ZWdlcigpICYmIHRoaXMuaXNMYXJnZShDT05TVEFOVFMuWkVSTykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuY29udGFpbkRlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKGZ1bmN0aW9uKGEsIHYpe1xuICAgICAgcmV0dXJuIGEgKyB2O1xuICB9KTtcbiAgaWYocmVzID09PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG4gIGxldCBhID0gdGhpcy5jbG9uZSgpO1xuICBsZXQgYiA9IHN1LmNsb25lKCk7XG4gIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiO1xuICB9XG4gIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlO1xuICBpZihhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIGIubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGEuc3VidHJhY3QoYik7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIGEubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGIuc3VidHJhY3QoYSk7XG4gIH1cblxuICBsZXQgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJlcyA9IGE7XG4gIH1cbiAgbGV0IGludF9hID0gcmVzLmludGVnZXI7XG4gIGxldCBkZWNfYSA9IHJlcy5kZWNpbWFsO1xuICBsZXQgaW50X2IsIGRlY19iO1xuICBpZihyZXMgPT09IGEpe1xuICAgIGludF9iID0gYi5pbnRlZ2VyO1xuICAgIGRlY19iID0gYi5kZWNpbWFsO1xuICB9ZWxzZXtcbiAgICBpbnRfYiA9IGEuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGEuZGVjaW1hbDtcbiAgfVxuXG4gIGxldCBsZW5faSA9IGludF9hLmxlbmd0aDtcbiAgbGV0IGxlbl9kID0gZGVjX2EubGVuZ3RoO1xuXG4gIGlmKGRlY19iLmxlbmd0aCA+IGRlY19hLmxlbmd0aCl7XG4gICAgbGVuX2QgPSBkZWNfYi5sZW5ndGg7XG4gIH1cbiAgbGV0IG92ZXIgPSAwLFxuICAgICAgaW50X3JlcyA9IFtdLFxuICAgICAgZGVjX3JlcyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IGxlbl9kIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGRlY19hW2ldIHx8IDA7XG4gICAgbGV0IGVsbV9iID0gZGVjX2JbaV0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgZGVjX3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG5cbiAgZm9yKGxldCBpID0gZGVjX3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApe1xuICAgIGxldCBkID0gZGVjX3Jlc1tpXTtcbiAgICBpZihkID09PSAwKXtcbiAgICAgIGRlY19yZXMucG9wKCk7XG4gICAgfWVsc2V7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBnYXAgPSBsZW5faSAtIGludF9iLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gbGVuX2kgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gaW50X2FbaV07XG4gICAgbGV0IGVsbV9iID0gaW50X2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgaW50X3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBpbnRfcmVzLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoaW50X3Jlcy5qb2luKFwiXCIpICsgXCIuXCIgKyBkZWNfcmVzLmpvaW4oXCJcIiksIHtuZWdhdGl2ZTogbmVnYXRpdmV9KTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcblxuICBpZihhLmlzWmVybygpICYmIGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBOQU47XG4gIH1lbHNlIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1lbHNlIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBEQlo7XG4gIH1cblxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBjb3VudCA9IG1ha2VTdSgwKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoYS5pc0xhcmdlKHN1bSkgfHwgYS5pc0VxdWFsKHN1bSkpe1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdSgxKSk7XG4gICAgc3VtID0gYi5tdWx0aXBsaWNhdGlvbihjb3VudCk7XG4gIH1cblxuICBjb3VudCA9IGNvdW50LnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIHN1bSA9IHN1bS5zdWJ0cmFjdChiKTtcbiAgY29uc3QgcmVtYWluID0gYS5zdWJ0cmFjdChzdW0pO1xuICBjb25zdCByZXMgPSBjb3VudDtcbiAgcmVzLnJlbWFpbmRlciA9IHJlbWFpbjtcbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG4gIHJldHVybiByZXM7XG59O1xuXG5cblN1LnByb3RvdHlwZS5wbHVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLnRhc3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubWludXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5oaWt1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5rYWtlcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS53YXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5kaXZpc2lvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmFkZChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgXG4gIGlmKCByZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPZGROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBpZiggIXJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyB0aGlzLmlzTGFyZ2UobWFrZVN1KGkpKTsgaSsrKXtcbiAgICBsZXQgc3UgPSBtYWtlU3UoaSk7XG4gICAgY29uc3QgcmVtYWluZGVyID0gdGhpcy5kaXZpc2lvbihzdSkucmVtYWluZGVyO1xuICAgIGlmKHJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIGFyci5wdXNoKHRoaXMpO1xuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldENvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGxldCBhID0gdGhpcztcbiAgbGV0IGIgPSBzdTtcblxuICBjb25zdCBhcnJfYSA9IGEuZ2V0RGl2aXNvcnMoKTtcbiAgaWYoYS5pc0VxdWFsKGIpKXtcbiAgICByZXR1cm4gYXJyX2E7XG4gIH1cbiAgY29uc3QgYXJyX2IgPSBiLmdldERpdmlzb3JzKCk7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFycl9iLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBlbG1fYiA9IGFycl9iW2pdO1xuICAgICAgaWYoZWxtX2EuaXNFcXVhbChlbG1fYikpe1xuICAgICAgICBkaXZzLnB1c2goZWxtX2EpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZzO1xufTtcblxuU3UucHJvdG90eXBlLmdldE1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0Q29tbW9uRGl2aXNvcnMoc3UpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBbdGhpc107XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBDT05TVEFOVFMuTUFYLm51bWJlcjsgaSsrKXtcbiAgICBhcnIucHVzaCh0aGlzLm11bHRpcGxpY2F0aW9uKGkpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuXG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFt6ZXJvLCBvbmVdO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdLmlzTGFyZ2UoTUFYKSl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gYXJyW2Fyci5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBiID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjID0gYS5hZGQoYik7XG4gICAgYXJyLnB1c2goYyk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBmaWJzID0gdGhpcy5maWJvbmFjY2lTZXF1ZW5jZSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGZpYnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gZmlic1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5sdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFttYWtlU3UoMiksIG1ha2VTdSgxKV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IHRoaXMubHVjYXNTZXF1ZW5jZSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGx1Y3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gbHVjc1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5sdWNhc1ByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGxzID0gdGhpcy5sdWNhc1NlcXVlbmNlKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBscy5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbCA9IGxzW2ldO1xuICAgIGlmKGwuaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKGwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFt0aGlzXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbSA9IGFyZ3VtZW50c1tpXTtcbiAgICBpZighaXNTdShlbG0pKXtcbiAgICAgIGVsbSA9IG1ha2VTdShlbG0pO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcblxuU3UucHJvdG90eXBlLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0U2VxdWVuY2UoLi4uYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXRTZXF1ZW5jZSguLi5hcmd1bWVudHMpO1xuICBsZXQgaXAgPSBhcnJbMF07XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGlwID0gaXAubXVsdGlwbGljYXRpb24oYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5TdS5wcm90b3R5cGUuZGlnaXRzdW0gPSBmdW5jdGlvbigpe1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGEgPSBtYWtlU3UodGhpcy5hcnJheVtpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGxldCBlbG0gPSBtYWtlU3UoMSk7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgYiA9IHRydWU7XG4gIHdoaWxlKGIpe1xuICAgIHJlcyA9IHJlcy5zdWJ0cmFjdChlbG0pO1xuICAgIGlmKHJlcy5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYocmVzLmlzU21hbGwobWFrZVN1KDApKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsbSA9IGVsbS5hZGQobWFrZVN1KDEpKTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldFRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmdldFBvbHlnb25hbE51bWJlcnMobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRTcXVhcmVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZ2V0UG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCkpO1xufTtcblxuU3UucHJvdG90eXBlLmdldFBvbHlnb25hbE51bWJlcnMgPSBmdW5jdGlvbihuKXtcbiAgaWYoIWlzU3Uobikpe1xuICAgIG4gPSBtYWtlU3Uobik7XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gbi5zdWJ0cmFjdChtYWtlU3UoMikpO1xuICB3aGlsZShjdXJyZW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLm1lcnNlbm5lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGN1cnJlbnQgPSB0d28uZXhwb25lbnRpYXRlKGV4KS5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gZXguYWRkKG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5tZXJzZW5uZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG1hcnIgPSB0aGlzLm1lcnNlbm5lTnVtYmVycygpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gdGhpcy5tZXJzZW5uZU51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSB0aGlzLm1lcnNlbm5lUHJpbWVOdW1iZXJzKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSBtYWtlU3UoMCk7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IG1ha2VTdSgxKTtcbiAgfVxuICBpZighaXNTdShtaW4pKXtcbiAgICBtaW4gPSBtYWtlU3UobWluKTtcbiAgfVxuICBpZighaXNTdShtYXgpKXtcbiAgICBtYXggPSBtYWtlU3UobWF4KTtcbiAgfVxuXG4gIGNvbnN0IHN0ciA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IHJhbjtcblxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBpZihtaW4uaXNaZXJvKCkpe1xuICAgICAgcmFuID0gbWFrZVN1KDApO1xuICAgIH1lbHNle1xuICAgICAgcmFuID0gbWluO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgcmFuID0gbWFrZVN1KFwiMC5cIiArIGFyclsxXSkubXVsdGlwbGljYXRpb24obWF4KTtcbiAgfVxuICByZXR1cm4gcmFuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIEtlaTogSyxcbiAgU3U6IFN1LFxuICBnZXRMYXJnZTogZ2V0TGFyZ2Vcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==