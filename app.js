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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJTIiwiSyIsIkZJUlNUX1BSSU1FX05VTUJFUiIsImlzUHJpbWVOdW1iZXIiLCJuIiwiaXNOdW1iZXIiLCJNQVgiLCJtYXgiLCJpIiwibmV4dE51bWJlciIsInByZXZOdW1iZXIiLCJyYW5kb20iLCJtaW4iLCJBcnJheSIsImxlbmd0aCIsInJhbmRvbUVsZW1lbnQiLCJ1bmRlZmluZWQiLCJsZW4iLCJyYW5kIiwiTWF0aCIsImFycmF5IiwicmFuZG9tSW50IiwiYXJyIiwicHVzaCIsInJlcyIsInByaW1lTnVtYmVycyIsImZpYm9uYWNjaVNlcXVlbmNlIiwic3RhcnQiLCJmdW5jIiwiYSIsIk51bWJlciIsImIiLCJpc0ZpYm9uYWNjaU51bWJlciIsImZpYiIsImluZGV4IiwiaW5kZXhPZiIsImlzRXZlbk51bWJlciIsImlzT2RkTnVtYmVyIiwiZGl2aXNvcnMiLCJldWNsaWRlYW5BbGdvcml0aG0iLCJ0ZW1wIiwiYXRlbXAiLCJidGVtcCIsImN0ZW1wIiwiY291bnRlciIsImNvcHJpbWUiLCJjb21tb25EaXZpc29ycyIsImFycl9hIiwiYXJyX2IiLCJkaXZzIiwiayIsImVsbV9hIiwibCIsImVsbV9iIiwibWF4Q29tbW9uRGl2aXNvciIsIm11bHRpcGxlIiwibGVhc3RDb21tb25NdWx0aXBsZSIsImJpZyIsImoiLCJzdW1tYXRpb24iLCJhcmd1bWVudHMiLCJzdW0iLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwiaW50ZWdlciIsInJlbWFpbmRlciIsImZsb29yIiwicmVhbE51bWJlciIsImRpdmlzb3JzU3VtbWF0aW9uIiwiaXNBYnVuZGFudE51bWJlciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQSIsIm51bSIsInMiLCJTdHJpbmciLCJmaXJzdF9sZW4iLCJhZnRlcl9sZW4iLCJmaXJzdCIsImFmdGVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic3BsaXQiLCJzb3J0Iiwiam9pbiIsInJldmVyc2UiLCJpc0thcHJla2FyTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZiIsImhhcm1vbmljTWVhbiIsImlzSGFybW9uaWNEaXZpc29yTnVtYmVyIiwiaXNOYXR1cmFsTnVtYmVyIiwiY29sbGF0emhQcm9ibGVtIiwiY2FsYyIsImZlcm1hdFRlc3QiLCJpc1plcm8iLCJwb3ciLCJnZXRJbmNsdWRlc051bWJlcnMiLCJib29sIiwiYXIiLCJNSU4iLCJEQloiLCJOQU4iLCJOT1RTVSIsImNvcmUiLCJpc05hTiIsIk5hTiIsIm51bVRvQXJyYXkiLCJzdHIiLCJzbGljZSIsIkVycm9yIiwiaXNOdW1BcnJheSIsImdsb2JhbCIsInNlbGYiLCJjb25zdGFudHMiLCJTdSIsIm9wdGlvbiIsIm5lZ2F0aXZlIiwicGFydHMiLCJpbnRfc3RyIiwiZGVjaW1hbF9zdHIiLCJpbnQwIiwibWF0Y2giLCJuZXdfaW50X3N0ciIsInN0YXJ0X3plcm8iLCJkZWMwIiwiZW5kX3plcm8iLCJuZXdfZGVjaW1hbF9zdHIiLCJpbnRfYXJyIiwiZGVjaW1hbF9hcnIiLCJkZWNpbWFsIiwiZGVub21pbmF0b3IiLCJmcmFjdGlvbiIsIm51bWVyYXRvciIsImNvbmNhdCIsIm1ha2VTdSIsImUiLCJtZXNzYWdlIiwiaXNTdSIsInN1IiwiY29weVN1IiwiZ2V0U3RyaW5nIiwiQ09OU1RBTlRTIiwiWkVSTyIsIk9ORSIsInByb3RvdHlwZSIsImFjIiwicmVkdWNlIiwiZ2V0TnVtYmVyIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpc0VxdWFsIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwibGFyZ2UiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNMYXJnZSIsImlzU21hbGwiLCJpc1Bvc2l0aXZlIiwiaXNOZWdhdGl2ZSIsInYiLCJhZGQiLCJtYWtlUG9zaXRpdmUiLCJzdWJ0cmFjdCIsImludF9hIiwiZGVjX2EiLCJpbnRfYiIsImRlY19iIiwibGVuX2kiLCJsZW5fZCIsIm92ZXIiLCJpbnRfcmVzIiwiZGVjX3JlcyIsIl9yZXMiLCJ1bnNoaWZ0IiwiZCIsInBvcCIsImdhcCIsIm5lZ2F0ZSIsImFfaWQiLCJiX2lkIiwiYV9pX2xlbiIsImJfaV9sZW4iLCJhX2RfbGVuIiwiYl9kX2xlbiIsImRfZ2FwIiwiYWJzIiwiZGVidCIsInJlc19hcnJheSIsImFfZWxtIiwiYl9lbG0iLCJzcGxpY2UiLCJtaW51cyIsIm51bWJlciIsIm5ldmF0aXZlIiwibWFrZU5lZ2F0aXZlIiwibXVsdGlwbGljYXRpb24iLCJkcF9hIiwiZHBfYiIsInJlc19hcnIiLCJwb3NfYSIsInBvc19iIiwicG9zIiwicGFkRW5kIiwicGFkU3RhcnQiLCJjb3VudCIsInJlbWFpbiIsInBsdXMiLCJ0YXN1IiwiaGlrdSIsIm11bHRpcGx5Iiwia2FrZXJ1Iiwid2FydSIsIm5leHQiLCJwcmV2IiwiZ2V0RGl2aXNvcnMiLCJnZXRDb21tb25EaXZpc29ycyIsImdldE1heENvbW1vbkRpdmlzb3IiLCJnZXRMZWFzdENvbW1vbk11bHRpcGxlIiwibXVsdGkiLCJ6ZXJvIiwib25lIiwiYyIsImZpYnMiLCJsdWNhc1NlcXVlbmNlIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJsdWNhc1ByaW1lTnVtYmVycyIsImxzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsImlzVHJpYW5nbGVOdW1iZXIiLCJnZXRUcmlhbmdsZU51bWJlcnMiLCJnZXRQb2x5Z29uYWxOdW1iZXJzIiwiZ2V0U3F1YXJlTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciIsInJhbiIsIktlaSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFB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QThCZTtBQUNiL0gsUUFBTSxFQUFFQSxNQURLO0FBRWJLLFFBQU0sRUFBRUEsTUFGSztBQUdiRixNQUFJLEVBQUVBLElBSE87QUFJYjZILEtBQUcsRUFBRXpRLHdDQUpRO0FBS2JxSCxJQUFFLEVBQUVBLEVBTFM7QUFNYnFDLFVBQVEsRUFBRUE7QUFORyxDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBNQVgsIE1JTiB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0IHsgbWFrZVN1IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgUyA9IHt9O1xuY29uc3QgSyA9IHt9O1xuXG5cbmNvbnN0IEZJUlNUX1BSSU1FX05VTUJFUiA9IDI7XG5cblMuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4gPT09IDAgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4gPT09IDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYobiA+PSBNQVgpe1xuICAgIHJldHVybiBgQXJndW1lbnQgZXhjZWVkcyBtYXhpbXVtIHZhbHVlKCR7TUFYfSlgO1xuICB9XG5cbiAgY29uc3QgbWF4ID0gbjtcbiAgZm9yKCBsZXQgaSA9IG1heCAtMTsgaSA+IDE7IGktLSl7XG4gICAgaWYoIChtYXggJSBpKSA9PT0gMCApe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblMubmV4dE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiArK247XG59O1xuXG5TLnByZXZOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIVMuaXNOdW1iZXIobikpe1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gLS1uO1xufTtcblxuSy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYobWluIGluc3RhbmNlb2YgQXJyYXkgJiYgbWluLmxlbmd0aCA+IDApe1xuICAgIHJldHVybiBLLnJhbmRvbUVsZW1lbnQobWluKTtcbiAgfVxuXG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSAwO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSAxO1xuICB9XG5cbiAgY29uc3QgbGVuID0gbWF4IC0gbWluO1xuICBjb25zdCByYW5kID0gTWF0aC5yYW5kb20oKTtcbiAgcmV0dXJuICggcmFuZCAqIGxlbiApICsgbWluO1xufTtcblxuSy5yYW5kb21FbGVtZW50ID0gZnVuY3Rpb24oYXJyYXkpe1xuICBjb25zdCBpID0gSy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBhcnJheVtpXTtcbn07XG5cbksucmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZiggIVMuaXNOdW1iZXIobWluKSB8fCAhUy5pc051bWJlcihtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYobWluID49IG1heCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKyl7XG4gICAgYXJyLnB1c2goaSk7XG4gIH1cblxuICBjb25zdCByZXMgPSBLLnJhbmRvbUVsZW1lbnQoYXJyKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuSy5wcmltZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgTUFYOyBpKyspe1xuICAgIGlmKFMuaXNQcmltZU51bWJlcihpKSl7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbksuZmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihzdGFydCl7XG4gIGlmKHN0YXJ0ID09PSB1bmRlZmluZWQpe1xuICAgIHN0YXJ0ID0gMDtcbiAgfVxuICBjb25zdCBhcnIgPSBbc3RhcnQsIHN0YXJ0ICsgMV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0gPj0gTUFYKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAyXSk7XG4gICAgY29uc3QgYiA9IE51bWJlcihhcnJbYXJyLmxlbmd0aCAtIDFdKTtcbiAgICBhcnIucHVzaChOdW1iZXIoYSArIGIpKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuUy5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID09PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBmaWIgPSBLLmZpYm9uYWNjaVNlcXVlbmNlKDApO1xuICBjb25zdCBpbmRleCA9IGZpYi5pbmRleE9mKG4pO1xuICBpZihpbmRleCA+PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIFMuaXNOdW1iZXIobikgJiYgbiAlIDIgPT09IDAgKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc09kZE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZiggUy5pc051bWJlcihuKSAmJiBuICUgMiAhPT0gMCApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5LLmRpdmlzb3JzID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDw9IG47IGkrKyl7XG4gICAgaWYobiAlIGkgPT09IDApe1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg6bjg7zjgq/jg6rjg4Pjg4njga7kupLpmaTms5VcbksuZXVjbGlkZWFuQWxnb3JpdGhtID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhUy5pc051bWJlcihhKSB8fCAhUy5pc051bWJlcihiKSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKCBhID09PSBiKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCB0ZW1wO1xuICBpZiggYSA8IGIpe1xuICAgIHRlbXAgPSBhO1xuICAgIGEgPSBiO1xuICAgIGIgPSB0ZW1wO1xuICB9XG5cbiAgbGV0IGF0ZW1wID0gYTtcbiAgbGV0IGJ0ZW1wID0gYjtcbiAgbGV0IGN0ZW1wO1xuICBsZXQgcmVzO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGNvcHJpbWUgPSBcImNvcHJpbWVcIjtcbiAgd2hpbGUoY3RlbXAgIT09MCl7XG4gICAgY3RlbXAgPSBhdGVtcCAlIGJ0ZW1wO1xuICAgIGlmKGN0ZW1wID09PSAwKXtcbiAgICAgIHJlcyA9IGJ0ZW1wO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGN0ZW1wID09PSAxKXtcbiAgICAgIHJlcyA9IGNvcHJpbWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY291bnRlciA+PSBNQVgpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGF0ZW1wID0gYnRlbXA7XG4gICAgYnRlbXAgPSBjdGVtcDtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuSy5jb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZihhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnJfYSA9IEsuZGl2aXNvcnMoYSk7XG4gIGlmKGEgPT09IGIpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IEsuZGl2aXNvcnMoYik7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5LLm1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyID0gSy5jb21tb25EaXZpc29ycyhhLCBiKTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5LLm11bHRpcGxlID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgTUFYOyBpKyspe1xuICAgIGFyci5wdXNoKG4gKiBpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuSy5sZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGxldCBiaWc7XG4gIGlmKCBhIDwgYil7XG4gICAgYmlnID0gYjtcbiAgfWVsc2V7XG4gICAgYmlnID0gYTtcbiAgfVxuICBjb25zdCBhcnJfYSA9IFtdO1xuICBjb25zdCBhcnJfYiA9IFtdO1xuXG4gIGxldCBpID0xO1xuICB3aGlsZShpIDw9IGJpZyl7XG4gICAgYXJyX2EucHVzaCggYSAqIGkpO1xuICAgIGkrKztcbiAgfVxuICBsZXQgaiA9MTtcbiAgd2hpbGUoaiA8PSBiaWcpe1xuICAgIGFycl9iLnB1c2goIGIgKiBqKTtcbiAgICBqKys7XG4gIH1cblxuICBmb3IobGV0IGsgPSAwOyBrIDwgYXJyX2EubGVuZ3RoOyBrKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2Fba107XG4gICAgZm9yKGxldCBsID0gMDsgbCA8IGFycl9iLmxlbmd0aDsgbCsrKXtcbiAgICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbbF07XG4gICAgICBpZihlbG1fYSA9PT0gZWxtX2Ipe1xuICAgICAgICByZXR1cm4gZWxtX2E7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5LLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgfVxuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2pdO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBzdW0gKz0gZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuSy5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBlbXB0eS5cIjtcbiAgfVxuICBsZXQgaXAgPSAxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2ldO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpcCA9IGlwICogZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IGEgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBpcDtcbn07XG5cbksuZGl2aXNpb24gPSBmdW5jdGlvbihkaXZpZGVuZCwgZGl2aXNvcil7XG4gIGlmKGRpdmlkZW5kID09PSB1bmRlZmluZWQgfHwgZGl2aXNvciA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gZGl2aWRlbmQgLyBkaXZpc29yO1xuICByZXR1cm4ge1xuICAgIGludGVnZXI6IHtcbiAgICAgIHJlbWFpbmRlcjogZGl2aWRlbmQgJSBkaXZpc29yLFxuICAgICAgcmVzdWx0OiBNYXRoLmZsb29yKHJlc3VsdClcbiAgICB9LFxuICAgIHJlYWxOdW1iZXI6IHJlc3VsdFxuICB9O1xufTtcblxuSy5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBsZXQgYSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgKz0gYXJyW2ldO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuSy5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHN1bSA9IEsuZGl2aXNvcnNTdW1tYXRpb24obik7XG4gIGlmKHN1bSA+IG4gKiAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBuICogbjtcbiAgY29uc3QgcyA9IFN0cmluZyhudW0pO1xuICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcbiAgbGV0IGZpcnN0X2xlbiA9IDA7XG4gIGxldCBhZnRlcl9sZW4gPSAwO1xuICBsZXQgZmlyc3QsIGFmdGVyO1xuICBpZihTLmlzT2RkTnVtYmVyKGxlbikpe1xuICAgIGZpcnN0X2xlbiA9IChsZW4gLSAxKSAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuICsgMTtcbiAgfWVsc2V7XG4gICAgZmlyc3RfbGVuID0gbGVuIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW47XG4gIH1cbiAgZmlyc3QgPSBOdW1iZXIocy5zdWJzdHIoMCwgZmlyc3RfbGVuKSk7XG4gIGFmdGVyID0gTnVtYmVyKHMuc3Vic3RyKGZpcnN0X2xlbiwgYWZ0ZXJfbGVuKSk7XG5cbiAgaWYoKCBmaXJzdCArIGFmdGVyICkgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVCID0gZnVuY3Rpb24obil7XG5cbiAgY29uc3QgYXJyID0gU3RyaW5nKG4pLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IG1pbiA9IE51bWJlcihhcnIuc29ydCgpLmpvaW4oXCJcIikpO1xuICBjb25zdCBtYXggPSBOdW1iZXIoYXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcblxuICBpZigobWF4IC0gbWluKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKEsuaXNLYXByZWthck51bWJlclR5cGVBKG4pIHx8IEsuaXNLYXByZWthck51bWJlclR5cGVCKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgZiA9IE1hdGguZmxvb3Iobik7XG4gIGlmKCBmID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyDoqr/lkozlubPlnYdcbksuaGFybW9uaWNNZWFuID0gZnVuY3Rpb24oYXJyKXtcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgc3VtICs9IDEgLyBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGxlbiAvIHN1bTtcbn07XG5cbi8vIOiqv+WSjOaVsOOBi+OBqeOBhuOBi1xuSy5pc0hhcm1vbmljRGl2aXNvck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBjb25zdCByZXMgPSBLLmhhcm1vbmljTWVhbihhcnIpO1xuICBpZihTLmlzSW50ZWdlcihyZXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID4gMCAmJiBTLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuSy5jb2xsYXR6aFByb2JsZW0gPSBmdW5jdGlvbihudW0pe1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihuKXtcbiAgICBsZXQgcmVzID0gbjtcbiAgICBpZihTLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gKiAzICsgMTtcbiAgICB9ZWxzZSBpZihTLmlzRXZlbk51bWJlcihuKSl7XG4gICAgICByZXMgPSBuIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB3aGlsZShudW0gPiAxKXtcbiAgICBudW0gPSBjYWxjKG51bSk7XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44OV44Kn44Or44Oe44O844OG44K544OIXG4vLyBKU+OBruaJseOBiOOCi+evhOWbsuOCkui2heOBiOOBpuOBhOOBpuOBhuOBvuOBj+WLleOBi+OBmlxuSy5mZXJtYXRUZXN0ID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIVMuaXNJbnRlZ2VyKG4pIHx8IFMuaXNaZXJvKG4pIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnMuIFwiICsgbiArIFwiIGlzIGluY29ycmVjdCBwYXJhbWV0ZXIuXCI7XG4gIH1cblxuICBpZighbWF4KXtcbiAgICBtYXggPSAxMDA7XG4gIH1cblxuICBmb3IobGV0IGkgPSAxOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBhID0gSy5yYW5kb21JbnQoMiwgbiAtIDEpO1xuICAgIGlmKEsubWF4Q29tbW9uRGl2aXNvcihhLCBuKSAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gTWF0aC5wb3coYSwgbiAtIDEpICUgbjtcbiAgICBpZihyZXMgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIk1heWJlIFByaW1lIE51bWJlclwiO1xufTtcblxuLy8g57WE44G/5ZCI44KP44Gb5pWw44Gu6KiI566XXG4vLyBLLmNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGFycil7XG4vLyB9O1xuXG4vLyAzID0+IFswLCAzXSwgWzEsIDJdLCBbMiwgMV0sIFszLCAwXVxuSy5nZXRJbmNsdWRlc051bWJlcnMgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHRlbXAgPSBudW07XG4gIGxldCBib29sID0gdHJ1ZTtcbiAgd2hpbGUoYm9vbCl7XG4gICAgY29uc3QgYSA9IHRlbXA7XG4gICAgY29uc3QgYiA9IG51bSAtdGVtcDtcbiAgICBjb25zdCBhciA9IFthLGJdO1xuICAgIGFyci5wdXNoKGFyKTtcbiAgICB0ZW1wID0gdGVtcCAtMTtcbiAgICBpZih0ZW1wIDwgMCl7XG4gICAgICBib29sID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFM6IFMsXG4gIEs6IEtcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWDogMTAwMDAsXG4gIE1JTjogLTEwMDAwLFxuICBEQlo6IFwiRGl2aXNpb24gYnkgWmVyb1wiLFxuICBOQU46IFwiTm90IGEgbnVtYmVyXCIsXG4gIE5PVFNVOiBcIkFyZ3VtZW50IGlzIG5vdCBTdS5cIlxufVxuIiwiY29uc3QgY29yZSA9IHt9O1xuXG5jb3JlLmlzTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKXtcbiAgaWYoIG4gPT09IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vLyDphY3liJfjgafjga7oqIjnrpdcbmNvcmUubnVtVG9BcnJheSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKG4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IE51bWJlcihzdHIuc2xpY2UoaSwgaSArIDEpKTtcbiAgICBpZighdGhpcy5pc051bWJlcihlbG0pKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIik7XG4gICAgfVxuICAgIGFyci5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBzIGZyb20gXCIuL3N1LmpzXCI7XG5cbihmdW5jdGlvbihnbG9iYWwsIHMpe1xuICBnbG9iYWwucyA9IHM7XG59KShnbG9iYWwgfHwgc2VsZiwgcyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgSywgUyB9IGZyb20gXCIuL1NLLmpzXCI7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IE1BWCA9IGNvbnN0YW50cy5NQVg7XG5jb25zdCBNSU4gPSBjb25zdGFudHMuTUlOO1xuY29uc3QgREJaID0gY29uc3RhbnRzLkRCWjtcbmNvbnN0IE5BTiA9IGNvbnN0YW50cy5OQU47XG5jb25zdCBOT1RTVSA9IGNvbnN0YW50cy5OT1RTVTtcblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZihpc05hTihuKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FyciA9IGNvcmUubnVtVG9BcnJheShpbnRfc3RyKTtcbiAgbGV0IGRlY2ltYWxfYXJyID0gZGVjaW1hbF9zdHIgPyBjb3JlLm51bVRvQXJyYXkoZGVjaW1hbF9zdHIpIDogWzBdO1xuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgbGV0IHJlcztcbiAgdHJ5e1xuICAgIHJlcyA9IG5ldyBTdShudW0sIG9wdGlvbik7XG4gIH1jYXRjaChlKXtcbiAgICByZXMgPSBlLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuU3UucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdHIgPSBTdHJpbmcoIHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgY29uc3QgYWMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKChhLGUpID0+IGEgKyBlKTtcbiAgaWYoYWMgIT09IDApe1xuICAgIHN0ciArPSBcIi5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLm5lZ2F0aXZlID8gYC0ke3N0cn1gIDogc3RyO1xufTtcblxuU3UucHJvdG90eXBlLmdldE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmdldFN0cmluZygpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXREZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKFwiMC5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldExhcmdlID0gZnVuY3Rpb24oYSwgYiwgYWJzb2x1dGUgPSBmYWxzZSl7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGxldCBmaWVsZCA9IFtdO1xuXG4gIGNvbnN0IF9hID0gbWFrZVN1KGEuZ2V0U3RyaW5nKCkpO1xuICBjb25zdCBfYiA9IG1ha2VTdShiLmdldFN0cmluZygpKTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgX2EubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBfYi5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYoX2EuaXNaZXJvKCkgJiYgX2IuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmICFfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGI7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihfYS5pbnRlZ2VyLmxlbmd0aCA+IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLmludGVnZXIubGVuZ3RoIDwgX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBfYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBfYS5pbnRlZ2VyW2ldO1xuICAgIGxldCBlbG1fYiA9IF9iLmludGVnZXJbaV07XG4gICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIGNvbnN0IGxlbiA9IF9hLmRlY2ltYWwubGVuZ3RoID49IF9iLmRlY2ltYWwubGVuZ3RoID8gX2EuZGVjaW1hbC5sZW5ndGggOiBfYi5kZWNpbWFsLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGVsbV9hID0gX2EuZGVjaW1hbFtpXSA/IF9hLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgbGV0IGVsbV9iID0gX2IuZGVjaW1hbFtpXSA/IF9iLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZFswXTtcblxufTtcblxuXG5TdS5wcm90b3R5cGUuaXNFcXVhbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGEuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1NtYWxsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGIuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzUG9zaXRpdmUoKSAmJiB0aGlzLmlzSW50ZWdlcigpICYmIHRoaXMuaXNMYXJnZShDT05TVEFOVFMuWkVSTykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuY29udGFpbkRlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKGZ1bmN0aW9uKGEsIHYpe1xuICAgICAgcmV0dXJuIGEgKyB2O1xuICB9KTtcbiAgaWYocmVzID09PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cbiAgbGV0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGxldCBiID0gc3UuY2xvbmUoKTtcbiAgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgbmVnYXRpdmU7XG4gIGlmKGEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSBmYWxzZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgYi5uZWdhdGl2ZSl7XG4gICAgYi5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYS5zdWJ0cmFjdChiKTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSAmJiAhYi5uZWdhdGl2ZSl7XG4gICAgYS5tYWtlUG9zaXRpdmUoKTtcbiAgICByZXR1cm4gYi5zdWJ0cmFjdChhKTtcbiAgfVxuXG4gIGxldCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmVzID0gYTtcbiAgfVxuICBsZXQgaW50X2EgPSByZXMuaW50ZWdlcjtcbiAgbGV0IGRlY19hID0gcmVzLmRlY2ltYWw7XG4gIGxldCBpbnRfYiwgZGVjX2I7XG4gIGlmKHJlcyA9PT0gYSl7XG4gICAgaW50X2IgPSBiLmludGVnZXI7XG4gICAgZGVjX2IgPSBiLmRlY2ltYWw7XG4gIH1lbHNle1xuICAgIGludF9iID0gYS5pbnRlZ2VyO1xuICAgIGRlY19iID0gYS5kZWNpbWFsO1xuICB9XG5cbiAgbGV0IGxlbl9pID0gaW50X2EubGVuZ3RoO1xuICBsZXQgbGVuX2QgPSBkZWNfYS5sZW5ndGg7XG5cbiAgaWYoZGVjX2IubGVuZ3RoID4gZGVjX2EubGVuZ3RoKXtcbiAgICBsZW5fZCA9IGRlY19iLmxlbmd0aDtcbiAgfVxuICBsZXQgb3ZlciA9IDAsXG4gICAgICBpbnRfcmVzID0gW10sXG4gICAgICBkZWNfcmVzID0gW107XG5cbiAgZm9yKGxldCBpID0gbGVuX2QgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gZGVjX2FbaV0gfHwgMDtcbiAgICBsZXQgZWxtX2IgPSBkZWNfYltpXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBkZWNfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cblxuICBmb3IobGV0IGkgPSBkZWNfcmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICl7XG4gICAgbGV0IGQgPSBkZWNfcmVzW2ldO1xuICAgIGlmKGQgPT09IDApe1xuICAgICAgZGVjX3Jlcy5wb3AoKTtcbiAgICB9ZWxzZXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdhcCA9IGxlbl9pIC0gaW50X2IubGVuZ3RoO1xuICBmb3IobGV0IGkgPSBsZW5faSAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBpbnRfYVtpXTtcbiAgICBsZXQgZWxtX2IgPSBpbnRfYltpIC0gZ2FwXSB8fCAwO1xuICAgIF9yZXMgPSBlbG1fYSArIGVsbV9iICsgb3ZlcjtcbiAgICBpZihfcmVzID49IDEwKXtcbiAgICAgIG92ZXIgPSAxO1xuICAgICAgX3JlcyA9IF9yZXMgLSAxMDtcbiAgICB9ZWxzZXtcbiAgICAgIG92ZXIgPSAwO1xuICAgIH1cbiAgICBpbnRfcmVzLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGludF9yZXMudW5zaGlmdChvdmVyKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IG1ha2VTdShpbnRfcmVzLmpvaW4oXCJcIikgKyBcIi5cIiArIGRlY19yZXMuam9pbihcIlwiKSwge25lZ2F0aXZlOiBuZWdhdGl2ZX0pO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcblxuICBjb25zdCByZXN1bHQgPSAgbWFrZVN1KG1pbnVzICsgcmVzX2FycmF5LmpvaW4oXCJcIikpO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHRoaXMubmV2YXRpdmUgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZVBvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZU5lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuXG4gIGlmKGEuaXNaZXJvKCkgJiYgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIE5BTjtcbiAgfWVsc2UgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfWVsc2UgaWYoYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIERCWjtcbiAgfVxuXG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgbGV0IGNvdW50ID0gbWFrZVN1KDApO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICB3aGlsZShhLmlzTGFyZ2Uoc3VtKSB8fCBhLmlzRXF1YWwoc3VtKSl7XG4gICAgY291bnQgPSBjb3VudC5hZGQobWFrZVN1KDEpKTtcbiAgICBzdW0gPSBiLm11bHRpcGxpY2F0aW9uKGNvdW50KTtcbiAgfVxuXG4gIGNvdW50ID0gY291bnQuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgc3VtID0gc3VtLnN1YnRyYWN0KGIpO1xuICBjb25zdCByZW1haW4gPSBhLnN1YnRyYWN0KHN1bSk7XG4gIGNvbnN0IHJlcyA9IGNvdW50O1xuICByZXMucmVtYWluZGVyID0gcmVtYWluO1xuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuU3UucHJvdG90eXBlLnBsdXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUudGFzdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5taW51cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmhpa3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLmtha2VydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMubXVsdGlwbGljYXRpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLndhcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmRpdmlzaW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuYWRkKG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNFdmVuTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBcbiAgaWYoIHJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09kZE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIGlmKCAhcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldERpdmlzb3JzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IHRoaXMuaXNMYXJnZShtYWtlU3UoaSkpOyBpKyspe1xuICAgIGxldCBzdSA9IG1ha2VTdShpKTtcbiAgICBjb25zdCByZW1haW5kZXIgPSB0aGlzLmRpdmlzaW9uKHN1KS5yZW1haW5kZXI7XG4gICAgaWYocmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgYXJyLnB1c2godGhpcyk7XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0Q29tbW9uRGl2aXNvcnMgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgbGV0IGEgPSB0aGlzO1xuICBsZXQgYiA9IHN1O1xuXG4gIGNvbnN0IGFycl9hID0gYS5nZXREaXZpc29ycygpO1xuICBpZihhLmlzRXF1YWwoYikpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IGIuZ2V0RGl2aXNvcnMoKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGFycl9hLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBmb3IobGV0IGogPSAwOyBqIDwgYXJyX2IubGVuZ3RoOyBqKyspe1xuICAgICAgbGV0IGVsbV9iID0gYXJyX2Jbal07XG4gICAgICBpZihlbG1fYS5pc0VxdWFsKGVsbV9iKSl7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cbiAgY29uc3QgYXJyID0gdGhpcy5nZXRDb21tb25EaXZpc29ycyhzdSk7XG4gIHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIFt0aGlzXTtcbiAgfVxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IENPTlNUQU5UUy5NQVgubnVtYmVyOyBpKyspe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oaSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TGVhc3RDb21tb25NdWx0aXBsZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBjb25zdCBhID0gdGhpcztcbiAgY29uc3QgYiA9IHN1O1xuXG4gIGNvbnN0IG1heENvbW1vbkRpdmlzb3IgPSBhLmdldE1heENvbW1vbkRpdmlzb3IoYik7XG5cbiAgY29uc3QgbXVsdGkgPSBhLm11bHRpcGx5KGIpO1xuXG4gIGNvbnN0IHJlcyA9IG11bHRpLmRpdmlzaW9uKG1heENvbW1vbkRpdmlzb3IpO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblN1LnByb3RvdHlwZS5maWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW3plcm8sIG9uZV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGZpYnMgPSB0aGlzLmZpYm9uYWNjaVNlcXVlbmNlKDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmx1Y2FzU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW21ha2VTdSgyKSwgbWFrZVN1KDEpXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMdWNhc051bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsdWNzID0gdGhpcy5sdWNhc1NlcXVlbmNlKDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbHVjcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBsdWNzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmx1Y2FzUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbHMgPSB0aGlzLmx1Y2FzU2VxdWVuY2UoKTtcbiAgY29uc3QgYXJyID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGxzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBsID0gbHNbaV07XG4gICAgaWYobC5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW3RoaXNdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gYXJndW1lbnRzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXRTZXF1ZW5jZSguLi5hcmd1bWVudHMpO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBzdW0gPSBzdW0uYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldFNlcXVlbmNlKC4uLmFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYSA9IG1ha2VTdSh0aGlzLmFycmF5W2ldKTtcbiAgICBzdW0gPSBzdW0uYWRkKGEpO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgyKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuY3ViZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgb25lID0gbWFrZVN1KFwiMVwiKTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgaWYoc3UuaXNFcXVhbChvbmUpKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsZXQgY291bnQgPSBvbmU7XG4gIGxldCByZXMgPSBjb3B5U3UodGhpcyk7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoc3UpKXtcbiAgICByZXMgPSB0aGlzLm11bHRpcGxpY2F0aW9uKHJlcyk7XG4gICAgY291bnQgPSBjb3VudC5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5pc09uZSgpIHx8IHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjJcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKG9uZSkpe1xuICAgIGxldCBlID0gdGhpcy5kaXZpc2lvbihjb3VudGVyKTtcbiAgICBpZihlLnJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldERpdmlzb3JzKCk7XG4gIGxldCBhID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhID0gYS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNMYXJnZSggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzRGVmaWNpZW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNTbWFsbCggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzUGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLnN1YnRyYWN0KHRoaXMpLmlzRXF1YWwodGhpcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5mYWN0b3JpYWwgPSBmdW5jdGlvbigpe1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZSh6ZXJvKSl7XG4gICAgcmVzID0gcmVzLm11bHRpcGxpY2F0aW9uKGNvdW50ZXIpO1xuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1RyaWFuZ2xlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgbGV0IGVsbSA9IG1ha2VTdSgxKTtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBiID0gdHJ1ZTtcbiAgd2hpbGUoYil7XG4gICAgcmVzID0gcmVzLnN1YnRyYWN0KGVsbSk7XG4gICAgaWYocmVzLmlzWmVybygpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZihyZXMuaXNTbWFsbChtYWtlU3UoMCkpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxtID0gZWxtLmFkZChtYWtlU3UoMSkpO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0VHJpYW5nbGVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZ2V0UG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmdldFNxdWFyZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5nZXRQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSg0KSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0UG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4pe1xuICBpZighaXNTdShuKSl7XG4gICAgbiA9IG1ha2VTdShuKTtcbiAgfVxuICBpZihuLmlzU21hbGwobWFrZVN1KDMpKSl7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDEpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHJhbmdlID0gY3VycmVudDtcblxuICBjb25zdCBpbmNyZW1lbnQgPSBuLnN1YnRyYWN0KG1ha2VTdSgyKSk7XG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSl7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgcmFuZ2UgPSByYW5nZS5hZGQoaW5jcmVtZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5hZGQocmFuZ2UpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUubWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgdHdvID0gbWFrZVN1KDIpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMCk7XG4gIGxldCBleCA9IG1ha2VTdSgxKTtcbiAgXG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLm1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbWFyciA9IHRoaXMubWVyc2VubmVOdW1iZXJzKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbiA9IG1hcnJbaV07XG4gICAgaWYobi5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSB0aGlzLm1lcnNlbm5lTnVtYmVycygpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IHRoaXMubWVyc2VubmVQcmltZU51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IG1ha2VTdSgwKTtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gbWFrZVN1KDEpO1xuICB9XG4gIGlmKCFpc1N1KG1pbikpe1xuICAgIG1pbiA9IG1ha2VTdShtaW4pO1xuICB9XG4gIGlmKCFpc1N1KG1heCkpe1xuICAgIG1heCA9IG1ha2VTdShtYXgpO1xuICB9XG5cbiAgY29uc3Qgc3RyID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBsZXQgcmFuO1xuXG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIGlmKG1pbi5pc1plcm8oKSl7XG4gICAgICByYW4gPSBtYWtlU3UoMCk7XG4gICAgfWVsc2V7XG4gICAgICByYW4gPSBtaW47XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByYW4gPSBtYWtlU3UoXCIwLlwiICsgYXJyWzFdKS5tdWx0aXBsaWNhdGlvbihtYXgpO1xuICB9XG4gIHJldHVybiByYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ha2VTdTogbWFrZVN1LFxuICBjb3B5U3U6IGNvcHlTdSxcbiAgaXNTdTogaXNTdSxcbiAgS2VpOiBLLFxuICBTdTogU3UsXG4gIGdldExhcmdlOiBnZXRMYXJnZVxufTsiXSwic291cmNlUm9vdCI6IiJ9