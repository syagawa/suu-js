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
var NOTSU = _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].NOTSU;

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
    int_arr = _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].numToArray(int_str);
    decimal_arr = decimal_str ? _core_js__WEBPACK_IMPORTED_MODULE_2__["default"].numToArray(decimal_str) : [0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJTIiwiSyIsIkZJUlNUX1BSSU1FX05VTUJFUiIsImlzUHJpbWVOdW1iZXIiLCJuIiwiaXNOdW1iZXIiLCJNQVgiLCJtYXgiLCJpIiwibmV4dE51bWJlciIsInByZXZOdW1iZXIiLCJyYW5kb20iLCJtaW4iLCJBcnJheSIsImxlbmd0aCIsInJhbmRvbUVsZW1lbnQiLCJ1bmRlZmluZWQiLCJsZW4iLCJyYW5kIiwiTWF0aCIsImFycmF5IiwicmFuZG9tSW50IiwiYXJyIiwicHVzaCIsInJlcyIsInByaW1lTnVtYmVycyIsImZpYm9uYWNjaVNlcXVlbmNlIiwic3RhcnQiLCJmdW5jIiwiYSIsIk51bWJlciIsImIiLCJpc0ZpYm9uYWNjaU51bWJlciIsImZpYiIsImluZGV4IiwiaW5kZXhPZiIsImlzRXZlbk51bWJlciIsImlzT2RkTnVtYmVyIiwiZGl2aXNvcnMiLCJldWNsaWRlYW5BbGdvcml0aG0iLCJ0ZW1wIiwiYXRlbXAiLCJidGVtcCIsImN0ZW1wIiwiY291bnRlciIsImNvcHJpbWUiLCJjb21tb25EaXZpc29ycyIsImFycl9hIiwiYXJyX2IiLCJkaXZzIiwiayIsImVsbV9hIiwibCIsImVsbV9iIiwibWF4Q29tbW9uRGl2aXNvciIsIm11bHRpcGxlIiwibGVhc3RDb21tb25NdWx0aXBsZSIsImJpZyIsImoiLCJzdW1tYXRpb24iLCJhcmd1bWVudHMiLCJzdW0iLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwiaW50ZWdlciIsInJlbWFpbmRlciIsImZsb29yIiwicmVhbE51bWJlciIsImRpdmlzb3JzU3VtbWF0aW9uIiwiaXNBYnVuZGFudE51bWJlciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQSIsIm51bSIsInMiLCJTdHJpbmciLCJmaXJzdF9sZW4iLCJhZnRlcl9sZW4iLCJmaXJzdCIsImFmdGVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic3BsaXQiLCJzb3J0Iiwiam9pbiIsInJldmVyc2UiLCJpc0thcHJla2FyTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZiIsImhhcm1vbmljTWVhbiIsImlzSGFybW9uaWNEaXZpc29yTnVtYmVyIiwiaXNOYXR1cmFsTnVtYmVyIiwiY29sbGF0emhQcm9ibGVtIiwiY2FsYyIsImZlcm1hdFRlc3QiLCJpc1plcm8iLCJwb3ciLCJnZXRJbmNsdWRlc051bWJlcnMiLCJib29sIiwiYXIiLCJNSU4iLCJEQloiLCJOQU4iLCJOT1RTVSIsImNvcmUiLCJpc05hTiIsIk5hTiIsIm51bVRvQXJyYXkiLCJzdHIiLCJzbGljZSIsIkVycm9yIiwiaXNOdW1BcnJheSIsImdsb2JhbCIsInNlbGYiLCJjb25zdGFudHMiLCJTdSIsIm9wdGlvbiIsIm5lZ2F0aXZlIiwicGFydHMiLCJpbnRfc3RyIiwiZGVjaW1hbF9zdHIiLCJpbnQwIiwibWF0Y2giLCJuZXdfaW50X3N0ciIsInN0YXJ0X3plcm8iLCJkZWMwIiwiZW5kX3plcm8iLCJuZXdfZGVjaW1hbF9zdHIiLCJpbnRfYXJyIiwiZGVjaW1hbF9hcnIiLCJlIiwiZGVjaW1hbCIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJtYWtlU3UiLCJtZXNzYWdlIiwiaXNTdSIsInN1IiwiY29weVN1IiwiZ2V0U3RyaW5nIiwiQ09OU1RBTlRTIiwiWkVSTyIsIk9ORSIsInByb3RvdHlwZSIsImFjIiwicmVkdWNlIiwiZ2V0TnVtYmVyIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpc0VxdWFsIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwibGFyZ2UiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNMYXJnZSIsImlzU21hbGwiLCJpc1Bvc2l0aXZlIiwiaXNOZWdhdGl2ZSIsInYiLCJhZGQiLCJtYWtlUG9zaXRpdmUiLCJzdWJ0cmFjdCIsImludF9hIiwiZGVjX2EiLCJpbnRfYiIsImRlY19iIiwibGVuX2kiLCJsZW5fZCIsIm92ZXIiLCJpbnRfcmVzIiwiZGVjX3JlcyIsIl9yZXMiLCJ1bnNoaWZ0IiwiZCIsInBvcCIsImdhcCIsIm5lZ2F0ZSIsImFfaWQiLCJiX2lkIiwiYV9pX2xlbiIsImJfaV9sZW4iLCJhX2RfbGVuIiwiYl9kX2xlbiIsImRfZ2FwIiwiYWJzIiwiZGVidCIsInJlc19hcnJheSIsImFfZWxtIiwiYl9lbG0iLCJzcGxpY2UiLCJtaW51cyIsIm51bWJlciIsIm5ldmF0aXZlIiwibWFrZU5lZ2F0aXZlIiwibXVsdGlwbGljYXRpb24iLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJ6ZXJvIiwib25lIiwiYyIsImZpYnMiLCJsdWNhc1NlcXVlbmNlIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJsdWNhc1ByaW1lTnVtYmVycyIsImxzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsImlzVHJpYW5nbGVOdW1iZXIiLCJnZXRUcmlhbmdsZU51bWJlcnMiLCJnZXRQb2x5Z29uYWxOdW1iZXJzIiwiZ2V0U3F1YXJlTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciIsInJhbiIsIktlaSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxDQUFDLEdBQUcsRUFBVjtBQUNBLElBQU1DLENBQUMsR0FBRyxFQUFWO0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsQ0FBM0I7O0FBRUFGLENBQUMsQ0FBQ0csYUFBRixHQUFrQixVQUFTQyxDQUFULEVBQVc7QUFDM0IsTUFBRyxDQUFDSixDQUFDLENBQUNLLFFBQUYsQ0FBV0QsQ0FBWCxDQUFKLEVBQWtCO0FBQ2hCLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUdBLENBQUMsS0FBSyxDQUFOLElBQVdBLENBQUMsS0FBSyxDQUFwQixFQUFzQjtBQUNwQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFHQSxDQUFDLEtBQUssQ0FBVCxFQUFXO0FBQ1QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBR0EsQ0FBQyxJQUFJRSxpREFBUixFQUFZO0FBQ1Ysb0RBQXlDQSxpREFBekM7QUFDRDs7QUFFRCxNQUFNQyxHQUFHLEdBQUdILENBQVo7O0FBQ0EsT0FBSyxJQUFJSSxDQUFDLEdBQUdELEdBQUcsR0FBRSxDQUFsQixFQUFxQkMsQ0FBQyxHQUFHLENBQXpCLEVBQTRCQSxDQUFDLEVBQTdCLEVBQWdDO0FBQzlCLFFBQUtELEdBQUcsR0FBR0MsQ0FBUCxLQUFjLENBQWxCLEVBQXFCO0FBQ25CLGFBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0F0QkQ7O0FBd0JBUixDQUFDLENBQUNTLFVBQUYsR0FBZSxVQUFTTCxDQUFULEVBQVc7QUFDeEIsTUFBRyxDQUFDSixDQUFDLENBQUNLLFFBQUYsQ0FBV0QsQ0FBWCxDQUFKLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBQ0QsU0FBTyxFQUFFQSxDQUFUO0FBQ0QsQ0FMRDs7QUFPQUosQ0FBQyxDQUFDVSxVQUFGLEdBQWUsVUFBU04sQ0FBVCxFQUFXO0FBQ3hCLE1BQUcsQ0FBQ0osQ0FBQyxDQUFDSyxRQUFGLENBQVdELENBQVgsQ0FBSixFQUFrQjtBQUNoQjtBQUNEOztBQUNELFNBQU8sRUFBRUEsQ0FBVDtBQUNELENBTEQ7O0FBT0FILENBQUMsQ0FBQ1UsTUFBRixHQUFXLFVBQVNDLEdBQVQsRUFBY0wsR0FBZCxFQUFrQjtBQUUzQixNQUFHSyxHQUFHLFlBQVlDLEtBQWYsSUFBd0JELEdBQUcsQ0FBQ0UsTUFBSixHQUFhLENBQXhDLEVBQTBDO0FBQ3hDLFdBQU9iLENBQUMsQ0FBQ2MsYUFBRixDQUFnQkgsR0FBaEIsQ0FBUDtBQUNEOztBQUVELE1BQUdBLEdBQUcsS0FBS0ksU0FBWCxFQUFxQjtBQUNuQkosT0FBRyxHQUFHLENBQU47QUFDRDs7QUFDRCxNQUFHTCxHQUFHLEtBQUtTLFNBQVgsRUFBcUI7QUFDbkJULE9BQUcsR0FBRyxDQUFOO0FBQ0Q7O0FBRUQsTUFBTVUsR0FBRyxHQUFHVixHQUFHLEdBQUdLLEdBQWxCO0FBQ0EsTUFBTU0sSUFBSSxHQUFHQyxJQUFJLENBQUNSLE1BQUwsRUFBYjtBQUNBLFNBQVNPLElBQUksR0FBR0QsR0FBVCxHQUFpQkwsR0FBeEI7QUFDRCxDQWhCRDs7QUFrQkFYLENBQUMsQ0FBQ2MsYUFBRixHQUFrQixVQUFTSyxLQUFULEVBQWU7QUFDL0IsTUFBTVosQ0FBQyxHQUFHUCxDQUFDLENBQUNVLE1BQUYsQ0FBUyxDQUFULEVBQVlTLEtBQUssQ0FBQ04sTUFBTixHQUFlLENBQTNCLENBQVY7QUFDQSxTQUFPTSxLQUFLLENBQUNaLENBQUQsQ0FBWjtBQUNELENBSEQ7O0FBS0FQLENBQUMsQ0FBQ29CLFNBQUYsR0FBYyxVQUFTVCxHQUFULEVBQWNMLEdBQWQsRUFBa0I7QUFDOUIsTUFBSSxDQUFDUCxDQUFDLENBQUNLLFFBQUYsQ0FBV08sR0FBWCxDQUFELElBQW9CLENBQUNaLENBQUMsQ0FBQ0ssUUFBRixDQUFXRSxHQUFYLENBQXpCLEVBQXlDO0FBQ3ZDLFdBQU8seURBQVA7QUFDRDs7QUFDRCxNQUFHSyxHQUFHLElBQUlMLEdBQVYsRUFBYztBQUNaLFdBQU8seURBQVA7QUFDRDs7QUFFRCxNQUFNZSxHQUFHLEdBQUcsRUFBWjs7QUFDQSxPQUFJLElBQUlkLENBQUMsR0FBR0ksR0FBWixFQUFpQkosQ0FBQyxJQUFJRCxHQUF0QixFQUEyQkMsQ0FBQyxFQUE1QixFQUErQjtBQUM3QmMsT0FBRyxDQUFDQyxJQUFKLENBQVNmLENBQVQ7QUFDRDs7QUFFRCxNQUFNZ0IsR0FBRyxHQUFHdkIsQ0FBQyxDQUFDYyxhQUFGLENBQWdCTyxHQUFoQixDQUFaO0FBRUEsU0FBT0UsR0FBUDtBQUNELENBaEJEOztBQWtCQXZCLENBQUMsQ0FBQ3dCLFlBQUYsR0FBaUIsWUFBVTtBQUN6QixNQUFNSCxHQUFHLEdBQUcsRUFBWjs7QUFDQSxPQUFJLElBQUlkLENBQUMsR0FBR04sa0JBQVosRUFBZ0NNLENBQUMsR0FBR0YsaURBQXBDLEVBQXlDRSxDQUFDLEVBQTFDLEVBQTZDO0FBQzNDLFFBQUdSLENBQUMsQ0FBQ0csYUFBRixDQUFnQkssQ0FBaEIsQ0FBSCxFQUFzQjtBQUNwQmMsU0FBRyxDQUFDQyxJQUFKLENBQVNmLENBQVQ7QUFDRDtBQUNGOztBQUNELFNBQU9jLEdBQVA7QUFDRCxDQVJEOztBQVVBckIsQ0FBQyxDQUFDeUIsaUJBQUYsR0FBc0IsVUFBU0MsS0FBVCxFQUFlO0FBQ25DLE1BQUdBLEtBQUssS0FBS1gsU0FBYixFQUF1QjtBQUNyQlcsU0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDRCxNQUFNTCxHQUFHLEdBQUcsQ0FBQ0ssS0FBRCxFQUFRQSxLQUFLLEdBQUcsQ0FBaEIsQ0FBWjs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFTTixHQUFULEVBQWE7QUFDeEIsUUFBR0EsR0FBRyxDQUFDQSxHQUFHLENBQUNSLE1BQUosR0FBYSxDQUFkLENBQUgsSUFBdUJSLGlEQUExQixFQUE4QjtBQUM1QixhQUFPZ0IsR0FBUDtBQUNEOztBQUNELFFBQU1PLENBQUMsR0FBR0MsTUFBTSxDQUFDUixHQUFHLENBQUNBLEdBQUcsQ0FBQ1IsTUFBSixHQUFhLENBQWQsQ0FBSixDQUFoQjtBQUNBLFFBQU1pQixDQUFDLEdBQUdELE1BQU0sQ0FBQ1IsR0FBRyxDQUFDQSxHQUFHLENBQUNSLE1BQUosR0FBYSxDQUFkLENBQUosQ0FBaEI7QUFDQVEsT0FBRyxDQUFDQyxJQUFKLENBQVNPLE1BQU0sQ0FBQ0QsQ0FBQyxHQUFHRSxDQUFMLENBQWY7QUFDQSxXQUFPSCxJQUFJLENBQUNOLEdBQUQsQ0FBWDtBQUNELEdBUkQ7O0FBU0EsU0FBT00sSUFBSSxDQUFDTixHQUFELENBQVg7QUFDRCxDQWZEOztBQWlCQXRCLENBQUMsQ0FBQ2dDLGlCQUFGLEdBQXNCLFVBQVM1QixDQUFULEVBQVc7QUFDL0IsTUFBR0EsQ0FBQyxLQUFLLENBQVQsRUFBVztBQUNULFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU02QixHQUFHLEdBQUdoQyxDQUFDLENBQUN5QixpQkFBRixDQUFvQixDQUFwQixDQUFaO0FBQ0EsTUFBTVEsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWS9CLENBQVosQ0FBZDs7QUFDQSxNQUFHOEIsS0FBSyxJQUFJLENBQVosRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FURDs7QUFXQWxDLENBQUMsQ0FBQ29DLFlBQUYsR0FBaUIsVUFBU2hDLENBQVQsRUFBVztBQUMxQixNQUFJSixDQUFDLENBQUNLLFFBQUYsQ0FBV0QsQ0FBWCxLQUFpQkEsQ0FBQyxHQUFHLENBQUosS0FBVSxDQUEvQixFQUFrQztBQUNoQyxXQUFPLElBQVA7QUFDRDtBQUNGLENBSkQ7O0FBTUFKLENBQUMsQ0FBQ3FDLFdBQUYsR0FBZ0IsVUFBU2pDLENBQVQsRUFBVztBQUN6QixNQUFJSixDQUFDLENBQUNLLFFBQUYsQ0FBV0QsQ0FBWCxLQUFpQkEsQ0FBQyxHQUFHLENBQUosS0FBVSxDQUEvQixFQUFrQztBQUNoQyxXQUFPLElBQVA7QUFDRDtBQUNGLENBSkQ7O0FBTUFILENBQUMsQ0FBQ3FDLFFBQUYsR0FBYSxVQUFTbEMsQ0FBVCxFQUFXO0FBQ3RCLE1BQU1rQixHQUFHLEdBQUcsRUFBWjs7QUFDQSxPQUFJLElBQUlkLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsSUFBSUosQ0FBcEIsRUFBdUJJLENBQUMsRUFBeEIsRUFBMkI7QUFDekIsUUFBR0osQ0FBQyxHQUFHSSxDQUFKLEtBQVUsQ0FBYixFQUFlO0FBQ2JjLFNBQUcsQ0FBQ0MsSUFBSixDQUFTZixDQUFUO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPYyxHQUFQO0FBQ0QsQ0FSRCxDLENBVUE7OztBQUNBckIsQ0FBQyxDQUFDc0Msa0JBQUYsR0FBdUIsVUFBU1YsQ0FBVCxFQUFZRSxDQUFaLEVBQWM7QUFDbkMsTUFBSSxDQUFDL0IsQ0FBQyxDQUFDSyxRQUFGLENBQVd3QixDQUFYLENBQUQsSUFBa0IsQ0FBQzdCLENBQUMsQ0FBQ0ssUUFBRixDQUFXMEIsQ0FBWCxDQUF2QixFQUFxQztBQUNuQyxXQUFPLHlEQUFQO0FBQ0Q7O0FBQ0QsTUFBSUYsQ0FBQyxLQUFLRSxDQUFWLEVBQVk7QUFDVixXQUFPRixDQUFQO0FBQ0Q7O0FBRUQsTUFBSVcsSUFBSjs7QUFDQSxNQUFJWCxDQUFDLEdBQUdFLENBQVIsRUFBVTtBQUNSUyxRQUFJLEdBQUdYLENBQVA7QUFDQUEsS0FBQyxHQUFHRSxDQUFKO0FBQ0FBLEtBQUMsR0FBR1MsSUFBSjtBQUNEOztBQUVELE1BQUlDLEtBQUssR0FBR1osQ0FBWjtBQUNBLE1BQUlhLEtBQUssR0FBR1gsQ0FBWjtBQUNBLE1BQUlZLEtBQUo7QUFDQSxNQUFJbkIsR0FBSjtBQUNBLE1BQUlvQixPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQjs7QUFDQSxTQUFNRixLQUFLLEtBQUksQ0FBZixFQUFpQjtBQUNmQSxTQUFLLEdBQUdGLEtBQUssR0FBR0MsS0FBaEI7O0FBQ0EsUUFBR0MsS0FBSyxLQUFLLENBQWIsRUFBZTtBQUNibkIsU0FBRyxHQUFHa0IsS0FBTjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBR0MsS0FBSyxLQUFLLENBQWIsRUFBZTtBQUNibkIsU0FBRyxHQUFHcUIsT0FBTjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBR0QsT0FBTyxJQUFJdEMsaURBQWQsRUFBa0I7QUFDaEI7QUFDRDs7QUFDRG1DLFNBQUssR0FBR0MsS0FBUjtBQUNBQSxTQUFLLEdBQUdDLEtBQVI7QUFDRDs7QUFDRCxTQUFPbkIsR0FBUDtBQUNELENBdENEOztBQXdDQXZCLENBQUMsQ0FBQzZDLGNBQUYsR0FBbUIsVUFBU2pCLENBQVQsRUFBWUUsQ0FBWixFQUFjO0FBQy9CLE1BQUdGLENBQUMsS0FBS2IsU0FBTixJQUFtQmUsQ0FBQyxLQUFLZixTQUE1QixFQUFzQztBQUNwQyxXQUFPLHlEQUFQO0FBQ0Q7O0FBRUQsTUFBTStCLEtBQUssR0FBRzlDLENBQUMsQ0FBQ3FDLFFBQUYsQ0FBV1QsQ0FBWCxDQUFkOztBQUNBLE1BQUdBLENBQUMsS0FBS0UsQ0FBVCxFQUFXO0FBQ1QsV0FBT2dCLEtBQVA7QUFDRDs7QUFDRCxNQUFNQyxLQUFLLEdBQUcvQyxDQUFDLENBQUNxQyxRQUFGLENBQVdQLENBQVgsQ0FBZDtBQUVBLE1BQU1rQixJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0gsS0FBSyxDQUFDakMsTUFBekIsRUFBaUNvQyxDQUFDLEVBQWxDLEVBQXFDO0FBQ25DLFFBQU1DLEtBQUssR0FBR0osS0FBSyxDQUFDRyxDQUFELENBQW5COztBQUNBLFNBQUksSUFBSUUsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHSixLQUFLLENBQUNsQyxNQUF6QixFQUFpQ3NDLENBQUMsRUFBbEMsRUFBcUM7QUFDbkMsVUFBTUMsS0FBSyxHQUFHTCxLQUFLLENBQUNJLENBQUQsQ0FBbkI7O0FBQ0EsVUFBR0QsS0FBSyxLQUFLRSxLQUFiLEVBQW1CO0FBQ2pCSixZQUFJLENBQUMxQixJQUFMLENBQVU0QixLQUFWO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU9GLElBQVA7QUFDRCxDQXhCRDs7QUEwQkFoRCxDQUFDLENBQUNxRCxnQkFBRixHQUFxQixVQUFTekIsQ0FBVCxFQUFZRSxDQUFaLEVBQWM7QUFDakMsTUFBTVQsR0FBRyxHQUFHckIsQ0FBQyxDQUFDNkMsY0FBRixDQUFpQmpCLENBQWpCLEVBQW9CRSxDQUFwQixDQUFaO0FBQ0EsU0FBT1QsR0FBRyxDQUFDQSxHQUFHLENBQUNSLE1BQUosR0FBYSxDQUFkLENBQVY7QUFDRCxDQUhEOztBQUtBYixDQUFDLENBQUNzRCxRQUFGLEdBQWEsVUFBU25ELENBQVQsRUFBVztBQUN0QixNQUFNa0IsR0FBRyxHQUFHLEVBQVo7O0FBQ0EsT0FBSSxJQUFJZCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdGLGlEQUFuQixFQUF3QkUsQ0FBQyxFQUF6QixFQUE0QjtBQUMxQmMsT0FBRyxDQUFDQyxJQUFKLENBQVNuQixDQUFDLEdBQUdJLENBQWI7QUFDRDs7QUFDRCxTQUFPYyxHQUFQO0FBQ0QsQ0FORDs7QUFRQXJCLENBQUMsQ0FBQ3VELG1CQUFGLEdBQXdCLFVBQVMzQixDQUFULEVBQVlFLENBQVosRUFBYztBQUNwQyxNQUFHRixDQUFDLEtBQUtiLFNBQU4sSUFBbUJlLENBQUMsS0FBS2YsU0FBNUIsRUFBc0M7QUFDcEMsV0FBTyx5REFBUDtBQUNEOztBQUVELE1BQUl5QyxHQUFKOztBQUNBLE1BQUk1QixDQUFDLEdBQUdFLENBQVIsRUFBVTtBQUNSMEIsT0FBRyxHQUFHMUIsQ0FBTjtBQUNELEdBRkQsTUFFSztBQUNIMEIsT0FBRyxHQUFHNUIsQ0FBTjtBQUNEOztBQUNELE1BQU1rQixLQUFLLEdBQUcsRUFBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxFQUFkO0FBRUEsTUFBSXhDLENBQUMsR0FBRSxDQUFQOztBQUNBLFNBQU1BLENBQUMsSUFBSWlELEdBQVgsRUFBZTtBQUNiVixTQUFLLENBQUN4QixJQUFOLENBQVlNLENBQUMsR0FBR3JCLENBQWhCO0FBQ0FBLEtBQUM7QUFDRjs7QUFDRCxNQUFJa0QsQ0FBQyxHQUFFLENBQVA7O0FBQ0EsU0FBTUEsQ0FBQyxJQUFJRCxHQUFYLEVBQWU7QUFDYlQsU0FBSyxDQUFDekIsSUFBTixDQUFZUSxDQUFDLEdBQUcyQixDQUFoQjtBQUNBQSxLQUFDO0FBQ0Y7O0FBRUQsT0FBSSxJQUFJUixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdILEtBQUssQ0FBQ2pDLE1BQXpCLEVBQWlDb0MsQ0FBQyxFQUFsQyxFQUFxQztBQUNuQyxRQUFNQyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0csQ0FBRCxDQUFuQjs7QUFDQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0osS0FBSyxDQUFDbEMsTUFBekIsRUFBaUNzQyxDQUFDLEVBQWxDLEVBQXFDO0FBQ25DLFVBQU1DLEtBQUssR0FBR0wsS0FBSyxDQUFDSSxDQUFELENBQW5COztBQUNBLFVBQUdELEtBQUssS0FBS0UsS0FBYixFQUFtQjtBQUNqQixlQUFPRixLQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsQ0FsQ0Q7O0FBb0NBbEQsQ0FBQyxDQUFDMEQsU0FBRixHQUFjLFlBQVU7QUFDdEIsTUFBTXZDLEtBQUssR0FBRyxFQUFkOztBQUNBLE9BQUksSUFBSVosQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHb0QsU0FBUyxDQUFDOUMsTUFBN0IsRUFBcUNOLENBQUMsRUFBdEMsRUFBeUM7QUFDdkNZLFNBQUssQ0FBQ0csSUFBTixDQUFXcUMsU0FBUyxDQUFDcEQsQ0FBRCxDQUFwQjtBQUNEOztBQUNELE1BQUdZLEtBQUssQ0FBQ04sTUFBTixLQUFpQixDQUFwQixFQUFzQjtBQUNwQixXQUFPLHdCQUFQO0FBQ0Q7O0FBRUQsTUFBSStDLEdBQUcsR0FBRyxDQUFWOztBQUNBLE9BQUksSUFBSUgsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHdEMsS0FBSyxDQUFDTixNQUF6QixFQUFpQzRDLENBQUMsRUFBbEMsRUFBcUM7QUFDbkMsUUFBTUksR0FBRyxHQUFHMUMsS0FBSyxDQUFDc0MsQ0FBRCxDQUFqQjs7QUFDQSxRQUFHMUQsQ0FBQyxDQUFDSyxRQUFGLENBQVd5RCxHQUFYLENBQUgsRUFBbUI7QUFDakJELFNBQUcsSUFBSUMsR0FBUDtBQUNELEtBRkQsTUFFSztBQUNILGFBQU8sd0JBQVA7QUFDRDtBQUNGOztBQUNELFNBQU9ELEdBQVA7QUFDRCxDQW5CRDs7QUFxQkE1RCxDQUFDLENBQUM4RCxlQUFGLEdBQW9CLFlBQVU7QUFDNUIsTUFBTTNDLEtBQUssR0FBRyxFQUFkOztBQUNBLE9BQUksSUFBSVosQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHb0QsU0FBUyxDQUFDOUMsTUFBN0IsRUFBcUNOLENBQUMsRUFBdEMsRUFBeUM7QUFDdkNZLFNBQUssQ0FBQ0csSUFBTixDQUFXcUMsU0FBUyxDQUFDcEQsQ0FBRCxDQUFwQjtBQUNEOztBQUNELE1BQUdZLEtBQUssQ0FBQ04sTUFBTixLQUFpQixDQUFwQixFQUFzQjtBQUNwQixXQUFPLG9CQUFQO0FBQ0Q7O0FBQ0QsTUFBSWtELEVBQUUsR0FBRyxDQUFUOztBQUNBLE9BQUksSUFBSXhELEVBQUMsR0FBRyxDQUFaLEVBQWVBLEVBQUMsR0FBR1ksS0FBSyxDQUFDTixNQUF6QixFQUFpQ04sRUFBQyxFQUFsQyxFQUFxQztBQUNuQyxRQUFNc0QsR0FBRyxHQUFHMUMsS0FBSyxDQUFDWixFQUFELENBQWpCOztBQUNBLFFBQUdSLENBQUMsQ0FBQ0ssUUFBRixDQUFXeUQsR0FBWCxDQUFILEVBQW1CO0FBQ2pCRSxRQUFFLEdBQUdBLEVBQUUsR0FBR0YsR0FBVjtBQUNELEtBRkQsTUFFSztBQUNILGFBQU8sMEJBQVA7QUFDRDtBQUNGOztBQUNELFNBQU9FLEVBQVA7QUFDRCxDQWxCRDs7QUFvQkEvRCxDQUFDLENBQUNnRSxRQUFGLEdBQWEsVUFBU0MsUUFBVCxFQUFtQkMsT0FBbkIsRUFBMkI7QUFDdEMsTUFBR0QsUUFBUSxLQUFLbEQsU0FBYixJQUEwQm1ELE9BQU8sS0FBS25ELFNBQXpDLEVBQW1EO0FBQ2pELFdBQU8seURBQVA7QUFDRDs7QUFDRCxNQUFNb0QsTUFBTSxHQUFHRixRQUFRLEdBQUdDLE9BQTFCO0FBQ0EsU0FBTztBQUNMRSxXQUFPLEVBQUU7QUFDUEMsZUFBUyxFQUFFSixRQUFRLEdBQUdDLE9BRGY7QUFFUEMsWUFBTSxFQUFFakQsSUFBSSxDQUFDb0QsS0FBTCxDQUFXSCxNQUFYO0FBRkQsS0FESjtBQUtMSSxjQUFVLEVBQUVKO0FBTFAsR0FBUDtBQU9ELENBWkQ7O0FBY0FuRSxDQUFDLENBQUN3RSxpQkFBRixHQUFzQixVQUFTckUsQ0FBVCxFQUFXO0FBQy9CLE1BQU1rQixHQUFHLEdBQUdyQixDQUFDLENBQUNxQyxRQUFGLENBQVdsQyxDQUFYLENBQVo7QUFDQSxNQUFJeUIsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsT0FBSSxJQUFJckIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHYyxHQUFHLENBQUNSLE1BQXZCLEVBQStCTixDQUFDLEVBQWhDLEVBQW1DO0FBQ2pDcUIsS0FBQyxJQUFJUCxHQUFHLENBQUNkLENBQUQsQ0FBUjtBQUNEOztBQUNELFNBQU9xQixDQUFQO0FBQ0QsQ0FQRDs7QUFTQTVCLENBQUMsQ0FBQ3lFLGdCQUFGLEdBQXFCLFVBQVN0RSxDQUFULEVBQVc7QUFDOUIsTUFBTXlELEdBQUcsR0FBRzVELENBQUMsQ0FBQ3dFLGlCQUFGLENBQW9CckUsQ0FBcEIsQ0FBWjs7QUFDQSxNQUFHeUQsR0FBRyxHQUFHekQsQ0FBQyxHQUFHLENBQWIsRUFBZTtBQUNiLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBTkQ7O0FBUUFILENBQUMsQ0FBQzBFLHFCQUFGLEdBQTBCLFVBQVN2RSxDQUFULEVBQVc7QUFDbkMsTUFBTXdFLEdBQUcsR0FBR3hFLENBQUMsR0FBR0EsQ0FBaEI7QUFDQSxNQUFNeUUsQ0FBQyxHQUFHQyxNQUFNLENBQUNGLEdBQUQsQ0FBaEI7QUFDQSxNQUFNM0QsR0FBRyxHQUFHNEQsQ0FBQyxDQUFDL0QsTUFBZDtBQUNBLE1BQUlpRSxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxNQUFJQyxLQUFKLEVBQVdDLEtBQVg7O0FBQ0EsTUFBR2xGLENBQUMsQ0FBQ3FDLFdBQUYsQ0FBY3BCLEdBQWQsQ0FBSCxFQUFzQjtBQUNwQjhELGFBQVMsR0FBRyxDQUFDOUQsR0FBRyxHQUFHLENBQVAsSUFBWSxDQUF4QjtBQUNBK0QsYUFBUyxHQUFHRCxTQUFTLEdBQUcsQ0FBeEI7QUFDRCxHQUhELE1BR0s7QUFDSEEsYUFBUyxHQUFHOUQsR0FBRyxHQUFHLENBQWxCO0FBQ0ErRCxhQUFTLEdBQUdELFNBQVo7QUFDRDs7QUFDREUsT0FBSyxHQUFHbkQsTUFBTSxDQUFDK0MsQ0FBQyxDQUFDTSxNQUFGLENBQVMsQ0FBVCxFQUFZSixTQUFaLENBQUQsQ0FBZDtBQUNBRyxPQUFLLEdBQUdwRCxNQUFNLENBQUMrQyxDQUFDLENBQUNNLE1BQUYsQ0FBU0osU0FBVCxFQUFvQkMsU0FBcEIsQ0FBRCxDQUFkOztBQUVBLE1BQUtDLEtBQUssR0FBR0MsS0FBVixLQUFzQjlFLENBQXpCLEVBQTJCO0FBQ3pCLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBckJEOztBQXVCQUgsQ0FBQyxDQUFDbUYscUJBQUYsR0FBMEIsVUFBU2hGLENBQVQsRUFBVztBQUVuQyxNQUFNa0IsR0FBRyxHQUFHd0QsTUFBTSxDQUFDMUUsQ0FBRCxDQUFOLENBQVVpRixLQUFWLENBQWdCLEVBQWhCLENBQVo7QUFFQSxNQUFNekUsR0FBRyxHQUFHa0IsTUFBTSxDQUFDUixHQUFHLENBQUNnRSxJQUFKLEdBQVdDLElBQVgsQ0FBZ0IsRUFBaEIsQ0FBRCxDQUFsQjtBQUNBLE1BQU1oRixHQUFHLEdBQUd1QixNQUFNLENBQUNSLEdBQUcsQ0FBQ2tFLE9BQUosR0FBY0QsSUFBZCxDQUFtQixFQUFuQixDQUFELENBQWxCOztBQUVBLE1BQUloRixHQUFHLEdBQUdLLEdBQVAsS0FBZ0JSLENBQW5CLEVBQXFCO0FBQ25CLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBWEQ7O0FBYUFILENBQUMsQ0FBQ3dGLGdCQUFGLEdBQXFCLFVBQVNyRixDQUFULEVBQVc7QUFDOUIsTUFBR0gsQ0FBQyxDQUFDMEUscUJBQUYsQ0FBd0J2RSxDQUF4QixLQUE4QkgsQ0FBQyxDQUFDbUYscUJBQUYsQ0FBd0JoRixDQUF4QixDQUFqQyxFQUE0RDtBQUMxRCxXQUFPLElBQVA7QUFDRDtBQUNGLENBSkQ7O0FBTUFKLENBQUMsQ0FBQzBGLFNBQUYsR0FBYyxVQUFTdEYsQ0FBVCxFQUFXO0FBQ3ZCLE1BQU11RixDQUFDLEdBQUd4RSxJQUFJLENBQUNvRCxLQUFMLENBQVduRSxDQUFYLENBQVY7O0FBQ0EsTUFBSXVGLENBQUMsS0FBS3ZGLENBQVYsRUFBWTtBQUNWLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBTkQsQyxDQVFBOzs7QUFDQUgsQ0FBQyxDQUFDMkYsWUFBRixHQUFpQixVQUFTdEUsR0FBVCxFQUFhO0FBQzVCLE1BQU1MLEdBQUcsR0FBR0ssR0FBRyxDQUFDUixNQUFoQjtBQUNBLE1BQUkrQyxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxPQUFJLElBQUlyRCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdTLEdBQW5CLEVBQXdCVCxDQUFDLEVBQXpCLEVBQTRCO0FBQzFCcUQsT0FBRyxJQUFJLElBQUl2QyxHQUFHLENBQUNkLENBQUQsQ0FBZDtBQUNEOztBQUNELFNBQU9TLEdBQUcsR0FBRzRDLEdBQWI7QUFDRCxDQVBELEMsQ0FTQTs7O0FBQ0E1RCxDQUFDLENBQUM0Rix1QkFBRixHQUE0QixVQUFTekYsQ0FBVCxFQUFXO0FBQ3JDLE1BQU1rQixHQUFHLEdBQUdyQixDQUFDLENBQUNxQyxRQUFGLENBQVdsQyxDQUFYLENBQVo7QUFDQSxNQUFNb0IsR0FBRyxHQUFHdkIsQ0FBQyxDQUFDMkYsWUFBRixDQUFldEUsR0FBZixDQUFaOztBQUNBLE1BQUd0QixDQUFDLENBQUMwRixTQUFGLENBQVlsRSxHQUFaLENBQUgsRUFBb0I7QUFDbEIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FQRDs7QUFTQXhCLENBQUMsQ0FBQzhGLGVBQUYsR0FBb0IsVUFBUzFGLENBQVQsRUFBVztBQUM3QixNQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTSixDQUFDLENBQUMwRixTQUFGLENBQVl0RixDQUFaLENBQVosRUFBMkI7QUFDekIsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQUpEOztBQU9BSCxDQUFDLENBQUM4RixlQUFGLEdBQW9CLFVBQVNuQixHQUFULEVBQWE7QUFFL0IsTUFBTXRELEdBQUcsR0FBRyxFQUFaOztBQUVBLE1BQU0wRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFTNUYsQ0FBVCxFQUFXO0FBQ3RCLFFBQUlvQixHQUFHLEdBQUdwQixDQUFWOztBQUNBLFFBQUdKLENBQUMsQ0FBQ3FDLFdBQUYsQ0FBY2pDLENBQWQsQ0FBSCxFQUFvQjtBQUNsQm9CLFNBQUcsR0FBR3BCLENBQUMsR0FBRyxDQUFKLEdBQVEsQ0FBZDtBQUNELEtBRkQsTUFFTSxJQUFHSixDQUFDLENBQUNvQyxZQUFGLENBQWVoQyxDQUFmLENBQUgsRUFBcUI7QUFDekJvQixTQUFHLEdBQUdwQixDQUFDLEdBQUcsQ0FBVjtBQUNEOztBQUNELFdBQU9vQixHQUFQO0FBQ0QsR0FSRDs7QUFVQSxTQUFNb0QsR0FBRyxHQUFHLENBQVosRUFBYztBQUNaQSxPQUFHLEdBQUdvQixJQUFJLENBQUNwQixHQUFELENBQVY7QUFDQXRELE9BQUcsQ0FBQ0MsSUFBSixDQUFTcUQsR0FBVDtBQUNEOztBQUNELFNBQU90RCxHQUFQO0FBQ0QsQ0FuQkQsQyxDQXFCQTtBQUNBOzs7QUFDQXJCLENBQUMsQ0FBQ2dHLFVBQUYsR0FBZSxVQUFTN0YsQ0FBVCxFQUFZRyxHQUFaLEVBQWdCO0FBQzdCLE1BQUcsQ0FBQ1AsQ0FBQyxDQUFDMEYsU0FBRixDQUFZdEYsQ0FBWixDQUFELElBQW1CSixDQUFDLENBQUNrRyxNQUFGLENBQVM5RixDQUFULENBQW5CLElBQWtDQSxDQUFDLEtBQUssQ0FBM0MsRUFBNkM7QUFDM0MsV0FBTyw4REFBOERBLENBQTlELEdBQWtFLDBCQUF6RTtBQUNEOztBQUVELE1BQUcsQ0FBQ0csR0FBSixFQUFRO0FBQ05BLE9BQUcsR0FBRyxHQUFOO0FBQ0Q7O0FBRUQsT0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLElBQUlELEdBQXBCLEVBQXlCQyxDQUFDLEVBQTFCLEVBQTZCO0FBQzNCLFFBQU1xQixDQUFDLEdBQUc1QixDQUFDLENBQUNvQixTQUFGLENBQVksQ0FBWixFQUFlakIsQ0FBQyxHQUFHLENBQW5CLENBQVY7O0FBQ0EsUUFBR0gsQ0FBQyxDQUFDcUQsZ0JBQUYsQ0FBbUJ6QixDQUFuQixFQUFzQnpCLENBQXRCLE1BQTZCLENBQWhDLEVBQWtDO0FBQ2hDLGFBQU8saUJBQVA7QUFDRDs7QUFDRCxRQUFNb0IsR0FBRyxHQUFHTCxJQUFJLENBQUNnRixHQUFMLENBQVN0RSxDQUFULEVBQVl6QixDQUFDLEdBQUcsQ0FBaEIsSUFBcUJBLENBQWpDOztBQUNBLFFBQUdvQixHQUFHLEtBQUssQ0FBWCxFQUFhO0FBQ1gsYUFBTyxpQkFBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxvQkFBUDtBQUNELENBcEJELEMsQ0FzQkE7QUFDQTtBQUNBO0FBRUE7OztBQUNBdkIsQ0FBQyxDQUFDbUcsa0JBQUYsR0FBdUIsVUFBU3hCLEdBQVQsRUFBYTtBQUNsQyxNQUFNdEQsR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFJa0IsSUFBSSxHQUFHb0MsR0FBWDtBQUNBLE1BQUl5QixJQUFJLEdBQUcsSUFBWDs7QUFDQSxTQUFNQSxJQUFOLEVBQVc7QUFDVCxRQUFNeEUsQ0FBQyxHQUFHVyxJQUFWO0FBQ0EsUUFBTVQsQ0FBQyxHQUFHNkMsR0FBRyxHQUFFcEMsSUFBZjtBQUNBLFFBQU04RCxFQUFFLEdBQUcsQ0FBQ3pFLENBQUQsRUFBR0UsQ0FBSCxDQUFYO0FBQ0FULE9BQUcsQ0FBQ0MsSUFBSixDQUFTK0UsRUFBVDtBQUNBOUQsUUFBSSxHQUFHQSxJQUFJLEdBQUUsQ0FBYjs7QUFDQSxRQUFHQSxJQUFJLEdBQUcsQ0FBVixFQUFZO0FBQ1Y2RCxVQUFJLEdBQUcsS0FBUDtBQUNBO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPL0UsR0FBUDtBQUNELENBaEJEOztBQW1CZTtBQUNidEIsR0FBQyxFQUFFQSxDQURVO0FBRWJDLEdBQUMsRUFBRUE7QUFGVSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ25lQTtBQUFlO0FBQ2JLLEtBQUcsRUFBRSxLQURRO0FBRWJpRyxLQUFHLEVBQUUsQ0FBQyxLQUZPO0FBR2JDLEtBQUcsRUFBRSxrQkFIUTtBQUliQyxLQUFHLEVBQUUsY0FKUTtBQUtiQyxPQUFLLEVBQUU7QUFMTSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEsSUFBTUMsSUFBSSxHQUFHLEVBQWI7O0FBRUFBLElBQUksQ0FBQ3RHLFFBQUwsR0FBZ0IsVUFBU0QsQ0FBVCxFQUFXO0FBQ3pCLE1BQUcsT0FBT0EsQ0FBUCxLQUFhLFFBQWhCLEVBQXlCO0FBQ3ZCLFFBQUcwQixNQUFNLENBQUM4RSxLQUFQLENBQWF4RyxDQUFiLENBQUgsRUFBbUI7QUFDakIsYUFBT3lHLEdBQVA7QUFDRCxLQUZELE1BRUs7QUFDSCxhQUFPLElBQVA7QUFDRDtBQUNGO0FBQ0YsQ0FSRDs7QUFVQUYsSUFBSSxDQUFDVCxNQUFMLEdBQWMsVUFBUzlGLENBQVQsRUFBVztBQUN2QixNQUFJQSxDQUFDLEtBQUssQ0FBVixFQUFZO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQUpELEMsQ0FNQTs7O0FBQ0F1RyxJQUFJLENBQUNHLFVBQUwsR0FBa0IsVUFBUzFHLENBQVQsRUFBVztBQUMzQixNQUFNa0IsR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFNeUYsR0FBRyxHQUFHakMsTUFBTSxDQUFDMUUsQ0FBRCxDQUFsQjtBQUNBLE1BQU1hLEdBQUcsR0FBRzhGLEdBQUcsQ0FBQ2pHLE1BQWhCOztBQUNBLE9BQUksSUFBSU4sQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHUyxHQUFuQixFQUF3QlQsQ0FBQyxFQUF6QixFQUE0QjtBQUMxQixRQUFNc0QsR0FBRyxHQUFHaEMsTUFBTSxDQUFDaUYsR0FBRyxDQUFDQyxLQUFKLENBQVV4RyxDQUFWLEVBQWFBLENBQUMsR0FBRyxDQUFqQixDQUFELENBQWxCOztBQUNBLFFBQUcsQ0FBQyxLQUFLSCxRQUFMLENBQWN5RCxHQUFkLENBQUosRUFBdUI7QUFDckIsWUFBTSxJQUFJbUQsS0FBSixDQUFVLHlEQUFWLENBQU47QUFDRDs7QUFDRDNGLE9BQUcsQ0FBQ0MsSUFBSixDQUFTdUMsR0FBVDtBQUNEOztBQUNELFNBQU94QyxHQUFQO0FBQ0QsQ0FaRDs7QUFjQXFGLElBQUksQ0FBQ08sVUFBTCxHQUFrQixVQUFTNUYsR0FBVCxFQUFhO0FBQzdCLE1BQUlBLEdBQUcsWUFBWVQsS0FBbkIsRUFBMEI7QUFDeEIsU0FBSSxJQUFJTCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdjLEdBQUcsQ0FBQ1IsTUFBdkIsRUFBK0JOLENBQUMsRUFBaEMsRUFBbUM7QUFDakMsVUFBSSxDQUFDLEtBQUtILFFBQUwsQ0FBY2lCLEdBQUcsQ0FBQ2QsQ0FBRCxDQUFqQixDQUFMLEVBQTRCO0FBQzFCLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQVREOztBQVdlbUcsbUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTs7QUFFQSxDQUFDLFVBQVNRLE1BQVQsRUFBaUJ0QyxDQUFqQixFQUFtQjtBQUNsQnNDLFFBQU0sQ0FBQ3RDLENBQVAsR0FBV0EsQ0FBWDtBQUNELENBRkQsRUFFR3NDLE1BQU0sSUFBSUMsSUFGYixFQUVtQnZDLDhDQUZuQixFOzs7Ozs7Ozs7Ozs7QUNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNdkUsR0FBRyxHQUFHK0cscURBQVMsQ0FBQy9HLEdBQXRCO0FBQ0EsSUFBTWlHLEdBQUcsR0FBR2MscURBQVMsQ0FBQ2QsR0FBdEI7QUFDQSxJQUFNQyxHQUFHLEdBQUdhLHFEQUFTLENBQUNiLEdBQXRCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHWSxxREFBUyxDQUFDWixHQUF0QjtBQUNBLElBQU1DLEtBQUssR0FBR1cscURBQVMsQ0FBQ1gsS0FBeEI7O0FBRUEsSUFBTVksRUFBRSxHQUFHLFNBQUxBLEVBQUssQ0FBU2xILENBQVQsRUFBWW1ILE1BQVosRUFBbUI7QUFDNUIsTUFBR1gsS0FBSyxDQUFDeEcsQ0FBRCxDQUFSLEVBQVk7QUFDVixVQUFNLElBQUk2RyxLQUFKLENBQVVSLEdBQVYsQ0FBTjtBQUNEOztBQUNELE1BQUcsQ0FBQ3JHLENBQUosRUFBTTtBQUNKQSxLQUFDLEdBQUcsQ0FBSjtBQUNEOztBQUNELE1BQUcsQ0FBQ21ILE1BQUosRUFBVztBQUNUQSxVQUFNLEdBQUcsRUFBVDtBQUNEOztBQUVELE1BQUlSLEdBQUcsR0FBR2pDLE1BQU0sQ0FBQzFFLENBQUQsQ0FBaEI7QUFFQSxNQUFJb0gsUUFBUSxHQUFHLEtBQWY7O0FBQ0EsTUFBR1QsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFXLEdBQWQsRUFBa0I7QUFDaEJBLE9BQUcsR0FBR0EsR0FBRyxDQUFDQyxLQUFKLENBQVUsQ0FBVixFQUFhRCxHQUFHLENBQUNqRyxNQUFqQixDQUFOO0FBQ0EwRyxZQUFRLEdBQUcsSUFBWDtBQUNEOztBQUNELE1BQUcsQ0FBQ0EsUUFBRCxJQUFhRCxNQUFiLElBQXVCQSxNQUFNLENBQUNDLFFBQWpDLEVBQTBDO0FBQ3hDQSxZQUFRLEdBQUcsSUFBWDtBQUNEOztBQUVELE1BQUdaLEtBQUssQ0FBQzlFLE1BQU0sQ0FBQ2lGLEdBQUQsQ0FBUCxDQUFSLEVBQXNCO0FBQ3BCQSxPQUFHLEdBQUcsR0FBTjtBQUNEOztBQUNELE1BQUdBLEdBQUcsS0FBSyxHQUFYLEVBQWU7QUFDYlMsWUFBUSxHQUFHLEtBQVg7QUFDRDs7QUFFRCxNQUFJQyxLQUFLLEdBQUdWLEdBQUcsQ0FBQzFCLEtBQUosQ0FBVSxHQUFWLENBQVo7QUFDQSxNQUFJcUMsT0FBTyxHQUFHRCxLQUFLLENBQUMsQ0FBRCxDQUFuQjtBQUNBLE1BQUlFLFdBQVcsR0FBR0YsS0FBSyxDQUFDLENBQUQsQ0FBdkI7O0FBQ0EsTUFBR0MsT0FBSCxFQUFXO0FBQ1QsUUFBTUUsSUFBSSxHQUFHRixPQUFPLENBQUNHLEtBQVIsQ0FBYyxJQUFkLENBQWI7O0FBQ0EsUUFBR0QsSUFBSSxJQUFJQSxJQUFJLENBQUM5RyxNQUFMLEtBQWdCNEcsT0FBTyxDQUFDNUcsTUFBbkMsRUFBMEM7QUFDeEM0RyxhQUFPLEdBQUcsR0FBVjtBQUNEOztBQUNELFFBQUlJLFdBQVcsR0FBRyxFQUFsQjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxTQUFJLElBQUl2SCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUVrSCxPQUFPLENBQUM1RyxNQUExQixFQUFrQ04sQ0FBQyxFQUFuQyxFQUFzQztBQUNwQyxVQUFHa0gsT0FBTyxDQUFDbEgsQ0FBRCxDQUFQLEtBQWUsR0FBZixJQUFzQixDQUFDdUgsVUFBMUIsRUFBcUM7QUFDbkNBLGtCQUFVLEdBQUcsS0FBYjtBQUNBRCxtQkFBVyxJQUFJSixPQUFPLENBQUNsSCxDQUFELENBQXRCO0FBQ0Q7QUFDRjs7QUFDRCxRQUFHLENBQUNzSCxXQUFKLEVBQWdCO0FBQ2RKLGFBQU8sR0FBRyxHQUFWO0FBQ0QsS0FGRCxNQUVLO0FBQ0hBLGFBQU8sR0FBR0ksV0FBVjtBQUNEO0FBQ0Y7O0FBRUQsTUFBR0gsV0FBSCxFQUFlO0FBQ2IsUUFBTUssSUFBSSxHQUFHTCxXQUFXLENBQUNFLEtBQVosQ0FBa0IsSUFBbEIsQ0FBYjs7QUFDQSxRQUFHRyxJQUFJLElBQUlBLElBQUksQ0FBQ2xILE1BQUwsS0FBZ0I2RyxXQUFXLENBQUM3RyxNQUF2QyxFQUE4QztBQUM1QzZHLGlCQUFXLEdBQUcsR0FBZDtBQUNEOztBQUNELFFBQUlNLFFBQVEsR0FBRyxJQUFmO0FBQ0EsUUFBSUMsZUFBZSxHQUFHLEVBQXRCOztBQUNBLFNBQUksSUFBSTFILEVBQUMsR0FBR21ILFdBQVcsQ0FBQzdHLE1BQVosR0FBcUIsQ0FBakMsRUFBb0NOLEVBQUMsSUFBSSxDQUF6QyxFQUE0Q0EsRUFBQyxFQUE3QyxFQUFnRDtBQUM5QyxVQUFHbUgsV0FBVyxDQUFDbkgsRUFBRCxDQUFYLEtBQW1CLEdBQW5CLElBQTBCLENBQUN5SCxRQUE5QixFQUF1QztBQUNyQ0EsZ0JBQVEsR0FBRyxLQUFYO0FBQ0FDLHVCQUFlLEdBQUdQLFdBQVcsQ0FBQ25ILEVBQUQsQ0FBWCxHQUFpQjBILGVBQW5DO0FBQ0Q7QUFDRjs7QUFDRCxRQUFHLENBQUNBLGVBQUosRUFBb0I7QUFDbEJQLGlCQUFXLEdBQUcsR0FBZDtBQUNELEtBRkQsTUFFSztBQUNIQSxpQkFBVyxHQUFHTyxlQUFkO0FBQ0Q7QUFFRjs7QUFFRCxNQUFJQyxPQUFKO0FBQ0EsTUFBSUMsV0FBSjs7QUFHQSxNQUFHO0FBQ0RELFdBQU8sR0FBR3hCLGdEQUFJLENBQUNHLFVBQUwsQ0FBZ0JZLE9BQWhCLENBQVY7QUFDQVUsZUFBVyxHQUFHVCxXQUFXLEdBQUdoQixnREFBSSxDQUFDRyxVQUFMLENBQWdCYSxXQUFoQixDQUFILEdBQWtDLENBQUMsQ0FBRCxDQUEzRDtBQUNELEdBSEQsQ0FHQyxPQUFNVSxDQUFOLEVBQVE7QUFDUCxVQUFNLElBQUlwQixLQUFKLENBQVVSLEdBQVYsQ0FBTjtBQUNEOztBQUVELE9BQUtwQyxPQUFMLEdBQWU4RCxPQUFmO0FBQ0EsT0FBS0csT0FBTCxHQUFlRixXQUFmO0FBQ0EsT0FBS1osUUFBTCxHQUFnQkEsUUFBUSxHQUFHLElBQUgsR0FBVSxLQUFsQztBQUVBLE1BQUllLFdBQVcsR0FBRyxDQUFDLENBQUQsQ0FBbEI7O0FBRUEsT0FBSSxJQUFJL0gsR0FBQyxHQUFHLENBQVosRUFBZUEsR0FBQyxHQUFHLEtBQUs4SCxPQUFMLENBQWF4SCxNQUFoQyxFQUF3Q04sR0FBQyxFQUF6QyxFQUE0QztBQUMxQytILGVBQVcsQ0FBQ2hILElBQVosQ0FBaUIsQ0FBakI7QUFDRDs7QUFFRCxPQUFLaUgsUUFBTCxHQUFnQjtBQUNkQyxhQUFTLEVBQUUsS0FBS3BFLE9BQUwsQ0FBYXFFLE1BQWIsQ0FBb0IsS0FBS0osT0FBekIsQ0FERztBQUVkQyxlQUFXLEVBQUVBO0FBRkMsR0FBaEI7QUFLRCxDQW5HRDs7QUFxR0EsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBUy9ELEdBQVQsRUFBYzJDLE1BQWQsRUFBcUI7QUFDbEMsTUFBSS9GLEdBQUo7O0FBQ0EsTUFBRztBQUNEQSxPQUFHLEdBQUcsSUFBSThGLEVBQUosQ0FBTzFDLEdBQVAsRUFBWTJDLE1BQVosQ0FBTjtBQUNELEdBRkQsQ0FFQyxPQUFNYyxDQUFOLEVBQVE7QUFDUDdHLE9BQUcsR0FBRzZHLENBQUMsQ0FBQ08sT0FBUjtBQUNEOztBQUVELFNBQU9wSCxHQUFQO0FBRUQsQ0FWRDs7QUFZQSxJQUFNcUgsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBU0MsRUFBVCxFQUFZO0FBQ3ZCLE1BQUdBLEVBQUUsWUFBWXhCLEVBQWpCLEVBQW9CO0FBQ2xCLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FKRDs7QUFNQSxJQUFNeUIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBU0QsRUFBVCxFQUFZO0FBQ3pCLE1BQU0vQixHQUFHLEdBQUcrQixFQUFFLENBQUNFLFNBQUgsRUFBWjtBQUNBLFNBQU9MLE1BQU0sQ0FBQzVCLEdBQUQsQ0FBYjtBQUNELENBSEQ7O0FBS0EsSUFBTWtDLFNBQVMsR0FBRztBQUNoQkMsTUFBSSxFQUFFUCxNQUFNLENBQUMsQ0FBRCxDQURJO0FBRWhCUSxLQUFHLEVBQUVSLE1BQU0sQ0FBQyxDQUFELENBRks7QUFHaEJ6SSxvQkFBa0IsRUFBRXlJLE1BQU0sQ0FBQyxDQUFELENBSFY7QUFJaEJySSxLQUFHLEVBQUVxSSxNQUFNLENBQUNySSxHQUFELENBSks7QUFLaEJpRyxLQUFHLEVBQUVvQyxNQUFNLENBQUNwQyxHQUFEO0FBTEssQ0FBbEI7O0FBUUFlLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYUosU0FBYixHQUF5QixZQUFVO0FBQ2pDLE1BQUlqQyxHQUFHLEdBQUdqQyxNQUFNLENBQUUsS0FBS1QsT0FBTCxDQUFha0IsSUFBYixDQUFrQixFQUFsQixDQUFGLENBQWhCO0FBQ0EsTUFBTThELEVBQUUsR0FBRyxLQUFLZixPQUFMLENBQWFnQixNQUFiLENBQW9CLFVBQUN6SCxDQUFELEVBQUd3RyxDQUFIO0FBQUEsV0FBU3hHLENBQUMsR0FBR3dHLENBQWI7QUFBQSxHQUFwQixDQUFYOztBQUNBLE1BQUdnQixFQUFFLEtBQUssQ0FBVixFQUFZO0FBQ1Z0QyxPQUFHLElBQUksTUFBTSxLQUFLdUIsT0FBTCxDQUFhL0MsSUFBYixDQUFrQixFQUFsQixDQUFiO0FBQ0Q7O0FBQ0QsU0FBTyxLQUFLaUMsUUFBTCxjQUFvQlQsR0FBcEIsSUFBNEJBLEdBQW5DO0FBQ0QsQ0FQRDs7QUFTQU8sRUFBRSxDQUFDOEIsU0FBSCxDQUFhRyxTQUFiLEdBQXlCLFlBQVU7QUFDakMsTUFBTTNFLEdBQUcsR0FBRzlDLE1BQU0sQ0FBQyxLQUFLa0gsU0FBTCxFQUFELENBQWxCO0FBQ0EsU0FBT3BFLEdBQVA7QUFDRCxDQUhEOztBQUtBMEMsRUFBRSxDQUFDOEIsU0FBSCxDQUFhSSxVQUFiLEdBQTBCLFlBQVU7QUFDbEMsTUFBTTVFLEdBQUcsR0FBRzlDLE1BQU0sQ0FBQyxLQUFLdUMsT0FBTCxDQUFha0IsSUFBYixDQUFrQixFQUFsQixDQUFELENBQWxCO0FBQ0EsU0FBT1gsR0FBUDtBQUNELENBSEQ7O0FBS0EwQyxFQUFFLENBQUM4QixTQUFILENBQWFLLFVBQWIsR0FBMEIsWUFBVTtBQUNsQyxNQUFNN0UsR0FBRyxHQUFHOUMsTUFBTSxDQUFDLE9BQU8sS0FBS3dHLE9BQUwsQ0FBYS9DLElBQWIsQ0FBa0IsRUFBbEIsQ0FBUixDQUFsQjtBQUNBLFNBQU9YLEdBQVA7QUFDRCxDQUhEOztBQUtBMEMsRUFBRSxDQUFDOEIsU0FBSCxDQUFhTSxLQUFiLEdBQXFCLFlBQVU7QUFDN0IsTUFBTTNDLEdBQUcsR0FBRyxLQUFLaUMsU0FBTCxFQUFaO0FBQ0EsU0FBT0wsTUFBTSxDQUFDNUIsR0FBRCxDQUFiO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNNEMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBUzlILENBQVQsRUFBWUUsQ0FBWixFQUFnQztBQUFBLE1BQWpCNkgsUUFBaUIsdUVBQU4sS0FBTTtBQUUvQyxNQUFJcEMsUUFBUSxHQUFHLEtBQWY7QUFDQSxNQUFJcUMsS0FBSyxHQUFHLEVBQVo7O0FBRUEsTUFBTUMsRUFBRSxHQUFHbkIsTUFBTSxDQUFDOUcsQ0FBQyxDQUFDbUgsU0FBRixFQUFELENBQWpCOztBQUNBLE1BQU1lLEVBQUUsR0FBR3BCLE1BQU0sQ0FBQzVHLENBQUMsQ0FBQ2lILFNBQUYsRUFBRCxDQUFqQjs7QUFFQSxNQUFHWSxRQUFILEVBQVk7QUFDVkUsTUFBRSxDQUFDdEMsUUFBSCxHQUFjLEtBQWQ7QUFDQXVDLE1BQUUsQ0FBQ3ZDLFFBQUgsR0FBYyxLQUFkO0FBQ0Q7O0FBRUQsTUFBR3NDLEVBQUUsQ0FBQzVELE1BQUgsTUFBZTZELEVBQUUsQ0FBQzdELE1BQUgsRUFBbEIsRUFBOEI7QUFDNUI7QUFDRDs7QUFFRCxNQUFHLENBQUM0RCxFQUFFLENBQUN0QyxRQUFKLElBQWdCdUMsRUFBRSxDQUFDdkMsUUFBdEIsRUFBK0I7QUFDN0IsV0FBTzNGLENBQVA7QUFDRCxHQUZELE1BRU0sSUFBR2lJLEVBQUUsQ0FBQ3RDLFFBQUgsSUFBZSxDQUFDdUMsRUFBRSxDQUFDdkMsUUFBdEIsRUFBK0I7QUFDbkMsV0FBT3pGLENBQVA7QUFDRCxHQUZLLE1BRUEsSUFBRytILEVBQUUsQ0FBQ3RDLFFBQUgsSUFBZXVDLEVBQUUsQ0FBQ3ZDLFFBQXJCLEVBQThCO0FBQ2xDQSxZQUFRLEdBQUcsSUFBWDtBQUNEOztBQUVELE1BQUdzQyxFQUFFLENBQUN6RixPQUFILENBQVd2RCxNQUFYLEdBQW9CaUosRUFBRSxDQUFDMUYsT0FBSCxDQUFXdkQsTUFBbEMsRUFBeUM7QUFDdkMsUUFBRzBHLFFBQUgsRUFBWTtBQUNWLGFBQU96RixDQUFQO0FBQ0Q7O0FBQ0QsV0FBT0YsQ0FBUDtBQUNELEdBTEQsTUFLTSxJQUFHaUksRUFBRSxDQUFDekYsT0FBSCxDQUFXdkQsTUFBWCxHQUFvQmlKLEVBQUUsQ0FBQzFGLE9BQUgsQ0FBV3ZELE1BQWxDLEVBQXlDO0FBQzdDLFFBQUcwRyxRQUFILEVBQVk7QUFDVixhQUFPM0YsQ0FBUDtBQUNEOztBQUNELFdBQU9FLENBQVA7QUFDRDs7QUFFRCxPQUFJLElBQUl2QixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdzSixFQUFFLENBQUN6RixPQUFILENBQVd2RCxNQUE5QixFQUFzQ04sQ0FBQyxFQUF2QyxFQUEwQztBQUN4QyxRQUFJMkMsS0FBSyxHQUFHMkcsRUFBRSxDQUFDekYsT0FBSCxDQUFXN0QsQ0FBWCxDQUFaO0FBQ0EsUUFBSTZDLEtBQUssR0FBRzBHLEVBQUUsQ0FBQzFGLE9BQUgsQ0FBVzdELENBQVgsQ0FBWjs7QUFDQSxRQUFHMkMsS0FBSyxHQUFHRSxLQUFYLEVBQWlCO0FBQ2Z3RyxXQUFLLEdBQUcsQ0FBQ2hJLENBQUQsRUFBSUUsQ0FBSixDQUFSO0FBQ0E7QUFDRCxLQUhELE1BR00sSUFBR29CLEtBQUssR0FBR0UsS0FBWCxFQUFpQjtBQUNyQndHLFdBQUssR0FBRyxDQUFDOUgsQ0FBRCxFQUFJRixDQUFKLENBQVI7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsTUFBR2dJLEtBQUssQ0FBQy9JLE1BQU4sS0FBaUIsQ0FBcEIsRUFBc0I7QUFDcEIsUUFBTUcsR0FBRyxHQUFHNkksRUFBRSxDQUFDeEIsT0FBSCxDQUFXeEgsTUFBWCxJQUFxQmlKLEVBQUUsQ0FBQ3pCLE9BQUgsQ0FBV3hILE1BQWhDLEdBQXlDZ0osRUFBRSxDQUFDeEIsT0FBSCxDQUFXeEgsTUFBcEQsR0FBNkRpSixFQUFFLENBQUN6QixPQUFILENBQVd4SCxNQUFwRjs7QUFDQSxTQUFJLElBQUlOLEdBQUMsR0FBRyxDQUFaLEVBQWVBLEdBQUMsR0FBR1MsR0FBbkIsRUFBd0JULEdBQUMsRUFBekIsRUFBNEI7QUFDMUIsVUFBSTJDLE1BQUssR0FBRzJHLEVBQUUsQ0FBQ3hCLE9BQUgsQ0FBVzlILEdBQVgsSUFBZ0JzSixFQUFFLENBQUN4QixPQUFILENBQVc5SCxHQUFYLENBQWhCLEdBQWdDLENBQTVDOztBQUNBLFVBQUk2QyxNQUFLLEdBQUcwRyxFQUFFLENBQUN6QixPQUFILENBQVc5SCxHQUFYLElBQWdCdUosRUFBRSxDQUFDekIsT0FBSCxDQUFXOUgsR0FBWCxDQUFoQixHQUFnQyxDQUE1Qzs7QUFDQSxVQUFHMkMsTUFBSyxHQUFHRSxNQUFYLEVBQWlCO0FBQ2Z3RyxhQUFLLEdBQUcsQ0FBQ2hJLENBQUQsRUFBSUUsQ0FBSixDQUFSO0FBQ0E7QUFDRCxPQUhELE1BR00sSUFBR29CLE1BQUssR0FBR0UsTUFBWCxFQUFpQjtBQUNyQndHLGFBQUssR0FBRyxDQUFDOUgsQ0FBRCxFQUFJRixDQUFKLENBQVI7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxNQUFHMkYsUUFBSCxFQUFZO0FBQ1ZxQyxTQUFLLEdBQUcsQ0FBQ0EsS0FBSyxDQUFDLENBQUQsQ0FBTixFQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFoQixDQUFSO0FBQ0Q7O0FBQ0QsTUFBR0EsS0FBSyxDQUFDL0ksTUFBTixLQUFpQixDQUFwQixFQUFzQjtBQUNwQixXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFPK0ksS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUVELENBekVEOztBQTRFQXZDLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYVksT0FBYixHQUF1QixVQUFTbEIsRUFBVCxFQUFZO0FBQ2pDLE1BQUcsQ0FBQ0QsSUFBSSxDQUFDQyxFQUFELENBQVIsRUFBYTtBQUNYLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU1qSCxDQUFDLEdBQUcsS0FBSzZILEtBQUwsRUFBVjtBQUNBLE1BQU0zSCxDQUFDLEdBQUcrRyxFQUFFLENBQUNZLEtBQUgsRUFBVjtBQUNBLE1BQU1PLEdBQUcsR0FBR3BJLENBQUMsQ0FBQ3dDLE9BQWQ7QUFDQSxNQUFNNkYsR0FBRyxHQUFHbkksQ0FBQyxDQUFDc0MsT0FBZDtBQUNBLE1BQU04RixHQUFHLEdBQUd0SSxDQUFDLENBQUN5RyxPQUFkO0FBQ0EsTUFBTThCLEdBQUcsR0FBR3JJLENBQUMsQ0FBQ3VHLE9BQWQ7QUFFQSxNQUFNK0IsS0FBSyxHQUFHVixRQUFRLENBQUM5SCxDQUFELEVBQUlFLENBQUosQ0FBdEI7O0FBRUEsTUFBRyxDQUFDc0ksS0FBSixFQUFVO0FBQ1IsUUFBR0osR0FBRyxDQUFDbkosTUFBSixLQUFlb0osR0FBRyxDQUFDcEosTUFBdEIsRUFBNkI7QUFDM0IsV0FBSSxJQUFJTixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd5SixHQUFHLENBQUNuSixNQUF2QixFQUErQk4sQ0FBQyxFQUFoQyxFQUFtQztBQUNqQyxZQUFHeUosR0FBRyxDQUFDekosQ0FBRCxDQUFILEtBQVcwSixHQUFHLENBQUMxSixDQUFELENBQWpCLEVBQXFCO0FBQ25CLGlCQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0YsS0FORCxNQU1NLElBQUcySixHQUFHLENBQUNySixNQUFKLEtBQWVzSixHQUFHLENBQUN0SixNQUF0QixFQUE2QjtBQUNqQyxXQUFJLElBQUlOLEdBQUMsR0FBRyxDQUFaLEVBQWVBLEdBQUMsR0FBRzJKLEdBQUcsQ0FBQ3JKLE1BQXZCLEVBQStCTixHQUFDLEVBQWhDLEVBQW1DO0FBQ2pDLFlBQUcySixHQUFHLENBQUMzSixHQUFELENBQUgsS0FBVzRKLEdBQUcsQ0FBQzVKLEdBQUQsQ0FBakIsRUFBcUI7QUFDbkIsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRixLQU5LLE1BTUQ7QUFDSCxhQUFPLEtBQVA7QUFDRDs7QUFFRCxRQUFHcUIsQ0FBQyxDQUFDMkYsUUFBRixLQUFlekYsQ0FBQyxDQUFDeUYsUUFBcEIsRUFBNkI7QUFDM0IsYUFBTyxJQUFQO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsYUFBTyxLQUFQO0FBQ0Q7QUFDRixHQXRCRCxNQXNCSztBQUNILFdBQU8sS0FBUDtBQUNEO0FBRUYsQ0F2Q0Q7O0FBeUNBRixFQUFFLENBQUM4QixTQUFILENBQWFsRCxNQUFiLEdBQXNCLFlBQVU7QUFDOUIsTUFBRyxLQUFLN0IsT0FBTCxDQUFhdkQsTUFBYixLQUF3QixDQUF4QixJQUE2QixLQUFLdUQsT0FBTCxDQUFhLENBQWIsTUFBb0IsQ0FBakQsSUFBc0QsQ0FBQyxLQUFLaUcsY0FBTCxFQUExRCxFQUFnRjtBQUM5RSxXQUFPLElBQVA7QUFDRCxHQUZELE1BRUs7QUFDSCxXQUFPLEtBQVA7QUFDRDtBQUNGLENBTkQ7O0FBUUFoRCxFQUFFLENBQUM4QixTQUFILENBQWFtQixLQUFiLEdBQXFCLFlBQVU7QUFDN0IsTUFBRyxLQUFLL0MsUUFBUixFQUFpQjtBQUNmLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUcsS0FBS3dCLFNBQUwsT0FBcUIsR0FBeEIsRUFBNEI7QUFDMUIsV0FBTyxJQUFQO0FBQ0QsR0FGRCxNQUVLO0FBQ0gsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQVREOztBQVdBMUIsRUFBRSxDQUFDOEIsU0FBSCxDQUFhb0IsT0FBYixHQUF1QixVQUFTMUIsRUFBVCxFQUFZO0FBQ2pDLE1BQUcsQ0FBQ0QsSUFBSSxDQUFDQyxFQUFELENBQVIsRUFBYTtBQUNYLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU1qSCxDQUFDLEdBQUcsS0FBSzZILEtBQUwsRUFBVjtBQUNBLE1BQU0zSCxDQUFDLEdBQUcrRyxFQUFFLENBQUNZLEtBQUgsRUFBVjtBQUNBLE1BQU1sSSxHQUFHLEdBQUdtSSxRQUFRLENBQUM5SCxDQUFELEVBQUlFLENBQUosQ0FBcEI7O0FBQ0EsTUFBRyxDQUFDUCxHQUFKLEVBQVE7QUFDTixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFHQSxHQUFHLENBQUN3SCxTQUFKLE9BQW9CbkgsQ0FBQyxDQUFDbUgsU0FBRixFQUF2QixFQUFxQztBQUNuQyxXQUFPLElBQVA7QUFDRCxHQUZELE1BRUs7QUFDSCxXQUFPLEtBQVA7QUFDRDtBQUNGLENBZkQ7O0FBaUJBMUIsRUFBRSxDQUFDOEIsU0FBSCxDQUFhcUIsT0FBYixHQUF1QixVQUFTM0IsRUFBVCxFQUFZO0FBQ2pDLE1BQUcsQ0FBQ0QsSUFBSSxDQUFDQyxFQUFELENBQVIsRUFBYTtBQUNYLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU1qSCxDQUFDLEdBQUcsS0FBSzZILEtBQUwsRUFBVjtBQUNBLE1BQU0zSCxDQUFDLEdBQUcrRyxFQUFFLENBQUNZLEtBQUgsRUFBVjtBQUNBLE1BQU1sSSxHQUFHLEdBQUdtSSxRQUFRLENBQUM5SCxDQUFELEVBQUlFLENBQUosQ0FBcEI7O0FBQ0EsTUFBRyxDQUFDUCxHQUFKLEVBQVE7QUFDTixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFHQSxHQUFHLENBQUN3SCxTQUFKLE9BQW9CakgsQ0FBQyxDQUFDaUgsU0FBRixFQUF2QixFQUFxQztBQUNuQyxXQUFPLElBQVA7QUFDRCxHQUZELE1BRUs7QUFDSCxXQUFPLEtBQVA7QUFDRDtBQUNGLENBZkQ7O0FBaUJBMUIsRUFBRSxDQUFDOEIsU0FBSCxDQUFhMUQsU0FBYixHQUF5QixZQUFVO0FBQ2pDLE1BQUcsS0FBSzRFLGNBQUwsRUFBSCxFQUF5QjtBQUN2QixXQUFPLEtBQVA7QUFDRCxHQUZELE1BRUs7QUFDSCxXQUFPLElBQVA7QUFDRDtBQUNGLENBTkQ7O0FBUUFoRCxFQUFFLENBQUM4QixTQUFILENBQWF0RCxlQUFiLEdBQStCLFlBQVU7QUFDdkMsTUFBRyxLQUFLNEUsVUFBTCxNQUFxQixLQUFLaEYsU0FBTCxFQUFyQixJQUF5QyxLQUFLOEUsT0FBTCxDQUFhdkIsU0FBUyxDQUFDQyxJQUF2QixDQUE1QyxFQUF5RTtBQUN2RSxXQUFPLElBQVA7QUFDRCxHQUZELE1BRUs7QUFDSCxXQUFPLEtBQVA7QUFDRDtBQUNGLENBTkQ7O0FBUUE1QixFQUFFLENBQUM4QixTQUFILENBQWF1QixVQUFiLEdBQTBCLFlBQVU7QUFDbEMsTUFBRyxLQUFLbkQsUUFBUixFQUFpQjtBQUNmLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBTEQ7O0FBT0FGLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYXNCLFVBQWIsR0FBMEIsWUFBVTtBQUNsQyxNQUFHLEtBQUtsRCxRQUFSLEVBQWlCO0FBQ2YsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0FMRDs7QUFPQUYsRUFBRSxDQUFDOEIsU0FBSCxDQUFha0IsY0FBYixHQUE4QixZQUFVO0FBQ3RDLE1BQU05SSxHQUFHLEdBQUcsS0FBSzhHLE9BQUwsQ0FBYWdCLE1BQWIsQ0FBb0IsVUFBU3pILENBQVQsRUFBWStJLENBQVosRUFBYztBQUMxQyxXQUFPL0ksQ0FBQyxHQUFHK0ksQ0FBWDtBQUNILEdBRlcsQ0FBWjs7QUFHQSxNQUFHcEosR0FBRyxLQUFLLENBQVgsRUFBYTtBQUNYLFdBQU8sS0FBUDtBQUNELEdBRkQsTUFFSztBQUNILFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FURDs7QUFXQThGLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYXlCLEdBQWIsR0FBbUIsVUFBUy9CLEVBQVQsRUFBWTtBQUM3QixNQUFHLENBQUNELElBQUksQ0FBQ0MsRUFBRCxDQUFSLEVBQWE7QUFDWCxVQUFNLElBQUk3QixLQUFKLENBQVVQLEtBQVYsQ0FBTjtBQUNEOztBQUNELE1BQUk3RSxDQUFDLEdBQUcsS0FBSzZILEtBQUwsRUFBUjtBQUNBLE1BQUkzSCxDQUFDLEdBQUcrRyxFQUFFLENBQUNZLEtBQUgsRUFBUjs7QUFDQSxNQUFHN0gsQ0FBQyxDQUFDcUUsTUFBRixFQUFILEVBQWM7QUFDWixXQUFPbkUsQ0FBUDtBQUNEOztBQUNELE1BQUdBLENBQUMsQ0FBQ21FLE1BQUYsRUFBSCxFQUFjO0FBQ1osV0FBT3JFLENBQVA7QUFDRDs7QUFFRCxNQUFJMkYsUUFBSjs7QUFDQSxNQUFHM0YsQ0FBQyxDQUFDMkYsUUFBRixJQUFjekYsQ0FBQyxDQUFDeUYsUUFBbkIsRUFBNEI7QUFDMUJBLFlBQVEsR0FBRyxJQUFYO0FBQ0QsR0FGRCxNQUVNLElBQUcsQ0FBQzNGLENBQUMsQ0FBQzJGLFFBQUgsSUFBZSxDQUFDekYsQ0FBQyxDQUFDeUYsUUFBckIsRUFBOEI7QUFDbENBLFlBQVEsR0FBRyxLQUFYO0FBQ0QsR0FGSyxNQUVBLElBQUcsQ0FBQzNGLENBQUMsQ0FBQzJGLFFBQUgsSUFBZXpGLENBQUMsQ0FBQ3lGLFFBQXBCLEVBQTZCO0FBQ2pDekYsS0FBQyxDQUFDK0ksWUFBRjtBQUNBLFdBQU9qSixDQUFDLENBQUNrSixRQUFGLENBQVdoSixDQUFYLENBQVA7QUFDRCxHQUhLLE1BR0EsSUFBR0YsQ0FBQyxDQUFDMkYsUUFBRixJQUFjLENBQUN6RixDQUFDLENBQUN5RixRQUFwQixFQUE2QjtBQUNqQzNGLEtBQUMsQ0FBQ2lKLFlBQUY7QUFDQSxXQUFPL0ksQ0FBQyxDQUFDZ0osUUFBRixDQUFXbEosQ0FBWCxDQUFQO0FBQ0Q7O0FBRUQsTUFBSUwsR0FBRyxHQUFHbUksUUFBUSxDQUFDOUgsQ0FBRCxFQUFJRSxDQUFKLENBQWxCOztBQUNBLE1BQUcsQ0FBQ1AsR0FBSixFQUFRO0FBQ05BLE9BQUcsR0FBR0ssQ0FBTjtBQUNEOztBQUNELE1BQUltSixLQUFLLEdBQUd4SixHQUFHLENBQUM2QyxPQUFoQjtBQUNBLE1BQUk0RyxLQUFLLEdBQUd6SixHQUFHLENBQUM4RyxPQUFoQjtBQUNBLE1BQUk0QyxLQUFKLEVBQVdDLEtBQVg7O0FBQ0EsTUFBRzNKLEdBQUcsS0FBS0ssQ0FBWCxFQUFhO0FBQ1hxSixTQUFLLEdBQUduSixDQUFDLENBQUNzQyxPQUFWO0FBQ0E4RyxTQUFLLEdBQUdwSixDQUFDLENBQUN1RyxPQUFWO0FBQ0QsR0FIRCxNQUdLO0FBQ0g0QyxTQUFLLEdBQUdySixDQUFDLENBQUN3QyxPQUFWO0FBQ0E4RyxTQUFLLEdBQUd0SixDQUFDLENBQUN5RyxPQUFWO0FBQ0Q7O0FBRUQsTUFBSThDLEtBQUssR0FBR0osS0FBSyxDQUFDbEssTUFBbEI7QUFDQSxNQUFJdUssS0FBSyxHQUFHSixLQUFLLENBQUNuSyxNQUFsQjs7QUFFQSxNQUFHcUssS0FBSyxDQUFDckssTUFBTixHQUFlbUssS0FBSyxDQUFDbkssTUFBeEIsRUFBK0I7QUFDN0J1SyxTQUFLLEdBQUdGLEtBQUssQ0FBQ3JLLE1BQWQ7QUFDRDs7QUFDRCxNQUFJd0ssSUFBSSxHQUFHLENBQVg7QUFBQSxNQUNJQyxPQUFPLEdBQUcsRUFEZDtBQUFBLE1BRUlDLE9BQU8sR0FBRyxFQUZkOztBQUlBLE9BQUksSUFBSWhMLENBQUMsR0FBRzZLLEtBQUssR0FBRyxDQUFwQixFQUF1QjdLLENBQUMsSUFBSSxDQUE1QixFQUErQkEsQ0FBQyxFQUFoQyxFQUFtQztBQUNqQyxRQUFJaUwsSUFBSSxTQUFSOztBQUNBLFFBQUl0SSxLQUFLLEdBQUc4SCxLQUFLLENBQUN6SyxDQUFELENBQUwsSUFBWSxDQUF4QjtBQUNBLFFBQUk2QyxLQUFLLEdBQUc4SCxLQUFLLENBQUMzSyxDQUFELENBQUwsSUFBWSxDQUF4QjtBQUNBaUwsUUFBSSxHQUFHdEksS0FBSyxHQUFHRSxLQUFSLEdBQWdCaUksSUFBdkI7O0FBQ0EsUUFBR0csSUFBSSxJQUFJLEVBQVgsRUFBYztBQUNaSCxVQUFJLEdBQUcsQ0FBUDtBQUNBRyxVQUFJLEdBQUdBLElBQUksR0FBRyxFQUFkO0FBQ0QsS0FIRCxNQUdLO0FBQ0hILFVBQUksR0FBRyxDQUFQO0FBQ0Q7O0FBQ0RFLFdBQU8sQ0FBQ0UsT0FBUixDQUFnQkQsSUFBaEI7QUFDRDs7QUFFRCxPQUFJLElBQUlqTCxHQUFDLEdBQUdnTCxPQUFPLENBQUMxSyxNQUFSLEdBQWlCLENBQTdCLEVBQWdDTixHQUFDLElBQUksQ0FBckMsRUFBd0NBLEdBQUMsRUFBekMsRUFBNkM7QUFDM0MsUUFBSW1MLENBQUMsR0FBR0gsT0FBTyxDQUFDaEwsR0FBRCxDQUFmOztBQUNBLFFBQUdtTCxDQUFDLEtBQUssQ0FBVCxFQUFXO0FBQ1RILGFBQU8sQ0FBQ0ksR0FBUjtBQUNELEtBRkQsTUFFSztBQUNIO0FBQ0Q7QUFDRjs7QUFFRCxNQUFNQyxHQUFHLEdBQUdULEtBQUssR0FBR0YsS0FBSyxDQUFDcEssTUFBMUI7O0FBQ0EsT0FBSSxJQUFJTixHQUFDLEdBQUc0SyxLQUFLLEdBQUcsQ0FBcEIsRUFBdUI1SyxHQUFDLElBQUksQ0FBNUIsRUFBK0JBLEdBQUMsRUFBaEMsRUFBbUM7QUFDakMsUUFBSWlMLEtBQUksU0FBUjs7QUFDQSxRQUFJdEksT0FBSyxHQUFHNkgsS0FBSyxDQUFDeEssR0FBRCxDQUFqQjs7QUFDQSxRQUFJNkMsT0FBSyxHQUFHNkgsS0FBSyxDQUFDMUssR0FBQyxHQUFHcUwsR0FBTCxDQUFMLElBQWtCLENBQTlCOztBQUNBSixTQUFJLEdBQUd0SSxPQUFLLEdBQUdFLE9BQVIsR0FBZ0JpSSxJQUF2Qjs7QUFDQSxRQUFHRyxLQUFJLElBQUksRUFBWCxFQUFjO0FBQ1pILFVBQUksR0FBRyxDQUFQO0FBQ0FHLFdBQUksR0FBR0EsS0FBSSxHQUFHLEVBQWQ7QUFDRCxLQUhELE1BR0s7QUFDSEgsVUFBSSxHQUFHLENBQVA7QUFDRDs7QUFDREMsV0FBTyxDQUFDRyxPQUFSLENBQWdCRCxLQUFoQjtBQUNEOztBQUNELE1BQUdILElBQUksR0FBRyxDQUFWLEVBQVk7QUFDVkMsV0FBTyxDQUFDRyxPQUFSLENBQWdCSixJQUFoQjtBQUNEOztBQUVELE1BQU1sSCxNQUFNLEdBQUd1RSxNQUFNLENBQUM0QyxPQUFPLENBQUNoRyxJQUFSLENBQWEsRUFBYixJQUFtQixHQUFuQixHQUF5QmlHLE9BQU8sQ0FBQ2pHLElBQVIsQ0FBYSxFQUFiLENBQTFCLEVBQTRDO0FBQUNpQyxZQUFRLEVBQUVBO0FBQVgsR0FBNUMsQ0FBckI7O0FBRUEsTUFBR3BELE1BQU0sQ0FBQzhCLE1BQVAsTUFBbUI5QixNQUFNLENBQUNvRCxRQUE3QixFQUFzQztBQUNwQ3BELFVBQU0sQ0FBQzBHLFlBQVA7QUFDRDs7QUFFRCxTQUFPMUcsTUFBUDtBQUNELENBbkdEOztBQXFHQWtELEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYTJCLFFBQWIsR0FBd0IsVUFBU2pDLEVBQVQsRUFBWTtBQUNsQyxNQUFHLENBQUNELElBQUksQ0FBQ0MsRUFBRCxDQUFSLEVBQWE7QUFDWCxVQUFNLElBQUk3QixLQUFKLENBQVVQLEtBQVYsQ0FBTjtBQUNEOztBQUNELE1BQUk3RSxDQUFDLEdBQUdrSCxNQUFNLENBQUMsSUFBRCxDQUFkO0FBQ0EsTUFBSWhILENBQUMsR0FBR2dILE1BQU0sQ0FBQ0QsRUFBRCxDQUFkOztBQUNBLE1BQUdBLEVBQUUsQ0FBQzVDLE1BQUgsRUFBSCxFQUFlO0FBQ2IsV0FBT3JFLENBQVA7QUFDRDs7QUFFRCxNQUFHLEtBQUtxRSxNQUFMLEVBQUgsRUFBaUI7QUFDZixXQUFPbkUsQ0FBQyxDQUFDK0osTUFBRixFQUFQO0FBQ0Q7O0FBRUQsTUFBR2pLLENBQUMsQ0FBQzJGLFFBQUYsS0FBZXpGLENBQUMsQ0FBQ3lGLFFBQXBCLEVBQTZCO0FBQzNCekYsS0FBQyxDQUFDeUYsUUFBRixHQUFhLENBQUN6RixDQUFDLENBQUN5RixRQUFoQjtBQUNBLFdBQU8zRixDQUFDLENBQUNnSixHQUFGLENBQU05SSxDQUFOLENBQVA7QUFDRDs7QUFFRCxNQUFJeUYsUUFBUSxHQUFHM0YsQ0FBQyxDQUFDMkYsUUFBakI7QUFFQSxNQUFNaEcsR0FBRyxHQUFHbUksUUFBUSxDQUFDOUgsQ0FBRCxFQUFJRSxDQUFKLEVBQU8sSUFBUCxDQUFwQjs7QUFDQSxNQUFHUCxHQUFHLEtBQUtLLENBQVgsRUFBYTtBQUNYQSxLQUFDLEdBQUdpSCxFQUFKO0FBQ0EvRyxLQUFDLEdBQUcsSUFBSjtBQUNBeUYsWUFBUSxHQUFHLENBQUMzRixDQUFDLENBQUMyRixRQUFkO0FBQ0Q7O0FBRUQsTUFBTXVFLElBQUksR0FBR2xLLENBQUMsQ0FBQ3dDLE9BQUYsQ0FBVXFFLE1BQVYsQ0FBaUI3RyxDQUFDLENBQUN5RyxPQUFuQixDQUFiO0FBQ0EsTUFBTTBELElBQUksR0FBR2pLLENBQUMsQ0FBQ3NDLE9BQUYsQ0FBVXFFLE1BQVYsQ0FBaUIzRyxDQUFDLENBQUN1RyxPQUFuQixDQUFiO0FBRUEsTUFBTTJELE9BQU8sR0FBR3BLLENBQUMsQ0FBQ3dDLE9BQUYsQ0FBVXZELE1BQTFCO0FBQ0EsTUFBTW9MLE9BQU8sR0FBR25LLENBQUMsQ0FBQ3NDLE9BQUYsQ0FBVXZELE1BQTFCO0FBRUEsTUFBTXFMLE9BQU8sR0FBR3RLLENBQUMsQ0FBQ3lHLE9BQUYsQ0FBVXhILE1BQTFCO0FBQ0EsTUFBTXNMLE9BQU8sR0FBR3JLLENBQUMsQ0FBQ3VHLE9BQUYsQ0FBVXhILE1BQTFCO0FBQ0EsTUFBTXVMLEtBQUssR0FBR2xMLElBQUksQ0FBQ21MLEdBQUwsQ0FBU0gsT0FBTyxHQUFHQyxPQUFuQixDQUFkO0FBRUEsTUFBSWhCLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsTUFBR1ksT0FBTyxHQUFHQyxPQUFiLEVBQXFCO0FBQ25CZCxTQUFLLElBQUlhLE9BQVQ7QUFDRCxHQUZELE1BRUs7QUFDSGIsU0FBSyxJQUFJYyxPQUFUO0FBQ0Q7O0FBQ0QsTUFBR0MsT0FBTyxHQUFHQyxPQUFiLEVBQXFCO0FBQ25CZixTQUFLLElBQUljLE9BQVQ7O0FBQ0EsU0FBSSxJQUFJM0wsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHNkwsS0FBbkIsRUFBMEI3TCxDQUFDLEVBQTNCLEVBQThCO0FBQzVCd0wsVUFBSSxDQUFDekssSUFBTCxDQUFVLENBQVY7QUFDRDtBQUNGLEdBTEQsTUFLSztBQUNIOEosU0FBSyxJQUFJZSxPQUFUOztBQUNBLFNBQUksSUFBSTVMLEdBQUMsR0FBRyxDQUFaLEVBQWVBLEdBQUMsR0FBRzZMLEtBQW5CLEVBQTBCN0wsR0FBQyxFQUEzQixFQUE4QjtBQUM1QnVMLFVBQUksQ0FBQ3hLLElBQUwsQ0FBVSxDQUFWO0FBQ0Q7QUFFRjs7QUFFRCxNQUFJZ0wsSUFBSSxHQUFHLENBQVg7QUFDQSxNQUFNQyxTQUFTLEdBQUcsRUFBbEI7O0FBQ0EsT0FBSSxJQUFJaE0sR0FBQyxHQUFHLENBQVosRUFBZUEsR0FBQyxHQUFHNEssS0FBSyxHQUFHQyxLQUEzQixFQUFrQzdLLEdBQUMsRUFBbkMsRUFBc0M7QUFDcEMsUUFBTXlKLEdBQUcsR0FBRzhCLElBQUksQ0FBQ2pMLE1BQUwsR0FBYyxDQUFkLEdBQWtCTixHQUE5QjtBQUNBLFFBQU0wSixHQUFHLEdBQUc4QixJQUFJLENBQUNsTCxNQUFMLEdBQWMsQ0FBZCxHQUFrQk4sR0FBOUI7QUFDQSxRQUFNaU0sS0FBSyxHQUFHLENBQUNWLElBQUksQ0FBQzlCLEdBQUQsQ0FBSixHQUFZOEIsSUFBSSxDQUFDOUIsR0FBRCxDQUFoQixHQUF3QixDQUF6QixJQUE4QnNDLElBQTVDO0FBQ0EsUUFBTUcsS0FBSyxHQUFHVixJQUFJLENBQUM5QixHQUFELENBQUosR0FBWThCLElBQUksQ0FBQzlCLEdBQUQsQ0FBaEIsR0FBd0IsQ0FBdEM7O0FBQ0EsUUFBR3VDLEtBQUssSUFBSUMsS0FBWixFQUFrQjtBQUNoQkgsVUFBSSxHQUFHLENBQVA7QUFDQUMsZUFBUyxDQUFDZCxPQUFWLENBQWtCZSxLQUFLLEdBQUdDLEtBQTFCO0FBQ0QsS0FIRCxNQUdLO0FBQ0hILFVBQUksR0FBRyxDQUFQO0FBQ0FDLGVBQVMsQ0FBQ2QsT0FBVixDQUFtQmEsSUFBSSxHQUFHLEVBQVIsR0FBY0UsS0FBZCxHQUFzQkMsS0FBeEM7QUFDRDtBQUVGOztBQUNERixXQUFTLENBQUNHLE1BQVYsQ0FBaUJILFNBQVMsQ0FBQzFMLE1BQVYsR0FBbUJ1SyxLQUFwQyxFQUEyQyxDQUEzQyxFQUE4QyxHQUE5QztBQUNBLE1BQU11QixLQUFLLEdBQUdwRixRQUFRLEdBQUcsR0FBSCxHQUFTLEVBQS9CO0FBRUEsTUFBTXBELE1BQU0sR0FBSXVFLE1BQU0sQ0FBQ2lFLEtBQUssR0FBR0osU0FBUyxDQUFDakgsSUFBVixDQUFlLEVBQWYsQ0FBVCxDQUF0Qjs7QUFFQSxNQUFHbkIsTUFBTSxDQUFDOEIsTUFBUCxNQUFtQjlCLE1BQU0sQ0FBQ29ELFFBQTdCLEVBQXNDO0FBQ3BDcEQsVUFBTSxDQUFDMEcsWUFBUDtBQUNEOztBQUVELFNBQU8xRyxNQUFQO0FBQ0QsQ0FwRkQ7O0FBc0ZBa0QsRUFBRSxDQUFDOEIsU0FBSCxDQUFhMEMsTUFBYixHQUFzQixZQUFVO0FBQzlCLE1BQUcsS0FBS2UsTUFBTCxLQUFnQixDQUFuQixFQUFxQjtBQUNuQixXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFHLEtBQUtyRixRQUFSLEVBQWlCO0FBQ2YsU0FBS3NGLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRCxHQUZELE1BRUs7QUFDSCxTQUFLdEYsUUFBTCxHQUFnQixJQUFoQjtBQUNEOztBQUNELFNBQU8sSUFBUDtBQUNELENBVkQ7O0FBWUFGLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYTBCLFlBQWIsR0FBNEIsWUFBVTtBQUNwQyxNQUFHLEtBQUsrQixNQUFMLEtBQWdCLENBQW5CLEVBQXFCO0FBQ25CLFdBQU8sSUFBUDtBQUNEOztBQUNELE9BQUtyRixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FORDs7QUFRQUYsRUFBRSxDQUFDOEIsU0FBSCxDQUFhMkQsWUFBYixHQUE0QixZQUFVO0FBQ3BDLE1BQUcsS0FBS0YsTUFBTCxLQUFnQixDQUFuQixFQUFxQjtBQUNuQixXQUFPLElBQVA7QUFDRDs7QUFDRCxPQUFLckYsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFNBQU8sSUFBUDtBQUNELENBTkQ7O0FBUUFGLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYTRELGNBQWIsR0FBOEIsVUFBU2xFLEVBQVQsRUFBWTtBQUN4QyxNQUFHLENBQUNELElBQUksQ0FBQ0MsRUFBRCxDQUFSLEVBQWE7QUFDWCxVQUFNLElBQUk3QixLQUFKLENBQVVQLEtBQVYsQ0FBTjtBQUNEOztBQUVELE1BQUk3RSxDQUFDLEdBQUdrSCxNQUFNLENBQUMsSUFBRCxDQUFkO0FBQ0EsTUFBSWhILENBQUMsR0FBR2dILE1BQU0sQ0FBQ0QsRUFBRCxDQUFkOztBQUNBLE1BQUdqSCxDQUFDLENBQUNxRSxNQUFGLE1BQWNuRSxDQUFDLENBQUNtRSxNQUFGLEVBQWpCLEVBQTRCO0FBQzFCLFdBQU95QyxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0Q7O0FBRUQsTUFBSW5CLFFBQVEsR0FBRyxLQUFmOztBQUNBLE1BQUczRixDQUFDLENBQUMyRixRQUFGLEtBQWUsS0FBZixJQUF3QnpGLENBQUMsQ0FBQ3lGLFFBQUYsS0FBZSxJQUExQyxFQUErQztBQUM3Q0EsWUFBUSxHQUFHLElBQVg7QUFDRCxHQUZELE1BRU0sSUFBRzNGLENBQUMsQ0FBQzJGLFFBQUYsS0FBZSxJQUFmLElBQXVCekYsQ0FBQyxDQUFDeUYsUUFBRixLQUFlLEtBQXpDLEVBQStDO0FBQ25EQSxZQUFRLEdBQUcsSUFBWDtBQUNEOztBQUVELE1BQU11RSxJQUFJLEdBQUdsSyxDQUFDLENBQUN3QyxPQUFGLENBQVVxRSxNQUFWLENBQWlCN0csQ0FBQyxDQUFDeUcsT0FBbkIsQ0FBYjtBQUNBLE1BQU0wRCxJQUFJLEdBQUdqSyxDQUFDLENBQUNzQyxPQUFGLENBQVVxRSxNQUFWLENBQWlCM0csQ0FBQyxDQUFDdUcsT0FBbkIsQ0FBYjtBQUVBLE1BQU0yRSxJQUFJLEdBQUdwTCxDQUFDLENBQUN3QyxPQUFGLENBQVV2RCxNQUF2QjtBQUNBLE1BQU1vTSxJQUFJLEdBQUduTCxDQUFDLENBQUNzQyxPQUFGLENBQVV2RCxNQUF2QjtBQUVBLE1BQU1xTSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSSxJQUFJbEQsR0FBRyxHQUFHLENBQWQsRUFBaUJBLEdBQUcsR0FBRzhCLElBQUksQ0FBQ2pMLE1BQTVCLEVBQW9DbUosR0FBRyxFQUF2QyxFQUEwQztBQUN4QyxTQUFJLElBQUlDLEdBQUcsR0FBRyxDQUFkLEVBQWlCQSxHQUFHLEdBQUc4QixJQUFJLENBQUNsTCxNQUE1QixFQUFvQ29KLEdBQUcsRUFBdkMsRUFBMEM7QUFDeEMsVUFBTS9HLEtBQUssR0FBRzRJLElBQUksQ0FBQzlCLEdBQUQsQ0FBbEI7QUFDQSxVQUFNNUcsS0FBSyxHQUFHMkksSUFBSSxDQUFDOUIsR0FBRCxDQUFsQjtBQUNBLFVBQU1rRCxLQUFLLEdBQUdILElBQUksR0FBR2hELEdBQVAsR0FBWSxDQUExQjtBQUNBLFVBQU1vRCxLQUFLLEdBQUdILElBQUksR0FBR2hELEdBQVAsR0FBWSxDQUExQjtBQUNBLFVBQU1vRCxHQUFHLEdBQUdGLEtBQUssR0FBR0MsS0FBcEI7O0FBQ0EsVUFBSTdMLEtBQUcsR0FBRzJCLEtBQUssR0FBR0UsS0FBbEI7O0FBQ0EsVUFBSXBDLEdBQUcsR0FBR0UsSUFBSSxDQUFDbUwsR0FBTCxDQUFTZ0IsR0FBVCxDQUFWO0FBQ0EsVUFBSXZHLEdBQUcsU0FBUDs7QUFDQSxVQUFHdUcsR0FBRyxJQUFJLENBQVYsRUFBWTtBQUNWck0sV0FBRzs7QUFDSCxZQUFHTyxLQUFHLEdBQUcsQ0FBVCxFQUFXO0FBQ1R1RixhQUFHLEdBQUdqQyxNQUFNLENBQUN0RCxLQUFELENBQU4sQ0FBWStMLE1BQVosQ0FBbUJ0TSxHQUFHLEdBQUcsQ0FBekIsRUFBNEIsR0FBNUIsQ0FBTjtBQUNELFNBRkQsTUFFSztBQUNIOEYsYUFBRyxHQUFHakMsTUFBTSxDQUFDdEQsS0FBRCxDQUFOLENBQVkrTCxNQUFaLENBQW1CdE0sR0FBbkIsRUFBd0IsR0FBeEIsQ0FBTjtBQUNEO0FBQ0YsT0FQRCxNQU9LO0FBQ0gsWUFBR0EsR0FBRyxLQUFLLENBQVIsSUFBYU8sS0FBRyxHQUFHLENBQXRCLEVBQXdCO0FBQ3RCdUYsYUFBRyxHQUFHakMsTUFBTSxDQUFDdEQsS0FBRCxDQUFOLENBQVksQ0FBWixJQUFpQixHQUFqQixHQUF1QnNELE1BQU0sQ0FBQ3RELEtBQUQsQ0FBTixDQUFZLENBQVosQ0FBN0I7QUFDRCxTQUZELE1BRUs7QUFDSHVGLGFBQUcsR0FBRyxPQUFPakMsTUFBTSxDQUFDdEQsS0FBRCxDQUFOLENBQVlnTSxRQUFaLENBQXFCdk0sR0FBckIsRUFBMEIsR0FBMUIsQ0FBYjtBQUNEO0FBQ0Y7O0FBQ0RrTSxhQUFPLENBQUM1TCxJQUFSLENBQWFvSCxNQUFNLENBQUM1QixHQUFELENBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJdkYsR0FBRyxHQUFHbUgsTUFBTSxDQUFDLENBQUQsQ0FBaEI7O0FBQ0EsT0FBSSxJQUFJbkksQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHMk0sT0FBTyxDQUFDck0sTUFBM0IsRUFBbUNOLENBQUMsRUFBcEMsRUFBdUM7QUFDckNnQixPQUFHLEdBQUdBLEdBQUcsQ0FBQ3FKLEdBQUosQ0FBUXNDLE9BQU8sQ0FBQzNNLENBQUQsQ0FBZixDQUFOO0FBQ0Q7O0FBRURnQixLQUFHLENBQUNnRyxRQUFKLEdBQWVBLFFBQWY7QUFFQSxTQUFPaEcsR0FBUDtBQUVELENBOUREOztBQWdFQThGLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYW5GLFFBQWIsR0FBd0IsVUFBUzZFLEVBQVQsRUFBWTtBQUNsQyxNQUFHLENBQUNELElBQUksQ0FBQ0MsRUFBRCxDQUFSLEVBQWE7QUFDWCxVQUFNLElBQUk3QixLQUFKLENBQVVQLEtBQVYsQ0FBTjtBQUNEOztBQUVELE1BQUk3RSxDQUFDLEdBQUdrSCxNQUFNLENBQUMsSUFBRCxDQUFkO0FBQ0EsTUFBSWhILENBQUMsR0FBR2dILE1BQU0sQ0FBQ0QsRUFBRCxDQUFkOztBQUVBLE1BQUdqSCxDQUFDLENBQUNxRSxNQUFGLE1BQWNuRSxDQUFDLENBQUNtRSxNQUFGLEVBQWpCLEVBQTRCO0FBQzFCLFdBQU9PLEdBQVA7QUFDRCxHQUZELE1BRU0sSUFBRzVFLENBQUMsQ0FBQ3FFLE1BQUYsRUFBSCxFQUFjO0FBQ2xCLFdBQU95QyxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0QsR0FGSyxNQUVBLElBQUc1RyxDQUFDLENBQUNtRSxNQUFGLEVBQUgsRUFBYztBQUNsQixXQUFPTSxHQUFQO0FBQ0Q7O0FBR0QsTUFBSWdCLFFBQVEsR0FBRyxLQUFmOztBQUNBLE1BQUczRixDQUFDLENBQUMyRixRQUFGLEtBQWUsS0FBZixJQUF3QnpGLENBQUMsQ0FBQ3lGLFFBQUYsS0FBZSxJQUExQyxFQUErQztBQUM3Q0EsWUFBUSxHQUFHLElBQVg7QUFDRCxHQUZELE1BRU0sSUFBRzNGLENBQUMsQ0FBQzJGLFFBQUYsS0FBZSxJQUFmLElBQXVCekYsQ0FBQyxDQUFDeUYsUUFBRixLQUFlLEtBQXpDLEVBQStDO0FBQ25EQSxZQUFRLEdBQUcsSUFBWDtBQUNEOztBQUVELE1BQUlpRyxLQUFLLEdBQUc5RSxNQUFNLENBQUMsQ0FBRCxDQUFsQjtBQUNBLE1BQUk5RSxHQUFHLEdBQUc4RSxNQUFNLENBQUMsQ0FBRCxDQUFoQjs7QUFDQSxTQUFNOUcsQ0FBQyxDQUFDMkksT0FBRixDQUFVM0csR0FBVixLQUFrQmhDLENBQUMsQ0FBQ21JLE9BQUYsQ0FBVW5HLEdBQVYsQ0FBeEIsRUFBdUM7QUFDckM0SixTQUFLLEdBQUdBLEtBQUssQ0FBQzVDLEdBQU4sQ0FBVWxDLE1BQU0sQ0FBQyxDQUFELENBQWhCLENBQVI7QUFDQTlFLE9BQUcsR0FBRzlCLENBQUMsQ0FBQ2lMLGNBQUYsQ0FBaUJTLEtBQWpCLENBQU47QUFDRDs7QUFFREEsT0FBSyxHQUFHQSxLQUFLLENBQUMxQyxRQUFOLENBQWVwQyxNQUFNLENBQUMsQ0FBRCxDQUFyQixDQUFSO0FBQ0E5RSxLQUFHLEdBQUdBLEdBQUcsQ0FBQ2tILFFBQUosQ0FBYWhKLENBQWIsQ0FBTjtBQUNBLE1BQU0yTCxNQUFNLEdBQUc3TCxDQUFDLENBQUNrSixRQUFGLENBQVdsSCxHQUFYLENBQWY7QUFDQSxNQUFNckMsR0FBRyxHQUFHaU0sS0FBWjtBQUNBak0sS0FBRyxDQUFDOEMsU0FBSixHQUFnQm9KLE1BQWhCO0FBQ0FsTSxLQUFHLENBQUNnRyxRQUFKLEdBQWVBLFFBQWY7QUFDQSxTQUFPaEcsR0FBUDtBQUNELENBdENEOztBQXlDQThGLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYXVFLElBQWIsR0FBb0IsVUFBUzdFLEVBQVQsRUFBWTtBQUM5QixTQUFPLEtBQUsrQixHQUFMLENBQVMvQixFQUFULENBQVA7QUFDRCxDQUZEOztBQUlBeEIsRUFBRSxDQUFDOEIsU0FBSCxDQUFhd0UsSUFBYixHQUFvQixVQUFTOUUsRUFBVCxFQUFZO0FBQzlCLFNBQU8sS0FBSytCLEdBQUwsQ0FBUy9CLEVBQVQsQ0FBUDtBQUNELENBRkQ7O0FBSUF4QixFQUFFLENBQUM4QixTQUFILENBQWF3RCxLQUFiLEdBQXFCLFVBQVM5RCxFQUFULEVBQVk7QUFDL0IsU0FBTyxLQUFLaUMsUUFBTCxDQUFjakMsRUFBZCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQXhCLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYXlFLElBQWIsR0FBb0IsVUFBUy9FLEVBQVQsRUFBWTtBQUM5QixTQUFPLEtBQUtpQyxRQUFMLENBQWNqQyxFQUFkLENBQVA7QUFDRCxDQUZEOztBQUlBeEIsRUFBRSxDQUFDOEIsU0FBSCxDQUFhMEUsUUFBYixHQUF3QixVQUFTaEYsRUFBVCxFQUFZO0FBQ2xDLFNBQU8sS0FBS2tFLGNBQUwsQ0FBb0JsRSxFQUFwQixDQUFQO0FBQ0QsQ0FGRDs7QUFJQXhCLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYTJFLE1BQWIsR0FBc0IsVUFBU2pGLEVBQVQsRUFBWTtBQUNoQyxTQUFPLEtBQUtrRSxjQUFMLENBQW9CbEUsRUFBcEIsQ0FBUDtBQUNELENBRkQ7O0FBSUF4QixFQUFFLENBQUM4QixTQUFILENBQWE0RSxJQUFiLEdBQW9CLFVBQVNsRixFQUFULEVBQVk7QUFDOUIsU0FBTyxLQUFLN0UsUUFBTCxDQUFjNkUsRUFBZCxDQUFQO0FBQ0QsQ0FGRDs7QUFJQXhCLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYTZFLElBQWIsR0FBb0IsWUFBVTtBQUM1QixTQUFPLEtBQUtwRCxHQUFMLENBQVNsQyxNQUFNLENBQUMsQ0FBRCxDQUFmLENBQVA7QUFDRCxDQUZEOztBQUlBckIsRUFBRSxDQUFDOEIsU0FBSCxDQUFhOEUsSUFBYixHQUFvQixZQUFVO0FBQzVCLFNBQU8sS0FBS25ELFFBQUwsQ0FBY3BDLE1BQU0sQ0FBQyxDQUFELENBQXBCLENBQVA7QUFDRCxDQUZEOztBQUlBckIsRUFBRSxDQUFDOEIsU0FBSCxDQUFhaEgsWUFBYixHQUE0QixZQUFVO0FBQ3BDLE1BQUcsS0FBSzhELE1BQUwsRUFBSCxFQUFpQjtBQUNmLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU0xRSxHQUFHLEdBQUcsS0FBS3lDLFFBQUwsQ0FBYzBFLE1BQU0sQ0FBQyxDQUFELENBQXBCLENBQVo7O0FBRUEsTUFBSW5ILEdBQUcsQ0FBQzhDLFNBQUosQ0FBYzRCLE1BQWQsTUFBMEIxRSxHQUFHLENBQUM4QyxTQUFKLENBQWNnRSxPQUFkLENBQXNCLENBQXRCLE1BQTZCLENBQXZELElBQTREOUcsR0FBRyxDQUFDOEMsU0FBSixDQUFjZ0UsT0FBZCxDQUFzQnhILE1BQXRCLEtBQWlDLENBQWpHLEVBQW1HO0FBQ2pHLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFSztBQUNILFdBQU8sS0FBUDtBQUNEO0FBQ0YsQ0FYRDs7QUFhQXdHLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYS9HLFdBQWIsR0FBMkIsWUFBVTtBQUNuQyxNQUFHLEtBQUs2RCxNQUFMLEVBQUgsRUFBaUI7QUFDZixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFNMUUsR0FBRyxHQUFHLEtBQUt5QyxRQUFMLENBQWMwRSxNQUFNLENBQUMsQ0FBRCxDQUFwQixDQUFaOztBQUNBLE1BQUksQ0FBQ25ILEdBQUcsQ0FBQzhDLFNBQUosQ0FBYzRCLE1BQWQsRUFBRCxJQUEyQjFFLEdBQUcsQ0FBQzhDLFNBQUosQ0FBY2dFLE9BQWQsQ0FBc0IsQ0FBdEIsTUFBNkIsQ0FBeEQsSUFBNkQ5RyxHQUFHLENBQUM4QyxTQUFKLENBQWNnRSxPQUFkLENBQXNCeEgsTUFBdEIsS0FBaUMsQ0FBbEcsRUFBb0c7QUFDbEcsV0FBTyxJQUFQO0FBQ0QsR0FGRCxNQUVLO0FBQ0gsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQVZEOztBQVlBd0csRUFBRSxDQUFDOEIsU0FBSCxDQUFhK0UsV0FBYixHQUEyQixZQUFVO0FBQ25DLE1BQU03TSxHQUFHLEdBQUcsRUFBWjs7QUFDQSxPQUFJLElBQUlkLENBQUMsR0FBRyxDQUFaLEVBQWUsS0FBS2dLLE9BQUwsQ0FBYTdCLE1BQU0sQ0FBQ25JLENBQUQsQ0FBbkIsQ0FBZixFQUF3Q0EsQ0FBQyxFQUF6QyxFQUE0QztBQUMxQyxRQUFJc0ksRUFBRSxHQUFHSCxNQUFNLENBQUNuSSxDQUFELENBQWY7QUFDQSxRQUFNOEQsU0FBUyxHQUFHLEtBQUtMLFFBQUwsQ0FBYzZFLEVBQWQsRUFBa0J4RSxTQUFwQzs7QUFDQSxRQUFHQSxTQUFTLENBQUM0QixNQUFWLEVBQUgsRUFBc0I7QUFDcEI1RSxTQUFHLENBQUNDLElBQUosQ0FBU3VILEVBQVQ7QUFDRDtBQUNGOztBQUNEeEgsS0FBRyxDQUFDQyxJQUFKLENBQVMsSUFBVDtBQUNBLFNBQU9ELEdBQVA7QUFDRCxDQVhEOztBQWFBZ0csRUFBRSxDQUFDOEIsU0FBSCxDQUFhZ0YsaUJBQWIsR0FBaUMsVUFBU3RGLEVBQVQsRUFBWTtBQUMzQyxNQUFHLENBQUNELElBQUksQ0FBQ0MsRUFBRCxDQUFSLEVBQWE7QUFDWEEsTUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQUQsQ0FBWDtBQUNEOztBQUVELE1BQUlqSCxDQUFDLEdBQUcsSUFBUjtBQUNBLE1BQUlFLENBQUMsR0FBRytHLEVBQVI7QUFFQSxNQUFNL0YsS0FBSyxHQUFHbEIsQ0FBQyxDQUFDc00sV0FBRixFQUFkOztBQUNBLE1BQUd0TSxDQUFDLENBQUNtSSxPQUFGLENBQVVqSSxDQUFWLENBQUgsRUFBZ0I7QUFDZCxXQUFPZ0IsS0FBUDtBQUNEOztBQUNELE1BQU1DLEtBQUssR0FBR2pCLENBQUMsQ0FBQ29NLFdBQUYsRUFBZDtBQUVBLE1BQU1sTCxJQUFJLEdBQUcsRUFBYjs7QUFFQSxPQUFJLElBQUl6QyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd1QyxLQUFLLENBQUNqQyxNQUF6QixFQUFpQ04sQ0FBQyxFQUFsQyxFQUFxQztBQUNuQyxRQUFJMkMsS0FBSyxHQUFHSixLQUFLLENBQUN2QyxDQUFELENBQWpCOztBQUNBLFNBQUksSUFBSWtELENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR1YsS0FBSyxDQUFDbEMsTUFBekIsRUFBaUM0QyxDQUFDLEVBQWxDLEVBQXFDO0FBQ25DLFVBQUlMLEtBQUssR0FBR0wsS0FBSyxDQUFDVSxDQUFELENBQWpCOztBQUNBLFVBQUdQLEtBQUssQ0FBQzZHLE9BQU4sQ0FBYzNHLEtBQWQsQ0FBSCxFQUF3QjtBQUN0QkosWUFBSSxDQUFDMUIsSUFBTCxDQUFVNEIsS0FBVjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPRixJQUFQO0FBQ0QsQ0EzQkQ7O0FBNkJBcUUsRUFBRSxDQUFDOEIsU0FBSCxDQUFhaUYsbUJBQWIsR0FBbUMsVUFBU3ZGLEVBQVQsRUFBWTtBQUM3QyxNQUFHLENBQUNELElBQUksQ0FBQ0MsRUFBRCxDQUFSLEVBQWE7QUFDWEEsTUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQUQsQ0FBWDtBQUNEOztBQUNELE1BQU14SCxHQUFHLEdBQUcsS0FBSzhNLGlCQUFMLENBQXVCdEYsRUFBdkIsQ0FBWjtBQUNBLFNBQU94SCxHQUFHLENBQUNBLEdBQUcsQ0FBQ1IsTUFBSixHQUFhLENBQWQsQ0FBVjtBQUNELENBTkQ7O0FBUUF3RyxFQUFFLENBQUM4QixTQUFILENBQWE3RixRQUFiLEdBQXdCLFlBQVU7QUFDaEMsTUFBRyxLQUFLMkMsTUFBTCxFQUFILEVBQWlCO0FBQ2YsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNEOztBQUNELE1BQU01RSxHQUFHLEdBQUcsRUFBWjs7QUFDQSxPQUFJLElBQUlkLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR3lJLFNBQVMsQ0FBQzNJLEdBQVYsQ0FBY3VNLE1BQWpDLEVBQXlDck0sQ0FBQyxFQUExQyxFQUE2QztBQUMzQ2MsT0FBRyxDQUFDQyxJQUFKLENBQVMsS0FBS3lMLGNBQUwsQ0FBb0J4TSxDQUFwQixDQUFUO0FBQ0Q7O0FBQ0QsU0FBT2MsR0FBUDtBQUNELENBVEQ7O0FBV0FnRyxFQUFFLENBQUM4QixTQUFILENBQWFrRixzQkFBYixHQUFzQyxVQUFTeEYsRUFBVCxFQUFZO0FBQ2hELE1BQUcsQ0FBQ0QsSUFBSSxDQUFDQyxFQUFELENBQVIsRUFBYTtBQUNYQSxNQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBRCxDQUFYO0FBQ0Q7O0FBRUQsTUFBTWpILENBQUMsR0FBRyxJQUFWO0FBQ0EsTUFBTUUsQ0FBQyxHQUFHK0csRUFBVjtBQUVBLE1BQU14RixnQkFBZ0IsR0FBR3pCLENBQUMsQ0FBQ3dNLG1CQUFGLENBQXNCdE0sQ0FBdEIsQ0FBekI7QUFFQSxNQUFNd00sS0FBSyxHQUFHMU0sQ0FBQyxDQUFDaU0sUUFBRixDQUFXL0wsQ0FBWCxDQUFkO0FBRUEsTUFBTVAsR0FBRyxHQUFHK00sS0FBSyxDQUFDdEssUUFBTixDQUFlWCxnQkFBZixDQUFaO0FBRUEsU0FBTzlCLEdBQVA7QUFFRCxDQWhCRDs7QUFrQkE4RixFQUFFLENBQUM4QixTQUFILENBQWExSCxpQkFBYixHQUFpQyxZQUFVO0FBRXpDLE1BQU04TSxJQUFJLEdBQUc3RixNQUFNLENBQUMsQ0FBRCxDQUFuQjtBQUNBLE1BQU04RixHQUFHLEdBQUc5RixNQUFNLENBQUMsQ0FBRCxDQUFsQjtBQUVBLE1BQU1ySSxHQUFHLEdBQUcySSxTQUFTLENBQUMzSSxHQUF0QjtBQUVBLE1BQU1nQixHQUFHLEdBQUcsQ0FBQ2tOLElBQUQsRUFBT0MsR0FBUCxDQUFaOztBQUNBLE1BQU03TSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFTTixHQUFULEVBQWE7QUFDeEIsUUFBR0EsR0FBRyxDQUFDQSxHQUFHLENBQUNSLE1BQUosR0FBYSxDQUFkLENBQUgsQ0FBb0IwSixPQUFwQixDQUE0QmxLLEdBQTVCLENBQUgsRUFBb0M7QUFDbEMsYUFBT2dCLEdBQVA7QUFDRDs7QUFDRCxRQUFNTyxDQUFDLEdBQUdQLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDUixNQUFKLEdBQWEsQ0FBZCxDQUFiO0FBQ0EsUUFBTWlCLENBQUMsR0FBR1QsR0FBRyxDQUFDQSxHQUFHLENBQUNSLE1BQUosR0FBYSxDQUFkLENBQWI7QUFDQSxRQUFNNE4sQ0FBQyxHQUFHN00sQ0FBQyxDQUFDZ0osR0FBRixDQUFNOUksQ0FBTixDQUFWO0FBQ0FULE9BQUcsQ0FBQ0MsSUFBSixDQUFTbU4sQ0FBVDtBQUNBLFdBQU85TSxJQUFJLENBQUNOLEdBQUQsQ0FBWDtBQUNELEdBVEQ7O0FBVUEsU0FBT00sSUFBSSxDQUFDTixHQUFELENBQVg7QUFDRCxDQW5CRDs7QUFxQkFnRyxFQUFFLENBQUM4QixTQUFILENBQWFwSCxpQkFBYixHQUFpQyxZQUFVO0FBQ3pDLE1BQU01QixDQUFDLEdBQUcsSUFBVjs7QUFDQSxNQUFHQSxDQUFDLENBQUM4RixNQUFGLEVBQUgsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQUc5RixDQUFDLENBQUNrSyxjQUFGLEVBQUgsRUFBc0I7QUFDcEIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTXFFLElBQUksR0FBRyxLQUFLak4saUJBQUwsQ0FBdUIsQ0FBdkIsQ0FBYjs7QUFDQSxPQUFJLElBQUlsQixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdtTyxJQUFJLENBQUM3TixNQUF4QixFQUFnQ04sQ0FBQyxFQUFqQyxFQUFvQztBQUNsQyxRQUFJbUYsQ0FBQyxHQUFHZ0osSUFBSSxDQUFDbk8sQ0FBRCxDQUFaOztBQUNBLFFBQUdtRixDQUFDLENBQUNxRSxPQUFGLENBQVU1SixDQUFWLENBQUgsRUFBZ0I7QUFDZCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sS0FBUDtBQUNELENBaEJEOztBQWtCQWtILEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYXdGLGFBQWIsR0FBNkIsWUFBVTtBQUVyQyxNQUFNdE8sR0FBRyxHQUFHMkksU0FBUyxDQUFDM0ksR0FBdEI7QUFFQSxNQUFNZ0IsR0FBRyxHQUFHLENBQUNxSCxNQUFNLENBQUMsQ0FBRCxDQUFQLEVBQVlBLE1BQU0sQ0FBQyxDQUFELENBQWxCLENBQVo7O0FBQ0EsTUFBTS9HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVNOLEdBQVQsRUFBYTtBQUN4QixRQUFHQSxHQUFHLENBQUNBLEdBQUcsQ0FBQ1IsTUFBSixHQUFhLENBQWQsQ0FBSCxDQUFvQjBKLE9BQXBCLENBQTRCbEssR0FBNUIsQ0FBSCxFQUFvQztBQUNsQyxhQUFPZ0IsR0FBUDtBQUNEOztBQUNELFFBQU1PLENBQUMsR0FBR1AsR0FBRyxDQUFDQSxHQUFHLENBQUNSLE1BQUosR0FBYSxDQUFkLENBQWI7QUFDQSxRQUFNaUIsQ0FBQyxHQUFHVCxHQUFHLENBQUNBLEdBQUcsQ0FBQ1IsTUFBSixHQUFhLENBQWQsQ0FBYjtBQUNBLFFBQU00TixDQUFDLEdBQUc3TSxDQUFDLENBQUNnSixHQUFGLENBQU05SSxDQUFOLENBQVY7QUFDQVQsT0FBRyxDQUFDQyxJQUFKLENBQVNtTixDQUFUO0FBQ0EsV0FBTzlNLElBQUksQ0FBQ04sR0FBRCxDQUFYO0FBQ0QsR0FURDs7QUFVQSxTQUFPTSxJQUFJLENBQUNOLEdBQUQsQ0FBWDtBQUNELENBaEJEOztBQWtCQWdHLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYXlGLGFBQWIsR0FBNkIsWUFBVTtBQUNyQyxNQUFNek8sQ0FBQyxHQUFHLElBQVY7O0FBQ0EsTUFBR0EsQ0FBQyxDQUFDa0ssY0FBRixFQUFILEVBQXNCO0FBQ3BCLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU13RSxJQUFJLEdBQUcsS0FBS0YsYUFBTCxDQUFtQixDQUFuQixDQUFiOztBQUNBLE9BQUksSUFBSXBPLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR3NPLElBQUksQ0FBQ2hPLE1BQXhCLEVBQWdDTixDQUFDLEVBQWpDLEVBQW9DO0FBQ2xDLFFBQUltRixDQUFDLEdBQUdtSixJQUFJLENBQUN0TyxDQUFELENBQVo7O0FBQ0EsUUFBR21GLENBQUMsQ0FBQ3FFLE9BQUYsQ0FBVTVKLENBQVYsQ0FBSCxFQUFnQjtBQUNkLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FiRDs7QUFlQWtILEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYTJGLGlCQUFiLEdBQWlDLFlBQVU7QUFDekMsTUFBTUMsRUFBRSxHQUFHLEtBQUtKLGFBQUwsRUFBWDtBQUNBLE1BQU10TixHQUFHLEdBQUcsRUFBWjs7QUFFQSxPQUFJLElBQUlkLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR3dPLEVBQUUsQ0FBQ2xPLE1BQXRCLEVBQThCTixDQUFDLEVBQS9CLEVBQWtDO0FBQ2hDLFFBQU00QyxDQUFDLEdBQUc0TCxFQUFFLENBQUN4TyxDQUFELENBQVo7O0FBQ0EsUUFBRzRDLENBQUMsQ0FBQ2pELGFBQUYsRUFBSCxFQUFxQjtBQUNuQm1CLFNBQUcsQ0FBQ0MsSUFBSixDQUFTNkIsQ0FBVDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTzlCLEdBQVA7QUFDRCxDQVhEOztBQWNBZ0csRUFBRSxDQUFDOEIsU0FBSCxDQUFhNkYsV0FBYixHQUEyQixZQUFVO0FBQ25DLE1BQU03TixLQUFLLEdBQUcsQ0FBQyxJQUFELENBQWQ7O0FBQ0EsT0FBSSxJQUFJWixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdvRCxTQUFTLENBQUM5QyxNQUE3QixFQUFxQ04sQ0FBQyxFQUF0QyxFQUF5QztBQUN2QyxRQUFJc0QsR0FBRyxHQUFHRixTQUFTLENBQUNwRCxDQUFELENBQW5COztBQUNBLFFBQUcsQ0FBQ3FJLElBQUksQ0FBQy9FLEdBQUQsQ0FBUixFQUFjO0FBQ1pBLFNBQUcsR0FBRzZFLE1BQU0sQ0FBQzdFLEdBQUQsQ0FBWjtBQUNEOztBQUNEMUMsU0FBSyxDQUFDRyxJQUFOLENBQVd1QyxHQUFYO0FBQ0Q7O0FBQ0QsU0FBTzFDLEtBQVA7QUFDRCxDQVZEOztBQVlBa0csRUFBRSxDQUFDOEIsU0FBSCxDQUFhekYsU0FBYixHQUF5QixZQUFVO0FBQ2pDLE1BQU1yQyxHQUFHLEdBQUcsS0FBSzJOLFdBQUwsYUFBb0JyTCxTQUFwQixDQUFaO0FBQ0EsTUFBSUMsR0FBRyxHQUFHOEUsTUFBTSxDQUFDLENBQUQsQ0FBaEI7O0FBQ0EsT0FBSSxJQUFJbkksQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHYyxHQUFHLENBQUNSLE1BQXZCLEVBQStCTixDQUFDLEVBQWhDLEVBQW1DO0FBQ2pDcUQsT0FBRyxHQUFHQSxHQUFHLENBQUNnSCxHQUFKLENBQVF2SixHQUFHLENBQUNkLENBQUQsQ0FBWCxDQUFOO0FBQ0Q7O0FBQ0QsU0FBT3FELEdBQVA7QUFDRCxDQVBEOztBQVNBeUQsRUFBRSxDQUFDOEIsU0FBSCxDQUFhckYsZUFBYixHQUErQixZQUFVO0FBQ3ZDLE1BQU16QyxHQUFHLEdBQUcsS0FBSzJOLFdBQUwsYUFBb0JyTCxTQUFwQixDQUFaO0FBQ0EsTUFBSUksRUFBRSxHQUFHMUMsR0FBRyxDQUFDLENBQUQsQ0FBWjs7QUFDQSxPQUFJLElBQUlkLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR2MsR0FBRyxDQUFDUixNQUF2QixFQUErQk4sQ0FBQyxFQUFoQyxFQUFtQztBQUNqQ3dELE1BQUUsR0FBR0EsRUFBRSxDQUFDZ0osY0FBSCxDQUFrQjFMLEdBQUcsQ0FBQ2QsQ0FBRCxDQUFyQixDQUFMO0FBQ0Q7O0FBQ0QsU0FBT3dELEVBQVA7QUFDRCxDQVBEOztBQVNBc0QsRUFBRSxDQUFDOEIsU0FBSCxDQUFhOEYsUUFBYixHQUF3QixZQUFVO0FBQ2hDLE1BQUlyTCxHQUFHLEdBQUc4RSxNQUFNLENBQUMsQ0FBRCxDQUFoQjs7QUFDQSxPQUFJLElBQUluSSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsS0FBS1ksS0FBTCxDQUFXTixNQUE5QixFQUFzQ04sQ0FBQyxFQUF2QyxFQUEwQztBQUN4QyxRQUFJcUIsQ0FBQyxHQUFHOEcsTUFBTSxDQUFDLEtBQUt2SCxLQUFMLENBQVdaLENBQVgsQ0FBRCxDQUFkO0FBQ0FxRCxPQUFHLEdBQUdBLEdBQUcsQ0FBQ2dILEdBQUosQ0FBUWhKLENBQVIsQ0FBTjtBQUNEOztBQUNELFNBQU9nQyxHQUFQO0FBQ0QsQ0FQRDs7QUFTQXlELEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYStGLE1BQWIsR0FBc0IsWUFBVTtBQUM5QixTQUFPLEtBQUtDLFlBQUwsQ0FBa0J6RyxNQUFNLENBQUMsQ0FBRCxDQUF4QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQXJCLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYWlHLElBQWIsR0FBb0IsWUFBVTtBQUM1QixTQUFPLEtBQUtELFlBQUwsQ0FBa0J6RyxNQUFNLENBQUMsQ0FBRCxDQUF4QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQXJCLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYWdHLFlBQWIsR0FBNEIsVUFBU3RHLEVBQVQsRUFBWTtBQUN0QyxNQUFNMkYsR0FBRyxHQUFHOUYsTUFBTSxDQUFDLEdBQUQsQ0FBbEI7O0FBQ0EsTUFBR0csRUFBRSxDQUFDNUMsTUFBSCxFQUFILEVBQWU7QUFDYixXQUFPdUksR0FBUDtBQUNEOztBQUNELE1BQUczRixFQUFFLENBQUNrQixPQUFILENBQVd5RSxHQUFYLENBQUgsRUFBbUI7QUFDakIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBSWhCLEtBQUssR0FBR2dCLEdBQVo7QUFDQSxNQUFJak4sR0FBRyxHQUFHdUgsTUFBTSxDQUFDLElBQUQsQ0FBaEI7O0FBQ0EsU0FBTTBFLEtBQUssQ0FBQ2hELE9BQU4sQ0FBYzNCLEVBQWQsQ0FBTixFQUF3QjtBQUN0QnRILE9BQUcsR0FBRyxLQUFLd0wsY0FBTCxDQUFvQnhMLEdBQXBCLENBQU47QUFDQWlNLFNBQUssR0FBR0EsS0FBSyxDQUFDUSxJQUFOLEVBQVI7QUFDRDs7QUFDRCxTQUFPek0sR0FBUDtBQUNELENBZkQ7O0FBaUJBOEYsRUFBRSxDQUFDOEIsU0FBSCxDQUFhakosYUFBYixHQUE2QixZQUFVO0FBQ3JDLE1BQUcsS0FBS21LLGNBQUwsRUFBSCxFQUF5QjtBQUN2QixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFHLEtBQUtDLEtBQUwsTUFBZ0IsS0FBS3JFLE1BQUwsRUFBbkIsRUFBaUM7QUFDL0IsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBRyxLQUFLOEMsU0FBTCxPQUFxQixHQUF4QixFQUE0QjtBQUMxQixXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFJcEcsT0FBTyxHQUFHLEtBQUttSSxRQUFMLENBQWNwQyxNQUFNLENBQUMsQ0FBRCxDQUFwQixDQUFkO0FBQ0EsTUFBTThGLEdBQUcsR0FBRzlGLE1BQU0sQ0FBQyxDQUFELENBQWxCOztBQUNBLFNBQU0vRixPQUFPLENBQUM0SCxPQUFSLENBQWdCaUUsR0FBaEIsQ0FBTixFQUEyQjtBQUN6QixRQUFJcEcsQ0FBQyxHQUFHLEtBQUtwRSxRQUFMLENBQWNyQixPQUFkLENBQVI7O0FBQ0EsUUFBR3lGLENBQUMsQ0FBQy9ELFNBQUYsQ0FBWTRCLE1BQVosRUFBSCxFQUF3QjtBQUN0QixhQUFPLEtBQVA7QUFDRDs7QUFDRHRELFdBQU8sR0FBR0EsT0FBTyxDQUFDbUksUUFBUixDQUFpQnBDLE1BQU0sQ0FBQyxDQUFELENBQXZCLENBQVY7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDRCxDQXBCRDs7QUFzQkFyQixFQUFFLENBQUM4QixTQUFILENBQWEzRSxpQkFBYixHQUFpQyxZQUFVO0FBQ3pDLE1BQU1uRCxHQUFHLEdBQUcsS0FBSzZNLFdBQUwsRUFBWjtBQUNBLE1BQUl0TSxDQUFDLEdBQUc4RyxNQUFNLENBQUMsQ0FBRCxDQUFkOztBQUNBLE9BQUksSUFBSW5JLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR2MsR0FBRyxDQUFDUixNQUF2QixFQUErQk4sQ0FBQyxFQUFoQyxFQUFtQztBQUNqQ3FCLEtBQUMsR0FBR0EsQ0FBQyxDQUFDZ0osR0FBRixDQUFNdkosR0FBRyxDQUFDZCxDQUFELENBQVQsQ0FBSjtBQUNEOztBQUNELFNBQU9xQixDQUFQO0FBQ0QsQ0FQRDs7QUFTQXlGLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYTFFLGdCQUFiLEdBQWdDLFlBQVU7QUFDeEMsTUFBTWIsR0FBRyxHQUFHLEtBQUtZLGlCQUFMLEVBQVo7O0FBQ0EsTUFBR1osR0FBRyxDQUFDMkcsT0FBSixDQUFhLEtBQUt3QyxjQUFMLENBQW9CckUsTUFBTSxDQUFDLENBQUQsQ0FBMUIsQ0FBYixDQUFILEVBQWdEO0FBQzlDLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFSztBQUNILFdBQU8sS0FBUDtBQUNEO0FBQ0YsQ0FQRDs7QUFTQXJCLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYWtHLGlCQUFiLEdBQWlDLFlBQVU7QUFDekMsTUFBTXpMLEdBQUcsR0FBRyxLQUFLWSxpQkFBTCxFQUFaOztBQUNBLE1BQUdaLEdBQUcsQ0FBQzRHLE9BQUosQ0FBYSxLQUFLdUMsY0FBTCxDQUFvQnJFLE1BQU0sQ0FBQyxDQUFELENBQTFCLENBQWIsQ0FBSCxFQUFnRDtBQUM5QyxXQUFPLElBQVA7QUFDRCxHQUZELE1BRUs7QUFDSCxXQUFPLEtBQVA7QUFDRDtBQUNGLENBUEQ7O0FBU0FyQixFQUFFLENBQUM4QixTQUFILENBQWFtRyxlQUFiLEdBQStCLFlBQVU7QUFDdkMsTUFBTTFMLEdBQUcsR0FBRyxLQUFLWSxpQkFBTCxFQUFaOztBQUNBLE1BQUdaLEdBQUcsQ0FBQ2tILFFBQUosQ0FBYSxJQUFiLEVBQW1CZixPQUFuQixDQUEyQixJQUEzQixDQUFILEVBQW9DO0FBQ2xDLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFSztBQUNILFdBQU8sS0FBUDtBQUNEO0FBQ0YsQ0FQRDs7QUFTQTFDLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYW9HLFNBQWIsR0FBeUIsWUFBVTtBQUNqQyxNQUFJaE8sR0FBRyxHQUFHLElBQVY7QUFDQSxNQUFJb0IsT0FBTyxHQUFHLEtBQUttSSxRQUFMLENBQWNwQyxNQUFNLENBQUMsQ0FBRCxDQUFwQixDQUFkO0FBQ0EsTUFBTTZGLElBQUksR0FBRzdGLE1BQU0sQ0FBQyxDQUFELENBQW5COztBQUNBLFNBQU0vRixPQUFPLENBQUM0SCxPQUFSLENBQWdCZ0UsSUFBaEIsQ0FBTixFQUE0QjtBQUMxQmhOLE9BQUcsR0FBR0EsR0FBRyxDQUFDd0wsY0FBSixDQUFtQnBLLE9BQW5CLENBQU47QUFDQUEsV0FBTyxHQUFHQSxPQUFPLENBQUNtSSxRQUFSLENBQWlCcEMsTUFBTSxDQUFDLENBQUQsQ0FBdkIsQ0FBVjtBQUNEOztBQUNELFNBQU9uSCxHQUFQO0FBQ0QsQ0FURDs7QUFXQThGLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYXFHLGdCQUFiLEdBQWdDLFlBQVU7QUFDeEMsTUFBSTNMLEdBQUcsR0FBRzZFLE1BQU0sQ0FBQyxDQUFELENBQWhCO0FBQ0EsTUFBSW5ILEdBQUcsR0FBRyxJQUFWO0FBQ0EsTUFBSU8sQ0FBQyxHQUFHLElBQVI7O0FBQ0EsU0FBTUEsQ0FBTixFQUFRO0FBQ05QLE9BQUcsR0FBR0EsR0FBRyxDQUFDdUosUUFBSixDQUFhakgsR0FBYixDQUFOOztBQUNBLFFBQUd0QyxHQUFHLENBQUMwRSxNQUFKLEVBQUgsRUFBZ0I7QUFDZCxhQUFPLElBQVA7QUFDRDs7QUFDRCxRQUFHMUUsR0FBRyxDQUFDaUosT0FBSixDQUFZOUIsTUFBTSxDQUFDLENBQUQsQ0FBbEIsQ0FBSCxFQUEwQjtBQUN4QixhQUFPLEtBQVA7QUFDRDs7QUFDRDdFLE9BQUcsR0FBR0EsR0FBRyxDQUFDK0csR0FBSixDQUFRbEMsTUFBTSxDQUFDLENBQUQsQ0FBZCxDQUFOO0FBQ0Q7QUFDRixDQWREOztBQWdCQXJCLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYXNHLGtCQUFiLEdBQWtDLFlBQVU7QUFDMUMsU0FBTyxLQUFLQyxtQkFBTCxDQUF5QmhILE1BQU0sQ0FBQyxDQUFELENBQS9CLENBQVA7QUFDRCxDQUZEOztBQUlBckIsRUFBRSxDQUFDOEIsU0FBSCxDQUFhd0csZ0JBQWIsR0FBZ0MsWUFBVTtBQUN4QyxTQUFPLEtBQUtELG1CQUFMLENBQXlCaEgsTUFBTSxDQUFDLENBQUQsQ0FBL0IsQ0FBUDtBQUNELENBRkQ7O0FBSUFyQixFQUFFLENBQUM4QixTQUFILENBQWF1RyxtQkFBYixHQUFtQyxVQUFTdlAsQ0FBVCxFQUFXO0FBQzVDLE1BQUcsQ0FBQ3lJLElBQUksQ0FBQ3pJLENBQUQsQ0FBUixFQUFZO0FBQ1ZBLEtBQUMsR0FBR3VJLE1BQU0sQ0FBQ3ZJLENBQUQsQ0FBVjtBQUNEOztBQUNELE1BQUdBLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVTlCLE1BQU0sQ0FBQyxDQUFELENBQWhCLENBQUgsRUFBd0I7QUFDdEIsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsTUFBSWtILE9BQU8sR0FBR2xILE1BQU0sQ0FBQyxDQUFELENBQXBCO0FBQ0EsTUFBTXJILEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBSXdPLEtBQUssR0FBR0QsT0FBWjtBQUVBLE1BQU1FLFNBQVMsR0FBRzNQLENBQUMsQ0FBQzJLLFFBQUYsQ0FBV3BDLE1BQU0sQ0FBQyxDQUFELENBQWpCLENBQWxCOztBQUNBLFNBQU1rSCxPQUFPLENBQUNwRixPQUFSLENBQWdCeEIsU0FBUyxDQUFDM0ksR0FBMUIsQ0FBTixFQUFxQztBQUNuQ2dCLE9BQUcsQ0FBQ0MsSUFBSixDQUFTc08sT0FBVDtBQUNBQyxTQUFLLEdBQUdBLEtBQUssQ0FBQ2pGLEdBQU4sQ0FBVWtGLFNBQVYsQ0FBUjtBQUNBRixXQUFPLEdBQUdBLE9BQU8sQ0FBQ2hGLEdBQVIsQ0FBWWlGLEtBQVosQ0FBVjtBQUNEOztBQUNELFNBQU94TyxHQUFQO0FBQ0QsQ0FsQkQ7O0FBb0JBZ0csRUFBRSxDQUFDOEIsU0FBSCxDQUFhNEcsZUFBYixHQUErQixZQUFVO0FBQ3ZDLE1BQU1DLEdBQUcsR0FBR3RILE1BQU0sQ0FBQyxDQUFELENBQWxCO0FBQ0EsTUFBTXJILEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBSXVPLE9BQU8sR0FBR2xILE1BQU0sQ0FBQyxDQUFELENBQXBCO0FBQ0EsTUFBSXVILEVBQUUsR0FBR3ZILE1BQU0sQ0FBQyxDQUFELENBQWY7O0FBRUEsU0FBTWtILE9BQU8sQ0FBQ3BGLE9BQVIsQ0FBZ0J4QixTQUFTLENBQUMzSSxHQUExQixDQUFOLEVBQXFDO0FBQ25DdVAsV0FBTyxHQUFHSSxHQUFHLENBQUNiLFlBQUosQ0FBaUJjLEVBQWpCLEVBQXFCbkYsUUFBckIsQ0FBOEJwQyxNQUFNLENBQUMsQ0FBRCxDQUFwQyxDQUFWO0FBQ0FySCxPQUFHLENBQUNDLElBQUosQ0FBU3NPLE9BQVQ7QUFDQUssTUFBRSxHQUFHQSxFQUFFLENBQUNyRixHQUFILENBQU9sQyxNQUFNLENBQUMsQ0FBRCxDQUFiLENBQUw7QUFDRDs7QUFDRCxTQUFPckgsR0FBUDtBQUNELENBWkQ7O0FBY0FnRyxFQUFFLENBQUM4QixTQUFILENBQWErRyxvQkFBYixHQUFvQyxZQUFVO0FBQzVDLE1BQU1DLElBQUksR0FBRyxLQUFLSixlQUFMLEVBQWI7QUFDQSxNQUFNMU8sR0FBRyxHQUFHLEVBQVo7O0FBQ0EsT0FBSSxJQUFJZCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUc0UCxJQUFJLENBQUN0UCxNQUF4QixFQUFnQ04sQ0FBQyxFQUFqQyxFQUFvQztBQUNsQyxRQUFNSixDQUFDLEdBQUdnUSxJQUFJLENBQUM1UCxDQUFELENBQWQ7O0FBQ0EsUUFBR0osQ0FBQyxDQUFDRCxhQUFGLEVBQUgsRUFBcUI7QUFDbkJtQixTQUFHLENBQUNDLElBQUosQ0FBU25CLENBQVQ7QUFDRDtBQUNGOztBQUNELFNBQU9rQixHQUFQO0FBQ0QsQ0FWRDs7QUFZQWdHLEVBQUUsQ0FBQzhCLFNBQUgsQ0FBYWlILGdCQUFiLEdBQWdDLFlBQVU7QUFDeEMsTUFBTWpRLENBQUMsR0FBRyxJQUFWOztBQUNBLE1BQUdBLENBQUMsQ0FBQzhGLE1BQUYsRUFBSCxFQUFjO0FBQ1osV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBRzlGLENBQUMsQ0FBQ2tLLGNBQUYsRUFBSCxFQUFzQjtBQUNwQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFNZ0csRUFBRSxHQUFHLEtBQUtOLGVBQUwsRUFBWDs7QUFDQSxPQUFJLElBQUl4UCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUc4UCxFQUFFLENBQUN4UCxNQUF0QixFQUE4Qk4sQ0FBQyxFQUEvQixFQUFrQztBQUNoQyxRQUFJK1AsQ0FBQyxHQUFHRCxFQUFFLENBQUM5UCxDQUFELENBQVY7O0FBQ0EsUUFBRytQLENBQUMsQ0FBQ3ZHLE9BQUYsQ0FBVTVKLENBQVYsQ0FBSCxFQUFnQjtBQUNkLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBa0gsRUFBRSxDQUFDOEIsU0FBSCxDQUFhb0gscUJBQWIsR0FBcUMsWUFBVTtBQUM3QyxNQUFNcFEsQ0FBQyxHQUFHLElBQVY7O0FBQ0EsTUFBR0EsQ0FBQyxDQUFDOEYsTUFBRixFQUFILEVBQWM7QUFDWixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFHOUYsQ0FBQyxDQUFDa0ssY0FBRixFQUFILEVBQXNCO0FBQ3BCLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQU1nRyxFQUFFLEdBQUcsS0FBS0gsb0JBQUwsRUFBWDs7QUFDQSxPQUFJLElBQUkzUCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUc4UCxFQUFFLENBQUN4UCxNQUF0QixFQUE4Qk4sQ0FBQyxFQUEvQixFQUFrQztBQUNoQyxRQUFJK1AsQ0FBQyxHQUFHRCxFQUFFLENBQUM5UCxDQUFELENBQVY7O0FBQ0EsUUFBRytQLENBQUMsQ0FBQ3ZHLE9BQUYsQ0FBVTVKLENBQVYsQ0FBSCxFQUFnQjtBQUNkLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBa0gsRUFBRSxDQUFDOEIsU0FBSCxDQUFhekksTUFBYixHQUFzQixVQUFTQyxHQUFULEVBQWNMLEdBQWQsRUFBa0I7QUFDdEMsTUFBR0ssR0FBRyxLQUFLSSxTQUFYLEVBQXFCO0FBQ25CSixPQUFHLEdBQUcrSCxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQ0Q7O0FBQ0QsTUFBR3BJLEdBQUcsS0FBS1MsU0FBWCxFQUFxQjtBQUNuQlQsT0FBRyxHQUFHb0ksTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUNEOztBQUNELE1BQUcsQ0FBQ0UsSUFBSSxDQUFDakksR0FBRCxDQUFSLEVBQWM7QUFDWkEsT0FBRyxHQUFHK0gsTUFBTSxDQUFDL0gsR0FBRCxDQUFaO0FBQ0Q7O0FBQ0QsTUFBRyxDQUFDaUksSUFBSSxDQUFDdEksR0FBRCxDQUFSLEVBQWM7QUFDWkEsT0FBRyxHQUFHb0ksTUFBTSxDQUFDcEksR0FBRCxDQUFaO0FBQ0Q7O0FBRUQsTUFBTXdHLEdBQUcsR0FBR2pDLE1BQU0sQ0FBQzNELElBQUksQ0FBQ1IsTUFBTCxFQUFELENBQWxCO0FBQ0EsTUFBSThQLEdBQUo7O0FBRUEsTUFBRzFKLEdBQUcsS0FBSyxHQUFYLEVBQWU7QUFDYixRQUFHbkcsR0FBRyxDQUFDc0YsTUFBSixFQUFILEVBQWdCO0FBQ2R1SyxTQUFHLEdBQUc5SCxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQ0QsS0FGRCxNQUVLO0FBQ0g4SCxTQUFHLEdBQUc3UCxHQUFOO0FBQ0Q7QUFDRixHQU5ELE1BTUs7QUFDSCxRQUFJVSxHQUFHLEdBQUd5RixHQUFHLENBQUMxQixLQUFKLENBQVUsR0FBVixDQUFWO0FBQ0FvTCxPQUFHLEdBQUc5SCxNQUFNLENBQUMsT0FBT3JILEdBQUcsQ0FBQyxDQUFELENBQVgsQ0FBTixDQUFzQjBMLGNBQXRCLENBQXFDek0sR0FBckMsQ0FBTjtBQUNEOztBQUNELFNBQU9rUSxHQUFQO0FBQ0QsQ0E1QkQ7O0FBOEJlO0FBQ2I5SCxRQUFNLEVBQUVBLE1BREs7QUFFYkksUUFBTSxFQUFFQSxNQUZLO0FBR2JGLE1BQUksRUFBRUEsSUFITztBQUliNkgsS0FBRyxFQUFFelEsd0NBSlE7QUFLYnFILElBQUUsRUFBRUEsRUFMUztBQU1icUMsVUFBUSxFQUFFQTtBQU5HLENBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IE1BWCwgTUlOIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgeyBtYWtlU3UgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5jb25zdCBTID0ge307XG5jb25zdCBLID0ge307XG5cblxuY29uc3QgRklSU1RfUFJJTUVfTlVNQkVSID0gMjtcblxuUy5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFTLmlzTnVtYmVyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobiA9PT0gMCB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobiA9PT0gMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZihuID49IE1BWCl7XG4gICAgcmV0dXJuIGBBcmd1bWVudCBleGNlZWRzIG1heGltdW0gdmFsdWUoJHtNQVh9KWA7XG4gIH1cblxuICBjb25zdCBtYXggPSBuO1xuICBmb3IoIGxldCBpID0gbWF4IC0xOyBpID4gMTsgaS0tKXtcbiAgICBpZiggKG1heCAlIGkpID09PSAwICl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuUy5uZXh0TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFTLmlzTnVtYmVyKG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuICsrbjtcbn07XG5cblMucHJldk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiAtLW47XG59O1xuXG5LLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcblxuICBpZihtaW4gaW5zdGFuY2VvZiBBcnJheSAmJiBtaW4ubGVuZ3RoID4gMCl7XG4gICAgcmV0dXJuIEsucmFuZG9tRWxlbWVudChtaW4pO1xuICB9XG5cbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IDA7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IDE7XG4gIH1cblxuICBjb25zdCBsZW4gPSBtYXggLSBtaW47XG4gIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICByZXR1cm4gKCByYW5kICogbGVuICkgKyBtaW47XG59O1xuXG5LLnJhbmRvbUVsZW1lbnQgPSBmdW5jdGlvbihhcnJheSl7XG4gIGNvbnN0IGkgPSBLLnJhbmRvbSgwLCBhcnJheS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGFycmF5W2ldO1xufTtcblxuSy5yYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKCAhUy5pc051bWJlcihtaW4pIHx8ICFTLmlzTnVtYmVyKG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZihtaW4gPj0gbWF4KXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSsrKXtcbiAgICBhcnIucHVzaChpKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IEsucmFuZG9tRWxlbWVudChhcnIpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG5LLnByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBGSVJTVF9QUklNRV9OVU1CRVI7IGkgPCBNQVg7IGkrKyl7XG4gICAgaWYoUy5pc1ByaW1lTnVtYmVyKGkpKXtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuSy5maWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKHN0YXJ0KXtcbiAgaWYoc3RhcnQgPT09IHVuZGVmaW5lZCl7XG4gICAgc3RhcnQgPSAwO1xuICB9XG4gIGNvbnN0IGFyciA9IFtzdGFydCwgc3RhcnQgKyAxXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXSA+PSBNQVgpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IE51bWJlcihhcnJbYXJyLmxlbmd0aCAtIDJdKTtcbiAgICBjb25zdCBiID0gTnVtYmVyKGFyclthcnIubGVuZ3RoIC0gMV0pO1xuICAgIGFyci5wdXNoKE51bWJlcihhICsgYikpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5TLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPT09IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IGZpYiA9IEsuZmlib25hY2NpU2VxdWVuY2UoMCk7XG4gIGNvbnN0IGluZGV4ID0gZmliLmluZGV4T2Yobik7XG4gIGlmKGluZGV4ID49IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZiggUy5pc051bWJlcihuKSAmJiBuICUgMiA9PT0gMCApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCBTLmlzTnVtYmVyKG4pICYmIG4gJSAyICE9PSAwICl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbksuZGl2aXNvcnMgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKXtcbiAgICBpZihuICUgaSA9PT0gMCl7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLmNvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFycl9hID0gSy5kaXZpc29ycyhhKTtcbiAgaWYoYSA9PT0gYil7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gSy5kaXZpc29ycyhiKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBrID0gMDsgayA8IGFycl9hLmxlbmd0aDsgaysrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2tdO1xuICAgIGZvcihsZXQgbCA9IDA7IGwgPCBhcnJfYi5sZW5ndGg7IGwrKyl7XG4gICAgICBjb25zdCBlbG1fYiA9IGFycl9iW2xdO1xuICAgICAgaWYoZWxtX2EgPT09IGVsbV9iKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cbksubWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnIgPSBLLmNvbW1vbkRpdmlzb3JzKGEsIGIpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cbksubXVsdGlwbGUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBNQVg7IGkrKyl7XG4gICAgYXJyLnB1c2gobiAqIGkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5LLmxlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgbGV0IGJpZztcbiAgaWYoIGEgPCBiKXtcbiAgICBiaWcgPSBiO1xuICB9ZWxzZXtcbiAgICBiaWcgPSBhO1xuICB9XG4gIGNvbnN0IGFycl9hID0gW107XG4gIGNvbnN0IGFycl9iID0gW107XG5cbiAgbGV0IGkgPTE7XG4gIHdoaWxlKGkgPD0gYmlnKXtcbiAgICBhcnJfYS5wdXNoKCBhICogaSk7XG4gICAgaSsrO1xuICB9XG4gIGxldCBqID0xO1xuICB3aGlsZShqIDw9IGJpZyl7XG4gICAgYXJyX2IucHVzaCggYiAqIGopO1xuICAgIGorKztcbiAgfVxuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIHJldHVybiBlbG1fYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogS1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYOiAxMDAwMCxcbiAgTUlOOiAtMTAwMDAsXG4gIERCWjogXCJEaXZpc2lvbiBieSBaZXJvXCIsXG4gIE5BTjogXCJOb3QgYSBudW1iZXJcIixcbiAgTk9UU1U6IFwiQXJndW1lbnQgaXMgbm90IFN1LlwiXG59XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUuaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG4gICAgYXJyLnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29yZS5pc051bUFycmF5ID0gZnVuY3Rpb24oYXJyKXtcbiAgaWYoIGFyciBpbnN0YW5jZW9mIEFycmF5ICl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiggIXRoaXMuaXNOdW1iZXIoYXJyW2ldKSApe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IHMgZnJvbSBcIi4vc3UuanNcIjtcblxuKGZ1bmN0aW9uKGdsb2JhbCwgcyl7XG4gIGdsb2JhbC5zID0gcztcbn0pKGdsb2JhbCB8fCBzZWxmLCBzKTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgeyBLLCBTIH0gZnJvbSBcIi4vU0suanNcIjtcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5cbmltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcblxuY29uc3QgTUFYID0gY29uc3RhbnRzLk1BWDtcbmNvbnN0IE1JTiA9IGNvbnN0YW50cy5NSU47XG5jb25zdCBEQlogPSBjb25zdGFudHMuREJaO1xuY29uc3QgTkFOID0gY29uc3RhbnRzLk5BTjtcbmNvbnN0IE5PVFNVID0gY29uc3RhbnRzLk5PVFNVO1xuXG5jb25zdCBTdSA9IGZ1bmN0aW9uKG4sIG9wdGlvbil7XG4gIGlmKGlzTmFOKG4pKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuICBpZighbil7XG4gICAgbiA9IDA7XG4gIH1cbiAgaWYoIW9wdGlvbil7XG4gICAgb3B0aW9uID0ge307XG4gIH1cblxuICBsZXQgc3RyID0gU3RyaW5nKG4pO1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0gPT09IFwiLVwiKXtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCk7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIGlmKCFuZWdhdGl2ZSAmJiBvcHRpb24gJiYgb3B0aW9uLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihpc05hTihOdW1iZXIoc3RyKSkpe1xuICAgIHN0ciA9IFwiMFwiO1xuICB9XG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICBsZXQgaW50X3N0ciA9IHBhcnRzWzBdO1xuICBsZXQgZGVjaW1hbF9zdHIgPSBwYXJ0c1sxXTtcbiAgaWYoaW50X3N0cil7XG4gICAgY29uc3QgaW50MCA9IGludF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoaW50MCAmJiBpbnQwLmxlbmd0aCA9PT0gaW50X3N0ci5sZW5ndGgpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgbmV3X2ludF9zdHIgPSBcIlwiO1xuICAgIGxldCBzdGFydF96ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDxpbnRfc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKGludF9zdHJbaV0gIT09IFwiMFwiIHx8ICFzdGFydF96ZXJvKXtcbiAgICAgICAgc3RhcnRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfaW50X3N0ciArPSBpbnRfc3RyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2ludF9zdHIpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgaW50X3N0ciA9IG5ld19pbnRfc3RyO1xuICAgIH1cbiAgfVxuXG4gIGlmKGRlY2ltYWxfc3RyKXtcbiAgICBjb25zdCBkZWMwID0gZGVjaW1hbF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoZGVjMCAmJiBkZWMwLmxlbmd0aCA9PT0gZGVjaW1hbF9zdHIubGVuZ3RoKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBlbmRfemVybyA9IHRydWU7XG4gICAgbGV0IG5ld19kZWNpbWFsX3N0ciA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gZGVjaW1hbF9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgaWYoZGVjaW1hbF9zdHJbaV0gIT09IFwiMFwiIHx8ICFlbmRfemVybyl7XG4gICAgICAgIGVuZF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19kZWNpbWFsX3N0ciA9IGRlY2ltYWxfc3RyW2ldICsgbmV3X2RlY2ltYWxfc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2RlY2ltYWxfc3RyKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBkZWNpbWFsX3N0ciA9IG5ld19kZWNpbWFsX3N0cjtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBpbnRfYXJyO1xuICBsZXQgZGVjaW1hbF9hcnI7XG5cblxuICB0cnl7XG4gICAgaW50X2FyciA9IGNvcmUubnVtVG9BcnJheShpbnRfc3RyKTtcbiAgICBkZWNpbWFsX2FyciA9IGRlY2ltYWxfc3RyID8gY29yZS5udW1Ub0FycmF5KGRlY2ltYWxfc3RyKSA6IFswXTtcbiAgfWNhdGNoKGUpe1xuICAgIHRocm93IG5ldyBFcnJvcihOQU4pO1xuICB9XG5cbiAgdGhpcy5pbnRlZ2VyID0gaW50X2FycjtcbiAgdGhpcy5kZWNpbWFsID0gZGVjaW1hbF9hcnI7XG4gIHRoaXMubmVnYXRpdmUgPSBuZWdhdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgXG4gIGxldCBkZW5vbWluYXRvciA9IFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNpbWFsLmxlbmd0aDsgaSsrKXtcbiAgICBkZW5vbWluYXRvci5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5mcmFjdGlvbiA9IHtcbiAgICBudW1lcmF0b3I6IHRoaXMuaW50ZWdlci5jb25jYXQodGhpcy5kZWNpbWFsKSxcbiAgICBkZW5vbWluYXRvcjogZGVub21pbmF0b3JcbiAgfTtcblxufTtcblxuY29uc3QgbWFrZVN1ID0gZnVuY3Rpb24obnVtLCBvcHRpb24pe1xuICBsZXQgcmVzO1xuICB0cnl7XG4gICAgcmVzID0gbmV3IFN1KG51bSwgb3B0aW9uKTtcbiAgfWNhdGNoKGUpe1xuICAgIHJlcyA9IGUubWVzc2FnZTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG5cbn07XG5cbmNvbnN0IGlzU3UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKHN1IGluc3RhbmNlb2YgU3Upe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb3B5U3UgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IHN0ciA9IHN1LmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBDT05TVEFOVFMgPSB7XG4gIFpFUk86IG1ha2VTdSgwKSxcbiAgT05FOiBtYWtlU3UoMSksXG4gIEZJUlNUX1BSSU1FX05VTUJFUjogbWFrZVN1KDIpLFxuICBNQVg6IG1ha2VTdShNQVgpLFxuICBNSU46IG1ha2VTdShNSU4pXG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmUgPyBgLSR7c3RyfWAgOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgY29uc3QgX2EgPSBtYWtlU3UoYS5nZXRTdHJpbmcoKSk7XG4gIGNvbnN0IF9iID0gbWFrZVN1KGIuZ2V0U3RyaW5nKCkpO1xuXG4gIGlmKGFic29sdXRlKXtcbiAgICBfYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIF9iLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihfYS5pc1plcm8oKSAmJiBfYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgIV9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKF9hLmludGVnZXIubGVuZ3RoID4gX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EuaW50ZWdlci5sZW5ndGggPCBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IF9hLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IF9hLmludGVnZXJbaV07XG4gICAgbGV0IGVsbV9iID0gX2IuaW50ZWdlcltpXTtcbiAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gX2EuZGVjaW1hbC5sZW5ndGggPj0gX2IuZGVjaW1hbC5sZW5ndGggPyBfYS5kZWNpbWFsLmxlbmd0aCA6IF9iLmRlY2ltYWwubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgZWxtX2EgPSBfYS5kZWNpbWFsW2ldID8gX2EuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBfYi5kZWNpbWFsW2ldID8gX2IuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZihuZWdhdGl2ZSl7XG4gICAgZmllbGQgPSBbZmllbGRbMV0sIGZpZWxkWzBdXTtcbiAgfVxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkWzBdO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgaV9hID0gYS5pbnRlZ2VyO1xuICBjb25zdCBpX2IgPSBiLmludGVnZXI7XG4gIGNvbnN0IGRfYSA9IGEuZGVjaW1hbDtcbiAgY29uc3QgZF9iID0gYi5kZWNpbWFsO1xuXG4gIGNvbnN0IGxhcmdlID0gZ2V0TGFyZ2UoYSwgYik7XG5cbiAgaWYoIWxhcmdlKXtcbiAgICBpZihpX2EubGVuZ3RoID09PSBpX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpX2FbaV0gIT09IGlfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2UgaWYoZF9hLmxlbmd0aCA9PT0gZF9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZF9hW2ldICE9PSBkX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGEubmVnYXRpdmUgPT09IGIubmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuU3UucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaW50ZWdlci5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnRlZ2VyWzBdID09PSAwICYmICF0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09uZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjFcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTGFyZ2UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYS5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYi5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNQb3NpdGl2ZSgpICYmIHRoaXMuaXNJbnRlZ2VyKCkgJiYgdGhpcy5pc0xhcmdlKENPTlNUQU5UUy5aRVJPKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGRwX2EgPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBkcF9iID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCByZXNfYXJyID0gW107XG4gIGZvcihsZXQgaV9hID0gMDsgaV9hIDwgYV9pZC5sZW5ndGg7IGlfYSsrKXtcbiAgICBmb3IobGV0IGlfYiA9IDA7IGlfYiA8IGJfaWQubGVuZ3RoOyBpX2IrKyl7XG4gICAgICBjb25zdCBlbG1fYSA9IGFfaWRbaV9hXTtcbiAgICAgIGNvbnN0IGVsbV9iID0gYl9pZFtpX2JdO1xuICAgICAgY29uc3QgcG9zX2EgPSBkcF9hIC0gaV9hIC0xO1xuICAgICAgY29uc3QgcG9zX2IgPSBkcF9iIC0gaV9iIC0xO1xuICAgICAgY29uc3QgcG9zID0gcG9zX2EgKyBwb3NfYjtcbiAgICAgIGxldCByZXMgPSBlbG1fYSAqIGVsbV9iO1xuICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHBvcyk7XG4gICAgICBsZXQgc3RyO1xuICAgICAgaWYocG9zID49IDApe1xuICAgICAgICBsZW4rKztcbiAgICAgICAgaWYocmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiArIDEsIFwiMFwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobGVuID09PSAxICYmIHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpWzBdICsgXCIuXCIgKyBTdHJpbmcocmVzKVsxXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gXCIwLlwiICsgU3RyaW5nKHJlcykucGFkU3RhcnQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc19hcnIucHVzaChtYWtlU3Uoc3RyKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcyA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc19hcnIubGVuZ3RoOyBpKyspe1xuICAgIHJlcyA9IHJlcy5hZGQocmVzX2FycltpXSk7XG4gIH1cblxuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgQ09OU1RBTlRTLk1BWC5udW1iZXI7IGkrKyl7XG4gICAgYXJyLnB1c2godGhpcy5tdWx0aXBsaWNhdGlvbihpKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRMZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG5cbiAgY29uc3QgbWF4Q29tbW9uRGl2aXNvciA9IGEuZ2V0TWF4Q29tbW9uRGl2aXNvcihiKTtcblxuICBjb25zdCBtdWx0aSA9IGEubXVsdGlwbHkoYik7XG5cbiAgY29uc3QgcmVzID0gbXVsdGkuZGl2aXNpb24obWF4Q29tbW9uRGl2aXNvcik7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKXtcblxuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbemVybywgb25lXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZmlicyA9IHRoaXMuZmlib25hY2NpU2VxdWVuY2UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBmaWJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGZpYnNbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUubHVjYXNTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbbWFrZVN1KDIpLCBtYWtlU3UoMSldO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdLmlzTGFyZ2UoTUFYKSl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gYXJyW2Fyci5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBiID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjID0gYS5hZGQoYik7XG4gICAgYXJyLnB1c2goYyk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0x1Y2FzTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGx1Y3MgPSB0aGlzLmx1Y2FzU2VxdWVuY2UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsdWNzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGx1Y3NbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUubHVjYXNQcmltZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBscyA9IHRoaXMubHVjYXNTZXF1ZW5jZSgpO1xuICBjb25zdCBhcnIgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgbHMubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGwgPSBsc1tpXTtcbiAgICBpZihsLmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblxuU3UucHJvdG90eXBlLmdldFNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbdGhpc107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG0gPSBhcmd1bWVudHNbaV07XG4gICAgaWYoIWlzU3UoZWxtKSl7XG4gICAgICBlbG0gPSBtYWtlU3UoZWxtKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cblN1LnByb3RvdHlwZS5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldFNlcXVlbmNlKC4uLmFyZ3VtZW50cyk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIHN1bSA9IHN1bS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0U2VxdWVuY2UoLi4uYXJndW1lbnRzKTtcbiAgbGV0IGlwID0gYXJyWzBdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpcCA9IGlwLm11bHRpcGxpY2F0aW9uKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuU3UucHJvdG90eXBlLmRpZ2l0c3VtID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGxldCBhID0gbWFrZVN1KHRoaXMuYXJyYXlbaV0pO1xuICAgIHN1bSA9IHN1bS5hZGQoYSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDIpKTtcbn07XG5cblN1LnByb3RvdHlwZS5jdWJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgzKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBvbmUgPSBtYWtlU3UoXCIxXCIpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuICBpZihzdS5pc0VxdWFsKG9uZSkpe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGxldCBjb3VudCA9IG9uZTtcbiAgbGV0IHJlcyA9IGNvcHlTdSh0aGlzKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChzdSkpe1xuICAgIHJlcyA9IHRoaXMubXVsdGlwbGljYXRpb24ocmVzKTtcbiAgICBjb3VudCA9IGNvdW50Lm5leHQoKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuU3UucHJvdG90eXBlLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmlzT25lKCkgfHwgdGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMlwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2Uob25lKSl7XG4gICAgbGV0IGUgPSB0aGlzLmRpdmlzaW9uKGNvdW50ZXIpO1xuICAgIGlmKGUucmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0RGl2aXNvcnMoKTtcbiAgbGV0IGEgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgPSBhLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuU3UucHJvdG90eXBlLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc0xhcmdlKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNEZWZpY2llbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc1NtYWxsKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQZXJmZWN0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uc3VidHJhY3QodGhpcykuaXNFcXVhbCh0aGlzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmZhY3RvcmlhbCA9IGZ1bmN0aW9uKCl7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKHplcm8pKXtcbiAgICByZXMgPSByZXMubXVsdGlwbGljYXRpb24oY291bnRlcik7XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuU3UucHJvdG90eXBlLmlzVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBsZXQgZWxtID0gbWFrZVN1KDEpO1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGIgPSB0cnVlO1xuICB3aGlsZShiKXtcbiAgICByZXMgPSByZXMuc3VidHJhY3QoZWxtKTtcbiAgICBpZihyZXMuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmKHJlcy5pc1NtYWxsKG1ha2VTdSgwKSkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbG0gPSBlbG0uYWRkKG1ha2VTdSgxKSk7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5nZXRUcmlhbmdsZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5nZXRQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSgzKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0U3F1YXJlTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmdldFBvbHlnb25hbE51bWJlcnMobWFrZVN1KDQpKTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRQb2x5Z29uYWxOdW1iZXJzID0gZnVuY3Rpb24obil7XG4gIGlmKCFpc1N1KG4pKXtcbiAgICBuID0gbWFrZVN1KG4pO1xuICB9XG4gIGlmKG4uaXNTbWFsbChtYWtlU3UoMykpKXtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgcmFuZ2UgPSBjdXJyZW50O1xuXG4gIGNvbnN0IGluY3JlbWVudCA9IG4uc3VidHJhY3QobWFrZVN1KDIpKTtcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICByYW5nZSA9IHJhbmdlLmFkZChpbmNyZW1lbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LmFkZChyYW5nZSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5tZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCB0d28gPSBtYWtlU3UoMik7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY3VycmVudCA9IG1ha2VTdSgwKTtcbiAgbGV0IGV4ID0gbWFrZVN1KDEpO1xuICBcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBjdXJyZW50ID0gdHdvLmV4cG9uZW50aWF0ZShleCkuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICBleCA9IGV4LmFkZChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUubWVyc2VubmVQcmltZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBtYXJyID0gdGhpcy5tZXJzZW5uZU51bWJlcnMoKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBuID0gbWFycltpXTtcbiAgICBpZihuLmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChuKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IHRoaXMubWVyc2VubmVOdW1iZXJzKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gdGhpcy5tZXJzZW5uZVByaW1lTnVtYmVycygpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gbWFrZVN1KDApO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSBtYWtlU3UoMSk7XG4gIH1cbiAgaWYoIWlzU3UobWluKSl7XG4gICAgbWluID0gbWFrZVN1KG1pbik7XG4gIH1cbiAgaWYoIWlzU3UobWF4KSl7XG4gICAgbWF4ID0gbWFrZVN1KG1heCk7XG4gIH1cblxuICBjb25zdCBzdHIgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gIGxldCByYW47XG5cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgaWYobWluLmlzWmVybygpKXtcbiAgICAgIHJhbiA9IG1ha2VTdSgwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJhbiA9IG1pbjtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICAgIHJhbiA9IG1ha2VTdShcIjAuXCIgKyBhcnJbMV0pLm11bHRpcGxpY2F0aW9uKG1heCk7XG4gIH1cbiAgcmV0dXJuIHJhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWFrZVN1OiBtYWtlU3UsXG4gIGNvcHlTdTogY29weVN1LFxuICBpc1N1OiBpc1N1LFxuICBLZWk6IEssXG4gIFN1OiBTdSxcbiAgZ2V0TGFyZ2U6IGdldExhcmdlXG59OyJdLCJzb3VyY2VSb290IjoiIn0=