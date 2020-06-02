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
}; // fibonacci


var makeFibonacciSequence = function makeFibonacciSequence(a, b) {
  if (!a.isSu() || !b.isSu()) {
    return false;
  }

  var MAX = _constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].MAX;
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

/* harmony default export */ __webpack_exports__["default"] = ({
  S: S,
  K: K,
  makeFibonacciSequence: makeFibonacciSequence
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
  console.log(_SK_js__WEBPACK_IMPORTED_MODULE_0__["K"]);
  var fibs = Object(_SK_js__WEBPACK_IMPORTED_MODULE_0__["makeFibonacciSequence"])(zero, one);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJTIiwiSyIsIkZJUlNUX1BSSU1FX05VTUJFUiIsImlzUHJpbWVOdW1iZXIiLCJuIiwiaXNOdW1iZXIiLCJNQVgiLCJtYXgiLCJpIiwibmV4dE51bWJlciIsInByZXZOdW1iZXIiLCJyYW5kb20iLCJtaW4iLCJBcnJheSIsImxlbmd0aCIsInJhbmRvbUVsZW1lbnQiLCJ1bmRlZmluZWQiLCJsZW4iLCJyYW5kIiwiTWF0aCIsImFycmF5IiwicmFuZG9tSW50IiwiYXJyIiwicHVzaCIsInJlcyIsInByaW1lTnVtYmVycyIsImlzRXZlbk51bWJlciIsImlzT2RkTnVtYmVyIiwiZGl2aXNvcnMiLCJldWNsaWRlYW5BbGdvcml0aG0iLCJhIiwiYiIsInRlbXAiLCJhdGVtcCIsImJ0ZW1wIiwiY3RlbXAiLCJjb3VudGVyIiwiY29wcmltZSIsImNvbW1vbkRpdmlzb3JzIiwiYXJyX2EiLCJhcnJfYiIsImRpdnMiLCJrIiwiZWxtX2EiLCJsIiwiZWxtX2IiLCJtYXhDb21tb25EaXZpc29yIiwibXVsdGlwbGUiLCJsZWFzdENvbW1vbk11bHRpcGxlIiwiYmlnIiwiaiIsInN1bW1hdGlvbiIsImFyZ3VtZW50cyIsInN1bSIsImVsbSIsImluZmluaXRlUHJvZHVjdCIsImlwIiwiZGl2aXNpb24iLCJkaXZpZGVuZCIsImRpdmlzb3IiLCJyZXN1bHQiLCJpbnRlZ2VyIiwicmVtYWluZGVyIiwiZmxvb3IiLCJyZWFsTnVtYmVyIiwiZGl2aXNvcnNTdW1tYXRpb24iLCJpc0FidW5kYW50TnVtYmVyIiwiaXNLYXByZWthck51bWJlclR5cGVBIiwibnVtIiwicyIsIlN0cmluZyIsImZpcnN0X2xlbiIsImFmdGVyX2xlbiIsImZpcnN0IiwiYWZ0ZXIiLCJOdW1iZXIiLCJzdWJzdHIiLCJpc0thcHJla2FyTnVtYmVyVHlwZUIiLCJzcGxpdCIsInNvcnQiLCJqb2luIiwicmV2ZXJzZSIsImlzS2FwcmVrYXJOdW1iZXIiLCJpc0ludGVnZXIiLCJmIiwiaGFybW9uaWNNZWFuIiwiaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIiLCJpc05hdHVyYWxOdW1iZXIiLCJjb2xsYXR6aFByb2JsZW0iLCJjYWxjIiwiZmVybWF0VGVzdCIsImlzWmVybyIsInBvdyIsImdldEluY2x1ZGVzTnVtYmVycyIsImJvb2wiLCJhciIsIm1ha2VGaWJvbmFjY2lTZXF1ZW5jZSIsImlzU3UiLCJDT05TVEFOVFMiLCJmdW5jIiwiaXNMYXJnZSIsImMiLCJhZGQiLCJNSU4iLCJEQloiLCJOQU4iLCJOT1RTVSIsImNvcmUiLCJpc05hTiIsIk5hTiIsIm51bVRvQXJyYXkiLCJzdHIiLCJzbGljZSIsIkVycm9yIiwiaXNOdW1BcnJheSIsImdsb2JhbCIsInNlbGYiLCJjb25zdGFudHMiLCJTdSIsIm9wdGlvbiIsIm5lZ2F0aXZlIiwicGFydHMiLCJpbnRfc3RyIiwiZGVjaW1hbF9zdHIiLCJpbnQwIiwibWF0Y2giLCJuZXdfaW50X3N0ciIsInN0YXJ0X3plcm8iLCJkZWMwIiwiZW5kX3plcm8iLCJuZXdfZGVjaW1hbF9zdHIiLCJpbnRfYXJyIiwiZGVjaW1hbF9hcnIiLCJlIiwiZGVjaW1hbCIsImRlbm9taW5hdG9yIiwiZnJhY3Rpb24iLCJudW1lcmF0b3IiLCJjb25jYXQiLCJtYWtlU3UiLCJtZXNzYWdlIiwic3UiLCJjb3B5U3UiLCJnZXRTdHJpbmciLCJaRVJPIiwiT05FIiwicHJvdG90eXBlIiwiYWMiLCJyZWR1Y2UiLCJnZXROdW1iZXIiLCJnZXRJbnRlZ2VyIiwiZ2V0RGVjaW1hbCIsImNsb25lIiwiZ2V0TGFyZ2UiLCJhYnNvbHV0ZSIsImZpZWxkIiwiX2EiLCJfYiIsImlzRXF1YWwiLCJpX2EiLCJpX2IiLCJkX2EiLCJkX2IiLCJsYXJnZSIsImNvbnRhaW5EZWNpbWFsIiwiaXNPbmUiLCJpc1NtYWxsIiwiaXNQb3NpdGl2ZSIsImlzTmVnYXRpdmUiLCJ2IiwibWFrZVBvc2l0aXZlIiwic3VidHJhY3QiLCJpbnRfYSIsImRlY19hIiwiaW50X2IiLCJkZWNfYiIsImxlbl9pIiwibGVuX2QiLCJvdmVyIiwiaW50X3JlcyIsImRlY19yZXMiLCJfcmVzIiwidW5zaGlmdCIsImQiLCJwb3AiLCJnYXAiLCJuZWdhdGUiLCJhX2lkIiwiYl9pZCIsImFfaV9sZW4iLCJiX2lfbGVuIiwiYV9kX2xlbiIsImJfZF9sZW4iLCJkX2dhcCIsImFicyIsImRlYnQiLCJyZXNfYXJyYXkiLCJhX2VsbSIsImJfZWxtIiwic3BsaWNlIiwibWludXMiLCJudW1iZXIiLCJuZXZhdGl2ZSIsIm1ha2VOZWdhdGl2ZSIsIm11bHRpcGxpY2F0aW9uIiwiZHBfYSIsImRwX2IiLCJyZXNfYXJyIiwicG9zX2EiLCJwb3NfYiIsInBvcyIsInBhZEVuZCIsInBhZFN0YXJ0IiwiY291bnQiLCJyZW1haW4iLCJwbHVzIiwidGFzdSIsImhpa3UiLCJtdWx0aXBseSIsImtha2VydSIsIndhcnUiLCJuZXh0IiwicHJldiIsImdldERpdmlzb3JzIiwiZ2V0Q29tbW9uRGl2aXNvcnMiLCJnZXRNYXhDb21tb25EaXZpc29yIiwiZ2V0TGVhc3RDb21tb25NdWx0aXBsZSIsIm11bHRpIiwiaXNGaWJvbmFjY2lOdW1iZXIiLCJ6ZXJvIiwib25lIiwiY29uc29sZSIsImxvZyIsImZpYnMiLCJsdWNhc1NlcXVlbmNlIiwiaXNMdWNhc051bWJlciIsImx1Y3MiLCJsdWNhc1ByaW1lTnVtYmVycyIsImxzIiwiZ2V0U2VxdWVuY2UiLCJkaWdpdHN1bSIsInNxdWFyZSIsImV4cG9uZW50aWF0ZSIsImN1YmUiLCJpc0RlZmljaWVudE51bWJlciIsImlzUGVyZmVjdE51bWJlciIsImZhY3RvcmlhbCIsImlzVHJpYW5nbGVOdW1iZXIiLCJnZXRUcmlhbmdsZU51bWJlcnMiLCJnZXRQb2x5Z29uYWxOdW1iZXJzIiwiZ2V0U3F1YXJlTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1lcnNlbm5lTnVtYmVycyIsInR3byIsImV4IiwibWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciIsInJhbiIsIktlaSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFHekMsTUFBTSxDQUFDbkQsSUFBSSxDQUFDUixNQUFMLEVBQUQsQ0FBbEI7QUFDQSxNQUFJNFAsR0FBSjs7QUFFQSxNQUFHeEosR0FBRyxLQUFLLEdBQVgsRUFBZTtBQUNiLFFBQUduRyxHQUFHLENBQUMrRSxNQUFKLEVBQUgsRUFBZ0I7QUFDZDRLLFNBQUcsR0FBRzVILE1BQU0sQ0FBQyxDQUFELENBQVo7QUFDRCxLQUZELE1BRUs7QUFDSDRILFNBQUcsR0FBRzNQLEdBQU47QUFDRDtBQUNGLEdBTkQsTUFNSztBQUNILFFBQUlVLEdBQUcsR0FBR3lGLEdBQUcsQ0FBQ2pDLEtBQUosQ0FBVSxHQUFWLENBQVY7QUFDQXlMLE9BQUcsR0FBRzVILE1BQU0sQ0FBQyxPQUFPckgsR0FBRyxDQUFDLENBQUQsQ0FBWCxDQUFOLENBQXNCc0wsY0FBdEIsQ0FBcUNyTSxHQUFyQyxDQUFOO0FBQ0Q7O0FBQ0QsU0FBT2dRLEdBQVA7QUFDRCxDQTVCRDs7QUE4QmU7QUFDYjVILFFBQU0sRUFBRUEsTUFESztBQUViRyxRQUFNLEVBQUVBLE1BRks7QUFHYjdDLE1BQUksRUFBRUEsSUFITztBQUlidUssS0FBRyxFQUFFdlEsd0NBSlE7QUFLYnFILElBQUUsRUFBRUEsRUFMUztBQU1ibUMsVUFBUSxFQUFFQTtBQU5HLENBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IE1BWCwgTUlOIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgeyBtYWtlU3UgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IENPTlNUQU5UUyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuY29uc3QgUyA9IHt9O1xuY29uc3QgSyA9IHt9O1xuXG5cbmNvbnN0IEZJUlNUX1BSSU1FX05VTUJFUiA9IDI7XG5cblMuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4gPT09IDAgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4gPT09IDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYobiA+PSBNQVgpe1xuICAgIHJldHVybiBgQXJndW1lbnQgZXhjZWVkcyBtYXhpbXVtIHZhbHVlKCR7TUFYfSlgO1xuICB9XG5cbiAgY29uc3QgbWF4ID0gbjtcbiAgZm9yKCBsZXQgaSA9IG1heCAtMTsgaSA+IDE7IGktLSl7XG4gICAgaWYoIChtYXggJSBpKSA9PT0gMCApe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblMubmV4dE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiArK247XG59O1xuXG5TLnByZXZOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIVMuaXNOdW1iZXIobikpe1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gLS1uO1xufTtcblxuSy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG5cbiAgaWYobWluIGluc3RhbmNlb2YgQXJyYXkgJiYgbWluLmxlbmd0aCA+IDApe1xuICAgIHJldHVybiBLLnJhbmRvbUVsZW1lbnQobWluKTtcbiAgfVxuXG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSAwO1xuICB9XG4gIGlmKG1heCA9PT0gdW5kZWZpbmVkKXtcbiAgICBtYXggPSAxO1xuICB9XG5cbiAgY29uc3QgbGVuID0gbWF4IC0gbWluO1xuICBjb25zdCByYW5kID0gTWF0aC5yYW5kb20oKTtcbiAgcmV0dXJuICggcmFuZCAqIGxlbiApICsgbWluO1xufTtcblxuSy5yYW5kb21FbGVtZW50ID0gZnVuY3Rpb24oYXJyYXkpe1xuICBjb25zdCBpID0gSy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoIC0gMSk7XG4gIHJldHVybiBhcnJheVtpXTtcbn07XG5cbksucmFuZG9tSW50ID0gZnVuY3Rpb24obWluLCBtYXgpe1xuICBpZiggIVMuaXNOdW1iZXIobWluKSB8fCAhUy5pc051bWJlcihtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYobWluID49IG1heCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IG1pbjsgaSA8PSBtYXg7IGkrKyl7XG4gICAgYXJyLnB1c2goaSk7XG4gIH1cblxuICBjb25zdCByZXMgPSBLLnJhbmRvbUVsZW1lbnQoYXJyKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuSy5wcmltZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gRklSU1RfUFJJTUVfTlVNQkVSOyBpIDwgTUFYOyBpKyspe1xuICAgIGlmKFMuaXNQcmltZU51bWJlcihpKSl7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblxuUy5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoIFMuaXNOdW1iZXIobikgJiYgbiAlIDIgPT09IDAgKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc09kZE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZiggUy5pc051bWJlcihuKSAmJiBuICUgMiAhPT0gMCApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5LLmRpdmlzb3JzID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDw9IG47IGkrKyl7XG4gICAgaWYobiAlIGkgPT09IDApe1xuICAgICAgYXJyLnB1c2goaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg6bjg7zjgq/jg6rjg4Pjg4njga7kupLpmaTms5VcbksuZXVjbGlkZWFuQWxnb3JpdGhtID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKCAhUy5pc051bWJlcihhKSB8fCAhUy5pc051bWJlcihiKSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG4gIGlmKCBhID09PSBiKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCB0ZW1wO1xuICBpZiggYSA8IGIpe1xuICAgIHRlbXAgPSBhO1xuICAgIGEgPSBiO1xuICAgIGIgPSB0ZW1wO1xuICB9XG5cbiAgbGV0IGF0ZW1wID0gYTtcbiAgbGV0IGJ0ZW1wID0gYjtcbiAgbGV0IGN0ZW1wO1xuICBsZXQgcmVzO1xuICBsZXQgY291bnRlciA9IDA7XG4gIGNvbnN0IGNvcHJpbWUgPSBcImNvcHJpbWVcIjtcbiAgd2hpbGUoY3RlbXAgIT09MCl7XG4gICAgY3RlbXAgPSBhdGVtcCAlIGJ0ZW1wO1xuICAgIGlmKGN0ZW1wID09PSAwKXtcbiAgICAgIHJlcyA9IGJ0ZW1wO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGN0ZW1wID09PSAxKXtcbiAgICAgIHJlcyA9IGNvcHJpbWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY291bnRlciA+PSBNQVgpe1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGF0ZW1wID0gYnRlbXA7XG4gICAgYnRlbXAgPSBjdGVtcDtcbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuSy5jb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZihhID09PSB1bmRlZmluZWQgfHwgYiA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnJfYSA9IEsuZGl2aXNvcnMoYSk7XG4gIGlmKGEgPT09IGIpe1xuICAgIHJldHVybiBhcnJfYTtcbiAgfVxuICBjb25zdCBhcnJfYiA9IEsuZGl2aXNvcnMoYik7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIGRpdnMucHVzaChlbG1fYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpdnM7XG59O1xuXG5LLm1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyID0gSy5jb21tb25EaXZpc29ycyhhLCBiKTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5LLm11bHRpcGxlID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyBpIDwgTUFYOyBpKyspe1xuICAgIGFyci5wdXNoKG4gKiBpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuSy5sZWFzdENvbW1vbk11bHRpcGxlID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGxldCBiaWc7XG4gIGlmKCBhIDwgYil7XG4gICAgYmlnID0gYjtcbiAgfWVsc2V7XG4gICAgYmlnID0gYTtcbiAgfVxuICBjb25zdCBhcnJfYSA9IFtdO1xuICBjb25zdCBhcnJfYiA9IFtdO1xuXG4gIGxldCBpID0xO1xuICB3aGlsZShpIDw9IGJpZyl7XG4gICAgYXJyX2EucHVzaCggYSAqIGkpO1xuICAgIGkrKztcbiAgfVxuICBsZXQgaiA9MTtcbiAgd2hpbGUoaiA8PSBiaWcpe1xuICAgIGFycl9iLnB1c2goIGIgKiBqKTtcbiAgICBqKys7XG4gIH1cblxuICBmb3IobGV0IGsgPSAwOyBrIDwgYXJyX2EubGVuZ3RoOyBrKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYXJyX2Fba107XG4gICAgZm9yKGxldCBsID0gMDsgbCA8IGFycl9iLmxlbmd0aDsgbCsrKXtcbiAgICAgIGNvbnN0IGVsbV9iID0gYXJyX2JbbF07XG4gICAgICBpZihlbG1fYSA9PT0gZWxtX2Ipe1xuICAgICAgICByZXR1cm4gZWxtX2E7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5LLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIG5vdCBOdW1iZXJcIjtcbiAgfVxuXG4gIGxldCBzdW0gPSAwO1xuICBmb3IobGV0IGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2pdO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBzdW0gKz0gZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuSy5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBhcnJheS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIH1cbiAgaWYoYXJyYXkubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBlbXB0eS5cIjtcbiAgfVxuICBsZXQgaXAgPSAxO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IGFycmF5W2ldO1xuICAgIGlmKFMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICBpcCA9IGlwICogZWxtO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IGEgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBpcDtcbn07XG5cbksuZGl2aXNpb24gPSBmdW5jdGlvbihkaXZpZGVuZCwgZGl2aXNvcil7XG4gIGlmKGRpdmlkZW5kID09PSB1bmRlZmluZWQgfHwgZGl2aXNvciA9PT0gdW5kZWZpbmVkKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gZGl2aWRlbmQgLyBkaXZpc29yO1xuICByZXR1cm4ge1xuICAgIGludGVnZXI6IHtcbiAgICAgIHJlbWFpbmRlcjogZGl2aWRlbmQgJSBkaXZpc29yLFxuICAgICAgcmVzdWx0OiBNYXRoLmZsb29yKHJlc3VsdClcbiAgICB9LFxuICAgIHJlYWxOdW1iZXI6IHJlc3VsdFxuICB9O1xufTtcblxuSy5kaXZpc29yc1N1bW1hdGlvbiA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBsZXQgYSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGEgKz0gYXJyW2ldO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuSy5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IHN1bSA9IEsuZGl2aXNvcnNTdW1tYXRpb24obik7XG4gIGlmKHN1bSA+IG4gKiAyKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXJUeXBlQSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBudW0gPSBuICogbjtcbiAgY29uc3QgcyA9IFN0cmluZyhudW0pO1xuICBjb25zdCBsZW4gPSBzLmxlbmd0aDtcbiAgbGV0IGZpcnN0X2xlbiA9IDA7XG4gIGxldCBhZnRlcl9sZW4gPSAwO1xuICBsZXQgZmlyc3QsIGFmdGVyO1xuICBpZihTLmlzT2RkTnVtYmVyKGxlbikpe1xuICAgIGZpcnN0X2xlbiA9IChsZW4gLSAxKSAvIDI7XG4gICAgYWZ0ZXJfbGVuID0gZmlyc3RfbGVuICsgMTtcbiAgfWVsc2V7XG4gICAgZmlyc3RfbGVuID0gbGVuIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW47XG4gIH1cbiAgZmlyc3QgPSBOdW1iZXIocy5zdWJzdHIoMCwgZmlyc3RfbGVuKSk7XG4gIGFmdGVyID0gTnVtYmVyKHMuc3Vic3RyKGZpcnN0X2xlbiwgYWZ0ZXJfbGVuKSk7XG5cbiAgaWYoKCBmaXJzdCArIGFmdGVyICkgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVCID0gZnVuY3Rpb24obil7XG5cbiAgY29uc3QgYXJyID0gU3RyaW5nKG4pLnNwbGl0KFwiXCIpO1xuXG4gIGNvbnN0IG1pbiA9IE51bWJlcihhcnIuc29ydCgpLmpvaW4oXCJcIikpO1xuICBjb25zdCBtYXggPSBOdW1iZXIoYXJyLnJldmVyc2UoKS5qb2luKFwiXCIpKTtcblxuICBpZigobWF4IC0gbWluKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKEsuaXNLYXByZWthck51bWJlclR5cGVBKG4pIHx8IEsuaXNLYXByZWthck51bWJlclR5cGVCKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuUy5pc0ludGVnZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgZiA9IE1hdGguZmxvb3Iobik7XG4gIGlmKCBmID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyDoqr/lkozlubPlnYdcbksuaGFybW9uaWNNZWFuID0gZnVuY3Rpb24oYXJyKXtcbiAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgc3VtICs9IDEgLyBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGxlbiAvIHN1bTtcbn07XG5cbi8vIOiqv+WSjOaVsOOBi+OBqeOBhuOBi1xuSy5pc0hhcm1vbmljRGl2aXNvck51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBLLmRpdmlzb3JzKG4pO1xuICBjb25zdCByZXMgPSBLLmhhcm1vbmljTWVhbihhcnIpO1xuICBpZihTLmlzSW50ZWdlcihyZXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZihuID4gMCAmJiBTLmlzSW50ZWdlcihuKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuSy5jb2xsYXR6aFByb2JsZW0gPSBmdW5jdGlvbihudW0pe1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGNvbnN0IGNhbGMgPSBmdW5jdGlvbihuKXtcbiAgICBsZXQgcmVzID0gbjtcbiAgICBpZihTLmlzT2RkTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gKiAzICsgMTtcbiAgICB9ZWxzZSBpZihTLmlzRXZlbk51bWJlcihuKSl7XG4gICAgICByZXMgPSBuIC8gMjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfTtcblxuICB3aGlsZShudW0gPiAxKXtcbiAgICBudW0gPSBjYWxjKG51bSk7XG4gICAgYXJyLnB1c2gobnVtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8g44OV44Kn44Or44Oe44O844OG44K544OIXG4vLyBKU+OBruaJseOBiOOCi+evhOWbsuOCkui2heOBiOOBpuOBhOOBpuOBhuOBvuOBj+WLleOBi+OBmlxuSy5mZXJtYXRUZXN0ID0gZnVuY3Rpb24obiwgbWF4KXtcbiAgaWYoIVMuaXNJbnRlZ2VyKG4pIHx8IFMuaXNaZXJvKG4pIHx8IG4gPT09IDEpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnMuIFwiICsgbiArIFwiIGlzIGluY29ycmVjdCBwYXJhbWV0ZXIuXCI7XG4gIH1cblxuICBpZighbWF4KXtcbiAgICBtYXggPSAxMDA7XG4gIH1cblxuICBmb3IobGV0IGkgPSAxOyBpIDw9IG1heDsgaSsrKXtcbiAgICBjb25zdCBhID0gSy5yYW5kb21JbnQoMiwgbiAtIDEpO1xuICAgIGlmKEsubWF4Q29tbW9uRGl2aXNvcihhLCBuKSAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gICAgY29uc3QgcmVzID0gTWF0aC5wb3coYSwgbiAtIDEpICUgbjtcbiAgICBpZihyZXMgIT09IDEpe1xuICAgICAgcmV0dXJuIFwiQ29tcG9zaXQgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBcIk1heWJlIFByaW1lIE51bWJlclwiO1xufTtcblxuLy8g57WE44G/5ZCI44KP44Gb5pWw44Gu6KiI566XXG4vLyBLLmNvbWJpbmF0aW9ucyA9IGZ1bmN0aW9uKGFycil7XG4vLyB9O1xuXG4vLyAzID0+IFswLCAzXSwgWzEsIDJdLCBbMiwgMV0sIFszLCAwXVxuSy5nZXRJbmNsdWRlc051bWJlcnMgPSBmdW5jdGlvbihudW0pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHRlbXAgPSBudW07XG4gIGxldCBib29sID0gdHJ1ZTtcbiAgd2hpbGUoYm9vbCl7XG4gICAgY29uc3QgYSA9IHRlbXA7XG4gICAgY29uc3QgYiA9IG51bSAtdGVtcDtcbiAgICBjb25zdCBhciA9IFthLGJdO1xuICAgIGFyci5wdXNoKGFyKTtcbiAgICB0ZW1wID0gdGVtcCAtMTtcbiAgICBpZih0ZW1wIDwgMCl7XG4gICAgICBib29sID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIGZpYm9uYWNjaVxuY29uc3QgbWFrZUZpYm9uYWNjaVNlcXVlbmNlID0gZnVuY3Rpb24oYSwgYil7XG5cbiAgaWYoIWEuaXNTdSgpIHx8ICFiLmlzU3UoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgTUFYID0gQ09OU1RBTlRTLk1BWDtcblxuICBjb25zdCBhcnIgPSBbYSwgYl07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogSyxcbiAgbWFrZUZpYm9uYWNjaVNlcXVlbmNlOiBtYWtlRmlib25hY2NpU2VxdWVuY2Vcbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gIE1BWDogMTAwMDAsXG4gIE1JTjogLTEwMDAwLFxuICBEQlo6IFwiRGl2aXNpb24gYnkgWmVyb1wiLFxuICBOQU46IFwiTm90IGEgbnVtYmVyXCIsXG4gIE5PVFNVOiBcIkFyZ3VtZW50IGlzIG5vdCBTdS5cIlxufVxuIiwiY29uc3QgY29yZSA9IHt9O1xuXG5jb3JlLmlzTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKHR5cGVvZiBuID09PSBcIm51bWJlclwiKXtcbiAgICBpZihOdW1iZXIuaXNOYU4obikpe1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuY29yZS5pc1plcm8gPSBmdW5jdGlvbihuKXtcbiAgaWYoIG4gPT09IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG4vLyDphY3liJfjgafjga7oqIjnrpdcbmNvcmUubnVtVG9BcnJheSA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgY29uc3Qgc3RyID0gU3RyaW5nKG4pO1xuICBjb25zdCBsZW4gPSBzdHIubGVuZ3RoO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgIGNvbnN0IGVsbSA9IE51bWJlcihzdHIuc2xpY2UoaSwgaSArIDEpKTtcbiAgICBpZighdGhpcy5pc051bWJlcihlbG0pKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIik7XG4gICAgfVxuICAgIGFyci5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBzIGZyb20gXCIuL3N1LmpzXCI7XG5cbihmdW5jdGlvbihnbG9iYWwsIHMpe1xuICBnbG9iYWwucyA9IHM7XG59KShnbG9iYWwgfHwgc2VsZiwgcyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgXG4gIEssXG4gIFMsXG4gIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZVxufSBmcm9tIFwiLi9TSy5qc1wiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBNQVggPSBjb25zdGFudHMuTUFYO1xuY29uc3QgTUlOID0gY29uc3RhbnRzLk1JTjtcbmNvbnN0IERCWiA9IGNvbnN0YW50cy5EQlo7XG5jb25zdCBOQU4gPSBjb25zdGFudHMuTkFOO1xuY29uc3QgTk9UU1UgPSBjb25zdGFudHMuTk9UU1U7XG5cblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZihpc05hTihuKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FycjtcbiAgbGV0IGRlY2ltYWxfYXJyO1xuXG5cbiAgdHJ5e1xuICAgIGludF9hcnIgPSBjb3JlLm51bVRvQXJyYXkoaW50X3N0cik7XG4gICAgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG4gIH1jYXRjaChlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgbGV0IHJlcztcbiAgdHJ5e1xuICAgIHJlcyA9IG5ldyBTdShudW0sIG9wdGlvbik7XG4gIH1jYXRjaChlKXtcbiAgICByZXMgPSBlLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmUgPyBgLSR7c3RyfWAgOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgY29uc3QgX2EgPSBtYWtlU3UoYS5nZXRTdHJpbmcoKSk7XG4gIGNvbnN0IF9iID0gbWFrZVN1KGIuZ2V0U3RyaW5nKCkpO1xuXG4gIGlmKGFic29sdXRlKXtcbiAgICBfYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIF9iLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihfYS5pc1plcm8oKSAmJiBfYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgIV9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKF9hLmludGVnZXIubGVuZ3RoID4gX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EuaW50ZWdlci5sZW5ndGggPCBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IF9hLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IF9hLmludGVnZXJbaV07XG4gICAgbGV0IGVsbV9iID0gX2IuaW50ZWdlcltpXTtcbiAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gX2EuZGVjaW1hbC5sZW5ndGggPj0gX2IuZGVjaW1hbC5sZW5ndGggPyBfYS5kZWNpbWFsLmxlbmd0aCA6IF9iLmRlY2ltYWwubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgZWxtX2EgPSBfYS5kZWNpbWFsW2ldID8gX2EuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBfYi5kZWNpbWFsW2ldID8gX2IuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZihuZWdhdGl2ZSl7XG4gICAgZmllbGQgPSBbZmllbGRbMV0sIGZpZWxkWzBdXTtcbiAgfVxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkWzBdO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgaV9hID0gYS5pbnRlZ2VyO1xuICBjb25zdCBpX2IgPSBiLmludGVnZXI7XG4gIGNvbnN0IGRfYSA9IGEuZGVjaW1hbDtcbiAgY29uc3QgZF9iID0gYi5kZWNpbWFsO1xuXG4gIGNvbnN0IGxhcmdlID0gZ2V0TGFyZ2UoYSwgYik7XG5cbiAgaWYoIWxhcmdlKXtcbiAgICBpZihpX2EubGVuZ3RoID09PSBpX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpX2FbaV0gIT09IGlfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2UgaWYoZF9hLmxlbmd0aCA9PT0gZF9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZF9hW2ldICE9PSBkX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGEubmVnYXRpdmUgPT09IGIubmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuU3UucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaW50ZWdlci5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnRlZ2VyWzBdID09PSAwICYmICF0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09uZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjFcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTGFyZ2UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYS5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYi5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNQb3NpdGl2ZSgpICYmIHRoaXMuaXNJbnRlZ2VyKCkgJiYgdGhpcy5pc0xhcmdlKENPTlNUQU5UUy5aRVJPKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGRwX2EgPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBkcF9iID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCByZXNfYXJyID0gW107XG4gIGZvcihsZXQgaV9hID0gMDsgaV9hIDwgYV9pZC5sZW5ndGg7IGlfYSsrKXtcbiAgICBmb3IobGV0IGlfYiA9IDA7IGlfYiA8IGJfaWQubGVuZ3RoOyBpX2IrKyl7XG4gICAgICBjb25zdCBlbG1fYSA9IGFfaWRbaV9hXTtcbiAgICAgIGNvbnN0IGVsbV9iID0gYl9pZFtpX2JdO1xuICAgICAgY29uc3QgcG9zX2EgPSBkcF9hIC0gaV9hIC0xO1xuICAgICAgY29uc3QgcG9zX2IgPSBkcF9iIC0gaV9iIC0xO1xuICAgICAgY29uc3QgcG9zID0gcG9zX2EgKyBwb3NfYjtcbiAgICAgIGxldCByZXMgPSBlbG1fYSAqIGVsbV9iO1xuICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHBvcyk7XG4gICAgICBsZXQgc3RyO1xuICAgICAgaWYocG9zID49IDApe1xuICAgICAgICBsZW4rKztcbiAgICAgICAgaWYocmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiArIDEsIFwiMFwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobGVuID09PSAxICYmIHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpWzBdICsgXCIuXCIgKyBTdHJpbmcocmVzKVsxXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gXCIwLlwiICsgU3RyaW5nKHJlcykucGFkU3RhcnQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc19hcnIucHVzaChtYWtlU3Uoc3RyKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcyA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc19hcnIubGVuZ3RoOyBpKyspe1xuICAgIHJlcyA9IHJlcy5hZGQocmVzX2FycltpXSk7XG4gIH1cblxuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY291bnQgPSBtYWtlU3UoXCIxXCIpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpIHx8IGNvdW50LmlzRXF1YWwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oY291bnQpKTtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoXCIxXCIpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgY29uc29sZS5sb2coSyk7XG5cbiAgY29uc3QgZmlicyA9IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSh6ZXJvLCBvbmUpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmx1Y2FzU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuXG4gIGNvbnN0IE1BWCA9IENPTlNUQU5UUy5NQVg7XG5cbiAgY29uc3QgYXJyID0gW21ha2VTdSgyKSwgbWFrZVN1KDEpXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNMdWNhc051bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBsdWNzID0gdGhpcy5sdWNhc1NlcXVlbmNlKDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbHVjcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBsdWNzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmx1Y2FzUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbHMgPSB0aGlzLmx1Y2FzU2VxdWVuY2UoKTtcbiAgY29uc3QgYXJyID0gW107XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGxzLmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBsID0gbHNbaV07XG4gICAgaWYobC5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW3RoaXNdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gYXJndW1lbnRzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59O1xuXG5TdS5wcm90b3R5cGUuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXRTZXF1ZW5jZSguLi5hcmd1bWVudHMpO1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBzdW0gPSBzdW0uYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn07XG5cblN1LnByb3RvdHlwZS5pbmZpbml0ZVByb2R1Y3QgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldFNlcXVlbmNlKC4uLmFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgYSA9IG1ha2VTdSh0aGlzLmFycmF5W2ldKTtcbiAgICBzdW0gPSBzdW0uYWRkKGEpO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZXhwb25lbnRpYXRlKG1ha2VTdSgyKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuY3ViZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmV4cG9uZW50aWF0ZSA9IGZ1bmN0aW9uKHN1KXtcbiAgY29uc3Qgb25lID0gbWFrZVN1KFwiMVwiKTtcbiAgaWYoc3UuaXNaZXJvKCkpe1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgaWYoc3UuaXNFcXVhbChvbmUpKXtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBsZXQgY291bnQgPSBvbmU7XG4gIGxldCByZXMgPSBjb3B5U3UodGhpcyk7XG4gIHdoaWxlKGNvdW50LmlzU21hbGwoc3UpKXtcbiAgICByZXMgPSB0aGlzLm11bHRpcGxpY2F0aW9uKHJlcyk7XG4gICAgY291bnQgPSBjb3VudC5uZXh0KCk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5pc09uZSgpIHx8IHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjJcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcbiAgd2hpbGUoY291bnRlci5pc0xhcmdlKG9uZSkpe1xuICAgIGxldCBlID0gdGhpcy5kaXZpc2lvbihjb3VudGVyKTtcbiAgICBpZihlLnJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNvcnNTdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSB0aGlzLmdldERpdmlzb3JzKCk7XG4gIGxldCBhID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBhID0gYS5hZGQoYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gYTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0FidW5kYW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNMYXJnZSggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzRGVmaWNpZW50TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3VtID0gdGhpcy5kaXZpc29yc1N1bW1hdGlvbigpO1xuICBpZihzdW0uaXNTbWFsbCggdGhpcy5tdWx0aXBsaWNhdGlvbihtYWtlU3UoMikpKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzUGVyZmVjdE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLnN1YnRyYWN0KHRoaXMpLmlzRXF1YWwodGhpcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5mYWN0b3JpYWwgPSBmdW5jdGlvbigpe1xuICBsZXQgcmVzID0gdGhpcztcbiAgbGV0IGNvdW50ZXIgPSB0aGlzLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZSh6ZXJvKSl7XG4gICAgcmVzID0gcmVzLm11bHRpcGxpY2F0aW9uKGNvdW50ZXIpO1xuICAgIGNvdW50ZXIgPSBjb3VudGVyLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblN1LnByb3RvdHlwZS5pc1RyaWFuZ2xlTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgbGV0IGVsbSA9IG1ha2VTdSgxKTtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBiID0gdHJ1ZTtcbiAgd2hpbGUoYil7XG4gICAgcmVzID0gcmVzLnN1YnRyYWN0KGVsbSk7XG4gICAgaWYocmVzLmlzWmVybygpKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZihyZXMuaXNTbWFsbChtYWtlU3UoMCkpKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxtID0gZWxtLmFkZChtYWtlU3UoMSkpO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0VHJpYW5nbGVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZ2V0UG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMykpO1xufTtcblxuU3UucHJvdG90eXBlLmdldFNxdWFyZU51bWJlcnMgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5nZXRQb2x5Z29uYWxOdW1iZXJzKG1ha2VTdSg0KSk7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0UG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4pe1xuICBpZighaXNTdShuKSl7XG4gICAgbiA9IG1ha2VTdShuKTtcbiAgfVxuICBpZihuLmlzU21hbGwobWFrZVN1KDMpKSl7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDEpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IHJhbmdlID0gY3VycmVudDtcblxuICBjb25zdCBpbmNyZW1lbnQgPSBuLnN1YnRyYWN0KG1ha2VTdSgyKSk7XG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSl7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgcmFuZ2UgPSByYW5nZS5hZGQoaW5jcmVtZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5hZGQocmFuZ2UpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUubWVyc2VubmVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgdHdvID0gbWFrZVN1KDIpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgbGV0IGN1cnJlbnQgPSBtYWtlU3UoMCk7XG4gIGxldCBleCA9IG1ha2VTdSgxKTtcbiAgXG4gIHdoaWxlKGN1cnJlbnQuaXNTbWFsbChDT05TVEFOVFMuTUFYKSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLm1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbWFyciA9IHRoaXMubWVyc2VubmVOdW1iZXJzKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbWFyci5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbiA9IG1hcnJbaV07XG4gICAgaWYobi5pc1ByaW1lTnVtYmVyKCkpe1xuICAgICAgYXJyLnB1c2gobik7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSB0aGlzLm1lcnNlbm5lTnVtYmVycygpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgbXMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBtID0gbXNbaV07XG4gICAgaWYobS5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNNZXJzZW5uZVByaW1lTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbiA9IHRoaXM7XG4gIGlmKG4uaXNaZXJvKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBtcyA9IHRoaXMubWVyc2VubmVQcmltZU51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IG1ha2VTdSgwKTtcbiAgfVxuICBpZihtYXggPT09IHVuZGVmaW5lZCl7XG4gICAgbWF4ID0gbWFrZVN1KDEpO1xuICB9XG4gIGlmKCFpc1N1KG1pbikpe1xuICAgIG1pbiA9IG1ha2VTdShtaW4pO1xuICB9XG4gIGlmKCFpc1N1KG1heCkpe1xuICAgIG1heCA9IG1ha2VTdShtYXgpO1xuICB9XG5cbiAgY29uc3Qgc3RyID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBsZXQgcmFuO1xuXG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIGlmKG1pbi5pc1plcm8oKSl7XG4gICAgICByYW4gPSBtYWtlU3UoMCk7XG4gICAgfWVsc2V7XG4gICAgICByYW4gPSBtaW47XG4gICAgfVxuICB9ZWxzZXtcbiAgICBsZXQgYXJyID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICByYW4gPSBtYWtlU3UoXCIwLlwiICsgYXJyWzFdKS5tdWx0aXBsaWNhdGlvbihtYXgpO1xuICB9XG4gIHJldHVybiByYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ha2VTdTogbWFrZVN1LFxuICBjb3B5U3U6IGNvcHlTdSxcbiAgaXNTdTogaXNTdSxcbiAgS2VpOiBLLFxuICBTdTogU3UsXG4gIGdldExhcmdlOiBnZXRMYXJnZVxufTsiXSwic291cmNlUm9vdCI6IiJ9