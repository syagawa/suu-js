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
  DBZ: "Division by Zero"
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

  if (a.isZero()) {
    return makeSu(0);
  }

  if (b.isZero()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJTIiwiSyIsIkZJUlNUX1BSSU1FX05VTUJFUiIsImlzUHJpbWVOdW1iZXIiLCJuIiwiaXNOdW1iZXIiLCJNQVgiLCJtYXgiLCJpIiwibmV4dE51bWJlciIsInByZXZOdW1iZXIiLCJyYW5kb20iLCJtaW4iLCJBcnJheSIsImxlbmd0aCIsInJhbmRvbUVsZW1lbnQiLCJ1bmRlZmluZWQiLCJsZW4iLCJyYW5kIiwiTWF0aCIsImFycmF5IiwicmFuZG9tSW50IiwiYXJyIiwicHVzaCIsInJlcyIsInByaW1lTnVtYmVycyIsImZpYm9uYWNjaVNlcXVlbmNlIiwic3RhcnQiLCJmdW5jIiwiYSIsIk51bWJlciIsImIiLCJpc0ZpYm9uYWNjaU51bWJlciIsImZpYiIsImluZGV4IiwiaW5kZXhPZiIsImlzRXZlbk51bWJlciIsImlzT2RkTnVtYmVyIiwiZGl2aXNvcnMiLCJldWNsaWRlYW5BbGdvcml0aG0iLCJ0ZW1wIiwiYXRlbXAiLCJidGVtcCIsImN0ZW1wIiwiY291bnRlciIsImNvcHJpbWUiLCJjb21tb25EaXZpc29ycyIsImFycl9hIiwiYXJyX2IiLCJkaXZzIiwiayIsImVsbV9hIiwibCIsImVsbV9iIiwibWF4Q29tbW9uRGl2aXNvciIsIm11bHRpcGxlIiwibGVhc3RDb21tb25NdWx0aXBsZSIsImJpZyIsImoiLCJzdW1tYXRpb24iLCJhcmd1bWVudHMiLCJzdW0iLCJlbG0iLCJpbmZpbml0ZVByb2R1Y3QiLCJpcCIsImRpdmlzaW9uIiwiZGl2aWRlbmQiLCJkaXZpc29yIiwicmVzdWx0IiwiaW50ZWdlciIsInJlbWFpbmRlciIsImZsb29yIiwicmVhbE51bWJlciIsImRpdmlzb3JzU3VtbWF0aW9uIiwiaXNBYnVuZGFudE51bWJlciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQSIsIm51bSIsInMiLCJTdHJpbmciLCJmaXJzdF9sZW4iLCJhZnRlcl9sZW4iLCJmaXJzdCIsImFmdGVyIiwic3Vic3RyIiwiaXNLYXByZWthck51bWJlclR5cGVCIiwic3BsaXQiLCJzb3J0Iiwiam9pbiIsInJldmVyc2UiLCJpc0thcHJla2FyTnVtYmVyIiwiaXNJbnRlZ2VyIiwiZiIsImhhcm1vbmljTWVhbiIsImlzSGFybW9uaWNEaXZpc29yTnVtYmVyIiwiaXNOYXR1cmFsTnVtYmVyIiwiY29sbGF0emhQcm9ibGVtIiwiY2FsYyIsImZlcm1hdFRlc3QiLCJpc1plcm8iLCJwb3ciLCJnZXRJbmNsdWRlc051bWJlcnMiLCJib29sIiwiYXIiLCJNSU4iLCJEQloiLCJjb3JlIiwiaXNOYU4iLCJOYU4iLCJudW1Ub0FycmF5Iiwic3RyIiwic2xpY2UiLCJpc051bUFycmF5IiwiZ2xvYmFsIiwic2VsZiIsImNvbnN0YW50cyIsIlN1Iiwib3B0aW9uIiwibmVnYXRpdmUiLCJwYXJ0cyIsImludF9zdHIiLCJkZWNpbWFsX3N0ciIsImludDAiLCJtYXRjaCIsIm5ld19pbnRfc3RyIiwic3RhcnRfemVybyIsImRlYzAiLCJlbmRfemVybyIsIm5ld19kZWNpbWFsX3N0ciIsImludF9hcnIiLCJkZWNpbWFsX2FyciIsImRlY2ltYWwiLCJkZW5vbWluYXRvciIsImZyYWN0aW9uIiwibnVtZXJhdG9yIiwiY29uY2F0IiwibWFrZVN1IiwiaXNTdSIsInN1IiwiY29weVN1IiwiZ2V0U3RyaW5nIiwiZ2V0TWVzc2FnZSIsInR5cGUiLCJDT05TVEFOVFMiLCJaRVJPIiwiT05FIiwicHJvdG90eXBlIiwiYWMiLCJyZWR1Y2UiLCJlIiwiZ2V0TnVtYmVyIiwiZ2V0SW50ZWdlciIsImdldERlY2ltYWwiLCJjbG9uZSIsImdldExhcmdlIiwiYWJzb2x1dGUiLCJmaWVsZCIsIl9hIiwiX2IiLCJpc0VxdWFsIiwiaV9hIiwiaV9iIiwiZF9hIiwiZF9iIiwibGFyZ2UiLCJjb250YWluRGVjaW1hbCIsImlzT25lIiwiaXNMYXJnZSIsImlzU21hbGwiLCJpc1Bvc2l0aXZlIiwiaXNOZWdhdGl2ZSIsInYiLCJhZGQiLCJFcnJvciIsIm1ha2VQb3NpdGl2ZSIsInN1YnRyYWN0IiwiaW50X2EiLCJkZWNfYSIsImludF9iIiwiZGVjX2IiLCJsZW5faSIsImxlbl9kIiwib3ZlciIsImludF9yZXMiLCJkZWNfcmVzIiwiX3JlcyIsInVuc2hpZnQiLCJkIiwicG9wIiwiZ2FwIiwibmVnYXRlIiwiYV9pZCIsImJfaWQiLCJhX2lfbGVuIiwiYl9pX2xlbiIsImFfZF9sZW4iLCJiX2RfbGVuIiwiZF9nYXAiLCJhYnMiLCJkZWJ0IiwicmVzX2FycmF5IiwiYV9lbG0iLCJiX2VsbSIsInNwbGljZSIsIm1pbnVzIiwibnVtYmVyIiwibmV2YXRpdmUiLCJtYWtlTmVnYXRpdmUiLCJtdWx0aXBsaWNhdGlvbiIsImRwX2EiLCJkcF9iIiwicmVzX2FyciIsInBvc19hIiwicG9zX2IiLCJwb3MiLCJwYWRFbmQiLCJwYWRTdGFydCIsImNvdW50IiwicmVtYWluIiwicGx1cyIsInRhc3UiLCJoaWt1IiwibXVsdGlwbHkiLCJrYWtlcnUiLCJ3YXJ1IiwibmV4dCIsInByZXYiLCJnZXREaXZpc29ycyIsImdldENvbW1vbkRpdmlzb3JzIiwiZ2V0TWF4Q29tbW9uRGl2aXNvciIsImdldExlYXN0Q29tbW9uTXVsdGlwbGUiLCJtdWx0aSIsInplcm8iLCJvbmUiLCJjIiwiZmlicyIsImx1Y2FzU2VxdWVuY2UiLCJpc0x1Y2FzTnVtYmVyIiwibHVjcyIsImx1Y2FzUHJpbWVOdW1iZXJzIiwibHMiLCJnZXRTZXF1ZW5jZSIsImRpZ2l0c3VtIiwic3F1YXJlIiwiZXhwb25lbnRpYXRlIiwiY3ViZSIsImlzRGVmaWNpZW50TnVtYmVyIiwiaXNQZXJmZWN0TnVtYmVyIiwiZmFjdG9yaWFsIiwiaXNUcmlhbmdsZU51bWJlciIsImdldFRyaWFuZ2xlTnVtYmVycyIsImdldFBvbHlnb25hbE51bWJlcnMiLCJnZXRTcXVhcmVOdW1iZXJzIiwiY3VycmVudCIsInJhbmdlIiwiaW5jcmVtZW50IiwibWVyc2VubmVOdW1iZXJzIiwidHdvIiwiZXgiLCJtZXJzZW5uZVByaW1lTnVtYmVycyIsIm1hcnIiLCJpc01lcnNlbm5lTnVtYmVyIiwibXMiLCJtIiwiaXNNZXJzZW5uZVByaW1lTnVtYmVyIiwicmFuIiwiS2VpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFB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Z0ksTUFBTSxDQUFDLENBQUQsQ0FBWjtBQUNEOztBQUNELE1BQUcsQ0FBQ0MsSUFBSSxDQUFDNUgsR0FBRCxDQUFSLEVBQWM7QUFDWkEsT0FBRyxHQUFHMkgsTUFBTSxDQUFDM0gsR0FBRCxDQUFaO0FBQ0Q7O0FBQ0QsTUFBRyxDQUFDNEgsSUFBSSxDQUFDakksR0FBRCxDQUFSLEVBQWM7QUFDWkEsT0FBRyxHQUFHZ0ksTUFBTSxDQUFDaEksR0FBRCxDQUFaO0FBQ0Q7O0FBRUQsTUFBTXNHLEdBQUcsR0FBRy9CLE1BQU0sQ0FBQzNELElBQUksQ0FBQ1IsTUFBTCxFQUFELENBQWxCO0FBQ0EsTUFBSTZQLEdBQUo7O0FBRUEsTUFBRzNKLEdBQUcsS0FBSyxHQUFYLEVBQWU7QUFDYixRQUFHakcsR0FBRyxDQUFDc0YsTUFBSixFQUFILEVBQWdCO0FBQ2RzSyxTQUFHLEdBQUdqSSxNQUFNLENBQUMsQ0FBRCxDQUFaO0FBQ0QsS0FGRCxNQUVLO0FBQ0hpSSxTQUFHLEdBQUc1UCxHQUFOO0FBQ0Q7QUFDRixHQU5ELE1BTUs7QUFDSCxRQUFJVSxHQUFHLEdBQUd1RixHQUFHLENBQUN4QixLQUFKLENBQVUsR0FBVixDQUFWO0FBQ0FtTCxPQUFHLEdBQUdqSSxNQUFNLENBQUMsT0FBT2pILEdBQUcsQ0FBQyxDQUFELENBQVgsQ0FBTixDQUFzQnlMLGNBQXRCLENBQXFDeE0sR0FBckMsQ0FBTjtBQUNEOztBQUNELFNBQU9pUSxHQUFQO0FBQ0QsQ0E1QkQ7O0FBOEJlO0FBQ2JqSSxRQUFNLEVBQUVBLE1BREs7QUFFYkcsUUFBTSxFQUFFQSxNQUZLO0FBR2JGLE1BQUksRUFBRUEsSUFITztBQUliaUksS0FBRyxFQUFFeFEsd0NBSlE7QUFLYmtILElBQUUsRUFBRUEsRUFMUztBQU1ic0MsVUFBUSxFQUFFQTtBQU5HLENBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IE1BWCwgTUlOIH0gZnJvbSBcIi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5pbXBvcnQgeyBtYWtlU3UgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5jb25zdCBTID0ge307XG5jb25zdCBLID0ge307XG5cblxuY29uc3QgRklSU1RfUFJJTUVfTlVNQkVSID0gMjtcblxuUy5pc1ByaW1lTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFTLmlzTnVtYmVyKG4pKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobiA9PT0gMCB8fCBuID09PSAxKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobiA9PT0gMil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZihuID49IE1BWCl7XG4gICAgcmV0dXJuIGBBcmd1bWVudCBleGNlZWRzIG1heGltdW0gdmFsdWUoJHtNQVh9KWA7XG4gIH1cblxuICBjb25zdCBtYXggPSBuO1xuICBmb3IoIGxldCBpID0gbWF4IC0xOyBpID4gMTsgaS0tKXtcbiAgICBpZiggKG1heCAlIGkpID09PSAwICl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuUy5uZXh0TnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCFTLmlzTnVtYmVyKG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuICsrbjtcbn07XG5cblMucHJldk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZighUy5pc051bWJlcihuKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiAtLW47XG59O1xuXG5LLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcblxuICBpZihtaW4gaW5zdGFuY2VvZiBBcnJheSAmJiBtaW4ubGVuZ3RoID4gMCl7XG4gICAgcmV0dXJuIEsucmFuZG9tRWxlbWVudChtaW4pO1xuICB9XG5cbiAgaWYobWluID09PSB1bmRlZmluZWQpe1xuICAgIG1pbiA9IDA7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IDE7XG4gIH1cblxuICBjb25zdCBsZW4gPSBtYXggLSBtaW47XG4gIGNvbnN0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xuICByZXR1cm4gKCByYW5kICogbGVuICkgKyBtaW47XG59O1xuXG5LLnJhbmRvbUVsZW1lbnQgPSBmdW5jdGlvbihhcnJheSl7XG4gIGNvbnN0IGkgPSBLLnJhbmRvbSgwLCBhcnJheS5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIGFycmF5W2ldO1xufTtcblxuSy5yYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKCAhUy5pc051bWJlcihtaW4pIHx8ICFTLmlzTnVtYmVyKG1heCkpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZihtaW4gPj0gbWF4KXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gbWluOyBpIDw9IG1heDsgaSsrKXtcbiAgICBhcnIucHVzaChpKTtcbiAgfVxuXG4gIGNvbnN0IHJlcyA9IEsucmFuZG9tRWxlbWVudChhcnIpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG5LLnByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBGSVJTVF9QUklNRV9OVU1CRVI7IGkgPCBNQVg7IGkrKyl7XG4gICAgaWYoUy5pc1ByaW1lTnVtYmVyKGkpKXtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuSy5maWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKHN0YXJ0KXtcbiAgaWYoc3RhcnQgPT09IHVuZGVmaW5lZCl7XG4gICAgc3RhcnQgPSAwO1xuICB9XG4gIGNvbnN0IGFyciA9IFtzdGFydCwgc3RhcnQgKyAxXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXSA+PSBNQVgpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IE51bWJlcihhcnJbYXJyLmxlbmd0aCAtIDJdKTtcbiAgICBjb25zdCBiID0gTnVtYmVyKGFyclthcnIubGVuZ3RoIC0gMV0pO1xuICAgIGFyci5wdXNoKE51bWJlcihhICsgYikpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5TLmlzRmlib25hY2NpTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPT09IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IGZpYiA9IEsuZmlib25hY2NpU2VxdWVuY2UoMCk7XG4gIGNvbnN0IGluZGV4ID0gZmliLmluZGV4T2Yobik7XG4gIGlmKGluZGV4ID49IDApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZiggUy5pc051bWJlcihuKSAmJiBuICUgMiA9PT0gMCApe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKCBTLmlzTnVtYmVyKG4pICYmIG4gJSAyICE9PSAwICl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbksuZGl2aXNvcnMgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKXtcbiAgICBpZihuICUgaSA9PT0gMCl7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbi8vIOODpuODvOOCr+ODquODg+ODieOBruS6kumZpOazlVxuSy5ldWNsaWRlYW5BbGdvcml0aG0gPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoICFTLmlzTnVtYmVyKGEpIHx8ICFTLmlzTnVtYmVyKGIpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYoIGEgPT09IGIpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IHRlbXA7XG4gIGlmKCBhIDwgYil7XG4gICAgdGVtcCA9IGE7XG4gICAgYSA9IGI7XG4gICAgYiA9IHRlbXA7XG4gIH1cblxuICBsZXQgYXRlbXAgPSBhO1xuICBsZXQgYnRlbXAgPSBiO1xuICBsZXQgY3RlbXA7XG4gIGxldCByZXM7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgY29uc3QgY29wcmltZSA9IFwiY29wcmltZVwiO1xuICB3aGlsZShjdGVtcCAhPT0wKXtcbiAgICBjdGVtcCA9IGF0ZW1wICUgYnRlbXA7XG4gICAgaWYoY3RlbXAgPT09IDApe1xuICAgICAgcmVzID0gYnRlbXA7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYoY3RlbXAgPT09IDEpe1xuICAgICAgcmVzID0gY29wcmltZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjb3VudGVyID49IE1BWCl7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgYXRlbXAgPSBidGVtcDtcbiAgICBidGVtcCA9IGN0ZW1wO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5LLmNvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oYSwgYil7XG4gIGlmKGEgPT09IHVuZGVmaW5lZCB8fCBiID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuXG4gIGNvbnN0IGFycl9hID0gSy5kaXZpc29ycyhhKTtcbiAgaWYoYSA9PT0gYil7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gSy5kaXZpc29ycyhiKTtcblxuICBjb25zdCBkaXZzID0gW107XG5cbiAgZm9yKGxldCBrID0gMDsgayA8IGFycl9hLmxlbmd0aDsgaysrKXtcbiAgICBjb25zdCBlbG1fYSA9IGFycl9hW2tdO1xuICAgIGZvcihsZXQgbCA9IDA7IGwgPCBhcnJfYi5sZW5ndGg7IGwrKyl7XG4gICAgICBjb25zdCBlbG1fYiA9IGFycl9iW2xdO1xuICAgICAgaWYoZWxtX2EgPT09IGVsbV9iKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cbksubWF4Q29tbW9uRGl2aXNvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICBjb25zdCBhcnIgPSBLLmNvbW1vbkRpdmlzb3JzKGEsIGIpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cbksubXVsdGlwbGUgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBNQVg7IGkrKyl7XG4gICAgYXJyLnB1c2gobiAqIGkpO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG5LLmxlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYoYSA9PT0gdW5kZWZpbmVkIHx8IGIgPT09IHVuZGVmaW5lZCl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiO1xuICB9XG5cbiAgbGV0IGJpZztcbiAgaWYoIGEgPCBiKXtcbiAgICBiaWcgPSBiO1xuICB9ZWxzZXtcbiAgICBiaWcgPSBhO1xuICB9XG4gIGNvbnN0IGFycl9hID0gW107XG4gIGNvbnN0IGFycl9iID0gW107XG5cbiAgbGV0IGkgPTE7XG4gIHdoaWxlKGkgPD0gYmlnKXtcbiAgICBhcnJfYS5wdXNoKCBhICogaSk7XG4gICAgaSsrO1xuICB9XG4gIGxldCBqID0xO1xuICB3aGlsZShqIDw9IGJpZyl7XG4gICAgYXJyX2IucHVzaCggYiAqIGopO1xuICAgIGorKztcbiAgfVxuXG4gIGZvcihsZXQgayA9IDA7IGsgPCBhcnJfYS5sZW5ndGg7IGsrKyl7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtrXTtcbiAgICBmb3IobGV0IGwgPSAwOyBsIDwgYXJyX2IubGVuZ3RoOyBsKyspe1xuICAgICAgY29uc3QgZWxtX2IgPSBhcnJfYltsXTtcbiAgICAgIGlmKGVsbV9hID09PSBlbG1fYil7XG4gICAgICAgIHJldHVybiBlbG1fYTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUzogUyxcbiAgSzogS1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgTUFYOiAxMDAwMCxcbiAgTUlOOiAtMTAwMDAsXG4gIERCWjogXCJEaXZpc2lvbiBieSBaZXJvXCJcbn1cbiIsImNvbnN0IGNvcmUgPSB7fTtcblxuY29yZS5pc051bWJlciA9IGZ1bmN0aW9uKG4pe1xuICBpZih0eXBlb2YgbiA9PT0gXCJudW1iZXJcIil7XG4gICAgaWYoTnVtYmVyLmlzTmFOKG4pKXtcbiAgICAgIHJldHVybiBOYU47XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvcmUuaXNaZXJvID0gZnVuY3Rpb24obil7XG4gIGlmKCBuID09PSAwKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLy8g6YWN5YiX44Gn44Gu6KiI566XXG5jb3JlLm51bVRvQXJyYXkgPSBmdW5jdGlvbihuKXtcbiAgY29uc3QgYXJyID0gW107XG4gIGNvbnN0IHN0ciA9IFN0cmluZyhuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBjb25zdCBlbG0gPSBOdW1iZXIoc3RyLnNsaWNlKGksIGkgKyAxKSk7XG4gICAgaWYoIXRoaXMuaXNOdW1iZXIoZWxtKSl7XG4gICAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gICAgfVxuICAgIGFyci5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvcmUuaXNOdW1BcnJheSA9IGZ1bmN0aW9uKGFycil7XG4gIGlmKCBhcnIgaW5zdGFuY2VvZiBBcnJheSApe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoICF0aGlzLmlzTnVtYmVyKGFycltpXSkgKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29yZTtcbiIsImltcG9ydCBzIGZyb20gXCIuL3N1LmpzXCI7XG5cbihmdW5jdGlvbihnbG9iYWwsIHMpe1xuICBnbG9iYWwucyA9IHM7XG59KShnbG9iYWwgfHwgc2VsZiwgcyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHsgSywgUyB9IGZyb20gXCIuL1NLLmpzXCI7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9jb3JlLmpzXCI7XG5cbmNvbnN0IE1BWCA9IGNvbnN0YW50cy5NQVg7XG5jb25zdCBNSU4gPSBjb25zdGFudHMuTUlOO1xuY29uc3QgREJaID0gY29uc3RhbnRzLkRCWjtcblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZighbil7XG4gICAgbiA9IDA7XG4gIH1cbiAgaWYoIW9wdGlvbil7XG4gICAgb3B0aW9uID0ge307XG4gIH1cblxuICBsZXQgc3RyID0gU3RyaW5nKG4pO1xuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihzdHJbMF0gPT09IFwiLVwiKXtcbiAgICBzdHIgPSBzdHIuc2xpY2UoMSwgc3RyLmxlbmd0aCk7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG4gIGlmKCFuZWdhdGl2ZSAmJiBvcHRpb24gJiYgb3B0aW9uLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihpc05hTihOdW1iZXIoc3RyKSkpe1xuICAgIHN0ciA9IFwiMFwiO1xuICB9XG4gIGlmKHN0ciA9PT0gXCIwXCIpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGFydHMgPSBzdHIuc3BsaXQoXCIuXCIpO1xuICBsZXQgaW50X3N0ciA9IHBhcnRzWzBdO1xuICBsZXQgZGVjaW1hbF9zdHIgPSBwYXJ0c1sxXTtcbiAgaWYoaW50X3N0cil7XG4gICAgY29uc3QgaW50MCA9IGludF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoaW50MCAmJiBpbnQwLmxlbmd0aCA9PT0gaW50X3N0ci5sZW5ndGgpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgbmV3X2ludF9zdHIgPSBcIlwiO1xuICAgIGxldCBzdGFydF96ZXJvID0gdHJ1ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDxpbnRfc3RyLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKGludF9zdHJbaV0gIT09IFwiMFwiIHx8ICFzdGFydF96ZXJvKXtcbiAgICAgICAgc3RhcnRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfaW50X3N0ciArPSBpbnRfc3RyW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2ludF9zdHIpe1xuICAgICAgaW50X3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgaW50X3N0ciA9IG5ld19pbnRfc3RyO1xuICAgIH1cbiAgfVxuXG4gIGlmKGRlY2ltYWxfc3RyKXtcbiAgICBjb25zdCBkZWMwID0gZGVjaW1hbF9zdHIubWF0Y2goLzAvZyk7XG4gICAgaWYoZGVjMCAmJiBkZWMwLmxlbmd0aCA9PT0gZGVjaW1hbF9zdHIubGVuZ3RoKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfVxuICAgIGxldCBlbmRfemVybyA9IHRydWU7XG4gICAgbGV0IG5ld19kZWNpbWFsX3N0ciA9IFwiXCI7XG4gICAgZm9yKGxldCBpID0gZGVjaW1hbF9zdHIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgaWYoZGVjaW1hbF9zdHJbaV0gIT09IFwiMFwiIHx8ICFlbmRfemVybyl7XG4gICAgICAgIGVuZF96ZXJvID0gZmFsc2U7XG4gICAgICAgIG5ld19kZWNpbWFsX3N0ciA9IGRlY2ltYWxfc3RyW2ldICsgbmV3X2RlY2ltYWxfc3RyO1xuICAgICAgfVxuICAgIH1cbiAgICBpZighbmV3X2RlY2ltYWxfc3RyKXtcbiAgICAgIGRlY2ltYWxfc3RyID0gXCIwXCI7XG4gICAgfWVsc2V7XG4gICAgICBkZWNpbWFsX3N0ciA9IG5ld19kZWNpbWFsX3N0cjtcbiAgICB9XG5cbiAgfVxuXG4gIGxldCBpbnRfYXJyID0gY29yZS5udW1Ub0FycmF5KGludF9zdHIpO1xuICBsZXQgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG5cbiAgdGhpcy5pbnRlZ2VyID0gaW50X2FycjtcbiAgdGhpcy5kZWNpbWFsID0gZGVjaW1hbF9hcnI7XG4gIHRoaXMubmVnYXRpdmUgPSBuZWdhdGl2ZSA/IHRydWUgOiBmYWxzZTtcbiAgXG4gIGxldCBkZW5vbWluYXRvciA9IFsxXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5kZWNpbWFsLmxlbmd0aDsgaSsrKXtcbiAgICBkZW5vbWluYXRvci5wdXNoKDApO1xuICB9XG5cbiAgdGhpcy5mcmFjdGlvbiA9IHtcbiAgICBudW1lcmF0b3I6IHRoaXMuaW50ZWdlci5jb25jYXQodGhpcy5kZWNpbWFsKSxcbiAgICBkZW5vbWluYXRvcjogZGVub21pbmF0b3JcbiAgfTtcblxufTtcblxuY29uc3QgbWFrZVN1ID0gZnVuY3Rpb24obnVtLCBvcHRpb24pe1xuICByZXR1cm4gbmV3IFN1KG51bSwgb3B0aW9uKTtcbn07XG5cbmNvbnN0IGlzU3UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKHN1IGluc3RhbmNlb2YgU3Upe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb3B5U3UgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IHN0ciA9IHN1LmdldFN0cmluZygpO1xuICByZXR1cm4gbWFrZVN1KHN0cik7XG59O1xuXG5jb25zdCBnZXRNZXNzYWdlID0gZnVuY3Rpb24odHlwZSl7XG4gIGlmKHR5cGUgPT09IFwibm90c3VcIil7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IFN1LlwiO1xuICB9XG4gIHJldHVybiBcIlwiO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuU3UucHJvdG90eXBlLmdldFN0cmluZyA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdHIgPSBTdHJpbmcoIHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgY29uc3QgYWMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKChhLGUpID0+IGEgKyBlKTtcbiAgaWYoYWMgIT09IDApe1xuICAgIHN0ciArPSBcIi5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLm5lZ2F0aXZlID8gYC0ke3N0cn1gIDogc3RyO1xufTtcblxuU3UucHJvdG90eXBlLmdldE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLmdldFN0cmluZygpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRJbnRlZ2VyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuaW50ZWdlci5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXREZWNpbWFsID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKFwiMC5cIiArIHRoaXMuZGVjaW1hbC5qb2luKFwiXCIpKTtcbiAgcmV0dXJuIG51bTtcbn07XG5cblN1LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gIHJldHVybiBtYWtlU3Uoc3RyKTtcbn07XG5cbmNvbnN0IGdldExhcmdlID0gZnVuY3Rpb24oYSwgYiwgYWJzb2x1dGUgPSBmYWxzZSl7XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGxldCBmaWVsZCA9IFtdO1xuXG4gIGNvbnN0IF9hID0gbWFrZVN1KGEuZ2V0U3RyaW5nKCkpO1xuICBjb25zdCBfYiA9IG1ha2VTdShiLmdldFN0cmluZygpKTtcblxuICBpZihhYnNvbHV0ZSl7XG4gICAgX2EubmVnYXRpdmUgPSBmYWxzZTtcbiAgICBfYi5uZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYoX2EuaXNaZXJvKCkgJiYgX2IuaXNaZXJvKCkpe1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCFfYS5uZWdhdGl2ZSAmJiBfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmICFfYi5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIGI7XG4gIH1lbHNlIGlmKF9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBpZihfYS5pbnRlZ2VyLmxlbmd0aCA+IF9iLmludGVnZXIubGVuZ3RoKXtcbiAgICBpZihuZWdhdGl2ZSl7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1lbHNlIGlmKF9hLmludGVnZXIubGVuZ3RoIDwgX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBfYS5pbnRlZ2VyLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtX2EgPSBfYS5pbnRlZ2VyW2ldO1xuICAgIGxldCBlbG1fYiA9IF9iLmludGVnZXJbaV07XG4gICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICBmaWVsZCA9IFthLCBiXTtcbiAgICAgIGJyZWFrO1xuICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgZmllbGQgPSBbYiwgYV07XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIGNvbnN0IGxlbiA9IF9hLmRlY2ltYWwubGVuZ3RoID49IF9iLmRlY2ltYWwubGVuZ3RoID8gX2EuZGVjaW1hbC5sZW5ndGggOiBfYi5kZWNpbWFsLmxlbmd0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGVsbV9hID0gX2EuZGVjaW1hbFtpXSA/IF9hLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgbGV0IGVsbV9iID0gX2IuZGVjaW1hbFtpXSA/IF9iLmRlY2ltYWxbaV0gOiAwO1xuICAgICAgaWYoZWxtX2EgPiBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1lbHNlIGlmKGVsbV9hIDwgZWxtX2Ipe1xuICAgICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYobmVnYXRpdmUpe1xuICAgIGZpZWxkID0gW2ZpZWxkWzFdLCBmaWVsZFswXV07XG4gIH1cbiAgaWYoZmllbGQubGVuZ3RoID09PSAwKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBmaWVsZFswXTtcblxufTtcblxuXG5TdS5wcm90b3R5cGUuaXNFcXVhbCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYSA9IHRoaXMuY2xvbmUoKTtcbiAgY29uc3QgYiA9IHN1LmNsb25lKCk7XG4gIGNvbnN0IGlfYSA9IGEuaW50ZWdlcjtcbiAgY29uc3QgaV9iID0gYi5pbnRlZ2VyO1xuICBjb25zdCBkX2EgPSBhLmRlY2ltYWw7XG4gIGNvbnN0IGRfYiA9IGIuZGVjaW1hbDtcblxuICBjb25zdCBsYXJnZSA9IGdldExhcmdlKGEsIGIpO1xuXG4gIGlmKCFsYXJnZSl7XG4gICAgaWYoaV9hLmxlbmd0aCA9PT0gaV9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaV9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaV9hW2ldICE9PSBpX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNlIGlmKGRfYS5sZW5ndGggPT09IGRfYi5sZW5ndGgpe1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRfYS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGRfYVtpXSAhPT0gZF9iW2ldKXtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihhLm5lZ2F0aXZlID09PSBiLm5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn07XG5cblN1LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmludGVnZXIubGVuZ3RoID09PSAxICYmIHRoaXMuaW50ZWdlclswXSA9PT0gMCAmJiAhdGhpcy5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPbmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIxXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0xhcmdlID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGEuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1NtYWxsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZihyZXMuZ2V0U3RyaW5nKCkgPT09IGIuZ2V0U3RyaW5nKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0ludGVnZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05hdHVyYWxOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzUG9zaXRpdmUoKSAmJiB0aGlzLmlzSW50ZWdlcigpICYmIHRoaXMuaXNMYXJnZShDT05TVEFOVFMuWkVSTykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5TdS5wcm90b3R5cGUuY29udGFpbkRlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCByZXMgPSB0aGlzLmRlY2ltYWwucmVkdWNlKGZ1bmN0aW9uKGEsIHYpe1xuICAgICAgcmV0dXJuIGEgKyB2O1xuICB9KTtcbiAgaWYocmVzID09PSAwKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1lbHNle1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG4gIGxldCBhID0gdGhpcy5jbG9uZSgpO1xuICBsZXQgYiA9IHN1LmNsb25lKCk7XG4gIGlmKGEuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiO1xuICB9XG4gIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlO1xuICBpZihhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoIWEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gZmFsc2U7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmIGIubmVnYXRpdmUpe1xuICAgIGIubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGEuc3VidHJhY3QoYik7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgJiYgIWIubmVnYXRpdmUpe1xuICAgIGEubWFrZVBvc2l0aXZlKCk7XG4gICAgcmV0dXJuIGIuc3VidHJhY3QoYSk7XG4gIH1cblxuICBsZXQgcmVzID0gZ2V0TGFyZ2UoYSwgYik7XG4gIGlmKCFyZXMpe1xuICAgIHJlcyA9IGE7XG4gIH1cbiAgbGV0IGludF9hID0gcmVzLmludGVnZXI7XG4gIGxldCBkZWNfYSA9IHJlcy5kZWNpbWFsO1xuICBsZXQgaW50X2IsIGRlY19iO1xuICBpZihyZXMgPT09IGEpe1xuICAgIGludF9iID0gYi5pbnRlZ2VyO1xuICAgIGRlY19iID0gYi5kZWNpbWFsO1xuICB9ZWxzZXtcbiAgICBpbnRfYiA9IGEuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGEuZGVjaW1hbDtcbiAgfVxuXG4gIGxldCBsZW5faSA9IGludF9hLmxlbmd0aDtcbiAgbGV0IGxlbl9kID0gZGVjX2EubGVuZ3RoO1xuXG4gIGlmKGRlY19iLmxlbmd0aCA+IGRlY19hLmxlbmd0aCl7XG4gICAgbGVuX2QgPSBkZWNfYi5sZW5ndGg7XG4gIH1cbiAgbGV0IG92ZXIgPSAwLFxuICAgICAgaW50X3JlcyA9IFtdLFxuICAgICAgZGVjX3JlcyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IGxlbl9kIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGRlY19hW2ldIHx8IDA7XG4gICAgbGV0IGVsbV9iID0gZGVjX2JbaV0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgZGVjX3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG5cbiAgZm9yKGxldCBpID0gZGVjX3Jlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApe1xuICAgIGxldCBkID0gZGVjX3Jlc1tpXTtcbiAgICBpZihkID09PSAwKXtcbiAgICAgIGRlY19yZXMucG9wKCk7XG4gICAgfWVsc2V7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBnYXAgPSBsZW5faSAtIGludF9iLmxlbmd0aDtcbiAgZm9yKGxldCBpID0gbGVuX2kgLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgbGV0IGVsbV9hID0gaW50X2FbaV07XG4gICAgbGV0IGVsbV9iID0gaW50X2JbaSAtIGdhcF0gfHwgMDtcbiAgICBfcmVzID0gZWxtX2EgKyBlbG1fYiArIG92ZXI7XG4gICAgaWYoX3JlcyA+PSAxMCl7XG4gICAgICBvdmVyID0gMTtcbiAgICAgIF9yZXMgPSBfcmVzIC0gMTA7XG4gICAgfWVsc2V7XG4gICAgICBvdmVyID0gMDtcbiAgICB9XG4gICAgaW50X3Jlcy51bnNoaWZ0KF9yZXMpO1xuICB9XG4gIGlmKG92ZXIgPiAwKXtcbiAgICBpbnRfcmVzLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoaW50X3Jlcy5qb2luKFwiXCIpICsgXCIuXCIgKyBkZWNfcmVzLmpvaW4oXCJcIiksIHtuZWdhdGl2ZTogbmVnYXRpdmV9KTtcblxuICBpZihyZXN1bHQuaXNaZXJvKCkgJiYgcmVzdWx0Lm5lZ2F0aXZlKXtcbiAgICByZXN1bHQubWFrZVBvc2l0aXZlKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuU3UucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSB8fCBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9XG5cbiAgbGV0IG5lZ2F0aXZlID0gZmFsc2U7XG4gIGlmKGEubmVnYXRpdmUgPT09IGZhbHNlICYmIGIubmVnYXRpdmUgPT09IHRydWUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfWVsc2UgaWYoYS5uZWdhdGl2ZSA9PT0gdHJ1ZSAmJiBiLm5lZ2F0aXZlID09PSBmYWxzZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgY29uc3QgYV9pZCA9IGEuaW50ZWdlci5jb25jYXQoYS5kZWNpbWFsKTtcbiAgY29uc3QgYl9pZCA9IGIuaW50ZWdlci5jb25jYXQoYi5kZWNpbWFsKTtcblxuICBjb25zdCBkcF9hID0gYS5pbnRlZ2VyLmxlbmd0aDtcbiAgY29uc3QgZHBfYiA9IGIuaW50ZWdlci5sZW5ndGg7XG5cbiAgY29uc3QgcmVzX2FyciA9IFtdO1xuICBmb3IobGV0IGlfYSA9IDA7IGlfYSA8IGFfaWQubGVuZ3RoOyBpX2ErKyl7XG4gICAgZm9yKGxldCBpX2IgPSAwOyBpX2IgPCBiX2lkLmxlbmd0aDsgaV9iKyspe1xuICAgICAgY29uc3QgZWxtX2EgPSBhX2lkW2lfYV07XG4gICAgICBjb25zdCBlbG1fYiA9IGJfaWRbaV9iXTtcbiAgICAgIGNvbnN0IHBvc19hID0gZHBfYSAtIGlfYSAtMTtcbiAgICAgIGNvbnN0IHBvc19iID0gZHBfYiAtIGlfYiAtMTtcbiAgICAgIGNvbnN0IHBvcyA9IHBvc19hICsgcG9zX2I7XG4gICAgICBsZXQgcmVzID0gZWxtX2EgKiBlbG1fYjtcbiAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhwb3MpO1xuICAgICAgbGV0IHN0cjtcbiAgICAgIGlmKHBvcyA+PSAwKXtcbiAgICAgICAgbGVuKys7XG4gICAgICAgIGlmKHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4gKyAxLCBcIjBcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpLnBhZEVuZChsZW4sIFwiMFwiKTtcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGxlbiA9PT0gMSAmJiByZXMgPiA5KXtcbiAgICAgICAgICBzdHIgPSBTdHJpbmcocmVzKVswXSArIFwiLlwiICsgU3RyaW5nKHJlcylbMV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHN0ciA9IFwiMC5cIiArIFN0cmluZyhyZXMpLnBhZFN0YXJ0KGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNfYXJyLnB1c2gobWFrZVN1KHN0cikpO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZXMgPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNfYXJyLmxlbmd0aDsgaSsrKXtcbiAgICByZXMgPSByZXMuYWRkKHJlc19hcnJbaV0pO1xuICB9XG5cbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG5cbiAgcmV0dXJuIHJlcztcblxufTtcblxuU3UucHJvdG90eXBlLmRpdmlzaW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRNZXNzYWdlKFwibm90c3VcIikpO1xuICB9XG5cbiAgbGV0IGEgPSBjb3B5U3UodGhpcyk7XG4gIGxldCBiID0gY29weVN1KHN1KTtcbiAgaWYoYS5pc1plcm8oKSl7XG4gICAgcmV0dXJuIG1ha2VTdSgwKTtcbiAgfVxuXG4gIGlmKGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBEQlo7XG4gIH1cblxuXG4gIGxldCBuZWdhdGl2ZSA9IGZhbHNlO1xuICBpZihhLm5lZ2F0aXZlID09PSBmYWxzZSAmJiBiLm5lZ2F0aXZlID09PSB0cnVlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKGEubmVnYXRpdmUgPT09IHRydWUgJiYgYi5uZWdhdGl2ZSA9PT0gZmFsc2Upe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBjb3VudCA9IG1ha2VTdSgwKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgd2hpbGUoYS5pc0xhcmdlKHN1bSkgfHwgYS5pc0VxdWFsKHN1bSkpe1xuICAgIGNvdW50ID0gY291bnQuYWRkKG1ha2VTdSgxKSk7XG4gICAgc3VtID0gYi5tdWx0aXBsaWNhdGlvbihjb3VudCk7XG4gIH1cblxuICBjb3VudCA9IGNvdW50LnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gIHN1bSA9IHN1bS5zdWJ0cmFjdChiKTtcbiAgY29uc3QgcmVtYWluID0gYS5zdWJ0cmFjdChzdW0pO1xuICBjb25zdCByZXMgPSBjb3VudDtcbiAgcmVzLnJlbWFpbmRlciA9IHJlbWFpbjtcbiAgcmVzLm5lZ2F0aXZlID0gbmVnYXRpdmU7XG4gIHJldHVybiByZXM7XG59O1xuXG5cblN1LnByb3RvdHlwZS5wbHVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLnRhc3UgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLmFkZChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubWludXMgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLnN1YnRyYWN0KHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5oaWt1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS5rYWtlcnUgPSBmdW5jdGlvbihzdSl7XG4gIHJldHVybiB0aGlzLm11bHRpcGxpY2F0aW9uKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS53YXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5kaXZpc2lvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmFkZChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xufTtcblxuU3UucHJvdG90eXBlLmlzRXZlbk51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgXG4gIGlmKCByZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuaXNPZGROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgcmVzID0gdGhpcy5kaXZpc2lvbihtYWtlU3UoMikpO1xuICBpZiggIXJlcy5yZW1haW5kZXIuaXNaZXJvKCkgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsWzBdID09PSAwICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbC5sZW5ndGggPT09IDEpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5nZXREaXZpc29ycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSAxOyB0aGlzLmlzTGFyZ2UobWFrZVN1KGkpKTsgaSsrKXtcbiAgICBsZXQgc3UgPSBtYWtlU3UoaSk7XG4gICAgY29uc3QgcmVtYWluZGVyID0gdGhpcy5kaXZpc2lvbihzdSkucmVtYWluZGVyO1xuICAgIGlmKHJlbWFpbmRlci5pc1plcm8oKSl7XG4gICAgICBhcnIucHVzaChzdSk7XG4gICAgfVxuICB9XG4gIGFyci5wdXNoKHRoaXMpO1xuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldENvbW1vbkRpdmlzb3JzID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuXG4gIGxldCBhID0gdGhpcztcbiAgbGV0IGIgPSBzdTtcblxuICBjb25zdCBhcnJfYSA9IGEuZ2V0RGl2aXNvcnMoKTtcbiAgaWYoYS5pc0VxdWFsKGIpKXtcbiAgICByZXR1cm4gYXJyX2E7XG4gIH1cbiAgY29uc3QgYXJyX2IgPSBiLmdldERpdmlzb3JzKCk7XG5cbiAgY29uc3QgZGl2cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJfYS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbV9hID0gYXJyX2FbaV07XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFycl9iLmxlbmd0aDsgaisrKXtcbiAgICAgIGxldCBlbG1fYiA9IGFycl9iW2pdO1xuICAgICAgaWYoZWxtX2EuaXNFcXVhbChlbG1fYikpe1xuICAgICAgICBkaXZzLnB1c2goZWxtX2EpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXZzO1xufTtcblxuU3UucHJvdG90eXBlLmdldE1heENvbW1vbkRpdmlzb3IgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0Q29tbW9uRGl2aXNvcnMoc3UpO1xuICByZXR1cm4gYXJyW2Fyci5sZW5ndGggLSAxXTtcbn07XG5cblN1LnByb3RvdHlwZS5tdWx0aXBsZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBbdGhpc107XG4gIH1cbiAgY29uc3QgYXJyID0gW107XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBDT05TVEFOVFMuTUFYLm51bWJlcjsgaSsrKXtcbiAgICBhcnIucHVzaCh0aGlzLm11bHRpcGxpY2F0aW9uKGkpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZmlib25hY2NpU2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuXG4gIGNvbnN0IHplcm8gPSBtYWtlU3UoMCk7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdSgxKTtcblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFt6ZXJvLCBvbmVdO1xuICBjb25zdCBmdW5jID0gZnVuY3Rpb24oYXJyKXtcbiAgICBpZihhcnJbYXJyLmxlbmd0aCAtIDFdLmlzTGFyZ2UoTUFYKSl7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cbiAgICBjb25zdCBhID0gYXJyW2Fyci5sZW5ndGggLSAyXTtcbiAgICBjb25zdCBiID0gYXJyW2Fyci5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBjID0gYS5hZGQoYik7XG4gICAgYXJyLnB1c2goYyk7XG4gICAgcmV0dXJuIGZ1bmMoYXJyKTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmMoYXJyKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0ZpYm9uYWNjaU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZihuLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBmaWJzID0gdGhpcy5maWJvbmFjY2lTZXF1ZW5jZSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGZpYnMubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gZmlic1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5sdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFttYWtlU3UoMiksIG1ha2VTdSgxKV07XG4gIGNvbnN0IGZ1bmMgPSBmdW5jdGlvbihhcnIpe1xuICAgIGlmKGFyclthcnIubGVuZ3RoIC0gMV0uaXNMYXJnZShNQVgpKXtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICAgIGNvbnN0IGEgPSBhcnJbYXJyLmxlbmd0aCAtIDJdO1xuICAgIGNvbnN0IGIgPSBhcnJbYXJyLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGMgPSBhLmFkZChiKTtcbiAgICBhcnIucHVzaChjKTtcbiAgICByZXR1cm4gZnVuYyhhcnIpO1xuICB9O1xuICByZXR1cm4gZnVuYyhhcnIpO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IHRoaXMubHVjYXNTZXF1ZW5jZSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGx1Y3MubGVuZ3RoOyBpKyspe1xuICAgIGxldCBmID0gbHVjc1tpXTtcbiAgICBpZihmLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5sdWNhc1ByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGxzID0gdGhpcy5sdWNhc1NlcXVlbmNlKCk7XG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBscy5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgbCA9IGxzW2ldO1xuICAgIGlmKGwuaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKGwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U2VxdWVuY2UgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnJheSA9IFt0aGlzXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGVsbSA9IGFyZ3VtZW50c1tpXTtcbiAgICBpZighaXNTdShlbG0pKXtcbiAgICAgIGVsbSA9IG1ha2VTdShlbG0pO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKGVsbSk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufTtcblxuU3UucHJvdG90eXBlLnN1bW1hdGlvbiA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFyciA9IHRoaXMuZ2V0U2VxdWVuY2UoLi4uYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXRTZXF1ZW5jZSguLi5hcmd1bWVudHMpO1xuICBsZXQgaXAgPSBhcnJbMF07XG4gIGZvcihsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGlwID0gaXAubXVsdGlwbGljYXRpb24oYXJyW2ldKTtcbiAgfVxuICByZXR1cm4gaXA7XG59O1xuXG5TdS5wcm90b3R5cGUuZGlnaXRzdW0gPSBmdW5jdGlvbigpe1xuICBsZXQgc3VtID0gbWFrZVN1KDApO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGEgPSBtYWtlU3UodGhpcy5hcnJheVtpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGxldCBlbG0gPSBtYWtlU3UoMSk7XG4gIGxldCByZXMgPSB0aGlzO1xuICBsZXQgYiA9IHRydWU7XG4gIHdoaWxlKGIpe1xuICAgIHJlcyA9IHJlcy5zdWJ0cmFjdChlbG0pO1xuICAgIGlmKHJlcy5pc1plcm8oKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYocmVzLmlzU21hbGwobWFrZVN1KDApKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsbSA9IGVsbS5hZGQobWFrZVN1KDEpKTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmdldFRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmdldFBvbHlnb25hbE51bWJlcnMobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRTcXVhcmVOdW1iZXJzID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuZ2V0UG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCkpO1xufTtcblxuU3UucHJvdG90eXBlLmdldFBvbHlnb25hbE51bWJlcnMgPSBmdW5jdGlvbihuKXtcbiAgaWYoIWlzU3Uobikpe1xuICAgIG4gPSBtYWtlU3Uobik7XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgY29uc3QgaW5jcmVtZW50ID0gbi5zdWJ0cmFjdChtYWtlU3UoMikpO1xuICB3aGlsZShjdXJyZW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLm1lcnNlbm5lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGN1cnJlbnQgPSB0d28uZXhwb25lbnRpYXRlKGV4KS5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIGV4ID0gZXguYWRkKG1ha2VTdSgxKSk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5tZXJzZW5uZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG1hcnIgPSB0aGlzLm1lcnNlbm5lTnVtYmVycygpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gdGhpcy5tZXJzZW5uZU51bWJlcnMoKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSB0aGlzLm1lcnNlbm5lUHJpbWVOdW1iZXJzKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblN1LnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSBtYWtlU3UoMCk7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IG1ha2VTdSgxKTtcbiAgfVxuICBpZighaXNTdShtaW4pKXtcbiAgICBtaW4gPSBtYWtlU3UobWluKTtcbiAgfVxuICBpZighaXNTdShtYXgpKXtcbiAgICBtYXggPSBtYWtlU3UobWF4KTtcbiAgfVxuXG4gIGNvbnN0IHN0ciA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IHJhbjtcblxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBpZihtaW4uaXNaZXJvKCkpe1xuICAgICAgcmFuID0gbWFrZVN1KDApO1xuICAgIH1lbHNle1xuICAgICAgcmFuID0gbWluO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgcmFuID0gbWFrZVN1KFwiMC5cIiArIGFyclsxXSkubXVsdGlwbGljYXRpb24obWF4KTtcbiAgfVxuICByZXR1cm4gcmFuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIEtlaTogSyxcbiAgU3U6IFN1LFxuICBnZXRMYXJnZTogZ2V0TGFyZ2Vcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==