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
/* harmony import */ var _SK_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SK.js */ "./SK.js");



(function (global, s) {
  global.s = s;
  global.K = _SK_js__WEBPACK_IMPORTED_MODULE_1__["default"].K;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWFwcC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vc3VhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9TSy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWFwcC8uL2NvcmUuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWFwcC8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vc3VhcHAvLi9zdS5qcyJdLCJuYW1lcyI6WyJNQVgiLCJDT05TVEFOVFMiLCJNSU4iLCJTIiwiSyIsIm1ha2VTdSIsInN1IiwiY29weVN1IiwiaXNTdSIsIlN1IiwiRklSU1RfUFJJTUVfTlVNQkVSIiwicmFuZG9tIiwibWluIiwibWF4IiwidW5kZWZpbmVkIiwic3RyIiwiU3RyaW5nIiwiTWF0aCIsInJhbiIsImlzWmVybyIsImFyciIsInNwbGl0IiwibXVsdGlwbGljYXRpb24iLCJyYW5kb21FbGVtZW50IiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiaW50ZWdlciIsInJhbmRvbUludCIsImlzRXF1YWwiLCJpc0xhcmdlIiwiZ2V0TnVtYmVyIiwicyIsInB1c2giLCJyZXMiLCJtYWtlUHJpbWVOdW1iZXJzIiwiTnVtYmVyIiwiZ2V0U3RyaW5nIiwiaXNQcmltZU51bWJlciIsImV1Y2xpZGVhbkFsZ29yaXRobSIsImEiLCJiIiwiaXNOdW1iZXIiLCJ0ZW1wIiwiYXRlbXAiLCJidGVtcCIsImN0ZW1wIiwiY291bnRlciIsImNvcHJpbWUiLCJzdW1tYXRpb24iLCJhcmd1bWVudHMiLCJzdW0iLCJqIiwiZWxtIiwiaW5maW5pdGVQcm9kdWN0IiwiaXAiLCJkaXZpc2lvbiIsImRpdmlkZW5kIiwiZGl2aXNvciIsInJlc3VsdCIsInJlbWFpbmRlciIsImZsb29yIiwicmVhbE51bWJlciIsImRpdmlzb3JzU3VtbWF0aW9uIiwibiIsImRpdmlzb3JzIiwiaXNBYnVuZGFudE51bWJlciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQSIsIm51bSIsImxlbiIsImZpcnN0X2xlbiIsImFmdGVyX2xlbiIsImZpcnN0IiwiYWZ0ZXIiLCJpc09kZE51bWJlciIsInN1YnN0ciIsImlzS2FwcmVrYXJOdW1iZXJUeXBlQiIsInNvcnQiLCJqb2luIiwicmV2ZXJzZSIsImlzS2FwcmVrYXJOdW1iZXIiLCJpc0ludGVnZXIiLCJmIiwiaGFybW9uaWNNZWFuIiwiaXNIYXJtb25pY0Rpdmlzb3JOdW1iZXIiLCJpc05hdHVyYWxOdW1iZXIiLCJjb2xsYXR6aFByb2JsZW0iLCJjYWxjIiwiaXNFdmVuTnVtYmVyIiwiZmVybWF0VGVzdCIsIm1heENvbW1vbkRpdmlzb3IiLCJwb3ciLCJnZXRJbmNsdWRlc051bWJlcnMiLCJib29sIiwiYXIiLCJhcnJheVN1bW1hdGlvbiIsIkFycmF5IiwiY29yZSIsIm51bVRvQXJyYXkiLCJpc051bUFycmF5Iiwic3RyaW5nIiwibnVtYmVyIiwiQSIsIkIiLCJjb25zb2xlIiwibG9nIiwiZ2V0TGFyZ2VyIiwiYXJyX2EiLCJhcnJfYiIsImdhcCIsIm92ZXIiLCJhcnJfYyIsIl9yZXMiLCJlbG1fYSIsImVsbV9iIiwidW5zaGlmdCIsImVsbV9hYSIsImVsbV9iYiIsIkRCWiIsIk5BTiIsIk5PVFNVIiwiaXNOYU4iLCJOYU4iLCJzbGljZSIsIkVycm9yIiwiZ2xvYmFsIiwiU0siLCJzZWxmIiwiY29uc3RhbnRzIiwib3B0aW9uIiwibmVnYXRpdmUiLCJwYXJ0cyIsImludF9zdHIiLCJkZWNpbWFsX3N0ciIsImludDAiLCJtYXRjaCIsIm5ld19pbnRfc3RyIiwic3RhcnRfemVybyIsImRlYzAiLCJlbmRfemVybyIsIm5ld19kZWNpbWFsX3N0ciIsImludF9hcnIiLCJkZWNpbWFsX2FyciIsImUiLCJkZWNpbWFsIiwiZGVub21pbmF0b3IiLCJmcmFjdGlvbiIsIm51bWVyYXRvciIsImNvbmNhdCIsIm1lc3NhZ2UiLCJaRVJPIiwiT05FIiwicHJvdG90eXBlIiwiYWMiLCJyZWR1Y2UiLCJnZXRJbnRlZ2VyIiwiZ2V0RGVjaW1hbCIsImNsb25lIiwiZ2V0TGFyZ2UiLCJhYnNvbHV0ZSIsImZpZWxkIiwiX2EiLCJfYiIsImlfYSIsImlfYiIsImRfYSIsImRfYiIsImxhcmdlIiwiY29udGFpbkRlY2ltYWwiLCJpc09uZSIsImlzU21hbGwiLCJpc1Bvc2l0aXZlIiwiaXNOZWdhdGl2ZSIsInYiLCJhZGQiLCJtYWtlUG9zaXRpdmUiLCJzdWJ0cmFjdCIsImludF9hIiwiZGVjX2EiLCJpbnRfYiIsImRlY19iIiwibGVuX2kiLCJsZW5fZCIsImludF9yZXMiLCJkZWNfcmVzIiwiZCIsInBvcCIsIm5lZ2F0ZSIsImFfaWQiLCJiX2lkIiwiYV9pX2xlbiIsImJfaV9sZW4iLCJhX2RfbGVuIiwiYl9kX2xlbiIsImRfZ2FwIiwiYWJzIiwiZGVidCIsInJlc19hcnJheSIsImFfZWxtIiwiYl9lbG0iLCJzcGxpY2UiLCJtaW51cyIsIm5ldmF0aXZlIiwibWFrZU5lZ2F0aXZlIiwiZHBfYSIsImRwX2IiLCJyZXNfYXJyIiwicG9zX2EiLCJwb3NfYiIsInBvcyIsInBhZEVuZCIsInBhZFN0YXJ0IiwiY291bnQiLCJyZW1haW4iLCJwbHVzIiwidGFzdSIsImhpa3UiLCJtdWx0aXBseSIsImtha2VydSIsIndhcnUiLCJuZXh0IiwicHJldiIsImdldERpdmlzb3JzIiwiZ2V0Q29tbW9uRGl2aXNvcnMiLCJkaXZzIiwiZ2V0TWF4Q29tbW9uRGl2aXNvciIsIm11bHRpcGxlIiwiZ2V0TGVhc3RDb21tb25NdWx0aXBsZSIsIm11bHRpIiwibWFrZUZpYm9uYWNjaVNlcXVlbmNlIiwiZnVuYyIsImMiLCJtYWtlTHVjYXNTZXF1ZW5jZSIsImlzRmlib25hY2NpTnVtYmVyIiwiemVybyIsIm9uZSIsImZpYnMiLCJpc0x1Y2FzTnVtYmVyIiwibHVjcyIsIm1ha2VTZXF1ZW5jZSIsIm90aGVycyIsImdldFNlcXVlbmNlIiwiZGlnaXRzdW0iLCJzcXVhcmUiLCJleHBvbmVudGlhdGUiLCJjdWJlIiwiaXNEZWZpY2llbnROdW1iZXIiLCJpc1BlcmZlY3ROdW1iZXIiLCJmYWN0b3JpYWwiLCJtYWtlUG9seWdvbmFsTnVtYmVycyIsImN1cnJlbnQiLCJyYW5nZSIsImluY3JlbWVudCIsIm1ha2VUcmlhbmdsZU51bWJlcnMiLCJtYWtlU3F1YXJlTnVtYmVycyIsImlzVHJpYW5nbGVOdW1iZXIiLCJmaW5kIiwiaXNTcXVhcmVOdW1iZXIiLCJtYWtlTWVyc2VubmVOdW1iZXJzIiwidHdvIiwiZXgiLCJtYWtlTWVyc2VubmVQcmltZU51bWJlcnMiLCJtYXJyIiwiaXNNZXJzZW5uZU51bWJlciIsIm1zIiwibSIsImlzTWVyc2VubmVQcmltZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7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RUFBRSxDQUFDL08sQ0FBRCxDQUFWOztBQUNBLFFBQUdnUCxDQUFDLENBQUM1TyxPQUFGLENBQVVtQyxDQUFWLENBQUgsRUFBZ0I7QUFDZCxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELFNBQU8sS0FBUDtBQUNELENBaEJEOztBQW1CZTtBQUNiM0QsUUFBTSxFQUFFQSxNQURLO0FBRWJFLFFBQU0sRUFBRUEsTUFGSztBQUdiQyxNQUFJLEVBQUVBLElBSE87QUFJYkMsSUFBRSxFQUFFQTtBQUpTLENBQWYsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzdWFwcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBjb3JlIGZyb20gXCIuL2NvcmUuanNcIjtcbmltcG9ydCBzdSBmcm9tIFwiLi9zdS5qc1wiO1xuXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuL2NvbnN0YW50cy5qc1wiO1xuXG5jb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuY29uc3QgTUlOID0gQ09OU1RBTlRTLk1JTjtcblxuY29uc3QgUyA9IHt9O1xuY29uc3QgSyA9IHt9O1xuXG5jb25zdCBtYWtlU3UgPSBzdS5tYWtlU3U7XG5jb25zdCBjb3B5U3UgPSBzdS5jb3B5U3U7XG5jb25zdCBpc1N1ID0gc3UuaXNTdTtcbmNvbnN0IFN1ID0gc3UuU3U7XG5cbmNvbnN0IEZJUlNUX1BSSU1FX05VTUJFUiA9IDI7XG5cblxuSy5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCl7XG4gIGlmKG1pbiA9PT0gdW5kZWZpbmVkKXtcbiAgICBtaW4gPSBtYWtlU3UoMCk7XG4gIH1cbiAgaWYobWF4ID09PSB1bmRlZmluZWQpe1xuICAgIG1heCA9IG1ha2VTdSgxKTtcbiAgfVxuICBpZighaXNTdShtaW4pKXtcbiAgICBtaW4gPSBtYWtlU3UobWluKTtcbiAgfVxuICBpZighaXNTdShtYXgpKXtcbiAgICBtYXggPSBtYWtlU3UobWF4KTtcbiAgfVxuXG4gIGNvbnN0IHN0ciA9IFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgbGV0IHJhbjtcblxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBpZihtaW4uaXNaZXJvKCkpe1xuICAgICAgcmFuID0gbWFrZVN1KDApO1xuICAgIH1lbHNle1xuICAgICAgcmFuID0gbWluO1xuICAgIH1cbiAgfWVsc2V7XG4gICAgbGV0IGFyciA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgcmFuID0gbWFrZVN1KFwiMC5cIiArIGFyclsxXSkubXVsdGlwbGljYXRpb24obWF4KTtcbiAgfVxuICByZXR1cm4gcmFuO1xufTtcblxuSy5yYW5kb21FbGVtZW50ID0gZnVuY3Rpb24oYXJyYXkpe1xuICBjb25zdCBpID0gSy5yYW5kb20oMCwgYXJyYXkubGVuZ3RoKS5pbnRlZ2VyO1xuICByZXR1cm4gYXJyYXlbaV07XG59O1xuXG5LLnJhbmRvbUludCA9IGZ1bmN0aW9uKG1pbiwgbWF4KXtcblxuICBpZiggIWlzU3UobWluKSB8fCAhaXNTdShtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cbiAgaWYobWluLmlzRXF1YWwobWF4KSB8fCBtaW4uaXNMYXJnZShtYXgpKXtcbiAgICByZXR1cm4gXCJUaGlzIGZ1bmN0aW9uIGhhcyBiZWVuIGNhbGxlZCB3aXRoIGluY29ycmVjdCBwYXJhbWV0ZXJzXCI7XG4gIH1cblxuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gbWluLmdldE51bWJlcigpOyBpIDw9IG1heC5nZXROdW1iZXIoKTsgaSsrKXtcbiAgICBjb25zdCBzID0gbWFrZVN1KGkpO1xuICAgIGFyci5wdXNoKHMpO1xuICB9XG5cbiAgY29uc3QgcmVzID0gSy5yYW5kb21FbGVtZW50KGFycik7XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbksubWFrZVByaW1lTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIGlmKG1heCAmJiBtYXguaXNTdSAmJiBtYXguaXNTdSgpKXtcbiAgICBtYXggPSBOdW1iZXIobWF4LmdldFN0cmluZygpKTtcbiAgfVxuXG4gIGNvbnN0IE1BWCA9IDEwMDtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gTUFYO1xuICB9XG4gIGlmKG1heCA+IE1BWCl7XG4gICAgbWF4ID0gTUFYO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IobGV0IGkgPSBGSVJTVF9QUklNRV9OVU1CRVI7IGkgPCBtYXg7IGkrKyl7XG4gICAgY29uc3Qgc3UgPSBtYWtlU3UoaSk7XG4gICAgaWYoc3UuaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKHN1KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cblxuLy8g44Om44O844Kv44Oq44OD44OJ44Gu5LqS6Zmk5rOVXG5LLmV1Y2xpZGVhbkFsZ29yaXRobSA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIVMuaXNOdW1iZXIoYSkgfHwgIVMuaXNOdW1iZXIoYikpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBpZiggYSA9PT0gYil7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBsZXQgdGVtcDtcbiAgaWYoIGEgPCBiKXtcbiAgICB0ZW1wID0gYTtcbiAgICBhID0gYjtcbiAgICBiID0gdGVtcDtcbiAgfVxuXG4gIGxldCBhdGVtcCA9IGE7XG4gIGxldCBidGVtcCA9IGI7XG4gIGxldCBjdGVtcDtcbiAgbGV0IHJlcztcbiAgbGV0IGNvdW50ZXIgPSAwO1xuICBjb25zdCBjb3ByaW1lID0gXCJjb3ByaW1lXCI7XG4gIHdoaWxlKGN0ZW1wICE9PTApe1xuICAgIGN0ZW1wID0gYXRlbXAgJSBidGVtcDtcbiAgICBpZihjdGVtcCA9PT0gMCl7XG4gICAgICByZXMgPSBidGVtcDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZihjdGVtcCA9PT0gMSl7XG4gICAgICByZXMgPSBjb3ByaW1lO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmKGNvdW50ZXIgPj0gTUFYKXtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBhdGVtcCA9IGJ0ZW1wO1xuICAgIGJ0ZW1wID0gY3RlbXA7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cbksuc3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgYXJyYXkucHVzaChhcmd1bWVudHNbaV0pO1xuICB9XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCl7XG4gICAgcmV0dXJuIFwiQXJndW1lbnQgaXMgbm90IE51bWJlclwiO1xuICB9XG5cbiAgbGV0IHN1bSA9IDA7XG4gIGZvcihsZXQgaiA9IDA7IGogPCBhcnJheS5sZW5ndGg7IGorKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbal07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIHN1bSArPSBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgTnVtYmVyXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5LLmluZmluaXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgIGFycmF5LnB1c2goYXJndW1lbnRzW2ldKTtcbiAgfVxuICBpZihhcnJheS5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBcIkFyZ3VtZW50IGlzIGVtcHR5LlwiO1xuICB9XG4gIGxldCBpcCA9IDE7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgY29uc3QgZWxtID0gYXJyYXlbaV07XG4gICAgaWYoUy5pc051bWJlcihlbG0pKXtcbiAgICAgIGlwID0gaXAgKiBlbG07XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJBcmd1bWVudCBpcyBub3QgYSBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlwO1xufTtcblxuSy5kaXZpc2lvbiA9IGZ1bmN0aW9uKGRpdmlkZW5kLCBkaXZpc29yKXtcbiAgaWYoZGl2aWRlbmQgPT09IHVuZGVmaW5lZCB8fCBkaXZpc29yID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiBcIlRoaXMgZnVuY3Rpb24gaGFzIGJlZW4gY2FsbGVkIHdpdGggaW5jb3JyZWN0IHBhcmFtZXRlcnNcIjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBkaXZpZGVuZCAvIGRpdmlzb3I7XG4gIHJldHVybiB7XG4gICAgaW50ZWdlcjoge1xuICAgICAgcmVtYWluZGVyOiBkaXZpZGVuZCAlIGRpdmlzb3IsXG4gICAgICByZXN1bHQ6IE1hdGguZmxvb3IocmVzdWx0KVxuICAgIH0sXG4gICAgcmVhbE51bWJlcjogcmVzdWx0XG4gIH07XG59O1xuXG5LLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGxldCBhID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSArPSBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5LLmlzQWJ1bmRhbnROdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgY29uc3Qgc3VtID0gSy5kaXZpc29yc1N1bW1hdGlvbihuKTtcbiAgaWYoc3VtID4gbiAqIDIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbksuaXNLYXByZWthck51bWJlclR5cGVBID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IG51bSA9IG4gKiBuO1xuICBjb25zdCBzID0gU3RyaW5nKG51bSk7XG4gIGNvbnN0IGxlbiA9IHMubGVuZ3RoO1xuICBsZXQgZmlyc3RfbGVuID0gMDtcbiAgbGV0IGFmdGVyX2xlbiA9IDA7XG4gIGxldCBmaXJzdCwgYWZ0ZXI7XG4gIGlmKFMuaXNPZGROdW1iZXIobGVuKSl7XG4gICAgZmlyc3RfbGVuID0gKGxlbiAtIDEpIC8gMjtcbiAgICBhZnRlcl9sZW4gPSBmaXJzdF9sZW4gKyAxO1xuICB9ZWxzZXtcbiAgICBmaXJzdF9sZW4gPSBsZW4gLyAyO1xuICAgIGFmdGVyX2xlbiA9IGZpcnN0X2xlbjtcbiAgfVxuICBmaXJzdCA9IE51bWJlcihzLnN1YnN0cigwLCBmaXJzdF9sZW4pKTtcbiAgYWZ0ZXIgPSBOdW1iZXIocy5zdWJzdHIoZmlyc3RfbGVuLCBhZnRlcl9sZW4pKTtcblxuICBpZigoIGZpcnN0ICsgYWZ0ZXIgKSA9PT0gbil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuSy5pc0thcHJla2FyTnVtYmVyVHlwZUIgPSBmdW5jdGlvbihuKXtcblxuICBjb25zdCBhcnIgPSBTdHJpbmcobikuc3BsaXQoXCJcIik7XG5cbiAgY29uc3QgbWluID0gTnVtYmVyKGFyci5zb3J0KCkuam9pbihcIlwiKSk7XG4gIGNvbnN0IG1heCA9IE51bWJlcihhcnIucmV2ZXJzZSgpLmpvaW4oXCJcIikpO1xuXG4gIGlmKChtYXggLSBtaW4pID09PSBuKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5LLmlzS2FwcmVrYXJOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYoSy5pc0thcHJla2FyTnVtYmVyVHlwZUEobikgfHwgSy5pc0thcHJla2FyTnVtYmVyVHlwZUIobikpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5TLmlzSW50ZWdlciA9IGZ1bmN0aW9uKG4pe1xuICBjb25zdCBmID0gTWF0aC5mbG9vcihuKTtcbiAgaWYoIGYgPT09IG4pe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIOiqv+WSjOW5s+Wdh1xuSy5oYXJtb25pY01lYW4gPSBmdW5jdGlvbihhcnIpe1xuICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICBsZXQgc3VtID0gMDtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKXtcbiAgICBzdW0gKz0gMSAvIGFycltpXTtcbiAgfVxuICByZXR1cm4gbGVuIC8gc3VtO1xufTtcblxuLy8g6Kq/5ZKM5pWw44GL44Gp44GG44GLXG5LLmlzSGFybW9uaWNEaXZpc29yTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IEsuZGl2aXNvcnMobik7XG4gIGNvbnN0IHJlcyA9IEsuaGFybW9uaWNNZWFuKGFycik7XG4gIGlmKFMuaXNJbnRlZ2VyKHJlcykpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblMuaXNOYXR1cmFsTnVtYmVyID0gZnVuY3Rpb24obil7XG4gIGlmKG4gPiAwICYmIFMuaXNJbnRlZ2VyKG4pKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5LLmNvbGxhdHpoUHJvYmxlbSA9IGZ1bmN0aW9uKG51bSl7XG5cbiAgY29uc3QgYXJyID0gW107XG5cbiAgY29uc3QgY2FsYyA9IGZ1bmN0aW9uKG4pe1xuICAgIGxldCByZXMgPSBuO1xuICAgIGlmKFMuaXNPZGROdW1iZXIobikpe1xuICAgICAgcmVzID0gbiAqIDMgKyAxO1xuICAgIH1lbHNlIGlmKFMuaXNFdmVuTnVtYmVyKG4pKXtcbiAgICAgIHJlcyA9IG4gLyAyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIHdoaWxlKG51bSA+IDEpe1xuICAgIG51bSA9IGNhbGMobnVtKTtcbiAgICBhcnIucHVzaChudW0pO1xuICB9XG4gIHJldHVybiBhcnI7XG59O1xuXG4vLyDjg5Xjgqfjg6vjg57jg7zjg4bjgrnjg4hcbi8vIEpT44Gu5omx44GI44KL56+E5Zuy44KS6LaF44GI44Gm44GE44Gm44GG44G+44GP5YuV44GL44GaXG5LLmZlcm1hdFRlc3QgPSBmdW5jdGlvbihuLCBtYXgpe1xuICBpZighUy5pc0ludGVnZXIobikgfHwgUy5pc1plcm8obikgfHwgbiA9PT0gMSl7XG4gICAgcmV0dXJuIFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVycy4gXCIgKyBuICsgXCIgaXMgaW5jb3JyZWN0IHBhcmFtZXRlci5cIjtcbiAgfVxuXG4gIGlmKCFtYXgpe1xuICAgIG1heCA9IDEwMDtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IDE7IGkgPD0gbWF4OyBpKyspe1xuICAgIGNvbnN0IGEgPSBLLnJhbmRvbUludCgyLCBuIC0gMSk7XG4gICAgaWYoSy5tYXhDb21tb25EaXZpc29yKGEsIG4pICE9PSAxKXtcbiAgICAgIHJldHVybiBcIkNvbXBvc2l0IE51bWJlclwiO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBNYXRoLnBvdyhhLCBuIC0gMSkgJSBuO1xuICAgIGlmKHJlcyAhPT0gMSl7XG4gICAgICByZXR1cm4gXCJDb21wb3NpdCBOdW1iZXJcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiTWF5YmUgUHJpbWUgTnVtYmVyXCI7XG59O1xuXG4vLyDntYTjgb/lkIjjgo/jgZvmlbDjga7oqIjnrpdcbi8vIEsuY29tYmluYXRpb25zID0gZnVuY3Rpb24oYXJyKXtcbi8vIH07XG5cbi8vIDMgPT4gWzAsIDNdLCBbMSwgMl0sIFsyLCAxXSwgWzMsIDBdXG5LLmdldEluY2x1ZGVzTnVtYmVycyA9IGZ1bmN0aW9uKG51bSl7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgdGVtcCA9IG51bTtcbiAgbGV0IGJvb2wgPSB0cnVlO1xuICB3aGlsZShib29sKXtcbiAgICBjb25zdCBhID0gdGVtcDtcbiAgICBjb25zdCBiID0gbnVtIC10ZW1wO1xuICAgIGNvbnN0IGFyID0gW2EsYl07XG4gICAgYXJyLnB1c2goYXIpO1xuICAgIHRlbXAgPSB0ZW1wIC0xO1xuICAgIGlmKHRlbXAgPCAwKXtcbiAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuLy8gZmlib25hY2NpXG5cblxuXG5cblxuXG5cbi8vIHRvZG8gMHN0YXJ0XG5jb25zdCBhcnJheVN1bW1hdGlvbiA9IGZ1bmN0aW9uKGEsIGIpe1xuICBpZiggIShhIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYSA9IGNvcmUubnVtVG9BcnJheShhKTtcbiAgfVxuICBpZiggIShiIGluc3RhbmNlb2YgQXJyYXkpICl7XG4gICAgYiA9IGNvcmUubnVtVG9BcnJheShiKTtcbiAgfVxuXG4gIGlmKCFjb3JlLmlzTnVtQXJyYXkoYSkgfHwgIWNvcmUuaXNOdW1BcnJheShiKSl7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmKGNvcmUuaXNaZXJvKGFbMF0pICYmIGNvcmUuaXNaZXJvKGJbMF0pKXtcbiAgICByZXR1cm4ge1xuICAgICAgYXJyYXk6IFswXSxcbiAgICAgIHN0cmluZzogXCIwXCIsXG4gICAgICBudW1iZXI6IDAsXG4gICAgICBsZW5ndGg6IDFcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgQSA9IG1ha2VTdShhKTtcbiAgY29uc3QgQiA9IG1ha2VTdShiKTtcblxuICBjb25zb2xlLmxvZyhBLEIpO1xuXG4gIGNvbnN0IHJlcyA9IGNvcmUuZ2V0TGFyZ2VyKGEsIGIpO1xuICBjb25zdCBhcnJfYSA9IHJlc1swXTtcbiAgY29uc3QgYXJyX2IgPSByZXNbMV07XG4gIGNvbnN0IGxlbiA9IGFycl9hLmxlbmd0aDtcblxuICBjb25zdCBnYXAgPSBsZW4gLSBhcnJfYi5sZW5ndGg7XG5cbiAgbGV0IG92ZXIgPSAwLCBhcnJfYyA9IFtdO1xuICBmb3IobGV0IGkgPSBsZW4gLSAxOyBpID49IDA7IGktLSl7XG4gICAgbGV0IF9yZXM7XG4gICAgY29uc3QgZWxtX2EgPSBhcnJfYVtpXTtcbiAgICBjb25zdCBlbG1fYiA9IGFycl9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGFycl9jLnVuc2hpZnQoX3Jlcyk7XG4gIH1cbiAgaWYob3ZlciA+IDApe1xuICAgIGFycl9jLnVuc2hpZnQob3Zlcik7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSBtYWtlU3UoYXJyX2MpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBnZXRMYXJnZXIgPSBmdW5jdGlvbihhLCBiKXtcbiAgY29uc3QgYXJyX2EgPSBbXSwgYXJyX2IgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9hID0gYVtpXTtcbiAgICBpZihlbG1fYSA9PT0gMCAmJiBhcnJfYS5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9hID49ICAwICYmIGVsbV9hIDwgMTApe1xuICAgICAgYXJyX2EucHVzaChlbG1fYSk7XG4gICAgfVxuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IGVsbV9iID0gYltpXTtcbiAgICBpZihlbG1fYiA9PT0gMCAmJiBhcnJfYi5sZW5ndGggPT09IDApe1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmKGVsbV9iID49ICAwICYmIGVsbV9iIDwgMTApe1xuICAgICAgYXJyX2IucHVzaChlbG1fYik7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcztcbiAgaWYoYXJyX2EubGVuZ3RoID4gYXJyX2IubGVuZ3RoKXtcbiAgICByZXMgPSBbYSwgYl07XG4gIH1lbHNlIGlmKGFycl9hLmxlbmd0aCA8IGFycl9iLmxlbmd0aCl7XG4gICAgcmVzID0gW2IsIGFdO1xuICB9ZWxzZXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgICAgY29uc3QgZWxtX2FhID0gYXJyX2FbaV07XG4gICAgICBjb25zdCBlbG1fYmIgPSBhcnJfYltpXTtcbiAgICAgIGlmKGVsbV9hYSA+IGVsbV9iYil7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9ZWxzZSBpZihlbG1fYWEgPCBlbG1fYmIpe1xuICAgICAgICByZXMgPSBbYiwgYV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJlcyA9IFthLCBiXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFM6IFMsXG4gIEs6IEtcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICBNQVg6IDEwMDAwLFxuICBNSU46IC0xMDAwMCxcbiAgREJaOiBcIkRpdmlzaW9uIGJ5IFplcm9cIixcbiAgTkFOOiBcIk5vdCBhIG51bWJlclwiLFxuICBOT1RTVTogXCJBcmd1bWVudCBpcyBub3QgU3UuXCJcbn07XG4iLCJjb25zdCBjb3JlID0ge307XG5cbmNvcmUuaXNOdW1iZXIgPSBmdW5jdGlvbihuKXtcbiAgaWYodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpe1xuICAgIGlmKE51bWJlci5pc05hTihuKSl7XG4gICAgICByZXR1cm4gTmFOO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5jb3JlLmlzWmVybyA9IGZ1bmN0aW9uKG4pe1xuICBpZiggbiA9PT0gMCl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbi8vIOmFjeWIl+OBp+OBruioiOeul1xuY29yZS5udW1Ub0FycmF5ID0gZnVuY3Rpb24obil7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBjb25zdCBzdHIgPSBTdHJpbmcobik7XG4gIGNvbnN0IGxlbiA9IHN0ci5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgY29uc3QgZWxtID0gTnVtYmVyKHN0ci5zbGljZShpLCBpICsgMSkpO1xuICAgIGlmKCF0aGlzLmlzTnVtYmVyKGVsbSkpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBmdW5jdGlvbiBoYXMgYmVlbiBjYWxsZWQgd2l0aCBpbmNvcnJlY3QgcGFyYW1ldGVyc1wiKTtcbiAgICB9XG4gICAgYXJyLnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29yZS5pc051bUFycmF5ID0gZnVuY3Rpb24oYXJyKXtcbiAgaWYoIGFyciBpbnN0YW5jZW9mIEFycmF5ICl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiggIXRoaXMuaXNOdW1iZXIoYXJyW2ldKSApe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuIiwiaW1wb3J0IHMgZnJvbSBcIi4vc3UuanNcIjtcbmltcG9ydCBTSyBmcm9tIFwiLi9TSy5qc1wiO1xuXG4oZnVuY3Rpb24oZ2xvYmFsLCBzKXtcbiAgZ2xvYmFsLnMgPSBzO1xuICBnbG9iYWwuSyA9IFNLLks7XG59KShnbG9iYWwgfHwgc2VsZiwgcyk7IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudHMuanNcIjtcblxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vY29yZS5qc1wiO1xuXG5jb25zdCBNQVggPSBjb25zdGFudHMuTUFYO1xuY29uc3QgTUlOID0gY29uc3RhbnRzLk1JTjtcbmNvbnN0IERCWiA9IGNvbnN0YW50cy5EQlo7XG5jb25zdCBOQU4gPSBjb25zdGFudHMuTkFOO1xuY29uc3QgTk9UU1UgPSBjb25zdGFudHMuTk9UU1U7XG5cblxuY29uc3QgU3UgPSBmdW5jdGlvbihuLCBvcHRpb24pe1xuICBpZihpc05hTihuKSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5BTik7XG4gIH1cbiAgaWYoIW4pe1xuICAgIG4gPSAwO1xuICB9XG4gIGlmKCFvcHRpb24pe1xuICAgIG9wdGlvbiA9IHt9O1xuICB9XG5cbiAgbGV0IHN0ciA9IFN0cmluZyhuKTtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoc3RyWzBdID09PSBcIi1cIil7XG4gICAgc3RyID0gc3RyLnNsaWNlKDEsIHN0ci5sZW5ndGgpO1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICBpZighbmVnYXRpdmUgJiYgb3B0aW9uICYmIG9wdGlvbi5uZWdhdGl2ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9XG5cbiAgaWYoaXNOYU4oTnVtYmVyKHN0cikpKXtcbiAgICBzdHIgPSBcIjBcIjtcbiAgfVxuICBpZihzdHIgPT09IFwiMFwiKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgbGV0IGludF9zdHIgPSBwYXJ0c1swXTtcbiAgbGV0IGRlY2ltYWxfc3RyID0gcGFydHNbMV07XG4gIGlmKGludF9zdHIpe1xuICAgIGNvbnN0IGludDAgPSBpbnRfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGludDAgJiYgaW50MC5sZW5ndGggPT09IGludF9zdHIubGVuZ3RoKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9XG4gICAgbGV0IG5ld19pbnRfc3RyID0gXCJcIjtcbiAgICBsZXQgc3RhcnRfemVybyA9IHRydWU7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8aW50X3N0ci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZihpbnRfc3RyW2ldICE9PSBcIjBcIiB8fCAhc3RhcnRfemVybyl7XG4gICAgICAgIHN0YXJ0X3plcm8gPSBmYWxzZTtcbiAgICAgICAgbmV3X2ludF9zdHIgKz0gaW50X3N0cltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19pbnRfc3RyKXtcbiAgICAgIGludF9zdHIgPSBcIjBcIjtcbiAgICB9ZWxzZXtcbiAgICAgIGludF9zdHIgPSBuZXdfaW50X3N0cjtcbiAgICB9XG4gIH1cblxuICBpZihkZWNpbWFsX3N0cil7XG4gICAgY29uc3QgZGVjMCA9IGRlY2ltYWxfc3RyLm1hdGNoKC8wL2cpO1xuICAgIGlmKGRlYzAgJiYgZGVjMC5sZW5ndGggPT09IGRlY2ltYWxfc3RyLmxlbmd0aCl7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1cbiAgICBsZXQgZW5kX3plcm8gPSB0cnVlO1xuICAgIGxldCBuZXdfZGVjaW1hbF9zdHIgPSBcIlwiO1xuICAgIGZvcihsZXQgaSA9IGRlY2ltYWxfc3RyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICAgIGlmKGRlY2ltYWxfc3RyW2ldICE9PSBcIjBcIiB8fCAhZW5kX3plcm8pe1xuICAgICAgICBlbmRfemVybyA9IGZhbHNlO1xuICAgICAgICBuZXdfZGVjaW1hbF9zdHIgPSBkZWNpbWFsX3N0cltpXSArIG5ld19kZWNpbWFsX3N0cjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIW5ld19kZWNpbWFsX3N0cil7XG4gICAgICBkZWNpbWFsX3N0ciA9IFwiMFwiO1xuICAgIH1lbHNle1xuICAgICAgZGVjaW1hbF9zdHIgPSBuZXdfZGVjaW1hbF9zdHI7XG4gICAgfVxuXG4gIH1cblxuICBsZXQgaW50X2FycjtcbiAgbGV0IGRlY2ltYWxfYXJyO1xuXG5cbiAgdHJ5e1xuICAgIGludF9hcnIgPSBjb3JlLm51bVRvQXJyYXkoaW50X3N0cik7XG4gICAgZGVjaW1hbF9hcnIgPSBkZWNpbWFsX3N0ciA/IGNvcmUubnVtVG9BcnJheShkZWNpbWFsX3N0cikgOiBbMF07XG4gIH1jYXRjaChlKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTkFOKTtcbiAgfVxuXG4gIHRoaXMuaW50ZWdlciA9IGludF9hcnI7XG4gIHRoaXMuZGVjaW1hbCA9IGRlY2ltYWxfYXJyO1xuICB0aGlzLm5lZ2F0aXZlID0gbmVnYXRpdmUgPyB0cnVlIDogZmFsc2U7XG4gIFxuICBsZXQgZGVub21pbmF0b3IgPSBbMV07XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZGVjaW1hbC5sZW5ndGg7IGkrKyl7XG4gICAgZGVub21pbmF0b3IucHVzaCgwKTtcbiAgfVxuXG4gIHRoaXMuZnJhY3Rpb24gPSB7XG4gICAgbnVtZXJhdG9yOiB0aGlzLmludGVnZXIuY29uY2F0KHRoaXMuZGVjaW1hbCksXG4gICAgZGVub21pbmF0b3I6IGRlbm9taW5hdG9yXG4gIH07XG5cbn07XG5cbmNvbnN0IG1ha2VTdSA9IGZ1bmN0aW9uKG51bSwgb3B0aW9uKXtcbiAgbGV0IHJlcztcbiAgdHJ5e1xuICAgIHJlcyA9IG5ldyBTdShudW0sIG9wdGlvbik7XG4gIH1jYXRjaChlKXtcbiAgICByZXMgPSBlLm1lc3NhZ2U7XG4gIH1cblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5jb25zdCBpc1N1ID0gZnVuY3Rpb24oc3Upe1xuICBpZihzdSBpbnN0YW5jZW9mIFN1KXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgY29weVN1ID0gZnVuY3Rpb24oc3Upe1xuICBjb25zdCBzdHIgPSBzdS5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgQ09OU1RBTlRTID0ge1xuICBaRVJPOiBtYWtlU3UoMCksXG4gIE9ORTogbWFrZVN1KDEpLFxuICBGSVJTVF9QUklNRV9OVU1CRVI6IG1ha2VTdSgyKSxcbiAgTUFYOiBtYWtlU3UoTUFYKSxcbiAgTUlOOiBtYWtlU3UoTUlOKVxufTtcblxuXG5TdS5wcm90b3R5cGUuZ2V0U3RyaW5nID0gZnVuY3Rpb24oKXtcbiAgbGV0IHN0ciA9IFN0cmluZyggdGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICBjb25zdCBhYyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoKGEsZSkgPT4gYSArIGUpO1xuICBpZihhYyAhPT0gMCl7XG4gICAgc3RyICs9IFwiLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMubmVnYXRpdmUgPyBgLSR7c3RyfWAgOiBzdHI7XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0TnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldEludGVnZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5pbnRlZ2VyLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmdldERlY2ltYWwgPSBmdW5jdGlvbigpe1xuICBjb25zdCBudW0gPSBOdW1iZXIoXCIwLlwiICsgdGhpcy5kZWNpbWFsLmpvaW4oXCJcIikpO1xuICByZXR1cm4gbnVtO1xufTtcblxuU3UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKXtcbiAgY29uc3Qgc3RyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgcmV0dXJuIG1ha2VTdShzdHIpO1xufTtcblxuY29uc3QgZ2V0TGFyZ2UgPSBmdW5jdGlvbihhLCBiLCBhYnNvbHV0ZSA9IGZhbHNlKXtcblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgbGV0IGZpZWxkID0gW107XG5cbiAgY29uc3QgX2EgPSBtYWtlU3UoYS5nZXRTdHJpbmcoKSk7XG4gIGNvbnN0IF9iID0gbWFrZVN1KGIuZ2V0U3RyaW5nKCkpO1xuXG4gIGlmKGFic29sdXRlKXtcbiAgICBfYS5uZWdhdGl2ZSA9IGZhbHNlO1xuICAgIF9iLm5lZ2F0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZihfYS5pc1plcm8oKSAmJiBfYi5pc1plcm8oKSl7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIV9hLm5lZ2F0aXZlICYmIF9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgIV9iLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gYjtcbiAgfWVsc2UgaWYoX2EubmVnYXRpdmUgJiYgX2IubmVnYXRpdmUpe1xuICAgIG5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKF9hLmludGVnZXIubGVuZ3RoID4gX2IuaW50ZWdlci5sZW5ndGgpe1xuICAgIGlmKG5lZ2F0aXZlKXtcbiAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfWVsc2UgaWYoX2EuaW50ZWdlci5sZW5ndGggPCBfYi5pbnRlZ2VyLmxlbmd0aCl7XG4gICAgaWYobmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIHJldHVybiBiO1xuICB9XG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IF9hLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IF9hLmludGVnZXJbaV07XG4gICAgbGV0IGVsbV9iID0gX2IuaW50ZWdlcltpXTtcbiAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgIGZpZWxkID0gW2EsIGJdO1xuICAgICAgYnJlYWs7XG4gICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICBmaWVsZCA9IFtiLCBhXTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmKGZpZWxkLmxlbmd0aCA9PT0gMCl7XG4gICAgY29uc3QgbGVuID0gX2EuZGVjaW1hbC5sZW5ndGggPj0gX2IuZGVjaW1hbC5sZW5ndGggPyBfYS5kZWNpbWFsLmxlbmd0aCA6IF9iLmRlY2ltYWwubGVuZ3RoO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgZWxtX2EgPSBfYS5kZWNpbWFsW2ldID8gX2EuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBsZXQgZWxtX2IgPSBfYi5kZWNpbWFsW2ldID8gX2IuZGVjaW1hbFtpXSA6IDA7XG4gICAgICBpZihlbG1fYSA+IGVsbV9iKXtcbiAgICAgICAgZmllbGQgPSBbYSwgYl07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfWVsc2UgaWYoZWxtX2EgPCBlbG1fYil7XG4gICAgICAgIGZpZWxkID0gW2IsIGFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZihuZWdhdGl2ZSl7XG4gICAgZmllbGQgPSBbZmllbGRbMV0sIGZpZWxkWzBdXTtcbiAgfVxuICBpZihmaWVsZC5sZW5ndGggPT09IDApe1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkWzBdO1xuXG59O1xuXG5cblN1LnByb3RvdHlwZS5pc0VxdWFsID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhID0gdGhpcy5jbG9uZSgpO1xuICBjb25zdCBiID0gc3UuY2xvbmUoKTtcbiAgY29uc3QgaV9hID0gYS5pbnRlZ2VyO1xuICBjb25zdCBpX2IgPSBiLmludGVnZXI7XG4gIGNvbnN0IGRfYSA9IGEuZGVjaW1hbDtcbiAgY29uc3QgZF9iID0gYi5kZWNpbWFsO1xuXG4gIGNvbnN0IGxhcmdlID0gZ2V0TGFyZ2UoYSwgYik7XG5cbiAgaWYoIWxhcmdlKXtcbiAgICBpZihpX2EubGVuZ3RoID09PSBpX2IubGVuZ3RoKXtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpX2EubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpX2FbaV0gIT09IGlfYltpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2UgaWYoZF9hLmxlbmd0aCA9PT0gZF9iLmxlbmd0aCl7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZF9hLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoZF9hW2ldICE9PSBkX2JbaV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKGEubmVnYXRpdmUgPT09IGIubmVnYXRpdmUpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuU3UucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaW50ZWdlci5sZW5ndGggPT09IDEgJiYgdGhpcy5pbnRlZ2VyWzBdID09PSAwICYmICF0aGlzLmNvbnRhaW5EZWNpbWFsKCkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc09uZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZih0aGlzLmdldFN0cmluZygpID09PSBcIjFcIil7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTGFyZ2UgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYS5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzU21hbGwgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGEgPSB0aGlzLmNsb25lKCk7XG4gIGNvbnN0IGIgPSBzdS5jbG9uZSgpO1xuICBjb25zdCByZXMgPSBnZXRMYXJnZShhLCBiKTtcbiAgaWYoIXJlcyl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHJlcy5nZXRTdHJpbmcoKSA9PT0gYi5nZXRTdHJpbmcoKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzSW50ZWdlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmF0dXJhbE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuaXNQb3NpdGl2ZSgpICYmIHRoaXMuaXNJbnRlZ2VyKCkgJiYgdGhpcy5pc0xhcmdlKENPTlNUQU5UUy5aRVJPKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm5lZ2F0aXZlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMubmVnYXRpdmUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblN1LnByb3RvdHlwZS5jb250YWluRGVjaW1hbCA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGVjaW1hbC5yZWR1Y2UoZnVuY3Rpb24oYSwgdil7XG4gICAgICByZXR1cm4gYSArIHY7XG4gIH0pO1xuICBpZihyZXMgPT09IDApe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuICBsZXQgYSA9IHRoaXMuY2xvbmUoKTtcbiAgbGV0IGIgPSBzdS5jbG9uZSgpO1xuICBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZTtcbiAgaWYoYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1lbHNlIGlmKCFhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBuZWdhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZSBpZighYS5uZWdhdGl2ZSAmJiBiLm5lZ2F0aXZlKXtcbiAgICBiLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBhLnN1YnRyYWN0KGIpO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlICYmICFiLm5lZ2F0aXZlKXtcbiAgICBhLm1ha2VQb3NpdGl2ZSgpO1xuICAgIHJldHVybiBiLnN1YnRyYWN0KGEpO1xuICB9XG5cbiAgbGV0IHJlcyA9IGdldExhcmdlKGEsIGIpO1xuICBpZighcmVzKXtcbiAgICByZXMgPSBhO1xuICB9XG4gIGxldCBpbnRfYSA9IHJlcy5pbnRlZ2VyO1xuICBsZXQgZGVjX2EgPSByZXMuZGVjaW1hbDtcbiAgbGV0IGludF9iLCBkZWNfYjtcbiAgaWYocmVzID09PSBhKXtcbiAgICBpbnRfYiA9IGIuaW50ZWdlcjtcbiAgICBkZWNfYiA9IGIuZGVjaW1hbDtcbiAgfWVsc2V7XG4gICAgaW50X2IgPSBhLmludGVnZXI7XG4gICAgZGVjX2IgPSBhLmRlY2ltYWw7XG4gIH1cblxuICBsZXQgbGVuX2kgPSBpbnRfYS5sZW5ndGg7XG4gIGxldCBsZW5fZCA9IGRlY19hLmxlbmd0aDtcblxuICBpZihkZWNfYi5sZW5ndGggPiBkZWNfYS5sZW5ndGgpe1xuICAgIGxlbl9kID0gZGVjX2IubGVuZ3RoO1xuICB9XG4gIGxldCBvdmVyID0gMCxcbiAgICAgIGludF9yZXMgPSBbXSxcbiAgICAgIGRlY19yZXMgPSBbXTtcblxuICBmb3IobGV0IGkgPSBsZW5fZCAtIDE7IGkgPj0gMDsgaS0tKXtcbiAgICBsZXQgX3JlcztcbiAgICBsZXQgZWxtX2EgPSBkZWNfYVtpXSB8fCAwO1xuICAgIGxldCBlbG1fYiA9IGRlY19iW2ldIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGRlY19yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuXG4gIGZvcihsZXQgaSA9IGRlY19yZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKXtcbiAgICBsZXQgZCA9IGRlY19yZXNbaV07XG4gICAgaWYoZCA9PT0gMCl7XG4gICAgICBkZWNfcmVzLnBvcCgpO1xuICAgIH1lbHNle1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2FwID0gbGVuX2kgLSBpbnRfYi5sZW5ndGg7XG4gIGZvcihsZXQgaSA9IGxlbl9pIC0gMTsgaSA+PSAwOyBpLS0pe1xuICAgIGxldCBfcmVzO1xuICAgIGxldCBlbG1fYSA9IGludF9hW2ldO1xuICAgIGxldCBlbG1fYiA9IGludF9iW2kgLSBnYXBdIHx8IDA7XG4gICAgX3JlcyA9IGVsbV9hICsgZWxtX2IgKyBvdmVyO1xuICAgIGlmKF9yZXMgPj0gMTApe1xuICAgICAgb3ZlciA9IDE7XG4gICAgICBfcmVzID0gX3JlcyAtIDEwO1xuICAgIH1lbHNle1xuICAgICAgb3ZlciA9IDA7XG4gICAgfVxuICAgIGludF9yZXMudW5zaGlmdChfcmVzKTtcbiAgfVxuICBpZihvdmVyID4gMCl7XG4gICAgaW50X3Jlcy51bnNoaWZ0KG92ZXIpO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gbWFrZVN1KGludF9yZXMuam9pbihcIlwiKSArIFwiLlwiICsgZGVjX3Jlcy5qb2luKFwiXCIpLCB7bmVnYXRpdmU6IG5lZ2F0aXZlfSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoTk9UU1UpO1xuICB9XG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGlmKHRoaXMuaXNaZXJvKCkpe1xuICAgIHJldHVybiBiLm5lZ2F0ZSgpO1xuICB9XG5cbiAgaWYoYS5uZWdhdGl2ZSAhPT0gYi5uZWdhdGl2ZSl7XG4gICAgYi5uZWdhdGl2ZSA9ICFiLm5lZ2F0aXZlO1xuICAgIHJldHVybiBhLmFkZChiKTtcbiAgfVxuXG4gIGxldCBuZWdhdGl2ZSA9IGEubmVnYXRpdmU7XG5cbiAgY29uc3QgcmVzID0gZ2V0TGFyZ2UoYSwgYiwgdHJ1ZSk7XG4gIGlmKHJlcyAhPT0gYSl7XG4gICAgYSA9IHN1O1xuICAgIGIgPSB0aGlzO1xuICAgIG5lZ2F0aXZlID0gIWEubmVnYXRpdmU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGFfaV9sZW4gPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBiX2lfbGVuID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCBhX2RfbGVuID0gYS5kZWNpbWFsLmxlbmd0aDtcbiAgY29uc3QgYl9kX2xlbiA9IGIuZGVjaW1hbC5sZW5ndGg7XG4gIGNvbnN0IGRfZ2FwID0gTWF0aC5hYnMoYV9kX2xlbiAtIGJfZF9sZW4pO1xuXG4gIGxldCBsZW5faSA9IDA7XG4gIGxldCBsZW5fZCA9IDA7XG4gIGlmKGFfaV9sZW4gPiBiX2lfbGVuKXtcbiAgICBsZW5faSArPSBhX2lfbGVuO1xuICB9ZWxzZXtcbiAgICBsZW5faSArPSBiX2lfbGVuO1xuICB9XG4gIGlmKGFfZF9sZW4gPiBiX2RfbGVuKXtcbiAgICBsZW5fZCArPSBhX2RfbGVuO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkX2dhcDsgaSsrKXtcbiAgICAgIGJfaWQucHVzaCgwKTtcbiAgICB9XG4gIH1lbHNle1xuICAgIGxlbl9kICs9IGJfZF9sZW47XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGRfZ2FwOyBpKyspe1xuICAgICAgYV9pZC5wdXNoKDApO1xuICAgIH1cblxuICB9XG5cbiAgbGV0IGRlYnQgPSAwO1xuICBjb25zdCByZXNfYXJyYXkgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGxlbl9pICsgbGVuX2Q7IGkrKyl7XG4gICAgY29uc3QgaV9hID0gYV9pZC5sZW5ndGggLSAxIC0gaTtcbiAgICBjb25zdCBpX2IgPSBiX2lkLmxlbmd0aCAtIDEgLSBpO1xuICAgIGNvbnN0IGFfZWxtID0gKGFfaWRbaV9hXSA/IGFfaWRbaV9hXSA6IDApIC0gZGVidDtcbiAgICBjb25zdCBiX2VsbSA9IGJfaWRbaV9iXSA/IGJfaWRbaV9iXSA6IDA7XG4gICAgaWYoYV9lbG0gPj0gYl9lbG0pe1xuICAgICAgZGVidCA9IDA7XG4gICAgICByZXNfYXJyYXkudW5zaGlmdChhX2VsbSAtIGJfZWxtKTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlYnQgPSAxO1xuICAgICAgcmVzX2FycmF5LnVuc2hpZnQoKGRlYnQgKiAxMCkgKyBhX2VsbSAtIGJfZWxtKTtcbiAgICB9XG5cbiAgfVxuICByZXNfYXJyYXkuc3BsaWNlKHJlc19hcnJheS5sZW5ndGggLSBsZW5fZCwgMCwgXCIuXCIpO1xuICBjb25zdCBtaW51cyA9IG5lZ2F0aXZlID8gXCItXCIgOiBcIlwiO1xuXG4gIGNvbnN0IHJlc3VsdCA9ICBtYWtlU3UobWludXMgKyByZXNfYXJyYXkuam9pbihcIlwiKSk7XG5cbiAgaWYocmVzdWx0LmlzWmVybygpICYmIHJlc3VsdC5uZWdhdGl2ZSl7XG4gICAgcmVzdWx0Lm1ha2VQb3NpdGl2ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblN1LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgaWYodGhpcy5uZWdhdGl2ZSl7XG4gICAgdGhpcy5uZXZhdGl2ZSA9IGZhbHNlO1xuICB9ZWxzZXtcbiAgICB0aGlzLm5lZ2F0aXZlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlUG9zaXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cblN1LnByb3RvdHlwZS5tYWtlTmVnYXRpdmUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLm51bWJlciA9PT0gMCl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdGhpcy5uZWdhdGl2ZSA9IHRydWU7XG4gIHJldHVybiB0aGlzO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGxpY2F0aW9uID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHRocm93IG5ldyBFcnJvcihOT1RTVSk7XG4gIH1cblxuICBsZXQgYSA9IGNvcHlTdSh0aGlzKTtcbiAgbGV0IGIgPSBjb3B5U3Uoc3UpO1xuICBpZihhLmlzWmVybygpIHx8IGIuaXNaZXJvKCkpe1xuICAgIHJldHVybiBtYWtlU3UoMCk7XG4gIH1cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBjb25zdCBhX2lkID0gYS5pbnRlZ2VyLmNvbmNhdChhLmRlY2ltYWwpO1xuICBjb25zdCBiX2lkID0gYi5pbnRlZ2VyLmNvbmNhdChiLmRlY2ltYWwpO1xuXG4gIGNvbnN0IGRwX2EgPSBhLmludGVnZXIubGVuZ3RoO1xuICBjb25zdCBkcF9iID0gYi5pbnRlZ2VyLmxlbmd0aDtcblxuICBjb25zdCByZXNfYXJyID0gW107XG4gIGZvcihsZXQgaV9hID0gMDsgaV9hIDwgYV9pZC5sZW5ndGg7IGlfYSsrKXtcbiAgICBmb3IobGV0IGlfYiA9IDA7IGlfYiA8IGJfaWQubGVuZ3RoOyBpX2IrKyl7XG4gICAgICBjb25zdCBlbG1fYSA9IGFfaWRbaV9hXTtcbiAgICAgIGNvbnN0IGVsbV9iID0gYl9pZFtpX2JdO1xuICAgICAgY29uc3QgcG9zX2EgPSBkcF9hIC0gaV9hIC0xO1xuICAgICAgY29uc3QgcG9zX2IgPSBkcF9iIC0gaV9iIC0xO1xuICAgICAgY29uc3QgcG9zID0gcG9zX2EgKyBwb3NfYjtcbiAgICAgIGxldCByZXMgPSBlbG1fYSAqIGVsbV9iO1xuICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHBvcyk7XG4gICAgICBsZXQgc3RyO1xuICAgICAgaWYocG9zID49IDApe1xuICAgICAgICBsZW4rKztcbiAgICAgICAgaWYocmVzID4gOSl7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiArIDEsIFwiMFwiKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gU3RyaW5nKHJlcykucGFkRW5kKGxlbiwgXCIwXCIpO1xuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgaWYobGVuID09PSAxICYmIHJlcyA+IDkpe1xuICAgICAgICAgIHN0ciA9IFN0cmluZyhyZXMpWzBdICsgXCIuXCIgKyBTdHJpbmcocmVzKVsxXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgc3RyID0gXCIwLlwiICsgU3RyaW5nKHJlcykucGFkU3RhcnQobGVuLCBcIjBcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc19hcnIucHVzaChtYWtlU3Uoc3RyKSk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlcyA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc19hcnIubGVuZ3RoOyBpKyspe1xuICAgIHJlcyA9IHJlcy5hZGQocmVzX2FycltpXSk7XG4gIH1cblxuICByZXMubmVnYXRpdmUgPSBuZWdhdGl2ZTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5TdS5wcm90b3R5cGUuZGl2aXNpb24gPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKE5PVFNVKTtcbiAgfVxuXG4gIGxldCBhID0gY29weVN1KHRoaXMpO1xuICBsZXQgYiA9IGNvcHlTdShzdSk7XG5cbiAgaWYoYS5pc1plcm8oKSAmJiBiLmlzWmVybygpKXtcbiAgICByZXR1cm4gTkFOO1xuICB9ZWxzZSBpZihhLmlzWmVybygpKXtcbiAgICByZXR1cm4gbWFrZVN1KDApO1xuICB9ZWxzZSBpZihiLmlzWmVybygpKXtcbiAgICByZXR1cm4gREJaO1xuICB9XG5cblxuICBsZXQgbmVnYXRpdmUgPSBmYWxzZTtcbiAgaWYoYS5uZWdhdGl2ZSA9PT0gZmFsc2UgJiYgYi5uZWdhdGl2ZSA9PT0gdHJ1ZSl7XG4gICAgbmVnYXRpdmUgPSB0cnVlO1xuICB9ZWxzZSBpZihhLm5lZ2F0aXZlID09PSB0cnVlICYmIGIubmVnYXRpdmUgPT09IGZhbHNlKXtcbiAgICBuZWdhdGl2ZSA9IHRydWU7XG4gIH1cblxuICBsZXQgY291bnQgPSBtYWtlU3UoMCk7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIHdoaWxlKGEuaXNMYXJnZShzdW0pIHx8IGEuaXNFcXVhbChzdW0pKXtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoMSkpO1xuICAgIHN1bSA9IGIubXVsdGlwbGljYXRpb24oY291bnQpO1xuICB9XG5cbiAgY291bnQgPSBjb3VudC5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBzdW0gPSBzdW0uc3VidHJhY3QoYik7XG4gIGNvbnN0IHJlbWFpbiA9IGEuc3VidHJhY3Qoc3VtKTtcbiAgY29uc3QgcmVzID0gY291bnQ7XG4gIHJlcy5yZW1haW5kZXIgPSByZW1haW47XG4gIHJlcy5uZWdhdGl2ZSA9IG5lZ2F0aXZlO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG5TdS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuYWRkKHN1KTtcbn07XG5cblN1LnByb3RvdHlwZS50YXN1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5hZGQoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5zdWJ0cmFjdChzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaGlrdSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3Qoc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUua2FrZXJ1ID0gZnVuY3Rpb24oc3Upe1xuICByZXR1cm4gdGhpcy5tdWx0aXBsaWNhdGlvbihzdSk7XG59O1xuXG5TdS5wcm90b3R5cGUud2FydSA9IGZ1bmN0aW9uKHN1KXtcbiAgcmV0dXJuIHRoaXMuZGl2aXNpb24oc3UpO1xufTtcblxuU3UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5hZGQobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuc3VidHJhY3QobWFrZVN1KDEpKTtcbn07XG5cblN1LnByb3RvdHlwZS5pc0V2ZW5OdW1iZXIgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCByZXMgPSB0aGlzLmRpdmlzaW9uKG1ha2VTdSgyKSk7XG4gIFxuICBpZiggcmVzLnJlbWFpbmRlci5pc1plcm8oKSAmJiByZXMucmVtYWluZGVyLmRlY2ltYWxbMF0gPT09IDAgJiYgcmVzLnJlbWFpbmRlci5kZWNpbWFsLmxlbmd0aCA9PT0gMSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1lbHNle1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuU3UucHJvdG90eXBlLmlzT2RkTnVtYmVyID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHJlcyA9IHRoaXMuZGl2aXNpb24obWFrZVN1KDIpKTtcbiAgaWYoICFyZXMucmVtYWluZGVyLmlzWmVybygpICYmIHJlcy5yZW1haW5kZXIuZGVjaW1hbFswXSA9PT0gMCAmJiByZXMucmVtYWluZGVyLmRlY2ltYWwubGVuZ3RoID09PSAxKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZ2V0RGl2aXNvcnMgPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMTsgdGhpcy5pc0xhcmdlKG1ha2VTdShpKSk7IGkrKyl7XG4gICAgbGV0IHN1ID0gbWFrZVN1KGkpO1xuICAgIGNvbnN0IHJlbWFpbmRlciA9IHRoaXMuZGl2aXNpb24oc3UpLnJlbWFpbmRlcjtcbiAgICBpZihyZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgYXJyLnB1c2goc3UpO1xuICAgIH1cbiAgfVxuICBhcnIucHVzaCh0aGlzKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cblN1LnByb3RvdHlwZS5nZXRDb21tb25EaXZpc29ycyA9IGZ1bmN0aW9uKHN1KXtcbiAgaWYoIWlzU3Uoc3UpKXtcbiAgICBzdSA9IG1ha2VTdShzdSk7XG4gIH1cblxuICBsZXQgYSA9IHRoaXM7XG4gIGxldCBiID0gc3U7XG5cbiAgY29uc3QgYXJyX2EgPSBhLmdldERpdmlzb3JzKCk7XG4gIGlmKGEuaXNFcXVhbChiKSl7XG4gICAgcmV0dXJuIGFycl9hO1xuICB9XG4gIGNvbnN0IGFycl9iID0gYi5nZXREaXZpc29ycygpO1xuXG4gIGNvbnN0IGRpdnMgPSBbXTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyX2EubGVuZ3RoOyBpKyspe1xuICAgIGxldCBlbG1fYSA9IGFycl9hW2ldO1xuICAgIGZvcihsZXQgaiA9IDA7IGogPCBhcnJfYi5sZW5ndGg7IGorKyl7XG4gICAgICBsZXQgZWxtX2IgPSBhcnJfYltqXTtcbiAgICAgIGlmKGVsbV9hLmlzRXF1YWwoZWxtX2IpKXtcbiAgICAgICAgZGl2cy5wdXNoKGVsbV9hKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGl2cztcbn07XG5cblN1LnByb3RvdHlwZS5nZXRNYXhDb21tb25EaXZpc29yID0gZnVuY3Rpb24oc3Upe1xuICBpZighaXNTdShzdSkpe1xuICAgIHN1ID0gbWFrZVN1KHN1KTtcbiAgfVxuICBjb25zdCBhcnIgPSB0aGlzLmdldENvbW1vbkRpdmlzb3JzKHN1KTtcbiAgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG59O1xuXG5TdS5wcm90b3R5cGUubXVsdGlwbGUgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gW3RoaXNdO1xuICB9XG4gIGNvbnN0IGFyciA9IFtdO1xuICBsZXQgY291bnQgPSBtYWtlU3UoXCIxXCIpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKENPTlNUQU5UUy5NQVgpIHx8IGNvdW50LmlzRXF1YWwoQ09OU1RBTlRTLk1BWCkpe1xuICAgIGFyci5wdXNoKHRoaXMubXVsdGlwbGljYXRpb24oY291bnQpKTtcbiAgICBjb3VudCA9IGNvdW50LmFkZChtYWtlU3UoXCIxXCIpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmdldExlYXN0Q29tbW9uTXVsdGlwbGUgPSBmdW5jdGlvbihzdSl7XG4gIGlmKCFpc1N1KHN1KSl7XG4gICAgc3UgPSBtYWtlU3Uoc3UpO1xuICB9XG5cbiAgY29uc3QgYSA9IHRoaXM7XG4gIGNvbnN0IGIgPSBzdTtcblxuICBjb25zdCBtYXhDb21tb25EaXZpc29yID0gYS5nZXRNYXhDb21tb25EaXZpc29yKGIpO1xuXG4gIGNvbnN0IG11bHRpID0gYS5tdWx0aXBseShiKTtcblxuICBjb25zdCByZXMgPSBtdWx0aS5kaXZpc2lvbihtYXhDb21tb25EaXZpc29yKTtcblxuICByZXR1cm4gcmVzO1xuXG59O1xuXG5cbmNvbnN0IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSA9IGZ1bmN0aW9uKGEsIGIpe1xuXG4gIGlmKCFpc1N1KGEpIHx8ICFpc1N1KGIpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBNQVggPSBDT05TVEFOVFMuTUFYO1xuXG4gIGNvbnN0IGFyciA9IFthLCBiXTtcbiAgY29uc3QgZnVuYyA9IGZ1bmN0aW9uKGFycil7XG4gICAgaWYoYXJyW2Fyci5sZW5ndGggLSAxXS5pc0xhcmdlKE1BWCkpe1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgY29uc3QgYSA9IGFyclthcnIubGVuZ3RoIC0gMl07XG4gICAgY29uc3QgYiA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYyA9IGEuYWRkKGIpO1xuICAgIGFyci5wdXNoKGMpO1xuICAgIHJldHVybiBmdW5jKGFycik7XG4gIH07XG4gIHJldHVybiBmdW5jKGFycik7XG59O1xuXG5cbmNvbnN0IG1ha2VMdWNhc1NlcXVlbmNlID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG1ha2VGaWJvbmFjY2lTZXF1ZW5jZShtYWtlU3UoMiksIG1ha2VTdSgxKSk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNGaWJvbmFjY2lOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG5cbiAgY29uc3QgZmlicyA9IG1ha2VGaWJvbmFjY2lTZXF1ZW5jZSh6ZXJvLCBvbmUpO1xuICBmb3IobGV0IGkgPSAwOyBpIDwgZmlicy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IGYgPSBmaWJzW2ldO1xuICAgIGlmKGYuaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTHVjYXNOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbHVjcyA9IG1ha2VMdWNhc1NlcXVlbmNlKCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBsdWNzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZiA9IGx1Y3NbaV07XG4gICAgaWYoZi5pc0VxdWFsKG4pKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbmNvbnN0IG1ha2VTZXF1ZW5jZSA9IGZ1bmN0aW9uKGZpcnN0LCBvdGhlcnMpe1xuICBjb25zdCBhcnJheSA9IFtmaXJzdF07XG4gIGlmKCFvdGhlcnMpe1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuICBmb3IobGV0IGkgPSAwOyBpIDwgb3RoZXJzLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgZWxtID0gb3RoZXJzW2ldO1xuICAgIGlmKCFpc1N1KGVsbSkpe1xuICAgICAgZWxtID0gbWFrZVN1KGVsbSk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goZWxtKTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cblN1LnByb3RvdHlwZS5nZXRTZXF1ZW5jZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbn07XG5cblN1LnByb3RvdHlwZS5zdW1tYXRpb24gPSBmdW5jdGlvbigpe1xuICBjb25zdCBhcnIgPSBtYWtlU2VxdWVuY2UodGhpcywgYXJndW1lbnRzKTtcbiAgbGV0IHN1bSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgc3VtID0gc3VtLmFkZChhcnJbaV0pO1xuICB9XG4gIHJldHVybiBzdW07XG59O1xuXG5TdS5wcm90b3R5cGUuaW5maW5pdGVQcm9kdWN0ID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gbWFrZVNlcXVlbmNlKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGxldCBpcCA9IGFyclswXTtcbiAgZm9yKGxldCBpID0gMTsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgaXAgPSBpcC5tdWx0aXBsaWNhdGlvbihhcnJbaV0pO1xuICB9XG4gIHJldHVybiBpcDtcbn07XG5cblN1LnByb3RvdHlwZS5kaWdpdHN1bSA9IGZ1bmN0aW9uKCl7XG4gIGxldCBzdW0gPSBtYWtlU3UoMCk7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmludGVnZXIubGVuZ3RoOyBpKyspe1xuICAgIGxldCBhID0gbWFrZVN1KHRoaXMuaW50ZWdlcltpXSk7XG4gICAgc3VtID0gc3VtLmFkZChhKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufTtcblxuU3UucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLmV4cG9uZW50aWF0ZShtYWtlU3UoMikpO1xufTtcblxuU3UucHJvdG90eXBlLmN1YmUgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5leHBvbmVudGlhdGUobWFrZVN1KDMpKTtcbn07XG5cblN1LnByb3RvdHlwZS5leHBvbmVudGlhdGUgPSBmdW5jdGlvbihzdSl7XG4gIGNvbnN0IG9uZSA9IG1ha2VTdShcIjFcIik7XG4gIGlmKHN1LmlzWmVybygpKXtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGlmKHN1LmlzRXF1YWwob25lKSl7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgbGV0IGNvdW50ID0gb25lO1xuICBsZXQgcmVzID0gY29weVN1KHRoaXMpO1xuICB3aGlsZShjb3VudC5pc1NtYWxsKHN1KSl7XG4gICAgcmVzID0gdGhpcy5tdWx0aXBsaWNhdGlvbihyZXMpO1xuICAgIGNvdW50ID0gY291bnQubmV4dCgpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGlmKHRoaXMuY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKHRoaXMuaXNPbmUoKSB8fCB0aGlzLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYodGhpcy5nZXRTdHJpbmcoKSA9PT0gXCIyXCIpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCBvbmUgPSBtYWtlU3UoMSk7XG4gIHdoaWxlKGNvdW50ZXIuaXNMYXJnZShvbmUpKXtcbiAgICBsZXQgZSA9IHRoaXMuZGl2aXNpb24oY291bnRlcik7XG4gICAgaWYoZS5yZW1haW5kZXIuaXNaZXJvKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuU3UucHJvdG90eXBlLmRpdmlzb3JzU3VtbWF0aW9uID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgYXJyID0gdGhpcy5nZXREaXZpc29ycygpO1xuICBsZXQgYSA9IG1ha2VTdSgwKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgYSA9IGEuYWRkKGFycltpXSk7XG4gIH1cbiAgcmV0dXJuIGE7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNBYnVuZGFudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzTGFyZ2UoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc0RlZmljaWVudE51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1bSA9IHRoaXMuZGl2aXNvcnNTdW1tYXRpb24oKTtcbiAgaWYoc3VtLmlzU21hbGwoIHRoaXMubXVsdGlwbGljYXRpb24obWFrZVN1KDIpKSkpe1xuICAgIHJldHVybiB0cnVlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cblN1LnByb3RvdHlwZS5pc1BlcmZlY3ROdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdW0gPSB0aGlzLmRpdmlzb3JzU3VtbWF0aW9uKCk7XG4gIGlmKHN1bS5zdWJ0cmFjdCh0aGlzKS5pc0VxdWFsKHRoaXMpKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5TdS5wcm90b3R5cGUuZmFjdG9yaWFsID0gZnVuY3Rpb24oKXtcbiAgbGV0IHJlcyA9IHRoaXM7XG4gIGxldCBjb3VudGVyID0gdGhpcy5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICBjb25zdCB6ZXJvID0gbWFrZVN1KDApO1xuICB3aGlsZShjb3VudGVyLmlzTGFyZ2UoemVybykpe1xuICAgIHJlcyA9IHJlcy5tdWx0aXBsaWNhdGlvbihjb3VudGVyKTtcbiAgICBjb3VudGVyID0gY291bnRlci5zdWJ0cmFjdChtYWtlU3UoMSkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBtYWtlUG9seWdvbmFsTnVtYmVycyA9IGZ1bmN0aW9uKG4sIG1heCl7XG4gIGlmKCFpc1N1KG4pKXtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYobi5pc1NtYWxsKG1ha2VTdSgzKSkpe1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBsZXQgY3VycmVudCA9IG1ha2VTdSgxKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCByYW5nZSA9IGN1cnJlbnQ7XG5cbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0IGluY3JlbWVudCA9IG4uc3VidHJhY3QobWFrZVN1KDIpKTtcbiAgd2hpbGUoY3VycmVudC5pc1NtYWxsKG1heCkpe1xuICAgIGFyci5wdXNoKGN1cnJlbnQpO1xuICAgIHJhbmdlID0gcmFuZ2UuYWRkKGluY3JlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQuYWRkKHJhbmdlKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZVRyaWFuZ2xlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoMyksIG1heCk7XG59O1xuXG5jb25zdCBtYWtlU3F1YXJlTnVtYmVycyA9IGZ1bmN0aW9uKG1heCl7XG4gIHJldHVybiBtYWtlUG9seWdvbmFsTnVtYmVycyhtYWtlU3UoNCksIG1heCk7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNUcmlhbmdsZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IHN1ID0gdGhpcztcbiAgY29uc3QgYXJyID0gbWFrZVRyaWFuZ2xlTnVtYmVycyhzdSk7XG4gIGNvbnN0IHJlcyA9IGFyci5maW5kKGVsbSA9PntcbiAgICByZXR1cm4gZWxtLmlzRXF1YWwoc3UpO1xuICB9KTtcbiAgaWYocmVzKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5TdS5wcm90b3R5cGUuaXNTcXVhcmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBzdSA9IHRoaXM7XG4gIGNvbnN0IGFyciA9IG1ha2VTcXVhcmVOdW1iZXJzKHN1KTtcbiAgY29uc3QgcmVzID0gYXJyLmZpbmQoZWxtID0+e1xuICAgIHJldHVybiBlbG0uaXNFcXVhbChzdSk7XG4gIH0pO1xuICBpZihyZXMpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1ha2VNZXJzZW5uZU51bWJlcnMgPSBmdW5jdGlvbihtYXgpe1xuICBpZighbWF4KXtcbiAgICBtYXggPSBDT05TVEFOVFMuTUFYO1xuICB9ZWxzZXtcbiAgICBtYXggPSBtYXgubmV4dCgpO1xuICB9XG4gIGNvbnN0IHR3byA9IG1ha2VTdSgyKTtcbiAgY29uc3QgYXJyID0gW107XG4gIGxldCBjdXJyZW50ID0gbWFrZVN1KDApO1xuICBsZXQgZXggPSBtYWtlU3UoMSk7XG4gIFxuICB3aGlsZShjdXJyZW50LmlzU21hbGwobWF4KSl7XG4gICAgY3VycmVudCA9IHR3by5leHBvbmVudGlhdGUoZXgpLnN1YnRyYWN0KG1ha2VTdSgxKSk7XG4gICAgYXJyLnB1c2goY3VycmVudCk7XG4gICAgZXggPSBleC5hZGQobWFrZVN1KDEpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgbWFrZU1lcnNlbm5lUHJpbWVOdW1iZXJzID0gZnVuY3Rpb24obWF4KXtcbiAgaWYoIW1heCl7XG4gICAgbWF4ID0gQ09OU1RBTlRTLk1BWDtcbiAgfWVsc2V7XG4gICAgbWF4ID0gbWF4Lm5leHQoKTtcbiAgfVxuICBjb25zdCBtYXJyID0gbWFrZU1lcnNlbm5lTnVtYmVycyhtYXgpO1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1hcnIubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IG4gPSBtYXJyW2ldO1xuICAgIGlmKG4uaXNQcmltZU51bWJlcigpKXtcbiAgICAgIGFyci5wdXNoKG4pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVOdW1iZXIgPSBmdW5jdGlvbigpe1xuICBjb25zdCBuID0gdGhpcztcbiAgaWYobi5pc1plcm8oKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmKG4uY29udGFpbkRlY2ltYWwoKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1zID0gbWFrZU1lcnNlbm5lTnVtYmVycyhuKTtcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1zLmxlbmd0aDsgaSsrKXtcbiAgICBsZXQgbSA9IG1zW2ldO1xuICAgIGlmKG0uaXNFcXVhbChuKSl7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU3UucHJvdG90eXBlLmlzTWVyc2VubmVQcmltZU51bWJlciA9IGZ1bmN0aW9uKCl7XG4gIGNvbnN0IG4gPSB0aGlzO1xuICBpZihuLmlzWmVybygpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYobi5jb250YWluRGVjaW1hbCgpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbXMgPSBtYWtlTWVyc2VubmVQcmltZU51bWJlcnMobik7XG4gIGZvcihsZXQgaSA9IDA7IGkgPCBtcy5sZW5ndGg7IGkrKyl7XG4gICAgbGV0IG0gPSBtc1tpXTtcbiAgICBpZihtLmlzRXF1YWwobikpe1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtYWtlU3U6IG1ha2VTdSxcbiAgY29weVN1OiBjb3B5U3UsXG4gIGlzU3U6IGlzU3UsXG4gIFN1OiBTdVxufTsiXSwic291cmNlUm9vdCI6IiJ9