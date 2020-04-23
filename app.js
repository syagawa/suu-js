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
  return new Su(num, option);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJTIiwiSyIsIkZJUlNUX1BSSU1FX05VTUJFUiIsImlzUHJpbWVOdW1iZXIiLCJuIiwiaXNOdW1iZXIiLCJNQVgiLCJtYXgiLCJpIiwibmV4dE51bWJlciIsInByZXZOdW1iZXIiLCJyYW5kb20iLCJtaW4iLCJBcnJheSIsImxlbmd0aCIsInJhbmRvbUVsZW1lbnQiLCJ1bmRlZmluZWQiLCJsZW4iLCJyYW5kIiwiTWF0aCIsImFycmF5IiwicmFuZG9tSW50IiwiYXJyIiwicHVzaCIsInJlcyIsInByaW1lTnVtYmVycyIsImZpYm9uYWNjaVNlcXVlbmNlIiwic3RhcnQiLCJmdW5jIiwiYSIsIk51bWJlciIsImIiLCJpc0ZpYm9uYWNjaU51bWJlciIsImZpYiIsImluZGV4IiwiaW5kZXhPZiIsImlzRXZlbk51bWJlciIsImlzT2RkTnVtYmVyIiwiZGl2aXNvcnMiLCJldWNsaWRlYW5BbGdvcml0aG0iLCJ0ZW1wIiwiYXRlbXAiLCJidGVtcCIsImN0ZW1wIiwiY291bnRlciIsImNvcHJpbWUiLCJjb21tb25EaXZpc29ycyIsImFycl9hIiwiYXJyX2IiLCJkaXZzIiwiayIsImVsbV9hIiwibCIsImVsbV9iIiwibWF4Q29tbW9uRGl2aXNvciIsIm11bHRpcGxlIiwibGVhc3RDb21tb25NdWx0aXBsZSIsImJpZyIsImoiLCJzdW1tYXRpb24iLCJhcmd1bWVudHMiLCJzdW0iLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwiaW50ZWdlciIsInJlbWFpbmRlciIsImZsb29yIiwicmVhbE51bWJlciIsImRpdmlzb3JzU3VtbWF0aW9uIiwiaXNBYnVuZGFudE51bWJlciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQSIsIm51bSIsInMiLCJTdHJpbmciLCJmaXJzdF9sZW4iLCJhZnRlcl9sZW4iLCJmaXJzdCIsImFmdGVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic3BsaXQiLCJzb3J0Iiwiam9pbiIsInJldmVyc2UiLCJpc0thcHJla2FyTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZiIsImhhcm1vbmljTWVhbiIsImlzSGFybW9uaWNEaXZpc29yTnVtYmVyIiwiaXNOYXR1cmFsTnVtYmVyIiwiY29sbGF0emhQcm9ibGVtIiwiY2FsYyIsImZlcm1hdFRlc3QiLCJpc1plcm8iLCJwb3ciLCJnZXRJbmNsdWRlc051bWJlcnMiLCJib29sIiwiYXIiLCJNSU4iLCJEQloiLCJOQU4iLCJjb3JlIiwiaXNOYU4iLCJOYU4iLCJudW1Ub0FycmF5Iiwic3RyIiwic2xpY2UiLCJpc051bUFycmF5IiwiZ2xvYmFsIiwic2VsZiIsImNvbnN0YW50cyIsIlN1Iiwib3B0aW9uIiwibmVnYXRpdmUiLCJwYXJ0cyIsImludF9zdHIiLCJkZWNpbWFsX3N0ciIsImludDAiLCJtYXRjaCIsIm5ld19pbnRfc3RyIiwic3RhcnRfemVybyIsImRlYzAiLCJlbmRfemVybyIsIm5ld19kZWNpbWFsX3N0ciIsImludF9hcnIiLCJkZWNpbWFsX2FyciIsImRlY2ltYWwiLCJkZW5vbWluYXRvciIsImZyYWN0aW9uIiwibnVtZXJhdG9yIiwiY29uY2F0IiwibWFrZVN1IiwiaXNTdSIsInN1IiwiY29weVN1IiwiZ2V0U3RyaW5nIiwiZ2V0TWVzc2FnZSIsInR5cGUiLCJDT05TVEFOVFMiLCJaRVJPIiwiT05FIiwicHJvdG90eXBlIiwiYWMiLCJyZWR1Y2UiLCJlIiwiZ2V0TnVtYmVyIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpc0VxdWFsIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwibGFyZ2UiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNMYXJnZSIsImlzU21hbGwiLCJpc1Bvc2l0aXZlIiwiaXNOZWdhdGl2ZSIsInYiLCJhZGQiLCJFcnJvciIsIm1ha2VQb3NpdGl2ZSIsInN1YnRyYWN0IiwiaW50X2EiLCJkZWNfYSIsImludF9iIiwiZGVjX2IiLCJsZW5faSIsImxlbl9kIiwib3ZlciIsImludF9yZXMiLCJkZWNfcmVzIiwiX3JlcyIsInVuc2hpZnQiLCJkIiwicG9wIiwiZ2FwIiwibmVnYXRlIiwiYV9pZCIsImJfaWQiLCJhX2lfbGVuIiwiYl9pX2xlbiIsImFfZF9sZW4iLCJiX2RfbGVuIiwiZF9nYXAiLCJhYnMiLCJkZWJ0IiwicmVzX2FycmF5IiwiYV9lbG0iLCJiX2VsbSIsInNwbGljZSIsIm1pbnVzIiwibnVtYmVyIiwibmV2YXRpdmUiLCJtYWtlTmVnYXRpdmUiLCJtdWx0aXBsaWNhdGlvbiIsImRwX2EiLCJkcF9iIiwicmVzX2FyciIsInBvc19hIiwicG9zX2IiLCJwb3MiLCJwYWRFbmQiLCJwYWRTdGFydCIsImNvdW50IiwicmVtYWluIiwicGx1cyIsInRhc3UiLCJoaWt1IiwibXVsdGlwbHkiLCJrYWtlcnUiLCJ3YXJ1IiwibmV4dCIsInByZXYiLCJnZXREaXZpc29ycyIsImdldENvbW1vbkRpdmlzb3JzIiwiZ2V0TWF4Q29tbW9uRGl2aXNvciIsImdldExlYXN0Q29tbW9uTXVsdGlwbGUiLCJtdWx0aSIsInplcm8iLCJvbmUiLCJjIiwiZmlicyIsImx1Y2FzU2VxdWVuY2UiLCJpc0x1Y2FzTnVtYmVyIiwibHVjcyIsImx1Y2FzUHJpbWVOdW1iZXJzIiwibHMiLCJnZXRTZXF1ZW5jZSIsImRpZ2l0c3VtIiwic3F1YXJlIiwiZXhwb25lbnRpYXRlIiwiY3ViZSIsImlzRGVmaWNpZW50TnVtYmVyIiwiaXNQZXJmZWN0TnVtYmVyIiwiZmFjdG9yaWFsIiwiaXNUcmlhbmdsZU51bWJlciIsImdldFRyaWFuZ2xlTnVtYmVycyIsImdldFBvbHlnb25hbE51bWJlcnMiLCJnZXRTcXVhcmVOdW1iZXJzIiwiY3VycmVudCIsInJhbmdlIiwiaW5jcmVtZW50IiwibWVyc2VubmVOdW1iZXJzIiwidHdvIiwiZXgiLCJtZXJzZW5uZVByaW1lTnVtYmVycyIsIm1hcnIiLCJpc01lcnNlbm5lTnVtYmVyIiwibXMiLCJtIiwiaXNNZXJzZW5uZVByaW1lTnVtYmVyIiwicmFuIiwiS2VpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FB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LHdDQUpRO0FBS2JtSCxJQUFFLEVBQUVBLEVBTFM7QUFNYnNDLFVBQVEsRUFBRUE7QUFORyxDQUFmLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wic3VhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBNQVgsIE1JTiB9IGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuaW1wb3J0IHsgbWFrZVN1IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuY29uc3QgUyA9IHt9O1xuY29uc3QgSyA9IHt9O1xuXG5cbmNvbnN0IEZJUlNUX1BSSU1FX05VTUJFUiA9IDI7XG5cblMuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4gPT09IDAgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4gPT09IDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYobiA+PSBNQVgpe1xuICAgIHJldHVybiBgQXJndW1lbnQgZXhjZWVkcyBtYXhpbXVtIHZhbHVlKCR7TUFYfSlgO1xuICB9XG5cbiAgY29uc3QgbWF4ID0gbjtcbiAgZm9yKCBsZXQgaSA9IG1heCAtMTsgaSA+IDE7IGktLSl7XG4gICAgaWYoIChtYXggJSBpKSA9PT0gMCApe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblMubmV4dE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiArK247XG59O1xuXG5TLnByZXZOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIVMuaXNOdW1iZXIobikpe1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gLS1uO1xufTtcblxuSy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYobWluIGluc3RhbmNlb2YgQXJyYXkgJiYgbWluLmxlbmd0aCA+IDApe1xuICAgIHJldHVybiBLLnJhbmRvbUVsZW1lbnQobWluKTtcbiAgfVxuXG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSAwO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSAxO1xuICB9XG5cbiAgY29uc3QgbGVuID0gbWF4IC0gbWluO1xuICBjb25zdCByYW5kID0gTWF0aC5yYW5kb20oKTtcbiAgcmV0dXJuICggcmFuZCAqIGxlbiApICsgbWluO1xufTtcblxuSy5yYW5kb21FbGVtZW50ID0gZnVuY3Rpb24oYXJyYXkpe1xuICBjb25zdCBpID0gSy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBhcnJheVtpXTtcbn07XG5cbksucmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZiggIVMuaXNOdW1iZXIobWluKSB8fCAhUy5pc051bWJlcihtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYobWluID49IG1heCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKyl7XG4gICAgYXJyLnB1c2goaSk7XG4gIH1cblxuICBjb25zdCByZXMgPSBLLnJhbmRvbUVsZW1lbnQoYXJyKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuSy5wcmltZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgTUFYOyBpKyspe1xuICAgIGlmKFMuaXNQcmltZU51bWJlcihpKSl7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbksuZmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbihzdGFydCl7XG4gIGlmKHN0YXJ0ID09PSB1bmRlZmluZWQpe1xuICAgIHN0YXJ0ID0gMDtcbiAgfVxuICBjb25zdCBhcnIgPSBbc3RhcnQsIHN0YXJ0ICsgMV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0gPj0gTUFYKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBOdW1iZXIoYXJyW2Fyci5sZW5ndGggLSAyXSk7XG4gICAgY29uc3QgYiA9IE51bWJlcihhcnJbYXJyLmxlbmd0aCAtIDFdKTtcbiAgICBhcnIucHVzaChOdW1iZXIoYSArIGIpKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuUy5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID09PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBmaWIgPSBLLmZpYm9uYWNjaVNlcXVlbmNlKDApO1xuICBjb25zdCBpbmRleCA9IGZpYi5pbmRleE9mKG4pO1xuICBpZihpbmRleCA+PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIFMuaXNOdW1iZXIobikgJiYgbiAlIDIgPT09IDAgKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc09kZE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZiggUy5pc051bWJlcihuKSAmJiBuICUgMiAhPT0gMCApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5LLmRpdmlzb3JzID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDw9IG47IGkrKyl7XG4gICAgaWYobiAlIGkgPT09IDApe1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg6bjg7zjgq/jg6rjg4Pjg4njga7kupLpmaTms5VcbksuZXVjbGlkZWFuQWxnb3JpdGhtID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhUy5pc051bWJlcihhKSB8fCAhUy5pc051bWJlcihiKSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKCBhID09PSBiKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCB0ZW1wO1xuICBpZiggYSA8IGIpe1xuICAgIHRlbXAgPSBhO1xuICAgIGEgPSBiO1xuICAgIGIgPSB0ZW1wO1xuICB9XG5cbiAgbGV0IGF0ZW1wID0gYTtcbiAgbGV0IGJ0ZW1wID0gYjtcbiAgbGV0IGN0ZW1wO1xuICBsZXQgcmVzO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGNvcHJpbWUgPSBcImNvcHJpbWVcIjtcbiAgd2hpbGUoY3RlbXAgIT09MCl7XG4gICAgY3RlbXAgPSBhdGVtcCAlIGJ0ZW1wO1xuICAgIGlmKGN0ZW1wID09PSAwKXtcbiAgICAgIHJlcyA9IGJ0ZW1wO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGN0ZW1wID09PSAxKXtcbiAgICAgIHJlcyA9IGNvcHJpbWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY291bnRlciA+PSBNQVgpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGF0ZW1wID0gYnRlbXA7XG4gICAgYnRlbXAgPSBjdGVtcDtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuSy5jb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZihhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnJfYSA9IEsuZGl2aXNvcnMoYSk7XG4gIGlmKGEgPT09IGIpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IEsuZGl2aXNvcnMoYik7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5LLm1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyID0gSy5jb21tb25EaXZpc29ycyhhLCBiKTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5LLm11bHRpcGxlID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgTUFYOyBpKyspe1xuICAgIGFyci5wdXNoKG4gKiBpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuSy5sZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGxldCBiaWc7XG4gIGlmKCBhIDwgYil7XG4gICAgYmlnID0gYjtcbiAgfWVsc2V7XG4gICAgYmlnID0gYTtcbiAgfVxuICBjb25zdCBhcnJfYSA9IFtdO1xuICBjb25zdCBhcnJfYiA9IFtdO1xuXG4gIGxldCBpID0xO1xuICB3aGlsZShpIDw9IGJpZyl7XG4gICAgYXJyX2EucHVzaCggYSAqIGkpO1xuICAgIGkrKztcbiAgfVxuICBsZXQgaiA9MTtcbiAgd2hpbGUoaiA8PSBiaWcpe1xuICAgIGFycl9iLnB1c2goIGIgKiBqKTtcbiAgICBqKys7XG4gIH1cblxuICBmb3IobGV0IGsgPSAwOyBrIDwgYXJyX2EubGVuZ3RoOyBrKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2Fba107XG4gICAgZm9yKGxldCBsID0gMDsgbCA8IGFycl9iLmxlbmd0aDsgbCsrKXtcbiAgICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbbF07XG4gICAgICBpZihlbG1fYSA9PT0gZWxtX2Ipe1xuICAgICAgICByZXR1cm4gZWxtX2E7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5LLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgfVxuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2pdO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBzdW0gKz0gZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuSy5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBlbXB0eS5cIjtcbiAgfVxuICBsZXQgaXAgPSAxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2ldO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpcCA9IGlwICogZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IGEgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBpcDtcbn07XG5cbksuZGl2aXNpb24gPSBmdW5jdGlvbihkaXZpZGVuZCwgZGl2aXNvcil7XG4gIGlmKGRpdmlkZW5kID09PSB1bmRlZmluZWQgfHwgZGl2aXNvciA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gZGl2aWRlbmQgLyBkaXZpc29yO1xuICByZXR1cm4ge1xuICAgIGludGVnZXI6IHtcbiAgICAgIHJlbWFpbmRlcjogZGl2aWRlbmQgJSBkaXZpc29yLFxuICAgICAgcmVzdWx0OiBNYXRoLmZsb29yKHJlc3VsdClcbiAgICB9LFxuICAgIHJlYWxOdW1iZXI6IHJlc3VsdFxuICB9O1xufTtcblxuSy5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBsZXQgYSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgKz0gYXJyW2ldO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuSy5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHN1bSA9IEsuZGl2aXNvcnNTdW1tYXRpb24obik7XG4gIGlmKHN1bSA+IG4gKiAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBuICogbjtcbiAgY29uc3QgcyA9IFN0cmluZyhudW0pO1xuICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcbiAgbGV0IGZpcnN0X2xlbiA9IDA7XG4gIGxldCBhZnRlcl9sZW4gPSAwO1xuICBsZXQgZmlyc3QsIGFmdGVyO1xuICBpZihTLmlzT2RkTnVtYmVyKGxlbikpe1xuICAgIGZpcnN0X2xlbiA9IChsZW4gLSAxKSAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuICsgMTtcbiAgfWVsc2V7XG4gICAgZmlyc3RfbGVuID0gbGVuIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW47XG4gIH1cbiAgZmlyc3QgPSBOdW1iZXIocy5zdWJzdHIoMCwgZmlyc3RfbGVuKSk7XG4gIGFmdGVyID0gTnVtYmVyKHMuc3Vic3RyKGZpcnN0X2xlbiwgYWZ0ZXJfbGVuKSk7XG5cbiAgaWYoKCBmaXJzdCArIGFmdGVyICkgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVCID0gZnVuY3Rpb24obil7XG5cbiAgY29uc3QgYXJyID0gU3RyaW5nKG4pLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IG1pbiA9IE51bWJlcihhcnIuc29ydCgpLmpvaW4oXCJcIikpO1xuICBjb25zdCBtYXggPSBOdW1iZXIoYXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcblxuICBpZigobWF4IC0gbWluKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKEsuaXNLYXByZWthck51bWJlclR5cGVBKG4pIHx8IEsuaXNLYXByZWthck51bWJlclR5cGVCKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgZiA9IE1hdGguZmxvb3Iobik7XG4gIGlmKCBmID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyDoqr/lkozlubPlnYdcbksuaGFybW9uaWNNZWFuID0gZnVuY3Rpb24oYXJyKXtcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgc3VtICs9IDEgLyBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGxlbiAvIHN1bTtcbn07XG5cbi8vIOiqv+WSjOaVsOOBi+OBqeOBhuOBi1xuSy5pc0hhcm1vbmljRGl2aXNvck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBjb25zdCByZXMgPSBLLmhhcm1vbmljTWVhbihhcnIpO1xuICBpZihTLmlzSW50ZWdlcihyZXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID4gMCAmJiBTLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuSy5jb2xsYXR6aFByb2JsZW0gPSBmdW5jdGlvbihudW0pe1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihuKXtcbiAgICBsZXQgcmVzID0gbjtcbiAgICBpZihTLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gKiAzICsgMTtcbiAgICB9ZWxzZSBpZihTLmlzRXZlbk51bWJlcihuKSl7XG4gICAgICByZXMgPSBuIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB3aGlsZShudW0gPiAxKXtcbiAgICBudW0gPSBjYWxjKG51bSk7XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44OV44Kn44Or44Oe44O844OG44K544OIXG4vLyBKU+OBruaJseOBiOOCi+evhOWbsuOCkui2heOBiOOBpuOBhOOBpuOBhuOBvuOBj+WLleOBi+OBmlxuSy5mZXJtYXRUZXN0ID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIVMuaXNJbnRlZ2VyKG4pIHx8IFMuaXNaZXJvKG4pIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnMuIFwiICsgbiArIFwiIGlzIGluY29ycmVjdCBwYXJhbWV0ZXIuXCI7XG4gIH1cblxuICBpZighbWF4KXtcbiAgICBtYXggPSAxMDA7XG4gIH1cblxuICBmb3IobGV0IGkgPSAxOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBhID0gSy5yYW5kb21JbnQoMiwgbiAtIDEpO1xuICAgIGlmKEsubWF4Q29tbW9uRGl2aXNvcihhLCBuKSAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gTWF0aC5wb3coYSwgbiAtIDEpICUgbjtcbiAgICBpZihyZXMgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIk1heWJlIFByaW1lIE51bWJlclwiO1xufTtcblxuLy8g57WE44G/5ZCI44KP44Gb5pWw44Gu6KiI566XXG4vLyBLLmNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGFycil7XG4vLyB9O1xuXG4vLyAzID0+IFswLCAzXSwgWzEsIDJdLCBbMiwgMV0sIFszLCAwXVxuSy5nZXRJbmNsdWRlc051bWJlcnMgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHRlbXAgPSBudW07XG4gIGxldCBib29sID0gdHJ1ZTtcbiAgd2hpbGUoYm9vbCl7XG4gICAgY29uc3QgYSA9IHRlbXA7XG4gICAgY29uc3QgYiA9IG51bSAtdGVtcDtcbiAgICBjb25zdCBhciA9IFthLGJdO1xuICAgIGFyci5wdXNoKGFyKTtcbiAgICB0ZW1wID0gdGVtcCAtMTtcbiAgICBpZih0ZW1wIDwgMCl7XG4gICAgICBib29sID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFM6IFMsXG4gIEs6IEtcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWDogMTAwMDAsXG4gIE1JTjogLTEwMDAwLFxuICBEQlo6IFwiRGl2aXNpb24gYnkgWmVyb1wiLFxuICBOQU46IFwiTm90IGEgbnVtYmVyXCJcbn1cbiIsImNvbnN0IGNvcmUgPSB7fTtcblxuY29yZS5pc051bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvcmUuaXNaZXJvID0gZnVuY3Rpb24obil7XG4gIGlmKCBuID09PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLy8g6YWN5YiX44Gn44Gu6KiI566XXG5jb3JlLm51bVRvQXJyYXkgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBOdW1iZXIoc3RyLnNsaWNlKGksIGkgKyAxKSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gICAgfVxuICAgIGFyci5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBzIGZyb20gXCIuL3N1LmpzXCI7XG5cbihmdW5jdGlvbihnbG9iYWwsIHMpe1xuICBnbG9iYWwucyA9IHM7XG59KShnbG9iYWwgfHwgc2VsZiwgcyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgSywgUyB9IGZyb20gXCIuL1NLLmpzXCI7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IE1BWCA9IGNvbnN0YW50cy5NQVg7XG5jb25zdCBNSU4gPSBjb25zdGFudHMuTUlOO1xuY29uc3QgREJaID0gY29uc3RhbnRzLkRCWjtcbmNvbnN0IE5BTiA9IGNvbnN0YW50cy5OQU47XG5cbmNvbnN0IFN1ID0gZnVuY3Rpb24obiwgb3B0aW9uKXtcbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FyciA9IGNvcmUubnVtVG9BcnJheShpbnRfc3RyKTtcbiAgbGV0IGRlY2ltYWxfYXJyID0gZGVjaW1hbF9zdHIgPyBjb3JlLm51bVRvQXJyYXkoZGVjaW1hbF9zdHIpIDogWzBdO1xuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgcmV0dXJuIG5ldyBTdShudW0sIG9wdGlvbik7XG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uKHR5cGUpe1xuICBpZih0eXBlID09PSBcIm5vdHN1XCIpe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBTdS5cIjtcbiAgfVxuICByZXR1cm4gXCJcIjtcbn07XG5cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgWkVSTzogbWFrZVN1KDApLFxuICBPTkU6IG1ha2VTdSgxKSxcbiAgRklSU1RfUFJJTUVfTlVNQkVSOiBtYWtlU3UoMiksXG4gIE1BWDogbWFrZVN1KE1BWCksXG4gIE1JTjogbWFrZVN1KE1JTilcbn07XG5cblN1LnByb3RvdHlwZS5nZXRTdHJpbmcgPSBmdW5jdGlvbigpe1xuICBsZXQgc3RyID0gU3RyaW5nKCB0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIGNvbnN0IGFjID0gdGhpcy5kZWNpbWFsLnJlZHVjZSgoYSxlKSA9PiBhICsgZSk7XG4gIGlmKGFjICE9PSAwKXtcbiAgICBzdHIgKz0gXCIuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKTtcbiAgfVxuICByZXR1cm4gdGhpcy5uZWdhdGl2ZSA/IGAtJHtzdHJ9YCA6IHN0cjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5nZXRTdHJpbmcoKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0SW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmludGVnZXIuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcihcIjAuXCIgKyB0aGlzLmRlY2ltYWwuam9pbihcIlwiKSk7XG4gIHJldHVybiBudW07XG59O1xuXG5TdS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdHIgPSB0aGlzLmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBnZXRMYXJnZSA9IGZ1bmN0aW9uKGEsIGIsIGFic29sdXRlID0gZmFsc2Upe1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBsZXQgZmllbGQgPSBbXTtcblxuICBjb25zdCBfYSA9IG1ha2VTdShhLmdldFN0cmluZygpKTtcbiAgY29uc3QgX2IgPSBtYWtlU3UoYi5nZXRTdHJpbmcoKSk7XG5cbiAgaWYoYWJzb2x1dGUpe1xuICAgIF9hLm5lZ2F0aXZlID0gZmFsc2U7XG4gICAgX2IubmVnYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmKF9hLmlzWmVybygpICYmIF9iLmlzWmVybygpKXtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZighX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiAhX2IubmVnYXRpdmUpe1xuICAgIHJldHVybiBiO1xuICB9ZWxzZSBpZihfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoX2EuaW50ZWdlci5sZW5ndGggPiBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9ZWxzZSBpZihfYS5pbnRlZ2VyLmxlbmd0aCA8IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgcmV0dXJuIGI7XG4gIH1cblxuICBmb3IobGV0IGkgPSAwOyBpIDwgX2EuaW50ZWdlci5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gX2EuaW50ZWdlcltpXTtcbiAgICBsZXQgZWxtX2IgPSBfYi5pbnRlZ2VyW2ldO1xuICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICBicmVhaztcbiAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICBjb25zdCBsZW4gPSBfYS5kZWNpbWFsLmxlbmd0aCA+PSBfYi5kZWNpbWFsLmxlbmd0aCA/IF9hLmRlY2ltYWwubGVuZ3RoIDogX2IuZGVjaW1hbC5sZW5ndGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgIGxldCBlbG1fYSA9IF9hLmRlY2ltYWxbaV0gPyBfYS5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGxldCBlbG1fYiA9IF9iLmRlY2ltYWxbaV0gPyBfYi5kZWNpbWFsW2ldIDogMDtcbiAgICAgIGlmKGVsbV9hID4gZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYSA8IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmKG5lZ2F0aXZlKXtcbiAgICBmaWVsZCA9IFtmaWVsZFsxXSwgZmllbGRbMF1dO1xuICB9XG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZmllbGRbMF07XG5cbn07XG5cblxuU3UucHJvdG90eXBlLmlzRXF1YWwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCBpX2EgPSBhLmludGVnZXI7XG4gIGNvbnN0IGlfYiA9IGIuaW50ZWdlcjtcbiAgY29uc3QgZF9hID0gYS5kZWNpbWFsO1xuICBjb25zdCBkX2IgPSBiLmRlY2ltYWw7XG5cbiAgY29uc3QgbGFyZ2UgPSBnZXRMYXJnZShhLCBiKTtcblxuICBpZighbGFyZ2Upe1xuICAgIGlmKGlfYS5sZW5ndGggPT09IGlfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGlfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGlfYVtpXSAhPT0gaV9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZSBpZihkX2EubGVuZ3RoID09PSBkX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihkX2FbaV0gIT09IGRfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoYS5uZWdhdGl2ZSA9PT0gYi5uZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG59O1xuXG5TdS5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pbnRlZ2VyLmxlbmd0aCA9PT0gMSAmJiB0aGlzLmludGVnZXJbMF0gPT09IDAgJiYgIXRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT25lID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMVwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMYXJnZSA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBhLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTbWFsbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYocmVzLmdldFN0cmluZygpID09PSBiLmdldFN0cmluZygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1Bvc2l0aXZlKCkgJiYgdGhpcy5pc0ludGVnZXIoKSAmJiB0aGlzLmlzTGFyZ2UoQ09OU1RBTlRTLlpFUk8pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmNvbnRhaW5EZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgcmVzID0gdGhpcy5kZWNpbWFsLnJlZHVjZShmdW5jdGlvbihhLCB2KXtcbiAgICAgIHJldHVybiBhICsgdjtcbiAgfSk7XG4gIGlmKHJlcyA9PT0gMCl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0TWVzc2FnZShcIm5vdHN1XCIpKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0TWVzc2FnZShcIm5vdHN1XCIpKTtcbiAgfVxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gYi5uZWdhdGUoKTtcbiAgfVxuXG4gIGlmKGEubmVnYXRpdmUgIT09IGIubmVnYXRpdmUpe1xuICAgIGIubmVnYXRpdmUgPSAhYi5uZWdhdGl2ZTtcbiAgICByZXR1cm4gYS5hZGQoYik7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBhLm5lZ2F0aXZlO1xuXG4gIGNvbnN0IHJlcyA9IGdldExhcmdlKGEsIGIsIHRydWUpO1xuICBpZihyZXMgIT09IGEpe1xuICAgIGEgPSBzdTtcbiAgICBiID0gdGhpcztcbiAgICBuZWdhdGl2ZSA9ICFhLm5lZ2F0aXZlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBhX2lfbGVuID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgYl9pX2xlbiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgYV9kX2xlbiA9IGEuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGJfZF9sZW4gPSBiLmRlY2ltYWwubGVuZ3RoO1xuICBjb25zdCBkX2dhcCA9IE1hdGguYWJzKGFfZF9sZW4gLSBiX2RfbGVuKTtcblxuICBsZXQgbGVuX2kgPSAwO1xuICBsZXQgbGVuX2QgPSAwO1xuICBpZihhX2lfbGVuID4gYl9pX2xlbil7XG4gICAgbGVuX2kgKz0gYV9pX2xlbjtcbiAgfWVsc2V7XG4gICAgbGVuX2kgKz0gYl9pX2xlbjtcbiAgfVxuICBpZihhX2RfbGVuID4gYl9kX2xlbil7XG4gICAgbGVuX2QgKz0gYV9kX2xlbjtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9nYXA7IGkrKyl7XG4gICAgICBiX2lkLnB1c2goMCk7XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZW5fZCArPSBiX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGFfaWQucHVzaCgwKTtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBkZWJ0ID0gMDtcbiAgY29uc3QgcmVzX2FycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5faSArIGxlbl9kOyBpKyspe1xuICAgIGNvbnN0IGlfYSA9IGFfaWQubGVuZ3RoIC0gMSAtIGk7XG4gICAgY29uc3QgaV9iID0gYl9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBhX2VsbSA9IChhX2lkW2lfYV0gPyBhX2lkW2lfYV0gOiAwKSAtIGRlYnQ7XG4gICAgY29uc3QgYl9lbG0gPSBiX2lkW2lfYl0gPyBiX2lkW2lfYl0gOiAwO1xuICAgIGlmKGFfZWxtID49IGJfZWxtKXtcbiAgICAgIGRlYnQgPSAwO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoYV9lbG0gLSBiX2VsbSk7XG4gICAgfWVsc2V7XG4gICAgICBkZWJ0ID0gMTtcbiAgICAgIHJlc19hcnJheS51bnNoaWZ0KChkZWJ0ICogMTApICsgYV9lbG0gLSBiX2VsbSk7XG4gICAgfVxuXG4gIH1cbiAgcmVzX2FycmF5LnNwbGljZShyZXNfYXJyYXkubGVuZ3RoIC0gbGVuX2QsIDAsIFwiLlwiKTtcbiAgY29uc3QgbWludXMgPSBuZWdhdGl2ZSA/IFwiLVwiIDogXCJcIjtcblxuICBjb25zdCByZXN1bHQgPSAgbWFrZVN1KG1pbnVzICsgcmVzX2FycmF5LmpvaW4oXCJcIikpO1xuXG4gIGlmKHJlc3VsdC5pc1plcm8oKSAmJiByZXN1bHQubmVnYXRpdmUpe1xuICAgIHJlc3VsdC5tYWtlUG9zaXRpdmUoKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5TdS5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHRoaXMubmV2YXRpdmUgPSBmYWxzZTtcbiAgfWVsc2V7XG4gICAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZVBvc2l0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5TdS5wcm90b3R5cGUubWFrZU5lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5udW1iZXIgPT09IDApe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMubmVnYXRpdmUgPSB0cnVlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsaWNhdGlvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0TWVzc2FnZShcIm5vdHN1XCIpKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKGEuaXNaZXJvKCkgfHwgYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGFfaWQgPSBhLmludGVnZXIuY29uY2F0KGEuZGVjaW1hbCk7XG4gIGNvbnN0IGJfaWQgPSBiLmludGVnZXIuY29uY2F0KGIuZGVjaW1hbCk7XG5cbiAgY29uc3QgZHBfYSA9IGEuaW50ZWdlci5sZW5ndGg7XG4gIGNvbnN0IGRwX2IgPSBiLmludGVnZXIubGVuZ3RoO1xuXG4gIGNvbnN0IHJlc19hcnIgPSBbXTtcbiAgZm9yKGxldCBpX2EgPSAwOyBpX2EgPCBhX2lkLmxlbmd0aDsgaV9hKyspe1xuICAgIGZvcihsZXQgaV9iID0gMDsgaV9iIDwgYl9pZC5sZW5ndGg7IGlfYisrKXtcbiAgICAgIGNvbnN0IGVsbV9hID0gYV9pZFtpX2FdO1xuICAgICAgY29uc3QgZWxtX2IgPSBiX2lkW2lfYl07XG4gICAgICBjb25zdCBwb3NfYSA9IGRwX2EgLSBpX2EgLTE7XG4gICAgICBjb25zdCBwb3NfYiA9IGRwX2IgLSBpX2IgLTE7XG4gICAgICBjb25zdCBwb3MgPSBwb3NfYSArIHBvc19iO1xuICAgICAgbGV0IHJlcyA9IGVsbV9hICogZWxtX2I7XG4gICAgICBsZXQgbGVuID0gTWF0aC5hYnMocG9zKTtcbiAgICAgIGxldCBzdHI7XG4gICAgICBpZihwb3MgPj0gMCl7XG4gICAgICAgIGxlbisrO1xuICAgICAgICBpZihyZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuICsgMSwgXCIwXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKS5wYWRFbmQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICBpZihsZW4gPT09IDEgJiYgcmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcylbMF0gKyBcIi5cIiArIFN0cmluZyhyZXMpWzFdO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBzdHIgPSBcIjAuXCIgKyBTdHJpbmcocmVzKS5wYWRTdGFydChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzX2Fyci5wdXNoKG1ha2VTdShzdHIpKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcmVzID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzX2Fyci5sZW5ndGg7IGkrKyl7XG4gICAgcmVzID0gcmVzLmFkZChyZXNfYXJyW2ldKTtcbiAgfVxuXG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuXG4gIHJldHVybiByZXM7XG5cbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc2lvbiA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0TWVzc2FnZShcIm5vdHN1XCIpKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgQ09OU1RBTlRTLk1BWC5udW1iZXI7IGkrKyl7XG4gICAgYXJyLnB1c2godGhpcy5tdWx0aXBsaWNhdGlvbihpKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRMZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGNvbnN0IGEgPSB0aGlzO1xuICBjb25zdCBiID0gc3U7XG5cbiAgY29uc3QgbWF4Q29tbW9uRGl2aXNvciA9IGEuZ2V0TWF4Q29tbW9uRGl2aXNvcihiKTtcblxuICBjb25zdCBtdWx0aSA9IGEubXVsdGlwbHkoYik7XG5cbiAgY29uc3QgcmVzID0gbXVsdGkuZGl2aXNpb24obWF4Q29tbW9uRGl2aXNvcik7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oKXtcblxuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbemVybywgb25lXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZmlicyA9IHRoaXMuZmlib25hY2NpU2VxdWVuY2UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBmaWJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGZpYnNbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUubHVjYXNTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbbWFrZVN1KDIpLCBtYWtlU3UoMSldO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdLmlzTGFyZ2UoTUFYKSl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gYXJyW2Fyci5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBiID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjID0gYS5hZGQoYik7XG4gICAgYXJyLnB1c2goYyk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0x1Y2FzTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGx1Y3MgPSB0aGlzLmx1Y2FzU2VxdWVuY2UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsdWNzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGx1Y3NbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUubHVjYXNQcmltZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBscyA9IHRoaXMubHVjYXNTZXF1ZW5jZSgpO1xuICBjb25zdCBhcnIgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgbHMubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGwgPSBsc1tpXTtcbiAgICBpZihsLmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblxuU3UucHJvdG90eXBlLmdldFNlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbdGhpc107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG0gPSBhcmd1bWVudHNbaV07XG4gICAgaWYoIWlzU3UoZWxtKSl7XG4gICAgICBlbG0gPSBtYWtlU3UoZWxtKTtcbiAgICB9XG4gICAgYXJyYXkucHVzaChlbG0pO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn07XG5cblN1LnByb3RvdHlwZS5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldFNlcXVlbmNlKC4uLmFyZ3VtZW50cyk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIHN1bSA9IHN1bS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0U2VxdWVuY2UoLi4uYXJndW1lbnRzKTtcbiAgbGV0IGlwID0gYXJyWzBdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBpcCA9IGlwLm11bHRpcGxpY2F0aW9uKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuU3UucHJvdG90eXBlLmRpZ2l0c3VtID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGxldCBhID0gbWFrZVN1KHRoaXMuYXJyYXlbaV0pO1xuICAgIHN1bSA9IHN1bS5hZGQoYSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDIpKTtcbn07XG5cblN1LnByb3RvdHlwZS5jdWJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgzKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZXhwb25lbnRpYXRlID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBvbmUgPSBtYWtlU3UoXCIxXCIpO1xuICBpZihzdS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuICBpZihzdS5pc0VxdWFsKG9uZSkpe1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGxldCBjb3VudCA9IG9uZTtcbiAgbGV0IHJlcyA9IGNvcHlTdSh0aGlzKTtcbiAgd2hpbGUoY291bnQuaXNTbWFsbChzdSkpe1xuICAgIHJlcyA9IHRoaXMubXVsdGlwbGljYXRpb24ocmVzKTtcbiAgICBjb3VudCA9IGNvdW50Lm5leHQoKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuU3UucHJvdG90eXBlLmlzUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmlzT25lKCkgfHwgdGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuZ2V0U3RyaW5nKCkgPT09IFwiMlwiKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3Qgb25lID0gbWFrZVN1KDEpO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2Uob25lKSl7XG4gICAgbGV0IGUgPSB0aGlzLmRpdmlzaW9uKGNvdW50ZXIpO1xuICAgIGlmKGUucmVtYWluZGVyLmlzWmVybygpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0RGl2aXNvcnMoKTtcbiAgbGV0IGEgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgPSBhLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuU3UucHJvdG90eXBlLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc0xhcmdlKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNEZWZpY2llbnROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5pc1NtYWxsKCB0aGlzLm11bHRpcGxpY2F0aW9uKG1ha2VTdSgyKSkpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQZXJmZWN0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uc3VidHJhY3QodGhpcykuaXNFcXVhbCh0aGlzKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmZhY3RvcmlhbCA9IGZ1bmN0aW9uKCl7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgY291bnRlciA9IHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgY29uc3QgemVybyA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKHplcm8pKXtcbiAgICByZXMgPSByZXMubXVsdGlwbGljYXRpb24oY291bnRlcik7XG4gICAgY291bnRlciA9IGNvdW50ZXIuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuU3UucHJvdG90eXBlLmlzVHJpYW5nbGVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBsZXQgZWxtID0gbWFrZVN1KDEpO1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGIgPSB0cnVlO1xuICB3aGlsZShiKXtcbiAgICByZXMgPSByZXMuc3VidHJhY3QoZWxtKTtcbiAgICBpZihyZXMuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmKHJlcy5pc1NtYWxsKG1ha2VTdSgwKSkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbG0gPSBlbG0uYWRkKG1ha2VTdSgxKSk7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5nZXRUcmlhbmdsZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5nZXRQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSgzKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0U3F1YXJlTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmdldFBvbHlnb25hbE51bWJlcnMobWFrZVN1KDQpKTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRQb2x5Z29uYWxOdW1iZXJzID0gZnVuY3Rpb24obil7XG4gIGlmKCFpc1N1KG4pKXtcbiAgICBuID0gbWFrZVN1KG4pO1xuICB9XG4gIGlmKG4uaXNTbWFsbChtYWtlU3UoMykpKXtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMSk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgcmFuZ2UgPSBjdXJyZW50O1xuXG4gIGNvbnN0IGluY3JlbWVudCA9IG4uc3VidHJhY3QobWFrZVN1KDIpKTtcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICByYW5nZSA9IHJhbmdlLmFkZChpbmNyZW1lbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50LmFkZChyYW5nZSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5tZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCB0d28gPSBtYWtlU3UoMik7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY3VycmVudCA9IG1ha2VTdSgwKTtcbiAgbGV0IGV4ID0gbWFrZVN1KDEpO1xuICBcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpKXtcbiAgICBjdXJyZW50ID0gdHdvLmV4cG9uZW50aWF0ZShleCkuc3VidHJhY3QobWFrZVN1KDEpKTtcbiAgICBhcnIucHVzaChjdXJyZW50KTtcbiAgICBleCA9IGV4LmFkZChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUubWVyc2VubmVQcmltZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBtYXJyID0gdGhpcy5tZXJzZW5uZU51bWJlcnMoKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBuID0gbWFycltpXTtcbiAgICBpZihuLmlzUHJpbWVOdW1iZXIoKSl7XG4gICAgICBhcnIucHVzaChuKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IHRoaXMubWVyc2VubmVOdW1iZXJzKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5pc01lcnNlbm5lUHJpbWVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gdGhpcy5tZXJzZW5uZVByaW1lTnVtYmVycygpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZihtaW4gPT09IHVuZGVmaW5lZCl7XG4gICAgbWluID0gbWFrZVN1KDApO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSBtYWtlU3UoMSk7XG4gIH1cbiAgaWYoIWlzU3UobWluKSl7XG4gICAgbWluID0gbWFrZVN1KG1pbik7XG4gIH1cbiAgaWYoIWlzU3UobWF4KSl7XG4gICAgbWF4ID0gbWFrZVN1KG1heCk7XG4gIH1cblxuICBjb25zdCBzdHIgPSBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gIGxldCByYW47XG5cbiAgaWYoc3RyID09PSBcIjBcIil7XG4gICAgaWYobWluLmlzWmVybygpKXtcbiAgICAgIHJhbiA9IG1ha2VTdSgwKTtcbiAgICB9ZWxzZXtcbiAgICAgIHJhbiA9IG1pbjtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxldCBhcnIgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICAgIHJhbiA9IG1ha2VTdShcIjAuXCIgKyBhcnJbMV0pLm11bHRpcGxpY2F0aW9uKG1heCk7XG4gIH1cbiAgcmV0dXJuIHJhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWFrZVN1OiBtYWtlU3UsXG4gIGNvcHlTdTogY29weVN1LFxuICBpc1N1OiBpc1N1LFxuICBLZWk6IEssXG4gIFN1OiBTdSxcbiAgZ2V0TGFyZ2U6IGdldExhcmdlXG59OyJdLCJzb3VyY2VSb290IjoiIn0=